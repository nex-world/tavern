import { r as t, j as s } from "./react-gFHNOnf5.js";
import { C as p, a as u, b as h, d as x } from "./card-B4CxGEM-.js";
import { I as j } from "./input-KwncZLGm.js";
import { L as d } from "./label-BU_LC6Ti.js";
import { S as f, a as C, b as y, c as g, d as v } from "./select-BkM7Xz_F.js";
import { B as S } from "./badge-C9CmQsZA.js";
import { f as I, i as b } from "./itunes-openapi--yCAZ3Wb.js";
import { B as w } from "./bangumi-page-header-CjBVz-6c.js";
import { O as N } from "./openapi-request-panel-DbwbD4tg.js";
import { i as O } from "./itunes-client-CGW3tAT7.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./icons-CW-0NDo_.js";
import "./button-D3G-RLOw.js";
import "./textarea-DqdRyzs9.js";
import "./bangumi-json-view-CRNa-SNz.js";
function W() {
  var _a;
  const a = t.useMemo(() => I(), []), [i, m] = t.useState(""), [n, c] = t.useState(((_a = a[0]) == null ? void 0 : _a.id) ?? ""), r = t.useMemo(() => {
    const e = i.trim().toLowerCase();
    return e ? a.filter((l) => l.path.toLowerCase().includes(e) || l.summary.toLowerCase().includes(e)) : a;
  }, [a, i]), o = t.useMemo(() => r.find((e) => e.id === n) ?? r[0], [r, n]);
  return s.jsxs("div", { className: "space-y-4", children: [s.jsx(w, { title: "iTunes API \u5B9E\u9A8C\u53F0", description: "\u6309 OpenAPI \u5B50\u96C6\u81EA\u52A8\u751F\u6210\u8BF7\u6C42\u76EE\u5F55\u3002", badge: "api-lab" }), s.jsxs(p, { children: [s.jsx(u, { children: s.jsx(h, { className: "text-base", children: "\u63A5\u53E3\u7B5B\u9009" }) }), s.jsxs(x, { className: "space-y-3", children: [s.jsxs("div", { className: "space-y-2", children: [s.jsx(d, { htmlFor: "itunes-op-key", children: "\u5173\u952E\u8BCD" }), s.jsx(j, { id: "itunes-op-key", value: i, onChange: (e) => m(e.target.value) })] }), s.jsxs("div", { className: "space-y-2", children: [s.jsx(d, { children: "\u63A5\u53E3" }), s.jsxs(f, { value: (o == null ? void 0 : o.id) ?? "", onValueChange: c, children: [s.jsx(C, { children: s.jsx(y, { placeholder: "\u9009\u62E9\u63A5\u53E3" }) }), s.jsx(g, { children: r.map((e) => s.jsxs(v, { value: e.id, children: [e.method, " ", e.path] }, e.id)) })] })] }), s.jsx("div", { className: "flex flex-wrap gap-2", children: b.map((e) => s.jsxs(S, { variant: "outline", children: [e.tag, " ", e.operations.length] }, e.tag)) })] })] }), o ? s.jsx(N, { operation: o, execute: async (e) => O({ method: e.method, path: e.path, query: e.query }) }) : null] });
}
export {
  W as component
};
