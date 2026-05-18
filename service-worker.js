// service-worker.js - 离线缓存策略
// 手动实现 Workbox 风格的静态资源缓存

const CACHE_NAME = 'excel-functions-v4';

// 需要预缓存的静态资源
const PRECACHE_URLS = [
  './index.html',
  './manifest.json',
  './service-worker.js',
  './css/style.css',
  './js/utils.js',
  './js/data.js',
  './js/favorites.js',
  './js/theme.js',
  './js/modal.js',
  './js/app.js',
  './js/quiz.js',
  './data/functions.js',
];

// 安装事件：预缓存静态资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// 激活事件：清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// fetch 事件：缓存优先 + 后台更新（stale-while-revalidate）
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 后台更新缓存
      const fetchPromise = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => null); // 网络失败时静默失败

      // 有缓存立即返回，无缓存则等待网络
      return cachedResponse || fetchPromise || caches.match('./index.html');
    })
  );
});
