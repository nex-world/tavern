import { v as h, r as t, j as s } from "./react-gFHNOnf5.js";
import { C as x, a as j, b as f, d as b } from "./card-B4CxGEM-.js";
import { I as C } from "./input-KwncZLGm.js";
import { L as d } from "./label-BU_LC6Ti.js";
import { S as g, a as y, b as S, c as v, d as k } from "./select-BkM7Xz_F.js";
import { B as T } from "./badge-C9CmQsZA.js";
import { b as w } from "./bangumi-store-D4IfMGL6.js";
import { f as I, t as L, a as N } from "./tmdb-client-BjMMTYpo.js";
import { B } from "./bangumi-page-header-CjBVz-6c.js";
import { O } from "./openapi-request-panel-DbwbD4tg.js";
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
function _() {
  var _a;
  const m = h(w), a = t.useMemo(() => I(), []), [o, l] = t.useState(""), [c, p] = t.useState(((_a = a[0]) == null ? void 0 : _a.id) ?? ""), r = t.useMemo(() => {
    const e = o.trim().toLowerCase();
    return e ? a.filter((n) => n.path.toLowerCase().includes(e) || n.summary.toLowerCase().includes(e) || n.tags.some((u) => u.toLowerCase().includes(e))) : a;
  }, [a, o]), i = t.useMemo(() => r.find((e) => e.id === c) ?? r[0], [r, c]);
  return s.jsxs("div", { className: "space-y-4", children: [s.jsx(B, { title: "TMDB API \u5B9E\u9A8C\u53F0", description: "\u652F\u6301\u9274\u6743\u63A5\u53E3\u7684\u76F4\u63A5\u8C03\u8BD5\u3002", badge: "api-lab" }), s.jsxs(x, { children: [s.jsx(j, { children: s.jsx(f, { className: "text-base", children: "\u63A5\u53E3\u7B5B\u9009" }) }), s.jsxs(b, { className: "space-y-3", children: [s.jsxs("div", { className: "space-y-2", children: [s.jsx(d, { htmlFor: "tmdb-op-key", children: "\u5173\u952E\u8BCD" }), s.jsx(C, { id: "tmdb-op-key", value: o, onChange: (e) => l(e.target.value) })] }), s.jsxs("div", { className: "space-y-2", children: [s.jsx(d, { children: "\u63A5\u53E3" }), s.jsxs(g, { value: (i == null ? void 0 : i.id) ?? "", onValueChange: p, children: [s.jsx(y, { children: s.jsx(S, { placeholder: "\u9009\u62E9\u63A5\u53E3" }) }), s.jsx(v, { children: r.map((e) => s.jsxs(k, { value: e.id, children: [e.method, " ", e.path] }, e.id)) })] })] }), s.jsx("div", { className: "flex flex-wrap gap-2", children: L.map((e) => s.jsxs(T, { variant: "outline", children: [e.tag, " ", e.operations.length] }, e.tag)) })] })] }), i ? s.jsx(O, { operation: i, accessToken: m.tmdbAccessToken, execute: async (e) => N({ method: e.method, path: e.path, query: e.query, accessToken: e.accessToken }) }) : null] });
}
export {
  _ as component
};
