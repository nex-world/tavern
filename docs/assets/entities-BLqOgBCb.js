import { v as X, r, j as s } from "./react-gFHNOnf5.js";
import { B as k } from "./button-D3G-RLOw.js";
import { C as n, a as d, b as o, c as y, d as l } from "./card-B4CxGEM-.js";
import { I as B } from "./input-KwncZLGm.js";
import { L as P } from "./label-BU_LC6Ti.js";
import { b as j } from "./bangumi-store-D4IfMGL6.js";
import { a as t } from "./bangumi-client-Bal74wg2.js";
import { B as Y } from "./bangumi-page-header-CjBVz-6c.js";
import { B as m, k as I, l as $, b as f, c as R, g as E, m as D, n as w, o as G } from "./bangumi-result-utils-DyUfcZIL.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./badge-C9CmQsZA.js";
import "./dialog-CPE3M3ew.js";
import "./icons-CW-0NDo_.js";
function xs() {
  const c = X(j), [u, A] = r.useState(null), [p, F] = r.useState([]), [x, K] = r.useState([]), [g, H] = r.useState([]), [b, L] = r.useState(null), [v, q] = r.useState([]), [N, z] = r.useState([]), [T, J] = r.useState(null), [C, M] = r.useState([]), [S, O] = r.useState([]);
  async function Q() {
    const e = c.subjectId || "1", [a, i, h, W] = await Promise.all([t({ method: "GET", path: `/v0/subjects/${e}`, accessToken: c.accessToken }), t({ method: "GET", path: `/v0/subjects/${e}/persons`, accessToken: c.accessToken }), t({ method: "GET", path: `/v0/subjects/${e}/characters`, accessToken: c.accessToken }), t({ method: "GET", path: `/v0/subjects/${e}/subjects`, accessToken: c.accessToken })]);
    A(a), F(D(i)), K(w(h)), H(G(W));
  }
  async function U() {
    const e = c.personId || "1", [a, i, h] = await Promise.all([t({ method: "GET", path: `/v0/persons/${e}`, accessToken: c.accessToken }), t({ method: "GET", path: `/v0/persons/${e}/subjects`, accessToken: c.accessToken }), t({ method: "GET", path: `/v0/persons/${e}/characters`, accessToken: c.accessToken })]);
    L(a), q(G(i)), z(w(h));
  }
  async function V() {
    const e = c.characterId || "1", [a, i, h] = await Promise.all([t({ method: "GET", path: `/v0/characters/${e}`, accessToken: c.accessToken }), t({ method: "GET", path: `/v0/characters/${e}/subjects`, accessToken: c.accessToken }), t({ method: "GET", path: `/v0/characters/${e}/persons`, accessToken: c.accessToken })]);
    J(a), M(G(i)), O(D(h));
  }
  return s.jsxs("div", { className: "space-y-4", children: [s.jsx(Y, { title: "\u6761\u76EE\u5173\u7CFB\u7F51\u7EDC", description: "\u5C06\u6761\u76EE\u3001\u4EBA\u7269\u3001\u89D2\u8272\u4E09\u7C7B\u63A5\u53E3\u7EC4\u5408\u6210\u53EF\u8054\u52A8\u7684\u6570\u636E\u675F\uFF0C\u65B9\u4FBF\u5FEB\u901F\u6838\u5BF9\u4E0A\u4E0B\u6E38\u5173\u7CFB\u3002", badge: "\u5173\u7CFB" }), s.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [s.jsxs(n, { children: [s.jsxs(d, { children: [s.jsx(o, { className: "text-base", children: "\u6761\u76EE\u8BE6\u60C5 + \u5173\u8054" }), s.jsx(y, { children: "subject + persons + characters + subjects" })] }), s.jsxs(l, { className: "space-y-3", children: [s.jsxs("div", { className: "space-y-2", children: [s.jsx(P, { htmlFor: "subject-id", children: "Subject ID" }), s.jsx(B, { id: "subject-id", value: c.subjectId, onChange: (e) => {
    j.subjectId = e.target.value;
  } })] }), s.jsx(k, { type: "button", onClick: Q, children: "\u52A0\u8F7D\u6761\u76EE\u5173\u7CFB" })] })] }), s.jsxs(n, { children: [s.jsxs(d, { children: [s.jsx(o, { className: "text-base", children: "\u4EBA\u7269\u8BE6\u60C5 + \u5173\u8054" }), s.jsx(y, { children: "person + subjects + characters" })] }), s.jsxs(l, { className: "space-y-3", children: [s.jsxs("div", { className: "space-y-2", children: [s.jsx(P, { htmlFor: "person-id", children: "Person ID" }), s.jsx(B, { id: "person-id", value: c.personId, onChange: (e) => {
    j.personId = e.target.value;
  } })] }), s.jsx(k, { type: "button", onClick: U, children: "\u52A0\u8F7D\u4EBA\u7269\u5173\u7CFB" })] })] }), s.jsxs(n, { children: [s.jsxs(d, { children: [s.jsx(o, { className: "text-base", children: "\u89D2\u8272\u8BE6\u60C5 + \u5173\u8054" }), s.jsx(y, { children: "character + subjects + persons" })] }), s.jsxs(l, { className: "space-y-3", children: [s.jsxs("div", { className: "space-y-2", children: [s.jsx(P, { htmlFor: "character-id", children: "Character ID" }), s.jsx(B, { id: "character-id", value: c.characterId, onChange: (e) => {
    j.characterId = e.target.value;
  } })] }), s.jsx(k, { type: "button", onClick: V, children: "\u52A0\u8F7D\u89D2\u8272\u5173\u7CFB" })] })] })] }), u || p.length > 0 || x.length > 0 || g.length > 0 ? s.jsxs(n, { children: [s.jsx(d, { children: s.jsx(o, { children: "\u6761\u76EE\u5173\u7CFB\u7ED3\u679C" }) }), s.jsxs(l, { className: "space-y-3", children: [u ? s.jsx("div", { className: "rounded-md border p-3", children: s.jsx(m, { subject: u }) }) : null, p.length > 0 ? s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: p.map((e, a) => s.jsx("div", { className: "rounded-md border p-3", children: s.jsx(I, { person: e }) }, $(e, a, "entities-subject-persons"))) }) : null, x.length > 0 ? s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: x.map((e, a) => s.jsx("div", { className: "rounded-md border p-3", children: s.jsx(f, { character: e }) }, R(e, a, "entities-subject-characters"))) }) : null, g.length > 0 ? s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: g.map((e, a) => s.jsx("div", { className: "rounded-md border p-3", children: s.jsx(m, { subject: e }) }, E(e, a, "entities-subject-relations"))) }) : null] })] }) : null, b || v.length > 0 || N.length > 0 ? s.jsxs(n, { children: [s.jsx(d, { children: s.jsx(o, { children: "\u4EBA\u7269\u5173\u7CFB\u7ED3\u679C" }) }), s.jsxs(l, { className: "space-y-3", children: [b ? s.jsx("div", { className: "rounded-md border p-3", children: s.jsx(I, { person: b }) }) : null, v.length > 0 ? s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: v.map((e, a) => s.jsx("div", { className: "rounded-md border p-3", children: s.jsx(m, { subject: e }) }, E(e, a, "entities-person-subjects"))) }) : null, N.length > 0 ? s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: N.map((e, a) => s.jsx("div", { className: "rounded-md border p-3", children: s.jsx(f, { character: e }) }, R(e, a, "entities-person-characters"))) }) : null] })] }) : null, T || C.length > 0 || S.length > 0 ? s.jsxs(n, { children: [s.jsx(d, { children: s.jsx(o, { children: "\u89D2\u8272\u5173\u7CFB\u7ED3\u679C" }) }), s.jsxs(l, { className: "space-y-3", children: [T ? s.jsx("div", { className: "rounded-md border p-3", children: s.jsx(f, { character: T }) }) : null, C.length > 0 ? s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: C.map((e, a) => s.jsx("div", { className: "rounded-md border p-3", children: s.jsx(m, { subject: e }) }, E(e, a, "entities-character-subjects"))) }) : null, S.length > 0 ? s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: S.map((e, a) => s.jsx("div", { className: "rounded-md border p-3", children: s.jsx(I, { person: e }) }, $(e, a, "entities-character-persons"))) }) : null] })] }) : null] });
}
export {
  xs as component
};
