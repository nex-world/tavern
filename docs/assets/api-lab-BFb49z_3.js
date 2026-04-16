import { v as O, r as t, j as e } from "./react-gFHNOnf5.js";
import { B as P } from "./button-D3G-RLOw.js";
import { C as m, a as h, b as u, c as q, d as x } from "./card-B4CxGEM-.js";
import { I as B } from "./input-KwncZLGm.js";
import { L as r } from "./label-BU_LC6Ti.js";
import { S as E, a as I, b as J, c as L, d as p } from "./select-BkM7Xz_F.js";
import { T as j } from "./textarea-DqdRyzs9.js";
import { b as R } from "./bangumi-store-D4IfMGL6.js";
import { B as k } from "./bangumi-page-header-CjBVz-6c.js";
import { m as F } from "./my9-client-CnYUKa6h.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./icons-CW-0NDo_.js";
import "./badge-C9CmQsZA.js";
function se() {
  const y = O(R), [a, S] = t.useState("GET"), [i, g] = t.useState("/subjects/search"), [o, v] = t.useState('{"q":"eva","kind":"anime"}'), [n, f] = t.useState("{}"), [l, c] = t.useState(false), [d, b] = t.useState(null);
  async function N() {
    try {
      c(true);
      const s = o.trim() ? JSON.parse(o) : void 0, T = a === "POST" && n.trim() ? JSON.parse(n) : void 0, C = await F({ baseUrl: y.my9BaseUrl, path: i, method: a, query: s, body: T });
      b(C);
    } finally {
      c(false);
    }
  }
  return e.jsxs("div", { className: "space-y-4", children: [e.jsx(k, { title: "my9 API \u5B9E\u9A8C\u53F0", description: "\u652F\u6301\u4EFB\u610F my9 \u8DEF\u5F84\u8C03\u8BD5\uFF0C\u9ED8\u8BA4\u805A\u7126 q + kind \u573A\u666F\u3002", badge: "api-lab" }), e.jsxs(m, { children: [e.jsxs(h, { children: [e.jsx(u, { children: "\u8BF7\u6C42\u914D\u7F6E" }), e.jsx(q, { children: "\u5E38\u7528\u8DEF\u5F84\uFF1A/subjects/search /trends /custom/search" })] }), e.jsxs(x, { className: "space-y-3", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(r, { children: "Method" }), e.jsxs(E, { value: a, onValueChange: (s) => S(s), children: [e.jsx(I, { children: e.jsx(J, { placeholder: "method" }) }), e.jsxs(L, { children: [e.jsx(p, { value: "GET", children: "GET" }), e.jsx(p, { value: "POST", children: "POST" })] })] })] }), e.jsxs("div", { className: "space-y-2 md:col-span-3", children: [e.jsx(r, { htmlFor: "my9-path", children: "Path" }), e.jsx(B, { id: "my9-path", value: i, onChange: (s) => g(s.target.value) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(r, { htmlFor: "my9-query-json", children: "Query JSON" }), e.jsx(j, { id: "my9-query-json", className: "min-h-24", value: o, onChange: (s) => v(s.target.value) })] }), a === "POST" ? e.jsxs("div", { className: "space-y-2", children: [e.jsx(r, { htmlFor: "my9-body-json", children: "Body JSON" }), e.jsx(j, { id: "my9-body-json", className: "min-h-24", value: n, onChange: (s) => f(s.target.value) })] }) : null, e.jsx(P, { type: "button", onClick: N, disabled: l, children: l ? "\u8BF7\u6C42\u4E2D..." : "\u6267\u884C\u8BF7\u6C42" })] })] }), e.jsxs(m, { children: [e.jsx(h, { children: e.jsx(u, { children: "\u54CD\u5E94" }) }), e.jsx(x, { children: d === null ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u6682\u65E0\u54CD\u5E94\u3002" }) : e.jsx("pre", { className: "text-xs bg-muted/50 p-3 rounded-md overflow-x-auto", children: JSON.stringify(d, null, 2) }) })] })] });
}
export {
  se as component
};
