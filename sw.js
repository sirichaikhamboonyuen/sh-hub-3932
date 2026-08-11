// Service Worker สำรองไฟล์พื้นฐานไว้ในเครื่อง
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('sirihouse-v1').then((cache) => {
      return cache.addAll(['./', './index.html', './manifest.json']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});