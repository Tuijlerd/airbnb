const CACHE_NAAM = 'gastenhandleiding-v5';

const KERN_BESTANDEN = [
  './',
  './index.html',
  './css/style.css',
  './js/wachtwoord-config.js',
  './js/translations.js',
  './js/script.js',
  './fotos/foto-tuin.jpg',
  './fotos/foto-woonkamer.jpg'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAAM).then(function (cache) {
      return cache.addAll(KERN_BESTANDEN);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (namen) {
      return Promise.all(
        namen
          .filter(function (naam) {
            return naam !== CACHE_NAAM;
          })
          .map(function (naam) {
            return caches.delete(naam);
          })
      );
    })
  );
  self.clients.claim();
});

// Netwerk-eerst: online krijg je altijd de laatste versie van de site.
// Alleen als het netwerk niet lukt (geen verbinding) valt de site terug
// op wat er de vorige keer is gecachet, zodat de handleiding ook
// offline beschikbaar blijft.
self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(function (netwerkResponse) {
        if (
          netwerkResponse &&
          netwerkResponse.status === 200 &&
          (event.request.url.startsWith(self.location.origin) ||
            event.request.url.includes('fonts.googleapis.com') ||
            event.request.url.includes('fonts.gstatic.com'))
        ) {
          var kopie = netwerkResponse.clone();
          caches.open(CACHE_NAAM).then(function (cache) {
            cache.put(event.request, kopie);
          });
        }
        return netwerkResponse;
      })
      .catch(function () {
        return caches.match(event.request).then(function (cacheResponse) {
          if (cacheResponse) {
            return cacheResponse;
          }
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
