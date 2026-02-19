import { r, j as e } from "./react-BPCshYXX.js";
import { I as O } from "./input-Dje6SeH9.js";
import { B as V } from "./badge-b3CWeD_H.js";
import { B as E } from "./button-CKyQl8ny.js";
import { g as k } from "./gsap-DDlvirwQ.js";
import { S as U, F as X, y as q, z as K, E as Q } from "./icons-BpfK1DnB.js";
import { D as Y, a as Z, b as ee, c as te, d as se, e as ae } from "./dialog-CbwgCfJB.js";
import { L as ne } from "./label-DxXosFPV.js";
import { c as re } from "./components-and-styling-lnR2ABT4.js";
import { c as L } from "./shadcn-utils-BMZD7_jZ.js";
import { i as oe, a as le } from "./card-converters-D3se0fkY.js";
const ie = /^(\d+(?:\.\d+)?)(em|px)?$/, ce = (t, s, l) => {
  const n = r.useCallback(() => s[t.findIndex((i) => matchMedia(i).matches)] ?? l, [t, s, l]), [f, x] = r.useState(n);
  return r.useEffect(() => {
    const i = () => x(n);
    for (const p of t) matchMedia(p).addEventListener("change", i);
    return () => {
      for (const p of t) matchMedia(p).removeEventListener("change", i);
    };
  }, [t, n]), f;
}, de = () => {
  const t = r.useRef(null), [s, l] = r.useState({ width: 0, height: 0 });
  return r.useLayoutEffect(() => {
    if (!t.current) return;
    const n = new ResizeObserver(([f]) => {
      const { width: x, height: i } = f.contentRect;
      l({ width: x, height: i });
    });
    return n.observe(t.current), () => n.disconnect();
  }, []), [t, s];
}, me = ({ items: t, renderItem: s, gap: l = 12, columns: n = { "(min-width:1600px)": 6, "(min-width:1200px)": 5, "(min-width:1000px)": 4, "(min-width:800px)": 3, "(min-width:600px)": 2, default: 1 }, animate: f = true, ease: x = "power3.out", duration: i = 0.6, stagger: p = 0.05, scaleOnHover: y = false, hoverScale: a = 0.95, tolerance: d = "2.4em" }) => {
  const m = ce(typeof n == "number" ? [] : Object.keys(n).filter((c) => c !== "default"), typeof n == "number" ? [] : Object.values(n).filter((c) => typeof c == "number"), typeof n == "number" ? n : n.default || 1), [v, N] = de(), [S, C] = r.useState(false), [o, h] = r.useState([]), [b, z] = r.useState(200);
  r.useLayoutEffect(() => {
    var _a;
    if (!N.width || t.length === 0 || m === 0) {
      C(false);
      return;
    }
    let c = 0;
    if (typeof d == "number") c = d;
    else if (typeof d == "string") {
      const w = d.match(ie);
      if (w) {
        const D = Number.parseFloat(w[1]);
        if ((w[2] || "px") === "em") {
          if (v.current) {
            const T = Number.parseFloat(getComputedStyle(v.current).fontSize);
            c = D * T;
          }
        } else c = D;
      }
    }
    const g = (_a = v.current) == null ? void 0 : _a.querySelectorAll(".masonry-item");
    if (!g || g.length !== t.length) {
      C(false);
      return;
    }
    const u = (N.width - (m - 1) * l) / m;
    for (const w of g) w.style.width = `${u}px`;
    const j = new Array(m).fill(0), P = [];
    for (const w of g) {
      const A = w.getBoundingClientRect().height || 100, T = Math.min(...j), _ = j.map((I, W) => ({ h: I, i: W })).filter(({ h: I }) => I <= T + c).map(({ i: I }) => I), M = Math.min(..._), J = M * (u + l), $ = j[M];
      P.push({ top: $, left: J, width: u }), j[M] += A + l;
    }
    h(P), C(true);
    const G = Math.max(...j);
    z(G);
  }, [t, m, l, N.width, v, d]);
  const R = r.useRef(false);
  r.useLayoutEffect(() => {
    !S || !f || (R.current || document.querySelectorAll(".masonry-item").forEach((g, u) => {
      k.fromTo(g, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: i, ease: x, delay: u * p });
    }), R.current = true);
  }, [S, f, p, i, x]);
  const B = (c, g) => {
    if (!y) return;
    const u = `[data-key="${g.id}"]`;
    k.to(u, { scale: a, duration: 0.3, ease: "power2.out" });
  }, H = (c, g) => {
    if (!y) return;
    const u = `[data-key="${g.id}"]`;
    k.to(u, { scale: 1, duration: 0.3, ease: "power2.out" });
  }, F = S && o.length === t.length;
  return e.jsx("div", { ref: v, className: "masonry-container", style: { width: "100%", position: "relative", height: b, minHeight: "200px" }, children: t.map((c, g) => {
    const u = o[g];
    return e.jsx("div", { "data-key": c.id, className: "masonry-item", style: { position: "absolute", top: (u == null ? void 0 : u.top) || 0, left: (u == null ? void 0 : u.left) || 0, width: (u == null ? void 0 : u.width) || "100%", opacity: F ? 1 : 0, pointerEvents: F ? "auto" : "none" }, onMouseEnter: (j) => B(j, c), onMouseLeave: (j) => H(j, c), children: s(c) }, c.id);
  }) });
};
function Ee(t) {
  const [s, l] = r.useState(""), [n, f] = r.useState([]), x = r.useMemo(() => {
    const a = /* @__PURE__ */ new Set();
    for (const d of t.items) for (const m of t.getTags(d)) a.add(m);
    return Array.from(a).sort();
  }, [t.items, t.getTags]), i = r.useMemo(() => t.items.filter((a) => {
    const d = t.getSearchableContent(a).toLowerCase().includes(s.toLowerCase()), m = t.getTags(a), v = n.length === 0 || n.every((N) => m.includes(N));
    return d && v;
  }), [t.items, s, n, t.getSearchableContent, t.getTags]), p = (a) => {
    f((d) => d.includes(a) ? d.filter((m) => m !== a) : [...d, a]);
  }, y = r.useMemo(() => i.map((a) => ({ ...a, id: t.getId(a) })), [i, t.getId]);
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-col gap-4", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between", children: [t.title && e.jsx("div", { className: "space-y-1", children: e.jsx("h2", { className: "text-xl md:text-2xl font-bold tracking-tight", children: t.title }) }), e.jsx("div", { className: "flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar", children: t.actions })] }), e.jsxs("div", { className: "relative w-full", children: [e.jsx(U, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), e.jsx(O, { type: "search", placeholder: t.placeholder || "\u641C\u7D22...", className: "pl-9 h-10", value: s, onChange: (a) => l(a.target.value) })] })] }), e.jsxs("div", { className: "flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar", children: [e.jsxs("div", { className: "flex items-center gap-1.5 shrink-0 text-sm text-muted-foreground mr-2", children: [e.jsx(X, { className: "w-4 h-4" }), e.jsx("span", { className: "hidden sm:inline", children: "\u6807\u7B7E\u8FC7\u6EE4:" })] }), e.jsx("div", { className: "flex gap-2", children: x.map((a) => e.jsx(V, { variant: n.includes(a) ? "default" : "outline", className: "cursor-pointer whitespace-nowrap", onClick: () => p(a), children: a }, a)) }), n.length > 0 && e.jsx(E, { variant: "ghost", size: "sm", onClick: () => f([]), className: "h-7 px-2 text-xs shrink-0", type: "button", children: "\u6E05\u9664" })] }), y.length > 0 ? e.jsx(me, { items: y, renderItem: (a) => t.renderCard(a), gap: 16, animate: false, scaleOnHover: false }) : e.jsx("div", { className: "py-20 text-center text-muted-foreground", children: "\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u5361\u7247\u3002" })] });
}
const ue = re("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", { variants: { variant: { default: "bg-card text-card-foreground", destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90" } }, defaultVariants: { variant: "default" } });
function fe({ className: t, variant: s, ...l }) {
  return e.jsx("div", { "data-slot": "alert", role: "alert", className: L(ue({ variant: s }), t), ...l });
}
function he({ className: t, ...s }) {
  return e.jsx("div", { "data-slot": "alert-title", className: L("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", t), ...s });
}
function ge({ className: t, ...s }) {
  return e.jsx("div", { "data-slot": "alert-description", className: L("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", t), ...s });
}
const De = (t) => {
  const [s, l] = r.useState(null), [n, f] = r.useState(false), [x, i] = r.useState(null), [p, y] = r.useState(false), a = r.useId(), d = r.useRef(null), m = (o) => {
    var _a;
    const h = (_a = o.target.files) == null ? void 0 : _a[0];
    h && (h.type === "image/png" || h.type === "application/json" || h.name.endsWith(".json") ? (l(h), i(null)) : (i("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), l(null)));
  }, v = (o) => {
    o.preventDefault(), o.stopPropagation(), y(true);
  }, N = (o) => {
    o.preventDefault(), o.stopPropagation(), y(false);
  }, S = (o) => {
    o.preventDefault(), o.stopPropagation(), y(false);
    const h = o.dataTransfer.files;
    if (h.length > 0) {
      const b = h[0];
      b.type === "image/png" || b.type === "application/json" || b.name.endsWith(".json") ? (l(b), i(null)) : (i("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), l(null));
    }
  }, C = async () => {
    if (s) {
      f(true), i(null);
      try {
        if (s.type === "image/png") {
          const o = await oe(s);
          t.onImport(o);
        } else {
          const o = await s.text(), h = le(o);
          t.onImport(h);
        }
        t.onOpenChange(false), l(null), y(false);
      } catch (o) {
        console.error("Import error:", o), i(o instanceof Error ? o.message : "\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F");
      } finally {
        f(false);
      }
    }
  };
  return e.jsx(Y, { open: t.open, onOpenChange: t.onOpenChange, children: e.jsxs(Z, { className: "sm:max-w-md max-h-[80vh] overflow-y-auto", children: [e.jsxs(ee, { children: [e.jsx(te, { children: "\u5BFC\u5165\u89D2\u8272/\u6311\u6218\u5361" }), e.jsx(se, { children: "\u652F\u6301 SillyTavern \u683C\u5F0F\u7684 PNG \u89D2\u8272\u5361\u6216 JSON \u6570\u636E\u3002" })] }), e.jsxs("div", { className: "space-y-4 py-4", children: [e.jsxs("div", { className: `border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer ${p ? "border-primary bg-primary/10 scale-105" : s ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:border-primary/50"}`, onDragOver: v, onDragLeave: N, onDrop: S, onClick: () => {
    var _a;
    return (_a = d.current) == null ? void 0 : _a.click();
  }, children: [e.jsx("div", { className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center", children: (s == null ? void 0 : s.type) === "application/json" ? e.jsx(q, { className: "w-6 h-6 text-primary" }) : e.jsx(K, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-center", children: [e.jsx("p", { className: "text-sm font-medium", children: p ? "\u91CA\u653E\u6587\u4EF6\u4EE5\u4E0A\u4F20" : s ? s.name : "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PNG \u6216 JSON (\u6700\u5927 5MB)" })] })] }), e.jsx(O, { ref: d, type: "file", accept: "image/png,.json", className: "hidden", onChange: m }), x && e.jsxs(fe, { variant: "destructive", children: [e.jsx(Q, { className: "h-4 w-4" }), e.jsx(he, { children: "\u9519\u8BEF" }), e.jsx(ge, { children: x })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(ne, { htmlFor: a, className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "\u901A\u8FC7 URL \u5BFC\u5165" }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(O, { id: a, placeholder: "https://...", className: "rounded-lg" }), e.jsx(E, { variant: "secondary", className: "shrink-0 rounded-lg", type: "button", children: "\u6293\u53D6" })] })] })] }), e.jsxs(ae, { children: [e.jsx(E, { variant: "outline", onClick: () => t.onOpenChange(false), type: "button", className: "rounded-lg", children: "\u53D6\u6D88" }), e.jsx(E, { disabled: !s || n, onClick: C, type: "button", className: "rounded-lg min-w-20", children: n ? "\u5904\u7406\u4E2D..." : "\u5F00\u59CB\u5BFC\u5165" })] })] }) });
};
export {
  Ee as C,
  De as I
};
