import { v as V, r as a, j as e } from "./react-gFHNOnf5.js";
import { B as T } from "./button-D3G-RLOw.js";
import { C as r, a as o, b as m, c as b, d as l } from "./card-B4CxGEM-.js";
import { I as _ } from "./input-KwncZLGm.js";
import { L as u } from "./label-BU_LC6Ti.js";
import { S as k, a as w, b as I, c as D, d as n } from "./select-BkM7Xz_F.js";
import { b as z } from "./bangumi-store-D4IfMGL6.js";
import { a as $ } from "./tmdb-client-BjMMTYpo.js";
import { F as H } from "./media-item-content-cYjFkmyo.js";
import { B as J } from "./bangumi-page-header-CjBVz-6c.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./icons-CW-0NDo_.js";
import "./badge-C9CmQsZA.js";
import "./dialog-CPE3M3ew.js";
function K(i) {
  return i ? `https://image.tmdb.org/t/p/w500${i}` : null;
}
function me() {
  const i = V(z), [d, B] = a.useState("multi"), [h, E] = a.useState(""), [y, L] = a.useState("movie"), [x, q] = a.useState(""), [p, c] = a.useState(false), [j, A] = a.useState([]), [N, F] = a.useState(null), g = !i.tmdbAccessToken.trim();
  async function G() {
    if (h.trim()) try {
      c(true);
      const v = ((await $({ method: "GET", path: `/search/${d}`, query: { query: h, language: "zh-CN", page: 1, include_adult: false }, accessToken: i.tmdbAccessToken })).results ?? []).map((t) => {
        const f = d === "multi" ? t.media_type === "tv" ? "tv" : "movie" : d, R = `${f}:${t.id}`, C = t.title ?? t.name ?? "\u672A\u547D\u540D", S = t.original_title ?? t.original_name;
        return { id: R, source: "tmdb", entity: f, title: C, subtitle: S === C ? void 0 : S, summary: t.overview, image: K(t.poster_path), releaseYear: t.release_date ? Number.parseInt(t.release_date.slice(0, 4), 10) : t.first_air_date ? Number.parseInt(t.first_air_date.slice(0, 4), 10) : void 0, genres: [], url: `https://www.themoviedb.org/${f}/${t.id}` };
      });
      A(v);
    } finally {
      c(false);
    }
  }
  async function M() {
    if (x.trim()) try {
      c(true);
      const s = await $({ method: "GET", path: `/${y}/${x}`, query: { language: "zh-CN", append_to_response: "images,videos,credits" }, accessToken: i.tmdbAccessToken });
      F(s);
    } finally {
      c(false);
    }
  }
  return e.jsxs("div", { className: "space-y-4", children: [e.jsx(J, { title: "TMDB \u641C\u7D22\u4E0E\u8BE6\u60C5", description: "\u652F\u6301 movie / tv / multi \u641C\u7D22\u4E0E\u8BE6\u60C5\u62C9\u53D6\u3002", badge: "discover" }), e.jsxs(r, { children: [e.jsxs(o, { children: [e.jsx(m, { children: "\u641C\u7D22" }), e.jsx(b, { children: "GET /search/movie|tv|multi" })] }), e.jsxs(l, { className: "grid grid-cols-1 md:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(u, { children: "\u76EE\u6807" }), e.jsxs(k, { value: d, onValueChange: (s) => B(s), children: [e.jsx(w, { children: e.jsx(I, { placeholder: "\u76EE\u6807" }) }), e.jsxs(D, { children: [e.jsx(n, { value: "multi", children: "multi" }), e.jsx(n, { value: "movie", children: "movie" }), e.jsx(n, { value: "tv", children: "tv" })] })] })] }), e.jsxs("div", { className: "space-y-2 md:col-span-2", children: [e.jsx(u, { htmlFor: "tmdb-keyword", children: "\u5173\u952E\u8BCD" }), e.jsx(_, { id: "tmdb-keyword", value: h, onChange: (s) => E(s.target.value) })] }), e.jsx("div", { className: "flex items-end", children: e.jsx(T, { type: "button", onClick: G, disabled: p || g, children: p ? "\u8BF7\u6C42\u4E2D..." : "\u6267\u884C\u641C\u7D22" }) })] })] }), e.jsxs(r, { children: [e.jsxs(o, { children: [e.jsx(m, { children: "\u8BE6\u60C5" }), e.jsxs(b, { children: ["GET /movie/", "{id}", " \u6216 /tv/", "{id}"] })] }), e.jsxs(l, { className: "grid grid-cols-1 md:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(u, { children: "\u7C7B\u578B" }), e.jsxs(k, { value: y, onValueChange: (s) => L(s), children: [e.jsx(w, { children: e.jsx(I, { placeholder: "\u7C7B\u578B" }) }), e.jsxs(D, { children: [e.jsx(n, { value: "movie", children: "movie" }), e.jsx(n, { value: "tv", children: "tv" })] })] })] }), e.jsxs("div", { className: "space-y-2 md:col-span-2", children: [e.jsx(u, { htmlFor: "tmdb-detail-id", children: "ID" }), e.jsx(_, { id: "tmdb-detail-id", value: x, onChange: (s) => q(s.target.value) })] }), e.jsx("div", { className: "flex items-end", children: e.jsx(T, { type: "button", variant: "outline", onClick: M, disabled: p || g, children: "\u62C9\u53D6\u8BE6\u60C5" }) })] })] }), g ? e.jsx("p", { className: "text-xs text-destructive", children: "TMDB \u529F\u80FD\u9700\u8981 Read Access Token\u3002" }) : null, e.jsxs(r, { children: [e.jsxs(o, { children: [e.jsx(m, { children: "\u641C\u7D22\u7ED3\u679C" }), e.jsxs(b, { children: ["\u5171 ", j.length, " \u9879"] })] }), e.jsx(l, { children: j.length === 0 ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u6682\u65E0\u7ED3\u679C\u3002" }) : e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: j.map((s, v) => e.jsx(r, { children: e.jsx(l, { className: "pt-6", children: e.jsx(H, { item: s }) }) }, `${s.id}-${v}`)) }) })] }), N ? e.jsxs(r, { children: [e.jsx(o, { children: e.jsx(m, { children: "\u8BE6\u60C5\u7ED3\u679C" }) }), e.jsx(l, { children: e.jsx("pre", { className: "text-xs bg-muted/50 p-3 rounded-md overflow-x-auto", children: JSON.stringify(N, null, 2) }) })] }) : null] });
}
export {
  me as component
};
