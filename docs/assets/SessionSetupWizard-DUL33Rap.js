import { j as e, ay as S, az as z, aA as P, aB as L, aC as D, aD as M, aE as I, aF as R, aG as T, aH as F, r as c, u as A } from "./react-gFHNOnf5.js";
import { c as x } from "./shadcn-utils-BMZD7_jZ.js";
import { D as O, a as _, b as $, c as B, d as E, e as G } from "./dialog-CPE3M3ew.js";
import { B as j } from "./button-D3G-RLOw.js";
import { L as H } from "./LLMReadinessStep-CF-JJ3hR.js";
import { I as W } from "./input-KwncZLGm.js";
import { L as v } from "./label-BU_LC6Ti.js";
import { T as U } from "./textarea-DqdRyzs9.js";
import { G as q, I as J, d as K, s as Q, an as V, D as X, E as Y, A as Z, a4 as ee, a1 as te } from "./icons-CW-0NDo_.js";
import { B as h } from "./badge-C9CmQsZA.js";
import { c as se } from "./llm-readiness-DRaLeVb_.js";
import { C as ae } from "./CharacterAvatar-TKrkqhhW.js";
function ye({ ...t }) {
  return e.jsx(S, { "data-slot": "dropdown-menu", ...t });
}
function we({ ...t }) {
  return e.jsx(z, { "data-slot": "dropdown-menu-trigger", ...t });
}
function Ce({ className: t, sideOffset: s = 4, ...a }) {
  return e.jsx(P, { children: e.jsx(L, { "data-slot": "dropdown-menu-content", sideOffset: s, className: x("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", t), ...a }) });
}
function ke({ className: t, inset: s, variant: a = "default", ...d }) {
  return e.jsx(I, { "data-slot": "dropdown-menu-item", "data-inset": s, "data-variant": a, className: x("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t), ...d });
}
function Se({ className: t, inset: s, ...a }) {
  return e.jsx(D, { "data-slot": "dropdown-menu-label", "data-inset": s, className: x("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t), ...a });
}
function ze({ className: t, ...s }) {
  return e.jsx(M, { "data-slot": "dropdown-menu-separator", className: x("bg-border -mx-1 my-1 h-px", t), ...s });
}
function re({ ...t }) {
  return e.jsx(R, { "data-slot": "collapsible", ...t });
}
function ne({ ...t }) {
  return e.jsx(T, { "data-slot": "collapsible-trigger", ...t });
}
function oe({ ...t }) {
  return e.jsx(F, { "data-slot": "collapsible-content", ...t });
}
function p() {
  return { userName: "User", globalSystemPrompt: "" };
}
const de = ({ config: t, onChange: s, character: a }) => {
  var _a;
  const d = c.useId(), i = c.useId(), n = !!((_a = a.system_prompt) == null ? void 0 : _a.trim());
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h3", { className: "text-lg font-bold flex items-center gap-2", children: [e.jsx(q, { className: "w-5 h-5 text-primary" }), "\u804A\u5929\u4F1A\u8BDD\u914D\u7F6E"] }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u914D\u7F6E\u672C\u6B21\u4E0E ", e.jsx("span", { className: "font-medium text-foreground", children: a.name }), " \u7684\u804A\u5929\u4F1A\u8BDD\u53C2\u6570\u3002"] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(v, { htmlFor: d, className: "text-sm font-medium", children: "\u4F60\u7684\u540D\u79F0" }), e.jsx(W, { id: d, value: t.userName, onChange: (o) => s({ ...t, userName: o.target.value }), placeholder: "\u8F93\u5165\u4F60\u5728\u5BF9\u8BDD\u4E2D\u7684\u540D\u79F0...", className: "max-w-xs" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u89D2\u8272\u5728\u5BF9\u8BDD\u4E2D\u5982\u4F55\u79F0\u547C\u4F60\u3002" })] }), n && e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-muted", children: [e.jsx(J, { className: "w-4 h-4 text-muted-foreground shrink-0 mt-0.5" }), e.jsxs("div", { className: "text-xs text-muted-foreground space-y-1", children: [e.jsx("p", { className: "font-medium", children: "\u8BE5\u89D2\u8272\u81EA\u5E26\u7CFB\u7EDF\u63D0\u793A\u8BCD" }), e.jsx("p", { className: "line-clamp-2 italic", children: a.system_prompt })] })] }), e.jsxs(re, { children: [e.jsxs(ne, { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group w-full", children: [e.jsx(K, { className: "w-4 h-4 transition-transform group-data-[state=open]:rotate-180" }), "\u9AD8\u7EA7\u914D\u7F6E"] }), e.jsx(oe, { className: "pt-4 space-y-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(v, { htmlFor: i, className: "text-sm font-medium", children: "\u9644\u52A0\u7CFB\u7EDF\u63D0\u793A\u8BCD" }), e.jsx(U, { id: i, value: t.globalSystemPrompt, onChange: (o) => s({ ...t, globalSystemPrompt: o.target.value }), placeholder: "\u8F93\u5165\u989D\u5916\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u5C06\u8FFD\u52A0\u5230\u89D2\u8272\u5361\u81EA\u5E26\u7684\u63D0\u793A\u8BCD\u4E4B\u540E...", className: "min-h-24 resize-y" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u53EF\u9009\u3002\u7528\u4E8E\u6DFB\u52A0\u989D\u5916\u7684\u89C4\u5219\u6216\u9650\u5236\uFF0C\u5982\u300C\u8BF7\u4F7F\u7528\u4E2D\u6587\u56DE\u590D\u300D\u3002" })] }) })] })] });
}, ie = ({ challenge: t, character: s }) => {
  const a = t.variables || {}, d = t.goals || [], i = t.failureChecks || [];
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h3", { className: "text-lg font-bold flex items-center gap-2", children: [e.jsx(Q, { className: "w-5 h-5 text-amber-500" }), "\u6311\u6218\u89C4\u5219\u9884\u89C8"] }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u4EE5\u89D2\u8272 ", e.jsx("span", { className: "font-medium text-foreground", children: s.name }), " \u53C2\u4E0E\u6311\u6218 \u300C", e.jsx("span", { className: "font-medium text-foreground", children: t.name }), "\u300D\u3002"] })] }), t.userGuidance && e.jsxs("div", { className: "p-4 rounded-xl bg-muted/50 border border-muted italic text-sm text-muted-foreground leading-relaxed", children: ['"', t.userGuidance, '"'] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(V, { className: "w-4 h-4 text-primary" }), "\u4E16\u754C\u53D8\u91CF", e.jsxs(h, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [Object.keys(a).length, " \u4E2A"] })] }), Object.keys(a).length > 0 ? e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: Object.entries(a).map(([n, o]) => e.jsxs("div", { className: x("p-3 rounded-xl border bg-background/60 space-y-1", o.hidden && "opacity-50"), children: [e.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase truncate", children: n }), e.jsx("div", { className: "text-base font-mono font-bold truncate", children: String(o.initial) }), e.jsxs("div", { className: "text-[10px] text-muted-foreground/60 truncate", children: [o.type, " ", o.hidden ? "(\u9690\u85CF)" : ""] })] }, n)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u4E16\u754C\u53D8\u91CF" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(X, { className: "w-4 h-4 text-primary" }), "\u751F\u5B58\u76EE\u6807", e.jsxs(h, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [d.length, " \u4E2A"] })] }), d.length > 0 ? e.jsx("div", { className: "space-y-2", children: d.map((n) => e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl border bg-background/60", children: [e.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-primary/30 shrink-0 mt-0.5" }), e.jsx("div", { className: "text-sm", children: n.description })] }, n.key)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u8BBE\u5B9A\u76EE\u6807" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(Y, { className: "w-4 h-4 text-destructive" }), "\u6B7B\u4EA1\u7981\u5FCC", e.jsxs(h, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [i.length, " \u4E2A"] })] }), i.length > 0 ? e.jsx("div", { className: "space-y-2", children: i.map((n) => e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl border border-destructive/10 bg-destructive/5", children: [e.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-destructive/30 shrink-0 mt-0.5" }), e.jsx("div", { className: "text-sm", children: n.description })] }, n.key)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u5931\u8D25\u6761\u4EF6" })] })] });
};
function le(t) {
  return t === "chat" ? [{ key: "llm-check", title: "LLM \u68C0\u6D4B", description: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA" }, { key: "chat-config", title: "\u4F1A\u8BDD\u914D\u7F6E", description: "\u914D\u7F6E\u672C\u6B21\u804A\u5929\u4F1A\u8BDD\u7684\u53C2\u6570" }] : [{ key: "llm-check", title: "LLM \u68C0\u6D4B", description: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA" }, { key: "challenge-preview", title: "\u89C4\u5219\u9884\u89C8", description: "\u9884\u89C8\u5E76\u786E\u8BA4\u6311\u6218\u89C4\u5219" }];
}
const Pe = (t) => {
  const [s, a] = c.useState(0), [d, i] = c.useState(p), [n, o] = c.useState(false), u = le(t.wizardProps.mode), l = u[s], g = s === u.length - 1, N = s === 0, b = (l == null ? void 0 : l.key) === "llm-check" ? "sm:max-w-4xl" : "sm:max-w-lg", y = c.useCallback((r) => {
    o(r);
  }, []), w = () => {
    if ((l == null ? void 0 : l.key) === "llm-check") {
      const r = se();
      if (o(r.isReady), !r.isReady) {
        A.error("\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E\u540E\u518D\u7EE7\u7EED");
        return;
      }
    }
    g ? (t.wizardProps.mode === "chat" ? t.wizardProps.onConfirm(d) : t.wizardProps.onConfirm(), t.onOpenChange(false), a(0), i(p())) : a((r) => r + 1);
  }, C = () => {
    a((r) => Math.max(r - 1, 0));
  }, k = (r) => {
    r || (a(0), i(p()), o(false)), t.onOpenChange(r);
  }, f = t.wizardProps.mode === "chat" ? "\u804A\u5929\u4F1A\u8BDD" : "\u6311\u6218\u4F1A\u8BDD";
  return e.jsx(O, { open: t.open, onOpenChange: k, children: e.jsxs(_, { className: `${b} max-h-[85vh] overflow-y-auto`, children: [e.jsx($, { children: e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx(ae, { character: t.wizardProps.character, size: "sm" }), e.jsxs("div", { className: "flex flex-col text-left", children: [e.jsxs(B, { className: "flex items-center gap-2", children: ["\u5F00\u59CB", f] }), e.jsxs(E, { children: ["\u4E0E ", t.wizardProps.character.name, " ", t.wizardProps.mode === "challenge" ? `\u5728\u6311\u6218\u300C${t.wizardProps.challenge.name}\u300D\u4E2D` : "", "\u521B\u5EFA\u65B0\u4F1A\u8BDD"] })] })] }) }), e.jsx("div", { className: "flex items-center gap-2 py-2", children: u.map((r, m) => e.jsxs("div", { className: "flex items-center gap-2", children: [m > 0 && e.jsx("div", { className: "h-px w-6 bg-muted-foreground/20" }), e.jsx("div", { className: `
                  w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-colors
                  ${m < s ? "bg-primary text-primary-foreground" : m === s ? "bg-primary/20 text-primary border-2 border-primary" : "bg-muted text-muted-foreground"}
                `, children: m + 1 }), e.jsx("span", { className: `text-xs font-medium hidden sm:inline ${m === s ? "text-foreground" : "text-muted-foreground"}`, children: r.title })] }, r.key)) }), e.jsxs("div", { className: "py-2 min-h-48", children: [(l == null ? void 0 : l.key) === "llm-check" && e.jsx(H, { onStatusChange: y }), (l == null ? void 0 : l.key) === "chat-config" && t.wizardProps.mode === "chat" && e.jsx(de, { config: d, onChange: i, character: t.wizardProps.character }), (l == null ? void 0 : l.key) === "challenge-preview" && t.wizardProps.mode === "challenge" && e.jsx(ie, { challenge: t.wizardProps.challenge, character: t.wizardProps.character })] }), e.jsxs(G, { className: "flex-row justify-between sm:justify-between gap-2", children: [e.jsxs(j, { type: "button", variant: "outline", disabled: N, onClick: C, className: "gap-1.5", children: [e.jsx(Z, { className: "w-4 h-4" }), "\u4E0A\u4E00\u6B65"] }), e.jsx(j, { type: "button", onClick: w, disabled: (l == null ? void 0 : l.key) === "llm-check" && !n, className: "gap-1.5", children: g ? e.jsxs(e.Fragment, { children: [e.jsx(ee, { className: "w-4 h-4" }), "\u5F00\u59CB", f] }) : e.jsxs(e.Fragment, { children: ["\u4E0B\u4E00\u6B65", e.jsx(te, { className: "w-4 h-4" })] }) })] })] }) });
};
export {
  ye as D,
  Pe as S,
  we as a,
  Ce as b,
  Se as c,
  ze as d,
  ke as e
};
