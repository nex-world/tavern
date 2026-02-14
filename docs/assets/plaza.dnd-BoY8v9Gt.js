import { j as e, t as d } from "./react-D9TtqY-V.js";
import { f, i as N } from "./@tanstack-3iyDWv8L.js";
import { S as v, m as b } from "./db-master-BrZHBPj2.js";
import { B as o } from "./button-CMoAlsw3.js";
import { C as c, a as C, b as y, c as w, d as m } from "./card-85OZoUtz.js";
import { B as x } from "./badge-B6qKYUZD.js";
import { A as D, a as A, b as S, c as k, d as P, e as B, f as I, g as R, h as T } from "./alert-dialog-Bxna6sSR.js";
import { I as M } from "./InvitationGuard-HXq7MeQC.js";
import { n, P as p, d as F, U as H, s as L } from "./icons-bBaH0MBC.js";
import "./vendor-C4ToNUTj.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C2pyTzVO.js";
import "./zod-fbN9ubnj.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./nex-tavern-uuid-HW61e36x.js";
import "./id-OxPLOBIU.js";
function ae() {
  const r = f(), { data: h = [] } = N((s) => s.from({ s: v })), l = h.filter((s) => s.mode === "dnd").sort((s, t) => t.updatedAt - s.updatedAt), j = async (s) => {
    try {
      await b.sessions.delete(s), d.success("\u5192\u9669\u4F1A\u8BDD\u5DF2\u5220\u9664");
    } catch (t) {
      console.error("\u5220\u9664\u5931\u8D25:", t), d.error("\u5220\u9664\u5931\u8D25");
    }
  };
  return e.jsx(M, { requiredFeature: "dnd", children: e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h2", { className: "text-2xl font-bold flex items-center gap-2", children: [e.jsx(n, { className: "w-6 h-6 text-amber-500" }), "DnD \u5192\u9669"] }), e.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "\u7BA1\u7406\u4F60\u7684\u684C\u6E38\u98CE\u683C\u591A\u4EBA\u5192\u9669\u4F1A\u8BDD" })] }), e.jsxs(o, { type: "button", onClick: () => r({ to: "/create/dnd" }), className: "gap-2", children: [e.jsx(p, { className: "w-4 h-4" }), "\u521B\u5EFA\u65B0\u5192\u9669"] })] }), l.length > 0 ? e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: l.map((s) => {
    var _a, _b, _c, _d, _e;
    const t = ((_b = (_a = s.modeConfig) == null ? void 0 : _a.worldSnapshot) == null ? void 0 : _b.name) || "\u672A\u547D\u540D\u5192\u9669", g = ((_c = s.modeConfig) == null ? void 0 : _c.gameMode) || "standard", i = ((_d = s.modeConfig) == null ? void 0 : _d.playerCharacterSnapshots) || [], u = ((_e = s.modeState) == null ? void 0 : _e.currentRound) || 1;
    return e.jsxs(c, { className: "cursor-pointer hover:border-amber-500/50 transition-colors group relative", onClick: () => r({ to: "/session/$sessionId", params: { sessionId: s.id } }), children: [e.jsx(C, { className: "pb-3", children: e.jsxs("div", { className: "flex items-start justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20", children: e.jsx(n, { className: "w-5 h-5 text-amber-600" }) }), e.jsxs("div", { children: [e.jsx(y, { className: "text-base", children: t }), e.jsxs(w, { className: "text-[10px]", children: ["\u56DE\u5408 ", u, " \xB7 ", g] })] })] }), e.jsxs(D, { children: [e.jsx(A, { asChild: true, children: e.jsx(o, { type: "button", variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: (a) => a.stopPropagation(), children: e.jsx(F, { className: "w-3.5 h-3.5 text-muted-foreground hover:text-destructive" }) }) }), e.jsxs(S, { children: [e.jsxs(k, { children: [e.jsx(P, { children: "\u786E\u8BA4\u5220\u9664" }), e.jsxs(B, { children: ["\u786E\u5B9A\u8981\u5220\u9664\u5192\u9669\u300C", t, "\u300D\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002"] })] }), e.jsxs(I, { children: [e.jsx(R, { children: "\u53D6\u6D88" }), e.jsx(T, { className: "bg-destructive hover:bg-destructive/90", onClick: (a) => {
      a.stopPropagation(), j(s.id);
    }, children: "\u786E\u8BA4\u5220\u9664" })] })] })] })] }) }), e.jsxs(m, { className: "pt-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [e.jsx(H, { className: "w-3.5 h-3.5 text-muted-foreground" }), e.jsxs("div", { className: "flex flex-wrap gap-1", children: [i.slice(0, 4).map((a) => e.jsx(x, { variant: "secondary", className: "text-[9px] px-1.5 h-4", children: a.name }, a.id)), i.length > 4 && e.jsxs(x, { variant: "secondary", className: "text-[9px] px-1.5 h-4", children: ["+", i.length - 4] })] })] }), e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-[10px] text-muted-foreground", children: new Date(s.updatedAt).toLocaleDateString() }), e.jsxs("div", { className: "flex items-center gap-1 text-primary text-xs font-medium", children: [e.jsx(L, { className: "w-3.5 h-3.5" }), "\u7EE7\u7EED\u5192\u9669"] })] })] })] }, s.id);
  }) }) : e.jsx(c, { className: "border-dashed", children: e.jsxs(m, { className: "py-16 text-center", children: [e.jsx(n, { className: "w-12 h-12 text-muted-foreground/20 mx-auto mb-4" }), e.jsx("p", { className: "text-muted-foreground mb-4", children: "\u8FD8\u6CA1\u6709 DnD \u5192\u9669\u4F1A\u8BDD" }), e.jsxs(o, { type: "button", variant: "outline", className: "gap-2", onClick: () => r({ to: "/create/dnd" }), children: [e.jsx(p, { className: "w-4 h-4" }), "\u521B\u5EFA\u7B2C\u4E00\u4E2A\u5192\u9669"] })] }) })] }) });
}
export {
  ae as component
};
