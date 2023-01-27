const STATIC_CACHE = "static";

const APP_SHELL = [
    "/",
    "HTML/index.html",
    "CSS/style.css",
    "JS/function.js",
    "JS/script1.js",
    "JS/script2.js",
    "JS/main.js",
    "IMG/gatito.jpg",
];

self.addEventListener("install", (e) =>{
    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntill(cacheStatic);
});

self.addEventListener("fetch", (e) =>{
    console.log("fetch! ", e.request);

    e.respondWith(
        caches
            .match(e.request)
            .then(res => res || fetch(e.request))
            .catch(console.log)
    );
});