// service-worker.js - stores the app files so MPEMS works offline

var CACHE_NAME = "mpems-v1";

var FILES = [
  "./",
  "index.html",
  "css/style.css",
  "js/model.js",
  "js/view.js",
  "js/controller.js",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(FILES);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(
        names.map(function (name) {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (saved) {
      return saved || fetch(event.request);
    })
  );
});