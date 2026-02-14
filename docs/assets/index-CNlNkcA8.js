import { r, j as e } from "./react-D9TtqY-V.js";
import { f as a } from "./@tanstack-3iyDWv8L.js";
import { i } from "./icons-bBaH0MBC.js";
import "./vendor-C4ToNUTj.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C2pyTzVO.js";
function u() {
  const t = a();
  return r.useEffect(() => {
    const s = setTimeout(() => {
      t({ to: "/plaza/characters" });
    }, 500);
    return () => clearTimeout(s);
  }, [t]), e.jsxs("div", { className: "flex flex-col items-center justify-center h-full bg-background space-y-6", children: [e.jsxs("div", { className: "relative", children: [e.jsx("div", { className: "absolute -inset-1 rounded-full bg-primary/20 blur-xl animate-pulse" }), e.jsx(i, { className: "w-20 h-20 text-primary relative" })] }), e.jsxs("div", { className: "text-center space-y-2", children: [e.jsx("h1", { className: "text-4xl font-bold tracking-tight", children: "NexTavern" }), e.jsx("p", { className: "text-muted-foreground", children: "\u6B22\u8FCE\u56DE\u6765\uFF0C\u521B\u4F5C\u8005" })] }), e.jsx("div", { className: "flex items-center gap-2 text-sm text-muted-foreground animate-bounce", children: e.jsx("span", { children: "\u5373\u5C06\u8FDB\u5165\u5E7F\u573A..." }) })] });
}
export {
  u as component
};
