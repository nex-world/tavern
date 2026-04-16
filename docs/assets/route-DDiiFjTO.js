import { v as n, j as e } from "./react-gFHNOnf5.js";
import { L as a, O as c } from "./@tanstack-DDpiKjUN.js";
import { I as t } from "./input-KwncZLGm.js";
import { L as d } from "./label-BU_LC6Ti.js";
import { C as i, a as m, b as g, d as l } from "./card-B4CxGEM-.js";
import { b as r } from "./bangumi-store-D4IfMGL6.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
function L() {
  const o = n(r);
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs(i, { children: [e.jsx(m, { children: e.jsx(g, { className: "text-base", children: "Bangumi \u8FD0\u884C\u914D\u7F6E" }) }), e.jsxs(l, { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: "bgm-token", children: "Access Token" }), e.jsx(t, { id: "bgm-token", type: "password", value: o.accessToken, placeholder: "\u53EF\u9009\uFF0C\u7528\u4E8E\u9700\u8981\u6388\u6743\u7684\u63A5\u53E3", onChange: (s) => {
    r.accessToken = s.target.value;
  } })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: "bgm-username", children: "\u7528\u6237\u540D" }), e.jsx(t, { id: "bgm-username", value: o.username, placeholder: "\u4F8B\u5982\uFF1Asai", onChange: (s) => {
    r.username = s.target.value;
  } })] })] })] }), e.jsxs("nav", { className: "flex flex-wrap gap-2 border rounded-lg p-1 bg-muted/30", children: [e.jsx(a, { to: "/bangumi", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "\u603B\u89C8" }), e.jsx(a, { to: "/bangumi/discover", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "\u53D1\u73B0" }), e.jsx(a, { to: "/bangumi/entities", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "\u6761\u76EE\u5173\u7CFB" }), e.jsx(a, { to: "/bangumi/users", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "\u7528\u6237\u4E0E\u6536\u85CF" }), e.jsx(a, { to: "/bangumi/revisions", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "\u7F16\u8F91\u5386\u53F2" }), e.jsx(a, { to: "/bangumi/api-lab", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "API \u5B9E\u9A8C\u53F0" })] }), e.jsx(c, {})] });
}
export {
  L as component
};
