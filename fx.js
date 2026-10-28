const rnd = (a, b) => a + Math.random() * (b - a);
const TAU = 6.2832;
const FX = {};

const mix = (...fs) => (W, H, c) => {
  const a = fs.map(f => f(W, H, c));
  return (t, dt) => a.forEach(f => f(t, dt));
};

const blobs = (cols, sp = 1) => (W, H, c) => {
  const B = cols.map(k => ({
    a: rnd(0, TAU), b: rnd(0, TAU), fx: rnd(.05, .11) * sp, fy: rnd(.04, .09) * sp, r: rnd(.4, .7) * Math.max(W, H), k
  }));
  return t => {
    c.globalCompositeOperation = "lighter";
    for (const o of B) {
      const x = W / 2 + Math.sin(t * o.fx + o.a) * W * .5;
      const y = H / 2 + Math.cos(t * o.fy + o.b) * H * .45;
      const g = c.createRadialGradient(x, y, 0, x, y, o.r);
      g.addColorStop(0, o.k);
      g.addColorStop(1, "rgba(0,0,0,0)");
      c.fillStyle = g;
      c.fillRect(0, 0, W, H);
    }
    c.globalCompositeOperation = "source-over";
  };
};

const motes = (rgb, n, dir = 1) => (W, H, c) => {
  const P = Array.from({ length: n }, () => ({
    x: rnd(0, W), y: rnd(0, H), r: rnd(1, 3.2), v: rnd(8, 26), p: rnd(0, TAU)
  }));
  return (t, dt) => {
    for (const p of P) {
      p.y -= p.v * dt * dir;
      if (p.y < -8) p.y = H + 8;
      if (p.y > H + 8) p.y = -8;
      const x = p.x + Math.sin(t * .5 + p.p) * 14;
      const a = .25 + .45 * (.5 + .5 * Math.sin(t * 1.6 + p.p));
      const g = c.createRadialGradient(x, p.y, 0, x, p.y, p.r * 3.5);
      g.addColorStop(0, "rgba(" + rgb + "," + a + ")");
      g.addColorStop(1, "rgba(" + rgb + ",0)");
      c.fillStyle = g;
      c.beginPath();
      c.arc(x, p.y, p.r * 3.5, 0, TAU);
      c.fill();
    }
  };
};

const stars = d => (W, H, c) => {
  const S = Array.from({ length: Math.round(W * H / d) }, () => ({
    x: rnd(0, W), y: rnd(0, H), r: rnd(.4, 1.4), p: rnd(0, TAU), s: rnd(.6, 2.2)
  }));
  return t => {
    for (const s of S) {
      c.fillStyle = "rgba(246,238,211," + (.3 + .7 * (.5 + .5 * Math.sin(t * s.s + s.p))) + ")";
      c.beginPath();
      c.arc(s.x, s.y, s.r, 0, TAU);
      c.fill();
    }
  };
};

const shoot = (W, H, c) => {
  let sh = null, nx = 3;
  return (t, dt) => {
    if (!sh && t > nx) {
      sh = { x: rnd(W * .4, W), y: rnd(0, H * .35), l: 0 };
      nx = t + rnd(5, 10);
    }
    if (sh) {
      sh.l += dt * 1.5;
      const x = sh.x - sh.l * 340, y = sh.y + sh.l * 170;
      const g = c.createLinearGradient(x, y, x + 100, y - 50);
      g.addColorStop(0, "rgba(255,255,255," + Math.max(1 - sh.l, 0) + ")");
      g.addColorStop(1, "rgba(255,255,255,0)");
      c.strokeStyle = g;
      c.lineWidth = 1.8;
      c.beginPath();
      c.moveTo(x, y);
      c.lineTo(x + 100, y - 50);
      c.stroke();
      if (sh.l > 1) sh = null;
    }
  };
};

FX.night = mix(blobs(["rgba(44,95,208,.16)", "rgba(201,166,75,.07)"], .6), stars(6000), shoot);
FX.ink = mix(blobs(["rgba(70,110,200,.2)", "rgba(120,140,190,.14)", "rgba(40,70,140,.22)"], 1.2), motes("184,196,218", 22));
FX.gold = mix(blobs(["rgba(201,162,74,.14)", "rgba(120,70,20,.2)"], .7), motes("240,205,120", 60));

