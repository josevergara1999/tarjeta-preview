// Service worker mínimo: permite instalar la app. Siempre va a la red (sin caché),
// así cada cambio publicado se ve al recargar.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
