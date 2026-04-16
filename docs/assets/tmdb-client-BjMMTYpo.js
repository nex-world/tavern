const p = { "/configuration": { get: { tags: ["Configuration"], summary: "Get API configuration", operationId: "tmdbConfiguration", responses: { 200: { description: "Configuration", content: { "application/json": { schema: { $ref: "#/components/schemas/ConfigurationResponse" } } } } } } }, "/search/movie": { get: { tags: ["Search"], summary: "Search movies", operationId: "tmdbSearchMovie", parameters: [{ name: "query", in: "query", required: true, schema: { type: "string" } }, { name: "include_adult", in: "query", schema: { type: "boolean", default: false } }, { name: "language", in: "query", schema: { type: "string", default: "en-US" } }, { name: "page", in: "query", schema: { type: "integer", minimum: 1, default: 1 } }, { name: "region", in: "query", schema: { type: "string", example: "US" } }, { name: "year", in: "query", schema: { type: "integer" } }, { name: "primary_release_year", in: "query", schema: { type: "integer" } }], responses: { 200: { description: "Movie search result", content: { "application/json": { schema: { $ref: "#/components/schemas/PagedMovieSearchResponse" } } } } } } }, "/search/tv": { get: { tags: ["Search"], summary: "Search TV", operationId: "tmdbSearchTv", parameters: [{ name: "query", in: "query", required: true, schema: { type: "string" } }, { name: "include_adult", in: "query", schema: { type: "boolean", default: false } }, { name: "language", in: "query", schema: { type: "string", default: "en-US" } }, { name: "page", in: "query", schema: { type: "integer", minimum: 1, default: 1 } }, { name: "first_air_date_year", in: "query", schema: { type: "integer" } }], responses: { 200: { description: "TV search result", content: { "application/json": { schema: { $ref: "#/components/schemas/PagedTvSearchResponse" } } } } } } }, "/search/multi": { get: { tags: ["Search"], summary: "Search multi", operationId: "tmdbSearchMulti", parameters: [{ name: "query", in: "query", required: true, schema: { type: "string" } }, { name: "include_adult", in: "query", schema: { type: "boolean", default: false } }, { name: "language", in: "query", schema: { type: "string", default: "en-US" } }, { name: "page", in: "query", schema: { type: "integer", minimum: 1, default: 1 } }], responses: { 200: { description: "Multi search result", content: { "application/json": { schema: { $ref: "#/components/schemas/PagedMultiSearchResponse" } } } } } } }, "/movie/{movie_id}": { get: { tags: ["Movie"], summary: "Movie details", operationId: "tmdbMovieDetails", parameters: [{ name: "movie_id", in: "path", required: true, schema: { type: "integer" } }, { name: "language", in: "query", schema: { type: "string", default: "en-US" } }, { name: "append_to_response", in: "query", schema: { type: "string" }, description: "credits,images,videos \u7B49" }], responses: { 200: { description: "Movie details", content: { "application/json": { schema: { $ref: "#/components/schemas/MovieDetail" } } } } } } }, "/tv/{tv_id}": { get: { tags: ["TV"], summary: "TV details", operationId: "tmdbTvDetails", parameters: [{ name: "tv_id", in: "path", required: true, schema: { type: "integer" } }, { name: "language", in: "query", schema: { type: "string", default: "en-US" } }, { name: "append_to_response", in: "query", schema: { type: "string" } }], responses: { 200: { description: "TV details", content: { "application/json": { schema: { $ref: "#/components/schemas/TvDetail" } } } } } } }, "/genre/movie/list": { get: { tags: ["Genre"], summary: "Movie genres", operationId: "tmdbMovieGenres", parameters: [{ name: "language", in: "query", schema: { type: "string", default: "en-US" } }], responses: { 200: { description: "Genres", content: { "application/json": { schema: { $ref: "#/components/schemas/GenreListResponse" } } } } } } }, "/genre/tv/list": { get: { tags: ["Genre"], summary: "TV genres", operationId: "tmdbTvGenres", parameters: [{ name: "language", in: "query", schema: { type: "string", default: "en-US" } }], responses: { 200: { description: "Genres", content: { "application/json": { schema: { $ref: "#/components/schemas/GenreListResponse" } } } } } } }, "/trending/{media_type}/{time_window}": { get: { tags: ["Trending"], summary: "Trending", operationId: "tmdbTrending", parameters: [{ name: "media_type", in: "path", required: true, schema: { type: "string", enum: ["all", "movie", "tv", "person"] } }, { name: "time_window", in: "path", required: true, schema: { type: "string", enum: ["day", "week"] } }, { name: "language", in: "query", schema: { type: "string", default: "en-US" } }], responses: { 200: { description: "Trending result", content: { "application/json": { schema: { $ref: "#/components/schemas/PagedMultiSearchResponse" } } } } } } } }, c = { paths: p }, u = c, d = "https://api.themoviedb.org/3";
function o(t, n) {
  return ((t == null ? void 0 : t.parameters) ?? []).filter((e) => e.in === n && typeof e.name == "string").map((e) => e.name);
}
function h(t) {
  const n = (t == null ? void 0 : t.security) ?? [];
  return n.length === 0 || n.some((e) => Object.prototype.hasOwnProperty.call(e, "BearerAuth"));
}
function g() {
  var _a, _b;
  const t = /* @__PURE__ */ new Map();
  for (const [n, e] of Object.entries(u.paths ?? {})) {
    const s = Object.entries(e ?? {});
    for (const [r, a] of s) {
      if (!a) continue;
      const i = ((_a = a.tags) == null ? void 0 : _a[0]) ?? "\u672A\u5206\u7C7B", m = { id: a.operationId ?? `${r.toUpperCase()} ${n}`, method: r.toUpperCase(), path: n, summary: a.summary ?? a.operationId ?? n, description: a.description, tags: a.tags ?? [], hasRequestBody: !!a.requestBody, requiresAuth: h(a), pathParams: o(a, "path"), queryParams: o(a, "query") };
      t.has(i) || t.set(i, []), (_b = t.get(i)) == null ? void 0 : _b.push(m);
    }
  }
  return [...t.entries()].map(([n, e]) => ({ tag: n, operations: e })).sort((n, e) => n.tag.localeCompare(e.tag, "zh-CN"));
}
const l = g();
function f() {
  return l.flatMap((t) => t.operations);
}
function y(t, n) {
  const e = new URL(t, d);
  if (!n) return e;
  for (const [s, r] of Object.entries(n)) r == null || r === "" || e.searchParams.set(s, String(r));
  return e;
}
async function q(t) {
  const n = y(t.path, t.query), e = { Accept: "application/json" };
  t.accessToken && (e.Authorization = `Bearer ${t.accessToken}`);
  const s = await fetch(n, { method: t.method, headers: e });
  if (!s.ok) throw new Error(`TMDB \u8BF7\u6C42\u5931\u8D25: ${s.status}`);
  return await s.json();
}
export {
  q as a,
  f,
  l as t
};
