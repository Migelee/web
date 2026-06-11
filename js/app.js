/* ==========================================================================
   Corpus — Human Anatomy Atlas
   Application logic: data merging, search, filters, detail modal, quiz.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Data ---------- */

  var ALL = []
    .concat(window.ANATOMY_BONES || [])
    .concat(window.ANATOMY_MUSCLES || [])
    .concat(window.ANATOMY_VESSELS || [])
    .concat(window.ANATOMY_NERVES || [])
    .concat(window.ANATOMY_ORGANS || []);

  var SYSTEMS = {
    skeletal: {
      label: "Skeletal", icon: "🦴", color: "var(--c-skeletal)",
      blurb: "All 206 bones — every cranial bone, vertebra, rib, carpal and tarsal."
    },
    muscular: {
      label: "Muscular", icon: "💪", color: "var(--c-muscular)",
      blurb: "Every named muscle with origin, insertion, innervation and action."
    },
    cardiovascular: {
      label: "Cardiovascular", icon: "🩸", color: "var(--c-cardiovascular)",
      blurb: "The complete arterial tree and venous system, vessel by vessel."
    },
    nervous: {
      label: "Nervous", icon: "🧠", color: "var(--c-nervous)",
      blurb: "Cranial nerves, plexuses, peripheral nerves and CNS structures."
    },
    organs: {
      label: "Organs & Viscera", icon: "🫁", color: "var(--c-organs)",
      blurb: "Thoracic, abdominal and pelvic viscera, glands and sense organs."
    }
  };

  var REGIONS = {
    "head-neck": "Head & Neck",
    "spine-back": "Spine & Back",
    "thorax": "Thorax",
    "abdomen-pelvis": "Abdomen & Pelvis",
    "upper-limb": "Upper Limb",
    "lower-limb": "Lower Limb"
  };

  /* ---------- State ---------- */

  var state = {
    view: "atlas",
    query: "",
    system: "all",
    region: "all",
    category: "all",
    shown: 60
  };

  var PAGE_SIZE = 60;

  /* ---------- Helpers ---------- */

  function $(id) { return document.getElementById(id); }

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function searchableText(e) {
    if (!e._search) {
      var parts = [e.name, e.latin, e.description, e.category, REGIONS[e.region] || ""];
      for (var k in e.details) parts.push(k, e.details[k]);
      if (e.clinical) parts.push(e.clinical);
      e._search = parts.join(" ").toLowerCase();
    }
    return e._search;
  }

  /* ---------- Filtering ---------- */

  function filtered() {
    var q = state.query.trim().toLowerCase();
    var terms = q ? q.split(/\s+/) : [];
    return ALL.filter(function (e) {
      if (state.system !== "all" && e.system !== state.system) return false;
      if (state.region !== "all" && e.region !== state.region) return false;
      if (state.category !== "all" && e.category !== state.category) return false;
      if (terms.length) {
        var text = searchableText(e);
        for (var i = 0; i < terms.length; i++) {
          if (text.indexOf(terms[i]) === -1) return false;
        }
      }
      return true;
    });
  }

  /* ---------- Rendering: hero stats & system cards ---------- */

  function renderHeroStats() {
    var boneTotal = (window.ANATOMY_BONES || []).reduce(function (s, e) { return s + (e.count || 1); }, 0);
    var stats = [
      [boneTotal, "Bones"],
      [(window.ANATOMY_MUSCLES || []).length, "Muscles"],
      [(window.ANATOMY_VESSELS || []).length, "Vessels"],
      [(window.ANATOMY_NERVES || []).length, "Nerves & CNS"],
      [(window.ANATOMY_ORGANS || []).length, "Organs"]
    ];
    var wrap = $("hero-stats");
    wrap.innerHTML = "";
    stats.forEach(function (s) {
      wrap.appendChild(el("div", "hero-stat",
        '<span class="stat-num">' + s[0] + '</span><span class="stat-label">' + s[1] + "</span>"));
    });
  }

  function renderSystemCards() {
    var wrap = $("system-cards");
    wrap.innerHTML = "";
    Object.keys(SYSTEMS).forEach(function (key) {
      var sys = SYSTEMS[key];
      var n = ALL.filter(function (e) { return e.system === key; }).length;
      var card = el("button", "system-card",
        '<span class="sys-icon">' + sys.icon + "</span>" +
        "<h3>" + sys.label + "</h3>" +
        "<p>" + sys.blurb + "</p>" +
        '<span class="sys-count">' + n + " entries &rarr;</span>");
      card.style.setProperty("--sys-color", sys.color);
      card.addEventListener("click", function () {
        setSystem(key);
        $("system-filters").scrollIntoView({ behavior: "smooth", block: "center" });
      });
      wrap.appendChild(card);
    });
  }

  /* ---------- Rendering: filters ---------- */

  function chipRow(container, items, activeValue, onPick, small) {
    container.innerHTML = "";
    items.forEach(function (item) {
      var chip = el("button", "chip" + (small ? " chip-sm" : "") + (item.value === activeValue ? " chip-active" : ""), item.label);
      chip.addEventListener("click", function () { onPick(item.value); });
      container.appendChild(chip);
    });
  }

  function renderFilters() {
    var sysItems = [{ value: "all", label: "All systems" }].concat(
      Object.keys(SYSTEMS).map(function (k) { return { value: k, label: SYSTEMS[k].label }; }));
    chipRow($("system-filters"), sysItems, state.system, setSystem);

    var regItems = [{ value: "all", label: "All regions" }].concat(
      Object.keys(REGIONS).map(function (k) { return { value: k, label: REGIONS[k] }; }));
    chipRow($("region-filters"), regItems, state.region, function (v) {
      state.region = v; state.shown = PAGE_SIZE; render();
    });

    // Category sub-filter only when a system has multiple categories (e.g. Artery / Vein)
    var cats = {};
    ALL.forEach(function (e) {
      if (state.system === "all" || e.system === state.system) cats[e.category] = true;
    });
    var catKeys = Object.keys(cats).sort();
    var catWrap = $("category-filters");
    if (state.system !== "all" && catKeys.length > 1) {
      var catItems = [{ value: "all", label: "All types" }].concat(
        catKeys.map(function (c) { return { value: c, label: c }; }));
      chipRow(catWrap, catItems, state.category, function (v) {
        state.category = v; state.shown = PAGE_SIZE; render();
      }, true);
    } else {
      catWrap.innerHTML = "";
    }
  }

  function setSystem(v) {
    state.system = v;
    state.category = "all";
    state.shown = PAGE_SIZE;
    render();
  }

  /* ---------- Rendering: card grid ---------- */

  function renderGrid() {
    var list = filtered();
    var grid = $("card-grid");
    grid.innerHTML = "";

    $("result-count").textContent = list.length + " structure" + (list.length === 1 ? "" : "s");
    $("empty-state").classList.toggle("hidden", list.length > 0);

    list.slice(0, state.shown).forEach(function (e) {
      var sys = SYSTEMS[e.system] || {};
      var card = el("button", "entry-card",
        '<div class="entry-card-top">' +
          '<span class="tag tag-sys">' + esc(e.category) + "</span>" +
          '<span class="tag tag-region">' + esc(REGIONS[e.region] || e.region) + "</span>" +
        "</div>" +
        "<h3>" + esc(e.name) + "</h3>" +
        '<p class="entry-latin">' + esc(e.latin || "") + "</p>" +
        '<p class="entry-desc">' + esc(e.description || "") + "</p>");
      card.style.setProperty("--card-color", sys.color || "var(--accent)");
      card.addEventListener("click", function () { openModal(e); });
      grid.appendChild(card);
    });

    $("load-more").classList.toggle("hidden", list.length <= state.shown);
  }

  function render() {
    renderFilters();
    renderGrid();
  }

  /* ---------- Detail modal ---------- */

  function openModal(e) {
    var sys = SYSTEMS[e.system] || {};
    var html =
      '<div class="modal-tags">' +
        '<span class="tag tag-sys" style="--card-color:' + (sys.color || "var(--accent)") + '">' + esc(e.category) + "</span>" +
        '<span class="tag tag-region">' + esc(REGIONS[e.region] || e.region) + "</span>" +
        (e.count > 1 ? '<span class="tag tag-region">&times;' + e.count + " in body</span>" : "") +
      "</div>" +
      "<h2>" + esc(e.name) + "</h2>" +
      '<p class="entry-latin">' + esc(e.latin || "") + "</p>" +
      '<p class="modal-desc">' + esc(e.description || "") + "</p>";

    var keys = e.details ? Object.keys(e.details) : [];
    if (keys.length) {
      html += '<table class="detail-table">';
      keys.forEach(function (k) {
        html += "<tr><th>" + esc(k) + "</th><td>" + esc(e.details[k]) + "</td></tr>";
      });
      html += "</table>";
    }

    if (e.clinical) {
      html += '<div class="clinical-box"><strong>Clinical pearl</strong>' + esc(e.clinical) + "</div>";
    }

    $("modal-body").innerHTML = html;
    $("modal-backdrop").classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    $("modal-backdrop").classList.add("hidden");
    document.body.style.overflow = "";
  }

  /* ---------- Quiz ---------- */

  var quiz = { system: "all", length: 20, questions: [], index: 0, score: 0 };

  // Question templates: [detailKey, question prefix, tag]
  var Q_TEMPLATES = [
    ["Origin", "What is the origin of the", "Origin"],
    ["Insertion", "What is the insertion of the", "Insertion"],
    ["Innervation", "What is the innervation of the", "Innervation"],
    ["Action", "What is the primary action of the", "Action"],
    ["Roots", "What are the root values / origin of the", "Roots"],
    ["Branches", "Which of these describes the branches of the", "Branches"],
    ["Supplies", "What does the", "Territory", "supply?"],
    ["Drains into", "Where does the", "Drainage", "drain into?"],
    ["Articulations", "Which articulations does the", "Joints", "form?"],
    ["Location", "Where is the", "Location", "located?"]
  ];

  function buildQuestionPool() {
    var pool = [];
    var source = ALL.filter(function (e) {
      return quiz.system === "all" || e.system === quiz.system;
    });

    Q_TEMPLATES.forEach(function (tpl) {
      var key = tpl[0];
      // Entries having this detail, used both for questions and as distractor source
      var candidates = source.filter(function (e) {
        return e.details && e.details[key] && e.details[key].length > 5;
      });
      if (candidates.length < 4) return;
      candidates.forEach(function (e) {
        pool.push({ entry: e, key: key, tpl: tpl, candidates: candidates });
      });
    });
    return pool;
  }

  function makeQuestion(item) {
    var e = item.entry;
    var tpl = item.tpl;
    var correct = e.details[item.key];

    var distractors = shuffle(item.candidates
      .filter(function (other) { return other !== e && other.details[item.key] !== correct; }))
      .slice(0, 3)
      .map(function (other) { return other.details[item.key]; });

    var suffix = tpl[3] ? " " + tpl[3] : "?";
    return {
      tag: tpl[2],
      text: tpl[1] + " " + e.name.toLowerCase() + suffix,
      answers: shuffle([correct].concat(distractors)),
      correct: correct,
      entryName: e.name
    };
  }

  function startQuiz() {
    var pool = buildQuestionPool();
    if (pool.length < 4) return;

    // Pick distinct entries so a quiz doesn't repeat the same structure
    var picked = [];
    var usedEntries = {};
    shuffle(pool).some(function (item) {
      if (usedEntries[item.entry.id]) return false;
      usedEntries[item.entry.id] = true;
      picked.push(makeQuestion(item));
      return picked.length >= quiz.length;
    });

    quiz.questions = picked;
    quiz.index = 0;
    quiz.score = 0;

    $("quiz-setup").classList.add("hidden");
    $("quiz-result").classList.add("hidden");
    $("quiz-run").classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    var q = quiz.questions[quiz.index];
    $("quiz-progress-fill").style.width = (quiz.index / quiz.questions.length * 100) + "%";
    $("quiz-progress-text").textContent = "Question " + (quiz.index + 1) + " of " + quiz.questions.length;
    $("quiz-q-tag").textContent = q.tag;
    $("quiz-question").textContent = q.text;
    $("quiz-feedback").classList.add("hidden");
    $("quiz-next").classList.add("hidden");

    var wrap = $("quiz-answers");
    wrap.innerHTML = "";
    q.answers.forEach(function (a) {
      var btn = el("button", "quiz-answer", esc(a));
      btn.addEventListener("click", function () { answer(q, a, btn); });
      wrap.appendChild(btn);
    });
  }

  function answer(q, picked, btn) {
    var buttons = $("quiz-answers").querySelectorAll(".quiz-answer");
    buttons.forEach(function (b) {
      b.disabled = true;
      if (b.textContent === q.correct) b.classList.add("answer-correct");
    });

    var fb = $("quiz-feedback");
    if (picked === q.correct) {
      quiz.score++;
      fb.className = "quiz-feedback fb-ok";
      fb.textContent = "Correct — nice work.";
    } else {
      btn.classList.add("answer-wrong");
      fb.className = "quiz-feedback fb-no";
      fb.textContent = "Not quite — the correct answer for the " + q.entryName.toLowerCase() + " is highlighted above.";
    }
    fb.classList.remove("hidden");
    $("quiz-next").classList.remove("hidden");
    $("quiz-next").textContent = quiz.index + 1 < quiz.questions.length ? "Next question →" : "See results →";
  }

  function nextQuestion() {
    quiz.index++;
    if (quiz.index >= quiz.questions.length) {
      finishQuiz();
    } else {
      showQuestion();
    }
  }

  function finishQuiz() {
    $("quiz-run").classList.add("hidden");
    $("quiz-result").classList.remove("hidden");
    var pct = Math.round(quiz.score / quiz.questions.length * 100);
    $("quiz-score").textContent = quiz.score + " / " + quiz.questions.length + " (" + pct + "%)";
    $("quiz-verdict").textContent =
      pct >= 90 ? "Outstanding. You could be teaching this." :
      pct >= 75 ? "Strong performance — keep consolidating." :
      pct >= 50 ? "A solid base. Review the structures you missed and run it again." :
      "Anatomy rewards repetition — review the atlas and try another round.";
  }

  function renderQuizOptions() {
    var sysItems = [{ value: "all", label: "Whole body" }].concat(
      Object.keys(SYSTEMS).map(function (k) { return { value: k, label: SYSTEMS[k].label }; }));
    chipRow($("quiz-system-options"), sysItems, quiz.system, function (v) {
      quiz.system = v;
      renderQuizOptions();
    });
  }

  /* ---------- View switching ---------- */

  function setView(view) {
    state.view = view;
    ["atlas", "body", "quiz"].forEach(function (v) {
      $("view-" + v).classList.toggle("hidden", v !== view);
      $("nav-" + v).classList.toggle("nav-active", v === view);
    });
    if (view === "body" && window.Body3D) window.Body3D.activate();
    if (view === "quiz") {
      $("quiz-setup").classList.remove("hidden");
      $("quiz-run").classList.add("hidden");
      $("quiz-result").classList.add("hidden");
      renderQuizOptions();
    }
    window.scrollTo({ top: 0 });
  }

  /* ---------- Events ---------- */

  function bind() {
    var debounce;
    $("search-input").addEventListener("input", function (ev) {
      clearTimeout(debounce);
      debounce = setTimeout(function () {
        state.query = ev.target.value;
        state.shown = PAGE_SIZE;
        if (state.view !== "atlas") setView("atlas");
        renderGrid();
      }, 120);
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "/" && document.activeElement !== $("search-input")) {
        ev.preventDefault();
        $("search-input").focus();
      }
      if (ev.key === "Escape") closeModal();
    });

    $("brand-link").addEventListener("click", function (ev) {
      ev.preventDefault();
      setView("atlas");
    });

    document.querySelectorAll(".nav-btn").forEach(function (b) {
      b.addEventListener("click", function () { setView(b.dataset.view); });
    });

    $("modal-close").addEventListener("click", closeModal);
    $("modal-backdrop").addEventListener("click", function (ev) {
      if (ev.target === $("modal-backdrop")) closeModal();
    });

    $("clear-filters").addEventListener("click", function () {
      state.query = "";
      $("search-input").value = "";
      state.system = "all";
      state.region = "all";
      state.category = "all";
      state.shown = PAGE_SIZE;
      render();
    });

    $("load-more").addEventListener("click", function () {
      state.shown += PAGE_SIZE;
      renderGrid();
    });

    $("quiz-length-options").querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        quiz.length = parseInt(chip.dataset.len, 10);
        $("quiz-length-options").querySelectorAll(".chip").forEach(function (c) {
          c.classList.toggle("chip-active", c === chip);
        });
      });
    });

    $("hero-body-btn").addEventListener("click", function () { setView("body"); });

    $("quiz-start").addEventListener("click", startQuiz);
    $("quiz-next").addEventListener("click", nextQuestion);
    $("quiz-again").addEventListener("click", function () { setView("quiz"); });
    $("quiz-back").addEventListener("click", function () { setView("atlas"); });
  }

  /* ---------- Public API (used by the 3D body view) ---------- */

  window.Corpus = {
    data: ALL,
    regions: REGIONS,
    systems: SYSTEMS,
    openEntry: openModal,
    setView: setView,
    browseRegion: function (region) {
      state.query = "";
      $("search-input").value = "";
      state.system = "all";
      state.category = "all";
      state.region = region;
      state.shown = PAGE_SIZE;
      render();
      setView("atlas");
      $("system-filters").scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  /* ---------- Init ---------- */

  renderHeroStats();
  renderSystemCards();
  render();
  bind();
  setView("atlas");
})();
