import { v as T, r as a, j as e } from "./react-gFHNOnf5.js";
import { B } from "./button-D3G-RLOw.js";
import { C as u, a as v, b as g, c as f, d as S } from "./card-B4CxGEM-.js";
import { L as i } from "./label-BU_LC6Ti.js";
import { S as d, a as l, b as t, c as n, d as c } from "./select-BkM7Xz_F.js";
import { b as D } from "./bangumi-store-D4IfMGL6.js";
import { B as R } from "./bangumi-page-header-CjBVz-6c.js";
import { m as V } from "./my9-client-CnYUKa6h.js";
import { M as _, a as k, b as I } from "./my9-constants-aq-BUJrZ.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./icons-CW-0NDo_.js";
import "./badge-C9CmQsZA.js";
function Z() {
  var _a;
  const N = T(D), [o, y] = a.useState("game"), [m, C] = a.useState("7d"), [x, b] = a.useState("overall"), [h, p] = a.useState(false), [r, E] = a.useState(null);
  async function w() {
    try {
      p(true);
      const s = await V({ baseUrl: N.my9BaseUrl, path: "/trends", method: "GET", query: { kind: o, period: m, view: x } });
      E(s);
    } finally {
      p(false);
    }
  }
  return e.jsxs("div", { className: "space-y-4", children: [e.jsx(R, { title: "my9 trends", description: "\u8D8B\u52BF\u805A\u5408\u63A5\u53E3\uFF0C\u652F\u6301 kind + period + view \u7EC4\u5408\u3002", badge: "trends" }), e.jsxs(u, { children: [e.jsxs(v, { children: [e.jsx(g, { children: "\u53C2\u6570" }), e.jsx(f, { children: "GET /trends?kind&period&view" })] }), e.jsxs(S, { className: "grid grid-cols-1 md:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(i, { children: "kind" }), e.jsxs(d, { value: o, onValueChange: y, children: [e.jsx(l, { children: e.jsx(t, { placeholder: "kind" }) }), e.jsx(n, { children: _.map((s) => e.jsx(c, { value: s, children: s }, s)) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(i, { children: "period" }), e.jsxs(d, { value: m, onValueChange: C, children: [e.jsx(l, { children: e.jsx(t, { placeholder: "period" }) }), e.jsx(n, { children: k.map((s) => e.jsx(c, { value: s, children: s }, s)) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(i, { children: "view" }), e.jsxs(d, { value: x, onValueChange: b, children: [e.jsx(l, { children: e.jsx(t, { placeholder: "view" }) }), e.jsx(n, { children: I.map((s) => e.jsx(c, { value: s, children: s }, s)) })] })] }), e.jsx("div", { className: "flex items-end", children: e.jsx(B, { type: "button", onClick: w, disabled: h, children: h ? "\u8BF7\u6C42\u4E2D..." : "\u52A0\u8F7D\u8D8B\u52BF" }) })] })] }), e.jsxs(u, { children: [e.jsxs(v, { children: [e.jsx(g, { children: "\u8D8B\u52BF\u7ED3\u679C" }), e.jsxs(f, { children: ["bucket \u6570: ", ((_a = r == null ? void 0 : r.items) == null ? void 0 : _a.length) ?? 0] })] }), e.jsx(S, { children: r ? e.jsx("div", { className: "space-y-2", children: r.items.map((s) => e.jsxs("div", { className: "rounded-md border p-3", children: [e.jsxs("p", { className: "font-medium", children: [s.label, " \xB7 ", s.count] }), e.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: (s.games ?? []).slice(0, 5).map((j) => j.localizedName ?? j.name).join(" / ") })] }, s.key)) }) : e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u6682\u65E0\u6570\u636E\u3002" }) })] })] });
}
export {
  Z as component
};
