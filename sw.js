const staticCache ='my-cache-4';

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
          // remove other caches except my current ch
          return cacheName.startsWith('my-')&& cacheName !== staticCache

        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCache).then(function(cache) {
      return cache.addAll(
        [ 
          './',
          'data/restaurants.json',
          'js/dbhelper.js',
          'js/main.js',       
          'js/restaurant_info.js',
          'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
          'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
          'https://api.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css',
          'https://api.tiles.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.js',
          'https://cdn.jsdelivr.net/npm/sweetalert2@7.28.8/dist/sweetalert2.all.min.js',  
          'https://sys920.github.io/Restaurant-Reviews-App/data/restaurants.json',
          'css/styles.css',
          'index.html',
          'restaurant.html',
          'img/1.jpg',
          'img/2.jpg',
          'img/3.jpg',
          'img/4.jpg',
          'img/5.jpg',
          'img/6.jpg',
          'img/7.jpg',
          'img/8.jpg',
          'img/9.jpg',
          'img/10.jpg',
          'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
          'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1538.jpg70?access_token=pk.eyJ1IjoieW91bmdzb29zaGluIiwiYSI6ImNqcHhndXgydzFhd2I0M28wMjluZnl4eHIifQ.JI4FkMWGpsaTSwNPXbpfUg',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?access_token=pk.eyJ1IjoieW91bmdzb29zaGluIiwiYSI6ImNqcHhndXgydzFhd2I0M28wMjluZnl4eHIifQ.JI4FkMWGpsaTSwNPXbpfUg',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1538.jpg70?access_token=pk.eyJ1IjoieW91bmdzb29zaGluIiwiYSI6ImNqcHhndXgydzFhd2I0M28wMjluZnl4eHIifQ.JI4FkMWGpsaTSwNPXbpfUg',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1539.jpg70?access_token=pk.eyJ1IjoieW91bmdzb29zaGluIiwiYSI6ImNqcHhndXgydzFhd2I0M28wMjluZnl4eHIifQ.JI4FkMWGpsaTSwNPXbpfUg',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?access_token=pk.eyJ1IjoieW91bmdzb29zaGluIiwiYSI6ImNqcHhndXgydzFhd2I0M28wMjluZnl4eHIifQ.JI4FkMWGpsaTSwNPXbpfUg',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1540.jpg70?access_token=pk.eyJ1IjoieW91bmdzb29zaGluIiwiYSI6ImNqcHhndXgydzFhd2I0M28wMjluZnl4eHIifQ.JI4FkMWGpsaTSwNPXbpfUg',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1539.jpg70?access_token=pk.eyJ1IjoieW91bmdzb29zaGluIiwiYSI6ImNqcHhndXgydzFhd2I0M28wMjluZnl4eHIifQ.JI4FkMWGpsaTSwNPXbpfUg',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1539.jpg70?access_token=pk.eyJ1IjoieW91bmdzb29zaGluIiwiYSI6ImNqcHhndXgydzFhd2I0M28wMjluZnl4eHIifQ.JI4FkMWGpsaTSwNPXbpfUg',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1538.jpg70?access_token=pk.eyJ1IjoieW91bmdzb29zaGluIiwiYSI6ImNqcHhndXgydzFhd2I0M28wMjluZnl4eHIifQ.JI4FkMWGpsaTSwNPXbpfUg',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1538.jpg70?access_token=pk.eyJ1IjoieW91bmdzb29zaGluIiwiYSI6ImNqcHhndXgydzFhd2I0M28wMjluZnl4eHIifQ.JI4FkMWGpsaTSwNPXbpfUg',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1540.jpg70?access_token=pk.eyJ1IjoieW91bmdzb29zaGluIiwiYSI6ImNqcHhndXgydzFhd2I0M28wMjluZnl4eHIifQ.JI4FkMWGpsaTSwNPXbpfUg',
          'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1540.jpg70?access_token=pk.eyJ1IjoieW91bmdzb29zaGluIiwiYSI6ImNqcHhndXgydzFhd2I0M28wMjluZnl4eHIifQ.JI4FkMWGpsaTSwNPXbpfUg'         
        ]
      );
    })
  );
});

self.addEventListener('fetch',function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      console.log(event.request)
      return response || fetch(event.request)
    })
  );
});
