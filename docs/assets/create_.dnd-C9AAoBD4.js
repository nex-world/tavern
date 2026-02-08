import { r as u, j as e, t as x } from "./react-BQpw03Eg.js";
import { f as W, i as K } from "./@tanstack-B4B5CfFY.js";
import { n as V } from "./id-OxPLOBIU.js";
import { C as $, m as q } from "./db-master-l33tB5ke.js";
import { B as p } from "./button-B9brLUSp.js";
import { I as j } from "./input-C44X3vA9.js";
import { T as P } from "./textarea-D6rL78Aw.js";
import { L as c } from "./label-DMtPOVS-.js";
import { C as w, a as y, b as D, c as T, d as I } from "./card-ClPZDGV4.js";
import { B as J } from "./badge-DvaSwOwN.js";
import { C as Q } from "./checkbox-5kiXjLha.js";
import { S as X, a as O, b as Y, c as Z, d as v } from "./select-VEltzsBv.js";
import { c as A } from "./shadcn-utils-BMZD7_jZ.js";
import { c as ee } from "./llm-readiness-DgR8F2ee.js";
import { x as se, n as ae, G as te, U as L, P as re, E as le, J as f, y as ne, X as ce, N as de, B as oe } from "./icons-BC63ChG4.js";
import { I as ie } from "./InvitationGuard-DZ3pj6mc.js";
import "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-B3Kybfa7.js";
import "./zod-fbN9ubnj.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./nex-tavern-uuid-HW61e36x.js";
const me = { \u529B\u91CF: 10, \u654F\u6377: 10, \u4F53\u8D28: 10, \u667A\u529B: 10, \u611F\u77E5: 10, \u9B45\u529B: 10 };
function xe(a) {
  return { characterId: a.id, name: a.name, description: a.description, systemPrompt: a.system_prompt || a.description, avatar: a.avatar || a.imageBase64, race: "\u4EBA\u7C7B", class: "\u5192\u9669\u8005", isHumanControlled: false, currentHP: 20, maxHP: 20, attributes: { ...me } };
}
const he = () => {
  const a = W(), [d, C] = u.useState(""), [g, r] = u.useState(""), [o, M] = u.useState(""), [H, B] = u.useState(""), [b, R] = u.useState("standard"), [i, N] = u.useState([]), { data: S = [] } = K((s) => s.from({ c: $ })), k = new Set(i.map((s) => s.characterId)), E = (s) => {
    if (k.has(s.id)) return;
    const l = xe(s);
    i.length === 0 && (l.isHumanControlled = true), N((t) => [...t, l]);
  }, F = (s) => {
    N((l) => l.filter((t) => t.characterId !== s));
  }, z = (s, l) => {
    N((t) => t.map((m) => m.characterId === s ? { ...m, ...l } : m));
  }, U = (s, l, t) => {
    N((m) => m.map((h) => h.characterId === s ? { ...h, attributes: { ...h.attributes, [l]: t } } : h));
  }, _ = async () => {
    if (!d.trim()) {
      x.error("\u8BF7\u8F93\u5165\u4E16\u754C\u540D\u79F0");
      return;
    }
    if (!o.trim()) {
      x.error("\u8BF7\u8F93\u5165\u4E16\u754C\u7CFB\u7EDF\u63D0\u793A\u8BCD");
      return;
    }
    if (i.length === 0) {
      x.error("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
      return;
    }
    if (!ee().isReady) {
      x.error("\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E"), a({ to: "/config/llm" });
      return;
    }
    if (!i.some((t) => t.isHumanControlled) && b !== "solo") {
      x.error("\u8BF7\u81F3\u5C11\u6307\u5B9A\u4E00\u4E2A\u4EBA\u7C7B\u63A7\u5236\u7684\u89D2\u8272");
      return;
    }
    try {
      const t = V(), m = Date.now(), h = i.map((n) => ({ id: n.characterId, name: n.name, description: n.description, systemPrompt: n.systemPrompt, avatar: n.avatar, attributes: n.attributes, race: n.race, class: n.class, currentHP: n.currentHP, maxHP: n.maxHP, isHumanControlled: n.isHumanControlled })), G = { id: t, title: `DnD: ${d}`, contextId: null, mode: "dnd", modeConfig: { worldSnapshot: { name: d, description: g, systemPrompt: o, globalKnowledge: H || void 0 }, gameMode: b, playerCharacterSnapshots: h, dmName: "Dungeon Master" }, modeState: { currentPhase: "dm_game_intro", currentUIState: "idle", currentTurnCharacterId: "dm", currentRound: 1, turnCounts: {}, historySummary: "" }, createdAt: m, updatedAt: m, isActive: true };
      await q.sessions.add(G), x.success("DnD \u5192\u9669\u5DF2\u521B\u5EFA\uFF01"), a({ to: "/session/$sessionId", params: { sessionId: t }, search: { mode: "dnd" } });
    } catch (t) {
      console.error("[DnD] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", t), x.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
  };
  return e.jsxs("div", { className: "max-w-4xl mx-auto space-y-8 pb-12", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs(p, { type: "button", variant: "ghost", size: "sm", className: "-ml-2 text-muted-foreground", onClick: () => a({ to: "/plaza/characters" }), children: [e.jsx(se, { className: "w-4 h-4 mr-1" }), " \u8FD4\u56DE"] }) }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-3", children: [e.jsx(ae, { className: "w-8 h-8 text-amber-500" }), "\u521B\u5EFA DnD \u5192\u9669"] }), e.jsx("p", { className: "text-muted-foreground", children: "\u914D\u7F6E\u4E16\u754C\u8BBE\u5B9A\u3001\u9009\u62E9\u5192\u9669\u89D2\u8272\uFF0C\u5F00\u542F\u4E00\u6BB5\u684C\u6E38\u98CE\u683C\u7684\u591A\u4EBA\u5192\u9669\u3002" })] }), e.jsxs(w, { children: [e.jsxs(y, { children: [e.jsxs(D, { className: "flex items-center gap-2 text-lg", children: [e.jsx(te, { className: "w-5 h-5 text-primary" }), "\u4E16\u754C\u8BBE\u5B9A"] }), e.jsx(T, { children: "\u63CF\u8FF0\u5192\u9669\u53D1\u751F\u7684\u4E16\u754C\u80CC\u666F" })] }), e.jsxs(I, { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { htmlFor: "world-name", children: "\u4E16\u754C\u540D\u79F0 *" }), e.jsx(j, { id: "world-name", placeholder: "\u4F8B\u5982\uFF1A\u88AB\u9057\u5FD8\u7684\u56FD\u5EA6", value: d, onChange: (s) => C(s.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { htmlFor: "world-desc", children: "\u4E16\u754C\u7B80\u4ECB" }), e.jsx(j, { id: "world-desc", placeholder: "\u4E00\u53E5\u8BDD\u63CF\u8FF0\u8FD9\u4E2A\u4E16\u754C", value: g, onChange: (s) => r(s.target.value) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { htmlFor: "world-prompt", children: "DM \u7CFB\u7EDF\u63D0\u793A\u8BCD *" }), e.jsx(P, { id: "world-prompt", placeholder: "\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684 DM\uFF0C\u64C5\u957F\u5728\u4E2D\u4E16\u7EAA\u5947\u5E7B\u4E16\u754C\u4E2D\u5F15\u5BFC\u5192\u9669...", className: "min-h-32", value: o, onChange: (s) => M(s.target.value) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u6307\u5BFC LLM \u5982\u4F55\u626E\u6F14 DM\u3002\u5305\u62EC\u4E16\u754C\u89C4\u5219\u3001\u8BED\u6C14\u98CE\u683C\u3001\u53D9\u4E8B\u504F\u597D\u7B49\u3002" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { htmlFor: "world-knowledge", children: "\u4E16\u754C\u89C2\u8865\u5145\uFF08\u53EF\u9009\uFF09" }), e.jsx(P, { id: "world-knowledge", placeholder: "\u8865\u5145\u7684\u5730\u7406\u3001\u5386\u53F2\u3001\u9635\u8425\u3001NPC \u7B49\u4FE1\u606F...", className: "min-h-20", value: H, onChange: (s) => B(s.target.value) })] })] })] }), e.jsxs(w, { children: [e.jsxs(y, { children: [e.jsxs(D, { className: "flex items-center gap-2 text-lg", children: [e.jsx(L, { className: "w-5 h-5 text-primary" }), "\u5192\u9669\u89D2\u8272"] }), e.jsx(T, { children: "\u4ECE\u5DF2\u6709\u89D2\u8272\u4E2D\u9009\u62E9\u53C2\u4E0E\u5192\u9669\u7684\u89D2\u8272\uFF0C\u5E76\u914D\u7F6E DnD \u5C5E\u6027" })] }), e.jsxs(I, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { children: "\u6DFB\u52A0\u89D2\u8272" }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [S.filter((s) => !k.has(s.id)).map((s) => e.jsxs(p, { type: "button", variant: "outline", size: "sm", className: "gap-2", onClick: () => E(s), children: [e.jsx(re, { className: "w-3 h-3" }), s.name] }, s.id)), S.length === 0 && e.jsxs("p", { className: "text-sm text-muted-foreground py-2", children: ["\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148", e.jsx(p, { type: "button", variant: "link", className: "px-1 h-auto", onClick: () => a({ to: "/create/character" }), children: "\u521B\u5EFA\u89D2\u8272" })] })] })] }), i.length > 0 && e.jsxs("div", { className: "space-y-4", children: [e.jsx(c, { children: "\u5DF2\u9009\u89D2\u8272\u914D\u7F6E" }), i.map((s) => e.jsx(pe, { config: s, onUpdate: (l) => z(s.characterId, l), onUpdateAttribute: (l, t) => U(s.characterId, l, t), onRemove: () => F(s.characterId) }, s.characterId))] }), i.length === 0 && e.jsxs("div", { className: "text-center py-10 border border-dashed rounded-xl", children: [e.jsx(L, { className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u4ECE\u4E0A\u65B9\u9009\u62E9\u89D2\u8272\u52A0\u5165\u5192\u9669" })] })] })] }), e.jsxs(w, { children: [e.jsx(y, { children: e.jsxs(D, { className: "flex items-center gap-2 text-lg", children: [e.jsx(le, { className: "w-5 h-5 text-primary" }), "\u6E38\u620F\u8BBE\u7F6E"] }) }), e.jsx(I, { className: "space-y-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { children: "\u6E38\u620F\u6A21\u5F0F" }), e.jsxs(X, { value: b, onValueChange: (s) => R(s), children: [e.jsx(O, { className: "w-full md:w-80", children: e.jsx(Y, {}) }), e.jsxs(Z, { children: [e.jsx(v, { value: "standard", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(f, { className: "w-4 h-4" }), "\u6807\u51C6\u6A21\u5F0F \u2014 \u5B8C\u6574\u68C0\u5B9A\u6D41\u7A0B"] }) }), e.jsx(v, { value: "narrative", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(f, { className: "w-4 h-4" }), "\u53D9\u4E8B\u6A21\u5F0F \u2014 DM \u53EF\u8DF3\u8FC7\u68C0\u5B9A"] }) }), e.jsx(v, { value: "hardcore", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(f, { className: "w-4 h-4" }), "\u786C\u6838\u6A21\u5F0F \u2014 \u4E25\u683C\u89C4\u5219\uFF0C\u9AD8 DC"] }) }), e.jsx(v, { value: "solo", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(f, { className: "w-4 h-4" }), "\u72EC\u594F\u6A21\u5F0F \u2014 \u5168 AI \u81EA\u52A8\u8FD0\u884C"] }) })] })] })] }) })] }), e.jsxs("div", { className: "flex justify-end gap-4", children: [e.jsx(p, { type: "button", variant: "outline", onClick: () => a({ to: "/plaza/characters" }), children: "\u53D6\u6D88" }), e.jsxs(p, { type: "button", size: "lg", className: "gap-2 px-8", onClick: _, disabled: !d.trim() || !o.trim() || i.length === 0, children: [e.jsx(ne, { className: "w-5 h-5" }), "\u5F00\u59CB\u5192\u9669"] })] })] });
}, ue = ["\u529B\u91CF", "\u654F\u6377", "\u4F53\u8D28", "\u667A\u529B", "\u611F\u77E5", "\u9B45\u529B"], pe = ({ config: a, onUpdate: d, onUpdateAttribute: C, onRemove: g }) => e.jsxs("div", { className: A("p-4 rounded-xl border relative group transition-colors", a.isHumanControlled ? "border-blue-500/30 bg-blue-500/5" : "border-muted/50 bg-muted/10"), children: [e.jsx(p, { type: "button", variant: "ghost", size: "icon", className: "absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: g, children: e.jsx(ce, { className: "w-4 h-4 text-muted-foreground" }) }), e.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [e.jsx("div", { className: A("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", a.isHumanControlled ? "bg-blue-500/20" : "bg-muted"), children: a.isHumanControlled ? e.jsx(de, { className: "w-5 h-5 text-blue-500" }) : e.jsx(oe, { className: "w-5 h-5 text-muted-foreground" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "font-bold", children: a.name }), e.jsx(J, { variant: "outline", className: "text-[9px]", children: a.isHumanControlled ? "\u73A9\u5BB6\u63A7\u5236" : "AI \u63A7\u5236" })] }), e.jsx("p", { className: "text-xs text-muted-foreground truncate", children: a.description })] })] }), e.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-4", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(c, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "\u79CD\u65CF" }), e.jsx(j, { value: a.race, onChange: (r) => d({ race: r.target.value }), className: "h-8 text-sm", placeholder: "\u4EBA\u7C7B" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(c, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "\u804C\u4E1A" }), e.jsx(j, { value: a.class, onChange: (r) => d({ class: r.target.value }), className: "h-8 text-sm", placeholder: "\u6218\u58EB" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(c, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "HP" }), e.jsx(j, { type: "number", value: a.maxHP, onChange: (r) => {
  const o = Number(r.target.value) || 20;
  d({ maxHP: o, currentHP: o });
}, className: "h-8 text-sm", min: 1 })] }), e.jsx("div", { className: "flex items-end pb-1", children: e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [e.jsx(Q, { checked: a.isHumanControlled, onCheckedChange: (r) => d({ isHumanControlled: !!r }) }), e.jsx("span", { className: "text-xs font-medium", children: "\u73A9\u5BB6\u63A7\u5236" })] }) })] }), e.jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-2", children: ue.map((r) => e.jsxs("div", { className: "space-y-1", children: [e.jsx(c, { className: "text-[9px] uppercase tracking-wider text-muted-foreground text-center block", children: r }), e.jsx(j, { type: "number", value: a.attributes[r], onChange: (o) => C(r, Number(o.target.value) || 10), className: "h-8 text-sm text-center font-mono", min: 1, max: 30 })] }, r)) })] });
function Ue() {
  return e.jsx(ie, { requiredFeature: "dnd", children: e.jsx("div", { className: "p-6 relative", children: e.jsx(he, {}) }) });
}
export {
  Ue as component
};
