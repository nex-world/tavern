var _a;
import { j as e, P as B, f as $, M as F, h as A, C as G, I as H, S as L, i as O, k as q, l as U, m as W, n as M, o as X, q as Y, s as J, u as K, r as f, d as Q, p as Z, t as g } from "./react-BQpw03Eg.js";
import { u as ee, f as S, g as te, O as se } from "./@tanstack-B4B5CfFY.js";
import { c as d } from "./shadcn-utils-BMZD7_jZ.js";
import { e as T, f as ae, g as ne, h as re } from "./icons-BC63ChG4.js";
import { B as j } from "./button-B9brLUSp.js";
import { D as oe, a as ie, b as le, c as ce, d as de, e as me, f as ue } from "./dialog-ClhHrx6A.js";
import { B as b } from "./badge-DvaSwOwN.js";
import { I as xe } from "./input-C44X3vA9.js";
import { c as fe } from "./components-and-styling-lnR2ABT4.js";
import { a as pe } from "./app-configurations-Cz44104t.js";
import { u as he } from "./es-toolkit-CstbrnlE.js";
import { u as ge, p as je } from "./index-DkZE5rMH.js";
import "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-B3Kybfa7.js";
import "./@tailwind-COJ8Fh6m.js";
function ve({ delayDuration: t = 0, ...s }) {
  return e.jsx(B, { "data-slot": "tooltip-provider", delayDuration: t, ...s });
}
function be({ className: t, ...s }) {
  return e.jsx($, { "data-slot": "menubar", className: d("bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs", t), ...s });
}
function N({ ...t }) {
  return e.jsx(F, { "data-slot": "menubar-menu", ...t });
}
function Ne({ ...t }) {
  return e.jsx(J, { "data-slot": "menubar-portal", ...t });
}
function z({ ...t }) {
  return e.jsx(U, { "data-slot": "menubar-radio-group", ...t });
}
function y({ className: t, ...s }) {
  return e.jsx(A, { "data-slot": "menubar-trigger", className: d("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none", t), ...s });
}
function C({ className: t, align: s = "start", alignOffset: a = -4, sideOffset: n = 8, ...r }) {
  return e.jsx(Ne, { children: e.jsx(G, { "data-slot": "menubar-content", align: s, alignOffset: a, sideOffset: n, className: d("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md", t), ...r }) });
}
function w({ className: t, inset: s, variant: a = "default", ...n }) {
  return e.jsx(H, { "data-slot": "menubar-item", "data-inset": s, "data-variant": a, className: d("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t), ...n });
}
function ye({ className: t, children: s, checked: a, ...n }) {
  return e.jsxs(Y, { "data-slot": "menubar-checkbox-item", className: d("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t), checked: a, ...n, children: [e.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: e.jsx(M, { children: e.jsx(ne, { className: "size-4" }) }) }), s] });
}
function I({ className: t, children: s, ...a }) {
  return e.jsxs(W, { "data-slot": "menubar-radio-item", className: d("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t), ...a, children: [e.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: e.jsx(M, { children: e.jsx(ae, { className: "size-2 fill-current" }) }) }), s] });
}
function Ce({ className: t, ...s }) {
  return e.jsx(X, { "data-slot": "menubar-separator", className: d("bg-border -mx-1 my-1 h-px", t), ...s });
}
function P({ ...t }) {
  return e.jsx(L, { "data-slot": "menubar-sub", ...t });
}
function k({ className: t, inset: s, children: a, ...n }) {
  return e.jsxs(O, { "data-slot": "menubar-sub-trigger", "data-inset": s, className: d("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8", t), ...n, children: [a, e.jsx(T, { className: "ml-auto h-4 w-4" })] });
}
function R({ className: t, ...s }) {
  return e.jsx(q, { "data-slot": "menubar-sub-content", className: d("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", t), ...s });
}
const we = fe("group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", { variants: { variant: { default: "bg-transparent", outline: "border-border", muted: "bg-muted/50" }, size: { default: "p-4 gap-4 ", sm: "py-3 px-4 gap-2.5" } }, defaultVariants: { variant: "default", size: "default" } });
function Ie({ className: t, variant: s = "default", size: a = "default", asChild: n = false, ...r }) {
  const o = n ? K : "div";
  return e.jsx(o, { "data-slot": "item", "data-variant": s, "data-size": a, className: d(we({ variant: s, size: a, className: t })), ...r });
}
function Pe({ className: t, ...s }) {
  return e.jsx("div", { "data-slot": "item-content", className: d("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", t), ...s });
}
function ke({ className: t, ...s }) {
  return e.jsx("div", { "data-slot": "item-title", className: d("flex w-fit items-center gap-2 text-sm leading-snug font-medium", t), ...s });
}
function Re({ className: t, ...s }) {
  return e.jsx("div", { "data-slot": "item-actions", className: d("flex items-center gap-2", t), ...s });
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
function Te(t) {
  const s = [];
  for (const a of t.values()) if (a.isRoot || !a.metadata.parentId || a.metadata.parentId === "__root__") s.push(a);
  else {
    const n = t.get(a.metadata.parentId);
    n ? n.children.push(a) : s.push(a);
  }
  return s;
}
function _(t) {
  t.sort((s, a) => s.isRoot ? -1 : a.isRoot ? 1 : s.fullPath.localeCompare(a.fullPath));
  for (const s of t) s.children.length > 0 && _(s.children);
}
function _e(t) {
  const s = t.routesById || {}, a = /* @__PURE__ */ new Map();
  for (const [r, o] of Object.entries(s)) {
    if (r === "__root__") continue;
    const p = Se(r, o);
    a.set(r, p);
  }
  const n = Te(a);
  return _(n), n;
}
function De({ params: t, paramValues: s, onParamChange: a, onNavigate: n }) {
  return e.jsxs("div", { className: "space-y-3", children: [t.map((r) => e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "text-xs font-medium text-gray-600", children: [r.name, e.jsxs("span", { className: "text-gray-400 ml-2", children: ["(\u793A\u4F8B: ", e.jsx("code", { className: "bg-blue-50 px-1 rounded", children: r.exampleValue }), ")"] })] }), e.jsx(xe, { type: "text", value: s[r.name], onChange: (o) => a(r.name, o.target.value), placeholder: `\u8F93\u5165 ${r.name}`, className: "h-8 text-sm" })] }, r.name)), e.jsx("div", { className: "flex gap-1", children: e.jsx(j, { variant: "outline", size: "sm", onClick: () => n(false), className: "", children: "\u524D\u5F80" }) })] });
}
function D({ route: t, depth: s = 0 }) {
  const a = S(), n = s * 32, [r, o] = f.useState(() => {
    const i = {};
    for (const x of t.params) i[x.name] = x.exampleValue;
    return i;
  }), [l, p] = f.useState(true), m = (i = false) => {
    let x = t.fullPath;
    if (t.params.length > 0) for (const h of t.params) {
      const V = i ? h.exampleValue : r[h.name];
      x = x.replace(`$${h.name}`, V || h.exampleValue);
    }
    a({ to: x });
  }, u = (i, x) => {
    o((h) => ({ ...h, [i]: x }));
  }, c = t.children.length > 0, v = s > 0;
  return e.jsxs("div", { className: "relative", children: [v && e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-200 to-transparent", style: { left: `${n - 16}px` } }), e.jsx("div", { className: "absolute top-6 w-4 h-0.5 bg-indigo-200", style: { left: `${n - 16}px` } })] }), e.jsxs("div", { style: { marginLeft: `${n}px` }, className: "", children: [e.jsxs(Ie, { variant: "outline", size: "sm", className: "bg-background", children: [e.jsx(Pe, { children: e.jsxs("div", { className: "w-full flex gap-2 items-center", children: [c && e.jsx(j, { variant: "ghost", size: "sm", onClick: () => p(!l), children: l ? e.jsx(re, { className: "h-4 w-4" }) : e.jsx(T, { className: "h-4 w-4" }) }), e.jsx(ke, { children: e.jsx("div", { className: "font-semibold", children: t.fullPath }) }), e.jsxs("div", { className: "inline-flex gap-2 flex-wrap", children: [t.isRoot && e.jsx(b, { variant: "default", children: "root" }), t.params.length > 0 && e.jsx(b, { variant: "destructive", children: "\u52A8\u6001" }), t.metadata.isIndex && !t.isRoot && e.jsx(b, { variant: "secondary", children: "index" }), c && e.jsx(b, { className: "bg-blue-500 text-white dark:bg-blue-600", children: t.children.length })] }), t.params.length === 0 && e.jsx(j, { size: "sm", variant: "ghost", onClick: () => m(false), children: "\u2192" })] }) }), t.params.length === 0 && e.jsx(Re, { children: e.jsx(j, { size: "sm", variant: "outline", onClick: () => m(false), children: "\u2192" }) }), t.params.length > 0 && e.jsx(De, { params: t.params, paramValues: r, onParamChange: u, onNavigate: m })] }), l && t.children.length > 0 && e.jsx("div", { className: "py-1", children: e.jsx("div", { className: "space-y-1", children: t.children.map((i) => e.jsx(D, { route: i, depth: s + 1 }, i.id)) }) })] })] });
}
function Ee() {
  const t = ee(), s = f.useMemo(() => _e(t), [t]), a = f.useMemo(() => {
    let n = 0;
    const r = (o) => {
      for (const l of o) n++, l.children.length > 0 && r(l.children);
    };
    return r(s), n;
  }, [s]);
  return e.jsxs("div", { className: "space-y-2", children: [e.jsx("div", { className: "", children: e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u5171 ", a, " \u4E2A\u8DEF\u7531\u3002"] }) }), s.length > 0 && e.jsx("div", { className: "space-y-2", children: s.map((n) => e.jsx(D, { route: n }, n.id)) }), s.length === 0 && e.jsx("div", { className: "text-center py-12 text-gray-500", children: e.jsx("p", { children: "\u672A\u627E\u5230\u4EFB\u4F55\u8DEF\u7531" }) })] });
}
const E = Q()(Z((t) => ({ recentPages: [], addPage: (s) => t((a) => ({ recentPages: he([s, ...a.recentPages.filter((r) => r !== s)]).slice(0, 10) })) }), { name: (_a = pe) == null ? void 0 : _a.historyStoreName })), Ve = /* @__PURE__ */ new Date("2026-05-01");
function Be() {
  return e.jsxs(ie, { className: "sm:max-w-xl p-0 space-y-0 gap-0", children: [e.jsxs(le, { className: "p-3 pb-2", children: [e.jsx(ce, { children: "\u6240\u6709\u9875\u9762" }), e.jsx(de, { children: "\u53EF\u8BBF\u95EE\u5E94\u7528\u4E2D\u6240\u6709\u5DF2\u6CE8\u518C\u7684\u8DEF\u7531\u3002" })] }), e.jsx("div", { className: "p-3 max-h-[60vh] overflow-auto border-y", children: e.jsx(Ee, {}) }), e.jsx(me, { className: "sm:justify-start p-3 pt-2", children: e.jsx(ue, { asChild: true, children: e.jsx(j, { type: "button", variant: "secondary", size: "sm", children: "Close" }) }) })] });
}
function $e({ className: t }) {
  const s = S({}), { systemTheme: a, theme: n, setTheme: r, defaultTheme: o, primaryColor: l, setPrimaryColor: p, defaultPrimaryColor: m } = ge(), u = E((c) => c.recentPages);
  return e.jsxs(oe, { children: [e.jsxs(be, { className: `rounded-none border-x-0 border-t-0 ${t ?? ""}`, children: [e.jsxs(N, { children: [e.jsx(y, { children: "Go" }), e.jsxs(C, { children: [e.jsx(w, { onClick: () => s({ to: "/" }), children: " Home " }), e.jsx(w, { onClick: () => s({ to: "/config/llm" }), children: " Config " })] })] }), e.jsxs(N, { children: [e.jsx(y, { children: "History" }), e.jsx(C, { children: u.map((c) => e.jsx(w, { onClick: () => s({ to: c }), children: c }, c)) })] }), e.jsxs(N, { children: [e.jsx(y, { children: "View" }), e.jsxs(C, { children: [e.jsxs(P, { children: [e.jsx(k, { children: "Theme" }), e.jsx(R, { children: Object.entries(je).map(([c, v]) => e.jsxs(P, { children: [e.jsx(k, { children: c }), e.jsx(R, { children: e.jsx(z, { value: l, children: v.map((i) => e.jsxs(I, { value: i, onClick: () => p == null ? void 0 : p(i), children: [i.charAt(0).toUpperCase() + i.slice(1), m === i ? " (default)" : ""] }, i)) }) })] }, c)) })] }), e.jsxs(P, { children: [e.jsx(k, { children: "Theme Mode" }), e.jsxs(R, { children: [e.jsxs(z, { value: n, children: [e.jsxs(I, { value: "light", onClick: () => r("light"), children: ["Light", o === "light" ? " (default)" : ""] }), e.jsxs(I, { value: "dark", onClick: () => r("dark"), children: ["Dark", o === "dark" ? " (default)" : ""] })] }), e.jsx(Ce, {}), e.jsxs(ye, { checked: n === "system", onClick: () => r("system"), children: ["System (", a, ")", o === "system" ? " (default)" : ""] })] })] })] })] })] }), e.jsx(Be, {})] });
}
function Fe() {
  const t = te(), s = E((l) => l.addPage), [a, n] = f.useState(false), [r, o] = f.useState(false);
  return f.useEffect(() => {
    s(t.pathname);
  }, [t.pathname, s]), f.useEffect(() => {
    const l = async () => {
      try {
        const u = await (await fetch("https://time.akamai.com/")).text(), c = Number.parseFloat(u);
        if (Number.isNaN(c)) throw g.error("timestamp is NaN", { duration: 1e4 }), new Error("[2]\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005");
        return new Date(c * 1e3);
      } catch {
        const u = await (await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC")).json();
        if (u.datetime) return new Date(u.datetime);
        throw g.error("datetime not found in response", { duration: 1e4 }), new Error("[1]\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005");
      }
    };
    (async () => {
      try {
        await l() > Ve && (n(true), g.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005", { duration: 1e4 })), o(true);
      } catch (m) {
        n(true), o(true), g.error(String(m), { duration: 1e4 }), g.error(String(m == null ? void 0 : m.message), { duration: 1e4 }), g.error("[3]\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005", { duration: 1e4 });
      }
    })();
  }, []), r && !a ? e.jsx(ve, { children: e.jsxs("div", { className: "flex flex-col gap-0 h-screen print:h-auto", children: [e.jsx($e, { className: "shrink-0 grow-0 print:hidden" }), e.jsx("div", { className: "flex-1 overflow-auto", children: e.jsx(se, {}) })] }) }) : r ? e.jsx("div", { className: "flex items-center justify-center h-screen", children: e.jsx("div", { className: "text-center", children: e.jsx("h1", { className: "text-2xl font-bold", children: "\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005" }) }) }) : e.jsx("div", { className: "flex items-center justify-center h-screen", children: e.jsx("div", { className: "text-center", children: e.jsx("h1", { className: "text-2xl font-bold", children: "\u6B63\u5728\u52A0\u8F7D..." }) }) });
}
const at = Fe;
export {
  at as component
};
