import { v as p, r as i, j as e } from "./react-gFHNOnf5.js";
import { C as t, a as r, b as n, d as a, c as j } from "./card-B4CxGEM-.js";
import { B as c } from "./badge-C9CmQsZA.js";
import { b as u } from "./bangumi-store-D4IfMGL6.js";
import { t as d, a as f } from "./tmdb-client-BjMMTYpo.js";
import { B as g } from "./bangumi-page-header-CjBVz-6c.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
function G() {
  const s = p(u), [l, o] = i.useState(null), m = i.useMemo(() => d.reduce((x, h) => x + h.operations.length, 0), []);
  return i.useEffect(() => {
    if (!s.tmdbAccessToken.trim()) {
      o(null);
      return;
    }
    f({ method: "GET", path: "/configuration", accessToken: s.tmdbAccessToken }).then(o).catch(() => o(null));
  }, [s.tmdbAccessToken]), e.jsxs("div", { className: "space-y-4", children: [e.jsx(g, { title: "TMDB API", description: "\u6309\u5B98\u65B9 API \u6587\u6863\u6574\u7406\u4E86\u9AD8\u9891\u7AEF\u70B9\uFF0C\u5E76\u63D0\u4F9B\u641C\u7D22\u3001\u8BE6\u60C5\u3001\u5B9E\u9A8C\u53F0\u3002", badge: "TMDB" }), e.jsxs("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [e.jsxs(t, { children: [e.jsx(r, { children: e.jsx(n, { className: "text-base", children: "\u63A5\u53E3\u5206\u7EC4" }) }), e.jsx(a, { children: e.jsx("p", { className: "text-3xl font-semibold", children: d.length }) })] }), e.jsxs(t, { children: [e.jsx(r, { children: e.jsx(n, { className: "text-base", children: "\u603B\u63A5\u53E3\u6570" }) }), e.jsx(a, { children: e.jsx("p", { className: "text-3xl font-semibold", children: m }) })] }), e.jsxs(t, { children: [e.jsx(r, { children: e.jsx(n, { className: "text-base", children: "\u9274\u6743\u72B6\u6001" }) }), e.jsx(a, { children: s.tmdbAccessToken.trim() ? e.jsx(c, { variant: "secondary", children: "Token \u5DF2\u586B\u5199" }) : e.jsx(c, { variant: "destructive", children: "\u7F3A\u5C11 Token" }) })] })] }), e.jsxs(t, { children: [e.jsxs(r, { children: [e.jsx(n, { children: "\u914D\u7F6E\u63A5\u53E3\u9884\u89C8" }), e.jsx(j, { children: "GET /configuration" })] }), e.jsx(a, { children: s.tmdbAccessToken.trim() ? e.jsx("pre", { className: "text-xs bg-muted/50 p-3 rounded-md overflow-x-auto", children: JSON.stringify(l, null, 2) }) : e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u5148\u586B\u5199 Token \u4EE5\u52A0\u8F7D\u914D\u7F6E\u3002" }) })] })] });
}
export {
  G as component
};
