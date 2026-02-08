import { j as e, r as D, D as X, F as _, E as M, t as q } from "./react-BQpw03Eg.js";
import { f as U } from "./@tanstack-B4B5CfFY.js";
import { B as g } from "./button-B9brLUSp.js";
import { I as u } from "./input-C44X3vA9.js";
import { T as b } from "./textarea-D6rL78Aw.js";
import { C as G, d as z, a as W, b as Y, c as Z, e as J } from "./card-ClPZDGV4.js";
import { L as h } from "./label-DMtPOVS-.js";
import { T as Q, a as ee, b as y, c as C } from "./tabs-CfJoSLaG.js";
import { S as w, a as T, b as S, c as F, d as f } from "./select-VEltzsBv.js";
import { B as se } from "./badge-DvaSwOwN.js";
import { P as O, d as P, V as ae, q as te, E as $, W as le, Y as ie, I as re, Z as A, _ as ne, $ as ce, a0 as oe, m as de, a1 as me, a2 as he, T as xe, X as ue, a3 as pe } from "./icons-BC63ChG4.js";
import { n as K } from "./id-OxPLOBIU.js";
import { S as je } from "./switch-BPeiHTCh.js";
import { m as ge } from "./db-master-l33tB5ke.js";
import "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-B3Kybfa7.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./zod-fbN9ubnj.js";
const ve = ["isTrue", "isFalse", "eq", "neq", "gt", "gte", "lt", "lte", "includes", "has"], B = ["and", "or"], R = (i) => {
  const { condition: r, variables: n, onChange: o, level: l = 0 } = i, d = r[0], p = Object.keys(n), v = (s) => {
    B.includes(s) ? o([s, [r]]) : ["isTrue", "isFalse"].includes(s) ? o([s, p[0] || ""]) : o([s, p[0] || "", ""]);
  };
  if (B.includes(d)) {
    const s = r[1];
    return e.jsxs("div", { className: `p-4 border rounded-lg space-y-4 bg-muted/5 ${l > 0 ? "ml-6" : ""}`, children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(se, { variant: "outline", className: "bg-primary/5", children: "\u590D\u5408\u903B\u8F91" }), e.jsxs(w, { value: d, onValueChange: (c) => v(c), children: [e.jsx(T, { className: "h-8 w-24", children: e.jsx(S, {}) }), e.jsxs(F, { children: [e.jsx(f, { value: "and", children: "\u5E76\u4E14 (AND)" }), e.jsx(f, { value: "or", children: "\u6216\u8005 (OR)" })] })] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(g, { variant: "outline", size: "sm", className: "h-7 text-[10px]", onClick: () => o([...s[0]]), type: "button", children: "\u8F6C\u4E3A\u5355\u4E00\u6761\u4EF6" }), e.jsxs(g, { variant: "outline", size: "sm", className: "h-7 text-[10px]", onClick: () => o([d, [...s, ["isTrue", p[0] || ""]]]), type: "button", children: [e.jsx(O, { className: "w-3 h-3 mr-1" }), " \u6DFB\u52A0\u5B50\u6761\u4EF6"] })] })] }), e.jsx("div", { className: "space-y-3", children: s.map((c, m) => e.jsxs("div", { className: "relative group", children: [e.jsx(R, { condition: c, variables: n, level: l + 1, onChange: (N) => {
      const I = [...s];
      I[m] = N, o([d, I]);
    } }), e.jsx(g, { variant: "ghost", size: "icon", className: "absolute -right-2 top-0 h-6 w-6 text-destructive opacity-0 group-hover:opacity-100", onClick: () => {
      const N = s.filter((I, H) => H !== m);
      N.length === 0 ? v("isTrue") : o([d, N]);
    }, type: "button", children: e.jsx(P, { className: "w-3 h-3" }) })] }, m)) })] });
  }
  const t = r[1], a = r[2];
  return e.jsxs("div", { className: `flex flex-wrap items-center gap-2 p-2 border rounded-md bg-background ${l > 0 ? "ml-6" : ""}`, children: [e.jsxs(w, { value: t, onValueChange: (s) => {
    const c = [...r];
    c[1] = s, o(c);
  }, children: [e.jsx(T, { className: "h-8 w-40 overflow-hidden", children: e.jsx(S, { placeholder: "\u9009\u62E9\u53D8\u91CF" }) }), e.jsx(F, { children: p.map((s) => e.jsx(f, { value: s, children: s }, s)) })] }), e.jsxs(w, { value: d, onValueChange: (s) => v(s), children: [e.jsx(T, { className: "h-8 w-28", children: e.jsx(S, {}) }), e.jsx(F, { children: ve.map((s) => e.jsx(f, { value: s, children: s }, s)) })] }), !["isTrue", "isFalse"].includes(d) && e.jsx(u, { value: String(a ?? ""), onChange: (s) => {
    const c = [...r];
    let m = s.target.value;
    m === "true" ? m = true : m === "false" ? m = false : !isNaN(Number(m)) && m.trim() !== "" && (m = Number(m)), c[2] = m, o(c);
  }, placeholder: "\u76EE\u6807\u503C", className: "h-8 w-32 text-xs" }), e.jsx("div", { className: "ml-auto flex gap-1", children: e.jsx(g, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: () => v("and"), type: "button", children: e.jsx(ae, { className: "w-4 h-4" }) }) })] });
}, L = (i) => {
  const { variables: r, title: n = "\u4EFB\u52A1\u76EE\u6807", description: o = "\u5B9A\u4E49\u6311\u6218\u6A21\u5F0F\u4E0B\u9700\u8981\u8FBE\u6210\u7684\u91CC\u7A0B\u7891" } = i, [l, d] = D.useState(i.value || []), p = (a) => {
    d(a), i.onChange(a);
  }, v = () => {
    const a = { key: `goal_${K(5)}`, description: "", condition: ["eq", Object.keys(r)[0] || "", ""], characterPrompt: "", userInfo: "" };
    p([...l, a]);
  }, j = (a) => {
    p(l.filter((s) => s.key !== a));
  }, t = (a, s) => {
    p(l.map((c) => c.key === a ? { ...c, ...s } : c));
  };
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h3", { className: "text-sm font-medium", children: [n, " (", l.length, ")"] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: o })] }), e.jsxs(g, { variant: "outline", size: "sm", onClick: v, type: "button", className: "h-8", children: [e.jsx(O, { className: "w-3.5 h-3.5 mr-1" }), " \u6DFB\u52A0\u9879"] })] }), e.jsx("div", { className: "space-y-3", children: l.length === 0 ? e.jsxs("div", { className: "py-8 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(te, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-xs", children: "\u6682\u65E0\u914D\u7F6E\u9879" })] }) : l.map((a) => e.jsx(G, { className: "border-muted/60 shadow-none", children: e.jsx(z, { className: "p-4 space-y-4", children: e.jsxs("div", { className: "flex gap-4", children: [e.jsxs("div", { className: "grow space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(h, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx($, { className: "w-3 h-3" }), " \u552F\u4E00\u6807\u8BC6 (Key)"] }), e.jsx(u, { value: a.key, onChange: (s) => t(a.key, { key: s.target.value }), placeholder: "\u552F\u4E00\u8BC6\u522B\u7801", className: "h-9 text-sm font-mono" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(h, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx(le, { className: "w-3 h-3" }), " \u663E\u793A\u63CF\u8FF0"] }), e.jsx(u, { value: a.description, onChange: (s) => t(a.key, { description: s.target.value }), placeholder: "\u4F8B\u5982\uFF1A\u8BF4\u670D\u827E\u7433\u653E\u4E0B\u6B66\u5668", className: "h-9 text-sm" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(h, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx($, { className: "w-3 h-3" }), " \u89E6\u53D1\u6761\u4EF6 (\u7ED3\u6784\u5316\u903B\u8F91)"] }), e.jsx(R, { condition: a.condition, variables: r, onChange: (s) => t(a.key, { condition: s }) })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(h, { className: "text-xs flex items-center gap-1.5 font-bold opacity-70", children: [e.jsx(ie, { className: "w-3 h-3" }), " \u89D2\u8272\u63D0\u793A (\u89E6\u53D1\u540E)"] }), e.jsx(b, { value: a.characterPrompt || "", onChange: (s) => t(a.key, { characterPrompt: s.target.value }), placeholder: "\u89E6\u53D1\u540E\u5BF9\u89D2\u8272\u7684\u989D\u5916\u6307\u4EE4...", className: "min-h-15 text-xs resize-none" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(h, { className: "text-xs flex items-center gap-1.5 font-bold opacity-70", children: [e.jsx(re, { className: "w-3 h-3" }), " \u7528\u6237\u6D88\u606F (\u89E6\u53D1\u540E)"] }), e.jsx(b, { value: a.userInfo || "", onChange: (s) => t(a.key, { userInfo: s.target.value }), placeholder: "\u89E6\u53D1\u540E\u663E\u793A\u7ED9\u7528\u6237\u7684\u4FE1\u606F...", className: "min-h-15 text-xs resize-none" })] })] })] }), e.jsx(g, { variant: "ghost", size: "icon", className: "h-8 w-8 text-destructive self-start", onClick: () => j(a.key), type: "button", children: e.jsx(P, { className: "w-3.5 h-3.5" }) })] }) }) }, a.key)) })] });
}, fe = /[,，]/, Ne = (i) => {
  const { variables: r, variableConfigs: n, onChange: o } = i, [l, d] = D.useState(""), p = () => {
    const t = l.trim();
    if (!t || r[t]) return;
    const a = { key: t, type: "number", hidden: false, initial: 0 }, s = 0;
    o({ ...r, [t]: { key: t, value: s } }, { ...n, [t]: a }), d("");
  }, v = (t) => {
    const a = { ...r };
    delete a[t];
    const s = { ...n };
    delete s[t], o(a, s);
  }, j = (t, a) => {
    const s = n[t];
    if (!s) return;
    let c = { ...s, ...a };
    a.type && a.type !== s.type && (a.type === "number" ? c = { key: t, type: "number", hidden: false, initial: 0 } : a.type === "boolean" ? c = { key: t, type: "boolean", hidden: false, initial: false } : a.type === "string" ? c = { key: t, type: "string", hidden: false, initial: "" } : a.type === "tags" && (c = { key: t, type: "tags", hidden: false, initial: [] }));
    const m = { ...n, [t]: c }, N = { ...r, [t]: { key: t, value: c.initial ?? 0 } };
    o(N, m);
  };
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex gap-2", children: [e.jsx("div", { className: "grow", children: e.jsx(u, { value: l, onChange: (t) => d(t.target.value), placeholder: "\u53D8\u91CF\u952E\u540D (\u5982\uFF1Atrust, points, health)", onKeyDown: (t) => {
    t.key === "Enter" && (t.preventDefault(), p());
  } }) }), e.jsxs(g, { onClick: p, type: "button", disabled: !l.trim() || !!r[l.trim()], children: [e.jsx(O, { className: "w-4 h-4 mr-2" }), " \u6DFB\u52A0\u53D8\u91CF"] })] }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: Object.entries(n).length === 0 ? e.jsxs("div", { className: "col-span-full p-12 border border-dashed rounded-xl flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(A, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-sm", children: "\u6682\u672A\u5B9A\u4E49\u4EFB\u4F55\u53D8\u91CF" })] }) : Object.entries(n).map(([t, a]) => e.jsxs(G, { className: "relative group border-muted/60 hover:border-primary/30 transition-colors", children: [e.jsx(g, { variant: "ghost", size: "icon", className: "absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity z-10", onClick: () => v(t), type: "button", children: e.jsx(P, { className: "w-3.5 h-3.5" }) }), e.jsxs(z, { className: "p-4 space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("div", { className: "bg-primary/10 p-1.5 rounded-lg", children: e.jsx($, { className: "w-4 h-4 text-primary" }) }), e.jsx("span", { className: "font-bold text-sm truncate pr-8", children: t })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(h, { className: "text-[10px] uppercase text-muted-foreground font-bold", children: "\u6570\u636E\u7C7B\u578B" }), e.jsxs(w, { value: a.type, onValueChange: (s) => j(t, { type: s }), children: [e.jsx(T, { className: "h-8 text-sm", children: e.jsx(S, {}) }), e.jsxs(F, { children: [e.jsxs(f, { value: "number", className: "text-xs", children: [e.jsx(A, { className: "w-3 h-3 inline mr-1" }), " \u6570\u503C"] }), e.jsxs(f, { value: "boolean", className: "text-xs", children: [e.jsx(ne, { className: "w-3 h-3 inline mr-1" }), " \u5E03\u5C14"] }), e.jsxs(f, { value: "string", className: "text-xs", children: [e.jsx(ce, { className: "w-3 h-3 inline mr-1" }), " \u6587\u672C"] }), e.jsxs(f, { value: "tags", className: "text-xs", children: [e.jsx(oe, { className: "w-3 h-3 inline mr-1" }), " \u6807\u7B7E\u96C6\u5408"] })] })] })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(h, { className: "text-[10px] uppercase text-muted-foreground font-bold", children: "\u521D\u59CB\u503C (Initial)" }), a.type === "number" && e.jsx(u, { type: "number", value: a.initial, onChange: (s) => j(t, { initial: Number(s.target.value) }), className: "h-8 text-sm font-mono" }), a.type === "boolean" && e.jsxs("div", { className: "flex items-center gap-2 h-8", children: [e.jsx(je, { checked: a.initial, onCheckedChange: (s) => j(t, { initial: s }) }), e.jsx("span", { className: "text-xs font-medium", children: a.initial ? "\u5F00\u542F/\u771F" : "\u5173\u95ED/\u5047" })] }), a.type === "string" && e.jsx(u, { value: a.initial, onChange: (s) => j(t, { initial: s.target.value }), className: "h-8 text-sm" }), a.type === "tags" && e.jsx(u, { value: a.initial.join(", "), onChange: (s) => j(t, { initial: s.target.value.split(fe).map((c) => c.trim()).filter(Boolean) }), placeholder: "\u9017\u53F7\u5206\u9694\u521D\u59CB\u6807\u7B7E", className: "h-8 text-sm" })] }), a.type === "number" && e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-1", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(h, { className: "text-[10px] text-muted-foreground", children: "\u6700\u5C0F\u503C" }), e.jsx(u, { type: "number", value: a.min ?? "", onChange: (s) => j(t, { min: s.target.value ? Number(s.target.value) : void 0 }), className: "h-7 text-[10px] px-2" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(h, { className: "text-[10px] text-muted-foreground", children: "\u6700\u5927\u503C" }), e.jsx(u, { type: "number", value: a.max ?? "", onChange: (s) => j(t, { max: s.target.value ? Number(s.target.value) : void 0 }), className: "h-7 text-[10px] px-2" })] })] })] })] })] }, t)) })] });
}, V = { id: "", characterId: "", roleTaskPrompt: "", userGuidance: "", name: "", description: "", goals: [], failureChecks: [], variables: {}, tags: [] }, k = {}, E = {}, x = X({ formData: { ...V }, variables: { ...k }, variableConfigs: { ...E }, updateField(i, r) {
  this.formData[i] = r;
}, setVariables(i) {
  this.variables = { ...i };
}, setVariableConfigs(i) {
  this.variableConfigs = { ...i };
}, updateVariablesAndConfigs(i, r) {
  this.variables = { ...i }, this.variableConfigs = { ...r };
}, setTags(i) {
  this.formData.tags = i;
}, loadInitialData(i) {
  i ? (Object.assign(this.formData, { ...i, goals: i.goals || [], failureChecks: i.failureChecks || [], variables: i.variables || {}, tags: i.tags || [], ...i.createdAt ? { createdAt: i.createdAt } : {}, ...i.updatedAt ? { updatedAt: i.updatedAt } : {} }), this.variableConfigs = i.variables || {}) : (Object.assign(this.formData, V), this.variables = { ...k }, this.variableConfigs = { ...E });
}, resetForm() {
  Object.assign(this.formData, V), this.variables = { ...k }, this.variableConfigs = { ...E };
}, getFormDataForSave() {
  return { ..._(this.formData), variables: _(this.variableConfigs) };
} }), be = /[,，]/, ye = (i) => {
  var _a;
  const r = D.useId(), n = M(x);
  D.useEffect(() => {
    x.loadInitialData(i.initialData);
  }, [i.initialData]);
  const o = (l) => {
    l.preventDefault(), i.onSave(x.getFormDataForSave());
  };
  return e.jsxs(G, { className: "max-w-4xl mx-auto shadow-lg border-muted/60", children: [e.jsx(W, { className: "pb-4", children: e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: e.jsx(de, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(Y, { className: "text-xl", children: "\u6311\u6218\u8BBE\u8BA1\u5DE5\u4F5C\u5BA4" }), e.jsx(Z, { children: "\u8BBE\u8BA1\u5173\u5361\u76EE\u6807\u3001\u6570\u503C\u53D8\u91CF\u4E0E\u53D9\u4E8B\u89C4\u5219" })] })] }) }) }), e.jsxs("form", { onSubmit: o, children: [e.jsx(z, { children: e.jsxs(Q, { defaultValue: "base", className: "w-full", children: [e.jsxs(ee, { className: "grid grid-cols-4 w-full h-11 bg-muted/30 p-1 mb-8", children: [e.jsxs(y, { value: "base", className: "gap-2", children: [e.jsx(me, { className: "w-4 h-4" }), " \u57FA\u7840\u8BBE\u5B9A"] }), e.jsxs(y, { value: "goals", className: "gap-2", children: [e.jsx(he, { className: "w-4 h-4" }), " \u4EFB\u52A1\u76EE\u6807"] }), e.jsxs(y, { value: "failures", className: "gap-2", children: [e.jsx(xe, { className: "w-4 h-4" }), " \u5931\u8D25\u6761\u4EF6"] }), e.jsxs(y, { value: "variables", className: "gap-2", children: [e.jsx(A, { className: "w-4 h-4" }), " \u6570\u503C\u53D8\u91CF"] })] }), e.jsx(C, { value: "base", className: "space-y-6 animate-in fade-in-50 duration-300", children: e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(h, { htmlFor: `${r}-name`, children: "\u6311\u6218\u540D\u79F0" }), e.jsx(u, { id: `${r}-name`, value: n.formData.name, onChange: (l) => x.updateField("name", l.target.value), placeholder: "\u5982\uFF1A\u8FF7\u5931\u4E4B\u57CE\u7684\u5951\u7EA6", required: true })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(h, { htmlFor: `${r}-charId`, children: "\u7ED1\u5B9A\u89D2\u8272 ID" }), e.jsx(u, { id: `${r}-charId`, value: n.formData.characterId, onChange: (l) => x.updateField("characterId", l.target.value), placeholder: "\u4F8B\u5982: kallen-123", required: true })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(h, { htmlFor: `${r}-desc`, children: "\u80CC\u666F\u4ECB\u7ECD\u4E0E\u89C4\u5219\u8BF4\u660E" }), e.jsx(b, { id: `${r}-desc`, value: n.formData.description, onChange: (l) => x.updateField("description", l.target.value), placeholder: "\u63CF\u8FF0\u8BE5\u6311\u6218\u7684\u80CC\u666F\u6545\u4E8B\uFF0C\u4EE5\u53CA\u73A9\u5BB6\u9700\u8981\u9075\u5B88\u7684\u7279\u6B8A\u89C4\u5219...", className: "min-h-32 leading-relaxed" })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(h, { htmlFor: `${r}-roleTask`, children: "\u89D2\u8272\u4EFB\u52A1\u63D0\u793A\u8BCD (DM\u89C6\u89D2)" }), e.jsx(b, { id: `${r}-roleTask`, value: n.formData.roleTaskPrompt, onChange: (l) => x.updateField("roleTaskPrompt", l.target.value), placeholder: "\u5728\u8BE5\u6311\u6218\u4E2D\uFF0C\u901A\u8FC7AI\u7CFB\u7EDF\u53D1\u7ED9\u89D2\u8272\u7684\u7279\u6B8A\u6307\u4EE4...", className: "min-h-24 text-xs font-mono" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(h, { htmlFor: `${r}-userGuidance`, children: "\u7528\u6237\u6307\u5F15\u8BF4\u660E" }), e.jsx(b, { id: `${r}-userGuidance`, value: n.formData.userGuidance, onChange: (l) => x.updateField("userGuidance", l.target.value), placeholder: "\u7ED9\u8FDB\u5165\u6311\u6218\u7684\u7528\u6237\u7684\u6587\u5B57\u6307\u5F15...", className: "min-h-24 text-xs font-mono" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(h, { htmlFor: `${r}-tags`, children: "\u6311\u6218\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)" }), e.jsx(u, { id: `${r}-tags`, value: (_a = n.formData.tags) == null ? void 0 : _a.join(", "), onChange: (l) => x.setTags(l.target.value.split(be).map((d) => d.trim()).filter(Boolean)), placeholder: "\u5947\u5E7B, \u60AC\u7591, \u9AD8\u96BE\u5EA6" })] })] }) }), e.jsx(C, { value: "goals", className: "animate-in fade-in-50 duration-300", children: e.jsx(L, { value: n.formData.goals, variables: n.variableConfigs, onChange: (l) => x.updateField("goals", l) }) }), e.jsx(C, { value: "failures", className: "animate-in fade-in-50 duration-300", children: e.jsx(L, { title: "\u5931\u8D25\u68C0\u67E5", description: "\u5B9A\u4E49\u5BFC\u81F4\u6311\u6218\u5931\u8D25\u7684\u6761\u4EF6", value: n.formData.failureChecks, variables: n.variableConfigs, onChange: (l) => x.updateField("failureChecks", l) }) }), e.jsx(C, { value: "variables", className: "animate-in fade-in-50 duration-300", children: e.jsx(Ne, { variables: n.variables, variableConfigs: n.variableConfigs, onChange: (l, d) => x.updateVariablesAndConfigs(l, d) }) })] }) }), e.jsxs(J, { className: "flex justify-between border-t py-6 bg-muted/10", children: [e.jsxs(g, { variant: "ghost", type: "button", onClick: i.onCancel, className: "rounded-lg h-11 px-6", children: [e.jsx(ue, { className: "w-4 h-4 mr-2" }), " \u653E\u5F03\u4FEE\u6539"] }), e.jsxs(g, { type: "submit", className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20", children: [e.jsx(pe, { className: "w-4 h-4 mr-2" }), " \u4FDD\u5B58\u6311\u6218\u8BBE\u8BA1"] })] })] })] });
};
function He() {
  const i = U(), r = async (o) => {
    try {
      const l = { ...o, id: K(), createdAt: Date.now(), updatedAt: Date.now() };
      await ge.challenges.add(l), q.success("\u6311\u6218\u5361\u521B\u5EFA\u6210\u529F"), i({ to: "/plaza/challenges" });
    } catch (l) {
      console.error(l), q.error("\u4FDD\u5B58\u5931\u8D25");
    }
  }, n = () => {
    i({ to: "/plaza/challenges" });
  };
  return e.jsx("div", { className: "p-6 relative", children: e.jsx(ye, { onSave: r, onCancel: n }) });
}
export {
  He as component
};
