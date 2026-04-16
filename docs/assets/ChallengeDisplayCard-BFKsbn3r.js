import { j as e } from "./react-gFHNOnf5.js";
import { C as n, a as t, b as i, c, d as r, e as d } from "./card-B4CxGEM-.js";
import { B as m } from "./button-D3G-RLOw.js";
import { s as o, D as h } from "./icons-CW-0NDo_.js";
const f = (s) => {
  var _a;
  return e.jsxs(n, { className: "hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col", onClick: () => {
    var _a2;
    return (_a2 = s.onClick) == null ? void 0 : _a2.call(s, s.challenge);
  }, children: [e.jsx(t, { className: "pb-2", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center", children: e.jsx(o, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(i, { className: "text-lg", children: s.challenge.name }), e.jsx(c, { className: "line-clamp-1", children: (_a = s.challenge.tags) == null ? void 0 : _a.join(", ") })] })] }) }), e.jsxs(r, { className: "grow", children: [e.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3 mb-4", children: s.challenge.description }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "text-xs font-medium flex items-center gap-1", children: [e.jsx(h, { className: "w-3 h-3" }), "\u76EE\u6807 (", s.challenge.goals.length, "):"] }), e.jsxs("ul", { className: "text-xs text-muted-foreground list-disc list-inside", children: [s.challenge.goals.slice(0, 2).map((l, a) => e.jsx("li", { className: "line-clamp-1", children: l.description }, a)), s.challenge.goals.length > 2 && e.jsxs("li", { className: "list-none", children: ["...\u53CA\u5176\u4ED6 ", s.challenge.goals.length - 2, " \u4E2A\u76EE\u6807"] })] })] })] }), e.jsx(d, { className: "pt-0 pb-4 border-t-0", children: e.jsx(m, { variant: "outline", size: "sm", className: "w-full text-xs", onClick: (l) => {
    var _a2;
    l.stopPropagation(), (_a2 = s.onStartSession) == null ? void 0 : _a2.call(s, s.challenge);
  }, type: "button", children: "\u5F00\u59CB\u6311\u6218" }) })] });
};
export {
  f as C
};
