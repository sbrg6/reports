const SB_URL = "https://ejjhojeajjjbaczkcfwc.supabase.co";
const SB_KEY = "sb_publishable__IyRTTMoM-xHtvGDU1wvnw_-5rryX9t";
const LOGO = "logo-notext.png";
const LOGO_FULL = "Horizontal logo 2.png";
const STAGES = ["تحضير علمي", "كتابة وفحص تقني", "تدقيق علمي ونهائي", "نشر", "منشور"];
const STEP_LABELS = ["التحضير", "التقني", "التدقيق", "النشر", "منشور"];
const WHERE = ["متوقف عند العضو العلمي", "متوقف عند العضو التقني", "في مرحلة التدقيق العلمي", "في مرحلة النشر", "", "رجع للتعديل"];
const PUB = 4, REDO = 5, LATE_DAYS = 4;
const KINDS = [["lecture", "القسم النظري", "تم رفع", "محاضرة 3"], ["practical", "القسم العملي", "تم رفع", "عملي 1"], ["bank", "البنك", "تم تجهيز", "بنك 2"]];
const THEMES = [
  { id: "night", name: "نجوم الليل", sw: ["#0f1b3d", "#c9a64b"] },
  { id: "ink", name: "حبر", sw: ["#0d1424", "#b8c4da"] },
  { id: "gold", name: "ذهب قديم", sw: ["#1d150b", "#c9a24a"] },
  { id: "vangogh", name: "فان كوخ", sw: ["#15295c", "#f2c14e"] },
  { id: "team", name: "هوية الفريق", sw: ["#0b1a2e", "#2c91ed"] },
  { id: "aurora", name: "شفق قطبي", sw: ["#0a1e2c", "#46e6b0"] },
  { id: "ocean", name: "أعماق البحر", sw: ["#08263a", "#3fd0d8"] },
  { id: "code", name: "مطر الرموز", sw: ["#06241a", "#3df2a0"] },
  { id: "sakura", name: "أزهار الكرز", sw: ["#2c162e", "#f29cc0"] }
];
const ORD = ["الأول", "الثاني", "الثالث", "الرابع", "الخامس", "السادس", "السابع", "الثامن", "التاسع", "العاشر", "الحادي_عشر", "الثاني_عشر", "الثالث_عشر", "الرابع_عشر", "الخامس_عشر", "السادس_عشر"];
const SEM_START = new Date("2026-10-11T00:00:00").getTime();
const CH_LBL = { add_item: "أضيف ملف", del_item: "انحذف ملف", add_subject: "أضيفت مادة", del_subject: "انحذفت مادة", note: "تعديل السبب", rename: "تغيّر الاسم", lead: "تغيّر المسؤول" };

const ICONS = {
  plus: '<path d="M12 5v14M5 12h14"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  lecture: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M6 6h10"/>',
  flask: '<path d="M9 3h6M10 3v6L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9V3M7.5 15h9"/>',
  bank: '<path d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M12 8v8M8 12h8"/>',
  alert: '<path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>',
  send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
  doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
  down: '<path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14"/>',
  box: '<path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/>',
  hist: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l3 3"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M10.9 12.1 21 2M17 6l3 3M15 8l2 2"/>',
  out: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  palette: '<circle cx="12" cy="12" r="9"/><circle cx="8" cy="10" r="1.2"/><circle cx="12" cy="7.5" r="1.2"/><circle cx="16" cy="10" r="1.2"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/>',
  gear: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  rows: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  link: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
  chat: '<path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>'
};

const ic = (n, s = 18) => '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[n] || "") + '</svg>';

function el(tag, props, kids) {
  const e = document.createElement(tag);
  Object.assign(e, props || {});
  (kids || []).forEach(k => { if (k) e.appendChild(typeof k === "string" ? document.createTextNode(k) : k); });
  return e;
}
function B(cls, icon, label, onclick) {
  return el("button", {
    className: "btn " + cls,
    innerHTML: (icon ? ic(icon, 16) : "") + "<span>" + label + "</span>",
    onclick: async e => {
      const b = e.currentTarget;
      if (b.dataset.busy) return;
      b.dataset.busy = "1";
      b.disabled = true;
      try { await onclick(e); }
      finally { delete b.dataset.busy; b.disabled = false; }
    }
  });
}
function IB(icon, title, onclick) { return el("button", { className: "ibtn", title, innerHTML: ic(icon, 17), onclick }); }
function toast(t) {
  const x = document.getElementById("toast");
  x.textContent = t; x.classList.add("on");
  clearTimeout(toast.t); toast.t = setTimeout(() => x.classList.remove("on"), 2400);
}
function openSheet(title, nodes) {
  const ov = el("div", { className: "ov", onclick: e => { if (e.target === ov) ov.remove(); } });
  ov.appendChild(el("div", { className: "sheet" }, [el("h2", { textContent: title })].concat(nodes, [B("ghost", "", "إغلاق", () => ov.remove())])));
  document.body.appendChild(ov);
  return ov;
}
function closeSheets() { document.querySelectorAll(".ov").forEach(o => o.remove()); }

const app = document.getElementById("app");
{ const si = document.querySelector("#splash img"); if (si) si.src = LOGO; }
const hideSplash = () => { const x = document.getElementById("splash"); if (x) { x.classList.add("off"); setTimeout(() => x.remove(), 500); } };

let sb, me = null, prof = null, subjects = [], cur = null, profiles = {};
const LATE_SEVERE = 7;
const p2 = n => String(n).padStart(2, "0");
const fmt = d => { const x = new Date(d); return p2(x.getDate()) + "/" + p2(x.getMonth() + 1); };
const daysSince = d => Math.floor((Date.now() - new Date(d).getTime()) / 864e5);
const ITEM_COLS = "id,kind,name,stage,note,since,wf_stage,redo,due_at,warn_at,extended_hours,section,session_date,postponed,topics,cancelled";
const hrs = ms => ms / 36e5;
const fmtH = h => { h = Math.abs(h); if (h < 1) return Math.max(1, Math.round(h * 60)) + " د"; if (h < 24) return Math.round(h) + " س"; const r = Math.round(h % 24); return Math.floor(h / 24) + " يوم" + (r ? " و" + r + " س" : ""); };
const todayStr = () => { const d = new Date(); return d.getFullYear() + "-" + p2(d.getMonth() + 1) + "-" + p2(d.getDate()); };
const isLate = i => i.stage !== PUB && !i.postponed && (i.due_at ? Date.now() >= new Date(i.due_at) : daysSince(i.since) >= LATE_DAYS);
const sevOf = i => {
  if (i.stage === PUB || i.postponed) return 0;
  if (i.due_at) { const o = hrs(Date.now() - new Date(i.due_at)); return o >= 24 ? 2 : o >= 0 ? 1 : 0; }
  const d = daysSince(i.since); return d >= LATE_SEVERE ? 2 : d >= LATE_DAYS ? 1 : 0;
};
const dueText = i => {
  if (i.stage === PUB) return "";
  if (i.postponed) return "الجلسة مؤجلة";
  if (!i.due_at) return "من " + fmt(i.since) + (isLate(i) ? " · متأخر " + daysSince(i.since) + " يوم" : "");
  const left = hrs(new Date(i.due_at) - Date.now());
  return (left >= 0 ? "المتبقي " : "متأخر ") + fmtH(left) + (i.extended_hours > 0 ? " · ممدّد +" + i.extended_hours + " س" : "");
};
function extendBox(it, onSaved) {
  const inp = el("input", { type: "number", min: "0", step: "1", value: it.extended_hours || 0 });
  const msg = el("div", { className: "cap" });
  return el("div", { className: "score-box" }, [
    el("div", { className: "score-row" }, [el("span", { textContent: "تمديد (ساعات)" }), inp]),
    B("ghost", "", "حفظ التمديد", async e => {
      const b = e.currentTarget; b.disabled = true;
      const ok = await save(it, { extended_hours: Math.max(0, +inp.value || 0) });
      b.disabled = false;
      if (ok) onSaved(); else msg.textContent = "تعذّر الحفظ";
    }), msg
  ]);
}
const isAdmin = () => prof && prof.role === "admin";
const isTech = () => prof && prof.role === "tech";
async function loadProfiles() {
  const { data } = await sb.from("profiles").select("id,name");
  profiles = {}; (data || []).forEach(p => profiles[p.id] = p.name || "");
}
function hashColor(str) {
  let h = 0; for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h);
  return "hsl(" + (Math.abs(h) % 360) + " 58% 46%)";
}
function avatar(id) {
  const name = (profiles[id] || "").trim();
  return el("span", { className: "avatar", style: "background:" + hashColor(id || "x"), textContent: name ? name[0] : "؟", title: name || "" });
}
function emptyState(icon, title, sub) {
  const kids = [el("div", { className: "empty-ic", innerHTML: ic(icon, 22) }), el("div", { className: "empty-t", textContent: title })];
  if (sub) kids.push(el("div", { className: "empty-s", textContent: sub }));
  return el("div", { className: "empty" }, kids);
}
function showSkeleton() {
  mount(el("div", { className: "view" }, [
    el("h1", { textContent: "المواد" }),
    el("p", { className: "sub", textContent: "تابع كل ملف ومرحلته بمكان واحد." }),
    el("div", { className: "grid" }, [0, 1, 2, 3].map(() => el("div", { className: "card skel skel-card" })))
  ]));
}