FX.vangogh = (W, H, c) => {
  const off = document.createElement("canvas");
  off.width = W; off.height = H;
  const o = off.getContext("2d");
  const g0 = o.createLinearGradient(0, 0, 0, H);
  g0.addColorStop(0, "#0a1840"); g0.addColorStop(1, "#1b3a7a");
  o.fillStyle = g0; o.fillRect(0, 0, W, H);
  const PAL = ["#2f5fb8", "#4a82d8", "#7fb0e8", "#1d3f86", "#5a9bd0", "#2f5fb8", "#f2c14e", "#f6eed3"];
  const V = [[.3, .3, .22], [.78, .62, .18]];
  const P = Array.from({ length: Math.round(W * H / 450) }, () => ({
    x: rnd(0, W), y: rnd(0, H), k: PAL[Math.random() * PAL.length | 0], w: rnd(1.2, 3)
  }));
  let tt = 0;
  const field = (x, y) => {
    let vx = Math.sin(y * .012 + tt * .4) + Math.cos(x * .007 - tt * .3) * .6;
    let vy = Math.cos(x * .011 + tt * .35) + Math.sin(y * .006 + tt * .25) * .6;
    for (const [a, b, r] of V) {
      const dx = x - a * W, dy = y - b * H, d = Math.hypot(dx, dy) + 1;
      const q = 3 * Math.exp(-d / (r * Math.max(W, H)));
      vx += -dy / d * q; vy += dx / d * q;
    }
    return [vx, vy];
  };
  const step = dt => {
    tt += dt; o.fillStyle = "rgba(10,24,64,.05)"; o.fillRect(0, 0, W, H);
    o.lineCap = "round"; o.globalAlpha = .55;
    for (const p of P) {
      const [vx, vy] = field(p.x, p.y), nx = p.x + vx * dt * 38, ny = p.y + vy * dt * 38;
      o.strokeStyle = p.k; o.lineWidth = p.w;
      o.beginPath(); o.moveTo(p.x, p.y); o.lineTo(nx, ny); o.stroke();
      p.x = nx; p.y = ny;
      if (nx < 0 || nx > W || ny < 0 || ny > H || Math.random() < .004) {
        p.x = rnd(0, W); p.y = rnd(0, H);
      }
    }
    o.globalAlpha = 1;
  };
  for (let i = 0; i < 160; i++) step(.05);
  const SX = [[.2, .2, 5], [.7, .1, 6], [.52, .34, 4], [.1, .5, 4.5], [.88, .45, 5], [.4, .08, 3.5]];
  return (t, dt) => {
    step(dt || .03); c.drawImage(off, 0, 0);
    const mx = W * .82, my = H * .14, m = c.createRadialGradient(mx, my, 0, mx, my, 70);
    m.addColorStop(0, "rgba(246,230,150,.95)"); m.addColorStop(.3, "rgba(242,193,78,.5)"); m.addColorStop(1, "rgba(242,193,78,0)");
    c.fillStyle = m; c.fillRect(mx - 70, my - 70, 140, 140);
    c.beginPath(); c.arc(mx, my, 20, 0, TAU); c.fillStyle = "#f6e496"; c.fill();
    for (const [a, b, r] of SX) {
      const x = a * W, y = b * H, p = .8 + .2 * Math.sin(t * 1.5 + a * 9);
      for (let k = 3; k > 0; k--) {
        c.beginPath(); c.arc(x, y, r * k * 1.5 * p, 0, TAU);
        c.fillStyle = "rgba(246,238,211," + .1 / k + ")"; c.fill();
      }
      c.beginPath(); c.arc(x, y, r * .6, 0, TAU); c.fillStyle = "#f6eed3"; c.fill();
    }
    const sw = Math.sin(t * .7) * 6; c.fillStyle = "rgba(3,10,26,.92)";
    c.beginPath(); c.moveTo(W * .02, H);
    c.bezierCurveTo(0, H * .78, W * .07 + sw, H * .55, W * .1 + sw, H * .42);
    c.bezierCurveTo(W * .14 + sw, H * .55, W * .2, H * .78, W * .17, H); c.fill();
    c.beginPath(); c.moveTo(0, H); c.lineTo(0, H * .93);
    c.bezierCurveTo(W * .3, H * .88, W * .62, H * .97, W, H * .92); c.lineTo(W, H); c.fill();
  };
};

