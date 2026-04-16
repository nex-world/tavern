import { v as k, r as a, j as e } from "./react-gFHNOnf5.js";
import { B as I } from "./button-D3G-RLOw.js";
import { C as c, a as u, b as p, c as h, d as l } from "./card-B4CxGEM-.js";
import { I as B } from "./input-KwncZLGm.js";
import { L as x } from "./label-BU_LC6Ti.js";
import { S as E, a as T, b as $, c as L, d as U } from "./select-BkM7Xz_F.js";
import { b as F } from "./bangumi-store-D4IfMGL6.js";
import { B as M } from "./bangumi-page-header-CjBVz-6c.js";
import { m as R } from "./my9-client-CnYUKa6h.js";
import { M as Y } from "./my9-constants-aq-BUJrZ.js";
import { F as z } from "./media-item-content-cYjFkmyo.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./icons-CW-0NDo_.js";
import "./badge-C9CmQsZA.js";
import "./dialog-CPE3M3ew.js";
function ie() {
  const j = k(F), [i, g] = a.useState(""), [t, b] = a.useState("game"), [d, m] = a.useState(false), [f, v] = a.useState(""), [n, S] = a.useState([]);
  async function y() {
    if (i.trim()) try {
      m(true);
      const s = await R({ baseUrl: j.my9BaseUrl, path: "/subjects/search", method: "GET", query: { q: i, kind: t } });
      v(s.source);
      const o = (s.items ?? []).map((r, C) => {
        var _a;
        const N = r.id ?? `${t}-${C}`, q = r.localizedName ?? r.name ?? "\u672A\u547D\u540D";
        return { id: String(N), source: s.source === "tmdb" ? "tmdb" : s.source === "itunes" ? "itunes" : "bangumi", entity: t === "tv" ? "tv" : t === "movie" ? "movie" : t === "song" ? "song" : t === "album" ? "album" : "subject", title: q, subtitle: r.localizedName ? r.name : void 0, image: r.cover ?? null, releaseYear: r.releaseYear, genres: r.genres ?? [], url: ((_a = r.storeUrls) == null ? void 0 : _a.apple) || `https://bgm.tv/subject/${r.id ?? ""}` };
      });
      S(o);
    } finally {
      m(false);
    }
  }
  return e.jsxs("div", { className: "space-y-4", children: [e.jsx(M, { title: "my9 subjects/search", description: "\u6838\u5FC3\u67E5\u8BE2\u63A5\u53E3\uFF1A\u901A\u8FC7 q + kind \u81EA\u52A8\u5206\u53D1\u5230\u4E0D\u540C\u540E\u7AEF\u6E90\u3002", badge: "q + kind" }), e.jsxs(c, { children: [e.jsxs(u, { children: [e.jsx(p, { children: "\u67E5\u8BE2\u53C2\u6570" }), e.jsx(h, { children: "GET /subjects/search?q=...&kind=..." })] }), e.jsxs(l, { className: "grid grid-cols-1 md:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "space-y-2 md:col-span-2", children: [e.jsx(x, { htmlFor: "my9-q", children: "q" }), e.jsx(B, { id: "my9-q", value: i, onChange: (s) => g(s.target.value), placeholder: "\u5173\u952E\u8BCD" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(x, { children: "kind" }), e.jsxs(E, { value: t, onValueChange: b, children: [e.jsx(T, { children: e.jsx($, { placeholder: "kind" }) }), e.jsx(L, { children: Y.map((s) => e.jsx(U, { value: s, children: s }, s)) })] })] }), e.jsx("div", { className: "flex items-end", children: e.jsx(I, { type: "button", onClick: y, disabled: d, children: d ? "\u8BF7\u6C42\u4E2D..." : "\u6267\u884C\u641C\u7D22" }) })] })] }), e.jsxs(c, { children: [e.jsxs(u, { children: [e.jsx(p, { children: "\u7ED3\u679C" }), e.jsxs(h, { children: ["source: ", f || "-", " \xB7 \u5171 ", n.length, " \u9879"] })] }), e.jsx(l, { children: n.length === 0 ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u6682\u65E0\u7ED3\u679C\u3002" }) : e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: n.map((s, o) => e.jsx(c, { children: e.jsx(l, { className: "pt-6", children: e.jsx(z, { item: s }) }) }, `${s.id}-${o}`)) }) })] })] });
}
export {
  ie as component
};
