import { j as e, t as n } from "./react-D9TtqY-V.js";
import { f as u, i as f } from "./@tanstack-3iyDWv8L.js";
import { S as N, m as v } from "./db-master-BrZHBPj2.js";
import { B as o } from "./button-CMoAlsw3.js";
import { C as d, a as b, b as w, c as y, d as m } from "./card-85OZoUtz.js";
import { B as x } from "./badge-B6qKYUZD.js";
import { A as C, a as D, b as A, c as S, d as T, e as k, f as P, g as B, h as I } from "./alert-dialog-Bxna6sSR.js";
import { I as H } from "./InvitationGuard-HXq7MeQC.js";
import { r as l, P as h, d as F, U as L, s as R } from "./icons-bBaH0MBC.js";
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
function te() {
  const r = u(), { data: p = [] } = f((s) => s.from({ s: N })), c = p.filter((s) => s.mode === "small-town").sort((s, t) => t.updatedAt - s.updatedAt), j = async (s) => {
    try {
      await v.sessions.delete(s), n.success("\u5C0F\u9547\u4F1A\u8BDD\u5DF2\u5220\u9664");
    } catch (t) {
      console.error("\u5220\u9664\u5931\u8D25:", t), n.error("\u5220\u9664\u5931\u8D25");
    }
  };
  return e.jsx(H, { requiredFeature: "small-town", children: e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h2", { className: "text-2xl font-bold flex items-center gap-2", children: [e.jsx(l, { className: "w-6 h-6 text-amber-500" }), "\u5C0F\u9547\u6A21\u5F0F"] }), e.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "\u591A\u89D2\u8272\u81EA\u4E3B\u751F\u6D3B\u7684\u5C0F\u9547\u6A21\u62DF\u6E38\u620F" })] }), e.jsxs(o, { type: "button", onClick: () => r({ to: "/create/small-town" }), className: "gap-2", children: [e.jsx(h, { className: "w-4 h-4" }), "\u521B\u5EFA\u65B0\u5C0F\u9547"] })] }), c.length > 0 ? e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: c.map((s) => {
    var _a, _b, _c, _d;
    const t = ((_a = s.modeConfig) == null ? void 0 : _a.worldName) || "\u672A\u547D\u540D\u5C0F\u9547", i = ((_b = s.modeConfig) == null ? void 0 : _b.characterSnapshots) || [], g = ((_d = (_c = s.modeState) == null ? void 0 : _c.gameTime) == null ? void 0 : _d.day) || 1;
    return e.jsxs(d, { className: "cursor-pointer hover:border-amber-500/50 transition-colors group relative", onClick: () => r({ to: "/session/$sessionId", params: { sessionId: s.id } }), children: [e.jsx(b, { className: "pb-3", children: e.jsxs("div", { className: "flex items-start justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20", children: e.jsx(l, { className: "w-5 h-5 text-amber-600" }) }), e.jsxs("div", { children: [e.jsx(w, { className: "text-base", children: t }), e.jsxs(y, { className: "text-[10px]", children: ["\u7B2C ", g, " \u5929"] })] })] }), e.jsxs(C, { children: [e.jsx(D, { asChild: true, children: e.jsx(o, { type: "button", variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: (a) => a.stopPropagation(), children: e.jsx(F, { className: "w-3.5 h-3.5 text-muted-foreground hover:text-destructive" }) }) }), e.jsxs(A, { children: [e.jsxs(S, { children: [e.jsx(T, { children: "\u786E\u8BA4\u5220\u9664" }), e.jsxs(k, { children: ["\u786E\u5B9A\u8981\u5220\u9664\u5C0F\u9547\u300C", t, "\u300D\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002"] })] }), e.jsxs(P, { children: [e.jsx(B, { children: "\u53D6\u6D88" }), e.jsx(I, { className: "bg-destructive hover:bg-destructive/90", onClick: (a) => {
      a.stopPropagation(), j(s.id);
    }, children: "\u786E\u8BA4\u5220\u9664" })] })] })] })] }) }), e.jsxs(m, { className: "pt-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [e.jsx(L, { className: "w-3.5 h-3.5 text-muted-foreground" }), e.jsxs("div", { className: "flex flex-wrap gap-1", children: [i.slice(0, 4).map((a) => e.jsx(x, { variant: "secondary", className: "text-[9px] px-1.5 h-4", children: a.name }, a.id)), i.length > 4 && e.jsxs(x, { variant: "secondary", className: "text-[9px] px-1.5 h-4", children: ["+", i.length - 4] })] })] }), e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-[10px] text-muted-foreground", children: new Date(s.updatedAt).toLocaleDateString() }), e.jsxs("div", { className: "flex items-center gap-1 text-primary text-xs font-medium", children: [e.jsx(R, { className: "w-3.5 h-3.5" }), "\u7EE7\u7EED\u6E38\u620F"] })] })] })] }, s.id);
  }) }) : e.jsx(d, { className: "border-dashed", children: e.jsxs(m, { className: "py-16 text-center", children: [e.jsx(l, { className: "w-12 h-12 text-muted-foreground/20 mx-auto mb-4" }), e.jsx("p", { className: "text-muted-foreground mb-4", children: "\u8FD8\u6CA1\u6709\u5C0F\u9547\u4F1A\u8BDD" }), e.jsxs(o, { type: "button", variant: "outline", className: "gap-2", onClick: () => r({ to: "/create/small-town" }), children: [e.jsx(h, { className: "w-4 h-4" }), "\u521B\u5EFA\u7B2C\u4E00\u4E2A\u5C0F\u9547"] })] }) })] }) });
}
export {
  te as component
};
