
var urls = ['/', '/index.html', '/src/css/style.css', '/src/js/script.js']

self.addEventListener("install", function(event){
    console.log("SW Instalado!!");
    event.waitUntil(caches.open("myAppCache").then(function(cache){
        return cache.addAll(urls);
    }));
});
// Only Cache
/* self.addEventListener("fetch", function(event) {
    event.respondWith(caches.match(event.request)
        .then(function(response) {
            if (response) {
                // The request is in the cache 
                return response;
            } else {
                // We need to go to the network  
                //return fetch(event.request);
            }
        })
    );
});
 */
// First Cache
self.addEventListener("fetch", function(event) {
    event.respondWith(caches.match(event.request)
        .then(function(response) {
            if (response) {
                // The request is in the cache 
                return response;
            } else {
                // We need to go to the network  
                return fetch(event.request);
            }
        })
    );
});