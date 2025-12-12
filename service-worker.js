// Service Worker pour PWA
const CACHE_NAME = 'prayer-app-v3';
const BASE_PATH = '/app-Salet';

// Fichiers à mettre en cache
const urlsToCache = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/style.css`,
  `${BASE_PATH}/script.js`,
  `${BASE_PATH}/manifest.json`,
  `${BASE_PATH}/icon-192.png`,
  `${BASE_PATH}/icon-512.png`,
  `${BASE_PATH}/adhan1.mp3`,
  `${BASE_PATH}/fajr-bg.jpg`,
  `${BASE_PATH}/dhuhr-bg.jpg`,
  `${BASE_PATH}/asr-bg.jpg`,
  `${BASE_PATH}/maghrib-bg.jpg`,
  `${BASE_PATH}/isha-bg.jpg`,
  `${BASE_PATH}/ramadan.gif`
];

// Installation
self.addEventListener('install', event => {
  console.log('[SW] Installation...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Mise en cache des fichiers');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('[SW] Erreur cache:', err);
      })
  );
  self.skipWaiting();
});

// Activation
self.addEventListener('activate', event => {
  console.log('[SW] Activation...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interception des requêtes
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          // Ne cacher QUE les réponses complètes (status 200)
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              if (response.status === 200) {
                cache.put(event.request, responseToCache);
              }
            })
            .catch(err => {
              console.log('[SW] Erreur cache (ignorée):', err.message);
            });
          
          return response;
        });
      })
      .catch(err => {
        console.log('[SW] Erreur fetch:', err);
        return new Response('Erreur de réseau', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      })
  );
});

console.log('[SW] Service Worker chargé');
