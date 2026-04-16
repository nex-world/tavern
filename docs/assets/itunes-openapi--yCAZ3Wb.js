const m = { "/search": { get: { tags: ["\u641C\u7D22"], summary: "Search iTunes catalog", operationId: "itunesSearch", parameters: [{ name: "term", in: "query", required: true, schema: { type: "string" }, description: "URL \u7F16\u7801\u540E\u7684\u641C\u7D22\u5173\u952E\u8BCD" }, { name: "country", in: "query", required: false, schema: { type: "string", default: "us", example: "jp" }, description: "ISO 3166-1 alpha-2 \u56FD\u5BB6\u4EE3\u7801" }, { name: "media", in: "query", required: false, schema: { type: "string", enum: ["movie", "podcast", "music", "musicVideo", "audiobook", "shortFilm", "tvShow", "software", "ebook", "all"], default: "all" } }, { name: "entity", in: "query", required: false, schema: { type: "string", example: "musicTrack" }, description: "\u4E0E media \u5173\u8054\u7684\u7ED3\u679C\u5B9E\u4F53" }, { name: "attribute", in: "query", required: false, schema: { type: "string", example: "songTerm" }, description: "\u9650\u5236\u641C\u7D22\u5B57\u6BB5" }, { name: "limit", in: "query", required: false, schema: { type: "integer", minimum: 1, maximum: 200, default: 50 } }, { name: "lang", in: "query", required: false, schema: { type: "string", enum: ["en_us", "ja_jp"], default: "en_us" } }, { name: "version", in: "query", required: false, schema: { type: "integer", enum: [1, 2], default: 2 } }, { name: "explicit", in: "query", required: false, schema: { type: "string", enum: ["Yes", "No"], default: "Yes" } }], responses: { 200: { description: "Search results", content: { "application/json": { schema: { $ref: "#/components/schemas/ItunesSearchResponse" } } } } } } }, "/lookup": { get: { tags: ["\u67E5\u627E"], summary: "Lookup by id / amg / upc / isbn", operationId: "itunesLookup", parameters: [{ name: "id", in: "query", required: false, schema: { type: "string" }, description: "iTunes track/collection/artist id" }, { name: "amgArtistId", in: "query", required: false, schema: { type: "string" } }, { name: "amgAlbumId", in: "query", required: false, schema: { type: "string" } }, { name: "amgVideoId", in: "query", required: false, schema: { type: "string" } }, { name: "upc", in: "query", required: false, schema: { type: "string" } }, { name: "isbn", in: "query", required: false, schema: { type: "string" } }, { name: "entity", in: "query", required: false, schema: { type: "string" }, description: "\u8FD4\u56DE\u6269\u5C55\u5173\u8054\u5B9E\u4F53" }, { name: "limit", in: "query", required: false, schema: { type: "integer", minimum: 1, maximum: 200, default: 50 } }, { name: "sort", in: "query", required: false, schema: { type: "string", enum: ["recent"] } }], responses: { 200: { description: "Lookup results", content: { "application/json": { schema: { $ref: "#/components/schemas/ItunesSearchResponse" } } } } } } } }, p = { paths: m }, c = p, y = "https://itunes.apple.com";
function i(a, s) {
  return ((a == null ? void 0 : a.parameters) ?? []).filter((e) => e.in === s && typeof e.name == "string").map((e) => e.name);
}
function d() {
  var _a, _b;
  const a = /* @__PURE__ */ new Map();
  for (const [s, e] of Object.entries(c.paths ?? {})) {
    const o = Object.entries(e ?? {});
    for (const [n, t] of o) {
      if (!t) continue;
      const r = ((_a = t.tags) == null ? void 0 : _a[0]) ?? "\u672A\u5206\u7C7B", u = { id: t.operationId ?? `${n.toUpperCase()} ${s}`, method: n.toUpperCase(), path: s, summary: t.summary ?? t.operationId ?? s, description: t.description, tags: t.tags ?? [], hasRequestBody: !!t.requestBody, requiresAuth: false, pathParams: i(t, "path"), queryParams: i(t, "query") };
      a.has(r) || a.set(r, []), (_b = a.get(r)) == null ? void 0 : _b.push(u);
    }
  }
  return [...a.entries()].map(([s, e]) => ({ tag: s, operations: e })).sort((s, e) => s.tag.localeCompare(e.tag, "zh-CN"));
}
const l = d();
function h() {
  return l.flatMap((a) => a.operations);
}
export {
  y as a,
  h as f,
  l as i
};
