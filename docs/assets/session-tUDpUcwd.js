import { r as u, j as e } from "./react-BPCshYXX.js";
import { f as p, h as v, i as g, O as N } from "./@tanstack-BuNX36FW.js";
import { c as l } from "./shadcn-utils-BMZD7_jZ.js";
import { g as j } from "./mode-registry-B-qWNhGq.js";
import { B as f } from "./button-CKyQl8ny.js";
import { A as y, a as S, b as w, c as C, d as D, e as b, f as A, g as k, h as I } from "./alert-dialog-D3tRcaR3.js";
import { C as z } from "./CharacterAvatar-DwtbYeXp.js";
import { g as E, M, h as O, S as L, i as T } from "./icons-BpfK1DnB.js";
import { I as $ } from "./input-Dje6SeH9.js";
import { S as F, a as P, b as _ } from "./sheet-9m8O3R_a.js";
import { c as B, d as H } from "./dialog-CbwgCfJB.js";
import { S as R, C as V, m as q } from "./db-master-xI8DZi24.js";
import { c as Q } from "./components-and-styling-lnR2ABT4.js";
import "./vendor-DqU8PgXE.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-DOn8o3hw.js";
import "./@tailwind-COJ8Fh6m.js";
import "./zod-fbN9ubnj.js";
const G = (s) => {
  const [t, i] = u.useState(false);
  return e.jsxs(y, { open: t, onOpenChange: i, children: [e.jsxs("div", { className: l("group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors mb-1", s.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"), onClick: () => s.onClick(s.session), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [s.character ? e.jsx(z, { character: s.character, size: "xs" }) : (() => {
    const o = j(s.session.mode).icon;
    return e.jsx(o, { className: "w-4 h-4 shrink-0" });
  })(), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: s.session.title || s.characterName }), e.jsx("span", { className: "text-[10px] opacity-70", children: new Date(s.session.updatedAt).toLocaleDateString() })] })] }), e.jsx(S, { asChild: true, children: e.jsx(f, { variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: (o) => o.stopPropagation(), type: "button", children: e.jsx(E, { className: "w-3.5 h-3.5 text-muted-foreground hover:text-destructive" }) }) })] }), e.jsxs(w, { children: [e.jsxs(C, { children: [e.jsx(D, { children: "\u786E\u8BA4\u5220\u9664" }), e.jsx(b, { children: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u4F1A\u8BDD\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002" })] }), e.jsxs(A, { children: [e.jsx(k, { children: "\u53D6\u6D88" }), e.jsx(I, { onClick: () => {
    var _a;
    (_a = s.onDelete) == null ? void 0 : _a.call(s, s.session), i(false);
  }, children: "\u5220\u9664" })] })] })] });
}, J = (s) => {
  const [t, i] = u.useState(""), [o, d] = u.useState(false), m = (r) => {
    var _a;
    const a = (_a = r.modeConfig) == null ? void 0 : _a.characterId;
    if (a) return s.characters.find((c) => c.id === a);
  }, x = (r) => {
    if (r.title) return r.title;
    const a = j(r.mode), c = m(r);
    return c ? `${a.sessionPrefix}: ${c.name}` : a.sessionPrefix;
  }, n = s.sessions.filter((r) => x(r).toLowerCase().includes(t.toLowerCase())).sort((r, a) => a.updatedAt - r.updatedAt), h = (r = false) => e.jsxs("div", { className: "flex flex-col h-full bg-muted/30 border-r w-64", children: [e.jsxs("div", { className: `p-4 space-y-4 ${r ? "pt-12" : ""}`, children: [e.jsxs(f, { className: "w-full flex items-center gap-2", onClick: () => {
    s.onNewSession(), r && d(false);
  }, type: "button", children: [e.jsx(O, { className: "w-4 h-4" }), "\u65B0\u4F1A\u8BDD"] }), e.jsxs("div", { className: "relative", children: [e.jsx(L, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), e.jsx($, { placeholder: "\u641C\u7D22\u4F1A\u8BDD...", className: "pl-8 h-9 text-xs", value: t, onChange: (a) => i(a.target.value) })] })] }), e.jsx("div", { className: "grow overflow-y-auto px-2", children: e.jsxs("div", { className: "space-y-1", children: [n.map((a) => e.jsx(G, { session: a, isActive: a.id === s.activeSessionId, characterName: x(a), character: m(a), onClick: (c) => {
    s.onSessionSelect(c), r && d(false);
  }, onDelete: s.onSessionDelete }, a.id)), n.length === 0 && e.jsx("div", { className: "text-center py-10 text-muted-foreground text-xs", children: "\u65E0\u4F1A\u8BDD" })] }) })] });
  return e.jsxs(e.Fragment, { children: [e.jsx("aside", { className: "hidden md:flex w-64 flex-col", children: h(false) }), e.jsxs(F, { open: o, onOpenChange: d, children: [e.jsx(P, { asChild: true, children: e.jsx(f, { variant: "outline", size: "icon", className: "md:hidden fixed bottom-24 right-6 rounded-full shadow-lg z-50 h-12 w-12", children: e.jsx(M, { className: "h-6 w-6" }) }) }), e.jsxs(_, { side: "left", className: "w-64 p-0", children: [e.jsx(B, { className: "sr-only", children: "\u4F1A\u8BDD\u5217\u8868" }), e.jsx(H, { className: "sr-only", children: "\u9009\u62E9\u548C\u7BA1\u7406\u60A8\u7684\u804A\u5929\u4F1A\u8BDD" }), h(true)] })] })] });
};
function K({ className: s, ...t }) {
  return e.jsx("div", { "data-slot": "empty", className: l("flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12", s), ...t });
}
function U({ className: s, ...t }) {
  return e.jsx("div", { "data-slot": "empty-header", className: l("flex max-w-sm flex-col items-center gap-2 text-center", s), ...t });
}
const W = Q("flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0", { variants: { variant: { default: "bg-transparent", icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6" } }, defaultVariants: { variant: "default" } });
function X({ className: s, variant: t = "default", ...i }) {
  return e.jsx("div", { "data-slot": "empty-icon", "data-variant": t, className: l(W({ variant: t, className: s })), ...i });
}
function Y({ className: s, ...t }) {
  return e.jsx("div", { "data-slot": "empty-title", className: l("text-lg font-medium tracking-tight", s), ...t });
}
function Z({ className: s, ...t }) {
  return e.jsx("div", { "data-slot": "empty-description", className: l("text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4", s), ...t });
}
function ee({ className: s, ...t }) {
  return e.jsx("div", { "data-slot": "empty-content", className: l("flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance", s), ...t });
}
function Ne() {
  const s = p(), { sessionId: t } = v({ strict: false }), { data: i = [] } = g((n) => n.from({ s: R })), { data: o = [] } = g((n) => n.from({ c: V })), d = (n) => {
    s({ to: "/session/$sessionId", params: { sessionId: n.id } });
  }, m = () => {
    s({ to: "/plaza/characters" });
  }, x = async (n) => {
    try {
      await q.sessions.delete(n.id);
    } catch (h) {
      console.error("Failed to delete session:", h);
    }
  };
  return e.jsxs("div", { className: "flex h-full overflow-hidden", children: [e.jsx(J, { sessions: i, characters: o, activeSessionId: t, onSessionSelect: d, onNewSession: m, onSessionDelete: x }), e.jsx("div", { className: "grow overflow-hidden relative border-l", children: t ? e.jsx(N, {}) : e.jsx("div", { className: "h-full flex flex-col items-center justify-center p-8 text-center", children: e.jsxs(K, { className: "border-none", children: [e.jsxs(U, { children: [e.jsx(X, { variant: "icon", children: e.jsx(T, {}) }), e.jsx(Y, { children: "\u9009\u62E9\u4E00\u4E2A\u4F1A\u8BDD\u5F00\u59CB" }), e.jsx(Z, { children: "\u4ECE\u5DE6\u4FA7\u5217\u8868\u4E2D\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u5F00\u59CB\u804A\u5929\uFF0C\u6216\u8005\u53BB\u5E7F\u573A\u5BFB\u627E\u65B0\u7684\u4F19\u4F34\u3002" })] }), e.jsx(ee, { children: e.jsx(f, { onClick: m, variant: "outline", children: "\u524D\u5F80\u89D2\u8272\u5E7F\u573A" }) })] }) }) })] });
}
export {
  Ne as component
};
