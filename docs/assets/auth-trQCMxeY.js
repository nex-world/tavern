import { v as C, r as t, j as e, u } from "./react-gFHNOnf5.js";
import { L as j } from "./@tanstack-DDpiKjUN.js";
import { B as c } from "./button-D3G-RLOw.js";
import { C as w, a as N, b as U, c as F, d as S } from "./card-B4CxGEM-.js";
import { I as h } from "./input-KwncZLGm.js";
import { L as p } from "./label-BU_LC6Ti.js";
import { T, a as A, b as k, c as g } from "./tabs-DYyOSGrZ.js";
import { f as L, h as E, c as B, s as z } from "./favbook-auth-store-Dar1sz9f.js";
import { f as M, a as R, b as I } from "./favbook-client-lY6O9c3T.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
function ee() {
  const s = C(L), [a, x] = t.useState(s.backendUrl), [o, b] = t.useState(""), [n, m] = t.useState(""), [d, f] = t.useState("none");
  t.useEffect(() => {
    E();
  }, []), t.useEffect(() => {
    s.backendUrl && x(s.backendUrl);
  }, [s.backendUrl]);
  async function v(l) {
    const i = a.trim().replace(/\/$/, "");
    if (!i || !o.trim() || !n) {
      u.error("\u8BF7\u586B\u5199\u540E\u7AEF\u5730\u5740\u3001\u7528\u6237\u540D\u548C\u5BC6\u7801");
      return;
    }
    try {
      f(l);
      const r = l === "login" ? await M(i, o.trim(), n) : await R(i, o.trim(), n);
      await I({ backendUrl: i, token: r.token }), z({ backendUrl: i, token: r.token, user: r.user }), u.success(l === "login" ? "\u767B\u5F55\u6210\u529F" : "\u6CE8\u518C\u6210\u529F\u5E76\u5DF2\u767B\u5F55"), m("");
    } catch (r) {
      u.error(r instanceof Error ? r.message : "\u8BF7\u6C42\u5931\u8D25");
    } finally {
      f("none");
    }
  }
  return e.jsx("div", { className: "space-y-4", children: e.jsxs(w, { children: [e.jsxs(N, { children: [e.jsx(U, { children: "Favbook \u8D26\u53F7\u4E0E\u540E\u7AEF\u8FDE\u63A5" }), e.jsx(F, { children: "\u767B\u5F55\u65F6\u9700\u8981\u586B\u5199\u540E\u7AEF\u5730\u5740\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\uFF1B\u6CE8\u518C\u53EA\u9700\u8981\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002" })] }), e.jsxs(S, { className: "space-y-3", children: [s.user ? e.jsxs("div", { className: "rounded-md border p-3 space-y-2", children: [e.jsxs("p", { className: "text-sm", children: ["\u5F53\u524D\u767B\u5F55\u7528\u6237\uFF1A", e.jsx("span", { className: "font-medium", children: s.user.username })] }), e.jsxs("p", { className: "text-xs text-muted-foreground break-all", children: ["\u540E\u7AEF\u5730\u5740\uFF1A", s.backendUrl] }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [e.jsx(c, { asChild: true, type: "button", size: "sm", children: e.jsx(j, { to: "/feeds", children: "\u8FDB\u5165 Feeds" }) }), e.jsx(c, { asChild: true, type: "button", variant: "outline", size: "sm", children: e.jsx(j, { to: "/collections", children: "\u8FDB\u5165 Collections" }) }), e.jsx(c, { type: "button", size: "sm", variant: "destructive", onClick: () => {
    B(), u.success("\u5DF2\u9000\u51FA\u767B\u5F55");
  }, children: "\u9000\u51FA\u767B\u5F55" })] })] }) : null, e.jsxs("div", { className: "space-y-2", children: [e.jsx(p, { htmlFor: "favbook-backend-url", children: "\u540E\u7AEF\u5730\u5740" }), e.jsx(h, { id: "favbook-backend-url", placeholder: "https://favbook-worker.example.workers.dev", value: a, onChange: (l) => x(l.target.value) })] }), e.jsxs(T, { defaultValue: "login", className: "w-full", children: [e.jsxs(A, { className: "grid grid-cols-2 w-full", children: [e.jsx(k, { value: "login", children: "\u767B\u5F55" }), e.jsx(k, { value: "register", children: "\u6CE8\u518C" })] }), e.jsxs(g, { value: "login", className: "space-y-3", children: [e.jsx(y, { username: o, password: n, setUsername: b, setPassword: m }), e.jsx(c, { type: "button", disabled: d !== "none", onClick: () => {
    v("login");
  }, children: d === "login" ? "\u767B\u5F55\u4E2D..." : "\u767B\u5F55" })] }), e.jsxs(g, { value: "register", className: "space-y-3", children: [e.jsx(y, { username: o, password: n, setUsername: b, setPassword: m }), e.jsx(c, { type: "button", disabled: d !== "none", onClick: () => {
    v("register");
  }, children: d === "register" ? "\u6CE8\u518C\u4E2D..." : "\u6CE8\u518C\u5E76\u767B\u5F55" })] })] })] })] }) });
}
function y(s) {
  return e.jsxs(e.Fragment, { children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(p, { htmlFor: "favbook-username", children: "\u7528\u6237\u540D" }), e.jsx(h, { id: "favbook-username", value: s.username, onChange: (a) => s.setUsername(a.target.value), placeholder: "\u81F3\u5C11 3 \u4E2A\u5B57\u7B26" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(p, { htmlFor: "favbook-password", children: "\u5BC6\u7801" }), e.jsx(h, { id: "favbook-password", type: "password", value: s.password, onChange: (a) => s.setPassword(a.target.value), placeholder: "\u81F3\u5C11 6 \u4F4D" })] })] });
}
export {
  ee as component
};
