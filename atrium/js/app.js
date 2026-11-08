/* ATRIUM — renders the bilingual menu, handles language toggle, search & section nav. */
(function () {
  'use strict';

  var UI = {
    sq: {
      tagline: 'Brunch · Pasta · Skarë · Peshk',
      search: 'Kërko në menu…',
      empty: 'Asnjë pjatë nuk u gjet.',
      prices: 'Çmimet janë në lekë (ALL).',
      currency: 'lekë',
      locale: 'sq-AL',
      title: 'Atrium — Menuja',
    },
    en: {
      tagline: 'Brunch · Pasta · Grill · Seafood',
      search: 'Search the menu…',
      empty: 'No dishes found.',
      prices: 'Prices are in Albanian lek (ALL).',
      currency: 'ALL',
      locale: 'en-US',
      title: 'Atrium — Menu',
    },
  };

  var lang = 'sq';
  var menuEl = document.getElementById('menu');
  var navEl = document.getElementById('catnav');
  var searchEl = document.getElementById('search');
  var emptyEl = document.getElementById('empty');

  // ---- language -----------------------------------------------------------
  function pickInitialLang() {
    var fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl === 'sq' || fromUrl === 'en') return fromUrl;
    try {
      var saved = localStorage.getItem('atrium-lang');
      if (saved === 'sq' || saved === 'en') return saved;
    } catch (e) { /* storage unavailable */ }
    return (navigator.language || '').toLowerCase().indexOf('sq') === 0 ? 'sq' : 'en';
  }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem('atrium-lang', lang); } catch (e) { /* ignore */ }
    document.documentElement.lang = lang;
    document.title = UI[lang].title;
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = UI[lang][el.dataset.i18n];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = UI[lang][el.dataset.i18nPlaceholder];
      el.setAttribute('aria-label', UI[lang][el.dataset.i18nPlaceholder]);
    });
    render();
    applySearch();
  }

  // ---- rendering ----------------------------------------------------------
  function text(v) { return typeof v === 'string' ? v : v[lang]; }

  function formatPrice(item) {
    var n = new Intl.NumberFormat(UI[lang].locale, { useGrouping: true }).format(item.price);
    // Make sure 4-digit numbers always get a separator (some locales skip it).
    if (item.price >= 1000 && n.indexOf(lang === 'sq' ? '.' : ',') === -1 && !/\s/.test(n)) {
      var sep = lang === 'sq' ? '.' : ',';
      n = String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    }
    var s = n + ' ' + UI[lang].currency;
    return item.unit ? s + ' / ' + item.unit : s;
  }

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }

  function renderItem(item) {
    var li = el('li', 'item');
    var head = el('div', 'item-head');
    head.appendChild(el('h3', 'item-name', text(item.name)));
    head.appendChild(el('span', 'leader'));
    head.appendChild(el('span', 'item-price', formatPrice(item)));
    li.appendChild(head);
    var desc = item[lang];
    if (desc) li.appendChild(el('p', 'item-desc', desc));
    li.dataset.search = (text(item.name) + ' ' + (desc || '')).toLowerCase();
    return li;
  }

  function render() {
    menuEl.textContent = '';
    navEl.textContent = '';

    MENU.forEach(function (cat) {
      // nav chip
      var a = el('a', 'chip', (cat.nav || cat.title)[lang]);
      a.href = '#' + cat.id;
      a.dataset.target = cat.id;
      navEl.appendChild(a);

      // section
      var sec = el('section', 'cat' + (cat.feature ? ' feature' : ''));
      sec.id = cat.id;
      var h2 = el('h2', 'cat-title', cat.title[lang]);
      sec.appendChild(h2);
      var ul = el('ul', 'items');
      cat.items.forEach(function (it) { ul.appendChild(renderItem(it)); });
      sec.appendChild(ul);
      menuEl.appendChild(sec);
    });

    measureHeader();
    queueSpy();
  }

  // ---- search -------------------------------------------------------------
  function applySearch() {
    var q = searchEl.value.trim().toLowerCase();
    var anyVisible = false;
    menuEl.querySelectorAll('.cat').forEach(function (sec) {
      var visible = 0;
      sec.querySelectorAll('.item').forEach(function (li) {
        var show = !q || li.dataset.search.indexOf(q) !== -1;
        li.hidden = !show;
        if (show) visible++;
      });
      sec.hidden = visible === 0;
      if (visible) anyVisible = true;
      var chip = navEl.querySelector('[data-target="' + sec.id + '"]');
      if (chip) chip.hidden = visible === 0;
    });
    emptyEl.hidden = anyVisible;
    measureHeader();
    queueSpy();
  }

  // ---- sticky header height + scroll-spy for section nav ------------------
  var spyQueued = false;

  function measureHeader() {
    var bar = document.querySelector('.topbar');
    var tools = document.querySelector('.sticky-tools');
    document.documentElement.style.setProperty('--tools-h', tools.offsetHeight + 'px');
    document.documentElement.style.setProperty('--topbar-h', bar.offsetHeight + 'px');
  }

  function updateSpy() {
    spyQueued = false;
    var line = document.querySelector('.sticky-tools').getBoundingClientRect().bottom + 70;
    var current = null;
    menuEl.querySelectorAll('.cat:not([hidden])').forEach(function (sec) {
      if (sec.getBoundingClientRect().top <= line) current = sec.id;
    });
    navEl.querySelectorAll('.chip').forEach(function (chip) {
      var on = chip.dataset.target === current;
      if (on === chip.classList.contains('active')) return;
      chip.classList.toggle('active', on);
      if (on && navEl.scrollWidth > navEl.clientWidth) {
        // keep the active chip in view inside the strip (never moves the page)
        navEl.scrollTo({ left: chip.offsetLeft - (navEl.clientWidth - chip.offsetWidth) / 2, behavior: 'smooth' });
      }
    });
  }

  function queueSpy() {
    if (spyQueued) return;
    spyQueued = true;
    requestAnimationFrame(updateSpy);
  }

  // ---- wire up ------------------------------------------------------------
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });
  searchEl.addEventListener('input', applySearch);
  window.addEventListener('scroll', queueSpy, { passive: true });
  window.addEventListener('resize', function () { measureHeader(); queueSpy(); });
  setLang(pickInitialLang());
})();
