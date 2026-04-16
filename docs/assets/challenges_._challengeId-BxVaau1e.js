import { j as e, r as v, u as h } from "./react-gFHNOnf5.js";
import { f as W, i as b } from "./@tanstack-DDpiKjUN.js";
import { d as Q, S as V, C as _, m as L } from "./db-master-DI3V0061.js";
import { B as c } from "./button-D3G-RLOw.js";
import { B as o } from "./badge-C9CmQsZA.js";
import { C as p, a as u, b as g, c as C, d as j } from "./card-B4CxGEM-.js";
import { D as q, ao as K, a0 as X, Q as Y, U as Z, w, a2 as ee, J as O, ak as se, am as ae, j as te, s as re } from "./icons-CW-0NDo_.js";
import { C as le } from "./CharacterAvatar-TKrkqhhW.js";
import { D as ie, a as ne, b as ce, e as y, S as de } from "./SessionSetupWizard-DUL33Rap.js";
import { T as oe, a as me, b as M, c as P } from "./tabs-DYyOSGrZ.js";
import { n as xe } from "./id-OxPLOBIU.js";
import { A as he, a as pe, b as ue, c as ge, d as je, e as fe, f as Ne, g as ve, h as be } from "./alert-dialog-fySQUPs-.js";
import { D as ye, a as Ce, b as we, c as Se, d as De, e as ke } from "./dialog-CPE3M3ew.js";
import { d as Te } from "./index-7c6pKJ8J.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./zod-DPWJ_A9_.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./LLMReadinessStep-CF-JJ3hR.js";
import "./tavern-llm-config-editor-COkgIsnx.js";
import "./label-BU_LC6Ti.js";
import "./select-BkM7Xz_F.js";
import "./checkbox-DcACMCG8.js";
import "./draft-field-DvA8Eubc.js";
import "./input-KwncZLGm.js";
import "./textarea-DqdRyzs9.js";
import "./global-llm-config.store-BYX0tcdb.js";
import "./es-toolkit-CstbrnlE.js";
import "./llm-readiness-DRaLeVb_.js";
const B = (l) => {
  const [t, ...r] = l;
  if (["and", "or", "all", "any", "some"].includes(t)) {
    const a = r[0], m = t === "and" || t === "all" ? " \u4E14 " : " \u6216 ";
    return `(${a.map(B).join(m)})`;
  }
  return t === "isTrue" || t === "isFalse" ? `${r[0]} \u4E3A ${t === "isTrue" ? "\u771F" : "\u5047"}` : `${r[0]} ${t} ${JSON.stringify(r[1])}`;
}, Ie = (l) => e.jsxs("div", { className: "space-y-6", children: [e.jsxs(p, { children: [e.jsxs(u, { children: [e.jsxs(g, { className: "text-lg flex items-center gap-2", children: [e.jsx(q, { className: "w-5 h-5 text-destructive" }), "\u6838\u5FC3\u4ECB\u7ECD"] }), e.jsx(C, { children: "\u6311\u6218\u80CC\u666F\u4E0E\u4E16\u754C\u89C2\u8BBE\u5B9A" })] }), e.jsx(j, { children: e.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap", children: l.challenge.description }) })] }), e.jsxs(p, { children: [e.jsxs(u, { children: [e.jsxs(g, { className: "text-lg flex items-center gap-2", children: [e.jsx(K, { className: "w-5 h-5 text-primary" }), "\u76EE\u6807\u6311\u6218 (Goals)"] }), e.jsx(C, { children: "\u5F53\u6240\u6709\u76EE\u6807\u8FBE\u6210\u65F6\uFF0C\u6311\u6218\u5373\u544A\u6210\u529F" })] }), e.jsx(j, { className: "space-y-4", children: l.challenge.goals.map((t, r) => e.jsxs("div", { className: "flex gap-4 p-4 rounded-lg bg-muted/40 border group hover:border-primary/50 transition-colors", children: [e.jsx("div", { className: "w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0", children: r + 1 }), e.jsxs("div", { className: "grow", children: [e.jsx("div", { className: "font-medium text-sm", children: t.description }), e.jsxs("div", { className: "text-[10px] text-muted-foreground mt-2 font-mono flex items-center gap-2", children: [e.jsx(o, { variant: "outline", className: "text-[9px] font-mono py-0 h-4 shrink-0", children: "Condition" }), e.jsx("span", { className: "truncate", children: B(t.condition) })] })] })] }, t.key)) })] }), e.jsxs(p, { children: [e.jsx(u, { children: e.jsxs(g, { className: "text-lg flex items-center gap-2", children: [e.jsx(X, { className: "w-5 h-5 text-secondary" }), "\u53D8\u91CF\u914D\u7F6E (Variables)"] }) }), e.jsx(j, { children: e.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: Object.entries(l.challenge.variables).map(([t, r]) => e.jsxs("div", { className: "p-3 rounded-md bg-muted/30 border flex justify-between items-center", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx("div", { className: "text-xs font-bold font-mono", children: t }), e.jsxs("div", { className: "text-[10px] text-muted-foreground", children: ["\u521D\u59CB\u503C: ", String(r.initial ?? "null")] })] }), e.jsx(o, { variant: "secondary", className: "text-[10px] capitalize", children: r.type })] }, t)) }) })] })] });
function E({ characters: l, selectedCharacterId: t, onSelectCharacter: r, title: a = "\u4EE5\u6B64\u5267\u672C\u5F00\u542F\u65B0\u6311\u6218", description: m = "\u8BF7\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u4F5C\u4E3A\u6311\u6218\u7684\u4E3B\u89D2" }) {
  return e.jsxs(p, { className: "border-primary/20 bg-primary/5", children: [e.jsxs(u, { children: [e.jsxs(g, { className: "flex items-center gap-2 text-lg", children: [e.jsx(Y, { className: "h-5 w-5 text-primary" }), a] }), e.jsx(C, { children: m })] }), e.jsx(j, { className: "space-y-3", children: l.length > 0 ? e.jsx("div", { className: "grid grid-cols-1 gap-2", children: l.map((i) => {
    const f = i.id === t;
    return e.jsxs(c, { type: "button", variant: f ? "default" : "outline", className: "h-auto w-full justify-start gap-4 px-4 py-3", onClick: () => r(i), children: [e.jsx(le, { character: i, size: "sm", className: "border-background/80" }), e.jsxs("div", { className: "min-w-0 flex-1 text-left", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs("span", { className: "truncate text-sm font-semibold", children: ["\u4F7F\u7528 ", i.name] }), f && e.jsx(o, { variant: "secondary", className: "h-5 px-2 text-[10px]", children: "\u5DF2\u9009" })] }), e.jsx("div", { className: "truncate text-[10px] text-muted-foreground", children: i.description })] }), e.jsx(Z, { className: "h-4 w-4 shrink-0 opacity-50" })] }, i.id);
  }) }) : e.jsx("div", { className: "rounded-lg border border-dashed px-4 py-6 text-center", children: e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u4E8E\u6311\u6218\u7684\u89D2\u8272\uFF0C\u8BF7\u5148\u53BB\u89D2\u8272\u5E7F\u573A\u5BFC\u5165\u6216\u521B\u5EFA\u89D2\u8272\u3002" }) }) })] });
}
const Ae = (l) => {
  const t = W();
  return e.jsxs("div", { className: "space-y-6", children: [e.jsx(E, { characters: l.characters, onSelectCharacter: (r) => l.onSelectCharacter(r.id) }), e.jsxs(p, { children: [e.jsx(u, { children: e.jsx(g, { className: "text-lg", children: "\u5DF2\u5B58\u6311\u6218\u8FDB\u5EA6" }) }), e.jsx(j, { className: "space-y-3", children: l.sessions.length > 0 ? l.sessions.map((r) => e.jsxs(c, { className: "w-full justify-between items-center h-auto py-4 px-5 border hover:bg-muted/50 transition-colors", variant: "ghost", onClick: () => t({ to: "/session/$sessionId", params: { sessionId: r.id } }), type: "button", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: e.jsx(w, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-left", children: [e.jsx("div", { className: "font-semibold", children: "\u7EE7\u7EED\u6311\u6218" }), e.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: ["\u6700\u540E\u6D3B\u8DC3: ", new Date(r.updatedAt).toLocaleString()] })] })] }), e.jsxs("div", { className: "flex flex-col items-end gap-1", children: [e.jsx(o, { variant: "outline", className: "text-[9px] h-5", children: "\u4EE5\u6B64\u5267\u672C\u8FDB\u53D1" }), e.jsx("span", { className: "text-[10px] text-muted-foreground italic", children: r.characterId ? `\u89D2\u8272 ID: ${r.characterId.slice(0, 8)}...` : "\u672A\u77E5\u89D2\u8272" })] })] }, r.id)) : e.jsx("div", { className: "text-center py-10 border rounded-lg border-dashed", children: e.jsx("p", { className: "text-muted-foreground text-sm", children: "\u8FD8\u6CA1\u6709\u57FA\u4E8E\u6B64\u5267\u672C\u7684\u6311\u6218\u8BB0\u5F55" }) }) })] })] });
};
function ms() {
  var _a;
  const { challengeId: l } = Te.useParams(), t = W(), { data: r = [] } = b((s) => s.from({ c: Q })), a = r.find((s) => s.id === l), { data: m = [] } = b((s) => s.from({ s: V })), { data: i = [] } = b((s) => s.from({ char: _ })), f = m.filter((s) => s.challengeId === l), [F, N] = v.useState(false), [G, S] = v.useState(false), [D, x] = v.useState(null);
  if (!a) return e.jsxs("div", { className: "p-20 text-center flex flex-col items-center gap-4", children: [e.jsx("p", { className: "text-muted-foreground", children: "\u6311\u6218\u4E0D\u5B58\u5728" }), e.jsx(c, { onClick: () => t({ to: "/plaza/challenges" }), variant: "outline", type: "button", children: "\u8FD4\u56DE\u5217\u8868" })] });
  const n = i.find((s) => s.id === D), H = () => {
    x(null), N(true);
  }, k = (s) => {
    N(s), s || x(null);
  }, T = (s) => {
    x(s), N(false), S(true);
  }, J = (s) => {
    S(s), s || x(null);
  }, I = n ? { mode: "challenge", character: n, challenge: a, onConfirm: async () => {
    if (!n) {
      h.error("\u8BF7\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u4F5C\u4E3A\u6311\u6218\u4E3B\u89D2");
      return;
    }
    try {
      const s = xe(), z = Date.now(), $ = {};
      for (const [d, U] of Object.entries(a.variables)) $[d] = { key: d, value: U.initial };
      const R = { id: s, title: `${a.name}`, contextId: null, mode: "challenge", modeConfig: { characterId: n.id, roleTaskPrompt: a.roleTaskPrompt, userGuidance: a.userGuidance, variables: a.variables, goals: a.goals, failureChecks: a.failureChecks }, modeState: { currentPhase: "dm_intro", currentUIState: "idle", variableStates: $, goalStates: a.goals.map((d) => ({ key: d.key, checkCount: 0, isMet: false })), failureStates: a.failureChecks.map((d) => ({ key: d.key, checkCount: 0, isMet: false })) }, characterId: n.id, challengeId: a.id, createdAt: z, updatedAt: z, isActive: true };
      await L.sessions.add(R), t({ to: "/session/$sessionId", params: { sessionId: s }, search: { mode: "challenge" } });
    } catch (s) {
      console.error("Failed to create challenge session:", s), h.error("\u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
  } } : null, A = () => {
    h.success(`\u6B63\u5728\u5BFC\u51FA\u6311\u6218 ${a.name}...`);
  };
  return e.jsxs("div", { className: "max-w-5xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500 relative", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs(c, { variant: "ghost", size: "sm", className: "mb-2 -ml-2 text-muted-foreground hover:bg-transparent", onClick: () => t({ to: "/plaza/challenges" }), type: "button", children: [e.jsx(ee, { className: "w-4 h-4 mr-1" }), " \u8FD4\u56DE\u6311\u6218\u5E7F\u573A"] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs(c, { variant: "outline", size: "sm", className: "hidden sm:flex gap-2 h-8 rounded-lg", onClick: A, type: "button", children: [e.jsx(O, { className: "w-4 h-4" }), "\u5BFC\u51FA\u6311\u6218"] }), e.jsxs(ie, { children: [e.jsx(ne, { asChild: true, children: e.jsx(c, { variant: "ghost", size: "icon", className: "h-8 w-8 rounded-full", type: "button", children: e.jsx(se, { className: "w-4 h-4" }) }) }), e.jsxs(ce, { align: "end", className: "w-48", children: [e.jsxs(y, { onClick: A, className: "sm:hidden", children: [e.jsx(O, { className: "mr-2 h-4 w-4" }), " \u5BFC\u51FA JSON"] }), e.jsxs(y, { children: [e.jsx(ae, { className: "mr-2 h-4 w-4" }), " \u5206\u4EAB\u6311\u6218"] }), e.jsxs(he, { children: [e.jsx(pe, { asChild: true, children: e.jsxs(y, { onSelect: (s) => s.preventDefault(), className: "text-destructive focus:bg-destructive/10 focus:text-destructive", children: [e.jsx(te, { className: "mr-2 h-4 w-4" }), " \u5220\u9664\u6311\u6218"] }) }), e.jsxs(ue, { children: [e.jsxs(ge, { children: [e.jsx(je, { children: "\u786E\u8BA4\u5220\u9664\u6311\u6218" }), e.jsxs(fe, { children: ["\u786E\u5B9A\u8981\u5220\u9664\u6311\u6218\u300C", a.name, "\u300D\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002"] })] }), e.jsxs(Ne, { children: [e.jsx(ve, { children: "\u53D6\u6D88" }), e.jsx(be, { className: "bg-destructive hover:bg-destructive/90", onClick: async () => {
    await L.challenges.delete(a.id), h.success("\u6311\u6218\u5DF2\u5220\u9664"), t({ to: "/plaza/challenges" });
  }, children: "\u786E\u8BA4\u5220\u9664" })] })] })] })] })] })] })] }), e.jsx("div", { className: "border-b pb-8", children: e.jsx("div", { className: "flex flex-col gap-6 md:flex-row md:items-start md:justify-between", children: e.jsxs("div", { className: "flex flex-col gap-6 md:flex-row md:items-start md:gap-8", children: [e.jsx("div", { className: "flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-3xl border-4 border-background bg-primary/10 shadow-xl", children: e.jsx(re, { className: "h-20 w-20 text-primary" }) }), e.jsxs("div", { className: "grow space-y-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(o, { variant: "outline", className: "border-primary/20 bg-primary/5 px-2 text-[10px] uppercase tracking-widest text-primary", children: "Challenge Scenario" }), e.jsx("h1", { className: "text-4xl font-extrabold tracking-tight", children: a.name })] }), e.jsx("div", { className: "flex flex-wrap gap-2", children: (_a = a.tags) == null ? void 0 : _a.map((s) => e.jsx(o, { variant: "secondary", className: "px-3 py-1 font-medium", children: s }, s)) }), e.jsxs("p", { className: "font-serif text-lg leading-relaxed italic text-muted-foreground", children: ['" ', a.description.slice(0, 150), '... "'] }), e.jsxs("div", { className: "pt-2", children: [e.jsxs(c, { type: "button", size: "lg", className: "h-12 w-full gap-2 px-6 text-base font-semibold shadow-lg shadow-primary/20 sm:w-auto", onClick: H, disabled: i.length === 0, children: [e.jsx(w, { className: "h-5 w-5" }), "\u5F00\u59CB\u6311\u6218"] }), i.length === 0 && e.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u89D2\u8272\uFF0C\u8BF7\u5148\u5BFC\u5165\u6216\u521B\u5EFA\u89D2\u8272\u3002" })] })] })] }) }) }), e.jsxs(oe, { defaultValue: "details", className: "w-full", children: [e.jsxs(me, { className: "w-full justify-start h-12 bg-muted/50 p-1 mb-6", children: [e.jsx(M, { value: "details", className: "px-8 h-10 data-[state=active]:shadow-sm", children: "\u6311\u6218\u8BE6\u60C5" }), e.jsx(M, { value: "sessions", className: "px-8 h-10 data-[state=active]:shadow-sm", children: "\u5173\u8054\u4F1A\u8BDD" })] }), e.jsx(P, { value: "details", className: "mt-0", children: e.jsx(Ie, { challenge: a }) }), e.jsx(P, { value: "sessions", className: "mt-0", children: e.jsx(Ae, { challengeId: a.id, sessions: f, characters: i, onSelectCharacter: T }) })] }), e.jsx(ye, { open: F, onOpenChange: k, children: e.jsxs(Ce, { className: "sm:max-w-4xl", children: [e.jsxs(we, { children: [e.jsx(Se, { children: "\u5F00\u59CB\u6311\u6218" }), e.jsx(De, { children: "\u5148\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u4F5C\u4E3A\u8FD9\u573A\u6311\u6218\u7684\u4E3B\u89D2\uFF0C\u968F\u540E\u4F1A\u8FDB\u5165 LLM \u68C0\u6D4B\u548C\u89C4\u5219\u9884\u89C8\u3002" })] }), e.jsxs("div", { className: "space-y-4", children: [e.jsx(E, { characters: i, selectedCharacterId: D, onSelectCharacter: (s) => x(s.id), title: "\u9009\u62E9\u6311\u6218\u4E3B\u89D2", description: "\u70B9\u51FB\u4E00\u4E2A\u89D2\u8272\u5373\u53EF\u9009\u4E2D\uFF0C\u7136\u540E\u8FDB\u5165 LLM \u68C0\u6D4B\u548C\u89C4\u5219\u9884\u89C8\u3002" }), e.jsx("div", { className: "rounded-lg border bg-muted/30 px-4 py-3 text-sm text-muted-foreground", children: n ? e.jsxs("span", { children: ["\u5DF2\u9009\u62E9\u300C", e.jsx("span", { className: "font-medium text-foreground", children: n.name }), "\u300D\u4F5C\u4E3A\u6311\u6218\u4E3B\u89D2\u3002"] }) : "\u8BF7\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u540E\u518D\u7EE7\u7EED\u3002" })] }), e.jsxs(ke, { className: "gap-2 sm:justify-between", children: [e.jsx(c, { type: "button", variant: "outline", onClick: () => k(false), children: "\u53D6\u6D88" }), e.jsxs(c, { type: "button", onClick: () => {
    if (!n) {
      h.error("\u8BF7\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u4F5C\u4E3A\u6311\u6218\u4E3B\u89D2");
      return;
    }
    T(n.id);
  }, disabled: !n, className: "gap-2", children: ["\u4E0B\u4E00\u6B65", e.jsx(w, { className: "h-4 w-4" })] })] })] }) }), I && e.jsx(de, { open: G, onOpenChange: J, wizardProps: I })] });
}
export {
  ms as component
};
