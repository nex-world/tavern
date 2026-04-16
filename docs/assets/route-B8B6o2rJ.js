import { v as t, j as e } from "./react-gFHNOnf5.js";
import { L as a, O as d } from "./@tanstack-DDpiKjUN.js";
import { C as m, a as n, b as c, d as i } from "./card-B4CxGEM-.js";
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
function w() {
  const o = t(s);
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs(m, { children: [e.jsx(n, { children: e.jsx(c, { className: "text-base", children: "TMDB \u8FD0\u884C\u914D\u7F6E" }) }), e.jsxs(i, { className: "space-y-2", children: [e.jsx(l, { htmlFor: "tmdb-token-global", children: "Read Access Token" }), e.jsx(p, { id: "tmdb-token-global", type: "password", value: o.tmdbAccessToken, placeholder: "\u5FC5\u586B\uFF1ABearer Token\uFF08\u4E0D\u5305\u542B Bearer \u524D\u7F00\uFF09", onChange: (r) => {
    s.tmdbAccessToken = r.target.value;
  } })] })] }), e.jsxs("nav", { className: "flex flex-wrap gap-2 border rounded-lg p-1 bg-muted/30", children: [e.jsx(a, { to: "/tmdb", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "\u603B\u89C8" }), e.jsx(a, { to: "/tmdb/discover", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "\u641C\u7D22\u4E0E\u8BE6\u60C5" }), e.jsx(a, { to: "/tmdb/api-lab", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "API \u5B9E\u9A8C\u53F0" })] }), e.jsx(d, {})] });
}
export {
  w as component
};
