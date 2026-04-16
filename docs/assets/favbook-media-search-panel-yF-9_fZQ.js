import { v as F, r as n, j as e } from "./react-gFHNOnf5.js";
import { B as k } from "./button-D3G-RLOw.js";
import { C as g, a as L, b as D, c as K, d as f } from "./card-B4CxGEM-.js";
import { I as p } from "./input-KwncZLGm.js";
import { L as c } from "./label-BU_LC6Ti.js";
import { S as y, a as S, b as T, c as w, d as i } from "./select-BkM7Xz_F.js";
import { s as A, a as E, b as R, c as U, d as V, f as O, g as P, e as W } from "./search-DglwIvcr.js";
import { F as _ } from "./media-item-content-cYjFkmyo.js";
import { b as z } from "./bangumi-store-D4IfMGL6.js";
import { M as H } from "./my9-constants-aq-BUJrZ.js";
function ie(r) {
  const d = F(z), [o, C] = n.useState(""), [a, I] = n.useState("mixed-work"), [m, M] = n.useState("work"), [u, N] = n.useState(""), [h, x] = n.useState(false), [j, B] = n.useState([]), l = u.trim() || d.tmdbAccessToken, b = (a === "tmdb-movie" || a === "tmdb-tv" || a === "mixed-work") && !l.trim(), v = n.useMemo(() => new Set(r.pickedIds ?? []), [r.pickedIds]);
  async function q() {
    const s = o.trim();
    if (s) {
      x(true);
      try {
        let t = [];
        a === "itunes-song" ? t = await A(s) : a === "itunes-album" ? t = await E(s) : a === "itunes-mixed" ? t = await R(s) : a === "tmdb-movie" ? t = await U(s, l) : a === "tmdb-tv" ? t = await V(s, l) : a === "bangumi-subject" ? t = await O(s, d.accessToken) : a === "my9-subjects" ? t = await P(s, { baseUrl: d.my9BaseUrl, kind: m }) : t = await W(s, { tmdbToken: l, bangumiAccessToken: d.accessToken }), B(t);
      } finally {
        x(false);
      }
    }
  }
  return e.jsxs(g, { children: [e.jsxs(L, { children: [e.jsx(D, { children: r.title ?? "\u4E34\u65F6\u641C\u7D22\u6536\u85CF\u5BF9\u8C61" }), e.jsx(K, { children: r.description ?? "\u76F4\u63A5\u4F7F\u7528\u9879\u76EE\u5DF2\u652F\u6301\u6765\u6E90\u641C\u7D22\uFF0C\u7ED3\u679C\u53EF\u76F4\u63A5\u9009\u4E3A\u6536\u85CF\u5BF9\u8C61\u3002" })] }), e.jsxs(f, { className: "space-y-3 overflow-auto max-h-[70vh]", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "space-y-2 md:col-span-2", children: [e.jsx(c, { htmlFor: "favbook-media-query", children: "\u5173\u952E\u8BCD" }), e.jsx(p, { id: "favbook-media-query", value: o, onChange: (s) => C(s.target.value), placeholder: "\u4F8B\u5982\uFF1A\u9ED1\u795E\u8BDD / \u4E09\u4F53 / Interstellar" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { children: "\u6A21\u5F0F" }), e.jsxs(y, { value: a, onValueChange: (s) => I(s), children: [e.jsx(S, { children: e.jsx(T, { placeholder: "\u9009\u62E9\u6A21\u5F0F" }) }), e.jsxs(w, { children: [e.jsx(i, { value: "mixed-work", children: "mixed-work" }), e.jsx(i, { value: "tmdb-movie", children: "tmdb-movie" }), e.jsx(i, { value: "tmdb-tv", children: "tmdb-tv" }), e.jsx(i, { value: "bangumi-subject", children: "bangumi-subject" }), e.jsx(i, { value: "my9-subjects", children: "my9-subjects" }), e.jsx(i, { value: "itunes-mixed", children: "itunes-mixed" }), e.jsx(i, { value: "itunes-song", children: "itunes-song" }), e.jsx(i, { value: "itunes-album", children: "itunes-album" })] })] })] }), e.jsx("div", { className: "flex items-end", children: e.jsx(k, { type: "button", onClick: q, disabled: h || b, children: h ? "\u641C\u7D22\u4E2D..." : "\u641C\u7D22" }) })] }), a === "my9-subjects" ? e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { children: "my9 kind" }), e.jsxs(y, { value: m, onValueChange: M, children: [e.jsx(S, { children: e.jsx(T, { placeholder: "\u9009\u62E9 my9 kind" }) }), e.jsx(w, { children: H.map((s) => e.jsx(i, { value: s, children: s }, s)) })] })] }) : null, e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { htmlFor: "favbook-tmdb-token-override", children: "TMDB Token\uFF08\u53EF\u8986\u76D6\uFF09" }), e.jsx(p, { id: "favbook-tmdb-token-override", type: "password", placeholder: "\u82E5\u5168\u5C40\u672A\u914D\u7F6E\uFF0C\u53EF\u5728\u8FD9\u91CC\u4E34\u65F6\u586B\u5199", value: u, onChange: (s) => N(s.target.value) })] }), b ? e.jsx("p", { className: "text-xs text-destructive", children: "\u5F53\u524D\u641C\u7D22\u6A21\u5F0F\u4F9D\u8D56 TMDB Token\u3002" }) : null, j.length === 0 ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u6682\u65E0\u7ED3\u679C\uFF0C\u8F93\u5165\u5173\u952E\u8BCD\u540E\u6267\u884C\u641C\u7D22\u3002" }) : e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: j.map((s) => e.jsx(g, { children: e.jsxs(f, { className: "pt-5 space-y-3", children: [e.jsx(_, { item: s }), e.jsx(k, { type: "button", size: "sm", variant: v.has(s.id) ? "secondary" : "default", onClick: () => r.onPick(s), children: v.has(s.id) ? "\u5DF2\u9009\u62E9" : r.pickLabel ?? "\u9009\u62E9\u8BE5\u5BF9\u8C61" })] }) }, s.id)) })] })] });
}
export {
  ie as F
};