function weekWord() { const w = Math.max(1, Math.floor((Date.now() - SEM_START) / 864e5 / 7) + 1); return ORD[Math.min(w, ORD.length) - 1]; }
function hashtags() { return "#السنة_الثانية_الفصل_الأول\n#تقرير_تجهيز_الأسبوع_" + weekWord(); }

function subjectPreview(s) {
  let out = s.name + ":";
  KINDS.forEach(([k, title, verb]) => {
    const its = s.items.filter(i => i.kind === k).sort((a, b) => a.id - b.id);
    const done = its.filter(i => i.stage === PUB).length;
    out += "\n\n• " + title.replace("القسم ", "") + ": (المجمل " + its.length + " محاضرات)";
    if (!its.length) { out += "\n- " + (k === "practical" ? "مافي عملي" : "لم يتم رفع شي بعد"); return; }
    if (done) out += k === "bank" ? "\n- تم تجهيز " + done + "." : "\n- تم رفع " + done + " على البوت.";
    its.filter(i => i.stage !== PUB).forEach(i => {
      out += "\n- " + i.name + " " + WHERE[i.stage] + (i.note && i.note.trim() ? " (" + i.note.trim() + ")" : "") + ".";
    });
  });
  return out;
}
function footerText(list) {
  const its = list.flatMap(s => s.items), up = (a, b) => its.filter(i => i.stage === PUB && daysSince(i.since) >= a && daysSince(i.since) < b).length;
  const w = up(0, 7), l = up(7, 14);
  return w > l ? "[ إنجاز هذا الأسبوع متقدّم عن الأسبوع الماضي🔥]" : w === l ? "[ إنجاز هذا الأسبوع مثل الأسبوع الماضي]" : "[ إنجاز هذا الأسبوع متراجع عن الأسبوع الماضي🥀]";
}
function previewText(list) {
  return hashtags() + "\n\n" + list.map(subjectPreview).join("\n\n") + "\n\n" + footerText(list);
}

async function fnCall(body) {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) return { ok: false, description: "سجّل دخول من جديد" };
  try {
    const r = await fetch(SB_URL + "/functions/v1/dynamic-worker", {
      method: "POST",
      headers: { "Authorization": "Bearer " + session.access_token, "apikey": SB_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    return await r.json().catch(() => ({ ok: false, description: "خطأ " + r.status }));
  } catch (e) { return { ok: false, description: "خطأ شبكة" }; }
}

async function sendGroup(btn) {
  if (!confirm("نرسل التقرير للمجموعة الآن؟")) return;
  const old = btn.innerHTML; btn.disabled = true;
  try {
    const x = await fnCall({});
    if (x.ok) toast("انرسل التقرير للمجموعة ✓");
    else toast("ما انرسل: " + (x.description || ""));
  } catch (e) { toast("خطأ شبكة، جرّب مرة تانية"); }
  finally { btn.disabled = false; btn.innerHTML = old; }
}

function applyTheme(id) {
  const t = THEMES.some(x => x.id === id) ? id : "night";
  document.documentElement.setAttribute("data-theme", t);
  try { localStorage.setItem("bb_theme", t); } catch (e) {}
  if (fxId !== t) fxStart(t);
  const m = document.querySelector("meta[name=theme-color]");
  if (m) m.content = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim() || "#08102a";
}

async function loadTheme() {
  const { data } = await sb.from("user_prefs").select("theme").eq("user_id", me.id).maybeSingle();
  applyTheme(data ? data.theme : "night");
}

async function init() {
  if (typeof supabase === "undefined") { app.textContent = "تعذّر تحميل مكتبة Supabase. تأكد من الإنترنت وحدّث الصفحة."; return; }
  sb = supabase.createClient(SB_URL, SB_KEY);
  const { data } = await sb.auth.getSession();
  if (data.session) { me = data.session.user; await afterLogin(); } else showLogin();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(console.error);}

async function afterLogin() {
  showSkeleton();
  const { data } = await sb.from("profiles").select("name,role").eq("id", me.id).maybeSingle();
  prof = data || { name: me.email, role: "lead" };
  await loadTheme();
  await Promise.all([loadSubjects(), loadProfiles()]);
  showList();
  const dl = /^#s([\w-]+)$/.exec(location.hash);
  if (dl) { const x = subjects.find(v => String(v.id) === dl[1]); if (x) showDetail(x); }
}

async function loadSubjects() {
  const { data, error } = await sb.from("subjects").select("id,name,lead_id,items(" + ITEM_COLS + ")").order("name");
  if (error) { toast("تعذّر تحميل المواد: " + error.message); subjects = []; return; }
  subjects = data || [];
  if (cur) cur = subjects.find(s => s.id === cur.id) || null;
}

async function logout() {
  applyTheme("night");
  await sb.auth.signOut();
  me = null; prof = null; subjects = []; cur = null;
  showLogin();
}
function topbar() {
  const who = el("div", { className: "me" }, [
    el("span", { textContent: (prof && prof.name) || (me && me.email) || "" }),
    IB("palette", "المظهر", showThemes),
    IB("key", "تغيير كلمة السر", showPw),
    IB("out", "خروج", logout)
  ]);
  return el("div", { className: "top" }, [
el("div", { className: "logo" }, [el("img", { src: "Horizontal logo 2.png", alt: "Blue Bits" })]),
    who
  ]);
}
function mount(node, noTop) {
  hideSplash();
  app.textContent = "";
  if (!noTop) app.appendChild(me ? topbar() : el("div", { className: "top" }, [el("div", { className: "logo" }, [el("img", { src: LOGO, alt: "Blue Bits" })])]));
  app.appendChild(node);
  window.scrollTo(0, 0);
}

function showLogin() {
  const em = el("input", { type: "email", placeholder: "الإيميل", autocomplete: "username" });
  const pw = el("input", { type: "password", placeholder: "كلمة السر", autocomplete: "current-password" });
  const msg = el("p", { className: "msg" });
  const f = el("form", { className: "login" }, [
    el("div", { className: "logo" }, [el("img", { src: LOGO, alt: "Blue Bits" })]),
    el("h1", { textContent: "أهلاً فيك" }),
    el("p", { className: "sub", textContent: "سجّل دخول لتتابع ملفات مادتك." }),
    em, pw,
    el("div", { className: "btns" }, [B("primary block", "", "دخول")]),
    msg
  ]);
  f.onsubmit = async e => {
    e.preventDefault(); msg.textContent = "جاري الدخول…";
    const { data, error } = await sb.auth.signInWithPassword({ email: em.value.trim(), password: pw.value });
    if (error) { msg.textContent = "الإيميل أو كلمة السر غلط."; return; }
    me = data.user; await afterLogin();
  };
  const stage = el("div", { className: "login-stage" }, [f]);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && !("ontouchstart" in window)) {
    stage.onmousemove = e => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
      f.style.transform = "perspective(1200px) rotateY(" + (px * 7) + "deg) rotateX(" + (py * -7) + "deg)";
    };
    stage.onmouseleave = () => { f.style.transform = "perspective(1200px) rotateY(0) rotateX(0)"; };
  }
  mount(stage, true);
}

