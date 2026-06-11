/* ==========================================================================
   Corpus — Interactive 3D anatomical model
   A multi-layer model built in Three.js: a clickable skeleton (individual
   bones), the major viscera in anatomical position, the CNS, and a skin
   layer. Each structure links to its atlas entry. Toggle layers with the
   chips above the model.
   ========================================================================== */

(function () {
  "use strict";

  if (!window.THREE || !window.Corpus) return;

  var T = window.THREE;

  var PALETTE = {
    bg: 0xeef2f5,
    ground: 0xdde4e9,
    bone: 0xe9e2d0,
    boneDark: 0xddd4be,
    cord: 0xf0e1a8,
    brain: 0xe7b9b0,
    selected: 0x2f9b8a,
    hover: 0x0e7a6c,
    skin: 0xd8c1ac
  };

  var SYSTEM_ORDER = ["skeletal", "muscular", "cardiovascular", "nervous", "organs"];

  // Layers the user can toggle. Order = chip order.
  var LAYERS = [
    { key: "skeleton", label: "🦴 Skeleton", on: true },
    { key: "organs", label: "🫀 Organs", on: false },
    { key: "nervous", label: "🧠 Brain & cord", on: false },
    { key: "skin", label: "🧍 Skin", on: false }
  ];

  var initialized = false;
  var scene, camera, renderer, controls, raycaster, pointerVec;
  var stage, tooltip, panel;
  var groups = {};           // layer key -> THREE.Group
  var layerOn = {};          // layer key -> bool
  var parts = [];            // all clickable meshes
  var hovered = null;
  var downPos = null;

  /* ---------- Geometry helpers ---------- */

  function mat(color, opts) {
    opts = opts || {};
    return new T.MeshStandardMaterial({
      color: color,
      roughness: opts.rough != null ? opts.rough : 0.6,
      metalness: 0.04,
      transparent: !!opts.opacity,
      opacity: opts.opacity != null ? opts.opacity : 1,
      depthWrite: opts.opacity ? false : true,
      flatShading: !!opts.flat
    });
  }

  function register(mesh, layer, label, region, entryId) {
    mesh.userData = {
      layer: layer, label: label, region: region, entryId: entryId || null,
      baseColor: mesh.material.color.getHex()
    };
    parts.push(mesh);
    groups[layer].add(mesh);
    return mesh;
  }

  function sphere(group, color, center, scale, label, region, entryId, opts) {
    var m = new T.Mesh(new T.SphereGeometry(1, 26, 20), mat(color, opts));
    m.position.fromArray(center);
    m.scale.set(scale[0], scale[1], scale[2]);
    return register(m, group, label, region, entryId);
  }

  function box(group, color, center, size, label, region, entryId, opts) {
    var m = new T.Mesh(new T.BoxGeometry(size[0], size[1], size[2]), mat(color, opts));
    m.position.fromArray(center);
    return register(m, group, label, region, entryId);
  }

  // A capsule/bone between two points.
  function bone(group, color, from, to, radius, label, region, entryId, opts) {
    var a = new T.Vector3().fromArray(from);
    var b = new T.Vector3().fromArray(to);
    var dir = new T.Vector3().subVectors(b, a);
    var len = dir.length();
    var m = new T.Mesh(new T.CapsuleGeometry(radius, len, 6, 14), mat(color, opts));
    m.position.copy(a).addScaledVector(dir, 0.5);
    m.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), dir.clone().normalize());
    return register(m, group, label, region, entryId);
  }

  // A cylinder between two points (flat ends), for long bones with epiphyses.
  function shaft(group, color, from, to, rTop, rBot, label, region, entryId) {
    var a = new T.Vector3().fromArray(from);
    var b = new T.Vector3().fromArray(to);
    var dir = new T.Vector3().subVectors(b, a);
    var len = dir.length();
    var m = new T.Mesh(new T.CylinderGeometry(rTop, rBot, len, 16), mat(color));
    m.position.copy(a).addScaledVector(dir, 0.5);
    m.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), dir.clone().normalize());
    return register(m, group, label, region, entryId);
  }

  /* ---------- Build: Skeleton ---------- */
  // Patient's right = -x (the side toward the viewer's left), anatomical position.

  function buildSkeleton() {
    var c = PALETTE.bone, d = PALETTE.boneDark;

    // Skull (cranium) and mandible
    sphere("skeleton", c, [0, 1.60, 0.005], [0.10, 0.115, 0.105], "Skull (cranium)", "head-neck");
    box("skeleton", d, [0, 1.515, 0.04], [0.13, 0.05, 0.10], "Mandible", "head-neck", "mandible");

    // Vertebral column — stacked centra
    function stack(yTop, yBot, n, r, label, region, entryId) {
      for (var i = 0; i < n; i++) {
        var y = yTop - (yTop - yBot) * (i / (n - 1));
        sphere("skeleton", d, [0, y, -0.05], [r, (yTop - yBot) / n * 0.55, r], label, region, entryId);
      }
    }
    stack(1.50, 1.44, 5, 0.026, "Cervical vertebrae (C1–C7)", "spine-back", "cervical-vertebrae");
    stack(1.42, 1.16, 8, 0.030, "Thoracic vertebrae (T1–T12)", "spine-back", "thoracic-vertebrae");
    stack(1.14, 1.00, 5, 0.036, "Lumbar vertebrae (L1–L5)", "spine-back", "lumbar-vertebrae");
    box("skeleton", c, [0, 0.96, -0.05], [0.07, 0.09, 0.05], "Sacrum", "spine-back", "sacrum");

    // Ribcage — rib rings open at the front
    for (var i = 0; i < 9; i++) {
      var t = i / 8;
      var y = 1.40 - t * 0.22;
      var R = 0.085 + Math.sin(t * Math.PI) * 0.075;
      var ring = new T.Mesh(new T.TorusGeometry(R, 0.006, 8, 28, Math.PI * 1.55), mat(c));
      ring.rotation.x = Math.PI / 2;
      ring.rotation.z = Math.PI * 0.72;
      ring.position.set(0, y, -0.03);
      ring.scale.z = 0.78;
      register(ring, "skeleton", "Ribs", "thorax", "true-ribs");
    }
    box("skeleton", c, [0, 1.30, 0.12], [0.035, 0.17, 0.02], "Sternum", "thorax", "sternum");

    // Pectoral girdle
    [1, -1].forEach(function (s) {
      bone("skeleton", c, [0.02 * s, 1.45, 0.10], [0.17 * s, 1.43, 0.0], 0.012, "Clavicle", "upper-limb", "clavicle");
      var scap = box("skeleton", d, [0.13 * s, 1.33, -0.07], [0.09, 0.13, 0.015], "Scapula", "upper-limb", "scapula");
      scap.rotation.y = -0.3 * s;

      // Upper limb long bones
      shaft("skeleton", c, [0.19 * s, 1.42, 0], [0.235 * s, 1.16, 0], 0.022, 0.018, "Humerus", "upper-limb", "humerus");
      shaft("skeleton", c, [0.245 * s, 1.13, 0.01], [0.275 * s, 0.89, 0.02], 0.014, 0.012, "Radius", "upper-limb", "radius");
      shaft("skeleton", c, [0.225 * s, 1.13, -0.01], [0.255 * s, 0.89, 0], 0.013, 0.011, "Ulna", "upper-limb", "ulna");
      // Hand
      sphere("skeleton", d, [0.275 * s, 0.80, 0.02], [0.035, 0.05, 0.018], "Carpals, metacarpals & phalanges", "upper-limb");

      // Pelvis (hip bone)
      var hip = sphere("skeleton", c, [0.07 * s, 0.945, -0.01], [0.075, 0.075, 0.06], "Hip bone (os coxae)", "abdomen-pelvis", "hip-bone");
      hip.rotation.z = 0.3 * s;

      // Lower limb long bones
      shaft("skeleton", c, [0.085 * s, 0.92, 0], [0.10 * s, 0.50, 0], 0.027, 0.020, "Femur", "lower-limb", "femur");
      sphere("skeleton", d, [0.105 * s, 0.49, 0.03], [0.025, 0.025, 0.022], "Patella", "lower-limb", "patella");
      shaft("skeleton", c, [0.10 * s, 0.47, 0], [0.105 * s, 0.12, 0.005], 0.020, 0.015, "Tibia", "lower-limb", "tibia");
      shaft("skeleton", c, [0.125 * s, 0.47, 0], [0.12 * s, 0.12, 0], 0.010, 0.009, "Fibula", "lower-limb", "fibula");
      // Foot
      var foot = box("skeleton", d, [0.105 * s, 0.05, 0.06], [0.05, 0.04, 0.16], "Tarsals, metatarsals & phalanges", "lower-limb");
      foot.position.z = 0.06;
    });
  }

  /* ---------- Build: Organs ---------- */

  function buildOrgans() {
    // Heart — slightly left of midline, apex to the patient's left (+x)
    var heart = sphere("organs", 0xb23b46, [0.025, 1.27, 0.06], [0.045, 0.05, 0.045], "Heart", "thorax", "heart");
    heart.rotation.z = 0.5;
    // Lungs
    sphere("organs", 0xd98c93, [-0.075, 1.31, 0.02], [0.058, 0.10, 0.06], "Lungs", "thorax", "lungs", { opacity: 0.95 });
    sphere("organs", 0xd98c93, [0.075, 1.31, 0.02], [0.052, 0.10, 0.06], "Lungs", "thorax", "lungs", { opacity: 0.95 });
    // Trachea
    bone("organs", 0xc98a86, [0, 1.50, 0.05], [0, 1.37, 0.04], 0.012, "Trachea", "thorax", "trachea");
    // Thyroid
    sphere("organs", 0x9d4b4b, [0, 1.45, 0.07], [0.03, 0.022, 0.022], "Thyroid gland", "head-neck", "thyroid-gland");

    // Liver — patient's right (-x), under the diaphragm
    var liver = sphere("organs", 0x8a4b3c, [-0.05, 1.135, 0.05], [0.085, 0.05, 0.07], "Liver", "abdomen-pelvis", "liver");
    liver.rotation.z = 0.2;
    // Stomach — patient's left (+x)
    var stomach = sphere("organs", 0xc06a55, [0.05, 1.14, 0.06], [0.05, 0.045, 0.04], "Stomach", "abdomen-pelvis", "stomach");
    stomach.rotation.z = -0.5;
    // Spleen — far left, posterior
    sphere("organs", 0x7a3a4a, [0.10, 1.16, -0.02], [0.03, 0.035, 0.028], "Spleen", "abdomen-pelvis", "spleen");
    // Pancreas — transverse
    var panc = box("organs", 0xc7a06a, [0.0, 1.11, 0.0], [0.10, 0.022, 0.025], "Pancreas", "abdomen-pelvis", "pancreas");
    panc.rotation.z = 0.25;
    // Kidneys — retroperitoneal, right slightly lower
    sphere("organs", 0x6e4636, [-0.07, 1.08, -0.05], [0.028, 0.045, 0.03], "Kidneys", "abdomen-pelvis", "kidneys");
    sphere("organs", 0x6e4636, [0.07, 1.10, -0.05], [0.028, 0.045, 0.03], "Kidneys", "abdomen-pelvis", "kidneys");
    // Small intestine — central lower abdomen
    sphere("organs", 0xcf8f6e, [0, 1.01, 0.05], [0.075, 0.06, 0.06], "Small intestine", "abdomen-pelvis", "jejunum");
    // Large intestine — frames the small intestine
    var colon = new T.Mesh(new T.TorusGeometry(0.072, 0.018, 10, 28, Math.PI * 1.7), mat(0xb98a5e, { opacity: 0.97 }));
    colon.position.set(0, 1.02, 0.04);
    colon.rotation.z = Math.PI * 0.15;
    register(colon, "organs", "Large intestine (colon)", "abdomen-pelvis", "colon");
    // Bladder — pelvis
    sphere("organs", 0xc9a86a, [0, 0.93, 0.06], [0.03, 0.028, 0.028], "Urinary bladder", "abdomen-pelvis", "urinary-bladder");
  }

  /* ---------- Build: Nervous (CNS) ---------- */

  function buildNervous() {
    // Cerebrum — fills the cranium
    sphere("nervous", PALETTE.brain, [0, 1.61, 0.01], [0.085, 0.085, 0.092], "Cerebrum", "head-neck", "cerebrum");
    // Cerebellum — posterior-inferior
    sphere("nervous", 0xd6a59c, [0, 1.555, -0.06], [0.045, 0.035, 0.04], "Cerebellum", "head-neck", "cerebellum");
    // Brainstem
    bone("nervous", 0xe0c79a, [0, 1.555, -0.02], [0, 1.49, -0.03], 0.018, "Brainstem", "head-neck", "midbrain");
    // Spinal cord — runs down the vertebral canal
    bone("nervous", PALETTE.cord, [0, 1.49, -0.045], [0, 1.00, -0.05], 0.013, "Spinal cord", "spine-back", "spinal-cord");
  }

  /* ---------- Build: Skin ---------- */

  function buildSkin() {
    var o = { opacity: 0.28, rough: 0.9 };
    var c = PALETTE.skin;
    sphere("skin", c, [0, 1.60, 0.005], [0.115, 0.13, 0.12], "Skin", "head-neck", "skin", o);
    bone("skin", c, [0, 1.46, 0], [0, 1.53, 0], 0.05, "Skin", "head-neck", "skin", o);
    bone("skin", c, [0, 1.16, 0], [0, 1.42, 0], 0.17, "Skin", "thorax", "skin", o);
    bone("skin", c, [0, 0.96, 0], [0, 1.14, 0], 0.15, "Skin", "abdomen-pelvis", "skin", o);
    bone("skin", c, [0, 0.88, 0], [0, 1.00, 0], 0.165, "Skin", "abdomen-pelvis", "skin", o);
    [1, -1].forEach(function (s) {
      bone("skin", c, [0.18 * s, 1.43, 0], [0.25 * s, 1.13, 0], 0.06, "Skin", "upper-limb", "skin", o);
      bone("skin", c, [0.25 * s, 1.13, 0], [0.285 * s, 0.80, 0.02], 0.05, "Skin", "upper-limb", "skin", o);
      bone("skin", c, [0.09 * s, 0.92, 0], [0.105 * s, 0.49, 0], 0.085, "Skin", "lower-limb", "skin", o);
      bone("skin", c, [0.105 * s, 0.49, 0], [0.11 * s, 0.10, 0], 0.06, "Skin", "lower-limb", "skin", o);
    });
  }

  /* ---------- Scene ---------- */

  function init() {
    stage = document.getElementById("body3d-stage");
    tooltip = document.getElementById("body3d-tooltip");
    panel = document.getElementById("body3d-panel");

    buildToolbar();

    scene = new T.Scene();
    scene.background = new T.Color(PALETTE.bg);

    camera = new T.PerspectiveCamera(35, 1, 0.1, 50);
    camera.position.set(0.85, 1.4, 3.0);

    renderer = new T.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    stage.appendChild(renderer.domElement);

    scene.add(new T.HemisphereLight(0xffffff, 0x97a8b5, 0.95));
    var sun = new T.DirectionalLight(0xffffff, 0.65);
    sun.position.set(2.5, 4, 3);
    scene.add(sun);
    var fill = new T.DirectionalLight(0xffffff, 0.28);
    fill.position.set(-2.5, 2, -3);
    scene.add(fill);

    var ground = new T.Mesh(new T.CircleGeometry(0.9, 48), mat(PALETTE.ground, { rough: 1 }));
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    LAYERS.forEach(function (l) {
      groups[l.key] = new T.Group();
      layerOn[l.key] = l.on;
      groups[l.key].visible = l.on;
      scene.add(groups[l.key]);
    });

    buildSkeleton();
    buildOrgans();
    buildNervous();
    buildSkin();

    controls = new T.OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1.05, 0);
    controls.enablePan = false;
    controls.minDistance = 0.9;
    controls.maxDistance = 5;
    controls.maxPolarAngle = Math.PI * 0.62;
    controls.update();

    raycaster = new T.Raycaster();
    pointerVec = new T.Vector2();

    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerdown", function (ev) { downPos = [ev.clientX, ev.clientY]; });
    renderer.domElement.addEventListener("pointerup", function (ev) {
      if (!downPos) return;
      var moved = Math.hypot(ev.clientX - downPos[0], ev.clientY - downPos[1]);
      downPos = null;
      if (moved < 7) pick(ev);
    });
    renderer.domElement.addEventListener("pointerleave", function () {
      setHover(null);
      tooltip.style.opacity = 0;
    });

    window.addEventListener("resize", resize);
    resize();
    animate();
  }

  function buildToolbar() {
    var bar = document.createElement("div");
    bar.className = "body3d-toolbar";
    LAYERS.forEach(function (l) {
      var chip = document.createElement("button");
      chip.className = "chip chip-sm" + (l.on ? " chip-active" : "");
      chip.innerHTML = l.label;
      chip.addEventListener("click", function () {
        layerOn[l.key] = !layerOn[l.key];
        groups[l.key].visible = layerOn[l.key];
        chip.classList.toggle("chip-active", layerOn[l.key]);
      });
      bar.appendChild(chip);
    });
    stage.appendChild(bar);
  }

  function resize() {
    if (!renderer) return;
    var w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  function animate() {
    requestAnimationFrame(animate);
    if (stage.offsetParent === null) return;
    controls.update();
    renderer.render(scene, camera);
  }

  /* ---------- Interaction ---------- */

  function activeParts() {
    return parts.filter(function (p) { return layerOn[p.userData.layer]; });
  }

  function intersect(ev) {
    var rect = renderer.domElement.getBoundingClientRect();
    pointerVec.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
    pointerVec.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointerVec, camera);
    var hits = raycaster.intersectObjects(activeParts(), false);
    return hits.length ? hits[0].object : null;
  }

  function setHover(mesh) {
    if (hovered === mesh) return;
    parts.forEach(function (p) {
      var on = mesh && p.userData.label === mesh.userData.label && p.userData.layer === mesh.userData.layer;
      p.material.emissive.setHex(on ? PALETTE.hover : 0x000000);
      p.material.emissiveIntensity = on ? 0.4 : 0;
    });
    hovered = mesh;
    stage.style.cursor = mesh ? "pointer" : "grab";
  }

  function onPointerMove(ev) {
    if (downPos) return;
    var mesh = intersect(ev);
    setHover(mesh);
    if (mesh) {
      var rect = stage.getBoundingClientRect();
      tooltip.textContent = mesh.userData.label;
      tooltip.style.left = (ev.clientX - rect.left) + "px";
      tooltip.style.top = (ev.clientY - rect.top) + "px";
      tooltip.style.opacity = 1;
    } else {
      tooltip.style.opacity = 0;
    }
  }

  function pick(ev) {
    var mesh = intersect(ev);
    if (!mesh) return;
    var u = mesh.userData;
    highlightRegion(u.region);
    renderPanel(u.region, u.label, u.entryId);
    if (u.entryId) {
      var entry = window.Corpus.data.filter(function (e) { return e.id === u.entryId; })[0];
      if (entry) window.Corpus.openEntry(entry);
    }
  }

  function highlightRegion(region) {
    parts.forEach(function (p) {
      p.material.color.setHex(p.userData.region === region ? PALETTE.selected : p.userData.baseColor);
    });
  }

  /* ---------- Panel ---------- */

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderPanel(region, partLabel, activeId) {
    var Corpus = window.Corpus;
    var entries = Corpus.data.filter(function (e) { return e.region === region; });
    var regionName = Corpus.regions[region] || region;

    var html =
      '<div class="body3d-panel-head">' +
        '<span class="tag tag-region">' + esc(partLabel) + "</span>" +
        "<h2>" + esc(regionName) + "</h2>" +
        '<p class="body3d-panel-sub">' + entries.length + " structures in this region</p>" +
      "</div>";

    SYSTEM_ORDER.forEach(function (sysKey, i) {
      var sys = Corpus.systems[sysKey];
      var list = entries.filter(function (e) { return e.system === sysKey; });
      if (!list.length) return;
      var hasActive = activeId && list.some(function (e) { return e.id === activeId; });
      html += '<details class="body3d-group"' + (i === 0 || hasActive ? " open" : "") + ">" +
        '<summary><span class="body3d-dot" style="background:' + sys.color + '"></span>' +
        esc(sys.label) + ' <span class="body3d-group-count">' + list.length + "</span></summary>" +
        '<div class="body3d-list">';
      list.forEach(function (e) {
        html += '<button class="body3d-item' + (e.id === activeId ? " body3d-item-active" : "") +
          '" data-id="' + esc(e.id) + '">' +
          "<strong>" + esc(e.name) + "</strong>" +
          '<span class="body3d-item-latin">' + esc(e.latin || "") + "</span>" +
          "</button>";
      });
      html += "</div></details>";
    });

    html += '<button class="btn btn-ghost body3d-browse" data-region="' + esc(region) + '">Browse this region in the atlas &rarr;</button>';

    panel.innerHTML = html;
    panel.scrollTop = 0;

    panel.querySelectorAll(".body3d-item").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var entry = entries.filter(function (e) { return e.id === btn.dataset.id; })[0];
        if (entry) Corpus.openEntry(entry);
      });
    });
    panel.querySelector(".body3d-browse").addEventListener("click", function () {
      Corpus.browseRegion(region);
    });
  }

  /* ---------- Public API ---------- */

  window.Body3D = {
    activate: function () {
      if (!initialized) { initialized = true; init(); }
      else resize();
    }
  };
})();
