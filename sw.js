const CACHE = 'idra-gh-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './inventory.json'
];

self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e)=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e)=>{
  const url = new URL(e.request.url);
  if(url.pathname.endsWith('/inventory.json')){
    e.respondWith((async()=>{
      const cache = await caches.open(CACHE);
      const cached = await cache.match(e.request);
      const net = fetch(e.request).then(r=>{
        if(r.ok) cache.put(e.request, r.clone());
        return r;
      }).catch(()=>null);
      return cached || net || fetch(e.request);
    })());
  } else if(ASSETS.includes(url.pathname) || url.origin===location.origin){
    e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
  }
});