const MO = {
  atom: '<circle cx="12" cy="12" r="1.8"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
  flask: '<path d="M9 3h6M10 3v6L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9V3M7.5 15h9"/><circle cx="11" cy="18" r=".8"/><circle cx="14" cy="17" r=".6"/>',
  drop: '<path d="M12 3s6.5 6.6 6.5 11a6.5 6.5 0 0 1-13 0C5.5 9.6 12 3 12 3zM9 15a3 3 0 0 0 3 3"/>',
  bone: '<path d="M8.6 15.4 15.4 8.6" stroke-width="2.6"/><circle cx="6" cy="16" r="2.2"/><circle cx="8" cy="18" r="2.2"/><circle cx="16" cy="6" r="2.2"/><circle cx="18" cy="8" r="2.2"/>',
  cell: '<circle cx="12" cy="12" r="9"/><circle cx="9.5" cy="10.5" r="3"/><circle cx="15.5" cy="15.5" r="1.5"/><circle cx="15.5" cy="8" r=".8"/>',
  pulse: '<path d="M2 12h5l2.5-7 4 14 2.5-7H22"/>',
  dna: '<path d="M6 2c0 6 12 6 12 10s-12 4-12 10M18 2c0 6-12 6-12 10s12 4 12 10M8.2 5.5h7.6M8.2 18.5h7.6M6 12h12"/>',
  leaf: '<path d="M5 21C5 11 11 4 20 4c0 9-6 15-15 17zM5 21 14 12"/>',
  virus: '<circle cx="12" cy="12" r="4.5"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"/>',
  shield: '<path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6z"/><path d="m8.8 12 2.3 2.3 4.2-4.6"/>',
  pill: '<rect x="2.5" y="8" width="19" height="8" rx="4" transform="rotate(-40 12 12)"/><path d="M12 8v8" transform="rotate(-40 12 12)"/>',
  scope: '<path d="M6 21h12M9 21c0-2.5 2-4 5-4M14 17a5.5 5.5 0 0 0 0-9M9.2 3.6l3.4 1.6-2.4 5.6-3.4-1.6zM10.9 8.4l1.9.9"/>',
  tooth: '<path d="M7.5 3C4 3 3.5 6.5 4.5 10c.9 3 1.7 5 2.2 8 .3 2.2 1.6 3.2 2.6.6.5-1.3.9-3 2.7-3s2.2 1.7 2.7 3c1 2.6 2.3 1.6 2.6-.6.5-3 1.3-5 2.2-8 1-3.5.5-7-3-7-2 0-3 1-4.5 1S9.5 3 7.5 3z"/>',
  brain: '<path d="M9.5 4A3.2 3.2 0 0 0 6.3 7a3.2 3.2 0 0 0-2 5.2A3.4 3.4 0 0 0 7 17.6 3 3 0 0 0 12 19V5.2A3 3 0 0 0 9.5 4zM14.5 4a3.2 3.2 0 0 1 3.2 3 3.2 3.2 0 0 1 2 5.2 3.4 3.4 0 0 1-2.7 5.4A3 3 0 0 1 12 19M8.5 9.5c1 0 1.5.5 1.5 1.5M15.5 9.5c-1 0-1.5.5-1.5 1.5"/>',
  sigma: '<path d="M18 4H6l7 8-7 8h12"/>',
  bars: '<path d="M4 20v-8M9.5 20V5M15 20v-6M20.5 20V9M2 20.5h20"/>',
  code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  en: '<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="700" font-family="serif" fill="currentColor" stroke="none">Aa</text>',
  ar: '<text x="12" y="19" text-anchor="middle" font-size="21" font-weight="700" font-family="IBM Plex Sans Arabic,serif" fill="currentColor" stroke="none">ع</text>',
  temple: '<path d="M2 9 12 3l10 6zM5 21V10M9.5 21V10M14.5 21V10M19 21V10M2 21.5h20"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3.2 3 3.2 15 0 18M12 3c-3.2 3-3.2 15 0 18"/>',
  cross: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
  dice: '<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><g fill="currentColor"><circle cx="8.5" cy="8.5" r="1.2"/><circle cx="15.5" cy="8.5" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="8.5" cy="15.5" r="1.2"/><circle cx="15.5" cy="15.5" r="1.2"/></g>',
  trap: '<path d="M3 20.5h18M4 20v-6M8 20V8.5M12 20V6M16 20V8.5M20 20v-6M4 14l4-5.5L12 6l4 2.5 4 5.5"/>',
  integ: '<path d="M16 3.5C13.5 2 11.5 3.2 11.5 6.5v11c0 3.3-2 4.5-4.5 3"/><g fill="currentColor"><circle cx="16.5" cy="4" r=".9"/><circle cx="6.5" cy="20" r=".9"/></g>',
  lp: '<path d="M5 19v-8l5-5 7 2 2 5v6z"/><path d="M3 15 21 6" stroke-dasharray="1.5 1.8"/><circle cx="17" cy="8" r="1.3" fill="currentColor"/>',
  chip: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><rect x="10" y="10" width="4" height="4"/><path d="M9.5 3v4M14.5 3v4M9.5 17v4M14.5 17v4M3 9.5h4M3 14.5h4M17 9.5h4M17 14.5h4"/>',
  matrix: '<path d="M8 4H5v16h3M16 4h3v16h-3"/><g fill="currentColor"><circle cx="9.5" cy="9" r="1"/><circle cx="14.5" cy="9" r="1"/><circle cx="9.5" cy="15" r="1"/><circle cx="14.5" cy="15" r="1"/></g>',
  bell: '<path d="M2 20h20M3 20c3.5 0 5-2 6.5-6.5S11 4 12 4s1.5 5 3 9.5S18.5 20 21 20M12 4v16"/>',
  graph: '<circle cx="5.5" cy="6" r="2.3"/><circle cx="18.5" cy="7" r="2.3"/><circle cx="12" cy="18.5" r="2.3"/><path d="M7.8 6.2l8.4.6M6.8 8l4 8.5M17.5 9.1l-4.3 7.4"/>',
  db: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  hex: '<path d="M12 2.5 20.5 7.2v9.6L12 21.5l-8.5-4.7V7.2z"/><path d="M12 7l4.3 2.4v4.7L12 16.5l-4.3-2.4V9.4z"/>'
};

const RULES = [
  [/احتمال|probab/, "dice", 268], [/تحليل\s+(ال)?عددي|numeric/, "trap", 175], [/برمجه\s+(ال)?(رياضي|خطي)|امثل|optimi|operations|ابحاث العمليات/, "lp", 28],
  [/تحليل|analys|calcul|تفاضل|تكامل/, "integ", 218], [/برمج|programm|حاسوب|computer|خوارزم|algorith/, "code", 140], [/الكترون|electron|دارات|كهرب|circuit|رقمي|منطق/, "chip", 48],
  [/جبر|linear|مصفوف|matri/, "matrix", 330], [/احصاء|statist/, "bell", 195], [/بيانيه|graph|بنيه معطيات|data struct|شبكات|network/, "graph", 100], [/قواعد (معطيات|بيانات)|database|sql/, "db", 15],
  [/كيمياء حيوي|biochem/, "drop", 350], [/فيزيولوج|وظائف|physiol/, "pulse", 345], [/فيزياء|physic/, "atom", 215], [/كيمياء|chem|عضوي/, "flask", 165],
  [/تشريح|anat|عظام/, "bone", 28], [/نسج|خليه|خلوي|جنين|histo|cyto|embryo|cell/, "cell", 285], [/وراث|جين|جزيئ|genet|molec/, "dna", 262],
  [/جراثيم|مكروب|فيروس|طفيل|micro|virol|parasit|bacter/, "virus", 95], [/مناع|immun/, "shield", 200], [/دوائ|صيدل|عقار|pharm|drug/, "pill", 330],
  [/مرضي|امراض|patho/, "scope", 18], [/اسنان|(^| )فم|dent|oral/, "tooth", 188], [/عصب|دماغ|نفس|neuro|psych|brain/, "brain", 308],
  [/احصاء|stat|احتمال/, "bars", 42], [/رياضي|تفاضل|تكامل|جبر|math|calcul|algebra/, "sigma", 250], [/حاسوب|برمج|معلوماتي|computer|program|code|algorith|informat/, "code", 205],
  [/انكليز|انجليز|english/, "en", 225], [/عربي|نحو|بلاغ|arabic/, "ar", 45], [/تاريخ|history|قانون|law|اخلاق|ethic|حقوق/, "temple", 35],
  [/جغراف|بيئ|صحه عامه|وبائ|geograph|environ|epidem|public health/, "globe", 175], [/احياء|بيولوج|نبات|حيوان|تغذي|biolog|botan|zool|nutri/, "leaf", 130],
  [/سريري|جراح|باطن|اسعاف|clinic|surg|medic|(^| )طب/, "cross", 355]
];

