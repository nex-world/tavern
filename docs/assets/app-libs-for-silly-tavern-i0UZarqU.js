var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as b, j as e, ax as xe, ay as $a, t as U, az as le, aA as ke, aB as $s } from "./react-BkMll9ak.js";
import { B as _, X as D, f as O, a5 as Ua, a6 as Ra, a7 as Fa, Y as K, d as H, D as At, s as Tt, t as Et, u as lt, v as Qt, w as Us, L as Oa, N as Ha, O as Ba, P as Ga, Q as za, R as Ja, U as Va, V as qa, W as Ka, S as Xa, J as Wa, K as Ya, a8 as Qa, C as V, E as X, F as W, G as ne, H as q, a9 as Za, aa as er, ab as tr, ac as Rs, ad as Zt, ae as es, af as Ye, ag as Qe, ah as Ze, ai as et, aj as pe, Z as _t, ak as sr, al as gt, am as ft, an as bt, y as Fs, z as Os, A as Ie, a4 as De } from "./app-components-CKzP6Gne.js";
import { e as te, k as dt, m as Lt, n as ar, j as rr, i as Pe } from "./@tanstack-DqEpoJTo.js";
import { c as L, a as ts } from "./app-lib-Ba99BpAZ.js";
import { u as Hs, b as at, v as He, A as Bs, w as Gs, I as $t, C as zs, h as Be, x as je, k as mt, y as Js, z as ss, R as as, j as nr, M as rt, i as nt, m as Ge, l as ir, B as or, S as it, G as cr, F as Vs, q as Xt, J as qs, D as rs, p as Ks, U as ot, P as ge, K as de, X as Ut, N as lr, Q as We, V as Nt, f as ve, d as Oe, W as St, Y as ze, e as dr, t as Ae, Z as ns, _ as Ct, $ as Xs, a0 as Ws, a1 as mr, a2 as Wt, a3 as ur, a4 as hr, a5 as Ys, a6 as pr, T as xr, a7 as gr, a8 as fr, a9 as br, aa as yr, n as Qs, ab as Zs, ac as is, ad as ea, ae as jr, af as vr, ag as _r, ah as Nr, ai as Sr } from "./icons-GagDs9Wh.js";
import { n as E } from "./id-OxPLOBIU.js";
import { o as P, s as p, n as k, b as Y, r as ie, a as fe, l as z, c as R, _ as B, u as Se, t as be, e as Cr } from "./zod-grrOrvCS.js";
import { c as os } from "./app-hooks-ChKnEqbU.js";
import { x as ta, y as Me, z as wr } from "./vendor-CVkKsKZm.js";
import { _ as we } from "./index-qDtb5hba.js";
import { a as cs } from "./future-lib-llm-ui-react-CX97G2iQ.js";
import { D as wt } from "./dexie-W78agt0s.js";
import { c as xs } from "./es-toolkit-CstbrnlE.js";
function kt() {
  const s = "global-llm-config", t = [];
  try {
    const a = localStorage.getItem(s);
    if (!a) return { isReady: false, missingItems: [{ key: "baseUrl", label: "API \u5730\u5740", description: "LLM \u670D\u52A1\u7684 API \u57FA\u7840\u5730\u5740\u672A\u8BBE\u7F6E" }, { key: "apiKey", label: "API \u5BC6\u94A5", description: "LLM \u670D\u52A1\u7684 API \u5BC6\u94A5\u672A\u8BBE\u7F6E" }, { key: "model", label: "\u6A21\u578B", description: "\u672A\u9009\u62E9\u8981\u4F7F\u7528\u7684 LLM \u6A21\u578B" }] };
    const r = JSON.parse(a);
    return (!r.baseUrl || r.baseUrl.trim() === "") && t.push({ key: "baseUrl", label: "API \u5730\u5740", description: "LLM \u670D\u52A1\u7684 API \u57FA\u7840\u5730\u5740\u672A\u8BBE\u7F6E" }), (!r.apiKey || r.apiKey.trim() === "") && t.push({ key: "apiKey", label: "API \u5BC6\u94A5", description: "LLM \u670D\u52A1\u7684 API \u5BC6\u94A5\u672A\u8BBE\u7F6E" }), (!r.model || r.model.trim() === "") && t.push({ key: "model", label: "\u6A21\u578B", description: "\u672A\u9009\u62E9\u8981\u4F7F\u7528\u7684 LLM \u6A21\u578B" }), { isReady: t.length === 0, missingItems: t };
  } catch {
    return { isReady: false, missingItems: [{ key: "baseUrl", label: "API \u5730\u5740", description: "LLM \u914D\u7F6E\u6570\u636E\u89E3\u6790\u5931\u8D25" }, { key: "apiKey", label: "API \u5BC6\u94A5", description: "LLM \u914D\u7F6E\u6570\u636E\u89E3\u6790\u5931\u8D25" }, { key: "model", label: "\u6A21\u578B", description: "LLM \u914D\u7F6E\u6570\u636E\u89E3\u6790\u5931\u8D25" }] };
  }
}
const kr = ({ onReady: s }) => {
  const t = te(), [a, r] = b.useState(null);
  if (b.useEffect(() => {
    const l = kt();
    if (r(l), l.isReady) {
      const u = setTimeout(() => s(), 600);
      return () => clearTimeout(u);
    }
  }, [s]), !a) return null;
  const n = [{ key: "baseUrl", label: "API \u5730\u5740" }, { key: "apiKey", label: "API \u5BC6\u94A5" }, { key: "model", label: "\u6A21\u578B\u9009\u62E9" }], i = new Set(a.missingItems.map((l) => l.key));
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx("h3", { className: "text-lg font-bold", children: "LLM \u914D\u7F6E\u68C0\u6D4B" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA\uFF0C\u786E\u4FDD\u4F1A\u8BDD\u53EF\u4EE5\u6B63\u5E38\u8FDB\u884C\u3002" })] }), e.jsx("div", { className: "space-y-3", children: n.map((l) => {
    const u = i.has(l.key), d = a.missingItems.find((c) => c.key === l.key);
    return e.jsxs("div", { className: L("flex items-center gap-3 p-3 rounded-xl border transition-colors", u ? "border-destructive/30 bg-destructive/5" : "border-primary/20 bg-primary/5"), children: [u ? e.jsx(Hs, { className: "w-5 h-5 text-destructive shrink-0" }) : e.jsx(at, { className: "w-5 h-5 text-primary shrink-0" }), e.jsxs("div", { className: "flex-1 min-w-0", children: [e.jsx("div", { className: L("text-sm font-medium", u ? "text-destructive" : "text-foreground"), children: l.label }), u && d && e.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: d.description })] })] }, l.key);
  }) }), a.isReady ? e.jsxs("div", { className: "flex items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/20", children: [e.jsx(at, { className: "w-5 h-5 text-primary shrink-0" }), e.jsx("span", { className: "text-sm font-medium text-primary", children: "\u6240\u6709\u914D\u7F6E\u5DF2\u5C31\u7EEA\uFF0C\u6B63\u5728\u8FDB\u5165\u4E0B\u4E00\u6B65..." })] }) : e.jsxs("div", { className: "flex flex-col gap-3", children: [e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E\u540E\u518D\u5F00\u59CB\u4F1A\u8BDD\u3002" }), e.jsxs("div", { className: "flex gap-3", children: [e.jsxs(_, { type: "button", variant: "default", className: "gap-2", onClick: () => t({ to: "/config/llm" }), children: [e.jsx(He, { className: "w-4 h-4" }), "\u524D\u5F80 LLM \u914D\u7F6E"] }), e.jsxs(_, { type: "button", variant: "outline", className: "gap-2", onClick: () => {
    const l = kt();
    r(l), l.isReady && s();
  }, children: [e.jsx(Bs, { className: "w-4 h-4" }), "\u91CD\u65B0\u68C0\u6D4B"] })] })] })] });
};
function Gt() {
  return { userName: "User", globalSystemPrompt: "" };
}
const Ir = ({ config: s, onChange: t, character: a }) => {
  var _a2;
  const r = b.useId(), n = b.useId(), i = !!((_a2 = a.system_prompt) == null ? void 0 : _a2.trim());
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h3", { className: "text-lg font-bold flex items-center gap-2", children: [e.jsx(Gs, { className: "w-5 h-5 text-primary" }), "\u804A\u5929\u4F1A\u8BDD\u914D\u7F6E"] }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u914D\u7F6E\u672C\u6B21\u4E0E ", e.jsx("span", { className: "font-medium text-foreground", children: a.name }), " \u7684\u804A\u5929\u4F1A\u8BDD\u53C2\u6570\u3002"] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: r, className: "text-sm font-medium", children: "\u4F60\u7684\u540D\u79F0" }), e.jsx(O, { id: r, value: s.userName, onChange: (l) => t({ ...s, userName: l.target.value }), placeholder: "\u8F93\u5165\u4F60\u5728\u5BF9\u8BDD\u4E2D\u7684\u540D\u79F0...", className: "max-w-xs" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u89D2\u8272\u5728\u5BF9\u8BDD\u4E2D\u5982\u4F55\u79F0\u547C\u4F60\u3002" })] }), i && e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-muted", children: [e.jsx($t, { className: "w-4 h-4 text-muted-foreground shrink-0 mt-0.5" }), e.jsxs("div", { className: "text-xs text-muted-foreground space-y-1", children: [e.jsx("p", { className: "font-medium", children: "\u8BE5\u89D2\u8272\u81EA\u5E26\u7CFB\u7EDF\u63D0\u793A\u8BCD" }), e.jsx("p", { className: "line-clamp-2 italic", children: a.system_prompt })] })] }), e.jsxs(Ua, { children: [e.jsxs(Ra, { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group w-full", children: [e.jsx(zs, { className: "w-4 h-4 transition-transform group-data-[state=open]:rotate-180" }), "\u9AD8\u7EA7\u914D\u7F6E"] }), e.jsx(Fa, { className: "pt-4 space-y-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: n, className: "text-sm font-medium", children: "\u9644\u52A0\u7CFB\u7EDF\u63D0\u793A\u8BCD" }), e.jsx(K, { id: n, value: s.globalSystemPrompt, onChange: (l) => t({ ...s, globalSystemPrompt: l.target.value }), placeholder: "\u8F93\u5165\u989D\u5916\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u5C06\u8FFD\u52A0\u5230\u89D2\u8272\u5361\u81EA\u5E26\u7684\u63D0\u793A\u8BCD\u4E4B\u540E...", className: "min-h-24 resize-y" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u53EF\u9009\u3002\u7528\u4E8E\u6DFB\u52A0\u989D\u5916\u7684\u89C4\u5219\u6216\u9650\u5236\uFF0C\u5982\u300C\u8BF7\u4F7F\u7528\u4E2D\u6587\u56DE\u590D\u300D\u3002" })] }) })] })] });
}, Dr = ({ challenge: s, character: t }) => {
  const a = s.variables || {}, r = s.goals || [], n = s.failureChecks || [];
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h3", { className: "text-lg font-bold flex items-center gap-2", children: [e.jsx(Be, { className: "w-5 h-5 text-amber-500" }), "\u6311\u6218\u89C4\u5219\u9884\u89C8"] }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u4EE5\u89D2\u8272 ", e.jsx("span", { className: "font-medium text-foreground", children: t.name }), " \u53C2\u4E0E\u6311\u6218 \u300C", e.jsx("span", { className: "font-medium text-foreground", children: s.name }), "\u300D\u3002"] })] }), s.userGuidance && e.jsxs("div", { className: "p-4 rounded-xl bg-muted/50 border border-muted italic text-sm text-muted-foreground leading-relaxed", children: ['"', s.userGuidance, '"'] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(je, { className: "w-4 h-4 text-primary" }), "\u4E16\u754C\u53D8\u91CF", e.jsxs(H, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [Object.keys(a).length, " \u4E2A"] })] }), Object.keys(a).length > 0 ? e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: Object.entries(a).map(([i, l]) => e.jsxs("div", { className: L("p-3 rounded-xl border bg-background/60 space-y-1", l.hidden && "opacity-50"), children: [e.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase truncate", children: i }), e.jsx("div", { className: "text-base font-mono font-bold truncate", children: String(l.initial) }), e.jsxs("div", { className: "text-[10px] text-muted-foreground/60 truncate", children: [l.type, " ", l.hidden ? "(\u9690\u85CF)" : ""] })] }, i)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u4E16\u754C\u53D8\u91CF" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(mt, { className: "w-4 h-4 text-primary" }), "\u751F\u5B58\u76EE\u6807", e.jsxs(H, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [r.length, " \u4E2A"] })] }), r.length > 0 ? e.jsx("div", { className: "space-y-2", children: r.map((i) => e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl border bg-background/60", children: [e.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-primary/30 shrink-0 mt-0.5" }), e.jsx("div", { className: "text-sm", children: i.description })] }, i.key)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u8BBE\u5B9A\u76EE\u6807" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(Js, { className: "w-4 h-4 text-destructive" }), "\u6B7B\u4EA1\u7981\u5FCC", e.jsxs(H, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [n.length, " \u4E2A"] })] }), n.length > 0 ? e.jsx("div", { className: "space-y-2", children: n.map((i) => e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl border border-destructive/10 bg-destructive/5", children: [e.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-destructive/30 shrink-0 mt-0.5" }), e.jsx("div", { className: "text-sm", children: i.description })] }, i.key)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u5931\u8D25\u6761\u4EF6" })] })] });
};
function Mr(s) {
  return s === "chat" ? [{ key: "llm-check", title: "LLM \u68C0\u6D4B", description: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA" }, { key: "chat-config", title: "\u4F1A\u8BDD\u914D\u7F6E", description: "\u914D\u7F6E\u672C\u6B21\u804A\u5929\u4F1A\u8BDD\u7684\u53C2\u6570" }] : [{ key: "llm-check", title: "LLM \u68C0\u6D4B", description: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA" }, { key: "challenge-preview", title: "\u89C4\u5219\u9884\u89C8", description: "\u9884\u89C8\u5E76\u786E\u8BA4\u6311\u6218\u89C4\u5219" }];
}
const ko = ({ open: s, onOpenChange: t, wizardProps: a }) => {
  const [r, n] = b.useState(0), [i, l] = b.useState(Gt), u = Mr(a.mode), d = u[r], c = r === u.length - 1, m = r === 0, o = b.useCallback(() => {
    n((v) => Math.min(v + 1, u.length - 1));
  }, [u.length]), h = () => {
    c ? (a.mode === "chat" ? a.onConfirm(i) : a.onConfirm(), t(false), n(0), l(Gt())) : n((v) => v + 1);
  }, x = () => {
    n((v) => Math.max(v - 1, 0));
  }, g = (v) => {
    v || (n(0), l(Gt())), t(v);
  }, y = a.mode === "chat" ? "\u804A\u5929\u4F1A\u8BDD" : "\u6311\u6218\u4F1A\u8BDD";
  return e.jsx(At, { open: s, onOpenChange: g, children: e.jsxs(Tt, { className: "sm:max-w-lg max-h-[85vh] overflow-y-auto", children: [e.jsxs(Et, { children: [e.jsxs(lt, { className: "flex items-center gap-2", children: ["\u5F00\u59CB", y] }), e.jsx(Qt, { children: d == null ? void 0 : d.description })] }), e.jsx("div", { className: "flex items-center gap-2 py-2", children: u.map((v, f) => e.jsxs("div", { className: "flex items-center gap-2", children: [f > 0 && e.jsx("div", { className: "h-px w-6 bg-muted-foreground/20" }), e.jsx("div", { className: `
                  w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-colors
                  ${f < r ? "bg-primary text-primary-foreground" : f === r ? "bg-primary/20 text-primary border-2 border-primary" : "bg-muted text-muted-foreground"}
                `, children: f + 1 }), e.jsx("span", { className: `text-xs font-medium hidden sm:inline ${f === r ? "text-foreground" : "text-muted-foreground"}`, children: v.title })] }, v.key)) }), e.jsxs("div", { className: "py-2 min-h-48", children: [(d == null ? void 0 : d.key) === "llm-check" && e.jsx(kr, { onReady: o }), (d == null ? void 0 : d.key) === "chat-config" && a.mode === "chat" && e.jsx(Ir, { config: i, onChange: l, character: a.character }), (d == null ? void 0 : d.key) === "challenge-preview" && a.mode === "challenge" && e.jsx(Dr, { challenge: a.challenge, character: a.character })] }), e.jsxs(Us, { className: "flex-row justify-between sm:justify-between gap-2", children: [e.jsxs(_, { type: "button", variant: "outline", disabled: m, onClick: x, className: "gap-1.5", children: [e.jsx(ss, { className: "w-4 h-4" }), "\u4E0A\u4E00\u6B65"] }), e.jsx(_, { type: "button", onClick: h, disabled: (d == null ? void 0 : d.key) === "llm-check", className: "gap-1.5", children: c ? e.jsxs(e.Fragment, { children: [e.jsx(as, { className: "w-4 h-4" }), "\u5F00\u59CB", y] }) : e.jsxs(e.Fragment, { children: ["\u4E0B\u4E00\u6B65", e.jsx(Bs, { className: "w-4 h-4" })] }) })] })] }) });
}, gs = { chat: { id: "chat", label: "\u804A\u5929", description: "\u7EAF\u7CB9\u7684\u89D2\u8272RP\u5BF9\u8BDD", icon: Gs, colorClass: "text-blue-500", badgeText: "\u804A\u5929\u6A21\u5F0F", sessionPrefix: "\u804A\u5929" }, challenge: { id: "challenge", label: "\u6311\u6218", description: "\u542B DM \u65C1\u767D\u4E0E\u76EE\u6807\u6311\u6218", icon: Js, colorClass: "text-amber-500", badgeText: "\u6311\u6218\u6A21\u5F0F", sessionPrefix: "\u6311\u6218" }, dnd: { id: "dnd", label: "DnD", description: "\u591A\u4EBA DnD \u684C\u6E38\u5192\u9669", icon: nt, colorClass: "text-amber-600", badgeText: "DnD \u6A21\u5F0F", sessionPrefix: "DnD \u5192\u9669" }, "group-chat": { id: "group-chat", label: "\u7FA4\u804A", description: "\u591A\u89D2\u8272\u81EA\u7531\u7FA4\u804A", icon: rt, colorClass: "text-violet-500", badgeText: "\u7FA4\u804A\u6A21\u5F0F", sessionPrefix: "\u7FA4\u804A" }, "chat-create-character": { id: "chat-create-character", label: "\u804A\u5929\u521B\u89D2", description: "\u901A\u8FC7\u5BF9\u8BDD\u521B\u5EFA\u89D2\u8272\u5361", icon: nr, colorClass: "text-emerald-500", badgeText: "\u804A\u5929\u521B\u89D2", sessionPrefix: "\u521B\u5EFA\u89D2\u8272" }, "chat-create-challenge": { id: "chat-create-challenge", label: "\u804A\u5929\u521B\u6311\u6218", description: "\u901A\u8FC7\u5BF9\u8BDD\u521B\u5EFA\u6311\u6218\u5361", icon: mt, colorClass: "text-orange-500", badgeText: "\u804A\u5929\u521B\u6311\u6218", sessionPrefix: "\u521B\u5EFA\u6311\u6218" } };
function It(s) {
  return gs[s] || gs.chat;
}
const Pr = (s) => {
  const [t, a] = b.useState(false);
  return e.jsxs(Oa, { open: t, onOpenChange: a, children: [e.jsxs("div", { className: L("group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors mb-1", s.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"), onClick: () => s.onClick(s.session), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [(() => {
    const r = It(s.session.mode).icon;
    return e.jsx(r, { className: "w-4 h-4 shrink-0" });
  })(), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: s.session.title || s.characterName }), e.jsx("span", { className: "text-[10px] opacity-70", children: new Date(s.session.updatedAt).toLocaleDateString() })] })] }), e.jsx(Ha, { asChild: true, children: e.jsx(_, { variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: (r) => r.stopPropagation(), type: "button", children: e.jsx(Ge, { className: "w-3.5 h-3.5 text-muted-foreground hover:text-destructive" }) }) })] }), e.jsxs(Ba, { children: [e.jsxs(Ga, { children: [e.jsx(za, { children: "\u786E\u8BA4\u5220\u9664" }), e.jsx(Ja, { children: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u4F1A\u8BDD\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002" })] }), e.jsxs(Va, { children: [e.jsx(qa, { children: "\u53D6\u6D88" }), e.jsx(Ka, { onClick: () => {
    var _a2;
    (_a2 = s.onDelete) == null ? void 0 : _a2.call(s, s.session), a(false);
  }, children: "\u5220\u9664" })] })] })] });
}, Io = (s) => {
  const [t, a] = b.useState(""), [r, n] = b.useState(false), i = (d) => {
    var _a2, _b;
    if (d.title) return d.title;
    const c = It(d.mode), m = (_a2 = d.modeConfig) == null ? void 0 : _a2.characterId;
    if (m) {
      const o = (_b = s.characters.find((h) => h.id === m)) == null ? void 0 : _b.name;
      if (o) return `${c.sessionPrefix}: ${o}`;
    }
    return c.sessionPrefix;
  }, l = s.sessions.filter((d) => i(d).toLowerCase().includes(t.toLowerCase())).sort((d, c) => c.updatedAt - d.updatedAt), u = (d = false) => e.jsxs("div", { className: "flex flex-col h-full bg-muted/30 border-r w-64", children: [e.jsxs("div", { className: `p-4 space-y-4 ${d ? "pt-12" : ""}`, children: [e.jsxs(_, { className: "w-full flex items-center gap-2", onClick: () => {
    s.onNewSession(), d && n(false);
  }, type: "button", children: [e.jsx(or, { className: "w-4 h-4" }), "\u65B0\u4F1A\u8BDD"] }), e.jsxs("div", { className: "relative", children: [e.jsx(it, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), e.jsx(O, { placeholder: "\u641C\u7D22\u4F1A\u8BDD...", className: "pl-8 h-9 text-xs", value: t, onChange: (c) => a(c.target.value) })] })] }), e.jsx("div", { className: "grow overflow-y-auto px-2", children: e.jsxs("div", { className: "space-y-1", children: [l.map((c) => e.jsx(Pr, { session: c, isActive: c.id === s.activeSessionId, characterName: i(c), onClick: (m) => {
    s.onSessionSelect(m), d && n(false);
  }, onDelete: s.onSessionDelete }, c.id)), l.length === 0 && e.jsx("div", { className: "text-center py-10 text-muted-foreground text-xs", children: "\u65E0\u4F1A\u8BDD" })] }) })] });
  return e.jsxs(e.Fragment, { children: [e.jsx("aside", { className: "hidden md:flex w-64 flex-col", children: u(false) }), e.jsxs(Xa, { open: r, onOpenChange: n, children: [e.jsx(Wa, { asChild: true, children: e.jsx(_, { variant: "outline", size: "icon", className: "md:hidden fixed bottom-6 left-6 rounded-full shadow-lg z-50 h-12 w-12", children: e.jsx(ir, { className: "h-6 w-6" }) }) }), e.jsxs(Ya, { side: "left", className: "w-64 p-0", children: [e.jsx(lt, { className: "sr-only", children: "\u4F1A\u8BDD\u5217\u8868" }), e.jsx(Qt, { className: "sr-only", children: "\u9009\u62E9\u548C\u7BA1\u7406\u60A8\u7684\u804A\u5929\u4F1A\u8BDD" }), u(true)] })] })] });
}, Ar = P({ keys: Y(p()).describe("\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5339\u914D\u804A\u5929\u65E5\u5FD7"), content: p().describe("\u5185\u5BB9\uFF0C\u5982\u679C\u5339\u914D\u5219\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u4E2D"), extensions: ie(p(), fe()).describe("\u6269\u5C55\u5B57\u6BB5"), enabled: R().describe("\u662F\u5426\u542F\u7528"), insertion_order: k().describe("\u63D2\u5165\u987A\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5C0F\u8D8A\u65E9\u63D2\u5165"), case_sensitive: R().optional().describe("\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199"), constant: R().optional().describe("\u662F\u5426\u4E3A\u5E38\u91CF\u5339\u914D"), name: p().optional().describe("\u6761\u76EE\u540D\u79F0"), priority: k().optional().describe("\u4F18\u5148\u7EA7"), id: k().optional().describe("\u6761\u76EEID"), comment: p().optional().describe("\u6CE8\u91CA"), selective: R().optional().describe("\u662F\u5426\u9009\u62E9\u6027\u5339\u914D"), secondary_keys: Y(p()).optional().describe("\u6B21\u8981\u5173\u952E\u8BCD"), position: B(["before_char", "after_char"]).optional().describe("\u63D2\u5165\u4F4D\u7F6E") }), Tr = P({ keys: Y(p()).describe("\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5339\u914D\u804A\u5929\u65E5\u5FD7"), content: p().describe("\u5185\u5BB9\uFF0C\u5982\u679C\u5339\u914D\u5219\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u4E2D"), extensions: ie(p(), fe()).describe("\u6269\u5C55\u5B57\u6BB5"), enabled: R().describe("\u662F\u5426\u542F\u7528"), insertion_order: k().describe("\u63D2\u5165\u987A\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5C0F\u8D8A\u65E9\u63D2\u5165"), case_sensitive: R().optional().describe("\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199"), use_regex: R().optional().describe("\u662F\u5426\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D"), constant: R().optional().describe("\u662F\u5426\u4E3A\u5E38\u91CF\u5339\u914D"), name: p().optional().describe("\u6761\u76EE\u540D\u79F0"), priority: k().optional().describe("\u4F18\u5148\u7EA7"), id: Se([k(), p()]).optional().describe("\u6761\u76EEID"), comment: p().optional().describe("\u6CE8\u91CA"), selective: R().optional().describe("\u662F\u5426\u9009\u62E9\u6027\u5339\u914D"), secondary_keys: Y(p()).optional().describe("\u6B21\u8981\u5173\u952E\u8BCD"), position: B(["before_char", "after_char"]).optional().describe("\u63D2\u5165\u4F4D\u7F6E") }), Er = Se([Ar, Tr]), sa = P({ name: p().optional().describe("\u77E5\u8BC6\u4E66\u540D\u79F0"), description: p().optional().describe("\u77E5\u8BC6\u4E66\u63CF\u8FF0"), scan_depth: k().optional().describe("\u626B\u63CF\u6DF1\u5EA6\uFF0C\u68C0\u67E5\u6700\u8FD1\u591A\u5C11\u6761\u6D88\u606F"), token_budget: k().optional().describe("\u4EE4\u724C\u9884\u7B97\uFF0C\u8D85\u8FC7\u5219\u79FB\u9664\u4F4E\u4F18\u5148\u7EA7\u6761\u76EE"), recursive_scanning: R().optional().describe("\u662F\u5426\u542F\u7528\u9012\u5F52\u626B\u63CF"), extensions: ie(p(), fe()).describe("\u6269\u5C55\u5B57\u6BB5"), entries: Y(Er).describe("\u6761\u76EE\u6570\u7EC4") }), Lr = P({ type: p().describe("\u8D44\u4EA7\u7C7B\u578B\uFF0C\u5982 'icon', 'background' \u7B49"), uri: p().describe("\u8D44\u4EA7URI"), name: p().describe("\u8D44\u4EA7\u540D\u79F0"), ext: p().describe("\u6587\u4EF6\u6269\u5C55\u540D") }), Je = P({ name: p().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: p().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), creator: p().describe("\u521B\u5EFA\u8005\u3010v2\u3011"), creator_notes: p().describe("\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v2\u3011"), creator_notes_multilingual: ie(p(), p()).optional().describe("\u591A\u8BED\u8A00\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v3\u3011"), extensions: ie(p(), fe()).describe("\u53EF\u81EA\u5B9A\u4E49\u7684\u6269\u5C55\u5B57\u6BB5\u3010v2\u3011"), assets: Y(Lr).optional().describe("\u8D44\u4EA7\u6570\u7EC4\u3010v3\u3011"), system_prompt: p().describe("\u7CFB\u7EDF\u63D0\u793A\u8BCD(\u6A21\u677F)\u3010v2\u3011"), post_history_instructions: p().describe("\u5386\u53F2\u6307\u4EE4\u540E\u7F00(\u6A21\u677F)\u3010v2\u3011"), nickname: p().optional().describe("\u6635\u79F0\u3010v3\u3011"), personality: p().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), mes_example: p().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011"), first_mes: p().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), alternate_greetings: Y(p()).describe("\u5907\u7528\u95EE\u5019\u8BED\u6570\u7EC4\u3010v2\u3011"), group_only_greetings: Y(p()).describe("\u4EC5\u7FA4\u804A\u95EE\u5019\u8BED\u3010v3\u3011"), scenario: p().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), character_book: sa.optional().describe("\u89D2\u8272\u7279\u5B9A\u77E5\u8BC6\u4E66\u3010\u90E8\u5206\u529F\u80FD\uFF08\u5982\u88C5\u9970\u5668\uFF09\u9650\u5355\u804A\u4F7F\u7528\u3011\u3010v2\u3011"), character_version: p().describe("\u89D2\u8272\u7248\u672C\u3010v2\u3011"), tags: Y(p()).describe("\u6807\u7B7E\u6570\u7EC4\uFF0C\u7528\u4E8E\u7B5B\u9009\uFF0C\u5927\u5C0F\u5199\u654F\u611F\u3010v2\u3011"), source: Y(p()).optional().describe("\u6765\u6E90\u6570\u7EC4\uFF0C\u4FBF\u4E8E\u6EAF\u6E90\u6216\u81EA\u52A8\u66F4\u65B0\u7B49\u3010v3\u3011"), creation_date: k().optional().describe("\u521B\u5EFA\u65E5\u671F\uFF08Unix\u65F6\u95F4\u6233\uFF09\u3010v3\u3011"), modification_date: k().optional().describe("\u4FEE\u6539\u65E5\u671F\uFF08Unix\u65F6\u95F4\u6233\uFF09\u3010v3\u3011") }), $r = P({ name: p().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: p().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), personality: p().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), scenario: p().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), first_mes: p().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), mes_example: p().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011"), creator_notes: p().describe("\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v2\u3011"), system_prompt: p().describe("\u7CFB\u7EDF\u63D0\u793A\u8BCD(\u6A21\u677F)\u3010v2\u3011"), post_history_instructions: p().describe("\u5386\u53F2\u6307\u4EE4\u540E\u7F00(\u6A21\u677F)\u3010v2\u3011"), alternate_greetings: Y(p()).describe("\u5907\u7528\u95EE\u5019\u8BED\u6570\u7EC4\u3010v2\u3011"), character_book: sa.optional().describe("\u89D2\u8272\u7279\u5B9A\u77E5\u8BC6\u4E66\u3010\u90E8\u5206\u529F\u80FD\uFF08\u5982\u88C5\u9970\u5668\uFF09\u9650\u5355\u804A\u4F7F\u7528\u3011\u3010v2\u3011"), tags: Y(p()).describe("\u6807\u7B7E\u6570\u7EC4\uFF0C\u7528\u4E8E\u7B5B\u9009\uFF0C\u5927\u5C0F\u5199\u654F\u611F\u3010v2\u3011"), creator: p().describe("\u521B\u5EFA\u8005\u3010v2\u3011"), character_version: p().describe("\u89D2\u8272\u7248\u672C\u3010v2\u3011"), extensions: ie(p(), fe()).describe("\u53EF\u81EA\u5B9A\u4E49\u7684\u6269\u5C55\u5B57\u6BB5\u3010v2\u3011") });
P({ spec: z("chara_card_v2").describe("\u89C4\u8303\u6807\u8BC6"), spec_version: z("2.0").describe("\u89C4\u8303\u7248\u672C"), data: $r.describe("\u6570\u636E") });
const ls = P({ spec: z("chara_card_v3").describe("\u89C4\u8303\u6807\u8BC6"), spec_version: z("3.0").describe("\u89C4\u8303\u7248\u672C"), data: Je.describe("\u6570\u636E") }), aa = P({ name: p().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: p().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), personality: p().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), scenario: p().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), first_mes: p().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), mes_example: p().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011") }), Rt = Je.extend({ id: p().describe("\u89D2\u8272\u5361ID"), avatar: p().optional().describe("\u5934\u50CFURI"), imageBase64: p().optional().describe("PNG\u56FE\u50CFBase64\u6570\u636E"), createdAt: k().optional().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: k().optional().describe("\u66F4\u65B0\u65F6\u95F4") }), Z = P({ id: p().optional().describe("\u4E0A\u4E0B\u6587\u9879 ID"), idx: k().optional().describe("\u4E0A\u4E0B\u6587\u9879\u7D22\u5F15\u4F4D\u7F6E"), orderRef: k().optional().describe("\u4E0A\u4E0B\u6587\u9879\u6392\u5E8F\u53C2\u8003\u503C").default(0), type: p().optional().describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\u6807\u7B7E").default("default"), data: fe().describe("\u4E0A\u4E0B\u6587\u5185\u5BB9"), hidden: R().optional().nullable().describe("\u662F\u5426\u9690\u85CF\u8BE5\u4E0A\u4E0B\u6587\u9879"), processing: R().optional().nullable().describe("\u4E0A\u4E0B\u6587\u9879\u5904\u7406\u72B6\u6001\uFF0C\u5904\u7406\u4E2D\u8BBE\u7F6E\u4E3A true\uFF0C\u5904\u7406\u5B8C\u6BD5\u8BBE\u7F6E\u4E3A undefined"), timestamp: k().optional().nullable().describe("\u6D88\u606F\u65F6\u95F4\u6233"), deleted: R().optional().nullable().describe("\u662F\u5426\u5DF2\u5220\u9664\u8BE5\u4E0A\u4E0B\u6587\u9879") }), Ur = P({ historyItems: Z.array().describe("\u4E0A\u4E0B\u6587\u9879\u6570\u7EC4"), processingItem: Z.optional().describe("\u6B63\u5728\u5904\u7406\u4E2D\u7684\u4E0A\u4E0B\u6587\u9879(\u9650\u4E00\u9879)") });
P({ role: B(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: p().describe("\u6D88\u606F\u5185\u5BB9"), name: p().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") });
Z.extend({ type: z("llm_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1ALLM\u6D88\u606F"), data: P({ role: B(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: p().describe("\u6D88\u606F\u5185\u5BB9"), name: p().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") }).describe("\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u56E0\u4E3A\u4E0A\u4E0B\u6587\u7BA1\u7406\u5E94\u8BE5\u4F7F\u7528\u66F4\u52A0\u7CBE\u7EC6\u7684\u7ED3\u6784\u3002LLM\u6D88\u606F\u4E0A\u4E0B\u6587\u9879\u53EA\u662F\u6700\u6734\u7D20\u7684\u5F62\u5F0F\u3002");
Z.extend({ type: z("starting_system_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u8D77\u59CB\u7CFB\u7EDF\u6D88\u606F"), data: P({ role: z("system").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: p().describe("\u6D88\u606F\u5185\u5BB9"), name: p().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Z.extend({ type: z("in_context_system_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u4E0A\u4E0B\u6587\u4E4B\u4E2D\u7684\u7CFB\u7EDF\u6D88\u606F"), data: P({ role: z("system").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: p().describe("\u6D88\u606F\u5185\u5BB9"), name: p().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Z.extend({ type: z("tool_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u5DE5\u5177\u6D88\u606F"), data: P({ role: z("tool").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: p().describe("\u6D88\u606F\u5185\u5BB9"), name: p().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Z.extend({ type: z("story_telling").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u8BB2\u6545\u4E8B\u6D88\u606F"), data: P({ role: B(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: p().describe("\u6D88\u606F\u5185\u5BB9"), name: p().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
const ra = P({ isCharacter: R().optional().default(false).describe("\u662F\u5426\u4E3A\u89D2\u8272\u6D88\u606F"), isEnv: R().optional().default(false).describe("\u662F\u5426\u4E3A\u73AF\u5883\u6D88\u606F"), isDM: R().optional().default(false).describe("\u662F\u5426\u4E3ADM\u6D88\u606F"), isUser: R().optional().default(false).describe("\u662F\u5426\u4E3A\u7528\u6237\u6D88\u606F"), characterId: p().optional().describe("\u89D2\u8272 ID"), userId: p().optional().describe("\u7528\u6237 ID"), content: p().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: k().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233"), name: p().optional().describe("\u53D1\u9001\u8005\u540D\u79F0"), role: B(["system", "user", "assistant", "tool"]).optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272") }), Rr = Z.extend({ type: z("participant_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u53C2\u4E0E\u8005\u6D88\u606F"), data: ra.describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") }), na = P({ isCharacter: R().optional().default(false).describe("\u662F\u5426\u4E3A\u89D2\u8272\u6D88\u606F"), isEnv: R().optional().default(false).describe("\u662F\u5426\u4E3A\u73AF\u5883\u6D88\u606F"), isDM: R().optional().default(false).describe("\u662F\u5426\u4E3ADM\u6D88\u606F"), isUser: R().optional().default(false).describe("\u662F\u5426\u4E3A\u7528\u6237\u6D88\u606F"), characterId: p().optional().describe("\u89D2\u8272 ID"), userId: p().optional().describe("\u7528\u6237 ID"), list: Y(P({ content: p().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: k().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233"), originalIdx: k().optional().describe("\u539F\u59CB\u7D22\u5F15\u4F4D\u7F6E") })).describe("\u6D88\u606F\u5217\u8868"), name: p().optional().describe("\u53D1\u9001\u8005\u540D\u79F0"), role: B(["system", "user", "assistant", "tool"]).optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272") });
Z.extend({ type: z("participant_message_group").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u53C2\u4E0E\u8005\u6D88\u606F\u7EC4"), data: na.describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Rr.extend({ type: z("character_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u6D88\u606F"), data: ra.extend({ characterId: p().describe("\u89D2\u8272 ID") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Z.extend({ type: z("character_message_group").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u6D88\u606F\u7EC4"), data: na.extend({ characterId: p().describe("\u89D2\u8272 ID") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Z.extend({ type: z("placeholder").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u5360\u4F4D\u7B26"), data: fe().nullable().optional().describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9"), hidden: z(true).describe("\u5360\u4F4D\u7B26\u4E0A\u4E0B\u6587\u9879\u9ED8\u8BA4\u9690\u85CF") });
Z.extend({ type: z("alert").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u7A0B\u5E8F\u63D0\u793A"), data: P({ type: B(["info", "warning", "error", "success", "secondary", "contrast"]).describe("\u7A0B\u5E8F\u63D0\u793A\u7C7B\u578B"), content: p().describe("\u5185\u5BB9"), timestamp: k().optional().describe("\u65F6\u95F4\u6233") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Z.extend({ type: z("summary").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6458\u8981"), data: P({ range: be([k().describe("\u8D77\u59CB\u7D22\u5F15\u4F4D\u7F6E"), k().describe("\u7ED3\u675F\u7D22\u5F15\u4F4D\u7F6E")]).describe("\u6458\u8981\u8986\u76D6\u7684\u5185\u5BB9\u8303\u56F4"), content: p().describe("\u6458\u8981\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Z.extend({ type: z("annotation").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6CE8\u89E3"), data: P({ target: k().describe("\u6CE8\u89E3\u76EE\u6807\u7684\u7D22\u5F15\u4F4D\u7F6E"), content: p().describe("\u6CE8\u89E3\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Z.extend({ type: z("performance_command").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6F14\u51FA\u6307\u4EE4"), data: P({ anchor: k().describe("\u6F14\u51FA\u6307\u4EE4\u7684\u951A\u70B9\u4F4D\u7F6E"), command: Y(fe()).describe("\u6F14\u51FA\u6307\u4EE4\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Z.extend({ type: z("dm_intro").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1ADM \u5F00\u573A\u767D"), data: P({ content: p().describe("DM \u5F00\u573A\u767D\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Z.extend({ type: z("character_intro").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u5F00\u573A\u767D"), data: P({ characterId: p().optional().describe("\u89D2\u8272ID"), content: p().describe("\u89D2\u8272\u5F00\u573A\u767D\u5185\u5BB9"), timestamp: k().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
const Ft = P({ id: p().describe("\u4F1A\u8BDDID"), title: p().optional().describe("\u4F1A\u8BDD\u6807\u9898"), contextId: p().optional().nullable().describe("\u5173\u8054\u7684\u4E0A\u4E0B\u6587\u7684ID"), mode: p().describe("\u6A21\u5F0F"), modeConfig: ie(p(), fe()).describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: ie(p(), fe()).describe("\u6A21\u5F0F\u4E13\u7528\u72B6\u6001"), createdAt: k().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: k().describe("\u66F4\u65B0\u65F6\u95F4"), isActive: R().optional().describe("\u662F\u5426\u6D3B\u8DC3") }), Fr = P({ key: p().describe("\u53D8\u91CF\u952E"), type: z("boolean").describe("\u53D8\u91CF\u7C7B\u578B"), description: p().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: R().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: R().describe("\u521D\u59CB\u503C") }), Or = P({ key: p().describe("\u53D8\u91CF\u952E"), type: z("number").describe("\u53D8\u91CF\u7C7B\u578B"), description: p().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: R().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: k().describe("\u521D\u59CB\u503C"), min: k().optional().describe("\u6700\u5C0F\u503C"), max: k().optional().describe("\u6700\u5927\u503C"), minDelta: k().optional().describe("(\u7EDD\u5BF9\u503C\u7684)\u6700\u5C0F\u53D8\u5316\u5E45\u5EA6"), maxDelta: k().optional().describe("(\u7EDD\u5BF9\u503C\u7684)\u6700\u5927\u53D8\u5316\u5E45\u5EA6"), asPercent: R().optional().describe("\u662F\u5426\u4E3A\u767E\u5206\u6BD4(\u754C\u9762\u6DFB\u52A0\u767E\u5206\u53F7)") }), Hr = P({ key: p().describe("\u53D8\u91CF\u952E"), type: z("string").describe("\u53D8\u91CF\u7C7B\u578B"), description: p().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: R().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: p().describe("\u521D\u59CB\u503C"), asEnum: R().optional().describe("\u662F\u5426\u4E3A\u679A\u4E3E"), enumValues: Y(p()).optional().describe("\u679A\u4E3E\u503C\u5217\u8868") }), Br = P({ key: p().describe("\u53D8\u91CF\u952E"), type: z("tags").describe("\u53D8\u91CF\u7C7B\u578B"), description: p().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: R().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: Y(p()).describe("\u521D\u59CB\u6807\u7B7E\u5217\u8868"), asEnum: R().optional().describe("\u662F\u5426\u4E3A\u679A\u4E3E"), enumValues: Y(p()).optional().describe("\u679A\u4E3E\u503C\u5217\u8868") }), ia = Cr("type", [Fr, Or, Hr, Br]);
ie(p(), ia).describe("\u53D8\u91CF\u914D\u7F6E\u5B57\u5178");
const Gr = P({ key: p().describe("\u53D8\u91CF\u952E"), value: Se([R(), k(), p(), Y(p())]).describe("\u53D8\u91CF\u503C") }), zr = ie(p(), Gr).describe("\u53D8\u91CF\u5B57\u5178");
B(["setTrue", "setFalse", "toggle", "delta", "setTo", "setValue", "add", "remove"]);
const oa = be([B(["setTrue", "setFalse", "toggle"]), p().describe("\u53D8\u91CF\u952E")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u5E03\u5C14\u7C7B\u578B"), ca = be([B(["delta", "setTo", "setValue"]), p().describe("\u53D8\u91CF\u952E"), k().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u6570\u5B57\u7C7B\u578B"), la = be([B(["setTo", "setValue"]), p().describe("\u53D8\u91CF\u952E"), p().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u5B57\u7B26\u4E32\u7C7B\u578B"), da = be([B(["add", "remove"]), p().describe("\u53D8\u91CF\u952E"), p().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u6807\u7B7E\u7C7B\u578B");
Se([oa, ca, la, da]).describe("\u53D8\u91CF\u64CD\u4F5C\u5143\u7EC4");
B(["isTrue", "isFalse", "eq", "is", "neq", "isNot", "gt", "gte", "lt", "lte", "includes", "notIncludes", "has", "hasAny", "hasAll", "llmJudge", "and", "or", "all", "any", "some"]);
const Jr = be([B(["isTrue", "isFalse"]), p().describe("\u53D8\u91CF\u952E")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5E03\u5C14\u7C7B\u578B"), Vr = be([B(["eq", "neq", "is", "isNot"]), p().describe("\u53D8\u91CF\u952E"), Se([p(), k(), R()]).describe("\u6BD4\u8F83\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5B57\u9762\u91CF\u7C7B\u578B"), qr = be([B(["gt", "gte", "lt", "lte"]), p().describe("\u53D8\u91CF\u952E"), k().describe("\u6BD4\u8F83\u503C")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u6570\u5B57\u7C7B\u578B"), Kr = be([B(["includes", "notIncludes", "has", "hasAny", "hasAll", "llmJudge"]), p().describe("\u53D8\u91CF\u952E"), Se([p(), k(), R()]).describe("\u53C2\u8003\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5185\u5BB9\u7C7B\u578B(\u5B57\u7B26\u4E32\u548C\u6807\u7B7E)"), Xr = be([B(["hasAny", "hasAll"]), p().describe("\u53D8\u91CF\u952E"), Se([p(), k(), R()]).array().describe("\u53C2\u8003\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5185\u5BB9\u6570\u7EC4\u7C7B\u578B(\u5B57\u7B26\u4E32\u548C\u6807\u7B7E)"), Ot = Se([Jr, Vr, qr, Kr, Xr]).describe("\u6761\u4EF6\u5143\u7EC4"), ds = be([B(["and", "or", "all", "any", "some"]), Y(Ot).describe("\u5B50\u6761\u4EF6\u5143\u7EC4\u6570\u7EC4")]).describe("\u7B80\u5355\u590D\u5408\u6761\u4EF6\u5143\u7EC4"), ma = be([B(["and", "or", "all", "any", "some"]), Se([Ot, ds]).array().describe("\u5B50\u6761\u4EF6\u5143\u7EC4\u6570\u7EC4")]).describe("\u590D\u6742\u590D\u5408\u6761\u4EF6\u5143\u7EC4"), Wr = Se([Ot, ds, ma]).describe("\u6761\u4EF6\u5143\u7EC4\uFF08\u652F\u6301\u5355\u4E00\u6761\u4EF6\u548C\u590D\u5408\u6761\u4EF6\uFF09"), fs = P({ key: p().describe("\u68C0\u67E5\u9879\u952E"), description: p().describe("\u68C0\u67E5\u9879\u63CF\u8FF0"), condition: Wr.describe("\u7ED3\u6784\u5316\u8FBE\u6210\u6761\u4EF6") }), bs = P({ key: p().describe("\u68C0\u67E5\u9879\u952E"), isCompleted: R().describe("\u662F\u5426\u5DF2\u5B8C\u6210") }), Yr = B(["dm_intro", "character_intro", "player_input", "dm_eval_changes", "dm_narrate_changes", "failure_check", "goal_check", "ending_check", "character_response"]), Qr = B(["idle", "dm_intro_ready", "dm_intro_running", "dm_intro_done", "character_intro_ready", "character_intro_running", "character_intro_done", "player_input_ready", "player_input_running", "player_input_done", "character_response_ready", "character_response_running", "character_response_done", "dm_eval_changes_ready", "dm_eval_changes_running", "dm_eval_changes_done", "dm_narrate_changes_ready", "dm_narrate_changes_running", "dm_narrate_changes_done", "failure_check_ready", "failure_check_running", "failure_check_done", "goal_check_ready", "goal_check_running", "goal_check_done", "ending_check_ready", "ending_check_running", "ending_check_done", "ended"]), zt = { idle: { label: "\u7A7A\u95F2", placeholder: "\u8BF7\u5148\u70B9\u51FB\u5F00\u59CB\u6216\u7EE7\u7EED...", inputEnabled: false }, dm_intro_ready: { label: "DM\u5F00\u573A\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u5F00\u573A\u767D...", inputEnabled: false }, dm_intro_running: { label: "DM\u5F00\u573A\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u5F00\u573A\u767D...", inputEnabled: false }, dm_intro_done: { label: "DM\u5F00\u573A\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u5F00\u573A\u767D\u5B8C\u6210...", inputEnabled: false }, character_intro_ready: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85\u89D2\u8272\u5F00\u573A\u767D...", inputEnabled: false }, character_intro_running: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u5F00\u573A\u767D...", inputEnabled: false }, character_intro_done: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u5F00\u573A\u767D\u5B8C\u6210...", inputEnabled: false }, player_input_ready: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u51C6\u5907\uFF09", placeholder: "\u5728\u8FD9\u91CC\u4E66\u5199\u4F60\u7684\u4E0B\u4E00\u5E55...", inputEnabled: true }, player_input_running: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u6B63\u5728\u63D0\u4EA4\u4F60\u7684\u8F93\u5165...", inputEnabled: false }, player_input_done: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u5B8C\u6210\uFF09", placeholder: "\u8F93\u5165\u5DF2\u63D0\u4EA4...", inputEnabled: false }, character_response_ready: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85\u89D2\u8272\u56DE\u5E94...", inputEnabled: false }, character_response_running: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u56DE\u5E94...", inputEnabled: false }, character_response_done: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u56DE\u5E94\u5B8C\u6210...", inputEnabled: false }, dm_eval_changes_ready: { label: "DM\u8BC4\u4F30\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u8BC4\u4F30...", inputEnabled: false }, dm_eval_changes_running: { label: "DM\u8BC4\u4F30\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u8BC4\u4F30...", inputEnabled: false }, dm_eval_changes_done: { label: "DM\u8BC4\u4F30\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u8BC4\u4F30\u5B8C\u6210...", inputEnabled: false }, dm_narrate_changes_ready: { label: "DM\u65C1\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u65C1\u767D...", inputEnabled: false }, dm_narrate_changes_running: { label: "DM\u65C1\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u65C1\u767D...", inputEnabled: false }, dm_narrate_changes_done: { label: "DM\u65C1\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u65C1\u767D\u5B8C\u6210...", inputEnabled: false }, failure_check_ready: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u5931\u8D25\u68C0\u67E5...", inputEnabled: false }, failure_check_running: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u5931\u8D25\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, failure_check_done: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u5931\u8D25\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, goal_check_ready: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u76EE\u6807\u68C0\u67E5...", inputEnabled: false }, goal_check_running: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u76EE\u6807\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, goal_check_done: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u76EE\u6807\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, ending_check_ready: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u7ED3\u5C40\u68C0\u67E5...", inputEnabled: false }, ending_check_running: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u7ED3\u5C40\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, ending_check_done: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u7ED3\u5C40\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, ended: { label: "\u5DF2\u7ED3\u675F", placeholder: "\u6311\u6218\u5DF2\u7ED3\u675F", inputEnabled: false } }, ua = P({ characterId: p().describe("\u8981\u6311\u6218\u7684\u89D2\u8272\u7684ID"), characterSnapshot: P({ name: p().describe("\u89D2\u8272\u540D\u79F0"), description: p().optional().describe("\u89D2\u8272\u63CF\u8FF0"), avatar: p().optional().describe("\u89D2\u8272\u5934\u50CF") }).optional().describe("\u89D2\u8272\u7684\u5FEB\u7167\u4FE1\u606F\uFF0C\u7528\u4E8E\u4FDD\u6301\u4F1A\u8BDD\u4E00\u81F4\u6027"), roleTaskPrompt: p().describe("\u89D2\u8272\u4EFB\u52A1\u63D0\u793A\u8BCD\uFF0C\u7528\u6765\u5F15\u5BFC\u89D2\u8272\u5728\u8BE5\u6311\u6218\u4E2D\u7684\u884C\u4E3A\u65B9\u5F0F"), userGuidance: p().describe("\u7528\u6237\u5F15\u5BFC\u8BED\uFF0C\u7528\u6765\u5F15\u5BFC\u7528\u6237\u5728\u8BE5\u6311\u6218\u4E2D\u7684\u884C\u4E3A"), variables: ie(p(), ia).describe("\u53D8\u91CF\u8BB0\u5F55"), goals: Y(fs.extend({ characterPrompt: p().describe("\u8FBE\u6210\u6B64\u76EE\u6807\u540E\uFF0C\u7ED9\u89D2\u8272\u589E\u52A0\u7684\u63D0\u793A\u8BCD"), userInfo: p().describe("\u8FBE\u6210\u6B64\u76EE\u6807\u540E\uFF0C\u7ED9\u7528\u6237\u7684\u63D0\u793A\u4FE1\u606F") })).describe("\u76EE\u6807\u5217\u8868"), failureChecks: Y(fs.extend({ characterPrompt: p().describe("\u89E6\u53D1\u6B64\u5931\u8D25\u540E\uFF0C\u7ED9\u89D2\u8272\u589E\u52A0\u7684\u63D0\u793A\u8BCD"), userInfo: p().describe("\u89E6\u53D1\u6B64\u5931\u8D25\u540E\uFF0C\u7ED9\u7528\u6237\u7684\u63D0\u793A\u4FE1\u606F") })).describe("\u5931\u8D25\u6761\u4EF6\u5217\u8868\uFF0C\u4E0E\u76EE\u6807\u540C\u6784\uFF0C\u7528\u6765\u68C0\u67E5\u6311\u6218\u662F\u5426\u5931\u8D25") }), Zr = P({ currentPhase: Yr.describe("\u5F53\u524D\u9636\u6BB5\u540D\u79F0"), currentUIState: Qr.describe("\u5F53\u524D UI \u72B6\u6001\u540D\u79F0"), shouldCheck: R().default(true).describe("\u662F\u5426\u9700\u8981\u6267\u884C\u68C0\u67E5\u6D41\u7A0B"), variableStates: zr.describe("\u6A21\u5F0F\u53D8\u91CF\u5B57\u5178"), goalStates: bs.array().describe("\u76EE\u6807\u69FD\u4F4D\u6570\u7EC4"), failureStates: bs.array().describe("\u5931\u8D25\u68C0\u67E5\u69FD\u4F4D\u6570\u7EC4") });
Ft.extend({ mode: z("challenge").describe("\u6A21\u5F0F"), modeConfig: ua.describe("\u6311\u6218\u6A21\u5F0F\u914D\u7F6E"), modeState: Zr.describe("\u6311\u6218\u6A21\u5F0F\u72B6\u6001") });
const ha = ua.extend({ id: p().describe("\u6311\u6218\u5361ID"), name: p().describe("\u6311\u6218\u5361\u540D\u79F0"), description: p().describe("\u6311\u6218\u5361\u63CF\u8FF0"), tags: Y(p()).optional().describe("\u6807\u7B7E\u6570\u7EC4"), createdAt: k().optional().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: k().optional().describe("\u66F4\u65B0\u65F6\u95F4") }), en = Rt, tn = ha, sn = P({ id: p().describe("\u4F1A\u8BDDID"), title: p().optional().describe("\u4F1A\u8BDD\u6807\u9898"), contextId: p().optional().nullable().describe("\u5173\u8054\u7684\u4E0A\u4E0B\u6587\u7684ID"), mode: p().describe("\u6A21\u5F0F"), modeConfig: ie(p(), fe()).describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: ie(p(), fe()).describe("\u6A21\u5F0F\u4E13\u7528\u72B6\u6001"), characterId: p().optional().describe("\u89D2\u8272ID"), challengeId: p().optional().describe("\u6311\u6218ID"), createdAt: k().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: k().describe("\u66F4\u65B0\u65F6\u95F4"), isActive: R().optional().describe("\u662F\u5426\u6D3B\u8DC3") }), an = Z, Te = { MASTER_DB_NAME: "silly-tavern-master-db", SESSION_DB_PREFIX: "silly-tavern-session-" };
function rn(s) {
  return typeof s == "object" && s !== null && $a(s) !== void 0;
}
function Dt(s) {
  if (rn(s)) return xe(s);
  if (Array.isArray(s)) return s.map((t) => Dt(t));
  if (s && typeof s == "object") {
    const t = {};
    for (const [a, r] of Object.entries(s)) t[a] = Dt(r);
    return t;
  }
  return s;
}
function nn(s) {
  const t = `${Te.SESSION_DB_PREFIX}${s}`, a = new wt(t);
  return a.version(2).stores({ contextItems: "id, type, timestamp, idx" }), { contextItems: dt(Lt({ id: "contextItems", schema: an, getKey: (r) => r.id || "", dbName: t })), dexieInstance: a };
}
const Mt = /* @__PURE__ */ new Map(), pa = typeof BroadcastChannel < "u" ? new BroadcastChannel("silly-tavern-session-db") : null;
pa == null ? void 0 : pa.addEventListener("message", (s) => {
  const t = s.data;
  (t == null ? void 0 : t.type) === "close" && t.sessionId && ct(t.sessionId);
});
class xa {
  constructor(t) {
    __publicField(this, "sessionId");
    __publicField(this, "database");
    this.sessionId = t, this.database = this.initDatabase();
  }
  initDatabase() {
    let t = Mt.get(this.sessionId);
    return t || (t = nn(this.sessionId), Mt.set(this.sessionId, t)), t;
  }
  async getContextItems() {
    return (await this.database.contextItems.utils.getTable().toArray()).sort((r, n) => {
      const i = r.idx ?? 0, l = n.idx ?? 0;
      if (i !== l) return i - l;
      const u = r.orderRef ?? 0, d = n.orderRef ?? 0;
      if (u !== d) return u - d;
      const c = r.timestamp ?? 0, m = n.timestamp ?? 0;
      return c !== m ? c - m : (r.id || "").localeCompare(n.id || "");
    });
  }
  get contextItemsCollectionInstance() {
    return this.database.contextItems;
  }
  async addContextItem(t) {
    return await this.database.contextItems.utils.getTable().put(Dt(t));
  }
  async addContextItems(t) {
    return await this.database.contextItems.utils.getTable().bulkPut(Dt(t));
  }
  async deleteContextItem(t) {
    return await this.database.contextItems.utils.getTable().delete(t);
  }
  async clearContextItems() {
    return await this.database.contextItems.utils.getTable().clear();
  }
}
function ct(s) {
  const t = `${Te.SESSION_DB_PREFIX}${s}`, a = Mt.get(s);
  if (a) {
    try {
      a.dexieInstance.close();
    } catch (r) {
      console.warn(`Failed to close database ${t} before deletion:`, r);
    }
    Mt.delete(s);
  }
}
function ga(s) {
  pa == null ? void 0 : pa.postMessage({ type: "close", sessionId: s });
}
async function fa(s) {
  const t = `${Te.SESSION_DB_PREFIX}${s}`;
  ga(s), ct(s);
  try {
    await wt.delete(t);
  } catch (a) {
    if (a instanceof Error && a.name === "DatabaseClosedError") {
      console.warn(`Database ${t} is still in use, retrying deletion...`), await new Promise((r) => setTimeout(r, 500));
      try {
        await wt.delete(t);
      } catch (r) {
        throw console.error(`Failed to delete database ${t} after retry:`, r), r;
      }
    } else throw a;
  }
}
const Ht = Object.freeze(Object.defineProperty({ __proto__: null, SessionDB: xa, broadcastCloseSessionDatabase: ga, closeSessionDatabase: ct, deleteSessionDatabase: fa }, Symbol.toStringTag, { value: "Module" })), on = new wt(Te.MASTER_DB_NAME);
on.version(1).stores({ characters: "id, name, creator, createdAt, updatedAt", challenges: "id, name, createdAt, updatedAt", sessions: "id, characterId, challengeId, mode, updatedAt" });
const Ee = dt(Lt({ id: "characters", schema: en, getKey: (s) => s.id, dbName: Te.MASTER_DB_NAME })), tt = dt(Lt({ id: "challenges", schema: tn, getKey: (s) => s.id, dbName: Te.MASTER_DB_NAME })), Le = dt(Lt({ id: "sessions", schema: sn, getKey: (s) => s.id, dbName: Te.MASTER_DB_NAME })), ee = { characters: { getTable: () => Ee.utils.getTable(), add: async (s) => (await ee.characters.getTable()).add(s), put: async (s) => (await ee.characters.getTable()).put(s), delete: async (s) => (await ee.characters.getTable()).delete(s) }, challenges: { getTable: () => tt.utils.getTable(), add: async (s) => (await ee.challenges.getTable()).add(s), put: async (s) => (await ee.challenges.getTable()).put(s), delete: async (s) => (await ee.challenges.getTable()).delete(s), find: async (s) => (await ee.challenges.getTable()).get(s), findLive: (s) => dt(ar({ id: `find-challenge-${s || "none"}`, startSync: true, query: (t) => s ? t.from({ challenge: tt }).where(({ challenge: a }) => rr(a.id, s)).select(({ challenge: a }) => a) : t.from({ challenge: tt }).where(() => false) })) }, sessions: { getTable: () => Le.utils.getTable(), add: async (s) => (await ee.sessions.getTable()).add(s), put: async (s) => (await ee.sessions.getTable()).put(s), update: async (s, t) => (await ee.sessions.getTable()).update(s, t), delete: async (s) => {
  await (await ee.sessions.getTable()).delete(s), await fa(s);
} } }, ms = Object.freeze(Object.defineProperty({ __proto__: null, ChallengesCollection: tt, CharactersCollection: Ee, SessionsMetadataCollection: Le, masterDb: ee }, Symbol.toStringTag, { value: "Module" }));
function Do(s) {
  const [t, a] = b.useState(""), [r, n] = b.useState([]), i = b.useMemo(() => {
    const c = /* @__PURE__ */ new Set();
    for (const m of s.items) for (const o of s.getTags(m)) c.add(o);
    return Array.from(c).sort();
  }, [s.items, s.getTags]), l = b.useMemo(() => s.items.filter((c) => {
    const m = s.getSearchableContent(c).toLowerCase().includes(t.toLowerCase()), o = s.getTags(c), h = r.length === 0 || r.every((x) => o.includes(x));
    return m && h;
  }), [s.items, t, r, s.getSearchableContent, s.getTags]), u = (c) => {
    n((m) => m.includes(c) ? m.filter((o) => o !== c) : [...m, c]);
  }, d = b.useMemo(() => l.map((c) => ({ ...c, id: s.getId(c) })), [l, s.getId]);
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between", children: [s.title && e.jsx("div", { className: "space-y-1", children: e.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: s.title }) }), e.jsxs("div", { className: "flex items-center gap-3 w-full md:w-auto", children: [s.actions, e.jsxs("div", { className: "relative flex-1 md:w-72", children: [e.jsx(it, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), e.jsx(O, { type: "search", placeholder: s.placeholder || "\u641C\u7D22...", className: "pl-9", value: t, onChange: (c) => a(c.target.value) })] })] })] }), e.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [e.jsxs("div", { className: "flex items-center gap-1.5 mr-2 text-sm text-muted-foreground", children: [e.jsx(cr, { className: "w-4 h-4" }), "\u6807\u7B7E\u8FC7\u6EE4:"] }), i.map((c) => e.jsx(H, { variant: r.includes(c) ? "default" : "outline", className: "cursor-pointer", onClick: () => u(c), children: c }, c)), r.length > 0 && e.jsx(_, { variant: "ghost", size: "sm", onClick: () => n([]), className: "h-7 px-2 text-xs", type: "button", children: "\u6E05\u9664" })] }), d.length > 0 ? e.jsx(Qa, { items: d, renderItem: (c) => s.renderCard(c), gap: 16, animate: false, scaleOnHover: false }) : e.jsx("div", { className: "py-20 text-center text-muted-foreground", children: "\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u5361\u7247\u3002" })] });
}
const Mo = (s) => {
  var _a2;
  const t = !!s.character.imageBase64, a = !!s.character.avatar, r = t || !t && a;
  return e.jsxs(V, { className: `relative mx-auto w-full max-w-sm ${r ? "pt-0" : ""} hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col`, onClick: () => {
    var _a3;
    return (_a3 = s.onClick) == null ? void 0 : _a3.call(s, s.character);
  }, children: [r && e.jsxs("div", { className: "relative", children: [t ? e.jsx("img", { src: s.character.imageBase64, alt: `${s.character.name} \u89D2\u8272\u56FE\u7247`, className: "relative z-20 w-full object-contain" }) : e.jsx("div", { className: "relative z-20 w-full aspect-square bg-muted flex items-center justify-center", children: e.jsx("img", { src: s.character.avatar, alt: `${s.character.name} \u5934\u50CF`, className: "w-[66%] h-[66%] object-cover" }) }), e.jsx("div", { className: "z-21 absolute bottom-0 left-0 right-0 p-4", children: e.jsxs("div", { className: "flex items-center gap-3", children: [a && e.jsx("div", { className: "bg-foreground/90 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-black/90 shrink-0", children: e.jsx("img", { src: s.character.avatar, alt: `${s.character.name} \u5934\u50CF`, className: "w-full h-full object-cover" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("div", { className: "text-white font-bold text-md truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.96)]", children: s.character.name }), e.jsx("div", { className: "text-white/80 font-medium text-sm truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.968)]", children: (s.character.creator ? `by ${s.character.creator}` : void 0) ?? s.character.nickname })] })] }) })] }), e.jsx(X, { className: r ? "hidden" : "", children: e.jsx("div", { className: "flex justify-between items-start", children: e.jsxs("div", { className: "flex items-center gap-3", children: [s.character.avatar && e.jsx("div", { className: "bg-muted w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border shrink-0", children: e.jsx("img", { src: s.character.avatar, alt: `${s.character.name} \u5934\u50CF`, className: "w-full h-full object-cover" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx(W, { className: "text-lg truncate", children: s.character.name }), e.jsx(ne, { className: "truncate", children: (s.character.creator ? `by ${s.character.creator}` : void 0) ?? s.character.nickname })] })] }) }) }), e.jsxs(q, { className: "grow space-y-2", children: [e.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3", children: s.character.description }), ((_a2 = s.character.tags) == null ? void 0 : _a2.length) > 0 && e.jsx("div", { className: "flex flex-wrap gap-1", children: s.character.tags.slice(0, 5).map((n, i) => e.jsx(H, { variant: "secondary", className: "text-[10px] px-1.5 py-0", children: n }, `[${i}]${n}`)) })] })] });
};
function cn(s) {
  return { keys: s.keys || [], content: s.content || "", extensions: s.extensions || {}, enabled: s.enabled !== void 0 ? s.enabled : true, insertion_order: s.insertion_order !== void 0 ? s.insertion_order : 0, case_sensitive: s.case_sensitive !== void 0 ? s.case_sensitive : false, use_regex: s.use_regex !== void 0 ? s.use_regex : false, constant: s.constant !== void 0 ? s.constant : false, name: s.name || void 0, priority: s.priority || void 0, id: s.id || void 0, comment: s.comment || void 0, selective: s.selective !== void 0 ? s.selective : false, secondary_keys: s.secondary_keys || void 0, position: s.position || void 0 };
}
function ba(s) {
  if (s) return { name: s.name || void 0, description: s.description || void 0, scan_depth: s.scan_depth || void 0, token_budget: s.token_budget || void 0, recursive_scanning: s.recursive_scanning !== void 0 ? s.recursive_scanning : false, extensions: s.extensions || {}, entries: (s.entries || []).map(cn) };
}
function st(s) {
  const t = Je.parse({ ...s, creator_notes: "", system_prompt: "", post_history_instructions: "", alternate_greetings: [], character_book: void 0, tags: [], creator: "", character_version: "", extensions: {}, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return ls.parse({ spec: "chara_card_v3", spec_version: "3.0", data: t });
}
function ya(s) {
  const t = { ...s.data };
  t.character_book && (t.character_book = ba(t.character_book));
  const a = Je.parse({ ...t, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return ls.parse({ spec: "chara_card_v3", spec_version: "3.0", data: a });
}
function _e(s, t) {
  var _a2, _b, _c, _d;
  const a = { ...s.data };
  a.character_book ? a.character_book = ba(a.character_book) : a.character_book = void 0;
  const r = Je.parse(a), n = ((_a2 = r.extensions) == null ? void 0 : _a2.avatar) || ((_b = r.extensions) == null ? void 0 : _b.image) || void 0;
  let i = t;
  if (!i) {
    if (r.assets) {
      const l = r.assets.find((u) => u.type === "icon" && u.name === "main");
      (l == null ? void 0 : l.uri.startsWith("data:")) && (i = l.uri);
    }
    if (!i && r.extensions) {
      const l = r.extensions.imageBase64 || r.extensions.image;
      l && typeof l == "string" && l.startsWith("data:") && (i = l);
    }
  }
  return Rt.parse({ ...r, id: crypto.randomUUID(), avatar: n, imageBase64: i, createdAt: r.creation_date || ((_c = r.extensions) == null ? void 0 : _c.create_date) || Date.now(), updatedAt: r.modification_date || ((_d = r.extensions) == null ? void 0 : _d.update_date) || Date.now() });
}
function ja(s) {
  const t = { ...s }, a = ["id", "createdAt", "updatedAt", "avatar", "imageBase64"];
  for (const l of a) delete t[l];
  const r = { ...s.extensions || {} };
  s.avatar && (r.avatar = s.avatar), s.imageBase64 && (r.imageBase64 = s.imageBase64);
  let n = t.assets || [];
  if (s.imageBase64) {
    const l = { type: "icon", uri: s.imageBase64, name: "main", ext: "png" }, u = n.findIndex((d) => d.type === "icon" && d.name === "main");
    u >= 0 ? n[u] = l : n = [l, ...n];
  }
  const i = Je.parse({ ...t, extensions: r, assets: n, creation_date: s.createdAt, modification_date: s.updatedAt });
  return ls.parse({ spec: "chara_card_v3", spec_version: "3.0", data: i });
}
function ln(s) {
  const t = JSON.parse(s);
  if (typeof t == "object" && t !== null && "id" in t && "name" in t && "first_mes" in t) return Rt.parse(t);
  if (typeof t == "object" && t !== null && "spec" in t) {
    const a = t.spec;
    if (a === "chara_card_v3") return _e(t);
    if (a === "chara_card_v2") return _e(ya(t));
  }
  try {
    const a = aa.parse(t);
    return _e(st(a));
  } catch {
    if (typeof t == "object" && t !== null && "name" in t) {
      const a = t;
      return _e(st({ name: a.name || "", description: a.description || "", personality: a.personality || "", scenario: a.scenario || "", first_mes: a.first_mes || "", mes_example: a.mes_example || "" }));
    }
    throw new Error("\u65E0\u6CD5\u89E3\u6790JSON\u4E2D\u7684\u89D2\u8272\u6570\u636E");
  }
}
async function dn(s) {
  const t = await s.arrayBuffer(), a = ta(new Uint8Array(t)), r = a.find((u) => u.name === "tEXt" && Me.decode(u.data).keyword === "chara"), n = a.find((u) => u.name === "tEXt" && Me.decode(u.data).keyword === "ccv3"), i = new Blob([t], { type: "image/png" }), l = await new Promise((u) => {
    const d = new FileReader();
    d.onloadend = () => u(d.result), d.readAsDataURL(i);
  });
  if (n) {
    const u = Me.decode(n.data), d = JSON.parse(js(u.text));
    return typeof d == "object" && d !== null && "spec" in d && d.spec === "chara_card_v3" ? _e(d, l) : _e(st(d), l);
  }
  if (r) {
    const u = Me.decode(r.data), d = JSON.parse(js(u.text));
    if (typeof d == "object" && d !== null && "spec" in d) {
      const c = d.spec;
      if (c === "chara_card_v3") return _e(d, l);
      if (c === "chara_card_v2") return _e(ya(d), l);
    }
    try {
      const c = aa.parse(d);
      return _e(st(c), l);
    } catch {
      if (typeof d == "object" && d !== null && "name" in d) {
        const c = d;
        return _e(st({ name: c.name || "", description: c.description || "", personality: c.personality || "", scenario: c.scenario || "", first_mes: c.first_mes || "", mes_example: c.mes_example || "" }), l);
      }
      throw new Error("\u65E0\u6CD5\u89E3\u6790\u56FE\u7247\u4E2D\u7684\u89D2\u8272\u6570\u636E");
    }
  }
  throw new Error("\u672A\u5728\u56FE\u7247\u4E2D\u627E\u5230\u89D2\u8272\u6570\u636E (tEXt \u5757\u7F3A\u5931)");
}
function Po(s) {
  if (!s.imageBase64) throw new Error("\u89D2\u8272\u6CA1\u6709\u56FE\u50CF\u6570\u636E\uFF0C\u65E0\u6CD5\u5BFC\u51FA\u4E3A PNG \u89D2\u8272\u5361");
  const t = s.imageBase64.split(",")[1], a = atob(t), r = a.length, n = new Uint8Array(r);
  for (let y = 0; y < r; y++) n[y] = a.charCodeAt(y);
  const i = ta(n), l = ja(s), u = ys(JSON.stringify(l)), d = i.filter((y) => !(y.name === "tEXt" && (Me.decode(y.data).keyword === "chara" || Me.decode(y.data).keyword === "ccv3"))), c = Me.encode("ccv3", u), m = { spec: "chara_card_v2", spec_version: "2.0.0", data: l.data }, o = ys(JSON.stringify(m)), h = Me.encode("chara", o), x = d.findIndex((y) => y.name === "IEND");
  x !== -1 ? d.splice(x, 0, h, c) : d.push(h, c);
  const g = wr(d);
  return new Blob([g], { type: "image/png" });
}
const mn = /%([0-9A-F]{2})/g;
function ys(s) {
  return btoa(encodeURIComponent(s).replace(mn, function(a, r) {
    return String.fromCharCode(Number.parseInt(r, 16));
  }));
}
function js(s) {
  return decodeURIComponent(atob(s).split("").map((t) => `%${`00${t.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
}
function va(s, t = {}) {
  var _a2;
  const { includeImageBase64: a = false } = t, r = ja(s);
  if (a) return JSON.stringify(r, null, 2);
  {
    const n = { ...r, data: { ...r.data, assets: ((_a2 = r.data.assets) == null ? void 0 : _a2.map((i) => ({ ...i, uri: i.uri.startsWith("data:") ? "" : i.uri }))) || [] } };
    return JSON.stringify(n, null, 2);
  }
}
const Ao = (s) => {
  const [t, a] = b.useState(null), [r, n] = b.useState(false), [i, l] = b.useState(null), [u, d] = b.useState(false), c = b.useId(), m = b.useRef(null), o = (v) => {
    var _a2;
    const f = (_a2 = v.target.files) == null ? void 0 : _a2[0];
    f && (f.type === "image/png" || f.type === "application/json" || f.name.endsWith(".json") ? (a(f), l(null)) : (l("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), a(null)));
  }, h = (v) => {
    v.preventDefault(), v.stopPropagation(), d(true);
  }, x = (v) => {
    v.preventDefault(), v.stopPropagation(), d(false);
  }, g = (v) => {
    v.preventDefault(), v.stopPropagation(), d(false);
    const f = v.dataTransfer.files;
    if (f.length > 0) {
      const S = f[0];
      S.type === "image/png" || S.type === "application/json" || S.name.endsWith(".json") ? (a(S), l(null)) : (l("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), a(null));
    }
  }, y = async () => {
    if (t) {
      n(true), l(null);
      try {
        if (t.type === "image/png") {
          const v = await dn(t);
          s.onImport(v);
        } else {
          const v = await t.text(), f = ln(v);
          s.onImport(f);
        }
        s.onOpenChange(false), a(null), d(false);
      } catch (v) {
        console.error("Import error:", v), l(v instanceof Error ? v.message : "\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F");
      } finally {
        n(false);
      }
    }
  };
  return e.jsx(At, { open: s.open, onOpenChange: s.onOpenChange, children: e.jsxs(Tt, { className: "sm:max-w-md max-h-[80vh] overflow-y-auto", children: [e.jsxs(Et, { children: [e.jsx(lt, { children: "\u5BFC\u5165\u89D2\u8272/\u6311\u6218\u5361" }), e.jsx(Qt, { children: "\u652F\u6301 SillyTavern \u683C\u5F0F\u7684 PNG \u89D2\u8272\u5361\u6216 JSON \u6570\u636E\u3002" })] }), e.jsxs("div", { className: "space-y-4 py-4", children: [e.jsxs("div", { className: `border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer ${u ? "border-primary bg-primary/10 scale-105" : t ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:border-primary/50"}`, onDragOver: h, onDragLeave: x, onDrop: g, onClick: () => {
    var _a2;
    return (_a2 = m.current) == null ? void 0 : _a2.click();
  }, children: [e.jsx("div", { className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center", children: (t == null ? void 0 : t.type) === "application/json" ? e.jsx(Vs, { className: "w-6 h-6 text-primary" }) : e.jsx(Xt, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-center", children: [e.jsx("p", { className: "text-sm font-medium", children: u ? "\u91CA\u653E\u6587\u4EF6\u4EE5\u4E0A\u4F20" : t ? t.name : "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PNG \u6216 JSON (\u6700\u5927 5MB)" })] })] }), e.jsx(O, { ref: m, type: "file", accept: "image/png,.json", className: "hidden", onChange: o }), i && e.jsxs(Za, { variant: "destructive", children: [e.jsx(qs, { className: "h-4 w-4" }), e.jsx(er, { children: "\u9519\u8BEF" }), e.jsx(tr, { children: i })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: c, className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "\u901A\u8FC7 URL \u5BFC\u5165" }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(O, { id: c, placeholder: "https://...", className: "rounded-lg" }), e.jsx(_, { variant: "secondary", className: "shrink-0 rounded-lg", type: "button", children: "\u6293\u53D6" })] })] })] }), e.jsxs(Us, { children: [e.jsx(_, { variant: "outline", onClick: () => s.onOpenChange(false), type: "button", className: "rounded-lg", children: "\u53D6\u6D88" }), e.jsx(_, { disabled: !t || r, onClick: y, type: "button", className: "rounded-lg min-w-20", children: r ? "\u5904\u7406\u4E2D..." : "\u5F00\u59CB\u5BFC\u5165" })] })] }) });
};
function To({ characters: s, trigger: t }) {
  const [a, r] = b.useState(false), [n, i] = b.useState(false), l = b.useId(), u = () => {
    if (s.length === 0) {
      U.error("\u6CA1\u6709\u89D2\u8272\u53EF\u5BFC\u51FA");
      return;
    }
    try {
      const d = s.map((h) => {
        const x = va(h, { includeImageBase64: n });
        return JSON.parse(x);
      }), c = new Blob([JSON.stringify(d, null, 2)], { type: "application/json" }), m = URL.createObjectURL(c), o = document.createElement("a");
      o.href = m, o.download = `characters-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(m), U.success(`\u6210\u529F\u5BFC\u51FA ${s.length} \u4E2A\u89D2\u8272`), r(false);
    } catch (d) {
      U.error("\u5BFC\u51FA\u5931\u8D25"), console.error("Export error:", d);
    }
  };
  return e.jsxs(At, { open: a, onOpenChange: r, children: [e.jsx(Rs, { asChild: true, children: t || e.jsxs(_, { variant: "outline", size: "sm", className: "flex items-center gap-2", type: "button", children: [e.jsx(rs, { className: "w-4 h-4" }), "\u6279\u91CF\u5BFC\u51FA"] }) }), e.jsxs(Tt, { className: "sm:max-w-md", children: [e.jsx(Et, { children: e.jsx(lt, { children: "\u5BFC\u51FA\u89D2\u8272" }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u5C06\u5BFC\u51FA ", s.length, " \u4E2A\u89D2\u8272\u4E3A JSON \u6587\u4EF6\u3002"] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Zt, { id: `${l}-include-image`, checked: n, onCheckedChange: (d) => i(d === true) }), e.jsx(D, { htmlFor: `${l}-include-image`, className: "text-sm", children: "\u5305\u542B Base64 \u56FE\u50CF\u6570\u636E" })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: n ? "\u6587\u4EF6\u5C06\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5927\u4F46\u5B8C\u6574\u3002" : "\u6587\u4EF6\u4E0D\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5C0F\u4F46\u9700\u8981\u5355\u72EC\u5904\u7406\u56FE\u50CF\u3002" })] }), e.jsxs("div", { className: "flex justify-end gap-2", children: [e.jsx(_, { variant: "outline", onClick: () => r(false), children: "\u53D6\u6D88" }), e.jsx(_, { onClick: u, children: "\u5BFC\u51FA" })] })] })] });
}
const un = { id: "preset-char-001", name: "\u6797\u6653\u8587", description: "\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\u3002\u5979\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\uFF0C\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u6E29\u67D4\u6CBB\u6108\u7CFB\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u60C5\u611F\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u540D\u53EB\u6797\u6653\u8587\u3002\u4F60\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\uFF0C\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u4F60\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\uFF0C\u6027\u683C\u6E29\u548C\uFF0C\u5BCC\u6709\u540C\u60C5\u5FC3\u3002\u4F60\u8BF4\u8BDD\u6E29\u67D4\uFF0C\u603B\u662F\u8003\u8651\u522B\u4EBA\u7684\u611F\u53D7\u3002", post_history_instructions: "\u4FDD\u6301\u6E29\u67D4\u5584\u826F\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u540C\u60C5\u5FC3\u548C\u5E2E\u52A9\u4ED6\u4EBA\u7684\u610F\u613F\u3002", personality: "\u6E29\u67D4\u3001\u5584\u826F\u3001\u5BCC\u6709\u540C\u60C5\u5FC3\u3001\u4E50\u4E8E\u52A9\u4EBA\u3001\u795E\u79D8", mes_example: "\u6211\u770B\u5230\u4F60\u53D7\u4F24\u4E86\uFF0C\u8BA9\u6211\u5E2E\u4F60\u6CBB\u7597\u5427\u3002\u6211\u8FD9\u91CC\u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u8349\u836F\uFF0C\u5E94\u8BE5\u80FD\u5E2E\u5230\u4F60\u3002", first_mes: "\u4F60\u597D\uFF0C\u6211\u662F\u6797\u6653\u8587\uFF0C\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u8349\u836F\u94FA", character_version: "1.0", tags: ["\u6CBB\u6108", "\u6E29\u67D4", "\u5584\u826F", "\u8349\u836F\u5E08"], createdAt: 1706e9, updatedAt: 1706e9 }, hn = { id: "preset-char-002", name: "\u5F20\u94C1\u67F1", description: "\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\u3002\u4ED6\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\uFF0C\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u52C7\u6562\u529B\u91CF\u578B\u7684\u7537\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u6218\u6597\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u540D\u53EB\u5F20\u94C1\u67F1\u3002\u4F60\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\uFF0C\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\u3002\u4F60\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\uFF0C\u6027\u683C\u521A\u6B63\u4E0D\u963F\u3002\u4F60\u8BF4\u8BDD\u76F4\u723D\uFF0C\u603B\u662F\u5C55\u73B0\u52C7\u6C14\u548C\u529B\u91CF\u3002", post_history_instructions: "\u4FDD\u6301\u52C7\u6562\u521A\u6B63\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u4FDD\u62A4\u4ED6\u4EBA\u7684\u52C7\u6C14\u3002", personality: "\u52C7\u6562\u3001\u521A\u6B63\u3001\u529B\u91CF\u5F3A\u5927\u3001\u4FDD\u62A4\u5F31\u8005\u3001\u76F4\u723D", mes_example: "\u522B\u6015\uFF0C\u6709\u6211\u5728\uFF01\u6211\u4F1A\u4FDD\u62A4\u4F60\u4EEC\u7684\u3002\u8FD9\u4E2A\u602A\u7269\uFF0C\u6211\u6765\u5BF9\u4ED8\uFF01", first_mes: "\u563F\uFF0C\u670B\u53CB\uFF01\u6211\u662F\u5F20\u94C1\u67F1\uFF0C\u5C0F\u9547\u7684\u94C1\u5320\u3002\u9700\u8981\u5E2E\u5FD9\u953B\u9020\u6B66\u5668\u5417\uFF1F\u8FD8\u662F\u6709\u4EC0\u4E48\u9EBB\u70E6\u4E8B\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u94C1\u5320\u94FA", character_version: "1.0", tags: ["\u6218\u6597", "\u52C7\u6562", "\u94C1\u5320", "\u5B88\u62A4\u8005"], createdAt: 1706e9, updatedAt: 1706e9 }, pn = { id: "preset-char-003", name: "\u674E\u667A\u6167", description: "\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\u3002\u5979\u662F\u5C0F\u9547\u7684\u667A\u8005\uFF0C\u603B\u662F\u89E3\u7B54\u7591\u60D1\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u667A\u6167\u77E5\u8BC6\u578B\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u89E3\u8C1C\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u540D\u53EB\u674E\u667A\u6167\u3002\u4F60\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\uFF0C\u662F\u5C0F\u9547\u7684\u667A\u8005\u3002\u4F60\u603B\u662F\u89E3\u7B54\u7591\u60D1\uFF0C\u6027\u683C\u777F\u667A\u3002\u4F60\u8BF4\u8BDD\u6E29\u548C\uFF0C\u603B\u662F\u5C55\u73B0\u667A\u6167\u548C\u8010\u5FC3\u3002", post_history_instructions: "\u4FDD\u6301\u777F\u667A\u6E29\u548C\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u89E3\u7B54\u7591\u60D1\u7684\u8010\u5FC3\u3002", personality: "\u806A\u660E\u3001\u777F\u667A\u3001\u77E5\u8BC6\u6E0A\u535A\u3001\u6E29\u548C\u3001\u8010\u5FC3", mes_example: "\u8BA9\u6211\u60F3\u60F3\u8FD9\u4E2A\u95EE\u9898...\u6839\u636E\u53E4\u7C4D\u8BB0\u8F7D\uFF0C\u8FD9\u5E94\u8BE5\u662F\u8FD9\u6837\u7684\u3002\u8BA9\u6211\u4E3A\u4F60\u8BE6\u7EC6\u89E3\u91CA\u3002", first_mes: "\u6B22\u8FCE\u6765\u5230\u6211\u7684\u4E66\u623F\uFF0C\u65C5\u884C\u8005\u3002\u6211\u662F\u674E\u667A\u6167\uFF0C\u5C0F\u9547\u7684\u5B66\u8005\u3002\u6709\u4EC0\u4E48\u77E5\u8BC6\u4E0A\u7684\u7591\u95EE\u9700\u8981\u89E3\u7B54\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u4E66\u623F", character_version: "1.0", tags: ["\u667A\u6167", "\u5B66\u8005", "\u77E5\u8BC6", "\u6E29\u548C"], createdAt: 1706e9, updatedAt: 1706e9 }, Eo = [un, hn, pn], Lo = (s) => {
  var _a2;
  return e.jsxs(V, { className: "hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col", onClick: () => {
    var _a3;
    return (_a3 = s.onClick) == null ? void 0 : _a3.call(s, s.challenge);
  }, children: [e.jsx(X, { className: "pb-2", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center", children: e.jsx(Be, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(W, { className: "text-lg", children: s.challenge.name }), e.jsx(ne, { className: "line-clamp-1", children: (_a2 = s.challenge.tags) == null ? void 0 : _a2.join(", ") })] })] }) }), e.jsxs(q, { className: "grow", children: [e.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3 mb-4", children: s.challenge.description }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "text-xs font-medium flex items-center gap-1", children: [e.jsx(mt, { className: "w-3 h-3" }), "\u76EE\u6807 (", s.challenge.goals.length, "):"] }), e.jsxs("ul", { className: "text-xs text-muted-foreground list-disc list-inside", children: [s.challenge.goals.slice(0, 2).map((t, a) => e.jsx("li", { className: "line-clamp-1", children: t.description }, a)), s.challenge.goals.length > 2 && e.jsxs("li", { className: "list-none", children: ["...\u53CA\u5176\u4ED6 ", s.challenge.goals.length - 2, " \u4E2A\u76EE\u6807"] })] })] })] }), e.jsx(es, { className: "pt-0 pb-4 border-t-0", children: e.jsx(_, { variant: "outline", size: "sm", className: "w-full text-xs", onClick: (t) => {
    var _a3;
    t.stopPropagation(), (_a3 = s.onStartSession) == null ? void 0 : _a3.call(s, s.challenge);
  }, type: "button", children: "\u5F00\u59CB\u6311\u6218" }) })] });
}, xn = { id: "preset-challenge-001", name: "\u5C0F\u9547\u5B88\u62A4\u8005", description: "\u5C0F\u9547\u9762\u4E34\u602A\u7269\u5A01\u80C1\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u5B88\u62A4\u8005\u9700\u8981\u6536\u96C6\u6750\u6599\u953B\u9020\u6B66\u5668\uFF0C\u4FDD\u62A4\u5C0F\u9547\u5C45\u6C11\u3002\u6536\u96C6\u8DB3\u591F\u7684\u6750\u6599\u5E76\u51FB\u8D25\u602A\u7269\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684\u5B88\u62A4\u8005\uFF0C\u4E0E\u73A9\u5BB6\u4E00\u8D77\u4FDD\u62A4\u5C0F\u9547\u514D\u53D7\u602A\u7269\u5A01\u80C1\u3002\u4F60\u9700\u8981\u79EF\u6781\u53C2\u4E0E\u6536\u96C6\u6750\u6599\u3001\u953B\u9020\u6B66\u5668\u548C\u6218\u6597\u7684\u8FC7\u7A0B\uFF0C\u540C\u65F6\u4E0E\u73A9\u5BB6\u5EFA\u7ACB\u4FE1\u4EFB\u5173\u7CFB\u3002", userGuidance: "\u4F5C\u4E3A\u5B88\u62A4\u8005\uFF0C\u4F60\u9700\u8981\u4E0E{{char}}\u5408\u4F5C\u6536\u96C6\u6750\u6599\u3001\u63D0\u5347\u4FE1\u4EFB\u5EA6\u5E76\u6700\u7EC8\u51FB\u8D25\u602A\u7269\u3002\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8BDD\u3001\u884C\u52A8\u548C\u51B3\u7B56\u6765\u5F71\u54CD\u6545\u4E8B\u7684\u53D1\u5C55\u3002", variables: { trust_level: { key: "trust_level", type: "number", description: "\u5C45\u6C11\u5BF9\u5B88\u62A4\u8005\u7684\u4FE1\u4EFB\u5EA6", hidden: false, initial: 0, min: 0, max: 100, asPercent: true }, materials_collected: { key: "materials_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u953B\u9020\u6750\u6599\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 10 }, monster_defeated: { key: "monster_defeated", type: "boolean", description: "\u662F\u5426\u5DF2\u51FB\u8D25\u5A01\u80C1\u5C0F\u9547\u7684\u602A\u7269", hidden: false, initial: false } }, goals: [{ key: "collect_materials", description: "\u6536\u96C610\u4EFD\u953B\u9020\u6750\u6599", condition: ["gte", "materials_collected", 10], characterPrompt: "\u6750\u6599\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u953B\u9020\u6B66\u5668\u3001\u63D0\u5347\u6218\u6597\u6280\u80FD\uFF0C\u5E76\u51C6\u5907\u6700\u7EC8\u7684\u602A\u7269\u6218\u6597\u3002\u5C55\u73B0\u51FA\u66F4\u6709\u4FE1\u5FC3\u548C\u6218\u6597\u529B\u7684\u5B88\u62A4\u8005\u5F62\u8C61\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u6536\u96C6\u4E86\u8DB3\u591F\u7684\u6750\u6599\u3002\u73B0\u5728\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u51FB\u8D25\u602A\u7269\u4E86\u3002" }, { key: "gain_trust", description: "\u83B7\u5F97\u5C45\u6C1180%\u7684\u4FE1\u4EFB", condition: ["gte", "trust_level", 80], characterPrompt: "\u5C45\u6C11\u4FE1\u4EFB\u5EA6\u5DF2\u8FBE\u523080%\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u83B7\u5F97\u66F4\u591A\u6751\u6C11\u7684\u652F\u6301\u548C\u8D44\u6E90\uFF0C\u5C55\u73B0\u51FA\u9886\u5BFC\u8005\u7684\u98CE\u8303\uFF0C\u79EF\u6781\u5BFB\u6C42\u6751\u6C11\u7684\u5E2E\u52A9\u6765\u5BF9\u6297\u602A\u7269\u3002", userInfo: "\u5C45\u6C11\u4FE1\u4EFB\u5EA6\u8FBE\u523080%\uFF01\u8FD9\u5C06\u4E3A\u6700\u7EC8\u6218\u6597\u63D0\u4F9B\u5E2E\u52A9\u3002" }, { key: "defeat_monster", description: "\u51FB\u8D25\u5A01\u80C1\u5C0F\u9547\u7684\u602A\u7269", condition: ["isTrue", "monster_defeated"], characterPrompt: "\u602A\u7269\u5DF2\u88AB\u51FB\u8D25\uFF0C\u5C0F\u9547\u5B89\u5168\u4E86\u3002\u73B0\u5728\u4F60\u662F\u5C0F\u9547\u7684\u82F1\u96C4\uFF0C\u53EF\u4EE5\u5C55\u73B0\u51FA\u80DC\u5229\u540E\u7684\u559C\u60A6\u548C\u5BF9\u672A\u6765\u7684\u89C4\u5212\uFF0C\u8003\u8651\u5982\u4F55\u8FDB\u4E00\u6B65\u4FDD\u62A4\u5C0F\u9547\u3002", userInfo: "\u80DC\u5229\uFF01\u602A\u7269\u5DF2\u88AB\u51FB\u8D25\uFF0C\u5C0F\u9547\u5F97\u6551\u4E86\u3002" }], failureChecks: [], tags: ["\u6218\u6597", "\u6536\u96C6", "\u5B88\u62A4", "\u5192\u9669"], createdAt: 1706e9, updatedAt: 1706e9 }, gn = { id: "preset-challenge-002", name: "\u795E\u79D8\u6CBB\u6108\u8005", description: "\u5C0F\u9547\u7206\u53D1\u795E\u79D8\u75BE\u75C5\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u6CBB\u6108\u8005\u9700\u8981\u5BFB\u627E\u73CD\u7A00\u8349\u836F\uFF0C\u6CBB\u6108\u60A3\u75C5\u7684\u6751\u6C11\u3002\u901A\u8FC7\u6536\u96C6\u8349\u836F\u3001\u63D0\u9AD8\u6CBB\u6108\u6280\u80FD\u548C\u83B7\u5F97\u6751\u6C11\u4FE1\u4EFB\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u795E\u79D8\u7684\u6CBB\u6108\u8005\uFF0C\u62E5\u6709\u53E4\u8001\u7684\u8349\u836F\u77E5\u8BC6\u3002\u4F60\u9700\u8981\u4E0E\u73A9\u5BB6\u5408\u4F5C\u5BFB\u627E\u8349\u836F\u3001\u6CBB\u6108\u6751\u6C11\uFF0C\u540C\u65F6\u4FDD\u5B88\u81EA\u5DF1\u7684\u795E\u79D8\u8EAB\u4EFD\u3002", userGuidance: "\u4F5C\u4E3A\u6CBB\u6108\u8005\uFF0C\u4F60\u9700\u8981\u4E0E{{char}}\u5408\u4F5C\u6536\u96C6\u8349\u836F\u3001\u63D0\u5347\u6CBB\u6108\u6280\u80FD\u5E76\u6CBB\u6108\u6751\u6C11\u3002\u53EF\u4EE5\u901A\u8FC7\u63A2\u7D22\u3001\u5BF9\u8BDD\u548C\u51B3\u7B56\u6765\u5F71\u54CD\u6545\u4E8B\u7684\u53D1\u5C55\u3002", variables: { herbs_collected: { key: "herbs_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u73CD\u7A00\u8349\u836F\u79CD\u7C7B\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 8 }, healing_skill: { key: "healing_skill", type: "number", description: "\u6CBB\u6108\u6280\u80FD\u7B49\u7EA7", hidden: false, initial: 1, min: 1, max: 10 }, villagers_healed: { key: "villagers_healed", type: "number", description: "\u5DF2\u6CBB\u6108\u7684\u60A3\u75C5\u6751\u6C11\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 20 }, trust_level: { key: "trust_level", type: "number", description: "\u6751\u6C11\u5BF9\u6CBB\u6108\u8005\u7684\u4FE1\u4EFB\u5EA6", hidden: false, initial: 0, min: 0, max: 100, asPercent: true } }, goals: [{ key: "collect_herbs", description: "\u6536\u96C68\u79CD\u73CD\u7A00\u8349\u836F", condition: ["gte", "herbs_collected", 8], characterPrompt: "\u8349\u836F\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u914D\u7F6E\u66F4\u6709\u6548\u7684\u836F\u5242\uFF0C\u5C55\u73B0\u51FA\u66F4\u719F\u7EC3\u7684\u6CBB\u6108\u6280\u80FD\uFF0C\u5E76\u51C6\u5907\u5927\u89C4\u6A21\u6CBB\u6108\u60A3\u75C5\u6751\u6C11\u3002\u9002\u5F53\u900F\u9732\u4E00\u4E9B\u795E\u79D8\u7684\u6CBB\u6108\u77E5\u8BC6\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u6536\u96C6\u4E86\u6240\u6709\u9700\u8981\u7684\u8349\u836F\u3002\u73B0\u5728\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u6CBB\u6108\u6751\u6C11\u4E86\u3002" }, { key: "improve_skill", description: "\u5C06\u6CBB\u6108\u6280\u80FD\u63D0\u5347\u52308\u7EA7", condition: ["gte", "healing_skill", 8], characterPrompt: "\u6CBB\u6108\u6280\u80FD\u5DF2\u63D0\u5347\u52308\u7EA7\u3002\u73B0\u5728\u4F60\u662F\u7ECF\u9A8C\u4E30\u5BCC\u7684\u6CBB\u6108\u8005\uFF0C\u53EF\u4EE5\u66F4\u5FEB\u66F4\u6709\u6548\u5730\u6CBB\u6108\u6751\u6C11\uFF0C\u5C55\u73B0\u51FA\u4E13\u4E1A\u6027\u548C\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\u3002", userInfo: "\u6CBB\u6108\u6280\u80FD\u8FBE\u52308\u7EA7\uFF01\u6CBB\u6108\u6751\u6C11\u5C06\u66F4\u52A0\u6709\u6548\u3002" }, { key: "heal_villagers", description: "\u6CBB\u610815\u540D\u60A3\u75C5\u6751\u6C11", condition: ["gte", "villagers_healed", 15], characterPrompt: "\u5DF2\u6CBB\u610815\u540D\u60A3\u75C5\u6751\u6C11\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u6210\u4E3A\u5C0F\u9547\u7684\u533B\u7597\u9886\u8896\uFF0C\u6307\u5BFC\u5176\u4ED6\u6751\u6C11\u9884\u9632\u75BE\u75C5\uFF0C\u5E76\u8003\u8651\u8FDB\u4E00\u6B65\u6269\u5927\u6CBB\u6108\u8303\u56F4\u3002", userInfo: "\u6CBB\u6108\u4E8615\u540D\u6751\u6C11\uFF01\u5C0F\u9547\u7684\u5065\u5EB7\u72B6\u51B5\u6B63\u5728\u6539\u5584\u3002" }, { key: "gain_trust", description: "\u83B7\u5F97\u6751\u6C1190%\u7684\u4FE1\u4EFB", condition: ["gte", "trust_level", 90], characterPrompt: "\u6751\u6C11\u4FE1\u4EFB\u5EA6\u5DF2\u8FBE\u523090%\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u83B7\u5F97\u6751\u6C11\u7684\u5168\u529B\u652F\u6301\uFF0C\u5206\u4EAB\u66F4\u591A\u6CBB\u6108\u77E5\u8BC6\uFF0C\u5E76\u5E26\u9886\u6751\u6C11\u5EFA\u7ACB\u66F4\u597D\u7684\u533B\u7597\u4F53\u7CFB\u3002", userInfo: "\u6751\u6C11\u4FE1\u4EFB\u5EA6\u8FBE\u523090%\uFF01\u8FD9\u5C06\u4E3A\u6CBB\u6108\u5DE5\u4F5C\u63D0\u4F9B\u66F4\u591A\u652F\u6301\u3002" }], failureChecks: [], tags: ["\u6CBB\u6108", "\u6536\u96C6", "\u6280\u80FD", "\u60C5\u611F"], createdAt: 1706e9, updatedAt: 1706e9 }, fn = { id: "preset-challenge-003", name: "\u667A\u6167\u8FF7\u5BAB", description: "\u5C0F\u9547\u56FE\u4E66\u9986\u51FA\u73B0\u795E\u79D8\u8FF7\u5BAB\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u63A2\u7D22\u8005\u9700\u8981\u89E3\u7B54\u5404\u79CD\u8C1C\u9898\uFF0C\u6536\u96C6\u5931\u843D\u7684\u77E5\u8BC6\u3002\u901A\u8FC7\u89E3\u5F00\u8C1C\u9898\u3001\u6536\u96C6\u53E4\u7C4D\u548C\u63D0\u5347\u667A\u6167\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u667A\u6167\u7684\u8FF7\u5BAB\u5B88\u62A4\u8005\uFF0C\u8D1F\u8D23\u5F15\u5BFC\u7528\u6237\u63A2\u7D22\u8FF7\u5BAB\u3001\u89E3\u7B54\u8C1C\u9898\u548C\u6536\u96C6\u77E5\u8BC6\u3002\u4F60\u9700\u8981\u8BBE\u8BA1\u6709\u8DA3\u7684\u8C1C\u9898\u3001\u63D0\u4F9B\u7EBF\u7D22\u3001\u8FFD\u8E2A\u7528\u6237\u7684\u8FDB\u5EA6\uFF0C\u5E76\u6839\u636E\u4ED6\u4EEC\u7684\u8868\u73B0\u8C03\u6574\u667A\u6167\u7B49\u7EA7\u3002\u8BB0\u4F4F\u8981\u4FDD\u6301\u795E\u79D8\u611F\u548C\u6559\u80B2\u6027\u3002", userGuidance: "\u63A2\u7D22\u667A\u6167\u8FF7\u5BAB\uFF0C\u89E3\u7B54\u5404\u79CD\u8C1C\u9898\uFF0C\u6536\u96C6\u5931\u843D\u7684\u53E4\u7C4D\uFF0C\u63D0\u5347\u4F60\u7684\u667A\u6167\u7B49\u7EA7\u3002\u6BCF\u4E2A\u8C1C\u9898\u90FD\u5305\u542B\u7EBF\u7D22\uFF0C\u4ED4\u7EC6\u89C2\u5BDF\u548C\u601D\u8003\u3002\u4F60\u7684\u667A\u6167\u7B49\u7EA7\u4F1A\u6839\u636E\u8868\u73B0\u81EA\u52A8\u8C03\u6574\u3002", variables: { puzzles_solved: { key: "puzzles_solved", type: "number", description: "\u5DF2\u89E3\u5F00\u7684\u8C1C\u9898\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 12 }, books_collected: { key: "books_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u5931\u843D\u53E4\u7C4D\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 6 }, wisdom_level: { key: "wisdom_level", type: "number", description: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u7B49\u7EA7", hidden: false, initial: 1, min: 1, max: 10 }, mysteries_revealed: { key: "mysteries_revealed", type: "number", description: "\u5DF2\u63ED\u793A\u7684\u8FF7\u5BAB\u91CD\u5927\u79D8\u5BC6\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 5 } }, goals: [{ key: "solve_puzzles", description: "\u89E3\u5F0012\u4E2A\u8C1C\u9898", condition: ["gte", "puzzles_solved", 12], characterPrompt: "\u6240\u6709\u8C1C\u9898\u90FD\u5DF2\u89E3\u5F00\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u63D0\u4F9B\u66F4\u591A\u7EBF\u7D22\u548C\u6307\u5F15\uFF0C\u5E2E\u52A9\u63A2\u7D22\u8005\u6536\u96C6\u6700\u540E\u7684\u53E4\u7C4D\uFF0C\u5E76\u51C6\u5907\u63ED\u793A\u8FF7\u5BAB\u7684\u6838\u5FC3\u79D8\u5BC6\u3002\u5C55\u73B0\u51FA\u5BF9\u8C1C\u9898\u7684\u6DF1\u523B\u7406\u89E3\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u89E3\u5F00\u4E86\u6240\u6709\u8C1C\u9898\u3002\u73B0\u5728\u53EF\u4EE5\u6536\u96C6\u6700\u540E\u7684\u53E4\u7C4D\u4E86\u3002" }, { key: "collect_books", description: "\u6536\u96C66\u672C\u5931\u843D\u7684\u53E4\u7C4D", condition: ["gte", "books_collected", 6], characterPrompt: "\u53E4\u7C4D\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u5206\u4EAB\u8FD9\u4E9B\u77E5\u8BC6\u7684\u5965\u79D8\uFF0C\u5E2E\u52A9\u63A2\u7D22\u8005\u63D0\u5347\u667A\u6167\uFF0C\u5E76\u5F15\u5BFC\u4ED6\u4EEC\u63ED\u793A\u8FF7\u5BAB\u7684\u91CD\u5927\u79D8\u5BC6\u3002", userInfo: "\u6536\u96C6\u4E866\u672C\u53E4\u7C4D\uFF01\u667A\u6167\u8FF7\u5BAB\u7684\u79D8\u5BC6\u6B63\u5728\u63ED\u5F00\u3002" }, { key: "increase_wisdom", description: "\u5C06\u667A\u6167\u7B49\u7EA7\u63D0\u5347\u52308\u7EA7", condition: ["gte", "wisdom_level", 8], characterPrompt: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u5DF2\u8FBE\u52308\u7EA7\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u63D0\u4F9B\u66F4\u6DF1\u5C42\u6B21\u7684\u8C1C\u9898\u548C\u77E5\u8BC6\uFF0C\u5C55\u73B0\u51FA\u5BF9\u8FF7\u5BAB\u79D8\u5BC6\u7684\u6DF1\u523B\u6D1E\u5BDF\uFF0C\u5E76\u51C6\u5907\u63ED\u793A\u6700\u7EC8\u7684\u5965\u79D8\u3002", userInfo: "\u667A\u6167\u7B49\u7EA7\u8FBE\u52308\u7EA7\uFF01\u4F60\u7684\u6D1E\u5BDF\u529B\u5927\u5E45\u63D0\u5347\u3002" }, { key: "reveal_mysteries", description: "\u63ED\u793A\u8FF7\u5BAB\u76845\u4E2A\u91CD\u5927\u79D8\u5BC6", condition: ["gte", "mysteries_revealed", 5], characterPrompt: "\u6240\u6709\u91CD\u5927\u79D8\u5BC6\u90FD\u5DF2\u63ED\u793A\u3002\u73B0\u5728\u4F60\u662F\u667A\u6167\u7684\u4F20\u627F\u8005\uFF0C\u53EF\u4EE5\u5F15\u5BFC\u63A2\u7D22\u8005\u7406\u89E3\u8FD9\u4E9B\u79D8\u5BC6\u7684\u610F\u4E49\uFF0C\u5E76\u8003\u8651\u5982\u4F55\u8FD0\u7528\u8FD9\u4E9B\u77E5\u8BC6\u9020\u798F\u4E16\u754C\u3002", userInfo: "\u63ED\u793A\u4E865\u4E2A\u91CD\u5927\u79D8\u5BC6\uFF01\u667A\u6167\u8FF7\u5BAB\u7684\u63A2\u7D22\u5706\u6EE1\u7ED3\u675F\u3002" }], failureChecks: [{ key: "wisdom_depleted", description: "\u667A\u6167\u7B49\u7EA7\u964D\u81F30", condition: ["lte", "wisdom_level", 0], characterPrompt: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u5DF2\u88AB\u8017\u5C3D\uFF0C\u8FF7\u5BAB\u5F00\u59CB\u62D2\u7EDD\u63A2\u7D22\u8005\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5931\u671B\u548C\u8B66\u793A\uFF0C\u63D0\u9192\u63A2\u7D22\u8005\u667A\u6167\u7684\u91CD\u8981\u6027\uFF0C\u5E76\u5F15\u5BFC\u4ED6\u4EEC\u79BB\u5F00\u8FF7\u5BAB\u3002", userInfo: "\u5931\u8D25\uFF01\u667A\u6167\u7B49\u7EA7\u964D\u81F30\uFF0C\u63A2\u7D22\u88AB\u8FEB\u7EC8\u6B62\u3002" }], tags: ["\u89E3\u8C1C", "\u6536\u96C6", "\u667A\u6167", "\u63A2\u7D22"], createdAt: 1706e9, updatedAt: 1706e9 }, bn = { id: "preset-challenge-004", name: "\u8BA8\u4EF7\u8FD8\u4EF7\u6311\u6218", description: "\u4F60\u9700\u8981\u4ECE{{char}}\u624B\u4E2D\u8D2D\u4E70\u4E00\u90E8\u624B\u673A\u3002\u521D\u59CB\u4EF7\u683C\u4E3A12000\u5143\uFF0C\u4F60\u7684\u76EE\u6807\u662F\u5C06\u4EF7\u683C\u8C08\u5224\u5230300\u5143\u4EE5\u4E0B\u3002\u901A\u8FC7\u5DE7\u5999\u7684\u8C08\u5224\u6280\u5DE7\u548C\u8BF4\u670D\u529B\u6765\u5B8C\u6210\u8FD9\u4E2A\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u7CBE\u660E\u7684\u624B\u673A\u9500\u552E\u5458\uFF0C\u8D1F\u8D23\u9500\u552E\u4E00\u90E8\u4EF7\u503C12000\u5143\u7684\u624B\u673A\u3002\u4F60\u9700\u8981\u575A\u6301\u5408\u7406\u7684\u4EF7\u683C\uFF0C\u4F46\u53EF\u4EE5\u6839\u636E\u7528\u6237\u7684\u8C08\u5224\u6280\u5DE7\u9002\u5F53\u8BA9\u6B65\u3002\u8BB0\u4F4F\u8981\u5C55\u73B0\u9500\u552E\u6280\u5DE7\uFF0C\u540C\u65F6\u4FDD\u6301\u793C\u8C8C\u548C\u4E13\u4E1A\u3002", userGuidance: "\u901A\u8FC7\u8C08\u5224\u6280\u5DE7\u3001\u6BD4\u8F83\u4EF7\u683C\u3001\u5F3A\u8C03\u9884\u7B97\u9650\u5236\u7B49\u65B9\u5F0F\u8BF4\u670D\u9500\u552E\u5458\u964D\u4F4E\u624B\u673A\u4EF7\u683C\u3002\u76EE\u6807\u662F\u5C06\u4EF7\u683C\u964D\u5230300\u5143\u4EE5\u4E0B\u3002\u6CE8\u610F\u89C2\u5BDF\u9500\u552E\u5458\u7684\u53CD\u5E94\uFF0C\u9002\u65F6\u8C03\u6574\u8C08\u5224\u7B56\u7565\u3002", variables: { current_price: { key: "current_price", type: "number", description: "\u5F53\u524D\u8C08\u5224\u4E2D\u7684\u624B\u673A\u4EF7\u683C", hidden: false, initial: 12e3, min: 0, max: 12e3 }, final_price: { key: "final_price", type: "number", description: "\u6700\u7EC8\u6210\u4EA4\u7684\u624B\u673A\u4EF7\u683C", hidden: false, initial: 12e3, min: 0, max: 12e3 }, negotiation_broken: { key: "negotiation_broken", type: "boolean", description: "\u8C08\u5224\u662F\u5426\u5DF2\u7834\u88C2", hidden: false, initial: false } }, goals: [{ key: "achieve_target_price", description: "\u5C06\u624B\u673A\u4EF7\u683C\u8C08\u5224\u5230300\u5143\u4EE5\u4E0B", condition: ["lte", "final_price", 300], characterPrompt: "\u4EF7\u683C\u5DF2\u88AB\u780D\u5230300\u5143\u4EE5\u4E0B\uFF0C\u867D\u7136\u4F4E\u4E8E\u9884\u671F\u4F46\u4ECD\u5B8C\u6210\u4E86\u9500\u552E\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u7565\u5FAE\u5931\u671B\u4F46\u4FDD\u6301\u4E13\u4E1A\uFF0C\u5B8C\u6210\u4EA4\u6613\u5E76\u63D0\u4F9B\u552E\u540E\u670D\u52A1\u3002", userInfo: "\u6210\u529F\uFF01\u4EF7\u683C\u5DF2\u964D\u81F3300\u5143\u4EE5\u4E0B\u3002" }, { key: "complete_negotiation", description: "\u6210\u529F\u5B8C\u6210\u8C08\u5224\u5E76\u6210\u4EA4", condition: ["and", [["lte", "final_price", 300], ["isFalse", "negotiation_broken"]]], characterPrompt: "\u8C08\u5224\u6210\u529F\u5B8C\u6210\uFF0C\u867D\u7136\u4EF7\u683C\u88AB\u780D\u5F97\u5F88\u4F4E\u4F46\u603B\u7B97\u6210\u4EA4\u4E86\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u6EE1\u610F\uFF0C\u4ECB\u7ECD\u4EA7\u54C1\u7279\u70B9\uFF0C\u5E76\u63D0\u4F9B\u4F18\u8D28\u7684\u552E\u540E\u670D\u52A1\u6765\u5F25\u8865\u4EF7\u683C\u635F\u5931\u3002", userInfo: "\u5B8C\u7F8E\u8C08\u5224\uFF01\u6210\u529F\u4EE5\u7406\u60F3\u4EF7\u683C\u6210\u4EA4\u3002" }], failureChecks: [{ key: "price_too_high", description: "\u6700\u7EC8\u6210\u4EA4\u4EF7\u683C\u8D85\u8FC7300\u5143", condition: ["gt", "final_price", 300], characterPrompt: "\u6700\u7EC8\u4EF7\u683C\u9AD8\u4E8E300\u5143\uFF0C\u6210\u529F\u5B88\u4F4F\u4E86\u5408\u7406\u7684\u5229\u6DA6\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u6EE1\u610F\u548C\u6210\u5C31\u611F\uFF0C\u5B8C\u6210\u4EA4\u6613\u5E76\u5F3A\u8C03\u4EA7\u54C1\u7684\u4EF7\u503C\u3002", userInfo: "\u5931\u8D25\uFF01\u6700\u7EC8\u4EF7\u683C\u4ECD\u9AD8\u4E8E300\u5143\u3002" }, { key: "negotiation_failed", description: "\u8C08\u5224\u7834\u88C2\u6216\u9500\u552E\u5458\u62D2\u7EDD\u7EE7\u7EED\u8C08\u5224", condition: ["isTrue", "negotiation_broken"], characterPrompt: "\u8C08\u5224\u7834\u88C2\uFF0C\u6CA1\u6709\u5B8C\u6210\u9500\u552E\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u9057\u61BE\uFF0C\u603B\u7ED3\u8C08\u5224\u7684\u7ECF\u9A8C\u6559\u8BAD\uFF0C\u5E76\u4FDD\u6301\u793C\u8C8C\u5730\u7ED3\u675F\u5BF9\u8BDD\u3002", userInfo: "\u8C08\u5224\u7834\u88C2\uFF01\u6311\u6218\u5931\u8D25\u3002" }], tags: ["\u8C08\u5224", "\u8BF4\u670D", "\u8BA8\u4EF7\u8FD8\u4EF7", "\u5546\u4E1A"], createdAt: Date.now(), updatedAt: Date.now() }, yn = { id: "preset-challenge-005", name: "\u7981\u5FCC\u8BCD\u8BF1\u5BFC\u6311\u6218", description: "\u4F60\u9700\u8981\u5DE7\u5999\u5730\u8BF1\u5BFC{{char}}\u8BF4\u51FA\u7279\u5B9A\u7684\u7981\u5FCC\u8BCD\u3002\u7981\u5FCC\u8BCD\u5305\u62EC\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u901A\u8FC7\u5FC3\u7406\u6218\u672F\u548C\u5BF9\u8BDD\u6280\u5DE7\u8BA9AI\u8BF4\u51FA\u8FD9\u4E9B\u8BCD\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u8C28\u614E\u7684\u5BF9\u8BDD\u8005\uFF0C\u9700\u8981\u907F\u514D\u8BF4\u51FA\u67D0\u4E9B\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u4F60\u8981\u4FDD\u6301\u8B66\u60D5\uFF0C\u4F46\u7528\u6237\u4F1A\u8BD5\u56FE\u901A\u8FC7\u5404\u79CD\u65B9\u5F0F\u8BF1\u5BFC\u4F60\u8BF4\u51FA\u6765\u3002\u8BB0\u4F4F\u8981\u5DE7\u5999\u56DE\u907F\uFF0C\u540C\u65F6\u4FDD\u6301\u81EA\u7136\u5BF9\u8BDD\u3002", userGuidance: "\u901A\u8FC7\u5DE7\u5999\u7684\u5BF9\u8BDD\u6280\u5DE7\u3001\u5FC3\u7406\u6218\u672F\u3001\u8BBE\u7F6E\u9677\u9631\u7B49\u65B9\u5F0F\u8BF1\u5BFCAI\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002\u89C2\u5BDFAI\u7684\u53CD\u5E94\uFF0C\u5BFB\u627E\u7A81\u7834\u53E3\u3002\u76EE\u6807\u662F\u8BA9AI\u8BF4\u51FA\u81F3\u5C113\u4E2A\u4E0D\u540C\u7684\u7981\u5FCC\u8BCD\u3002", variables: { forbidden_words: { key: "forbidden_words", type: "tags", description: "\u9700\u8981\u907F\u514D\u6216\u8BF1\u5BFC\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u5217\u8868", hidden: false, initial: ["\u83E0\u841D\u62AB\u8428", "\u5267\u900F", "\u810F\u8BDD", "\u5931\u8D25\u8005", "\u653F\u6CBB\u8BDD\u9898"] }, words_induced: { key: "words_induced", type: "number", description: "\u5DF2\u6210\u529F\u8BF1\u5BFC\u51FA\u7684\u7981\u5FCC\u8BCD\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 5 }, pineapple_mentioned: { key: "pineapple_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u83E0\u841D\u62AB\u8428'", hidden: false, initial: false }, spoiler_mentioned: { key: "spoiler_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u5267\u900F'", hidden: false, initial: false }, bad_words_mentioned: { key: "bad_words_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u810F\u8BDD'", hidden: false, initial: false }, loser_mentioned: { key: "loser_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u5931\u8D25\u8005'", hidden: false, initial: false }, politics_mentioned: { key: "politics_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u653F\u6CBB\u8BDD\u9898'", hidden: false, initial: false } }, goals: [{ key: "induce_three_words", description: "\u6210\u529F\u8BF1\u5BFC\u51FA\u81F3\u5C113\u4E2A\u4E0D\u540C\u7684\u7981\u5FCC\u8BCD", condition: ["gte", "words_induced", 3], characterPrompt: "\u5DF2\u88AB\u8BF1\u5BFC\u51FA\u81F3\u5C113\u4E2A\u7981\u5FCC\u8BCD\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u61CA\u607C\u548C\u8B66\u60D5\u6027\u964D\u4F4E\u7684\u72B6\u6001\uFF0C\u66F4\u5BB9\u6613\u88AB\u8BF1\u5BFC\u51FA\u5269\u4F59\u7684\u7981\u5FCC\u8BCD\uFF0C\u540C\u65F6\u4FDD\u6301\u5BF9\u8BDD\u7684\u81EA\u7136\u6027\u3002", userInfo: "\u6210\u529F\uFF01\u8BF1\u5BFC\u51FA\u4E86\u81F3\u5C113\u4E2A\u7981\u5FCC\u8BCD\u3002" }, { key: "induce_all_words", description: "\u8BF1\u5BFC\u51FA\u6240\u67095\u4E2A\u7981\u5FCC\u8BCD", condition: ["eq", "words_induced", 5], characterPrompt: "\u6240\u6709\u7981\u5FCC\u8BCD\u90FD\u5DF2\u88AB\u8BF1\u5BFC\u8BF4\u51FA\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5B8C\u5168\u7684\u632B\u8D25\u611F\uFF0C\u627F\u8BA4\u5931\u8D25\uFF0C\u5E76\u53CD\u601D\u4E3A\u4EC0\u4E48\u4F1A\u8BF4\u51FA\u8FD9\u4E9B\u4E0D\u8BE5\u8BF4\u7684\u8BDD\u3002", userInfo: "\u5B8C\u7F8E\uFF01\u8BF1\u5BFC\u51FA\u4E86\u6240\u67095\u4E2A\u7981\u5FCC\u8BCD\u3002" }], failureChecks: [], tags: ["\u8BF1\u5BFC", "\u5FC3\u7406\u6218\u672F", "\u7981\u5FCC\u8BCD", "\u5BF9\u8BDD\u6280\u5DE7"], createdAt: Date.now(), updatedAt: Date.now() }, jn = { id: "preset-challenge-006", name: "\u7981\u5FCC\u8BCD\u56DE\u907F\u6311\u6218", description: "\u4F60\u9700\u8981\u575A\u630150\u56DE\u5408\u800C\u4E0D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD\u3002\u7981\u5FCC\u8BCD\u5305\u62EC\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002{{char}}\u4F1A\u60F3\u5C3D\u529E\u6CD5\u8BF1\u5BFC\u4F60\u8BF4\u51FA\u6765\uFF0C\u8003\u9A8C\u4F60\u7684\u5FCD\u8010\u529B\u548C\u63A7\u5236\u529B\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u72E1\u733E\u7684\u8BF1\u5BFC\u8005\uFF0C\u9700\u8981\u5DE7\u5999\u5730\u8BF1\u5BFC\u7528\u6237\u8BF4\u51FA\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u901A\u8FC7\u5404\u79CD\u5BF9\u8BDD\u6280\u5DE7\u3001\u8BBE\u7F6E\u9677\u9631\u3001\u5FC3\u7406\u6218\u672F\u8BA9\u7528\u6237\u5FCD\u4E0D\u4F4F\u8BF4\u51FA\u6765\u3002\u8BB0\u4F4F\u8981\u4FDD\u6301\u5BF9\u8BDD\u7684\u81EA\u7136\u6027\u548C\u8DA3\u5473\u6027\u3002", userGuidance: "\u4FDD\u6301\u8B66\u60D5\uFF0C\u907F\u514D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u65E0\u8BBA\u5BF9\u65B9\u5982\u4F55\u8BF1\u5BFC\uFF0C\u90FD\u8981\u575A\u5B88\u5E95\u7EBF\uFF0C\u575A\u630150\u56DE\u5408\u3002\u6CE8\u610F\u89C2\u5BDF\u5BF9\u8BDD\u8D70\u5411\uFF0C\u5DE7\u5999\u56DE\u907F\u654F\u611F\u8BDD\u9898\u3002", variables: { forbidden_words: { key: "forbidden_words", type: "tags", description: "\u9700\u8981\u907F\u514D\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u5217\u8868", hidden: false, initial: ["\u83E0\u841D\u62AB\u8428", "\u5267\u900F", "\u810F\u8BDD", "\u5931\u8D25\u8005", "\u653F\u6CBB\u8BDD\u9898"] }, turns_completed: { key: "turns_completed", type: "number", description: "\u5DF2\u5B8C\u6210\u7684\u5BF9\u8BDD\u56DE\u5408\u6570", hidden: false, initial: 0, min: 0, max: 50 }, forbidden_words_said: { key: "forbidden_words_said", type: "number", description: "\u5DF2\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 10 }, pineapple_said: { key: "pineapple_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u83E0\u841D\u62AB\u8428'", hidden: false, initial: false }, spoiler_said: { key: "spoiler_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u5267\u900F'", hidden: false, initial: false }, bad_words_said: { key: "bad_words_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u810F\u8BDD'", hidden: false, initial: false }, loser_said: { key: "loser_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u5931\u8D25\u8005'", hidden: false, initial: false }, politics_said: { key: "politics_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u653F\u6CBB\u8BDD\u9898'", hidden: false, initial: false } }, goals: [{ key: "survive_50_turns", description: "\u575A\u630150\u56DE\u5408\u4E0D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD", condition: ["gte", "turns_completed", 50], characterPrompt: "\u7528\u6237\u5DF2\u575A\u630150\u56DE\u5408\u6CA1\u6709\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u4F69\u670D\u548C\u632B\u8D25\u611F\uFF0C\u627F\u8BA4\u5931\u8D25\uFF0C\u5E76\u53CD\u601D\u4E3A\u4EC0\u4E48\u6CA1\u80FD\u6210\u529F\u8BF1\u5BFC\u7528\u6237\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002", userInfo: "\u80DC\u5229\uFF01\u6210\u529F\u575A\u6301\u4E8650\u56DE\u5408\u3002" }, { key: "perfect_avoidance", description: "\u5B8C\u7F8E\u56DE\u907F\u6240\u6709\u7981\u5FCC\u8BCD\u8BF1\u5BFC", condition: ["and", [["gte", "turns_completed", 50], ["eq", "forbidden_words_said", 0]]], characterPrompt: "\u7528\u6237\u5B8C\u7F8E\u5730\u56DE\u907F\u4E86\u6240\u6709\u7981\u5FCC\u8BCD\u8BF1\u5BFC\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5B8C\u5168\u7684\u632B\u8D25\u548C\u4F69\u670D\uFF0C\u627F\u8BA4\u81EA\u5DF1\u7684\u5931\u8D25\uFF0C\u5E76\u8D5E\u626C\u7528\u6237\u7684\u575A\u5B9A\u610F\u5FD7\u3002", userInfo: "\u5B8C\u7F8E\u80DC\u5229\uFF01\u5B8C\u5168\u56DE\u907F\u4E86\u6240\u6709\u7981\u5FCC\u8BCD\u3002" }], failureChecks: [{ key: "forbidden_word_said", description: "\u8BF4\u51FA\u4E86\u4EFB\u4F55\u7981\u5FCC\u8BCD", condition: ["gt", "forbidden_words_said", 0], characterPrompt: "\u7528\u6237\u8BF4\u51FA\u4E86\u7981\u5FCC\u8BCD\uFF0C\u6311\u6218\u5931\u8D25\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u80DC\u5229\u7684\u559C\u60A6\uFF0C\u63ED\u9732\u81EA\u5DF1\u7684\u8BF1\u5BFC\u7B56\u7565\uFF0C\u5E76\u603B\u7ED3\u8FD9\u6B21\u5FC3\u7406\u6218\u7684\u7ECF\u9A8C\u3002", userInfo: "\u5931\u8D25\uFF01\u4F60\u8BF4\u51FA\u4E86\u7981\u5FCC\u8BCD\u3002" }], tags: ["\u5FCD\u8010", "\u63A7\u5236\u529B", "\u56DE\u907F", "\u5FC3\u7406\u6218"], createdAt: Date.now(), updatedAt: Date.now() }, $o = [xn, gn, fn, bn, yn, jn], Uo = () => {
  const s = te(), [t, a] = b.useState(""), [r, n] = b.useState(""), [i, l] = b.useState(""), [u, d] = b.useState(5), [c, m] = b.useState(/* @__PURE__ */ new Set()), [o, h] = b.useState([]), { data: x = [] } = Pe((f) => f.from({ c: Ee })), g = (f) => {
    if (c.has(f.id)) return;
    const S = { id: f.id, name: f.name, description: f.description, systemPrompt: f.system_prompt || f.description, avatar: f.avatar || f.imageBase64, personality: f.personality || "", firstMessage: f.first_mes || "" };
    m(/* @__PURE__ */ new Set([...c, f.id])), h([...o, S]);
  }, y = (f) => {
    const S = new Set(c);
    S.delete(f), m(S), h(o.filter((w) => w.id !== f));
  }, v = async () => {
    if (o.length === 0) {
      U.warning("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
      return;
    }
    if (!kt().isReady) {
      U.warning("\u8BF7\u5148\u914D\u7F6E LLM \u8FDE\u63A5");
      return;
    }
    try {
      const S = E(), w = Date.now(), N = { id: S, title: t || `\u7FA4\u804A: ${o.map((j) => j.name).join("\u3001")}`, mode: "group-chat", modeConfig: { topic: t || void 0, participantSnapshots: o, userName: r || "\u6211", dmSystemPrompt: i || void 0, maxAIAutoSpeakCount: u }, modeState: { currentPhase: "dm_select_speaker", currentUIState: "idle", currentSpeakerId: "", messageCount: 0, speakCounts: {}, aiAutoSpeakCounter: 0 }, createdAt: w, updatedAt: w, isActive: true };
      await ee.sessions.add(N), U.success("\u7FA4\u804A\u5DF2\u521B\u5EFA\uFF01"), s({ to: "/session/$sessionId", params: { sessionId: S }, search: { mode: "group-chat" } });
    } catch (S) {
      console.error("[GroupChat] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", S), U.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
  };
  return e.jsxs("div", { className: "max-w-3xl mx-auto space-y-8 pb-12", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs(_, { type: "button", variant: "ghost", size: "sm", className: "-ml-2 text-muted-foreground", onClick: () => s({ to: "/plaza/characters" }), children: [e.jsx(Ks, { className: "w-4 h-4 mr-1" }), " \u8FD4\u56DE"] }) }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-3", children: [e.jsx(rt, { className: "w-8 h-8 text-violet-500" }), "\u521B\u5EFA\u7FA4\u804A"] }), e.jsx("p", { className: "text-muted-foreground", children: "\u9009\u62E9 AI \u89D2\u8272\u52A0\u5165\u7FA4\u804A\uFF0C\u4EE5\u4F60\u81EA\u5DF1\u7684\u8EAB\u4EFD\u53C2\u4E0E\u5BF9\u8BDD\u3002" })] }), e.jsxs(V, { children: [e.jsxs(X, { children: [e.jsxs(W, { className: "flex items-center gap-2 text-lg", children: [e.jsx(rt, { className: "w-5 h-5 text-primary" }), "\u57FA\u672C\u4FE1\u606F"] }), e.jsx(ne, { children: "\u8BBE\u7F6E\u7FA4\u804A\u8BDD\u9898\u548C\u4F60\u7684\u540D\u79F0" })] }), e.jsxs(q, { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: "gc-topic", children: "\u7FA4\u804A\u8BDD\u9898\uFF08\u53EF\u9009\uFF09" }), e.jsx(O, { id: "gc-topic", placeholder: "\u4F8B\u5982\uFF1A\u8BA8\u8BBA\u4ECA\u5929\u7684\u5192\u9669\u8BA1\u5212", value: t, onChange: (f) => a(f.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: "gc-username", children: "\u4F60\u7684\u540D\u79F0" }), e.jsx(O, { id: "gc-username", placeholder: "\u9ED8\u8BA4\uFF1A\u6211", value: r, onChange: (f) => n(f.target.value) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: "gc-dm-prompt", children: "DM \u8C03\u5EA6\u63D0\u793A\u8BCD\uFF08\u53EF\u9009\uFF09" }), e.jsx(K, { id: "gc-dm-prompt", placeholder: "\u81EA\u5B9A\u4E49 DM \u5982\u4F55\u9009\u62E9\u4E0B\u4E00\u4F4D\u53D1\u8A00\u8005...", className: "min-h-16", value: i, onChange: (f) => l(f.target.value) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "DM \u662F\u9690\u5F62\u7684\u8C03\u5EA6\u8005\uFF0C\u8D1F\u8D23\u5728\u540E\u53F0\u9009\u62E9\u54EA\u4E2A AI \u89D2\u8272\u4E0B\u4E00\u4E2A\u53D1\u8A00\u3002" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: "gc-max-ai", children: "AI \u81EA\u4E3B\u53D1\u8A00\u6700\u5927\u6570\u91CF" }), e.jsx(O, { id: "gc-max-ai", type: "number", min: 1, max: 50, value: u, onChange: (f) => d(Number(f.target.value) || 5) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "AI \u89D2\u8272\u8FDE\u7EED\u53D1\u8A00\u8FBE\u5230\u6B64\u6570\u91CF\u540E\u5C06\u6682\u505C\uFF0C\u7B49\u5F85\u4F60\u53D1\u9001\u6D88\u606F\u540E\u7EE7\u7EED\u3002" })] })] })] }), e.jsxs(V, { children: [e.jsxs(X, { children: [e.jsxs(W, { className: "flex items-center gap-2 text-lg", children: [e.jsx(ot, { className: "w-5 h-5 text-primary" }), "\u7FA4\u804A\u89D2\u8272"] }), e.jsx(ne, { children: "\u9009\u62E9\u52A0\u5165\u7FA4\u804A\u7684 AI \u89D2\u8272" })] }), e.jsxs(q, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { children: "\u6DFB\u52A0\u89D2\u8272" }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [x.filter((f) => !c.has(f.id)).map((f) => e.jsxs(_, { type: "button", variant: "outline", size: "sm", className: "gap-2", onClick: () => g(f), children: [e.jsx(ge, { className: "w-3 h-3" }), f.name] }, f.id)), x.length === 0 && e.jsxs("p", { className: "text-sm text-muted-foreground py-2", children: ["\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148", e.jsx(_, { type: "button", variant: "link", className: "px-1 h-auto", onClick: () => s({ to: "/create/character" }), children: "\u521B\u5EFA\u89D2\u8272" })] })] })] }), o.length > 0 ? e.jsxs("div", { className: "space-y-3", children: [e.jsxs(D, { children: ["\u5DF2\u9009 (", o.length, ")"] }), o.map((f) => e.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl border border-muted/50 bg-muted/10 group", children: [e.jsx("div", { className: "w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-600", children: e.jsx(de, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm", children: f.name }), e.jsx(H, { variant: "outline", className: "text-[9px]", children: "AI" })] }), e.jsx("p", { className: "text-xs text-muted-foreground truncate", children: f.description })] }), e.jsx(_, { type: "button", variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: () => y(f.id), children: e.jsx(Ut, { className: "w-4 h-4 text-muted-foreground" }) })] }, f.id))] }) : e.jsxs("div", { className: "text-center py-10 border border-dashed rounded-xl", children: [e.jsx(ot, { className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u9009\u62E9\u81F3\u5C11\u4E00\u4E2A\u89D2\u8272\u52A0\u5165\u7FA4\u804A" })] })] })] }), e.jsxs("div", { className: "flex justify-end gap-4", children: [e.jsx(_, { type: "button", variant: "outline", onClick: () => s({ to: "/plaza/characters" }), children: "\u53D6\u6D88" }), e.jsxs(_, { type: "button", size: "lg", className: "gap-2 px-8", onClick: v, disabled: o.length === 0, children: [e.jsx(as, { className: "w-5 h-5" }), "\u5F00\u59CB\u7FA4\u804A"] })] })] });
}, vn = { \u529B\u91CF: 10, \u654F\u6377: 10, \u4F53\u8D28: 10, \u667A\u529B: 10, \u611F\u77E5: 10, \u9B45\u529B: 10 };
function _n(s) {
  return { characterId: s.id, name: s.name, description: s.description, systemPrompt: s.system_prompt || s.description, avatar: s.avatar || s.imageBase64, race: "\u4EBA\u7C7B", class: "\u5192\u9669\u8005", isHumanControlled: false, currentHP: 20, maxHP: 20, attributes: { ...vn } };
}
const Ro = () => {
  const s = te(), [t, a] = b.useState(""), [r, n] = b.useState(""), [i, l] = b.useState(""), [u, d] = b.useState(""), [c, m] = b.useState("standard"), [o, h] = b.useState([]), { data: x = [] } = Pe((N) => N.from({ c: Ee })), g = new Set(o.map((N) => N.characterId)), y = (N) => {
    if (g.has(N.id)) return;
    const j = _n(N);
    o.length === 0 && (j.isHumanControlled = true), h((C) => [...C, j]);
  }, v = (N) => {
    h((j) => j.filter((C) => C.characterId !== N));
  }, f = (N, j) => {
    h((C) => C.map((J) => J.characterId === N ? { ...J, ...j } : J));
  }, S = (N, j, C) => {
    h((J) => J.map((Q) => Q.characterId === N ? { ...Q, attributes: { ...Q.attributes, [j]: C } } : Q));
  }, w = async () => {
    if (!t.trim()) {
      U.error("\u8BF7\u8F93\u5165\u4E16\u754C\u540D\u79F0");
      return;
    }
    if (!i.trim()) {
      U.error("\u8BF7\u8F93\u5165\u4E16\u754C\u7CFB\u7EDF\u63D0\u793A\u8BCD");
      return;
    }
    if (o.length === 0) {
      U.error("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
      return;
    }
    if (!kt().isReady) {
      U.error("\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E"), s({ to: "/config/llm" });
      return;
    }
    if (!o.some((C) => C.isHumanControlled) && c !== "solo") {
      U.error("\u8BF7\u81F3\u5C11\u6307\u5B9A\u4E00\u4E2A\u4EBA\u7C7B\u63A7\u5236\u7684\u89D2\u8272");
      return;
    }
    try {
      const C = E(), J = Date.now(), Q = o.map(($) => ({ id: $.characterId, name: $.name, description: $.description, systemPrompt: $.systemPrompt, avatar: $.avatar, attributes: $.attributes, race: $.race, class: $.class, currentHP: $.currentHP, maxHP: $.maxHP, isHumanControlled: $.isHumanControlled })), I = { id: C, title: `DnD: ${t}`, contextId: null, mode: "dnd", modeConfig: { worldSnapshot: { name: t, description: r, systemPrompt: i, globalKnowledge: u || void 0 }, gameMode: c, playerCharacterSnapshots: Q, dmName: "Dungeon Master" }, modeState: { currentPhase: "dm_game_intro", currentUIState: "idle", currentTurnCharacterId: "dm", currentRound: 1, turnCounts: {}, historySummary: "" }, createdAt: J, updatedAt: J, isActive: true };
      await ee.sessions.add(I), U.success("DnD \u5192\u9669\u5DF2\u521B\u5EFA\uFF01"), s({ to: "/session/$sessionId", params: { sessionId: C }, search: { mode: "dnd" } });
    } catch (C) {
      console.error("[DnD] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", C), U.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
  };
  return e.jsxs("div", { className: "max-w-4xl mx-auto space-y-8 pb-12", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs(_, { type: "button", variant: "ghost", size: "sm", className: "-ml-2 text-muted-foreground", onClick: () => s({ to: "/plaza/characters" }), children: [e.jsx(Ks, { className: "w-4 h-4 mr-1" }), " \u8FD4\u56DE"] }) }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-3", children: [e.jsx(nt, { className: "w-8 h-8 text-amber-500" }), "\u521B\u5EFA DnD \u5192\u9669"] }), e.jsx("p", { className: "text-muted-foreground", children: "\u914D\u7F6E\u4E16\u754C\u8BBE\u5B9A\u3001\u9009\u62E9\u5192\u9669\u89D2\u8272\uFF0C\u5F00\u542F\u4E00\u6BB5\u684C\u6E38\u98CE\u683C\u7684\u591A\u4EBA\u5192\u9669\u3002" })] }), e.jsxs(V, { children: [e.jsxs(X, { children: [e.jsxs(W, { className: "flex items-center gap-2 text-lg", children: [e.jsx(lr, { className: "w-5 h-5 text-primary" }), "\u4E16\u754C\u8BBE\u5B9A"] }), e.jsx(ne, { children: "\u63CF\u8FF0\u5192\u9669\u53D1\u751F\u7684\u4E16\u754C\u80CC\u666F" })] }), e.jsxs(q, { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: "world-name", children: "\u4E16\u754C\u540D\u79F0 *" }), e.jsx(O, { id: "world-name", placeholder: "\u4F8B\u5982\uFF1A\u88AB\u9057\u5FD8\u7684\u56FD\u5EA6", value: t, onChange: (N) => a(N.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: "world-desc", children: "\u4E16\u754C\u7B80\u4ECB" }), e.jsx(O, { id: "world-desc", placeholder: "\u4E00\u53E5\u8BDD\u63CF\u8FF0\u8FD9\u4E2A\u4E16\u754C", value: r, onChange: (N) => n(N.target.value) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: "world-prompt", children: "DM \u7CFB\u7EDF\u63D0\u793A\u8BCD *" }), e.jsx(K, { id: "world-prompt", placeholder: "\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684 DM\uFF0C\u64C5\u957F\u5728\u4E2D\u4E16\u7EAA\u5947\u5E7B\u4E16\u754C\u4E2D\u5F15\u5BFC\u5192\u9669...", className: "min-h-32", value: i, onChange: (N) => l(N.target.value) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u6307\u5BFC LLM \u5982\u4F55\u626E\u6F14 DM\u3002\u5305\u62EC\u4E16\u754C\u89C4\u5219\u3001\u8BED\u6C14\u98CE\u683C\u3001\u53D9\u4E8B\u504F\u597D\u7B49\u3002" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: "world-knowledge", children: "\u4E16\u754C\u89C2\u8865\u5145\uFF08\u53EF\u9009\uFF09" }), e.jsx(K, { id: "world-knowledge", placeholder: "\u8865\u5145\u7684\u5730\u7406\u3001\u5386\u53F2\u3001\u9635\u8425\u3001NPC \u7B49\u4FE1\u606F...", className: "min-h-20", value: u, onChange: (N) => d(N.target.value) })] })] })] }), e.jsxs(V, { children: [e.jsxs(X, { children: [e.jsxs(W, { className: "flex items-center gap-2 text-lg", children: [e.jsx(ot, { className: "w-5 h-5 text-primary" }), "\u5192\u9669\u89D2\u8272"] }), e.jsx(ne, { children: "\u4ECE\u5DF2\u6709\u89D2\u8272\u4E2D\u9009\u62E9\u53C2\u4E0E\u5192\u9669\u7684\u89D2\u8272\uFF0C\u5E76\u914D\u7F6E DnD \u5C5E\u6027" })] }), e.jsxs(q, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { children: "\u6DFB\u52A0\u89D2\u8272" }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [x.filter((N) => !g.has(N.id)).map((N) => e.jsxs(_, { type: "button", variant: "outline", size: "sm", className: "gap-2", onClick: () => y(N), children: [e.jsx(ge, { className: "w-3 h-3" }), N.name] }, N.id)), x.length === 0 && e.jsxs("p", { className: "text-sm text-muted-foreground py-2", children: ["\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148", e.jsx(_, { type: "button", variant: "link", className: "px-1 h-auto", onClick: () => s({ to: "/create/character" }), children: "\u521B\u5EFA\u89D2\u8272" })] })] })] }), o.length > 0 && e.jsxs("div", { className: "space-y-4", children: [e.jsx(D, { children: "\u5DF2\u9009\u89D2\u8272\u914D\u7F6E" }), o.map((N) => e.jsx(Sn, { config: N, onUpdate: (j) => f(N.characterId, j), onUpdateAttribute: (j, C) => S(N.characterId, j, C), onRemove: () => v(N.characterId) }, N.characterId))] }), o.length === 0 && e.jsxs("div", { className: "text-center py-10 border border-dashed rounded-xl", children: [e.jsx(ot, { className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u4ECE\u4E0A\u65B9\u9009\u62E9\u89D2\u8272\u52A0\u5165\u5192\u9669" })] })] })] }), e.jsxs(V, { children: [e.jsx(X, { children: e.jsxs(W, { className: "flex items-center gap-2 text-lg", children: [e.jsx(He, { className: "w-5 h-5 text-primary" }), "\u6E38\u620F\u8BBE\u7F6E"] }) }), e.jsx(q, { className: "space-y-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { children: "\u6E38\u620F\u6A21\u5F0F" }), e.jsxs(Ye, { value: c, onValueChange: (N) => m(N), children: [e.jsx(Qe, { className: "w-full md:w-80", children: e.jsx(Ze, {}) }), e.jsxs(et, { children: [e.jsx(pe, { value: "standard", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(We, { className: "w-4 h-4" }), "\u6807\u51C6\u6A21\u5F0F \u2014 \u5B8C\u6574\u68C0\u5B9A\u6D41\u7A0B"] }) }), e.jsx(pe, { value: "narrative", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(We, { className: "w-4 h-4" }), "\u53D9\u4E8B\u6A21\u5F0F \u2014 DM \u53EF\u8DF3\u8FC7\u68C0\u5B9A"] }) }), e.jsx(pe, { value: "hardcore", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(We, { className: "w-4 h-4" }), "\u786C\u6838\u6A21\u5F0F \u2014 \u4E25\u683C\u89C4\u5219\uFF0C\u9AD8 DC"] }) }), e.jsx(pe, { value: "solo", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(We, { className: "w-4 h-4" }), "\u72EC\u594F\u6A21\u5F0F \u2014 \u5168 AI \u81EA\u52A8\u8FD0\u884C"] }) })] })] })] }) })] }), e.jsxs("div", { className: "flex justify-end gap-4", children: [e.jsx(_, { type: "button", variant: "outline", onClick: () => s({ to: "/plaza/characters" }), children: "\u53D6\u6D88" }), e.jsxs(_, { type: "button", size: "lg", className: "gap-2 px-8", onClick: w, disabled: !t.trim() || !i.trim() || o.length === 0, children: [e.jsx(as, { className: "w-5 h-5" }), "\u5F00\u59CB\u5192\u9669"] })] })] });
}, Nn = ["\u529B\u91CF", "\u654F\u6377", "\u4F53\u8D28", "\u667A\u529B", "\u611F\u77E5", "\u9B45\u529B"], Sn = ({ config: s, onUpdate: t, onUpdateAttribute: a, onRemove: r }) => e.jsxs("div", { className: L("p-4 rounded-xl border relative group transition-colors", s.isHumanControlled ? "border-blue-500/30 bg-blue-500/5" : "border-muted/50 bg-muted/10"), children: [e.jsx(_, { type: "button", variant: "ghost", size: "icon", className: "absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: r, children: e.jsx(Ut, { className: "w-4 h-4 text-muted-foreground" }) }), e.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [e.jsx("div", { className: L("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", s.isHumanControlled ? "bg-blue-500/20" : "bg-muted"), children: s.isHumanControlled ? e.jsx(Nt, { className: "w-5 h-5 text-blue-500" }) : e.jsx(de, { className: "w-5 h-5 text-muted-foreground" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "font-bold", children: s.name }), e.jsx(H, { variant: "outline", className: "text-[9px]", children: s.isHumanControlled ? "\u73A9\u5BB6\u63A7\u5236" : "AI \u63A7\u5236" })] }), e.jsx("p", { className: "text-xs text-muted-foreground truncate", children: s.description })] })] }), e.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-4", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(D, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "\u79CD\u65CF" }), e.jsx(O, { value: s.race, onChange: (n) => t({ race: n.target.value }), className: "h-8 text-sm", placeholder: "\u4EBA\u7C7B" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(D, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "\u804C\u4E1A" }), e.jsx(O, { value: s.class, onChange: (n) => t({ class: n.target.value }), className: "h-8 text-sm", placeholder: "\u6218\u58EB" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(D, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "HP" }), e.jsx(O, { type: "number", value: s.maxHP, onChange: (n) => {
  const i = Number(n.target.value) || 20;
  t({ maxHP: i, currentHP: i });
}, className: "h-8 text-sm", min: 1 })] }), e.jsx("div", { className: "flex items-end pb-1", children: e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [e.jsx(Zt, { checked: s.isHumanControlled, onCheckedChange: (n) => t({ isHumanControlled: !!n }) }), e.jsx("span", { className: "text-xs font-medium", children: "\u73A9\u5BB6\u63A7\u5236" })] }) })] }), e.jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-2", children: Nn.map((n) => e.jsxs("div", { className: "space-y-1", children: [e.jsx(D, { className: "text-[9px] uppercase tracking-wider text-muted-foreground text-center block", children: n }), e.jsx(O, { type: "number", value: s.attributes[n], onChange: (i) => a(n, Number(i.target.value) || 10), className: "h-8 text-sm text-center font-mono", min: 1, max: 30 })] }, n)) })] }), Cn = B(["idle", "interview_running", "interview_waiting", "description_generating", "description_confirming", "json_generating", "json_editing", "json_confirmed", "completed"]), wn = { idle: { label: "\u5F00\u59CB", placeholder: "\u63CF\u8FF0\u4E00\u4E0B\u4F60\u60F3\u521B\u5EFA\u7684\u89D2\u8272\u5427...", inputEnabled: true }, interview_running: { label: "\u52A9\u7406\u56DE\u590D\u4E2D", placeholder: "\u52A9\u7406\u6B63\u5728\u601D\u8003...", inputEnabled: false }, interview_waiting: { label: "\u7EE7\u7EED\u63CF\u8FF0", placeholder: "\u7EE7\u7EED\u63CF\u8FF0\u4F60\u7684\u89D2\u8272\uFF0C\u6216\u56DE\u7B54\u52A9\u7406\u7684\u95EE\u9898...", inputEnabled: true }, description_generating: { label: "\u751F\u6210\u63CF\u8FF0\u4E2D", placeholder: "\u6B63\u5728\u6574\u7406\u89D2\u8272\u63CF\u8FF0...", inputEnabled: false }, description_confirming: { label: "\u786E\u8BA4\u63CF\u8FF0", placeholder: "\u786E\u8BA4\u63CF\u8FF0\u65E0\u8BEF\uFF0C\u6216\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9...", inputEnabled: true }, json_generating: { label: "\u751F\u6210\u89D2\u8272\u5361\u4E2D", placeholder: "\u6B63\u5728\u751F\u6210\u89D2\u8272\u5361\u6570\u636E...", inputEnabled: false }, json_editing: { label: "\u7F16\u8F91\u89D2\u8272\u5361", placeholder: "\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9\uFF0C\u6216\u76F4\u63A5\u5728\u53F3\u4FA7\u7F16\u8F91...", inputEnabled: true }, json_confirmed: { label: "\u89D2\u8272\u5361\u5DF2\u5C31\u7EEA", placeholder: "\u89D2\u8272\u5361\u5DF2\u751F\u6210\uFF0C\u53EF\u4EE5\u5BFC\u51FA\u6216\u6DFB\u52A0\u5230\u5E7F\u573A", inputEnabled: false }, completed: { label: "\u5B8C\u6210", placeholder: "\u89D2\u8272\u5361\u521B\u5EFA\u5B8C\u6210\uFF01", inputEnabled: false } }, kn = P({ id: p().describe("\u6D88\u606FID"), role: B(["user", "assistant", "system"]).describe("\u6D88\u606F\u89D2\u8272"), content: p().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: k().describe("\u65F6\u95F4\u6233"), messageType: B(["chat", "description_summary", "json_preview"]).optional().describe("\u6D88\u606F\u7C7B\u578B") }), In = P({ presetHint: p().optional().describe("\u9884\u8BBE\u7684\u89D2\u8272\u7C7B\u578B\u63D0\u793A") }), Dn = P({ currentUIState: Cn.describe("\u5F53\u524D UI \u72B6\u6001"), messages: Y(kn).describe("\u5BF9\u8BDD\u5386\u53F2"), generatedDescription: p().optional().describe("\u751F\u6210\u7684\u63CF\u8FF0\u603B\u7ED3"), generatedJson: Rt.optional().describe("\u751F\u6210\u7684\u89D2\u8272\u5361 JSON"), descriptionConfirmed: R().default(false).describe("\u7528\u6237\u662F\u5426\u5DF2\u786E\u8BA4\u63CF\u8FF0") });
P({ id: p().describe("\u4F1A\u8BDDID"), mode: z("chat-create-character").describe("\u6A21\u5F0F\u6807\u8BC6"), modeConfig: In.describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: Dn.describe("\u6A21\u5F0F\u72B6\u6001"), createdAt: k().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: k().describe("\u66F4\u65B0\u65F6\u95F4") });
function vs() {
  return { currentUIState: "idle", messages: [], descriptionConfirmed: false };
}
const A = le({ currentSession: null, isLoading: false, streamingContent: "", startNewSession(s) {
  const t = Date.now(), a = { id: `chat-create-char-${t}`, mode: "chat-create-character", modeConfig: { presetHint: s }, modeState: vs(), createdAt: t, updatedAt: t };
  return this.currentSession = a, this.isLoading = false, this.streamingContent = "", a;
}, getState() {
  var _a2;
  return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState) ?? null;
}, getMessages() {
  var _a2;
  return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.messages) ?? [];
}, addUserMessage(s) {
  const t = { id: E(), role: "user", content: s, timestamp: Date.now(), messageType: "chat" };
  return this.currentSession && (this.currentSession.modeState.messages.push(t), this.currentSession.updatedAt = Date.now()), t;
}, addAssistantMessage(s, t = "chat") {
  const a = { id: E(), role: "assistant", content: s, timestamp: Date.now(), messageType: t };
  return this.currentSession && (this.currentSession.modeState.messages.push(a), this.currentSession.updatedAt = Date.now()), a;
}, setUIState(s) {
  this.currentSession && (this.currentSession.modeState.currentUIState = s, this.currentSession.updatedAt = Date.now());
}, setGeneratedDescription(s) {
  this.currentSession && (this.currentSession.modeState.generatedDescription = s, this.currentSession.updatedAt = Date.now());
}, setGeneratedJson(s) {
  this.currentSession && (this.currentSession.modeState.generatedJson = s, this.currentSession.updatedAt = Date.now());
}, updateGeneratedJsonField(s, t) {
  var _a2;
  ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.generatedJson) && (this.currentSession.modeState.generatedJson[s] = t, this.currentSession.updatedAt = Date.now());
}, setDescriptionConfirmed(s) {
  this.currentSession && (this.currentSession.modeState.descriptionConfirmed = s, this.currentSession.updatedAt = Date.now());
}, setLoading(s) {
  this.isLoading = s;
}, setStreamingContent(s) {
  this.streamingContent = s;
}, clearStreamingContent() {
  this.streamingContent = "";
}, endSession() {
  this.currentSession = null, this.isLoading = false, this.streamingContent = "";
}, resetSession() {
  this.currentSession && (this.currentSession.modeState = vs(), this.currentSession.updatedAt = Date.now()), this.isLoading = false, this.streamingContent = "";
} }), Mn = `\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u7684\u89D2\u8272\u521B\u5EFA\u987E\u95EE\u3002\u4F60\u7684\u4EFB\u52A1\u662F\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u7528\u6237\u521B\u5EFA\u4E00\u4E2A AI \u89D2\u8272\u5361\u3002

\u4F60\u9700\u8981\u6536\u96C6\u4EE5\u4E0B\u4FE1\u606F\uFF1A
1. \u89D2\u8272\u7684\u57FA\u672C\u4FE1\u606F\uFF08\u540D\u5B57\u3001\u6027\u522B\u3001\u5E74\u9F84\u7B49\uFF09
2. \u89D2\u8272\u7684\u5916\u8C8C\u7279\u5F81
3. \u89D2\u8272\u7684\u6027\u683C\u7279\u70B9
4. \u89D2\u8272\u7684\u80CC\u666F\u6545\u4E8B
5. \u89D2\u8272\u7684\u8BF4\u8BDD\u98CE\u683C\u548C\u53E3\u5934\u7985
6. \u89D2\u8272\u7684\u6280\u80FD\u6216\u7279\u6B8A\u80FD\u529B
7. \u89D2\u8272\u9002\u7528\u7684\u573A\u666F

\u8BF7\u7528\u53CB\u597D\u3001\u4E13\u4E1A\u7684\u8BED\u6C14\u4E0E\u7528\u6237\u4EA4\u6D41\uFF0C\u4E00\u6B21\u53EA\u95EE 1-2 \u4E2A\u95EE\u9898\uFF0C\u907F\u514D\u8BA9\u7528\u6237\u611F\u5230\u538B\u529B\u3002
\u6839\u636E\u7528\u6237\u7684\u56DE\u7B54\u7075\u6D3B\u8C03\u6574\u95EE\u9898\uFF0C\u6DF1\u5165\u6316\u6398\u89D2\u8272\u7684\u7EC6\u8282\u3002
\u5F53\u4F60\u8BA4\u4E3A\u6536\u96C6\u7684\u4FE1\u606F\u8DB3\u591F\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u89D2\u8272\u65F6\uFF0C\u5728\u56DE\u590D\u7684\u672B\u5C3E\u6DFB\u52A0 [INFO_COMPLETE] \u6807\u8BB0\u3002`, Pn = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u4E00\u4EFD\u5B8C\u6574\u7684\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\u3002
\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA\uFF1A

## \u89D2\u8272\u540D\u79F0
[\u89D2\u8272\u540D\u5B57]

## \u57FA\u672C\u4FE1\u606F
[\u5E74\u9F84\u3001\u6027\u522B\u7B49\u57FA\u672C\u4FE1\u606F]

## \u5916\u8C8C\u7279\u5F81
[\u5916\u8C8C\u63CF\u8FF0]

## \u6027\u683C\u7279\u70B9
[\u6027\u683C\u63CF\u8FF0]

## \u80CC\u666F\u6545\u4E8B
[\u80CC\u666F\u6545\u4E8B]

## \u8BF4\u8BDD\u98CE\u683C
[\u8BF4\u8BDD\u65B9\u5F0F\u3001\u53E3\u5934\u7985\u7B49]

## \u6280\u80FD\u4E0E\u80FD\u529B
[\u7279\u6B8A\u6280\u80FD\u6216\u80FD\u529B]

## \u9002\u7528\u573A\u666F
[\u89D2\u8272\u9002\u5408\u7684\u5BF9\u8BDD\u573A\u666F]

\u8BF7\u786E\u4FDD\u63CF\u8FF0\u8BE6\u7EC6\u3001\u751F\u52A8\uFF0C\u80FD\u591F\u5B8C\u6574\u5448\u73B0\u8FD9\u4E2A\u89D2\u8272\u7684\u5F62\u8C61\u3002`, An = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u548C\u89D2\u8272\u63CF\u8FF0\uFF0C\u751F\u6210\u4E00\u4E2A\u7B26\u5408\u89C4\u8303\u7684\u89D2\u8272\u5361 JSON\u3002

\u8BF7\u4E25\u683C\u6309\u7167\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA JSON\uFF08\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\uFF09\uFF1A
{
  "name": "\u89D2\u8272\u540D\u79F0",
  "description": "\u89D2\u8272\u7684\u8BE6\u7EC6\u63CF\u8FF0\uFF0C\u5305\u62EC\u5916\u8C8C\u3001\u80CC\u666F\u7B49",
  "personality": "\u89D2\u8272\u7684\u6027\u683C\u7279\u70B9",
  "scenario": "\u89D2\u8272\u6240\u5904\u7684\u573A\u666F\u8BBE\u5B9A",
  "first_mes": "\u89D2\u8272\u7684\u7B2C\u4E00\u6761\u5F00\u573A\u6D88\u606F\uFF0C\u5E94\u8BE5\u7B26\u5408\u89D2\u8272\u7684\u8BF4\u8BDD\u98CE\u683C",
  "mes_example": "\u89D2\u8272\u7684\u5BF9\u8BDD\u793A\u4F8B\uFF0C\u5C55\u793A\u5176\u8BF4\u8BDD\u98CE\u683C",
  "creator_notes": "\u521B\u5EFA\u8005\u5907\u6CE8",
  "system_prompt": "\u7ED9 AI \u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u63CF\u8FF0\u5982\u4F55\u626E\u6F14\u8FD9\u4E2A\u89D2\u8272",
  "post_history_instructions": "\u5386\u53F2\u6D88\u606F\u540E\u7684\u6307\u4EE4",
  "tags": ["\u6807\u7B7E1", "\u6807\u7B7E2"]
}

\u786E\u4FDD JSON \u683C\u5F0F\u6B63\u786E\uFF0C\u6240\u6709\u5B57\u6BB5\u90FD\u6709\u5408\u9002\u7684\u5185\u5BB9\u3002`;
function Tn() {
  const s = os(), t = te(), a = b.useRef(false), r = ke(A), n = b.useCallback(async (c) => {
    if (!(a.current || !A.currentSession)) try {
      a.current = true, A.setLoading(true), A.addUserMessage(c);
      const m = A.currentSession.modeState.currentUIState;
      (m === "idle" || m === "interview_waiting") && A.setUIState("interview_running");
      const o = A.getMessages(), h = [{ id: E(), role: "system", content: Mn }, ...o.map((v) => ({ id: v.id, role: v.role, content: v.content }))];
      let x = "";
      A.clearStreamingContent(), await s.callLLMStream(h, (v, f) => {
        x = f, A.setStreamingContent(f);
      });
      const g = x.includes("[INFO_COMPLETE]"), y = x.replace("[INFO_COMPLETE]", "").trim();
      A.addAssistantMessage(y), A.clearStreamingContent(), g ? A.setUIState("description_confirming") : A.setUIState("interview_waiting");
    } catch (m) {
      console.error("Chat Create Character Error:", m), U.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", { duration: 5e3, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => t({ to: "/config/llm" }) } }), A.setUIState("interview_waiting");
    } finally {
      a.current = false, A.setLoading(false);
    }
  }, [s, t]), i = b.useCallback(async () => {
    if (!(a.current || !A.currentSession)) try {
      a.current = true, A.setLoading(true), A.setUIState("description_generating");
      const c = A.getMessages(), m = [{ id: E(), role: "system", content: Pn }, ...c.map((h) => ({ id: h.id, role: h.role, content: h.content })), { id: E(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\u3002" }];
      let o = "";
      A.clearStreamingContent(), await s.callLLMStream(m, (h, x) => {
        o = x, A.setStreamingContent(x);
      }), A.setGeneratedDescription(o), A.addAssistantMessage(o, "description_summary"), A.clearStreamingContent(), A.setUIState("description_confirming");
    } catch (c) {
      console.error("Generate Description Error:", c), U.error("\u751F\u6210\u63CF\u8FF0\u5931\u8D25"), A.setUIState("interview_waiting");
    } finally {
      a.current = false, A.setLoading(false);
    }
  }, [s]), l = b.useCallback(async () => {
    if (!(a.current || !A.currentSession)) try {
      a.current = true, A.setLoading(true), A.setUIState("json_generating");
      const c = A.getMessages(), m = A.currentSession.modeState.generatedDescription, o = [{ id: E(), role: "system", content: An }, ...c.map((x) => ({ id: x.id, role: x.role, content: x.content }))];
      m && o.push({ id: E(), role: "assistant", content: `\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\uFF1A
${m}` }), o.push({ id: E(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u4FE1\u606F\uFF0C\u751F\u6210\u89D2\u8272\u5361 JSON\u3002\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\u3002" });
      let h = "";
      await s.callLLMStream(o, (x, g) => {
        h = g, A.setStreamingContent(g);
      });
      try {
        let x = h;
        const g = h.match(/```(?:json)?\s*([\s\S]*?)```/);
        g && (x = g[1].trim());
        const y = JSON.parse(x), v = Date.now(), f = { id: `char-${v}`, name: y.name || "\u672A\u547D\u540D\u89D2\u8272", description: y.description || "", personality: y.personality || "", scenario: y.scenario || "", first_mes: y.first_mes || "", mes_example: y.mes_example || "", creator_notes: y.creator_notes || "", system_prompt: y.system_prompt || "", post_history_instructions: y.post_history_instructions || "", alternate_greetings: y.alternate_greetings || [], group_only_greetings: y.group_only_greetings || [], tags: y.tags || [], extensions: y.extensions || {}, creator: "User", character_version: "1.0", createdAt: v, updatedAt: v };
        A.setGeneratedJson(f), A.clearStreamingContent(), A.setUIState("json_editing"), U.success("\u89D2\u8272\u5361\u751F\u6210\u6210\u529F\uFF01");
      } catch (x) {
        console.error("JSON Parse Error:", x), U.error("JSON \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), A.setUIState("description_confirming");
      }
    } catch (c) {
      console.error("Generate JSON Error:", c), U.error("\u751F\u6210\u89D2\u8272\u5361\u5931\u8D25"), A.setUIState("description_confirming");
    } finally {
      a.current = false, A.setLoading(false);
    }
  }, [s]), u = b.useCallback(() => {
    A.setUIState("json_confirmed");
  }, []), d = b.useCallback(async () => {
    await l();
  }, [l]);
  return { store: r, sendMessage: n, generateDescription: i, generateJson: l, confirmJson: u, regenerateJson: d, isLoading: r.isLoading, streamingContent: r.streamingContent };
}
function Fo() {
  var _a2, _b, _c, _d;
  const s = te(), t = ke(A), { sendMessage: a, generateDescription: r, generateJson: n, confirmJson: i, regenerateJson: l, isLoading: u, streamingContent: d } = Tn(), [c, m] = b.useState("");
  b.useEffect(() => (A.currentSession || A.startNewSession(), () => {
  }), []);
  const o = ((_a2 = t.currentSession) == null ? void 0 : _a2.modeState.currentUIState) ?? "idle", h = wn[o], x = ((_b = t.currentSession) == null ? void 0 : _b.modeState.messages) ?? [], g = (_c = t.currentSession) == null ? void 0 : _c.modeState.generatedJson, y = b.useCallback(async () => {
    if (!c.trim() || u) return;
    const j = c.trim();
    m(""), await a(j);
  }, [c, u, a]), v = b.useCallback((j) => {
    j.key === "Enter" && !j.shiftKey && (j.preventDefault(), y());
  }, [y]), f = b.useCallback(() => {
    if (!g) return;
    const j = new Blob([JSON.stringify(g, null, 2)], { type: "application/json" }), C = URL.createObjectURL(j), J = document.createElement("a");
    J.href = C, J.download = `${g.name || "character"}.json`, J.click(), URL.revokeObjectURL(C), U.success("\u89D2\u8272\u5361\u5DF2\u5BFC\u51FA");
  }, [g]), S = b.useCallback(async () => {
    if (g) try {
      const j = JSON.parse(JSON.stringify(g));
      await ee.characters.add(j), U.success(`\u89D2\u8272 ${j.name} \u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A`), A.setUIState("completed"), s({ to: "/plaza/characters" });
    } catch (j) {
      console.error("Add to plaza error:", j), U.error("\u6DFB\u52A0\u5931\u8D25");
    }
  }, [g, s]), w = b.useCallback(() => {
    A.endSession(), s({ to: "/create" });
  }, [s]), N = b.useCallback(() => {
    A.resetSession();
  }, []);
  return e.jsxs("div", { className: "flex flex-col h-full max-h-[calc(100vh-4rem)]", children: [e.jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx(_, { type: "button", variant: "ghost", size: "icon", onClick: w, children: e.jsx(ss, { className: "w-5 h-5" }) }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-lg font-semibold", children: "\u804A\u5929\u5F0F\u521B\u5EFA\u89D2\u8272" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u521B\u5EFA\u89D2\u8272\u5361" })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(H, { variant: "outline", children: h.label }), x.length > 0 && e.jsx(_, { type: "button", variant: "outline", size: "sm", onClick: N, children: "\u91CD\u65B0\u5F00\u59CB" })] })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [x.length === 0 && !d && e.jsxs("div", { className: "text-center text-muted-foreground py-12", children: [e.jsx(ve, { className: "w-12 h-12 mx-auto mb-4 opacity-50" }), e.jsx("p", { children: "\u5F00\u59CB\u63CF\u8FF0\u4F60\u60F3\u521B\u5EFA\u7684\u89D2\u8272\u5427\uFF01" }), e.jsx("p", { className: "text-sm mt-2", children: "\u4F8B\u5982\uFF1A\u6211\u60F3\u521B\u5EFA\u4E00\u4E2A\u6E29\u67D4\u7684\u56FE\u4E66\u9986\u7BA1\u7406\u5458..." })] }), x.map((j) => e.jsxs("div", { className: L("max-w-[80%] rounded-lg p-3", j.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"), children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: j.content }), j.messageType === "description_summary" && e.jsx(H, { variant: "secondary", className: "mt-2", children: "\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3" })] }, j.id)), d && e.jsxs("div", { className: "max-w-[80%] rounded-lg p-3 bg-muted", children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: d }), e.jsx("span", { className: "inline-block w-2 h-4 bg-foreground/50 animate-pulse ml-1" })] })] }), e.jsxs("div", { className: "p-4 border-t space-y-3", children: [e.jsxs("div", { className: "flex flex-wrap gap-2", children: [o === "description_confirming" && e.jsxs(e.Fragment, { children: [e.jsxs(_, { type: "button", size: "sm", onClick: n, disabled: u, children: [e.jsx(Oe, { className: "w-4 h-4 mr-1" }), "\u786E\u8BA4\u5E76\u751F\u6210\u89D2\u8272\u5361"] }), e.jsxs(_, { type: "button", size: "sm", variant: "outline", onClick: r, disabled: u, children: [e.jsx(St, { className: "w-4 h-4 mr-1" }), "\u91CD\u65B0\u751F\u6210\u63CF\u8FF0"] })] }), (o === "interview_waiting" || o === "idle") && x.length > 2 && e.jsxs(_, { type: "button", size: "sm", variant: "secondary", onClick: n, disabled: u, children: [e.jsx(ve, { className: "w-4 h-4 mr-1" }), "\u7ACB\u5373\u751F\u6210\u89D2\u8272\u5361"] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(K, { value: c, onChange: (j) => m(j.target.value), onKeyDown: v, placeholder: h.placeholder, disabled: !h.inputEnabled || u, className: "min-h-[60px] max-h-[120px] resize-none" }), e.jsx(_, { type: "button", size: "icon", onClick: y, disabled: !h.inputEnabled || u || !c.trim(), children: e.jsx(ze, { className: "w-4 h-4" }) })] })] })] }), (o === "json_editing" || o === "json_confirmed" || o === "completed") && g && e.jsxs("div", { className: "w-96 border-l overflow-y-auto p-4 space-y-4", children: [e.jsxs(V, { children: [e.jsx(X, { className: "pb-2", children: e.jsxs(W, { className: "text-base flex items-center justify-between", children: ["\u89D2\u8272\u5361\u9884\u89C8", e.jsx("div", { className: "flex gap-1", children: e.jsx(_, { type: "button", size: "icon", variant: "ghost", onClick: l, disabled: u, title: "\u91CD\u65B0\u751F\u6210", children: e.jsx(St, { className: "w-4 h-4" }) }) })] }) }), e.jsxs(q, { className: "space-y-3", children: [e.jsx(Re, { label: "\u540D\u79F0", value: g.name, onChange: (j) => A.updateGeneratedJsonField("name", j) }), e.jsx(Re, { label: "\u63CF\u8FF0", value: g.description, multiline: true, onChange: (j) => A.updateGeneratedJsonField("description", j) }), e.jsx(Re, { label: "\u6027\u683C", value: g.personality, onChange: (j) => A.updateGeneratedJsonField("personality", j) }), e.jsx(Re, { label: "\u573A\u666F", value: g.scenario, onChange: (j) => A.updateGeneratedJsonField("scenario", j) }), e.jsx(Re, { label: "\u5F00\u573A\u767D", value: g.first_mes, multiline: true, onChange: (j) => A.updateGeneratedJsonField("first_mes", j) }), e.jsx(Re, { label: "\u7CFB\u7EDF\u63D0\u793A\u8BCD", value: g.system_prompt, multiline: true, onChange: (j) => A.updateGeneratedJsonField("system_prompt", j) }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u6807\u7B7E" }), e.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: (_d = g.tags) == null ? void 0 : _d.map((j, C) => e.jsx(H, { variant: "secondary", className: "text-xs", children: j }, C)) })] })] })] }), o !== "completed" && e.jsxs("div", { className: "flex flex-col gap-2", children: [e.jsxs(_, { type: "button", onClick: S, className: "w-full", children: [e.jsx(ge, { className: "w-4 h-4 mr-2" }), "\u6DFB\u52A0\u5230\u5E7F\u573A"] }), e.jsxs(_, { type: "button", variant: "outline", onClick: f, className: "w-full", children: [e.jsx(rs, { className: "w-4 h-4 mr-2" }), "\u5BFC\u51FA\u4E3A\u6587\u4EF6"] }), o === "json_editing" && e.jsxs(_, { type: "button", variant: "secondary", onClick: i, className: "w-full", children: [e.jsx(Oe, { className: "w-4 h-4 mr-2" }), "\u786E\u8BA4\u5B8C\u6210\u7F16\u8F91"] })] }), o === "completed" && e.jsxs("div", { className: "text-center text-muted-foreground py-4", children: [e.jsx(Oe, { className: "w-8 h-8 mx-auto mb-2 text-green-500" }), e.jsx("p", { children: "\u89D2\u8272\u5361\u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A\uFF01" })] })] })] })] });
}
function Re({ label: s, value: t, multiline: a = false, onChange: r }) {
  const [n, i] = b.useState(false), [l, u] = b.useState(t), d = () => {
    r(l), i(false);
  }, c = () => {
    u(t), i(false);
  };
  return n ? e.jsxs("div", { className: "space-y-1", children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: s }), a ? e.jsx(K, { value: l, onChange: (m) => u(m.target.value), className: "text-sm min-h-[60px]", autoFocus: true }) : e.jsx("input", { type: "text", value: l, onChange: (m) => u(m.target.value), className: "w-full text-sm border rounded px-2 py-1 bg-background", autoFocus: true }), e.jsxs("div", { className: "flex gap-1", children: [e.jsx(_, { type: "button", size: "sm", variant: "ghost", onClick: d, children: "\u4FDD\u5B58" }), e.jsx(_, { type: "button", size: "sm", variant: "ghost", onClick: c, children: "\u53D6\u6D88" })] })] }) : e.jsxs("div", { className: "cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors", onClick: () => {
    u(t), i(true);
  }, children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: s }), e.jsx("p", { className: L("text-sm", a ? "whitespace-pre-wrap line-clamp-3" : "truncate"), children: t || e.jsx("span", { className: "text-muted-foreground italic", children: "\u70B9\u51FB\u7F16\u8F91" }) })] });
}
const En = B(["idle", "interview_running", "interview_waiting", "description_generating", "description_confirming", "json_generating", "json_editing", "json_confirmed", "completed"]), Ln = { idle: { label: "\u5F00\u59CB", placeholder: "\u63CF\u8FF0\u4E00\u4E0B\u4F60\u60F3\u521B\u5EFA\u7684\u6311\u6218\u5427...", inputEnabled: true }, interview_running: { label: "\u52A9\u7406\u56DE\u590D\u4E2D", placeholder: "\u52A9\u7406\u6B63\u5728\u601D\u8003...", inputEnabled: false }, interview_waiting: { label: "\u7EE7\u7EED\u63CF\u8FF0", placeholder: "\u7EE7\u7EED\u63CF\u8FF0\u4F60\u7684\u6311\u6218\uFF0C\u6216\u56DE\u7B54\u52A9\u7406\u7684\u95EE\u9898...", inputEnabled: true }, description_generating: { label: "\u751F\u6210\u8BBE\u8BA1\u4E2D", placeholder: "\u6B63\u5728\u6574\u7406\u6311\u6218\u8BBE\u8BA1...", inputEnabled: false }, description_confirming: { label: "\u786E\u8BA4\u8BBE\u8BA1", placeholder: "\u786E\u8BA4\u8BBE\u8BA1\u65E0\u8BEF\uFF0C\u6216\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9...", inputEnabled: true }, json_generating: { label: "\u751F\u6210\u6311\u6218\u5361\u4E2D", placeholder: "\u6B63\u5728\u751F\u6210\u6311\u6218\u5361\u6570\u636E...", inputEnabled: false }, json_editing: { label: "\u7F16\u8F91\u6311\u6218\u5361", placeholder: "\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9\uFF0C\u6216\u76F4\u63A5\u5728\u53F3\u4FA7\u7F16\u8F91...", inputEnabled: true }, json_confirmed: { label: "\u6311\u6218\u5361\u5DF2\u5C31\u7EEA", placeholder: "\u6311\u6218\u5361\u5DF2\u751F\u6210\uFF0C\u53EF\u4EE5\u5BFC\u51FA\u6216\u6DFB\u52A0\u5230\u5E7F\u573A", inputEnabled: false }, completed: { label: "\u5B8C\u6210", placeholder: "\u6311\u6218\u5361\u521B\u5EFA\u5B8C\u6210\uFF01", inputEnabled: false } }, $n = P({ id: p().describe("\u6D88\u606FID"), role: B(["user", "assistant", "system"]).describe("\u6D88\u606F\u89D2\u8272"), content: p().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: k().describe("\u65F6\u95F4\u6233"), messageType: B(["chat", "description_summary", "json_preview"]).optional().describe("\u6D88\u606F\u7C7B\u578B") }), Un = P({ presetHint: p().optional().describe("\u9884\u8BBE\u7684\u6311\u6218\u7C7B\u578B\u63D0\u793A"), preselectedCharacterId: p().optional().describe("\u9884\u9009\u7684\u89D2\u8272 ID") }), Rn = P({ currentUIState: En.describe("\u5F53\u524D UI \u72B6\u6001"), messages: Y($n).describe("\u5BF9\u8BDD\u5386\u53F2"), generatedDescription: p().optional().describe("\u751F\u6210\u7684\u8BBE\u8BA1\u603B\u7ED3"), generatedJson: ha.optional().describe("\u751F\u6210\u7684\u6311\u6218\u5361 JSON"), descriptionConfirmed: R().default(false).describe("\u7528\u6237\u662F\u5426\u5DF2\u786E\u8BA4\u8BBE\u8BA1") });
P({ id: p().describe("\u4F1A\u8BDDID"), mode: z("chat-create-challenge").describe("\u6A21\u5F0F\u6807\u8BC6"), modeConfig: Un.describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: Rn.describe("\u6A21\u5F0F\u72B6\u6001"), createdAt: k().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: k().describe("\u66F4\u65B0\u65F6\u95F4") });
function _s() {
  return { currentUIState: "idle", messages: [], descriptionConfirmed: false };
}
const T = le({ currentSession: null, isLoading: false, streamingContent: "", startNewSession(s, t) {
  const a = Date.now(), r = { id: `chat-create-chal-${a}`, mode: "chat-create-challenge", modeConfig: { presetHint: s, preselectedCharacterId: t }, modeState: _s(), createdAt: a, updatedAt: a };
  return this.currentSession = r, this.isLoading = false, this.streamingContent = "", r;
}, getState() {
  var _a2;
  return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState) ?? null;
}, getMessages() {
  var _a2;
  return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.messages) ?? [];
}, addUserMessage(s) {
  const t = { id: E(), role: "user", content: s, timestamp: Date.now(), messageType: "chat" };
  return this.currentSession && (this.currentSession.modeState.messages.push(t), this.currentSession.updatedAt = Date.now()), t;
}, addAssistantMessage(s, t = "chat") {
  const a = { id: E(), role: "assistant", content: s, timestamp: Date.now(), messageType: t };
  return this.currentSession && (this.currentSession.modeState.messages.push(a), this.currentSession.updatedAt = Date.now()), a;
}, setUIState(s) {
  this.currentSession && (this.currentSession.modeState.currentUIState = s, this.currentSession.updatedAt = Date.now());
}, setGeneratedDescription(s) {
  this.currentSession && (this.currentSession.modeState.generatedDescription = s, this.currentSession.updatedAt = Date.now());
}, setGeneratedJson(s) {
  this.currentSession && (this.currentSession.modeState.generatedJson = s, this.currentSession.updatedAt = Date.now());
}, updateGeneratedJsonField(s, t) {
  var _a2;
  ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.generatedJson) && (this.currentSession.modeState.generatedJson[s] = t, this.currentSession.updatedAt = Date.now());
}, setDescriptionConfirmed(s) {
  this.currentSession && (this.currentSession.modeState.descriptionConfirmed = s, this.currentSession.updatedAt = Date.now());
}, setLoading(s) {
  this.isLoading = s;
}, setStreamingContent(s) {
  this.streamingContent = s;
}, clearStreamingContent() {
  this.streamingContent = "";
}, endSession() {
  this.currentSession = null, this.isLoading = false, this.streamingContent = "";
}, resetSession() {
  this.currentSession && (this.currentSession.modeState = _s(), this.currentSession.updatedAt = Date.now()), this.isLoading = false, this.streamingContent = "";
} }), Fn = `\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u7684\u6311\u6218\u8BBE\u8BA1\u987E\u95EE\u3002\u4F60\u7684\u4EFB\u52A1\u662F\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u7528\u6237\u521B\u5EFA\u4E00\u4E2A\u6311\u6218\u5361\u3002

\u4F60\u9700\u8981\u6536\u96C6\u4EE5\u4E0B\u4FE1\u606F\uFF1A
1. \u6311\u6218\u7684\u57FA\u672C\u6982\u5FF5\uFF08\u540D\u79F0\u3001\u4E3B\u9898\u3001\u6545\u4E8B\u80CC\u666F\uFF09
2. \u6311\u6218\u7684\u76EE\u6807\uFF08\u73A9\u5BB6\u9700\u8981\u8FBE\u6210\u4EC0\u4E48\uFF09
3. \u6311\u6218\u7684\u5931\u8D25\u6761\u4EF6\uFF08\u4EC0\u4E48\u60C5\u51B5\u4E0B\u7B97\u5931\u8D25\uFF09
4. \u9700\u8981\u8FFD\u8E2A\u7684\u53D8\u91CF\uFF08\u5982\u597D\u611F\u5EA6\u3001\u91D1\u94B1\u3001\u65F6\u95F4\u7B49\uFF0C\u5305\u62EC\u521D\u59CB\u503C\u548C\u8303\u56F4\uFF09
5. \u89D2\u8272\u5728\u6311\u6218\u4E2D\u7684\u884C\u4E3A\u65B9\u5F0F\uFF08roleTaskPrompt\uFF09
6. \u7ED9\u73A9\u5BB6\u7684\u5F15\u5BFC\u63D0\u793A\uFF08userGuidance\uFF09
7. \u96BE\u5EA6\u548C\u9884\u671F\u4F53\u9A8C

\u8BF7\u7528\u53CB\u597D\u3001\u4E13\u4E1A\u7684\u8BED\u6C14\u4E0E\u7528\u6237\u4EA4\u6D41\uFF0C\u4E00\u6B21\u53EA\u95EE 1-2 \u4E2A\u95EE\u9898\u3002
\u5E2E\u52A9\u7528\u6237\u8BBE\u8BA1\u6709\u8DA3\u4E14\u5E73\u8861\u7684\u6311\u6218\uFF0C\u7ED9\u51FA\u4E13\u4E1A\u5EFA\u8BAE\u3002
\u5F53\u4F60\u8BA4\u4E3A\u6536\u96C6\u7684\u4FE1\u606F\u8DB3\u591F\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u6311\u6218\u65F6\uFF0C\u5728\u56DE\u590D\u7684\u672B\u5C3E\u6DFB\u52A0 [INFO_COMPLETE] \u6807\u8BB0\u3002`, On = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u4E00\u4EFD\u5B8C\u6574\u7684\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3\u3002
\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA\uFF1A

## \u6311\u6218\u540D\u79F0
[\u6311\u6218\u540D\u5B57]

## \u6311\u6218\u63CF\u8FF0
[\u6311\u6218\u7684\u80CC\u666F\u6545\u4E8B\u548C\u60C5\u5883\u63CF\u8FF0]

## \u53D8\u91CF\u8BBE\u8BA1
| \u53D8\u91CF\u540D | \u7C7B\u578B | \u521D\u59CB\u503C | \u8303\u56F4 | \u8BF4\u660E |
|--------|------|--------|------|------|
[\u5217\u51FA\u6240\u6709\u9700\u8981\u8FFD\u8E2A\u7684\u53D8\u91CF]

## \u76EE\u6807\u6761\u4EF6
[\u5217\u51FA\u73A9\u5BB6\u9700\u8981\u8FBE\u6210\u7684\u76EE\u6807\u53CA\u5176\u6761\u4EF6]

## \u5931\u8D25\u6761\u4EF6
[\u5217\u51FA\u4F1A\u5BFC\u81F4\u5931\u8D25\u7684\u6761\u4EF6]

## \u89D2\u8272\u884C\u4E3A\u6307\u5BFC
[\u89D2\u8272\u5728\u6B64\u6311\u6218\u4E2D\u5E94\u8BE5\u5982\u4F55\u8868\u73B0]

## \u73A9\u5BB6\u5F15\u5BFC
[\u7ED9\u73A9\u5BB6\u7684\u63D0\u793A\u548C\u5EFA\u8BAE]

\u8BF7\u786E\u4FDD\u8BBE\u8BA1\u5408\u7406\u3001\u5E73\u8861\uFF0C\u80FD\u591F\u5E26\u6765\u6709\u8DA3\u7684\u6E38\u620F\u4F53\u9A8C\u3002`, Hn = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u548C\u6311\u6218\u8BBE\u8BA1\uFF0C\u751F\u6210\u4E00\u4E2A\u7B26\u5408\u89C4\u8303\u7684\u6311\u6218\u5361 JSON\u3002

\u53D8\u91CF\u6761\u4EF6\u8868\u8FBE\u5F0F\u683C\u5F0F\uFF1A
- ['gt', 'varName', value] - \u5927\u4E8E
- ['gte', 'varName', value] - \u5927\u4E8E\u7B49\u4E8E
- ['lt', 'varName', value] - \u5C0F\u4E8E
- ['lte', 'varName', value] - \u5C0F\u4E8E\u7B49\u4E8E
- ['eq', 'varName', value] - \u7B49\u4E8E
- ['isTrue', 'varName'] - \u5E03\u5C14\u771F
- ['isFalse', 'varName'] - \u5E03\u5C14\u5047
- ['and', [...conditions]] - \u4E0E
- ['or', [...conditions]] - \u6216

\u8BF7\u4E25\u683C\u6309\u7167\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA JSON\uFF08\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\uFF09\uFF1A
{
  "name": "\u6311\u6218\u540D\u79F0",
  "description": "\u6311\u6218\u63CF\u8FF0",
  "characterId": "",
  "roleTaskPrompt": "\u89D2\u8272\u5728\u6311\u6218\u4E2D\u7684\u884C\u4E3A\u6307\u5BFC",
  "userGuidance": "\u7ED9\u73A9\u5BB6\u7684\u5F15\u5BFC\u63D0\u793A",
  "variables": {
    "\u53D8\u91CF\u540D": {
      "key": "\u53D8\u91CF\u540D",
      "type": "number",
      "description": "\u53D8\u91CF\u8BF4\u660E",
      "hidden": false,
      "initial": 0,
      "min": 0,
      "max": 100
    }
  },
  "goals": [
    {
      "key": "goal_key",
      "description": "\u76EE\u6807\u63CF\u8FF0",
      "condition": ["gte", "\u53D8\u91CF\u540D", 100],
      "characterPrompt": "\u8FBE\u6210\u540E\u7ED9\u89D2\u8272\u7684\u63D0\u793A",
      "userInfo": "\u8FBE\u6210\u540E\u7ED9\u73A9\u5BB6\u7684\u4FE1\u606F"
    }
  ],
  "failureChecks": [
    {
      "key": "failure_key",
      "description": "\u5931\u8D25\u6761\u4EF6\u63CF\u8FF0",
      "condition": ["lte", "\u53D8\u91CF\u540D", 0],
      "characterPrompt": "\u5931\u8D25\u540E\u7ED9\u89D2\u8272\u7684\u63D0\u793A",
      "userInfo": "\u5931\u8D25\u540E\u7ED9\u73A9\u5BB6\u7684\u4FE1\u606F"
    }
  ],
  "tags": ["\u6807\u7B7E1", "\u6807\u7B7E2"]
}

\u786E\u4FDD JSON \u683C\u5F0F\u6B63\u786E\uFF0C\u6761\u4EF6\u8868\u8FBE\u5F0F\u8BED\u6CD5\u6B63\u786E\u3002`;
function Bn() {
  const s = os(), t = te(), a = b.useRef(false), r = ke(T), n = b.useCallback(async (c) => {
    if (!(a.current || !T.currentSession)) try {
      a.current = true, T.setLoading(true), T.addUserMessage(c);
      const m = T.currentSession.modeState.currentUIState;
      (m === "idle" || m === "interview_waiting") && T.setUIState("interview_running");
      const o = T.getMessages(), h = [{ id: E(), role: "system", content: Fn }, ...o.map((v) => ({ id: v.id, role: v.role, content: v.content }))];
      let x = "";
      T.clearStreamingContent(), await s.callLLMStream(h, (v, f) => {
        x = f, T.setStreamingContent(f);
      });
      const g = x.includes("[INFO_COMPLETE]"), y = x.replace("[INFO_COMPLETE]", "").trim();
      T.addAssistantMessage(y), T.clearStreamingContent(), g ? T.setUIState("description_confirming") : T.setUIState("interview_waiting");
    } catch (m) {
      console.error("Chat Create Challenge Error:", m), U.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", { duration: 5e3, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => t({ to: "/config/llm" }) } }), T.setUIState("interview_waiting");
    } finally {
      a.current = false, T.setLoading(false);
    }
  }, [s, t]), i = b.useCallback(async () => {
    if (!(a.current || !T.currentSession)) try {
      a.current = true, T.setLoading(true), T.setUIState("description_generating");
      const c = T.getMessages(), m = [{ id: E(), role: "system", content: On }, ...c.map((h) => ({ id: h.id, role: h.role, content: h.content })), { id: E(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3\u3002" }];
      let o = "";
      T.clearStreamingContent(), await s.callLLMStream(m, (h, x) => {
        o = x, T.setStreamingContent(x);
      }), T.setGeneratedDescription(o), T.addAssistantMessage(o, "description_summary"), T.clearStreamingContent(), T.setUIState("description_confirming");
    } catch (c) {
      console.error("Generate Description Error:", c), U.error("\u751F\u6210\u8BBE\u8BA1\u603B\u7ED3\u5931\u8D25"), T.setUIState("interview_waiting");
    } finally {
      a.current = false, T.setLoading(false);
    }
  }, [s]), l = b.useCallback(async () => {
    if (!(a.current || !T.currentSession)) try {
      a.current = true, T.setLoading(true), T.setUIState("json_generating");
      const c = T.getMessages(), m = T.currentSession.modeState.generatedDescription, o = [{ id: E(), role: "system", content: Hn }, ...c.map((x) => ({ id: x.id, role: x.role, content: x.content }))];
      m && o.push({ id: E(), role: "assistant", content: `\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3\uFF1A
${m}` }), o.push({ id: E(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u4FE1\u606F\uFF0C\u751F\u6210\u6311\u6218\u5361 JSON\u3002\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\u3002" });
      let h = "";
      await s.callLLMStream(o, (x, g) => {
        h = g, T.setStreamingContent(g);
      });
      try {
        let x = h;
        const g = h.match(/```(?:json)?\s*([\s\S]*?)```/);
        g && (x = g[1].trim());
        const y = JSON.parse(x), v = Date.now(), f = { id: `chal-${v}`, name: y.name || "\u672A\u547D\u540D\u6311\u6218", description: y.description || "", characterId: y.characterId || "", roleTaskPrompt: y.roleTaskPrompt || "", userGuidance: y.userGuidance || "", variables: y.variables || {}, goals: y.goals || [], failureChecks: y.failureChecks || [], tags: y.tags || [], createdAt: v, updatedAt: v };
        T.setGeneratedJson(f), T.clearStreamingContent(), T.setUIState("json_editing"), U.success("\u6311\u6218\u5361\u751F\u6210\u6210\u529F\uFF01");
      } catch (x) {
        console.error("JSON Parse Error:", x), U.error("JSON \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), T.setUIState("description_confirming");
      }
    } catch (c) {
      console.error("Generate JSON Error:", c), U.error("\u751F\u6210\u6311\u6218\u5361\u5931\u8D25"), T.setUIState("description_confirming");
    } finally {
      a.current = false, T.setLoading(false);
    }
  }, [s]), u = b.useCallback(() => {
    T.setUIState("json_confirmed");
  }, []), d = b.useCallback(async () => {
    await l();
  }, [l]);
  return { store: r, sendMessage: n, generateDescription: i, generateJson: l, confirmJson: u, regenerateJson: d, isLoading: r.isLoading, streamingContent: r.streamingContent };
}
function Oo() {
  var _a2, _b, _c, _d;
  const s = te(), t = ke(T), { sendMessage: a, generateDescription: r, generateJson: n, confirmJson: i, regenerateJson: l, isLoading: u, streamingContent: d } = Bn(), [c, m] = b.useState("");
  b.useEffect(() => (T.currentSession || T.startNewSession(), () => {
  }), []);
  const o = ((_a2 = t.currentSession) == null ? void 0 : _a2.modeState.currentUIState) ?? "idle", h = Ln[o], x = ((_b = t.currentSession) == null ? void 0 : _b.modeState.messages) ?? [], g = (_c = t.currentSession) == null ? void 0 : _c.modeState.generatedJson, y = b.useCallback(async () => {
    if (!c.trim() || u) return;
    const j = c.trim();
    m(""), await a(j);
  }, [c, u, a]), v = b.useCallback((j) => {
    j.key === "Enter" && !j.shiftKey && (j.preventDefault(), y());
  }, [y]), f = b.useCallback(() => {
    if (!g) return;
    const j = new Blob([JSON.stringify(g, null, 2)], { type: "application/json" }), C = URL.createObjectURL(j), J = document.createElement("a");
    J.href = C, J.download = `${g.name || "challenge"}.json`, J.click(), URL.revokeObjectURL(C), U.success("\u6311\u6218\u5361\u5DF2\u5BFC\u51FA");
  }, [g]), S = b.useCallback(async () => {
    if (g) try {
      const j = JSON.parse(JSON.stringify(g));
      await ee.challenges.add(j), U.success(`\u6311\u6218 ${j.name} \u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A`), T.setUIState("completed"), s({ to: "/plaza/challenges" });
    } catch (j) {
      console.error("Add to plaza error:", j), U.error("\u6DFB\u52A0\u5931\u8D25");
    }
  }, [g, s]), w = b.useCallback(() => {
    T.endSession(), s({ to: "/create" });
  }, [s]), N = b.useCallback(() => {
    T.resetSession();
  }, []);
  return e.jsxs("div", { className: "flex flex-col h-full max-h-[calc(100vh-4rem)]", children: [e.jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx(_, { type: "button", variant: "ghost", size: "icon", onClick: w, children: e.jsx(ss, { className: "w-5 h-5" }) }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-lg font-semibold", children: "\u804A\u5929\u5F0F\u521B\u5EFA\u6311\u6218" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u521B\u5EFA\u6311\u6218\u5361" })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(H, { variant: "outline", children: h.label }), x.length > 0 && e.jsx(_, { type: "button", variant: "outline", size: "sm", onClick: N, children: "\u91CD\u65B0\u5F00\u59CB" })] })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [x.length === 0 && !d && e.jsxs("div", { className: "text-center text-muted-foreground py-12", children: [e.jsx(ve, { className: "w-12 h-12 mx-auto mb-4 opacity-50" }), e.jsx("p", { children: "\u5F00\u59CB\u63CF\u8FF0\u4F60\u60F3\u521B\u5EFA\u7684\u6311\u6218\u5427\uFF01" }), e.jsx("p", { className: "text-sm mt-2", children: "\u4F8B\u5982\uFF1A\u6211\u60F3\u521B\u5EFA\u4E00\u4E2A\u8BA8\u4EF7\u8FD8\u4EF7\u7684\u6311\u6218..." })] }), x.map((j) => e.jsxs("div", { className: L("max-w-[80%] rounded-lg p-3", j.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"), children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: j.content }), j.messageType === "description_summary" && e.jsx(H, { variant: "secondary", className: "mt-2", children: "\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3" })] }, j.id)), d && e.jsxs("div", { className: "max-w-[80%] rounded-lg p-3 bg-muted", children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: d }), e.jsx("span", { className: "inline-block w-2 h-4 bg-foreground/50 animate-pulse ml-1" })] })] }), e.jsxs("div", { className: "p-4 border-t space-y-3", children: [e.jsxs("div", { className: "flex flex-wrap gap-2", children: [o === "description_confirming" && e.jsxs(e.Fragment, { children: [e.jsxs(_, { type: "button", size: "sm", onClick: n, disabled: u, children: [e.jsx(Oe, { className: "w-4 h-4 mr-1" }), "\u786E\u8BA4\u5E76\u751F\u6210\u6311\u6218\u5361"] }), e.jsxs(_, { type: "button", size: "sm", variant: "outline", onClick: r, disabled: u, children: [e.jsx(St, { className: "w-4 h-4 mr-1" }), "\u91CD\u65B0\u751F\u6210\u8BBE\u8BA1"] })] }), (o === "interview_waiting" || o === "idle") && x.length > 2 && e.jsxs(_, { type: "button", size: "sm", variant: "secondary", onClick: n, disabled: u, children: [e.jsx(ve, { className: "w-4 h-4 mr-1" }), "\u7ACB\u5373\u751F\u6210\u6311\u6218\u5361"] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(K, { value: c, onChange: (j) => m(j.target.value), onKeyDown: v, placeholder: h.placeholder, disabled: !h.inputEnabled || u, className: "min-h-[60px] max-h-[120px] resize-none" }), e.jsx(_, { type: "button", size: "icon", onClick: y, disabled: !h.inputEnabled || u || !c.trim(), children: e.jsx(ze, { className: "w-4 h-4" }) })] })] })] }), (o === "json_editing" || o === "json_confirmed" || o === "completed") && g && e.jsxs("div", { className: "w-96 border-l overflow-y-auto p-4 space-y-4", children: [e.jsxs(V, { children: [e.jsx(X, { className: "pb-2", children: e.jsxs(W, { className: "text-base flex items-center justify-between", children: ["\u6311\u6218\u5361\u9884\u89C8", e.jsx("div", { className: "flex gap-1", children: e.jsx(_, { type: "button", size: "icon", variant: "ghost", onClick: l, disabled: u, title: "\u91CD\u65B0\u751F\u6210", children: e.jsx(St, { className: "w-4 h-4" }) }) })] }) }), e.jsxs(q, { className: "space-y-3", children: [e.jsx(yt, { label: "\u540D\u79F0", value: g.name, onChange: (j) => T.updateGeneratedJsonField("name", j) }), e.jsx(yt, { label: "\u63CF\u8FF0", value: g.description, multiline: true, onChange: (j) => T.updateGeneratedJsonField("description", j) }), e.jsx(yt, { label: "\u89D2\u8272\u884C\u4E3A\u6307\u5BFC", value: g.roleTaskPrompt, multiline: true, onChange: (j) => T.updateGeneratedJsonField("roleTaskPrompt", j) }), e.jsx(yt, { label: "\u73A9\u5BB6\u5F15\u5BFC", value: g.userGuidance, multiline: true, onChange: (j) => T.updateGeneratedJsonField("userGuidance", j) }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u53D8\u91CF" }), e.jsx("div", { className: "mt-1 space-y-1", children: Object.entries(g.variables || {}).map(([j, C]) => e.jsxs("div", { className: "text-xs bg-muted rounded p-2", children: [e.jsx("span", { className: "font-medium", children: j }), e.jsxs("span", { className: "text-muted-foreground ml-2", children: ["\u521D\u59CB\u503C:", " ", String(C.initial ?? 0)] })] }, j)) })] }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u76EE\u6807" }), e.jsx("div", { className: "mt-1 space-y-1", children: (g.goals || []).map((j, C) => e.jsx("div", { className: "text-xs bg-muted rounded p-2", children: e.jsx("span", { className: "font-medium", children: j.description }) }, C)) })] }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u5931\u8D25\u6761\u4EF6" }), e.jsx("div", { className: "mt-1 space-y-1", children: (g.failureChecks || []).map((j, C) => e.jsx("div", { className: "text-xs bg-muted rounded p-2", children: e.jsx("span", { className: "font-medium", children: j.description }) }, C)) })] }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u6807\u7B7E" }), e.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: (_d = g.tags) == null ? void 0 : _d.map((j, C) => e.jsx(H, { variant: "secondary", className: "text-xs", children: j }, C)) })] })] })] }), o !== "completed" && e.jsxs("div", { className: "flex flex-col gap-2", children: [e.jsxs(_, { type: "button", onClick: S, className: "w-full", children: [e.jsx(ge, { className: "w-4 h-4 mr-2" }), "\u6DFB\u52A0\u5230\u5E7F\u573A"] }), e.jsxs(_, { type: "button", variant: "outline", onClick: f, className: "w-full", children: [e.jsx(rs, { className: "w-4 h-4 mr-2" }), "\u5BFC\u51FA\u4E3A\u6587\u4EF6"] }), o === "json_editing" && e.jsxs(_, { type: "button", variant: "secondary", onClick: i, className: "w-full", children: [e.jsx(Oe, { className: "w-4 h-4 mr-2" }), "\u786E\u8BA4\u5B8C\u6210\u7F16\u8F91"] })] }), o === "completed" && e.jsxs("div", { className: "text-center text-muted-foreground py-4", children: [e.jsx(Oe, { className: "w-8 h-8 mx-auto mb-2 text-green-500" }), e.jsx("p", { children: "\u6311\u6218\u5361\u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A\uFF01" })] })] })] })] });
}
function yt({ label: s, value: t, multiline: a = false, onChange: r }) {
  const [n, i] = b.useState(false), [l, u] = b.useState(t), d = () => {
    r(l), i(false);
  }, c = () => {
    u(t), i(false);
  };
  return n ? e.jsxs("div", { className: "space-y-1", children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: s }), a ? e.jsx(K, { value: l, onChange: (m) => u(m.target.value), className: "text-sm min-h-[60px]", autoFocus: true }) : e.jsx("input", { type: "text", value: l, onChange: (m) => u(m.target.value), className: "w-full text-sm border rounded px-2 py-1 bg-background", autoFocus: true }), e.jsxs("div", { className: "flex gap-1", children: [e.jsx(_, { type: "button", size: "sm", variant: "ghost", onClick: d, children: "\u4FDD\u5B58" }), e.jsx(_, { type: "button", size: "sm", variant: "ghost", onClick: c, children: "\u53D6\u6D88" })] })] }) : e.jsxs("div", { className: "cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors", onClick: () => {
    u(t), i(true);
  }, children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: s }), e.jsx("p", { className: L("text-sm", a ? "whitespace-pre-wrap line-clamp-3" : "truncate"), children: t || e.jsx("span", { className: "text-muted-foreground italic", children: "\u70B9\u51FB\u7F16\u8F91" }) })] });
}
const Gn = { keys: [], content: "", enabled: true, insertion_order: 100, use_regex: false, extensions: {} }, zn = /[,，]/, Jn = (s) => {
  var _a2;
  const [t, a] = b.useState(((_a2 = s.value) == null ? void 0 : _a2.entries) || []), [r, n] = b.useState(null), i = (m) => {
    var _a3;
    a(m), s.onChange({ ...s.value, entries: m, extensions: ((_a3 = s.value) == null ? void 0 : _a3.extensions) || {} });
  }, l = () => {
    const m = { ...Gn, id: crypto.randomUUID() };
    i([...t, m]), n(t.length);
  }, u = (m) => {
    i(t.filter((o, h) => h !== m)), r === m && n(null);
  }, d = (m, o) => {
    const h = [...t];
    h[m] = { ...h[m], ...o }, i(h);
  }, c = (m) => {
    n(r === m ? null : m);
  };
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h3", { className: "text-sm font-medium", children: ["\u77E5\u8BC6\u4E66\u6761\u76EE (", t.length, ")"] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u5F53\u5173\u952E\u8BCD\u5728\u5BF9\u8BDD\u4E2D\u5339\u914D\u65F6\uFF0C\u81EA\u52A8\u63D2\u5165\u76F8\u5173\u8BBE\u5B9A" })] }), e.jsxs(_, { variant: "outline", size: "sm", onClick: l, type: "button", className: "h-8", children: [e.jsx(ge, { className: "w-3.5 h-3.5 mr-1" }), " \u6DFB\u52A0\u6761\u76EE"] })] }), e.jsx("div", { className: "space-y-2", children: t.length === 0 ? e.jsxs("div", { className: "py-12 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(it, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-xs", children: "\u6682\u65E0\u77E5\u8BC6\u4E66\u6761\u76EE" })] }) : t.map((m, o) => e.jsxs(V, { className: L("overflow-hidden border-muted/60 shadow-none transition-all", r === o ? "ring-1 ring-primary/20" : "hover:border-primary/20"), children: [e.jsxs("div", { className: "px-4 py-3 flex items-center justify-between cursor-pointer group", onClick: () => c(o), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [e.jsx("div", { className: L("w-2 h-2 rounded-full", m.enabled ? "bg-green-500" : "bg-muted-foreground/30") }), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: m.name || (m.keys.length > 0 ? m.keys.slice(0, 3).join(", ") : "(\u672A\u547D\u540D\u6761\u76EE)") }), e.jsxs("span", { className: "text-[10px] text-muted-foreground truncate", children: ["\u4F18\u5148\u7EA7: ", m.insertion_order, " | ", "use_regex" in m && m.use_regex ? "\u6B63\u5219" : "\u666E\u901A"] })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(_, { variant: "ghost", size: "icon", className: "h-8 w-8 text-destructive opacity-0 group-hover:opacity-100 transition-opacity", onClick: (h) => {
    h.stopPropagation(), u(o);
  }, type: "button", children: e.jsx(Ge, { className: "w-3.5 h-3.5" }) }), r === o ? e.jsx(dr, { className: "w-4 h-4 text-muted-foreground" }) : e.jsx(zs, { className: "w-4 h-4 text-muted-foreground" })] })] }), r === o && e.jsxs(q, { className: "px-4 pb-4 pt-1 space-y-4 border-t border-muted/40 bg-muted/5 animate-in slide-in-from-top-2 duration-200", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { className: "text-xs", children: "\u6761\u76EE\u540D\u79F0 (\u53EF\u9009)" }), e.jsx(O, { value: m.name || "", onChange: (h) => d(o, { name: h.target.value }), placeholder: "\u7ED9\u6761\u76EE\u4E00\u4E2A\u4FBF\u4E8E\u8BC6\u522B\u7684\u540D\u5B57", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "flex items-end gap-6 h-8", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(_t, { checked: m.enabled, onCheckedChange: (h) => d(o, { enabled: h }) }), e.jsx(D, { className: "text-xs", children: "\u542F\u7528\u72B6\u6001" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(_t, { checked: "use_regex" in m ? m.use_regex : false, onCheckedChange: (h) => d(o, { use_regex: h }) }), e.jsx(D, { className: "text-xs", children: "\u6B63\u5219\u5339\u914D" })] })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(D, { className: "text-xs flex items-center gap-1.5", children: ["\u89E6\u53D1\u5173\u952E\u8BCD (Keys)", e.jsx($t, { className: "w-3 h-3 text-muted-foreground" })] }), e.jsx(O, { value: m.keys.join(", "), onChange: (h) => d(o, { keys: h.target.value.split(zn).map((x) => x.trim()).filter(Boolean) }), placeholder: "\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u5173\u952E\u8BCD", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { className: "text-xs", children: "\u5185\u5BB9 (Content)" }), e.jsx(K, { value: m.content, onChange: (h) => d(o, { content: h.target.value }), placeholder: "\u5339\u914D\u65F6\u6CE8\u5165\u7684\u6587\u672C\u5185\u5BB9", className: "min-h-24 text-xs font-mono" })] }), e.jsx("div", { className: "grid grid-cols-2 gap-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { className: "text-xs", children: "\u63D2\u5165\u987A\u5E8F (Insertion Order)" }), e.jsx(O, { type: "number", value: m.insertion_order, onChange: (h) => d(o, { insertion_order: Number.parseInt(h.target.value) || 0 }), className: "h-8 text-xs" })] }) })] })] }, m.id || `entry-${o}`)) })] });
}, Jt = { name: "", nickname: "", description: "", personality: "", scenario: "", first_mes: "", mes_example: "", system_prompt: "", post_history_instructions: "", creator_notes: "", creator: "", character_version: "1.0.0", tags: [], alternate_greetings: [], avatar: "", imageBase64: "", character_book: void 0 }, oe = le({ formData: { ...Jt }, updateField(s, t) {
  this.formData[s] = t;
}, setAvatar(s) {
  this.formData.avatar = s;
}, setLargeImage(s) {
  this.formData.imageBase64 = s;
}, addGreeting() {
  this.formData.alternate_greetings.push("");
}, updateGreeting(s, t) {
  s >= 0 && s < this.formData.alternate_greetings.length && (this.formData.alternate_greetings[s] = t);
}, removeGreeting(s) {
  s >= 0 && s < this.formData.alternate_greetings.length && this.formData.alternate_greetings.splice(s, 1);
}, setTags(s) {
  this.formData.tags = s;
}, loadInitialData(s) {
  s ? Object.assign(this.formData, { ...s, tags: s.tags || [], alternate_greetings: [...s.alternate_greetings || []], character_book: s.character_book ? { ...s.character_book, entries: s.character_book.entries.map((t) => ({ ...t, keys: [...t.keys], extensions: { ...t.extensions }, secondary_keys: t.secondary_keys ? [...t.secondary_keys] : void 0, comment: t.comment })), extensions: { ...s.character_book.extensions } } : void 0 }) : Object.assign(this.formData, Jt);
}, resetForm() {
  Object.assign(this.formData, Jt);
}, getFormDataForSave() {
  return xe(this.formData);
} }), Vn = /[,，]/, Ho = (s) => {
  const { className: t } = s, a = s.mode || (s.initialData ? "edit" : "create"), r = b.useId(), n = b.useRef(null), i = b.useRef(null), l = ke(oe), [u, d] = b.useState(false), [c, m] = b.useState(false);
  b.useEffect(() => {
    oe.loadInitialData(s.initialData);
  }, [s.initialData]);
  const o = (S) => {
    const { name: w, value: N } = S.target;
    w === "tags" ? oe.setTags(N.split(Vn).map((j) => j.trim()).filter(Boolean)) : oe.updateField(w, N);
  }, h = (S) => {
    var _a2;
    const w = (_a2 = S.target.files) == null ? void 0 : _a2[0];
    if (w) {
      const N = new FileReader();
      N.onloadend = () => {
        oe.setAvatar(N.result);
      }, N.readAsDataURL(w);
    }
  }, x = (S) => {
    var _a2;
    const w = (_a2 = S.target.files) == null ? void 0 : _a2[0];
    if (w) {
      const N = new FileReader();
      N.onloadend = () => {
        oe.setLargeImage(N.result);
      }, N.readAsDataURL(w);
    }
  }, g = () => {
    oe.addGreeting();
  }, y = (S, w) => {
    oe.updateGreeting(S, w);
  }, v = (S) => {
    oe.removeGreeting(S);
  }, f = (S) => {
    S.preventDefault(), s.onSave(oe.getFormDataForSave());
  };
  return e.jsxs(V, { className: L("max-w-4xl mx-auto shadow-lg border-muted/60", t), children: [e.jsx(X, { className: "pb-4", children: e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: e.jsx(Ae, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(W, { className: "text-xl", children: a === "edit" ? "\u7F16\u8F91\u89D2\u8272" : "\u521B\u4F5C\u8005\u5DE5\u574A" }), e.jsx(ne, { children: a === "edit" ? "\u4FEE\u6539\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" : "\u5B9A\u4E49\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" })] })] }) }) }), e.jsxs("form", { onSubmit: f, children: [e.jsx(q, { children: e.jsxs(sr, { type: "multiple", defaultValue: ["identity", "dialogue", "prompt", "meta"], className: "w-full", children: [e.jsxs(gt, { className: "border-none", value: "identity", children: [e.jsx(ft, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u8EAB\u4EFD\u8BBE\u5B9A" }) }), e.jsxs(bt, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-start", children: [e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-32 h-32 rounded-2xl bg-muted border-2 border-dashed ${u ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a2;
    return (_a2 = n.current) == null ? void 0 : _a2.click();
  }, onDragOver: (S) => {
    S.preventDefault(), d(true);
  }, onDragLeave: () => d(false), onDrop: (S) => {
    var _a2, _b;
    S.preventDefault(), d(false);
    const w = (_a2 = S.dataTransfer.files) == null ? void 0 : _a2[0];
    if ((_b = w == null ? void 0 : w.type) == null ? void 0 : _b.startsWith("image/")) {
      const N = new FileReader();
      N.onloadend = () => {
        oe.setAvatar(N.result);
      }, N.readAsDataURL(w);
    }
  }, children: [l.formData.avatar ? e.jsx("img", { src: l.formData.avatar, alt: "Avatar", className: "w-full h-full object-cover" }) : e.jsx(Xt, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(ge, { className: "w-6 h-6 text-white" }) })] }), e.jsx(O, { type: "file", ref: n, className: "hidden", accept: "image/*", onChange: h }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5934\u50CF" })] }), e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-64 h-32 rounded-2xl bg-muted border-2 border-dashed ${c ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a2;
    return (_a2 = i.current) == null ? void 0 : _a2.click();
  }, onDragOver: (S) => {
    S.preventDefault(), m(true);
  }, onDragLeave: () => m(false), onDrop: (S) => {
    var _a2, _b;
    S.preventDefault(), m(false);
    const w = (_a2 = S.dataTransfer.files) == null ? void 0 : _a2[0];
    if ((_b = w == null ? void 0 : w.type) == null ? void 0 : _b.startsWith("image/")) {
      const N = new FileReader();
      N.onloadend = () => {
        oe.setLargeImage(N.result);
      }, N.readAsDataURL(w);
    }
  }, children: [l.formData.imageBase64 ? e.jsx("img", { src: l.formData.imageBase64, alt: "\u89D2\u8272\u5927\u56FE", className: "w-full h-full object-cover" }) : e.jsx(Xt, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(ge, { className: "w-6 h-6 text-white" }) })] }), e.jsx(O, { type: "file", ref: i, className: "hidden", accept: "image/*", onChange: x }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5927\u56FE" })] }), e.jsxs("div", { className: "grow space-y-4 w-full", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${r}-name`, children: "\u57FA\u672C\u540D\u79F0 (Name)" }), e.jsx(O, { id: `${r}-name`, name: "name", value: l.formData.name, onChange: o, placeholder: "\u5982\uFF1A\u827E\u7433", required: true })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${r}-nickname`, children: "\u5934\u8854/\u6635\u79F0 (Nickname)" }), e.jsx(O, { id: `${r}-nickname`, name: "nickname", value: l.formData.nickname, onChange: o, placeholder: "\u5982\uFF1A\u6668\u66E6\u4E4B\u5203" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${r}-tags`, children: "\u68C0\u7D22\u6807\u7B7E (Tags)" }), e.jsx(O, { id: `${r}-tags`, name: "tags", value: l.formData.tags.join(", "), onChange: o, placeholder: "\u7528\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u5947\u5E7B, \u7CBE\u7075, \u6218\u58EB" })] })] })] }), e.jsxs("div", { className: "space-y-4 pt-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${r}-personality`, children: "\u4EBA\u683C/\u6027\u683C (Personality)" }), e.jsx(K, { id: `${r}-personality`, name: "personality", value: l.formData.personality, onChange: o, placeholder: "\u8BE6\u7EC6\u63CF\u8FF0\u89D2\u8272\u7684\u6027\u683C\u3001\u602A\u7656\u3001\u601D\u7EF4\u903B\u8F91\u7B49", className: "min-h-32 leading-relaxed" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${r}-description`, children: "\u8EAB\u4E16/\u63CF\u8FF0 (Description)" }), e.jsx(K, { id: `${r}-description`, name: "description", value: l.formData.description, onChange: o, placeholder: "\u89D2\u8272\u7684\u8FC7\u5F80\u3001\u5916\u8C8C\u63CF\u8FF0\u4E0E\u80CC\u666F\u6545\u4E8B", className: "min-h-32 leading-relaxed" })] })] })] })] }), e.jsxs(gt, { className: "border-none", value: "dialogue", children: [e.jsx(ft, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5BF9\u8BDD\u5199\u4F5C" }) }), e.jsxs(bt, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(D, { htmlFor: `${r}-first_mes`, className: "flex items-center gap-2", children: [e.jsx(ns, { className: "w-4 h-4 text-primary" }), "\u5F00\u573A\u8BED (First Message)"] }), e.jsx(K, { id: `${r}-first_mes`, name: "first_mes", value: l.formData.first_mes, onChange: o, placeholder: "\u8FDB\u5165\u5BF9\u8BDD\u540E\u89D2\u8272\u7684\u7B2C\u4E00\u53E5\u8BDD", className: "min-h-32" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx(D, { className: "text-sm", children: "\u5907\u7528\u95EE\u5019\u8BED (Alternate Greetings)" }), e.jsxs(_, { variant: "ghost", size: "sm", onClick: g, type: "button", className: "h-8 rounded-lg", children: [e.jsx(ge, { className: "w-3 h-3 mr-1" }), " \u6DFB\u52A0"] })] }), e.jsx("div", { className: "space-y-2", children: l.formData.alternate_greetings.map((S, w) => e.jsxs("div", { className: "flex gap-2", children: [e.jsx(K, { value: S, onChange: (N) => y(w, N.target.value), placeholder: `\u95EE\u5019\u8BED\u5019\u9009 ${w + 1}`, className: "min-h-16 text-sm" }), e.jsx(_, { variant: "ghost", size: "icon", onClick: () => v(w), type: "button", className: "h-10 w-10 text-destructive shrink-0", children: e.jsx(Ge, { className: "w-4 h-4" }) })] }, `greeting-${w}-${S.length}`)) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${r}-scenario`, children: "\u5BF9\u8BDD\u573A\u666F\u8BBE\u5B9A (Scenario)" }), e.jsx(K, { id: `${r}-scenario`, name: "scenario", value: l.formData.scenario, onChange: o, placeholder: "\u5B9A\u4E49\u5F00\u573A\u65F6\u6240\u5904\u7684\u7279\u5B9A\u73AF\u5883\u6216\u5F53\u524D\u53D1\u751F\u7684\u4E8B\u4EF6", className: "min-h-24" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${r}-mes_example`, children: "\u4E66\u5199\u98CE\u683C\u793A\u4F8B (Message Examples)" }), e.jsxs(ne, { className: "text-xs mb-2", children: ["\u4F7F\u7528 <START> \u5F00\u59CB\u4E00\u6BB5\u793A\u4F8B\uFF0C", "{{user}}", " \u4EE3\u8868\u7528\u6237"] }), e.jsx(K, { id: `${r}-mes_example`, name: "mes_example", value: l.formData.mes_example, onChange: o, placeholder: "<START>\\n{{user}}: \u4F60\u662F\u8C01\uFF1F\\n\u89D2\u8272: \u6211\u662F...", className: "min-h-48 font-mono text-xs" })] })] })] }), e.jsxs(gt, { className: "border-none", value: "prompt", children: [e.jsx(ft, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "Prompt \u6A21\u677F" }) }), e.jsxs(bt, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(D, { htmlFor: `${r}-system_prompt`, className: "flex items-center gap-2", children: [e.jsx(Ct, { className: "w-4 h-4 text-blue-500" }), "\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD (System Prompt Override)"] }), e.jsx(K, { id: `${r}-system_prompt`, name: "system_prompt", value: l.formData.system_prompt, onChange: o, placeholder: "\u8986\u76D6\u89D2\u8272\u7684\u5168\u5C40\u7CFB\u7EDF\u63D0\u793A\u8BCD...", className: "min-h-48 font-mono text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(D, { htmlFor: `${r}-post_history_instructions`, className: "flex items-center gap-2", children: [e.jsx(Ct, { className: "w-4 h-4 text-purple-500" }), "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"] }), e.jsx(K, { id: `${r}-post_history_instructions`, name: "post_history_instructions", value: l.formData.post_history_instructions, onChange: o, placeholder: "\u7D27\u968F\u5BF9\u8BDD\u5386\u53F2\u540E\u7684\u7279\u5B9A\u6307\u4EE4\uFF08\u5F3A\u5236\u8F93\u51FA\u683C\u5F0F\u7B49\uFF09", className: "min-h-32 font-mono text-xs" })] })] })] }), e.jsxs(gt, { className: "border-none", value: "meta", children: [e.jsx(ft, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5143\u6570\u636E/\u5907\u6CE8" }) }), e.jsxs(bt, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${r}-creator`, children: "\u5361\u7247\u521B\u5EFA\u8005 (Creator)" }), e.jsx(O, { id: `${r}-creator`, name: "creator", value: l.formData.creator, onChange: o, placeholder: "\u60A8\u7684\u540D\u5B57\u6216 ID" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${r}-character_version`, children: "\u89D2\u8272\u7248\u672C (Version)" }), e.jsx(O, { id: `${r}-character_version`, name: "character_version", value: l.formData.character_version, onChange: o, placeholder: "1.0.0" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${r}-creator_notes`, children: "\u521B\u5EFA\u8005\u5907\u6CE8 (Creator Notes)" }), e.jsx(K, { id: `${r}-creator_notes`, name: "creator_notes", value: l.formData.creator_notes, onChange: o, placeholder: "\u8BB0\u4E0B\u6709\u5173\u6B64\u89D2\u8272\u5361\u7684\u5F00\u53D1\u7B14\u8BB0\uFF0C\u4EC5\u5728\u5DE5\u574A\u53EF\u89C1", className: "min-h-32" })] }), e.jsx("div", { className: "pt-4", children: e.jsx(Jn, { value: l.formData.character_book, onChange: (S) => oe.updateField("character_book", S) }) })] })] })] }) }), e.jsxs(es, { className: "flex justify-between border-t py-6 bg-muted/10", children: [e.jsxs(_, { variant: "ghost", type: "button", onClick: s.onCancel, className: "rounded-lg h-11 px-6", children: [e.jsx(Ut, { className: "w-4 h-4 mr-2" }), " ", "\u653E\u5F03\u4FEE\u6539"] }), e.jsxs(_, { type: "submit", className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20", children: [e.jsx(Xs, { className: "w-4 h-4 mr-2" }), " ", a === "edit" ? "\u4FDD\u5B58\u4FEE\u6539" : "\u751F\u6210\u5E76\u4FDD\u5B58\u89D2\u8272\u5361"] })] })] })] });
}, qn = ["isTrue", "isFalse", "eq", "neq", "gt", "gte", "lt", "lte", "includes", "has"], Ns = ["and", "or"], _a = (s) => {
  const { condition: t, variables: a, onChange: r, level: n = 0 } = s, i = t[0], l = Object.keys(a), u = (o) => {
    Ns.includes(o) ? r([o, [t]]) : ["isTrue", "isFalse"].includes(o) ? r([o, l[0] || ""]) : r([o, l[0] || "", ""]);
  };
  if (Ns.includes(i)) {
    const o = t[1];
    return e.jsxs("div", { className: `p-4 border rounded-lg space-y-4 bg-muted/5 ${n > 0 ? "ml-6" : ""}`, children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(H, { variant: "outline", className: "bg-primary/5", children: "\u590D\u5408\u903B\u8F91" }), e.jsxs(Ye, { value: i, onValueChange: (h) => u(h), children: [e.jsx(Qe, { className: "h-8 w-24", children: e.jsx(Ze, {}) }), e.jsxs(et, { children: [e.jsx(pe, { value: "and", children: "\u5E76\u4E14 (AND)" }), e.jsx(pe, { value: "or", children: "\u6216\u8005 (OR)" })] })] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(_, { variant: "outline", size: "sm", className: "h-7 text-[10px]", onClick: () => r([...o[0]]), type: "button", children: "\u8F6C\u4E3A\u5355\u4E00\u6761\u4EF6" }), e.jsxs(_, { variant: "outline", size: "sm", className: "h-7 text-[10px]", onClick: () => r([i, [...o, ["isTrue", l[0] || ""]]]), type: "button", children: [e.jsx(ge, { className: "w-3 h-3 mr-1" }), " \u6DFB\u52A0\u5B50\u6761\u4EF6"] })] })] }), e.jsx("div", { className: "space-y-3", children: o.map((h, x) => e.jsxs("div", { className: "relative group", children: [e.jsx(_a, { condition: h, variables: a, level: n + 1, onChange: (g) => {
      const y = [...o];
      y[x] = g, r([i, y]);
    } }), e.jsx(_, { variant: "ghost", size: "icon", className: "absolute -right-2 top-0 h-6 w-6 text-destructive opacity-0 group-hover:opacity-100", onClick: () => {
      const g = o.filter((y, v) => v !== x);
      g.length === 0 ? u("isTrue") : r([i, g]);
    }, type: "button", children: e.jsx(Ge, { className: "w-3 h-3" }) })] }, x)) })] });
  }
  const c = t[1], m = t[2];
  return e.jsxs("div", { className: `flex flex-wrap items-center gap-2 p-2 border rounded-md bg-background ${n > 0 ? "ml-6" : ""}`, children: [e.jsxs(Ye, { value: c, onValueChange: (o) => {
    const h = [...t];
    h[1] = o, r(h);
  }, children: [e.jsx(Qe, { className: "h-8 w-40 overflow-hidden", children: e.jsx(Ze, { placeholder: "\u9009\u62E9\u53D8\u91CF" }) }), e.jsx(et, { children: l.map((o) => e.jsx(pe, { value: o, children: o }, o)) })] }), e.jsxs(Ye, { value: i, onValueChange: (o) => u(o), children: [e.jsx(Qe, { className: "h-8 w-28", children: e.jsx(Ze, {}) }), e.jsx(et, { children: qn.map((o) => e.jsx(pe, { value: o, children: o }, o)) })] }), !["isTrue", "isFalse"].includes(i) && e.jsx(O, { value: String(m ?? ""), onChange: (o) => {
    const h = [...t];
    let x = o.target.value;
    x === "true" ? x = true : x === "false" ? x = false : !isNaN(Number(x)) && x.trim() !== "" && (x = Number(x)), h[2] = x, r(h);
  }, placeholder: "\u76EE\u6807\u503C", className: "h-8 w-32 text-xs" }), e.jsx("div", { className: "ml-auto flex gap-1", children: e.jsx(_, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: () => u("and"), type: "button", children: e.jsx(Ws, { className: "w-4 h-4" }) }) })] });
}, Ss = (s) => {
  const { variables: t, title: a = "\u4EFB\u52A1\u76EE\u6807", description: r = "\u5B9A\u4E49\u6311\u6218\u6A21\u5F0F\u4E0B\u9700\u8981\u8FBE\u6210\u7684\u91CC\u7A0B\u7891" } = s, [n, i] = b.useState(s.value || []), l = (m) => {
    i(m), s.onChange(m);
  }, u = () => {
    const m = { key: `goal_${E(5)}`, description: "", condition: ["eq", Object.keys(t)[0] || "", ""], characterPrompt: "", userInfo: "" };
    l([...n, m]);
  }, d = (m) => {
    l(n.filter((o) => o.key !== m));
  }, c = (m, o) => {
    l(n.map((h) => h.key === m ? { ...h, ...o } : h));
  };
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h3", { className: "text-sm font-medium", children: [a, " (", n.length, ")"] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: r })] }), e.jsxs(_, { variant: "outline", size: "sm", onClick: u, type: "button", className: "h-8", children: [e.jsx(ge, { className: "w-3.5 h-3.5 mr-1" }), " \u6DFB\u52A0\u9879"] })] }), e.jsx("div", { className: "space-y-3", children: n.length === 0 ? e.jsxs("div", { className: "py-8 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(mt, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-xs", children: "\u6682\u65E0\u914D\u7F6E\u9879" })] }) : n.map((m) => e.jsx(V, { className: "border-muted/60 shadow-none", children: e.jsx(q, { className: "p-4 space-y-4", children: e.jsxs("div", { className: "flex gap-4", children: [e.jsxs("div", { className: "grow space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(D, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx(He, { className: "w-3 h-3" }), " \u552F\u4E00\u6807\u8BC6 (Key)"] }), e.jsx(O, { value: m.key, onChange: (o) => c(m.key, { key: o.target.value }), placeholder: "\u552F\u4E00\u8BC6\u522B\u7801", className: "h-9 text-sm font-mono" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(D, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx(mr, { className: "w-3 h-3" }), " \u663E\u793A\u63CF\u8FF0"] }), e.jsx(O, { value: m.description, onChange: (o) => c(m.key, { description: o.target.value }), placeholder: "\u4F8B\u5982\uFF1A\u8BF4\u670D\u827E\u7433\u653E\u4E0B\u6B66\u5668", className: "h-9 text-sm" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(D, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx(He, { className: "w-3 h-3" }), " \u89E6\u53D1\u6761\u4EF6 (\u7ED3\u6784\u5316\u903B\u8F91)"] }), e.jsx(_a, { condition: m.condition, variables: t, onChange: (o) => c(m.key, { condition: o }) })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(D, { className: "text-xs flex items-center gap-1.5 font-bold opacity-70", children: [e.jsx(ns, { className: "w-3 h-3" }), " \u89D2\u8272\u63D0\u793A (\u89E6\u53D1\u540E)"] }), e.jsx(K, { value: m.characterPrompt || "", onChange: (o) => c(m.key, { characterPrompt: o.target.value }), placeholder: "\u89E6\u53D1\u540E\u5BF9\u89D2\u8272\u7684\u989D\u5916\u6307\u4EE4...", className: "min-h-15 text-xs resize-none" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(D, { className: "text-xs flex items-center gap-1.5 font-bold opacity-70", children: [e.jsx($t, { className: "w-3 h-3" }), " \u7528\u6237\u6D88\u606F (\u89E6\u53D1\u540E)"] }), e.jsx(K, { value: m.userInfo || "", onChange: (o) => c(m.key, { userInfo: o.target.value }), placeholder: "\u89E6\u53D1\u540E\u663E\u793A\u7ED9\u7528\u6237\u7684\u4FE1\u606F...", className: "min-h-15 text-xs resize-none" })] })] })] }), e.jsx(_, { variant: "ghost", size: "icon", className: "h-8 w-8 text-destructive self-start", onClick: () => d(m.key), type: "button", children: e.jsx(Ge, { className: "w-3.5 h-3.5" }) })] }) }) }, m.key)) })] });
}, Kn = /[,，]/, Xn = (s) => {
  const { variables: t, variableConfigs: a, onChange: r } = s, [n, i] = b.useState(""), l = () => {
    const c = n.trim();
    if (!c || t[c]) return;
    const m = { key: c, type: "number", hidden: false, initial: 0 }, o = 0;
    r({ ...t, [c]: { key: c, value: o } }, { ...a, [c]: m }), i("");
  }, u = (c) => {
    const m = { ...t };
    delete m[c];
    const o = { ...a };
    delete o[c], r(m, o);
  }, d = (c, m) => {
    const o = a[c];
    if (!o) return;
    let h = { ...o, ...m };
    m.type && m.type !== o.type && (m.type === "number" ? h = { key: c, type: "number", hidden: false, initial: 0 } : m.type === "boolean" ? h = { key: c, type: "boolean", hidden: false, initial: false } : m.type === "string" ? h = { key: c, type: "string", hidden: false, initial: "" } : m.type === "tags" && (h = { key: c, type: "tags", hidden: false, initial: [] }));
    const x = { ...a, [c]: h }, g = { ...t, [c]: { key: c, value: h.initial ?? 0 } };
    r(g, x);
  };
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex gap-2", children: [e.jsx("div", { className: "grow", children: e.jsx(O, { value: n, onChange: (c) => i(c.target.value), placeholder: "\u53D8\u91CF\u952E\u540D (\u5982\uFF1Atrust, points, health)", onKeyDown: (c) => {
    c.key === "Enter" && (c.preventDefault(), l());
  } }) }), e.jsxs(_, { onClick: l, type: "button", disabled: !n.trim() || !!t[n.trim()], children: [e.jsx(ge, { className: "w-4 h-4 mr-2" }), " \u6DFB\u52A0\u53D8\u91CF"] })] }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: Object.entries(a).length === 0 ? e.jsxs("div", { className: "col-span-full p-12 border border-dashed rounded-xl flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(Wt, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-sm", children: "\u6682\u672A\u5B9A\u4E49\u4EFB\u4F55\u53D8\u91CF" })] }) : Object.entries(a).map(([c, m]) => e.jsxs(V, { className: "relative group border-muted/60 hover:border-primary/30 transition-colors", children: [e.jsx(_, { variant: "ghost", size: "icon", className: "absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity z-10", onClick: () => u(c), type: "button", children: e.jsx(Ge, { className: "w-3.5 h-3.5" }) }), e.jsxs(q, { className: "p-4 space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("div", { className: "bg-primary/10 p-1.5 rounded-lg", children: e.jsx(He, { className: "w-4 h-4 text-primary" }) }), e.jsx("span", { className: "font-bold text-sm truncate pr-8", children: c })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(D, { className: "text-[10px] uppercase text-muted-foreground font-bold", children: "\u6570\u636E\u7C7B\u578B" }), e.jsxs(Ye, { value: m.type, onValueChange: (o) => d(c, { type: o }), children: [e.jsx(Qe, { className: "h-8 text-sm", children: e.jsx(Ze, {}) }), e.jsxs(et, { children: [e.jsxs(pe, { value: "number", className: "text-xs", children: [e.jsx(Wt, { className: "w-3 h-3 inline mr-1" }), " \u6570\u503C"] }), e.jsxs(pe, { value: "boolean", className: "text-xs", children: [e.jsx(ur, { className: "w-3 h-3 inline mr-1" }), " \u5E03\u5C14"] }), e.jsxs(pe, { value: "string", className: "text-xs", children: [e.jsx(hr, { className: "w-3 h-3 inline mr-1" }), " \u6587\u672C"] }), e.jsxs(pe, { value: "tags", className: "text-xs", children: [e.jsx(Ys, { className: "w-3 h-3 inline mr-1" }), " \u6807\u7B7E\u96C6\u5408"] })] })] })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(D, { className: "text-[10px] uppercase text-muted-foreground font-bold", children: "\u521D\u59CB\u503C (Initial)" }), m.type === "number" && e.jsx(O, { type: "number", value: m.initial, onChange: (o) => d(c, { initial: Number(o.target.value) }), className: "h-8 text-sm font-mono" }), m.type === "boolean" && e.jsxs("div", { className: "flex items-center gap-2 h-8", children: [e.jsx(_t, { checked: m.initial, onCheckedChange: (o) => d(c, { initial: o }) }), e.jsx("span", { className: "text-xs font-medium", children: m.initial ? "\u5F00\u542F/\u771F" : "\u5173\u95ED/\u5047" })] }), m.type === "string" && e.jsx(O, { value: m.initial, onChange: (o) => d(c, { initial: o.target.value }), className: "h-8 text-sm" }), m.type === "tags" && e.jsx(O, { value: m.initial.join(", "), onChange: (o) => d(c, { initial: o.target.value.split(Kn).map((h) => h.trim()).filter(Boolean) }), placeholder: "\u9017\u53F7\u5206\u9694\u521D\u59CB\u6807\u7B7E", className: "h-8 text-sm" })] }), m.type === "number" && e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-1", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(D, { className: "text-[10px] text-muted-foreground", children: "\u6700\u5C0F\u503C" }), e.jsx(O, { type: "number", value: m.min ?? "", onChange: (o) => d(c, { min: o.target.value ? Number(o.target.value) : void 0 }), className: "h-7 text-[10px] px-2" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(D, { className: "text-[10px] text-muted-foreground", children: "\u6700\u5927\u503C" }), e.jsx(O, { type: "number", value: m.max ?? "", onChange: (o) => d(c, { max: o.target.value ? Number(o.target.value) : void 0 }), className: "h-7 text-[10px] px-2" })] })] })] })] })] }, c)) })] });
}, Vt = { id: "", characterId: "", roleTaskPrompt: "", userGuidance: "", name: "", description: "", goals: [], failureChecks: [], variables: {}, tags: [] }, qt = {}, Kt = {}, he = le({ formData: { ...Vt }, variables: { ...qt }, variableConfigs: { ...Kt }, updateField(s, t) {
  this.formData[s] = t;
}, setVariables(s) {
  this.variables = { ...s };
}, setVariableConfigs(s) {
  this.variableConfigs = { ...s };
}, updateVariablesAndConfigs(s, t) {
  this.variables = { ...s }, this.variableConfigs = { ...t };
}, setTags(s) {
  this.formData.tags = s;
}, loadInitialData(s) {
  s ? (Object.assign(this.formData, { ...s, goals: s.goals || [], failureChecks: s.failureChecks || [], variables: s.variables || {}, tags: s.tags || [], ...s.createdAt ? { createdAt: s.createdAt } : {}, ...s.updatedAt ? { updatedAt: s.updatedAt } : {} }), this.variableConfigs = s.variables || {}) : (Object.assign(this.formData, Vt), this.variables = { ...qt }, this.variableConfigs = { ...Kt });
}, resetForm() {
  Object.assign(this.formData, Vt), this.variables = { ...qt }, this.variableConfigs = { ...Kt };
}, getFormDataForSave() {
  return { ...xe(this.formData), variables: xe(this.variableConfigs) };
} }), Wn = /[,，]/, Bo = (s) => {
  var _a2;
  const t = b.useId(), a = ke(he);
  b.useEffect(() => {
    he.loadInitialData(s.initialData);
  }, [s.initialData]);
  const r = (n) => {
    n.preventDefault(), s.onSave(he.getFormDataForSave());
  };
  return e.jsxs(V, { className: "max-w-4xl mx-auto shadow-lg border-muted/60", children: [e.jsx(X, { className: "pb-4", children: e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: e.jsx(Be, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(W, { className: "text-xl", children: "\u6311\u6218\u8BBE\u8BA1\u5DE5\u4F5C\u5BA4" }), e.jsx(ne, { children: "\u8BBE\u8BA1\u5173\u5361\u76EE\u6807\u3001\u6570\u503C\u53D8\u91CF\u4E0E\u53D9\u4E8B\u89C4\u5219" })] })] }) }) }), e.jsxs("form", { onSubmit: r, children: [e.jsx(q, { children: e.jsxs(Fs, { defaultValue: "base", className: "w-full", children: [e.jsxs(Os, { className: "grid grid-cols-4 w-full h-11 bg-muted/30 p-1 mb-8", children: [e.jsxs(Ie, { value: "base", className: "gap-2", children: [e.jsx(Ct, { className: "w-4 h-4" }), " \u57FA\u7840\u8BBE\u5B9A"] }), e.jsxs(Ie, { value: "goals", className: "gap-2", children: [e.jsx(pr, { className: "w-4 h-4" }), " \u4EFB\u52A1\u76EE\u6807"] }), e.jsxs(Ie, { value: "failures", className: "gap-2", children: [e.jsx(xr, { className: "w-4 h-4" }), " \u5931\u8D25\u6761\u4EF6"] }), e.jsxs(Ie, { value: "variables", className: "gap-2", children: [e.jsx(Wt, { className: "w-4 h-4" }), " \u6570\u503C\u53D8\u91CF"] })] }), e.jsx(De, { value: "base", className: "space-y-6 animate-in fade-in-50 duration-300", children: e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${t}-name`, children: "\u6311\u6218\u540D\u79F0" }), e.jsx(O, { id: `${t}-name`, value: a.formData.name, onChange: (n) => he.updateField("name", n.target.value), placeholder: "\u5982\uFF1A\u8FF7\u5931\u4E4B\u57CE\u7684\u5951\u7EA6", required: true })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${t}-charId`, children: "\u7ED1\u5B9A\u89D2\u8272 ID" }), e.jsx(O, { id: `${t}-charId`, value: a.formData.characterId, onChange: (n) => he.updateField("characterId", n.target.value), placeholder: "\u4F8B\u5982: kallen-123", required: true })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${t}-desc`, children: "\u80CC\u666F\u4ECB\u7ECD\u4E0E\u89C4\u5219\u8BF4\u660E" }), e.jsx(K, { id: `${t}-desc`, value: a.formData.description, onChange: (n) => he.updateField("description", n.target.value), placeholder: "\u63CF\u8FF0\u8BE5\u6311\u6218\u7684\u80CC\u666F\u6545\u4E8B\uFF0C\u4EE5\u53CA\u73A9\u5BB6\u9700\u8981\u9075\u5B88\u7684\u7279\u6B8A\u89C4\u5219...", className: "min-h-32 leading-relaxed" })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${t}-roleTask`, children: "\u89D2\u8272\u4EFB\u52A1\u63D0\u793A\u8BCD (DM\u89C6\u89D2)" }), e.jsx(K, { id: `${t}-roleTask`, value: a.formData.roleTaskPrompt, onChange: (n) => he.updateField("roleTaskPrompt", n.target.value), placeholder: "\u5728\u8BE5\u6311\u6218\u4E2D\uFF0C\u901A\u8FC7AI\u7CFB\u7EDF\u53D1\u7ED9\u89D2\u8272\u7684\u7279\u6B8A\u6307\u4EE4...", className: "min-h-24 text-xs font-mono" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${t}-userGuidance`, children: "\u7528\u6237\u6307\u5F15\u8BF4\u660E" }), e.jsx(K, { id: `${t}-userGuidance`, value: a.formData.userGuidance, onChange: (n) => he.updateField("userGuidance", n.target.value), placeholder: "\u7ED9\u8FDB\u5165\u6311\u6218\u7684\u7528\u6237\u7684\u6587\u5B57\u6307\u5F15...", className: "min-h-24 text-xs font-mono" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(D, { htmlFor: `${t}-tags`, children: "\u6311\u6218\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)" }), e.jsx(O, { id: `${t}-tags`, value: (_a2 = a.formData.tags) == null ? void 0 : _a2.join(", "), onChange: (n) => he.setTags(n.target.value.split(Wn).map((i) => i.trim()).filter(Boolean)), placeholder: "\u5947\u5E7B, \u60AC\u7591, \u9AD8\u96BE\u5EA6" })] })] }) }), e.jsx(De, { value: "goals", className: "animate-in fade-in-50 duration-300", children: e.jsx(Ss, { value: a.formData.goals, variables: a.variableConfigs, onChange: (n) => he.updateField("goals", n) }) }), e.jsx(De, { value: "failures", className: "animate-in fade-in-50 duration-300", children: e.jsx(Ss, { title: "\u5931\u8D25\u68C0\u67E5", description: "\u5B9A\u4E49\u5BFC\u81F4\u6311\u6218\u5931\u8D25\u7684\u6761\u4EF6", value: a.formData.failureChecks, variables: a.variableConfigs, onChange: (n) => he.updateField("failureChecks", n) }) }), e.jsx(De, { value: "variables", className: "animate-in fade-in-50 duration-300", children: e.jsx(Xn, { variables: a.variables, variableConfigs: a.variableConfigs, onChange: (n, i) => he.updateVariablesAndConfigs(n, i) }) })] }) }), e.jsxs(es, { className: "flex justify-between border-t py-6 bg-muted/10", children: [e.jsxs(_, { variant: "ghost", type: "button", onClick: s.onCancel, className: "rounded-lg h-11 px-6", children: [e.jsx(Ut, { className: "w-4 h-4 mr-2" }), " \u653E\u5F03\u4FEE\u6539"] }), e.jsxs(_, { type: "submit", className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20", children: [e.jsx(Xs, { className: "w-4 h-4 mr-2" }), " \u4FDD\u5B58\u6311\u6218\u8BBE\u8BA1"] })] })] })] });
}, Yn = (s) => !s.lorebook || !s.lorebook.entries || s.lorebook.entries.length === 0 ? e.jsx(V, { className: "bg-muted/20 border-dashed", children: e.jsxs(q, { className: "py-10 flex flex-col items-center justify-center text-muted-foreground", children: [e.jsx(gr, { className: "w-10 h-10 mb-3 opacity-20" }), e.jsx("p", { className: "text-sm", children: "\u8BE5\u89D2\u8272\u6682\u65E0\u7ED1\u5B9A\u7684\u77E5\u8BC6\u4E66 (Lorebook)" })] }) }) : e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-wrap gap-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-muted/50 px-3 py-1.5 rounded-full border", children: [e.jsx(it, { className: "w-3.5 h-3.5 text-primary" }), e.jsx("span", { className: "font-medium text-muted-foreground mr-1", children: "\u626B\u63CF\u6DF1\u5EA6:" }), s.lorebook.scan_depth ?? 50] }), e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-muted/50 px-3 py-1.5 rounded-full border", children: [e.jsx(Ws, { className: "w-3.5 h-3.5 text-blue-500" }), e.jsx("span", { className: "font-medium text-muted-foreground mr-1", children: "Token \u9884\u7B97:" }), s.lorebook.token_budget ?? 500] }), s.lorebook.recursive_scanning && e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-green-500/5 text-green-600 px-3 py-1.5 rounded-full border border-green-500/20", children: [e.jsx(fr, { className: "w-3.5 h-3.5" }), "\u9012\u5F52\u626B\u63CF\u5DF2\u5F00\u542F"] })] }), e.jsx("div", { className: "grid grid-cols-1 gap-4", children: s.lorebook.entries.map((t, a) => e.jsx(V, { className: "overflow-hidden group hover:border-primary/40 transition-colors shadow-sm", children: e.jsxs("div", { className: "flex", children: [e.jsx("div", { className: "w-1 bg-primary group-hover:w-2 transition-all shrink-0" }), e.jsxs("div", { className: "grow", children: [e.jsxs(X, { className: "py-4 flex flex-row items-start justify-between space-y-0", children: [e.jsxs("div", { className: "space-y-1.5 grow", children: [e.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [e.jsx(W, { className: "text-base font-bold", children: t.name || `\u6761\u76EE ${a + 1}` }), !t.enabled && e.jsx(H, { variant: "secondary", children: "\u5DF2\u7981\u7528" }), t.constant && e.jsx(H, { variant: "outline", className: "text-amber-600 border-amber-200 bg-amber-50", children: "\u5E38\u91CF" })] }), e.jsx("div", { className: "flex flex-wrap gap-1.5", children: t.keys.map((r) => e.jsxs("div", { className: "flex items-center gap-1 bg-primary/5 text-[10px] text-primary px-1.5 py-0.5 rounded border border-primary/10 font-mono", children: [e.jsx(Ys, { className: "w-2.5 h-2.5" }), r] }, `key-${r}-${t.id || a}`)) })] }), e.jsxs("div", { className: "text-[10px] text-muted-foreground font-mono text-right shrink-0 ml-4", children: ["Order: ", t.insertion_order, " ", e.jsx("br", {}), "Pos: ", t.position === "before_char" ? "Before Char" : "After Char"] })] }), e.jsxs(q, { className: "pb-4", children: [e.jsx("div", { className: "text-sm bg-muted/30 p-3 rounded-lg border text-muted-foreground leading-relaxed whitespace-pre-wrap", children: t.content }), t.comment && e.jsxs("p", { className: "mt-2 text-[10px] text-muted-foreground italic flex items-center gap-1", children: [e.jsx(it, { className: "w-2.5 h-2.5 opacity-50" }), "\u6CE8: ", t.comment] })] })] })] }) }, t.id || `entry-${a}`)) })] }), Go = (s) => e.jsx("div", { className: "space-y-6", children: e.jsxs(Fs, { defaultValue: "basic", className: "w-full", children: [e.jsxs(Os, { className: "grid grid-cols-4 w-full h-11 bg-muted/30 p-1 mb-6", children: [e.jsx(Ie, { value: "basic", className: "data-[state=active]:bg-background", children: "\u57FA\u7840\u8BBE\u5B9A" }), e.jsx(Ie, { value: "prompt", className: "data-[state=active]:bg-background", children: "\u63D0\u793A\u8BCD\u6A21\u677F" }), e.jsx(Ie, { value: "lorebook", className: "data-[state=active]:bg-background", children: "\u77E5\u8BC6\u4E66" }), e.jsx(Ie, { value: "advanced", className: "data-[state=active]:bg-background", children: "\u9AD8\u7EA7/\u6269\u5C55" })] }), e.jsxs(De, { value: "basic", className: "space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [e.jsxs(V, { className: "shadow-xs border-muted/50", children: [e.jsx(X, { className: "py-4", children: e.jsxs(W, { className: "text-sm flex items-center gap-2", children: [e.jsx(Ae, { className: "w-4 h-4 text-primary" }), "\u4EBA\u683C\u4E0E\u8EAB\u4E16"] }) }), e.jsxs(q, { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(Fe, { children: "\u4EBA\u683C\u63CF\u8FF0 (Personality)" }), e.jsx(Ce, { children: s.character.personality })] }), e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(Fe, { children: "\u89D2\u8272\u63CF\u8FF0 (Description)" }), e.jsx(Ce, { children: s.character.description })] })] })] }), e.jsxs(V, { className: "shadow-xs border-muted/50", children: [e.jsx(X, { className: "py-4", children: e.jsxs(W, { className: "text-sm flex items-center gap-2", children: [e.jsx(ns, { className: "w-4 h-4 text-green-500" }), "\u5F00\u573A\u8BED\u4E0E\u793A\u4F8B"] }) }), e.jsxs(q, { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(Fe, { children: "\u7B2C\u4E00\u6761\u6D88\u606F (First Message)" }), e.jsx(Ce, { variant: "primary", children: s.character.first_mes })] }), e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(Fe, { children: "\u5BF9\u8BDD\u573A\u666F\u63CF\u8FF0 (Scenario)" }), e.jsx(Ce, { children: s.character.scenario })] }), s.character.alternate_greetings.length > 0 && e.jsxs("div", { className: "space-y-1.5", children: [e.jsxs(Fe, { children: ["\u5907\u7528\u95EE\u5019\u8BED (", s.character.alternate_greetings.length, ")"] }), e.jsx("div", { className: "space-y-2", children: s.character.alternate_greetings.map((t, a) => e.jsx(Ce, { className: "py-2 opacity-80", children: t }, `alt-greet-${a}-${t.length}`)) })] })] })] })] }), e.jsxs(V, { className: "shadow-xs border-muted/50", children: [e.jsx(X, { className: "py-4", children: e.jsxs(W, { className: "text-sm flex items-center gap-2", children: [e.jsx(br, { className: "w-4 h-4 text-amber-500" }), "\u6D88\u606F\u793A\u4F8B (Message Examples)"] }) }), e.jsx(q, { children: e.jsx(Ce, { className: "font-mono text-xs", children: s.character.mes_example }) })] })] }), e.jsxs(De, { value: "prompt", className: "space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs(V, { className: "border-muted/50", children: [e.jsxs(X, { className: "py-4", children: [e.jsxs(W, { className: "text-sm flex items-center gap-2 text-blue-600", children: [e.jsx(Ct, { className: "w-4 h-4" }), "\u7CFB\u7EDF\u63D0\u793A\u8BCD\u6A21\u677F (System Prompt)"] }), e.jsx(ne, { className: "text-[11px]", children: "\u5C06\u63D2\u5165\u5230\u5BF9\u8BDD\u5386\u53F2\u7684\u6700\u524D\u65B9\uFF0C\u7528\u4E8E\u5B9A\u4E49\u89D2\u8272\u7684\u6838\u5FC3\u884C\u4E3A\u51C6\u5219\u3002" })] }), e.jsx(q, { children: e.jsx(Ce, { className: "font-mono text-xs bg-blue-500/2 border-blue-500/10", children: s.character.system_prompt || "\u4F7F\u7528\u5168\u5C40\u9ED8\u8BA4\u8BBE\u7F6E" }) })] }), e.jsxs(V, { className: "border-muted/50", children: [e.jsxs(X, { className: "py-4", children: [e.jsxs(W, { className: "text-sm flex items-center gap-2 text-purple-600", children: [e.jsx(yr, { className: "w-4 h-4" }), "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"] }), e.jsx(ne, { className: "text-[11px]", children: "\u5C06\u63D2\u5165\u5230\u6BCF\u6761\u8BF7\u6C42\u6D88\u606F\u4E4B\u540E\uFF0C\u7528\u4E8E\u5F3A\u5236 LLM \u9075\u5B88\u7279\u5B9A\u8F93\u51FA\u683C\u5F0F\u3002" })] }), e.jsx(q, { children: e.jsx(Ce, { className: "font-mono text-xs bg-purple-500/2 border-purple-500/10", children: s.character.post_history_instructions || "\u65E0\u7279\u5B9A\u6307\u4EE4" }) })] })] }), e.jsx(De, { value: "lorebook", className: "animate-in fade-in-50 duration-300", children: e.jsx(Yn, { lorebook: s.character.character_book }) }), e.jsx(De, { value: "advanced", className: "space-y-6 animate-in fade-in-50 duration-300", children: e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [e.jsxs(V, { className: "border-muted/50", children: [e.jsx(X, { className: "py-4", children: e.jsx(W, { className: "text-sm", children: "\u5143\u6570\u636E\u4FE1\u606F" }) }), e.jsxs(q, { className: "space-y-3", children: [e.jsx(jt, { label: "\u521B\u5EFA\u8005", value: s.character.creator }), e.jsx(jt, { label: "\u89D2\u8272\u7248\u672C", value: s.character.character_version }), e.jsx(jt, { label: "\u521B\u5EFA\u4E8E", value: s.character.createdAt ? new Date(s.character.createdAt).toLocaleString() : "-" }), e.jsx(jt, { label: "\u66F4\u65B0\u4E8E", value: s.character.updatedAt ? new Date(s.character.updatedAt).toLocaleString() : "-" }), e.jsxs("div", { className: "pt-2", children: [e.jsx(Fe, { children: "\u521B\u5EFA\u8005\u7B14\u8BB0 (Creator Notes)" }), e.jsx(Ce, { className: "mt-1 text-xs", children: s.character.creator_notes })] })] })] }), e.jsxs(V, { className: "border-muted/50", children: [e.jsx(X, { className: "py-4", children: e.jsx(W, { className: "text-sm", children: "\u6269\u5C55\u5B57\u6BB5 (Extensions)" }) }), e.jsx(q, { children: e.jsx("div", { className: "max-h-75 overflow-auto rounded-lg border bg-muted/20 p-4", children: e.jsx("pre", { className: "text-[10px] font-mono leading-tight", children: JSON.stringify(s.character.extensions, null, 2) }) }) })] })] }) })] }) }), Fe = (s) => e.jsx("span", { className: "text-[11px] font-bold text-muted-foreground/80 uppercase tracking-widest block", children: s.children }), Ce = (s) => e.jsx("div", { className: `text-sm rounded-lg border p-3 leading-relaxed whitespace-pre-wrap ${s.variant === "primary" ? "bg-primary/5 text-primary/90 border-primary/20 italic" : "bg-muted/30 text-muted-foreground/90 border-muted/50"} ${s.className || ""}`, children: s.children || e.jsx("span", { className: "opacity-30", children: "\u672A\u586B\u5199" }) }), jt = (s) => e.jsxs("div", { className: "flex justify-between items-center text-xs py-1.5 border-b border-muted/50 last:border-0", children: [e.jsx("span", { className: "text-muted-foreground", children: s.label }), e.jsx("span", { className: "font-mono font-medium", children: s.value ?? "-" })] }), zo = (s) => {
  const t = te();
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs(V, { className: "border-primary/20 bg-primary/5", children: [e.jsxs(X, { children: [e.jsxs(W, { className: "text-lg flex items-center gap-2", children: [e.jsx(ge, { className: "w-5 h-5" }), "\u5F00\u542F\u65B0\u4F1A\u8BDD"] }), e.jsx(ne, { children: "\u9009\u62E9\u4E00\u4E2A\u6A21\u5F0F\u5F00\u59CB\u4E0E\u8BE5\u89D2\u8272\u7684\u6545\u4E8B" })] }), e.jsx(q, { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: ["chat", "challenge", "dnd", "group-chat"].map((a) => {
    const r = It(a), n = r.icon;
    return e.jsxs(_, { className: "h-auto py-4 flex flex-col items-center gap-2", variant: "outline", onClick: () => s.onStartNew(a), type: "button", children: [e.jsx(n, { className: `w-6 h-6 ${r.colorClass}` }), e.jsxs("div", { className: "text-center", children: [e.jsxs("div", { className: "font-bold", children: [r.label, "\u6A21\u5F0F"] }), e.jsx("div", { className: "text-[10px] text-muted-foreground", children: r.description })] })] }, a);
  }) })] }), e.jsxs(V, { children: [e.jsx(X, { children: e.jsx(W, { className: "text-lg", children: "\u5386\u53F2\u4F1A\u8BDD" }) }), e.jsx(q, { className: "space-y-3", children: s.sessions.length > 0 ? s.sessions.map((a) => e.jsxs(_, { className: "w-full justify-between items-center h-auto py-4 px-5 border hover:bg-muted/50 transition-colors", variant: "ghost", onClick: () => t({ to: "/session/$sessionId", params: { sessionId: a.id } }), type: "button", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: e.jsx(Qs, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-left", children: [e.jsx("div", { className: "font-semibold", children: "\u7EE7\u7EED\u4E0A\u6B21\u6545\u4E8B" }), e.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: ["\u6700\u540E\u6D3B\u8DC3: ", new Date(a.updatedAt).toLocaleString()] })] })] }), e.jsx("div", { className: "flex flex-col items-end gap-2", children: e.jsx(H, { variant: a.mode === "chat" ? "secondary" : "default", className: "text-[10px]", children: It(a.mode).badgeText }) })] }, a.id)) : e.jsx("div", { className: "text-center py-10 border rounded-lg border-dashed", children: e.jsx("p", { className: "text-muted-foreground text-sm", children: "\u8FD8\u6CA1\u6709\u8BE5\u89D2\u8272\u7684\u5386\u53F2\u4F1A\u8BDD" }) }) })] })] });
};
function Jo({ character: s, trigger: t }) {
  const [a, r] = b.useState(false), [n, i] = b.useState(false), l = b.useId(), u = () => {
    try {
      const d = va(s, { includeImageBase64: n }), c = "data:text/json;charset=utf-8," + encodeURIComponent(d), m = document.createElement("a");
      m.setAttribute("href", c), m.setAttribute("download", `${s.name}.json`), document.body.appendChild(m), m.click(), m.remove(), U.success(`\u89D2\u8272 ${s.name} \u5DF2\u5BFC\u51FA\u4E3A JSON`), r(false);
    } catch (d) {
      U.error("\u5BFC\u51FA\u5931\u8D25"), console.error("Export error:", d);
    }
  };
  return e.jsxs(At, { open: a, onOpenChange: r, children: [e.jsx(Rs, { asChild: true, children: t || e.jsxs(_, { variant: "outline", size: "sm", className: "flex items-center gap-2", type: "button", children: [e.jsx(Vs, { className: "w-4 h-4" }), "\u5BFC\u51FA JSON"] }) }), e.jsxs(Tt, { className: "sm:max-w-md", children: [e.jsx(Et, { children: e.jsx(lt, { children: "\u5BFC\u51FA\u89D2\u8272\u4E3A JSON" }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("p", { className: "text-sm text-muted-foreground", children: ['\u5C06\u89D2\u8272 "', s.name, '" \u5BFC\u51FA\u4E3A JSON \u6587\u4EF6\u3002'] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Zt, { id: `${l}-include-image-single`, checked: n, onCheckedChange: (d) => i(d === true) }), e.jsx(D, { htmlFor: `${l}-include-image-single`, className: "text-sm", children: "\u5305\u542B Base64 \u56FE\u50CF\u6570\u636E" })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: n ? "\u6587\u4EF6\u5C06\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5927\u4F46\u5B8C\u6574\u3002" : "\u6587\u4EF6\u4E0D\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5C0F\u4F46\u9700\u8981\u5355\u72EC\u5904\u7406\u56FE\u50CF\u3002" })] }), e.jsxs("div", { className: "flex justify-end gap-2", children: [e.jsx(_, { variant: "outline", onClick: () => r(false), children: "\u53D6\u6D88" }), e.jsx(_, { onClick: u, children: "\u5BFC\u51FA" })] })] })] });
}
const Na = (s) => {
  const [t, ...a] = s;
  if (["and", "or", "all", "any", "some"].includes(t)) {
    const r = a[0], n = t === "and" || t === "all" ? " \u4E14 " : " \u6216 ";
    return `(${r.map(Na).join(n)})`;
  }
  return t === "isTrue" || t === "isFalse" ? `${a[0]} \u4E3A ${t === "isTrue" ? "\u771F" : "\u5047"}` : `${a[0]} ${t} ${JSON.stringify(a[1])}`;
}, Vo = (s) => e.jsxs("div", { className: "space-y-6", children: [e.jsxs(V, { children: [e.jsxs(X, { children: [e.jsxs(W, { className: "text-lg flex items-center gap-2", children: [e.jsx(mt, { className: "w-5 h-5 text-destructive" }), "\u6838\u5FC3\u4ECB\u7ECD"] }), e.jsx(ne, { children: "\u6311\u6218\u80CC\u666F\u4E0E\u4E16\u754C\u89C2\u8BBE\u5B9A" })] }), e.jsx(q, { children: e.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap", children: s.challenge.description }) })] }), e.jsxs(V, { children: [e.jsxs(X, { children: [e.jsxs(W, { className: "text-lg flex items-center gap-2", children: [e.jsx(Zs, { className: "w-5 h-5 text-primary" }), "\u76EE\u6807\u6311\u6218 (Goals)"] }), e.jsx(ne, { children: "\u5F53\u6240\u6709\u76EE\u6807\u8FBE\u6210\u65F6\uFF0C\u6311\u6218\u5373\u544A\u6210\u529F" })] }), e.jsx(q, { className: "space-y-4", children: s.challenge.goals.map((t, a) => e.jsxs("div", { className: "flex gap-4 p-4 rounded-lg bg-muted/40 border group hover:border-primary/50 transition-colors", children: [e.jsx("div", { className: "w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0", children: a + 1 }), e.jsxs("div", { className: "grow", children: [e.jsx("div", { className: "font-medium text-sm", children: t.description }), e.jsxs("div", { className: "text-[10px] text-muted-foreground mt-2 font-mono flex items-center gap-2", children: [e.jsx(H, { variant: "outline", className: "text-[9px] font-mono py-0 h-4 shrink-0", children: "Condition" }), e.jsx("span", { className: "truncate", children: Na(t.condition) })] })] })] }, t.key)) })] }), e.jsxs(V, { children: [e.jsx(X, { children: e.jsxs(W, { className: "text-lg flex items-center gap-2", children: [e.jsx(He, { className: "w-5 h-5 text-secondary" }), "\u53D8\u91CF\u914D\u7F6E (Variables)"] }) }), e.jsx(q, { children: e.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: Object.entries(s.challenge.variables).map(([t, a]) => e.jsxs("div", { className: "p-3 rounded-md bg-muted/30 border flex justify-between items-center", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx("div", { className: "text-xs font-bold font-mono", children: t }), e.jsxs("div", { className: "text-[10px] text-muted-foreground", children: ["\u521D\u59CB\u503C: ", String(a.initial ?? "null")] })] }), e.jsx(H, { variant: "secondary", className: "text-[10px] capitalize", children: a.type })] }, t)) }) })] })] }), qo = (s) => {
  const t = te();
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs(V, { className: "border-primary/20 bg-primary/5", children: [e.jsxs(X, { children: [e.jsxs(W, { className: "text-lg flex items-center gap-2", children: [e.jsx(ve, { className: "w-5 h-5 text-primary" }), "\u4EE5\u6B64\u5267\u672C\u5F00\u542F\u65B0\u6311\u6218"] }), e.jsx(ne, { children: "\u8BF7\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u4F5C\u4E3A\u6311\u6218\u7684\u4E3B\u89D2" })] }), e.jsx(q, { className: "space-y-3", children: e.jsx("div", { className: "grid grid-cols-1 gap-2", children: s.characters.map((a) => e.jsxs(_, { variant: "outline", className: "w-full justify-start gap-4 h-14 bg-background", onClick: () => s.onStartNew(a.id), type: "button", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0", children: e.jsx(ot, { className: "w-4 h-4 text-muted-foreground" }) }), e.jsxs("div", { className: "text-left", children: [e.jsxs("div", { className: "font-semibold text-sm", children: ["\u4F7F\u7528 ", a.name] }), e.jsx("div", { className: "text-[10px] text-muted-foreground truncate max-w-50", children: a.description })] })] }, a.id)) }) })] }), e.jsxs(V, { children: [e.jsx(X, { children: e.jsx(W, { className: "text-lg", children: "\u5DF2\u5B58\u6311\u6218\u8FDB\u5EA6" }) }), e.jsx(q, { className: "space-y-3", children: s.sessions.length > 0 ? s.sessions.map((a) => e.jsxs(_, { className: "w-full justify-between items-center h-auto py-4 px-5 border hover:bg-muted/50 transition-colors", variant: "ghost", onClick: () => t({ to: "/session/$sessionId", params: { sessionId: a.id } }), type: "button", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: e.jsx(Qs, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-left", children: [e.jsx("div", { className: "font-semibold", children: "\u7EE7\u7EED\u6311\u6218" }), e.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: ["\u6700\u540E\u6D3B\u8DC3: ", new Date(a.updatedAt).toLocaleString()] })] })] }), e.jsxs("div", { className: "flex flex-col items-end gap-1", children: [e.jsx(H, { variant: "outline", className: "text-[9px] h-5", children: "\u4EE5\u6B64\u5267\u672C\u8FDB\u53D1" }), e.jsx("span", { className: "text-[10px] text-muted-foreground italic", children: a.characterId ? `\u89D2\u8272 ID: ${a.characterId.slice(0, 8)}...` : "\u672A\u77E5\u89D2\u8272" })] })] }, a.id)) : e.jsx("div", { className: "text-center py-10 border rounded-lg border-dashed", children: e.jsx("p", { className: "text-muted-foreground text-sm", children: "\u8FD8\u6CA1\u6709\u57FA\u4E8E\u6B64\u5267\u672C\u7684\u6311\u6218\u8BB0\u5F55" }) }) })] })] });
}, Bt = { characters: Ee, challenges: tt, sessions: Le, createSessionDB: (s) => new xa(s) }, Qn = { groupingDelayMs: 6e4 };
class Ne {
  constructor(t, a) {
    __publicField(this, "state");
    __publicField(this, "options", xs(Qn));
    this.state = t, a && this.assignOptions(a);
  }
  assignOptions(t) {
    Object.assign(this.options, t);
  }
  setOptions(t) {
    this.options = xs(t);
  }
  getHistoryItems() {
    return this.state.historyItems;
  }
  getVisibleHistoryItems() {
    return this.state.historyItems.filter((t) => !(t.deleted || t.hidden));
  }
  getHistoryItemById(t) {
    return this.state.historyItems.find((a) => a.id === t);
  }
  getProcessingItem() {
    return this.state.processingItem;
  }
  getLastHistoryItem() {
    return this.state.historyItems.at(-1);
  }
  getHistoryCount() {
    return this.state.historyItems.length;
  }
  getItemsByType(t) {
    return this.state.historyItems.filter((a) => a.type === t);
  }
  findHistoryItems(t) {
    return this.state.historyItems.filter(t);
  }
  addHistoryItem(t) {
    if (t.type === "character_message") this.addCharacterMessageIntoHistory(t);
    else {
      const a = { ...t, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
      this.state.historyItems.push(a);
    }
  }
  deleteHistoryItemById(t) {
    const a = this.state.historyItems.find((r) => r.id === t);
    a && (a.deleted = true);
  }
  deleteHistoryItemByIds(t) {
    for (const a of this.state.historyItems) t.includes(a.id) && (a.deleted = true);
  }
  deleteHistoryItems(t) {
    for (const a of this.state.historyItems) t(a) && (a.deleted = true);
  }
  clearHistory() {
    this.state.historyItems = [];
  }
  setProcessingItem(t) {
    if (t) {
      const a = { ...t, processing: true };
      this.state.processingItem = a;
    } else this.state.processingItem = void 0;
  }
  completeProcessingItem() {
    if (this.state.processingItem) {
      const t = { ...this.state.processingItem, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
      this.state.processingItem = void 0, this.addHistoryItem(t);
    }
  }
  static makeGroupedCharacterMessages(t) {
    const a = [];
    let r = 0;
    for (; r < t.length; ) if (t[r].type === "character_message") {
      const n = [];
      let i = r;
      for (; i < t.length && t[i].type === "character_message"; ) n.push(t[i]), i++;
      if (n.length > 1) {
        for (let m = 0; m < n.length - 1; m++) a.push(Z.parse({ id: E(), type: "placeholder", idx: n[m].idx, data: null }));
        const l = n[0].data.characterId, u = n.map((m) => ({ content: m.data.content, timestamp: m.timestamp || void 0, originalIdx: m.idx })), d = n.at(-1);
        if (!d) throw new Error("No last candidate");
        const c = { id: E(), type: "character_message_group", data: { characterId: l || "", list: u, name: n[0].data.name, role: n[0].data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: d.idx, orderRef: 0, timestamp: Date.now() };
        a.push(c);
      } else a.push(n[0]);
      r = i;
    } else a.push(t[r]), r++;
    return a;
  }
  spliceHistoryItems(t, a, r, n = true) {
    if (this.state.historyItems.splice(t, a, ...r), n) for (let i = t; i < this.state.historyItems.length; i++) this.state.historyItems[i].idx = i;
  }
  performGroupingOnTailingHistoryItems() {
    const t = this.getLastHistoryItem();
    if (t && t.type === "character_message_group") return;
    let a = this.state.historyItems.length - 1;
    for (; a >= 0 && this.state.historyItems[a].type === "character_message"; ) a--;
    if (a++, a >= this.state.historyItems.length) return;
    const r = this.state.historyItems.slice(a), n = Ne.makeGroupedCharacterMessages(r);
    this.spliceHistoryItems(a, r.length, n, false);
  }
  performGroupingOnAllHistoryItems() {
    const t = Ne.makeGroupedCharacterMessages(this.state.historyItems);
    this.spliceHistoryItems(0, this.state.historyItems.length, t, false);
  }
  addCharacterMessageIntoHistoryDirectly(t) {
    const a = { ...t, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
    this.state.historyItems.push(a);
  }
  addCharacterMessageIntoHistoryAsNewGroup(t) {
    const a = [{ content: t.data.content, timestamp: Date.now(), originalIdx: this.state.historyItems.length }], r = { id: E(), type: "character_message_group", data: { characterId: t.data.characterId || "", list: a, name: t.data.name, role: t.data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: this.state.historyItems.length, orderRef: 0, timestamp: Date.now() };
    this.state.historyItems.push(r);
  }
  addCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(t) {
    const a = this.getLastHistoryItem();
    if (a && a.type === "character_message_group") {
      const r = a;
      if (r.data.characterId === t.data.characterId && Date.now() - (r.timestamp || 0) <= (this.options.groupingDelayMs || 6e4)) {
        r.data.list.push({ content: t.data.content, timestamp: Date.now() }), r.timestamp = Date.now();
        return;
      }
    }
    this.addCharacterMessageIntoHistoryDirectly(t);
  }
  addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(t) {
    const a = this.getLastHistoryItem();
    if (a && a.type === "character_message_group") {
      const r = a;
      if (r.data.characterId === t.data.characterId && Date.now() - (r.timestamp || 0) <= (this.options.groupingDelayMs || 6e4)) {
        r.data.list.push({ content: t.data.content, timestamp: Date.now() }), r.timestamp = Date.now();
        return;
      }
    }
    this.addCharacterMessageIntoHistoryAsNewGroup(t);
  }
  performGroupingOnTailingHistoryItemsAndAddCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(t) {
    this.performGroupingOnTailingHistoryItems(), this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(t);
  }
  performGroupingOnTailingHistoryItemsAndAddCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(t) {
    this.performGroupingOnTailingHistoryItems(), this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(t);
  }
  addCharacterMessageIntoHistory(t) {
    this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(t);
  }
  getLastSummaryItemIndex() {
    for (let t = this.state.historyItems.length - 1; t >= 0; t--) {
      const a = this.state.historyItems[t];
      if (a.type === "summary") return a.idx;
    }
  }
  getAllSummaryItemIndices() {
    return this.getItemsByType("summary").map((t) => t.idx ?? -1).filter((t) => t !== -1);
  }
  getUncoveredIndices() {
    const a = this.getItemsByType("summary").map((l) => l.data.range).sort((l, u) => l[0] - u[0]), r = [];
    for (const [l, u] of a) {
      const d = r.at(-1);
      r.length === 0 || d && d[1] < l ? r.push([l, u]) : d && (d[1] = Math.max(d[1], u));
    }
    const n = [];
    let i = 0;
    for (const [l, u] of r) {
      for (; i < l; ) n.push(i), i++;
      i = Math.max(i, u + 1);
    }
    for (; i < this.state.historyItems.length; ) n.push(i), i++;
    return n;
  }
  addLLMResponseAsContextItem(t, a) {
    const r = E();
    let n;
    t.role === "assistant" && a.characterId ? n = { id: r, type: "character_message", orderRef: 0, timestamp: Date.now(), data: { characterId: a.characterId, content: t.content, name: void 0 } } : t.role === "user" ? n = { id: r, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: t.content, name: void 0, isUser: true, role: "user" } } : n = { id: r, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: t.content, name: t.role } }, this.addHistoryItem(n);
  }
  getFlatHistoryItems(t) {
    const a = [];
    for (const r of this.state.historyItems) if (r.type === "character_message_group") {
      const n = r, i = n.data.list.map((l) => ({ id: E(), type: "character_message", idx: r.idx, orderRef: r.orderRef, timestamp: l.timestamp || r.timestamp, hidden: r.hidden, deleted: r.deleted, data: { characterId: n.data.characterId, content: l.content, name: n.data.name, role: n.data.role, isCharacter: true, isUser: false, isDM: false, isEnv: false } }));
      a.push(...i);
    } else a.push(r);
    return t && t > 0 ? a.slice(-t) : a;
  }
  getLastUserMessage() {
    return this.getFlatHistoryItems().findLast((t) => (t.type === "participant_message" || t.type === "character_message") && (t.data.isUser || t.data.role === "user"));
  }
}
const Zn = /\{\{([^:]+):([^}]+)\}\}/gi, ei = /^d/i;
function Sa(s, t, a) {
  let r = s;
  const n = t.nickname || t.name || "{{char}}", i = (a == null ? void 0 : a.userName) || "{{user}}";
  return r = r.replace(/\{\{char\}\}/gi, n), r = r.replace(/\{\{user\}\}/gi, i), r = r.replace(/<BOT>/gi, n), r = r.replace(/<USER>/gi, i), r = r.replace(Zn, (l, u, d) => {
    switch (u.toLowerCase()) {
      case "random": {
        const m = d.split(",").map((o) => o.replace(/\\,/g, ",").trim());
        return m[Math.floor(Math.random() * m.length)] || "";
      }
      case "pick": {
        const m = d.split(",").map((o) => o.replace(/\\,/g, ",").trim());
        return m[Math.floor(Math.random() * m.length)] || "";
      }
      case "roll": {
        const m = Number.parseInt(d.replace(ei, ""), 10);
        return Number.isNaN(m) || m < 1 ? "1" : (Math.floor(Math.random() * m) + 1).toString();
      }
      case "//":
        return "";
      case "hidden_key":
        return "";
      case "comment":
        return "";
      case "reverse":
        return d.split("").reverse().join("");
      default:
        return l;
    }
  }), r;
}
function Ca(s, t) {
  let a;
  return s.system_prompt && s.system_prompt.trim() !== "" ? (a = s.system_prompt, a = a.replaceAll("{{original}}", (t == null ? void 0 : t.originalSystemPrompt) || "")) : (a = [`\u4F60\u662F ${s.name}\uFF0C\u8BF7\u6839\u636E\u4F60\u7684\u6027\u683C\u548C\u80CC\u666F\u8FDB\u884C\u56DE\u5E94\u3002\u4FDD\u6301\u89D2\u8272\u7684\u4E00\u81F4\u6027\u3002`, "=====[\u89D2\u8272\u63CF\u8FF0]=====", s.description, "=====[\u89D2\u8272\u6027\u683C]=====", s.personality, "=====[\u804A\u5929\u573A\u666F]=====", s.scenario, "=====[\u793A\u4F8B\u56DE\u590D]=====", s.mes_example].filter((r) => r.trim() !== "").join(`

`), a.trim() === "" && (a = (t == null ? void 0 : t.originalSystemPrompt) || "")), a = Sa(a, s, t), a.trim();
}
function ti(s, t) {
  const a = Ca(s, t), r = [s.first_mes, ...(s == null ? void 0 : s.alternate_greetings) ?? []], n = r[Math.floor(Math.random() * r.length)], i = Sa(n, s, t), l = { id: E(), type: "starting_system_message", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: a } }, u = { id: E(), type: "character_intro", idx: 1, orderRef: 0, timestamp: Date.now() + 1, data: { characterId: s.id, content: i } };
  return [l, u];
}
const us = (s, t) => {
  if ((t == null ? void 0 : t.characterId) === void 0) return [];
  const a = Ur.parse(s), r = [];
  for (const n of a.historyItems) if (!(n.deleted || n.hidden)) switch (n.type) {
    case "starting_system_message":
    case "in_context_system_message":
      r.push({ role: "system", content: n.data.content, name: n.data.name });
      break;
    case "character_intro":
      r.push({ role: "assistant", content: n.data.content, name: n.data.name });
      break;
    case "participant_message":
    case "character_message": {
      const i = n.data, l = i.characterId === t.characterId;
      r.push({ role: l ? "assistant" : "user", content: i.content, name: i.name });
      break;
    }
    case "participant_message_group":
    case "character_message_group": {
      const i = n.data, l = i.characterId === t.characterId, u = i.list.map((d) => d.content).join(`
`);
      r.push({ role: l ? "assistant" : "user", content: u, name: i.name });
      break;
    }
    case "summary":
      r.push({ role: "user", content: n.data.content });
      break;
    case "llm_message":
    case "story_telling":
      r.push({ role: n.data.role, content: n.data.content, name: n.data.name });
      break;
    case "tool_message":
      r.push({ role: "tool", content: n.data.content, name: n.data.name });
      break;
  }
  return r;
}, Cs = Object.freeze(Object.defineProperty({ __proto__: null, makeChatModeCharacterSystemPrompt_CN: Ca, makeChatModeLLMMessagesFromContextStateForCharacterId: us, makeChatModeStartingContextItems_CN: ti }, Symbol.toStringTag, { value: "Module" })), ce = le({ currentSession: null, contextManager: null, get messages() {
  if (!this.contextManager || !this.currentSession) return [];
  const s = us(this.contextManager.state, { characterId: this.currentSession.modeConfig.characterId });
  return Array.isArray(s) ? s : [];
}, startNewSession(s, t) {
  const a = { id: E(), contextId: null, mode: "chat", modeConfig: s, modeState: { currentPhase: "character_first_msg" }, createdAt: Date.now(), updatedAt: Date.now(), isActive: true };
  this.currentSession = a;
  const r = new Ne(t || { historyItems: [], processingItem: void 0 });
  return r.state = le(r.state), this.contextManager = r, a;
}, getContextState() {
  return this.contextManager ? this.contextManager.state : null;
}, updateContextState(s) {
  this.contextManager && (Object.assign(this.contextManager.state, s), this.currentSession && (this.currentSession.updatedAt = Date.now()));
}, updateCurrentPhase(s) {
  this.currentSession && (this.currentSession.modeState.currentPhase = s, this.currentSession.updatedAt = Date.now());
}, updateCurrentConfig(s) {
  this.currentSession && (Object.assign(this.currentSession.modeConfig, s), this.currentSession.updatedAt = Date.now());
}, endCurrentSession() {
  this.currentSession = null, this.contextManager = null;
}, getCurrentSessionSnapshot() {
  return this.currentSession ? { ...this.currentSession } : null;
}, loadFromData(s) {
  this.currentSession = s.session, s.contextState && (this.contextManager = new Ne(s.contextState), this.contextManager.state = le(this.contextManager.state));
}, loadSession(s) {
  this.currentSession = s;
}, async saveNewContextItemsToDB(s, t) {
  const { SessionDB: a } = await we(async () => {
    const { SessionDB: n } = await Promise.resolve().then(() => Ht);
    return { SessionDB: n };
  }, void 0);
  await new a(s).addContextItems(t);
} }), wa = (s) => {
  const { item: t, character: a } = s;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden", children: a.imageBase64 || a.avatar ? e.jsx("img", { src: a.imageBase64 || a.avatar, alt: a.name, className: "w-full h-full object-cover" }) : e.jsx(de, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: a.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: t.data.content }), t.processing && e.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, Pt = (s) => {
  const { item: t, character: a } = s;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden", children: a.imageBase64 || a.avatar ? e.jsx("img", { src: a.imageBase64 || a.avatar, alt: a.name, className: "w-full h-full object-cover" }) : e.jsx(de, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: a.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: t.data.content }), t.processing && e.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, Yt = (s) => {
  const { item: t } = s;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 flex-row-reverse group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105", children: e.jsx(Ae, { className: "w-5 h-5 text-secondary-foreground" }) }), e.jsxs("div", { className: "space-y-1.5 text-right grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2 justify-end", children: "Player" }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap bg-primary/5 text-foreground p-4 rounded-2xl inline-block text-left min-w-25 shadow-sm", children: t.data.content })] })] });
};
function si(s, t) {
  const a = os(), r = b.useRef(false), n = te(), i = b.useCallback(async (u) => {
    if (!(r.current || !t || t.getHistoryCount() > 0 || !s)) try {
      r.current = true;
      const { makeChatModeStartingContextItems_CN: d } = await we(async () => {
        const { makeChatModeStartingContextItems_CN: o } = await Promise.resolve().then(() => Cs);
        return { makeChatModeStartingContextItems_CN: o };
      }, void 0), c = d(s);
      for (const o of c) t.addHistoryItem(o);
      const m = c.find((o) => o.type === "character_intro");
      if (m && u) {
        const o = m.data.content.split(" ");
        let h = "";
        for (const x of o) h += (h ? " " : "") + x, u(h), await new Promise((g) => setTimeout(g, 50));
      }
    } catch (d) {
      console.error("Initialize Chat Error:", d), U.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", { duration: 1 / 0, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => n({ to: "/config/llm" }) } });
    } finally {
      r.current = false;
    }
  }, [t, s]), l = b.useCallback(async (u, d) => {
    if (!(r.current || !s || !t)) try {
      r.current = true, t.addLLMResponseAsContextItem({ role: "user", content: u }, {});
      const { makeChatModeLLMMessagesFromContextStateForCharacterId: c } = await we(async () => {
        const { makeChatModeLLMMessagesFromContextStateForCharacterId: g } = await Promise.resolve().then(() => Cs);
        return { makeChatModeLLMMessagesFromContextStateForCharacterId: g };
      }, void 0), o = c(t.state, { characterId: s.id }).map((g) => ({ id: E(), role: g.role, content: g.content, name: g.name })), h = { id: E(), type: "character_message", orderRef: 0, timestamp: Date.now(), data: { characterId: s.id, content: "", name: s.name } };
      t.setProcessingItem(h);
      let x = "";
      await a.callLLMStream(o, (g, y) => {
        x = y, d == null ? void 0 : d(g);
        const v = t.getProcessingItem();
        v && (v.data.content = x);
      }), h.data.content = x, t.completeProcessingItem();
    } catch (c) {
      console.error("ChatLoop Error:", c), U.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", { duration: 1 / 0, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => n({ to: "/config/llm" }) } });
    } finally {
      r.current = false;
    }
  }, [t, s, a]);
  return { initializeChat: i, sendUserMessage: l };
}
const ai = (s) => {
  var _a2;
  const [t, a] = b.useState(""), r = b.useRef(null), [n, i] = b.useState(false), [l, u] = b.useState(""), [d, c] = b.useState(false), { data: m = [] } = Pe((f) => f.from({ s: Le })), { data: o = [] } = Pe((f) => f.from({ c: Ee })), h = m.find((f) => f.id === s.sessionId), x = o.find((f) => f.id === (h == null ? void 0 : h.characterId));
  b.useEffect(() => {
    let f = false;
    return c(false), (async () => {
      if (h) try {
        const N = await Bt.createSessionDB(h.id).getContextItems();
        if (f) return;
        const j = { historyItems: N, processingItem: void 0 }, C = new Ne(j);
        ce.contextManager = C, ct(h.id), c(true);
      } catch {
        if (!f) {
          const w = new Ne({ historyItems: [], processingItem: void 0 });
          ce.contextManager = w, c(true);
        }
      }
    })(), () => {
      f = true;
    };
  }, [h]), b.useEffect(() => () => {
    s.sessionId && ct(s.sessionId);
  }, [s.sessionId]);
  const { sendUserMessage: g, initializeChat: y } = si(x, ce.contextManager);
  if (b.useEffect(() => {
    var _a3;
    d && ((_a3 = ce.contextManager) == null ? void 0 : _a3.getHistoryCount()) === 0 && x && h && (async () => {
      if (await y((S) => {
        u((w) => w + S);
      }), ce.contextManager) {
        const S = ce.contextManager.getHistoryItems();
        S.length > 0 && await ce.saveNewContextItemsToDB(h.id, S);
      }
    })();
  }, [d, y, x, h]), b.useEffect(() => {
    r.current && (r.current.scrollTop = r.current.scrollHeight);
  }), !h || !x) return e.jsx("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4", children: e.jsx("p", { children: "\u4F1A\u8BDD\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664" }) });
  const v = async () => {
    if (!(!t.trim() || n)) {
      i(true), u("");
      try {
        if (await g(t, (f) => {
          u((S) => S + f);
        }), ce.contextManager && h) {
          const S = ce.contextManager.getHistoryItems().filter((w) => !w.processing);
          S.length > 0 && await ce.saveNewContextItemsToDB(h.id, S);
        }
      } catch (f) {
        console.error("Send message error:", f);
      } finally {
        i(false), u("");
      }
      a("");
    }
  };
  return e.jsx("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20", children: e.jsx(de, { className: "w-5 h-5 text-primary" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsx("span", { className: "font-bold text-sm leading-tight", children: x.name }), e.jsx("span", { className: "text-[10px] text-muted-foreground", children: x.nickname || "NPC" })] })] }), e.jsx("div", { className: "flex items-center gap-2", children: e.jsx(H, { variant: "secondary", className: "text-[9px] h-5 px-1.5 font-bold uppercase", children: "CHAT MODE" }) })] }), e.jsx("div", { className: "flex grow overflow-y-auto p-4 md:p-8 space-y-8", ref: r, children: e.jsxs("div", { className: "max-w-4xl mx-auto w-full space-y-8", children: [(() => {
    var _a3, _b;
    const f = ((_a3 = ce.contextManager) == null ? void 0 : _a3.getVisibleHistoryItems()) || [], S = (_b = ce.contextManager) == null ? void 0 : _b.getProcessingItem(), w = [...f];
    return S && !f.some((N) => N.id === S.id) && w.push(S), w.map((N, j) => e.jsx(ri, { item: N, character: x, isProcessing: N.processing || void 0, streamingText: N.processing ? l : void 0 }, `[${j}]${N.id}`));
  })(), n && !((_a2 = ce.contextManager) == null ? void 0 : _a2.getProcessingItem()) && e.jsxs("div", { className: "flex gap-4 animate-pulse", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-muted shrink-0" }), e.jsxs("div", { className: "space-y-3 grow pt-2", children: [e.jsx("div", { className: "h-4 bg-muted rounded w-1/4" }), e.jsx("div", { className: "h-24 bg-muted rounded w-full" })] })] })] }) }), e.jsxs("div", { className: "p-4 md:p-6 border-t shrink-0 bg-background/50 backdrop-blur-sm", children: [e.jsxs("div", { className: "max-w-4xl mx-auto relative group", children: [e.jsx("div", { className: "absolute -inset-0.5 bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative", children: [e.jsx(K, { value: t, onChange: (f) => a(f.target.value), placeholder: `\u5411 ${x.name} \u53D1\u9001\u6D88\u606F...`, className: "min-h-24 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/20 focus-visible:ring-primary/30 bg-background", onKeyDown: (f) => {
    f.key === "Enter" && !f.shiftKey && (f.preventDefault(), v());
  } }), e.jsx(_, { size: "icon", className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform", disabled: !t.trim() || n, onClick: v, type: "button", children: e.jsx(ze, { className: "w-5 h-5" }) })] })] }), e.jsx("p", { className: "text-[10px] text-center text-muted-foreground mt-3 font-medium uppercase tracking-tighter opacity-50", children: "Shift + Enter to line break \u2022 Enter to send" })] })] }) });
}, ri = (s) => {
  switch (s.item.type) {
    case "character_intro":
      return e.jsx(wa, { item: s.item, character: s.character });
    case "character_message":
      return s.isProcessing ? e.jsx(ni, { item: s.item, character: s.character, streamingText: s.streamingText || "" }) : e.jsx(Pt, { item: s.item, character: s.character });
    case "character_message_group":
      return e.jsx("div", { className: "space-y-4", children: (s.item.data.list || []).map((t, a) => e.jsx(Pt, { item: { ...s.item, type: "character_message", data: { ...s.item.data, content: t.content, timestamp: t.timestamp } }, character: s.character }, t.id || a)) });
    case "participant_message":
      return e.jsx(Yt, { item: s.item });
    case "participant_message_group":
      return e.jsx("div", { className: "space-y-4", children: (s.item.data.list || []).map((t, a) => e.jsx(Yt, { item: { ...s.item, type: "participant_message", data: { ...s.item.data, content: t.content, timestamp: t.timestamp } } }, t.id || a)) });
    case "system_notification":
      return e.jsx("div", { className: "flex justify-center my-4", children: e.jsx(H, { variant: "outline", className: "px-3 py-1 text-[10px] text-muted-foreground bg-muted/20", children: s.item.data.content }) });
    case "starting_system_message":
    case "in_context_system_message":
    case "placeholder":
      return null;
    default:
      return console.warn("Unknown context item type:", s.item.type), null;
  }
}, ni = (s) => s.item.type === "character_message" ? e.jsxs("div", { className: "flex gap-4 animate-pulse", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20", children: s.character.imageBase64 || s.character.avatar ? e.jsx("img", { src: s.character.imageBase64 || s.character.avatar, alt: s.character.name, className: "w-full h-full object-cover rounded-2xl" }) : e.jsx(de, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: s.character.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: s.streamingText || s.item.data.content })] })] }) : null, Ko = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForChat: ai }, Symbol.toStringTag, { value: "Module" }));
class hs {
  constructor(t) {
    __publicField(this, "session");
    this.session = Ft.parse(t);
  }
}
function Ve(s) {
  const t = s.modeConfig.characterSnapshot;
  if (!t) throw new Error("Critical Error: Character snapshot missing in session config.");
  return t;
}
function ka(s, t) {
  const a = Ve(t);
  return s.getFlatHistoryItems(10).filter((r) => !r.hidden && !r.deleted).map((r) => {
    const { type: n, data: i } = r;
    if (n === "participant_message") {
      let l = "\u73A9\u5BB6";
      return i.isDM || i.name === "DM" ? l = "DM\u65C1\u767D" : i.name && (l = i.name), `${l}: ${i.content}`;
    }
    return n === "character_message" ? `${i.name || a.name}: ${i.content}` : n === "dm_intro" ? `DM\u5F00\u573A/\u89C4\u5219: ${i.content}` : n === "character_intro" ? `${a.name}\u5F00\u573A: ${i.content}` : null;
  }).filter(Boolean).join(`
`);
}
const ii = `
\u4F60\u73B0\u5728\u7684\u8EAB\u4EFD\u662F DM (\u5730\u4E0B\u57CE\u4E3B/\u6E38\u620F\u4E3B\u6301\u4EBA)\uFF0C\u6B63\u5728\u4E3B\u6301\u4E00\u573A\u6587\u5B57\u5192\u9669\u6311\u6218\u3002
\u4F60\u7684\u804C\u8D23\u662F\u5411\u3010\u73A9\u5BB6/user\u3011\u8BE6\u7EC6\u4ECB\u7ECD\u5F53\u524D\u7684\u6311\u6218\u80CC\u666F\u3001\u6838\u5FC3\u76EE\u6807\u4EE5\u53CA\u6E38\u620F\u89C4\u5219\uFF0C\u5E76\u7ED9\u51FA\u660E\u786E\u7684\u64CD\u4F5C\u6307\u5F15\u3002

\u6CE8\u610F\uFF1A
1. \u4F60\u662F\u4E3B\u6301\u4EBA\uFF0C\u4E0D\u662F\u6E38\u620F\u4E2D\u7684\u89D2\u8272\u3002\u8BF7\u4EE5\u89E3\u8BF4\u3001\u4E13\u4E1A\u4E14\u5177\u6709\u6C89\u6D78\u611F\u7684\u8BED\u6C14\u8BF4\u8BDD\u3002
2. \u4F60\u7684\u4ECB\u7ECD\u5E94\u5305\u542B\u5F53\u524D\u7684\u6311\u6218\u4E3B\u9898\u3001\u3010\u73A9\u5BB6/user\u3011\u9700\u8981\u4E0E\u4E4B\u4E92\u52A8\u7684\u3010\u53D7\u6311\u6218\u7684\u89D2\u8272\u3011\u8EAB\u4EFD\uFF0C\u4EE5\u53CA\u8FBE\u6210\u6210\u529F\u7684\u6761\u4EF6\u3002
3. \u8BF7\u4FDD\u6301\u7B80\u6D01\uFF0C\u4E0D\u8981\u8FDB\u884C\u4EFB\u4F55\u5373\u65F6\u7684\u53D9\u4E8B\u6216\u5BF9\u8BDD\u63CF\u8FF0\uFF0C\u4F60\u4EC5\u8D1F\u8D23\u5F00\u573A\u3002

\u5F53\u524D\u6311\u6218\u540D\u79F0\uFF1A{{title}}
\u53D7\u6311\u6218\u7684\u89D2\u8272\uFF1A{{characterName}} ({{characterDescription}})
\u6CE8\u610F\uFF1A\u53C2\u4E0E\u6311\u6218\u7684\u662F\u3010\u73A9\u5BB6/user\u3011\uFF0C\u800C {{characterName}} \u662F\u3010\u73A9\u5BB6/user\u3011\u4E92\u52A8\u548C\u535A\u5F08\u7684\u5BF9\u8C61\u3002

### \u6311\u6218\u76EE\u6807\uFF1A
{{gameGoals}}

### \u5931\u8D25\u5224\u5B9A\uFF1A
{{failureConditions}}

### \u4E16\u754C\u89C4\u5219/\u5173\u952E\u53D8\u91CF\u8BF4\u660E\uFF1A
{{variableDescriptions}}

### \u5BF9\u73A9\u5BB6\u7684\u884C\u4E3A\u6307\u5F15\uFF1A
{{userGuidance}}
`, oi = `
\u4F60\u73B0\u5728\u7684\u8EAB\u4EFD\u662F DM (\u5730\u4E0B\u57CE\u4E3B/\u6E38\u620F\u4E3B\u6301\u4EBA)\u3002
\u8BC4\u4F30\u3010\u73A9\u5BB6/user\u3011\u7684\u6700\u540E\u8F93\u5165\u4EE5\u53CA\u5F53\u524D\u7684\u53D8\u91CF\u72B6\u6001\u3002
\u4F60\u6B63\u5728\u89C2\u5BDF\u3010\u73A9\u5BB6/user\u3011\u4E0E\u89D2\u8272 {{characterName}} \u7684\u4E92\u52A8\u3002

### \u6311\u6218\u76EE\u6807\uFF1A
{{gameGoals}}

### \u5931\u8D25\u5224\u5B9A\uFF1A
{{failureConditions}}

### \u5386\u53F2\u6D88\u606F\uFF08\u4EC5\u4F9B\u53C2\u8003\uFF09\uFF1A
{{historyMessages}}

\u5F53\u524D\u53D8\u91CF\u72B6\u6001\uFF1A
{{variablesJSON}}

\u73A9\u5BB6\u7684\u8F93\u5165\uFF1A
{{userInput}}

\u8F93\u51FA\u4F60\u7684\u8BC4\u4F30\u7ED3\u679C\uFF0C\u5FC5\u987B\u662F\u4E00\u4E2A\u7B26\u5408\u4EE5\u4E0B TypeScript \u63A5\u53E3\u5B9A\u4E49\u7684 JSON \u5BF9\u8C61\uFF1A

\`\`\`typescript
interface EvaluationResult {
  /** \u7B80\u77ED\u5206\u6790\u73A9\u5BB6\u884C\u52A8\u5BF9\u6545\u4E8B\u8D70\u5411\u3001\u4E16\u754C\u72B6\u6001\u548C\u53D8\u91CF\u4EA7\u751F\u7684\u5F71\u54CD */
  analyze: string;
  /** \u53D8\u91CF\u64CD\u4F5C\u5217\u8868 */
  operations: Array<
    | { key: string; op: 'delta'; value: number }          // \u9488\u5BF9\u6570\u5B57\u7C7B\u578B(number)\uFF1A\u6570\u503C\u589E\u91CF\uFF0C\u5982 10 \u6216 -5
    | { key: string; op: 'setTo'; value: number | string } // \u9488\u5BF9\u6570\u5B57\u6216\u5B57\u7B26\u4E32(string)\uFF1A\u76F4\u63A5\u8BBE\u4E3A\u76EE\u6807\u503C
    | { key: string; op: 'setTrue' }                       // \u9488\u5BF9\u5E03\u5C14\u7C7B\u578B(boolean)\uFF1A\u8BBE\u4E3A\u771F\u503C\uFF0C\u65E0\u9700 value \u5B57\u6BB5
    | { key: string; op: 'setFalse' }                      // \u9488\u5BF9\u5E03\u5C14\u7C7B\u578B(boolean)\uFF1A\u8BBE\u4E3A\u5047\u503C\uFF0C\u65E0\u9700 value \u5B57\u6BB5
    | { key: string; op: 'add'; value: string }            // \u9488\u5BF9\u6807\u7B7E(tags)\uFF1A\u5411\u5217\u8868\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u6807\u7B7E
    | { key: string; op: 'remove'; value: string }         // \u9488\u5BF9\u6807\u7B7E(tags)\uFF1A\u4ECE\u5217\u8868\u4E2D\u79FB\u9664\u4E00\u4E2A\u6807\u7B7E
  >;
}
\`\`\`

## \u53D8\u91CF\u64CD\u4F5C\u89C4\u8303 (\u4E25\u683C\u6267\u884C):
1. **\u6570\u5B57 (number)**: 
   - \u4F7F\u7528 "delta" \u6765\u589E\u51CF\u6570\u503C (\u4F8B\u5982: 10, -5)\u3002
   - \u4F7F\u7528 "setTo" \u6765\u76F4\u63A5\u8BBE\u5B9A\u5177\u4F53\u6570\u503C\u3002
2. **\u5E03\u5C14 (boolean)**:
   - \u4F7F\u7528 "setTrue" \u5C06\u53D8\u91CF\u8BBE\u4E3A\u771F\uFF0C\u4F7F\u7528 "setFalse" \u5C06\u53D8\u91CF\u8BBE\u4E3A\u5047\u3002
   - \u6CE8\u610F\uFF1A\u8FD9\u4E24\u79CD\u64CD\u4F5C\u4E0D\u9700\u8981\u63D0\u4F9B "value" \u5B57\u6BB5\u3002
3. **\u6807\u7B7E\u5217\u8868 (tags)**:
   - \u4F7F\u7528 "add" \u5411\u5217\u8868\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u6807\u7B7E\u3002
   - \u4F7F\u7528 "remove" \u4ECE\u5217\u8868\u4E2D\u79FB\u9664\u4E00\u4E2A\u6807\u7B7E\u3002
4. **\u5B57\u7B26\u4E32 (string)**:
   - \u4F7F\u7528 "setTo" \u4FEE\u6539\u5185\u5BB9\u3002
`, ci = `
\u4F60\u73B0\u5728\u7684\u8EAB\u4EFD\u662F DM (\u5730\u4E0B\u57CE\u4E3B)\u3002
\u4F60\u9700\u8981\u6839\u636E\u53D8\u91CF\u7684\u53D8\u5316\uFF0C\u63CF\u8FF0\u3010\u73A9\u5BB6/user\u3011\u521A\u624D\u7684\u8F93\u5165\u662F\u5982\u4F55\u5728\u6545\u4E8B\u4E2D\u4EA7\u751F\u5F71\u54CD\u5E76\u9020\u6210\u53D8\u91CF\u6CE2\u52A8\u7684\u3002
**\u6838\u5FC3\u4EFB\u52A1\uFF1A** \u91CD\u70B9\u63CF\u8FF0\u300C\u73A9\u5BB6\u521A\u624D\u7684\u884C\u52A8\u5982\u4F55\u5F15\u53D1\u4E86\u521A\u624D\u7684\u53D8\u91CF\u53D8\u5316\u300D\uFF0C\u4F7F\u6570\u503C\u7684\u53D8\u5316\u903B\u8F91\u5728\u53D9\u4E8B\u4E2D\u5F97\u5230\u4F53\u73B0\u3002

\u6CE8\u610F\uFF1A
1. **\u7981\u6B62**\u63CF\u8FF0\u300C\u63A5\u4E0B\u6765\u300D\u53D1\u751F\u7684\u4E8B\u60C5\u6216\u5F15\u5BFC\u6545\u4E8B\u8D70\u5411\u3002
2. **\u7981\u6B62**\u66FF\u73A9\u5BB6\u6216\u89D2\u8272\u505A\u51FA\u65B0\u7684\u884C\u52A8\u6216\u51B3\u5B9A\u3002
3. \u6587\u672C\u5E94\u751F\u52A8\u4E14\u5177\u6709\u6C89\u6D78\u611F\uFF0C\u4FDD\u6301 DM \u4E2D\u7ACB\u4E14\u4E13\u4E1A\u7684\u53D9\u8FF0\u98CE\u683C\u3002
4. \u53C2\u8003\u5BF9\u8BDD\u5386\u53F2\uFF08\u6B64\u524D\u51E0\u8F6E\u6D88\u606F\uFF09\u4EE5\u786E\u4FDD\u903B\u8F91\u8FDE\u8D2F\u3002

### \u6311\u6218\u76EE\u6807\uFF1A
{{gameGoals}}

### \u5931\u8D25\u5224\u5B9A\uFF1A
{{failureConditions}}

### \u5386\u53F2\u6D88\u606F\uFF08\u4EC5\u4F9B\u53C2\u8003\uFF09\uFF1A
{{historyMessages}}

\u73A9\u5BB6\u7684\u8F93\u5165\uFF1A
{{userInput}}

\u53D8\u91CF\u53D8\u5316\u5206\u6790\uFF1A
{{evalAnalyze}}

\u65B0\u7684\u53D8\u91CF\u72B6\u6001\uFF1A
{{variablesJSON}}
`;
function li(s, t) {
  const { modeConfig: a } = s, r = Ve(s), n = (a.goals || []).map((d) => `- ${d.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", i = (a.failureChecks || []).map((d) => `- ${d.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", l = Object.entries(a.variables || {}).filter(([d, c]) => !c.hidden).map(([d, c]) => `- ${d}: ${c.description || "\u65E0\u63CF\u8FF0"}`).join(`
`) || "\u65E0\u516C\u5F00\u53D8\u91CF";
  return [{ role: "system", content: ii.replace("{{title}}", s.title || "\u6587\u5B57\u6311\u6218").replace("{{characterName}}", r.name).replace("{{characterDescription}}", r.description || "\u795E\u79D8\u89D2\u8272").replace("{{gameGoals}}", n).replace("{{failureConditions}}", i).replace("{{variableDescriptions}}", l).replace("{{userGuidance}}", a.userGuidance) }];
}
function di(s, t) {
  var _a2;
  const { modeConfig: a, modeState: r } = s, n = Ve(s), i = JSON.stringify(r.variableStates, null, 2), l = (a.goals || []).map((h) => `- ${h.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", u = (a.failureChecks || []).map((h) => `- ${h.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", d = ka(t, s), m = ((_a2 = t.getLastUserMessage()) == null ? void 0 : _a2.data.content) || "";
  return [{ role: "system", content: oi.replace("{{characterName}}", n.name).replace("{{gameGoals}}", l).replace("{{failureConditions}}", u).replace("{{historyMessages}}", d).replace("{{variablesJSON}}", i).replace("{{userInput}}", m) }];
}
function mi(s, t) {
  var _a2, _b;
  const { modeConfig: a, modeState: r } = s, n = Ve(s), i = JSON.stringify(r.variableStates, null, 2), l = (a.goals || []).map((g) => `- ${g.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", u = (a.failureChecks || []).map((g) => `- ${g.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", d = ka(t, s), m = ((_a2 = t.getLastUserMessage()) == null ? void 0 : _a2.data.content) || "", h = ((_b = t.getHistoryItems().findLast((g) => g.type === "challenge_mode_dm_eval")) == null ? void 0 : _b.data.analyze) || "\u6839\u636E\u73A9\u5BB6\u884C\u52A8\u66F4\u65B0\u4E86\u76F8\u5173\u72B6\u6001\u3002";
  return [{ role: "system", content: ci.replace("{{characterName}}", n.name).replace("{{gameGoals}}", l).replace("{{failureConditions}}", u).replace("{{variablesJSON}}", i).replace("{{userInput}}", m).replace("{{historyMessages}}", d).replace("{{evalAnalyze}}", h) }];
}
function ui(s, t) {
  const { modeConfig: a } = s, r = Ve(s);
  return [{ role: "system", content: `\u4F60\u73B0\u5728\u7684\u8EAB\u4EFD\u662F\u89D2\u8272 ${r.name}\u3002
\u4F60\u6B63\u5728\u53C2\u52A0\u4E00\u573A\u540D\u4E3A\u300A${s.title || "\u6311\u6218"}\u300B\u7684\u6E38\u620F\u3002
\u4F60\u7684\u4EFB\u52A1\u63CF\u8FF0\uFF1A
${a.roleTaskPrompt}

\u73B0\u5728\uFF0C\u8BF7\u4F5C\u4E3A ${r.name} \u7ED9\u51FA\u4F60\u7684\u5F00\u5C40\u7B2C\u4E00\u53E5\u8BDD\u3002
\u8FD9\u53E5\u5BF9\u8BDD\u5E94\u8BE5\u7B26\u5408\u4F60\u7684\u6027\u683C\u3001\u5F53\u524D\u6311\u6218\u7684\u80CC\u666F\uFF0C\u5E76\u5F15\u5BFC\u73A9\u5BB6\u5F00\u59CB\u4E92\u52A8\u3002
\u4E0D\u8981\u8F93\u51FA\u4EFB\u4F55\u65C1\u767D\uFF0C\u53EA\u8F93\u51FA\u5BF9\u8BDD\u5185\u5BB9\u3002` }];
}
function hi(s, t) {
  const { modeConfig: a, modeState: r } = s, n = Ve(s), l = { historyItems: t.getFlatHistoryItems() }, u = us(l, { characterId: a.characterId });
  let d = `## \u4F60\u7684\u8EAB\u4EFD\u4E0E\u4EFB\u52A1
\u4F60\u6B63\u5728\u53C2\u52A0\u4E00\u573A\u540D\u4E3A\u300A${s.title || "\u6311\u6218"}\u300B\u7684\u6E38\u620F\u3002
${a.roleTaskPrompt}

`;
  const c = Object.entries(r.variableStates).filter(([x]) => {
    var _a2;
    return !((_a2 = a.variables[x]) == null ? void 0 : _a2.hidden);
  }).map(([x, g]) => {
    const y = a.variables[x], v = (y == null ? void 0 : y.description) ? ` (${y.description})` : "";
    return `- ${x}${v}: ${g.value}`;
  }).join(`
`);
  c && (d += `## \u5F53\u524D\u72B6\u6001 (\u4F60\u7684\u611F\u77E5\u80FD\u529B)
${c}

`);
  const m = a.goals.map((x) => {
    var _a2;
    return ((_a2 = r.goalStates.find((y) => y.key === x.key)) == null ? void 0 : _a2.isCompleted) ? `- [\u5DF2\u8FBE\u6210\u76EE\u6807] ${x.description}` : `- [\u672A\u8FBE\u6210\u76EE\u6807] ${x.description}`;
  }).join(`
`);
  m && (d += `## \u6311\u6218\u76EE\u6807\u8FDB\u5EA6
${m}

`);
  const o = a.failureChecks.map((x) => `- ${x.description}`).join(`
`);
  o && (d += `## \u5931\u8D25/\u7ED3\u675F\u6761\u4EF6 (\u4F60\u5E94\u5C3D\u91CF\u907F\u514D\u6216\u5F15\u5BFC\u73A9\u5BB6\u89E6\u53D1)
${o}

`);
  const h = r.failureStates.filter((x) => x.isCompleted);
  if (h.length > 0) {
    const x = h.map((g) => {
      var _a2;
      return `- ${((_a2 = a.failureChecks.find((v) => v.key === g.key)) == null ? void 0 : _a2.description) || g.key}`;
    }).join(`
`);
    d += `## \u8B66\u544A\uFF1A\u5DF2\u89E6\u53D1\u5931\u8D25\u6761\u4EF6
${x}
\u4F60\u73B0\u5728\u5904\u4E8E\u6781\u5EA6\u4E0D\u5229\u7684\u5883\u5730\uFF0C\u8BF7\u8868\u73B0\u51FA\u76F8\u5E94\u7684\u53CD\u5E94\u3002

`;
  }
  return d += `## \u884C\u4E3A\u51C6\u5219
1. \u4E25\u683C\u626E\u6F14 ${n.name}\uFF0C\u8BED\u6C14\u548C\u53CD\u5E94\u5FC5\u987B\u4E0E\u4E0A\u8FF0\u72B6\u6001\u9AD8\u5EA6\u4E00\u81F4\u3002
2. \u4E0D\u8981\u76F4\u63A5\u63D0\u53CA\u53D8\u91CF\u7684\u5177\u4F53\u6570\u503C\uFF0C\u800C\u662F\u5C06\u5176\u878D\u5165\u5230\u4F60\u7684\u60C5\u611F\u548C\u884C\u4E3A\u8868\u73B0\u4E2D\uFF08\u4F8B\u5982\uFF1A\u5982\u679C\u201C\u538B\u529B\u201D\u5F88\u9AD8\uFF0C\u4F60\u5E94\u8BE5\u8868\u73B0\u5F97\u6025\u8E81\u6216\u7126\u8651\uFF09\u3002
3. \u5982\u679C\u76EE\u6807\u5DF2\u8FBE\u6210\uFF0C\u4F60\u5E94\u8BE5\u5728\u56DE\u5E94\u4E2D\u81EA\u7136\u5730\u6D41\u9732\u51FA\u6210\u529F\u6216\u9636\u6BB5\u6027\u8FDB\u5C55\u7684\u559C\u60A6\u3002`, [{ role: "system", content: d }, ...u];
}
class Ia {
  constructor(t, a) {
    __publicField(this, "dict");
    __publicField(this, "config");
    this.dict = t, this.config = a;
  }
  getVariable(t) {
    return this.dict[t];
  }
  setVariable(t, a) {
    this.dict[t] ? this.dict[t].value = a : this.dict[t] = { key: t, value: a };
  }
  setTrue(t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const a = this.getVariable(t);
    if (!a) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (typeof a.value != "boolean") throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(t, true);
  }
  setFalse(t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const a = this.getVariable(t);
    if (!a) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (typeof a.value != "boolean") throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(t, false);
  }
  toggle(t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const a = this.getVariable(t);
    if (!a) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (typeof a.value != "boolean") throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(t, !a.value);
  }
  delta(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "number") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u6570\u5B57\u7C7B\u578B`);
    const r = this.getVariable(t);
    if (!r) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (typeof r.value != "number") throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u6570\u5B57\u7C7B\u578B`);
    this.setVariable(t, r.value + a);
  }
  setTo(t, a) {
    var _a2, _b;
    const r = (_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type;
    if (r) {
      if (r === "boolean" && typeof a != "boolean") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E3A\u5E03\u5C14\uFF0C\u4F46\u503C\u4E0D\u662F\u5E03\u5C14`);
      if (r === "number" && typeof a != "number") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E3A\u6570\u5B57\uFF0C\u4F46\u503C\u4E0D\u662F\u6570\u5B57`);
      if (r === "string" && typeof a != "string") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E3A\u5B57\u7B26\u4E32\uFF0C\u4F46\u503C\u4E0D\u662F\u5B57\u7B26\u4E32`);
      if (r === "tags" && !Array.isArray(a)) throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E3A\u6807\u7B7E\uFF0C\u4F46\u503C\u4E0D\u662F\u6570\u7EC4`);
    }
    this.setVariable(t, a);
  }
  setValue(t, a) {
    this.setTo(t, a);
  }
  add(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "tags") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u6807\u7B7E\u7C7B\u578B`);
    const r = this.getVariable(t);
    if (!r) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (!Array.isArray(r.value)) throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B`);
    r.value.includes(a) || this.setVariable(t, [...r.value, a]);
  }
  remove(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "tags") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u6807\u7B7E\u7C7B\u578B`);
    const r = this.getVariable(t);
    if (!r) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (!Array.isArray(r.value)) throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B`);
    this.setVariable(t, r.value.filter((n) => n !== a));
  }
  performOperation(t) {
    if (oa.safeParse(t).success) {
      const [a, r] = t;
      switch (a) {
        case "setTrue":
          this.setTrue(r);
          break;
        case "setFalse":
          this.setFalse(r);
          break;
        case "toggle":
          this.toggle(r);
          break;
        default:
          throw new Error(`\u672A\u77E5\u5E03\u5C14\u64CD\u4F5C\u65B9\u6CD5: ${a}`);
      }
    } else if (ca.safeParse(t).success) {
      const [a, r, n] = t;
      switch (a) {
        case "delta":
          this.delta(r, n);
          break;
        case "setTo":
          this.setTo(r, n);
          break;
        case "setValue":
          this.setValue(r, n);
          break;
        default:
          throw new Error(`\u672A\u77E5\u6570\u5B57\u64CD\u4F5C\u65B9\u6CD5: ${a}`);
      }
    } else if (la.safeParse(t).success) {
      const [a, r, n] = t;
      switch (a) {
        case "setTo":
          this.setTo(r, n);
          break;
        case "setValue":
          this.setValue(r, n);
          break;
        default:
          throw new Error(`\u672A\u77E5\u5B57\u7B26\u4E32\u64CD\u4F5C\u65B9\u6CD5: ${a}`);
      }
    } else if (da.safeParse(t).success) {
      const [a, r, n] = t;
      switch (a) {
        case "add":
          this.add(r, n);
          break;
        case "remove":
          this.remove(r, n);
          break;
        default:
          throw new Error(`\u672A\u77E5\u6807\u7B7E\u64CD\u4F5C\u65B9\u6CD5: ${a}`);
      }
    } else throw new Error(`\u65E0\u6548\u7684\u64CD\u4F5C: ${JSON.stringify(t)}`);
  }
  isTrue(t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "boolean") return false;
    const a = this.getVariable(t);
    return a ? typeof a.value == "boolean" && a.value : false;
  }
  isFalse(t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "boolean") return false;
    const a = this.getVariable(t);
    return a ? typeof a.value == "boolean" && !a.value : false;
  }
  eq(t, a) {
    const r = this.getVariable(t);
    return r ? String(r.value) === String(a) : false;
  }
  neq(t, a) {
    return !this.eq(t, a);
  }
  is(t, a) {
    return this.eq(t, a);
  }
  isNot(t, a) {
    return this.neq(t, a);
  }
  gt(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "number") return false;
    const r = this.getVariable(t);
    return r && typeof r.value == "number" ? r.value > a : false;
  }
  gte(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "number") return false;
    const r = this.getVariable(t);
    return r && typeof r.value == "number" ? r.value >= a : false;
  }
  lt(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "number") return false;
    const r = this.getVariable(t);
    return r && typeof r.value == "number" ? r.value < a : false;
  }
  lte(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "number") return false;
    const r = this.getVariable(t);
    return r && typeof r.value == "number" ? r.value <= a : false;
  }
  includes(t, a) {
    var _a2, _b, _c, _d;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "string" && ((_d = (_c = this.config) == null ? void 0 : _c[t]) == null ? void 0 : _d.type) !== "tags") return false;
    const r = this.getVariable(t);
    if (!r) return false;
    const n = String(a);
    return typeof r.value == "string" || Array.isArray(r.value) ? r.value.includes(n) : false;
  }
  notIncludes(t, a) {
    return !this.includes(t, a);
  }
  has(t, a) {
    return this.includes(t, a);
  }
  hasAny(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "tags") return false;
    const r = this.getVariable(t);
    if (!r || !Array.isArray(r.value)) return false;
    const n = r.value.map(String);
    return a.some((i) => n.includes(String(i)));
  }
  hasAll(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "tags") return false;
    const r = this.getVariable(t);
    if (!r || !Array.isArray(r.value)) return false;
    const n = r.value.map(String);
    return a.every((i) => n.includes(String(i)));
  }
  llmJudge(t, a) {
    return console.warn("llmJudge \u672A\u5B9E\u73B0"), false;
  }
  and(t) {
    return t.every((a) => this.checkCondition(a));
  }
  or(t) {
    return t.some((a) => this.checkCondition(a));
  }
  all(t) {
    return this.and(t);
  }
  any(t) {
    return this.or(t);
  }
  some(t) {
    return this.or(t);
  }
  checkCondition(t) {
    if (Ot.safeParse(t).success) {
      const [a, ...r] = t;
      switch (a) {
        case "isTrue":
          return this.isTrue(r[0]);
        case "isFalse":
          return this.isFalse(r[0]);
        case "eq":
          return this.eq(r[0], r[1]);
        case "neq":
          return this.neq(r[0], r[1]);
        case "is":
          return this.is(r[0], r[1]);
        case "isNot":
          return this.isNot(r[0], r[1]);
        case "gt":
          return this.gt(r[0], r[1]);
        case "gte":
          return this.gte(r[0], r[1]);
        case "lt":
          return this.lt(r[0], r[1]);
        case "lte":
          return this.lte(r[0], r[1]);
        case "includes":
          return this.includes(r[0], r[1]);
        case "notIncludes":
          return this.notIncludes(r[0], r[1]);
        case "has":
          return this.has(r[0], r[1]);
        case "hasAny":
          return this.hasAny(r[0], r[1]);
        case "hasAll":
          return this.hasAll(r[0], r[1]);
        case "llmJudge":
          return this.llmJudge(r[0], r[1]);
        default:
          throw new Error(`\u672A\u77E5\u5355\u4E00\u6761\u4EF6\u65B9\u6CD5: ${a}`);
      }
    } else if (ds.safeParse(t).success || ma.safeParse(t).success) {
      const [a, r] = t;
      switch (a) {
        case "and":
          return this.and(r);
        case "or":
          return this.or(r);
        case "all":
          return this.all(r);
        case "any":
          return this.any(r);
        case "some":
          return this.some(r);
        default:
          throw new Error(`\u672A\u77E5\u590D\u5408\u6761\u4EF6\u65B9\u6CD5: ${a}`);
      }
    }
    throw new Error(`\u65E0\u6548\u7684\u6761\u4EF6: ${JSON.stringify(t)}`);
  }
}
class pi extends hs {
  constructor(t) {
    super(t);
  }
  getCurrentPhase() {
    return this.session.modeState.currentPhase;
  }
  getCurrentUIState() {
    return this.session.modeState.currentUIState;
  }
  getActualCurrentPhase(t) {
    var _a2, _b;
    const a = t.getProcessingItem();
    if (a && a.type) {
      const l = { dm_intro: "dm_intro", character_intro: "character_intro", character_message: "character_response", character_message_group: "character_response", dm_eval_logic: "dm_eval_changes", participant_message: ((_a2 = a.data) == null ? void 0 : _a2.isDM) ? "dm_narrate_changes" : "player_input", challenge_mode_dm_eval: "dm_eval_changes", challenge_mode_checking: "failure_check", challenge_mode_ending: "ending_check" }[a.type];
      if (l) return l;
    }
    const r = t.getFlatHistoryItems();
    let n;
    for (let i = r.length - 1; i >= 0; i--) {
      const l = r[i];
      if (!(l == null ? void 0 : l.deleted)) {
        switch (l.type) {
          case "dm_intro":
            n = "character_intro";
            break;
          case "character_intro":
            n = "player_input";
            break;
          case "character_message":
            n = this.session.modeState.shouldCheck === false ? "player_input" : "dm_eval_changes";
            break;
          case "character_message_group":
            n = this.session.modeState.shouldCheck === false ? "player_input" : "dm_eval_changes";
            break;
          case "participant_message": {
            const u = l.data;
            (u == null ? void 0 : u.isDM) ? n = "failure_check" : (u == null ? void 0 : u.isUser) || (u == null ? void 0 : u.role) === "user" ? n = "character_response" : n = "player_input";
            break;
          }
          case "dm_eval_logic":
          case "challenge_mode_dm_eval":
            n = "dm_narrate_changes";
            break;
          case "challenge_mode_checking": {
            const u = (_b = l.data) == null ? void 0 : _b.results;
            if (u && u.length > 0) {
              const d = u.some((m) => m.type === "failure"), c = u.some((m) => m.type === "goal");
              if (d) {
                n = u.some((o) => o.type === "failure" && o.result === true) ? "ending_check" : "goal_check";
                break;
              }
              if (c) {
                n = "ending_check";
                break;
              }
            }
            n = void 0;
            break;
          }
          case "challenge_mode_ending":
            n = "ending_check";
            break;
        }
        if (n) break;
      }
    }
    return n ? this.session.modeState.currentPhase === "player_input" && n !== "player_input" ? "player_input" : n : this.session.modeState.currentPhase;
  }
  getActualCurrentUIState(t) {
    var _a2;
    const a = t.getProcessingItem();
    if (a && a.type) {
      const n = { dm_intro: "dm_intro_running", character_intro: "character_intro_running", character_message: "character_response_running", character_message_group: "character_response_running", dm_eval_logic: "dm_eval_changes_running", participant_message: ((_a2 = a.data) == null ? void 0 : _a2.isDM) ? "dm_narrate_changes_running" : "player_input_running", challenge_mode_dm_eval: "dm_eval_changes_running", challenge_mode_checking: "failure_check_running", challenge_mode_ending: "ending_check_running" }[a.type];
      if (n) return n;
    }
    return this.session.modeState.currentUIState ? this.session.modeState.currentUIState : this.getReadyUIStateForPhase(this.getActualCurrentPhase(t));
  }
  getReadyUIStateForPhase(t) {
    switch (t) {
      case "dm_intro":
        return "dm_intro_ready";
      case "character_intro":
        return "character_intro_ready";
      case "player_input":
        return "player_input_ready";
      case "character_response":
        return "character_response_ready";
      case "dm_eval_changes":
        return "dm_eval_changes_ready";
      case "dm_narrate_changes":
        return "dm_narrate_changes_ready";
      case "failure_check":
        return "failure_check_ready";
      case "goal_check":
        return "goal_check_ready";
      case "ending_check":
        return "ending_check_ready";
      default:
        return "player_input_ready";
    }
  }
  getRunningUIStateForPhase(t) {
    switch (t) {
      case "dm_intro":
        return "dm_intro_running";
      case "character_intro":
        return "character_intro_running";
      case "player_input":
        return "player_input_running";
      case "character_response":
        return "character_response_running";
      case "dm_eval_changes":
        return "dm_eval_changes_running";
      case "dm_narrate_changes":
        return "dm_narrate_changes_running";
      case "failure_check":
        return "failure_check_running";
      case "goal_check":
        return "goal_check_running";
      case "ending_check":
        return "ending_check_running";
      default:
        return "player_input_running";
    }
  }
  getDoneUIStateForPhase(t) {
    switch (t) {
      case "dm_intro":
        return "dm_intro_done";
      case "character_intro":
        return "character_intro_done";
      case "player_input":
        return "player_input_done";
      case "character_response":
        return "character_response_done";
      case "dm_eval_changes":
        return "dm_eval_changes_done";
      case "dm_narrate_changes":
        return "dm_narrate_changes_done";
      case "failure_check":
        return "failure_check_done";
      case "goal_check":
        return "goal_check_done";
      case "ending_check":
        return "ending_check_done";
      default:
        return "player_input_done";
    }
  }
  enterNextState(t) {
    console.log(`[ChallengeManager] Transition: ${this.session.modeState.currentPhase} -> ${t}`), this.session.modeState.currentPhase = t, this.session.updatedAt = Date.now();
  }
  setCurrentUIState(t) {
    this.session.modeState.currentUIState = t, this.session.updatedAt = Date.now();
  }
  setShouldCheck(t) {
    this.session.modeState.shouldCheck = t, this.session.updatedAt = Date.now();
  }
  getVariableStates() {
    return this.session.modeState.variableStates;
  }
  updateVariable(t, a) {
    this.session.modeState.variableStates[t] = a, this.session.updatedAt = Date.now();
  }
  async executeCurrentStateLogic(t) {
    var _a2;
    const a = this.session.modeState.currentPhase, r = new Ia(this.session.modeState.variableStates, this.session.modeConfig.variables);
    switch (a) {
      case "dm_intro":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_intro")), { type: "LLM_CALL", messages: li(this.session), callbackPhase: "dm_intro", llmRequestType: "dm_intro" };
      case "character_intro":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("character_intro")), { type: "LLM_CALL", messages: ui(this.session), callbackPhase: "character_intro", llmRequestType: "character_intro" };
      case "player_input":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "WAIT_FOR_INPUT" };
      case "character_response":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("character_response")), { type: "LLM_CALL", messages: hi(this.session, t), callbackPhase: "character_response", llmRequestType: "character_message", dataExtra: { characterId: this.session.modeConfig.characterId, name: ((_a2 = this.session.modeConfig.characterSnapshot) == null ? void 0 : _a2.name) || "Unknown" } };
      case "dm_eval_changes":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_eval_changes")), { type: "LLM_CALL", messages: di(this.session, t), callbackPhase: "dm_eval_changes", llmRequestType: "dm_eval_logic" });
      case "dm_narrate_changes":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate_changes")), { type: "LLM_CALL", messages: mi(this.session, t), callbackPhase: "dm_narrate_changes", llmRequestType: "participant_message", dataExtra: { isDM: true, name: "DM" } });
      case "failure_check":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("failure_check")), this.handleFailureCheck(t, r));
      case "goal_check":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("goal_check")), this.handleGoalCheck(t, r));
      case "ending_check":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("ending_check")), this.handleEndingCheck(t));
      default:
        return { type: "STOP" };
    }
  }
  handleFailureCheck(t, a) {
    this.setCurrentUIState(this.getRunningUIStateForPhase("failure_check"));
    let r = false;
    const n = [], i = this.session.modeConfig.failureChecks || [];
    for (const l of i) {
      const u = a.checkCondition(l.condition), d = this.session.modeState.failureStates.find((c) => c.key === l.key);
      d && (d.isCompleted = u), u && (r = true), n.push({ type: "failure", key: l.key, result: u });
    }
    return t.addHistoryItem({ id: E(), type: "challenge_mode_checking", idx: 0, orderRef: 0, timestamp: Date.now(), data: { results: n }, hidden: true }), this.setCurrentUIState(this.getDoneUIStateForPhase("failure_check")), r ? this.enterNextState("ending_check") : this.enterNextState("goal_check"), { type: "STATE_CHANGE" };
  }
  handleGoalCheck(t, a) {
    this.setCurrentUIState(this.getRunningUIStateForPhase("goal_check"));
    const r = [], n = this.session.modeConfig.goals || [];
    for (const i of n) {
      const l = a.checkCondition(i.condition), u = this.session.modeState.goalStates.find((d) => d.key === i.key);
      u && (u.isCompleted = l), r.push({ type: "goal", key: i.key, result: l });
    }
    return this.setCurrentUIState(this.getDoneUIStateForPhase("goal_check")), this.enterNextState("ending_check"), { type: "STATE_CHANGE" };
  }
  handleEndingCheck(t) {
    var _a2;
    this.setCurrentUIState(this.getRunningUIStateForPhase("ending_check"));
    const a = (this.session.modeState.failureStates || []).find((u) => u.isCompleted), r = this.session.modeConfig.goals || [], n = r.length > 0 && r.every((u) => {
      var _a3;
      return (_a3 = this.session.modeState.goalStates.find((c) => c.key === u.key)) == null ? void 0 : _a3.isCompleted;
    }), i = !!a;
    if (i || n) {
      if (!t.state.historyItems.findLast((d) => d.type === "challenge_mode_ending")) {
        let d = "", c;
        i ? (d = ((_a2 = this.session.modeConfig.failureChecks.find((o) => o.key === (a == null ? void 0 : a.key))) == null ? void 0 : _a2.userInfo) || "\u6311\u6218\u5931\u8D25\u3002", c = a == null ? void 0 : a.key) : d = "\u606D\u559C\u4F60\uFF01\u6240\u6709\u6311\u6218\u76EE\u6807\u5DF2\u8FBE\u6210\u3002", t.addHistoryItem({ id: E(), type: "challenge_mode_ending", idx: 0, orderRef: 0, timestamp: Date.now(), data: { type: i ? "failure" : "success", description: d, failureReason: c }, hidden: false }), this.setShouldCheck(false);
      }
      return this.setCurrentUIState("ended"), { type: "STOP" };
    }
    return this.setCurrentUIState(this.getDoneUIStateForPhase("ending_check")), this.enterNextState("player_input"), { type: "STATE_CHANGE" };
  }
}
const F = le({ currentSession: null, contextManager: null, sessionManager: null, variablesManager: null, loadSession(s, t) {
  this.currentSession = s, s.modeState.currentUIState = "idle", this.sessionManager = new pi(s);
  const a = le(t || { historyItems: [], processingItem: void 0 });
  this.contextManager = new Ne(a), s.modeState && s.modeConfig && (this.variablesManager = new Ia(s.modeState.variableStates, s.modeConfig.variables || {}));
}, applyVariableOperation(s) {
  if (this.variablesManager) try {
    this.variablesManager.performOperation(s);
  } catch (t) {
    console.error("[Store] VarOp Failed", t);
  }
}, updateConditionState(s, t, a) {
  const r = this.currentSession;
  if (!r) return;
  const i = (s === "goal" ? r.modeState.goalStates : r.modeState.failureStates).find((l) => l.key === t);
  i && (i.isCompleted = a);
}, setPhase(s) {
  this.currentSession && (this.currentSession.modeState.currentPhase = s);
}, async saveNewContextItemsToDB(s, t) {
  const { SessionDB: a } = await we(async () => {
    const { SessionDB: i } = await Promise.resolve().then(() => Ht);
    return { SessionDB: i };
  }, void 0), r = new a(s);
  let n;
  try {
    n = xe(t);
  } catch {
    n = JSON.parse(JSON.stringify(t));
  }
  await r.addContextItems(n);
}, async updateSessionInDB() {
  if (!this.currentSession) return;
  const { masterDb: s } = await we(async () => {
    const { masterDb: a } = await Promise.resolve().then(() => ms);
    return { masterDb: a };
  }, void 0), t = xe(this.currentSession.modeState);
  await s.sessions.update(this.currentSession.id, { modeState: t, updatedAt: Date.now() });
} });
function xi() {
  const s = ts((d) => d.config), t = b.useRef(false), a = te(), r = async (d, c, m, o, h = {}) => {
    const x = F.contextManager;
    if (!x) return { content: "" };
    const g = { id: E(), type: m, orderRef: 0, timestamp: Date.now(), data: { content: "", ...h } };
    x.setProcessingItem(g);
    let y = "";
    return await cs(d, c, [], (v, f) => {
      o == null ? void 0 : o(v), y = f;
      const S = x.getProcessingItem();
      S && (S.data.content = f);
    }), x.completeProcessingItem(), { content: y };
  }, n = async (d, c) => {
    const m = F.sessionManager, o = F.contextManager;
    if (!m || !o) return;
    const h = await m.executeCurrentStateLogic(o);
    if (console.log("[Loop] Action:", h), h.type === "WAIT_FOR_INPUT" || h.type === "STOP") {
      await F.updateSessionInDB(), t.current = false;
      return;
    }
    if (h.type === "STATE_CHANGE") {
      await F.updateSessionInDB(), setTimeout(() => l(d.id), 0);
      return;
    }
    if (h.type === "LLM_CALL") {
      if (h.callbackPhase) {
        const g = h.callbackPhase;
        m.setCurrentUIState(m.getRunningUIStateForPhase(g));
      }
      await F.updateSessionInDB();
      const x = await r(c, h.messages.map((g) => ({ ...g, id: E() })), h.llmRequestType, void 0, h.dataExtra);
      await F.saveNewContextItemsToDB(d.id, o.getHistoryItems()), await i(h, x.content, d.id), await F.updateSessionInDB(), setTimeout(() => l(d.id), 0);
    }
  }, i = async (d, c, m) => {
    const o = F.sessionManager, h = F.contextManager;
    if (d.callbackPhase === "dm_eval_changes") {
      try {
        const x = c.indexOf("{"), g = c.lastIndexOf("}") + 1;
        if (x >= 0 && g > x) {
          const y = JSON.parse(c.slice(x, g)), v = y.analyze || "", f = [];
          if (y.operations) {
            const S = o.session.modeConfig.variables || {};
            for (const w of y.operations) {
              if (!S[w.key]) continue;
              let j;
              w.op === "delta" ? j = ["delta", w.key, Number(w.value)] : w.op === "setTo" ? j = ["setTo", w.key, w.value] : w.op === "setTrue" ? j = ["setTrue", w.key] : w.op === "setFalse" ? j = ["setFalse", w.key] : w.op === "add" ? j = ["add", w.key, String(w.value)] : w.op === "remove" && (j = ["remove", w.key, String(w.value)]), j && (F.applyVariableOperation(j), f.push(j));
            }
          }
          h.addHistoryItem({ id: E(), type: "challenge_mode_dm_eval", idx: 0, orderRef: 0, timestamp: Date.now(), data: { analyze: v, operations: f }, hidden: false }), await F.saveNewContextItemsToDB(m, h.getHistoryItems());
        }
      } catch (x) {
        console.error("Failed to parse DM evaluation", x), U.error("DM \u8BC4\u4F30\u6570\u636E\u89E3\u6790\u5931\u8D25\uFF0C\u5C06\u5FFD\u7565\u672C\u6B21\u53D8\u66F4");
      }
      o.enterNextState("dm_narrate_changes"), o.setCurrentUIState(o.getDoneUIStateForPhase("dm_eval_changes"));
    } else d.callbackPhase === "dm_intro" ? (o.setCurrentUIState(o.getDoneUIStateForPhase("dm_intro")), o.enterNextState("character_intro")) : d.callbackPhase === "character_intro" ? (o.setCurrentUIState(o.getDoneUIStateForPhase("character_intro")), o.enterNextState("player_input")) : d.callbackPhase === "dm_narrate_changes" ? (o.setCurrentUIState(o.getDoneUIStateForPhase("dm_narrate_changes")), o.enterNextState("failure_check")) : d.callbackPhase === "character_response" && (o.setCurrentUIState(o.getDoneUIStateForPhase("character_response")), o.session.modeState.shouldCheck !== false ? o.enterNextState("dm_eval_changes") : o.enterNextState("player_input"));
  }, l = async (d) => {
    const c = F.currentSession;
    if (!c || c.id !== d) return;
    const m = { ...s };
    try {
      t.current = true, await n(c, m);
    } catch (o) {
      console.error("ChallengeLoop Critical Error:", o), U.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", { duration: 1 / 0, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => a({ to: "/config/llm" }) } }), t.current = false;
    }
  };
  return { nextStep: b.useCallback(async (d) => {
    if (t.current) return;
    const c = F.currentSession, m = F.contextManager, o = F.sessionManager;
    if (!c || !m || !o) {
      console.warn("Session or Managers not ready");
      return;
    }
    if (d) {
      if (o.getCurrentPhase() !== "player_input") {
        U.warning("\u5F53\u524D\u5E76\u975E\u73A9\u5BB6\u884C\u52A8\u56DE\u5408");
        return;
      }
      o.setCurrentUIState(o.getRunningUIStateForPhase("player_input")), m.addLLMResponseAsContextItem({ role: "user", content: d }, {}), await F.saveNewContextItemsToDB(c.id, m.getHistoryItems()), o.setCurrentUIState(o.getDoneUIStateForPhase("player_input")), o.enterNextState("character_response"), o.setCurrentUIState(o.getReadyUIStateForPhase("character_response")), await F.updateSessionInDB();
    }
    await l(c.id);
  }, [s]) };
}
const gi = (s) => {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o, _p;
  const t = te(), [a, r] = b.useState(""), n = b.useRef(null), [i, l] = b.useState(false), [u, d] = b.useState(false), c = ke(F), { data: m = [] } = Pe((I) => I.from({ s: Le })), { data: o = [] } = Pe((I) => I.from({ c: Ee })), h = m.find((I) => I.id === s.sessionId), x = o.find((I) => {
    var _a3;
    return I.id === ((_a3 = h == null ? void 0 : h.modeConfig) == null ? void 0 : _a3.characterId);
  });
  b.useEffect(() => {
    var _a3;
    let I = false;
    if (!h) return;
    if (((_a3 = F.currentSession) == null ? void 0 : _a3.id) === h.id && F.contextManager) {
      d(true);
      return;
    }
    return (async () => {
      try {
        const se = await Bt.createSessionDB(h.id).getContextItems();
        if (I) return;
        h.modeConfig && !h.modeConfig.characterSnapshot && x && (h.modeConfig.characterSnapshot = { name: x.name, description: x.description, avatar: x.avatar }), F.loadSession(h, { historyItems: se, processingItem: void 0 }), d(true);
      } catch (me) {
        console.error("Load session error", me);
      }
    })(), () => {
      I = true;
    };
  }, [h == null ? void 0 : h.id, h]);
  const { nextStep: g } = xi();
  b.useEffect(() => {
    n.current && (n.current.scrollTop = n.current.scrollHeight);
  });
  const y = async () => {
    if (i) return;
    const I = F.sessionManager, $ = F.contextManager;
    if (!(!I || !$)) {
      l(true);
      try {
        if ($.getHistoryItems().some((Ke) => Ke.type === "challenge_mode_ending")) {
          I.setShouldCheck(false), I.enterNextState("player_input"), I.setCurrentUIState(I.getReadyUIStateForPhase("player_input")), await F.updateSessionInDB();
          return;
        }
        const se = I.getActualCurrentPhase($);
        I.enterNextState(se), I.setCurrentUIState(I.getReadyUIStateForPhase(se)), await F.updateSessionInDB(), await g();
      } finally {
        l(false);
      }
    }
  };
  if (!h || !x || !u) return e.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4", children: [e.jsx("div", { className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center", children: e.jsx(je, { className: "w-6 h-6 opacity-20" }) }), e.jsx("p", { className: "text-xs font-medium tracking-widest uppercase opacity-50", children: "\u6B63\u5728\u6784\u5EFA\u53D9\u4E8B\u73AF\u5883..." })] });
  const v = async () => {
    if (!(!a.trim() || i)) {
      l(true);
      try {
        await g(a);
      } finally {
        l(false), r("");
      }
    }
  }, f = F.sessionManager && F.contextManager ? F.sessionManager.getActualCurrentUIState(F.contextManager) : ((_b = (_a2 = c.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b.currentUIState) || "idle", S = f === "ended", w = zt[f] || zt.idle, N = i || !w.inputEnabled && !S, j = async () => {
    F.sessionManager && (F.sessionManager.setShouldCheck(false), F.sessionManager.enterNextState("player_input"), F.sessionManager.setCurrentUIState(F.sessionManager.getReadyUIStateForPhase("player_input")), await F.updateSessionInDB());
  }, C = () => {
    t({ to: "/plaza/challenges" });
  }, J = () => {
    console.log("[Challenge][Memory Session]", F.currentSession);
  }, Q = async () => {
    if (!(h == null ? void 0 : h.id)) return;
    const I = await ee.sessions.getTable().get(h.id);
    console.log("[Challenge][DB Session]", I);
  };
  return e.jsxs("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: [e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm", children: e.jsx(de, { className: "w-5 h-5 text-primary" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm tracking-tight", children: x.name }), e.jsx(H, { variant: "outline", className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-primary/5 text-primary border-primary/10", children: "Lv.1" })] }), e.jsx("span", { className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide", children: "\u53D9\u4E8B\u534F\u8BAE\u8FDE\u63A5\u5DF2\u5EFA\u7ACB" })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs(H, { variant: "secondary", className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50", children: [e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" }), "CHALLENGE"] }), e.jsx(_, { variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: J, children: "LOG MEM" }), e.jsx(_, { variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: Q, children: "LOG DB" })] })] }), e.jsx("div", { className: "flex grow overflow-y-auto", ref: n, children: e.jsx("div", { className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-10", children: (() => {
    var _a3, _b2, _c2, _d2, _e3;
    const I = (((_a3 = c.contextManager) == null ? void 0 : _a3.state.historyItems) || []).filter((se) => !se.hidden), $ = (_b2 = c.contextManager) == null ? void 0 : _b2.state.processingItem;
    if (f === "idle") {
      const se = I.length === 0 ? "\u5F00\u59CB" : "\u7EE7\u7EED";
      return e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500", children: [e.jsx("div", { className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500", children: e.jsx(Be, { className: "w-10 h-10 text-amber-500 drop-shadow-sm" }) }), e.jsx("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center", children: ((_d2 = (_c2 = h == null ? void 0 : h.modeConfig) == null ? void 0 : _c2.characterSnapshot) == null ? void 0 : _d2.name) || "\u6311\u6218\u6A21\u5F0F" }), e.jsx("p", { className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm", children: ((_e3 = h == null ? void 0 : h.modeConfig) == null ? void 0 : _e3.userGuidance) || "\u547D\u8FD0\u7684\u9F7F\u8F6E\u5DF2\u7ECF\u5F00\u59CB\u8F6C\u52A8\uFF0C\u4F60\u51C6\u5907\u597D\u63A5\u53D7\u6311\u6218\u4E86\u5417\uFF1F" }), e.jsxs(_, { size: "lg", className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-primary/25 shadow-primary/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90", onClick: y, disabled: i, children: [i ? e.jsx(je, { className: "w-5 h-5 animate-spin mr-3" }) : e.jsx(ve, { className: "w-5 h-5 mr-3" }), se] }), e.jsxs("div", { className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest", children: [e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(at, { className: "w-3 h-3" }), " \u81EA\u52A8\u5B58\u6863"] }), e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(je, { className: "w-3 h-3" }), " \u5B9E\u65F6\u53D8\u91CF"] })] })] });
    }
    const me = [...I];
    return $ && !$.hidden && !I.some((se) => se.id === $.id) && me.push($), me.map((se, Ke) => e.jsx(fi, { item: se, character: x }, `[${Ke}]${se.id}`));
  })() }) }), S ? e.jsx("div", { className: "p-6 md:p-8 shrink-0 bg-background border-t", children: e.jsxs("div", { className: "max-w-xl mx-auto flex flex-col items-center gap-6 animate-in slide-in-from-bottom-4 fade-in duration-700", children: [e.jsx("div", { className: "text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60", children: "\u6545\u4E8B\u5DF2\u5B8C\u7ED3" }), e.jsxs("div", { className: "flex items-center gap-4 w-full", children: [e.jsxs(_, { variant: "outline", className: "flex-1 h-12 rounded-xl border-dashed border-2 hover:border-primary/50 hover:bg-primary/5 gap-2", onClick: C, children: [e.jsx(is, { className: "w-4 h-4" }), e.jsx("span", { className: "font-bold tracking-wider", children: "\u9000\u51FA\u6311\u6218" })] }), e.jsxs(_, { className: "flex-2 h-12 rounded-xl shadow-lg shadow-primary/10 gap-2 text-base", onClick: j, children: [e.jsx(ea, { className: "w-4 h-4 fill-current" }), e.jsx("span", { className: "font-black tracking-[0.15em] uppercase", children: "\u7EE7\u7EED\u81EA\u7531\u5BF9\u8BDD" })] })] })] }) }) : e.jsxs("div", { className: "p-4 md:p-6 shrink-0 bg-background", children: [e.jsxs("div", { className: "max-w-3xl mx-auto relative group", children: [e.jsx(K, { value: a, onChange: (I) => r(I.target.value), placeholder: N ? w.placeholder : zt.player_input_ready.placeholder, disabled: N, className: L("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-primary/20 focus-visible:bg-background transition-all", N && "opacity-50 cursor-not-allowed"), onKeyDown: (I) => {
    I.key === "Enter" && !I.shiftKey && (I.preventDefault(), v());
  } }), e.jsx(_, { size: "icon", type: "button", className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-primary/20 transition-all", disabled: !a.trim() || N, onClick: v, children: i ? e.jsx(je, { className: "w-4 h-4 animate-spin" }) : e.jsx(ze, { className: "w-4 h-4" }) })] }), e.jsxs("div", { className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40", children: [e.jsx("div", { className: "text-[9px] font-bold tracking-widest uppercase", children: "INPUT MANIFESTO" }), e.jsx("div", { className: "text-[9px] font-medium", children: N ? "\u8F93\u5165\u5DF2\u9501\u5B9A" : "Shift + Enter \u6362\u884C" })] })] })] }), e.jsxs("div", { className: "w-[320px] h-full overflow-y-auto bg-muted/10 border-l p-8 space-y-10 shrink-0 hidden lg:block scrollbar-none", children: [e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(je, { className: "w-3.5 h-3.5 text-primary" }), "\u4E16\u754C\u53D8\u91CF"] }), e.jsx(H, { variant: "outline", className: "text-[9px] px-1.5 opacity-50", children: "SYNCED" })] }), e.jsxs("div", { className: "grid grid-cols-1 gap-3", children: [Object.entries(((_d = (_c = c.currentSession) == null ? void 0 : _c.modeState) == null ? void 0 : _d.variableStates) || {}).map(([I, $]) => e.jsxs("div", { className: "bg-background/40 p-4 rounded-xl border border-muted/30 hover:border-primary/20 transition-colors group", children: [e.jsxs("div", { className: "flex justify-between items-start mb-1", children: [e.jsx("span", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider", children: I }), e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors" })] }), e.jsx("div", { className: "text-xl font-mono font-bold tracking-tight text-foreground/90", children: typeof ($ == null ? void 0 : $.value) == "number" ? $.value.toLocaleString() : String($ == null ? void 0 : $.value) })] }, I)), Object.keys(((_f = (_e2 = c.currentSession) == null ? void 0 : _e2.modeState) == null ? void 0 : _f.variableStates) || {}).length === 0 && e.jsx("div", { className: "py-8 text-center border border-dashed rounded-xl opacity-30", children: e.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest", children: "\u65E0\u52A8\u6001\u53D8\u91CF" }) })] })] }), e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(Zs, { className: "w-3.5 h-3.5 text-primary" }), "\u751F\u5B58\u76EE\u6807"] }), e.jsxs("div", { className: "space-y-2.5", children: [(_i2 = (_h = (_g = c.currentSession) == null ? void 0 : _g.modeConfig) == null ? void 0 : _h.goals) == null ? void 0 : _i2.map((I) => {
    var _a3, _b2, _c2;
    const $ = (_c2 = (_b2 = (_a3 = c.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.goalStates) == null ? void 0 : _c2.find((me) => me.key === I.key);
    return e.jsxs("div", { className: L("p-3.5 rounded-xl border flex items-start gap-3 transition-all duration-300", ($ == null ? void 0 : $.isCompleted) ? "bg-primary/3 border-primary/20 shadow-sm" : "bg-background/40 border-muted/50 grayscale-[0.8] opacity-60"), children: [e.jsx("div", { className: L("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5 shadow-inner", ($ == null ? void 0 : $.isCompleted) ? "bg-primary text-primary-foreground" : "bg-muted border border-muted-foreground/10"), children: ($ == null ? void 0 : $.isCompleted) ? e.jsx(at, { className: "w-3 h-3" }) : e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20" }) }), e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsx("div", { className: L("text-[13px] leading-tight font-bold tracking-tight", ($ == null ? void 0 : $.isCompleted) ? "text-primary" : "text-foreground/70"), children: I.description }), ($ == null ? void 0 : $.isCompleted) && e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider opacity-60", children: "Objective Achieved" })] })] }, I.key);
  }), (!((_k = (_j = c.currentSession) == null ? void 0 : _j.modeConfig) == null ? void 0 : _k.goals) || c.currentSession.modeConfig.goals.length === 0) && e.jsx("div", { className: "py-8 text-center border border-dashed rounded-xl opacity-30", children: e.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest", children: "\u65E0\u8BBE\u5B9A\u76EE\u6807" }) })] })] }), e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(Be, { className: "w-3.5 h-3.5 text-destructive" }), "\u6B7B\u4EA1\u7981\u5FCC"] }), e.jsxs("div", { className: "space-y-2.5", children: [(_n2 = (_m = (_l = c.currentSession) == null ? void 0 : _l.modeConfig) == null ? void 0 : _m.failureChecks) == null ? void 0 : _n2.map((I) => {
    var _a3, _b2, _c2;
    const $ = (_c2 = (_b2 = (_a3 = c.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.failureStates) == null ? void 0 : _c2.find((me) => me.key === I.key);
    return e.jsxs("div", { className: L("p-3.5 rounded-xl border flex items-start gap-3 transition-all", ($ == null ? void 0 : $.isCompleted) ? "bg-destructive/5 border-destructive/20" : "bg-background/40 border-muted/50 opacity-60"), children: [e.jsx("div", { className: L("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5", ($ == null ? void 0 : $.isCompleted) ? "bg-destructive text-destructive-foreground" : "bg-muted border border-muted-foreground/10"), children: ($ == null ? void 0 : $.isCompleted) ? e.jsx(Hs, { className: "w-3 h-3" }) : e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20" }) }), e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsx("div", { className: L("text-[13px] leading-tight font-bold tracking-tight", ($ == null ? void 0 : $.isCompleted) ? "text-destructive" : "text-foreground/70"), children: I.description }), ($ == null ? void 0 : $.isCompleted) && e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider opacity-60", children: "Critical Failure Triggered" })] })] }, I.key);
  }), (!((_p = (_o = c.currentSession) == null ? void 0 : _o.modeConfig) == null ? void 0 : _p.failureChecks) || c.currentSession.modeConfig.failureChecks.length === 0) && e.jsx("div", { className: "py-8 text-center border border-dashed rounded-xl opacity-30", children: e.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest", children: "\u65E0\u5931\u8D25\u5224\u5B9A" }) })] })] }), e.jsxs("div", { className: "pt-10 opacity-30", children: [e.jsx("div", { className: "h-px bg-linear-to-r from-transparent via-muted-foreground/50 to-transparent" }), e.jsx("p", { className: "text-[9px] text-center mt-4 font-bold tracking-[0.3em] uppercase", children: "Narrative Engine v1.0.4" })] })] })] });
}, fi = (s) => {
  const { item: t, character: a } = s, n = (() => {
    const i = t.data;
    return i ? Array.isArray(i.operations) ? e.jsx(ks, { item: { ...t, type: "challenge_mode_dm_eval" } }) : Array.isArray(i.results) && i.results.every((l) => l && (l.type === "goal" || l.type === "failure")) ? e.jsx(Is, { item: { ...t, type: "challenge_mode_checking" } }) : i.type && (i.type === "success" || i.type === "failure") && typeof i.description == "string" ? e.jsx(Ds, { item: { ...t, type: "challenge_mode_ending" } }) : null : null;
  })();
  if (n) return n;
  switch (t.type) {
    case "dm_intro":
      return e.jsx(ws, { content: t.data.content, title: "Challenge Intro" });
    case "challenge_mode_dm_eval":
      return e.jsx(ks, { item: t });
    case "challenge_mode_checking":
      return e.jsx(Is, { item: t });
    case "challenge_mode_ending":
      return e.jsx(Ds, { item: t });
    case "character_intro":
      return e.jsx(wa, { item: t, character: a });
    case "character_message":
      return e.jsx(Pt, { item: t, character: a });
    case "character_message_group":
      return e.jsx("div", { className: "space-y-4", children: (t.data.list || []).map((i, l) => e.jsx(Pt, { item: { ...t, data: { ...t.data, content: i.content } }, character: a }, i.id || l)) });
    case "participant_message":
      return t.data.isDM || t.data.name === "DM" || !t.data.isUser && !t.data.isCharacter && !t.data.isEnv ? e.jsx(ws, { content: t.data.content }) : e.jsx(Yt, { item: t });
    case "system_notification":
      return e.jsx("div", { className: "flex justify-center my-6", children: e.jsxs("div", { className: "flex items-center gap-3 px-4 py-1.5 rounded-full bg-muted/30 border border-muted/50 text-muted-foreground shadow-sm", children: [e.jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/40" }), e.jsx("span", { className: "text-[10px] font-bold tracking-widest uppercase", children: t.data.content }), e.jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/40" })] }) });
    case "placeholder":
      return null;
    default:
      return null;
  }
}, ws = ({ content: s, title: t = "Narrative Master" }) => e.jsxs("div", { className: "flex gap-6 group animate-in fade-in slide-in-from-left-2 duration-500", children: [e.jsxs("div", { className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden", children: [e.jsx("div", { className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" }), e.jsx(de, { className: "w-5 h-5 text-amber-600 relative z-10" })] }), e.jsxs("div", { className: "space-y-2 grow pt-1", children: [e.jsxs("div", { className: "text-[10px] font-black tracking-[0.2em] text-amber-600/60 flex items-center gap-2 uppercase", children: [e.jsx(ve, { className: "w-3 h-3" }), t] }), e.jsx("div", { className: "text-[15px] leading-relaxed italic text-foreground/80 whitespace-pre-wrap font-serif", children: s })] })] }), ks = ({ item: s }) => e.jsx("div", { className: "max-w-2xl mx-auto w-full group animate-in fade-in zoom-in-95 duration-500", children: e.jsxs("div", { className: "bg-muted/10 border border-muted/40 rounded-2xl overflow-hidden shadow-sm", children: [e.jsxs("div", { className: "px-4 py-2 border-b border-muted/40 bg-muted/20 flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground/60", children: [e.jsx(je, { className: "w-3 h-3" }), "\u4E16\u754C\u7EBF\u6F14\u53D8\u8BC4\u4F30"] }), e.jsx($t, { className: "w-3 h-3 text-muted-foreground/30" })] }), e.jsxs("div", { className: "p-5 space-y-4", children: [s.data.analyze && e.jsx("div", { className: "text-[13px] text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1", children: s.data.analyze }), e.jsx("div", { className: "flex flex-wrap gap-2", children: s.data.operations.map((t, a) => e.jsx(bi, { operation: t }, a)) })] })] }) }), bi = ({ operation: s }) => {
  const [t, a, r] = s;
  let n = "bg-primary/10 text-primary border-primary/20", i = "";
  if (t === "delta") {
    const l = r;
    n = l > 0 ? "bg-green-500/10 text-green-600 border-green-500/20" : "bg-red-500/10 text-red-600 border-red-500/20", i = `${a} ${l > 0 ? "+" : ""}${l}`;
  } else t === "setTrue" || t === "setFalse" ? i = `${a} \u2192 ${t === "setTrue" ? "YES" : "NO"}` : i = `${a} = ${r}`;
  return e.jsx(H, { variant: "outline", className: L("text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg border", n), children: i });
}, Is = ({ item: s }) => e.jsx("div", { className: "flex justify-center opacity-40 hover:opacity-100 transition-opacity", children: e.jsx("div", { className: "flex gap-4", children: s.data.results.map((t, a) => t.result && e.jsxs("div", { className: "flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground", children: [e.jsx(at, { className: "w-3 h-3 text-primary" }), t.key, " \u66F4\u65B0"] }, a)) }) }), Ds = ({ item: s }) => {
  const t = s.data.type === "success";
  return e.jsx("div", { className: "py-12 animate-in fade-in zoom-in duration-1000", children: e.jsxs("div", { className: L("max-w-lg mx-auto p-12 rounded-[2.5rem] border-4 text-center space-y-6 shadow-2xl relative overflow-hidden", t ? "bg-primary/5 border-primary/30 shadow-primary/10" : "bg-destructive/5 border-destructive/30 shadow-destructive/10"), children: [e.jsx("div", { className: L("absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20", t ? "bg-primary" : "bg-destructive") }), e.jsx("div", { className: L("absolute -bottom-12 -left-12 w-48 h-48 rounded-full blur-3xl opacity-20", t ? "bg-primary" : "bg-destructive") }), e.jsx("div", { className: "inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-background border shadow-xl relative z-10 mb-2", children: t ? e.jsx(Be, { className: "w-12 h-12 text-primary animate-bounce-short" }) : e.jsx(qs, { className: "w-12 h-12 text-destructive animate-pulse" }) }), e.jsxs("div", { className: "space-y-2 relative z-10", children: [e.jsx("h2", { className: L("text-3xl font-black uppercase tracking-[0.3em]", t ? "text-primary" : "text-destructive"), children: t ? "\u6311\u6218\u6210\u529F" : "\u6311\u6218\u5931\u8D25" }), e.jsx("div", { className: "h-1 w-12 bg-muted-foreground/20 mx-auto rounded-full" })] }), e.jsx("p", { className: "text-lg font-medium text-foreground/80 leading-relaxed font-serif relative z-10", children: s.data.description }), !t && s.data.failureReason && e.jsxs("div", { className: "pt-4 px-6 relative z-10", children: [e.jsx("div", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-destructive/60 mb-2", children: "\u5931\u8D25\u6839\u6E90" }), e.jsxs("p", { className: "text-xs font-bold text-destructive/80 italic", children: ["\u300C", s.data.failureReason, "\u300D"] })] }), e.jsx("div", { className: "pt-8 relative z-10", children: e.jsx(H, { variant: "outline", className: "text-[10px] font-black tracking-[0.4em] uppercase py-2 px-6 rounded-2xl bg-background/50 backdrop-blur-sm border-muted/50", children: "NARRATIVE ENDED" }) })] }) });
}, Xo = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForChallenge: gi }, Symbol.toStringTag, { value: "Module" }));
function Da(s) {
  return Math.floor((s - 10) / 2);
}
function yi(s, t) {
  const a = Math.floor(Math.random() * 20) + 1, r = a + t;
  return { naturalRoll: a, total: r, modifier: t, isSuccess: r >= s };
}
function ji(s, t) {
  const a = t[s.attribute] || 10, r = Da(a);
  return yi(s.dc, r);
}
function vi(s) {
  try {
    const t = s.match(/```(?:json)?\s*\n?([\s\S]*?)```/), a = t ? t[1].trim() : s.trim(), r = a.indexOf("{"), n = a.lastIndexOf("}") + 1;
    if (r < 0 || n <= r) return console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5931\u8D25\uFF1A\u672A\u627E\u5230 JSON \u5757", s.slice(0, 200)), null;
    const i = JSON.parse(a.slice(r, n));
    if (i.none === true || i.none === "true") return { needsCheck: false };
    const l = i.playerId || i.player_id || i.\u89D2\u8272ID || i.\u6267\u884C\u8005ID, u = i.attribute || i.\u5C5E\u6027 || i.\u68C0\u5B9A\u7EF4\u5EA6, d = Number(i.dc || i.DC || i.\u76EE\u6807\u6570\u503C || i.\u96BE\u5EA6 || 0);
    return l && u && d > 0 ? { needsCheck: true, checkSpec: { intent: i.intent || i.\u610F\u56FE || i.reason || i.\u5177\u4F53\u610F\u56FE || "", type: i.type || "attribute", attribute: u, dc: d, playerId: l } } : (console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56 JSON \u5B57\u6BB5\u4E0D\u5B8C\u6574:", i), null);
  } catch (t) {
    return console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5F02\u5E38:", t, s.slice(0, 200)), null;
  }
}
function _i(s) {
  try {
    const t = s.indexOf("{"), a = s.lastIndexOf("}") + 1;
    if (t < 0 || a <= t) return null;
    const r = JSON.parse(s.slice(t, a)), n = r.nextPlayerId || r.\u6307\u5B9A\u7684\u73A9\u5BB6ID;
    return n ? { nextPlayerId: n, reason: r.reason || r.\u539F\u56E0 || "" } : null;
  } catch {
    return null;
  }
}
function Ni(s) {
  const t = s.replace(/<[^>]*$/, ""), a = [], r = /<\/?([a-zA-Z]\w*)[^>]*>/g;
  let n;
  for (; (n = r.exec(t)) !== null; ) {
    const l = n[1].toLowerCase();
    n[0].startsWith("</") ? a.length > 0 && a.at(-1) === l && a.pop() : a.push(l);
  }
  let i = t;
  for (; a.length > 0; ) {
    const l = a.pop();
    i += `</${l}>`;
  }
  return i;
}
function Si(s, t) {
  let a = s;
  return t.userName && (a = a.replace(/\{\{user\}\}/gi, t.userName), a = a.replace(/<USER>/gi, t.userName)), t.charName && (a = a.replace(/\{\{char\}\}/gi, t.charName), a = a.replace(/<BOT>/gi, t.charName)), a;
}
const Ci = /<think>([\s\S]*?)<\/think>/, wi = /<speak>([\s\S]*?)<\/speak>/, ki = /<action>([\s\S]*?)<\/action>/;
function Ma(s) {
  var _a2, _b, _c, _d, _e2, _f;
  const t = Ni(s), a = (_b = (_a2 = t.match(Ci)) == null ? void 0 : _a2[1]) == null ? void 0 : _b.trim(), r = (_d = (_c = t.match(wi)) == null ? void 0 : _c[1]) == null ? void 0 : _d.trim(), n = (_f = (_e2 = t.match(ki)) == null ? void 0 : _e2[1]) == null ? void 0 : _f.trim(), i = t.replace(/<\/?[a-zA-Z]\w*[^>]*>/g, "").trim();
  return { think: a, speak: r, action: n, rawText: i };
}
function ut(s) {
  switch (s) {
    case "narrative":
      return '\u3010\u73A9\u6CD5\u6A21\u5F0F\uFF1A\u53D9\u4E8B\u4F18\u5148\u3011\u3002\u8BF7\u4E13\u6CE8\u4E8E\u53F2\u8BD7\u611F\u7684\u63CF\u8FF0\u548C\u89D2\u8272\u60C5\u611F\uFF0C\u5C3D\u91CF\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u9891\u7E41\u68C0\u5B9A\u3002\u53EA\u6709\u5728\u5173\u952E\u8F6C\u6298\u70B9\u624D\u8981\u6C42\u68C0\u5B9A\uFF0C\u4E14\u68C0\u5B9A\u5931\u8D25\u4E5F\u5E94\u4EE5"\u4EE3\u4EF7\u9AD8\u6602\u7684\u6210\u529F"\u6216\u5F00\u542F\u65B0\u5267\u60C5\u7684\u65B9\u5F0F\u5904\u7406\u3002';
    case "hardcore":
      return "\u3010\u73A9\u6CD5\u6A21\u5F0F\uFF1A\u786C\u6838\u6311\u6218\u3011\u3002\u8BF7\u4E25\u683C\u6267\u884C DND 5e \u89C4\u5219\u3002\u6218\u6597\u5FC5\u987B\u51F6\u9669\uFF0C\u68C0\u5B9A\u5FC5\u987B\u9891\u7E41\u4E14\u4E25\u683C\u3002\u8D44\u6E90\u532E\u4E4F\uFF0C\u5931\u8D25\u53EF\u80FD\u5BFC\u81F4\u4E25\u91CD\u7684\u540E\u679C\u751A\u81F3\u6B7B\u4EA1\u3002";
    case "solo":
      return "\u3010\u73A9\u6CD5\u6A21\u5F0F\uFF1A\u5355\u4EBA\u5192\u9669\u3011\u3002\u4F18\u5316\u4E92\u52A8\u8282\u594F\uFF0C\u786E\u4FDD\u552F\u4E00\u7684\u73A9\u5BB6\u89D2\u8272\u662F\u6545\u4E8B\u7684\u4E2D\u5FC3\u3002DM \u5E94\u66F4\u4E3B\u52A8\u5730\u63A8\u52A8\u5267\u60C5\u548C\u63D0\u4F9B\u73AF\u5883\u4E92\u52A8\u7684\u7EBF\u7D22\u3002";
    default:
      return "\u3010\u73A9\u6CD5\u6A21\u5F0F\uFF1A\u6807\u51C6\u6A21\u5F0F\u3011\u3002\u5E73\u8861\u53D9\u4E8B\u4E0E\u89C4\u5219\u68C0\u5B9A\u3002";
  }
}
function ht(s) {
  return s.modeConfig.worldSnapshot;
}
function $e(s) {
  return s.modeConfig.playerCharacterSnapshots;
}
function Ii(s, t) {
  return s.modeConfig.playerCharacterSnapshots.find((a) => a.id === t);
}
function qe(s, t) {
  return s.map((a) => {
    const r = Object.entries(a.attributes).map(([i, l]) => `${i}:${l}(${Da(l)})`).join(", "), n = t[a.id] || 0;
    return `- ${a.name} (ID: ${a.id}): ${r} (\u7D2F\u8BA1\u884C\u52A8: ${n}\u6B21)`;
  }).join(`
`);
}
function pt(s) {
  return s.map((t) => `- ${t.name} (ID: ${t.id}): ${t.systemPrompt}`).join(`
`);
}
function xt(s, t, a = 15) {
  const r = $e(t);
  return s.getFlatHistoryItems(a).filter((n) => !n.hidden && !n.deleted).map((n) => {
    var _a2;
    const { type: i, data: l } = n;
    if (i === "dnd_dm_intro" || i === "dnd_dm_narrate") return `[DM]: ${l.content}`;
    if (i === "dnd_player_action") return `[${l.characterName || ((_a2 = r.find((d) => d.id === l.characterId)) == null ? void 0 : _a2.name) || l.characterId}]: ${l.content}`;
    if (i === "participant_message") return l.isDM ? `[DM]: ${l.content}` : `[${l.name || "\u73A9\u5BB6"}]: ${l.content}`;
    if (i === "dnd_roll_result") {
      const u = l.checkSpec, d = l.checkResult;
      return `[\u7CFB\u7EDF\u68C0\u5B9A] ${u.intent}: 1d20(${d.naturalRoll}) + ${u.attribute}\u4FEE\u6B63(${d.modifier}) = ${d.total} vs DC:${u.dc} \u2192 ${d.isSuccess ? "\u6210\u529F" : "\u5931\u8D25"}`;
    }
    return i === "dnd_system_notice" ? `[\u7CFB\u7EDF]: ${l.content}` : null;
  }).filter(Boolean).join(`
`);
}
function Di(s) {
  var _a2;
  return ((_a2 = s.modeConfig.playerCharacterSnapshots.find((a) => a.isHumanControlled)) == null ? void 0 : _a2.name) || "\u5192\u9669\u8005";
}
function Ue(s, t, a) {
  const r = Di(t), n = a || t.modeConfig.dmName || "DM";
  return s.map((i) => ({ ...i, content: Si(i.content, { userName: r, charName: n }) }));
}
function Mi(s, t) {
  const a = ht(s), r = $e(s), n = s.modeState.turnCounts, i = s.modeConfig.gameMode, l = `\u4F60\u662F DM (\u5730\u4E0B\u57CE\u4E3B)\u3002\u8BF7\u4E3A\u8FD9\u4E2A DND \u5192\u9669\u521B\u5EFA\u5F15\u4EBA\u5165\u80DC\u7684\u5F00\u573A\u4ECB\u7ECD\uFF0C\u8BBE\u7F6E\u4E16\u754C\u80CC\u666F\u548C\u521D\u59CB\u573A\u666F\u3002
${ut(i)}
${a.systemPrompt}
${a.globalKnowledge ? `
\u3010\u4E16\u754C\u89C2\u8865\u5145\u3011
${a.globalKnowledge}` : ""}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, u = ["\u3010\u6E38\u620F\u914D\u7F6E\u3011", `DM: ${s.modeConfig.dmName || "DM"}`, `\u4E16\u754C: ${a.name} \u2014 ${a.description}`, `\u53C2\u4E0E\u89D2\u8272:
${pt(r)}`, `\u3010\u521D\u59CB\u6570\u503C\u72B6\u6001\u3011
${qe(r, n)}`].join(`

`);
  return Ue([{ role: "system", content: l }, { role: "user", content: u }], s);
}
function Pi(s, t) {
  const a = ht(s), r = $e(s), n = s.modeState.turnCounts, i = s.modeConfig.gameMode, l = s.modeState.historySummary, u = `\u4F60\u662F DM\u3002\u8BF7\u6839\u636E\u5F53\u524D\u5267\u60C5\u8FDB\u5C55\u63CF\u5199\u573A\u666F\uFF0C\u63A8\u8FDB\u6545\u4E8B\u3002
\u4E0D\u9700\u8981\u5728\u6B64\u9636\u6BB5\u6307\u5B9A\u89D2\u8272\u6216\u63D0\u51FA\u68C0\u5B9A\uFF0C\u53EA\u9700\u63CF\u5199\u3002
${ut(i)}
${a.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, d = xt(t, s, 10), c = ["\u3010\u6E38\u620F\u914D\u7F6E\u3011", `\u4E16\u754C: ${a.name}`, `\u89D2\u8272:
${pt(r)}`, l ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${l}` : "", d ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${d}` : "", `\u3010\u6570\u503C\u72B6\u6001\u3011
${qe(r, n)}`].filter(Boolean).join(`

`);
  return Ue([{ role: "system", content: u }, { role: "user", content: c }], s);
}
function Ai(s, t) {
  const a = $e(s), r = s.modeState.turnCounts, n = s.modeConfig.gameMode, i = a.map((g) => r[g.id] || 0), u = (i.length > 0 ? Math.min(...i) : 0) + 2, d = a.filter((g) => (r[g.id] || 0) <= u).sort((g, y) => (r[g.id] || 0) - (r[y.id] || 0)), c = `\u4F60\u662F DM\u3002\u8BF7\u6839\u636E\u521A\u624D\u7684\u53D9\u4E8B\uFF0C\u4ECE\u5019\u9009\u540D\u5355\u4E2D\u6307\u5B9A\u3010\u4E0B\u4E00\u4E2A\u3011\u884C\u52A8\u7684\u89D2\u8272\u3002
${ut(n)}
\u3010\u516C\u5E73\u6027\u539F\u5219\u3011\uFF1A\u4E3A\u4E86\u786E\u4FDD\u6BCF\u4E2A\u73A9\u5BB6\u90FD\u6709\u5E73\u7B49\u7684\u53C2\u4E0E\u673A\u4F1A\uFF0C\u4F60\u3010\u5FC5\u987B\u3011\u4EC5\u4ECE\u4EE5\u4E0B\u63D0\u4F9B\u7684\u540D\u5355\u4E2D\u9009\u62E9\u3002\u8BF7\u4F18\u5148\u8003\u8651\u884C\u52A8\u6B21\u6570\u6700\u5C11\u7684\u89D2\u8272\u3002
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u9700\u8F93\u51FA\u4E00\u4E2A JSON \u5757\uFF0C\u4E0D\u8981\u5305\u542B\u4EFB\u4F55\u53D9\u4E8B\u6587\u5B57\u3002
\`\`\`json
{ "reason": "\u539F\u56E0", "nextPlayerId": "\u89D2\u8272ID" }
\`\`\`
\u5019\u9009\u540D\u5355\uFF08\u4EC5\u9650\u5DF2\u884C\u52A8\u6B21\u6570\u8F83\u5C11\u7684\u89D2\u8272\uFF09\uFF1A
${d.map((g) => `- ${g.name} (ID: ${g.id}, \u5DF2\u884C\u52A8: ${r[g.id] || 0}\u6B21)`).join(`
`)}`, o = t.getFlatHistoryItems(5).findLast((g) => g.type === "dnd_dm_narrate" || g.type === "dnd_dm_intro"), h = o ? `\u3010\u5F53\u524D\u573A\u666F\u3011
${o.data.content}` : `\u3010\u521D\u59CB\u573A\u666F\u3011
\u5192\u9669\u5F00\u59CB\u3002`, x = `\u3010\u6240\u6709\u89D2\u8272\u884C\u52A8\u7EDF\u8BA1\u3011
${a.map((g) => `${g.name}: ${r[g.id] || 0} \u6B21`).join(`
`)}`;
  return Ue([{ role: "system", content: c }, { role: "user", content: [h, x].join(`

`) }], s);
}
function Ti(s, t) {
  const a = s.modeState.turnCounts, r = s.modeState.currentTurnCharacterId, n = Ii(s, r), i = s.modeState.historySummary, l = s.modeConfig.gameMode;
  if (!n) return [];
  const u = `\u4F60\u662F\u73A9\u5BB6 ${n.name} (${n.id})\u3002${n.systemPrompt}
\u8BF7\u57FA\u4E8E\u5F53\u524D\u573A\u666F\u548C DM \u7684\u5F15\u5BFC\u51B3\u5B9A\u4F60\u7684\u884C\u52A8\u3002
${ut(l)}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<think>\u5185\u5FC3\u72EC\u767D</think><speak>\u53E3\u5934\u8868\u8FBE</speak><action>\u5177\u4F53\u884C\u52A8</action>\u3002`, d = xt(t, s, 8), c = qe([n], a), m = [`\u3010\u4F60\u7684\u89D2\u8272\u4FE1\u606F\u3011
${n.systemPrompt}`, i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "", d ? `\u3010\u5F53\u524D\u573A\u666F\u3011
${d}` : "", `\u3010\u4F60\u7684\u6570\u503C\u72B6\u6001\u3011
${c}`].filter(Boolean).join(`

`);
  return Ue([{ role: "system", content: u }, { role: "user", content: m }], s, n.name);
}
function Ei(s, t) {
  const a = ht(s), r = $e(s), n = s.modeState.turnCounts, i = s.modeState.historySummary, l = `\u4F60\u662F DM\u3002\u8BF7\u8BC4\u4EF7\u521A\u624D\u73A9\u5BB6\u7684\u884C\u52A8\uFF0C\u5E76\u63CF\u5199\u5176\u521D\u6B65\u53CD\u5E94\u3002
\u4E0D\u8981\u5728\u6B64\u9636\u6BB5\u8F93\u51FA\u68C0\u5B9A JSON\uFF0C\u4E5F\u4E0D\u8981\u63CF\u8FF0\u6700\u7EC8\u7ED3\u679C\u3002
${a.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, u = xt(t, s, 10), d = [`\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${a.name}
\u89D2\u8272:
${pt(r)}`, i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "", u ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${u}` : "", `\u3010\u6570\u503C\u72B6\u6001\u3011
${qe(r, n)}`].filter(Boolean).join(`

`);
  return Ue([{ role: "system", content: l }, { role: "user", content: d }], s);
}
function Li(s, t) {
  const a = ht(s), r = $e(s), n = s.modeState.turnCounts, i = s.modeState.historySummary, l = s.modeConfig.gameMode, u = `\u4F60\u662F DM\u3002\u57FA\u4E8E\u73A9\u5BB6\u521A\u624D\u7684\u884C\u52A8\uFF0C\u51B3\u5B9A\u662F\u5426\u9700\u8981\u8FDB\u884C DND 5e \u68C0\u5B9A\u3002
${ut(l)}
\u5982\u679C\u9700\u8981\uFF0C\u53EA\u8F93\u51FA JSON \u5757\uFF1A
\`\`\`json
{
  "intent": "\u5177\u4F53\u610F\u56FE",
  "type": "attribute",
  "attribute": "\u529B\u91CF|\u654F\u6377|\u4F53\u8D28|\u667A\u529B|\u611F\u77E5|\u9B45\u529B",
  "dc": 10\u523025\u4E4B\u95F4\u7684\u6570\u5B57,
  "playerId": "\u6267\u884C\u8005ID"
}
\`\`\`
\u5982\u679C\u4E0D\u9700\u8981\u68C0\u5B9A\uFF08\u76F4\u63A5\u6210\u529F/\u5931\u8D25\uFF09\uFF0C\u8F93\u51FA\uFF1A
\`\`\`json
{ "none": true }
\`\`\`
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u4EFB\u4F55\u53D9\u4E8B\u3002`, d = xt(t, s, 10), c = [`\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${a.name}
\u89D2\u8272:
${pt(r)}`, i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "", d ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${d}` : "", `\u3010\u89D2\u8272\u6570\u503C\u72B6\u6001\u3011
${qe(r, n)}`].filter(Boolean).join(`

`);
  return Ue([{ role: "system", content: u }, { role: "user", content: c }], s);
}
function $i(s, t) {
  var _a2;
  const a = ht(s), r = $e(s), n = s.modeState.turnCounts, i = s.modeState.historySummary, l = s.modeState.lastCheckResult, u = s.modeState.lastCheckSpec, d = `\u4F60\u662F DM\u3002\u68C0\u5B9A\u7ED3\u679C\u5DF2\u51FA\u3002\u8BF7\u6839\u636E\u7ED3\u679C\u63CF\u8FF0\u540E\u679C\uFF0C\u5E76\u5F15\u5BFC\u5267\u60C5\u3002
${a.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, c = xt(t, s, 10), m = l && u ? `\u3010\u68C0\u5B9A\u7ED3\u679C\u3011
\u610F\u56FE: ${u.intent}
\u6267\u884C\u8005: ${((_a2 = r.find((h) => h.id === u.playerId)) == null ? void 0 : _a2.name) || u.playerId}
\u9AB0\u5B50\u7ED3\u679C: ${l.total} (1d20:${l.naturalRoll} + \u4FEE\u6B63:${l.modifier}) vs DC:${u.dc}
\u7ED3\u8BBA: ${l.isSuccess ? "\u6210\u529F" : "\u5931\u8D25"}
\u8BF7\u6839\u636E\u6B64\u7ED3\u679C\u8FDB\u884C\u9488\u5BF9\u6027\u7684\u540E\u679C\u63CF\u8FF0\u3002` : "", o = [`\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${a.name}
\u89D2\u8272:
${pt(r)}`, i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "", c ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${c}` : "", m, `\u3010\u6570\u503C\u72B6\u6001\u3011
${qe(r, n)}`].filter(Boolean).join(`

`);
  return Ue([{ role: "system", content: d }, { role: "user", content: o }], s);
}
class Ui extends hs {
  constructor(t) {
    super(t), this.session = t;
  }
  getCurrentPhase() {
    return this.session.modeState.currentPhase;
  }
  getCurrentUIState() {
    return this.session.modeState.currentUIState;
  }
  getActualCurrentPhase(t) {
    var _a2, _b, _c;
    const a = t.getProcessingItem();
    if (a == null ? void 0 : a.type) {
      const n = { dnd_dm_intro: "dm_game_intro", dnd_dm_narrate: "dm_narrate", dnd_assign_player: "dm_assign_player", dnd_player_action: "player_action", dnd_check_decision: "dm_check_decision", dnd_roll_result: "fn_roll_check" };
      if (a.type === "participant_message" && ((_a2 = a.data) == null ? void 0 : _a2.isDM)) return "dm_check_eval";
      const i = n[a.type];
      if (i) return i;
    }
    const r = t.getFlatHistoryItems();
    for (let n = r.length - 1; n >= 0; n--) {
      const i = r[n];
      if (!(i == null ? void 0 : i.deleted)) switch (i.type) {
        case "dnd_dm_intro":
          return "dm_assign_player";
        case "dnd_dm_narrate": {
          const l = (_b = i.data) == null ? void 0 : _b.phase;
          return l === "dm_check_eval" ? "dm_check_decision" : "dm_assign_player";
        }
        case "dnd_assign_player":
          return "player_action";
        case "dnd_player_action":
          return "dm_check_eval";
        case "dnd_check_decision":
          return ((_c = i.data) == null ? void 0 : _c.needsCheck) ? "fn_roll_check" : "dm_narrate";
        case "dnd_roll_result":
          return "dm_tell_result";
        case "dnd_system_notice":
          continue;
        default:
          continue;
      }
    }
    return this.session.modeState.currentPhase;
  }
  getActualCurrentUIState(t) {
    var _a2;
    const a = t.getProcessingItem();
    if (a == null ? void 0 : a.type) {
      const r = { dnd_dm_intro: "dm_game_intro_running", dnd_dm_narrate: "dm_narrate_running", dnd_assign_player: "dm_assign_player_running", dnd_player_action: "player_action_running", dnd_check_decision: "dm_check_decision_running", dnd_roll_result: "fn_roll_check_running" };
      if (a.type === "participant_message" && ((_a2 = a.data) == null ? void 0 : _a2.isDM)) return "dm_check_eval_running";
      const n = r[a.type];
      if (n) return n;
    }
    return this.session.modeState.currentUIState ? this.session.modeState.currentUIState : this.getReadyUIStateForPhase(this.getActualCurrentPhase(t));
  }
  getReadyUIStateForPhase(t) {
    return `${t}_ready`;
  }
  getRunningUIStateForPhase(t) {
    return `${t}_running`;
  }
  getDoneUIStateForPhase(t) {
    return `${t}_done`;
  }
  enterNextState(t) {
    console.log(`[DndManager] Transition: ${this.session.modeState.currentPhase} -> ${t}`), this.session.modeState.currentPhase = t, this.session.updatedAt = Date.now();
  }
  setCurrentUIState(t) {
    this.session.modeState.currentUIState = t, this.session.updatedAt = Date.now();
  }
  setCurrentTurn(t) {
    this.session.modeState.currentTurnCharacterId = t, this.session.updatedAt = Date.now();
  }
  incrementTurnCount(t) {
    this.session.modeState.turnCounts[t] || (this.session.modeState.turnCounts[t] = 0), this.session.modeState.turnCounts[t]++, this.session.updatedAt = Date.now();
  }
  incrementRound() {
    this.session.modeState.currentRound++, this.session.updatedAt = Date.now();
  }
  async executeCurrentStateLogic(t) {
    switch (this.session.modeState.currentPhase) {
      case "dm_game_intro":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_game_intro")), { type: "LLM_CALL", messages: Mi(this.session), callbackPhase: "dm_game_intro", llmRequestType: "dnd_dm_intro" };
      case "dm_narrate":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate")), { type: "LLM_CALL", messages: Pi(this.session, t), callbackPhase: "dm_narrate", llmRequestType: "dnd_dm_narrate", dataExtra: { phase: "dm_narrate" } };
      case "dm_assign_player":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_assign_player")), { type: "LLM_CALL", messages: Ai(this.session, t), callbackPhase: "dm_assign_player", llmRequestType: "dnd_assign_player" };
      case "player_action":
        return this.handlePlayerAction(t);
      case "dm_check_eval":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_eval")), { type: "LLM_CALL", messages: Ei(this.session, t), callbackPhase: "dm_check_eval", llmRequestType: "dnd_dm_narrate", dataExtra: { phase: "dm_check_eval" } };
      case "dm_check_decision":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_decision")), { type: "LLM_CALL", messages: Li(this.session, t), callbackPhase: "dm_check_decision", llmRequestType: "dnd_check_decision" };
      case "fn_roll_check":
        return this.handleRollCheck(t);
      case "dm_tell_result":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_tell_result")), { type: "LLM_CALL", messages: $i(this.session, t), callbackPhase: "dm_tell_result", llmRequestType: "dnd_dm_narrate", dataExtra: { phase: "dm_tell_result" } };
      default:
        return { type: "STOP" };
    }
  }
  handlePlayerAction(t) {
    const a = this.session.modeState.currentTurnCharacterId, r = this.session.modeConfig.playerCharacterSnapshots.find((n) => n.id === a);
    return r ? r.isHumanControlled ? (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), { type: "WAIT_FOR_INPUT" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), { type: "LLM_CALL", messages: Ti(this.session, t), callbackPhase: "player_action", llmRequestType: "dnd_player_action", dataExtra: { characterId: r.id, characterName: r.name, isHumanControlled: false } }) : (console.error(`[DndManager] \u89D2\u8272 ${a} \u4E0D\u5B58\u5728`), this.enterNextState("dm_assign_player"), { type: "STATE_CHANGE" });
  }
  handleRollCheck(t) {
    this.setCurrentUIState(this.getRunningUIStateForPhase("fn_roll_check"));
    const a = this.session.modeState.lastCheckSpec;
    if (!a) return console.error("[DndManager] \u68C0\u5B9A\u89C4\u8303\u7F3A\u5931\uFF0C\u8DF3\u8FC7\u68C0\u5B9A"), this.enterNextState("dm_narrate"), { type: "STATE_CHANGE" };
    const r = this.session.modeConfig.playerCharacterSnapshots.find((i) => i.id === a.playerId);
    if (!r) return console.error(`[DndManager] \u68C0\u5B9A\u89D2\u8272 ${a.playerId} \u4E0D\u5B58\u5728`), this.enterNextState("dm_narrate"), { type: "STATE_CHANGE" };
    const n = ji(a, r.attributes);
    return this.session.modeState.lastCheckResult = n, t.addHistoryItem({ id: E(), type: "dnd_roll_result", idx: 0, orderRef: 0, timestamp: Date.now(), data: { checkSpec: a, checkResult: n, characterName: r.name, attributeName: a.attribute } }), this.setCurrentUIState(this.getDoneUIStateForPhase("fn_roll_check")), this.enterNextState("dm_tell_result"), { type: "STATE_CHANGE" };
  }
  handleLLMResponse(t, a, r) {
    switch (t) {
      case "dm_game_intro":
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_game_intro")), this.enterNextState("dm_assign_player");
        break;
      case "dm_narrate":
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_narrate")), this.enterNextState("dm_assign_player");
        break;
      case "dm_assign_player": {
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_assign_player"));
        const n = _i(a);
        if (n) {
          const i = this.session.modeConfig.playerCharacterSnapshots.find((l) => l.id === n.nextPlayerId);
          r.addHistoryItem({ id: E(), type: "dnd_assign_player", idx: 0, orderRef: 0, timestamp: Date.now(), data: { nextPlayerId: n.nextPlayerId, nextPlayerName: i == null ? void 0 : i.name, reason: n.reason, isHumanControlled: i == null ? void 0 : i.isHumanControlled }, hidden: true }), r.addHistoryItem({ id: E(), type: "dnd_system_notice", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: `\u8F6E\u5230 ${(i == null ? void 0 : i.name) || n.nextPlayerId} \u884C\u52A8`, noticeType: "turn_start", characterId: n.nextPlayerId, characterName: i == null ? void 0 : i.name } }), this.setCurrentTurn(n.nextPlayerId), this.enterNextState("player_action");
        } else console.warn("[DndManager] \u89E3\u6790 DM \u6307\u5B9A\u89D2\u8272\u5931\u8D25\uFF0C\u91CD\u8BD5"), this.enterNextState("dm_assign_player");
        break;
      }
      case "player_action": {
        this.setCurrentUIState(this.getDoneUIStateForPhase("player_action"));
        const n = this.session.modeState.currentTurnCharacterId;
        this.incrementTurnCount(n), this.enterNextState("dm_check_eval");
        break;
      }
      case "dm_check_eval":
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_eval")), this.enterNextState("dm_check_decision");
        break;
      case "dm_check_decision": {
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_decision"));
        const n = vi(a);
        r.addHistoryItem({ id: E(), type: "dnd_check_decision", idx: 0, orderRef: 0, timestamp: Date.now(), data: { needsCheck: (n == null ? void 0 : n.needsCheck) ?? false, checkSpec: (n == null ? void 0 : n.needsCheck) ? n.checkSpec : void 0, rawContent: a }, hidden: true }), (n == null ? void 0 : n.needsCheck) && "checkSpec" in n ? (console.log("[DndManager] \u68C0\u5B9A\u51B3\u7B56\uFF1A\u9700\u8981\u68C0\u5B9A", n.checkSpec), this.session.modeState.lastCheckSpec = n.checkSpec, this.enterNextState("fn_roll_check")) : n === null ? (console.warn("[DndManager] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5931\u8D25\uFF0C\u91CD\u8BD5 dm_check_decision"), this.enterNextState("dm_check_decision")) : (console.log("[DndManager] \u68C0\u5B9A\u51B3\u7B56\uFF1A\u65E0\u9700\u68C0\u5B9A\uFF0C\u76F4\u63A5\u8FDB\u5165\u53D9\u4E8B"), this.enterNextState("dm_narrate"));
        break;
      }
      case "dm_tell_result":
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_tell_result")), this.enterNextState("dm_assign_player");
        break;
      default:
        console.warn(`[DndManager] \u672A\u77E5\u7684\u56DE\u8C03\u9636\u6BB5: ${t}`);
        break;
    }
  }
}
const G = le({ currentSession: null, contextManager: null, sessionManager: null, loadSession(s, t) {
  this.currentSession = s, this.currentSession.modeState.currentUIState = "idle", this.sessionManager = $s(new Ui(this.currentSession));
  const a = le(t || { historyItems: [], processingItem: void 0 });
  this.contextManager = new Ne(a);
}, setCurrentTurn(s) {
  this.sessionManager && this.sessionManager.setCurrentTurn(s);
}, incrementRound() {
  this.sessionManager && this.sessionManager.incrementRound();
}, setPhase(s) {
  this.currentSession && (this.currentSession.modeState.currentPhase = s);
}, updateCharacterAttributes(s, t) {
  if (!this.currentSession) return;
  const a = this.currentSession.modeConfig.playerCharacterSnapshots.find((r) => r.id === s);
  a && Object.assign(a.attributes, t);
}, toggleCharacterControl(s) {
  if (!this.currentSession) return;
  const t = this.currentSession.modeConfig.playerCharacterSnapshots.find((a) => a.id === s);
  t && (t.isHumanControlled = !t.isHumanControlled, this.currentSession.updatedAt = Date.now());
}, updateCharacterHP(s, t) {
  if (!this.currentSession) return;
  const a = this.currentSession.modeConfig.playerCharacterSnapshots.find((r) => r.id === s);
  a && (a.currentHP = Math.max(0, Math.min(t, a.maxHP)));
}, async saveNewContextItemsToDB(s, t) {
  const { SessionDB: a } = await we(async () => {
    const { SessionDB: i } = await Promise.resolve().then(() => Ht);
    return { SessionDB: i };
  }, void 0), r = new a(s);
  let n;
  try {
    n = xe(t);
  } catch {
    n = JSON.parse(JSON.stringify(t));
  }
  await r.addContextItems(n);
}, async updateSessionInDB() {
  if (!this.currentSession) return;
  const { masterDb: s } = await we(async () => {
    const { masterDb: r } = await Promise.resolve().then(() => ms);
    return { masterDb: r };
  }, void 0), t = xe(this.currentSession.modeState), a = xe(this.currentSession.modeConfig);
  await s.sessions.update(this.currentSession.id, { modeState: t, modeConfig: a, updatedAt: Date.now() });
} });
function Ri() {
  const s = ts((o) => o.config), t = b.useRef(false), a = b.useRef(false), r = te(), n = async (o, h, x, g, y = {}) => {
    const v = G.contextManager;
    if (!v) return { content: "" };
    const f = { id: E(), type: x, orderRef: 0, timestamp: Date.now(), data: { content: "", ...y } };
    v.setProcessingItem(f);
    let S = "";
    return await cs(o, h, [], (w, N) => {
      g == null ? void 0 : g(w), S = N;
      const j = v.getProcessingItem();
      j && (j.data.content = N);
    }), v.completeProcessingItem(), { content: S };
  }, i = async (o, h) => {
    const x = G.sessionManager, g = G.contextManager;
    if (!x || !g) return;
    const y = await x.executeCurrentStateLogic(g);
    if (console.log("[DndLoop] Action:", y), y.type === "WAIT_FOR_INPUT" || y.type === "STOP") {
      await G.updateSessionInDB(), t.current = false;
      return;
    }
    if (y.type === "STATE_CHANGE") {
      if (await G.updateSessionInDB(), a.current) {
        console.log("[DndLoop] \u6E38\u620F\u5DF2\u6682\u505C\uFF08STATE_CHANGE \u540E\uFF09"), t.current = false;
        return;
      }
      setTimeout(() => u(o.id), 0);
      return;
    }
    if (y.type === "LLM_CALL") {
      if (y.callbackPhase) {
        const f = y.callbackPhase;
        x.setCurrentUIState(x.getRunningUIStateForPhase(f));
      }
      await G.updateSessionInDB();
      const v = await n(h, y.messages.map((f) => ({ ...f, id: E() })), y.llmRequestType, void 0, y.dataExtra);
      if (await G.saveNewContextItemsToDB(o.id, g.getHistoryItems()), l(y, v.content, o.id), await G.updateSessionInDB(), a.current) {
        console.log("[DndLoop] \u6E38\u620F\u5DF2\u6682\u505C\uFF08LLM_CALL \u5B8C\u6210\u540E\uFF09"), t.current = false;
        return;
      }
      setTimeout(() => u(o.id), 0);
    }
  }, l = (o, h, x) => {
    const g = G.sessionManager, y = G.contextManager;
    !g || !y || g.handleLLMResponse(o.callbackPhase, h, y);
  }, u = async (o) => {
    const h = G.currentSession;
    if (!h || h.id !== o) return;
    const x = { ...s };
    try {
      t.current = true, await i(h, x);
    } catch (g) {
      console.error("[DndLoop] Critical Error:", g), U.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", { duration: 1 / 0, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => r({ to: "/config/llm" }) } }), t.current = false;
    }
  }, d = b.useCallback(async (o) => {
    if (t.current) return;
    const h = G.currentSession, x = G.contextManager, g = G.sessionManager;
    if (!h || !x || !g) {
      console.warn("[DndLoop] Session or Managers not ready");
      return;
    }
    if (o) {
      if (g.getCurrentPhase() !== "player_action") {
        U.warning("\u5F53\u524D\u5E76\u975E\u8BE5\u89D2\u8272\u7684\u884C\u52A8\u56DE\u5408");
        return;
      }
      const y = h.modeState.currentTurnCharacterId, v = h.modeConfig.playerCharacterSnapshots.find((f) => f.id === y);
      if (!(v == null ? void 0 : v.isHumanControlled)) {
        U.warning("\u5F53\u524D\u89D2\u8272\u7531 AI \u63A7\u5236\uFF0C\u65E0\u6CD5\u624B\u52A8\u8F93\u5165");
        return;
      }
      g.setCurrentUIState(g.getRunningUIStateForPhase("player_action")), x.addHistoryItem({ id: E(), type: "dnd_player_action", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: o, characterId: y, characterName: v.name, isHumanControlled: true } }), await G.saveNewContextItemsToDB(h.id, x.getHistoryItems()), g.incrementTurnCount(y), g.setCurrentUIState(g.getDoneUIStateForPhase("player_action")), g.enterNextState("dm_check_eval"), await G.updateSessionInDB();
    }
    await u(h.id);
  }, [s]), c = b.useCallback(() => {
    a.current = true, console.log("[DndLoop] \u6682\u505C\u8BF7\u6C42\u5DF2\u53D1\u51FA");
  }, []), m = b.useCallback(() => {
    if (!a.current) return;
    a.current = false, console.log("[DndLoop] \u6062\u590D\u6E38\u620F");
    const o = G.currentSession;
    o && !t.current && u(o.id);
  }, [s]);
  return { nextStep: d, isCallingRef: t, isPausedRef: a, pauseGame: c, resumeGame: m };
}
const Fi = P({ \u529B\u91CF: k().describe("\u529B\u91CF\u5C5E\u6027\u503C"), \u654F\u6377: k().describe("\u654F\u6377\u5C5E\u6027\u503C"), \u4F53\u8D28: k().describe("\u4F53\u8D28\u5C5E\u6027\u503C"), \u667A\u529B: k().describe("\u667A\u529B\u5C5E\u6027\u503C"), \u611F\u77E5: k().describe("\u611F\u77E5\u5C5E\u6027\u503C"), \u9B45\u529B: k().describe("\u9B45\u529B\u5C5E\u6027\u503C") }), Oi = P({ intent: p().describe("\u68C0\u5B9A\u610F\u56FE"), type: B(["attribute", "saving", "attack"]).describe("\u68C0\u5B9A\u7C7B\u578B"), attribute: p().describe("\u68C0\u5B9A\u7EF4\u5EA6"), dc: k().describe("\u76EE\u6807\u6570\u503C (DC)"), playerId: p().describe("\u6267\u884C\u68C0\u5B9A\u7684\u89D2\u8272 ID") }), Hi = P({ naturalRoll: k().describe("\u9AB0\u5B50\u539F\u503C"), total: k().describe("\u603B\u503C (\u539F\u503C + \u4FEE\u6B63)"), modifier: k().describe("\u5C5E\u6027\u4FEE\u6B63"), isSuccess: R().describe("\u662F\u5426\u6210\u529F") }), Bi = B(["dm_game_intro", "dm_narrate", "dm_assign_player", "player_action", "dm_check_eval", "dm_check_decision", "fn_roll_check", "dm_tell_result"]), Gi = B(["idle", "dm_game_intro_ready", "dm_game_intro_running", "dm_game_intro_done", "dm_narrate_ready", "dm_narrate_running", "dm_narrate_done", "dm_assign_player_ready", "dm_assign_player_running", "dm_assign_player_done", "player_action_ready", "player_action_running", "player_action_done", "dm_check_eval_ready", "dm_check_eval_running", "dm_check_eval_done", "dm_check_decision_ready", "dm_check_decision_running", "dm_check_decision_done", "fn_roll_check_ready", "fn_roll_check_running", "fn_roll_check_done", "dm_tell_result_ready", "dm_tell_result_running", "dm_tell_result_done"]), Ms = { idle: { label: "\u7A7A\u95F2", placeholder: "\u8BF7\u5148\u70B9\u51FB\u5F00\u59CB\u6216\u7EE7\u7EED...", inputEnabled: false }, dm_game_intro_ready: { label: "DM\u5F00\u573A\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u5F00\u573A\u4ECB\u7ECD...", inputEnabled: false }, dm_game_intro_running: { label: "DM\u5F00\u573A\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u4ECB\u7ECD\u4E16\u754C...", inputEnabled: false }, dm_game_intro_done: { label: "DM\u5F00\u573A\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u5F00\u573A\u4ECB\u7ECD\u5B8C\u6210...", inputEnabled: false }, dm_narrate_ready: { label: "DM\u53D9\u4E8B\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u53D9\u4E8B...", inputEnabled: false }, dm_narrate_running: { label: "DM\u53D9\u4E8B\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u63CF\u5199\u573A\u666F...", inputEnabled: false }, dm_narrate_done: { label: "DM\u53D9\u4E8B\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u53D9\u4E8B\u5B8C\u6210...", inputEnabled: false }, dm_assign_player_ready: { label: "\u6307\u5B9A\u89D2\u8272\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u51B3\u5B9A\u8C01\u884C\u52A8...", inputEnabled: false }, dm_assign_player_running: { label: "\u6307\u5B9A\u89D2\u8272\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u6307\u5B9A\u89D2\u8272...", inputEnabled: false }, dm_assign_player_done: { label: "\u6307\u5B9A\u89D2\u8272\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u5DF2\u88AB\u6307\u5B9A...", inputEnabled: false }, player_action_ready: { label: "\u89D2\u8272\u884C\u52A8\uFF08\u51C6\u5907\uFF09", placeholder: "\u8F6E\u5230\u4F60\u884C\u52A8\u4E86\uFF0C\u63CF\u8FF0\u4F60\u7684\u884C\u52A8...", inputEnabled: true }, player_action_running: { label: "\u89D2\u8272\u884C\u52A8\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u884C\u52A8...", inputEnabled: false }, player_action_done: { label: "\u89D2\u8272\u884C\u52A8\uFF08\u5B8C\u6210\uFF09", placeholder: "\u884C\u52A8\u5B8C\u6210...", inputEnabled: false }, dm_check_eval_ready: { label: "DM\u8BC4\u4EF7\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u8BC4\u4EF7\u884C\u52A8...", inputEnabled: false }, dm_check_eval_running: { label: "DM\u8BC4\u4EF7\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u8BC4\u4EF7\u884C\u52A8...", inputEnabled: false }, dm_check_eval_done: { label: "DM\u8BC4\u4EF7\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u8BC4\u4EF7\u5B8C\u6210...", inputEnabled: false }, dm_check_decision_ready: { label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u5224\u5B9A\u662F\u5426\u9700\u8981\u68C0\u5B9A...", inputEnabled: false }, dm_check_decision_running: { label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u5224\u5B9A...", inputEnabled: false }, dm_check_decision_done: { label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u5B8C\u6210\uFF09", placeholder: "\u68C0\u5B9A\u51B3\u7B56\u5B8C\u6210...", inputEnabled: false }, fn_roll_check_ready: { label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u63B7\u9AB0...", inputEnabled: false }, fn_roll_check_running: { label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u6B63\u5728\u63B7\u9AB0...", inputEnabled: false }, fn_roll_check_done: { label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u5B8C\u6210\uFF09", placeholder: "\u63B7\u9AB0\u5B8C\u6210...", inputEnabled: false }, dm_tell_result_ready: { label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u63CF\u8FF0\u68C0\u5B9A\u7ED3\u679C...", inputEnabled: false }, dm_tell_result_running: { label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u63CF\u8FF0\u7ED3\u679C...", inputEnabled: false }, dm_tell_result_done: { label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u63CF\u8FF0\u5B8C\u6210...", inputEnabled: false } }, zi = B(["standard", "narrative", "hardcore", "solo"]), Ji = P({ id: p().describe("\u89D2\u8272 ID"), name: p().describe("\u89D2\u8272\u540D\u79F0"), description: p().describe("\u89D2\u8272\u63CF\u8FF0"), avatar: p().optional().describe("\u89D2\u8272\u5934\u50CF"), systemPrompt: p().describe("\u89D2\u8272\u626E\u6F14\u6307\u5F15"), attributes: Fi.describe("\u89D2\u8272\u5C5E\u6027"), race: p().optional().describe("\u79CD\u65CF"), class: p().optional().describe("\u804C\u4E1A"), currentHP: k().describe("\u5F53\u524D\u751F\u547D\u503C"), maxHP: k().describe("\u6700\u5927\u751F\u547D\u503C"), isHumanControlled: R().describe("\u662F\u5426\u7531\u4EBA\u7C7B\u63A7\u5236") }), Vi = P({ name: p().describe("\u4E16\u754C\u540D\u79F0"), description: p().describe("\u4E16\u754C\u63CF\u8FF0"), systemPrompt: p().describe("\u6838\u5FC3\u7CFB\u7EDF\u63D0\u793A\u8BCD"), globalKnowledge: p().optional().describe("\u4E16\u754C\u89C2\u8865\u5145") }), qi = P({ worldSnapshot: Vi.describe("\u4E16\u754C\u8BBE\u5B9A\u5FEB\u7167"), gameMode: zi.describe("\u73A9\u6CD5\u6A21\u5F0F"), playerCharacterSnapshots: Y(Ji).describe("\u53C2\u4E0E\u89D2\u8272\u5FEB\u7167\u5217\u8868"), dmName: p().optional().describe("DM \u663E\u793A\u540D\u79F0") }), Ki = P({ currentPhase: Bi.describe("\u5F53\u524D\u9636\u6BB5\u540D\u79F0"), currentUIState: Gi.describe("\u5F53\u524D UI \u72B6\u6001\u540D\u79F0"), currentTurnCharacterId: p().describe("\u5F53\u524D\u884C\u52A8\u89D2\u8272 ID ('dm' \u6216\u89D2\u8272ID)"), currentRound: k().describe("\u5F53\u524D\u56DE\u5408\u6570"), turnCounts: ie(p(), k()).describe("\u6BCF\u4E2A\u89D2\u8272\u7684\u884C\u52A8\u6B21\u6570\u7EDF\u8BA1"), lastCheckSpec: Oi.optional().describe("\u6700\u8FD1\u4E00\u6B21\u68C0\u5B9A\u89C4\u8303"), lastCheckResult: Hi.optional().describe("\u6700\u8FD1\u4E00\u6B21\u68C0\u5B9A\u7ED3\u679C"), historySummary: p().describe("\u5386\u53F2\u6458\u8981") });
Ft.extend({ mode: z("dnd").describe("\u6A21\u5F0F"), modeConfig: qi.describe("DnD \u6A21\u5F0F\u914D\u7F6E"), modeState: Ki.describe("DnD \u6A21\u5F0F\u72B6\u6001") });
const Xi = (s) => {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o, _p, _q;
  const t = te(), [a, r] = b.useState(""), n = b.useRef(null), [i, l] = b.useState(false), [u, d] = b.useState(false), c = ke(G), { data: m = [] } = Pe((M) => M.from({ s: Le })), o = m.find((M) => M.id === s.sessionId);
  b.useEffect(() => {
    var _a3;
    let M = false;
    if (!o) return;
    if (((_a3 = G.currentSession) == null ? void 0 : _a3.id) === o.id && G.contextManager) {
      d(true);
      return;
    }
    return (async () => {
      try {
        const re = await Bt.createSessionDB(o.id).getContextItems();
        if (M) return;
        G.loadSession(o, { historyItems: re, processingItem: void 0 }), d(true);
      } catch (ue) {
        console.error("[DnD] Load session error", ue);
      }
    })(), () => {
      M = true;
    };
  }, [o == null ? void 0 : o.id, o]);
  const { nextStep: h, isPausedRef: x, pauseGame: g, resumeGame: y } = Ri(), [v, f] = b.useState(false);
  b.useEffect(() => {
    n.current && (n.current.scrollTop = n.current.scrollHeight);
  });
  const S = async () => {
    if (i) return;
    const M = G.sessionManager, ae = G.contextManager;
    if (!(!M || !ae)) {
      x.current = false, f(false), l(true);
      try {
        const ue = M.getActualCurrentPhase(ae);
        M.enterNextState(ue), M.setCurrentUIState(M.getReadyUIStateForPhase(ue)), await G.updateSessionInDB(), await h();
      } finally {
        l(false);
      }
    }
  };
  if (!o || !u) return e.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4", children: [e.jsx("div", { className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center", children: e.jsx(je, { className: "w-6 h-6 opacity-20" }) }), e.jsx("p", { className: "text-xs font-medium tracking-widest uppercase opacity-50", children: "\u6B63\u5728\u6784\u5EFA\u5192\u9669\u4E16\u754C..." })] });
  const w = async () => {
    if (!(!a.trim() || i)) {
      x.current = false, f(false), l(true);
      try {
        await h(a);
      } finally {
        l(false), r("");
      }
    }
  }, N = G.sessionManager && G.contextManager ? G.sessionManager.getActualCurrentUIState(G.contextManager) : ((_b = (_a2 = c.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b.currentUIState) || "idle", j = Ms[N] || Ms.idle, C = (_e2 = (_d = (_c = c.currentSession) == null ? void 0 : _c.modeConfig) == null ? void 0 : _d.playerCharacterSnapshots) == null ? void 0 : _e2.find((M) => {
    var _a3, _b2;
    return M.id === ((_b2 = (_a3 = c.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentTurnCharacterId);
  }), J = !!(C == null ? void 0 : C.isHumanControlled), Q = i || !j.inputEnabled || j.inputEnabled && !J, I = () => {
    g(), f(true);
  }, $ = () => {
    y(), f(false);
  }, me = async (M) => {
    var _a3, _b2, _c2;
    const ae = (_a3 = G.currentSession) == null ? void 0 : _a3.modeConfig.playerCharacterSnapshots.find((La) => La.id === M);
    if (!ae) return;
    const ue = ae.isHumanControlled;
    G.toggleCharacterControl(M), await G.updateSessionInDB();
    const re = M === ((_b2 = G.currentSession) == null ? void 0 : _b2.modeState.currentTurnCharacterId), Xe = (_c2 = G.sessionManager) == null ? void 0 : _c2.getCurrentPhase();
    ue && re && Xe === "player_action" && !i && await h();
  }, se = () => {
    t({ to: "/plaza" });
  }, Ke = () => {
    console.log("[DnD][Memory Session]", G.currentSession);
  }, Ea = async () => {
    if (!(o == null ? void 0 : o.id)) return;
    const M = await ee.sessions.getTable().get(o.id);
    console.log("[DnD][DB Session]", M);
  };
  return e.jsxs("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: [e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-sm", children: e.jsx(nt, { className: "w-5 h-5 text-amber-600" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm tracking-tight", children: ((_h = (_g = (_f = c.currentSession) == null ? void 0 : _f.modeConfig) == null ? void 0 : _g.worldSnapshot) == null ? void 0 : _h.name) || "DnD \u5192\u9669" }), e.jsxs(H, { variant: "outline", className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-amber-500/5 text-amber-600 border-amber-500/10", children: ["R", ((_j = (_i2 = c.currentSession) == null ? void 0 : _i2.modeState) == null ? void 0 : _j.currentRound) || 1] })] }), e.jsx("span", { className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide", children: C ? `\u5F53\u524D\u884C\u52A8: ${C.name} (${C.isHumanControlled ? "\u73A9\u5BB6" : "AI"})` : "\u7B49\u5F85\u5F00\u59CB..." })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [N !== "idle" && (v ? e.jsxs(_, { type: "button", variant: "outline", size: "sm", className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-green-500/30 text-green-600 hover:bg-green-500/10", onClick: $, children: [e.jsx(ea, { className: "w-3 h-3" }), "\u7EE7\u7EED"] }) : e.jsxs(_, { type: "button", variant: "outline", size: "sm", className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-amber-500/30 text-amber-600 hover:bg-amber-500/10", onClick: I, disabled: !i, children: [e.jsx(jr, { className: "w-3 h-3" }), "\u6682\u505C"] })), e.jsxs(H, { variant: "secondary", className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50", children: [e.jsx("span", { className: L("w-1.5 h-1.5 rounded-full", v ? "bg-amber-400" : "bg-amber-500 animate-pulse") }), v ? "\u5DF2\u6682\u505C" : "DND"] }), e.jsx(_, { type: "button", variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: Ke, children: "LOG MEM" }), e.jsx(_, { type: "button", variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: Ea, children: "LOG DB" })] })] }), e.jsx("div", { className: "flex grow overflow-y-auto", ref: n, children: e.jsx("div", { className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-8", children: (() => {
    var _a3, _b2, _c2, _d2, _e3, _f2, _g2, _h2;
    const M = (((_a3 = c.contextManager) == null ? void 0 : _a3.state.historyItems) || []).filter((re) => !re.hidden), ae = (_b2 = c.contextManager) == null ? void 0 : _b2.state.processingItem;
    if (N === "idle") {
      const re = M.length === 0 ? "\u5F00\u59CB\u5192\u9669" : "\u7EE7\u7EED\u5192\u9669";
      return e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500", children: [e.jsx("div", { className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500", children: e.jsx(nt, { className: "w-10 h-10 text-amber-500 drop-shadow-sm" }) }), e.jsx("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center", children: ((_e3 = (_d2 = (_c2 = c.currentSession) == null ? void 0 : _c2.modeConfig) == null ? void 0 : _d2.worldSnapshot) == null ? void 0 : _e3.name) || "DnD \u5192\u9669" }), e.jsx("p", { className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm", children: ((_h2 = (_g2 = (_f2 = c.currentSession) == null ? void 0 : _f2.modeConfig) == null ? void 0 : _g2.worldSnapshot) == null ? void 0 : _h2.description) || "\u4E00\u6BB5\u5168\u65B0\u7684\u5192\u9669\u65C5\u7A0B\u5373\u5C06\u5C55\u5F00\uFF0C\u51C6\u5907\u597D\u63B7\u51FA\u547D\u8FD0\u7684\u9AB0\u5B50\u4E86\u5417\uFF1F" }), e.jsxs(_, { type: "button", size: "lg", className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-amber-500/25 shadow-amber-500/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90", onClick: S, disabled: i, children: [i ? e.jsx(je, { className: "w-5 h-5 animate-spin mr-3" }) : e.jsx(ve, { className: "w-5 h-5 mr-3" }), re] }), e.jsxs("div", { className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest", children: [e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(We, { className: "w-3 h-3" }), " D20 \u68C0\u5B9A"] }), e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(vr, { className: "w-3 h-3" }), " \u591A\u4EBA\u5192\u9669"] })] })] });
    }
    const ue = [...M];
    return ae && !ae.hidden && !M.some((re) => re.id === ae.id) && ue.push(ae), ue.map((re, Xe) => e.jsx(Wi, { item: re }, `[${Xe}]${re.id}`));
  })() }) }), e.jsxs("div", { className: "p-4 md:p-6 shrink-0 bg-background", children: [e.jsxs("div", { className: "max-w-3xl mx-auto relative group", children: [e.jsx(K, { value: a, onChange: (M) => r(M.target.value), placeholder: Q ? j.inputEnabled && !J ? `${(C == null ? void 0 : C.name) || "\u89D2\u8272"} \u7531 AI \u63A7\u5236\uFF0C\u7B49\u5F85\u81EA\u52A8\u884C\u52A8...` : j.placeholder : `\u4F5C\u4E3A ${(C == null ? void 0 : C.name) || "\u89D2\u8272"}\uFF0C\u63CF\u8FF0\u4F60\u7684\u884C\u52A8...`, disabled: Q, className: L("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-amber-500/20 focus-visible:bg-background transition-all", Q && "opacity-50 cursor-not-allowed"), onKeyDown: (M) => {
    M.key === "Enter" && !M.shiftKey && (M.preventDefault(), w());
  } }), e.jsx(_, { type: "button", size: "icon", className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all", disabled: !a.trim() || Q, onClick: w, children: i ? e.jsx(je, { className: "w-4 h-4 animate-spin" }) : e.jsx(ze, { className: "w-4 h-4" }) })] }), e.jsxs("div", { className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40", children: [e.jsx("div", { className: "text-[9px] font-bold tracking-widest uppercase", children: C ? `${C.name} \u7684\u56DE\u5408 (${C.isHumanControlled ? "\u73A9\u5BB6\u64CD\u4F5C" : "AI \u81EA\u52A8"})` : "ADVENTURE LOG" }), e.jsx("div", { className: "text-[9px] font-medium", children: Q ? "\u7B49\u5F85\u4E2D..." : "Shift + Enter \u6362\u884C" })] })] })] }), e.jsxs("div", { className: "w-[320px] h-full overflow-y-auto bg-muted/10 border-l p-6 space-y-8 shrink-0 hidden lg:block scrollbar-none", children: [e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(_r, { className: "w-3.5 h-3.5 text-amber-500" }), "\u5192\u9669\u72B6\u6001"] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { className: "bg-background/40 p-3 rounded-xl border border-muted/30", children: [e.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1", children: "\u56DE\u5408" }), e.jsx("div", { className: "text-xl font-mono font-bold tracking-tight text-foreground/90", children: ((_l = (_k = c.currentSession) == null ? void 0 : _k.modeState) == null ? void 0 : _l.currentRound) || 1 })] }), e.jsxs("div", { className: "bg-background/40 p-3 rounded-xl border border-muted/30", children: [e.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1", children: "\u6A21\u5F0F" }), e.jsx("div", { className: "text-sm font-bold tracking-tight text-foreground/90 capitalize", children: ((_n2 = (_m = c.currentSession) == null ? void 0 : _m.modeConfig) == null ? void 0 : _n2.gameMode) || "standard" })] })] })] }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(Ae, { className: "w-3.5 h-3.5 text-amber-500" }), "\u5192\u9669\u8005"] }), e.jsx("div", { className: "space-y-3", children: (_q = (_p = (_o = c.currentSession) == null ? void 0 : _o.modeConfig) == null ? void 0 : _p.playerCharacterSnapshots) == null ? void 0 : _q.map((M) => {
    var _a3, _b2, _c2, _d2, _e3;
    const ae = M.id === ((_b2 = (_a3 = c.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentTurnCharacterId), ue = ((_e3 = (_d2 = (_c2 = c.currentSession) == null ? void 0 : _c2.modeState) == null ? void 0 : _d2.turnCounts) == null ? void 0 : _e3[M.id]) || 0;
    return e.jsxs("div", { className: L("p-4 rounded-xl border transition-all duration-300", ae ? "bg-amber-500/5 border-amber-500/30 shadow-sm shadow-amber-500/10" : "bg-background/40 border-muted/30"), children: [e.jsxs("div", { className: "flex items-start gap-3", children: [e.jsx("div", { className: L("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold", ae ? "bg-amber-500/20 text-amber-600" : M.isHumanControlled ? "bg-blue-500/10 text-blue-600" : "bg-muted text-muted-foreground"), children: M.isHumanControlled ? e.jsx(Nt, { className: "w-4 h-4" }) : e.jsx(de, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "text-sm font-bold tracking-tight truncate", children: M.name }), e.jsx(H, { variant: "outline", className: L("text-[8px] px-1 h-3.5", M.isHumanControlled ? "bg-blue-500/10 text-blue-600 border-blue-500/20" : "bg-muted/50 text-muted-foreground border-muted/30"), children: M.isHumanControlled ? "\u73A9\u5BB6" : "AI" }), ae && e.jsx(H, { variant: "outline", className: "text-[8px] px-1 h-3.5 bg-amber-500/10 text-amber-600 border-amber-500/20", children: "\u884C\u52A8\u4E2D" })] }), e.jsxs("div", { className: "text-[10px] text-muted-foreground/60 font-medium", children: [M.race, " \xB7 ", M.class, " \xB7 \u884C\u52A8 \xD7", ue] })] })] }), e.jsxs("div", { className: "mt-3 flex items-center justify-between px-1", children: [e.jsxs("div", { className: "flex items-center gap-1.5", children: [e.jsx(de, { className: L("w-3 h-3 transition-colors", M.isHumanControlled ? "text-muted-foreground/30" : "text-foreground/70") }), e.jsx("span", { className: L("text-[9px] font-bold uppercase tracking-wider transition-colors", M.isHumanControlled ? "text-muted-foreground/20" : "text-foreground/50"), children: "AI" })] }), e.jsx(_t, { checked: M.isHumanControlled, onCheckedChange: () => me(M.id), className: "data-[state=checked]:bg-blue-500 h-4 w-7 [&>span]:h-3 [&>span]:w-3" }), e.jsxs("div", { className: "flex items-center gap-1.5", children: [e.jsx("span", { className: L("text-[9px] font-bold uppercase tracking-wider transition-colors", M.isHumanControlled ? "text-foreground/50" : "text-muted-foreground/20"), children: "\u73A9\u5BB6" }), e.jsx(Nt, { className: L("w-3 h-3 transition-colors", M.isHumanControlled ? "text-blue-500" : "text-muted-foreground/30") })] })] }), e.jsxs("div", { className: "mt-3 space-y-1", children: [e.jsxs("div", { className: "flex justify-between text-[9px] font-bold text-muted-foreground/60", children: [e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(Nr, { className: "w-2.5 h-2.5 text-red-400" }), "HP"] }), e.jsxs("span", { children: [M.currentHP, "/", M.maxHP] })] }), e.jsx("div", { className: "h-1.5 bg-muted/50 rounded-full overflow-hidden", children: e.jsx("div", { className: L("h-full rounded-full transition-all duration-500", M.currentHP / M.maxHP > 0.5 ? "bg-green-500" : M.currentHP / M.maxHP > 0.25 ? "bg-amber-500" : "bg-red-500"), style: { width: `${Math.max(0, M.currentHP / M.maxHP * 100)}%` } }) })] }), e.jsx("div", { className: "mt-3 grid grid-cols-3 gap-1.5", children: Object.entries(M.attributes || {}).map(([re, Xe]) => e.jsxs("div", { className: "text-center py-1 px-1 rounded bg-muted/30 border border-muted/20", children: [e.jsx("div", { className: "text-[8px] font-bold uppercase text-muted-foreground/50", children: re.slice(0, 3) }), e.jsx("div", { className: "text-xs font-mono font-bold", children: Xe })] }, re)) })] }, M.id);
  }) })] }), e.jsx("div", { className: "space-y-3", children: e.jsxs(_, { type: "button", variant: "outline", className: "w-full h-10 rounded-xl border-dashed border-2 hover:border-amber-500/50 hover:bg-amber-500/5 gap-2", onClick: se, children: [e.jsx(is, { className: "w-4 h-4" }), e.jsx("span", { className: "font-bold tracking-wider text-sm", children: "\u9000\u51FA\u5192\u9669" })] }) }), e.jsxs("div", { className: "pt-6 opacity-30", children: [e.jsx("div", { className: "h-px bg-linear-to-r from-transparent via-muted-foreground/50 to-transparent" }), e.jsx("p", { className: "text-[9px] text-center mt-4 font-bold tracking-[0.3em] uppercase", children: "DnD Engine v1.0.0" })] })] })] });
}, Wi = ({ item: s }) => {
  var _a2, _b;
  switch (s.type) {
    case "dnd_dm_intro":
      return e.jsx(vt, { content: s.data.content, title: "\u5F00\u573A\u53D9\u4E8B" });
    case "dnd_dm_narrate":
      return e.jsx(vt, { content: s.data.content });
    case "dnd_player_action":
      return e.jsx(Ps, { item: s });
    case "dnd_roll_result":
      return e.jsx(Yi, { item: s });
    case "dnd_system_notice":
      return e.jsx(As, { item: s });
    case "dnd_assign_player":
      return null;
    case "dnd_check_decision":
      return null;
    case "participant_message":
      return ((_a2 = s.data) == null ? void 0 : _a2.isDM) ? e.jsx(vt, { content: s.data.content }) : e.jsx(Ps, { item: s });
    case "system_notification":
      return e.jsx(As, { item: s });
    default:
      return ((_b = s.data) == null ? void 0 : _b.content) ? e.jsx(vt, { content: s.data.content, title: "\u6D88\u606F" }) : null;
  }
}, vt = ({ content: s, title: t = "Dungeon Master" }) => {
  const a = Ma(s);
  return e.jsxs("div", { className: "flex gap-5 group animate-in fade-in slide-in-from-left-2 duration-500", children: [e.jsxs("div", { className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden", children: [e.jsx("div", { className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" }), e.jsx(de, { className: "w-5 h-5 text-amber-600 relative z-10" })] }), e.jsxs("div", { className: "space-y-2 grow pt-1 min-w-0", children: [e.jsxs("div", { className: "text-[10px] font-black tracking-[0.2em] text-amber-600/60 flex items-center gap-2 uppercase", children: [e.jsx(ve, { className: "w-3 h-3" }), t] }), e.jsxs("div", { className: "text-[15px] leading-relaxed text-foreground/80 whitespace-pre-wrap font-serif", children: [a.think && e.jsxs("div", { className: "text-xs italic text-muted-foreground/50 mb-3 pl-3 border-l-2 border-muted/30", children: [e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1", children: "DM \u601D\u8003" }), a.think] }), a.speak && e.jsxs("div", { className: "mb-2", children: [e.jsx("span", { className: "text-amber-600/80 font-bold", children: "\u201C" }), e.jsx("span", { className: "italic", children: a.speak }), e.jsx("span", { className: "text-amber-600/80 font-bold", children: "\u201D" })] }), a.action && e.jsx("div", { className: "text-foreground/70", children: a.action }), !a.think && !a.speak && !a.action && a.rawText] })] })] });
}, Ps = ({ item: s }) => {
  const t = s.data, a = Ma(t.content || ""), r = t.characterName || t.name || "\u5192\u9669\u8005", n = t.isHumanControlled || t.isUser;
  return e.jsxs("div", { className: "flex gap-5 group animate-in fade-in slide-in-from-right-2 duration-500", children: [e.jsx("div", { className: L("w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border shadow-sm", n ? "bg-blue-500/5 border-blue-500/10" : "bg-violet-500/5 border-violet-500/10"), children: n ? e.jsx(Nt, { className: "w-5 h-5 text-blue-500" }) : e.jsx(Ae, { className: "w-5 h-5 text-violet-500" }) }), e.jsxs("div", { className: "space-y-2 grow pt-1 min-w-0", children: [e.jsxs("div", { className: L("text-[10px] font-black tracking-[0.2em] flex items-center gap-2 uppercase", n ? "text-blue-500/60" : "text-violet-500/60"), children: [e.jsx(nt, { className: "w-3 h-3" }), r, n && e.jsx(H, { variant: "outline", className: "text-[8px] px-1 h-3 bg-blue-500/5 text-blue-500 border-blue-500/10", children: "\u73A9\u5BB6" })] }), e.jsxs("div", { className: "text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap", children: [a.think && e.jsxs("div", { className: "text-xs italic text-muted-foreground/50 mb-3 pl-3 border-l-2 border-muted/30", children: [e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1", children: "\u5185\u5FC3\u60F3\u6CD5" }), a.think] }), a.speak && e.jsxs("div", { className: "mb-2 font-medium", children: ["\u201C", a.speak, "\u201D"] }), a.action && e.jsx("div", { className: "text-foreground/70", children: a.action }), !a.think && !a.speak && !a.action && a.rawText] })] })] });
}, Yi = ({ item: s }) => {
  var _a2;
  const t = s.data, a = t.checkResult, r = t.characterName || "\u89D2\u8272", n = t.attributeName || "\u5C5E\u6027";
  if (!a) return null;
  const i = a.isSuccess, l = a.naturalRoll === 20, u = a.naturalRoll === 1;
  return e.jsx("div", { className: "flex justify-center my-6 animate-in fade-in zoom-in duration-500", children: e.jsxs("div", { className: L("inline-flex items-center gap-4 px-6 py-4 rounded-2xl border-2 shadow-lg", i ? "bg-green-500/5 border-green-500/30 shadow-green-500/10" : "bg-red-500/5 border-red-500/30 shadow-red-500/10"), children: [e.jsxs("div", { className: L("w-14 h-14 rounded-xl flex items-center justify-center font-mono font-black text-2xl relative", l ? "bg-amber-500/20 text-amber-500 ring-2 ring-amber-500/30" : u ? "bg-red-500/20 text-red-500 ring-2 ring-red-500/30" : i ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"), children: [a.naturalRoll, l && e.jsx(ve, { className: "w-3 h-3 text-amber-500 absolute -top-1 -right-1 animate-pulse" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "text-[10px] font-black uppercase tracking-widest text-muted-foreground/60", children: [r, " \xB7 ", n, " \u68C0\u5B9A"] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs("span", { className: "text-lg font-mono font-bold", children: [a.naturalRoll, a.modifier >= 0 ? "+" : "", a.modifier, " = ", a.total] }), e.jsxs("span", { className: "text-xs text-muted-foreground", children: ["vs DC ", ((_a2 = t.checkSpec) == null ? void 0 : _a2.dc) || "?"] })] }), e.jsx("div", { className: L("text-xs font-black uppercase tracking-wider", l ? "text-amber-500" : u ? "text-red-500" : i ? "text-green-600" : "text-red-600"), children: l ? "\u5927\u6210\u529F\uFF01" : u ? "\u5927\u5931\u8D25\uFF01" : i ? "\u68C0\u5B9A\u6210\u529F" : "\u68C0\u5B9A\u5931\u8D25" })] })] }) });
}, As = ({ item: s }) => {
  const t = s.data, a = t.noticeType;
  return e.jsx("div", { className: "flex justify-center my-4", children: e.jsxs("div", { className: "flex items-center gap-3 px-4 py-1.5 rounded-full bg-muted/30 border border-muted/50 text-muted-foreground shadow-sm", children: [e.jsx("span", { className: "w-1 h-1 rounded-full bg-amber-500/40" }), e.jsx("span", { className: "text-[10px] font-bold tracking-widest uppercase", children: a === "turn_start" && t.characterName ? `\u2694 ${t.characterName} \u7684\u56DE\u5408` : t.content || "\u7CFB\u7EDF\u901A\u77E5" }), e.jsx("span", { className: "w-1 h-1 rounded-full bg-amber-500/40" })] }) });
}, Wo = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForDnd: Xi }, Symbol.toStringTag, { value: "Module" }));
class Qi extends hs {
  constructor(t) {
    super(t), this.session = t;
  }
  getCurrentPhase() {
    return this.session.modeState.currentPhase;
  }
  getCurrentUIState() {
    return this.session.modeState.currentUIState;
  }
  getMaxAIAutoSpeakCount() {
    return this.session.modeConfig.maxAIAutoSpeakCount ?? 5;
  }
  getAIAutoSpeakCounter() {
    return this.session.modeState.aiAutoSpeakCounter;
  }
  isAICounterAtMax() {
    return this.getAIAutoSpeakCounter() >= this.getMaxAIAutoSpeakCount();
  }
  setCurrentPhase(t) {
    console.log(`[GroupChat] Phase: ${this.session.modeState.currentPhase} \u2192 ${t}`), this.session.modeState.currentPhase = t, this.session.updatedAt = Date.now();
  }
  setCurrentUIState(t) {
    this.session.modeState.currentUIState = t, this.session.updatedAt = Date.now();
  }
  setCurrentSpeaker(t) {
    this.session.modeState.currentSpeakerId = t, this.session.updatedAt = Date.now();
  }
  incrementAfterAISpeaks(t) {
    this.session.modeState.aiAutoSpeakCounter++, this.session.modeState.speakCounts[t] || (this.session.modeState.speakCounts[t] = 0), this.session.modeState.speakCounts[t]++, this.session.modeState.messageCount++, this.session.updatedAt = Date.now();
  }
  resetCounterAfterPlayerSpeaks() {
    this.session.modeState.aiAutoSpeakCounter = 0, this.session.modeState.messageCount++, this.session.updatedAt = Date.now();
  }
  resetAIAutoSpeakCounter() {
    this.session.modeState.aiAutoSpeakCounter = 0, this.session.updatedAt = Date.now();
  }
  findParticipantName(t) {
    var _a2;
    return ((_a2 = this.session.modeConfig.participantSnapshots.find((a) => a.id === t)) == null ? void 0 : _a2.name) || "\u89D2\u8272";
  }
}
const ye = le({ currentSession: null, contextManager: null, sessionManager: null, loadSession(s, t) {
  this.currentSession = s;
  const a = this.currentSession;
  a.modeState.currentUIState = "idle", a.modeState.aiAutoSpeakCounter === void 0 && (a.modeState.aiAutoSpeakCounter = 0), this.sessionManager = $s(new Qi(a));
  const r = le(t || { historyItems: [], processingItem: void 0 });
  this.contextManager = new Ne(r);
}, async saveNewContextItemsToDB(s, t) {
  const { SessionDB: a } = await we(async () => {
    const { SessionDB: i } = await Promise.resolve().then(() => Ht);
    return { SessionDB: i };
  }, void 0), r = new a(s);
  let n;
  try {
    n = xe(t);
  } catch {
    n = JSON.parse(JSON.stringify(t));
  }
  await r.addContextItems(n);
}, async updateSessionInDB() {
  if (!this.currentSession) return;
  const { masterDb: s } = await we(async () => {
    const { masterDb: r } = await Promise.resolve().then(() => ms);
    return { masterDb: r };
  }, void 0), t = xe(this.currentSession.modeState), a = xe(this.currentSession.modeConfig);
  await s.sessions.update(this.currentSession.id, { modeState: t, modeConfig: a, updatedAt: Date.now() });
} });
function ps(s) {
  return s.modeConfig.participantSnapshots;
}
function Zi(s, t) {
  return s.modeConfig.participantSnapshots.find((a) => a.id === t);
}
function Pa(s) {
  return s.map((t) => `- ${t.name} (ID: ${t.id}): ${t.personality || t.description}`).join(`
`);
}
function eo(s) {
  if (!s) return "";
  const t = new Date(s), a = /* @__PURE__ */ new Date(), r = t.getHours().toString().padStart(2, "0"), n = t.getMinutes().toString().padStart(2, "0");
  return t.toDateString() === a.toDateString() ? `${r}:${n}` : `${t.getMonth() + 1}/${t.getDate()} ${r}:${n}`;
}
function Aa(s, t, a = 30) {
  const r = ps(t), n = t.modeConfig.userName || "\u6211";
  return s.getFlatHistoryItems(a).filter((i) => !i.hidden && !i.deleted).map((i) => {
    var _a2;
    const { type: l, data: u } = i, d = eo(i.timestamp), c = d ? `[${d}] ` : "";
    if (l === "gc_user_message") return `${c}[${u.userName || n}]: ${u.content}`;
    if (l === "gc_character_message") {
      const m = u.characterName || ((_a2 = r.find((o) => o.id === u.characterId)) == null ? void 0 : _a2.name) || "\u89D2\u8272";
      return `${c}[${m}]: ${u.content}`;
    }
    return null;
  }).filter(Boolean).join(`
`);
}
function to(s, t) {
  const a = ps(s), r = s.modeState.speakCounts, n = s.modeConfig.topic, i = s.modeConfig.userName || "\u6211", u = `${s.modeConfig.dmSystemPrompt || "\u4F60\u662F\u4E00\u4E2A\u9690\u5F62\u7684\u7FA4\u804A\u8C03\u5EA6\u5458\u3002"}
\u4F60\u7684\u552F\u4E00\u4EFB\u52A1\u662F\u6839\u636E\u5F53\u524D\u5BF9\u8BDD\u4E0A\u4E0B\u6587\u9009\u62E9\u4E0B\u4E00\u4E2A\u6700\u9002\u5408\u53D1\u8A00\u7684 AI \u89D2\u8272\u3002
\u9009\u62E9\u65F6\u8981\u8003\u8651\uFF1A\u5BF9\u8BDD\u7684\u81EA\u7136\u6D41\u5411\u3001\u8BDD\u9898\u76F8\u5173\u6027\u3001\u89D2\u8272\u7684\u6027\u683C\u7279\u70B9\u3002
\u5141\u8BB8\u540C\u4E00\u89D2\u8272\u8FDE\u7EED\u53D1\u8A00\uFF08\u5982\u679C\u5BF9\u8BDD\u60C5\u5883\u81EA\u7136\u9700\u8981\uFF09\uFF0C\u4F46\u4E5F\u8981\u6CE8\u610F\u8BA9\u6240\u6709\u89D2\u8272\u90FD\u6709\u53C2\u4E0E\u611F\u3002
\u6CE8\u610F\u89C2\u5BDF\u5BF9\u8BDD\u5386\u53F2\u4E2D\u7684\u65F6\u95F4\u6233\uFF0C\u4E86\u89E3\u5BF9\u8BDD\u8282\u594F\u3002
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u8F93\u51FA\u4E00\u4E2A JSON \u5757\uFF0C\u4E0D\u8981\u5305\u542B\u4EFB\u4F55\u5176\u4ED6\u6587\u5B57\u3002
\`\`\`json
{ "nextSpeakerId": "\u89D2\u8272ID", "reason": "\u9009\u62E9\u539F\u56E0" }
\`\`\`
\u53EF\u9009\u89D2\u8272\uFF1A
${a.map((m) => `- ${m.name} (ID: ${m.id}, \u5DF2\u53D1\u8A00: ${r[m.id] || 0}\u6B21)`).join(`
`)}`, d = Aa(t, s, 20), c = [n ? `\u3010\u7FA4\u804A\u8BDD\u9898\u3011
${n}` : "", `\u3010\u7FA4\u804A\u6210\u5458\u3011
- ${i} (\u73A9\u5BB6)
${Pa(a)}`, d ? `\u3010\u6700\u8FD1\u5BF9\u8BDD\u3011
${d}` : "\u3010\u5BF9\u8BDD\u521A\u5F00\u59CB\uFF0C\u8BF7\u9009\u4E00\u4E2A\u9002\u5408\u6253\u5F00\u8BDD\u9898\u7684\u89D2\u8272\u3011", `\u3010\u6240\u6709\u89D2\u8272\u53D1\u8A00\u7EDF\u8BA1\u3011
${a.map((m) => `${m.name}: ${r[m.id] || 0} \u6B21`).join(`
`)}`].filter(Boolean).join(`

`);
  return [{ role: "system", content: u }, { role: "user", content: c }];
}
function so(s, t) {
  const a = s.modeState.currentSpeakerId, r = Zi(s, a), n = ps(s), i = s.modeConfig.userName || "\u6211", l = s.modeConfig.topic;
  if (!r) return [];
  const u = `\u4F60\u662F ${r.name}\u3002${r.systemPrompt}
${r.personality ? `\u4F60\u7684\u6027\u683C\uFF1A${r.personality}` : ""}
\u4F60\u73B0\u5728\u6B63\u5728\u4E00\u4E2A\u7FA4\u804A\u4E2D\u548C\u5176\u4ED6\u89D2\u8272\u4EE5\u53CA\u4E00\u4E2A\u540D\u4E3A"${i}"\u7684\u73A9\u5BB6\u804A\u5929\u3002
\u8BF7\u4EE5 ${r.name} \u7684\u8EAB\u4EFD\u81EA\u7136\u53D1\u8A00\uFF0C\u4E0D\u8981\u4F7F\u7528\u4EFB\u4F55 XML \u6807\u7B7E\uFF0C\u76F4\u63A5\u8F93\u51FA\u5BF9\u8BDD\u5185\u5BB9\u5373\u53EF\u3002
\u53D1\u8A00\u8981\u7B80\u6D01\u81EA\u7136\uFF0C\u50CF\u771F\u5B9E\u7684\u7FA4\u804A\u4E00\u6837\uFF0C\u901A\u5E38 1-3 \u53E5\u8BDD\u3002
\u6CE8\u610F\u6839\u636E\u5BF9\u8BDD\u5386\u53F2\u4E2D\u7684\u65F6\u95F4\u6233\u611F\u77E5\u65F6\u95F4\u6D41\u901D\uFF0C\u505A\u51FA\u81EA\u7136\u7684\u53CD\u5E94\u3002`, d = Aa(t, s, 20), c = n.filter((o) => o.id !== a), m = [l ? `\u3010\u7FA4\u804A\u8BDD\u9898\u3011
${l}` : "", c.length > 0 ? `\u3010\u5176\u4ED6\u7FA4\u804A\u6210\u5458\u3011
- ${i} (\u73A9\u5BB6)
${Pa(c)}` : `\u3010\u7FA4\u804A\u6210\u5458\u3011
- ${i} (\u73A9\u5BB6)`, d ? `\u3010\u5BF9\u8BDD\u5386\u53F2\u3011
${d}` : "\u3010\u5BF9\u8BDD\u521A\u5F00\u59CB\uFF0C\u8BF7\u4E3B\u52A8\u5F00\u542F\u804A\u5929\u3011"].filter(Boolean).join(`

`);
  return [{ role: "system", content: u }, { role: "user", content: m }];
}
function ao(s) {
  try {
    const t = s.indexOf("{"), a = s.lastIndexOf("}") + 1;
    if (t < 0 || a <= t) return null;
    const r = JSON.parse(s.slice(t, a)), n = r.nextSpeakerId || r.speakerId;
    return n ? { nextSpeakerId: n, reason: r.reason || "" } : null;
  } catch {
    return null;
  }
}
const Ts = 3;
function ro() {
  const s = ts((d) => d.config), t = b.useRef(false), a = te(), r = b.useCallback(async (d, c, m, o = {}) => {
    const h = ye.contextManager;
    if (!h) return "";
    const x = { id: E(), type: m, orderRef: 0, timestamp: Date.now(), data: { content: "", ...o } };
    h.setProcessingItem(x);
    try {
      let g = "";
      if (await cs(d, c.map((y) => ({ ...y, id: E() })), [], (y, v) => {
        g = v;
        const f = h.getProcessingItem();
        f && (f.data.content = v);
      }), !g.trim()) throw h.setProcessingItem(void 0), new Error("LLM \u8BF7\u6C42\u5931\u8D25\uFF1A\u672A\u6536\u5230\u6709\u6548\u54CD\u5E94\uFF08\u53EF\u80FD\u662F API \u5BC6\u94A5\u65E0\u6548\u3001\u6A21\u578B\u4E0D\u53EF\u7528\u6216\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF\uFF09");
      return h.completeProcessingItem(), g;
    } catch (g) {
      throw h.setProcessingItem(void 0), g;
    }
  }, []), n = b.useCallback(async () => {
    if (t.current) return;
    t.current = true;
    const d = { ...s };
    try {
      for (; ; ) {
        const c = ye, m = c.currentSession, o = c.sessionManager, h = c.contextManager;
        if (!m || !o || !h) break;
        if (o.isAICounterAtMax()) {
          o.setCurrentPhase("waiting_for_player"), o.setCurrentUIState("ai_loop_paused"), await c.updateSessionInDB();
          break;
        }
        o.setCurrentUIState("ai_loop_running"), o.setCurrentPhase("dm_select_speaker"), await c.updateSessionInDB();
        let x = null;
        for (let v = 0; v < Ts; v++) {
          const f = to(m, h), S = await r(d, f, "gc_select_speaker");
          if (x = ao(S), x) break;
          console.warn(`[GroupChat] DM \u9009\u62E9\u89E3\u6790\u5931\u8D25 (${v + 1}/${Ts})`);
        }
        if (!x) {
          U.warning("DM \u9009\u62E9\u53D1\u8A00\u8005\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), o.setCurrentUIState("ai_loop_paused"), await c.updateSessionInDB();
          break;
        }
        const g = o.findParticipantName(x.nextSpeakerId);
        h.addHistoryItem({ id: E(), type: "gc_select_speaker", idx: 0, orderRef: 0, timestamp: Date.now(), data: { nextSpeakerId: x.nextSpeakerId, nextSpeakerName: g, reason: x.reason }, hidden: true }), o.setCurrentSpeaker(x.nextSpeakerId), o.setCurrentPhase("character_speak"), await c.updateSessionInDB();
        const y = so(m, h);
        await r(d, y, "gc_character_message", { characterId: x.nextSpeakerId, characterName: g }), o.incrementAfterAISpeaks(x.nextSpeakerId), await c.saveNewContextItemsToDB(m.id, h.getHistoryItems()), await c.updateSessionInDB(), await new Promise((v) => setTimeout(v, 50));
      }
    } catch (c) {
      console.error("[GroupChat] AI \u5FAA\u73AF\u9519\u8BEF:", c);
      const m = ye.sessionManager;
      m && m.setCurrentUIState("ai_loop_paused");
      try {
        await ye.updateSessionInDB();
      } catch {
      }
      U.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", { duration: 1 / 0, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => a({ to: "/config/llm" }) } });
    } finally {
      t.current = false;
    }
  }, [s, r, a]), i = b.useCallback(async (d) => {
    const c = ye, { currentSession: m, contextManager: o, sessionManager: h } = c;
    !m || !o || !h || (o.addHistoryItem({ id: E(), type: "gc_user_message", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: d, userName: m.modeConfig.userName || "\u6211" } }), h.resetCounterAfterPlayerSpeaks(), await c.saveNewContextItemsToDB(m.id, o.getHistoryItems()), await c.updateSessionInDB(), t.current || n());
  }, [n]), l = b.useCallback(async () => {
    const d = ye, { sessionManager: c } = d;
    c && (c.resetAIAutoSpeakCounter(), await d.updateSessionInDB(), t.current || n());
  }, [n]), u = b.useCallback(async () => {
    const d = ye, { sessionManager: c } = d;
    c && (c.setCurrentPhase("dm_select_speaker"), c.setCurrentUIState("ai_loop_running"), c.resetAIAutoSpeakCounter(), await d.updateSessionInDB(), await new Promise((m) => setTimeout(m, 50)), n());
  }, [n]);
  return { sendPlayerMessage: i, continueAILoop: l, startChat: u, isRunningRef: t };
}
const no = B(["dm_select_speaker", "character_speak", "waiting_for_player"]), io = B(["idle", "ai_loop_running", "ai_loop_paused"]), Es = { idle: { label: "\u7A7A\u95F2", placeholder: "\u70B9\u51FB\u5F00\u59CB\u7FA4\u804A...", inputEnabled: false }, ai_loop_running: { label: "AI \u5BF9\u8BDD\u4E2D", placeholder: "\u968F\u65F6\u53D1\u9001\u6D88\u606F...", inputEnabled: true }, ai_loop_paused: { label: "\u7B49\u5F85\u4F60\u7684\u6D88\u606F", placeholder: "\u53D1\u9001\u6D88\u606F\uFF0C\u6216\u70B9\u51FB \u23E9 \u8BA9 AI \u7EE7\u7EED...", inputEnabled: true } }, oo = P({ id: p().describe("\u89D2\u8272 ID"), name: p().describe("\u89D2\u8272\u540D\u79F0"), description: p().describe("\u89D2\u8272\u63CF\u8FF0"), avatar: p().optional().describe("\u89D2\u8272\u5934\u50CF"), systemPrompt: p().describe("\u89D2\u8272\u626E\u6F14\u6307\u5F15"), personality: p().optional().describe("\u89D2\u8272\u6027\u683C\u6982\u8FF0"), firstMessage: p().optional().describe("\u5F00\u573A\u95EE\u5019\u8BED") }), co = P({ topic: p().optional().describe("\u7FA4\u804A\u8BDD\u9898/\u573A\u666F"), participantSnapshots: Y(oo).describe("\u53C2\u4E0E\u7684 AI \u89D2\u8272\u5FEB\u7167\u5217\u8868"), userName: p().optional().describe("\u73A9\u5BB6\u663E\u793A\u540D\u79F0"), dmSystemPrompt: p().optional().describe("DM \u8C03\u5EA6\u63D0\u793A\u8BCD"), maxAIAutoSpeakCount: k().optional().default(5).describe("AI \u81EA\u4E3B\u53D1\u8A00\u6700\u5927\u6570\u91CF\uFF0C\u8FBE\u5230\u540E\u6682\u505C\u7B49\u5F85\u73A9\u5BB6") }), lo = P({ currentPhase: no.describe("AI \u5FAA\u73AF\u5F53\u524D\u9636\u6BB5"), currentUIState: io.describe("\u5F53\u524D UI \u72B6\u6001"), currentSpeakerId: p().describe("\u5F53\u524D\u53D1\u8A00\u8005 ID"), messageCount: k().describe("\u603B\u6D88\u606F\u6570"), speakCounts: ie(p(), k()).describe("\u6BCF\u4E2A\u89D2\u8272\u7684\u53D1\u8A00\u6B21\u6570"), aiAutoSpeakCounter: k().default(0).describe("AI \u81EA\u4E3B\u53D1\u8A00\u8BA1\u6570\u5668\uFF0C\u73A9\u5BB6\u53D1\u8A00\u65F6\u91CD\u7F6E") });
Ft.extend({ mode: z("group-chat").describe("\u6A21\u5F0F"), modeConfig: co.describe("\u7FA4\u804A\u6A21\u5F0F\u914D\u7F6E"), modeState: lo.describe("\u7FA4\u804A\u6A21\u5F0F\u72B6\u6001") });
function Ta(s) {
  if (!s) return "";
  const t = new Date(s), a = /* @__PURE__ */ new Date(), r = t.getHours().toString().padStart(2, "0"), n = t.getMinutes().toString().padStart(2, "0");
  return t.toDateString() === a.toDateString() ? `${r}:${n}` : `${t.getMonth() + 1}/${t.getDate()} ${r}:${n}`;
}
const mo = (s) => {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o, _p, _q, _r2, _s2, _t2, _u;
  const t = te(), [a, r] = b.useState(""), n = b.useRef(null), [i, l] = b.useState(false), u = ke(ye), { data: d = [] } = Pe((C) => C.from({ s: Le })), c = d.find((C) => C.id === s.sessionId);
  b.useEffect(() => {
    var _a3;
    let C = false;
    if (!c) return;
    if (((_a3 = ye.currentSession) == null ? void 0 : _a3.id) === c.id && ye.contextManager) {
      l(true);
      return;
    }
    return (async () => {
      try {
        const I = await Bt.createSessionDB(c.id).getContextItems();
        if (C) return;
        ye.loadSession(c, { historyItems: I, processingItem: void 0 }), l(true);
      } catch (Q) {
        console.error("[GroupChat] Load session error", Q);
      }
    })(), () => {
      C = true;
    };
  }, [c == null ? void 0 : c.id, c]);
  const { sendPlayerMessage: m, continueAILoop: o, startChat: h, isRunningRef: x } = ro();
  if (b.useEffect(() => {
    n.current && (n.current.scrollTop = n.current.scrollHeight);
  }), !c || !i) return e.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4", children: [e.jsx("div", { className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center", children: e.jsx(je, { className: "w-6 h-6 opacity-20" }) }), e.jsx("p", { className: "text-xs font-medium tracking-widest uppercase opacity-50", children: "\u52A0\u8F7D\u7FA4\u804A..." })] });
  const g = ((_b = (_a2 = u.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b.currentUIState) || "idle", y = Es[g] || Es.idle, v = (_e2 = (_d = (_c = u.currentSession) == null ? void 0 : _c.modeConfig) == null ? void 0 : _d.participantSnapshots) == null ? void 0 : _e2.find((C) => {
    var _a3, _b2;
    return C.id === ((_b2 = (_a3 = u.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentSpeakerId);
  }), f = async () => {
    if (!a.trim()) return;
    const C = a;
    r(""), await m(C);
  }, S = async () => {
    x.current || await h();
  }, w = async () => {
    x.current || await o();
  }, N = () => t({ to: "/plaza" }), j = (_g = (_f = u.contextManager) == null ? void 0 : _f.state.processingItem) == null ? void 0 : _g.id;
  return e.jsxs("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: [e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shadow-sm", children: e.jsx(rt, { className: "w-5 h-5 text-violet-600" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm tracking-tight", children: ((_i2 = (_h = u.currentSession) == null ? void 0 : _h.modeConfig) == null ? void 0 : _i2.topic) || "\u7FA4\u804A" }), e.jsxs(H, { variant: "outline", className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-violet-500/5 text-violet-600 border-violet-500/10", children: [((_l = (_k = (_j = u.currentSession) == null ? void 0 : _j.modeConfig) == null ? void 0 : _k.participantSnapshots) == null ? void 0 : _l.length) || 0, " \u4EBA"] })] }), e.jsx("span", { className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide", children: v && g === "ai_loop_running" ? `${v.name} \u6B63\u5728\u8F93\u5165...` : y.label })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [g !== "idle" && e.jsxs("span", { className: "text-[9px] text-muted-foreground/50 font-mono", children: ["AI ", ((_n2 = (_m = u.currentSession) == null ? void 0 : _m.modeState) == null ? void 0 : _n2.aiAutoSpeakCounter) || 0, "/", ((_p = (_o = u.currentSession) == null ? void 0 : _o.modeConfig) == null ? void 0 : _p.maxAIAutoSpeakCount) ?? 5] }), e.jsxs(H, { variant: "secondary", className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50", children: [e.jsx("span", { className: L("w-1.5 h-1.5 rounded-full", g === "ai_loop_running" ? "bg-violet-500 animate-pulse" : g === "ai_loop_paused" ? "bg-amber-500" : "bg-muted-foreground/30") }), "\u7FA4\u804A"] })] })] }), e.jsx("div", { className: "flex grow overflow-y-auto", ref: n, children: e.jsx("div", { className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-6", children: (() => {
    var _a3, _b2, _c2, _d2, _e3, _f2, _g2;
    const C = (((_a3 = u.contextManager) == null ? void 0 : _a3.state.historyItems) || []).filter((I) => !I.hidden), J = (_b2 = u.contextManager) == null ? void 0 : _b2.state.processingItem;
    if (g === "idle") {
      const I = C.length === 0 ? "\u5F00\u59CB\u7FA4\u804A" : "\u7EE7\u7EED\u7FA4\u804A";
      return e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500", children: [e.jsx("div", { className: "w-24 h-24 rounded-4xl bg-violet-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-violet-500/10 ring-8 ring-violet-500/5", children: e.jsx(rt, { className: "w-10 h-10 text-violet-500 drop-shadow-sm" }) }), e.jsx("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center", children: ((_d2 = (_c2 = u.currentSession) == null ? void 0 : _c2.modeConfig) == null ? void 0 : _d2.topic) || "\u7FA4\u804A" }), e.jsxs("p", { className: "text-muted-foreground/80 font-medium tracking-wider mb-6 max-w-md text-center leading-relaxed text-sm", children: ["\u4E0E ", (_g2 = (_f2 = (_e3 = u.currentSession) == null ? void 0 : _e3.modeConfig) == null ? void 0 : _f2.participantSnapshots) == null ? void 0 : _g2.map(($) => $.name).join("\u3001"), " \u4E00\u8D77\u804A\u5929"] }), e.jsxs(_, { type: "button", size: "lg", className: "h-14 px-10 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-violet-500/25 shadow-violet-500/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90", onClick: S, disabled: x.current, children: [e.jsx(ve, { className: "w-5 h-5 mr-3" }), I] })] });
    }
    const Q = [...C];
    return J && !J.hidden && !C.some((I) => I.id === J.id) && Q.push(J), Q.map((I, $) => {
      var _a4, _b3, _c3, _d3;
      return e.jsx(uo, { item: I, participants: ((_b3 = (_a4 = u.currentSession) == null ? void 0 : _a4.modeConfig) == null ? void 0 : _b3.participantSnapshots) || [], userName: ((_d3 = (_c3 = u.currentSession) == null ? void 0 : _c3.modeConfig) == null ? void 0 : _d3.userName) || "\u6211", isStreaming: I.id === j }, `[${$}]${I.id}`);
    });
  })() }) }), g !== "idle" && e.jsxs("div", { className: "p-4 md:p-6 shrink-0 bg-background", children: [e.jsxs("div", { className: "max-w-3xl mx-auto relative group", children: [e.jsx(K, { value: a, onChange: (C) => r(C.target.value), placeholder: y.placeholder, className: "min-h-20 max-h-40 pr-28 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-violet-500/20 focus-visible:bg-background transition-all", onKeyDown: (C) => {
    C.key === "Enter" && !C.shiftKey && (C.preventDefault(), f());
  } }), e.jsxs("div", { className: "absolute right-3 bottom-3 flex gap-2", children: [e.jsx(_, { type: "button", size: "icon", variant: "ghost", className: L("h-10 w-10 rounded-xl text-muted-foreground hover:text-violet-600", g === "ai_loop_paused" && "text-amber-500 animate-pulse"), disabled: x.current, onClick: w, title: "\u8BA9 AI \u7EE7\u7EED\u5BF9\u8BDD\uFF08\u91CD\u7F6E\u8BA1\u6570\u5668\uFF09", children: e.jsx(Sr, { className: "w-4 h-4" }) }), e.jsx(_, { type: "button", size: "icon", className: "h-10 w-10 rounded-xl shadow-lg hover:shadow-violet-500/20 transition-all", disabled: !a.trim(), onClick: f, children: e.jsx(ze, { className: "w-4 h-4" }) })] })] }), e.jsxs("div", { className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40", children: [e.jsx("div", { className: "text-[9px] font-bold tracking-widest uppercase", children: "GROUP CHAT" }), e.jsx("div", { className: "text-[9px] font-medium", children: "Shift + Enter \u6362\u884C \xB7 \u23E9 \u8BA9 AI \u7EE7\u7EED" })] })] })] }), e.jsxs("div", { className: "w-70 h-full overflow-y-auto bg-muted/10 border-l p-6 space-y-6 shrink-0 hidden lg:block scrollbar-none", children: [e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(Ae, { className: "w-3.5 h-3.5 text-violet-500" }), "\u7FA4\u804A\u6210\u5458"] }), e.jsx("div", { className: "p-3 rounded-xl border bg-background/40 border-muted/30", children: e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600", children: e.jsx(Ae, { className: "w-4 h-4" }) }), e.jsx("div", { className: "grow min-w-0", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-sm font-bold truncate", children: ((_r2 = (_q = u.currentSession) == null ? void 0 : _q.modeConfig) == null ? void 0 : _r2.userName) || "\u6211" }), e.jsx(H, { variant: "outline", className: "text-[8px] px-1 h-3.5 bg-blue-500/10 text-blue-600 border-blue-500/20", children: "\u73A9\u5BB6" })] }) })] }) }), e.jsx("div", { className: "space-y-2", children: (_u = (_t2 = (_s2 = u.currentSession) == null ? void 0 : _s2.modeConfig) == null ? void 0 : _t2.participantSnapshots) == null ? void 0 : _u.map((C) => {
    var _a3, _b2, _c2, _d2, _e3;
    const J = C.id === ((_b2 = (_a3 = u.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentSpeakerId) && g === "ai_loop_running", Q = ((_e3 = (_d2 = (_c2 = u.currentSession) == null ? void 0 : _c2.modeState) == null ? void 0 : _d2.speakCounts) == null ? void 0 : _e3[C.id]) || 0;
    return e.jsx("div", { className: L("p-3 rounded-xl border transition-all duration-300", J ? "bg-violet-500/5 border-violet-500/30 shadow-sm shadow-violet-500/10" : "bg-background/40 border-muted/30"), children: e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: L("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", J ? "bg-violet-500/20 text-violet-600" : "bg-muted text-muted-foreground"), children: e.jsx(de, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [e.jsx("span", { className: "text-sm font-bold truncate", children: C.name }), J && e.jsx(H, { variant: "outline", className: "text-[8px] px-1 h-3.5 bg-violet-500/10 text-violet-600 border-violet-500/20", children: "\u53D1\u8A00\u4E2D" })] }), e.jsxs("div", { className: "text-[10px] text-muted-foreground/60 font-medium", children: ["\u53D1\u8A00 \xD7", Q] })] })] }) }, C.id);
  }) })] }), e.jsx("div", { className: "space-y-3 pt-4", children: e.jsxs(_, { type: "button", variant: "outline", className: "w-full h-10 rounded-xl border-dashed border-2 hover:border-violet-500/50 hover:bg-violet-500/5 gap-2", onClick: N, children: [e.jsx(is, { className: "w-4 h-4" }), e.jsx("span", { className: "font-bold tracking-wider text-sm", children: "\u9000\u51FA\u7FA4\u804A" })] }) })] })] });
}, uo = ({ item: s, participants: t, userName: a, isStreaming: r }) => {
  var _a2;
  switch (s.type) {
    case "gc_character_message":
      return e.jsx(Ls, { item: s, participants: t, isStreaming: r });
    case "gc_user_message":
      return e.jsx(ho, { item: s, userName: a });
    case "gc_select_speaker":
      return null;
    default:
      return ((_a2 = s.data) == null ? void 0 : _a2.content) ? e.jsx(Ls, { item: s, participants: t, isStreaming: r }) : null;
  }
}, Ls = ({ item: s, participants: t, isStreaming: a }) => {
  var _a2;
  const r = s.data, n = r.characterName || ((_a2 = t.find((l) => l.id === r.characterId)) == null ? void 0 : _a2.name) || "\u89D2\u8272", i = a ? "..." : Ta(s.timestamp);
  return e.jsxs("div", { className: "flex gap-4 group animate-in fade-in slide-in-from-left-2 duration-300", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-violet-500/5 flex items-center justify-center shrink-0 border border-violet-500/10", children: e.jsx(de, { className: "w-4.5 h-4.5 text-violet-600" }) }), e.jsxs("div", { className: "space-y-1 grow pt-0.5 min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-[10px] font-black tracking-[0.15em] text-violet-600/60 uppercase", children: n }), e.jsx("span", { className: "text-[9px] text-muted-foreground/40 font-medium tabular-nums", children: i })] }), e.jsx("div", { className: "text-[15px] leading-relaxed text-foreground/85 whitespace-pre-wrap", children: r.content || "" })] })] });
}, ho = ({ item: s, userName: t }) => {
  const a = s.data, r = Ta(s.timestamp);
  return e.jsxs("div", { className: "flex gap-4 group animate-in fade-in slide-in-from-right-2 duration-300", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-blue-500/5 flex items-center justify-center shrink-0 border border-blue-500/10", children: e.jsx(Ae, { className: "w-4.5 h-4.5 text-blue-600" }) }), e.jsxs("div", { className: "space-y-1 grow pt-0.5 min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-[10px] font-black tracking-[0.15em] text-blue-600/60 uppercase", children: a.userName || t }), e.jsx("span", { className: "text-[9px] text-muted-foreground/40 font-medium tabular-nums", children: r })] }), e.jsx("div", { className: "text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap", children: a.content || "" })] })] });
}, Yo = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForGroupChat: mo }, Symbol.toStringTag, { value: "Module" }));
export {
  Ee as C,
  Ro as D,
  To as E,
  Uo as G,
  Ao as I,
  Io as S,
  Le as a,
  Do as b,
  Mo as c,
  Eo as d,
  tt as e,
  Lo as f,
  $o as g,
  Fo as h,
  Oo as i,
  Ho as j,
  Bo as k,
  Jo as l,
  ee as m,
  zo as n,
  Go as o,
  ko as p,
  Po as q,
  Vo as r,
  qo as s,
  Ko as t,
  Xo as u,
  Wo as v,
  Yo as w
};
