import { r, j as e, u as C, v as O } from "./react-gFHNOnf5.js";
import { C as j, a as T, b as w, c as P, d as y } from "./card-B4CxGEM-.js";
import { I as k } from "./input-KwncZLGm.js";
import { L as m } from "./label-BU_LC6Ti.js";
import { S as q, a as I, b as L, c as M, d as R } from "./select-BkM7Xz_F.js";
import { B as A } from "./badge-C9CmQsZA.js";
import { a as J, f as E, b as F } from "./bangumi-client-Bal74wg2.js";
import { b as S } from "./bangumi-store-D4IfMGL6.js";
import { B as K } from "./bangumi-page-header-CjBVz-6c.js";
import { B as V } from "./button-D3G-RLOw.js";
import { T as b } from "./textarea-DqdRyzs9.js";
import { B as $ } from "./bangumi-json-view-CRNa-SNz.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./icons-CW-0NDo_.js";
function H(s) {
  var _a;
  const [n, o] = r.useState(s.operation.path), [l, h] = r.useState(""), [i, t] = r.useState(""), [c, u] = r.useState(false), [f, g] = r.useState(null), v = s.operation.requiresAuth && !((_a = s.accessToken) == null ? void 0 : _a.trim()), N = r.useMemo(() => s.operation.pathParams.reduce((a, d) => (a[`{${d}}`] = d.endsWith("id") ? "1" : "demo", a), {}), [s.operation.pathParams]), p = r.useMemo(() => {
    let a = n;
    for (const [d, x] of Object.entries(N)) a = a.replace(d, x);
    return a;
  }, [n, N]);
  async function B() {
    try {
      u(true);
      const a = l.trim() ? JSON.parse(l) : void 0, d = i.trim() ? JSON.parse(i) : void 0, x = await J({ method: s.operation.method, path: p, query: a, body: d, accessToken: s.accessToken });
      g(x), C.success(`${s.operation.method} ${p} \u8BF7\u6C42\u6210\u529F`);
    } catch (a) {
      g(a), C.error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570\u6216 Token");
    } finally {
      u(false);
    }
  }
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs(j, { children: [e.jsxs(T, { children: [e.jsx(w, { className: "text-base", children: s.operation.summary }), e.jsxs(P, { children: [s.operation.method, " ", s.operation.path] })] }), e.jsxs(y, { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: "path-input", children: "\u8DEF\u5F84" }), e.jsx(k, { id: "path-input", value: n, onChange: (a) => o(a.target.value) }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: ["\u81EA\u52A8\u66FF\u6362\u8DEF\u5F84\u53C2\u6570\u540E: ", p] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: "query-input", children: "Query JSON" }), e.jsx(b, { id: "query-input", value: l, onChange: (a) => h(a.target.value), placeholder: '\u4F8B\u5982: {"limit": 10, "offset": 0}', className: "min-h-24" })] }), s.operation.hasRequestBody ? e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: "body-input", children: "Body JSON" }), e.jsx(b, { id: "body-input", value: i, onChange: (a) => t(a.target.value), placeholder: '\u4F8B\u5982: {"keyword": "EVA"}', className: "min-h-36" })] }) : null, e.jsx(V, { type: "button", disabled: c || v, onClick: B, children: c ? "\u8BF7\u6C42\u4E2D..." : "\u6267\u884C\u8BF7\u6C42" }), v ? e.jsx("p", { className: "text-xs text-destructive", children: "\u8BE5\u63A5\u53E3\u5FC5\u987B\u4F9D\u8D56 Access Token\uFF0C\u5F53\u524D\u672A\u586B\u5199\uFF0C\u5DF2\u7981\u7528\u6267\u884C\u3002" }) : null] })] }), f !== null ? e.jsx($, { title: "\u54CD\u5E94\u7ED3\u679C", data: f }) : null] });
}
function ce() {
  var _a;
  const s = O(S), n = r.useMemo(() => E(), []), o = r.useMemo(() => {
    const t = s.endpointKeyword.trim().toLowerCase();
    return t ? n.filter((c) => c.summary.toLowerCase().includes(t) || c.path.toLowerCase().includes(t) || c.tags.some((u) => u.toLowerCase().includes(t))) : n;
  }, [n, s.endpointKeyword]), [l, h] = r.useState(((_a = o[0]) == null ? void 0 : _a.id) ?? ""), i = r.useMemo(() => o.find((t) => t.id === l) ?? o[0], [o, l]);
  return e.jsxs("div", { className: "space-y-4", children: [e.jsx(K, { title: "API \u5B9E\u9A8C\u53F0", description: "\u6309 OpenAPI \u81EA\u52A8\u751F\u6210\u63A5\u53E3\u76EE\u5F55\uFF0C\u5E76\u53EF\u76F4\u63A5\u8C03\u8BD5\u4EFB\u610F\u64CD\u4F5C\u3002", badge: "\u5168\u91CF\u63A5\u53E3" }), e.jsxs(j, { children: [e.jsx(T, { children: e.jsx(w, { className: "text-base", children: "\u63A5\u53E3\u7B5B\u9009\u4E0E\u9009\u62E9" }) }), e.jsxs(y, { className: "space-y-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: "operation-keyword", children: "\u5173\u952E\u8BCD\u8FC7\u6EE4" }), e.jsx(k, { id: "operation-keyword", value: s.endpointKeyword, onChange: (t) => {
    S.endpointKeyword = t.target.value;
  }, placeholder: "\u8F93\u5165\u8DEF\u5F84\u3001\u6807\u7B7E\u6216\u6458\u8981" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { children: "\u64CD\u4F5C" }), e.jsxs(q, { value: (i == null ? void 0 : i.id) ?? "", onValueChange: h, children: [e.jsx(I, { children: e.jsx(L, { placeholder: "\u9009\u62E9\u63A5\u53E3" }) }), e.jsx(M, { children: o.map((t) => e.jsxs(R, { value: t.id, children: [t.method, " ", t.path] }, t.id)) })] })] }), e.jsx("div", { className: "flex flex-wrap gap-2", children: F.map((t) => e.jsxs(A, { variant: "outline", children: [t.tag, " ", t.operations.length] }, t.tag)) })] })] }), i ? e.jsx(H, { operation: i, accessToken: s.accessToken }) : e.jsx(j, { children: e.jsx(y, { className: "py-6 text-sm text-muted-foreground", children: "\u6CA1\u6709\u5339\u914D\u5230\u63A5\u53E3\uFF0C\u8BF7\u8C03\u6574\u5173\u952E\u8BCD\u3002" }) })] });
}
export {
  ce as component
};
