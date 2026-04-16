import { v as S, r as t, j as e } from "./react-gFHNOnf5.js";
import { B as y } from "./button-D3G-RLOw.js";
import { C as n, a as m, b as l, c as d, d as u } from "./card-B4CxGEM-.js";
import { I as C } from "./input-KwncZLGm.js";
import { L as p } from "./label-BU_LC6Ti.js";
import { S as b, a as v, b as q, c as N, d as B } from "./select-BkM7Xz_F.js";
import { b as E } from "./bangumi-store-D4IfMGL6.js";
import { B as T } from "./bangumi-page-header-CjBVz-6c.js";
import { m as I } from "./my9-client-CnYUKa6h.js";
import { c as L } from "./my9-constants-aq-BUJrZ.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./icons-CW-0NDo_.js";
import "./badge-C9CmQsZA.js";
function K() {
  var _a;
  const h = S(E), [o, x] = t.useState("bangumi"), [r, j] = t.useState(""), [c, i] = t.useState(false), [a, f] = t.useState(null);
  async function g() {
    if (r.trim()) try {
      i(true);
      const s = await I({ baseUrl: h.my9BaseUrl, path: "/custom/search", method: "GET", query: { source: o, q: r } });
      f(s);
    } finally {
      i(false);
    }
  }
  return e.jsxs("div", { className: "space-y-4", children: [e.jsx(T, { title: "my9 custom/search", description: "\u6309 source + q \u505A\u5B9A\u5236\u6570\u636E\u6E90\u641C\u7D22\u3002", badge: "custom" }), e.jsxs(n, { children: [e.jsxs(m, { children: [e.jsx(l, { children: "\u67E5\u8BE2\u53C2\u6570" }), e.jsx(d, { children: "GET /custom/search?source&q" })] }), e.jsxs(u, { className: "grid grid-cols-1 md:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(p, { children: "source" }), e.jsxs(b, { value: o, onValueChange: x, children: [e.jsx(v, { children: e.jsx(q, { placeholder: "source" }) }), e.jsx(N, { children: L.map((s) => e.jsx(B, { value: s, children: s }, s)) })] })] }), e.jsxs("div", { className: "space-y-2 md:col-span-2", children: [e.jsx(p, { htmlFor: "my9-custom-q", children: "q" }), e.jsx(C, { id: "my9-custom-q", value: r, onChange: (s) => j(s.target.value) })] }), e.jsx("div", { className: "flex items-end", children: e.jsx(y, { type: "button", onClick: g, disabled: c, children: c ? "\u8BF7\u6C42\u4E2D..." : "\u6267\u884C\u641C\u7D22" }) })] })] }), e.jsxs(n, { children: [e.jsxs(m, { children: [e.jsx(l, { children: "\u7ED3\u679C" }), e.jsxs(d, { children: ["items: ", ((_a = a == null ? void 0 : a.items) == null ? void 0 : _a.length) ?? 0] })] }), e.jsx(u, { children: a ? e.jsx("pre", { className: "text-xs bg-muted/50 p-3 rounded-md overflow-x-auto", children: JSON.stringify(a, null, 2) }) : e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u6682\u65E0\u7ED3\u679C\u3002" }) })] })] });
}
export {
  K as component
};
