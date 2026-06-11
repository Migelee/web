/* ==========================================================================
   Corpus — Interactive 3D body
   A clickable humanoid model built from Three.js primitives. Each body part
   maps to an atlas region; clicking it lists that region's structures.
   ========================================================================== */

(function () {
  "use strict";

  if (!window.THREE || !window.Corpus) return;

  var COLORS = {
    base: 0xb7c6d1,
    baseBack: 0xa9bac6,
    selected: 0x2f9b8a,
    hoverEmissive: 0x0e7a6c,
    bg: 0xeef2f5,
    ground: 0xdde4e9
  };

  var SYSTEM_ORDER = ["skeletal", "muscular", "cardiovascular", "nervous", "organs"];

  var initialized = false;
  var scene, camera, renderer, controls, raycaster, pointerVec;
  var stage, tooltip, panel;
  var parts = [];            // all clickable meshes
  var hovered = null;
  var selectedRegion = null;
  var downPos = null;

  /* ---------- Mesh builders ---------- */

  function material(color) {
    return new THREE.MeshStandardMaterial({
      color: color || COLORS.base,
      roughness: 0.55,
      metalness: 0.05
    });
  }

  function tag(mesh, label, region) {
    mesh.userData.label = label;
    mesh.userData.region = region;
    mesh.userData.baseColor = mesh.material.color.getHex();
    parts.push(mesh);
    scene.add(mesh);
    return mesh;
  }

  // Capsule between two points, used for limbs and torso segments.
  function capsulePart(from, to, radius, label, region, flatten) {
    var a = new THREE.Vector3().fromArray(from);
    var b = new THREE.Vector3().fromArray(to);
    var dir = new THREE.Vector3().subVectors(b, a);
    var len = dir.length();
    var mesh = new THREE.Mesh(new THREE.CapsuleGeometry(radius, len, 8, 20), material());
    mesh.position.copy(a).addScaledVector(dir, 0.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    if (flatten) mesh.scale.z = flatten;
    return tag(mesh, label, region);
  }

  function spherePart(center, radius, scale, label, region) {
    var mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 28, 22), material());
    mesh.position.fromArray(center);
    if (scale) mesh.scale.set(scale[0], scale[1], scale[2]);
    return tag(mesh, label, region);
  }

  function buildFigure() {
    // Head & neck
    spherePart([0, 1.615, 0], 0.105, [1, 1.18, 1.08], "Head & skull", "head-neck");
    capsulePart([0, 1.46, 0], [0, 1.535, 0], 0.048, "Neck", "head-neck");

    // Torso
    capsulePart([0, 1.20, 0], [0, 1.40, 0], 0.155, "Thorax", "thorax", 0.72);
    capsulePart([0, 1.04, 0], [0, 1.16, 0], 0.13, "Abdomen", "abdomen-pelvis", 0.75);
    capsulePart([0, 0.91, 0], [0, 1.00, 0], 0.15, "Pelvis & hip", "abdomen-pelvis", 0.8);

    // Spine ridge on the back (visible when rotated)
    capsulePart([0, 0.96, -0.10], [0, 1.44, -0.095], 0.038, "Vertebral column & back", "spine-back");

    [1, -1].forEach(function (s) {
      // Upper limb
      spherePart([0.185 * s, 1.415, 0], 0.062, null, "Shoulder & arm", "upper-limb");
      capsulePart([0.21 * s, 1.40, 0], [0.245 * s, 1.14, 0], 0.052, "Shoulder & arm", "upper-limb");
      capsulePart([0.245 * s, 1.14, 0], [0.27 * s, 0.885, 0], 0.043, "Forearm & elbow", "upper-limb");
      capsulePart([0.275 * s, 0.87, 0], [0.285 * s, 0.73, 0], 0.042, "Wrist & hand", "upper-limb", 0.6);

      // Lower limb
      capsulePart([0.095 * s, 0.92, 0], [0.105 * s, 0.50, 0], 0.075, "Thigh", "lower-limb");
      capsulePart([0.105 * s, 0.50, 0], [0.11 * s, 0.13, 0], 0.052, "Leg & knee", "lower-limb");
      capsulePart([0.11 * s, 0.07, -0.02], [0.11 * s, 0.055, 0.16], 0.048, "Ankle & foot", "lower-limb");
    });
  }

  /* ---------- Scene setup ---------- */

  function init() {
    stage = document.getElementById("body3d-stage");
    tooltip = document.getElementById("body3d-tooltip");
    panel = document.getElementById("body3d-panel");

    scene = new THREE.Scene();
    scene.background = new THREE.Color(COLORS.bg);

    camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
    camera.position.set(0.9, 1.45, 3.4);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    stage.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x9aabb8, 0.95));
    var sun = new THREE.DirectionalLight(0xffffff, 0.7);
    sun.position.set(2.5, 4, 3);
    scene.add(sun);
    var fill = new THREE.DirectionalLight(0xffffff, 0.25);
    fill.position.set(-2.5, 2, -3);
    scene.add(fill);

    var ground = new THREE.Mesh(
      new THREE.CircleGeometry(1.1, 48),
      new THREE.MeshStandardMaterial({ color: COLORS.ground, roughness: 1 })
    );
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    buildFigure();

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.95, 0);
    controls.enablePan = false;
    controls.minDistance = 1.2;
    controls.maxDistance = 6;
    controls.maxPolarAngle = Math.PI * 0.62;
    controls.update();

    raycaster = new THREE.Raycaster();
    pointerVec = new THREE.Vector2();

    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerdown", function (ev) {
      downPos = [ev.clientX, ev.clientY];
    });
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
    if (stage.offsetParent === null) return; // view hidden — skip rendering
    controls.update();
    renderer.render(scene, camera);
  }

  /* ---------- Interaction ---------- */

  function intersect(ev) {
    var rect = renderer.domElement.getBoundingClientRect();
    pointerVec.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
    pointerVec.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointerVec, camera);
    var hits = raycaster.intersectObjects(parts, false);
    return hits.length ? hits[0].object : null;
  }

  function setHover(mesh) {
    if (hovered === mesh) return;
    parts.forEach(function (p) {
      var on = mesh && p.userData.label === mesh.userData.label && p.userData.region === mesh.userData.region;
      p.material.emissive.setHex(on ? COLORS.hoverEmissive : 0x000000);
      p.material.emissiveIntensity = on ? 0.35 : 0;
    });
    hovered = mesh;
    stage.style.cursor = mesh ? "pointer" : "grab";
  }

  function onPointerMove(ev) {
    if (downPos) return; // dragging — don't hover-test
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
    selectRegion(mesh.userData.region, mesh.userData.label);
  }

  function selectRegion(region, partLabel) {
    selectedRegion = region;
    parts.forEach(function (p) {
      p.material.color.setHex(p.userData.region === region ? COLORS.selected : p.userData.baseColor);
    });
    renderPanel(region, partLabel);
  }

  /* ---------- Region panel ---------- */

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderPanel(region, partLabel) {
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
      html += '<details class="body3d-group"' + (i === 0 ? " open" : "") + ">" +
        "<summary><span class=\"body3d-dot\" style=\"background:" + sys.color + '"></span>' +
        esc(sys.label) + ' <span class="body3d-group-count">' + list.length + "</span></summary>" +
        '<div class="body3d-list">';
      list.forEach(function (e) {
        html += '<button class="body3d-item" data-id="' + esc(e.id) + '">' +
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
      if (!initialized) {
        initialized = true;
        init();
      } else {
        resize();
      }
    }
  };
})();
