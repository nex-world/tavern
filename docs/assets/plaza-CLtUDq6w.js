import { j as a } from "./react-gFHNOnf5.js";
import { g as o, L as s, O as c } from "./@tanstack-DDpiKjUN.js";
import { T as n, a as t, b as e } from "./tabs-DYyOSGrZ.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
function f() {
  const r = o(), l = r.pathname.includes("challenges") ? "challenges" : r.pathname.includes("group-chat") ? "group-chat" : r.pathname.includes("dnd") ? "dnd" : r.pathname.includes("small-town") ? "small-town" : "characters";
  return a.jsxs("div", { className: "flex flex-col h-full overflow-hidden", children: [a.jsx("div", { className: "sticky top-0 z-30 border-b bg-background/5 ---backdrop-blur ---supports-backdrop-filter:bg-background/2", children: a.jsx("div", { className: "px-4 md:px-6 py-2 overflow-x-auto no-scrollbar", children: a.jsx(n, { value: l, className: "w-fit", children: a.jsxs(t, { children: [a.jsx(s, { to: "/plaza/characters", children: a.jsx(e, { value: "characters", children: "\u89D2\u8272\u5361" }) }), a.jsx(s, { to: "/plaza/challenges", children: a.jsx(e, { value: "challenges", className: "cursor-pointer", children: "\u6311\u6218\u5361" }) }), a.jsx(s, { to: "/plaza/group-chat", children: a.jsx(e, { value: "group-chat", className: "cursor-pointer", children: "\u7FA4\u804A" }) }), a.jsx(s, { to: "/plaza/dnd", children: a.jsx(e, { value: "dnd", className: "cursor-pointer", children: "DnD \u5192\u9669" }) }), a.jsx(s, { to: "/plaza/small-town", children: a.jsx(e, { value: "small-town", className: "cursor-pointer", children: "\u5C0F\u9547" }) })] }) }) }) }), a.jsx("div", { className: "flex-1 overflow-y-auto p-4 md:p-6 pb-20", children: a.jsx(c, {}) })] });
}
export {
  f as component
};
