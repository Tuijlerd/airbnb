const CACHE_NAAM = 'gastenhandleiding-v1';

const KERN_BESTANDEN = [
  './',
  './index.html',
  './css/style.css',
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

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (cacheResponse) {
      if (cacheResponse) {
        return cacheResponse;
      }

      return fetch(event.request)
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
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});
