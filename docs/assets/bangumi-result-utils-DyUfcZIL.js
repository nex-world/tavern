import { j as t } from "./react-gFHNOnf5.js";
import { B as r } from "./badge-C9CmQsZA.js";
import { D as x, g as f, a as h } from "./dialog-CPE3M3ew.js";
const d = "https://lain.bgm.tv/img/no_icon_subject.png";
function m(n) {
  return (n == null ? void 0 : n.common) ?? (n == null ? void 0 : n.medium) ?? (n == null ? void 0 : n.large) ?? (n == null ? void 0 : n.grid) ?? (n == null ? void 0 : n.small) ?? d;
}
function u(n) {
  return (n == null ? void 0 : n.large) ?? (n == null ? void 0 : n.common) ?? (n == null ? void 0 : n.medium) ?? (n == null ? void 0 : n.grid) ?? (n == null ? void 0 : n.small) ?? d;
}
function g(n) {
  const e = n.id ? `https://bgm.tv/subject/${n.id}` : void 0;
  return e ? t.jsx("a", { href: e, target: "_blank", rel: "noreferrer", className: "font-medium leading-tight line-clamp-1 underline-offset-2 hover:underline", children: n.title }) : t.jsx("h3", { className: "font-medium leading-tight line-clamp-1", children: n.title });
}
function j(n) {
  const e = n.id ? `https://bgm.tv/character/${n.id}` : void 0;
  return e ? t.jsx("a", { href: e, target: "_blank", rel: "noreferrer", className: "font-medium leading-tight line-clamp-1 underline-offset-2 hover:underline", children: n.title }) : t.jsx("h3", { className: "font-medium leading-tight line-clamp-1", children: n.title });
}
function v(n) {
  const e = n.id ? `https://bgm.tv/person/${n.id}` : void 0;
  return e ? t.jsx("a", { href: e, target: "_blank", rel: "noreferrer", className: "font-medium leading-tight line-clamp-1 underline-offset-2 hover:underline", children: n.title }) : t.jsx("h3", { className: "font-medium leading-tight line-clamp-1", children: n.title });
}
function p(n) {
  const e = n.username ? `https://bgm.tv/user/${n.username}` : void 0;
  return e ? t.jsx("a", { href: e, target: "_blank", rel: "noreferrer", className: "font-medium leading-tight line-clamp-1 underline-offset-2 hover:underline", children: n.title }) : t.jsx("h3", { className: "font-medium leading-tight line-clamp-1", children: n.title });
}
function l(n) {
  return t.jsxs(x, { children: [t.jsx(f, { asChild: true, children: t.jsx("button", { type: "button", className: "inline-flex items-center justify-center rounded-md border bg-muted/30 p-1 hover:bg-muted/50 transition-colors", "aria-label": `\u67E5\u770B\u5927\u56FE: ${n.alt}`, children: t.jsx("img", { src: n.src, alt: n.alt, className: n.maxSizeClass ?? "max-h-28 max-w-24 h-auto w-auto object-contain shrink-0 bg-muted", loading: "lazy" }) }) }), t.jsx(h, { className: "max-w-[92vw] p-2", children: t.jsx("div", { className: "flex items-center justify-center", children: t.jsx("img", { src: n.previewSrc, alt: n.alt, className: "max-h-[86vh] max-w-[88vw] h-auto w-auto object-contain" }) }) })] });
}
function y(n) {
  var _a;
  const { subject: e } = n;
  return t.jsxs("div", { className: "flex gap-3 items-start", children: [t.jsx(l, { src: m(e.images), previewSrc: u(e.images), alt: e.name_cn ?? e.name ?? "\u6761\u76EE\u5C01\u9762" }), t.jsxs("div", { className: "min-w-0 space-y-2", children: [t.jsxs("div", { children: [t.jsx(g, { id: e.id, title: e.name_cn ?? e.name ?? "\u672A\u547D\u540D\u6761\u76EE" }), e.name_cn && e.name ? t.jsx("p", { className: "text-xs text-muted-foreground line-clamp-1", children: e.name }) : null] }), t.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: ((_a = e.summary) == null ? void 0 : _a.trim()) || "\u6682\u65E0\u7B80\u4ECB" }), t.jsxs("div", { className: "flex flex-wrap gap-1", children: [e.rank ? t.jsxs(r, { variant: "secondary", children: ["Rank ", e.rank] }) : null, e.score ? t.jsxs(r, { variant: "outline", children: ["\u8BC4\u5206 ", e.score] }) : null, e.air_date || e.date ? t.jsx(r, { variant: "outline", children: e.air_date ?? e.date }) : null] })] })] });
}
function _(n) {
  var _a;
  const { character: e } = n;
  return t.jsxs("div", { className: "flex gap-3 items-start", children: [t.jsx(l, { src: m(e.images), previewSrc: u(e.images), alt: e.name ?? "\u89D2\u8272\u5934\u50CF" }), t.jsxs("div", { className: "min-w-0 space-y-2", children: [t.jsx(j, { id: e.id, title: e.name ?? "\u672A\u547D\u540D\u89D2\u8272" }), t.jsx("p", { className: "text-xs text-muted-foreground line-clamp-3", children: ((_a = e.summary) == null ? void 0 : _a.trim()) || "\u6682\u65E0\u89D2\u8272\u7B80\u4ECB" })] })] });
}
function C(n) {
  var _a;
  const { person: e } = n;
  return t.jsxs("div", { className: "flex gap-3 items-start", children: [t.jsx(l, { src: m(e.images), previewSrc: u(e.images), alt: e.name ?? "\u4EBA\u7269\u5934\u50CF" }), t.jsxs("div", { className: "min-w-0 space-y-2", children: [t.jsx(v, { id: e.id, title: e.name ?? "\u672A\u547D\u540D\u4EBA\u7269" }), t.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: ((_a = e.summary) == null ? void 0 : _a.trim()) || "\u6682\u65E0\u4EBA\u7269\u7B80\u4ECB" }), t.jsx("div", { className: "flex flex-wrap gap-1", children: (e.career ?? []).slice(0, 3).map((a, i) => t.jsx(r, { variant: "outline", children: a }, `${a}-${i}`)) })] })] });
}
function A(n) {
  var _a, _b, _c, _d, _e, _f, _g;
  const { user: e } = n;
  return t.jsxs("div", { className: "flex gap-3 items-start", children: [t.jsx(l, { src: ((_a = e.avatar) == null ? void 0 : _a.medium) ?? ((_b = e.avatar) == null ? void 0 : _b.large) ?? ((_c = e.avatar) == null ? void 0 : _c.small) ?? "https://lain.bgm.tv/pic/user/m/icon.jpg", previewSrc: ((_d = e.avatar) == null ? void 0 : _d.large) ?? ((_e = e.avatar) == null ? void 0 : _e.medium) ?? ((_f = e.avatar) == null ? void 0 : _f.small) ?? "https://lain.bgm.tv/pic/user/m/icon.jpg", alt: e.nickname ?? e.username ?? "\u7528\u6237\u5934\u50CF", maxSizeClass: "max-h-16 max-w-16 h-auto w-auto object-contain shrink-0 bg-muted" }), t.jsxs("div", { className: "min-w-0 space-y-1", children: [t.jsx(p, { username: e.username, title: e.nickname ?? e.username ?? "\u672A\u77E5\u7528\u6237" }), t.jsxs("p", { className: "text-xs text-muted-foreground", children: ["@", e.username ?? "unknown"] }), t.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: ((_g = e.sign) == null ? void 0 : _g.trim()) || "\u8FD9\u4E2A\u7528\u6237\u8FD8\u6CA1\u6709\u7B7E\u540D\u3002" })] })] });
}
function B(n) {
  const { collection: e } = n, a = e.subject;
  return a ? t.jsxs("div", { className: "space-y-2", children: [t.jsx(y, { subject: a }), t.jsxs("div", { className: "flex flex-wrap gap-1", children: [e.type ? t.jsxs(r, { variant: "secondary", children: ["\u6536\u85CF\u7C7B\u578B ", e.type] }) : null, e.rate ? t.jsxs(r, { variant: "outline", children: ["\u6253\u5206 ", e.rate] }) : null, e.updated_at ? t.jsxs(r, { variant: "outline", children: ["\u66F4\u65B0 ", e.updated_at] }) : null, (e.tags ?? []).slice(0, 3).map((i, c) => t.jsx(r, { variant: "outline", children: i }, `${i}-${c}`))] }), e.comment ? t.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: e.comment }) : null] }) : t.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BE5\u6536\u85CF\u7F3A\u5C11\u6761\u76EE\u4FE1\u606F\u3002" });
}
function S(n) {
  var _a, _b, _c, _d;
  const { revision: e } = n;
  return t.jsxs("div", { className: "space-y-2", children: [t.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [e.id ? t.jsxs(r, { variant: "secondary", children: ["#", e.id] }) : null, ((_a = e.creator) == null ? void 0 : _a.nickname) ?? ((_b = e.creator) == null ? void 0 : _b.username) ? t.jsx(r, { variant: "outline", children: ((_c = e.creator) == null ? void 0 : _c.nickname) ?? ((_d = e.creator) == null ? void 0 : _d.username) }) : null, e.created_at ? t.jsx(r, { variant: "outline", children: e.created_at }) : null] }), t.jsx("p", { className: "text-sm leading-relaxed line-clamp-3", children: e.summary ?? e.comment ?? "\u6682\u65E0\u4FEE\u8BA2\u8BF4\u660E" })] });
}
function b(n) {
  return n == null ? "na" : String(n).trim() || "na";
}
function s(n, e, a) {
  const i = a.map((c) => b(c)).join("|");
  return `${n}:${i}:idx-${e}`;
}
function o(n) {
  if (!n || typeof n != "object") return [];
  const e = n;
  return Array.isArray(e.data) ? e.data : [];
}
function $(n) {
  return Array.isArray(n) ? n.map((e) => !e || typeof e != "object" ? null : e.subject ?? e).filter((e) => !!e) : [];
}
function K(n) {
  return Array.isArray(n) ? n.filter((e) => !!(e && typeof e == "object")) : [];
}
function L(n) {
  return Array.isArray(n) ? n.filter((e) => !!(e && typeof e == "object")) : [];
}
function P(n) {
  return o(n);
}
function D(n) {
  return o(n);
}
function R(n, e, a = "subject") {
  return s(a, e, [n.id, n.name_cn, n.name, n.date, n.air_date]);
}
function z(n, e, a = "character") {
  return s(a, e, [n.id, n.name, n.url]);
}
function I(n, e, a = "person") {
  var _a;
  return s(a, e, [n.id, n.name, n.url, (_a = n.career) == null ? void 0 : _a.join(",")]);
}
function U(n, e, a = "collection") {
  var _a, _b;
  return s(a, e, [(_a = n.subject) == null ? void 0 : _a.id, (_b = n.subject) == null ? void 0 : _b.name_cn, n.updated_at, n.type]);
}
function E(n, e, a = "revision") {
  var _a;
  return s(a, e, [n.id, n.created_at, (_a = n.creator) == null ? void 0 : _a.username, n.summary]);
}
export {
  y as B,
  o as a,
  _ as b,
  z as c,
  A as d,
  B as e,
  U as f,
  R as g,
  D as h,
  S as i,
  E as j,
  C as k,
  I as l,
  L as m,
  K as n,
  $ as o,
  P as t
};
