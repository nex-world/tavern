import { r, j as t } from "./react-D9TtqY-V.js";
import { I as k } from "./input-CtGFdN_9.js";
import { B as V } from "./badge-B6qKYUZD.js";
import { B as D } from "./button-CMoAlsw3.js";
import { g as O } from "./gsap-DDlvirwQ.js";
import { l as U, F as X, u as q, v as K, w as Q } from "./icons-bBaH0MBC.js";
import { D as Y, a as Z, b as ee, c as te, d as se, e as ae } from "./dialog-v6BqSj-g.js";
import { L as ne } from "./label-CBzbyhxK.js";
import { c as re } from "./components-and-styling-lnR2ABT4.js";
import { c as L } from "./shadcn-utils-BMZD7_jZ.js";
import { i as oe, a as ie } from "./card-converters-CUCioum9.js";
const le = /^(\d+(?:\.\d+)?)(em|px)?$/, ce = (e, s, i) => {
  const n = r.useCallback(() => s[e.findIndex((l) => matchMedia(l).matches)] ?? i, [e, s, i]), [f, x] = r.useState(n);
  return r.useEffect(() => {
    const l = () => x(n);
    for (const p of e) matchMedia(p).addEventListener("change", l);
    return () => {
      for (const p of e) matchMedia(p).removeEventListener("change", l);
    };
  }, [e, n]), f;
}, de = () => {
  const e = r.useRef(null), [s, i] = r.useState({ width: 0, height: 0 });
  return r.useLayoutEffect(() => {
    if (!e.current) return;
    const n = new ResizeObserver(([f]) => {
      const { width: x, height: l } = f.contentRect;
      i({ width: x, height: l });
    });
    return n.observe(e.current), () => n.disconnect();
  }, []), [e, s];
}, me = ({ items: e, renderItem: s, gap: i = 12, columns: n = { "(min-width:1600px)": 6, "(min-width:1200px)": 5, "(min-width:1000px)": 4, "(min-width:800px)": 3, "(min-width:600px)": 2, default: 2 }, animate: f = true, ease: x = "power3.out", duration: l = 0.6, stagger: p = 0.05, scaleOnHover: y = false, hoverScale: a = 0.95, tolerance: d = "2.4em" }) => {
  const m = ce(typeof n == "number" ? [] : Object.keys(n).filter((c) => c !== "default"), typeof n == "number" ? [] : Object.values(n).filter((c) => typeof c == "number"), typeof n == "number" ? n : n.default || 1), [v, N] = de(), [S, C] = r.useState(false), [o, h] = r.useState([]), [b, z] = r.useState(200);
  r.useLayoutEffect(() => {
    var _a;
    if (!N.width || e.length === 0 || m === 0) {
      C(false);
      return;
    }
    let c = 0;
    if (typeof d == "number") c = d;
    else if (typeof d == "string") {
      const w = d.match(le);
      if (w) {
        const E = Number.parseFloat(w[1]);
        if ((w[2] || "px") === "em") {
          if (v.current) {
            const T = Number.parseFloat(getComputedStyle(v.current).fontSize);
            c = E * T;
          }
        } else c = E;
      }
    }
    const g = (_a = v.current) == null ? void 0 : _a.querySelectorAll(".masonry-item");
    if (!g || g.length !== e.length) {
      C(false);
      return;
    }
    const u = (N.width - (m - 1) * i) / m;
    for (const w of g) w.style.width = `${u}px`;
    const j = new Array(m).fill(0), P = [];
    for (const w of g) {
      const A = w.getBoundingClientRect().height || 100, T = Math.min(...j), _ = j.map((I, W) => ({ h: I, i: W })).filter(({ h: I }) => I <= T + c).map(({ i: I }) => I), M = Math.min(..._), J = M * (u + i), $ = j[M];
      P.push({ top: $, left: J, width: u }), j[M] += A + i;
    }
    h(P), C(true);
    const G = Math.max(...j);
    z(G);
  }, [e, m, i, N.width, v, d]);
  const R = r.useRef(false);
  r.useLayoutEffect(() => {
    !S || !f || (R.current || document.querySelectorAll(".masonry-item").forEach((g, u) => {
      O.fromTo(g, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: l, ease: x, delay: u * p });
    }), R.current = true);
  }, [S, f, p, l, x]);
  const B = (c, g) => {
    if (!y) return;
    const u = `[data-key="${g.id}"]`;
    O.to(u, { scale: a, duration: 0.3, ease: "power2.out" });
  }, H = (c, g) => {
    if (!y) return;
    const u = `[data-key="${g.id}"]`;
    O.to(u, { scale: 1, duration: 0.3, ease: "power2.out" });
  }, F = S && o.length === e.length;
  return t.jsx("div", { ref: v, className: "masonry-container", style: { width: "100%", position: "relative", height: b, minHeight: "200px" }, children: e.map((c, g) => {
    const u = o[g];
    return t.jsx("div", { "data-key": c.id, className: "masonry-item", style: { position: "absolute", top: (u == null ? void 0 : u.top) || 0, left: (u == null ? void 0 : u.left) || 0, width: (u == null ? void 0 : u.width) || "100%", opacity: F ? 1 : 0, pointerEvents: F ? "auto" : "none" }, onMouseEnter: (j) => B(j, c), onMouseLeave: (j) => H(j, c), children: s(c) }, c.id);
  }) });
};
function De(e) {
  const [s, i] = r.useState(""), [n, f] = r.useState([]), x = r.useMemo(() => {
    const a = /* @__PURE__ */ new Set();
    for (const d of e.items) for (const m of e.getTags(d)) a.add(m);
    return Array.from(a).sort();
  }, [e.items, e.getTags]), l = r.useMemo(() => e.items.filter((a) => {
    const d = e.getSearchableContent(a).toLowerCase().includes(s.toLowerCase()), m = e.getTags(a), v = n.length === 0 || n.every((N) => m.includes(N));
    return d && v;
  }), [e.items, s, n, e.getSearchableContent, e.getTags]), p = (a) => {
    f((d) => d.includes(a) ? d.filter((m) => m !== a) : [...d, a]);
  }, y = r.useMemo(() => l.map((a) => ({ ...a, id: e.getId(a) })), [l, e.getId]);
  return t.jsxs("div", { className: "space-y-6", children: [t.jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between", children: [e.title && t.jsx("div", { className: "space-y-1", children: t.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: e.title }) }), t.jsxs("div", { className: "flex items-center gap-3 w-full md:w-auto", children: [e.actions, t.jsxs("div", { className: "relative flex-1 md:w-72", children: [t.jsx(U, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), t.jsx(k, { type: "search", placeholder: e.placeholder || "\u641C\u7D22...", className: "pl-9", value: s, onChange: (a) => i(a.target.value) })] })] })] }), t.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [t.jsxs("div", { className: "flex items-center gap-1.5 mr-2 text-sm text-muted-foreground", children: [t.jsx(X, { className: "w-4 h-4" }), "\u6807\u7B7E\u8FC7\u6EE4:"] }), x.map((a) => t.jsx(V, { variant: n.includes(a) ? "default" : "outline", className: "cursor-pointer", onClick: () => p(a), children: a }, a)), n.length > 0 && t.jsx(D, { variant: "ghost", size: "sm", onClick: () => f([]), className: "h-7 px-2 text-xs", type: "button", children: "\u6E05\u9664" })] }), y.length > 0 ? t.jsx(me, { items: y, renderItem: (a) => e.renderCard(a), gap: 16, animate: false, scaleOnHover: false }) : t.jsx("div", { className: "py-20 text-center text-muted-foreground", children: "\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u5361\u7247\u3002" })] });
}
const ue = re("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", { variants: { variant: { default: "bg-card text-card-foreground", destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90" } }, defaultVariants: { variant: "default" } });
function fe({ className: e, variant: s, ...i }) {
  return t.jsx("div", { "data-slot": "alert", role: "alert", className: L(ue({ variant: s }), e), ...i });
}
function he({ className: e, ...s }) {
  return t.jsx("div", { "data-slot": "alert-title", className: L("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e), ...s });
}
function ge({ className: e, ...s }) {
  return t.jsx("div", { "data-slot": "alert-description", className: L("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", e), ...s });
}
const Ee = (e) => {
  const [s, i] = r.useState(null), [n, f] = r.useState(false), [x, l] = r.useState(null), [p, y] = r.useState(false), a = r.useId(), d = r.useRef(null), m = (o) => {
    var _a;
    const h = (_a = o.target.files) == null ? void 0 : _a[0];
    h && (h.type === "image/png" || h.type === "application/json" || h.name.endsWith(".json") ? (i(h), l(null)) : (l("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), i(null)));
  }, v = (o) => {
    o.preventDefault(), o.stopPropagation(), y(true);
  }, N = (o) => {
    o.preventDefault(), o.stopPropagation(), y(false);
  }, S = (o) => {
    o.preventDefault(), o.stopPropagation(), y(false);
    const h = o.dataTransfer.files;
    if (h.length > 0) {
      const b = h[0];
      b.type === "image/png" || b.type === "application/json" || b.name.endsWith(".json") ? (i(b), l(null)) : (l("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), i(null));
    }
  }, C = async () => {
    if (s) {
      f(true), l(null);
      try {
        if (s.type === "image/png") {
          const o = await oe(s);
          e.onImport(o);
        } else {
          const o = await s.text(), h = ie(o);
          e.onImport(h);
        }
        e.onOpenChange(false), i(null), y(false);
      } catch (o) {
        console.error("Import error:", o), l(o instanceof Error ? o.message : "\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F");
      } finally {
        f(false);
      }
    }
  };
  return t.jsx(Y, { open: e.open, onOpenChange: e.onOpenChange, children: t.jsxs(Z, { className: "sm:max-w-md max-h-[80vh] overflow-y-auto", children: [t.jsxs(ee, { children: [t.jsx(te, { children: "\u5BFC\u5165\u89D2\u8272/\u6311\u6218\u5361" }), t.jsx(se, { children: "\u652F\u6301 SillyTavern \u683C\u5F0F\u7684 PNG \u89D2\u8272\u5361\u6216 JSON \u6570\u636E\u3002" })] }), t.jsxs("div", { className: "space-y-4 py-4", children: [t.jsxs("div", { className: `border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer ${p ? "border-primary bg-primary/10 scale-105" : s ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:border-primary/50"}`, onDragOver: v, onDragLeave: N, onDrop: S, onClick: () => {
    var _a;
    return (_a = d.current) == null ? void 0 : _a.click();
  }, children: [t.jsx("div", { className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center", children: (s == null ? void 0 : s.type) === "application/json" ? t.jsx(q, { className: "w-6 h-6 text-primary" }) : t.jsx(K, { className: "w-6 h-6 text-primary" }) }), t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-sm font-medium", children: p ? "\u91CA\u653E\u6587\u4EF6\u4EE5\u4E0A\u4F20" : s ? s.name : "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904" }), t.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PNG \u6216 JSON (\u6700\u5927 5MB)" })] })] }), t.jsx(k, { ref: d, type: "file", accept: "image/png,.json", className: "hidden", onChange: m }), x && t.jsxs(fe, { variant: "destructive", children: [t.jsx(Q, { className: "h-4 w-4" }), t.jsx(he, { children: "\u9519\u8BEF" }), t.jsx(ge, { children: x })] }), t.jsxs("div", { className: "space-y-2", children: [t.jsx(ne, { htmlFor: a, className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "\u901A\u8FC7 URL \u5BFC\u5165" }), t.jsxs("div", { className: "flex gap-2", children: [t.jsx(k, { id: a, placeholder: "https://...", className: "rounded-lg" }), t.jsx(D, { variant: "secondary", className: "shrink-0 rounded-lg", type: "button", children: "\u6293\u53D6" })] })] })] }), t.jsxs(ae, { children: [t.jsx(D, { variant: "outline", onClick: () => e.onOpenChange(false), type: "button", className: "rounded-lg", children: "\u53D6\u6D88" }), t.jsx(D, { disabled: !s || n, onClick: C, type: "button", className: "rounded-lg min-w-20", children: n ? "\u5904\u7406\u4E2D..." : "\u5F00\u59CB\u5BFC\u5165" })] })] }) });
};
export {
  De as C,
  Ee as I
};
