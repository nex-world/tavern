function H(t) {
  return [...new Set(t)];
}
function b(t) {
  return t == null || typeof t != "object" && typeof t != "function";
}
function d(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function a(t) {
  return Object.getOwnPropertySymbols(t).filter((c) => Object.prototype.propertyIsEnumerable.call(t, c));
}
function w(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const A = "[object RegExp]", j = "[object String]", O = "[object Number]", m = "[object Boolean]", h = "[object Arguments]", B = "[object Symbol]", S = "[object Date]", u = "[object Map]", D = "[object Set]", x = "[object Array]", I = "[object ArrayBuffer]", P = "[object Object]", E = "[object DataView]", F = "[object Uint8Array]", M = "[object Uint8ClampedArray]", U = "[object Uint16Array]", N = "[object Uint32Array]", R = "[object Int8Array]", q = "[object Int16Array]", L = "[object Int32Array]", W = "[object Float32Array]", z = "[object Float64Array]";
function y(t, c, f, s = /* @__PURE__ */ new Map(), i = void 0) {
  const g = i == null ? void 0 : i(t, c, f, s);
  if (g !== void 0) return g;
  if (b(t)) return t;
  if (s.has(t)) return s.get(t);
  if (Array.isArray(t)) {
    const r = new Array(t.length);
    s.set(t, r);
    for (let n = 0; n < t.length; n++) r[n] = y(t[n], n, f, s, i);
    return Object.hasOwn(t, "index") && (r.index = t.index), Object.hasOwn(t, "input") && (r.input = t.input), r;
  }
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof RegExp) {
    const r = new RegExp(t.source, t.flags);
    return r.lastIndex = t.lastIndex, r;
  }
  if (t instanceof Map) {
    const r = /* @__PURE__ */ new Map();
    s.set(t, r);
    for (const [n, p] of t) r.set(n, y(p, n, f, s, i));
    return r;
  }
  if (t instanceof Set) {
    const r = /* @__PURE__ */ new Set();
    s.set(t, r);
    for (const n of t) r.add(y(n, void 0, f, s, i));
    return r;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(t)) return t.subarray();
  if (d(t)) {
    const r = new (Object.getPrototypeOf(t)).constructor(t.length);
    s.set(t, r);
    for (let n = 0; n < t.length; n++) r[n] = y(t[n], n, f, s, i);
    return r;
  }
  if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
  if (t instanceof DataView) {
    const r = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
    return s.set(t, r), e(r, t, f, s, i), r;
  }
  if (typeof File < "u" && t instanceof File) {
    const r = new File([t], t.name, { type: t.type });
    return s.set(t, r), e(r, t, f, s, i), r;
  }
  if (typeof Blob < "u" && t instanceof Blob) {
    const r = new Blob([t], { type: t.type });
    return s.set(t, r), e(r, t, f, s, i), r;
  }
  if (t instanceof Error) {
    const r = new t.constructor();
    return s.set(t, r), r.message = t.message, r.name = t.name, r.stack = t.stack, r.cause = t.cause, e(r, t, f, s, i), r;
  }
  if (t instanceof Boolean) {
    const r = new Boolean(t.valueOf());
    return s.set(t, r), e(r, t, f, s, i), r;
  }
  if (t instanceof Number) {
    const r = new Number(t.valueOf());
    return s.set(t, r), e(r, t, f, s, i), r;
  }
  if (t instanceof String) {
    const r = new String(t.valueOf());
    return s.set(t, r), e(r, t, f, s, i), r;
  }
  if (typeof t == "object" && G(t)) {
    const r = Object.create(Object.getPrototypeOf(t));
    return s.set(t, r), e(r, t, f, s, i), r;
  }
  return t;
}
function e(t, c, f = t, s, i) {
  const g = [...Object.keys(c), ...a(c)];
  for (let r = 0; r < g.length; r++) {
    const n = g[r], p = Object.getOwnPropertyDescriptor(t, n);
    (p == null || p.writable) && (t[n] = y(c[n], n, f, s, i));
  }
}
function G(t) {
  switch (w(t)) {
    case h:
    case x:
    case I:
    case E:
    case m:
    case S:
    case W:
    case z:
    case R:
    case q:
    case L:
    case u:
    case O:
    case P:
    case A:
    case D:
    case j:
    case B:
    case F:
    case M:
    case U:
    case N:
      return true;
    default:
      return false;
  }
}
function J(t) {
  return y(t, void 0, t, /* @__PURE__ */ new Map(), void 0);
}
function K(t, c) {
  const f = {};
  for (let s = 0; s < c.length; s++) {
    const i = c[s];
    Object.hasOwn(t, i) && (f[i] = t[i]);
  }
  return f;
}
export {
  J as c,
  K as p,
  H as u
};
