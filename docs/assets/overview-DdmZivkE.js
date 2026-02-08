import { j as s } from "./react-BQpw03Eg.js";
import { L as i } from "./@tanstack-B4B5CfFY.js";
import { C as o, a as t, b as e, d, c as n } from "./card-ClPZDGV4.js";
import { B as m } from "./button-B9brLUSp.js";
import "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-B3Kybfa7.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
function L() {
  const a = [{ name: "LLM \u914D\u7F6E", path: "/config/llm", description: "\u7BA1\u7406 LLM \u6A21\u578B\u914D\u7F6E\u3001API \u5BC6\u94A5\u548C\u8C03\u7528\u53C2\u6570\u3002" }];
  return s.jsxs("div", { className: "space-y-6", children: [s.jsx("h1", { className: "text-2xl font-bold", children: "\u914D\u7F6E\u7BA1\u7406\u6982\u89C8" }), s.jsx("p", { className: "text-muted-foreground", children: "\u8FD9\u91CC\u60A8\u53EF\u4EE5\u7BA1\u7406\u672C\u5E94\u7528\u4E2D\u7684\u5404\u79CD\u914D\u7F6E\uFF0C\u5305\u62EC\u5E94\u7528\u8BBE\u7F6E\u3001\u7528\u6237\u504F\u597D\u548C\u7CFB\u7EDF\u53C2\u6570\u3002" }), s.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4", children: a.map((r) => s.jsxs(o, { className: "hover:shadow-md transition-shadow", children: [s.jsx(t, { children: s.jsx(e, { className: "text-lg", children: r.name }) }), s.jsxs(d, { children: [s.jsx(n, { className: "mb-4", children: r.description }), s.jsx(m, { asChild: true, children: s.jsx(i, { to: r.path, children: "\u67E5\u770B\u8BE6\u60C5" }) })] })] }, r.path)) })] });
}
export {
  L as component
};
