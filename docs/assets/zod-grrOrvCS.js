function l(e, t, n) {
  function r(c, u) {
    if (c._zod || Object.defineProperty(c, "_zod", { value: { def: u, constr: s, traits: /* @__PURE__ */ new Set() }, enumerable: false }), c._zod.traits.has(e)) return;
    c._zod.traits.add(e), t(c, u);
    const a = s.prototype, f = Object.keys(a);
    for (let p = 0; p < f.length; p++) {
      const h = f[p];
      h in c || (c[h] = a[h].bind(c));
    }
  }
  const o = (n == null ? void 0 : n.Parent) ?? Object;
  class i extends o {
  }
  Object.defineProperty(i, "name", { value: e });
  function s(c) {
    var u;
    const a = (n == null ? void 0 : n.Parent) ? new i() : this;
    r(a, c), (u = a._zod).deferred ?? (u.deferred = []);
    for (const f of a._zod.deferred) f();
    return a;
  }
  return Object.defineProperty(s, "init", { value: r }), Object.defineProperty(s, Symbol.hasInstance, { value: (c) => {
    var _a, _b;
    return (n == null ? void 0 : n.Parent) && c instanceof n.Parent ? true : (_b = (_a = c == null ? void 0 : c._zod) == null ? void 0 : _a.traits) == null ? void 0 : _b.has(e);
  } }), Object.defineProperty(s, "name", { value: e }), s;
}
class C extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class De extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Re = {};
function P(e) {
  return Re;
}
function Ce(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, o]) => t.indexOf(+r) === -1).map(([r, o]) => o);
}
function oe(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function ee(e) {
  return { get value() {
    {
      const t = e();
      return Object.defineProperty(this, "value", { value: t }), t;
    }
  } };
}
function ce(e) {
  return e == null;
}
function ue(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function _t(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = t.toString();
  let o = (r.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(r)) {
    const u = r.match(/\d?e-(\d?)/);
    (u == null ? void 0 : u[1]) && (o = Number.parseInt(u[1]));
  }
  const i = n > o ? n : o, s = Number.parseInt(e.toFixed(i).replace(".", "")), c = Number.parseInt(t.toFixed(i).replace(".", ""));
  return s % c / 10 ** i;
}
const de = /* @__PURE__ */ Symbol("evaluating");
function _(e, t, n) {
  let r;
  Object.defineProperty(e, t, { get() {
    if (r !== de) return r === void 0 && (r = de, r = n()), r;
  }, set(o) {
    Object.defineProperty(e, t, { value: o });
  }, configurable: true });
}
function D(e, t, n) {
  Object.defineProperty(e, t, { value: n, writable: true, enumerable: true, configurable: true });
}
function N(...e) {
  const t = {};
  for (const n of e) {
    const r = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function he(e) {
  return JSON.stringify(e);
}
function gt(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const xe = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function M(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const vt = ee(() => {
  var _a;
  if (typeof navigator < "u" && ((_a = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a.includes("Cloudflare"))) return false;
  try {
    const e = Function;
    return new e(""), true;
  } catch {
    return false;
  }
});
function x(e) {
  if (M(e) === false) return false;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function") return true;
  const n = t.prototype;
  return !(M(n) === false || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === false);
}
function Ue(e) {
  return x(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const zt = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function U(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function j(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || (n == null ? void 0 : n.parent)) && (r._zod.parent = e), r;
}
function d(e) {
  const t = e;
  if (!t) return {};
  if (typeof t == "string") return { error: () => t };
  if ((t == null ? void 0 : t.message) !== void 0) {
    if ((t == null ? void 0 : t.error) !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function yt(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const bt = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] };
function wt(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
  const i = N(e._zod.def, { get shape() {
    const s = {};
    for (const c in t) {
      if (!(c in n.shape)) throw new Error(`Unrecognized key: "${c}"`);
      t[c] && (s[c] = n.shape[c]);
    }
    return D(this, "shape", s), s;
  }, checks: [] });
  return j(e, i);
}
function kt(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
  const i = N(e._zod.def, { get shape() {
    const s = { ...e._zod.def.shape };
    for (const c in t) {
      if (!(c in n.shape)) throw new Error(`Unrecognized key: "${c}"`);
      t[c] && delete s[c];
    }
    return D(this, "shape", s), s;
  }, checks: [] });
  return j(e, i);
}
function $t(e, t) {
  if (!x(t)) throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const i = e._zod.def.shape;
    for (const s in t) if (Object.getOwnPropertyDescriptor(i, s) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const o = N(e._zod.def, { get shape() {
    const i = { ...e._zod.def.shape, ...t };
    return D(this, "shape", i), i;
  } });
  return j(e, o);
}
function Zt(e, t) {
  if (!x(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = N(e._zod.def, { get shape() {
    const r = { ...e._zod.def.shape, ...t };
    return D(this, "shape", r), r;
  } });
  return j(e, n);
}
function St(e, t) {
  const n = N(e._zod.def, { get shape() {
    const r = { ...e._zod.def.shape, ...t._zod.def.shape };
    return D(this, "shape", r), r;
  }, get catchall() {
    return t._zod.def.catchall;
  }, checks: [] });
  return j(e, n);
}
function Ot(e, t, n) {
  const o = t._zod.def.checks;
  if (o && o.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
  const s = N(t._zod.def, { get shape() {
    const c = t._zod.def.shape, u = { ...c };
    if (n) for (const a in n) {
      if (!(a in c)) throw new Error(`Unrecognized key: "${a}"`);
      n[a] && (u[a] = e ? new e({ type: "optional", innerType: c[a] }) : c[a]);
    }
    else for (const a in c) u[a] = e ? new e({ type: "optional", innerType: c[a] }) : c[a];
    return D(this, "shape", u), u;
  }, checks: [] });
  return j(t, s);
}
function It(e, t, n) {
  const r = N(t._zod.def, { get shape() {
    const o = t._zod.def.shape, i = { ...o };
    if (n) for (const s in n) {
      if (!(s in i)) throw new Error(`Unrecognized key: "${s}"`);
      n[s] && (i[s] = new e({ type: "nonoptional", innerType: o[s] }));
    }
    else for (const s in o) i[s] = new e({ type: "nonoptional", innerType: o[s] });
    return D(this, "shape", i), i;
  } });
  return j(t, r);
}
function R(e, t = 0) {
  var _a;
  if (e.aborted === true) return true;
  for (let n = t; n < e.issues.length; n++) if (((_a = e.issues[n]) == null ? void 0 : _a.continue) !== true) return true;
  return false;
}
function A(e, t) {
  return t.map((n) => {
    var r;
    return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
  });
}
function B(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function T(e, t, n) {
  var _a, _b, _c, _d, _e2, _f;
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const o = B((_c = (_b = (_a = e.inst) == null ? void 0 : _a._zod.def) == null ? void 0 : _b.error) == null ? void 0 : _c.call(_b, e)) ?? B((_d = t == null ? void 0 : t.error) == null ? void 0 : _d.call(t, e)) ?? B((_e2 = n.customError) == null ? void 0 : _e2.call(n, e)) ?? B((_f = n.localeError) == null ? void 0 : _f.call(n, e)) ?? "Invalid input";
    r.message = o;
  }
  return delete r.inst, delete r.continue, (t == null ? void 0 : t.reportInput) || delete r.input, r;
}
function ae(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function L(...e) {
  const [t, n, r] = e;
  return typeof t == "string" ? { message: t, code: "custom", input: n, inst: r } : { ...t };
}
const Fe = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", { value: e._zod, enumerable: false }), Object.defineProperty(e, "issues", { value: t, enumerable: false }), e.message = JSON.stringify(t, oe, 2), Object.defineProperty(e, "toString", { value: () => e.message, enumerable: false });
}, Je = l("$ZodError", Fe), Me = l("$ZodError", Fe, { Parent: Error });
function Et(e, t = (n) => n.message) {
  const n = {}, r = [];
  for (const o of e.issues) o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
  return { formErrors: r, fieldErrors: n };
}
function Pt(e, t = (n) => n.message) {
  const n = { _errors: [] }, r = (o) => {
    for (const i of o.issues) if (i.code === "invalid_union" && i.errors.length) i.errors.map((s) => r({ issues: s }));
    else if (i.code === "invalid_key") r({ issues: i.issues });
    else if (i.code === "invalid_element") r({ issues: i.issues });
    else if (i.path.length === 0) n._errors.push(t(i));
    else {
      let s = n, c = 0;
      for (; c < i.path.length; ) {
        const u = i.path[c];
        c === i.path.length - 1 ? (s[u] = s[u] || { _errors: [] }, s[u]._errors.push(t(i))) : s[u] = s[u] || { _errors: [] }, s = s[u], c++;
      }
    }
  };
  return r(e), n;
}
const le = (e) => (t, n, r, o) => {
  const i = r ? Object.assign(r, { async: false }) : { async: false }, s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise) throw new C();
  if (s.issues.length) {
    const c = new ((o == null ? void 0 : o.Err) ?? e)(s.issues.map((u) => T(u, i, P())));
    throw xe(c, o == null ? void 0 : o.callee), c;
  }
  return s.value;
}, fe = (e) => async (t, n, r, o) => {
  const i = r ? Object.assign(r, { async: true }) : { async: true };
  let s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const c = new ((o == null ? void 0 : o.Err) ?? e)(s.issues.map((u) => T(u, i, P())));
    throw xe(c, o == null ? void 0 : o.callee), c;
  }
  return s.value;
}, te = (e) => (t, n, r) => {
  const o = r ? { ...r, async: false } : { async: false }, i = t._zod.run({ value: n, issues: [] }, o);
  if (i instanceof Promise) throw new C();
  return i.issues.length ? { success: false, error: new (e ?? Je)(i.issues.map((s) => T(s, o, P()))) } : { success: true, data: i.value };
}, Tt = te(Me), ne = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { async: true }) : { async: true };
  let i = t._zod.run({ value: n, issues: [] }, o);
  return i instanceof Promise && (i = await i), i.issues.length ? { success: false, error: new e(i.issues.map((s) => T(s, o, P()))) } : { success: true, data: i.value };
}, Nt = ne(Me), jt = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return le(e)(t, n, o);
}, At = (e) => (t, n, r) => le(e)(t, n, r), Dt = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return fe(e)(t, n, o);
}, Rt = (e) => async (t, n, r) => fe(e)(t, n, r), Ct = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return te(e)(t, n, o);
}, xt = (e) => (t, n, r) => te(e)(t, n, r), Ut = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return ne(e)(t, n, o);
}, Ft = (e) => async (t, n, r) => ne(e)(t, n, r), Jt = /^[cC][^\s-]{8,}$/, Mt = /^[0-9a-z]+$/, Lt = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Vt = /^[0-9a-vA-V]{20}$/, Bt = /^[A-Za-z0-9]{27}$/, Wt = /^[a-zA-Z0-9_-]{21}$/, Kt = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Gt = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, me = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Yt = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, qt = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Xt() {
  return new RegExp(qt, "u");
}
const Ht = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Qt = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, en = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, tn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, nn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Le = /^[A-Za-z0-9_-]*$/, rn = /^\+[1-9]\d{6,14}$/, Ve = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", on = new RegExp(`^${Ve}$`);
function Be(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function sn(e) {
  return new RegExp(`^${Be(e)}$`);
}
function cn(e) {
  const t = Be({ precision: e.precision }), n = ["Z"];
  e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${n.join("|")})`;
  return new RegExp(`^${Ve}T(?:${r})$`);
}
const un = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, an = /^-?\d+$/, We = /^-?\d+(?:\.\d+)?$/, ln = /^(?:true|false)$/i, fn = /^[^A-Z]*$/, pn = /^[^a-z]*$/, S = l("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Ke = { number: "number", bigint: "bigint", object: "date" }, Ge = l("$ZodCheckLessThan", (e, t) => {
  S.init(e, t);
  const n = Ke[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, i = (t.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < i && (t.inclusive ? o.maximum = t.value : o.exclusiveMaximum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({ origin: n, code: "too_big", maximum: typeof t.value == "object" ? t.value.getTime() : t.value, input: r.value, inclusive: t.inclusive, inst: e, continue: !t.abort });
  };
}), Ye = l("$ZodCheckGreaterThan", (e, t) => {
  S.init(e, t);
  const n = Ke[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, i = (t.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > i && (t.inclusive ? o.minimum = t.value : o.exclusiveMinimum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({ origin: n, code: "too_small", minimum: typeof t.value == "object" ? t.value.getTime() : t.value, input: r.value, inclusive: t.inclusive, inst: e, continue: !t.abort });
  };
}), dn = l("$ZodCheckMultipleOf", (e, t) => {
  S.init(e, t), e._zod.onattach.push((n) => {
    var r;
    (r = n._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  }), e._zod.check = (n) => {
    if (typeof n.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : _t(n.value, t.value) === 0) || n.issues.push({ origin: typeof n.value, code: "not_multiple_of", divisor: t.value, input: n.value, inst: e, continue: !t.abort });
  };
}), hn = l("$ZodCheckNumberFormat", (e, t) => {
  var _a;
  S.init(e, t), t.format = t.format || "float64";
  const n = (_a = t.format) == null ? void 0 : _a.includes("int"), r = n ? "int" : "number", [o, i] = bt[t.format];
  e._zod.onattach.push((s) => {
    const c = s._zod.bag;
    c.format = t.format, c.minimum = o, c.maximum = i, n && (c.pattern = an);
  }), e._zod.check = (s) => {
    const c = s.value;
    if (n) {
      if (!Number.isInteger(c)) {
        s.issues.push({ expected: r, format: t.format, code: "invalid_type", continue: false, input: c, inst: e });
        return;
      }
      if (!Number.isSafeInteger(c)) {
        c > 0 ? s.issues.push({ input: c, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e, origin: r, inclusive: true, continue: !t.abort }) : s.issues.push({ input: c, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e, origin: r, inclusive: true, continue: !t.abort });
        return;
      }
    }
    c < o && s.issues.push({ origin: "number", input: c, code: "too_small", minimum: o, inclusive: true, inst: e, continue: !t.abort }), c > i && s.issues.push({ origin: "number", input: c, code: "too_big", maximum: i, inclusive: true, inst: e, continue: !t.abort });
  };
}), mn = l("$ZodCheckMaxLength", (e, t) => {
  var n;
  S.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !ce(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length <= t.maximum) return;
    const s = ae(o);
    r.issues.push({ origin: s, code: "too_big", maximum: t.maximum, inclusive: true, input: o, inst: e, continue: !t.abort });
  };
}), _n = l("$ZodCheckMinLength", (e, t) => {
  var n;
  S.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !ce(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length >= t.minimum) return;
    const s = ae(o);
    r.issues.push({ origin: s, code: "too_small", minimum: t.minimum, inclusive: true, input: o, inst: e, continue: !t.abort });
  };
}), gn = l("$ZodCheckLengthEquals", (e, t) => {
  var n;
  S.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !ce(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (r) => {
    const o = r.value, i = o.length;
    if (i === t.length) return;
    const s = ae(o), c = i > t.length;
    r.issues.push({ origin: s, ...c ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }, inclusive: true, exact: true, input: r.value, inst: e, continue: !t.abort });
  };
}), re = l("$ZodCheckStringFormat", (e, t) => {
  var n, r;
  S.init(e, t), e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.format = t.format, t.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t.pattern));
  }), t.pattern ? (n = e._zod).check ?? (n.check = (o) => {
    t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({ origin: "string", code: "invalid_format", format: t.format, input: o.value, ...t.pattern ? { pattern: t.pattern.toString() } : {}, inst: e, continue: !t.abort });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), vn = l("$ZodCheckRegex", (e, t) => {
  re.init(e, t), e._zod.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: n.value, pattern: t.pattern.toString(), inst: e, continue: !t.abort });
  };
}), zn = l("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = fn), re.init(e, t);
}), yn = l("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = pn), re.init(e, t);
}), bn = l("$ZodCheckIncludes", (e, t) => {
  S.init(e, t);
  const n = U(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
  t.pattern = r, e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(r);
  }), e._zod.check = (o) => {
    o.value.includes(t.includes, t.position) || o.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: t.includes, input: o.value, inst: e, continue: !t.abort });
  };
}), wn = l("$ZodCheckStartsWith", (e, t) => {
  S.init(e, t);
  const n = new RegExp(`^${U(t.prefix)}.*`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.startsWith(t.prefix) || r.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: t.prefix, input: r.value, inst: e, continue: !t.abort });
  };
}), kn = l("$ZodCheckEndsWith", (e, t) => {
  S.init(e, t);
  const n = new RegExp(`.*${U(t.suffix)}$`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.endsWith(t.suffix) || r.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: t.suffix, input: r.value, inst: e, continue: !t.abort });
  };
}), $n = l("$ZodCheckOverwrite", (e, t) => {
  S.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class Zn {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const r = t.split(`
`).filter((s) => s), o = Math.min(...r.map((s) => s.length - s.trimStart().length)), i = r.map((s) => s.slice(o)).map((s) => " ".repeat(this.indent * 2) + s);
    for (const s of i) this.content.push(s);
  }
  compile() {
    const t = Function, n = this == null ? void 0 : this.args, o = [...((this == null ? void 0 : this.content) ?? [""]).map((i) => `  ${i}`)];
    return new t(...n, o.join(`
`));
  }
}
const Sn = { major: 4, minor: 3, patch: 6 }, g = l("$ZodType", (e, t) => {
  var _a;
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Sn;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const o of r) for (const i of o._zod.onattach) i(e);
  if (r.length === 0) (n = e._zod).deferred ?? (n.deferred = []), (_a = e._zod.deferred) == null ? void 0 : _a.push(() => {
    e._zod.run = e._zod.parse;
  });
  else {
    const o = (s, c, u) => {
      let a = R(s), f;
      for (const p of c) {
        if (p._zod.def.when) {
          if (!p._zod.def.when(s)) continue;
        } else if (a) continue;
        const h = s.issues.length, m = p._zod.check(s);
        if (m instanceof Promise && (u == null ? void 0 : u.async) === false) throw new C();
        if (f || m instanceof Promise) f = (f ?? Promise.resolve()).then(async () => {
          await m, s.issues.length !== h && (a || (a = R(s, h)));
        });
        else {
          if (s.issues.length === h) continue;
          a || (a = R(s, h));
        }
      }
      return f ? f.then(() => s) : s;
    }, i = (s, c, u) => {
      if (R(s)) return s.aborted = true, s;
      const a = o(c, r, u);
      if (a instanceof Promise) {
        if (u.async === false) throw new C();
        return a.then((f) => e._zod.parse(f, u));
      }
      return e._zod.parse(a, u);
    };
    e._zod.run = (s, c) => {
      if (c.skipChecks) return e._zod.parse(s, c);
      if (c.direction === "backward") {
        const a = e._zod.parse({ value: s.value, issues: [] }, { ...c, skipChecks: true });
        return a instanceof Promise ? a.then((f) => i(f, s, c)) : i(a, s, c);
      }
      const u = e._zod.parse(s, c);
      if (u instanceof Promise) {
        if (c.async === false) throw new C();
        return u.then((a) => o(a, r, c));
      }
      return o(u, r, c);
    };
  }
  _(e, "~standard", () => ({ validate: (o) => {
    var _a2;
    try {
      const i = Tt(e, o);
      return i.success ? { value: i.data } : { issues: (_a2 = i.error) == null ? void 0 : _a2.issues };
    } catch {
      return Nt(e, o).then((s) => {
        var _a3;
        return s.success ? { value: s.data } : { issues: (_a3 = s.error) == null ? void 0 : _a3.issues };
      });
    }
  }, vendor: "zod", version: 1 }));
}), pe = l("$ZodString", (e, t) => {
  var _a;
  g.init(e, t), e._zod.pattern = [...((_a = e == null ? void 0 : e._zod.bag) == null ? void 0 : _a.patterns) ?? []].pop() ?? un(e._zod.bag), e._zod.parse = (n, r) => {
    if (t.coerce) try {
      n.value = String(n.value);
    } catch {
    }
    return typeof n.value == "string" || n.issues.push({ expected: "string", code: "invalid_type", input: n.value, inst: e }), n;
  };
}), z = l("$ZodStringFormat", (e, t) => {
  re.init(e, t), pe.init(e, t);
}), On = l("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Gt), z.init(e, t);
}), In = l("$ZodUUID", (e, t) => {
  if (t.version) {
    const r = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
    if (r === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = me(r));
  } else t.pattern ?? (t.pattern = me());
  z.init(e, t);
}), En = l("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Yt), z.init(e, t);
}), Pn = l("$ZodURL", (e, t) => {
  z.init(e, t), e._zod.check = (n) => {
    try {
      const r = n.value.trim(), o = new URL(r);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(o.hostname) || n.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: t.hostname.source, input: n.value, inst: e, continue: !t.abort })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || n.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: t.protocol.source, input: n.value, inst: e, continue: !t.abort })), t.normalize ? n.value = o.href : n.value = r;
      return;
    } catch {
      n.issues.push({ code: "invalid_format", format: "url", input: n.value, inst: e, continue: !t.abort });
    }
  };
}), Tn = l("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Xt()), z.init(e, t);
}), Nn = l("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Wt), z.init(e, t);
}), jn = l("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Jt), z.init(e, t);
}), An = l("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Mt), z.init(e, t);
}), Dn = l("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Lt), z.init(e, t);
}), Rn = l("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Vt), z.init(e, t);
}), Cn = l("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Bt), z.init(e, t);
}), xn = l("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = cn(t)), z.init(e, t);
}), Un = l("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = on), z.init(e, t);
}), Fn = l("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = sn(t)), z.init(e, t);
}), Jn = l("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Kt), z.init(e, t);
}), Mn = l("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Ht), z.init(e, t), e._zod.bag.format = "ipv4";
}), Ln = l("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Qt), z.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
    try {
      new URL(`http://[${n.value}]`);
    } catch {
      n.issues.push({ code: "invalid_format", format: "ipv6", input: n.value, inst: e, continue: !t.abort });
    }
  };
}), Vn = l("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = en), z.init(e, t);
}), Bn = l("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = tn), z.init(e, t), e._zod.check = (n) => {
    const r = n.value.split("/");
    try {
      if (r.length !== 2) throw new Error();
      const [o, i] = r;
      if (!i) throw new Error();
      const s = Number(i);
      if (`${s}` !== i) throw new Error();
      if (s < 0 || s > 128) throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      n.issues.push({ code: "invalid_format", format: "cidrv6", input: n.value, inst: e, continue: !t.abort });
    }
  };
});
function qe(e) {
  if (e === "") return true;
  if (e.length % 4 !== 0) return false;
  try {
    return atob(e), true;
  } catch {
    return false;
  }
}
const Wn = l("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = nn), z.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
    qe(n.value) || n.issues.push({ code: "invalid_format", format: "base64", input: n.value, inst: e, continue: !t.abort });
  };
});
function Kn(e) {
  if (!Le.test(e)) return false;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return qe(n);
}
const Gn = l("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Le), z.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    Kn(n.value) || n.issues.push({ code: "invalid_format", format: "base64url", input: n.value, inst: e, continue: !t.abort });
  };
}), Yn = l("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = rn), z.init(e, t);
});
function qn(e, t = null) {
  try {
    const n = e.split(".");
    if (n.length !== 3) return false;
    const [r] = n;
    if (!r) return false;
    const o = JSON.parse(atob(r));
    return !("typ" in o && (o == null ? void 0 : o.typ) !== "JWT" || !o.alg || t && (!("alg" in o) || o.alg !== t));
  } catch {
    return false;
  }
}
const Xn = l("$ZodJWT", (e, t) => {
  z.init(e, t), e._zod.check = (n) => {
    qn(n.value, t.alg) || n.issues.push({ code: "invalid_format", format: "jwt", input: n.value, inst: e, continue: !t.abort });
  };
}), Xe = l("$ZodNumber", (e, t) => {
  g.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? We, e._zod.parse = (n, r) => {
    if (t.coerce) try {
      n.value = Number(n.value);
    } catch {
    }
    const o = n.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o)) return n;
    const i = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return n.issues.push({ expected: "number", code: "invalid_type", input: o, inst: e, ...i ? { received: i } : {} }), n;
  };
}), Hn = l("$ZodNumberFormat", (e, t) => {
  hn.init(e, t), Xe.init(e, t);
}), Qn = l("$ZodBoolean", (e, t) => {
  g.init(e, t), e._zod.pattern = ln, e._zod.parse = (n, r) => {
    if (t.coerce) try {
      n.value = !!n.value;
    } catch {
    }
    const o = n.value;
    return typeof o == "boolean" || n.issues.push({ expected: "boolean", code: "invalid_type", input: o, inst: e }), n;
  };
}), er = l("$ZodAny", (e, t) => {
  g.init(e, t), e._zod.parse = (n) => n;
}), tr = l("$ZodUnknown", (e, t) => {
  g.init(e, t), e._zod.parse = (n) => n;
}), nr = l("$ZodNever", (e, t) => {
  g.init(e, t), e._zod.parse = (n, r) => (n.issues.push({ expected: "never", code: "invalid_type", input: n.value, inst: e }), n);
}), rr = l("$ZodDate", (e, t) => {
  g.init(e, t), e._zod.parse = (n, r) => {
    if (t.coerce) try {
      n.value = new Date(n.value);
    } catch {
    }
    const o = n.value, i = o instanceof Date;
    return i && !Number.isNaN(o.getTime()) || n.issues.push({ expected: "date", code: "invalid_type", input: o, ...i ? { received: "Invalid Date" } : {}, inst: e }), n;
  };
});
function _e(e, t, n) {
  e.issues.length && t.issues.push(...A(n, e.issues)), t.value[n] = e.value;
}
const or = l("$ZodArray", (e, t) => {
  g.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!Array.isArray(o)) return n.issues.push({ expected: "array", code: "invalid_type", input: o, inst: e }), n;
    n.value = Array(o.length);
    const i = [];
    for (let s = 0; s < o.length; s++) {
      const c = o[s], u = t.element._zod.run({ value: c, issues: [] }, r);
      u instanceof Promise ? i.push(u.then((a) => _e(a, n, s))) : _e(u, n, s);
    }
    return i.length ? Promise.all(i).then(() => n) : n;
  };
});
function X(e, t, n, r, o) {
  if (e.issues.length) {
    if (o && !(n in r)) return;
    t.issues.push(...A(n, e.issues));
  }
  e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
}
function He(e) {
  var _a, _b, _c, _d;
  const t = Object.keys(e.shape);
  for (const r of t) if (!((_d = (_c = (_b = (_a = e.shape) == null ? void 0 : _a[r]) == null ? void 0 : _b._zod) == null ? void 0 : _c.traits) == null ? void 0 : _d.has("$ZodType"))) throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const n = yt(e.shape);
  return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(n) };
}
function Qe(e, t, n, r, o, i) {
  const s = [], c = o.keySet, u = o.catchall._zod, a = u.def.type, f = u.optout === "optional";
  for (const p in t) {
    if (c.has(p)) continue;
    if (a === "never") {
      s.push(p);
      continue;
    }
    const h = u.run({ value: t[p], issues: [] }, r);
    h instanceof Promise ? e.push(h.then((m) => X(m, n, p, t, f))) : X(h, n, p, t, f);
  }
  return s.length && n.issues.push({ code: "unrecognized_keys", keys: s, input: t, inst: i }), e.length ? Promise.all(e).then(() => n) : n;
}
const sr = l("$ZodObject", (e, t) => {
  var _a;
  if (g.init(e, t), !((_a = Object.getOwnPropertyDescriptor(t, "shape")) == null ? void 0 : _a.get)) {
    const c = t.shape;
    Object.defineProperty(t, "shape", { get: () => {
      const u = { ...c };
      return Object.defineProperty(t, "shape", { value: u }), u;
    } });
  }
  const r = ee(() => He(t));
  _(e._zod, "propValues", () => {
    const c = t.shape, u = {};
    for (const a in c) {
      const f = c[a]._zod;
      if (f.values) {
        u[a] ?? (u[a] = /* @__PURE__ */ new Set());
        for (const p of f.values) u[a].add(p);
      }
    }
    return u;
  });
  const o = M, i = t.catchall;
  let s;
  e._zod.parse = (c, u) => {
    s ?? (s = r.value);
    const a = c.value;
    if (!o(a)) return c.issues.push({ expected: "object", code: "invalid_type", input: a, inst: e }), c;
    c.value = {};
    const f = [], p = s.shape;
    for (const h of s.keys) {
      const m = p[h], k = m._zod.optout === "optional", w = m._zod.run({ value: a[h], issues: [] }, u);
      w instanceof Promise ? f.push(w.then((V) => X(V, c, h, a, k))) : X(w, c, h, a, k);
    }
    return i ? Qe(f, a, c, u, r.value, e) : f.length ? Promise.all(f).then(() => c) : c;
  };
}), ir = l("$ZodObjectJIT", (e, t) => {
  sr.init(e, t);
  const n = e._zod.parse, r = ee(() => He(t)), o = (h) => {
    var _a, _b;
    const m = new Zn(["shape", "payload", "ctx"]), k = r.value, w = (E) => {
      const Z = he(E);
      return `shape[${Z}]._zod.run({ value: input[${Z}], issues: [] }, ctx)`;
    };
    m.write("const input = payload.value;");
    const V = /* @__PURE__ */ Object.create(null);
    let dt = 0;
    for (const E of k.keys) V[E] = `key_${dt++}`;
    m.write("const newResult = {};");
    for (const E of k.keys) {
      const Z = V[E], I = he(E), mt = ((_b = (_a = h[E]) == null ? void 0 : _a._zod) == null ? void 0 : _b.optout) === "optional";
      m.write(`const ${Z} = ${w(E)};`), mt ? m.write(`
        if (${Z}.issues.length) {
          if (${I} in input) {
            payload.issues = payload.issues.concat(${Z}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${I}, ...iss.path] : [${I}]
            })));
          }
        }
        
        if (${Z}.value === undefined) {
          if (${I} in input) {
            newResult[${I}] = undefined;
          }
        } else {
          newResult[${I}] = ${Z}.value;
        }
        
      `) : m.write(`
        if (${Z}.issues.length) {
          payload.issues = payload.issues.concat(${Z}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${I}, ...iss.path] : [${I}]
          })));
        }
        
        if (${Z}.value === undefined) {
          if (${I} in input) {
            newResult[${I}] = undefined;
          }
        } else {
          newResult[${I}] = ${Z}.value;
        }
        
      `);
    }
    m.write("payload.value = newResult;"), m.write("return payload;");
    const ht = m.compile();
    return (E, Z) => ht(h, E, Z);
  };
  let i;
  const s = M, c = !Re.jitless, a = c && vt.value, f = t.catchall;
  let p;
  e._zod.parse = (h, m) => {
    p ?? (p = r.value);
    const k = h.value;
    return s(k) ? c && a && (m == null ? void 0 : m.async) === false && m.jitless !== true ? (i || (i = o(t.shape)), h = i(h, m), f ? Qe([], k, h, m, p, e) : h) : n(h, m) : (h.issues.push({ expected: "object", code: "invalid_type", input: k, inst: e }), h);
  };
});
function ge(e, t, n, r) {
  for (const i of e) if (i.issues.length === 0) return t.value = i.value, t;
  const o = e.filter((i) => !R(i));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({ code: "invalid_union", input: t.value, inst: n, errors: e.map((i) => i.issues.map((s) => T(s, r, P()))) }), t);
}
const et = l("$ZodUnion", (e, t) => {
  g.init(e, t), _(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), _(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), _(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values)) return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), _(e._zod, "pattern", () => {
    if (t.options.every((o) => o._zod.pattern)) {
      const o = t.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${o.map((i) => ue(i.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1, r = t.options[0]._zod.run;
  e._zod.parse = (o, i) => {
    if (n) return r(o, i);
    let s = false;
    const c = [];
    for (const u of t.options) {
      const a = u._zod.run({ value: o.value, issues: [] }, i);
      if (a instanceof Promise) c.push(a), s = true;
      else {
        if (a.issues.length === 0) return a;
        c.push(a);
      }
    }
    return s ? Promise.all(c).then((u) => ge(u, o, e, i)) : ge(c, o, e, i);
  };
}), cr = l("$ZodDiscriminatedUnion", (e, t) => {
  t.inclusive = false, et.init(e, t);
  const n = e._zod.parse;
  _(e._zod, "propValues", () => {
    const o = {};
    for (const i of t.options) {
      const s = i._zod.propValues;
      if (!s || Object.keys(s).length === 0) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
      for (const [c, u] of Object.entries(s)) {
        o[c] || (o[c] = /* @__PURE__ */ new Set());
        for (const a of u) o[c].add(a);
      }
    }
    return o;
  });
  const r = ee(() => {
    var _a;
    const o = t.options, i = /* @__PURE__ */ new Map();
    for (const s of o) {
      const c = (_a = s._zod.propValues) == null ? void 0 : _a[t.discriminator];
      if (!c || c.size === 0) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(s)}"`);
      for (const u of c) {
        if (i.has(u)) throw new Error(`Duplicate discriminator value "${String(u)}"`);
        i.set(u, s);
      }
    }
    return i;
  });
  e._zod.parse = (o, i) => {
    const s = o.value;
    if (!M(s)) return o.issues.push({ code: "invalid_type", expected: "object", input: s, inst: e }), o;
    const c = r.value.get(s == null ? void 0 : s[t.discriminator]);
    return c ? c._zod.run(o, i) : t.unionFallback ? n(o, i) : (o.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: t.discriminator, input: s, path: [t.discriminator], inst: e }), o);
  };
}), ur = l("$ZodIntersection", (e, t) => {
  g.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value, i = t.left._zod.run({ value: o, issues: [] }, r), s = t.right._zod.run({ value: o, issues: [] }, r);
    return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([u, a]) => ve(n, u, a)) : ve(n, i, s);
  };
});
function se(e, t) {
  if (e === t) return { valid: true, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t) return { valid: true, data: e };
  if (x(e) && x(t)) {
    const n = Object.keys(t), r = Object.keys(e).filter((i) => n.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of r) {
      const s = se(e[i], t[i]);
      if (!s.valid) return { valid: false, mergeErrorPath: [i, ...s.mergeErrorPath] };
      o[i] = s.data;
    }
    return { valid: true, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: false, mergeErrorPath: [] };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], i = t[r], s = se(o, i);
      if (!s.valid) return { valid: false, mergeErrorPath: [r, ...s.mergeErrorPath] };
      n.push(s.data);
    }
    return { valid: true, data: n };
  }
  return { valid: false, mergeErrorPath: [] };
}
function ve(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  let o;
  for (const c of t.issues) if (c.code === "unrecognized_keys") {
    o ?? (o = c);
    for (const u of c.keys) r.has(u) || r.set(u, {}), r.get(u).l = true;
  } else e.issues.push(c);
  for (const c of n.issues) if (c.code === "unrecognized_keys") for (const u of c.keys) r.has(u) || r.set(u, {}), r.get(u).r = true;
  else e.issues.push(c);
  const i = [...r].filter(([, c]) => c.l && c.r).map(([c]) => c);
  if (i.length && o && e.issues.push({ ...o, keys: i }), R(e)) return e;
  const s = se(t.value, n.value);
  if (!s.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return e.value = s.data, e;
}
const ar = l("$ZodTuple", (e, t) => {
  g.init(e, t);
  const n = t.items;
  e._zod.parse = (r, o) => {
    const i = r.value;
    if (!Array.isArray(i)) return r.issues.push({ input: i, inst: e, expected: "tuple", code: "invalid_type" }), r;
    r.value = [];
    const s = [], c = [...n].reverse().findIndex((f) => f._zod.optin !== "optional"), u = c === -1 ? 0 : n.length - c;
    if (!t.rest) {
      const f = i.length > n.length, p = i.length < u - 1;
      if (f || p) return r.issues.push({ ...f ? { code: "too_big", maximum: n.length, inclusive: true } : { code: "too_small", minimum: n.length }, input: i, inst: e, origin: "array" }), r;
    }
    let a = -1;
    for (const f of n) {
      if (a++, a >= i.length && a >= u) continue;
      const p = f._zod.run({ value: i[a], issues: [] }, o);
      p instanceof Promise ? s.push(p.then((h) => W(h, r, a))) : W(p, r, a);
    }
    if (t.rest) {
      const f = i.slice(n.length);
      for (const p of f) {
        a++;
        const h = t.rest._zod.run({ value: p, issues: [] }, o);
        h instanceof Promise ? s.push(h.then((m) => W(m, r, a))) : W(h, r, a);
      }
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
});
function W(e, t, n) {
  e.issues.length && t.issues.push(...A(n, e.issues)), t.value[n] = e.value;
}
const lr = l("$ZodRecord", (e, t) => {
  g.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!x(o)) return n.issues.push({ expected: "record", code: "invalid_type", input: o, inst: e }), n;
    const i = [], s = t.keyType._zod.values;
    if (s) {
      n.value = {};
      const c = /* @__PURE__ */ new Set();
      for (const a of s) if (typeof a == "string" || typeof a == "number" || typeof a == "symbol") {
        c.add(typeof a == "number" ? a.toString() : a);
        const f = t.valueType._zod.run({ value: o[a], issues: [] }, r);
        f instanceof Promise ? i.push(f.then((p) => {
          p.issues.length && n.issues.push(...A(a, p.issues)), n.value[a] = p.value;
        })) : (f.issues.length && n.issues.push(...A(a, f.issues)), n.value[a] = f.value);
      }
      let u;
      for (const a in o) c.has(a) || (u = u ?? [], u.push(a));
      u && u.length > 0 && n.issues.push({ code: "unrecognized_keys", input: o, inst: e, keys: u });
    } else {
      n.value = {};
      for (const c of Reflect.ownKeys(o)) {
        if (c === "__proto__") continue;
        let u = t.keyType._zod.run({ value: c, issues: [] }, r);
        if (u instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
        if (typeof c == "string" && We.test(c) && u.issues.length) {
          const p = t.keyType._zod.run({ value: Number(c), issues: [] }, r);
          if (p instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          p.issues.length === 0 && (u = p);
        }
        if (u.issues.length) {
          t.mode === "loose" ? n.value[c] = o[c] : n.issues.push({ code: "invalid_key", origin: "record", issues: u.issues.map((p) => T(p, r, P())), input: c, path: [c], inst: e });
          continue;
        }
        const f = t.valueType._zod.run({ value: o[c], issues: [] }, r);
        f instanceof Promise ? i.push(f.then((p) => {
          p.issues.length && n.issues.push(...A(c, p.issues)), n.value[u.value] = p.value;
        })) : (f.issues.length && n.issues.push(...A(c, f.issues)), n.value[u.value] = f.value);
      }
    }
    return i.length ? Promise.all(i).then(() => n) : n;
  };
}), fr = l("$ZodEnum", (e, t) => {
  g.init(e, t);
  const n = Ce(t.entries), r = new Set(n);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${n.filter((o) => zt.has(typeof o)).map((o) => typeof o == "string" ? U(o) : o.toString()).join("|")})$`), e._zod.parse = (o, i) => {
    const s = o.value;
    return r.has(s) || o.issues.push({ code: "invalid_value", values: n, input: s, inst: e }), o;
  };
}), pr = l("$ZodLiteral", (e, t) => {
  if (g.init(e, t), t.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
  const n = new Set(t.values);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? U(r) : r ? U(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, o) => {
    const i = r.value;
    return n.has(i) || r.issues.push({ code: "invalid_value", values: t.values, input: i, inst: e }), r;
  };
}), dr = l("$ZodTransform", (e, t) => {
  g.init(e, t), e._zod.parse = (n, r) => {
    if (r.direction === "backward") throw new De(e.constructor.name);
    const o = t.transform(n.value, n);
    if (r.async) return (o instanceof Promise ? o : Promise.resolve(o)).then((s) => (n.value = s, n));
    if (o instanceof Promise) throw new C();
    return n.value = o, n;
  };
});
function ze(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const tt = l("$ZodOptional", (e, t) => {
  g.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", _(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), _(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${ue(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, r) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(n, r);
      return o instanceof Promise ? o.then((i) => ze(i, n.value)) : ze(o, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, r);
  };
}), hr = l("$ZodExactOptional", (e, t) => {
  tt.init(e, t), _(e._zod, "values", () => t.innerType._zod.values), _(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, r) => t.innerType._zod.run(n, r);
}), mr = l("$ZodNullable", (e, t) => {
  g.init(e, t), _(e._zod, "optin", () => t.innerType._zod.optin), _(e._zod, "optout", () => t.innerType._zod.optout), _(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${ue(n.source)}|null)$`) : void 0;
  }), _(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, r) => n.value === null ? n : t.innerType._zod.run(n, r);
}), _r = l("$ZodDefault", (e, t) => {
  g.init(e, t), e._zod.optin = "optional", _(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward") return t.innerType._zod.run(n, r);
    if (n.value === void 0) return n.value = t.defaultValue, n;
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((i) => ye(i, t)) : ye(o, t);
  };
});
function ye(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const gr = l("$ZodPrefault", (e, t) => {
  g.init(e, t), e._zod.optin = "optional", _(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => (r.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, r));
}), vr = l("$ZodNonOptional", (e, t) => {
  g.init(e, t), _(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (n, r) => {
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((i) => be(i, e)) : be(o, e);
  };
});
function be(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t }), e;
}
const zr = l("$ZodCatch", (e, t) => {
  g.init(e, t), _(e._zod, "optin", () => t.innerType._zod.optin), _(e._zod, "optout", () => t.innerType._zod.optout), _(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward") return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((i) => (n.value = i.value, i.issues.length && (n.value = t.catchValue({ ...n, error: { issues: i.issues.map((s) => T(s, r, P())) }, input: n.value }), n.issues = []), n)) : (n.value = o.value, o.issues.length && (n.value = t.catchValue({ ...n, error: { issues: o.issues.map((i) => T(i, r, P())) }, input: n.value }), n.issues = []), n);
  };
}), yr = l("$ZodPipe", (e, t) => {
  g.init(e, t), _(e._zod, "values", () => t.in._zod.values), _(e._zod, "optin", () => t.in._zod.optin), _(e._zod, "optout", () => t.out._zod.optout), _(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, r) => {
    if (r.direction === "backward") {
      const i = t.out._zod.run(n, r);
      return i instanceof Promise ? i.then((s) => K(s, t.in, r)) : K(i, t.in, r);
    }
    const o = t.in._zod.run(n, r);
    return o instanceof Promise ? o.then((i) => K(i, t.out, r)) : K(o, t.out, r);
  };
});
function K(e, t, n) {
  return e.issues.length ? (e.aborted = true, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const br = l("$ZodReadonly", (e, t) => {
  g.init(e, t), _(e._zod, "propValues", () => t.innerType._zod.propValues), _(e._zod, "values", () => t.innerType._zod.values), _(e._zod, "optin", () => {
    var _a, _b;
    return (_b = (_a = t.innerType) == null ? void 0 : _a._zod) == null ? void 0 : _b.optin;
  }), _(e._zod, "optout", () => {
    var _a, _b;
    return (_b = (_a = t.innerType) == null ? void 0 : _a._zod) == null ? void 0 : _b.optout;
  }), e._zod.parse = (n, r) => {
    if (r.direction === "backward") return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then(we) : we(o);
  };
});
function we(e) {
  return e.value = Object.freeze(e.value), e;
}
const wr = l("$ZodCustom", (e, t) => {
  S.init(e, t), g.init(e, t), e._zod.parse = (n, r) => n, e._zod.check = (n) => {
    const r = n.value, o = t.fn(r);
    if (o instanceof Promise) return o.then((i) => ke(i, n, r, e));
    ke(o, n, r, e);
  };
});
function ke(e, t, n, r) {
  if (!e) {
    const o = { code: "custom", input: n, inst: r, path: [...r._zod.def.path ?? []], continue: !r._zod.def.abort };
    r._zod.def.params && (o.params = r._zod.def.params), t.issues.push(L(o));
  }
}
var $e;
class kr {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...n) {
    const r = n[0];
    return this._map.set(t, r), r && typeof r == "object" && "id" in r && this._idmap.set(r.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const n = this._map.get(t);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this;
  }
  get(t) {
    const n = t._zod.parent;
    if (n) {
      const r = { ...this.get(n) ?? {} };
      delete r.id;
      const o = { ...r, ...this._map.get(t) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function $r() {
  return new kr();
}
($e = globalThis).__zod_globalRegistry ?? ($e.__zod_globalRegistry = $r());
const J = globalThis.__zod_globalRegistry;
function Zr(e, t) {
  return new e({ type: "string", ...d(t) });
}
function Sr(e, t) {
  return new e({ type: "string", format: "email", check: "string_format", abort: false, ...d(t) });
}
function Ze(e, t) {
  return new e({ type: "string", format: "guid", check: "string_format", abort: false, ...d(t) });
}
function Or(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, ...d(t) });
}
function Ir(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...d(t) });
}
function Er(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...d(t) });
}
function Pr(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...d(t) });
}
function Tr(e, t) {
  return new e({ type: "string", format: "url", check: "string_format", abort: false, ...d(t) });
}
function Nr(e, t) {
  return new e({ type: "string", format: "emoji", check: "string_format", abort: false, ...d(t) });
}
function jr(e, t) {
  return new e({ type: "string", format: "nanoid", check: "string_format", abort: false, ...d(t) });
}
function Ar(e, t) {
  return new e({ type: "string", format: "cuid", check: "string_format", abort: false, ...d(t) });
}
function Dr(e, t) {
  return new e({ type: "string", format: "cuid2", check: "string_format", abort: false, ...d(t) });
}
function Rr(e, t) {
  return new e({ type: "string", format: "ulid", check: "string_format", abort: false, ...d(t) });
}
function Cr(e, t) {
  return new e({ type: "string", format: "xid", check: "string_format", abort: false, ...d(t) });
}
function xr(e, t) {
  return new e({ type: "string", format: "ksuid", check: "string_format", abort: false, ...d(t) });
}
function Ur(e, t) {
  return new e({ type: "string", format: "ipv4", check: "string_format", abort: false, ...d(t) });
}
function Fr(e, t) {
  return new e({ type: "string", format: "ipv6", check: "string_format", abort: false, ...d(t) });
}
function Jr(e, t) {
  return new e({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...d(t) });
}
function Mr(e, t) {
  return new e({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...d(t) });
}
function Lr(e, t) {
  return new e({ type: "string", format: "base64", check: "string_format", abort: false, ...d(t) });
}
function Vr(e, t) {
  return new e({ type: "string", format: "base64url", check: "string_format", abort: false, ...d(t) });
}
function Br(e, t) {
  return new e({ type: "string", format: "e164", check: "string_format", abort: false, ...d(t) });
}
function Wr(e, t) {
  return new e({ type: "string", format: "jwt", check: "string_format", abort: false, ...d(t) });
}
function Kr(e, t) {
  return new e({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...d(t) });
}
function Gr(e, t) {
  return new e({ type: "string", format: "date", check: "string_format", ...d(t) });
}
function Yr(e, t) {
  return new e({ type: "string", format: "time", check: "string_format", precision: null, ...d(t) });
}
function qr(e, t) {
  return new e({ type: "string", format: "duration", check: "string_format", ...d(t) });
}
function Xr(e, t) {
  return new e({ type: "number", checks: [], ...d(t) });
}
function Hr(e, t) {
  return new e({ type: "number", check: "number_format", abort: false, format: "safeint", ...d(t) });
}
function Qr(e, t) {
  return new e({ type: "boolean", ...d(t) });
}
function eo(e) {
  return new e({ type: "any" });
}
function to(e) {
  return new e({ type: "unknown" });
}
function no(e, t) {
  return new e({ type: "never", ...d(t) });
}
function ro(e, t) {
  return new e({ type: "date", ...d(t) });
}
function Se(e, t) {
  return new Ge({ check: "less_than", ...d(t), value: e, inclusive: false });
}
function Y(e, t) {
  return new Ge({ check: "less_than", ...d(t), value: e, inclusive: true });
}
function Oe(e, t) {
  return new Ye({ check: "greater_than", ...d(t), value: e, inclusive: false });
}
function q(e, t) {
  return new Ye({ check: "greater_than", ...d(t), value: e, inclusive: true });
}
function Ie(e, t) {
  return new dn({ check: "multiple_of", ...d(t), value: e });
}
function nt(e, t) {
  return new mn({ check: "max_length", ...d(t), maximum: e });
}
function H(e, t) {
  return new _n({ check: "min_length", ...d(t), minimum: e });
}
function rt(e, t) {
  return new gn({ check: "length_equals", ...d(t), length: e });
}
function oo(e, t) {
  return new vn({ check: "string_format", format: "regex", ...d(t), pattern: e });
}
function so(e) {
  return new zn({ check: "string_format", format: "lowercase", ...d(e) });
}
function io(e) {
  return new yn({ check: "string_format", format: "uppercase", ...d(e) });
}
function co(e, t) {
  return new bn({ check: "string_format", format: "includes", ...d(t), includes: e });
}
function uo(e, t) {
  return new wn({ check: "string_format", format: "starts_with", ...d(t), prefix: e });
}
function ao(e, t) {
  return new kn({ check: "string_format", format: "ends_with", ...d(t), suffix: e });
}
function F(e) {
  return new $n({ check: "overwrite", tx: e });
}
function lo(e) {
  return F((t) => t.normalize(e));
}
function fo() {
  return F((e) => e.trim());
}
function po() {
  return F((e) => e.toLowerCase());
}
function ho() {
  return F((e) => e.toUpperCase());
}
function mo() {
  return F((e) => gt(e));
}
function _o(e, t, n) {
  return new e({ type: "array", element: t, ...d(n) });
}
function go(e, t, n) {
  return new e({ type: "custom", check: "custom", fn: t, ...d(n) });
}
function vo(e) {
  const t = zo((n) => (n.addIssue = (r) => {
    if (typeof r == "string") n.issues.push(L(r, n.value, t._zod.def));
    else {
      const o = r;
      o.fatal && (o.continue = false), o.code ?? (o.code = "custom"), o.input ?? (o.input = n.value), o.inst ?? (o.inst = t), o.continue ?? (o.continue = !t._zod.def.abort), n.issues.push(L(o));
    }
  }, e(n.value, n)));
  return t;
}
function zo(e, t) {
  const n = new S({ check: "custom", ...d(t) });
  return n._zod.check = e, n;
}
function ot(e) {
  let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), { processors: e.processors ?? {}, metadataRegistry: (e == null ? void 0 : e.metadata) ?? J, target: t, unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw", override: (e == null ? void 0 : e.override) ?? (() => {
  }), io: (e == null ? void 0 : e.io) ?? "output", counter: 0, seen: /* @__PURE__ */ new Map(), cycles: (e == null ? void 0 : e.cycles) ?? "ref", reused: (e == null ? void 0 : e.reused) ?? "inline", external: (e == null ? void 0 : e.external) ?? void 0 };
}
function b(e, t, n = { path: [], schemaPath: [] }) {
  var _a, _b;
  var r;
  const o = e._zod.def, i = t.seen.get(e);
  if (i) return i.count++, n.schemaPath.includes(e) && (i.cycle = n.path), i.schema;
  const s = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, s);
  const c = (_b = (_a = e._zod).toJSONSchema) == null ? void 0 : _b.call(_a);
  if (c) s.schema = c;
  else {
    const f = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, s.schema, f);
    else {
      const h = s.schema, m = t.processors[o.type];
      if (!m) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);
      m(e, t, h, f);
    }
    const p = e._zod.parent;
    p && (s.ref || (s.ref = p), b(p, t, f), t.seen.get(p).isParent = true);
  }
  const u = t.metadataRegistry.get(e);
  return u && Object.assign(s.schema, u), t.io === "input" && $(e) && (delete s.schema.examples, delete s.schema.default), t.io === "input" && s.schema._prefault && ((r = s.schema).default ?? (r.default = s.schema._prefault)), delete s.schema._prefault, t.seen.get(e).schema;
}
function st(e, t) {
  var _a, _b, _c, _d;
  const n = e.seen.get(t);
  if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = /* @__PURE__ */ new Map();
  for (const s of e.seen.entries()) {
    const c = (_a = e.metadataRegistry.get(s[0])) == null ? void 0 : _a.id;
    if (c) {
      const u = r.get(c);
      if (u && u !== s[0]) throw new Error(`Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(c, s[0]);
    }
  }
  const o = (s) => {
    var _a2;
    const c = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const p = (_a2 = e.external.registry.get(s[0])) == null ? void 0 : _a2.id, h = e.external.uri ?? ((k) => k);
      if (p) return { ref: h(p) };
      const m = s[1].defId ?? s[1].schema.id ?? `schema${e.counter++}`;
      return s[1].defId = m, { defId: m, ref: `${h("__shared")}#/${c}/${m}` };
    }
    if (s[1] === n) return { ref: "#" };
    const a = `#/${c}/`, f = s[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: f, ref: a + f };
  }, i = (s) => {
    if (s[1].schema.$ref) return;
    const c = s[1], { ref: u, defId: a } = o(s);
    c.def = { ...c.schema }, a && (c.defId = a);
    const f = c.schema;
    for (const p in f) delete f[p];
    f.$ref = u;
  };
  if (e.cycles === "throw") for (const s of e.seen.entries()) {
    const c = s[1];
    if (c.cycle) throw new Error(`Cycle detected: #/${(_b = c.cycle) == null ? void 0 : _b.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
  }
  for (const s of e.seen.entries()) {
    const c = s[1];
    if (t === s[0]) {
      i(s);
      continue;
    }
    if (e.external) {
      const a = (_c = e.external.registry.get(s[0])) == null ? void 0 : _c.id;
      if (t !== s[0] && a) {
        i(s);
        continue;
      }
    }
    if ((_d = e.metadataRegistry.get(s[0])) == null ? void 0 : _d.id) {
      i(s);
      continue;
    }
    if (c.cycle) {
      i(s);
      continue;
    }
    if (c.count > 1 && e.reused === "ref") {
      i(s);
      continue;
    }
  }
}
function it(e, t) {
  var _a, _b, _c;
  const n = e.seen.get(t);
  if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (s) => {
    const c = e.seen.get(s);
    if (c.ref === null) return;
    const u = c.def ?? c.schema, a = { ...u }, f = c.ref;
    if (c.ref = null, f) {
      r(f);
      const h = e.seen.get(f), m = h.schema;
      if (m.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (u.allOf = u.allOf ?? [], u.allOf.push(m)) : Object.assign(u, m), Object.assign(u, a), s._zod.parent === f) for (const w in u) w === "$ref" || w === "allOf" || w in a || delete u[w];
      if (m.$ref && h.def) for (const w in u) w === "$ref" || w === "allOf" || w in h.def && JSON.stringify(u[w]) === JSON.stringify(h.def[w]) && delete u[w];
    }
    const p = s._zod.parent;
    if (p && p !== f) {
      r(p);
      const h = e.seen.get(p);
      if ((h == null ? void 0 : h.schema.$ref) && (u.$ref = h.schema.$ref, h.def)) for (const m in u) m === "$ref" || m === "allOf" || m in h.def && JSON.stringify(u[m]) === JSON.stringify(h.def[m]) && delete u[m];
    }
    e.override({ zodSchema: s, jsonSchema: u, path: c.path ?? [] });
  };
  for (const s of [...e.seen.entries()].reverse()) r(s[0]);
  const o = {};
  if (e.target === "draft-2020-12" ? o.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? o.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? o.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (_a = e.external) == null ? void 0 : _a.uri) {
    const s = (_b = e.external.registry.get(t)) == null ? void 0 : _b.id;
    if (!s) throw new Error("Schema is missing an `id` property");
    o.$id = e.external.uri(s);
  }
  Object.assign(o, n.def ?? n.schema);
  const i = ((_c = e.external) == null ? void 0 : _c.defs) ?? {};
  for (const s of e.seen.entries()) {
    const c = s[1];
    c.def && c.defId && (i[c.defId] = c.def);
  }
  e.external || Object.keys(i).length > 0 && (e.target === "draft-2020-12" ? o.$defs = i : o.definitions = i);
  try {
    const s = JSON.parse(JSON.stringify(o));
    return Object.defineProperty(s, "~standard", { value: { ...t["~standard"], jsonSchema: { input: Q(t, "input", e.processors), output: Q(t, "output", e.processors) } }, enumerable: false, writable: false }), s;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function $(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e)) return false;
  n.seen.add(e);
  const r = e._zod.def;
  if (r.type === "transform") return true;
  if (r.type === "array") return $(r.element, n);
  if (r.type === "set") return $(r.valueType, n);
  if (r.type === "lazy") return $(r.getter(), n);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return $(r.innerType, n);
  if (r.type === "intersection") return $(r.left, n) || $(r.right, n);
  if (r.type === "record" || r.type === "map") return $(r.keyType, n) || $(r.valueType, n);
  if (r.type === "pipe") return $(r.in, n) || $(r.out, n);
  if (r.type === "object") {
    for (const o in r.shape) if ($(r.shape[o], n)) return true;
    return false;
  }
  if (r.type === "union") {
    for (const o of r.options) if ($(o, n)) return true;
    return false;
  }
  if (r.type === "tuple") {
    for (const o of r.items) if ($(o, n)) return true;
    return !!(r.rest && $(r.rest, n));
  }
  return false;
}
const yo = (e, t = {}) => (n) => {
  const r = ot({ ...n, processors: t });
  return b(e, r), st(r, e), it(r, e);
}, Q = (e, t, n = {}) => (r) => {
  const { libraryOptions: o, target: i } = r ?? {}, s = ot({ ...o ?? {}, target: i, io: t, processors: n });
  return b(e, s), st(s, e), it(s, e);
}, bo = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }, wo = (e, t, n, r) => {
  const o = n;
  o.type = "string";
  const { minimum: i, maximum: s, format: c, patterns: u, contentEncoding: a } = e._zod.bag;
  if (typeof i == "number" && (o.minLength = i), typeof s == "number" && (o.maxLength = s), c && (o.format = bo[c] ?? c, o.format === "" && delete o.format, c === "time" && delete o.format), a && (o.contentEncoding = a), u && u.size > 0) {
    const f = [...u];
    f.length === 1 ? o.pattern = f[0].source : f.length > 1 && (o.allOf = [...f.map((p) => ({ ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {}, pattern: p.source }))]);
  }
}, ko = (e, t, n, r) => {
  const o = n, { minimum: i, maximum: s, format: c, multipleOf: u, exclusiveMaximum: a, exclusiveMinimum: f } = e._zod.bag;
  typeof c == "string" && c.includes("int") ? o.type = "integer" : o.type = "number", typeof f == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.minimum = f, o.exclusiveMinimum = true) : o.exclusiveMinimum = f), typeof i == "number" && (o.minimum = i, typeof f == "number" && t.target !== "draft-04" && (f >= i ? delete o.minimum : delete o.exclusiveMinimum)), typeof a == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.maximum = a, o.exclusiveMaximum = true) : o.exclusiveMaximum = a), typeof s == "number" && (o.maximum = s, typeof a == "number" && t.target !== "draft-04" && (a <= s ? delete o.maximum : delete o.exclusiveMaximum)), typeof u == "number" && (o.multipleOf = u);
}, $o = (e, t, n, r) => {
  n.type = "boolean";
}, Zo = (e, t, n, r) => {
  n.not = {};
}, So = (e, t, n, r) => {
}, Oo = (e, t, n, r) => {
}, Io = (e, t, n, r) => {
  if (t.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema");
}, Eo = (e, t, n, r) => {
  const o = e._zod.def, i = Ce(o.entries);
  i.every((s) => typeof s == "number") && (n.type = "number"), i.every((s) => typeof s == "string") && (n.type = "string"), n.enum = i;
}, Po = (e, t, n, r) => {
  const o = e._zod.def, i = [];
  for (const s of o.values) if (s === void 0) {
    if (t.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
  } else if (typeof s == "bigint") {
    if (t.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
    i.push(Number(s));
  } else i.push(s);
  if (i.length !== 0) if (i.length === 1) {
    const s = i[0];
    n.type = s === null ? "null" : typeof s, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [s] : n.const = s;
  } else i.every((s) => typeof s == "number") && (n.type = "number"), i.every((s) => typeof s == "string") && (n.type = "string"), i.every((s) => typeof s == "boolean") && (n.type = "boolean"), i.every((s) => s === null) && (n.type = "null"), n.enum = i;
}, To = (e, t, n, r) => {
  if (t.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
}, No = (e, t, n, r) => {
  if (t.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
}, jo = (e, t, n, r) => {
  const o = n, i = e._zod.def, { minimum: s, maximum: c } = e._zod.bag;
  typeof s == "number" && (o.minItems = s), typeof c == "number" && (o.maxItems = c), o.type = "array", o.items = b(i.element, t, { ...r, path: [...r.path, "items"] });
}, Ao = (e, t, n, r) => {
  var _a;
  const o = n, i = e._zod.def;
  o.type = "object", o.properties = {};
  const s = i.shape;
  for (const a in s) o.properties[a] = b(s[a], t, { ...r, path: [...r.path, "properties", a] });
  const c = new Set(Object.keys(s)), u = new Set([...c].filter((a) => {
    const f = i.shape[a]._zod;
    return t.io === "input" ? f.optin === void 0 : f.optout === void 0;
  }));
  u.size > 0 && (o.required = Array.from(u)), ((_a = i.catchall) == null ? void 0 : _a._zod.def.type) === "never" ? o.additionalProperties = false : i.catchall ? i.catchall && (o.additionalProperties = b(i.catchall, t, { ...r, path: [...r.path, "additionalProperties"] })) : t.io === "output" && (o.additionalProperties = false);
}, Do = (e, t, n, r) => {
  const o = e._zod.def, i = o.inclusive === false, s = o.options.map((c, u) => b(c, t, { ...r, path: [...r.path, i ? "oneOf" : "anyOf", u] }));
  i ? n.oneOf = s : n.anyOf = s;
}, Ro = (e, t, n, r) => {
  const o = e._zod.def, i = b(o.left, t, { ...r, path: [...r.path, "allOf", 0] }), s = b(o.right, t, { ...r, path: [...r.path, "allOf", 1] }), c = (a) => "allOf" in a && Object.keys(a).length === 1, u = [...c(i) ? i.allOf : [i], ...c(s) ? s.allOf : [s]];
  n.allOf = u;
}, Co = (e, t, n, r) => {
  const o = n, i = e._zod.def;
  o.type = "array";
  const s = t.target === "draft-2020-12" ? "prefixItems" : "items", c = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", u = i.items.map((h, m) => b(h, t, { ...r, path: [...r.path, s, m] })), a = i.rest ? b(i.rest, t, { ...r, path: [...r.path, c, ...t.target === "openapi-3.0" ? [i.items.length] : []] }) : null;
  t.target === "draft-2020-12" ? (o.prefixItems = u, a && (o.items = a)) : t.target === "openapi-3.0" ? (o.items = { anyOf: u }, a && o.items.anyOf.push(a), o.minItems = u.length, a || (o.maxItems = u.length)) : (o.items = u, a && (o.additionalItems = a));
  const { minimum: f, maximum: p } = e._zod.bag;
  typeof f == "number" && (o.minItems = f), typeof p == "number" && (o.maxItems = p);
}, xo = (e, t, n, r) => {
  var _a;
  const o = n, i = e._zod.def;
  o.type = "object";
  const s = i.keyType, u = (_a = s._zod.bag) == null ? void 0 : _a.patterns;
  if (i.mode === "loose" && u && u.size > 0) {
    const f = b(i.valueType, t, { ...r, path: [...r.path, "patternProperties", "*"] });
    o.patternProperties = {};
    for (const p of u) o.patternProperties[p.source] = f;
  } else (t.target === "draft-07" || t.target === "draft-2020-12") && (o.propertyNames = b(i.keyType, t, { ...r, path: [...r.path, "propertyNames"] })), o.additionalProperties = b(i.valueType, t, { ...r, path: [...r.path, "additionalProperties"] });
  const a = s._zod.values;
  if (a) {
    const f = [...a].filter((p) => typeof p == "string" || typeof p == "number");
    f.length > 0 && (o.required = f);
  }
}, Uo = (e, t, n, r) => {
  const o = e._zod.def, i = b(o.innerType, t, r), s = t.seen.get(e);
  t.target === "openapi-3.0" ? (s.ref = o.innerType, n.nullable = true) : n.anyOf = [i, { type: "null" }];
}, Fo = (e, t, n, r) => {
  const o = e._zod.def;
  b(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType;
}, Jo = (e, t, n, r) => {
  const o = e._zod.def;
  b(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType, n.default = JSON.parse(JSON.stringify(o.defaultValue));
}, Mo = (e, t, n, r) => {
  const o = e._zod.def;
  b(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
}, Lo = (e, t, n, r) => {
  const o = e._zod.def;
  b(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType;
  let s;
  try {
    s = o.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = s;
}, Vo = (e, t, n, r) => {
  const o = e._zod.def, i = t.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
  b(i, t, r);
  const s = t.seen.get(e);
  s.ref = i;
}, Bo = (e, t, n, r) => {
  const o = e._zod.def;
  b(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType, n.readOnly = true;
}, ct = (e, t, n, r) => {
  const o = e._zod.def;
  b(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType;
}, Wo = l("ZodISODateTime", (e, t) => {
  xn.init(e, t), y.init(e, t);
});
function Ko(e) {
  return Kr(Wo, e);
}
const Go = l("ZodISODate", (e, t) => {
  Un.init(e, t), y.init(e, t);
});
function Yo(e) {
  return Gr(Go, e);
}
const qo = l("ZodISOTime", (e, t) => {
  Fn.init(e, t), y.init(e, t);
});
function Xo(e) {
  return Yr(qo, e);
}
const Ho = l("ZodISODuration", (e, t) => {
  Jn.init(e, t), y.init(e, t);
});
function Qo(e) {
  return qr(Ho, e);
}
const es = (e, t) => {
  Je.init(e, t), e.name = "ZodError", Object.defineProperties(e, { format: { value: (n) => Pt(e, n) }, flatten: { value: (n) => Et(e, n) }, addIssue: { value: (n) => {
    e.issues.push(n), e.message = JSON.stringify(e.issues, oe, 2);
  } }, addIssues: { value: (n) => {
    e.issues.push(...n), e.message = JSON.stringify(e.issues, oe, 2);
  } }, isEmpty: { get() {
    return e.issues.length === 0;
  } } });
}, O = l("ZodError", es, { Parent: Error }), ts = le(O), ns = fe(O), rs = te(O), os = ne(O), ss = jt(O), is = At(O), cs = Dt(O), us = Rt(O), as = Ct(O), ls = xt(O), fs = Ut(O), ps = Ft(O), v = l("ZodType", (e, t) => (g.init(e, t), Object.assign(e["~standard"], { jsonSchema: { input: Q(e, "input"), output: Q(e, "output") } }), e.toJSONSchema = yo(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(N(t, { checks: [...t.checks ?? [], ...n.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)] }), { parent: true }), e.with = e.check, e.clone = (n, r) => j(e, n, r), e.brand = () => e, e.register = ((n, r) => (n.add(e, r), e)), e.parse = (n, r) => ts(e, n, r, { callee: e.parse }), e.safeParse = (n, r) => rs(e, n, r), e.parseAsync = async (n, r) => ns(e, n, r, { callee: e.parseAsync }), e.safeParseAsync = async (n, r) => os(e, n, r), e.spa = e.safeParseAsync, e.encode = (n, r) => ss(e, n, r), e.decode = (n, r) => is(e, n, r), e.encodeAsync = async (n, r) => cs(e, n, r), e.decodeAsync = async (n, r) => us(e, n, r), e.safeEncode = (n, r) => as(e, n, r), e.safeDecode = (n, r) => ls(e, n, r), e.safeEncodeAsync = async (n, r) => fs(e, n, r), e.safeDecodeAsync = async (n, r) => ps(e, n, r), e.refine = (n, r) => e.check(fi(n, r)), e.superRefine = (n) => e.check(pi(n)), e.overwrite = (n) => e.check(F(n)), e.optional = () => Ne(e), e.exactOptional = () => Hs(e), e.nullable = () => je(e), e.nullish = () => Ne(je(e)), e.nonoptional = (n) => oi(e, n), e.array = () => Us(e), e.or = (n) => Js([e, n]), e.and = (n) => Vs(e, n), e.transform = (n) => Ae(e, qs(n)), e.default = (n) => ti(e, n), e.prefault = (n) => ri(e, n), e.catch = (n) => ii(e, n), e.pipe = (n) => Ae(e, n), e.readonly = () => ai(e), e.describe = (n) => {
  const r = e.clone();
  return J.add(r, { description: n }), r;
}, Object.defineProperty(e, "description", { get() {
  var _a;
  return (_a = J.get(e)) == null ? void 0 : _a.description;
}, configurable: true }), e.meta = (...n) => {
  if (n.length === 0) return J.get(e);
  const r = e.clone();
  return J.add(r, n[0]), r;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), ut = l("_ZodString", (e, t) => {
  pe.init(e, t), v.init(e, t), e._zod.processJSONSchema = (r, o, i) => wo(e, r, o);
  const n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...r) => e.check(oo(...r)), e.includes = (...r) => e.check(co(...r)), e.startsWith = (...r) => e.check(uo(...r)), e.endsWith = (...r) => e.check(ao(...r)), e.min = (...r) => e.check(H(...r)), e.max = (...r) => e.check(nt(...r)), e.length = (...r) => e.check(rt(...r)), e.nonempty = (...r) => e.check(H(1, ...r)), e.lowercase = (r) => e.check(so(r)), e.uppercase = (r) => e.check(io(r)), e.trim = () => e.check(fo()), e.normalize = (...r) => e.check(lo(...r)), e.toLowerCase = () => e.check(po()), e.toUpperCase = () => e.check(ho()), e.slugify = () => e.check(mo());
}), ds = l("ZodString", (e, t) => {
  pe.init(e, t), ut.init(e, t), e.email = (n) => e.check(Sr(hs, n)), e.url = (n) => e.check(Tr(ms, n)), e.jwt = (n) => e.check(Wr(Ps, n)), e.emoji = (n) => e.check(Nr(_s, n)), e.guid = (n) => e.check(Ze(Ee, n)), e.uuid = (n) => e.check(Or(G, n)), e.uuidv4 = (n) => e.check(Ir(G, n)), e.uuidv6 = (n) => e.check(Er(G, n)), e.uuidv7 = (n) => e.check(Pr(G, n)), e.nanoid = (n) => e.check(jr(gs, n)), e.guid = (n) => e.check(Ze(Ee, n)), e.cuid = (n) => e.check(Ar(vs, n)), e.cuid2 = (n) => e.check(Dr(zs, n)), e.ulid = (n) => e.check(Rr(ys, n)), e.base64 = (n) => e.check(Lr(Os, n)), e.base64url = (n) => e.check(Vr(Is, n)), e.xid = (n) => e.check(Cr(bs, n)), e.ksuid = (n) => e.check(xr(ws, n)), e.ipv4 = (n) => e.check(Ur(ks, n)), e.ipv6 = (n) => e.check(Fr($s, n)), e.cidrv4 = (n) => e.check(Jr(Zs, n)), e.cidrv6 = (n) => e.check(Mr(Ss, n)), e.e164 = (n) => e.check(Br(Es, n)), e.datetime = (n) => e.check(Ko(n)), e.date = (n) => e.check(Yo(n)), e.time = (n) => e.check(Xo(n)), e.duration = (n) => e.check(Qo(n));
});
function hi(e) {
  return Zr(ds, e);
}
const y = l("ZodStringFormat", (e, t) => {
  z.init(e, t), ut.init(e, t);
}), hs = l("ZodEmail", (e, t) => {
  En.init(e, t), y.init(e, t);
}), Ee = l("ZodGUID", (e, t) => {
  On.init(e, t), y.init(e, t);
}), G = l("ZodUUID", (e, t) => {
  In.init(e, t), y.init(e, t);
}), ms = l("ZodURL", (e, t) => {
  Pn.init(e, t), y.init(e, t);
}), _s = l("ZodEmoji", (e, t) => {
  Tn.init(e, t), y.init(e, t);
}), gs = l("ZodNanoID", (e, t) => {
  Nn.init(e, t), y.init(e, t);
}), vs = l("ZodCUID", (e, t) => {
  jn.init(e, t), y.init(e, t);
}), zs = l("ZodCUID2", (e, t) => {
  An.init(e, t), y.init(e, t);
}), ys = l("ZodULID", (e, t) => {
  Dn.init(e, t), y.init(e, t);
}), bs = l("ZodXID", (e, t) => {
  Rn.init(e, t), y.init(e, t);
}), ws = l("ZodKSUID", (e, t) => {
  Cn.init(e, t), y.init(e, t);
}), ks = l("ZodIPv4", (e, t) => {
  Mn.init(e, t), y.init(e, t);
}), $s = l("ZodIPv6", (e, t) => {
  Ln.init(e, t), y.init(e, t);
}), Zs = l("ZodCIDRv4", (e, t) => {
  Vn.init(e, t), y.init(e, t);
}), Ss = l("ZodCIDRv6", (e, t) => {
  Bn.init(e, t), y.init(e, t);
}), Os = l("ZodBase64", (e, t) => {
  Wn.init(e, t), y.init(e, t);
}), Is = l("ZodBase64URL", (e, t) => {
  Gn.init(e, t), y.init(e, t);
}), Es = l("ZodE164", (e, t) => {
  Yn.init(e, t), y.init(e, t);
}), Ps = l("ZodJWT", (e, t) => {
  Xn.init(e, t), y.init(e, t);
}), at = l("ZodNumber", (e, t) => {
  Xe.init(e, t), v.init(e, t), e._zod.processJSONSchema = (r, o, i) => ko(e, r, o), e.gt = (r, o) => e.check(Oe(r, o)), e.gte = (r, o) => e.check(q(r, o)), e.min = (r, o) => e.check(q(r, o)), e.lt = (r, o) => e.check(Se(r, o)), e.lte = (r, o) => e.check(Y(r, o)), e.max = (r, o) => e.check(Y(r, o)), e.int = (r) => e.check(Pe(r)), e.safe = (r) => e.check(Pe(r)), e.positive = (r) => e.check(Oe(0, r)), e.nonnegative = (r) => e.check(q(0, r)), e.negative = (r) => e.check(Se(0, r)), e.nonpositive = (r) => e.check(Y(0, r)), e.multipleOf = (r, o) => e.check(Ie(r, o)), e.step = (r, o) => e.check(Ie(r, o)), e.finite = () => e;
  const n = e._zod.bag;
  e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5), e.isFinite = true, e.format = n.format ?? null;
});
function mi(e) {
  return Xr(at, e);
}
const Ts = l("ZodNumberFormat", (e, t) => {
  Hn.init(e, t), at.init(e, t);
});
function Pe(e) {
  return Hr(Ts, e);
}
const Ns = l("ZodBoolean", (e, t) => {
  Qn.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => $o(e, n, r);
});
function _i(e) {
  return Qr(Ns, e);
}
const js = l("ZodAny", (e, t) => {
  er.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => So();
});
function gi() {
  return eo(js);
}
const As = l("ZodUnknown", (e, t) => {
  tr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Oo();
});
function Te() {
  return to(As);
}
const Ds = l("ZodNever", (e, t) => {
  nr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Zo(e, n, r);
});
function Rs(e) {
  return no(Ds, e);
}
const Cs = l("ZodDate", (e, t) => {
  rr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (r, o, i) => Io(e, r), e.min = (r, o) => e.check(q(r, o)), e.max = (r, o) => e.check(Y(r, o));
  const n = e._zod.bag;
  e.minDate = n.minimum ? new Date(n.minimum) : null, e.maxDate = n.maximum ? new Date(n.maximum) : null;
});
function vi(e) {
  return ro(Cs, e);
}
const xs = l("ZodArray", (e, t) => {
  or.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => jo(e, n, r, o), e.element = t.element, e.min = (n, r) => e.check(H(n, r)), e.nonempty = (n) => e.check(H(1, n)), e.max = (n, r) => e.check(nt(n, r)), e.length = (n, r) => e.check(rt(n, r)), e.unwrap = () => e.element;
});
function Us(e, t) {
  return _o(xs, e, t);
}
const Fs = l("ZodObject", (e, t) => {
  ir.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Ao(e, n, r, o), _(e, "shape", () => t.shape), e.keyof = () => Ks(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Te() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Te() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Rs() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => $t(e, n), e.safeExtend = (n) => Zt(e, n), e.merge = (n) => St(e, n), e.pick = (n) => wt(e, n), e.omit = (n) => kt(e, n), e.partial = (...n) => Ot(ft, e, n[0]), e.required = (...n) => It(pt, e, n[0]);
});
function zi(e, t) {
  const n = { type: "object", shape: e ?? {}, ...d(t) };
  return new Fs(n);
}
const lt = l("ZodUnion", (e, t) => {
  et.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Do(e, n, r, o), e.options = t.options;
});
function Js(e, t) {
  return new lt({ type: "union", options: e, ...d(t) });
}
const Ms = l("ZodDiscriminatedUnion", (e, t) => {
  lt.init(e, t), cr.init(e, t);
});
function yi(e, t, n) {
  return new Ms({ type: "union", options: t, discriminator: e, ...d(n) });
}
const Ls = l("ZodIntersection", (e, t) => {
  ur.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Ro(e, n, r, o);
});
function Vs(e, t) {
  return new Ls({ type: "intersection", left: e, right: t });
}
const Bs = l("ZodTuple", (e, t) => {
  ar.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Co(e, n, r, o), e.rest = (n) => e.clone({ ...e._zod.def, rest: n });
});
function bi(e, t, n) {
  const r = t instanceof g, o = r ? n : t, i = r ? t : null;
  return new Bs({ type: "tuple", items: e, rest: i, ...d(o) });
}
const Ws = l("ZodRecord", (e, t) => {
  lr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => xo(e, n, r, o), e.keyType = t.keyType, e.valueType = t.valueType;
});
function wi(e, t, n) {
  return new Ws({ type: "record", keyType: e, valueType: t, ...d(n) });
}
const ie = l("ZodEnum", (e, t) => {
  fr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (r, o, i) => Eo(e, r, o), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (r, o) => {
    const i = {};
    for (const s of r) if (n.has(s)) i[s] = t.entries[s];
    else throw new Error(`Key ${s} not found in enum`);
    return new ie({ ...t, checks: [], ...d(o), entries: i });
  }, e.exclude = (r, o) => {
    const i = { ...t.entries };
    for (const s of r) if (n.has(s)) delete i[s];
    else throw new Error(`Key ${s} not found in enum`);
    return new ie({ ...t, checks: [], ...d(o), entries: i });
  };
});
function Ks(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new ie({ type: "enum", entries: n, ...d(t) });
}
const Gs = l("ZodLiteral", (e, t) => {
  pr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Po(e, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
    if (t.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return t.values[0];
  } });
});
function ki(e, t) {
  return new Gs({ type: "literal", values: Array.isArray(e) ? e : [e], ...d(t) });
}
const Ys = l("ZodTransform", (e, t) => {
  dr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => No(e, n), e._zod.parse = (n, r) => {
    if (r.direction === "backward") throw new De(e.constructor.name);
    n.addIssue = (i) => {
      if (typeof i == "string") n.issues.push(L(i, n.value, t));
      else {
        const s = i;
        s.fatal && (s.continue = false), s.code ?? (s.code = "custom"), s.input ?? (s.input = n.value), s.inst ?? (s.inst = e), n.issues.push(L(s));
      }
    };
    const o = t.transform(n.value, n);
    return o instanceof Promise ? o.then((i) => (n.value = i, n)) : (n.value = o, n);
  };
});
function qs(e) {
  return new Ys({ type: "transform", transform: e });
}
const ft = l("ZodOptional", (e, t) => {
  tt.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => ct(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Ne(e) {
  return new ft({ type: "optional", innerType: e });
}
const Xs = l("ZodExactOptional", (e, t) => {
  hr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => ct(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Hs(e) {
  return new Xs({ type: "optional", innerType: e });
}
const Qs = l("ZodNullable", (e, t) => {
  mr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Uo(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function je(e) {
  return new Qs({ type: "nullable", innerType: e });
}
const ei = l("ZodDefault", (e, t) => {
  _r.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Jo(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function ti(e, t) {
  return new ei({ type: "default", innerType: e, get defaultValue() {
    return typeof t == "function" ? t() : Ue(t);
  } });
}
const ni = l("ZodPrefault", (e, t) => {
  gr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Mo(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function ri(e, t) {
  return new ni({ type: "prefault", innerType: e, get defaultValue() {
    return typeof t == "function" ? t() : Ue(t);
  } });
}
const pt = l("ZodNonOptional", (e, t) => {
  vr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Fo(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function oi(e, t) {
  return new pt({ type: "nonoptional", innerType: e, ...d(t) });
}
const si = l("ZodCatch", (e, t) => {
  zr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Lo(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function ii(e, t) {
  return new si({ type: "catch", innerType: e, catchValue: typeof t == "function" ? t : () => t });
}
const ci = l("ZodPipe", (e, t) => {
  yr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Vo(e, n, r, o), e.in = t.in, e.out = t.out;
});
function Ae(e, t) {
  return new ci({ type: "pipe", in: e, out: t });
}
const ui = l("ZodReadonly", (e, t) => {
  br.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => Bo(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function ai(e) {
  return new ui({ type: "readonly", innerType: e });
}
const li = l("ZodCustom", (e, t) => {
  wr.init(e, t), v.init(e, t), e._zod.processJSONSchema = (n, r, o) => To(e, n);
});
function fi(e, t = {}) {
  return go(li, e, t);
}
function pi(e) {
  return vo(e);
}
export {
  Ks as _,
  gi as a,
  Us as b,
  _i as c,
  vi as d,
  yi as e,
  ki as l,
  mi as n,
  zi as o,
  wi as r,
  hi as s,
  bi as t,
  Js as u
};
