import { j as e, a4 as M, a5 as D, a6 as I, a7 as R, a8 as T, a9 as A, aa as F, r as m, ab as _, ac as B, ad as E } from "./react-BQpw03Eg.js";
import { c as x } from "./shadcn-utils-BMZD7_jZ.js";
import { D as O, a as $, b as G, c as K, d as U, e as q } from "./dialog-ClhHrx6A.js";
import { B as h } from "./button-B9brLUSp.js";
import { f as H } from "./@tanstack-B4B5CfFY.js";
import { c as N } from "./llm-readiness-DgR8F2ee.js";
import { ah as P, C as v, E as W, ai as y, af as X, I as J, h as Q, m as V, aj as Y, q as Z, ae as z, A as ee, y as se } from "./icons-BC63ChG4.js";
import { I as te } from "./input-C44X3vA9.js";
import { L as b } from "./label-DMtPOVS-.js";
import { T as ae } from "./textarea-D6rL78Aw.js";
import { B as g } from "./badge-DvaSwOwN.js";
function ye({ ...s }) {
  return e.jsx(M, { "data-slot": "dropdown-menu", ...s });
}
function ke({ ...s }) {
  return e.jsx(D, { "data-slot": "dropdown-menu-trigger", ...s });
}
function we({ className: s, sideOffset: n = 4, ...t }) {
  return e.jsx(I, { children: e.jsx(R, { "data-slot": "dropdown-menu-content", sideOffset: n, className: x("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", s), ...t }) });
}
function Ce({ className: s, inset: n, variant: t = "default", ...r }) {
  return e.jsx(F, { "data-slot": "dropdown-menu-item", "data-inset": n, "data-variant": t, className: x("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", s), ...r });
}
function Se({ className: s, inset: n, ...t }) {
  return e.jsx(T, { "data-slot": "dropdown-menu-label", "data-inset": n, className: x("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", s), ...t });
}
function Le({ className: s, ...n }) {
  return e.jsx(A, { "data-slot": "dropdown-menu-separator", className: x("bg-border -mx-1 my-1 h-px", s), ...n });
}
const re = ({ onReady: s }) => {
  const n = H(), [t, r] = m.useState(null);
  if (m.useEffect(() => {
    const a = N();
    if (r(a), a.isReady) {
      const o = setTimeout(() => s(), 600);
      return () => clearTimeout(o);
    }
  }, [s]), !t) return null;
  const l = [{ key: "baseUrl", label: "API \u5730\u5740" }, { key: "apiKey", label: "API \u5BC6\u94A5" }, { key: "model", label: "\u6A21\u578B\u9009\u62E9" }], i = new Set(t.missingItems.map((a) => a.key));
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx("h3", { className: "text-lg font-bold", children: "LLM \u914D\u7F6E\u68C0\u6D4B" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA\uFF0C\u786E\u4FDD\u4F1A\u8BDD\u53EF\u4EE5\u6B63\u5E38\u8FDB\u884C\u3002" })] }), e.jsx("div", { className: "space-y-3", children: l.map((a) => {
    const o = i.has(a.key), c = t.missingItems.find((p) => p.key === a.key);
    return e.jsxs("div", { className: x("flex items-center gap-3 p-3 rounded-xl border transition-colors", o ? "border-destructive/30 bg-destructive/5" : "border-primary/20 bg-primary/5"), children: [o ? e.jsx(P, { className: "w-5 h-5 text-destructive shrink-0" }) : e.jsx(v, { className: "w-5 h-5 text-primary shrink-0" }), e.jsxs("div", { className: "flex-1 min-w-0", children: [e.jsx("div", { className: x("text-sm font-medium", o ? "text-destructive" : "text-foreground"), children: a.label }), o && c && e.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: c.description })] })] }, a.key);
  }) }), t.isReady ? e.jsxs("div", { className: "flex items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/20", children: [e.jsx(v, { className: "w-5 h-5 text-primary shrink-0" }), e.jsx("span", { className: "text-sm font-medium text-primary", children: "\u6240\u6709\u914D\u7F6E\u5DF2\u5C31\u7EEA\uFF0C\u6B63\u5728\u8FDB\u5165\u4E0B\u4E00\u6B65..." })] }) : e.jsxs("div", { className: "flex flex-col gap-3", children: [e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E\u540E\u518D\u5F00\u59CB\u4F1A\u8BDD\u3002" }), e.jsxs("div", { className: "flex gap-3", children: [e.jsxs(h, { type: "button", variant: "default", className: "gap-2", onClick: () => n({ to: "/config/llm" }), children: [e.jsx(W, { className: "w-4 h-4" }), "\u524D\u5F80 LLM \u914D\u7F6E"] }), e.jsxs(h, { type: "button", variant: "outline", className: "gap-2", onClick: () => {
    const a = N();
    r(a), a.isReady && s();
  }, children: [e.jsx(y, { className: "w-4 h-4" }), "\u91CD\u65B0\u68C0\u6D4B"] })] })] })] });
};
function ne({ ...s }) {
  return e.jsx(_, { "data-slot": "collapsible", ...s });
}
function ie({ ...s }) {
  return e.jsx(B, { "data-slot": "collapsible-trigger", ...s });
}
function le({ ...s }) {
  return e.jsx(E, { "data-slot": "collapsible-content", ...s });
}
function f() {
  return { userName: "User", globalSystemPrompt: "" };
}
const oe = ({ config: s, onChange: n, character: t }) => {
  var _a;
  const r = m.useId(), l = m.useId(), i = !!((_a = t.system_prompt) == null ? void 0 : _a.trim());
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h3", { className: "text-lg font-bold flex items-center gap-2", children: [e.jsx(X, { className: "w-5 h-5 text-primary" }), "\u804A\u5929\u4F1A\u8BDD\u914D\u7F6E"] }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u914D\u7F6E\u672C\u6B21\u4E0E ", e.jsx("span", { className: "font-medium text-foreground", children: t.name }), " \u7684\u804A\u5929\u4F1A\u8BDD\u53C2\u6570\u3002"] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(b, { htmlFor: r, className: "text-sm font-medium", children: "\u4F60\u7684\u540D\u79F0" }), e.jsx(te, { id: r, value: s.userName, onChange: (a) => n({ ...s, userName: a.target.value }), placeholder: "\u8F93\u5165\u4F60\u5728\u5BF9\u8BDD\u4E2D\u7684\u540D\u79F0...", className: "max-w-xs" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u89D2\u8272\u5728\u5BF9\u8BDD\u4E2D\u5982\u4F55\u79F0\u547C\u4F60\u3002" })] }), i && e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-muted", children: [e.jsx(J, { className: "w-4 h-4 text-muted-foreground shrink-0 mt-0.5" }), e.jsxs("div", { className: "text-xs text-muted-foreground space-y-1", children: [e.jsx("p", { className: "font-medium", children: "\u8BE5\u89D2\u8272\u81EA\u5E26\u7CFB\u7EDF\u63D0\u793A\u8BCD" }), e.jsx("p", { className: "line-clamp-2 italic", children: t.system_prompt })] })] }), e.jsxs(ne, { children: [e.jsxs(ie, { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group w-full", children: [e.jsx(Q, { className: "w-4 h-4 transition-transform group-data-[state=open]:rotate-180" }), "\u9AD8\u7EA7\u914D\u7F6E"] }), e.jsx(le, { className: "pt-4 space-y-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(b, { htmlFor: l, className: "text-sm font-medium", children: "\u9644\u52A0\u7CFB\u7EDF\u63D0\u793A\u8BCD" }), e.jsx(ae, { id: l, value: s.globalSystemPrompt, onChange: (a) => n({ ...s, globalSystemPrompt: a.target.value }), placeholder: "\u8F93\u5165\u989D\u5916\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u5C06\u8FFD\u52A0\u5230\u89D2\u8272\u5361\u81EA\u5E26\u7684\u63D0\u793A\u8BCD\u4E4B\u540E...", className: "min-h-24 resize-y" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u53EF\u9009\u3002\u7528\u4E8E\u6DFB\u52A0\u989D\u5916\u7684\u89C4\u5219\u6216\u9650\u5236\uFF0C\u5982\u300C\u8BF7\u4F7F\u7528\u4E2D\u6587\u56DE\u590D\u300D\u3002" })] }) })] })] });
}, de = ({ challenge: s, character: n }) => {
  const t = s.variables || {}, r = s.goals || [], l = s.failureChecks || [];
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h3", { className: "text-lg font-bold flex items-center gap-2", children: [e.jsx(V, { className: "w-5 h-5 text-amber-500" }), "\u6311\u6218\u89C4\u5219\u9884\u89C8"] }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u4EE5\u89D2\u8272 ", e.jsx("span", { className: "font-medium text-foreground", children: n.name }), " \u53C2\u4E0E\u6311\u6218 \u300C", e.jsx("span", { className: "font-medium text-foreground", children: s.name }), "\u300D\u3002"] })] }), s.userGuidance && e.jsxs("div", { className: "p-4 rounded-xl bg-muted/50 border border-muted italic text-sm text-muted-foreground leading-relaxed", children: ['"', s.userGuidance, '"'] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(Y, { className: "w-4 h-4 text-primary" }), "\u4E16\u754C\u53D8\u91CF", e.jsxs(g, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [Object.keys(t).length, " \u4E2A"] })] }), Object.keys(t).length > 0 ? e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: Object.entries(t).map(([i, a]) => e.jsxs("div", { className: x("p-3 rounded-xl border bg-background/60 space-y-1", a.hidden && "opacity-50"), children: [e.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase truncate", children: i }), e.jsx("div", { className: "text-base font-mono font-bold truncate", children: String(a.initial) }), e.jsxs("div", { className: "text-[10px] text-muted-foreground/60 truncate", children: [a.type, " ", a.hidden ? "(\u9690\u85CF)" : ""] })] }, i)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u4E16\u754C\u53D8\u91CF" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(Z, { className: "w-4 h-4 text-primary" }), "\u751F\u5B58\u76EE\u6807", e.jsxs(g, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [r.length, " \u4E2A"] })] }), r.length > 0 ? e.jsx("div", { className: "space-y-2", children: r.map((i) => e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl border bg-background/60", children: [e.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-primary/30 shrink-0 mt-0.5" }), e.jsx("div", { className: "text-sm", children: i.description })] }, i.key)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u8BBE\u5B9A\u76EE\u6807" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(z, { className: "w-4 h-4 text-destructive" }), "\u6B7B\u4EA1\u7981\u5FCC", e.jsxs(g, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [l.length, " \u4E2A"] })] }), l.length > 0 ? e.jsx("div", { className: "space-y-2", children: l.map((i) => e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl border border-destructive/10 bg-destructive/5", children: [e.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-destructive/30 shrink-0 mt-0.5" }), e.jsx("div", { className: "text-sm", children: i.description })] }, i.key)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u5931\u8D25\u6761\u4EF6" })] })] });
};
function ce(s) {
  return s === "chat" ? [{ key: "llm-check", title: "LLM \u68C0\u6D4B", description: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA" }, { key: "chat-config", title: "\u4F1A\u8BDD\u914D\u7F6E", description: "\u914D\u7F6E\u672C\u6B21\u804A\u5929\u4F1A\u8BDD\u7684\u53C2\u6570" }] : [{ key: "llm-check", title: "LLM \u68C0\u6D4B", description: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA" }, { key: "challenge-preview", title: "\u89C4\u5219\u9884\u89C8", description: "\u9884\u89C8\u5E76\u786E\u8BA4\u6311\u6218\u89C4\u5219" }];
}
const Me = ({ open: s, onOpenChange: n, wizardProps: t }) => {
  const [r, l] = m.useState(0), [i, a] = m.useState(f), o = ce(t.mode), c = o[r], p = r === o.length - 1, k = r === 0, w = m.useCallback(() => {
    l((d) => Math.min(d + 1, o.length - 1));
  }, [o.length]), C = () => {
    p ? (t.mode === "chat" ? t.onConfirm(i) : t.onConfirm(), n(false), l(0), a(f())) : l((d) => d + 1);
  }, S = () => {
    l((d) => Math.max(d - 1, 0));
  }, L = (d) => {
    d || (l(0), a(f())), n(d);
  }, j = t.mode === "chat" ? "\u804A\u5929\u4F1A\u8BDD" : "\u6311\u6218\u4F1A\u8BDD";
  return e.jsx(O, { open: s, onOpenChange: L, children: e.jsxs($, { className: "sm:max-w-lg max-h-[85vh] overflow-y-auto", children: [e.jsxs(G, { children: [e.jsxs(K, { className: "flex items-center gap-2", children: ["\u5F00\u59CB", j] }), e.jsx(U, { children: c == null ? void 0 : c.description })] }), e.jsx("div", { className: "flex items-center gap-2 py-2", children: o.map((d, u) => e.jsxs("div", { className: "flex items-center gap-2", children: [u > 0 && e.jsx("div", { className: "h-px w-6 bg-muted-foreground/20" }), e.jsx("div", { className: `
                  w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-colors
                  ${u < r ? "bg-primary text-primary-foreground" : u === r ? "bg-primary/20 text-primary border-2 border-primary" : "bg-muted text-muted-foreground"}
                `, children: u + 1 }), e.jsx("span", { className: `text-xs font-medium hidden sm:inline ${u === r ? "text-foreground" : "text-muted-foreground"}`, children: d.title })] }, d.key)) }), e.jsxs("div", { className: "py-2 min-h-48", children: [(c == null ? void 0 : c.key) === "llm-check" && e.jsx(re, { onReady: w }), (c == null ? void 0 : c.key) === "chat-config" && t.mode === "chat" && e.jsx(oe, { config: i, onChange: a, character: t.character }), (c == null ? void 0 : c.key) === "challenge-preview" && t.mode === "challenge" && e.jsx(de, { challenge: t.challenge, character: t.character })] }), e.jsxs(q, { className: "flex-row justify-between sm:justify-between gap-2", children: [e.jsxs(h, { type: "button", variant: "outline", disabled: k, onClick: S, className: "gap-1.5", children: [e.jsx(ee, { className: "w-4 h-4" }), "\u4E0A\u4E00\u6B65"] }), e.jsx(h, { type: "button", onClick: C, disabled: (c == null ? void 0 : c.key) === "llm-check", className: "gap-1.5", children: p ? e.jsxs(e.Fragment, { children: [e.jsx(se, { className: "w-4 h-4" }), "\u5F00\u59CB", j] }) : e.jsxs(e.Fragment, { children: ["\u4E0B\u4E00\u6B65", e.jsx(y, { className: "w-4 h-4" })] }) })] })] }) });
};
export {
  ye as D,
  Me as S,
  ke as a,
  we as b,
  Se as c,
  Le as d,
  Ce as e
};
