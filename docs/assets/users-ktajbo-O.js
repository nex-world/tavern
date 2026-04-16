import { v as R, r as t, j as e } from "./react-gFHNOnf5.js";
import { B as f } from "./button-D3G-RLOw.js";
import { C as n, a as c, b as o, c as p, d as i } from "./card-B4CxGEM-.js";
import { I as C } from "./input-KwncZLGm.js";
import { L as d } from "./label-BU_LC6Ti.js";
import { S as H, a as w, b as F, c as G, d as r } from "./select-BkM7Xz_F.js";
import { T as J } from "./textarea-DqdRyzs9.js";
import { b as T } from "./bangumi-store-D4IfMGL6.js";
import { a as x } from "./bangumi-client-Bal74wg2.js";
import { B as M } from "./bangumi-page-header-CjBVz-6c.js";
import { d as U, t as b, e as V, f as $ } from "./bangumi-result-utils-DyUfcZIL.js";
import { B as q } from "./bangumi-json-view-CRNa-SNz.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./icons-CW-0NDo_.js";
import "./badge-C9CmQsZA.js";
import "./dialog-CPE3M3ew.js";
function me() {
  const a = R(T), h = !a.accessToken.trim(), [j, S] = t.useState("1"), [g, N] = t.useState("2"), [m, k] = t.useState('{"comment":"", "tags": [], "private": false}'), [v, B] = t.useState(null), [u, D] = t.useState(null), [y, I] = t.useState(null);
  async function A() {
    const s = a.username.trim();
    if (!s) return;
    const [l, P] = await Promise.all([x({ method: "GET", path: `/v0/users/${s}` }), x({ method: "GET", path: `/v0/users/${s}/collections`, query: { limit: 20, offset: 0 }, accessToken: a.accessToken })]);
    B(l), D(P);
  }
  async function E() {
    const s = m.trim() ? JSON.parse(m) : {}, l = await x({ method: "PATCH", path: `/v0/users/-/collections/${j}`, body: { type: Number(g), ...s }, accessToken: a.accessToken });
    I(l);
  }
  return e.jsxs("div", { className: "space-y-4", children: [e.jsx(M, { title: "\u7528\u6237\u4E0E\u6536\u85CF", description: "\u8986\u76D6\u7528\u6237\u4FE1\u606F\u3001\u7528\u6237\u6536\u85CF\u5217\u8868\u3001\u4EE5\u53CA\u5F53\u524D\u767B\u5F55\u7528\u6237\u7684\u6536\u85CF\u66F4\u65B0\u63A5\u53E3\u3002", badge: "\u7528\u6237" }), e.jsxs(n, { children: [e.jsxs(c, { children: [e.jsx(o, { children: "\u7528\u6237\u4FE1\u606F\u4E0E\u6536\u85CF\u5217\u8868" }), e.jsx(p, { children: "GET /v0/users/:username \u548C /collections" })] }), e.jsxs(i, { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [e.jsxs("div", { className: "space-y-2 md:col-span-2", children: [e.jsx(d, { htmlFor: "username-input", children: "\u7528\u6237\u540D" }), e.jsx(C, { id: "username-input", value: a.username, onChange: (s) => {
    T.username = s.target.value;
  } })] }), e.jsx("div", { className: "flex items-end", children: e.jsx(f, { type: "button", onClick: A, children: "\u52A0\u8F7D\u7528\u6237\u6570\u636E" }) })] })] }), e.jsxs(n, { children: [e.jsxs(c, { children: [e.jsx(o, { children: "\u4FEE\u6539\u6211\u7684\u6761\u76EE\u6536\u85CF" }), e.jsx(p, { children: "PATCH /v0/users/-/collections/:subject_id\uFF08\u9700 Access Token\uFF09" })] }), e.jsxs(i, { className: "space-y-3", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: "subject-id-input", children: "Subject ID" }), e.jsx(C, { id: "subject-id-input", value: j, onChange: (s) => S(s.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { children: "\u6536\u85CF\u7C7B\u578B type" }), e.jsxs(H, { value: g, onValueChange: N, children: [e.jsx(w, { children: e.jsx(F, { placeholder: "\u7C7B\u578B" }) }), e.jsxs(G, { children: [e.jsx(r, { value: "1", children: "1 \u60F3\u770B" }), e.jsx(r, { value: "2", children: "2 \u770B\u8FC7" }), e.jsx(r, { value: "3", children: "3 \u5728\u770B" }), e.jsx(r, { value: "4", children: "4 \u6401\u7F6E" }), e.jsx(r, { value: "5", children: "5 \u629B\u5F03" })] })] })] }), e.jsx("div", { className: "flex items-end", children: e.jsx(f, { type: "button", onClick: E, disabled: h, children: "\u63D0\u4EA4\u6536\u85CF\u4FEE\u6539" }) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: "payload-input", children: "\u989D\u5916\u8BF7\u6C42\u4F53 JSON" }), e.jsx(J, { id: "payload-input", className: "min-h-28", value: m, onChange: (s) => k(s.target.value) })] }), h ? e.jsx("p", { className: "text-xs text-destructive", children: "\u8BE5\u529F\u80FD\u5FC5\u987B\u4F9D\u8D56 Access Token\uFF0C\u5F53\u524D\u672A\u586B\u5199\u3002" }) : null] })] }), v ? e.jsxs(n, { children: [e.jsx(c, { children: e.jsx(o, { children: "\u7528\u6237\u4FE1\u606F" }) }), e.jsx(i, { children: e.jsx(U, { user: v }) })] }) : null, u ? e.jsxs(n, { children: [e.jsxs(c, { children: [e.jsx(o, { children: "\u7528\u6237\u6536\u85CF\u5217\u8868" }), e.jsxs(p, { children: ["\u5171 ", b(u).length, " \u9879"] })] }), e.jsx(i, { children: e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: b(u).map((s, l) => e.jsx(n, { children: e.jsx(i, { className: "pt-6", children: e.jsx(V, { collection: s }) }) }, $(s, l, "users-collection"))) }) })] }) : null, y ? e.jsx(q, { title: "\u6536\u85CF\u4FEE\u6539\u7ED3\u679C", data: y }) : null] });
}
export {
  me as component
};
