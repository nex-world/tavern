import { a as o } from "./itunes-openapi--yCAZ3Wb.js";
function a(e, r) {
  const t = new URL(e, o);
  if (!r) return t;
  for (const [s, n] of Object.entries(r)) n == null || n === "" || t.searchParams.set(s, String(n));
  return t;
}
async function u(e) {
  const r = a(e.path, e.query), t = await fetch(r, { method: e.method, headers: { Accept: "application/json" } });
  if (!t.ok) throw new Error(`iTunes \u8BF7\u6C42\u5931\u8D25: ${t.status}`);
  return await t.json();
}
export {
  u as i
};
