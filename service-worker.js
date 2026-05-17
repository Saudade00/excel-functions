// service-worker.js - 离线缓存策略
// 使用 Workbox 风格但手动实现，缓存静态资源

const CACHE_NAME = 'excel-functions-v3';
const STATIC_CACHE = 'static-v3';

// 需要预缓存的静态资源
const PRECACHE_URLS = [
  './index.html',
  './manifest.json',
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
      .open(STATIC_CACHE)
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
            .filter((key) => key !== STATIC_CACHE)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// fetch 事件：缓存优先策略
self.addEventListener('fetch', (event) => {
  // 只处理 GET 请求
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // 返回缓存，同时在后台更新缓存（stale-while-revalidate）
        fetchAndCache(event.request);
        return cachedResponse;
      }

      // 无缓存，正常请求并缓存
      return fetchAndCache(event.request).catch(
        () => caches.match('./index.html') // 离线时返回首页
      );
    })
  );
});

// 请求并缓存
function fetchAndCache(request) {
  return fetch(request).then((response) => {
    if (!response || response.status !== 200 || response.type !== 'basic') {
      return response;
    }

    const responseToCache = response.clone();
    caches.open(STATIC_CACHE).then((cache) => {
      cache.put(request, responseToCache);
    });

    return response;
  });
}