FX.team = (W, H, c) => {
  const N = Math.round(W * H / 9000);
  const P = Array.from({ length: N }, () => ({
    x: rnd(0, W), y: rnd(0, H), vx: rnd(-9, 9), vy: rnd(-9, 9), r: rnd(2.5, 6), p: rnd(0, TAU)
  }));
  const bits = Array.from({ length: Math.round(W / 14) }, () => ({
    x: rnd(0, W), y: rnd(0, H), v: rnd(10, 30), ch: Math.random() < .5 ? "0" : "1", a: rnd(.08, .22)
  }));
  const hex = (x, y, r) => {
    c.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = i * TAU / 6 + .5236;
      c[i ? "lineTo" : "moveTo"](x + r * Math.cos(a), y + r * Math.sin(a));
    }
    c.closePath();
  };
  return (t, dt) => {
    c.font = "12px monospace"; c.fillStyle = "#2c91ed";
    for (const b of bits) {
      b.y -= b.v * dt;
      if (b.y < -10) { b.y = H + 10; b.x = rnd(0, W); b.ch = Math.random() < .5 ? "0" : "1"; }
      c.globalAlpha = b.a; c.fillText(b.ch, b.x, b.y);
    }
    c.globalAlpha = 1;
    for (const p of P) {
      p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const a = P[i], b = P[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          c.strokeStyle = "rgba(44,145,237," + .28 * (1 - d / 130) + ")";
          c.lineWidth = 1; c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
        }
      }
    }
    for (const p of P) {
      c.strokeStyle = "rgba(120,190,255," + (.45 + .4 * Math.sin(t * 1.4 + p.p)) + ")";
      c.lineWidth = 1.3; hex(p.x, p.y, p.r); c.stroke();
    }
  };
};

FX.aurora = mix(stars(9000), shoot, (W, H, c) => {
  const K = ["60,230,170", "40,180,220", "150,90,240"];
  return t => {
    c.globalCompositeOperation = "lighter";
    K.forEach((k, j) => {
      for (let x = 0; x < W; x += 6) {
        const n = Math.sin(x * .006 + t * .25 + j * 2) + Math.sin(x * .014 - t * .4 + j) * .5;
        const top = H * (.1 + .1 * j) + n * H * .06;
        const len = H * (.3 + .12 * Math.sin(x * .01 + t * .3 + j * 3));
        const a = .11 + .08 * Math.sin(x * .02 + t * .6 + j);
        const g = c.createLinearGradient(0, top, 0, top + len);
        g.addColorStop(0, "rgba(" + k + ",0)"); g.addColorStop(.4, "rgba(" + k + "," + a + ")"); g.addColorStop(1, "rgba(" + k + ",0)");
        c.fillStyle = g; c.fillRect(x, top, 6, len);
      }
    });
    c.globalCompositeOperation = "source-over";
  };
});

FX.ocean = mix(blobs(["rgba(30,160,190,.16)", "rgba(20,90,140,.2)"], .6), (W, H, c) => {
  const Bu = Array.from({ length: Math.round(W / 9) }, () => ({
    x: rnd(0, W), y: rnd(0, H), r: rnd(1.5, 6), v: rnd(14, 45), p: rnd(0, TAU)
  }));
  return (t, dt) => {
    c.globalCompositeOperation = "lighter";
    for (let i = 0; i < 5; i++) {
      const x = W * (.05 + .22 * i) + Math.sin(t * .22 + i * 1.7) * 40;
      const w = Math.sin(t * .3 + i) * 60;
      const g = c.createLinearGradient(0, 0, 0, H * .85);
      g.addColorStop(0, "rgba(120,230,240,.13)"); g.addColorStop(1, "rgba(120,230,240,0)");
      c.fillStyle = g; c.beginPath(); c.moveTo(x, 0); c.lineTo(x + 70, 0);
      c.lineTo(x + 150 + w, H * .85); c.lineTo(x - 50 + w, H * .85); c.fill();
    }
    c.globalCompositeOperation = "source-over";
    for (const b of Bu) {
      b.y -= b.v * dt; if (b.y < -10) { b.y = H + 10; b.x = rnd(0, W); }
      const x = b.x + Math.sin(t * 1.2 + b.p) * 8;
      c.strokeStyle = "rgba(190,245,250,.35)"; c.lineWidth = 1; c.beginPath(); c.arc(x, b.y, b.r, 0, TAU); c.stroke();
      c.fillStyle = "rgba(255,255,255,.4)"; c.beginPath(); c.arc(x - b.r * .3, b.y - b.r * .3, b.r * .22, 0, TAU); c.fill();
    }
  };
});

