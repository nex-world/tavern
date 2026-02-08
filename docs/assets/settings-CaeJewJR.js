import { r as a, j as e, t as j } from "./react-BQpw03Eg.js";
import { C as u, a as N, b as f, c as g, d as C } from "./card-ClPZDGV4.js";
import { B as v } from "./button-B9brLUSp.js";
import { I as l } from "./input-C44X3vA9.js";
import { L as r } from "./label-DMtPOVS-.js";
import { S as I } from "./switch-BPeiHTCh.js";
import { T as b } from "./textarea-D6rL78Aw.js";
import "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
function M() {
  const o = a.useId(), n = a.useId(), c = a.useId(), d = a.useId(), [t, m] = a.useState({ appName: "My App", enableNotifications: true, theme: "auto", description: "" }), p = () => {
    j.success("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58");
  }, i = (s, h) => {
    m((x) => ({ ...x, [s]: h }));
  };
  return e.jsxs("div", { className: "space-y-6", children: [e.jsx("h1", { className: "text-2xl font-bold", children: "\u5E94\u7528\u8BBE\u7F6E" }), e.jsx("p", { className: "text-muted-foreground", children: "\u7BA1\u7406\u5E94\u7528\u7684\u57FA\u672C\u914D\u7F6E\u548C\u504F\u597D\u8BBE\u7F6E\u3002" }), e.jsxs(u, { children: [e.jsxs(N, { children: [e.jsx(f, { children: "\u57FA\u672C\u8BBE\u7F6E" }), e.jsx(g, { children: "\u914D\u7F6E\u5E94\u7528\u7684\u57FA\u672C\u4FE1\u606F\u548C\u884C\u4E3A\u3002" })] }), e.jsxs(C, { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(r, { htmlFor: o, children: "\u5E94\u7528\u540D\u79F0" }), e.jsx(l, { id: o, value: t.appName, onChange: (s) => i("appName", s.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(r, { htmlFor: n, children: "\u4E3B\u9898" }), e.jsx(l, { id: n, value: t.theme, onChange: (s) => i("theme", s.target.value) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(r, { htmlFor: c, children: "\u63CF\u8FF0" }), e.jsx(b, { id: c, value: t.description, onChange: (s) => i("description", s.target.value), placeholder: "\u8F93\u5165\u5E94\u7528\u63CF\u8FF0..." })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(I, { id: d, checked: t.enableNotifications, onCheckedChange: (s) => i("enableNotifications", s) }), e.jsx(r, { htmlFor: d, children: "\u542F\u7528\u901A\u77E5" })] }), e.jsx(v, { onClick: p, children: "\u4FDD\u5B58\u8BBE\u7F6E" })] })] })] });
}
export {
  M as component
};
