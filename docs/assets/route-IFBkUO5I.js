var _a;
import { j as e, P as B, f as $, M as F, h as A, C as G, I as H, S as L, i as O, k as q, l as W, m as U, n as M, o as J, q as K, s as Q, t as X, r as x, d as Y, p as Z, u as b } from "./react-gFHNOnf5.js";
import { u as ee, f as S, g as te, O as se } from "./@tanstack-DDpiKjUN.js";
import { c } from "./shadcn-utils-BMZD7_jZ.js";
import { a as _, b as ae, c as ne, d as re } from "./icons-CW-0NDo_.js";
import { B as h } from "./button-D3G-RLOw.js";
import { D as oe, a as ie, b as le, c as ce, d as de, e as ue, f as me } from "./dialog-CPE3M3ew.js";
import { B as g } from "./badge-C9CmQsZA.js";
import { I as xe } from "./input-KwncZLGm.js";
import { c as fe } from "./components-and-styling-lnR2ABT4.js";
import { a as pe } from "./app-configurations-Cz44104t.js";
import { u as he } from "./es-toolkit-CstbrnlE.js";
import { u as ge, p as je } from "./index-7c6pKJ8J.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./@tailwind-COJ8Fh6m.js";
function ve({ delayDuration: t = 0, ...s }) {
  return e.jsx(B, { "data-slot": "tooltip-provider", delayDuration: t, ...s });
}
function be({ className: t, ...s }) {
  return e.jsx($, { "data-slot": "menubar", className: c("bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs", t), ...s });
}
function N({ ...t }) {
  return e.jsx(F, { "data-slot": "menubar-menu", ...t });
}
function Ne({ ...t }) {
  return e.jsx(Q, { "data-slot": "menubar-portal", ...t });
}
function z({ ...t }) {
  return e.jsx(W, { "data-slot": "menubar-radio-group", ...t });
}
function y({ className: t, ...s }) {
  return e.jsx(A, { "data-slot": "menubar-trigger", className: c("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none", t), ...s });
}
function C({ className: t, align: s = "start", alignOffset: a = -4, sideOffset: n = 8, ...r }) {
  return e.jsx(Ne, { children: e.jsx(G, { "data-slot": "menubar-content", align: s, alignOffset: a, sideOffset: n, className: c("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md", t), ...r }) });
}
function I({ className: t, inset: s, variant: a = "default", ...n }) {
  return e.jsx(H, { "data-slot": "menubar-item", "data-inset": s, "data-variant": a, className: c("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t), ...n });
}
function ye({ className: t, children: s, checked: a, ...n }) {
  return e.jsxs(K, { "data-slot": "menubar-checkbox-item", className: c("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t), checked: a, ...n, children: [e.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: e.jsx(M, { children: e.jsx(ne, { className: "size-4" }) }) }), s] });
}
function P({ className: t, children: s, ...a }) {
  return e.jsxs(U, { "data-slot": "menubar-radio-item", className: c("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t), ...a, children: [e.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: e.jsx(M, { children: e.jsx(ae, { className: "size-2 fill-current" }) }) }), s] });
}
function Ce({ className: t, ...s }) {
  return e.jsx(J, { "data-slot": "menubar-separator", className: c("bg-border -mx-1 my-1 h-px", t), ...s });
}
function k({ ...t }) {
  return e.jsx(L, { "data-slot": "menubar-sub", ...t });
}
function w({ className: t, inset: s, children: a, ...n }) {
  return e.jsxs(O, { "data-slot": "menubar-sub-trigger", "data-inset": s, className: c("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8", t), ...n, children: [a, e.jsx(_, { className: "ml-auto h-4 w-4" })] });
}
function R({ className: t, ...s }) {
  return e.jsx(q, { "data-slot": "menubar-sub-content", className: c("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", t), ...s });
}
const Ie = fe("group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", { variants: { variant: { default: "bg-transparent", outline: "border-border", muted: "bg-muted/50" }, size: { default: "p-4 gap-4 ", sm: "py-3 px-4 gap-2.5" } }, defaultVariants: { variant: "default", size: "default" } });
function Pe({ className: t, variant: s = "default", size: a = "default", asChild: n = false, ...r }) {
  const o = n ? X : "div";
  return e.jsx(o, { "data-slot": "item", "data-variant": s, "data-size": a, className: c(Ie({ variant: s, size: a, className: t })), ...r });
}
function ke({ className: t, ...s }) {
  return e.jsx("div", { "data-slot": "item-content", className: c("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", t), ...s });
}
function we({ className: t, ...s }) {
  return e.jsx("div", { "data-slot": "item-title", className: c("flex w-fit items-center gap-2 text-sm leading-snug font-medium", t), ...s });
}
function Re({ className: t, ...s }) {
  return e.jsx("div", { "data-slot": "item-actions", className: c("flex items-center gap-2", t), ...s });
}
function ze(t) {
  const s = [];
  return t.split("/").forEach((n, r) => {
    if (n.startsWith("$")) {
      const o = n.slice(1), l = Me(o);
      s.push({ name: o, position: r, exampleValue: l });
    }
  }), s;
}
function Me(t) {
  return { postId: "123", userId: "456", id: "1", slug: "example-slug", category: "tech", tag: "javascript" }[t] || "example";
}
function Se(t, s) {
  var _a2, _b;
  const a = s.fullPath || s.path || t, r = a.split("/").filter(Boolean).length, o = ze(a);
  return { id: t, path: s.path || "", fullPath: a, level: r, isRoot: a === "/", children: [], params: o, metadata: { hasComponent: !!((_a2 = s.options) == null ? void 0 : _a2.component), isIndex: a === "/" || a.endsWith("/"), parentId: (_b = s.parentRoute) == null ? void 0 : _b.id } };
}
function _e(t) {
  const s = [];
  for (const a of t.values()) if (a.isRoot || !a.metadata.parentId || a.metadata.parentId === "__root__") s.push(a);
  else {
    const n = t.get(a.metadata.parentId);
    n ? n.children.push(a) : s.push(a);
  }
  return s;
}
function T(t) {
  t.sort((s, a) => s.isRoot ? -1 : a.isRoot ? 1 : s.fullPath.localeCompare(a.fullPath));
  for (const s of t) s.children.length > 0 && T(s.children);
}
function Te(t) {
  const s = t.routesById || {}, a = /* @__PURE__ */ new Map();
  for (const [r, o] of Object.entries(s)) {
    if (r === "__root__") continue;
    const u = Se(r, o);
    a.set(r, u);
  }
  const n = _e(a);
  return T(n), n;
}
function De({ params: t, paramValues: s, onParamChange: a, onNavigate: n }) {
  return e.jsxs("div", { className: "space-y-3", children: [t.map((r) => e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "text-xs font-medium text-gray-600", children: [r.name, e.jsxs("span", { className: "text-gray-400 ml-2", children: ["(\u793A\u4F8B: ", e.jsx("code", { className: "bg-blue-50 px-1 rounded", children: r.exampleValue }), ")"] })] }), e.jsx(xe, { type: "text", value: s[r.name], onChange: (o) => a(r.name, o.target.value), placeholder: `\u8F93\u5165 ${r.name}`, className: "h-8 text-sm" })] }, r.name)), e.jsx("div", { className: "flex gap-1", children: e.jsx(h, { variant: "outline", size: "sm", onClick: () => n(false), className: "", children: "\u524D\u5F80" }) })] });
}
function D({ route: t, depth: s = 0 }) {
  const a = S(), n = s * 32, [r, o] = x.useState(() => {
    const i = {};
    for (const m of t.params) i[m.name] = m.exampleValue;
    return i;
  }), [l, u] = x.useState(true), p = (i = false) => {
    let m = t.fullPath;
    if (t.params.length > 0) for (const f of t.params) {
      const E = i ? f.exampleValue : r[f.name];
      m = m.replace(`$${f.name}`, E || f.exampleValue);
    }
    a({ to: m });
  }, j = (i, m) => {
    o((f) => ({ ...f, [i]: m }));
  }, d = t.children.length > 0, v = s > 0;
  return e.jsxs("div", { className: "relative", children: [v && e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-200 to-transparent", style: { left: `${n - 16}px` } }), e.jsx("div", { className: "absolute top-6 w-4 h-0.5 bg-indigo-200", style: { left: `${n - 16}px` } })] }), e.jsxs("div", { style: { marginLeft: `${n}px` }, className: "", children: [e.jsxs(Pe, { variant: "outline", size: "sm", className: "bg-background", children: [e.jsx(ke, { children: e.jsxs("div", { className: "w-full flex gap-2 items-center", children: [d && e.jsx(h, { variant: "ghost", size: "sm", onClick: () => u(!l), children: l ? e.jsx(re, { className: "h-4 w-4" }) : e.jsx(_, { className: "h-4 w-4" }) }), e.jsx(we, { children: e.jsx("div", { className: "font-semibold", children: t.fullPath }) }), e.jsxs("div", { className: "inline-flex gap-2 flex-wrap", children: [t.isRoot && e.jsx(g, { variant: "default", children: "root" }), t.params.length > 0 && e.jsx(g, { variant: "destructive", children: "\u52A8\u6001" }), t.metadata.isIndex && !t.isRoot && e.jsx(g, { variant: "secondary", children: "index" }), d && e.jsx(g, { className: "bg-blue-500 text-white dark:bg-blue-600", children: t.children.length })] }), t.params.length === 0 && e.jsx(h, { size: "sm", variant: "ghost", onClick: () => p(false), children: "\u2192" })] }) }), t.params.length === 0 && e.jsx(Re, { children: e.jsx(h, { size: "sm", variant: "outline", onClick: () => p(false), children: "\u2192" }) }), t.params.length > 0 && e.jsx(De, { params: t.params, paramValues: r, onParamChange: j, onNavigate: p })] }), l && t.children.length > 0 && e.jsx("div", { className: "py-1", children: e.jsx("div", { className: "space-y-1", children: t.children.map((i) => e.jsx(D, { route: i, depth: s + 1 }, i.id)) }) })] })] });
}
function Ve() {
  const t = ee(), s = x.useMemo(() => Te(t), [t]), a = x.useMemo(() => {
    let n = 0;
    const r = (o) => {
      for (const l of o) n++, l.children.length > 0 && r(l.children);
    };
    return r(s), n;
  }, [s]);
  return e.jsxs("div", { className: "space-y-2", children: [e.jsx("div", { className: "", children: e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u5171 ", a, " \u4E2A\u8DEF\u7531\u3002"] }) }), s.length > 0 && e.jsx("div", { className: "space-y-2", children: s.map((n) => e.jsx(D, { route: n }, n.id)) }), s.length === 0 && e.jsx("div", { className: "text-center py-12 text-gray-500", children: e.jsx("p", { children: "\u672A\u627E\u5230\u4EFB\u4F55\u8DEF\u7531" }) })] });
}
const V = Y()(Z((t) => ({ recentPages: [], addPage: (s) => t((a) => ({ recentPages: he([s, ...a.recentPages.filter((r) => r !== s)]).slice(0, 10) })) }), { name: (_a = pe) == null ? void 0 : _a.historyStoreName }));
function Ee() {
  return e.jsxs(ie, { className: "sm:max-w-xl p-0 space-y-0 gap-0", children: [e.jsxs(le, { className: "p-3 pb-2", children: [e.jsx(ce, { children: "\u6240\u6709\u9875\u9762" }), e.jsx(de, { children: "\u53EF\u8BBF\u95EE\u5E94\u7528\u4E2D\u6240\u6709\u5DF2\u6CE8\u518C\u7684\u8DEF\u7531\u3002" })] }), e.jsx("div", { className: "p-3 max-h-[60vh] overflow-auto border-y", children: e.jsx(Ve, {}) }), e.jsx(ue, { className: "sm:justify-start p-3 pt-2", children: e.jsx(me, { asChild: true, children: e.jsx(h, { type: "button", variant: "secondary", size: "sm", children: "Close" }) }) })] });
}
function Be({ className: t }) {
  const s = S({}), { systemTheme: a, theme: n, setTheme: r, defaultTheme: o, primaryColor: l, setPrimaryColor: u, defaultPrimaryColor: p } = ge(), j = V((d) => d.recentPages);
  return e.jsxs(oe, { children: [e.jsxs(be, { className: `hidden md:flex rounded-none border-x-0 border-t-0 ${t ?? ""}`, children: [e.jsxs(N, { children: [e.jsx(y, { children: "Go" }), e.jsxs(C, { children: [e.jsx(I, { onClick: () => s({ to: "/" }), children: " Home " }), e.jsx(I, { onClick: () => s({ to: "/config/llm" }), children: " Config " })] })] }), e.jsxs(N, { children: [e.jsx(y, { children: "History" }), e.jsx(C, { children: j.map((d) => e.jsx(I, { onClick: () => s({ to: d }), children: d }, d)) })] }), e.jsxs(N, { children: [e.jsx(y, { children: "View" }), e.jsxs(C, { children: [e.jsxs(k, { children: [e.jsx(w, { children: "Theme" }), e.jsx(R, { children: Object.entries(je).map(([d, v]) => e.jsxs(k, { children: [e.jsx(w, { children: d }), e.jsx(R, { children: e.jsx(z, { value: l, children: v.map((i) => e.jsxs(P, { value: i, onClick: () => u == null ? void 0 : u(i), children: [i.charAt(0).toUpperCase() + i.slice(1), p === i ? " (default)" : ""] }, i)) }) })] }, d)) })] }), e.jsxs(k, { children: [e.jsx(w, { children: "Theme Mode" }), e.jsxs(R, { children: [e.jsxs(z, { value: n, children: [e.jsxs(P, { value: "light", onClick: () => r("light"), children: ["Light", o === "light" ? " (default)" : ""] }), e.jsxs(P, { value: "dark", onClick: () => r("dark"), children: ["Dark", o === "dark" ? " (default)" : ""] })] }), e.jsx(Ce, {}), e.jsxs(ye, { checked: n === "system", onClick: () => r("system"), children: ["System (", a, ")", o === "system" ? " (default)" : ""] })] })] })] })] })] }), e.jsx(Ee, {})] });
}
function $e() {
  const t = te(), s = V((l) => l.addPage), [a, n] = x.useState(false), [r, o] = x.useState(false);
  return x.useEffect(() => {
    s(t.pathname);
  }, [t.pathname, s]), x.useEffect(() => {
    (async () => {
      try {
        o(true);
      } catch (u) {
        n(true), o(true), b.error(String(u), { duration: 1e4 }), b.error(String(u == null ? void 0 : u.message), { duration: 1e4 }), b.error("[3]\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005", { duration: 1e4 });
      }
    })();
  }, []), r && !a ? e.jsx(ve, { children: e.jsxs("div", { className: "flex flex-col gap-0 h-dvh print:h-auto overflow-hidden", children: [e.jsx(Be, { className: "shrink-0 grow-0 print:hidden" }), e.jsx("div", { className: "flex-1 overflow-auto relative", children: e.jsx(se, {}) })] }) }) : r ? e.jsx("div", { className: "flex items-center justify-center h-screen", children: e.jsx("div", { className: "text-center", children: e.jsx("h1", { className: "text-2xl font-bold", children: "\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005" }) }) }) : e.jsx("div", { className: "flex items-center justify-center h-screen", children: e.jsx("div", { className: "text-center", children: e.jsx("h1", { className: "text-2xl font-bold", children: "\u6B63\u5728\u52A0\u8F7D..." }) }) });
}
const st = $e;
export {
  st as component
};
