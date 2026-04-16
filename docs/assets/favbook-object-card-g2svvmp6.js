import { j as t } from "./react-gFHNOnf5.js";
import { B as a } from "./badge-C9CmQsZA.js";
import { C as l, d } from "./card-B4CxGEM-.js";
import { F as u } from "./media-item-content-cYjFkmyo.js";
function o(e) {
  return e.includes(":album:") ? "album" : e.includes(":song:") ? "song" : e.includes(":tv:") ? "tv" : e.includes(":movie:") ? "movie" : "subject";
}
function y(e) {
  const r = e.id.split(":").at(-1) ?? e.id;
  return { kind: e.entity, title: e.title, description: e.summary || e.subtitle || "", source: e.source, externalId: r, url: e.url, metadata: { mediaItem: e } };
}
function c(e) {
  const r = e.metadata;
  if (r && typeof r == "object" && "mediaItem" in r) {
    const i = r.mediaItem;
    if (i && typeof i == "object") {
      const n = i;
      if (n.id && n.title && n.source && n.entity && n.url) return n;
    }
  }
  return !e.source || !e.externalId || !e.url ? null : { id: `${e.source}:${e.kind}:${e.externalId}`, source: e.source, entity: o(`${e.source}:${e.kind}:${e.externalId}`), title: e.title, subtitle: s(e.description), summary: s(e.description), image: null, releaseYear: void 0, genres: [], url: e.url };
}
function s(e) {
  return e ?? void 0;
}
function j(e) {
  const r = c(e.object);
  return t.jsx(l, { children: t.jsxs(d, { className: "pt-5 space-y-3", children: [r ? t.jsx(u, { item: r }) : t.jsxs("div", { className: "space-y-2", children: [t.jsx("p", { className: "font-medium text-sm", children: e.object.title }), e.object.description ? t.jsx("p", { className: "text-sm text-muted-foreground whitespace-pre-wrap", children: e.object.description }) : null, t.jsxs("div", { className: "flex flex-wrap gap-2", children: [t.jsx(a, { variant: "secondary", children: e.object.kind }), e.object.source ? t.jsx(a, { variant: "outline", children: e.object.source }) : null] })] }), e.footer ? t.jsx("div", { children: e.footer }) : null] }) });
}
export {
  j as F,
  y as c
};
