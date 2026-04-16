import { r as d, j as e } from "./react-gFHNOnf5.js";
import { C as s, a as r, b as i, d as t, c as l } from "./card-B4CxGEM-.js";
import { B as x } from "./badge-C9CmQsZA.js";
import { B as m } from "./bangumi-page-header-CjBVz-6c.js";
import { i as a } from "./itunes-openapi--yCAZ3Wb.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
function B() {
  const n = d.useMemo(() => a.reduce((o, c) => o + c.operations.length, 0), []);
  return e.jsxs("div", { className: "space-y-4", children: [e.jsx(m, { title: "iTunes Search API", description: "\u8986\u76D6 Apple iTunes Search API \u7684 search/lookup \u80FD\u529B\uFF0C\u5E76\u63D0\u4F9B\u53EF\u89C6\u5316\u8C03\u8BD5\u3002", badge: "iTunes" }), e.jsxs("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [e.jsxs(s, { children: [e.jsx(r, { children: e.jsx(i, { className: "text-base", children: "\u63A5\u53E3\u5206\u7EC4" }) }), e.jsx(t, { children: e.jsx("p", { className: "text-3xl font-semibold", children: a.length }) })] }), e.jsxs(s, { children: [e.jsx(r, { children: e.jsx(i, { className: "text-base", children: "\u603B\u63A5\u53E3\u6570" }) }), e.jsx(t, { children: e.jsx("p", { className: "text-3xl font-semibold", children: n }) })] }), e.jsxs(s, { children: [e.jsx(r, { children: e.jsx(i, { className: "text-base", children: "\u9274\u6743" }) }), e.jsx(t, { children: e.jsx(x, { variant: "secondary", children: "\u65E0\u9700 Token" }) })] })] }), e.jsxs(s, { children: [e.jsxs(r, { children: [e.jsx(i, { children: "\u80FD\u529B\u8FB9\u754C" }), e.jsx(l, { children: "\u57FA\u4E8E\u5B98\u65B9\u6587\u6863\u53EF\u7A33\u5B9A\u4F7F\u7528\u7684\u6838\u5FC3\u80FD\u529B" })] }), e.jsxs(t, { className: "space-y-2 text-sm text-muted-foreground", children: [e.jsx("p", { children: "1. \u5173\u952E\u8BCD\u68C0\u7D22\uFF1A`/search`\uFF0C\u652F\u6301 media/entity/attribute \u7EC4\u5408\u3002" }), e.jsx("p", { children: "2. ID \u67E5\u627E\uFF1A`/lookup`\uFF0C\u652F\u6301 iTunes ID\u3001UPC\u3001ISBN \u7B49\u3002" }), e.jsx("p", { children: "3. \u5EFA\u8BAE\u505A\u7F13\u5B58\u4E0E\u8282\u6D41\uFF0C\u5B98\u65B9\u6587\u6863\u8BF4\u660E\u8BE5 API \u5B58\u5728\u901F\u7387\u9650\u5236\u5EFA\u8BAE\u3002" })] })] })] });
}
export {
  B as component
};