const norm = t => (t || "").toLowerCase().replace(/[\u064B-\u0652\u0640]/g, "").replace(/[أإآ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه");
function decor(name) {
  const n = norm(name);
  for (const [r, m, h] of RULES) if (r.test(n)) return { m, h };
  let h = 0; for (const c of n) h = (h * 31 + c.charCodeAt(0)) % 360;
  return { m: "hex", h };
}

const isSoon = i => {
  if (i.stage === PUB || i.postponed) return false;
  if (i.due_at && i.warn_at) return Date.now() >= new Date(i.warn_at) && Date.now() < new Date(i.due_at);
  const d = daysSince(i.since);
  return d >= LATE_DAYS - 1 && d < LATE_DAYS;
};

const lsGet = (k, d) => { try { return localStorage.getItem(k) || d; } catch (e) { return d; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };

let qStr = "", compact = lsGet("bb_compact", "0") === "1";
const orn = m => el("span", { className: "orn", innerHTML: '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width=".9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + MO[m] + '</svg>' });
const prio = s => {
  const L = s.items.filter(isLate);
  return (L.some(i => sevOf(i) === 2) ? 1e4 : 0) + L.length * 100 + s.items.filter(isSoon).length * 10 + s.items.filter(i => i.stage === REDO).length;
};
function progressRing(pct) {
  const r = 18, c = 2 * Math.PI * r, off = c * (1 - pct / 100);
  return '<svg width="46" height="46" viewBox="0 0 46 46" style="flex:none">' +
    '<circle cx="23" cy="23" r="18" fill="none" stroke="currentColor" stroke-opacity=".15" stroke-width="5"/>' +
    '<circle cx="23" cy="23" r="18" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"' +
    ' stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 23 23)"/>' +
    '<text x="23" y="27" text-anchor="middle" font-size="11" fill="currentColor">' + pct + '%</text></svg>';
}
function subjCard(s) {
  const d = decor(s.name), its = s.items.slice().sort((a, b) => a.id - b.id);
  const p = its.filter(i => i.stage === PUB).length, L = its.filter(isLate), S = its.filter(isSoon), right = [];
  if (L.length) right.push(el("span", { className: "chip" + (L.some(i => sevOf(i) === 2) ? " sev" : ""), textContent: L.length + " متأخر" }));
  if (S.length) right.push(el("span", { className: "chip soon", textContent: S.length + " قريب" }));
  if (s.lead_id === me.id) right.push(el("span", { className: "badge", textContent: "مادتك" }));
  if (s.lead_id) right.push(avatar(s.lead_id));
  const pct = its.length ? Math.round(p / its.length * 100) : 0;
  const b = el("button", { className: "card subj", onclick: () => showDetail(s) }, [
    orn(d.m),
    el("div", { className: "ring", style: "color:hsl(" + d.h + " 55% 62%)", innerHTML: progressRing(pct) }),
    el("div", { className: "row" }, [el("h2", { textContent: s.name }), el("div", { className: "row-right" }, right)]),
    its.length ? el("div", { className: "pips" }, its.map(i => el("span", { className: "pip" + (i.stage === PUB ? " on" : i.stage === REDO ? " redo" : isLate(i) ? " late" : isSoon(i) ? " soon" : "") }))) : null,
  ]);
  b.style.setProperty("--tint", "hsl(" + d.h + " 55% 62%)");
  return b;
}
function countUp(node, to) {
  if (!Number.isFinite(to) || to === 0) return;
  const t0 = performance.now(), dur = 700;
  const step = t => {
    const k = Math.min(1, (t - t0) / dur);
    node.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 3))));
    if (k < 1) requestAnimationFrame(step);
  };
  node.textContent = "0";
  requestAnimationFrame(step);
}

function showList(back) {
  cur = null;
  const all = subjects.flatMap(s => s.items);
  const pub = all.filter(i => i.stage === PUB).length, redo = all.filter(i => i.stage === REDO).length;
  const late = subjects.flatMap(s => s.items.filter(isLate).map(i => ({ s, i })));
  const soon = subjects.flatMap(s => s.items.filter(isSoon).map(i => ({ s, i })));
  const stat = (n, l, c) => el("div", { className: "stat " + (c || "") }, [el("b", { textContent: String(n) }), el("span", { textContent: l })]);
  const pct = all.length ? Math.round(pub / all.length * 100) : 0;
  const kids = [
    el("h1", { textContent: "المواد" }),
    el("p", { className: "sub", textContent: "تابع كل ملف ومرحلته بمكان واحد." }),
    el("div", { className: "stats" }, [stat(all.length, "ملف"), stat(pub, "مرفوع", "ok"), stat(redo, "للتعديل", "warn")]),
        el("div", { className: "legend", style: "display:flex;gap:14px;flex-wrap:wrap;font-size:12px;opacity:.85;margin:6px 0 2px" }, [
      el("span", { textContent: "● ضمن المهلة", style: "color:#3fcf8e" }),
      el("span", { textContent: "● قريب من المهلة", style: "color:#f5c451" }),
      el("span", { textContent: "● متأخر", style: "color:#ff6b6b" })
    ]),
    el("div", { className: "progress" }, [
      el("div", { className: "progress-top" }, [el("span", { textContent: isAdmin() ? "تقدّم الفصل" : "تقدّم مادتك" }), el("span", { textContent: pct + "%" })]),
      el("div", { className: "progress-track" }, [el("div", { className: "progress-fill", style: "width:" + pct + "%" })])
    ])
  ];
  const mine = subjects.filter(s => s.lead_id === me.id);
  if (mine.length) {
    const its = mine.flatMap(s => s.items), up = (a, b) => its.filter(i => i.stage === PUB && daysSince(i.since) >= a && daysSince(i.since) < b).length;
    const w = up(0, 7), l = up(7, 14), d = w - l, m = Math.max(w, l, 1);
    const bar = (t, n, c) => el("div", { className: "cmp " + c }, [el("span", { textContent: t }), el("i", { style: "width:" + Math.max(n / m * 100, 3) + "%" }), el("b", { textContent: String(n) })]);
    kids.push(el("div", { className: "card perf" }, [
      el("div", { className: "perf-h" }, [el("span", { textContent: "أداؤك" }), el("span", { className: "cap" + (d < 0 ? " sev" : ""), textContent: d > 0 ? "▲ أكتر بـ" + d + " من الأسبوع الماضي" : d < 0 ? "▼ أقل بـ" + (-d) + " من الأسبوع الماضي" : "مثل الأسبوع الماضي" })]),
      bar("هالأسبوع", w, "now"), bar("اللي قبله", l, "old")
    ]));
  }
  if (late.length) {
    const severe = late.some(({ i }) => sevOf(i) === 2);
    kids.push(el("button", { className: "card late", onclick: () => showLate(late) }, [
      el("span", { innerHTML: ic("alert", 18) }), el("span", { textContent: "ملفات متأخرة" }),
      el("span", { className: "chip" + (severe ? " sev" : "") }, [document.createTextNode(String(late.length))])
    ]));
  }
  if (soon.length) kids.push(el("button", { className: "card late soonc", onclick: () => showLate(soon, "ملفات اقترب موعدها") }, [
    el("span", { innerHTML: ic("alert", 18) }), el("span", { textContent: "اقترب موعدها" }), el("span", { className: "chip soon", textContent: String(soon.length) })
  ]));
  const acts = [];
  if (isAdmin()) acts.push(B("primary", "send", "إرسال للمجموعة", e => sendGroup(e.currentTarget)));
  if (subjects.length) acts.push(B("ghost", "doc", "تقرير الأسبوع", () => showReport(subjects)));

  if (isAdmin()) {
    const tools = [
      B("ghost", "gear", "إدارة المواد", showAdmin),
      B("ghost", "doc", "تقرير PDF", printReport),
      B("ghost", "doc", "تقرير المحتوى", e => sendContent(e.currentTarget)),
      B("ghost", "doc", "ملفات بانتظار التأكيد", showUploads),
      B("ghost", "hist", "مؤشرات الفرق", showHealth),
      B("ghost", "box", "الأرشيف", showArchive),
      B("ghost", "hist", "السجل", showChanges),
      B("ghost", "down", "نسخة CSV", backup)
    ];
    acts.push(B("ghost", "gear", "أدوات", () => openSheet("أدوات", tools)));
  }
  if (acts.length) kids.push(el("div", { className: "btns" }, acts));
  if (!subjects.length) kids.push(emptyState("box", "ما في مواد ظاهرة لحسابك لسا", "اطلب من الأدمن يربط مادة بحسابك."));
  
  const grid = el("div", { className: "grid" });
  const drawGrid = () => {
    grid.textContent = ""; grid.className = "grid" + (compact ? " compact" : "");
    const q = norm(qStr.trim());
    const list = subjects.filter(s => !q || norm(s.name).includes(q)).sort((a, b) => prio(b) - prio(a) || (b.lead_id === me.id) - (a.lead_id === me.id) || a.name.localeCompare(b.name, "ar"));
    list.forEach(s => grid.appendChild(subjCard(s)));
    if (q && !list.length) grid.appendChild(emptyState("search", "ما في مادة بهالاسم", "جرّب كلمة تانية."));
  };
  if (subjects.length) {
    const tb = IB(compact ? "grid" : "rows", compact ? "عرض البطاقات" : "عرض مضغوط", () => {
      compact = !compact; lsSet("bb_compact", compact ? "1" : "0");
      tb.innerHTML = ic(compact ? "grid" : "rows", 17); tb.title = compact ? "عرض البطاقات" : "عرض مضغوط"; drawGrid();
    });
    kids.push(el("div", { className: "tools" }, [el("input", { type: "search", placeholder: "ابحث عن مادة…", value: qStr, oninput: e => { qStr = e.target.value; drawGrid(); } }), tb]));
  }
  drawGrid();
  kids.push(grid);
  mount(el("div", { className: "view" + (back ? " dir-back" : "") }, kids));
    document.querySelectorAll(".stats .stat b").forEach(b => countUp(b, +b.textContent));
}

function showLate(list, title) {
  closeSheets();
  list.sort((a, b) => new Date(a.i.due_at || a.i.since) - new Date(b.i.due_at || b.i.since));
  const rows = list.map(({ s, i }) => {
    const sev = sevOf(i) === 2;
    return el("button", { className: "lrow", onclick: () => { closeSheets(); showDetail(s); } }, [
      el("strong", { textContent: s.name + " · " + i.name }),
      el("div", { className: "cap" + (sev ? " sev" : ""), textContent: STAGES[i.stage] + " · " + dueText(i) })
    ]);
  });
  openSheet(title || "ملفات متأخرة", rows);
}

function showReport(list) {
  closeSheets();
  const text = previewText(list);
  const cp = async (v, m) => { try { await navigator.clipboard.writeText(v); toast(m); } catch (e) { toast("تعذّر النسخ"); } };
  const btns = [];
  if (list === subjects && isAdmin()) btns.push(B("primary", "send", "إرسال للمجموعة", e => sendGroup(e.currentTarget)));
  btns.push(B("ghost", "copy", "نسخ", () => cp(text, "تم النسخ ✓")));
  btns.push(B("ghost", "chat", "واتساب", () => window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank", "noopener")));
  if (list !== subjects && list.length === 1) btns.push(B("ghost", "link", "نسخ رابط", () => cp(location.origin + location.pathname + "#s" + list[0].id, "تم نسخ الرابط ✓")));
  if (navigator.share) btns.push(B("ghost", "share", "مشاركة", () => navigator.share({ text }).catch(() => {})));
  openSheet("تقرير الأسبوع", [el("pre", { className: "pre", textContent: text }), el("div", { className: "btns" }, btns)]);
}

async function save(it, patch) {
  const now = new Date().toISOString();
  const body = { ...patch, updated_at: now };
  if ("stage" in patch) body.since = now;
  const { data: upd, error } = await sb.from("items").update(body).eq("id", it.id).select("due_at,warn_at,clock_start,wf_stage,redo,extended_hours,postponed").maybeSingle();
  if (error) { toast("تعذّر الحفظ: " + error.message); return false; }
  Object.assign(it, patch, upd || {});
  if (body.since) it.since = now;
  toast("تم الحفظ ✓");
  return true;
}

function itemCard(it, edit) {
  const card = el("div", { className: "item" });
  const render = () => {
    card.textContent = "";
    const redo = it.stage === REDO, late = isLate(it), soon = isSoon(it);
    card.classList.toggle("soon", soon); card.classList.toggle("lt", late);
    const head = el("div", { className: "item-h" });
    if (edit) {
      const nm = el("input", { className: "name-in", value: it.name });
      nm.onchange = () => save(it, { name: nm.value.trim() || it.name });
      head.appendChild(nm);
      head.appendChild(IB("trash", "حذف الملف", async () => {
        if (!confirm("حذف «" + it.name + "»؟")) return;
        const { error } = await sb.from("items").delete().eq("id", it.id);
        if (error) { toast("تعذّر الحذف"); return; }
        cur.items = cur.items.filter(x => x.id !== it.id);
        showDetail(cur);
      }));
    } else head.appendChild(el("strong", { textContent: it.name }));
    
    const stepper = el("div", { className: "stepper" });
    STEP_LABELS.forEach((lab, i) => {
      const on = !redo && i <= it.stage;
      const b = el("button", { className: "step" + (on ? " on" : "") + (!redo && i === it.stage ? " cur" : ""), textContent: lab, disabled: !edit, title: STAGES[i] });
      b.onclick = async () => {
                if (i === PUB && !confirm("نعلّم الملف منشور؟")) return;
        if (await save(it, { stage: i })) {
          render();
          card.classList.add(i === PUB ? "flash-ok" : "flash");
          setTimeout(() => card.classList.remove("flash", "flash-ok"), 700);
        }
      };
      stepper.appendChild(b);
    });
    const sev = late && sevOf(it) === 2;
    card.append(head, stepper,
      el("div", { className: "stage" + (redo ? " redo" : ""), textContent: redo ? "رجعت للتعديل" : STAGES[it.stage] }),
      el("div", { className: "cap" + (sev ? " sev" : soon ? " soon" : ""), textContent: dueText(it) + (soon ? " ⏳" : "") })
    );
        if (edit) {
        if (!redo) card.appendChild(el("button", { className: "redo-btn", textContent: "↩ رجّعه للتعديل", onclick: async () => { if (!confirm("نرجّع الملف للتعديل؟")) return; if (await save(it, { stage: REDO })) render(); } }));
      const note = el("input", { className: "note", placeholder: "السبب أو ملاحظة (تظهر بالتقرير)", value: it.note || "" });
      note.onchange = () => save(it, { note: note.value.trim() });
      card.appendChild(note);
    } else if (it.note) card.appendChild(el("div", { className: "cap", textContent: it.note }));
        if (edit && (it.kind === "lecture" || it.kind === "practical")) card.appendChild(topicsBox(it, render));
        card.appendChild(B("ghost", "hist", "السجل", () => showTimeline(it)));
    if (isAdmin()) { card.appendChild(extendBox(it, render)); }
    if (isAdmin()) card.appendChild(excusedBox(it, render));
        if (isTech() && it.wf_stage === 2) card.appendChild(techBox(it, render));
    function holderBox(it, onSaved) {
  const msg = el("div", { className: "cap" });
  const sel = el("select");
  sel.appendChild(el("option", { value: "", textContent: "— بدون إسناد —" }));
  const btn = B("ghost", "", "إعادة الإسناد", async e => {
    const b = e.currentTarget; b.disabled = true;
    const ok = await save(it, { holder_id: sel.value ? +sel.value : null });
    b.disabled = false;
    if (ok) onSaved(); else msg.textContent = "تعذّر الإسناد";
  });
  const box = el("div", { className: "score-box" }, [
    el("div", { className: "score-row" }, [el("span", { textContent: "الماسك الحالي" }), sel]),
    btn,
    msg
  ]);
  (async () => {
    const { data: mem } = await sb.from("members")
      .select("id,name").eq("active", true).eq("track", "technical").order("name");
    const { data: hold } = await sb.from("items")
      .select("holder_id").in("wf_stage", [2, 3, 4]).not("holder_id", "is", null);
    const load = {};
    (hold ?? []).forEach(h => { load[h.holder_id] = (load[h.holder_id] || 0) + 1; });
    (mem ?? []).forEach(m => sel.appendChild(el("option", {
      value: m.id,
      textContent: m.name + " (" + (load[m.id] || 0) + " ملف)",
      selected: m.id === it.holder_id
    })));
  })();
  return box;
}
        if (isTech() && it.wf_stage === 2) card.appendChild(holderBox(it, render));
  };
  render();
  return card;
}
function techBox(it, onSaved) {
  const msg = el("div", { className: "cap" });
  const sel = el("select", {}, [
    el("option", { value: "", textContent: "نتيجة الفحص" }),
    el("option", { value: "minor", textContent: "طفيف" }),
    el("option", { value: "major", textContent: "جذري" }),
  ]);
  sel.value = it.tech_review || "";
  const hint = el("div", { className: "cap", textContent: it.tech_review ? "" : "احفظ نتيجة الفحص أولاً ليتفعّل النقل للتدقيق" });
  const moveBtn = B("ghost", "", "نقل للتدقيق", async e => {
    const b = e.currentTarget; b.disabled = true;
    const ok = await save(it, { stage: 2 });
    b.disabled = false;
    if (ok) onSaved(); else msg.textContent = "تعذّر النقل";
  });
  moveBtn.disabled = !it.tech_review;
  moveBtn.title = it.tech_review ? "" : "احفظ نتيجة الفحص أولاً";
  return el("div", { className: "score-box" }, [
    el("div", { className: "score-row" }, [el("span", { textContent: "الفحص التقني" }), sel]),
    B("primary", "", "حفظ النتيجة", async e => {
      if (!sel.value) { msg.textContent = "اختر النتيجة أولاً"; return; }
      const b = e.currentTarget; b.disabled = true;
      const ok = await save(it, { tech_review: sel.value, tech_review_at: new Date().toISOString() });
      b.disabled = false;
      if (ok) onSaved(); else msg.textContent = "تعذّر الحفظ";
    }),
    hint,
    moveBtn,
    msg
  ]);
}
function scoreBox(it, onSaved) {
  const vals = { weight: it.weight || 1, quality: it.quality, timeliness: it.timeliness, accuracy: it.accuracy };
  const box = el("div", { className: "score-box" });
  const prev = el("div", { className: "score-preview" });
  const fields = [["weight", "الوزن", 0.5, 5, 0.5], ["quality", "الجودة", 0, 100, 5], ["timeliness", "الالتزام", 0, 100, 5], ["accuracy", "الدقة", 0, 100, 5]];
  const inputs = {};
  fields.forEach(([key, label, min, max, step]) => {
    const cur = vals[key] == null ? (key === "weight" ? 1 : 50) : vals[key];
    const num = el("b", { textContent: String(cur) });
    const rng = el("input", { type: "range", min, max, step, value: cur });
    rng.oninput = () => { num.textContent = rng.value; calc(); };
    inputs[key] = rng;
    box.appendChild(el("div", { className: "score-row" }, [el("span", { textContent: label }), rng, num]));
  });
  function calc() {
    const w = +inputs.weight.value, q = +inputs.quality.value, t2 = +inputs.timeliness.value, a = +inputs.accuracy.value;
    const pts = Math.round(w * 10 * (q * 0.4 + t2 * 0.3 + a * 0.3) / 100 * 100) / 100;
    prev.innerHTML = "النقاط المتوقعة: <b>" + pts + "</b>";
  }
  calc();
  box.appendChild(prev);
  const msg = el("div", { className: "cap" });
  box.appendChild(el("div", { className: "btns" }, [
    B("primary", "", "حفظ التقييم", async e => {
      const b = e.currentTarget; b.disabled = true;
      const ok = await save(it, { weight: +inputs.weight.value, quality: +inputs.quality.value, timeliness: +inputs.timeliness.value, accuracy: +inputs.accuracy.value });
      b.disabled = false;
      if (ok) { msg.textContent = ""; onSaved(); } else msg.textContent = "تعذّر الحفظ";
    })
  ]));
  box.appendChild(msg);
  return box;
}

function showDetail(s, fwd) {
  cur = s;
  closeSheets();
  const edit = s.lead_id === me.id || isAdmin();
  const head = [
    B("ghost", "", "→ كل المواد", async () => { await loadSubjects(); showList(true); }),
    el("h1", { textContent: s.name }),
    el("p", { className: "sub", textContent: edit ? "حدّد المرحلة لكل ملف، وكل تغيير بينحفظ فوراً." : "عرض فقط. التعديل لمسؤول المادة." }),
    el("div", { className: "btns" }, [B("ghost", "doc", "تقرير المادة", () => showReport([s]))])
  ];
  const sections = [];
    KINDS.forEach(([kind, title, , ph]) => {
    const group = kind === "lecture" ? ["lecture", "support", "summary"] : [kind];
    const rank = { lecture: 0, support: 1, summary: 2 };
    const its = s.items.filter(i => group.includes(i.kind)).sort((a, b) => (rank[a.kind] - rank[b.kind]) || (a.id - b.id));
    const icon = kind === "lecture" ? "lecture" : kind === "practical" ? "flask" : "bank";
    sections.push(el("div", { className: "section-h" }, [
      el("h2", { innerHTML: ic(icon, 20) + " <span style='vertical-align:middle; margin-right:6px;'>" + title + "</span>" }),
      el("span", { className: "cap", textContent: its.length + " ملف" })
    ]));
    if (!its.length) sections.push(emptyState(kind === "practical" ? "box" : "doc", kind === "practical" ? "ما في عملي لهالمادة" : "ما في ملفات لسا", edit ? "أضف أول ملف من تحت." : "بينضاف لما يبلّش مسؤول المادة."));
    let prev = null;
    its.forEach(it => {
      if (it.kind !== prev && it.kind !== "lecture") {
        sections.push(el("div", { className: "cap", textContent: it.kind === "support" ? "— الداعم —" : "— الملخص —" }));
      }
      prev = it.kind;
      sections.push(itemCard(it, edit));
    });
    if (edit) {
      const nm = el("input", { placeholder: "اسم الملف (مثال: " + ph + ")" });
      const typeSel = kind === "lecture" ? el("select", {}, [["lecture", "نظري"], ["support", "داعم"], ["summary", "ملخص"]].map(([v, l]) => el("option", { value: v, textContent: l }))) : null;
      const secSel = el("select", {}, [["A", "شعبة 1 (A)"], ["B", "شعبة 2 (B)"]].map(([v, l]) => el("option", { value: v, textContent: l })));
      secSel.value = lsGet("bb_sec", "A");
      const dateIn = el("input", { type: "date", value: todayStr() });
      const add = B("primary", "plus", "إضافة", async () => {
        const v = nm.value.trim();
        if (!v) {
          toast("اكتب اسم الملف أولاً");
          nm.classList.add("shake");
          nm.focus();
          setTimeout(() => nm.classList.remove("shake"), 400);
          return;
        }
        const k = typeSel ? typeSel.value : kind;
        const { data, error } = await sb.from("items").insert({ subject_id: s.id, kind: k, name: v, section: secSel.value || null, session_date: kind === "bank" ? null : (dateIn.value || null) }).select(ITEM_COLS).single();
        if (error) { toast("تعذّرت الإضافة: " + error.message); return; }
        lsSet("bb_sec", secSel.value);
        s.items.push(data);
        showDetail(s);
      });
      const row = kind === "bank" ? [nm, add] : [typeSel, nm, secSel, dateIn, add];
      sections.push(el("div", { className: "add" }, row.filter(Boolean)));
    }
  });
  mount(el("div", { className: "view" + (fwd === false ? "" : " dir-fwd") }, head.concat(sections)));
}

function showPw() {
  const a = el("input", { type: "password", placeholder: "كلمة السر الجديدة (6 أحرف أو أكتر)", autocomplete: "new-password" });
  const b = el("input", { type: "password", placeholder: "أعد كتابتها", autocomplete: "new-password" });
  const msg = el("p", { className: "msg" });
  openSheet("تغيير كلمة السر", [a, b, msg, B("primary block", "", "حفظ", async () => {
    if (a.value.length < 6) { msg.textContent = "كلمة السر لازم تكون 6 أحرف أو أكتر."; return; }
    if (a.value !== b.value) { msg.textContent = "الكلمتين مو متطابقتين."; return; }
    msg.textContent = "جاري الحفظ…";
    const { error } = await sb.auth.updateUser({ password: a.value });
    if (error) { msg.textContent = "تعذّر الحفظ: " + error.message; return; }
    closeSheets(); toast("تم تغيير كلمة السر ✓");
  })]);
}

function showThemes() {
  closeSheets();
  const cur_ = document.documentElement.getAttribute("data-theme") || "night";
  const grid = el("div", { className: "tgrid" });
  THEMES.forEach(t => {
    const card = el("button", {
      className: "tcard" + (t.id === cur_ ? " on" : ""), onclick: async () => {
        applyTheme(t.id);
        grid.querySelectorAll(".tcard").forEach(c => c.classList.remove("on"));
        card.classList.add("on");
        const { error } = await sb.from("user_prefs").upsert({ user_id: me.id, theme: t.id });
        toast(error ? "تعذّر الحفظ: " + error.message : "تم تغيير المظهر ✓");
      }
    }, [
      el("span", { className: "tsw", style: "background:linear-gradient(135deg," + t.sw[0] + " 50%," + t.sw[1] + " 50%)" }),
      el("span", { textContent: t.name })
    ]);
    grid.appendChild(card);
  });
  openSheet("المظهر", [grid]);
}

async function showAdmin() {
  closeSheets();
  const { data: pr, error } = await sb.from("profiles").select("id,name,role").order("name");
  if (error) { toast("تعذّر التحميل: " + error.message); return; }
  const people = pr || [];
  const box = el("div");
  openSheet("إدارة المواد", [box]);
  const leadSel = val => {
    const s = el("select");
    s.appendChild(el("option", { value: "", textContent: "— بدون مسؤول —" }));
    people.forEach(p => s.appendChild(el("option", { value: p.id, textContent: (p.name || p.id.slice(0, 6)) + (p.role === "admin" ? " (أدمن)" : ""), selected: p.id === val })));
    return s;
  };
  const upd = async (id, patch) => {
    const { error } = await sb.from("subjects").update(patch).eq("id", id);
    if (error) { toast("تعذّر الحفظ: " + error.message); return false; }
    toast("تم الحفظ ✓"); return true;
  };
  const draw = () => {
    box.textContent = "";
    box.appendChild(el("h2", { textContent: "المواد" }));
    const nn = el("input", { placeholder: "اسم مادة جديدة" });
    const ns = leadSel("");
    box.appendChild(el("div", { className: "arow" }, [nn, ns, B("primary", "plus", "إضافة مادة", async () => {
      const v = nn.value.trim();
      if (!v) { toast("اكتب اسم المادة أولاً"); return; }
      const { error } = await sb.from("subjects").insert({ name: v, lead_id: ns.value || null });
      if (error) { toast("تعذّرت الإضافة: " + error.message); return; }
      toast("انضافت المادة ✓"); await loadSubjects(); draw();
    })]));
    subjects.forEach(s => {
      const nm = el("input", { value: s.name });
      nm.onchange = async () => { const v = nm.value.trim(); if (!v) { nm.value = s.name; return; } if (await upd(s.id, { name: v })) s.name = v; };
      const sel = leadSel(s.lead_id);
      sel.onchange = async () => { if (await upd(s.id, { lead_id: sel.value || null })) s.lead_id = sel.value || null; };
      box.appendChild(el("div", { className: "arow" }, [nm, sel, B("danger", "trash", "حذف المادة وكل ملفاتها", async () => {
        if (!confirm("حذف «" + s.name + "» وكل ملفاتها نهائياً؟")) return;
        const { error } = await sb.from("subjects").delete().eq("id", s.id);
        if (error) { toast("تعذّر الحذف: " + error.message); return; }
        toast("انحذفت المادة"); await loadSubjects(); draw();
      })]));
    });
    const accBox = el("div");
    box.appendChild(el("div", { className: "section-h" }, [el("h2", { textContent: "الحسابات" })]));
    box.appendChild(accBox);
    renderAccounts(accBox);
  };
  await loadSubjects();
  draw();
}

async function renderAccounts(box) {
  box.textContent = "";
  const r = await fnCall({ action: "list_users" });
  if (!r.ok) { box.appendChild(el("p", { className: "msg", textContent: "تعذّر التحميل: " + (r.description || "") })); return; }
  const nm = el("input", { placeholder: "اسم المسؤول" });
  const em = el("input", { type: "email", placeholder: "الإيميل (مثال: physics@bluebits.com)", autocomplete: "off" });
  const pw = el("input", { type: "text", placeholder: "كلمة السر (6 أحرف أو أكتر)", autocomplete: "off" });
  box.appendChild(el("div", { className: "arow" }, [nm, em, pw, B("primary", "plus", "إنشاء حساب", async e => {
    const b = e.currentTarget; b.disabled = true;
    const x = await fnCall({ action: "create_user", name: nm.value.trim(), email: em.value.trim(), password: pw.value });
    b.disabled = false;
    if (x.ok) { toast("انشأ الحساب ✓ اربطه بمادة من فوق"); renderAccounts(box); }
    else toast("ما انشأ: " + (x.description || ""));
  })]));
  r.users.forEach(u => {
    const np = el("input", { type: "text", placeholder: "كلمة سر جديدة", autocomplete: "off" });
    box.appendChild(el("div", { className: "arow" }, [
      el("strong", { textContent: (u.name || "بدون اسم") + " · " + u.email + (u.role === "admin" ? " (أدمن)" : "") }),
      el("div", { className: "arow-2" }, [np, B("ghost", "", "تغيير كلمة السر", async () => {
        if (np.value.length < 6) { toast("6 أحرف على الأقل"); return; }
        const x = await fnCall({ action: "set_password", user_id: u.id, password: np.value });
        if (x.ok) { toast("تغيّرت كلمة السر ✓"); np.value = ""; }
        else toast("ما تغيّرت: " + (x.description || ""));
      })]),
      B("danger", "trash", "حذف الحساب", async () => {
        if (!confirm("نحذف حساب " + u.email + "؟ المادة اللي إلو بتصير بدون مسؤول.")) return;
        const x = await fnCall({ action: "delete_user", user_id: u.id });
        if (x.ok) { toast("انحذف الحساب ✓"); renderAccounts(box); }
        else toast("ما انحذف: " + (x.description || ""));
      })
    ]));
  });
}

async function showArchive() {
  closeSheets();
  const { data, error } = await sb.from("reports").select("id,created_at,source,body").order("created_at", { ascending: false }).limit(40);
  if (error) { toast("تعذّر تحميل الأرشيف: " + error.message); return; }
  const nodes = (data || []).map(r => {
    const when = new Date(r.created_at).toLocaleString("ar-SY", { dateStyle: "medium", timeStyle: "short" });
    const who = r.source === "auto" ? "تلقائي (جمعة 8 مساءً)" : "يدوي";
    return el("details", { className: "arow" }, [el("summary", { textContent: when + " · " + who }), el("pre", { className: "pre", textContent: r.body })]);
  });
  if (!nodes.length) nodes.push(emptyState("box", "ما في تقارير محفوظة لسا", "رح تنضاف هون كل تقرير بينرسل."));
  openSheet("الأرشيف", nodes);
}

async function showChanges() {
  closeSheets();
  const { data, error } = await sb.from("changes").select("created_at,actor_name,action,item_name,detail").order("created_at", { ascending: false }).limit(100);
  if (error) { toast("تعذّر تحميل السجل: " + error.message); return; }
  const tr = d => (d || "").split(" ").filter(Boolean).map(x => x.startsWith("stage:") ? "صار: " + (STAGES[+x.slice(6)] || "") : (CH_LBL[x] || x)).join(" · ");
  const nodes = (data || []).map(c => {
    const when = new Date(c.created_at).toLocaleString("ar-SY", { dateStyle: "short", timeStyle: "short" });
    return el("div", { className: "arow" }, [el("div", { className: "cap", textContent: when + " · " + (c.actor_name || "نظام") }), el("div", { textContent: (c.item_name || "") + (c.detail ? " · " + tr(c.detail) : "") })]);
  });
  if (!nodes.length) nodes.push(emptyState("hist", "ما في تغييرات مسجّلة لسا", "أي تعديل عالملفات أو المواد بينسجّل هون."));
  openSheet("السجل", nodes);
}

async function backup() {
  const { data: pr } = await sb.from("profiles").select("id,name");
  const who = {}; (pr || []).forEach(p => who[p.id] = p.name);
  const KL = { lecture: "نظري", practical: "عملي", bank: "بنك" };
  const rows = [["المادة", "المسؤول", "النوع", "الملف", "المرحلة", "من تاريخ", "السبب/ملاحظة"]];
  subjects.forEach(s => s.items.slice().sort((a, b) => a.id - b.id).forEach(i => rows.push([s.name, who[s.lead_id] || "", KL[i.kind] || i.kind, i.name, STAGES[i.stage] || "مرفوعة", new Date(i.since).toISOString().slice(0, 10), i.note || ""])));
  const q = v => '"' + String(v).replace(/"/g, '""') + '"';
  const csv = "\ufeff" + rows.map(r => r.map(q).join(",")).join("\r\n");
  const n = new Date();
  const a = el("a", { href: URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" })), download: "bluebits-backup-" + n.getFullYear() + "-" + p2(n.getMonth() + 1) + "-" + p2(n.getDate()) + ".csv" });
  document.body.appendChild(a); a.click(); a.remove();
  toast("تم تنزيل النسخة ✓");
}

try { fxStart(document.documentElement.getAttribute("data-theme")); } catch (e) {}
init();
// ============================================================
// المرحلة 3: مؤشرات الفرق + ظرف معروف
// الصق هذا الكود في آخر ملف app.js (على مستوى الملف، مش داخل دالة)
// ============================================================

// الوسيط: القيمة اللي في النص (مو المتوسط)
const medianOf = a => {
  if (!a || !a.length) return null;
  const s = [...a].sort((x, y) => x - y);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

// شاشة مؤشرات الفرق (للأدمن فقط)
async function showHealth() {
  const [{ data: evs }, { data: its }] = await Promise.all([
    sb.from("stage_events").select("item_id,kind,to_stage,happened_at,id").order("happened_at").order("id"),
    sb.from("items").select("id,excused"),
  ]);
  const excused = new Set((its ?? []).filter(i => i.excused).map(i => i.id));
  const CHAIN = ["created", "advance", "back", "return"];

  // نجمع أحداث كل ملف بالترتيب
  const byItem = {};
  (evs ?? []).forEach(e => { (byItem[e.item_id] = byItem[e.item_id] || []).push(e); });

  // مدة كل مرحلة = الفرق بين دخول المرحلة والحدث اللي بعدها
  const durs = {};
  for (const id of Object.keys(byItem)) {
    if (excused.has(+id)) continue;
    const list = byItem[id].filter(e => CHAIN.includes(e.kind) && e.to_stage != null);
    for (let k = 0; k + 1 < list.length; k++) {
      const h = (new Date(list[k + 1].happened_at) - new Date(list[k].happened_at)) / 36e5;
      if (h >= 0) (durs[list[k].to_stage] = durs[list[k].to_stage] || []).push(h);
    }
  }

  const rows = [];
  for (let w = 1; w <= 4; w++) {
    const a = durs[w] || [];
    const m = medianOf(a);
    rows.push(el("div", {
      className: "cap",
      textContent: STAGES[w - 1] + ": " + (m == null ? "ما فيه بيانات بعد" : m.toFixed(1) + " ساعة") + " (عينات: " + a.length + ")"
    }));
  }
  rows.push(el("div", {
    className: "cap",
    textContent: "الوسيط بالساعات، بدون الملفات المعذورة. العيّنات الصغيرة ما تعطي حكم على أحد."
  }));
  openSheet("مؤشرات الفرق", rows);
}

// خانة "ظرف معروف" على كل ملف (للأدمن فقط)
function excusedBox(it, onSaved) {
  const cb = el("input", { type: "checkbox", checked: !!it.excused });
  cb.onchange = async () => {
    const ok = await save(it, { excused: cb.checked });
    if (ok) onSaved(); else cb.checked = !cb.checked;
  };
  return el("label", { className: "cap" }, [cb, el("span", { textContent: " ظرف معروف (ما يُحسب بالمؤشرات)" })]);
}
async function showUploads() {
  const { data } = await sb.from("tg_upload_matches")
    .select("upload_id,item_id,file_name,subject,kind,item_name,wf_stage,sent_at")
    .eq("handled", false)
    .in("wf_stage", [1, 2, 3])
    .order("sent_at", { ascending: false });

  const rows = (data ?? []).map(r => {
    const msg = el("div", { className: "cap" });
    const row = el("div", { className: "score-box" }, [
      el("div", { className: "cap", textContent: r.subject + " · " + r.item_name + " (" + r.kind + ")" }),
      el("div", { className: "cap", textContent: "الملف: " + r.file_name }),
      el("div", { className: "cap", textContent: "المرحلة الحالية: " + STAGES[r.wf_stage - 1] + " ← اقتراح النقل للمرحلة التالية" }),
      B("primary", "", "تأكيد النقل", async e => {
        const b = e.currentTarget; b.disabled = true;
        const ok = await save({ id: r.item_id }, { stage: r.wf_stage });
        if (ok) {
          await sb.from("tg_uploads").update({ handled: true }).eq("id", r.upload_id);
          row.remove();
        } else {
          b.disabled = false;
          msg.textContent = "تعذّر النقل";
        }
      }),
      msg
    ]);
    return row;
  });

  openSheet("ملفات مرفوعة بانتظار التأكيد",
    rows.length ? rows : [el("div", { className: "cap", textContent: "ما فيه شي بانتظار التأكيد" })]);
}
function topicsBox(it, onSaved) {
  const msg = el("div", { className: "cap" });
  const base = "display:block;width:100%;min-height:70px;max-height:160px;padding:8px 10px;border:1px solid rgba(128,128,128,.45);border-radius:8px;background:rgba(128,128,128,.08);color:inherit;font:inherit;font-size:14px;box-sizing:border-box;resize:vertical;outline:none";
  const ta = el("textarea", {
    rows: 3,
    placeholder: "اكتب كل محور بسطر لحاله",
    value: it.topics || "",
    style: base
  });
  ta.onfocus = () => { ta.style.borderColor = "#2c91ed"; ta.style.boxShadow = "0 0 0 3px rgba(44,145,237,.25)"; };
  ta.onblur = () => { ta.style.borderColor = "rgba(128,128,128,.45)"; ta.style.boxShadow = "none"; };

  const cb = el("input", { type: "checkbox", checked: !!it.cancelled, style: "margin:0;width:16px;height:16px;flex:none" });
  cb.onchange = async () => {
    const ok = await save(it, { cancelled: cb.checked });
    if (ok) onSaved(); else { cb.checked = !cb.checked; msg.textContent = "تعذّر الحفظ"; }
  };
  const saveBtn = B("ghost", "", "حفظ المحاور", async e => {
    const b = e.currentTarget; b.disabled = true;
    const ok = await save(it, { topics: ta.value.trim() || null });
    b.disabled = false;
    msg.textContent = ok ? "✓ انحفظت المحاور" : "تعذّر الحفظ";
  });
  const cancelRow = el("div", { style: "display:flex;align-items:center;justify-content:flex-start;gap:8px;width:auto;align-self:flex-start;margin:0;padding:0" }, [
    cb,
    el("span", { textContent: "ملغاة لهذا الأسبوع", style: "display:inline;margin:0;padding:0" })
  ]);
  return el("div", { style: "display:flex;flex-direction:column;align-items:stretch;gap:8px;margin:10px 0" }, [
    el("div", { className: "cap", textContent: "محاور المحاضرة", style: "display:block;text-align:right;margin:0" }),
    ta,
    el("div", { style: "display:flex;align-items:center;justify-content:flex-start;gap:8px;flex-wrap:wrap" }, [saveBtn, msg]),
    cancelRow
  ]);
}
async function sendContent(btn) {
  if (!confirm("نرسل تقرير المحتوى للمجموعة الآن؟")) return;
  btn.disabled = true;
  try {
    const x = await fnCall({ action: "content" });
    toast(x.ok ? (x.sent ? "انرسل تقرير المحتوى ✓" : "ما فيه محاور جديدة هالأسبوع") : "ما انرسل: " + (x.description || ""));
  } catch (e) { toast("خطأ شبكة، جرّب مرة تانية"); }
  finally { btn.disabled = false; }
}
async function showTimeline(it) {
  const [{ data: evs }, { data: profs }, { data: mems }] = await Promise.all([
    sb.from("stage_events").select("kind,from_stage,to_stage,holder_id,hours,note,happened_at,actor_id")
      .eq("item_id", it.id).order("happened_at").order("id"),
    sb.from("profile_names").select("id,name"),
    sb.from("members").select("id,name"),
  ]);
  const who = {}, mem = {};
  (profs ?? []).forEach(p => who[p.id] = p.name);
  (mems ?? []).forEach(m => mem[m.id] = m.name);
  const when = t => new Date(t).toLocaleString("ar", { timeZone: "Asia/Damascus", dateStyle: "short", timeStyle: "short" });
  const label = e => {
    switch (e.kind) {
      case "created":  return "أُضيف الملف";
      case "advance":  return "انتقل إلى: " + STAGES[e.to_stage - 1];
      case "back":     return "رجع إلى: " + STAGES[e.to_stage - 1];
      case "return":   return "رُجّع للتعديل" + (e.note ? " (" + e.note + ")" : "");
      case "reassign": return "أُسند إلى: " + (mem[e.holder_id] || "بدون إسناد");
      case "extend":   return "تمديد " + e.hours + " ساعة";
      case "postpone": return "تأجيل";
      default:         return e.kind;
    }
  };
  const rows = (evs ?? []).map(e => el("div", { className: "item", style: "padding:10px 12px" }, [
    el("div", { className: "cap", textContent: when(e.happened_at) + " · " + (who[e.actor_id] || "نظام") }),
    el("div", { textContent: label(e) })
  ]));
  openSheet("خط زمني: " + it.name,
    rows.length ? rows : [el("div", { className: "cap", textContent: "ما في أحداث مسجّلة لهالملف" })]);
}
function printReport() {
  const E = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const kindName = { lecture: "نظري", practical: "عملي", bank: "بنك", support: "داعم", summary: "ملخص" };
  const all = subjects.flatMap(s => s.items);
  const cnt = {
    total: all.length,
    pub: all.filter(i => i.stage === PUB).length,
    late: all.filter(i => isLate(i) && i.stage !== PUB).length,
    soon: all.filter(i => isSoon(i) && i.stage !== PUB).length,
  };
  const pill = (txt, cls) => '<span class="pill ' + cls + '">' + E(txt) + '</span>';
  const kpi = (n, l) => '<div class="kpi"><b>' + n + '</b><span>' + l + '</span></div>';
  const statusOf = i => i.stage === PUB ? ["منشور", "ok"] : i.stage === REDO ? ["رجع للتعديل", "warn"] : [STAGES[i.stage], "neutral"];
  const flagOf = i => i.postponed ? ["مؤجل", "neutral"] : isLate(i) ? ["متأخر", "bad"] : isSoon(i) ? ["قريب", "warn"] : ["ضمن المهلة", "ok"];

  const sections = subjects.map(s => {
    const its = s.items.slice().sort((a, b) => a.id - b.id);
    const pub = its.filter(i => i.stage === PUB).length;
    const pct = its.length ? Math.round(pub / its.length * 100) : 0;
    const head = '<div class="subj"><div class="subj-h"><h2>' + E(s.name) + '</h2><span class="pct">' + pct + '%</span></div>' +
      '<div class="bar"><i style="width:' + pct + '%"></i></div>';
    if (!its.length) return head + '<p class="empty">ما في ملفات</p></div>';
    const rows = its.map(i => {
      const [st, sc] = statusOf(i), [fl, fc] = flagOf(i);
      return '<tr><td>' + E(kindName[i.kind] || i.kind) + '</td><td>' + E(i.name) + '</td><td>' + pill(st, sc) + '</td><td>' + pill(fl, fc) + '</td></tr>';
    }).join("");
    return head + '<table><thead><tr><th>النوع</th><th>الملف</th><th>المرحلة</th><th>الحالة</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
  }).join("");

  const css = `
body{font-family:system-ui,sans-serif;margin:0;color:#1d2433;background:#fff}
.wrap{padding:28px 32px}
.top{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:3px solid #1f3a8a;padding-bottom:12px;margin-bottom:18px}
.top h1{margin:0;font-size:22px;color:#1f3a8a}
.top .d{font-size:12px;color:#667}
.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px}
.kpi{border:1px solid #dde;border-radius:10px;padding:10px 12px}
.kpi b{display:block;font-size:22px}
.kpi span{font-size:12px;color:#667}
.subj{margin:18px 0 8px;break-inside:avoid}
.subj-h{display:flex;justify-content:space-between;align-items:center}
.subj h2{font-size:16px;margin:0}
.pct{font-weight:700;color:#1f3a8a}
.bar{height:6px;background:#e6e9f2;border-radius:4px;overflow:hidden;margin:6px 0 8px}
.bar i{display:block;height:100%;background:#1f3a8a}
table{width:100%;border-collapse:collapse;font-size:12.5px}
th{background:#f3f5fa;text-align:right;padding:7px 8px;font-weight:600}
td{border-bottom:1px solid #eef0f5;padding:7px 8px;text-align:right}
.pill{display:inline-block;padding:2px 9px;border-radius:999px;font-size:11.5px}
.ok{background:#e3f6ea;color:#17703a}.warn{background:#fff4d6;color:#8a5a00}
.bad{background:#fde4e4;color:#b42318}.neutral{background:#eceef3;color:#444}
.empty{color:#889;font-size:13px}
@media print{.wrap{padding:0}}
`;

  const html = '<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>تقرير الملفات</title><style>' + css + '</style></head><body><div class="wrap">' +
    '<div class="top"><h1>تقرير الملفات</h1><div class="d">' + E(new Date().toLocaleDateString("ar", { timeZone: "Asia/Damascus" })) + '</div></div>' +
    '<div class="kpis">' + kpi(cnt.total, "ملف") + kpi(cnt.pub, "منشور") + kpi(cnt.late, "متأخر") + kpi(cnt.soon, "قريب") + '</div>' +
    sections + '</div><script>window.onload=function(){window.print()}<\/script></body></html>';

  const w = window.open("", "_blank");
  if (!w) { toast("اسمح بالنوافذ المنبثقة للموقع"); return; }
  w.document.write(html);
  w.document.close();
}
  
