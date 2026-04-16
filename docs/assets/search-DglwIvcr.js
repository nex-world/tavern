import { a as b } from "./bangumi-client-Bal74wg2.js";
import { m as y } from "./my9-client-CnYUKa6h.js";
const v = /[\u3040-\u30ff\u31f0-\u31ff\uff66-\uff9f]/, w = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;
function _(n) {
  const t = n.trim();
  return t ? v.test(t) ? "jp" : w.test(t) ? "hk" : "us" : "us";
}
const k = "https://api.themoviedb.org/3", T = "https://image.tmdb.org/t/p/w500", $ = "https://itunes.apple.com", I = { 10759: "\u52A8\u4F5C\u5192\u9669", 16: "\u52A8\u753B", 35: "\u559C\u5267", 80: "\u72AF\u7F6A", 99: "\u7EAA\u5F55", 18: "\u5267\u60C5", 10751: "\u5BB6\u5EAD", 9648: "\u60AC\u7591", 10765: "\u79D1\u5E7B\u5947\u5E7B" }, N = { 28: "\u52A8\u4F5C", 12: "\u5192\u9669", 16: "\u52A8\u753B", 35: "\u559C\u5267", 80: "\u72AF\u7F6A", 99: "\u7EAA\u5F55", 18: "\u5267\u60C5", 14: "\u5947\u5E7B", 27: "\u6050\u6016", 10402: "\u97F3\u4E50", 9648: "\u60AC\u7591", 10749: "\u7231\u60C5", 878: "\u79D1\u5E7B", 53: "\u60CA\u609A" };
function u(n) {
  if (!n) return;
  const t = Number.parseInt(n.slice(0, 4), 10);
  if (!(!Number.isFinite(t) || t < 1900 || t > 2100)) return t;
}
function m(n) {
  return n.trim().toLowerCase().replace(/\s+/g, "");
}
function d(n) {
  return n ? n.replace("100x100bb", "1000x1000bb") : null;
}
function h(n) {
  return n ? `${T}${n}` : null;
}
function f(n, t) {
  const a = m(n);
  if (!a) return 0;
  const o = [t.title, t.subtitle ?? ""];
  let r = 0;
  for (const s of o) {
    const e = m(s);
    e && (e === a && (r += 100), e.startsWith(a) && (r += 60), e.includes(a) && (r += 25));
  }
  return t.releaseYear && String(t.releaseYear).includes(a) && (r += 5), t.source === "bangumi" && (r += 2), r;
}
function p(n, t) {
  const a = /* @__PURE__ */ new Map();
  for (const e of t) for (const i of e) a.has(i.id) || a.set(i.id, i);
  const o = [...a.values()];
  o.sort((e, i) => f(n, i) - f(n, e));
  const r = /* @__PURE__ */ new Set(), s = [];
  for (const e of o) {
    const i = `${m(e.title)}-${e.releaseYear ?? "na"}`;
    if (!(r.has(i) && e.source !== "bangumi") && (r.add(i), s.push(e), s.length >= 36)) break;
  }
  return s;
}
async function g(n, t) {
  const a = _(n), o = new URL(`${$}/search`);
  o.searchParams.set("term", n), o.searchParams.set("media", "music"), o.searchParams.set("country", a), o.searchParams.set("limit", "24"), t && o.searchParams.set("entity", t);
  const r = await fetch(o.toString(), { method: "GET", headers: { Accept: "application/json" } });
  if (!r.ok) throw new Error(`iTunes \u8BF7\u6C42\u5931\u8D25: ${r.status}`);
  const s = await r.json();
  return Array.isArray(s.results) ? s.results : [];
}
async function l(n, t, a, o) {
  const r = new URL(`${k}/${n}`);
  r.searchParams.set("query", t), r.searchParams.set("language", a), r.searchParams.set("page", "1");
  const s = await fetch(r.toString(), { method: "GET", headers: { Accept: "application/json", Authorization: `Bearer ${o}` } });
  if (!s.ok) throw new Error(`TMDB \u8BF7\u6C42\u5931\u8D25: ${s.status}`);
  const e = await s.json();
  return Array.isArray(e.results) ? e.results : [];
}
async function E(n) {
  const t = n.trim();
  if (!t) return [];
  const a = await g(t, "musicTrack"), o = [];
  for (const r of a) {
    if (r.wrapperType !== "track") continue;
    const s = r, e = s.trackId ?? s.collectionId;
    e && o.push({ id: `itunes:song:${e}`, source: "itunes", entity: "song", title: s.trackName, subtitle: s.artistName, image: d(s.artworkUrl100), releaseYear: u(s.releaseDate), genres: s.primaryGenreName ? [s.primaryGenreName] : [], url: s.trackViewUrl || s.collectionViewUrl || `https://music.apple.com/us/search?term=${encodeURIComponent(s.trackName)}` });
  }
  return o;
}
async function R(n) {
  const t = n.trim();
  return t ? (await g(t, "album")).filter((o) => o.wrapperType === "collection").map((o) => ({ id: `itunes:album:${o.collectionId}`, source: "itunes", entity: "album", title: o.collectionName, subtitle: o.artistName, image: d(o.artworkUrl100), releaseYear: u(o.releaseDate), genres: o.primaryGenreName ? [o.primaryGenreName] : [], url: o.collectionViewUrl || `https://music.apple.com/us/search?term=${encodeURIComponent(o.collectionName)}` })) : [];
}
async function B(n) {
  const [t, a] = await Promise.all([E(n), R(n)]);
  return p(n, [t, a]);
}
async function A(n, t) {
  const a = n.trim();
  if (!a) return [];
  if (!t.trim()) throw new Error("TMDB Token \u672A\u586B\u5199");
  const [o, r] = await Promise.all([l("search/movie", a, "zh-CN", t), l("search/movie", a, "en-US", t)]), s = /* @__PURE__ */ new Map();
  for (const e of r) s.set(e.id, e.poster_path ?? null);
  return o.slice(0, 24).map((e) => {
    const i = s.get(e.id) ?? e.poster_path;
    return { id: `tmdb:movie:${e.id}`, source: "tmdb", entity: "movie", title: e.title, subtitle: e.original_title === e.title ? void 0 : e.original_title, summary: e.overview, image: h(i), releaseYear: u(e.release_date), genres: (e.genre_ids ?? []).map((c) => N[c]).filter((c) => !!c).slice(0, 3), url: `https://www.themoviedb.org/movie/${e.id}` };
  });
}
async function P(n, t) {
  const a = n.trim();
  if (!a) return [];
  if (!t.trim()) throw new Error("TMDB Token \u672A\u586B\u5199");
  const [o, r] = await Promise.all([l("search/tv", a, "zh-CN", t), l("search/tv", a, "en-US", t)]), s = /* @__PURE__ */ new Map();
  for (const e of r) s.set(e.id, e.poster_path ?? null);
  return o.slice(0, 24).map((e) => {
    const i = s.get(e.id) ?? e.poster_path;
    return { id: `tmdb:tv:${e.id}`, source: "tmdb", entity: "tv", title: e.name, subtitle: e.original_name === e.name ? void 0 : e.original_name, summary: e.overview, image: h(i), releaseYear: u(e.first_air_date), genres: (e.genre_ids ?? []).map((c) => I[c]).filter((c) => !!c).slice(0, 3), url: `https://www.themoviedb.org/tv/${e.id}` };
  });
}
async function M(n, t) {
  const a = n.trim();
  return a ? ((await b({ method: "POST", path: "/v0/search/subjects", query: { limit: 24, offset: 0 }, body: { keyword: a, sort: "match" }, accessToken: t })).data ?? []).map((r) => {
    const s = Number(r.id), e = typeof r.name == "string" ? r.name : "\u672A\u547D\u540D", i = typeof r.name_cn == "string" ? r.name_cn : "", c = r.images;
    return { id: `bangumi:subject:${s}`, source: "bangumi", entity: "subject", title: i || e, subtitle: i ? e : void 0, summary: typeof r.summary == "string" ? r.summary : void 0, image: (c == null ? void 0 : c.common) ?? null, releaseYear: u(typeof r.date == "string" ? r.date : void 0), genres: typeof r.tags == "object" ? [] : [], url: Number.isFinite(s) ? `https://bgm.tv/subject/${s}` : `https://bgm.tv/subject_search/${encodeURIComponent(i || e)}` };
  }) : [];
}
async function S(n, t) {
  const a = n.trim();
  if (!a) return [];
  const o = await y({ baseUrl: t.baseUrl, path: "/subjects/search", method: "GET", query: { q: a, kind: t.kind } }), r = o.source === "tmdb" ? "tmdb" : o.source === "itunes" ? "itunes" : "bangumi";
  return (o.items ?? []).map((s, e) => {
    var _a;
    const i = s.id ?? `${t.kind}-${e}`, c = s.localizedName ?? s.name ?? "\u672A\u547D\u540D";
    return { id: `my9:${r}:${t.kind}:${String(i)}`, source: r, entity: t.kind === "tv" ? "tv" : t.kind === "movie" ? "movie" : t.kind === "song" ? "song" : t.kind === "album" ? "album" : "subject", title: c, subtitle: s.localizedName ? s.name : void 0, summary: void 0, image: s.cover ?? null, releaseYear: s.releaseYear, genres: s.genres ?? [], url: ((_a = s.storeUrls) == null ? void 0 : _a.apple) || (r === "bangumi" && s.id ? `https://bgm.tv/subject/${s.id}` : "#") };
  });
}
async function Y(n, t) {
  const a = n.trim();
  if (!a) return [];
  if (!t.tmdbToken.trim()) throw new Error("\u6DF7\u5408\u641C\u7D22\u4F9D\u8D56 TMDB Token");
  const [o, r, s] = await Promise.allSettled([M(a, t.bangumiAccessToken), A(a, t.tmdbToken), P(a, t.tmdbToken)]), e = o.status === "fulfilled" ? o.value : [], i = r.status === "fulfilled" ? r.value : [], c = s.status === "fulfilled" ? s.value : [];
  return p(a, [e, i, c]);
}
export {
  R as a,
  B as b,
  A as c,
  P as d,
  Y as e,
  M as f,
  S as g,
  E as s
};
