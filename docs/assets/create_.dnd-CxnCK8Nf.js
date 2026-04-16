import { r as u, j as e, u as x } from "./react-gFHNOnf5.js";
import { f as G, i as K } from "./@tanstack-DDpiKjUN.js";
import { n as V } from "./id-OxPLOBIU.js";
import { C as $, m as q } from "./db-master-DI3V0061.js";
import { B as p } from "./button-D3G-RLOw.js";
import { I as j } from "./input-KwncZLGm.js";
import { T as P } from "./textarea-DqdRyzs9.js";
import { L as c } from "./label-BU_LC6Ti.js";
import { C as w, a as y, b as D, c as A, d as k } from "./card-B4CxGEM-.js";
import { B as Q } from "./badge-C9CmQsZA.js";
import { C as X } from "./CharacterAvatar-TKrkqhhW.js";
import { C as J } from "./checkbox-DcACMCG8.js";
import { S as O, a as Y, b as Z, c as ee, d as v } from "./select-BkM7Xz_F.js";
import { c as T } from "./shadcn-utils-BMZD7_jZ.js";
import { c as se } from "./llm-readiness-DRaLeVb_.js";
import { a2 as ae, t as te, a3 as re, U as L, P as le, a0 as ne, a7 as b, a4 as ce, X as de, T as ie } from "./icons-CW-0NDo_.js";
import { I as oe } from "./InvitationGuard-DpWHmU2-.js";
import { A as me, a as xe, b as he } from "./alert-r3n7vLN7.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./zod-DPWJ_A9_.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./nex-tavern-uuid-HW61e36x.js";
const ue = { \u529B\u91CF: 10, \u654F\u6377: 10, \u4F53\u8D28: 10, \u667A\u529B: 10, \u611F\u77E5: 10, \u9B45\u529B: 10 };
function pe(a) {
  return { characterId: a.id, name: a.name, description: a.description, systemPrompt: a.system_prompt || a.description, avatar: a.avatar || a.imageBase64, race: "\u4EBA\u7C7B", class: "\u5192\u9669\u8005", isHumanControlled: false, currentHP: 20, maxHP: 20, attributes: { ...ue } };
}
const je = () => {
  const a = G(), [d, C] = u.useState(""), [g, r] = u.useState(""), [i, M] = u.useState(""), [I, R] = u.useState(""), [f, B] = u.useState("standard"), [o, N] = u.useState([]), { data: H = [] } = K((s) => s.from({ c: $ })), S = new Set(o.map((s) => s.characterId)), F = (s) => {
    if (S.has(s.id)) return;
    const l = pe(s);
    o.length === 0 && (l.isHumanControlled = true), N((t) => [...t, l]);
  }, z = (s) => {
    N((l) => l.filter((t) => t.characterId !== s));
  }, E = (s, l) => {
    N((t) => t.map((m) => m.characterId === s ? { ...m, ...l } : m));
  }, U = (s, l, t) => {
    N((m) => m.map((h) => h.characterId === s ? { ...h, attributes: { ...h.attributes, [l]: t } } : h));
  }, _ = async () => {
    if (!d.trim()) {
      x.error("\u8BF7\u8F93\u5165\u4E16\u754C\u540D\u79F0");
      return;
    }
    if (!i.trim()) {
      x.error("\u8BF7\u8F93\u5165\u4E16\u754C\u7CFB\u7EDF\u63D0\u793A\u8BCD");
      return;
    }
    if (o.length === 0) {
      x.error("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
      return;
    }
    if (!se().isReady) {
      x.error("\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E"), a({ to: "/config/llm" });
      return;
    }
    if (!o.some((t) => t.isHumanControlled) && f !== "solo") {
      x.error("\u8BF7\u81F3\u5C11\u6307\u5B9A\u4E00\u4E2A\u4EBA\u7C7B\u63A7\u5236\u7684\u89D2\u8272");
      return;
    }
    try {
      const t = V(), m = Date.now(), h = o.map((n) => ({ id: n.characterId, name: n.name, description: n.description, systemPrompt: n.systemPrompt, avatar: n.avatar, attributes: n.attributes, race: n.race, class: n.class, currentHP: n.currentHP, maxHP: n.maxHP, isHumanControlled: n.isHumanControlled })), W = { id: t, title: `DnD: ${d}`, contextId: null, mode: "dnd", modeConfig: { worldSnapshot: { name: d, description: g, systemPrompt: i, globalKnowledge: I || void 0 }, gameMode: f, playerCharacterSnapshots: h, dmName: "Dungeon Master" }, modeState: { currentPhase: "dm_game_intro", currentUIState: "idle", currentTurnCharacterId: "dm", currentRound: 1, turnCounts: {}, historySummary: "" }, createdAt: m, updatedAt: m, isActive: true };
      await q.sessions.add(W), x.success("DnD \u5192\u9669\u5DF2\u521B\u5EFA\uFF01"), a({ to: "/session/$sessionId", params: { sessionId: t } });
    } catch (t) {
      console.error("[DnD] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", t), x.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
  };
  return e.jsxs("div", { className: "max-w-4xl mx-auto space-y-8 pb-12", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs(p, { type: "button", variant: "ghost", size: "sm", className: "-ml-2 text-muted-foreground", onClick: () => a({ to: "/plaza/characters" }), children: [e.jsx(ae, { className: "w-4 h-4 mr-1" }), " \u8FD4\u56DE"] }) }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-3", children: [e.jsx(te, { className: "w-8 h-8 text-amber-500" }), "\u521B\u5EFA DnD \u5192\u9669"] }), e.jsx("p", { className: "text-muted-foreground", children: "\u914D\u7F6E\u4E16\u754C\u8BBE\u5B9A\u3001\u9009\u62E9\u5192\u9669\u89D2\u8272\uFF0C\u5F00\u542F\u4E00\u6BB5\u684C\u6E38\u98CE\u683C\u7684\u591A\u4EBA\u5192\u9669\u3002" })] }), e.jsxs(w, { children: [e.jsxs(y, { children: [e.jsxs(D, { className: "flex items-center gap-2 text-lg", children: [e.jsx(re, { className: "w-5 h-5 text-primary" }), "\u4E16\u754C\u8BBE\u5B9A"] }), e.jsx(A, { children: "\u63CF\u8FF0\u5192\u9669\u53D1\u751F\u7684\u4E16\u754C\u80CC\u666F" })] }), e.jsxs(k, { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { htmlFor: "world-name", children: "\u4E16\u754C\u540D\u79F0 *" }), e.jsx(j, { id: "world-name", placeholder: "\u4F8B\u5982\uFF1A\u88AB\u9057\u5FD8\u7684\u56FD\u5EA6", value: d, onChange: (s) => C(s.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { htmlFor: "world-desc", children: "\u4E16\u754C\u7B80\u4ECB" }), e.jsx(j, { id: "world-desc", placeholder: "\u4E00\u53E5\u8BDD\u63CF\u8FF0\u8FD9\u4E2A\u4E16\u754C", value: g, onChange: (s) => r(s.target.value) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { htmlFor: "world-prompt", children: "DM \u7CFB\u7EDF\u63D0\u793A\u8BCD *" }), e.jsx(P, { id: "world-prompt", placeholder: "\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684 DM\uFF0C\u64C5\u957F\u5728\u4E2D\u4E16\u7EAA\u5947\u5E7B\u4E16\u754C\u4E2D\u5F15\u5BFC\u5192\u9669...", className: "min-h-32", value: i, onChange: (s) => M(s.target.value) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u6307\u5BFC LLM \u5982\u4F55\u626E\u6F14 DM\u3002\u5305\u62EC\u4E16\u754C\u89C4\u5219\u3001\u8BED\u6C14\u98CE\u683C\u3001\u53D9\u4E8B\u504F\u597D\u7B49\u3002" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { htmlFor: "world-knowledge", children: "\u4E16\u754C\u89C2\u8865\u5145\uFF08\u53EF\u9009\uFF09" }), e.jsx(P, { id: "world-knowledge", placeholder: "\u8865\u5145\u7684\u5730\u7406\u3001\u5386\u53F2\u3001\u9635\u8425\u3001NPC \u7B49\u4FE1\u606F...", className: "min-h-20", value: I, onChange: (s) => R(s.target.value) })] })] })] }), e.jsxs(w, { children: [e.jsxs(y, { children: [e.jsxs(D, { className: "flex items-center gap-2 text-lg", children: [e.jsx(L, { className: "w-5 h-5 text-primary" }), "\u5192\u9669\u89D2\u8272"] }), e.jsx(A, { children: "\u4ECE\u5DF2\u6709\u89D2\u8272\u4E2D\u9009\u62E9\u53C2\u4E0E\u5192\u9669\u7684\u89D2\u8272\uFF0C\u5E76\u914D\u7F6E DnD \u5C5E\u6027" })] }), e.jsxs(k, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { children: "\u6DFB\u52A0\u89D2\u8272" }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [H.filter((s) => !S.has(s.id)).map((s) => e.jsxs(p, { type: "button", variant: "outline", size: "sm", className: "gap-2", onClick: () => F(s), children: [e.jsx(le, { className: "w-3 h-3" }), s.name] }, s.id)), H.length === 0 && e.jsxs("p", { className: "text-sm text-muted-foreground py-2", children: ["\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148", e.jsx(p, { type: "button", variant: "link", className: "px-1 h-auto", onClick: () => a({ to: "/create/character" }), children: "\u521B\u5EFA\u89D2\u8272" })] })] })] }), o.length > 0 && e.jsxs("div", { className: "space-y-4", children: [e.jsx(c, { children: "\u5DF2\u9009\u89D2\u8272\u914D\u7F6E" }), o.map((s) => e.jsx(Ne, { config: s, onUpdate: (l) => E(s.characterId, l), onUpdateAttribute: (l, t) => U(s.characterId, l, t), onRemove: () => z(s.characterId) }, s.characterId))] }), o.length === 0 && e.jsxs("div", { className: "text-center py-10 border border-dashed rounded-xl", children: [e.jsx(L, { className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u4ECE\u4E0A\u65B9\u9009\u62E9\u89D2\u8272\u52A0\u5165\u5192\u9669" })] })] })] }), e.jsxs(w, { children: [e.jsx(y, { children: e.jsxs(D, { className: "flex items-center gap-2 text-lg", children: [e.jsx(ne, { className: "w-5 h-5 text-primary" }), "\u6E38\u620F\u8BBE\u7F6E"] }) }), e.jsx(k, { className: "space-y-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { children: "\u6E38\u620F\u6A21\u5F0F" }), e.jsxs(O, { value: f, onValueChange: (s) => B(s), children: [e.jsx(Y, { className: "w-full md:w-80", children: e.jsx(Z, {}) }), e.jsxs(ee, { children: [e.jsx(v, { value: "standard", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(b, { className: "w-4 h-4" }), "\u6807\u51C6\u6A21\u5F0F \u2014 \u5B8C\u6574\u68C0\u5B9A\u6D41\u7A0B"] }) }), e.jsx(v, { value: "narrative", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(b, { className: "w-4 h-4" }), "\u53D9\u4E8B\u6A21\u5F0F \u2014 DM \u53EF\u8DF3\u8FC7\u68C0\u5B9A"] }) }), e.jsx(v, { value: "hardcore", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(b, { className: "w-4 h-4" }), "\u786C\u6838\u6A21\u5F0F \u2014 \u4E25\u683C\u89C4\u5219\uFF0C\u9AD8 DC"] }) }), e.jsx(v, { value: "solo", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(b, { className: "w-4 h-4" }), "\u72EC\u594F\u6A21\u5F0F \u2014 \u5168 AI \u81EA\u52A8\u8FD0\u884C"] }) })] })] })] }) })] }), e.jsxs("div", { className: "flex justify-end gap-4", children: [e.jsx(p, { type: "button", variant: "outline", onClick: () => a({ to: "/plaza/characters" }), children: "\u53D6\u6D88" }), e.jsxs(p, { type: "button", size: "lg", className: "gap-2 px-8", onClick: _, disabled: !d.trim() || !i.trim() || o.length === 0, children: [e.jsx(ce, { className: "w-5 h-5" }), "\u5F00\u59CB\u5192\u9669"] })] })] });
}, ge = ["\u529B\u91CF", "\u654F\u6377", "\u4F53\u8D28", "\u667A\u529B", "\u611F\u77E5", "\u9B45\u529B"], Ne = ({ config: a, onUpdate: d, onUpdateAttribute: C, onRemove: g }) => e.jsxs("div", { className: T("p-4 rounded-xl border relative group transition-colors", a.isHumanControlled ? "border-blue-500/30 bg-blue-500/5" : "border-muted/50 bg-muted/10"), children: [e.jsx(p, { type: "button", variant: "ghost", size: "icon", className: "absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: g, children: e.jsx(de, { className: "w-4 h-4 text-muted-foreground" }) }), e.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [e.jsx(X, { character: a, shape: "rounded", className: T("w-10 h-10", a.isHumanControlled ? "bg-blue-500/20" : "bg-muted"), fallbackClassName: a.isHumanControlled ? "text-blue-500" : void 0 }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "font-bold", children: a.name }), e.jsx(Q, { variant: "outline", className: "text-[9px]", children: a.isHumanControlled ? "\u73A9\u5BB6\u63A7\u5236" : "AI \u63A7\u5236" })] }), e.jsx("p", { className: "text-xs text-muted-foreground truncate", children: a.description })] })] }), e.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-4", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(c, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "\u79CD\u65CF" }), e.jsx(j, { value: a.race, onChange: (r) => d({ race: r.target.value }), className: "h-8 text-sm", placeholder: "\u4EBA\u7C7B" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(c, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "\u804C\u4E1A" }), e.jsx(j, { value: a.class, onChange: (r) => d({ class: r.target.value }), className: "h-8 text-sm", placeholder: "\u6218\u58EB" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(c, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "HP" }), e.jsx(j, { type: "number", value: a.maxHP, onChange: (r) => {
  const i = Number(r.target.value) || 20;
  d({ maxHP: i, currentHP: i });
}, className: "h-8 text-sm", min: 1 })] }), e.jsx("div", { className: "flex items-end pb-1", children: e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [e.jsx(J, { checked: a.isHumanControlled, onCheckedChange: (r) => d({ isHumanControlled: !!r }) }), e.jsx("span", { className: "text-xs font-medium", children: "\u73A9\u5BB6\u63A7\u5236" })] }) })] }), e.jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-2", children: ge.map((r) => e.jsxs("div", { className: "space-y-1", children: [e.jsx(c, { className: "text-[9px] uppercase tracking-wider text-muted-foreground text-center block", children: r }), e.jsx(j, { type: "number", value: a.attributes[r], onChange: (i) => C(r, Number(i.target.value) || 10), className: "h-8 text-sm text-center font-mono", min: 1, max: 30 })] }, r)) })] });
function Ve() {
  return e.jsx(oe, { requiredFeature: "dnd", children: e.jsxs("div", { className: "p-6 relative space-y-4", children: [e.jsxs(me, { className: "border-amber-500/40 bg-amber-500/10 text-amber-950 dark:text-amber-50", children: [e.jsx(ie, { className: "h-4 w-4 text-amber-600 dark:text-amber-300" }), e.jsx(xe, { className: "text-base", children: "\u529F\u80FD\u4ECD\u5728\u5F00\u53D1\u4E2D" }), e.jsx(he, { className: "text-sm text-amber-900/80 dark:text-amber-50/80", children: "DnD \u5192\u9669\u76EE\u524D\u8FD8\u5728\u5B8C\u5584\u4E2D\uFF0C\u9875\u9762\u4E0E\u6D41\u7A0B\u53EF\u80FD\u968F\u65F6\u8C03\u6574\uFF0C\u5EFA\u8BAE\u5148\u4EE5\u6D4B\u8BD5\u548C\u4F53\u9A8C\u4E3A\u4E3B\u3002" })] }), e.jsx(je, {})] }) });
}
export {
  Ve as component
};
