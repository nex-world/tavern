import { r as l, j as e } from "./react-BQpw03Eg.js";
import { O as t, L as r } from "./@tanstack-B4B5CfFY.js";
import { B as a } from "./button-B9brLUSp.js";
import { S as i, a as c, b as m } from "./sheet-ehVu6ZDU.js";
import { M as d } from "./icons-BC63ChG4.js";
import "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-B3Kybfa7.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
function C() {
  const [n, o] = l.useState(false), s = e.jsxs(e.Fragment, { children: [e.jsx("h2", { className: "text-lg font-semibold mb-4", children: "\u914D\u7F6E\u7BA1\u7406" }), e.jsxs("ul", { className: "space-y-2", children: [e.jsx("li", { children: e.jsx(r, { to: "/config/overview", className: "block p-2 rounded hover:bg-foreground/5 md:hover:bg-background", onClick: () => o(false), children: "\u6982\u89C8" }) }), e.jsx("li", { children: e.jsx(r, { to: "/config/llm", className: "block p-2 rounded hover:bg-foreground/5 md:hover:bg-background", onClick: () => o(false), children: "LLM \u914D\u7F6E" }) })] })] });
  return e.jsxs("div", { className: "flex h-full", children: [e.jsx("nav", { className: "hidden md:block w-64 p-4 bg-foreground/5 overflow-y-auto", children: s }), e.jsxs(i, { open: n, onOpenChange: o, children: [e.jsx(c, { asChild: true, children: e.jsx(a, { variant: "outline", size: "icon", className: "md:hidden fixed bottom-8 left-8 rounded-full shadow-lg z-50", children: e.jsx(d, { className: "h-4 w-4" }) }) }), e.jsx(m, { side: "left", className: "w-64 p-4 overflow-y-auto", children: s })] }), e.jsx("main", { className: "flex-1 p-4 lg:px-8 xl:px-12 overflow-auto", children: e.jsx(t, {}) })] });
}
export {
  C as component
};
