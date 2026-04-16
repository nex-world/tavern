import { j as e } from "./react-gFHNOnf5.js";
import { L as s, O as x } from "./@tanstack-DDpiKjUN.js";
import { u as r } from "./global-llm-config.store-BYX0tcdb.js";
import { B as p } from "./button-D3G-RLOw.js";
import { D as f, g as h, a as u, b as j, c as g, d as v } from "./dialog-CPE3M3ew.js";
import { T as N } from "./tavern-llm-config-editor-COkgIsnx.js";
import { B as b, U as i, H as m, e as o, f as c } from "./icons-CW-0NDo_.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./id-OxPLOBIU.js";
import "./es-toolkit-CstbrnlE.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./label-BU_LC6Ti.js";
import "./select-BkM7Xz_F.js";
import "./checkbox-DcACMCG8.js";
import "./draft-field-DvA8Eubc.js";
import "./input-KwncZLGm.js";
import "./textarea-DqdRyzs9.js";
function P() {
  var _a;
  const a = r((t) => t.config), n = r((t) => t.activeServiceId), l = ((_a = r((t) => t.serviceList).find((t) => t.id === n)) == null ? void 0 : _a.name) || "\u672A\u547D\u540D\u670D\u52A1", d = !!(a.baseUrl && a.model) ? `${l} / ${a.model}` : "\u672A\u914D\u7F6E";
  return e.jsxs("div", { className: "flex flex-col h-full overflow-hidden bg-background", children: [e.jsxs("header", { className: "hidden md:flex h-14 border-b bg-background items-center px-4 justify-between shrink-0 z-10", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs(s, { to: "/", className: "flex items-center gap-2 font-bold text-lg mr-2 md:mr-6", children: [e.jsx(b, { className: "w-5 h-5" }), e.jsx("span", { className: "hidden sm:inline", children: "NexTavern" })] }), e.jsxs("nav", { className: "hidden md:flex items-center gap-1", children: [e.jsxs(s, { to: "/plaza/characters", className: "px-3 py-1.5 text-sm font-medium rounded-md hover:bg-muted [&.active]:bg-primary/10 [&.active]:text-primary flex items-center gap-1.5", children: [e.jsx(i, { className: "w-4 h-4" }), "\u5E7F\u573A"] }), e.jsxs(s, { to: "/create", className: "px-3 py-1.5 text-sm font-medium rounded-md hover:bg-muted [&.active]:bg-primary/10 [&.active]:text-primary flex items-center gap-1.5", children: [e.jsx(m, { className: "w-4 h-4" }), "\u5DE5\u574A"] }), e.jsxs(s, { to: "/session", className: "px-3 py-1.5 text-sm font-medium rounded-md hover:bg-muted [&.active]:bg-primary/10 [&.active]:text-primary flex items-center gap-1.5", children: [e.jsx(o, { className: "w-4 h-4" }), "\u4F1A\u8BDD"] })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs(f, { children: [e.jsx(h, { asChild: true, children: e.jsx(p, { type: "button", variant: "outline", size: "sm", className: "max-w-[24rem]", children: e.jsxs("span", { className: "truncate", children: ["LLM: ", d] }) }) }), e.jsxs(u, { className: "sm:max-w-4xl max-h-[90vh] p-0 overflow-hidden", children: [e.jsxs(j, { className: "p-4 pb-2 border-b", children: [e.jsx(g, { children: "\u5168\u5C40 LLM \u914D\u7F6E" }), e.jsx(v, { children: "\u70B9\u51FB\u9876\u90E8\u72B6\u6001\u53EF\u968F\u65F6\u6253\u5F00\u6B64\u9762\u677F\uFF0C\u4FEE\u6539\u5F53\u524D\u670D\u52A1\u4E0E\u6A21\u578B\u3002" })] }), e.jsx("div", { className: "overflow-y-auto p-4", children: e.jsx(N, {}) })] })] }), e.jsxs(s, { to: "/me", className: "px-3 py-1.5 text-sm font-medium rounded-md hover:bg-muted [&.active]:bg-primary/10 [&.active]:text-primary flex items-center gap-1.5", children: [e.jsx(c, { className: "w-4 h-4" }), e.jsx("span", { className: "hidden md:inline", children: "\u6211\u7684" })] })] })] }), e.jsx("main", { className: "grow overflow-auto flex flex-col", children: e.jsx(x, {}) }), e.jsx("footer", { className: "md:hidden border-t bg-background/80 backdrop-blur-md shrink-0 z-10 pb-[env(safe-area-inset-bottom)]", children: e.jsxs("nav", { className: "flex items-center h-16", children: [e.jsxs(s, { to: "/plaza/characters", className: "flex-1 flex flex-col items-center justify-center gap-1 text-muted-foreground [&.active]:text-primary transition-colors", children: [e.jsx(i, { className: "w-5 h-5" }), e.jsx("span", { className: "text-[10px] font-medium", children: "\u5E7F\u573A" })] }), e.jsxs(s, { to: "/create", className: "flex-1 flex flex-col items-center justify-center gap-1 text-muted-foreground [&.active]:text-primary transition-colors", children: [e.jsx(m, { className: "w-5 h-5" }), e.jsx("span", { className: "text-[10px] font-medium", children: "\u5DE5\u574A" })] }), e.jsxs(s, { to: "/session", className: "flex-1 flex flex-col items-center justify-center gap-1 text-muted-foreground [&.active]:text-primary transition-colors", children: [e.jsx(o, { className: "w-5 h-5" }), e.jsx("span", { className: "text-[10px] font-medium", children: "\u4F1A\u8BDD" })] }), e.jsxs(s, { to: "/me", className: "flex-1 flex flex-col items-center justify-center gap-1 text-muted-foreground [&.active]:text-primary transition-colors", children: [e.jsx(c, { className: "w-5 h-5" }), e.jsx("span", { className: "text-[10px] font-medium", children: "\u6211\u7684" })] })] }) })] });
}
export {
  P as component
};
