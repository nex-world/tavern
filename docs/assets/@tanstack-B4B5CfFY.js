var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _e2, _t2, _a2, _e3, _t3, _s2, _b, _e4, _t4, _s3, _c2, _e5, _d, _e6, _t5, _s4, _n2, _r2, _o2, _a3, _yc_instances, i_fn, _e7, _e8, _t6, _s5, _n3, _wc_instances, r_fn, _f2, _e9, _t7, _s6, _g, _e10, _h2, _e11, _t8, _s7, _n4, _r3, _o3, _a4, _i2, _i3, _e12, _H_instances, t_fn, s_fn, _e13, _e14, _e15, _t9, _s8, _bu_instances, n_fn, _e16, _t10, _e17, _e18, _t11, _Ke_instances, s_fn2, _e19, _t12, _s9, _e20, _e21, _e22, _e23, _t13, _s10, _e24, _t14, _e25, _t15, _s11, _n5, _Fi_instances, r_fn2, _e26, _t16, _Vu_instances, s_fn3, _e27;
import { r as L, R as eo, j as T, a as Pt, w as to, b as so } from "./react-BQpw03Eg.js";
import { t as Oe, w as dn, u as no, D as ro } from "./vendor-CjYbcnj-.js";
import { D as io, l as oo } from "./dexie-B3Kybfa7.js";
const Ns = /* @__PURE__ */ new WeakMap(), ao = /* @__PURE__ */ new WeakMap(), Jt = { current: [] };
let Rs = false, vt = 0;
const yt = /* @__PURE__ */ new Set(), Kt = /* @__PURE__ */ new Map();
function ti(t) {
  for (const e of t) {
    if (Jt.current.includes(e)) continue;
    Jt.current.push(e), e.recompute();
    const s = ao.get(e);
    if (s) for (const n of s) {
      const r = Ns.get(n);
      (r == null ? void 0 : r.length) && ti(r);
    }
  }
}
function co(t) {
  const e = { prevVal: t.prevState, currentVal: t.state };
  for (const s of t.listeners) s(e);
}
function lo(t) {
  const e = { prevVal: t.prevState, currentVal: t.state };
  for (const s of t.listeners) s(e);
}
function si(t) {
  if (vt > 0 && !Kt.has(t) && Kt.set(t, t.prevState), yt.add(t), !(vt > 0) && !Rs) try {
    for (Rs = true; yt.size > 0; ) {
      const e = Array.from(yt);
      yt.clear();
      for (const s of e) {
        const n = Kt.get(s) ?? s.prevState;
        s.prevState = n, co(s);
      }
      for (const s of e) {
        const n = Ns.get(s);
        n && (Jt.current.push(s), ti(n));
      }
      for (const s of e) {
        const n = Ns.get(s);
        if (n) for (const r of n) lo(r);
      }
    }
  } finally {
    Rs = false, Jt.current = [], Kt.clear();
  }
}
function uo(t) {
  vt++;
  try {
    t();
  } finally {
    if (vt--, vt === 0) {
      const e = yt.values().next().value;
      e && si(e);
    }
  }
}
function ho(t) {
  return typeof t == "function";
}
class fo {
  constructor(e, s) {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = (n) => {
      var r, i;
      this.listeners.add(n);
      const o = (i = (r = this.options) == null ? void 0 : r.onSubscribe) == null ? void 0 : i.call(r, n, this);
      return () => {
        this.listeners.delete(n), o == null ? void 0 : o();
      };
    }, this.prevState = e, this.state = e, this.options = s;
  }
  setState(e) {
    var s, n, r;
    this.prevState = this.state, (s = this.options) != null && s.updateFn ? this.state = this.options.updateFn(this.prevState)(e) : ho(e) ? this.state = e(this.prevState) : this.state = e, (r = (n = this.options) == null ? void 0 : n.onUpdate) == null || r.call(n), si(this);
  }
}
const ze = "__TSR_index", Gn = "popstate", Qn = "beforeunload";
function po(t) {
  let e = t.getLocation();
  const s = /* @__PURE__ */ new Set(), n = (o) => {
    e = t.getLocation(), s.forEach((a) => a({ location: e, action: o }));
  }, r = (o) => {
    t.notifyOnIndexChange ?? true ? n(o) : e = t.getLocation();
  }, i = async ({ task: o, navigateOpts: a, ...c }) => {
    var _a5, _b2;
    if ((a == null ? void 0 : a.ignoreBlocker) ?? false) {
      o();
      return;
    }
    const h = ((_a5 = t.getBlockers) == null ? void 0 : _a5.call(t)) ?? [], u = c.type === "PUSH" || c.type === "REPLACE";
    if (typeof document < "u" && h.length && u) for (const f of h) {
      const p = Ct(c.path, c.state);
      if (await f.blockerFn({ currentLocation: e, nextLocation: p, action: c.type })) {
        (_b2 = t.onBlocked) == null ? void 0 : _b2.call(t);
        return;
      }
    }
    o();
  };
  return { get location() {
    return e;
  }, get length() {
    return t.getLength();
  }, subscribers: s, subscribe: (o) => (s.add(o), () => {
    s.delete(o);
  }), push: (o, a, c) => {
    const l = e.state[ze];
    a = Jn(l + 1, a), i({ task: () => {
      t.pushState(o, a), n({ type: "PUSH" });
    }, navigateOpts: c, type: "PUSH", path: o, state: a });
  }, replace: (o, a, c) => {
    const l = e.state[ze];
    a = Jn(l, a), i({ task: () => {
      t.replaceState(o, a), n({ type: "REPLACE" });
    }, navigateOpts: c, type: "REPLACE", path: o, state: a });
  }, go: (o, a) => {
    i({ task: () => {
      t.go(o), r({ type: "GO", index: o });
    }, navigateOpts: a, type: "GO" });
  }, back: (o) => {
    i({ task: () => {
      t.back((o == null ? void 0 : o.ignoreBlocker) ?? false), r({ type: "BACK" });
    }, navigateOpts: o, type: "BACK" });
  }, forward: (o) => {
    i({ task: () => {
      t.forward((o == null ? void 0 : o.ignoreBlocker) ?? false), r({ type: "FORWARD" });
    }, navigateOpts: o, type: "FORWARD" });
  }, canGoBack: () => e.state[ze] !== 0, createHref: (o) => t.createHref(o), block: (o) => {
    var _a5;
    if (!t.setBlockers) return () => {
    };
    const a = ((_a5 = t.getBlockers) == null ? void 0 : _a5.call(t)) ?? [];
    return t.setBlockers([...a, o]), () => {
      var _a6, _b2;
      const c = ((_a6 = t.getBlockers) == null ? void 0 : _a6.call(t)) ?? [];
      (_b2 = t.setBlockers) == null ? void 0 : _b2.call(t, c.filter((l) => l !== o));
    };
  }, flush: () => {
    var _a5;
    return (_a5 = t.flush) == null ? void 0 : _a5.call(t);
  }, destroy: () => {
    var _a5;
    return (_a5 = t.destroy) == null ? void 0 : _a5.call(t);
  }, notify: n };
}
function Jn(t, e) {
  e || (e = {});
  const s = pn();
  return { ...e, key: s, __TSR_key: s, [ze]: t };
}
function ni(t) {
  var _a5, _b2;
  const e = (t == null ? void 0 : t.window) ?? (typeof document < "u" ? window : void 0), s = e.history.pushState, n = e.history.replaceState;
  let r = [];
  const i = () => r, o = (C) => r = C, a = (t == null ? void 0 : t.createHref) ?? ((C) => C), c = (t == null ? void 0 : t.parseLocation) ?? (() => Ct(`${e.location.pathname}${e.location.search}${e.location.hash}`, e.history.state));
  if (!((_a5 = e.history.state) == null ? void 0 : _a5.__TSR_key) && !((_b2 = e.history.state) == null ? void 0 : _b2.key)) {
    const C = pn();
    e.history.replaceState({ [ze]: 0, key: C, __TSR_key: C }, "");
  }
  let l = c(), h, u = false, f = false, p = false, d = false;
  const y = () => l;
  let g, w;
  const b = () => {
    g && (O._ignoreSubscribers = true, (g.isPush ? e.history.pushState : e.history.replaceState)(g.state, "", g.href), O._ignoreSubscribers = false, g = void 0, w = void 0, h = void 0);
  }, R = (C, x, I) => {
    const m = a(x);
    w || (h = l), l = Ct(x, I), g = { href: m, state: I, isPush: (g == null ? void 0 : g.isPush) || C === "push" }, w || (w = Promise.resolve().then(() => b()));
  }, v = (C) => {
    l = c(), O.notify({ type: C });
  }, E = async () => {
    if (f) {
      f = false;
      return;
    }
    const C = c(), x = C.state[ze] - l.state[ze], I = x === 1, m = x === -1, P = !I && !m || u;
    u = false;
    const S = P ? "GO" : m ? "BACK" : "FORWARD", k = P ? { type: "GO", index: x } : { type: m ? "BACK" : "FORWARD" };
    if (p) p = false;
    else {
      const _ = i();
      if (typeof document < "u" && _.length) {
        for (const A of _) if (await A.blockerFn({ currentLocation: l, nextLocation: C, action: S })) {
          f = true, e.history.go(1), O.notify(k);
          return;
        }
      }
    }
    l = c(), O.notify(k);
  }, M = (C) => {
    if (d) {
      d = false;
      return;
    }
    let x = false;
    const I = i();
    if (typeof document < "u" && I.length) for (const m of I) {
      const P = m.enableBeforeUnload ?? true;
      if (P === true) {
        x = true;
        break;
      }
      if (typeof P == "function" && P() === true) {
        x = true;
        break;
      }
    }
    if (x) return C.preventDefault(), C.returnValue = "";
  }, O = po({ getLocation: y, getLength: () => e.history.length, pushState: (C, x) => R("push", C, x), replaceState: (C, x) => R("replace", C, x), back: (C) => (C && (p = true), d = true, e.history.back()), forward: (C) => {
    C && (p = true), d = true, e.history.forward();
  }, go: (C) => {
    u = true, e.history.go(C);
  }, createHref: (C) => a(C), flush: b, destroy: () => {
    e.history.pushState = s, e.history.replaceState = n, e.removeEventListener(Qn, M, { capture: true }), e.removeEventListener(Gn, E);
  }, onBlocked: () => {
    h && l !== h && (l = h);
  }, getBlockers: i, setBlockers: o, notifyOnIndexChange: false });
  return e.addEventListener(Qn, M, { capture: true }), e.addEventListener(Gn, E), e.history.pushState = function(...C) {
    const x = s.apply(e.history, C);
    return O._ignoreSubscribers || v("PUSH"), x;
  }, e.history.replaceState = function(...C) {
    const x = n.apply(e.history, C);
    return O._ignoreSubscribers || v("REPLACE"), x;
  }, O;
}
function ed(t) {
  const e = typeof document < "u" ? window : void 0;
  return ni({ window: e, parseLocation: () => {
    const s = e.location.hash.split("#").slice(1), n = s[0] ?? "/", r = e.location.search, i = s.slice(1), o = i.length === 0 ? "" : `#${i.join("#")}`, a = `${n}${r}${o}`;
    return Ct(a, e.history.state);
  }, createHref: (s) => `${e.location.pathname}${e.location.search}#${s}` });
}
function yo(t) {
  let e = t.replace(/[\x00-\x1f\x7f]/g, "");
  return e.startsWith("//") && (e = "/" + e.replace(/^\/+/, "")), e;
}
function Ct(t, e) {
  const s = yo(t), n = s.indexOf("#"), r = s.indexOf("?"), i = pn();
  return { href: s, pathname: s.substring(0, n > 0 ? r > 0 ? Math.min(n, r) : n : r > 0 ? r : s.length), hash: n > -1 ? s.substring(n) : "", search: r > -1 ? s.slice(r, n === -1 ? void 0 : n) : "", state: e || { [ze]: 0, key: i, __TSR_key: i } };
}
function pn() {
  return (Math.random() + 1).toString(36).substring(7);
}
const go = false;
function St(t) {
  let e;
  return uo(() => {
    e = t();
  }), e;
}
function _t(t) {
  return t[t.length - 1];
}
function mo(t) {
  return typeof t == "function";
}
function De(t, e) {
  return mo(t) ? t(e) : t;
}
const wo = Object.prototype.hasOwnProperty, Yn = Object.prototype.propertyIsEnumerable;
function ue(t, e, s = 0) {
  if (t === e) return t;
  if (s > 500) return e;
  const n = e, r = er(t) && er(n);
  if (!r && !(Yt(t) && Yt(n))) return n;
  const i = r ? t : Xn(t);
  if (!i) return n;
  const o = r ? n : Xn(n);
  if (!o) return n;
  const a = i.length, c = o.length, l = r ? new Array(c) : {};
  let h = 0;
  for (let u = 0; u < c; u++) {
    const f = r ? u : o[u], p = t[f], d = n[f];
    if (p === d) {
      l[f] = p, (r ? u < a : wo.call(t, f)) && h++;
      continue;
    }
    if (p === null || d === null || typeof p != "object" || typeof d != "object") {
      l[f] = d;
      continue;
    }
    const y = ue(p, d, s + 1);
    l[f] = y, y === p && h++;
  }
  return a === c && h === a ? t : l;
}
function Xn(t) {
  const e = Object.getOwnPropertyNames(t);
  for (const r of e) if (!Yn.call(t, r)) return false;
  const s = Object.getOwnPropertySymbols(t);
  if (s.length === 0) return e;
  const n = e;
  for (const r of s) {
    if (!Yn.call(t, r)) return false;
    n.push(r);
  }
  return n;
}
function Yt(t) {
  if (!Zn(t)) return false;
  const e = t.constructor;
  if (typeof e > "u") return true;
  const s = e.prototype;
  return !(!Zn(s) || !s.hasOwnProperty("isPrototypeOf"));
}
function Zn(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function er(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function We(t, e, s) {
  if (t === e) return true;
  if (typeof t != typeof e) return false;
  if (Array.isArray(t) && Array.isArray(e)) {
    if (t.length !== e.length) return false;
    for (let n = 0, r = t.length; n < r; n++) if (!We(t[n], e[n], s)) return false;
    return true;
  }
  if (Yt(t) && Yt(e)) {
    const n = (s == null ? void 0 : s.ignoreUndefined) ?? true;
    if (s == null ? void 0 : s.partial) {
      for (const o in e) if ((!n || e[o] !== void 0) && !We(t[o], e[o], s)) return false;
      return true;
    }
    let r = 0;
    if (!n) r = Object.keys(t).length;
    else for (const o in t) t[o] !== void 0 && r++;
    let i = 0;
    for (const o in e) if ((!n || e[o] !== void 0) && (i++, i > r || !We(t[o], e[o], s))) return false;
    return r === i;
  }
  return false;
}
function rt(t) {
  let e, s;
  const n = new Promise((r, i) => {
    e = r, s = i;
  });
  return n.status = "pending", n.resolve = (r) => {
    n.status = "resolved", n.value = r, e(r), t == null ? void 0 : t(r);
  }, n.reject = (r) => {
    n.status = "rejected", s(r);
  }, n;
}
function vo(t) {
  return typeof (t == null ? void 0 : t.message) != "string" ? false : t.message.startsWith("Failed to fetch dynamically imported module") || t.message.startsWith("error loading dynamically imported module") || t.message.startsWith("Importing a module script failed");
}
function tt(t) {
  return !!(t && typeof t == "object" && typeof t.then == "function");
}
function So(t) {
  return t.replace(/[\x00-\x1f\x7f]/g, "");
}
function tr(t) {
  let e;
  try {
    e = decodeURI(t);
  } catch {
    e = t.replaceAll(/%[0-9A-F]{2}/gi, (s) => {
      try {
        return decodeURI(s);
      } catch {
        return s;
      }
    });
  }
  return So(e);
}
const ri = ["http:", "https:", "mailto:", "tel:"];
function Xt(t) {
  if (!t) return false;
  try {
    const e = new URL(t);
    return !ri.includes(e.protocol);
  } catch {
    return false;
  }
}
const bo = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" }, xo = /[&><\u2028\u2029]/g;
function Ro(t) {
  return t.replace(xo, (e) => bo[e]);
}
function lt(t) {
  if (!t) return { path: t, handledProtocolRelativeURL: false };
  if (!/[%\\\x00-\x1f\x7f]/.test(t) && !t.startsWith("//")) return { path: t, handledProtocolRelativeURL: false };
  const e = /%25|%5C/gi;
  let s = 0, n = "", r;
  for (; (r = e.exec(t)) !== null; ) n += tr(t.slice(s, r.index)) + r[0], s = e.lastIndex;
  n = n + tr(s ? t.slice(s) : t);
  let i = false;
  return n.startsWith("//") && (i = true, n = "/" + n.replace(/^\/+/, "")), { path: n, handledProtocolRelativeURL: i };
}
function Po(t) {
  return /\s|[^\u0000-\u007F]/.test(t) ? t.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : t;
}
function Zt(t) {
  const e = /* @__PURE__ */ new Map();
  let s, n;
  const r = (i) => {
    i.next && (i.prev ? (i.prev.next = i.next, i.next.prev = i.prev, i.next = void 0, n && (n.next = i, i.prev = n)) : (i.next.prev = void 0, s = i.next, i.next = void 0, n && (i.prev = n, n.next = i)), n = i);
  };
  return { get(i) {
    const o = e.get(i);
    if (o) return r(o), o.value;
  }, set(i, o) {
    if (e.size >= t && s) {
      const c = s;
      e.delete(c.key), c.next && (s = c.next, c.next.prev = void 0), c === n && (n = void 0);
    }
    const a = e.get(i);
    if (a) a.value = o, r(a);
    else {
      const c = { key: i, value: o, prev: n };
      n && (n.next = c), n = c, s || (s = c), e.set(i, c);
    }
  }, clear() {
    e.clear(), s = void 0, n = void 0;
  } };
}
const it = 0, Ge = 1, Qe = 2, kt = 3, Ve = 4, ii = 5;
function Co(t) {
  const e = t.indexOf("{");
  if (e === -1) return null;
  const s = t.indexOf("}", e);
  return s === -1 || e + 1 >= t.length ? null : [e, s];
}
function yn(t, e, s = new Uint16Array(6)) {
  const n = t.indexOf("/", e), r = n === -1 ? t.length : n, i = t.substring(e, r);
  if (!i || !i.includes("$")) return s[0] = it, s[1] = e, s[2] = e, s[3] = r, s[4] = r, s[5] = r, s;
  if (i === "$") {
    const a = t.length;
    return s[0] = Qe, s[1] = e, s[2] = e, s[3] = a, s[4] = a, s[5] = a, s;
  }
  if (i.charCodeAt(0) === 36) return s[0] = Ge, s[1] = e, s[2] = e + 1, s[3] = r, s[4] = r, s[5] = r, s;
  const o = Co(i);
  if (o) {
    const [a, c] = o, l = i.charCodeAt(a + 1);
    if (l === 45) {
      if (a + 2 < i.length && i.charCodeAt(a + 2) === 36) {
        const h = a + 3, u = c;
        if (h < u) return s[0] = kt, s[1] = e + a, s[2] = e + h, s[3] = e + u, s[4] = e + c + 1, s[5] = r, s;
      }
    } else if (l === 36) {
      const h = a + 1, u = a + 2;
      return u === c ? (s[0] = Qe, s[1] = e + a, s[2] = e + h, s[3] = e + u, s[4] = e + c + 1, s[5] = t.length, s) : (s[0] = Ge, s[1] = e + a, s[2] = e + u, s[3] = e + c, s[4] = e + c + 1, s[5] = r, s);
    }
  }
  return s[0] = it, s[1] = e, s[2] = e, s[3] = r, s[4] = r, s[5] = r, s;
}
function hs(t, e, s, n, r, i, o) {
  var _a5, _b2, _c3, _d2, _e28, _f3, _g2, _h3, _i4, _j, _k, _l2, _m;
  o == null ? void 0 : o(s);
  let a = n;
  {
    const c = s.fullPath ?? s.from, l = c.length, h = ((_a5 = s.options) == null ? void 0 : _a5.caseSensitive) ?? t, u = !!(((_c3 = (_b2 = s.options) == null ? void 0 : _b2.params) == null ? void 0 : _c3.parse) && ((_e28 = (_d2 = s.options) == null ? void 0 : _d2.skipRouteOnParseError) == null ? void 0 : _e28.params));
    for (; a < l; ) {
      const p = yn(c, a, e);
      let d;
      const y = a, g = p[5];
      switch (a = g + 1, i++, p[0]) {
        case it: {
          const b = c.substring(p[2], p[3]);
          if (h) {
            const R = (_f3 = r.static) == null ? void 0 : _f3.get(b);
            if (R) d = R;
            else {
              r.static ?? (r.static = /* @__PURE__ */ new Map());
              const v = qe(s.fullPath ?? s.from);
              v.parent = r, v.depth = i, d = v, r.static.set(b, v);
            }
          } else {
            const R = b.toLowerCase(), v = (_g2 = r.staticInsensitive) == null ? void 0 : _g2.get(R);
            if (v) d = v;
            else {
              r.staticInsensitive ?? (r.staticInsensitive = /* @__PURE__ */ new Map());
              const E = qe(s.fullPath ?? s.from);
              E.parent = r, E.depth = i, d = E, r.staticInsensitive.set(R, E);
            }
          }
          break;
        }
        case Ge: {
          const b = c.substring(y, p[1]), R = c.substring(p[4], g), v = h && !!(b || R), E = b ? v ? b : b.toLowerCase() : void 0, M = R ? v ? R : R.toLowerCase() : void 0, O = !u && ((_h3 = r.dynamic) == null ? void 0 : _h3.find((C) => !C.skipOnParamError && C.caseSensitive === v && C.prefix === E && C.suffix === M));
          if (O) d = O;
          else {
            const C = Cs(Ge, s.fullPath ?? s.from, v, E, M);
            d = C, C.depth = i, C.parent = r, r.dynamic ?? (r.dynamic = []), r.dynamic.push(C);
          }
          break;
        }
        case kt: {
          const b = c.substring(y, p[1]), R = c.substring(p[4], g), v = h && !!(b || R), E = b ? v ? b : b.toLowerCase() : void 0, M = R ? v ? R : R.toLowerCase() : void 0, O = !u && ((_i4 = r.optional) == null ? void 0 : _i4.find((C) => !C.skipOnParamError && C.caseSensitive === v && C.prefix === E && C.suffix === M));
          if (O) d = O;
          else {
            const C = Cs(kt, s.fullPath ?? s.from, v, E, M);
            d = C, C.parent = r, C.depth = i, r.optional ?? (r.optional = []), r.optional.push(C);
          }
          break;
        }
        case Qe: {
          const b = c.substring(y, p[1]), R = c.substring(p[4], g), v = h && !!(b || R), E = b ? v ? b : b.toLowerCase() : void 0, M = R ? v ? R : R.toLowerCase() : void 0, O = Cs(Qe, s.fullPath ?? s.from, v, E, M);
          d = O, O.parent = r, O.depth = i, r.wildcard ?? (r.wildcard = []), r.wildcard.push(O);
        }
      }
      r = d;
    }
    if (u && s.children && !s.isRoot && s.id && s.id.charCodeAt(s.id.lastIndexOf("/") + 1) === 95) {
      const p = qe(s.fullPath ?? s.from);
      p.kind = ii, p.parent = r, i++, p.depth = i, r.pathless ?? (r.pathless = []), r.pathless.push(p), r = p;
    }
    const f = (s.path || !s.children) && !s.isRoot;
    if (f && c.endsWith("/")) {
      const p = qe(s.fullPath ?? s.from);
      p.kind = Ve, p.parent = r, i++, p.depth = i, r.index = p, r = p;
    }
    r.parse = ((_k = (_j = s.options) == null ? void 0 : _j.params) == null ? void 0 : _k.parse) ?? null, r.skipOnParamError = u, r.parsingPriority = ((_m = (_l2 = s.options) == null ? void 0 : _l2.skipRouteOnParseError) == null ? void 0 : _m.priority) ?? 0, f && !r.route && (r.route = s, r.fullPath = s.fullPath ?? s.from);
  }
  if (s.children) for (const c of s.children) hs(t, e, c, a, r, i, o);
}
function Ps(t, e) {
  if (t.skipOnParamError && !e.skipOnParamError) return -1;
  if (!t.skipOnParamError && e.skipOnParamError) return 1;
  if (t.skipOnParamError && e.skipOnParamError && (t.parsingPriority || e.parsingPriority)) return e.parsingPriority - t.parsingPriority;
  if (t.prefix && e.prefix && t.prefix !== e.prefix) {
    if (t.prefix.startsWith(e.prefix)) return -1;
    if (e.prefix.startsWith(t.prefix)) return 1;
  }
  if (t.suffix && e.suffix && t.suffix !== e.suffix) {
    if (t.suffix.endsWith(e.suffix)) return -1;
    if (e.suffix.endsWith(t.suffix)) return 1;
  }
  return t.prefix && !e.prefix ? -1 : !t.prefix && e.prefix ? 1 : t.suffix && !e.suffix ? -1 : !t.suffix && e.suffix ? 1 : t.caseSensitive && !e.caseSensitive ? -1 : !t.caseSensitive && e.caseSensitive ? 1 : 0;
}
function Fe(t) {
  var _a5, _b2, _c3;
  if (t.pathless) for (const e of t.pathless) Fe(e);
  if (t.static) for (const e of t.static.values()) Fe(e);
  if (t.staticInsensitive) for (const e of t.staticInsensitive.values()) Fe(e);
  if ((_a5 = t.dynamic) == null ? void 0 : _a5.length) {
    t.dynamic.sort(Ps);
    for (const e of t.dynamic) Fe(e);
  }
  if ((_b2 = t.optional) == null ? void 0 : _b2.length) {
    t.optional.sort(Ps);
    for (const e of t.optional) Fe(e);
  }
  if ((_c3 = t.wildcard) == null ? void 0 : _c3.length) {
    t.wildcard.sort(Ps);
    for (const e of t.wildcard) Fe(e);
  }
}
function qe(t) {
  return { kind: it, depth: 0, pathless: null, index: null, static: null, staticInsensitive: null, dynamic: null, optional: null, wildcard: null, route: null, fullPath: t, parent: null, parse: null, skipOnParamError: false, parsingPriority: 0 };
}
function Cs(t, e, s, n, r) {
  return { kind: t, depth: 0, pathless: null, index: null, static: null, staticInsensitive: null, dynamic: null, optional: null, wildcard: null, route: null, fullPath: e, parent: null, parse: null, skipOnParamError: false, parsingPriority: 0, caseSensitive: s, prefix: n, suffix: r };
}
function _o(t, e) {
  const s = qe("/"), n = new Uint16Array(6);
  for (const r of t) hs(false, n, r, 1, s, 0);
  Fe(s), e.masksTree = s, e.flatCache = Zt(1e3);
}
function ko(t, e) {
  t || (t = "/");
  const s = e.flatCache.get(t);
  if (s) return s;
  const n = gn(t, e.masksTree);
  return e.flatCache.set(t, n), n;
}
function Io(t, e, s, n, r) {
  t || (t = "/"), n || (n = "/");
  const i = e ? `case\0${t}` : t;
  let o = r.singleCache.get(i);
  if (!o) {
    o = qe("/");
    const a = new Uint16Array(6);
    hs(e, a, { from: t }, 1, o, 0), r.singleCache.set(i, o);
  }
  return gn(n, o, s);
}
function Eo(t, e, s = false) {
  const n = s ? t : `nofuzz\0${t}`, r = e.matchCache.get(n);
  if (r !== void 0) return r;
  t || (t = "/");
  let i;
  try {
    i = gn(t, e.segmentTree, s);
  } catch (o) {
    if (o instanceof URIError) i = null;
    else throw o;
  }
  return i && (i.branch = To(i.route)), e.matchCache.set(n, i), i;
}
function Oo(t) {
  return t === "/" ? t : t.replace(/\/{1,}$/, "");
}
function Mo(t, e = false, s) {
  const n = qe(t.fullPath), r = new Uint16Array(6), i = {}, o = {};
  let a = 0;
  return hs(e, r, t, 1, n, 0, (l) => {
    if (s == null ? void 0 : s(l, a), Oe(!(l.id in i), `Duplicate routes found with id: ${String(l.id)}`), i[l.id] = l, a !== 0 && l.path) {
      const h = Oo(l.fullPath);
      (!o[h] || l.fullPath.endsWith("/")) && (o[h] = l);
    }
    a++;
  }), Fe(n), { processedTree: { segmentTree: n, singleCache: Zt(1e3), matchCache: Zt(1e3), flatCache: null, masksTree: null }, routesById: i, routesByPath: o };
}
function gn(t, e, s = false) {
  const n = t.split("/"), r = Ao(t, n, e, s);
  if (!r) return null;
  const [i] = oi(t, n, r);
  return { route: r.node.route, rawParams: i, parsedParams: r.parsedParams };
}
function oi(t, e, s) {
  var _a5, _b2, _c3, _d2, _e28, _f3, _g2, _h3, _i4, _j;
  const n = Lo(s.node);
  let r = null;
  const i = {};
  let o = ((_a5 = s.extract) == null ? void 0 : _a5.part) ?? 0, a = ((_b2 = s.extract) == null ? void 0 : _b2.node) ?? 0, c = ((_c3 = s.extract) == null ? void 0 : _c3.path) ?? 0, l = ((_d2 = s.extract) == null ? void 0 : _d2.segment) ?? 0;
  for (; a < n.length; o++, a++, c++, l++) {
    const h = n[a];
    if (h.kind === Ve) break;
    if (h.kind === ii) {
      l--, o--, c--;
      continue;
    }
    const u = e[o], f = c;
    if (u && (c += u.length), h.kind === Ge) {
      r ?? (r = s.node.fullPath.split("/"));
      const p = r[l], d = ((_e28 = h.prefix) == null ? void 0 : _e28.length) ?? 0;
      if (p.charCodeAt(d) === 123) {
        const g = ((_f3 = h.suffix) == null ? void 0 : _f3.length) ?? 0, w = p.substring(d + 2, p.length - g - 1), b = u.substring(d, u.length - g);
        i[w] = decodeURIComponent(b);
      } else {
        const g = p.substring(1);
        i[g] = decodeURIComponent(u);
      }
    } else if (h.kind === kt) {
      if (s.skipped & 1 << a) {
        o--, c = f - 1;
        continue;
      }
      r ?? (r = s.node.fullPath.split("/"));
      const p = r[l], d = ((_g2 = h.prefix) == null ? void 0 : _g2.length) ?? 0, y = ((_h3 = h.suffix) == null ? void 0 : _h3.length) ?? 0, g = p.substring(d + 3, p.length - y - 1), w = h.suffix || h.prefix ? u.substring(d, u.length - y) : u;
      w && (i[g] = decodeURIComponent(w));
    } else if (h.kind === Qe) {
      const p = h, d = t.substring(f + (((_i4 = p.prefix) == null ? void 0 : _i4.length) ?? 0), t.length - (((_j = p.suffix) == null ? void 0 : _j.length) ?? 0)), y = decodeURIComponent(d);
      i["*"] = y, i._splat = y;
      break;
    }
  }
  return s.rawParams && Object.assign(i, s.rawParams), [i, { part: o, node: a, path: c, segment: l }];
}
function To(t) {
  const e = [t];
  for (; t.parentRoute; ) t = t.parentRoute, e.push(t);
  return e.reverse(), e;
}
function Lo(t) {
  const e = Array(t.depth + 1);
  do
    e[t.depth] = t, t = t.parent;
  while (t);
  return e;
}
function Ao(t, e, s, n) {
  if (t === "/" && s.index) return { node: s.index, skipped: 0 };
  const r = !_t(e), i = r && t !== "/", o = e.length - (r ? 1 : 0), a = [{ node: s, index: 1, skipped: 0, depth: 1, statics: 1, dynamics: 0, optionals: 0 }];
  let c = null, l = null, h = null;
  for (; a.length; ) {
    const u = a.pop(), { node: f, index: p, skipped: d, depth: y, statics: g, dynamics: w, optionals: b } = u;
    let { extract: R, rawParams: v, parsedParams: E } = u;
    if (f.skipOnParamError) {
      if (!_s(t, e, u)) continue;
      v = u.rawParams, R = u.extract, E = u.parsedParams;
    }
    n && f.route && f.kind !== Ve && ut(l, u) && (l = u);
    const M = p === o;
    if (M && (f.route && !i && ut(h, u) && (h = u), !f.optional && !f.wildcard && !f.index && !f.pathless)) continue;
    const O = M ? void 0 : e[p];
    let C;
    if (M && f.index) {
      const x = { node: f.index, index: p, skipped: d, depth: y + 1, statics: g, dynamics: w, optionals: b, extract: R, rawParams: v, parsedParams: E };
      let I = true;
      if (f.index.skipOnParamError && (_s(t, e, x) || (I = false)), I) {
        if (g === o && !w && !b && !d) return x;
        ut(h, x) && (h = x);
      }
    }
    if (f.wildcard && ut(c, u)) for (const x of f.wildcard) {
      const { prefix: I, suffix: m } = x;
      if (I && (M || !(x.caseSensitive ? O : C ?? (C = O.toLowerCase())).startsWith(I))) continue;
      if (m) {
        if (M) continue;
        const S = e.slice(p).join("/").slice(-m.length);
        if ((x.caseSensitive ? S : S.toLowerCase()) !== m) continue;
      }
      const P = { node: x, index: o, skipped: d, depth: y, statics: g, dynamics: w, optionals: b, extract: R, rawParams: v, parsedParams: E };
      if (!(x.skipOnParamError && !_s(t, e, P))) {
        c = P;
        break;
      }
    }
    if (f.optional) {
      const x = d | 1 << y, I = y + 1;
      for (let m = f.optional.length - 1; m >= 0; m--) {
        const P = f.optional[m];
        a.push({ node: P, index: p, skipped: x, depth: I, statics: g, dynamics: w, optionals: b, extract: R, rawParams: v, parsedParams: E });
      }
      if (!M) for (let m = f.optional.length - 1; m >= 0; m--) {
        const P = f.optional[m], { prefix: S, suffix: k } = P;
        if (S || k) {
          const _ = P.caseSensitive ? O : C ?? (C = O.toLowerCase());
          if (S && !_.startsWith(S) || k && !_.endsWith(k)) continue;
        }
        a.push({ node: P, index: p + 1, skipped: d, depth: I, statics: g, dynamics: w, optionals: b + 1, extract: R, rawParams: v, parsedParams: E });
      }
    }
    if (!M && f.dynamic && O) for (let x = f.dynamic.length - 1; x >= 0; x--) {
      const I = f.dynamic[x], { prefix: m, suffix: P } = I;
      if (m || P) {
        const S = I.caseSensitive ? O : C ?? (C = O.toLowerCase());
        if (m && !S.startsWith(m) || P && !S.endsWith(P)) continue;
      }
      a.push({ node: I, index: p + 1, skipped: d, depth: y + 1, statics: g, dynamics: w + 1, optionals: b, extract: R, rawParams: v, parsedParams: E });
    }
    if (!M && f.staticInsensitive) {
      const x = f.staticInsensitive.get(C ?? (C = O.toLowerCase()));
      x && a.push({ node: x, index: p + 1, skipped: d, depth: y + 1, statics: g + 1, dynamics: w, optionals: b, extract: R, rawParams: v, parsedParams: E });
    }
    if (!M && f.static) {
      const x = f.static.get(O);
      x && a.push({ node: x, index: p + 1, skipped: d, depth: y + 1, statics: g + 1, dynamics: w, optionals: b, extract: R, rawParams: v, parsedParams: E });
    }
    if (f.pathless) {
      const x = y + 1;
      for (let I = f.pathless.length - 1; I >= 0; I--) {
        const m = f.pathless[I];
        a.push({ node: m, index: p, skipped: d, depth: x, statics: g, dynamics: w, optionals: b, extract: R, rawParams: v, parsedParams: E });
      }
    }
  }
  if (h && c) return ut(c, h) ? h : c;
  if (h) return h;
  if (c) return c;
  if (n && l) {
    let u = l.index;
    for (let p = 0; p < l.index; p++) u += e[p].length;
    const f = u === t.length ? "/" : t.slice(u);
    return l.rawParams ?? (l.rawParams = {}), l.rawParams["**"] = decodeURIComponent(f), l;
  }
  return null;
}
function _s(t, e, s) {
  try {
    const [n, r] = oi(t, e, s);
    s.rawParams = n, s.extract = r;
    const i = s.node.parse(n);
    return s.parsedParams = Object.assign({}, s.parsedParams, i), true;
  } catch {
    return null;
  }
}
function ut(t, e) {
  return t ? e.statics > t.statics || e.statics === t.statics && (e.dynamics > t.dynamics || e.dynamics === t.dynamics && (e.optionals > t.optionals || e.optionals === t.optionals && ((e.node.kind === Ve) > (t.node.kind === Ve) || e.node.kind === Ve == (t.node.kind === Ve) && e.depth > t.depth))) : true;
}
function Vt(t) {
  return mn(t.filter((e) => e !== void 0).join("/"));
}
function mn(t) {
  return t.replace(/\/{2,}/g, "/");
}
function ai(t) {
  return t === "/" ? t : t.replace(/^\/{1,}/, "");
}
function Ee(t) {
  const e = t.length;
  return e > 1 && t[e - 1] === "/" ? t.replace(/\/{1,}$/, "") : t;
}
function ci(t) {
  return Ee(ai(t));
}
function es(t, e) {
  return (t == null ? void 0 : t.endsWith("/")) && t !== "/" && t !== `${e}/` ? t.slice(0, -1) : t;
}
function Fo(t, e, s) {
  return es(t, s) === es(e, s);
}
function Do({ base: t, to: e, trailingSlash: s = "never", cache: n }) {
  const r = e.startsWith("/"), i = !r && e === ".";
  let o;
  if (n) {
    o = r ? e : i ? t : t + "\0" + e;
    const u = n.get(o);
    if (u) return u;
  }
  let a;
  if (i) a = t.split("/");
  else if (r) a = e.split("/");
  else {
    for (a = t.split("/"); a.length > 1 && _t(a) === ""; ) a.pop();
    const u = e.split("/");
    for (let f = 0, p = u.length; f < p; f++) {
      const d = u[f];
      d === "" ? f ? f === p - 1 && a.push(d) : a = [d] : d === ".." ? a.pop() : d === "." || a.push(d);
    }
  }
  a.length > 1 && (_t(a) === "" ? s === "never" && a.pop() : s === "always" && a.push(""));
  let c, l = "";
  for (let u = 0; u < a.length; u++) {
    u > 0 && (l += "/");
    const f = a[u];
    if (!f) continue;
    c = yn(f, 0, c);
    const p = c[0];
    if (p === it) {
      l += f;
      continue;
    }
    const d = c[5], y = f.substring(0, c[1]), g = f.substring(c[4], d), w = f.substring(c[2], c[3]);
    p === Ge ? l += y || g ? `${y}{$${w}}${g}` : `$${w}` : p === Qe ? l += y || g ? `${y}{$}${g}` : "$" : l += `${y}{-$${w}}${g}`;
  }
  l = mn(l);
  const h = l || "/";
  return o && n && n.set(o, h), h;
}
function Bo(t) {
  const e = new Map(t.map((r) => [encodeURIComponent(r), r])), s = Array.from(e.keys()).map((r) => r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), n = new RegExp(s, "g");
  return (r) => r.replace(n, (i) => e.get(i) ?? i);
}
function ks(t, e, s) {
  const n = e[t];
  return typeof n != "string" ? n : t === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(n) ? n : n.split("/").map((r) => sr(r, s)).join("/") : sr(n, s);
}
function Is({ path: t, params: e, decoder: s, ...n }) {
  let r = false;
  const i = {};
  if (!t || t === "/") return { interpolatedPath: "/", usedParams: i, isMissingParams: r };
  if (!t.includes("$")) return { interpolatedPath: t, usedParams: i, isMissingParams: r };
  const o = t.length;
  let a = 0, c, l = "";
  for (; a < o; ) {
    const u = a;
    c = yn(t, u, c);
    const f = c[5];
    if (a = f + 1, u === f) continue;
    const p = c[0];
    if (p === it) {
      l += "/" + t.substring(u, f);
      continue;
    }
    if (p === Qe) {
      const d = e._splat;
      i._splat = d, i["*"] = d;
      const y = t.substring(u, c[1]), g = t.substring(c[4], f);
      if (!d) {
        r = true, (y || g) && (l += "/" + y + g);
        continue;
      }
      const w = ks("_splat", e, s);
      l += "/" + y + w + g;
      continue;
    }
    if (p === Ge) {
      const d = t.substring(c[2], c[3]);
      !r && !(d in e) && (r = true), i[d] = e[d];
      const y = t.substring(u, c[1]), g = t.substring(c[4], f), w = ks(d, e, s) ?? "undefined";
      l += "/" + y + w + g;
      continue;
    }
    if (p === kt) {
      const d = t.substring(c[2], c[3]), y = e[d];
      if (y == null) continue;
      i[d] = y;
      const g = t.substring(u, c[1]), w = t.substring(c[4], f), b = ks(d, e, s) ?? "";
      l += "/" + g + b + w;
      continue;
    }
  }
  return t.endsWith("/") && (l += "/"), { usedParams: i, interpolatedPath: l || "/", isMissingParams: r };
}
function sr(t, e) {
  const s = encodeURIComponent(t);
  return (e == null ? void 0 : e(s)) ?? s;
}
function de(t) {
  return !!(t == null ? void 0 : t.isNotFound);
}
function Ko() {
  try {
    if (typeof window < "u" && typeof window.sessionStorage == "object") return window.sessionStorage;
  } catch {
  }
}
const Us = "tsr-scroll-restoration-v1_3", jo = (t, e) => {
  let s;
  return (...n) => {
    s || (s = setTimeout(() => {
      t(...n), s = null;
    }, e));
  };
};
function zo() {
  const t = Ko();
  if (!t) return null;
  const e = t.getItem(Us);
  let s = e ? JSON.parse(e) : {};
  return { state: s, set: (n) => {
    s = De(n, s) || s;
    try {
      t.setItem(Us, JSON.stringify(s));
    } catch {
      console.warn("[ts-router] Could not persist scroll restoration state to sessionStorage.");
    }
  } };
}
const jt = zo(), $o = (t) => t.state.__TSR_key || t.href;
function No(t) {
  const e = [];
  let s;
  for (; s = t.parentNode; ) e.push(`${t.tagName}:nth-child(${Array.prototype.indexOf.call(s.children, t) + 1})`), t = s;
  return `${e.reverse().join(" > ")}`.toLowerCase();
}
let ts = false;
function Uo({ storageKey: t, key: e, behavior: s, shouldScrollRestoration: n, scrollToTopSelectors: r, location: i }) {
  var _a5, _b2;
  let o;
  try {
    o = JSON.parse(sessionStorage.getItem(t) || "{}");
  } catch (l) {
    console.error(l);
    return;
  }
  const a = e || ((_a5 = window.history.state) == null ? void 0 : _a5.__TSR_key), c = o[a];
  ts = true;
  e: {
    if (n && c && Object.keys(c).length > 0) {
      for (const u in c) {
        const f = c[u];
        if (u === "window") window.scrollTo({ top: f.scrollY, left: f.scrollX, behavior: s });
        else if (u) {
          const p = document.querySelector(u);
          p && (p.scrollLeft = f.scrollX, p.scrollTop = f.scrollY);
        }
      }
      break e;
    }
    const l = (i ?? window.location).hash.split("#", 2)[1];
    if (l) {
      const u = ((_b2 = window.history.state) == null ? void 0 : _b2.__hashScrollIntoViewOptions) ?? true;
      if (u) {
        const f = document.getElementById(l);
        f && f.scrollIntoView(u);
      }
      break e;
    }
    const h = { top: 0, left: 0, behavior: s };
    if (window.scrollTo(h), r) for (const u of r) {
      if (u === "window") continue;
      const f = typeof u == "function" ? u() : document.querySelector(u);
      f && f.scrollTo(h);
    }
  }
  ts = false;
}
function Vo(t, e) {
  if (!jt || ((t.options.scrollRestoration ?? false) && (t.isScrollRestoring = true), t.isScrollRestorationSetup || !jt)) return;
  t.isScrollRestorationSetup = true, ts = false;
  const n = t.options.getScrollRestorationKey || $o;
  window.history.scrollRestoration = "manual";
  const r = (i) => {
    if (ts || !t.isScrollRestoring) return;
    let o = "";
    if (i.target === document || i.target === window) o = "window";
    else {
      const c = i.target.getAttribute("data-scroll-restoration-id");
      c ? o = `[data-scroll-restoration-id="${c}"]` : o = No(i.target);
    }
    const a = n(t.state.location);
    jt.set((c) => {
      const l = c[a] || (c[a] = {}), h = l[o] || (l[o] = {});
      if (o === "window") h.scrollX = window.scrollX || 0, h.scrollY = window.scrollY || 0;
      else if (o) {
        const u = document.querySelector(o);
        u && (h.scrollX = u.scrollLeft || 0, h.scrollY = u.scrollTop || 0);
      }
      return c;
    });
  };
  typeof document < "u" && document.addEventListener("scroll", jo(r, 100), true), t.subscribe("onRendered", (i) => {
    const o = n(i.toLocation);
    if (!t.resetNextScroll) {
      t.resetNextScroll = true;
      return;
    }
    typeof t.options.scrollRestoration == "function" && !t.options.scrollRestoration({ location: t.latestLocation }) || (Uo({ storageKey: Us, key: o, behavior: t.options.scrollRestorationBehavior, shouldScrollRestoration: t.isScrollRestoring, scrollToTopSelectors: t.options.scrollToTopSelectors, location: t.history.location }), t.isScrollRestoring && jt.set((a) => (a[o] || (a[o] = {}), a)));
  });
}
function qo(t) {
  if (typeof document < "u" && document.querySelector) {
    const e = t.state.location.state.__hashScrollIntoViewOptions ?? true;
    if (e && t.state.location.hash !== "") {
      const s = document.getElementById(t.state.location.hash);
      s && s.scrollIntoView(e);
    }
  }
}
function Wo(t, e = String) {
  const s = new URLSearchParams();
  for (const n in t) {
    const r = t[n];
    r !== void 0 && s.set(n, e(r));
  }
  return s.toString();
}
function Es(t) {
  return t ? t === "false" ? false : t === "true" ? true : +t * 0 === 0 && +t + "" === t ? +t : t : "";
}
function Ho(t) {
  const e = new URLSearchParams(t), s = {};
  for (const [n, r] of e.entries()) {
    const i = s[n];
    i == null ? s[n] = Es(r) : Array.isArray(i) ? i.push(Es(r)) : s[n] = [i, Es(r)];
  }
  return s;
}
const Go = Jo(JSON.parse), Qo = Yo(JSON.stringify, JSON.parse);
function Jo(t) {
  return (e) => {
    e[0] === "?" && (e = e.substring(1));
    const s = Ho(e);
    for (const n in s) {
      const r = s[n];
      if (typeof r == "string") try {
        s[n] = t(r);
      } catch {
      }
    }
    return s;
  };
}
function Yo(t, e) {
  const s = typeof e == "function";
  function n(r) {
    if (typeof r == "object" && r !== null) try {
      return t(r);
    } catch {
    }
    else if (s && typeof r == "string") try {
      return e(r), t(r);
    } catch {
    }
    return r;
  }
  return (r) => {
    const i = Wo(r, n);
    return i ? `?${i}` : "";
  };
}
const ye = "__root__";
function Xo(t) {
  if (t.statusCode = t.statusCode || t.code || 307, !t._builtLocation && typeof t.href == "string" && Xt(t.href)) throw new Error(`Redirect blocked: unsafe protocol in href "${t.href}". Only ${ri.join(", ")} protocols are allowed.`);
  if (!t._builtLocation && !t.reloadDocument && typeof t.href == "string") try {
    new URL(t.href), t.reloadDocument = true;
  } catch {
  }
  const e = new Headers(t.headers);
  t.href && e.get("Location") === null && e.set("Location", t.href);
  const s = new Response(null, { status: t.statusCode, headers: e });
  if (s.options = t, t.throw) throw s;
  return s;
}
function me(t) {
  return t instanceof Response && !!t.options;
}
const qt = (t) => {
  var _a5;
  if (!t.rendered) return t.rendered = true, (_a5 = t.onReady) == null ? void 0 : _a5.call(t);
}, fs = (t, e) => !!(t.preload && !t.router.state.matches.some((s) => s.id === e)), st = (t, e, s = true) => {
  const n = { ...t.router.options.context ?? {} }, r = s ? e : e - 1;
  for (let i = 0; i <= r; i++) {
    const o = t.matches[i];
    if (!o) continue;
    const a = t.router.getMatch(o.id);
    a && Object.assign(n, a.__routeContext, a.__beforeLoadContext);
  }
  return n;
}, li = (t, e) => {
  var _a5;
  const s = t.router.routesById[e.routeId ?? ""] ?? t.router.routeTree;
  !s.options.notFoundComponent && ((_a5 = t.router.options) == null ? void 0 : _a5.defaultNotFoundComponent) && (s.options.notFoundComponent = t.router.options.defaultNotFoundComponent), Oe(s.options.notFoundComponent);
  const n = t.matches.find((r) => r.routeId === s.id);
  Oe(n, "Could not find match for route: " + s.id), t.updateMatch(n.id, (r) => ({ ...r, status: "notFound", error: e, isFetching: false })), e.routerCode === "BEFORE_LOAD" && s.parentRoute && (e.routeId = s.parentRoute.id, li(t, e));
}, Be = (t, e, s) => {
  var _a5, _b2, _c3;
  if (!(!me(s) && !de(s))) {
    if (me(s) && s.redirectHandled && !s.options.reloadDocument) throw s;
    if (e) {
      (_a5 = e._nonReactive.beforeLoadPromise) == null ? void 0 : _a5.resolve(), (_b2 = e._nonReactive.loaderPromise) == null ? void 0 : _b2.resolve(), e._nonReactive.beforeLoadPromise = void 0, e._nonReactive.loaderPromise = void 0;
      const n = me(s) ? "redirected" : "notFound";
      e._nonReactive.error = s, t.updateMatch(e.id, (r) => ({ ...r, status: n, context: st(t, e.index), isFetching: false, error: s })), de(s) && !s.routeId && (s.routeId = e.routeId), (_c3 = e._nonReactive.loadPromise) == null ? void 0 : _c3.resolve();
    }
    throw me(s) ? (t.rendered = true, s.options._fromLocation = t.location, s.redirectHandled = true, s = t.router.resolveRedirect(s), s) : (li(t, s), s);
  }
}, ui = (t, e) => !!t.router.getMatch(e)._nonReactive.dehydrated, ht = (t, e, s, n) => {
  var _a5, _b2;
  const { id: r, routeId: i } = t.matches[e], o = t.router.looseRoutesById[i];
  if (s instanceof Promise) throw s;
  s.routerCode = n, t.firstBadMatchIndex ?? (t.firstBadMatchIndex = e), Be(t, t.router.getMatch(r), s);
  try {
    (_b2 = (_a5 = o.options).onError) == null ? void 0 : _b2.call(_a5, s);
  } catch (a) {
    s = a, Be(t, t.router.getMatch(r), s);
  }
  t.updateMatch(r, (a) => {
    var _a6, _b3;
    return (_a6 = a._nonReactive.beforeLoadPromise) == null ? void 0 : _a6.resolve(), a._nonReactive.beforeLoadPromise = void 0, (_b3 = a._nonReactive.loadPromise) == null ? void 0 : _b3.resolve(), { ...a, error: s, status: "error", isFetching: false, updatedAt: Date.now(), abortController: new AbortController() };
  });
}, hi = (t, e, s, n) => {
  var _a5;
  if (n._nonReactive.pendingTimeout !== void 0) return;
  const r = s.options.pendingMs ?? t.router.options.defaultPendingMs;
  if (!!(t.onReady && !fs(t, e) && (s.options.loader || s.options.beforeLoad || pi(s)) && typeof r == "number" && r !== 1 / 0 && (s.options.pendingComponent ?? ((_a5 = t.router.options) == null ? void 0 : _a5.defaultPendingComponent)))) {
    const o = setTimeout(() => {
      qt(t);
    }, r);
    n._nonReactive.pendingTimeout = o;
  }
}, Zo = (t, e, s) => {
  const n = t.router.getMatch(e);
  if (!n._nonReactive.beforeLoadPromise && !n._nonReactive.loaderPromise) return;
  hi(t, e, s, n);
  const r = () => {
    const i = t.router.getMatch(e);
    i.preload && (i.status === "redirected" || i.status === "notFound") && Be(t, i, i.error);
  };
  return n._nonReactive.beforeLoadPromise ? n._nonReactive.beforeLoadPromise.then(r) : r();
}, ea = (t, e, s, n) => {
  const r = t.router.getMatch(e), i = r._nonReactive.loadPromise;
  r._nonReactive.loadPromise = rt(() => {
    i == null ? void 0 : i.resolve();
  });
  const { paramsError: o, searchError: a } = r;
  o && ht(t, s, o, "PARSE_PARAMS"), a && ht(t, s, a, "VALIDATE_SEARCH"), hi(t, e, n, r);
  const c = new AbortController();
  let l = false;
  const h = () => {
    l || (l = true, t.updateMatch(e, (v) => ({ ...v, isFetching: "beforeLoad", fetchCount: v.fetchCount + 1, abortController: c })));
  }, u = () => {
    var _a5;
    (_a5 = r._nonReactive.beforeLoadPromise) == null ? void 0 : _a5.resolve(), r._nonReactive.beforeLoadPromise = void 0, t.updateMatch(e, (v) => ({ ...v, isFetching: false }));
  };
  if (!n.options.beforeLoad) {
    St(() => {
      h(), u();
    });
    return;
  }
  r._nonReactive.beforeLoadPromise = rt();
  const f = { ...st(t, s, false), ...r.__routeContext }, { search: p, params: d, cause: y } = r, g = fs(t, e), w = { search: p, abortController: c, params: d, preload: g, context: f, location: t.location, navigate: (v) => t.router.navigate({ ...v, _fromLocation: t.location }), buildLocation: t.router.buildLocation, cause: g ? "preload" : y, matches: t.matches, routeId: n.id, ...t.router.options.additionalContext }, b = (v) => {
    if (v === void 0) {
      St(() => {
        h(), u();
      });
      return;
    }
    (me(v) || de(v)) && (h(), ht(t, s, v, "BEFORE_LOAD")), St(() => {
      h(), t.updateMatch(e, (E) => ({ ...E, __beforeLoadContext: v })), u();
    });
  };
  let R;
  try {
    if (R = n.options.beforeLoad(w), tt(R)) return h(), R.catch((v) => {
      ht(t, s, v, "BEFORE_LOAD");
    }).then(b);
  } catch (v) {
    h(), ht(t, s, v, "BEFORE_LOAD");
  }
  b(R);
}, ta = (t, e) => {
  const { id: s, routeId: n } = t.matches[e], r = t.router.looseRoutesById[n], i = () => a(), o = () => ea(t, s, e, r), a = () => {
    if (ui(t, s)) return;
    const c = Zo(t, s, r);
    return tt(c) ? c.then(o) : o();
  };
  return i();
}, sa = (t, e, s) => {
  var _a5, _b2, _c3, _d2, _e28, _f3;
  const n = t.router.getMatch(e);
  if (!n || !s.options.head && !s.options.scripts && !s.options.headers) return;
  const r = { ssr: t.router.options.ssr, matches: t.matches, match: n, params: n.params, loaderData: n.loaderData };
  return Promise.all([(_b2 = (_a5 = s.options).head) == null ? void 0 : _b2.call(_a5, r), (_d2 = (_c3 = s.options).scripts) == null ? void 0 : _d2.call(_c3, r), (_f3 = (_e28 = s.options).headers) == null ? void 0 : _f3.call(_e28, r)]).then(([i, o, a]) => {
    const c = i == null ? void 0 : i.meta, l = i == null ? void 0 : i.links, h = i == null ? void 0 : i.scripts, u = i == null ? void 0 : i.styles;
    return { meta: c, links: l, headScripts: h, headers: a, scripts: o, styles: u };
  });
}, fi = (t, e, s, n) => {
  const r = t.matchPromises[s - 1], { params: i, loaderDeps: o, abortController: a, cause: c } = t.router.getMatch(e), l = st(t, s), h = fs(t, e);
  return { params: i, deps: o, preload: !!h, parentMatchPromise: r, abortController: a, context: l, location: t.location, navigate: (u) => t.router.navigate({ ...u, _fromLocation: t.location }), cause: h ? "preload" : c, route: n, ...t.router.options.additionalContext };
}, nr = async (t, e, s, n) => {
  var _a5, _b2, _c3, _d2, _e28, _f3, _g2;
  try {
    const r = t.router.getMatch(e);
    try {
      (!(go ?? t.router.isServer) || r.ssr === true) && di(n);
      const i = (_b2 = (_a5 = n.options).loader) == null ? void 0 : _b2.call(_a5, fi(t, e, s, n)), o = n.options.loader && tt(i);
      if ((o || n._lazyPromise || n._componentsPromise || n.options.head || n.options.scripts || n.options.headers || r._nonReactive.minPendingPromise) && t.updateMatch(e, (l) => ({ ...l, isFetching: "loader" })), n.options.loader) {
        const l = o ? await i : i;
        Be(t, t.router.getMatch(e), l), l !== void 0 && t.updateMatch(e, (h) => ({ ...h, loaderData: l }));
      }
      n._lazyPromise && await n._lazyPromise;
      const c = r._nonReactive.minPendingPromise;
      c && await c, n._componentsPromise && await n._componentsPromise, t.updateMatch(e, (l) => ({ ...l, error: void 0, context: st(t, s), status: "success", isFetching: false, updatedAt: Date.now() }));
    } catch (i) {
      let o = i;
      if ((o == null ? void 0 : o.name) === "AbortError") {
        if (r.abortController.signal.aborted) {
          (_c3 = r._nonReactive.loaderPromise) == null ? void 0 : _c3.resolve(), r._nonReactive.loaderPromise = void 0;
          return;
        }
        t.updateMatch(e, (c) => ({ ...c, status: c.status === "pending" ? "success" : c.status, isFetching: false, context: st(t, s) }));
        return;
      }
      const a = r._nonReactive.minPendingPromise;
      a && await a, de(i) && await ((_e28 = (_d2 = n.options.notFoundComponent) == null ? void 0 : _d2.preload) == null ? void 0 : _e28.call(_d2)), Be(t, t.router.getMatch(e), i);
      try {
        (_g2 = (_f3 = n.options).onError) == null ? void 0 : _g2.call(_f3, i);
      } catch (c) {
        o = c, Be(t, t.router.getMatch(e), c);
      }
      t.updateMatch(e, (c) => ({ ...c, error: o, context: st(t, s), status: "error", isFetching: false }));
    }
  } catch (r) {
    const i = t.router.getMatch(e);
    i && (i._nonReactive.loaderPromise = void 0), Be(t, i, r);
  }
}, na = async (t, e) => {
  var _a5, _b2;
  async function s(h, u, f, p) {
    const d = Date.now() - u.updatedAt, y = h ? p.options.preloadStaleTime ?? t.router.options.defaultPreloadStaleTime ?? 3e4 : p.options.staleTime ?? t.router.options.defaultStaleTime ?? 0, g = p.options.shouldReload, w = typeof g == "function" ? g(fi(t, n, e, p)) : g, { status: b, invalid: R } = f;
    i = b === "success" && (R || (w ?? d > y)), h && p.options.preload === false || (i && !t.sync ? (o = true, (async () => {
      var _a6, _b3;
      try {
        await nr(t, n, e, p);
        const v = t.router.getMatch(n);
        (_a6 = v._nonReactive.loaderPromise) == null ? void 0 : _a6.resolve(), (_b3 = v._nonReactive.loadPromise) == null ? void 0 : _b3.resolve(), v._nonReactive.loaderPromise = void 0;
      } catch (v) {
        me(v) && await t.router.navigate(v.options);
      }
    })()) : (b !== "success" || i && t.sync) && await nr(t, n, e, p));
  }
  const { id: n, routeId: r } = t.matches[e];
  let i = false, o = false;
  const a = t.router.looseRoutesById[r];
  if (!ui(t, n)) {
    const h = t.router.getMatch(n), u = fs(t, n);
    if (h._nonReactive.loaderPromise) {
      if (h.status === "success" && !t.sync && !h.preload) return h;
      await h._nonReactive.loaderPromise;
      const f = t.router.getMatch(n), p = f._nonReactive.error || f.error;
      p && Be(t, f, p), f.status === "pending" && await s(u, h, f, a);
    } else {
      const f = u && !t.router.state.matches.some((d) => d.id === n), p = t.router.getMatch(n);
      p._nonReactive.loaderPromise = rt(), f !== p.preload && t.updateMatch(n, (d) => ({ ...d, preload: f })), await s(u, h, p, a);
    }
  }
  const c = t.router.getMatch(n);
  o || ((_a5 = c._nonReactive.loaderPromise) == null ? void 0 : _a5.resolve(), (_b2 = c._nonReactive.loadPromise) == null ? void 0 : _b2.resolve()), clearTimeout(c._nonReactive.pendingTimeout), c._nonReactive.pendingTimeout = void 0, o || (c._nonReactive.loaderPromise = void 0), c._nonReactive.dehydrated = void 0;
  const l = o ? c.isFetching : false;
  return l !== c.isFetching || c.invalid !== false ? (t.updateMatch(n, (h) => ({ ...h, isFetching: l, invalid: false })), t.router.getMatch(n)) : c;
};
async function rr(t) {
  const e = Object.assign(t, { matchPromises: [] });
  e.router.state.matches.some((s) => s._forcePending) && qt(e);
  try {
    for (let a = 0; a < e.matches.length; a++) {
      const c = ta(e, a);
      tt(c) && await c;
    }
    const s = e.firstBadMatchIndex ?? e.matches.length;
    for (let a = 0; a < s; a++) e.matchPromises.push(na(e, a));
    const r = (await Promise.allSettled(e.matchPromises)).filter((a) => a.status === "rejected").map((a) => a.reason);
    let i;
    for (const a of r) {
      if (me(a)) throw a;
      !i && de(a) && (i = a);
    }
    for (const a of e.matches) {
      const { id: c, routeId: l } = a, h = e.router.looseRoutesById[l];
      try {
        const u = sa(e, c, h);
        if (u) {
          const f = await u;
          e.updateMatch(c, (p) => ({ ...p, ...f }));
        }
      } catch (u) {
        console.error(`Error executing head for route ${l}:`, u);
      }
    }
    if (i) throw i;
    const o = qt(e);
    tt(o) && await o;
  } catch (s) {
    if (de(s) && !e.preload) {
      const n = qt(e);
      throw tt(n) && await n, s;
    }
    if (me(s)) throw s;
  }
  return e.matches;
}
async function di(t) {
  if (!t._lazyLoaded && t._lazyPromise === void 0 && (t.lazyFn ? t._lazyPromise = t.lazyFn().then((e) => {
    const { id: s, ...n } = e.options;
    Object.assign(t.options, n), t._lazyLoaded = true, t._lazyPromise = void 0;
  }) : t._lazyLoaded = true), !t._componentsLoaded && t._componentsPromise === void 0) {
    const e = () => {
      var _a5;
      const s = [];
      for (const n of yi) {
        const r = (_a5 = t.options[n]) == null ? void 0 : _a5.preload;
        r && s.push(r());
      }
      if (s.length) return Promise.all(s).then(() => {
        t._componentsLoaded = true, t._componentsPromise = void 0;
      });
      t._componentsLoaded = true, t._componentsPromise = void 0;
    };
    t._componentsPromise = t._lazyPromise ? t._lazyPromise.then(e) : e();
  }
  return t._componentsPromise;
}
function pi(t) {
  var _a5;
  for (const e of yi) if ((_a5 = t.options[e]) == null ? void 0 : _a5.preload) return true;
  return false;
}
const yi = ["component", "errorComponent", "pendingComponent", "notFoundComponent"];
function ra(t) {
  return { input: ({ url: e }) => {
    for (const s of t) e = Vs(s, e);
    return e;
  }, output: ({ url: e }) => {
    for (let s = t.length - 1; s >= 0; s--) e = gi(t[s], e);
    return e;
  } };
}
function ia(t) {
  const e = ci(t.basepath), s = `/${e}`, n = `${s}/`, r = t.caseSensitive ? s : s.toLowerCase(), i = t.caseSensitive ? n : n.toLowerCase();
  return { input: ({ url: o }) => {
    const a = t.caseSensitive ? o.pathname : o.pathname.toLowerCase();
    return a === r ? o.pathname = "/" : a.startsWith(i) && (o.pathname = o.pathname.slice(s.length)), o;
  }, output: ({ url: o }) => (o.pathname = Vt(["/", e, o.pathname]), o) };
}
function Vs(t, e) {
  var _a5;
  const s = (_a5 = t == null ? void 0 : t.input) == null ? void 0 : _a5.call(t, { url: e });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return e;
}
function gi(t, e) {
  var _a5;
  const s = (_a5 = t == null ? void 0 : t.output) == null ? void 0 : _a5.call(t, { url: e });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return e;
}
function He(t) {
  const e = t.resolvedLocation, s = t.location, n = (e == null ? void 0 : e.pathname) !== s.pathname, r = (e == null ? void 0 : e.href) !== s.href, i = (e == null ? void 0 : e.hash) !== s.hash;
  return { fromLocation: e, toLocation: s, pathChanged: n, hrefChanged: r, hashChanged: i };
}
class oa {
  constructor(e) {
    this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`, this.resetNextScroll = true, this.shouldViewTransition = void 0, this.isViewTransitionTypesSupported = void 0, this.subscribers = /* @__PURE__ */ new Set(), this.isScrollRestoring = false, this.isScrollRestorationSetup = false, this.startTransition = (s) => s(), this.update = (s) => {
      var _a5;
      s.notFoundRoute && console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");
      const n = this.options, r = this.basepath ?? (n == null ? void 0 : n.basepath) ?? "/", i = this.basepath === void 0, o = n == null ? void 0 : n.rewrite;
      if (this.options = { ...n, ...s }, this.isServer = this.options.isServer ?? typeof document > "u", this.options.pathParamsAllowedCharacters && (this.pathParamsDecoder = Bo(this.options.pathParamsAllowedCharacters)), (!this.history || this.options.history && this.options.history !== this.history) && (this.options.history ? this.history = this.options.history : this.history = ni()), this.origin = this.options.origin, this.origin || ((window == null ? void 0 : window.origin) && window.origin !== "null" ? this.origin = window.origin : this.origin = "http://localhost"), this.history && this.updateLatestLocation(), this.options.routeTree !== this.routeTree) {
        this.routeTree = this.options.routeTree;
        let f;
        this.resolvePathCache = Zt(1e3), f = this.buildRouteTree(), this.setRoutes(f);
      }
      !this.__store && this.latestLocation && (this.__store = new fo(ca(this.latestLocation), { onUpdate: () => {
        this.__store.state = { ...this.state, cachedMatches: this.state.cachedMatches.filter((f) => !["redirected"].includes(f.status)) };
      } }), Vo(this));
      let a = false;
      const c = this.options.basepath ?? "/", l = this.options.rewrite;
      if (i || r !== c || o !== l) {
        this.basepath = c;
        const f = [], p = ci(c);
        p && p !== "/" && f.push(ia({ basepath: c })), l && f.push(l), this.rewrite = f.length === 0 ? void 0 : f.length === 1 ? f[0] : ra(f), this.history && this.updateLatestLocation(), a = true;
      }
      a && this.__store && (this.__store.state = { ...this.state, location: this.latestLocation }), typeof window < "u" && "CSS" in window && typeof ((_a5 = window.CSS) == null ? void 0 : _a5.supports) == "function" && (this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a)"));
    }, this.updateLatestLocation = () => {
      this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
    }, this.buildRouteTree = () => {
      const s = Mo(this.routeTree, this.options.caseSensitive, (n, r) => {
        n.init({ originalIndex: r });
      });
      return this.options.routeMasks && _o(this.options.routeMasks, s.processedTree), s;
    }, this.subscribe = (s, n) => {
      const r = { eventType: s, fn: n };
      return this.subscribers.add(r), () => {
        this.subscribers.delete(r);
      };
    }, this.emit = (s) => {
      this.subscribers.forEach((n) => {
        n.eventType === s.type && n.fn(s);
      });
    }, this.parseLocation = (s, n) => {
      const r = ({ pathname: c, search: l, hash: h, href: u, state: f }) => {
        if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(c)) {
          const b = this.options.parseSearch(l), R = this.options.stringifySearch(b);
          return { href: c + R + h, publicHref: u, pathname: lt(c).path, external: false, searchStr: R, search: ue(n == null ? void 0 : n.search, b), hash: lt(h.slice(1)).path, state: ue(n == null ? void 0 : n.state, f) };
        }
        const p = new URL(u, this.origin), d = Vs(this.rewrite, p), y = this.options.parseSearch(d.search), g = this.options.stringifySearch(y);
        return d.search = g, { href: d.href.replace(d.origin, ""), publicHref: u, pathname: lt(d.pathname).path, external: !!this.rewrite && d.origin !== this.origin, searchStr: g, search: ue(n == null ? void 0 : n.search, y), hash: lt(d.hash.slice(1)).path, state: ue(n == null ? void 0 : n.state, f) };
      }, i = r(s), { __tempLocation: o, __tempKey: a } = i.state;
      if (o && (!a || a === this.tempLocationKey)) {
        const c = r(o);
        return c.state.key = i.state.key, c.state.__TSR_key = i.state.__TSR_key, delete c.state.__tempLocation, { ...c, maskedLocation: i };
      }
      return i;
    }, this.resolvePathWithBase = (s, n) => Do({ base: s, to: mn(n), trailingSlash: this.options.trailingSlash, cache: this.resolvePathCache }), this.matchRoutes = (s, n, r) => typeof s == "string" ? this.matchRoutesInternal({ pathname: s, search: n }, r) : this.matchRoutesInternal(s, n), this.getMatchedRoutes = (s) => la({ pathname: s, routesById: this.routesById, processedTree: this.processedTree }), this.cancelMatch = (s) => {
      const n = this.getMatch(s);
      n && (n.abortController.abort(), clearTimeout(n._nonReactive.pendingTimeout), n._nonReactive.pendingTimeout = void 0);
    }, this.cancelMatches = () => {
      const s = this.state.matches.filter((i) => i.status === "pending"), n = this.state.matches.filter((i) => i.isFetching === "loader");
      (/* @__PURE__ */ new Set([...this.state.pendingMatches ?? [], ...s, ...n])).forEach((i) => {
        this.cancelMatch(i.id);
      });
    }, this.buildLocation = (s) => {
      const n = (i = {}) => {
        var _a5, _b2;
        const o = i._fromLocation || this.pendingBuiltLocation || this.latestLocation, a = this.matchRoutesLightweight(o);
        i.from;
        const c = i.unsafeRelative === "path" ? o.pathname : i.from ?? a.fullPath, l = this.resolvePathWithBase(c, "."), h = a.search, u = { ...a.params }, f = i.to ? this.resolvePathWithBase(l, `${i.to}`) : this.resolvePathWithBase(l, "."), p = i.params === false || i.params === null ? {} : (i.params ?? true) === true ? u : Object.assign(u, De(i.params, u)), d = Is({ path: f, params: p, decoder: this.pathParamsDecoder, server: this.isServer }).interpolatedPath, y = this.getMatchedRoutes(d);
        let g = y.matchedRoutes;
        (y.foundRoute ? y.foundRoute.path !== "/" && y.routeParams["**"] : Ee(d)) && this.options.notFoundRoute && (g = [...g, this.options.notFoundRoute]);
        let b = false;
        if (Object.keys(p).length > 0) for (const S of g) {
          const k = ((_a5 = S.options.params) == null ? void 0 : _a5.stringify) ?? S.options.stringifyParams;
          k && (b = true, Object.assign(p, k(p)));
        }
        const R = s.leaveParams ? f : lt(b ? Is({ path: f, params: p, decoder: this.pathParamsDecoder, server: this.isServer }).interpolatedPath : d).path;
        let v = h;
        if (s._includeValidateSearch && ((_b2 = this.options.search) == null ? void 0 : _b2.strict)) {
          const S = {};
          g.forEach((k) => {
            if (k.options.validateSearch) try {
              Object.assign(S, Wt(k.options.validateSearch, { ...S, ...v }));
            } catch {
            }
          }), v = S;
        }
        v = ua({ search: v, dest: i, destRoutes: g, _includeValidateSearch: s._includeValidateSearch }), v = ue(h, v);
        const E = this.options.stringifySearch(v), M = i.hash === true ? o.hash : i.hash ? De(i.hash, o.hash) : void 0, O = M ? `#${M}` : "";
        let C = i.state === true ? o.state : i.state ? De(i.state, o.state) : {};
        C = ue(o.state, C);
        const x = `${R}${E}${O}`;
        let I, m, P = false;
        if (this.rewrite) {
          const S = new URL(x, this.origin), k = gi(this.rewrite, S);
          I = S.href.replace(S.origin, ""), k.origin !== this.origin ? (m = k.href, P = true) : m = k.pathname + k.search + k.hash;
        } else I = Po(x), m = I;
        return { publicHref: m, href: I, pathname: R, search: v, searchStr: E, state: C, hash: M ?? "", external: P, unmaskOnReload: i.unmaskOnReload };
      }, r = (i = {}, o) => {
        const a = n(i);
        let c = o ? n(o) : void 0;
        if (!c) {
          const l = {};
          if (this.options.routeMasks) {
            const h = ko(a.pathname, this.processedTree);
            if (h) {
              Object.assign(l, h.rawParams);
              const { from: u, params: f, ...p } = h.route, d = f === false || f === null ? {} : (f ?? true) === true ? l : Object.assign(l, De(f, l));
              o = { from: s.from, ...p, params: d }, c = n(o);
            }
          }
        }
        return c && (a.maskedLocation = c), a;
      };
      return s.mask ? r(s, { from: s.from, ...s.mask }) : r(s);
    }, this.commitLocation = async ({ viewTransition: s, ignoreBlocker: n, ...r }) => {
      const i = () => {
        const c = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
        c.forEach((h) => {
          r.state[h] = this.latestLocation.state[h];
        });
        const l = We(r.state, this.latestLocation.state);
        return c.forEach((h) => {
          delete r.state[h];
        }), l;
      }, o = Ee(this.latestLocation.href) === Ee(r.href), a = this.commitLocationPromise;
      if (this.commitLocationPromise = rt(() => {
        a == null ? void 0 : a.resolve();
      }), o && i()) this.load();
      else {
        let { maskedLocation: c, hashScrollIntoView: l, ...h } = r;
        c && (h = { ...c, state: { ...c.state, __tempKey: void 0, __tempLocation: { ...h, search: h.searchStr, state: { ...h.state, __tempKey: void 0, __tempLocation: void 0, __TSR_key: void 0, key: void 0 } } } }, (h.unmaskOnReload ?? this.options.unmaskOnReload ?? false) && (h.state.__tempKey = this.tempLocationKey)), h.state.__hashScrollIntoViewOptions = l ?? this.options.defaultHashScrollIntoView ?? true, this.shouldViewTransition = s, this.history[r.replace ? "replace" : "push"](h.publicHref, h.state, { ignoreBlocker: n });
      }
      return this.resetNextScroll = r.resetScroll ?? true, this.history.subscribers.size || this.load(), this.commitLocationPromise;
    }, this.buildAndCommitLocation = ({ replace: s, resetScroll: n, hashScrollIntoView: r, viewTransition: i, ignoreBlocker: o, href: a, ...c } = {}) => {
      if (a) {
        const u = this.history.location.state.__TSR_index, f = Ct(a, { __TSR_index: s ? u : u + 1 }), p = new URL(f.pathname, this.origin), d = Vs(this.rewrite, p);
        c.to = d.pathname, c.search = this.options.parseSearch(f.search), c.hash = f.hash.slice(1);
      }
      const l = this.buildLocation({ ...c, _includeValidateSearch: true });
      this.pendingBuiltLocation = l;
      const h = this.commitLocation({ ...l, viewTransition: i, replace: s, resetScroll: n, hashScrollIntoView: r, ignoreBlocker: o });
      return Promise.resolve().then(() => {
        this.pendingBuiltLocation === l && (this.pendingBuiltLocation = void 0);
      }), h;
    }, this.navigate = async ({ to: s, reloadDocument: n, href: r, publicHref: i, ...o }) => {
      var _a5, _b2;
      let a = false;
      if (r) try {
        new URL(`${r}`), a = true;
      } catch {
      }
      if (a && !n && (n = true), n) {
        if (s !== void 0 || !r) {
          const l = this.buildLocation({ to: s, ...o });
          r = r ?? l.publicHref, i = i ?? l.publicHref;
        }
        const c = !a && i ? i : r;
        if (Xt(c)) return Promise.resolve();
        if (!o.ignoreBlocker) {
          const h = ((_b2 = (_a5 = this.history).getBlockers) == null ? void 0 : _b2.call(_a5)) ?? [];
          for (const u of h) if ((u == null ? void 0 : u.blockerFn) && await u.blockerFn({ currentLocation: this.latestLocation, nextLocation: this.latestLocation, action: "PUSH" })) return Promise.resolve();
        }
        return o.replace ? window.location.replace(c) : window.location.href = c, Promise.resolve();
      }
      return this.buildAndCommitLocation({ ...o, href: r, to: s, _isNavigate: true });
    }, this.beforeLoad = () => {
      this.cancelMatches(), this.updateLatestLocation();
      const s = this.matchRoutes(this.latestLocation);
      this.__store.setState((n) => ({ ...n, status: "pending", statusCode: 200, isLoading: true, location: this.latestLocation, pendingMatches: s, cachedMatches: n.cachedMatches.filter((r) => !s.some((i) => i.id === r.id)) }));
    }, this.load = async (s) => {
      let n, r, i;
      for (i = new Promise((a) => {
        this.startTransition(async () => {
          var _a5;
          try {
            this.beforeLoad();
            const c = this.latestLocation, l = this.state.resolvedLocation;
            this.state.redirect || this.emit({ type: "onBeforeNavigate", ...He({ resolvedLocation: l, location: c }) }), this.emit({ type: "onBeforeLoad", ...He({ resolvedLocation: l, location: c }) }), await rr({ router: this, sync: s == null ? void 0 : s.sync, matches: this.state.pendingMatches, location: c, updateMatch: this.updateMatch, onReady: async () => {
              this.startTransition(() => {
                this.startViewTransition(async () => {
                  let h = [], u = [], f = [];
                  St(() => {
                    this.__store.setState((p) => {
                      const d = p.matches, y = p.pendingMatches || p.matches;
                      return h = d.filter((g) => !y.some((w) => w.id === g.id)), u = y.filter((g) => !d.some((w) => w.id === g.id)), f = y.filter((g) => d.some((w) => w.id === g.id)), { ...p, isLoading: false, loadedAt: Date.now(), matches: y, pendingMatches: void 0, cachedMatches: [...p.cachedMatches, ...h.filter((g) => g.status !== "error" && g.status !== "notFound")] };
                    }), this.clearExpiredCache();
                  }), [[h, "onLeave"], [u, "onEnter"], [f, "onStay"]].forEach(([p, d]) => {
                    p.forEach((y) => {
                      var _a6, _b2;
                      (_b2 = (_a6 = this.looseRoutesById[y.routeId].options)[d]) == null ? void 0 : _b2.call(_a6, y);
                    });
                  });
                });
              });
            } });
          } catch (c) {
            me(c) ? (n = c, this.navigate({ ...n.options, replace: true, ignoreBlocker: true })) : de(c) && (r = c), this.__store.setState((l) => ({ ...l, statusCode: n ? n.status : r ? 404 : l.matches.some((h) => h.status === "error") ? 500 : 200, redirect: n }));
          }
          this.latestLoadPromise === i && ((_a5 = this.commitLocationPromise) == null ? void 0 : _a5.resolve(), this.latestLoadPromise = void 0, this.commitLocationPromise = void 0), a();
        });
      }), this.latestLoadPromise = i, await i; this.latestLoadPromise && i !== this.latestLoadPromise; ) await this.latestLoadPromise;
      let o;
      this.hasNotFoundMatch() ? o = 404 : this.__store.state.matches.some((a) => a.status === "error") && (o = 500), o !== void 0 && this.__store.setState((a) => ({ ...a, statusCode: o }));
    }, this.startViewTransition = (s) => {
      const n = this.shouldViewTransition ?? this.options.defaultViewTransition;
      if (this.shouldViewTransition = void 0, n && typeof document < "u" && "startViewTransition" in document && typeof document.startViewTransition == "function") {
        let r;
        if (typeof n == "object" && this.isViewTransitionTypesSupported) {
          const i = this.latestLocation, o = this.state.resolvedLocation, a = typeof n.types == "function" ? n.types(He({ resolvedLocation: o, location: i })) : n.types;
          if (a === false) {
            s();
            return;
          }
          r = { update: s, types: a };
        } else r = s;
        document.startViewTransition(r);
      } else s();
    }, this.updateMatch = (s, n) => {
      this.startTransition(() => {
        var _a5;
        const r = ((_a5 = this.state.pendingMatches) == null ? void 0 : _a5.some((i) => i.id === s)) ? "pendingMatches" : this.state.matches.some((i) => i.id === s) ? "matches" : this.state.cachedMatches.some((i) => i.id === s) ? "cachedMatches" : "";
        r && this.__store.setState((i) => {
          var _a6;
          return { ...i, [r]: (_a6 = i[r]) == null ? void 0 : _a6.map((o) => o.id === s ? n(o) : o) };
        });
      });
    }, this.getMatch = (s) => {
      var _a5;
      const n = (r) => r.id === s;
      return this.state.cachedMatches.find(n) ?? ((_a5 = this.state.pendingMatches) == null ? void 0 : _a5.find(n)) ?? this.state.matches.find(n);
    }, this.invalidate = (s) => {
      const n = (r) => {
        var _a5;
        return ((_a5 = s == null ? void 0 : s.filter) == null ? void 0 : _a5.call(s, r)) ?? true ? { ...r, invalid: true, ...(s == null ? void 0 : s.forcePending) || r.status === "error" || r.status === "notFound" ? { status: "pending", error: void 0 } : void 0 } : r;
      };
      return this.__store.setState((r) => {
        var _a5;
        return { ...r, matches: r.matches.map(n), cachedMatches: r.cachedMatches.map(n), pendingMatches: (_a5 = r.pendingMatches) == null ? void 0 : _a5.map(n) };
      }), this.shouldViewTransition = false, this.load({ sync: s == null ? void 0 : s.sync });
    }, this.getParsedLocationHref = (s) => s.publicHref || "/", this.resolveRedirect = (s) => {
      const n = s.headers.get("Location");
      if (!s.options.href || s.options._builtLocation) {
        const r = s.options._builtLocation ?? this.buildLocation(s.options), i = this.getParsedLocationHref(r);
        s.options.href = i, s.headers.set("Location", i);
      } else if (n) try {
        const r = new URL(n);
        if (this.origin && r.origin === this.origin) {
          const i = r.pathname + r.search + r.hash;
          s.options.href = i, s.headers.set("Location", i);
        }
      } catch {
      }
      return s.headers.get("Location") || s.headers.set("Location", s.options.href), s;
    }, this.clearCache = (s) => {
      const n = s == null ? void 0 : s.filter;
      n !== void 0 ? this.__store.setState((r) => ({ ...r, cachedMatches: r.cachedMatches.filter((i) => !n(i)) })) : this.__store.setState((r) => ({ ...r, cachedMatches: [] }));
    }, this.clearExpiredCache = () => {
      const s = (n) => {
        const r = this.looseRoutesById[n.routeId];
        if (!r.options.loader) return true;
        const i = (n.preload ? r.options.preloadGcTime ?? this.options.defaultPreloadGcTime : r.options.gcTime ?? this.options.defaultGcTime) ?? 300 * 1e3;
        return n.status === "error" ? true : Date.now() - n.updatedAt >= i;
      };
      this.clearCache({ filter: s });
    }, this.loadRouteChunk = di, this.preloadRoute = async (s) => {
      const n = this.buildLocation(s);
      let r = this.matchRoutes(n, { throwOnError: true, preload: true, dest: s });
      const i = new Set([...this.state.matches, ...this.state.pendingMatches ?? []].map((a) => a.id)), o = /* @__PURE__ */ new Set([...i, ...this.state.cachedMatches.map((a) => a.id)]);
      St(() => {
        r.forEach((a) => {
          o.has(a.id) || this.__store.setState((c) => ({ ...c, cachedMatches: [...c.cachedMatches, a] }));
        });
      });
      try {
        return r = await rr({ router: this, matches: r, location: n, preload: true, updateMatch: (a, c) => {
          i.has(a) ? r = r.map((l) => l.id === a ? c(l) : l) : this.updateMatch(a, c);
        } }), r;
      } catch (a) {
        if (me(a)) return a.options.reloadDocument ? void 0 : await this.preloadRoute({ ...a.options, _fromLocation: n });
        de(a) || console.error(a);
        return;
      }
    }, this.matchRoute = (s, n) => {
      const r = { ...s, to: s.to ? this.resolvePathWithBase(s.from || "", s.to) : void 0, params: s.params || {}, leaveParams: true }, i = this.buildLocation(r);
      if ((n == null ? void 0 : n.pending) && this.state.status !== "pending") return false;
      const a = ((n == null ? void 0 : n.pending) === void 0 ? !this.state.isLoading : n.pending) ? this.latestLocation : this.state.resolvedLocation || this.state.location, c = Io(i.pathname, (n == null ? void 0 : n.caseSensitive) ?? false, (n == null ? void 0 : n.fuzzy) ?? false, a.pathname, this.processedTree);
      return !c || s.params && !We(c.rawParams, s.params, { partial: true }) ? false : (n == null ? void 0 : n.includeSearch) ?? true ? We(a.search, i.search, { partial: true }) ? c.rawParams : false : c.rawParams;
    }, this.hasNotFoundMatch = () => this.__store.state.matches.some((s) => s.status === "notFound" || s.globalNotFound), this.update({ defaultPreloadDelay: 50, defaultPendingMs: 1e3, defaultPendingMinMs: 500, context: void 0, ...e, caseSensitive: e.caseSensitive ?? false, notFoundMode: e.notFoundMode ?? "fuzzy", stringifySearch: e.stringifySearch ?? Qo, parseSearch: e.parseSearch ?? Go }), typeof document < "u" && (self.__TSR_ROUTER__ = this);
  }
  isShell() {
    return !!this.options.isShell;
  }
  isPrerendering() {
    return !!this.options.isPrerendering;
  }
  get state() {
    return this.__store.state;
  }
  setRoutes({ routesById: e, routesByPath: s, processedTree: n }) {
    this.routesById = e, this.routesByPath = s, this.processedTree = n;
    const r = this.options.notFoundRoute;
    r && (r.init({ originalIndex: 99999999999 }), this.routesById[r.id] = r);
  }
  get looseRoutesById() {
    return this.routesById;
  }
  getParentContext(e) {
    return (e == null ? void 0 : e.id) ? e.context ?? this.options.context ?? void 0 : this.options.context ?? void 0;
  }
  matchRoutesInternal(e, s) {
    var _a5, _b2;
    const n = this.getMatchedRoutes(e.pathname), { foundRoute: r, routeParams: i, parsedParams: o } = n;
    let { matchedRoutes: a } = n, c = false;
    (r ? r.path !== "/" && i["**"] : Ee(e.pathname)) && (this.options.notFoundRoute ? a = [...a, this.options.notFoundRoute] : c = true);
    const l = c ? fa(this.options.notFoundMode, a) : void 0, h = new Array(a.length);
    for (let u = 0; u < a.length; u++) {
      const f = a[u], p = h[u - 1];
      let d, y, g;
      {
        const S = (p == null ? void 0 : p.search) ?? e.search, k = (p == null ? void 0 : p._strictSearch) ?? void 0;
        try {
          const _ = Wt(f.options.validateSearch, { ...S }) ?? void 0;
          d = { ...S, ..._ }, y = { ...k, ..._ }, g = void 0;
        } catch (_) {
          let A = _;
          if (_ instanceof ss || (A = new ss(_.message, { cause: _ })), s == null ? void 0 : s.throwOnError) throw A;
          d = S, y = {}, g = A;
        }
      }
      const w = ((_b2 = (_a5 = f.options).loaderDeps) == null ? void 0 : _b2.call(_a5, { search: d })) ?? "", b = w ? JSON.stringify(w) : "", { interpolatedPath: R, usedParams: v } = Is({ path: f.fullPath, params: i, decoder: this.pathParamsDecoder, server: this.isServer }), E = f.id + R + b, M = this.getMatch(E), O = this.state.matches.find((S) => S.routeId === f.id), C = (M == null ? void 0 : M._strictParams) ?? v;
      let x;
      if (!M) try {
        ir(f, v, o, C);
      } catch (S) {
        if (de(S) || me(S) ? x = S : x = new aa(S.message, { cause: S }), s == null ? void 0 : s.throwOnError) throw x;
      }
      Object.assign(i, C);
      const I = O ? "stay" : "enter";
      let m;
      if (M) m = { ...M, cause: I, params: O ? ue(O.params, i) : i, _strictParams: C, search: ue(O ? O.search : M.search, d), _strictSearch: y };
      else {
        const S = f.options.loader || f.options.beforeLoad || f.lazyFn || pi(f) ? "pending" : "success";
        m = { id: E, ssr: f.options.ssr, index: u, routeId: f.id, params: O ? ue(O.params, i) : i, _strictParams: C, pathname: R, updatedAt: Date.now(), search: O ? ue(O.search, d) : d, _strictSearch: y, searchError: void 0, status: S, isFetching: false, error: void 0, paramsError: x, __routeContext: void 0, _nonReactive: { loadPromise: rt() }, __beforeLoadContext: void 0, context: {}, abortController: new AbortController(), fetchCount: 0, cause: I, loaderDeps: O ? ue(O.loaderDeps, w) : w, invalid: false, preload: false, links: void 0, scripts: void 0, headScripts: void 0, meta: void 0, staticData: f.options.staticData || {}, fullPath: f.fullPath };
      }
      (s == null ? void 0 : s.preload) || (m.globalNotFound = l === f.id), m.searchError = g;
      const P = this.getParentContext(p);
      m.context = { ...P, ...m.__routeContext, ...m.__beforeLoadContext }, h[u] = m;
    }
    for (let u = 0; u < h.length; u++) {
      const f = h[u], p = this.looseRoutesById[f.routeId];
      if (!this.getMatch(f.id)) {
        const y = h[u - 1], g = this.getParentContext(y);
        if (p.options.context) {
          const w = { deps: f.loaderDeps, params: f.params, context: g ?? {}, location: e, navigate: (b) => this.navigate({ ...b, _fromLocation: e }), buildLocation: this.buildLocation, cause: f.cause, abortController: f.abortController, preload: !!f.preload, matches: h, routeId: p.id };
          f.__routeContext = p.options.context(w) ?? void 0;
        }
        f.context = { ...g, ...f.__routeContext, ...f.__beforeLoadContext };
      }
    }
    return h;
  }
  matchRoutesLightweight(e) {
    const { matchedRoutes: s, routeParams: n, parsedParams: r } = this.getMatchedRoutes(e.pathname), i = _t(s), o = { ...e.search };
    for (const h of s) try {
      Object.assign(o, Wt(h.options.validateSearch, o));
    } catch {
    }
    const a = _t(this.state.matches), c = a && a.routeId === i.id && e.pathname === this.state.location.pathname;
    let l;
    if (c) l = a.params;
    else {
      const h = { ...n };
      for (const u of s) try {
        ir(u, n, r ?? {}, h);
      } catch {
      }
      l = h;
    }
    return { matchedRoutes: s, fullPath: i.fullPath, search: o, params: l };
  }
}
class ss extends Error {
}
class aa extends Error {
}
function ca(t) {
  return { loadedAt: 0, isLoading: false, isTransitioning: false, status: "idle", resolvedLocation: void 0, location: t, matches: [], pendingMatches: [], cachedMatches: [], statusCode: 200 };
}
function Wt(t, e) {
  if (t == null) return {};
  if ("~standard" in t) {
    const s = t["~standard"].validate(e);
    if (s instanceof Promise) throw new ss("Async validation not supported");
    if (s.issues) throw new ss(JSON.stringify(s.issues, void 0, 2), { cause: s });
    return s.value;
  }
  return "parse" in t ? t.parse(e) : typeof t == "function" ? t(e) : {};
}
function la({ pathname: t, routesById: e, processedTree: s }) {
  const n = {}, r = Ee(t);
  let i, o;
  const a = Eo(r, s, true);
  return a && (i = a.route, Object.assign(n, a.rawParams), o = Object.assign({}, a.parsedParams)), { matchedRoutes: (a == null ? void 0 : a.branch) || [e[ye]], routeParams: n, foundRoute: i, parsedParams: o };
}
function ua({ search: t, dest: e, destRoutes: s, _includeValidateSearch: n }) {
  return ha(s)(t, e, n ?? false);
}
function ha(t) {
  var _a5;
  const e = { dest: null, _includeValidateSearch: false, middlewares: [] };
  for (const r of t) {
    if ("search" in r.options) ((_a5 = r.options.search) == null ? void 0 : _a5.middlewares) && e.middlewares.push(...r.options.search.middlewares);
    else if (r.options.preSearchFilters || r.options.postSearchFilters) {
      const i = ({ search: o, next: a }) => {
        let c = o;
        "preSearchFilters" in r.options && r.options.preSearchFilters && (c = r.options.preSearchFilters.reduce((h, u) => u(h), o));
        const l = a(c);
        return "postSearchFilters" in r.options && r.options.postSearchFilters ? r.options.postSearchFilters.reduce((h, u) => u(h), l) : l;
      };
      e.middlewares.push(i);
    }
    if (r.options.validateSearch) {
      const i = ({ search: o, next: a }) => {
        const c = a(o);
        if (!e._includeValidateSearch) return c;
        try {
          return { ...c, ...Wt(r.options.validateSearch, c) ?? void 0 };
        } catch {
          return c;
        }
      };
      e.middlewares.push(i);
    }
  }
  const s = ({ search: r }) => {
    const i = e.dest;
    return i.search ? i.search === true ? r : De(i.search, r) : {};
  };
  e.middlewares.push(s);
  const n = (r, i, o) => {
    if (r >= o.length) return i;
    const a = o[r];
    return a({ search: i, next: (l) => n(r + 1, l, o) });
  };
  return function(i, o, a) {
    return e.dest = o, e._includeValidateSearch = a, n(0, i, e.middlewares);
  };
}
function fa(t, e) {
  if (t !== "root") for (let s = e.length - 1; s >= 0; s--) {
    const n = e[s];
    if (n.children) return n.id;
  }
  return ye;
}
function ir(t, e, s, n) {
  var _a5;
  const r = ((_a5 = t.options.params) == null ? void 0 : _a5.parse) ?? t.options.parseParams;
  if (r) if (t.options.skipRouteOnParseError) for (const i in e) i in s && (n[i] = s[i]);
  else {
    const i = r(n);
    Object.assign(n, i);
  }
}
const da = "Error preloading route! \u261D\uFE0F";
class mi {
  constructor(e) {
    if (this.init = (s) => {
      var _a5, _b2;
      this.originalIndex = s.originalIndex;
      const n = this.options, r = !(n == null ? void 0 : n.path) && !(n == null ? void 0 : n.id);
      this.parentRoute = (_b2 = (_a5 = this.options).getParentRoute) == null ? void 0 : _b2.call(_a5), r ? this._path = ye : this.parentRoute || Oe(false);
      let i = r ? ye : n == null ? void 0 : n.path;
      i && i !== "/" && (i = ai(i));
      const o = (n == null ? void 0 : n.id) || i;
      let a = r ? ye : Vt([this.parentRoute.id === ye ? "" : this.parentRoute.id, o]);
      i === ye && (i = "/"), a !== ye && (a = Vt(["/", a]));
      const c = a === ye ? "/" : Vt([this.parentRoute.fullPath, i]);
      this._path = i, this._id = a, this._fullPath = c, this._to = Ee(c);
    }, this.addChildren = (s) => this._addFileChildren(s), this._addFileChildren = (s) => (Array.isArray(s) && (this.children = s), typeof s == "object" && s !== null && (this.children = Object.values(s)), this), this._addFileTypes = () => this, this.updateLoader = (s) => (Object.assign(this.options, s), this), this.update = (s) => (Object.assign(this.options, s), this), this.lazy = (s) => (this.lazyFn = s, this), this.redirect = (s) => Xo({ from: this.fullPath, ...s }), this.options = e || {}, this.isRoot = !(e == null ? void 0 : e.getParentRoute), (e == null ? void 0 : e.id) && (e == null ? void 0 : e.path)) throw new Error("Route cannot have both an 'id' and a 'path' option.");
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
}
class pa extends mi {
  constructor(e) {
    super(e);
  }
}
const ya = "use", or = eo[ya], gt = typeof window < "u" ? L.useLayoutEffect : L.useEffect;
function Os(t) {
  const e = L.useRef({ value: t, prev: null }), s = e.current.value;
  return t !== s && (e.current = { value: t, prev: s }), e.current.prev;
}
function ga(t, e, s = {}, n = {}) {
  L.useEffect(() => {
    if (!t.current || n.disabled || typeof IntersectionObserver != "function") return;
    const r = new IntersectionObserver(([i]) => {
      e(i);
    }, s);
    return r.observe(t.current), () => {
      r.disconnect();
    };
  }, [e, s, n.disabled, t]);
}
function ma(t) {
  const e = L.useRef(null);
  return L.useImperativeHandle(t, () => e.current, []), e;
}
function wn(t) {
  const e = t.errorComponent ?? vn;
  return T.jsx(wa, { getResetKey: t.getResetKey, onCatch: t.onCatch, children: ({ error: s, reset: n }) => s ? L.createElement(e, { error: s, reset: n }) : t.children });
}
class wa extends L.Component {
  constructor() {
    super(...arguments), this.state = { error: null };
  }
  static getDerivedStateFromProps(e) {
    return { resetKey: e.getResetKey() };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(e, s) {
    s.error && s.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(e, s) {
    this.props.onCatch && this.props.onCatch(e, s);
  }
  render() {
    return this.props.children({ error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error, reset: () => {
      this.reset();
    } });
  }
}
function vn({ error: t }) {
  const [e, s] = L.useState(false);
  return T.jsxs("div", { style: { padding: ".5rem", maxWidth: "100%" }, children: [T.jsxs("div", { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [T.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }), T.jsx("button", { style: { appearance: "none", fontSize: ".6em", border: "1px solid currentColor", padding: ".1rem .2rem", fontWeight: "bold", borderRadius: ".25rem" }, onClick: () => s((n) => !n), children: e ? "Hide Error" : "Show Error" })] }), T.jsx("div", { style: { height: ".25rem" } }), e ? T.jsx("div", { children: T.jsx("pre", { style: { fontSize: ".7em", border: "1px solid red", borderRadius: ".25rem", padding: ".3rem", color: "red", overflow: "auto" }, children: t.message ? T.jsx("code", { children: t.message }) : null }) }) : null] });
}
function va({ children: t, fallback: e = null }) {
  return wi() ? T.jsx(Pt.Fragment, { children: t }) : T.jsx(Pt.Fragment, { children: e });
}
function wi() {
  return Pt.useSyncExternalStore(Sa, () => true, () => false);
}
function Sa() {
  return () => {
  };
}
function ba(t, e = (n) => n, s = {}) {
  const n = s.equal ?? xa;
  return to.useSyncExternalStoreWithSelector(t.subscribe, () => t.state, () => t.state, e, n);
}
function xa(t, e) {
  if (Object.is(t, e)) return true;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
  if (t instanceof Map && e instanceof Map) {
    if (t.size !== e.size) return false;
    for (const [n, r] of t) if (!e.has(n) || !Object.is(r, e.get(n))) return false;
    return true;
  }
  if (t instanceof Set && e instanceof Set) {
    if (t.size !== e.size) return false;
    for (const n of t) if (!e.has(n)) return false;
    return true;
  }
  if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
  const s = ar(t);
  if (s.length !== ar(e).length) return false;
  for (let n = 0; n < s.length; n++) if (!Object.prototype.hasOwnProperty.call(e, s[n]) || !Object.is(t[s[n]], e[s[n]])) return false;
  return true;
}
function ar(t) {
  return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
}
const Ms = L.createContext(null);
function vi() {
  return typeof document > "u" ? Ms : window.__TSR_ROUTER_CONTEXT__ ? window.__TSR_ROUTER_CONTEXT__ : (window.__TSR_ROUTER_CONTEXT__ = Ms, Ms);
}
function ne(t) {
  const e = L.useContext(vi());
  return dn(!(((t == null ? void 0 : t.warn) ?? true) && !e)), e;
}
function Y(t) {
  const e = ne({ warn: (t == null ? void 0 : t.router) === void 0 }), s = (t == null ? void 0 : t.router) || e, n = L.useRef(void 0);
  return ba(s.__store, (r) => {
    if (t == null ? void 0 : t.select) {
      if (t.structuralSharing ?? s.options.defaultStructuralSharing) {
        const i = ue(n.current, t.select(r));
        return n.current = i, i;
      }
      return t.select(r);
    }
    return r;
  });
}
const ds = L.createContext(void 0), Ra = L.createContext(void 0);
function Pe(t) {
  const e = L.useContext(t.from ? Ra : ds);
  return Y({ select: (n) => {
    const r = n.matches.find((i) => t.from ? t.from === i.routeId : i.id === e);
    if (Oe(!((t.shouldThrow ?? true) && !r), `Could not find ${t.from ? `an active match from "${t.from}"` : "a nearest match!"}`), r !== void 0) return t.select ? t.select(r) : r;
  }, structuralSharing: t.structuralSharing });
}
function Sn(t) {
  return Pe({ from: t.from, strict: t.strict, structuralSharing: t.structuralSharing, select: (e) => t.select ? t.select(e.loaderData) : e.loaderData });
}
function bn(t) {
  const { select: e, ...s } = t;
  return Pe({ ...s, select: (n) => e ? e(n.loaderDeps) : n.loaderDeps });
}
function xn(t) {
  return Pe({ from: t.from, shouldThrow: t.shouldThrow, structuralSharing: t.structuralSharing, strict: t.strict, select: (e) => {
    const s = t.strict === false ? e.params : e._strictParams;
    return t.select ? t.select(s) : s;
  } });
}
function Rn(t) {
  return Pe({ from: t.from, strict: t.strict, shouldThrow: t.shouldThrow, structuralSharing: t.structuralSharing, select: (e) => t.select ? t.select(e.search) : e.search });
}
function ps(t) {
  const e = ne();
  return L.useCallback((s) => e.navigate({ ...s, from: s.from ?? (t == null ? void 0 : t.from) }), [t == null ? void 0 : t.from, e]);
}
function td(t) {
  const e = ne(), s = ps(), n = L.useRef(null);
  return gt(() => {
    n.current !== t && (s(t), n.current = t);
  }, [e, t, s]), null;
}
function Pa(t, e) {
  const s = ne(), n = ma(e), { activeProps: r, inactiveProps: i, activeOptions: o, to: a, preload: c, preloadDelay: l, hashScrollIntoView: h, replace: u, startTransition: f, resetScroll: p, viewTransition: d, children: y, target: g, disabled: w, style: b, className: R, onClick: v, onFocus: E, onMouseEnter: M, onMouseLeave: O, onTouchStart: C, ignoreBlocker: x, params: I, search: m, hash: P, state: S, mask: k, reloadDocument: _, unsafeRelative: A, from: K, _fromLocation: F, ...B } = t, j = wi(), $ = Y({ select: (z) => z.location.search, structuralSharing: true }), xe = t.from, Me = L.useMemo(() => ({ ...t, from: xe }), [s, $, xe, t._fromLocation, t.hash, t.to, t.search, t.params, t.state, t.mask, t.unsafeRelative]), X = L.useMemo(() => s.buildLocation({ ...Me }), [s, Me]), Z = X.maskedLocation ? X.maskedLocation.publicHref : X.publicHref, N = X.maskedLocation ? X.maskedLocation.external : X.external, U = L.useMemo(() => Oa(Z, N, s.history, w), [w, N, Z, s.history]), q = L.useMemo(() => {
    if (U == null ? void 0 : U.external) return Xt(U.href) ? void 0 : U.href;
    if (!Ma(a) && !(typeof a != "string" || a.indexOf(":") === -1)) try {
      return new URL(a), Xt(a) ? void 0 : a;
    } catch {
    }
  }, [a, U]), Q = Y({ select: (z) => {
    if (q) return false;
    if (o == null ? void 0 : o.exact) {
      if (!Fo(z.location.pathname, X.pathname, s.basepath)) return false;
    } else {
      const le = es(z.location.pathname, s.basepath), Se = es(X.pathname, s.basepath);
      if (!(le.startsWith(Se) && (le.length === Se.length || le[Se.length] === "/"))) return false;
    }
    return ((o == null ? void 0 : o.includeSearch) ?? true) && !We(z.location.search, X.search, { partial: !(o == null ? void 0 : o.exact), ignoreUndefined: !(o == null ? void 0 : o.explicitUndefined) }) ? false : (o == null ? void 0 : o.includeHash) ? j && z.location.hash === X.hash : true;
  } }), V = Q ? De(r, {}) ?? Ca : Ts, re = Q ? Ts : De(i, {}) ?? Ts, Te = [R, V.className, re.className].filter(Boolean).join(" "), Ss = (b || V.style || re.style) && { ...b, ...V.style, ...re.style }, [bs, Vn] = L.useState(false), qn = L.useRef(false), Xe = t.reloadDocument || q ? false : c ?? s.options.defaultPreload, xs = l ?? s.options.defaultPreloadDelay ?? 0, Ne = L.useCallback(() => {
    s.preloadRoute({ ...Me }).catch((z) => {
      console.warn(z), console.warn(da);
    });
  }, [s, Me]), Qi = L.useCallback((z) => {
    (z == null ? void 0 : z.isIntersecting) && Ne();
  }, [Ne]);
  ga(n, Qi, Ea, { disabled: !!w || Xe !== "viewport" }), L.useEffect(() => {
    qn.current || !w && Xe === "render" && (Ne(), qn.current = true);
  }, [w, Ne, Xe]);
  const Ji = (z) => {
    const le = z.currentTarget.getAttribute("target"), Se = g !== void 0 ? g : le;
    if (!w && !Ta(z) && !z.defaultPrevented && (!Se || Se === "_self") && z.button === 0) {
      z.preventDefault(), so.flushSync(() => {
        Vn(true);
      });
      const Hn = s.subscribe("onResolved", () => {
        Hn(), Vn(false);
      });
      s.navigate({ ...Me, replace: u, resetScroll: p, hashScrollIntoView: h, startTransition: f, viewTransition: d, ignoreBlocker: x });
    }
  };
  if (q) return { ...B, ref: n, href: q, ...y && { children: y }, ...g && { target: g }, ...w && { disabled: w }, ...b && { style: b }, ...R && { className: R }, ...v && { onClick: v }, ...E && { onFocus: E }, ...M && { onMouseEnter: M }, ...O && { onMouseLeave: O }, ...C && { onTouchStart: C } };
  const Wn = (z) => {
    w || Xe && Ne();
  }, Yi = Wn, Xi = (z) => {
    if (!(w || !Xe)) if (!xs) Ne();
    else {
      const le = z.target;
      if (ft.has(le)) return;
      const Se = setTimeout(() => {
        ft.delete(le), Ne();
      }, xs);
      ft.set(le, Se);
    }
  }, Zi = (z) => {
    if (w || !Xe || !xs) return;
    const le = z.target, Se = ft.get(le);
    Se && (clearTimeout(Se), ft.delete(le));
  };
  return { ...B, ...V, ...re, href: U == null ? void 0 : U.href, ref: n, onClick: dt([v, Ji]), onFocus: dt([E, Wn]), onMouseEnter: dt([M, Xi]), onMouseLeave: dt([O, Zi]), onTouchStart: dt([C, Yi]), disabled: !!w, target: g, ...Ss && { style: Ss }, ...Te && { className: Te }, ...w && _a, ...Q && ka, ...j && bs && Ia };
}
const Ts = {}, Ca = { className: "active" }, _a = { role: "link", "aria-disabled": true }, ka = { "data-status": "active", "aria-current": "page" }, Ia = { "data-transitioning": "transitioning" }, ft = /* @__PURE__ */ new WeakMap(), Ea = { rootMargin: "100px" }, dt = (t) => (e) => {
  for (const s of t) if (s) {
    if (e.defaultPrevented) return;
    s(e);
  }
};
function Oa(t, e, s, n) {
  if (!n) return e ? { href: t, external: true } : { href: s.createHref(t) || "/", external: false };
}
function Ma(t) {
  if (typeof t != "string") return false;
  const e = t.charCodeAt(0);
  return e === 47 ? t.charCodeAt(1) !== 47 : e === 46;
}
const Si = L.forwardRef((t, e) => {
  const { _asChild: s, ...n } = t, { type: r, ...i } = Pa(n, e), o = typeof n.children == "function" ? n.children({ isActive: i["data-status"] === "active" }) : n.children;
  if (!s) {
    const { disabled: a, ...c } = i;
    return L.createElement("a", c, o);
  }
  return L.createElement(s, i, o);
});
function Ta(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
class La extends mi {
  constructor(e) {
    super(e), this.useMatch = (s) => Pe({ select: s == null ? void 0 : s.select, from: this.id, structuralSharing: s == null ? void 0 : s.structuralSharing }), this.useRouteContext = (s) => Pe({ ...s, from: this.id, select: (n) => (s == null ? void 0 : s.select) ? s.select(n.context) : n.context }), this.useSearch = (s) => Rn({ select: s == null ? void 0 : s.select, structuralSharing: s == null ? void 0 : s.structuralSharing, from: this.id }), this.useParams = (s) => xn({ select: s == null ? void 0 : s.select, structuralSharing: s == null ? void 0 : s.structuralSharing, from: this.id }), this.useLoaderDeps = (s) => bn({ ...s, from: this.id }), this.useLoaderData = (s) => Sn({ ...s, from: this.id }), this.useNavigate = () => ps({ from: this.fullPath }), this.Link = Pt.forwardRef((s, n) => T.jsx(Si, { ref: n, from: this.fullPath, ...s })), this.$$typeof = /* @__PURE__ */ Symbol.for("react.memo");
  }
}
function Aa(t) {
  return new La(t);
}
class Fa extends pa {
  constructor(e) {
    super(e), this.useMatch = (s) => Pe({ select: s == null ? void 0 : s.select, from: this.id, structuralSharing: s == null ? void 0 : s.structuralSharing }), this.useRouteContext = (s) => Pe({ ...s, from: this.id, select: (n) => (s == null ? void 0 : s.select) ? s.select(n.context) : n.context }), this.useSearch = (s) => Rn({ select: s == null ? void 0 : s.select, structuralSharing: s == null ? void 0 : s.structuralSharing, from: this.id }), this.useParams = (s) => xn({ select: s == null ? void 0 : s.select, structuralSharing: s == null ? void 0 : s.structuralSharing, from: this.id }), this.useLoaderDeps = (s) => bn({ ...s, from: this.id }), this.useLoaderData = (s) => Sn({ ...s, from: this.id }), this.useNavigate = () => ps({ from: this.fullPath }), this.Link = Pt.forwardRef((s, n) => T.jsx(Si, { ref: n, from: this.fullPath, ...s })), this.$$typeof = /* @__PURE__ */ Symbol.for("react.memo");
  }
}
function sd(t) {
  return new Fa(t);
}
function cr(t) {
  return typeof t == "object" ? new lr(t, { silent: true }).createRoute(t) : new lr(t, { silent: true }).createRoute;
}
class lr {
  constructor(e, s) {
    this.path = e, this.createRoute = (n) => {
      dn(this.silent);
      const r = Aa(n);
      return r.isRoot = false, r;
    }, this.silent = s == null ? void 0 : s.silent;
  }
}
class ur {
  constructor(e) {
    this.useMatch = (s) => Pe({ select: s == null ? void 0 : s.select, from: this.options.id, structuralSharing: s == null ? void 0 : s.structuralSharing }), this.useRouteContext = (s) => Pe({ from: this.options.id, select: (n) => (s == null ? void 0 : s.select) ? s.select(n.context) : n.context }), this.useSearch = (s) => Rn({ select: s == null ? void 0 : s.select, structuralSharing: s == null ? void 0 : s.structuralSharing, from: this.options.id }), this.useParams = (s) => xn({ select: s == null ? void 0 : s.select, structuralSharing: s == null ? void 0 : s.structuralSharing, from: this.options.id }), this.useLoaderDeps = (s) => bn({ ...s, from: this.options.id }), this.useLoaderData = (s) => Sn({ ...s, from: this.options.id }), this.useNavigate = () => {
      const s = ne();
      return ps({ from: s.routesById[this.options.id].fullPath });
    }, this.options = e, this.$$typeof = /* @__PURE__ */ Symbol.for("react.memo");
  }
}
function hr(t) {
  return typeof t == "object" ? new ur(t) : (e) => new ur({ id: t, ...e });
}
function nd(t, e) {
  let s, n, r, i;
  const o = () => (s || (s = t().then((c) => {
    s = void 0, n = c[e];
  }).catch((c) => {
    if (r = c, vo(r) && r instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
      const l = `tanstack_router_reload:${r.message}`;
      sessionStorage.getItem(l) || (sessionStorage.setItem(l, "1"), i = true);
    }
  })), s), a = function(l) {
    if (i) throw window.location.reload(), new Promise(() => {
    });
    if (r) throw r;
    if (!n) if (or) or(o());
    else throw o();
    return L.createElement(n, l);
  };
  return a.preload = o, a;
}
function Da() {
  const t = ne(), e = L.useRef({ router: t, mounted: false }), [s, n] = L.useState(false), { hasPendingMatches: r, isLoading: i } = Y({ select: (u) => ({ isLoading: u.isLoading, hasPendingMatches: u.matches.some((f) => f.status === "pending") }), structuralSharing: true }), o = Os(i), a = i || s || r, c = Os(a), l = i || r, h = Os(l);
  return t.startTransition = (u) => {
    n(true), L.startTransition(() => {
      u(), n(false);
    });
  }, L.useEffect(() => {
    const u = t.history.subscribe(t.load), f = t.buildLocation({ to: t.latestLocation.pathname, search: true, params: true, hash: true, state: true, _includeValidateSearch: true });
    return Ee(t.latestLocation.publicHref) !== Ee(f.publicHref) && t.commitLocation({ ...f, replace: true }), () => {
      u();
    };
  }, [t, t.history]), gt(() => {
    if (typeof window < "u" && t.ssr || e.current.router === t && e.current.mounted) return;
    e.current = { router: t, mounted: true }, (async () => {
      try {
        await t.load();
      } catch (f) {
        console.error(f);
      }
    })();
  }, [t]), gt(() => {
    o && !i && t.emit({ type: "onLoad", ...He(t.state) });
  }, [o, t, i]), gt(() => {
    h && !l && t.emit({ type: "onBeforeRouteMount", ...He(t.state) });
  }, [l, h, t]), gt(() => {
    if (c && !a) {
      const u = He(t.state);
      t.emit({ type: "onResolved", ...u }), t.__store.setState((f) => ({ ...f, status: "idle", resolvedLocation: f.location })), u.hrefChanged && qo(t);
    }
  }, [a, c, t]), null;
}
function Ba(t) {
  const e = Y({ select: (s) => `not-found-${s.location.pathname}-${s.status}` });
  return T.jsx(wn, { getResetKey: () => e, onCatch: (s, n) => {
    var _a5;
    if (de(s)) (_a5 = t.onCatch) == null ? void 0 : _a5.call(t, s, n);
    else throw s;
  }, errorComponent: ({ error: s }) => {
    var _a5;
    if (de(s)) return (_a5 = t.fallback) == null ? void 0 : _a5.call(t, s);
    throw s;
  }, children: t.children });
}
function Ka() {
  return T.jsx("p", { children: "Not Found" });
}
function Ze(t) {
  return T.jsx(T.Fragment, { children: t.children });
}
function bi(t, e, s) {
  return e.options.notFoundComponent ? T.jsx(e.options.notFoundComponent, { ...s }) : t.options.defaultNotFoundComponent ? T.jsx(t.options.defaultNotFoundComponent, { ...s }) : T.jsx(Ka, {});
}
function ja() {
  return ne().isScrollRestoring, null;
}
const xi = L.memo(function({ matchId: e }) {
  var _a5, _b2;
  const s = ne(), n = Y({ select: (y) => {
    var _a6;
    const g = y.matches.findIndex((b) => b.id === e), w = y.matches[g];
    return Oe(w), { routeId: w.routeId, ssr: w.ssr, _displayPending: w._displayPending, resetKey: y.loadedAt, parentRouteId: (_a6 = y.matches[g - 1]) == null ? void 0 : _a6.routeId };
  }, structuralSharing: true }), r = s.routesById[n.routeId], i = r.options.pendingComponent ?? s.options.defaultPendingComponent, o = i ? T.jsx(i, {}) : null, a = r.options.errorComponent ?? s.options.defaultErrorComponent, c = r.options.onCatch ?? s.options.defaultOnCatch, l = r.isRoot ? r.options.notFoundComponent ?? ((_a5 = s.options.notFoundRoute) == null ? void 0 : _a5.options.component) : r.options.notFoundComponent, h = n.ssr === false || n.ssr === "data-only", u = (!r.isRoot || r.options.wrapInSuspense || h) && (r.options.wrapInSuspense ?? i ?? (((_b2 = r.options.errorComponent) == null ? void 0 : _b2.preload) || h)) ? L.Suspense : Ze, f = a ? wn : Ze, p = l ? Ba : Ze, d = r.isRoot ? r.options.shellComponent ?? Ze : Ze;
  return T.jsxs(d, { children: [T.jsx(ds.Provider, { value: e, children: T.jsx(u, { fallback: o, children: T.jsx(f, { getResetKey: () => n.resetKey, errorComponent: a || vn, onCatch: (y, g) => {
    if (de(y)) throw y;
    c == null ? void 0 : c(y, g);
  }, children: T.jsx(p, { fallback: (y) => {
    if (!l || y.routeId && y.routeId !== n.routeId || !y.routeId && !r.isRoot) throw y;
    return L.createElement(l, y);
  }, children: h || n._displayPending ? T.jsx(va, { fallback: o, children: T.jsx(fr, { matchId: e }) }) : T.jsx(fr, { matchId: e }) }) }) }) }), n.parentRouteId === ye && s.options.scrollRestoration ? T.jsxs(T.Fragment, { children: [T.jsx(za, {}), T.jsx(ja, {})] }) : null] });
});
function za() {
  const t = ne(), e = L.useRef(void 0);
  return T.jsx("script", { suppressHydrationWarning: true, ref: (s) => {
    s && (e.current === void 0 || e.current.href !== t.latestLocation.href) && (t.emit({ type: "onRendered", ...He(t.state) }), e.current = t.latestLocation);
  } }, t.latestLocation.state.__TSR_key);
}
const fr = L.memo(function({ matchId: e }) {
  var _a5, _b2, _c3, _d2;
  const s = ne(), { match: n, key: r, routeId: i } = Y({ select: (c) => {
    var _a6;
    const l = c.matches.find((d) => d.id === e), h = l.routeId, f = (_a6 = s.routesById[h].options.remountDeps ?? s.options.defaultRemountDeps) == null ? void 0 : _a6({ routeId: h, loaderDeps: l.loaderDeps, params: l._strictParams, search: l._strictSearch });
    return { key: f ? JSON.stringify(f) : void 0, routeId: h, match: { id: l.id, status: l.status, error: l.error, invalid: l.invalid, _forcePending: l._forcePending, _displayPending: l._displayPending } };
  }, structuralSharing: true }), o = s.routesById[i], a = L.useMemo(() => {
    const c = o.options.component ?? s.options.defaultComponent;
    return c ? T.jsx(c, {}, r) : T.jsx($a, {});
  }, [r, o.options.component, s.options.defaultComponent]);
  if (n._displayPending) throw (_a5 = s.getMatch(n.id)) == null ? void 0 : _a5._nonReactive.displayPendingPromise;
  if (n._forcePending) throw (_b2 = s.getMatch(n.id)) == null ? void 0 : _b2._nonReactive.minPendingPromise;
  if (n.status === "pending") {
    const c = o.options.pendingMinMs ?? s.options.defaultPendingMinMs;
    if (c) {
      const l = s.getMatch(n.id);
      if (l && !l._nonReactive.minPendingPromise) {
        const h = rt();
        l._nonReactive.minPendingPromise = h, setTimeout(() => {
          h.resolve(), l._nonReactive.minPendingPromise = void 0;
        }, c);
      }
    }
    throw (_c3 = s.getMatch(n.id)) == null ? void 0 : _c3._nonReactive.loadPromise;
  }
  if (n.status === "notFound") return Oe(de(n.error)), bi(s, o, n.error);
  if (n.status === "redirected") throw Oe(me(n.error)), (_d2 = s.getMatch(n.id)) == null ? void 0 : _d2._nonReactive.loadPromise;
  if (n.status === "error") throw n.error;
  return a;
}), $a = L.memo(function() {
  const e = ne(), s = L.useContext(ds), n = Y({ select: (l) => {
    var _a5;
    return (_a5 = l.matches.find((h) => h.id === s)) == null ? void 0 : _a5.routeId;
  } }), r = e.routesById[n], i = Y({ select: (l) => {
    const u = l.matches.find((f) => f.id === s);
    return Oe(u), u.globalNotFound;
  } }), o = Y({ select: (l) => {
    var _a5;
    const h = l.matches, u = h.findIndex((f) => f.id === s);
    return (_a5 = h[u + 1]) == null ? void 0 : _a5.id;
  } }), a = e.options.defaultPendingComponent ? T.jsx(e.options.defaultPendingComponent, {}) : null;
  if (i) return bi(e, r, void 0);
  if (!o) return null;
  const c = T.jsx(xi, { matchId: o });
  return n === ye ? T.jsx(L.Suspense, { fallback: a, children: c }) : c;
});
function Na() {
  const t = ne(), s = t.routesById[ye].options.pendingComponent ?? t.options.defaultPendingComponent, n = s ? T.jsx(s, {}) : null, r = typeof document < "u" && t.ssr ? Ze : L.Suspense, i = T.jsxs(r, { fallback: n, children: [T.jsx(Da, {}), T.jsx(Ua, {})] });
  return t.options.InnerWrap ? T.jsx(t.options.InnerWrap, { children: i }) : i;
}
function Ua() {
  const t = ne(), e = Y({ select: (r) => {
    var _a5;
    return (_a5 = r.matches[0]) == null ? void 0 : _a5.id;
  } }), s = Y({ select: (r) => r.loadedAt }), n = e ? T.jsx(xi, { matchId: e }) : null;
  return T.jsx(ds.Provider, { value: e, children: t.options.disableGlobalCatchBoundary ? n : T.jsx(wn, { getResetKey: () => s, errorComponent: vn, onCatch: (r) => {
    dn(false, r.message || r.toString());
  }, children: n }) });
}
const rd = (t) => new Va(t);
class Va extends oa {
  constructor(e) {
    super(e);
  }
}
typeof globalThis < "u" ? (globalThis.createFileRoute = cr, globalThis.createLazyFileRoute = hr) : typeof window < "u" && (window.createFileRoute = cr, window.createLazyFileRoute = hr);
function qa({ router: t, children: e, ...s }) {
  Object.keys(s).length > 0 && t.update({ ...t.options, ...s, context: { ...t.options.context, ...s.context } });
  const n = vi(), r = T.jsx(n.Provider, { value: t, children: e });
  return t.options.Wrap ? T.jsx(t.options.Wrap, { children: r }) : r;
}
function id({ router: t, ...e }) {
  return T.jsx(qa, { router: t, ...e, children: T.jsx(Na, {}) });
}
function od(t) {
  return Y({ select: (e) => e.location });
}
function Wa({ tag: t, attrs: e, children: s, nonce: n }) {
  switch (t) {
    case "title":
      return T.jsx("title", { ...e, suppressHydrationWarning: true, children: s });
    case "meta":
      return T.jsx("meta", { ...e, suppressHydrationWarning: true });
    case "link":
      return T.jsx("link", { ...e, nonce: n, suppressHydrationWarning: true });
    case "style":
      return T.jsx("style", { ...e, dangerouslySetInnerHTML: { __html: s }, nonce: n });
    case "script":
      return T.jsx(Ha, { attrs: e, children: s });
    default:
      return null;
  }
}
function Ha({ attrs: t, children: e }) {
  ne(), L.useEffect(() => {
    if (t == null ? void 0 : t.src) {
      const s = (() => {
        try {
          const i = document.baseURI || window.location.href;
          return new URL(t.src, i).href;
        } catch {
          return t.src;
        }
      })();
      if (Array.from(document.querySelectorAll("script[src]")).find((i) => i.src === s)) return;
      const r = document.createElement("script");
      for (const [i, o] of Object.entries(t)) i !== "suppressHydrationWarning" && o !== void 0 && o !== false && r.setAttribute(i, typeof o == "boolean" ? "" : String(o));
      return document.head.appendChild(r), () => {
        r.parentNode && r.parentNode.removeChild(r);
      };
    }
    if (typeof e == "string") {
      const s = typeof (t == null ? void 0 : t.type) == "string" ? t.type : "text/javascript", n = typeof (t == null ? void 0 : t.nonce) == "string" ? t.nonce : void 0;
      if (Array.from(document.querySelectorAll("script:not([src])")).find((o) => {
        if (!(o instanceof HTMLScriptElement)) return false;
        const a = o.getAttribute("type") ?? "text/javascript", c = o.getAttribute("nonce") ?? void 0;
        return o.textContent === e && a === s && c === n;
      })) return;
      const i = document.createElement("script");
      if (i.textContent = e, t) for (const [o, a] of Object.entries(t)) o !== "suppressHydrationWarning" && a !== void 0 && a !== false && i.setAttribute(o, typeof a == "boolean" ? "" : String(a));
      return document.head.appendChild(i), () => {
        i.parentNode && i.parentNode.removeChild(i);
      };
    }
  }, [t, e]);
  {
    const { src: s, ...n } = t || {};
    return T.jsx("script", { suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: "" }, ...n });
  }
}
const Ga = () => {
  var _a5;
  const t = ne(), e = (_a5 = t.options.ssr) == null ? void 0 : _a5.nonce, s = Y({ select: (c) => c.matches.map((l) => l.meta).filter(Boolean) }), n = L.useMemo(() => {
    const c = [], l = {};
    let h;
    for (let u = s.length - 1; u >= 0; u--) {
      const f = s[u];
      for (let p = f.length - 1; p >= 0; p--) {
        const d = f[p];
        if (d) if (d.title) h || (h = { tag: "title", children: d.title });
        else if ("script:ld+json" in d) try {
          const y = JSON.stringify(d["script:ld+json"]);
          c.push({ tag: "script", attrs: { type: "application/ld+json" }, children: Ro(y) });
        } catch {
        }
        else {
          const y = d.name ?? d.property;
          if (y) {
            if (l[y]) continue;
            l[y] = true;
          }
          c.push({ tag: "meta", attrs: { ...d, nonce: e } });
        }
      }
    }
    return h && c.push(h), e && c.push({ tag: "meta", attrs: { property: "csp-nonce", content: e } }), c.reverse(), c;
  }, [s, e]), r = Y({ select: (c) => {
    var _a6;
    const l = c.matches.map((f) => f.links).filter(Boolean).flat(1).map((f) => ({ tag: "link", attrs: { ...f, nonce: e } })), h = (_a6 = t.ssr) == null ? void 0 : _a6.manifest, u = c.matches.map((f) => {
      var _a7;
      return ((_a7 = h == null ? void 0 : h.routes[f.routeId]) == null ? void 0 : _a7.assets) ?? [];
    }).filter(Boolean).flat(1).filter((f) => f.tag === "link").map((f) => ({ tag: "link", attrs: { ...f.attrs, suppressHydrationWarning: true, nonce: e } }));
    return [...l, ...u];
  }, structuralSharing: true }), i = Y({ select: (c) => {
    const l = [];
    return c.matches.map((h) => t.looseRoutesById[h.routeId]).forEach((h) => {
      var _a6, _b2, _c3, _d2;
      return (_d2 = (_c3 = (_b2 = (_a6 = t.ssr) == null ? void 0 : _a6.manifest) == null ? void 0 : _b2.routes[h.id]) == null ? void 0 : _c3.preloads) == null ? void 0 : _d2.filter(Boolean).forEach((u) => {
        l.push({ tag: "link", attrs: { rel: "modulepreload", href: u, nonce: e } });
      });
    }), l;
  }, structuralSharing: true }), o = Y({ select: (c) => c.matches.map((l) => l.styles).flat(1).filter(Boolean).map(({ children: l, ...h }) => ({ tag: "style", attrs: { ...h, nonce: e }, children: l })), structuralSharing: true }), a = Y({ select: (c) => c.matches.map((l) => l.headScripts).flat(1).filter(Boolean).map(({ children: l, ...h }) => ({ tag: "script", attrs: { ...h, nonce: e }, children: l })), structuralSharing: true });
  return Qa([...n, ...i, ...r, ...o, ...a], (c) => JSON.stringify(c));
};
function Qa(t, e) {
  const s = /* @__PURE__ */ new Set();
  return t.filter((n) => {
    const r = e(n);
    return s.has(r) ? false : (s.add(r), true);
  });
}
function ad() {
  var _a5;
  const t = Ga(), s = (_a5 = ne().options.ssr) == null ? void 0 : _a5.nonce;
  return T.jsx(T.Fragment, { children: t.map((n) => L.createElement(Wa, { ...n, key: `tsr-meta-${JSON.stringify(n)}`, nonce: s })) });
}
var ys = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    return this.listeners.add(t), this.onSubscribe(), () => {
      this.listeners.delete(t), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Ja = { setTimeout: (t, e) => setTimeout(t, e), clearTimeout: (t) => clearTimeout(t), setInterval: (t, e) => setInterval(t, e), clearInterval: (t) => clearInterval(t) }, Ya = (_a2 = class {
  constructor() {
    __privateAdd(this, _e2, Ja);
    __privateAdd(this, _t2, false);
  }
  setTimeoutProvider(t) {
    __privateSet(this, _e2, t);
  }
  setTimeout(t, e) {
    return __privateGet(this, _e2).setTimeout(t, e);
  }
  clearTimeout(t) {
    __privateGet(this, _e2).clearTimeout(t);
  }
  setInterval(t, e) {
    return __privateGet(this, _e2).setInterval(t, e);
  }
  clearInterval(t) {
    __privateGet(this, _e2).clearInterval(t);
  }
}, _e2 = new WeakMap(), _t2 = new WeakMap(), _a2), qs = new Ya();
function Xa(t) {
  setTimeout(t, 0);
}
var gs = typeof window > "u" || "Deno" in globalThis;
function be() {
}
function Za(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function ec(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function tc(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Ws(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function sc(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function dr(t, e) {
  const { type: s = "all", exact: n, fetchStatus: r, predicate: i, queryKey: o, stale: a } = t;
  if (o) {
    if (n) {
      if (e.queryHash !== Pn(o, e.options)) return false;
    } else if (!Et(e.queryKey, o)) return false;
  }
  if (s !== "all") {
    const c = e.isActive();
    if (s === "active" && !c || s === "inactive" && c) return false;
  }
  return !(typeof a == "boolean" && e.isStale() !== a || r && r !== e.state.fetchStatus || i && !i(e));
}
function pr(t, e) {
  const { exact: s, status: n, predicate: r, mutationKey: i } = t;
  if (i) {
    if (!e.options.mutationKey) return false;
    if (s) {
      if (It(e.options.mutationKey) !== It(i)) return false;
    } else if (!Et(e.options.mutationKey, i)) return false;
  }
  return !(n && e.state.status !== n || r && !r(e));
}
function Pn(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || It)(t);
}
function It(t) {
  return JSON.stringify(t, (e, s) => Hs(s) ? Object.keys(s).sort().reduce((n, r) => (n[r] = s[r], n), {}) : s);
}
function Et(t, e) {
  return t === e ? true : typeof t != typeof e ? false : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every((s) => Et(t[s], e[s])) : false;
}
var nc = Object.prototype.hasOwnProperty;
function Ri(t, e, s = 0) {
  if (t === e) return t;
  if (s > 500) return e;
  const n = yr(t) && yr(e);
  if (!n && !(Hs(t) && Hs(e))) return e;
  const i = (n ? t : Object.keys(t)).length, o = n ? e : Object.keys(e), a = o.length, c = n ? new Array(a) : {};
  let l = 0;
  for (let h = 0; h < a; h++) {
    const u = n ? h : o[h], f = t[u], p = e[u];
    if (f === p) {
      c[u] = f, (n ? h < i : nc.call(t, u)) && l++;
      continue;
    }
    if (f === null || p === null || typeof f != "object" || typeof p != "object") {
      c[u] = p;
      continue;
    }
    const d = Ri(f, p, s + 1);
    c[u] = d, d === f && l++;
  }
  return i === a && l === i ? t : c;
}
function yr(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Hs(t) {
  if (!gr(t)) return false;
  const e = t.constructor;
  if (e === void 0) return true;
  const s = e.prototype;
  return !(!gr(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function gr(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function rc(t) {
  return new Promise((e) => {
    qs.setTimeout(e, t);
  });
}
function ic(t, e, s) {
  return typeof s.structuralSharing == "function" ? s.structuralSharing(t, e) : s.structuralSharing !== false ? Ri(t, e) : e;
}
function oc(t, e, s = 0) {
  const n = [...t, e];
  return s && n.length > s ? n.slice(1) : n;
}
function ac(t, e, s = 0) {
  const n = [e, ...t];
  return s && n.length > s ? n.slice(0, -1) : n;
}
var Cn = /* @__PURE__ */ Symbol();
function Pi(t, e) {
  return !t.queryFn && (e == null ? void 0 : e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Cn ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
}
function cc(t, e, s) {
  let n = false, r;
  return Object.defineProperty(t, "signal", { enumerable: true, get: () => (r ?? (r = e()), n || (n = true, r.aborted ? s() : r.addEventListener("abort", s, { once: true })), r) }), t;
}
var lc = (_b = class extends ys {
  constructor() {
    super();
    __privateAdd(this, _e3);
    __privateAdd(this, _t3);
    __privateAdd(this, _s2);
    __privateSet(this, _s2, (t) => {
      if (!gs && window.addEventListener) {
        const e = () => t();
        return window.addEventListener("visibilitychange", e, false), () => {
          window.removeEventListener("visibilitychange", e);
        };
      }
    });
  }
  onSubscribe() {
    __privateGet(this, _t3) || this.setEventListener(__privateGet(this, _s2));
  }
  onUnsubscribe() {
    var _a5;
    this.hasListeners() || ((_a5 = __privateGet(this, _t3)) == null ? void 0 : _a5.call(this), __privateSet(this, _t3, void 0));
  }
  setEventListener(t) {
    var _a5;
    __privateSet(this, _s2, t), (_a5 = __privateGet(this, _t3)) == null ? void 0 : _a5.call(this), __privateSet(this, _t3, t((e) => {
      typeof e == "boolean" ? this.setFocused(e) : this.onFocus();
    }));
  }
  setFocused(t) {
    __privateGet(this, _e3) !== t && (__privateSet(this, _e3, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((e) => {
      e(t);
    });
  }
  isFocused() {
    var _a5;
    return typeof __privateGet(this, _e3) == "boolean" ? __privateGet(this, _e3) : ((_a5 = globalThis.document) == null ? void 0 : _a5.visibilityState) !== "hidden";
  }
}, _e3 = new WeakMap(), _t3 = new WeakMap(), _s2 = new WeakMap(), _b), Ci = new lc();
function uc() {
  let t, e;
  const s = new Promise((r, i) => {
    t = r, e = i;
  });
  s.status = "pending", s.catch(() => {
  });
  function n(r) {
    Object.assign(s, r), delete s.resolve, delete s.reject;
  }
  return s.resolve = (r) => {
    n({ status: "fulfilled", value: r }), t(r);
  }, s.reject = (r) => {
    n({ status: "rejected", reason: r }), e(r);
  }, s;
}
var hc = Xa;
function fc() {
  let t = [], e = 0, s = (a) => {
    a();
  }, n = (a) => {
    a();
  }, r = hc;
  const i = (a) => {
    e ? t.push(a) : r(() => {
      s(a);
    });
  }, o = () => {
    const a = t;
    t = [], a.length && r(() => {
      n(() => {
        a.forEach((c) => {
          s(c);
        });
      });
    });
  };
  return { batch: (a) => {
    let c;
    e++;
    try {
      c = a();
    } finally {
      e--, e || o();
    }
    return c;
  }, batchCalls: (a) => (...c) => {
    i(() => {
      a(...c);
    });
  }, schedule: i, setNotifyFunction: (a) => {
    s = a;
  }, setBatchNotifyFunction: (a) => {
    n = a;
  }, setScheduler: (a) => {
    r = a;
  } };
}
var ie = fc(), dc = (_c2 = class extends ys {
  constructor() {
    super();
    __privateAdd(this, _e4, true);
    __privateAdd(this, _t4);
    __privateAdd(this, _s3);
    __privateSet(this, _s3, (t) => {
      if (!gs && window.addEventListener) {
        const e = () => t(true), s = () => t(false);
        return window.addEventListener("online", e, false), window.addEventListener("offline", s, false), () => {
          window.removeEventListener("online", e), window.removeEventListener("offline", s);
        };
      }
    });
  }
  onSubscribe() {
    __privateGet(this, _t4) || this.setEventListener(__privateGet(this, _s3));
  }
  onUnsubscribe() {
    var _a5;
    this.hasListeners() || ((_a5 = __privateGet(this, _t4)) == null ? void 0 : _a5.call(this), __privateSet(this, _t4, void 0));
  }
  setEventListener(t) {
    var _a5;
    __privateSet(this, _s3, t), (_a5 = __privateGet(this, _t4)) == null ? void 0 : _a5.call(this), __privateSet(this, _t4, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    __privateGet(this, _e4) !== t && (__privateSet(this, _e4, t), this.listeners.forEach((s) => {
      s(t);
    }));
  }
  isOnline() {
    return __privateGet(this, _e4);
  }
}, _e4 = new WeakMap(), _t4 = new WeakMap(), _s3 = new WeakMap(), _c2), ns = new dc();
function pc(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function _i(t) {
  return (t ?? "online") === "online" ? ns.isOnline() : true;
}
var Gs = class extends Error {
  constructor(t) {
    super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function ki(t) {
  let e = false, s = 0, n;
  const r = uc(), i = () => r.status !== "pending", o = (y) => {
    var _a5;
    if (!i()) {
      const g = new Gs(y);
      f(g), (_a5 = t.onCancel) == null ? void 0 : _a5.call(t, g);
    }
  }, a = () => {
    e = true;
  }, c = () => {
    e = false;
  }, l = () => Ci.isFocused() && (t.networkMode === "always" || ns.isOnline()) && t.canRun(), h = () => _i(t.networkMode) && t.canRun(), u = (y) => {
    i() || (n == null ? void 0 : n(), r.resolve(y));
  }, f = (y) => {
    i() || (n == null ? void 0 : n(), r.reject(y));
  }, p = () => new Promise((y) => {
    var _a5;
    n = (g) => {
      (i() || l()) && y(g);
    }, (_a5 = t.onPause) == null ? void 0 : _a5.call(t);
  }).then(() => {
    var _a5;
    n = void 0, i() || ((_a5 = t.onContinue) == null ? void 0 : _a5.call(t));
  }), d = () => {
    if (i()) return;
    let y;
    const g = s === 0 ? t.initialPromise : void 0;
    try {
      y = g ?? t.fn();
    } catch (w) {
      y = Promise.reject(w);
    }
    Promise.resolve(y).then(u).catch((w) => {
      var _a5;
      if (i()) return;
      const b = t.retry ?? (gs ? 0 : 3), R = t.retryDelay ?? pc, v = typeof R == "function" ? R(s, w) : R, E = b === true || typeof b == "number" && s < b || typeof b == "function" && b(s, w);
      if (e || !E) {
        f(w);
        return;
      }
      s++, (_a5 = t.onFail) == null ? void 0 : _a5.call(t, s, w), rc(v).then(() => l() ? void 0 : p()).then(() => {
        e ? f(w) : d();
      });
    });
  };
  return { promise: r, status: () => r.status, cancel: o, continue: () => (n == null ? void 0 : n(), r), cancelRetry: a, continueRetry: c, canStart: h, start: () => (h() ? d() : p().then(d), r) };
}
var Ii = (_d = class {
  constructor() {
    __privateAdd(this, _e5);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), ec(this.gcTime) && __privateSet(this, _e5, qs.setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(this.gcTime || 0, t ?? (gs ? 1 / 0 : 300 * 1e3));
  }
  clearGcTimeout() {
    __privateGet(this, _e5) && (qs.clearTimeout(__privateGet(this, _e5)), __privateSet(this, _e5, void 0));
  }
}, _e5 = new WeakMap(), _d), yc = (_e7 = class extends Ii {
  constructor(t) {
    super();
    __privateAdd(this, _yc_instances);
    __privateAdd(this, _e6);
    __privateAdd(this, _t5);
    __privateAdd(this, _s4);
    __privateAdd(this, _n2);
    __privateAdd(this, _r2);
    __privateAdd(this, _o2);
    __privateAdd(this, _a3);
    __privateSet(this, _a3, false), __privateSet(this, _o2, t.defaultOptions), this.setOptions(t.options), this.observers = [], __privateSet(this, _n2, t.client), __privateSet(this, _s4, __privateGet(this, _n2).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, __privateSet(this, _e6, wr(this.options)), this.state = t.state ?? __privateGet(this, _e6), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var _a5;
    return (_a5 = __privateGet(this, _r2)) == null ? void 0 : _a5.promise;
  }
  setOptions(t) {
    if (this.options = { ...__privateGet(this, _o2), ...t }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
      const e = wr(this.options);
      e.data !== void 0 && (this.setState(mr(e.data, e.dataUpdatedAt)), __privateSet(this, _e6, e));
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && __privateGet(this, _s4).remove(this);
  }
  setData(t, e) {
    const s = ic(this.state.data, t, this.options);
    return __privateMethod(this, _yc_instances, i_fn).call(this, { data: s, type: "success", dataUpdatedAt: e == null ? void 0 : e.updatedAt, manual: e == null ? void 0 : e.manual }), s;
  }
  setState(t, e) {
    __privateMethod(this, _yc_instances, i_fn).call(this, { type: "setState", state: t, setStateOptions: e });
  }
  cancel(t) {
    var _a5, _b2;
    const e = (_a5 = __privateGet(this, _r2)) == null ? void 0 : _a5.promise;
    return (_b2 = __privateGet(this, _r2)) == null ? void 0 : _b2.cancel(t), e ? e.then(be).catch(be) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: true });
  }
  reset() {
    this.destroy(), this.setState(__privateGet(this, _e6));
  }
  isActive() {
    return this.observers.some((t) => sc(t.options.enabled, this) !== false);
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Cn || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some((t) => Ws(t.options.staleTime, this) === "static") : false;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some((t) => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(t = 0) {
    return this.state.data === void 0 ? true : t === "static" ? false : this.state.isInvalidated ? true : !tc(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var _a5, _b2;
    (_a5 = this.observers.find((e) => e.shouldFetchOnWindowFocus())) == null ? void 0 : _a5.refetch({ cancelRefetch: false }), (_b2 = __privateGet(this, _r2)) == null ? void 0 : _b2.continue();
  }
  onOnline() {
    var _a5, _b2;
    (_a5 = this.observers.find((e) => e.shouldFetchOnReconnect())) == null ? void 0 : _a5.refetch({ cancelRefetch: false }), (_b2 = __privateGet(this, _r2)) == null ? void 0 : _b2.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), __privateGet(this, _s4).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((e) => e !== t), this.observers.length || (__privateGet(this, _r2) && (__privateGet(this, _a3) ? __privateGet(this, _r2).cancel({ revert: true }) : __privateGet(this, _r2).cancelRetry()), this.scheduleGc()), __privateGet(this, _s4).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || __privateMethod(this, _yc_instances, i_fn).call(this, { type: "invalidate" });
  }
  async fetch(t, e) {
    var _a5, _b2, _c3, _d2, _e28, _f3, _g2, _h3, _i4, _j, _k, _l2;
    if (this.state.fetchStatus !== "idle" && ((_a5 = __privateGet(this, _r2)) == null ? void 0 : _a5.status()) !== "rejected") {
      if (this.state.data !== void 0 && (e == null ? void 0 : e.cancelRefetch)) this.cancel({ silent: true });
      else if (__privateGet(this, _r2)) return __privateGet(this, _r2).continueRetry(), __privateGet(this, _r2).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const a = this.observers.find((c) => c.options.queryFn);
      a && this.setOptions(a.options);
    }
    const s = new AbortController(), n = (a) => {
      Object.defineProperty(a, "signal", { enumerable: true, get: () => (__privateSet(this, _a3, true), s.signal) });
    }, r = () => {
      const a = Pi(this.options, e), l = (() => {
        const h = { client: __privateGet(this, _n2), queryKey: this.queryKey, meta: this.meta };
        return n(h), h;
      })();
      return __privateSet(this, _a3, false), this.options.persister ? this.options.persister(a, l, this) : a(l);
    }, o = (() => {
      const a = { fetchOptions: e, options: this.options, queryKey: this.queryKey, client: __privateGet(this, _n2), state: this.state, fetchFn: r };
      return n(a), a;
    })();
    (_b2 = this.options.behavior) == null ? void 0 : _b2.onFetch(o, this), __privateSet(this, _t5, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_c3 = o.fetchOptions) == null ? void 0 : _c3.meta)) && __privateMethod(this, _yc_instances, i_fn).call(this, { type: "fetch", meta: (_d2 = o.fetchOptions) == null ? void 0 : _d2.meta }), __privateSet(this, _r2, ki({ initialPromise: e == null ? void 0 : e.initialPromise, fn: o.fetchFn, onCancel: (a) => {
      a instanceof Gs && a.revert && this.setState({ ...__privateGet(this, _t5), fetchStatus: "idle" }), s.abort();
    }, onFail: (a, c) => {
      __privateMethod(this, _yc_instances, i_fn).call(this, { type: "failed", failureCount: a, error: c });
    }, onPause: () => {
      __privateMethod(this, _yc_instances, i_fn).call(this, { type: "pause" });
    }, onContinue: () => {
      __privateMethod(this, _yc_instances, i_fn).call(this, { type: "continue" });
    }, retry: o.options.retry, retryDelay: o.options.retryDelay, networkMode: o.options.networkMode, canRun: () => true }));
    try {
      const a = await __privateGet(this, _r2).start();
      if (a === void 0) throw new Error(`${this.queryHash} data is undefined`);
      return this.setData(a), (_f3 = (_e28 = __privateGet(this, _s4).config).onSuccess) == null ? void 0 : _f3.call(_e28, a, this), (_h3 = (_g2 = __privateGet(this, _s4).config).onSettled) == null ? void 0 : _h3.call(_g2, a, this.state.error, this), a;
    } catch (a) {
      if (a instanceof Gs) {
        if (a.silent) return __privateGet(this, _r2).promise;
        if (a.revert) {
          if (this.state.data === void 0) throw a;
          return this.state.data;
        }
      }
      throw __privateMethod(this, _yc_instances, i_fn).call(this, { type: "error", error: a }), (_j = (_i4 = __privateGet(this, _s4).config).onError) == null ? void 0 : _j.call(_i4, a, this), (_l2 = (_k = __privateGet(this, _s4).config).onSettled) == null ? void 0 : _l2.call(_k, this.state.data, a, this), a;
    } finally {
      this.scheduleGc();
    }
  }
}, _e6 = new WeakMap(), _t5 = new WeakMap(), _s4 = new WeakMap(), _n2 = new WeakMap(), _r2 = new WeakMap(), _o2 = new WeakMap(), _a3 = new WeakMap(), _yc_instances = new WeakSet(), i_fn = function(t) {
  const e = (s) => {
    switch (t.type) {
      case "failed":
        return { ...s, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
      case "pause":
        return { ...s, fetchStatus: "paused" };
      case "continue":
        return { ...s, fetchStatus: "fetching" };
      case "fetch":
        return { ...s, ...gc(s.data, this.options), fetchMeta: t.meta ?? null };
      case "success":
        const n = { ...s, ...mr(t.data, t.dataUpdatedAt), dataUpdateCount: s.dataUpdateCount + 1, ...!t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null } };
        return __privateSet(this, _t5, t.manual ? n : void 0), n;
      case "error":
        const r = t.error;
        return { ...s, error: r, errorUpdateCount: s.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: s.fetchFailureCount + 1, fetchFailureReason: r, fetchStatus: "idle", status: "error", isInvalidated: true };
      case "invalidate":
        return { ...s, isInvalidated: true };
      case "setState":
        return { ...s, ...t.state };
    }
  };
  this.state = e(this.state), ie.batch(() => {
    this.observers.forEach((s) => {
      s.onQueryUpdate();
    }), __privateGet(this, _s4).notify({ query: this, type: "updated", action: t });
  });
}, _e7);
function gc(t, e) {
  return { fetchFailureCount: 0, fetchFailureReason: null, fetchStatus: _i(e.networkMode) ? "fetching" : "paused", ...t === void 0 && { error: null, status: "pending" } };
}
function mr(t, e) {
  return { data: t, dataUpdatedAt: e ?? Date.now(), error: null, isInvalidated: false, status: "success" };
}
function wr(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, s = e !== void 0, n = s ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return { data: e, dataUpdateCount: 0, dataUpdatedAt: s ? n ?? Date.now() : 0, error: null, errorUpdateCount: 0, errorUpdatedAt: 0, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: null, isInvalidated: false, status: s ? "success" : "pending", fetchStatus: "idle" };
}
function vr(t) {
  return { onFetch: (e, s) => {
    var _a5, _b2, _c3, _d2, _e28;
    const n = e.options, r = (_c3 = (_b2 = (_a5 = e.fetchOptions) == null ? void 0 : _a5.meta) == null ? void 0 : _b2.fetchMore) == null ? void 0 : _c3.direction, i = ((_d2 = e.state.data) == null ? void 0 : _d2.pages) || [], o = ((_e28 = e.state.data) == null ? void 0 : _e28.pageParams) || [];
    let a = { pages: [], pageParams: [] }, c = 0;
    const l = async () => {
      let h = false;
      const u = (d) => {
        cc(d, () => e.signal, () => h = true);
      }, f = Pi(e.options, e.fetchOptions), p = async (d, y, g) => {
        if (h) return Promise.reject();
        if (y == null && d.pages.length) return Promise.resolve(d);
        const b = (() => {
          const M = { client: e.client, queryKey: e.queryKey, pageParam: y, direction: g ? "backward" : "forward", meta: e.options.meta };
          return u(M), M;
        })(), R = await f(b), { maxPages: v } = e.options, E = g ? ac : oc;
        return { pages: E(d.pages, R, v), pageParams: E(d.pageParams, y, v) };
      };
      if (r && i.length) {
        const d = r === "backward", y = d ? mc : Sr, g = { pages: i, pageParams: o }, w = y(n, g);
        a = await p(g, w, d);
      } else {
        const d = t ?? i.length;
        do {
          const y = c === 0 ? o[0] ?? n.initialPageParam : Sr(n, a);
          if (c > 0 && y == null) break;
          a = await p(a, y), c++;
        } while (c < d);
      }
      return a;
    };
    e.options.persister ? e.fetchFn = () => {
      var _a6, _b3;
      return (_b3 = (_a6 = e.options).persister) == null ? void 0 : _b3.call(_a6, l, { client: e.client, queryKey: e.queryKey, meta: e.options.meta, signal: e.signal }, s);
    } : e.fetchFn = l;
  } };
}
function Sr(t, { pages: e, pageParams: s }) {
  const n = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(e[n], e, s[n], s) : void 0;
}
function mc(t, { pages: e, pageParams: s }) {
  var _a5;
  return e.length > 0 ? (_a5 = t.getPreviousPageParam) == null ? void 0 : _a5.call(t, e[0], e, s[0], s) : void 0;
}
var wc = (_f2 = class extends Ii {
  constructor(t) {
    super();
    __privateAdd(this, _wc_instances);
    __privateAdd(this, _e8);
    __privateAdd(this, _t6);
    __privateAdd(this, _s5);
    __privateAdd(this, _n3);
    __privateSet(this, _e8, t.client), this.mutationId = t.mutationId, __privateSet(this, _s5, t.mutationCache), __privateSet(this, _t6, []), this.state = t.state || vc(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    __privateGet(this, _t6).includes(t) || (__privateGet(this, _t6).push(t), this.clearGcTimeout(), __privateGet(this, _s5).notify({ type: "observerAdded", mutation: this, observer: t }));
  }
  removeObserver(t) {
    __privateSet(this, _t6, __privateGet(this, _t6).filter((e) => e !== t)), this.scheduleGc(), __privateGet(this, _s5).notify({ type: "observerRemoved", mutation: this, observer: t });
  }
  optionalRemove() {
    __privateGet(this, _t6).length || (this.state.status === "pending" ? this.scheduleGc() : __privateGet(this, _s5).remove(this));
  }
  continue() {
    var _a5;
    return ((_a5 = __privateGet(this, _n3)) == null ? void 0 : _a5.continue()) ?? this.execute(this.state.variables);
  }
  async execute(t) {
    var _a5, _b2, _c3, _d2, _e28, _f3, _g2, _h3, _i4, _j, _k, _l2, _m, _n6, _o4, _p, _q, _r4;
    const e = () => {
      __privateMethod(this, _wc_instances, r_fn).call(this, { type: "continue" });
    }, s = { client: __privateGet(this, _e8), meta: this.options.meta, mutationKey: this.options.mutationKey };
    __privateSet(this, _n3, ki({ fn: () => this.options.mutationFn ? this.options.mutationFn(t, s) : Promise.reject(new Error("No mutationFn found")), onFail: (i, o) => {
      __privateMethod(this, _wc_instances, r_fn).call(this, { type: "failed", failureCount: i, error: o });
    }, onPause: () => {
      __privateMethod(this, _wc_instances, r_fn).call(this, { type: "pause" });
    }, onContinue: e, retry: this.options.retry ?? 0, retryDelay: this.options.retryDelay, networkMode: this.options.networkMode, canRun: () => __privateGet(this, _s5).canRun(this) }));
    const n = this.state.status === "pending", r = !__privateGet(this, _n3).canStart();
    try {
      if (n) e();
      else {
        __privateMethod(this, _wc_instances, r_fn).call(this, { type: "pending", variables: t, isPaused: r }), __privateGet(this, _s5).config.onMutate && await __privateGet(this, _s5).config.onMutate(t, this, s);
        const o = await ((_b2 = (_a5 = this.options).onMutate) == null ? void 0 : _b2.call(_a5, t, s));
        o !== this.state.context && __privateMethod(this, _wc_instances, r_fn).call(this, { type: "pending", context: o, variables: t, isPaused: r });
      }
      const i = await __privateGet(this, _n3).start();
      return await ((_d2 = (_c3 = __privateGet(this, _s5).config).onSuccess) == null ? void 0 : _d2.call(_c3, i, t, this.state.context, this, s)), await ((_f3 = (_e28 = this.options).onSuccess) == null ? void 0 : _f3.call(_e28, i, t, this.state.context, s)), await ((_h3 = (_g2 = __privateGet(this, _s5).config).onSettled) == null ? void 0 : _h3.call(_g2, i, null, this.state.variables, this.state.context, this, s)), await ((_j = (_i4 = this.options).onSettled) == null ? void 0 : _j.call(_i4, i, null, t, this.state.context, s)), __privateMethod(this, _wc_instances, r_fn).call(this, { type: "success", data: i }), i;
    } catch (i) {
      try {
        await ((_l2 = (_k = __privateGet(this, _s5).config).onError) == null ? void 0 : _l2.call(_k, i, t, this.state.context, this, s));
      } catch (o) {
        Promise.reject(o);
      }
      try {
        await ((_n6 = (_m = this.options).onError) == null ? void 0 : _n6.call(_m, i, t, this.state.context, s));
      } catch (o) {
        Promise.reject(o);
      }
      try {
        await ((_p = (_o4 = __privateGet(this, _s5).config).onSettled) == null ? void 0 : _p.call(_o4, void 0, i, this.state.variables, this.state.context, this, s));
      } catch (o) {
        Promise.reject(o);
      }
      try {
        await ((_r4 = (_q = this.options).onSettled) == null ? void 0 : _r4.call(_q, void 0, i, t, this.state.context, s));
      } catch (o) {
        Promise.reject(o);
      }
      throw __privateMethod(this, _wc_instances, r_fn).call(this, { type: "error", error: i }), i;
    } finally {
      __privateGet(this, _s5).runNext(this);
    }
  }
}, _e8 = new WeakMap(), _t6 = new WeakMap(), _s5 = new WeakMap(), _n3 = new WeakMap(), _wc_instances = new WeakSet(), r_fn = function(t) {
  const e = (s) => {
    switch (t.type) {
      case "failed":
        return { ...s, failureCount: t.failureCount, failureReason: t.error };
      case "pause":
        return { ...s, isPaused: true };
      case "continue":
        return { ...s, isPaused: false };
      case "pending":
        return { ...s, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: t.isPaused, status: "pending", variables: t.variables, submittedAt: Date.now() };
      case "success":
        return { ...s, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: false };
      case "error":
        return { ...s, data: void 0, error: t.error, failureCount: s.failureCount + 1, failureReason: t.error, isPaused: false, status: "error" };
    }
  };
  this.state = e(this.state), ie.batch(() => {
    __privateGet(this, _t6).forEach((s) => {
      s.onMutationUpdate(t);
    }), __privateGet(this, _s5).notify({ mutation: this, type: "updated", action: t });
  });
}, _f2);
function vc() {
  return { context: void 0, data: void 0, error: null, failureCount: 0, failureReason: null, isPaused: false, status: "idle", variables: void 0, submittedAt: 0 };
}
var Sc = (_g = class extends ys {
  constructor(t = {}) {
    super();
    __privateAdd(this, _e9);
    __privateAdd(this, _t7);
    __privateAdd(this, _s6);
    this.config = t, __privateSet(this, _e9, /* @__PURE__ */ new Set()), __privateSet(this, _t7, /* @__PURE__ */ new Map()), __privateSet(this, _s6, 0);
  }
  build(t, e, s) {
    const n = new wc({ client: t, mutationCache: this, mutationId: ++__privateWrapper(this, _s6)._, options: t.defaultMutationOptions(e), state: s });
    return this.add(n), n;
  }
  add(t) {
    __privateGet(this, _e9).add(t);
    const e = zt(t);
    if (typeof e == "string") {
      const s = __privateGet(this, _t7).get(e);
      s ? s.push(t) : __privateGet(this, _t7).set(e, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (__privateGet(this, _e9).delete(t)) {
      const e = zt(t);
      if (typeof e == "string") {
        const s = __privateGet(this, _t7).get(e);
        if (s) if (s.length > 1) {
          const n = s.indexOf(t);
          n !== -1 && s.splice(n, 1);
        } else s[0] === t && __privateGet(this, _t7).delete(e);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var _a5;
    const e = zt(t);
    if (typeof e == "string") {
      const n = (_a5 = __privateGet(this, _t7).get(e)) == null ? void 0 : _a5.find((r) => r.state.status === "pending");
      return !n || n === t;
    } else return true;
  }
  runNext(t) {
    var _a5, _b2;
    const e = zt(t);
    return typeof e == "string" ? ((_b2 = (_a5 = __privateGet(this, _t7).get(e)) == null ? void 0 : _a5.find((n) => n !== t && n.state.isPaused)) == null ? void 0 : _b2.continue()) ?? Promise.resolve() : Promise.resolve();
  }
  clear() {
    ie.batch(() => {
      __privateGet(this, _e9).forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), __privateGet(this, _e9).clear(), __privateGet(this, _t7).clear();
    });
  }
  getAll() {
    return Array.from(__privateGet(this, _e9));
  }
  find(t) {
    const e = { exact: true, ...t };
    return this.getAll().find((s) => pr(e, s));
  }
  findAll(t = {}) {
    return this.getAll().filter((e) => pr(t, e));
  }
  notify(t) {
    ie.batch(() => {
      this.listeners.forEach((e) => {
        e(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((e) => e.state.isPaused);
    return ie.batch(() => Promise.all(t.map((e) => e.continue().catch(be))));
  }
}, _e9 = new WeakMap(), _t7 = new WeakMap(), _s6 = new WeakMap(), _g);
function zt(t) {
  var _a5;
  return (_a5 = t.options.scope) == null ? void 0 : _a5.id;
}
var bc = (_h2 = class extends ys {
  constructor(t = {}) {
    super();
    __privateAdd(this, _e10);
    this.config = t, __privateSet(this, _e10, /* @__PURE__ */ new Map());
  }
  build(t, e, s) {
    const n = e.queryKey, r = e.queryHash ?? Pn(n, e);
    let i = this.get(r);
    return i || (i = new yc({ client: t, queryKey: n, queryHash: r, options: t.defaultQueryOptions(e), state: s, defaultOptions: t.getQueryDefaults(n) }), this.add(i)), i;
  }
  add(t) {
    __privateGet(this, _e10).has(t.queryHash) || (__privateGet(this, _e10).set(t.queryHash, t), this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const e = __privateGet(this, _e10).get(t.queryHash);
    e && (t.destroy(), e === t && __privateGet(this, _e10).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    ie.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return __privateGet(this, _e10).get(t);
  }
  getAll() {
    return [...__privateGet(this, _e10).values()];
  }
  find(t) {
    const e = { exact: true, ...t };
    return this.getAll().find((s) => dr(e, s));
  }
  findAll(t = {}) {
    const e = this.getAll();
    return Object.keys(t).length > 0 ? e.filter((s) => dr(t, s)) : e;
  }
  notify(t) {
    ie.batch(() => {
      this.listeners.forEach((e) => {
        e(t);
      });
    });
  }
  onFocus() {
    ie.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    ie.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, _e10 = new WeakMap(), _h2), cd = (_i3 = class {
  constructor(t = {}) {
    __privateAdd(this, _e11);
    __privateAdd(this, _t8);
    __privateAdd(this, _s7);
    __privateAdd(this, _n4);
    __privateAdd(this, _r3);
    __privateAdd(this, _o3);
    __privateAdd(this, _a4);
    __privateAdd(this, _i2);
    __privateSet(this, _e11, t.queryCache || new bc()), __privateSet(this, _t8, t.mutationCache || new Sc()), __privateSet(this, _s7, t.defaultOptions || {}), __privateSet(this, _n4, /* @__PURE__ */ new Map()), __privateSet(this, _r3, /* @__PURE__ */ new Map()), __privateSet(this, _o3, 0);
  }
  mount() {
    __privateWrapper(this, _o3)._++, __privateGet(this, _o3) === 1 && (__privateSet(this, _a4, Ci.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), __privateGet(this, _e11).onFocus());
    })), __privateSet(this, _i2, ns.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), __privateGet(this, _e11).onOnline());
    })));
  }
  unmount() {
    var _a5, _b2;
    __privateWrapper(this, _o3)._--, __privateGet(this, _o3) === 0 && ((_a5 = __privateGet(this, _a4)) == null ? void 0 : _a5.call(this), __privateSet(this, _a4, void 0), (_b2 = __privateGet(this, _i2)) == null ? void 0 : _b2.call(this), __privateSet(this, _i2, void 0));
  }
  isFetching(t) {
    return __privateGet(this, _e11).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return __privateGet(this, _t8).findAll({ ...t, status: "pending" }).length;
  }
  getQueryData(t) {
    var _a5;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (_a5 = __privateGet(this, _e11).get(e.queryHash)) == null ? void 0 : _a5.state.data;
  }
  ensureQueryData(t) {
    const e = this.defaultQueryOptions(t), s = __privateGet(this, _e11).build(this, e), n = s.state.data;
    return n === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && s.isStaleByTime(Ws(e.staleTime, s)) && this.prefetchQuery(e), Promise.resolve(n));
  }
  getQueriesData(t) {
    return __privateGet(this, _e11).findAll(t).map(({ queryKey: e, state: s }) => {
      const n = s.data;
      return [e, n];
    });
  }
  setQueryData(t, e, s) {
    var _a5;
    const n = this.defaultQueryOptions({ queryKey: t }), i = (_a5 = __privateGet(this, _e11).get(n.queryHash)) == null ? void 0 : _a5.state.data, o = Za(e, i);
    if (o !== void 0) return __privateGet(this, _e11).build(this, n).setData(o, { ...s, manual: true });
  }
  setQueriesData(t, e, s) {
    return ie.batch(() => __privateGet(this, _e11).findAll(t).map(({ queryKey: n }) => [n, this.setQueryData(n, e, s)]));
  }
  getQueryState(t) {
    var _a5;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (_a5 = __privateGet(this, _e11).get(e.queryHash)) == null ? void 0 : _a5.state;
  }
  removeQueries(t) {
    const e = __privateGet(this, _e11);
    ie.batch(() => {
      e.findAll(t).forEach((s) => {
        e.remove(s);
      });
    });
  }
  resetQueries(t, e) {
    const s = __privateGet(this, _e11);
    return ie.batch(() => (s.findAll(t).forEach((n) => {
      n.reset();
    }), this.refetchQueries({ type: "active", ...t }, e)));
  }
  cancelQueries(t, e = {}) {
    const s = { revert: true, ...e }, n = ie.batch(() => __privateGet(this, _e11).findAll(t).map((r) => r.cancel(s)));
    return Promise.all(n).then(be).catch(be);
  }
  invalidateQueries(t, e = {}) {
    return ie.batch(() => (__privateGet(this, _e11).findAll(t).forEach((s) => {
      s.invalidate();
    }), (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...t, type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active" }, e)));
  }
  refetchQueries(t, e = {}) {
    const s = { ...e, cancelRefetch: e.cancelRefetch ?? true }, n = ie.batch(() => __privateGet(this, _e11).findAll(t).filter((r) => !r.isDisabled() && !r.isStatic()).map((r) => {
      let i = r.fetch(void 0, s);
      return s.throwOnError || (i = i.catch(be)), r.state.fetchStatus === "paused" ? Promise.resolve() : i;
    }));
    return Promise.all(n).then(be);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = false);
    const s = __privateGet(this, _e11).build(this, e);
    return s.isStaleByTime(Ws(e.staleTime, s)) ? s.fetch(e) : Promise.resolve(s.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(be).catch(be);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = vr(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(be).catch(be);
  }
  ensureInfiniteQueryData(t) {
    return t.behavior = vr(t.pages), this.ensureQueryData(t);
  }
  resumePausedMutations() {
    return ns.isOnline() ? __privateGet(this, _t8).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return __privateGet(this, _e11);
  }
  getMutationCache() {
    return __privateGet(this, _t8);
  }
  getDefaultOptions() {
    return __privateGet(this, _s7);
  }
  setDefaultOptions(t) {
    __privateSet(this, _s7, t);
  }
  setQueryDefaults(t, e) {
    __privateGet(this, _n4).set(It(t), { queryKey: t, defaultOptions: e });
  }
  getQueryDefaults(t) {
    const e = [...__privateGet(this, _n4).values()], s = {};
    return e.forEach((n) => {
      Et(t, n.queryKey) && Object.assign(s, n.defaultOptions);
    }), s;
  }
  setMutationDefaults(t, e) {
    __privateGet(this, _r3).set(It(t), { mutationKey: t, defaultOptions: e });
  }
  getMutationDefaults(t) {
    const e = [...__privateGet(this, _r3).values()], s = {};
    return e.forEach((n) => {
      Et(t, n.mutationKey) && Object.assign(s, n.defaultOptions);
    }), s;
  }
  defaultQueryOptions(t) {
    if (t._defaulted) return t;
    const e = { ...__privateGet(this, _s7).queries, ...this.getQueryDefaults(t.queryKey), ...t, _defaulted: true };
    return e.queryHash || (e.queryHash = Pn(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === Cn && (e.enabled = false), e;
  }
  defaultMutationOptions(t) {
    return (t == null ? void 0 : t._defaulted) ? t : { ...__privateGet(this, _s7).mutations, ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey), ...t, _defaulted: true };
  }
  clear() {
    __privateGet(this, _e11).clear(), __privateGet(this, _t8).clear();
  }
}, _e11 = new WeakMap(), _t8 = new WeakMap(), _s7 = new WeakMap(), _n4 = new WeakMap(), _r3 = new WeakMap(), _o3 = new WeakMap(), _a4 = new WeakMap(), _i2 = new WeakMap(), _i3), xc = L.createContext(void 0), ld = ({ client: t, children: e }) => (L.useEffect(() => (t.mount(), () => {
  t.unmount();
}), [t]), T.jsx(xc.Provider, { value: t, children: e }));
class at {
}
class ot extends at {
  constructor(e, s) {
    super(), this.collection = e, this.alias = s, this.type = "collectionRef";
  }
}
class ge extends at {
  constructor(e, s) {
    super(), this.query = e, this.alias = s, this.type = "queryRef";
  }
}
class ce extends at {
  constructor(e) {
    super(), this.path = e, this.type = "ref";
  }
}
class he extends at {
  constructor(e) {
    super(), this.value = e, this.type = "val";
  }
}
class we extends at {
  constructor(e, s) {
    super(), this.name = e, this.args = s, this.type = "func";
  }
}
class Ei extends at {
  constructor(e, s) {
    super(), this.name = e, this.args = s, this.type = "agg";
  }
}
function Ot(t) {
  return t instanceof Ei || t instanceof we || t instanceof ce || t instanceof he;
}
function _n(t) {
  return typeof t == "object" && "expression" in t ? t.expression : t;
}
function br(t) {
  return typeof t == "object" && "expression" in t ? t.expression : t;
}
function xr(t) {
  return typeof t == "object" && "expression" in t && t.residual === true;
}
function Rc(t) {
  return { expression: t, residual: true };
}
function Pc(t, e) {
  if (t.from.alias === e) return t.from;
  for (const s of t.join || []) if (s.from.alias === e) return s.from;
}
function Mt(t, e, s) {
  if (e.path.length !== 0) {
    if (e.path.length === 1) {
      const n = e.path[0];
      if (t.select) {
        const r = t.select[n];
        if (r && r.type === "ref") return Mt(t, r, s);
      }
      return { collection: s, path: [n] };
    }
    if (e.path.length > 1) {
      const [n, ...r] = e.path, i = Pc(t, n);
      return i ? i.type === "queryRef" ? Mt(i.query, new ce(r), s) : { collection: i.collection, path: r } : void 0;
    }
  }
}
class ve extends Error {
  constructor(e) {
    super(e), this.name = "TanStackDBError";
  }
}
class Rr extends ve {
  constructor(e, s, n) {
    const r = `${e === "insert" ? "Insert" : "Update"} validation failed: ${s.map((i) => `
- ${i.message} - path: ${i.path}`).join("")}`;
    super(n || r), this.name = "SchemaValidationError", this.type = e, this.issues = s;
  }
}
class Ft extends ve {
  constructor(e) {
    super(e), this.name = "CollectionConfigurationError";
  }
}
class Cc extends Ft {
  constructor() {
    super("Collection requires a config");
  }
}
class _c extends Ft {
  constructor() {
    super("Collection requires a sync config");
  }
}
class kc extends Ft {
  constructor() {
    super("Schema must implement the standard-schema interface");
  }
}
class Pr extends Ft {
  constructor() {
    super("Schema validation must be synchronous");
  }
}
class Dt extends ve {
  constructor(e) {
    super(e), this.name = "CollectionStateError";
  }
}
class Ic extends Dt {
  constructor(e, s) {
    super(`Cannot perform ${e} on collection "${s}" - collection is in error state. Try calling cleanup() and restarting the collection.`);
  }
}
class Ec extends Dt {
  constructor(e, s, n) {
    super(`Invalid collection status transition from "${e}" to "${s}" for collection "${n}"`);
  }
}
class Oc extends Dt {
  constructor() {
    super("Collection is in error state");
  }
}
class Mc extends Dt {
  constructor() {
    super("Active subscribers count is negative - this should never happen");
  }
}
class Ce extends ve {
  constructor(e) {
    super(e), this.name = "CollectionOperationError";
  }
}
class Tc extends Ce {
  constructor(e) {
    super(`An object was created without a defined key: ${JSON.stringify(e)}`);
  }
}
class Lc extends Ce {
  constructor(e, s) {
    const n = e === null ? "null" : typeof e;
    super(`getKey returned an invalid key type. Expected string or number, but got ${n}: ${JSON.stringify(e)}. Item: ${JSON.stringify(s)}`);
  }
}
class Ac extends Ce {
  constructor(e) {
    super(`Cannot insert document with ID "${e}" because it already exists in the collection`);
  }
}
class Fc extends Ce {
  constructor(e, s, n) {
    const r = `Cannot insert document with key "${e}" from sync because it already exists in the collection "${s}"`;
    (n == null ? void 0 : n.hasCustomGetKey) && n.hasDistinct ? super(`${r}. This collection uses a custom getKey with .distinct(). The .distinct() operator deduplicates by the ENTIRE selected object (standard SQL behavior), but your custom getKey extracts only a subset of fields. This causes multiple distinct rows (with different values in non-key fields) to receive the same key. To fix this, either: (1) ensure your SELECT only includes fields that uniquely identify each row, (2) use .groupBy() with min()/max() aggregates to select one value per group, or (3) remove the custom getKey to use the default key behavior.`) : (n == null ? void 0 : n.hasCustomGetKey) && n.hasJoins ? super(`${r}. This collection uses a custom getKey with joined queries. Joined queries can produce multiple rows with the same key when relationships are not 1:1. Consider: (1) using a composite key in your getKey function (e.g., \`\${item.key1}-\${item.key2}\`), (2) ensuring your join produces unique rows per key, or (3) removing the custom getKey to use the default composite key behavior.`) : super(r);
  }
}
class Dc extends Ce {
  constructor() {
    super("The first argument to update is missing");
  }
}
class Bc extends Ce {
  constructor() {
    super("No keys were passed to update");
  }
}
class Kc extends Ce {
  constructor(e) {
    super(`The key "${e}" was passed to update but an object for this key was not found in the collection`);
  }
}
class jc extends Ce {
  constructor(e, s) {
    super(`Updating the key of an item is not allowed. Original key: "${e}", Attempted new key: "${s}". Please delete the old item and create a new one if a key change is necessary.`);
  }
}
class zc extends Ce {
  constructor() {
    super("No keys were passed to delete");
  }
}
class $c extends Ce {
  constructor(e) {
    super(`Collection.delete was called with key '${e}' but there is no item in the collection with this key`);
  }
}
class kn extends ve {
  constructor(e) {
    super(e), this.name = "MissingHandlerError";
  }
}
class Nc extends kn {
  constructor() {
    super("Collection.insert called directly (not within an explicit transaction) but no 'onInsert' handler is configured.");
  }
}
class Uc extends kn {
  constructor() {
    super("Collection.update called directly (not within an explicit transaction) but no 'onUpdate' handler is configured.");
  }
}
class Vc extends kn {
  constructor() {
    super("Collection.delete called directly (not within an explicit transaction) but no 'onDelete' handler is configured.");
  }
}
class $e extends ve {
  constructor(e) {
    super(e), this.name = "TransactionError";
  }
}
class qc extends $e {
  constructor() {
    super("mutationFn is required when creating a transaction");
  }
}
class Wc extends $e {
  constructor() {
    super("You can no longer call .mutate() as the transaction is no longer pending");
  }
}
class Hc extends $e {
  constructor() {
    super("You can no longer call .rollback() as the transaction is already completed");
  }
}
class Gc extends $e {
  constructor() {
    super("You can no longer call .commit() as the transaction is no longer pending");
  }
}
class Cr extends $e {
  constructor() {
    super("No pending sync transaction to write to");
  }
}
class _r extends $e {
  constructor() {
    super("The pending sync transaction is already committed, you can't still write to it.");
  }
}
class Qc extends $e {
  constructor() {
    super("No pending sync transaction to commit");
  }
}
class Jc extends $e {
  constructor() {
    super("The pending sync transaction is already committed, you can't commit it again.");
  }
}
class Je extends ve {
  constructor(e) {
    super(e), this.name = "QueryBuilderError";
  }
}
class Yc extends Je {
  constructor(e) {
    super(`Only one source is allowed in the ${e}`);
  }
}
class Xc extends Je {
  constructor(e) {
    super(`A sub query passed to a ${e} must have a from clause itself`);
  }
}
class Zc extends Je {
  constructor(e) {
    super(`Invalid source for live query: The value provided for alias "${e}" is not a Collection or subquery. Live queries only accept Collection instances or subqueries. Please ensure you're passing a valid Collection or QueryBuilder, not a plain array or other data type.`);
  }
}
class $t extends Je {
  constructor(e, s) {
    super(`Invalid source for ${e}: Expected an object with a single key-value pair like { alias: collection }. For example: .from({ todos: todosCollection }). Got: ${s}`);
  }
}
class el extends Je {
  constructor() {
    super("Join condition must be an equality expression");
  }
}
class tl extends Je {
  constructor() {
    super("Query must have a from clause");
  }
}
class kr extends Je {
  constructor(e) {
    super(`Invalid where() expression: Expected a query expression, but received a ${e}. This usually happens when using JavaScript's comparison operators (===, !==, <, >, etc.) directly. Instead, use the query builder functions:

  \u274C .where(({ user }) => user.id === 'abc')
  \u2705 .where(({ user }) => eq(user.id, 'abc'))

Available comparison functions: eq, gt, gte, lt, lte, and, or, not, like, ilike, isNull, isUndefined`);
  }
}
class pe extends ve {
  constructor(e) {
    super(e), this.name = "QueryCompilationError";
  }
}
class sl extends pe {
  constructor() {
    super("DISTINCT requires a SELECT clause.");
  }
}
class nl extends pe {
  constructor() {
    super("HAVING clause requires GROUP BY clause");
  }
}
class rl extends pe {
  constructor() {
    super("LIMIT and OFFSET require an ORDER BY clause to ensure deterministic results");
  }
}
class Oi extends pe {
  constructor(e, s, n) {
    const r = s ? `alias "${e}" (collection "${s}")` : `collection "${e}"`, i = (n == null ? void 0 : n.length) ? `. Available keys: ${n.join(", ")}` : "";
    super(`Input for ${r} not found in inputs map${i}`);
  }
}
class il extends pe {
  constructor(e, s) {
    super(`Subquery uses alias "${e}" which is already used in the parent query. Each alias must be unique across parent and subquery contexts. Parent query aliases: ${s.join(", ")}. Please rename "${e}" in either the parent query or subquery to avoid conflicts.`);
  }
}
class ol extends pe {
  constructor(e) {
    super(`Unsupported FROM type: ${e}`);
  }
}
class al extends pe {
  constructor(e) {
    super(`Unknown expression type: ${e}`);
  }
}
class cl extends pe {
  constructor() {
    super("Reference path cannot be empty");
  }
}
class ll extends pe {
  constructor(e) {
    super(`Unknown function: ${e}`);
  }
}
class Ir extends pe {
  constructor(e) {
    super(`Collection "${e}" not found during compilation of join`);
  }
}
class Ye extends ve {
  constructor(e) {
    super(e), this.name = "JoinError";
  }
}
class ul extends Ye {
  constructor(e) {
    super(`Unsupported join type: ${e}`);
  }
}
class hl extends Ye {
  constructor(e) {
    super(`Invalid join condition: both expressions refer to the same source "${e}"`);
  }
}
class fl extends Ye {
  constructor() {
    super("Invalid join condition: expressions must reference source aliases");
  }
}
class dl extends Ye {
  constructor(e) {
    super(`Invalid join condition: left expression refers to an unavailable source "${e}"`);
  }
}
class pl extends Ye {
  constructor(e) {
    super(`Invalid join condition: right expression does not refer to the joined source "${e}"`);
  }
}
class yl extends Ye {
  constructor() {
    super("Invalid join condition");
  }
}
class gl extends Ye {
  constructor(e) {
    super(`Unsupported join source type: ${e}`);
  }
}
class ms extends ve {
  constructor(e) {
    super(e), this.name = "GroupByError";
  }
}
class ml extends ms {
  constructor(e) {
    super(`Non-aggregate expression '${e}' in SELECT must also appear in GROUP BY clause`);
  }
}
class wl extends ms {
  constructor(e) {
    super(`Unsupported aggregate function: ${e}`);
  }
}
class vl extends ms {
  constructor(e) {
    super(`Aggregate function in HAVING clause must also be in SELECT clause: ${e}`);
  }
}
class Sl extends ms {
  constructor(e) {
    super(`Unknown expression type in HAVING clause: ${e}`);
  }
}
class Er extends ve {
  constructor(e, s) {
    const n = s instanceof Error ? s.message : String(s);
    super(`Collection "${e}" sync cleanup function threw an error: ${n}`), this.name = "SyncCleanupError";
  }
}
class bl extends ve {
  constructor(e) {
    super(e), this.name = "QueryOptimizerError";
  }
}
class xl extends bl {
  constructor() {
    super("Cannot combine empty expression list");
  }
}
class Rl extends pe {
  constructor(e, s, n, r) {
    super(`Internal error: subscription for alias '${e}' (remapped from '${s}', collection '${n}') is missing in join pipeline. Available aliases: ${r.join(", ")}. This indicates a bug in alias tracking.`);
  }
}
class Pl extends pe {
  constructor(e) {
    super(`Internal error: compiler returned aliases without inputs: ${e.join(", ")}. This indicates a bug in query compilation. Please report this issue.`);
  }
}
class Cl extends pe {
  constructor() {
    super("setWindow() can only be called on collections with an ORDER BY clause. Add .orderBy() to your query to enable window movement.");
  }
}
const Ls = /* @__PURE__ */ new WeakMap();
let _l = 1;
function Or(t) {
  if (Ls.has(t)) return Ls.get(t);
  const e = _l++;
  return Ls.set(t, e), e;
}
const In = (t, e, s) => {
  const { nulls: n } = s;
  if (t == null && e == null) return 0;
  if (t == null) return n === "first" ? -1 : 1;
  if (e == null) return n === "first" ? 1 : -1;
  if (typeof t == "string" && typeof e == "string" && s.stringSort === "locale") return t.localeCompare(e, s.locale, s.localeOptions);
  if (Array.isArray(t) && Array.isArray(e)) {
    for (let o = 0; o < Math.min(t.length, e.length); o++) {
      const a = In(t[o], e[o], s);
      if (a !== 0) return a;
    }
    return t.length - e.length;
  }
  if (t instanceof Date && e instanceof Date) return t.getTime() - e.getTime();
  const r = typeof t == "object", i = typeof e == "object";
  if (r || i) {
    if (r && i) {
      const o = Or(t), a = Or(e);
      return o - a;
    }
    if (r) return 1;
    if (i) return -1;
  }
  return t < e ? -1 : t > e ? 1 : 0;
}, kl = (t, e, s) => In(e, t, { ...s, nulls: s.nulls === "first" ? "last" : "first" });
function rs(t) {
  return (e, s) => t.direction === "asc" ? In(e, s, t) : kl(e, s, t);
}
const Qs = rs({ direction: "asc", nulls: "first", stringSort: "locale" });
function Il(t, e) {
  if (t.byteLength !== e.byteLength) return false;
  for (let s = 0; s < t.byteLength; s++) if (t[s] !== e[s]) return false;
  return true;
}
const El = 128, Mi = "__TS_DB_BTREE_UNDEFINED_VALUE__";
function Js(t) {
  return t instanceof Date ? t.getTime() : (typeof Buffer < "u" && t instanceof Buffer || t instanceof Uint8Array) && t.byteLength <= El ? `__u8__${Array.from(t).join(",")}` : t;
}
function Le(t) {
  return t === void 0 ? Mi : Js(t);
}
function pt(t) {
  if (t !== Mi) return t;
}
function Ol(t, e) {
  if (t === e) return true;
  const s = typeof Buffer < "u" && t instanceof Buffer || t instanceof Uint8Array, n = typeof Buffer < "u" && e instanceof Buffer || e instanceof Uint8Array;
  return s && n ? Il(t, e) : false;
}
function J(t) {
  return t == null;
}
function nt(t) {
  return t === true;
}
function fe(t, e = false) {
  return On(t, e);
}
function En(t) {
  return On(t, true);
}
function On(t, e) {
  switch (t.type) {
    case "val": {
      const s = t.value;
      return () => s;
    }
    case "ref":
      return e ? Tl(t) : Ml(t);
    case "func":
      return Ll(t, e);
    default:
      throw new al(t.type);
  }
}
function Ml(t) {
  const [e, ...s] = t.path;
  if (!e) throw new cl();
  if (e === "$selected") {
    if (s.length === 0) return (r) => r.$selected;
    if (s.length === 1) {
      const r = s[0];
      return (i) => {
        var _a5;
        return (_a5 = i.$selected) == null ? void 0 : _a5[r];
      };
    } else return (r) => {
      const i = r.$selected;
      if (i === void 0) return;
      let o = i;
      for (const a of s) {
        if (o == null) return o;
        o = o[a];
      }
      return o;
    };
  }
  const n = e;
  if (s.length === 0) return (r) => r[n];
  if (s.length === 1) {
    const r = s[0];
    return (i) => {
      var _a5;
      return (_a5 = i[n]) == null ? void 0 : _a5[r];
    };
  } else return (r) => {
    const i = r[n];
    if (i === void 0) return;
    let o = i;
    for (const a of s) {
      if (o == null) return o;
      o = o[a];
    }
    return o;
  };
}
function Tl(t) {
  const e = t.path;
  return (s) => {
    let n = s;
    for (const r of e) {
      if (n == null) return n;
      n = n[r];
    }
    return n;
  };
}
function Ll(t, e) {
  const s = t.args.map((n) => On(n, e));
  switch (t.name) {
    case "eq": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = Js(n(i)), a = Js(r(i));
        return J(o) || J(a) ? null : Ol(o, a);
      };
    }
    case "gt": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = n(i), a = r(i);
        return J(o) || J(a) ? null : o > a;
      };
    }
    case "gte": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = n(i), a = r(i);
        return J(o) || J(a) ? null : o >= a;
      };
    }
    case "lt": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = n(i), a = r(i);
        return J(o) || J(a) ? null : o < a;
      };
    }
    case "lte": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = n(i), a = r(i);
        return J(o) || J(a) ? null : o <= a;
      };
    }
    case "and":
      return (n) => {
        let r = false;
        for (const i of s) {
          const o = i(n);
          if (o === false) return false;
          J(o) && (r = true);
        }
        return r ? null : true;
      };
    case "or":
      return (n) => {
        let r = false;
        for (const i of s) {
          const o = i(n);
          if (o === true) return true;
          J(o) && (r = true);
        }
        return r ? null : false;
      };
    case "not": {
      const n = s[0];
      return (r) => {
        const i = n(r);
        return J(i) ? null : !i;
      };
    }
    case "in": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = n(i), a = r(i);
        return J(o) ? null : Array.isArray(a) ? a.includes(o) : false;
      };
    }
    case "like": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = n(i), a = r(i);
        return J(o) || J(a) ? null : Mr(o, a, false);
      };
    }
    case "ilike": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = n(i), a = r(i);
        return J(o) || J(a) ? null : Mr(o, a, true);
      };
    }
    case "upper": {
      const n = s[0];
      return (r) => {
        const i = n(r);
        return typeof i == "string" ? i.toUpperCase() : i;
      };
    }
    case "lower": {
      const n = s[0];
      return (r) => {
        const i = n(r);
        return typeof i == "string" ? i.toLowerCase() : i;
      };
    }
    case "length": {
      const n = s[0];
      return (r) => {
        const i = n(r);
        return typeof i == "string" || Array.isArray(i) ? i.length : 0;
      };
    }
    case "concat":
      return (n) => s.map((r) => {
        const i = r(n);
        try {
          return String(i ?? "");
        } catch {
          try {
            return JSON.stringify(i) || "";
          } catch {
            return "[object]";
          }
        }
      }).join("");
    case "coalesce":
      return (n) => {
        for (const r of s) {
          const i = r(n);
          if (i != null) return i;
        }
        return null;
      };
    case "add": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = n(i), a = r(i);
        return (o ?? 0) + (a ?? 0);
      };
    }
    case "subtract": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = n(i), a = r(i);
        return (o ?? 0) - (a ?? 0);
      };
    }
    case "multiply": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = n(i), a = r(i);
        return (o ?? 0) * (a ?? 0);
      };
    }
    case "divide": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = n(i), c = r(i) ?? 0;
        return c !== 0 ? (o ?? 0) / c : null;
      };
    }
    case "isUndefined": {
      const n = s[0];
      return (r) => n(r) === void 0;
    }
    case "isNull": {
      const n = s[0];
      return (r) => n(r) === null;
    }
    default:
      throw new ll(t.name);
  }
}
function Mr(t, e, s) {
  if (typeof t != "string" || typeof e != "string") return false;
  const n = s ? t.toLowerCase() : t;
  let i = (s ? e.toLowerCase() : e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return i = i.replace(/%/g, ".*"), i = i.replace(/_/g, "."), new RegExp(`^${i}$`).test(n);
}
function Re(t, e) {
  return Ht(t, e, /* @__PURE__ */ new Map());
}
function Ht(t, e, s) {
  if (t === e) return true;
  if (t == null || e == null || typeof t != typeof e) return false;
  if (t instanceof Date) return e instanceof Date ? t.getTime() === e.getTime() : false;
  if (e instanceof Date) return false;
  if (t instanceof RegExp) return e instanceof RegExp ? t.source === e.source && t.flags === e.flags : false;
  if (e instanceof RegExp) return false;
  if (t instanceof Map) {
    if (!(e instanceof Map) || t.size !== e.size) return false;
    if (s.has(t)) return s.get(t) === e;
    s.set(t, e);
    const r = Array.from(t.entries()).every(([i, o]) => e.has(i) && Ht(o, e.get(i), s));
    return s.delete(t), r;
  }
  if (e instanceof Map) return false;
  if (t instanceof Set) {
    if (!(e instanceof Set) || t.size !== e.size) return false;
    if (s.has(t)) return s.get(t) === e;
    s.set(t, e);
    const n = Array.from(t), r = Array.from(e);
    if (n.every((o) => typeof o != "object")) return s.delete(t), n.every((o) => e.has(o));
    const i = n.length === r.length;
    return s.delete(t), i;
  }
  if (e instanceof Set) return false;
  if (ArrayBuffer.isView(t) && ArrayBuffer.isView(e) && !(t instanceof DataView) && !(e instanceof DataView)) {
    const n = t, r = e;
    if (n.length !== r.length) return false;
    for (let i = 0; i < n.length; i++) if (n[i] !== r[i]) return false;
    return true;
  }
  if (ArrayBuffer.isView(e) && !(e instanceof DataView) && !ArrayBuffer.isView(t)) return false;
  if (bt(t) && bt(e)) {
    const n = Ys(t), r = Ys(e);
    return n !== r ? false : typeof t.equals == "function" ? t.equals(e) : t.toString() === e.toString();
  }
  if (bt(e)) return false;
  if (Array.isArray(t)) {
    if (!Array.isArray(e) || t.length !== e.length) return false;
    if (s.has(t)) return s.get(t) === e;
    s.set(t, e);
    const n = t.every((r, i) => Ht(r, e[i], s));
    return s.delete(t), n;
  }
  if (Array.isArray(e)) return false;
  if (typeof t == "object") {
    if (s.has(t)) return s.get(t) === e;
    s.set(t, e);
    const n = Object.keys(t), r = Object.keys(e);
    if (n.length !== r.length) return s.delete(t), false;
    const i = n.every((o) => o in e && Ht(t[o], e[o], s));
    return s.delete(t), i;
  }
  return false;
}
const Al = ["Temporal.Duration", "Temporal.Instant", "Temporal.PlainDate", "Temporal.PlainDateTime", "Temporal.PlainMonthDay", "Temporal.PlainTime", "Temporal.PlainYearMonth", "Temporal.ZonedDateTime"];
function Ys(t) {
  return t[Symbol.toStringTag];
}
function bt(t) {
  const e = Ys(t);
  return typeof e == "string" && Al.includes(e);
}
const Mn = { direction: "asc", nulls: "first", stringSort: "locale" };
class Fl {
  constructor(e) {
    this.originalIndex = e;
  }
  lookup(e, s) {
    const n = e === "gt" ? "lt" : e === "gte" ? "lte" : e === "lt" ? "gt" : e === "lte" ? "gte" : e;
    return this.originalIndex.lookup(n, s);
  }
  rangeQuery(e = {}) {
    return this.originalIndex.rangeQueryReversed(e);
  }
  rangeQueryReversed(e = {}) {
    return this.originalIndex.rangeQuery(e);
  }
  take(e, s, n) {
    return this.originalIndex.takeReversed(e, s, n);
  }
  takeFromStart(e, s) {
    return this.originalIndex.takeReversedFromEnd(e, s);
  }
  takeReversed(e, s, n) {
    return this.originalIndex.take(e, s, n);
  }
  takeReversedFromEnd(e, s) {
    return this.originalIndex.takeFromStart(e, s);
  }
  get orderedEntriesArray() {
    return this.originalIndex.orderedEntriesArrayReversed;
  }
  get orderedEntriesArrayReversed() {
    return this.originalIndex.orderedEntriesArray;
  }
  supports(e) {
    return this.originalIndex.supports(e);
  }
  matchesField(e) {
    return this.originalIndex.matchesField(e);
  }
  matchesCompareOptions(e) {
    return this.originalIndex.matchesCompareOptions(e);
  }
  matchesDirection(e) {
    return this.originalIndex.matchesDirection(e);
  }
  getStats() {
    return this.originalIndex.getStats();
  }
  add(e, s) {
    this.originalIndex.add(e, s);
  }
  remove(e, s) {
    this.originalIndex.remove(e, s);
  }
  update(e, s, n) {
    this.originalIndex.update(e, s, n);
  }
  build(e) {
    this.originalIndex.build(e);
  }
  clear() {
    this.originalIndex.clear();
  }
  get keyCount() {
    return this.originalIndex.keyCount;
  }
  equalityLookup(e) {
    return this.originalIndex.equalityLookup(e);
  }
  inArrayLookup(e) {
    return this.originalIndex.inArrayLookup(e);
  }
  get indexedKeysSet() {
    return this.originalIndex.indexedKeysSet;
  }
  get valueMapData() {
    return this.originalIndex.valueMapData;
  }
}
function Bt(t, e, s) {
  const n = s ?? { ...Mn, ...t.compareOptions };
  for (const r of t.indexes.values()) if (r.matchesField(e) && r.matchesCompareOptions(n)) return r.matchesDirection(n.direction) ? r : new Fl(r);
}
function Dl(t) {
  if (t.length === 0) return /* @__PURE__ */ new Set();
  if (t.length === 1) return new Set(t[0]);
  let e = new Set(t[0]);
  for (let s = 1; s < t.length; s++) {
    const n = /* @__PURE__ */ new Set();
    for (const r of e) t[s].has(r) && n.add(r);
    e = n;
  }
  return e;
}
function Bl(t) {
  const e = /* @__PURE__ */ new Set();
  for (const s of t) for (const n of s) e.add(n);
  return e;
}
function Kl(t, e) {
  return Tn(t, e);
}
function Tn(t, e) {
  if (t.type === "func") switch (t.name) {
    case "eq":
    case "gt":
    case "gte":
    case "lt":
    case "lte":
      return zl(t, e);
    case "and":
      return $l(t, e);
    case "or":
      return Nl(t, e);
    case "in":
      return Ul(t, e);
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function jl(t, e) {
  if (t.type !== "func" || t.args.length < 2) return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
  const s = /* @__PURE__ */ new Map();
  for (const n of t.args) if (n.type === "func" && ["gt", "gte", "lt", "lte"].includes(n.name)) {
    const r = n;
    if (r.args.length === 2) {
      const i = r.args[0], o = r.args[1];
      let a = null, c = null, l = r.name;
      if (i.type === "ref" && o.type === "val") a = i, c = o;
      else if (i.type === "val" && o.type === "ref") switch (a = o, c = i, l) {
        case "gt":
          l = "lt";
          break;
        case "gte":
          l = "lte";
          break;
        case "lt":
          l = "gt";
          break;
        case "lte":
          l = "gte";
          break;
      }
      if (a && c) {
        const u = a.path.join("."), f = c.value;
        s.has(u) || s.set(u, []), s.get(u).push({ operation: l, value: f });
      }
    }
  }
  for (const [n, r] of s) if (r.length >= 2) {
    const i = n.split("."), o = Bt(e, i);
    if (o && o.supports("gt") && o.supports("lt")) {
      let a, c, l = true, h = true;
      for (const { operation: f, value: p } of r) switch (f) {
        case "gt":
          (a === void 0 || p > a) && (a = p, l = false);
          break;
        case "gte":
          (a === void 0 || p > a) && (a = p, l = true);
          break;
        case "lt":
          (c === void 0 || p < c) && (c = p, h = false);
          break;
        case "lte":
          (c === void 0 || p < c) && (c = p, h = true);
          break;
      }
      return { canOptimize: true, matchingKeys: o.rangeQuery({ from: a, to: c, fromInclusive: l, toInclusive: h }) };
    }
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function zl(t, e) {
  if (t.type !== "func" || t.args.length !== 2) return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
  const s = t.args[0], n = t.args[1];
  let r = null, i = null, o = t.name;
  if (s.type === "ref" && n.type === "val") r = s, i = n;
  else if (s.type === "val" && n.type === "ref") switch (r = n, i = s, o) {
    case "gt":
      o = "lt";
      break;
    case "gte":
      o = "lte";
      break;
    case "lt":
      o = "gt";
      break;
    case "lte":
      o = "gte";
      break;
  }
  if (r && i) {
    const a = r.path, c = Bt(e, a);
    if (c) {
      const l = i.value, h = o;
      return c.supports(h) ? { canOptimize: true, matchingKeys: c.lookup(h, l) } : { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
    }
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function $l(t, e) {
  if (t.type !== "func" || t.args.length < 2) return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
  const s = jl(t, e);
  if (s.canOptimize) return s;
  const n = [];
  for (const r of t.args) {
    const i = Tn(r, e);
    i.canOptimize && n.push(i);
  }
  if (n.length > 0) {
    const r = n.map((o) => o.matchingKeys);
    return { canOptimize: true, matchingKeys: Dl(r) };
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function Nl(t, e) {
  if (t.type !== "func" || t.args.length < 2) return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
  const s = [];
  for (const n of t.args) {
    const r = Tn(n, e);
    r.canOptimize && s.push(r);
  }
  if (s.length > 0) {
    const n = s.map((i) => i.matchingKeys);
    return { canOptimize: true, matchingKeys: Bl(n) };
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function Ul(t, e) {
  if (t.type !== "func" || t.args.length !== 2) return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
  const s = t.args[0], n = t.args[1];
  if (s.type === "ref" && n.type === "val" && Array.isArray(n.value)) {
    const r = s.path, i = n.value, o = Bt(e, r);
    if (o) {
      if (o.supports("in")) return { canOptimize: true, matchingKeys: o.lookup("in", i) };
      if (o.supports("eq")) {
        const a = /* @__PURE__ */ new Set();
        for (const c of i) {
          const l = o.lookup("eq", c);
          for (const h of l) a.add(h);
        }
        return { canOptimize: true, matchingKeys: a };
      }
    }
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
class Vl extends Map {
  constructor(e, s) {
    super(s), this.defaultValue = e;
  }
  get(e) {
    return this.has(e) ? super.get(e) : this.defaultValue();
  }
  update(e, s) {
    const n = this.get(e), r = s(n);
    return this.set(e, r), r;
  }
}
const As = 3e4;
function Fs(t, e) {
  if (e.length <= As) t.push(...e);
  else for (let s = 0; s < e.length; s += As) {
    const n = e.slice(s, s + As);
    t.push(...n);
  }
}
function ql(t, e, s) {
  let n = 0, r = t.length;
  for (; n < r; ) {
    const i = Math.floor((n + r) / 2), o = s(t[i], e);
    if (o < 0) n = i + 1;
    else if (o > 0) r = i;
    else return i;
  }
  return n;
}
class Wl {
  constructor() {
    this.objectIds = /* @__PURE__ */ new WeakMap(), this.nextId = 0;
  }
  getId(e) {
    if (typeof e != "object" || e === null) {
      const s = String(e);
      let n = 0;
      for (let r = 0; r < s.length; r++) {
        const i = s.charCodeAt(r);
        n = (n << 5) - n + i, n = n & n;
      }
      return n;
    }
    return this.objectIds.has(e) || this.objectIds.set(e, this.nextId++), this.objectIds.get(e);
  }
  getStringId(e) {
    return e === null ? "null" : e === void 0 ? "undefined" : typeof e != "object" ? `str_${String(e)}` : `obj_${this.getId(e)}`;
  }
}
const Ds = new Wl();
function Hl(t, e) {
  const [s, n] = t, [r, i] = e, o = [...Nt(s, Math.min(n, r)), ...Nt(Math.max(s, i), n)], a = [...Nt(r, Math.min(i, s)), ...Nt(Math.max(r, n), i)];
  return { onlyInA: o, onlyInB: a };
}
function Nt(t, e) {
  const s = [];
  for (let n = t; n < e; n++) s.push(n);
  return s;
}
function is(t, e) {
  return typeof t == typeof e ? t < e ? -1 : t > e ? 1 : 0 : typeof t == "string" ? -1 : 1;
}
function Ln(t) {
  return JSON.stringify(t, (e, s) => typeof s == "bigint" ? s.toString() : s instanceof Date ? s.toISOString() : s);
}
const Gl = ee(), Ql = ee(), Jl = ee(), Yl = ee(), Xl = ee();
function ee() {
  return Math.random() * (2 ** 31 - 1) >>> 0;
}
const Ti = new ArrayBuffer(8), Zl = new DataView(Ti), Ae = new Uint8Array(Ti);
class ws {
  constructor() {
    this.hash = Gl, this.length = 0, this.carry = 0, this.carryBytes = 0;
  }
  _mix(e) {
    e = Math.imul(e, 3432918353), e = e << 15 | e >>> 17, e = Math.imul(e, 461845907), this.hash ^= e, this.hash = this.hash << 13 | this.hash >>> 19, this.hash = Math.imul(this.hash, 5) + 3864292196;
  }
  writeByte(e) {
    this.carry |= (e & 255) << 8 * this.carryBytes, this.carryBytes++, this.length++, this.carryBytes === 4 && (this._mix(this.carry >>> 0), this.carry = 0, this.carryBytes = 0);
  }
  update(e) {
    switch (typeof e) {
      case "symbol": {
        this.update(Xl);
        const s = e.description;
        if (!s) return;
        for (let n = 0; n < s.length; n++) {
          const r = s.charCodeAt(n);
          this.writeByte(r & 255), this.writeByte(r >>> 8 & 255);
        }
        return;
      }
      case "string":
        this.update(Ql);
        for (let s = 0; s < e.length; s++) {
          const n = e.charCodeAt(s);
          this.writeByte(n & 255), this.writeByte(n >>> 8 & 255);
        }
        return;
      case "number":
        Zl.setFloat64(0, e, true), this.writeByte(Ae[0]), this.writeByte(Ae[1]), this.writeByte(Ae[2]), this.writeByte(Ae[3]), this.writeByte(Ae[4]), this.writeByte(Ae[5]), this.writeByte(Ae[6]), this.writeByte(Ae[7]);
        return;
      case "bigint": {
        let s = e;
        for (s < 0n ? (s = -s, this.update(Yl)) : this.update(Jl); s > 0n; ) this.writeByte(Number(s & 0xffn)), s >>= 8n;
        e === 0n && this.writeByte(0);
        return;
      }
      default:
        throw new TypeError(`Unsupported input type: ${typeof e}`);
    }
  }
  digest() {
    if (this.carryBytes > 0) {
      let e = this.carry >>> 0;
      e = Math.imul(e, 3432918353), e = e << 15 | e >>> 17, e = Math.imul(e, 461845907), this.hash ^= e;
    }
    return this.hash ^= this.length, this.hash ^= this.hash >>> 16, this.hash = Math.imul(this.hash, 2246822507), this.hash ^= this.hash >>> 13, this.hash = Math.imul(this.hash, 3266489909), this.hash ^= this.hash >>> 16, this.hash >>> 0;
  }
}
const eu = ee(), tu = ee(), su = ee(), nu = ee(), ru = ee(), iu = ee(), ou = ee(), au = ee(), cu = ee(), lu = ee(), uu = ee(), hu = ee(), fu = 128, Tt = /* @__PURE__ */ new WeakMap();
function oe(t) {
  const e = new ws();
  return Li(e, t), e.digest();
}
function du(t) {
  const e = Tt.get(t);
  if (e !== void 0) return e;
  let s;
  if (t instanceof Date) s = pu(t);
  else if (typeof Buffer < "u" && t instanceof Buffer || t instanceof Uint8Array) if (t.byteLength <= fu) s = yu(t);
  else return Xs(t);
  else {
    if (t instanceof File) return Xs(t);
    {
      let n = t, r = au;
      t instanceof Array && (r = cu), t instanceof Map && (r = lu, n = [...t.entries()]), t instanceof Set && (r = uu, n = [...t.entries()]), s = gu(n, r);
    }
  }
  return Tt.set(t, s), s;
}
function pu(t) {
  const e = new ws();
  return e.update(ou), e.update(t.getTime()), e.digest();
}
function yu(t) {
  const e = new ws();
  e.update(hu), e.update(t.byteLength);
  for (let s = 0; s < t.byteLength; s++) e.writeByte(t[s]);
  return e.digest();
}
function gu(t, e) {
  const s = new ws();
  s.update(e);
  const n = Object.keys(t);
  n.sort(wu);
  for (const r of n) s.update(ru), s.update(r), Li(s, t[r]);
  return s.digest();
}
function Li(t, e) {
  if (e === null) {
    t.update(su);
    return;
  }
  switch (typeof e) {
    case "undefined":
      t.update(nu);
      return;
    case "boolean":
      t.update(e ? eu : tu);
      return;
    case "number":
      t.update(isNaN(e) ? NaN : e === 0 ? 0 : e);
      return;
    case "bigint":
    case "string":
    case "symbol":
      t.update(e);
      return;
    case "object":
      t.update(mu(e));
      return;
    case "function":
      t.update(Xs(e));
      return;
    default:
      console.warn(`Ignored input during hashing because it is of type ${typeof e} which is not supported`);
  }
}
function mu(t) {
  let e = Tt.get(t);
  return e === void 0 && (e = du(t)), e;
}
let Tr = 1;
function Xs(t) {
  let e = Tt.get(t);
  return e === void 0 && (e = Tr ^ iu, Tr++, Tt.set(t, e)), e;
}
function wu(t, e) {
  return t.localeCompare(e);
}
const _H = class _H {
  constructor(e = []) {
    __privateAdd(this, _H_instances);
    __privateAdd(this, _e12);
    __privateSet(this, _e12, e);
  }
  toString(e = false) {
    return `MultiSet(${JSON.stringify(__privateGet(this, _e12), null, e ? 2 : void 0)})`;
  }
  toJSON() {
    return JSON.stringify(Array.from(this.getInner()));
  }
  static fromJSON(e) {
    return new _H(JSON.parse(e));
  }
  map(e) {
    return new _H(__privateGet(this, _e12).map(([s, n]) => [e(s), n]));
  }
  filter(e) {
    return new _H(__privateGet(this, _e12).filter(([s, n]) => e(s)));
  }
  negate() {
    return new _H(__privateGet(this, _e12).map(([e, s]) => [e, -s]));
  }
  concat(e) {
    const s = [];
    return Fs(s, __privateGet(this, _e12)), Fs(s, e.getInner()), new _H(s);
  }
  consolidate() {
    var _a5;
    if (__privateGet(this, _e12).length > 0) {
      const e = (_a5 = __privateGet(this, _e12)[0]) == null ? void 0 : _a5[0];
      if (Array.isArray(e) && e.length === 2) return __privateMethod(this, _H_instances, t_fn).call(this);
    }
    return __privateMethod(this, _H_instances, s_fn).call(this);
  }
  extend(e) {
    const s = e instanceof _H ? e.getInner() : e;
    Fs(__privateGet(this, _e12), s);
  }
  add(e, s) {
    s !== 0 && __privateGet(this, _e12).push([e, s]);
  }
  getInner() {
    return __privateGet(this, _e12);
  }
};
_e12 = new WeakMap();
_H_instances = new WeakSet();
t_fn = function() {
  const e = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), n = (i) => {
    if (i.length !== 2) throw new Error("Expected tuple of length 2");
    const [o, a] = i;
    return `${Ds.getStringId(o)}|${Ds.getStringId(a)}`;
  };
  for (const [i, o] of __privateGet(this, _e12)) {
    if (!Array.isArray(i) || i.length !== 2) return __privateMethod(this, _H_instances, s_fn).call(this);
    const [a, c] = i;
    if (typeof a != "string" && typeof a != "number") return __privateMethod(this, _H_instances, s_fn).call(this);
    let l;
    Array.isArray(c) && c.length === 2 ? l = n(c) : l = Ds.getStringId(c);
    const h = a + "|" + l;
    e.set(h, (e.get(h) || 0) + o), s.has(h) || s.set(h, i);
  }
  const r = [];
  for (const [i, o] of e) o !== 0 && r.push([s.get(i), o]);
  return new _H(r);
};
s_fn = function() {
  const e = new Vl(() => 0), s = /* @__PURE__ */ new Map();
  let n = false, r = false, i = false;
  for (const [c, l] of __privateGet(this, _e12)) if (typeof c == "string") n = true;
  else if (typeof c == "number") r = true;
  else {
    i = true;
    break;
  }
  const o = i || n && r;
  for (const [c, l] of __privateGet(this, _e12)) {
    const h = o ? oe(c) : c;
    o && !s.has(h) && s.set(h, c), e.update(h, (u) => u + l);
  }
  const a = [];
  for (const [c, l] of e.entries()) if (l !== 0) {
    const h = o ? s.get(c) : c;
    a.push([h, l]);
  }
  return new _H(a);
};
let H = _H;
class vu {
  constructor(e) {
    __privateAdd(this, _e13);
    __privateSet(this, _e13, e);
  }
  drain() {
    const e = [...__privateGet(this, _e13)].reverse();
    return __privateGet(this, _e13).length = 0, e;
  }
  isEmpty() {
    return __privateGet(this, _e13).length === 0;
  }
}
_e13 = new WeakMap();
class _e {
  constructor() {
    __privateAdd(this, _e14, []);
  }
  sendData(e) {
    e instanceof H || (e = new H(e));
    for (const s of __privateGet(this, _e14)) s.unshift(e);
  }
  newReader() {
    const e = [];
    return __privateGet(this, _e14).push(e), new vu(e);
  }
}
_e14 = new WeakMap();
class Ai {
  constructor(e, s, n) {
    this.id = e, this.inputs = s, this.output = n;
  }
  hasPendingWork() {
    return this.inputs.some((e) => !e.isEmpty());
  }
}
class ct extends Ai {
  constructor(e, s, n) {
    super(e, [s], n), this.id = e;
  }
  inputMessages() {
    return this.inputs[0].drain();
  }
}
class Su extends Ai {
  constructor(e, s, n, r) {
    super(e, [s, n], r), this.id = e;
  }
  inputAMessages() {
    return this.inputs[0].drain();
  }
  inputBMessages() {
    return this.inputs[1].drain();
  }
}
class An extends ct {
  run() {
    for (const e of this.inputMessages()) this.output.sendData(this.inner(e));
  }
}
class bu {
  constructor() {
    __privateAdd(this, _bu_instances);
    __privateAdd(this, _e15, []);
    __privateAdd(this, _t9, 0);
    __privateAdd(this, _s8, false);
  }
  getNextOperatorId() {
    return __privateMethod(this, _bu_instances, n_fn).call(this), __privateWrapper(this, _t9)._++;
  }
  newInput() {
    __privateMethod(this, _bu_instances, n_fn).call(this);
    const e = new _e();
    return new xu(this, e);
  }
  addOperator(e) {
    __privateMethod(this, _bu_instances, n_fn).call(this), __privateGet(this, _e15).push(e);
  }
  finalize() {
    __privateMethod(this, _bu_instances, n_fn).call(this), __privateSet(this, _s8, true);
  }
  step() {
    if (!__privateGet(this, _s8)) throw new Error("Graph not finalized");
    for (const e of __privateGet(this, _e15)) e.run();
  }
  pendingWork() {
    return __privateGet(this, _e15).some((e) => e.hasPendingWork());
  }
  run() {
    for (; this.pendingWork(); ) this.step();
  }
}
_e15 = new WeakMap();
_t9 = new WeakMap();
_s8 = new WeakMap();
_bu_instances = new WeakSet();
n_fn = function() {
  if (__privateGet(this, _s8)) throw new Error("Graph already finalized");
};
class ke {
  constructor(e, s) {
    __privateAdd(this, _e16);
    __privateAdd(this, _t10);
    __privateSet(this, _e16, e), __privateSet(this, _t10, s);
  }
  connectReader() {
    return __privateGet(this, _t10).newReader();
  }
  get writer() {
    return __privateGet(this, _t10);
  }
  get graph() {
    return __privateGet(this, _e16);
  }
  pipe(...e) {
    return e.reduce((s, n) => n(s), this);
  }
}
_e16 = new WeakMap();
_t10 = new WeakMap();
class xu extends ke {
  sendData(e) {
    this.writer.sendData(e);
  }
}
class Ru extends An {
  constructor(e, s, n, r) {
    super(e, s, n);
    __privateAdd(this, _e17);
    __privateSet(this, _e17, r);
  }
  inner(e) {
    return e.map(__privateGet(this, _e17));
  }
}
_e17 = new WeakMap();
function ae(t) {
  return (e) => {
    const s = new ke(e.graph, new _e()), n = new Ru(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
const mt = /* @__PURE__ */ Symbol("NO_PREFIX");
class Lr extends Map {
  addValue(e, s) {
    if (s === 0) return this.size === 0;
    const n = xt(e), r = this.get(n);
    if (Gt(r)) {
      const [i, o] = r;
      if (xt(i) !== n) throw new Error("Mismatching prefixes, this should never happen");
      if (i === e || oe(i) === oe(e)) {
        const c = o + s;
        c === 0 ? this.delete(n) : this.set(n, [e, c]);
      } else {
        const c = new wt();
        c.set(oe(i), r), c.set(oe(e), [e, s]), this.set(n, c);
      }
    } else r === void 0 ? this.set(n, [e, s]) : r.addValue(e, s) && this.delete(n);
    return this.size === 0;
  }
}
class wt extends Map {
  addValue(e, s) {
    if (s === 0) return this.size === 0;
    const n = oe(e), r = this.get(n);
    if (r) {
      const [, i] = r, o = i + s;
      o === 0 ? this.delete(n) : this.set(n, [e, o]);
    } else this.set(n, [e, s]);
    return this.size === 0;
  }
}
const _Ke = class _Ke {
  constructor() {
    __privateAdd(this, _Ke_instances);
    __privateAdd(this, _e18);
    __privateAdd(this, _t11, /* @__PURE__ */ new Map());
    __privateSet(this, _e18, /* @__PURE__ */ new Map());
  }
  static fromMultiSets(e) {
    const s = new _Ke();
    for (const n of e) for (const [r, i] of n.getInner()) {
      const [o, a] = r;
      s.addValue(o, [a, i]);
    }
    return s;
  }
  toString(e = false) {
    return `Index(${JSON.stringify([...this.entries()], void 0, e ? 2 : void 0)})`;
  }
  get size() {
    return __privateGet(this, _e18).size;
  }
  has(e) {
    return __privateGet(this, _e18).has(e);
  }
  hasPresence(e) {
    return (__privateGet(this, _t11).get(e) || 0) !== 0;
  }
  getConsolidatedMultiplicity(e) {
    return __privateGet(this, _t11).get(e) || 0;
  }
  getPresenceKeys() {
    return __privateGet(this, _t11).keys();
  }
  get(e) {
    return [...this.getIterator(e)];
  }
  *getIterator(e) {
    const s = __privateGet(this, _e18).get(e);
    if (Gt(s)) yield s;
    else {
      if (s === void 0) return;
      if (s instanceof wt) for (const n of s.values()) yield n;
      else for (const n of s.values()) if (Gt(n)) yield n;
      else for (const r of n.values()) yield r;
    }
  }
  *entries() {
    for (const e of __privateGet(this, _e18).keys()) for (const s of this.getIterator(e)) yield [e, s];
  }
  *entriesIterators() {
    for (const e of __privateGet(this, _e18).keys()) yield [e, this.getIterator(e)];
  }
  addValue(e, s) {
    const [n, r] = s;
    if (r === 0) return;
    const i = (__privateGet(this, _t11).get(e) || 0) + r;
    i === 0 ? __privateGet(this, _t11).delete(e) : __privateGet(this, _t11).set(e, i);
    const o = __privateGet(this, _e18).get(e);
    if (o === void 0) {
      __privateGet(this, _e18).set(e, s);
      return;
    }
    if (Gt(o)) {
      __privateMethod(this, _Ke_instances, s_fn2).call(this, e, o, n, r);
      return;
    }
    if (o instanceof wt) {
      const a = xt(n);
      if (a !== mt) {
        const c = new Lr();
        c.set(mt, o), c.set(a, s), __privateGet(this, _e18).set(e, c);
      } else o.addValue(n, r) && __privateGet(this, _e18).delete(e);
    } else o.addValue(n, r) && __privateGet(this, _e18).delete(e);
  }
  append(e) {
    for (const [s, n] of e.entries()) this.addValue(s, n);
  }
  join(e) {
    const s = [];
    if (this.size <= e.size) for (const [n, r] of this.entriesIterators()) {
      if (!e.has(n)) continue;
      const i = e.get(n);
      for (const [o, a] of r) for (const [c, l] of i) a !== 0 && l !== 0 && s.push([[n, [o, c]], a * l]);
    }
    else for (const [n, r] of e.entriesIterators()) {
      if (!this.has(n)) continue;
      const i = this.get(n);
      for (const [o, a] of r) for (const [c, l] of i) l !== 0 && a !== 0 && s.push([[n, [c, o]], l * a]);
    }
    return new H(s);
  }
};
_e18 = new WeakMap();
_t11 = new WeakMap();
_Ke_instances = new WeakSet();
s_fn2 = function(e, s, n, r) {
  const [i, o] = s;
  if (i === n) {
    const l = o + r;
    l === 0 ? __privateGet(this, _e18).delete(e) : __privateGet(this, _e18).set(e, [n, l]);
    return;
  }
  const a = xt(n), c = xt(i);
  if (c === a && (i === n || oe(i) === oe(n))) {
    const l = o + r;
    l === 0 ? __privateGet(this, _e18).delete(e) : __privateGet(this, _e18).set(e, [n, l]);
    return;
  }
  if (c === mt && a === mt) {
    const l = new wt();
    l.set(oe(i), s), l.set(oe(n), [n, r]), __privateGet(this, _e18).set(e, l);
  } else {
    const l = new Lr();
    if (c === a) {
      const h = new wt();
      h.set(oe(i), s), h.set(oe(n), [n, r]), l.set(c, h);
    } else l.set(c, s), l.set(a, [n, r]);
    __privateGet(this, _e18).set(e, l);
  }
};
let Ke = _Ke;
function xt(t) {
  return Array.isArray(t) && (typeof t[0] == "string" || typeof t[0] == "number" || typeof t[0] == "bigint") ? t[0] : mt;
}
function Gt(t) {
  return Array.isArray(t);
}
class Pu extends ct {
  constructor(e, s, n, r) {
    super(e, s, n);
    __privateAdd(this, _e19, new Ke());
    __privateAdd(this, _t12, new Ke());
    __privateAdd(this, _s9);
    __privateSet(this, _s9, r);
  }
  run() {
    const e = /* @__PURE__ */ new Set();
    for (const n of this.inputMessages()) for (const [r, i] of n.getInner()) {
      const [o, a] = r;
      __privateGet(this, _e19).addValue(o, [a, i]), e.add(o);
    }
    const s = [];
    for (const n of e) {
      const r = __privateGet(this, _e19).get(n), i = __privateGet(this, _t12).get(n), o = __privateGet(this, _s9).call(this, r), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
      for (const [l, h] of o) {
        const u = a.get(l) ?? 0;
        a.set(l, u + h);
      }
      for (const [l, h] of i) {
        const u = c.get(l) ?? 0;
        c.set(l, u + h);
      }
      for (const [l, h] of c) a.has(l) || (s.push([[n, l], -h]), __privateGet(this, _t12).addValue(n, [l, -h]));
      for (const [l, h] of a) c.has(l) || h !== 0 && (s.push([[n, l], h]), __privateGet(this, _t12).addValue(n, [l, h]));
      for (const [l, h] of a) {
        const u = c.get(l);
        if (u !== void 0) {
          const f = h - u;
          f !== 0 && (s.push([[n, l], f]), __privateGet(this, _t12).addValue(n, [l, f]));
        }
      }
    }
    s.length > 0 && this.output.sendData(new H(s));
  }
}
_e19 = new WeakMap();
_t12 = new WeakMap();
_s9 = new WeakMap();
function Cu(t) {
  return (e) => {
    const s = new ke(e.graph, new _e()), n = new Pu(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
function Ar(t) {
  return "pipe" in t;
}
function Fr(t, e = {}) {
  const s = Object.fromEntries(Object.entries(e).filter(([n, r]) => !Ar(r)));
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => Ar(r))), (n) => {
    const r = "__original_key__";
    return n.pipe(ae((a) => {
      const c = t(a), l = Ln(c), h = {};
      h[r] = c;
      for (const [u, f] of Object.entries(s)) h[u] = f.preMap(a);
      return [l, h];
    })).pipe(Cu((a) => {
      var _a5, _b2;
      let c = 0;
      for (const [u, f] of a) c += f;
      if (c <= 0) return [];
      const l = {}, h = (_b2 = (_a5 = a[0]) == null ? void 0 : _a5[0]) == null ? void 0 : _b2[r];
      l[r] = h;
      for (const [u, f] of Object.entries(s)) {
        const p = a.map(([d, y]) => [d[u], y]);
        l[u] = f.reduce(p);
      }
      return [[l, 1]];
    })).pipe(ae(([a, c]) => {
      const l = c[r], h = {};
      Object.assign(h, l);
      for (const [u, f] of Object.entries(s)) f.postMap ? h[u] = f.postMap(c[u]) : h[u] = c[u];
      return [a, h];
    }));
  };
}
function _u(t = (e) => e) {
  return { preMap: (e) => t(e), reduce: (e) => {
    let s = 0;
    for (const [n, r] of e) s += n * r;
    return s;
  } };
}
function ku(t = (e) => e) {
  return { preMap: (e) => t(e) == null ? 0 : 1, reduce: (e) => {
    let s = 0;
    for (const [n, r] of e) s += n * r;
    return s;
  } };
}
function Iu(t = (e) => e) {
  return { preMap: (e) => ({ sum: t(e), count: 0 }), reduce: (e) => {
    let s = 0, n = 0;
    for (const [r, i] of e) s += r.sum * i, n += i;
    return { sum: s, count: n };
  }, postMap: (e) => e.sum / e.count };
}
function Eu(t) {
  const e = t ?? ((s) => s);
  return { preMap: (s) => e(s), reduce: (s) => {
    let n;
    for (const [r, i] of s) (!n || r && r < n) && (n = r);
    return n;
  } };
}
function Ou(t) {
  const e = t ?? ((s) => s);
  return { preMap: (s) => e(s), reduce: (s) => {
    let n;
    for (const [r, i] of s) (!n || r && r > n) && (n = r);
    return n;
  } };
}
const Mu = { sum: _u, count: ku, avg: Iu, min: Eu, max: Ou };
class Tu extends An {
  constructor(e, s, n, r) {
    super(e, s, n);
    __privateAdd(this, _e20);
    __privateSet(this, _e20, r);
  }
  inner(e) {
    return __privateGet(this, _e20).call(this, e), e;
  }
}
_e20 = new WeakMap();
function Lu(t) {
  return (e) => {
    const s = new ke(e.graph, new _e()), n = new Tu(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
class Au extends An {
  constructor(e, s, n, r) {
    super(e, s, n);
    __privateAdd(this, _e21);
    __privateSet(this, _e21, r);
  }
  inner(e) {
    return e.filter(__privateGet(this, _e21));
  }
}
_e21 = new WeakMap();
function je(t) {
  return (e) => {
    const s = new ke(e.graph, new _e()), n = new Au(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
class Fu extends ct {
  constructor(e, s, n, r) {
    super(e, s, n);
    __privateAdd(this, _e22);
    __privateSet(this, _e22, r);
  }
  run() {
    for (const e of this.inputMessages()) __privateGet(this, _e22).call(this, e), this.output.sendData(e);
  }
}
_e22 = new WeakMap();
function Du(t) {
  return (e) => {
    const s = new ke(e.graph, new _e()), n = new Fu(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
class Bu extends ct {
  run() {
    const e = this.inputMessages();
    if (e.length === 0) return;
    const s = new H();
    for (const r of e) s.extend(r);
    const n = s.consolidate();
    n.getInner().length > 0 && this.output.sendData(n);
  }
}
function Ku() {
  return (t) => {
    const e = new ke(t.graph, new _e()), s = new Bu(t.graph.getNextOperatorId(), t.connectReader(), e.writer);
    return t.graph.addOperator(s), e;
  };
}
class ju extends Su {
  constructor(e, s, n, r, i = "inner") {
    super(e, s, n, r);
    __privateAdd(this, _e23, new Ke());
    __privateAdd(this, _t13, new Ke());
    __privateAdd(this, _s10);
    __privateSet(this, _s10, i);
  }
  run() {
    const e = Ke.fromMultiSets(this.inputAMessages()), s = Ke.fromMultiSets(this.inputBMessages());
    if (e.size === 0 && s.size === 0) return;
    const n = new H();
    __privateGet(this, _s10) !== "anti" && this.emitInnerResults(e, s, n), (__privateGet(this, _s10) === "left" || __privateGet(this, _s10) === "full" || __privateGet(this, _s10) === "anti") && this.emitLeftOuterResults(e, s, n), (__privateGet(this, _s10) === "right" || __privateGet(this, _s10) === "full") && this.emitRightOuterResults(e, s, n), __privateGet(this, _e23).append(e), __privateGet(this, _t13).append(s), n.getInner().length > 0 && this.output.sendData(n);
  }
  emitInnerResults(e, s, n) {
    e.size > 0 && n.extend(e.join(__privateGet(this, _t13))), s.size > 0 && n.extend(__privateGet(this, _e23).join(s)), e.size > 0 && s.size > 0 && n.extend(e.join(s));
  }
  emitLeftOuterResults(e, s, n) {
    if (e.size > 0) for (const [r, i] of e.entriesIterators()) {
      const o = __privateGet(this, _t13).getConsolidatedMultiplicity(r), a = s.getConsolidatedMultiplicity(r);
      if (o + a === 0) for (const [l, h] of i) h !== 0 && n.add([r, [l, null]], h);
    }
    if (s.size > 0) for (const r of s.getPresenceKeys()) {
      const i = __privateGet(this, _t13).getConsolidatedMultiplicity(r), o = s.getConsolidatedMultiplicity(r);
      if (o === 0) continue;
      const a = i + o;
      if (i === 0 == (a === 0)) continue;
      const c = i === 0;
      for (const [l, h] of __privateGet(this, _e23).getIterator(r)) h !== 0 && n.add([r, [l, null]], c ? -h : +h);
    }
  }
  emitRightOuterResults(e, s, n) {
    if (s.size > 0) for (const [r, i] of s.entriesIterators()) {
      const o = __privateGet(this, _e23).getConsolidatedMultiplicity(r), a = e.getConsolidatedMultiplicity(r);
      if (o + a === 0) for (const [l, h] of i) h !== 0 && n.add([r, [null, l]], h);
    }
    if (e.size > 0) for (const r of e.getPresenceKeys()) {
      const i = __privateGet(this, _e23).getConsolidatedMultiplicity(r), o = e.getConsolidatedMultiplicity(r);
      if (o === 0) continue;
      const a = i + o;
      if (i === 0 == (a === 0)) continue;
      const c = i === 0;
      for (const [l, h] of __privateGet(this, _t13).getIterator(r)) h !== 0 && n.add([r, [null, l]], c ? -h : +h);
    }
  }
}
_e23 = new WeakMap();
_t13 = new WeakMap();
_s10 = new WeakMap();
function zu(t, e = "inner") {
  return (s) => {
    if (s.graph !== t.graph) throw new Error("Cannot join streams from different graphs");
    const n = new ke(s.graph, new _e()), r = new ju(s.graph.getNextOperatorId(), s.connectReader(), t.connectReader(), n.writer, e);
    return s.graph.addOperator(r), n;
  };
}
class $u extends ct {
  constructor(e, s, n, r = (i) => i) {
    super(e, s, n);
    __privateAdd(this, _e24);
    __privateAdd(this, _t14);
    __privateSet(this, _e24, r), __privateSet(this, _t14, /* @__PURE__ */ new Map());
  }
  run() {
    var _a5;
    const e = /* @__PURE__ */ new Map();
    for (const n of this.inputMessages()) for (const [r, i] of n.getInner()) {
      const o = oe(__privateGet(this, _e24).call(this, r)), c = (((_a5 = e.get(o)) == null ? void 0 : _a5[0]) ?? __privateGet(this, _t14).get(o) ?? 0) + i;
      e.set(o, [c, r]);
    }
    const s = [];
    for (const [n, [r, i]] of e.entries()) {
      const o = __privateGet(this, _t14).get(n) ?? 0;
      r === 0 ? __privateGet(this, _t14).delete(n) : __privateGet(this, _t14).set(n, r), o <= 0 && r > 0 ? s.push([[oe(__privateGet(this, _e24).call(this, i)), i[1]], 1]) : o > 0 && r <= 0 && s.push([[oe(__privateGet(this, _e24).call(this, i)), i[1]], -1]);
    }
    s.length > 0 && this.output.sendData(new H(s));
  }
}
_e24 = new WeakMap();
_t14 = new WeakMap();
function Nu(t = (e) => e) {
  return (e) => {
    const s = new ke(e.graph, new _e()), n = new $u(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
function Dr(t, e) {
  return [t, e];
}
function Br(t) {
  return t[0];
}
function Kr(t) {
  return t[1];
}
function Uu(t) {
  return ([e, s], [n, r]) => {
    const i = t(s, r);
    return i !== 0 ? i : is(e, n);
  };
}
class Fi {
  constructor(e, s, n) {
    __privateAdd(this, _Fi_instances);
    __privateAdd(this, _e25, []);
    __privateAdd(this, _t15);
    __privateAdd(this, _s11);
    __privateAdd(this, _n5);
    __privateSet(this, _s11, e), __privateSet(this, _n5, e + s), __privateSet(this, _t15, n);
  }
  get size() {
    const e = __privateGet(this, _s11), s = __privateGet(this, _n5) - __privateGet(this, _s11), n = __privateGet(this, _e25).length - e;
    return Math.max(0, Math.min(s, n));
  }
  move({ offset: e, limit: s }) {
    const n = __privateGet(this, _s11), r = __privateGet(this, _n5) - __privateGet(this, _s11), i = [__privateGet(this, _s11), __privateGet(this, _n5) === 1 / 0 ? __privateGet(this, _s11) + this.size : __privateGet(this, _n5)];
    __privateSet(this, _s11, e ?? n), __privateSet(this, _n5, __privateGet(this, _s11) + (s ?? r));
    const o = [__privateGet(this, _s11), __privateGet(this, _n5) === 1 / 0 ? Math.max(__privateGet(this, _s11) + this.size, i[1]) : __privateGet(this, _n5)], { onlyInA: a, onlyInB: c } = Hl(i, o), l = [];
    c.forEach((u) => {
      const f = __privateGet(this, _e25)[u];
      f && l.push(f);
    });
    const h = [];
    return a.forEach((u) => {
      const f = __privateGet(this, _e25)[u];
      f && h.push(f);
    }), { moveIns: l, moveOuts: h, changes: a.length + c.length > 0 };
  }
  insert(e) {
    const s = { moveIn: null, moveOut: null }, n = __privateMethod(this, _Fi_instances, r_fn2).call(this, e), r = n === 0 ? null : Kr(__privateGet(this, _e25)[n - 1]), i = n === __privateGet(this, _e25).length ? null : Kr(__privateGet(this, _e25)[n]), o = no(r, i), a = Dr(e, o);
    if (__privateGet(this, _e25).splice(n, 0, a), n < __privateGet(this, _n5)) {
      const c = Math.max(n, __privateGet(this, _s11));
      c < __privateGet(this, _e25).length && (s.moveIn = __privateGet(this, _e25)[c], __privateGet(this, _n5) < __privateGet(this, _e25).length && (s.moveOut = __privateGet(this, _e25)[__privateGet(this, _n5)]));
    }
    return s;
  }
  delete(e) {
    const s = { moveIn: null, moveOut: null }, n = __privateMethod(this, _Fi_instances, r_fn2).call(this, e), [r] = __privateGet(this, _e25).splice(n, 1);
    if (n < __privateGet(this, _n5)) {
      if (s.moveOut = r, n < __privateGet(this, _s11)) {
        const o = __privateGet(this, _s11) - 1;
        o < __privateGet(this, _e25).length ? s.moveOut = __privateGet(this, _e25)[o] : s.moveOut = null;
      }
      const i = __privateGet(this, _n5) - 1;
      i < __privateGet(this, _e25).length && (s.moveIn = __privateGet(this, _e25)[i]);
    }
    return s;
  }
}
_e25 = new WeakMap();
_t15 = new WeakMap();
_s11 = new WeakMap();
_n5 = new WeakMap();
_Fi_instances = new WeakSet();
r_fn2 = function(e) {
  return ql(__privateGet(this, _e25), Dr(e, ""), (s, n) => __privateGet(this, _t15).call(this, Br(s), Br(n)));
};
class Vu {
  constructor(e) {
    __privateAdd(this, _Vu_instances);
    __privateAdd(this, _e26, /* @__PURE__ */ new Map());
    __privateAdd(this, _t16);
    __privateSet(this, _t16, e);
  }
  get size() {
    return __privateGet(this, _t16).size;
  }
  get isEmpty() {
    return __privateGet(this, _e26).size === 0 && __privateGet(this, _t16).size === 0;
  }
  processElement(e, s, n) {
    const { oldMultiplicity: r, newMultiplicity: i } = __privateMethod(this, _Vu_instances, s_fn3).call(this, e, n);
    return r <= 0 && i > 0 ? __privateGet(this, _t16).insert([e, s]) : r > 0 && i <= 0 ? __privateGet(this, _t16).delete([e, s]) : { moveIn: null, moveOut: null };
  }
  move(e) {
    if (!(__privateGet(this, _t16) instanceof Fi)) throw new Error("Cannot move B+-tree implementation of TopK with fractional index");
    return __privateGet(this, _t16).move(e);
  }
}
_e26 = new WeakMap();
_t16 = new WeakMap();
_Vu_instances = new WeakSet();
s_fn3 = function(e, s) {
  if (s === 0) {
    const i = __privateGet(this, _e26).get(e) ?? 0;
    return { oldMultiplicity: i, newMultiplicity: i };
  }
  const n = __privateGet(this, _e26).get(e) ?? 0, r = n + s;
  return r === 0 ? __privateGet(this, _e26).delete(e) : __privateGet(this, _e26).set(e, r), { oldMultiplicity: n, newMultiplicity: r };
};
function jr(t, e) {
  if (t) {
    const [[s, n], r] = t;
    e.push([[s, [n, r]], 1]);
  }
}
function zr(t, e) {
  if (t) {
    const [[s, n], r] = t;
    e.push([[s, [n, r]], -1]);
  }
}
class qu extends ct {
  constructor(e, s, n, r, i) {
    var _a5, _b2;
    super(e, s, n);
    __privateAdd(this, _e27);
    const o = i.limit ?? 1 / 0, a = i.offset ?? 0, c = this.createTopK(a, o, Uu(r));
    __privateSet(this, _e27, new Vu(c)), (_a5 = i.setSizeCallback) == null ? void 0 : _a5.call(i, () => __privateGet(this, _e27).size), (_b2 = i.setWindowFn) == null ? void 0 : _b2.call(i, this.moveTopK.bind(this));
  }
  createTopK(e, s, n) {
    return new Fi(e, s, n);
  }
  moveTopK({ offset: e, limit: s }) {
    const n = [], r = __privateGet(this, _e27).move({ offset: e, limit: s });
    r.moveIns.forEach((i) => jr(i, n)), r.moveOuts.forEach((i) => zr(i, n)), r.changes && this.output.sendData(new H(n));
  }
  run() {
    const e = [];
    for (const s of this.inputMessages()) for (const [n, r] of s.getInner()) {
      const [i, o] = n;
      this.processElement(i, o, r, e);
    }
    e.length > 0 && this.output.sendData(new H(e));
  }
  processElement(e, s, n, r) {
    const i = __privateGet(this, _e27).processElement(e, s, n);
    jr(i.moveIn, r), zr(i.moveOut, r);
  }
}
_e27 = new WeakMap();
function Wu(t, e) {
  const s = e || {};
  return (n) => {
    const r = new ke(n.graph, new _e()), i = new qu(n.graph.getNextOperatorId(), n.connectReader(), r.writer, t, s);
    return n.graph.addOperator(i), r;
  };
}
function Hu(t, e, s) {
  const n = (s == null ? void 0 : s.limit) ?? 1 / 0, r = (s == null ? void 0 : s.offset) ?? 0, i = s == null ? void 0 : s.setSizeCallback, o = s == null ? void 0 : s.setWindowFn, a = (s == null ? void 0 : s.comparator) ?? ((c, l) => c === l ? 0 : c < l ? -1 : 1);
  return (c) => c.pipe(t((l, h) => a(e(l), e(h)), { limit: n, offset: r, setSizeCallback: i, setWindowFn: o }), Ku());
}
function Gu(t, e) {
  return Hu(Wu, t, e);
}
class Qu {
  constructor(e, s, n) {
    this._root = Bs, this._size = 0, this._maxNodeSize = n >= 4 ? Math.min(n, 256) : 32, this._compare = e, s && this.setPairs(s);
  }
  get size() {
    return this._size;
  }
  get length() {
    return this._size;
  }
  get isEmpty() {
    return this._size === 0;
  }
  clear() {
    this._root = Bs, this._size = 0;
  }
  get(e, s) {
    return this._root.get(e, s, this);
  }
  set(e, s, n) {
    this._root.isShared && (this._root = this._root.clone());
    const r = this._root.set(e, s, n, this);
    return r === true || r === false ? r : (this._root = new Fn([this._root, r]), true);
  }
  has(e) {
    return this.forRange(e, e, true, void 0) !== 0;
  }
  delete(e) {
    return this.editRange(e, e, true, Yu) !== 0;
  }
  get maxNodeSize() {
    return this._maxNodeSize;
  }
  minKey() {
    return this._root.minKey();
  }
  maxKey() {
    return this._root.maxKey();
  }
  keysArray() {
    const e = [];
    return this._root.forRange(this.minKey(), this.maxKey(), true, false, this, 0, (s, n) => {
      e.push(s);
    }), e;
  }
  nextHigherPair(e, s) {
    return s = s || [], e === void 0 ? this._root.minPair(s) : this._root.getPairOrNextHigher(e, this._compare, false, s);
  }
  nextHigherKey(e) {
    const s = this.nextHigherPair(e, $r);
    return s && s[0];
  }
  nextLowerPair(e, s) {
    return s = s || [], e === void 0 ? this._root.maxPair(s) : this._root.getPairOrNextLower(e, this._compare, false, s);
  }
  nextLowerKey(e) {
    const s = this.nextLowerPair(e, $r);
    return s && s[0];
  }
  setPairs(e, s) {
    let n = 0;
    for (const r of e) this.set(r[0], r[1], s) && n++;
    return n;
  }
  forRange(e, s, n, r, i) {
    const o = this._root.forRange(e, s, n, false, this, i || 0, r);
    return typeof o == "number" ? o : o.break;
  }
  editRange(e, s, n, r, i) {
    let o = this._root;
    o.isShared && (this._root = o = o.clone());
    try {
      const a = o.forRange(e, s, n, true, this, i || 0, r);
      return typeof a == "number" ? a : a.break;
    } finally {
      let a;
      for (; o.keys.length <= 1 && !o.isLeaf; ) a || (a = o.isShared), this._root = o = o.keys.length === 0 ? Bs : o.children[0];
      a && (o.isShared = true);
    }
  }
}
class Lt {
  get isLeaf() {
    return this.children === void 0;
  }
  constructor(e = [], s) {
    this.keys = e, this.values = s || te, this.isShared = void 0;
  }
  maxKey() {
    return this.keys[this.keys.length - 1];
  }
  indexOf(e, s, n) {
    const r = this.keys;
    let i = 0, o = r.length, a = o >> 1;
    for (; i < o; ) {
      const c = n(r[a], e);
      if (c < 0) i = a + 1;
      else if (c > 0) o = a;
      else {
        if (c === 0) return a;
        if (e === e) return r.length;
        throw new Error("BTree: NaN was used as a key");
      }
      a = i + o >> 1;
    }
    return a ^ s;
  }
  minKey() {
    return this.keys[0];
  }
  minPair(e) {
    if (this.keys.length !== 0) return e[0] = this.keys[0], e[1] = this.values[0], e;
  }
  maxPair(e) {
    if (this.keys.length === 0) return;
    const s = this.keys.length - 1;
    return e[0] = this.keys[s], e[1] = this.values[s], e;
  }
  clone() {
    const e = this.values;
    return new Lt(this.keys.slice(0), e === te ? e : e.slice(0));
  }
  get(e, s, n) {
    const r = this.indexOf(e, -1, n._compare);
    return r < 0 ? s : this.values[r];
  }
  getPairOrNextLower(e, s, n, r) {
    const i = this.indexOf(e, -1, s), o = i < 0 ? ~i - 1 : n ? i : i - 1;
    if (o >= 0) return r[0] = this.keys[o], r[1] = this.values[o], r;
  }
  getPairOrNextHigher(e, s, n, r) {
    const i = this.indexOf(e, -1, s), o = i < 0 ? ~i : n ? i : i + 1, a = this.keys;
    if (o < a.length) return r[0] = a[o], r[1] = this.values[o], r;
  }
  set(e, s, n, r) {
    let i = this.indexOf(e, -1, r._compare);
    if (i < 0) {
      if (i = ~i, r._size++, this.keys.length < r._maxNodeSize) return this.insertInLeaf(i, e, s, r);
      {
        const o = this.splitOffRightSide();
        let a = this;
        return i > this.keys.length && (i -= this.keys.length, a = o), a.insertInLeaf(i, e, s, r), o;
      }
    } else return n !== false && (s !== void 0 && this.reifyValues(), this.keys[i] = e, this.values[i] = s), false;
  }
  reifyValues() {
    return this.values === te ? this.values = this.values.slice(0, this.keys.length) : this.values;
  }
  insertInLeaf(e, s, n, r) {
    if (this.keys.splice(e, 0, s), this.values === te) {
      for (; te.length < r._maxNodeSize; ) te.push(void 0);
      if (n === void 0) return true;
      this.values = te.slice(0, this.keys.length - 1);
    }
    return this.values.splice(e, 0, n), true;
  }
  takeFromRight(e) {
    let s = this.values;
    e.values === te ? s !== te && s.push(void 0) : (s = this.reifyValues(), s.push(e.values.shift())), this.keys.push(e.keys.shift());
  }
  takeFromLeft(e) {
    let s = this.values;
    e.values === te ? s !== te && s.unshift(void 0) : (s = this.reifyValues(), s.unshift(e.values.pop())), this.keys.unshift(e.keys.pop());
  }
  splitOffRightSide() {
    const e = this.keys.length >> 1, s = this.keys.splice(e), n = this.values === te ? te : this.values.splice(e);
    return new Lt(s, n);
  }
  forRange(e, s, n, r, i, o, a) {
    const c = i._compare;
    let l, h;
    if (s === e) {
      if (!n || (h = (l = this.indexOf(e, -1, c)) + 1, l < 0)) return o;
    } else l = this.indexOf(e, 0, c), h = this.indexOf(s, -1, c), h < 0 ? h = ~h : n === true && h++;
    const u = this.keys, f = this.values;
    if (a !== void 0) for (let p = l; p < h; p++) {
      const d = u[p], y = a(d, f[p], o++);
      if (y !== void 0) {
        if (r === true) {
          if (d !== u[p] || this.isShared === true) throw new Error("BTree illegally changed or cloned in editRange");
          y.delete ? (this.keys.splice(p, 1), this.values !== te && this.values.splice(p, 1), i._size--, p--, h--) : y.hasOwnProperty("value") && (f[p] = y.value);
        }
        if (y.break !== void 0) return y;
      }
    }
    else o += h - l;
    return o;
  }
  mergeSibling(e, s) {
    if (this.keys.push.apply(this.keys, e.keys), this.values === te) {
      if (e.values === te) return;
      this.values = this.values.slice(0, this.keys.length);
    }
    this.values.push.apply(this.values, e.reifyValues());
  }
}
class Fn extends Lt {
  constructor(e, s) {
    if (!s) {
      s = [];
      for (let n = 0; n < e.length; n++) s[n] = e[n].maxKey();
    }
    super(s), this.children = e;
  }
  minKey() {
    return this.children[0].minKey();
  }
  minPair(e) {
    return this.children[0].minPair(e);
  }
  maxPair(e) {
    return this.children[this.children.length - 1].maxPair(e);
  }
  get(e, s, n) {
    const r = this.indexOf(e, 0, n._compare), i = this.children;
    return r < i.length ? i[r].get(e, s, n) : void 0;
  }
  getPairOrNextLower(e, s, n, r) {
    const i = this.indexOf(e, 0, s), o = this.children;
    if (i >= o.length) return this.maxPair(r);
    const a = o[i].getPairOrNextLower(e, s, n, r);
    return a === void 0 && i > 0 ? o[i - 1].maxPair(r) : a;
  }
  getPairOrNextHigher(e, s, n, r) {
    const i = this.indexOf(e, 0, s), o = this.children, a = o.length;
    if (i >= a) return;
    const c = o[i].getPairOrNextHigher(e, s, n, r);
    return c === void 0 && i < a - 1 ? o[i + 1].minPair(r) : c;
  }
  set(e, s, n, r) {
    const i = this.children, o = r._maxNodeSize, a = r._compare;
    let c = Math.min(this.indexOf(e, 0, a), i.length - 1), l = i[c];
    if (l.isShared && (i[c] = l = l.clone()), l.keys.length >= o) {
      let u;
      c > 0 && (u = i[c - 1]).keys.length < o && a(l.keys[0], e) < 0 ? (u.isShared && (i[c - 1] = u = u.clone()), u.takeFromRight(l), this.keys[c - 1] = u.maxKey()) : (u = i[c + 1]) !== void 0 && u.keys.length < o && a(l.maxKey(), e) < 0 && (u.isShared && (i[c + 1] = u = u.clone()), u.takeFromLeft(l), this.keys[c] = i[c].maxKey());
    }
    const h = l.set(e, s, n, r);
    if (h === false) return false;
    if (this.keys[c] = l.maxKey(), h === true) return true;
    if (this.keys.length < o) return this.insert(c + 1, h), true;
    {
      const u = this.splitOffRightSide();
      let f = this;
      return a(h.maxKey(), this.maxKey()) > 0 && (f = u, c -= this.keys.length), f.insert(c + 1, h), u;
    }
  }
  insert(e, s) {
    this.children.splice(e, 0, s), this.keys.splice(e, 0, s.maxKey());
  }
  splitOffRightSide() {
    const e = this.children.length >> 1;
    return new Fn(this.children.splice(e), this.keys.splice(e));
  }
  takeFromRight(e) {
    this.keys.push(e.keys.shift()), this.children.push(e.children.shift());
  }
  takeFromLeft(e) {
    this.keys.unshift(e.keys.pop()), this.children.unshift(e.children.pop());
  }
  forRange(e, s, n, r, i, o, a) {
    const c = i._compare, l = this.keys, h = this.children;
    let u = this.indexOf(e, 0, c), f = u;
    const p = Math.min(s === e ? u : this.indexOf(s, 0, c), l.length - 1);
    if (r) {
      if (f <= p) try {
        for (; f <= p; f++) {
          h[f].isShared && (h[f] = h[f].clone());
          const d = h[f].forRange(e, s, n, r, i, o, a);
          if (l[f] = h[f].maxKey(), typeof d != "number") return d;
          o = d;
        }
      } finally {
        const d = i._maxNodeSize >> 1;
        for (u > 0 && u--, f = p; f >= u; f--) h[f].keys.length <= d && (h[f].keys.length !== 0 ? this.tryMerge(f, i._maxNodeSize) : (l.splice(f, 1), h.splice(f, 1)));
        h.length !== 0 && h[0].keys.length === 0 && Xu(false, "emptiness bug");
      }
    } else for (; f <= p; f++) {
      const d = h[f].forRange(e, s, n, r, i, o, a);
      if (typeof d != "number") return d;
      o = d;
    }
    return o;
  }
  tryMerge(e, s) {
    const n = this.children;
    return e >= 0 && e + 1 < n.length && n[e].keys.length + n[e + 1].keys.length <= s ? (n[e].isShared && (n[e] = n[e].clone()), n[e].mergeSibling(n[e + 1], s), n.splice(e + 1, 1), this.keys.splice(e + 1, 1), this.keys[e] = n[e].maxKey(), true) : false;
  }
  mergeSibling(e, s) {
    const n = this.keys.length;
    this.keys.push.apply(this.keys, e.keys);
    const r = e.children;
    if (this.children.push.apply(this.children, r), e.isShared && !this.isShared) for (const i of r) i.isShared = true;
    this.tryMerge(n - 1, s);
  }
}
const te = [], Ju = { delete: true }, Yu = () => Ju, Bs = (function() {
  const t = new Lt();
  return t.isShared = true, t;
})(), $r = [];
function Xu(t, ...e) {
  throw e.unshift("B+ tree"), new Error(e.join(" "));
}
function Di() {
  const t = /* @__PURE__ */ new Map();
  function e(s) {
    const n = s.join(".");
    if (t.has(n)) return t.get(n);
    const r = new Proxy({}, { get(i, o, a) {
      if (o === "__refProxy") return true;
      if (o === "__path") return s;
      if (o === "__type") return;
      if (typeof o == "symbol") return Reflect.get(i, o, a);
      const c = [...s, String(o)];
      return e(c);
    }, has(i, o) {
      return o === "__refProxy" || o === "__path" || o === "__type" ? true : Reflect.has(i, o);
    }, ownKeys(i) {
      return Reflect.ownKeys(i);
    }, getOwnPropertyDescriptor(i, o) {
      return o === "__refProxy" || o === "__path" || o === "__type" ? { enumerable: false, configurable: true } : Reflect.getOwnPropertyDescriptor(i, o);
    } });
    return t.set(n, r), r;
  }
  return e([]);
}
function Ue(t) {
  const e = /* @__PURE__ */ new Map();
  let s = 0;
  function n(i) {
    const o = i.join(".");
    if (e.has(o)) return e.get(o);
    const a = new Proxy({}, { get(c, l, h) {
      if (l === "__refProxy") return true;
      if (l === "__path") return i;
      if (l === "__type") return;
      if (typeof l == "symbol") return Reflect.get(c, l, h);
      const u = [...i, String(l)];
      return n(u);
    }, has(c, l) {
      return l === "__refProxy" || l === "__path" || l === "__type" ? true : Reflect.has(c, l);
    }, ownKeys(c) {
      const l = ++s, h = `__SPREAD_SENTINEL__${i.join(".")}__${l}`;
      return Object.prototype.hasOwnProperty.call(c, h) || Object.defineProperty(c, h, { enumerable: true, configurable: true, value: true }), Reflect.ownKeys(c);
    }, getOwnPropertyDescriptor(c, l) {
      return l === "__refProxy" || l === "__path" || l === "__type" ? { enumerable: false, configurable: true } : Reflect.getOwnPropertyDescriptor(c, l);
    } });
    return e.set(o, a), a;
  }
  return new Proxy({}, { get(i, o, a) {
    if (o === "__refProxy") return true;
    if (o === "__path") return [];
    if (o === "__type") return;
    if (typeof o == "symbol") return Reflect.get(i, o, a);
    const c = String(o);
    if (t.includes(c)) return n([c]);
  }, has(i, o) {
    return o === "__refProxy" || o === "__path" || o === "__type" || typeof o == "string" && t.includes(o) ? true : Reflect.has(i, o);
  }, ownKeys(i) {
    return [...t, "__refProxy", "__path", "__type"];
  }, getOwnPropertyDescriptor(i, o) {
    if (o === "__refProxy" || o === "__path" || o === "__type") return { enumerable: false, configurable: true };
    if (typeof o == "string" && t.includes(o)) return { enumerable: true, configurable: true };
  } });
}
function Nr(t) {
  const e = Ue(t), s = /* @__PURE__ */ new Map();
  function n(i) {
    const o = i.join(".");
    if (s.has(o)) return s.get(o);
    const a = new Proxy({}, { get(c, l, h) {
      if (l === "__refProxy") return true;
      if (l === "__path") return ["$selected", ...i];
      if (l === "__type") return;
      if (typeof l == "symbol") return Reflect.get(c, l, h);
      const u = [...i, String(l)];
      return n(u);
    }, has(c, l) {
      return l === "__refProxy" || l === "__path" || l === "__type" ? true : Reflect.has(c, l);
    }, ownKeys(c) {
      return Reflect.ownKeys(c);
    }, getOwnPropertyDescriptor(c, l) {
      return l === "__refProxy" || l === "__path" || l === "__type" ? { enumerable: false, configurable: true } : Reflect.getOwnPropertyDescriptor(c, l);
    } });
    return s.set(o, a), a;
  }
  const r = n([]);
  return new Proxy(e, { get(i, o, a) {
    return o === "$selected" ? r : Reflect.get(i, o, a);
  }, has(i, o) {
    return o === "$selected" ? true : Reflect.has(i, o);
  }, ownKeys(i) {
    return [...Reflect.ownKeys(i), "$selected"];
  }, getOwnPropertyDescriptor(i, o) {
    return o === "$selected" ? { enumerable: true, configurable: true, value: r } : Reflect.getOwnPropertyDescriptor(i, o);
  } });
}
function G(t) {
  return Zu(t) ? new ce(t.__path) : t && typeof t == "object" && "type" in t && (t.type === "func" || t.type === "ref" || t.type === "val" || t.type === "agg") ? t : new he(t);
}
function Zu(t) {
  return t && typeof t == "object" && t.__refProxy === true;
}
function Zs(t, e) {
  return new we("eq", [G(t), G(e)]);
}
function Ur(t, e) {
  return new we("gt", [G(t), G(e)]);
}
function eh(t, e) {
  return new we("gte", [G(t), G(e)]);
}
function en(t, e) {
  return new we("lt", [G(t), G(e)]);
}
function tn(t, e, ...s) {
  const n = [t, e, ...s];
  return new we("and", n.map((r) => G(r)));
}
function th(t, e, ...s) {
  const n = [t, e, ...s];
  return new we("or", n.map((r) => G(r)));
}
function sh(t, e) {
  return new we("in", [G(t), G(e)]);
}
class nh {
  constructor(e, s, n, r) {
    this.lookupCount = 0, this.totalLookupTime = 0, this.lastUpdated = /* @__PURE__ */ new Date(), this.id = e, this.expression = s, this.compareOptions = Mn, this.name = n, this.initialize(r);
  }
  supports(e) {
    return this.supportedOperations.has(e);
  }
  matchesField(e) {
    return this.expression.type === "ref" && this.expression.path.length === e.length && this.expression.path.every((s, n) => s === e[n]);
  }
  matchesCompareOptions(e) {
    const s = { ...this.compareOptions, direction: void 0 }, n = { ...e, direction: void 0 };
    return Re(s, n);
  }
  matchesDirection(e) {
    return this.compareOptions.direction === e;
  }
  getStats() {
    return { entryCount: this.keyCount, lookupCount: this.lookupCount, averageLookupTime: this.lookupCount > 0 ? this.totalLookupTime / this.lookupCount : 0, lastUpdated: this.lastUpdated };
  }
  evaluateIndexExpression(e) {
    return En(this.expression)(e);
  }
  trackLookup(e) {
    const s = performance.now() - e;
    this.lookupCount++, this.totalLookupTime += s;
  }
  updateTimestamp() {
    this.lastUpdated = /* @__PURE__ */ new Date();
  }
}
class sn extends nh {
  constructor(e, s, n, r) {
    super(e, s, n, r), this.supportedOperations = /* @__PURE__ */ new Set(["eq", "gt", "gte", "lt", "lte", "in"]), this.valueMap = /* @__PURE__ */ new Map(), this.indexedKeys = /* @__PURE__ */ new Set(), this.compareFn = Qs;
    const i = (r == null ? void 0 : r.compareFn) ?? Qs;
    this.compareFn = (o, a) => i(pt(o), pt(a)), (r == null ? void 0 : r.compareOptions) && (this.compareOptions = r.compareOptions), this.orderedEntries = new Qu(this.compareFn);
  }
  initialize(e) {
  }
  add(e, s) {
    let n;
    try {
      n = this.evaluateIndexExpression(s);
    } catch (i) {
      throw new Error(`Failed to evaluate index expression for key ${e}: ${i}`);
    }
    const r = Le(n);
    if (this.valueMap.has(r)) this.valueMap.get(r).add(e);
    else {
      const i = /* @__PURE__ */ new Set([e]);
      this.valueMap.set(r, i), this.orderedEntries.set(r, void 0);
    }
    this.indexedKeys.add(e), this.updateTimestamp();
  }
  remove(e, s) {
    let n;
    try {
      n = this.evaluateIndexExpression(s);
    } catch (i) {
      console.warn(`Failed to evaluate index expression for key ${e} during removal:`, i);
      return;
    }
    const r = Le(n);
    if (this.valueMap.has(r)) {
      const i = this.valueMap.get(r);
      i.delete(e), i.size === 0 && (this.valueMap.delete(r), this.orderedEntries.delete(r));
    }
    this.indexedKeys.delete(e), this.updateTimestamp();
  }
  update(e, s, n) {
    this.remove(e, s), this.add(e, n);
  }
  build(e) {
    this.clear();
    for (const [s, n] of e) this.add(s, n);
  }
  clear() {
    this.orderedEntries.clear(), this.valueMap.clear(), this.indexedKeys.clear(), this.updateTimestamp();
  }
  lookup(e, s) {
    const n = performance.now();
    let r;
    switch (e) {
      case "eq":
        r = this.equalityLookup(s);
        break;
      case "gt":
        r = this.rangeQuery({ from: s, fromInclusive: false });
        break;
      case "gte":
        r = this.rangeQuery({ from: s, fromInclusive: true });
        break;
      case "lt":
        r = this.rangeQuery({ to: s, toInclusive: false });
        break;
      case "lte":
        r = this.rangeQuery({ to: s, toInclusive: true });
        break;
      case "in":
        r = this.inArrayLookup(s);
        break;
      default:
        throw new Error(`Operation ${e} not supported by BTreeIndex`);
    }
    return this.trackLookup(n), r;
  }
  get keyCount() {
    return this.indexedKeys.size;
  }
  equalityLookup(e) {
    const s = Le(e);
    return new Set(this.valueMap.get(s) ?? []);
  }
  rangeQuery(e = {}) {
    const { from: s, to: n, fromInclusive: r = true, toInclusive: i = true } = e, o = /* @__PURE__ */ new Set(), a = "from" in e, c = "to" in e, l = a ? Le(s) : this.orderedEntries.minKey(), h = c ? Le(n) : this.orderedEntries.maxKey();
    return this.orderedEntries.forRange(l, h, i, (u, f) => {
      if (!r && this.compareFn(u, s) === 0) return;
      const p = this.valueMap.get(u);
      p && p.forEach((d) => o.add(d));
    }), o;
  }
  rangeQueryReversed(e = {}) {
    const { from: s, to: n, fromInclusive: r = true, toInclusive: i = true } = e, o = "from" in e, a = "to" in e;
    return this.rangeQuery({ from: a ? n : this.orderedEntries.maxKey(), to: o ? s : this.orderedEntries.minKey(), fromInclusive: i, toInclusive: r });
  }
  takeInternal(e, s, n, r, i = false) {
    const o = /* @__PURE__ */ new Set(), a = [];
    let c, l = n;
    for (; (c = s(l)) !== void 0 && a.length < e; ) {
      l = c[0];
      const h = this.valueMap.get(l);
      if (h && h.size > 0) {
        const u = Array.from(h).sort(is);
        i && u.reverse();
        for (const f of u) {
          if (a.length >= e) break;
          !o.has(f) && ((r == null ? void 0 : r(f)) ?? true) && (a.push(f), o.add(f));
        }
      }
    }
    return a;
  }
  take(e, s, n) {
    const r = (o) => this.orderedEntries.nextHigherPair(o), i = Le(s);
    return this.takeInternal(e, r, i, n);
  }
  takeFromStart(e, s) {
    const n = (r) => this.orderedEntries.nextHigherPair(r);
    return this.takeInternal(e, n, void 0, s);
  }
  takeReversed(e, s, n) {
    const r = (o) => this.orderedEntries.nextLowerPair(o), i = Le(s);
    return this.takeInternal(e, r, i, n, true);
  }
  takeReversedFromEnd(e, s) {
    const n = (r) => this.orderedEntries.nextLowerPair(r);
    return this.takeInternal(e, n, void 0, s, true);
  }
  inArrayLookup(e) {
    const s = /* @__PURE__ */ new Set();
    for (const n of e) {
      const r = Le(n), i = this.valueMap.get(r);
      i && i.forEach((o) => s.add(o));
    }
    return s;
  }
  get indexedKeysSet() {
    return this.indexedKeys;
  }
  get orderedEntriesArray() {
    return this.orderedEntries.keysArray().map((e) => [pt(e), this.valueMap.get(e) ?? /* @__PURE__ */ new Set()]);
  }
  get orderedEntriesArrayReversed() {
    return this.takeReversedFromEnd(this.orderedEntries.size).map((e) => [pt(e), this.valueMap.get(e) ?? /* @__PURE__ */ new Set()]);
  }
  get valueMapData() {
    const e = /* @__PURE__ */ new Map();
    for (const [s, n] of this.valueMap) e.set(pt(s), n);
    return e;
  }
}
function Bi(t) {
  return t.config.autoIndex === "eager";
}
function vs(t, e, s, n, r) {
  if (!Bi(s)) return;
  const i = n ?? { ...Mn, ...s.compareOptions };
  if (!Array.from(s.indexes.values()).find((a) => a.matchesField(e) && a.matchesCompareOptions(i))) try {
    s.createIndex((a) => {
      let c = a;
      for (const l of e) c = c[l];
      return c;
    }, { name: `auto:${e.join(".")}`, indexType: sn, options: r ? { compareFn: r, compareOptions: i } : {} });
  } catch (a) {
    console.warn(`${s.id ? `[${s.id}] ` : ""}Failed to create auto-index for field path "${e.join(".")}":`, a);
  }
}
function rh(t, e) {
  if (!Bi(e)) return;
  const s = ih(t);
  for (const { fieldName: n, fieldPath: r } of s) vs(n, r, e);
}
function ih(t) {
  const e = [];
  function s(n) {
    if (n.type !== "func") return;
    const r = n;
    if (r.name === "and") {
      for (const l of r.args) s(l);
      return;
    }
    if (!["eq", "gt", "gte", "lt", "lte", "in"].includes(r.name) || r.args.length < 1 || r.args[0].type !== "ref") return;
    const a = r.args[0].path;
    if (a.length === 0) return;
    const c = a.join("_");
    e.push({ fieldName: c, fieldPath: a });
  }
  return s(t), e;
}
const { sum: oh, count: ah, avg: ch, min: lh, max: uh } = Mu;
function hh(t, e) {
  const s = /* @__PURE__ */ new Map(), n = [...t];
  if (!e) return { selectToGroupByIndex: s, groupByExpressions: n };
  for (const [r, i] of Object.entries(e)) {
    if (i.type === "agg") continue;
    const o = n.findIndex((a) => os(i, a));
    if (o === -1) throw new ml(r);
    s.set(r, o);
  }
  return { selectToGroupByIndex: s, groupByExpressions: n };
}
function Vr(t, e, s, n, r) {
  if (e.length === 0) {
    const l = {};
    if (n) {
      for (const [u, f] of Object.entries(n)) if (f.type === "agg") {
        const p = f;
        l[u] = qr(p);
      }
    }
    const h = () => ({ __singleGroup: true });
    if (t = t.pipe(Fr(h, l)), t = t.pipe(ae(([, u]) => {
      const p = { ...u.$selected || {} };
      if (n) for (const [d, y] of Object.entries(n)) y.type === "agg" && (p[d] = u[d]);
      return ["single_group", { ...u, $selected: p }];
    })), s && s.length > 0) for (const u of s) {
      const f = br(u), p = as(f, n || {}, "$selected"), d = fe(p);
      t = t.pipe(je(([, y]) => {
        const g = { $selected: y.$selected };
        return nt(d(g));
      }));
    }
    if (r && r.length > 0) for (const u of r) t = t.pipe(je(([, f]) => {
      const p = { $selected: f.$selected };
      return nt(u(p));
    }));
    return t;
  }
  const i = hh(e, n), o = e.map((l) => fe(l)), a = ([, l]) => {
    const h = { ...l };
    delete h.$selected;
    const u = {};
    for (let f = 0; f < e.length; f++) {
      const p = o[f], d = p(h);
      u[`__key_${f}`] = d;
    }
    return u;
  }, c = {};
  if (n) {
    for (const [l, h] of Object.entries(n)) if (h.type === "agg") {
      const u = h;
      c[l] = qr(u);
    }
  }
  if (t = t.pipe(Fr(a, c)), t = t.pipe(ae(([, l]) => {
    const h = l.$selected || {}, u = {};
    if (n) for (const [p, d] of Object.entries(n)) if (d.type !== "agg") {
      const y = i.selectToGroupByIndex.get(p);
      y !== void 0 ? u[p] = l[`__key_${y}`] : u[p] = h[p];
    } else u[p] = l[p];
    else for (let p = 0; p < e.length; p++) u[`__key_${p}`] = l[`__key_${p}`];
    let f;
    if (e.length === 1) f = l.__key_0;
    else {
      const p = [];
      for (let d = 0; d < e.length; d++) p.push(l[`__key_${d}`]);
      f = Ln(p);
    }
    return [f, { ...l, $selected: u }];
  })), s && s.length > 0) for (const l of s) {
    const h = br(l), u = as(h, n || {}), f = fe(u);
    t = t.pipe(je(([, p]) => {
      const d = { $selected: p.$selected };
      return f(d);
    }));
  }
  if (r && r.length > 0) for (const l of r) t = t.pipe(je(([, h]) => {
    const u = { $selected: h.$selected };
    return nt(l(u));
  }));
  return t;
}
function os(t, e) {
  var _a5, _b2, _c3, _d2;
  if (!t || !e || t.type !== e.type) return false;
  switch (t.type) {
    case "ref":
      return !t.path || !e.path || t.path.length !== e.path.length ? false : t.path.every((s, n) => s === e.path[n]);
    case "val":
      return t.value === e.value;
    case "func":
      return t.name === e.name && ((_a5 = t.args) == null ? void 0 : _a5.length) === ((_b2 = e.args) == null ? void 0 : _b2.length) && (t.args || []).every((s, n) => os(s, e.args[n]));
    case "agg":
      return t.name === e.name && ((_c3 = t.args) == null ? void 0 : _c3.length) === ((_d2 = e.args) == null ? void 0 : _d2.length) && (t.args || []).every((s, n) => os(s, e.args[n]));
    default:
      return false;
  }
}
function qr(t) {
  const e = fe(t.args[0]), s = ([, i]) => {
    const o = e(i);
    return typeof o == "number" ? o : o != null ? Number(o) : 0;
  }, n = ([, i]) => {
    const o = e(i);
    return typeof o == "number" || typeof o == "string" || typeof o == "bigint" || o instanceof Date ? o : o != null ? Number(o) : 0;
  }, r = ([, i]) => e(i);
  switch (t.name.toLowerCase()) {
    case "sum":
      return oh(s);
    case "count":
      return ah(r);
    case "avg":
      return ch(s);
    case "min":
      return lh(n);
    case "max":
      return uh(n);
    default:
      throw new wl(t.name);
  }
}
function as(t, e, s = "$selected") {
  switch (t.type) {
    case "agg": {
      const n = t;
      for (const [r, i] of Object.entries(e)) if (i.type === "agg" && fh(n, i)) return new ce([s, r]);
      throw new vl(n.name);
    }
    case "func": {
      const n = t, r = n.args.map((i) => as(i, e));
      return new we(n.name, r);
    }
    case "ref":
      return t;
    case "val":
      return t;
    default:
      throw new Sl(t.type);
  }
}
function fh(t, e) {
  return t.name === e.name && t.args.length === e.args.length && t.args.every((s, n) => os(s, e.args[n]));
}
function dh(t, e, s, n, r, i, o, a, c) {
  const l = s.map((d) => {
    const y = as(d.expression, n, "$selected");
    return { compiledExpression: fe(y), compareOptions: nn(d, r) };
  }), h = (d) => {
    const y = d;
    return s.length > 1 ? l.map((g) => g.compiledExpression(y)) : s.length === 1 ? l[0].compiledExpression(y) : null;
  }, u = (d, y) => {
    if (s.length > 1) {
      const g = d, w = y;
      for (let b = 0; b < s.length; b++) {
        const R = l[b], E = rs(R.compareOptions)(g[b], w[b]);
        if (E !== 0) return E;
      }
      return g.length - w.length;
    }
    if (s.length === 1) {
      const g = l[0];
      return rs(g.compareOptions)(d, y);
    }
    return Qs(d, y);
  };
  let f, p;
  if (a) {
    let d, y, g, w = t.from.alias;
    const b = s[0], R = b.expression;
    if (R.type === "ref") {
      const v = Mt(t, R, r);
      if (v) {
        y = v.collection;
        const E = v.path[0], M = nn(b, y);
        E && vs(E, v.path, y, M, u), g = fe(new ce(v.path), true), d = Bt(y, v.path, M), (d == null ? void 0 : d.supports("gt")) || (d = void 0), w = R.path.length > 1 ? String(R.path[0]) : t.from.alias;
      }
    }
    if (g) {
      const E = s.every((x) => x.expression.type === "ref") ? s.map((x) => {
        const I = x.expression, m = Mt(t, I, r);
        return fe(m ? new ce(m.path) : x.expression, true);
      }) : void 0;
      p = { alias: w, offset: c ?? 0, limit: a, comparator: (x, I) => {
        if (s.length === 1) {
          const m = x && g(x), P = I && g(I);
          return u(m, P);
        }
        if (E) {
          const m = (P) => P && E.map((S) => S(P));
          return u(m(x), m(I));
        }
        return 0;
      }, valueExtractorForRawRow: (x) => {
        if (s.length === 1) return g(x);
        if (E) return E.map((I) => I(x));
      }, firstColumnValueExtractor: g, index: d, orderBy: s };
      const C = (y == null ? void 0 : y.id) ?? r.id;
      i[C] = p, d && (f = (x) => {
        i[C].dataNeeded = () => {
          const I = x();
          return Math.max(0, p.limit - I);
        };
      });
    }
  }
  return e.pipe(Gu(h, { limit: a, offset: c, comparator: u, setSizeCallback: f, setWindowFn: (d) => {
    o((y) => {
      d(y), p && (p.offset = y.offset ?? p.offset, p.limit = y.limit ?? p.limit);
    });
  } }));
}
function nn(t, e) {
  return t.compareOptions.stringSort !== void 0 ? t.compareOptions : { ...e.compareOptions, direction: t.compareOptions.direction, nulls: t.compareOptions.nulls };
}
function ph(t, e = {}) {
  const s = (n) => {
    const r = [];
    for (const [i, o] of t.entries()) ((n == null ? void 0 : n(o)) ?? true) && r.push({ type: "insert", key: i, value: o });
    return r;
  };
  if (e.limit !== void 0 && !e.orderBy) throw new Error("limit cannot be used without orderBy");
  if (e.orderBy) {
    const n = e.where ? Rt(e.where) : void 0, r = gh(t, e.orderBy, e.limit, n, e.optimizedOnly);
    if (r === void 0) return;
    const i = [];
    for (const o of r) {
      const a = t.get(o);
      a !== void 0 && i.push({ type: "insert", key: o, value: a });
    }
    return i;
  }
  if (!e.where) return s();
  try {
    const n = e.where, r = Kl(n, t);
    if (r.canOptimize) {
      const i = [];
      for (const o of r.matchingKeys) {
        const a = t.get(o);
        a !== void 0 && i.push({ type: "insert", key: o, value: a });
      }
      return i;
    } else {
      if (e.optimizedOnly) return;
      const i = Rt(n);
      return s(i);
    }
  } catch (n) {
    console.warn(`${t.id ? `[${t.id}] ` : ""}Error processing where clause, falling back to full scan:`, n);
    const r = Rt(e.where);
    return e.optimizedOnly ? void 0 : s(r);
  }
}
function Rt(t) {
  const e = En(t);
  return (s) => {
    try {
      const n = e(s);
      return nt(n);
    } catch {
      return false;
    }
  };
}
function yh(t, e) {
  const s = Rt(e.whereExpression);
  return (n) => {
    const r = [];
    for (const i of n) if (i.type === "insert") s(i.value) && r.push(i);
    else if (i.type === "update") {
      const o = s(i.value), a = i.previousValue ? s(i.previousValue) : false;
      o && a ? r.push(i) : o && !a ? r.push({ ...i, type: "insert" }) : !o && a && r.push({ ...i, type: "delete", value: i.previousValue });
    } else s(i.value) && r.push(i);
    (r.length > 0 || n.length === 0) && t(r);
  };
}
function gh(t, e, s, n, r) {
  if (e.length === 1) {
    const c = e[0], l = c.expression;
    if (l.type === "ref") {
      const u = l.path, f = nn(c, t);
      vs(u[0], u, t, f);
      const p = Bt(t, u, f);
      if (p && p.supports("gt")) {
        const d = (y) => {
          const g = t.get(y);
          return g === void 0 ? false : (n == null ? void 0 : n(g)) ?? true;
        };
        return p.takeFromStart(s ?? p.keyCount, d);
      }
    }
  }
  if (r) return;
  const i = [];
  for (const [c, l] of t.entries()) ((n == null ? void 0 : n(l)) ?? true) && i.push({ key: c, value: l });
  const o = (c, l) => {
    for (const h of e) {
      const u = rs(h.compareOptions), f = Wr(c.value, h.expression), p = Wr(l.value, h.expression), d = u(f, p);
      if (d !== 0) return d;
    }
    return 0;
  };
  i.sort(o);
  const a = i.map((c) => c.key);
  return s !== void 0 ? a.slice(0, s) : a;
}
function Wr(t, e) {
  if (e.type === "ref") {
    const s = e;
    let n = t;
    for (const r of s.path) n = n == null ? void 0 : n[r];
    return n;
  } else return e.type === "val" ? e.value : En(e)(t);
}
class Hr {
  constructor(e) {
    this.map = /* @__PURE__ */ new Map(), this.sortedKeys = [], this.comparator = e;
  }
  indexOf(e, s) {
    let n = 0, r = this.sortedKeys.length;
    if (!this.comparator) {
      for (; n < r; ) {
        const i = Math.floor((n + r) / 2), o = this.sortedKeys[i], a = is(e, o);
        if (a < 0) r = i;
        else if (a > 0) n = i + 1;
        else return i;
      }
      return n;
    }
    for (; n < r; ) {
      const i = Math.floor((n + r) / 2), o = this.sortedKeys[i], a = this.map.get(o), c = this.comparator(s, a);
      if (c < 0) r = i;
      else if (c > 0) n = i + 1;
      else {
        const l = is(e, o);
        if (l < 0) r = i;
        else if (l > 0) n = i + 1;
        else return i;
      }
    }
    return n;
  }
  set(e, s) {
    if (this.map.has(e)) {
      const r = this.map.get(e), i = this.indexOf(e, r);
      this.sortedKeys.splice(i, 1);
    }
    const n = this.indexOf(e, s);
    return this.sortedKeys.splice(n, 0, e), this.map.set(e, s), this;
  }
  get(e) {
    return this.map.get(e);
  }
  delete(e) {
    if (this.map.has(e)) {
      const s = this.map.get(e), n = this.indexOf(e, s);
      return this.sortedKeys.splice(n, 1), this.map.delete(e);
    }
    return false;
  }
  has(e) {
    return this.map.has(e);
  }
  clear() {
    this.map.clear(), this.sortedKeys = [];
  }
  get size() {
    return this.map.size;
  }
  *[Symbol.iterator]() {
    for (const e of this.sortedKeys) yield [e, this.map.get(e)];
  }
  entries() {
    return this[Symbol.iterator]();
  }
  keys() {
    return this.sortedKeys[Symbol.iterator]();
  }
  values() {
    return (function* () {
      for (const e of this.sortedKeys) yield this.map.get(e);
    }).call(this);
  }
  forEach(e) {
    for (const s of this.sortedKeys) e(this.map.get(s), s, this.map);
  }
}
class mh {
  constructor(e) {
    this.pendingSyncedTransactions = [], this.syncedMetadata = /* @__PURE__ */ new Map(), this.optimisticUpserts = /* @__PURE__ */ new Map(), this.optimisticDeletes = /* @__PURE__ */ new Set(), this.size = 0, this.syncedKeys = /* @__PURE__ */ new Set(), this.preSyncVisibleState = /* @__PURE__ */ new Map(), this.recentlySyncedKeys = /* @__PURE__ */ new Set(), this.hasReceivedFirstCommit = false, this.isCommittingSyncTransactions = false, this.commitPendingTransactions = () => {
      var _a5;
      let s = false;
      for (const a of this.transactions.values()) if (a.state === "persisting") {
        s = true;
        break;
      }
      const { committedSyncedTransactions: n, uncommittedSyncedTransactions: r, hasTruncateSync: i, hasImmediateSync: o } = this.pendingSyncedTransactions.reduce((a, c) => (c.committed ? (a.committedSyncedTransactions.push(c), c.truncate && (a.hasTruncateSync = true), c.immediate && (a.hasImmediateSync = true)) : a.uncommittedSyncedTransactions.push(c), a), { committedSyncedTransactions: [], uncommittedSyncedTransactions: [], hasTruncateSync: false, hasImmediateSync: false });
      if (!s || i || o) {
        this.isCommittingSyncTransactions = true;
        const a = i ? (_a5 = n.find((p) => p.truncate)) == null ? void 0 : _a5.optimisticSnapshot : null, c = /* @__PURE__ */ new Set();
        for (const p of n) for (const d of p.operations) c.add(d.key);
        let l = this.preSyncVisibleState;
        if (l.size === 0) {
          l = /* @__PURE__ */ new Map();
          for (const p of c) {
            const d = this.get(p);
            d !== void 0 && l.set(p, d);
          }
        }
        const h = [], u = this.config.sync.rowUpdateMode || "partial";
        for (const p of n) {
          if (p.truncate) {
            const d = /* @__PURE__ */ new Set([...this.syncedData.keys(), ...(a == null ? void 0 : a.upserts.keys()) || []]);
            for (const y of d) {
              if (a == null ? void 0 : a.deletes.has(y)) continue;
              const g = (a == null ? void 0 : a.upserts.get(y)) || this.syncedData.get(y);
              g !== void 0 && h.push({ type: "delete", key: y, value: g });
            }
            this.syncedData.clear(), this.syncedMetadata.clear(), this.syncedKeys.clear();
            for (const y of c) l.delete(y);
            this._events.emit("truncate", { type: "truncate", collection: this.collection });
          }
          for (const d of p.operations) {
            const y = d.key;
            switch (this.syncedKeys.add(y), d.type) {
              case "insert":
                this.syncedMetadata.set(y, d.metadata);
                break;
              case "update":
                this.syncedMetadata.set(y, Object.assign({}, this.syncedMetadata.get(y), d.metadata));
                break;
              case "delete":
                this.syncedMetadata.delete(y);
                break;
            }
            switch (d.type) {
              case "insert":
                this.syncedData.set(y, d.value);
                break;
              case "update": {
                if (u === "partial") {
                  const g = Object.assign({}, this.syncedData.get(y), d.value);
                  this.syncedData.set(y, g);
                } else this.syncedData.set(y, d.value);
                break;
              }
              case "delete":
                this.syncedData.delete(y);
                break;
            }
          }
        }
        if (i) {
          const p = /* @__PURE__ */ new Set();
          for (const g of n) for (const w of g.operations) (w.type === "insert" || w.type === "update") && p.add(w.key);
          const d = new Map(a.upserts), y = new Set(a.deletes);
          for (const [g, w] of d) if (!y.has(g)) if (p.has(g)) {
            let b = false;
            for (let R = h.length - 1; R >= 0; R--) {
              const v = h[R];
              if (v.key === g && v.type === "insert") {
                v.value = w, b = true;
                break;
              }
            }
            b || h.push({ type: "insert", key: g, value: w });
          } else h.push({ type: "insert", key: g, value: w });
          if (h.length > 0 && y.size > 0) {
            const g = [];
            for (const w of h) w.type === "insert" && y.has(w.key) || g.push(w);
            h.length = 0, h.push(...g);
          }
          this.lifecycle.status !== "ready" && this.lifecycle.markReady();
        }
        if (this.optimisticUpserts.clear(), this.optimisticDeletes.clear(), this.isCommittingSyncTransactions = false, i && a) {
          for (const [p, d] of a.upserts) this.optimisticUpserts.set(p, d);
          for (const p of a.deletes) this.optimisticDeletes.add(p);
        }
        for (const p of this.transactions.values()) if (!["completed", "failed"].includes(p.state)) {
          for (const d of p.mutations) if (this.isThisCollection(d.collection) && d.optimistic) switch (d.type) {
            case "insert":
            case "update":
              this.optimisticUpserts.set(d.key, d.modified), this.optimisticDeletes.delete(d.key);
              break;
            case "delete":
              this.optimisticUpserts.delete(d.key), this.optimisticDeletes.add(d.key);
              break;
          }
        }
        const f = /* @__PURE__ */ new Map();
        for (const p of this.transactions.values()) if (p.state === "completed") for (const d of p.mutations) d.optimistic && this.isThisCollection(d.collection) && c.has(d.key) && f.set(d.key, { type: d.type, value: d.modified });
        for (const p of c) {
          const d = l.get(p), y = this.get(p), g = f.get(p);
          let w = false;
          g && (g.type === "delete" && d !== void 0 && y === void 0 && Re(g.value, d) || y !== void 0 && Re(g.value, y)) && (w = true), w || (d === void 0 && y !== void 0 ? h.push({ type: "insert", key: p, value: y }) : d !== void 0 && y === void 0 ? h.push({ type: "delete", key: p, value: d }) : d !== void 0 && y !== void 0 && !Re(d, y) && h.push({ type: "update", key: p, value: y, previousValue: d }));
        }
        this.size = this.calculateSize(), h.length > 0 && this.indexes.updateIndexes(h), this.changes.emitEvents(h, true), this.pendingSyncedTransactions = r, this.preSyncVisibleState.clear(), Promise.resolve().then(() => {
          this.recentlySyncedKeys.clear();
        }), this.hasReceivedFirstCommit || (this.hasReceivedFirstCommit = true);
      }
    }, this.config = e, this.transactions = new Hr((s, n) => s.compareCreatedAt(n)), this.syncedData = new Hr(e.compare);
  }
  setDeps(e) {
    this.collection = e.collection, this.lifecycle = e.lifecycle, this.changes = e.changes, this.indexes = e.indexes, this._events = e.events;
  }
  get(e) {
    const { optimisticDeletes: s, optimisticUpserts: n, syncedData: r } = this;
    if (!s.has(e)) return n.has(e) ? n.get(e) : r.get(e);
  }
  has(e) {
    const { optimisticDeletes: s, optimisticUpserts: n, syncedData: r } = this;
    return s.has(e) ? false : n.has(e) ? true : r.has(e);
  }
  *keys() {
    const { syncedData: e, optimisticDeletes: s, optimisticUpserts: n } = this;
    for (const r of e.keys()) s.has(r) || (yield r);
    for (const r of n.keys()) !e.has(r) && !s.has(r) && (yield r);
  }
  *values() {
    for (const e of this.keys()) {
      const s = this.get(e);
      s !== void 0 && (yield s);
    }
  }
  *entries() {
    for (const e of this.keys()) {
      const s = this.get(e);
      s !== void 0 && (yield [e, s]);
    }
  }
  *[Symbol.iterator]() {
    for (const [e, s] of this.entries()) yield [e, s];
  }
  forEach(e) {
    let s = 0;
    for (const [n, r] of this.entries()) e(r, n, s++);
  }
  map(e) {
    const s = [];
    let n = 0;
    for (const [r, i] of this.entries()) s.push(e(i, r, n++));
    return s;
  }
  isThisCollection(e) {
    return e === this.collection;
  }
  recomputeOptimisticState(e = false) {
    if (this.isCommittingSyncTransactions && !e) return;
    const s = new Map(this.optimisticUpserts), n = new Set(this.optimisticDeletes);
    this.optimisticUpserts.clear(), this.optimisticDeletes.clear();
    const r = [];
    for (const a of this.transactions.values()) ["completed", "failed"].includes(a.state) || r.push(a);
    for (const a of r) for (const c of a.mutations) if (this.isThisCollection(c.collection) && c.optimistic) switch (c.type) {
      case "insert":
      case "update":
        this.optimisticUpserts.set(c.key, c.modified), this.optimisticDeletes.delete(c.key);
        break;
      case "delete":
        this.optimisticUpserts.delete(c.key), this.optimisticDeletes.add(c.key);
        break;
    }
    this.size = this.calculateSize();
    const i = [];
    this.collectOptimisticChanges(s, n, i);
    const o = i.filter((a) => !!(!this.recentlySyncedKeys.has(a.key) || e));
    if (this.pendingSyncedTransactions.length > 0 && !e) {
      const a = /* @__PURE__ */ new Set();
      for (const l of this.pendingSyncedTransactions) for (const h of l.operations) a.add(h.key);
      const c = o.filter((l) => !(l.type === "delete" && a.has(l.key) && !r.some((u) => u.mutations.some((f) => this.isThisCollection(f.collection) && f.key === l.key))));
      c.length > 0 && this.indexes.updateIndexes(c), this.changes.emitEvents(c, e);
    } else o.length > 0 && this.indexes.updateIndexes(o), this.changes.emitEvents(o, e);
  }
  calculateSize() {
    const e = this.syncedData.size, s = Array.from(this.optimisticDeletes).filter((r) => this.syncedData.has(r) && !this.optimisticUpserts.has(r)).length, n = Array.from(this.optimisticUpserts.keys()).filter((r) => !this.syncedData.has(r)).length;
    return e - s + n;
  }
  collectOptimisticChanges(e, s, n) {
    const r = /* @__PURE__ */ new Set([...e.keys(), ...this.optimisticUpserts.keys(), ...s, ...this.optimisticDeletes]);
    for (const i of r) {
      const o = this.get(i), a = this.getPreviousValue(i, e, s);
      a !== void 0 && o === void 0 ? n.push({ type: "delete", key: i, value: a }) : a === void 0 && o !== void 0 ? n.push({ type: "insert", key: i, value: o }) : a !== void 0 && o !== void 0 && a !== o && n.push({ type: "update", key: i, value: o, previousValue: a });
    }
  }
  getPreviousValue(e, s, n) {
    if (!n.has(e)) return s.has(e) ? s.get(e) : this.syncedData.get(e);
  }
  scheduleTransactionCleanup(e) {
    if (e.state === "completed") {
      this.transactions.delete(e.id);
      return;
    }
    e.isPersisted.promise.then(() => {
      this.transactions.delete(e.id);
    }).catch(() => {
    });
  }
  capturePreSyncVisibleState() {
    if (this.pendingSyncedTransactions.length === 0) return;
    const e = /* @__PURE__ */ new Set();
    for (const s of this.pendingSyncedTransactions) for (const n of s.operations) e.add(n.key);
    for (const s of e) this.recentlySyncedKeys.add(s);
    for (const s of e) if (!this.preSyncVisibleState.has(s)) {
      const n = this.get(s);
      n !== void 0 && this.preSyncVisibleState.set(s, n);
    }
  }
  onTransactionStateChange() {
    this.changes.shouldBatchEvents = this.pendingSyncedTransactions.length > 0, this.capturePreSyncVisibleState(), this.recomputeOptimisticState(false);
  }
  cleanup() {
    this.syncedData.clear(), this.syncedMetadata.clear(), this.optimisticUpserts.clear(), this.optimisticDeletes.clear(), this.size = 0, this.pendingSyncedTransactions = [], this.syncedKeys.clear(), this.hasReceivedFirstCommit = false;
  }
}
class Ki {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map();
  }
  on(e, s) {
    return this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set()), this.listeners.get(e).add(s), () => {
      var _a5;
      (_a5 = this.listeners.get(e)) == null ? void 0 : _a5.delete(s);
    };
  }
  once(e, s) {
    const n = this.on(e, (r) => {
      s(r), n();
    });
    return n;
  }
  off(e, s) {
    var _a5;
    (_a5 = this.listeners.get(e)) == null ? void 0 : _a5.delete(s);
  }
  waitFor(e, s) {
    return new Promise((n, r) => {
      let i;
      const o = this.on(e, (a) => {
        i && (clearTimeout(i), i = void 0), n(a), o();
      });
      s && (i = setTimeout(() => {
        i = void 0, o(), r(new Error(`Timeout waiting for event ${String(e)}`));
      }, s));
    });
  }
  emitInner(e, s) {
    var _a5;
    (_a5 = this.listeners.get(e)) == null ? void 0 : _a5.forEach((n) => {
      try {
        n(s);
      } catch (r) {
        queueMicrotask(() => {
          throw r;
        });
      }
    });
  }
  clearListeners() {
    this.listeners.clear();
  }
}
function wh(t, e) {
  if (e.length === 0 || t.length === 0) return;
  if (t.length === 1) {
    const { expression: n, compareOptions: r } = t[0];
    return (r.direction === "asc" ? Ur : en)(n, new he(e[0]));
  }
  const s = [];
  for (let n = 0; n < t.length && n < e.length; n++) {
    const r = t[n], i = e[n], o = [];
    for (let l = 0; l < n; l++) {
      const h = t[l], u = e[l];
      o.push(Zs(h.expression, new he(u)));
    }
    const c = (r.compareOptions.direction === "asc" ? Ur : en)(r.expression, new he(i));
    if (o.length === 0) s.push(c);
    else {
      const l = [...o, c];
      s.push(l.reduce((h, u) => tn(h, u)));
    }
  }
  return s.length === 1 ? s[0] : s.reduce((n, r) => th(n, r));
}
class vh extends Ki {
  constructor(e, s, n) {
    super(), this.collection = e, this.callback = s, this.options = n, this.loadedInitialState = false, this.skipFiltering = false, this.snapshotSent = false, this.loadedSubsets = [], this.sentKeys = /* @__PURE__ */ new Set(), this.limitedSnapshotRowCount = 0, this._status = "ready", this.pendingLoadSubsetPromises = /* @__PURE__ */ new Set(), this.isBufferingForTruncate = false, this.truncateBuffer = [], this.pendingTruncateRefetches = /* @__PURE__ */ new Set(), n.onUnsubscribe && this.on("unsubscribed", (i) => n.onUnsubscribe(i)), n.whereExpression && rh(n.whereExpression, this.collection);
    const r = (i) => {
      s(i), this.trackSentKeys(i);
    };
    this.callback = r, this.filteredCallback = n.whereExpression ? yh(this.callback, n) : this.callback, this.truncateCleanup = this.collection.on("truncate", () => {
      this.handleTruncate();
    });
  }
  get status() {
    return this._status;
  }
  handleTruncate() {
    const e = [...this.loadedSubsets], s = this.collection._sync.syncLoadSubsetFn !== null;
    if (e.length === 0 || !s) {
      this.snapshotSent = false, this.loadedInitialState = false, this.limitedSnapshotRowCount = 0, this.lastSentKey = void 0, this.loadedSubsets = [];
      return;
    }
    this.isBufferingForTruncate = true, this.truncateBuffer = [], this.pendingTruncateRefetches.clear(), this.snapshotSent = false, this.loadedInitialState = false, this.limitedSnapshotRowCount = 0, this.lastSentKey = void 0, this.loadedSubsets = [], queueMicrotask(() => {
      if (this.isBufferingForTruncate) {
        for (const n of e) {
          const r = this.collection._sync.loadSubset(n);
          this.loadedSubsets.push(n), this.trackLoadSubsetPromise(r), r instanceof Promise && (this.pendingTruncateRefetches.add(r), r.catch(() => {
          }).finally(() => {
            this.pendingTruncateRefetches.delete(r), this.checkTruncateRefetchComplete();
          }));
        }
        this.pendingTruncateRefetches.size === 0 && this.flushTruncateBuffer();
      }
    });
  }
  checkTruncateRefetchComplete() {
    this.pendingTruncateRefetches.size === 0 && this.isBufferingForTruncate && this.flushTruncateBuffer();
  }
  flushTruncateBuffer() {
    this.isBufferingForTruncate = false;
    const e = this.truncateBuffer.flat();
    e.length > 0 && this.filteredCallback(e), this.truncateBuffer = [];
  }
  setOrderByIndex(e) {
    this.orderByIndex = e;
  }
  setStatus(e) {
    if (this._status === e) return;
    const s = this._status;
    this._status = e, this.emitInner("status:change", { type: "status:change", subscription: this, previousStatus: s, status: e });
    const n = `status:${e}`;
    this.emitInner(n, { type: n, subscription: this, previousStatus: s, status: e });
  }
  trackLoadSubsetPromise(e) {
    e instanceof Promise && (this.pendingLoadSubsetPromises.add(e), this.setStatus("loadingSubset"), e.finally(() => {
      this.pendingLoadSubsetPromises.delete(e), this.pendingLoadSubsetPromises.size === 0 && this.setStatus("ready");
    }));
  }
  hasLoadedInitialState() {
    return this.loadedInitialState;
  }
  hasSentAtLeastOneSnapshot() {
    return this.snapshotSent;
  }
  emitEvents(e) {
    const s = this.filterAndFlipChanges(e);
    this.isBufferingForTruncate ? s.length > 0 && this.truncateBuffer.push(s) : this.filteredCallback(s);
  }
  requestSnapshot(e) {
    var _a5;
    if (this.loadedInitialState) return false;
    const s = { where: this.options.whereExpression, optimizedOnly: (e == null ? void 0 : e.optimizedOnly) ?? false };
    if (e) {
      if ("where" in e) {
        const c = e.where;
        if (s.where) {
          const l = s.where, h = tn(l, c);
          s.where = h;
        } else s.where = c;
      }
    } else this.loadedInitialState = true;
    const n = { where: s.where, subscription: this, orderBy: e == null ? void 0 : e.orderBy, limit: e == null ? void 0 : e.limit }, r = this.collection._sync.loadSubset(n);
    (_a5 = e == null ? void 0 : e.onLoadSubsetResult) == null ? void 0 : _a5.call(e, r), this.loadedSubsets.push(n), ((e == null ? void 0 : e.trackLoadSubsetPromise) ?? true) && this.trackLoadSubsetPromise(r);
    const o = this.collection.currentStateAsChanges(s);
    if (o === void 0) return false;
    const a = o.filter((c) => !this.sentKeys.has(c.key));
    for (const c of a) this.sentKeys.add(c.key);
    return this.snapshotSent = true, this.callback(a), true;
  }
  requestLimitedSnapshot({ orderBy: e, limit: s, minValues: n, offset: r, trackLoadSubsetPromise: i = true, onLoadSubsetResult: o }) {
    if (!s) throw new Error("limit is required");
    if (!this.orderByIndex) throw new Error("Ordered snapshot was requested but no index was found. You have to call setOrderByIndex before requesting an ordered snapshot.");
    const a = n !== void 0 && n.length > 0, l = n == null ? void 0 : n[0], h = this.orderByIndex, u = this.options.whereExpression, f = u ? Rt(u) : void 0, p = (x) => {
      if (x !== void 0 && this.sentKeys.has(x)) return false;
      const I = this.collection.get(x);
      return I === void 0 ? false : (f == null ? void 0 : f(I)) ?? true;
    };
    let d = l;
    const y = [];
    let g = [];
    if (a) {
      const { expression: x } = e[0], I = this.collection.currentStateAsChanges({ where: Zs(x, new he(l)) });
      if (I) {
        const m = I.map((S) => S.key).filter((S) => !this.sentKeys.has(S) && p(S));
        g.push(...m);
        const P = h.take(s - g.length, l, p);
        g.push(...P);
      } else g = h.take(s, l, p);
    } else g = h.takeFromStart(s, p);
    const w = () => Math.max(s - y.length, 0), b = () => g.length === 0, R = e[0].expression, v = R.type === "ref" ? fe(new ce(R.path), true) : null;
    for (; w() > 0 && !b(); ) {
      const x = /* @__PURE__ */ new Set();
      for (const I of g) {
        const m = this.collection.get(I);
        y.push({ type: "insert", key: I, value: m }), d = v ? v(m) : m, x.add(I);
      }
      g = h.take(w(), d, p);
    }
    const E = this.limitedSnapshotRowCount;
    for (const x of y) this.sentKeys.add(x.key);
    this.callback(y), this.limitedSnapshotRowCount += y.length, y.length > 0 && (this.lastSentKey = y[y.length - 1].key);
    let M;
    if (n !== void 0 && n.length > 0) {
      const x = wh(e, n);
      if (x) {
        const { expression: I } = e[0], m = n[0];
        let P;
        if (m instanceof Date) {
          const S = new Date(m.getTime() + 1);
          P = tn(eh(I, new he(m)), en(I, new he(S)));
        } else P = Zs(I, new he(m));
        M = { whereFrom: x, whereCurrent: P, lastKey: this.lastSentKey };
      }
    }
    const O = { where: u, limit: s, orderBy: e, cursor: M, offset: r ?? E, subscription: this }, C = this.collection._sync.loadSubset(O);
    o == null ? void 0 : o(C), this.loadedSubsets.push(O), i && this.trackLoadSubsetPromise(C);
  }
  filterAndFlipChanges(e) {
    if (this.loadedInitialState || this.skipFiltering) return e;
    const s = this.isBufferingForTruncate, n = [];
    for (const r of e) {
      let i = r;
      if (this.sentKeys.has(r.key)) {
        if (r.type === "insert") continue;
        r.type === "delete" && this.sentKeys.delete(r.key);
      } else {
        if (r.type === "update") i = { ...r, type: "insert", previousValue: void 0 };
        else if (r.type === "delete" && !s) continue;
        this.sentKeys.add(r.key);
      }
      n.push(i);
    }
    return n;
  }
  trackSentKeys(e) {
    if (!(this.loadedInitialState || this.skipFiltering)) {
      for (const s of e) s.type === "delete" ? this.sentKeys.delete(s.key) : this.sentKeys.add(s.key);
      this.orderByIndex && (this.limitedSnapshotRowCount = Math.max(this.limitedSnapshotRowCount, this.sentKeys.size));
    }
  }
  markAllStateAsSeen() {
    this.skipFiltering = true;
  }
  unsubscribe() {
    var _a5;
    (_a5 = this.truncateCleanup) == null ? void 0 : _a5.call(this), this.truncateCleanup = void 0, this.isBufferingForTruncate = false, this.truncateBuffer = [], this.pendingTruncateRefetches.clear();
    for (const e of this.loadedSubsets) this.collection._sync.unloadSubset(e);
    this.loadedSubsets = [], this.emitInner("unsubscribed", { type: "unsubscribed", subscription: this }), this.clearListeners();
  }
}
class Sh {
  constructor() {
    this.activeSubscribersCount = 0, this.changeSubscriptions = /* @__PURE__ */ new Set(), this.batchedEvents = [], this.shouldBatchEvents = false;
  }
  setDeps(e) {
    this.lifecycle = e.lifecycle, this.sync = e.sync, this.events = e.events, this.collection = e.collection;
  }
  emitEmptyReadyEvent() {
    for (const e of this.changeSubscriptions) e.emitEvents([]);
  }
  emitEvents(e, s = false) {
    if (this.shouldBatchEvents && !s) {
      this.batchedEvents.push(...e);
      return;
    }
    let n = e;
    if (s && (this.batchedEvents.length > 0 && (n = [...this.batchedEvents, ...e]), this.batchedEvents = [], this.shouldBatchEvents = false), n.length !== 0) for (const r of this.changeSubscriptions) r.emitEvents(n);
  }
  subscribeChanges(e, s = {}) {
    if (this.addSubscriber(), s.where && s.whereExpression) throw new Error("Cannot specify both 'where' and 'whereExpression' options. Use one or the other.");
    const { where: n, ...r } = s;
    let i = r.whereExpression;
    if (n) {
      const a = Di(), c = n(a);
      i = G(c);
    }
    const o = new vh(this.collection, e, { ...r, whereExpression: i, onUnsubscribe: () => {
      this.removeSubscriber(), this.changeSubscriptions.delete(o);
    } });
    return s.onStatusChange && o.on("status:change", s.onStatusChange), s.includeInitialState ? o.requestSnapshot({ trackLoadSubsetPromise: false, orderBy: s.orderBy, limit: s.limit, onLoadSubsetResult: s.onLoadSubsetResult }) : s.includeInitialState === false && o.markAllStateAsSeen(), this.changeSubscriptions.add(o), o;
  }
  addSubscriber() {
    const e = this.activeSubscribersCount;
    this.activeSubscribersCount++, this.lifecycle.cancelGCTimer(), (this.lifecycle.status === "cleaned-up" || this.lifecycle.status === "idle") && this.sync.startSync(), this.events.emitSubscribersChange(this.activeSubscribersCount, e);
  }
  removeSubscriber() {
    const e = this.activeSubscribersCount;
    if (this.activeSubscribersCount--, this.activeSubscribersCount === 0) this.lifecycle.startGCTimer();
    else if (this.activeSubscribersCount < 0) throw new Mc();
    this.events.emitSubscribersChange(this.activeSubscribersCount, e);
  }
  cleanup() {
    this.batchedEvents = [], this.shouldBatchEvents = false;
  }
}
const bh = (t) => setTimeout(() => {
  t({ didTimeout: true, timeRemaining: () => 50 });
}, 0), xh = (t) => {
  clearTimeout(t);
}, Rh = typeof window < "u" && "requestIdleCallback" in window ? (t, e) => window.requestIdleCallback(t, e) : (t, e) => bh(t), Ks = typeof window < "u" && "cancelIdleCallback" in window ? (t) => window.cancelIdleCallback(t) : xh;
class Ph {
  constructor(e, s) {
    this.status = "idle", this.hasBeenReady = false, this.hasReceivedFirstCommit = false, this.onFirstReadyCallbacks = [], this.gcTimeoutId = null, this.idleCallbackId = null, this.config = e, this.id = s;
  }
  setDeps(e) {
    this.indexes = e.indexes, this.events = e.events, this.changes = e.changes, this.sync = e.sync, this.state = e.state;
  }
  validateStatusTransition(e, s) {
    if (e === s) return;
    if (!{ idle: ["loading", "error", "cleaned-up"], loading: ["ready", "error", "cleaned-up"], ready: ["cleaned-up", "error"], error: ["cleaned-up", "idle"], "cleaned-up": ["loading", "error"] }[e].includes(s)) throw new Ec(e, s, this.id);
  }
  setStatus(e, s = false) {
    if (e === "ready" && !s) throw new Dt(`You can't directly call "setStatus('ready'). You must use markReady instead.`);
    this.validateStatusTransition(this.status, e);
    const n = this.status;
    this.status = e, e === "ready" && !this.indexes.isIndexesResolved && this.indexes.resolveAllIndexes().catch((r) => {
      console.warn(`${this.config.id ? `[${this.config.id}] ` : ""}Failed to resolve indexes:`, r);
    }), this.events.emitStatusChange(e, n);
  }
  validateCollectionUsable(e) {
    switch (this.status) {
      case "error":
        throw new Ic(e, this.id);
      case "cleaned-up":
        this.sync.startSync();
        break;
    }
  }
  markReady() {
    if (this.validateStatusTransition(this.status, "ready"), this.status === "loading") {
      if (this.setStatus("ready", true), !this.hasBeenReady) {
        this.hasBeenReady = true, this.hasReceivedFirstCommit || (this.hasReceivedFirstCommit = true);
        const e = [...this.onFirstReadyCallbacks];
        this.onFirstReadyCallbacks = [], e.forEach((s) => s());
      }
      this.changes.changeSubscriptions.size > 0 && this.changes.emitEmptyReadyEvent();
    }
  }
  startGCTimer() {
    this.gcTimeoutId && clearTimeout(this.gcTimeoutId);
    const e = this.config.gcTime ?? 3e5;
    e <= 0 || !Number.isFinite(e) || (this.gcTimeoutId = setTimeout(() => {
      this.changes.activeSubscribersCount === 0 && this.scheduleIdleCleanup();
    }, e));
  }
  cancelGCTimer() {
    this.gcTimeoutId && (clearTimeout(this.gcTimeoutId), this.gcTimeoutId = null), this.idleCallbackId !== null && (Ks(this.idleCallbackId), this.idleCallbackId = null);
  }
  scheduleIdleCleanup() {
    this.idleCallbackId !== null && Ks(this.idleCallbackId), this.idleCallbackId = Rh((e) => {
      this.changes.activeSubscribersCount === 0 ? this.performCleanup(e) && (this.idleCallbackId = null) : this.idleCallbackId = null;
    }, { timeout: 1e3 });
  }
  performCleanup(e) {
    if (!e || e.timeRemaining() > 0 || e.didTimeout) {
      this.sync.cleanup(), this.state.cleanup(), this.changes.cleanup(), this.indexes.cleanup(), this.gcTimeoutId && (clearTimeout(this.gcTimeoutId), this.gcTimeoutId = null), this.hasBeenReady = false;
      const n = [...this.onFirstReadyCallbacks];
      return this.onFirstReadyCallbacks = [], n.forEach((r) => {
        try {
          r();
        } catch (i) {
          console.error(`${this.config.id ? `[${this.config.id}] ` : ""}Error in onFirstReady callback during cleanup:`, i);
        }
      }), this.setStatus("cleaned-up"), this.events.cleanup(), true;
    } else return this.scheduleIdleCleanup(), false;
  }
  onFirstReady(e) {
    if (this.hasBeenReady) {
      e();
      return;
    }
    this.onFirstReadyCallbacks.push(e);
  }
  cleanup() {
    this.idleCallbackId !== null && (Ks(this.idleCallbackId), this.idleCallbackId = null), this.performCleanup();
  }
}
const Dn = /* @__PURE__ */ Symbol("liveQueryInternal");
class Ch {
  constructor(e, s) {
    this.preloadPromise = null, this.syncCleanupFn = null, this.syncLoadSubsetFn = null, this.syncUnloadSubsetFn = null, this.pendingLoadSubsetPromises = /* @__PURE__ */ new Set(), this.config = e, this.id = s, this.syncMode = e.syncMode ?? "eager";
  }
  setDeps(e) {
    this.collection = e.collection, this.state = e.state, this.lifecycle = e.lifecycle, this._events = e.events;
  }
  startSync() {
    if (!(this.lifecycle.status !== "idle" && this.lifecycle.status !== "cleaned-up")) {
      this.lifecycle.setStatus("loading");
      try {
        const e = _h(this.config.sync.sync({ collection: this.collection, begin: (s) => {
          this.state.pendingSyncedTransactions.push({ committed: false, operations: [], deletedKeys: /* @__PURE__ */ new Set(), immediate: s == null ? void 0 : s.immediate });
        }, write: (s) => {
          const n = this.state.pendingSyncedTransactions[this.state.pendingSyncedTransactions.length - 1];
          if (!n) throw new Cr();
          if (n.committed) throw new _r();
          let r;
          "key" in s ? r = s.key : r = this.config.getKey(s.value);
          let i = s.type;
          if (s.type === "insert") {
            const a = this.state.syncedData.has(r), c = n.deletedKeys.has(r), l = n.truncate === true;
            if (a && !c && !l) {
              const h = this.state.syncedData.get(r);
              if (h !== void 0 && Re(h, s.value)) i = "update";
              else {
                const p = this.config.utils[Dn];
                throw new Fc(r, this.id, { hasCustomGetKey: (p == null ? void 0 : p.hasCustomGetKey) ?? false, hasJoins: (p == null ? void 0 : p.hasJoins) ?? false, hasDistinct: (p == null ? void 0 : p.hasDistinct) ?? false });
              }
            }
          }
          const o = { ...s, type: i, key: r };
          n.operations.push(o), i === "delete" && n.deletedKeys.add(r);
        }, commit: () => {
          const s = this.state.pendingSyncedTransactions[this.state.pendingSyncedTransactions.length - 1];
          if (!s) throw new Qc();
          if (s.committed) throw new Jc();
          s.committed = true, this.state.commitPendingTransactions();
        }, markReady: () => {
          this.lifecycle.markReady();
        }, truncate: () => {
          const s = this.state.pendingSyncedTransactions[this.state.pendingSyncedTransactions.length - 1];
          if (!s) throw new Cr();
          if (s.committed) throw new _r();
          s.operations = [], s.deletedKeys.clear(), s.truncate = true, s.optimisticSnapshot = { upserts: new Map(this.state.optimisticUpserts), deletes: new Set(this.state.optimisticDeletes) };
        } }));
        if (this.syncCleanupFn = (e == null ? void 0 : e.cleanup) ?? null, this.syncLoadSubsetFn = (e == null ? void 0 : e.loadSubset) ?? null, this.syncUnloadSubsetFn = (e == null ? void 0 : e.unloadSubset) ?? null, this.syncMode === "on-demand" && !this.syncLoadSubsetFn) throw new Ft(`Collection "${this.id}" is configured with syncMode "on-demand" but the sync function did not return a loadSubset handler. Either provide a loadSubset handler or use syncMode "eager".`);
      } catch (e) {
        throw this.lifecycle.setStatus("error"), e;
      }
    }
  }
  preload() {
    return this.preloadPromise ? this.preloadPromise : (this.syncMode === "on-demand" && console.warn(`${this.id ? `[${this.id}] ` : ""}Calling .preload() on a collection with syncMode "on-demand" is a no-op. In on-demand mode, data is only loaded when queries request it. Instead, create a live query and call .preload() on that to load the specific data you need. See https://tanstack.com/blog/tanstack-db-0.5-query-driven-sync for more details.`), this.preloadPromise = new Promise((e, s) => {
      if (this.lifecycle.status === "ready") {
        e();
        return;
      }
      if (this.lifecycle.status === "error") {
        s(new Oc());
        return;
      }
      if (this.lifecycle.onFirstReady(() => {
        e();
      }), this.lifecycle.status === "idle" || this.lifecycle.status === "cleaned-up") try {
        this.startSync();
      } catch (n) {
        s(n);
        return;
      }
    }), this.preloadPromise);
  }
  get isLoadingSubset() {
    return this.pendingLoadSubsetPromises.size > 0;
  }
  trackLoadPromise(e) {
    const s = !this.isLoadingSubset;
    this.pendingLoadSubsetPromises.add(e), s && this._events.emit("loadingSubset:change", { type: "loadingSubset:change", collection: this.collection, isLoadingSubset: true, previousIsLoadingSubset: false, loadingSubsetTransition: "start" }), e.finally(() => {
      const n = this.pendingLoadSubsetPromises.size === 1 && this.pendingLoadSubsetPromises.has(e);
      this.pendingLoadSubsetPromises.delete(e), n && this._events.emit("loadingSubset:change", { type: "loadingSubset:change", collection: this.collection, isLoadingSubset: false, previousIsLoadingSubset: true, loadingSubsetTransition: "end" });
    });
  }
  loadSubset(e) {
    if (this.syncMode === "eager") return true;
    if (this.syncLoadSubsetFn) {
      const s = this.syncLoadSubsetFn(e);
      if (s instanceof Promise) return this.trackLoadPromise(s), s;
    }
    return true;
  }
  unloadSubset(e) {
    this.syncUnloadSubsetFn && this.syncUnloadSubsetFn(e);
  }
  cleanup() {
    try {
      this.syncCleanupFn && (this.syncCleanupFn(), this.syncCleanupFn = null);
    } catch (e) {
      queueMicrotask(() => {
        if (e instanceof Error) {
          const s = new Er(this.id, e);
          throw s.cause = e, s.stack = e.stack, s;
        } else throw new Er(this.id, e);
      });
    }
    this.preloadPromise = null;
  }
}
function _h(t) {
  if (typeof t == "function") return { cleanup: t };
  if (typeof t == "object") return t;
}
function ji(t) {
  return typeof t == "function" && t.prototype !== void 0 && t.prototype.constructor === t;
}
async function kh(t) {
  return ji(t) ? t : await t();
}
class Ih {
  constructor(e, s, n, r, i, o) {
    this.id = e, this.expression = s, this.name = n, this.resolver = r, this.options = i, this.collectionEntries = o, this.indexPromise = null, this.resolvedIndex = null, ji(this.resolver) && (this.resolvedIndex = new this.resolver(this.id, this.expression, this.name, this.options), this.collectionEntries && this.resolvedIndex.build(this.collectionEntries));
  }
  async resolve() {
    return this.resolvedIndex ? this.resolvedIndex : (this.indexPromise || (this.indexPromise = this.createIndex()), this.resolvedIndex = await this.indexPromise, this.resolvedIndex);
  }
  isResolved() {
    return this.resolvedIndex !== null;
  }
  getResolved() {
    if (!this.resolvedIndex) throw new Error(`Index ${this.id} has not been resolved yet. Ensure collection is synced.`);
    return this.resolvedIndex;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getExpression() {
    return this.expression;
  }
  async createIndex() {
    const e = await kh(this.resolver);
    return new e(this.id, this.expression, this.name, this.options);
  }
}
class Eh {
  constructor(e, s) {
    this.indexId = e, this.lazyIndex = s;
  }
  get index() {
    return this.lazyIndex.getResolved();
  }
  get isReady() {
    return this.lazyIndex.isResolved();
  }
  async whenReady() {
    return await this.lazyIndex.resolve();
  }
  get id() {
    return this.indexId;
  }
  get name() {
    return this.isReady ? this.index.name : this.lazyIndex.getName();
  }
  get expression() {
    return this.lazyIndex.getExpression();
  }
  supports(e) {
    return this.index.supports(e);
  }
  getStats() {
    return this.index.getStats();
  }
  matchesField(e) {
    const s = this.expression;
    return s.type === "ref" && s.path.length === e.length && s.path.every((n, r) => n === e[r]);
  }
  get keyCount() {
    return this.index.keyCount;
  }
  get indexedKeysSet() {
    return this.index.indexedKeysSet;
  }
  get orderedEntriesArray() {
    return this.index.orderedEntriesArray;
  }
  get valueMapData() {
    return this.index.valueMapData;
  }
  equalityLookup(e) {
    var _a5, _b2;
    return ((_b2 = (_a5 = this.index).equalityLookup) == null ? void 0 : _b2.call(_a5, e)) ?? /* @__PURE__ */ new Set();
  }
  rangeQuery(e) {
    var _a5, _b2;
    return ((_b2 = (_a5 = this.index).rangeQuery) == null ? void 0 : _b2.call(_a5, e)) ?? /* @__PURE__ */ new Set();
  }
  inArrayLookup(e) {
    var _a5, _b2;
    return ((_b2 = (_a5 = this.index).inArrayLookup) == null ? void 0 : _b2.call(_a5, e)) ?? /* @__PURE__ */ new Set();
  }
  _getLazyWrapper() {
    return this.lazyIndex;
  }
}
class Oh {
  constructor() {
    this.lazyIndexes = /* @__PURE__ */ new Map(), this.resolvedIndexes = /* @__PURE__ */ new Map(), this.isIndexesResolved = false, this.indexCounter = 0;
  }
  setDeps(e) {
    this.state = e.state, this.lifecycle = e.lifecycle;
  }
  createIndex(e, s = {}) {
    this.lifecycle.validateCollectionUsable("createIndex");
    const n = ++this.indexCounter, r = Di(), i = e(r), o = G(i), a = s.indexType ?? sn, c = new Ih(n, o, s.name, a, s.options, this.state.entries());
    if (this.lazyIndexes.set(n, c), a === sn) try {
      const l = c.getResolved();
      this.resolvedIndexes.set(n, l);
    } catch (l) {
      console.warn("Failed to resolve BTreeIndex:", l);
    }
    else if (typeof a == "function" && a.prototype) try {
      const l = c.getResolved();
      this.resolvedIndexes.set(n, l);
    } catch {
      this.resolveSingleIndex(n, c).catch((l) => {
        console.warn("Failed to resolve single index:", l);
      });
    }
    else this.isIndexesResolved && this.resolveSingleIndex(n, c).catch((l) => {
      console.warn("Failed to resolve single index:", l);
    });
    return new Eh(n, c);
  }
  async resolveAllIndexes() {
    if (this.isIndexesResolved) return;
    const e = Array.from(this.lazyIndexes.entries()).map(async ([s, n]) => {
      const r = await n.resolve();
      return r.build(this.state.entries()), this.resolvedIndexes.set(s, r), { indexId: s, resolvedIndex: r };
    });
    await Promise.all(e), this.isIndexesResolved = true;
  }
  async resolveSingleIndex(e, s) {
    const n = await s.resolve();
    return n.build(this.state.entries()), this.resolvedIndexes.set(e, n), n;
  }
  get indexes() {
    return this.resolvedIndexes;
  }
  updateIndexes(e) {
    for (const s of this.resolvedIndexes.values()) for (const n of e) switch (n.type) {
      case "insert":
        s.add(n.key, n.value);
        break;
      case "update":
        n.previousValue ? s.update(n.key, n.previousValue, n.value) : s.add(n.key, n.value);
        break;
      case "delete":
        s.remove(n.key, n.value);
        break;
    }
  }
  cleanup() {
    this.lazyIndexes.clear(), this.resolvedIndexes.clear();
  }
}
var Mh = {};
const Th = /* @__PURE__ */ new Set(["find", "findLast", "findIndex", "findLastIndex", "filter", "map", "flatMap", "forEach", "some", "every", "reduce", "reduceRight"]), Lh = /* @__PURE__ */ new Set(["pop", "push", "shift", "unshift", "splice", "sort", "reverse", "fill", "copyWithin"]), Ah = /* @__PURE__ */ new Set(["set", "delete", "clear", "add"]), Fh = /* @__PURE__ */ new Set(["entries", "keys", "values", "forEach"]);
function Bn(t) {
  return t !== null && typeof t == "object" && !(t instanceof Date) && !(t instanceof RegExp) && !bt(t);
}
function Dh(t, e, s, n) {
  if (Th.has(t)) return function(...r) {
    const i = r[0];
    if (typeof i != "function") return e.apply(s.copy_, r);
    const o = (l, h) => {
      if (Bn(l)) {
        const u = { tracker: s, prop: String(h) }, { proxy: f } = n(l, u);
        return f;
      }
      return l;
    }, a = function(l, h, u) {
      const f = o(l, h);
      return i.call(this, f, h, u);
    };
    if (t === "reduce" || t === "reduceRight") {
      const l = function(h, u, f, p) {
        const d = o(u, f);
        return i.call(this, h, d, f, p);
      };
      return e.apply(s.copy_, [l, ...r.slice(1)]);
    }
    const c = e.apply(s.copy_, [a, ...r.slice(1)]);
    if ((t === "find" || t === "findLast") && c && typeof c == "object") {
      const l = s.copy_.indexOf(c);
      if (l !== -1) return o(c, l);
    }
    return t === "filter" && Array.isArray(c) ? c.map((l) => {
      const h = s.copy_.indexOf(l);
      return h !== -1 ? o(l, h) : l;
    }) : c;
  };
}
function Bh(t, e) {
  return function() {
    const s = t.copy_;
    let n = 0;
    return { next() {
      if (n >= s.length) return { done: true, value: void 0 };
      const r = s[n];
      let i = r;
      if (Bn(r)) {
        const o = { tracker: t, prop: String(n) }, { proxy: a } = e(r, o);
        i = a;
      }
      return n++, { done: false, value: i };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Gr(t, e, s) {
  return function(...n) {
    const r = t.apply(e.copy_, n);
    return s(e), r;
  };
}
function Kh(t, e, s, n, r, i, o) {
  if (Fh.has(t) || e === Symbol.iterator) return function(...c) {
    const l = s.apply(r.copy_, c);
    if (t === "forEach") {
      const u = c[0];
      if (typeof u == "function") {
        const f = function(p, d, y) {
          const g = u.call(this, p, d, y);
          return o(r), g;
        };
        return s.apply(n, [f, ...c.slice(1)]);
      }
    }
    if (t === "entries" || t === "values" || t === Symbol.iterator.toString() || e === Symbol.iterator) {
      const u = l, f = /* @__PURE__ */ new Map();
      if (t === "values" && n instanceof Map) for (const [d, y] of r.copy_.entries()) f.set(y, d);
      const p = /* @__PURE__ */ new Map();
      if (n instanceof Set) for (const d of r.copy_.values()) p.set(d, d);
      return { next() {
        const d = u.next();
        if (!d.done && d.value && typeof d.value == "object") {
          if (t === "entries" && Array.isArray(d.value) && d.value.length === 2) {
            if (d.value[1] && typeof d.value[1] == "object") {
              const y = d.value[0], g = { tracker: r, prop: y, updateMap: (b) => {
                r.copy_ instanceof Map && r.copy_.set(y, b);
              } }, { proxy: w } = i(d.value[1], g);
              d.value[1] = w;
            }
          } else if (t === "values" || t === Symbol.iterator.toString() || e === Symbol.iterator) if (t === "values" && n instanceof Map) {
            const y = f.get(d.value);
            if (y !== void 0) {
              const g = { tracker: r, prop: y, updateMap: (b) => {
                r.copy_ instanceof Map && r.copy_.set(y, b);
              } }, { proxy: w } = i(d.value, g);
              d.value = w;
            }
          } else if (n instanceof Set) {
            const y = d.value, g = { tracker: r, prop: y, updateSet: (b) => {
              r.copy_ instanceof Set && (r.copy_.delete(y), r.copy_.add(b), p.set(y, b));
            } }, { proxy: w } = i(d.value, g);
            d.value = w;
          } else {
            const y = /* @__PURE__ */ Symbol("iterator-value"), { proxy: g } = i(d.value, { tracker: r, prop: y });
            d.value = g;
          }
        }
        return d;
      }, [Symbol.iterator]() {
        return this;
      } };
    }
    return l;
  };
}
function D(...t) {
  const e = typeof window < "u" && typeof localStorage < "u";
  e && localStorage.getItem("DEBUG") === "true" ? console.log("[proxy]", ...t) : !e && typeof process < "u" && Mh.DEBUG === "true" && console.log("[proxy]", ...t);
}
function Ie(t, e = /* @__PURE__ */ new WeakMap()) {
  if (t == null || typeof t != "object") return t;
  if (e.has(t)) return e.get(t);
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof RegExp) return new RegExp(t.source, t.flags);
  if (Array.isArray(t)) {
    const r = [];
    return e.set(t, r), t.forEach((i, o) => {
      r[o] = Ie(i, e);
    }), r;
  }
  if (ArrayBuffer.isView(t) && !(t instanceof DataView)) {
    const r = Object.getPrototypeOf(t).constructor, i = new r(t.length);
    e.set(t, i);
    for (let o = 0; o < t.length; o++) i[o] = t[o];
    return i;
  }
  if (t instanceof Map) {
    const r = /* @__PURE__ */ new Map();
    return e.set(t, r), t.forEach((i, o) => {
      r.set(o, Ie(i, e));
    }), r;
  }
  if (t instanceof Set) {
    const r = /* @__PURE__ */ new Set();
    return e.set(t, r), t.forEach((i) => {
      r.add(Ie(i, e));
    }), r;
  }
  if (bt(t)) return t;
  const s = {};
  e.set(t, s);
  for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (s[r] = Ie(t[r], e));
  const n = Object.getOwnPropertySymbols(t);
  for (const r of n) s[r] = Ie(t[r], e);
  return s;
}
let Qr = 0;
function jh() {
  return Qr += 1, Qr;
}
function Kn(t, e) {
  const s = /* @__PURE__ */ new Map();
  function n(u, f) {
    if (D("Object ID:", u.constructor.name), s.has(u)) return s.get(u);
    {
      const p = Kn(u, f);
      return s.set(u, p), p;
    }
  }
  const r = /* @__PURE__ */ new Map(), i = { copy_: Ie(t), originalObject: Ie(t), proxyCount: jh(), modified: false, assigned_: {}, parent: e, target: t };
  D("createChangeProxy called for target", t, i.proxyCount);
  function o(u) {
    u.modified || (u.modified = true), u.parent && (D("propagating change to parent"), "updateMap" in u.parent ? u.parent.updateMap(u.copy_) : "updateSet" in u.parent ? u.parent.updateSet(u.copy_) : (u.parent.tracker.copy_[u.parent.prop] = u.copy_, u.parent.tracker.assigned_[u.parent.prop] = true), o(u.parent.tracker));
  }
  function a(u) {
    if (D("checkIfReverted called with assigned keys:", Object.keys(u.assigned_)), Object.keys(u.assigned_).length === 0 && Object.getOwnPropertySymbols(u.assigned_).length === 0) return D("No assigned properties, returning true"), true;
    for (const p in u.assigned_) if (u.assigned_[p] === true) {
      const d = u.copy_[p], y = u.originalObject[p];
      if (D(`Checking property ${String(p)}, current:`, d, "original:", y), !Re(d, y)) return D(`Property ${String(p)} is different, returning false`), false;
    } else if (u.assigned_[p] === false) return D(`Property ${String(p)} was deleted, returning false`), false;
    const f = Object.getOwnPropertySymbols(u.assigned_);
    for (const p of f) if (u.assigned_[p] === true) {
      const d = u.copy_[p], y = u.originalObject[p];
      if (!Re(d, y)) return D("Symbol property is different, returning false"), false;
    } else if (u.assigned_[p] === false) return D("Symbol property was deleted, returning false"), false;
    return D("All properties match original values, returning true"), true;
  }
  function c(u, f) {
    D("checkParentStatus called for child prop:", f);
    const p = a(u);
    D("Parent checkIfReverted returned:", p), p && (D("Parent is fully reverted, clearing tracking"), u.modified = false, u.assigned_ = {}, u.parent && (D("Continuing up the parent chain"), c(u.parent.tracker, u.parent.prop)));
  }
  function l(u) {
    if (D("createObjectProxy", u), r.has(u)) return D("proxyCache found match"), r.get(u);
    const f = new Proxy(u, { get(p, d) {
      var _a5;
      D("get", p, d);
      const y = i.copy_[d] ?? i.originalObject[d], g = i.originalObject[d];
      if (D("value (at top of proxy get)", y), (_a5 = Object.getOwnPropertyDescriptor(p, d)) == null ? void 0 : _a5.get) return y;
      if (typeof y == "function") {
        if (Array.isArray(p)) {
          const b = d.toString();
          if (Lh.has(b)) return Gr(y, i, o);
          const R = Dh(b, y, i, n);
          if (R) return R;
          if (d === Symbol.iterator) return Bh(i, n);
        }
        if (p instanceof Map || p instanceof Set) {
          const b = d.toString();
          if (Ah.has(b)) return Gr(y, i, o);
          const R = Kh(b, d, y, p, i, n, o);
          if (R) return R;
        }
        return y.bind(p);
      }
      if (Bn(y)) {
        const b = { tracker: i, prop: String(d) }, { proxy: R } = n(g, b);
        return r.set(y, R), R;
      }
      return y;
    }, set(p, d, y) {
      const g = i.copy_[d];
      if (D(`set called for property ${String(d)}, current:`, g, "new:", y), Re(g, y)) D("Value unchanged, not tracking");
      else {
        const w = i.originalObject[d], b = Re(y, w);
        if (D("value:", y, "original:", w, "isRevertToOriginal:", b), b) {
          D(`Reverting property ${String(d)} to original value`), delete i.assigned_[d.toString()], D(`Updating copy with original value for ${String(d)}`), i.copy_[d] = Ie(w), D("Checking if all properties reverted");
          const R = a(i);
          D("All reverted:", R), R ? (D("All properties reverted, clearing tracking"), i.modified = false, i.assigned_ = {}, e && (D("Updating parent for property:", e.prop), c(e.tracker, e.prop))) : (D("Some properties still changed, keeping modified flag"), i.modified = true);
        } else D(`Setting new value for property ${String(d)}`), i.copy_[d] = y, i.assigned_[d.toString()] = true, D("Marking object and ancestors as modified", i), o(i);
      }
      return true;
    }, defineProperty(p, d, y) {
      const g = Reflect.defineProperty(p, d, y);
      return g && "value" in y && (i.copy_[d] = Ie(y.value), i.assigned_[d.toString()] = true, o(i)), g;
    }, getOwnPropertyDescriptor(p, d) {
      return Reflect.getOwnPropertyDescriptor(p, d);
    }, preventExtensions(p) {
      return Reflect.preventExtensions(p);
    }, isExtensible(p) {
      return Reflect.isExtensible(p);
    }, deleteProperty(p, d) {
      D("deleteProperty", p, d);
      const y = typeof d == "symbol" ? d.toString() : d;
      if (y in p) {
        const g = y in i.originalObject, w = Reflect.deleteProperty(p, d);
        return w && (g ? (i.assigned_[y] = false, o(i)) : (delete i.assigned_[y], Object.keys(i.assigned_).length === 0 && Object.getOwnPropertySymbols(i.assigned_).length === 0 ? i.modified = false : i.modified = true)), w;
      }
      return true;
    } });
    return r.set(u, f), f;
  }
  return { proxy: l(i.copy_), getChanges: () => {
    if (D("getChanges called, modified:", i.modified), D(i), !i.modified) return D("Object not modified, returning empty object"), {};
    if (typeof i.copy_ != "object" || Array.isArray(i.copy_) || Object.keys(i.assigned_).length === 0) return i.copy_;
    const u = {};
    for (const f in i.copy_) i.assigned_[f] === true && f in i.copy_ && (u[f] = i.copy_[f]);
    return D("Returning copy:", u), u;
  } };
}
function zh(t) {
  const e = t.map((s) => Kn(s));
  return { proxies: e.map((s) => s.proxy), getChanges: () => e.map((s) => s.getChanges()) };
}
function $h(t, e) {
  const { proxy: s, getChanges: n } = Kn(t);
  return e(s), n();
}
function Nh(t, e) {
  const { proxies: s, getChanges: n } = zh(t);
  return e(s), n();
}
function Uh() {
  let t, e, s = true;
  return { promise: new Promise((r, i) => {
    t = (o) => {
      s = false, r(o);
    }, e = (o) => {
      s = false, i(o);
    };
  }), resolve: t, reject: e, isPending: () => s };
}
function Vh(t) {
  return typeof t == "object" && t !== null && typeof t.hasPendingGraphRun == "function";
}
class qh {
  constructor() {
    this.contexts = /* @__PURE__ */ new Map(), this.clearListeners = /* @__PURE__ */ new Set();
  }
  getOrCreateContext(e) {
    let s = this.contexts.get(e);
    return s || (s = { queue: [], jobs: /* @__PURE__ */ new Map(), dependencies: /* @__PURE__ */ new Map(), completed: /* @__PURE__ */ new Set() }, this.contexts.set(e, s)), s;
  }
  schedule({ contextId: e, jobId: s, dependencies: n, run: r }) {
    if (typeof e > "u") {
      r();
      return;
    }
    const i = this.getOrCreateContext(e);
    if (i.jobs.has(s) || i.queue.push(s), i.jobs.set(s, r), n) {
      const o = new Set(n);
      o.delete(s), i.dependencies.set(s, o);
    } else i.dependencies.has(s) || i.dependencies.set(s, /* @__PURE__ */ new Set());
    i.completed.delete(s);
  }
  flush(e) {
    const s = this.contexts.get(e);
    if (!s) return;
    const { queue: n, jobs: r, dependencies: i, completed: o } = s;
    for (; n.length > 0; ) {
      let a = false;
      const c = n.length;
      for (let l = 0; l < c; l++) {
        const h = n.shift(), u = r.get(h);
        if (!u) {
          i.delete(h), o.delete(h);
          continue;
        }
        const f = i.get(h);
        let p = !f;
        if (f) {
          p = true;
          for (const d of f) {
            if (d === h) continue;
            const y = Vh(d) && d.hasPendingGraphRun(e);
            if (r.has(d) && !o.has(d) || !r.has(d) && y) {
              p = false;
              break;
            }
          }
        }
        p ? (r.delete(h), i.delete(h), u(), o.add(h), a = true) : n.push(h);
      }
      if (!a) throw new Error(`Scheduler detected unresolved dependencies for context ${String(e)}.`);
    }
    this.contexts.delete(e);
  }
  flushAll() {
    for (const e of Array.from(this.contexts.keys())) this.flush(e);
  }
  clear(e) {
    this.contexts.delete(e), this.clearListeners.forEach((s) => s(e));
  }
  onClear(e) {
    return this.clearListeners.add(e), () => this.clearListeners.delete(e);
  }
  hasPendingJobs(e) {
    const s = this.contexts.get(e);
    return !!s && s.jobs.size > 0;
  }
  clearJob(e, s) {
    const n = this.contexts.get(e);
    n && (n.jobs.delete(s), n.dependencies.delete(s), n.completed.delete(s), n.queue = n.queue.filter((r) => r !== s), n.jobs.size === 0 && this.contexts.delete(e));
  }
}
const cs = new qh(), ls = [];
let At = [], Wh = 0;
function Hh(t, e) {
  switch (`${t.type}-${e.type}`) {
    case "insert-update":
      return { ...t, type: "insert", original: {}, modified: e.modified, changes: { ...t.changes, ...e.changes }, key: t.key, globalKey: t.globalKey, metadata: e.metadata ?? t.metadata, syncMetadata: { ...t.syncMetadata, ...e.syncMetadata }, mutationId: e.mutationId, updatedAt: e.updatedAt };
    case "insert-delete":
      return null;
    case "update-delete":
      return e;
    case "update-update":
      return { ...e, original: t.original, changes: { ...t.changes, ...e.changes }, metadata: e.metadata ?? t.metadata, syncMetadata: { ...t.syncMetadata, ...e.syncMetadata } };
    case "delete-delete":
    case "insert-insert":
      return e;
    default: {
      const s = `${t.type}-${e.type}`;
      throw new Error(`Unhandled mutation combination: ${s}`);
    }
  }
}
function Ut(t) {
  const e = new Yh(t);
  return ls.push(e), e;
}
function Qt() {
  if (At.length > 0) return At.slice(-1)[0];
}
function Gh(t) {
  cs.clear(t.id), At.push(t);
}
function Qh(t) {
  try {
    cs.flush(t.id);
  } finally {
    At = At.filter((e) => e.id !== t.id);
  }
}
function Jh(t) {
  const e = ls.findIndex((s) => s.id === t.id);
  e !== -1 && ls.splice(e, 1);
}
class Yh {
  constructor(e) {
    if (typeof e.mutationFn > "u") throw new qc();
    this.id = e.id ?? crypto.randomUUID(), this.mutationFn = e.mutationFn, this.state = "pending", this.mutations = [], this.isPersisted = Uh(), this.autoCommit = e.autoCommit ?? true, this.createdAt = /* @__PURE__ */ new Date(), this.sequenceNumber = Wh++, this.metadata = e.metadata ?? {};
  }
  setState(e) {
    this.state = e, (e === "completed" || e === "failed") && Jh(this);
  }
  mutate(e) {
    if (this.state !== "pending") throw new Wc();
    Gh(this);
    try {
      e();
    } finally {
      Qh(this);
    }
    return this.autoCommit && this.commit().catch(() => {
    }), this;
  }
  applyMutations(e) {
    for (const s of e) {
      const n = this.mutations.findIndex((r) => r.globalKey === s.globalKey);
      if (n >= 0) {
        const r = this.mutations[n], i = Hh(r, s);
        i === null ? this.mutations.splice(n, 1) : this.mutations[n] = i;
      } else this.mutations.push(s);
    }
  }
  rollback(e) {
    var _a5;
    const s = (e == null ? void 0 : e.isSecondaryRollback) ?? false;
    if (this.state === "completed") throw new Hc();
    if (this.setState("failed"), !s) {
      const n = /* @__PURE__ */ new Set();
      this.mutations.forEach((r) => n.add(r.globalKey));
      for (const r of ls) r.state === "pending" && r.mutations.some((i) => n.has(i.globalKey)) && r.rollback({ isSecondaryRollback: true });
    }
    return this.isPersisted.reject((_a5 = this.error) == null ? void 0 : _a5.error), this.touchCollection(), this;
  }
  touchCollection() {
    const e = /* @__PURE__ */ new Set();
    for (const s of this.mutations) e.has(s.collection.id) || (s.collection._state.onTransactionStateChange(), s.collection._state.pendingSyncedTransactions.length > 0 && s.collection._state.commitPendingTransactions(), e.add(s.collection.id));
  }
  async commit() {
    if (this.state !== "pending") throw new Gc();
    if (this.setState("persisting"), this.mutations.length === 0) return this.setState("completed"), this.isPersisted.resolve(this), this;
    try {
      await this.mutationFn({ transaction: this }), this.setState("completed"), this.touchCollection(), this.isPersisted.resolve(this);
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.error = { message: s.message, error: s }, this.rollback(), s;
    }
    return this;
  }
  compareCreatedAt(e) {
    const s = this.createdAt.getTime() - e.createdAt.getTime();
    return s !== 0 ? s : this.sequenceNumber - e.sequenceNumber;
  }
}
class Xh {
  constructor(e, s) {
    this.insert = (n, r) => {
      this.lifecycle.validateCollectionUsable("insert");
      const i = this.state, o = Qt();
      if (!o && !this.config.onInsert) throw new Nc();
      const a = Array.isArray(n) ? n : [n], c = [], l = /* @__PURE__ */ new Set();
      if (a.forEach((h) => {
        var _a5, _b2;
        const u = this.validateData(h, "insert"), f = this.config.getKey(u);
        if (this.state.has(f) || l.has(f)) throw new Ac(f);
        l.add(f);
        const p = this.generateGlobalKey(f, h), d = { mutationId: crypto.randomUUID(), original: {}, modified: u, changes: Object.fromEntries(Object.keys(h).map((y) => [y, u[y]])), globalKey: p, key: f, metadata: r == null ? void 0 : r.metadata, syncMetadata: ((_b2 = (_a5 = this.config.sync).getSyncMetadata) == null ? void 0 : _b2.call(_a5)) || {}, optimistic: (r == null ? void 0 : r.optimistic) ?? true, type: "insert", createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date(), collection: this.collection };
        c.push(d);
      }), o) return o.applyMutations(c), i.transactions.set(o.id, o), i.scheduleTransactionCleanup(o), i.recomputeOptimisticState(true), o;
      {
        const h = Ut({ mutationFn: async (u) => await this.config.onInsert({ transaction: u.transaction, collection: this.collection }) });
        return h.applyMutations(c), h.commit().catch(() => {
        }), i.transactions.set(h.id, h), i.scheduleTransactionCleanup(h), i.recomputeOptimisticState(true), h;
      }
    }, this.delete = (n, r) => {
      const i = this.state;
      this.lifecycle.validateCollectionUsable("delete");
      const o = Qt();
      if (!o && !this.config.onDelete) throw new Vc();
      if (Array.isArray(n) && n.length === 0) throw new zc();
      const a = Array.isArray(n) ? n : [n], c = [];
      for (const h of a) {
        if (!this.state.has(h)) throw new $c(h);
        const u = this.generateGlobalKey(h, this.state.get(h)), f = { mutationId: crypto.randomUUID(), original: this.state.get(h), modified: this.state.get(h), changes: this.state.get(h), globalKey: u, key: h, metadata: r == null ? void 0 : r.metadata, syncMetadata: i.syncedMetadata.get(h) || {}, optimistic: (r == null ? void 0 : r.optimistic) ?? true, type: "delete", createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date(), collection: this.collection };
        c.push(f);
      }
      if (o) return o.applyMutations(c), i.transactions.set(o.id, o), i.scheduleTransactionCleanup(o), i.recomputeOptimisticState(true), o;
      const l = Ut({ autoCommit: true, mutationFn: async (h) => this.config.onDelete({ transaction: h.transaction, collection: this.collection }) });
      return l.applyMutations(c), l.commit().catch(() => {
      }), i.transactions.set(l.id, l), i.scheduleTransactionCleanup(l), i.recomputeOptimisticState(true), l;
    }, this.id = s, this.config = e;
  }
  setDeps(e) {
    this.lifecycle = e.lifecycle, this.state = e.state, this.collection = e.collection;
  }
  ensureStandardSchema(e) {
    if (e && "~standard" in e) return e;
    throw new kc();
  }
  validateData(e, s, n) {
    if (!this.config.schema) return e;
    const r = this.ensureStandardSchema(this.config.schema);
    if (s === "update" && n) {
      const o = this.state.get(n);
      if (o && e && typeof e == "object" && typeof o == "object") {
        const a = Object.assign({}, o, e), c = r["~standard"].validate(a);
        if (c instanceof Promise) throw new Pr();
        if ("issues" in c && c.issues) {
          const f = c.issues.map((p) => {
            var _a5;
            return { message: p.message, path: (_a5 = p.path) == null ? void 0 : _a5.map((d) => String(d)) };
          });
          throw new Rr(s, f);
        }
        const l = c.value, h = Object.keys(e);
        return Object.fromEntries(h.map((f) => [f, l[f]]));
      }
    }
    const i = r["~standard"].validate(e);
    if (i instanceof Promise) throw new Pr();
    if ("issues" in i && i.issues) {
      const o = i.issues.map((a) => {
        var _a5;
        return { message: a.message, path: (_a5 = a.path) == null ? void 0 : _a5.map((c) => String(c)) };
      });
      throw new Rr(s, o);
    }
    return i.value;
  }
  generateGlobalKey(e, s) {
    if (typeof e != "string" && typeof e != "number") throw typeof e > "u" ? new Tc(s) : new Lc(e, s);
    return `KEY::${this.id}/${e}`;
  }
  update(e, s, n) {
    if (typeof e > "u") throw new Dc();
    const r = this.state;
    this.lifecycle.validateCollectionUsable("update");
    const i = Qt();
    if (!i && !this.config.onUpdate) throw new Uc();
    const o = Array.isArray(e), a = o ? e : [e];
    if (o && a.length === 0) throw new Bc();
    const c = typeof s == "function" ? s : n, l = typeof s == "function" ? {} : s, h = a.map((d) => {
      const y = this.state.get(d);
      if (!y) throw new Kc(d);
      return y;
    });
    let u;
    o ? u = Nh(h, c) : u = [$h(h[0], c)];
    const f = a.map((d, y) => {
      const g = u[y];
      if (!g || Object.keys(g).length === 0) return null;
      const w = h[y], b = this.validateData(g, "update", d), R = Object.assign({}, w, b), v = this.config.getKey(w), E = this.config.getKey(R);
      if (v !== E) throw new jc(v, E);
      const M = this.generateGlobalKey(E, R);
      return { mutationId: crypto.randomUUID(), original: w, modified: R, changes: Object.fromEntries(Object.keys(g).map((O) => [O, R[O]])), globalKey: M, key: d, metadata: l.metadata, syncMetadata: r.syncedMetadata.get(d) || {}, optimistic: l.optimistic ?? true, type: "update", createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date(), collection: this.collection };
    }).filter(Boolean);
    if (f.length === 0) {
      const d = Ut({ mutationFn: async () => {
      } });
      return d.commit().catch(() => {
      }), r.scheduleTransactionCleanup(d), d;
    }
    if (i) return i.applyMutations(f), r.transactions.set(i.id, i), r.scheduleTransactionCleanup(i), r.recomputeOptimisticState(true), i;
    const p = Ut({ mutationFn: async (d) => this.config.onUpdate({ transaction: d.transaction, collection: this.collection }) });
    return p.applyMutations(f), p.commit().catch(() => {
    }), r.transactions.set(p.id, p), r.scheduleTransactionCleanup(p), r.recomputeOptimisticState(true), p;
  }
}
class Zh extends Ki {
  constructor() {
    super();
  }
  setDeps(e) {
    this.collection = e.collection;
  }
  emit(e, s) {
    this.emitInner(e, s);
  }
  emitStatusChange(e, s) {
    this.emit("status:change", { type: "status:change", collection: this.collection, previousStatus: s, status: e });
    const n = `status:${e}`;
    this.emit(n, { type: n, collection: this.collection, previousStatus: s, status: e });
  }
  emitSubscribersChange(e, s) {
    this.emit("subscribers:change", { type: "subscribers:change", collection: this.collection, previousSubscriberCount: s, subscriberCount: e });
  }
  cleanup() {
    this.clearListeners();
  }
}
function ef(t) {
  const e = new jn(t);
  return t.utils ? e.utils = t.utils : e.utils = {}, e;
}
class jn {
  constructor(e) {
    if (this.utils = {}, this.insert = (s, n) => this._mutations.insert(s, n), this.delete = (s, n) => this._mutations.delete(s, n), !e) throw new Cc();
    if (!e.sync) throw new _c();
    e.id ? this.id = e.id : this.id = crypto.randomUUID(), this.config = { ...e, autoIndex: e.autoIndex ?? "eager" }, this._changes = new Sh(), this._events = new Zh(), this._indexes = new Oh(), this._lifecycle = new Ph(e, this.id), this._mutations = new Xh(e, this.id), this._state = new mh(e), this._sync = new Ch(e, this.id), this.comparisonOpts = tf(e), this._changes.setDeps({ collection: this, lifecycle: this._lifecycle, sync: this._sync, events: this._events }), this._events.setDeps({ collection: this }), this._indexes.setDeps({ state: this._state, lifecycle: this._lifecycle }), this._lifecycle.setDeps({ changes: this._changes, events: this._events, indexes: this._indexes, state: this._state, sync: this._sync }), this._mutations.setDeps({ collection: this, lifecycle: this._lifecycle, state: this._state }), this._state.setDeps({ collection: this, lifecycle: this._lifecycle, changes: this._changes, indexes: this._indexes, events: this._events }), this._sync.setDeps({ collection: this, state: this._state, lifecycle: this._lifecycle, events: this._events }), e.startSync === true && this._sync.startSync();
  }
  get status() {
    return this._lifecycle.status;
  }
  get subscriberCount() {
    return this._changes.activeSubscribersCount;
  }
  onFirstReady(e) {
    return this._lifecycle.onFirstReady(e);
  }
  isReady() {
    return this._lifecycle.status === "ready";
  }
  get isLoadingSubset() {
    return this._sync.isLoadingSubset;
  }
  startSyncImmediate() {
    this._sync.startSync();
  }
  preload() {
    return this._sync.preload();
  }
  get(e) {
    return this._state.get(e);
  }
  has(e) {
    return this._state.has(e);
  }
  get size() {
    return this._state.size;
  }
  *keys() {
    yield* this._state.keys();
  }
  *values() {
    yield* this._state.values();
  }
  *entries() {
    yield* this._state.entries();
  }
  *[Symbol.iterator]() {
    yield* this._state[Symbol.iterator]();
  }
  forEach(e) {
    return this._state.forEach(e);
  }
  map(e) {
    return this._state.map(e);
  }
  getKeyFromItem(e) {
    return this.config.getKey(e);
  }
  createIndex(e, s = {}) {
    return this._indexes.createIndex(e, s);
  }
  get indexes() {
    return this._indexes.indexes;
  }
  validateData(e, s, n) {
    return this._mutations.validateData(e, s, n);
  }
  get compareOptions() {
    return { ...this.comparisonOpts };
  }
  update(e, s, n) {
    return this._mutations.update(e, s, n);
  }
  get state() {
    const e = /* @__PURE__ */ new Map();
    for (const [s, n] of this.entries()) e.set(s, n);
    return e;
  }
  stateWhenReady() {
    return this.size > 0 || this.isReady() ? Promise.resolve(this.state) : this.preload().then(() => this.state);
  }
  get toArray() {
    return Array.from(this.values());
  }
  toArrayWhenReady() {
    return this.size > 0 || this.isReady() ? Promise.resolve(this.toArray) : this.preload().then(() => this.toArray);
  }
  currentStateAsChanges(e = {}) {
    return ph(this, e);
  }
  subscribeChanges(e, s = {}) {
    return this._changes.subscribeChanges(e, s);
  }
  on(e, s) {
    return this._events.on(e, s);
  }
  once(e, s) {
    return this._events.once(e, s);
  }
  off(e, s) {
    this._events.off(e, s);
  }
  waitFor(e, s) {
    return this._events.waitFor(e, s);
  }
  async cleanup() {
    return this._lifecycle.cleanup(), Promise.resolve();
  }
}
function tf(t) {
  if (t.defaultStringCollation) {
    const e = t.defaultStringCollation;
    return { stringSort: e.stringSort ?? "locale", locale: e.stringSort === "locale" ? e.locale : void 0, localeOptions: e.stringSort === "locale" ? e.localeOptions : void 0 };
  } else return { stringSort: "locale" };
}
class W {
  constructor(e = {}) {
    this.query = {}, this.query = { ...e };
  }
  _createRefForSource(e, s) {
    let n;
    try {
      n = Object.keys(e);
    } catch {
      const a = e === null ? "null" : "undefined";
      throw new $t(s, a);
    }
    if (Array.isArray(e)) throw new $t(s, "array");
    if (n.length !== 1) throw n.length === 0 ? new $t(s, "empty object") : n.every((a) => !isNaN(Number(a))) ? new $t(s, "string") : new Yc(s);
    const r = n[0], i = e[r];
    let o;
    if (i instanceof jn) o = new ot(i, r);
    else if (i instanceof W) {
      const a = i._getQuery();
      if (!a.from) throw new Xc(s);
      o = new ge(a, r);
    } else throw new Zc(r);
    return [r, o];
  }
  from(e) {
    const [, s] = this._createRefForSource(e, "from clause");
    return new W({ ...this.query, from: s });
  }
  join(e, s, n = "left") {
    const [r, i] = this._createRefForSource(e, "join clause"), a = [...this._getCurrentAliases(), r], c = Ue(a), l = s(c);
    let h, u;
    if (l.type === "func" && l.name === "eq" && l.args.length === 2) h = l.args[0], u = l.args[1];
    else throw new el();
    const f = { from: i, type: n, left: h, right: u }, p = this.query.join || [];
    return new W({ ...this.query, join: [...p, f] });
  }
  leftJoin(e, s) {
    return this.join(e, s, "left");
  }
  rightJoin(e, s) {
    return this.join(e, s, "right");
  }
  innerJoin(e, s) {
    return this.join(e, s, "inner");
  }
  fullJoin(e, s) {
    return this.join(e, s, "full");
  }
  where(e) {
    const s = this._getCurrentAliases(), n = Ue(s), r = e(n);
    if (!Ot(r)) throw new kr(Jr(r));
    const i = this.query.where || [];
    return new W({ ...this.query, where: [...i, r] });
  }
  having(e) {
    const s = this._getCurrentAliases(), n = this.query.select || this.query.fnSelect ? Nr(s) : Ue(s), r = e(n);
    if (!Ot(r)) throw new kr(Jr(r));
    const i = this.query.having || [];
    return new W({ ...this.query, having: [...i, r] });
  }
  select(e) {
    const s = this._getCurrentAliases(), n = Ue(s), r = e(n), i = zi(r);
    return new W({ ...this.query, select: i, fnSelect: void 0 });
  }
  orderBy(e, s = "asc") {
    const n = this._getCurrentAliases(), r = this.query.select || this.query.fnSelect ? Nr(n) : Ue(n), i = e(r), o = typeof s == "string" ? { direction: s, nulls: "first" } : { direction: s.direction ?? "asc", nulls: s.nulls ?? "first", stringSort: s.stringSort, locale: s.stringSort === "locale" ? s.locale : void 0, localeOptions: s.stringSort === "locale" ? s.localeOptions : void 0 }, a = (h) => ({ expression: G(h), compareOptions: o }), c = Array.isArray(i) ? i.map((h) => a(h)) : [a(i)], l = this.query.orderBy || [];
    return new W({ ...this.query, orderBy: [...l, ...c] });
  }
  groupBy(e) {
    const s = this._getCurrentAliases(), n = Ue(s), r = e(n), i = Array.isArray(r) ? r.map((a) => G(a)) : [G(r)], o = this.query.groupBy || [];
    return new W({ ...this.query, groupBy: [...o, ...i] });
  }
  limit(e) {
    return new W({ ...this.query, limit: e });
  }
  offset(e) {
    return new W({ ...this.query, offset: e });
  }
  distinct() {
    return new W({ ...this.query, distinct: true });
  }
  findOne() {
    return new W({ ...this.query, singleResult: true });
  }
  _getCurrentAliases() {
    const e = [];
    if (this.query.from && e.push(this.query.from.alias), this.query.join) for (const s of this.query.join) e.push(s.from.alias);
    return e;
  }
  get fn() {
    const e = this;
    return { select(s) {
      return new W({ ...e.query, select: void 0, fnSelect: s });
    }, where(s) {
      return new W({ ...e.query, fnWhere: [...e.query.fnWhere || [], s] });
    }, having(s) {
      return new W({ ...e.query, fnHaving: [...e.query.fnHaving || [], s] });
    } };
  }
  _getQuery() {
    if (!this.query.from) throw new tl();
    return this.query;
  }
}
function Jr(t) {
  return t === null ? "null" : t === void 0 ? "undefined" : typeof t == "object" ? "object" : typeof t;
}
function sf(t) {
  return t === void 0 ? G(null) : t instanceof Ei || t instanceof we || t instanceof ce || t instanceof he ? t : G(t);
}
function nf(t) {
  return t !== null && typeof t == "object" && !Ot(t) && !t.__refProxy;
}
function zi(t) {
  if (!nf(t)) return sf(t);
  const e = {};
  for (const [s, n] of Object.entries(t)) {
    if (typeof s == "string" && s.startsWith("__SPREAD_SENTINEL__")) {
      e[s] = n;
      continue;
    }
    e[s] = zi(n);
  }
  return e;
}
function rf(t) {
  const e = t(new W());
  return $i(e);
}
function $i(t) {
  return t._getQuery();
}
function of(t) {
  const e = af(t);
  let s = t, n, r = 0;
  const i = 10;
  for (; r < i && !Re(s, n); ) n = s, s = rn(s), r++;
  return { optimizedQuery: Ni(s), sourceWhereClauses: e };
}
function af(t) {
  const e = /* @__PURE__ */ new Map();
  if (!t.where || t.where.length === 0) return e;
  const n = an(t.where).map((i) => Ui(i)), r = Vi(n);
  for (const [i, o] of r.singleSource) cf(t, i) && e.set(i, o);
  return e;
}
function cf(t, e) {
  if (t.from.alias === e) return t.from.type === "collectionRef";
  if (t.join) {
    for (const s of t.join) if (s.from.alias === e) return s.from.type === "collectionRef";
  }
  return false;
}
function rn(t) {
  var _a5;
  const e = { ...t, from: t.from.type === "queryRef" ? new ge(rn(t.from.query), t.from.alias) : t.from, join: (_a5 = t.join) == null ? void 0 : _a5.map((s) => ({ ...s, from: s.from.type === "queryRef" ? new ge(rn(s.from.query), s.from.alias) : s.from })) };
  return lf(e);
}
function lf(t) {
  if (!t.where || t.where.length === 0) return t;
  if (!t.join || t.join.length === 0) {
    if (t.where.length > 1) {
      const a = an(t.where), c = us(a);
      return { ...t, where: [c] };
    }
    return t;
  }
  const e = t.where.filter((a) => !xr(a)), n = an(e).map((a) => Ui(a)), r = Vi(n), i = hf(t, r), o = t.where.filter((a) => xr(a));
  return o.length > 0 && (i.where = [...i.where || [], ...o]), i;
}
function Ni(t) {
  var _a5;
  return { ...t, from: on(t.from), join: (_a5 = t.join) == null ? void 0 : _a5.map((e) => ({ ...e, from: on(e.from) })) };
}
function on(t) {
  if (t.type === "collectionRef") return t;
  const e = Ni(t.query);
  if (uf(e)) {
    const s = on(e.from);
    return s.type === "collectionRef" ? new ot(s.collection, t.alias) : new ge(s.query, t.alias);
  }
  return new ge(e, t.alias);
}
function uf(t) {
  return (!t.where || t.where.length === 0) && !t.select && (!t.groupBy || t.groupBy.length === 0) && (!t.having || t.having.length === 0) && (!t.orderBy || t.orderBy.length === 0) && (!t.join || t.join.length === 0) && t.limit === void 0 && t.offset === void 0 && !t.fnSelect && (!t.fnWhere || t.fnWhere.length === 0) && (!t.fnHaving || t.fnHaving.length === 0);
}
function an(t) {
  const e = [];
  for (const s of t) {
    const n = _n(s);
    e.push(...zn(n));
  }
  return e;
}
function zn(t) {
  if (t.type === "func" && t.name === "and") {
    const e = [];
    for (const s of t.args) e.push(...zn(s));
    return e;
  } else return [t];
}
function Ui(t) {
  const e = /* @__PURE__ */ new Set();
  let s = false;
  function n(r) {
    switch (r.type) {
      case "ref":
        if (r.path && r.path.length > 0) {
          const i = r.path[0];
          i && (e.add(i), r.path.length === 1 && (s = true));
        }
        break;
      case "func":
        r.args && r.args.forEach(n);
        break;
      case "val":
        break;
      case "agg":
        r.args && r.args.forEach(n);
        break;
    }
  }
  return n(t), { expression: t, touchedSources: e, hasNamespaceOnlyRef: s };
}
function Vi(t) {
  const e = /* @__PURE__ */ new Map(), s = [];
  for (const i of t) if (i.touchedSources.size === 1 && !i.hasNamespaceOnlyRef) {
    const o = Array.from(i.touchedSources)[0];
    e.has(o) || e.set(o, []), e.get(o).push(i.expression);
  } else (i.touchedSources.size > 1 || i.hasNamespaceOnlyRef) && s.push(i.expression);
  const n = /* @__PURE__ */ new Map();
  for (const [i, o] of e) n.set(i, us(o));
  const r = s.length > 0 ? us(s) : void 0;
  return { singleSource: n, multiSource: r };
}
function hf(t, e) {
  const s = /* @__PURE__ */ new Set(), n = Yr(t.from, e.singleSource, s), r = t.join ? t.join.map((l) => ({ ...l, from: Yr(l.from, e.singleSource, s) })) : void 0, i = [];
  e.multiSource && i.push(e.multiSource);
  const o = t.join && t.join.some((l) => l.type === "left" || l.type === "right" || l.type === "full");
  for (const [l, h] of e.singleSource) s.has(l) ? o && i.push(Rc(h)) : i.push(h);
  const a = i.length > 1 ? [us(i.flatMap((l) => zn(_n(l))))] : i;
  return { select: t.select, groupBy: t.groupBy ? [...t.groupBy] : void 0, having: t.having ? [...t.having] : void 0, orderBy: t.orderBy ? [...t.orderBy] : void 0, limit: t.limit, offset: t.offset, distinct: t.distinct, fnSelect: t.fnSelect, fnWhere: t.fnWhere ? [...t.fnWhere] : void 0, fnHaving: t.fnHaving ? [...t.fnHaving] : void 0, from: n, join: r, where: a.length > 0 ? a : [] };
}
function et(t) {
  return { from: t.from.type === "collectionRef" ? new ot(t.from.collection, t.from.alias) : new ge(et(t.from.query), t.from.alias), select: t.select, join: t.join ? t.join.map((e) => ({ type: e.type, left: e.left, right: e.right, from: e.from.type === "collectionRef" ? new ot(e.from.collection, e.from.alias) : new ge(et(e.from.query), e.from.alias) })) : void 0, where: t.where ? [...t.where] : void 0, groupBy: t.groupBy ? [...t.groupBy] : void 0, having: t.having ? [...t.having] : void 0, orderBy: t.orderBy ? [...t.orderBy] : void 0, limit: t.limit, offset: t.offset, fnSelect: t.fnSelect, fnWhere: t.fnWhere ? [...t.fnWhere] : void 0, fnHaving: t.fnHaving ? [...t.fnHaving] : void 0 };
}
function Yr(t, e, s) {
  const n = e.get(t.alias);
  if (!n) return t.type === "collectionRef" ? new ot(t.collection, t.alias) : new ge(et(t.query), t.alias);
  if (t.type === "collectionRef") {
    const o = { from: new ot(t.collection, t.alias), where: [n] };
    return s.add(t.alias), new ge(o, t.alias);
  }
  if (!mf(t.query, n, t.alias)) return new ge(et(t.query), t.alias);
  if (vf(t.query, n, t.alias)) return new ge(et(t.query), t.alias);
  const r = t.query.where || [], i = { ...et(t.query), where: [...r, n] };
  return s.add(t.alias), new ge(i, t.alias);
}
function ff(t, e, s) {
  return t.select ? qi(t.select) || wf(t.select, e, s) : false;
}
function df(t) {
  return t.groupBy && t.groupBy.length > 0;
}
function pf(t) {
  return t.having && t.having.length > 0;
}
function yf(t) {
  return t.orderBy && t.orderBy.length > 0 && (t.limit !== void 0 || t.offset !== void 0);
}
function gf(t) {
  return t.fnSelect || t.fnWhere && t.fnWhere.length > 0 || t.fnHaving && t.fnHaving.length > 0;
}
function mf(t, e, s) {
  return !(ff(t, e, s) || df(t) || pf(t) || yf(t) || gf(t));
}
function qi(t) {
  for (const e of Object.values(t)) if (typeof e == "object") {
    const s = e;
    if (s.type === "agg" || !("type" in s) && qi(s)) return true;
  }
  return false;
}
function $n(t) {
  const e = [];
  if (t == null || typeof t != "object") return e;
  switch (t.type) {
    case "ref":
      e.push(t);
      break;
    case "func":
    case "agg":
      for (const s of t.args ?? []) e.push(...$n(s));
      break;
  }
  return e;
}
function wf(t, e, s) {
  const n = /* @__PURE__ */ new Set();
  for (const [i, o] of Object.entries(t)) i.startsWith("__SPREAD_SENTINEL__") || o instanceof ce || n.add(i);
  const r = $n(e);
  for (const i of r) {
    const o = i.path;
    if (!Array.isArray(o) || o.length < 2) continue;
    const a = o[0], c = o[1];
    if (a === s && n.has(c)) return true;
  }
  return false;
}
function vf(t, e, s) {
  const n = $n(e);
  if (n.every((i) => i.path[0] !== s)) return false;
  if (t.fnSelect) return true;
  const r = t.select;
  if (!r) return false;
  for (const i of n) {
    const o = i.path;
    if (o.length < 2 || o[0] !== s) continue;
    const a = r[o[1]];
    if (!a) continue;
    if (!(a instanceof ce) || a.path.length < 2) return true;
    const [c, l] = a.path;
    if (c !== s && c !== t.from.alias || l !== o[1]) return true;
  }
  return false;
}
function us(t) {
  if (t.length === 0) throw new xl();
  return t.length === 1 ? t[0] : new we("and", t);
}
function Sf(t, e, s, n, r, i, o, a, c, l, h, u, f, p, d, y, g, w, b) {
  let R = t;
  for (const v of e) R = bf(R, v, s, n, r, i, o, a, c, l, h, u, f, p, d, y, g, w, b);
  return R;
}
function bf(t, e, s, n, r, i, o, a, c, l, h, u, f, p, d, y, g, w, b) {
  const R = e.from.type === "collectionRef", { alias: v, input: E, collectionId: M } = Rf(e.from, i, c, l, h, u, f, p, o, a, y, g, w, b);
  s[v] = E, R && (g[v] = M);
  const O = c[n], C = c[M];
  if (!O) throw new Ir(n);
  if (!C) throw new Ir(M);
  const { activeSource: x, lazySource: I } = Cf(e.type, O, C), m = Object.keys(s), { mainExpr: P, joinedExpr: S } = xf(e.left, e.right, m, v), k = fe(P), _ = fe(S);
  let A = t.pipe(ae(([F, B]) => [k(B), [F, B]])), K = E.pipe(ae(([F, B]) => {
    const j = { [v]: B };
    return [_(j), [F, j]];
  }));
  if (!["inner", "left", "right", "full"].includes(e.type)) throw new ul(e.type);
  if (x) {
    const F = x === "main" ? e.from : d.from, B = F.type === "queryRef" && (F.query.limit || F.query.offset), j = P.type === "func" || S.type === "func";
    if (!B && !j) {
      const $ = x === "main" ? v : r;
      u.add($);
      const xe = x === "main" ? A : K, X = Mt(d, x === "main" ? S : P, I), Z = X.collection, N = X.path[0];
      N && vs(N, X.path, Z);
      const U = xe.pipe(Lu((q) => {
        const Q = w[$] || $, V = l[Q];
        if (!V) throw new Rl(Q, $, I.id, Object.keys(l));
        if (V.hasLoadedInitialState()) return;
        const re = q.getInner().map(([[bs]]) => bs), Te = new ce(X.path);
        V.requestSnapshot({ where: sh(Te, re), optimizedOnly: true }) || V.requestSnapshot();
      }));
      x === "main" ? A = U : K = U;
    }
  }
  return A.pipe(zu(K, e.type), Pf(e.type));
}
function xf(t, e, s, n) {
  const r = s.filter((a) => a !== n), i = cn(t), o = cn(e);
  if (i && r.includes(i) && o === n) return { mainExpr: t, joinedExpr: e };
  if (i === n && o && r.includes(o)) return { mainExpr: e, joinedExpr: t };
  throw !i || !o ? new fl() : i === o ? new hl(i) : r.includes(i) ? o !== n ? new pl(n) : new yl() : new dl(i);
}
function cn(t) {
  switch (t.type) {
    case "ref":
      return t.path[0] || null;
    case "func": {
      const e = /* @__PURE__ */ new Set();
      for (const s of t.args) {
        const n = cn(s);
        n && e.add(n);
      }
      return e.size === 1 ? Array.from(e)[0] : null;
    }
    default:
      return null;
  }
}
function Rf(t, e, s, n, r, i, o, a, c, l, h, u, f, p) {
  switch (t.type) {
    case "collectionRef": {
      const d = e[t.alias];
      if (!d) throw new Oi(t.alias, t.collection.id, Object.keys(e));
      return u[t.alias] = t.collection.id, { alias: t.alias, input: d, collectionId: t.collection.id };
    }
    case "queryRef": {
      const d = l.get(t.query) || t.query, y = h(d, e, s, n, r, i, o, a, c, l);
      Object.assign(u, y.aliasToCollectionId), Object.assign(f, y.aliasRemapping);
      const g = l.has(t.query), w = t.query.from.alias;
      if (!(!g && t.alias === w)) for (const [M, O] of y.sourceWhereClauses) p.set(M, O);
      const R = Object.keys(y.aliasToCollectionId).find((M) => y.aliasToCollectionId[M] === y.collectionId);
      R && R !== t.alias && (f[t.alias] = R);
      const E = y.pipeline.pipe(ae((M) => {
        const [O, [C, x]] = M;
        return [O, C];
      }));
      return { alias: t.alias, input: E, collectionId: y.collectionId };
    }
    default:
      throw new gl(t.type);
  }
}
function Pf(t) {
  return function(e) {
    return e.pipe(je((s) => {
      const [n, [r, i]] = s, o = r == null ? void 0 : r[1], a = i == null ? void 0 : i[1];
      return t === "inner" ? !!(o && a) : t === "left" ? !!o : t === "right" ? !!a : true;
    }), ae((s) => {
      const [n, [r, i]] = s, o = r == null ? void 0 : r[0], a = r == null ? void 0 : r[1], c = i == null ? void 0 : i[0], l = i == null ? void 0 : i[1], h = {};
      return a && Object.assign(h, a), l && Object.assign(h, l), [`[${o},${c}]`, h];
    }));
  };
}
function Cf(t, e, s) {
  switch (t) {
    case "left":
      return { activeSource: "main", lazySource: s };
    case "right":
      return { activeSource: "joined", lazySource: e };
    case "inner":
      return e.size < s.size ? { activeSource: "main", lazySource: s } : { activeSource: "joined", lazySource: e };
    default:
      return { activeSource: void 0, lazySource: void 0 };
  }
}
function ln(t) {
  return t instanceof he ? t.value : t;
}
function _f(t, e, s) {
  const n = t.source(e);
  if (n && typeof n == "object") {
    let r = s;
    const i = t.targetPath;
    if (i.length === 0) for (const [o, a] of Object.entries(n)) s[o] = ln(a);
    else for (let o = 0; o < i.length; o++) {
      const a = i[o];
      if (o === i.length - 1) {
        const c = r[a] ?? (r[a] = {});
        if (typeof c == "object") for (const [l, h] of Object.entries(n)) c[l] = ln(h);
      } else {
        const c = r[a];
        (c == null || typeof c != "object") && (r[a] = {}), r = r[a];
      }
    }
  }
}
function kf(t, e, s) {
  const n = t.alias.split(".");
  if (n.length === 1) s[t.alias] = t.compiled(e);
  else {
    let r = s;
    for (let i = 0; i < n.length - 1; i++) {
      const o = n[i], a = r[o];
      (a == null || typeof a != "object") && (r[o] = {}), r = r[o];
    }
    r[n[n.length - 1]] = ln(t.compiled(e));
  }
}
function If([t, e], s) {
  const n = {};
  for (const r of s) r.kind === "merge" ? _f(r, e, n) : kf(r, e, n);
  return [t, { ...e, $selected: n }];
}
function Ef(t, e, s) {
  const n = [];
  return Wi([], e, n), t.pipe(ae((r) => If(r, n)));
}
function Of(t) {
  return t.type === "agg";
}
function Mf(t) {
  return t && typeof t == "object" && !Ot(t);
}
function Wi(t, e, s) {
  for (const [n, r] of Object.entries(e)) {
    if (n.startsWith("__SPREAD_SENTINEL__")) {
      const o = n.slice(19), a = o.lastIndexOf("__"), c = a >= 0 ? o.slice(0, a) : o, l = r && typeof r == "object" && "type" in r && r.type === "ref";
      if (c.includes(".") || l) {
        const h = [...t], u = l ? r : new ce(c.split(".")), f = fe(u);
        s.push({ kind: "merge", targetPath: h, source: f });
      } else {
        const h = c, u = [...t];
        s.push({ kind: "merge", targetPath: u, source: (f) => f[h] });
      }
      continue;
    }
    const i = r;
    if (Mf(i)) {
      Wi([...t, n], i, s);
      continue;
    }
    if (Of(i)) s.push({ kind: "field", alias: [...t, n].join("."), compiled: () => null });
    else {
      if (i === void 0 || !Ot(i)) {
        s.push({ kind: "field", alias: [...t, n].join("."), compiled: () => i });
        continue;
      }
      if (i instanceof he) {
        const o = i.value;
        s.push({ kind: "field", alias: [...t, n].join("."), compiled: () => o });
      } else s.push({ kind: "field", alias: [...t, n].join("."), compiled: fe(i) });
    }
  }
}
function Nn(t, e, s, n, r, i, o, a, c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap()) {
  const h = c.get(t);
  if (h) return h;
  un(t);
  const { optimizedQuery: u, sourceWhereClauses: f } = of(t);
  l.set(u, t), fn(u, t, l);
  const p = { ...e }, d = {}, y = {}, g = {}, { alias: w, input: b, collectionId: R } = Lf(u.from, p, s, n, r, i, o, a, c, l, d, y, f);
  g[w] = b;
  let v = b.pipe(ae(([C, x]) => [C, { [w]: x }]));
  if (u.join && u.join.length > 0 && (v = Sf(v, u.join, g, R, w, p, c, l, s, n, r, i, o, a, t, Nn, d, y, f)), u.where && u.where.length > 0) for (const C of u.where) {
    const x = _n(C), I = fe(x);
    v = v.pipe(je(([m, P]) => nt(I(P))));
  }
  if (u.fnWhere && u.fnWhere.length > 0) for (const C of u.fnWhere) v = v.pipe(je(([x, I]) => nt(C(I))));
  if (u.distinct && !u.fnSelect && !u.select) throw new sl();
  if (u.fnSelect ? v = v.pipe(ae(([C, x]) => {
    const I = u.fnSelect(x);
    return [C, { ...x, $selected: I }];
  })) : u.select ? v = Ef(v, u.select) : v = v.pipe(ae(([C, x]) => {
    const I = !u.join && !u.groupBy ? x[w] : x;
    return [C, { ...x, $selected: I }];
  })), u.groupBy && u.groupBy.length > 0 ? v = Vr(v, u.groupBy, u.having, u.select, u.fnHaving) : u.select && Object.values(u.select).some((x) => x.type === "agg") && (v = Vr(v, [], u.having, u.select, u.fnHaving)), u.having && (!u.groupBy || u.groupBy.length === 0) && !(u.select ? Object.values(u.select).some((x) => x.type === "agg") : false)) throw new nl();
  if (u.fnHaving && u.fnHaving.length > 0 && (!u.groupBy || u.groupBy.length === 0)) for (const C of u.fnHaving) v = v.pipe(je(([x, I]) => C(I)));
  if (u.distinct && (v = v.pipe(Nu(([C, x]) => x.$selected))), u.orderBy && u.orderBy.length > 0) {
    const I = dh(t, v, u.orderBy, u.select || {}, s[R], o, a, u.limit, u.offset).pipe(ae(([P, [S, k]]) => {
      const _ = S.$selected, A = hn(_);
      return [P, [A, k]];
    })), m = { collectionId: R, pipeline: I, sourceWhereClauses: f, aliasToCollectionId: d, aliasRemapping: y };
    return c.set(t, m), m;
  } else if (u.limit !== void 0 || u.offset !== void 0) throw new rl();
  const M = v.pipe(ae(([C, x]) => {
    const I = x.$selected, m = hn(I);
    return [C, [m, void 0]];
  })), O = { collectionId: R, pipeline: M, sourceWhereClauses: f, aliasToCollectionId: d, aliasRemapping: y };
  return c.set(t, O), O;
}
function Tf(t) {
  const e = /* @__PURE__ */ new Set();
  if (t.from.type === "collectionRef" && e.add(t.from.alias), t.join) for (const s of t.join) s.from.type === "collectionRef" && e.add(s.from.alias);
  return e;
}
function un(t, e = /* @__PURE__ */ new Set()) {
  const s = Tf(t);
  for (const r of s) if (e.has(r)) throw new il(r, Array.from(e));
  const n = /* @__PURE__ */ new Set([...e, ...s]);
  if (t.from.type === "queryRef" && un(t.from.query, n), t.join) for (const r of t.join) r.from.type === "queryRef" && un(r.from.query, n);
}
function Lf(t, e, s, n, r, i, o, a, c, l, h, u, f) {
  switch (t.type) {
    case "collectionRef": {
      const p = e[t.alias];
      if (!p) throw new Oi(t.alias, t.collection.id, Object.keys(e));
      return h[t.alias] = t.collection.id, { alias: t.alias, input: p, collectionId: t.collection.id };
    }
    case "queryRef": {
      const p = l.get(t.query) || t.query, d = Nn(p, e, s, n, r, i, o, a, c, l);
      Object.assign(h, d.aliasToCollectionId), Object.assign(u, d.aliasRemapping);
      const y = l.has(t.query), g = t.query.from.alias;
      if (!(!y && t.alias === g)) for (const [E, M] of d.sourceWhereClauses) f.set(E, M);
      const b = Object.keys(d.aliasToCollectionId).find((E) => d.aliasToCollectionId[E] === d.collectionId);
      b && b !== t.alias && (u[t.alias] = b);
      const v = d.pipeline.pipe(ae((E) => {
        const [M, [O, C]] = E, x = hn(O);
        return [M, x];
      }));
      return { alias: t.alias, input: v, collectionId: d.collectionId };
    }
    default:
      throw new ol(t.type);
  }
}
function Af(t) {
  return t instanceof he || t && typeof t == "object" && "type" in t && t.type === "val";
}
function hn(t) {
  return Af(t) ? t.value : t;
}
function fn(t, e, s) {
  if (t.from.type === "queryRef" && e.from.type === "queryRef" && (s.set(t.from.query, e.from.query), fn(t.from.query, e.from.query, s)), t.join && e.join) for (let n = 0; n < t.join.length && n < e.join.length; n++) {
    const r = t.join[n], i = e.join[n];
    r.from.type === "queryRef" && i.from.type === "queryRef" && (s.set(r.from.query, i.from.query), fn(r.from.query, i.from.query, s));
  }
}
function Un(t, e) {
  const s = t.type;
  if (s === "val") return new he(t.value);
  if (s === "ref") {
    const n = t.path;
    if (Array.isArray(n)) {
      if (n[0] === e && n.length > 1) return new ce(n.slice(1));
      if (n.length === 1 && n[0] !== void 0) return new ce([n[0]]);
    }
    return new ce(Array.isArray(n) ? n : [String(n)]);
  } else {
    const n = [];
    for (const r of t.args) {
      const i = Un(r, e);
      n.push(i);
    }
    return new we(t.name, n);
  }
}
function js(t, e) {
  return t.map((n) => {
    const r = Un(n.expression, e);
    return { ...n, expression: r };
  });
}
const Xr = /* @__PURE__ */ Symbol.for("@tanstack/db.collection-config-builder");
class Ff {
  constructor(e, s, n, r) {
    this.alias = e, this.collectionId = s, this.collection = n, this.collectionConfigBuilder = r, this.biggest = void 0, this.subscriptionLoadingPromises = /* @__PURE__ */ new Map(), this.sentToD2Keys = /* @__PURE__ */ new Set();
  }
  subscribe() {
    const e = this.getWhereClauseForAlias();
    if (e) {
      const s = Un(e, this.alias);
      return this.subscribeToChanges(s);
    }
    return this.subscribeToChanges();
  }
  subscribeToChanges(e) {
    const s = this.getOrderByInfo(), n = (a) => {
      a instanceof Promise && this.collectionConfigBuilder.liveQueryCollection._sync.trackLoadPromise(a);
    }, r = (a) => {
      const c = a.subscription;
      if (a.status === "loadingSubset") this.ensureLoadingPromise(c);
      else {
        const l = this.subscriptionLoadingPromises.get(c);
        l && (this.subscriptionLoadingPromises.delete(c), l.resolve());
      }
    };
    let i;
    if (s) i = this.subscribeToOrderedChanges(e, s, r, n);
    else {
      const a = !this.collectionConfigBuilder.isLazyAlias(this.alias);
      i = this.subscribeToMatchingChanges(e, a, r);
    }
    i.status === "loadingSubset" && this.ensureLoadingPromise(i);
    const o = () => {
      const a = this.subscriptionLoadingPromises.get(i);
      a && (this.subscriptionLoadingPromises.delete(i), a.resolve()), i.unsubscribe();
    };
    return this.collectionConfigBuilder.currentSyncState.unsubscribeCallbacks.add(o), i;
  }
  sendChangesToPipeline(e, s) {
    const n = Array.isArray(e) ? e : [...e], r = [];
    for (const c of n) {
      if (c.type === "insert") {
        if (this.sentToD2Keys.has(c.key)) continue;
        this.sentToD2Keys.add(c.key);
      } else c.type === "delete" && this.sentToD2Keys.delete(c.key);
      r.push(c);
    }
    const i = this.collectionConfigBuilder.currentSyncState.inputs[this.alias], a = Df(i, r, this.collection.config.getKey) > 0 ? s : void 0;
    this.collectionConfigBuilder.scheduleGraphRun(a, { alias: this.alias });
  }
  subscribeToMatchingChanges(e, s, n) {
    const r = (y) => {
      this.sendChangesToPipeline(y);
    }, { orderBy: i, limit: o, offset: a } = this.collectionConfigBuilder.query, c = o !== void 0 && a !== void 0 ? o + a : o, l = i ? js(i, this.alias) : void 0, h = (l == null ? void 0 : l.every((y) => {
      const g = y.expression;
      if (g.type !== "ref") return false;
      const w = g.path;
      return Array.isArray(w) && w.length === 1;
    })) ?? false, u = h ? l : void 0, f = h ? c : void 0, p = s ? (y) => {
      y instanceof Promise && this.collectionConfigBuilder.liveQueryCollection._sync.trackLoadPromise(y);
    } : void 0;
    return this.collection.subscribeChanges(r, { ...s && { includeInitialState: s }, whereExpression: e, onStatusChange: n, orderBy: u, limit: f, onLoadSubsetResult: p });
  }
  subscribeToOrderedChanges(e, s, n, r) {
    const { orderBy: i, offset: o, limit: a, index: c } = s, l = (y) => {
      y instanceof Promise && (this.pendingOrderedLoadPromise = y, y.finally(() => {
        this.pendingOrderedLoadPromise === y && (this.pendingOrderedLoadPromise = void 0);
      })), r(y);
    };
    this.orderedLoadSubsetResult = l;
    const h = {}, u = (y) => {
      const g = Array.isArray(y) ? y : [...y];
      this.trackSentValues(g, s.comparator);
      const w = Bf(g);
      this.sendChangesToPipelineWithTracking(w, h.current);
    }, f = this.collection.subscribeChanges(u, { whereExpression: e, onStatusChange: n });
    h.current = f;
    const p = this.collection.on("truncate", () => {
      this.biggest = void 0, this.lastLoadRequestKey = void 0, this.pendingOrderedLoadPromise = void 0, this.sentToD2Keys.clear();
    });
    f.on("unsubscribed", () => {
      p();
    });
    const d = js(i, this.alias);
    return c ? (f.setOrderByIndex(c), f.requestLimitedSnapshot({ limit: o + a, orderBy: d, trackLoadSubsetPromise: false, onLoadSubsetResult: l })) : f.requestSnapshot({ orderBy: d, limit: o + a, trackLoadSubsetPromise: false, onLoadSubsetResult: l }), f;
  }
  loadMoreIfNeeded(e) {
    const s = this.getOrderByInfo();
    if (!s) return true;
    const { dataNeeded: n } = s;
    if (!n || this.pendingOrderedLoadPromise) return true;
    const r = n();
    return r > 0 && this.loadNextItems(r, e), true;
  }
  sendChangesToPipelineWithTracking(e, s) {
    if (!this.getOrderByInfo()) {
      this.sendChangesToPipeline(e);
      return;
    }
    const r = s;
    r[Xr] ?? (r[Xr] = this.loadMoreIfNeeded.bind(this, s)), this.sendChangesToPipeline(e, r[Xr]);
  }
  loadNextItems(e, s) {
    const n = this.getOrderByInfo();
    if (!n) return;
    const { orderBy: r, valueExtractorForRawRow: i, offset: o } = n, a = this.biggest, c = a ? i(a) : void 0;
    let l;
    c !== void 0 && (l = Array.isArray(c) ? c : [c]);
    const h = this.getLoadRequestKey({ minValues: l, offset: o, limit: e });
    if (this.lastLoadRequestKey === h) return;
    const u = js(r, this.alias);
    s.requestLimitedSnapshot({ orderBy: u, limit: e, minValues: l, trackLoadSubsetPromise: false, onLoadSubsetResult: this.orderedLoadSubsetResult }), this.lastLoadRequestKey = h;
  }
  getWhereClauseForAlias() {
    const e = this.collectionConfigBuilder.sourceWhereClausesCache;
    if (e) return e.get(this.alias);
  }
  getOrderByInfo() {
    const e = this.collectionConfigBuilder.optimizableOrderByCollections[this.collectionId];
    if (e && e.alias === this.alias) return e;
  }
  trackSentValues(e, s) {
    for (const n of e) {
      if (n.type === "delete") continue;
      const r = !this.sentToD2Keys.has(n.key);
      this.biggest ? s(this.biggest, n.value) < 0 ? (this.biggest = n.value, this.lastLoadRequestKey = void 0) : r && (this.lastLoadRequestKey = void 0) : (this.biggest = n.value, this.lastLoadRequestKey = void 0);
    }
  }
  ensureLoadingPromise(e) {
    if (this.subscriptionLoadingPromises.has(e)) return;
    let s;
    const n = new Promise((r) => {
      s = r;
    });
    this.subscriptionLoadingPromises.set(e, { resolve: s }), this.collectionConfigBuilder.liveQueryCollection._sync.trackLoadPromise(n);
  }
  getLoadRequestKey(e) {
    return Ln({ minValues: e.minValues ?? null, offset: e.offset, limit: e.limit });
  }
}
function Df(t, e, s) {
  const n = [];
  for (const r of e) {
    const i = s(r.value);
    r.type === "insert" ? n.push([[i, r.value], 1]) : r.type === "update" ? (n.push([[i, r.previousValue], -1]), n.push([[i, r.value], 1])) : n.push([[i, r.value], -1]);
  }
  return n.length !== 0 && t.sendData(new H(n)), n.length;
}
function* Bf(t) {
  for (const e of t) e.type === "update" ? (yield { type: "delete", key: e.key, value: e.previousValue }, yield { type: "insert", key: e.key, value: e.value }) : yield e;
}
const Hi = /* @__PURE__ */ new WeakMap();
function Kf(t) {
  var _a5, _b2, _c3;
  return (_c3 = (_b2 = (_a5 = t.utils) == null ? void 0 : _a5[Dn]) == null ? void 0 : _b2.getBuilder) == null ? void 0 : _c3.call(_b2);
}
function jf(t, e) {
  Hi.set(t, e);
}
function zf(t) {
  return Hi.get(t);
}
let $f = 0;
class Nf {
  constructor(e) {
    this.config = e, this.compiledAliasToCollectionId = {}, this.resultKeys = /* @__PURE__ */ new WeakMap(), this.orderByIndices = /* @__PURE__ */ new WeakMap(), this.isGraphRunning = false, this.runCount = 0, this.isInErrorState = false, this.aliasDependencies = {}, this.builderDependencies = /* @__PURE__ */ new Set(), this.pendingGraphRuns = /* @__PURE__ */ new Map(), this.subscriptions = {}, this.lazySourcesCallbacks = {}, this.lazySources = /* @__PURE__ */ new Set(), this.optimizableOrderByCollections = {}, this.id = e.id || `live-query-${++$f}`, this.query = Uf(e), this.collections = qf(this.query);
    const s = Wf(this.query);
    this.collectionByAlias = {};
    for (const [n, r] of s.entries()) {
      const i = this.collections[n];
      if (i) for (const o of r) this.collectionByAlias[o] = i;
    }
    this.query.orderBy && this.query.orderBy.length > 0 && (this.compare = Vf(this.orderByIndices)), this.compareOptions = this.config.defaultStringCollation ?? Gi(this.query).compareOptions, this.compileBasePipeline();
  }
  hasJoins(e) {
    return !!(e.join && e.join.length > 0 || e.from.type === "queryRef" && this.hasJoins(e.from.query));
  }
  getConfig() {
    return { id: this.id, getKey: this.config.getKey || ((e) => this.resultKeys.get(e)), sync: this.getSyncConfig(), compare: this.compare, defaultStringCollation: this.compareOptions, gcTime: this.config.gcTime || 5e3, schema: this.config.schema, onInsert: this.config.onInsert, onUpdate: this.config.onUpdate, onDelete: this.config.onDelete, startSync: this.config.startSync, singleResult: this.query.singleResult, utils: { getRunCount: this.getRunCount.bind(this), setWindow: this.setWindow.bind(this), getWindow: this.getWindow.bind(this), [Dn]: { getBuilder: () => this, hasCustomGetKey: !!this.config.getKey, hasJoins: this.hasJoins(this.query), hasDistinct: !!this.query.distinct } } };
  }
  setWindow(e) {
    var _a5, _b2;
    if (!this.windowFn) throw new Cl();
    return this.currentWindow = e, this.windowFn(e), (_a5 = this.maybeRunGraphFn) == null ? void 0 : _a5.call(this), ((_b2 = this.liveQueryCollection) == null ? void 0 : _b2.isLoadingSubset) ? new Promise((s) => {
      const n = this.liveQueryCollection.on("loadingSubset:change", (r) => {
        r.isLoadingSubset || (n(), s());
      });
    }) : true;
  }
  getWindow() {
    if (!(!this.windowFn || !this.currentWindow)) return { offset: this.currentWindow.offset ?? 0, limit: this.currentWindow.limit ?? 0 };
  }
  getCollectionIdForAlias(e) {
    const s = this.compiledAliasToCollectionId[e];
    if (s) return s;
    const n = this.collectionByAlias[e];
    if (n) return n.id;
    throw new Error(`Unknown source alias "${e}"`);
  }
  isLazyAlias(e) {
    return this.lazySources.has(e);
  }
  maybeRunGraph(e) {
    var _a5;
    if (!this.isGraphRunning) {
      if (!this.currentSyncConfig || !this.currentSyncState) throw new Error("maybeRunGraph called without active sync session. This should not happen.");
      this.isGraphRunning = true;
      try {
        const { begin: s, commit: n } = this.currentSyncConfig, r = this.currentSyncState;
        if (this.isInErrorState) return;
        if (r.subscribedToAllCollections) {
          for (; r.graph.pendingWork(); ) r.graph.run(), (_a5 = r.flushPendingChanges) == null ? void 0 : _a5.call(r), e == null ? void 0 : e();
          r.messagesCount === 0 && (s(), n()), this.updateLiveQueryStatus(this.currentSyncConfig);
        }
      } finally {
        this.isGraphRunning = false;
      }
    }
  }
  scheduleGraphRun(e, s) {
    var _a5;
    const n = (s == null ? void 0 : s.contextId) ?? ((_a5 = Qt()) == null ? void 0 : _a5.id), r = (s == null ? void 0 : s.jobId) ?? this, i = (() => {
      if (s == null ? void 0 : s.dependencies) return s.dependencies;
      const c = new Set(this.builderDependencies);
      if (s == null ? void 0 : s.alias) {
        const l = this.aliasDependencies[s.alias];
        if (l) for (const h of l) c.add(h);
      }
      return c.delete(this), Array.from(c);
    })();
    if (n) for (const c of i) typeof c.scheduleGraphRun == "function" && c.scheduleGraphRun(void 0, { contextId: n });
    if (!this.currentSyncConfig || !this.currentSyncState) throw new Error("scheduleGraphRun called without active sync session. This should not happen.");
    let o = n ? this.pendingGraphRuns.get(n) : void 0;
    o || (o = { loadCallbacks: /* @__PURE__ */ new Set() }, n && this.pendingGraphRuns.set(n, o)), e && o.loadCallbacks.add(e);
    const a = n ? void 0 : o;
    cs.schedule({ contextId: n, jobId: r, dependencies: i, run: () => this.executeGraphRun(n, a) });
  }
  clearPendingGraphRun(e) {
    this.pendingGraphRuns.delete(e);
  }
  hasPendingGraphRun(e) {
    return this.pendingGraphRuns.has(e);
  }
  executeGraphRun(e, s) {
    const n = s ?? (e ? this.pendingGraphRuns.get(e) : void 0);
    if (e && this.pendingGraphRuns.delete(e), !n || !this.currentSyncConfig || !this.currentSyncState) return;
    this.incrementRunCount();
    const r = () => {
      let i = true, o;
      if (n.loadCallbacks.forEach((a) => {
        try {
          i = a() && i;
        } catch (c) {
          i = false, o ?? (o = c);
        }
      }), o) throw o;
      return i;
    };
    this.maybeRunGraph(r);
  }
  getSyncConfig() {
    return { rowUpdateMode: "full", sync: this.syncFn.bind(this) };
  }
  incrementRunCount() {
    this.runCount++;
  }
  getRunCount() {
    return this.runCount;
  }
  syncFn(e) {
    this.liveQueryCollection = e.collection, this.currentSyncConfig = e;
    const s = { messagesCount: 0, subscribedToAllCollections: false, unsubscribeCallbacks: /* @__PURE__ */ new Set() }, n = this.extendPipelineWithChangeProcessing(e, s);
    this.currentSyncState = n, this.unsubscribeFromSchedulerClears = cs.onClear((o) => {
      this.clearPendingGraphRun(o);
    });
    const r = e.collection.on("loadingSubset:change", (o) => {
      o.isLoadingSubset || this.updateLiveQueryStatus(e);
    });
    s.unsubscribeCallbacks.add(r);
    const i = this.subscribeToAllCollections(e, n);
    return this.maybeRunGraphFn = () => this.scheduleGraphRun(i), this.scheduleGraphRun(i), () => {
      var _a5;
      s.unsubscribeCallbacks.forEach((o) => o()), this.currentSyncConfig = void 0, this.currentSyncState = void 0, this.pendingGraphRuns.clear(), this.graphCache = void 0, this.inputsCache = void 0, this.pipelineCache = void 0, this.sourceWhereClausesCache = void 0, this.lazySources.clear(), this.optimizableOrderByCollections = {}, this.lazySourcesCallbacks = {}, Object.keys(this.subscriptions).forEach((o) => delete this.subscriptions[o]), this.compiledAliasToCollectionId = {}, (_a5 = this.unsubscribeFromSchedulerClears) == null ? void 0 : _a5.call(this), this.unsubscribeFromSchedulerClears = void 0;
    };
  }
  compileBasePipeline() {
    this.graphCache = new bu(), this.inputsCache = Object.fromEntries(Object.keys(this.collectionByAlias).map((n) => [n, this.graphCache.newInput()]));
    const e = Nn(this.query, this.inputsCache, this.collections, this.subscriptions, this.lazySourcesCallbacks, this.lazySources, this.optimizableOrderByCollections, (n) => {
      this.windowFn = n;
    });
    this.pipelineCache = e.pipeline, this.sourceWhereClausesCache = e.sourceWhereClauses, this.compiledAliasToCollectionId = e.aliasToCollectionId;
    const s = Object.keys(this.compiledAliasToCollectionId).filter((n) => !Object.hasOwn(this.inputsCache, n));
    if (s.length > 0) throw new Pl(s);
  }
  maybeCompileBasePipeline() {
    return (!this.graphCache || !this.inputsCache || !this.pipelineCache) && this.compileBasePipeline(), { graph: this.graphCache, inputs: this.inputsCache, pipeline: this.pipelineCache };
  }
  extendPipelineWithChangeProcessing(e, s) {
    const { begin: n, commit: r } = e, { graph: i, inputs: o, pipeline: a } = this.maybeCompileBasePipeline();
    let c = /* @__PURE__ */ new Map();
    return a.pipe(Du((l) => {
      const h = l.getInner();
      s.messagesCount += h.length, h.reduce(Hf, c);
    })), s.flushPendingChanges = () => {
      c.size !== 0 && (n(), c.forEach(this.applyChanges.bind(this, e)), r(), c = /* @__PURE__ */ new Map());
    }, i.finalize(), s.graph = i, s.inputs = o, s.pipeline = a, s;
  }
  applyChanges(e, s, n) {
    const { write: r, collection: i } = e, { deletes: o, inserts: a, value: c, orderByIndex: l } = s;
    if (this.resultKeys.set(c, n), l !== void 0 && this.orderByIndices.set(c, l), a && o === 0) r({ value: c, type: "insert" });
    else if (a > o || a === o && i.has(i.getKeyFromItem(c))) r({ value: c, type: "update" });
    else if (o > 0) r({ value: c, type: "delete" });
    else throw new Error(`Could not apply changes: ${JSON.stringify(s)}. This should never happen.`);
  }
  handleSourceStatusChange(e, s, n) {
    const { status: r } = n;
    if (r === "error") {
      this.transitionToError(`Source collection '${s}' entered error state`);
      return;
    }
    if (r === "cleaned-up") {
      this.transitionToError(`Source collection '${s}' was manually cleaned up while live query '${this.id}' depends on it. Live queries prevent automatic GC, so this was likely a manual cleanup() call.`);
      return;
    }
    this.updateLiveQueryStatus(e);
  }
  updateLiveQueryStatus(e) {
    var _a5, _b2;
    const { markReady: s } = e;
    if (this.isInErrorState) return;
    const n = (_a5 = this.currentSyncState) == null ? void 0 : _a5.subscribedToAllCollections, r = this.allCollectionsReady(), i = (_b2 = this.liveQueryCollection) == null ? void 0 : _b2.isLoadingSubset;
    n && r && !i && s();
  }
  transitionToError(e) {
    var _a5;
    this.isInErrorState = true, console.error(`[Live Query Error] ${e}`), (_a5 = this.liveQueryCollection) == null ? void 0 : _a5._lifecycle.setStatus("error");
  }
  allCollectionsReady() {
    return Object.values(this.collections).every((e) => e.isReady());
  }
  subscribeToAllCollections(e, s) {
    const n = Object.entries(this.compiledAliasToCollectionId);
    if (n.length === 0) throw new Error(`Compiler returned no alias metadata for query '${this.id}'. This should not happen; please report.`);
    const r = n.map(([o, a]) => {
      const c = this.collectionByAlias[o] ?? this.collections[a], l = zf(c);
      l && l !== this ? (this.aliasDependencies[o] = [l], this.builderDependencies.add(l)) : this.aliasDependencies[o] = [];
      const h = new Ff(o, a, c, this), u = c.on("status:change", (d) => {
        this.handleSourceStatusChange(e, a, d);
      });
      s.unsubscribeCallbacks.add(u);
      const f = h.subscribe();
      return this.subscriptions[o] = f, h.loadMoreIfNeeded.bind(h, f);
    }), i = () => (r.map((o) => o()), true);
    return s.subscribedToAllCollections = true, i;
  }
}
function Uf(t) {
  return typeof t.query == "function" ? rf(t.query) : $i(t.query);
}
function Vf(t) {
  return (e, s) => {
    const n = t.get(e), r = t.get(s);
    return n && r ? n < r ? -1 : n > r ? 1 : 0 : 0;
  };
}
function qf(t) {
  const e = {};
  function s(r) {
    r.type === "collectionRef" ? e[r.collection.id] = r.collection : r.type === "queryRef" && n(r.query);
  }
  function n(r) {
    if (r.from && s(r.from), r.join && Array.isArray(r.join)) for (const i of r.join) i.from && s(i.from);
  }
  return n(t), e;
}
function Gi(t) {
  const e = t.from;
  if (e.type === "collectionRef") return e.collection;
  if (e.type === "queryRef") return Gi(e.query);
  throw new Error(`Failed to extract collection. Invalid FROM clause: ${JSON.stringify(t)}`);
}
function Wf(t) {
  const e = /* @__PURE__ */ new Map();
  function s(r) {
    if (r) if (r.type === "collectionRef") {
      const { id: i } = r.collection, o = e.get(i);
      o ? o.add(r.alias) : e.set(i, /* @__PURE__ */ new Set([r.alias]));
    } else r.type === "queryRef" && n(r.query);
  }
  function n(r) {
    if (r && (s(r.from), r.join)) for (const i of r.join) s(i.from);
  }
  return n(t), e;
}
function Hf(t, [[e, s], n]) {
  const [r, i] = s, o = t.get(e) || { deletes: 0, inserts: 0, value: r, orderByIndex: i };
  return n < 0 ? o.deletes += Math.abs(n) : n > 0 && (o.inserts += n, o.value = r, i !== void 0 && (o.orderByIndex = i)), t.set(e, o), t;
}
function Zr(t) {
  return new Nf(t).getConfig();
}
function zs(t) {
  if (typeof t == "function") {
    const s = Zr({ query: t });
    return ei(s);
  } else {
    const e = t, s = Zr(e);
    return e.utils && (s.utils = { ...s.utils, ...e.utils }), ei(s);
  }
}
function ei(t) {
  const e = ef(t), s = Kf(t);
  return s && jf(e, s), e;
}
const $s = 1;
function ud(t, e = []) {
  var _a5;
  const s = t && typeof t == "object" && typeof t.subscribeChanges == "function" && typeof t.startSyncImmediate == "function" && typeof t.id == "string", n = L.useRef(null), r = L.useRef(null), i = L.useRef(null), o = L.useRef(0), a = L.useRef(null), c = !n.current || s && i.current !== t || !s && (r.current === null || r.current.length !== e.length || r.current.some((d, y) => d !== e[y]));
  if (c) if (s) ((_a5 = t.config) == null ? void 0 : _a5.syncMode) === "on-demand" && console.warn(`[useLiveQuery] Warning: Passing a collection with syncMode "on-demand" directly to useLiveQuery will not load any data. In on-demand mode, data is only loaded when queries with predicates request it.

Instead, use a query builder function:
  const { data } = useLiveQuery((q) => q.from({ c: myCollection }).select(({ c }) => c))

Or switch to syncMode "eager" if you want all data to sync automatically.`), t.startSyncImmediate(), n.current = t, i.current = t;
  else if (typeof t == "function") {
    const d = new W(), y = t(d);
    if (y == null) n.current = null;
    else if (y instanceof jn) y.startSyncImmediate(), n.current = y;
    else if (y instanceof W) n.current = zs({ query: t, startSync: true, gcTime: $s });
    else if (y && typeof y == "object") n.current = zs({ startSync: true, gcTime: $s, ...y });
    else throw new Error(`useLiveQuery callback must return a QueryBuilder, LiveQueryCollectionConfig, Collection, undefined, or null. Got: ${typeof y}`);
    r.current = [...e];
  } else n.current = zs({ startSync: true, gcTime: $s, ...t }), r.current = [...e];
  c && (o.current = 0, a.current = null);
  const l = L.useRef(null);
  (!l.current || c) && (l.current = (d) => {
    if (!n.current) return () => {
    };
    const y = n.current.subscribeChanges(() => {
      o.current += 1, d();
    });
    return n.current.status === "ready" && (o.current += 1, d()), () => {
      y.unsubscribe();
    };
  });
  const h = L.useRef(null);
  (!h.current || c) && (h.current = () => {
    const d = o.current, y = n.current;
    return (!a.current || a.current.version !== d || a.current.collection !== y) && (a.current = { collection: y, version: d }), a.current;
  });
  const u = L.useSyncExternalStore(l.current, h.current), f = L.useRef(null), p = L.useRef(null);
  if (!f.current || f.current.version !== u.version || f.current.collection !== u.collection) {
    if (!u.collection) p.current = { state: void 0, data: void 0, collection: void 0, status: "disabled", isLoading: false, isReady: true, isIdle: false, isError: false, isCleanedUp: false, isEnabled: false };
    else {
      const d = Array.from(u.collection.entries()), g = u.collection.config.singleResult;
      let w = null, b = null;
      p.current = { get state() {
        return w || (w = new Map(d)), w;
      }, get data() {
        return b || (b = d.map(([, R]) => R)), g ? b[0] : b;
      }, collection: u.collection, status: u.collection.status, isLoading: u.collection.status === "loading", isReady: u.collection.status === "ready", isIdle: u.collection.status === "idle", isError: u.collection.status === "error", isCleanedUp: u.collection.status === "cleaned-up", isEnabled: true };
    }
    f.current = u;
  }
  return p.current;
}
const Gf = /* @__PURE__ */ new Set(["_dexieMeta", "_updatedAt", "_createdAt"]);
function Qf(t) {
  if (!t) return t;
  const e = Array.isArray(t) ? [] : {};
  for (const s of Object.keys(t)) Gf.has(s) || (e[s] = t[s]);
  return e;
}
function Jf(t, e = false) {
  const s = Date.now(), n = { ...t };
  return n._updatedAt = s, e || (n._createdAt = s), n;
}
const se = ro.debug("ts/db:dexie");
function hd(t) {
  const e = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), r = t.dbName || "app-db", i = t.tableName || t.storeName || t.id || "collection", o = new io(r);
  o.version(1).stores({ [i]: "&id, _updatedAt, _createdAt" });
  const a = o.table(i), c = async (m, P = t.ackTimeoutMs || 2e3) => {
    const S = [], k = [];
    for (const _ of m) {
      if (s.has(_)) {
        S.push(Promise.resolve());
        continue;
      }
      const A = n.get(_);
      if (A) {
        S.push(A.promise);
        continue;
      }
      let K, F;
      const B = new Promise(($, xe) => {
        K = $, F = xe;
      });
      B.catch(() => {
      }), n.set(_, { promise: B, resolve: K, reject: F });
      const j = setTimeout(() => {
        n.has(_) && (n.delete(_), se("awaitAckedIds:timeout", { id: String(_) }), k.push(_), K());
      }, P);
      B.finally(() => clearTimeout(j)), S.push(B);
    }
    if (await Promise.all(S), k.length > 0) throw new Error(`Timeout waiting for acked ids: ${k.join(", ")}`);
  }, l = async (m, P = t.awaitTimeoutMs || 1e4) => {
    try {
      await c(m, t.ackTimeoutMs || 2e3);
      return;
    } catch {
      try {
        const S = Date.now();
        for (; Date.now() - S < P; ) {
          if (m.every((_) => e.has(_))) return;
          try {
            const _ = a.bulkGet;
            let A;
            if (typeof _ == "function" ? A = await _.call(a, m) : A = await Promise.all(m.map((F) => a.get(F))), Array.isArray(A) && A.every((F) => F != null) && (d(), await new Promise((B) => setTimeout(B, 100)), m.every((B) => e.has(B)))) return;
          } catch {
          }
          await new Promise((_) => setTimeout(_, 50));
        }
      } catch {
      }
      throw new Error(`Timeout waiting for IDs: ${m.join(", ")}`);
    }
  }, h = async (m) => {
    const { call: P, awaitPersistence: S, timeoutMs: k, swallow: _, debugTag: A } = m;
    if (!S) {
      Promise.resolve().then(P).catch((F) => {
        se(`persistence:${A}:error`, { error: String(F) });
      });
      return;
    }
    const K = k ?? 5e3;
    try {
      const F = Promise.resolve().then(P);
      F.catch(() => {
      });
      let B;
      const j = new Promise(($, xe) => {
        B = setTimeout(() => xe(new Error("persistence:timeout")), K);
      });
      j.catch(() => {
      });
      try {
        const $ = await Promise.race([F, j]);
        return clearTimeout(B), $;
      } catch ($) {
        throw clearTimeout(B), $;
      }
    } catch (F) {
      if (_ ?? true) {
        se(`persistence:${A}:error`, { error: String(F) });
        return;
      } else throw F;
    }
  }, u = (m) => {
    if (t.schema) {
      const P = t.schema;
      if (P.parse) try {
        return P.parse(m);
      } catch (S) {
        throw new Error(`Schema validation failed: ${S instanceof Error ? S.message : String(S)}`);
      }
      else if (P.safeParse) {
        const S = P.safeParse(m);
        if (!S.success) throw new Error(`Schema validation failed: ${JSON.stringify(S.error)}`);
        return S.data;
      }
    }
    return m;
  }, f = (m) => {
    var _a5;
    const P = Qf(m);
    let S = P;
    return ((_a5 = t.codec) == null ? void 0 : _a5.parse) && (S = t.codec.parse(P)), u(S);
  }, p = (m, P = false) => {
    var _a5;
    let S = m;
    return ((_a5 = t.codec) == null ? void 0 : _a5.serialize) ? S = t.codec.serialize(m) : S = m, Jf(S, P);
  }, d = () => {
  }, y = (m, P) => {
    if (m === P) return true;
    if (!m || !P || typeof m != "object" || typeof P != "object") return false;
    const S = Object.keys(m), k = Object.keys(P);
    if (S.length !== k.length) return false;
    for (const _ of S) if (m[_] !== P[_]) return false;
    return true;
  }, g = (m) => {
    const { begin: P, write: S, commit: k, markReady: _ } = m;
    let A = /* @__PURE__ */ new Map();
    const K = t.syncBatchSize || 1e3;
    let F = false, B, j = false, $ = null;
    const xe = async () => {
      P();
      let Z = 0;
      for (; ; ) {
        let N;
        if (B) N = await a.where("_updatedAt").above(B).limit(K).toArray();
        else try {
          N = await a.orderBy("_updatedAt").limit(K).toArray();
        } catch {
          N = await a.limit(K).toArray();
        }
        if (N.length === 0) break;
        const U = /* @__PURE__ */ new Map();
        for (const q of N) {
          const Q = f(q), V = t.getKey(Q);
          e.set(V, Date.now()), s.add(V);
          const re = n.get(V);
          if (re) {
            try {
              re.resolve();
            } catch {
            }
            n.delete(V);
          }
          U.set(V, Q);
          const Te = q._updatedAt;
          Te && (!B || Te > B) && (B = Te);
        }
        for (const [, q] of U) S({ type: "insert", value: q }), A.set(t.getKey(q), q);
        if (Z += N.length, N.length < K) break;
      }
      k(), F = true, se("sync:initial-complete", { totalProcessed: Z }), Z > 5e3 && se("sync:large-collection", { totalProcessed: Z });
    }, Me = async () => {
      if (await xe(), X(), !j) try {
        _();
      } finally {
        j = true;
      }
    }, X = () => {
      $ = oo(async () => {
        if (!F) return A;
        const Z = await a.toArray(), N = /* @__PURE__ */ new Map();
        for (const U of Z) {
          let q;
          try {
            q = f(U);
          } catch (re) {
            se("parse:skip", { id: U == null ? void 0 : U.id, error: re });
            continue;
          }
          const Q = t.getKey(q);
          e.set(Q, Date.now()), s.add(Q);
          const V = n.get(Q);
          if (V) {
            try {
              V.resolve();
            } catch {
            }
            n.delete(Q);
          }
          N.set(Q, q);
        }
        return N;
      }).subscribe({ next: (Z) => {
        if (!F) {
          if (!j) try {
            _();
          } finally {
            j = true;
          }
          return;
        }
        P();
        for (const [N, U] of Z) if (A.has(N)) {
          const q = A.get(N), Q = U._updatedAt, V = q._updatedAt;
          let re = false;
          Q && V ? re = Q !== V : re = !y(q, U), re && S({ type: "update", value: U });
        } else S({ type: "insert", value: U });
        for (const [N, U] of A) Z.has(N) || S({ type: "delete", value: U });
        if (A = new Map(Z), k(), !j) try {
          _();
        } finally {
          j = true;
        }
      }, error: (Z) => {
        if (se("sync:live-error", { error: Z }), !j) try {
          _();
        } finally {
          j = true;
        }
      } });
    };
    return Me(), () => {
      $ && $.unsubscribe();
    };
  }, w = async (m) => {
    m.collection.startSyncImmediate();
    const P = m.transaction.mutations, S = P.map((K) => ({ ...p(K.modified, false), id: K.key })), k = o.transaction("rw", a, async () => {
      await a.bulkPut(S);
    });
    k.catch(() => {
    }), await k, await o.table(i).count();
    const _ = P.map((K) => K.key), A = Date.now();
    for (const K of _) e.set(K, A);
    return typeof t.onInsert == "function" && await h({ call: () => t.onInsert(m), awaitPersistence: t.awaitPersistence, timeoutMs: t.persistenceTimeoutMs, swallow: t.swallowPersistenceErrors, debugTag: "onInsert" }), _;
  }, b = async (m) => {
    m.collection.startSyncImmediate();
    const P = m.transaction.mutations, S = o.transaction("rw", a, async () => {
      for (const A of P) {
        const K = A.key;
        if (t.rowUpdateMode === "full") {
          const B = { ...p(A.modified, true), id: K };
          await a.put(B);
        } else {
          const F = p(A.changes, true);
          await a.update(K, F);
        }
      }
    });
    S.catch(() => {
    }), await S;
    const k = P.map((A) => A.key), _ = Date.now();
    for (const A of k) e.set(A, _);
    return typeof t.onUpdate == "function" && await h({ call: () => t.onUpdate(m), awaitPersistence: t.awaitPersistence, timeoutMs: t.persistenceTimeoutMs, swallow: t.swallowPersistenceErrors, debugTag: "onUpdate" }), k;
  }, R = async (m) => {
    m.collection.startSyncImmediate();
    const S = m.transaction.mutations.map((_) => _.key), k = o.transaction("rw", a, async () => {
      await a.bulkDelete(S);
    });
    return k.catch(() => {
    }), await k, S.forEach((_) => e.delete(_)), typeof t.onDelete == "function" && await h({ call: () => t.onDelete(m), awaitPersistence: t.awaitPersistence, timeoutMs: t.persistenceTimeoutMs, swallow: t.swallowPersistenceErrors, debugTag: "onDelete" }), S;
  }, I = { getTable: () => a, awaitIds: l, refresh: d, refetch: async () => {
    await new Promise((m) => setTimeout(m, 20));
  }, insertLocally: async (m) => {
    const P = u(m), S = p(P, false), k = t.getKey(P);
    try {
      await o.transaction("rw", a, async () => {
        await a.put({ ...S, id: k });
      });
    } catch (A) {
      throw se("insertLocally:error", { key: k, error: String(A) }), new Error(`Failed to insert item locally: ${A instanceof Error ? A.message : String(A)}`);
    }
    e.set(k, Date.now()), s.add(k);
    const _ = n.get(k);
    _ && (_.resolve(), n.delete(k)), await new Promise((A) => setTimeout(A, 10));
  }, updateLocally: async (m, P) => {
    const S = p(P, true);
    try {
      let _ = 0;
      if (await o.transaction("rw", a, async () => {
        t.rowUpdateMode === "full" ? (await a.put({ ...S, id: m }), _ = 1) : _ = await a.update(m, S);
      }), t.rowUpdateMode !== "full" && _ === 0) throw new Error(`Item with id "${m}" not found`);
    } catch (_) {
      throw se("updateLocally:error", { id: m, error: String(_) }), new Error(`Failed to update item locally: ${_ instanceof Error ? _.message : String(_)}`);
    }
    e.set(m, Date.now()), s.add(m);
    const k = n.get(m);
    k && (k.resolve(), n.delete(m)), await new Promise((_) => setTimeout(_, 10));
  }, deleteLocally: async (m) => {
    try {
      await o.transaction("rw", a, async () => {
        await a.delete(m);
      });
    } catch (P) {
      throw se("deleteLocally:error", { id: m, error: String(P) }), new Error(`Failed to delete item locally: ${P instanceof Error ? P.message : String(P)}`);
    }
    e.delete(m), s.delete(m), n.delete(m);
  }, bulkInsertLocally: async (m) => {
    var _a5, _b2, _c3;
    if (m.length === 0) return;
    const P = m.map((k) => {
      const _ = p(k, false), A = t.getKey(k);
      return { ..._, id: A };
    });
    try {
      await o.transaction("rw", a, async () => {
        await a.bulkPut(P);
      });
    } catch (k) {
      if (k instanceof Error && k.name === "BulkError") {
        const _ = k;
        se("bulkInsertLocally:partial-failure", { total: m.length, failures: ((_a5 = _.failures) == null ? void 0 : _a5.length) || 0, errors: ((_b2 = _.failures) == null ? void 0 : _b2.map((F) => F.message)) || [] });
        const A = new Set(Object.keys(_.failuresByPos || {}).map(Number)), K = Date.now();
        throw m.forEach((F, B) => {
          if (!A.has(B)) {
            const j = t.getKey(F);
            e.set(j, K), s.add(j);
            const $ = n.get(j);
            $ && ($.resolve(), n.delete(j));
          }
        }), new Error(`Failed to insert ${((_c3 = _.failures) == null ? void 0 : _c3.length) || 0} of ${m.length} items locally`);
      }
      throw se("bulkInsertLocally:error", { error: String(k) }), new Error(`Failed to bulk insert items locally: ${k instanceof Error ? k.message : String(k)}`);
    }
    const S = Date.now();
    for (const k of m) {
      const _ = t.getKey(k);
      e.set(_, S), s.add(_);
      const A = n.get(_);
      A && (A.resolve(), n.delete(_));
    }
  }, bulkUpdateLocally: async (m) => {
    var _a5, _b2;
    if (m.length === 0) return;
    try {
      await o.transaction("rw", a, async () => {
        if (t.rowUpdateMode === "full") {
          const S = m.map((k) => {
            const _ = p(k, true), A = t.getKey(k);
            return { ..._, id: A };
          });
          await a.bulkPut(S);
        } else for (const S of m) {
          const k = t.getKey(S), _ = p(S, true);
          await a.update(k, _);
        }
      });
    } catch (S) {
      if (S instanceof Error && S.name === "BulkError") {
        const k = S;
        throw se("bulkUpdateLocally:partial-failure", { total: m.length, failures: ((_a5 = k.failures) == null ? void 0 : _a5.length) || 0 }), new Error(`Failed to update ${((_b2 = k.failures) == null ? void 0 : _b2.length) || 0} of ${m.length} items locally`);
      }
      throw se("bulkUpdateLocally:error", { error: String(S) }), new Error(`Failed to bulk update items locally: ${S instanceof Error ? S.message : String(S)}`);
    }
    const P = Date.now();
    for (const S of m) {
      const k = t.getKey(S);
      e.set(k, P), s.add(k);
      const _ = n.get(k);
      _ && (_.resolve(), n.delete(k));
    }
  }, bulkDeleteLocally: async (m) => {
    var _a5, _b2;
    if (m.length !== 0) {
      try {
        await o.transaction("rw", a, async () => {
          await a.bulkDelete(m);
        });
      } catch (P) {
        if (P instanceof Error && P.name === "BulkError") {
          const S = P;
          throw se("bulkDeleteLocally:partial-failure", { total: m.length, failures: ((_a5 = S.failures) == null ? void 0 : _a5.length) || 0 }), new Error(`Failed to delete ${((_b2 = S.failures) == null ? void 0 : _b2.length) || 0} of ${m.length} items locally`);
        }
        throw se("bulkDeleteLocally:error", { error: String(P) }), new Error(`Failed to bulk delete items locally: ${P instanceof Error ? P.message : String(P)}`);
      }
      for (const P of m) e.delete(P), s.delete(P), n.delete(P);
    }
  } };
  return { id: t.id, schema: t.schema, getKey: t.getKey, rowUpdateMode: t.rowUpdateMode ?? "partial", sync: { sync: g }, onInsert: w, onUpdate: b, onDelete: R, utils: I };
}
export {
  ad as H,
  Si as L,
  td as N,
  $a as O,
  cd as Q,
  id as R,
  ld as a,
  cr as b,
  sd as c,
  ed as d,
  rd as e,
  ps as f,
  od as g,
  xn as h,
  ud as i,
  Zs as j,
  ef as k,
  nd as l,
  hd as m,
  Zr as n,
  Xo as r,
  ne as u
};
