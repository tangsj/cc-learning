const CACHE_VERSION = 'cache_v2';


// Installing -> Waiting -> Active


self.addEventListener('install', (e) => {

  e.waitUntil(self.skipWaiting());

  console.log('install', self);
  e.waitUntil(
    caches.open(CACHE_VERSION).then((cache ) => {
      return cache.addAll([
        './index.js',
        './sw.js'
      ]);
    })
  );
});

self.addEventListener('activate', (e) => {
  console.log('activate', self);
  caches.delete('cache_v1');
});

self.addEventListener('fetch', (e) => {
  console.log('fetch', self);

  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) { // 找到缓存
        console.log(res);
        return res;
      }

      var request = e.request.clone();
      return fetch(request).then((response) => {
        if (!response && response.status !== 200) {
          return response;
        }

        var responseClone = response.clone();
        caches.open(CACHE_VERSION).then((cache) => {
          cache.put(e.request, responseClone);
        });
      });
    })
  );
});

self.addEventListener('message', (e) => {
  console.log('message', self);
});
