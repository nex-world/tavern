import { r as s, j as e, u as j } from "./react-gFHNOnf5.js";
import { B as C } from "./button-D3G-RLOw.js";
import { C as b, a as S, b as k, c as q, d as B } from "./card-B4CxGEM-.js";
import { I as O } from "./input-KwncZLGm.js";
import { L as d } from "./label-BU_LC6Ti.js";
import { T as f } from "./textarea-DqdRyzs9.js";
import { B as P } from "./bangumi-json-view-CRNa-SNz.js";
function I(a) {
  var _a;
  const [o, v] = s.useState(a.operation.path), [r, N] = s.useState(""), [i, T] = s.useState(""), [u, h] = s.useState(false), [m, p] = s.useState(null), x = a.operation.requiresAuth && !((_a = a.accessToken) == null ? void 0 : _a.trim()), y = s.useMemo(() => a.operation.pathParams.reduce((t, n) => (t[`{${n}}`] = n.endsWith("id") ? "1" : "demo", t), {}), [a.operation.pathParams]), l = s.useMemo(() => {
    let t = o;
    for (const [n, c] of Object.entries(y)) t = t.replace(n, c);
    return t;
  }, [o, y]);
  async function g() {
    try {
      h(true);
      const t = r.trim() ? JSON.parse(r) : void 0, n = i.trim() ? JSON.parse(i) : void 0, c = await a.execute({ method: a.operation.method, path: l, query: t, body: n, accessToken: a.accessToken });
      p(c), j.success(`${a.operation.method} ${l} \u8BF7\u6C42\u6210\u529F`);
    } catch (t) {
      p(t), j.error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570");
    } finally {
      h(false);
    }
  }
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs(b, { children: [e.jsxs(S, { children: [e.jsx(k, { className: "text-base", children: a.operation.summary }), e.jsxs(q, { children: [a.operation.method, " ", a.operation.path] })] }), e.jsxs(B, { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: "openapi-path-input", children: "\u8DEF\u5F84" }), e.jsx(O, { id: "openapi-path-input", value: o, onChange: (t) => v(t.target.value) }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: ["\u66FF\u6362\u8DEF\u5F84\u53C2\u6570\u540E: ", l] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: "openapi-query-input", children: "Query JSON" }), e.jsx(f, { id: "openapi-query-input", value: r, onChange: (t) => N(t.target.value), placeholder: '\u4F8B\u5982: {"limit": 10, "page": 1}', className: "min-h-24" })] }), a.operation.hasRequestBody ? e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: "openapi-body-input", children: "Body JSON" }), e.jsx(f, { id: "openapi-body-input", value: i, onChange: (t) => T(t.target.value), placeholder: '\u4F8B\u5982: {"keyword": "EVA"}', className: "min-h-32" })] }) : null, e.jsx(C, { type: "button", disabled: u || x, onClick: g, children: u ? "\u8BF7\u6C42\u4E2D..." : "\u6267\u884C\u8BF7\u6C42" }), x ? e.jsx("p", { className: "text-xs text-destructive", children: "\u8BE5\u63A5\u53E3\u9700\u8981 Access Token\uFF0C\u5F53\u524D\u672A\u586B\u5199\u3002" }) : null] })] }), m !== null ? e.jsx(P, { title: "\u54CD\u5E94\u7ED3\u679C", data: m }) : null] });
}
export {
  I as O
};
