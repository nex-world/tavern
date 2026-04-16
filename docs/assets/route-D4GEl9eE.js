import { v as i, j as e } from "./react-gFHNOnf5.js";
import { L as a, O as d } from "./@tanstack-DDpiKjUN.js";
import { C as c, a as m, b as u, d as l } from "./card-B4CxGEM-.js";
import { I as n } from "./input-KwncZLGm.js";
import { L as o } from "./label-BU_LC6Ti.js";
import { b as t } from "./bangumi-store-D4IfMGL6.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
function w() {
  const r = i(t);
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs(c, { children: [e.jsx(m, { children: e.jsx(u, { className: "text-base", children: "iTunes \u8FD0\u884C\u914D\u7F6E" }) }), e.jsxs(l, { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(o, { htmlFor: "itunes-country", children: "Country" }), e.jsx(n, { id: "itunes-country", value: r.itunesCountry, onChange: (s) => {
    t.itunesCountry = s.target.value;
  } })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(o, { htmlFor: "itunes-lang", children: "Lang" }), e.jsx(n, { id: "itunes-lang", value: r.itunesLang, onChange: (s) => {
    t.itunesLang = s.target.value;
  } })] })] })] }), e.jsxs("nav", { className: "flex flex-wrap gap-2 border rounded-lg p-1 bg-muted/30", children: [e.jsx(a, { to: "/itunes", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "\u603B\u89C8" }), e.jsx(a, { to: "/itunes/discover", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "\u641C\u7D22\u4E0E\u67E5\u627E" }), e.jsx(a, { to: "/itunes/api-lab", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "API \u5B9E\u9A8C\u53F0" })] }), e.jsx(d, {})] });
}
export {
  w as component
};
