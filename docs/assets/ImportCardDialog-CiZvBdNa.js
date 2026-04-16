import { r as a, j as e } from "./react-gFHNOnf5.js";
import { I as k } from "./input-KwncZLGm.js";
import { B as _ } from "./badge-C9CmQsZA.js";
import { B as D } from "./button-D3G-RLOw.js";
import { g as O } from "./gsap-DDlvirwQ.js";
import { l as U, W as X, Y, Z, _ as q } from "./icons-CW-0NDo_.js";
import { D as K, a as Q, b as V, c as ee, d as te, e as se } from "./dialog-CPE3M3ew.js";
import { L as ne } from "./label-BU_LC6Ti.js";
import { A as ae, a as re, b as oe } from "./alert-r3n7vLN7.js";
import { i as le, a as ie } from "./card-converters--Utd2AMJ.js";
const ce = /^(\d+(?:\.\d+)?)(em|px)?$/, de = (t, o, i) => {
  const n = a.useCallback(() => o[t.findIndex((l) => matchMedia(l).matches)] ?? i, [t, o, i]), [h, x] = a.useState(n);
  return a.useEffect(() => {
    const l = () => x(n);
    for (const p of t) matchMedia(p).addEventListener("change", l);
    return () => {
      for (const p of t) matchMedia(p).removeEventListener("change", l);
    };
  }, [t, n]), h;
}, me = () => {
  const t = a.useRef(null), [o, i] = a.useState({ width: 0, height: 0 });
  return a.useLayoutEffect(() => {
    if (!t.current) return;
    const n = new ResizeObserver(([h]) => {
      const { width: x, height: l } = h.contentRect;
      i({ width: x, height: l });
    });
    return n.observe(t.current), () => n.disconnect();
  }, []), [t, o];
}, ue = ({ items: t, renderItem: o, gap: i = 12, columns: n = { "(min-width:1600px)": 6, "(min-width:1200px)": 5, "(min-width:1000px)": 4, "(min-width:800px)": 3, default: 2 }, animate: h = true, ease: x = "power3.out", duration: l = 0.6, stagger: p = 0.05, scaleOnHover: y = false, hoverScale: s = 0.95, tolerance: d = "2.4em" }) => {
  const m = de(typeof n == "number" ? [] : Object.keys(n).filter((c) => c !== "default"), typeof n == "number" ? [] : Object.values(n).filter((c) => typeof c == "number"), typeof n == "number" ? n : n.default || 1), [j, N] = me(), [S, C] = a.useState(false), [r, f] = a.useState([]), [b, F] = a.useState(200);
  a.useLayoutEffect(() => {
    var _a;
    if (!N.width || t.length === 0 || m === 0) {
      C(false);
      return;
    }
    let c = 0;
    if (typeof d == "number") c = d;
    else if (typeof d == "string") {
      const w = d.match(ce);
      if (w) {
        const E = Number.parseFloat(w[1]);
        if ((w[2] || "px") === "em") {
          if (j.current) {
            const T = Number.parseFloat(getComputedStyle(j.current).fontSize);
            c = E * T;
          }
        } else c = E;
      }
    }
    const g = (_a = j.current) == null ? void 0 : _a.querySelectorAll(".masonry-item");
    if (!g || g.length !== t.length) {
      C(false);
      return;
    }
    const u = (N.width - (m - 1) * i) / m;
    for (const w of g) w.style.width = `${u}px`;
    const v = new Array(m).fill(0), A = [];
    for (const w of g) {
      const P = w.getBoundingClientRect().height || 100, T = Math.min(...v), G = v.map((I, $) => ({ h: I, i: $ })).filter(({ h: I }) => I <= T + c).map(({ i: I }) => I), M = Math.min(...G), J = M * (u + i), W = v[M];
      A.push({ top: W, left: J, width: u }), v[M] += P + i;
    }
    f(A), C(true);
    const z = Math.max(...v);
    F(z);
  }, [t, m, i, N.width, j, d]);
  const L = a.useRef(false);
  a.useLayoutEffect(() => {
    !S || !h || (L.current || document.querySelectorAll(".masonry-item").forEach((g, u) => {
      O.fromTo(g, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: l, ease: x, delay: u * p });
    }), L.current = true);
  }, [S, h, p, l, x]);
  const B = (c, g) => {
    if (!y) return;
    const u = `[data-key="${g.id}"]`;
    O.to(u, { scale: s, duration: 0.3, ease: "power2.out" });
  }, H = (c, g) => {
    if (!y) return;
    const u = `[data-key="${g.id}"]`;
    O.to(u, { scale: 1, duration: 0.3, ease: "power2.out" });
  }, R = S && r.length === t.length;
  return e.jsx("div", { ref: j, className: "masonry-container", style: { width: "100%", position: "relative", height: b, minHeight: "200px" }, children: t.map((c, g) => {
    const u = r[g];
    return e.jsx("div", { "data-key": c.id, className: "masonry-item", style: { position: "absolute", top: (u == null ? void 0 : u.top) || 0, left: (u == null ? void 0 : u.left) || 0, width: (u == null ? void 0 : u.width) || "100%", opacity: R ? 1 : 0, pointerEvents: R ? "auto" : "none" }, onMouseEnter: (v) => B(v, c), onMouseLeave: (v) => H(v, c), children: o(c) }, c.id);
  }) });
};
function be(t) {
  const [o, i] = a.useState(""), [n, h] = a.useState([]), x = a.useMemo(() => {
    const s = /* @__PURE__ */ new Set();
    for (const d of t.items) for (const m of t.getTags(d)) s.add(m);
    return Array.from(s).sort();
  }, [t.items, t.getTags]), l = a.useMemo(() => t.items.filter((s) => {
    const d = t.getSearchableContent(s).toLowerCase().includes(o.toLowerCase()), m = t.getTags(s), j = n.length === 0 || n.every((N) => m.includes(N));
    return d && j;
  }), [t.items, o, n, t.getSearchableContent, t.getTags]), p = (s) => {
    h((d) => d.includes(s) ? d.filter((m) => m !== s) : [...d, s]);
  }, y = a.useMemo(() => l.map((s) => ({ ...s, id: t.getId(s) })), [l, t.getId]);
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-col gap-4", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between", children: [t.title && e.jsx("div", { className: "space-y-1", children: e.jsx("h2", { className: "text-xl md:text-2xl font-bold tracking-tight", children: t.title }) }), e.jsx("div", { className: "flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar", children: t.actions })] }), e.jsxs("div", { className: "relative w-full", children: [e.jsx(U, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), e.jsx(k, { type: "search", placeholder: t.placeholder || "\u641C\u7D22...", className: "pl-9 h-10", value: o, onChange: (s) => i(s.target.value) })] })] }), e.jsxs("div", { className: "flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar", children: [e.jsxs("div", { className: "flex items-center gap-1.5 shrink-0 text-sm text-muted-foreground mr-2", children: [e.jsx(X, { className: "w-4 h-4" }), e.jsx("span", { className: "hidden sm:inline", children: "\u6807\u7B7E\u8FC7\u6EE4:" })] }), e.jsx("div", { className: "flex gap-2", children: x.map((s) => e.jsx(_, { variant: n.includes(s) ? "default" : "outline", className: "cursor-pointer whitespace-nowrap", onClick: () => p(s), children: s }, s)) }), n.length > 0 && e.jsx(D, { variant: "ghost", size: "sm", onClick: () => h([]), className: "h-7 px-2 text-xs shrink-0", type: "button", children: "\u6E05\u9664" })] }), y.length > 0 ? e.jsx(ue, { items: y, renderItem: (s) => t.renderCard(s), gap: 8, animate: false, scaleOnHover: false }) : e.jsx("div", { className: "py-20 text-center text-muted-foreground", children: "\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u5361\u7247\u3002" })] });
}
const Se = (t) => {
  const [o, i] = a.useState(null), [n, h] = a.useState(false), [x, l] = a.useState(null), [p, y] = a.useState(false), s = a.useId(), d = a.useRef(null), m = (r) => {
    var _a;
    const f = (_a = r.target.files) == null ? void 0 : _a[0];
    f && (f.type === "image/png" || f.type === "application/json" || f.name.endsWith(".json") ? (i(f), l(null)) : (l("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), i(null)));
  }, j = (r) => {
    r.preventDefault(), r.stopPropagation(), y(true);
  }, N = (r) => {
    r.preventDefault(), r.stopPropagation(), y(false);
  }, S = (r) => {
    r.preventDefault(), r.stopPropagation(), y(false);
    const f = r.dataTransfer.files;
    if (f.length > 0) {
      const b = f[0];
      b.type === "image/png" || b.type === "application/json" || b.name.endsWith(".json") ? (i(b), l(null)) : (l("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), i(null));
    }
  }, C = async () => {
    if (o) {
      h(true), l(null);
      try {
        if (o.type === "image/png") {
          const r = await le(o);
          t.onImport(r);
        } else {
          const r = await o.text(), f = ie(r);
          t.onImport(f);
        }
        t.onOpenChange(false), i(null), y(false);
      } catch (r) {
        console.error("Import error:", r), l(r instanceof Error ? r.message : "\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F");
      } finally {
        h(false);
      }
    }
  };
  return e.jsx(K, { open: t.open, onOpenChange: t.onOpenChange, children: e.jsxs(Q, { className: "sm:max-w-md max-h-[80vh] overflow-y-auto", children: [e.jsxs(V, { children: [e.jsx(ee, { children: "\u5BFC\u5165\u89D2\u8272/\u6311\u6218\u5361" }), e.jsx(te, { children: "\u652F\u6301 SillyTavern \u683C\u5F0F\u7684 PNG \u89D2\u8272\u5361\u6216 JSON \u6570\u636E\u3002" })] }), e.jsxs("div", { className: "space-y-4 py-4", children: [e.jsxs("div", { className: `border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer ${p ? "border-primary bg-primary/10 scale-105" : o ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:border-primary/50"}`, onDragOver: j, onDragLeave: N, onDrop: S, onClick: () => {
    var _a;
    return (_a = d.current) == null ? void 0 : _a.click();
  }, children: [e.jsx("div", { className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center", children: (o == null ? void 0 : o.type) === "application/json" ? e.jsx(Y, { className: "w-6 h-6 text-primary" }) : e.jsx(Z, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-center", children: [e.jsx("p", { className: "text-sm font-medium", children: p ? "\u91CA\u653E\u6587\u4EF6\u4EE5\u4E0A\u4F20" : o ? o.name : "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PNG \u6216 JSON (\u6700\u5927 5MB)" })] })] }), e.jsx(k, { ref: d, type: "file", accept: "image/png,.json", className: "hidden", onChange: m }), x && e.jsxs(ae, { variant: "destructive", children: [e.jsx(q, { className: "h-4 w-4" }), e.jsx(re, { children: "\u9519\u8BEF" }), e.jsx(oe, { children: x })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(ne, { htmlFor: s, className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "\u901A\u8FC7 URL \u5BFC\u5165" }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(k, { id: s, placeholder: "https://...", className: "rounded-lg" }), e.jsx(D, { variant: "secondary", className: "shrink-0 rounded-lg", type: "button", children: "\u6293\u53D6" })] })] })] }), e.jsxs(se, { children: [e.jsx(D, { variant: "outline", onClick: () => t.onOpenChange(false), type: "button", className: "rounded-lg", children: "\u53D6\u6D88" }), e.jsx(D, { disabled: !o || n, onClick: C, type: "button", className: "rounded-lg min-w-20", children: n ? "\u5904\u7406\u4E2D..." : "\u5F00\u59CB\u5BFC\u5165" })] })] }) });
};
export {
  be as C,
  Se as I
};
