const V = "bb-v28";
const SHELL = [
  "./",
  "index.html",
  "styles.css",
  "fx.js",
  "app.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "Logo-notext.png"
];
const EXT = /(^|\.)(jsdelivr\.net|googleapis\.com|gstatic\.com)$/;

self.addEventListener("install", e => e.waitUntil(
  caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
));

self.addEventListener("activate", e => e.waitUntil(
  caches.keys()
    .then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x))))
    .then(() => self.clients.claim())
));

self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET") return;
  if (u.hostname.endsWith("supabase.co")) return;
  if (u.origin !== location.origin && !EXT.test(u.hostname)) return;
  e.respondWith(
    fetch(r).then(x => {
      if (x.status === 200 || x.type === "opaque") {
        const c = x.clone();
        caches.open(V).then(h => h.put(r, c));
      }
      return x;
    }).catch(() => caches.match(r).then(m =>
      m || (r.mode === "navigate" ? caches.match("index.html") : Response.error())
    ))
  );
});
