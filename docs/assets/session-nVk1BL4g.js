import { r as x, j as e } from "./react-D9TtqY-V.js";
import { f as j, h as p, i as u, O as v } from "./@tanstack-3iyDWv8L.js";
import { c as N } from "./shadcn-utils-BMZD7_jZ.js";
import { g } from "./mode-registry-CFLMW164.js";
import { B as f } from "./button-CMoAlsw3.js";
import { A as S, a as w, b as C, c as D, d as y, e as A, f as b, g as I, h as k } from "./alert-dialog-Bxna6sSR.js";
import { C as O } from "./CharacterAvatar-Cnp2urxB.js";
import { d as z, M as L, j as M, k as $ } from "./icons-d5PdVRlQ.js";
import { I as F } from "./input-CtGFdN_9.js";
import { S as P, a as T, b as B } from "./sheet-DrAu68L1.js";
import { c as E, d as R } from "./dialog-BSYdwUYf.js";
import { S as H, C as Q, m as q } from "./db-master-BrZHBPj2.js";
import "./vendor-C4ToNUTj.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C2pyTzVO.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./zod-fbN9ubnj.js";
const G = (s) => {
  const [i, n] = x.useState(false);
  return e.jsxs(S, { open: i, onOpenChange: n, children: [e.jsxs("div", { className: N("group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors mb-1", s.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"), onClick: () => s.onClick(s.session), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [s.character ? e.jsx(O, { character: s.character, size: "xs" }) : (() => {
    const o = g(s.session.mode).icon;
    return e.jsx(o, { className: "w-4 h-4 shrink-0" });
  })(), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: s.session.title || s.characterName }), e.jsx("span", { className: "text-[10px] opacity-70", children: new Date(s.session.updatedAt).toLocaleDateString() })] })] }), e.jsx(w, { asChild: true, children: e.jsx(f, { variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: (o) => o.stopPropagation(), type: "button", children: e.jsx(z, { className: "w-3.5 h-3.5 text-muted-foreground hover:text-destructive" }) }) })] }), e.jsxs(C, { children: [e.jsxs(D, { children: [e.jsx(y, { children: "\u786E\u8BA4\u5220\u9664" }), e.jsx(A, { children: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u4F1A\u8BDD\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002" })] }), e.jsxs(b, { children: [e.jsx(I, { children: "\u53D6\u6D88" }), e.jsx(k, { onClick: () => {
    var _a;
    (_a = s.onDelete) == null ? void 0 : _a.call(s, s.session), n(false);
  }, children: "\u5220\u9664" })] })] })] });
}, J = (s) => {
  const [i, n] = x.useState(""), [o, c] = x.useState(false), d = (a) => {
    var _a;
    const t = (_a = a.modeConfig) == null ? void 0 : _a.characterId;
    if (t) return s.characters.find((l) => l.id === t);
  }, m = (a) => {
    if (a.title) return a.title;
    const t = g(a.mode), l = d(a);
    return l ? `${t.sessionPrefix}: ${l.name}` : t.sessionPrefix;
  }, r = s.sessions.filter((a) => m(a).toLowerCase().includes(i.toLowerCase())).sort((a, t) => t.updatedAt - a.updatedAt), h = (a = false) => e.jsxs("div", { className: "flex flex-col h-full bg-muted/30 border-r w-64", children: [e.jsxs("div", { className: `p-4 space-y-4 ${a ? "pt-12" : ""}`, children: [e.jsxs(f, { className: "w-full flex items-center gap-2", onClick: () => {
    s.onNewSession(), a && c(false);
  }, type: "button", children: [e.jsx(M, { className: "w-4 h-4" }), "\u65B0\u4F1A\u8BDD"] }), e.jsxs("div", { className: "relative", children: [e.jsx($, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), e.jsx(F, { placeholder: "\u641C\u7D22\u4F1A\u8BDD...", className: "pl-8 h-9 text-xs", value: i, onChange: (t) => n(t.target.value) })] })] }), e.jsx("div", { className: "grow overflow-y-auto px-2", children: e.jsxs("div", { className: "space-y-1", children: [r.map((t) => e.jsx(G, { session: t, isActive: t.id === s.activeSessionId, characterName: m(t), character: d(t), onClick: (l) => {
    s.onSessionSelect(l), a && c(false);
  }, onDelete: s.onSessionDelete }, t.id)), r.length === 0 && e.jsx("div", { className: "text-center py-10 text-muted-foreground text-xs", children: "\u65E0\u4F1A\u8BDD" })] }) })] });
  return e.jsxs(e.Fragment, { children: [e.jsx("aside", { className: "hidden md:flex w-64 flex-col", children: h(false) }), e.jsxs(P, { open: o, onOpenChange: c, children: [e.jsx(T, { asChild: true, children: e.jsx(f, { variant: "outline", size: "icon", className: "md:hidden fixed bottom-6 left-6 rounded-full shadow-lg z-50 h-12 w-12", children: e.jsx(L, { className: "h-6 w-6" }) }) }), e.jsxs(B, { side: "left", className: "w-64 p-0", children: [e.jsx(E, { className: "sr-only", children: "\u4F1A\u8BDD\u5217\u8868" }), e.jsx(R, { className: "sr-only", children: "\u9009\u62E9\u548C\u7BA1\u7406\u60A8\u7684\u804A\u5929\u4F1A\u8BDD" }), h(true)] })] })] });
};
function me() {
  const s = j(), { sessionId: i } = p({ strict: false }), { data: n = [] } = u((r) => r.from({ s: H })), { data: o = [] } = u((r) => r.from({ c: Q })), c = (r) => {
    s({ to: "/session/$sessionId", params: { sessionId: r.id } });
  }, d = () => {
    s({ to: "/plaza/characters" });
  }, m = async (r) => {
    try {
      await q.sessions.delete(r.id);
    } catch (h) {
      console.error("Failed to delete session:", h);
    }
  };
  return e.jsxs("div", { className: "flex h-full overflow-hidden", children: [e.jsx(J, { sessions: n, characters: o, activeSessionId: i, onSessionSelect: c, onNewSession: d, onSessionDelete: m }), e.jsx("div", { className: "grow overflow-hidden relative", children: e.jsx(v, {}) })] });
}
export {
  me as component
};
