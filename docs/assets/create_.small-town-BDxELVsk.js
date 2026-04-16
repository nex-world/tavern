import { r as j, j as e, u as d } from "./react-gFHNOnf5.js";
import { f as F, i as O } from "./@tanstack-DDpiKjUN.js";
import { n as _ } from "./id-OxPLOBIU.js";
import { C as W, m as $ } from "./db-master-DI3V0061.js";
import { S as V, c as q } from "./slider-DrwpTiXR.js";
import { B as x } from "./button-D3G-RLOw.js";
import { I as f } from "./input-KwncZLGm.js";
import { T as y } from "./textarea-DqdRyzs9.js";
import { L as o } from "./label-BU_LC6Ti.js";
import { C, a as w, b as k, c as I, d as T } from "./card-B4CxGEM-.js";
import { B as Q } from "./badge-C9CmQsZA.js";
import { C as X } from "./CharacterAvatar-TKrkqhhW.js";
import { C as J } from "./checkbox-DcACMCG8.js";
import { c as L } from "./shadcn-utils-BMZD7_jZ.js";
import { c as K } from "./llm-readiness-DRaLeVb_.js";
import { a2 as Y, v as Z, a3 as U, U as E, P as ee, a4 as se, X as ae, a5 as te, a6 as re, T as S } from "./icons-CW-0NDo_.js";
import { I as le } from "./InvitationGuard-DpWHmU2-.js";
import { A, a as M, b as D } from "./alert-r3n7vLN7.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./zod-DPWJ_A9_.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./nex-tavern-uuid-HW61e36x.js";
const N = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#e67e22", "#34495e"];
function ie(s, r) {
  var _a;
  return { characterId: s.id, name: s.name, personality: ((_a = s.description) == null ? void 0 : _a.slice(0, 100)) || "\u53CB\u5584\u7684\u5C0F\u9547\u5C45\u6C11", systemPrompt: s.system_prompt || s.description || "", avatar: s.avatar || s.imageBase64, color: N[r % N.length], longTermGoal: "\u8FC7\u4E0A\u5E78\u798F\u7684\u751F\u6D3B", initialMoney: 50, initialHomeLevel: 0, aiEnabled: true };
}
const ne = () => {
  const s = F(), [r, p] = j.useState("\u5B81\u9759\u5C0F\u9547"), [t, h] = j.useState(""), [n, u] = j.useState([]), { data: v = [] } = O((a) => a.from({ c: W })), g = new Set(n.map((a) => a.characterId)), z = (a) => {
    if (g.has(a.id)) return;
    const l = ie(a, n.length);
    u((c) => [...c, l]);
  }, H = (a) => {
    u((l) => l.filter((c) => c.characterId !== a));
  }, R = (a, l) => {
    u((c) => c.map((m) => m.characterId === a ? { ...m, ...l } : m));
  }, G = async () => {
    if (!r.trim()) {
      d.error("\u8BF7\u8F93\u5165\u5C0F\u9547\u540D\u79F0");
      return;
    }
    if (n.length === 0) {
      d.error("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
      return;
    }
    if (n.length < 2) {
      d.error("\u5C0F\u9547\u6A21\u5F0F\u81F3\u5C11\u9700\u8981 2 \u4E2A\u89D2\u8272\u624D\u80FD\u4E92\u52A8");
      return;
    }
    if (!K().isReady) {
      d.error("\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E"), s({ to: "/config/llm" });
      return;
    }
    try {
      const l = _(), c = Date.now(), m = n.map((i) => ({ id: i.characterId, name: i.name, personality: i.personality, avatar: i.avatar, systemPrompt: i.systemPrompt, color: i.color, longTermGoal: i.longTermGoal, initialMoney: i.initialMoney, initialHomeLevel: i.initialHomeLevel, aiEnabled: i.aiEnabled })), b = { worldName: r.trim(), worldDescription: t.trim(), characterIds: m.map((i) => i.id), characterSnapshots: m, tickInterval: 5e3, minsPerTick: 20, settings: { aiEnabled: true, workingInterval: 6, idleInterval: 2, aiDecisionOnTaskComplete: true, waitForAICompletion: true, maxAIWaitTicks: 3, aiTimeoutMs: 3e4, fastTickInterval: 500, normalTickInterval: 5e3 } }, P = q(b), B = { id: l, title: `\u5C0F\u9547: ${r}`, contextId: null, mode: "small-town", modeConfig: b, modeState: P, createdAt: c, updatedAt: c, isActive: true };
      await $.sessions.add(B), d.success("\u5C0F\u9547\u5DF2\u521B\u5EFA\uFF01"), s({ to: "/session/$sessionId", params: { sessionId: l } });
    } catch (l) {
      console.error("[SmallTown] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", l), d.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
  };
  return e.jsxs("div", { className: "max-w-4xl mx-auto space-y-8 pb-12", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs(x, { type: "button", variant: "ghost", size: "sm", className: "-ml-2 text-muted-foreground", onClick: () => s({ to: "/plaza/small-town" }), children: [e.jsx(Y, { className: "w-4 h-4 mr-1" }), " \u8FD4\u56DE"] }) }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-3", children: [e.jsx(Z, { className: "w-8 h-8 text-amber-500" }), "\u521B\u5EFA\u5C0F\u9547"] }), e.jsx("p", { className: "text-muted-foreground", children: "\u9009\u62E9\u89D2\u8272\u52A0\u5165\u5C0F\u9547\uFF0C\u4ED6\u4EEC\u5C06\u81EA\u4E3B\u751F\u6D3B\u3001\u5DE5\u4F5C\u3001\u4EA4\u6D41\u3002" })] }), e.jsxs(C, { children: [e.jsxs(w, { children: [e.jsxs(k, { className: "flex items-center gap-2 text-lg", children: [e.jsx(U, { className: "w-5 h-5 text-primary" }), "\u5C0F\u9547\u8BBE\u5B9A"] }), e.jsx(I, { children: "\u8BBE\u7F6E\u5C0F\u9547\u7684\u57FA\u672C\u4FE1\u606F" })] }), e.jsx(T, { className: "space-y-4", children: e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(o, { htmlFor: "world-name", children: "\u5C0F\u9547\u540D\u79F0 *" }), e.jsx(f, { id: "world-name", placeholder: "\u4F8B\u5982\uFF1A\u5B81\u9759\u5C0F\u9547", value: r, onChange: (a) => p(a.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(o, { htmlFor: "world-desc", children: "\u5C0F\u9547\u7B80\u4ECB" }), e.jsx(f, { id: "world-desc", placeholder: "\u4E00\u53E5\u8BDD\u63CF\u8FF0\u8FD9\u4E2A\u5C0F\u9547", value: t, onChange: (a) => h(a.target.value) })] })] }) })] }), e.jsxs(C, { children: [e.jsxs(w, { children: [e.jsxs(k, { className: "flex items-center gap-2 text-lg", children: [e.jsx(E, { className: "w-5 h-5 text-primary" }), "\u5C0F\u9547\u5C45\u6C11"] }), e.jsx(I, { children: "\u4ECE\u5DF2\u6709\u89D2\u8272\u4E2D\u9009\u62E9\u5C0F\u9547\u5C45\u6C11\uFF08\u81F3\u5C11 2 \u4E2A\uFF09" })] }), e.jsxs(T, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(o, { children: "\u6DFB\u52A0\u5C45\u6C11" }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [v.filter((a) => !g.has(a.id)).map((a) => e.jsxs(x, { type: "button", variant: "outline", size: "sm", className: "gap-2", onClick: () => z(a), children: [e.jsx(ee, { className: "w-3 h-3" }), a.name] }, a.id)), v.length === 0 && e.jsxs("p", { className: "text-sm text-muted-foreground py-2", children: ["\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148", e.jsx(x, { type: "button", variant: "link", className: "px-1 h-auto", onClick: () => s({ to: "/create/character" }), children: "\u521B\u5EFA\u89D2\u8272" })] })] })] }), n.length > 0 && e.jsxs("div", { className: "space-y-4", children: [e.jsx(o, { children: "\u5DF2\u9009\u5C45\u6C11\u914D\u7F6E" }), n.map((a) => e.jsx(ce, { config: a, onUpdate: (l) => R(a.characterId, l), onRemove: () => H(a.characterId) }, a.characterId))] }), n.length === 0 && e.jsxs("div", { className: "text-center py-10 border border-dashed rounded-xl", children: [e.jsx(E, { className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u4ECE\u4E0A\u65B9\u9009\u62E9\u89D2\u8272\u52A0\u5165\u5C0F\u9547" })] })] })] }), e.jsxs("div", { className: "flex justify-end gap-4", children: [e.jsx(x, { type: "button", variant: "outline", onClick: () => s({ to: "/plaza/small-town" }), children: "\u53D6\u6D88" }), e.jsxs(x, { type: "button", size: "lg", className: "gap-2 px-8", onClick: G, disabled: !r.trim() || n.length < 2, children: [e.jsx(se, { className: "w-5 h-5" }), "\u521B\u5EFA\u5C0F\u9547"] })] })] });
}, oe = ["\u6D41\u6D6A\u8005", "\u6551\u6D4E\u623F", "\u516C\u5BD3", "\u5957\u623F", "\u8C6A\u534E\u5957\u623F", "\u522B\u5885"], ce = ({ config: s, onUpdate: r, onRemove: p }) => e.jsxs("div", { className: L("p-4 rounded-xl border relative group transition-colors", "border-muted/50 bg-muted/10"), children: [e.jsx(x, { type: "button", variant: "ghost", size: "icon", className: "absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: p, children: e.jsx(ae, { className: "w-4 h-4 text-muted-foreground" }) }), e.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [e.jsx(X, { character: s, className: "w-10 h-10 border-none", style: { backgroundColor: s.color }, fallbackClassName: "text-white" }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "font-bold", children: s.name }), e.jsx(Q, { variant: "outline", className: "text-[9px]", children: s.aiEnabled ? "AI \u63A7\u5236" : "\u73A9\u5BB6\u63A7\u5236" })] }), e.jsx("p", { className: "text-xs text-muted-foreground truncate", children: s.personality })] })] }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(o, { className: "text-xs", children: "\u957F\u671F\u76EE\u6807" }), e.jsx(y, { value: s.longTermGoal, onChange: (t) => r({ longTermGoal: t.target.value }), className: "h-16 text-sm resize-none", placeholder: "\u8FD9\u4E2A\u89D2\u8272\u7684\u4EBA\u751F\u76EE\u6807\u662F\u4EC0\u4E48\uFF1F" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(o, { className: "text-xs", children: "\u6027\u683C\u63CF\u8FF0" }), e.jsx(y, { value: s.personality, onChange: (t) => r({ personality: t.target.value }), className: "h-16 text-sm resize-none", placeholder: "\u7B80\u77ED\u63CF\u8FF0\u6027\u683C\u7279\u70B9" })] })] }), e.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(o, { className: "text-xs flex items-center gap-1", children: [e.jsx(te, { className: "w-3 h-3" }), " \u521D\u59CB\u91D1\u94B1"] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(V, { value: [s.initialMoney], onValueChange: ([t]) => r({ initialMoney: t }), min: 0, max: 200, step: 10, className: "flex-1" }), e.jsxs("span", { className: "text-xs font-mono w-8 text-right", children: ["$", s.initialMoney] })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(o, { className: "text-xs", children: "\u521D\u59CB\u4F4F\u623F" }), e.jsx("select", { className: "w-full h-8 text-xs rounded border bg-background px-2", value: s.initialHomeLevel, onChange: (t) => r({ initialHomeLevel: Number(t.target.value) }), children: oe.map((t, h) => e.jsx("option", { value: h, children: t }, h)) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(o, { className: "text-xs", children: "\u989C\u8272" }), e.jsx("div", { className: "flex gap-1 flex-wrap", children: N.map((t) => e.jsx("button", { type: "button", className: L("w-5 h-5 rounded-full border-2 transition-transform", s.color === t ? "border-primary scale-110" : "border-transparent"), style: { backgroundColor: t }, onClick: () => r({ color: t }) }, t)) })] }), e.jsx("div", { className: "flex items-end pb-1", children: e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [e.jsx(J, { checked: s.aiEnabled, onCheckedChange: (t) => r({ aiEnabled: !!t }) }), e.jsx(re, { className: "w-3 h-3" }), e.jsx("span", { className: "text-xs font-medium", children: "AI \u63A7\u5236" })] }) })] })] });
function Re() {
  return e.jsx(le, { requiredFeature: "small-town", children: e.jsxs("div", { className: "p-6 relative space-y-4", children: [e.jsxs(A, { className: "border-amber-500/40 bg-amber-500/10 text-amber-950 dark:text-amber-50", children: [e.jsx(S, { className: "h-4 w-4 text-amber-600 dark:text-amber-300" }), e.jsx(M, { className: "text-base", children: "\u529F\u80FD\u4ECD\u5728\u5F00\u53D1\u4E2D" }), e.jsx(D, { className: "text-sm text-amber-900/80 dark:text-amber-50/80", children: "\u5C0F\u9547\u6A21\u5F0F\u76EE\u524D\u4ECD\u5728\u8FED\u4EE3\u4E2D\uFF0C\u90E8\u5206\u884C\u4E3A\u3001\u89C4\u5219\u548C\u4EA4\u4E92\u53EF\u80FD\u8FD8\u4F1A\u7EE7\u7EED\u8C03\u6574\u3002" })] }), e.jsxs(A, { className: "border-destructive/40 bg-destructive/10 text-destructive dark:border-destructive/50 dark:bg-destructive/15 dark:text-destructive-foreground", children: [e.jsx(S, { className: "h-4 w-4" }), e.jsx(M, { className: "text-base", children: "\u6CE8\u610F Token \u6D88\u8017" }), e.jsx(D, { className: "text-sm", children: "\u5C0F\u9547\u6A21\u5F0F\u4F1A\u540C\u65F6\u9A71\u52A8\u591A\u4E2A\u89D2\u8272\u4E0E\u73AF\u5883\u63A8\u6F14\uFF0C\u6574\u4F53 token \u6D88\u8017\u4F1A\u660E\u663E\u9AD8\u4E8E\u666E\u901A\u5355\u89D2\u8272\u4F1A\u8BDD\uFF0C\u8BF7\u63D0\u524D\u786E\u8BA4\u6A21\u578B\u989D\u5EA6\u3002" })] }), e.jsx(ne, {})] }) });
}
export {
  Re as component
};
