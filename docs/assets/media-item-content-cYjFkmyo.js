import { j as e } from "./react-gFHNOnf5.js";
import { B as s } from "./badge-C9CmQsZA.js";
import { D as l, g as o, a as c } from "./dialog-CPE3M3ew.js";
const m = "https://lain.bgm.tv/img/no_icon_subject.png";
function u(a) {
  return a.source === "itunes" ? "Apple" : a.source === "tmdb" ? "TMDB" : "Bangumi";
}
function h(a) {
  const { item: t } = a, r = t.image || m;
  return e.jsxs("div", { className: "flex items-start gap-3", children: [e.jsxs(l, { children: [e.jsx(o, { asChild: true, children: e.jsx("button", { type: "button", className: "rounded-md border bg-muted/30 p-1 hover:bg-muted/50 transition-colors", "aria-label": `\u67E5\u770B\u5927\u56FE ${t.title}`, children: e.jsx("img", { src: r, alt: t.title, className: "max-h-28 max-w-24 h-auto w-auto object-contain", loading: "lazy" }) }) }), e.jsx(c, { className: "max-w-[92vw] p-2", children: e.jsx("div", { className: "flex items-center justify-center", children: e.jsx("img", { src: r, alt: t.title, className: "max-h-[86vh] max-w-[88vw] h-auto w-auto object-contain" }) }) })] }), e.jsxs("div", { className: "min-w-0 space-y-2", children: [e.jsx("a", { href: t.url, target: "_blank", rel: "noreferrer", className: "font-medium leading-tight line-clamp-2 underline-offset-2 hover:underline", children: t.title }), t.subtitle ? e.jsx("p", { className: "text-xs text-muted-foreground line-clamp-1", children: t.subtitle }) : null, t.summary ? e.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: t.summary }) : null, e.jsxs("div", { className: "flex flex-wrap gap-1", children: [e.jsx(s, { variant: "secondary", children: u(t) }), e.jsx(s, { variant: "outline", children: t.entity }), t.releaseYear ? e.jsx(s, { variant: "outline", children: t.releaseYear }) : null, (t.genres ?? []).slice(0, 3).map((i, n) => e.jsx(s, { variant: "outline", children: i }, `${i}-${n}`))] })] })] });
}
export {
  h as F
};
