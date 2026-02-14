import { j as t, v as r, x as i, y as d, A as l, B as c, O as u } from "./react-D9TtqY-V.js";
import { c as s } from "./shadcn-utils-BMZD7_jZ.js";
import { X as f } from "./icons-bBaH0MBC.js";
function b({ ...e }) {
  return t.jsx(r, { "data-slot": "sheet", ...e });
}
function j({ ...e }) {
  return t.jsx(i, { "data-slot": "sheet-trigger", ...e });
}
function m({ ...e }) {
  return t.jsx(c, { "data-slot": "sheet-portal", ...e });
}
function h({ className: e, ...o }) {
  return t.jsx(u, { "data-slot": "sheet-overlay", className: s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", e), ...o });
}
function y({ className: e, children: o, side: a = "right", ...n }) {
  return t.jsxs(m, { children: [t.jsx(h, {}), t.jsxs(d, { "data-slot": "sheet-content", className: s("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", a === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", a === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", a === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", a === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", e), ...n, children: [o, t.jsxs(l, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [t.jsx(f, { className: "size-4" }), t.jsx("span", { className: "sr-only", children: "Close" })] })] })] });
}
export {
  b as S,
  j as a,
  y as b
};
