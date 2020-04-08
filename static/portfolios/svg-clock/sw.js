const version = "1.0.2";
const cacheName = `SvgClock-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/portfolio/clock/',
        'index.html',
        'assets/style.css',
        'assets/scripts.js',
        'sw.js',
        'manifest.json',
        'assets/favicon/favicon-16x16.png',
        'assets/favicon/favicon-32x32.png',
        'assets/favicon/android-chrome-144x144.png',
        'assets/favicon/android-chrome-192x192.png',
        'assets/favicon/android-chrome-512x512.png',
        'assets/favicon/apple-touch-icon.png'
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});