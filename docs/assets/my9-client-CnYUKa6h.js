function c(t) {
  const e = t.trim();
  return e ? e.endsWith("/") ? e : `${e}/` : "https://my9.shatranj.space/api/";
}
function u(t, e, n) {
  const s = c(t), a = e.startsWith("/") ? e.slice(1) : e, o = new URL(a, s);
  if (n) for (const [i, r] of Object.entries(n)) r == null || r === "" || o.searchParams.set(i, String(r));
  return o;
}
async function l(t) {
  const e = u(t.baseUrl, t.path, t.query), n = await fetch(e, { method: t.method, headers: { Accept: "application/json", "Content-Type": "application/json" }, body: t.body ? JSON.stringify(t.body) : void 0 });
  if (!n.ok) {
    const s = await n.text();
    throw new Error(`my9 \u8BF7\u6C42\u5931\u8D25(${n.status}): ${s || "unknown error"}`);
  }
  return await n.json();
}
export {
  l as m
};
