import { r as i, j as s } from "./react-gFHNOnf5.js";
import { B as d } from "./button-D3G-RLOw.js";
import { C as n, a as m, b as p, c as h, d as o } from "./card-B4CxGEM-.js";
import { I as S } from "./input-KwncZLGm.js";
import { L as j } from "./label-BU_LC6Ti.js";
import { S as D, a as B, b as N, c as I, d as t } from "./select-BkM7Xz_F.js";
import { a as u } from "./bangumi-client-Bal74wg2.js";
import { B as E } from "./bangumi-page-header-CjBVz-6c.js";
import { h as x, i as L, j as T } from "./bangumi-result-utils-DyUfcZIL.js";
import { B as k } from "./bangumi-json-view-CRNa-SNz.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./icons-CW-0NDo_.js";
import "./badge-C9CmQsZA.js";
import "./dialog-CPE3M3ew.js";
function Y() {
  const [a, v] = i.useState("subjects"), [l, g] = i.useState("1"), [r, f] = i.useState(null), [c, C] = i.useState(null);
  async function b() {
    const e = await u({ method: "GET", path: `/v0/revisions/${a}`, query: { limit: 20, offset: 0 } });
    f(e);
  }
  async function y() {
    const e = await u({ method: "GET", path: `/v0/revisions/${a}/${l}` });
    C(e);
  }
  return s.jsxs("div", { className: "space-y-4", children: [s.jsx(E, { title: "\u7F16\u8F91\u5386\u53F2", description: "\u8986\u76D6 persons / characters / subjects / episodes \u7684\u4FEE\u8BA2\u5217\u8868\u4E0E\u8BE6\u60C5\u8BFB\u53D6\u3002", badge: "revisions" }), s.jsxs(n, { children: [s.jsxs(m, { children: [s.jsx(p, { children: "\u4FEE\u8BA2\u67E5\u8BE2" }), s.jsx(h, { children: "\u5148\u62C9\u5217\u8868\uFF0C\u518D\u6309 revision_id \u770B\u8BE6\u60C5" })] }), s.jsxs(o, { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [s.jsxs("div", { className: "space-y-2", children: [s.jsx(j, { children: "\u4FEE\u8BA2\u7C7B\u578B" }), s.jsxs(D, { value: a, onValueChange: (e) => v(e), children: [s.jsx(B, { children: s.jsx(N, { placeholder: "\u7C7B\u578B" }) }), s.jsxs(I, { children: [s.jsx(t, { value: "persons", children: "persons" }), s.jsx(t, { value: "characters", children: "characters" }), s.jsx(t, { value: "subjects", children: "subjects" }), s.jsx(t, { value: "episodes", children: "episodes" })] })] })] }), s.jsxs("div", { className: "space-y-2", children: [s.jsx(j, { htmlFor: "revision-id", children: "Revision ID" }), s.jsx(S, { id: "revision-id", value: l, onChange: (e) => g(e.target.value) })] }), s.jsxs("div", { className: "flex items-end gap-2", children: [s.jsx(d, { type: "button", variant: "outline", onClick: b, children: "\u62C9\u53D6\u5217\u8868" }), s.jsx(d, { type: "button", onClick: y, children: "\u67E5\u770B\u8BE6\u60C5" })] })] })] }), r ? s.jsxs(n, { children: [s.jsxs(m, { children: [s.jsx(p, { children: "\u4FEE\u8BA2\u5217\u8868" }), s.jsxs(h, { children: ["\u5171 ", x(r).length, " \u9879"] })] }), s.jsx(o, { children: s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: x(r).map((e, R) => s.jsx(n, { children: s.jsx(o, { className: "pt-6", children: s.jsx(L, { revision: e }) }) }, T(e, R, "revisions-list"))) }) })] }) : null, c ? s.jsx(k, { title: "\u4FEE\u8BA2\u8BE6\u60C5", data: c }) : null] });
}
export {
  Y as component
};
