import { j as e, G as K, H as U, J as A, K as O, _ as p, r as m } from "./react-BQpw03Eg.js";
import { B as h } from "./button-B9brLUSp.js";
import { c as R } from "./components-and-styling-lnR2ABT4.js";
import { c as o } from "./shadcn-utils-BMZD7_jZ.js";
import { I as d } from "./input-C44X3vA9.js";
import { L as v } from "./label-DMtPOVS-.js";
import { S as I, a as _, b as V, c as F, d as u } from "./select-VEltzsBv.js";
import { C as G } from "./checkbox-5kiXjLha.js";
import { l as D, a4 as H, g as J } from "./icons-BC63ChG4.js";
import { u as $ } from "./global-llm-config.store-DiEUj8Zz.js";
import { a as q } from "./index-DkZE5rMH.js";
import "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./@tailwind-COJ8Fh6m.js";
import "./id-OxPLOBIU.js";
import "./es-toolkit-CstbrnlE.js";
import "./@tanstack-B4B5CfFY.js";
import "./dexie-B3Kybfa7.js";
const Q = R("flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2", { variants: { orientation: { horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none", vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none" } }, defaultVariants: { orientation: "horizontal" } });
function W({ className: a, orientation: t, ...l }) {
  return e.jsx("div", { role: "group", "data-slot": "button-group", "data-orientation": t, className: o(Q({ orientation: t }), a), ...l });
}
function T({ className: a, ...t }) {
  return e.jsx("fieldset", { "data-slot": "field-set", className: o("flex flex-col gap-6", "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", a), ...t });
}
function B({ className: a, variant: t = "legend", ...l }) {
  return e.jsx("legend", { "data-slot": "field-legend", "data-variant": t, className: o("mb-3 font-medium", "data-[variant=legend]:text-base", "data-[variant=label]:text-sm", a), ...l });
}
function E({ className: a, ...t }) {
  return e.jsx("div", { "data-slot": "field-group", className: o("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4", a), ...t });
}
const X = R("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", { variants: { orientation: { vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"], horizontal: ["flex-row items-center", "[&>[data-slot=field-label]]:flex-auto", "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"], responsive: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto", "@md/field-group:[&>[data-slot=field-label]]:flex-auto", "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"] } }, defaultVariants: { orientation: "vertical" } });
function n({ className: a, orientation: t = "vertical", ...l }) {
  return e.jsx("div", { role: "group", "data-slot": "field", "data-orientation": t, className: o(X({ orientation: t }), a), ...l });
}
function i({ className: a, ...t }) {
  return e.jsx(v, { "data-slot": "field-label", className: o("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4", "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10", a), ...t });
}
function Y({ ...a }) {
  return e.jsx(K, { "data-slot": "popover", ...a });
}
function Z({ ...a }) {
  return e.jsx(U, { "data-slot": "popover-trigger", ...a });
}
function ee({ className: a, align: t = "center", sideOffset: l = 4, ...c }) {
  return e.jsx(A, { children: e.jsx(O, { "data-slot": "popover-content", align: t, sideOffset: l, className: o("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", a), ...c }) });
}
function ae({ className: a, ...t }) {
  return e.jsx(p, { "data-slot": "command", className: o("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", a), ...t });
}
function te({ className: a, ...t }) {
  return e.jsxs("div", { "data-slot": "command-input-wrapper", className: "flex h-9 items-center gap-2 border-b px-3", children: [e.jsx(D, { className: "size-4 shrink-0 opacity-50" }), e.jsx(p.Input, { "data-slot": "command-input", className: o("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", a), ...t })] });
}
function se({ className: a, ...t }) {
  return e.jsx(p.List, { "data-slot": "command-list", className: o("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", a), ...t });
}
function le({ ...a }) {
  return e.jsx(p.Empty, { "data-slot": "command-empty", className: "py-6 text-center text-sm", ...a });
}
function oe({ className: a, ...t }) {
  return e.jsx(p.Group, { "data-slot": "command-group", className: o("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", a), ...t });
}
function re({ className: a, ...t }) {
  return e.jsx(p.Item, { "data-slot": "command-item", className: o("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", a), ...t });
}
function de({ config: a, setConfig: t, models: l, isFetchingModels: c, fetchModels: b, customParamList: f, addCustomParam: N, updateCustomParam: x, removeCustomParam: y }) {
  var _a;
  const g = m.useId(), w = m.useId(), [j, C] = m.useState(""), [k, M] = m.useState("string"), [P, S] = m.useState(""), [L, z] = m.useState(false);
  return e.jsxs("div", { className: "space-y-1", children: [e.jsxs(T, { children: [e.jsx(B, { children: "API Configuration" }), e.jsxs(E, { className: "space-y-1", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-1", children: [e.jsxs(n, { children: [e.jsx(i, { children: "Base URL" }), e.jsx(d, { value: a.baseUrl, onChange: (s) => t({ baseUrl: s.target.value }), placeholder: "https://api.example.com" })] }), e.jsxs(n, { children: [e.jsx(i, { children: "API Key" }), e.jsx(d, { type: "password", value: a.apiKey, onChange: (s) => t({ apiKey: s.target.value }), placeholder: "sk-..." })] })] }), e.jsxs(n, { children: [e.jsx(i, { children: "Model" }), e.jsxs(W, { className: "w-full", children: [e.jsxs(Y, { open: L, onOpenChange: z, children: [e.jsx(Z, { asChild: true, children: e.jsxs(h, { variant: "outline", role: "combobox", "aria-expanded": L, className: "justify-between flex-1", size: "sm", children: [a.model ? (_a = l.find((s) => s.id === a.model)) == null ? void 0 : _a.id : "Select model...", e.jsx(H, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })] }) }), e.jsx(ee, { className: "w-full p-0", children: e.jsxs(ae, { children: [e.jsx(te, { placeholder: "Search model..." }), e.jsxs(se, { children: [e.jsx(le, { children: "No model found." }), e.jsx(oe, { children: l.map((s) => e.jsxs(re, { value: s.id, onSelect: (r) => {
    t({ model: r === a.model ? "" : r }), z(false);
  }, children: [e.jsx(J, { className: `mr-2 h-4 w-4 ${a.model === s.id ? "opacity-100" : "opacity-0"}` }), s.id, " (", s.owned_by, ")"] }, s.id)) })] })] }) })] }), e.jsx(h, { size: "sm", onClick: b, disabled: c, children: c ? "Fetching..." : "Fetch Models" })] })] }), e.jsxs("div", { className: "flex items-center space-x-1", children: [e.jsx(G, { id: g, checked: a.stream, onCheckedChange: (s) => t({ stream: s }) }), e.jsx(v, { htmlFor: g, children: "Enable Streaming" })] }), e.jsxs("div", { className: "flex items-center space-x-1", children: [e.jsx(G, { id: w, checked: a.logprobs, onCheckedChange: (s) => t({ logprobs: s }) }), e.jsx(v, { htmlFor: w, children: "Enable Logprobs" })] }), a.logprobs && e.jsxs(n, { children: [e.jsx(i, { children: "Top Logprobs" }), e.jsx(d, { type: "number", value: a.topLogprobs, onChange: (s) => t({ topLogprobs: Number(s.target.value) }), min: 0, max: 20 })] })] })] }), e.jsxs(T, { children: [e.jsx(B, { children: "Custom Parameters" }), e.jsxs(E, { className: "space-y-1", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-1", children: [e.jsxs(n, { children: [e.jsx(i, { children: "Parameter Name" }), e.jsx(d, { value: j, onChange: (s) => C(s.target.value), placeholder: "e.g., temperature" })] }), e.jsxs(n, { children: [e.jsx(i, { children: "Type" }), e.jsxs(I, { value: k, onValueChange: (s) => M(s), children: [e.jsx(_, { children: e.jsx(V, {}) }), e.jsxs(F, { children: [e.jsx(u, { value: "string", children: "String" }), e.jsx(u, { value: "number", children: "Number" }), e.jsx(u, { value: "boolean", children: "Boolean" })] })] })] }), e.jsxs(n, { children: [e.jsx(i, { children: "Value" }), e.jsx(d, { value: P, onChange: (s) => S(s.target.value), placeholder: "e.g., 0.7" })] }), e.jsx("div", { className: "flex items-end", children: e.jsx(h, { size: "sm", onClick: () => {
    j.trim() && (N({ name: j.trim(), type: k, value: P }), C(""), S(""));
  }, disabled: !j.trim(), children: "Add Parameter" }) })] }), f.length > 0 && e.jsxs("div", { className: "space-y-0.5", children: [e.jsx(v, { children: "Current Parameters:" }), e.jsx("div", { className: "space-y-0.5", children: f.map((s) => e.jsxs("div", { className: "flex items-center gap-0.5 p-0.5 border rounded", children: [e.jsx(d, { value: s.name, onChange: (r) => x(s.id, { name: r.target.value }), className: "flex-1", placeholder: "Parameter name" }), e.jsxs(I, { value: s.type, onValueChange: (r) => x(s.id, { type: r }), children: [e.jsx(_, { className: "w-16", children: e.jsx(V, {}) }), e.jsxs(F, { children: [e.jsx(u, { value: "string", children: "String" }), e.jsx(u, { value: "number", children: "Number" }), e.jsx(u, { value: "boolean", children: "Boolean" })] })] }), e.jsx(d, { value: s.value, onChange: (r) => x(s.id, { value: r.target.value }), className: "flex-1", placeholder: "Value" }), e.jsx(h, { variant: "outline", size: "sm", onClick: () => y(s.id), children: "Remove" })] }, s.id)) })] })] })] })] });
}
function Se() {
  const a = q.useNavigate(), { config: t, setConfig: l, models: c, isFetchingModels: b, fetchModels: f, customParamList: N, addCustomParam: x, updateCustomParam: y, removeCustomParam: g } = $();
  return e.jsxs("div", { className: "container max-w-4xl mx-auto p-4 space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("h1", { className: "text-3xl font-bold", children: "\u5168\u5C40 LLM \u914D\u7F6E" }), e.jsx(h, { onClick: () => a({ to: ".." }), children: "\u8FD4\u56DE" })] }), e.jsx(de, { config: t, setConfig: l, models: c, isFetchingModels: b, fetchModels: f, customParamList: N, addCustomParam: x, updateCustomParam: y, removeCustomParam: g })] });
}
export {
  Se as component
};
