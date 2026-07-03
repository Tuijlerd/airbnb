(function () {
  'use strict';

  // ===== Wachtwoordscherm =====
  var ONTGRENDEL_SLEUTEL = 'gastenhandleiding-ontgrendeld-code';
  var wachtwoordScherm = document.getElementById('wachtwoordScherm');
  var siteInhoud = document.getElementById('siteInhoud');
  var wachtwoordForm = document.getElementById('wachtwoordForm');
  var wachtwoordVeld = document.getElementById('wachtwoordVeld');
  var wachtwoordFout = document.getElementById('wachtwoordFout');

  function ontgrendel() {
    wachtwoordScherm.hidden = true;
    siteInhoud.hidden = false;
  }

  // Al eerder deze code ingevoerd op dit apparaat? Dan niet opnieuw vragen.
  // Verandert de TOEGANGSCODE (bijvoorbeeld voor een nieuwe boeking), dan
  // klopt de opgeslagen waarde niet meer en moet de nieuwe gast wel weer
  // de code invoeren.
  try {
    if (typeof TOEGANGSCODE !== 'undefined' && localStorage.getItem(ONTGRENDEL_SLEUTEL) === TOEGANGSCODE) {
      ontgrendel();
    }
  } catch (fout) {
    // localStorage kan geblokkeerd zijn (bv. privénavigatie); dan gewoon elke keer de code vragen.
  }

  wachtwoordForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (typeof TOEGANGSCODE !== 'undefined' && wachtwoordVeld.value === TOEGANGSCODE) {
      try {
        localStorage.setItem(ONTGRENDEL_SLEUTEL, TOEGANGSCODE);
      } catch (fout) {
        // Niet erg als dit niet lukt; de gast moet de code dan de volgende keer opnieuw invoeren.
      }
      wachtwoordFout.hidden = true;
      ontgrendel();
    } else {
      wachtwoordFout.hidden = false;
      wachtwoordVeld.value = '';
      wachtwoordVeld.focus();
    }
  });

  // ===== Taal / vertalingen =====
  var STANDAARD_TAAL = 'nl';
  var huidigeTaal = STANDAARD_TAAL;
  var langKnoppen = document.querySelectorAll('.lang-btn');

  function waardeUitPad(object, pad) {
    return pad.split('.').reduce(function (deel, sleutel) {
      return deel && deel[sleutel] !== undefined ? deel[sleutel] : undefined;
    }, object);
  }

  function toepassenTaal(taal) {
    var dict = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[taal]) ? TRANSLATIONS[taal] : TRANSLATIONS[STANDAARD_TAAL];
    huidigeTaal = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[taal]) ? taal : STANDAARD_TAAL;

    document.documentElement.setAttribute('lang', huidigeTaal);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var sleutel = el.getAttribute('data-i18n');
      var waarde = waardeUitPad(dict, sleutel);
      if (waarde === undefined) {
        return;
      }
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, waarde);
      } else {
        el.innerHTML = waarde;
      }
    });

    document.title = dict.meta.title;
    var metaDesc = document.getElementById('metaDescription');
    if (metaDesc) {
      metaDesc.setAttribute('content', dict.meta.description);
    }

    langKnoppen.forEach(function (knop) {
      var actief = knop.getAttribute('data-lang') === huidigeTaal;
      knop.classList.toggle('actief', actief);
      knop.setAttribute('aria-pressed', actief ? 'true' : 'false');
    });

    try {
      sessionStorage.setItem('gastenhandleiding-taal', huidigeTaal);
    } catch (fout) {
      // Privénavigatie kan sessionStorage blokkeren; taal onthouden is dan niet mogelijk.
    }

    // Eerder gemarkeerde zoekresultaten horen bij de vorige taal, dus opnieuw beginnen.
    verwijderHighlights();
    zoekveld.value = '';
    zoekresultaat.textContent = '';
  }

  langKnoppen.forEach(function (knop) {
    knop.addEventListener('click', function () {
      toepassenTaal(knop.getAttribute('data-lang'));
    });
  });

  // ===== Hamburgermenu =====
  var hamburger = document.getElementById('hamburgerBtn');
  var navWrap = document.getElementById('hoofdnavigatie');

  hamburger.addEventListener('click', function () {
    var isOpen = navWrap.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navWrap.querySelectorAll('.main-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth < 880) {
        navWrap.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // ===== Terug naar boven =====
  var terugKnop = document.getElementById('terugNaarBoven');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      terugKnop.classList.add('zichtbaar');
    } else {
      terugKnop.classList.remove('zichtbaar');
    }
  });

  terugKnop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===== Zoekfunctie =====
  var zoekveld = document.getElementById('zoekveld');
  var zoekresultaat = document.getElementById('zoekresultaat');
  var doorzoekbareSecties = document.querySelectorAll('main .sectie-inner');
  var huidigeHighlights = [];

  function verwijderHighlights() {
    huidigeHighlights.forEach(function (mark) {
      var parent = mark.parentNode;
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    });
    huidigeHighlights = [];
  }

  function highlightTekst(term) {
    var regex = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');

    doorzoekbareSecties.forEach(function (sectie) {
      var walker = document.createTreeWalker(sectie, NodeFilter.SHOW_TEXT, null);
      var tekstNodes = [];
      var node;
      while ((node = walker.nextNode())) {
        if (node.nodeValue.toLowerCase().indexOf(term) !== -1) {
          tekstNodes.push(node);
        }
      }

      tekstNodes.forEach(function (tekstNode) {
        var span = document.createElement('span');
        span.innerHTML = tekstNode.nodeValue.replace(regex, '<mark class="zoek-highlight">$1</mark>');
        var fragment = document.createDocumentFragment();
        while (span.firstChild) {
          fragment.appendChild(span.firstChild);
        }
        tekstNode.parentNode.replaceChild(fragment, tekstNode);
      });
    });

    huidigeHighlights = Array.prototype.slice.call(document.querySelectorAll('mark.zoek-highlight'));
  }

  var zoekTimer;
  zoekveld.addEventListener('input', function () {
    clearTimeout(zoekTimer);
    zoekTimer = setTimeout(function () {
      verwijderHighlights();
      var term = zoekveld.value.trim().toLowerCase();
      var dict = TRANSLATIONS[huidigeTaal] || TRANSLATIONS[STANDAARD_TAAL];

      if (term.length < 2) {
        zoekresultaat.textContent = '';
        return;
      }

      highlightTekst(term);

      if (huidigeHighlights.length > 0) {
        zoekresultaat.textContent = dict.search.resultsFound.replace('{n}', huidigeHighlights.length);
        var eersteResultaat = huidigeHighlights[0];
        var menuWasOpen = navWrap.classList.contains('open');

        if (menuWasOpen) {
          navWrap.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        }

        // Wacht tot de inklap-animatie van het menu klaar is, anders
        // wordt er gescrold naar een positie die nog gaat verschuiven.
        setTimeout(function () {
          eersteResultaat.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, menuWasOpen ? 320 : 0);
      } else {
        zoekresultaat.textContent = dict.search.noResults;
      }
    }, 250);
  });

  // ===== Taal initialiseren (onthouden zolang de gebruiker op de site blijft) =====
  var opgeslagenTaal = null;
  try {
    opgeslagenTaal = sessionStorage.getItem('gastenhandleiding-taal');
  } catch (fout) {
    opgeslagenTaal = null;
  }
  toepassenTaal(opgeslagenTaal || STANDAARD_TAAL);

  // ===== Service worker voor offline gebruik =====
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {
        // Offline-ondersteuning is optioneel; de site werkt ook zonder.
      });
    });
  }
})();
