const CACHE_NAME = "dev/v6";

const CACHE_FILES = [
  "Muk-Profile-Pic.jpg",
  "index.html",
  "style.css",
  "style.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache
        .addAll(CACHE_FILES)
        .then(() => {
					console.log('Files added successfully...')
				})
        .catch((err) => {
          console.log(err);
        });
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keysList) => {
      return Promise.all(
        keysList.map((key) => {
          if (key != CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const closeRes = res.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, closeRes);
        });
        return res;
      })
      .catch((err) => {
        return caches.match(e.request).then((file) => file);
      })
  );
});
