import { r, j as e } from "./react-gFHNOnf5.js";
import { C as t, a as i, b as n, c as d, d as c } from "./card-B4CxGEM-.js";
import { B as b } from "./button-D3G-RLOw.js";
import { B as N } from "./badge-C9CmQsZA.js";
import { b as j, a as C } from "./bangumi-client-Bal74wg2.js";
import { B as y } from "./bangumi-page-header-CjBVz-6c.js";
import { B, g as v } from "./bangumi-result-utils-DyUfcZIL.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./dialog-CPE3M3ew.js";
import "./icons-CW-0NDo_.js";
function z() {
  const [l, h] = r.useState([]), [o, m] = r.useState(false), u = r.useMemo(() => j.reduce((s, a) => s + a.operations.length, 0), []);
  async function x() {
    try {
      m(true);
      const s = await C({ method: "GET", path: "/calendar" });
      h(s);
    } finally {
      m(false);
    }
  }
  return r.useEffect(() => {
    x();
  }, []), e.jsxs("div", { className: "space-y-4", children: [e.jsx(y, { title: "Bangumi \u5DE5\u4F5C\u53F0", description: "\u6309\u63A5\u53E3\u5B9A\u4E49\u7EC4\u7EC7\u4E86\u5B8C\u6574\u7684\u5B50\u9875\u9762\u7ED3\u6784\uFF0C\u540C\u65F6\u63D0\u4F9B\u6BCF\u65E5\u653E\u9001\u3001\u5FEB\u901F\u5BFC\u822A\u548C\u63A5\u53E3\u7EDF\u8BA1\u3002", badge: "\u603B\u89C8" }), e.jsxs("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [e.jsxs(t, { children: [e.jsxs(i, { children: [e.jsx(n, { className: "text-base", children: "\u63A5\u53E3\u5206\u7EC4" }), e.jsx(d, { children: "\u6309 OpenAPI tags \u81EA\u52A8\u5F52\u6863" })] }), e.jsx(c, { children: e.jsx("p", { className: "text-3xl font-semibold", children: j.length }) })] }), e.jsxs(t, { children: [e.jsxs(i, { children: [e.jsx(n, { className: "text-base", children: "\u603B\u63A5\u53E3\u6570" }), e.jsx(d, { children: "\u6765\u81EA\u5F53\u524D schema" })] }), e.jsx(c, { children: e.jsx("p", { className: "text-3xl font-semibold", children: u }) })] }), e.jsxs(t, { children: [e.jsxs(i, { children: [e.jsx(n, { className: "text-base", children: "\u6BCF\u65E5\u653E\u9001" }), e.jsx(d, { children: "\u7528\u4E8E\u5FEB\u901F\u67E5\u770B\u672C\u5468\u6761\u76EE" })] }), e.jsx(c, { children: e.jsx(b, { type: "button", variant: "outline", size: "sm", onClick: x, disabled: o, children: o ? "\u5237\u65B0\u4E2D..." : "\u5237\u65B0\u6570\u636E" }) })] })] }), e.jsxs(t, { children: [e.jsxs(i, { children: [e.jsx(n, { children: "\u4ECA\u65E5\u4E0E\u672C\u5468\u653E\u9001" }), e.jsx(d, { children: "\u6765\u81EA GET /calendar" })] }), e.jsx(c, { className: "space-y-3", children: l.length === 0 ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u6682\u65E0\u6570\u636E\uFF0C\u8BF7\u70B9\u51FB\u5237\u65B0\u3002" }) : e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: l.map((s, a) => {
    var _a, _b, _c, _d;
    return e.jsxs("div", { className: "rounded-lg border p-3 space-y-2", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("p", { className: "font-medium", children: ((_a = s.weekday) == null ? void 0 : _a.cn) ?? ((_b = s.weekday) == null ? void 0 : _b.en) ?? `\u7B2C ${a + 1} \u5929` }), e.jsxs(N, { variant: "secondary", children: [((_c = s.items) == null ? void 0 : _c.length) ?? 0, " \u9879"] })] }), e.jsx("div", { className: "space-y-2", children: (s.items ?? []).map((g, f) => {
      var _a2;
      const p = g;
      return e.jsx("div", { className: "rounded-md border p-2", children: e.jsx(B, { subject: p }) }, v(p, f, `calendar-day-${((_a2 = s.weekday) == null ? void 0 : _a2.id) ?? a}`));
    }) })] }, `${((_d = s.weekday) == null ? void 0 : _d.id) ?? a}`);
  }) }) })] })] });
}
export {
  z as component
};
