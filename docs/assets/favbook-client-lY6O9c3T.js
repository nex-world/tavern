function d(o) {
  return o.trim().replace(/\/$/, "");
}
async function t(o, e, n = {}) {
  const c = d(o.backendUrl);
  if (!c) throw new Error("\u8BF7\u5148\u586B\u5199\u540E\u7AEF\u5730\u5740");
  const s = { Accept: "application/json" };
  o.token && (s.Authorization = `Bearer ${o.token}`), n.body !== void 0 && (s["Content-Type"] = "application/json");
  const r = await fetch(`${c}${e}`, { method: n.method ?? "GET", headers: s, body: n.body !== void 0 ? JSON.stringify(n.body) : void 0 });
  let a = null;
  if ((r.headers.get("content-type") ?? "").includes("application/json") && (a = await r.json()), !r.ok) {
    const i = a && typeof a == "object" && "error" in a && typeof a.error == "string" ? a.error : `\u8BF7\u6C42\u5931\u8D25(${r.status})`;
    throw new Error(i);
  }
  return a;
}
async function u(o, e, n) {
  return t({ backendUrl: o }, "/api/auth/register", { method: "POST", body: { username: e, password: n } });
}
async function l(o, e, n) {
  return t({ backendUrl: o }, "/api/auth/login", { method: "POST", body: { username: e, password: n } });
}
async function y(o) {
  return t(o, "/api/auth/me");
}
async function b(o) {
  return t(o, "/api/objects");
}
async function p(o, e) {
  return t(o, "/api/objects", { method: "POST", body: e });
}
async function h(o) {
  return t(o, "/api/feeds");
}
async function k(o, e) {
  return t(o, "/api/feeds", { method: "POST", body: e });
}
async function m(o) {
  return t(o, "/api/collections");
}
async function v(o, e) {
  return t(o, "/api/collections", { method: "POST", body: e });
}
async function j(o, e) {
  return t(o, `/api/collections/${e}`);
}
async function T(o, e, n) {
  return t(o, `/api/collections/${e}/items`, { method: "POST", body: n });
}
export {
  u as a,
  y as b,
  h as c,
  m as d,
  b as e,
  l as f,
  p as g,
  k as h,
  v as i,
  j,
  T as k
};
