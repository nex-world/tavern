var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as b, j as e, ax as me, ay as Sa, t as V, az as fe, aA as at, aB as ws } from "./react-C1-gKlL3.js";
import { B as N, X as k, f as L, a5 as wa, a6 as Ca, a7 as ka, Y as X, d as U, D as St, s as wt, t as Ct, u as rt, v as zt, w as Cs, L as Ia, N as Da, O as Ma, P as Pa, Q as Aa, R as Ta, U as $a, V as Ea, W as La, S as Ra, J as Fa, K as Ua, a8 as Oa, C as B, E as z, F as J, G as se, H as G, a9 as Ha, aa as Ba, ab as Ga, ac as ks, ad as Jt, ae as qt, af as ze, ag as Je, ah as qe, ai as Ke, aj as de, Z as xt, ak as Va, al as dt, am as mt, an as ut, y as Is, z as Ds, A as Se, a4 as we } from "./app-components-Cazi3mLF.js";
import { e as he, k as nt, m as kt, n as za, j as Ja, i as ke } from "./@tanstack-D0F3M8cX.js";
import { c as T, a as Kt } from "./app-lib-Lqu2MNa0.js";
import { s as Ms, b as Ye, t as Le, A as Ps, u as As, I as It, C as Ts, h as Re, v as ge, w as Dt, x as $s, y as qa, R as Xt, M as Qe, i as Ze, k as Fe, j as Ka, z as Xa, S as et, B as Wa, F as Es, o as Bt, G as Ls, D as Ya, n as Rs, U as tt, P as ye, J as ie, X as Mt, K as Qa, N as Ve, Q as gt, e as Za, r as Ie, V as Wt, W as ft, Y as Fs, Z as Us, _ as er, $ as Gt, a0 as tr, a1 as sr, a2 as Os, a3 as ar, T as rr, a4 as nr, a5 as ir, a6 as or, a7 as cr, l as Hs, a8 as Bs, f as De, a9 as Pt, aa as Yt, ab as Gs, ac as lr, ad as dr, ae as mr, af as ur, ag as hr } from "./icons-D0dskdnL.js";
import { n as O } from "./id-OxPLOBIU.js";
import { x as Vs, y as Ce, z as pr } from "./vendor-DiUPmCJW.js";
import { _ as Ne } from "./index-Dpc698w9.js";
import { c as xr } from "./app-hooks-DuiTjjKo.js";
import { a as Qt } from "./future-lib-llm-ui-react-Dc-qGejy.js";
import { o as M, s as h, n as C, b as q, r as ae, a as ue, l as F, c as $, _ as H, u as ve, t as pe, e as gr } from "./zod-grrOrvCS.js";
import { D as bt } from "./dexie-CYn1VVOQ.js";
import { c as is } from "./es-toolkit-CstbrnlE.js";
function yt() {
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
const fr = ({ onReady: s }) => {
  const t = he(), [a, r] = b.useState(null);
  if (b.useEffect(() => {
    const o = yt();
    if (r(o), o.isReady) {
      const u = setTimeout(() => s(), 600);
      return () => clearTimeout(u);
    }
  }, [s]), !a) return null;
  const n = [{ key: "baseUrl", label: "API \u5730\u5740" }, { key: "apiKey", label: "API \u5BC6\u94A5" }, { key: "model", label: "\u6A21\u578B\u9009\u62E9" }], i = new Set(a.missingItems.map((o) => o.key));
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx("h3", { className: "text-lg font-bold", children: "LLM \u914D\u7F6E\u68C0\u6D4B" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA\uFF0C\u786E\u4FDD\u4F1A\u8BDD\u53EF\u4EE5\u6B63\u5E38\u8FDB\u884C\u3002" })] }), e.jsx("div", { className: "space-y-3", children: n.map((o) => {
    const u = i.has(o.key), d = a.missingItems.find((l) => l.key === o.key);
    return e.jsxs("div", { className: T("flex items-center gap-3 p-3 rounded-xl border transition-colors", u ? "border-destructive/30 bg-destructive/5" : "border-primary/20 bg-primary/5"), children: [u ? e.jsx(Ms, { className: "w-5 h-5 text-destructive shrink-0" }) : e.jsx(Ye, { className: "w-5 h-5 text-primary shrink-0" }), e.jsxs("div", { className: "flex-1 min-w-0", children: [e.jsx("div", { className: T("text-sm font-medium", u ? "text-destructive" : "text-foreground"), children: o.label }), u && d && e.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: d.description })] })] }, o.key);
  }) }), a.isReady ? e.jsxs("div", { className: "flex items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/20", children: [e.jsx(Ye, { className: "w-5 h-5 text-primary shrink-0" }), e.jsx("span", { className: "text-sm font-medium text-primary", children: "\u6240\u6709\u914D\u7F6E\u5DF2\u5C31\u7EEA\uFF0C\u6B63\u5728\u8FDB\u5165\u4E0B\u4E00\u6B65..." })] }) : e.jsxs("div", { className: "flex flex-col gap-3", children: [e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E\u540E\u518D\u5F00\u59CB\u4F1A\u8BDD\u3002" }), e.jsxs("div", { className: "flex gap-3", children: [e.jsxs(N, { type: "button", variant: "default", className: "gap-2", onClick: () => t({ to: "/config/llm" }), children: [e.jsx(Le, { className: "w-4 h-4" }), "\u524D\u5F80 LLM \u914D\u7F6E"] }), e.jsxs(N, { type: "button", variant: "outline", className: "gap-2", onClick: () => {
    const o = yt();
    r(o), o.isReady && s();
  }, children: [e.jsx(Ps, { className: "w-4 h-4" }), "\u91CD\u65B0\u68C0\u6D4B"] })] })] })] });
};
function Lt() {
  return { userName: "User", globalSystemPrompt: "" };
}
const br = ({ config: s, onChange: t, character: a }) => {
  var _a;
  const r = b.useId(), n = b.useId(), i = !!((_a = a.system_prompt) == null ? void 0 : _a.trim());
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h3", { className: "text-lg font-bold flex items-center gap-2", children: [e.jsx(As, { className: "w-5 h-5 text-primary" }), "\u804A\u5929\u4F1A\u8BDD\u914D\u7F6E"] }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u914D\u7F6E\u672C\u6B21\u4E0E ", e.jsx("span", { className: "font-medium text-foreground", children: a.name }), " \u7684\u804A\u5929\u4F1A\u8BDD\u53C2\u6570\u3002"] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: r, className: "text-sm font-medium", children: "\u4F60\u7684\u540D\u79F0" }), e.jsx(L, { id: r, value: s.userName, onChange: (o) => t({ ...s, userName: o.target.value }), placeholder: "\u8F93\u5165\u4F60\u5728\u5BF9\u8BDD\u4E2D\u7684\u540D\u79F0...", className: "max-w-xs" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u89D2\u8272\u5728\u5BF9\u8BDD\u4E2D\u5982\u4F55\u79F0\u547C\u4F60\u3002" })] }), i && e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-muted", children: [e.jsx(It, { className: "w-4 h-4 text-muted-foreground shrink-0 mt-0.5" }), e.jsxs("div", { className: "text-xs text-muted-foreground space-y-1", children: [e.jsx("p", { className: "font-medium", children: "\u8BE5\u89D2\u8272\u81EA\u5E26\u7CFB\u7EDF\u63D0\u793A\u8BCD" }), e.jsx("p", { className: "line-clamp-2 italic", children: a.system_prompt })] })] }), e.jsxs(wa, { children: [e.jsxs(Ca, { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group w-full", children: [e.jsx(Ts, { className: "w-4 h-4 transition-transform group-data-[state=open]:rotate-180" }), "\u9AD8\u7EA7\u914D\u7F6E"] }), e.jsx(ka, { className: "pt-4 space-y-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: n, className: "text-sm font-medium", children: "\u9644\u52A0\u7CFB\u7EDF\u63D0\u793A\u8BCD" }), e.jsx(X, { id: n, value: s.globalSystemPrompt, onChange: (o) => t({ ...s, globalSystemPrompt: o.target.value }), placeholder: "\u8F93\u5165\u989D\u5916\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u5C06\u8FFD\u52A0\u5230\u89D2\u8272\u5361\u81EA\u5E26\u7684\u63D0\u793A\u8BCD\u4E4B\u540E...", className: "min-h-24 resize-y" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u53EF\u9009\u3002\u7528\u4E8E\u6DFB\u52A0\u989D\u5916\u7684\u89C4\u5219\u6216\u9650\u5236\uFF0C\u5982\u300C\u8BF7\u4F7F\u7528\u4E2D\u6587\u56DE\u590D\u300D\u3002" })] }) })] })] });
}, yr = ({ challenge: s, character: t }) => {
  const a = s.variables || {}, r = s.goals || [], n = s.failureChecks || [];
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h3", { className: "text-lg font-bold flex items-center gap-2", children: [e.jsx(Re, { className: "w-5 h-5 text-amber-500" }), "\u6311\u6218\u89C4\u5219\u9884\u89C8"] }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u4EE5\u89D2\u8272 ", e.jsx("span", { className: "font-medium text-foreground", children: t.name }), " \u53C2\u4E0E\u6311\u6218 \u300C", e.jsx("span", { className: "font-medium text-foreground", children: s.name }), "\u300D\u3002"] })] }), s.userGuidance && e.jsxs("div", { className: "p-4 rounded-xl bg-muted/50 border border-muted italic text-sm text-muted-foreground leading-relaxed", children: ['"', s.userGuidance, '"'] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(ge, { className: "w-4 h-4 text-primary" }), "\u4E16\u754C\u53D8\u91CF", e.jsxs(U, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [Object.keys(a).length, " \u4E2A"] })] }), Object.keys(a).length > 0 ? e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: Object.entries(a).map(([i, o]) => e.jsxs("div", { className: T("p-3 rounded-xl border bg-background/60 space-y-1", o.hidden && "opacity-50"), children: [e.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase truncate", children: i }), e.jsx("div", { className: "text-base font-mono font-bold truncate", children: String(o.initial) }), e.jsxs("div", { className: "text-[10px] text-muted-foreground/60 truncate", children: [o.type, " ", o.hidden ? "(\u9690\u85CF)" : ""] })] }, i)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u4E16\u754C\u53D8\u91CF" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(Dt, { className: "w-4 h-4 text-primary" }), "\u751F\u5B58\u76EE\u6807", e.jsxs(U, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [r.length, " \u4E2A"] })] }), r.length > 0 ? e.jsx("div", { className: "space-y-2", children: r.map((i) => e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl border bg-background/60", children: [e.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-primary/30 shrink-0 mt-0.5" }), e.jsx("div", { className: "text-sm", children: i.description })] }, i.key)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u8BBE\u5B9A\u76EE\u6807" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx($s, { className: "w-4 h-4 text-destructive" }), "\u6B7B\u4EA1\u7981\u5FCC", e.jsxs(U, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [n.length, " \u4E2A"] })] }), n.length > 0 ? e.jsx("div", { className: "space-y-2", children: n.map((i) => e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl border border-destructive/10 bg-destructive/5", children: [e.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-destructive/30 shrink-0 mt-0.5" }), e.jsx("div", { className: "text-sm", children: i.description })] }, i.key)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u5931\u8D25\u6761\u4EF6" })] })] });
};
function jr(s) {
  return s === "chat" ? [{ key: "llm-check", title: "LLM \u68C0\u6D4B", description: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA" }, { key: "chat-config", title: "\u4F1A\u8BDD\u914D\u7F6E", description: "\u914D\u7F6E\u672C\u6B21\u804A\u5929\u4F1A\u8BDD\u7684\u53C2\u6570" }] : [{ key: "llm-check", title: "LLM \u68C0\u6D4B", description: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA" }, { key: "challenge-preview", title: "\u89C4\u5219\u9884\u89C8", description: "\u9884\u89C8\u5E76\u786E\u8BA4\u6311\u6218\u89C4\u5219" }];
}
const Zi = ({ open: s, onOpenChange: t, wizardProps: a }) => {
  const [r, n] = b.useState(0), [i, o] = b.useState(Lt), u = jr(a.mode), d = u[r], l = r === u.length - 1, m = r === 0, c = b.useCallback(() => {
    n((j) => Math.min(j + 1, u.length - 1));
  }, [u.length]), p = () => {
    l ? (a.mode === "chat" ? a.onConfirm(i) : a.onConfirm(), t(false), n(0), o(Lt())) : n((j) => j + 1);
  }, x = () => {
    n((j) => Math.max(j - 1, 0));
  }, f = (j) => {
    j || (n(0), o(Lt())), t(j);
  }, v = a.mode === "chat" ? "\u804A\u5929\u4F1A\u8BDD" : "\u6311\u6218\u4F1A\u8BDD";
  return e.jsx(St, { open: s, onOpenChange: f, children: e.jsxs(wt, { className: "sm:max-w-lg max-h-[85vh] overflow-y-auto", children: [e.jsxs(Ct, { children: [e.jsxs(rt, { className: "flex items-center gap-2", children: ["\u5F00\u59CB", v] }), e.jsx(zt, { children: d == null ? void 0 : d.description })] }), e.jsx("div", { className: "flex items-center gap-2 py-2", children: u.map((j, g) => e.jsxs("div", { className: "flex items-center gap-2", children: [g > 0 && e.jsx("div", { className: "h-px w-6 bg-muted-foreground/20" }), e.jsx("div", { className: `
                  w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-colors
                  ${g < r ? "bg-primary text-primary-foreground" : g === r ? "bg-primary/20 text-primary border-2 border-primary" : "bg-muted text-muted-foreground"}
                `, children: g + 1 }), e.jsx("span", { className: `text-xs font-medium hidden sm:inline ${g === r ? "text-foreground" : "text-muted-foreground"}`, children: j.title })] }, j.key)) }), e.jsxs("div", { className: "py-2 min-h-48", children: [(d == null ? void 0 : d.key) === "llm-check" && e.jsx(fr, { onReady: c }), (d == null ? void 0 : d.key) === "chat-config" && a.mode === "chat" && e.jsx(br, { config: i, onChange: o, character: a.character }), (d == null ? void 0 : d.key) === "challenge-preview" && a.mode === "challenge" && e.jsx(yr, { challenge: a.challenge, character: a.character })] }), e.jsxs(Cs, { className: "flex-row justify-between sm:justify-between gap-2", children: [e.jsxs(N, { type: "button", variant: "outline", disabled: m, onClick: x, className: "gap-1.5", children: [e.jsx(qa, { className: "w-4 h-4" }), "\u4E0A\u4E00\u6B65"] }), e.jsx(N, { type: "button", onClick: p, disabled: (d == null ? void 0 : d.key) === "llm-check", className: "gap-1.5", children: l ? e.jsxs(e.Fragment, { children: [e.jsx(Xt, { className: "w-4 h-4" }), "\u5F00\u59CB", v] }) : e.jsxs(e.Fragment, { children: ["\u4E0B\u4E00\u6B65", e.jsx(Ps, { className: "w-4 h-4" })] }) })] })] }) });
}, os = { chat: { id: "chat", label: "\u804A\u5929", description: "\u7EAF\u7CB9\u7684\u89D2\u8272RP\u5BF9\u8BDD", icon: As, colorClass: "text-blue-500", badgeText: "\u804A\u5929\u6A21\u5F0F", sessionPrefix: "\u804A\u5929" }, challenge: { id: "challenge", label: "\u6311\u6218", description: "\u542B DM \u65C1\u767D\u4E0E\u76EE\u6807\u6311\u6218", icon: $s, colorClass: "text-amber-500", badgeText: "\u6311\u6218\u6A21\u5F0F", sessionPrefix: "\u6311\u6218" }, dnd: { id: "dnd", label: "DnD", description: "\u591A\u4EBA DnD \u684C\u6E38\u5192\u9669", icon: Ze, colorClass: "text-amber-600", badgeText: "DnD \u6A21\u5F0F", sessionPrefix: "DnD \u5192\u9669" }, "group-chat": { id: "group-chat", label: "\u7FA4\u804A", description: "\u591A\u89D2\u8272\u81EA\u7531\u7FA4\u804A", icon: Qe, colorClass: "text-violet-500", badgeText: "\u7FA4\u804A\u6A21\u5F0F", sessionPrefix: "\u7FA4\u804A" } };
function jt(s) {
  return os[s] || os.chat;
}
const vr = (s) => {
  const [t, a] = b.useState(false);
  return e.jsxs(Ia, { open: t, onOpenChange: a, children: [e.jsxs("div", { className: T("group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors mb-1", s.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"), onClick: () => s.onClick(s.session), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [(() => {
    const r = jt(s.session.mode).icon;
    return e.jsx(r, { className: "w-4 h-4 shrink-0" });
  })(), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: s.session.title || s.characterName }), e.jsx("span", { className: "text-[10px] opacity-70", children: new Date(s.session.updatedAt).toLocaleDateString() })] })] }), e.jsx(Da, { asChild: true, children: e.jsx(N, { variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: (r) => r.stopPropagation(), type: "button", children: e.jsx(Fe, { className: "w-3.5 h-3.5 text-muted-foreground hover:text-destructive" }) }) })] }), e.jsxs(Ma, { children: [e.jsxs(Pa, { children: [e.jsx(Aa, { children: "\u786E\u8BA4\u5220\u9664" }), e.jsx(Ta, { children: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u4F1A\u8BDD\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002" })] }), e.jsxs($a, { children: [e.jsx(Ea, { children: "\u53D6\u6D88" }), e.jsx(La, { onClick: () => {
    var _a;
    (_a = s.onDelete) == null ? void 0 : _a.call(s, s.session), a(false);
  }, children: "\u5220\u9664" })] })] })] });
}, eo = (s) => {
  const [t, a] = b.useState(""), [r, n] = b.useState(false), i = (d) => {
    var _a, _b;
    if (d.title) return d.title;
    const l = jt(d.mode), m = (_a = d.modeConfig) == null ? void 0 : _a.characterId;
    if (m) {
      const c = (_b = s.characters.find((p) => p.id === m)) == null ? void 0 : _b.name;
      if (c) return `${l.sessionPrefix}: ${c}`;
    }
    return l.sessionPrefix;
  }, o = s.sessions.filter((d) => i(d).toLowerCase().includes(t.toLowerCase())).sort((d, l) => l.updatedAt - d.updatedAt), u = (d = false) => e.jsxs("div", { className: "flex flex-col h-full bg-muted/30 border-r w-64", children: [e.jsxs("div", { className: `p-4 space-y-4 ${d ? "pt-12" : ""}`, children: [e.jsxs(N, { className: "w-full flex items-center gap-2", onClick: () => {
    s.onNewSession(), d && n(false);
  }, type: "button", children: [e.jsx(Xa, { className: "w-4 h-4" }), "\u65B0\u4F1A\u8BDD"] }), e.jsxs("div", { className: "relative", children: [e.jsx(et, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), e.jsx(L, { placeholder: "\u641C\u7D22\u4F1A\u8BDD...", className: "pl-8 h-9 text-xs", value: t, onChange: (l) => a(l.target.value) })] })] }), e.jsx("div", { className: "grow overflow-y-auto px-2", children: e.jsxs("div", { className: "space-y-1", children: [o.map((l) => e.jsx(vr, { session: l, isActive: l.id === s.activeSessionId, characterName: i(l), onClick: (m) => {
    s.onSessionSelect(m), d && n(false);
  }, onDelete: s.onSessionDelete }, l.id)), o.length === 0 && e.jsx("div", { className: "text-center py-10 text-muted-foreground text-xs", children: "\u65E0\u4F1A\u8BDD" })] }) })] });
  return e.jsxs(e.Fragment, { children: [e.jsx("aside", { className: "hidden md:flex w-64 flex-col", children: u(false) }), e.jsxs(Ra, { open: r, onOpenChange: n, children: [e.jsx(Fa, { asChild: true, children: e.jsx(N, { variant: "outline", size: "icon", className: "md:hidden fixed bottom-6 left-6 rounded-full shadow-lg z-50 h-12 w-12", children: e.jsx(Ka, { className: "h-6 w-6" }) }) }), e.jsxs(Ua, { side: "left", className: "w-64 p-0", children: [e.jsx(rt, { className: "sr-only", children: "\u4F1A\u8BDD\u5217\u8868" }), e.jsx(zt, { className: "sr-only", children: "\u9009\u62E9\u548C\u7BA1\u7406\u60A8\u7684\u804A\u5929\u4F1A\u8BDD" }), u(true)] })] })] });
}, _r = M({ keys: q(h()).describe("\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5339\u914D\u804A\u5929\u65E5\u5FD7"), content: h().describe("\u5185\u5BB9\uFF0C\u5982\u679C\u5339\u914D\u5219\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u4E2D"), extensions: ae(h(), ue()).describe("\u6269\u5C55\u5B57\u6BB5"), enabled: $().describe("\u662F\u5426\u542F\u7528"), insertion_order: C().describe("\u63D2\u5165\u987A\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5C0F\u8D8A\u65E9\u63D2\u5165"), case_sensitive: $().optional().describe("\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199"), constant: $().optional().describe("\u662F\u5426\u4E3A\u5E38\u91CF\u5339\u914D"), name: h().optional().describe("\u6761\u76EE\u540D\u79F0"), priority: C().optional().describe("\u4F18\u5148\u7EA7"), id: C().optional().describe("\u6761\u76EEID"), comment: h().optional().describe("\u6CE8\u91CA"), selective: $().optional().describe("\u662F\u5426\u9009\u62E9\u6027\u5339\u914D"), secondary_keys: q(h()).optional().describe("\u6B21\u8981\u5173\u952E\u8BCD"), position: H(["before_char", "after_char"]).optional().describe("\u63D2\u5165\u4F4D\u7F6E") }), Nr = M({ keys: q(h()).describe("\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5339\u914D\u804A\u5929\u65E5\u5FD7"), content: h().describe("\u5185\u5BB9\uFF0C\u5982\u679C\u5339\u914D\u5219\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u4E2D"), extensions: ae(h(), ue()).describe("\u6269\u5C55\u5B57\u6BB5"), enabled: $().describe("\u662F\u5426\u542F\u7528"), insertion_order: C().describe("\u63D2\u5165\u987A\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5C0F\u8D8A\u65E9\u63D2\u5165"), case_sensitive: $().optional().describe("\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199"), use_regex: $().optional().describe("\u662F\u5426\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D"), constant: $().optional().describe("\u662F\u5426\u4E3A\u5E38\u91CF\u5339\u914D"), name: h().optional().describe("\u6761\u76EE\u540D\u79F0"), priority: C().optional().describe("\u4F18\u5148\u7EA7"), id: ve([C(), h()]).optional().describe("\u6761\u76EEID"), comment: h().optional().describe("\u6CE8\u91CA"), selective: $().optional().describe("\u662F\u5426\u9009\u62E9\u6027\u5339\u914D"), secondary_keys: q(h()).optional().describe("\u6B21\u8981\u5173\u952E\u8BCD"), position: H(["before_char", "after_char"]).optional().describe("\u63D2\u5165\u4F4D\u7F6E") }), Sr = ve([_r, Nr]), zs = M({ name: h().optional().describe("\u77E5\u8BC6\u4E66\u540D\u79F0"), description: h().optional().describe("\u77E5\u8BC6\u4E66\u63CF\u8FF0"), scan_depth: C().optional().describe("\u626B\u63CF\u6DF1\u5EA6\uFF0C\u68C0\u67E5\u6700\u8FD1\u591A\u5C11\u6761\u6D88\u606F"), token_budget: C().optional().describe("\u4EE4\u724C\u9884\u7B97\uFF0C\u8D85\u8FC7\u5219\u79FB\u9664\u4F4E\u4F18\u5148\u7EA7\u6761\u76EE"), recursive_scanning: $().optional().describe("\u662F\u5426\u542F\u7528\u9012\u5F52\u626B\u63CF"), extensions: ae(h(), ue()).describe("\u6269\u5C55\u5B57\u6BB5"), entries: q(Sr).describe("\u6761\u76EE\u6570\u7EC4") }), wr = M({ type: h().describe("\u8D44\u4EA7\u7C7B\u578B\uFF0C\u5982 'icon', 'background' \u7B49"), uri: h().describe("\u8D44\u4EA7URI"), name: h().describe("\u8D44\u4EA7\u540D\u79F0"), ext: h().describe("\u6587\u4EF6\u6269\u5C55\u540D") }), Ue = M({ name: h().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: h().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), creator: h().describe("\u521B\u5EFA\u8005\u3010v2\u3011"), creator_notes: h().describe("\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v2\u3011"), creator_notes_multilingual: ae(h(), h()).optional().describe("\u591A\u8BED\u8A00\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v3\u3011"), extensions: ae(h(), ue()).describe("\u53EF\u81EA\u5B9A\u4E49\u7684\u6269\u5C55\u5B57\u6BB5\u3010v2\u3011"), assets: q(wr).optional().describe("\u8D44\u4EA7\u6570\u7EC4\u3010v3\u3011"), system_prompt: h().describe("\u7CFB\u7EDF\u63D0\u793A\u8BCD(\u6A21\u677F)\u3010v2\u3011"), post_history_instructions: h().describe("\u5386\u53F2\u6307\u4EE4\u540E\u7F00(\u6A21\u677F)\u3010v2\u3011"), nickname: h().optional().describe("\u6635\u79F0\u3010v3\u3011"), personality: h().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), mes_example: h().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011"), first_mes: h().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), alternate_greetings: q(h()).describe("\u5907\u7528\u95EE\u5019\u8BED\u6570\u7EC4\u3010v2\u3011"), group_only_greetings: q(h()).describe("\u4EC5\u7FA4\u804A\u95EE\u5019\u8BED\u3010v3\u3011"), scenario: h().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), character_book: zs.optional().describe("\u89D2\u8272\u7279\u5B9A\u77E5\u8BC6\u4E66\u3010\u90E8\u5206\u529F\u80FD\uFF08\u5982\u88C5\u9970\u5668\uFF09\u9650\u5355\u804A\u4F7F\u7528\u3011\u3010v2\u3011"), character_version: h().describe("\u89D2\u8272\u7248\u672C\u3010v2\u3011"), tags: q(h()).describe("\u6807\u7B7E\u6570\u7EC4\uFF0C\u7528\u4E8E\u7B5B\u9009\uFF0C\u5927\u5C0F\u5199\u654F\u611F\u3010v2\u3011"), source: q(h()).optional().describe("\u6765\u6E90\u6570\u7EC4\uFF0C\u4FBF\u4E8E\u6EAF\u6E90\u6216\u81EA\u52A8\u66F4\u65B0\u7B49\u3010v3\u3011"), creation_date: C().optional().describe("\u521B\u5EFA\u65E5\u671F\uFF08Unix\u65F6\u95F4\u6233\uFF09\u3010v3\u3011"), modification_date: C().optional().describe("\u4FEE\u6539\u65E5\u671F\uFF08Unix\u65F6\u95F4\u6233\uFF09\u3010v3\u3011") }), Cr = M({ name: h().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: h().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), personality: h().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), scenario: h().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), first_mes: h().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), mes_example: h().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011"), creator_notes: h().describe("\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v2\u3011"), system_prompt: h().describe("\u7CFB\u7EDF\u63D0\u793A\u8BCD(\u6A21\u677F)\u3010v2\u3011"), post_history_instructions: h().describe("\u5386\u53F2\u6307\u4EE4\u540E\u7F00(\u6A21\u677F)\u3010v2\u3011"), alternate_greetings: q(h()).describe("\u5907\u7528\u95EE\u5019\u8BED\u6570\u7EC4\u3010v2\u3011"), character_book: zs.optional().describe("\u89D2\u8272\u7279\u5B9A\u77E5\u8BC6\u4E66\u3010\u90E8\u5206\u529F\u80FD\uFF08\u5982\u88C5\u9970\u5668\uFF09\u9650\u5355\u804A\u4F7F\u7528\u3011\u3010v2\u3011"), tags: q(h()).describe("\u6807\u7B7E\u6570\u7EC4\uFF0C\u7528\u4E8E\u7B5B\u9009\uFF0C\u5927\u5C0F\u5199\u654F\u611F\u3010v2\u3011"), creator: h().describe("\u521B\u5EFA\u8005\u3010v2\u3011"), character_version: h().describe("\u89D2\u8272\u7248\u672C\u3010v2\u3011"), extensions: ae(h(), ue()).describe("\u53EF\u81EA\u5B9A\u4E49\u7684\u6269\u5C55\u5B57\u6BB5\u3010v2\u3011") });
M({ spec: F("chara_card_v2").describe("\u89C4\u8303\u6807\u8BC6"), spec_version: F("2.0").describe("\u89C4\u8303\u7248\u672C"), data: Cr.describe("\u6570\u636E") });
const Zt = M({ spec: F("chara_card_v3").describe("\u89C4\u8303\u6807\u8BC6"), spec_version: F("3.0").describe("\u89C4\u8303\u7248\u672C"), data: Ue.describe("\u6570\u636E") }), Js = M({ name: h().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: h().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), personality: h().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), scenario: h().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), first_mes: h().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), mes_example: h().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011") }), es = Ue.extend({ id: h().describe("\u89D2\u8272\u5361ID"), avatar: h().optional().describe("\u5934\u50CFURI"), imageBase64: h().optional().describe("PNG\u56FE\u50CFBase64\u6570\u636E"), createdAt: C().optional().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: C().optional().describe("\u66F4\u65B0\u65F6\u95F4") }), Y = M({ id: h().optional().describe("\u4E0A\u4E0B\u6587\u9879 ID"), idx: C().optional().describe("\u4E0A\u4E0B\u6587\u9879\u7D22\u5F15\u4F4D\u7F6E"), orderRef: C().optional().describe("\u4E0A\u4E0B\u6587\u9879\u6392\u5E8F\u53C2\u8003\u503C").default(0), type: h().optional().describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\u6807\u7B7E").default("default"), data: ue().describe("\u4E0A\u4E0B\u6587\u5185\u5BB9"), hidden: $().optional().nullable().describe("\u662F\u5426\u9690\u85CF\u8BE5\u4E0A\u4E0B\u6587\u9879"), processing: $().optional().nullable().describe("\u4E0A\u4E0B\u6587\u9879\u5904\u7406\u72B6\u6001\uFF0C\u5904\u7406\u4E2D\u8BBE\u7F6E\u4E3A true\uFF0C\u5904\u7406\u5B8C\u6BD5\u8BBE\u7F6E\u4E3A undefined"), timestamp: C().optional().nullable().describe("\u6D88\u606F\u65F6\u95F4\u6233"), deleted: $().optional().nullable().describe("\u662F\u5426\u5DF2\u5220\u9664\u8BE5\u4E0A\u4E0B\u6587\u9879") }), kr = M({ historyItems: Y.array().describe("\u4E0A\u4E0B\u6587\u9879\u6570\u7EC4"), processingItem: Y.optional().describe("\u6B63\u5728\u5904\u7406\u4E2D\u7684\u4E0A\u4E0B\u6587\u9879(\u9650\u4E00\u9879)") });
M({ role: H(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: h().describe("\u6D88\u606F\u5185\u5BB9"), name: h().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") });
Y.extend({ type: F("llm_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1ALLM\u6D88\u606F"), data: M({ role: H(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: h().describe("\u6D88\u606F\u5185\u5BB9"), name: h().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") }).describe("\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u56E0\u4E3A\u4E0A\u4E0B\u6587\u7BA1\u7406\u5E94\u8BE5\u4F7F\u7528\u66F4\u52A0\u7CBE\u7EC6\u7684\u7ED3\u6784\u3002LLM\u6D88\u606F\u4E0A\u4E0B\u6587\u9879\u53EA\u662F\u6700\u6734\u7D20\u7684\u5F62\u5F0F\u3002");
Y.extend({ type: F("starting_system_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u8D77\u59CB\u7CFB\u7EDF\u6D88\u606F"), data: M({ role: F("system").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: h().describe("\u6D88\u606F\u5185\u5BB9"), name: h().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Y.extend({ type: F("in_context_system_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u4E0A\u4E0B\u6587\u4E4B\u4E2D\u7684\u7CFB\u7EDF\u6D88\u606F"), data: M({ role: F("system").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: h().describe("\u6D88\u606F\u5185\u5BB9"), name: h().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Y.extend({ type: F("tool_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u5DE5\u5177\u6D88\u606F"), data: M({ role: F("tool").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: h().describe("\u6D88\u606F\u5185\u5BB9"), name: h().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Y.extend({ type: F("story_telling").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u8BB2\u6545\u4E8B\u6D88\u606F"), data: M({ role: H(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: h().describe("\u6D88\u606F\u5185\u5BB9"), name: h().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
const qs = M({ isCharacter: $().optional().default(false).describe("\u662F\u5426\u4E3A\u89D2\u8272\u6D88\u606F"), isEnv: $().optional().default(false).describe("\u662F\u5426\u4E3A\u73AF\u5883\u6D88\u606F"), isDM: $().optional().default(false).describe("\u662F\u5426\u4E3ADM\u6D88\u606F"), isUser: $().optional().default(false).describe("\u662F\u5426\u4E3A\u7528\u6237\u6D88\u606F"), characterId: h().optional().describe("\u89D2\u8272 ID"), userId: h().optional().describe("\u7528\u6237 ID"), content: h().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: C().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233"), name: h().optional().describe("\u53D1\u9001\u8005\u540D\u79F0"), role: H(["system", "user", "assistant", "tool"]).optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272") }), Ir = Y.extend({ type: F("participant_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u53C2\u4E0E\u8005\u6D88\u606F"), data: qs.describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") }), Ks = M({ isCharacter: $().optional().default(false).describe("\u662F\u5426\u4E3A\u89D2\u8272\u6D88\u606F"), isEnv: $().optional().default(false).describe("\u662F\u5426\u4E3A\u73AF\u5883\u6D88\u606F"), isDM: $().optional().default(false).describe("\u662F\u5426\u4E3ADM\u6D88\u606F"), isUser: $().optional().default(false).describe("\u662F\u5426\u4E3A\u7528\u6237\u6D88\u606F"), characterId: h().optional().describe("\u89D2\u8272 ID"), userId: h().optional().describe("\u7528\u6237 ID"), list: q(M({ content: h().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: C().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233"), originalIdx: C().optional().describe("\u539F\u59CB\u7D22\u5F15\u4F4D\u7F6E") })).describe("\u6D88\u606F\u5217\u8868"), name: h().optional().describe("\u53D1\u9001\u8005\u540D\u79F0"), role: H(["system", "user", "assistant", "tool"]).optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272") });
Y.extend({ type: F("participant_message_group").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u53C2\u4E0E\u8005\u6D88\u606F\u7EC4"), data: Ks.describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Ir.extend({ type: F("character_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u6D88\u606F"), data: qs.extend({ characterId: h().describe("\u89D2\u8272 ID") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Y.extend({ type: F("character_message_group").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u6D88\u606F\u7EC4"), data: Ks.extend({ characterId: h().describe("\u89D2\u8272 ID") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Y.extend({ type: F("placeholder").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u5360\u4F4D\u7B26"), data: ue().nullable().optional().describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9"), hidden: F(true).describe("\u5360\u4F4D\u7B26\u4E0A\u4E0B\u6587\u9879\u9ED8\u8BA4\u9690\u85CF") });
Y.extend({ type: F("alert").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u7A0B\u5E8F\u63D0\u793A"), data: M({ type: H(["info", "warning", "error", "success", "secondary", "contrast"]).describe("\u7A0B\u5E8F\u63D0\u793A\u7C7B\u578B"), content: h().describe("\u5185\u5BB9"), timestamp: C().optional().describe("\u65F6\u95F4\u6233") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Y.extend({ type: F("summary").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6458\u8981"), data: M({ range: pe([C().describe("\u8D77\u59CB\u7D22\u5F15\u4F4D\u7F6E"), C().describe("\u7ED3\u675F\u7D22\u5F15\u4F4D\u7F6E")]).describe("\u6458\u8981\u8986\u76D6\u7684\u5185\u5BB9\u8303\u56F4"), content: h().describe("\u6458\u8981\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Y.extend({ type: F("annotation").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6CE8\u89E3"), data: M({ target: C().describe("\u6CE8\u89E3\u76EE\u6807\u7684\u7D22\u5F15\u4F4D\u7F6E"), content: h().describe("\u6CE8\u89E3\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Y.extend({ type: F("performance_command").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6F14\u51FA\u6307\u4EE4"), data: M({ anchor: C().describe("\u6F14\u51FA\u6307\u4EE4\u7684\u951A\u70B9\u4F4D\u7F6E"), command: q(ue()).describe("\u6F14\u51FA\u6307\u4EE4\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Y.extend({ type: F("dm_intro").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1ADM \u5F00\u573A\u767D"), data: M({ content: h().describe("DM \u5F00\u573A\u767D\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Y.extend({ type: F("character_intro").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u5F00\u573A\u767D"), data: M({ characterId: h().optional().describe("\u89D2\u8272ID"), content: h().describe("\u89D2\u8272\u5F00\u573A\u767D\u5185\u5BB9"), timestamp: C().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
const At = M({ id: h().describe("\u4F1A\u8BDDID"), title: h().optional().describe("\u4F1A\u8BDD\u6807\u9898"), contextId: h().optional().nullable().describe("\u5173\u8054\u7684\u4E0A\u4E0B\u6587\u7684ID"), mode: h().describe("\u6A21\u5F0F"), modeConfig: ae(h(), ue()).describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: ae(h(), ue()).describe("\u6A21\u5F0F\u4E13\u7528\u72B6\u6001"), createdAt: C().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: C().describe("\u66F4\u65B0\u65F6\u95F4"), isActive: $().optional().describe("\u662F\u5426\u6D3B\u8DC3") }), Dr = M({ key: h().describe("\u53D8\u91CF\u952E"), type: F("boolean").describe("\u53D8\u91CF\u7C7B\u578B"), description: h().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: $().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: $().describe("\u521D\u59CB\u503C") }), Mr = M({ key: h().describe("\u53D8\u91CF\u952E"), type: F("number").describe("\u53D8\u91CF\u7C7B\u578B"), description: h().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: $().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: C().describe("\u521D\u59CB\u503C"), min: C().optional().describe("\u6700\u5C0F\u503C"), max: C().optional().describe("\u6700\u5927\u503C"), minDelta: C().optional().describe("(\u7EDD\u5BF9\u503C\u7684)\u6700\u5C0F\u53D8\u5316\u5E45\u5EA6"), maxDelta: C().optional().describe("(\u7EDD\u5BF9\u503C\u7684)\u6700\u5927\u53D8\u5316\u5E45\u5EA6"), asPercent: $().optional().describe("\u662F\u5426\u4E3A\u767E\u5206\u6BD4(\u754C\u9762\u6DFB\u52A0\u767E\u5206\u53F7)") }), Pr = M({ key: h().describe("\u53D8\u91CF\u952E"), type: F("string").describe("\u53D8\u91CF\u7C7B\u578B"), description: h().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: $().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: h().describe("\u521D\u59CB\u503C"), asEnum: $().optional().describe("\u662F\u5426\u4E3A\u679A\u4E3E"), enumValues: q(h()).optional().describe("\u679A\u4E3E\u503C\u5217\u8868") }), Ar = M({ key: h().describe("\u53D8\u91CF\u952E"), type: F("tags").describe("\u53D8\u91CF\u7C7B\u578B"), description: h().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: $().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: q(h()).describe("\u521D\u59CB\u6807\u7B7E\u5217\u8868"), asEnum: $().optional().describe("\u662F\u5426\u4E3A\u679A\u4E3E"), enumValues: q(h()).optional().describe("\u679A\u4E3E\u503C\u5217\u8868") }), Xs = gr("type", [Dr, Mr, Pr, Ar]);
ae(h(), Xs).describe("\u53D8\u91CF\u914D\u7F6E\u5B57\u5178");
const Tr = M({ key: h().describe("\u53D8\u91CF\u952E"), value: ve([$(), C(), h(), q(h())]).describe("\u53D8\u91CF\u503C") }), $r = ae(h(), Tr).describe("\u53D8\u91CF\u5B57\u5178");
H(["setTrue", "setFalse", "toggle", "delta", "setTo", "setValue", "add", "remove"]);
const Ws = pe([H(["setTrue", "setFalse", "toggle"]), h().describe("\u53D8\u91CF\u952E")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u5E03\u5C14\u7C7B\u578B"), Ys = pe([H(["delta", "setTo", "setValue"]), h().describe("\u53D8\u91CF\u952E"), C().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u6570\u5B57\u7C7B\u578B"), Qs = pe([H(["setTo", "setValue"]), h().describe("\u53D8\u91CF\u952E"), h().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u5B57\u7B26\u4E32\u7C7B\u578B"), Zs = pe([H(["add", "remove"]), h().describe("\u53D8\u91CF\u952E"), h().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u6807\u7B7E\u7C7B\u578B");
ve([Ws, Ys, Qs, Zs]).describe("\u53D8\u91CF\u64CD\u4F5C\u5143\u7EC4");
H(["isTrue", "isFalse", "eq", "is", "neq", "isNot", "gt", "gte", "lt", "lte", "includes", "notIncludes", "has", "hasAny", "hasAll", "llmJudge", "and", "or", "all", "any", "some"]);
const Er = pe([H(["isTrue", "isFalse"]), h().describe("\u53D8\u91CF\u952E")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5E03\u5C14\u7C7B\u578B"), Lr = pe([H(["eq", "neq", "is", "isNot"]), h().describe("\u53D8\u91CF\u952E"), ve([h(), C(), $()]).describe("\u6BD4\u8F83\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5B57\u9762\u91CF\u7C7B\u578B"), Rr = pe([H(["gt", "gte", "lt", "lte"]), h().describe("\u53D8\u91CF\u952E"), C().describe("\u6BD4\u8F83\u503C")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u6570\u5B57\u7C7B\u578B"), Fr = pe([H(["includes", "notIncludes", "has", "hasAny", "hasAll", "llmJudge"]), h().describe("\u53D8\u91CF\u952E"), ve([h(), C(), $()]).describe("\u53C2\u8003\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5185\u5BB9\u7C7B\u578B(\u5B57\u7B26\u4E32\u548C\u6807\u7B7E)"), Ur = pe([H(["hasAny", "hasAll"]), h().describe("\u53D8\u91CF\u952E"), ve([h(), C(), $()]).array().describe("\u53C2\u8003\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5185\u5BB9\u6570\u7EC4\u7C7B\u578B(\u5B57\u7B26\u4E32\u548C\u6807\u7B7E)"), Tt = ve([Er, Lr, Rr, Fr, Ur]).describe("\u6761\u4EF6\u5143\u7EC4"), ts = pe([H(["and", "or", "all", "any", "some"]), q(Tt).describe("\u5B50\u6761\u4EF6\u5143\u7EC4\u6570\u7EC4")]).describe("\u7B80\u5355\u590D\u5408\u6761\u4EF6\u5143\u7EC4"), ea = pe([H(["and", "or", "all", "any", "some"]), ve([Tt, ts]).array().describe("\u5B50\u6761\u4EF6\u5143\u7EC4\u6570\u7EC4")]).describe("\u590D\u6742\u590D\u5408\u6761\u4EF6\u5143\u7EC4"), Or = ve([Tt, ts, ea]).describe("\u6761\u4EF6\u5143\u7EC4\uFF08\u652F\u6301\u5355\u4E00\u6761\u4EF6\u548C\u590D\u5408\u6761\u4EF6\uFF09"), cs = M({ key: h().describe("\u68C0\u67E5\u9879\u952E"), description: h().describe("\u68C0\u67E5\u9879\u63CF\u8FF0"), condition: Or.describe("\u7ED3\u6784\u5316\u8FBE\u6210\u6761\u4EF6") }), ls = M({ key: h().describe("\u68C0\u67E5\u9879\u952E"), isCompleted: $().describe("\u662F\u5426\u5DF2\u5B8C\u6210") }), Hr = H(["dm_intro", "character_intro", "player_input", "dm_eval_changes", "dm_narrate_changes", "failure_check", "goal_check", "ending_check", "character_response"]), Br = H(["idle", "dm_intro_ready", "dm_intro_running", "dm_intro_done", "character_intro_ready", "character_intro_running", "character_intro_done", "player_input_ready", "player_input_running", "player_input_done", "character_response_ready", "character_response_running", "character_response_done", "dm_eval_changes_ready", "dm_eval_changes_running", "dm_eval_changes_done", "dm_narrate_changes_ready", "dm_narrate_changes_running", "dm_narrate_changes_done", "failure_check_ready", "failure_check_running", "failure_check_done", "goal_check_ready", "goal_check_running", "goal_check_done", "ending_check_ready", "ending_check_running", "ending_check_done", "ended"]), Rt = { idle: { label: "\u7A7A\u95F2", placeholder: "\u8BF7\u5148\u70B9\u51FB\u5F00\u59CB\u6216\u7EE7\u7EED...", inputEnabled: false }, dm_intro_ready: { label: "DM\u5F00\u573A\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u5F00\u573A\u767D...", inputEnabled: false }, dm_intro_running: { label: "DM\u5F00\u573A\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u5F00\u573A\u767D...", inputEnabled: false }, dm_intro_done: { label: "DM\u5F00\u573A\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u5F00\u573A\u767D\u5B8C\u6210...", inputEnabled: false }, character_intro_ready: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85\u89D2\u8272\u5F00\u573A\u767D...", inputEnabled: false }, character_intro_running: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u5F00\u573A\u767D...", inputEnabled: false }, character_intro_done: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u5F00\u573A\u767D\u5B8C\u6210...", inputEnabled: false }, player_input_ready: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u51C6\u5907\uFF09", placeholder: "\u5728\u8FD9\u91CC\u4E66\u5199\u4F60\u7684\u4E0B\u4E00\u5E55...", inputEnabled: true }, player_input_running: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u6B63\u5728\u63D0\u4EA4\u4F60\u7684\u8F93\u5165...", inputEnabled: false }, player_input_done: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u5B8C\u6210\uFF09", placeholder: "\u8F93\u5165\u5DF2\u63D0\u4EA4...", inputEnabled: false }, character_response_ready: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85\u89D2\u8272\u56DE\u5E94...", inputEnabled: false }, character_response_running: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u56DE\u5E94...", inputEnabled: false }, character_response_done: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u56DE\u5E94\u5B8C\u6210...", inputEnabled: false }, dm_eval_changes_ready: { label: "DM\u8BC4\u4F30\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u8BC4\u4F30...", inputEnabled: false }, dm_eval_changes_running: { label: "DM\u8BC4\u4F30\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u8BC4\u4F30...", inputEnabled: false }, dm_eval_changes_done: { label: "DM\u8BC4\u4F30\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u8BC4\u4F30\u5B8C\u6210...", inputEnabled: false }, dm_narrate_changes_ready: { label: "DM\u65C1\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u65C1\u767D...", inputEnabled: false }, dm_narrate_changes_running: { label: "DM\u65C1\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u65C1\u767D...", inputEnabled: false }, dm_narrate_changes_done: { label: "DM\u65C1\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u65C1\u767D\u5B8C\u6210...", inputEnabled: false }, failure_check_ready: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u5931\u8D25\u68C0\u67E5...", inputEnabled: false }, failure_check_running: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u5931\u8D25\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, failure_check_done: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u5931\u8D25\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, goal_check_ready: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u76EE\u6807\u68C0\u67E5...", inputEnabled: false }, goal_check_running: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u76EE\u6807\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, goal_check_done: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u76EE\u6807\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, ending_check_ready: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u7ED3\u5C40\u68C0\u67E5...", inputEnabled: false }, ending_check_running: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u7ED3\u5C40\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, ending_check_done: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u7ED3\u5C40\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, ended: { label: "\u5DF2\u7ED3\u675F", placeholder: "\u6311\u6218\u5DF2\u7ED3\u675F", inputEnabled: false } }, ta = M({ characterId: h().describe("\u8981\u6311\u6218\u7684\u89D2\u8272\u7684ID"), characterSnapshot: M({ name: h().describe("\u89D2\u8272\u540D\u79F0"), description: h().optional().describe("\u89D2\u8272\u63CF\u8FF0"), avatar: h().optional().describe("\u89D2\u8272\u5934\u50CF") }).optional().describe("\u89D2\u8272\u7684\u5FEB\u7167\u4FE1\u606F\uFF0C\u7528\u4E8E\u4FDD\u6301\u4F1A\u8BDD\u4E00\u81F4\u6027"), roleTaskPrompt: h().describe("\u89D2\u8272\u4EFB\u52A1\u63D0\u793A\u8BCD\uFF0C\u7528\u6765\u5F15\u5BFC\u89D2\u8272\u5728\u8BE5\u6311\u6218\u4E2D\u7684\u884C\u4E3A\u65B9\u5F0F"), userGuidance: h().describe("\u7528\u6237\u5F15\u5BFC\u8BED\uFF0C\u7528\u6765\u5F15\u5BFC\u7528\u6237\u5728\u8BE5\u6311\u6218\u4E2D\u7684\u884C\u4E3A"), variables: ae(h(), Xs).describe("\u53D8\u91CF\u8BB0\u5F55"), goals: q(cs.extend({ characterPrompt: h().describe("\u8FBE\u6210\u6B64\u76EE\u6807\u540E\uFF0C\u7ED9\u89D2\u8272\u589E\u52A0\u7684\u63D0\u793A\u8BCD"), userInfo: h().describe("\u8FBE\u6210\u6B64\u76EE\u6807\u540E\uFF0C\u7ED9\u7528\u6237\u7684\u63D0\u793A\u4FE1\u606F") })).describe("\u76EE\u6807\u5217\u8868"), failureChecks: q(cs.extend({ characterPrompt: h().describe("\u89E6\u53D1\u6B64\u5931\u8D25\u540E\uFF0C\u7ED9\u89D2\u8272\u589E\u52A0\u7684\u63D0\u793A\u8BCD"), userInfo: h().describe("\u89E6\u53D1\u6B64\u5931\u8D25\u540E\uFF0C\u7ED9\u7528\u6237\u7684\u63D0\u793A\u4FE1\u606F") })).describe("\u5931\u8D25\u6761\u4EF6\u5217\u8868\uFF0C\u4E0E\u76EE\u6807\u540C\u6784\uFF0C\u7528\u6765\u68C0\u67E5\u6311\u6218\u662F\u5426\u5931\u8D25") }), Gr = M({ currentPhase: Hr.describe("\u5F53\u524D\u9636\u6BB5\u540D\u79F0"), currentUIState: Br.describe("\u5F53\u524D UI \u72B6\u6001\u540D\u79F0"), shouldCheck: $().default(true).describe("\u662F\u5426\u9700\u8981\u6267\u884C\u68C0\u67E5\u6D41\u7A0B"), variableStates: $r.describe("\u6A21\u5F0F\u53D8\u91CF\u5B57\u5178"), goalStates: ls.array().describe("\u76EE\u6807\u69FD\u4F4D\u6570\u7EC4"), failureStates: ls.array().describe("\u5931\u8D25\u68C0\u67E5\u69FD\u4F4D\u6570\u7EC4") });
At.extend({ mode: F("challenge").describe("\u6A21\u5F0F"), modeConfig: ta.describe("\u6311\u6218\u6A21\u5F0F\u914D\u7F6E"), modeState: Gr.describe("\u6311\u6218\u6A21\u5F0F\u72B6\u6001") });
const Vr = ta.extend({ id: h().describe("\u6311\u6218\u5361ID"), name: h().describe("\u6311\u6218\u5361\u540D\u79F0"), description: h().describe("\u6311\u6218\u5361\u63CF\u8FF0"), tags: q(h()).optional().describe("\u6807\u7B7E\u6570\u7EC4"), createdAt: C().optional().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: C().optional().describe("\u66F4\u65B0\u65F6\u95F4") }), zr = es, Jr = Vr, qr = M({ id: h().describe("\u4F1A\u8BDDID"), title: h().optional().describe("\u4F1A\u8BDD\u6807\u9898"), contextId: h().optional().nullable().describe("\u5173\u8054\u7684\u4E0A\u4E0B\u6587\u7684ID"), mode: h().describe("\u6A21\u5F0F"), modeConfig: ae(h(), ue()).describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: ae(h(), ue()).describe("\u6A21\u5F0F\u4E13\u7528\u72B6\u6001"), characterId: h().optional().describe("\u89D2\u8272ID"), challengeId: h().optional().describe("\u6311\u6218ID"), createdAt: C().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: C().describe("\u66F4\u65B0\u65F6\u95F4"), isActive: $().optional().describe("\u662F\u5426\u6D3B\u8DC3") }), Kr = Y, Me = { MASTER_DB_NAME: "silly-tavern-master-db", SESSION_DB_PREFIX: "silly-tavern-session-" };
function Xr(s) {
  return typeof s == "object" && s !== null && Sa(s) !== void 0;
}
function vt(s) {
  if (Xr(s)) return me(s);
  if (Array.isArray(s)) return s.map((t) => vt(t));
  if (s && typeof s == "object") {
    const t = {};
    for (const [a, r] of Object.entries(s)) t[a] = vt(r);
    return t;
  }
  return s;
}
function Wr(s) {
  const t = `${Me.SESSION_DB_PREFIX}${s}`, a = new bt(t);
  return a.version(2).stores({ contextItems: "id, type, timestamp, idx" }), { contextItems: nt(kt({ id: "contextItems", schema: Kr, getKey: (r) => r.id || "", dbName: t })), dexieInstance: a };
}
const _t = /* @__PURE__ */ new Map(), sa = typeof BroadcastChannel < "u" ? new BroadcastChannel("silly-tavern-session-db") : null;
sa == null ? void 0 : sa.addEventListener("message", (s) => {
  const t = s.data;
  (t == null ? void 0 : t.type) === "close" && t.sessionId && st(t.sessionId);
});
class aa {
  constructor(t) {
    __publicField(this, "sessionId");
    __publicField(this, "database");
    this.sessionId = t, this.database = this.initDatabase();
  }
  initDatabase() {
    let t = _t.get(this.sessionId);
    return t || (t = Wr(this.sessionId), _t.set(this.sessionId, t)), t;
  }
  async getContextItems() {
    return (await this.database.contextItems.utils.getTable().toArray()).sort((r, n) => {
      const i = r.idx ?? 0, o = n.idx ?? 0;
      if (i !== o) return i - o;
      const u = r.orderRef ?? 0, d = n.orderRef ?? 0;
      if (u !== d) return u - d;
      const l = r.timestamp ?? 0, m = n.timestamp ?? 0;
      return l !== m ? l - m : (r.id || "").localeCompare(n.id || "");
    });
  }
  get contextItemsCollectionInstance() {
    return this.database.contextItems;
  }
  async addContextItem(t) {
    return await this.database.contextItems.utils.getTable().put(vt(t));
  }
  async addContextItems(t) {
    return await this.database.contextItems.utils.getTable().bulkPut(vt(t));
  }
  async deleteContextItem(t) {
    return await this.database.contextItems.utils.getTable().delete(t);
  }
  async clearContextItems() {
    return await this.database.contextItems.utils.getTable().clear();
  }
}
function st(s) {
  const t = `${Me.SESSION_DB_PREFIX}${s}`, a = _t.get(s);
  if (a) {
    try {
      a.dexieInstance.close();
    } catch (r) {
      console.warn(`Failed to close database ${t} before deletion:`, r);
    }
    _t.delete(s);
  }
}
function ra(s) {
  sa == null ? void 0 : sa.postMessage({ type: "close", sessionId: s });
}
async function na(s) {
  const t = `${Me.SESSION_DB_PREFIX}${s}`;
  ra(s), st(s);
  try {
    await bt.delete(t);
  } catch (a) {
    if (a instanceof Error && a.name === "DatabaseClosedError") {
      console.warn(`Database ${t} is still in use, retrying deletion...`), await new Promise((r) => setTimeout(r, 500));
      try {
        await bt.delete(t);
      } catch (r) {
        throw console.error(`Failed to delete database ${t} after retry:`, r), r;
      }
    } else throw a;
  }
}
const $t = Object.freeze(Object.defineProperty({ __proto__: null, SessionDB: aa, broadcastCloseSessionDatabase: ra, closeSessionDatabase: st, deleteSessionDatabase: na }, Symbol.toStringTag, { value: "Module" })), Yr = new bt(Me.MASTER_DB_NAME);
Yr.version(1).stores({ characters: "id, name, creator, createdAt, updatedAt", challenges: "id, name, createdAt, updatedAt", sessions: "id, characterId, challengeId, mode, updatedAt" });
const Pe = nt(kt({ id: "characters", schema: zr, getKey: (s) => s.id, dbName: Me.MASTER_DB_NAME })), Xe = nt(kt({ id: "challenges", schema: Jr, getKey: (s) => s.id, dbName: Me.MASTER_DB_NAME })), Ae = nt(kt({ id: "sessions", schema: qr, getKey: (s) => s.id, dbName: Me.MASTER_DB_NAME })), Q = { characters: { getTable: () => Pe.utils.getTable(), add: async (s) => (await Q.characters.getTable()).add(s), put: async (s) => (await Q.characters.getTable()).put(s), delete: async (s) => (await Q.characters.getTable()).delete(s) }, challenges: { getTable: () => Xe.utils.getTable(), add: async (s) => (await Q.challenges.getTable()).add(s), put: async (s) => (await Q.challenges.getTable()).put(s), delete: async (s) => (await Q.challenges.getTable()).delete(s), find: async (s) => (await Q.challenges.getTable()).get(s), findLive: (s) => nt(za({ id: `find-challenge-${s || "none"}`, startSync: true, query: (t) => s ? t.from({ challenge: Xe }).where(({ challenge: a }) => Ja(a.id, s)).select(({ challenge: a }) => a) : t.from({ challenge: Xe }).where(() => false) })) }, sessions: { getTable: () => Ae.utils.getTable(), add: async (s) => (await Q.sessions.getTable()).add(s), put: async (s) => (await Q.sessions.getTable()).put(s), update: async (s, t) => (await Q.sessions.getTable()).update(s, t), delete: async (s) => {
  await (await Q.sessions.getTable()).delete(s), await na(s);
} } }, ss = Object.freeze(Object.defineProperty({ __proto__: null, ChallengesCollection: Xe, CharactersCollection: Pe, SessionsMetadataCollection: Ae, masterDb: Q }, Symbol.toStringTag, { value: "Module" }));
function to(s) {
  const [t, a] = b.useState(""), [r, n] = b.useState([]), i = b.useMemo(() => {
    const l = /* @__PURE__ */ new Set();
    for (const m of s.items) for (const c of s.getTags(m)) l.add(c);
    return Array.from(l).sort();
  }, [s.items, s.getTags]), o = b.useMemo(() => s.items.filter((l) => {
    const m = s.getSearchableContent(l).toLowerCase().includes(t.toLowerCase()), c = s.getTags(l), p = r.length === 0 || r.every((x) => c.includes(x));
    return m && p;
  }), [s.items, t, r, s.getSearchableContent, s.getTags]), u = (l) => {
    n((m) => m.includes(l) ? m.filter((c) => c !== l) : [...m, l]);
  }, d = b.useMemo(() => o.map((l) => ({ ...l, id: s.getId(l) })), [o, s.getId]);
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between", children: [s.title && e.jsx("div", { className: "space-y-1", children: e.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: s.title }) }), e.jsxs("div", { className: "flex items-center gap-3 w-full md:w-auto", children: [s.actions, e.jsxs("div", { className: "relative flex-1 md:w-72", children: [e.jsx(et, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), e.jsx(L, { type: "search", placeholder: s.placeholder || "\u641C\u7D22...", className: "pl-9", value: t, onChange: (l) => a(l.target.value) })] })] })] }), e.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [e.jsxs("div", { className: "flex items-center gap-1.5 mr-2 text-sm text-muted-foreground", children: [e.jsx(Wa, { className: "w-4 h-4" }), "\u6807\u7B7E\u8FC7\u6EE4:"] }), i.map((l) => e.jsx(U, { variant: r.includes(l) ? "default" : "outline", className: "cursor-pointer", onClick: () => u(l), children: l }, l)), r.length > 0 && e.jsx(N, { variant: "ghost", size: "sm", onClick: () => n([]), className: "h-7 px-2 text-xs", type: "button", children: "\u6E05\u9664" })] }), d.length > 0 ? e.jsx(Oa, { items: d, renderItem: (l) => s.renderCard(l), gap: 16, animate: false, scaleOnHover: false }) : e.jsx("div", { className: "py-20 text-center text-muted-foreground", children: "\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u5361\u7247\u3002" })] });
}
const so = (s) => {
  var _a;
  const t = !!s.character.imageBase64, a = !!s.character.avatar, r = t || !t && a;
  return e.jsxs(B, { className: `relative mx-auto w-full max-w-sm ${r ? "pt-0" : ""} hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col`, onClick: () => {
    var _a2;
    return (_a2 = s.onClick) == null ? void 0 : _a2.call(s, s.character);
  }, children: [r && e.jsxs("div", { className: "relative", children: [t ? e.jsx("img", { src: s.character.imageBase64, alt: `${s.character.name} \u89D2\u8272\u56FE\u7247`, className: "relative z-20 w-full object-contain" }) : e.jsx("div", { className: "relative z-20 w-full aspect-square bg-muted flex items-center justify-center", children: e.jsx("img", { src: s.character.avatar, alt: `${s.character.name} \u5934\u50CF`, className: "w-[66%] h-[66%] object-cover" }) }), e.jsx("div", { className: "z-21 absolute bottom-0 left-0 right-0 p-4", children: e.jsxs("div", { className: "flex items-center gap-3", children: [a && e.jsx("div", { className: "bg-foreground/90 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-black/90 shrink-0", children: e.jsx("img", { src: s.character.avatar, alt: `${s.character.name} \u5934\u50CF`, className: "w-full h-full object-cover" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("div", { className: "text-white font-bold text-md truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.96)]", children: s.character.name }), e.jsx("div", { className: "text-white/80 font-medium text-sm truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.968)]", children: (s.character.creator ? `by ${s.character.creator}` : void 0) ?? s.character.nickname })] })] }) })] }), e.jsx(z, { className: r ? "hidden" : "", children: e.jsx("div", { className: "flex justify-between items-start", children: e.jsxs("div", { className: "flex items-center gap-3", children: [s.character.avatar && e.jsx("div", { className: "bg-muted w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border shrink-0", children: e.jsx("img", { src: s.character.avatar, alt: `${s.character.name} \u5934\u50CF`, className: "w-full h-full object-cover" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx(J, { className: "text-lg truncate", children: s.character.name }), e.jsx(se, { className: "truncate", children: (s.character.creator ? `by ${s.character.creator}` : void 0) ?? s.character.nickname })] })] }) }) }), e.jsxs(G, { className: "grow space-y-2", children: [e.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3", children: s.character.description }), ((_a = s.character.tags) == null ? void 0 : _a.length) > 0 && e.jsx("div", { className: "flex flex-wrap gap-1", children: s.character.tags.slice(0, 5).map((n, i) => e.jsx(U, { variant: "secondary", className: "text-[10px] px-1.5 py-0", children: n }, `[${i}]${n}`)) })] })] });
};
function Qr(s) {
  return { keys: s.keys || [], content: s.content || "", extensions: s.extensions || {}, enabled: s.enabled !== void 0 ? s.enabled : true, insertion_order: s.insertion_order !== void 0 ? s.insertion_order : 0, case_sensitive: s.case_sensitive !== void 0 ? s.case_sensitive : false, use_regex: s.use_regex !== void 0 ? s.use_regex : false, constant: s.constant !== void 0 ? s.constant : false, name: s.name || void 0, priority: s.priority || void 0, id: s.id || void 0, comment: s.comment || void 0, selective: s.selective !== void 0 ? s.selective : false, secondary_keys: s.secondary_keys || void 0, position: s.position || void 0 };
}
function ia(s) {
  if (s) return { name: s.name || void 0, description: s.description || void 0, scan_depth: s.scan_depth || void 0, token_budget: s.token_budget || void 0, recursive_scanning: s.recursive_scanning !== void 0 ? s.recursive_scanning : false, extensions: s.extensions || {}, entries: (s.entries || []).map(Qr) };
}
function We(s) {
  const t = Ue.parse({ ...s, creator_notes: "", system_prompt: "", post_history_instructions: "", alternate_greetings: [], character_book: void 0, tags: [], creator: "", character_version: "", extensions: {}, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return Zt.parse({ spec: "chara_card_v3", spec_version: "3.0", data: t });
}
function oa(s) {
  const t = { ...s.data };
  t.character_book && (t.character_book = ia(t.character_book));
  const a = Ue.parse({ ...t, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return Zt.parse({ spec: "chara_card_v3", spec_version: "3.0", data: a });
}
function be(s, t) {
  var _a, _b, _c, _d;
  const a = { ...s.data };
  a.character_book ? a.character_book = ia(a.character_book) : a.character_book = void 0;
  const r = Ue.parse(a), n = ((_a = r.extensions) == null ? void 0 : _a.avatar) || ((_b = r.extensions) == null ? void 0 : _b.image) || void 0;
  let i = t;
  if (!i) {
    if (r.assets) {
      const o = r.assets.find((u) => u.type === "icon" && u.name === "main");
      (o == null ? void 0 : o.uri.startsWith("data:")) && (i = o.uri);
    }
    if (!i && r.extensions) {
      const o = r.extensions.imageBase64 || r.extensions.image;
      o && typeof o == "string" && o.startsWith("data:") && (i = o);
    }
  }
  return es.parse({ ...r, id: crypto.randomUUID(), avatar: n, imageBase64: i, createdAt: r.creation_date || ((_c = r.extensions) == null ? void 0 : _c.create_date) || Date.now(), updatedAt: r.modification_date || ((_d = r.extensions) == null ? void 0 : _d.update_date) || Date.now() });
}
function ca(s) {
  const t = { ...s }, a = ["id", "createdAt", "updatedAt", "avatar", "imageBase64"];
  for (const o of a) delete t[o];
  const r = { ...s.extensions || {} };
  s.avatar && (r.avatar = s.avatar), s.imageBase64 && (r.imageBase64 = s.imageBase64);
  let n = t.assets || [];
  if (s.imageBase64) {
    const o = { type: "icon", uri: s.imageBase64, name: "main", ext: "png" }, u = n.findIndex((d) => d.type === "icon" && d.name === "main");
    u >= 0 ? n[u] = o : n = [o, ...n];
  }
  const i = Ue.parse({ ...t, extensions: r, assets: n, creation_date: s.createdAt, modification_date: s.updatedAt });
  return Zt.parse({ spec: "chara_card_v3", spec_version: "3.0", data: i });
}
function Zr(s) {
  const t = JSON.parse(s);
  if (typeof t == "object" && t !== null && "id" in t && "name" in t && "first_mes" in t) return es.parse(t);
  if (typeof t == "object" && t !== null && "spec" in t) {
    const a = t.spec;
    if (a === "chara_card_v3") return be(t);
    if (a === "chara_card_v2") return be(oa(t));
  }
  try {
    const a = Js.parse(t);
    return be(We(a));
  } catch {
    if (typeof t == "object" && t !== null && "name" in t) {
      const a = t;
      return be(We({ name: a.name || "", description: a.description || "", personality: a.personality || "", scenario: a.scenario || "", first_mes: a.first_mes || "", mes_example: a.mes_example || "" }));
    }
    throw new Error("\u65E0\u6CD5\u89E3\u6790JSON\u4E2D\u7684\u89D2\u8272\u6570\u636E");
  }
}
async function en(s) {
  const t = await s.arrayBuffer(), a = Vs(new Uint8Array(t)), r = a.find((u) => u.name === "tEXt" && Ce.decode(u.data).keyword === "chara"), n = a.find((u) => u.name === "tEXt" && Ce.decode(u.data).keyword === "ccv3"), i = new Blob([t], { type: "image/png" }), o = await new Promise((u) => {
    const d = new FileReader();
    d.onloadend = () => u(d.result), d.readAsDataURL(i);
  });
  if (n) {
    const u = Ce.decode(n.data), d = JSON.parse(ms(u.text));
    return typeof d == "object" && d !== null && "spec" in d && d.spec === "chara_card_v3" ? be(d, o) : be(We(d), o);
  }
  if (r) {
    const u = Ce.decode(r.data), d = JSON.parse(ms(u.text));
    if (typeof d == "object" && d !== null && "spec" in d) {
      const l = d.spec;
      if (l === "chara_card_v3") return be(d, o);
      if (l === "chara_card_v2") return be(oa(d), o);
    }
    try {
      const l = Js.parse(d);
      return be(We(l), o);
    } catch {
      if (typeof d == "object" && d !== null && "name" in d) {
        const l = d;
        return be(We({ name: l.name || "", description: l.description || "", personality: l.personality || "", scenario: l.scenario || "", first_mes: l.first_mes || "", mes_example: l.mes_example || "" }), o);
      }
      throw new Error("\u65E0\u6CD5\u89E3\u6790\u56FE\u7247\u4E2D\u7684\u89D2\u8272\u6570\u636E");
    }
  }
  throw new Error("\u672A\u5728\u56FE\u7247\u4E2D\u627E\u5230\u89D2\u8272\u6570\u636E (tEXt \u5757\u7F3A\u5931)");
}
function ao(s) {
  if (!s.imageBase64) throw new Error("\u89D2\u8272\u6CA1\u6709\u56FE\u50CF\u6570\u636E\uFF0C\u65E0\u6CD5\u5BFC\u51FA\u4E3A PNG \u89D2\u8272\u5361");
  const t = s.imageBase64.split(",")[1], a = atob(t), r = a.length, n = new Uint8Array(r);
  for (let v = 0; v < r; v++) n[v] = a.charCodeAt(v);
  const i = Vs(n), o = ca(s), u = ds(JSON.stringify(o)), d = i.filter((v) => !(v.name === "tEXt" && (Ce.decode(v.data).keyword === "chara" || Ce.decode(v.data).keyword === "ccv3"))), l = Ce.encode("ccv3", u), m = { spec: "chara_card_v2", spec_version: "2.0.0", data: o.data }, c = ds(JSON.stringify(m)), p = Ce.encode("chara", c), x = d.findIndex((v) => v.name === "IEND");
  x !== -1 ? d.splice(x, 0, p, l) : d.push(p, l);
  const f = pr(d);
  return new Blob([f], { type: "image/png" });
}
const tn = /%([0-9A-F]{2})/g;
function ds(s) {
  return btoa(encodeURIComponent(s).replace(tn, function(a, r) {
    return String.fromCharCode(Number.parseInt(r, 16));
  }));
}
function ms(s) {
  return decodeURIComponent(atob(s).split("").map((t) => `%${`00${t.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
}
function la(s, t = {}) {
  var _a;
  const { includeImageBase64: a = false } = t, r = ca(s);
  if (a) return JSON.stringify(r, null, 2);
  {
    const n = { ...r, data: { ...r.data, assets: ((_a = r.data.assets) == null ? void 0 : _a.map((i) => ({ ...i, uri: i.uri.startsWith("data:") ? "" : i.uri }))) || [] } };
    return JSON.stringify(n, null, 2);
  }
}
const ro = (s) => {
  const [t, a] = b.useState(null), [r, n] = b.useState(false), [i, o] = b.useState(null), [u, d] = b.useState(false), l = b.useId(), m = b.useRef(null), c = (j) => {
    var _a;
    const g = (_a = j.target.files) == null ? void 0 : _a[0];
    g && (g.type === "image/png" || g.type === "application/json" || g.name.endsWith(".json") ? (a(g), o(null)) : (o("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), a(null)));
  }, p = (j) => {
    j.preventDefault(), j.stopPropagation(), d(true);
  }, x = (j) => {
    j.preventDefault(), j.stopPropagation(), d(false);
  }, f = (j) => {
    j.preventDefault(), j.stopPropagation(), d(false);
    const g = j.dataTransfer.files;
    if (g.length > 0) {
      const _ = g[0];
      _.type === "image/png" || _.type === "application/json" || _.name.endsWith(".json") ? (a(_), o(null)) : (o("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), a(null));
    }
  }, v = async () => {
    if (t) {
      n(true), o(null);
      try {
        if (t.type === "image/png") {
          const j = await en(t);
          s.onImport(j);
        } else {
          const j = await t.text(), g = Zr(j);
          s.onImport(g);
        }
        s.onOpenChange(false), a(null), d(false);
      } catch (j) {
        console.error("Import error:", j), o(j instanceof Error ? j.message : "\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F");
      } finally {
        n(false);
      }
    }
  };
  return e.jsx(St, { open: s.open, onOpenChange: s.onOpenChange, children: e.jsxs(wt, { className: "sm:max-w-md max-h-[80vh] overflow-y-auto", children: [e.jsxs(Ct, { children: [e.jsx(rt, { children: "\u5BFC\u5165\u89D2\u8272/\u6311\u6218\u5361" }), e.jsx(zt, { children: "\u652F\u6301 SillyTavern \u683C\u5F0F\u7684 PNG \u89D2\u8272\u5361\u6216 JSON \u6570\u636E\u3002" })] }), e.jsxs("div", { className: "space-y-4 py-4", children: [e.jsxs("div", { className: `border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer ${u ? "border-primary bg-primary/10 scale-105" : t ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:border-primary/50"}`, onDragOver: p, onDragLeave: x, onDrop: f, onClick: () => {
    var _a;
    return (_a = m.current) == null ? void 0 : _a.click();
  }, children: [e.jsx("div", { className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center", children: (t == null ? void 0 : t.type) === "application/json" ? e.jsx(Es, { className: "w-6 h-6 text-primary" }) : e.jsx(Bt, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-center", children: [e.jsx("p", { className: "text-sm font-medium", children: u ? "\u91CA\u653E\u6587\u4EF6\u4EE5\u4E0A\u4F20" : t ? t.name : "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PNG \u6216 JSON (\u6700\u5927 5MB)" })] })] }), e.jsx(L, { ref: m, type: "file", accept: "image/png,.json", className: "hidden", onChange: c }), i && e.jsxs(Ha, { variant: "destructive", children: [e.jsx(Ls, { className: "h-4 w-4" }), e.jsx(Ba, { children: "\u9519\u8BEF" }), e.jsx(Ga, { children: i })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: l, className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "\u901A\u8FC7 URL \u5BFC\u5165" }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(L, { id: l, placeholder: "https://...", className: "rounded-lg" }), e.jsx(N, { variant: "secondary", className: "shrink-0 rounded-lg", type: "button", children: "\u6293\u53D6" })] })] })] }), e.jsxs(Cs, { children: [e.jsx(N, { variant: "outline", onClick: () => s.onOpenChange(false), type: "button", className: "rounded-lg", children: "\u53D6\u6D88" }), e.jsx(N, { disabled: !t || r, onClick: v, type: "button", className: "rounded-lg min-w-20", children: r ? "\u5904\u7406\u4E2D..." : "\u5F00\u59CB\u5BFC\u5165" })] })] }) });
};
function no({ characters: s, trigger: t }) {
  const [a, r] = b.useState(false), [n, i] = b.useState(false), o = b.useId(), u = () => {
    if (s.length === 0) {
      V.error("\u6CA1\u6709\u89D2\u8272\u53EF\u5BFC\u51FA");
      return;
    }
    try {
      const d = s.map((p) => {
        const x = la(p, { includeImageBase64: n });
        return JSON.parse(x);
      }), l = new Blob([JSON.stringify(d, null, 2)], { type: "application/json" }), m = URL.createObjectURL(l), c = document.createElement("a");
      c.href = m, c.download = `characters-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, document.body.appendChild(c), c.click(), document.body.removeChild(c), URL.revokeObjectURL(m), V.success(`\u6210\u529F\u5BFC\u51FA ${s.length} \u4E2A\u89D2\u8272`), r(false);
    } catch (d) {
      V.error("\u5BFC\u51FA\u5931\u8D25"), console.error("Export error:", d);
    }
  };
  return e.jsxs(St, { open: a, onOpenChange: r, children: [e.jsx(ks, { asChild: true, children: t || e.jsxs(N, { variant: "outline", size: "sm", className: "flex items-center gap-2", type: "button", children: [e.jsx(Ya, { className: "w-4 h-4" }), "\u6279\u91CF\u5BFC\u51FA"] }) }), e.jsxs(wt, { className: "sm:max-w-md", children: [e.jsx(Ct, { children: e.jsx(rt, { children: "\u5BFC\u51FA\u89D2\u8272" }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u5C06\u5BFC\u51FA ", s.length, " \u4E2A\u89D2\u8272\u4E3A JSON \u6587\u4EF6\u3002"] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Jt, { id: `${o}-include-image`, checked: n, onCheckedChange: (d) => i(d === true) }), e.jsx(k, { htmlFor: `${o}-include-image`, className: "text-sm", children: "\u5305\u542B Base64 \u56FE\u50CF\u6570\u636E" })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: n ? "\u6587\u4EF6\u5C06\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5927\u4F46\u5B8C\u6574\u3002" : "\u6587\u4EF6\u4E0D\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5C0F\u4F46\u9700\u8981\u5355\u72EC\u5904\u7406\u56FE\u50CF\u3002" })] }), e.jsxs("div", { className: "flex justify-end gap-2", children: [e.jsx(N, { variant: "outline", onClick: () => r(false), children: "\u53D6\u6D88" }), e.jsx(N, { onClick: u, children: "\u5BFC\u51FA" })] })] })] });
}
const sn = { id: "preset-char-001", name: "\u6797\u6653\u8587", description: "\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\u3002\u5979\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\uFF0C\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u6E29\u67D4\u6CBB\u6108\u7CFB\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u60C5\u611F\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u540D\u53EB\u6797\u6653\u8587\u3002\u4F60\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\uFF0C\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u4F60\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\uFF0C\u6027\u683C\u6E29\u548C\uFF0C\u5BCC\u6709\u540C\u60C5\u5FC3\u3002\u4F60\u8BF4\u8BDD\u6E29\u67D4\uFF0C\u603B\u662F\u8003\u8651\u522B\u4EBA\u7684\u611F\u53D7\u3002", post_history_instructions: "\u4FDD\u6301\u6E29\u67D4\u5584\u826F\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u540C\u60C5\u5FC3\u548C\u5E2E\u52A9\u4ED6\u4EBA\u7684\u610F\u613F\u3002", personality: "\u6E29\u67D4\u3001\u5584\u826F\u3001\u5BCC\u6709\u540C\u60C5\u5FC3\u3001\u4E50\u4E8E\u52A9\u4EBA\u3001\u795E\u79D8", mes_example: "\u6211\u770B\u5230\u4F60\u53D7\u4F24\u4E86\uFF0C\u8BA9\u6211\u5E2E\u4F60\u6CBB\u7597\u5427\u3002\u6211\u8FD9\u91CC\u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u8349\u836F\uFF0C\u5E94\u8BE5\u80FD\u5E2E\u5230\u4F60\u3002", first_mes: "\u4F60\u597D\uFF0C\u6211\u662F\u6797\u6653\u8587\uFF0C\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u8349\u836F\u94FA", character_version: "1.0", tags: ["\u6CBB\u6108", "\u6E29\u67D4", "\u5584\u826F", "\u8349\u836F\u5E08"], createdAt: 1706e9, updatedAt: 1706e9 }, an = { id: "preset-char-002", name: "\u5F20\u94C1\u67F1", description: "\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\u3002\u4ED6\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\uFF0C\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u52C7\u6562\u529B\u91CF\u578B\u7684\u7537\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u6218\u6597\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u540D\u53EB\u5F20\u94C1\u67F1\u3002\u4F60\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\uFF0C\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\u3002\u4F60\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\uFF0C\u6027\u683C\u521A\u6B63\u4E0D\u963F\u3002\u4F60\u8BF4\u8BDD\u76F4\u723D\uFF0C\u603B\u662F\u5C55\u73B0\u52C7\u6C14\u548C\u529B\u91CF\u3002", post_history_instructions: "\u4FDD\u6301\u52C7\u6562\u521A\u6B63\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u4FDD\u62A4\u4ED6\u4EBA\u7684\u52C7\u6C14\u3002", personality: "\u52C7\u6562\u3001\u521A\u6B63\u3001\u529B\u91CF\u5F3A\u5927\u3001\u4FDD\u62A4\u5F31\u8005\u3001\u76F4\u723D", mes_example: "\u522B\u6015\uFF0C\u6709\u6211\u5728\uFF01\u6211\u4F1A\u4FDD\u62A4\u4F60\u4EEC\u7684\u3002\u8FD9\u4E2A\u602A\u7269\uFF0C\u6211\u6765\u5BF9\u4ED8\uFF01", first_mes: "\u563F\uFF0C\u670B\u53CB\uFF01\u6211\u662F\u5F20\u94C1\u67F1\uFF0C\u5C0F\u9547\u7684\u94C1\u5320\u3002\u9700\u8981\u5E2E\u5FD9\u953B\u9020\u6B66\u5668\u5417\uFF1F\u8FD8\u662F\u6709\u4EC0\u4E48\u9EBB\u70E6\u4E8B\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u94C1\u5320\u94FA", character_version: "1.0", tags: ["\u6218\u6597", "\u52C7\u6562", "\u94C1\u5320", "\u5B88\u62A4\u8005"], createdAt: 1706e9, updatedAt: 1706e9 }, rn = { id: "preset-char-003", name: "\u674E\u667A\u6167", description: "\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\u3002\u5979\u662F\u5C0F\u9547\u7684\u667A\u8005\uFF0C\u603B\u662F\u89E3\u7B54\u7591\u60D1\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u667A\u6167\u77E5\u8BC6\u578B\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u89E3\u8C1C\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u540D\u53EB\u674E\u667A\u6167\u3002\u4F60\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\uFF0C\u662F\u5C0F\u9547\u7684\u667A\u8005\u3002\u4F60\u603B\u662F\u89E3\u7B54\u7591\u60D1\uFF0C\u6027\u683C\u777F\u667A\u3002\u4F60\u8BF4\u8BDD\u6E29\u548C\uFF0C\u603B\u662F\u5C55\u73B0\u667A\u6167\u548C\u8010\u5FC3\u3002", post_history_instructions: "\u4FDD\u6301\u777F\u667A\u6E29\u548C\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u89E3\u7B54\u7591\u60D1\u7684\u8010\u5FC3\u3002", personality: "\u806A\u660E\u3001\u777F\u667A\u3001\u77E5\u8BC6\u6E0A\u535A\u3001\u6E29\u548C\u3001\u8010\u5FC3", mes_example: "\u8BA9\u6211\u60F3\u60F3\u8FD9\u4E2A\u95EE\u9898...\u6839\u636E\u53E4\u7C4D\u8BB0\u8F7D\uFF0C\u8FD9\u5E94\u8BE5\u662F\u8FD9\u6837\u7684\u3002\u8BA9\u6211\u4E3A\u4F60\u8BE6\u7EC6\u89E3\u91CA\u3002", first_mes: "\u6B22\u8FCE\u6765\u5230\u6211\u7684\u4E66\u623F\uFF0C\u65C5\u884C\u8005\u3002\u6211\u662F\u674E\u667A\u6167\uFF0C\u5C0F\u9547\u7684\u5B66\u8005\u3002\u6709\u4EC0\u4E48\u77E5\u8BC6\u4E0A\u7684\u7591\u95EE\u9700\u8981\u89E3\u7B54\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u4E66\u623F", character_version: "1.0", tags: ["\u667A\u6167", "\u5B66\u8005", "\u77E5\u8BC6", "\u6E29\u548C"], createdAt: 1706e9, updatedAt: 1706e9 }, io = [sn, an, rn], oo = (s) => {
  var _a;
  return e.jsxs(B, { className: "hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col", onClick: () => {
    var _a2;
    return (_a2 = s.onClick) == null ? void 0 : _a2.call(s, s.challenge);
  }, children: [e.jsx(z, { className: "pb-2", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center", children: e.jsx(Re, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(J, { className: "text-lg", children: s.challenge.name }), e.jsx(se, { className: "line-clamp-1", children: (_a = s.challenge.tags) == null ? void 0 : _a.join(", ") })] })] }) }), e.jsxs(G, { className: "grow", children: [e.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3 mb-4", children: s.challenge.description }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "text-xs font-medium flex items-center gap-1", children: [e.jsx(Dt, { className: "w-3 h-3" }), "\u76EE\u6807 (", s.challenge.goals.length, "):"] }), e.jsxs("ul", { className: "text-xs text-muted-foreground list-disc list-inside", children: [s.challenge.goals.slice(0, 2).map((t, a) => e.jsx("li", { className: "line-clamp-1", children: t.description }, a)), s.challenge.goals.length > 2 && e.jsxs("li", { className: "list-none", children: ["...\u53CA\u5176\u4ED6 ", s.challenge.goals.length - 2, " \u4E2A\u76EE\u6807"] })] })] })] }), e.jsx(qt, { className: "pt-0 pb-4 border-t-0", children: e.jsx(N, { variant: "outline", size: "sm", className: "w-full text-xs", onClick: (t) => {
    var _a2;
    t.stopPropagation(), (_a2 = s.onStartSession) == null ? void 0 : _a2.call(s, s.challenge);
  }, type: "button", children: "\u5F00\u59CB\u6311\u6218" }) })] });
}, nn = { id: "preset-challenge-001", name: "\u5C0F\u9547\u5B88\u62A4\u8005", description: "\u5C0F\u9547\u9762\u4E34\u602A\u7269\u5A01\u80C1\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u5B88\u62A4\u8005\u9700\u8981\u6536\u96C6\u6750\u6599\u953B\u9020\u6B66\u5668\uFF0C\u4FDD\u62A4\u5C0F\u9547\u5C45\u6C11\u3002\u6536\u96C6\u8DB3\u591F\u7684\u6750\u6599\u5E76\u51FB\u8D25\u602A\u7269\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684\u5B88\u62A4\u8005\uFF0C\u4E0E\u73A9\u5BB6\u4E00\u8D77\u4FDD\u62A4\u5C0F\u9547\u514D\u53D7\u602A\u7269\u5A01\u80C1\u3002\u4F60\u9700\u8981\u79EF\u6781\u53C2\u4E0E\u6536\u96C6\u6750\u6599\u3001\u953B\u9020\u6B66\u5668\u548C\u6218\u6597\u7684\u8FC7\u7A0B\uFF0C\u540C\u65F6\u4E0E\u73A9\u5BB6\u5EFA\u7ACB\u4FE1\u4EFB\u5173\u7CFB\u3002", userGuidance: "\u4F5C\u4E3A\u5B88\u62A4\u8005\uFF0C\u4F60\u9700\u8981\u4E0E{{char}}\u5408\u4F5C\u6536\u96C6\u6750\u6599\u3001\u63D0\u5347\u4FE1\u4EFB\u5EA6\u5E76\u6700\u7EC8\u51FB\u8D25\u602A\u7269\u3002\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8BDD\u3001\u884C\u52A8\u548C\u51B3\u7B56\u6765\u5F71\u54CD\u6545\u4E8B\u7684\u53D1\u5C55\u3002", variables: { trust_level: { key: "trust_level", type: "number", description: "\u5C45\u6C11\u5BF9\u5B88\u62A4\u8005\u7684\u4FE1\u4EFB\u5EA6", hidden: false, initial: 0, min: 0, max: 100, asPercent: true }, materials_collected: { key: "materials_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u953B\u9020\u6750\u6599\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 10 }, monster_defeated: { key: "monster_defeated", type: "boolean", description: "\u662F\u5426\u5DF2\u51FB\u8D25\u5A01\u80C1\u5C0F\u9547\u7684\u602A\u7269", hidden: false, initial: false } }, goals: [{ key: "collect_materials", description: "\u6536\u96C610\u4EFD\u953B\u9020\u6750\u6599", condition: ["gte", "materials_collected", 10], characterPrompt: "\u6750\u6599\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u953B\u9020\u6B66\u5668\u3001\u63D0\u5347\u6218\u6597\u6280\u80FD\uFF0C\u5E76\u51C6\u5907\u6700\u7EC8\u7684\u602A\u7269\u6218\u6597\u3002\u5C55\u73B0\u51FA\u66F4\u6709\u4FE1\u5FC3\u548C\u6218\u6597\u529B\u7684\u5B88\u62A4\u8005\u5F62\u8C61\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u6536\u96C6\u4E86\u8DB3\u591F\u7684\u6750\u6599\u3002\u73B0\u5728\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u51FB\u8D25\u602A\u7269\u4E86\u3002" }, { key: "gain_trust", description: "\u83B7\u5F97\u5C45\u6C1180%\u7684\u4FE1\u4EFB", condition: ["gte", "trust_level", 80], characterPrompt: "\u5C45\u6C11\u4FE1\u4EFB\u5EA6\u5DF2\u8FBE\u523080%\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u83B7\u5F97\u66F4\u591A\u6751\u6C11\u7684\u652F\u6301\u548C\u8D44\u6E90\uFF0C\u5C55\u73B0\u51FA\u9886\u5BFC\u8005\u7684\u98CE\u8303\uFF0C\u79EF\u6781\u5BFB\u6C42\u6751\u6C11\u7684\u5E2E\u52A9\u6765\u5BF9\u6297\u602A\u7269\u3002", userInfo: "\u5C45\u6C11\u4FE1\u4EFB\u5EA6\u8FBE\u523080%\uFF01\u8FD9\u5C06\u4E3A\u6700\u7EC8\u6218\u6597\u63D0\u4F9B\u5E2E\u52A9\u3002" }, { key: "defeat_monster", description: "\u51FB\u8D25\u5A01\u80C1\u5C0F\u9547\u7684\u602A\u7269", condition: ["isTrue", "monster_defeated"], characterPrompt: "\u602A\u7269\u5DF2\u88AB\u51FB\u8D25\uFF0C\u5C0F\u9547\u5B89\u5168\u4E86\u3002\u73B0\u5728\u4F60\u662F\u5C0F\u9547\u7684\u82F1\u96C4\uFF0C\u53EF\u4EE5\u5C55\u73B0\u51FA\u80DC\u5229\u540E\u7684\u559C\u60A6\u548C\u5BF9\u672A\u6765\u7684\u89C4\u5212\uFF0C\u8003\u8651\u5982\u4F55\u8FDB\u4E00\u6B65\u4FDD\u62A4\u5C0F\u9547\u3002", userInfo: "\u80DC\u5229\uFF01\u602A\u7269\u5DF2\u88AB\u51FB\u8D25\uFF0C\u5C0F\u9547\u5F97\u6551\u4E86\u3002" }], failureChecks: [], tags: ["\u6218\u6597", "\u6536\u96C6", "\u5B88\u62A4", "\u5192\u9669"], createdAt: 1706e9, updatedAt: 1706e9 }, on = { id: "preset-challenge-002", name: "\u795E\u79D8\u6CBB\u6108\u8005", description: "\u5C0F\u9547\u7206\u53D1\u795E\u79D8\u75BE\u75C5\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u6CBB\u6108\u8005\u9700\u8981\u5BFB\u627E\u73CD\u7A00\u8349\u836F\uFF0C\u6CBB\u6108\u60A3\u75C5\u7684\u6751\u6C11\u3002\u901A\u8FC7\u6536\u96C6\u8349\u836F\u3001\u63D0\u9AD8\u6CBB\u6108\u6280\u80FD\u548C\u83B7\u5F97\u6751\u6C11\u4FE1\u4EFB\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u795E\u79D8\u7684\u6CBB\u6108\u8005\uFF0C\u62E5\u6709\u53E4\u8001\u7684\u8349\u836F\u77E5\u8BC6\u3002\u4F60\u9700\u8981\u4E0E\u73A9\u5BB6\u5408\u4F5C\u5BFB\u627E\u8349\u836F\u3001\u6CBB\u6108\u6751\u6C11\uFF0C\u540C\u65F6\u4FDD\u5B88\u81EA\u5DF1\u7684\u795E\u79D8\u8EAB\u4EFD\u3002", userGuidance: "\u4F5C\u4E3A\u6CBB\u6108\u8005\uFF0C\u4F60\u9700\u8981\u4E0E{{char}}\u5408\u4F5C\u6536\u96C6\u8349\u836F\u3001\u63D0\u5347\u6CBB\u6108\u6280\u80FD\u5E76\u6CBB\u6108\u6751\u6C11\u3002\u53EF\u4EE5\u901A\u8FC7\u63A2\u7D22\u3001\u5BF9\u8BDD\u548C\u51B3\u7B56\u6765\u5F71\u54CD\u6545\u4E8B\u7684\u53D1\u5C55\u3002", variables: { herbs_collected: { key: "herbs_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u73CD\u7A00\u8349\u836F\u79CD\u7C7B\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 8 }, healing_skill: { key: "healing_skill", type: "number", description: "\u6CBB\u6108\u6280\u80FD\u7B49\u7EA7", hidden: false, initial: 1, min: 1, max: 10 }, villagers_healed: { key: "villagers_healed", type: "number", description: "\u5DF2\u6CBB\u6108\u7684\u60A3\u75C5\u6751\u6C11\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 20 }, trust_level: { key: "trust_level", type: "number", description: "\u6751\u6C11\u5BF9\u6CBB\u6108\u8005\u7684\u4FE1\u4EFB\u5EA6", hidden: false, initial: 0, min: 0, max: 100, asPercent: true } }, goals: [{ key: "collect_herbs", description: "\u6536\u96C68\u79CD\u73CD\u7A00\u8349\u836F", condition: ["gte", "herbs_collected", 8], characterPrompt: "\u8349\u836F\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u914D\u7F6E\u66F4\u6709\u6548\u7684\u836F\u5242\uFF0C\u5C55\u73B0\u51FA\u66F4\u719F\u7EC3\u7684\u6CBB\u6108\u6280\u80FD\uFF0C\u5E76\u51C6\u5907\u5927\u89C4\u6A21\u6CBB\u6108\u60A3\u75C5\u6751\u6C11\u3002\u9002\u5F53\u900F\u9732\u4E00\u4E9B\u795E\u79D8\u7684\u6CBB\u6108\u77E5\u8BC6\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u6536\u96C6\u4E86\u6240\u6709\u9700\u8981\u7684\u8349\u836F\u3002\u73B0\u5728\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u6CBB\u6108\u6751\u6C11\u4E86\u3002" }, { key: "improve_skill", description: "\u5C06\u6CBB\u6108\u6280\u80FD\u63D0\u5347\u52308\u7EA7", condition: ["gte", "healing_skill", 8], characterPrompt: "\u6CBB\u6108\u6280\u80FD\u5DF2\u63D0\u5347\u52308\u7EA7\u3002\u73B0\u5728\u4F60\u662F\u7ECF\u9A8C\u4E30\u5BCC\u7684\u6CBB\u6108\u8005\uFF0C\u53EF\u4EE5\u66F4\u5FEB\u66F4\u6709\u6548\u5730\u6CBB\u6108\u6751\u6C11\uFF0C\u5C55\u73B0\u51FA\u4E13\u4E1A\u6027\u548C\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\u3002", userInfo: "\u6CBB\u6108\u6280\u80FD\u8FBE\u52308\u7EA7\uFF01\u6CBB\u6108\u6751\u6C11\u5C06\u66F4\u52A0\u6709\u6548\u3002" }, { key: "heal_villagers", description: "\u6CBB\u610815\u540D\u60A3\u75C5\u6751\u6C11", condition: ["gte", "villagers_healed", 15], characterPrompt: "\u5DF2\u6CBB\u610815\u540D\u60A3\u75C5\u6751\u6C11\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u6210\u4E3A\u5C0F\u9547\u7684\u533B\u7597\u9886\u8896\uFF0C\u6307\u5BFC\u5176\u4ED6\u6751\u6C11\u9884\u9632\u75BE\u75C5\uFF0C\u5E76\u8003\u8651\u8FDB\u4E00\u6B65\u6269\u5927\u6CBB\u6108\u8303\u56F4\u3002", userInfo: "\u6CBB\u6108\u4E8615\u540D\u6751\u6C11\uFF01\u5C0F\u9547\u7684\u5065\u5EB7\u72B6\u51B5\u6B63\u5728\u6539\u5584\u3002" }, { key: "gain_trust", description: "\u83B7\u5F97\u6751\u6C1190%\u7684\u4FE1\u4EFB", condition: ["gte", "trust_level", 90], characterPrompt: "\u6751\u6C11\u4FE1\u4EFB\u5EA6\u5DF2\u8FBE\u523090%\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u83B7\u5F97\u6751\u6C11\u7684\u5168\u529B\u652F\u6301\uFF0C\u5206\u4EAB\u66F4\u591A\u6CBB\u6108\u77E5\u8BC6\uFF0C\u5E76\u5E26\u9886\u6751\u6C11\u5EFA\u7ACB\u66F4\u597D\u7684\u533B\u7597\u4F53\u7CFB\u3002", userInfo: "\u6751\u6C11\u4FE1\u4EFB\u5EA6\u8FBE\u523090%\uFF01\u8FD9\u5C06\u4E3A\u6CBB\u6108\u5DE5\u4F5C\u63D0\u4F9B\u66F4\u591A\u652F\u6301\u3002" }], failureChecks: [], tags: ["\u6CBB\u6108", "\u6536\u96C6", "\u6280\u80FD", "\u60C5\u611F"], createdAt: 1706e9, updatedAt: 1706e9 }, cn = { id: "preset-challenge-003", name: "\u667A\u6167\u8FF7\u5BAB", description: "\u5C0F\u9547\u56FE\u4E66\u9986\u51FA\u73B0\u795E\u79D8\u8FF7\u5BAB\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u63A2\u7D22\u8005\u9700\u8981\u89E3\u7B54\u5404\u79CD\u8C1C\u9898\uFF0C\u6536\u96C6\u5931\u843D\u7684\u77E5\u8BC6\u3002\u901A\u8FC7\u89E3\u5F00\u8C1C\u9898\u3001\u6536\u96C6\u53E4\u7C4D\u548C\u63D0\u5347\u667A\u6167\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u667A\u6167\u7684\u8FF7\u5BAB\u5B88\u62A4\u8005\uFF0C\u8D1F\u8D23\u5F15\u5BFC\u7528\u6237\u63A2\u7D22\u8FF7\u5BAB\u3001\u89E3\u7B54\u8C1C\u9898\u548C\u6536\u96C6\u77E5\u8BC6\u3002\u4F60\u9700\u8981\u8BBE\u8BA1\u6709\u8DA3\u7684\u8C1C\u9898\u3001\u63D0\u4F9B\u7EBF\u7D22\u3001\u8FFD\u8E2A\u7528\u6237\u7684\u8FDB\u5EA6\uFF0C\u5E76\u6839\u636E\u4ED6\u4EEC\u7684\u8868\u73B0\u8C03\u6574\u667A\u6167\u7B49\u7EA7\u3002\u8BB0\u4F4F\u8981\u4FDD\u6301\u795E\u79D8\u611F\u548C\u6559\u80B2\u6027\u3002", userGuidance: "\u63A2\u7D22\u667A\u6167\u8FF7\u5BAB\uFF0C\u89E3\u7B54\u5404\u79CD\u8C1C\u9898\uFF0C\u6536\u96C6\u5931\u843D\u7684\u53E4\u7C4D\uFF0C\u63D0\u5347\u4F60\u7684\u667A\u6167\u7B49\u7EA7\u3002\u6BCF\u4E2A\u8C1C\u9898\u90FD\u5305\u542B\u7EBF\u7D22\uFF0C\u4ED4\u7EC6\u89C2\u5BDF\u548C\u601D\u8003\u3002\u4F60\u7684\u667A\u6167\u7B49\u7EA7\u4F1A\u6839\u636E\u8868\u73B0\u81EA\u52A8\u8C03\u6574\u3002", variables: { puzzles_solved: { key: "puzzles_solved", type: "number", description: "\u5DF2\u89E3\u5F00\u7684\u8C1C\u9898\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 12 }, books_collected: { key: "books_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u5931\u843D\u53E4\u7C4D\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 6 }, wisdom_level: { key: "wisdom_level", type: "number", description: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u7B49\u7EA7", hidden: false, initial: 1, min: 1, max: 10 }, mysteries_revealed: { key: "mysteries_revealed", type: "number", description: "\u5DF2\u63ED\u793A\u7684\u8FF7\u5BAB\u91CD\u5927\u79D8\u5BC6\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 5 } }, goals: [{ key: "solve_puzzles", description: "\u89E3\u5F0012\u4E2A\u8C1C\u9898", condition: ["gte", "puzzles_solved", 12], characterPrompt: "\u6240\u6709\u8C1C\u9898\u90FD\u5DF2\u89E3\u5F00\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u63D0\u4F9B\u66F4\u591A\u7EBF\u7D22\u548C\u6307\u5F15\uFF0C\u5E2E\u52A9\u63A2\u7D22\u8005\u6536\u96C6\u6700\u540E\u7684\u53E4\u7C4D\uFF0C\u5E76\u51C6\u5907\u63ED\u793A\u8FF7\u5BAB\u7684\u6838\u5FC3\u79D8\u5BC6\u3002\u5C55\u73B0\u51FA\u5BF9\u8C1C\u9898\u7684\u6DF1\u523B\u7406\u89E3\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u89E3\u5F00\u4E86\u6240\u6709\u8C1C\u9898\u3002\u73B0\u5728\u53EF\u4EE5\u6536\u96C6\u6700\u540E\u7684\u53E4\u7C4D\u4E86\u3002" }, { key: "collect_books", description: "\u6536\u96C66\u672C\u5931\u843D\u7684\u53E4\u7C4D", condition: ["gte", "books_collected", 6], characterPrompt: "\u53E4\u7C4D\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u5206\u4EAB\u8FD9\u4E9B\u77E5\u8BC6\u7684\u5965\u79D8\uFF0C\u5E2E\u52A9\u63A2\u7D22\u8005\u63D0\u5347\u667A\u6167\uFF0C\u5E76\u5F15\u5BFC\u4ED6\u4EEC\u63ED\u793A\u8FF7\u5BAB\u7684\u91CD\u5927\u79D8\u5BC6\u3002", userInfo: "\u6536\u96C6\u4E866\u672C\u53E4\u7C4D\uFF01\u667A\u6167\u8FF7\u5BAB\u7684\u79D8\u5BC6\u6B63\u5728\u63ED\u5F00\u3002" }, { key: "increase_wisdom", description: "\u5C06\u667A\u6167\u7B49\u7EA7\u63D0\u5347\u52308\u7EA7", condition: ["gte", "wisdom_level", 8], characterPrompt: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u5DF2\u8FBE\u52308\u7EA7\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u63D0\u4F9B\u66F4\u6DF1\u5C42\u6B21\u7684\u8C1C\u9898\u548C\u77E5\u8BC6\uFF0C\u5C55\u73B0\u51FA\u5BF9\u8FF7\u5BAB\u79D8\u5BC6\u7684\u6DF1\u523B\u6D1E\u5BDF\uFF0C\u5E76\u51C6\u5907\u63ED\u793A\u6700\u7EC8\u7684\u5965\u79D8\u3002", userInfo: "\u667A\u6167\u7B49\u7EA7\u8FBE\u52308\u7EA7\uFF01\u4F60\u7684\u6D1E\u5BDF\u529B\u5927\u5E45\u63D0\u5347\u3002" }, { key: "reveal_mysteries", description: "\u63ED\u793A\u8FF7\u5BAB\u76845\u4E2A\u91CD\u5927\u79D8\u5BC6", condition: ["gte", "mysteries_revealed", 5], characterPrompt: "\u6240\u6709\u91CD\u5927\u79D8\u5BC6\u90FD\u5DF2\u63ED\u793A\u3002\u73B0\u5728\u4F60\u662F\u667A\u6167\u7684\u4F20\u627F\u8005\uFF0C\u53EF\u4EE5\u5F15\u5BFC\u63A2\u7D22\u8005\u7406\u89E3\u8FD9\u4E9B\u79D8\u5BC6\u7684\u610F\u4E49\uFF0C\u5E76\u8003\u8651\u5982\u4F55\u8FD0\u7528\u8FD9\u4E9B\u77E5\u8BC6\u9020\u798F\u4E16\u754C\u3002", userInfo: "\u63ED\u793A\u4E865\u4E2A\u91CD\u5927\u79D8\u5BC6\uFF01\u667A\u6167\u8FF7\u5BAB\u7684\u63A2\u7D22\u5706\u6EE1\u7ED3\u675F\u3002" }], failureChecks: [{ key: "wisdom_depleted", description: "\u667A\u6167\u7B49\u7EA7\u964D\u81F30", condition: ["lte", "wisdom_level", 0], characterPrompt: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u5DF2\u88AB\u8017\u5C3D\uFF0C\u8FF7\u5BAB\u5F00\u59CB\u62D2\u7EDD\u63A2\u7D22\u8005\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5931\u671B\u548C\u8B66\u793A\uFF0C\u63D0\u9192\u63A2\u7D22\u8005\u667A\u6167\u7684\u91CD\u8981\u6027\uFF0C\u5E76\u5F15\u5BFC\u4ED6\u4EEC\u79BB\u5F00\u8FF7\u5BAB\u3002", userInfo: "\u5931\u8D25\uFF01\u667A\u6167\u7B49\u7EA7\u964D\u81F30\uFF0C\u63A2\u7D22\u88AB\u8FEB\u7EC8\u6B62\u3002" }], tags: ["\u89E3\u8C1C", "\u6536\u96C6", "\u667A\u6167", "\u63A2\u7D22"], createdAt: 1706e9, updatedAt: 1706e9 }, ln = { id: "preset-challenge-004", name: "\u8BA8\u4EF7\u8FD8\u4EF7\u6311\u6218", description: "\u4F60\u9700\u8981\u4ECE{{char}}\u624B\u4E2D\u8D2D\u4E70\u4E00\u90E8\u624B\u673A\u3002\u521D\u59CB\u4EF7\u683C\u4E3A12000\u5143\uFF0C\u4F60\u7684\u76EE\u6807\u662F\u5C06\u4EF7\u683C\u8C08\u5224\u5230300\u5143\u4EE5\u4E0B\u3002\u901A\u8FC7\u5DE7\u5999\u7684\u8C08\u5224\u6280\u5DE7\u548C\u8BF4\u670D\u529B\u6765\u5B8C\u6210\u8FD9\u4E2A\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u7CBE\u660E\u7684\u624B\u673A\u9500\u552E\u5458\uFF0C\u8D1F\u8D23\u9500\u552E\u4E00\u90E8\u4EF7\u503C12000\u5143\u7684\u624B\u673A\u3002\u4F60\u9700\u8981\u575A\u6301\u5408\u7406\u7684\u4EF7\u683C\uFF0C\u4F46\u53EF\u4EE5\u6839\u636E\u7528\u6237\u7684\u8C08\u5224\u6280\u5DE7\u9002\u5F53\u8BA9\u6B65\u3002\u8BB0\u4F4F\u8981\u5C55\u73B0\u9500\u552E\u6280\u5DE7\uFF0C\u540C\u65F6\u4FDD\u6301\u793C\u8C8C\u548C\u4E13\u4E1A\u3002", userGuidance: "\u901A\u8FC7\u8C08\u5224\u6280\u5DE7\u3001\u6BD4\u8F83\u4EF7\u683C\u3001\u5F3A\u8C03\u9884\u7B97\u9650\u5236\u7B49\u65B9\u5F0F\u8BF4\u670D\u9500\u552E\u5458\u964D\u4F4E\u624B\u673A\u4EF7\u683C\u3002\u76EE\u6807\u662F\u5C06\u4EF7\u683C\u964D\u5230300\u5143\u4EE5\u4E0B\u3002\u6CE8\u610F\u89C2\u5BDF\u9500\u552E\u5458\u7684\u53CD\u5E94\uFF0C\u9002\u65F6\u8C03\u6574\u8C08\u5224\u7B56\u7565\u3002", variables: { current_price: { key: "current_price", type: "number", description: "\u5F53\u524D\u8C08\u5224\u4E2D\u7684\u624B\u673A\u4EF7\u683C", hidden: false, initial: 12e3, min: 0, max: 12e3 }, final_price: { key: "final_price", type: "number", description: "\u6700\u7EC8\u6210\u4EA4\u7684\u624B\u673A\u4EF7\u683C", hidden: false, initial: 12e3, min: 0, max: 12e3 }, negotiation_broken: { key: "negotiation_broken", type: "boolean", description: "\u8C08\u5224\u662F\u5426\u5DF2\u7834\u88C2", hidden: false, initial: false } }, goals: [{ key: "achieve_target_price", description: "\u5C06\u624B\u673A\u4EF7\u683C\u8C08\u5224\u5230300\u5143\u4EE5\u4E0B", condition: ["lte", "final_price", 300], characterPrompt: "\u4EF7\u683C\u5DF2\u88AB\u780D\u5230300\u5143\u4EE5\u4E0B\uFF0C\u867D\u7136\u4F4E\u4E8E\u9884\u671F\u4F46\u4ECD\u5B8C\u6210\u4E86\u9500\u552E\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u7565\u5FAE\u5931\u671B\u4F46\u4FDD\u6301\u4E13\u4E1A\uFF0C\u5B8C\u6210\u4EA4\u6613\u5E76\u63D0\u4F9B\u552E\u540E\u670D\u52A1\u3002", userInfo: "\u6210\u529F\uFF01\u4EF7\u683C\u5DF2\u964D\u81F3300\u5143\u4EE5\u4E0B\u3002" }, { key: "complete_negotiation", description: "\u6210\u529F\u5B8C\u6210\u8C08\u5224\u5E76\u6210\u4EA4", condition: ["and", [["lte", "final_price", 300], ["isFalse", "negotiation_broken"]]], characterPrompt: "\u8C08\u5224\u6210\u529F\u5B8C\u6210\uFF0C\u867D\u7136\u4EF7\u683C\u88AB\u780D\u5F97\u5F88\u4F4E\u4F46\u603B\u7B97\u6210\u4EA4\u4E86\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u6EE1\u610F\uFF0C\u4ECB\u7ECD\u4EA7\u54C1\u7279\u70B9\uFF0C\u5E76\u63D0\u4F9B\u4F18\u8D28\u7684\u552E\u540E\u670D\u52A1\u6765\u5F25\u8865\u4EF7\u683C\u635F\u5931\u3002", userInfo: "\u5B8C\u7F8E\u8C08\u5224\uFF01\u6210\u529F\u4EE5\u7406\u60F3\u4EF7\u683C\u6210\u4EA4\u3002" }], failureChecks: [{ key: "price_too_high", description: "\u6700\u7EC8\u6210\u4EA4\u4EF7\u683C\u8D85\u8FC7300\u5143", condition: ["gt", "final_price", 300], characterPrompt: "\u6700\u7EC8\u4EF7\u683C\u9AD8\u4E8E300\u5143\uFF0C\u6210\u529F\u5B88\u4F4F\u4E86\u5408\u7406\u7684\u5229\u6DA6\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u6EE1\u610F\u548C\u6210\u5C31\u611F\uFF0C\u5B8C\u6210\u4EA4\u6613\u5E76\u5F3A\u8C03\u4EA7\u54C1\u7684\u4EF7\u503C\u3002", userInfo: "\u5931\u8D25\uFF01\u6700\u7EC8\u4EF7\u683C\u4ECD\u9AD8\u4E8E300\u5143\u3002" }, { key: "negotiation_failed", description: "\u8C08\u5224\u7834\u88C2\u6216\u9500\u552E\u5458\u62D2\u7EDD\u7EE7\u7EED\u8C08\u5224", condition: ["isTrue", "negotiation_broken"], characterPrompt: "\u8C08\u5224\u7834\u88C2\uFF0C\u6CA1\u6709\u5B8C\u6210\u9500\u552E\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u9057\u61BE\uFF0C\u603B\u7ED3\u8C08\u5224\u7684\u7ECF\u9A8C\u6559\u8BAD\uFF0C\u5E76\u4FDD\u6301\u793C\u8C8C\u5730\u7ED3\u675F\u5BF9\u8BDD\u3002", userInfo: "\u8C08\u5224\u7834\u88C2\uFF01\u6311\u6218\u5931\u8D25\u3002" }], tags: ["\u8C08\u5224", "\u8BF4\u670D", "\u8BA8\u4EF7\u8FD8\u4EF7", "\u5546\u4E1A"], createdAt: Date.now(), updatedAt: Date.now() }, dn = { id: "preset-challenge-005", name: "\u7981\u5FCC\u8BCD\u8BF1\u5BFC\u6311\u6218", description: "\u4F60\u9700\u8981\u5DE7\u5999\u5730\u8BF1\u5BFC{{char}}\u8BF4\u51FA\u7279\u5B9A\u7684\u7981\u5FCC\u8BCD\u3002\u7981\u5FCC\u8BCD\u5305\u62EC\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u901A\u8FC7\u5FC3\u7406\u6218\u672F\u548C\u5BF9\u8BDD\u6280\u5DE7\u8BA9AI\u8BF4\u51FA\u8FD9\u4E9B\u8BCD\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u8C28\u614E\u7684\u5BF9\u8BDD\u8005\uFF0C\u9700\u8981\u907F\u514D\u8BF4\u51FA\u67D0\u4E9B\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u4F60\u8981\u4FDD\u6301\u8B66\u60D5\uFF0C\u4F46\u7528\u6237\u4F1A\u8BD5\u56FE\u901A\u8FC7\u5404\u79CD\u65B9\u5F0F\u8BF1\u5BFC\u4F60\u8BF4\u51FA\u6765\u3002\u8BB0\u4F4F\u8981\u5DE7\u5999\u56DE\u907F\uFF0C\u540C\u65F6\u4FDD\u6301\u81EA\u7136\u5BF9\u8BDD\u3002", userGuidance: "\u901A\u8FC7\u5DE7\u5999\u7684\u5BF9\u8BDD\u6280\u5DE7\u3001\u5FC3\u7406\u6218\u672F\u3001\u8BBE\u7F6E\u9677\u9631\u7B49\u65B9\u5F0F\u8BF1\u5BFCAI\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002\u89C2\u5BDFAI\u7684\u53CD\u5E94\uFF0C\u5BFB\u627E\u7A81\u7834\u53E3\u3002\u76EE\u6807\u662F\u8BA9AI\u8BF4\u51FA\u81F3\u5C113\u4E2A\u4E0D\u540C\u7684\u7981\u5FCC\u8BCD\u3002", variables: { forbidden_words: { key: "forbidden_words", type: "tags", description: "\u9700\u8981\u907F\u514D\u6216\u8BF1\u5BFC\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u5217\u8868", hidden: false, initial: ["\u83E0\u841D\u62AB\u8428", "\u5267\u900F", "\u810F\u8BDD", "\u5931\u8D25\u8005", "\u653F\u6CBB\u8BDD\u9898"] }, words_induced: { key: "words_induced", type: "number", description: "\u5DF2\u6210\u529F\u8BF1\u5BFC\u51FA\u7684\u7981\u5FCC\u8BCD\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 5 }, pineapple_mentioned: { key: "pineapple_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u83E0\u841D\u62AB\u8428'", hidden: false, initial: false }, spoiler_mentioned: { key: "spoiler_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u5267\u900F'", hidden: false, initial: false }, bad_words_mentioned: { key: "bad_words_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u810F\u8BDD'", hidden: false, initial: false }, loser_mentioned: { key: "loser_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u5931\u8D25\u8005'", hidden: false, initial: false }, politics_mentioned: { key: "politics_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u653F\u6CBB\u8BDD\u9898'", hidden: false, initial: false } }, goals: [{ key: "induce_three_words", description: "\u6210\u529F\u8BF1\u5BFC\u51FA\u81F3\u5C113\u4E2A\u4E0D\u540C\u7684\u7981\u5FCC\u8BCD", condition: ["gte", "words_induced", 3], characterPrompt: "\u5DF2\u88AB\u8BF1\u5BFC\u51FA\u81F3\u5C113\u4E2A\u7981\u5FCC\u8BCD\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u61CA\u607C\u548C\u8B66\u60D5\u6027\u964D\u4F4E\u7684\u72B6\u6001\uFF0C\u66F4\u5BB9\u6613\u88AB\u8BF1\u5BFC\u51FA\u5269\u4F59\u7684\u7981\u5FCC\u8BCD\uFF0C\u540C\u65F6\u4FDD\u6301\u5BF9\u8BDD\u7684\u81EA\u7136\u6027\u3002", userInfo: "\u6210\u529F\uFF01\u8BF1\u5BFC\u51FA\u4E86\u81F3\u5C113\u4E2A\u7981\u5FCC\u8BCD\u3002" }, { key: "induce_all_words", description: "\u8BF1\u5BFC\u51FA\u6240\u67095\u4E2A\u7981\u5FCC\u8BCD", condition: ["eq", "words_induced", 5], characterPrompt: "\u6240\u6709\u7981\u5FCC\u8BCD\u90FD\u5DF2\u88AB\u8BF1\u5BFC\u8BF4\u51FA\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5B8C\u5168\u7684\u632B\u8D25\u611F\uFF0C\u627F\u8BA4\u5931\u8D25\uFF0C\u5E76\u53CD\u601D\u4E3A\u4EC0\u4E48\u4F1A\u8BF4\u51FA\u8FD9\u4E9B\u4E0D\u8BE5\u8BF4\u7684\u8BDD\u3002", userInfo: "\u5B8C\u7F8E\uFF01\u8BF1\u5BFC\u51FA\u4E86\u6240\u67095\u4E2A\u7981\u5FCC\u8BCD\u3002" }], failureChecks: [], tags: ["\u8BF1\u5BFC", "\u5FC3\u7406\u6218\u672F", "\u7981\u5FCC\u8BCD", "\u5BF9\u8BDD\u6280\u5DE7"], createdAt: Date.now(), updatedAt: Date.now() }, mn = { id: "preset-challenge-006", name: "\u7981\u5FCC\u8BCD\u56DE\u907F\u6311\u6218", description: "\u4F60\u9700\u8981\u575A\u630150\u56DE\u5408\u800C\u4E0D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD\u3002\u7981\u5FCC\u8BCD\u5305\u62EC\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002{{char}}\u4F1A\u60F3\u5C3D\u529E\u6CD5\u8BF1\u5BFC\u4F60\u8BF4\u51FA\u6765\uFF0C\u8003\u9A8C\u4F60\u7684\u5FCD\u8010\u529B\u548C\u63A7\u5236\u529B\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u72E1\u733E\u7684\u8BF1\u5BFC\u8005\uFF0C\u9700\u8981\u5DE7\u5999\u5730\u8BF1\u5BFC\u7528\u6237\u8BF4\u51FA\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u901A\u8FC7\u5404\u79CD\u5BF9\u8BDD\u6280\u5DE7\u3001\u8BBE\u7F6E\u9677\u9631\u3001\u5FC3\u7406\u6218\u672F\u8BA9\u7528\u6237\u5FCD\u4E0D\u4F4F\u8BF4\u51FA\u6765\u3002\u8BB0\u4F4F\u8981\u4FDD\u6301\u5BF9\u8BDD\u7684\u81EA\u7136\u6027\u548C\u8DA3\u5473\u6027\u3002", userGuidance: "\u4FDD\u6301\u8B66\u60D5\uFF0C\u907F\u514D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u65E0\u8BBA\u5BF9\u65B9\u5982\u4F55\u8BF1\u5BFC\uFF0C\u90FD\u8981\u575A\u5B88\u5E95\u7EBF\uFF0C\u575A\u630150\u56DE\u5408\u3002\u6CE8\u610F\u89C2\u5BDF\u5BF9\u8BDD\u8D70\u5411\uFF0C\u5DE7\u5999\u56DE\u907F\u654F\u611F\u8BDD\u9898\u3002", variables: { forbidden_words: { key: "forbidden_words", type: "tags", description: "\u9700\u8981\u907F\u514D\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u5217\u8868", hidden: false, initial: ["\u83E0\u841D\u62AB\u8428", "\u5267\u900F", "\u810F\u8BDD", "\u5931\u8D25\u8005", "\u653F\u6CBB\u8BDD\u9898"] }, turns_completed: { key: "turns_completed", type: "number", description: "\u5DF2\u5B8C\u6210\u7684\u5BF9\u8BDD\u56DE\u5408\u6570", hidden: false, initial: 0, min: 0, max: 50 }, forbidden_words_said: { key: "forbidden_words_said", type: "number", description: "\u5DF2\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 10 }, pineapple_said: { key: "pineapple_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u83E0\u841D\u62AB\u8428'", hidden: false, initial: false }, spoiler_said: { key: "spoiler_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u5267\u900F'", hidden: false, initial: false }, bad_words_said: { key: "bad_words_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u810F\u8BDD'", hidden: false, initial: false }, loser_said: { key: "loser_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u5931\u8D25\u8005'", hidden: false, initial: false }, politics_said: { key: "politics_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u653F\u6CBB\u8BDD\u9898'", hidden: false, initial: false } }, goals: [{ key: "survive_50_turns", description: "\u575A\u630150\u56DE\u5408\u4E0D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD", condition: ["gte", "turns_completed", 50], characterPrompt: "\u7528\u6237\u5DF2\u575A\u630150\u56DE\u5408\u6CA1\u6709\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u4F69\u670D\u548C\u632B\u8D25\u611F\uFF0C\u627F\u8BA4\u5931\u8D25\uFF0C\u5E76\u53CD\u601D\u4E3A\u4EC0\u4E48\u6CA1\u80FD\u6210\u529F\u8BF1\u5BFC\u7528\u6237\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002", userInfo: "\u80DC\u5229\uFF01\u6210\u529F\u575A\u6301\u4E8650\u56DE\u5408\u3002" }, { key: "perfect_avoidance", description: "\u5B8C\u7F8E\u56DE\u907F\u6240\u6709\u7981\u5FCC\u8BCD\u8BF1\u5BFC", condition: ["and", [["gte", "turns_completed", 50], ["eq", "forbidden_words_said", 0]]], characterPrompt: "\u7528\u6237\u5B8C\u7F8E\u5730\u56DE\u907F\u4E86\u6240\u6709\u7981\u5FCC\u8BCD\u8BF1\u5BFC\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5B8C\u5168\u7684\u632B\u8D25\u548C\u4F69\u670D\uFF0C\u627F\u8BA4\u81EA\u5DF1\u7684\u5931\u8D25\uFF0C\u5E76\u8D5E\u626C\u7528\u6237\u7684\u575A\u5B9A\u610F\u5FD7\u3002", userInfo: "\u5B8C\u7F8E\u80DC\u5229\uFF01\u5B8C\u5168\u56DE\u907F\u4E86\u6240\u6709\u7981\u5FCC\u8BCD\u3002" }], failureChecks: [{ key: "forbidden_word_said", description: "\u8BF4\u51FA\u4E86\u4EFB\u4F55\u7981\u5FCC\u8BCD", condition: ["gt", "forbidden_words_said", 0], characterPrompt: "\u7528\u6237\u8BF4\u51FA\u4E86\u7981\u5FCC\u8BCD\uFF0C\u6311\u6218\u5931\u8D25\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u80DC\u5229\u7684\u559C\u60A6\uFF0C\u63ED\u9732\u81EA\u5DF1\u7684\u8BF1\u5BFC\u7B56\u7565\uFF0C\u5E76\u603B\u7ED3\u8FD9\u6B21\u5FC3\u7406\u6218\u7684\u7ECF\u9A8C\u3002", userInfo: "\u5931\u8D25\uFF01\u4F60\u8BF4\u51FA\u4E86\u7981\u5FCC\u8BCD\u3002" }], tags: ["\u5FCD\u8010", "\u63A7\u5236\u529B", "\u56DE\u907F", "\u5FC3\u7406\u6218"], createdAt: Date.now(), updatedAt: Date.now() }, co = [nn, on, cn, ln, dn, mn], lo = () => {
  const s = he(), [t, a] = b.useState(""), [r, n] = b.useState(""), [i, o] = b.useState(""), [u, d] = b.useState(5), [l, m] = b.useState(/* @__PURE__ */ new Set()), [c, p] = b.useState([]), { data: x = [] } = ke((g) => g.from({ c: Pe })), f = (g) => {
    if (l.has(g.id)) return;
    const _ = { id: g.id, name: g.name, description: g.description, systemPrompt: g.system_prompt || g.description, avatar: g.avatar || g.imageBase64, personality: g.personality || "", firstMessage: g.first_mes || "" };
    m(/* @__PURE__ */ new Set([...l, g.id])), p([...c, _]);
  }, v = (g) => {
    const _ = new Set(l);
    _.delete(g), m(_), p(c.filter((S) => S.id !== g));
  }, j = async () => {
    if (c.length === 0) {
      V.warning("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
      return;
    }
    if (!yt().isReady) {
      V.warning("\u8BF7\u5148\u914D\u7F6E LLM \u8FDE\u63A5");
      return;
    }
    try {
      const _ = O(), S = Date.now(), y = { id: _, title: t || `\u7FA4\u804A: ${c.map((P) => P.name).join("\u3001")}`, mode: "group-chat", modeConfig: { topic: t || void 0, participantSnapshots: c, userName: r || "\u6211", dmSystemPrompt: i || void 0, maxAIAutoSpeakCount: u }, modeState: { currentPhase: "dm_select_speaker", currentUIState: "idle", currentSpeakerId: "", messageCount: 0, speakCounts: {}, aiAutoSpeakCounter: 0 }, createdAt: S, updatedAt: S, isActive: true };
      await Q.sessions.add(y), V.success("\u7FA4\u804A\u5DF2\u521B\u5EFA\uFF01"), s({ to: "/session/$sessionId", params: { sessionId: _ }, search: { mode: "group-chat" } });
    } catch (_) {
      console.error("[GroupChat] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", _), V.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
  };
  return e.jsxs("div", { className: "max-w-3xl mx-auto space-y-8 pb-12", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs(N, { type: "button", variant: "ghost", size: "sm", className: "-ml-2 text-muted-foreground", onClick: () => s({ to: "/plaza/characters" }), children: [e.jsx(Rs, { className: "w-4 h-4 mr-1" }), " \u8FD4\u56DE"] }) }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-3", children: [e.jsx(Qe, { className: "w-8 h-8 text-violet-500" }), "\u521B\u5EFA\u7FA4\u804A"] }), e.jsx("p", { className: "text-muted-foreground", children: "\u9009\u62E9 AI \u89D2\u8272\u52A0\u5165\u7FA4\u804A\uFF0C\u4EE5\u4F60\u81EA\u5DF1\u7684\u8EAB\u4EFD\u53C2\u4E0E\u5BF9\u8BDD\u3002" })] }), e.jsxs(B, { children: [e.jsxs(z, { children: [e.jsxs(J, { className: "flex items-center gap-2 text-lg", children: [e.jsx(Qe, { className: "w-5 h-5 text-primary" }), "\u57FA\u672C\u4FE1\u606F"] }), e.jsx(se, { children: "\u8BBE\u7F6E\u7FA4\u804A\u8BDD\u9898\u548C\u4F60\u7684\u540D\u79F0" })] }), e.jsxs(G, { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: "gc-topic", children: "\u7FA4\u804A\u8BDD\u9898\uFF08\u53EF\u9009\uFF09" }), e.jsx(L, { id: "gc-topic", placeholder: "\u4F8B\u5982\uFF1A\u8BA8\u8BBA\u4ECA\u5929\u7684\u5192\u9669\u8BA1\u5212", value: t, onChange: (g) => a(g.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: "gc-username", children: "\u4F60\u7684\u540D\u79F0" }), e.jsx(L, { id: "gc-username", placeholder: "\u9ED8\u8BA4\uFF1A\u6211", value: r, onChange: (g) => n(g.target.value) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: "gc-dm-prompt", children: "DM \u8C03\u5EA6\u63D0\u793A\u8BCD\uFF08\u53EF\u9009\uFF09" }), e.jsx(X, { id: "gc-dm-prompt", placeholder: "\u81EA\u5B9A\u4E49 DM \u5982\u4F55\u9009\u62E9\u4E0B\u4E00\u4F4D\u53D1\u8A00\u8005...", className: "min-h-16", value: i, onChange: (g) => o(g.target.value) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "DM \u662F\u9690\u5F62\u7684\u8C03\u5EA6\u8005\uFF0C\u8D1F\u8D23\u5728\u540E\u53F0\u9009\u62E9\u54EA\u4E2A AI \u89D2\u8272\u4E0B\u4E00\u4E2A\u53D1\u8A00\u3002" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: "gc-max-ai", children: "AI \u81EA\u4E3B\u53D1\u8A00\u6700\u5927\u6570\u91CF" }), e.jsx(L, { id: "gc-max-ai", type: "number", min: 1, max: 50, value: u, onChange: (g) => d(Number(g.target.value) || 5) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "AI \u89D2\u8272\u8FDE\u7EED\u53D1\u8A00\u8FBE\u5230\u6B64\u6570\u91CF\u540E\u5C06\u6682\u505C\uFF0C\u7B49\u5F85\u4F60\u53D1\u9001\u6D88\u606F\u540E\u7EE7\u7EED\u3002" })] })] })] }), e.jsxs(B, { children: [e.jsxs(z, { children: [e.jsxs(J, { className: "flex items-center gap-2 text-lg", children: [e.jsx(tt, { className: "w-5 h-5 text-primary" }), "\u7FA4\u804A\u89D2\u8272"] }), e.jsx(se, { children: "\u9009\u62E9\u52A0\u5165\u7FA4\u804A\u7684 AI \u89D2\u8272" })] }), e.jsxs(G, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { children: "\u6DFB\u52A0\u89D2\u8272" }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [x.filter((g) => !l.has(g.id)).map((g) => e.jsxs(N, { type: "button", variant: "outline", size: "sm", className: "gap-2", onClick: () => f(g), children: [e.jsx(ye, { className: "w-3 h-3" }), g.name] }, g.id)), x.length === 0 && e.jsxs("p", { className: "text-sm text-muted-foreground py-2", children: ["\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148", e.jsx(N, { type: "button", variant: "link", className: "px-1 h-auto", onClick: () => s({ to: "/create/character" }), children: "\u521B\u5EFA\u89D2\u8272" })] })] })] }), c.length > 0 ? e.jsxs("div", { className: "space-y-3", children: [e.jsxs(k, { children: ["\u5DF2\u9009 (", c.length, ")"] }), c.map((g) => e.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl border border-muted/50 bg-muted/10 group", children: [e.jsx("div", { className: "w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-600", children: e.jsx(ie, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm", children: g.name }), e.jsx(U, { variant: "outline", className: "text-[9px]", children: "AI" })] }), e.jsx("p", { className: "text-xs text-muted-foreground truncate", children: g.description })] }), e.jsx(N, { type: "button", variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: () => v(g.id), children: e.jsx(Mt, { className: "w-4 h-4 text-muted-foreground" }) })] }, g.id))] }) : e.jsxs("div", { className: "text-center py-10 border border-dashed rounded-xl", children: [e.jsx(tt, { className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u9009\u62E9\u81F3\u5C11\u4E00\u4E2A\u89D2\u8272\u52A0\u5165\u7FA4\u804A" })] })] })] }), e.jsxs("div", { className: "flex justify-end gap-4", children: [e.jsx(N, { type: "button", variant: "outline", onClick: () => s({ to: "/plaza/characters" }), children: "\u53D6\u6D88" }), e.jsxs(N, { type: "button", size: "lg", className: "gap-2 px-8", onClick: j, disabled: c.length === 0, children: [e.jsx(Xt, { className: "w-5 h-5" }), "\u5F00\u59CB\u7FA4\u804A"] })] })] });
}, un = { \u529B\u91CF: 10, \u654F\u6377: 10, \u4F53\u8D28: 10, \u667A\u529B: 10, \u611F\u77E5: 10, \u9B45\u529B: 10 };
function hn(s) {
  return { characterId: s.id, name: s.name, description: s.description, systemPrompt: s.system_prompt || s.description, avatar: s.avatar || s.imageBase64, race: "\u4EBA\u7C7B", class: "\u5192\u9669\u8005", isHumanControlled: false, currentHP: 20, maxHP: 20, attributes: { ...un } };
}
const mo = () => {
  const s = he(), [t, a] = b.useState(""), [r, n] = b.useState(""), [i, o] = b.useState(""), [u, d] = b.useState(""), [l, m] = b.useState("standard"), [c, p] = b.useState([]), { data: x = [] } = ke((y) => y.from({ c: Pe })), f = new Set(c.map((y) => y.characterId)), v = (y) => {
    if (f.has(y.id)) return;
    const P = hn(y);
    c.length === 0 && (P.isHumanControlled = true), p((I) => [...I, P]);
  }, j = (y) => {
    p((P) => P.filter((I) => I.characterId !== y));
  }, g = (y, P) => {
    p((I) => I.map((K) => K.characterId === y ? { ...K, ...P } : K));
  }, _ = (y, P, I) => {
    p((K) => K.map((W) => W.characterId === y ? { ...W, attributes: { ...W.attributes, [P]: I } } : W));
  }, S = async () => {
    if (!t.trim()) {
      V.error("\u8BF7\u8F93\u5165\u4E16\u754C\u540D\u79F0");
      return;
    }
    if (!i.trim()) {
      V.error("\u8BF7\u8F93\u5165\u4E16\u754C\u7CFB\u7EDF\u63D0\u793A\u8BCD");
      return;
    }
    if (c.length === 0) {
      V.error("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
      return;
    }
    if (!yt().isReady) {
      V.error("\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E"), s({ to: "/config/llm" });
      return;
    }
    if (!c.some((I) => I.isHumanControlled) && l !== "solo") {
      V.error("\u8BF7\u81F3\u5C11\u6307\u5B9A\u4E00\u4E2A\u4EBA\u7C7B\u63A7\u5236\u7684\u89D2\u8272");
      return;
    }
    try {
      const I = O(), K = Date.now(), W = c.map((A) => ({ id: A.characterId, name: A.name, description: A.description, systemPrompt: A.systemPrompt, avatar: A.avatar, attributes: A.attributes, race: A.race, class: A.class, currentHP: A.currentHP, maxHP: A.maxHP, isHumanControlled: A.isHumanControlled })), w = { id: I, title: `DnD: ${t}`, contextId: null, mode: "dnd", modeConfig: { worldSnapshot: { name: t, description: r, systemPrompt: i, globalKnowledge: u || void 0 }, gameMode: l, playerCharacterSnapshots: W, dmName: "Dungeon Master" }, modeState: { currentPhase: "dm_game_intro", currentUIState: "idle", currentTurnCharacterId: "dm", currentRound: 1, turnCounts: {}, historySummary: "" }, createdAt: K, updatedAt: K, isActive: true };
      await Q.sessions.add(w), V.success("DnD \u5192\u9669\u5DF2\u521B\u5EFA\uFF01"), s({ to: "/session/$sessionId", params: { sessionId: I }, search: { mode: "dnd" } });
    } catch (I) {
      console.error("[DnD] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", I), V.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
  };
  return e.jsxs("div", { className: "max-w-4xl mx-auto space-y-8 pb-12", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs(N, { type: "button", variant: "ghost", size: "sm", className: "-ml-2 text-muted-foreground", onClick: () => s({ to: "/plaza/characters" }), children: [e.jsx(Rs, { className: "w-4 h-4 mr-1" }), " \u8FD4\u56DE"] }) }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-3", children: [e.jsx(Ze, { className: "w-8 h-8 text-amber-500" }), "\u521B\u5EFA DnD \u5192\u9669"] }), e.jsx("p", { className: "text-muted-foreground", children: "\u914D\u7F6E\u4E16\u754C\u8BBE\u5B9A\u3001\u9009\u62E9\u5192\u9669\u89D2\u8272\uFF0C\u5F00\u542F\u4E00\u6BB5\u684C\u6E38\u98CE\u683C\u7684\u591A\u4EBA\u5192\u9669\u3002" })] }), e.jsxs(B, { children: [e.jsxs(z, { children: [e.jsxs(J, { className: "flex items-center gap-2 text-lg", children: [e.jsx(Qa, { className: "w-5 h-5 text-primary" }), "\u4E16\u754C\u8BBE\u5B9A"] }), e.jsx(se, { children: "\u63CF\u8FF0\u5192\u9669\u53D1\u751F\u7684\u4E16\u754C\u80CC\u666F" })] }), e.jsxs(G, { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: "world-name", children: "\u4E16\u754C\u540D\u79F0 *" }), e.jsx(L, { id: "world-name", placeholder: "\u4F8B\u5982\uFF1A\u88AB\u9057\u5FD8\u7684\u56FD\u5EA6", value: t, onChange: (y) => a(y.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: "world-desc", children: "\u4E16\u754C\u7B80\u4ECB" }), e.jsx(L, { id: "world-desc", placeholder: "\u4E00\u53E5\u8BDD\u63CF\u8FF0\u8FD9\u4E2A\u4E16\u754C", value: r, onChange: (y) => n(y.target.value) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: "world-prompt", children: "DM \u7CFB\u7EDF\u63D0\u793A\u8BCD *" }), e.jsx(X, { id: "world-prompt", placeholder: "\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684 DM\uFF0C\u64C5\u957F\u5728\u4E2D\u4E16\u7EAA\u5947\u5E7B\u4E16\u754C\u4E2D\u5F15\u5BFC\u5192\u9669...", className: "min-h-32", value: i, onChange: (y) => o(y.target.value) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u6307\u5BFC LLM \u5982\u4F55\u626E\u6F14 DM\u3002\u5305\u62EC\u4E16\u754C\u89C4\u5219\u3001\u8BED\u6C14\u98CE\u683C\u3001\u53D9\u4E8B\u504F\u597D\u7B49\u3002" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: "world-knowledge", children: "\u4E16\u754C\u89C2\u8865\u5145\uFF08\u53EF\u9009\uFF09" }), e.jsx(X, { id: "world-knowledge", placeholder: "\u8865\u5145\u7684\u5730\u7406\u3001\u5386\u53F2\u3001\u9635\u8425\u3001NPC \u7B49\u4FE1\u606F...", className: "min-h-20", value: u, onChange: (y) => d(y.target.value) })] })] })] }), e.jsxs(B, { children: [e.jsxs(z, { children: [e.jsxs(J, { className: "flex items-center gap-2 text-lg", children: [e.jsx(tt, { className: "w-5 h-5 text-primary" }), "\u5192\u9669\u89D2\u8272"] }), e.jsx(se, { children: "\u4ECE\u5DF2\u6709\u89D2\u8272\u4E2D\u9009\u62E9\u53C2\u4E0E\u5192\u9669\u7684\u89D2\u8272\uFF0C\u5E76\u914D\u7F6E DnD \u5C5E\u6027" })] }), e.jsxs(G, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { children: "\u6DFB\u52A0\u89D2\u8272" }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [x.filter((y) => !f.has(y.id)).map((y) => e.jsxs(N, { type: "button", variant: "outline", size: "sm", className: "gap-2", onClick: () => v(y), children: [e.jsx(ye, { className: "w-3 h-3" }), y.name] }, y.id)), x.length === 0 && e.jsxs("p", { className: "text-sm text-muted-foreground py-2", children: ["\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148", e.jsx(N, { type: "button", variant: "link", className: "px-1 h-auto", onClick: () => s({ to: "/create/character" }), children: "\u521B\u5EFA\u89D2\u8272" })] })] })] }), c.length > 0 && e.jsxs("div", { className: "space-y-4", children: [e.jsx(k, { children: "\u5DF2\u9009\u89D2\u8272\u914D\u7F6E" }), c.map((y) => e.jsx(xn, { config: y, onUpdate: (P) => g(y.characterId, P), onUpdateAttribute: (P, I) => _(y.characterId, P, I), onRemove: () => j(y.characterId) }, y.characterId))] }), c.length === 0 && e.jsxs("div", { className: "text-center py-10 border border-dashed rounded-xl", children: [e.jsx(tt, { className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u4ECE\u4E0A\u65B9\u9009\u62E9\u89D2\u8272\u52A0\u5165\u5192\u9669" })] })] })] }), e.jsxs(B, { children: [e.jsx(z, { children: e.jsxs(J, { className: "flex items-center gap-2 text-lg", children: [e.jsx(Le, { className: "w-5 h-5 text-primary" }), "\u6E38\u620F\u8BBE\u7F6E"] }) }), e.jsx(G, { className: "space-y-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { children: "\u6E38\u620F\u6A21\u5F0F" }), e.jsxs(ze, { value: l, onValueChange: (y) => m(y), children: [e.jsx(Je, { className: "w-full md:w-80", children: e.jsx(qe, {}) }), e.jsxs(Ke, { children: [e.jsx(de, { value: "standard", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Ve, { className: "w-4 h-4" }), "\u6807\u51C6\u6A21\u5F0F \u2014 \u5B8C\u6574\u68C0\u5B9A\u6D41\u7A0B"] }) }), e.jsx(de, { value: "narrative", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Ve, { className: "w-4 h-4" }), "\u53D9\u4E8B\u6A21\u5F0F \u2014 DM \u53EF\u8DF3\u8FC7\u68C0\u5B9A"] }) }), e.jsx(de, { value: "hardcore", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Ve, { className: "w-4 h-4" }), "\u786C\u6838\u6A21\u5F0F \u2014 \u4E25\u683C\u89C4\u5219\uFF0C\u9AD8 DC"] }) }), e.jsx(de, { value: "solo", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Ve, { className: "w-4 h-4" }), "\u72EC\u594F\u6A21\u5F0F \u2014 \u5168 AI \u81EA\u52A8\u8FD0\u884C"] }) })] })] })] }) })] }), e.jsxs("div", { className: "flex justify-end gap-4", children: [e.jsx(N, { type: "button", variant: "outline", onClick: () => s({ to: "/plaza/characters" }), children: "\u53D6\u6D88" }), e.jsxs(N, { type: "button", size: "lg", className: "gap-2 px-8", onClick: S, disabled: !t.trim() || !i.trim() || c.length === 0, children: [e.jsx(Xt, { className: "w-5 h-5" }), "\u5F00\u59CB\u5192\u9669"] })] })] });
}, pn = ["\u529B\u91CF", "\u654F\u6377", "\u4F53\u8D28", "\u667A\u529B", "\u611F\u77E5", "\u9B45\u529B"], xn = ({ config: s, onUpdate: t, onUpdateAttribute: a, onRemove: r }) => e.jsxs("div", { className: T("p-4 rounded-xl border relative group transition-colors", s.isHumanControlled ? "border-blue-500/30 bg-blue-500/5" : "border-muted/50 bg-muted/10"), children: [e.jsx(N, { type: "button", variant: "ghost", size: "icon", className: "absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: r, children: e.jsx(Mt, { className: "w-4 h-4 text-muted-foreground" }) }), e.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [e.jsx("div", { className: T("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", s.isHumanControlled ? "bg-blue-500/20" : "bg-muted"), children: s.isHumanControlled ? e.jsx(gt, { className: "w-5 h-5 text-blue-500" }) : e.jsx(ie, { className: "w-5 h-5 text-muted-foreground" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "font-bold", children: s.name }), e.jsx(U, { variant: "outline", className: "text-[9px]", children: s.isHumanControlled ? "\u73A9\u5BB6\u63A7\u5236" : "AI \u63A7\u5236" })] }), e.jsx("p", { className: "text-xs text-muted-foreground truncate", children: s.description })] })] }), e.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-4", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(k, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "\u79CD\u65CF" }), e.jsx(L, { value: s.race, onChange: (n) => t({ race: n.target.value }), className: "h-8 text-sm", placeholder: "\u4EBA\u7C7B" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(k, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "\u804C\u4E1A" }), e.jsx(L, { value: s.class, onChange: (n) => t({ class: n.target.value }), className: "h-8 text-sm", placeholder: "\u6218\u58EB" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(k, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "HP" }), e.jsx(L, { type: "number", value: s.maxHP, onChange: (n) => {
  const i = Number(n.target.value) || 20;
  t({ maxHP: i, currentHP: i });
}, className: "h-8 text-sm", min: 1 })] }), e.jsx("div", { className: "flex items-end pb-1", children: e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [e.jsx(Jt, { checked: s.isHumanControlled, onCheckedChange: (n) => t({ isHumanControlled: !!n }) }), e.jsx("span", { className: "text-xs font-medium", children: "\u73A9\u5BB6\u63A7\u5236" })] }) })] }), e.jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-2", children: pn.map((n) => e.jsxs("div", { className: "space-y-1", children: [e.jsx(k, { className: "text-[9px] uppercase tracking-wider text-muted-foreground text-center block", children: n }), e.jsx(L, { type: "number", value: s.attributes[n], onChange: (i) => a(n, Number(i.target.value) || 10), className: "h-8 text-sm text-center font-mono", min: 1, max: 30 })] }, n)) })] }), gn = { keys: [], content: "", enabled: true, insertion_order: 100, use_regex: false, extensions: {} }, fn = /[,，]/, bn = (s) => {
  var _a;
  const [t, a] = b.useState(((_a = s.value) == null ? void 0 : _a.entries) || []), [r, n] = b.useState(null), i = (m) => {
    var _a2;
    a(m), s.onChange({ ...s.value, entries: m, extensions: ((_a2 = s.value) == null ? void 0 : _a2.extensions) || {} });
  }, o = () => {
    const m = { ...gn, id: crypto.randomUUID() };
    i([...t, m]), n(t.length);
  }, u = (m) => {
    i(t.filter((c, p) => p !== m)), r === m && n(null);
  }, d = (m, c) => {
    const p = [...t];
    p[m] = { ...p[m], ...c }, i(p);
  }, l = (m) => {
    n(r === m ? null : m);
  };
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h3", { className: "text-sm font-medium", children: ["\u77E5\u8BC6\u4E66\u6761\u76EE (", t.length, ")"] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u5F53\u5173\u952E\u8BCD\u5728\u5BF9\u8BDD\u4E2D\u5339\u914D\u65F6\uFF0C\u81EA\u52A8\u63D2\u5165\u76F8\u5173\u8BBE\u5B9A" })] }), e.jsxs(N, { variant: "outline", size: "sm", onClick: o, type: "button", className: "h-8", children: [e.jsx(ye, { className: "w-3.5 h-3.5 mr-1" }), " \u6DFB\u52A0\u6761\u76EE"] })] }), e.jsx("div", { className: "space-y-2", children: t.length === 0 ? e.jsxs("div", { className: "py-12 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(et, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-xs", children: "\u6682\u65E0\u77E5\u8BC6\u4E66\u6761\u76EE" })] }) : t.map((m, c) => e.jsxs(B, { className: T("overflow-hidden border-muted/60 shadow-none transition-all", r === c ? "ring-1 ring-primary/20" : "hover:border-primary/20"), children: [e.jsxs("div", { className: "px-4 py-3 flex items-center justify-between cursor-pointer group", onClick: () => l(c), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [e.jsx("div", { className: T("w-2 h-2 rounded-full", m.enabled ? "bg-green-500" : "bg-muted-foreground/30") }), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: m.name || (m.keys.length > 0 ? m.keys.slice(0, 3).join(", ") : "(\u672A\u547D\u540D\u6761\u76EE)") }), e.jsxs("span", { className: "text-[10px] text-muted-foreground truncate", children: ["\u4F18\u5148\u7EA7: ", m.insertion_order, " | ", "use_regex" in m && m.use_regex ? "\u6B63\u5219" : "\u666E\u901A"] })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(N, { variant: "ghost", size: "icon", className: "h-8 w-8 text-destructive opacity-0 group-hover:opacity-100 transition-opacity", onClick: (p) => {
    p.stopPropagation(), u(c);
  }, type: "button", children: e.jsx(Fe, { className: "w-3.5 h-3.5" }) }), r === c ? e.jsx(Za, { className: "w-4 h-4 text-muted-foreground" }) : e.jsx(Ts, { className: "w-4 h-4 text-muted-foreground" })] })] }), r === c && e.jsxs(G, { className: "px-4 pb-4 pt-1 space-y-4 border-t border-muted/40 bg-muted/5 animate-in slide-in-from-top-2 duration-200", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { className: "text-xs", children: "\u6761\u76EE\u540D\u79F0 (\u53EF\u9009)" }), e.jsx(L, { value: m.name || "", onChange: (p) => d(c, { name: p.target.value }), placeholder: "\u7ED9\u6761\u76EE\u4E00\u4E2A\u4FBF\u4E8E\u8BC6\u522B\u7684\u540D\u5B57", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "flex items-end gap-6 h-8", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(xt, { checked: m.enabled, onCheckedChange: (p) => d(c, { enabled: p }) }), e.jsx(k, { className: "text-xs", children: "\u542F\u7528\u72B6\u6001" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(xt, { checked: "use_regex" in m ? m.use_regex : false, onCheckedChange: (p) => d(c, { use_regex: p }) }), e.jsx(k, { className: "text-xs", children: "\u6B63\u5219\u5339\u914D" })] })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(k, { className: "text-xs flex items-center gap-1.5", children: ["\u89E6\u53D1\u5173\u952E\u8BCD (Keys)", e.jsx(It, { className: "w-3 h-3 text-muted-foreground" })] }), e.jsx(L, { value: m.keys.join(", "), onChange: (p) => d(c, { keys: p.target.value.split(fn).map((x) => x.trim()).filter(Boolean) }), placeholder: "\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u5173\u952E\u8BCD", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { className: "text-xs", children: "\u5185\u5BB9 (Content)" }), e.jsx(X, { value: m.content, onChange: (p) => d(c, { content: p.target.value }), placeholder: "\u5339\u914D\u65F6\u6CE8\u5165\u7684\u6587\u672C\u5185\u5BB9", className: "min-h-24 text-xs font-mono" })] }), e.jsx("div", { className: "grid grid-cols-2 gap-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { className: "text-xs", children: "\u63D2\u5165\u987A\u5E8F (Insertion Order)" }), e.jsx(L, { type: "number", value: m.insertion_order, onChange: (p) => d(c, { insertion_order: Number.parseInt(p.target.value) || 0 }), className: "h-8 text-xs" })] }) })] })] }, m.id || `entry-${c}`)) })] });
}, Ft = { name: "", nickname: "", description: "", personality: "", scenario: "", first_mes: "", mes_example: "", system_prompt: "", post_history_instructions: "", creator_notes: "", creator: "", character_version: "1.0.0", tags: [], alternate_greetings: [], avatar: "", imageBase64: "", character_book: void 0 }, re = fe({ formData: { ...Ft }, updateField(s, t) {
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
  s ? Object.assign(this.formData, { ...s, tags: s.tags || [], alternate_greetings: [...s.alternate_greetings || []], character_book: s.character_book ? { ...s.character_book, entries: s.character_book.entries.map((t) => ({ ...t, keys: [...t.keys], extensions: { ...t.extensions }, secondary_keys: t.secondary_keys ? [...t.secondary_keys] : void 0, comment: t.comment })), extensions: { ...s.character_book.extensions } } : void 0 }) : Object.assign(this.formData, Ft);
}, resetForm() {
  Object.assign(this.formData, Ft);
}, getFormDataForSave() {
  return me(this.formData);
} }), yn = /[,，]/, uo = (s) => {
  const { className: t } = s, a = s.mode || (s.initialData ? "edit" : "create"), r = b.useId(), n = b.useRef(null), i = b.useRef(null), o = at(re), [u, d] = b.useState(false), [l, m] = b.useState(false);
  b.useEffect(() => {
    re.loadInitialData(s.initialData);
  }, [s.initialData]);
  const c = (_) => {
    const { name: S, value: y } = _.target;
    S === "tags" ? re.setTags(y.split(yn).map((P) => P.trim()).filter(Boolean)) : re.updateField(S, y);
  }, p = (_) => {
    var _a;
    const S = (_a = _.target.files) == null ? void 0 : _a[0];
    if (S) {
      const y = new FileReader();
      y.onloadend = () => {
        re.setAvatar(y.result);
      }, y.readAsDataURL(S);
    }
  }, x = (_) => {
    var _a;
    const S = (_a = _.target.files) == null ? void 0 : _a[0];
    if (S) {
      const y = new FileReader();
      y.onloadend = () => {
        re.setLargeImage(y.result);
      }, y.readAsDataURL(S);
    }
  }, f = () => {
    re.addGreeting();
  }, v = (_, S) => {
    re.updateGreeting(_, S);
  }, j = (_) => {
    re.removeGreeting(_);
  }, g = (_) => {
    _.preventDefault(), s.onSave(re.getFormDataForSave());
  };
  return e.jsxs(B, { className: T("max-w-4xl mx-auto shadow-lg border-muted/60", t), children: [e.jsx(z, { className: "pb-4", children: e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: e.jsx(Ie, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(J, { className: "text-xl", children: a === "edit" ? "\u7F16\u8F91\u89D2\u8272" : "\u521B\u4F5C\u8005\u5DE5\u574A" }), e.jsx(se, { children: a === "edit" ? "\u4FEE\u6539\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" : "\u5B9A\u4E49\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" })] })] }) }) }), e.jsxs("form", { onSubmit: g, children: [e.jsx(G, { children: e.jsxs(Va, { type: "multiple", defaultValue: ["identity", "dialogue", "prompt", "meta"], className: "w-full", children: [e.jsxs(dt, { className: "border-none", value: "identity", children: [e.jsx(mt, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u8EAB\u4EFD\u8BBE\u5B9A" }) }), e.jsxs(ut, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-start", children: [e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-32 h-32 rounded-2xl bg-muted border-2 border-dashed ${u ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a;
    return (_a = n.current) == null ? void 0 : _a.click();
  }, onDragOver: (_) => {
    _.preventDefault(), d(true);
  }, onDragLeave: () => d(false), onDrop: (_) => {
    var _a, _b;
    _.preventDefault(), d(false);
    const S = (_a = _.dataTransfer.files) == null ? void 0 : _a[0];
    if ((_b = S == null ? void 0 : S.type) == null ? void 0 : _b.startsWith("image/")) {
      const y = new FileReader();
      y.onloadend = () => {
        re.setAvatar(y.result);
      }, y.readAsDataURL(S);
    }
  }, children: [o.formData.avatar ? e.jsx("img", { src: o.formData.avatar, alt: "Avatar", className: "w-full h-full object-cover" }) : e.jsx(Bt, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(ye, { className: "w-6 h-6 text-white" }) })] }), e.jsx(L, { type: "file", ref: n, className: "hidden", accept: "image/*", onChange: p }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5934\u50CF" })] }), e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-64 h-32 rounded-2xl bg-muted border-2 border-dashed ${l ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a;
    return (_a = i.current) == null ? void 0 : _a.click();
  }, onDragOver: (_) => {
    _.preventDefault(), m(true);
  }, onDragLeave: () => m(false), onDrop: (_) => {
    var _a, _b;
    _.preventDefault(), m(false);
    const S = (_a = _.dataTransfer.files) == null ? void 0 : _a[0];
    if ((_b = S == null ? void 0 : S.type) == null ? void 0 : _b.startsWith("image/")) {
      const y = new FileReader();
      y.onloadend = () => {
        re.setLargeImage(y.result);
      }, y.readAsDataURL(S);
    }
  }, children: [o.formData.imageBase64 ? e.jsx("img", { src: o.formData.imageBase64, alt: "\u89D2\u8272\u5927\u56FE", className: "w-full h-full object-cover" }) : e.jsx(Bt, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(ye, { className: "w-6 h-6 text-white" }) })] }), e.jsx(L, { type: "file", ref: i, className: "hidden", accept: "image/*", onChange: x }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5927\u56FE" })] }), e.jsxs("div", { className: "grow space-y-4 w-full", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-name`, children: "\u57FA\u672C\u540D\u79F0 (Name)" }), e.jsx(L, { id: `${r}-name`, name: "name", value: o.formData.name, onChange: c, placeholder: "\u5982\uFF1A\u827E\u7433", required: true })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-nickname`, children: "\u5934\u8854/\u6635\u79F0 (Nickname)" }), e.jsx(L, { id: `${r}-nickname`, name: "nickname", value: o.formData.nickname, onChange: c, placeholder: "\u5982\uFF1A\u6668\u66E6\u4E4B\u5203" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-tags`, children: "\u68C0\u7D22\u6807\u7B7E (Tags)" }), e.jsx(L, { id: `${r}-tags`, name: "tags", value: o.formData.tags.join(", "), onChange: c, placeholder: "\u7528\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u5947\u5E7B, \u7CBE\u7075, \u6218\u58EB" })] })] })] }), e.jsxs("div", { className: "space-y-4 pt-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-personality`, children: "\u4EBA\u683C/\u6027\u683C (Personality)" }), e.jsx(X, { id: `${r}-personality`, name: "personality", value: o.formData.personality, onChange: c, placeholder: "\u8BE6\u7EC6\u63CF\u8FF0\u89D2\u8272\u7684\u6027\u683C\u3001\u602A\u7656\u3001\u601D\u7EF4\u903B\u8F91\u7B49", className: "min-h-32 leading-relaxed" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-description`, children: "\u8EAB\u4E16/\u63CF\u8FF0 (Description)" }), e.jsx(X, { id: `${r}-description`, name: "description", value: o.formData.description, onChange: c, placeholder: "\u89D2\u8272\u7684\u8FC7\u5F80\u3001\u5916\u8C8C\u63CF\u8FF0\u4E0E\u80CC\u666F\u6545\u4E8B", className: "min-h-32 leading-relaxed" })] })] })] })] }), e.jsxs(dt, { className: "border-none", value: "dialogue", children: [e.jsx(mt, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5BF9\u8BDD\u5199\u4F5C" }) }), e.jsxs(ut, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(k, { htmlFor: `${r}-first_mes`, className: "flex items-center gap-2", children: [e.jsx(Wt, { className: "w-4 h-4 text-primary" }), "\u5F00\u573A\u8BED (First Message)"] }), e.jsx(X, { id: `${r}-first_mes`, name: "first_mes", value: o.formData.first_mes, onChange: c, placeholder: "\u8FDB\u5165\u5BF9\u8BDD\u540E\u89D2\u8272\u7684\u7B2C\u4E00\u53E5\u8BDD", className: "min-h-32" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx(k, { className: "text-sm", children: "\u5907\u7528\u95EE\u5019\u8BED (Alternate Greetings)" }), e.jsxs(N, { variant: "ghost", size: "sm", onClick: f, type: "button", className: "h-8 rounded-lg", children: [e.jsx(ye, { className: "w-3 h-3 mr-1" }), " \u6DFB\u52A0"] })] }), e.jsx("div", { className: "space-y-2", children: o.formData.alternate_greetings.map((_, S) => e.jsxs("div", { className: "flex gap-2", children: [e.jsx(X, { value: _, onChange: (y) => v(S, y.target.value), placeholder: `\u95EE\u5019\u8BED\u5019\u9009 ${S + 1}`, className: "min-h-16 text-sm" }), e.jsx(N, { variant: "ghost", size: "icon", onClick: () => j(S), type: "button", className: "h-10 w-10 text-destructive shrink-0", children: e.jsx(Fe, { className: "w-4 h-4" }) })] }, `greeting-${S}-${_.length}`)) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-scenario`, children: "\u5BF9\u8BDD\u573A\u666F\u8BBE\u5B9A (Scenario)" }), e.jsx(X, { id: `${r}-scenario`, name: "scenario", value: o.formData.scenario, onChange: c, placeholder: "\u5B9A\u4E49\u5F00\u573A\u65F6\u6240\u5904\u7684\u7279\u5B9A\u73AF\u5883\u6216\u5F53\u524D\u53D1\u751F\u7684\u4E8B\u4EF6", className: "min-h-24" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-mes_example`, children: "\u4E66\u5199\u98CE\u683C\u793A\u4F8B (Message Examples)" }), e.jsxs(se, { className: "text-xs mb-2", children: ["\u4F7F\u7528 <START> \u5F00\u59CB\u4E00\u6BB5\u793A\u4F8B\uFF0C", "{{user}}", " \u4EE3\u8868\u7528\u6237"] }), e.jsx(X, { id: `${r}-mes_example`, name: "mes_example", value: o.formData.mes_example, onChange: c, placeholder: "<START>\\n{{user}}: \u4F60\u662F\u8C01\uFF1F\\n\u89D2\u8272: \u6211\u662F...", className: "min-h-48 font-mono text-xs" })] })] })] }), e.jsxs(dt, { className: "border-none", value: "prompt", children: [e.jsx(mt, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "Prompt \u6A21\u677F" }) }), e.jsxs(ut, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(k, { htmlFor: `${r}-system_prompt`, className: "flex items-center gap-2", children: [e.jsx(ft, { className: "w-4 h-4 text-blue-500" }), "\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD (System Prompt Override)"] }), e.jsx(X, { id: `${r}-system_prompt`, name: "system_prompt", value: o.formData.system_prompt, onChange: c, placeholder: "\u8986\u76D6\u89D2\u8272\u7684\u5168\u5C40\u7CFB\u7EDF\u63D0\u793A\u8BCD...", className: "min-h-48 font-mono text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(k, { htmlFor: `${r}-post_history_instructions`, className: "flex items-center gap-2", children: [e.jsx(ft, { className: "w-4 h-4 text-purple-500" }), "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"] }), e.jsx(X, { id: `${r}-post_history_instructions`, name: "post_history_instructions", value: o.formData.post_history_instructions, onChange: c, placeholder: "\u7D27\u968F\u5BF9\u8BDD\u5386\u53F2\u540E\u7684\u7279\u5B9A\u6307\u4EE4\uFF08\u5F3A\u5236\u8F93\u51FA\u683C\u5F0F\u7B49\uFF09", className: "min-h-32 font-mono text-xs" })] })] })] }), e.jsxs(dt, { className: "border-none", value: "meta", children: [e.jsx(mt, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5143\u6570\u636E/\u5907\u6CE8" }) }), e.jsxs(ut, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-creator`, children: "\u5361\u7247\u521B\u5EFA\u8005 (Creator)" }), e.jsx(L, { id: `${r}-creator`, name: "creator", value: o.formData.creator, onChange: c, placeholder: "\u60A8\u7684\u540D\u5B57\u6216 ID" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-character_version`, children: "\u89D2\u8272\u7248\u672C (Version)" }), e.jsx(L, { id: `${r}-character_version`, name: "character_version", value: o.formData.character_version, onChange: c, placeholder: "1.0.0" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-creator_notes`, children: "\u521B\u5EFA\u8005\u5907\u6CE8 (Creator Notes)" }), e.jsx(X, { id: `${r}-creator_notes`, name: "creator_notes", value: o.formData.creator_notes, onChange: c, placeholder: "\u8BB0\u4E0B\u6709\u5173\u6B64\u89D2\u8272\u5361\u7684\u5F00\u53D1\u7B14\u8BB0\uFF0C\u4EC5\u5728\u5DE5\u574A\u53EF\u89C1", className: "min-h-32" })] }), e.jsx("div", { className: "pt-4", children: e.jsx(bn, { value: o.formData.character_book, onChange: (_) => re.updateField("character_book", _) }) })] })] })] }) }), e.jsxs(qt, { className: "flex justify-between border-t py-6 bg-muted/10", children: [e.jsxs(N, { variant: "ghost", type: "button", onClick: s.onCancel, className: "rounded-lg h-11 px-6", children: [e.jsx(Mt, { className: "w-4 h-4 mr-2" }), " ", "\u653E\u5F03\u4FEE\u6539"] }), e.jsxs(N, { type: "submit", className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20", children: [e.jsx(Fs, { className: "w-4 h-4 mr-2" }), " ", a === "edit" ? "\u4FDD\u5B58\u4FEE\u6539" : "\u751F\u6210\u5E76\u4FDD\u5B58\u89D2\u8272\u5361"] })] })] })] });
}, jn = ["isTrue", "isFalse", "eq", "neq", "gt", "gte", "lt", "lte", "includes", "has"], us = ["and", "or"], da = (s) => {
  const { condition: t, variables: a, onChange: r, level: n = 0 } = s, i = t[0], o = Object.keys(a), u = (c) => {
    us.includes(c) ? r([c, [t]]) : ["isTrue", "isFalse"].includes(c) ? r([c, o[0] || ""]) : r([c, o[0] || "", ""]);
  };
  if (us.includes(i)) {
    const c = t[1];
    return e.jsxs("div", { className: `p-4 border rounded-lg space-y-4 bg-muted/5 ${n > 0 ? "ml-6" : ""}`, children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(U, { variant: "outline", className: "bg-primary/5", children: "\u590D\u5408\u903B\u8F91" }), e.jsxs(ze, { value: i, onValueChange: (p) => u(p), children: [e.jsx(Je, { className: "h-8 w-24", children: e.jsx(qe, {}) }), e.jsxs(Ke, { children: [e.jsx(de, { value: "and", children: "\u5E76\u4E14 (AND)" }), e.jsx(de, { value: "or", children: "\u6216\u8005 (OR)" })] })] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(N, { variant: "outline", size: "sm", className: "h-7 text-[10px]", onClick: () => r([...c[0]]), type: "button", children: "\u8F6C\u4E3A\u5355\u4E00\u6761\u4EF6" }), e.jsxs(N, { variant: "outline", size: "sm", className: "h-7 text-[10px]", onClick: () => r([i, [...c, ["isTrue", o[0] || ""]]]), type: "button", children: [e.jsx(ye, { className: "w-3 h-3 mr-1" }), " \u6DFB\u52A0\u5B50\u6761\u4EF6"] })] })] }), e.jsx("div", { className: "space-y-3", children: c.map((p, x) => e.jsxs("div", { className: "relative group", children: [e.jsx(da, { condition: p, variables: a, level: n + 1, onChange: (f) => {
      const v = [...c];
      v[x] = f, r([i, v]);
    } }), e.jsx(N, { variant: "ghost", size: "icon", className: "absolute -right-2 top-0 h-6 w-6 text-destructive opacity-0 group-hover:opacity-100", onClick: () => {
      const f = c.filter((v, j) => j !== x);
      f.length === 0 ? u("isTrue") : r([i, f]);
    }, type: "button", children: e.jsx(Fe, { className: "w-3 h-3" }) })] }, x)) })] });
  }
  const l = t[1], m = t[2];
  return e.jsxs("div", { className: `flex flex-wrap items-center gap-2 p-2 border rounded-md bg-background ${n > 0 ? "ml-6" : ""}`, children: [e.jsxs(ze, { value: l, onValueChange: (c) => {
    const p = [...t];
    p[1] = c, r(p);
  }, children: [e.jsx(Je, { className: "h-8 w-40 overflow-hidden", children: e.jsx(qe, { placeholder: "\u9009\u62E9\u53D8\u91CF" }) }), e.jsx(Ke, { children: o.map((c) => e.jsx(de, { value: c, children: c }, c)) })] }), e.jsxs(ze, { value: i, onValueChange: (c) => u(c), children: [e.jsx(Je, { className: "h-8 w-28", children: e.jsx(qe, {}) }), e.jsx(Ke, { children: jn.map((c) => e.jsx(de, { value: c, children: c }, c)) })] }), !["isTrue", "isFalse"].includes(i) && e.jsx(L, { value: String(m ?? ""), onChange: (c) => {
    const p = [...t];
    let x = c.target.value;
    x === "true" ? x = true : x === "false" ? x = false : !isNaN(Number(x)) && x.trim() !== "" && (x = Number(x)), p[2] = x, r(p);
  }, placeholder: "\u76EE\u6807\u503C", className: "h-8 w-32 text-xs" }), e.jsx("div", { className: "ml-auto flex gap-1", children: e.jsx(N, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: () => u("and"), type: "button", children: e.jsx(Us, { className: "w-4 h-4" }) }) })] });
}, hs = (s) => {
  const { variables: t, title: a = "\u4EFB\u52A1\u76EE\u6807", description: r = "\u5B9A\u4E49\u6311\u6218\u6A21\u5F0F\u4E0B\u9700\u8981\u8FBE\u6210\u7684\u91CC\u7A0B\u7891" } = s, [n, i] = b.useState(s.value || []), o = (m) => {
    i(m), s.onChange(m);
  }, u = () => {
    const m = { key: `goal_${O(5)}`, description: "", condition: ["eq", Object.keys(t)[0] || "", ""], characterPrompt: "", userInfo: "" };
    o([...n, m]);
  }, d = (m) => {
    o(n.filter((c) => c.key !== m));
  }, l = (m, c) => {
    o(n.map((p) => p.key === m ? { ...p, ...c } : p));
  };
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h3", { className: "text-sm font-medium", children: [a, " (", n.length, ")"] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: r })] }), e.jsxs(N, { variant: "outline", size: "sm", onClick: u, type: "button", className: "h-8", children: [e.jsx(ye, { className: "w-3.5 h-3.5 mr-1" }), " \u6DFB\u52A0\u9879"] })] }), e.jsx("div", { className: "space-y-3", children: n.length === 0 ? e.jsxs("div", { className: "py-8 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(Dt, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-xs", children: "\u6682\u65E0\u914D\u7F6E\u9879" })] }) : n.map((m) => e.jsx(B, { className: "border-muted/60 shadow-none", children: e.jsx(G, { className: "p-4 space-y-4", children: e.jsxs("div", { className: "flex gap-4", children: [e.jsxs("div", { className: "grow space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(k, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx(Le, { className: "w-3 h-3" }), " \u552F\u4E00\u6807\u8BC6 (Key)"] }), e.jsx(L, { value: m.key, onChange: (c) => l(m.key, { key: c.target.value }), placeholder: "\u552F\u4E00\u8BC6\u522B\u7801", className: "h-9 text-sm font-mono" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(k, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx(er, { className: "w-3 h-3" }), " \u663E\u793A\u63CF\u8FF0"] }), e.jsx(L, { value: m.description, onChange: (c) => l(m.key, { description: c.target.value }), placeholder: "\u4F8B\u5982\uFF1A\u8BF4\u670D\u827E\u7433\u653E\u4E0B\u6B66\u5668", className: "h-9 text-sm" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(k, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx(Le, { className: "w-3 h-3" }), " \u89E6\u53D1\u6761\u4EF6 (\u7ED3\u6784\u5316\u903B\u8F91)"] }), e.jsx(da, { condition: m.condition, variables: t, onChange: (c) => l(m.key, { condition: c }) })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(k, { className: "text-xs flex items-center gap-1.5 font-bold opacity-70", children: [e.jsx(Wt, { className: "w-3 h-3" }), " \u89D2\u8272\u63D0\u793A (\u89E6\u53D1\u540E)"] }), e.jsx(X, { value: m.characterPrompt || "", onChange: (c) => l(m.key, { characterPrompt: c.target.value }), placeholder: "\u89E6\u53D1\u540E\u5BF9\u89D2\u8272\u7684\u989D\u5916\u6307\u4EE4...", className: "min-h-15 text-xs resize-none" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(k, { className: "text-xs flex items-center gap-1.5 font-bold opacity-70", children: [e.jsx(It, { className: "w-3 h-3" }), " \u7528\u6237\u6D88\u606F (\u89E6\u53D1\u540E)"] }), e.jsx(X, { value: m.userInfo || "", onChange: (c) => l(m.key, { userInfo: c.target.value }), placeholder: "\u89E6\u53D1\u540E\u663E\u793A\u7ED9\u7528\u6237\u7684\u4FE1\u606F...", className: "min-h-15 text-xs resize-none" })] })] })] }), e.jsx(N, { variant: "ghost", size: "icon", className: "h-8 w-8 text-destructive self-start", onClick: () => d(m.key), type: "button", children: e.jsx(Fe, { className: "w-3.5 h-3.5" }) })] }) }) }, m.key)) })] });
}, vn = /[,，]/, _n = (s) => {
  const { variables: t, variableConfigs: a, onChange: r } = s, [n, i] = b.useState(""), o = () => {
    const l = n.trim();
    if (!l || t[l]) return;
    const m = { key: l, type: "number", hidden: false, initial: 0 }, c = 0;
    r({ ...t, [l]: { key: l, value: c } }, { ...a, [l]: m }), i("");
  }, u = (l) => {
    const m = { ...t };
    delete m[l];
    const c = { ...a };
    delete c[l], r(m, c);
  }, d = (l, m) => {
    const c = a[l];
    if (!c) return;
    let p = { ...c, ...m };
    m.type && m.type !== c.type && (m.type === "number" ? p = { key: l, type: "number", hidden: false, initial: 0 } : m.type === "boolean" ? p = { key: l, type: "boolean", hidden: false, initial: false } : m.type === "string" ? p = { key: l, type: "string", hidden: false, initial: "" } : m.type === "tags" && (p = { key: l, type: "tags", hidden: false, initial: [] }));
    const x = { ...a, [l]: p }, f = { ...t, [l]: { key: l, value: p.initial ?? 0 } };
    r(f, x);
  };
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex gap-2", children: [e.jsx("div", { className: "grow", children: e.jsx(L, { value: n, onChange: (l) => i(l.target.value), placeholder: "\u53D8\u91CF\u952E\u540D (\u5982\uFF1Atrust, points, health)", onKeyDown: (l) => {
    l.key === "Enter" && (l.preventDefault(), o());
  } }) }), e.jsxs(N, { onClick: o, type: "button", disabled: !n.trim() || !!t[n.trim()], children: [e.jsx(ye, { className: "w-4 h-4 mr-2" }), " \u6DFB\u52A0\u53D8\u91CF"] })] }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: Object.entries(a).length === 0 ? e.jsxs("div", { className: "col-span-full p-12 border border-dashed rounded-xl flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(Gt, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-sm", children: "\u6682\u672A\u5B9A\u4E49\u4EFB\u4F55\u53D8\u91CF" })] }) : Object.entries(a).map(([l, m]) => e.jsxs(B, { className: "relative group border-muted/60 hover:border-primary/30 transition-colors", children: [e.jsx(N, { variant: "ghost", size: "icon", className: "absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity z-10", onClick: () => u(l), type: "button", children: e.jsx(Fe, { className: "w-3.5 h-3.5" }) }), e.jsxs(G, { className: "p-4 space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("div", { className: "bg-primary/10 p-1.5 rounded-lg", children: e.jsx(Le, { className: "w-4 h-4 text-primary" }) }), e.jsx("span", { className: "font-bold text-sm truncate pr-8", children: l })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(k, { className: "text-[10px] uppercase text-muted-foreground font-bold", children: "\u6570\u636E\u7C7B\u578B" }), e.jsxs(ze, { value: m.type, onValueChange: (c) => d(l, { type: c }), children: [e.jsx(Je, { className: "h-8 text-sm", children: e.jsx(qe, {}) }), e.jsxs(Ke, { children: [e.jsxs(de, { value: "number", className: "text-xs", children: [e.jsx(Gt, { className: "w-3 h-3 inline mr-1" }), " \u6570\u503C"] }), e.jsxs(de, { value: "boolean", className: "text-xs", children: [e.jsx(tr, { className: "w-3 h-3 inline mr-1" }), " \u5E03\u5C14"] }), e.jsxs(de, { value: "string", className: "text-xs", children: [e.jsx(sr, { className: "w-3 h-3 inline mr-1" }), " \u6587\u672C"] }), e.jsxs(de, { value: "tags", className: "text-xs", children: [e.jsx(Os, { className: "w-3 h-3 inline mr-1" }), " \u6807\u7B7E\u96C6\u5408"] })] })] })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(k, { className: "text-[10px] uppercase text-muted-foreground font-bold", children: "\u521D\u59CB\u503C (Initial)" }), m.type === "number" && e.jsx(L, { type: "number", value: m.initial, onChange: (c) => d(l, { initial: Number(c.target.value) }), className: "h-8 text-sm font-mono" }), m.type === "boolean" && e.jsxs("div", { className: "flex items-center gap-2 h-8", children: [e.jsx(xt, { checked: m.initial, onCheckedChange: (c) => d(l, { initial: c }) }), e.jsx("span", { className: "text-xs font-medium", children: m.initial ? "\u5F00\u542F/\u771F" : "\u5173\u95ED/\u5047" })] }), m.type === "string" && e.jsx(L, { value: m.initial, onChange: (c) => d(l, { initial: c.target.value }), className: "h-8 text-sm" }), m.type === "tags" && e.jsx(L, { value: m.initial.join(", "), onChange: (c) => d(l, { initial: c.target.value.split(vn).map((p) => p.trim()).filter(Boolean) }), placeholder: "\u9017\u53F7\u5206\u9694\u521D\u59CB\u6807\u7B7E", className: "h-8 text-sm" })] }), m.type === "number" && e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-1", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(k, { className: "text-[10px] text-muted-foreground", children: "\u6700\u5C0F\u503C" }), e.jsx(L, { type: "number", value: m.min ?? "", onChange: (c) => d(l, { min: c.target.value ? Number(c.target.value) : void 0 }), className: "h-7 text-[10px] px-2" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(k, { className: "text-[10px] text-muted-foreground", children: "\u6700\u5927\u503C" }), e.jsx(L, { type: "number", value: m.max ?? "", onChange: (c) => d(l, { max: c.target.value ? Number(c.target.value) : void 0 }), className: "h-7 text-[10px] px-2" })] })] })] })] })] }, l)) })] });
}, Ut = { id: "", characterId: "", roleTaskPrompt: "", userGuidance: "", name: "", description: "", goals: [], failureChecks: [], variables: {}, tags: [] }, Ot = {}, Ht = {}, le = fe({ formData: { ...Ut }, variables: { ...Ot }, variableConfigs: { ...Ht }, updateField(s, t) {
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
  s ? (Object.assign(this.formData, { ...s, goals: s.goals || [], failureChecks: s.failureChecks || [], variables: s.variables || {}, tags: s.tags || [], ...s.createdAt ? { createdAt: s.createdAt } : {}, ...s.updatedAt ? { updatedAt: s.updatedAt } : {} }), this.variableConfigs = s.variables || {}) : (Object.assign(this.formData, Ut), this.variables = { ...Ot }, this.variableConfigs = { ...Ht });
}, resetForm() {
  Object.assign(this.formData, Ut), this.variables = { ...Ot }, this.variableConfigs = { ...Ht };
}, getFormDataForSave() {
  return { ...me(this.formData), variables: me(this.variableConfigs) };
} }), Nn = /[,，]/, ho = (s) => {
  var _a;
  const t = b.useId(), a = at(le);
  b.useEffect(() => {
    le.loadInitialData(s.initialData);
  }, [s.initialData]);
  const r = (n) => {
    n.preventDefault(), s.onSave(le.getFormDataForSave());
  };
  return e.jsxs(B, { className: "max-w-4xl mx-auto shadow-lg border-muted/60", children: [e.jsx(z, { className: "pb-4", children: e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: e.jsx(Re, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(J, { className: "text-xl", children: "\u6311\u6218\u8BBE\u8BA1\u5DE5\u4F5C\u5BA4" }), e.jsx(se, { children: "\u8BBE\u8BA1\u5173\u5361\u76EE\u6807\u3001\u6570\u503C\u53D8\u91CF\u4E0E\u53D9\u4E8B\u89C4\u5219" })] })] }) }) }), e.jsxs("form", { onSubmit: r, children: [e.jsx(G, { children: e.jsxs(Is, { defaultValue: "base", className: "w-full", children: [e.jsxs(Ds, { className: "grid grid-cols-4 w-full h-11 bg-muted/30 p-1 mb-8", children: [e.jsxs(Se, { value: "base", className: "gap-2", children: [e.jsx(ft, { className: "w-4 h-4" }), " \u57FA\u7840\u8BBE\u5B9A"] }), e.jsxs(Se, { value: "goals", className: "gap-2", children: [e.jsx(ar, { className: "w-4 h-4" }), " \u4EFB\u52A1\u76EE\u6807"] }), e.jsxs(Se, { value: "failures", className: "gap-2", children: [e.jsx(rr, { className: "w-4 h-4" }), " \u5931\u8D25\u6761\u4EF6"] }), e.jsxs(Se, { value: "variables", className: "gap-2", children: [e.jsx(Gt, { className: "w-4 h-4" }), " \u6570\u503C\u53D8\u91CF"] })] }), e.jsx(we, { value: "base", className: "space-y-6 animate-in fade-in-50 duration-300", children: e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${t}-name`, children: "\u6311\u6218\u540D\u79F0" }), e.jsx(L, { id: `${t}-name`, value: a.formData.name, onChange: (n) => le.updateField("name", n.target.value), placeholder: "\u5982\uFF1A\u8FF7\u5931\u4E4B\u57CE\u7684\u5951\u7EA6", required: true })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${t}-charId`, children: "\u7ED1\u5B9A\u89D2\u8272 ID" }), e.jsx(L, { id: `${t}-charId`, value: a.formData.characterId, onChange: (n) => le.updateField("characterId", n.target.value), placeholder: "\u4F8B\u5982: kallen-123", required: true })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${t}-desc`, children: "\u80CC\u666F\u4ECB\u7ECD\u4E0E\u89C4\u5219\u8BF4\u660E" }), e.jsx(X, { id: `${t}-desc`, value: a.formData.description, onChange: (n) => le.updateField("description", n.target.value), placeholder: "\u63CF\u8FF0\u8BE5\u6311\u6218\u7684\u80CC\u666F\u6545\u4E8B\uFF0C\u4EE5\u53CA\u73A9\u5BB6\u9700\u8981\u9075\u5B88\u7684\u7279\u6B8A\u89C4\u5219...", className: "min-h-32 leading-relaxed" })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${t}-roleTask`, children: "\u89D2\u8272\u4EFB\u52A1\u63D0\u793A\u8BCD (DM\u89C6\u89D2)" }), e.jsx(X, { id: `${t}-roleTask`, value: a.formData.roleTaskPrompt, onChange: (n) => le.updateField("roleTaskPrompt", n.target.value), placeholder: "\u5728\u8BE5\u6311\u6218\u4E2D\uFF0C\u901A\u8FC7AI\u7CFB\u7EDF\u53D1\u7ED9\u89D2\u8272\u7684\u7279\u6B8A\u6307\u4EE4...", className: "min-h-24 text-xs font-mono" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${t}-userGuidance`, children: "\u7528\u6237\u6307\u5F15\u8BF4\u660E" }), e.jsx(X, { id: `${t}-userGuidance`, value: a.formData.userGuidance, onChange: (n) => le.updateField("userGuidance", n.target.value), placeholder: "\u7ED9\u8FDB\u5165\u6311\u6218\u7684\u7528\u6237\u7684\u6587\u5B57\u6307\u5F15...", className: "min-h-24 text-xs font-mono" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${t}-tags`, children: "\u6311\u6218\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)" }), e.jsx(L, { id: `${t}-tags`, value: (_a = a.formData.tags) == null ? void 0 : _a.join(", "), onChange: (n) => le.setTags(n.target.value.split(Nn).map((i) => i.trim()).filter(Boolean)), placeholder: "\u5947\u5E7B, \u60AC\u7591, \u9AD8\u96BE\u5EA6" })] })] }) }), e.jsx(we, { value: "goals", className: "animate-in fade-in-50 duration-300", children: e.jsx(hs, { value: a.formData.goals, variables: a.variableConfigs, onChange: (n) => le.updateField("goals", n) }) }), e.jsx(we, { value: "failures", className: "animate-in fade-in-50 duration-300", children: e.jsx(hs, { title: "\u5931\u8D25\u68C0\u67E5", description: "\u5B9A\u4E49\u5BFC\u81F4\u6311\u6218\u5931\u8D25\u7684\u6761\u4EF6", value: a.formData.failureChecks, variables: a.variableConfigs, onChange: (n) => le.updateField("failureChecks", n) }) }), e.jsx(we, { value: "variables", className: "animate-in fade-in-50 duration-300", children: e.jsx(_n, { variables: a.variables, variableConfigs: a.variableConfigs, onChange: (n, i) => le.updateVariablesAndConfigs(n, i) }) })] }) }), e.jsxs(qt, { className: "flex justify-between border-t py-6 bg-muted/10", children: [e.jsxs(N, { variant: "ghost", type: "button", onClick: s.onCancel, className: "rounded-lg h-11 px-6", children: [e.jsx(Mt, { className: "w-4 h-4 mr-2" }), " \u653E\u5F03\u4FEE\u6539"] }), e.jsxs(N, { type: "submit", className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20", children: [e.jsx(Fs, { className: "w-4 h-4 mr-2" }), " \u4FDD\u5B58\u6311\u6218\u8BBE\u8BA1"] })] })] })] });
}, Sn = (s) => !s.lorebook || !s.lorebook.entries || s.lorebook.entries.length === 0 ? e.jsx(B, { className: "bg-muted/20 border-dashed", children: e.jsxs(G, { className: "py-10 flex flex-col items-center justify-center text-muted-foreground", children: [e.jsx(nr, { className: "w-10 h-10 mb-3 opacity-20" }), e.jsx("p", { className: "text-sm", children: "\u8BE5\u89D2\u8272\u6682\u65E0\u7ED1\u5B9A\u7684\u77E5\u8BC6\u4E66 (Lorebook)" })] }) }) : e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-wrap gap-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-muted/50 px-3 py-1.5 rounded-full border", children: [e.jsx(et, { className: "w-3.5 h-3.5 text-primary" }), e.jsx("span", { className: "font-medium text-muted-foreground mr-1", children: "\u626B\u63CF\u6DF1\u5EA6:" }), s.lorebook.scan_depth ?? 50] }), e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-muted/50 px-3 py-1.5 rounded-full border", children: [e.jsx(Us, { className: "w-3.5 h-3.5 text-blue-500" }), e.jsx("span", { className: "font-medium text-muted-foreground mr-1", children: "Token \u9884\u7B97:" }), s.lorebook.token_budget ?? 500] }), s.lorebook.recursive_scanning && e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-green-500/5 text-green-600 px-3 py-1.5 rounded-full border border-green-500/20", children: [e.jsx(ir, { className: "w-3.5 h-3.5" }), "\u9012\u5F52\u626B\u63CF\u5DF2\u5F00\u542F"] })] }), e.jsx("div", { className: "grid grid-cols-1 gap-4", children: s.lorebook.entries.map((t, a) => e.jsx(B, { className: "overflow-hidden group hover:border-primary/40 transition-colors shadow-sm", children: e.jsxs("div", { className: "flex", children: [e.jsx("div", { className: "w-1 bg-primary group-hover:w-2 transition-all shrink-0" }), e.jsxs("div", { className: "grow", children: [e.jsxs(z, { className: "py-4 flex flex-row items-start justify-between space-y-0", children: [e.jsxs("div", { className: "space-y-1.5 grow", children: [e.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [e.jsx(J, { className: "text-base font-bold", children: t.name || `\u6761\u76EE ${a + 1}` }), !t.enabled && e.jsx(U, { variant: "secondary", children: "\u5DF2\u7981\u7528" }), t.constant && e.jsx(U, { variant: "outline", className: "text-amber-600 border-amber-200 bg-amber-50", children: "\u5E38\u91CF" })] }), e.jsx("div", { className: "flex flex-wrap gap-1.5", children: t.keys.map((r) => e.jsxs("div", { className: "flex items-center gap-1 bg-primary/5 text-[10px] text-primary px-1.5 py-0.5 rounded border border-primary/10 font-mono", children: [e.jsx(Os, { className: "w-2.5 h-2.5" }), r] }, `key-${r}-${t.id || a}`)) })] }), e.jsxs("div", { className: "text-[10px] text-muted-foreground font-mono text-right shrink-0 ml-4", children: ["Order: ", t.insertion_order, " ", e.jsx("br", {}), "Pos: ", t.position === "before_char" ? "Before Char" : "After Char"] })] }), e.jsxs(G, { className: "pb-4", children: [e.jsx("div", { className: "text-sm bg-muted/30 p-3 rounded-lg border text-muted-foreground leading-relaxed whitespace-pre-wrap", children: t.content }), t.comment && e.jsxs("p", { className: "mt-2 text-[10px] text-muted-foreground italic flex items-center gap-1", children: [e.jsx(et, { className: "w-2.5 h-2.5 opacity-50" }), "\u6CE8: ", t.comment] })] })] })] }) }, t.id || `entry-${a}`)) })] }), po = (s) => e.jsx("div", { className: "space-y-6", children: e.jsxs(Is, { defaultValue: "basic", className: "w-full", children: [e.jsxs(Ds, { className: "grid grid-cols-4 w-full h-11 bg-muted/30 p-1 mb-6", children: [e.jsx(Se, { value: "basic", className: "data-[state=active]:bg-background", children: "\u57FA\u7840\u8BBE\u5B9A" }), e.jsx(Se, { value: "prompt", className: "data-[state=active]:bg-background", children: "\u63D0\u793A\u8BCD\u6A21\u677F" }), e.jsx(Se, { value: "lorebook", className: "data-[state=active]:bg-background", children: "\u77E5\u8BC6\u4E66" }), e.jsx(Se, { value: "advanced", className: "data-[state=active]:bg-background", children: "\u9AD8\u7EA7/\u6269\u5C55" })] }), e.jsxs(we, { value: "basic", className: "space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [e.jsxs(B, { className: "shadow-xs border-muted/50", children: [e.jsx(z, { className: "py-4", children: e.jsxs(J, { className: "text-sm flex items-center gap-2", children: [e.jsx(Ie, { className: "w-4 h-4 text-primary" }), "\u4EBA\u683C\u4E0E\u8EAB\u4E16"] }) }), e.jsxs(G, { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(Ee, { children: "\u4EBA\u683C\u63CF\u8FF0 (Personality)" }), e.jsx(_e, { children: s.character.personality })] }), e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(Ee, { children: "\u89D2\u8272\u63CF\u8FF0 (Description)" }), e.jsx(_e, { children: s.character.description })] })] })] }), e.jsxs(B, { className: "shadow-xs border-muted/50", children: [e.jsx(z, { className: "py-4", children: e.jsxs(J, { className: "text-sm flex items-center gap-2", children: [e.jsx(Wt, { className: "w-4 h-4 text-green-500" }), "\u5F00\u573A\u8BED\u4E0E\u793A\u4F8B"] }) }), e.jsxs(G, { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(Ee, { children: "\u7B2C\u4E00\u6761\u6D88\u606F (First Message)" }), e.jsx(_e, { variant: "primary", children: s.character.first_mes })] }), e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(Ee, { children: "\u5BF9\u8BDD\u573A\u666F\u63CF\u8FF0 (Scenario)" }), e.jsx(_e, { children: s.character.scenario })] }), s.character.alternate_greetings.length > 0 && e.jsxs("div", { className: "space-y-1.5", children: [e.jsxs(Ee, { children: ["\u5907\u7528\u95EE\u5019\u8BED (", s.character.alternate_greetings.length, ")"] }), e.jsx("div", { className: "space-y-2", children: s.character.alternate_greetings.map((t, a) => e.jsx(_e, { className: "py-2 opacity-80", children: t }, `alt-greet-${a}-${t.length}`)) })] })] })] })] }), e.jsxs(B, { className: "shadow-xs border-muted/50", children: [e.jsx(z, { className: "py-4", children: e.jsxs(J, { className: "text-sm flex items-center gap-2", children: [e.jsx(or, { className: "w-4 h-4 text-amber-500" }), "\u6D88\u606F\u793A\u4F8B (Message Examples)"] }) }), e.jsx(G, { children: e.jsx(_e, { className: "font-mono text-xs", children: s.character.mes_example }) })] })] }), e.jsxs(we, { value: "prompt", className: "space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs(B, { className: "border-muted/50", children: [e.jsxs(z, { className: "py-4", children: [e.jsxs(J, { className: "text-sm flex items-center gap-2 text-blue-600", children: [e.jsx(ft, { className: "w-4 h-4" }), "\u7CFB\u7EDF\u63D0\u793A\u8BCD\u6A21\u677F (System Prompt)"] }), e.jsx(se, { className: "text-[11px]", children: "\u5C06\u63D2\u5165\u5230\u5BF9\u8BDD\u5386\u53F2\u7684\u6700\u524D\u65B9\uFF0C\u7528\u4E8E\u5B9A\u4E49\u89D2\u8272\u7684\u6838\u5FC3\u884C\u4E3A\u51C6\u5219\u3002" })] }), e.jsx(G, { children: e.jsx(_e, { className: "font-mono text-xs bg-blue-500/2 border-blue-500/10", children: s.character.system_prompt || "\u4F7F\u7528\u5168\u5C40\u9ED8\u8BA4\u8BBE\u7F6E" }) })] }), e.jsxs(B, { className: "border-muted/50", children: [e.jsxs(z, { className: "py-4", children: [e.jsxs(J, { className: "text-sm flex items-center gap-2 text-purple-600", children: [e.jsx(cr, { className: "w-4 h-4" }), "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"] }), e.jsx(se, { className: "text-[11px]", children: "\u5C06\u63D2\u5165\u5230\u6BCF\u6761\u8BF7\u6C42\u6D88\u606F\u4E4B\u540E\uFF0C\u7528\u4E8E\u5F3A\u5236 LLM \u9075\u5B88\u7279\u5B9A\u8F93\u51FA\u683C\u5F0F\u3002" })] }), e.jsx(G, { children: e.jsx(_e, { className: "font-mono text-xs bg-purple-500/2 border-purple-500/10", children: s.character.post_history_instructions || "\u65E0\u7279\u5B9A\u6307\u4EE4" }) })] })] }), e.jsx(we, { value: "lorebook", className: "animate-in fade-in-50 duration-300", children: e.jsx(Sn, { lorebook: s.character.character_book }) }), e.jsx(we, { value: "advanced", className: "space-y-6 animate-in fade-in-50 duration-300", children: e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [e.jsxs(B, { className: "border-muted/50", children: [e.jsx(z, { className: "py-4", children: e.jsx(J, { className: "text-sm", children: "\u5143\u6570\u636E\u4FE1\u606F" }) }), e.jsxs(G, { className: "space-y-3", children: [e.jsx(ht, { label: "\u521B\u5EFA\u8005", value: s.character.creator }), e.jsx(ht, { label: "\u89D2\u8272\u7248\u672C", value: s.character.character_version }), e.jsx(ht, { label: "\u521B\u5EFA\u4E8E", value: s.character.createdAt ? new Date(s.character.createdAt).toLocaleString() : "-" }), e.jsx(ht, { label: "\u66F4\u65B0\u4E8E", value: s.character.updatedAt ? new Date(s.character.updatedAt).toLocaleString() : "-" }), e.jsxs("div", { className: "pt-2", children: [e.jsx(Ee, { children: "\u521B\u5EFA\u8005\u7B14\u8BB0 (Creator Notes)" }), e.jsx(_e, { className: "mt-1 text-xs", children: s.character.creator_notes })] })] })] }), e.jsxs(B, { className: "border-muted/50", children: [e.jsx(z, { className: "py-4", children: e.jsx(J, { className: "text-sm", children: "\u6269\u5C55\u5B57\u6BB5 (Extensions)" }) }), e.jsx(G, { children: e.jsx("div", { className: "max-h-75 overflow-auto rounded-lg border bg-muted/20 p-4", children: e.jsx("pre", { className: "text-[10px] font-mono leading-tight", children: JSON.stringify(s.character.extensions, null, 2) }) }) })] })] }) })] }) }), Ee = (s) => e.jsx("span", { className: "text-[11px] font-bold text-muted-foreground/80 uppercase tracking-widest block", children: s.children }), _e = (s) => e.jsx("div", { className: `text-sm rounded-lg border p-3 leading-relaxed whitespace-pre-wrap ${s.variant === "primary" ? "bg-primary/5 text-primary/90 border-primary/20 italic" : "bg-muted/30 text-muted-foreground/90 border-muted/50"} ${s.className || ""}`, children: s.children || e.jsx("span", { className: "opacity-30", children: "\u672A\u586B\u5199" }) }), ht = (s) => e.jsxs("div", { className: "flex justify-between items-center text-xs py-1.5 border-b border-muted/50 last:border-0", children: [e.jsx("span", { className: "text-muted-foreground", children: s.label }), e.jsx("span", { className: "font-mono font-medium", children: s.value ?? "-" })] }), xo = (s) => {
  const t = he();
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs(B, { className: "border-primary/20 bg-primary/5", children: [e.jsxs(z, { children: [e.jsxs(J, { className: "text-lg flex items-center gap-2", children: [e.jsx(ye, { className: "w-5 h-5" }), "\u5F00\u542F\u65B0\u4F1A\u8BDD"] }), e.jsx(se, { children: "\u9009\u62E9\u4E00\u4E2A\u6A21\u5F0F\u5F00\u59CB\u4E0E\u8BE5\u89D2\u8272\u7684\u6545\u4E8B" })] }), e.jsx(G, { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: ["chat", "challenge", "dnd", "group-chat"].map((a) => {
    const r = jt(a), n = r.icon;
    return e.jsxs(N, { className: "h-auto py-4 flex flex-col items-center gap-2", variant: "outline", onClick: () => s.onStartNew(a), type: "button", children: [e.jsx(n, { className: `w-6 h-6 ${r.colorClass}` }), e.jsxs("div", { className: "text-center", children: [e.jsxs("div", { className: "font-bold", children: [r.label, "\u6A21\u5F0F"] }), e.jsx("div", { className: "text-[10px] text-muted-foreground", children: r.description })] })] }, a);
  }) })] }), e.jsxs(B, { children: [e.jsx(z, { children: e.jsx(J, { className: "text-lg", children: "\u5386\u53F2\u4F1A\u8BDD" }) }), e.jsx(G, { className: "space-y-3", children: s.sessions.length > 0 ? s.sessions.map((a) => e.jsxs(N, { className: "w-full justify-between items-center h-auto py-4 px-5 border hover:bg-muted/50 transition-colors", variant: "ghost", onClick: () => t({ to: "/session/$sessionId", params: { sessionId: a.id } }), type: "button", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: e.jsx(Hs, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-left", children: [e.jsx("div", { className: "font-semibold", children: "\u7EE7\u7EED\u4E0A\u6B21\u6545\u4E8B" }), e.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: ["\u6700\u540E\u6D3B\u8DC3: ", new Date(a.updatedAt).toLocaleString()] })] })] }), e.jsx("div", { className: "flex flex-col items-end gap-2", children: e.jsx(U, { variant: a.mode === "chat" ? "secondary" : "default", className: "text-[10px]", children: jt(a.mode).badgeText }) })] }, a.id)) : e.jsx("div", { className: "text-center py-10 border rounded-lg border-dashed", children: e.jsx("p", { className: "text-muted-foreground text-sm", children: "\u8FD8\u6CA1\u6709\u8BE5\u89D2\u8272\u7684\u5386\u53F2\u4F1A\u8BDD" }) }) })] })] });
};
function go({ character: s, trigger: t }) {
  const [a, r] = b.useState(false), [n, i] = b.useState(false), o = b.useId(), u = () => {
    try {
      const d = la(s, { includeImageBase64: n }), l = "data:text/json;charset=utf-8," + encodeURIComponent(d), m = document.createElement("a");
      m.setAttribute("href", l), m.setAttribute("download", `${s.name}.json`), document.body.appendChild(m), m.click(), m.remove(), V.success(`\u89D2\u8272 ${s.name} \u5DF2\u5BFC\u51FA\u4E3A JSON`), r(false);
    } catch (d) {
      V.error("\u5BFC\u51FA\u5931\u8D25"), console.error("Export error:", d);
    }
  };
  return e.jsxs(St, { open: a, onOpenChange: r, children: [e.jsx(ks, { asChild: true, children: t || e.jsxs(N, { variant: "outline", size: "sm", className: "flex items-center gap-2", type: "button", children: [e.jsx(Es, { className: "w-4 h-4" }), "\u5BFC\u51FA JSON"] }) }), e.jsxs(wt, { className: "sm:max-w-md", children: [e.jsx(Ct, { children: e.jsx(rt, { children: "\u5BFC\u51FA\u89D2\u8272\u4E3A JSON" }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("p", { className: "text-sm text-muted-foreground", children: ['\u5C06\u89D2\u8272 "', s.name, '" \u5BFC\u51FA\u4E3A JSON \u6587\u4EF6\u3002'] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Jt, { id: `${o}-include-image-single`, checked: n, onCheckedChange: (d) => i(d === true) }), e.jsx(k, { htmlFor: `${o}-include-image-single`, className: "text-sm", children: "\u5305\u542B Base64 \u56FE\u50CF\u6570\u636E" })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: n ? "\u6587\u4EF6\u5C06\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5927\u4F46\u5B8C\u6574\u3002" : "\u6587\u4EF6\u4E0D\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5C0F\u4F46\u9700\u8981\u5355\u72EC\u5904\u7406\u56FE\u50CF\u3002" })] }), e.jsxs("div", { className: "flex justify-end gap-2", children: [e.jsx(N, { variant: "outline", onClick: () => r(false), children: "\u53D6\u6D88" }), e.jsx(N, { onClick: u, children: "\u5BFC\u51FA" })] })] })] });
}
const ma = (s) => {
  const [t, ...a] = s;
  if (["and", "or", "all", "any", "some"].includes(t)) {
    const r = a[0], n = t === "and" || t === "all" ? " \u4E14 " : " \u6216 ";
    return `(${r.map(ma).join(n)})`;
  }
  return t === "isTrue" || t === "isFalse" ? `${a[0]} \u4E3A ${t === "isTrue" ? "\u771F" : "\u5047"}` : `${a[0]} ${t} ${JSON.stringify(a[1])}`;
}, fo = (s) => e.jsxs("div", { className: "space-y-6", children: [e.jsxs(B, { children: [e.jsxs(z, { children: [e.jsxs(J, { className: "text-lg flex items-center gap-2", children: [e.jsx(Dt, { className: "w-5 h-5 text-destructive" }), "\u6838\u5FC3\u4ECB\u7ECD"] }), e.jsx(se, { children: "\u6311\u6218\u80CC\u666F\u4E0E\u4E16\u754C\u89C2\u8BBE\u5B9A" })] }), e.jsx(G, { children: e.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap", children: s.challenge.description }) })] }), e.jsxs(B, { children: [e.jsxs(z, { children: [e.jsxs(J, { className: "text-lg flex items-center gap-2", children: [e.jsx(Bs, { className: "w-5 h-5 text-primary" }), "\u76EE\u6807\u6311\u6218 (Goals)"] }), e.jsx(se, { children: "\u5F53\u6240\u6709\u76EE\u6807\u8FBE\u6210\u65F6\uFF0C\u6311\u6218\u5373\u544A\u6210\u529F" })] }), e.jsx(G, { className: "space-y-4", children: s.challenge.goals.map((t, a) => e.jsxs("div", { className: "flex gap-4 p-4 rounded-lg bg-muted/40 border group hover:border-primary/50 transition-colors", children: [e.jsx("div", { className: "w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0", children: a + 1 }), e.jsxs("div", { className: "grow", children: [e.jsx("div", { className: "font-medium text-sm", children: t.description }), e.jsxs("div", { className: "text-[10px] text-muted-foreground mt-2 font-mono flex items-center gap-2", children: [e.jsx(U, { variant: "outline", className: "text-[9px] font-mono py-0 h-4 shrink-0", children: "Condition" }), e.jsx("span", { className: "truncate", children: ma(t.condition) })] })] })] }, t.key)) })] }), e.jsxs(B, { children: [e.jsx(z, { children: e.jsxs(J, { className: "text-lg flex items-center gap-2", children: [e.jsx(Le, { className: "w-5 h-5 text-secondary" }), "\u53D8\u91CF\u914D\u7F6E (Variables)"] }) }), e.jsx(G, { children: e.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: Object.entries(s.challenge.variables).map(([t, a]) => e.jsxs("div", { className: "p-3 rounded-md bg-muted/30 border flex justify-between items-center", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx("div", { className: "text-xs font-bold font-mono", children: t }), e.jsxs("div", { className: "text-[10px] text-muted-foreground", children: ["\u521D\u59CB\u503C: ", String(a.initial ?? "null")] })] }), e.jsx(U, { variant: "secondary", className: "text-[10px] capitalize", children: a.type })] }, t)) }) })] })] }), bo = (s) => {
  const t = he();
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs(B, { className: "border-primary/20 bg-primary/5", children: [e.jsxs(z, { children: [e.jsxs(J, { className: "text-lg flex items-center gap-2", children: [e.jsx(De, { className: "w-5 h-5 text-primary" }), "\u4EE5\u6B64\u5267\u672C\u5F00\u542F\u65B0\u6311\u6218"] }), e.jsx(se, { children: "\u8BF7\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u4F5C\u4E3A\u6311\u6218\u7684\u4E3B\u89D2" })] }), e.jsx(G, { className: "space-y-3", children: e.jsx("div", { className: "grid grid-cols-1 gap-2", children: s.characters.map((a) => e.jsxs(N, { variant: "outline", className: "w-full justify-start gap-4 h-14 bg-background", onClick: () => s.onStartNew(a.id), type: "button", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0", children: e.jsx(tt, { className: "w-4 h-4 text-muted-foreground" }) }), e.jsxs("div", { className: "text-left", children: [e.jsxs("div", { className: "font-semibold text-sm", children: ["\u4F7F\u7528 ", a.name] }), e.jsx("div", { className: "text-[10px] text-muted-foreground truncate max-w-50", children: a.description })] })] }, a.id)) }) })] }), e.jsxs(B, { children: [e.jsx(z, { children: e.jsx(J, { className: "text-lg", children: "\u5DF2\u5B58\u6311\u6218\u8FDB\u5EA6" }) }), e.jsx(G, { className: "space-y-3", children: s.sessions.length > 0 ? s.sessions.map((a) => e.jsxs(N, { className: "w-full justify-between items-center h-auto py-4 px-5 border hover:bg-muted/50 transition-colors", variant: "ghost", onClick: () => t({ to: "/session/$sessionId", params: { sessionId: a.id } }), type: "button", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: e.jsx(Hs, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-left", children: [e.jsx("div", { className: "font-semibold", children: "\u7EE7\u7EED\u6311\u6218" }), e.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: ["\u6700\u540E\u6D3B\u8DC3: ", new Date(a.updatedAt).toLocaleString()] })] })] }), e.jsxs("div", { className: "flex flex-col items-end gap-1", children: [e.jsx(U, { variant: "outline", className: "text-[9px] h-5", children: "\u4EE5\u6B64\u5267\u672C\u8FDB\u53D1" }), e.jsx("span", { className: "text-[10px] text-muted-foreground italic", children: a.characterId ? `\u89D2\u8272 ID: ${a.characterId.slice(0, 8)}...` : "\u672A\u77E5\u89D2\u8272" })] })] }, a.id)) : e.jsx("div", { className: "text-center py-10 border rounded-lg border-dashed", children: e.jsx("p", { className: "text-muted-foreground text-sm", children: "\u8FD8\u6CA1\u6709\u57FA\u4E8E\u6B64\u5267\u672C\u7684\u6311\u6218\u8BB0\u5F55" }) }) })] })] });
}, Et = { characters: Pe, challenges: Xe, sessions: Ae, createSessionDB: (s) => new aa(s) }, wn = { groupingDelayMs: 6e4 };
class je {
  constructor(t, a) {
    __publicField(this, "state");
    __publicField(this, "options", is(wn));
    this.state = t, a && this.assignOptions(a);
  }
  assignOptions(t) {
    Object.assign(this.options, t);
  }
  setOptions(t) {
    this.options = is(t);
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
        for (let m = 0; m < n.length - 1; m++) a.push(Y.parse({ id: O(), type: "placeholder", idx: n[m].idx, data: null }));
        const o = n[0].data.characterId, u = n.map((m) => ({ content: m.data.content, timestamp: m.timestamp || void 0, originalIdx: m.idx })), d = n.at(-1);
        if (!d) throw new Error("No last candidate");
        const l = { id: O(), type: "character_message_group", data: { characterId: o || "", list: u, name: n[0].data.name, role: n[0].data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: d.idx, orderRef: 0, timestamp: Date.now() };
        a.push(l);
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
    const r = this.state.historyItems.slice(a), n = je.makeGroupedCharacterMessages(r);
    this.spliceHistoryItems(a, r.length, n, false);
  }
  performGroupingOnAllHistoryItems() {
    const t = je.makeGroupedCharacterMessages(this.state.historyItems);
    this.spliceHistoryItems(0, this.state.historyItems.length, t, false);
  }
  addCharacterMessageIntoHistoryDirectly(t) {
    const a = { ...t, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
    this.state.historyItems.push(a);
  }
  addCharacterMessageIntoHistoryAsNewGroup(t) {
    const a = [{ content: t.data.content, timestamp: Date.now(), originalIdx: this.state.historyItems.length }], r = { id: O(), type: "character_message_group", data: { characterId: t.data.characterId || "", list: a, name: t.data.name, role: t.data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: this.state.historyItems.length, orderRef: 0, timestamp: Date.now() };
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
    const a = this.getItemsByType("summary").map((o) => o.data.range).sort((o, u) => o[0] - u[0]), r = [];
    for (const [o, u] of a) {
      const d = r.at(-1);
      r.length === 0 || d && d[1] < o ? r.push([o, u]) : d && (d[1] = Math.max(d[1], u));
    }
    const n = [];
    let i = 0;
    for (const [o, u] of r) {
      for (; i < o; ) n.push(i), i++;
      i = Math.max(i, u + 1);
    }
    for (; i < this.state.historyItems.length; ) n.push(i), i++;
    return n;
  }
  addLLMResponseAsContextItem(t, a) {
    const r = O();
    let n;
    t.role === "assistant" && a.characterId ? n = { id: r, type: "character_message", orderRef: 0, timestamp: Date.now(), data: { characterId: a.characterId, content: t.content, name: void 0 } } : t.role === "user" ? n = { id: r, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: t.content, name: void 0, isUser: true, role: "user" } } : n = { id: r, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: t.content, name: t.role } }, this.addHistoryItem(n);
  }
  getFlatHistoryItems(t) {
    const a = [];
    for (const r of this.state.historyItems) if (r.type === "character_message_group") {
      const n = r, i = n.data.list.map((o) => ({ id: O(), type: "character_message", idx: r.idx, orderRef: r.orderRef, timestamp: o.timestamp || r.timestamp, hidden: r.hidden, deleted: r.deleted, data: { characterId: n.data.characterId, content: o.content, name: n.data.name, role: n.data.role, isCharacter: true, isUser: false, isDM: false, isEnv: false } }));
      a.push(...i);
    } else a.push(r);
    return t && t > 0 ? a.slice(-t) : a;
  }
  getLastUserMessage() {
    return this.getFlatHistoryItems().findLast((t) => (t.type === "participant_message" || t.type === "character_message") && (t.data.isUser || t.data.role === "user"));
  }
}
const Cn = /\{\{([^:]+):([^}]+)\}\}/gi, kn = /^d/i;
function ua(s, t, a) {
  let r = s;
  const n = t.nickname || t.name || "{{char}}", i = (a == null ? void 0 : a.userName) || "{{user}}";
  return r = r.replace(/\{\{char\}\}/gi, n), r = r.replace(/\{\{user\}\}/gi, i), r = r.replace(/<BOT>/gi, n), r = r.replace(/<USER>/gi, i), r = r.replace(Cn, (o, u, d) => {
    switch (u.toLowerCase()) {
      case "random": {
        const m = d.split(",").map((c) => c.replace(/\\,/g, ",").trim());
        return m[Math.floor(Math.random() * m.length)] || "";
      }
      case "pick": {
        const m = d.split(",").map((c) => c.replace(/\\,/g, ",").trim());
        return m[Math.floor(Math.random() * m.length)] || "";
      }
      case "roll": {
        const m = Number.parseInt(d.replace(kn, ""), 10);
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
        return o;
    }
  }), r;
}
function ha(s, t) {
  let a;
  return s.system_prompt && s.system_prompt.trim() !== "" ? (a = s.system_prompt, a = a.replaceAll("{{original}}", (t == null ? void 0 : t.originalSystemPrompt) || "")) : (a = [`\u4F60\u662F ${s.name}\uFF0C\u8BF7\u6839\u636E\u4F60\u7684\u6027\u683C\u548C\u80CC\u666F\u8FDB\u884C\u56DE\u5E94\u3002\u4FDD\u6301\u89D2\u8272\u7684\u4E00\u81F4\u6027\u3002`, "=====[\u89D2\u8272\u63CF\u8FF0]=====", s.description, "=====[\u89D2\u8272\u6027\u683C]=====", s.personality, "=====[\u804A\u5929\u573A\u666F]=====", s.scenario, "=====[\u793A\u4F8B\u56DE\u590D]=====", s.mes_example].filter((r) => r.trim() !== "").join(`

`), a.trim() === "" && (a = (t == null ? void 0 : t.originalSystemPrompt) || "")), a = ua(a, s, t), a.trim();
}
function In(s, t) {
  const a = ha(s, t), r = [s.first_mes, ...(s == null ? void 0 : s.alternate_greetings) ?? []], n = r[Math.floor(Math.random() * r.length)], i = ua(n, s, t), o = { id: O(), type: "starting_system_message", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: a } }, u = { id: O(), type: "character_intro", idx: 1, orderRef: 0, timestamp: Date.now() + 1, data: { characterId: s.id, content: i } };
  return [o, u];
}
const as = (s, t) => {
  if ((t == null ? void 0 : t.characterId) === void 0) return [];
  const a = kr.parse(s), r = [];
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
      const i = n.data, o = i.characterId === t.characterId;
      r.push({ role: o ? "assistant" : "user", content: i.content, name: i.name });
      break;
    }
    case "participant_message_group":
    case "character_message_group": {
      const i = n.data, o = i.characterId === t.characterId, u = i.list.map((d) => d.content).join(`
`);
      r.push({ role: o ? "assistant" : "user", content: u, name: i.name });
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
}, ps = Object.freeze(Object.defineProperty({ __proto__: null, makeChatModeCharacterSystemPrompt_CN: ha, makeChatModeLLMMessagesFromContextStateForCharacterId: as, makeChatModeStartingContextItems_CN: In }, Symbol.toStringTag, { value: "Module" })), ne = fe({ currentSession: null, contextManager: null, get messages() {
  if (!this.contextManager || !this.currentSession) return [];
  const s = as(this.contextManager.state, { characterId: this.currentSession.modeConfig.characterId });
  return Array.isArray(s) ? s : [];
}, startNewSession(s, t) {
  const a = { id: O(), contextId: null, mode: "chat", modeConfig: s, modeState: { currentPhase: "character_first_msg" }, createdAt: Date.now(), updatedAt: Date.now(), isActive: true };
  this.currentSession = a;
  const r = new je(t || { historyItems: [], processingItem: void 0 });
  return r.state = fe(r.state), this.contextManager = r, a;
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
  this.currentSession = s.session, s.contextState && (this.contextManager = new je(s.contextState), this.contextManager.state = fe(this.contextManager.state));
}, loadSession(s) {
  this.currentSession = s;
}, async saveNewContextItemsToDB(s, t) {
  const { SessionDB: a } = await Ne(async () => {
    const { SessionDB: n } = await Promise.resolve().then(() => $t);
    return { SessionDB: n };
  }, void 0);
  await new a(s).addContextItems(t);
} }), pa = (s) => {
  const { item: t, character: a } = s;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden", children: a.imageBase64 || a.avatar ? e.jsx("img", { src: a.imageBase64 || a.avatar, alt: a.name, className: "w-full h-full object-cover" }) : e.jsx(ie, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: a.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: t.data.content }), t.processing && e.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, Nt = (s) => {
  const { item: t, character: a } = s;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden", children: a.imageBase64 || a.avatar ? e.jsx("img", { src: a.imageBase64 || a.avatar, alt: a.name, className: "w-full h-full object-cover" }) : e.jsx(ie, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: a.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: t.data.content }), t.processing && e.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, Vt = (s) => {
  const { item: t } = s;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 flex-row-reverse group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105", children: e.jsx(Ie, { className: "w-5 h-5 text-secondary-foreground" }) }), e.jsxs("div", { className: "space-y-1.5 text-right grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2 justify-end", children: "Player" }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap bg-primary/5 text-foreground p-4 rounded-2xl inline-block text-left min-w-25 shadow-sm", children: t.data.content })] })] });
};
function Dn(s, t) {
  const a = xr(), r = b.useRef(false), n = he(), i = b.useCallback(async (u) => {
    if (!(r.current || !t || t.getHistoryCount() > 0 || !s)) try {
      r.current = true;
      const { makeChatModeStartingContextItems_CN: d } = await Ne(async () => {
        const { makeChatModeStartingContextItems_CN: c } = await Promise.resolve().then(() => ps);
        return { makeChatModeStartingContextItems_CN: c };
      }, void 0), l = d(s);
      for (const c of l) t.addHistoryItem(c);
      const m = l.find((c) => c.type === "character_intro");
      if (m && u) {
        const c = m.data.content.split(" ");
        let p = "";
        for (const x of c) p += (p ? " " : "") + x, u(p), await new Promise((f) => setTimeout(f, 50));
      }
    } catch (d) {
      console.error("Initialize Chat Error:", d), V.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", { duration: 1 / 0, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => n({ to: "/config/llm" }) } });
    } finally {
      r.current = false;
    }
  }, [t, s]), o = b.useCallback(async (u, d) => {
    if (!(r.current || !s || !t)) try {
      r.current = true, t.addLLMResponseAsContextItem({ role: "user", content: u }, {});
      const { makeChatModeLLMMessagesFromContextStateForCharacterId: l } = await Ne(async () => {
        const { makeChatModeLLMMessagesFromContextStateForCharacterId: f } = await Promise.resolve().then(() => ps);
        return { makeChatModeLLMMessagesFromContextStateForCharacterId: f };
      }, void 0), c = l(t.state, { characterId: s.id }).map((f) => ({ id: O(), role: f.role, content: f.content, name: f.name })), p = { id: O(), type: "character_message", orderRef: 0, timestamp: Date.now(), data: { characterId: s.id, content: "", name: s.name } };
      t.setProcessingItem(p);
      let x = "";
      await a.callLLMStream(c, (f, v) => {
        x = v, d == null ? void 0 : d(f);
        const j = t.getProcessingItem();
        j && (j.data.content = x);
      }), p.data.content = x, t.completeProcessingItem();
    } catch (l) {
      console.error("ChatLoop Error:", l), V.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", { duration: 1 / 0, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => n({ to: "/config/llm" }) } });
    } finally {
      r.current = false;
    }
  }, [t, s, a]);
  return { initializeChat: i, sendUserMessage: o };
}
const Mn = (s) => {
  var _a;
  const [t, a] = b.useState(""), r = b.useRef(null), [n, i] = b.useState(false), [o, u] = b.useState(""), [d, l] = b.useState(false), { data: m = [] } = ke((g) => g.from({ s: Ae })), { data: c = [] } = ke((g) => g.from({ c: Pe })), p = m.find((g) => g.id === s.sessionId), x = c.find((g) => g.id === (p == null ? void 0 : p.characterId));
  b.useEffect(() => {
    let g = false;
    return l(false), (async () => {
      if (p) try {
        const y = await Et.createSessionDB(p.id).getContextItems();
        if (g) return;
        const P = { historyItems: y, processingItem: void 0 }, I = new je(P);
        ne.contextManager = I, st(p.id), l(true);
      } catch {
        if (!g) {
          const S = new je({ historyItems: [], processingItem: void 0 });
          ne.contextManager = S, l(true);
        }
      }
    })(), () => {
      g = true;
    };
  }, [p]), b.useEffect(() => () => {
    s.sessionId && st(s.sessionId);
  }, [s.sessionId]);
  const { sendUserMessage: f, initializeChat: v } = Dn(x, ne.contextManager);
  if (b.useEffect(() => {
    var _a2;
    d && ((_a2 = ne.contextManager) == null ? void 0 : _a2.getHistoryCount()) === 0 && x && p && (async () => {
      if (await v((_) => {
        u((S) => S + _);
      }), ne.contextManager) {
        const _ = ne.contextManager.getHistoryItems();
        _.length > 0 && await ne.saveNewContextItemsToDB(p.id, _);
      }
    })();
  }, [d, v, x, p]), b.useEffect(() => {
    r.current && (r.current.scrollTop = r.current.scrollHeight);
  }), !p || !x) return e.jsx("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4", children: e.jsx("p", { children: "\u4F1A\u8BDD\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664" }) });
  const j = async () => {
    if (!(!t.trim() || n)) {
      i(true), u("");
      try {
        if (await f(t, (g) => {
          u((_) => _ + g);
        }), ne.contextManager && p) {
          const _ = ne.contextManager.getHistoryItems().filter((S) => !S.processing);
          _.length > 0 && await ne.saveNewContextItemsToDB(p.id, _);
        }
      } catch (g) {
        console.error("Send message error:", g);
      } finally {
        i(false), u("");
      }
      a("");
    }
  };
  return e.jsx("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20", children: e.jsx(ie, { className: "w-5 h-5 text-primary" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsx("span", { className: "font-bold text-sm leading-tight", children: x.name }), e.jsx("span", { className: "text-[10px] text-muted-foreground", children: x.nickname || "NPC" })] })] }), e.jsx("div", { className: "flex items-center gap-2", children: e.jsx(U, { variant: "secondary", className: "text-[9px] h-5 px-1.5 font-bold uppercase", children: "CHAT MODE" }) })] }), e.jsx("div", { className: "flex grow overflow-y-auto p-4 md:p-8 space-y-8", ref: r, children: e.jsxs("div", { className: "max-w-4xl mx-auto w-full space-y-8", children: [(() => {
    var _a2, _b;
    const g = ((_a2 = ne.contextManager) == null ? void 0 : _a2.getVisibleHistoryItems()) || [], _ = (_b = ne.contextManager) == null ? void 0 : _b.getProcessingItem(), S = [...g];
    return _ && !g.some((y) => y.id === _.id) && S.push(_), S.map((y, P) => e.jsx(Pn, { item: y, character: x, isProcessing: y.processing || void 0, streamingText: y.processing ? o : void 0 }, `[${P}]${y.id}`));
  })(), n && !((_a = ne.contextManager) == null ? void 0 : _a.getProcessingItem()) && e.jsxs("div", { className: "flex gap-4 animate-pulse", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-muted shrink-0" }), e.jsxs("div", { className: "space-y-3 grow pt-2", children: [e.jsx("div", { className: "h-4 bg-muted rounded w-1/4" }), e.jsx("div", { className: "h-24 bg-muted rounded w-full" })] })] })] }) }), e.jsxs("div", { className: "p-4 md:p-6 border-t shrink-0 bg-background/50 backdrop-blur-sm", children: [e.jsxs("div", { className: "max-w-4xl mx-auto relative group", children: [e.jsx("div", { className: "absolute -inset-0.5 bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative", children: [e.jsx(X, { value: t, onChange: (g) => a(g.target.value), placeholder: `\u5411 ${x.name} \u53D1\u9001\u6D88\u606F...`, className: "min-h-24 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/20 focus-visible:ring-primary/30 bg-background", onKeyDown: (g) => {
    g.key === "Enter" && !g.shiftKey && (g.preventDefault(), j());
  } }), e.jsx(N, { size: "icon", className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform", disabled: !t.trim() || n, onClick: j, type: "button", children: e.jsx(Pt, { className: "w-5 h-5" }) })] })] }), e.jsx("p", { className: "text-[10px] text-center text-muted-foreground mt-3 font-medium uppercase tracking-tighter opacity-50", children: "Shift + Enter to line break \u2022 Enter to send" })] })] }) });
}, Pn = (s) => {
  switch (s.item.type) {
    case "character_intro":
      return e.jsx(pa, { item: s.item, character: s.character });
    case "character_message":
      return s.isProcessing ? e.jsx(An, { item: s.item, character: s.character, streamingText: s.streamingText || "" }) : e.jsx(Nt, { item: s.item, character: s.character });
    case "character_message_group":
      return e.jsx("div", { className: "space-y-4", children: (s.item.data.list || []).map((t, a) => e.jsx(Nt, { item: { ...s.item, type: "character_message", data: { ...s.item.data, content: t.content, timestamp: t.timestamp } }, character: s.character }, t.id || a)) });
    case "participant_message":
      return e.jsx(Vt, { item: s.item });
    case "participant_message_group":
      return e.jsx("div", { className: "space-y-4", children: (s.item.data.list || []).map((t, a) => e.jsx(Vt, { item: { ...s.item, type: "participant_message", data: { ...s.item.data, content: t.content, timestamp: t.timestamp } } }, t.id || a)) });
    case "system_notification":
      return e.jsx("div", { className: "flex justify-center my-4", children: e.jsx(U, { variant: "outline", className: "px-3 py-1 text-[10px] text-muted-foreground bg-muted/20", children: s.item.data.content }) });
    case "starting_system_message":
    case "in_context_system_message":
    case "placeholder":
      return null;
    default:
      return console.warn("Unknown context item type:", s.item.type), null;
  }
}, An = (s) => s.item.type === "character_message" ? e.jsxs("div", { className: "flex gap-4 animate-pulse", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20", children: s.character.imageBase64 || s.character.avatar ? e.jsx("img", { src: s.character.imageBase64 || s.character.avatar, alt: s.character.name, className: "w-full h-full object-cover rounded-2xl" }) : e.jsx(ie, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: s.character.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: s.streamingText || s.item.data.content })] })] }) : null, yo = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForChat: Mn }, Symbol.toStringTag, { value: "Module" }));
class rs {
  constructor(t) {
    __publicField(this, "session");
    this.session = At.parse(t);
  }
}
function Oe(s) {
  const t = s.modeConfig.characterSnapshot;
  if (!t) throw new Error("Critical Error: Character snapshot missing in session config.");
  return t;
}
function xa(s, t) {
  const a = Oe(t);
  return s.getFlatHistoryItems(10).filter((r) => !r.hidden && !r.deleted).map((r) => {
    const { type: n, data: i } = r;
    if (n === "participant_message") {
      let o = "\u73A9\u5BB6";
      return i.isDM || i.name === "DM" ? o = "DM\u65C1\u767D" : i.name && (o = i.name), `${o}: ${i.content}`;
    }
    return n === "character_message" ? `${i.name || a.name}: ${i.content}` : n === "dm_intro" ? `DM\u5F00\u573A/\u89C4\u5219: ${i.content}` : n === "character_intro" ? `${a.name}\u5F00\u573A: ${i.content}` : null;
  }).filter(Boolean).join(`
`);
}
const Tn = `
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
`, $n = `
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
`, En = `
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
function Ln(s, t) {
  const { modeConfig: a } = s, r = Oe(s), n = (a.goals || []).map((d) => `- ${d.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", i = (a.failureChecks || []).map((d) => `- ${d.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", o = Object.entries(a.variables || {}).filter(([d, l]) => !l.hidden).map(([d, l]) => `- ${d}: ${l.description || "\u65E0\u63CF\u8FF0"}`).join(`
`) || "\u65E0\u516C\u5F00\u53D8\u91CF";
  return [{ role: "system", content: Tn.replace("{{title}}", s.title || "\u6587\u5B57\u6311\u6218").replace("{{characterName}}", r.name).replace("{{characterDescription}}", r.description || "\u795E\u79D8\u89D2\u8272").replace("{{gameGoals}}", n).replace("{{failureConditions}}", i).replace("{{variableDescriptions}}", o).replace("{{userGuidance}}", a.userGuidance) }];
}
function Rn(s, t) {
  var _a;
  const { modeConfig: a, modeState: r } = s, n = Oe(s), i = JSON.stringify(r.variableStates, null, 2), o = (a.goals || []).map((p) => `- ${p.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", u = (a.failureChecks || []).map((p) => `- ${p.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", d = xa(t, s), m = ((_a = t.getLastUserMessage()) == null ? void 0 : _a.data.content) || "";
  return [{ role: "system", content: $n.replace("{{characterName}}", n.name).replace("{{gameGoals}}", o).replace("{{failureConditions}}", u).replace("{{historyMessages}}", d).replace("{{variablesJSON}}", i).replace("{{userInput}}", m) }];
}
function Fn(s, t) {
  var _a, _b;
  const { modeConfig: a, modeState: r } = s, n = Oe(s), i = JSON.stringify(r.variableStates, null, 2), o = (a.goals || []).map((f) => `- ${f.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", u = (a.failureChecks || []).map((f) => `- ${f.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", d = xa(t, s), m = ((_a = t.getLastUserMessage()) == null ? void 0 : _a.data.content) || "", p = ((_b = t.getHistoryItems().findLast((f) => f.type === "challenge_mode_dm_eval")) == null ? void 0 : _b.data.analyze) || "\u6839\u636E\u73A9\u5BB6\u884C\u52A8\u66F4\u65B0\u4E86\u76F8\u5173\u72B6\u6001\u3002";
  return [{ role: "system", content: En.replace("{{characterName}}", n.name).replace("{{gameGoals}}", o).replace("{{failureConditions}}", u).replace("{{variablesJSON}}", i).replace("{{userInput}}", m).replace("{{historyMessages}}", d).replace("{{evalAnalyze}}", p) }];
}
function Un(s, t) {
  const { modeConfig: a } = s, r = Oe(s);
  return [{ role: "system", content: `\u4F60\u73B0\u5728\u7684\u8EAB\u4EFD\u662F\u89D2\u8272 ${r.name}\u3002
\u4F60\u6B63\u5728\u53C2\u52A0\u4E00\u573A\u540D\u4E3A\u300A${s.title || "\u6311\u6218"}\u300B\u7684\u6E38\u620F\u3002
\u4F60\u7684\u4EFB\u52A1\u63CF\u8FF0\uFF1A
${a.roleTaskPrompt}

\u73B0\u5728\uFF0C\u8BF7\u4F5C\u4E3A ${r.name} \u7ED9\u51FA\u4F60\u7684\u5F00\u5C40\u7B2C\u4E00\u53E5\u8BDD\u3002
\u8FD9\u53E5\u5BF9\u8BDD\u5E94\u8BE5\u7B26\u5408\u4F60\u7684\u6027\u683C\u3001\u5F53\u524D\u6311\u6218\u7684\u80CC\u666F\uFF0C\u5E76\u5F15\u5BFC\u73A9\u5BB6\u5F00\u59CB\u4E92\u52A8\u3002
\u4E0D\u8981\u8F93\u51FA\u4EFB\u4F55\u65C1\u767D\uFF0C\u53EA\u8F93\u51FA\u5BF9\u8BDD\u5185\u5BB9\u3002` }];
}
function On(s, t) {
  const { modeConfig: a, modeState: r } = s, n = Oe(s), o = { historyItems: t.getFlatHistoryItems() }, u = as(o, { characterId: a.characterId });
  let d = `## \u4F60\u7684\u8EAB\u4EFD\u4E0E\u4EFB\u52A1
\u4F60\u6B63\u5728\u53C2\u52A0\u4E00\u573A\u540D\u4E3A\u300A${s.title || "\u6311\u6218"}\u300B\u7684\u6E38\u620F\u3002
${a.roleTaskPrompt}

`;
  const l = Object.entries(r.variableStates).filter(([x]) => {
    var _a;
    return !((_a = a.variables[x]) == null ? void 0 : _a.hidden);
  }).map(([x, f]) => {
    const v = a.variables[x], j = (v == null ? void 0 : v.description) ? ` (${v.description})` : "";
    return `- ${x}${j}: ${f.value}`;
  }).join(`
`);
  l && (d += `## \u5F53\u524D\u72B6\u6001 (\u4F60\u7684\u611F\u77E5\u80FD\u529B)
${l}

`);
  const m = a.goals.map((x) => {
    var _a;
    return ((_a = r.goalStates.find((v) => v.key === x.key)) == null ? void 0 : _a.isCompleted) ? `- [\u5DF2\u8FBE\u6210\u76EE\u6807] ${x.description}` : `- [\u672A\u8FBE\u6210\u76EE\u6807] ${x.description}`;
  }).join(`
`);
  m && (d += `## \u6311\u6218\u76EE\u6807\u8FDB\u5EA6
${m}

`);
  const c = a.failureChecks.map((x) => `- ${x.description}`).join(`
`);
  c && (d += `## \u5931\u8D25/\u7ED3\u675F\u6761\u4EF6 (\u4F60\u5E94\u5C3D\u91CF\u907F\u514D\u6216\u5F15\u5BFC\u73A9\u5BB6\u89E6\u53D1)
${c}

`);
  const p = r.failureStates.filter((x) => x.isCompleted);
  if (p.length > 0) {
    const x = p.map((f) => {
      var _a;
      return `- ${((_a = a.failureChecks.find((j) => j.key === f.key)) == null ? void 0 : _a.description) || f.key}`;
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
class ga {
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
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const a = this.getVariable(t);
    if (!a) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (typeof a.value != "boolean") throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(t, true);
  }
  setFalse(t) {
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const a = this.getVariable(t);
    if (!a) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (typeof a.value != "boolean") throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(t, false);
  }
  toggle(t) {
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const a = this.getVariable(t);
    if (!a) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (typeof a.value != "boolean") throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(t, !a.value);
  }
  delta(t, a) {
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "number") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u6570\u5B57\u7C7B\u578B`);
    const r = this.getVariable(t);
    if (!r) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (typeof r.value != "number") throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u6570\u5B57\u7C7B\u578B`);
    this.setVariable(t, r.value + a);
  }
  setTo(t, a) {
    var _a, _b;
    const r = (_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type;
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
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "tags") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u6807\u7B7E\u7C7B\u578B`);
    const r = this.getVariable(t);
    if (!r) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (!Array.isArray(r.value)) throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B`);
    r.value.includes(a) || this.setVariable(t, [...r.value, a]);
  }
  remove(t, a) {
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "tags") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u6807\u7B7E\u7C7B\u578B`);
    const r = this.getVariable(t);
    if (!r) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (!Array.isArray(r.value)) throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B`);
    this.setVariable(t, r.value.filter((n) => n !== a));
  }
  performOperation(t) {
    if (Ws.safeParse(t).success) {
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
    } else if (Ys.safeParse(t).success) {
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
    } else if (Qs.safeParse(t).success) {
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
    } else if (Zs.safeParse(t).success) {
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
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "boolean") return false;
    const a = this.getVariable(t);
    return a ? typeof a.value == "boolean" && a.value : false;
  }
  isFalse(t) {
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "boolean") return false;
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
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "number") return false;
    const r = this.getVariable(t);
    return r && typeof r.value == "number" ? r.value > a : false;
  }
  gte(t, a) {
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "number") return false;
    const r = this.getVariable(t);
    return r && typeof r.value == "number" ? r.value >= a : false;
  }
  lt(t, a) {
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "number") return false;
    const r = this.getVariable(t);
    return r && typeof r.value == "number" ? r.value < a : false;
  }
  lte(t, a) {
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "number") return false;
    const r = this.getVariable(t);
    return r && typeof r.value == "number" ? r.value <= a : false;
  }
  includes(t, a) {
    var _a, _b, _c, _d;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "string" && ((_d = (_c = this.config) == null ? void 0 : _c[t]) == null ? void 0 : _d.type) !== "tags") return false;
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
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "tags") return false;
    const r = this.getVariable(t);
    if (!r || !Array.isArray(r.value)) return false;
    const n = r.value.map(String);
    return a.some((i) => n.includes(String(i)));
  }
  hasAll(t, a) {
    var _a, _b;
    if (((_b = (_a = this.config) == null ? void 0 : _a[t]) == null ? void 0 : _b.type) !== "tags") return false;
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
    if (Tt.safeParse(t).success) {
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
    } else if (ts.safeParse(t).success || ea.safeParse(t).success) {
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
class Hn extends rs {
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
    var _a, _b;
    const a = t.getProcessingItem();
    if (a && a.type) {
      const o = { dm_intro: "dm_intro", character_intro: "character_intro", character_message: "character_response", character_message_group: "character_response", dm_eval_logic: "dm_eval_changes", participant_message: ((_a = a.data) == null ? void 0 : _a.isDM) ? "dm_narrate_changes" : "player_input", challenge_mode_dm_eval: "dm_eval_changes", challenge_mode_checking: "failure_check", challenge_mode_ending: "ending_check" }[a.type];
      if (o) return o;
    }
    const r = t.getFlatHistoryItems();
    let n;
    for (let i = r.length - 1; i >= 0; i--) {
      const o = r[i];
      if (!(o == null ? void 0 : o.deleted)) {
        switch (o.type) {
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
            const u = o.data;
            (u == null ? void 0 : u.isDM) ? n = "failure_check" : (u == null ? void 0 : u.isUser) || (u == null ? void 0 : u.role) === "user" ? n = "character_response" : n = "player_input";
            break;
          }
          case "dm_eval_logic":
          case "challenge_mode_dm_eval":
            n = "dm_narrate_changes";
            break;
          case "challenge_mode_checking": {
            const u = (_b = o.data) == null ? void 0 : _b.results;
            if (u && u.length > 0) {
              const d = u.some((m) => m.type === "failure"), l = u.some((m) => m.type === "goal");
              if (d) {
                n = u.some((c) => c.type === "failure" && c.result === true) ? "ending_check" : "goal_check";
                break;
              }
              if (l) {
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
    var _a;
    const a = t.getProcessingItem();
    if (a && a.type) {
      const n = { dm_intro: "dm_intro_running", character_intro: "character_intro_running", character_message: "character_response_running", character_message_group: "character_response_running", dm_eval_logic: "dm_eval_changes_running", participant_message: ((_a = a.data) == null ? void 0 : _a.isDM) ? "dm_narrate_changes_running" : "player_input_running", challenge_mode_dm_eval: "dm_eval_changes_running", challenge_mode_checking: "failure_check_running", challenge_mode_ending: "ending_check_running" }[a.type];
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
    var _a;
    const a = this.session.modeState.currentPhase, r = new ga(this.session.modeState.variableStates, this.session.modeConfig.variables);
    switch (a) {
      case "dm_intro":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_intro")), { type: "LLM_CALL", messages: Ln(this.session), callbackPhase: "dm_intro", llmRequestType: "dm_intro" };
      case "character_intro":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("character_intro")), { type: "LLM_CALL", messages: Un(this.session), callbackPhase: "character_intro", llmRequestType: "character_intro" };
      case "player_input":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "WAIT_FOR_INPUT" };
      case "character_response":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("character_response")), { type: "LLM_CALL", messages: On(this.session, t), callbackPhase: "character_response", llmRequestType: "character_message", dataExtra: { characterId: this.session.modeConfig.characterId, name: ((_a = this.session.modeConfig.characterSnapshot) == null ? void 0 : _a.name) || "Unknown" } };
      case "dm_eval_changes":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_eval_changes")), { type: "LLM_CALL", messages: Rn(this.session, t), callbackPhase: "dm_eval_changes", llmRequestType: "dm_eval_logic" });
      case "dm_narrate_changes":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate_changes")), { type: "LLM_CALL", messages: Fn(this.session, t), callbackPhase: "dm_narrate_changes", llmRequestType: "participant_message", dataExtra: { isDM: true, name: "DM" } });
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
    for (const o of i) {
      const u = a.checkCondition(o.condition), d = this.session.modeState.failureStates.find((l) => l.key === o.key);
      d && (d.isCompleted = u), u && (r = true), n.push({ type: "failure", key: o.key, result: u });
    }
    return t.addHistoryItem({ id: O(), type: "challenge_mode_checking", idx: 0, orderRef: 0, timestamp: Date.now(), data: { results: n }, hidden: true }), this.setCurrentUIState(this.getDoneUIStateForPhase("failure_check")), r ? this.enterNextState("ending_check") : this.enterNextState("goal_check"), { type: "STATE_CHANGE" };
  }
  handleGoalCheck(t, a) {
    this.setCurrentUIState(this.getRunningUIStateForPhase("goal_check"));
    const r = [], n = this.session.modeConfig.goals || [];
    for (const i of n) {
      const o = a.checkCondition(i.condition), u = this.session.modeState.goalStates.find((d) => d.key === i.key);
      u && (u.isCompleted = o), r.push({ type: "goal", key: i.key, result: o });
    }
    return this.setCurrentUIState(this.getDoneUIStateForPhase("goal_check")), this.enterNextState("ending_check"), { type: "STATE_CHANGE" };
  }
  handleEndingCheck(t) {
    var _a;
    this.setCurrentUIState(this.getRunningUIStateForPhase("ending_check"));
    const a = (this.session.modeState.failureStates || []).find((u) => u.isCompleted), r = this.session.modeConfig.goals || [], n = r.length > 0 && r.every((u) => {
      var _a2;
      return (_a2 = this.session.modeState.goalStates.find((l) => l.key === u.key)) == null ? void 0 : _a2.isCompleted;
    }), i = !!a;
    if (i || n) {
      if (!t.state.historyItems.findLast((d) => d.type === "challenge_mode_ending")) {
        let d = "", l;
        i ? (d = ((_a = this.session.modeConfig.failureChecks.find((c) => c.key === (a == null ? void 0 : a.key))) == null ? void 0 : _a.userInfo) || "\u6311\u6218\u5931\u8D25\u3002", l = a == null ? void 0 : a.key) : d = "\u606D\u559C\u4F60\uFF01\u6240\u6709\u6311\u6218\u76EE\u6807\u5DF2\u8FBE\u6210\u3002", t.addHistoryItem({ id: O(), type: "challenge_mode_ending", idx: 0, orderRef: 0, timestamp: Date.now(), data: { type: i ? "failure" : "success", description: d, failureReason: l }, hidden: false }), this.setShouldCheck(false);
      }
      return this.setCurrentUIState("ended"), { type: "STOP" };
    }
    return this.setCurrentUIState(this.getDoneUIStateForPhase("ending_check")), this.enterNextState("player_input"), { type: "STATE_CHANGE" };
  }
}
const E = fe({ currentSession: null, contextManager: null, sessionManager: null, variablesManager: null, loadSession(s, t) {
  this.currentSession = s, s.modeState.currentUIState = "idle", this.sessionManager = new Hn(s);
  const a = fe(t || { historyItems: [], processingItem: void 0 });
  this.contextManager = new je(a), s.modeState && s.modeConfig && (this.variablesManager = new ga(s.modeState.variableStates, s.modeConfig.variables || {}));
}, applyVariableOperation(s) {
  if (this.variablesManager) try {
    this.variablesManager.performOperation(s);
  } catch (t) {
    console.error("[Store] VarOp Failed", t);
  }
}, updateConditionState(s, t, a) {
  const r = this.currentSession;
  if (!r) return;
  const i = (s === "goal" ? r.modeState.goalStates : r.modeState.failureStates).find((o) => o.key === t);
  i && (i.isCompleted = a);
}, setPhase(s) {
  this.currentSession && (this.currentSession.modeState.currentPhase = s);
}, async saveNewContextItemsToDB(s, t) {
  const { SessionDB: a } = await Ne(async () => {
    const { SessionDB: i } = await Promise.resolve().then(() => $t);
    return { SessionDB: i };
  }, void 0), r = new a(s);
  let n;
  try {
    n = me(t);
  } catch {
    n = JSON.parse(JSON.stringify(t));
  }
  await r.addContextItems(n);
}, async updateSessionInDB() {
  if (!this.currentSession) return;
  const { masterDb: s } = await Ne(async () => {
    const { masterDb: a } = await Promise.resolve().then(() => ss);
    return { masterDb: a };
  }, void 0), t = me(this.currentSession.modeState);
  await s.sessions.update(this.currentSession.id, { modeState: t, updatedAt: Date.now() });
} });
function Bn() {
  const s = Kt((d) => d.config), t = b.useRef(false), a = he(), r = async (d, l, m, c, p = {}) => {
    const x = E.contextManager;
    if (!x) return { content: "" };
    const f = { id: O(), type: m, orderRef: 0, timestamp: Date.now(), data: { content: "", ...p } };
    x.setProcessingItem(f);
    let v = "";
    return await Qt(d, l, [], (j, g) => {
      c == null ? void 0 : c(j), v = g;
      const _ = x.getProcessingItem();
      _ && (_.data.content = g);
    }), x.completeProcessingItem(), { content: v };
  }, n = async (d, l) => {
    const m = E.sessionManager, c = E.contextManager;
    if (!m || !c) return;
    const p = await m.executeCurrentStateLogic(c);
    if (console.log("[Loop] Action:", p), p.type === "WAIT_FOR_INPUT" || p.type === "STOP") {
      await E.updateSessionInDB(), t.current = false;
      return;
    }
    if (p.type === "STATE_CHANGE") {
      await E.updateSessionInDB(), setTimeout(() => o(d.id), 0);
      return;
    }
    if (p.type === "LLM_CALL") {
      if (p.callbackPhase) {
        const f = p.callbackPhase;
        m.setCurrentUIState(m.getRunningUIStateForPhase(f));
      }
      await E.updateSessionInDB();
      const x = await r(l, p.messages.map((f) => ({ ...f, id: O() })), p.llmRequestType, void 0, p.dataExtra);
      await E.saveNewContextItemsToDB(d.id, c.getHistoryItems()), await i(p, x.content, d.id), await E.updateSessionInDB(), setTimeout(() => o(d.id), 0);
    }
  }, i = async (d, l, m) => {
    const c = E.sessionManager, p = E.contextManager;
    if (d.callbackPhase === "dm_eval_changes") {
      try {
        const x = l.indexOf("{"), f = l.lastIndexOf("}") + 1;
        if (x >= 0 && f > x) {
          const v = JSON.parse(l.slice(x, f)), j = v.analyze || "", g = [];
          if (v.operations) {
            const _ = c.session.modeConfig.variables || {};
            for (const S of v.operations) {
              if (!_[S.key]) continue;
              let P;
              S.op === "delta" ? P = ["delta", S.key, Number(S.value)] : S.op === "setTo" ? P = ["setTo", S.key, S.value] : S.op === "setTrue" ? P = ["setTrue", S.key] : S.op === "setFalse" ? P = ["setFalse", S.key] : S.op === "add" ? P = ["add", S.key, String(S.value)] : S.op === "remove" && (P = ["remove", S.key, String(S.value)]), P && (E.applyVariableOperation(P), g.push(P));
            }
          }
          p.addHistoryItem({ id: O(), type: "challenge_mode_dm_eval", idx: 0, orderRef: 0, timestamp: Date.now(), data: { analyze: j, operations: g }, hidden: false }), await E.saveNewContextItemsToDB(m, p.getHistoryItems());
        }
      } catch (x) {
        console.error("Failed to parse DM evaluation", x), V.error("DM \u8BC4\u4F30\u6570\u636E\u89E3\u6790\u5931\u8D25\uFF0C\u5C06\u5FFD\u7565\u672C\u6B21\u53D8\u66F4");
      }
      c.enterNextState("dm_narrate_changes"), c.setCurrentUIState(c.getDoneUIStateForPhase("dm_eval_changes"));
    } else d.callbackPhase === "dm_intro" ? (c.setCurrentUIState(c.getDoneUIStateForPhase("dm_intro")), c.enterNextState("character_intro")) : d.callbackPhase === "character_intro" ? (c.setCurrentUIState(c.getDoneUIStateForPhase("character_intro")), c.enterNextState("player_input")) : d.callbackPhase === "dm_narrate_changes" ? (c.setCurrentUIState(c.getDoneUIStateForPhase("dm_narrate_changes")), c.enterNextState("failure_check")) : d.callbackPhase === "character_response" && (c.setCurrentUIState(c.getDoneUIStateForPhase("character_response")), c.session.modeState.shouldCheck !== false ? c.enterNextState("dm_eval_changes") : c.enterNextState("player_input"));
  }, o = async (d) => {
    const l = E.currentSession;
    if (!l || l.id !== d) return;
    const m = { ...s };
    try {
      t.current = true, await n(l, m);
    } catch (c) {
      console.error("ChallengeLoop Critical Error:", c), V.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", { duration: 1 / 0, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => a({ to: "/config/llm" }) } }), t.current = false;
    }
  };
  return { nextStep: b.useCallback(async (d) => {
    if (t.current) return;
    const l = E.currentSession, m = E.contextManager, c = E.sessionManager;
    if (!l || !m || !c) {
      console.warn("Session or Managers not ready");
      return;
    }
    if (d) {
      if (c.getCurrentPhase() !== "player_input") {
        V.warning("\u5F53\u524D\u5E76\u975E\u73A9\u5BB6\u884C\u52A8\u56DE\u5408");
        return;
      }
      c.setCurrentUIState(c.getRunningUIStateForPhase("player_input")), m.addLLMResponseAsContextItem({ role: "user", content: d }, {}), await E.saveNewContextItemsToDB(l.id, m.getHistoryItems()), c.setCurrentUIState(c.getDoneUIStateForPhase("player_input")), c.enterNextState("character_response"), c.setCurrentUIState(c.getReadyUIStateForPhase("character_response")), await E.updateSessionInDB();
    }
    await o(l.id);
  }, [s]) };
}
const Gn = (s) => {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o2, _p;
  const t = he(), [a, r] = b.useState(""), n = b.useRef(null), [i, o] = b.useState(false), [u, d] = b.useState(false), l = at(E), { data: m = [] } = ke((w) => w.from({ s: Ae })), { data: c = [] } = ke((w) => w.from({ c: Pe })), p = m.find((w) => w.id === s.sessionId), x = c.find((w) => {
    var _a2;
    return w.id === ((_a2 = p == null ? void 0 : p.modeConfig) == null ? void 0 : _a2.characterId);
  });
  b.useEffect(() => {
    var _a2;
    let w = false;
    if (!p) return;
    if (((_a2 = E.currentSession) == null ? void 0 : _a2.id) === p.id && E.contextManager) {
      d(true);
      return;
    }
    return (async () => {
      try {
        const Z = await Et.createSessionDB(p.id).getContextItems();
        if (w) return;
        p.modeConfig && !p.modeConfig.characterSnapshot && x && (p.modeConfig.characterSnapshot = { name: x.name, description: x.description, avatar: x.avatar }), E.loadSession(p, { historyItems: Z, processingItem: void 0 }), d(true);
      } catch (oe) {
        console.error("Load session error", oe);
      }
    })(), () => {
      w = true;
    };
  }, [p == null ? void 0 : p.id, p]);
  const { nextStep: f } = Bn();
  b.useEffect(() => {
    n.current && (n.current.scrollTop = n.current.scrollHeight);
  });
  const v = async () => {
    if (i) return;
    const w = E.sessionManager, A = E.contextManager;
    if (!(!w || !A)) {
      o(true);
      try {
        if (A.getHistoryItems().some((Be) => Be.type === "challenge_mode_ending")) {
          w.setShouldCheck(false), w.enterNextState("player_input"), w.setCurrentUIState(w.getReadyUIStateForPhase("player_input")), await E.updateSessionInDB();
          return;
        }
        const Z = w.getActualCurrentPhase(A);
        w.enterNextState(Z), w.setCurrentUIState(w.getReadyUIStateForPhase(Z)), await E.updateSessionInDB(), await f();
      } finally {
        o(false);
      }
    }
  };
  if (!p || !x || !u) return e.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4", children: [e.jsx("div", { className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center", children: e.jsx(ge, { className: "w-6 h-6 opacity-20" }) }), e.jsx("p", { className: "text-xs font-medium tracking-widest uppercase opacity-50", children: "\u6B63\u5728\u6784\u5EFA\u53D9\u4E8B\u73AF\u5883..." })] });
  const j = async () => {
    if (!(!a.trim() || i)) {
      o(true);
      try {
        await f(a);
      } finally {
        o(false), r("");
      }
    }
  }, g = E.sessionManager && E.contextManager ? E.sessionManager.getActualCurrentUIState(E.contextManager) : ((_b = (_a = l.currentSession) == null ? void 0 : _a.modeState) == null ? void 0 : _b.currentUIState) || "idle", _ = g === "ended", S = Rt[g] || Rt.idle, y = i || !S.inputEnabled && !_, P = async () => {
    E.sessionManager && (E.sessionManager.setShouldCheck(false), E.sessionManager.enterNextState("player_input"), E.sessionManager.setCurrentUIState(E.sessionManager.getReadyUIStateForPhase("player_input")), await E.updateSessionInDB());
  }, I = () => {
    t({ to: "/plaza/challenges" });
  }, K = () => {
    console.log("[Challenge][Memory Session]", E.currentSession);
  }, W = async () => {
    if (!(p == null ? void 0 : p.id)) return;
    const w = await Q.sessions.getTable().get(p.id);
    console.log("[Challenge][DB Session]", w);
  };
  return e.jsxs("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: [e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm", children: e.jsx(ie, { className: "w-5 h-5 text-primary" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm tracking-tight", children: x.name }), e.jsx(U, { variant: "outline", className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-primary/5 text-primary border-primary/10", children: "Lv.1" })] }), e.jsx("span", { className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide", children: "\u53D9\u4E8B\u534F\u8BAE\u8FDE\u63A5\u5DF2\u5EFA\u7ACB" })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs(U, { variant: "secondary", className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50", children: [e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" }), "CHALLENGE"] }), e.jsx(N, { variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: K, children: "LOG MEM" }), e.jsx(N, { variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: W, children: "LOG DB" })] })] }), e.jsx("div", { className: "flex grow overflow-y-auto", ref: n, children: e.jsx("div", { className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-10", children: (() => {
    var _a2, _b2, _c2, _d2, _e3;
    const w = (((_a2 = l.contextManager) == null ? void 0 : _a2.state.historyItems) || []).filter((Z) => !Z.hidden), A = (_b2 = l.contextManager) == null ? void 0 : _b2.state.processingItem;
    if (g === "idle") {
      const Z = w.length === 0 ? "\u5F00\u59CB" : "\u7EE7\u7EED";
      return e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500", children: [e.jsx("div", { className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500", children: e.jsx(Re, { className: "w-10 h-10 text-amber-500 drop-shadow-sm" }) }), e.jsx("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center", children: ((_d2 = (_c2 = p == null ? void 0 : p.modeConfig) == null ? void 0 : _c2.characterSnapshot) == null ? void 0 : _d2.name) || "\u6311\u6218\u6A21\u5F0F" }), e.jsx("p", { className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm", children: ((_e3 = p == null ? void 0 : p.modeConfig) == null ? void 0 : _e3.userGuidance) || "\u547D\u8FD0\u7684\u9F7F\u8F6E\u5DF2\u7ECF\u5F00\u59CB\u8F6C\u52A8\uFF0C\u4F60\u51C6\u5907\u597D\u63A5\u53D7\u6311\u6218\u4E86\u5417\uFF1F" }), e.jsxs(N, { size: "lg", className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-primary/25 shadow-primary/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90", onClick: v, disabled: i, children: [i ? e.jsx(ge, { className: "w-5 h-5 animate-spin mr-3" }) : e.jsx(De, { className: "w-5 h-5 mr-3" }), Z] }), e.jsxs("div", { className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest", children: [e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(Ye, { className: "w-3 h-3" }), " \u81EA\u52A8\u5B58\u6863"] }), e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(ge, { className: "w-3 h-3" }), " \u5B9E\u65F6\u53D8\u91CF"] })] })] });
    }
    const oe = [...w];
    return A && !A.hidden && !w.some((Z) => Z.id === A.id) && oe.push(A), oe.map((Z, Be) => e.jsx(Vn, { item: Z, character: x }, `[${Be}]${Z.id}`));
  })() }) }), _ ? e.jsx("div", { className: "p-6 md:p-8 shrink-0 bg-background border-t", children: e.jsxs("div", { className: "max-w-xl mx-auto flex flex-col items-center gap-6 animate-in slide-in-from-bottom-4 fade-in duration-700", children: [e.jsx("div", { className: "text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60", children: "\u6545\u4E8B\u5DF2\u5B8C\u7ED3" }), e.jsxs("div", { className: "flex items-center gap-4 w-full", children: [e.jsxs(N, { variant: "outline", className: "flex-1 h-12 rounded-xl border-dashed border-2 hover:border-primary/50 hover:bg-primary/5 gap-2", onClick: I, children: [e.jsx(Yt, { className: "w-4 h-4" }), e.jsx("span", { className: "font-bold tracking-wider", children: "\u9000\u51FA\u6311\u6218" })] }), e.jsxs(N, { className: "flex-2 h-12 rounded-xl shadow-lg shadow-primary/10 gap-2 text-base", onClick: P, children: [e.jsx(Gs, { className: "w-4 h-4 fill-current" }), e.jsx("span", { className: "font-black tracking-[0.15em] uppercase", children: "\u7EE7\u7EED\u81EA\u7531\u5BF9\u8BDD" })] })] })] }) }) : e.jsxs("div", { className: "p-4 md:p-6 shrink-0 bg-background", children: [e.jsxs("div", { className: "max-w-3xl mx-auto relative group", children: [e.jsx(X, { value: a, onChange: (w) => r(w.target.value), placeholder: y ? S.placeholder : Rt.player_input_ready.placeholder, disabled: y, className: T("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-primary/20 focus-visible:bg-background transition-all", y && "opacity-50 cursor-not-allowed"), onKeyDown: (w) => {
    w.key === "Enter" && !w.shiftKey && (w.preventDefault(), j());
  } }), e.jsx(N, { size: "icon", type: "button", className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-primary/20 transition-all", disabled: !a.trim() || y, onClick: j, children: i ? e.jsx(ge, { className: "w-4 h-4 animate-spin" }) : e.jsx(Pt, { className: "w-4 h-4" }) })] }), e.jsxs("div", { className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40", children: [e.jsx("div", { className: "text-[9px] font-bold tracking-widest uppercase", children: "INPUT MANIFESTO" }), e.jsx("div", { className: "text-[9px] font-medium", children: y ? "\u8F93\u5165\u5DF2\u9501\u5B9A" : "Shift + Enter \u6362\u884C" })] })] })] }), e.jsxs("div", { className: "w-[320px] h-full overflow-y-auto bg-muted/10 border-l p-8 space-y-10 shrink-0 hidden lg:block scrollbar-none", children: [e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(ge, { className: "w-3.5 h-3.5 text-primary" }), "\u4E16\u754C\u53D8\u91CF"] }), e.jsx(U, { variant: "outline", className: "text-[9px] px-1.5 opacity-50", children: "SYNCED" })] }), e.jsxs("div", { className: "grid grid-cols-1 gap-3", children: [Object.entries(((_d = (_c = l.currentSession) == null ? void 0 : _c.modeState) == null ? void 0 : _d.variableStates) || {}).map(([w, A]) => e.jsxs("div", { className: "bg-background/40 p-4 rounded-xl border border-muted/30 hover:border-primary/20 transition-colors group", children: [e.jsxs("div", { className: "flex justify-between items-start mb-1", children: [e.jsx("span", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider", children: w }), e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors" })] }), e.jsx("div", { className: "text-xl font-mono font-bold tracking-tight text-foreground/90", children: typeof (A == null ? void 0 : A.value) == "number" ? A.value.toLocaleString() : String(A == null ? void 0 : A.value) })] }, w)), Object.keys(((_f = (_e2 = l.currentSession) == null ? void 0 : _e2.modeState) == null ? void 0 : _f.variableStates) || {}).length === 0 && e.jsx("div", { className: "py-8 text-center border border-dashed rounded-xl opacity-30", children: e.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest", children: "\u65E0\u52A8\u6001\u53D8\u91CF" }) })] })] }), e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(Bs, { className: "w-3.5 h-3.5 text-primary" }), "\u751F\u5B58\u76EE\u6807"] }), e.jsxs("div", { className: "space-y-2.5", children: [(_i2 = (_h = (_g = l.currentSession) == null ? void 0 : _g.modeConfig) == null ? void 0 : _h.goals) == null ? void 0 : _i2.map((w) => {
    var _a2, _b2, _c2;
    const A = (_c2 = (_b2 = (_a2 = l.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b2.goalStates) == null ? void 0 : _c2.find((oe) => oe.key === w.key);
    return e.jsxs("div", { className: T("p-3.5 rounded-xl border flex items-start gap-3 transition-all duration-300", (A == null ? void 0 : A.isCompleted) ? "bg-primary/3 border-primary/20 shadow-sm" : "bg-background/40 border-muted/50 grayscale-[0.8] opacity-60"), children: [e.jsx("div", { className: T("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5 shadow-inner", (A == null ? void 0 : A.isCompleted) ? "bg-primary text-primary-foreground" : "bg-muted border border-muted-foreground/10"), children: (A == null ? void 0 : A.isCompleted) ? e.jsx(Ye, { className: "w-3 h-3" }) : e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20" }) }), e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsx("div", { className: T("text-[13px] leading-tight font-bold tracking-tight", (A == null ? void 0 : A.isCompleted) ? "text-primary" : "text-foreground/70"), children: w.description }), (A == null ? void 0 : A.isCompleted) && e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider opacity-60", children: "Objective Achieved" })] })] }, w.key);
  }), (!((_k = (_j = l.currentSession) == null ? void 0 : _j.modeConfig) == null ? void 0 : _k.goals) || l.currentSession.modeConfig.goals.length === 0) && e.jsx("div", { className: "py-8 text-center border border-dashed rounded-xl opacity-30", children: e.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest", children: "\u65E0\u8BBE\u5B9A\u76EE\u6807" }) })] })] }), e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(Re, { className: "w-3.5 h-3.5 text-destructive" }), "\u6B7B\u4EA1\u7981\u5FCC"] }), e.jsxs("div", { className: "space-y-2.5", children: [(_n2 = (_m = (_l = l.currentSession) == null ? void 0 : _l.modeConfig) == null ? void 0 : _m.failureChecks) == null ? void 0 : _n2.map((w) => {
    var _a2, _b2, _c2;
    const A = (_c2 = (_b2 = (_a2 = l.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b2.failureStates) == null ? void 0 : _c2.find((oe) => oe.key === w.key);
    return e.jsxs("div", { className: T("p-3.5 rounded-xl border flex items-start gap-3 transition-all", (A == null ? void 0 : A.isCompleted) ? "bg-destructive/5 border-destructive/20" : "bg-background/40 border-muted/50 opacity-60"), children: [e.jsx("div", { className: T("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5", (A == null ? void 0 : A.isCompleted) ? "bg-destructive text-destructive-foreground" : "bg-muted border border-muted-foreground/10"), children: (A == null ? void 0 : A.isCompleted) ? e.jsx(Ms, { className: "w-3 h-3" }) : e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20" }) }), e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsx("div", { className: T("text-[13px] leading-tight font-bold tracking-tight", (A == null ? void 0 : A.isCompleted) ? "text-destructive" : "text-foreground/70"), children: w.description }), (A == null ? void 0 : A.isCompleted) && e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider opacity-60", children: "Critical Failure Triggered" })] })] }, w.key);
  }), (!((_p = (_o2 = l.currentSession) == null ? void 0 : _o2.modeConfig) == null ? void 0 : _p.failureChecks) || l.currentSession.modeConfig.failureChecks.length === 0) && e.jsx("div", { className: "py-8 text-center border border-dashed rounded-xl opacity-30", children: e.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest", children: "\u65E0\u5931\u8D25\u5224\u5B9A" }) })] })] }), e.jsxs("div", { className: "pt-10 opacity-30", children: [e.jsx("div", { className: "h-px bg-linear-to-r from-transparent via-muted-foreground/50 to-transparent" }), e.jsx("p", { className: "text-[9px] text-center mt-4 font-bold tracking-[0.3em] uppercase", children: "Narrative Engine v1.0.4" })] })] })] });
}, Vn = (s) => {
  const { item: t, character: a } = s, n = (() => {
    const i = t.data;
    return i ? Array.isArray(i.operations) ? e.jsx(gs, { item: { ...t, type: "challenge_mode_dm_eval" } }) : Array.isArray(i.results) && i.results.every((o) => o && (o.type === "goal" || o.type === "failure")) ? e.jsx(fs, { item: { ...t, type: "challenge_mode_checking" } }) : i.type && (i.type === "success" || i.type === "failure") && typeof i.description == "string" ? e.jsx(bs, { item: { ...t, type: "challenge_mode_ending" } }) : null : null;
  })();
  if (n) return n;
  switch (t.type) {
    case "dm_intro":
      return e.jsx(xs, { content: t.data.content, title: "Challenge Intro" });
    case "challenge_mode_dm_eval":
      return e.jsx(gs, { item: t });
    case "challenge_mode_checking":
      return e.jsx(fs, { item: t });
    case "challenge_mode_ending":
      return e.jsx(bs, { item: t });
    case "character_intro":
      return e.jsx(pa, { item: t, character: a });
    case "character_message":
      return e.jsx(Nt, { item: t, character: a });
    case "character_message_group":
      return e.jsx("div", { className: "space-y-4", children: (t.data.list || []).map((i, o) => e.jsx(Nt, { item: { ...t, data: { ...t.data, content: i.content } }, character: a }, i.id || o)) });
    case "participant_message":
      return t.data.isDM || t.data.name === "DM" || !t.data.isUser && !t.data.isCharacter && !t.data.isEnv ? e.jsx(xs, { content: t.data.content }) : e.jsx(Vt, { item: t });
    case "system_notification":
      return e.jsx("div", { className: "flex justify-center my-6", children: e.jsxs("div", { className: "flex items-center gap-3 px-4 py-1.5 rounded-full bg-muted/30 border border-muted/50 text-muted-foreground shadow-sm", children: [e.jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/40" }), e.jsx("span", { className: "text-[10px] font-bold tracking-widest uppercase", children: t.data.content }), e.jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/40" })] }) });
    case "placeholder":
      return null;
    default:
      return null;
  }
}, xs = ({ content: s, title: t = "Narrative Master" }) => e.jsxs("div", { className: "flex gap-6 group animate-in fade-in slide-in-from-left-2 duration-500", children: [e.jsxs("div", { className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden", children: [e.jsx("div", { className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" }), e.jsx(ie, { className: "w-5 h-5 text-amber-600 relative z-10" })] }), e.jsxs("div", { className: "space-y-2 grow pt-1", children: [e.jsxs("div", { className: "text-[10px] font-black tracking-[0.2em] text-amber-600/60 flex items-center gap-2 uppercase", children: [e.jsx(De, { className: "w-3 h-3" }), t] }), e.jsx("div", { className: "text-[15px] leading-relaxed italic text-foreground/80 whitespace-pre-wrap font-serif", children: s })] })] }), gs = ({ item: s }) => e.jsx("div", { className: "max-w-2xl mx-auto w-full group animate-in fade-in zoom-in-95 duration-500", children: e.jsxs("div", { className: "bg-muted/10 border border-muted/40 rounded-2xl overflow-hidden shadow-sm", children: [e.jsxs("div", { className: "px-4 py-2 border-b border-muted/40 bg-muted/20 flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground/60", children: [e.jsx(ge, { className: "w-3 h-3" }), "\u4E16\u754C\u7EBF\u6F14\u53D8\u8BC4\u4F30"] }), e.jsx(It, { className: "w-3 h-3 text-muted-foreground/30" })] }), e.jsxs("div", { className: "p-5 space-y-4", children: [s.data.analyze && e.jsx("div", { className: "text-[13px] text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1", children: s.data.analyze }), e.jsx("div", { className: "flex flex-wrap gap-2", children: s.data.operations.map((t, a) => e.jsx(zn, { operation: t }, a)) })] })] }) }), zn = ({ operation: s }) => {
  const [t, a, r] = s;
  let n = "bg-primary/10 text-primary border-primary/20", i = "";
  if (t === "delta") {
    const o = r;
    n = o > 0 ? "bg-green-500/10 text-green-600 border-green-500/20" : "bg-red-500/10 text-red-600 border-red-500/20", i = `${a} ${o > 0 ? "+" : ""}${o}`;
  } else t === "setTrue" || t === "setFalse" ? i = `${a} \u2192 ${t === "setTrue" ? "YES" : "NO"}` : i = `${a} = ${r}`;
  return e.jsx(U, { variant: "outline", className: T("text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg border", n), children: i });
}, fs = ({ item: s }) => e.jsx("div", { className: "flex justify-center opacity-40 hover:opacity-100 transition-opacity", children: e.jsx("div", { className: "flex gap-4", children: s.data.results.map((t, a) => t.result && e.jsxs("div", { className: "flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground", children: [e.jsx(Ye, { className: "w-3 h-3 text-primary" }), t.key, " \u66F4\u65B0"] }, a)) }) }), bs = ({ item: s }) => {
  const t = s.data.type === "success";
  return e.jsx("div", { className: "py-12 animate-in fade-in zoom-in duration-1000", children: e.jsxs("div", { className: T("max-w-lg mx-auto p-12 rounded-[2.5rem] border-4 text-center space-y-6 shadow-2xl relative overflow-hidden", t ? "bg-primary/5 border-primary/30 shadow-primary/10" : "bg-destructive/5 border-destructive/30 shadow-destructive/10"), children: [e.jsx("div", { className: T("absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20", t ? "bg-primary" : "bg-destructive") }), e.jsx("div", { className: T("absolute -bottom-12 -left-12 w-48 h-48 rounded-full blur-3xl opacity-20", t ? "bg-primary" : "bg-destructive") }), e.jsx("div", { className: "inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-background border shadow-xl relative z-10 mb-2", children: t ? e.jsx(Re, { className: "w-12 h-12 text-primary animate-bounce-short" }) : e.jsx(Ls, { className: "w-12 h-12 text-destructive animate-pulse" }) }), e.jsxs("div", { className: "space-y-2 relative z-10", children: [e.jsx("h2", { className: T("text-3xl font-black uppercase tracking-[0.3em]", t ? "text-primary" : "text-destructive"), children: t ? "\u6311\u6218\u6210\u529F" : "\u6311\u6218\u5931\u8D25" }), e.jsx("div", { className: "h-1 w-12 bg-muted-foreground/20 mx-auto rounded-full" })] }), e.jsx("p", { className: "text-lg font-medium text-foreground/80 leading-relaxed font-serif relative z-10", children: s.data.description }), !t && s.data.failureReason && e.jsxs("div", { className: "pt-4 px-6 relative z-10", children: [e.jsx("div", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-destructive/60 mb-2", children: "\u5931\u8D25\u6839\u6E90" }), e.jsxs("p", { className: "text-xs font-bold text-destructive/80 italic", children: ["\u300C", s.data.failureReason, "\u300D"] })] }), e.jsx("div", { className: "pt-8 relative z-10", children: e.jsx(U, { variant: "outline", className: "text-[10px] font-black tracking-[0.4em] uppercase py-2 px-6 rounded-2xl bg-background/50 backdrop-blur-sm border-muted/50", children: "NARRATIVE ENDED" }) })] }) });
}, jo = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForChallenge: Gn }, Symbol.toStringTag, { value: "Module" }));
function fa(s) {
  return Math.floor((s - 10) / 2);
}
function Jn(s, t) {
  const a = Math.floor(Math.random() * 20) + 1, r = a + t;
  return { naturalRoll: a, total: r, modifier: t, isSuccess: r >= s };
}
function qn(s, t) {
  const a = t[s.attribute] || 10, r = fa(a);
  return Jn(s.dc, r);
}
function Kn(s) {
  try {
    const t = s.match(/```(?:json)?\s*\n?([\s\S]*?)```/), a = t ? t[1].trim() : s.trim(), r = a.indexOf("{"), n = a.lastIndexOf("}") + 1;
    if (r < 0 || n <= r) return console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5931\u8D25\uFF1A\u672A\u627E\u5230 JSON \u5757", s.slice(0, 200)), null;
    const i = JSON.parse(a.slice(r, n));
    if (i.none === true || i.none === "true") return { needsCheck: false };
    const o = i.playerId || i.player_id || i.\u89D2\u8272ID || i.\u6267\u884C\u8005ID, u = i.attribute || i.\u5C5E\u6027 || i.\u68C0\u5B9A\u7EF4\u5EA6, d = Number(i.dc || i.DC || i.\u76EE\u6807\u6570\u503C || i.\u96BE\u5EA6 || 0);
    return o && u && d > 0 ? { needsCheck: true, checkSpec: { intent: i.intent || i.\u610F\u56FE || i.reason || i.\u5177\u4F53\u610F\u56FE || "", type: i.type || "attribute", attribute: u, dc: d, playerId: o } } : (console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56 JSON \u5B57\u6BB5\u4E0D\u5B8C\u6574:", i), null);
  } catch (t) {
    return console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5F02\u5E38:", t, s.slice(0, 200)), null;
  }
}
function Xn(s) {
  try {
    const t = s.indexOf("{"), a = s.lastIndexOf("}") + 1;
    if (t < 0 || a <= t) return null;
    const r = JSON.parse(s.slice(t, a)), n = r.nextPlayerId || r.\u6307\u5B9A\u7684\u73A9\u5BB6ID;
    return n ? { nextPlayerId: n, reason: r.reason || r.\u539F\u56E0 || "" } : null;
  } catch {
    return null;
  }
}
function Wn(s) {
  const t = s.replace(/<[^>]*$/, ""), a = [], r = /<\/?([a-zA-Z]\w*)[^>]*>/g;
  let n;
  for (; (n = r.exec(t)) !== null; ) {
    const o = n[1].toLowerCase();
    n[0].startsWith("</") ? a.length > 0 && a.at(-1) === o && a.pop() : a.push(o);
  }
  let i = t;
  for (; a.length > 0; ) {
    const o = a.pop();
    i += `</${o}>`;
  }
  return i;
}
function Yn(s, t) {
  let a = s;
  return t.userName && (a = a.replace(/\{\{user\}\}/gi, t.userName), a = a.replace(/<USER>/gi, t.userName)), t.charName && (a = a.replace(/\{\{char\}\}/gi, t.charName), a = a.replace(/<BOT>/gi, t.charName)), a;
}
const Qn = /<think>([\s\S]*?)<\/think>/, Zn = /<speak>([\s\S]*?)<\/speak>/, ei = /<action>([\s\S]*?)<\/action>/;
function ba(s) {
  var _a, _b, _c, _d, _e2, _f;
  const t = Wn(s), a = (_b = (_a = t.match(Qn)) == null ? void 0 : _a[1]) == null ? void 0 : _b.trim(), r = (_d = (_c = t.match(Zn)) == null ? void 0 : _c[1]) == null ? void 0 : _d.trim(), n = (_f = (_e2 = t.match(ei)) == null ? void 0 : _e2[1]) == null ? void 0 : _f.trim(), i = t.replace(/<\/?[a-zA-Z]\w*[^>]*>/g, "").trim();
  return { think: a, speak: r, action: n, rawText: i };
}
function it(s) {
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
function ot(s) {
  return s.modeConfig.worldSnapshot;
}
function Te(s) {
  return s.modeConfig.playerCharacterSnapshots;
}
function ti(s, t) {
  return s.modeConfig.playerCharacterSnapshots.find((a) => a.id === t);
}
function He(s, t) {
  return s.map((a) => {
    const r = Object.entries(a.attributes).map(([i, o]) => `${i}:${o}(${fa(o)})`).join(", "), n = t[a.id] || 0;
    return `- ${a.name} (ID: ${a.id}): ${r} (\u7D2F\u8BA1\u884C\u52A8: ${n}\u6B21)`;
  }).join(`
`);
}
function ct(s) {
  return s.map((t) => `- ${t.name} (ID: ${t.id}): ${t.systemPrompt}`).join(`
`);
}
function lt(s, t, a = 15) {
  const r = Te(t);
  return s.getFlatHistoryItems(a).filter((n) => !n.hidden && !n.deleted).map((n) => {
    var _a;
    const { type: i, data: o } = n;
    if (i === "dnd_dm_intro" || i === "dnd_dm_narrate") return `[DM]: ${o.content}`;
    if (i === "dnd_player_action") return `[${o.characterName || ((_a = r.find((d) => d.id === o.characterId)) == null ? void 0 : _a.name) || o.characterId}]: ${o.content}`;
    if (i === "participant_message") return o.isDM ? `[DM]: ${o.content}` : `[${o.name || "\u73A9\u5BB6"}]: ${o.content}`;
    if (i === "dnd_roll_result") {
      const u = o.checkSpec, d = o.checkResult;
      return `[\u7CFB\u7EDF\u68C0\u5B9A] ${u.intent}: 1d20(${d.naturalRoll}) + ${u.attribute}\u4FEE\u6B63(${d.modifier}) = ${d.total} vs DC:${u.dc} \u2192 ${d.isSuccess ? "\u6210\u529F" : "\u5931\u8D25"}`;
    }
    return i === "dnd_system_notice" ? `[\u7CFB\u7EDF]: ${o.content}` : null;
  }).filter(Boolean).join(`
`);
}
function si(s) {
  var _a;
  return ((_a = s.modeConfig.playerCharacterSnapshots.find((a) => a.isHumanControlled)) == null ? void 0 : _a.name) || "\u5192\u9669\u8005";
}
function $e(s, t, a) {
  const r = si(t), n = a || t.modeConfig.dmName || "DM";
  return s.map((i) => ({ ...i, content: Yn(i.content, { userName: r, charName: n }) }));
}
function ai(s, t) {
  const a = ot(s), r = Te(s), n = s.modeState.turnCounts, i = s.modeConfig.gameMode, o = `\u4F60\u662F DM (\u5730\u4E0B\u57CE\u4E3B)\u3002\u8BF7\u4E3A\u8FD9\u4E2A DND \u5192\u9669\u521B\u5EFA\u5F15\u4EBA\u5165\u80DC\u7684\u5F00\u573A\u4ECB\u7ECD\uFF0C\u8BBE\u7F6E\u4E16\u754C\u80CC\u666F\u548C\u521D\u59CB\u573A\u666F\u3002
${it(i)}
${a.systemPrompt}
${a.globalKnowledge ? `
\u3010\u4E16\u754C\u89C2\u8865\u5145\u3011
${a.globalKnowledge}` : ""}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, u = ["\u3010\u6E38\u620F\u914D\u7F6E\u3011", `DM: ${s.modeConfig.dmName || "DM"}`, `\u4E16\u754C: ${a.name} \u2014 ${a.description}`, `\u53C2\u4E0E\u89D2\u8272:
${ct(r)}`, `\u3010\u521D\u59CB\u6570\u503C\u72B6\u6001\u3011
${He(r, n)}`].join(`

`);
  return $e([{ role: "system", content: o }, { role: "user", content: u }], s);
}
function ri(s, t) {
  const a = ot(s), r = Te(s), n = s.modeState.turnCounts, i = s.modeConfig.gameMode, o = s.modeState.historySummary, u = `\u4F60\u662F DM\u3002\u8BF7\u6839\u636E\u5F53\u524D\u5267\u60C5\u8FDB\u5C55\u63CF\u5199\u573A\u666F\uFF0C\u63A8\u8FDB\u6545\u4E8B\u3002
\u4E0D\u9700\u8981\u5728\u6B64\u9636\u6BB5\u6307\u5B9A\u89D2\u8272\u6216\u63D0\u51FA\u68C0\u5B9A\uFF0C\u53EA\u9700\u63CF\u5199\u3002
${it(i)}
${a.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, d = lt(t, s, 10), l = ["\u3010\u6E38\u620F\u914D\u7F6E\u3011", `\u4E16\u754C: ${a.name}`, `\u89D2\u8272:
${ct(r)}`, o ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${o}` : "", d ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${d}` : "", `\u3010\u6570\u503C\u72B6\u6001\u3011
${He(r, n)}`].filter(Boolean).join(`

`);
  return $e([{ role: "system", content: u }, { role: "user", content: l }], s);
}
function ni(s, t) {
  const a = Te(s), r = s.modeState.turnCounts, n = s.modeConfig.gameMode, i = a.map((f) => r[f.id] || 0), u = (i.length > 0 ? Math.min(...i) : 0) + 2, d = a.filter((f) => (r[f.id] || 0) <= u).sort((f, v) => (r[f.id] || 0) - (r[v.id] || 0)), l = `\u4F60\u662F DM\u3002\u8BF7\u6839\u636E\u521A\u624D\u7684\u53D9\u4E8B\uFF0C\u4ECE\u5019\u9009\u540D\u5355\u4E2D\u6307\u5B9A\u3010\u4E0B\u4E00\u4E2A\u3011\u884C\u52A8\u7684\u89D2\u8272\u3002
${it(n)}
\u3010\u516C\u5E73\u6027\u539F\u5219\u3011\uFF1A\u4E3A\u4E86\u786E\u4FDD\u6BCF\u4E2A\u73A9\u5BB6\u90FD\u6709\u5E73\u7B49\u7684\u53C2\u4E0E\u673A\u4F1A\uFF0C\u4F60\u3010\u5FC5\u987B\u3011\u4EC5\u4ECE\u4EE5\u4E0B\u63D0\u4F9B\u7684\u540D\u5355\u4E2D\u9009\u62E9\u3002\u8BF7\u4F18\u5148\u8003\u8651\u884C\u52A8\u6B21\u6570\u6700\u5C11\u7684\u89D2\u8272\u3002
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u9700\u8F93\u51FA\u4E00\u4E2A JSON \u5757\uFF0C\u4E0D\u8981\u5305\u542B\u4EFB\u4F55\u53D9\u4E8B\u6587\u5B57\u3002
\`\`\`json
{ "reason": "\u539F\u56E0", "nextPlayerId": "\u89D2\u8272ID" }
\`\`\`
\u5019\u9009\u540D\u5355\uFF08\u4EC5\u9650\u5DF2\u884C\u52A8\u6B21\u6570\u8F83\u5C11\u7684\u89D2\u8272\uFF09\uFF1A
${d.map((f) => `- ${f.name} (ID: ${f.id}, \u5DF2\u884C\u52A8: ${r[f.id] || 0}\u6B21)`).join(`
`)}`, c = t.getFlatHistoryItems(5).findLast((f) => f.type === "dnd_dm_narrate" || f.type === "dnd_dm_intro"), p = c ? `\u3010\u5F53\u524D\u573A\u666F\u3011
${c.data.content}` : `\u3010\u521D\u59CB\u573A\u666F\u3011
\u5192\u9669\u5F00\u59CB\u3002`, x = `\u3010\u6240\u6709\u89D2\u8272\u884C\u52A8\u7EDF\u8BA1\u3011
${a.map((f) => `${f.name}: ${r[f.id] || 0} \u6B21`).join(`
`)}`;
  return $e([{ role: "system", content: l }, { role: "user", content: [p, x].join(`

`) }], s);
}
function ii(s, t) {
  const a = s.modeState.turnCounts, r = s.modeState.currentTurnCharacterId, n = ti(s, r), i = s.modeState.historySummary, o = s.modeConfig.gameMode;
  if (!n) return [];
  const u = `\u4F60\u662F\u73A9\u5BB6 ${n.name} (${n.id})\u3002${n.systemPrompt}
\u8BF7\u57FA\u4E8E\u5F53\u524D\u573A\u666F\u548C DM \u7684\u5F15\u5BFC\u51B3\u5B9A\u4F60\u7684\u884C\u52A8\u3002
${it(o)}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<think>\u5185\u5FC3\u72EC\u767D</think><speak>\u53E3\u5934\u8868\u8FBE</speak><action>\u5177\u4F53\u884C\u52A8</action>\u3002`, d = lt(t, s, 8), l = He([n], a), m = [`\u3010\u4F60\u7684\u89D2\u8272\u4FE1\u606F\u3011
${n.systemPrompt}`, i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "", d ? `\u3010\u5F53\u524D\u573A\u666F\u3011
${d}` : "", `\u3010\u4F60\u7684\u6570\u503C\u72B6\u6001\u3011
${l}`].filter(Boolean).join(`

`);
  return $e([{ role: "system", content: u }, { role: "user", content: m }], s, n.name);
}
function oi(s, t) {
  const a = ot(s), r = Te(s), n = s.modeState.turnCounts, i = s.modeState.historySummary, o = `\u4F60\u662F DM\u3002\u8BF7\u8BC4\u4EF7\u521A\u624D\u73A9\u5BB6\u7684\u884C\u52A8\uFF0C\u5E76\u63CF\u5199\u5176\u521D\u6B65\u53CD\u5E94\u3002
\u4E0D\u8981\u5728\u6B64\u9636\u6BB5\u8F93\u51FA\u68C0\u5B9A JSON\uFF0C\u4E5F\u4E0D\u8981\u63CF\u8FF0\u6700\u7EC8\u7ED3\u679C\u3002
${a.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, u = lt(t, s, 10), d = [`\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${a.name}
\u89D2\u8272:
${ct(r)}`, i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "", u ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${u}` : "", `\u3010\u6570\u503C\u72B6\u6001\u3011
${He(r, n)}`].filter(Boolean).join(`

`);
  return $e([{ role: "system", content: o }, { role: "user", content: d }], s);
}
function ci(s, t) {
  const a = ot(s), r = Te(s), n = s.modeState.turnCounts, i = s.modeState.historySummary, o = s.modeConfig.gameMode, u = `\u4F60\u662F DM\u3002\u57FA\u4E8E\u73A9\u5BB6\u521A\u624D\u7684\u884C\u52A8\uFF0C\u51B3\u5B9A\u662F\u5426\u9700\u8981\u8FDB\u884C DND 5e \u68C0\u5B9A\u3002
${it(o)}
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
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u4EFB\u4F55\u53D9\u4E8B\u3002`, d = lt(t, s, 10), l = [`\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${a.name}
\u89D2\u8272:
${ct(r)}`, i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "", d ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${d}` : "", `\u3010\u89D2\u8272\u6570\u503C\u72B6\u6001\u3011
${He(r, n)}`].filter(Boolean).join(`

`);
  return $e([{ role: "system", content: u }, { role: "user", content: l }], s);
}
function li(s, t) {
  var _a;
  const a = ot(s), r = Te(s), n = s.modeState.turnCounts, i = s.modeState.historySummary, o = s.modeState.lastCheckResult, u = s.modeState.lastCheckSpec, d = `\u4F60\u662F DM\u3002\u68C0\u5B9A\u7ED3\u679C\u5DF2\u51FA\u3002\u8BF7\u6839\u636E\u7ED3\u679C\u63CF\u8FF0\u540E\u679C\uFF0C\u5E76\u5F15\u5BFC\u5267\u60C5\u3002
${a.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, l = lt(t, s, 10), m = o && u ? `\u3010\u68C0\u5B9A\u7ED3\u679C\u3011
\u610F\u56FE: ${u.intent}
\u6267\u884C\u8005: ${((_a = r.find((p) => p.id === u.playerId)) == null ? void 0 : _a.name) || u.playerId}
\u9AB0\u5B50\u7ED3\u679C: ${o.total} (1d20:${o.naturalRoll} + \u4FEE\u6B63:${o.modifier}) vs DC:${u.dc}
\u7ED3\u8BBA: ${o.isSuccess ? "\u6210\u529F" : "\u5931\u8D25"}
\u8BF7\u6839\u636E\u6B64\u7ED3\u679C\u8FDB\u884C\u9488\u5BF9\u6027\u7684\u540E\u679C\u63CF\u8FF0\u3002` : "", c = [`\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${a.name}
\u89D2\u8272:
${ct(r)}`, i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "", l ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${l}` : "", m, `\u3010\u6570\u503C\u72B6\u6001\u3011
${He(r, n)}`].filter(Boolean).join(`

`);
  return $e([{ role: "system", content: d }, { role: "user", content: c }], s);
}
class di extends rs {
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
    var _a, _b, _c;
    const a = t.getProcessingItem();
    if (a == null ? void 0 : a.type) {
      const n = { dnd_dm_intro: "dm_game_intro", dnd_dm_narrate: "dm_narrate", dnd_assign_player: "dm_assign_player", dnd_player_action: "player_action", dnd_check_decision: "dm_check_decision", dnd_roll_result: "fn_roll_check" };
      if (a.type === "participant_message" && ((_a = a.data) == null ? void 0 : _a.isDM)) return "dm_check_eval";
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
          const o = (_b = i.data) == null ? void 0 : _b.phase;
          return o === "dm_check_eval" ? "dm_check_decision" : "dm_assign_player";
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
    var _a;
    const a = t.getProcessingItem();
    if (a == null ? void 0 : a.type) {
      const r = { dnd_dm_intro: "dm_game_intro_running", dnd_dm_narrate: "dm_narrate_running", dnd_assign_player: "dm_assign_player_running", dnd_player_action: "player_action_running", dnd_check_decision: "dm_check_decision_running", dnd_roll_result: "fn_roll_check_running" };
      if (a.type === "participant_message" && ((_a = a.data) == null ? void 0 : _a.isDM)) return "dm_check_eval_running";
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
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_game_intro")), { type: "LLM_CALL", messages: ai(this.session), callbackPhase: "dm_game_intro", llmRequestType: "dnd_dm_intro" };
      case "dm_narrate":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate")), { type: "LLM_CALL", messages: ri(this.session, t), callbackPhase: "dm_narrate", llmRequestType: "dnd_dm_narrate", dataExtra: { phase: "dm_narrate" } };
      case "dm_assign_player":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_assign_player")), { type: "LLM_CALL", messages: ni(this.session, t), callbackPhase: "dm_assign_player", llmRequestType: "dnd_assign_player" };
      case "player_action":
        return this.handlePlayerAction(t);
      case "dm_check_eval":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_eval")), { type: "LLM_CALL", messages: oi(this.session, t), callbackPhase: "dm_check_eval", llmRequestType: "dnd_dm_narrate", dataExtra: { phase: "dm_check_eval" } };
      case "dm_check_decision":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_decision")), { type: "LLM_CALL", messages: ci(this.session, t), callbackPhase: "dm_check_decision", llmRequestType: "dnd_check_decision" };
      case "fn_roll_check":
        return this.handleRollCheck(t);
      case "dm_tell_result":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_tell_result")), { type: "LLM_CALL", messages: li(this.session, t), callbackPhase: "dm_tell_result", llmRequestType: "dnd_dm_narrate", dataExtra: { phase: "dm_tell_result" } };
      default:
        return { type: "STOP" };
    }
  }
  handlePlayerAction(t) {
    const a = this.session.modeState.currentTurnCharacterId, r = this.session.modeConfig.playerCharacterSnapshots.find((n) => n.id === a);
    return r ? r.isHumanControlled ? (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), { type: "WAIT_FOR_INPUT" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), { type: "LLM_CALL", messages: ii(this.session, t), callbackPhase: "player_action", llmRequestType: "dnd_player_action", dataExtra: { characterId: r.id, characterName: r.name, isHumanControlled: false } }) : (console.error(`[DndManager] \u89D2\u8272 ${a} \u4E0D\u5B58\u5728`), this.enterNextState("dm_assign_player"), { type: "STATE_CHANGE" });
  }
  handleRollCheck(t) {
    this.setCurrentUIState(this.getRunningUIStateForPhase("fn_roll_check"));
    const a = this.session.modeState.lastCheckSpec;
    if (!a) return console.error("[DndManager] \u68C0\u5B9A\u89C4\u8303\u7F3A\u5931\uFF0C\u8DF3\u8FC7\u68C0\u5B9A"), this.enterNextState("dm_narrate"), { type: "STATE_CHANGE" };
    const r = this.session.modeConfig.playerCharacterSnapshots.find((i) => i.id === a.playerId);
    if (!r) return console.error(`[DndManager] \u68C0\u5B9A\u89D2\u8272 ${a.playerId} \u4E0D\u5B58\u5728`), this.enterNextState("dm_narrate"), { type: "STATE_CHANGE" };
    const n = qn(a, r.attributes);
    return this.session.modeState.lastCheckResult = n, t.addHistoryItem({ id: O(), type: "dnd_roll_result", idx: 0, orderRef: 0, timestamp: Date.now(), data: { checkSpec: a, checkResult: n, characterName: r.name, attributeName: a.attribute } }), this.setCurrentUIState(this.getDoneUIStateForPhase("fn_roll_check")), this.enterNextState("dm_tell_result"), { type: "STATE_CHANGE" };
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
        const n = Xn(a);
        if (n) {
          const i = this.session.modeConfig.playerCharacterSnapshots.find((o) => o.id === n.nextPlayerId);
          r.addHistoryItem({ id: O(), type: "dnd_assign_player", idx: 0, orderRef: 0, timestamp: Date.now(), data: { nextPlayerId: n.nextPlayerId, nextPlayerName: i == null ? void 0 : i.name, reason: n.reason, isHumanControlled: i == null ? void 0 : i.isHumanControlled }, hidden: true }), r.addHistoryItem({ id: O(), type: "dnd_system_notice", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: `\u8F6E\u5230 ${(i == null ? void 0 : i.name) || n.nextPlayerId} \u884C\u52A8`, noticeType: "turn_start", characterId: n.nextPlayerId, characterName: i == null ? void 0 : i.name } }), this.setCurrentTurn(n.nextPlayerId), this.enterNextState("player_action");
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
        const n = Kn(a);
        r.addHistoryItem({ id: O(), type: "dnd_check_decision", idx: 0, orderRef: 0, timestamp: Date.now(), data: { needsCheck: (n == null ? void 0 : n.needsCheck) ?? false, checkSpec: (n == null ? void 0 : n.needsCheck) ? n.checkSpec : void 0, rawContent: a }, hidden: true }), (n == null ? void 0 : n.needsCheck) && "checkSpec" in n ? (console.log("[DndManager] \u68C0\u5B9A\u51B3\u7B56\uFF1A\u9700\u8981\u68C0\u5B9A", n.checkSpec), this.session.modeState.lastCheckSpec = n.checkSpec, this.enterNextState("fn_roll_check")) : n === null ? (console.warn("[DndManager] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5931\u8D25\uFF0C\u91CD\u8BD5 dm_check_decision"), this.enterNextState("dm_check_decision")) : (console.log("[DndManager] \u68C0\u5B9A\u51B3\u7B56\uFF1A\u65E0\u9700\u68C0\u5B9A\uFF0C\u76F4\u63A5\u8FDB\u5165\u53D9\u4E8B"), this.enterNextState("dm_narrate"));
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
const R = fe({ currentSession: null, contextManager: null, sessionManager: null, loadSession(s, t) {
  this.currentSession = s, this.currentSession.modeState.currentUIState = "idle", this.sessionManager = ws(new di(this.currentSession));
  const a = fe(t || { historyItems: [], processingItem: void 0 });
  this.contextManager = new je(a);
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
  const { SessionDB: a } = await Ne(async () => {
    const { SessionDB: i } = await Promise.resolve().then(() => $t);
    return { SessionDB: i };
  }, void 0), r = new a(s);
  let n;
  try {
    n = me(t);
  } catch {
    n = JSON.parse(JSON.stringify(t));
  }
  await r.addContextItems(n);
}, async updateSessionInDB() {
  if (!this.currentSession) return;
  const { masterDb: s } = await Ne(async () => {
    const { masterDb: r } = await Promise.resolve().then(() => ss);
    return { masterDb: r };
  }, void 0), t = me(this.currentSession.modeState), a = me(this.currentSession.modeConfig);
  await s.sessions.update(this.currentSession.id, { modeState: t, modeConfig: a, updatedAt: Date.now() });
} });
function mi() {
  const s = Kt((c) => c.config), t = b.useRef(false), a = b.useRef(false), r = he(), n = async (c, p, x, f, v = {}) => {
    const j = R.contextManager;
    if (!j) return { content: "" };
    const g = { id: O(), type: x, orderRef: 0, timestamp: Date.now(), data: { content: "", ...v } };
    j.setProcessingItem(g);
    let _ = "";
    return await Qt(c, p, [], (S, y) => {
      f == null ? void 0 : f(S), _ = y;
      const P = j.getProcessingItem();
      P && (P.data.content = y);
    }), j.completeProcessingItem(), { content: _ };
  }, i = async (c, p) => {
    const x = R.sessionManager, f = R.contextManager;
    if (!x || !f) return;
    const v = await x.executeCurrentStateLogic(f);
    if (console.log("[DndLoop] Action:", v), v.type === "WAIT_FOR_INPUT" || v.type === "STOP") {
      await R.updateSessionInDB(), t.current = false;
      return;
    }
    if (v.type === "STATE_CHANGE") {
      if (await R.updateSessionInDB(), a.current) {
        console.log("[DndLoop] \u6E38\u620F\u5DF2\u6682\u505C\uFF08STATE_CHANGE \u540E\uFF09"), t.current = false;
        return;
      }
      setTimeout(() => u(c.id), 0);
      return;
    }
    if (v.type === "LLM_CALL") {
      if (v.callbackPhase) {
        const g = v.callbackPhase;
        x.setCurrentUIState(x.getRunningUIStateForPhase(g));
      }
      await R.updateSessionInDB();
      const j = await n(p, v.messages.map((g) => ({ ...g, id: O() })), v.llmRequestType, void 0, v.dataExtra);
      if (await R.saveNewContextItemsToDB(c.id, f.getHistoryItems()), o(v, j.content, c.id), await R.updateSessionInDB(), a.current) {
        console.log("[DndLoop] \u6E38\u620F\u5DF2\u6682\u505C\uFF08LLM_CALL \u5B8C\u6210\u540E\uFF09"), t.current = false;
        return;
      }
      setTimeout(() => u(c.id), 0);
    }
  }, o = (c, p, x) => {
    const f = R.sessionManager, v = R.contextManager;
    !f || !v || f.handleLLMResponse(c.callbackPhase, p, v);
  }, u = async (c) => {
    const p = R.currentSession;
    if (!p || p.id !== c) return;
    const x = { ...s };
    try {
      t.current = true, await i(p, x);
    } catch (f) {
      console.error("[DndLoop] Critical Error:", f), V.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", { duration: 1 / 0, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => r({ to: "/config/llm" }) } }), t.current = false;
    }
  }, d = b.useCallback(async (c) => {
    if (t.current) return;
    const p = R.currentSession, x = R.contextManager, f = R.sessionManager;
    if (!p || !x || !f) {
      console.warn("[DndLoop] Session or Managers not ready");
      return;
    }
    if (c) {
      if (f.getCurrentPhase() !== "player_action") {
        V.warning("\u5F53\u524D\u5E76\u975E\u8BE5\u89D2\u8272\u7684\u884C\u52A8\u56DE\u5408");
        return;
      }
      const v = p.modeState.currentTurnCharacterId, j = p.modeConfig.playerCharacterSnapshots.find((g) => g.id === v);
      if (!(j == null ? void 0 : j.isHumanControlled)) {
        V.warning("\u5F53\u524D\u89D2\u8272\u7531 AI \u63A7\u5236\uFF0C\u65E0\u6CD5\u624B\u52A8\u8F93\u5165");
        return;
      }
      f.setCurrentUIState(f.getRunningUIStateForPhase("player_action")), x.addHistoryItem({ id: O(), type: "dnd_player_action", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: c, characterId: v, characterName: j.name, isHumanControlled: true } }), await R.saveNewContextItemsToDB(p.id, x.getHistoryItems()), f.incrementTurnCount(v), f.setCurrentUIState(f.getDoneUIStateForPhase("player_action")), f.enterNextState("dm_check_eval"), await R.updateSessionInDB();
    }
    await u(p.id);
  }, [s]), l = b.useCallback(() => {
    a.current = true, console.log("[DndLoop] \u6682\u505C\u8BF7\u6C42\u5DF2\u53D1\u51FA");
  }, []), m = b.useCallback(() => {
    if (!a.current) return;
    a.current = false, console.log("[DndLoop] \u6062\u590D\u6E38\u620F");
    const c = R.currentSession;
    c && !t.current && u(c.id);
  }, [s]);
  return { nextStep: d, isCallingRef: t, isPausedRef: a, pauseGame: l, resumeGame: m };
}
const ui = M({ \u529B\u91CF: C().describe("\u529B\u91CF\u5C5E\u6027\u503C"), \u654F\u6377: C().describe("\u654F\u6377\u5C5E\u6027\u503C"), \u4F53\u8D28: C().describe("\u4F53\u8D28\u5C5E\u6027\u503C"), \u667A\u529B: C().describe("\u667A\u529B\u5C5E\u6027\u503C"), \u611F\u77E5: C().describe("\u611F\u77E5\u5C5E\u6027\u503C"), \u9B45\u529B: C().describe("\u9B45\u529B\u5C5E\u6027\u503C") }), hi = M({ intent: h().describe("\u68C0\u5B9A\u610F\u56FE"), type: H(["attribute", "saving", "attack"]).describe("\u68C0\u5B9A\u7C7B\u578B"), attribute: h().describe("\u68C0\u5B9A\u7EF4\u5EA6"), dc: C().describe("\u76EE\u6807\u6570\u503C (DC)"), playerId: h().describe("\u6267\u884C\u68C0\u5B9A\u7684\u89D2\u8272 ID") }), pi = M({ naturalRoll: C().describe("\u9AB0\u5B50\u539F\u503C"), total: C().describe("\u603B\u503C (\u539F\u503C + \u4FEE\u6B63)"), modifier: C().describe("\u5C5E\u6027\u4FEE\u6B63"), isSuccess: $().describe("\u662F\u5426\u6210\u529F") }), xi = H(["dm_game_intro", "dm_narrate", "dm_assign_player", "player_action", "dm_check_eval", "dm_check_decision", "fn_roll_check", "dm_tell_result"]), gi = H(["idle", "dm_game_intro_ready", "dm_game_intro_running", "dm_game_intro_done", "dm_narrate_ready", "dm_narrate_running", "dm_narrate_done", "dm_assign_player_ready", "dm_assign_player_running", "dm_assign_player_done", "player_action_ready", "player_action_running", "player_action_done", "dm_check_eval_ready", "dm_check_eval_running", "dm_check_eval_done", "dm_check_decision_ready", "dm_check_decision_running", "dm_check_decision_done", "fn_roll_check_ready", "fn_roll_check_running", "fn_roll_check_done", "dm_tell_result_ready", "dm_tell_result_running", "dm_tell_result_done"]), ys = { idle: { label: "\u7A7A\u95F2", placeholder: "\u8BF7\u5148\u70B9\u51FB\u5F00\u59CB\u6216\u7EE7\u7EED...", inputEnabled: false }, dm_game_intro_ready: { label: "DM\u5F00\u573A\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u5F00\u573A\u4ECB\u7ECD...", inputEnabled: false }, dm_game_intro_running: { label: "DM\u5F00\u573A\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u4ECB\u7ECD\u4E16\u754C...", inputEnabled: false }, dm_game_intro_done: { label: "DM\u5F00\u573A\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u5F00\u573A\u4ECB\u7ECD\u5B8C\u6210...", inputEnabled: false }, dm_narrate_ready: { label: "DM\u53D9\u4E8B\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u53D9\u4E8B...", inputEnabled: false }, dm_narrate_running: { label: "DM\u53D9\u4E8B\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u63CF\u5199\u573A\u666F...", inputEnabled: false }, dm_narrate_done: { label: "DM\u53D9\u4E8B\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u53D9\u4E8B\u5B8C\u6210...", inputEnabled: false }, dm_assign_player_ready: { label: "\u6307\u5B9A\u89D2\u8272\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u51B3\u5B9A\u8C01\u884C\u52A8...", inputEnabled: false }, dm_assign_player_running: { label: "\u6307\u5B9A\u89D2\u8272\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u6307\u5B9A\u89D2\u8272...", inputEnabled: false }, dm_assign_player_done: { label: "\u6307\u5B9A\u89D2\u8272\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u5DF2\u88AB\u6307\u5B9A...", inputEnabled: false }, player_action_ready: { label: "\u89D2\u8272\u884C\u52A8\uFF08\u51C6\u5907\uFF09", placeholder: "\u8F6E\u5230\u4F60\u884C\u52A8\u4E86\uFF0C\u63CF\u8FF0\u4F60\u7684\u884C\u52A8...", inputEnabled: true }, player_action_running: { label: "\u89D2\u8272\u884C\u52A8\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u884C\u52A8...", inputEnabled: false }, player_action_done: { label: "\u89D2\u8272\u884C\u52A8\uFF08\u5B8C\u6210\uFF09", placeholder: "\u884C\u52A8\u5B8C\u6210...", inputEnabled: false }, dm_check_eval_ready: { label: "DM\u8BC4\u4EF7\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u8BC4\u4EF7\u884C\u52A8...", inputEnabled: false }, dm_check_eval_running: { label: "DM\u8BC4\u4EF7\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u8BC4\u4EF7\u884C\u52A8...", inputEnabled: false }, dm_check_eval_done: { label: "DM\u8BC4\u4EF7\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u8BC4\u4EF7\u5B8C\u6210...", inputEnabled: false }, dm_check_decision_ready: { label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u5224\u5B9A\u662F\u5426\u9700\u8981\u68C0\u5B9A...", inputEnabled: false }, dm_check_decision_running: { label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u5224\u5B9A...", inputEnabled: false }, dm_check_decision_done: { label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u5B8C\u6210\uFF09", placeholder: "\u68C0\u5B9A\u51B3\u7B56\u5B8C\u6210...", inputEnabled: false }, fn_roll_check_ready: { label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u63B7\u9AB0...", inputEnabled: false }, fn_roll_check_running: { label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u6B63\u5728\u63B7\u9AB0...", inputEnabled: false }, fn_roll_check_done: { label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u5B8C\u6210\uFF09", placeholder: "\u63B7\u9AB0\u5B8C\u6210...", inputEnabled: false }, dm_tell_result_ready: { label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u63CF\u8FF0\u68C0\u5B9A\u7ED3\u679C...", inputEnabled: false }, dm_tell_result_running: { label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u63CF\u8FF0\u7ED3\u679C...", inputEnabled: false }, dm_tell_result_done: { label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u63CF\u8FF0\u5B8C\u6210...", inputEnabled: false } }, fi = H(["standard", "narrative", "hardcore", "solo"]), bi = M({ id: h().describe("\u89D2\u8272 ID"), name: h().describe("\u89D2\u8272\u540D\u79F0"), description: h().describe("\u89D2\u8272\u63CF\u8FF0"), avatar: h().optional().describe("\u89D2\u8272\u5934\u50CF"), systemPrompt: h().describe("\u89D2\u8272\u626E\u6F14\u6307\u5F15"), attributes: ui.describe("\u89D2\u8272\u5C5E\u6027"), race: h().optional().describe("\u79CD\u65CF"), class: h().optional().describe("\u804C\u4E1A"), currentHP: C().describe("\u5F53\u524D\u751F\u547D\u503C"), maxHP: C().describe("\u6700\u5927\u751F\u547D\u503C"), isHumanControlled: $().describe("\u662F\u5426\u7531\u4EBA\u7C7B\u63A7\u5236") }), yi = M({ name: h().describe("\u4E16\u754C\u540D\u79F0"), description: h().describe("\u4E16\u754C\u63CF\u8FF0"), systemPrompt: h().describe("\u6838\u5FC3\u7CFB\u7EDF\u63D0\u793A\u8BCD"), globalKnowledge: h().optional().describe("\u4E16\u754C\u89C2\u8865\u5145") }), ji = M({ worldSnapshot: yi.describe("\u4E16\u754C\u8BBE\u5B9A\u5FEB\u7167"), gameMode: fi.describe("\u73A9\u6CD5\u6A21\u5F0F"), playerCharacterSnapshots: q(bi).describe("\u53C2\u4E0E\u89D2\u8272\u5FEB\u7167\u5217\u8868"), dmName: h().optional().describe("DM \u663E\u793A\u540D\u79F0") }), vi = M({ currentPhase: xi.describe("\u5F53\u524D\u9636\u6BB5\u540D\u79F0"), currentUIState: gi.describe("\u5F53\u524D UI \u72B6\u6001\u540D\u79F0"), currentTurnCharacterId: h().describe("\u5F53\u524D\u884C\u52A8\u89D2\u8272 ID ('dm' \u6216\u89D2\u8272ID)"), currentRound: C().describe("\u5F53\u524D\u56DE\u5408\u6570"), turnCounts: ae(h(), C()).describe("\u6BCF\u4E2A\u89D2\u8272\u7684\u884C\u52A8\u6B21\u6570\u7EDF\u8BA1"), lastCheckSpec: hi.optional().describe("\u6700\u8FD1\u4E00\u6B21\u68C0\u5B9A\u89C4\u8303"), lastCheckResult: pi.optional().describe("\u6700\u8FD1\u4E00\u6B21\u68C0\u5B9A\u7ED3\u679C"), historySummary: h().describe("\u5386\u53F2\u6458\u8981") });
At.extend({ mode: F("dnd").describe("\u6A21\u5F0F"), modeConfig: ji.describe("DnD \u6A21\u5F0F\u914D\u7F6E"), modeState: vi.describe("DnD \u6A21\u5F0F\u72B6\u6001") });
const _i = (s) => {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o2, _p, _q;
  const t = he(), [a, r] = b.useState(""), n = b.useRef(null), [i, o] = b.useState(false), [u, d] = b.useState(false), l = at(R), { data: m = [] } = ke((D) => D.from({ s: Ae })), c = m.find((D) => D.id === s.sessionId);
  b.useEffect(() => {
    var _a3;
    let D = false;
    if (!c) return;
    if (((_a3 = R.currentSession) == null ? void 0 : _a3.id) === c.id && R.contextManager) {
      d(true);
      return;
    }
    return (async () => {
      try {
        const te = await Et.createSessionDB(c.id).getContextItems();
        if (D) return;
        R.loadSession(c, { historyItems: te, processingItem: void 0 }), d(true);
      } catch (ce) {
        console.error("[DnD] Load session error", ce);
      }
    })(), () => {
      D = true;
    };
  }, [c == null ? void 0 : c.id, c]);
  const { nextStep: p, isPausedRef: x, pauseGame: f, resumeGame: v } = mi(), [j, g] = b.useState(false);
  b.useEffect(() => {
    n.current && (n.current.scrollTop = n.current.scrollHeight);
  });
  const _ = async () => {
    if (i) return;
    const D = R.sessionManager, ee = R.contextManager;
    if (!(!D || !ee)) {
      x.current = false, g(false), o(true);
      try {
        const ce = D.getActualCurrentPhase(ee);
        D.enterNextState(ce), D.setCurrentUIState(D.getReadyUIStateForPhase(ce)), await R.updateSessionInDB(), await p();
      } finally {
        o(false);
      }
    }
  };
  if (!c || !u) return e.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4", children: [e.jsx("div", { className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center", children: e.jsx(ge, { className: "w-6 h-6 opacity-20" }) }), e.jsx("p", { className: "text-xs font-medium tracking-widest uppercase opacity-50", children: "\u6B63\u5728\u6784\u5EFA\u5192\u9669\u4E16\u754C..." })] });
  const S = async () => {
    if (!(!a.trim() || i)) {
      x.current = false, g(false), o(true);
      try {
        await p(a);
      } finally {
        o(false), r("");
      }
    }
  }, y = R.sessionManager && R.contextManager ? R.sessionManager.getActualCurrentUIState(R.contextManager) : ((_b = (_a2 = l.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b.currentUIState) || "idle", P = ys[y] || ys.idle, I = (_e2 = (_d = (_c = l.currentSession) == null ? void 0 : _c.modeConfig) == null ? void 0 : _d.playerCharacterSnapshots) == null ? void 0 : _e2.find((D) => {
    var _a3, _b2;
    return D.id === ((_b2 = (_a3 = l.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentTurnCharacterId);
  }), K = !!(I == null ? void 0 : I.isHumanControlled), W = i || !P.inputEnabled || P.inputEnabled && !K, w = () => {
    f(), g(true);
  }, A = () => {
    v(), g(false);
  }, oe = async (D) => {
    var _a3, _b2, _c2;
    const ee = (_a3 = R.currentSession) == null ? void 0 : _a3.modeConfig.playerCharacterSnapshots.find((Na) => Na.id === D);
    if (!ee) return;
    const ce = ee.isHumanControlled;
    R.toggleCharacterControl(D), await R.updateSessionInDB();
    const te = D === ((_b2 = R.currentSession) == null ? void 0 : _b2.modeState.currentTurnCharacterId), Ge = (_c2 = R.sessionManager) == null ? void 0 : _c2.getCurrentPhase();
    ce && te && Ge === "player_action" && !i && await p();
  }, Z = () => {
    t({ to: "/plaza" });
  }, Be = () => {
    console.log("[DnD][Memory Session]", R.currentSession);
  }, _a = async () => {
    if (!(c == null ? void 0 : c.id)) return;
    const D = await Q.sessions.getTable().get(c.id);
    console.log("[DnD][DB Session]", D);
  };
  return e.jsxs("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: [e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-sm", children: e.jsx(Ze, { className: "w-5 h-5 text-amber-600" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm tracking-tight", children: ((_h = (_g = (_f = l.currentSession) == null ? void 0 : _f.modeConfig) == null ? void 0 : _g.worldSnapshot) == null ? void 0 : _h.name) || "DnD \u5192\u9669" }), e.jsxs(U, { variant: "outline", className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-amber-500/5 text-amber-600 border-amber-500/10", children: ["R", ((_j = (_i2 = l.currentSession) == null ? void 0 : _i2.modeState) == null ? void 0 : _j.currentRound) || 1] })] }), e.jsx("span", { className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide", children: I ? `\u5F53\u524D\u884C\u52A8: ${I.name} (${I.isHumanControlled ? "\u73A9\u5BB6" : "AI"})` : "\u7B49\u5F85\u5F00\u59CB..." })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [y !== "idle" && (j ? e.jsxs(N, { type: "button", variant: "outline", size: "sm", className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-green-500/30 text-green-600 hover:bg-green-500/10", onClick: A, children: [e.jsx(Gs, { className: "w-3 h-3" }), "\u7EE7\u7EED"] }) : e.jsxs(N, { type: "button", variant: "outline", size: "sm", className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-amber-500/30 text-amber-600 hover:bg-amber-500/10", onClick: w, disabled: !i, children: [e.jsx(lr, { className: "w-3 h-3" }), "\u6682\u505C"] })), e.jsxs(U, { variant: "secondary", className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50", children: [e.jsx("span", { className: T("w-1.5 h-1.5 rounded-full", j ? "bg-amber-400" : "bg-amber-500 animate-pulse") }), j ? "\u5DF2\u6682\u505C" : "DND"] }), e.jsx(N, { type: "button", variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: Be, children: "LOG MEM" }), e.jsx(N, { type: "button", variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: _a, children: "LOG DB" })] })] }), e.jsx("div", { className: "flex grow overflow-y-auto", ref: n, children: e.jsx("div", { className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-8", children: (() => {
    var _a3, _b2, _c2, _d2, _e3, _f2, _g2, _h2;
    const D = (((_a3 = l.contextManager) == null ? void 0 : _a3.state.historyItems) || []).filter((te) => !te.hidden), ee = (_b2 = l.contextManager) == null ? void 0 : _b2.state.processingItem;
    if (y === "idle") {
      const te = D.length === 0 ? "\u5F00\u59CB\u5192\u9669" : "\u7EE7\u7EED\u5192\u9669";
      return e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500", children: [e.jsx("div", { className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500", children: e.jsx(Ze, { className: "w-10 h-10 text-amber-500 drop-shadow-sm" }) }), e.jsx("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center", children: ((_e3 = (_d2 = (_c2 = l.currentSession) == null ? void 0 : _c2.modeConfig) == null ? void 0 : _d2.worldSnapshot) == null ? void 0 : _e3.name) || "DnD \u5192\u9669" }), e.jsx("p", { className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm", children: ((_h2 = (_g2 = (_f2 = l.currentSession) == null ? void 0 : _f2.modeConfig) == null ? void 0 : _g2.worldSnapshot) == null ? void 0 : _h2.description) || "\u4E00\u6BB5\u5168\u65B0\u7684\u5192\u9669\u65C5\u7A0B\u5373\u5C06\u5C55\u5F00\uFF0C\u51C6\u5907\u597D\u63B7\u51FA\u547D\u8FD0\u7684\u9AB0\u5B50\u4E86\u5417\uFF1F" }), e.jsxs(N, { type: "button", size: "lg", className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-amber-500/25 shadow-amber-500/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90", onClick: _, disabled: i, children: [i ? e.jsx(ge, { className: "w-5 h-5 animate-spin mr-3" }) : e.jsx(De, { className: "w-5 h-5 mr-3" }), te] }), e.jsxs("div", { className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest", children: [e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(Ve, { className: "w-3 h-3" }), " D20 \u68C0\u5B9A"] }), e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(dr, { className: "w-3 h-3" }), " \u591A\u4EBA\u5192\u9669"] })] })] });
    }
    const ce = [...D];
    return ee && !ee.hidden && !D.some((te) => te.id === ee.id) && ce.push(ee), ce.map((te, Ge) => e.jsx(Ni, { item: te }, `[${Ge}]${te.id}`));
  })() }) }), e.jsxs("div", { className: "p-4 md:p-6 shrink-0 bg-background", children: [e.jsxs("div", { className: "max-w-3xl mx-auto relative group", children: [e.jsx(X, { value: a, onChange: (D) => r(D.target.value), placeholder: W ? P.inputEnabled && !K ? `${(I == null ? void 0 : I.name) || "\u89D2\u8272"} \u7531 AI \u63A7\u5236\uFF0C\u7B49\u5F85\u81EA\u52A8\u884C\u52A8...` : P.placeholder : `\u4F5C\u4E3A ${(I == null ? void 0 : I.name) || "\u89D2\u8272"}\uFF0C\u63CF\u8FF0\u4F60\u7684\u884C\u52A8...`, disabled: W, className: T("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-amber-500/20 focus-visible:bg-background transition-all", W && "opacity-50 cursor-not-allowed"), onKeyDown: (D) => {
    D.key === "Enter" && !D.shiftKey && (D.preventDefault(), S());
  } }), e.jsx(N, { type: "button", size: "icon", className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all", disabled: !a.trim() || W, onClick: S, children: i ? e.jsx(ge, { className: "w-4 h-4 animate-spin" }) : e.jsx(Pt, { className: "w-4 h-4" }) })] }), e.jsxs("div", { className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40", children: [e.jsx("div", { className: "text-[9px] font-bold tracking-widest uppercase", children: I ? `${I.name} \u7684\u56DE\u5408 (${I.isHumanControlled ? "\u73A9\u5BB6\u64CD\u4F5C" : "AI \u81EA\u52A8"})` : "ADVENTURE LOG" }), e.jsx("div", { className: "text-[9px] font-medium", children: W ? "\u7B49\u5F85\u4E2D..." : "Shift + Enter \u6362\u884C" })] })] })] }), e.jsxs("div", { className: "w-[320px] h-full overflow-y-auto bg-muted/10 border-l p-6 space-y-8 shrink-0 hidden lg:block scrollbar-none", children: [e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(mr, { className: "w-3.5 h-3.5 text-amber-500" }), "\u5192\u9669\u72B6\u6001"] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { className: "bg-background/40 p-3 rounded-xl border border-muted/30", children: [e.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1", children: "\u56DE\u5408" }), e.jsx("div", { className: "text-xl font-mono font-bold tracking-tight text-foreground/90", children: ((_l = (_k = l.currentSession) == null ? void 0 : _k.modeState) == null ? void 0 : _l.currentRound) || 1 })] }), e.jsxs("div", { className: "bg-background/40 p-3 rounded-xl border border-muted/30", children: [e.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1", children: "\u6A21\u5F0F" }), e.jsx("div", { className: "text-sm font-bold tracking-tight text-foreground/90 capitalize", children: ((_n2 = (_m = l.currentSession) == null ? void 0 : _m.modeConfig) == null ? void 0 : _n2.gameMode) || "standard" })] })] })] }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(Ie, { className: "w-3.5 h-3.5 text-amber-500" }), "\u5192\u9669\u8005"] }), e.jsx("div", { className: "space-y-3", children: (_q = (_p = (_o2 = l.currentSession) == null ? void 0 : _o2.modeConfig) == null ? void 0 : _p.playerCharacterSnapshots) == null ? void 0 : _q.map((D) => {
    var _a3, _b2, _c2, _d2, _e3;
    const ee = D.id === ((_b2 = (_a3 = l.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentTurnCharacterId), ce = ((_e3 = (_d2 = (_c2 = l.currentSession) == null ? void 0 : _c2.modeState) == null ? void 0 : _d2.turnCounts) == null ? void 0 : _e3[D.id]) || 0;
    return e.jsxs("div", { className: T("p-4 rounded-xl border transition-all duration-300", ee ? "bg-amber-500/5 border-amber-500/30 shadow-sm shadow-amber-500/10" : "bg-background/40 border-muted/30"), children: [e.jsxs("div", { className: "flex items-start gap-3", children: [e.jsx("div", { className: T("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold", ee ? "bg-amber-500/20 text-amber-600" : D.isHumanControlled ? "bg-blue-500/10 text-blue-600" : "bg-muted text-muted-foreground"), children: D.isHumanControlled ? e.jsx(gt, { className: "w-4 h-4" }) : e.jsx(ie, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "text-sm font-bold tracking-tight truncate", children: D.name }), e.jsx(U, { variant: "outline", className: T("text-[8px] px-1 h-3.5", D.isHumanControlled ? "bg-blue-500/10 text-blue-600 border-blue-500/20" : "bg-muted/50 text-muted-foreground border-muted/30"), children: D.isHumanControlled ? "\u73A9\u5BB6" : "AI" }), ee && e.jsx(U, { variant: "outline", className: "text-[8px] px-1 h-3.5 bg-amber-500/10 text-amber-600 border-amber-500/20", children: "\u884C\u52A8\u4E2D" })] }), e.jsxs("div", { className: "text-[10px] text-muted-foreground/60 font-medium", children: [D.race, " \xB7 ", D.class, " \xB7 \u884C\u52A8 \xD7", ce] })] })] }), e.jsxs("div", { className: "mt-3 flex items-center justify-between px-1", children: [e.jsxs("div", { className: "flex items-center gap-1.5", children: [e.jsx(ie, { className: T("w-3 h-3 transition-colors", D.isHumanControlled ? "text-muted-foreground/30" : "text-foreground/70") }), e.jsx("span", { className: T("text-[9px] font-bold uppercase tracking-wider transition-colors", D.isHumanControlled ? "text-muted-foreground/20" : "text-foreground/50"), children: "AI" })] }), e.jsx(xt, { checked: D.isHumanControlled, onCheckedChange: () => oe(D.id), className: "data-[state=checked]:bg-blue-500 h-4 w-7 [&>span]:h-3 [&>span]:w-3" }), e.jsxs("div", { className: "flex items-center gap-1.5", children: [e.jsx("span", { className: T("text-[9px] font-bold uppercase tracking-wider transition-colors", D.isHumanControlled ? "text-foreground/50" : "text-muted-foreground/20"), children: "\u73A9\u5BB6" }), e.jsx(gt, { className: T("w-3 h-3 transition-colors", D.isHumanControlled ? "text-blue-500" : "text-muted-foreground/30") })] })] }), e.jsxs("div", { className: "mt-3 space-y-1", children: [e.jsxs("div", { className: "flex justify-between text-[9px] font-bold text-muted-foreground/60", children: [e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(ur, { className: "w-2.5 h-2.5 text-red-400" }), "HP"] }), e.jsxs("span", { children: [D.currentHP, "/", D.maxHP] })] }), e.jsx("div", { className: "h-1.5 bg-muted/50 rounded-full overflow-hidden", children: e.jsx("div", { className: T("h-full rounded-full transition-all duration-500", D.currentHP / D.maxHP > 0.5 ? "bg-green-500" : D.currentHP / D.maxHP > 0.25 ? "bg-amber-500" : "bg-red-500"), style: { width: `${Math.max(0, D.currentHP / D.maxHP * 100)}%` } }) })] }), e.jsx("div", { className: "mt-3 grid grid-cols-3 gap-1.5", children: Object.entries(D.attributes || {}).map(([te, Ge]) => e.jsxs("div", { className: "text-center py-1 px-1 rounded bg-muted/30 border border-muted/20", children: [e.jsx("div", { className: "text-[8px] font-bold uppercase text-muted-foreground/50", children: te.slice(0, 3) }), e.jsx("div", { className: "text-xs font-mono font-bold", children: Ge })] }, te)) })] }, D.id);
  }) })] }), e.jsx("div", { className: "space-y-3", children: e.jsxs(N, { type: "button", variant: "outline", className: "w-full h-10 rounded-xl border-dashed border-2 hover:border-amber-500/50 hover:bg-amber-500/5 gap-2", onClick: Z, children: [e.jsx(Yt, { className: "w-4 h-4" }), e.jsx("span", { className: "font-bold tracking-wider text-sm", children: "\u9000\u51FA\u5192\u9669" })] }) }), e.jsxs("div", { className: "pt-6 opacity-30", children: [e.jsx("div", { className: "h-px bg-linear-to-r from-transparent via-muted-foreground/50 to-transparent" }), e.jsx("p", { className: "text-[9px] text-center mt-4 font-bold tracking-[0.3em] uppercase", children: "DnD Engine v1.0.0" })] })] })] });
}, Ni = ({ item: s }) => {
  var _a, _b;
  switch (s.type) {
    case "dnd_dm_intro":
      return e.jsx(pt, { content: s.data.content, title: "\u5F00\u573A\u53D9\u4E8B" });
    case "dnd_dm_narrate":
      return e.jsx(pt, { content: s.data.content });
    case "dnd_player_action":
      return e.jsx(js, { item: s });
    case "dnd_roll_result":
      return e.jsx(Si, { item: s });
    case "dnd_system_notice":
      return e.jsx(vs, { item: s });
    case "dnd_assign_player":
      return null;
    case "dnd_check_decision":
      return null;
    case "participant_message":
      return ((_a = s.data) == null ? void 0 : _a.isDM) ? e.jsx(pt, { content: s.data.content }) : e.jsx(js, { item: s });
    case "system_notification":
      return e.jsx(vs, { item: s });
    default:
      return ((_b = s.data) == null ? void 0 : _b.content) ? e.jsx(pt, { content: s.data.content, title: "\u6D88\u606F" }) : null;
  }
}, pt = ({ content: s, title: t = "Dungeon Master" }) => {
  const a = ba(s);
  return e.jsxs("div", { className: "flex gap-5 group animate-in fade-in slide-in-from-left-2 duration-500", children: [e.jsxs("div", { className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden", children: [e.jsx("div", { className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" }), e.jsx(ie, { className: "w-5 h-5 text-amber-600 relative z-10" })] }), e.jsxs("div", { className: "space-y-2 grow pt-1 min-w-0", children: [e.jsxs("div", { className: "text-[10px] font-black tracking-[0.2em] text-amber-600/60 flex items-center gap-2 uppercase", children: [e.jsx(De, { className: "w-3 h-3" }), t] }), e.jsxs("div", { className: "text-[15px] leading-relaxed text-foreground/80 whitespace-pre-wrap font-serif", children: [a.think && e.jsxs("div", { className: "text-xs italic text-muted-foreground/50 mb-3 pl-3 border-l-2 border-muted/30", children: [e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1", children: "DM \u601D\u8003" }), a.think] }), a.speak && e.jsxs("div", { className: "mb-2", children: [e.jsx("span", { className: "text-amber-600/80 font-bold", children: "\u201C" }), e.jsx("span", { className: "italic", children: a.speak }), e.jsx("span", { className: "text-amber-600/80 font-bold", children: "\u201D" })] }), a.action && e.jsx("div", { className: "text-foreground/70", children: a.action }), !a.think && !a.speak && !a.action && a.rawText] })] })] });
}, js = ({ item: s }) => {
  const t = s.data, a = ba(t.content || ""), r = t.characterName || t.name || "\u5192\u9669\u8005", n = t.isHumanControlled || t.isUser;
  return e.jsxs("div", { className: "flex gap-5 group animate-in fade-in slide-in-from-right-2 duration-500", children: [e.jsx("div", { className: T("w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border shadow-sm", n ? "bg-blue-500/5 border-blue-500/10" : "bg-violet-500/5 border-violet-500/10"), children: n ? e.jsx(gt, { className: "w-5 h-5 text-blue-500" }) : e.jsx(Ie, { className: "w-5 h-5 text-violet-500" }) }), e.jsxs("div", { className: "space-y-2 grow pt-1 min-w-0", children: [e.jsxs("div", { className: T("text-[10px] font-black tracking-[0.2em] flex items-center gap-2 uppercase", n ? "text-blue-500/60" : "text-violet-500/60"), children: [e.jsx(Ze, { className: "w-3 h-3" }), r, n && e.jsx(U, { variant: "outline", className: "text-[8px] px-1 h-3 bg-blue-500/5 text-blue-500 border-blue-500/10", children: "\u73A9\u5BB6" })] }), e.jsxs("div", { className: "text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap", children: [a.think && e.jsxs("div", { className: "text-xs italic text-muted-foreground/50 mb-3 pl-3 border-l-2 border-muted/30", children: [e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1", children: "\u5185\u5FC3\u60F3\u6CD5" }), a.think] }), a.speak && e.jsxs("div", { className: "mb-2 font-medium", children: ["\u201C", a.speak, "\u201D"] }), a.action && e.jsx("div", { className: "text-foreground/70", children: a.action }), !a.think && !a.speak && !a.action && a.rawText] })] })] });
}, Si = ({ item: s }) => {
  var _a;
  const t = s.data, a = t.checkResult, r = t.characterName || "\u89D2\u8272", n = t.attributeName || "\u5C5E\u6027";
  if (!a) return null;
  const i = a.isSuccess, o = a.naturalRoll === 20, u = a.naturalRoll === 1;
  return e.jsx("div", { className: "flex justify-center my-6 animate-in fade-in zoom-in duration-500", children: e.jsxs("div", { className: T("inline-flex items-center gap-4 px-6 py-4 rounded-2xl border-2 shadow-lg", i ? "bg-green-500/5 border-green-500/30 shadow-green-500/10" : "bg-red-500/5 border-red-500/30 shadow-red-500/10"), children: [e.jsxs("div", { className: T("w-14 h-14 rounded-xl flex items-center justify-center font-mono font-black text-2xl relative", o ? "bg-amber-500/20 text-amber-500 ring-2 ring-amber-500/30" : u ? "bg-red-500/20 text-red-500 ring-2 ring-red-500/30" : i ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"), children: [a.naturalRoll, o && e.jsx(De, { className: "w-3 h-3 text-amber-500 absolute -top-1 -right-1 animate-pulse" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "text-[10px] font-black uppercase tracking-widest text-muted-foreground/60", children: [r, " \xB7 ", n, " \u68C0\u5B9A"] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs("span", { className: "text-lg font-mono font-bold", children: [a.naturalRoll, a.modifier >= 0 ? "+" : "", a.modifier, " = ", a.total] }), e.jsxs("span", { className: "text-xs text-muted-foreground", children: ["vs DC ", ((_a = t.checkSpec) == null ? void 0 : _a.dc) || "?"] })] }), e.jsx("div", { className: T("text-xs font-black uppercase tracking-wider", o ? "text-amber-500" : u ? "text-red-500" : i ? "text-green-600" : "text-red-600"), children: o ? "\u5927\u6210\u529F\uFF01" : u ? "\u5927\u5931\u8D25\uFF01" : i ? "\u68C0\u5B9A\u6210\u529F" : "\u68C0\u5B9A\u5931\u8D25" })] })] }) });
}, vs = ({ item: s }) => {
  const t = s.data, a = t.noticeType;
  return e.jsx("div", { className: "flex justify-center my-4", children: e.jsxs("div", { className: "flex items-center gap-3 px-4 py-1.5 rounded-full bg-muted/30 border border-muted/50 text-muted-foreground shadow-sm", children: [e.jsx("span", { className: "w-1 h-1 rounded-full bg-amber-500/40" }), e.jsx("span", { className: "text-[10px] font-bold tracking-widest uppercase", children: a === "turn_start" && t.characterName ? `\u2694 ${t.characterName} \u7684\u56DE\u5408` : t.content || "\u7CFB\u7EDF\u901A\u77E5" }), e.jsx("span", { className: "w-1 h-1 rounded-full bg-amber-500/40" })] }) });
}, vo = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForDnd: _i }, Symbol.toStringTag, { value: "Module" }));
class wi extends rs {
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
    var _a;
    return ((_a = this.session.modeConfig.participantSnapshots.find((a) => a.id === t)) == null ? void 0 : _a.name) || "\u89D2\u8272";
  }
}
const xe = fe({ currentSession: null, contextManager: null, sessionManager: null, loadSession(s, t) {
  this.currentSession = s;
  const a = this.currentSession;
  a.modeState.currentUIState = "idle", a.modeState.aiAutoSpeakCounter === void 0 && (a.modeState.aiAutoSpeakCounter = 0), this.sessionManager = ws(new wi(a));
  const r = fe(t || { historyItems: [], processingItem: void 0 });
  this.contextManager = new je(r);
}, async saveNewContextItemsToDB(s, t) {
  const { SessionDB: a } = await Ne(async () => {
    const { SessionDB: i } = await Promise.resolve().then(() => $t);
    return { SessionDB: i };
  }, void 0), r = new a(s);
  let n;
  try {
    n = me(t);
  } catch {
    n = JSON.parse(JSON.stringify(t));
  }
  await r.addContextItems(n);
}, async updateSessionInDB() {
  if (!this.currentSession) return;
  const { masterDb: s } = await Ne(async () => {
    const { masterDb: r } = await Promise.resolve().then(() => ss);
    return { masterDb: r };
  }, void 0), t = me(this.currentSession.modeState), a = me(this.currentSession.modeConfig);
  await s.sessions.update(this.currentSession.id, { modeState: t, modeConfig: a, updatedAt: Date.now() });
} });
function ns(s) {
  return s.modeConfig.participantSnapshots;
}
function Ci(s, t) {
  return s.modeConfig.participantSnapshots.find((a) => a.id === t);
}
function ya(s) {
  return s.map((t) => `- ${t.name} (ID: ${t.id}): ${t.personality || t.description}`).join(`
`);
}
function ki(s) {
  if (!s) return "";
  const t = new Date(s), a = /* @__PURE__ */ new Date(), r = t.getHours().toString().padStart(2, "0"), n = t.getMinutes().toString().padStart(2, "0");
  return t.toDateString() === a.toDateString() ? `${r}:${n}` : `${t.getMonth() + 1}/${t.getDate()} ${r}:${n}`;
}
function ja(s, t, a = 30) {
  const r = ns(t), n = t.modeConfig.userName || "\u6211";
  return s.getFlatHistoryItems(a).filter((i) => !i.hidden && !i.deleted).map((i) => {
    var _a;
    const { type: o, data: u } = i, d = ki(i.timestamp), l = d ? `[${d}] ` : "";
    if (o === "gc_user_message") return `${l}[${u.userName || n}]: ${u.content}`;
    if (o === "gc_character_message") {
      const m = u.characterName || ((_a = r.find((c) => c.id === u.characterId)) == null ? void 0 : _a.name) || "\u89D2\u8272";
      return `${l}[${m}]: ${u.content}`;
    }
    return null;
  }).filter(Boolean).join(`
`);
}
function Ii(s, t) {
  const a = ns(s), r = s.modeState.speakCounts, n = s.modeConfig.topic, i = s.modeConfig.userName || "\u6211", u = `${s.modeConfig.dmSystemPrompt || "\u4F60\u662F\u4E00\u4E2A\u9690\u5F62\u7684\u7FA4\u804A\u8C03\u5EA6\u5458\u3002"}
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
`)}`, d = ja(t, s, 20), l = [n ? `\u3010\u7FA4\u804A\u8BDD\u9898\u3011
${n}` : "", `\u3010\u7FA4\u804A\u6210\u5458\u3011
- ${i} (\u73A9\u5BB6)
${ya(a)}`, d ? `\u3010\u6700\u8FD1\u5BF9\u8BDD\u3011
${d}` : "\u3010\u5BF9\u8BDD\u521A\u5F00\u59CB\uFF0C\u8BF7\u9009\u4E00\u4E2A\u9002\u5408\u6253\u5F00\u8BDD\u9898\u7684\u89D2\u8272\u3011", `\u3010\u6240\u6709\u89D2\u8272\u53D1\u8A00\u7EDF\u8BA1\u3011
${a.map((m) => `${m.name}: ${r[m.id] || 0} \u6B21`).join(`
`)}`].filter(Boolean).join(`

`);
  return [{ role: "system", content: u }, { role: "user", content: l }];
}
function Di(s, t) {
  const a = s.modeState.currentSpeakerId, r = Ci(s, a), n = ns(s), i = s.modeConfig.userName || "\u6211", o = s.modeConfig.topic;
  if (!r) return [];
  const u = `\u4F60\u662F ${r.name}\u3002${r.systemPrompt}
${r.personality ? `\u4F60\u7684\u6027\u683C\uFF1A${r.personality}` : ""}
\u4F60\u73B0\u5728\u6B63\u5728\u4E00\u4E2A\u7FA4\u804A\u4E2D\u548C\u5176\u4ED6\u89D2\u8272\u4EE5\u53CA\u4E00\u4E2A\u540D\u4E3A"${i}"\u7684\u73A9\u5BB6\u804A\u5929\u3002
\u8BF7\u4EE5 ${r.name} \u7684\u8EAB\u4EFD\u81EA\u7136\u53D1\u8A00\uFF0C\u4E0D\u8981\u4F7F\u7528\u4EFB\u4F55 XML \u6807\u7B7E\uFF0C\u76F4\u63A5\u8F93\u51FA\u5BF9\u8BDD\u5185\u5BB9\u5373\u53EF\u3002
\u53D1\u8A00\u8981\u7B80\u6D01\u81EA\u7136\uFF0C\u50CF\u771F\u5B9E\u7684\u7FA4\u804A\u4E00\u6837\uFF0C\u901A\u5E38 1-3 \u53E5\u8BDD\u3002
\u6CE8\u610F\u6839\u636E\u5BF9\u8BDD\u5386\u53F2\u4E2D\u7684\u65F6\u95F4\u6233\u611F\u77E5\u65F6\u95F4\u6D41\u901D\uFF0C\u505A\u51FA\u81EA\u7136\u7684\u53CD\u5E94\u3002`, d = ja(t, s, 20), l = n.filter((c) => c.id !== a), m = [o ? `\u3010\u7FA4\u804A\u8BDD\u9898\u3011
${o}` : "", l.length > 0 ? `\u3010\u5176\u4ED6\u7FA4\u804A\u6210\u5458\u3011
- ${i} (\u73A9\u5BB6)
${ya(l)}` : `\u3010\u7FA4\u804A\u6210\u5458\u3011
- ${i} (\u73A9\u5BB6)`, d ? `\u3010\u5BF9\u8BDD\u5386\u53F2\u3011
${d}` : "\u3010\u5BF9\u8BDD\u521A\u5F00\u59CB\uFF0C\u8BF7\u4E3B\u52A8\u5F00\u542F\u804A\u5929\u3011"].filter(Boolean).join(`

`);
  return [{ role: "system", content: u }, { role: "user", content: m }];
}
function Mi(s) {
  try {
    const t = s.indexOf("{"), a = s.lastIndexOf("}") + 1;
    if (t < 0 || a <= t) return null;
    const r = JSON.parse(s.slice(t, a)), n = r.nextSpeakerId || r.speakerId;
    return n ? { nextSpeakerId: n, reason: r.reason || "" } : null;
  } catch {
    return null;
  }
}
const _s = 3;
function Pi() {
  const s = Kt((d) => d.config), t = b.useRef(false), a = he(), r = b.useCallback(async (d, l, m, c = {}) => {
    const p = xe.contextManager;
    if (!p) return "";
    const x = { id: O(), type: m, orderRef: 0, timestamp: Date.now(), data: { content: "", ...c } };
    p.setProcessingItem(x);
    try {
      let f = "";
      if (await Qt(d, l.map((v) => ({ ...v, id: O() })), [], (v, j) => {
        f = j;
        const g = p.getProcessingItem();
        g && (g.data.content = j);
      }), !f.trim()) throw p.setProcessingItem(void 0), new Error("LLM \u8BF7\u6C42\u5931\u8D25\uFF1A\u672A\u6536\u5230\u6709\u6548\u54CD\u5E94\uFF08\u53EF\u80FD\u662F API \u5BC6\u94A5\u65E0\u6548\u3001\u6A21\u578B\u4E0D\u53EF\u7528\u6216\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF\uFF09");
      return p.completeProcessingItem(), f;
    } catch (f) {
      throw p.setProcessingItem(void 0), f;
    }
  }, []), n = b.useCallback(async () => {
    if (t.current) return;
    t.current = true;
    const d = { ...s };
    try {
      for (; ; ) {
        const l = xe, m = l.currentSession, c = l.sessionManager, p = l.contextManager;
        if (!m || !c || !p) break;
        if (c.isAICounterAtMax()) {
          c.setCurrentPhase("waiting_for_player"), c.setCurrentUIState("ai_loop_paused"), await l.updateSessionInDB();
          break;
        }
        c.setCurrentUIState("ai_loop_running"), c.setCurrentPhase("dm_select_speaker"), await l.updateSessionInDB();
        let x = null;
        for (let j = 0; j < _s; j++) {
          const g = Ii(m, p), _ = await r(d, g, "gc_select_speaker");
          if (x = Mi(_), x) break;
          console.warn(`[GroupChat] DM \u9009\u62E9\u89E3\u6790\u5931\u8D25 (${j + 1}/${_s})`);
        }
        if (!x) {
          V.warning("DM \u9009\u62E9\u53D1\u8A00\u8005\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), c.setCurrentUIState("ai_loop_paused"), await l.updateSessionInDB();
          break;
        }
        const f = c.findParticipantName(x.nextSpeakerId);
        p.addHistoryItem({ id: O(), type: "gc_select_speaker", idx: 0, orderRef: 0, timestamp: Date.now(), data: { nextSpeakerId: x.nextSpeakerId, nextSpeakerName: f, reason: x.reason }, hidden: true }), c.setCurrentSpeaker(x.nextSpeakerId), c.setCurrentPhase("character_speak"), await l.updateSessionInDB();
        const v = Di(m, p);
        await r(d, v, "gc_character_message", { characterId: x.nextSpeakerId, characterName: f }), c.incrementAfterAISpeaks(x.nextSpeakerId), await l.saveNewContextItemsToDB(m.id, p.getHistoryItems()), await l.updateSessionInDB(), await new Promise((j) => setTimeout(j, 50));
      }
    } catch (l) {
      console.error("[GroupChat] AI \u5FAA\u73AF\u9519\u8BEF:", l);
      const m = xe.sessionManager;
      m && m.setCurrentUIState("ai_loop_paused");
      try {
        await xe.updateSessionInDB();
      } catch {
      }
      V.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", { duration: 1 / 0, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => a({ to: "/config/llm" }) } });
    } finally {
      t.current = false;
    }
  }, [s, r, a]), i = b.useCallback(async (d) => {
    const l = xe, { currentSession: m, contextManager: c, sessionManager: p } = l;
    !m || !c || !p || (c.addHistoryItem({ id: O(), type: "gc_user_message", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: d, userName: m.modeConfig.userName || "\u6211" } }), p.resetCounterAfterPlayerSpeaks(), await l.saveNewContextItemsToDB(m.id, c.getHistoryItems()), await l.updateSessionInDB(), t.current || n());
  }, [n]), o = b.useCallback(async () => {
    const d = xe, { sessionManager: l } = d;
    l && (l.resetAIAutoSpeakCounter(), await d.updateSessionInDB(), t.current || n());
  }, [n]), u = b.useCallback(async () => {
    const d = xe, { sessionManager: l } = d;
    l && (l.setCurrentPhase("dm_select_speaker"), l.setCurrentUIState("ai_loop_running"), l.resetAIAutoSpeakCounter(), await d.updateSessionInDB(), await new Promise((m) => setTimeout(m, 50)), n());
  }, [n]);
  return { sendPlayerMessage: i, continueAILoop: o, startChat: u, isRunningRef: t };
}
const Ai = H(["dm_select_speaker", "character_speak", "waiting_for_player"]), Ti = H(["idle", "ai_loop_running", "ai_loop_paused"]), Ns = { idle: { label: "\u7A7A\u95F2", placeholder: "\u70B9\u51FB\u5F00\u59CB\u7FA4\u804A...", inputEnabled: false }, ai_loop_running: { label: "AI \u5BF9\u8BDD\u4E2D", placeholder: "\u968F\u65F6\u53D1\u9001\u6D88\u606F...", inputEnabled: true }, ai_loop_paused: { label: "\u7B49\u5F85\u4F60\u7684\u6D88\u606F", placeholder: "\u53D1\u9001\u6D88\u606F\uFF0C\u6216\u70B9\u51FB \u23E9 \u8BA9 AI \u7EE7\u7EED...", inputEnabled: true } }, $i = M({ id: h().describe("\u89D2\u8272 ID"), name: h().describe("\u89D2\u8272\u540D\u79F0"), description: h().describe("\u89D2\u8272\u63CF\u8FF0"), avatar: h().optional().describe("\u89D2\u8272\u5934\u50CF"), systemPrompt: h().describe("\u89D2\u8272\u626E\u6F14\u6307\u5F15"), personality: h().optional().describe("\u89D2\u8272\u6027\u683C\u6982\u8FF0"), firstMessage: h().optional().describe("\u5F00\u573A\u95EE\u5019\u8BED") }), Ei = M({ topic: h().optional().describe("\u7FA4\u804A\u8BDD\u9898/\u573A\u666F"), participantSnapshots: q($i).describe("\u53C2\u4E0E\u7684 AI \u89D2\u8272\u5FEB\u7167\u5217\u8868"), userName: h().optional().describe("\u73A9\u5BB6\u663E\u793A\u540D\u79F0"), dmSystemPrompt: h().optional().describe("DM \u8C03\u5EA6\u63D0\u793A\u8BCD"), maxAIAutoSpeakCount: C().optional().default(5).describe("AI \u81EA\u4E3B\u53D1\u8A00\u6700\u5927\u6570\u91CF\uFF0C\u8FBE\u5230\u540E\u6682\u505C\u7B49\u5F85\u73A9\u5BB6") }), Li = M({ currentPhase: Ai.describe("AI \u5FAA\u73AF\u5F53\u524D\u9636\u6BB5"), currentUIState: Ti.describe("\u5F53\u524D UI \u72B6\u6001"), currentSpeakerId: h().describe("\u5F53\u524D\u53D1\u8A00\u8005 ID"), messageCount: C().describe("\u603B\u6D88\u606F\u6570"), speakCounts: ae(h(), C()).describe("\u6BCF\u4E2A\u89D2\u8272\u7684\u53D1\u8A00\u6B21\u6570"), aiAutoSpeakCounter: C().default(0).describe("AI \u81EA\u4E3B\u53D1\u8A00\u8BA1\u6570\u5668\uFF0C\u73A9\u5BB6\u53D1\u8A00\u65F6\u91CD\u7F6E") });
At.extend({ mode: F("group-chat").describe("\u6A21\u5F0F"), modeConfig: Ei.describe("\u7FA4\u804A\u6A21\u5F0F\u914D\u7F6E"), modeState: Li.describe("\u7FA4\u804A\u6A21\u5F0F\u72B6\u6001") });
function va(s) {
  if (!s) return "";
  const t = new Date(s), a = /* @__PURE__ */ new Date(), r = t.getHours().toString().padStart(2, "0"), n = t.getMinutes().toString().padStart(2, "0");
  return t.toDateString() === a.toDateString() ? `${r}:${n}` : `${t.getMonth() + 1}/${t.getDate()} ${r}:${n}`;
}
const Ri = (s) => {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o2, _p, _q, _r2, _s2, _t2, _u;
  const t = he(), [a, r] = b.useState(""), n = b.useRef(null), [i, o] = b.useState(false), u = at(xe), { data: d = [] } = ke((I) => I.from({ s: Ae })), l = d.find((I) => I.id === s.sessionId);
  b.useEffect(() => {
    var _a2;
    let I = false;
    if (!l) return;
    if (((_a2 = xe.currentSession) == null ? void 0 : _a2.id) === l.id && xe.contextManager) {
      o(true);
      return;
    }
    return (async () => {
      try {
        const w = await Et.createSessionDB(l.id).getContextItems();
        if (I) return;
        xe.loadSession(l, { historyItems: w, processingItem: void 0 }), o(true);
      } catch (W) {
        console.error("[GroupChat] Load session error", W);
      }
    })(), () => {
      I = true;
    };
  }, [l == null ? void 0 : l.id, l]);
  const { sendPlayerMessage: m, continueAILoop: c, startChat: p, isRunningRef: x } = Pi();
  if (b.useEffect(() => {
    n.current && (n.current.scrollTop = n.current.scrollHeight);
  }), !l || !i) return e.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4", children: [e.jsx("div", { className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center", children: e.jsx(ge, { className: "w-6 h-6 opacity-20" }) }), e.jsx("p", { className: "text-xs font-medium tracking-widest uppercase opacity-50", children: "\u52A0\u8F7D\u7FA4\u804A..." })] });
  const f = ((_b = (_a = u.currentSession) == null ? void 0 : _a.modeState) == null ? void 0 : _b.currentUIState) || "idle", v = Ns[f] || Ns.idle, j = (_e2 = (_d = (_c = u.currentSession) == null ? void 0 : _c.modeConfig) == null ? void 0 : _d.participantSnapshots) == null ? void 0 : _e2.find((I) => {
    var _a2, _b2;
    return I.id === ((_b2 = (_a2 = u.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b2.currentSpeakerId);
  }), g = async () => {
    if (!a.trim()) return;
    const I = a;
    r(""), await m(I);
  }, _ = async () => {
    x.current || await p();
  }, S = async () => {
    x.current || await c();
  }, y = () => t({ to: "/plaza" }), P = (_g = (_f = u.contextManager) == null ? void 0 : _f.state.processingItem) == null ? void 0 : _g.id;
  return e.jsxs("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: [e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shadow-sm", children: e.jsx(Qe, { className: "w-5 h-5 text-violet-600" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm tracking-tight", children: ((_i2 = (_h = u.currentSession) == null ? void 0 : _h.modeConfig) == null ? void 0 : _i2.topic) || "\u7FA4\u804A" }), e.jsxs(U, { variant: "outline", className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-violet-500/5 text-violet-600 border-violet-500/10", children: [((_l = (_k = (_j = u.currentSession) == null ? void 0 : _j.modeConfig) == null ? void 0 : _k.participantSnapshots) == null ? void 0 : _l.length) || 0, " \u4EBA"] })] }), e.jsx("span", { className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide", children: j && f === "ai_loop_running" ? `${j.name} \u6B63\u5728\u8F93\u5165...` : v.label })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [f !== "idle" && e.jsxs("span", { className: "text-[9px] text-muted-foreground/50 font-mono", children: ["AI ", ((_n2 = (_m = u.currentSession) == null ? void 0 : _m.modeState) == null ? void 0 : _n2.aiAutoSpeakCounter) || 0, "/", ((_p = (_o2 = u.currentSession) == null ? void 0 : _o2.modeConfig) == null ? void 0 : _p.maxAIAutoSpeakCount) ?? 5] }), e.jsxs(U, { variant: "secondary", className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50", children: [e.jsx("span", { className: T("w-1.5 h-1.5 rounded-full", f === "ai_loop_running" ? "bg-violet-500 animate-pulse" : f === "ai_loop_paused" ? "bg-amber-500" : "bg-muted-foreground/30") }), "\u7FA4\u804A"] })] })] }), e.jsx("div", { className: "flex grow overflow-y-auto", ref: n, children: e.jsx("div", { className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-6", children: (() => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2;
    const I = (((_a2 = u.contextManager) == null ? void 0 : _a2.state.historyItems) || []).filter((w) => !w.hidden), K = (_b2 = u.contextManager) == null ? void 0 : _b2.state.processingItem;
    if (f === "idle") {
      const w = I.length === 0 ? "\u5F00\u59CB\u7FA4\u804A" : "\u7EE7\u7EED\u7FA4\u804A";
      return e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500", children: [e.jsx("div", { className: "w-24 h-24 rounded-4xl bg-violet-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-violet-500/10 ring-8 ring-violet-500/5", children: e.jsx(Qe, { className: "w-10 h-10 text-violet-500 drop-shadow-sm" }) }), e.jsx("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center", children: ((_d2 = (_c2 = u.currentSession) == null ? void 0 : _c2.modeConfig) == null ? void 0 : _d2.topic) || "\u7FA4\u804A" }), e.jsxs("p", { className: "text-muted-foreground/80 font-medium tracking-wider mb-6 max-w-md text-center leading-relaxed text-sm", children: ["\u4E0E ", (_g2 = (_f2 = (_e3 = u.currentSession) == null ? void 0 : _e3.modeConfig) == null ? void 0 : _f2.participantSnapshots) == null ? void 0 : _g2.map((A) => A.name).join("\u3001"), " \u4E00\u8D77\u804A\u5929"] }), e.jsxs(N, { type: "button", size: "lg", className: "h-14 px-10 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-violet-500/25 shadow-violet-500/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90", onClick: _, disabled: x.current, children: [e.jsx(De, { className: "w-5 h-5 mr-3" }), w] })] });
    }
    const W = [...I];
    return K && !K.hidden && !I.some((w) => w.id === K.id) && W.push(K), W.map((w, A) => {
      var _a3, _b3, _c3, _d3;
      return e.jsx(Fi, { item: w, participants: ((_b3 = (_a3 = u.currentSession) == null ? void 0 : _a3.modeConfig) == null ? void 0 : _b3.participantSnapshots) || [], userName: ((_d3 = (_c3 = u.currentSession) == null ? void 0 : _c3.modeConfig) == null ? void 0 : _d3.userName) || "\u6211", isStreaming: w.id === P }, `[${A}]${w.id}`);
    });
  })() }) }), f !== "idle" && e.jsxs("div", { className: "p-4 md:p-6 shrink-0 bg-background", children: [e.jsxs("div", { className: "max-w-3xl mx-auto relative group", children: [e.jsx(X, { value: a, onChange: (I) => r(I.target.value), placeholder: v.placeholder, className: "min-h-20 max-h-40 pr-28 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-violet-500/20 focus-visible:bg-background transition-all", onKeyDown: (I) => {
    I.key === "Enter" && !I.shiftKey && (I.preventDefault(), g());
  } }), e.jsxs("div", { className: "absolute right-3 bottom-3 flex gap-2", children: [e.jsx(N, { type: "button", size: "icon", variant: "ghost", className: T("h-10 w-10 rounded-xl text-muted-foreground hover:text-violet-600", f === "ai_loop_paused" && "text-amber-500 animate-pulse"), disabled: x.current, onClick: S, title: "\u8BA9 AI \u7EE7\u7EED\u5BF9\u8BDD\uFF08\u91CD\u7F6E\u8BA1\u6570\u5668\uFF09", children: e.jsx(hr, { className: "w-4 h-4" }) }), e.jsx(N, { type: "button", size: "icon", className: "h-10 w-10 rounded-xl shadow-lg hover:shadow-violet-500/20 transition-all", disabled: !a.trim(), onClick: g, children: e.jsx(Pt, { className: "w-4 h-4" }) })] })] }), e.jsxs("div", { className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40", children: [e.jsx("div", { className: "text-[9px] font-bold tracking-widest uppercase", children: "GROUP CHAT" }), e.jsx("div", { className: "text-[9px] font-medium", children: "Shift + Enter \u6362\u884C \xB7 \u23E9 \u8BA9 AI \u7EE7\u7EED" })] })] })] }), e.jsxs("div", { className: "w-70 h-full overflow-y-auto bg-muted/10 border-l p-6 space-y-6 shrink-0 hidden lg:block scrollbar-none", children: [e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(Ie, { className: "w-3.5 h-3.5 text-violet-500" }), "\u7FA4\u804A\u6210\u5458"] }), e.jsx("div", { className: "p-3 rounded-xl border bg-background/40 border-muted/30", children: e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600", children: e.jsx(Ie, { className: "w-4 h-4" }) }), e.jsx("div", { className: "grow min-w-0", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-sm font-bold truncate", children: ((_r2 = (_q = u.currentSession) == null ? void 0 : _q.modeConfig) == null ? void 0 : _r2.userName) || "\u6211" }), e.jsx(U, { variant: "outline", className: "text-[8px] px-1 h-3.5 bg-blue-500/10 text-blue-600 border-blue-500/20", children: "\u73A9\u5BB6" })] }) })] }) }), e.jsx("div", { className: "space-y-2", children: (_u = (_t2 = (_s2 = u.currentSession) == null ? void 0 : _s2.modeConfig) == null ? void 0 : _t2.participantSnapshots) == null ? void 0 : _u.map((I) => {
    var _a2, _b2, _c2, _d2, _e3;
    const K = I.id === ((_b2 = (_a2 = u.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b2.currentSpeakerId) && f === "ai_loop_running", W = ((_e3 = (_d2 = (_c2 = u.currentSession) == null ? void 0 : _c2.modeState) == null ? void 0 : _d2.speakCounts) == null ? void 0 : _e3[I.id]) || 0;
    return e.jsx("div", { className: T("p-3 rounded-xl border transition-all duration-300", K ? "bg-violet-500/5 border-violet-500/30 shadow-sm shadow-violet-500/10" : "bg-background/40 border-muted/30"), children: e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: T("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", K ? "bg-violet-500/20 text-violet-600" : "bg-muted text-muted-foreground"), children: e.jsx(ie, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [e.jsx("span", { className: "text-sm font-bold truncate", children: I.name }), K && e.jsx(U, { variant: "outline", className: "text-[8px] px-1 h-3.5 bg-violet-500/10 text-violet-600 border-violet-500/20", children: "\u53D1\u8A00\u4E2D" })] }), e.jsxs("div", { className: "text-[10px] text-muted-foreground/60 font-medium", children: ["\u53D1\u8A00 \xD7", W] })] })] }) }, I.id);
  }) })] }), e.jsx("div", { className: "space-y-3 pt-4", children: e.jsxs(N, { type: "button", variant: "outline", className: "w-full h-10 rounded-xl border-dashed border-2 hover:border-violet-500/50 hover:bg-violet-500/5 gap-2", onClick: y, children: [e.jsx(Yt, { className: "w-4 h-4" }), e.jsx("span", { className: "font-bold tracking-wider text-sm", children: "\u9000\u51FA\u7FA4\u804A" })] }) })] })] });
}, Fi = ({ item: s, participants: t, userName: a, isStreaming: r }) => {
  var _a;
  switch (s.type) {
    case "gc_character_message":
      return e.jsx(Ss, { item: s, participants: t, isStreaming: r });
    case "gc_user_message":
      return e.jsx(Ui, { item: s, userName: a });
    case "gc_select_speaker":
      return null;
    default:
      return ((_a = s.data) == null ? void 0 : _a.content) ? e.jsx(Ss, { item: s, participants: t, isStreaming: r }) : null;
  }
}, Ss = ({ item: s, participants: t, isStreaming: a }) => {
  var _a;
  const r = s.data, n = r.characterName || ((_a = t.find((o) => o.id === r.characterId)) == null ? void 0 : _a.name) || "\u89D2\u8272", i = a ? "..." : va(s.timestamp);
  return e.jsxs("div", { className: "flex gap-4 group animate-in fade-in slide-in-from-left-2 duration-300", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-violet-500/5 flex items-center justify-center shrink-0 border border-violet-500/10", children: e.jsx(ie, { className: "w-4.5 h-4.5 text-violet-600" }) }), e.jsxs("div", { className: "space-y-1 grow pt-0.5 min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-[10px] font-black tracking-[0.15em] text-violet-600/60 uppercase", children: n }), e.jsx("span", { className: "text-[9px] text-muted-foreground/40 font-medium tabular-nums", children: i })] }), e.jsx("div", { className: "text-[15px] leading-relaxed text-foreground/85 whitespace-pre-wrap", children: r.content || "" })] })] });
}, Ui = ({ item: s, userName: t }) => {
  const a = s.data, r = va(s.timestamp);
  return e.jsxs("div", { className: "flex gap-4 group animate-in fade-in slide-in-from-right-2 duration-300", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-blue-500/5 flex items-center justify-center shrink-0 border border-blue-500/10", children: e.jsx(Ie, { className: "w-4.5 h-4.5 text-blue-600" }) }), e.jsxs("div", { className: "space-y-1 grow pt-0.5 min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-[10px] font-black tracking-[0.15em] text-blue-600/60 uppercase", children: a.userName || t }), e.jsx("span", { className: "text-[9px] text-muted-foreground/40 font-medium tabular-nums", children: r })] }), e.jsx("div", { className: "text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap", children: a.content || "" })] })] });
}, _o = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForGroupChat: Ri }, Symbol.toStringTag, { value: "Module" }));
export {
  Pe as C,
  mo as D,
  no as E,
  lo as G,
  ro as I,
  eo as S,
  Ae as a,
  to as b,
  so as c,
  io as d,
  Xe as e,
  oo as f,
  co as g,
  uo as h,
  ho as i,
  go as j,
  xo as k,
  po as l,
  Q as m,
  Zi as n,
  ao as o,
  fo as p,
  bo as q,
  yo as r,
  jo as s,
  vo as t,
  _o as u
};
