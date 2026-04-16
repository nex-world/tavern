import { v as w, r as a, j as e, u as p } from "./react-gFHNOnf5.js";
import { B as I } from "./button-D3G-RLOw.js";
import { C as d, a as j, b as g, c as b, d as l } from "./card-B4CxGEM-.js";
import { I as v } from "./input-KwncZLGm.js";
import { L as c } from "./label-BU_LC6Ti.js";
import { S as N, a as D, b as q, c as L, d as r } from "./select-BkM7Xz_F.js";
import { B as $ } from "./bangumi-page-header-CjBVz-6c.js";
import { b as A } from "./bangumi-store-D4IfMGL6.js";
import { s as F, a as R, b as E, c as H, d as V, e as K } from "./search-DglwIvcr.js";
import { F as P } from "./media-item-content-cYjFkmyo.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./icons-CW-0NDo_.js";
import "./badge-C9CmQsZA.js";
import "./bangumi-client-Bal74wg2.js";
import "./my9-client-CnYUKa6h.js";
import "./dialog-CPE3M3ew.js";
function me() {
  const T = w(A), [m, f] = a.useState(""), [t, k] = a.useState("mixed-work"), [n, y] = a.useState(""), [u, x] = a.useState(false), [o, S] = a.useState([]), h = (t === "tmdb-movie" || t === "tmdb-tv" || t === "mixed-work") && !n.trim(), B = a.useMemo(() => t === "itunes-song" ? "iTunes \u6B4C\u66F2" : t === "itunes-album" ? "iTunes \u4E13\u8F91" : t === "itunes-mixed" ? "iTunes \u6DF7\u5408" : t === "tmdb-movie" ? "TMDB \u7535\u5F71" : t === "tmdb-tv" ? "TMDB \u7535\u89C6\u5267" : "Bangumi + TMDB \u6DF7\u5408", [t]);
  async function M() {
    const s = m.trim();
    if (s) try {
      x(true);
      let i = [];
      t === "itunes-song" ? i = await F(s) : t === "itunes-album" ? i = await R(s) : t === "itunes-mixed" ? i = await E(s) : t === "tmdb-movie" ? i = await H(s, n) : t === "tmdb-tv" ? i = await V(s, n) : i = await K(s, { tmdbToken: n, bangumiAccessToken: T.accessToken }), S(i), p.success(`\u5DF2\u83B7\u53D6 ${i.length} \u6761\u7ED3\u679C`);
    } catch (i) {
      const C = i instanceof Error ? i.message : "\u641C\u7D22\u5931\u8D25";
      p.error(C);
    } finally {
      x(false);
    }
  }
  return e.jsxs("div", { className: "space-y-4", children: [e.jsx($, { title: "\u591A\u6E90\u5A92\u4F53\u641C\u7D22", description: "\u53C2\u8003 my9-lib \u7684\u8BBE\u8BA1\uFF0C\u63A5\u5165 iTunes \u4E0E TMDB\uFF0C\u5E76\u63D0\u4F9B\u4E0E Bangumi \u7684\u6DF7\u5408\u68C0\u7D22\u3002", badge: "media" }), e.jsxs(d, { children: [e.jsxs(j, { children: [e.jsx(g, { children: "\u641C\u7D22\u63A7\u5236\u53F0" }), e.jsx(b, { children: "iTunes \u65E0\u9700 Token\uFF1BTMDB \u4E0E mixed-work \u9700\u8981 TMDB Read Access Token\u3002" })] }), e.jsxs(l, { className: "space-y-3", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "space-y-2 md:col-span-2", children: [e.jsx(c, { htmlFor: "media-query", children: "\u5173\u952E\u8BCD" }), e.jsx(v, { id: "media-query", value: m, onChange: (s) => f(s.target.value), placeholder: "\u4F8B\u5982\uFF1A\u653B\u58F3\u673A\u52A8\u961F / \u5B87\u591A\u7530\u30D2\u30AB\u30EB / Inception" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { children: "\u641C\u7D22\u6A21\u5F0F" }), e.jsxs(N, { value: t, onValueChange: (s) => k(s), children: [e.jsx(D, { children: e.jsx(q, { placeholder: "\u9009\u62E9\u6A21\u5F0F" }) }), e.jsxs(L, { children: [e.jsx(r, { value: "mixed-work", children: "mixed-work" }), e.jsx(r, { value: "tmdb-movie", children: "tmdb-movie" }), e.jsx(r, { value: "tmdb-tv", children: "tmdb-tv" }), e.jsx(r, { value: "itunes-mixed", children: "itunes-mixed" }), e.jsx(r, { value: "itunes-song", children: "itunes-song" }), e.jsx(r, { value: "itunes-album", children: "itunes-album" })] })] })] }), e.jsx("div", { className: "flex items-end", children: e.jsx(I, { type: "button", onClick: M, disabled: u || h, children: u ? "\u641C\u7D22\u4E2D..." : "\u5F00\u59CB\u641C\u7D22" }) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { htmlFor: "tmdb-token", children: "TMDB Read Access Token" }), e.jsx(v, { id: "tmdb-token", type: "password", value: n, onChange: (s) => y(s.target.value), placeholder: "\u9700\u8981 TMDB \u7684\u6A21\u5F0F\u5FC5\u987B\u586B\u5199" })] }), h ? e.jsx("p", { className: "text-xs text-destructive", children: "\u5F53\u524D\u6A21\u5F0F\u4F9D\u8D56 TMDB Token\uFF0C\u672A\u586B\u5199\u524D\u5DF2\u7981\u7528\u641C\u7D22\u3002" }) : null] })] }), e.jsxs(d, { children: [e.jsxs(j, { children: [e.jsx(g, { children: "\u7ED3\u679C\u5217\u8868" }), e.jsxs(b, { children: [B, " \xB7 \u5171 ", o.length, " \u9879"] })] }), e.jsx(l, { children: o.length === 0 ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u6682\u65E0\u7ED3\u679C\uFF0C\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u540E\u641C\u7D22\u3002" }) : e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: o.map((s, i) => e.jsx(d, { children: e.jsx(l, { className: "pt-6", children: e.jsx(P, { item: s }) }) }, `${s.id}-${s.source}-${s.entity}-${i}`)) }) })] })] });
}
export {
  me as component
};
