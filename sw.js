const V="bb-v26",SHELL=["./","index.html","manifest.json","icon-192.png","icon-512.png","apple-touch-icon.png"];
const EXT=/(^|\.)(jsdelivr\.net|googleapis\.com|gstatic\.com)$/;
self.addEventListener("install",e=>e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=="GET"||(u.origin!==location.origin&&!EXT.test(u.hostname)))return;
  e.respondWith(fetch(r).then(x=>{if(x.ok||x.type==="opaque"){const c=x.clone();caches.open(V).then(h=>h.put(r,c))}return x}).catch(()=>caches.match(r).then(m=>m||caches.match("index.html"))));
});
