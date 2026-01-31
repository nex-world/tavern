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
var _e2, _t2, _a2, _e3, _t3, _s2, _b, _e4, _t4, _s3, _c2, _e5, _d, _e6, _t5, _s4, _n2, _r2, _o2, _a3, _fc_instances, i_fn, _e7, _e8, _t6, _s5, _n3, _yc_instances, r_fn, _f2, _e9, _t7, _s6, _g, _e10, _h2, _e11, _t8, _s7, _n4, _r3, _o3, _a4, _i2, _i3, _e12, _H_instances, t_fn, s_fn, _e13, _e14, _e15, _t9, _s8, _wu_instances, n_fn, _e16, _t10, _e17, _e18, _t11, _Ke_instances, s_fn2, _e19, _t12, _s9, _e20, _e21, _e22, _e23, _t13, _s10, _e24, _t14, _e25, _t15, _s11, _n5, _Ti_instances, r_fn2, _e26, _t16, _$u_instances, s_fn3, _e27;
import { r as L, a as Yi, j as A, b as Pt, w as Xi, c as Zi } from "./react-DaZ__F27.js";
import { t as Me, w as un, u as eo, D as to } from "./vendor-BQm4HbnU.js";
import { D as so, l as no } from "./dexie-CAotVj7m.js";
const zs = /* @__PURE__ */ new WeakMap(), ro = /* @__PURE__ */ new WeakMap(), Qt = { current: [] };
let xs = false, wt = 0;
const pt = /* @__PURE__ */ new Set(), Bt = /* @__PURE__ */ new Map();
function Xr(t) {
  for (const e of t) {
    if (Qt.current.includes(e)) continue;
    Qt.current.push(e), e.recompute();
    const s = ro.get(e);
    if (s) for (const n of s) {
      const r = zs.get(n);
      (r == null ? void 0 : r.length) && Xr(r);
    }
  }
}
function io(t) {
  const e = { prevVal: t.prevState, currentVal: t.state };
  for (const s of t.listeners) s(e);
}
function oo(t) {
  const e = { prevVal: t.prevState, currentVal: t.state };
  for (const s of t.listeners) s(e);
}
function Zr(t) {
  if (wt > 0 && !Bt.has(t) && Bt.set(t, t.prevState), pt.add(t), !(wt > 0) && !xs) try {
    for (xs = true; pt.size > 0; ) {
      const e = Array.from(pt);
      pt.clear();
      for (const s of e) {
        const n = Bt.get(s) ?? s.prevState;
        s.prevState = n, io(s);
      }
      for (const s of e) {
        const n = zs.get(s);
        n && (Qt.current.push(s), Xr(n));
      }
      for (const s of e) {
        const n = zs.get(s);
        if (n) for (const r of n) oo(r);
      }
    }
  } finally {
    xs = false, Qt.current = [], Bt.clear();
  }
}
function ao(t) {
  wt++;
  try {
    t();
  } finally {
    if (wt--, wt === 0) {
      const e = pt.values().next().value;
      e && Zr(e);
    }
  }
}
function co(t) {
  return typeof t == "function";
}
class lo {
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
    this.prevState = this.state, (s = this.options) != null && s.updateFn ? this.state = this.options.updateFn(this.prevState)(e) : co(e) ? this.state = e(this.prevState) : this.state = e, (r = (n = this.options) == null ? void 0 : n.onUpdate) == null || r.call(n), Zr(this);
  }
}
const ze = "__TSR_index", Vn = "popstate", Wn = "beforeunload";
function uo(t) {
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
    const u = ((_a5 = t.getBlockers) == null ? void 0 : _a5.call(t)) ?? [], h = c.type === "PUSH" || c.type === "REPLACE";
    if (typeof document < "u" && u.length && h) for (const f of u) {
      const p = Rt(c.path, c.state);
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
    a = qn(l + 1, a), i({ task: () => {
      t.pushState(o, a), n({ type: "PUSH" });
    }, navigateOpts: c, type: "PUSH", path: o, state: a });
  }, replace: (o, a, c) => {
    const l = e.state[ze];
    a = qn(l, a), i({ task: () => {
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
function qn(t, e) {
  e || (e = {});
  const s = hn();
  return { ...e, key: s, __TSR_key: s, [ze]: t };
}
function ei(t) {
  var _a5, _b2;
  const e = (t == null ? void 0 : t.window) ?? (typeof document < "u" ? window : void 0), s = e.history.pushState, n = e.history.replaceState;
  let r = [];
  const i = () => r, o = (x) => r = x, a = (t == null ? void 0 : t.createHref) ?? ((x) => x), c = (t == null ? void 0 : t.parseLocation) ?? (() => Rt(`${e.location.pathname}${e.location.search}${e.location.hash}`, e.history.state));
  if (!((_a5 = e.history.state) == null ? void 0 : _a5.__TSR_key) && !((_b2 = e.history.state) == null ? void 0 : _b2.key)) {
    const x = hn();
    e.history.replaceState({ [ze]: 0, key: x, __TSR_key: x }, "");
  }
  let l = c(), u, h = false, f = false, p = false, d = false;
  const y = () => l;
  let g, m;
  const S = () => {
    g && (O._ignoreSubscribers = true, (g.isPush ? e.history.pushState : e.history.replaceState)(g.state, "", g.href), O._ignoreSubscribers = false, g = void 0, m = void 0, u = void 0);
  }, b = (x, P, I) => {
    const w = a(P);
    m || (u = l), l = Rt(P, I), g = { href: w, state: I, isPush: (g == null ? void 0 : g.isPush) || x === "push" }, m || (m = Promise.resolve().then(() => S()));
  }, v = (x) => {
    l = c(), O.notify({ type: x });
  }, E = async () => {
    if (f) {
      f = false;
      return;
    }
    const x = c(), P = x.state[ze] - l.state[ze], I = P === 1, w = P === -1, R = !I && !w || h;
    h = false;
    const C = R ? "GO" : w ? "BACK" : "FORWARD", _ = R ? { type: "GO", index: P } : { type: w ? "BACK" : "FORWARD" };
    if (p) p = false;
    else {
      const k = i();
      if (typeof document < "u" && k.length) {
        for (const T of k) if (await T.blockerFn({ currentLocation: l, nextLocation: x, action: C })) {
          f = true, e.history.go(1), O.notify(_);
          return;
        }
      }
    }
    l = c(), O.notify(_);
  }, M = (x) => {
    if (d) {
      d = false;
      return;
    }
    let P = false;
    const I = i();
    if (typeof document < "u" && I.length) for (const w of I) {
      const R = w.enableBeforeUnload ?? true;
      if (R === true) {
        P = true;
        break;
      }
      if (typeof R == "function" && R() === true) {
        P = true;
        break;
      }
    }
    if (P) return x.preventDefault(), x.returnValue = "";
  }, O = uo({ getLocation: y, getLength: () => e.history.length, pushState: (x, P) => b("push", x, P), replaceState: (x, P) => b("replace", x, P), back: (x) => (x && (p = true), d = true, e.history.back()), forward: (x) => {
    x && (p = true), d = true, e.history.forward();
  }, go: (x) => {
    h = true, e.history.go(x);
  }, createHref: (x) => a(x), flush: S, destroy: () => {
    e.history.pushState = s, e.history.replaceState = n, e.removeEventListener(Wn, M, { capture: true }), e.removeEventListener(Vn, E);
  }, onBlocked: () => {
    u && l !== u && (l = u);
  }, getBlockers: i, setBlockers: o, notifyOnIndexChange: false });
  return e.addEventListener(Wn, M, { capture: true }), e.addEventListener(Vn, E), e.history.pushState = function(...x) {
    const P = s.apply(e.history, x);
    return O._ignoreSubscribers || v("PUSH"), P;
  }, e.history.replaceState = function(...x) {
    const P = n.apply(e.history, x);
    return O._ignoreSubscribers || v("REPLACE"), P;
  }, O;
}
function Yf(t) {
  const e = typeof document < "u" ? window : void 0;
  return ei({ window: e, parseLocation: () => {
    const s = e.location.hash.split("#").slice(1), n = s[0] ?? "/", r = e.location.search, i = s.slice(1), o = i.length === 0 ? "" : `#${i.join("#")}`, a = `${n}${r}${o}`;
    return Rt(a, e.history.state);
  }, createHref: (s) => `${e.location.pathname}${e.location.search}#${s}` });
}
function ho(t) {
  let e = t.replace(/[\x00-\x1f\x7f]/g, "");
  return e.startsWith("//") && (e = "/" + e.replace(/^\/+/, "")), e;
}
function Rt(t, e) {
  const s = ho(t), n = s.indexOf("#"), r = s.indexOf("?"), i = hn();
  return { href: s, pathname: s.substring(0, n > 0 ? r > 0 ? Math.min(n, r) : n : r > 0 ? r : s.length), hash: n > -1 ? s.substring(n) : "", search: r > -1 ? s.slice(r, n === -1 ? void 0 : n) : "", state: e || { [ze]: 0, key: i, __TSR_key: i } };
}
function hn() {
  return (Math.random() + 1).toString(36).substring(7);
}
const fo = false;
function vt(t) {
  let e;
  return ao(() => {
    e = t();
  }), e;
}
function Ct(t) {
  return t[t.length - 1];
}
function po(t) {
  return typeof t == "function";
}
function De(t, e) {
  return po(t) ? t(e) : t;
}
const yo = Object.prototype.hasOwnProperty, Hn = Object.prototype.propertyIsEnumerable;
function ue(t, e, s = 0) {
  if (t === e) return t;
  if (s > 500) return e;
  const n = e, r = Jn(t) && Jn(n);
  if (!r && !(Jt(t) && Jt(n))) return n;
  const i = r ? t : Gn(t);
  if (!i) return n;
  const o = r ? n : Gn(n);
  if (!o) return n;
  const a = i.length, c = o.length, l = r ? new Array(c) : {};
  let u = 0;
  for (let h = 0; h < c; h++) {
    const f = r ? h : o[h], p = t[f], d = n[f];
    if (p === d) {
      l[f] = p, (r ? h < a : yo.call(t, f)) && u++;
      continue;
    }
    if (p === null || d === null || typeof p != "object" || typeof d != "object") {
      l[f] = d;
      continue;
    }
    const y = ue(p, d, s + 1);
    l[f] = y, y === p && u++;
  }
  return a === c && u === a ? t : l;
}
function Gn(t) {
  const e = Object.getOwnPropertyNames(t);
  for (const r of e) if (!Hn.call(t, r)) return false;
  const s = Object.getOwnPropertySymbols(t);
  if (s.length === 0) return e;
  const n = e;
  for (const r of s) {
    if (!Hn.call(t, r)) return false;
    n.push(r);
  }
  return n;
}
function Jt(t) {
  if (!Qn(t)) return false;
  const e = t.constructor;
  if (typeof e > "u") return true;
  const s = e.prototype;
  return !(!Qn(s) || !s.hasOwnProperty("isPrototypeOf"));
}
function Qn(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Jn(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function qe(t, e, s) {
  if (t === e) return true;
  if (typeof t != typeof e) return false;
  if (Array.isArray(t) && Array.isArray(e)) {
    if (t.length !== e.length) return false;
    for (let n = 0, r = t.length; n < r; n++) if (!qe(t[n], e[n], s)) return false;
    return true;
  }
  if (Jt(t) && Jt(e)) {
    const n = (s == null ? void 0 : s.ignoreUndefined) ?? true;
    if (s == null ? void 0 : s.partial) {
      for (const o in e) if ((!n || e[o] !== void 0) && !qe(t[o], e[o], s)) return false;
      return true;
    }
    let r = 0;
    if (!n) r = Object.keys(t).length;
    else for (const o in t) t[o] !== void 0 && r++;
    let i = 0;
    for (const o in e) if ((!n || e[o] !== void 0) && (i++, i > r || !qe(t[o], e[o], s))) return false;
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
function go(t) {
  return typeof (t == null ? void 0 : t.message) != "string" ? false : t.message.startsWith("Failed to fetch dynamically imported module") || t.message.startsWith("error loading dynamically imported module") || t.message.startsWith("Importing a module script failed");
}
function tt(t) {
  return !!(t && typeof t == "object" && typeof t.then == "function");
}
function mo(t) {
  return t.replace(/[\x00-\x1f\x7f]/g, "");
}
function Yn(t) {
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
  return mo(e);
}
const ti = ["http:", "https:", "mailto:", "tel:"];
function Yt(t) {
  if (!t) return false;
  try {
    const e = new URL(t);
    return !ti.includes(e.protocol);
  } catch {
    return false;
  }
}
const wo = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" }, vo = /[&><\u2028\u2029]/g;
function So(t) {
  return t.replace(vo, (e) => wo[e]);
}
function lt(t, e) {
  if (!t || !/[%\\\x00-\x1f\x7f]/.test(t) && !t.startsWith("//")) return t;
  const s = /%25|%5C/gi;
  let n = 0, r = "", i;
  for (; (i = s.exec(t)) !== null; ) r += Yn(t.slice(n, i.index)) + i[0], n = s.lastIndex;
  return r = r + Yn(n ? t.slice(n) : t), r.startsWith("//") && (r = "/" + r.replace(/^\/+/, "")), r;
}
function bo(t) {
  return /\s|[^\u0000-\u007F]/.test(t) ? t.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : t;
}
function Xt(t) {
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
const it = 0, Ge = 1, Qe = 2, _t = 3, Ve = 4, si = 5;
function xo(t) {
  const e = t.indexOf("{");
  if (e === -1) return null;
  const s = t.indexOf("}", e);
  return s === -1 || e + 1 >= t.length ? null : [e, s];
}
function fn(t, e, s = new Uint16Array(6)) {
  const n = t.indexOf("/", e), r = n === -1 ? t.length : n, i = t.substring(e, r);
  if (!i || !i.includes("$")) return s[0] = it, s[1] = e, s[2] = e, s[3] = r, s[4] = r, s[5] = r, s;
  if (i === "$") {
    const a = t.length;
    return s[0] = Qe, s[1] = e, s[2] = e, s[3] = a, s[4] = a, s[5] = a, s;
  }
  if (i.charCodeAt(0) === 36) return s[0] = Ge, s[1] = e, s[2] = e + 1, s[3] = r, s[4] = r, s[5] = r, s;
  const o = xo(i);
  if (o) {
    const [a, c] = o, l = i.charCodeAt(a + 1);
    if (l === 45) {
      if (a + 2 < i.length && i.charCodeAt(a + 2) === 36) {
        const u = a + 3, h = c;
        if (u < h) return s[0] = _t, s[1] = e + a, s[2] = e + u, s[3] = e + h, s[4] = e + c + 1, s[5] = r, s;
      }
    } else if (l === 36) {
      const u = a + 1, h = a + 2;
      return h === c ? (s[0] = Qe, s[1] = e + a, s[2] = e + u, s[3] = e + h, s[4] = e + c + 1, s[5] = t.length, s) : (s[0] = Ge, s[1] = e + a, s[2] = e + h, s[3] = e + c, s[4] = e + c + 1, s[5] = r, s);
    }
  }
  return s[0] = it, s[1] = e, s[2] = e, s[3] = r, s[4] = r, s[5] = r, s;
}
function us(t, e, s, n, r, i, o) {
  var _a5, _b2, _c3, _d2, _e28, _f3, _g2, _h3, _i4, _j, _k, _l2, _m;
  o == null ? void 0 : o(s);
  let a = n;
  {
    const c = s.fullPath ?? s.from, l = c.length, u = ((_a5 = s.options) == null ? void 0 : _a5.caseSensitive) ?? t, h = !!(((_c3 = (_b2 = s.options) == null ? void 0 : _b2.params) == null ? void 0 : _c3.parse) && ((_e28 = (_d2 = s.options) == null ? void 0 : _d2.skipRouteOnParseError) == null ? void 0 : _e28.params));
    for (; a < l; ) {
      const p = fn(c, a, e);
      let d;
      const y = a, g = p[5];
      switch (a = g + 1, i++, p[0]) {
        case it: {
          const S = c.substring(p[2], p[3]);
          if (u) {
            const b = (_f3 = r.static) == null ? void 0 : _f3.get(S);
            if (b) d = b;
            else {
              r.static ?? (r.static = /* @__PURE__ */ new Map());
              const v = We(s.fullPath ?? s.from);
              v.parent = r, v.depth = i, d = v, r.static.set(S, v);
            }
          } else {
            const b = S.toLowerCase(), v = (_g2 = r.staticInsensitive) == null ? void 0 : _g2.get(b);
            if (v) d = v;
            else {
              r.staticInsensitive ?? (r.staticInsensitive = /* @__PURE__ */ new Map());
              const E = We(s.fullPath ?? s.from);
              E.parent = r, E.depth = i, d = E, r.staticInsensitive.set(b, E);
            }
          }
          break;
        }
        case Ge: {
          const S = c.substring(y, p[1]), b = c.substring(p[4], g), v = u && !!(S || b), E = S ? v ? S : S.toLowerCase() : void 0, M = b ? v ? b : b.toLowerCase() : void 0, O = !h && ((_h3 = r.dynamic) == null ? void 0 : _h3.find((x) => !x.skipOnParamError && x.caseSensitive === v && x.prefix === E && x.suffix === M));
          if (O) d = O;
          else {
            const x = Rs(Ge, s.fullPath ?? s.from, v, E, M);
            d = x, x.depth = i, x.parent = r, r.dynamic ?? (r.dynamic = []), r.dynamic.push(x);
          }
          break;
        }
        case _t: {
          const S = c.substring(y, p[1]), b = c.substring(p[4], g), v = u && !!(S || b), E = S ? v ? S : S.toLowerCase() : void 0, M = b ? v ? b : b.toLowerCase() : void 0, O = !h && ((_i4 = r.optional) == null ? void 0 : _i4.find((x) => !x.skipOnParamError && x.caseSensitive === v && x.prefix === E && x.suffix === M));
          if (O) d = O;
          else {
            const x = Rs(_t, s.fullPath ?? s.from, v, E, M);
            d = x, x.parent = r, x.depth = i, r.optional ?? (r.optional = []), r.optional.push(x);
          }
          break;
        }
        case Qe: {
          const S = c.substring(y, p[1]), b = c.substring(p[4], g), v = u && !!(S || b), E = S ? v ? S : S.toLowerCase() : void 0, M = b ? v ? b : b.toLowerCase() : void 0, O = Rs(Qe, s.fullPath ?? s.from, v, E, M);
          d = O, O.parent = r, O.depth = i, r.wildcard ?? (r.wildcard = []), r.wildcard.push(O);
        }
      }
      r = d;
    }
    if (h && s.children && !s.isRoot && s.id && s.id.charCodeAt(s.id.lastIndexOf("/") + 1) === 95) {
      const p = We(s.fullPath ?? s.from);
      p.kind = si, p.parent = r, i++, p.depth = i, r.pathless ?? (r.pathless = []), r.pathless.push(p), r = p;
    }
    const f = (s.path || !s.children) && !s.isRoot;
    if (f && c.endsWith("/")) {
      const p = We(s.fullPath ?? s.from);
      p.kind = Ve, p.parent = r, i++, p.depth = i, r.index = p, r = p;
    }
    r.parse = ((_k = (_j = s.options) == null ? void 0 : _j.params) == null ? void 0 : _k.parse) ?? null, r.skipOnParamError = h, r.parsingPriority = ((_m = (_l2 = s.options) == null ? void 0 : _l2.skipRouteOnParseError) == null ? void 0 : _m.priority) ?? 0, f && !r.route && (r.route = s, r.fullPath = s.fullPath ?? s.from);
  }
  if (s.children) for (const c of s.children) us(t, e, c, a, r, i, o);
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
function We(t) {
  return { kind: it, depth: 0, pathless: null, index: null, static: null, staticInsensitive: null, dynamic: null, optional: null, wildcard: null, route: null, fullPath: t, parent: null, parse: null, skipOnParamError: false, parsingPriority: 0 };
}
function Rs(t, e, s, n, r) {
  return { kind: t, depth: 0, pathless: null, index: null, static: null, staticInsensitive: null, dynamic: null, optional: null, wildcard: null, route: null, fullPath: e, parent: null, parse: null, skipOnParamError: false, parsingPriority: 0, caseSensitive: s, prefix: n, suffix: r };
}
function Po(t, e) {
  const s = We("/"), n = new Uint16Array(6);
  for (const r of t) us(false, n, r, 1, s, 0);
  Fe(s), e.masksTree = s, e.flatCache = Xt(1e3);
}
function Ro(t, e) {
  t || (t = "/");
  const s = e.flatCache.get(t);
  if (s) return s;
  const n = dn(t, e.masksTree);
  return e.flatCache.set(t, n), n;
}
function Co(t, e, s, n, r) {
  t || (t = "/"), n || (n = "/");
  const i = e ? `case\0${t}` : t;
  let o = r.singleCache.get(i);
  if (!o) {
    o = We("/");
    const a = new Uint16Array(6);
    us(e, a, { from: t }, 1, o, 0), r.singleCache.set(i, o);
  }
  return dn(n, o, s);
}
function _o(t, e, s = false) {
  const n = s ? t : `nofuzz\0${t}`, r = e.matchCache.get(n);
  if (r !== void 0) return r;
  t || (t = "/");
  let i;
  try {
    i = dn(t, e.segmentTree, s);
  } catch (o) {
    if (o instanceof URIError) i = null;
    else throw o;
  }
  return i && (i.branch = Eo(i.route)), e.matchCache.set(n, i), i;
}
function ko(t) {
  return t === "/" ? t : t.replace(/\/{1,}$/, "");
}
function Io(t, e = false, s) {
  const n = We(t.fullPath), r = new Uint16Array(6), i = {}, o = {};
  let a = 0;
  return us(e, r, t, 1, n, 0, (l) => {
    if (s == null ? void 0 : s(l, a), Me(!(l.id in i), `Duplicate routes found with id: ${String(l.id)}`), i[l.id] = l, a !== 0 && l.path) {
      const u = ko(l.fullPath);
      (!o[u] || l.fullPath.endsWith("/")) && (o[u] = l);
    }
    a++;
  }), Fe(n), { processedTree: { segmentTree: n, singleCache: Xt(1e3), matchCache: Xt(1e3), flatCache: null, masksTree: null }, routesById: i, routesByPath: o };
}
function dn(t, e, s = false) {
  const n = t.split("/"), r = Mo(t, n, e, s);
  if (!r) return null;
  const [i] = ni(t, n, r);
  return { route: r.node.route, rawParams: i, parsedParams: r.parsedParams };
}
function ni(t, e, s) {
  var _a5, _b2, _c3, _d2, _e28, _f3, _g2, _h3, _i4, _j;
  const n = Oo(s.node);
  let r = null;
  const i = {};
  let o = ((_a5 = s.extract) == null ? void 0 : _a5.part) ?? 0, a = ((_b2 = s.extract) == null ? void 0 : _b2.node) ?? 0, c = ((_c3 = s.extract) == null ? void 0 : _c3.path) ?? 0, l = ((_d2 = s.extract) == null ? void 0 : _d2.segment) ?? 0;
  for (; a < n.length; o++, a++, c++, l++) {
    const u = n[a];
    if (u.kind === Ve) break;
    if (u.kind === si) {
      l--, o--, c--;
      continue;
    }
    const h = e[o], f = c;
    if (h && (c += h.length), u.kind === Ge) {
      r ?? (r = s.node.fullPath.split("/"));
      const p = r[l], d = ((_e28 = u.prefix) == null ? void 0 : _e28.length) ?? 0;
      if (p.charCodeAt(d) === 123) {
        const g = ((_f3 = u.suffix) == null ? void 0 : _f3.length) ?? 0, m = p.substring(d + 2, p.length - g - 1), S = h.substring(d, h.length - g);
        i[m] = decodeURIComponent(S);
      } else {
        const g = p.substring(1);
        i[g] = decodeURIComponent(h);
      }
    } else if (u.kind === _t) {
      if (s.skipped & 1 << a) {
        o--, c = f - 1;
        continue;
      }
      r ?? (r = s.node.fullPath.split("/"));
      const p = r[l], d = ((_g2 = u.prefix) == null ? void 0 : _g2.length) ?? 0, y = ((_h3 = u.suffix) == null ? void 0 : _h3.length) ?? 0, g = p.substring(d + 3, p.length - y - 1), m = u.suffix || u.prefix ? h.substring(d, h.length - y) : h;
      m && (i[g] = decodeURIComponent(m));
    } else if (u.kind === Qe) {
      const p = u, d = t.substring(f + (((_i4 = p.prefix) == null ? void 0 : _i4.length) ?? 0), t.length - (((_j = p.suffix) == null ? void 0 : _j.length) ?? 0)), y = decodeURIComponent(d);
      i["*"] = y, i._splat = y;
      break;
    }
  }
  return s.rawParams && Object.assign(i, s.rawParams), [i, { part: o, node: a, path: c, segment: l }];
}
function Eo(t) {
  const e = [t];
  for (; t.parentRoute; ) t = t.parentRoute, e.push(t);
  return e.reverse(), e;
}
function Oo(t) {
  const e = Array(t.depth + 1);
  do
    e[t.depth] = t, t = t.parent;
  while (t);
  return e;
}
function Mo(t, e, s, n) {
  if (t === "/" && s.index) return { node: s.index, skipped: 0 };
  const r = !Ct(e), i = r && t !== "/", o = e.length - (r ? 1 : 0), a = [{ node: s, index: 1, skipped: 0, depth: 1, statics: 1, dynamics: 0, optionals: 0 }];
  let c = null, l = null, u = null;
  for (; a.length; ) {
    const h = a.pop(), { node: f, index: p, skipped: d, depth: y, statics: g, dynamics: m, optionals: S } = h;
    let { extract: b, rawParams: v, parsedParams: E } = h;
    if (f.skipOnParamError) {
      if (!Cs(t, e, h)) continue;
      v = h.rawParams, b = h.extract, E = h.parsedParams;
    }
    n && f.route && f.kind !== Ve && ut(l, h) && (l = h);
    const M = p === o;
    if (M && (f.route && !i && ut(u, h) && (u = h), !f.optional && !f.wildcard && !f.index && !f.pathless)) continue;
    const O = M ? void 0 : e[p];
    let x;
    if (M && f.index) {
      const P = { node: f.index, index: p, skipped: d, depth: y + 1, statics: g, dynamics: m, optionals: S, extract: b, rawParams: v, parsedParams: E };
      let I = true;
      if (f.index.skipOnParamError && (Cs(t, e, P) || (I = false)), I) {
        if (g === o && !m && !S && !d) return P;
        ut(u, P) && (u = P);
      }
    }
    if (f.wildcard && ut(c, h)) for (const P of f.wildcard) {
      const { prefix: I, suffix: w } = P;
      if (I && (M || !(P.caseSensitive ? O : x ?? (x = O.toLowerCase())).startsWith(I))) continue;
      if (w) {
        if (M) continue;
        const C = e.slice(p).join("/").slice(-w.length);
        if ((P.caseSensitive ? C : C.toLowerCase()) !== w) continue;
      }
      const R = { node: P, index: o, skipped: d, depth: y, statics: g, dynamics: m, optionals: S, extract: b, rawParams: v, parsedParams: E };
      if (!(P.skipOnParamError && !Cs(t, e, R))) {
        c = R;
        break;
      }
    }
    if (f.optional) {
      const P = d | 1 << y, I = y + 1;
      for (let w = f.optional.length - 1; w >= 0; w--) {
        const R = f.optional[w];
        a.push({ node: R, index: p, skipped: P, depth: I, statics: g, dynamics: m, optionals: S, extract: b, rawParams: v, parsedParams: E });
      }
      if (!M) for (let w = f.optional.length - 1; w >= 0; w--) {
        const R = f.optional[w], { prefix: C, suffix: _ } = R;
        if (C || _) {
          const k = R.caseSensitive ? O : x ?? (x = O.toLowerCase());
          if (C && !k.startsWith(C) || _ && !k.endsWith(_)) continue;
        }
        a.push({ node: R, index: p + 1, skipped: d, depth: I, statics: g, dynamics: m, optionals: S + 1, extract: b, rawParams: v, parsedParams: E });
      }
    }
    if (!M && f.dynamic && O) for (let P = f.dynamic.length - 1; P >= 0; P--) {
      const I = f.dynamic[P], { prefix: w, suffix: R } = I;
      if (w || R) {
        const C = I.caseSensitive ? O : x ?? (x = O.toLowerCase());
        if (w && !C.startsWith(w) || R && !C.endsWith(R)) continue;
      }
      a.push({ node: I, index: p + 1, skipped: d, depth: y + 1, statics: g, dynamics: m + 1, optionals: S, extract: b, rawParams: v, parsedParams: E });
    }
    if (!M && f.staticInsensitive) {
      const P = f.staticInsensitive.get(x ?? (x = O.toLowerCase()));
      P && a.push({ node: P, index: p + 1, skipped: d, depth: y + 1, statics: g + 1, dynamics: m, optionals: S, extract: b, rawParams: v, parsedParams: E });
    }
    if (!M && f.static) {
      const P = f.static.get(O);
      P && a.push({ node: P, index: p + 1, skipped: d, depth: y + 1, statics: g + 1, dynamics: m, optionals: S, extract: b, rawParams: v, parsedParams: E });
    }
    if (f.pathless) {
      const P = y + 1;
      for (let I = f.pathless.length - 1; I >= 0; I--) {
        const w = f.pathless[I];
        a.push({ node: w, index: p, skipped: d, depth: P, statics: g, dynamics: m, optionals: S, extract: b, rawParams: v, parsedParams: E });
      }
    }
  }
  if (u && c) return ut(c, u) ? u : c;
  if (u) return u;
  if (c) return c;
  if (n && l) {
    let h = l.index;
    for (let p = 0; p < l.index; p++) h += e[p].length;
    const f = h === t.length ? "/" : t.slice(h);
    return l.rawParams ?? (l.rawParams = {}), l.rawParams["**"] = decodeURIComponent(f), l;
  }
  return null;
}
function Cs(t, e, s) {
  try {
    const [n, r] = ni(t, e, s);
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
function Ut(t) {
  return pn(t.filter((e) => e !== void 0).join("/"));
}
function pn(t) {
  return t.replace(/\/{2,}/g, "/");
}
function ri(t) {
  return t === "/" ? t : t.replace(/^\/{1,}/, "");
}
function Oe(t) {
  const e = t.length;
  return e > 1 && t[e - 1] === "/" ? t.replace(/\/{1,}$/, "") : t;
}
function ii(t) {
  return Oe(ri(t));
}
function Zt(t, e) {
  return (t == null ? void 0 : t.endsWith("/")) && t !== "/" && t !== `${e}/` ? t.slice(0, -1) : t;
}
function To(t, e, s) {
  return Zt(t, s) === Zt(e, s);
}
function Ao({ base: t, to: e, trailingSlash: s = "never", cache: n }) {
  const r = e.startsWith("/"), i = !r && e === ".";
  let o;
  if (n) {
    o = r ? e : i ? t : t + "\0" + e;
    const h = n.get(o);
    if (h) return h;
  }
  let a;
  if (i) a = t.split("/");
  else if (r) a = e.split("/");
  else {
    for (a = t.split("/"); a.length > 1 && Ct(a) === ""; ) a.pop();
    const h = e.split("/");
    for (let f = 0, p = h.length; f < p; f++) {
      const d = h[f];
      d === "" ? f ? f === p - 1 && a.push(d) : a = [d] : d === ".." ? a.pop() : d === "." || a.push(d);
    }
  }
  a.length > 1 && (Ct(a) === "" ? s === "never" && a.pop() : s === "always" && a.push(""));
  let c, l = "";
  for (let h = 0; h < a.length; h++) {
    h > 0 && (l += "/");
    const f = a[h];
    if (!f) continue;
    c = fn(f, 0, c);
    const p = c[0];
    if (p === it) {
      l += f;
      continue;
    }
    const d = c[5], y = f.substring(0, c[1]), g = f.substring(c[4], d), m = f.substring(c[2], c[3]);
    p === Ge ? l += y || g ? `${y}{$${m}}${g}` : `$${m}` : p === Qe ? l += y || g ? `${y}{$}${g}` : "$" : l += `${y}{-$${m}}${g}`;
  }
  l = pn(l);
  const u = l || "/";
  return o && n && n.set(o, u), u;
}
function Lo(t) {
  const e = new Map(t.map((r) => [encodeURIComponent(r), r])), s = Array.from(e.keys()).map((r) => r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), n = new RegExp(s, "g");
  return (r) => r.replace(n, (i) => e.get(i) ?? i);
}
function _s(t, e, s) {
  const n = e[t];
  return typeof n != "string" ? n : t === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(n) ? n : n.split("/").map((r) => Xn(r, s)).join("/") : Xn(n, s);
}
function ks({ path: t, params: e, decoder: s, server: n }) {
  let r = false;
  const i = {};
  if (!t || t === "/") return { interpolatedPath: "/", usedParams: i, isMissingParams: r };
  if (!t.includes("$")) return { interpolatedPath: t, usedParams: i, isMissingParams: r };
  const o = t.length;
  let a = 0, c, l = "";
  for (; a < o; ) {
    const h = a;
    c = fn(t, h, c);
    const f = c[5];
    if (a = f + 1, h === f) continue;
    const p = c[0];
    if (p === it) {
      l += "/" + t.substring(h, f);
      continue;
    }
    if (p === Qe) {
      const d = e._splat;
      i._splat = d, i["*"] = d;
      const y = t.substring(h, c[1]), g = t.substring(c[4], f);
      if (!d) {
        r = true, (y || g) && (l += "/" + y + g);
        continue;
      }
      const m = _s("_splat", e, s);
      l += "/" + y + m + g;
      continue;
    }
    if (p === Ge) {
      const d = t.substring(c[2], c[3]);
      !r && !(d in e) && (r = true), i[d] = e[d];
      const y = t.substring(h, c[1]), g = t.substring(c[4], f), m = _s(d, e, s) ?? "undefined";
      l += "/" + y + m + g;
      continue;
    }
    if (p === _t) {
      const d = t.substring(c[2], c[3]), y = e[d];
      if (y == null) continue;
      i[d] = y;
      const g = t.substring(h, c[1]), m = t.substring(c[4], f), S = _s(d, e, s) ?? "";
      l += "/" + g + S + m;
      continue;
    }
  }
  return t.endsWith("/") && (l += "/"), { usedParams: i, interpolatedPath: l || "/", isMissingParams: r };
}
function Xn(t, e) {
  const s = encodeURIComponent(t);
  return (e == null ? void 0 : e(s)) ?? s;
}
function de(t) {
  return !!(t == null ? void 0 : t.isNotFound);
}
function Fo() {
  try {
    if (typeof window < "u" && typeof window.sessionStorage == "object") return window.sessionStorage;
  } catch {
  }
}
const $s = "tsr-scroll-restoration-v1_3", Do = (t, e) => {
  let s;
  return (...n) => {
    s || (s = setTimeout(() => {
      t(...n), s = null;
    }, e));
  };
};
function Bo() {
  const t = Fo();
  if (!t) return null;
  const e = t.getItem($s);
  let s = e ? JSON.parse(e) : {};
  return { state: s, set: (n) => {
    s = De(n, s) || s;
    try {
      t.setItem($s, JSON.stringify(s));
    } catch {
      console.warn("[ts-router] Could not persist scroll restoration state to sessionStorage.");
    }
  } };
}
const Kt = Bo(), Ko = (t) => t.state.__TSR_key || t.href;
function jo(t) {
  const e = [];
  let s;
  for (; s = t.parentNode; ) e.push(`${t.tagName}:nth-child(${Array.prototype.indexOf.call(s.children, t) + 1})`), t = s;
  return `${e.reverse().join(" > ")}`.toLowerCase();
}
let es = false;
function zo({ storageKey: t, key: e, behavior: s, shouldScrollRestoration: n, scrollToTopSelectors: r, location: i }) {
  var _a5, _b2;
  let o;
  try {
    o = JSON.parse(sessionStorage.getItem(t) || "{}");
  } catch (l) {
    console.error(l);
    return;
  }
  const a = e || ((_a5 = window.history.state) == null ? void 0 : _a5.__TSR_key), c = o[a];
  es = true;
  e: {
    if (n && c && Object.keys(c).length > 0) {
      for (const h in c) {
        const f = c[h];
        if (h === "window") window.scrollTo({ top: f.scrollY, left: f.scrollX, behavior: s });
        else if (h) {
          const p = document.querySelector(h);
          p && (p.scrollLeft = f.scrollX, p.scrollTop = f.scrollY);
        }
      }
      break e;
    }
    const l = (i ?? window.location).hash.split("#", 2)[1];
    if (l) {
      const h = ((_b2 = window.history.state) == null ? void 0 : _b2.__hashScrollIntoViewOptions) ?? true;
      if (h) {
        const f = document.getElementById(l);
        f && f.scrollIntoView(h);
      }
      break e;
    }
    const u = { top: 0, left: 0, behavior: s };
    if (window.scrollTo(u), r) for (const h of r) {
      if (h === "window") continue;
      const f = typeof h == "function" ? h() : document.querySelector(h);
      f && f.scrollTo(u);
    }
  }
  es = false;
}
function $o(t, e) {
  if (!Kt || ((t.options.scrollRestoration ?? false) && (t.isScrollRestoring = true), t.isScrollRestorationSetup || !Kt)) return;
  t.isScrollRestorationSetup = true, es = false;
  const n = t.options.getScrollRestorationKey || Ko;
  window.history.scrollRestoration = "manual";
  const r = (i) => {
    if (es || !t.isScrollRestoring) return;
    let o = "";
    if (i.target === document || i.target === window) o = "window";
    else {
      const c = i.target.getAttribute("data-scroll-restoration-id");
      c ? o = `[data-scroll-restoration-id="${c}"]` : o = jo(i.target);
    }
    const a = n(t.state.location);
    Kt.set((c) => {
      const l = c[a] || (c[a] = {}), u = l[o] || (l[o] = {});
      if (o === "window") u.scrollX = window.scrollX || 0, u.scrollY = window.scrollY || 0;
      else if (o) {
        const h = document.querySelector(o);
        h && (u.scrollX = h.scrollLeft || 0, u.scrollY = h.scrollTop || 0);
      }
      return c;
    });
  };
  typeof document < "u" && document.addEventListener("scroll", Do(r, 100), true), t.subscribe("onRendered", (i) => {
    const o = n(i.toLocation);
    if (!t.resetNextScroll) {
      t.resetNextScroll = true;
      return;
    }
    typeof t.options.scrollRestoration == "function" && !t.options.scrollRestoration({ location: t.latestLocation }) || (zo({ storageKey: $s, key: o, behavior: t.options.scrollRestorationBehavior, shouldScrollRestoration: t.isScrollRestoring, scrollToTopSelectors: t.options.scrollToTopSelectors, location: t.history.location }), t.isScrollRestoring && Kt.set((a) => (a[o] || (a[o] = {}), a)));
  });
}
function No(t) {
  if (typeof document < "u" && document.querySelector) {
    const e = t.state.location.state.__hashScrollIntoViewOptions ?? true;
    if (e && t.state.location.hash !== "") {
      const s = document.getElementById(t.state.location.hash);
      s && s.scrollIntoView(e);
    }
  }
}
function Uo(t, e = String) {
  const s = new URLSearchParams();
  for (const n in t) {
    const r = t[n];
    r !== void 0 && s.set(n, e(r));
  }
  return s.toString();
}
function Is(t) {
  return t ? t === "false" ? false : t === "true" ? true : +t * 0 === 0 && +t + "" === t ? +t : t : "";
}
function Vo(t) {
  const e = new URLSearchParams(t), s = {};
  for (const [n, r] of e.entries()) {
    const i = s[n];
    i == null ? s[n] = Is(r) : Array.isArray(i) ? i.push(Is(r)) : s[n] = [i, Is(r)];
  }
  return s;
}
const Wo = Ho(JSON.parse), qo = Go(JSON.stringify, JSON.parse);
function Ho(t) {
  return (e) => {
    e[0] === "?" && (e = e.substring(1));
    const s = Vo(e);
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
function Go(t, e) {
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
    const i = Uo(r, n);
    return i ? `?${i}` : "";
  };
}
const ye = "__root__";
function Qo(t) {
  if (t.statusCode = t.statusCode || t.code || 307, !t._builtLocation && typeof t.href == "string" && Yt(t.href)) throw new Error(`Redirect blocked: unsafe protocol in href "${t.href}". Only ${ti.join(", ")} protocols are allowed.`);
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
const Vt = (t) => {
  var _a5;
  if (!t.rendered) return t.rendered = true, (_a5 = t.onReady) == null ? void 0 : _a5.call(t);
}, hs = (t, e) => !!(t.preload && !t.router.state.matches.some((s) => s.id === e)), st = (t, e, s = true) => {
  const n = { ...t.router.options.context ?? {} }, r = s ? e : e - 1;
  for (let i = 0; i <= r; i++) {
    const o = t.matches[i];
    if (!o) continue;
    const a = t.router.getMatch(o.id);
    a && Object.assign(n, a.__routeContext, a.__beforeLoadContext);
  }
  return n;
}, oi = (t, e) => {
  var _a5;
  const s = t.router.routesById[e.routeId ?? ""] ?? t.router.routeTree;
  !s.options.notFoundComponent && ((_a5 = t.router.options) == null ? void 0 : _a5.defaultNotFoundComponent) && (s.options.notFoundComponent = t.router.options.defaultNotFoundComponent), Me(s.options.notFoundComponent);
  const n = t.matches.find((r) => r.routeId === s.id);
  Me(n, "Could not find match for route: " + s.id), t.updateMatch(n.id, (r) => ({ ...r, status: "notFound", error: e, isFetching: false })), e.routerCode === "BEFORE_LOAD" && s.parentRoute && (e.routeId = s.parentRoute.id, oi(t, e));
}, Be = (t, e, s) => {
  var _a5, _b2, _c3;
  if (!(!me(s) && !de(s))) {
    if (me(s) && s.redirectHandled && !s.options.reloadDocument) throw s;
    if (e) {
      (_a5 = e._nonReactive.beforeLoadPromise) == null ? void 0 : _a5.resolve(), (_b2 = e._nonReactive.loaderPromise) == null ? void 0 : _b2.resolve(), e._nonReactive.beforeLoadPromise = void 0, e._nonReactive.loaderPromise = void 0;
      const n = me(s) ? "redirected" : "notFound";
      e._nonReactive.error = s, t.updateMatch(e.id, (r) => ({ ...r, status: n, context: st(t, e.index), isFetching: false, error: s })), de(s) && !s.routeId && (s.routeId = e.routeId), (_c3 = e._nonReactive.loadPromise) == null ? void 0 : _c3.resolve();
    }
    throw me(s) ? (t.rendered = true, s.options._fromLocation = t.location, s.redirectHandled = true, s = t.router.resolveRedirect(s), s) : (oi(t, s), s);
  }
}, ai = (t, e) => !!t.router.getMatch(e)._nonReactive.dehydrated, ht = (t, e, s, n) => {
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
}, ci = (t, e, s, n) => {
  var _a5;
  if (n._nonReactive.pendingTimeout !== void 0) return;
  const r = s.options.pendingMs ?? t.router.options.defaultPendingMs;
  if (!!(t.onReady && !hs(t, e) && (s.options.loader || s.options.beforeLoad || hi(s)) && typeof r == "number" && r !== 1 / 0 && (s.options.pendingComponent ?? ((_a5 = t.router.options) == null ? void 0 : _a5.defaultPendingComponent)))) {
    const o = setTimeout(() => {
      Vt(t);
    }, r);
    n._nonReactive.pendingTimeout = o;
  }
}, Jo = (t, e, s) => {
  const n = t.router.getMatch(e);
  if (!n._nonReactive.beforeLoadPromise && !n._nonReactive.loaderPromise) return;
  ci(t, e, s, n);
  const r = () => {
    const i = t.router.getMatch(e);
    i.preload && (i.status === "redirected" || i.status === "notFound") && Be(t, i, i.error);
  };
  return n._nonReactive.beforeLoadPromise ? n._nonReactive.beforeLoadPromise.then(r) : r();
}, Yo = (t, e, s, n) => {
  const r = t.router.getMatch(e), i = r._nonReactive.loadPromise;
  r._nonReactive.loadPromise = rt(() => {
    i == null ? void 0 : i.resolve();
  });
  const { paramsError: o, searchError: a } = r;
  o && ht(t, s, o, "PARSE_PARAMS"), a && ht(t, s, a, "VALIDATE_SEARCH"), ci(t, e, n, r);
  const c = new AbortController();
  let l = false;
  const u = () => {
    l || (l = true, t.updateMatch(e, (v) => ({ ...v, isFetching: "beforeLoad", fetchCount: v.fetchCount + 1, abortController: c })));
  }, h = () => {
    var _a5;
    (_a5 = r._nonReactive.beforeLoadPromise) == null ? void 0 : _a5.resolve(), r._nonReactive.beforeLoadPromise = void 0, t.updateMatch(e, (v) => ({ ...v, isFetching: false }));
  };
  if (!n.options.beforeLoad) {
    vt(() => {
      u(), h();
    });
    return;
  }
  r._nonReactive.beforeLoadPromise = rt();
  const f = { ...st(t, s, false), ...r.__routeContext }, { search: p, params: d, cause: y } = r, g = hs(t, e), m = { search: p, abortController: c, params: d, preload: g, context: f, location: t.location, navigate: (v) => t.router.navigate({ ...v, _fromLocation: t.location }), buildLocation: t.router.buildLocation, cause: g ? "preload" : y, matches: t.matches, ...t.router.options.additionalContext }, S = (v) => {
    if (v === void 0) {
      vt(() => {
        u(), h();
      });
      return;
    }
    (me(v) || de(v)) && (u(), ht(t, s, v, "BEFORE_LOAD")), vt(() => {
      u(), t.updateMatch(e, (E) => ({ ...E, __beforeLoadContext: v })), h();
    });
  };
  let b;
  try {
    if (b = n.options.beforeLoad(m), tt(b)) return u(), b.catch((v) => {
      ht(t, s, v, "BEFORE_LOAD");
    }).then(S);
  } catch (v) {
    u(), ht(t, s, v, "BEFORE_LOAD");
  }
  S(b);
}, Xo = (t, e) => {
  const { id: s, routeId: n } = t.matches[e], r = t.router.looseRoutesById[n], i = () => a(), o = () => Yo(t, s, e, r), a = () => {
    if (ai(t, s)) return;
    const c = Jo(t, s, r);
    return tt(c) ? c.then(o) : o();
  };
  return i();
}, Zo = (t, e, s) => {
  var _a5, _b2, _c3, _d2, _e28, _f3;
  const n = t.router.getMatch(e);
  if (!n || !s.options.head && !s.options.scripts && !s.options.headers) return;
  const r = { ssr: t.router.options.ssr, matches: t.matches, match: n, params: n.params, loaderData: n.loaderData };
  return Promise.all([(_b2 = (_a5 = s.options).head) == null ? void 0 : _b2.call(_a5, r), (_d2 = (_c3 = s.options).scripts) == null ? void 0 : _d2.call(_c3, r), (_f3 = (_e28 = s.options).headers) == null ? void 0 : _f3.call(_e28, r)]).then(([i, o, a]) => {
    const c = i == null ? void 0 : i.meta, l = i == null ? void 0 : i.links, u = i == null ? void 0 : i.scripts, h = i == null ? void 0 : i.styles;
    return { meta: c, links: l, headScripts: u, headers: a, scripts: o, styles: h };
  });
}, li = (t, e, s, n) => {
  const r = t.matchPromises[s - 1], { params: i, loaderDeps: o, abortController: a, cause: c } = t.router.getMatch(e), l = st(t, s), u = hs(t, e);
  return { params: i, deps: o, preload: !!u, parentMatchPromise: r, abortController: a, context: l, location: t.location, navigate: (h) => t.router.navigate({ ...h, _fromLocation: t.location }), cause: u ? "preload" : c, route: n, ...t.router.options.additionalContext };
}, Zn = async (t, e, s, n) => {
  var _a5, _b2, _c3, _d2, _e28, _f3;
  try {
    const r = t.router.getMatch(e);
    try {
      (!(fo ?? t.router.isServer) || r.ssr === true) && ui(n);
      const i = (_b2 = (_a5 = n.options).loader) == null ? void 0 : _b2.call(_a5, li(t, e, s, n)), o = n.options.loader && tt(i);
      if ((o || n._lazyPromise || n._componentsPromise || n.options.head || n.options.scripts || n.options.headers || r._nonReactive.minPendingPromise) && t.updateMatch(e, (l) => ({ ...l, isFetching: "loader" })), n.options.loader) {
        const l = o ? await i : i;
        Be(t, t.router.getMatch(e), l), l !== void 0 && t.updateMatch(e, (u) => ({ ...u, loaderData: l }));
      }
      n._lazyPromise && await n._lazyPromise;
      const c = r._nonReactive.minPendingPromise;
      c && await c, n._componentsPromise && await n._componentsPromise, t.updateMatch(e, (l) => ({ ...l, error: void 0, context: st(t, s), status: "success", isFetching: false, updatedAt: Date.now() }));
    } catch (i) {
      let o = i;
      if ((o == null ? void 0 : o.name) === "AbortError") {
        t.updateMatch(e, (c) => ({ ...c, status: c.status === "pending" ? "success" : c.status, isFetching: false, context: st(t, s) }));
        return;
      }
      const a = r._nonReactive.minPendingPromise;
      a && await a, de(i) && await ((_d2 = (_c3 = n.options.notFoundComponent) == null ? void 0 : _c3.preload) == null ? void 0 : _d2.call(_c3)), Be(t, t.router.getMatch(e), i);
      try {
        (_f3 = (_e28 = n.options).onError) == null ? void 0 : _f3.call(_e28, i);
      } catch (c) {
        o = c, Be(t, t.router.getMatch(e), c);
      }
      t.updateMatch(e, (c) => ({ ...c, error: o, context: st(t, s), status: "error", isFetching: false }));
    }
  } catch (r) {
    const i = t.router.getMatch(e);
    i && (i._nonReactive.loaderPromise = void 0), Be(t, i, r);
  }
}, ea = async (t, e) => {
  var _a5, _b2;
  const { id: s, routeId: n } = t.matches[e];
  let r = false, i = false;
  const o = t.router.looseRoutesById[n];
  if (!ai(t, s)) {
    const l = t.router.getMatch(s);
    if (l._nonReactive.loaderPromise) {
      if (l.status === "success" && !t.sync && !l.preload) return l;
      await l._nonReactive.loaderPromise;
      const u = t.router.getMatch(s), h = u._nonReactive.error || u.error;
      h && Be(t, u, h);
    } else {
      const u = Date.now() - l.updatedAt, h = hs(t, s), f = h ? o.options.preloadStaleTime ?? t.router.options.defaultPreloadStaleTime ?? 3e4 : o.options.staleTime ?? t.router.options.defaultStaleTime ?? 0, p = o.options.shouldReload, d = typeof p == "function" ? p(li(t, s, e, o)) : p, y = !!h && !t.router.state.matches.some((b) => b.id === s), g = t.router.getMatch(s);
      g._nonReactive.loaderPromise = rt(), y !== g.preload && t.updateMatch(s, (b) => ({ ...b, preload: y }));
      const { status: m, invalid: S } = g;
      r = m === "success" && (S || (d ?? u > f)), h && o.options.preload === false || (r && !t.sync ? (i = true, (async () => {
        var _a6, _b3;
        try {
          await Zn(t, s, e, o);
          const b = t.router.getMatch(s);
          (_a6 = b._nonReactive.loaderPromise) == null ? void 0 : _a6.resolve(), (_b3 = b._nonReactive.loadPromise) == null ? void 0 : _b3.resolve(), b._nonReactive.loaderPromise = void 0;
        } catch (b) {
          me(b) && await t.router.navigate(b.options);
        }
      })()) : (m !== "success" || r && t.sync) && await Zn(t, s, e, o));
    }
  }
  const a = t.router.getMatch(s);
  i || ((_a5 = a._nonReactive.loaderPromise) == null ? void 0 : _a5.resolve(), (_b2 = a._nonReactive.loadPromise) == null ? void 0 : _b2.resolve()), clearTimeout(a._nonReactive.pendingTimeout), a._nonReactive.pendingTimeout = void 0, i || (a._nonReactive.loaderPromise = void 0), a._nonReactive.dehydrated = void 0;
  const c = i ? a.isFetching : false;
  return c !== a.isFetching || a.invalid !== false ? (t.updateMatch(s, (l) => ({ ...l, isFetching: c, invalid: false })), t.router.getMatch(s)) : a;
};
async function er(t) {
  const e = Object.assign(t, { matchPromises: [] });
  e.router.state.matches.some((s) => s._forcePending) && Vt(e);
  try {
    for (let a = 0; a < e.matches.length; a++) {
      const c = Xo(e, a);
      tt(c) && await c;
    }
    const s = e.firstBadMatchIndex ?? e.matches.length;
    for (let a = 0; a < s; a++) e.matchPromises.push(ea(e, a));
    const r = (await Promise.allSettled(e.matchPromises)).filter((a) => a.status === "rejected").map((a) => a.reason);
    let i;
    for (const a of r) {
      if (me(a)) throw a;
      !i && de(a) && (i = a);
    }
    for (const a of e.matches) {
      const { id: c, routeId: l } = a, u = e.router.looseRoutesById[l];
      try {
        const h = Zo(e, c, u);
        if (h) {
          const f = await h;
          e.updateMatch(c, (p) => ({ ...p, ...f }));
        }
      } catch (h) {
        console.error(`Error executing head for route ${l}:`, h);
      }
    }
    if (i) throw i;
    const o = Vt(e);
    tt(o) && await o;
  } catch (s) {
    if (de(s) && !e.preload) {
      const n = Vt(e);
      throw tt(n) && await n, s;
    }
    if (me(s)) throw s;
  }
  return e.matches;
}
async function ui(t) {
  if (!t._lazyLoaded && t._lazyPromise === void 0 && (t.lazyFn ? t._lazyPromise = t.lazyFn().then((e) => {
    const { id: s, ...n } = e.options;
    Object.assign(t.options, n), t._lazyLoaded = true, t._lazyPromise = void 0;
  }) : t._lazyLoaded = true), !t._componentsLoaded && t._componentsPromise === void 0) {
    const e = () => {
      var _a5;
      const s = [];
      for (const n of fi) {
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
function hi(t) {
  var _a5;
  for (const e of fi) if ((_a5 = t.options[e]) == null ? void 0 : _a5.preload) return true;
  return false;
}
const fi = ["component", "errorComponent", "pendingComponent", "notFoundComponent"];
function ta(t) {
  return { input: ({ url: e }) => {
    for (const s of t) e = Ns(s, e);
    return e;
  }, output: ({ url: e }) => {
    for (let s = t.length - 1; s >= 0; s--) e = di(t[s], e);
    return e;
  } };
}
function sa(t) {
  const e = ii(t.basepath), s = `/${e}`, n = `${s}/`, r = t.caseSensitive ? s : s.toLowerCase(), i = t.caseSensitive ? n : n.toLowerCase();
  return { input: ({ url: o }) => {
    const a = t.caseSensitive ? o.pathname : o.pathname.toLowerCase();
    return a === r ? o.pathname = "/" : a.startsWith(i) && (o.pathname = o.pathname.slice(s.length)), o;
  }, output: ({ url: o }) => (o.pathname = Ut(["/", e, o.pathname]), o) };
}
function Ns(t, e) {
  var _a5;
  const s = (_a5 = t == null ? void 0 : t.input) == null ? void 0 : _a5.call(t, { url: e });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return e;
}
function di(t, e) {
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
class na {
  constructor(e) {
    this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`, this.resetNextScroll = true, this.shouldViewTransition = void 0, this.isViewTransitionTypesSupported = void 0, this.subscribers = /* @__PURE__ */ new Set(), this.isScrollRestoring = false, this.isScrollRestorationSetup = false, this.startTransition = (s) => s(), this.update = (s) => {
      var _a5;
      s.notFoundRoute && console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");
      const n = this.options, r = this.basepath ?? (n == null ? void 0 : n.basepath) ?? "/", i = this.basepath === void 0, o = n == null ? void 0 : n.rewrite;
      if (this.options = { ...n, ...s }, this.isServer = this.options.isServer ?? typeof document > "u", this.options.pathParamsAllowedCharacters && (this.pathParamsDecoder = Lo(this.options.pathParamsAllowedCharacters)), (!this.history || this.options.history && this.options.history !== this.history) && (this.options.history ? this.history = this.options.history : this.history = ei()), this.origin = this.options.origin, this.origin || ((window == null ? void 0 : window.origin) && window.origin !== "null" ? this.origin = window.origin : this.origin = "http://localhost"), this.history && this.updateLatestLocation(), this.options.routeTree !== this.routeTree) {
        this.routeTree = this.options.routeTree;
        let f;
        this.resolvePathCache = Xt(1e3), f = this.buildRouteTree(), this.setRoutes(f);
      }
      !this.__store && this.latestLocation && (this.__store = new lo(ia(this.latestLocation), { onUpdate: () => {
        this.__store.state = { ...this.state, cachedMatches: this.state.cachedMatches.filter((f) => !["redirected"].includes(f.status)) };
      } }), $o(this));
      let a = false;
      const c = this.options.basepath ?? "/", l = this.options.rewrite;
      if (i || r !== c || o !== l) {
        this.basepath = c;
        const f = [], p = ii(c);
        p && p !== "/" && f.push(sa({ basepath: c })), l && f.push(l), this.rewrite = f.length === 0 ? void 0 : f.length === 1 ? f[0] : ta(f), this.history && this.updateLatestLocation(), a = true;
      }
      a && this.__store && (this.__store.state = { ...this.state, location: this.latestLocation }), typeof window < "u" && "CSS" in window && typeof ((_a5 = window.CSS) == null ? void 0 : _a5.supports) == "function" && (this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a)"));
    }, this.updateLatestLocation = () => {
      this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
    }, this.buildRouteTree = () => {
      const s = Io(this.routeTree, this.options.caseSensitive, (n, r) => {
        n.init({ originalIndex: r });
      });
      return this.options.routeMasks && Po(this.options.routeMasks, s.processedTree), s;
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
      const r = ({ pathname: c, search: l, hash: u, href: h, state: f }) => {
        if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(c)) {
          const S = this.options.parseSearch(l), b = this.options.stringifySearch(S);
          return { href: c + b + u, publicHref: h, pathname: lt(c), external: false, searchStr: b, search: ue(n == null ? void 0 : n.search, S), hash: lt(u.slice(1)), state: ue(n == null ? void 0 : n.state, f) };
        }
        const p = new URL(h, this.origin), d = Ns(this.rewrite, p), y = this.options.parseSearch(d.search), g = this.options.stringifySearch(y);
        return d.search = g, { href: d.href.replace(d.origin, ""), publicHref: h, pathname: lt(d.pathname), external: !!this.rewrite && d.origin !== this.origin, searchStr: g, search: ue(n == null ? void 0 : n.search, y), hash: lt(d.hash.slice(1)), state: ue(n == null ? void 0 : n.state, f) };
      }, i = r(s), { __tempLocation: o, __tempKey: a } = i.state;
      if (o && (!a || a === this.tempLocationKey)) {
        const c = r(o);
        return c.state.key = i.state.key, c.state.__TSR_key = i.state.__TSR_key, delete c.state.__tempLocation, { ...c, maskedLocation: i };
      }
      return i;
    }, this.resolvePathWithBase = (s, n) => Ao({ base: s, to: pn(n), trailingSlash: this.options.trailingSlash, cache: this.resolvePathCache }), this.matchRoutes = (s, n, r) => typeof s == "string" ? this.matchRoutesInternal({ pathname: s, search: n }, r) : this.matchRoutesInternal(s, n), this.getMatchedRoutes = (s) => oa({ pathname: s, routesById: this.routesById, processedTree: this.processedTree }), this.cancelMatch = (s) => {
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
        const c = i.unsafeRelative === "path" ? o.pathname : i.from ?? a.fullPath, l = this.resolvePathWithBase(c, "."), u = a.search, h = { ...a.params }, f = i.to ? this.resolvePathWithBase(l, `${i.to}`) : this.resolvePathWithBase(l, "."), p = i.params === false || i.params === null ? {} : (i.params ?? true) === true ? h : Object.assign(h, De(i.params, h)), d = ks({ path: f, params: p, decoder: this.pathParamsDecoder, server: this.isServer }).interpolatedPath, y = this.getMatchedRoutes(d);
        let g = y.matchedRoutes;
        (y.foundRoute ? y.foundRoute.path !== "/" && y.routeParams["**"] : Oe(d)) && this.options.notFoundRoute && (g = [...g, this.options.notFoundRoute]);
        let S = false;
        if (Object.keys(p).length > 0) for (const C of g) {
          const _ = ((_a5 = C.options.params) == null ? void 0 : _a5.stringify) ?? C.options.stringifyParams;
          _ && (S = true, Object.assign(p, _(p)));
        }
        const b = s.leaveParams ? f : lt(S ? ks({ path: f, params: p, decoder: this.pathParamsDecoder, server: this.isServer }).interpolatedPath : d);
        let v = u;
        if (s._includeValidateSearch && ((_b2 = this.options.search) == null ? void 0 : _b2.strict)) {
          const C = {};
          g.forEach((_) => {
            if (_.options.validateSearch) try {
              Object.assign(C, Wt(_.options.validateSearch, { ...C, ...v }));
            } catch {
            }
          }), v = C;
        }
        v = aa({ search: v, dest: i, destRoutes: g, _includeValidateSearch: s._includeValidateSearch }), v = ue(u, v);
        const E = this.options.stringifySearch(v), M = i.hash === true ? o.hash : i.hash ? De(i.hash, o.hash) : void 0, O = M ? `#${M}` : "";
        let x = i.state === true ? o.state : i.state ? De(i.state, o.state) : {};
        x = ue(o.state, x);
        const P = `${b}${E}${O}`;
        let I, w, R = false;
        if (this.rewrite) {
          const C = new URL(P, this.origin), _ = di(this.rewrite, C);
          I = C.href.replace(C.origin, ""), _.origin !== this.origin ? (w = _.href, R = true) : w = _.pathname + _.search + _.hash;
        } else I = bo(P), w = I;
        return { publicHref: w, href: I, pathname: b, search: v, searchStr: E, state: x, hash: M ?? "", external: R, unmaskOnReload: i.unmaskOnReload };
      }, r = (i = {}, o) => {
        const a = n(i);
        let c = o ? n(o) : void 0;
        if (!c) {
          const l = {};
          if (this.options.routeMasks) {
            const u = Ro(a.pathname, this.processedTree);
            if (u) {
              Object.assign(l, u.rawParams);
              const { from: h, params: f, ...p } = u.route, d = f === false || f === null ? {} : (f ?? true) === true ? l : Object.assign(l, De(f, l));
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
        c.forEach((u) => {
          r.state[u] = this.latestLocation.state[u];
        });
        const l = qe(r.state, this.latestLocation.state);
        return c.forEach((u) => {
          delete r.state[u];
        }), l;
      }, o = Oe(this.latestLocation.href) === Oe(r.href), a = this.commitLocationPromise;
      if (this.commitLocationPromise = rt(() => {
        a == null ? void 0 : a.resolve();
      }), o && i()) this.load();
      else {
        let { maskedLocation: c, hashScrollIntoView: l, ...u } = r;
        c && (u = { ...c, state: { ...c.state, __tempKey: void 0, __tempLocation: { ...u, search: u.searchStr, state: { ...u.state, __tempKey: void 0, __tempLocation: void 0, __TSR_key: void 0, key: void 0 } } } }, (u.unmaskOnReload ?? this.options.unmaskOnReload ?? false) && (u.state.__tempKey = this.tempLocationKey)), u.state.__hashScrollIntoViewOptions = l ?? this.options.defaultHashScrollIntoView ?? true, this.shouldViewTransition = s, this.history[r.replace ? "replace" : "push"](u.publicHref, u.state, { ignoreBlocker: n });
      }
      return this.resetNextScroll = r.resetScroll ?? true, this.history.subscribers.size || this.load(), this.commitLocationPromise;
    }, this.buildAndCommitLocation = ({ replace: s, resetScroll: n, hashScrollIntoView: r, viewTransition: i, ignoreBlocker: o, href: a, ...c } = {}) => {
      if (a) {
        const h = this.history.location.state.__TSR_index, f = Rt(a, { __TSR_index: s ? h : h + 1 }), p = new URL(f.pathname, this.origin), d = Ns(this.rewrite, p);
        c.to = d.pathname, c.search = this.options.parseSearch(f.search), c.hash = f.hash.slice(1);
      }
      const l = this.buildLocation({ ...c, _includeValidateSearch: true });
      this.pendingBuiltLocation = l;
      const u = this.commitLocation({ ...l, viewTransition: i, replace: s, resetScroll: n, hashScrollIntoView: r, ignoreBlocker: o });
      return Promise.resolve().then(() => {
        this.pendingBuiltLocation === l && (this.pendingBuiltLocation = void 0);
      }), u;
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
        if (Yt(c)) return Promise.resolve();
        if (!o.ignoreBlocker) {
          const u = ((_b2 = (_a5 = this.history).getBlockers) == null ? void 0 : _b2.call(_a5)) ?? [];
          for (const h of u) if ((h == null ? void 0 : h.blockerFn) && await h.blockerFn({ currentLocation: this.latestLocation, nextLocation: this.latestLocation, action: "PUSH" })) return Promise.resolve();
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
            this.state.redirect || this.emit({ type: "onBeforeNavigate", ...He({ resolvedLocation: l, location: c }) }), this.emit({ type: "onBeforeLoad", ...He({ resolvedLocation: l, location: c }) }), await er({ router: this, sync: s == null ? void 0 : s.sync, matches: this.state.pendingMatches, location: c, updateMatch: this.updateMatch, onReady: async () => {
              this.startTransition(() => {
                this.startViewTransition(async () => {
                  let u = [], h = [], f = [];
                  vt(() => {
                    this.__store.setState((p) => {
                      const d = p.matches, y = p.pendingMatches || p.matches;
                      return u = d.filter((g) => !y.some((m) => m.id === g.id)), h = y.filter((g) => !d.some((m) => m.id === g.id)), f = y.filter((g) => d.some((m) => m.id === g.id)), { ...p, isLoading: false, loadedAt: Date.now(), matches: y, pendingMatches: void 0, cachedMatches: [...p.cachedMatches, ...u.filter((g) => g.status !== "error" && g.status !== "notFound")] };
                    }), this.clearExpiredCache();
                  }), [[u, "onLeave"], [h, "onEnter"], [f, "onStay"]].forEach(([p, d]) => {
                    p.forEach((y) => {
                      var _a6, _b2;
                      (_b2 = (_a6 = this.looseRoutesById[y.routeId].options)[d]) == null ? void 0 : _b2.call(_a6, y);
                    });
                  });
                });
              });
            } });
          } catch (c) {
            me(c) ? (n = c, this.navigate({ ...n.options, replace: true, ignoreBlocker: true })) : de(c) && (r = c), this.__store.setState((l) => ({ ...l, statusCode: n ? n.status : r ? 404 : l.matches.some((u) => u.status === "error") ? 500 : 200, redirect: n }));
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
    }, this.loadRouteChunk = ui, this.preloadRoute = async (s) => {
      const n = this.buildLocation(s);
      let r = this.matchRoutes(n, { throwOnError: true, preload: true, dest: s });
      const i = new Set([...this.state.matches, ...this.state.pendingMatches ?? []].map((a) => a.id)), o = /* @__PURE__ */ new Set([...i, ...this.state.cachedMatches.map((a) => a.id)]);
      vt(() => {
        r.forEach((a) => {
          o.has(a.id) || this.__store.setState((c) => ({ ...c, cachedMatches: [...c.cachedMatches, a] }));
        });
      });
      try {
        return r = await er({ router: this, matches: r, location: n, preload: true, updateMatch: (a, c) => {
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
      const a = ((n == null ? void 0 : n.pending) === void 0 ? !this.state.isLoading : n.pending) ? this.latestLocation : this.state.resolvedLocation || this.state.location, c = Co(i.pathname, (n == null ? void 0 : n.caseSensitive) ?? false, (n == null ? void 0 : n.fuzzy) ?? false, a.pathname, this.processedTree);
      return !c || s.params && !qe(c.rawParams, s.params, { partial: true }) ? false : (n == null ? void 0 : n.includeSearch) ?? true ? qe(a.search, i.search, { partial: true }) ? c.rawParams : false : c.rawParams;
    }, this.hasNotFoundMatch = () => this.__store.state.matches.some((s) => s.status === "notFound" || s.globalNotFound), this.update({ defaultPreloadDelay: 50, defaultPendingMs: 1e3, defaultPendingMinMs: 500, context: void 0, ...e, caseSensitive: e.caseSensitive ?? false, notFoundMode: e.notFoundMode ?? "fuzzy", stringifySearch: e.stringifySearch ?? qo, parseSearch: e.parseSearch ?? Wo }), typeof document < "u" && (self.__TSR_ROUTER__ = this);
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
  matchRoutesInternal(e, s) {
    const n = this.getMatchedRoutes(e.pathname), { foundRoute: r, routeParams: i, parsedParams: o } = n;
    let { matchedRoutes: a } = n, c = false;
    (r ? r.path !== "/" && i["**"] : Oe(e.pathname)) && (this.options.notFoundRoute ? a = [...a, this.options.notFoundRoute] : c = true);
    const l = c ? la(this.options.notFoundMode, a) : void 0, u = [], h = (f) => (f == null ? void 0 : f.id) ? f.context ?? this.options.context ?? void 0 : this.options.context ?? void 0;
    return a.forEach((f, p) => {
      var _a5, _b2;
      const d = u[p - 1], [y, g, m] = (() => {
        const _ = (d == null ? void 0 : d.search) ?? e.search, k = (d == null ? void 0 : d._strictSearch) ?? void 0;
        try {
          const T = Wt(f.options.validateSearch, { ..._ }) ?? void 0;
          return [{ ..._, ...T }, { ...k, ...T }, void 0];
        } catch (T) {
          let B = T;
          if (T instanceof ts || (B = new ts(T.message, { cause: T })), s == null ? void 0 : s.throwOnError) throw B;
          return [_, {}, B];
        }
      })(), S = ((_b2 = (_a5 = f.options).loaderDeps) == null ? void 0 : _b2.call(_a5, { search: y })) ?? "", b = S ? JSON.stringify(S) : "", { interpolatedPath: v, usedParams: E } = ks({ path: f.fullPath, params: i, decoder: this.pathParamsDecoder, server: this.isServer }), M = f.id + v + b, O = this.getMatch(M), x = this.state.matches.find((_) => _.routeId === f.id), P = (O == null ? void 0 : O._strictParams) ?? E;
      let I;
      if (!O) try {
        tr(f, E, o, P);
      } catch (_) {
        if (de(_) || me(_) ? I = _ : I = new ra(_.message, { cause: _ }), s == null ? void 0 : s.throwOnError) throw I;
      }
      Object.assign(i, P);
      const w = x ? "stay" : "enter";
      let R;
      if (O) R = { ...O, cause: w, params: x ? ue(x.params, i) : i, _strictParams: P, search: ue(x ? x.search : O.search, y), _strictSearch: g };
      else {
        const _ = f.options.loader || f.options.beforeLoad || f.lazyFn || hi(f) ? "pending" : "success";
        R = { id: M, ssr: f.options.ssr, index: p, routeId: f.id, params: x ? ue(x.params, i) : i, _strictParams: P, pathname: v, updatedAt: Date.now(), search: x ? ue(x.search, y) : y, _strictSearch: g, searchError: void 0, status: _, isFetching: false, error: void 0, paramsError: I, __routeContext: void 0, _nonReactive: { loadPromise: rt() }, __beforeLoadContext: void 0, context: {}, abortController: new AbortController(), fetchCount: 0, cause: w, loaderDeps: x ? ue(x.loaderDeps, S) : S, invalid: false, preload: false, links: void 0, scripts: void 0, headScripts: void 0, meta: void 0, staticData: f.options.staticData || {}, fullPath: f.fullPath };
      }
      (s == null ? void 0 : s.preload) || (R.globalNotFound = l === f.id), R.searchError = m;
      const C = h(d);
      R.context = { ...C, ...R.__routeContext, ...R.__beforeLoadContext }, u.push(R);
    }), u.forEach((f, p) => {
      const d = this.looseRoutesById[f.routeId];
      if (!this.getMatch(f.id)) {
        const g = u[p - 1], m = h(g);
        if (d.options.context) {
          const S = { deps: f.loaderDeps, params: f.params, context: m ?? {}, location: e, navigate: (b) => this.navigate({ ...b, _fromLocation: e }), buildLocation: this.buildLocation, cause: f.cause, abortController: f.abortController, preload: !!f.preload, matches: u };
          f.__routeContext = d.options.context(S) ?? void 0;
        }
        f.context = { ...m, ...f.__routeContext, ...f.__beforeLoadContext };
      }
    }), u;
  }
  matchRoutesLightweight(e) {
    const { matchedRoutes: s, routeParams: n, parsedParams: r } = this.getMatchedRoutes(e.pathname), i = Ct(s), o = { ...e.search };
    for (const u of s) try {
      Object.assign(o, Wt(u.options.validateSearch, o));
    } catch {
    }
    const a = Ct(this.state.matches), c = a && a.routeId === i.id && e.pathname === this.state.location.pathname;
    let l;
    if (c) l = a.params;
    else {
      const u = { ...n };
      for (const h of s) try {
        tr(h, n, r ?? {}, u);
      } catch {
      }
      l = u;
    }
    return { matchedRoutes: s, fullPath: i.fullPath, search: o, params: l };
  }
}
class ts extends Error {
}
class ra extends Error {
}
function ia(t) {
  return { loadedAt: 0, isLoading: false, isTransitioning: false, status: "idle", resolvedLocation: void 0, location: t, matches: [], pendingMatches: [], cachedMatches: [], statusCode: 200 };
}
function Wt(t, e) {
  if (t == null) return {};
  if ("~standard" in t) {
    const s = t["~standard"].validate(e);
    if (s instanceof Promise) throw new ts("Async validation not supported");
    if (s.issues) throw new ts(JSON.stringify(s.issues, void 0, 2), { cause: s });
    return s.value;
  }
  return "parse" in t ? t.parse(e) : typeof t == "function" ? t(e) : {};
}
function oa({ pathname: t, routesById: e, processedTree: s }) {
  const n = {}, r = Oe(t);
  let i, o;
  const a = _o(r, s, true);
  return a && (i = a.route, Object.assign(n, a.rawParams), o = Object.assign({}, a.parsedParams)), { matchedRoutes: (a == null ? void 0 : a.branch) || [e[ye]], routeParams: n, foundRoute: i, parsedParams: o };
}
function aa({ search: t, dest: e, destRoutes: s, _includeValidateSearch: n }) {
  return ca(s)(t, e, n ?? false);
}
function ca(t) {
  var _a5;
  const e = { dest: null, _includeValidateSearch: false, middlewares: [] };
  for (const r of t) {
    if ("search" in r.options) ((_a5 = r.options.search) == null ? void 0 : _a5.middlewares) && e.middlewares.push(...r.options.search.middlewares);
    else if (r.options.preSearchFilters || r.options.postSearchFilters) {
      const i = ({ search: o, next: a }) => {
        let c = o;
        "preSearchFilters" in r.options && r.options.preSearchFilters && (c = r.options.preSearchFilters.reduce((u, h) => h(u), o));
        const l = a(c);
        return "postSearchFilters" in r.options && r.options.postSearchFilters ? r.options.postSearchFilters.reduce((u, h) => h(u), l) : l;
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
function la(t, e) {
  if (t !== "root") for (let s = e.length - 1; s >= 0; s--) {
    const n = e[s];
    if (n.children) return n.id;
  }
  return ye;
}
function tr(t, e, s, n) {
  var _a5;
  const r = ((_a5 = t.options.params) == null ? void 0 : _a5.parse) ?? t.options.parseParams;
  if (r) if (t.options.skipRouteOnParseError) for (const i in e) i in s && (n[i] = s[i]);
  else {
    const i = r(n);
    Object.assign(n, i);
  }
}
const ua = "Error preloading route! \u261D\uFE0F";
class pi {
  constructor(e) {
    if (this.init = (s) => {
      var _a5, _b2;
      this.originalIndex = s.originalIndex;
      const n = this.options, r = !(n == null ? void 0 : n.path) && !(n == null ? void 0 : n.id);
      this.parentRoute = (_b2 = (_a5 = this.options).getParentRoute) == null ? void 0 : _b2.call(_a5), r ? this._path = ye : this.parentRoute || Me(false);
      let i = r ? ye : n == null ? void 0 : n.path;
      i && i !== "/" && (i = ri(i));
      const o = (n == null ? void 0 : n.id) || i;
      let a = r ? ye : Ut([this.parentRoute.id === ye ? "" : this.parentRoute.id, o]);
      i === ye && (i = "/"), a !== ye && (a = Ut(["/", a]));
      const c = a === ye ? "/" : Ut([this.parentRoute.fullPath, i]);
      this._path = i, this._id = a, this._fullPath = c, this._to = Oe(c);
    }, this.addChildren = (s) => this._addFileChildren(s), this._addFileChildren = (s) => (Array.isArray(s) && (this.children = s), typeof s == "object" && s !== null && (this.children = Object.values(s)), this), this._addFileTypes = () => this, this.updateLoader = (s) => (Object.assign(this.options, s), this), this.update = (s) => (Object.assign(this.options, s), this), this.lazy = (s) => (this.lazyFn = s, this), this.redirect = (s) => Qo({ from: this.fullPath, ...s }), this.options = e || {}, this.isRoot = !(e == null ? void 0 : e.getParentRoute), (e == null ? void 0 : e.id) && (e == null ? void 0 : e.path)) throw new Error("Route cannot have both an 'id' and a 'path' option.");
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
class ha extends pi {
  constructor(e) {
    super(e);
  }
}
const fa = "use", sr = Yi[fa], yt = typeof window < "u" ? L.useLayoutEffect : L.useEffect;
function Es(t) {
  const e = L.useRef({ value: t, prev: null }), s = e.current.value;
  return t !== s && (e.current = { value: t, prev: s }), e.current.prev;
}
function da(t, e, s = {}, n = {}) {
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
function pa(t) {
  const e = L.useRef(null);
  return L.useImperativeHandle(t, () => e.current, []), e;
}
function yn(t) {
  const e = t.errorComponent ?? gn;
  return A.jsx(ya, { getResetKey: t.getResetKey, onCatch: t.onCatch, children: ({ error: s, reset: n }) => s ? L.createElement(e, { error: s, reset: n }) : t.children });
}
class ya extends L.Component {
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
function gn({ error: t }) {
  const [e, s] = L.useState(false);
  return A.jsxs("div", { style: { padding: ".5rem", maxWidth: "100%" }, children: [A.jsxs("div", { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [A.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }), A.jsx("button", { style: { appearance: "none", fontSize: ".6em", border: "1px solid currentColor", padding: ".1rem .2rem", fontWeight: "bold", borderRadius: ".25rem" }, onClick: () => s((n) => !n), children: e ? "Hide Error" : "Show Error" })] }), A.jsx("div", { style: { height: ".25rem" } }), e ? A.jsx("div", { children: A.jsx("pre", { style: { fontSize: ".7em", border: "1px solid red", borderRadius: ".25rem", padding: ".3rem", color: "red", overflow: "auto" }, children: t.message ? A.jsx("code", { children: t.message }) : null }) }) : null] });
}
function ga({ children: t, fallback: e = null }) {
  return yi() ? A.jsx(Pt.Fragment, { children: t }) : A.jsx(Pt.Fragment, { children: e });
}
function yi() {
  return Pt.useSyncExternalStore(ma, () => true, () => false);
}
function ma() {
  return () => {
  };
}
function wa(t, e = (n) => n, s = {}) {
  const n = s.equal ?? va;
  return Xi.useSyncExternalStoreWithSelector(t.subscribe, () => t.state, () => t.state, e, n);
}
function va(t, e) {
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
  const s = nr(t);
  if (s.length !== nr(e).length) return false;
  for (let n = 0; n < s.length; n++) if (!Object.prototype.hasOwnProperty.call(e, s[n]) || !Object.is(t[s[n]], e[s[n]])) return false;
  return true;
}
function nr(t) {
  return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
}
const Os = L.createContext(null);
function gi() {
  return typeof document > "u" ? Os : window.__TSR_ROUTER_CONTEXT__ ? window.__TSR_ROUTER_CONTEXT__ : (window.__TSR_ROUTER_CONTEXT__ = Os, Os);
}
function ne(t) {
  const e = L.useContext(gi());
  return un(!(((t == null ? void 0 : t.warn) ?? true) && !e)), e;
}
function Y(t) {
  const e = ne({ warn: (t == null ? void 0 : t.router) === void 0 }), s = (t == null ? void 0 : t.router) || e, n = L.useRef(void 0);
  return wa(s.__store, (r) => {
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
const fs = L.createContext(void 0), Sa = L.createContext(void 0);
function Re(t) {
  const e = L.useContext(t.from ? Sa : fs);
  return Y({ select: (n) => {
    const r = n.matches.find((i) => t.from ? t.from === i.routeId : i.id === e);
    if (Me(!((t.shouldThrow ?? true) && !r), `Could not find ${t.from ? `an active match from "${t.from}"` : "a nearest match!"}`), r !== void 0) return t.select ? t.select(r) : r;
  }, structuralSharing: t.structuralSharing });
}
function mn(t) {
  return Re({ from: t.from, strict: t.strict, structuralSharing: t.structuralSharing, select: (e) => t.select ? t.select(e.loaderData) : e.loaderData });
}
function wn(t) {
  const { select: e, ...s } = t;
  return Re({ ...s, select: (n) => e ? e(n.loaderDeps) : n.loaderDeps });
}
function vn(t) {
  return Re({ from: t.from, shouldThrow: t.shouldThrow, structuralSharing: t.structuralSharing, strict: t.strict, select: (e) => {
    const s = t.strict === false ? e.params : e._strictParams;
    return t.select ? t.select(s) : s;
  } });
}
function Sn(t) {
  return Re({ from: t.from, strict: t.strict, shouldThrow: t.shouldThrow, structuralSharing: t.structuralSharing, select: (e) => t.select ? t.select(e.search) : e.search });
}
function ds(t) {
  const e = ne();
  return L.useCallback((s) => e.navigate({ ...s, from: s.from ?? (t == null ? void 0 : t.from) }), [t == null ? void 0 : t.from, e]);
}
function Xf(t) {
  const e = ne(), s = ds(), n = L.useRef(null);
  return yt(() => {
    n.current !== t && (s(t), n.current = t);
  }, [e, t, s]), null;
}
function ba(t, e) {
  const s = ne(), n = pa(e), { activeProps: r, inactiveProps: i, activeOptions: o, to: a, preload: c, preloadDelay: l, hashScrollIntoView: u, replace: h, startTransition: f, resetScroll: p, viewTransition: d, children: y, target: g, disabled: m, style: S, className: b, onClick: v, onFocus: E, onMouseEnter: M, onMouseLeave: O, onTouchStart: x, ignoreBlocker: P, params: I, search: w, hash: R, state: C, mask: _, reloadDocument: k, unsafeRelative: T, from: B, _fromLocation: F, ...K } = t, j = yi(), $ = Y({ select: (z) => z.location.search, structuralSharing: true }), xe = t.from, Te = L.useMemo(() => ({ ...t, from: xe }), [s, $, xe, t._fromLocation, t.hash, t.to, t.search, t.params, t.state, t.mask, t.unsafeRelative]), X = L.useMemo(() => s.buildLocation({ ...Te }), [s, Te]), Z = X.maskedLocation ? X.maskedLocation.publicHref : X.publicHref, N = X.maskedLocation ? X.maskedLocation.external : X.external, U = L.useMemo(() => ka(Z, N, s.history, m), [m, N, Z, s.history]), W = L.useMemo(() => {
    if (U == null ? void 0 : U.external) return Yt(U.href) ? void 0 : U.href;
    if (!Ia(a) && !(typeof a != "string" || a.indexOf(":") === -1)) try {
      return new URL(a), Yt(a) ? void 0 : a;
    } catch {
    }
  }, [a, U]), Q = Y({ select: (z) => {
    if (W) return false;
    if (o == null ? void 0 : o.exact) {
      if (!To(z.location.pathname, X.pathname, s.basepath)) return false;
    } else {
      const le = Zt(z.location.pathname, s.basepath), Se = Zt(X.pathname, s.basepath);
      if (!(le.startsWith(Se) && (le.length === Se.length || le[Se.length] === "/"))) return false;
    }
    return ((o == null ? void 0 : o.includeSearch) ?? true) && !qe(z.location.search, X.search, { partial: !(o == null ? void 0 : o.exact), ignoreUndefined: !(o == null ? void 0 : o.explicitUndefined) }) ? false : (o == null ? void 0 : o.includeHash) ? j && z.location.hash === X.hash : true;
  } }), V = Q ? De(r, {}) ?? xa : Ms, re = Q ? Ms : De(i, {}) ?? Ms, Ae = [b, V.className, re.className].filter(Boolean).join(" "), vs = (S || V.style || re.style) && { ...S, ...V.style, ...re.style }, [Ss, zn] = L.useState(false), $n = L.useRef(false), Xe = t.reloadDocument || W ? false : c ?? s.options.defaultPreload, bs = l ?? s.options.defaultPreloadDelay ?? 0, Ne = L.useCallback(() => {
    s.preloadRoute({ ...Te }).catch((z) => {
      console.warn(z), console.warn(ua);
    });
  }, [s, Te]), qi = L.useCallback((z) => {
    (z == null ? void 0 : z.isIntersecting) && Ne();
  }, [Ne]);
  da(n, qi, _a, { disabled: !!m || Xe !== "viewport" }), L.useEffect(() => {
    $n.current || !m && Xe === "render" && (Ne(), $n.current = true);
  }, [m, Ne, Xe]);
  const Hi = (z) => {
    const le = z.currentTarget.getAttribute("target"), Se = g !== void 0 ? g : le;
    if (!m && !Ea(z) && !z.defaultPrevented && (!Se || Se === "_self") && z.button === 0) {
      z.preventDefault(), Zi.flushSync(() => {
        zn(true);
      });
      const Un = s.subscribe("onResolved", () => {
        Un(), zn(false);
      });
      s.navigate({ ...Te, replace: h, resetScroll: p, hashScrollIntoView: u, startTransition: f, viewTransition: d, ignoreBlocker: P });
    }
  };
  if (W) return { ...K, ref: n, href: W, ...y && { children: y }, ...g && { target: g }, ...m && { disabled: m }, ...S && { style: S }, ...b && { className: b }, ...v && { onClick: v }, ...E && { onFocus: E }, ...M && { onMouseEnter: M }, ...O && { onMouseLeave: O }, ...x && { onTouchStart: x } };
  const Nn = (z) => {
    m || Xe && Ne();
  }, Gi = Nn, Qi = (z) => {
    if (!(m || !Xe)) if (!bs) Ne();
    else {
      const le = z.target;
      if (ft.has(le)) return;
      const Se = setTimeout(() => {
        ft.delete(le), Ne();
      }, bs);
      ft.set(le, Se);
    }
  }, Ji = (z) => {
    if (m || !Xe || !bs) return;
    const le = z.target, Se = ft.get(le);
    Se && (clearTimeout(Se), ft.delete(le));
  };
  return { ...K, ...V, ...re, href: U == null ? void 0 : U.href, ref: n, onClick: dt([v, Hi]), onFocus: dt([E, Nn]), onMouseEnter: dt([M, Qi]), onMouseLeave: dt([O, Ji]), onTouchStart: dt([x, Gi]), disabled: !!m, target: g, ...vs && { style: vs }, ...Ae && { className: Ae }, ...m && Pa, ...Q && Ra, ...j && Ss && Ca };
}
const Ms = {}, xa = { className: "active" }, Pa = { role: "link", "aria-disabled": true }, Ra = { "data-status": "active", "aria-current": "page" }, Ca = { "data-transitioning": "transitioning" }, ft = /* @__PURE__ */ new WeakMap(), _a = { rootMargin: "100px" }, dt = (t) => (e) => {
  for (const s of t) if (s) {
    if (e.defaultPrevented) return;
    s(e);
  }
};
function ka(t, e, s, n) {
  if (!n) return e ? { href: t, external: true } : { href: s.createHref(t) || "/", external: false };
}
function Ia(t) {
  if (typeof t != "string") return false;
  const e = t.charCodeAt(0);
  return e === 47 ? t.charCodeAt(1) !== 47 : e === 46;
}
const mi = L.forwardRef((t, e) => {
  const { _asChild: s, ...n } = t, { type: r, ...i } = ba(n, e), o = typeof n.children == "function" ? n.children({ isActive: i["data-status"] === "active" }) : n.children;
  if (!s) {
    const { disabled: a, ...c } = i;
    return L.createElement("a", c, o);
  }
  return L.createElement(s, i, o);
});
function Ea(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
class Oa extends pi {
  constructor(e) {
    super(e), this.useMatch = (s) => Re({ select: s == null ? void 0 : s.select, from: this.id, structuralSharing: s == null ? void 0 : s.structuralSharing }), this.useRouteContext = (s) => Re({ ...s, from: this.id, select: (n) => (s == null ? void 0 : s.select) ? s.select(n.context) : n.context }), this.useSearch = (s) => Sn({ select: s == null ? void 0 : s.select, structuralSharing: s == null ? void 0 : s.structuralSharing, from: this.id }), this.useParams = (s) => vn({ select: s == null ? void 0 : s.select, structuralSharing: s == null ? void 0 : s.structuralSharing, from: this.id }), this.useLoaderDeps = (s) => wn({ ...s, from: this.id }), this.useLoaderData = (s) => mn({ ...s, from: this.id }), this.useNavigate = () => ds({ from: this.fullPath }), this.Link = Pt.forwardRef((s, n) => A.jsx(mi, { ref: n, from: this.fullPath, ...s })), this.$$typeof = /* @__PURE__ */ Symbol.for("react.memo");
  }
}
function Ma(t) {
  return new Oa(t);
}
class Ta extends ha {
  constructor(e) {
    super(e), this.useMatch = (s) => Re({ select: s == null ? void 0 : s.select, from: this.id, structuralSharing: s == null ? void 0 : s.structuralSharing }), this.useRouteContext = (s) => Re({ ...s, from: this.id, select: (n) => (s == null ? void 0 : s.select) ? s.select(n.context) : n.context }), this.useSearch = (s) => Sn({ select: s == null ? void 0 : s.select, structuralSharing: s == null ? void 0 : s.structuralSharing, from: this.id }), this.useParams = (s) => vn({ select: s == null ? void 0 : s.select, structuralSharing: s == null ? void 0 : s.structuralSharing, from: this.id }), this.useLoaderDeps = (s) => wn({ ...s, from: this.id }), this.useLoaderData = (s) => mn({ ...s, from: this.id }), this.useNavigate = () => ds({ from: this.fullPath }), this.Link = Pt.forwardRef((s, n) => A.jsx(mi, { ref: n, from: this.fullPath, ...s })), this.$$typeof = /* @__PURE__ */ Symbol.for("react.memo");
  }
}
function Zf(t) {
  return new Ta(t);
}
function rr(t) {
  return typeof t == "object" ? new ir(t, { silent: true }).createRoute(t) : new ir(t, { silent: true }).createRoute;
}
class ir {
  constructor(e, s) {
    this.path = e, this.createRoute = (n) => {
      un(this.silent);
      const r = Ma(n);
      return r.isRoot = false, r;
    }, this.silent = s == null ? void 0 : s.silent;
  }
}
class or {
  constructor(e) {
    this.useMatch = (s) => Re({ select: s == null ? void 0 : s.select, from: this.options.id, structuralSharing: s == null ? void 0 : s.structuralSharing }), this.useRouteContext = (s) => Re({ from: this.options.id, select: (n) => (s == null ? void 0 : s.select) ? s.select(n.context) : n.context }), this.useSearch = (s) => Sn({ select: s == null ? void 0 : s.select, structuralSharing: s == null ? void 0 : s.structuralSharing, from: this.options.id }), this.useParams = (s) => vn({ select: s == null ? void 0 : s.select, structuralSharing: s == null ? void 0 : s.structuralSharing, from: this.options.id }), this.useLoaderDeps = (s) => wn({ ...s, from: this.options.id }), this.useLoaderData = (s) => mn({ ...s, from: this.options.id }), this.useNavigate = () => {
      const s = ne();
      return ds({ from: s.routesById[this.options.id].fullPath });
    }, this.options = e, this.$$typeof = /* @__PURE__ */ Symbol.for("react.memo");
  }
}
function ar(t) {
  return typeof t == "object" ? new or(t) : (e) => new or({ id: t, ...e });
}
function ed(t, e) {
  let s, n, r, i;
  const o = () => (s || (s = t().then((c) => {
    s = void 0, n = c[e];
  }).catch((c) => {
    if (r = c, go(r) && r instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
      const l = `tanstack_router_reload:${r.message}`;
      sessionStorage.getItem(l) || (sessionStorage.setItem(l, "1"), i = true);
    }
  })), s), a = function(l) {
    if (i) throw window.location.reload(), new Promise(() => {
    });
    if (r) throw r;
    if (!n) if (sr) sr(o());
    else throw o();
    return L.createElement(n, l);
  };
  return a.preload = o, a;
}
function Aa() {
  const t = ne(), e = L.useRef({ router: t, mounted: false }), [s, n] = L.useState(false), { hasPendingMatches: r, isLoading: i } = Y({ select: (h) => ({ isLoading: h.isLoading, hasPendingMatches: h.matches.some((f) => f.status === "pending") }), structuralSharing: true }), o = Es(i), a = i || s || r, c = Es(a), l = i || r, u = Es(l);
  return t.startTransition = (h) => {
    n(true), L.startTransition(() => {
      h(), n(false);
    });
  }, L.useEffect(() => {
    const h = t.history.subscribe(t.load), f = t.buildLocation({ to: t.latestLocation.pathname, search: true, params: true, hash: true, state: true, _includeValidateSearch: true });
    return Oe(t.latestLocation.publicHref) !== Oe(f.publicHref) && t.commitLocation({ ...f, replace: true }), () => {
      h();
    };
  }, [t, t.history]), yt(() => {
    if (typeof window < "u" && t.ssr || e.current.router === t && e.current.mounted) return;
    e.current = { router: t, mounted: true }, (async () => {
      try {
        await t.load();
      } catch (f) {
        console.error(f);
      }
    })();
  }, [t]), yt(() => {
    o && !i && t.emit({ type: "onLoad", ...He(t.state) });
  }, [o, t, i]), yt(() => {
    u && !l && t.emit({ type: "onBeforeRouteMount", ...He(t.state) });
  }, [l, u, t]), yt(() => {
    if (c && !a) {
      const h = He(t.state);
      t.emit({ type: "onResolved", ...h }), t.__store.setState((f) => ({ ...f, status: "idle", resolvedLocation: f.location })), h.hrefChanged && No(t);
    }
  }, [a, c, t]), null;
}
function La(t) {
  const e = Y({ select: (s) => `not-found-${s.location.pathname}-${s.status}` });
  return A.jsx(yn, { getResetKey: () => e, onCatch: (s, n) => {
    var _a5;
    if (de(s)) (_a5 = t.onCatch) == null ? void 0 : _a5.call(t, s, n);
    else throw s;
  }, errorComponent: ({ error: s }) => {
    var _a5;
    if (de(s)) return (_a5 = t.fallback) == null ? void 0 : _a5.call(t, s);
    throw s;
  }, children: t.children });
}
function Fa() {
  return A.jsx("p", { children: "Not Found" });
}
function Ze(t) {
  return A.jsx(A.Fragment, { children: t.children });
}
function wi(t, e, s) {
  return e.options.notFoundComponent ? A.jsx(e.options.notFoundComponent, { ...s }) : t.options.defaultNotFoundComponent ? A.jsx(t.options.defaultNotFoundComponent, { ...s }) : A.jsx(Fa, {});
}
function Da() {
  return ne().isScrollRestoring, null;
}
const vi = L.memo(function({ matchId: e }) {
  var _a5, _b2;
  const s = ne(), n = Y({ select: (y) => {
    var _a6;
    const g = y.matches.findIndex((S) => S.id === e), m = y.matches[g];
    return Me(m), { routeId: m.routeId, ssr: m.ssr, _displayPending: m._displayPending, resetKey: y.loadedAt, parentRouteId: (_a6 = y.matches[g - 1]) == null ? void 0 : _a6.routeId };
  }, structuralSharing: true }), r = s.routesById[n.routeId], i = r.options.pendingComponent ?? s.options.defaultPendingComponent, o = i ? A.jsx(i, {}) : null, a = r.options.errorComponent ?? s.options.defaultErrorComponent, c = r.options.onCatch ?? s.options.defaultOnCatch, l = r.isRoot ? r.options.notFoundComponent ?? ((_a5 = s.options.notFoundRoute) == null ? void 0 : _a5.options.component) : r.options.notFoundComponent, u = n.ssr === false || n.ssr === "data-only", h = (!r.isRoot || r.options.wrapInSuspense || u) && (r.options.wrapInSuspense ?? i ?? (((_b2 = r.options.errorComponent) == null ? void 0 : _b2.preload) || u)) ? L.Suspense : Ze, f = a ? yn : Ze, p = l ? La : Ze, d = r.isRoot ? r.options.shellComponent ?? Ze : Ze;
  return A.jsxs(d, { children: [A.jsx(fs.Provider, { value: e, children: A.jsx(h, { fallback: o, children: A.jsx(f, { getResetKey: () => n.resetKey, errorComponent: a || gn, onCatch: (y, g) => {
    if (de(y)) throw y;
    c == null ? void 0 : c(y, g);
  }, children: A.jsx(p, { fallback: (y) => {
    if (!l || y.routeId && y.routeId !== n.routeId || !y.routeId && !r.isRoot) throw y;
    return L.createElement(l, y);
  }, children: u || n._displayPending ? A.jsx(ga, { fallback: o, children: A.jsx(cr, { matchId: e }) }) : A.jsx(cr, { matchId: e }) }) }) }) }), n.parentRouteId === ye && s.options.scrollRestoration ? A.jsxs(A.Fragment, { children: [A.jsx(Ba, {}), A.jsx(Da, {})] }) : null] });
});
function Ba() {
  const t = ne(), e = L.useRef(void 0);
  return A.jsx("script", { suppressHydrationWarning: true, ref: (s) => {
    s && (e.current === void 0 || e.current.href !== t.latestLocation.href) && (t.emit({ type: "onRendered", ...He(t.state) }), e.current = t.latestLocation);
  } }, t.latestLocation.state.__TSR_key);
}
const cr = L.memo(function({ matchId: e }) {
  var _a5, _b2, _c3, _d2;
  const s = ne(), { match: n, key: r, routeId: i } = Y({ select: (c) => {
    var _a6;
    const l = c.matches.find((d) => d.id === e), u = l.routeId, f = (_a6 = s.routesById[u].options.remountDeps ?? s.options.defaultRemountDeps) == null ? void 0 : _a6({ routeId: u, loaderDeps: l.loaderDeps, params: l._strictParams, search: l._strictSearch });
    return { key: f ? JSON.stringify(f) : void 0, routeId: u, match: { id: l.id, status: l.status, error: l.error, invalid: l.invalid, _forcePending: l._forcePending, _displayPending: l._displayPending } };
  }, structuralSharing: true }), o = s.routesById[i], a = L.useMemo(() => {
    const c = o.options.component ?? s.options.defaultComponent;
    return c ? A.jsx(c, {}, r) : A.jsx(Ka, {});
  }, [r, o.options.component, s.options.defaultComponent]);
  if (n._displayPending) throw (_a5 = s.getMatch(n.id)) == null ? void 0 : _a5._nonReactive.displayPendingPromise;
  if (n._forcePending) throw (_b2 = s.getMatch(n.id)) == null ? void 0 : _b2._nonReactive.minPendingPromise;
  if (n.status === "pending") {
    const c = o.options.pendingMinMs ?? s.options.defaultPendingMinMs;
    if (c) {
      const l = s.getMatch(n.id);
      if (l && !l._nonReactive.minPendingPromise) {
        const u = rt();
        l._nonReactive.minPendingPromise = u, setTimeout(() => {
          u.resolve(), l._nonReactive.minPendingPromise = void 0;
        }, c);
      }
    }
    throw (_c3 = s.getMatch(n.id)) == null ? void 0 : _c3._nonReactive.loadPromise;
  }
  if (n.status === "notFound") return Me(de(n.error)), wi(s, o, n.error);
  if (n.status === "redirected") throw Me(me(n.error)), (_d2 = s.getMatch(n.id)) == null ? void 0 : _d2._nonReactive.loadPromise;
  if (n.status === "error") throw n.error;
  return a;
}), Ka = L.memo(function() {
  const e = ne(), s = L.useContext(fs), n = Y({ select: (l) => {
    var _a5;
    return (_a5 = l.matches.find((u) => u.id === s)) == null ? void 0 : _a5.routeId;
  } }), r = e.routesById[n], i = Y({ select: (l) => {
    const h = l.matches.find((f) => f.id === s);
    return Me(h), h.globalNotFound;
  } }), o = Y({ select: (l) => {
    var _a5;
    const u = l.matches, h = u.findIndex((f) => f.id === s);
    return (_a5 = u[h + 1]) == null ? void 0 : _a5.id;
  } }), a = e.options.defaultPendingComponent ? A.jsx(e.options.defaultPendingComponent, {}) : null;
  if (i) return wi(e, r, void 0);
  if (!o) return null;
  const c = A.jsx(vi, { matchId: o });
  return n === ye ? A.jsx(L.Suspense, { fallback: a, children: c }) : c;
});
function ja() {
  const t = ne(), s = t.routesById[ye].options.pendingComponent ?? t.options.defaultPendingComponent, n = s ? A.jsx(s, {}) : null, r = typeof document < "u" && t.ssr ? Ze : L.Suspense, i = A.jsxs(r, { fallback: n, children: [A.jsx(Aa, {}), A.jsx(za, {})] });
  return t.options.InnerWrap ? A.jsx(t.options.InnerWrap, { children: i }) : i;
}
function za() {
  const t = ne(), e = Y({ select: (r) => {
    var _a5;
    return (_a5 = r.matches[0]) == null ? void 0 : _a5.id;
  } }), s = Y({ select: (r) => r.loadedAt }), n = e ? A.jsx(vi, { matchId: e }) : null;
  return A.jsx(fs.Provider, { value: e, children: t.options.disableGlobalCatchBoundary ? n : A.jsx(yn, { getResetKey: () => s, errorComponent: gn, onCatch: (r) => {
    un(false, r.message || r.toString());
  }, children: n }) });
}
const td = (t) => new $a(t);
class $a extends na {
  constructor(e) {
    super(e);
  }
}
typeof globalThis < "u" ? (globalThis.createFileRoute = rr, globalThis.createLazyFileRoute = ar) : typeof window < "u" && (window.createFileRoute = rr, window.createLazyFileRoute = ar);
function Na({ router: t, children: e, ...s }) {
  Object.keys(s).length > 0 && t.update({ ...t.options, ...s, context: { ...t.options.context, ...s.context } });
  const n = gi(), r = A.jsx(n.Provider, { value: t, children: e });
  return t.options.Wrap ? A.jsx(t.options.Wrap, { children: r }) : r;
}
function sd({ router: t, ...e }) {
  return A.jsx(Na, { router: t, ...e, children: A.jsx(ja, {}) });
}
function nd(t) {
  return Y({ select: (e) => e.location });
}
function Ua({ tag: t, attrs: e, children: s, nonce: n }) {
  switch (t) {
    case "title":
      return A.jsx("title", { ...e, suppressHydrationWarning: true, children: s });
    case "meta":
      return A.jsx("meta", { ...e, suppressHydrationWarning: true });
    case "link":
      return A.jsx("link", { ...e, nonce: n, suppressHydrationWarning: true });
    case "style":
      return A.jsx("style", { ...e, dangerouslySetInnerHTML: { __html: s }, nonce: n });
    case "script":
      return A.jsx(Va, { attrs: e, children: s });
    default:
      return null;
  }
}
function Va({ attrs: t, children: e }) {
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
    return A.jsx("script", { suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: "" }, ...n });
  }
}
const Wa = () => {
  var _a5;
  const t = ne(), e = (_a5 = t.options.ssr) == null ? void 0 : _a5.nonce, s = Y({ select: (c) => c.matches.map((l) => l.meta).filter(Boolean) }), n = L.useMemo(() => {
    const c = [], l = {};
    let u;
    for (let h = s.length - 1; h >= 0; h--) {
      const f = s[h];
      for (let p = f.length - 1; p >= 0; p--) {
        const d = f[p];
        if (d) if (d.title) u || (u = { tag: "title", children: d.title });
        else if ("script:ld+json" in d) try {
          const y = JSON.stringify(d["script:ld+json"]);
          c.push({ tag: "script", attrs: { type: "application/ld+json" }, children: So(y) });
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
    return u && c.push(u), e && c.push({ tag: "meta", attrs: { property: "csp-nonce", content: e } }), c.reverse(), c;
  }, [s, e]), r = Y({ select: (c) => {
    var _a6;
    const l = c.matches.map((f) => f.links).filter(Boolean).flat(1).map((f) => ({ tag: "link", attrs: { ...f, nonce: e } })), u = (_a6 = t.ssr) == null ? void 0 : _a6.manifest, h = c.matches.map((f) => {
      var _a7;
      return ((_a7 = u == null ? void 0 : u.routes[f.routeId]) == null ? void 0 : _a7.assets) ?? [];
    }).filter(Boolean).flat(1).filter((f) => f.tag === "link").map((f) => ({ tag: "link", attrs: { ...f.attrs, suppressHydrationWarning: true, nonce: e } }));
    return [...l, ...h];
  }, structuralSharing: true }), i = Y({ select: (c) => {
    const l = [];
    return c.matches.map((u) => t.looseRoutesById[u.routeId]).forEach((u) => {
      var _a6, _b2, _c3, _d2;
      return (_d2 = (_c3 = (_b2 = (_a6 = t.ssr) == null ? void 0 : _a6.manifest) == null ? void 0 : _b2.routes[u.id]) == null ? void 0 : _c3.preloads) == null ? void 0 : _d2.filter(Boolean).forEach((h) => {
        l.push({ tag: "link", attrs: { rel: "modulepreload", href: h, nonce: e } });
      });
    }), l;
  }, structuralSharing: true }), o = Y({ select: (c) => c.matches.map((l) => l.styles).flat(1).filter(Boolean).map(({ children: l, ...u }) => ({ tag: "style", attrs: { ...u, nonce: e }, children: l })), structuralSharing: true }), a = Y({ select: (c) => c.matches.map((l) => l.headScripts).flat(1).filter(Boolean).map(({ children: l, ...u }) => ({ tag: "script", attrs: { ...u, nonce: e }, children: l })), structuralSharing: true });
  return qa([...n, ...i, ...r, ...o, ...a], (c) => JSON.stringify(c));
};
function qa(t, e) {
  const s = /* @__PURE__ */ new Set();
  return t.filter((n) => {
    const r = e(n);
    return s.has(r) ? false : (s.add(r), true);
  });
}
function rd() {
  var _a5;
  const t = Wa(), s = (_a5 = ne().options.ssr) == null ? void 0 : _a5.nonce;
  return A.jsx(A.Fragment, { children: t.map((n) => L.createElement(Ua, { ...n, key: `tsr-meta-${JSON.stringify(n)}`, nonce: s })) });
}
var ps = class {
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
}, Ha = { setTimeout: (t, e) => setTimeout(t, e), clearTimeout: (t) => clearTimeout(t), setInterval: (t, e) => setInterval(t, e), clearInterval: (t) => clearInterval(t) }, Ga = (_a2 = class {
  constructor() {
    __privateAdd(this, _e2, Ha);
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
}, _e2 = new WeakMap(), _t2 = new WeakMap(), _a2), Us = new Ga();
function Qa(t) {
  setTimeout(t, 0);
}
var ys = typeof window > "u" || "Deno" in globalThis;
function be() {
}
function Ja(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ya(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Xa(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Vs(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Za(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function lr(t, e) {
  const { type: s = "all", exact: n, fetchStatus: r, predicate: i, queryKey: o, stale: a } = t;
  if (o) {
    if (n) {
      if (e.queryHash !== bn(o, e.options)) return false;
    } else if (!It(e.queryKey, o)) return false;
  }
  if (s !== "all") {
    const c = e.isActive();
    if (s === "active" && !c || s === "inactive" && c) return false;
  }
  return !(typeof a == "boolean" && e.isStale() !== a || r && r !== e.state.fetchStatus || i && !i(e));
}
function ur(t, e) {
  const { exact: s, status: n, predicate: r, mutationKey: i } = t;
  if (i) {
    if (!e.options.mutationKey) return false;
    if (s) {
      if (kt(e.options.mutationKey) !== kt(i)) return false;
    } else if (!It(e.options.mutationKey, i)) return false;
  }
  return !(n && e.state.status !== n || r && !r(e));
}
function bn(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || kt)(t);
}
function kt(t) {
  return JSON.stringify(t, (e, s) => Ws(s) ? Object.keys(s).sort().reduce((n, r) => (n[r] = s[r], n), {}) : s);
}
function It(t, e) {
  return t === e ? true : typeof t != typeof e ? false : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every((s) => It(t[s], e[s])) : false;
}
var ec = Object.prototype.hasOwnProperty;
function Si(t, e, s = 0) {
  if (t === e) return t;
  if (s > 500) return e;
  const n = hr(t) && hr(e);
  if (!n && !(Ws(t) && Ws(e))) return e;
  const i = (n ? t : Object.keys(t)).length, o = n ? e : Object.keys(e), a = o.length, c = n ? new Array(a) : {};
  let l = 0;
  for (let u = 0; u < a; u++) {
    const h = n ? u : o[u], f = t[h], p = e[h];
    if (f === p) {
      c[h] = f, (n ? u < i : ec.call(t, h)) && l++;
      continue;
    }
    if (f === null || p === null || typeof f != "object" || typeof p != "object") {
      c[h] = p;
      continue;
    }
    const d = Si(f, p, s + 1);
    c[h] = d, d === f && l++;
  }
  return i === a && l === i ? t : c;
}
function hr(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Ws(t) {
  if (!fr(t)) return false;
  const e = t.constructor;
  if (e === void 0) return true;
  const s = e.prototype;
  return !(!fr(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function fr(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function tc(t) {
  return new Promise((e) => {
    Us.setTimeout(e, t);
  });
}
function sc(t, e, s) {
  return typeof s.structuralSharing == "function" ? s.structuralSharing(t, e) : s.structuralSharing !== false ? Si(t, e) : e;
}
function nc(t, e, s = 0) {
  const n = [...t, e];
  return s && n.length > s ? n.slice(1) : n;
}
function rc(t, e, s = 0) {
  const n = [e, ...t];
  return s && n.length > s ? n.slice(0, -1) : n;
}
var xn = /* @__PURE__ */ Symbol();
function bi(t, e) {
  return !t.queryFn && (e == null ? void 0 : e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === xn ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
}
function ic(t, e, s) {
  let n = false, r;
  return Object.defineProperty(t, "signal", { enumerable: true, get: () => (r ?? (r = e()), n || (n = true, r.aborted ? s() : r.addEventListener("abort", s, { once: true })), r) }), t;
}
var oc = (_b = class extends ps {
  constructor() {
    super();
    __privateAdd(this, _e3);
    __privateAdd(this, _t3);
    __privateAdd(this, _s2);
    __privateSet(this, _s2, (t) => {
      if (!ys && window.addEventListener) {
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
}, _e3 = new WeakMap(), _t3 = new WeakMap(), _s2 = new WeakMap(), _b), xi = new oc();
function ac() {
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
var cc = Qa;
function lc() {
  let t = [], e = 0, s = (a) => {
    a();
  }, n = (a) => {
    a();
  }, r = cc;
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
var ie = lc(), uc = (_c2 = class extends ps {
  constructor() {
    super();
    __privateAdd(this, _e4, true);
    __privateAdd(this, _t4);
    __privateAdd(this, _s3);
    __privateSet(this, _s3, (t) => {
      if (!ys && window.addEventListener) {
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
}, _e4 = new WeakMap(), _t4 = new WeakMap(), _s3 = new WeakMap(), _c2), ss = new uc();
function hc(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Pi(t) {
  return (t ?? "online") === "online" ? ss.isOnline() : true;
}
var qs = class extends Error {
  constructor(t) {
    super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function Ri(t) {
  let e = false, s = 0, n;
  const r = ac(), i = () => r.status !== "pending", o = (y) => {
    var _a5;
    if (!i()) {
      const g = new qs(y);
      f(g), (_a5 = t.onCancel) == null ? void 0 : _a5.call(t, g);
    }
  }, a = () => {
    e = true;
  }, c = () => {
    e = false;
  }, l = () => xi.isFocused() && (t.networkMode === "always" || ss.isOnline()) && t.canRun(), u = () => Pi(t.networkMode) && t.canRun(), h = (y) => {
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
    } catch (m) {
      y = Promise.reject(m);
    }
    Promise.resolve(y).then(h).catch((m) => {
      var _a5;
      if (i()) return;
      const S = t.retry ?? (ys ? 0 : 3), b = t.retryDelay ?? hc, v = typeof b == "function" ? b(s, m) : b, E = S === true || typeof S == "number" && s < S || typeof S == "function" && S(s, m);
      if (e || !E) {
        f(m);
        return;
      }
      s++, (_a5 = t.onFail) == null ? void 0 : _a5.call(t, s, m), tc(v).then(() => l() ? void 0 : p()).then(() => {
        e ? f(m) : d();
      });
    });
  };
  return { promise: r, status: () => r.status, cancel: o, continue: () => (n == null ? void 0 : n(), r), cancelRetry: a, continueRetry: c, canStart: u, start: () => (u() ? d() : p().then(d), r) };
}
var Ci = (_d = class {
  constructor() {
    __privateAdd(this, _e5);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Ya(this.gcTime) && __privateSet(this, _e5, Us.setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(this.gcTime || 0, t ?? (ys ? 1 / 0 : 300 * 1e3));
  }
  clearGcTimeout() {
    __privateGet(this, _e5) && (Us.clearTimeout(__privateGet(this, _e5)), __privateSet(this, _e5, void 0));
  }
}, _e5 = new WeakMap(), _d), fc = (_e7 = class extends Ci {
  constructor(t) {
    super();
    __privateAdd(this, _fc_instances);
    __privateAdd(this, _e6);
    __privateAdd(this, _t5);
    __privateAdd(this, _s4);
    __privateAdd(this, _n2);
    __privateAdd(this, _r2);
    __privateAdd(this, _o2);
    __privateAdd(this, _a3);
    __privateSet(this, _a3, false), __privateSet(this, _o2, t.defaultOptions), this.setOptions(t.options), this.observers = [], __privateSet(this, _n2, t.client), __privateSet(this, _s4, __privateGet(this, _n2).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, __privateSet(this, _e6, pr(this.options)), this.state = t.state ?? __privateGet(this, _e6), this.scheduleGc();
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
      const e = pr(this.options);
      e.data !== void 0 && (this.setState(dr(e.data, e.dataUpdatedAt)), __privateSet(this, _e6, e));
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && __privateGet(this, _s4).remove(this);
  }
  setData(t, e) {
    const s = sc(this.state.data, t, this.options);
    return __privateMethod(this, _fc_instances, i_fn).call(this, { data: s, type: "success", dataUpdatedAt: e == null ? void 0 : e.updatedAt, manual: e == null ? void 0 : e.manual }), s;
  }
  setState(t, e) {
    __privateMethod(this, _fc_instances, i_fn).call(this, { type: "setState", state: t, setStateOptions: e });
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
    return this.observers.some((t) => Za(t.options.enabled, this) !== false);
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === xn || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some((t) => Vs(t.options.staleTime, this) === "static") : false;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some((t) => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(t = 0) {
    return this.state.data === void 0 ? true : t === "static" ? false : this.state.isInvalidated ? true : !Xa(this.state.dataUpdatedAt, t);
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
    this.state.isInvalidated || __privateMethod(this, _fc_instances, i_fn).call(this, { type: "invalidate" });
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
      const a = bi(this.options, e), l = (() => {
        const u = { client: __privateGet(this, _n2), queryKey: this.queryKey, meta: this.meta };
        return n(u), u;
      })();
      return __privateSet(this, _a3, false), this.options.persister ? this.options.persister(a, l, this) : a(l);
    }, o = (() => {
      const a = { fetchOptions: e, options: this.options, queryKey: this.queryKey, client: __privateGet(this, _n2), state: this.state, fetchFn: r };
      return n(a), a;
    })();
    (_b2 = this.options.behavior) == null ? void 0 : _b2.onFetch(o, this), __privateSet(this, _t5, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_c3 = o.fetchOptions) == null ? void 0 : _c3.meta)) && __privateMethod(this, _fc_instances, i_fn).call(this, { type: "fetch", meta: (_d2 = o.fetchOptions) == null ? void 0 : _d2.meta }), __privateSet(this, _r2, Ri({ initialPromise: e == null ? void 0 : e.initialPromise, fn: o.fetchFn, onCancel: (a) => {
      a instanceof qs && a.revert && this.setState({ ...__privateGet(this, _t5), fetchStatus: "idle" }), s.abort();
    }, onFail: (a, c) => {
      __privateMethod(this, _fc_instances, i_fn).call(this, { type: "failed", failureCount: a, error: c });
    }, onPause: () => {
      __privateMethod(this, _fc_instances, i_fn).call(this, { type: "pause" });
    }, onContinue: () => {
      __privateMethod(this, _fc_instances, i_fn).call(this, { type: "continue" });
    }, retry: o.options.retry, retryDelay: o.options.retryDelay, networkMode: o.options.networkMode, canRun: () => true }));
    try {
      const a = await __privateGet(this, _r2).start();
      if (a === void 0) throw new Error(`${this.queryHash} data is undefined`);
      return this.setData(a), (_f3 = (_e28 = __privateGet(this, _s4).config).onSuccess) == null ? void 0 : _f3.call(_e28, a, this), (_h3 = (_g2 = __privateGet(this, _s4).config).onSettled) == null ? void 0 : _h3.call(_g2, a, this.state.error, this), a;
    } catch (a) {
      if (a instanceof qs) {
        if (a.silent) return __privateGet(this, _r2).promise;
        if (a.revert) {
          if (this.state.data === void 0) throw a;
          return this.state.data;
        }
      }
      throw __privateMethod(this, _fc_instances, i_fn).call(this, { type: "error", error: a }), (_j = (_i4 = __privateGet(this, _s4).config).onError) == null ? void 0 : _j.call(_i4, a, this), (_l2 = (_k = __privateGet(this, _s4).config).onSettled) == null ? void 0 : _l2.call(_k, this.state.data, a, this), a;
    } finally {
      this.scheduleGc();
    }
  }
}, _e6 = new WeakMap(), _t5 = new WeakMap(), _s4 = new WeakMap(), _n2 = new WeakMap(), _r2 = new WeakMap(), _o2 = new WeakMap(), _a3 = new WeakMap(), _fc_instances = new WeakSet(), i_fn = function(t) {
  const e = (s) => {
    switch (t.type) {
      case "failed":
        return { ...s, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
      case "pause":
        return { ...s, fetchStatus: "paused" };
      case "continue":
        return { ...s, fetchStatus: "fetching" };
      case "fetch":
        return { ...s, ...dc(s.data, this.options), fetchMeta: t.meta ?? null };
      case "success":
        const n = { ...s, ...dr(t.data, t.dataUpdatedAt), dataUpdateCount: s.dataUpdateCount + 1, ...!t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null } };
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
function dc(t, e) {
  return { fetchFailureCount: 0, fetchFailureReason: null, fetchStatus: Pi(e.networkMode) ? "fetching" : "paused", ...t === void 0 && { error: null, status: "pending" } };
}
function dr(t, e) {
  return { data: t, dataUpdatedAt: e ?? Date.now(), error: null, isInvalidated: false, status: "success" };
}
function pr(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, s = e !== void 0, n = s ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return { data: e, dataUpdateCount: 0, dataUpdatedAt: s ? n ?? Date.now() : 0, error: null, errorUpdateCount: 0, errorUpdatedAt: 0, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: null, isInvalidated: false, status: s ? "success" : "pending", fetchStatus: "idle" };
}
function yr(t) {
  return { onFetch: (e, s) => {
    var _a5, _b2, _c3, _d2, _e28;
    const n = e.options, r = (_c3 = (_b2 = (_a5 = e.fetchOptions) == null ? void 0 : _a5.meta) == null ? void 0 : _b2.fetchMore) == null ? void 0 : _c3.direction, i = ((_d2 = e.state.data) == null ? void 0 : _d2.pages) || [], o = ((_e28 = e.state.data) == null ? void 0 : _e28.pageParams) || [];
    let a = { pages: [], pageParams: [] }, c = 0;
    const l = async () => {
      let u = false;
      const h = (d) => {
        ic(d, () => e.signal, () => u = true);
      }, f = bi(e.options, e.fetchOptions), p = async (d, y, g) => {
        if (u) return Promise.reject();
        if (y == null && d.pages.length) return Promise.resolve(d);
        const S = (() => {
          const M = { client: e.client, queryKey: e.queryKey, pageParam: y, direction: g ? "backward" : "forward", meta: e.options.meta };
          return h(M), M;
        })(), b = await f(S), { maxPages: v } = e.options, E = g ? rc : nc;
        return { pages: E(d.pages, b, v), pageParams: E(d.pageParams, y, v) };
      };
      if (r && i.length) {
        const d = r === "backward", y = d ? pc : gr, g = { pages: i, pageParams: o }, m = y(n, g);
        a = await p(g, m, d);
      } else {
        const d = t ?? i.length;
        do {
          const y = c === 0 ? o[0] ?? n.initialPageParam : gr(n, a);
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
function gr(t, { pages: e, pageParams: s }) {
  const n = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(e[n], e, s[n], s) : void 0;
}
function pc(t, { pages: e, pageParams: s }) {
  var _a5;
  return e.length > 0 ? (_a5 = t.getPreviousPageParam) == null ? void 0 : _a5.call(t, e[0], e, s[0], s) : void 0;
}
var yc = (_f2 = class extends Ci {
  constructor(t) {
    super();
    __privateAdd(this, _yc_instances);
    __privateAdd(this, _e8);
    __privateAdd(this, _t6);
    __privateAdd(this, _s5);
    __privateAdd(this, _n3);
    __privateSet(this, _e8, t.client), this.mutationId = t.mutationId, __privateSet(this, _s5, t.mutationCache), __privateSet(this, _t6, []), this.state = t.state || gc(), this.setOptions(t.options), this.scheduleGc();
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
      __privateMethod(this, _yc_instances, r_fn).call(this, { type: "continue" });
    }, s = { client: __privateGet(this, _e8), meta: this.options.meta, mutationKey: this.options.mutationKey };
    __privateSet(this, _n3, Ri({ fn: () => this.options.mutationFn ? this.options.mutationFn(t, s) : Promise.reject(new Error("No mutationFn found")), onFail: (i, o) => {
      __privateMethod(this, _yc_instances, r_fn).call(this, { type: "failed", failureCount: i, error: o });
    }, onPause: () => {
      __privateMethod(this, _yc_instances, r_fn).call(this, { type: "pause" });
    }, onContinue: e, retry: this.options.retry ?? 0, retryDelay: this.options.retryDelay, networkMode: this.options.networkMode, canRun: () => __privateGet(this, _s5).canRun(this) }));
    const n = this.state.status === "pending", r = !__privateGet(this, _n3).canStart();
    try {
      if (n) e();
      else {
        __privateMethod(this, _yc_instances, r_fn).call(this, { type: "pending", variables: t, isPaused: r }), __privateGet(this, _s5).config.onMutate && await __privateGet(this, _s5).config.onMutate(t, this, s);
        const o = await ((_b2 = (_a5 = this.options).onMutate) == null ? void 0 : _b2.call(_a5, t, s));
        o !== this.state.context && __privateMethod(this, _yc_instances, r_fn).call(this, { type: "pending", context: o, variables: t, isPaused: r });
      }
      const i = await __privateGet(this, _n3).start();
      return await ((_d2 = (_c3 = __privateGet(this, _s5).config).onSuccess) == null ? void 0 : _d2.call(_c3, i, t, this.state.context, this, s)), await ((_f3 = (_e28 = this.options).onSuccess) == null ? void 0 : _f3.call(_e28, i, t, this.state.context, s)), await ((_h3 = (_g2 = __privateGet(this, _s5).config).onSettled) == null ? void 0 : _h3.call(_g2, i, null, this.state.variables, this.state.context, this, s)), await ((_j = (_i4 = this.options).onSettled) == null ? void 0 : _j.call(_i4, i, null, t, this.state.context, s)), __privateMethod(this, _yc_instances, r_fn).call(this, { type: "success", data: i }), i;
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
      throw __privateMethod(this, _yc_instances, r_fn).call(this, { type: "error", error: i }), i;
    } finally {
      __privateGet(this, _s5).runNext(this);
    }
  }
}, _e8 = new WeakMap(), _t6 = new WeakMap(), _s5 = new WeakMap(), _n3 = new WeakMap(), _yc_instances = new WeakSet(), r_fn = function(t) {
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
function gc() {
  return { context: void 0, data: void 0, error: null, failureCount: 0, failureReason: null, isPaused: false, status: "idle", variables: void 0, submittedAt: 0 };
}
var mc = (_g = class extends ps {
  constructor(t = {}) {
    super();
    __privateAdd(this, _e9);
    __privateAdd(this, _t7);
    __privateAdd(this, _s6);
    this.config = t, __privateSet(this, _e9, /* @__PURE__ */ new Set()), __privateSet(this, _t7, /* @__PURE__ */ new Map()), __privateSet(this, _s6, 0);
  }
  build(t, e, s) {
    const n = new yc({ client: t, mutationCache: this, mutationId: ++__privateWrapper(this, _s6)._, options: t.defaultMutationOptions(e), state: s });
    return this.add(n), n;
  }
  add(t) {
    __privateGet(this, _e9).add(t);
    const e = jt(t);
    if (typeof e == "string") {
      const s = __privateGet(this, _t7).get(e);
      s ? s.push(t) : __privateGet(this, _t7).set(e, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (__privateGet(this, _e9).delete(t)) {
      const e = jt(t);
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
    const e = jt(t);
    if (typeof e == "string") {
      const n = (_a5 = __privateGet(this, _t7).get(e)) == null ? void 0 : _a5.find((r) => r.state.status === "pending");
      return !n || n === t;
    } else return true;
  }
  runNext(t) {
    var _a5, _b2;
    const e = jt(t);
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
    return this.getAll().find((s) => ur(e, s));
  }
  findAll(t = {}) {
    return this.getAll().filter((e) => ur(t, e));
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
function jt(t) {
  var _a5;
  return (_a5 = t.options.scope) == null ? void 0 : _a5.id;
}
var wc = (_h2 = class extends ps {
  constructor(t = {}) {
    super();
    __privateAdd(this, _e10);
    this.config = t, __privateSet(this, _e10, /* @__PURE__ */ new Map());
  }
  build(t, e, s) {
    const n = e.queryKey, r = e.queryHash ?? bn(n, e);
    let i = this.get(r);
    return i || (i = new fc({ client: t, queryKey: n, queryHash: r, options: t.defaultQueryOptions(e), state: s, defaultOptions: t.getQueryDefaults(n) }), this.add(i)), i;
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
    return this.getAll().find((s) => lr(e, s));
  }
  findAll(t = {}) {
    const e = this.getAll();
    return Object.keys(t).length > 0 ? e.filter((s) => lr(t, s)) : e;
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
}, _e10 = new WeakMap(), _h2), id = (_i3 = class {
  constructor(t = {}) {
    __privateAdd(this, _e11);
    __privateAdd(this, _t8);
    __privateAdd(this, _s7);
    __privateAdd(this, _n4);
    __privateAdd(this, _r3);
    __privateAdd(this, _o3);
    __privateAdd(this, _a4);
    __privateAdd(this, _i2);
    __privateSet(this, _e11, t.queryCache || new wc()), __privateSet(this, _t8, t.mutationCache || new mc()), __privateSet(this, _s7, t.defaultOptions || {}), __privateSet(this, _n4, /* @__PURE__ */ new Map()), __privateSet(this, _r3, /* @__PURE__ */ new Map()), __privateSet(this, _o3, 0);
  }
  mount() {
    __privateWrapper(this, _o3)._++, __privateGet(this, _o3) === 1 && (__privateSet(this, _a4, xi.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), __privateGet(this, _e11).onFocus());
    })), __privateSet(this, _i2, ss.subscribe(async (t) => {
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
    return n === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && s.isStaleByTime(Vs(e.staleTime, s)) && this.prefetchQuery(e), Promise.resolve(n));
  }
  getQueriesData(t) {
    return __privateGet(this, _e11).findAll(t).map(({ queryKey: e, state: s }) => {
      const n = s.data;
      return [e, n];
    });
  }
  setQueryData(t, e, s) {
    var _a5;
    const n = this.defaultQueryOptions({ queryKey: t }), i = (_a5 = __privateGet(this, _e11).get(n.queryHash)) == null ? void 0 : _a5.state.data, o = Ja(e, i);
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
    return s.isStaleByTime(Vs(e.staleTime, s)) ? s.fetch(e) : Promise.resolve(s.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(be).catch(be);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = yr(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(be).catch(be);
  }
  ensureInfiniteQueryData(t) {
    return t.behavior = yr(t.pages), this.ensureQueryData(t);
  }
  resumePausedMutations() {
    return ss.isOnline() ? __privateGet(this, _t8).resumePausedMutations() : Promise.resolve();
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
    __privateGet(this, _n4).set(kt(t), { queryKey: t, defaultOptions: e });
  }
  getQueryDefaults(t) {
    const e = [...__privateGet(this, _n4).values()], s = {};
    return e.forEach((n) => {
      It(t, n.queryKey) && Object.assign(s, n.defaultOptions);
    }), s;
  }
  setMutationDefaults(t, e) {
    __privateGet(this, _r3).set(kt(t), { mutationKey: t, defaultOptions: e });
  }
  getMutationDefaults(t) {
    const e = [...__privateGet(this, _r3).values()], s = {};
    return e.forEach((n) => {
      It(t, n.mutationKey) && Object.assign(s, n.defaultOptions);
    }), s;
  }
  defaultQueryOptions(t) {
    if (t._defaulted) return t;
    const e = { ...__privateGet(this, _s7).queries, ...this.getQueryDefaults(t.queryKey), ...t, _defaulted: true };
    return e.queryHash || (e.queryHash = bn(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === xn && (e.enabled = false), e;
  }
  defaultMutationOptions(t) {
    return (t == null ? void 0 : t._defaulted) ? t : { ...__privateGet(this, _s7).mutations, ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey), ...t, _defaulted: true };
  }
  clear() {
    __privateGet(this, _e11).clear(), __privateGet(this, _t8).clear();
  }
}, _e11 = new WeakMap(), _t8 = new WeakMap(), _s7 = new WeakMap(), _n4 = new WeakMap(), _r3 = new WeakMap(), _o3 = new WeakMap(), _a4 = new WeakMap(), _i2 = new WeakMap(), _i3), vc = L.createContext(void 0), od = ({ client: t, children: e }) => (L.useEffect(() => (t.mount(), () => {
  t.unmount();
}), [t]), A.jsx(vc.Provider, { value: t, children: e }));
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
class _i extends at {
  constructor(e, s) {
    super(), this.name = e, this.args = s, this.type = "agg";
  }
}
function Et(t) {
  return t instanceof _i || t instanceof we || t instanceof ce || t instanceof he;
}
function Pn(t) {
  return typeof t == "object" && "expression" in t ? t.expression : t;
}
function mr(t) {
  return typeof t == "object" && "expression" in t ? t.expression : t;
}
function wr(t) {
  return typeof t == "object" && "expression" in t && t.residual === true;
}
function Sc(t) {
  return { expression: t, residual: true };
}
function bc(t, e) {
  if (t.from.alias === e) return t.from;
  for (const s of t.join || []) if (s.from.alias === e) return s.from;
}
function Ot(t, e, s) {
  if (e.path.length !== 0) {
    if (e.path.length === 1) {
      const n = e.path[0];
      if (t.select) {
        const r = t.select[n];
        if (r && r.type === "ref") return Ot(t, r, s);
      }
      return { collection: s, path: [n] };
    }
    if (e.path.length > 1) {
      const [n, ...r] = e.path, i = bc(t, n);
      return i ? i.type === "queryRef" ? Ot(i.query, new ce(r), s) : { collection: i.collection, path: r } : void 0;
    }
  }
}
class ve extends Error {
  constructor(e) {
    super(e), this.name = "TanStackDBError";
  }
}
class vr extends ve {
  constructor(e, s, n) {
    const r = `${e === "insert" ? "Insert" : "Update"} validation failed: ${s.map((i) => `
- ${i.message} - path: ${i.path}`).join("")}`;
    super(n || r), this.name = "SchemaValidationError", this.type = e, this.issues = s;
  }
}
class Lt extends ve {
  constructor(e) {
    super(e), this.name = "CollectionConfigurationError";
  }
}
class xc extends Lt {
  constructor() {
    super("Collection requires a config");
  }
}
class Pc extends Lt {
  constructor() {
    super("Collection requires a sync config");
  }
}
class Rc extends Lt {
  constructor() {
    super("Schema must implement the standard-schema interface");
  }
}
class Sr extends Lt {
  constructor() {
    super("Schema validation must be synchronous");
  }
}
class Ft extends ve {
  constructor(e) {
    super(e), this.name = "CollectionStateError";
  }
}
class Cc extends Ft {
  constructor(e, s) {
    super(`Cannot perform ${e} on collection "${s}" - collection is in error state. Try calling cleanup() and restarting the collection.`);
  }
}
class _c extends Ft {
  constructor(e, s, n) {
    super(`Invalid collection status transition from "${e}" to "${s}" for collection "${n}"`);
  }
}
class kc extends Ft {
  constructor() {
    super("Collection is in error state");
  }
}
class Ic extends Ft {
  constructor() {
    super("Active subscribers count is negative - this should never happen");
  }
}
class Ce extends ve {
  constructor(e) {
    super(e), this.name = "CollectionOperationError";
  }
}
class Ec extends Ce {
  constructor(e) {
    super(`An object was created without a defined key: ${JSON.stringify(e)}`);
  }
}
class Oc extends Ce {
  constructor(e, s) {
    const n = e === null ? "null" : typeof e;
    super(`getKey returned an invalid key type. Expected string or number, but got ${n}: ${JSON.stringify(e)}. Item: ${JSON.stringify(s)}`);
  }
}
class Mc extends Ce {
  constructor(e) {
    super(`Cannot insert document with ID "${e}" because it already exists in the collection`);
  }
}
class Tc extends Ce {
  constructor(e, s, n) {
    const r = `Cannot insert document with key "${e}" from sync because it already exists in the collection "${s}"`;
    (n == null ? void 0 : n.hasCustomGetKey) && n.hasDistinct ? super(`${r}. This collection uses a custom getKey with .distinct(). The .distinct() operator deduplicates by the ENTIRE selected object (standard SQL behavior), but your custom getKey extracts only a subset of fields. This causes multiple distinct rows (with different values in non-key fields) to receive the same key. To fix this, either: (1) ensure your SELECT only includes fields that uniquely identify each row, (2) use .groupBy() with min()/max() aggregates to select one value per group, or (3) remove the custom getKey to use the default key behavior.`) : (n == null ? void 0 : n.hasCustomGetKey) && n.hasJoins ? super(`${r}. This collection uses a custom getKey with joined queries. Joined queries can produce multiple rows with the same key when relationships are not 1:1. Consider: (1) using a composite key in your getKey function (e.g., \`\${item.key1}-\${item.key2}\`), (2) ensuring your join produces unique rows per key, or (3) removing the custom getKey to use the default composite key behavior.`) : super(r);
  }
}
class Ac extends Ce {
  constructor() {
    super("The first argument to update is missing");
  }
}
class Lc extends Ce {
  constructor() {
    super("No keys were passed to update");
  }
}
class Fc extends Ce {
  constructor(e) {
    super(`The key "${e}" was passed to update but an object for this key was not found in the collection`);
  }
}
class Dc extends Ce {
  constructor(e, s) {
    super(`Updating the key of an item is not allowed. Original key: "${e}", Attempted new key: "${s}". Please delete the old item and create a new one if a key change is necessary.`);
  }
}
class Bc extends Ce {
  constructor() {
    super("No keys were passed to delete");
  }
}
class Kc extends Ce {
  constructor(e) {
    super(`Collection.delete was called with key '${e}' but there is no item in the collection with this key`);
  }
}
class Rn extends ve {
  constructor(e) {
    super(e), this.name = "MissingHandlerError";
  }
}
class jc extends Rn {
  constructor() {
    super("Collection.insert called directly (not within an explicit transaction) but no 'onInsert' handler is configured.");
  }
}
class zc extends Rn {
  constructor() {
    super("Collection.update called directly (not within an explicit transaction) but no 'onUpdate' handler is configured.");
  }
}
class $c extends Rn {
  constructor() {
    super("Collection.delete called directly (not within an explicit transaction) but no 'onDelete' handler is configured.");
  }
}
class $e extends ve {
  constructor(e) {
    super(e), this.name = "TransactionError";
  }
}
class Nc extends $e {
  constructor() {
    super("mutationFn is required when creating a transaction");
  }
}
class Uc extends $e {
  constructor() {
    super("You can no longer call .mutate() as the transaction is no longer pending");
  }
}
class Vc extends $e {
  constructor() {
    super("You can no longer call .rollback() as the transaction is already completed");
  }
}
class Wc extends $e {
  constructor() {
    super("You can no longer call .commit() as the transaction is no longer pending");
  }
}
class br extends $e {
  constructor() {
    super("No pending sync transaction to write to");
  }
}
class xr extends $e {
  constructor() {
    super("The pending sync transaction is already committed, you can't still write to it.");
  }
}
class qc extends $e {
  constructor() {
    super("No pending sync transaction to commit");
  }
}
class Hc extends $e {
  constructor() {
    super("The pending sync transaction is already committed, you can't commit it again.");
  }
}
class Je extends ve {
  constructor(e) {
    super(e), this.name = "QueryBuilderError";
  }
}
class Gc extends Je {
  constructor(e) {
    super(`Only one source is allowed in the ${e}`);
  }
}
class Qc extends Je {
  constructor(e) {
    super(`A sub query passed to a ${e} must have a from clause itself`);
  }
}
class Jc extends Je {
  constructor(e) {
    super(`Invalid source for live query: The value provided for alias "${e}" is not a Collection or subquery. Live queries only accept Collection instances or subqueries. Please ensure you're passing a valid Collection or QueryBuilder, not a plain array or other data type.`);
  }
}
class zt extends Je {
  constructor(e, s) {
    super(`Invalid source for ${e}: Expected an object with a single key-value pair like { alias: collection }. For example: .from({ todos: todosCollection }). Got: ${s}`);
  }
}
class Yc extends Je {
  constructor() {
    super("Join condition must be an equality expression");
  }
}
class Xc extends Je {
  constructor() {
    super("Query must have a from clause");
  }
}
class Pr extends Je {
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
class Zc extends pe {
  constructor() {
    super("DISTINCT requires a SELECT clause.");
  }
}
class el extends pe {
  constructor() {
    super("HAVING clause requires GROUP BY clause");
  }
}
class tl extends pe {
  constructor() {
    super("LIMIT and OFFSET require an ORDER BY clause to ensure deterministic results");
  }
}
class ki extends pe {
  constructor(e, s, n) {
    const r = s ? `alias "${e}" (collection "${s}")` : `collection "${e}"`, i = (n == null ? void 0 : n.length) ? `. Available keys: ${n.join(", ")}` : "";
    super(`Input for ${r} not found in inputs map${i}`);
  }
}
class sl extends pe {
  constructor(e, s) {
    super(`Subquery uses alias "${e}" which is already used in the parent query. Each alias must be unique across parent and subquery contexts. Parent query aliases: ${s.join(", ")}. Please rename "${e}" in either the parent query or subquery to avoid conflicts.`);
  }
}
class nl extends pe {
  constructor(e) {
    super(`Unsupported FROM type: ${e}`);
  }
}
class rl extends pe {
  constructor(e) {
    super(`Unknown expression type: ${e}`);
  }
}
class il extends pe {
  constructor() {
    super("Reference path cannot be empty");
  }
}
class ol extends pe {
  constructor(e) {
    super(`Unknown function: ${e}`);
  }
}
class Rr extends pe {
  constructor(e) {
    super(`Collection "${e}" not found during compilation of join`);
  }
}
class Ye extends ve {
  constructor(e) {
    super(e), this.name = "JoinError";
  }
}
class al extends Ye {
  constructor(e) {
    super(`Unsupported join type: ${e}`);
  }
}
class cl extends Ye {
  constructor(e) {
    super(`Invalid join condition: both expressions refer to the same source "${e}"`);
  }
}
class ll extends Ye {
  constructor() {
    super("Invalid join condition: expressions must reference source aliases");
  }
}
class ul extends Ye {
  constructor(e) {
    super(`Invalid join condition: left expression refers to an unavailable source "${e}"`);
  }
}
class hl extends Ye {
  constructor(e) {
    super(`Invalid join condition: right expression does not refer to the joined source "${e}"`);
  }
}
class fl extends Ye {
  constructor() {
    super("Invalid join condition");
  }
}
class dl extends Ye {
  constructor(e) {
    super(`Unsupported join source type: ${e}`);
  }
}
class gs extends ve {
  constructor(e) {
    super(e), this.name = "GroupByError";
  }
}
class pl extends gs {
  constructor(e) {
    super(`Non-aggregate expression '${e}' in SELECT must also appear in GROUP BY clause`);
  }
}
class yl extends gs {
  constructor(e) {
    super(`Unsupported aggregate function: ${e}`);
  }
}
class gl extends gs {
  constructor(e) {
    super(`Aggregate function in HAVING clause must also be in SELECT clause: ${e}`);
  }
}
class ml extends gs {
  constructor(e) {
    super(`Unknown expression type in HAVING clause: ${e}`);
  }
}
class Cr extends ve {
  constructor(e, s) {
    const n = s instanceof Error ? s.message : String(s);
    super(`Collection "${e}" sync cleanup function threw an error: ${n}`), this.name = "SyncCleanupError";
  }
}
class wl extends ve {
  constructor(e) {
    super(e), this.name = "QueryOptimizerError";
  }
}
class vl extends wl {
  constructor() {
    super("Cannot combine empty expression list");
  }
}
class Sl extends pe {
  constructor(e, s, n, r) {
    super(`Internal error: subscription for alias '${e}' (remapped from '${s}', collection '${n}') is missing in join pipeline. Available aliases: ${r.join(", ")}. This indicates a bug in alias tracking.`);
  }
}
class bl extends pe {
  constructor(e) {
    super(`Internal error: compiler returned aliases without inputs: ${e.join(", ")}. This indicates a bug in query compilation. Please report this issue.`);
  }
}
class xl extends pe {
  constructor() {
    super("setWindow() can only be called on collections with an ORDER BY clause. Add .orderBy() to your query to enable window movement.");
  }
}
const Ts = /* @__PURE__ */ new WeakMap();
let Pl = 1;
function _r(t) {
  if (Ts.has(t)) return Ts.get(t);
  const e = Pl++;
  return Ts.set(t, e), e;
}
const Cn = (t, e, s) => {
  const { nulls: n } = s;
  if (t == null && e == null) return 0;
  if (t == null) return n === "first" ? -1 : 1;
  if (e == null) return n === "first" ? 1 : -1;
  if (typeof t == "string" && typeof e == "string" && s.stringSort === "locale") return t.localeCompare(e, s.locale, s.localeOptions);
  if (Array.isArray(t) && Array.isArray(e)) {
    for (let o = 0; o < Math.min(t.length, e.length); o++) {
      const a = Cn(t[o], e[o], s);
      if (a !== 0) return a;
    }
    return t.length - e.length;
  }
  if (t instanceof Date && e instanceof Date) return t.getTime() - e.getTime();
  const r = typeof t == "object", i = typeof e == "object";
  if (r || i) {
    if (r && i) {
      const o = _r(t), a = _r(e);
      return o - a;
    }
    if (r) return 1;
    if (i) return -1;
  }
  return t < e ? -1 : t > e ? 1 : 0;
}, Rl = (t, e, s) => Cn(e, t, { ...s, nulls: s.nulls === "first" ? "last" : "first" });
function ns(t) {
  return (e, s) => t.direction === "asc" ? Cn(e, s, t) : Rl(e, s, t);
}
const Hs = ns({ direction: "asc", nulls: "first", stringSort: "locale" });
function Cl(t, e) {
  if (t.byteLength !== e.byteLength) return false;
  for (let s = 0; s < t.byteLength; s++) if (t[s] !== e[s]) return false;
  return true;
}
const _l = 128;
function Ie(t) {
  return t instanceof Date ? t.getTime() : (typeof Buffer < "u" && t instanceof Buffer || t instanceof Uint8Array) && t.byteLength <= _l ? `__u8__${Array.from(t).join(",")}` : t;
}
function kl(t, e) {
  if (t === e) return true;
  const s = typeof Buffer < "u" && t instanceof Buffer || t instanceof Uint8Array, n = typeof Buffer < "u" && e instanceof Buffer || e instanceof Uint8Array;
  return s && n ? Cl(t, e) : false;
}
function J(t) {
  return t == null;
}
function nt(t) {
  return t === true;
}
function fe(t, e = false) {
  return kn(t, e);
}
function _n(t) {
  return kn(t, true);
}
function kn(t, e) {
  switch (t.type) {
    case "val": {
      const s = t.value;
      return () => s;
    }
    case "ref":
      return e ? El(t) : Il(t);
    case "func":
      return Ol(t, e);
    default:
      throw new rl(t.type);
  }
}
function Il(t) {
  const [e, ...s] = t.path;
  if (!e) throw new il();
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
function El(t) {
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
function Ol(t, e) {
  const s = t.args.map((n) => kn(n, e));
  switch (t.name) {
    case "eq": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = Ie(n(i)), a = Ie(r(i));
        return J(o) || J(a) ? null : kl(o, a);
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
        return J(o) || J(a) ? null : kr(o, a, false);
      };
    }
    case "ilike": {
      const n = s[0], r = s[1];
      return (i) => {
        const o = n(i), a = r(i);
        return J(o) || J(a) ? null : kr(o, a, true);
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
      throw new ol(t.name);
  }
}
function kr(t, e, s) {
  if (typeof t != "string" || typeof e != "string") return false;
  const n = s ? t.toLowerCase() : t;
  let i = (s ? e.toLowerCase() : e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return i = i.replace(/%/g, ".*"), i = i.replace(/_/g, "."), new RegExp(`^${i}$`).test(n);
}
function Pe(t, e) {
  return qt(t, e, /* @__PURE__ */ new Map());
}
function qt(t, e, s) {
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
    const r = Array.from(t.entries()).every(([i, o]) => e.has(i) && qt(o, e.get(i), s));
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
  if (St(t) && St(e)) {
    const n = Gs(t), r = Gs(e);
    return n !== r ? false : typeof t.equals == "function" ? t.equals(e) : t.toString() === e.toString();
  }
  if (St(e)) return false;
  if (Array.isArray(t)) {
    if (!Array.isArray(e) || t.length !== e.length) return false;
    if (s.has(t)) return s.get(t) === e;
    s.set(t, e);
    const n = t.every((r, i) => qt(r, e[i], s));
    return s.delete(t), n;
  }
  if (Array.isArray(e)) return false;
  if (typeof t == "object") {
    if (s.has(t)) return s.get(t) === e;
    s.set(t, e);
    const n = Object.keys(t), r = Object.keys(e);
    if (n.length !== r.length) return s.delete(t), false;
    const i = n.every((o) => o in e && qt(t[o], e[o], s));
    return s.delete(t), i;
  }
  return false;
}
const Ml = ["Temporal.Duration", "Temporal.Instant", "Temporal.PlainDate", "Temporal.PlainDateTime", "Temporal.PlainMonthDay", "Temporal.PlainTime", "Temporal.PlainYearMonth", "Temporal.ZonedDateTime"];
function Gs(t) {
  return t[Symbol.toStringTag];
}
function St(t) {
  const e = Gs(t);
  return typeof e == "string" && Ml.includes(e);
}
const In = { direction: "asc", nulls: "first", stringSort: "locale" };
class Tl {
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
  takeReversed(e, s, n) {
    return this.originalIndex.take(e, s, n);
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
function Dt(t, e, s) {
  const n = s ?? { ...In, ...t.compareOptions };
  for (const r of t.indexes.values()) if (r.matchesField(e) && r.matchesCompareOptions(n)) return r.matchesDirection(n.direction) ? r : new Tl(r);
}
function Al(t) {
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
function Ll(t) {
  const e = /* @__PURE__ */ new Set();
  for (const s of t) for (const n of s) e.add(n);
  return e;
}
function Fl(t, e) {
  return En(t, e);
}
function En(t, e) {
  if (t.type === "func") switch (t.name) {
    case "eq":
    case "gt":
    case "gte":
    case "lt":
    case "lte":
      return Bl(t, e);
    case "and":
      return Kl(t, e);
    case "or":
      return jl(t, e);
    case "in":
      return zl(t, e);
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function Dl(t, e) {
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
        const h = a.path.join("."), f = c.value;
        s.has(h) || s.set(h, []), s.get(h).push({ operation: l, value: f });
      }
    }
  }
  for (const [n, r] of s) if (r.length >= 2) {
    const i = n.split("."), o = Dt(e, i);
    if (o && o.supports("gt") && o.supports("lt")) {
      let a, c, l = true, u = true;
      for (const { operation: f, value: p } of r) switch (f) {
        case "gt":
          (a === void 0 || p > a) && (a = p, l = false);
          break;
        case "gte":
          (a === void 0 || p > a) && (a = p, l = true);
          break;
        case "lt":
          (c === void 0 || p < c) && (c = p, u = false);
          break;
        case "lte":
          (c === void 0 || p < c) && (c = p, u = true);
          break;
      }
      return { canOptimize: true, matchingKeys: o.rangeQuery({ from: a, to: c, fromInclusive: l, toInclusive: u }) };
    }
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function Bl(t, e) {
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
    const a = r.path, c = Dt(e, a);
    if (c) {
      const l = i.value, u = o;
      return c.supports(u) ? { canOptimize: true, matchingKeys: c.lookup(u, l) } : { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
    }
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function Kl(t, e) {
  if (t.type !== "func" || t.args.length < 2) return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
  const s = Dl(t, e);
  if (s.canOptimize) return s;
  const n = [];
  for (const r of t.args) {
    const i = En(r, e);
    i.canOptimize && n.push(i);
  }
  if (n.length > 0) {
    const r = n.map((o) => o.matchingKeys);
    return { canOptimize: true, matchingKeys: Al(r) };
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function jl(t, e) {
  if (t.type !== "func" || t.args.length < 2) return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
  const s = [];
  for (const n of t.args) {
    const r = En(n, e);
    r.canOptimize && s.push(r);
  }
  if (s.length > 0) {
    const n = s.map((i) => i.matchingKeys);
    return { canOptimize: true, matchingKeys: Ll(n) };
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function zl(t, e) {
  if (t.type !== "func" || t.args.length !== 2) return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
  const s = t.args[0], n = t.args[1];
  if (s.type === "ref" && n.type === "val" && Array.isArray(n.value)) {
    const r = s.path, i = n.value, o = Dt(e, r);
    if (o) {
      if (o.supports("in")) return { canOptimize: true, matchingKeys: o.lookup("in", i) };
      if (o.supports("eq")) {
        const a = /* @__PURE__ */ new Set();
        for (const c of i) {
          const l = o.lookup("eq", c);
          for (const u of l) a.add(u);
        }
        return { canOptimize: true, matchingKeys: a };
      }
    }
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
class $l extends Map {
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
function Ls(t, e) {
  if (e.length <= As) t.push(...e);
  else for (let s = 0; s < e.length; s += As) {
    const n = e.slice(s, s + As);
    t.push(...n);
  }
}
function Nl(t, e, s) {
  let n = 0, r = t.length;
  for (; n < r; ) {
    const i = Math.floor((n + r) / 2), o = s(t[i], e);
    if (o < 0) n = i + 1;
    else if (o > 0) r = i;
    else return i;
  }
  return n;
}
class Ul {
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
const Fs = new Ul();
function Vl(t, e) {
  const [s, n] = t, [r, i] = e, o = [...$t(s, Math.min(n, r)), ...$t(Math.max(s, i), n)], a = [...$t(r, Math.min(i, s)), ...$t(Math.max(r, n), i)];
  return { onlyInA: o, onlyInB: a };
}
function $t(t, e) {
  const s = [];
  for (let n = t; n < e; n++) s.push(n);
  return s;
}
function rs(t, e) {
  return typeof t == typeof e ? t < e ? -1 : t > e ? 1 : 0 : typeof t == "string" ? -1 : 1;
}
function Ii(t) {
  return JSON.stringify(t, (e, s) => typeof s == "bigint" ? s.toString() : s instanceof Date ? s.toISOString() : s);
}
const Wl = ee(), ql = ee(), Hl = ee(), Gl = ee(), Ql = ee();
function ee() {
  return Math.random() * (2 ** 31 - 1) >>> 0;
}
const Ei = new ArrayBuffer(8), Jl = new DataView(Ei), Le = new Uint8Array(Ei);
class ms {
  constructor() {
    this.hash = Wl, this.length = 0, this.carry = 0, this.carryBytes = 0;
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
        this.update(Ql);
        const s = e.description;
        if (!s) return;
        for (let n = 0; n < s.length; n++) {
          const r = s.charCodeAt(n);
          this.writeByte(r & 255), this.writeByte(r >>> 8 & 255);
        }
        return;
      }
      case "string":
        this.update(ql);
        for (let s = 0; s < e.length; s++) {
          const n = e.charCodeAt(s);
          this.writeByte(n & 255), this.writeByte(n >>> 8 & 255);
        }
        return;
      case "number":
        Jl.setFloat64(0, e, true), this.writeByte(Le[0]), this.writeByte(Le[1]), this.writeByte(Le[2]), this.writeByte(Le[3]), this.writeByte(Le[4]), this.writeByte(Le[5]), this.writeByte(Le[6]), this.writeByte(Le[7]);
        return;
      case "bigint": {
        let s = e;
        for (s < 0n ? (s = -s, this.update(Gl)) : this.update(Hl); s > 0n; ) this.writeByte(Number(s & 0xffn)), s >>= 8n;
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
const Yl = ee(), Xl = ee(), Zl = ee(), eu = ee(), tu = ee(), su = ee(), nu = ee(), ru = ee(), iu = ee(), ou = ee(), au = ee(), cu = ee(), lu = 128, Mt = /* @__PURE__ */ new WeakMap();
function oe(t) {
  const e = new ms();
  return Oi(e, t), e.digest();
}
function uu(t) {
  const e = Mt.get(t);
  if (e !== void 0) return e;
  let s;
  if (t instanceof Date) s = hu(t);
  else if (typeof Buffer < "u" && t instanceof Buffer || t instanceof Uint8Array) if (t.byteLength <= lu) s = fu(t);
  else return Qs(t);
  else {
    if (t instanceof File) return Qs(t);
    {
      let n = t, r = ru;
      t instanceof Array && (r = iu), t instanceof Map && (r = ou, n = [...t.entries()]), t instanceof Set && (r = au, n = [...t.entries()]), s = du(n, r);
    }
  }
  return Mt.set(t, s), s;
}
function hu(t) {
  const e = new ms();
  return e.update(nu), e.update(t.getTime()), e.digest();
}
function fu(t) {
  const e = new ms();
  e.update(cu), e.update(t.byteLength);
  for (let s = 0; s < t.byteLength; s++) e.writeByte(t[s]);
  return e.digest();
}
function du(t, e) {
  const s = new ms();
  s.update(e);
  const n = Object.keys(t);
  n.sort(yu);
  for (const r of n) s.update(tu), s.update(r), Oi(s, t[r]);
  return s.digest();
}
function Oi(t, e) {
  if (e === null) {
    t.update(Zl);
    return;
  }
  switch (typeof e) {
    case "undefined":
      t.update(eu);
      return;
    case "boolean":
      t.update(e ? Yl : Xl);
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
      t.update(pu(e));
      return;
    case "function":
      t.update(Qs(e));
      return;
    default:
      console.warn(`Ignored input during hashing because it is of type ${typeof e} which is not supported`);
  }
}
function pu(t) {
  let e = Mt.get(t);
  return e === void 0 && (e = uu(t)), e;
}
let Ir = 1;
function Qs(t) {
  let e = Mt.get(t);
  return e === void 0 && (e = Ir ^ su, Ir++, Mt.set(t, e)), e;
}
function yu(t, e) {
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
    return Ls(s, __privateGet(this, _e12)), Ls(s, e.getInner()), new _H(s);
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
    Ls(__privateGet(this, _e12), s);
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
    return `${Fs.getStringId(o)}|${Fs.getStringId(a)}`;
  };
  for (const [i, o] of __privateGet(this, _e12)) {
    if (!Array.isArray(i) || i.length !== 2) return __privateMethod(this, _H_instances, s_fn).call(this);
    const [a, c] = i;
    if (typeof a != "string" && typeof a != "number") return __privateMethod(this, _H_instances, s_fn).call(this);
    let l;
    Array.isArray(c) && c.length === 2 ? l = n(c) : l = Fs.getStringId(c);
    const u = a + "|" + l;
    e.set(u, (e.get(u) || 0) + o), s.has(u) || s.set(u, i);
  }
  const r = [];
  for (const [i, o] of e) o !== 0 && r.push([s.get(i), o]);
  return new _H(r);
};
s_fn = function() {
  const e = new $l(() => 0), s = /* @__PURE__ */ new Map();
  let n = false, r = false, i = false;
  for (const [c, l] of __privateGet(this, _e12)) if (typeof c == "string") n = true;
  else if (typeof c == "number") r = true;
  else {
    i = true;
    break;
  }
  const o = i || n && r;
  for (const [c, l] of __privateGet(this, _e12)) {
    const u = o ? oe(c) : c;
    o && !s.has(u) && s.set(u, c), e.update(u, (h) => h + l);
  }
  const a = [];
  for (const [c, l] of e.entries()) if (l !== 0) {
    const u = o ? s.get(c) : c;
    a.push([u, l]);
  }
  return new _H(a);
};
let H = _H;
class gu {
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
    return __privateGet(this, _e14).push(e), new gu(e);
  }
}
_e14 = new WeakMap();
class Mi {
  constructor(e, s, n) {
    this.id = e, this.inputs = s, this.output = n;
  }
  hasPendingWork() {
    return this.inputs.some((e) => !e.isEmpty());
  }
}
class ct extends Mi {
  constructor(e, s, n) {
    super(e, [s], n), this.id = e;
  }
  inputMessages() {
    return this.inputs[0].drain();
  }
}
class mu extends Mi {
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
class On extends ct {
  run() {
    for (const e of this.inputMessages()) this.output.sendData(this.inner(e));
  }
}
class wu {
  constructor() {
    __privateAdd(this, _wu_instances);
    __privateAdd(this, _e15, []);
    __privateAdd(this, _t9, 0);
    __privateAdd(this, _s8, false);
  }
  getNextOperatorId() {
    return __privateMethod(this, _wu_instances, n_fn).call(this), __privateWrapper(this, _t9)._++;
  }
  newInput() {
    __privateMethod(this, _wu_instances, n_fn).call(this);
    const e = new _e();
    return new vu(this, e);
  }
  addOperator(e) {
    __privateMethod(this, _wu_instances, n_fn).call(this), __privateGet(this, _e15).push(e);
  }
  finalize() {
    __privateMethod(this, _wu_instances, n_fn).call(this), __privateSet(this, _s8, true);
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
_wu_instances = new WeakSet();
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
class vu extends ke {
  sendData(e) {
    this.writer.sendData(e);
  }
}
class Su extends On {
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
    const s = new ke(e.graph, new _e()), n = new Su(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
const gt = /* @__PURE__ */ Symbol("NO_PREFIX");
class Er extends Map {
  addValue(e, s) {
    if (s === 0) return this.size === 0;
    const n = bt(e), r = this.get(n);
    if (Ht(r)) {
      const [i, o] = r;
      if (bt(i) !== n) throw new Error("Mismatching prefixes, this should never happen");
      if (i === e || oe(i) === oe(e)) {
        const c = o + s;
        c === 0 ? this.delete(n) : this.set(n, [e, c]);
      } else {
        const c = new mt();
        c.set(oe(i), r), c.set(oe(e), [e, s]), this.set(n, c);
      }
    } else r === void 0 ? this.set(n, [e, s]) : r.addValue(e, s) && this.delete(n);
    return this.size === 0;
  }
}
class mt extends Map {
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
    if (Ht(s)) yield s;
    else {
      if (s === void 0) return;
      if (s instanceof mt) for (const n of s.values()) yield n;
      else for (const n of s.values()) if (Ht(n)) yield n;
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
    if (Ht(o)) {
      __privateMethod(this, _Ke_instances, s_fn2).call(this, e, o, n, r);
      return;
    }
    if (o instanceof mt) {
      const a = bt(n);
      if (a !== gt) {
        const c = new Er();
        c.set(gt, o), c.set(a, s), __privateGet(this, _e18).set(e, c);
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
  const a = bt(n), c = bt(i);
  if (c === a && (i === n || oe(i) === oe(n))) {
    const l = o + r;
    l === 0 ? __privateGet(this, _e18).delete(e) : __privateGet(this, _e18).set(e, [n, l]);
    return;
  }
  if (c === gt && a === gt) {
    const l = new mt();
    l.set(oe(i), s), l.set(oe(n), [n, r]), __privateGet(this, _e18).set(e, l);
  } else {
    const l = new Er();
    if (c === a) {
      const u = new mt();
      u.set(oe(i), s), u.set(oe(n), [n, r]), l.set(c, u);
    } else l.set(c, s), l.set(a, [n, r]);
    __privateGet(this, _e18).set(e, l);
  }
};
let Ke = _Ke;
function bt(t) {
  return Array.isArray(t) && (typeof t[0] == "string" || typeof t[0] == "number" || typeof t[0] == "bigint") ? t[0] : gt;
}
function Ht(t) {
  return Array.isArray(t);
}
class bu extends ct {
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
      for (const [l, u] of o) {
        const h = a.get(l) ?? 0;
        a.set(l, h + u);
      }
      for (const [l, u] of i) {
        const h = c.get(l) ?? 0;
        c.set(l, h + u);
      }
      for (const [l, u] of c) a.has(l) || (s.push([[n, l], -u]), __privateGet(this, _t12).addValue(n, [l, -u]));
      for (const [l, u] of a) c.has(l) || u !== 0 && (s.push([[n, l], u]), __privateGet(this, _t12).addValue(n, [l, u]));
      for (const [l, u] of a) {
        const h = c.get(l);
        if (h !== void 0) {
          const f = u - h;
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
function xu(t) {
  return (e) => {
    const s = new ke(e.graph, new _e()), n = new bu(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
function Or(t) {
  return "pipe" in t;
}
function Mr(t, e = {}) {
  const s = Object.fromEntries(Object.entries(e).filter(([n, r]) => !Or(r)));
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => Or(r))), (n) => {
    const r = "__original_key__";
    return n.pipe(ae((a) => {
      const c = t(a), l = Ii(c), u = {};
      u[r] = c;
      for (const [h, f] of Object.entries(s)) u[h] = f.preMap(a);
      return [l, u];
    })).pipe(xu((a) => {
      var _a5, _b2;
      let c = 0;
      for (const [h, f] of a) c += f;
      if (c <= 0) return [];
      const l = {}, u = (_b2 = (_a5 = a[0]) == null ? void 0 : _a5[0]) == null ? void 0 : _b2[r];
      l[r] = u;
      for (const [h, f] of Object.entries(s)) {
        const p = a.map(([d, y]) => [d[h], y]);
        l[h] = f.reduce(p);
      }
      return [[l, 1]];
    })).pipe(ae(([a, c]) => {
      const l = c[r], u = {};
      Object.assign(u, l);
      for (const [h, f] of Object.entries(s)) f.postMap ? u[h] = f.postMap(c[h]) : u[h] = c[h];
      return [a, u];
    }));
  };
}
function Pu(t = (e) => e) {
  return { preMap: (e) => t(e), reduce: (e) => {
    let s = 0;
    for (const [n, r] of e) s += n * r;
    return s;
  } };
}
function Ru(t = (e) => e) {
  return { preMap: (e) => t(e) == null ? 0 : 1, reduce: (e) => {
    let s = 0;
    for (const [n, r] of e) s += n * r;
    return s;
  } };
}
function Cu(t = (e) => e) {
  return { preMap: (e) => ({ sum: t(e), count: 0 }), reduce: (e) => {
    let s = 0, n = 0;
    for (const [r, i] of e) s += r.sum * i, n += i;
    return { sum: s, count: n };
  }, postMap: (e) => e.sum / e.count };
}
function _u(t) {
  const e = t ?? ((s) => s);
  return { preMap: (s) => e(s), reduce: (s) => {
    let n;
    for (const [r, i] of s) (!n || r && r < n) && (n = r);
    return n;
  } };
}
function ku(t) {
  const e = t ?? ((s) => s);
  return { preMap: (s) => e(s), reduce: (s) => {
    let n;
    for (const [r, i] of s) (!n || r && r > n) && (n = r);
    return n;
  } };
}
const Iu = { sum: Pu, count: Ru, avg: Cu, min: _u, max: ku };
class Eu extends On {
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
function Ou(t) {
  return (e) => {
    const s = new ke(e.graph, new _e()), n = new Eu(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
class Mu extends On {
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
    const s = new ke(e.graph, new _e()), n = new Mu(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
class Tu extends ct {
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
function Au(t) {
  return (e) => {
    const s = new ke(e.graph, new _e()), n = new Tu(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
class Lu extends ct {
  run() {
    const e = this.inputMessages();
    if (e.length === 0) return;
    const s = new H();
    for (const r of e) s.extend(r);
    const n = s.consolidate();
    n.getInner().length > 0 && this.output.sendData(n);
  }
}
function Fu() {
  return (t) => {
    const e = new ke(t.graph, new _e()), s = new Lu(t.graph.getNextOperatorId(), t.connectReader(), e.writer);
    return t.graph.addOperator(s), e;
  };
}
class Du extends mu {
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
      if (o + a === 0) for (const [l, u] of i) u !== 0 && n.add([r, [l, null]], u);
    }
    if (s.size > 0) for (const r of s.getPresenceKeys()) {
      const i = __privateGet(this, _t13).getConsolidatedMultiplicity(r), o = s.getConsolidatedMultiplicity(r);
      if (o === 0) continue;
      const a = i + o;
      if (i === 0 == (a === 0)) continue;
      const c = i === 0;
      for (const [l, u] of __privateGet(this, _e23).getIterator(r)) u !== 0 && n.add([r, [l, null]], c ? -u : +u);
    }
  }
  emitRightOuterResults(e, s, n) {
    if (s.size > 0) for (const [r, i] of s.entriesIterators()) {
      const o = __privateGet(this, _e23).getConsolidatedMultiplicity(r), a = e.getConsolidatedMultiplicity(r);
      if (o + a === 0) for (const [l, u] of i) u !== 0 && n.add([r, [null, l]], u);
    }
    if (e.size > 0) for (const r of e.getPresenceKeys()) {
      const i = __privateGet(this, _e23).getConsolidatedMultiplicity(r), o = e.getConsolidatedMultiplicity(r);
      if (o === 0) continue;
      const a = i + o;
      if (i === 0 == (a === 0)) continue;
      const c = i === 0;
      for (const [l, u] of __privateGet(this, _t13).getIterator(r)) u !== 0 && n.add([r, [null, l]], c ? -u : +u);
    }
  }
}
_e23 = new WeakMap();
_t13 = new WeakMap();
_s10 = new WeakMap();
function Bu(t, e = "inner") {
  return (s) => {
    if (s.graph !== t.graph) throw new Error("Cannot join streams from different graphs");
    const n = new ke(s.graph, new _e()), r = new Du(s.graph.getNextOperatorId(), s.connectReader(), t.connectReader(), n.writer, e);
    return s.graph.addOperator(r), n;
  };
}
class Ku extends ct {
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
function ju(t = (e) => e) {
  return (e) => {
    const s = new ke(e.graph, new _e()), n = new Ku(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
function Tr(t, e) {
  return [t, e];
}
function Ar(t) {
  return t[0];
}
function Lr(t) {
  return t[1];
}
function zu(t) {
  return ([e, s], [n, r]) => {
    const i = t(s, r);
    return i !== 0 ? i : rs(e, n);
  };
}
class Ti {
  constructor(e, s, n) {
    __privateAdd(this, _Ti_instances);
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
    const o = [__privateGet(this, _s11), __privateGet(this, _n5) === 1 / 0 ? Math.max(__privateGet(this, _s11) + this.size, i[1]) : __privateGet(this, _n5)], { onlyInA: a, onlyInB: c } = Vl(i, o), l = [];
    c.forEach((h) => {
      const f = __privateGet(this, _e25)[h];
      f && l.push(f);
    });
    const u = [];
    return a.forEach((h) => {
      const f = __privateGet(this, _e25)[h];
      f && u.push(f);
    }), { moveIns: l, moveOuts: u, changes: a.length + c.length > 0 };
  }
  insert(e) {
    const s = { moveIn: null, moveOut: null }, n = __privateMethod(this, _Ti_instances, r_fn2).call(this, e), r = n === 0 ? null : Lr(__privateGet(this, _e25)[n - 1]), i = n === __privateGet(this, _e25).length ? null : Lr(__privateGet(this, _e25)[n]), o = eo(r, i), a = Tr(e, o);
    if (__privateGet(this, _e25).splice(n, 0, a), n < __privateGet(this, _n5)) {
      const c = Math.max(n, __privateGet(this, _s11));
      c < __privateGet(this, _e25).length && (s.moveIn = __privateGet(this, _e25)[c], __privateGet(this, _n5) < __privateGet(this, _e25).length && (s.moveOut = __privateGet(this, _e25)[__privateGet(this, _n5)]));
    }
    return s;
  }
  delete(e) {
    const s = { moveIn: null, moveOut: null }, n = __privateMethod(this, _Ti_instances, r_fn2).call(this, e), [r] = __privateGet(this, _e25).splice(n, 1);
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
_Ti_instances = new WeakSet();
r_fn2 = function(e) {
  return Nl(__privateGet(this, _e25), Tr(e, ""), (s, n) => __privateGet(this, _t15).call(this, Ar(s), Ar(n)));
};
class $u {
  constructor(e) {
    __privateAdd(this, _$u_instances);
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
    const { oldMultiplicity: r, newMultiplicity: i } = __privateMethod(this, _$u_instances, s_fn3).call(this, e, n);
    return r <= 0 && i > 0 ? __privateGet(this, _t16).insert([e, s]) : r > 0 && i <= 0 ? __privateGet(this, _t16).delete([e, s]) : { moveIn: null, moveOut: null };
  }
  move(e) {
    if (!(__privateGet(this, _t16) instanceof Ti)) throw new Error("Cannot move B+-tree implementation of TopK with fractional index");
    return __privateGet(this, _t16).move(e);
  }
}
_e26 = new WeakMap();
_t16 = new WeakMap();
_$u_instances = new WeakSet();
s_fn3 = function(e, s) {
  if (s === 0) {
    const i = __privateGet(this, _e26).get(e) ?? 0;
    return { oldMultiplicity: i, newMultiplicity: i };
  }
  const n = __privateGet(this, _e26).get(e) ?? 0, r = n + s;
  return r === 0 ? __privateGet(this, _e26).delete(e) : __privateGet(this, _e26).set(e, r), { oldMultiplicity: n, newMultiplicity: r };
};
function Fr(t, e) {
  if (t) {
    const [[s, n], r] = t;
    e.push([[s, [n, r]], 1]);
  }
}
function Dr(t, e) {
  if (t) {
    const [[s, n], r] = t;
    e.push([[s, [n, r]], -1]);
  }
}
class Nu extends ct {
  constructor(e, s, n, r, i) {
    var _a5, _b2;
    super(e, s, n);
    __privateAdd(this, _e27);
    const o = i.limit ?? 1 / 0, a = i.offset ?? 0, c = this.createTopK(a, o, zu(r));
    __privateSet(this, _e27, new $u(c)), (_a5 = i.setSizeCallback) == null ? void 0 : _a5.call(i, () => __privateGet(this, _e27).size), (_b2 = i.setWindowFn) == null ? void 0 : _b2.call(i, this.moveTopK.bind(this));
  }
  createTopK(e, s, n) {
    return new Ti(e, s, n);
  }
  moveTopK({ offset: e, limit: s }) {
    const n = [], r = __privateGet(this, _e27).move({ offset: e, limit: s });
    r.moveIns.forEach((i) => Fr(i, n)), r.moveOuts.forEach((i) => Dr(i, n)), r.changes && this.output.sendData(new H(n));
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
    Fr(i.moveIn, r), Dr(i.moveOut, r);
  }
}
_e27 = new WeakMap();
function Uu(t, e) {
  const s = e || {};
  return (n) => {
    const r = new ke(n.graph, new _e()), i = new Nu(n.graph.getNextOperatorId(), n.connectReader(), r.writer, t, s);
    return n.graph.addOperator(i), r;
  };
}
function Vu(t, e, s) {
  const n = (s == null ? void 0 : s.limit) ?? 1 / 0, r = (s == null ? void 0 : s.offset) ?? 0, i = s == null ? void 0 : s.setSizeCallback, o = s == null ? void 0 : s.setWindowFn, a = (s == null ? void 0 : s.comparator) ?? ((c, l) => c === l ? 0 : c < l ? -1 : 1);
  return (c) => c.pipe(t((l, u) => a(e(l), e(u)), { limit: n, offset: r, setSizeCallback: i, setWindowFn: o }), Fu());
}
function Wu(t, e) {
  return Vu(Uu, t, e);
}
class qu {
  constructor(e, s, n) {
    this._root = Ds, this._size = 0, this._maxNodeSize = n >= 4 ? Math.min(n, 256) : 32, this._compare = e, s && this.setPairs(s);
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
    this._root = Ds, this._size = 0;
  }
  get(e, s) {
    return this._root.get(e, s, this);
  }
  set(e, s, n) {
    this._root.isShared && (this._root = this._root.clone());
    const r = this._root.set(e, s, n, this);
    return r === true || r === false ? r : (this._root = new Mn([this._root, r]), true);
  }
  has(e) {
    return this.forRange(e, e, true, void 0) !== 0;
  }
  delete(e) {
    return this.editRange(e, e, true, Gu) !== 0;
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
    const s = this.nextHigherPair(e, Br);
    return s && s[0];
  }
  nextLowerPair(e, s) {
    return s = s || [], e === void 0 ? this._root.maxPair(s) : this._root.getPairOrNextLower(e, this._compare, false, s);
  }
  nextLowerKey(e) {
    const s = this.nextLowerPair(e, Br);
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
      for (; o.keys.length <= 1 && !o.isLeaf; ) a || (a = o.isShared), this._root = o = o.keys.length === 0 ? Ds : o.children[0];
      a && (o.isShared = true);
    }
  }
}
class Tt {
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
    return new Tt(this.keys.slice(0), e === te ? e : e.slice(0));
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
    return new Tt(s, n);
  }
  forRange(e, s, n, r, i, o, a) {
    const c = i._compare;
    let l, u;
    if (s === e) {
      if (!n || (u = (l = this.indexOf(e, -1, c)) + 1, l < 0)) return o;
    } else l = this.indexOf(e, 0, c), u = this.indexOf(s, -1, c), u < 0 ? u = ~u : n === true && u++;
    const h = this.keys, f = this.values;
    if (a !== void 0) for (let p = l; p < u; p++) {
      const d = h[p], y = a(d, f[p], o++);
      if (y !== void 0) {
        if (r === true) {
          if (d !== h[p] || this.isShared === true) throw new Error("BTree illegally changed or cloned in editRange");
          y.delete ? (this.keys.splice(p, 1), this.values !== te && this.values.splice(p, 1), i._size--, p--, u--) : y.hasOwnProperty("value") && (f[p] = y.value);
        }
        if (y.break !== void 0) return y;
      }
    }
    else o += u - l;
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
class Mn extends Tt {
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
      let h;
      c > 0 && (h = i[c - 1]).keys.length < o && a(l.keys[0], e) < 0 ? (h.isShared && (i[c - 1] = h = h.clone()), h.takeFromRight(l), this.keys[c - 1] = h.maxKey()) : (h = i[c + 1]) !== void 0 && h.keys.length < o && a(l.maxKey(), e) < 0 && (h.isShared && (i[c + 1] = h = h.clone()), h.takeFromLeft(l), this.keys[c] = i[c].maxKey());
    }
    const u = l.set(e, s, n, r);
    if (u === false) return false;
    if (this.keys[c] = l.maxKey(), u === true) return true;
    if (this.keys.length < o) return this.insert(c + 1, u), true;
    {
      const h = this.splitOffRightSide();
      let f = this;
      return a(u.maxKey(), this.maxKey()) > 0 && (f = h, c -= this.keys.length), f.insert(c + 1, u), h;
    }
  }
  insert(e, s) {
    this.children.splice(e, 0, s), this.keys.splice(e, 0, s.maxKey());
  }
  splitOffRightSide() {
    const e = this.children.length >> 1;
    return new Mn(this.children.splice(e), this.keys.splice(e));
  }
  takeFromRight(e) {
    this.keys.push(e.keys.shift()), this.children.push(e.children.shift());
  }
  takeFromLeft(e) {
    this.keys.unshift(e.keys.pop()), this.children.unshift(e.children.pop());
  }
  forRange(e, s, n, r, i, o, a) {
    const c = i._compare, l = this.keys, u = this.children;
    let h = this.indexOf(e, 0, c), f = h;
    const p = Math.min(s === e ? h : this.indexOf(s, 0, c), l.length - 1);
    if (r) {
      if (f <= p) try {
        for (; f <= p; f++) {
          u[f].isShared && (u[f] = u[f].clone());
          const d = u[f].forRange(e, s, n, r, i, o, a);
          if (l[f] = u[f].maxKey(), typeof d != "number") return d;
          o = d;
        }
      } finally {
        const d = i._maxNodeSize >> 1;
        for (h > 0 && h--, f = p; f >= h; f--) u[f].keys.length <= d && (u[f].keys.length !== 0 ? this.tryMerge(f, i._maxNodeSize) : (l.splice(f, 1), u.splice(f, 1)));
        u.length !== 0 && u[0].keys.length === 0 && Qu(false, "emptiness bug");
      }
    } else for (; f <= p; f++) {
      const d = u[f].forRange(e, s, n, r, i, o, a);
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
const te = [], Hu = { delete: true }, Gu = () => Hu, Ds = (function() {
  const t = new Tt();
  return t.isShared = true, t;
})(), Br = [];
function Qu(t, ...e) {
  throw e.unshift("B+ tree"), new Error(e.join(" "));
}
function Ai() {
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
    const a = new Proxy({}, { get(c, l, u) {
      if (l === "__refProxy") return true;
      if (l === "__path") return i;
      if (l === "__type") return;
      if (typeof l == "symbol") return Reflect.get(c, l, u);
      const h = [...i, String(l)];
      return n(h);
    }, has(c, l) {
      return l === "__refProxy" || l === "__path" || l === "__type" ? true : Reflect.has(c, l);
    }, ownKeys(c) {
      const l = ++s, u = `__SPREAD_SENTINEL__${i.join(".")}__${l}`;
      return Object.prototype.hasOwnProperty.call(c, u) || Object.defineProperty(c, u, { enumerable: true, configurable: true, value: true }), Reflect.ownKeys(c);
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
function Kr(t) {
  const e = Ue(t), s = /* @__PURE__ */ new Map();
  function n(i) {
    const o = i.join(".");
    if (s.has(o)) return s.get(o);
    const a = new Proxy({}, { get(c, l, u) {
      if (l === "__refProxy") return true;
      if (l === "__path") return ["$selected", ...i];
      if (l === "__type") return;
      if (typeof l == "symbol") return Reflect.get(c, l, u);
      const h = [...i, String(l)];
      return n(h);
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
  return Ju(t) ? new ce(t.__path) : t && typeof t == "object" && "type" in t && (t.type === "func" || t.type === "ref" || t.type === "val" || t.type === "agg") ? t : new he(t);
}
function Ju(t) {
  return t && typeof t == "object" && t.__refProxy === true;
}
function Js(t, e) {
  return new we("eq", [G(t), G(e)]);
}
function jr(t, e) {
  return new we("gt", [G(t), G(e)]);
}
function Yu(t, e) {
  return new we("gte", [G(t), G(e)]);
}
function Ys(t, e) {
  return new we("lt", [G(t), G(e)]);
}
function Xs(t, e, ...s) {
  const n = [t, e, ...s];
  return new we("and", n.map((r) => G(r)));
}
function Xu(t, e, ...s) {
  const n = [t, e, ...s];
  return new we("or", n.map((r) => G(r)));
}
function Zu(t, e) {
  return new we("in", [G(t), G(e)]);
}
class eh {
  constructor(e, s, n, r) {
    this.lookupCount = 0, this.totalLookupTime = 0, this.lastUpdated = /* @__PURE__ */ new Date(), this.id = e, this.expression = s, this.compareOptions = In, this.name = n, this.initialize(r);
  }
  supports(e) {
    return this.supportedOperations.has(e);
  }
  matchesField(e) {
    return this.expression.type === "ref" && this.expression.path.length === e.length && this.expression.path.every((s, n) => s === e[n]);
  }
  matchesCompareOptions(e) {
    const s = { ...this.compareOptions, direction: void 0 }, n = { ...e, direction: void 0 };
    return Pe(s, n);
  }
  matchesDirection(e) {
    return this.compareOptions.direction === e;
  }
  getStats() {
    return { entryCount: this.keyCount, lookupCount: this.lookupCount, averageLookupTime: this.lookupCount > 0 ? this.totalLookupTime / this.lookupCount : 0, lastUpdated: this.lastUpdated };
  }
  evaluateIndexExpression(e) {
    return _n(this.expression)(e);
  }
  trackLookup(e) {
    const s = performance.now() - e;
    this.lookupCount++, this.totalLookupTime += s;
  }
  updateTimestamp() {
    this.lastUpdated = /* @__PURE__ */ new Date();
  }
}
class Zs extends eh {
  constructor(e, s, n, r) {
    super(e, s, n, r), this.supportedOperations = /* @__PURE__ */ new Set(["eq", "gt", "gte", "lt", "lte", "in"]), this.valueMap = /* @__PURE__ */ new Map(), this.indexedKeys = /* @__PURE__ */ new Set(), this.compareFn = Hs, this.compareFn = (r == null ? void 0 : r.compareFn) ?? Hs, (r == null ? void 0 : r.compareOptions) && (this.compareOptions = r.compareOptions), this.orderedEntries = new qu(this.compareFn);
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
    const r = Ie(n);
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
    const r = Ie(n);
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
    const s = Ie(e);
    return new Set(this.valueMap.get(s) ?? []);
  }
  rangeQuery(e = {}) {
    const { from: s, to: n, fromInclusive: r = true, toInclusive: i = true } = e, o = /* @__PURE__ */ new Set(), a = Ie(s), c = Ie(n), l = a ?? this.orderedEntries.minKey(), u = c ?? this.orderedEntries.maxKey();
    return this.orderedEntries.forRange(l, u, i, (h, f) => {
      if (!r && this.compareFn(h, s) === 0) return;
      const p = this.valueMap.get(h);
      p && p.forEach((d) => o.add(d));
    }), o;
  }
  rangeQueryReversed(e = {}) {
    const { from: s, to: n, fromInclusive: r = true, toInclusive: i = true } = e;
    return this.rangeQuery({ from: n ?? this.orderedEntries.maxKey(), to: s ?? this.orderedEntries.minKey(), fromInclusive: i, toInclusive: r });
  }
  takeInternal(e, s, n, r, i = false) {
    const o = /* @__PURE__ */ new Set(), a = [];
    let c, l = Ie(n);
    for (; (c = s(l)) !== void 0 && a.length < e; ) {
      l = c[0];
      const u = this.valueMap.get(l);
      if (u && u.size > 0) {
        const h = Array.from(u).sort(rs);
        i && h.reverse();
        for (const f of h) {
          if (a.length >= e) break;
          !o.has(f) && ((r == null ? void 0 : r(f)) ?? true) && (a.push(f), o.add(f));
        }
      }
    }
    return a;
  }
  take(e, s, n) {
    const r = (i) => this.orderedEntries.nextHigherPair(i);
    return this.takeInternal(e, r, s, n);
  }
  takeReversed(e, s, n) {
    const r = (i) => this.orderedEntries.nextLowerPair(i);
    return this.takeInternal(e, r, s, n, true);
  }
  inArrayLookup(e) {
    const s = /* @__PURE__ */ new Set();
    for (const n of e) {
      const r = Ie(n), i = this.valueMap.get(r);
      i && i.forEach((o) => s.add(o));
    }
    return s;
  }
  get indexedKeysSet() {
    return this.indexedKeys;
  }
  get orderedEntriesArray() {
    return this.orderedEntries.keysArray().map((e) => [e, this.valueMap.get(e) ?? /* @__PURE__ */ new Set()]);
  }
  get orderedEntriesArrayReversed() {
    return this.takeReversed(this.orderedEntries.size).map((e) => [e, this.valueMap.get(e) ?? /* @__PURE__ */ new Set()]);
  }
  get valueMapData() {
    return this.valueMap;
  }
}
function Li(t) {
  return t.config.autoIndex === "eager";
}
function ws(t, e, s, n, r) {
  if (!Li(s)) return;
  const i = n ?? { ...In, ...s.compareOptions };
  if (!Array.from(s.indexes.values()).find((a) => a.matchesField(e) && a.matchesCompareOptions(i))) try {
    s.createIndex((a) => {
      let c = a;
      for (const l of e) c = c[l];
      return c;
    }, { name: `auto:${e.join(".")}`, indexType: Zs, options: r ? { compareFn: r, compareOptions: i } : {} });
  } catch (a) {
    console.warn(`${s.id ? `[${s.id}] ` : ""}Failed to create auto-index for field path "${e.join(".")}":`, a);
  }
}
function th(t, e) {
  if (!Li(e)) return;
  const s = sh(t);
  for (const { fieldName: n, fieldPath: r } of s) ws(n, r, e);
}
function sh(t) {
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
const { sum: nh, count: rh, avg: ih, min: oh, max: ah } = Iu;
function ch(t, e) {
  const s = /* @__PURE__ */ new Map(), n = [...t];
  if (!e) return { selectToGroupByIndex: s, groupByExpressions: n };
  for (const [r, i] of Object.entries(e)) {
    if (i.type === "agg") continue;
    const o = n.findIndex((a) => is(i, a));
    if (o === -1) throw new pl(r);
    s.set(r, o);
  }
  return { selectToGroupByIndex: s, groupByExpressions: n };
}
function zr(t, e, s, n, r) {
  if (e.length === 0) {
    const l = {};
    if (n) {
      for (const [h, f] of Object.entries(n)) if (f.type === "agg") {
        const p = f;
        l[h] = $r(p);
      }
    }
    const u = () => ({ __singleGroup: true });
    if (t = t.pipe(Mr(u, l)), t = t.pipe(ae(([, h]) => {
      const p = { ...h.$selected || {} };
      if (n) for (const [d, y] of Object.entries(n)) y.type === "agg" && (p[d] = h[d]);
      return ["single_group", { ...h, $selected: p }];
    })), s && s.length > 0) for (const h of s) {
      const f = mr(h), p = os(f, n || {}, "$selected"), d = fe(p);
      t = t.pipe(je(([, y]) => {
        const g = { $selected: y.$selected };
        return nt(d(g));
      }));
    }
    if (r && r.length > 0) for (const h of r) t = t.pipe(je(([, f]) => {
      const p = { $selected: f.$selected };
      return nt(h(p));
    }));
    return t;
  }
  const i = ch(e, n), o = e.map((l) => fe(l)), a = ([, l]) => {
    const u = { ...l };
    delete u.$selected;
    const h = {};
    for (let f = 0; f < e.length; f++) {
      const p = o[f], d = p(u);
      h[`__key_${f}`] = d;
    }
    return h;
  }, c = {};
  if (n) {
    for (const [l, u] of Object.entries(n)) if (u.type === "agg") {
      const h = u;
      c[l] = $r(h);
    }
  }
  if (t = t.pipe(Mr(a, c)), t = t.pipe(ae(([, l]) => {
    const u = l.$selected || {}, h = {};
    if (n) for (const [p, d] of Object.entries(n)) if (d.type !== "agg") {
      const y = i.selectToGroupByIndex.get(p);
      y !== void 0 ? h[p] = l[`__key_${y}`] : h[p] = u[p];
    } else h[p] = l[p];
    else for (let p = 0; p < e.length; p++) h[`__key_${p}`] = l[`__key_${p}`];
    let f;
    if (e.length === 1) f = l.__key_0;
    else {
      const p = [];
      for (let d = 0; d < e.length; d++) p.push(l[`__key_${d}`]);
      f = Ii(p);
    }
    return [f, { ...l, $selected: h }];
  })), s && s.length > 0) for (const l of s) {
    const u = mr(l), h = os(u, n || {}), f = fe(h);
    t = t.pipe(je(([, p]) => {
      const d = { $selected: p.$selected };
      return f(d);
    }));
  }
  if (r && r.length > 0) for (const l of r) t = t.pipe(je(([, u]) => {
    const h = { $selected: u.$selected };
    return nt(l(h));
  }));
  return t;
}
function is(t, e) {
  var _a5, _b2, _c3, _d2;
  if (!t || !e || t.type !== e.type) return false;
  switch (t.type) {
    case "ref":
      return !t.path || !e.path || t.path.length !== e.path.length ? false : t.path.every((s, n) => s === e.path[n]);
    case "val":
      return t.value === e.value;
    case "func":
      return t.name === e.name && ((_a5 = t.args) == null ? void 0 : _a5.length) === ((_b2 = e.args) == null ? void 0 : _b2.length) && (t.args || []).every((s, n) => is(s, e.args[n]));
    case "agg":
      return t.name === e.name && ((_c3 = t.args) == null ? void 0 : _c3.length) === ((_d2 = e.args) == null ? void 0 : _d2.length) && (t.args || []).every((s, n) => is(s, e.args[n]));
    default:
      return false;
  }
}
function $r(t) {
  const e = fe(t.args[0]), s = ([, i]) => {
    const o = e(i);
    return typeof o == "number" ? o : o != null ? Number(o) : 0;
  }, n = ([, i]) => {
    const o = e(i);
    return typeof o == "number" || typeof o == "string" || typeof o == "bigint" || o instanceof Date ? o : o != null ? Number(o) : 0;
  }, r = ([, i]) => e(i);
  switch (t.name.toLowerCase()) {
    case "sum":
      return nh(s);
    case "count":
      return rh(r);
    case "avg":
      return ih(s);
    case "min":
      return oh(n);
    case "max":
      return ah(n);
    default:
      throw new yl(t.name);
  }
}
function os(t, e, s = "$selected") {
  switch (t.type) {
    case "agg": {
      const n = t;
      for (const [r, i] of Object.entries(e)) if (i.type === "agg" && lh(n, i)) return new ce([s, r]);
      throw new gl(n.name);
    }
    case "func": {
      const n = t, r = n.args.map((i) => os(i, e));
      return new we(n.name, r);
    }
    case "ref":
      return t;
    case "val":
      return t;
    default:
      throw new ml(t.type);
  }
}
function lh(t, e) {
  return t.name === e.name && t.args.length === e.args.length && t.args.every((s, n) => is(s, e.args[n]));
}
function uh(t, e, s, n, r, i, o, a, c) {
  const l = s.map((d) => {
    const y = os(d.expression, n, "$selected");
    return { compiledExpression: fe(y), compareOptions: en(d, r) };
  }), u = (d) => {
    const y = d;
    return s.length > 1 ? l.map((g) => g.compiledExpression(y)) : s.length === 1 ? l[0].compiledExpression(y) : null;
  }, h = (d, y) => {
    if (s.length > 1) {
      const g = d, m = y;
      for (let S = 0; S < s.length; S++) {
        const b = l[S], E = ns(b.compareOptions)(g[S], m[S]);
        if (E !== 0) return E;
      }
      return g.length - m.length;
    }
    if (s.length === 1) {
      const g = l[0];
      return ns(g.compareOptions)(d, y);
    }
    return Hs(d, y);
  };
  let f, p;
  if (a) {
    let d, y, g, m = t.from.alias;
    const S = s[0], b = S.expression;
    if (b.type === "ref") {
      const v = Ot(t, b, r);
      if (v) {
        y = v.collection;
        const E = v.path[0], M = en(S, y);
        E && ws(E, v.path, y, M, h), g = fe(new ce(v.path), true), d = Dt(y, v.path, M), (d == null ? void 0 : d.supports("gt")) || (d = void 0), m = b.path.length > 1 ? String(b.path[0]) : t.from.alias;
      }
    }
    if (g) {
      const E = s.every((P) => P.expression.type === "ref") ? s.map((P) => {
        const I = P.expression, w = Ot(t, I, r);
        return fe(w ? new ce(w.path) : P.expression, true);
      }) : void 0;
      p = { alias: m, offset: c ?? 0, limit: a, comparator: (P, I) => {
        if (s.length === 1) {
          const w = P && g(P), R = I && g(I);
          return h(w, R);
        }
        if (E) {
          const w = (R) => R && E.map((C) => C(R));
          return h(w(P), w(I));
        }
        return 0;
      }, valueExtractorForRawRow: (P) => {
        if (s.length === 1) return g(P);
        if (E) return E.map((I) => I(P));
      }, firstColumnValueExtractor: g, index: d, orderBy: s };
      const x = (y == null ? void 0 : y.id) ?? r.id;
      i[x] = p, d && (f = (P) => {
        i[x].dataNeeded = () => {
          const I = P();
          return Math.max(0, p.limit - I);
        };
      });
    }
  }
  return e.pipe(Wu(u, { limit: a, offset: c, comparator: h, setSizeCallback: f, setWindowFn: (d) => {
    o((y) => {
      d(y), p && (p.offset = y.offset ?? p.offset, p.limit = y.limit ?? p.limit);
    });
  } }));
}
function en(t, e) {
  return t.compareOptions.stringSort !== void 0 ? t.compareOptions : { ...e.compareOptions, direction: t.compareOptions.direction, nulls: t.compareOptions.nulls };
}
function hh(t, e = {}) {
  const s = (n) => {
    const r = [];
    for (const [i, o] of t.entries()) ((n == null ? void 0 : n(o)) ?? true) && r.push({ type: "insert", key: i, value: o });
    return r;
  };
  if (e.limit !== void 0 && !e.orderBy) throw new Error("limit cannot be used without orderBy");
  if (e.orderBy) {
    const n = e.where ? xt(e.where) : void 0, r = dh(t, e.orderBy, e.limit, n, e.optimizedOnly);
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
    const n = e.where, r = Fl(n, t);
    if (r.canOptimize) {
      const i = [];
      for (const o of r.matchingKeys) {
        const a = t.get(o);
        a !== void 0 && i.push({ type: "insert", key: o, value: a });
      }
      return i;
    } else {
      if (e.optimizedOnly) return;
      const i = xt(n);
      return s(i);
    }
  } catch (n) {
    console.warn(`${t.id ? `[${t.id}] ` : ""}Error processing where clause, falling back to full scan:`, n);
    const r = xt(e.where);
    return e.optimizedOnly ? void 0 : s(r);
  }
}
function xt(t) {
  const e = _n(t);
  return (s) => {
    try {
      const n = e(s);
      return nt(n);
    } catch {
      return false;
    }
  };
}
function fh(t, e) {
  const s = xt(e.whereExpression);
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
function dh(t, e, s, n, r) {
  if (e.length === 1) {
    const c = e[0], l = c.expression;
    if (l.type === "ref") {
      const h = l.path, f = en(c, t);
      ws(h[0], h, t, f);
      const p = Dt(t, h, f);
      if (p && p.supports("gt")) {
        const d = (y) => {
          const g = t.get(y);
          return g === void 0 ? false : (n == null ? void 0 : n(g)) ?? true;
        };
        return p.take(s ?? p.keyCount, void 0, d);
      }
    }
  }
  if (r) return;
  const i = [];
  for (const [c, l] of t.entries()) ((n == null ? void 0 : n(l)) ?? true) && i.push({ key: c, value: l });
  const o = (c, l) => {
    for (const u of e) {
      const h = ns(u.compareOptions), f = Nr(c.value, u.expression), p = Nr(l.value, u.expression), d = h(f, p);
      if (d !== 0) return d;
    }
    return 0;
  };
  i.sort(o);
  const a = i.map((c) => c.key);
  return s !== void 0 ? a.slice(0, s) : a;
}
function Nr(t, e) {
  if (e.type === "ref") {
    const s = e;
    let n = t;
    for (const r of s.path) n = n == null ? void 0 : n[r];
    return n;
  } else return e.type === "val" ? e.value : _n(e)(t);
}
class Ur {
  constructor(e) {
    this.map = /* @__PURE__ */ new Map(), this.sortedKeys = [], this.comparator = e;
  }
  indexOf(e, s) {
    let n = 0, r = this.sortedKeys.length;
    if (!this.comparator) {
      for (; n < r; ) {
        const i = Math.floor((n + r) / 2), o = this.sortedKeys[i], a = rs(e, o);
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
        const l = rs(e, o);
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
class ph {
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
        const u = [], h = this.config.sync.rowUpdateMode || "partial";
        for (const p of n) {
          if (p.truncate) {
            const d = /* @__PURE__ */ new Set([...this.syncedData.keys(), ...(a == null ? void 0 : a.upserts.keys()) || []]);
            for (const y of d) {
              if (a == null ? void 0 : a.deletes.has(y)) continue;
              const g = (a == null ? void 0 : a.upserts.get(y)) || this.syncedData.get(y);
              g !== void 0 && u.push({ type: "delete", key: y, value: g });
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
                if (h === "partial") {
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
          for (const g of n) for (const m of g.operations) (m.type === "insert" || m.type === "update") && p.add(m.key);
          const d = new Map(a.upserts), y = new Set(a.deletes);
          for (const [g, m] of d) if (!y.has(g)) if (p.has(g)) {
            let S = false;
            for (let b = u.length - 1; b >= 0; b--) {
              const v = u[b];
              if (v.key === g && v.type === "insert") {
                v.value = m, S = true;
                break;
              }
            }
            S || u.push({ type: "insert", key: g, value: m });
          } else u.push({ type: "insert", key: g, value: m });
          if (u.length > 0 && y.size > 0) {
            const g = [];
            for (const m of u) m.type === "insert" && y.has(m.key) || g.push(m);
            u.length = 0, u.push(...g);
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
          let m = false;
          g && (g.type === "delete" && d !== void 0 && y === void 0 && Pe(g.value, d) || y !== void 0 && Pe(g.value, y)) && (m = true), m || (d === void 0 && y !== void 0 ? u.push({ type: "insert", key: p, value: y }) : d !== void 0 && y === void 0 ? u.push({ type: "delete", key: p, value: d }) : d !== void 0 && y !== void 0 && !Pe(d, y) && u.push({ type: "update", key: p, value: y, previousValue: d }));
        }
        this.size = this.calculateSize(), u.length > 0 && this.indexes.updateIndexes(u), this.changes.emitEvents(u, true), this.pendingSyncedTransactions = r, this.preSyncVisibleState.clear(), Promise.resolve().then(() => {
          this.recentlySyncedKeys.clear();
        }), this.hasReceivedFirstCommit || (this.hasReceivedFirstCommit = true);
      }
    }, this.config = e, this.transactions = new Ur((s, n) => s.compareCreatedAt(n)), this.syncedData = new Ur(e.compare);
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
      for (const l of this.pendingSyncedTransactions) for (const u of l.operations) a.add(u.key);
      const c = o.filter((l) => !(l.type === "delete" && a.has(l.key) && !r.some((h) => h.mutations.some((f) => this.isThisCollection(f.collection) && f.key === l.key))));
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
class Fi {
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
function yh(t, e) {
  if (e.length === 0 || t.length === 0) return;
  if (t.length === 1) {
    const { expression: n, compareOptions: r } = t[0];
    return (r.direction === "asc" ? jr : Ys)(n, new he(e[0]));
  }
  const s = [];
  for (let n = 0; n < t.length && n < e.length; n++) {
    const r = t[n], i = e[n], o = [];
    for (let l = 0; l < n; l++) {
      const u = t[l], h = e[l];
      o.push(Js(u.expression, new he(h)));
    }
    const c = (r.compareOptions.direction === "asc" ? jr : Ys)(r.expression, new he(i));
    if (o.length === 0) s.push(c);
    else {
      const l = [...o, c];
      s.push(l.reduce((u, h) => Xs(u, h)));
    }
  }
  return s.length === 1 ? s[0] : s.reduce((n, r) => Xu(n, r));
}
class gh extends Fi {
  constructor(e, s, n) {
    super(), this.collection = e, this.callback = s, this.options = n, this.loadedInitialState = false, this.skipFiltering = false, this.snapshotSent = false, this.loadedSubsets = [], this.sentKeys = /* @__PURE__ */ new Set(), this.limitedSnapshotRowCount = 0, this._status = "ready", this.pendingLoadSubsetPromises = /* @__PURE__ */ new Set(), this.isBufferingForTruncate = false, this.truncateBuffer = [], this.pendingTruncateRefetches = /* @__PURE__ */ new Set(), n.onUnsubscribe && this.on("unsubscribed", (i) => n.onUnsubscribe(i)), n.whereExpression && th(n.whereExpression, this.collection);
    const r = (i) => {
      s(i), this.trackSentKeys(i);
    };
    this.callback = r, this.filteredCallback = n.whereExpression ? fh(this.callback, n) : this.callback, this.truncateCleanup = this.collection.on("truncate", () => {
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
    if (this.loadedInitialState) return false;
    const s = { where: this.options.whereExpression, optimizedOnly: (e == null ? void 0 : e.optimizedOnly) ?? false };
    if (e) {
      if ("where" in e) {
        const c = e.where;
        if (s.where) {
          const l = s.where, u = Xs(l, c);
          s.where = u;
        } else s.where = c;
      }
    } else this.loadedInitialState = true;
    const n = { where: s.where, subscription: this, orderBy: e == null ? void 0 : e.orderBy, limit: e == null ? void 0 : e.limit }, r = this.collection._sync.loadSubset(n);
    this.loadedSubsets.push(n), ((e == null ? void 0 : e.trackLoadSubsetPromise) ?? true) && this.trackLoadSubsetPromise(r);
    const o = this.collection.currentStateAsChanges(s);
    if (o === void 0) return false;
    const a = o.filter((c) => !this.sentKeys.has(c.key));
    for (const c of a) this.sentKeys.add(c.key);
    return this.snapshotSent = true, this.callback(a), true;
  }
  requestLimitedSnapshot({ orderBy: e, limit: s, minValues: n, offset: r }) {
    if (!s) throw new Error("limit is required");
    if (!this.orderByIndex) throw new Error("Ordered snapshot was requested but no index was found. You have to call setOrderByIndex before requesting an ordered snapshot.");
    const o = n == null ? void 0 : n[0], a = this.orderByIndex, c = this.options.whereExpression, l = c ? xt(c) : void 0, u = (M) => {
      if (this.sentKeys.has(M)) return false;
      const O = this.collection.get(M);
      return O === void 0 ? false : (l == null ? void 0 : l(O)) ?? true;
    };
    let h = o;
    const f = [];
    let p = [];
    if (o !== void 0) {
      const { expression: M } = e[0], O = this.collection.currentStateAsChanges({ where: Js(M, new he(o)) });
      if (O) {
        const x = O.map((I) => I.key).filter((I) => !this.sentKeys.has(I) && u(I));
        p.push(...x);
        const P = a.take(s - p.length, o, u);
        p.push(...P);
      } else p = a.take(s, o, u);
    } else p = a.take(s, o, u);
    const d = () => Math.max(s - f.length, 0), y = () => p.length === 0, g = e[0].expression, m = g.type === "ref" ? fe(new ce(g.path), true) : null;
    for (; d() > 0 && !y(); ) {
      const M = /* @__PURE__ */ new Set();
      for (const O of p) {
        const x = this.collection.get(O);
        f.push({ type: "insert", key: O, value: x }), h = m ? m(x) : x, M.add(O);
      }
      p = a.take(d(), h, u);
    }
    const S = this.limitedSnapshotRowCount;
    for (const M of f) this.sentKeys.add(M.key);
    this.callback(f), this.limitedSnapshotRowCount += f.length, f.length > 0 && (this.lastSentKey = f[f.length - 1].key);
    let b;
    if (n !== void 0 && n.length > 0) {
      const M = yh(e, n);
      if (M) {
        const { expression: O } = e[0], x = n[0];
        let P;
        if (x instanceof Date) {
          const I = new Date(x.getTime() + 1);
          P = Xs(Yu(O, new he(x)), Ys(O, new he(I)));
        } else P = Js(O, new he(x));
        b = { whereFrom: M, whereCurrent: P, lastKey: this.lastSentKey };
      }
    }
    const v = { where: c, limit: s, orderBy: e, cursor: b, offset: r ?? S, subscription: this }, E = this.collection._sync.loadSubset(v);
    this.loadedSubsets.push(v), this.trackLoadSubsetPromise(E);
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
    if (!(this.loadedInitialState || this.skipFiltering)) for (const s of e) s.type === "delete" ? this.sentKeys.delete(s.key) : this.sentKeys.add(s.key);
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
class mh {
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
      const a = Ai(), c = n(a);
      i = G(c);
    }
    const o = new gh(this.collection, e, { ...r, whereExpression: i, onUnsubscribe: () => {
      this.removeSubscriber(), this.changeSubscriptions.delete(o);
    } });
    return s.onStatusChange && o.on("status:change", s.onStatusChange), s.includeInitialState ? o.requestSnapshot({ trackLoadSubsetPromise: false }) : s.includeInitialState === false && o.markAllStateAsSeen(), this.changeSubscriptions.add(o), o;
  }
  addSubscriber() {
    const e = this.activeSubscribersCount;
    this.activeSubscribersCount++, this.lifecycle.cancelGCTimer(), (this.lifecycle.status === "cleaned-up" || this.lifecycle.status === "idle") && this.sync.startSync(), this.events.emitSubscribersChange(this.activeSubscribersCount, e);
  }
  removeSubscriber() {
    const e = this.activeSubscribersCount;
    if (this.activeSubscribersCount--, this.activeSubscribersCount === 0) this.lifecycle.startGCTimer();
    else if (this.activeSubscribersCount < 0) throw new Ic();
    this.events.emitSubscribersChange(this.activeSubscribersCount, e);
  }
  cleanup() {
    this.batchedEvents = [], this.shouldBatchEvents = false;
  }
}
const wh = (t) => setTimeout(() => {
  t({ didTimeout: true, timeRemaining: () => 50 });
}, 0), vh = (t) => {
  clearTimeout(t);
}, Sh = typeof window < "u" && "requestIdleCallback" in window ? (t, e) => window.requestIdleCallback(t, e) : (t, e) => wh(t), Bs = typeof window < "u" && "cancelIdleCallback" in window ? (t) => window.cancelIdleCallback(t) : vh;
class bh {
  constructor(e, s) {
    this.status = "idle", this.hasBeenReady = false, this.hasReceivedFirstCommit = false, this.onFirstReadyCallbacks = [], this.gcTimeoutId = null, this.idleCallbackId = null, this.config = e, this.id = s;
  }
  setDeps(e) {
    this.indexes = e.indexes, this.events = e.events, this.changes = e.changes, this.sync = e.sync, this.state = e.state;
  }
  validateStatusTransition(e, s) {
    if (e === s) return;
    if (!{ idle: ["loading", "error", "cleaned-up"], loading: ["ready", "error", "cleaned-up"], ready: ["cleaned-up", "error"], error: ["cleaned-up", "idle"], "cleaned-up": ["loading", "error"] }[e].includes(s)) throw new _c(e, s, this.id);
  }
  setStatus(e, s = false) {
    if (e === "ready" && !s) throw new Ft(`You can't directly call "setStatus('ready'). You must use markReady instead.`);
    this.validateStatusTransition(this.status, e);
    const n = this.status;
    this.status = e, e === "ready" && !this.indexes.isIndexesResolved && this.indexes.resolveAllIndexes().catch((r) => {
      console.warn(`${this.config.id ? `[${this.config.id}] ` : ""}Failed to resolve indexes:`, r);
    }), this.events.emitStatusChange(e, n);
  }
  validateCollectionUsable(e) {
    switch (this.status) {
      case "error":
        throw new Cc(e, this.id);
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
    this.gcTimeoutId && (clearTimeout(this.gcTimeoutId), this.gcTimeoutId = null), this.idleCallbackId !== null && (Bs(this.idleCallbackId), this.idleCallbackId = null);
  }
  scheduleIdleCleanup() {
    this.idleCallbackId !== null && Bs(this.idleCallbackId), this.idleCallbackId = Sh((e) => {
      this.changes.activeSubscribersCount === 0 ? this.performCleanup(e) && (this.idleCallbackId = null) : this.idleCallbackId = null;
    }, { timeout: 1e3 });
  }
  performCleanup(e) {
    return !e || e.timeRemaining() > 0 || e.didTimeout ? (this.sync.cleanup(), this.state.cleanup(), this.changes.cleanup(), this.indexes.cleanup(), this.gcTimeoutId && (clearTimeout(this.gcTimeoutId), this.gcTimeoutId = null), this.hasBeenReady = false, this.onFirstReadyCallbacks = [], this.setStatus("cleaned-up"), this.events.cleanup(), true) : (this.scheduleIdleCleanup(), false);
  }
  onFirstReady(e) {
    if (this.hasBeenReady) {
      e();
      return;
    }
    this.onFirstReadyCallbacks.push(e);
  }
  cleanup() {
    this.idleCallbackId !== null && (Bs(this.idleCallbackId), this.idleCallbackId = null), this.performCleanup();
  }
}
const Tn = /* @__PURE__ */ Symbol("liveQueryInternal");
class xh {
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
        const e = Ph(this.config.sync.sync({ collection: this.collection, begin: (s) => {
          this.state.pendingSyncedTransactions.push({ committed: false, operations: [], deletedKeys: /* @__PURE__ */ new Set(), immediate: s == null ? void 0 : s.immediate });
        }, write: (s) => {
          const n = this.state.pendingSyncedTransactions[this.state.pendingSyncedTransactions.length - 1];
          if (!n) throw new br();
          if (n.committed) throw new xr();
          let r;
          "key" in s ? r = s.key : r = this.config.getKey(s.value);
          let i = s.type;
          if (s.type === "insert") {
            const a = this.state.syncedData.has(r), c = n.deletedKeys.has(r), l = n.truncate === true;
            if (a && !c && !l) {
              const u = this.state.syncedData.get(r);
              if (u !== void 0 && Pe(u, s.value)) i = "update";
              else {
                const p = this.config.utils[Tn];
                throw new Tc(r, this.id, { hasCustomGetKey: (p == null ? void 0 : p.hasCustomGetKey) ?? false, hasJoins: (p == null ? void 0 : p.hasJoins) ?? false, hasDistinct: (p == null ? void 0 : p.hasDistinct) ?? false });
              }
            }
          }
          const o = { ...s, type: i, key: r };
          n.operations.push(o), i === "delete" && n.deletedKeys.add(r);
        }, commit: () => {
          const s = this.state.pendingSyncedTransactions[this.state.pendingSyncedTransactions.length - 1];
          if (!s) throw new qc();
          if (s.committed) throw new Hc();
          s.committed = true, this.state.commitPendingTransactions();
        }, markReady: () => {
          this.lifecycle.markReady();
        }, truncate: () => {
          const s = this.state.pendingSyncedTransactions[this.state.pendingSyncedTransactions.length - 1];
          if (!s) throw new br();
          if (s.committed) throw new xr();
          s.operations = [], s.deletedKeys.clear(), s.truncate = true, s.optimisticSnapshot = { upserts: new Map(this.state.optimisticUpserts), deletes: new Set(this.state.optimisticDeletes) };
        } }));
        if (this.syncCleanupFn = (e == null ? void 0 : e.cleanup) ?? null, this.syncLoadSubsetFn = (e == null ? void 0 : e.loadSubset) ?? null, this.syncUnloadSubsetFn = (e == null ? void 0 : e.unloadSubset) ?? null, this.syncMode === "on-demand" && !this.syncLoadSubsetFn) throw new Lt(`Collection "${this.id}" is configured with syncMode "on-demand" but the sync function did not return a loadSubset handler. Either provide a loadSubset handler or use syncMode "eager".`);
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
        s(new kc());
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
          const s = new Cr(this.id, e);
          throw s.cause = e, s.stack = e.stack, s;
        } else throw new Cr(this.id, e);
      });
    }
    this.preloadPromise = null;
  }
}
function Ph(t) {
  if (typeof t == "function") return { cleanup: t };
  if (typeof t == "object") return t;
}
function Di(t) {
  return typeof t == "function" && t.prototype !== void 0 && t.prototype.constructor === t;
}
async function Rh(t) {
  return Di(t) ? t : await t();
}
class Ch {
  constructor(e, s, n, r, i, o) {
    this.id = e, this.expression = s, this.name = n, this.resolver = r, this.options = i, this.collectionEntries = o, this.indexPromise = null, this.resolvedIndex = null, Di(this.resolver) && (this.resolvedIndex = new this.resolver(this.id, this.expression, this.name, this.options), this.collectionEntries && this.resolvedIndex.build(this.collectionEntries));
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
    const e = await Rh(this.resolver);
    return new e(this.id, this.expression, this.name, this.options);
  }
}
class _h {
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
class kh {
  constructor() {
    this.lazyIndexes = /* @__PURE__ */ new Map(), this.resolvedIndexes = /* @__PURE__ */ new Map(), this.isIndexesResolved = false, this.indexCounter = 0;
  }
  setDeps(e) {
    this.state = e.state, this.lifecycle = e.lifecycle;
  }
  createIndex(e, s = {}) {
    this.lifecycle.validateCollectionUsable("createIndex");
    const n = ++this.indexCounter, r = Ai(), i = e(r), o = G(i), a = s.indexType ?? Zs, c = new Ch(n, o, s.name, a, s.options, this.state.entries());
    if (this.lazyIndexes.set(n, c), a === Zs) try {
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
    return new _h(n, c);
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
var Ih = {};
const Eh = /* @__PURE__ */ new Set(["find", "findLast", "findIndex", "findLastIndex", "filter", "map", "flatMap", "forEach", "some", "every", "reduce", "reduceRight"]), Oh = /* @__PURE__ */ new Set(["pop", "push", "shift", "unshift", "splice", "sort", "reverse", "fill", "copyWithin"]), Mh = /* @__PURE__ */ new Set(["set", "delete", "clear", "add"]), Th = /* @__PURE__ */ new Set(["entries", "keys", "values", "forEach"]);
function An(t) {
  return t !== null && typeof t == "object" && !(t instanceof Date) && !(t instanceof RegExp) && !St(t);
}
function Ah(t, e, s, n) {
  if (Eh.has(t)) return function(...r) {
    const i = r[0];
    if (typeof i != "function") return e.apply(s.copy_, r);
    const o = (l, u) => {
      if (An(l)) {
        const h = { tracker: s, prop: String(u) }, { proxy: f } = n(l, h);
        return f;
      }
      return l;
    }, a = function(l, u, h) {
      const f = o(l, u);
      return i.call(this, f, u, h);
    };
    if (t === "reduce" || t === "reduceRight") {
      const l = function(u, h, f, p) {
        const d = o(h, f);
        return i.call(this, u, d, f, p);
      };
      return e.apply(s.copy_, [l, ...r.slice(1)]);
    }
    const c = e.apply(s.copy_, [a, ...r.slice(1)]);
    if ((t === "find" || t === "findLast") && c && typeof c == "object") {
      const l = s.copy_.indexOf(c);
      if (l !== -1) return o(c, l);
    }
    return t === "filter" && Array.isArray(c) ? c.map((l) => {
      const u = s.copy_.indexOf(l);
      return u !== -1 ? o(l, u) : l;
    }) : c;
  };
}
function Lh(t, e) {
  return function() {
    const s = t.copy_;
    let n = 0;
    return { next() {
      if (n >= s.length) return { done: true, value: void 0 };
      const r = s[n];
      let i = r;
      if (An(r)) {
        const o = { tracker: t, prop: String(n) }, { proxy: a } = e(r, o);
        i = a;
      }
      return n++, { done: false, value: i };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Vr(t, e, s) {
  return function(...n) {
    const r = t.apply(e.copy_, n);
    return s(e), r;
  };
}
function Fh(t, e, s, n, r, i, o) {
  if (Th.has(t) || e === Symbol.iterator) return function(...c) {
    const l = s.apply(r.copy_, c);
    if (t === "forEach") {
      const h = c[0];
      if (typeof h == "function") {
        const f = function(p, d, y) {
          const g = h.call(this, p, d, y);
          return o(r), g;
        };
        return s.apply(n, [f, ...c.slice(1)]);
      }
    }
    if (t === "entries" || t === "values" || t === Symbol.iterator.toString() || e === Symbol.iterator) {
      const h = l, f = /* @__PURE__ */ new Map();
      if (t === "values" && n instanceof Map) for (const [d, y] of r.copy_.entries()) f.set(y, d);
      const p = /* @__PURE__ */ new Map();
      if (n instanceof Set) for (const d of r.copy_.values()) p.set(d, d);
      return { next() {
        const d = h.next();
        if (!d.done && d.value && typeof d.value == "object") {
          if (t === "entries" && Array.isArray(d.value) && d.value.length === 2) {
            if (d.value[1] && typeof d.value[1] == "object") {
              const y = d.value[0], g = { tracker: r, prop: y, updateMap: (S) => {
                r.copy_ instanceof Map && r.copy_.set(y, S);
              } }, { proxy: m } = i(d.value[1], g);
              d.value[1] = m;
            }
          } else if (t === "values" || t === Symbol.iterator.toString() || e === Symbol.iterator) if (t === "values" && n instanceof Map) {
            const y = f.get(d.value);
            if (y !== void 0) {
              const g = { tracker: r, prop: y, updateMap: (S) => {
                r.copy_ instanceof Map && r.copy_.set(y, S);
              } }, { proxy: m } = i(d.value, g);
              d.value = m;
            }
          } else if (n instanceof Set) {
            const y = d.value, g = { tracker: r, prop: y, updateSet: (S) => {
              r.copy_ instanceof Set && (r.copy_.delete(y), r.copy_.add(S), p.set(y, S));
            } }, { proxy: m } = i(d.value, g);
            d.value = m;
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
  e && localStorage.getItem("DEBUG") === "true" ? console.log("[proxy]", ...t) : !e && typeof process < "u" && Ih.DEBUG === "true" && console.log("[proxy]", ...t);
}
function Ee(t, e = /* @__PURE__ */ new WeakMap()) {
  if (t == null || typeof t != "object") return t;
  if (e.has(t)) return e.get(t);
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof RegExp) return new RegExp(t.source, t.flags);
  if (Array.isArray(t)) {
    const r = [];
    return e.set(t, r), t.forEach((i, o) => {
      r[o] = Ee(i, e);
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
      r.set(o, Ee(i, e));
    }), r;
  }
  if (t instanceof Set) {
    const r = /* @__PURE__ */ new Set();
    return e.set(t, r), t.forEach((i) => {
      r.add(Ee(i, e));
    }), r;
  }
  if (St(t)) return t;
  const s = {};
  e.set(t, s);
  for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (s[r] = Ee(t[r], e));
  const n = Object.getOwnPropertySymbols(t);
  for (const r of n) s[r] = Ee(t[r], e);
  return s;
}
let Wr = 0;
function Dh() {
  return Wr += 1, Wr;
}
function Ln(t, e) {
  const s = /* @__PURE__ */ new Map();
  function n(h, f) {
    if (D("Object ID:", h.constructor.name), s.has(h)) return s.get(h);
    {
      const p = Ln(h, f);
      return s.set(h, p), p;
    }
  }
  const r = /* @__PURE__ */ new Map(), i = { copy_: Ee(t), originalObject: Ee(t), proxyCount: Dh(), modified: false, assigned_: {}, parent: e, target: t };
  D("createChangeProxy called for target", t, i.proxyCount);
  function o(h) {
    h.modified || (h.modified = true), h.parent && (D("propagating change to parent"), "updateMap" in h.parent ? h.parent.updateMap(h.copy_) : "updateSet" in h.parent ? h.parent.updateSet(h.copy_) : (h.parent.tracker.copy_[h.parent.prop] = h.copy_, h.parent.tracker.assigned_[h.parent.prop] = true), o(h.parent.tracker));
  }
  function a(h) {
    if (D("checkIfReverted called with assigned keys:", Object.keys(h.assigned_)), Object.keys(h.assigned_).length === 0 && Object.getOwnPropertySymbols(h.assigned_).length === 0) return D("No assigned properties, returning true"), true;
    for (const p in h.assigned_) if (h.assigned_[p] === true) {
      const d = h.copy_[p], y = h.originalObject[p];
      if (D(`Checking property ${String(p)}, current:`, d, "original:", y), !Pe(d, y)) return D(`Property ${String(p)} is different, returning false`), false;
    } else if (h.assigned_[p] === false) return D(`Property ${String(p)} was deleted, returning false`), false;
    const f = Object.getOwnPropertySymbols(h.assigned_);
    for (const p of f) if (h.assigned_[p] === true) {
      const d = h.copy_[p], y = h.originalObject[p];
      if (!Pe(d, y)) return D("Symbol property is different, returning false"), false;
    } else if (h.assigned_[p] === false) return D("Symbol property was deleted, returning false"), false;
    return D("All properties match original values, returning true"), true;
  }
  function c(h, f) {
    D("checkParentStatus called for child prop:", f);
    const p = a(h);
    D("Parent checkIfReverted returned:", p), p && (D("Parent is fully reverted, clearing tracking"), h.modified = false, h.assigned_ = {}, h.parent && (D("Continuing up the parent chain"), c(h.parent.tracker, h.parent.prop)));
  }
  function l(h) {
    if (D("createObjectProxy", h), r.has(h)) return D("proxyCache found match"), r.get(h);
    const f = new Proxy(h, { get(p, d) {
      var _a5;
      D("get", p, d);
      const y = i.copy_[d] ?? i.originalObject[d], g = i.originalObject[d];
      if (D("value (at top of proxy get)", y), (_a5 = Object.getOwnPropertyDescriptor(p, d)) == null ? void 0 : _a5.get) return y;
      if (typeof y == "function") {
        if (Array.isArray(p)) {
          const S = d.toString();
          if (Oh.has(S)) return Vr(y, i, o);
          const b = Ah(S, y, i, n);
          if (b) return b;
          if (d === Symbol.iterator) return Lh(i, n);
        }
        if (p instanceof Map || p instanceof Set) {
          const S = d.toString();
          if (Mh.has(S)) return Vr(y, i, o);
          const b = Fh(S, d, y, p, i, n, o);
          if (b) return b;
        }
        return y.bind(p);
      }
      if (An(y)) {
        const S = { tracker: i, prop: String(d) }, { proxy: b } = n(g, S);
        return r.set(y, b), b;
      }
      return y;
    }, set(p, d, y) {
      const g = i.copy_[d];
      if (D(`set called for property ${String(d)}, current:`, g, "new:", y), Pe(g, y)) D("Value unchanged, not tracking");
      else {
        const m = i.originalObject[d], S = Pe(y, m);
        if (D("value:", y, "original:", m, "isRevertToOriginal:", S), S) {
          D(`Reverting property ${String(d)} to original value`), delete i.assigned_[d.toString()], D(`Updating copy with original value for ${String(d)}`), i.copy_[d] = Ee(m), D("Checking if all properties reverted");
          const b = a(i);
          D("All reverted:", b), b ? (D("All properties reverted, clearing tracking"), i.modified = false, i.assigned_ = {}, e && (D("Updating parent for property:", e.prop), c(e.tracker, e.prop))) : (D("Some properties still changed, keeping modified flag"), i.modified = true);
        } else D(`Setting new value for property ${String(d)}`), i.copy_[d] = y, i.assigned_[d.toString()] = true, D("Marking object and ancestors as modified", i), o(i);
      }
      return true;
    }, defineProperty(p, d, y) {
      const g = Reflect.defineProperty(p, d, y);
      return g && "value" in y && (i.copy_[d] = Ee(y.value), i.assigned_[d.toString()] = true, o(i)), g;
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
        const g = y in i.originalObject, m = Reflect.deleteProperty(p, d);
        return m && (g ? (i.assigned_[y] = false, o(i)) : (delete i.assigned_[y], Object.keys(i.assigned_).length === 0 && Object.getOwnPropertySymbols(i.assigned_).length === 0 ? i.modified = false : i.modified = true)), m;
      }
      return true;
    } });
    return r.set(h, f), f;
  }
  return { proxy: l(i.copy_), getChanges: () => {
    if (D("getChanges called, modified:", i.modified), D(i), !i.modified) return D("Object not modified, returning empty object"), {};
    if (typeof i.copy_ != "object" || Array.isArray(i.copy_) || Object.keys(i.assigned_).length === 0) return i.copy_;
    const h = {};
    for (const f in i.copy_) i.assigned_[f] === true && f in i.copy_ && (h[f] = i.copy_[f]);
    return D("Returning copy:", h), h;
  } };
}
function Bh(t) {
  const e = t.map((s) => Ln(s));
  return { proxies: e.map((s) => s.proxy), getChanges: () => e.map((s) => s.getChanges()) };
}
function Kh(t, e) {
  const { proxy: s, getChanges: n } = Ln(t);
  return e(s), n();
}
function jh(t, e) {
  const { proxies: s, getChanges: n } = Bh(t);
  return e(s), n();
}
function zh() {
  let t, e, s = true;
  return { promise: new Promise((r, i) => {
    t = (o) => {
      s = false, r(o);
    }, e = (o) => {
      s = false, i(o);
    };
  }), resolve: t, reject: e, isPending: () => s };
}
function $h(t) {
  return typeof t == "object" && t !== null && typeof t.hasPendingGraphRun == "function";
}
class Nh {
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
        const u = n.shift(), h = r.get(u);
        if (!h) {
          i.delete(u), o.delete(u);
          continue;
        }
        const f = i.get(u);
        let p = !f;
        if (f) {
          p = true;
          for (const d of f) {
            if (d === u) continue;
            const y = $h(d) && d.hasPendingGraphRun(e);
            if (r.has(d) && !o.has(d) || !r.has(d) && y) {
              p = false;
              break;
            }
          }
        }
        p ? (r.delete(u), i.delete(u), h(), o.add(u), a = true) : n.push(u);
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
const as = new Nh(), cs = [];
let At = [], Uh = 0;
function Vh(t, e) {
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
function Nt(t) {
  const e = new Gh(t);
  return cs.push(e), e;
}
function Gt() {
  if (At.length > 0) return At.slice(-1)[0];
}
function Wh(t) {
  as.clear(t.id), At.push(t);
}
function qh(t) {
  try {
    as.flush(t.id);
  } finally {
    At = At.filter((e) => e.id !== t.id);
  }
}
function Hh(t) {
  const e = cs.findIndex((s) => s.id === t.id);
  e !== -1 && cs.splice(e, 1);
}
class Gh {
  constructor(e) {
    if (typeof e.mutationFn > "u") throw new Nc();
    this.id = e.id ?? crypto.randomUUID(), this.mutationFn = e.mutationFn, this.state = "pending", this.mutations = [], this.isPersisted = zh(), this.autoCommit = e.autoCommit ?? true, this.createdAt = /* @__PURE__ */ new Date(), this.sequenceNumber = Uh++, this.metadata = e.metadata ?? {};
  }
  setState(e) {
    this.state = e, (e === "completed" || e === "failed") && Hh(this);
  }
  mutate(e) {
    if (this.state !== "pending") throw new Uc();
    Wh(this);
    try {
      e();
    } finally {
      qh(this);
    }
    return this.autoCommit && this.commit().catch(() => {
    }), this;
  }
  applyMutations(e) {
    for (const s of e) {
      const n = this.mutations.findIndex((r) => r.globalKey === s.globalKey);
      if (n >= 0) {
        const r = this.mutations[n], i = Vh(r, s);
        i === null ? this.mutations.splice(n, 1) : this.mutations[n] = i;
      } else this.mutations.push(s);
    }
  }
  rollback(e) {
    var _a5;
    const s = (e == null ? void 0 : e.isSecondaryRollback) ?? false;
    if (this.state === "completed") throw new Vc();
    if (this.setState("failed"), !s) {
      const n = /* @__PURE__ */ new Set();
      this.mutations.forEach((r) => n.add(r.globalKey));
      for (const r of cs) r.state === "pending" && r.mutations.some((i) => n.has(i.globalKey)) && r.rollback({ isSecondaryRollback: true });
    }
    return this.isPersisted.reject((_a5 = this.error) == null ? void 0 : _a5.error), this.touchCollection(), this;
  }
  touchCollection() {
    const e = /* @__PURE__ */ new Set();
    for (const s of this.mutations) e.has(s.collection.id) || (s.collection._state.onTransactionStateChange(), s.collection._state.pendingSyncedTransactions.length > 0 && s.collection._state.commitPendingTransactions(), e.add(s.collection.id));
  }
  async commit() {
    if (this.state !== "pending") throw new Wc();
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
class Qh {
  constructor(e, s) {
    this.insert = (n, r) => {
      this.lifecycle.validateCollectionUsable("insert");
      const i = this.state, o = Gt();
      if (!o && !this.config.onInsert) throw new jc();
      const a = Array.isArray(n) ? n : [n], c = [], l = /* @__PURE__ */ new Set();
      if (a.forEach((u) => {
        var _a5, _b2;
        const h = this.validateData(u, "insert"), f = this.config.getKey(h);
        if (this.state.has(f) || l.has(f)) throw new Mc(f);
        l.add(f);
        const p = this.generateGlobalKey(f, u), d = { mutationId: crypto.randomUUID(), original: {}, modified: h, changes: Object.fromEntries(Object.keys(u).map((y) => [y, h[y]])), globalKey: p, key: f, metadata: r == null ? void 0 : r.metadata, syncMetadata: ((_b2 = (_a5 = this.config.sync).getSyncMetadata) == null ? void 0 : _b2.call(_a5)) || {}, optimistic: (r == null ? void 0 : r.optimistic) ?? true, type: "insert", createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date(), collection: this.collection };
        c.push(d);
      }), o) return o.applyMutations(c), i.transactions.set(o.id, o), i.scheduleTransactionCleanup(o), i.recomputeOptimisticState(true), o;
      {
        const u = Nt({ mutationFn: async (h) => await this.config.onInsert({ transaction: h.transaction, collection: this.collection }) });
        return u.applyMutations(c), u.commit().catch(() => {
        }), i.transactions.set(u.id, u), i.scheduleTransactionCleanup(u), i.recomputeOptimisticState(true), u;
      }
    }, this.delete = (n, r) => {
      const i = this.state;
      this.lifecycle.validateCollectionUsable("delete");
      const o = Gt();
      if (!o && !this.config.onDelete) throw new $c();
      if (Array.isArray(n) && n.length === 0) throw new Bc();
      const a = Array.isArray(n) ? n : [n], c = [];
      for (const u of a) {
        if (!this.state.has(u)) throw new Kc(u);
        const h = this.generateGlobalKey(u, this.state.get(u)), f = { mutationId: crypto.randomUUID(), original: this.state.get(u), modified: this.state.get(u), changes: this.state.get(u), globalKey: h, key: u, metadata: r == null ? void 0 : r.metadata, syncMetadata: i.syncedMetadata.get(u) || {}, optimistic: (r == null ? void 0 : r.optimistic) ?? true, type: "delete", createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date(), collection: this.collection };
        c.push(f);
      }
      if (o) return o.applyMutations(c), i.transactions.set(o.id, o), i.scheduleTransactionCleanup(o), i.recomputeOptimisticState(true), o;
      const l = Nt({ autoCommit: true, mutationFn: async (u) => this.config.onDelete({ transaction: u.transaction, collection: this.collection }) });
      return l.applyMutations(c), l.commit().catch(() => {
      }), i.transactions.set(l.id, l), i.scheduleTransactionCleanup(l), i.recomputeOptimisticState(true), l;
    }, this.id = s, this.config = e;
  }
  setDeps(e) {
    this.lifecycle = e.lifecycle, this.state = e.state, this.collection = e.collection;
  }
  ensureStandardSchema(e) {
    if (e && "~standard" in e) return e;
    throw new Rc();
  }
  validateData(e, s, n) {
    if (!this.config.schema) return e;
    const r = this.ensureStandardSchema(this.config.schema);
    if (s === "update" && n) {
      const o = this.state.get(n);
      if (o && e && typeof e == "object" && typeof o == "object") {
        const a = Object.assign({}, o, e), c = r["~standard"].validate(a);
        if (c instanceof Promise) throw new Sr();
        if ("issues" in c && c.issues) {
          const f = c.issues.map((p) => {
            var _a5;
            return { message: p.message, path: (_a5 = p.path) == null ? void 0 : _a5.map((d) => String(d)) };
          });
          throw new vr(s, f);
        }
        const l = c.value, u = Object.keys(e);
        return Object.fromEntries(u.map((f) => [f, l[f]]));
      }
    }
    const i = r["~standard"].validate(e);
    if (i instanceof Promise) throw new Sr();
    if ("issues" in i && i.issues) {
      const o = i.issues.map((a) => {
        var _a5;
        return { message: a.message, path: (_a5 = a.path) == null ? void 0 : _a5.map((c) => String(c)) };
      });
      throw new vr(s, o);
    }
    return i.value;
  }
  generateGlobalKey(e, s) {
    if (typeof e != "string" && typeof e != "number") throw typeof e > "u" ? new Ec(s) : new Oc(e, s);
    return `KEY::${this.id}/${e}`;
  }
  update(e, s, n) {
    if (typeof e > "u") throw new Ac();
    const r = this.state;
    this.lifecycle.validateCollectionUsable("update");
    const i = Gt();
    if (!i && !this.config.onUpdate) throw new zc();
    const o = Array.isArray(e), a = o ? e : [e];
    if (o && a.length === 0) throw new Lc();
    const c = typeof s == "function" ? s : n, l = typeof s == "function" ? {} : s, u = a.map((d) => {
      const y = this.state.get(d);
      if (!y) throw new Fc(d);
      return y;
    });
    let h;
    o ? h = jh(u, c) : h = [Kh(u[0], c)];
    const f = a.map((d, y) => {
      const g = h[y];
      if (!g || Object.keys(g).length === 0) return null;
      const m = u[y], S = this.validateData(g, "update", d), b = Object.assign({}, m, S), v = this.config.getKey(m), E = this.config.getKey(b);
      if (v !== E) throw new Dc(v, E);
      const M = this.generateGlobalKey(E, b);
      return { mutationId: crypto.randomUUID(), original: m, modified: b, changes: Object.fromEntries(Object.keys(g).map((O) => [O, b[O]])), globalKey: M, key: d, metadata: l.metadata, syncMetadata: r.syncedMetadata.get(d) || {}, optimistic: l.optimistic ?? true, type: "update", createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date(), collection: this.collection };
    }).filter(Boolean);
    if (f.length === 0) {
      const d = Nt({ mutationFn: async () => {
      } });
      return d.commit().catch(() => {
      }), r.scheduleTransactionCleanup(d), d;
    }
    if (i) return i.applyMutations(f), r.transactions.set(i.id, i), r.scheduleTransactionCleanup(i), r.recomputeOptimisticState(true), i;
    const p = Nt({ mutationFn: async (d) => this.config.onUpdate({ transaction: d.transaction, collection: this.collection }) });
    return p.applyMutations(f), p.commit().catch(() => {
    }), r.transactions.set(p.id, p), r.scheduleTransactionCleanup(p), r.recomputeOptimisticState(true), p;
  }
}
class Jh extends Fi {
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
function Yh(t) {
  const e = new Fn(t);
  return t.utils ? e.utils = t.utils : e.utils = {}, e;
}
class Fn {
  constructor(e) {
    if (this.utils = {}, this.insert = (s, n) => this._mutations.insert(s, n), this.delete = (s, n) => this._mutations.delete(s, n), !e) throw new xc();
    if (!e.sync) throw new Pc();
    e.id ? this.id = e.id : this.id = crypto.randomUUID(), this.config = { ...e, autoIndex: e.autoIndex ?? "eager" }, this._changes = new mh(), this._events = new Jh(), this._indexes = new kh(), this._lifecycle = new bh(e, this.id), this._mutations = new Qh(e, this.id), this._state = new ph(e), this._sync = new xh(e, this.id), this.comparisonOpts = Xh(e), this._changes.setDeps({ collection: this, lifecycle: this._lifecycle, sync: this._sync, events: this._events }), this._events.setDeps({ collection: this }), this._indexes.setDeps({ state: this._state, lifecycle: this._lifecycle }), this._lifecycle.setDeps({ changes: this._changes, events: this._events, indexes: this._indexes, state: this._state, sync: this._sync }), this._mutations.setDeps({ collection: this, lifecycle: this._lifecycle, state: this._state }), this._state.setDeps({ collection: this, lifecycle: this._lifecycle, changes: this._changes, indexes: this._indexes, events: this._events }), this._sync.setDeps({ collection: this, state: this._state, lifecycle: this._lifecycle, events: this._events }), e.startSync === true && this._sync.startSync();
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
    return hh(this, e);
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
function Xh(t) {
  if (t.defaultStringCollation) {
    const e = t.defaultStringCollation;
    return { stringSort: e.stringSort ?? "locale", locale: e.stringSort === "locale" ? e.locale : void 0, localeOptions: e.stringSort === "locale" ? e.localeOptions : void 0 };
  } else return { stringSort: "locale" };
}
class q {
  constructor(e = {}) {
    this.query = {}, this.query = { ...e };
  }
  _createRefForSource(e, s) {
    let n;
    try {
      n = Object.keys(e);
    } catch {
      const a = e === null ? "null" : "undefined";
      throw new zt(s, a);
    }
    if (Array.isArray(e)) throw new zt(s, "array");
    if (n.length !== 1) throw n.length === 0 ? new zt(s, "empty object") : n.every((a) => !isNaN(Number(a))) ? new zt(s, "string") : new Gc(s);
    const r = n[0], i = e[r];
    let o;
    if (i instanceof Fn) o = new ot(i, r);
    else if (i instanceof q) {
      const a = i._getQuery();
      if (!a.from) throw new Qc(s);
      o = new ge(a, r);
    } else throw new Jc(r);
    return [r, o];
  }
  from(e) {
    const [, s] = this._createRefForSource(e, "from clause");
    return new q({ ...this.query, from: s });
  }
  join(e, s, n = "left") {
    const [r, i] = this._createRefForSource(e, "join clause"), a = [...this._getCurrentAliases(), r], c = Ue(a), l = s(c);
    let u, h;
    if (l.type === "func" && l.name === "eq" && l.args.length === 2) u = l.args[0], h = l.args[1];
    else throw new Yc();
    const f = { from: i, type: n, left: u, right: h }, p = this.query.join || [];
    return new q({ ...this.query, join: [...p, f] });
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
    if (!Et(r)) throw new Pr(qr(r));
    const i = this.query.where || [];
    return new q({ ...this.query, where: [...i, r] });
  }
  having(e) {
    const s = this._getCurrentAliases(), n = this.query.select || this.query.fnSelect ? Kr(s) : Ue(s), r = e(n);
    if (!Et(r)) throw new Pr(qr(r));
    const i = this.query.having || [];
    return new q({ ...this.query, having: [...i, r] });
  }
  select(e) {
    const s = this._getCurrentAliases(), n = Ue(s), r = e(n), i = Bi(r);
    return new q({ ...this.query, select: i, fnSelect: void 0 });
  }
  orderBy(e, s = "asc") {
    const n = this._getCurrentAliases(), r = this.query.select || this.query.fnSelect ? Kr(n) : Ue(n), i = e(r), o = typeof s == "string" ? { direction: s, nulls: "first" } : { direction: s.direction ?? "asc", nulls: s.nulls ?? "first", stringSort: s.stringSort, locale: s.stringSort === "locale" ? s.locale : void 0, localeOptions: s.stringSort === "locale" ? s.localeOptions : void 0 }, a = (u) => ({ expression: G(u), compareOptions: o }), c = Array.isArray(i) ? i.map((u) => a(u)) : [a(i)], l = this.query.orderBy || [];
    return new q({ ...this.query, orderBy: [...l, ...c] });
  }
  groupBy(e) {
    const s = this._getCurrentAliases(), n = Ue(s), r = e(n), i = Array.isArray(r) ? r.map((a) => G(a)) : [G(r)], o = this.query.groupBy || [];
    return new q({ ...this.query, groupBy: [...o, ...i] });
  }
  limit(e) {
    return new q({ ...this.query, limit: e });
  }
  offset(e) {
    return new q({ ...this.query, offset: e });
  }
  distinct() {
    return new q({ ...this.query, distinct: true });
  }
  findOne() {
    return new q({ ...this.query, singleResult: true });
  }
  _getCurrentAliases() {
    const e = [];
    if (this.query.from && e.push(this.query.from.alias), this.query.join) for (const s of this.query.join) e.push(s.from.alias);
    return e;
  }
  get fn() {
    const e = this;
    return { select(s) {
      return new q({ ...e.query, select: void 0, fnSelect: s });
    }, where(s) {
      return new q({ ...e.query, fnWhere: [...e.query.fnWhere || [], s] });
    }, having(s) {
      return new q({ ...e.query, fnHaving: [...e.query.fnHaving || [], s] });
    } };
  }
  _getQuery() {
    if (!this.query.from) throw new Xc();
    return this.query;
  }
}
function qr(t) {
  return t === null ? "null" : t === void 0 ? "undefined" : typeof t == "object" ? "object" : typeof t;
}
function Zh(t) {
  return t === void 0 ? G(null) : t instanceof _i || t instanceof we || t instanceof ce || t instanceof he ? t : G(t);
}
function ef(t) {
  return t !== null && typeof t == "object" && !Et(t) && !t.__refProxy;
}
function Bi(t) {
  if (!ef(t)) return Zh(t);
  const e = {};
  for (const [s, n] of Object.entries(t)) {
    if (typeof s == "string" && s.startsWith("__SPREAD_SENTINEL__")) {
      e[s] = n;
      continue;
    }
    e[s] = Bi(n);
  }
  return e;
}
function tf(t) {
  const e = t(new q());
  return Ki(e);
}
function Ki(t) {
  return t._getQuery();
}
function sf(t) {
  const e = nf(t);
  let s = t, n, r = 0;
  const i = 10;
  for (; r < i && !Pe(s, n); ) n = s, s = tn(s), r++;
  return { optimizedQuery: ji(s), sourceWhereClauses: e };
}
function nf(t) {
  const e = /* @__PURE__ */ new Map();
  if (!t.where || t.where.length === 0) return e;
  const n = nn(t.where).map((i) => zi(i)), r = $i(n);
  for (const [i, o] of r.singleSource) rf(t, i) && e.set(i, o);
  return e;
}
function rf(t, e) {
  if (t.from.alias === e) return t.from.type === "collectionRef";
  if (t.join) {
    for (const s of t.join) if (s.from.alias === e) return s.from.type === "collectionRef";
  }
  return false;
}
function tn(t) {
  var _a5;
  const e = { ...t, from: t.from.type === "queryRef" ? new ge(tn(t.from.query), t.from.alias) : t.from, join: (_a5 = t.join) == null ? void 0 : _a5.map((s) => ({ ...s, from: s.from.type === "queryRef" ? new ge(tn(s.from.query), s.from.alias) : s.from })) };
  return of(e);
}
function of(t) {
  if (!t.where || t.where.length === 0) return t;
  if (!t.join || t.join.length === 0) {
    if (t.where.length > 1) {
      const a = nn(t.where), c = ls(a);
      return { ...t, where: [c] };
    }
    return t;
  }
  const e = t.where.filter((a) => !wr(a)), n = nn(e).map((a) => zi(a)), r = $i(n), i = cf(t, r), o = t.where.filter((a) => wr(a));
  return o.length > 0 && (i.where = [...i.where || [], ...o]), i;
}
function ji(t) {
  var _a5;
  return { ...t, from: sn(t.from), join: (_a5 = t.join) == null ? void 0 : _a5.map((e) => ({ ...e, from: sn(e.from) })) };
}
function sn(t) {
  if (t.type === "collectionRef") return t;
  const e = ji(t.query);
  if (af(e)) {
    const s = sn(e.from);
    return s.type === "collectionRef" ? new ot(s.collection, t.alias) : new ge(s.query, t.alias);
  }
  return new ge(e, t.alias);
}
function af(t) {
  return (!t.where || t.where.length === 0) && !t.select && (!t.groupBy || t.groupBy.length === 0) && (!t.having || t.having.length === 0) && (!t.orderBy || t.orderBy.length === 0) && (!t.join || t.join.length === 0) && t.limit === void 0 && t.offset === void 0 && !t.fnSelect && (!t.fnWhere || t.fnWhere.length === 0) && (!t.fnHaving || t.fnHaving.length === 0);
}
function nn(t) {
  const e = [];
  for (const s of t) {
    const n = Pn(s);
    e.push(...Dn(n));
  }
  return e;
}
function Dn(t) {
  if (t.type === "func" && t.name === "and") {
    const e = [];
    for (const s of t.args) e.push(...Dn(s));
    return e;
  } else return [t];
}
function zi(t) {
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
function $i(t) {
  const e = /* @__PURE__ */ new Map(), s = [];
  for (const i of t) if (i.touchedSources.size === 1 && !i.hasNamespaceOnlyRef) {
    const o = Array.from(i.touchedSources)[0];
    e.has(o) || e.set(o, []), e.get(o).push(i.expression);
  } else (i.touchedSources.size > 1 || i.hasNamespaceOnlyRef) && s.push(i.expression);
  const n = /* @__PURE__ */ new Map();
  for (const [i, o] of e) n.set(i, ls(o));
  const r = s.length > 0 ? ls(s) : void 0;
  return { singleSource: n, multiSource: r };
}
function cf(t, e) {
  const s = /* @__PURE__ */ new Set(), n = Hr(t.from, e.singleSource, s), r = t.join ? t.join.map((l) => ({ ...l, from: Hr(l.from, e.singleSource, s) })) : void 0, i = [];
  e.multiSource && i.push(e.multiSource);
  const o = t.join && t.join.some((l) => l.type === "left" || l.type === "right" || l.type === "full");
  for (const [l, u] of e.singleSource) s.has(l) ? o && i.push(Sc(u)) : i.push(u);
  const a = i.length > 1 ? [ls(i.flatMap((l) => Dn(Pn(l))))] : i;
  return { select: t.select, groupBy: t.groupBy ? [...t.groupBy] : void 0, having: t.having ? [...t.having] : void 0, orderBy: t.orderBy ? [...t.orderBy] : void 0, limit: t.limit, offset: t.offset, distinct: t.distinct, fnSelect: t.fnSelect, fnWhere: t.fnWhere ? [...t.fnWhere] : void 0, fnHaving: t.fnHaving ? [...t.fnHaving] : void 0, from: n, join: r, where: a.length > 0 ? a : [] };
}
function et(t) {
  return { from: t.from.type === "collectionRef" ? new ot(t.from.collection, t.from.alias) : new ge(et(t.from.query), t.from.alias), select: t.select, join: t.join ? t.join.map((e) => ({ type: e.type, left: e.left, right: e.right, from: e.from.type === "collectionRef" ? new ot(e.from.collection, e.from.alias) : new ge(et(e.from.query), e.from.alias) })) : void 0, where: t.where ? [...t.where] : void 0, groupBy: t.groupBy ? [...t.groupBy] : void 0, having: t.having ? [...t.having] : void 0, orderBy: t.orderBy ? [...t.orderBy] : void 0, limit: t.limit, offset: t.offset, fnSelect: t.fnSelect, fnWhere: t.fnWhere ? [...t.fnWhere] : void 0, fnHaving: t.fnHaving ? [...t.fnHaving] : void 0 };
}
function Hr(t, e, s) {
  const n = e.get(t.alias);
  if (!n) return t.type === "collectionRef" ? new ot(t.collection, t.alias) : new ge(et(t.query), t.alias);
  if (t.type === "collectionRef") {
    const o = { from: new ot(t.collection, t.alias), where: [n] };
    return s.add(t.alias), new ge(o, t.alias);
  }
  if (!pf(t.query, n, t.alias)) return new ge(et(t.query), t.alias);
  if (gf(t.query, n, t.alias)) return new ge(et(t.query), t.alias);
  const r = t.query.where || [], i = { ...et(t.query), where: [...r, n] };
  return s.add(t.alias), new ge(i, t.alias);
}
function lf(t, e, s) {
  return t.select ? Ni(t.select) || yf(t.select, e, s) : false;
}
function uf(t) {
  return t.groupBy && t.groupBy.length > 0;
}
function hf(t) {
  return t.having && t.having.length > 0;
}
function ff(t) {
  return t.orderBy && t.orderBy.length > 0 && (t.limit !== void 0 || t.offset !== void 0);
}
function df(t) {
  return t.fnSelect || t.fnWhere && t.fnWhere.length > 0 || t.fnHaving && t.fnHaving.length > 0;
}
function pf(t, e, s) {
  return !(lf(t, e, s) || uf(t) || hf(t) || ff(t) || df(t));
}
function Ni(t) {
  for (const e of Object.values(t)) if (typeof e == "object") {
    const s = e;
    if (s.type === "agg" || !("type" in s) && Ni(s)) return true;
  }
  return false;
}
function Bn(t) {
  const e = [];
  if (t == null || typeof t != "object") return e;
  switch (t.type) {
    case "ref":
      e.push(t);
      break;
    case "func":
    case "agg":
      for (const s of t.args ?? []) e.push(...Bn(s));
      break;
  }
  return e;
}
function yf(t, e, s) {
  const n = /* @__PURE__ */ new Set();
  for (const [i, o] of Object.entries(t)) i.startsWith("__SPREAD_SENTINEL__") || o instanceof ce || n.add(i);
  const r = Bn(e);
  for (const i of r) {
    const o = i.path;
    if (!Array.isArray(o) || o.length < 2) continue;
    const a = o[0], c = o[1];
    if (a === s && n.has(c)) return true;
  }
  return false;
}
function gf(t, e, s) {
  const n = Bn(e);
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
function ls(t) {
  if (t.length === 0) throw new vl();
  return t.length === 1 ? t[0] : new we("and", t);
}
function mf(t, e, s, n, r, i, o, a, c, l, u, h, f, p, d, y, g, m, S) {
  let b = t;
  for (const v of e) b = wf(b, v, s, n, r, i, o, a, c, l, u, h, f, p, d, y, g, m, S);
  return b;
}
function wf(t, e, s, n, r, i, o, a, c, l, u, h, f, p, d, y, g, m, S) {
  const b = e.from.type === "collectionRef", { alias: v, input: E, collectionId: M } = Sf(e.from, i, c, l, u, h, f, p, o, a, y, g, m, S);
  s[v] = E, b && (g[v] = M);
  const O = c[n], x = c[M];
  if (!O) throw new Rr(n);
  if (!x) throw new Rr(M);
  const { activeSource: P, lazySource: I } = xf(e.type, O, x), w = Object.keys(s), { mainExpr: R, joinedExpr: C } = vf(e.left, e.right, w, v), _ = fe(R), k = fe(C);
  let T = t.pipe(ae(([F, K]) => [_(K), [F, K]])), B = E.pipe(ae(([F, K]) => {
    const j = { [v]: K };
    return [k(j), [F, j]];
  }));
  if (!["inner", "left", "right", "full"].includes(e.type)) throw new al(e.type);
  if (P) {
    const F = P === "main" ? e.from : d.from, K = F.type === "queryRef" && (F.query.limit || F.query.offset), j = R.type === "func" || C.type === "func";
    if (!K && !j) {
      const $ = P === "main" ? v : r;
      h.add($);
      const xe = P === "main" ? T : B, X = Ot(d, P === "main" ? C : R, I), Z = X.collection, N = X.path[0];
      N && ws(N, X.path, Z);
      const U = xe.pipe(Ou((W) => {
        const Q = m[$] || $, V = l[Q];
        if (!V) throw new Sl(Q, $, I.id, Object.keys(l));
        if (V.hasLoadedInitialState()) return;
        const re = W.getInner().map(([[Ss]]) => Ss), Ae = new ce(X.path);
        V.requestSnapshot({ where: Zu(Ae, re), optimizedOnly: true }) || V.requestSnapshot();
      }));
      P === "main" ? T = U : B = U;
    }
  }
  return T.pipe(Bu(B, e.type), bf(e.type));
}
function vf(t, e, s, n) {
  const r = s.filter((a) => a !== n), i = rn(t), o = rn(e);
  if (i && r.includes(i) && o === n) return { mainExpr: t, joinedExpr: e };
  if (i === n && o && r.includes(o)) return { mainExpr: e, joinedExpr: t };
  throw !i || !o ? new ll() : i === o ? new cl(i) : r.includes(i) ? o !== n ? new hl(n) : new fl() : new ul(i);
}
function rn(t) {
  switch (t.type) {
    case "ref":
      return t.path[0] || null;
    case "func": {
      const e = /* @__PURE__ */ new Set();
      for (const s of t.args) {
        const n = rn(s);
        n && e.add(n);
      }
      return e.size === 1 ? Array.from(e)[0] : null;
    }
    default:
      return null;
  }
}
function Sf(t, e, s, n, r, i, o, a, c, l, u, h, f, p) {
  switch (t.type) {
    case "collectionRef": {
      const d = e[t.alias];
      if (!d) throw new ki(t.alias, t.collection.id, Object.keys(e));
      return h[t.alias] = t.collection.id, { alias: t.alias, input: d, collectionId: t.collection.id };
    }
    case "queryRef": {
      const d = l.get(t.query) || t.query, y = u(d, e, s, n, r, i, o, a, c, l);
      Object.assign(h, y.aliasToCollectionId), Object.assign(f, y.aliasRemapping);
      const g = l.has(t.query), m = t.query.from.alias;
      if (!(!g && t.alias === m)) for (const [M, O] of y.sourceWhereClauses) p.set(M, O);
      const b = Object.keys(y.aliasToCollectionId).find((M) => y.aliasToCollectionId[M] === y.collectionId);
      b && b !== t.alias && (f[t.alias] = b);
      const E = y.pipeline.pipe(ae((M) => {
        const [O, [x, P]] = M;
        return [O, x];
      }));
      return { alias: t.alias, input: E, collectionId: y.collectionId };
    }
    default:
      throw new dl(t.type);
  }
}
function bf(t) {
  return function(e) {
    return e.pipe(je((s) => {
      const [n, [r, i]] = s, o = r == null ? void 0 : r[1], a = i == null ? void 0 : i[1];
      return t === "inner" ? !!(o && a) : t === "left" ? !!o : t === "right" ? !!a : true;
    }), ae((s) => {
      const [n, [r, i]] = s, o = r == null ? void 0 : r[0], a = r == null ? void 0 : r[1], c = i == null ? void 0 : i[0], l = i == null ? void 0 : i[1], u = {};
      return a && Object.assign(u, a), l && Object.assign(u, l), [`[${o},${c}]`, u];
    }));
  };
}
function xf(t, e, s) {
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
function on(t) {
  return t instanceof he ? t.value : t;
}
function Pf(t, e, s) {
  const n = t.source(e);
  if (n && typeof n == "object") {
    let r = s;
    const i = t.targetPath;
    if (i.length === 0) for (const [o, a] of Object.entries(n)) s[o] = on(a);
    else for (let o = 0; o < i.length; o++) {
      const a = i[o];
      if (o === i.length - 1) {
        const c = r[a] ?? (r[a] = {});
        if (typeof c == "object") for (const [l, u] of Object.entries(n)) c[l] = on(u);
      } else {
        const c = r[a];
        (c == null || typeof c != "object") && (r[a] = {}), r = r[a];
      }
    }
  }
}
function Rf(t, e, s) {
  const n = t.alias.split(".");
  if (n.length === 1) s[t.alias] = t.compiled(e);
  else {
    let r = s;
    for (let i = 0; i < n.length - 1; i++) {
      const o = n[i], a = r[o];
      (a == null || typeof a != "object") && (r[o] = {}), r = r[o];
    }
    r[n[n.length - 1]] = on(t.compiled(e));
  }
}
function Cf([t, e], s) {
  const n = {};
  for (const r of s) r.kind === "merge" ? Pf(r, e, n) : Rf(r, e, n);
  return [t, { ...e, $selected: n }];
}
function _f(t, e, s) {
  const n = [];
  return Ui([], e, n), t.pipe(ae((r) => Cf(r, n)));
}
function kf(t) {
  return t.type === "agg";
}
function If(t) {
  return t && typeof t == "object" && !Et(t);
}
function Ui(t, e, s) {
  for (const [n, r] of Object.entries(e)) {
    if (n.startsWith("__SPREAD_SENTINEL__")) {
      const o = n.slice(19), a = o.lastIndexOf("__"), c = a >= 0 ? o.slice(0, a) : o, l = r && typeof r == "object" && "type" in r && r.type === "ref";
      if (c.includes(".") || l) {
        const u = [...t], h = l ? r : new ce(c.split(".")), f = fe(h);
        s.push({ kind: "merge", targetPath: u, source: f });
      } else {
        const u = c, h = [...t];
        s.push({ kind: "merge", targetPath: h, source: (f) => f[u] });
      }
      continue;
    }
    const i = r;
    if (If(i)) {
      Ui([...t, n], i, s);
      continue;
    }
    if (kf(i)) s.push({ kind: "field", alias: [...t, n].join("."), compiled: () => null });
    else {
      if (i === void 0 || !Et(i)) {
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
function Kn(t, e, s, n, r, i, o, a, c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap()) {
  const u = c.get(t);
  if (u) return u;
  an(t);
  const { optimizedQuery: h, sourceWhereClauses: f } = sf(t);
  l.set(h, t), ln(h, t, l);
  const p = { ...e }, d = {}, y = {}, g = {}, { alias: m, input: S, collectionId: b } = Of(h.from, p, s, n, r, i, o, a, c, l, d, y, f);
  g[m] = S;
  let v = S.pipe(ae(([x, P]) => [x, { [m]: P }]));
  if (h.join && h.join.length > 0 && (v = mf(v, h.join, g, b, m, p, c, l, s, n, r, i, o, a, t, Kn, d, y, f)), h.where && h.where.length > 0) for (const x of h.where) {
    const P = Pn(x), I = fe(P);
    v = v.pipe(je(([w, R]) => nt(I(R))));
  }
  if (h.fnWhere && h.fnWhere.length > 0) for (const x of h.fnWhere) v = v.pipe(je(([P, I]) => nt(x(I))));
  if (h.distinct && !h.fnSelect && !h.select) throw new Zc();
  if (h.fnSelect ? v = v.pipe(ae(([x, P]) => {
    const I = h.fnSelect(P);
    return [x, { ...P, $selected: I }];
  })) : h.select ? v = _f(v, h.select) : v = v.pipe(ae(([x, P]) => {
    const I = !h.join && !h.groupBy ? P[m] : P;
    return [x, { ...P, $selected: I }];
  })), h.groupBy && h.groupBy.length > 0 ? v = zr(v, h.groupBy, h.having, h.select, h.fnHaving) : h.select && Object.values(h.select).some((P) => P.type === "agg") && (v = zr(v, [], h.having, h.select, h.fnHaving)), h.having && (!h.groupBy || h.groupBy.length === 0) && !(h.select ? Object.values(h.select).some((P) => P.type === "agg") : false)) throw new el();
  if (h.fnHaving && h.fnHaving.length > 0 && (!h.groupBy || h.groupBy.length === 0)) for (const x of h.fnHaving) v = v.pipe(je(([P, I]) => x(I)));
  if (h.distinct && (v = v.pipe(ju(([x, P]) => P.$selected))), h.orderBy && h.orderBy.length > 0) {
    const I = uh(t, v, h.orderBy, h.select || {}, s[b], o, a, h.limit, h.offset).pipe(ae(([R, [C, _]]) => {
      const k = C.$selected, T = cn(k);
      return [R, [T, _]];
    })), w = { collectionId: b, pipeline: I, sourceWhereClauses: f, aliasToCollectionId: d, aliasRemapping: y };
    return c.set(t, w), w;
  } else if (h.limit !== void 0 || h.offset !== void 0) throw new tl();
  const M = v.pipe(ae(([x, P]) => {
    const I = P.$selected, w = cn(I);
    return [x, [w, void 0]];
  })), O = { collectionId: b, pipeline: M, sourceWhereClauses: f, aliasToCollectionId: d, aliasRemapping: y };
  return c.set(t, O), O;
}
function Ef(t) {
  const e = /* @__PURE__ */ new Set();
  if (t.from.type === "collectionRef" && e.add(t.from.alias), t.join) for (const s of t.join) s.from.type === "collectionRef" && e.add(s.from.alias);
  return e;
}
function an(t, e = /* @__PURE__ */ new Set()) {
  const s = Ef(t);
  for (const r of s) if (e.has(r)) throw new sl(r, Array.from(e));
  const n = /* @__PURE__ */ new Set([...e, ...s]);
  if (t.from.type === "queryRef" && an(t.from.query, n), t.join) for (const r of t.join) r.from.type === "queryRef" && an(r.from.query, n);
}
function Of(t, e, s, n, r, i, o, a, c, l, u, h, f) {
  switch (t.type) {
    case "collectionRef": {
      const p = e[t.alias];
      if (!p) throw new ki(t.alias, t.collection.id, Object.keys(e));
      return u[t.alias] = t.collection.id, { alias: t.alias, input: p, collectionId: t.collection.id };
    }
    case "queryRef": {
      const p = l.get(t.query) || t.query, d = Kn(p, e, s, n, r, i, o, a, c, l);
      Object.assign(u, d.aliasToCollectionId), Object.assign(h, d.aliasRemapping);
      const y = l.has(t.query), g = t.query.from.alias;
      if (!(!y && t.alias === g)) for (const [E, M] of d.sourceWhereClauses) f.set(E, M);
      const S = Object.keys(d.aliasToCollectionId).find((E) => d.aliasToCollectionId[E] === d.collectionId);
      S && S !== t.alias && (h[t.alias] = S);
      const v = d.pipeline.pipe(ae((E) => {
        const [M, [O, x]] = E, P = cn(O);
        return [M, P];
      }));
      return { alias: t.alias, input: v, collectionId: d.collectionId };
    }
    default:
      throw new nl(t.type);
  }
}
function Mf(t) {
  return t instanceof he || t && typeof t == "object" && "type" in t && t.type === "val";
}
function cn(t) {
  return Mf(t) ? t.value : t;
}
function ln(t, e, s) {
  if (t.from.type === "queryRef" && e.from.type === "queryRef" && (s.set(t.from.query, e.from.query), ln(t.from.query, e.from.query, s)), t.join && e.join) for (let n = 0; n < t.join.length && n < e.join.length; n++) {
    const r = t.join[n], i = e.join[n];
    r.from.type === "queryRef" && i.from.type === "queryRef" && (s.set(r.from.query, i.from.query), ln(r.from.query, i.from.query, s));
  }
}
function jn(t, e) {
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
      const i = jn(r, e);
      n.push(i);
    }
    return new we(t.name, n);
  }
}
function Gr(t, e) {
  return t.map((n) => {
    const r = jn(n.expression, e);
    return { ...n, expression: r };
  });
}
const Qr = /* @__PURE__ */ Symbol.for("@tanstack/db.collection-config-builder");
class Tf {
  constructor(e, s, n, r) {
    this.alias = e, this.collectionId = s, this.collection = n, this.collectionConfigBuilder = r, this.biggest = void 0, this.subscriptionLoadingPromises = /* @__PURE__ */ new Map(), this.sentToD2Keys = /* @__PURE__ */ new Set();
  }
  subscribe() {
    const e = this.getWhereClauseForAlias();
    if (e) {
      const s = jn(e, this.alias);
      return this.subscribeToChanges(s);
    }
    return this.subscribeToChanges();
  }
  subscribeToChanges(e) {
    const s = this.getOrderByInfo(), n = (a) => {
      if (!this.subscriptionLoadingPromises.has(a)) {
        let c;
        const l = new Promise((u) => {
          c = u;
        });
        this.subscriptionLoadingPromises.set(a, { resolve: c }), this.collectionConfigBuilder.liveQueryCollection._sync.trackLoadPromise(l);
      }
    }, r = (a) => {
      const c = a.subscription;
      if (a.status === "loadingSubset") n(c);
      else {
        const l = this.subscriptionLoadingPromises.get(c);
        l && (this.subscriptionLoadingPromises.delete(c), l.resolve());
      }
    };
    let i;
    if (s) i = this.subscribeToOrderedChanges(e, s, r);
    else {
      const a = !this.collectionConfigBuilder.isLazyAlias(this.alias);
      i = this.subscribeToMatchingChanges(e, a, r);
    }
    i.status === "loadingSubset" && n(i);
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
    const i = this.collectionConfigBuilder.currentSyncState.inputs[this.alias], a = Af(i, r, this.collection.config.getKey) > 0 ? s : void 0;
    this.collectionConfigBuilder.scheduleGraphRun(a, { alias: this.alias });
  }
  subscribeToMatchingChanges(e, s, n) {
    const r = (o) => {
      this.sendChangesToPipeline(o);
    };
    return this.collection.subscribeChanges(r, { ...s && { includeInitialState: s }, whereExpression: e, onStatusChange: n });
  }
  subscribeToOrderedChanges(e, s, n) {
    const { orderBy: r, offset: i, limit: o, index: a } = s, c = {}, l = (p) => {
      const d = Lf(p);
      this.sendChangesToPipelineWithTracking(d, c.current);
    }, u = this.collection.subscribeChanges(l, { whereExpression: e, onStatusChange: n });
    c.current = u;
    const h = this.collection.on("truncate", () => {
      this.biggest = void 0, this.sentToD2Keys.clear();
    });
    u.on("unsubscribed", () => {
      h();
    });
    const f = Gr(r, this.alias);
    return a ? (u.setOrderByIndex(a), u.requestLimitedSnapshot({ limit: i + o, orderBy: f })) : u.requestSnapshot({ orderBy: f, limit: i + o }), u;
  }
  loadMoreIfNeeded(e) {
    const s = this.getOrderByInfo();
    if (!s) return true;
    const { dataNeeded: n } = s;
    if (!n) return true;
    const r = n();
    return r > 0 && this.loadNextItems(r, e), true;
  }
  sendChangesToPipelineWithTracking(e, s) {
    const n = this.getOrderByInfo();
    if (!n) {
      this.sendChangesToPipeline(e);
      return;
    }
    const r = this.trackSentValues(e, n.comparator), i = s;
    i[Qr] ?? (i[Qr] = this.loadMoreIfNeeded.bind(this, s)), this.sendChangesToPipeline(r, i[Qr]);
  }
  loadNextItems(e, s) {
    const n = this.getOrderByInfo();
    if (!n) return;
    const { orderBy: r, valueExtractorForRawRow: i, offset: o } = n, a = this.biggest, c = a ? i(a) : void 0, l = c !== void 0 ? Array.isArray(c) ? c : [c] : void 0, u = Gr(r, this.alias);
    s.requestLimitedSnapshot({ orderBy: u, limit: e, minValues: l, offset: o });
  }
  getWhereClauseForAlias() {
    const e = this.collectionConfigBuilder.sourceWhereClausesCache;
    if (e) return e.get(this.alias);
  }
  getOrderByInfo() {
    const e = this.collectionConfigBuilder.optimizableOrderByCollections[this.collectionId];
    if (e && e.alias === this.alias) return e;
  }
  *trackSentValues(e, s) {
    for (const n of e) n.type !== "delete" && (this.biggest ? s(this.biggest, n.value) < 0 && (this.biggest = n.value) : this.biggest = n.value), yield n;
  }
}
function Af(t, e, s) {
  const n = [];
  for (const r of e) {
    const i = s(r.value);
    r.type === "insert" ? n.push([[i, r.value], 1]) : r.type === "update" ? (n.push([[i, r.previousValue], -1]), n.push([[i, r.value], 1])) : n.push([[i, r.value], -1]);
  }
  return n.length !== 0 && t.sendData(new H(n)), n.length;
}
function* Lf(t) {
  for (const e of t) e.type === "update" ? (yield { type: "delete", key: e.key, value: e.previousValue }, yield { type: "insert", key: e.key, value: e.value }) : yield e;
}
const Vi = /* @__PURE__ */ new WeakMap();
function Ff(t) {
  var _a5, _b2, _c3;
  return (_c3 = (_b2 = (_a5 = t.utils) == null ? void 0 : _a5[Tn]) == null ? void 0 : _b2.getBuilder) == null ? void 0 : _c3.call(_b2);
}
function Df(t, e) {
  Vi.set(t, e);
}
function Bf(t) {
  return Vi.get(t);
}
let Kf = 0;
class jf {
  constructor(e) {
    this.config = e, this.compiledAliasToCollectionId = {}, this.resultKeys = /* @__PURE__ */ new WeakMap(), this.orderByIndices = /* @__PURE__ */ new WeakMap(), this.isGraphRunning = false, this.runCount = 0, this.isInErrorState = false, this.aliasDependencies = {}, this.builderDependencies = /* @__PURE__ */ new Set(), this.pendingGraphRuns = /* @__PURE__ */ new Map(), this.subscriptions = {}, this.lazySourcesCallbacks = {}, this.lazySources = /* @__PURE__ */ new Set(), this.optimizableOrderByCollections = {}, this.id = e.id || `live-query-${++Kf}`, this.query = zf(e), this.collections = Nf(this.query);
    const s = Uf(this.query);
    this.collectionByAlias = {};
    for (const [n, r] of s.entries()) {
      const i = this.collections[n];
      if (i) for (const o of r) this.collectionByAlias[o] = i;
    }
    this.query.orderBy && this.query.orderBy.length > 0 && (this.compare = $f(this.orderByIndices)), this.compareOptions = this.config.defaultStringCollation ?? Wi(this.query).compareOptions, this.compileBasePipeline();
  }
  hasJoins(e) {
    return !!(e.join && e.join.length > 0 || e.from.type === "queryRef" && this.hasJoins(e.from.query));
  }
  getConfig() {
    return { id: this.id, getKey: this.config.getKey || ((e) => this.resultKeys.get(e)), sync: this.getSyncConfig(), compare: this.compare, defaultStringCollation: this.compareOptions, gcTime: this.config.gcTime || 5e3, schema: this.config.schema, onInsert: this.config.onInsert, onUpdate: this.config.onUpdate, onDelete: this.config.onDelete, startSync: this.config.startSync, singleResult: this.query.singleResult, utils: { getRunCount: this.getRunCount.bind(this), setWindow: this.setWindow.bind(this), getWindow: this.getWindow.bind(this), [Tn]: { getBuilder: () => this, hasCustomGetKey: !!this.config.getKey, hasJoins: this.hasJoins(this.query), hasDistinct: !!this.query.distinct } } };
  }
  setWindow(e) {
    var _a5, _b2;
    if (!this.windowFn) throw new xl();
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
    const n = (s == null ? void 0 : s.contextId) ?? ((_a5 = Gt()) == null ? void 0 : _a5.id), r = (s == null ? void 0 : s.jobId) ?? this, i = (() => {
      if (s == null ? void 0 : s.dependencies) return s.dependencies;
      const c = new Set(this.builderDependencies);
      if (s == null ? void 0 : s.alias) {
        const l = this.aliasDependencies[s.alias];
        if (l) for (const u of l) c.add(u);
      }
      return c.delete(this), Array.from(c);
    })();
    if (n) for (const c of i) typeof c.scheduleGraphRun == "function" && c.scheduleGraphRun(void 0, { contextId: n });
    if (!this.currentSyncConfig || !this.currentSyncState) throw new Error("scheduleGraphRun called without active sync session. This should not happen.");
    let o = n ? this.pendingGraphRuns.get(n) : void 0;
    o || (o = { loadCallbacks: /* @__PURE__ */ new Set() }, n && this.pendingGraphRuns.set(n, o)), e && o.loadCallbacks.add(e);
    const a = n ? void 0 : o;
    as.schedule({ contextId: n, jobId: r, dependencies: i, run: () => this.executeGraphRun(n, a) });
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
    this.currentSyncState = n, this.unsubscribeFromSchedulerClears = as.onClear((o) => {
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
    this.graphCache = new wu(), this.inputsCache = Object.fromEntries(Object.keys(this.collectionByAlias).map((n) => [n, this.graphCache.newInput()]));
    const e = Kn(this.query, this.inputsCache, this.collections, this.subscriptions, this.lazySourcesCallbacks, this.lazySources, this.optimizableOrderByCollections, (n) => {
      this.windowFn = n;
    });
    this.pipelineCache = e.pipeline, this.sourceWhereClausesCache = e.sourceWhereClauses, this.compiledAliasToCollectionId = e.aliasToCollectionId;
    const s = Object.keys(this.compiledAliasToCollectionId).filter((n) => !Object.hasOwn(this.inputsCache, n));
    if (s.length > 0) throw new bl(s);
  }
  maybeCompileBasePipeline() {
    return (!this.graphCache || !this.inputsCache || !this.pipelineCache) && this.compileBasePipeline(), { graph: this.graphCache, inputs: this.inputsCache, pipeline: this.pipelineCache };
  }
  extendPipelineWithChangeProcessing(e, s) {
    const { begin: n, commit: r } = e, { graph: i, inputs: o, pipeline: a } = this.maybeCompileBasePipeline();
    let c = /* @__PURE__ */ new Map();
    return a.pipe(Au((l) => {
      const u = l.getInner();
      s.messagesCount += u.length, u.reduce(Vf, c);
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
    this.isInErrorState || ((_a5 = this.currentSyncState) == null ? void 0 : _a5.subscribedToAllCollections) && this.allCollectionsReady() && !((_b2 = this.liveQueryCollection) == null ? void 0 : _b2.isLoadingSubset) && s();
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
      const c = this.collectionByAlias[o] ?? this.collections[a], l = Bf(c);
      l && l !== this ? (this.aliasDependencies[o] = [l], this.builderDependencies.add(l)) : this.aliasDependencies[o] = [];
      const u = new Tf(o, a, c, this), h = c.on("status:change", (d) => {
        this.handleSourceStatusChange(e, a, d);
      });
      s.unsubscribeCallbacks.add(h);
      const f = u.subscribe();
      return this.subscriptions[o] = f, u.loadMoreIfNeeded.bind(u, f);
    }), i = () => (r.map((o) => o()), true);
    return s.subscribedToAllCollections = true, i;
  }
}
function zf(t) {
  return typeof t.query == "function" ? tf(t.query) : Ki(t.query);
}
function $f(t) {
  return (e, s) => {
    const n = t.get(e), r = t.get(s);
    return n && r ? n < r ? -1 : n > r ? 1 : 0 : 0;
  };
}
function Nf(t) {
  const e = {};
  function s(r) {
    r.type === "collectionRef" ? e[r.collection.id] = r.collection : r.type === "queryRef" && n(r.query);
  }
  function n(r) {
    if (r.from && s(r.from), r.join && Array.isArray(r.join)) for (const i of r.join) i.from && s(i.from);
  }
  return n(t), e;
}
function Wi(t) {
  const e = t.from;
  if (e.type === "collectionRef") return e.collection;
  if (e.type === "queryRef") return Wi(e.query);
  throw new Error(`Failed to extract collection. Invalid FROM clause: ${JSON.stringify(t)}`);
}
function Uf(t) {
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
function Vf(t, [[e, s], n]) {
  const [r, i] = s, o = t.get(e) || { deletes: 0, inserts: 0, value: r, orderByIndex: i };
  return n < 0 ? o.deletes += Math.abs(n) : n > 0 && (o.inserts += n, o.value = r, i !== void 0 && (o.orderByIndex = i)), t.set(e, o), t;
}
function Jr(t) {
  return new jf(t).getConfig();
}
function Ks(t) {
  if (typeof t == "function") {
    const s = Jr({ query: t });
    return Yr(s);
  } else {
    const e = t, s = Jr(e);
    return e.utils && (s.utils = { ...s.utils, ...e.utils }), Yr(s);
  }
}
function Yr(t) {
  const e = Yh(t), s = Ff(t);
  return s && Df(e, s), e;
}
const js = 1;
function ad(t, e = []) {
  var _a5;
  const s = t && typeof t == "object" && typeof t.subscribeChanges == "function" && typeof t.startSyncImmediate == "function" && typeof t.id == "string", n = L.useRef(null), r = L.useRef(null), i = L.useRef(null), o = L.useRef(0), a = L.useRef(null), c = !n.current || s && i.current !== t || !s && (r.current === null || r.current.length !== e.length || r.current.some((d, y) => d !== e[y]));
  if (c) if (s) ((_a5 = t.config) == null ? void 0 : _a5.syncMode) === "on-demand" && console.warn(`[useLiveQuery] Warning: Passing a collection with syncMode "on-demand" directly to useLiveQuery will not load any data. In on-demand mode, data is only loaded when queries with predicates request it.

Instead, use a query builder function:
  const { data } = useLiveQuery((q) => q.from({ c: myCollection }).select(({ c }) => c))

Or switch to syncMode "eager" if you want all data to sync automatically.`), t.startSyncImmediate(), n.current = t, i.current = t;
  else if (typeof t == "function") {
    const d = new q(), y = t(d);
    if (y == null) n.current = null;
    else if (y instanceof Fn) y.startSyncImmediate(), n.current = y;
    else if (y instanceof q) n.current = Ks({ query: t, startSync: true, gcTime: js });
    else if (y && typeof y == "object") n.current = Ks({ startSync: true, gcTime: js, ...y });
    else throw new Error(`useLiveQuery callback must return a QueryBuilder, LiveQueryCollectionConfig, Collection, undefined, or null. Got: ${typeof y}`);
    r.current = [...e];
  } else n.current = Ks({ startSync: true, gcTime: js, ...t }), r.current = [...e];
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
  const u = L.useRef(null);
  (!u.current || c) && (u.current = () => {
    const d = o.current, y = n.current;
    return (!a.current || a.current.version !== d || a.current.collection !== y) && (a.current = { collection: y, version: d }), a.current;
  });
  const h = L.useSyncExternalStore(l.current, u.current), f = L.useRef(null), p = L.useRef(null);
  if (!f.current || f.current.version !== h.version || f.current.collection !== h.collection) {
    if (!h.collection) p.current = { state: void 0, data: void 0, collection: void 0, status: "disabled", isLoading: false, isReady: true, isIdle: false, isError: false, isCleanedUp: false, isEnabled: false };
    else {
      const d = Array.from(h.collection.entries()), g = h.collection.config.singleResult;
      let m = null, S = null;
      p.current = { get state() {
        return m || (m = new Map(d)), m;
      }, get data() {
        return S || (S = d.map(([, b]) => b)), g ? S[0] : S;
      }, collection: h.collection, status: h.collection.status, isLoading: h.collection.status === "loading", isReady: h.collection.status === "ready", isIdle: h.collection.status === "idle", isError: h.collection.status === "error", isCleanedUp: h.collection.status === "cleaned-up", isEnabled: true };
    }
    f.current = h;
  }
  return p.current;
}
const Wf = /* @__PURE__ */ new Set(["_dexieMeta", "_updatedAt", "_createdAt"]);
function qf(t) {
  if (!t) return t;
  const e = Array.isArray(t) ? [] : {};
  for (const s of Object.keys(t)) Wf.has(s) || (e[s] = t[s]);
  return e;
}
function Hf(t, e = false) {
  const s = Date.now(), n = { ...t };
  return n._updatedAt = s, e || (n._createdAt = s), n;
}
const se = to.debug("ts/db:dexie");
function cd(t) {
  const e = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), r = t.dbName || "app-db", i = t.tableName || t.storeName || t.id || "collection", o = new so(r);
  o.version(1).stores({ [i]: "&id, _updatedAt, _createdAt" });
  const a = o.table(i), c = async (w, R = t.ackTimeoutMs || 2e3) => {
    const C = [], _ = [];
    for (const k of w) {
      if (s.has(k)) {
        C.push(Promise.resolve());
        continue;
      }
      const T = n.get(k);
      if (T) {
        C.push(T.promise);
        continue;
      }
      let B, F;
      const K = new Promise(($, xe) => {
        B = $, F = xe;
      });
      K.catch(() => {
      }), n.set(k, { promise: K, resolve: B, reject: F });
      const j = setTimeout(() => {
        n.has(k) && (n.delete(k), se("awaitAckedIds:timeout", { id: String(k) }), _.push(k), B());
      }, R);
      K.finally(() => clearTimeout(j)), C.push(K);
    }
    if (await Promise.all(C), _.length > 0) throw new Error(`Timeout waiting for acked ids: ${_.join(", ")}`);
  }, l = async (w, R = t.awaitTimeoutMs || 1e4) => {
    try {
      await c(w, t.ackTimeoutMs || 2e3);
      return;
    } catch {
      try {
        const C = Date.now();
        for (; Date.now() - C < R; ) {
          if (w.every((k) => e.has(k))) return;
          try {
            const k = a.bulkGet;
            let T;
            if (typeof k == "function" ? T = await k.call(a, w) : T = await Promise.all(w.map((F) => a.get(F))), Array.isArray(T) && T.every((F) => F != null) && (d(), await new Promise((K) => setTimeout(K, 100)), w.every((K) => e.has(K)))) return;
          } catch {
          }
          await new Promise((k) => setTimeout(k, 50));
        }
      } catch {
      }
      throw new Error(`Timeout waiting for IDs: ${w.join(", ")}`);
    }
  }, u = async (w) => {
    const { call: R, awaitPersistence: C, timeoutMs: _, swallow: k, debugTag: T } = w;
    if (!C) {
      Promise.resolve().then(R).catch((F) => {
        se(`persistence:${T}:error`, { error: String(F) });
      });
      return;
    }
    const B = _ ?? 5e3;
    try {
      const F = Promise.resolve().then(R);
      F.catch(() => {
      });
      let K;
      const j = new Promise(($, xe) => {
        K = setTimeout(() => xe(new Error("persistence:timeout")), B);
      });
      j.catch(() => {
      });
      try {
        const $ = await Promise.race([F, j]);
        return clearTimeout(K), $;
      } catch ($) {
        throw clearTimeout(K), $;
      }
    } catch (F) {
      if (k ?? true) {
        se(`persistence:${T}:error`, { error: String(F) });
        return;
      } else throw F;
    }
  }, h = (w) => {
    if (t.schema) {
      const R = t.schema;
      if (R.parse) try {
        return R.parse(w);
      } catch (C) {
        throw new Error(`Schema validation failed: ${C instanceof Error ? C.message : String(C)}`);
      }
      else if (R.safeParse) {
        const C = R.safeParse(w);
        if (!C.success) throw new Error(`Schema validation failed: ${JSON.stringify(C.error)}`);
        return C.data;
      }
    }
    return w;
  }, f = (w) => {
    var _a5;
    const R = qf(w);
    let C = R;
    return ((_a5 = t.codec) == null ? void 0 : _a5.parse) && (C = t.codec.parse(R)), h(C);
  }, p = (w, R = false) => {
    var _a5;
    let C = w;
    return ((_a5 = t.codec) == null ? void 0 : _a5.serialize) ? C = t.codec.serialize(w) : C = w, Hf(C, R);
  }, d = () => {
  }, y = (w, R) => {
    if (w === R) return true;
    if (!w || !R || typeof w != "object" || typeof R != "object") return false;
    const C = Object.keys(w), _ = Object.keys(R);
    if (C.length !== _.length) return false;
    for (const k of C) if (w[k] !== R[k]) return false;
    return true;
  }, g = (w) => {
    const { begin: R, write: C, commit: _, markReady: k } = w;
    let T = /* @__PURE__ */ new Map();
    const B = t.syncBatchSize || 1e3;
    let F = false, K, j = false, $ = null;
    const xe = async () => {
      R();
      let Z = 0;
      for (; ; ) {
        let N;
        if (K) N = await a.where("_updatedAt").above(K).limit(B).toArray();
        else try {
          N = await a.orderBy("_updatedAt").limit(B).toArray();
        } catch {
          N = await a.limit(B).toArray();
        }
        if (N.length === 0) break;
        const U = /* @__PURE__ */ new Map();
        for (const W of N) {
          const Q = f(W), V = t.getKey(Q);
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
          const Ae = W._updatedAt;
          Ae && (!K || Ae > K) && (K = Ae);
        }
        for (const [, W] of U) C({ type: "insert", value: W }), T.set(t.getKey(W), W);
        if (Z += N.length, N.length < B) break;
      }
      _(), F = true, se("sync:initial-complete", { totalProcessed: Z }), Z > 5e3 && se("sync:large-collection", { totalProcessed: Z });
    }, Te = async () => {
      if (await xe(), X(), !j) try {
        k();
      } finally {
        j = true;
      }
    }, X = () => {
      $ = no(async () => {
        if (!F) return T;
        const Z = await a.toArray(), N = /* @__PURE__ */ new Map();
        for (const U of Z) {
          let W;
          try {
            W = f(U);
          } catch (re) {
            se("parse:skip", { id: U == null ? void 0 : U.id, error: re });
            continue;
          }
          const Q = t.getKey(W);
          e.set(Q, Date.now()), s.add(Q);
          const V = n.get(Q);
          if (V) {
            try {
              V.resolve();
            } catch {
            }
            n.delete(Q);
          }
          N.set(Q, W);
        }
        return N;
      }).subscribe({ next: (Z) => {
        if (!F) {
          if (!j) try {
            k();
          } finally {
            j = true;
          }
          return;
        }
        R();
        for (const [N, U] of Z) if (T.has(N)) {
          const W = T.get(N), Q = U._updatedAt, V = W._updatedAt;
          let re = false;
          Q && V ? re = Q !== V : re = !y(W, U), re && C({ type: "update", value: U });
        } else C({ type: "insert", value: U });
        for (const [N, U] of T) Z.has(N) || C({ type: "delete", value: U });
        if (T = new Map(Z), _(), !j) try {
          k();
        } finally {
          j = true;
        }
      }, error: (Z) => {
        if (se("sync:live-error", { error: Z }), !j) try {
          k();
        } finally {
          j = true;
        }
      } });
    };
    return Te(), () => {
      $ && $.unsubscribe();
    };
  }, m = async (w) => {
    w.collection.startSyncImmediate();
    const R = w.transaction.mutations, C = R.map((B) => ({ ...p(B.modified, false), id: B.key })), _ = o.transaction("rw", a, async () => {
      await a.bulkPut(C);
    });
    _.catch(() => {
    }), await _, await o.table(i).count();
    const k = R.map((B) => B.key), T = Date.now();
    for (const B of k) e.set(B, T);
    return typeof t.onInsert == "function" && await u({ call: () => t.onInsert(w), awaitPersistence: t.awaitPersistence, timeoutMs: t.persistenceTimeoutMs, swallow: t.swallowPersistenceErrors, debugTag: "onInsert" }), k;
  }, S = async (w) => {
    w.collection.startSyncImmediate();
    const R = w.transaction.mutations, C = o.transaction("rw", a, async () => {
      for (const T of R) {
        const B = T.key;
        if (t.rowUpdateMode === "full") {
          const K = { ...p(T.modified, true), id: B };
          await a.put(K);
        } else {
          const F = p(T.changes, true);
          await a.update(B, F);
        }
      }
    });
    C.catch(() => {
    }), await C;
    const _ = R.map((T) => T.key), k = Date.now();
    for (const T of _) e.set(T, k);
    return typeof t.onUpdate == "function" && await u({ call: () => t.onUpdate(w), awaitPersistence: t.awaitPersistence, timeoutMs: t.persistenceTimeoutMs, swallow: t.swallowPersistenceErrors, debugTag: "onUpdate" }), _;
  }, b = async (w) => {
    w.collection.startSyncImmediate();
    const C = w.transaction.mutations.map((k) => k.key), _ = o.transaction("rw", a, async () => {
      await a.bulkDelete(C);
    });
    return _.catch(() => {
    }), await _, C.forEach((k) => e.delete(k)), typeof t.onDelete == "function" && await u({ call: () => t.onDelete(w), awaitPersistence: t.awaitPersistence, timeoutMs: t.persistenceTimeoutMs, swallow: t.swallowPersistenceErrors, debugTag: "onDelete" }), C;
  }, I = { getTable: () => a, awaitIds: l, refresh: d, refetch: async () => {
    await new Promise((w) => setTimeout(w, 20));
  }, insertLocally: async (w) => {
    const R = h(w), C = p(R, false), _ = t.getKey(R);
    try {
      await o.transaction("rw", a, async () => {
        await a.put({ ...C, id: _ });
      });
    } catch (T) {
      throw se("insertLocally:error", { key: _, error: String(T) }), new Error(`Failed to insert item locally: ${T instanceof Error ? T.message : String(T)}`);
    }
    e.set(_, Date.now()), s.add(_);
    const k = n.get(_);
    k && (k.resolve(), n.delete(_)), await new Promise((T) => setTimeout(T, 10));
  }, updateLocally: async (w, R) => {
    const C = p(R, true);
    try {
      let k = 0;
      if (await o.transaction("rw", a, async () => {
        t.rowUpdateMode === "full" ? (await a.put({ ...C, id: w }), k = 1) : k = await a.update(w, C);
      }), t.rowUpdateMode !== "full" && k === 0) throw new Error(`Item with id "${w}" not found`);
    } catch (k) {
      throw se("updateLocally:error", { id: w, error: String(k) }), new Error(`Failed to update item locally: ${k instanceof Error ? k.message : String(k)}`);
    }
    e.set(w, Date.now()), s.add(w);
    const _ = n.get(w);
    _ && (_.resolve(), n.delete(w)), await new Promise((k) => setTimeout(k, 10));
  }, deleteLocally: async (w) => {
    try {
      await o.transaction("rw", a, async () => {
        await a.delete(w);
      });
    } catch (R) {
      throw se("deleteLocally:error", { id: w, error: String(R) }), new Error(`Failed to delete item locally: ${R instanceof Error ? R.message : String(R)}`);
    }
    e.delete(w), s.delete(w), n.delete(w);
  }, bulkInsertLocally: async (w) => {
    var _a5, _b2, _c3;
    if (w.length === 0) return;
    const R = w.map((_) => {
      const k = p(_, false), T = t.getKey(_);
      return { ...k, id: T };
    });
    try {
      await o.transaction("rw", a, async () => {
        await a.bulkPut(R);
      });
    } catch (_) {
      if (_ instanceof Error && _.name === "BulkError") {
        const k = _;
        se("bulkInsertLocally:partial-failure", { total: w.length, failures: ((_a5 = k.failures) == null ? void 0 : _a5.length) || 0, errors: ((_b2 = k.failures) == null ? void 0 : _b2.map((F) => F.message)) || [] });
        const T = new Set(Object.keys(k.failuresByPos || {}).map(Number)), B = Date.now();
        throw w.forEach((F, K) => {
          if (!T.has(K)) {
            const j = t.getKey(F);
            e.set(j, B), s.add(j);
            const $ = n.get(j);
            $ && ($.resolve(), n.delete(j));
          }
        }), new Error(`Failed to insert ${((_c3 = k.failures) == null ? void 0 : _c3.length) || 0} of ${w.length} items locally`);
      }
      throw se("bulkInsertLocally:error", { error: String(_) }), new Error(`Failed to bulk insert items locally: ${_ instanceof Error ? _.message : String(_)}`);
    }
    const C = Date.now();
    for (const _ of w) {
      const k = t.getKey(_);
      e.set(k, C), s.add(k);
      const T = n.get(k);
      T && (T.resolve(), n.delete(k));
    }
  }, bulkUpdateLocally: async (w) => {
    var _a5, _b2;
    if (w.length === 0) return;
    try {
      await o.transaction("rw", a, async () => {
        if (t.rowUpdateMode === "full") {
          const C = w.map((_) => {
            const k = p(_, true), T = t.getKey(_);
            return { ...k, id: T };
          });
          await a.bulkPut(C);
        } else for (const C of w) {
          const _ = t.getKey(C), k = p(C, true);
          await a.update(_, k);
        }
      });
    } catch (C) {
      if (C instanceof Error && C.name === "BulkError") {
        const _ = C;
        throw se("bulkUpdateLocally:partial-failure", { total: w.length, failures: ((_a5 = _.failures) == null ? void 0 : _a5.length) || 0 }), new Error(`Failed to update ${((_b2 = _.failures) == null ? void 0 : _b2.length) || 0} of ${w.length} items locally`);
      }
      throw se("bulkUpdateLocally:error", { error: String(C) }), new Error(`Failed to bulk update items locally: ${C instanceof Error ? C.message : String(C)}`);
    }
    const R = Date.now();
    for (const C of w) {
      const _ = t.getKey(C);
      e.set(_, R), s.add(_);
      const k = n.get(_);
      k && (k.resolve(), n.delete(_));
    }
  }, bulkDeleteLocally: async (w) => {
    var _a5, _b2;
    if (w.length !== 0) {
      try {
        await o.transaction("rw", a, async () => {
          await a.bulkDelete(w);
        });
      } catch (R) {
        if (R instanceof Error && R.name === "BulkError") {
          const C = R;
          throw se("bulkDeleteLocally:partial-failure", { total: w.length, failures: ((_a5 = C.failures) == null ? void 0 : _a5.length) || 0 }), new Error(`Failed to delete ${((_b2 = C.failures) == null ? void 0 : _b2.length) || 0} of ${w.length} items locally`);
        }
        throw se("bulkDeleteLocally:error", { error: String(R) }), new Error(`Failed to bulk delete items locally: ${R instanceof Error ? R.message : String(R)}`);
      }
      for (const R of w) e.delete(R), s.delete(R), n.delete(R);
    }
  } };
  return { id: t.id, schema: t.schema, getKey: t.getKey, rowUpdateMode: t.rowUpdateMode ?? "partial", sync: { sync: g }, onInsert: m, onUpdate: S, onDelete: b, utils: I };
}
export {
  rd as H,
  mi as L,
  Xf as N,
  Ka as O,
  id as Q,
  sd as R,
  od as a,
  Yf as b,
  Zf as c,
  td as d,
  ds as e,
  nd as f,
  rr as g,
  vn as h,
  ad as i,
  Js as j,
  Yh as k,
  ed as l,
  cd as m,
  Jr as n,
  Qo as r,
  ne as u
};