FX.code = (W, H, c) => {
  const G = "01∑∫π√∞≈{}<>λΔθ∂≠⊕", cw = 18, n = Math.ceil(W / cw), L = 15;
  const C = Array.from({ length: n }, () => ({ y: rnd(-H, 0) / cw, v: rnd(5, 13) }));
  return (t, dt) => {
    c.font = "15px monospace"; c.textAlign = "center";
    for (let i = 0; i < n; i++) {
      const o = C[i]; o.y += o.v * dt;
      if (o.y - L > H / cw) { o.y = rnd(-10, 0); o.v = rnd(5, 13); }
      for (let k = 0; k < L; k++) {
        const r = Math.floor(o.y) - k; if (r < 0) continue;
        c.fillStyle = k ? "rgba(61,242,160," + (1 - k / L) * .55 + ")" : "rgba(220,255,235,.95)";
        c.fillText(G[(i * 7 + r * 13 + (k ? Math.floor(t * .5) : 0)) % G.length], i * cw + cw / 2, r * cw);
      }
    }
  };
};

FX.sakura = mix(blobs(["rgba(242,156,192,.12)", "rgba(150,80,170,.16)"], .5), (W, H, c) => {
  const P = Array.from({ length: Math.round(W * H / 14000) }, () => ({
    x: rnd(0, W), y: rnd(-H, H), s: rnd(5, 11), v: rnd(18, 42), a: rnd(0, TAU), w: rnd(.6, 1.6), r: rnd(-1, 1)
  }));
  return (t, dt) => {
    const wind = Math.sin(t * .3) * 18 + 10;
    for (const p of P) {
      p.y += p.v * dt; p.x += (wind + Math.sin(t * p.w + p.a) * 22) * dt; p.a += p.r * dt * 1.4;
      if (p.y > H + 14) { p.y = -14; p.x = rnd(-30, W); } if (p.x > W + 20) p.x = -20;
      c.save(); c.translate(p.x, p.y); c.rotate(p.a); c.scale(1, .55 + .45 * Math.abs(Math.sin(t * p.w + p.a)));
      c.fillStyle = "rgba(250,170,205,.75)"; c.beginPath(); c.ellipse(0, 0, p.s, p.s * .6, 0, 0, TAU); c.fill();
      c.fillStyle = "rgba(255,225,238,.5)"; c.beginPath(); c.ellipse(-p.s * .2, 0, p.s * .45, p.s * .25, 0, 0, TAU); c.fill();
      c.restore();
    }
  };
});

let fxId = "", fxRaf = 0, fxW = 0, fxH = 0;

function fxStart(id) {
  if (!FX[id]) id = "night";
  fxId = id; cancelAnimationFrame(fxRaf);
  const cv = document.getElementById("bg"), c = cv.getContext("2d");
  const dpr = Math.min(devicePixelRatio || 1, 1.5), W = fxW = innerWidth, H = fxH = innerHeight;
  cv.width = W * dpr; cv.height = H * dpr; c.setTransform(dpr, 0, 0, dpr, 0, 0);
  let f;
  try { f = FX[id](W, H, c); c.clearRect(0, 0, W, H); f(0, .016); } catch (e) { c.clearRect(0, 0, W, H); return; }
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  let last = 0; const t0 = performance.now();
  const loop = now => {
    fxRaf = requestAnimationFrame(loop);
    if (document.hidden || now - last < 32) return;
    const dt = Math.min((now - last) / 1e3, .1); last = now;
    try { c.clearRect(0, 0, W, H); f((now - t0) / 1e3, dt); } catch (e) { cancelAnimationFrame(fxRaf); }
  };
  fxRaf = requestAnimationFrame(loop);
}

addEventListener("resize", () => {
  clearTimeout(fxStart.r);
  fxStart.r = setTimeout(() => {
    if (Math.abs(innerWidth - fxW) > 40 || Math.abs(innerHeight - fxH) > 200) fxStart(fxId);
  }, 250);
});