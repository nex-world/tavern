import { v as o, j as a } from "./react-gFHNOnf5.js";
import { L as e, O as d } from "./@tanstack-DDpiKjUN.js";
import { C as m, a as c, b as n, d as i } from "./card-B4CxGEM-.js";
import { I as p } from "./input-KwncZLGm.js";
import { L as l } from "./label-BU_LC6Ti.js";
import { b as s } from "./bangumi-store-D4IfMGL6.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
function L() {
  const r = o(s);
  return a.jsxs("div", { className: "space-y-4", children: [a.jsxs(m, { children: [a.jsx(c, { children: a.jsx(n, { className: "text-base", children: "my9 API \u8FD0\u884C\u914D\u7F6E" }) }), a.jsxs(i, { className: "space-y-2", children: [a.jsx(l, { htmlFor: "my9-base-url", children: "Base URL" }), a.jsx(p, { id: "my9-base-url", value: r.my9BaseUrl, onChange: (t) => {
    s.my9BaseUrl = t.target.value;
  }, placeholder: "https://my9.shatranj.space/api/" })] })] }), a.jsxs("nav", { className: "flex flex-wrap gap-2 border rounded-lg p-1 bg-muted/30", children: [a.jsx(e, { to: "/my9", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "\u603B\u89C8" }), a.jsx(e, { to: "/my9/subjects-search", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "subjects/search" }), a.jsx(e, { to: "/my9/trends", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "trends" }), a.jsx(e, { to: "/my9/custom-search", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "custom/search" }), a.jsx(e, { to: "/my9/api-lab", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "API \u5B9E\u9A8C\u53F0" })] }), a.jsx(d, {})] });
}
export {
  L as component
};
