import { v as R, r as l, j as e } from "./react-gFHNOnf5.js";
import { B as I } from "./button-D3G-RLOw.js";
import { C as n, a as x, b as p, c as g, d as i } from "./card-B4CxGEM-.js";
import { I as K } from "./input-KwncZLGm.js";
import { L as h } from "./label-BU_LC6Ti.js";
import { S as v, a as y, b as S, c as b, d as t } from "./select-BkM7Xz_F.js";
import { b as L } from "./bangumi-store-D4IfMGL6.js";
import { a as V } from "./bangumi-client-Bal74wg2.js";
import { B as q } from "./bangumi-page-header-CjBVz-6c.js";
import { a as d, B as D, g as E, b as H, c as O, k as F, l as $ } from "./bangumi-result-utils-DyUfcZIL.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./icons-CW-0NDo_.js";
import "./badge-C9CmQsZA.js";
import "./dialog-CPE3M3ew.js";
function ne() {
  const f = R(L), [a, C] = l.useState("subjects"), [o, B] = l.useState(""), [m, N] = l.useState("match"), [u, j] = l.useState(false), [k, T] = l.useState({ subjects: null, characters: null, persons: null });
  async function P() {
    if (o.trim()) try {
      j(true);
      const s = a === "subjects" ? { keyword: o, sort: m } : { keyword: o }, r = await V({ method: "POST", path: `/v0/search/${a}`, body: s, query: { limit: 18, offset: 0 }, accessToken: f.accessToken });
      T((w) => ({ ...w, [a]: r }));
    } finally {
      j(false);
    }
  }
  const c = k[a];
  return e.jsxs("div", { className: "space-y-4", children: [e.jsx(q, { title: "\u53D1\u73B0\u4E0E\u641C\u7D22", description: "\u8986\u76D6\u6761\u76EE\u3001\u89D2\u8272\u3001\u4EBA\u7269\u4E09\u7C7B\u641C\u7D22\u63A5\u53E3\uFF0C\u652F\u6301\u5173\u952E\u8BCD\u548C\u57FA\u7840\u6392\u5E8F\u3002", badge: "\u641C\u7D22" }), e.jsxs(n, { children: [e.jsxs(x, { children: [e.jsx(p, { children: "\u641C\u7D22\u6761\u4EF6" }), e.jsx(g, { children: "\u4F7F\u7528 POST /v0/search/*" })] }), e.jsxs(i, { className: "grid grid-cols-1 md:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(h, { children: "\u641C\u7D22\u76EE\u6807" }), e.jsxs(v, { value: a, onValueChange: (s) => C(s), children: [e.jsx(y, { children: e.jsx(S, { placeholder: "\u9009\u62E9\u7C7B\u578B" }) }), e.jsxs(b, { children: [e.jsx(t, { value: "subjects", children: "\u6761\u76EE" }), e.jsx(t, { value: "characters", children: "\u89D2\u8272" }), e.jsx(t, { value: "persons", children: "\u4EBA\u7269" })] })] })] }), e.jsxs("div", { className: "space-y-2 md:col-span-2", children: [e.jsx(h, { htmlFor: "keyword", children: "\u5173\u952E\u8BCD" }), e.jsx(K, { id: "keyword", value: o, onChange: (s) => B(s.target.value), placeholder: "\u4F8B\u5982\uFF1A\u653B\u58F3\u673A\u52A8\u961F" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(h, { children: "\u6761\u76EE\u6392\u5E8F" }), e.jsxs(v, { value: m, onValueChange: N, children: [e.jsx(y, { children: e.jsx(S, { placeholder: "\u6392\u5E8F" }) }), e.jsxs(b, { children: [e.jsx(t, { value: "match", children: "match" }), e.jsx(t, { value: "heat", children: "heat" }), e.jsx(t, { value: "rank", children: "rank" }), e.jsx(t, { value: "score", children: "score" })] })] })] }), e.jsx("div", { className: "md:col-span-4", children: e.jsx(I, { type: "button", disabled: u, onClick: P, children: u ? "\u641C\u7D22\u4E2D..." : "\u5F00\u59CB\u641C\u7D22" }) })] })] }), c ? e.jsxs(n, { children: [e.jsxs(x, { children: [e.jsx(p, { children: "\u641C\u7D22\u7ED3\u679C" }), e.jsxs(g, { children: ["\u5171 ", d(c).length, " \u6761"] })] }), e.jsx(i, { children: e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: [a === "subjects" ? d(c).map((s, r) => e.jsx(n, { children: e.jsx(i, { className: "pt-6", children: e.jsx(D, { subject: s }) }) }, E(s, r, "discover-subject"))) : null, a === "characters" ? d(c).map((s, r) => e.jsx(n, { children: e.jsx(i, { className: "pt-6", children: e.jsx(H, { character: s }) }) }, O(s, r, "discover-character"))) : null, a === "persons" ? d(c).map((s, r) => e.jsx(n, { children: e.jsx(i, { className: "pt-6", children: e.jsx(F, { person: s }) }) }, $(s, r, "discover-person"))) : null] }) })] }) : null] });
}
export {
  ne as component
};
