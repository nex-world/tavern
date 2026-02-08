import { r as h, j as e } from "./react-BQpw03Eg.js";
import { f as p, h as N, i as u, O as v } from "./@tanstack-B4B5CfFY.js";
import { c as S } from "./shadcn-utils-BMZD7_jZ.js";
import { g } from "./mode-registry-C0esuoLo.js";
import { B as x } from "./button-B9brLUSp.js";
import { A as w, a as C, b as D, c as y, d as A, e as b, f as I, g as k, h as O } from "./alert-dialog-BRuctX1f.js";
import { d as z, M as L, k as M, l as $ } from "./icons-BC63ChG4.js";
import { I as F } from "./input-C44X3vA9.js";
import { S as P, a as T, b as B } from "./sheet-ehVu6ZDU.js";
import { c as E, d as R } from "./dialog-ClhHrx6A.js";
import { S as H, C as Q, m as q } from "./db-master-l33tB5ke.js";
import "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-B3Kybfa7.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./zod-fbN9ubnj.js";
const G = (s) => {
  const [n, r] = h.useState(false);
  return e.jsxs(w, { open: n, onOpenChange: r, children: [e.jsxs("div", { className: S("group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors mb-1", s.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"), onClick: () => s.onClick(s.session), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [(() => {
    const i = g(s.session.mode).icon;
    return e.jsx(i, { className: "w-4 h-4 shrink-0" });
  })(), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: s.session.title || s.characterName }), e.jsx("span", { className: "text-[10px] opacity-70", children: new Date(s.session.updatedAt).toLocaleDateString() })] })] }), e.jsx(C, { asChild: true, children: e.jsx(x, { variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: (i) => i.stopPropagation(), type: "button", children: e.jsx(z, { className: "w-3.5 h-3.5 text-muted-foreground hover:text-destructive" }) }) })] }), e.jsxs(D, { children: [e.jsxs(y, { children: [e.jsx(A, { children: "\u786E\u8BA4\u5220\u9664" }), e.jsx(b, { children: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u4F1A\u8BDD\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002" })] }), e.jsxs(I, { children: [e.jsx(k, { children: "\u53D6\u6D88" }), e.jsx(O, { onClick: () => {
    var _a;
    (_a = s.onDelete) == null ? void 0 : _a.call(s, s.session), r(false);
  }, children: "\u5220\u9664" })] })] })] });
}, J = (s) => {
  const [n, r] = h.useState(""), [i, l] = h.useState(false), c = (t) => {
    var _a, _b;
    if (t.title) return t.title;
    const a = g(t.mode), m = (_a = t.modeConfig) == null ? void 0 : _a.characterId;
    if (m) {
      const f = (_b = s.characters.find((j) => j.id === m)) == null ? void 0 : _b.name;
      if (f) return `${a.sessionPrefix}: ${f}`;
    }
    return a.sessionPrefix;
  }, d = s.sessions.filter((t) => c(t).toLowerCase().includes(n.toLowerCase())).sort((t, a) => a.updatedAt - t.updatedAt), o = (t = false) => e.jsxs("div", { className: "flex flex-col h-full bg-muted/30 border-r w-64", children: [e.jsxs("div", { className: `p-4 space-y-4 ${t ? "pt-12" : ""}`, children: [e.jsxs(x, { className: "w-full flex items-center gap-2", onClick: () => {
    s.onNewSession(), t && l(false);
  }, type: "button", children: [e.jsx(M, { className: "w-4 h-4" }), "\u65B0\u4F1A\u8BDD"] }), e.jsxs("div", { className: "relative", children: [e.jsx($, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), e.jsx(F, { placeholder: "\u641C\u7D22\u4F1A\u8BDD...", className: "pl-8 h-9 text-xs", value: n, onChange: (a) => r(a.target.value) })] })] }), e.jsx("div", { className: "grow overflow-y-auto px-2", children: e.jsxs("div", { className: "space-y-1", children: [d.map((a) => e.jsx(G, { session: a, isActive: a.id === s.activeSessionId, characterName: c(a), onClick: (m) => {
    s.onSessionSelect(m), t && l(false);
  }, onDelete: s.onSessionDelete }, a.id)), d.length === 0 && e.jsx("div", { className: "text-center py-10 text-muted-foreground text-xs", children: "\u65E0\u4F1A\u8BDD" })] }) })] });
  return e.jsxs(e.Fragment, { children: [e.jsx("aside", { className: "hidden md:flex w-64 flex-col", children: o(false) }), e.jsxs(P, { open: i, onOpenChange: l, children: [e.jsx(T, { asChild: true, children: e.jsx(x, { variant: "outline", size: "icon", className: "md:hidden fixed bottom-6 left-6 rounded-full shadow-lg z-50 h-12 w-12", children: e.jsx(L, { className: "h-6 w-6" }) }) }), e.jsxs(B, { side: "left", className: "w-64 p-0", children: [e.jsx(E, { className: "sr-only", children: "\u4F1A\u8BDD\u5217\u8868" }), e.jsx(R, { className: "sr-only", children: "\u9009\u62E9\u548C\u7BA1\u7406\u60A8\u7684\u804A\u5929\u4F1A\u8BDD" }), o(true)] })] })] });
};
function de() {
  const s = p(), { sessionId: n } = N({ strict: false }), { data: r = [] } = u((o) => o.from({ s: H })), { data: i = [] } = u((o) => o.from({ c: Q })), l = (o) => {
    s({ to: "/session/$sessionId", params: { sessionId: o.id } });
  }, c = () => {
    s({ to: "/plaza/characters" });
  }, d = async (o) => {
    try {
      await q.sessions.delete(o.id);
    } catch (t) {
      console.error("Failed to delete session:", t);
    }
  };
  return e.jsxs("div", { className: "flex h-full overflow-hidden", children: [e.jsx(J, { sessions: r, characters: i, activeSessionId: n, onSessionSelect: l, onNewSession: c, onSessionDelete: d }), e.jsx("div", { className: "grow overflow-hidden relative", children: e.jsx(v, {}) })] });
}
export {
  de as component
};
