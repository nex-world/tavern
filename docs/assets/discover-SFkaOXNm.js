import { v as D, r as a, j as e } from "./react-gFHNOnf5.js";
import { B as E } from "./button-D3G-RLOw.js";
import { C as d, a as y, b as k, c as v, d as u } from "./card-B4CxGEM-.js";
import { I as C } from "./input-KwncZLGm.js";
import { L as l } from "./label-BU_LC6Ti.js";
import { S as b, a as N, b as f, c as S, d as t } from "./select-BkM7Xz_F.js";
import { b as R } from "./bangumi-store-D4IfMGL6.js";
import { i as $ } from "./itunes-client-CGW3tAT7.js";
import { F as G } from "./media-item-content-cYjFkmyo.js";
import { B as q } from "./bangumi-page-header-CjBVz-6c.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./icons-CW-0NDo_.js";
import "./itunes-openapi--yCAZ3Wb.js";
import "./badge-C9CmQsZA.js";
import "./dialog-CPE3M3ew.js";
function oe() {
  const n = D(R), [o, I] = a.useState("search"), [m, w] = a.useState(""), [p, L] = a.useState("musicTrack"), [h, T] = a.useState(""), [x, j] = a.useState(false), [c, V] = a.useState([]);
  async function F() {
    try {
      j(true);
      const i = ((await $({ method: "GET", path: o === "search" ? "/search" : "/lookup", query: o === "search" ? { term: m, media: "music", entity: p, country: n.itunesCountry, lang: n.itunesLang, limit: 24 } : { id: h, country: n.itunesCountry, lang: n.itunesLang } })).results ?? []).map((s, U) => {
        const B = s.trackId ?? s.collectionId ?? U, g = s.trackName ?? s.collectionName ?? "\u672A\u547D\u540D\u6761\u76EE";
        return { id: `itunes-${B}`, source: "itunes", entity: s.trackName ? "song" : "album", title: g, subtitle: s.artistName, image: s.artworkUrl100 ? s.artworkUrl100.replace("100x100bb", "1000x1000bb") : null, releaseYear: s.releaseDate ? Number.parseInt(s.releaseDate.slice(0, 4), 10) : void 0, genres: s.primaryGenreName ? [s.primaryGenreName] : [], url: s.trackViewUrl ?? s.collectionViewUrl ?? `https://music.apple.com/us/search?term=${encodeURIComponent(g)}` };
      });
      V(i);
    } finally {
      j(false);
    }
  }
  return e.jsxs("div", { className: "space-y-4", children: [e.jsx(q, { title: "iTunes \u641C\u7D22\u4E0E\u67E5\u627E", description: "\u652F\u6301 search \u4E0E lookup \u4E24\u79CD\u6A21\u5F0F\u3002", badge: "discover" }), e.jsxs(d, { children: [e.jsxs(y, { children: [e.jsx(k, { children: "\u8BF7\u6C42\u6761\u4EF6" }), e.jsx(v, { children: "\u6A21\u5F0F\u5207\u6362\u540E\u53C2\u6570\u4E0D\u540C" })] }), e.jsxs(u, { className: "space-y-3", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(l, { children: "\u6A21\u5F0F" }), e.jsxs(b, { value: o, onValueChange: (r) => I(r), children: [e.jsx(N, { children: e.jsx(f, { placeholder: "\u6A21\u5F0F" }) }), e.jsxs(S, { children: [e.jsx(t, { value: "search", children: "search" }), e.jsx(t, { value: "lookup", children: "lookup" })] })] })] }), o === "search" ? e.jsxs(e.Fragment, { children: [e.jsxs("div", { className: "space-y-2 md:col-span-2", children: [e.jsx(l, { htmlFor: "itunes-keyword", children: "\u5173\u952E\u8BCD" }), e.jsx(C, { id: "itunes-keyword", value: m, onChange: (r) => w(r.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(l, { children: "entity" }), e.jsxs(b, { value: p, onValueChange: L, children: [e.jsx(N, { children: e.jsx(f, { placeholder: "entity" }) }), e.jsxs(S, { children: [e.jsx(t, { value: "musicTrack", children: "musicTrack" }), e.jsx(t, { value: "album", children: "album" }), e.jsx(t, { value: "song", children: "song" }), e.jsx(t, { value: "musicVideo", children: "musicVideo" })] })] })] })] }) : e.jsxs("div", { className: "space-y-2 md:col-span-3", children: [e.jsx(l, { htmlFor: "itunes-lookup", children: "Lookup ID" }), e.jsx(C, { id: "itunes-lookup", value: h, onChange: (r) => T(r.target.value), placeholder: "\u4F8B\u5982\uFF1A909253" })] })] }), e.jsx(E, { type: "button", onClick: F, disabled: x, children: x ? "\u8BF7\u6C42\u4E2D..." : "\u6267\u884C" })] })] }), e.jsxs(d, { children: [e.jsxs(y, { children: [e.jsx(k, { children: "\u7ED3\u679C" }), e.jsxs(v, { children: ["\u5171 ", c.length, " \u9879"] })] }), e.jsx(u, { children: c.length === 0 ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u6682\u65E0\u7ED3\u679C\u3002" }) : e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3", children: c.map((r, i) => e.jsx(d, { children: e.jsx(u, { className: "pt-6", children: e.jsx(G, { item: r }) }) }, `${r.id}-${i}`)) }) })] })] });
}
export {
  oe as component
};
