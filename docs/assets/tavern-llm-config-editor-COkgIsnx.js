import { j as e, H as K, J as R, K as U, L as D, _ as f, r as x } from "./react-gFHNOnf5.js";
import { B as h } from "./button-D3G-RLOw.js";
import { c as A } from "./components-and-styling-lnR2ABT4.js";
import { c as o } from "./shadcn-utils-BMZD7_jZ.js";
import { L as j } from "./label-BU_LC6Ti.js";
import { S as z, a as I, b as _, c as V, d as u } from "./select-BkM7Xz_F.js";
import { C as E } from "./checkbox-DcACMCG8.js";
import { l as O, y as H, c as J } from "./icons-CW-0NDo_.js";
import { D as i } from "./draft-field-DvA8Eubc.js";
import { u as $ } from "./global-llm-config.store-BYX0tcdb.js";
const q = A("flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2", { variants: { orientation: { horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none", vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none" } }, defaultVariants: { orientation: "horizontal" } });
function Q({ className: a, orientation: t, ...l }) {
  return e.jsx("div", { role: "group", "data-slot": "button-group", "data-orientation": t, className: o(q({ orientation: t }), a), ...l });
}
function B({ className: a, ...t }) {
  return e.jsx("fieldset", { "data-slot": "field-set", className: o("flex flex-col gap-6", "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", a), ...t });
}
function G({ className: a, variant: t = "legend", ...l }) {
  return e.jsx("legend", { "data-slot": "field-legend", "data-variant": t, className: o("mb-3 font-medium", "data-[variant=legend]:text-base", "data-[variant=label]:text-sm", a), ...l });
}
function M({ className: a, ...t }) {
  return e.jsx("div", { "data-slot": "field-group", className: o("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4", a), ...t });
}
const W = A("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", { variants: { orientation: { vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"], horizontal: ["flex-row items-center", "[&>[data-slot=field-label]]:flex-auto", "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"], responsive: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto", "@md/field-group:[&>[data-slot=field-label]]:flex-auto", "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"] } }, defaultVariants: { orientation: "vertical" } });
function c({ className: a, orientation: t = "vertical", ...l }) {
  return e.jsx("div", { role: "group", "data-slot": "field", "data-orientation": t, className: o(W({ orientation: t }), a), ...l });
}
function m({ className: a, ...t }) {
  return e.jsx(j, { "data-slot": "field-label", className: o("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4", "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10", a), ...t });
}
function X({ ...a }) {
  return e.jsx(K, { "data-slot": "popover", ...a });
}
function Y({ ...a }) {
  return e.jsx(R, { "data-slot": "popover-trigger", ...a });
}
function Z({ className: a, align: t = "center", sideOffset: l = 4, ...d }) {
  return e.jsx(U, { children: e.jsx(D, { "data-slot": "popover-content", align: t, sideOffset: l, className: o("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", a), ...d }) });
}
function ee({ className: a, ...t }) {
  return e.jsx(f, { "data-slot": "command", className: o("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", a), ...t });
}
function ae({ className: a, ...t }) {
  return e.jsxs("div", { "data-slot": "command-input-wrapper", className: "flex h-9 items-center gap-2 border-b px-3", children: [e.jsx(O, { className: "size-4 shrink-0 opacity-50" }), e.jsx(f.Input, { "data-slot": "command-input", className: o("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", a), ...t })] });
}
function te({ className: a, ...t }) {
  return e.jsx(f.List, { "data-slot": "command-list", className: o("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", a), ...t });
}
function se({ ...a }) {
  return e.jsx(f.Empty, { "data-slot": "command-empty", className: "py-6 text-center text-sm", ...a });
}
function le({ className: a, ...t }) {
  return e.jsx(f.Group, { "data-slot": "command-group", className: o("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", a), ...t });
}
function oe({ className: a, ...t }) {
  return e.jsx(f.Item, { "data-slot": "command-item", className: o("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", a), ...t });
}
function re({ config: a, setConfig: t, models: l, isFetchingModels: d, fetchModels: k, customParamList: v, addCustomParam: S, updateCustomParam: g, removeCustomParam: P }) {
  var _a;
  const b = x.useId(), N = x.useId(), [p, y] = x.useState(""), [w, L] = x.useState("string"), [C, r] = x.useState(""), [F, T] = x.useState(false);
  return e.jsxs("div", { className: "space-y-1", children: [e.jsxs(B, { children: [e.jsx(G, { children: "API Configuration" }), e.jsxs(M, { className: "space-y-1", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-1", children: [e.jsxs(c, { children: [e.jsx(m, { children: "Base URL" }), e.jsx(i, { value: a.baseUrl, onCommit: (s) => t({ baseUrl: s }), placeholder: "https://api.example.com" })] }), e.jsxs(c, { children: [e.jsx(m, { children: "API Key" }), e.jsx(i, { type: "password", value: a.apiKey, onCommit: (s) => t({ apiKey: s }), placeholder: "sk-..." })] })] }), e.jsxs(c, { children: [e.jsx(m, { children: "Model" }), e.jsxs(Q, { className: "w-full", children: [e.jsxs(X, { open: F, onOpenChange: T, children: [e.jsx(Y, { asChild: true, children: e.jsxs(h, { variant: "outline", role: "combobox", "aria-expanded": F, className: "justify-between flex-1", size: "sm", children: [a.model ? (_a = l.find((s) => s.id === a.model)) == null ? void 0 : _a.id : "Select model...", e.jsx(H, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })] }) }), e.jsx(Z, { className: "w-full p-0", children: e.jsxs(ee, { children: [e.jsx(ae, { placeholder: "Search model..." }), e.jsxs(te, { children: [e.jsx(se, { children: "No model found." }), e.jsx(le, { children: l.map((s) => e.jsxs(oe, { value: s.id, onSelect: (n) => {
    t({ model: n === a.model ? "" : n }), T(false);
  }, children: [e.jsx(J, { className: `mr-2 h-4 w-4 ${a.model === s.id ? "opacity-100" : "opacity-0"}` }), s.id, " (", s.owned_by, ")"] }, s.id)) })] })] }) })] }), e.jsx(h, { size: "sm", onClick: k, disabled: d, children: d ? "Fetching..." : "Fetch Models" })] })] }), e.jsxs("div", { className: "flex items-center space-x-1", children: [e.jsx(E, { id: b, checked: a.stream, onCheckedChange: (s) => t({ stream: s }) }), e.jsx(j, { htmlFor: b, children: "Enable Streaming" })] }), e.jsxs("div", { className: "flex items-center space-x-1", children: [e.jsx(E, { id: N, checked: a.logprobs, onCheckedChange: (s) => t({ logprobs: s }) }), e.jsx(j, { htmlFor: N, children: "Enable Logprobs" })] }), a.logprobs && e.jsxs(c, { children: [e.jsx(m, { children: "Top Logprobs" }), e.jsx(i, { type: "number", value: String(a.topLogprobs), onCommit: (s) => t({ topLogprobs: Number(s) }), min: 0, max: 20 })] })] })] }), e.jsxs(B, { children: [e.jsx(G, { children: "Custom Parameters" }), e.jsxs(M, { className: "space-y-1", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-1", children: [e.jsxs(c, { children: [e.jsx(m, { children: "Parameter Name" }), e.jsx(i, { value: p, onCommit: (s) => y(s), placeholder: "e.g., temperature" })] }), e.jsxs(c, { children: [e.jsx(m, { children: "Type" }), e.jsxs(z, { value: w, onValueChange: (s) => L(s), children: [e.jsx(I, { children: e.jsx(_, {}) }), e.jsxs(V, { children: [e.jsx(u, { value: "string", children: "String" }), e.jsx(u, { value: "number", children: "Number" }), e.jsx(u, { value: "boolean", children: "Boolean" })] })] })] }), e.jsxs(c, { children: [e.jsx(m, { children: "Value" }), e.jsx(i, { value: C, onCommit: (s) => r(s), placeholder: "e.g., 0.7" })] }), e.jsx("div", { className: "flex items-end", children: e.jsx(h, { size: "sm", onClick: () => {
    p.trim() && (S({ name: p.trim(), type: w, value: C }), y(""), r(""));
  }, disabled: !p.trim(), children: "Add Parameter" }) })] }), v.length > 0 && e.jsxs("div", { className: "space-y-0.5", children: [e.jsx(j, { children: "Current Parameters:" }), e.jsx("div", { className: "space-y-0.5", children: v.map((s) => e.jsxs("div", { className: "flex items-center gap-0.5 p-0.5 border rounded", children: [e.jsx(i, { value: s.name, onCommit: (n) => g(s.id, { name: n }), className: "flex-1", placeholder: "Parameter name" }), e.jsxs(z, { value: s.type, onValueChange: (n) => g(s.id, { type: n }), children: [e.jsx(I, { className: "w-16", children: e.jsx(_, {}) }), e.jsxs(V, { children: [e.jsx(u, { value: "string", children: "String" }), e.jsx(u, { value: "number", children: "Number" }), e.jsx(u, { value: "boolean", children: "Boolean" })] })] }), e.jsx(i, { value: s.value, onCommit: (n) => g(s.id, { value: n }), className: "flex-1", placeholder: "Value" }), e.jsx(h, { variant: "outline", size: "sm", onClick: () => P(s.id), children: "Remove" })] }, s.id)) })] })] })] })] });
}
function ge() {
  const { config: a, setConfig: t, activeServiceId: l, serviceList: d, setActiveServiceId: k, updateServiceName: v, addService: S, removeService: g, models: P, isFetchingModels: b, fetchModels: N, customParamList: p, addCustomParam: y, updateCustomParam: w, removeCustomParam: L } = $(), C = d.find((r) => r.id === l);
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "rounded-md border p-3 space-y-3", children: [e.jsx(j, { children: "\u5F53\u524D\u670D\u52A1" }), e.jsx(i, { value: (C == null ? void 0 : C.name) || "", onCommit: (r) => v(l, r), placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u540D\u79F0", className: "w-full md:w-80" }), e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [e.jsxs(z, { value: l, onValueChange: k, children: [e.jsx(I, { className: "w-full md:w-80", children: e.jsx(_, { placeholder: "\u8BF7\u9009\u62E9\u670D\u52A1" }) }), e.jsx(V, { children: d.map((r) => e.jsx(u, { value: r.id, children: r.name }, r.id)) })] }), e.jsx(h, { type: "button", variant: "secondary", onClick: S, children: "\u65B0\u589E\u670D\u52A1" }), e.jsx(h, { type: "button", variant: "outline", onClick: () => g(l), disabled: d.length <= 1, children: "\u5220\u9664\u5F53\u524D\u670D\u52A1" })] })] }), e.jsx(re, { config: a, setConfig: t, models: P, isFetchingModels: b, fetchModels: N, customParamList: p, addCustomParam: y, updateCustomParam: w, removeCustomParam: L })] });
}
export {
  ge as T
};
