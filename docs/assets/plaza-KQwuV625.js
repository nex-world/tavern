import { j as a } from "./react-BQpw03Eg.js";
import { g as n, L as s, O as c } from "./@tanstack-B4B5CfFY.js";
import { T as o, a as t, b as e } from "./tabs-CfJoSLaG.js";
import "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-B3Kybfa7.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
function f() {
  const l = n(), r = l.pathname.includes("challenges") ? "challenges" : l.pathname.includes("group-chat") ? "group-chat" : l.pathname.includes("dnd") ? "dnd" : l.pathname.includes("small-town") ? "small-town" : "characters";
  return a.jsxs("div", { className: "flex flex-col h-full overflow-y-auto", children: [a.jsx("div", { className: "border-b px-6 py-2 bg-muted/20", children: a.jsx(o, { value: r, className: "w-fit", children: a.jsxs(t, { children: [a.jsx(s, { to: "/plaza/characters", children: a.jsx(e, { value: "characters", children: "\u89D2\u8272\u5361" }) }), a.jsx(s, { to: "/plaza/challenges", children: a.jsx(e, { value: "challenges", className: "cursor-pointer", children: "\u6311\u6218\u5361" }) }), a.jsx(s, { to: "/plaza/dnd", children: a.jsx(e, { value: "dnd", className: "cursor-pointer", children: "DnD \u5192\u9669" }) }), a.jsx(s, { to: "/plaza/group-chat", children: a.jsx(e, { value: "group-chat", className: "cursor-pointer", children: "\u7FA4\u804A" }) }), a.jsx(s, { to: "/plaza/small-town", children: a.jsx(e, { value: "small-town", className: "cursor-pointer", children: "\u5C0F\u9547" }) })] }) }) }), a.jsx("div", { className: "p-6", children: a.jsx(c, {}) })] });
}
export {
  f as component
};
