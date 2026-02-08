import { j as e, ar as H, as as M, at as X, au as q, av as K, r as f, D as V, F as W, E as Y } from "./react-BQpw03Eg.js";
import { B as N } from "./button-B9brLUSp.js";
import { I as u } from "./input-C44X3vA9.js";
import { T as p } from "./textarea-D6rL78Aw.js";
import { C as R, d as T, a as J, b as Q, c as I, e as Z } from "./card-ClPZDGV4.js";
import { L as m } from "./label-DMtPOVS-.js";
import { c as y } from "./shadcn-utils-BMZD7_jZ.js";
import { h as L, P as D, l as ee, d as G, a5 as se, I as ae, a8 as te, v as S, Y as re, a1 as A, X as ne, a3 as ie } from "./icons-BC63ChG4.js";
import { S as E } from "./switch-BPeiHTCh.js";
function le({ ...s }) {
  return e.jsx(H, { "data-slot": "accordion", ...s });
}
function b({ className: s, ...n }) {
  return e.jsx(M, { "data-slot": "accordion-item", className: y("border-b last:border-b-0", s), ...n });
}
function _({ className: s, children: n, ...x }) {
  return e.jsx(X, { className: "flex", children: e.jsxs(q, { "data-slot": "accordion-trigger", className: y("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", s), ...x, children: [n, e.jsx(L, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })] }) });
}
function w({ className: s, children: n, ...x }) {
  return e.jsx(K, { "data-slot": "accordion-content", className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm", ...x, children: e.jsx("div", { className: y("pt-0 pb-4", s), children: n }) });
}
const oe = { keys: [], content: "", enabled: true, insertion_order: 100, use_regex: false, extensions: {} }, ce = /[,，]/, de = (s) => {
  var _a;
  const [n, x] = f.useState(((_a = s.value) == null ? void 0 : _a.entries) || []), [t, j] = f.useState(null), v = (a) => {
    var _a2;
    x(a), s.onChange({ ...s.value, entries: a, extensions: ((_a2 = s.value) == null ? void 0 : _a2.extensions) || {} });
  }, l = () => {
    const a = { ...oe, id: crypto.randomUUID() };
    v([...n, a]), j(n.length);
  }, C = (a) => {
    v(n.filter((r, o) => o !== a)), t === a && j(null);
  }, g = (a, r) => {
    const o = [...n];
    o[a] = { ...o[a], ...r }, v(o);
  }, k = (a) => {
    j(t === a ? null : a);
  };
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h3", { className: "text-sm font-medium", children: ["\u77E5\u8BC6\u4E66\u6761\u76EE (", n.length, ")"] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u5F53\u5173\u952E\u8BCD\u5728\u5BF9\u8BDD\u4E2D\u5339\u914D\u65F6\uFF0C\u81EA\u52A8\u63D2\u5165\u76F8\u5173\u8BBE\u5B9A" })] }), e.jsxs(N, { variant: "outline", size: "sm", onClick: l, type: "button", className: "h-8", children: [e.jsx(D, { className: "w-3.5 h-3.5 mr-1" }), " \u6DFB\u52A0\u6761\u76EE"] })] }), e.jsx("div", { className: "space-y-2", children: n.length === 0 ? e.jsxs("div", { className: "py-12 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(ee, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-xs", children: "\u6682\u65E0\u77E5\u8BC6\u4E66\u6761\u76EE" })] }) : n.map((a, r) => e.jsxs(R, { className: y("overflow-hidden border-muted/60 shadow-none transition-all", t === r ? "ring-1 ring-primary/20" : "hover:border-primary/20"), children: [e.jsxs("div", { className: "px-4 py-3 flex items-center justify-between cursor-pointer group", onClick: () => k(r), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [e.jsx("div", { className: y("w-2 h-2 rounded-full", a.enabled ? "bg-green-500" : "bg-muted-foreground/30") }), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: a.name || (a.keys.length > 0 ? a.keys.slice(0, 3).join(", ") : "(\u672A\u547D\u540D\u6761\u76EE)") }), e.jsxs("span", { className: "text-[10px] text-muted-foreground truncate", children: ["\u4F18\u5148\u7EA7: ", a.insertion_order, " | ", "use_regex" in a && a.use_regex ? "\u6B63\u5219" : "\u666E\u901A"] })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(N, { variant: "ghost", size: "icon", className: "h-8 w-8 text-destructive opacity-0 group-hover:opacity-100 transition-opacity", onClick: (o) => {
    o.stopPropagation(), C(r);
  }, type: "button", children: e.jsx(G, { className: "w-3.5 h-3.5" }) }), t === r ? e.jsx(se, { className: "w-4 h-4 text-muted-foreground" }) : e.jsx(L, { className: "w-4 h-4 text-muted-foreground" })] })] }), t === r && e.jsxs(T, { className: "px-4 pb-4 pt-1 space-y-4 border-t border-muted/40 bg-muted/5 animate-in slide-in-from-top-2 duration-200", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { className: "text-xs", children: "\u6761\u76EE\u540D\u79F0 (\u53EF\u9009)" }), e.jsx(u, { value: a.name || "", onChange: (o) => g(r, { name: o.target.value }), placeholder: "\u7ED9\u6761\u76EE\u4E00\u4E2A\u4FBF\u4E8E\u8BC6\u522B\u7684\u540D\u5B57", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "flex items-end gap-6 h-8", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(E, { checked: a.enabled, onCheckedChange: (o) => g(r, { enabled: o }) }), e.jsx(m, { className: "text-xs", children: "\u542F\u7528\u72B6\u6001" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(E, { checked: "use_regex" in a ? a.use_regex : false, onCheckedChange: (o) => g(r, { use_regex: o }) }), e.jsx(m, { className: "text-xs", children: "\u6B63\u5219\u5339\u914D" })] })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(m, { className: "text-xs flex items-center gap-1.5", children: ["\u89E6\u53D1\u5173\u952E\u8BCD (Keys)", e.jsx(ae, { className: "w-3 h-3 text-muted-foreground" })] }), e.jsx(u, { value: a.keys.join(", "), onChange: (o) => g(r, { keys: o.target.value.split(ce).map(($) => $.trim()).filter(Boolean) }), placeholder: "\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u5173\u952E\u8BCD", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { className: "text-xs", children: "\u5185\u5BB9 (Content)" }), e.jsx(p, { value: a.content, onChange: (o) => g(r, { content: o.target.value }), placeholder: "\u5339\u914D\u65F6\u6CE8\u5165\u7684\u6587\u672C\u5185\u5BB9", className: "min-h-24 text-xs font-mono" })] }), e.jsx("div", { className: "grid grid-cols-2 gap-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { className: "text-xs", children: "\u63D2\u5165\u987A\u5E8F (Insertion Order)" }), e.jsx(u, { type: "number", value: a.insertion_order, onChange: (o) => g(r, { insertion_order: Number.parseInt(o.target.value) || 0 }), className: "h-8 text-xs" })] }) })] })] }, a.id || `entry-${r}`)) })] });
}, F = { name: "", nickname: "", description: "", personality: "", scenario: "", first_mes: "", mes_example: "", system_prompt: "", post_history_instructions: "", creator_notes: "", creator: "", character_version: "1.0.0", tags: [], alternate_greetings: [], avatar: "", imageBase64: "", character_book: void 0 }, h = V({ formData: { ...F }, updateField(s, n) {
  this.formData[s] = n;
}, setAvatar(s) {
  this.formData.avatar = s;
}, setLargeImage(s) {
  this.formData.imageBase64 = s;
}, addGreeting() {
  this.formData.alternate_greetings.push("");
}, updateGreeting(s, n) {
  s >= 0 && s < this.formData.alternate_greetings.length && (this.formData.alternate_greetings[s] = n);
}, removeGreeting(s) {
  s >= 0 && s < this.formData.alternate_greetings.length && this.formData.alternate_greetings.splice(s, 1);
}, setTags(s) {
  this.formData.tags = s;
}, loadInitialData(s) {
  s ? Object.assign(this.formData, { ...s, tags: s.tags || [], alternate_greetings: [...s.alternate_greetings || []], character_book: s.character_book ? { ...s.character_book, entries: s.character_book.entries.map((n) => ({ ...n, keys: [...n.keys], extensions: { ...n.extensions }, secondary_keys: n.secondary_keys ? [...n.secondary_keys] : void 0, comment: n.comment })), extensions: { ...s.character_book.extensions } } : void 0 }) : Object.assign(this.formData, F);
}, resetForm() {
  Object.assign(this.formData, F);
}, getFormDataForSave() {
  return W(this.formData);
} }), me = /[,，]/, ye = (s) => {
  const { className: n } = s, x = s.mode || (s.initialData ? "edit" : "create"), t = f.useId(), j = f.useRef(null), v = f.useRef(null), l = Y(h), [C, g] = f.useState(false), [k, a] = f.useState(false);
  f.useEffect(() => {
    h.loadInitialData(s.initialData);
  }, [s.initialData]);
  const r = (i) => {
    const { name: c, value: d } = i.target;
    c === "tags" ? h.setTags(d.split(me).map((z) => z.trim()).filter(Boolean)) : h.updateField(c, d);
  }, o = (i) => {
    var _a;
    const c = (_a = i.target.files) == null ? void 0 : _a[0];
    if (c) {
      const d = new FileReader();
      d.onloadend = () => {
        h.setAvatar(d.result);
      }, d.readAsDataURL(c);
    }
  }, $ = (i) => {
    var _a;
    const c = (_a = i.target.files) == null ? void 0 : _a[0];
    if (c) {
      const d = new FileReader();
      d.onloadend = () => {
        h.setLargeImage(d.result);
      }, d.readAsDataURL(c);
    }
  }, P = () => {
    h.addGreeting();
  }, U = (i, c) => {
    h.updateGreeting(i, c);
  }, B = (i) => {
    h.removeGreeting(i);
  }, O = (i) => {
    i.preventDefault(), s.onSave(h.getFormDataForSave());
  };
  return e.jsxs(R, { className: y("max-w-4xl mx-auto shadow-lg border-muted/60", n), children: [e.jsx(J, { className: "pb-4", children: e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: e.jsx(te, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(Q, { className: "text-xl", children: x === "edit" ? "\u7F16\u8F91\u89D2\u8272" : "\u521B\u4F5C\u8005\u5DE5\u574A" }), e.jsx(I, { children: x === "edit" ? "\u4FEE\u6539\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" : "\u5B9A\u4E49\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" })] })] }) }) }), e.jsxs("form", { onSubmit: O, children: [e.jsx(T, { children: e.jsxs(le, { type: "multiple", defaultValue: ["identity", "dialogue", "prompt", "meta"], className: "w-full", children: [e.jsxs(b, { className: "border-none", value: "identity", children: [e.jsx(_, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u8EAB\u4EFD\u8BBE\u5B9A" }) }), e.jsxs(w, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-start", children: [e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-32 h-32 rounded-2xl bg-muted border-2 border-dashed ${C ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a;
    return (_a = j.current) == null ? void 0 : _a.click();
  }, onDragOver: (i) => {
    i.preventDefault(), g(true);
  }, onDragLeave: () => g(false), onDrop: (i) => {
    var _a, _b;
    i.preventDefault(), g(false);
    const c = (_a = i.dataTransfer.files) == null ? void 0 : _a[0];
    if ((_b = c == null ? void 0 : c.type) == null ? void 0 : _b.startsWith("image/")) {
      const d = new FileReader();
      d.onloadend = () => {
        h.setAvatar(d.result);
      }, d.readAsDataURL(c);
    }
  }, children: [l.formData.avatar ? e.jsx("img", { src: l.formData.avatar, alt: "Avatar", className: "w-full h-full object-cover" }) : e.jsx(S, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(D, { className: "w-6 h-6 text-white" }) })] }), e.jsx(u, { type: "file", ref: j, className: "hidden", accept: "image/*", onChange: o }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5934\u50CF" })] }), e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-64 h-32 rounded-2xl bg-muted border-2 border-dashed ${k ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a;
    return (_a = v.current) == null ? void 0 : _a.click();
  }, onDragOver: (i) => {
    i.preventDefault(), a(true);
  }, onDragLeave: () => a(false), onDrop: (i) => {
    var _a, _b;
    i.preventDefault(), a(false);
    const c = (_a = i.dataTransfer.files) == null ? void 0 : _a[0];
    if ((_b = c == null ? void 0 : c.type) == null ? void 0 : _b.startsWith("image/")) {
      const d = new FileReader();
      d.onloadend = () => {
        h.setLargeImage(d.result);
      }, d.readAsDataURL(c);
    }
  }, children: [l.formData.imageBase64 ? e.jsx("img", { src: l.formData.imageBase64, alt: "\u89D2\u8272\u5927\u56FE", className: "w-full h-full object-cover" }) : e.jsx(S, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(D, { className: "w-6 h-6 text-white" }) })] }), e.jsx(u, { type: "file", ref: v, className: "hidden", accept: "image/*", onChange: $ }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5927\u56FE" })] }), e.jsxs("div", { className: "grow space-y-4 w-full", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: `${t}-name`, children: "\u57FA\u672C\u540D\u79F0 (Name)" }), e.jsx(u, { id: `${t}-name`, name: "name", value: l.formData.name, onChange: r, placeholder: "\u5982\uFF1A\u827E\u7433", required: true })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: `${t}-nickname`, children: "\u5934\u8854/\u6635\u79F0 (Nickname)" }), e.jsx(u, { id: `${t}-nickname`, name: "nickname", value: l.formData.nickname, onChange: r, placeholder: "\u5982\uFF1A\u6668\u66E6\u4E4B\u5203" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: `${t}-tags`, children: "\u68C0\u7D22\u6807\u7B7E (Tags)" }), e.jsx(u, { id: `${t}-tags`, name: "tags", value: l.formData.tags.join(", "), onChange: r, placeholder: "\u7528\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u5947\u5E7B, \u7CBE\u7075, \u6218\u58EB" })] })] })] }), e.jsxs("div", { className: "space-y-4 pt-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: `${t}-personality`, children: "\u4EBA\u683C/\u6027\u683C (Personality)" }), e.jsx(p, { id: `${t}-personality`, name: "personality", value: l.formData.personality, onChange: r, placeholder: "\u8BE6\u7EC6\u63CF\u8FF0\u89D2\u8272\u7684\u6027\u683C\u3001\u602A\u7656\u3001\u601D\u7EF4\u903B\u8F91\u7B49", className: "min-h-32 leading-relaxed" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: `${t}-description`, children: "\u8EAB\u4E16/\u63CF\u8FF0 (Description)" }), e.jsx(p, { id: `${t}-description`, name: "description", value: l.formData.description, onChange: r, placeholder: "\u89D2\u8272\u7684\u8FC7\u5F80\u3001\u5916\u8C8C\u63CF\u8FF0\u4E0E\u80CC\u666F\u6545\u4E8B", className: "min-h-32 leading-relaxed" })] })] })] })] }), e.jsxs(b, { className: "border-none", value: "dialogue", children: [e.jsx(_, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5BF9\u8BDD\u5199\u4F5C" }) }), e.jsxs(w, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(m, { htmlFor: `${t}-first_mes`, className: "flex items-center gap-2", children: [e.jsx(re, { className: "w-4 h-4 text-primary" }), "\u5F00\u573A\u8BED (First Message)"] }), e.jsx(p, { id: `${t}-first_mes`, name: "first_mes", value: l.formData.first_mes, onChange: r, placeholder: "\u8FDB\u5165\u5BF9\u8BDD\u540E\u89D2\u8272\u7684\u7B2C\u4E00\u53E5\u8BDD", className: "min-h-32" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx(m, { className: "text-sm", children: "\u5907\u7528\u95EE\u5019\u8BED (Alternate Greetings)" }), e.jsxs(N, { variant: "ghost", size: "sm", onClick: P, type: "button", className: "h-8 rounded-lg", children: [e.jsx(D, { className: "w-3 h-3 mr-1" }), " \u6DFB\u52A0"] })] }), e.jsx("div", { className: "space-y-2", children: l.formData.alternate_greetings.map((i, c) => e.jsxs("div", { className: "flex gap-2", children: [e.jsx(p, { value: i, onChange: (d) => U(c, d.target.value), placeholder: `\u95EE\u5019\u8BED\u5019\u9009 ${c + 1}`, className: "min-h-16 text-sm" }), e.jsx(N, { variant: "ghost", size: "icon", onClick: () => B(c), type: "button", className: "h-10 w-10 text-destructive shrink-0", children: e.jsx(G, { className: "w-4 h-4" }) })] }, `greeting-${c}-${i.length}`)) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: `${t}-scenario`, children: "\u5BF9\u8BDD\u573A\u666F\u8BBE\u5B9A (Scenario)" }), e.jsx(p, { id: `${t}-scenario`, name: "scenario", value: l.formData.scenario, onChange: r, placeholder: "\u5B9A\u4E49\u5F00\u573A\u65F6\u6240\u5904\u7684\u7279\u5B9A\u73AF\u5883\u6216\u5F53\u524D\u53D1\u751F\u7684\u4E8B\u4EF6", className: "min-h-24" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: `${t}-mes_example`, children: "\u4E66\u5199\u98CE\u683C\u793A\u4F8B (Message Examples)" }), e.jsxs(I, { className: "text-xs mb-2", children: ["\u4F7F\u7528 <START> \u5F00\u59CB\u4E00\u6BB5\u793A\u4F8B\uFF0C", "{{user}}", " \u4EE3\u8868\u7528\u6237"] }), e.jsx(p, { id: `${t}-mes_example`, name: "mes_example", value: l.formData.mes_example, onChange: r, placeholder: "<START>\\n{{user}}: \u4F60\u662F\u8C01\uFF1F\\n\u89D2\u8272: \u6211\u662F...", className: "min-h-48 font-mono text-xs" })] })] })] }), e.jsxs(b, { className: "border-none", value: "prompt", children: [e.jsx(_, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "Prompt \u6A21\u677F" }) }), e.jsxs(w, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(m, { htmlFor: `${t}-system_prompt`, className: "flex items-center gap-2", children: [e.jsx(A, { className: "w-4 h-4 text-blue-500" }), "\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD (System Prompt Override)"] }), e.jsx(p, { id: `${t}-system_prompt`, name: "system_prompt", value: l.formData.system_prompt, onChange: r, placeholder: "\u8986\u76D6\u89D2\u8272\u7684\u5168\u5C40\u7CFB\u7EDF\u63D0\u793A\u8BCD...", className: "min-h-48 font-mono text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(m, { htmlFor: `${t}-post_history_instructions`, className: "flex items-center gap-2", children: [e.jsx(A, { className: "w-4 h-4 text-purple-500" }), "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"] }), e.jsx(p, { id: `${t}-post_history_instructions`, name: "post_history_instructions", value: l.formData.post_history_instructions, onChange: r, placeholder: "\u7D27\u968F\u5BF9\u8BDD\u5386\u53F2\u540E\u7684\u7279\u5B9A\u6307\u4EE4\uFF08\u5F3A\u5236\u8F93\u51FA\u683C\u5F0F\u7B49\uFF09", className: "min-h-32 font-mono text-xs" })] })] })] }), e.jsxs(b, { className: "border-none", value: "meta", children: [e.jsx(_, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5143\u6570\u636E/\u5907\u6CE8" }) }), e.jsxs(w, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: `${t}-creator`, children: "\u5361\u7247\u521B\u5EFA\u8005 (Creator)" }), e.jsx(u, { id: `${t}-creator`, name: "creator", value: l.formData.creator, onChange: r, placeholder: "\u60A8\u7684\u540D\u5B57\u6216 ID" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: `${t}-character_version`, children: "\u89D2\u8272\u7248\u672C (Version)" }), e.jsx(u, { id: `${t}-character_version`, name: "character_version", value: l.formData.character_version, onChange: r, placeholder: "1.0.0" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: `${t}-creator_notes`, children: "\u521B\u5EFA\u8005\u5907\u6CE8 (Creator Notes)" }), e.jsx(p, { id: `${t}-creator_notes`, name: "creator_notes", value: l.formData.creator_notes, onChange: r, placeholder: "\u8BB0\u4E0B\u6709\u5173\u6B64\u89D2\u8272\u5361\u7684\u5F00\u53D1\u7B14\u8BB0\uFF0C\u4EC5\u5728\u5DE5\u574A\u53EF\u89C1", className: "min-h-32" })] }), e.jsx("div", { className: "pt-4", children: e.jsx(de, { value: l.formData.character_book, onChange: (i) => h.updateField("character_book", i) }) })] })] })] }) }), e.jsxs(Z, { className: "flex justify-between border-t py-6 bg-muted/10", children: [e.jsxs(N, { variant: "ghost", type: "button", onClick: s.onCancel, className: "rounded-lg h-11 px-6", children: [e.jsx(ne, { className: "w-4 h-4 mr-2" }), " ", "\u653E\u5F03\u4FEE\u6539"] }), e.jsxs(N, { type: "submit", className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20", children: [e.jsx(ie, { className: "w-4 h-4 mr-2" }), " ", x === "edit" ? "\u4FDD\u5B58\u4FEE\u6539" : "\u751F\u6210\u5E76\u4FDD\u5B58\u89D2\u8272\u5361"] })] })] })] });
};
export {
  ye as C
};
