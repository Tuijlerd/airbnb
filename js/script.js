(function () {
  'use strict';

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

      if (term.length < 2) {
        zoekresultaat.textContent = '';
        return;
      }

      highlightTekst(term);

      if (huidigeHighlights.length > 0) {
        zoekresultaat.textContent = huidigeHighlights.length + ' resultaat/resultaten gevonden';
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
        zoekresultaat.textContent = 'Geen resultaten gevonden';
      }
    }, 250);
  });

  // ===== Service worker voor offline gebruik =====
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {
        // Offline-ondersteuning is optioneel; de site werkt ook zonder.
      });
    });
  }
})();
