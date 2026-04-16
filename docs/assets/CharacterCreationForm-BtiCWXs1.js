import { j as e, ar as z, as as H, at as M, au as X, av as q, r as g, al as K, a6 as V, v as W } from "./react-gFHNOnf5.js";
import { B as N } from "./button-D3G-RLOw.js";
import { I } from "./input-KwncZLGm.js";
import { C as L, d as T, a as Y, b as Z, c as S, e as J } from "./card-B4CxGEM-.js";
import { L as d } from "./label-BU_LC6Ti.js";
import { c as y } from "./shadcn-utils-BMZD7_jZ.js";
import { d as G, P as w, l as Q, j as P, z as ee, I as se, f as ae, Z as A, m as te, n as R, X as re, a9 as ne } from "./icons-CW-0NDo_.js";
import { S as E } from "./switch-D6eVMgf5.js";
import { D as f, a as u } from "./draft-field-DvA8Eubc.js";
function ie({ ...a }) {
  return e.jsx(z, { "data-slot": "accordion", ...a });
}
function b({ className: a, ...n }) {
  return e.jsx(H, { "data-slot": "accordion-item", className: y("border-b last:border-b-0", a), ...n });
}
function _({ className: a, children: n, ...h }) {
  return e.jsx(M, { className: "flex", children: e.jsxs(X, { "data-slot": "accordion-trigger", className: y("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", a), ...h, children: [n, e.jsx(G, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })] }) });
}
function D({ className: a, children: n, ...h }) {
  return e.jsx(q, { "data-slot": "accordion-content", className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm", ...h, children: e.jsx("div", { className: y("pt-0 pb-4", a), children: n }) });
}
const le = { keys: [], content: "", enabled: true, insertion_order: 100, use_regex: false, extensions: {} }, oe = /[,，]/, ce = (a) => {
  var _a;
  const [n, h] = g.useState(((_a = a.value) == null ? void 0 : _a.entries) || []), [r, j] = g.useState(null), v = (t) => {
    var _a2;
    h(t), a.onChange({ ...a.value, entries: t, extensions: ((_a2 = a.value) == null ? void 0 : _a2.extensions) || {} });
  }, l = () => {
    const t = { ...le, id: crypto.randomUUID() };
    v([...n, t]), j(n.length);
  }, C = (t) => {
    v(n.filter((m, o) => o !== t)), r === t && j(null);
  }, p = (t, m) => {
    const o = [...n];
    o[t] = { ...o[t], ...m }, v(o);
  }, k = (t) => {
    j(r === t ? null : t);
  };
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h3", { className: "text-sm font-medium", children: ["\u77E5\u8BC6\u4E66\u6761\u76EE (", n.length, ")"] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u5F53\u5173\u952E\u8BCD\u5728\u5BF9\u8BDD\u4E2D\u5339\u914D\u65F6\uFF0C\u81EA\u52A8\u63D2\u5165\u76F8\u5173\u8BBE\u5B9A" })] }), e.jsxs(N, { variant: "outline", size: "sm", onClick: l, type: "button", className: "h-8", children: [e.jsx(w, { className: "w-3.5 h-3.5 mr-1" }), " \u6DFB\u52A0\u6761\u76EE"] })] }), e.jsx("div", { className: "space-y-2", children: n.length === 0 ? e.jsxs("div", { className: "py-12 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(Q, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-xs", children: "\u6682\u65E0\u77E5\u8BC6\u4E66\u6761\u76EE" })] }) : n.map((t, m) => e.jsxs(L, { className: y("overflow-hidden border-muted/60 shadow-none transition-all", r === m ? "ring-1 ring-primary/20" : "hover:border-primary/20"), children: [e.jsxs("div", { className: "px-4 py-3 flex items-center justify-between cursor-pointer group", onClick: () => k(m), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [e.jsx("div", { className: y("w-2 h-2 rounded-full", t.enabled ? "bg-green-500" : "bg-muted-foreground/30") }), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: t.name || (t.keys.length > 0 ? t.keys.slice(0, 3).join(", ") : "(\u672A\u547D\u540D\u6761\u76EE)") }), e.jsxs("span", { className: "text-[10px] text-muted-foreground truncate", children: ["\u4F18\u5148\u7EA7: ", t.insertion_order, " | ", "use_regex" in t && t.use_regex ? "\u6B63\u5219" : "\u666E\u901A"] })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(N, { variant: "ghost", size: "icon", className: "h-8 w-8 text-destructive opacity-0 group-hover:opacity-100 transition-opacity", onClick: (o) => {
    o.stopPropagation(), C(m);
  }, type: "button", children: e.jsx(P, { className: "w-3.5 h-3.5" }) }), r === m ? e.jsx(ee, { className: "w-4 h-4 text-muted-foreground" }) : e.jsx(G, { className: "w-4 h-4 text-muted-foreground" })] })] }), r === m && e.jsxs(T, { className: "px-4 pb-4 pt-1 space-y-4 border-t border-muted/40 bg-muted/5 animate-in slide-in-from-top-2 duration-200", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { className: "text-xs", children: "\u6761\u76EE\u540D\u79F0 (\u53EF\u9009)" }), e.jsx(f, { value: t.name || "", onCommit: (o) => p(m, { name: o }), placeholder: "\u7ED9\u6761\u76EE\u4E00\u4E2A\u4FBF\u4E8E\u8BC6\u522B\u7684\u540D\u5B57", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "flex items-end gap-6 h-8", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(E, { checked: t.enabled, onCheckedChange: (o) => p(m, { enabled: o }) }), e.jsx(d, { className: "text-xs", children: "\u542F\u7528\u72B6\u6001" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(E, { checked: "use_regex" in t ? t.use_regex : false, onCheckedChange: (o) => p(m, { use_regex: o }) }), e.jsx(d, { className: "text-xs", children: "\u6B63\u5219\u5339\u914D" })] })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(d, { className: "text-xs flex items-center gap-1.5", children: ["\u89E6\u53D1\u5173\u952E\u8BCD (Keys)", e.jsx(se, { className: "w-3 h-3 text-muted-foreground" })] }), e.jsx(f, { value: t.keys.join(", "), onCommit: (o) => p(m, { keys: o.split(oe).map((F) => F.trim()).filter(Boolean) }), placeholder: "\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u5173\u952E\u8BCD", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { className: "text-xs", children: "\u5185\u5BB9 (Content)" }), e.jsx(u, { value: t.content, onCommit: (o) => p(m, { content: o }), placeholder: "\u5339\u914D\u65F6\u6CE8\u5165\u7684\u6587\u672C\u5185\u5BB9", className: "min-h-24 text-xs font-mono" })] }), e.jsx("div", { className: "grid grid-cols-2 gap-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { className: "text-xs", children: "\u63D2\u5165\u987A\u5E8F (Insertion Order)" }), e.jsx(f, { type: "number", value: String(t.insertion_order), onCommit: (o) => p(m, { insertion_order: Number.parseInt(o) || 0 }), className: "h-8 text-xs" })] }) })] })] }, t.id || `entry-${m}`)) })] });
}, $ = { name: "", nickname: "", description: "", personality: "", scenario: "", first_mes: "", mes_example: "", system_prompt: "", post_history_instructions: "", creator_notes: "", creator: "", character_version: "1.0.0", tags: [], alternate_greetings: [], avatar: "", imageBase64: "", character_book: void 0 }, i = K({ formData: { ...$ }, updateField(a, n) {
  this.formData[a] = n;
}, setAvatar(a) {
  this.formData.avatar = a;
}, setLargeImage(a) {
  this.formData.imageBase64 = a;
}, addGreeting() {
  this.formData.alternate_greetings.push("");
}, updateGreeting(a, n) {
  a >= 0 && a < this.formData.alternate_greetings.length && (this.formData.alternate_greetings[a] = n);
}, removeGreeting(a) {
  a >= 0 && a < this.formData.alternate_greetings.length && this.formData.alternate_greetings.splice(a, 1);
}, setTags(a) {
  this.formData.tags = a;
}, loadInitialData(a) {
  a ? Object.assign(this.formData, { ...a, tags: a.tags || [], alternate_greetings: [...a.alternate_greetings || []], character_book: a.character_book ? { ...a.character_book, entries: a.character_book.entries.map((n) => ({ ...n, keys: [...n.keys], extensions: { ...n.extensions }, secondary_keys: n.secondary_keys ? [...n.secondary_keys] : void 0, comment: n.comment })), extensions: { ...a.character_book.extensions } } : void 0 }) : Object.assign(this.formData, $);
}, resetForm() {
  Object.assign(this.formData, $);
}, getFormDataForSave() {
  return V(this.formData);
} }), de = /[,，]/, Ne = (a) => {
  const { className: n } = a, h = a.mode || (a.initialData ? "edit" : "create"), r = g.useId(), j = g.useRef(null), v = g.useRef(null), l = W(i), [C, p] = g.useState(false), [k, t] = g.useState(false);
  g.useEffect(() => {
    i.loadInitialData(a.initialData);
  }, [a.initialData]);
  const m = (s) => {
    var _a;
    const c = (_a = s.target.files) == null ? void 0 : _a[0];
    if (c) {
      const x = new FileReader();
      x.onloadend = () => {
        i.setAvatar(x.result);
      }, x.readAsDataURL(c);
    }
  }, o = (s) => {
    var _a;
    const c = (_a = s.target.files) == null ? void 0 : _a[0];
    if (c) {
      const x = new FileReader();
      x.onloadend = () => {
        i.setLargeImage(x.result);
      }, x.readAsDataURL(c);
    }
  }, F = () => {
    i.addGreeting();
  }, U = (s, c) => {
    i.updateGreeting(s, c);
  }, B = (s) => {
    i.removeGreeting(s);
  }, O = (s) => {
    s.preventDefault(), a.onSave(i.getFormDataForSave());
  };
  return e.jsxs(L, { className: y("max-w-4xl mx-auto shadow-lg border-muted/60", n), children: [e.jsx(Y, { className: "pb-4", children: e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: e.jsx(ae, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(Z, { className: "text-xl", children: h === "edit" ? "\u7F16\u8F91\u89D2\u8272" : "\u521B\u4F5C\u8005\u5DE5\u574A" }), e.jsx(S, { children: h === "edit" ? "\u4FEE\u6539\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" : "\u5B9A\u4E49\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" })] })] }) }) }), e.jsxs("form", { onSubmit: O, children: [e.jsx(T, { children: e.jsxs(ie, { type: "multiple", defaultValue: ["identity", "dialogue", "prompt", "meta"], className: "w-full", children: [e.jsxs(b, { className: "border-none", value: "identity", children: [e.jsx(_, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u8EAB\u4EFD\u8BBE\u5B9A" }) }), e.jsxs(D, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-start", children: [e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-32 h-32 rounded-2xl bg-muted border-2 border-dashed ${C ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a;
    return (_a = j.current) == null ? void 0 : _a.click();
  }, onDragOver: (s) => {
    s.preventDefault(), p(true);
  }, onDragLeave: () => p(false), onDrop: (s) => {
    var _a, _b;
    s.preventDefault(), p(false);
    const c = (_a = s.dataTransfer.files) == null ? void 0 : _a[0];
    if ((_b = c == null ? void 0 : c.type) == null ? void 0 : _b.startsWith("image/")) {
      const x = new FileReader();
      x.onloadend = () => {
        i.setAvatar(x.result);
      }, x.readAsDataURL(c);
    }
  }, children: [l.formData.avatar ? e.jsx("img", { src: l.formData.avatar, alt: "Avatar", className: "w-full h-full object-cover" }) : e.jsx(A, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(w, { className: "w-6 h-6 text-white" }) })] }), e.jsx(I, { type: "file", ref: j, className: "hidden", accept: "image/*", onChange: m }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5934\u50CF" })] }), e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-64 h-32 rounded-2xl bg-muted border-2 border-dashed ${k ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a;
    return (_a = v.current) == null ? void 0 : _a.click();
  }, onDragOver: (s) => {
    s.preventDefault(), t(true);
  }, onDragLeave: () => t(false), onDrop: (s) => {
    var _a, _b;
    s.preventDefault(), t(false);
    const c = (_a = s.dataTransfer.files) == null ? void 0 : _a[0];
    if ((_b = c == null ? void 0 : c.type) == null ? void 0 : _b.startsWith("image/")) {
      const x = new FileReader();
      x.onloadend = () => {
        i.setLargeImage(x.result);
      }, x.readAsDataURL(c);
    }
  }, children: [l.formData.imageBase64 ? e.jsx("img", { src: l.formData.imageBase64, alt: "\u89D2\u8272\u5927\u56FE", className: "w-full h-full object-cover" }) : e.jsx(A, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(w, { className: "w-6 h-6 text-white" }) })] }), e.jsx(I, { type: "file", ref: v, className: "hidden", accept: "image/*", onChange: o }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5927\u56FE" })] }), e.jsxs("div", { className: "grow space-y-4 w-full", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: `${r}-name`, children: "\u57FA\u672C\u540D\u79F0 (Name)" }), e.jsx(f, { id: `${r}-name`, value: l.formData.name, onCommit: (s) => i.updateField("name", s), placeholder: "\u5982\uFF1A\u827E\u7433", required: true })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: `${r}-nickname`, children: "\u5934\u8854/\u6635\u79F0 (Nickname)" }), e.jsx(f, { id: `${r}-nickname`, value: l.formData.nickname, onCommit: (s) => i.updateField("nickname", s), placeholder: "\u5982\uFF1A\u6668\u66E6\u4E4B\u5203" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: `${r}-tags`, children: "\u68C0\u7D22\u6807\u7B7E (Tags)" }), e.jsx(f, { id: `${r}-tags`, value: l.formData.tags.join(", "), onCommit: (s) => i.setTags(s.split(de).map((c) => c.trim()).filter(Boolean)), placeholder: "\u7528\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u5947\u5E7B, \u7CBE\u7075, \u6218\u58EB" })] })] })] }), e.jsxs("div", { className: "space-y-4 pt-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: `${r}-personality`, children: "\u4EBA\u683C/\u6027\u683C (Personality)" }), e.jsx(u, { id: `${r}-personality`, value: l.formData.personality, onCommit: (s) => i.updateField("personality", s), placeholder: "\u8BE6\u7EC6\u63CF\u8FF0\u89D2\u8272\u7684\u6027\u683C\u3001\u602A\u7656\u3001\u601D\u7EF4\u903B\u8F91\u7B49", className: "min-h-32 leading-relaxed" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: `${r}-description`, children: "\u8EAB\u4E16/\u63CF\u8FF0 (Description)" }), e.jsx(u, { id: `${r}-description`, value: l.formData.description, onCommit: (s) => i.updateField("description", s), placeholder: "\u89D2\u8272\u7684\u8FC7\u5F80\u3001\u5916\u8C8C\u63CF\u8FF0\u4E0E\u80CC\u666F\u6545\u4E8B", className: "min-h-32 leading-relaxed" })] })] })] })] }), e.jsxs(b, { className: "border-none", value: "dialogue", children: [e.jsx(_, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5BF9\u8BDD\u5199\u4F5C" }) }), e.jsxs(D, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(d, { htmlFor: `${r}-first_mes`, className: "flex items-center gap-2", children: [e.jsx(te, { className: "w-4 h-4 text-primary" }), "\u5F00\u573A\u8BED (First Message)"] }), e.jsx(u, { id: `${r}-first_mes`, value: l.formData.first_mes, onCommit: (s) => i.updateField("first_mes", s), placeholder: "\u8FDB\u5165\u5BF9\u8BDD\u540E\u89D2\u8272\u7684\u7B2C\u4E00\u53E5\u8BDD", className: "min-h-32" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx(d, { className: "text-sm", children: "\u5907\u7528\u95EE\u5019\u8BED (Alternate Greetings)" }), e.jsxs(N, { variant: "ghost", size: "sm", onClick: F, type: "button", className: "h-8 rounded-lg", children: [e.jsx(w, { className: "w-3 h-3 mr-1" }), " \u6DFB\u52A0"] })] }), e.jsx("div", { className: "space-y-2", children: l.formData.alternate_greetings.map((s, c) => e.jsxs("div", { className: "flex gap-2", children: [e.jsx(u, { value: s, onCommit: (x) => U(c, x), placeholder: `\u95EE\u5019\u8BED\u5019\u9009 ${c + 1}`, className: "min-h-16 text-sm" }), e.jsx(N, { variant: "ghost", size: "icon", onClick: () => B(c), type: "button", className: "h-10 w-10 text-destructive shrink-0", children: e.jsx(P, { className: "w-4 h-4" }) })] }, s || `greeting-${c}`)) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: `${r}-scenario`, children: "\u5BF9\u8BDD\u573A\u666F\u8BBE\u5B9A (Scenario)" }), e.jsx(u, { id: `${r}-scenario`, value: l.formData.scenario, onCommit: (s) => i.updateField("scenario", s), placeholder: "\u5B9A\u4E49\u5F00\u573A\u65F6\u6240\u5904\u7684\u7279\u5B9A\u73AF\u5883\u6216\u5F53\u524D\u53D1\u751F\u7684\u4E8B\u4EF6", className: "min-h-24" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: `${r}-mes_example`, children: "\u4E66\u5199\u98CE\u683C\u793A\u4F8B (Message Examples)" }), e.jsxs(S, { className: "text-xs mb-2", children: ["\u4F7F\u7528 <START> \u5F00\u59CB\u4E00\u6BB5\u793A\u4F8B\uFF0C", "{{user}}", " \u4EE3\u8868\u7528\u6237"] }), e.jsx(u, { id: `${r}-mes_example`, value: l.formData.mes_example, onCommit: (s) => i.updateField("mes_example", s), placeholder: "<START>\\n{{user}}: \u4F60\u662F\u8C01\uFF1F\\n\u89D2\u8272: \u6211\u662F...", className: "min-h-48 font-mono text-xs" })] })] })] }), e.jsxs(b, { className: "border-none", value: "prompt", children: [e.jsx(_, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "Prompt \u6A21\u677F" }) }), e.jsxs(D, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(d, { htmlFor: `${r}-system_prompt`, className: "flex items-center gap-2", children: [e.jsx(R, { className: "w-4 h-4 text-blue-500" }), "\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD (System Prompt Override)"] }), e.jsx(u, { id: `${r}-system_prompt`, value: l.formData.system_prompt, onCommit: (s) => i.updateField("system_prompt", s), placeholder: "\u8986\u76D6\u89D2\u8272\u7684\u5168\u5C40\u7CFB\u7EDF\u63D0\u793A\u8BCD...", className: "min-h-48 font-mono text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(d, { htmlFor: `${r}-post_history_instructions`, className: "flex items-center gap-2", children: [e.jsx(R, { className: "w-4 h-4 text-purple-500" }), "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"] }), e.jsx(u, { id: `${r}-post_history_instructions`, value: l.formData.post_history_instructions, onCommit: (s) => i.updateField("post_history_instructions", s), placeholder: "\u7D27\u968F\u5BF9\u8BDD\u5386\u53F2\u540E\u7684\u7279\u5B9A\u6307\u4EE4\uFF08\u5F3A\u5236\u8F93\u51FA\u683C\u5F0F\u7B49\uFF09", className: "min-h-32 font-mono text-xs" })] })] })] }), e.jsxs(b, { className: "border-none", value: "meta", children: [e.jsx(_, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5143\u6570\u636E/\u5907\u6CE8" }) }), e.jsxs(D, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: `${r}-creator`, children: "\u5361\u7247\u521B\u5EFA\u8005 (Creator)" }), e.jsx(f, { id: `${r}-creator`, value: l.formData.creator, onCommit: (s) => i.updateField("creator", s), placeholder: "\u60A8\u7684\u540D\u5B57\u6216 ID" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: `${r}-character_version`, children: "\u89D2\u8272\u7248\u672C (Version)" }), e.jsx(f, { id: `${r}-character_version`, value: l.formData.character_version, onCommit: (s) => i.updateField("character_version", s), placeholder: "1.0.0" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: `${r}-creator_notes`, children: "\u521B\u5EFA\u8005\u5907\u6CE8 (Creator Notes)" }), e.jsx(u, { id: `${r}-creator_notes`, value: l.formData.creator_notes, onCommit: (s) => i.updateField("creator_notes", s), placeholder: "\u8BB0\u4E0B\u6709\u5173\u6B64\u89D2\u8272\u5361\u7684\u5F00\u53D1\u7B14\u8BB0\uFF0C\u4EC5\u5728\u5DE5\u574A\u53EF\u89C1", className: "min-h-32" })] }), e.jsx("div", { className: "pt-4", children: e.jsx(ce, { value: l.formData.character_book, onChange: (s) => i.updateField("character_book", s) }) })] })] })] }) }), e.jsxs(J, { className: "flex justify-between border-t py-6 bg-muted/10", children: [e.jsxs(N, { variant: "ghost", type: "button", onClick: a.onCancel, className: "rounded-lg h-11 px-6", children: [e.jsx(re, { className: "w-4 h-4 mr-2" }), " ", "\u653E\u5F03\u4FEE\u6539"] }), e.jsxs(N, { type: "submit", className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20", children: [e.jsx(ne, { className: "w-4 h-4 mr-2" }), " ", h === "edit" ? "\u4FDD\u5B58\u4FEE\u6539" : "\u751F\u6210\u5E76\u4FDD\u5B58\u89D2\u8272\u5361"] })] })] })] });
};
export {
  Ne as C
};
