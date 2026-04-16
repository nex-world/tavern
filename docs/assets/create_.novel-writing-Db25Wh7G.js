import { r as c, j as e, u as t } from "./react-gFHNOnf5.js";
import { f as d } from "./@tanstack-DDpiKjUN.js";
import { m as x } from "./db-master-DI3V0061.js";
import { n as p } from "./id-OxPLOBIU.js";
import { B as o } from "./button-D3G-RLOw.js";
import { I as h } from "./input-KwncZLGm.js";
import { L as j } from "./label-BU_LC6Ti.js";
import { C as u, a as f, b, c as g, d as N } from "./card-B4CxGEM-.js";
import { A as w, a as C, b as v } from "./alert-r3n7vLN7.js";
import { T as k, h as y, a1 as A } from "./icons-CW-0NDo_.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./zod-DPWJ_A9_.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
function z() {
  const a = d(), [r, n] = c.useState(""), i = async () => {
    if (!r.trim()) {
      t.error("\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0");
      return;
    }
    try {
      const s = p(), m = { id: s, mode: "novel-writing", title: r, createdAt: Date.now(), updatedAt: Date.now(), modeConfig: { projectName: r, keyCharacters: [], hasOutline: false }, modeState: { currentPhase: "design_worldview", currentUIState: "idle", currentChapterIndex: 0, chapterSummaries: [], knowledgeBase: { entities: [], events: [], rules: [] }, progressTracking: { completedChapters: 0, totalWordCount: 0, currentInterestPoints: [], foreshadows: [] }, tempData: {} } };
      await x.sessions.add(m), t.success("\u5C0F\u8BF4\u9879\u76EE\u521B\u5EFA\u6210\u529F"), a({ to: "/session/$sessionId", params: { sessionId: s } });
    } catch (s) {
      console.error(s), t.error("\u521B\u5EFA\u5931\u8D25");
    }
  }, l = () => {
    a({ to: "/create" });
  };
  return e.jsxs("div", { className: "p-6 w-full max-w-2xl mx-auto", children: [e.jsxs(w, { className: "mb-4 border-amber-500/40 bg-amber-500/10 text-amber-950 dark:text-amber-50", children: [e.jsx(k, { className: "h-4 w-4 text-amber-600 dark:text-amber-300" }), e.jsx(C, { className: "text-base", children: "\u529F\u80FD\u4ECD\u5728\u5F00\u53D1\u4E2D" }), e.jsx(v, { className: "text-sm text-amber-900/80 dark:text-amber-50/80", children: "\u5C0F\u8BF4\u521B\u4F5C\u9875\u7684\u5DE5\u4F5C\u6D41\u8FD8\u5728\u6301\u7EED\u5B8C\u5584\uFF0C\u5B58\u5728\u8F83\u591A\u95EE\u9898\uFF0C\u5207\u52FF\u201C\u7528\u5FC3\u201D\u4F7F\u7528\u3002" })] }), e.jsxs(u, { children: [e.jsx(f, { children: e.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [e.jsx("div", { className: "w-12 h-12 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center", children: e.jsx(y, { className: "w-6 h-6 text-white" }) }), e.jsxs("div", { children: [e.jsx(b, { children: "\u521B\u5EFA\u5C0F\u8BF4\u9879\u76EE" }), e.jsx(g, { children: "\u5F00\u59CB\u4F60\u7684\u5C0F\u8BF4\u521B\u4F5C\u4E4B\u65C5" })] })] }) }), e.jsxs(N, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(j, { htmlFor: "projectName", children: "\u9879\u76EE\u540D\u79F0 *" }), e.jsx(h, { id: "projectName", placeholder: "\u4F8B\u5982\uFF1A\u5F02\u4E16\u754C\u7684\u5192\u9669\u4E4B\u65C5", value: r, onChange: (s) => n(s.target.value), onKeyDown: (s) => {
    s.key === "Enter" && i();
  } })] }), e.jsxs("div", { className: "p-4 bg-muted/30 rounded-lg space-y-2", children: [e.jsx("h4", { className: "text-sm font-semibold", children: "\u5C0F\u8BF4\u521B\u4F5C\u6A21\u5F0F\u7279\u70B9" }), e.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [e.jsx("li", { children: "\u2022 \u5B8C\u6574\u7684\u521B\u4F5C\u6D41\u7A0B\uFF1A\u4ECE\u4E16\u754C\u89C2\u8BBE\u8BA1\u5230\u7AE0\u8282\u5199\u4F5C" }), e.jsx("li", { children: "\u2022 AI \u8F85\u52A9\u8BBE\u8BA1\uFF1A\u89D2\u8272\u3001\u4E3B\u9898\u3001\u60C5\u8282\u8109\u7EDC" }), e.jsx("li", { children: "\u2022 \u591A\u79CD\u5199\u4F5C\u6A21\u5F0F\uFF1AAI \u76F4\u63A5\u5199\u4F5C\u3001\u5F15\u5BFC\u5199\u4F5C\u3001\u6DA6\u8272\u7B49" }), e.jsx("li", { children: "\u2022 \u667A\u80FD\u8BC4\u4F30\uFF1A\u7AE0\u8282\u8D28\u91CF\u8BC4\u4F30\u548C\u6539\u8FDB\u5EFA\u8BAE" }), e.jsx("li", { children: "\u2022 \u77E5\u8BC6\u5E93\u7BA1\u7406\uFF1A\u81EA\u52A8\u8BB0\u5F55\u89D2\u8272\u3001\u4E8B\u4EF6\u3001\u8BBE\u5B9A" }), e.jsx("li", { children: "\u2022 \u5B8C\u7ED3\u8D44\u6599\uFF1A\u5168\u4E66\u6458\u8981\u3001\u63A8\u8350\u8BED\u3001\u5BFC\u8BFB\u7B49" })] })] }), e.jsxs("div", { className: "flex justify-end gap-3 pt-4 border-t", children: [e.jsx(o, { variant: "outline", onClick: l, children: "\u53D6\u6D88" }), e.jsxs(o, { onClick: i, disabled: !r.trim(), children: ["\u521B\u5EFA\u5E76\u5F00\u59CB\u8BBE\u8BA1", e.jsx(A, { className: "w-4 h-4 ml-2" })] })] })] })] })] });
}
export {
  z as component
};
