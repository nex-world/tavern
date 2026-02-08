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
var _e2, _t2, _a2, _e3, _t3, _s2, _b, _e4, _t4, _s3, _c2, _e5, _d, _e6, _t5, _s4, _n2, _i2, _o2, _a3, _uo_instances, r_fn, _e7, _e8, _t6, _s5, _n3, _po_instances, i_fn, _f, _e9, _t7, _s6, _g, _e10, _h, _e11, _t8, _s7, _n4, _i3, _o3, _a4, _r2, _i4, _e12, _T_instances, t_fn, s_fn, _e13, _e14, _e15, _t9, _s8, _gc_instances, n_fn, _e16, _t10, _e17, _e18, _t11, _ue_instances, s_fn2, _e19, _t12, _s9, _e20, _e21, _e22, _e23, _t13, _s10, _e24, _t14, _e25, _t15, _s11, _n5, _Ri_instances, i_fn2, _e26, _t16, _jc_instances, s_fn3, _e27;
import { _ as qi, m as Wi, n as St } from "./react-vendor-C1AjJau_.js";
import { i as bt, t as Hi } from "./vendor-VvUkZRdw.js";
function Gi(t) {
  return typeof t == "function";
}
class Qi {
  constructor(e, s) {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = (n) => {
      var i, r;
      this.listeners.add(n);
      const o = (r = (i = this.options) == null ? void 0 : i.onSubscribe) == null ? void 0 : r.call(i, n, this);
      return () => {
        this.listeners.delete(n), o == null ? void 0 : o();
      };
    }, this.prevState = e, this.state = e, this.options = s;
  }
  setState(e) {
    var s, n, i;
    this.prevState = this.state, (s = this.options) != null && s.updateFn ? this.state = this.options.updateFn(this.prevState)(e) : Gi(e) ? this.state = e(this.prevState) : this.state = e, (i = (n = this.options) == null ? void 0 : n.onUpdate) == null || i.call(n), qi(this);
  }
}
const fe = "__TSR_index", Qs = "popstate", Js = "beforeunload";
function Ji(t) {
  let e = t.getLocation();
  const s = /* @__PURE__ */ new Set(), n = (o) => {
    e = t.getLocation(), s.forEach((a) => a({ location: e, action: o }));
  }, i = (o) => {
    t.notifyOnIndexChange ?? true ? n(o) : e = t.getLocation();
  }, r = async ({ task: o, navigateOpts: a, ...c }) => {
    var _a5, _b2;
    if ((a == null ? void 0 : a.ignoreBlocker) ?? false) {
      o();
      return;
    }
    const h = ((_a5 = t.getBlockers) == null ? void 0 : _a5.call(t)) ?? [], u = c.type === "PUSH" || c.type === "REPLACE";
    if (typeof document < "u" && h.length && u) for (const d of h) {
      const p = We(c.path, c.state);
      if (await d.blockerFn({ currentLocation: e, nextLocation: p, action: c.type })) {
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
    const l = e.state[fe];
    a = Ys(l + 1, a), r({ task: () => {
      t.pushState(o, a), n({ type: "PUSH" });
    }, navigateOpts: c, type: "PUSH", path: o, state: a });
  }, replace: (o, a, c) => {
    const l = e.state[fe];
    a = Ys(l, a), r({ task: () => {
      t.replaceState(o, a), n({ type: "REPLACE" });
    }, navigateOpts: c, type: "REPLACE", path: o, state: a });
  }, go: (o, a) => {
    r({ task: () => {
      t.go(o), i({ type: "GO", index: o });
    }, navigateOpts: a, type: "GO" });
  }, back: (o) => {
    r({ task: () => {
      t.back((o == null ? void 0 : o.ignoreBlocker) ?? false), i({ type: "BACK" });
    }, navigateOpts: o, type: "BACK" });
  }, forward: (o) => {
    r({ task: () => {
      t.forward((o == null ? void 0 : o.ignoreBlocker) ?? false), i({ type: "FORWARD" });
    }, navigateOpts: o, type: "FORWARD" });
  }, canGoBack: () => e.state[fe] !== 0, createHref: (o) => t.createHref(o), block: (o) => {
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
function Ys(t, e) {
  e || (e = {});
  const s = Ps();
  return { ...e, key: s, __TSR_key: s, [fe]: t };
}
function Yn(t) {
  var _a5, _b2;
  const e = (t == null ? void 0 : t.window) ?? (typeof document < "u" ? window : void 0), s = e.history.pushState, n = e.history.replaceState;
  let i = [];
  const r = () => i, o = (x) => i = x, a = (t == null ? void 0 : t.createHref) ?? ((x) => x), c = (t == null ? void 0 : t.parseLocation) ?? (() => We(`${e.location.pathname}${e.location.search}${e.location.hash}`, e.history.state));
  if (!((_a5 = e.history.state) == null ? void 0 : _a5.__TSR_key) && !((_b2 = e.history.state) == null ? void 0 : _b2.key)) {
    const x = Ps();
    e.history.replaceState({ [fe]: 0, key: x, __TSR_key: x }, "");
  }
  let l = c(), h, u = false, d = false, p = false, f = false;
  const y = () => l;
  let g, v;
  const S = () => {
    g && (_._ignoreSubscribers = true, (g.isPush ? e.history.pushState : e.history.replaceState)(g.state, "", g.href), _._ignoreSubscribers = false, g = void 0, v = void 0, h = void 0);
  }, b = (x, w, P) => {
    const C = a(w);
    v || (h = l), l = We(w, P), g = { href: C, state: P, isPush: (g == null ? void 0 : g.isPush) || x === "push" }, v || (v = Promise.resolve().then(() => S()));
  }, m = (x) => {
    l = c(), _.notify({ type: x });
  }, R = async () => {
    if (d) {
      d = false;
      return;
    }
    const x = c(), w = x.state[fe] - l.state[fe], P = w === 1, C = w === -1, E = !P && !C || u;
    u = false;
    const I = E ? "GO" : C ? "BACK" : "FORWARD", M = E ? { type: "GO", index: w } : { type: C ? "BACK" : "FORWARD" };
    if (p) p = false;
    else {
      const F = r();
      if (typeof document < "u" && F.length) {
        for (const J of F) if (await J.blockerFn({ currentLocation: l, nextLocation: x, action: I })) {
          d = true, e.history.go(1), _.notify(M);
          return;
        }
      }
    }
    l = c(), _.notify(M);
  }, k = (x) => {
    if (f) {
      f = false;
      return;
    }
    let w = false;
    const P = r();
    if (typeof document < "u" && P.length) for (const C of P) {
      const E = C.enableBeforeUnload ?? true;
      if (E === true) {
        w = true;
        break;
      }
      if (typeof E == "function" && E() === true) {
        w = true;
        break;
      }
    }
    if (w) return x.preventDefault(), x.returnValue = "";
  }, _ = Ji({ getLocation: y, getLength: () => e.history.length, pushState: (x, w) => b("push", x, w), replaceState: (x, w) => b("replace", x, w), back: (x) => (x && (p = true), f = true, e.history.back()), forward: (x) => {
    x && (p = true), f = true, e.history.forward();
  }, go: (x) => {
    u = true, e.history.go(x);
  }, createHref: (x) => a(x), flush: S, destroy: () => {
    e.history.pushState = s, e.history.replaceState = n, e.removeEventListener(Js, k, { capture: true }), e.removeEventListener(Qs, R);
  }, onBlocked: () => {
    h && l !== h && (l = h);
  }, getBlockers: r, setBlockers: o, notifyOnIndexChange: false });
  return e.addEventListener(Js, k, { capture: true }), e.addEventListener(Qs, R), e.history.pushState = function(...x) {
    const w = s.apply(e.history, x);
    return _._ignoreSubscribers || m("PUSH"), w;
  }, e.history.replaceState = function(...x) {
    const w = n.apply(e.history, x);
    return _._ignoreSubscribers || m("REPLACE"), w;
  }, _;
}
function Vu(t) {
  const e = typeof document < "u" ? window : void 0;
  return Yn({ window: e, parseLocation: () => {
    const s = e.location.hash.split("#").slice(1), n = s[0] ?? "/", i = e.location.search, r = s.slice(1), o = r.length === 0 ? "" : `#${r.join("#")}`, a = `${n}${i}${o}`;
    return We(a, e.history.state);
  }, createHref: (s) => `${e.location.pathname}${e.location.search}#${s}` });
}
function Yi(t) {
  let e = t.replace(/[\x00-\x1f\x7f]/g, "");
  return e.startsWith("//") && (e = "/" + e.replace(/^\/+/, "")), e;
}
function We(t, e) {
  const s = Yi(t), n = s.indexOf("#"), i = s.indexOf("?"), r = Ps();
  return { href: s, pathname: s.substring(0, n > 0 ? i > 0 ? Math.min(n, i) : n : i > 0 ? i : s.length), hash: n > -1 ? s.substring(n) : "", search: i > -1 ? s.slice(i, n === -1 ? void 0 : n) : "", state: e || { [fe]: 0, key: r, __TSR_key: r } };
}
function Ps() {
  return (Math.random() + 1).toString(36).substring(7);
}
const Xi = false;
function Ne(t) {
  let e;
  return Wi(() => {
    e = t();
  }), e;
}
function He(t) {
  return t[t.length - 1];
}
function Zi(t) {
  return typeof t == "function";
}
function Re(t, e) {
  return Zi(t) ? t(e) : t;
}
const er = Object.prototype.hasOwnProperty, Xs = Object.prototype.propertyIsEnumerable;
function q(t, e, s = 0) {
  if (t === e) return t;
  if (s > 500) return e;
  const n = e, i = tn(t) && tn(n);
  if (!i && !(xt(t) && xt(n))) return n;
  const r = i ? t : Zs(t);
  if (!r) return n;
  const o = i ? n : Zs(n);
  if (!o) return n;
  const a = r.length, c = o.length, l = i ? new Array(c) : {};
  let h = 0;
  for (let u = 0; u < c; u++) {
    const d = i ? u : o[u], p = t[d], f = n[d];
    if (p === f) {
      l[d] = p, (i ? u < a : er.call(t, d)) && h++;
      continue;
    }
    if (p === null || f === null || typeof p != "object" || typeof f != "object") {
      l[d] = f;
      continue;
    }
    const y = q(p, f, s + 1);
    l[d] = y, y === p && h++;
  }
  return a === c && h === a ? t : l;
}
function Zs(t) {
  const e = Object.getOwnPropertyNames(t);
  for (const i of e) if (!Xs.call(t, i)) return false;
  const s = Object.getOwnPropertySymbols(t);
  if (s.length === 0) return e;
  const n = e;
  for (const i of s) {
    if (!Xs.call(t, i)) return false;
    n.push(i);
  }
  return n;
}
function xt(t) {
  if (!en(t)) return false;
  const e = t.constructor;
  if (typeof e > "u") return true;
  const s = e.prototype;
  return !(!en(s) || !s.hasOwnProperty("isPrototypeOf"));
}
function en(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function tn(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function _e(t, e, s) {
  if (t === e) return true;
  if (typeof t != typeof e) return false;
  if (Array.isArray(t) && Array.isArray(e)) {
    if (t.length !== e.length) return false;
    for (let n = 0, i = t.length; n < i; n++) if (!_e(t[n], e[n], s)) return false;
    return true;
  }
  if (xt(t) && xt(e)) {
    const n = (s == null ? void 0 : s.ignoreUndefined) ?? true;
    if (s == null ? void 0 : s.partial) {
      for (const o in e) if ((!n || e[o] !== void 0) && !_e(t[o], e[o], s)) return false;
      return true;
    }
    let i = 0;
    if (!n) i = Object.keys(t).length;
    else for (const o in t) t[o] !== void 0 && i++;
    let r = 0;
    for (const o in e) if ((!n || e[o] !== void 0) && (r++, r > i || !_e(t[o], e[o], s))) return false;
    return i === r;
  }
  return false;
}
function Ge(t) {
  let e, s;
  const n = new Promise((i, r) => {
    e = i, s = r;
  });
  return n.status = "pending", n.resolve = (i) => {
    n.status = "resolved", n.value = i, e(i), t == null ? void 0 : t(i);
  }, n.reject = (i) => {
    n.status = "rejected", s(i);
  }, n;
}
function qu(t) {
  return typeof (t == null ? void 0 : t.message) != "string" ? false : t.message.startsWith("Failed to fetch dynamically imported module") || t.message.startsWith("error loading dynamically imported module") || t.message.startsWith("Importing a module script failed");
}
function ke(t) {
  return !!(t && typeof t == "object" && typeof t.then == "function");
}
function tr(t) {
  return t.replace(/[\x00-\x1f\x7f]/g, "");
}
function sn(t) {
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
  return tr(e);
}
const Xn = ["http:", "https:", "mailto:", "tel:"];
function Zn(t) {
  if (!t) return false;
  try {
    const e = new URL(t);
    return !Xn.includes(e.protocol);
  } catch {
    return false;
  }
}
const sr = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" }, nr = /[&><\u2028\u2029]/g;
function Wu(t) {
  return t.replace(nr, (e) => sr[e]);
}
function Be(t) {
  if (!t) return { path: t, handledProtocolRelativeURL: false };
  if (!/[%\\\x00-\x1f\x7f]/.test(t) && !t.startsWith("//")) return { path: t, handledProtocolRelativeURL: false };
  const e = /%25|%5C/gi;
  let s = 0, n = "", i;
  for (; (i = e.exec(t)) !== null; ) n += sn(t.slice(s, i.index)) + i[0], s = e.lastIndex;
  n = n + sn(s ? t.slice(s) : t);
  let r = false;
  return n.startsWith("//") && (r = true, n = "/" + n.replace(/^\/+/, "")), { path: n, handledProtocolRelativeURL: r };
}
function ir(t) {
  return /\s|[^\u0000-\u007F]/.test(t) ? t.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : t;
}
function Pt(t) {
  const e = /* @__PURE__ */ new Map();
  let s, n;
  const i = (r) => {
    r.next && (r.prev ? (r.prev.next = r.next, r.next.prev = r.prev, r.next = void 0, n && (n.next = r, r.prev = n)) : (r.next.prev = void 0, s = r.next, r.next = void 0, n && (r.prev = n, n.next = r)), n = r);
  };
  return { get(r) {
    const o = e.get(r);
    if (o) return i(o), o.value;
  }, set(r, o) {
    if (e.size >= t && s) {
      const c = s;
      e.delete(c.key), c.next && (s = c.next, c.next.prev = void 0), c === n && (n = void 0);
    }
    const a = e.get(r);
    if (a) a.value = o, i(a);
    else {
      const c = { key: r, value: o, prev: n };
      n && (n.next = c), n = c, s || (s = c), e.set(r, c);
    }
  }, clear() {
    e.clear(), s = void 0, n = void 0;
  } };
}
const Oe = 0, we = 1, Se = 2, Qe = 3, ge = 4, ei = 5;
function rr(t) {
  const e = t.indexOf("{");
  if (e === -1) return null;
  const s = t.indexOf("}", e);
  return s === -1 || e + 1 >= t.length ? null : [e, s];
}
function Rs(t, e, s = new Uint16Array(6)) {
  const n = t.indexOf("/", e), i = n === -1 ? t.length : n, r = t.substring(e, i);
  if (!r || !r.includes("$")) return s[0] = Oe, s[1] = e, s[2] = e, s[3] = i, s[4] = i, s[5] = i, s;
  if (r === "$") {
    const a = t.length;
    return s[0] = Se, s[1] = e, s[2] = e, s[3] = a, s[4] = a, s[5] = a, s;
  }
  if (r.charCodeAt(0) === 36) return s[0] = we, s[1] = e, s[2] = e + 1, s[3] = i, s[4] = i, s[5] = i, s;
  const o = rr(r);
  if (o) {
    const [a, c] = o, l = r.charCodeAt(a + 1);
    if (l === 45) {
      if (a + 2 < r.length && r.charCodeAt(a + 2) === 36) {
        const h = a + 3, u = c;
        if (h < u) return s[0] = Qe, s[1] = e + a, s[2] = e + h, s[3] = e + u, s[4] = e + c + 1, s[5] = i, s;
      }
    } else if (l === 36) {
      const h = a + 1, u = a + 2;
      return u === c ? (s[0] = Se, s[1] = e + a, s[2] = e + h, s[3] = e + u, s[4] = e + c + 1, s[5] = t.length, s) : (s[0] = we, s[1] = e + a, s[2] = e + u, s[3] = e + c, s[4] = e + c + 1, s[5] = i, s);
    }
  }
  return s[0] = Oe, s[1] = e, s[2] = e, s[3] = i, s[4] = i, s[5] = i, s;
}
function At(t, e, s, n, i, r, o) {
  var _a5, _b2, _c3, _d2, _e28, _f2, _g2, _h2, _i5, _j, _k, _l2, _m;
  o == null ? void 0 : o(s);
  let a = n;
  {
    const c = s.fullPath ?? s.from, l = c.length, h = ((_a5 = s.options) == null ? void 0 : _a5.caseSensitive) ?? t, u = !!(((_c3 = (_b2 = s.options) == null ? void 0 : _b2.params) == null ? void 0 : _c3.parse) && ((_e28 = (_d2 = s.options) == null ? void 0 : _d2.skipRouteOnParseError) == null ? void 0 : _e28.params));
    for (; a < l; ) {
      const p = Rs(c, a, e);
      let f;
      const y = a, g = p[5];
      switch (a = g + 1, r++, p[0]) {
        case Oe: {
          const S = c.substring(p[2], p[3]);
          if (h) {
            const b = (_f2 = i.static) == null ? void 0 : _f2.get(S);
            if (b) f = b;
            else {
              i.static ?? (i.static = /* @__PURE__ */ new Map());
              const m = me(s.fullPath ?? s.from);
              m.parent = i, m.depth = r, f = m, i.static.set(S, m);
            }
          } else {
            const b = S.toLowerCase(), m = (_g2 = i.staticInsensitive) == null ? void 0 : _g2.get(b);
            if (m) f = m;
            else {
              i.staticInsensitive ?? (i.staticInsensitive = /* @__PURE__ */ new Map());
              const R = me(s.fullPath ?? s.from);
              R.parent = i, R.depth = r, f = R, i.staticInsensitive.set(b, R);
            }
          }
          break;
        }
        case we: {
          const S = c.substring(y, p[1]), b = c.substring(p[4], g), m = h && !!(S || b), R = S ? m ? S : S.toLowerCase() : void 0, k = b ? m ? b : b.toLowerCase() : void 0, _ = !u && ((_h2 = i.dynamic) == null ? void 0 : _h2.find((x) => !x.skipOnParamError && x.caseSensitive === m && x.prefix === R && x.suffix === k));
          if (_) f = _;
          else {
            const x = $t(we, s.fullPath ?? s.from, m, R, k);
            f = x, x.depth = r, x.parent = i, i.dynamic ?? (i.dynamic = []), i.dynamic.push(x);
          }
          break;
        }
        case Qe: {
          const S = c.substring(y, p[1]), b = c.substring(p[4], g), m = h && !!(S || b), R = S ? m ? S : S.toLowerCase() : void 0, k = b ? m ? b : b.toLowerCase() : void 0, _ = !u && ((_i5 = i.optional) == null ? void 0 : _i5.find((x) => !x.skipOnParamError && x.caseSensitive === m && x.prefix === R && x.suffix === k));
          if (_) f = _;
          else {
            const x = $t(Qe, s.fullPath ?? s.from, m, R, k);
            f = x, x.parent = i, x.depth = r, i.optional ?? (i.optional = []), i.optional.push(x);
          }
          break;
        }
        case Se: {
          const S = c.substring(y, p[1]), b = c.substring(p[4], g), m = h && !!(S || b), R = S ? m ? S : S.toLowerCase() : void 0, k = b ? m ? b : b.toLowerCase() : void 0, _ = $t(Se, s.fullPath ?? s.from, m, R, k);
          f = _, _.parent = i, _.depth = r, i.wildcard ?? (i.wildcard = []), i.wildcard.push(_);
        }
      }
      i = f;
    }
    if (u && s.children && !s.isRoot && s.id && s.id.charCodeAt(s.id.lastIndexOf("/") + 1) === 95) {
      const p = me(s.fullPath ?? s.from);
      p.kind = ei, p.parent = i, r++, p.depth = r, i.pathless ?? (i.pathless = []), i.pathless.push(p), i = p;
    }
    const d = (s.path || !s.children) && !s.isRoot;
    if (d && c.endsWith("/")) {
      const p = me(s.fullPath ?? s.from);
      p.kind = ge, p.parent = i, r++, p.depth = r, i.index = p, i = p;
    }
    i.parse = ((_k = (_j = s.options) == null ? void 0 : _j.params) == null ? void 0 : _k.parse) ?? null, i.skipOnParamError = u, i.parsingPriority = ((_m = (_l2 = s.options) == null ? void 0 : _l2.skipRouteOnParseError) == null ? void 0 : _m.priority) ?? 0, d && !i.route && (i.route = s, i.fullPath = s.fullPath ?? s.from);
  }
  if (s.children) for (const c of s.children) At(t, e, c, a, i, r, o);
}
function zt(t, e) {
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
function ce(t) {
  var _a5, _b2, _c3;
  if (t.pathless) for (const e of t.pathless) ce(e);
  if (t.static) for (const e of t.static.values()) ce(e);
  if (t.staticInsensitive) for (const e of t.staticInsensitive.values()) ce(e);
  if ((_a5 = t.dynamic) == null ? void 0 : _a5.length) {
    t.dynamic.sort(zt);
    for (const e of t.dynamic) ce(e);
  }
  if ((_b2 = t.optional) == null ? void 0 : _b2.length) {
    t.optional.sort(zt);
    for (const e of t.optional) ce(e);
  }
  if ((_c3 = t.wildcard) == null ? void 0 : _c3.length) {
    t.wildcard.sort(zt);
    for (const e of t.wildcard) ce(e);
  }
}
function me(t) {
  return { kind: Oe, depth: 0, pathless: null, index: null, static: null, staticInsensitive: null, dynamic: null, optional: null, wildcard: null, route: null, fullPath: t, parent: null, parse: null, skipOnParamError: false, parsingPriority: 0 };
}
function $t(t, e, s, n, i) {
  return { kind: t, depth: 0, pathless: null, index: null, static: null, staticInsensitive: null, dynamic: null, optional: null, wildcard: null, route: null, fullPath: e, parent: null, parse: null, skipOnParamError: false, parsingPriority: 0, caseSensitive: s, prefix: n, suffix: i };
}
function or(t, e) {
  const s = me("/"), n = new Uint16Array(6);
  for (const i of t) At(false, n, i, 1, s, 0);
  ce(s), e.masksTree = s, e.flatCache = Pt(1e3);
}
function ar(t, e) {
  t || (t = "/");
  const s = e.flatCache.get(t);
  if (s) return s;
  const n = Cs(t, e.masksTree);
  return e.flatCache.set(t, n), n;
}
function cr(t, e, s, n, i) {
  t || (t = "/"), n || (n = "/");
  const r = e ? `case\0${t}` : t;
  let o = i.singleCache.get(r);
  if (!o) {
    o = me("/");
    const a = new Uint16Array(6);
    At(e, a, { from: t }, 1, o, 0), i.singleCache.set(r, o);
  }
  return Cs(n, o, s);
}
function lr(t, e, s = false) {
  const n = s ? t : `nofuzz\0${t}`, i = e.matchCache.get(n);
  if (i !== void 0) return i;
  t || (t = "/");
  let r;
  try {
    r = Cs(t, e.segmentTree, s);
  } catch (o) {
    if (o instanceof URIError) r = null;
    else throw o;
  }
  return r && (r.branch = fr(r.route)), e.matchCache.set(n, r), r;
}
function ur(t) {
  return t === "/" ? t : t.replace(/\/{1,}$/, "");
}
function hr(t, e = false, s) {
  const n = me(t.fullPath), i = new Uint16Array(6), r = {}, o = {};
  let a = 0;
  return At(e, i, t, 1, n, 0, (l) => {
    if (s == null ? void 0 : s(l, a), bt(!(l.id in r), `Duplicate routes found with id: ${String(l.id)}`), r[l.id] = l, a !== 0 && l.path) {
      const h = ur(l.fullPath);
      (!o[h] || l.fullPath.endsWith("/")) && (o[h] = l);
    }
    a++;
  }), ce(n), { processedTree: { segmentTree: n, singleCache: Pt(1e3), matchCache: Pt(1e3), flatCache: null, masksTree: null }, routesById: r, routesByPath: o };
}
function Cs(t, e, s = false) {
  const n = t.split("/"), i = pr(t, n, e, s);
  if (!i) return null;
  const [r] = ti(t, n, i);
  return { route: i.node.route, rawParams: r, parsedParams: i.parsedParams };
}
function ti(t, e, s) {
  var _a5, _b2, _c3, _d2, _e28, _f2, _g2, _h2, _i5, _j;
  const n = dr(s.node);
  let i = null;
  const r = {};
  let o = ((_a5 = s.extract) == null ? void 0 : _a5.part) ?? 0, a = ((_b2 = s.extract) == null ? void 0 : _b2.node) ?? 0, c = ((_c3 = s.extract) == null ? void 0 : _c3.path) ?? 0, l = ((_d2 = s.extract) == null ? void 0 : _d2.segment) ?? 0;
  for (; a < n.length; o++, a++, c++, l++) {
    const h = n[a];
    if (h.kind === ge) break;
    if (h.kind === ei) {
      l--, o--, c--;
      continue;
    }
    const u = e[o], d = c;
    if (u && (c += u.length), h.kind === we) {
      i ?? (i = s.node.fullPath.split("/"));
      const p = i[l], f = ((_e28 = h.prefix) == null ? void 0 : _e28.length) ?? 0;
      if (p.charCodeAt(f) === 123) {
        const g = ((_f2 = h.suffix) == null ? void 0 : _f2.length) ?? 0, v = p.substring(f + 2, p.length - g - 1), S = u.substring(f, u.length - g);
        r[v] = decodeURIComponent(S);
      } else {
        const g = p.substring(1);
        r[g] = decodeURIComponent(u);
      }
    } else if (h.kind === Qe) {
      if (s.skipped & 1 << a) {
        o--, c = d - 1;
        continue;
      }
      i ?? (i = s.node.fullPath.split("/"));
      const p = i[l], f = ((_g2 = h.prefix) == null ? void 0 : _g2.length) ?? 0, y = ((_h2 = h.suffix) == null ? void 0 : _h2.length) ?? 0, g = p.substring(f + 3, p.length - y - 1), v = h.suffix || h.prefix ? u.substring(f, u.length - y) : u;
      v && (r[g] = decodeURIComponent(v));
    } else if (h.kind === Se) {
      const p = h, f = t.substring(d + (((_i5 = p.prefix) == null ? void 0 : _i5.length) ?? 0), t.length - (((_j = p.suffix) == null ? void 0 : _j.length) ?? 0)), y = decodeURIComponent(f);
      r["*"] = y, r._splat = y;
      break;
    }
  }
  return s.rawParams && Object.assign(r, s.rawParams), [r, { part: o, node: a, path: c, segment: l }];
}
function fr(t) {
  const e = [t];
  for (; t.parentRoute; ) t = t.parentRoute, e.push(t);
  return e.reverse(), e;
}
function dr(t) {
  const e = Array(t.depth + 1);
  do
    e[t.depth] = t, t = t.parent;
  while (t);
  return e;
}
function pr(t, e, s, n) {
  if (t === "/" && s.index) return { node: s.index, skipped: 0 };
  const i = !He(e), r = i && t !== "/", o = e.length - (i ? 1 : 0), a = [{ node: s, index: 1, skipped: 0, depth: 1, statics: 1, dynamics: 0, optionals: 0 }];
  let c = null, l = null, h = null;
  for (; a.length; ) {
    const u = a.pop(), { node: d, index: p, skipped: f, depth: y, statics: g, dynamics: v, optionals: S } = u;
    let { extract: b, rawParams: m, parsedParams: R } = u;
    if (d.skipOnParamError) {
      if (!Nt(t, e, u)) continue;
      m = u.rawParams, b = u.extract, R = u.parsedParams;
    }
    n && d.route && d.kind !== ge && Ke(l, u) && (l = u);
    const k = p === o;
    if (k && (d.route && !r && Ke(h, u) && (h = u), !d.optional && !d.wildcard && !d.index && !d.pathless)) continue;
    const _ = k ? void 0 : e[p];
    let x;
    if (k && d.index) {
      const w = { node: d.index, index: p, skipped: f, depth: y + 1, statics: g, dynamics: v, optionals: S, extract: b, rawParams: m, parsedParams: R };
      let P = true;
      if (d.index.skipOnParamError && (Nt(t, e, w) || (P = false)), P) {
        if (g === o && !v && !S && !f) return w;
        Ke(h, w) && (h = w);
      }
    }
    if (d.wildcard && Ke(c, u)) for (const w of d.wildcard) {
      const { prefix: P, suffix: C } = w;
      if (P && (k || !(w.caseSensitive ? _ : x ?? (x = _.toLowerCase())).startsWith(P))) continue;
      if (C) {
        if (k) continue;
        const I = e.slice(p).join("/").slice(-C.length);
        if ((w.caseSensitive ? I : I.toLowerCase()) !== C) continue;
      }
      const E = { node: w, index: o, skipped: f, depth: y, statics: g, dynamics: v, optionals: S, extract: b, rawParams: m, parsedParams: R };
      if (!(w.skipOnParamError && !Nt(t, e, E))) {
        c = E;
        break;
      }
    }
    if (d.optional) {
      const w = f | 1 << y, P = y + 1;
      for (let C = d.optional.length - 1; C >= 0; C--) {
        const E = d.optional[C];
        a.push({ node: E, index: p, skipped: w, depth: P, statics: g, dynamics: v, optionals: S, extract: b, rawParams: m, parsedParams: R });
      }
      if (!k) for (let C = d.optional.length - 1; C >= 0; C--) {
        const E = d.optional[C], { prefix: I, suffix: M } = E;
        if (I || M) {
          const F = E.caseSensitive ? _ : x ?? (x = _.toLowerCase());
          if (I && !F.startsWith(I) || M && !F.endsWith(M)) continue;
        }
        a.push({ node: E, index: p + 1, skipped: f, depth: P, statics: g, dynamics: v, optionals: S + 1, extract: b, rawParams: m, parsedParams: R });
      }
    }
    if (!k && d.dynamic && _) for (let w = d.dynamic.length - 1; w >= 0; w--) {
      const P = d.dynamic[w], { prefix: C, suffix: E } = P;
      if (C || E) {
        const I = P.caseSensitive ? _ : x ?? (x = _.toLowerCase());
        if (C && !I.startsWith(C) || E && !I.endsWith(E)) continue;
      }
      a.push({ node: P, index: p + 1, skipped: f, depth: y + 1, statics: g, dynamics: v + 1, optionals: S, extract: b, rawParams: m, parsedParams: R });
    }
    if (!k && d.staticInsensitive) {
      const w = d.staticInsensitive.get(x ?? (x = _.toLowerCase()));
      w && a.push({ node: w, index: p + 1, skipped: f, depth: y + 1, statics: g + 1, dynamics: v, optionals: S, extract: b, rawParams: m, parsedParams: R });
    }
    if (!k && d.static) {
      const w = d.static.get(_);
      w && a.push({ node: w, index: p + 1, skipped: f, depth: y + 1, statics: g + 1, dynamics: v, optionals: S, extract: b, rawParams: m, parsedParams: R });
    }
    if (d.pathless) {
      const w = y + 1;
      for (let P = d.pathless.length - 1; P >= 0; P--) {
        const C = d.pathless[P];
        a.push({ node: C, index: p, skipped: f, depth: w, statics: g, dynamics: v, optionals: S, extract: b, rawParams: m, parsedParams: R });
      }
    }
  }
  if (h && c) return Ke(c, h) ? h : c;
  if (h) return h;
  if (c) return c;
  if (n && l) {
    let u = l.index;
    for (let p = 0; p < l.index; p++) u += e[p].length;
    const d = u === t.length ? "/" : t.slice(u);
    return l.rawParams ?? (l.rawParams = {}), l.rawParams["**"] = decodeURIComponent(d), l;
  }
  return null;
}
function Nt(t, e, s) {
  try {
    const [n, i] = ti(t, e, s);
    s.rawParams = n, s.extract = i;
    const r = s.node.parse(n);
    return s.parsedParams = Object.assign({}, s.parsedParams, r), true;
  } catch {
    return null;
  }
}
function Ke(t, e) {
  return t ? e.statics > t.statics || e.statics === t.statics && (e.dynamics > t.dynamics || e.dynamics === t.dynamics && (e.optionals > t.optionals || e.optionals === t.optionals && ((e.node.kind === ge) > (t.node.kind === ge) || e.node.kind === ge == (t.node.kind === ge) && e.depth > t.depth))) : true;
}
function pt(t) {
  return _s(t.filter((e) => e !== void 0).join("/"));
}
function _s(t) {
  return t.replace(/\/{2,}/g, "/");
}
function si(t) {
  return t === "/" ? t : t.replace(/^\/{1,}/, "");
}
function ve(t) {
  const e = t.length;
  return e > 1 && t[e - 1] === "/" ? t.replace(/\/{1,}$/, "") : t;
}
function ni(t) {
  return ve(si(t));
}
function nn(t, e) {
  return (t == null ? void 0 : t.endsWith("/")) && t !== "/" && t !== `${e}/` ? t.slice(0, -1) : t;
}
function Hu(t, e, s) {
  return nn(t, s) === nn(e, s);
}
function yr({ base: t, to: e, trailingSlash: s = "never", cache: n }) {
  const i = e.startsWith("/"), r = !i && e === ".";
  let o;
  if (n) {
    o = i ? e : r ? t : t + "\0" + e;
    const u = n.get(o);
    if (u) return u;
  }
  let a;
  if (r) a = t.split("/");
  else if (i) a = e.split("/");
  else {
    for (a = t.split("/"); a.length > 1 && He(a) === ""; ) a.pop();
    const u = e.split("/");
    for (let d = 0, p = u.length; d < p; d++) {
      const f = u[d];
      f === "" ? d ? d === p - 1 && a.push(f) : a = [f] : f === ".." ? a.pop() : f === "." || a.push(f);
    }
  }
  a.length > 1 && (He(a) === "" ? s === "never" && a.pop() : s === "always" && a.push(""));
  let c, l = "";
  for (let u = 0; u < a.length; u++) {
    u > 0 && (l += "/");
    const d = a[u];
    if (!d) continue;
    c = Rs(d, 0, c);
    const p = c[0];
    if (p === Oe) {
      l += d;
      continue;
    }
    const f = c[5], y = d.substring(0, c[1]), g = d.substring(c[4], f), v = d.substring(c[2], c[3]);
    p === we ? l += y || g ? `${y}{$${v}}${g}` : `$${v}` : p === Se ? l += y || g ? `${y}{$}${g}` : "$" : l += `${y}{-$${v}}${g}`;
  }
  l = _s(l);
  const h = l || "/";
  return o && n && n.set(o, h), h;
}
function gr(t) {
  const e = new Map(t.map((i) => [encodeURIComponent(i), i])), s = Array.from(e.keys()).map((i) => i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), n = new RegExp(s, "g");
  return (i) => i.replace(n, (r) => e.get(r) ?? r);
}
function Ut(t, e, s) {
  const n = e[t];
  return typeof n != "string" ? n : t === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(n) ? n : n.split("/").map((i) => rn(i, s)).join("/") : rn(n, s);
}
function Vt({ path: t, params: e, decoder: s, ...n }) {
  let i = false;
  const r = {};
  if (!t || t === "/") return { interpolatedPath: "/", usedParams: r, isMissingParams: i };
  if (!t.includes("$")) return { interpolatedPath: t, usedParams: r, isMissingParams: i };
  const o = t.length;
  let a = 0, c, l = "";
  for (; a < o; ) {
    const u = a;
    c = Rs(t, u, c);
    const d = c[5];
    if (a = d + 1, u === d) continue;
    const p = c[0];
    if (p === Oe) {
      l += "/" + t.substring(u, d);
      continue;
    }
    if (p === Se) {
      const f = e._splat;
      r._splat = f, r["*"] = f;
      const y = t.substring(u, c[1]), g = t.substring(c[4], d);
      if (!f) {
        i = true, (y || g) && (l += "/" + y + g);
        continue;
      }
      const v = Ut("_splat", e, s);
      l += "/" + y + v + g;
      continue;
    }
    if (p === we) {
      const f = t.substring(c[2], c[3]);
      !i && !(f in e) && (i = true), r[f] = e[f];
      const y = t.substring(u, c[1]), g = t.substring(c[4], d), v = Ut(f, e, s) ?? "undefined";
      l += "/" + y + v + g;
      continue;
    }
    if (p === Qe) {
      const f = t.substring(c[2], c[3]), y = e[f];
      if (y == null) continue;
      r[f] = y;
      const g = t.substring(u, c[1]), v = t.substring(c[4], d), S = Ut(f, e, s) ?? "";
      l += "/" + g + S + v;
      continue;
    }
  }
  return t.endsWith("/") && (l += "/"), { usedParams: r, interpolatedPath: l || "/", isMissingParams: i };
}
function rn(t, e) {
  const s = encodeURIComponent(t);
  return (e == null ? void 0 : e(s)) ?? s;
}
function re(t) {
  return !!(t == null ? void 0 : t.isNotFound);
}
function mr() {
  try {
    if (typeof window < "u" && typeof window.sessionStorage == "object") return window.sessionStorage;
  } catch {
  }
}
const es = "tsr-scroll-restoration-v1_3", vr = (t, e) => {
  let s;
  return (...n) => {
    s || (s = setTimeout(() => {
      t(...n), s = null;
    }, e));
  };
};
function wr() {
  const t = mr();
  if (!t) return null;
  const e = t.getItem(es);
  let s = e ? JSON.parse(e) : {};
  return { state: s, set: (n) => {
    s = Re(n, s) || s;
    try {
      t.setItem(es, JSON.stringify(s));
    } catch {
      console.warn("[ts-router] Could not persist scroll restoration state to sessionStorage.");
    }
  } };
}
const lt = wr(), Sr = (t) => t.state.__TSR_key || t.href;
function br(t) {
  const e = [];
  let s;
  for (; s = t.parentNode; ) e.push(`${t.tagName}:nth-child(${Array.prototype.indexOf.call(s.children, t) + 1})`), t = s;
  return `${e.reverse().join(" > ")}`.toLowerCase();
}
let Rt = false;
function xr({ storageKey: t, key: e, behavior: s, shouldScrollRestoration: n, scrollToTopSelectors: i, location: r }) {
  var _a5, _b2;
  let o;
  try {
    o = JSON.parse(sessionStorage.getItem(t) || "{}");
  } catch (l) {
    console.error(l);
    return;
  }
  const a = e || ((_a5 = window.history.state) == null ? void 0 : _a5.__TSR_key), c = o[a];
  Rt = true;
  e: {
    if (n && c && Object.keys(c).length > 0) {
      for (const u in c) {
        const d = c[u];
        if (u === "window") window.scrollTo({ top: d.scrollY, left: d.scrollX, behavior: s });
        else if (u) {
          const p = document.querySelector(u);
          p && (p.scrollLeft = d.scrollX, p.scrollTop = d.scrollY);
        }
      }
      break e;
    }
    const l = (r ?? window.location).hash.split("#", 2)[1];
    if (l) {
      const u = ((_b2 = window.history.state) == null ? void 0 : _b2.__hashScrollIntoViewOptions) ?? true;
      if (u) {
        const d = document.getElementById(l);
        d && d.scrollIntoView(u);
      }
      break e;
    }
    const h = { top: 0, left: 0, behavior: s };
    if (window.scrollTo(h), i) for (const u of i) {
      if (u === "window") continue;
      const d = typeof u == "function" ? u() : document.querySelector(u);
      d && d.scrollTo(h);
    }
  }
  Rt = false;
}
function Pr(t, e) {
  if (!lt || ((t.options.scrollRestoration ?? false) && (t.isScrollRestoring = true), t.isScrollRestorationSetup || !lt)) return;
  t.isScrollRestorationSetup = true, Rt = false;
  const n = t.options.getScrollRestorationKey || Sr;
  window.history.scrollRestoration = "manual";
  const i = (r) => {
    if (Rt || !t.isScrollRestoring) return;
    let o = "";
    if (r.target === document || r.target === window) o = "window";
    else {
      const c = r.target.getAttribute("data-scroll-restoration-id");
      c ? o = `[data-scroll-restoration-id="${c}"]` : o = br(r.target);
    }
    const a = n(t.state.location);
    lt.set((c) => {
      const l = c[a] || (c[a] = {}), h = l[o] || (l[o] = {});
      if (o === "window") h.scrollX = window.scrollX || 0, h.scrollY = window.scrollY || 0;
      else if (o) {
        const u = document.querySelector(o);
        u && (h.scrollX = u.scrollLeft || 0, h.scrollY = u.scrollTop || 0);
      }
      return c;
    });
  };
  typeof document < "u" && document.addEventListener("scroll", vr(i, 100), true), t.subscribe("onRendered", (r) => {
    const o = n(r.toLocation);
    if (!t.resetNextScroll) {
      t.resetNextScroll = true;
      return;
    }
    typeof t.options.scrollRestoration == "function" && !t.options.scrollRestoration({ location: t.latestLocation }) || (xr({ storageKey: es, key: o, behavior: t.options.scrollRestorationBehavior, shouldScrollRestoration: t.isScrollRestoring, scrollToTopSelectors: t.options.scrollToTopSelectors, location: t.history.location }), t.isScrollRestoring && lt.set((a) => (a[o] || (a[o] = {}), a)));
  });
}
function Gu(t) {
  if (typeof document < "u" && document.querySelector) {
    const e = t.state.location.state.__hashScrollIntoViewOptions ?? true;
    if (e && t.state.location.hash !== "") {
      const s = document.getElementById(t.state.location.hash);
      s && s.scrollIntoView(e);
    }
  }
}
function Rr(t, e = String) {
  const s = new URLSearchParams();
  for (const n in t) {
    const i = t[n];
    i !== void 0 && s.set(n, e(i));
  }
  return s.toString();
}
function qt(t) {
  return t ? t === "false" ? false : t === "true" ? true : +t * 0 === 0 && +t + "" === t ? +t : t : "";
}
function Cr(t) {
  const e = new URLSearchParams(t), s = {};
  for (const [n, i] of e.entries()) {
    const r = s[n];
    r == null ? s[n] = qt(i) : Array.isArray(r) ? r.push(qt(i)) : s[n] = [r, qt(i)];
  }
  return s;
}
const _r = Ir(JSON.parse), kr = Er(JSON.stringify, JSON.parse);
function Ir(t) {
  return (e) => {
    e[0] === "?" && (e = e.substring(1));
    const s = Cr(e);
    for (const n in s) {
      const i = s[n];
      if (typeof i == "string") try {
        s[n] = t(i);
      } catch {
      }
    }
    return s;
  };
}
function Er(t, e) {
  const s = typeof e == "function";
  function n(i) {
    if (typeof i == "object" && i !== null) try {
      return t(i);
    } catch {
    }
    else if (s && typeof i == "string") try {
      return e(i), t(i);
    } catch {
    }
    return i;
  }
  return (i) => {
    const r = Rr(i, n);
    return r ? `?${r}` : "";
  };
}
const ne = "__root__";
function Or(t) {
  if (t.statusCode = t.statusCode || t.code || 307, !t._builtLocation && typeof t.href == "string" && Zn(t.href)) throw new Error(`Redirect blocked: unsafe protocol in href "${t.href}". Only ${Xn.join(", ")} protocols are allowed.`);
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
function X(t) {
  return t instanceof Response && !!t.options;
}
const yt = (t) => {
  var _a5;
  if (!t.rendered) return t.rendered = true, (_a5 = t.onReady) == null ? void 0 : _a5.call(t);
}, Lt = (t, e) => !!(t.preload && !t.router.state.matches.some((s) => s.id === e)), Ie = (t, e, s = true) => {
  const n = { ...t.router.options.context ?? {} }, i = s ? e : e - 1;
  for (let r = 0; r <= i; r++) {
    const o = t.matches[r];
    if (!o) continue;
    const a = t.router.getMatch(o.id);
    a && Object.assign(n, a.__routeContext, a.__beforeLoadContext);
  }
  return n;
}, ii = (t, e) => {
  var _a5;
  const s = t.router.routesById[e.routeId ?? ""] ?? t.router.routeTree;
  !s.options.notFoundComponent && ((_a5 = t.router.options) == null ? void 0 : _a5.defaultNotFoundComponent) && (s.options.notFoundComponent = t.router.options.defaultNotFoundComponent), bt(s.options.notFoundComponent);
  const n = t.matches.find((i) => i.routeId === s.id);
  bt(n, "Could not find match for route: " + s.id), t.updateMatch(n.id, (i) => ({ ...i, status: "notFound", error: e, isFetching: false })), e.routerCode === "BEFORE_LOAD" && s.parentRoute && (e.routeId = s.parentRoute.id, ii(t, e));
}, le = (t, e, s) => {
  var _a5, _b2, _c3;
  if (!(!X(s) && !re(s))) {
    if (X(s) && s.redirectHandled && !s.options.reloadDocument) throw s;
    if (e) {
      (_a5 = e._nonReactive.beforeLoadPromise) == null ? void 0 : _a5.resolve(), (_b2 = e._nonReactive.loaderPromise) == null ? void 0 : _b2.resolve(), e._nonReactive.beforeLoadPromise = void 0, e._nonReactive.loaderPromise = void 0;
      const n = X(s) ? "redirected" : "notFound";
      e._nonReactive.error = s, t.updateMatch(e.id, (i) => ({ ...i, status: n, context: Ie(t, e.index), isFetching: false, error: s })), re(s) && !s.routeId && (s.routeId = e.routeId), (_c3 = e._nonReactive.loadPromise) == null ? void 0 : _c3.resolve();
    }
    throw X(s) ? (t.rendered = true, s.options._fromLocation = t.location, s.redirectHandled = true, s = t.router.resolveRedirect(s), s) : (ii(t, s), s);
  }
}, ri = (t, e) => !!t.router.getMatch(e)._nonReactive.dehydrated, De = (t, e, s, n) => {
  var _a5, _b2;
  const { id: i, routeId: r } = t.matches[e], o = t.router.looseRoutesById[r];
  if (s instanceof Promise) throw s;
  s.routerCode = n, t.firstBadMatchIndex ?? (t.firstBadMatchIndex = e), le(t, t.router.getMatch(i), s);
  try {
    (_b2 = (_a5 = o.options).onError) == null ? void 0 : _b2.call(_a5, s);
  } catch (a) {
    s = a, le(t, t.router.getMatch(i), s);
  }
  t.updateMatch(i, (a) => {
    var _a6, _b3;
    return (_a6 = a._nonReactive.beforeLoadPromise) == null ? void 0 : _a6.resolve(), a._nonReactive.beforeLoadPromise = void 0, (_b3 = a._nonReactive.loadPromise) == null ? void 0 : _b3.resolve(), { ...a, error: s, status: "error", isFetching: false, updatedAt: Date.now(), abortController: new AbortController() };
  });
}, oi = (t, e, s, n) => {
  var _a5;
  if (n._nonReactive.pendingTimeout !== void 0) return;
  const i = s.options.pendingMs ?? t.router.options.defaultPendingMs;
  if (!!(t.onReady && !Lt(t, e) && (s.options.loader || s.options.beforeLoad || li(s)) && typeof i == "number" && i !== 1 / 0 && (s.options.pendingComponent ?? ((_a5 = t.router.options) == null ? void 0 : _a5.defaultPendingComponent)))) {
    const o = setTimeout(() => {
      yt(t);
    }, i);
    n._nonReactive.pendingTimeout = o;
  }
}, Mr = (t, e, s) => {
  const n = t.router.getMatch(e);
  if (!n._nonReactive.beforeLoadPromise && !n._nonReactive.loaderPromise) return;
  oi(t, e, s, n);
  const i = () => {
    const r = t.router.getMatch(e);
    r.preload && (r.status === "redirected" || r.status === "notFound") && le(t, r, r.error);
  };
  return n._nonReactive.beforeLoadPromise ? n._nonReactive.beforeLoadPromise.then(i) : i();
}, Tr = (t, e, s, n) => {
  const i = t.router.getMatch(e), r = i._nonReactive.loadPromise;
  i._nonReactive.loadPromise = Ge(() => {
    r == null ? void 0 : r.resolve();
  });
  const { paramsError: o, searchError: a } = i;
  o && De(t, s, o, "PARSE_PARAMS"), a && De(t, s, a, "VALIDATE_SEARCH"), oi(t, e, n, i);
  const c = new AbortController();
  let l = false;
  const h = () => {
    l || (l = true, t.updateMatch(e, (m) => ({ ...m, isFetching: "beforeLoad", fetchCount: m.fetchCount + 1, abortController: c })));
  }, u = () => {
    var _a5;
    (_a5 = i._nonReactive.beforeLoadPromise) == null ? void 0 : _a5.resolve(), i._nonReactive.beforeLoadPromise = void 0, t.updateMatch(e, (m) => ({ ...m, isFetching: false }));
  };
  if (!n.options.beforeLoad) {
    Ne(() => {
      h(), u();
    });
    return;
  }
  i._nonReactive.beforeLoadPromise = Ge();
  const d = { ...Ie(t, s, false), ...i.__routeContext }, { search: p, params: f, cause: y } = i, g = Lt(t, e), v = { search: p, abortController: c, params: f, preload: g, context: d, location: t.location, navigate: (m) => t.router.navigate({ ...m, _fromLocation: t.location }), buildLocation: t.router.buildLocation, cause: g ? "preload" : y, matches: t.matches, routeId: n.id, ...t.router.options.additionalContext }, S = (m) => {
    if (m === void 0) {
      Ne(() => {
        h(), u();
      });
      return;
    }
    (X(m) || re(m)) && (h(), De(t, s, m, "BEFORE_LOAD")), Ne(() => {
      h(), t.updateMatch(e, (R) => ({ ...R, __beforeLoadContext: m })), u();
    });
  };
  let b;
  try {
    if (b = n.options.beforeLoad(v), ke(b)) return h(), b.catch((m) => {
      De(t, s, m, "BEFORE_LOAD");
    }).then(S);
  } catch (m) {
    h(), De(t, s, m, "BEFORE_LOAD");
  }
  S(b);
}, Ar = (t, e) => {
  const { id: s, routeId: n } = t.matches[e], i = t.router.looseRoutesById[n], r = () => a(), o = () => Tr(t, s, e, i), a = () => {
    if (ri(t, s)) return;
    const c = Mr(t, s, i);
    return ke(c) ? c.then(o) : o();
  };
  return r();
}, Lr = (t, e, s) => {
  var _a5, _b2, _c3, _d2, _e28, _f2;
  const n = t.router.getMatch(e);
  if (!n || !s.options.head && !s.options.scripts && !s.options.headers) return;
  const i = { ssr: t.router.options.ssr, matches: t.matches, match: n, params: n.params, loaderData: n.loaderData };
  return Promise.all([(_b2 = (_a5 = s.options).head) == null ? void 0 : _b2.call(_a5, i), (_d2 = (_c3 = s.options).scripts) == null ? void 0 : _d2.call(_c3, i), (_f2 = (_e28 = s.options).headers) == null ? void 0 : _f2.call(_e28, i)]).then(([r, o, a]) => {
    const c = r == null ? void 0 : r.meta, l = r == null ? void 0 : r.links, h = r == null ? void 0 : r.scripts, u = r == null ? void 0 : r.styles;
    return { meta: c, links: l, headScripts: h, headers: a, scripts: o, styles: u };
  });
}, ai = (t, e, s, n) => {
  const i = t.matchPromises[s - 1], { params: r, loaderDeps: o, abortController: a, cause: c } = t.router.getMatch(e), l = Ie(t, s), h = Lt(t, e);
  return { params: r, deps: o, preload: !!h, parentMatchPromise: i, abortController: a, context: l, location: t.location, navigate: (u) => t.router.navigate({ ...u, _fromLocation: t.location }), cause: h ? "preload" : c, route: n, ...t.router.options.additionalContext };
}, on = async (t, e, s, n) => {
  var _a5, _b2, _c3, _d2, _e28, _f2, _g2;
  try {
    const i = t.router.getMatch(e);
    try {
      (!(Xi ?? t.router.isServer) || i.ssr === true) && ci(n);
      const r = (_b2 = (_a5 = n.options).loader) == null ? void 0 : _b2.call(_a5, ai(t, e, s, n)), o = n.options.loader && ke(r);
      if ((o || n._lazyPromise || n._componentsPromise || n.options.head || n.options.scripts || n.options.headers || i._nonReactive.minPendingPromise) && t.updateMatch(e, (l) => ({ ...l, isFetching: "loader" })), n.options.loader) {
        const l = o ? await r : r;
        le(t, t.router.getMatch(e), l), l !== void 0 && t.updateMatch(e, (h) => ({ ...h, loaderData: l }));
      }
      n._lazyPromise && await n._lazyPromise;
      const c = i._nonReactive.minPendingPromise;
      c && await c, n._componentsPromise && await n._componentsPromise, t.updateMatch(e, (l) => ({ ...l, error: void 0, context: Ie(t, s), status: "success", isFetching: false, updatedAt: Date.now() }));
    } catch (r) {
      let o = r;
      if ((o == null ? void 0 : o.name) === "AbortError") {
        if (i.abortController.signal.aborted) {
          (_c3 = i._nonReactive.loaderPromise) == null ? void 0 : _c3.resolve(), i._nonReactive.loaderPromise = void 0;
          return;
        }
        t.updateMatch(e, (c) => ({ ...c, status: c.status === "pending" ? "success" : c.status, isFetching: false, context: Ie(t, s) }));
        return;
      }
      const a = i._nonReactive.minPendingPromise;
      a && await a, re(r) && await ((_e28 = (_d2 = n.options.notFoundComponent) == null ? void 0 : _d2.preload) == null ? void 0 : _e28.call(_d2)), le(t, t.router.getMatch(e), r);
      try {
        (_g2 = (_f2 = n.options).onError) == null ? void 0 : _g2.call(_f2, r);
      } catch (c) {
        o = c, le(t, t.router.getMatch(e), c);
      }
      t.updateMatch(e, (c) => ({ ...c, error: o, context: Ie(t, s), status: "error", isFetching: false }));
    }
  } catch (i) {
    const r = t.router.getMatch(e);
    r && (r._nonReactive.loaderPromise = void 0), le(t, r, i);
  }
}, Fr = async (t, e) => {
  var _a5, _b2;
  async function s(h, u, d, p) {
    const f = Date.now() - u.updatedAt, y = h ? p.options.preloadStaleTime ?? t.router.options.defaultPreloadStaleTime ?? 3e4 : p.options.staleTime ?? t.router.options.defaultStaleTime ?? 0, g = p.options.shouldReload, v = typeof g == "function" ? g(ai(t, n, e, p)) : g, { status: S, invalid: b } = d;
    r = S === "success" && (b || (v ?? f > y)), h && p.options.preload === false || (r && !t.sync ? (o = true, (async () => {
      var _a6, _b3;
      try {
        await on(t, n, e, p);
        const m = t.router.getMatch(n);
        (_a6 = m._nonReactive.loaderPromise) == null ? void 0 : _a6.resolve(), (_b3 = m._nonReactive.loadPromise) == null ? void 0 : _b3.resolve(), m._nonReactive.loaderPromise = void 0;
      } catch (m) {
        X(m) && await t.router.navigate(m.options);
      }
    })()) : (S !== "success" || r && t.sync) && await on(t, n, e, p));
  }
  const { id: n, routeId: i } = t.matches[e];
  let r = false, o = false;
  const a = t.router.looseRoutesById[i];
  if (!ri(t, n)) {
    const h = t.router.getMatch(n), u = Lt(t, n);
    if (h._nonReactive.loaderPromise) {
      if (h.status === "success" && !t.sync && !h.preload) return h;
      await h._nonReactive.loaderPromise;
      const d = t.router.getMatch(n), p = d._nonReactive.error || d.error;
      p && le(t, d, p), d.status === "pending" && await s(u, h, d, a);
    } else {
      const d = u && !t.router.state.matches.some((f) => f.id === n), p = t.router.getMatch(n);
      p._nonReactive.loaderPromise = Ge(), d !== p.preload && t.updateMatch(n, (f) => ({ ...f, preload: d })), await s(u, h, p, a);
    }
  }
  const c = t.router.getMatch(n);
  o || ((_a5 = c._nonReactive.loaderPromise) == null ? void 0 : _a5.resolve(), (_b2 = c._nonReactive.loadPromise) == null ? void 0 : _b2.resolve()), clearTimeout(c._nonReactive.pendingTimeout), c._nonReactive.pendingTimeout = void 0, o || (c._nonReactive.loaderPromise = void 0), c._nonReactive.dehydrated = void 0;
  const l = o ? c.isFetching : false;
  return l !== c.isFetching || c.invalid !== false ? (t.updateMatch(n, (h) => ({ ...h, isFetching: l, invalid: false })), t.router.getMatch(n)) : c;
};
async function an(t) {
  const e = Object.assign(t, { matchPromises: [] });
  e.router.state.matches.some((s) => s._forcePending) && yt(e);
  try {
    for (let a = 0; a < e.matches.length; a++) {
      const c = Ar(e, a);
      ke(c) && await c;
    }
    const s = e.firstBadMatchIndex ?? e.matches.length;
    for (let a = 0; a < s; a++) e.matchPromises.push(Fr(e, a));
    const i = (await Promise.allSettled(e.matchPromises)).filter((a) => a.status === "rejected").map((a) => a.reason);
    let r;
    for (const a of i) {
      if (X(a)) throw a;
      !r && re(a) && (r = a);
    }
    for (const a of e.matches) {
      const { id: c, routeId: l } = a, h = e.router.looseRoutesById[l];
      try {
        const u = Lr(e, c, h);
        if (u) {
          const d = await u;
          e.updateMatch(c, (p) => ({ ...p, ...d }));
        }
      } catch (u) {
        console.error(`Error executing head for route ${l}:`, u);
      }
    }
    if (r) throw r;
    const o = yt(e);
    ke(o) && await o;
  } catch (s) {
    if (re(s) && !e.preload) {
      const n = yt(e);
      throw ke(n) && await n, s;
    }
    if (X(s)) throw s;
  }
  return e.matches;
}
async function ci(t) {
  if (!t._lazyLoaded && t._lazyPromise === void 0 && (t.lazyFn ? t._lazyPromise = t.lazyFn().then((e) => {
    const { id: s, ...n } = e.options;
    Object.assign(t.options, n), t._lazyLoaded = true, t._lazyPromise = void 0;
  }) : t._lazyLoaded = true), !t._componentsLoaded && t._componentsPromise === void 0) {
    const e = () => {
      var _a5;
      const s = [];
      for (const n of ui) {
        const i = (_a5 = t.options[n]) == null ? void 0 : _a5.preload;
        i && s.push(i());
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
function li(t) {
  var _a5;
  for (const e of ui) if ((_a5 = t.options[e]) == null ? void 0 : _a5.preload) return true;
  return false;
}
const ui = ["component", "errorComponent", "pendingComponent", "notFoundComponent"];
function Br(t) {
  return { input: ({ url: e }) => {
    for (const s of t) e = ts(s, e);
    return e;
  }, output: ({ url: e }) => {
    for (let s = t.length - 1; s >= 0; s--) e = hi(t[s], e);
    return e;
  } };
}
function Kr(t) {
  const e = ni(t.basepath), s = `/${e}`, n = `${s}/`, i = t.caseSensitive ? s : s.toLowerCase(), r = t.caseSensitive ? n : n.toLowerCase();
  return { input: ({ url: o }) => {
    const a = t.caseSensitive ? o.pathname : o.pathname.toLowerCase();
    return a === i ? o.pathname = "/" : a.startsWith(r) && (o.pathname = o.pathname.slice(s.length)), o;
  }, output: ({ url: o }) => (o.pathname = pt(["/", e, o.pathname]), o) };
}
function ts(t, e) {
  var _a5;
  const s = (_a5 = t == null ? void 0 : t.input) == null ? void 0 : _a5.call(t, { url: e });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return e;
}
function hi(t, e) {
  var _a5;
  const s = (_a5 = t == null ? void 0 : t.output) == null ? void 0 : _a5.call(t, { url: e });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return e;
}
function Wt(t) {
  const e = t.resolvedLocation, s = t.location, n = (e == null ? void 0 : e.pathname) !== s.pathname, i = (e == null ? void 0 : e.href) !== s.href, r = (e == null ? void 0 : e.hash) !== s.hash;
  return { fromLocation: e, toLocation: s, pathChanged: n, hrefChanged: i, hashChanged: r };
}
class Qu {
  constructor(e) {
    this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`, this.resetNextScroll = true, this.shouldViewTransition = void 0, this.isViewTransitionTypesSupported = void 0, this.subscribers = /* @__PURE__ */ new Set(), this.isScrollRestoring = false, this.isScrollRestorationSetup = false, this.startTransition = (s) => s(), this.update = (s) => {
      var _a5;
      s.notFoundRoute && console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");
      const n = this.options, i = this.basepath ?? (n == null ? void 0 : n.basepath) ?? "/", r = this.basepath === void 0, o = n == null ? void 0 : n.rewrite;
      if (this.options = { ...n, ...s }, this.isServer = this.options.isServer ?? typeof document > "u", this.options.pathParamsAllowedCharacters && (this.pathParamsDecoder = gr(this.options.pathParamsAllowedCharacters)), (!this.history || this.options.history && this.options.history !== this.history) && (this.options.history ? this.history = this.options.history : this.history = Yn()), this.origin = this.options.origin, this.origin || ((window == null ? void 0 : window.origin) && window.origin !== "null" ? this.origin = window.origin : this.origin = "http://localhost"), this.history && this.updateLatestLocation(), this.options.routeTree !== this.routeTree) {
        this.routeTree = this.options.routeTree;
        let d;
        this.resolvePathCache = Pt(1e3), d = this.buildRouteTree(), this.setRoutes(d);
      }
      !this.__store && this.latestLocation && (this.__store = new Qi(jr(this.latestLocation), { onUpdate: () => {
        this.__store.state = { ...this.state, cachedMatches: this.state.cachedMatches.filter((d) => !["redirected"].includes(d.status)) };
      } }), Pr(this));
      let a = false;
      const c = this.options.basepath ?? "/", l = this.options.rewrite;
      if (r || i !== c || o !== l) {
        this.basepath = c;
        const d = [], p = ni(c);
        p && p !== "/" && d.push(Kr({ basepath: c })), l && d.push(l), this.rewrite = d.length === 0 ? void 0 : d.length === 1 ? d[0] : Br(d), this.history && this.updateLatestLocation(), a = true;
      }
      a && this.__store && (this.__store.state = { ...this.state, location: this.latestLocation }), typeof window < "u" && "CSS" in window && typeof ((_a5 = window.CSS) == null ? void 0 : _a5.supports) == "function" && (this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a)"));
    }, this.updateLatestLocation = () => {
      this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
    }, this.buildRouteTree = () => {
      const s = hr(this.routeTree, this.options.caseSensitive, (n, i) => {
        n.init({ originalIndex: i });
      });
      return this.options.routeMasks && or(this.options.routeMasks, s.processedTree), s;
    }, this.subscribe = (s, n) => {
      const i = { eventType: s, fn: n };
      return this.subscribers.add(i), () => {
        this.subscribers.delete(i);
      };
    }, this.emit = (s) => {
      this.subscribers.forEach((n) => {
        n.eventType === s.type && n.fn(s);
      });
    }, this.parseLocation = (s, n) => {
      const i = ({ pathname: c, search: l, hash: h, href: u, state: d }) => {
        if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(c)) {
          const S = this.options.parseSearch(l), b = this.options.stringifySearch(S);
          return { href: c + b + h, publicHref: u, pathname: Be(c).path, external: false, searchStr: b, search: q(n == null ? void 0 : n.search, S), hash: Be(h.slice(1)).path, state: q(n == null ? void 0 : n.state, d) };
        }
        const p = new URL(u, this.origin), f = ts(this.rewrite, p), y = this.options.parseSearch(f.search), g = this.options.stringifySearch(y);
        return f.search = g, { href: f.href.replace(f.origin, ""), publicHref: u, pathname: Be(f.pathname).path, external: !!this.rewrite && f.origin !== this.origin, searchStr: g, search: q(n == null ? void 0 : n.search, y), hash: Be(f.hash.slice(1)).path, state: q(n == null ? void 0 : n.state, d) };
      }, r = i(s), { __tempLocation: o, __tempKey: a } = r.state;
      if (o && (!a || a === this.tempLocationKey)) {
        const c = i(o);
        return c.state.key = r.state.key, c.state.__TSR_key = r.state.__TSR_key, delete c.state.__tempLocation, { ...c, maskedLocation: r };
      }
      return r;
    }, this.resolvePathWithBase = (s, n) => yr({ base: s, to: _s(n), trailingSlash: this.options.trailingSlash, cache: this.resolvePathCache }), this.matchRoutes = (s, n, i) => typeof s == "string" ? this.matchRoutesInternal({ pathname: s, search: n }, i) : this.matchRoutesInternal(s, n), this.getMatchedRoutes = (s) => zr({ pathname: s, routesById: this.routesById, processedTree: this.processedTree }), this.cancelMatch = (s) => {
      const n = this.getMatch(s);
      n && (n.abortController.abort(), clearTimeout(n._nonReactive.pendingTimeout), n._nonReactive.pendingTimeout = void 0);
    }, this.cancelMatches = () => {
      const s = this.state.matches.filter((r) => r.status === "pending"), n = this.state.matches.filter((r) => r.isFetching === "loader");
      (/* @__PURE__ */ new Set([...this.state.pendingMatches ?? [], ...s, ...n])).forEach((r) => {
        this.cancelMatch(r.id);
      });
    }, this.buildLocation = (s) => {
      const n = (r = {}) => {
        var _a5, _b2;
        const o = r._fromLocation || this.pendingBuiltLocation || this.latestLocation, a = this.matchRoutesLightweight(o);
        r.from;
        const c = r.unsafeRelative === "path" ? o.pathname : r.from ?? a.fullPath, l = this.resolvePathWithBase(c, "."), h = a.search, u = { ...a.params }, d = r.to ? this.resolvePathWithBase(l, `${r.to}`) : this.resolvePathWithBase(l, "."), p = r.params === false || r.params === null ? {} : (r.params ?? true) === true ? u : Object.assign(u, Re(r.params, u)), f = Vt({ path: d, params: p, decoder: this.pathParamsDecoder, server: this.isServer }).interpolatedPath, y = this.getMatchedRoutes(f);
        let g = y.matchedRoutes;
        (y.foundRoute ? y.foundRoute.path !== "/" && y.routeParams["**"] : ve(f)) && this.options.notFoundRoute && (g = [...g, this.options.notFoundRoute]);
        let S = false;
        if (Object.keys(p).length > 0) for (const I of g) {
          const M = ((_a5 = I.options.params) == null ? void 0 : _a5.stringify) ?? I.options.stringifyParams;
          M && (S = true, Object.assign(p, M(p)));
        }
        const b = s.leaveParams ? d : Be(S ? Vt({ path: d, params: p, decoder: this.pathParamsDecoder, server: this.isServer }).interpolatedPath : f).path;
        let m = h;
        if (s._includeValidateSearch && ((_b2 = this.options.search) == null ? void 0 : _b2.strict)) {
          const I = {};
          g.forEach((M) => {
            if (M.options.validateSearch) try {
              Object.assign(I, gt(M.options.validateSearch, { ...I, ...m }));
            } catch {
            }
          }), m = I;
        }
        m = $r({ search: m, dest: r, destRoutes: g, _includeValidateSearch: s._includeValidateSearch }), m = q(h, m);
        const R = this.options.stringifySearch(m), k = r.hash === true ? o.hash : r.hash ? Re(r.hash, o.hash) : void 0, _ = k ? `#${k}` : "";
        let x = r.state === true ? o.state : r.state ? Re(r.state, o.state) : {};
        x = q(o.state, x);
        const w = `${b}${R}${_}`;
        let P, C, E = false;
        if (this.rewrite) {
          const I = new URL(w, this.origin), M = hi(this.rewrite, I);
          P = I.href.replace(I.origin, ""), M.origin !== this.origin ? (C = M.href, E = true) : C = M.pathname + M.search + M.hash;
        } else P = ir(w), C = P;
        return { publicHref: C, href: P, pathname: b, search: m, searchStr: R, state: x, hash: k ?? "", external: E, unmaskOnReload: r.unmaskOnReload };
      }, i = (r = {}, o) => {
        const a = n(r);
        let c = o ? n(o) : void 0;
        if (!c) {
          const l = {};
          if (this.options.routeMasks) {
            const h = ar(a.pathname, this.processedTree);
            if (h) {
              Object.assign(l, h.rawParams);
              const { from: u, params: d, ...p } = h.route, f = d === false || d === null ? {} : (d ?? true) === true ? l : Object.assign(l, Re(d, l));
              o = { from: s.from, ...p, params: f }, c = n(o);
            }
          }
        }
        return c && (a.maskedLocation = c), a;
      };
      return s.mask ? i(s, { from: s.from, ...s.mask }) : i(s);
    }, this.commitLocation = async ({ viewTransition: s, ignoreBlocker: n, ...i }) => {
      const r = () => {
        const c = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
        c.forEach((h) => {
          i.state[h] = this.latestLocation.state[h];
        });
        const l = _e(i.state, this.latestLocation.state);
        return c.forEach((h) => {
          delete i.state[h];
        }), l;
      }, o = ve(this.latestLocation.href) === ve(i.href), a = this.commitLocationPromise;
      if (this.commitLocationPromise = Ge(() => {
        a == null ? void 0 : a.resolve();
      }), o && r()) this.load();
      else {
        let { maskedLocation: c, hashScrollIntoView: l, ...h } = i;
        c && (h = { ...c, state: { ...c.state, __tempKey: void 0, __tempLocation: { ...h, search: h.searchStr, state: { ...h.state, __tempKey: void 0, __tempLocation: void 0, __TSR_key: void 0, key: void 0 } } } }, (h.unmaskOnReload ?? this.options.unmaskOnReload ?? false) && (h.state.__tempKey = this.tempLocationKey)), h.state.__hashScrollIntoViewOptions = l ?? this.options.defaultHashScrollIntoView ?? true, this.shouldViewTransition = s, this.history[i.replace ? "replace" : "push"](h.publicHref, h.state, { ignoreBlocker: n });
      }
      return this.resetNextScroll = i.resetScroll ?? true, this.history.subscribers.size || this.load(), this.commitLocationPromise;
    }, this.buildAndCommitLocation = ({ replace: s, resetScroll: n, hashScrollIntoView: i, viewTransition: r, ignoreBlocker: o, href: a, ...c } = {}) => {
      if (a) {
        const u = this.history.location.state.__TSR_index, d = We(a, { __TSR_index: s ? u : u + 1 }), p = new URL(d.pathname, this.origin), f = ts(this.rewrite, p);
        c.to = f.pathname, c.search = this.options.parseSearch(d.search), c.hash = d.hash.slice(1);
      }
      const l = this.buildLocation({ ...c, _includeValidateSearch: true });
      this.pendingBuiltLocation = l;
      const h = this.commitLocation({ ...l, viewTransition: r, replace: s, resetScroll: n, hashScrollIntoView: i, ignoreBlocker: o });
      return Promise.resolve().then(() => {
        this.pendingBuiltLocation === l && (this.pendingBuiltLocation = void 0);
      }), h;
    }, this.navigate = async ({ to: s, reloadDocument: n, href: i, publicHref: r, ...o }) => {
      var _a5, _b2;
      let a = false;
      if (i) try {
        new URL(`${i}`), a = true;
      } catch {
      }
      if (a && !n && (n = true), n) {
        if (s !== void 0 || !i) {
          const l = this.buildLocation({ to: s, ...o });
          i = i ?? l.publicHref, r = r ?? l.publicHref;
        }
        const c = !a && r ? r : i;
        if (Zn(c)) return Promise.resolve();
        if (!o.ignoreBlocker) {
          const h = ((_b2 = (_a5 = this.history).getBlockers) == null ? void 0 : _b2.call(_a5)) ?? [];
          for (const u of h) if ((u == null ? void 0 : u.blockerFn) && await u.blockerFn({ currentLocation: this.latestLocation, nextLocation: this.latestLocation, action: "PUSH" })) return Promise.resolve();
        }
        return o.replace ? window.location.replace(c) : window.location.href = c, Promise.resolve();
      }
      return this.buildAndCommitLocation({ ...o, href: i, to: s, _isNavigate: true });
    }, this.beforeLoad = () => {
      this.cancelMatches(), this.updateLatestLocation();
      const s = this.matchRoutes(this.latestLocation);
      this.__store.setState((n) => ({ ...n, status: "pending", statusCode: 200, isLoading: true, location: this.latestLocation, pendingMatches: s, cachedMatches: n.cachedMatches.filter((i) => !s.some((r) => r.id === i.id)) }));
    }, this.load = async (s) => {
      let n, i, r;
      for (r = new Promise((a) => {
        this.startTransition(async () => {
          var _a5;
          try {
            this.beforeLoad();
            const c = this.latestLocation, l = this.state.resolvedLocation;
            this.state.redirect || this.emit({ type: "onBeforeNavigate", ...Wt({ resolvedLocation: l, location: c }) }), this.emit({ type: "onBeforeLoad", ...Wt({ resolvedLocation: l, location: c }) }), await an({ router: this, sync: s == null ? void 0 : s.sync, matches: this.state.pendingMatches, location: c, updateMatch: this.updateMatch, onReady: async () => {
              this.startTransition(() => {
                this.startViewTransition(async () => {
                  let h = [], u = [], d = [];
                  Ne(() => {
                    this.__store.setState((p) => {
                      const f = p.matches, y = p.pendingMatches || p.matches;
                      return h = f.filter((g) => !y.some((v) => v.id === g.id)), u = y.filter((g) => !f.some((v) => v.id === g.id)), d = y.filter((g) => f.some((v) => v.id === g.id)), { ...p, isLoading: false, loadedAt: Date.now(), matches: y, pendingMatches: void 0, cachedMatches: [...p.cachedMatches, ...h.filter((g) => g.status !== "error" && g.status !== "notFound")] };
                    }), this.clearExpiredCache();
                  }), [[h, "onLeave"], [u, "onEnter"], [d, "onStay"]].forEach(([p, f]) => {
                    p.forEach((y) => {
                      var _a6, _b2;
                      (_b2 = (_a6 = this.looseRoutesById[y.routeId].options)[f]) == null ? void 0 : _b2.call(_a6, y);
                    });
                  });
                });
              });
            } });
          } catch (c) {
            X(c) ? (n = c, this.navigate({ ...n.options, replace: true, ignoreBlocker: true })) : re(c) && (i = c), this.__store.setState((l) => ({ ...l, statusCode: n ? n.status : i ? 404 : l.matches.some((h) => h.status === "error") ? 500 : 200, redirect: n }));
          }
          this.latestLoadPromise === r && ((_a5 = this.commitLocationPromise) == null ? void 0 : _a5.resolve(), this.latestLoadPromise = void 0, this.commitLocationPromise = void 0), a();
        });
      }), this.latestLoadPromise = r, await r; this.latestLoadPromise && r !== this.latestLoadPromise; ) await this.latestLoadPromise;
      let o;
      this.hasNotFoundMatch() ? o = 404 : this.__store.state.matches.some((a) => a.status === "error") && (o = 500), o !== void 0 && this.__store.setState((a) => ({ ...a, statusCode: o }));
    }, this.startViewTransition = (s) => {
      const n = this.shouldViewTransition ?? this.options.defaultViewTransition;
      if (this.shouldViewTransition = void 0, n && typeof document < "u" && "startViewTransition" in document && typeof document.startViewTransition == "function") {
        let i;
        if (typeof n == "object" && this.isViewTransitionTypesSupported) {
          const r = this.latestLocation, o = this.state.resolvedLocation, a = typeof n.types == "function" ? n.types(Wt({ resolvedLocation: o, location: r })) : n.types;
          if (a === false) {
            s();
            return;
          }
          i = { update: s, types: a };
        } else i = s;
        document.startViewTransition(i);
      } else s();
    }, this.updateMatch = (s, n) => {
      this.startTransition(() => {
        var _a5;
        const i = ((_a5 = this.state.pendingMatches) == null ? void 0 : _a5.some((r) => r.id === s)) ? "pendingMatches" : this.state.matches.some((r) => r.id === s) ? "matches" : this.state.cachedMatches.some((r) => r.id === s) ? "cachedMatches" : "";
        i && this.__store.setState((r) => {
          var _a6;
          return { ...r, [i]: (_a6 = r[i]) == null ? void 0 : _a6.map((o) => o.id === s ? n(o) : o) };
        });
      });
    }, this.getMatch = (s) => {
      var _a5;
      const n = (i) => i.id === s;
      return this.state.cachedMatches.find(n) ?? ((_a5 = this.state.pendingMatches) == null ? void 0 : _a5.find(n)) ?? this.state.matches.find(n);
    }, this.invalidate = (s) => {
      const n = (i) => {
        var _a5;
        return ((_a5 = s == null ? void 0 : s.filter) == null ? void 0 : _a5.call(s, i)) ?? true ? { ...i, invalid: true, ...(s == null ? void 0 : s.forcePending) || i.status === "error" || i.status === "notFound" ? { status: "pending", error: void 0 } : void 0 } : i;
      };
      return this.__store.setState((i) => {
        var _a5;
        return { ...i, matches: i.matches.map(n), cachedMatches: i.cachedMatches.map(n), pendingMatches: (_a5 = i.pendingMatches) == null ? void 0 : _a5.map(n) };
      }), this.shouldViewTransition = false, this.load({ sync: s == null ? void 0 : s.sync });
    }, this.getParsedLocationHref = (s) => s.publicHref || "/", this.resolveRedirect = (s) => {
      const n = s.headers.get("Location");
      if (!s.options.href || s.options._builtLocation) {
        const i = s.options._builtLocation ?? this.buildLocation(s.options), r = this.getParsedLocationHref(i);
        s.options.href = r, s.headers.set("Location", r);
      } else if (n) try {
        const i = new URL(n);
        if (this.origin && i.origin === this.origin) {
          const r = i.pathname + i.search + i.hash;
          s.options.href = r, s.headers.set("Location", r);
        }
      } catch {
      }
      return s.headers.get("Location") || s.headers.set("Location", s.options.href), s;
    }, this.clearCache = (s) => {
      const n = s == null ? void 0 : s.filter;
      n !== void 0 ? this.__store.setState((i) => ({ ...i, cachedMatches: i.cachedMatches.filter((r) => !n(r)) })) : this.__store.setState((i) => ({ ...i, cachedMatches: [] }));
    }, this.clearExpiredCache = () => {
      const s = (n) => {
        const i = this.looseRoutesById[n.routeId];
        if (!i.options.loader) return true;
        const r = (n.preload ? i.options.preloadGcTime ?? this.options.defaultPreloadGcTime : i.options.gcTime ?? this.options.defaultGcTime) ?? 300 * 1e3;
        return n.status === "error" ? true : Date.now() - n.updatedAt >= r;
      };
      this.clearCache({ filter: s });
    }, this.loadRouteChunk = ci, this.preloadRoute = async (s) => {
      const n = this.buildLocation(s);
      let i = this.matchRoutes(n, { throwOnError: true, preload: true, dest: s });
      const r = new Set([...this.state.matches, ...this.state.pendingMatches ?? []].map((a) => a.id)), o = /* @__PURE__ */ new Set([...r, ...this.state.cachedMatches.map((a) => a.id)]);
      Ne(() => {
        i.forEach((a) => {
          o.has(a.id) || this.__store.setState((c) => ({ ...c, cachedMatches: [...c.cachedMatches, a] }));
        });
      });
      try {
        return i = await an({ router: this, matches: i, location: n, preload: true, updateMatch: (a, c) => {
          r.has(a) ? i = i.map((l) => l.id === a ? c(l) : l) : this.updateMatch(a, c);
        } }), i;
      } catch (a) {
        if (X(a)) return a.options.reloadDocument ? void 0 : await this.preloadRoute({ ...a.options, _fromLocation: n });
        re(a) || console.error(a);
        return;
      }
    }, this.matchRoute = (s, n) => {
      const i = { ...s, to: s.to ? this.resolvePathWithBase(s.from || "", s.to) : void 0, params: s.params || {}, leaveParams: true }, r = this.buildLocation(i);
      if ((n == null ? void 0 : n.pending) && this.state.status !== "pending") return false;
      const a = ((n == null ? void 0 : n.pending) === void 0 ? !this.state.isLoading : n.pending) ? this.latestLocation : this.state.resolvedLocation || this.state.location, c = cr(r.pathname, (n == null ? void 0 : n.caseSensitive) ?? false, (n == null ? void 0 : n.fuzzy) ?? false, a.pathname, this.processedTree);
      return !c || s.params && !_e(c.rawParams, s.params, { partial: true }) ? false : (n == null ? void 0 : n.includeSearch) ?? true ? _e(a.search, r.search, { partial: true }) ? c.rawParams : false : c.rawParams;
    }, this.hasNotFoundMatch = () => this.__store.state.matches.some((s) => s.status === "notFound" || s.globalNotFound), this.update({ defaultPreloadDelay: 50, defaultPendingMs: 1e3, defaultPendingMinMs: 500, context: void 0, ...e, caseSensitive: e.caseSensitive ?? false, notFoundMode: e.notFoundMode ?? "fuzzy", stringifySearch: e.stringifySearch ?? kr, parseSearch: e.parseSearch ?? _r }), typeof document < "u" && (self.__TSR_ROUTER__ = this);
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
    const i = this.options.notFoundRoute;
    i && (i.init({ originalIndex: 99999999999 }), this.routesById[i.id] = i);
  }
  get looseRoutesById() {
    return this.routesById;
  }
  getParentContext(e) {
    return (e == null ? void 0 : e.id) ? e.context ?? this.options.context ?? void 0 : this.options.context ?? void 0;
  }
  matchRoutesInternal(e, s) {
    var _a5, _b2;
    const n = this.getMatchedRoutes(e.pathname), { foundRoute: i, routeParams: r, parsedParams: o } = n;
    let { matchedRoutes: a } = n, c = false;
    (i ? i.path !== "/" && r["**"] : ve(e.pathname)) && (this.options.notFoundRoute ? a = [...a, this.options.notFoundRoute] : c = true);
    const l = c ? Ur(this.options.notFoundMode, a) : void 0, h = new Array(a.length);
    for (let u = 0; u < a.length; u++) {
      const d = a[u], p = h[u - 1];
      let f, y, g;
      {
        const I = (p == null ? void 0 : p.search) ?? e.search, M = (p == null ? void 0 : p._strictSearch) ?? void 0;
        try {
          const F = gt(d.options.validateSearch, { ...I }) ?? void 0;
          f = { ...I, ...F }, y = { ...M, ...F }, g = void 0;
        } catch (F) {
          let J = F;
          if (F instanceof Ct || (J = new Ct(F.message, { cause: F })), s == null ? void 0 : s.throwOnError) throw J;
          f = I, y = {}, g = J;
        }
      }
      const v = ((_b2 = (_a5 = d.options).loaderDeps) == null ? void 0 : _b2.call(_a5, { search: f })) ?? "", S = v ? JSON.stringify(v) : "", { interpolatedPath: b, usedParams: m } = Vt({ path: d.fullPath, params: r, decoder: this.pathParamsDecoder, server: this.isServer }), R = d.id + b + S, k = this.getMatch(R), _ = this.state.matches.find((I) => I.routeId === d.id), x = (k == null ? void 0 : k._strictParams) ?? m;
      let w;
      if (!k) try {
        cn(d, m, o, x);
      } catch (I) {
        if (re(I) || X(I) ? w = I : w = new Dr(I.message, { cause: I }), s == null ? void 0 : s.throwOnError) throw w;
      }
      Object.assign(r, x);
      const P = _ ? "stay" : "enter";
      let C;
      if (k) C = { ...k, cause: P, params: _ ? q(_.params, r) : r, _strictParams: x, search: q(_ ? _.search : k.search, f), _strictSearch: y };
      else {
        const I = d.options.loader || d.options.beforeLoad || d.lazyFn || li(d) ? "pending" : "success";
        C = { id: R, ssr: d.options.ssr, index: u, routeId: d.id, params: _ ? q(_.params, r) : r, _strictParams: x, pathname: b, updatedAt: Date.now(), search: _ ? q(_.search, f) : f, _strictSearch: y, searchError: void 0, status: I, isFetching: false, error: void 0, paramsError: w, __routeContext: void 0, _nonReactive: { loadPromise: Ge() }, __beforeLoadContext: void 0, context: {}, abortController: new AbortController(), fetchCount: 0, cause: P, loaderDeps: _ ? q(_.loaderDeps, v) : v, invalid: false, preload: false, links: void 0, scripts: void 0, headScripts: void 0, meta: void 0, staticData: d.options.staticData || {}, fullPath: d.fullPath };
      }
      (s == null ? void 0 : s.preload) || (C.globalNotFound = l === d.id), C.searchError = g;
      const E = this.getParentContext(p);
      C.context = { ...E, ...C.__routeContext, ...C.__beforeLoadContext }, h[u] = C;
    }
    for (let u = 0; u < h.length; u++) {
      const d = h[u], p = this.looseRoutesById[d.routeId];
      if (!this.getMatch(d.id)) {
        const y = h[u - 1], g = this.getParentContext(y);
        if (p.options.context) {
          const v = { deps: d.loaderDeps, params: d.params, context: g ?? {}, location: e, navigate: (S) => this.navigate({ ...S, _fromLocation: e }), buildLocation: this.buildLocation, cause: d.cause, abortController: d.abortController, preload: !!d.preload, matches: h, routeId: p.id };
          d.__routeContext = p.options.context(v) ?? void 0;
        }
        d.context = { ...g, ...d.__routeContext, ...d.__beforeLoadContext };
      }
    }
    return h;
  }
  matchRoutesLightweight(e) {
    const { matchedRoutes: s, routeParams: n, parsedParams: i } = this.getMatchedRoutes(e.pathname), r = He(s), o = { ...e.search };
    for (const h of s) try {
      Object.assign(o, gt(h.options.validateSearch, o));
    } catch {
    }
    const a = He(this.state.matches), c = a && a.routeId === r.id && e.pathname === this.state.location.pathname;
    let l;
    if (c) l = a.params;
    else {
      const h = { ...n };
      for (const u of s) try {
        cn(u, n, i ?? {}, h);
      } catch {
      }
      l = h;
    }
    return { matchedRoutes: s, fullPath: r.fullPath, search: o, params: l };
  }
}
class Ct extends Error {
}
class Dr extends Error {
}
function jr(t) {
  return { loadedAt: 0, isLoading: false, isTransitioning: false, status: "idle", resolvedLocation: void 0, location: t, matches: [], pendingMatches: [], cachedMatches: [], statusCode: 200 };
}
function gt(t, e) {
  if (t == null) return {};
  if ("~standard" in t) {
    const s = t["~standard"].validate(e);
    if (s instanceof Promise) throw new Ct("Async validation not supported");
    if (s.issues) throw new Ct(JSON.stringify(s.issues, void 0, 2), { cause: s });
    return s.value;
  }
  return "parse" in t ? t.parse(e) : typeof t == "function" ? t(e) : {};
}
function zr({ pathname: t, routesById: e, processedTree: s }) {
  const n = {}, i = ve(t);
  let r, o;
  const a = lr(i, s, true);
  return a && (r = a.route, Object.assign(n, a.rawParams), o = Object.assign({}, a.parsedParams)), { matchedRoutes: (a == null ? void 0 : a.branch) || [e[ne]], routeParams: n, foundRoute: r, parsedParams: o };
}
function $r({ search: t, dest: e, destRoutes: s, _includeValidateSearch: n }) {
  return Nr(s)(t, e, n ?? false);
}
function Nr(t) {
  var _a5;
  const e = { dest: null, _includeValidateSearch: false, middlewares: [] };
  for (const i of t) {
    if ("search" in i.options) ((_a5 = i.options.search) == null ? void 0 : _a5.middlewares) && e.middlewares.push(...i.options.search.middlewares);
    else if (i.options.preSearchFilters || i.options.postSearchFilters) {
      const r = ({ search: o, next: a }) => {
        let c = o;
        "preSearchFilters" in i.options && i.options.preSearchFilters && (c = i.options.preSearchFilters.reduce((h, u) => u(h), o));
        const l = a(c);
        return "postSearchFilters" in i.options && i.options.postSearchFilters ? i.options.postSearchFilters.reduce((h, u) => u(h), l) : l;
      };
      e.middlewares.push(r);
    }
    if (i.options.validateSearch) {
      const r = ({ search: o, next: a }) => {
        const c = a(o);
        if (!e._includeValidateSearch) return c;
        try {
          return { ...c, ...gt(i.options.validateSearch, c) ?? void 0 };
        } catch {
          return c;
        }
      };
      e.middlewares.push(r);
    }
  }
  const s = ({ search: i }) => {
    const r = e.dest;
    return r.search ? r.search === true ? i : Re(r.search, i) : {};
  };
  e.middlewares.push(s);
  const n = (i, r, o) => {
    if (i >= o.length) return r;
    const a = o[i];
    return a({ search: r, next: (l) => n(i + 1, l, o) });
  };
  return function(r, o, a) {
    return e.dest = o, e._includeValidateSearch = a, n(0, r, e.middlewares);
  };
}
function Ur(t, e) {
  if (t !== "root") for (let s = e.length - 1; s >= 0; s--) {
    const n = e[s];
    if (n.children) return n.id;
  }
  return ne;
}
function cn(t, e, s, n) {
  var _a5;
  const i = ((_a5 = t.options.params) == null ? void 0 : _a5.parse) ?? t.options.parseParams;
  if (i) if (t.options.skipRouteOnParseError) for (const r in e) r in s && (n[r] = s[r]);
  else {
    const r = i(n);
    Object.assign(n, r);
  }
}
const Ju = "Error preloading route! \u261D\uFE0F";
class Vr {
  constructor(e) {
    if (this.init = (s) => {
      var _a5, _b2;
      this.originalIndex = s.originalIndex;
      const n = this.options, i = !(n == null ? void 0 : n.path) && !(n == null ? void 0 : n.id);
      this.parentRoute = (_b2 = (_a5 = this.options).getParentRoute) == null ? void 0 : _b2.call(_a5), i ? this._path = ne : this.parentRoute || bt(false);
      let r = i ? ne : n == null ? void 0 : n.path;
      r && r !== "/" && (r = si(r));
      const o = (n == null ? void 0 : n.id) || r;
      let a = i ? ne : pt([this.parentRoute.id === ne ? "" : this.parentRoute.id, o]);
      r === ne && (r = "/"), a !== ne && (a = pt(["/", a]));
      const c = a === ne ? "/" : pt([this.parentRoute.fullPath, r]);
      this._path = r, this._id = a, this._fullPath = c, this._to = ve(c);
    }, this.addChildren = (s) => this._addFileChildren(s), this._addFileChildren = (s) => (Array.isArray(s) && (this.children = s), typeof s == "object" && s !== null && (this.children = Object.values(s)), this), this._addFileTypes = () => this, this.updateLoader = (s) => (Object.assign(this.options, s), this), this.update = (s) => (Object.assign(this.options, s), this), this.lazy = (s) => (this.lazyFn = s, this), this.redirect = (s) => Or({ from: this.fullPath, ...s }), this.options = e || {}, this.isRoot = !(e == null ? void 0 : e.getParentRoute), (e == null ? void 0 : e.id) && (e == null ? void 0 : e.path)) throw new Error("Route cannot have both an 'id' and a 'path' option.");
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
class Yu extends Vr {
  constructor(e) {
    super(e);
  }
}
var Ft = class {
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
}, qr = { setTimeout: (t, e) => setTimeout(t, e), clearTimeout: (t) => clearTimeout(t), setInterval: (t, e) => setInterval(t, e), clearInterval: (t) => clearInterval(t) }, Wr = (_a2 = class {
  constructor() {
    __privateAdd(this, _e2, qr);
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
}, _e2 = new WeakMap(), _t2 = new WeakMap(), _a2), ss = new Wr();
function Hr(t) {
  setTimeout(t, 0);
}
var Bt = typeof window > "u" || "Deno" in globalThis;
function Y() {
}
function Gr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Qr(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Jr(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function ns(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Yr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function ln(t, e) {
  const { type: s = "all", exact: n, fetchStatus: i, predicate: r, queryKey: o, stale: a } = t;
  if (o) {
    if (n) {
      if (e.queryHash !== ks(o, e.options)) return false;
    } else if (!Ye(e.queryKey, o)) return false;
  }
  if (s !== "all") {
    const c = e.isActive();
    if (s === "active" && !c || s === "inactive" && c) return false;
  }
  return !(typeof a == "boolean" && e.isStale() !== a || i && i !== e.state.fetchStatus || r && !r(e));
}
function un(t, e) {
  const { exact: s, status: n, predicate: i, mutationKey: r } = t;
  if (r) {
    if (!e.options.mutationKey) return false;
    if (s) {
      if (Je(e.options.mutationKey) !== Je(r)) return false;
    } else if (!Ye(e.options.mutationKey, r)) return false;
  }
  return !(n && e.state.status !== n || i && !i(e));
}
function ks(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Je)(t);
}
function Je(t) {
  return JSON.stringify(t, (e, s) => is(s) ? Object.keys(s).sort().reduce((n, i) => (n[i] = s[i], n), {}) : s);
}
function Ye(t, e) {
  return t === e ? true : typeof t != typeof e ? false : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every((s) => Ye(t[s], e[s])) : false;
}
var Xr = Object.prototype.hasOwnProperty;
function fi(t, e, s = 0) {
  if (t === e) return t;
  if (s > 500) return e;
  const n = hn(t) && hn(e);
  if (!n && !(is(t) && is(e))) return e;
  const r = (n ? t : Object.keys(t)).length, o = n ? e : Object.keys(e), a = o.length, c = n ? new Array(a) : {};
  let l = 0;
  for (let h = 0; h < a; h++) {
    const u = n ? h : o[h], d = t[u], p = e[u];
    if (d === p) {
      c[u] = d, (n ? h < r : Xr.call(t, u)) && l++;
      continue;
    }
    if (d === null || p === null || typeof d != "object" || typeof p != "object") {
      c[u] = p;
      continue;
    }
    const f = fi(d, p, s + 1);
    c[u] = f, f === d && l++;
  }
  return r === a && l === r ? t : c;
}
function hn(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function is(t) {
  if (!fn(t)) return false;
  const e = t.constructor;
  if (e === void 0) return true;
  const s = e.prototype;
  return !(!fn(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function fn(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Zr(t) {
  return new Promise((e) => {
    ss.setTimeout(e, t);
  });
}
function eo(t, e, s) {
  return typeof s.structuralSharing == "function" ? s.structuralSharing(t, e) : s.structuralSharing !== false ? fi(t, e) : e;
}
function to(t, e, s = 0) {
  const n = [...t, e];
  return s && n.length > s ? n.slice(1) : n;
}
function so(t, e, s = 0) {
  const n = [e, ...t];
  return s && n.length > s ? n.slice(0, -1) : n;
}
var Is = /* @__PURE__ */ Symbol();
function di(t, e) {
  return !t.queryFn && (e == null ? void 0 : e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Is ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
}
function no(t, e, s) {
  let n = false, i;
  return Object.defineProperty(t, "signal", { enumerable: true, get: () => (i ?? (i = e()), n || (n = true, i.aborted ? s() : i.addEventListener("abort", s, { once: true })), i) }), t;
}
var io = (_b = class extends Ft {
  constructor() {
    super();
    __privateAdd(this, _e3);
    __privateAdd(this, _t3);
    __privateAdd(this, _s2);
    __privateSet(this, _s2, (t) => {
      if (!Bt && window.addEventListener) {
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
}, _e3 = new WeakMap(), _t3 = new WeakMap(), _s2 = new WeakMap(), _b), pi = new io();
function ro() {
  let t, e;
  const s = new Promise((i, r) => {
    t = i, e = r;
  });
  s.status = "pending", s.catch(() => {
  });
  function n(i) {
    Object.assign(s, i), delete s.resolve, delete s.reject;
  }
  return s.resolve = (i) => {
    n({ status: "fulfilled", value: i }), t(i);
  }, s.reject = (i) => {
    n({ status: "rejected", reason: i }), e(i);
  }, s;
}
var oo = Hr;
function ao() {
  let t = [], e = 0, s = (a) => {
    a();
  }, n = (a) => {
    a();
  }, i = oo;
  const r = (a) => {
    e ? t.push(a) : i(() => {
      s(a);
    });
  }, o = () => {
    const a = t;
    t = [], a.length && i(() => {
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
    r(() => {
      a(...c);
    });
  }, schedule: r, setNotifyFunction: (a) => {
    s = a;
  }, setBatchNotifyFunction: (a) => {
    n = a;
  }, setScheduler: (a) => {
    i = a;
  } };
}
var j = ao(), co = (_c2 = class extends Ft {
  constructor() {
    super();
    __privateAdd(this, _e4, true);
    __privateAdd(this, _t4);
    __privateAdd(this, _s3);
    __privateSet(this, _s3, (t) => {
      if (!Bt && window.addEventListener) {
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
}, _e4 = new WeakMap(), _t4 = new WeakMap(), _s3 = new WeakMap(), _c2), _t = new co();
function lo(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function yi(t) {
  return (t ?? "online") === "online" ? _t.isOnline() : true;
}
var rs = class extends Error {
  constructor(t) {
    super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function gi(t) {
  let e = false, s = 0, n;
  const i = ro(), r = () => i.status !== "pending", o = (y) => {
    var _a5;
    if (!r()) {
      const g = new rs(y);
      d(g), (_a5 = t.onCancel) == null ? void 0 : _a5.call(t, g);
    }
  }, a = () => {
    e = true;
  }, c = () => {
    e = false;
  }, l = () => pi.isFocused() && (t.networkMode === "always" || _t.isOnline()) && t.canRun(), h = () => yi(t.networkMode) && t.canRun(), u = (y) => {
    r() || (n == null ? void 0 : n(), i.resolve(y));
  }, d = (y) => {
    r() || (n == null ? void 0 : n(), i.reject(y));
  }, p = () => new Promise((y) => {
    var _a5;
    n = (g) => {
      (r() || l()) && y(g);
    }, (_a5 = t.onPause) == null ? void 0 : _a5.call(t);
  }).then(() => {
    var _a5;
    n = void 0, r() || ((_a5 = t.onContinue) == null ? void 0 : _a5.call(t));
  }), f = () => {
    if (r()) return;
    let y;
    const g = s === 0 ? t.initialPromise : void 0;
    try {
      y = g ?? t.fn();
    } catch (v) {
      y = Promise.reject(v);
    }
    Promise.resolve(y).then(u).catch((v) => {
      var _a5;
      if (r()) return;
      const S = t.retry ?? (Bt ? 0 : 3), b = t.retryDelay ?? lo, m = typeof b == "function" ? b(s, v) : b, R = S === true || typeof S == "number" && s < S || typeof S == "function" && S(s, v);
      if (e || !R) {
        d(v);
        return;
      }
      s++, (_a5 = t.onFail) == null ? void 0 : _a5.call(t, s, v), Zr(m).then(() => l() ? void 0 : p()).then(() => {
        e ? d(v) : f();
      });
    });
  };
  return { promise: i, status: () => i.status, cancel: o, continue: () => (n == null ? void 0 : n(), i), cancelRetry: a, continueRetry: c, canStart: h, start: () => (h() ? f() : p().then(f), i) };
}
var mi = (_d = class {
  constructor() {
    __privateAdd(this, _e5);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Qr(this.gcTime) && __privateSet(this, _e5, ss.setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(this.gcTime || 0, t ?? (Bt ? 1 / 0 : 300 * 1e3));
  }
  clearGcTimeout() {
    __privateGet(this, _e5) && (ss.clearTimeout(__privateGet(this, _e5)), __privateSet(this, _e5, void 0));
  }
}, _e5 = new WeakMap(), _d), uo = (_e7 = class extends mi {
  constructor(t) {
    super();
    __privateAdd(this, _uo_instances);
    __privateAdd(this, _e6);
    __privateAdd(this, _t5);
    __privateAdd(this, _s4);
    __privateAdd(this, _n2);
    __privateAdd(this, _i2);
    __privateAdd(this, _o2);
    __privateAdd(this, _a3);
    __privateSet(this, _a3, false), __privateSet(this, _o2, t.defaultOptions), this.setOptions(t.options), this.observers = [], __privateSet(this, _n2, t.client), __privateSet(this, _s4, __privateGet(this, _n2).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, __privateSet(this, _e6, pn(this.options)), this.state = t.state ?? __privateGet(this, _e6), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var _a5;
    return (_a5 = __privateGet(this, _i2)) == null ? void 0 : _a5.promise;
  }
  setOptions(t) {
    if (this.options = { ...__privateGet(this, _o2), ...t }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
      const e = pn(this.options);
      e.data !== void 0 && (this.setState(dn(e.data, e.dataUpdatedAt)), __privateSet(this, _e6, e));
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && __privateGet(this, _s4).remove(this);
  }
  setData(t, e) {
    const s = eo(this.state.data, t, this.options);
    return __privateMethod(this, _uo_instances, r_fn).call(this, { data: s, type: "success", dataUpdatedAt: e == null ? void 0 : e.updatedAt, manual: e == null ? void 0 : e.manual }), s;
  }
  setState(t, e) {
    __privateMethod(this, _uo_instances, r_fn).call(this, { type: "setState", state: t, setStateOptions: e });
  }
  cancel(t) {
    var _a5, _b2;
    const e = (_a5 = __privateGet(this, _i2)) == null ? void 0 : _a5.promise;
    return (_b2 = __privateGet(this, _i2)) == null ? void 0 : _b2.cancel(t), e ? e.then(Y).catch(Y) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: true });
  }
  reset() {
    this.destroy(), this.setState(__privateGet(this, _e6));
  }
  isActive() {
    return this.observers.some((t) => Yr(t.options.enabled, this) !== false);
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Is || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some((t) => ns(t.options.staleTime, this) === "static") : false;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some((t) => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(t = 0) {
    return this.state.data === void 0 ? true : t === "static" ? false : this.state.isInvalidated ? true : !Jr(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var _a5, _b2;
    (_a5 = this.observers.find((e) => e.shouldFetchOnWindowFocus())) == null ? void 0 : _a5.refetch({ cancelRefetch: false }), (_b2 = __privateGet(this, _i2)) == null ? void 0 : _b2.continue();
  }
  onOnline() {
    var _a5, _b2;
    (_a5 = this.observers.find((e) => e.shouldFetchOnReconnect())) == null ? void 0 : _a5.refetch({ cancelRefetch: false }), (_b2 = __privateGet(this, _i2)) == null ? void 0 : _b2.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), __privateGet(this, _s4).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((e) => e !== t), this.observers.length || (__privateGet(this, _i2) && (__privateGet(this, _a3) ? __privateGet(this, _i2).cancel({ revert: true }) : __privateGet(this, _i2).cancelRetry()), this.scheduleGc()), __privateGet(this, _s4).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || __privateMethod(this, _uo_instances, r_fn).call(this, { type: "invalidate" });
  }
  async fetch(t, e) {
    var _a5, _b2, _c3, _d2, _e28, _f2, _g2, _h2, _i5, _j, _k, _l2;
    if (this.state.fetchStatus !== "idle" && ((_a5 = __privateGet(this, _i2)) == null ? void 0 : _a5.status()) !== "rejected") {
      if (this.state.data !== void 0 && (e == null ? void 0 : e.cancelRefetch)) this.cancel({ silent: true });
      else if (__privateGet(this, _i2)) return __privateGet(this, _i2).continueRetry(), __privateGet(this, _i2).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const a = this.observers.find((c) => c.options.queryFn);
      a && this.setOptions(a.options);
    }
    const s = new AbortController(), n = (a) => {
      Object.defineProperty(a, "signal", { enumerable: true, get: () => (__privateSet(this, _a3, true), s.signal) });
    }, i = () => {
      const a = di(this.options, e), l = (() => {
        const h = { client: __privateGet(this, _n2), queryKey: this.queryKey, meta: this.meta };
        return n(h), h;
      })();
      return __privateSet(this, _a3, false), this.options.persister ? this.options.persister(a, l, this) : a(l);
    }, o = (() => {
      const a = { fetchOptions: e, options: this.options, queryKey: this.queryKey, client: __privateGet(this, _n2), state: this.state, fetchFn: i };
      return n(a), a;
    })();
    (_b2 = this.options.behavior) == null ? void 0 : _b2.onFetch(o, this), __privateSet(this, _t5, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_c3 = o.fetchOptions) == null ? void 0 : _c3.meta)) && __privateMethod(this, _uo_instances, r_fn).call(this, { type: "fetch", meta: (_d2 = o.fetchOptions) == null ? void 0 : _d2.meta }), __privateSet(this, _i2, gi({ initialPromise: e == null ? void 0 : e.initialPromise, fn: o.fetchFn, onCancel: (a) => {
      a instanceof rs && a.revert && this.setState({ ...__privateGet(this, _t5), fetchStatus: "idle" }), s.abort();
    }, onFail: (a, c) => {
      __privateMethod(this, _uo_instances, r_fn).call(this, { type: "failed", failureCount: a, error: c });
    }, onPause: () => {
      __privateMethod(this, _uo_instances, r_fn).call(this, { type: "pause" });
    }, onContinue: () => {
      __privateMethod(this, _uo_instances, r_fn).call(this, { type: "continue" });
    }, retry: o.options.retry, retryDelay: o.options.retryDelay, networkMode: o.options.networkMode, canRun: () => true }));
    try {
      const a = await __privateGet(this, _i2).start();
      if (a === void 0) throw new Error(`${this.queryHash} data is undefined`);
      return this.setData(a), (_f2 = (_e28 = __privateGet(this, _s4).config).onSuccess) == null ? void 0 : _f2.call(_e28, a, this), (_h2 = (_g2 = __privateGet(this, _s4).config).onSettled) == null ? void 0 : _h2.call(_g2, a, this.state.error, this), a;
    } catch (a) {
      if (a instanceof rs) {
        if (a.silent) return __privateGet(this, _i2).promise;
        if (a.revert) {
          if (this.state.data === void 0) throw a;
          return this.state.data;
        }
      }
      throw __privateMethod(this, _uo_instances, r_fn).call(this, { type: "error", error: a }), (_j = (_i5 = __privateGet(this, _s4).config).onError) == null ? void 0 : _j.call(_i5, a, this), (_l2 = (_k = __privateGet(this, _s4).config).onSettled) == null ? void 0 : _l2.call(_k, this.state.data, a, this), a;
    } finally {
      this.scheduleGc();
    }
  }
}, _e6 = new WeakMap(), _t5 = new WeakMap(), _s4 = new WeakMap(), _n2 = new WeakMap(), _i2 = new WeakMap(), _o2 = new WeakMap(), _a3 = new WeakMap(), _uo_instances = new WeakSet(), r_fn = function(t) {
  const e = (s) => {
    switch (t.type) {
      case "failed":
        return { ...s, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
      case "pause":
        return { ...s, fetchStatus: "paused" };
      case "continue":
        return { ...s, fetchStatus: "fetching" };
      case "fetch":
        return { ...s, ...ho(s.data, this.options), fetchMeta: t.meta ?? null };
      case "success":
        const n = { ...s, ...dn(t.data, t.dataUpdatedAt), dataUpdateCount: s.dataUpdateCount + 1, ...!t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null } };
        return __privateSet(this, _t5, t.manual ? n : void 0), n;
      case "error":
        const i = t.error;
        return { ...s, error: i, errorUpdateCount: s.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: s.fetchFailureCount + 1, fetchFailureReason: i, fetchStatus: "idle", status: "error", isInvalidated: true };
      case "invalidate":
        return { ...s, isInvalidated: true };
      case "setState":
        return { ...s, ...t.state };
    }
  };
  this.state = e(this.state), j.batch(() => {
    this.observers.forEach((s) => {
      s.onQueryUpdate();
    }), __privateGet(this, _s4).notify({ query: this, type: "updated", action: t });
  });
}, _e7);
function ho(t, e) {
  return { fetchFailureCount: 0, fetchFailureReason: null, fetchStatus: yi(e.networkMode) ? "fetching" : "paused", ...t === void 0 && { error: null, status: "pending" } };
}
function dn(t, e) {
  return { data: t, dataUpdatedAt: e ?? Date.now(), error: null, isInvalidated: false, status: "success" };
}
function pn(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, s = e !== void 0, n = s ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return { data: e, dataUpdateCount: 0, dataUpdatedAt: s ? n ?? Date.now() : 0, error: null, errorUpdateCount: 0, errorUpdatedAt: 0, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: null, isInvalidated: false, status: s ? "success" : "pending", fetchStatus: "idle" };
}
function yn(t) {
  return { onFetch: (e, s) => {
    var _a5, _b2, _c3, _d2, _e28;
    const n = e.options, i = (_c3 = (_b2 = (_a5 = e.fetchOptions) == null ? void 0 : _a5.meta) == null ? void 0 : _b2.fetchMore) == null ? void 0 : _c3.direction, r = ((_d2 = e.state.data) == null ? void 0 : _d2.pages) || [], o = ((_e28 = e.state.data) == null ? void 0 : _e28.pageParams) || [];
    let a = { pages: [], pageParams: [] }, c = 0;
    const l = async () => {
      let h = false;
      const u = (f) => {
        no(f, () => e.signal, () => h = true);
      }, d = di(e.options, e.fetchOptions), p = async (f, y, g) => {
        if (h) return Promise.reject();
        if (y == null && f.pages.length) return Promise.resolve(f);
        const S = (() => {
          const k = { client: e.client, queryKey: e.queryKey, pageParam: y, direction: g ? "backward" : "forward", meta: e.options.meta };
          return u(k), k;
        })(), b = await d(S), { maxPages: m } = e.options, R = g ? so : to;
        return { pages: R(f.pages, b, m), pageParams: R(f.pageParams, y, m) };
      };
      if (i && r.length) {
        const f = i === "backward", y = f ? fo : gn, g = { pages: r, pageParams: o }, v = y(n, g);
        a = await p(g, v, f);
      } else {
        const f = t ?? r.length;
        do {
          const y = c === 0 ? o[0] ?? n.initialPageParam : gn(n, a);
          if (c > 0 && y == null) break;
          a = await p(a, y), c++;
        } while (c < f);
      }
      return a;
    };
    e.options.persister ? e.fetchFn = () => {
      var _a6, _b3;
      return (_b3 = (_a6 = e.options).persister) == null ? void 0 : _b3.call(_a6, l, { client: e.client, queryKey: e.queryKey, meta: e.options.meta, signal: e.signal }, s);
    } : e.fetchFn = l;
  } };
}
function gn(t, { pages: e, pageParams: s }) {
  const n = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(e[n], e, s[n], s) : void 0;
}
function fo(t, { pages: e, pageParams: s }) {
  var _a5;
  return e.length > 0 ? (_a5 = t.getPreviousPageParam) == null ? void 0 : _a5.call(t, e[0], e, s[0], s) : void 0;
}
var po = (_f = class extends mi {
  constructor(t) {
    super();
    __privateAdd(this, _po_instances);
    __privateAdd(this, _e8);
    __privateAdd(this, _t6);
    __privateAdd(this, _s5);
    __privateAdd(this, _n3);
    __privateSet(this, _e8, t.client), this.mutationId = t.mutationId, __privateSet(this, _s5, t.mutationCache), __privateSet(this, _t6, []), this.state = t.state || yo(), this.setOptions(t.options), this.scheduleGc();
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
    var _a5, _b2, _c3, _d2, _e28, _f2, _g2, _h2, _i5, _j, _k, _l2, _m, _n6, _o4, _p, _q, _r3;
    const e = () => {
      __privateMethod(this, _po_instances, i_fn).call(this, { type: "continue" });
    }, s = { client: __privateGet(this, _e8), meta: this.options.meta, mutationKey: this.options.mutationKey };
    __privateSet(this, _n3, gi({ fn: () => this.options.mutationFn ? this.options.mutationFn(t, s) : Promise.reject(new Error("No mutationFn found")), onFail: (r, o) => {
      __privateMethod(this, _po_instances, i_fn).call(this, { type: "failed", failureCount: r, error: o });
    }, onPause: () => {
      __privateMethod(this, _po_instances, i_fn).call(this, { type: "pause" });
    }, onContinue: e, retry: this.options.retry ?? 0, retryDelay: this.options.retryDelay, networkMode: this.options.networkMode, canRun: () => __privateGet(this, _s5).canRun(this) }));
    const n = this.state.status === "pending", i = !__privateGet(this, _n3).canStart();
    try {
      if (n) e();
      else {
        __privateMethod(this, _po_instances, i_fn).call(this, { type: "pending", variables: t, isPaused: i }), __privateGet(this, _s5).config.onMutate && await __privateGet(this, _s5).config.onMutate(t, this, s);
        const o = await ((_b2 = (_a5 = this.options).onMutate) == null ? void 0 : _b2.call(_a5, t, s));
        o !== this.state.context && __privateMethod(this, _po_instances, i_fn).call(this, { type: "pending", context: o, variables: t, isPaused: i });
      }
      const r = await __privateGet(this, _n3).start();
      return await ((_d2 = (_c3 = __privateGet(this, _s5).config).onSuccess) == null ? void 0 : _d2.call(_c3, r, t, this.state.context, this, s)), await ((_f2 = (_e28 = this.options).onSuccess) == null ? void 0 : _f2.call(_e28, r, t, this.state.context, s)), await ((_h2 = (_g2 = __privateGet(this, _s5).config).onSettled) == null ? void 0 : _h2.call(_g2, r, null, this.state.variables, this.state.context, this, s)), await ((_j = (_i5 = this.options).onSettled) == null ? void 0 : _j.call(_i5, r, null, t, this.state.context, s)), __privateMethod(this, _po_instances, i_fn).call(this, { type: "success", data: r }), r;
    } catch (r) {
      try {
        await ((_l2 = (_k = __privateGet(this, _s5).config).onError) == null ? void 0 : _l2.call(_k, r, t, this.state.context, this, s));
      } catch (o) {
        Promise.reject(o);
      }
      try {
        await ((_n6 = (_m = this.options).onError) == null ? void 0 : _n6.call(_m, r, t, this.state.context, s));
      } catch (o) {
        Promise.reject(o);
      }
      try {
        await ((_p = (_o4 = __privateGet(this, _s5).config).onSettled) == null ? void 0 : _p.call(_o4, void 0, r, this.state.variables, this.state.context, this, s));
      } catch (o) {
        Promise.reject(o);
      }
      try {
        await ((_r3 = (_q = this.options).onSettled) == null ? void 0 : _r3.call(_q, void 0, r, t, this.state.context, s));
      } catch (o) {
        Promise.reject(o);
      }
      throw __privateMethod(this, _po_instances, i_fn).call(this, { type: "error", error: r }), r;
    } finally {
      __privateGet(this, _s5).runNext(this);
    }
  }
}, _e8 = new WeakMap(), _t6 = new WeakMap(), _s5 = new WeakMap(), _n3 = new WeakMap(), _po_instances = new WeakSet(), i_fn = function(t) {
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
  this.state = e(this.state), j.batch(() => {
    __privateGet(this, _t6).forEach((s) => {
      s.onMutationUpdate(t);
    }), __privateGet(this, _s5).notify({ mutation: this, type: "updated", action: t });
  });
}, _f);
function yo() {
  return { context: void 0, data: void 0, error: null, failureCount: 0, failureReason: null, isPaused: false, status: "idle", variables: void 0, submittedAt: 0 };
}
var go = (_g = class extends Ft {
  constructor(t = {}) {
    super();
    __privateAdd(this, _e9);
    __privateAdd(this, _t7);
    __privateAdd(this, _s6);
    this.config = t, __privateSet(this, _e9, /* @__PURE__ */ new Set()), __privateSet(this, _t7, /* @__PURE__ */ new Map()), __privateSet(this, _s6, 0);
  }
  build(t, e, s) {
    const n = new po({ client: t, mutationCache: this, mutationId: ++__privateWrapper(this, _s6)._, options: t.defaultMutationOptions(e), state: s });
    return this.add(n), n;
  }
  add(t) {
    __privateGet(this, _e9).add(t);
    const e = ut(t);
    if (typeof e == "string") {
      const s = __privateGet(this, _t7).get(e);
      s ? s.push(t) : __privateGet(this, _t7).set(e, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (__privateGet(this, _e9).delete(t)) {
      const e = ut(t);
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
    const e = ut(t);
    if (typeof e == "string") {
      const n = (_a5 = __privateGet(this, _t7).get(e)) == null ? void 0 : _a5.find((i) => i.state.status === "pending");
      return !n || n === t;
    } else return true;
  }
  runNext(t) {
    var _a5, _b2;
    const e = ut(t);
    return typeof e == "string" ? ((_b2 = (_a5 = __privateGet(this, _t7).get(e)) == null ? void 0 : _a5.find((n) => n !== t && n.state.isPaused)) == null ? void 0 : _b2.continue()) ?? Promise.resolve() : Promise.resolve();
  }
  clear() {
    j.batch(() => {
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
    return this.getAll().find((s) => un(e, s));
  }
  findAll(t = {}) {
    return this.getAll().filter((e) => un(t, e));
  }
  notify(t) {
    j.batch(() => {
      this.listeners.forEach((e) => {
        e(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((e) => e.state.isPaused);
    return j.batch(() => Promise.all(t.map((e) => e.continue().catch(Y))));
  }
}, _e9 = new WeakMap(), _t7 = new WeakMap(), _s6 = new WeakMap(), _g);
function ut(t) {
  var _a5;
  return (_a5 = t.options.scope) == null ? void 0 : _a5.id;
}
var mo = (_h = class extends Ft {
  constructor(t = {}) {
    super();
    __privateAdd(this, _e10);
    this.config = t, __privateSet(this, _e10, /* @__PURE__ */ new Map());
  }
  build(t, e, s) {
    const n = e.queryKey, i = e.queryHash ?? ks(n, e);
    let r = this.get(i);
    return r || (r = new uo({ client: t, queryKey: n, queryHash: i, options: t.defaultQueryOptions(e), state: s, defaultOptions: t.getQueryDefaults(n) }), this.add(r)), r;
  }
  add(t) {
    __privateGet(this, _e10).has(t.queryHash) || (__privateGet(this, _e10).set(t.queryHash, t), this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const e = __privateGet(this, _e10).get(t.queryHash);
    e && (t.destroy(), e === t && __privateGet(this, _e10).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    j.batch(() => {
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
    return this.getAll().find((s) => ln(e, s));
  }
  findAll(t = {}) {
    const e = this.getAll();
    return Object.keys(t).length > 0 ? e.filter((s) => ln(t, s)) : e;
  }
  notify(t) {
    j.batch(() => {
      this.listeners.forEach((e) => {
        e(t);
      });
    });
  }
  onFocus() {
    j.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    j.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, _e10 = new WeakMap(), _h), Xu = (_i4 = class {
  constructor(t = {}) {
    __privateAdd(this, _e11);
    __privateAdd(this, _t8);
    __privateAdd(this, _s7);
    __privateAdd(this, _n4);
    __privateAdd(this, _i3);
    __privateAdd(this, _o3);
    __privateAdd(this, _a4);
    __privateAdd(this, _r2);
    __privateSet(this, _e11, t.queryCache || new mo()), __privateSet(this, _t8, t.mutationCache || new go()), __privateSet(this, _s7, t.defaultOptions || {}), __privateSet(this, _n4, /* @__PURE__ */ new Map()), __privateSet(this, _i3, /* @__PURE__ */ new Map()), __privateSet(this, _o3, 0);
  }
  mount() {
    __privateWrapper(this, _o3)._++, __privateGet(this, _o3) === 1 && (__privateSet(this, _a4, pi.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), __privateGet(this, _e11).onFocus());
    })), __privateSet(this, _r2, _t.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), __privateGet(this, _e11).onOnline());
    })));
  }
  unmount() {
    var _a5, _b2;
    __privateWrapper(this, _o3)._--, __privateGet(this, _o3) === 0 && ((_a5 = __privateGet(this, _a4)) == null ? void 0 : _a5.call(this), __privateSet(this, _a4, void 0), (_b2 = __privateGet(this, _r2)) == null ? void 0 : _b2.call(this), __privateSet(this, _r2, void 0));
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
    return n === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && s.isStaleByTime(ns(e.staleTime, s)) && this.prefetchQuery(e), Promise.resolve(n));
  }
  getQueriesData(t) {
    return __privateGet(this, _e11).findAll(t).map(({ queryKey: e, state: s }) => {
      const n = s.data;
      return [e, n];
    });
  }
  setQueryData(t, e, s) {
    var _a5;
    const n = this.defaultQueryOptions({ queryKey: t }), r = (_a5 = __privateGet(this, _e11).get(n.queryHash)) == null ? void 0 : _a5.state.data, o = Gr(e, r);
    if (o !== void 0) return __privateGet(this, _e11).build(this, n).setData(o, { ...s, manual: true });
  }
  setQueriesData(t, e, s) {
    return j.batch(() => __privateGet(this, _e11).findAll(t).map(({ queryKey: n }) => [n, this.setQueryData(n, e, s)]));
  }
  getQueryState(t) {
    var _a5;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (_a5 = __privateGet(this, _e11).get(e.queryHash)) == null ? void 0 : _a5.state;
  }
  removeQueries(t) {
    const e = __privateGet(this, _e11);
    j.batch(() => {
      e.findAll(t).forEach((s) => {
        e.remove(s);
      });
    });
  }
  resetQueries(t, e) {
    const s = __privateGet(this, _e11);
    return j.batch(() => (s.findAll(t).forEach((n) => {
      n.reset();
    }), this.refetchQueries({ type: "active", ...t }, e)));
  }
  cancelQueries(t, e = {}) {
    const s = { revert: true, ...e }, n = j.batch(() => __privateGet(this, _e11).findAll(t).map((i) => i.cancel(s)));
    return Promise.all(n).then(Y).catch(Y);
  }
  invalidateQueries(t, e = {}) {
    return j.batch(() => (__privateGet(this, _e11).findAll(t).forEach((s) => {
      s.invalidate();
    }), (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...t, type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active" }, e)));
  }
  refetchQueries(t, e = {}) {
    const s = { ...e, cancelRefetch: e.cancelRefetch ?? true }, n = j.batch(() => __privateGet(this, _e11).findAll(t).filter((i) => !i.isDisabled() && !i.isStatic()).map((i) => {
      let r = i.fetch(void 0, s);
      return s.throwOnError || (r = r.catch(Y)), i.state.fetchStatus === "paused" ? Promise.resolve() : r;
    }));
    return Promise.all(n).then(Y);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = false);
    const s = __privateGet(this, _e11).build(this, e);
    return s.isStaleByTime(ns(e.staleTime, s)) ? s.fetch(e) : Promise.resolve(s.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(Y).catch(Y);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = yn(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(Y).catch(Y);
  }
  ensureInfiniteQueryData(t) {
    return t.behavior = yn(t.pages), this.ensureQueryData(t);
  }
  resumePausedMutations() {
    return _t.isOnline() ? __privateGet(this, _t8).resumePausedMutations() : Promise.resolve();
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
    __privateGet(this, _n4).set(Je(t), { queryKey: t, defaultOptions: e });
  }
  getQueryDefaults(t) {
    const e = [...__privateGet(this, _n4).values()], s = {};
    return e.forEach((n) => {
      Ye(t, n.queryKey) && Object.assign(s, n.defaultOptions);
    }), s;
  }
  setMutationDefaults(t, e) {
    __privateGet(this, _i3).set(Je(t), { mutationKey: t, defaultOptions: e });
  }
  getMutationDefaults(t) {
    const e = [...__privateGet(this, _i3).values()], s = {};
    return e.forEach((n) => {
      Ye(t, n.mutationKey) && Object.assign(s, n.defaultOptions);
    }), s;
  }
  defaultQueryOptions(t) {
    if (t._defaulted) return t;
    const e = { ...__privateGet(this, _s7).queries, ...this.getQueryDefaults(t.queryKey), ...t, _defaulted: true };
    return e.queryHash || (e.queryHash = ks(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === Is && (e.enabled = false), e;
  }
  defaultMutationOptions(t) {
    return (t == null ? void 0 : t._defaulted) ? t : { ...__privateGet(this, _s7).mutations, ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey), ...t, _defaulted: true };
  }
  clear() {
    __privateGet(this, _e11).clear(), __privateGet(this, _t8).clear();
  }
}, _e11 = new WeakMap(), _t8 = new WeakMap(), _s7 = new WeakMap(), _n4 = new WeakMap(), _i3 = new WeakMap(), _o3 = new WeakMap(), _a4 = new WeakMap(), _r2 = new WeakMap(), _i4);
class Te {
}
class Me extends Te {
  constructor(e, s) {
    super(), this.collection = e, this.alias = s, this.type = "collectionRef";
  }
}
class H extends Te {
  constructor(e, s) {
    super(), this.query = e, this.alias = s, this.type = "queryRef";
  }
}
class N extends Te {
  constructor(e) {
    super(), this.path = e, this.type = "ref";
  }
}
class U extends Te {
  constructor(e) {
    super(), this.value = e, this.type = "val";
  }
}
class G extends Te {
  constructor(e, s) {
    super(), this.name = e, this.args = s, this.type = "func";
  }
}
class vi extends Te {
  constructor(e, s) {
    super(), this.name = e, this.args = s, this.type = "agg";
  }
}
function Xe(t) {
  return t instanceof vi || t instanceof G || t instanceof N || t instanceof U;
}
function Es(t) {
  return typeof t == "object" && "expression" in t ? t.expression : t;
}
function mn(t) {
  return typeof t == "object" && "expression" in t ? t.expression : t;
}
function vn(t) {
  return typeof t == "object" && "expression" in t && t.residual === true;
}
function vo(t) {
  return { expression: t, residual: true };
}
function wo(t, e) {
  if (t.from.alias === e) return t.from;
  for (const s of t.join || []) if (s.from.alias === e) return s.from;
}
function Ze(t, e, s) {
  if (e.path.length !== 0) {
    if (e.path.length === 1) {
      const n = e.path[0];
      if (t.select) {
        const i = t.select[n];
        if (i && i.type === "ref") return Ze(t, i, s);
      }
      return { collection: s, path: [n] };
    }
    if (e.path.length > 1) {
      const [n, ...i] = e.path, r = wo(t, n);
      return r ? r.type === "queryRef" ? Ze(r.query, new N(i), s) : { collection: r.collection, path: i } : void 0;
    }
  }
}
class Q extends Error {
  constructor(e) {
    super(e), this.name = "TanStackDBError";
  }
}
class wn extends Q {
  constructor(e, s, n) {
    const i = `${e === "insert" ? "Insert" : "Update"} validation failed: ${s.map((r) => `
- ${r.message} - path: ${r.path}`).join("")}`;
    super(n || i), this.name = "SchemaValidationError", this.type = e, this.issues = s;
  }
}
class nt extends Q {
  constructor(e) {
    super(e), this.name = "CollectionConfigurationError";
  }
}
class So extends nt {
  constructor() {
    super("Collection requires a config");
  }
}
class bo extends nt {
  constructor() {
    super("Collection requires a sync config");
  }
}
class xo extends nt {
  constructor() {
    super("Schema must implement the standard-schema interface");
  }
}
class Sn extends nt {
  constructor() {
    super("Schema validation must be synchronous");
  }
}
class it extends Q {
  constructor(e) {
    super(e), this.name = "CollectionStateError";
  }
}
class Po extends it {
  constructor(e, s) {
    super(`Cannot perform ${e} on collection "${s}" - collection is in error state. Try calling cleanup() and restarting the collection.`);
  }
}
class Ro extends it {
  constructor(e, s, n) {
    super(`Invalid collection status transition from "${e}" to "${s}" for collection "${n}"`);
  }
}
class Co extends it {
  constructor() {
    super("Collection is in error state");
  }
}
class _o extends it {
  constructor() {
    super("Active subscribers count is negative - this should never happen");
  }
}
class ee extends Q {
  constructor(e) {
    super(e), this.name = "CollectionOperationError";
  }
}
class ko extends ee {
  constructor(e) {
    super(`An object was created without a defined key: ${JSON.stringify(e)}`);
  }
}
class Io extends ee {
  constructor(e, s) {
    const n = e === null ? "null" : typeof e;
    super(`getKey returned an invalid key type. Expected string or number, but got ${n}: ${JSON.stringify(e)}. Item: ${JSON.stringify(s)}`);
  }
}
class Eo extends ee {
  constructor(e) {
    super(`Cannot insert document with ID "${e}" because it already exists in the collection`);
  }
}
class Oo extends ee {
  constructor(e, s, n) {
    const i = `Cannot insert document with key "${e}" from sync because it already exists in the collection "${s}"`;
    (n == null ? void 0 : n.hasCustomGetKey) && n.hasDistinct ? super(`${i}. This collection uses a custom getKey with .distinct(). The .distinct() operator deduplicates by the ENTIRE selected object (standard SQL behavior), but your custom getKey extracts only a subset of fields. This causes multiple distinct rows (with different values in non-key fields) to receive the same key. To fix this, either: (1) ensure your SELECT only includes fields that uniquely identify each row, (2) use .groupBy() with min()/max() aggregates to select one value per group, or (3) remove the custom getKey to use the default key behavior.`) : (n == null ? void 0 : n.hasCustomGetKey) && n.hasJoins ? super(`${i}. This collection uses a custom getKey with joined queries. Joined queries can produce multiple rows with the same key when relationships are not 1:1. Consider: (1) using a composite key in your getKey function (e.g., \`\${item.key1}-\${item.key2}\`), (2) ensuring your join produces unique rows per key, or (3) removing the custom getKey to use the default composite key behavior.`) : super(i);
  }
}
class Mo extends ee {
  constructor() {
    super("The first argument to update is missing");
  }
}
class To extends ee {
  constructor() {
    super("No keys were passed to update");
  }
}
class Ao extends ee {
  constructor(e) {
    super(`The key "${e}" was passed to update but an object for this key was not found in the collection`);
  }
}
class Lo extends ee {
  constructor(e, s) {
    super(`Updating the key of an item is not allowed. Original key: "${e}", Attempted new key: "${s}". Please delete the old item and create a new one if a key change is necessary.`);
  }
}
class Fo extends ee {
  constructor() {
    super("No keys were passed to delete");
  }
}
class Bo extends ee {
  constructor(e) {
    super(`Collection.delete was called with key '${e}' but there is no item in the collection with this key`);
  }
}
class Os extends Q {
  constructor(e) {
    super(e), this.name = "MissingHandlerError";
  }
}
class Ko extends Os {
  constructor() {
    super("Collection.insert called directly (not within an explicit transaction) but no 'onInsert' handler is configured.");
  }
}
class Do extends Os {
  constructor() {
    super("Collection.update called directly (not within an explicit transaction) but no 'onUpdate' handler is configured.");
  }
}
class jo extends Os {
  constructor() {
    super("Collection.delete called directly (not within an explicit transaction) but no 'onDelete' handler is configured.");
  }
}
class de extends Q {
  constructor(e) {
    super(e), this.name = "TransactionError";
  }
}
class zo extends de {
  constructor() {
    super("mutationFn is required when creating a transaction");
  }
}
class $o extends de {
  constructor() {
    super("You can no longer call .mutate() as the transaction is no longer pending");
  }
}
class No extends de {
  constructor() {
    super("You can no longer call .rollback() as the transaction is already completed");
  }
}
class Uo extends de {
  constructor() {
    super("You can no longer call .commit() as the transaction is no longer pending");
  }
}
class bn extends de {
  constructor() {
    super("No pending sync transaction to write to");
  }
}
class xn extends de {
  constructor() {
    super("The pending sync transaction is already committed, you can't still write to it.");
  }
}
class Vo extends de {
  constructor() {
    super("No pending sync transaction to commit");
  }
}
class qo extends de {
  constructor() {
    super("The pending sync transaction is already committed, you can't commit it again.");
  }
}
class be extends Q {
  constructor(e) {
    super(e), this.name = "QueryBuilderError";
  }
}
class Wo extends be {
  constructor(e) {
    super(`Only one source is allowed in the ${e}`);
  }
}
class Ho extends be {
  constructor(e) {
    super(`A sub query passed to a ${e} must have a from clause itself`);
  }
}
class Go extends be {
  constructor(e) {
    super(`Invalid source for live query: The value provided for alias "${e}" is not a Collection or subquery. Live queries only accept Collection instances or subqueries. Please ensure you're passing a valid Collection or QueryBuilder, not a plain array or other data type.`);
  }
}
class ht extends be {
  constructor(e, s) {
    super(`Invalid source for ${e}: Expected an object with a single key-value pair like { alias: collection }. For example: .from({ todos: todosCollection }). Got: ${s}`);
  }
}
class Qo extends be {
  constructor() {
    super("Join condition must be an equality expression");
  }
}
class Jo extends be {
  constructor() {
    super("Query must have a from clause");
  }
}
class Pn extends be {
  constructor(e) {
    super(`Invalid where() expression: Expected a query expression, but received a ${e}. This usually happens when using JavaScript's comparison operators (===, !==, <, >, etc.) directly. Instead, use the query builder functions:

  \u274C .where(({ user }) => user.id === 'abc')
  \u2705 .where(({ user }) => eq(user.id, 'abc'))

Available comparison functions: eq, gt, gte, lt, lte, and, or, not, like, ilike, isNull, isUndefined`);
  }
}
class W extends Q {
  constructor(e) {
    super(e), this.name = "QueryCompilationError";
  }
}
class Yo extends W {
  constructor() {
    super("DISTINCT requires a SELECT clause.");
  }
}
class Xo extends W {
  constructor() {
    super("HAVING clause requires GROUP BY clause");
  }
}
class Zo extends W {
  constructor() {
    super("LIMIT and OFFSET require an ORDER BY clause to ensure deterministic results");
  }
}
class wi extends W {
  constructor(e, s, n) {
    const i = s ? `alias "${e}" (collection "${s}")` : `collection "${e}"`, r = (n == null ? void 0 : n.length) ? `. Available keys: ${n.join(", ")}` : "";
    super(`Input for ${i} not found in inputs map${r}`);
  }
}
class ea extends W {
  constructor(e, s) {
    super(`Subquery uses alias "${e}" which is already used in the parent query. Each alias must be unique across parent and subquery contexts. Parent query aliases: ${s.join(", ")}. Please rename "${e}" in either the parent query or subquery to avoid conflicts.`);
  }
}
class ta extends W {
  constructor(e) {
    super(`Unsupported FROM type: ${e}`);
  }
}
class sa extends W {
  constructor(e) {
    super(`Unknown expression type: ${e}`);
  }
}
class na extends W {
  constructor() {
    super("Reference path cannot be empty");
  }
}
class ia extends W {
  constructor(e) {
    super(`Unknown function: ${e}`);
  }
}
class Rn extends W {
  constructor(e) {
    super(`Collection "${e}" not found during compilation of join`);
  }
}
class xe extends Q {
  constructor(e) {
    super(e), this.name = "JoinError";
  }
}
class ra extends xe {
  constructor(e) {
    super(`Unsupported join type: ${e}`);
  }
}
class oa extends xe {
  constructor(e) {
    super(`Invalid join condition: both expressions refer to the same source "${e}"`);
  }
}
class aa extends xe {
  constructor() {
    super("Invalid join condition: expressions must reference source aliases");
  }
}
class ca extends xe {
  constructor(e) {
    super(`Invalid join condition: left expression refers to an unavailable source "${e}"`);
  }
}
class la extends xe {
  constructor(e) {
    super(`Invalid join condition: right expression does not refer to the joined source "${e}"`);
  }
}
class ua extends xe {
  constructor() {
    super("Invalid join condition");
  }
}
class ha extends xe {
  constructor(e) {
    super(`Unsupported join source type: ${e}`);
  }
}
class Kt extends Q {
  constructor(e) {
    super(e), this.name = "GroupByError";
  }
}
class fa extends Kt {
  constructor(e) {
    super(`Non-aggregate expression '${e}' in SELECT must also appear in GROUP BY clause`);
  }
}
class da extends Kt {
  constructor(e) {
    super(`Unsupported aggregate function: ${e}`);
  }
}
class pa extends Kt {
  constructor(e) {
    super(`Aggregate function in HAVING clause must also be in SELECT clause: ${e}`);
  }
}
class ya extends Kt {
  constructor(e) {
    super(`Unknown expression type in HAVING clause: ${e}`);
  }
}
class Cn extends Q {
  constructor(e, s) {
    const n = s instanceof Error ? s.message : String(s);
    super(`Collection "${e}" sync cleanup function threw an error: ${n}`), this.name = "SyncCleanupError";
  }
}
class ga extends Q {
  constructor(e) {
    super(e), this.name = "QueryOptimizerError";
  }
}
class ma extends ga {
  constructor() {
    super("Cannot combine empty expression list");
  }
}
class va extends W {
  constructor(e, s, n, i) {
    super(`Internal error: subscription for alias '${e}' (remapped from '${s}', collection '${n}') is missing in join pipeline. Available aliases: ${i.join(", ")}. This indicates a bug in alias tracking.`);
  }
}
class wa extends W {
  constructor(e) {
    super(`Internal error: compiler returned aliases without inputs: ${e.join(", ")}. This indicates a bug in query compilation. Please report this issue.`);
  }
}
class Sa extends W {
  constructor() {
    super("setWindow() can only be called on collections with an ORDER BY clause. Add .orderBy() to your query to enable window movement.");
  }
}
const Ht = /* @__PURE__ */ new WeakMap();
let ba = 1;
function _n(t) {
  if (Ht.has(t)) return Ht.get(t);
  const e = ba++;
  return Ht.set(t, e), e;
}
const Ms = (t, e, s) => {
  const { nulls: n } = s;
  if (t == null && e == null) return 0;
  if (t == null) return n === "first" ? -1 : 1;
  if (e == null) return n === "first" ? 1 : -1;
  if (typeof t == "string" && typeof e == "string" && s.stringSort === "locale") return t.localeCompare(e, s.locale, s.localeOptions);
  if (Array.isArray(t) && Array.isArray(e)) {
    for (let o = 0; o < Math.min(t.length, e.length); o++) {
      const a = Ms(t[o], e[o], s);
      if (a !== 0) return a;
    }
    return t.length - e.length;
  }
  if (t instanceof Date && e instanceof Date) return t.getTime() - e.getTime();
  const i = typeof t == "object", r = typeof e == "object";
  if (i || r) {
    if (i && r) {
      const o = _n(t), a = _n(e);
      return o - a;
    }
    if (i) return 1;
    if (r) return -1;
  }
  return t < e ? -1 : t > e ? 1 : 0;
}, xa = (t, e, s) => Ms(e, t, { ...s, nulls: s.nulls === "first" ? "last" : "first" });
function kt(t) {
  return (e, s) => t.direction === "asc" ? Ms(e, s, t) : xa(e, s, t);
}
const os = kt({ direction: "asc", nulls: "first", stringSort: "locale" });
function Pa(t, e) {
  if (t.byteLength !== e.byteLength) return false;
  for (let s = 0; s < t.byteLength; s++) if (t[s] !== e[s]) return false;
  return true;
}
const Ra = 128, Si = "__TS_DB_BTREE_UNDEFINED_VALUE__";
function as(t) {
  return t instanceof Date ? t.getTime() : (typeof Buffer < "u" && t instanceof Buffer || t instanceof Uint8Array) && t.byteLength <= Ra ? `__u8__${Array.from(t).join(",")}` : t;
}
function oe(t) {
  return t === void 0 ? Si : as(t);
}
function je(t) {
  if (t !== Si) return t;
}
function Ca(t, e) {
  if (t === e) return true;
  const s = typeof Buffer < "u" && t instanceof Buffer || t instanceof Uint8Array, n = typeof Buffer < "u" && e instanceof Buffer || e instanceof Uint8Array;
  return s && n ? Pa(t, e) : false;
}
function L(t) {
  return t == null;
}
function Ee(t) {
  return t === true;
}
function V(t, e = false) {
  return As(t, e);
}
function Ts(t) {
  return As(t, true);
}
function As(t, e) {
  switch (t.type) {
    case "val": {
      const s = t.value;
      return () => s;
    }
    case "ref":
      return e ? ka(t) : _a(t);
    case "func":
      return Ia(t, e);
    default:
      throw new sa(t.type);
  }
}
function _a(t) {
  const [e, ...s] = t.path;
  if (!e) throw new na();
  if (e === "$selected") {
    if (s.length === 0) return (i) => i.$selected;
    if (s.length === 1) {
      const i = s[0];
      return (r) => {
        var _a5;
        return (_a5 = r.$selected) == null ? void 0 : _a5[i];
      };
    } else return (i) => {
      const r = i.$selected;
      if (r === void 0) return;
      let o = r;
      for (const a of s) {
        if (o == null) return o;
        o = o[a];
      }
      return o;
    };
  }
  const n = e;
  if (s.length === 0) return (i) => i[n];
  if (s.length === 1) {
    const i = s[0];
    return (r) => {
      var _a5;
      return (_a5 = r[n]) == null ? void 0 : _a5[i];
    };
  } else return (i) => {
    const r = i[n];
    if (r === void 0) return;
    let o = r;
    for (const a of s) {
      if (o == null) return o;
      o = o[a];
    }
    return o;
  };
}
function ka(t) {
  const e = t.path;
  return (s) => {
    let n = s;
    for (const i of e) {
      if (n == null) return n;
      n = n[i];
    }
    return n;
  };
}
function Ia(t, e) {
  const s = t.args.map((n) => As(n, e));
  switch (t.name) {
    case "eq": {
      const n = s[0], i = s[1];
      return (r) => {
        const o = as(n(r)), a = as(i(r));
        return L(o) || L(a) ? null : Ca(o, a);
      };
    }
    case "gt": {
      const n = s[0], i = s[1];
      return (r) => {
        const o = n(r), a = i(r);
        return L(o) || L(a) ? null : o > a;
      };
    }
    case "gte": {
      const n = s[0], i = s[1];
      return (r) => {
        const o = n(r), a = i(r);
        return L(o) || L(a) ? null : o >= a;
      };
    }
    case "lt": {
      const n = s[0], i = s[1];
      return (r) => {
        const o = n(r), a = i(r);
        return L(o) || L(a) ? null : o < a;
      };
    }
    case "lte": {
      const n = s[0], i = s[1];
      return (r) => {
        const o = n(r), a = i(r);
        return L(o) || L(a) ? null : o <= a;
      };
    }
    case "and":
      return (n) => {
        let i = false;
        for (const r of s) {
          const o = r(n);
          if (o === false) return false;
          L(o) && (i = true);
        }
        return i ? null : true;
      };
    case "or":
      return (n) => {
        let i = false;
        for (const r of s) {
          const o = r(n);
          if (o === true) return true;
          L(o) && (i = true);
        }
        return i ? null : false;
      };
    case "not": {
      const n = s[0];
      return (i) => {
        const r = n(i);
        return L(r) ? null : !r;
      };
    }
    case "in": {
      const n = s[0], i = s[1];
      return (r) => {
        const o = n(r), a = i(r);
        return L(o) ? null : Array.isArray(a) ? a.includes(o) : false;
      };
    }
    case "like": {
      const n = s[0], i = s[1];
      return (r) => {
        const o = n(r), a = i(r);
        return L(o) || L(a) ? null : kn(o, a, false);
      };
    }
    case "ilike": {
      const n = s[0], i = s[1];
      return (r) => {
        const o = n(r), a = i(r);
        return L(o) || L(a) ? null : kn(o, a, true);
      };
    }
    case "upper": {
      const n = s[0];
      return (i) => {
        const r = n(i);
        return typeof r == "string" ? r.toUpperCase() : r;
      };
    }
    case "lower": {
      const n = s[0];
      return (i) => {
        const r = n(i);
        return typeof r == "string" ? r.toLowerCase() : r;
      };
    }
    case "length": {
      const n = s[0];
      return (i) => {
        const r = n(i);
        return typeof r == "string" || Array.isArray(r) ? r.length : 0;
      };
    }
    case "concat":
      return (n) => s.map((i) => {
        const r = i(n);
        try {
          return String(r ?? "");
        } catch {
          try {
            return JSON.stringify(r) || "";
          } catch {
            return "[object]";
          }
        }
      }).join("");
    case "coalesce":
      return (n) => {
        for (const i of s) {
          const r = i(n);
          if (r != null) return r;
        }
        return null;
      };
    case "add": {
      const n = s[0], i = s[1];
      return (r) => {
        const o = n(r), a = i(r);
        return (o ?? 0) + (a ?? 0);
      };
    }
    case "subtract": {
      const n = s[0], i = s[1];
      return (r) => {
        const o = n(r), a = i(r);
        return (o ?? 0) - (a ?? 0);
      };
    }
    case "multiply": {
      const n = s[0], i = s[1];
      return (r) => {
        const o = n(r), a = i(r);
        return (o ?? 0) * (a ?? 0);
      };
    }
    case "divide": {
      const n = s[0], i = s[1];
      return (r) => {
        const o = n(r), c = i(r) ?? 0;
        return c !== 0 ? (o ?? 0) / c : null;
      };
    }
    case "isUndefined": {
      const n = s[0];
      return (i) => n(i) === void 0;
    }
    case "isNull": {
      const n = s[0];
      return (i) => n(i) === null;
    }
    default:
      throw new ia(t.name);
  }
}
function kn(t, e, s) {
  if (typeof t != "string" || typeof e != "string") return false;
  const n = s ? t.toLowerCase() : t;
  let r = (s ? e.toLowerCase() : e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return r = r.replace(/%/g, ".*"), r = r.replace(/_/g, "."), new RegExp(`^${r}$`).test(n);
}
function Z(t, e) {
  return mt(t, e, /* @__PURE__ */ new Map());
}
function mt(t, e, s) {
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
    const i = Array.from(t.entries()).every(([r, o]) => e.has(r) && mt(o, e.get(r), s));
    return s.delete(t), i;
  }
  if (e instanceof Map) return false;
  if (t instanceof Set) {
    if (!(e instanceof Set) || t.size !== e.size) return false;
    if (s.has(t)) return s.get(t) === e;
    s.set(t, e);
    const n = Array.from(t), i = Array.from(e);
    if (n.every((o) => typeof o != "object")) return s.delete(t), n.every((o) => e.has(o));
    const r = n.length === i.length;
    return s.delete(t), r;
  }
  if (e instanceof Set) return false;
  if (ArrayBuffer.isView(t) && ArrayBuffer.isView(e) && !(t instanceof DataView) && !(e instanceof DataView)) {
    const n = t, i = e;
    if (n.length !== i.length) return false;
    for (let r = 0; r < n.length; r++) if (n[r] !== i[r]) return false;
    return true;
  }
  if (ArrayBuffer.isView(e) && !(e instanceof DataView) && !ArrayBuffer.isView(t)) return false;
  if (Ue(t) && Ue(e)) {
    const n = cs(t), i = cs(e);
    return n !== i ? false : typeof t.equals == "function" ? t.equals(e) : t.toString() === e.toString();
  }
  if (Ue(e)) return false;
  if (Array.isArray(t)) {
    if (!Array.isArray(e) || t.length !== e.length) return false;
    if (s.has(t)) return s.get(t) === e;
    s.set(t, e);
    const n = t.every((i, r) => mt(i, e[r], s));
    return s.delete(t), n;
  }
  if (Array.isArray(e)) return false;
  if (typeof t == "object") {
    if (s.has(t)) return s.get(t) === e;
    s.set(t, e);
    const n = Object.keys(t), i = Object.keys(e);
    if (n.length !== i.length) return s.delete(t), false;
    const r = n.every((o) => o in e && mt(t[o], e[o], s));
    return s.delete(t), r;
  }
  return false;
}
const Ea = ["Temporal.Duration", "Temporal.Instant", "Temporal.PlainDate", "Temporal.PlainDateTime", "Temporal.PlainMonthDay", "Temporal.PlainTime", "Temporal.PlainYearMonth", "Temporal.ZonedDateTime"];
function cs(t) {
  return t[Symbol.toStringTag];
}
function Ue(t) {
  const e = cs(t);
  return typeof e == "string" && Ea.includes(e);
}
const Ls = { direction: "asc", nulls: "first", stringSort: "locale" };
class Oa {
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
function rt(t, e, s) {
  const n = s ?? { ...Ls, ...t.compareOptions };
  for (const i of t.indexes.values()) if (i.matchesField(e) && i.matchesCompareOptions(n)) return i.matchesDirection(n.direction) ? i : new Oa(i);
}
function Ma(t) {
  if (t.length === 0) return /* @__PURE__ */ new Set();
  if (t.length === 1) return new Set(t[0]);
  let e = new Set(t[0]);
  for (let s = 1; s < t.length; s++) {
    const n = /* @__PURE__ */ new Set();
    for (const i of e) t[s].has(i) && n.add(i);
    e = n;
  }
  return e;
}
function Ta(t) {
  const e = /* @__PURE__ */ new Set();
  for (const s of t) for (const n of s) e.add(n);
  return e;
}
function Aa(t, e) {
  return Fs(t, e);
}
function Fs(t, e) {
  if (t.type === "func") switch (t.name) {
    case "eq":
    case "gt":
    case "gte":
    case "lt":
    case "lte":
      return Fa(t, e);
    case "and":
      return Ba(t, e);
    case "or":
      return Ka(t, e);
    case "in":
      return Da(t, e);
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function La(t, e) {
  if (t.type !== "func" || t.args.length < 2) return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
  const s = /* @__PURE__ */ new Map();
  for (const n of t.args) if (n.type === "func" && ["gt", "gte", "lt", "lte"].includes(n.name)) {
    const i = n;
    if (i.args.length === 2) {
      const r = i.args[0], o = i.args[1];
      let a = null, c = null, l = i.name;
      if (r.type === "ref" && o.type === "val") a = r, c = o;
      else if (r.type === "val" && o.type === "ref") switch (a = o, c = r, l) {
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
        const u = a.path.join("."), d = c.value;
        s.has(u) || s.set(u, []), s.get(u).push({ operation: l, value: d });
      }
    }
  }
  for (const [n, i] of s) if (i.length >= 2) {
    const r = n.split("."), o = rt(e, r);
    if (o && o.supports("gt") && o.supports("lt")) {
      let a, c, l = true, h = true;
      for (const { operation: d, value: p } of i) switch (d) {
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
function Fa(t, e) {
  if (t.type !== "func" || t.args.length !== 2) return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
  const s = t.args[0], n = t.args[1];
  let i = null, r = null, o = t.name;
  if (s.type === "ref" && n.type === "val") i = s, r = n;
  else if (s.type === "val" && n.type === "ref") switch (i = n, r = s, o) {
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
  if (i && r) {
    const a = i.path, c = rt(e, a);
    if (c) {
      const l = r.value, h = o;
      return c.supports(h) ? { canOptimize: true, matchingKeys: c.lookup(h, l) } : { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
    }
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function Ba(t, e) {
  if (t.type !== "func" || t.args.length < 2) return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
  const s = La(t, e);
  if (s.canOptimize) return s;
  const n = [];
  for (const i of t.args) {
    const r = Fs(i, e);
    r.canOptimize && n.push(r);
  }
  if (n.length > 0) {
    const i = n.map((o) => o.matchingKeys);
    return { canOptimize: true, matchingKeys: Ma(i) };
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function Ka(t, e) {
  if (t.type !== "func" || t.args.length < 2) return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
  const s = [];
  for (const n of t.args) {
    const i = Fs(n, e);
    i.canOptimize && s.push(i);
  }
  if (s.length > 0) {
    const n = s.map((r) => r.matchingKeys);
    return { canOptimize: true, matchingKeys: Ta(n) };
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
function Da(t, e) {
  if (t.type !== "func" || t.args.length !== 2) return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
  const s = t.args[0], n = t.args[1];
  if (s.type === "ref" && n.type === "val" && Array.isArray(n.value)) {
    const i = s.path, r = n.value, o = rt(e, i);
    if (o) {
      if (o.supports("in")) return { canOptimize: true, matchingKeys: o.lookup("in", r) };
      if (o.supports("eq")) {
        const a = /* @__PURE__ */ new Set();
        for (const c of r) {
          const l = o.lookup("eq", c);
          for (const h of l) a.add(h);
        }
        return { canOptimize: true, matchingKeys: a };
      }
    }
  }
  return { canOptimize: false, matchingKeys: /* @__PURE__ */ new Set() };
}
class ja extends Map {
  constructor(e, s) {
    super(s), this.defaultValue = e;
  }
  get(e) {
    return this.has(e) ? super.get(e) : this.defaultValue();
  }
  update(e, s) {
    const n = this.get(e), i = s(n);
    return this.set(e, i), i;
  }
}
const Gt = 3e4;
function Qt(t, e) {
  if (e.length <= Gt) t.push(...e);
  else for (let s = 0; s < e.length; s += Gt) {
    const n = e.slice(s, s + Gt);
    t.push(...n);
  }
}
function za(t, e, s) {
  let n = 0, i = t.length;
  for (; n < i; ) {
    const r = Math.floor((n + i) / 2), o = s(t[r], e);
    if (o < 0) n = r + 1;
    else if (o > 0) i = r;
    else return r;
  }
  return n;
}
class $a {
  constructor() {
    this.objectIds = /* @__PURE__ */ new WeakMap(), this.nextId = 0;
  }
  getId(e) {
    if (typeof e != "object" || e === null) {
      const s = String(e);
      let n = 0;
      for (let i = 0; i < s.length; i++) {
        const r = s.charCodeAt(i);
        n = (n << 5) - n + r, n = n & n;
      }
      return n;
    }
    return this.objectIds.has(e) || this.objectIds.set(e, this.nextId++), this.objectIds.get(e);
  }
  getStringId(e) {
    return e === null ? "null" : e === void 0 ? "undefined" : typeof e != "object" ? `str_${String(e)}` : `obj_${this.getId(e)}`;
  }
}
const Jt = new $a();
function Na(t, e) {
  const [s, n] = t, [i, r] = e, o = [...ft(s, Math.min(n, i)), ...ft(Math.max(s, r), n)], a = [...ft(i, Math.min(r, s)), ...ft(Math.max(i, n), r)];
  return { onlyInA: o, onlyInB: a };
}
function ft(t, e) {
  const s = [];
  for (let n = t; n < e; n++) s.push(n);
  return s;
}
function It(t, e) {
  return typeof t == typeof e ? t < e ? -1 : t > e ? 1 : 0 : typeof t == "string" ? -1 : 1;
}
function Bs(t) {
  return JSON.stringify(t, (e, s) => typeof s == "bigint" ? s.toString() : s instanceof Date ? s.toISOString() : s);
}
const Ua = K(), Va = K(), qa = K(), Wa = K(), Ha = K();
function K() {
  return Math.random() * (2 ** 31 - 1) >>> 0;
}
const bi = new ArrayBuffer(8), Ga = new DataView(bi), ae = new Uint8Array(bi);
class Dt {
  constructor() {
    this.hash = Ua, this.length = 0, this.carry = 0, this.carryBytes = 0;
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
        this.update(Ha);
        const s = e.description;
        if (!s) return;
        for (let n = 0; n < s.length; n++) {
          const i = s.charCodeAt(n);
          this.writeByte(i & 255), this.writeByte(i >>> 8 & 255);
        }
        return;
      }
      case "string":
        this.update(Va);
        for (let s = 0; s < e.length; s++) {
          const n = e.charCodeAt(s);
          this.writeByte(n & 255), this.writeByte(n >>> 8 & 255);
        }
        return;
      case "number":
        Ga.setFloat64(0, e, true), this.writeByte(ae[0]), this.writeByte(ae[1]), this.writeByte(ae[2]), this.writeByte(ae[3]), this.writeByte(ae[4]), this.writeByte(ae[5]), this.writeByte(ae[6]), this.writeByte(ae[7]);
        return;
      case "bigint": {
        let s = e;
        for (s < 0n ? (s = -s, this.update(Wa)) : this.update(qa); s > 0n; ) this.writeByte(Number(s & 0xffn)), s >>= 8n;
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
const Qa = K(), Ja = K(), Ya = K(), Xa = K(), Za = K(), ec = K(), tc = K(), sc = K(), nc = K(), ic = K(), rc = K(), oc = K(), ac = 128, et = /* @__PURE__ */ new WeakMap();
function z(t) {
  const e = new Dt();
  return xi(e, t), e.digest();
}
function cc(t) {
  const e = et.get(t);
  if (e !== void 0) return e;
  let s;
  if (t instanceof Date) s = lc(t);
  else if (typeof Buffer < "u" && t instanceof Buffer || t instanceof Uint8Array) if (t.byteLength <= ac) s = uc(t);
  else return ls(t);
  else {
    if (t instanceof File) return ls(t);
    {
      let n = t, i = sc;
      t instanceof Array && (i = nc), t instanceof Map && (i = ic, n = [...t.entries()]), t instanceof Set && (i = rc, n = [...t.entries()]), s = hc(n, i);
    }
  }
  return et.set(t, s), s;
}
function lc(t) {
  const e = new Dt();
  return e.update(tc), e.update(t.getTime()), e.digest();
}
function uc(t) {
  const e = new Dt();
  e.update(oc), e.update(t.byteLength);
  for (let s = 0; s < t.byteLength; s++) e.writeByte(t[s]);
  return e.digest();
}
function hc(t, e) {
  const s = new Dt();
  s.update(e);
  const n = Object.keys(t);
  n.sort(dc);
  for (const i of n) s.update(Za), s.update(i), xi(s, t[i]);
  return s.digest();
}
function xi(t, e) {
  if (e === null) {
    t.update(Ya);
    return;
  }
  switch (typeof e) {
    case "undefined":
      t.update(Xa);
      return;
    case "boolean":
      t.update(e ? Qa : Ja);
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
      t.update(fc(e));
      return;
    case "function":
      t.update(ls(e));
      return;
    default:
      console.warn(`Ignored input during hashing because it is of type ${typeof e} which is not supported`);
  }
}
function fc(t) {
  let e = et.get(t);
  return e === void 0 && (e = cc(t)), e;
}
let In = 1;
function ls(t) {
  let e = et.get(t);
  return e === void 0 && (e = In ^ ec, In++, et.set(t, e)), e;
}
function dc(t, e) {
  return t.localeCompare(e);
}
const _T = class _T {
  constructor(e = []) {
    __privateAdd(this, _T_instances);
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
    return new _T(JSON.parse(e));
  }
  map(e) {
    return new _T(__privateGet(this, _e12).map(([s, n]) => [e(s), n]));
  }
  filter(e) {
    return new _T(__privateGet(this, _e12).filter(([s, n]) => e(s)));
  }
  negate() {
    return new _T(__privateGet(this, _e12).map(([e, s]) => [e, -s]));
  }
  concat(e) {
    const s = [];
    return Qt(s, __privateGet(this, _e12)), Qt(s, e.getInner()), new _T(s);
  }
  consolidate() {
    var _a5;
    if (__privateGet(this, _e12).length > 0) {
      const e = (_a5 = __privateGet(this, _e12)[0]) == null ? void 0 : _a5[0];
      if (Array.isArray(e) && e.length === 2) return __privateMethod(this, _T_instances, t_fn).call(this);
    }
    return __privateMethod(this, _T_instances, s_fn).call(this);
  }
  extend(e) {
    const s = e instanceof _T ? e.getInner() : e;
    Qt(__privateGet(this, _e12), s);
  }
  add(e, s) {
    s !== 0 && __privateGet(this, _e12).push([e, s]);
  }
  getInner() {
    return __privateGet(this, _e12);
  }
};
_e12 = new WeakMap();
_T_instances = new WeakSet();
t_fn = function() {
  const e = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), n = (r) => {
    if (r.length !== 2) throw new Error("Expected tuple of length 2");
    const [o, a] = r;
    return `${Jt.getStringId(o)}|${Jt.getStringId(a)}`;
  };
  for (const [r, o] of __privateGet(this, _e12)) {
    if (!Array.isArray(r) || r.length !== 2) return __privateMethod(this, _T_instances, s_fn).call(this);
    const [a, c] = r;
    if (typeof a != "string" && typeof a != "number") return __privateMethod(this, _T_instances, s_fn).call(this);
    let l;
    Array.isArray(c) && c.length === 2 ? l = n(c) : l = Jt.getStringId(c);
    const h = a + "|" + l;
    e.set(h, (e.get(h) || 0) + o), s.has(h) || s.set(h, r);
  }
  const i = [];
  for (const [r, o] of e) o !== 0 && i.push([s.get(r), o]);
  return new _T(i);
};
s_fn = function() {
  const e = new ja(() => 0), s = /* @__PURE__ */ new Map();
  let n = false, i = false, r = false;
  for (const [c, l] of __privateGet(this, _e12)) if (typeof c == "string") n = true;
  else if (typeof c == "number") i = true;
  else {
    r = true;
    break;
  }
  const o = r || n && i;
  for (const [c, l] of __privateGet(this, _e12)) {
    const h = o ? z(c) : c;
    o && !s.has(h) && s.set(h, c), e.update(h, (u) => u + l);
  }
  const a = [];
  for (const [c, l] of e.entries()) if (l !== 0) {
    const h = o ? s.get(c) : c;
    a.push([h, l]);
  }
  return new _T(a);
};
let T = _T;
class pc {
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
class te {
  constructor() {
    __privateAdd(this, _e14, []);
  }
  sendData(e) {
    e instanceof T || (e = new T(e));
    for (const s of __privateGet(this, _e14)) s.unshift(e);
  }
  newReader() {
    const e = [];
    return __privateGet(this, _e14).push(e), new pc(e);
  }
}
_e14 = new WeakMap();
class Pi {
  constructor(e, s, n) {
    this.id = e, this.inputs = s, this.output = n;
  }
  hasPendingWork() {
    return this.inputs.some((e) => !e.isEmpty());
  }
}
class Ae extends Pi {
  constructor(e, s, n) {
    super(e, [s], n), this.id = e;
  }
  inputMessages() {
    return this.inputs[0].drain();
  }
}
class yc extends Pi {
  constructor(e, s, n, i) {
    super(e, [s, n], i), this.id = e;
  }
  inputAMessages() {
    return this.inputs[0].drain();
  }
  inputBMessages() {
    return this.inputs[1].drain();
  }
}
class Ks extends Ae {
  run() {
    for (const e of this.inputMessages()) this.output.sendData(this.inner(e));
  }
}
class gc {
  constructor() {
    __privateAdd(this, _gc_instances);
    __privateAdd(this, _e15, []);
    __privateAdd(this, _t9, 0);
    __privateAdd(this, _s8, false);
  }
  getNextOperatorId() {
    return __privateMethod(this, _gc_instances, n_fn).call(this), __privateWrapper(this, _t9)._++;
  }
  newInput() {
    __privateMethod(this, _gc_instances, n_fn).call(this);
    const e = new te();
    return new mc(this, e);
  }
  addOperator(e) {
    __privateMethod(this, _gc_instances, n_fn).call(this), __privateGet(this, _e15).push(e);
  }
  finalize() {
    __privateMethod(this, _gc_instances, n_fn).call(this), __privateSet(this, _s8, true);
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
_gc_instances = new WeakSet();
n_fn = function() {
  if (__privateGet(this, _s8)) throw new Error("Graph already finalized");
};
class se {
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
class mc extends se {
  sendData(e) {
    this.writer.sendData(e);
  }
}
class vc extends Ks {
  constructor(e, s, n, i) {
    super(e, s, n);
    __privateAdd(this, _e17);
    __privateSet(this, _e17, i);
  }
  inner(e) {
    return e.map(__privateGet(this, _e17));
  }
}
_e17 = new WeakMap();
function $(t) {
  return (e) => {
    const s = new se(e.graph, new te()), n = new vc(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
const ze = /* @__PURE__ */ Symbol("NO_PREFIX");
class En extends Map {
  addValue(e, s) {
    if (s === 0) return this.size === 0;
    const n = Ve(e), i = this.get(n);
    if (vt(i)) {
      const [r, o] = i;
      if (Ve(r) !== n) throw new Error("Mismatching prefixes, this should never happen");
      if (r === e || z(r) === z(e)) {
        const c = o + s;
        c === 0 ? this.delete(n) : this.set(n, [e, c]);
      } else {
        const c = new $e();
        c.set(z(r), i), c.set(z(e), [e, s]), this.set(n, c);
      }
    } else i === void 0 ? this.set(n, [e, s]) : i.addValue(e, s) && this.delete(n);
    return this.size === 0;
  }
}
class $e extends Map {
  addValue(e, s) {
    if (s === 0) return this.size === 0;
    const n = z(e), i = this.get(n);
    if (i) {
      const [, r] = i, o = r + s;
      o === 0 ? this.delete(n) : this.set(n, [e, o]);
    } else this.set(n, [e, s]);
    return this.size === 0;
  }
}
const _ue = class _ue {
  constructor() {
    __privateAdd(this, _ue_instances);
    __privateAdd(this, _e18);
    __privateAdd(this, _t11, /* @__PURE__ */ new Map());
    __privateSet(this, _e18, /* @__PURE__ */ new Map());
  }
  static fromMultiSets(e) {
    const s = new _ue();
    for (const n of e) for (const [i, r] of n.getInner()) {
      const [o, a] = i;
      s.addValue(o, [a, r]);
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
    if (vt(s)) yield s;
    else {
      if (s === void 0) return;
      if (s instanceof $e) for (const n of s.values()) yield n;
      else for (const n of s.values()) if (vt(n)) yield n;
      else for (const i of n.values()) yield i;
    }
  }
  *entries() {
    for (const e of __privateGet(this, _e18).keys()) for (const s of this.getIterator(e)) yield [e, s];
  }
  *entriesIterators() {
    for (const e of __privateGet(this, _e18).keys()) yield [e, this.getIterator(e)];
  }
  addValue(e, s) {
    const [n, i] = s;
    if (i === 0) return;
    const r = (__privateGet(this, _t11).get(e) || 0) + i;
    r === 0 ? __privateGet(this, _t11).delete(e) : __privateGet(this, _t11).set(e, r);
    const o = __privateGet(this, _e18).get(e);
    if (o === void 0) {
      __privateGet(this, _e18).set(e, s);
      return;
    }
    if (vt(o)) {
      __privateMethod(this, _ue_instances, s_fn2).call(this, e, o, n, i);
      return;
    }
    if (o instanceof $e) {
      const a = Ve(n);
      if (a !== ze) {
        const c = new En();
        c.set(ze, o), c.set(a, s), __privateGet(this, _e18).set(e, c);
      } else o.addValue(n, i) && __privateGet(this, _e18).delete(e);
    } else o.addValue(n, i) && __privateGet(this, _e18).delete(e);
  }
  append(e) {
    for (const [s, n] of e.entries()) this.addValue(s, n);
  }
  join(e) {
    const s = [];
    if (this.size <= e.size) for (const [n, i] of this.entriesIterators()) {
      if (!e.has(n)) continue;
      const r = e.get(n);
      for (const [o, a] of i) for (const [c, l] of r) a !== 0 && l !== 0 && s.push([[n, [o, c]], a * l]);
    }
    else for (const [n, i] of e.entriesIterators()) {
      if (!this.has(n)) continue;
      const r = this.get(n);
      for (const [o, a] of i) for (const [c, l] of r) l !== 0 && a !== 0 && s.push([[n, [c, o]], l * a]);
    }
    return new T(s);
  }
};
_e18 = new WeakMap();
_t11 = new WeakMap();
_ue_instances = new WeakSet();
s_fn2 = function(e, s, n, i) {
  const [r, o] = s;
  if (r === n) {
    const l = o + i;
    l === 0 ? __privateGet(this, _e18).delete(e) : __privateGet(this, _e18).set(e, [n, l]);
    return;
  }
  const a = Ve(n), c = Ve(r);
  if (c === a && (r === n || z(r) === z(n))) {
    const l = o + i;
    l === 0 ? __privateGet(this, _e18).delete(e) : __privateGet(this, _e18).set(e, [n, l]);
    return;
  }
  if (c === ze && a === ze) {
    const l = new $e();
    l.set(z(r), s), l.set(z(n), [n, i]), __privateGet(this, _e18).set(e, l);
  } else {
    const l = new En();
    if (c === a) {
      const h = new $e();
      h.set(z(r), s), h.set(z(n), [n, i]), l.set(c, h);
    } else l.set(c, s), l.set(a, [n, i]);
    __privateGet(this, _e18).set(e, l);
  }
};
let ue = _ue;
function Ve(t) {
  return Array.isArray(t) && (typeof t[0] == "string" || typeof t[0] == "number" || typeof t[0] == "bigint") ? t[0] : ze;
}
function vt(t) {
  return Array.isArray(t);
}
class wc extends Ae {
  constructor(e, s, n, i) {
    super(e, s, n);
    __privateAdd(this, _e19, new ue());
    __privateAdd(this, _t12, new ue());
    __privateAdd(this, _s9);
    __privateSet(this, _s9, i);
  }
  run() {
    const e = /* @__PURE__ */ new Set();
    for (const n of this.inputMessages()) for (const [i, r] of n.getInner()) {
      const [o, a] = i;
      __privateGet(this, _e19).addValue(o, [a, r]), e.add(o);
    }
    const s = [];
    for (const n of e) {
      const i = __privateGet(this, _e19).get(n), r = __privateGet(this, _t12).get(n), o = __privateGet(this, _s9).call(this, i), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
      for (const [l, h] of o) {
        const u = a.get(l) ?? 0;
        a.set(l, u + h);
      }
      for (const [l, h] of r) {
        const u = c.get(l) ?? 0;
        c.set(l, u + h);
      }
      for (const [l, h] of c) a.has(l) || (s.push([[n, l], -h]), __privateGet(this, _t12).addValue(n, [l, -h]));
      for (const [l, h] of a) c.has(l) || h !== 0 && (s.push([[n, l], h]), __privateGet(this, _t12).addValue(n, [l, h]));
      for (const [l, h] of a) {
        const u = c.get(l);
        if (u !== void 0) {
          const d = h - u;
          d !== 0 && (s.push([[n, l], d]), __privateGet(this, _t12).addValue(n, [l, d]));
        }
      }
    }
    s.length > 0 && this.output.sendData(new T(s));
  }
}
_e19 = new WeakMap();
_t12 = new WeakMap();
_s9 = new WeakMap();
function Sc(t) {
  return (e) => {
    const s = new se(e.graph, new te()), n = new wc(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
function On(t) {
  return "pipe" in t;
}
function Mn(t, e = {}) {
  const s = Object.fromEntries(Object.entries(e).filter(([n, i]) => !On(i)));
  return Object.fromEntries(Object.entries(e).filter(([n, i]) => On(i))), (n) => {
    const i = "__original_key__";
    return n.pipe($((a) => {
      const c = t(a), l = Bs(c), h = {};
      h[i] = c;
      for (const [u, d] of Object.entries(s)) h[u] = d.preMap(a);
      return [l, h];
    })).pipe(Sc((a) => {
      var _a5, _b2;
      let c = 0;
      for (const [u, d] of a) c += d;
      if (c <= 0) return [];
      const l = {}, h = (_b2 = (_a5 = a[0]) == null ? void 0 : _a5[0]) == null ? void 0 : _b2[i];
      l[i] = h;
      for (const [u, d] of Object.entries(s)) {
        const p = a.map(([f, y]) => [f[u], y]);
        l[u] = d.reduce(p);
      }
      return [[l, 1]];
    })).pipe($(([a, c]) => {
      const l = c[i], h = {};
      Object.assign(h, l);
      for (const [u, d] of Object.entries(s)) d.postMap ? h[u] = d.postMap(c[u]) : h[u] = c[u];
      return [a, h];
    }));
  };
}
function bc(t = (e) => e) {
  return { preMap: (e) => t(e), reduce: (e) => {
    let s = 0;
    for (const [n, i] of e) s += n * i;
    return s;
  } };
}
function xc(t = (e) => e) {
  return { preMap: (e) => t(e) == null ? 0 : 1, reduce: (e) => {
    let s = 0;
    for (const [n, i] of e) s += n * i;
    return s;
  } };
}
function Pc(t = (e) => e) {
  return { preMap: (e) => ({ sum: t(e), count: 0 }), reduce: (e) => {
    let s = 0, n = 0;
    for (const [i, r] of e) s += i.sum * r, n += r;
    return { sum: s, count: n };
  }, postMap: (e) => e.sum / e.count };
}
function Rc(t) {
  const e = t ?? ((s) => s);
  return { preMap: (s) => e(s), reduce: (s) => {
    let n;
    for (const [i, r] of s) (!n || i && i < n) && (n = i);
    return n;
  } };
}
function Cc(t) {
  const e = t ?? ((s) => s);
  return { preMap: (s) => e(s), reduce: (s) => {
    let n;
    for (const [i, r] of s) (!n || i && i > n) && (n = i);
    return n;
  } };
}
const _c = { sum: bc, count: xc, avg: Pc, min: Rc, max: Cc };
class kc extends Ks {
  constructor(e, s, n, i) {
    super(e, s, n);
    __privateAdd(this, _e20);
    __privateSet(this, _e20, i);
  }
  inner(e) {
    return __privateGet(this, _e20).call(this, e), e;
  }
}
_e20 = new WeakMap();
function Ic(t) {
  return (e) => {
    const s = new se(e.graph, new te()), n = new kc(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
class Ec extends Ks {
  constructor(e, s, n, i) {
    super(e, s, n);
    __privateAdd(this, _e21);
    __privateSet(this, _e21, i);
  }
  inner(e) {
    return e.filter(__privateGet(this, _e21));
  }
}
_e21 = new WeakMap();
function he(t) {
  return (e) => {
    const s = new se(e.graph, new te()), n = new Ec(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
class Oc extends Ae {
  constructor(e, s, n, i) {
    super(e, s, n);
    __privateAdd(this, _e22);
    __privateSet(this, _e22, i);
  }
  run() {
    for (const e of this.inputMessages()) __privateGet(this, _e22).call(this, e), this.output.sendData(e);
  }
}
_e22 = new WeakMap();
function Mc(t) {
  return (e) => {
    const s = new se(e.graph, new te()), n = new Oc(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
class Tc extends Ae {
  run() {
    const e = this.inputMessages();
    if (e.length === 0) return;
    const s = new T();
    for (const i of e) s.extend(i);
    const n = s.consolidate();
    n.getInner().length > 0 && this.output.sendData(n);
  }
}
function Ac() {
  return (t) => {
    const e = new se(t.graph, new te()), s = new Tc(t.graph.getNextOperatorId(), t.connectReader(), e.writer);
    return t.graph.addOperator(s), e;
  };
}
class Lc extends yc {
  constructor(e, s, n, i, r = "inner") {
    super(e, s, n, i);
    __privateAdd(this, _e23, new ue());
    __privateAdd(this, _t13, new ue());
    __privateAdd(this, _s10);
    __privateSet(this, _s10, r);
  }
  run() {
    const e = ue.fromMultiSets(this.inputAMessages()), s = ue.fromMultiSets(this.inputBMessages());
    if (e.size === 0 && s.size === 0) return;
    const n = new T();
    __privateGet(this, _s10) !== "anti" && this.emitInnerResults(e, s, n), (__privateGet(this, _s10) === "left" || __privateGet(this, _s10) === "full" || __privateGet(this, _s10) === "anti") && this.emitLeftOuterResults(e, s, n), (__privateGet(this, _s10) === "right" || __privateGet(this, _s10) === "full") && this.emitRightOuterResults(e, s, n), __privateGet(this, _e23).append(e), __privateGet(this, _t13).append(s), n.getInner().length > 0 && this.output.sendData(n);
  }
  emitInnerResults(e, s, n) {
    e.size > 0 && n.extend(e.join(__privateGet(this, _t13))), s.size > 0 && n.extend(__privateGet(this, _e23).join(s)), e.size > 0 && s.size > 0 && n.extend(e.join(s));
  }
  emitLeftOuterResults(e, s, n) {
    if (e.size > 0) for (const [i, r] of e.entriesIterators()) {
      const o = __privateGet(this, _t13).getConsolidatedMultiplicity(i), a = s.getConsolidatedMultiplicity(i);
      if (o + a === 0) for (const [l, h] of r) h !== 0 && n.add([i, [l, null]], h);
    }
    if (s.size > 0) for (const i of s.getPresenceKeys()) {
      const r = __privateGet(this, _t13).getConsolidatedMultiplicity(i), o = s.getConsolidatedMultiplicity(i);
      if (o === 0) continue;
      const a = r + o;
      if (r === 0 == (a === 0)) continue;
      const c = r === 0;
      for (const [l, h] of __privateGet(this, _e23).getIterator(i)) h !== 0 && n.add([i, [l, null]], c ? -h : +h);
    }
  }
  emitRightOuterResults(e, s, n) {
    if (s.size > 0) for (const [i, r] of s.entriesIterators()) {
      const o = __privateGet(this, _e23).getConsolidatedMultiplicity(i), a = e.getConsolidatedMultiplicity(i);
      if (o + a === 0) for (const [l, h] of r) h !== 0 && n.add([i, [null, l]], h);
    }
    if (e.size > 0) for (const i of e.getPresenceKeys()) {
      const r = __privateGet(this, _e23).getConsolidatedMultiplicity(i), o = e.getConsolidatedMultiplicity(i);
      if (o === 0) continue;
      const a = r + o;
      if (r === 0 == (a === 0)) continue;
      const c = r === 0;
      for (const [l, h] of __privateGet(this, _t13).getIterator(i)) h !== 0 && n.add([i, [null, l]], c ? -h : +h);
    }
  }
}
_e23 = new WeakMap();
_t13 = new WeakMap();
_s10 = new WeakMap();
function Fc(t, e = "inner") {
  return (s) => {
    if (s.graph !== t.graph) throw new Error("Cannot join streams from different graphs");
    const n = new se(s.graph, new te()), i = new Lc(s.graph.getNextOperatorId(), s.connectReader(), t.connectReader(), n.writer, e);
    return s.graph.addOperator(i), n;
  };
}
class Bc extends Ae {
  constructor(e, s, n, i = (r) => r) {
    super(e, s, n);
    __privateAdd(this, _e24);
    __privateAdd(this, _t14);
    __privateSet(this, _e24, i), __privateSet(this, _t14, /* @__PURE__ */ new Map());
  }
  run() {
    var _a5;
    const e = /* @__PURE__ */ new Map();
    for (const n of this.inputMessages()) for (const [i, r] of n.getInner()) {
      const o = z(__privateGet(this, _e24).call(this, i)), c = (((_a5 = e.get(o)) == null ? void 0 : _a5[0]) ?? __privateGet(this, _t14).get(o) ?? 0) + r;
      e.set(o, [c, i]);
    }
    const s = [];
    for (const [n, [i, r]] of e.entries()) {
      const o = __privateGet(this, _t14).get(n) ?? 0;
      i === 0 ? __privateGet(this, _t14).delete(n) : __privateGet(this, _t14).set(n, i), o <= 0 && i > 0 ? s.push([[z(__privateGet(this, _e24).call(this, r)), r[1]], 1]) : o > 0 && i <= 0 && s.push([[z(__privateGet(this, _e24).call(this, r)), r[1]], -1]);
    }
    s.length > 0 && this.output.sendData(new T(s));
  }
}
_e24 = new WeakMap();
_t14 = new WeakMap();
function Kc(t = (e) => e) {
  return (e) => {
    const s = new se(e.graph, new te()), n = new Bc(e.graph.getNextOperatorId(), e.connectReader(), s.writer, t);
    return e.graph.addOperator(n), s;
  };
}
function Tn(t, e) {
  return [t, e];
}
function An(t) {
  return t[0];
}
function Ln(t) {
  return t[1];
}
function Dc(t) {
  return ([e, s], [n, i]) => {
    const r = t(s, i);
    return r !== 0 ? r : It(e, n);
  };
}
class Ri {
  constructor(e, s, n) {
    __privateAdd(this, _Ri_instances);
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
    const n = __privateGet(this, _s11), i = __privateGet(this, _n5) - __privateGet(this, _s11), r = [__privateGet(this, _s11), __privateGet(this, _n5) === 1 / 0 ? __privateGet(this, _s11) + this.size : __privateGet(this, _n5)];
    __privateSet(this, _s11, e ?? n), __privateSet(this, _n5, __privateGet(this, _s11) + (s ?? i));
    const o = [__privateGet(this, _s11), __privateGet(this, _n5) === 1 / 0 ? Math.max(__privateGet(this, _s11) + this.size, r[1]) : __privateGet(this, _n5)], { onlyInA: a, onlyInB: c } = Na(r, o), l = [];
    c.forEach((u) => {
      const d = __privateGet(this, _e25)[u];
      d && l.push(d);
    });
    const h = [];
    return a.forEach((u) => {
      const d = __privateGet(this, _e25)[u];
      d && h.push(d);
    }), { moveIns: l, moveOuts: h, changes: a.length + c.length > 0 };
  }
  insert(e) {
    const s = { moveIn: null, moveOut: null }, n = __privateMethod(this, _Ri_instances, i_fn2).call(this, e), i = n === 0 ? null : Ln(__privateGet(this, _e25)[n - 1]), r = n === __privateGet(this, _e25).length ? null : Ln(__privateGet(this, _e25)[n]), o = Hi(i, r), a = Tn(e, o);
    if (__privateGet(this, _e25).splice(n, 0, a), n < __privateGet(this, _n5)) {
      const c = Math.max(n, __privateGet(this, _s11));
      c < __privateGet(this, _e25).length && (s.moveIn = __privateGet(this, _e25)[c], __privateGet(this, _n5) < __privateGet(this, _e25).length && (s.moveOut = __privateGet(this, _e25)[__privateGet(this, _n5)]));
    }
    return s;
  }
  delete(e) {
    const s = { moveIn: null, moveOut: null }, n = __privateMethod(this, _Ri_instances, i_fn2).call(this, e), [i] = __privateGet(this, _e25).splice(n, 1);
    if (n < __privateGet(this, _n5)) {
      if (s.moveOut = i, n < __privateGet(this, _s11)) {
        const o = __privateGet(this, _s11) - 1;
        o < __privateGet(this, _e25).length ? s.moveOut = __privateGet(this, _e25)[o] : s.moveOut = null;
      }
      const r = __privateGet(this, _n5) - 1;
      r < __privateGet(this, _e25).length && (s.moveIn = __privateGet(this, _e25)[r]);
    }
    return s;
  }
}
_e25 = new WeakMap();
_t15 = new WeakMap();
_s11 = new WeakMap();
_n5 = new WeakMap();
_Ri_instances = new WeakSet();
i_fn2 = function(e) {
  return za(__privateGet(this, _e25), Tn(e, ""), (s, n) => __privateGet(this, _t15).call(this, An(s), An(n)));
};
class jc {
  constructor(e) {
    __privateAdd(this, _jc_instances);
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
    const { oldMultiplicity: i, newMultiplicity: r } = __privateMethod(this, _jc_instances, s_fn3).call(this, e, n);
    return i <= 0 && r > 0 ? __privateGet(this, _t16).insert([e, s]) : i > 0 && r <= 0 ? __privateGet(this, _t16).delete([e, s]) : { moveIn: null, moveOut: null };
  }
  move(e) {
    if (!(__privateGet(this, _t16) instanceof Ri)) throw new Error("Cannot move B+-tree implementation of TopK with fractional index");
    return __privateGet(this, _t16).move(e);
  }
}
_e26 = new WeakMap();
_t16 = new WeakMap();
_jc_instances = new WeakSet();
s_fn3 = function(e, s) {
  if (s === 0) {
    const r = __privateGet(this, _e26).get(e) ?? 0;
    return { oldMultiplicity: r, newMultiplicity: r };
  }
  const n = __privateGet(this, _e26).get(e) ?? 0, i = n + s;
  return i === 0 ? __privateGet(this, _e26).delete(e) : __privateGet(this, _e26).set(e, i), { oldMultiplicity: n, newMultiplicity: i };
};
function Fn(t, e) {
  if (t) {
    const [[s, n], i] = t;
    e.push([[s, [n, i]], 1]);
  }
}
function Bn(t, e) {
  if (t) {
    const [[s, n], i] = t;
    e.push([[s, [n, i]], -1]);
  }
}
class zc extends Ae {
  constructor(e, s, n, i, r) {
    var _a5, _b2;
    super(e, s, n);
    __privateAdd(this, _e27);
    const o = r.limit ?? 1 / 0, a = r.offset ?? 0, c = this.createTopK(a, o, Dc(i));
    __privateSet(this, _e27, new jc(c)), (_a5 = r.setSizeCallback) == null ? void 0 : _a5.call(r, () => __privateGet(this, _e27).size), (_b2 = r.setWindowFn) == null ? void 0 : _b2.call(r, this.moveTopK.bind(this));
  }
  createTopK(e, s, n) {
    return new Ri(e, s, n);
  }
  moveTopK({ offset: e, limit: s }) {
    const n = [], i = __privateGet(this, _e27).move({ offset: e, limit: s });
    i.moveIns.forEach((r) => Fn(r, n)), i.moveOuts.forEach((r) => Bn(r, n)), i.changes && this.output.sendData(new T(n));
  }
  run() {
    const e = [];
    for (const s of this.inputMessages()) for (const [n, i] of s.getInner()) {
      const [r, o] = n;
      this.processElement(r, o, i, e);
    }
    e.length > 0 && this.output.sendData(new T(e));
  }
  processElement(e, s, n, i) {
    const r = __privateGet(this, _e27).processElement(e, s, n);
    Fn(r.moveIn, i), Bn(r.moveOut, i);
  }
}
_e27 = new WeakMap();
function $c(t, e) {
  const s = e || {};
  return (n) => {
    const i = new se(n.graph, new te()), r = new zc(n.graph.getNextOperatorId(), n.connectReader(), i.writer, t, s);
    return n.graph.addOperator(r), i;
  };
}
function Nc(t, e, s) {
  const n = (s == null ? void 0 : s.limit) ?? 1 / 0, i = (s == null ? void 0 : s.offset) ?? 0, r = s == null ? void 0 : s.setSizeCallback, o = s == null ? void 0 : s.setWindowFn, a = (s == null ? void 0 : s.comparator) ?? ((c, l) => c === l ? 0 : c < l ? -1 : 1);
  return (c) => c.pipe(t((l, h) => a(e(l), e(h)), { limit: n, offset: i, setSizeCallback: r, setWindowFn: o }), Ac());
}
function Uc(t, e) {
  return Nc($c, t, e);
}
class Vc {
  constructor(e, s, n) {
    this._root = Yt, this._size = 0, this._maxNodeSize = n >= 4 ? Math.min(n, 256) : 32, this._compare = e, s && this.setPairs(s);
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
    this._root = Yt, this._size = 0;
  }
  get(e, s) {
    return this._root.get(e, s, this);
  }
  set(e, s, n) {
    this._root.isShared && (this._root = this._root.clone());
    const i = this._root.set(e, s, n, this);
    return i === true || i === false ? i : (this._root = new Ds([this._root, i]), true);
  }
  has(e) {
    return this.forRange(e, e, true, void 0) !== 0;
  }
  delete(e) {
    return this.editRange(e, e, true, Wc) !== 0;
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
    const s = this.nextHigherPair(e, Kn);
    return s && s[0];
  }
  nextLowerPair(e, s) {
    return s = s || [], e === void 0 ? this._root.maxPair(s) : this._root.getPairOrNextLower(e, this._compare, false, s);
  }
  nextLowerKey(e) {
    const s = this.nextLowerPair(e, Kn);
    return s && s[0];
  }
  setPairs(e, s) {
    let n = 0;
    for (const i of e) this.set(i[0], i[1], s) && n++;
    return n;
  }
  forRange(e, s, n, i, r) {
    const o = this._root.forRange(e, s, n, false, this, r || 0, i);
    return typeof o == "number" ? o : o.break;
  }
  editRange(e, s, n, i, r) {
    let o = this._root;
    o.isShared && (this._root = o = o.clone());
    try {
      const a = o.forRange(e, s, n, true, this, r || 0, i);
      return typeof a == "number" ? a : a.break;
    } finally {
      let a;
      for (; o.keys.length <= 1 && !o.isLeaf; ) a || (a = o.isShared), this._root = o = o.keys.length === 0 ? Yt : o.children[0];
      a && (o.isShared = true);
    }
  }
}
class tt {
  get isLeaf() {
    return this.children === void 0;
  }
  constructor(e = [], s) {
    this.keys = e, this.values = s || D, this.isShared = void 0;
  }
  maxKey() {
    return this.keys[this.keys.length - 1];
  }
  indexOf(e, s, n) {
    const i = this.keys;
    let r = 0, o = i.length, a = o >> 1;
    for (; r < o; ) {
      const c = n(i[a], e);
      if (c < 0) r = a + 1;
      else if (c > 0) o = a;
      else {
        if (c === 0) return a;
        if (e === e) return i.length;
        throw new Error("BTree: NaN was used as a key");
      }
      a = r + o >> 1;
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
    return new tt(this.keys.slice(0), e === D ? e : e.slice(0));
  }
  get(e, s, n) {
    const i = this.indexOf(e, -1, n._compare);
    return i < 0 ? s : this.values[i];
  }
  getPairOrNextLower(e, s, n, i) {
    const r = this.indexOf(e, -1, s), o = r < 0 ? ~r - 1 : n ? r : r - 1;
    if (o >= 0) return i[0] = this.keys[o], i[1] = this.values[o], i;
  }
  getPairOrNextHigher(e, s, n, i) {
    const r = this.indexOf(e, -1, s), o = r < 0 ? ~r : n ? r : r + 1, a = this.keys;
    if (o < a.length) return i[0] = a[o], i[1] = this.values[o], i;
  }
  set(e, s, n, i) {
    let r = this.indexOf(e, -1, i._compare);
    if (r < 0) {
      if (r = ~r, i._size++, this.keys.length < i._maxNodeSize) return this.insertInLeaf(r, e, s, i);
      {
        const o = this.splitOffRightSide();
        let a = this;
        return r > this.keys.length && (r -= this.keys.length, a = o), a.insertInLeaf(r, e, s, i), o;
      }
    } else return n !== false && (s !== void 0 && this.reifyValues(), this.keys[r] = e, this.values[r] = s), false;
  }
  reifyValues() {
    return this.values === D ? this.values = this.values.slice(0, this.keys.length) : this.values;
  }
  insertInLeaf(e, s, n, i) {
    if (this.keys.splice(e, 0, s), this.values === D) {
      for (; D.length < i._maxNodeSize; ) D.push(void 0);
      if (n === void 0) return true;
      this.values = D.slice(0, this.keys.length - 1);
    }
    return this.values.splice(e, 0, n), true;
  }
  takeFromRight(e) {
    let s = this.values;
    e.values === D ? s !== D && s.push(void 0) : (s = this.reifyValues(), s.push(e.values.shift())), this.keys.push(e.keys.shift());
  }
  takeFromLeft(e) {
    let s = this.values;
    e.values === D ? s !== D && s.unshift(void 0) : (s = this.reifyValues(), s.unshift(e.values.pop())), this.keys.unshift(e.keys.pop());
  }
  splitOffRightSide() {
    const e = this.keys.length >> 1, s = this.keys.splice(e), n = this.values === D ? D : this.values.splice(e);
    return new tt(s, n);
  }
  forRange(e, s, n, i, r, o, a) {
    const c = r._compare;
    let l, h;
    if (s === e) {
      if (!n || (h = (l = this.indexOf(e, -1, c)) + 1, l < 0)) return o;
    } else l = this.indexOf(e, 0, c), h = this.indexOf(s, -1, c), h < 0 ? h = ~h : n === true && h++;
    const u = this.keys, d = this.values;
    if (a !== void 0) for (let p = l; p < h; p++) {
      const f = u[p], y = a(f, d[p], o++);
      if (y !== void 0) {
        if (i === true) {
          if (f !== u[p] || this.isShared === true) throw new Error("BTree illegally changed or cloned in editRange");
          y.delete ? (this.keys.splice(p, 1), this.values !== D && this.values.splice(p, 1), r._size--, p--, h--) : y.hasOwnProperty("value") && (d[p] = y.value);
        }
        if (y.break !== void 0) return y;
      }
    }
    else o += h - l;
    return o;
  }
  mergeSibling(e, s) {
    if (this.keys.push.apply(this.keys, e.keys), this.values === D) {
      if (e.values === D) return;
      this.values = this.values.slice(0, this.keys.length);
    }
    this.values.push.apply(this.values, e.reifyValues());
  }
}
class Ds extends tt {
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
    const i = this.indexOf(e, 0, n._compare), r = this.children;
    return i < r.length ? r[i].get(e, s, n) : void 0;
  }
  getPairOrNextLower(e, s, n, i) {
    const r = this.indexOf(e, 0, s), o = this.children;
    if (r >= o.length) return this.maxPair(i);
    const a = o[r].getPairOrNextLower(e, s, n, i);
    return a === void 0 && r > 0 ? o[r - 1].maxPair(i) : a;
  }
  getPairOrNextHigher(e, s, n, i) {
    const r = this.indexOf(e, 0, s), o = this.children, a = o.length;
    if (r >= a) return;
    const c = o[r].getPairOrNextHigher(e, s, n, i);
    return c === void 0 && r < a - 1 ? o[r + 1].minPair(i) : c;
  }
  set(e, s, n, i) {
    const r = this.children, o = i._maxNodeSize, a = i._compare;
    let c = Math.min(this.indexOf(e, 0, a), r.length - 1), l = r[c];
    if (l.isShared && (r[c] = l = l.clone()), l.keys.length >= o) {
      let u;
      c > 0 && (u = r[c - 1]).keys.length < o && a(l.keys[0], e) < 0 ? (u.isShared && (r[c - 1] = u = u.clone()), u.takeFromRight(l), this.keys[c - 1] = u.maxKey()) : (u = r[c + 1]) !== void 0 && u.keys.length < o && a(l.maxKey(), e) < 0 && (u.isShared && (r[c + 1] = u = u.clone()), u.takeFromLeft(l), this.keys[c] = r[c].maxKey());
    }
    const h = l.set(e, s, n, i);
    if (h === false) return false;
    if (this.keys[c] = l.maxKey(), h === true) return true;
    if (this.keys.length < o) return this.insert(c + 1, h), true;
    {
      const u = this.splitOffRightSide();
      let d = this;
      return a(h.maxKey(), this.maxKey()) > 0 && (d = u, c -= this.keys.length), d.insert(c + 1, h), u;
    }
  }
  insert(e, s) {
    this.children.splice(e, 0, s), this.keys.splice(e, 0, s.maxKey());
  }
  splitOffRightSide() {
    const e = this.children.length >> 1;
    return new Ds(this.children.splice(e), this.keys.splice(e));
  }
  takeFromRight(e) {
    this.keys.push(e.keys.shift()), this.children.push(e.children.shift());
  }
  takeFromLeft(e) {
    this.keys.unshift(e.keys.pop()), this.children.unshift(e.children.pop());
  }
  forRange(e, s, n, i, r, o, a) {
    const c = r._compare, l = this.keys, h = this.children;
    let u = this.indexOf(e, 0, c), d = u;
    const p = Math.min(s === e ? u : this.indexOf(s, 0, c), l.length - 1);
    if (i) {
      if (d <= p) try {
        for (; d <= p; d++) {
          h[d].isShared && (h[d] = h[d].clone());
          const f = h[d].forRange(e, s, n, i, r, o, a);
          if (l[d] = h[d].maxKey(), typeof f != "number") return f;
          o = f;
        }
      } finally {
        const f = r._maxNodeSize >> 1;
        for (u > 0 && u--, d = p; d >= u; d--) h[d].keys.length <= f && (h[d].keys.length !== 0 ? this.tryMerge(d, r._maxNodeSize) : (l.splice(d, 1), h.splice(d, 1)));
        h.length !== 0 && h[0].keys.length === 0 && Hc(false, "emptiness bug");
      }
    } else for (; d <= p; d++) {
      const f = h[d].forRange(e, s, n, i, r, o, a);
      if (typeof f != "number") return f;
      o = f;
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
    const i = e.children;
    if (this.children.push.apply(this.children, i), e.isShared && !this.isShared) for (const r of i) r.isShared = true;
    this.tryMerge(n - 1, s);
  }
}
const D = [], qc = { delete: true }, Wc = () => qc, Yt = (function() {
  const t = new tt();
  return t.isShared = true, t;
})(), Kn = [];
function Hc(t, ...e) {
  throw e.unshift("B+ tree"), new Error(e.join(" "));
}
function Ci() {
  const t = /* @__PURE__ */ new Map();
  function e(s) {
    const n = s.join(".");
    if (t.has(n)) return t.get(n);
    const i = new Proxy({}, { get(r, o, a) {
      if (o === "__refProxy") return true;
      if (o === "__path") return s;
      if (o === "__type") return;
      if (typeof o == "symbol") return Reflect.get(r, o, a);
      const c = [...s, String(o)];
      return e(c);
    }, has(r, o) {
      return o === "__refProxy" || o === "__path" || o === "__type" ? true : Reflect.has(r, o);
    }, ownKeys(r) {
      return Reflect.ownKeys(r);
    }, getOwnPropertyDescriptor(r, o) {
      return o === "__refProxy" || o === "__path" || o === "__type" ? { enumerable: false, configurable: true } : Reflect.getOwnPropertyDescriptor(r, o);
    } });
    return t.set(n, i), i;
  }
  return e([]);
}
function ye(t) {
  const e = /* @__PURE__ */ new Map();
  let s = 0;
  function n(r) {
    const o = r.join(".");
    if (e.has(o)) return e.get(o);
    const a = new Proxy({}, { get(c, l, h) {
      if (l === "__refProxy") return true;
      if (l === "__path") return r;
      if (l === "__type") return;
      if (typeof l == "symbol") return Reflect.get(c, l, h);
      const u = [...r, String(l)];
      return n(u);
    }, has(c, l) {
      return l === "__refProxy" || l === "__path" || l === "__type" ? true : Reflect.has(c, l);
    }, ownKeys(c) {
      const l = ++s, h = `__SPREAD_SENTINEL__${r.join(".")}__${l}`;
      return Object.prototype.hasOwnProperty.call(c, h) || Object.defineProperty(c, h, { enumerable: true, configurable: true, value: true }), Reflect.ownKeys(c);
    }, getOwnPropertyDescriptor(c, l) {
      return l === "__refProxy" || l === "__path" || l === "__type" ? { enumerable: false, configurable: true } : Reflect.getOwnPropertyDescriptor(c, l);
    } });
    return e.set(o, a), a;
  }
  return new Proxy({}, { get(r, o, a) {
    if (o === "__refProxy") return true;
    if (o === "__path") return [];
    if (o === "__type") return;
    if (typeof o == "symbol") return Reflect.get(r, o, a);
    const c = String(o);
    if (t.includes(c)) return n([c]);
  }, has(r, o) {
    return o === "__refProxy" || o === "__path" || o === "__type" || typeof o == "string" && t.includes(o) ? true : Reflect.has(r, o);
  }, ownKeys(r) {
    return [...t, "__refProxy", "__path", "__type"];
  }, getOwnPropertyDescriptor(r, o) {
    if (o === "__refProxy" || o === "__path" || o === "__type") return { enumerable: false, configurable: true };
    if (typeof o == "string" && t.includes(o)) return { enumerable: true, configurable: true };
  } });
}
function Dn(t) {
  const e = ye(t), s = /* @__PURE__ */ new Map();
  function n(r) {
    const o = r.join(".");
    if (s.has(o)) return s.get(o);
    const a = new Proxy({}, { get(c, l, h) {
      if (l === "__refProxy") return true;
      if (l === "__path") return ["$selected", ...r];
      if (l === "__type") return;
      if (typeof l == "symbol") return Reflect.get(c, l, h);
      const u = [...r, String(l)];
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
  const i = n([]);
  return new Proxy(e, { get(r, o, a) {
    return o === "$selected" ? i : Reflect.get(r, o, a);
  }, has(r, o) {
    return o === "$selected" ? true : Reflect.has(r, o);
  }, ownKeys(r) {
    return [...Reflect.ownKeys(r), "$selected"];
  }, getOwnPropertyDescriptor(r, o) {
    return o === "$selected" ? { enumerable: true, configurable: true, value: i } : Reflect.getOwnPropertyDescriptor(r, o);
  } });
}
function A(t) {
  return Gc(t) ? new N(t.__path) : t && typeof t == "object" && "type" in t && (t.type === "func" || t.type === "ref" || t.type === "val" || t.type === "agg") ? t : new U(t);
}
function Gc(t) {
  return t && typeof t == "object" && t.__refProxy === true;
}
function us(t, e) {
  return new G("eq", [A(t), A(e)]);
}
function jn(t, e) {
  return new G("gt", [A(t), A(e)]);
}
function Qc(t, e) {
  return new G("gte", [A(t), A(e)]);
}
function hs(t, e) {
  return new G("lt", [A(t), A(e)]);
}
function fs(t, e, ...s) {
  const n = [t, e, ...s];
  return new G("and", n.map((i) => A(i)));
}
function Jc(t, e, ...s) {
  const n = [t, e, ...s];
  return new G("or", n.map((i) => A(i)));
}
function Yc(t, e) {
  return new G("in", [A(t), A(e)]);
}
class Xc {
  constructor(e, s, n, i) {
    this.lookupCount = 0, this.totalLookupTime = 0, this.lastUpdated = /* @__PURE__ */ new Date(), this.id = e, this.expression = s, this.compareOptions = Ls, this.name = n, this.initialize(i);
  }
  supports(e) {
    return this.supportedOperations.has(e);
  }
  matchesField(e) {
    return this.expression.type === "ref" && this.expression.path.length === e.length && this.expression.path.every((s, n) => s === e[n]);
  }
  matchesCompareOptions(e) {
    const s = { ...this.compareOptions, direction: void 0 }, n = { ...e, direction: void 0 };
    return Z(s, n);
  }
  matchesDirection(e) {
    return this.compareOptions.direction === e;
  }
  getStats() {
    return { entryCount: this.keyCount, lookupCount: this.lookupCount, averageLookupTime: this.lookupCount > 0 ? this.totalLookupTime / this.lookupCount : 0, lastUpdated: this.lastUpdated };
  }
  evaluateIndexExpression(e) {
    return Ts(this.expression)(e);
  }
  trackLookup(e) {
    const s = performance.now() - e;
    this.lookupCount++, this.totalLookupTime += s;
  }
  updateTimestamp() {
    this.lastUpdated = /* @__PURE__ */ new Date();
  }
}
class ds extends Xc {
  constructor(e, s, n, i) {
    super(e, s, n, i), this.supportedOperations = /* @__PURE__ */ new Set(["eq", "gt", "gte", "lt", "lte", "in"]), this.valueMap = /* @__PURE__ */ new Map(), this.indexedKeys = /* @__PURE__ */ new Set(), this.compareFn = os;
    const r = (i == null ? void 0 : i.compareFn) ?? os;
    this.compareFn = (o, a) => r(je(o), je(a)), (i == null ? void 0 : i.compareOptions) && (this.compareOptions = i.compareOptions), this.orderedEntries = new Vc(this.compareFn);
  }
  initialize(e) {
  }
  add(e, s) {
    let n;
    try {
      n = this.evaluateIndexExpression(s);
    } catch (r) {
      throw new Error(`Failed to evaluate index expression for key ${e}: ${r}`);
    }
    const i = oe(n);
    if (this.valueMap.has(i)) this.valueMap.get(i).add(e);
    else {
      const r = /* @__PURE__ */ new Set([e]);
      this.valueMap.set(i, r), this.orderedEntries.set(i, void 0);
    }
    this.indexedKeys.add(e), this.updateTimestamp();
  }
  remove(e, s) {
    let n;
    try {
      n = this.evaluateIndexExpression(s);
    } catch (r) {
      console.warn(`Failed to evaluate index expression for key ${e} during removal:`, r);
      return;
    }
    const i = oe(n);
    if (this.valueMap.has(i)) {
      const r = this.valueMap.get(i);
      r.delete(e), r.size === 0 && (this.valueMap.delete(i), this.orderedEntries.delete(i));
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
    let i;
    switch (e) {
      case "eq":
        i = this.equalityLookup(s);
        break;
      case "gt":
        i = this.rangeQuery({ from: s, fromInclusive: false });
        break;
      case "gte":
        i = this.rangeQuery({ from: s, fromInclusive: true });
        break;
      case "lt":
        i = this.rangeQuery({ to: s, toInclusive: false });
        break;
      case "lte":
        i = this.rangeQuery({ to: s, toInclusive: true });
        break;
      case "in":
        i = this.inArrayLookup(s);
        break;
      default:
        throw new Error(`Operation ${e} not supported by BTreeIndex`);
    }
    return this.trackLookup(n), i;
  }
  get keyCount() {
    return this.indexedKeys.size;
  }
  equalityLookup(e) {
    const s = oe(e);
    return new Set(this.valueMap.get(s) ?? []);
  }
  rangeQuery(e = {}) {
    const { from: s, to: n, fromInclusive: i = true, toInclusive: r = true } = e, o = /* @__PURE__ */ new Set(), a = "from" in e, c = "to" in e, l = a ? oe(s) : this.orderedEntries.minKey(), h = c ? oe(n) : this.orderedEntries.maxKey();
    return this.orderedEntries.forRange(l, h, r, (u, d) => {
      if (!i && this.compareFn(u, s) === 0) return;
      const p = this.valueMap.get(u);
      p && p.forEach((f) => o.add(f));
    }), o;
  }
  rangeQueryReversed(e = {}) {
    const { from: s, to: n, fromInclusive: i = true, toInclusive: r = true } = e, o = "from" in e, a = "to" in e;
    return this.rangeQuery({ from: a ? n : this.orderedEntries.maxKey(), to: o ? s : this.orderedEntries.minKey(), fromInclusive: r, toInclusive: i });
  }
  takeInternal(e, s, n, i, r = false) {
    const o = /* @__PURE__ */ new Set(), a = [];
    let c, l = n;
    for (; (c = s(l)) !== void 0 && a.length < e; ) {
      l = c[0];
      const h = this.valueMap.get(l);
      if (h && h.size > 0) {
        const u = Array.from(h).sort(It);
        r && u.reverse();
        for (const d of u) {
          if (a.length >= e) break;
          !o.has(d) && ((i == null ? void 0 : i(d)) ?? true) && (a.push(d), o.add(d));
        }
      }
    }
    return a;
  }
  take(e, s, n) {
    const i = (o) => this.orderedEntries.nextHigherPair(o), r = oe(s);
    return this.takeInternal(e, i, r, n);
  }
  takeFromStart(e, s) {
    const n = (i) => this.orderedEntries.nextHigherPair(i);
    return this.takeInternal(e, n, void 0, s);
  }
  takeReversed(e, s, n) {
    const i = (o) => this.orderedEntries.nextLowerPair(o), r = oe(s);
    return this.takeInternal(e, i, r, n, true);
  }
  takeReversedFromEnd(e, s) {
    const n = (i) => this.orderedEntries.nextLowerPair(i);
    return this.takeInternal(e, n, void 0, s, true);
  }
  inArrayLookup(e) {
    const s = /* @__PURE__ */ new Set();
    for (const n of e) {
      const i = oe(n), r = this.valueMap.get(i);
      r && r.forEach((o) => s.add(o));
    }
    return s;
  }
  get indexedKeysSet() {
    return this.indexedKeys;
  }
  get orderedEntriesArray() {
    return this.orderedEntries.keysArray().map((e) => [je(e), this.valueMap.get(e) ?? /* @__PURE__ */ new Set()]);
  }
  get orderedEntriesArrayReversed() {
    return this.takeReversedFromEnd(this.orderedEntries.size).map((e) => [je(e), this.valueMap.get(e) ?? /* @__PURE__ */ new Set()]);
  }
  get valueMapData() {
    const e = /* @__PURE__ */ new Map();
    for (const [s, n] of this.valueMap) e.set(je(s), n);
    return e;
  }
}
function _i(t) {
  return t.config.autoIndex === "eager";
}
function jt(t, e, s, n, i) {
  if (!_i(s)) return;
  const r = n ?? { ...Ls, ...s.compareOptions };
  if (!Array.from(s.indexes.values()).find((a) => a.matchesField(e) && a.matchesCompareOptions(r))) try {
    s.createIndex((a) => {
      let c = a;
      for (const l of e) c = c[l];
      return c;
    }, { name: `auto:${e.join(".")}`, indexType: ds, options: i ? { compareFn: i, compareOptions: r } : {} });
  } catch (a) {
    console.warn(`${s.id ? `[${s.id}] ` : ""}Failed to create auto-index for field path "${e.join(".")}":`, a);
  }
}
function Zc(t, e) {
  if (!_i(e)) return;
  const s = el(t);
  for (const { fieldName: n, fieldPath: i } of s) jt(n, i, e);
}
function el(t) {
  const e = [];
  function s(n) {
    if (n.type !== "func") return;
    const i = n;
    if (i.name === "and") {
      for (const l of i.args) s(l);
      return;
    }
    if (!["eq", "gt", "gte", "lt", "lte", "in"].includes(i.name) || i.args.length < 1 || i.args[0].type !== "ref") return;
    const a = i.args[0].path;
    if (a.length === 0) return;
    const c = a.join("_");
    e.push({ fieldName: c, fieldPath: a });
  }
  return s(t), e;
}
const { sum: tl, count: sl, avg: nl, min: il, max: rl } = _c;
function ol(t, e) {
  const s = /* @__PURE__ */ new Map(), n = [...t];
  if (!e) return { selectToGroupByIndex: s, groupByExpressions: n };
  for (const [i, r] of Object.entries(e)) {
    if (r.type === "agg") continue;
    const o = n.findIndex((a) => Et(r, a));
    if (o === -1) throw new fa(i);
    s.set(i, o);
  }
  return { selectToGroupByIndex: s, groupByExpressions: n };
}
function zn(t, e, s, n, i) {
  if (e.length === 0) {
    const l = {};
    if (n) {
      for (const [u, d] of Object.entries(n)) if (d.type === "agg") {
        const p = d;
        l[u] = $n(p);
      }
    }
    const h = () => ({ __singleGroup: true });
    if (t = t.pipe(Mn(h, l)), t = t.pipe($(([, u]) => {
      const p = { ...u.$selected || {} };
      if (n) for (const [f, y] of Object.entries(n)) y.type === "agg" && (p[f] = u[f]);
      return ["single_group", { ...u, $selected: p }];
    })), s && s.length > 0) for (const u of s) {
      const d = mn(u), p = Ot(d, n || {}, "$selected"), f = V(p);
      t = t.pipe(he(([, y]) => {
        const g = { $selected: y.$selected };
        return Ee(f(g));
      }));
    }
    if (i && i.length > 0) for (const u of i) t = t.pipe(he(([, d]) => {
      const p = { $selected: d.$selected };
      return Ee(u(p));
    }));
    return t;
  }
  const r = ol(e, n), o = e.map((l) => V(l)), a = ([, l]) => {
    const h = { ...l };
    delete h.$selected;
    const u = {};
    for (let d = 0; d < e.length; d++) {
      const p = o[d], f = p(h);
      u[`__key_${d}`] = f;
    }
    return u;
  }, c = {};
  if (n) {
    for (const [l, h] of Object.entries(n)) if (h.type === "agg") {
      const u = h;
      c[l] = $n(u);
    }
  }
  if (t = t.pipe(Mn(a, c)), t = t.pipe($(([, l]) => {
    const h = l.$selected || {}, u = {};
    if (n) for (const [p, f] of Object.entries(n)) if (f.type !== "agg") {
      const y = r.selectToGroupByIndex.get(p);
      y !== void 0 ? u[p] = l[`__key_${y}`] : u[p] = h[p];
    } else u[p] = l[p];
    else for (let p = 0; p < e.length; p++) u[`__key_${p}`] = l[`__key_${p}`];
    let d;
    if (e.length === 1) d = l.__key_0;
    else {
      const p = [];
      for (let f = 0; f < e.length; f++) p.push(l[`__key_${f}`]);
      d = Bs(p);
    }
    return [d, { ...l, $selected: u }];
  })), s && s.length > 0) for (const l of s) {
    const h = mn(l), u = Ot(h, n || {}), d = V(u);
    t = t.pipe(he(([, p]) => {
      const f = { $selected: p.$selected };
      return d(f);
    }));
  }
  if (i && i.length > 0) for (const l of i) t = t.pipe(he(([, h]) => {
    const u = { $selected: h.$selected };
    return Ee(l(u));
  }));
  return t;
}
function Et(t, e) {
  var _a5, _b2, _c3, _d2;
  if (!t || !e || t.type !== e.type) return false;
  switch (t.type) {
    case "ref":
      return !t.path || !e.path || t.path.length !== e.path.length ? false : t.path.every((s, n) => s === e.path[n]);
    case "val":
      return t.value === e.value;
    case "func":
      return t.name === e.name && ((_a5 = t.args) == null ? void 0 : _a5.length) === ((_b2 = e.args) == null ? void 0 : _b2.length) && (t.args || []).every((s, n) => Et(s, e.args[n]));
    case "agg":
      return t.name === e.name && ((_c3 = t.args) == null ? void 0 : _c3.length) === ((_d2 = e.args) == null ? void 0 : _d2.length) && (t.args || []).every((s, n) => Et(s, e.args[n]));
    default:
      return false;
  }
}
function $n(t) {
  const e = V(t.args[0]), s = ([, r]) => {
    const o = e(r);
    return typeof o == "number" ? o : o != null ? Number(o) : 0;
  }, n = ([, r]) => {
    const o = e(r);
    return typeof o == "number" || typeof o == "string" || typeof o == "bigint" || o instanceof Date ? o : o != null ? Number(o) : 0;
  }, i = ([, r]) => e(r);
  switch (t.name.toLowerCase()) {
    case "sum":
      return tl(s);
    case "count":
      return sl(i);
    case "avg":
      return nl(s);
    case "min":
      return il(n);
    case "max":
      return rl(n);
    default:
      throw new da(t.name);
  }
}
function Ot(t, e, s = "$selected") {
  switch (t.type) {
    case "agg": {
      const n = t;
      for (const [i, r] of Object.entries(e)) if (r.type === "agg" && al(n, r)) return new N([s, i]);
      throw new pa(n.name);
    }
    case "func": {
      const n = t, i = n.args.map((r) => Ot(r, e));
      return new G(n.name, i);
    }
    case "ref":
      return t;
    case "val":
      return t;
    default:
      throw new ya(t.type);
  }
}
function al(t, e) {
  return t.name === e.name && t.args.length === e.args.length && t.args.every((s, n) => Et(s, e.args[n]));
}
function cl(t, e, s, n, i, r, o, a, c) {
  const l = s.map((f) => {
    const y = Ot(f.expression, n, "$selected");
    return { compiledExpression: V(y), compareOptions: ps(f, i) };
  }), h = (f) => {
    const y = f;
    return s.length > 1 ? l.map((g) => g.compiledExpression(y)) : s.length === 1 ? l[0].compiledExpression(y) : null;
  }, u = (f, y) => {
    if (s.length > 1) {
      const g = f, v = y;
      for (let S = 0; S < s.length; S++) {
        const b = l[S], R = kt(b.compareOptions)(g[S], v[S]);
        if (R !== 0) return R;
      }
      return g.length - v.length;
    }
    if (s.length === 1) {
      const g = l[0];
      return kt(g.compareOptions)(f, y);
    }
    return os(f, y);
  };
  let d, p;
  if (a) {
    let f, y, g, v = t.from.alias;
    const S = s[0], b = S.expression;
    if (b.type === "ref") {
      const m = Ze(t, b, i);
      if (m) {
        y = m.collection;
        const R = m.path[0], k = ps(S, y);
        R && jt(R, m.path, y, k, u), g = V(new N(m.path), true), f = rt(y, m.path, k), (f == null ? void 0 : f.supports("gt")) || (f = void 0), v = b.path.length > 1 ? String(b.path[0]) : t.from.alias;
      }
    }
    if (g) {
      const R = s.every((w) => w.expression.type === "ref") ? s.map((w) => {
        const P = w.expression, C = Ze(t, P, i);
        return V(C ? new N(C.path) : w.expression, true);
      }) : void 0;
      p = { alias: v, offset: c ?? 0, limit: a, comparator: (w, P) => {
        if (s.length === 1) {
          const C = w && g(w), E = P && g(P);
          return u(C, E);
        }
        if (R) {
          const C = (E) => E && R.map((I) => I(E));
          return u(C(w), C(P));
        }
        return 0;
      }, valueExtractorForRawRow: (w) => {
        if (s.length === 1) return g(w);
        if (R) return R.map((P) => P(w));
      }, firstColumnValueExtractor: g, index: f, orderBy: s };
      const x = (y == null ? void 0 : y.id) ?? i.id;
      r[x] = p, f && (d = (w) => {
        r[x].dataNeeded = () => {
          const P = w();
          return Math.max(0, p.limit - P);
        };
      });
    }
  }
  return e.pipe(Uc(h, { limit: a, offset: c, comparator: u, setSizeCallback: d, setWindowFn: (f) => {
    o((y) => {
      f(y), p && (p.offset = y.offset ?? p.offset, p.limit = y.limit ?? p.limit);
    });
  } }));
}
function ps(t, e) {
  return t.compareOptions.stringSort !== void 0 ? t.compareOptions : { ...e.compareOptions, direction: t.compareOptions.direction, nulls: t.compareOptions.nulls };
}
function ll(t, e = {}) {
  const s = (n) => {
    const i = [];
    for (const [r, o] of t.entries()) ((n == null ? void 0 : n(o)) ?? true) && i.push({ type: "insert", key: r, value: o });
    return i;
  };
  if (e.limit !== void 0 && !e.orderBy) throw new Error("limit cannot be used without orderBy");
  if (e.orderBy) {
    const n = e.where ? qe(e.where) : void 0, i = hl(t, e.orderBy, e.limit, n, e.optimizedOnly);
    if (i === void 0) return;
    const r = [];
    for (const o of i) {
      const a = t.get(o);
      a !== void 0 && r.push({ type: "insert", key: o, value: a });
    }
    return r;
  }
  if (!e.where) return s();
  try {
    const n = e.where, i = Aa(n, t);
    if (i.canOptimize) {
      const r = [];
      for (const o of i.matchingKeys) {
        const a = t.get(o);
        a !== void 0 && r.push({ type: "insert", key: o, value: a });
      }
      return r;
    } else {
      if (e.optimizedOnly) return;
      const r = qe(n);
      return s(r);
    }
  } catch (n) {
    console.warn(`${t.id ? `[${t.id}] ` : ""}Error processing where clause, falling back to full scan:`, n);
    const i = qe(e.where);
    return e.optimizedOnly ? void 0 : s(i);
  }
}
function qe(t) {
  const e = Ts(t);
  return (s) => {
    try {
      const n = e(s);
      return Ee(n);
    } catch {
      return false;
    }
  };
}
function ul(t, e) {
  const s = qe(e.whereExpression);
  return (n) => {
    const i = [];
    for (const r of n) if (r.type === "insert") s(r.value) && i.push(r);
    else if (r.type === "update") {
      const o = s(r.value), a = r.previousValue ? s(r.previousValue) : false;
      o && a ? i.push(r) : o && !a ? i.push({ ...r, type: "insert" }) : !o && a && i.push({ ...r, type: "delete", value: r.previousValue });
    } else s(r.value) && i.push(r);
    (i.length > 0 || n.length === 0) && t(i);
  };
}
function hl(t, e, s, n, i) {
  if (e.length === 1) {
    const c = e[0], l = c.expression;
    if (l.type === "ref") {
      const u = l.path, d = ps(c, t);
      jt(u[0], u, t, d);
      const p = rt(t, u, d);
      if (p && p.supports("gt")) {
        const f = (y) => {
          const g = t.get(y);
          return g === void 0 ? false : (n == null ? void 0 : n(g)) ?? true;
        };
        return p.takeFromStart(s ?? p.keyCount, f);
      }
    }
  }
  if (i) return;
  const r = [];
  for (const [c, l] of t.entries()) ((n == null ? void 0 : n(l)) ?? true) && r.push({ key: c, value: l });
  const o = (c, l) => {
    for (const h of e) {
      const u = kt(h.compareOptions), d = Nn(c.value, h.expression), p = Nn(l.value, h.expression), f = u(d, p);
      if (f !== 0) return f;
    }
    return 0;
  };
  r.sort(o);
  const a = r.map((c) => c.key);
  return s !== void 0 ? a.slice(0, s) : a;
}
function Nn(t, e) {
  if (e.type === "ref") {
    const s = e;
    let n = t;
    for (const i of s.path) n = n == null ? void 0 : n[i];
    return n;
  } else return e.type === "val" ? e.value : Ts(e)(t);
}
class Un {
  constructor(e) {
    this.map = /* @__PURE__ */ new Map(), this.sortedKeys = [], this.comparator = e;
  }
  indexOf(e, s) {
    let n = 0, i = this.sortedKeys.length;
    if (!this.comparator) {
      for (; n < i; ) {
        const r = Math.floor((n + i) / 2), o = this.sortedKeys[r], a = It(e, o);
        if (a < 0) i = r;
        else if (a > 0) n = r + 1;
        else return r;
      }
      return n;
    }
    for (; n < i; ) {
      const r = Math.floor((n + i) / 2), o = this.sortedKeys[r], a = this.map.get(o), c = this.comparator(s, a);
      if (c < 0) i = r;
      else if (c > 0) n = r + 1;
      else {
        const l = It(e, o);
        if (l < 0) i = r;
        else if (l > 0) n = r + 1;
        else return r;
      }
    }
    return n;
  }
  set(e, s) {
    if (this.map.has(e)) {
      const i = this.map.get(e), r = this.indexOf(e, i);
      this.sortedKeys.splice(r, 1);
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
class fl {
  constructor(e) {
    this.pendingSyncedTransactions = [], this.syncedMetadata = /* @__PURE__ */ new Map(), this.optimisticUpserts = /* @__PURE__ */ new Map(), this.optimisticDeletes = /* @__PURE__ */ new Set(), this.size = 0, this.syncedKeys = /* @__PURE__ */ new Set(), this.preSyncVisibleState = /* @__PURE__ */ new Map(), this.recentlySyncedKeys = /* @__PURE__ */ new Set(), this.hasReceivedFirstCommit = false, this.isCommittingSyncTransactions = false, this.commitPendingTransactions = () => {
      var _a5;
      let s = false;
      for (const a of this.transactions.values()) if (a.state === "persisting") {
        s = true;
        break;
      }
      const { committedSyncedTransactions: n, uncommittedSyncedTransactions: i, hasTruncateSync: r, hasImmediateSync: o } = this.pendingSyncedTransactions.reduce((a, c) => (c.committed ? (a.committedSyncedTransactions.push(c), c.truncate && (a.hasTruncateSync = true), c.immediate && (a.hasImmediateSync = true)) : a.uncommittedSyncedTransactions.push(c), a), { committedSyncedTransactions: [], uncommittedSyncedTransactions: [], hasTruncateSync: false, hasImmediateSync: false });
      if (!s || r || o) {
        this.isCommittingSyncTransactions = true;
        const a = r ? (_a5 = n.find((p) => p.truncate)) == null ? void 0 : _a5.optimisticSnapshot : null, c = /* @__PURE__ */ new Set();
        for (const p of n) for (const f of p.operations) c.add(f.key);
        let l = this.preSyncVisibleState;
        if (l.size === 0) {
          l = /* @__PURE__ */ new Map();
          for (const p of c) {
            const f = this.get(p);
            f !== void 0 && l.set(p, f);
          }
        }
        const h = [], u = this.config.sync.rowUpdateMode || "partial";
        for (const p of n) {
          if (p.truncate) {
            const f = /* @__PURE__ */ new Set([...this.syncedData.keys(), ...(a == null ? void 0 : a.upserts.keys()) || []]);
            for (const y of f) {
              if (a == null ? void 0 : a.deletes.has(y)) continue;
              const g = (a == null ? void 0 : a.upserts.get(y)) || this.syncedData.get(y);
              g !== void 0 && h.push({ type: "delete", key: y, value: g });
            }
            this.syncedData.clear(), this.syncedMetadata.clear(), this.syncedKeys.clear();
            for (const y of c) l.delete(y);
            this._events.emit("truncate", { type: "truncate", collection: this.collection });
          }
          for (const f of p.operations) {
            const y = f.key;
            switch (this.syncedKeys.add(y), f.type) {
              case "insert":
                this.syncedMetadata.set(y, f.metadata);
                break;
              case "update":
                this.syncedMetadata.set(y, Object.assign({}, this.syncedMetadata.get(y), f.metadata));
                break;
              case "delete":
                this.syncedMetadata.delete(y);
                break;
            }
            switch (f.type) {
              case "insert":
                this.syncedData.set(y, f.value);
                break;
              case "update": {
                if (u === "partial") {
                  const g = Object.assign({}, this.syncedData.get(y), f.value);
                  this.syncedData.set(y, g);
                } else this.syncedData.set(y, f.value);
                break;
              }
              case "delete":
                this.syncedData.delete(y);
                break;
            }
          }
        }
        if (r) {
          const p = /* @__PURE__ */ new Set();
          for (const g of n) for (const v of g.operations) (v.type === "insert" || v.type === "update") && p.add(v.key);
          const f = new Map(a.upserts), y = new Set(a.deletes);
          for (const [g, v] of f) if (!y.has(g)) if (p.has(g)) {
            let S = false;
            for (let b = h.length - 1; b >= 0; b--) {
              const m = h[b];
              if (m.key === g && m.type === "insert") {
                m.value = v, S = true;
                break;
              }
            }
            S || h.push({ type: "insert", key: g, value: v });
          } else h.push({ type: "insert", key: g, value: v });
          if (h.length > 0 && y.size > 0) {
            const g = [];
            for (const v of h) v.type === "insert" && y.has(v.key) || g.push(v);
            h.length = 0, h.push(...g);
          }
          this.lifecycle.status !== "ready" && this.lifecycle.markReady();
        }
        if (this.optimisticUpserts.clear(), this.optimisticDeletes.clear(), this.isCommittingSyncTransactions = false, r && a) {
          for (const [p, f] of a.upserts) this.optimisticUpserts.set(p, f);
          for (const p of a.deletes) this.optimisticDeletes.add(p);
        }
        for (const p of this.transactions.values()) if (!["completed", "failed"].includes(p.state)) {
          for (const f of p.mutations) if (this.isThisCollection(f.collection) && f.optimistic) switch (f.type) {
            case "insert":
            case "update":
              this.optimisticUpserts.set(f.key, f.modified), this.optimisticDeletes.delete(f.key);
              break;
            case "delete":
              this.optimisticUpserts.delete(f.key), this.optimisticDeletes.add(f.key);
              break;
          }
        }
        const d = /* @__PURE__ */ new Map();
        for (const p of this.transactions.values()) if (p.state === "completed") for (const f of p.mutations) f.optimistic && this.isThisCollection(f.collection) && c.has(f.key) && d.set(f.key, { type: f.type, value: f.modified });
        for (const p of c) {
          const f = l.get(p), y = this.get(p), g = d.get(p);
          let v = false;
          g && (g.type === "delete" && f !== void 0 && y === void 0 && Z(g.value, f) || y !== void 0 && Z(g.value, y)) && (v = true), v || (f === void 0 && y !== void 0 ? h.push({ type: "insert", key: p, value: y }) : f !== void 0 && y === void 0 ? h.push({ type: "delete", key: p, value: f }) : f !== void 0 && y !== void 0 && !Z(f, y) && h.push({ type: "update", key: p, value: y, previousValue: f }));
        }
        this.size = this.calculateSize(), h.length > 0 && this.indexes.updateIndexes(h), this.changes.emitEvents(h, true), this.pendingSyncedTransactions = i, this.preSyncVisibleState.clear(), Promise.resolve().then(() => {
          this.recentlySyncedKeys.clear();
        }), this.hasReceivedFirstCommit || (this.hasReceivedFirstCommit = true);
      }
    }, this.config = e, this.transactions = new Un((s, n) => s.compareCreatedAt(n)), this.syncedData = new Un(e.compare);
  }
  setDeps(e) {
    this.collection = e.collection, this.lifecycle = e.lifecycle, this.changes = e.changes, this.indexes = e.indexes, this._events = e.events;
  }
  get(e) {
    const { optimisticDeletes: s, optimisticUpserts: n, syncedData: i } = this;
    if (!s.has(e)) return n.has(e) ? n.get(e) : i.get(e);
  }
  has(e) {
    const { optimisticDeletes: s, optimisticUpserts: n, syncedData: i } = this;
    return s.has(e) ? false : n.has(e) ? true : i.has(e);
  }
  *keys() {
    const { syncedData: e, optimisticDeletes: s, optimisticUpserts: n } = this;
    for (const i of e.keys()) s.has(i) || (yield i);
    for (const i of n.keys()) !e.has(i) && !s.has(i) && (yield i);
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
    for (const [n, i] of this.entries()) e(i, n, s++);
  }
  map(e) {
    const s = [];
    let n = 0;
    for (const [i, r] of this.entries()) s.push(e(r, i, n++));
    return s;
  }
  isThisCollection(e) {
    return e === this.collection;
  }
  recomputeOptimisticState(e = false) {
    if (this.isCommittingSyncTransactions && !e) return;
    const s = new Map(this.optimisticUpserts), n = new Set(this.optimisticDeletes);
    this.optimisticUpserts.clear(), this.optimisticDeletes.clear();
    const i = [];
    for (const a of this.transactions.values()) ["completed", "failed"].includes(a.state) || i.push(a);
    for (const a of i) for (const c of a.mutations) if (this.isThisCollection(c.collection) && c.optimistic) switch (c.type) {
      case "insert":
      case "update":
        this.optimisticUpserts.set(c.key, c.modified), this.optimisticDeletes.delete(c.key);
        break;
      case "delete":
        this.optimisticUpserts.delete(c.key), this.optimisticDeletes.add(c.key);
        break;
    }
    this.size = this.calculateSize();
    const r = [];
    this.collectOptimisticChanges(s, n, r);
    const o = r.filter((a) => !!(!this.recentlySyncedKeys.has(a.key) || e));
    if (this.pendingSyncedTransactions.length > 0 && !e) {
      const a = /* @__PURE__ */ new Set();
      for (const l of this.pendingSyncedTransactions) for (const h of l.operations) a.add(h.key);
      const c = o.filter((l) => !(l.type === "delete" && a.has(l.key) && !i.some((u) => u.mutations.some((d) => this.isThisCollection(d.collection) && d.key === l.key))));
      c.length > 0 && this.indexes.updateIndexes(c), this.changes.emitEvents(c, e);
    } else o.length > 0 && this.indexes.updateIndexes(o), this.changes.emitEvents(o, e);
  }
  calculateSize() {
    const e = this.syncedData.size, s = Array.from(this.optimisticDeletes).filter((i) => this.syncedData.has(i) && !this.optimisticUpserts.has(i)).length, n = Array.from(this.optimisticUpserts.keys()).filter((i) => !this.syncedData.has(i)).length;
    return e - s + n;
  }
  collectOptimisticChanges(e, s, n) {
    const i = /* @__PURE__ */ new Set([...e.keys(), ...this.optimisticUpserts.keys(), ...s, ...this.optimisticDeletes]);
    for (const r of i) {
      const o = this.get(r), a = this.getPreviousValue(r, e, s);
      a !== void 0 && o === void 0 ? n.push({ type: "delete", key: r, value: a }) : a === void 0 && o !== void 0 ? n.push({ type: "insert", key: r, value: o }) : a !== void 0 && o !== void 0 && a !== o && n.push({ type: "update", key: r, value: o, previousValue: a });
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
class ki {
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
    const n = this.on(e, (i) => {
      s(i), n();
    });
    return n;
  }
  off(e, s) {
    var _a5;
    (_a5 = this.listeners.get(e)) == null ? void 0 : _a5.delete(s);
  }
  waitFor(e, s) {
    return new Promise((n, i) => {
      let r;
      const o = this.on(e, (a) => {
        r && (clearTimeout(r), r = void 0), n(a), o();
      });
      s && (r = setTimeout(() => {
        r = void 0, o(), i(new Error(`Timeout waiting for event ${String(e)}`));
      }, s));
    });
  }
  emitInner(e, s) {
    var _a5;
    (_a5 = this.listeners.get(e)) == null ? void 0 : _a5.forEach((n) => {
      try {
        n(s);
      } catch (i) {
        queueMicrotask(() => {
          throw i;
        });
      }
    });
  }
  clearListeners() {
    this.listeners.clear();
  }
}
function dl(t, e) {
  if (e.length === 0 || t.length === 0) return;
  if (t.length === 1) {
    const { expression: n, compareOptions: i } = t[0];
    return (i.direction === "asc" ? jn : hs)(n, new U(e[0]));
  }
  const s = [];
  for (let n = 0; n < t.length && n < e.length; n++) {
    const i = t[n], r = e[n], o = [];
    for (let l = 0; l < n; l++) {
      const h = t[l], u = e[l];
      o.push(us(h.expression, new U(u)));
    }
    const c = (i.compareOptions.direction === "asc" ? jn : hs)(i.expression, new U(r));
    if (o.length === 0) s.push(c);
    else {
      const l = [...o, c];
      s.push(l.reduce((h, u) => fs(h, u)));
    }
  }
  return s.length === 1 ? s[0] : s.reduce((n, i) => Jc(n, i));
}
class pl extends ki {
  constructor(e, s, n) {
    super(), this.collection = e, this.callback = s, this.options = n, this.loadedInitialState = false, this.skipFiltering = false, this.snapshotSent = false, this.loadedSubsets = [], this.sentKeys = /* @__PURE__ */ new Set(), this.limitedSnapshotRowCount = 0, this._status = "ready", this.pendingLoadSubsetPromises = /* @__PURE__ */ new Set(), this.isBufferingForTruncate = false, this.truncateBuffer = [], this.pendingTruncateRefetches = /* @__PURE__ */ new Set(), n.onUnsubscribe && this.on("unsubscribed", (r) => n.onUnsubscribe(r)), n.whereExpression && Zc(n.whereExpression, this.collection);
    const i = (r) => {
      s(r), this.trackSentKeys(r);
    };
    this.callback = i, this.filteredCallback = n.whereExpression ? ul(this.callback, n) : this.callback, this.truncateCleanup = this.collection.on("truncate", () => {
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
          const i = this.collection._sync.loadSubset(n);
          this.loadedSubsets.push(n), this.trackLoadSubsetPromise(i), i instanceof Promise && (this.pendingTruncateRefetches.add(i), i.catch(() => {
          }).finally(() => {
            this.pendingTruncateRefetches.delete(i), this.checkTruncateRefetchComplete();
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
          const l = s.where, h = fs(l, c);
          s.where = h;
        } else s.where = c;
      }
    } else this.loadedInitialState = true;
    const n = { where: s.where, subscription: this, orderBy: e == null ? void 0 : e.orderBy, limit: e == null ? void 0 : e.limit }, i = this.collection._sync.loadSubset(n);
    (_a5 = e == null ? void 0 : e.onLoadSubsetResult) == null ? void 0 : _a5.call(e, i), this.loadedSubsets.push(n), ((e == null ? void 0 : e.trackLoadSubsetPromise) ?? true) && this.trackLoadSubsetPromise(i);
    const o = this.collection.currentStateAsChanges(s);
    if (o === void 0) return false;
    const a = o.filter((c) => !this.sentKeys.has(c.key));
    for (const c of a) this.sentKeys.add(c.key);
    return this.snapshotSent = true, this.callback(a), true;
  }
  requestLimitedSnapshot({ orderBy: e, limit: s, minValues: n, offset: i, trackLoadSubsetPromise: r = true, onLoadSubsetResult: o }) {
    if (!s) throw new Error("limit is required");
    if (!this.orderByIndex) throw new Error("Ordered snapshot was requested but no index was found. You have to call setOrderByIndex before requesting an ordered snapshot.");
    const a = n !== void 0 && n.length > 0, l = n == null ? void 0 : n[0], h = this.orderByIndex, u = this.options.whereExpression, d = u ? qe(u) : void 0, p = (w) => {
      if (w !== void 0 && this.sentKeys.has(w)) return false;
      const P = this.collection.get(w);
      return P === void 0 ? false : (d == null ? void 0 : d(P)) ?? true;
    };
    let f = l;
    const y = [];
    let g = [];
    if (a) {
      const { expression: w } = e[0], P = this.collection.currentStateAsChanges({ where: us(w, new U(l)) });
      if (P) {
        const C = P.map((I) => I.key).filter((I) => !this.sentKeys.has(I) && p(I));
        g.push(...C);
        const E = h.take(s - g.length, l, p);
        g.push(...E);
      } else g = h.take(s, l, p);
    } else g = h.takeFromStart(s, p);
    const v = () => Math.max(s - y.length, 0), S = () => g.length === 0, b = e[0].expression, m = b.type === "ref" ? V(new N(b.path), true) : null;
    for (; v() > 0 && !S(); ) {
      const w = /* @__PURE__ */ new Set();
      for (const P of g) {
        const C = this.collection.get(P);
        y.push({ type: "insert", key: P, value: C }), f = m ? m(C) : C, w.add(P);
      }
      g = h.take(v(), f, p);
    }
    const R = this.limitedSnapshotRowCount;
    for (const w of y) this.sentKeys.add(w.key);
    this.callback(y), this.limitedSnapshotRowCount += y.length, y.length > 0 && (this.lastSentKey = y[y.length - 1].key);
    let k;
    if (n !== void 0 && n.length > 0) {
      const w = dl(e, n);
      if (w) {
        const { expression: P } = e[0], C = n[0];
        let E;
        if (C instanceof Date) {
          const I = new Date(C.getTime() + 1);
          E = fs(Qc(P, new U(C)), hs(P, new U(I)));
        } else E = us(P, new U(C));
        k = { whereFrom: w, whereCurrent: E, lastKey: this.lastSentKey };
      }
    }
    const _ = { where: u, limit: s, orderBy: e, cursor: k, offset: i ?? R, subscription: this }, x = this.collection._sync.loadSubset(_);
    o == null ? void 0 : o(x), this.loadedSubsets.push(_), r && this.trackLoadSubsetPromise(x);
  }
  filterAndFlipChanges(e) {
    if (this.loadedInitialState || this.skipFiltering) return e;
    const s = this.isBufferingForTruncate, n = [];
    for (const i of e) {
      let r = i;
      if (this.sentKeys.has(i.key)) {
        if (i.type === "insert") continue;
        i.type === "delete" && this.sentKeys.delete(i.key);
      } else {
        if (i.type === "update") r = { ...i, type: "insert", previousValue: void 0 };
        else if (i.type === "delete" && !s) continue;
        this.sentKeys.add(i.key);
      }
      n.push(r);
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
class yl {
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
    if (s && (this.batchedEvents.length > 0 && (n = [...this.batchedEvents, ...e]), this.batchedEvents = [], this.shouldBatchEvents = false), n.length !== 0) for (const i of this.changeSubscriptions) i.emitEvents(n);
  }
  subscribeChanges(e, s = {}) {
    if (this.addSubscriber(), s.where && s.whereExpression) throw new Error("Cannot specify both 'where' and 'whereExpression' options. Use one or the other.");
    const { where: n, ...i } = s;
    let r = i.whereExpression;
    if (n) {
      const a = Ci(), c = n(a);
      r = A(c);
    }
    const o = new pl(this.collection, e, { ...i, whereExpression: r, onUnsubscribe: () => {
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
    else if (this.activeSubscribersCount < 0) throw new _o();
    this.events.emitSubscribersChange(this.activeSubscribersCount, e);
  }
  cleanup() {
    this.batchedEvents = [], this.shouldBatchEvents = false;
  }
}
const gl = (t) => setTimeout(() => {
  t({ didTimeout: true, timeRemaining: () => 50 });
}, 0), ml = (t) => {
  clearTimeout(t);
}, vl = typeof window < "u" && "requestIdleCallback" in window ? (t, e) => window.requestIdleCallback(t, e) : (t, e) => gl(t), Xt = typeof window < "u" && "cancelIdleCallback" in window ? (t) => window.cancelIdleCallback(t) : ml;
class wl {
  constructor(e, s) {
    this.status = "idle", this.hasBeenReady = false, this.hasReceivedFirstCommit = false, this.onFirstReadyCallbacks = [], this.gcTimeoutId = null, this.idleCallbackId = null, this.config = e, this.id = s;
  }
  setDeps(e) {
    this.indexes = e.indexes, this.events = e.events, this.changes = e.changes, this.sync = e.sync, this.state = e.state;
  }
  validateStatusTransition(e, s) {
    if (e === s) return;
    if (!{ idle: ["loading", "error", "cleaned-up"], loading: ["ready", "error", "cleaned-up"], ready: ["cleaned-up", "error"], error: ["cleaned-up", "idle"], "cleaned-up": ["loading", "error"] }[e].includes(s)) throw new Ro(e, s, this.id);
  }
  setStatus(e, s = false) {
    if (e === "ready" && !s) throw new it(`You can't directly call "setStatus('ready'). You must use markReady instead.`);
    this.validateStatusTransition(this.status, e);
    const n = this.status;
    this.status = e, e === "ready" && !this.indexes.isIndexesResolved && this.indexes.resolveAllIndexes().catch((i) => {
      console.warn(`${this.config.id ? `[${this.config.id}] ` : ""}Failed to resolve indexes:`, i);
    }), this.events.emitStatusChange(e, n);
  }
  validateCollectionUsable(e) {
    switch (this.status) {
      case "error":
        throw new Po(e, this.id);
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
    this.gcTimeoutId && (clearTimeout(this.gcTimeoutId), this.gcTimeoutId = null), this.idleCallbackId !== null && (Xt(this.idleCallbackId), this.idleCallbackId = null);
  }
  scheduleIdleCleanup() {
    this.idleCallbackId !== null && Xt(this.idleCallbackId), this.idleCallbackId = vl((e) => {
      this.changes.activeSubscribersCount === 0 ? this.performCleanup(e) && (this.idleCallbackId = null) : this.idleCallbackId = null;
    }, { timeout: 1e3 });
  }
  performCleanup(e) {
    if (!e || e.timeRemaining() > 0 || e.didTimeout) {
      this.sync.cleanup(), this.state.cleanup(), this.changes.cleanup(), this.indexes.cleanup(), this.gcTimeoutId && (clearTimeout(this.gcTimeoutId), this.gcTimeoutId = null), this.hasBeenReady = false;
      const n = [...this.onFirstReadyCallbacks];
      return this.onFirstReadyCallbacks = [], n.forEach((i) => {
        try {
          i();
        } catch (r) {
          console.error(`${this.config.id ? `[${this.config.id}] ` : ""}Error in onFirstReady callback during cleanup:`, r);
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
    this.idleCallbackId !== null && (Xt(this.idleCallbackId), this.idleCallbackId = null), this.performCleanup();
  }
}
const js = /* @__PURE__ */ Symbol("liveQueryInternal");
class Sl {
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
        const e = bl(this.config.sync.sync({ collection: this.collection, begin: (s) => {
          this.state.pendingSyncedTransactions.push({ committed: false, operations: [], deletedKeys: /* @__PURE__ */ new Set(), immediate: s == null ? void 0 : s.immediate });
        }, write: (s) => {
          const n = this.state.pendingSyncedTransactions[this.state.pendingSyncedTransactions.length - 1];
          if (!n) throw new bn();
          if (n.committed) throw new xn();
          let i;
          "key" in s ? i = s.key : i = this.config.getKey(s.value);
          let r = s.type;
          if (s.type === "insert") {
            const a = this.state.syncedData.has(i), c = n.deletedKeys.has(i), l = n.truncate === true;
            if (a && !c && !l) {
              const h = this.state.syncedData.get(i);
              if (h !== void 0 && Z(h, s.value)) r = "update";
              else {
                const p = this.config.utils[js];
                throw new Oo(i, this.id, { hasCustomGetKey: (p == null ? void 0 : p.hasCustomGetKey) ?? false, hasJoins: (p == null ? void 0 : p.hasJoins) ?? false, hasDistinct: (p == null ? void 0 : p.hasDistinct) ?? false });
              }
            }
          }
          const o = { ...s, type: r, key: i };
          n.operations.push(o), r === "delete" && n.deletedKeys.add(i);
        }, commit: () => {
          const s = this.state.pendingSyncedTransactions[this.state.pendingSyncedTransactions.length - 1];
          if (!s) throw new Vo();
          if (s.committed) throw new qo();
          s.committed = true, this.state.commitPendingTransactions();
        }, markReady: () => {
          this.lifecycle.markReady();
        }, truncate: () => {
          const s = this.state.pendingSyncedTransactions[this.state.pendingSyncedTransactions.length - 1];
          if (!s) throw new bn();
          if (s.committed) throw new xn();
          s.operations = [], s.deletedKeys.clear(), s.truncate = true, s.optimisticSnapshot = { upserts: new Map(this.state.optimisticUpserts), deletes: new Set(this.state.optimisticDeletes) };
        } }));
        if (this.syncCleanupFn = (e == null ? void 0 : e.cleanup) ?? null, this.syncLoadSubsetFn = (e == null ? void 0 : e.loadSubset) ?? null, this.syncUnloadSubsetFn = (e == null ? void 0 : e.unloadSubset) ?? null, this.syncMode === "on-demand" && !this.syncLoadSubsetFn) throw new nt(`Collection "${this.id}" is configured with syncMode "on-demand" but the sync function did not return a loadSubset handler. Either provide a loadSubset handler or use syncMode "eager".`);
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
        s(new Co());
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
          const s = new Cn(this.id, e);
          throw s.cause = e, s.stack = e.stack, s;
        } else throw new Cn(this.id, e);
      });
    }
    this.preloadPromise = null;
  }
}
function bl(t) {
  if (typeof t == "function") return { cleanup: t };
  if (typeof t == "object") return t;
}
function Ii(t) {
  return typeof t == "function" && t.prototype !== void 0 && t.prototype.constructor === t;
}
async function xl(t) {
  return Ii(t) ? t : await t();
}
class Pl {
  constructor(e, s, n, i, r, o) {
    this.id = e, this.expression = s, this.name = n, this.resolver = i, this.options = r, this.collectionEntries = o, this.indexPromise = null, this.resolvedIndex = null, Ii(this.resolver) && (this.resolvedIndex = new this.resolver(this.id, this.expression, this.name, this.options), this.collectionEntries && this.resolvedIndex.build(this.collectionEntries));
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
    const e = await xl(this.resolver);
    return new e(this.id, this.expression, this.name, this.options);
  }
}
class Rl {
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
    return s.type === "ref" && s.path.length === e.length && s.path.every((n, i) => n === e[i]);
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
class Cl {
  constructor() {
    this.lazyIndexes = /* @__PURE__ */ new Map(), this.resolvedIndexes = /* @__PURE__ */ new Map(), this.isIndexesResolved = false, this.indexCounter = 0;
  }
  setDeps(e) {
    this.state = e.state, this.lifecycle = e.lifecycle;
  }
  createIndex(e, s = {}) {
    this.lifecycle.validateCollectionUsable("createIndex");
    const n = ++this.indexCounter, i = Ci(), r = e(i), o = A(r), a = s.indexType ?? ds, c = new Pl(n, o, s.name, a, s.options, this.state.entries());
    if (this.lazyIndexes.set(n, c), a === ds) try {
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
    return new Rl(n, c);
  }
  async resolveAllIndexes() {
    if (this.isIndexesResolved) return;
    const e = Array.from(this.lazyIndexes.entries()).map(async ([s, n]) => {
      const i = await n.resolve();
      return i.build(this.state.entries()), this.resolvedIndexes.set(s, i), { indexId: s, resolvedIndex: i };
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
var _l = {};
const kl = /* @__PURE__ */ new Set(["find", "findLast", "findIndex", "findLastIndex", "filter", "map", "flatMap", "forEach", "some", "every", "reduce", "reduceRight"]), Il = /* @__PURE__ */ new Set(["pop", "push", "shift", "unshift", "splice", "sort", "reverse", "fill", "copyWithin"]), El = /* @__PURE__ */ new Set(["set", "delete", "clear", "add"]), Ol = /* @__PURE__ */ new Set(["entries", "keys", "values", "forEach"]);
function zs(t) {
  return t !== null && typeof t == "object" && !(t instanceof Date) && !(t instanceof RegExp) && !Ue(t);
}
function Ml(t, e, s, n) {
  if (kl.has(t)) return function(...i) {
    const r = i[0];
    if (typeof r != "function") return e.apply(s.copy_, i);
    const o = (l, h) => {
      if (zs(l)) {
        const u = { tracker: s, prop: String(h) }, { proxy: d } = n(l, u);
        return d;
      }
      return l;
    }, a = function(l, h, u) {
      const d = o(l, h);
      return r.call(this, d, h, u);
    };
    if (t === "reduce" || t === "reduceRight") {
      const l = function(h, u, d, p) {
        const f = o(u, d);
        return r.call(this, h, f, d, p);
      };
      return e.apply(s.copy_, [l, ...i.slice(1)]);
    }
    const c = e.apply(s.copy_, [a, ...i.slice(1)]);
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
function Tl(t, e) {
  return function() {
    const s = t.copy_;
    let n = 0;
    return { next() {
      if (n >= s.length) return { done: true, value: void 0 };
      const i = s[n];
      let r = i;
      if (zs(i)) {
        const o = { tracker: t, prop: String(n) }, { proxy: a } = e(i, o);
        r = a;
      }
      return n++, { done: false, value: r };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Vn(t, e, s) {
  return function(...n) {
    const i = t.apply(e.copy_, n);
    return s(e), i;
  };
}
function Al(t, e, s, n, i, r, o) {
  if (Ol.has(t) || e === Symbol.iterator) return function(...c) {
    const l = s.apply(i.copy_, c);
    if (t === "forEach") {
      const u = c[0];
      if (typeof u == "function") {
        const d = function(p, f, y) {
          const g = u.call(this, p, f, y);
          return o(i), g;
        };
        return s.apply(n, [d, ...c.slice(1)]);
      }
    }
    if (t === "entries" || t === "values" || t === Symbol.iterator.toString() || e === Symbol.iterator) {
      const u = l, d = /* @__PURE__ */ new Map();
      if (t === "values" && n instanceof Map) for (const [f, y] of i.copy_.entries()) d.set(y, f);
      const p = /* @__PURE__ */ new Map();
      if (n instanceof Set) for (const f of i.copy_.values()) p.set(f, f);
      return { next() {
        const f = u.next();
        if (!f.done && f.value && typeof f.value == "object") {
          if (t === "entries" && Array.isArray(f.value) && f.value.length === 2) {
            if (f.value[1] && typeof f.value[1] == "object") {
              const y = f.value[0], g = { tracker: i, prop: y, updateMap: (S) => {
                i.copy_ instanceof Map && i.copy_.set(y, S);
              } }, { proxy: v } = r(f.value[1], g);
              f.value[1] = v;
            }
          } else if (t === "values" || t === Symbol.iterator.toString() || e === Symbol.iterator) if (t === "values" && n instanceof Map) {
            const y = d.get(f.value);
            if (y !== void 0) {
              const g = { tracker: i, prop: y, updateMap: (S) => {
                i.copy_ instanceof Map && i.copy_.set(y, S);
              } }, { proxy: v } = r(f.value, g);
              f.value = v;
            }
          } else if (n instanceof Set) {
            const y = f.value, g = { tracker: i, prop: y, updateSet: (S) => {
              i.copy_ instanceof Set && (i.copy_.delete(y), i.copy_.add(S), p.set(y, S));
            } }, { proxy: v } = r(f.value, g);
            f.value = v;
          } else {
            const y = /* @__PURE__ */ Symbol("iterator-value"), { proxy: g } = r(f.value, { tracker: i, prop: y });
            f.value = g;
          }
        }
        return f;
      }, [Symbol.iterator]() {
        return this;
      } };
    }
    return l;
  };
}
function O(...t) {
  const e = typeof window < "u" && typeof localStorage < "u";
  e && localStorage.getItem("DEBUG") === "true" ? console.log("[proxy]", ...t) : !e && typeof process < "u" && _l.DEBUG === "true" && console.log("[proxy]", ...t);
}
function ie(t, e = /* @__PURE__ */ new WeakMap()) {
  if (t == null || typeof t != "object") return t;
  if (e.has(t)) return e.get(t);
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof RegExp) return new RegExp(t.source, t.flags);
  if (Array.isArray(t)) {
    const i = [];
    return e.set(t, i), t.forEach((r, o) => {
      i[o] = ie(r, e);
    }), i;
  }
  if (ArrayBuffer.isView(t) && !(t instanceof DataView)) {
    const i = Object.getPrototypeOf(t).constructor, r = new i(t.length);
    e.set(t, r);
    for (let o = 0; o < t.length; o++) r[o] = t[o];
    return r;
  }
  if (t instanceof Map) {
    const i = /* @__PURE__ */ new Map();
    return e.set(t, i), t.forEach((r, o) => {
      i.set(o, ie(r, e));
    }), i;
  }
  if (t instanceof Set) {
    const i = /* @__PURE__ */ new Set();
    return e.set(t, i), t.forEach((r) => {
      i.add(ie(r, e));
    }), i;
  }
  if (Ue(t)) return t;
  const s = {};
  e.set(t, s);
  for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (s[i] = ie(t[i], e));
  const n = Object.getOwnPropertySymbols(t);
  for (const i of n) s[i] = ie(t[i], e);
  return s;
}
let qn = 0;
function Ll() {
  return qn += 1, qn;
}
function $s(t, e) {
  const s = /* @__PURE__ */ new Map();
  function n(u, d) {
    if (O("Object ID:", u.constructor.name), s.has(u)) return s.get(u);
    {
      const p = $s(u, d);
      return s.set(u, p), p;
    }
  }
  const i = /* @__PURE__ */ new Map(), r = { copy_: ie(t), originalObject: ie(t), proxyCount: Ll(), modified: false, assigned_: {}, parent: e, target: t };
  O("createChangeProxy called for target", t, r.proxyCount);
  function o(u) {
    u.modified || (u.modified = true), u.parent && (O("propagating change to parent"), "updateMap" in u.parent ? u.parent.updateMap(u.copy_) : "updateSet" in u.parent ? u.parent.updateSet(u.copy_) : (u.parent.tracker.copy_[u.parent.prop] = u.copy_, u.parent.tracker.assigned_[u.parent.prop] = true), o(u.parent.tracker));
  }
  function a(u) {
    if (O("checkIfReverted called with assigned keys:", Object.keys(u.assigned_)), Object.keys(u.assigned_).length === 0 && Object.getOwnPropertySymbols(u.assigned_).length === 0) return O("No assigned properties, returning true"), true;
    for (const p in u.assigned_) if (u.assigned_[p] === true) {
      const f = u.copy_[p], y = u.originalObject[p];
      if (O(`Checking property ${String(p)}, current:`, f, "original:", y), !Z(f, y)) return O(`Property ${String(p)} is different, returning false`), false;
    } else if (u.assigned_[p] === false) return O(`Property ${String(p)} was deleted, returning false`), false;
    const d = Object.getOwnPropertySymbols(u.assigned_);
    for (const p of d) if (u.assigned_[p] === true) {
      const f = u.copy_[p], y = u.originalObject[p];
      if (!Z(f, y)) return O("Symbol property is different, returning false"), false;
    } else if (u.assigned_[p] === false) return O("Symbol property was deleted, returning false"), false;
    return O("All properties match original values, returning true"), true;
  }
  function c(u, d) {
    O("checkParentStatus called for child prop:", d);
    const p = a(u);
    O("Parent checkIfReverted returned:", p), p && (O("Parent is fully reverted, clearing tracking"), u.modified = false, u.assigned_ = {}, u.parent && (O("Continuing up the parent chain"), c(u.parent.tracker, u.parent.prop)));
  }
  function l(u) {
    if (O("createObjectProxy", u), i.has(u)) return O("proxyCache found match"), i.get(u);
    const d = new Proxy(u, { get(p, f) {
      var _a5;
      O("get", p, f);
      const y = r.copy_[f] ?? r.originalObject[f], g = r.originalObject[f];
      if (O("value (at top of proxy get)", y), (_a5 = Object.getOwnPropertyDescriptor(p, f)) == null ? void 0 : _a5.get) return y;
      if (typeof y == "function") {
        if (Array.isArray(p)) {
          const S = f.toString();
          if (Il.has(S)) return Vn(y, r, o);
          const b = Ml(S, y, r, n);
          if (b) return b;
          if (f === Symbol.iterator) return Tl(r, n);
        }
        if (p instanceof Map || p instanceof Set) {
          const S = f.toString();
          if (El.has(S)) return Vn(y, r, o);
          const b = Al(S, f, y, p, r, n, o);
          if (b) return b;
        }
        return y.bind(p);
      }
      if (zs(y)) {
        const S = { tracker: r, prop: String(f) }, { proxy: b } = n(g, S);
        return i.set(y, b), b;
      }
      return y;
    }, set(p, f, y) {
      const g = r.copy_[f];
      if (O(`set called for property ${String(f)}, current:`, g, "new:", y), Z(g, y)) O("Value unchanged, not tracking");
      else {
        const v = r.originalObject[f], S = Z(y, v);
        if (O("value:", y, "original:", v, "isRevertToOriginal:", S), S) {
          O(`Reverting property ${String(f)} to original value`), delete r.assigned_[f.toString()], O(`Updating copy with original value for ${String(f)}`), r.copy_[f] = ie(v), O("Checking if all properties reverted");
          const b = a(r);
          O("All reverted:", b), b ? (O("All properties reverted, clearing tracking"), r.modified = false, r.assigned_ = {}, e && (O("Updating parent for property:", e.prop), c(e.tracker, e.prop))) : (O("Some properties still changed, keeping modified flag"), r.modified = true);
        } else O(`Setting new value for property ${String(f)}`), r.copy_[f] = y, r.assigned_[f.toString()] = true, O("Marking object and ancestors as modified", r), o(r);
      }
      return true;
    }, defineProperty(p, f, y) {
      const g = Reflect.defineProperty(p, f, y);
      return g && "value" in y && (r.copy_[f] = ie(y.value), r.assigned_[f.toString()] = true, o(r)), g;
    }, getOwnPropertyDescriptor(p, f) {
      return Reflect.getOwnPropertyDescriptor(p, f);
    }, preventExtensions(p) {
      return Reflect.preventExtensions(p);
    }, isExtensible(p) {
      return Reflect.isExtensible(p);
    }, deleteProperty(p, f) {
      O("deleteProperty", p, f);
      const y = typeof f == "symbol" ? f.toString() : f;
      if (y in p) {
        const g = y in r.originalObject, v = Reflect.deleteProperty(p, f);
        return v && (g ? (r.assigned_[y] = false, o(r)) : (delete r.assigned_[y], Object.keys(r.assigned_).length === 0 && Object.getOwnPropertySymbols(r.assigned_).length === 0 ? r.modified = false : r.modified = true)), v;
      }
      return true;
    } });
    return i.set(u, d), d;
  }
  return { proxy: l(r.copy_), getChanges: () => {
    if (O("getChanges called, modified:", r.modified), O(r), !r.modified) return O("Object not modified, returning empty object"), {};
    if (typeof r.copy_ != "object" || Array.isArray(r.copy_) || Object.keys(r.assigned_).length === 0) return r.copy_;
    const u = {};
    for (const d in r.copy_) r.assigned_[d] === true && d in r.copy_ && (u[d] = r.copy_[d]);
    return O("Returning copy:", u), u;
  } };
}
function Fl(t) {
  const e = t.map((s) => $s(s));
  return { proxies: e.map((s) => s.proxy), getChanges: () => e.map((s) => s.getChanges()) };
}
function Bl(t, e) {
  const { proxy: s, getChanges: n } = $s(t);
  return e(s), n();
}
function Kl(t, e) {
  const { proxies: s, getChanges: n } = Fl(t);
  return e(s), n();
}
function Dl() {
  let t, e, s = true;
  return { promise: new Promise((i, r) => {
    t = (o) => {
      s = false, i(o);
    }, e = (o) => {
      s = false, r(o);
    };
  }), resolve: t, reject: e, isPending: () => s };
}
const Mt = [];
let st = [], jl = 0;
function zl(t, e) {
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
function dt(t) {
  const e = new Vl(t);
  return Mt.push(e), e;
}
function wt() {
  if (st.length > 0) return st.slice(-1)[0];
}
function $l(t) {
  St.clear(t.id), st.push(t);
}
function Nl(t) {
  try {
    St.flush(t.id);
  } finally {
    st = st.filter((e) => e.id !== t.id);
  }
}
function Ul(t) {
  const e = Mt.findIndex((s) => s.id === t.id);
  e !== -1 && Mt.splice(e, 1);
}
class Vl {
  constructor(e) {
    if (typeof e.mutationFn > "u") throw new zo();
    this.id = e.id ?? crypto.randomUUID(), this.mutationFn = e.mutationFn, this.state = "pending", this.mutations = [], this.isPersisted = Dl(), this.autoCommit = e.autoCommit ?? true, this.createdAt = /* @__PURE__ */ new Date(), this.sequenceNumber = jl++, this.metadata = e.metadata ?? {};
  }
  setState(e) {
    this.state = e, (e === "completed" || e === "failed") && Ul(this);
  }
  mutate(e) {
    if (this.state !== "pending") throw new $o();
    $l(this);
    try {
      e();
    } finally {
      Nl(this);
    }
    return this.autoCommit && this.commit().catch(() => {
    }), this;
  }
  applyMutations(e) {
    for (const s of e) {
      const n = this.mutations.findIndex((i) => i.globalKey === s.globalKey);
      if (n >= 0) {
        const i = this.mutations[n], r = zl(i, s);
        r === null ? this.mutations.splice(n, 1) : this.mutations[n] = r;
      } else this.mutations.push(s);
    }
  }
  rollback(e) {
    var _a5;
    const s = (e == null ? void 0 : e.isSecondaryRollback) ?? false;
    if (this.state === "completed") throw new No();
    if (this.setState("failed"), !s) {
      const n = /* @__PURE__ */ new Set();
      this.mutations.forEach((i) => n.add(i.globalKey));
      for (const i of Mt) i.state === "pending" && i.mutations.some((r) => n.has(r.globalKey)) && i.rollback({ isSecondaryRollback: true });
    }
    return this.isPersisted.reject((_a5 = this.error) == null ? void 0 : _a5.error), this.touchCollection(), this;
  }
  touchCollection() {
    const e = /* @__PURE__ */ new Set();
    for (const s of this.mutations) e.has(s.collection.id) || (s.collection._state.onTransactionStateChange(), s.collection._state.pendingSyncedTransactions.length > 0 && s.collection._state.commitPendingTransactions(), e.add(s.collection.id));
  }
  async commit() {
    if (this.state !== "pending") throw new Uo();
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
class ql {
  constructor(e, s) {
    this.insert = (n, i) => {
      this.lifecycle.validateCollectionUsable("insert");
      const r = this.state, o = wt();
      if (!o && !this.config.onInsert) throw new Ko();
      const a = Array.isArray(n) ? n : [n], c = [], l = /* @__PURE__ */ new Set();
      if (a.forEach((h) => {
        var _a5, _b2;
        const u = this.validateData(h, "insert"), d = this.config.getKey(u);
        if (this.state.has(d) || l.has(d)) throw new Eo(d);
        l.add(d);
        const p = this.generateGlobalKey(d, h), f = { mutationId: crypto.randomUUID(), original: {}, modified: u, changes: Object.fromEntries(Object.keys(h).map((y) => [y, u[y]])), globalKey: p, key: d, metadata: i == null ? void 0 : i.metadata, syncMetadata: ((_b2 = (_a5 = this.config.sync).getSyncMetadata) == null ? void 0 : _b2.call(_a5)) || {}, optimistic: (i == null ? void 0 : i.optimistic) ?? true, type: "insert", createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date(), collection: this.collection };
        c.push(f);
      }), o) return o.applyMutations(c), r.transactions.set(o.id, o), r.scheduleTransactionCleanup(o), r.recomputeOptimisticState(true), o;
      {
        const h = dt({ mutationFn: async (u) => await this.config.onInsert({ transaction: u.transaction, collection: this.collection }) });
        return h.applyMutations(c), h.commit().catch(() => {
        }), r.transactions.set(h.id, h), r.scheduleTransactionCleanup(h), r.recomputeOptimisticState(true), h;
      }
    }, this.delete = (n, i) => {
      const r = this.state;
      this.lifecycle.validateCollectionUsable("delete");
      const o = wt();
      if (!o && !this.config.onDelete) throw new jo();
      if (Array.isArray(n) && n.length === 0) throw new Fo();
      const a = Array.isArray(n) ? n : [n], c = [];
      for (const h of a) {
        if (!this.state.has(h)) throw new Bo(h);
        const u = this.generateGlobalKey(h, this.state.get(h)), d = { mutationId: crypto.randomUUID(), original: this.state.get(h), modified: this.state.get(h), changes: this.state.get(h), globalKey: u, key: h, metadata: i == null ? void 0 : i.metadata, syncMetadata: r.syncedMetadata.get(h) || {}, optimistic: (i == null ? void 0 : i.optimistic) ?? true, type: "delete", createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date(), collection: this.collection };
        c.push(d);
      }
      if (o) return o.applyMutations(c), r.transactions.set(o.id, o), r.scheduleTransactionCleanup(o), r.recomputeOptimisticState(true), o;
      const l = dt({ autoCommit: true, mutationFn: async (h) => this.config.onDelete({ transaction: h.transaction, collection: this.collection }) });
      return l.applyMutations(c), l.commit().catch(() => {
      }), r.transactions.set(l.id, l), r.scheduleTransactionCleanup(l), r.recomputeOptimisticState(true), l;
    }, this.id = s, this.config = e;
  }
  setDeps(e) {
    this.lifecycle = e.lifecycle, this.state = e.state, this.collection = e.collection;
  }
  ensureStandardSchema(e) {
    if (e && "~standard" in e) return e;
    throw new xo();
  }
  validateData(e, s, n) {
    if (!this.config.schema) return e;
    const i = this.ensureStandardSchema(this.config.schema);
    if (s === "update" && n) {
      const o = this.state.get(n);
      if (o && e && typeof e == "object" && typeof o == "object") {
        const a = Object.assign({}, o, e), c = i["~standard"].validate(a);
        if (c instanceof Promise) throw new Sn();
        if ("issues" in c && c.issues) {
          const d = c.issues.map((p) => {
            var _a5;
            return { message: p.message, path: (_a5 = p.path) == null ? void 0 : _a5.map((f) => String(f)) };
          });
          throw new wn(s, d);
        }
        const l = c.value, h = Object.keys(e);
        return Object.fromEntries(h.map((d) => [d, l[d]]));
      }
    }
    const r = i["~standard"].validate(e);
    if (r instanceof Promise) throw new Sn();
    if ("issues" in r && r.issues) {
      const o = r.issues.map((a) => {
        var _a5;
        return { message: a.message, path: (_a5 = a.path) == null ? void 0 : _a5.map((c) => String(c)) };
      });
      throw new wn(s, o);
    }
    return r.value;
  }
  generateGlobalKey(e, s) {
    if (typeof e != "string" && typeof e != "number") throw typeof e > "u" ? new ko(s) : new Io(e, s);
    return `KEY::${this.id}/${e}`;
  }
  update(e, s, n) {
    if (typeof e > "u") throw new Mo();
    const i = this.state;
    this.lifecycle.validateCollectionUsable("update");
    const r = wt();
    if (!r && !this.config.onUpdate) throw new Do();
    const o = Array.isArray(e), a = o ? e : [e];
    if (o && a.length === 0) throw new To();
    const c = typeof s == "function" ? s : n, l = typeof s == "function" ? {} : s, h = a.map((f) => {
      const y = this.state.get(f);
      if (!y) throw new Ao(f);
      return y;
    });
    let u;
    o ? u = Kl(h, c) : u = [Bl(h[0], c)];
    const d = a.map((f, y) => {
      const g = u[y];
      if (!g || Object.keys(g).length === 0) return null;
      const v = h[y], S = this.validateData(g, "update", f), b = Object.assign({}, v, S), m = this.config.getKey(v), R = this.config.getKey(b);
      if (m !== R) throw new Lo(m, R);
      const k = this.generateGlobalKey(R, b);
      return { mutationId: crypto.randomUUID(), original: v, modified: b, changes: Object.fromEntries(Object.keys(g).map((_) => [_, b[_]])), globalKey: k, key: f, metadata: l.metadata, syncMetadata: i.syncedMetadata.get(f) || {}, optimistic: l.optimistic ?? true, type: "update", createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date(), collection: this.collection };
    }).filter(Boolean);
    if (d.length === 0) {
      const f = dt({ mutationFn: async () => {
      } });
      return f.commit().catch(() => {
      }), i.scheduleTransactionCleanup(f), f;
    }
    if (r) return r.applyMutations(d), i.transactions.set(r.id, r), i.scheduleTransactionCleanup(r), i.recomputeOptimisticState(true), r;
    const p = dt({ mutationFn: async (f) => this.config.onUpdate({ transaction: f.transaction, collection: this.collection }) });
    return p.applyMutations(d), p.commit().catch(() => {
    }), i.transactions.set(p.id, p), i.scheduleTransactionCleanup(p), i.recomputeOptimisticState(true), p;
  }
}
class Wl extends ki {
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
function Hl(t) {
  const e = new Ei(t);
  return t.utils ? e.utils = t.utils : e.utils = {}, e;
}
class Ei {
  constructor(e) {
    if (this.utils = {}, this.insert = (s, n) => this._mutations.insert(s, n), this.delete = (s, n) => this._mutations.delete(s, n), !e) throw new So();
    if (!e.sync) throw new bo();
    e.id ? this.id = e.id : this.id = crypto.randomUUID(), this.config = { ...e, autoIndex: e.autoIndex ?? "eager" }, this._changes = new yl(), this._events = new Wl(), this._indexes = new Cl(), this._lifecycle = new wl(e, this.id), this._mutations = new ql(e, this.id), this._state = new fl(e), this._sync = new Sl(e, this.id), this.comparisonOpts = Gl(e), this._changes.setDeps({ collection: this, lifecycle: this._lifecycle, sync: this._sync, events: this._events }), this._events.setDeps({ collection: this }), this._indexes.setDeps({ state: this._state, lifecycle: this._lifecycle }), this._lifecycle.setDeps({ changes: this._changes, events: this._events, indexes: this._indexes, state: this._state, sync: this._sync }), this._mutations.setDeps({ collection: this, lifecycle: this._lifecycle, state: this._state }), this._state.setDeps({ collection: this, lifecycle: this._lifecycle, changes: this._changes, indexes: this._indexes, events: this._events }), this._sync.setDeps({ collection: this, state: this._state, lifecycle: this._lifecycle, events: this._events }), e.startSync === true && this._sync.startSync();
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
    return ll(this, e);
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
function Gl(t) {
  if (t.defaultStringCollation) {
    const e = t.defaultStringCollation;
    return { stringSort: e.stringSort ?? "locale", locale: e.stringSort === "locale" ? e.locale : void 0, localeOptions: e.stringSort === "locale" ? e.localeOptions : void 0 };
  } else return { stringSort: "locale" };
}
class B {
  constructor(e = {}) {
    this.query = {}, this.query = { ...e };
  }
  _createRefForSource(e, s) {
    let n;
    try {
      n = Object.keys(e);
    } catch {
      const a = e === null ? "null" : "undefined";
      throw new ht(s, a);
    }
    if (Array.isArray(e)) throw new ht(s, "array");
    if (n.length !== 1) throw n.length === 0 ? new ht(s, "empty object") : n.every((a) => !isNaN(Number(a))) ? new ht(s, "string") : new Wo(s);
    const i = n[0], r = e[i];
    let o;
    if (r instanceof Ei) o = new Me(r, i);
    else if (r instanceof B) {
      const a = r._getQuery();
      if (!a.from) throw new Ho(s);
      o = new H(a, i);
    } else throw new Go(i);
    return [i, o];
  }
  from(e) {
    const [, s] = this._createRefForSource(e, "from clause");
    return new B({ ...this.query, from: s });
  }
  join(e, s, n = "left") {
    const [i, r] = this._createRefForSource(e, "join clause"), a = [...this._getCurrentAliases(), i], c = ye(a), l = s(c);
    let h, u;
    if (l.type === "func" && l.name === "eq" && l.args.length === 2) h = l.args[0], u = l.args[1];
    else throw new Qo();
    const d = { from: r, type: n, left: h, right: u }, p = this.query.join || [];
    return new B({ ...this.query, join: [...p, d] });
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
    const s = this._getCurrentAliases(), n = ye(s), i = e(n);
    if (!Xe(i)) throw new Pn(Wn(i));
    const r = this.query.where || [];
    return new B({ ...this.query, where: [...r, i] });
  }
  having(e) {
    const s = this._getCurrentAliases(), n = this.query.select || this.query.fnSelect ? Dn(s) : ye(s), i = e(n);
    if (!Xe(i)) throw new Pn(Wn(i));
    const r = this.query.having || [];
    return new B({ ...this.query, having: [...r, i] });
  }
  select(e) {
    const s = this._getCurrentAliases(), n = ye(s), i = e(n), r = Oi(i);
    return new B({ ...this.query, select: r, fnSelect: void 0 });
  }
  orderBy(e, s = "asc") {
    const n = this._getCurrentAliases(), i = this.query.select || this.query.fnSelect ? Dn(n) : ye(n), r = e(i), o = typeof s == "string" ? { direction: s, nulls: "first" } : { direction: s.direction ?? "asc", nulls: s.nulls ?? "first", stringSort: s.stringSort, locale: s.stringSort === "locale" ? s.locale : void 0, localeOptions: s.stringSort === "locale" ? s.localeOptions : void 0 }, a = (h) => ({ expression: A(h), compareOptions: o }), c = Array.isArray(r) ? r.map((h) => a(h)) : [a(r)], l = this.query.orderBy || [];
    return new B({ ...this.query, orderBy: [...l, ...c] });
  }
  groupBy(e) {
    const s = this._getCurrentAliases(), n = ye(s), i = e(n), r = Array.isArray(i) ? i.map((a) => A(a)) : [A(i)], o = this.query.groupBy || [];
    return new B({ ...this.query, groupBy: [...o, ...r] });
  }
  limit(e) {
    return new B({ ...this.query, limit: e });
  }
  offset(e) {
    return new B({ ...this.query, offset: e });
  }
  distinct() {
    return new B({ ...this.query, distinct: true });
  }
  findOne() {
    return new B({ ...this.query, singleResult: true });
  }
  _getCurrentAliases() {
    const e = [];
    if (this.query.from && e.push(this.query.from.alias), this.query.join) for (const s of this.query.join) e.push(s.from.alias);
    return e;
  }
  get fn() {
    const e = this;
    return { select(s) {
      return new B({ ...e.query, select: void 0, fnSelect: s });
    }, where(s) {
      return new B({ ...e.query, fnWhere: [...e.query.fnWhere || [], s] });
    }, having(s) {
      return new B({ ...e.query, fnHaving: [...e.query.fnHaving || [], s] });
    } };
  }
  _getQuery() {
    if (!this.query.from) throw new Jo();
    return this.query;
  }
}
function Wn(t) {
  return t === null ? "null" : t === void 0 ? "undefined" : typeof t == "object" ? "object" : typeof t;
}
function Ql(t) {
  return t === void 0 ? A(null) : t instanceof vi || t instanceof G || t instanceof N || t instanceof U ? t : A(t);
}
function Jl(t) {
  return t !== null && typeof t == "object" && !Xe(t) && !t.__refProxy;
}
function Oi(t) {
  if (!Jl(t)) return Ql(t);
  const e = {};
  for (const [s, n] of Object.entries(t)) {
    if (typeof s == "string" && s.startsWith("__SPREAD_SENTINEL__")) {
      e[s] = n;
      continue;
    }
    e[s] = Oi(n);
  }
  return e;
}
function Yl(t) {
  const e = t(new B());
  return Mi(e);
}
function Mi(t) {
  return t._getQuery();
}
function Xl(t) {
  const e = Zl(t);
  let s = t, n, i = 0;
  const r = 10;
  for (; i < r && !Z(s, n); ) n = s, s = ys(s), i++;
  return { optimizedQuery: Ti(s), sourceWhereClauses: e };
}
function Zl(t) {
  const e = /* @__PURE__ */ new Map();
  if (!t.where || t.where.length === 0) return e;
  const n = ms(t.where).map((r) => Ai(r)), i = Li(n);
  for (const [r, o] of i.singleSource) eu(t, r) && e.set(r, o);
  return e;
}
function eu(t, e) {
  if (t.from.alias === e) return t.from.type === "collectionRef";
  if (t.join) {
    for (const s of t.join) if (s.from.alias === e) return s.from.type === "collectionRef";
  }
  return false;
}
function ys(t) {
  var _a5;
  const e = { ...t, from: t.from.type === "queryRef" ? new H(ys(t.from.query), t.from.alias) : t.from, join: (_a5 = t.join) == null ? void 0 : _a5.map((s) => ({ ...s, from: s.from.type === "queryRef" ? new H(ys(s.from.query), s.from.alias) : s.from })) };
  return tu(e);
}
function tu(t) {
  if (!t.where || t.where.length === 0) return t;
  if (!t.join || t.join.length === 0) {
    if (t.where.length > 1) {
      const a = ms(t.where), c = Tt(a);
      return { ...t, where: [c] };
    }
    return t;
  }
  const e = t.where.filter((a) => !vn(a)), n = ms(e).map((a) => Ai(a)), i = Li(n), r = nu(t, i), o = t.where.filter((a) => vn(a));
  return o.length > 0 && (r.where = [...r.where || [], ...o]), r;
}
function Ti(t) {
  var _a5;
  return { ...t, from: gs(t.from), join: (_a5 = t.join) == null ? void 0 : _a5.map((e) => ({ ...e, from: gs(e.from) })) };
}
function gs(t) {
  if (t.type === "collectionRef") return t;
  const e = Ti(t.query);
  if (su(e)) {
    const s = gs(e.from);
    return s.type === "collectionRef" ? new Me(s.collection, t.alias) : new H(s.query, t.alias);
  }
  return new H(e, t.alias);
}
function su(t) {
  return (!t.where || t.where.length === 0) && !t.select && (!t.groupBy || t.groupBy.length === 0) && (!t.having || t.having.length === 0) && (!t.orderBy || t.orderBy.length === 0) && (!t.join || t.join.length === 0) && t.limit === void 0 && t.offset === void 0 && !t.fnSelect && (!t.fnWhere || t.fnWhere.length === 0) && (!t.fnHaving || t.fnHaving.length === 0);
}
function ms(t) {
  const e = [];
  for (const s of t) {
    const n = Es(s);
    e.push(...Ns(n));
  }
  return e;
}
function Ns(t) {
  if (t.type === "func" && t.name === "and") {
    const e = [];
    for (const s of t.args) e.push(...Ns(s));
    return e;
  } else return [t];
}
function Ai(t) {
  const e = /* @__PURE__ */ new Set();
  let s = false;
  function n(i) {
    switch (i.type) {
      case "ref":
        if (i.path && i.path.length > 0) {
          const r = i.path[0];
          r && (e.add(r), i.path.length === 1 && (s = true));
        }
        break;
      case "func":
        i.args && i.args.forEach(n);
        break;
      case "val":
        break;
      case "agg":
        i.args && i.args.forEach(n);
        break;
    }
  }
  return n(t), { expression: t, touchedSources: e, hasNamespaceOnlyRef: s };
}
function Li(t) {
  const e = /* @__PURE__ */ new Map(), s = [];
  for (const r of t) if (r.touchedSources.size === 1 && !r.hasNamespaceOnlyRef) {
    const o = Array.from(r.touchedSources)[0];
    e.has(o) || e.set(o, []), e.get(o).push(r.expression);
  } else (r.touchedSources.size > 1 || r.hasNamespaceOnlyRef) && s.push(r.expression);
  const n = /* @__PURE__ */ new Map();
  for (const [r, o] of e) n.set(r, Tt(o));
  const i = s.length > 0 ? Tt(s) : void 0;
  return { singleSource: n, multiSource: i };
}
function nu(t, e) {
  const s = /* @__PURE__ */ new Set(), n = Hn(t.from, e.singleSource, s), i = t.join ? t.join.map((l) => ({ ...l, from: Hn(l.from, e.singleSource, s) })) : void 0, r = [];
  e.multiSource && r.push(e.multiSource);
  const o = t.join && t.join.some((l) => l.type === "left" || l.type === "right" || l.type === "full");
  for (const [l, h] of e.singleSource) s.has(l) ? o && r.push(vo(h)) : r.push(h);
  const a = r.length > 1 ? [Tt(r.flatMap((l) => Ns(Es(l))))] : r;
  return { select: t.select, groupBy: t.groupBy ? [...t.groupBy] : void 0, having: t.having ? [...t.having] : void 0, orderBy: t.orderBy ? [...t.orderBy] : void 0, limit: t.limit, offset: t.offset, distinct: t.distinct, fnSelect: t.fnSelect, fnWhere: t.fnWhere ? [...t.fnWhere] : void 0, fnHaving: t.fnHaving ? [...t.fnHaving] : void 0, from: n, join: i, where: a.length > 0 ? a : [] };
}
function Ce(t) {
  return { from: t.from.type === "collectionRef" ? new Me(t.from.collection, t.from.alias) : new H(Ce(t.from.query), t.from.alias), select: t.select, join: t.join ? t.join.map((e) => ({ type: e.type, left: e.left, right: e.right, from: e.from.type === "collectionRef" ? new Me(e.from.collection, e.from.alias) : new H(Ce(e.from.query), e.from.alias) })) : void 0, where: t.where ? [...t.where] : void 0, groupBy: t.groupBy ? [...t.groupBy] : void 0, having: t.having ? [...t.having] : void 0, orderBy: t.orderBy ? [...t.orderBy] : void 0, limit: t.limit, offset: t.offset, fnSelect: t.fnSelect, fnWhere: t.fnWhere ? [...t.fnWhere] : void 0, fnHaving: t.fnHaving ? [...t.fnHaving] : void 0 };
}
function Hn(t, e, s) {
  const n = e.get(t.alias);
  if (!n) return t.type === "collectionRef" ? new Me(t.collection, t.alias) : new H(Ce(t.query), t.alias);
  if (t.type === "collectionRef") {
    const o = { from: new Me(t.collection, t.alias), where: [n] };
    return s.add(t.alias), new H(o, t.alias);
  }
  if (!lu(t.query, n, t.alias)) return new H(Ce(t.query), t.alias);
  if (hu(t.query, n, t.alias)) return new H(Ce(t.query), t.alias);
  const i = t.query.where || [], r = { ...Ce(t.query), where: [...i, n] };
  return s.add(t.alias), new H(r, t.alias);
}
function iu(t, e, s) {
  return t.select ? Fi(t.select) || uu(t.select, e, s) : false;
}
function ru(t) {
  return t.groupBy && t.groupBy.length > 0;
}
function ou(t) {
  return t.having && t.having.length > 0;
}
function au(t) {
  return t.orderBy && t.orderBy.length > 0 && (t.limit !== void 0 || t.offset !== void 0);
}
function cu(t) {
  return t.fnSelect || t.fnWhere && t.fnWhere.length > 0 || t.fnHaving && t.fnHaving.length > 0;
}
function lu(t, e, s) {
  return !(iu(t, e, s) || ru(t) || ou(t) || au(t) || cu(t));
}
function Fi(t) {
  for (const e of Object.values(t)) if (typeof e == "object") {
    const s = e;
    if (s.type === "agg" || !("type" in s) && Fi(s)) return true;
  }
  return false;
}
function Us(t) {
  const e = [];
  if (t == null || typeof t != "object") return e;
  switch (t.type) {
    case "ref":
      e.push(t);
      break;
    case "func":
    case "agg":
      for (const s of t.args ?? []) e.push(...Us(s));
      break;
  }
  return e;
}
function uu(t, e, s) {
  const n = /* @__PURE__ */ new Set();
  for (const [r, o] of Object.entries(t)) r.startsWith("__SPREAD_SENTINEL__") || o instanceof N || n.add(r);
  const i = Us(e);
  for (const r of i) {
    const o = r.path;
    if (!Array.isArray(o) || o.length < 2) continue;
    const a = o[0], c = o[1];
    if (a === s && n.has(c)) return true;
  }
  return false;
}
function hu(t, e, s) {
  const n = Us(e);
  if (n.every((r) => r.path[0] !== s)) return false;
  if (t.fnSelect) return true;
  const i = t.select;
  if (!i) return false;
  for (const r of n) {
    const o = r.path;
    if (o.length < 2 || o[0] !== s) continue;
    const a = i[o[1]];
    if (!a) continue;
    if (!(a instanceof N) || a.path.length < 2) return true;
    const [c, l] = a.path;
    if (c !== s && c !== t.from.alias || l !== o[1]) return true;
  }
  return false;
}
function Tt(t) {
  if (t.length === 0) throw new ma();
  return t.length === 1 ? t[0] : new G("and", t);
}
function fu(t, e, s, n, i, r, o, a, c, l, h, u, d, p, f, y, g, v, S) {
  let b = t;
  for (const m of e) b = du(b, m, s, n, i, r, o, a, c, l, h, u, d, p, f, y, g, v, S);
  return b;
}
function du(t, e, s, n, i, r, o, a, c, l, h, u, d, p, f, y, g, v, S) {
  const b = e.from.type === "collectionRef", { alias: m, input: R, collectionId: k } = yu(e.from, r, c, l, h, u, d, p, o, a, y, g, v, S);
  s[m] = R, b && (g[m] = k);
  const _ = c[n], x = c[k];
  if (!_) throw new Rn(n);
  if (!x) throw new Rn(k);
  const { activeSource: w, lazySource: P } = mu(e.type, _, x), C = Object.keys(s), { mainExpr: E, joinedExpr: I } = pu(e.left, e.right, C, m), M = V(E), F = V(I);
  let J = t.pipe($(([pe, Pe]) => [M(Pe), [pe, Pe]])), ot = R.pipe($(([pe, Pe]) => {
    const Le = { [m]: Pe };
    return [F(Le), [pe, Le]];
  }));
  if (!["inner", "left", "right", "full"].includes(e.type)) throw new ra(e.type);
  if (w) {
    const pe = w === "main" ? e.from : f.from, Pe = pe.type === "queryRef" && (pe.query.limit || pe.query.offset), Le = E.type === "func" || I.type === "func";
    if (!Pe && !Le) {
      const Fe = w === "main" ? m : i;
      u.add(Fe);
      const ji = w === "main" ? J : ot, at = Ze(f, w === "main" ? I : E, P), zi = at.collection, Ws = at.path[0];
      Ws && jt(Ws, at.path, zi);
      const Hs = ji.pipe(Ic(($i) => {
        const Gs = v[Fe] || Fe, ct = l[Gs];
        if (!ct) throw new va(Gs, Fe, P.id, Object.keys(l));
        if (ct.hasLoadedInitialState()) return;
        const Ni = $i.getInner().map(([[Vi]]) => Vi), Ui = new N(at.path);
        ct.requestSnapshot({ where: Yc(Ui, Ni), optimizedOnly: true }) || ct.requestSnapshot();
      }));
      w === "main" ? J = Hs : ot = Hs;
    }
  }
  return J.pipe(Fc(ot, e.type), gu(e.type));
}
function pu(t, e, s, n) {
  const i = s.filter((a) => a !== n), r = vs(t), o = vs(e);
  if (r && i.includes(r) && o === n) return { mainExpr: t, joinedExpr: e };
  if (r === n && o && i.includes(o)) return { mainExpr: e, joinedExpr: t };
  throw !r || !o ? new aa() : r === o ? new oa(r) : i.includes(r) ? o !== n ? new la(n) : new ua() : new ca(r);
}
function vs(t) {
  switch (t.type) {
    case "ref":
      return t.path[0] || null;
    case "func": {
      const e = /* @__PURE__ */ new Set();
      for (const s of t.args) {
        const n = vs(s);
        n && e.add(n);
      }
      return e.size === 1 ? Array.from(e)[0] : null;
    }
    default:
      return null;
  }
}
function yu(t, e, s, n, i, r, o, a, c, l, h, u, d, p) {
  switch (t.type) {
    case "collectionRef": {
      const f = e[t.alias];
      if (!f) throw new wi(t.alias, t.collection.id, Object.keys(e));
      return u[t.alias] = t.collection.id, { alias: t.alias, input: f, collectionId: t.collection.id };
    }
    case "queryRef": {
      const f = l.get(t.query) || t.query, y = h(f, e, s, n, i, r, o, a, c, l);
      Object.assign(u, y.aliasToCollectionId), Object.assign(d, y.aliasRemapping);
      const g = l.has(t.query), v = t.query.from.alias;
      if (!(!g && t.alias === v)) for (const [k, _] of y.sourceWhereClauses) p.set(k, _);
      const b = Object.keys(y.aliasToCollectionId).find((k) => y.aliasToCollectionId[k] === y.collectionId);
      b && b !== t.alias && (d[t.alias] = b);
      const R = y.pipeline.pipe($((k) => {
        const [_, [x, w]] = k;
        return [_, x];
      }));
      return { alias: t.alias, input: R, collectionId: y.collectionId };
    }
    default:
      throw new ha(t.type);
  }
}
function gu(t) {
  return function(e) {
    return e.pipe(he((s) => {
      const [n, [i, r]] = s, o = i == null ? void 0 : i[1], a = r == null ? void 0 : r[1];
      return t === "inner" ? !!(o && a) : t === "left" ? !!o : t === "right" ? !!a : true;
    }), $((s) => {
      const [n, [i, r]] = s, o = i == null ? void 0 : i[0], a = i == null ? void 0 : i[1], c = r == null ? void 0 : r[0], l = r == null ? void 0 : r[1], h = {};
      return a && Object.assign(h, a), l && Object.assign(h, l), [`[${o},${c}]`, h];
    }));
  };
}
function mu(t, e, s) {
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
function ws(t) {
  return t instanceof U ? t.value : t;
}
function vu(t, e, s) {
  const n = t.source(e);
  if (n && typeof n == "object") {
    let i = s;
    const r = t.targetPath;
    if (r.length === 0) for (const [o, a] of Object.entries(n)) s[o] = ws(a);
    else for (let o = 0; o < r.length; o++) {
      const a = r[o];
      if (o === r.length - 1) {
        const c = i[a] ?? (i[a] = {});
        if (typeof c == "object") for (const [l, h] of Object.entries(n)) c[l] = ws(h);
      } else {
        const c = i[a];
        (c == null || typeof c != "object") && (i[a] = {}), i = i[a];
      }
    }
  }
}
function wu(t, e, s) {
  const n = t.alias.split(".");
  if (n.length === 1) s[t.alias] = t.compiled(e);
  else {
    let i = s;
    for (let r = 0; r < n.length - 1; r++) {
      const o = n[r], a = i[o];
      (a == null || typeof a != "object") && (i[o] = {}), i = i[o];
    }
    i[n[n.length - 1]] = ws(t.compiled(e));
  }
}
function Su([t, e], s) {
  const n = {};
  for (const i of s) i.kind === "merge" ? vu(i, e, n) : wu(i, e, n);
  return [t, { ...e, $selected: n }];
}
function bu(t, e, s) {
  const n = [];
  return Bi([], e, n), t.pipe($((i) => Su(i, n)));
}
function xu(t) {
  return t.type === "agg";
}
function Pu(t) {
  return t && typeof t == "object" && !Xe(t);
}
function Bi(t, e, s) {
  for (const [n, i] of Object.entries(e)) {
    if (n.startsWith("__SPREAD_SENTINEL__")) {
      const o = n.slice(19), a = o.lastIndexOf("__"), c = a >= 0 ? o.slice(0, a) : o, l = i && typeof i == "object" && "type" in i && i.type === "ref";
      if (c.includes(".") || l) {
        const h = [...t], u = l ? i : new N(c.split(".")), d = V(u);
        s.push({ kind: "merge", targetPath: h, source: d });
      } else {
        const h = c, u = [...t];
        s.push({ kind: "merge", targetPath: u, source: (d) => d[h] });
      }
      continue;
    }
    const r = i;
    if (Pu(r)) {
      Bi([...t, n], r, s);
      continue;
    }
    if (xu(r)) s.push({ kind: "field", alias: [...t, n].join("."), compiled: () => null });
    else {
      if (r === void 0 || !Xe(r)) {
        s.push({ kind: "field", alias: [...t, n].join("."), compiled: () => r });
        continue;
      }
      if (r instanceof U) {
        const o = r.value;
        s.push({ kind: "field", alias: [...t, n].join("."), compiled: () => o });
      } else s.push({ kind: "field", alias: [...t, n].join("."), compiled: V(r) });
    }
  }
}
function Vs(t, e, s, n, i, r, o, a, c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap()) {
  const h = c.get(t);
  if (h) return h;
  Ss(t);
  const { optimizedQuery: u, sourceWhereClauses: d } = Xl(t);
  l.set(u, t), xs(u, t, l);
  const p = { ...e }, f = {}, y = {}, g = {}, { alias: v, input: S, collectionId: b } = Cu(u.from, p, s, n, i, r, o, a, c, l, f, y, d);
  g[v] = S;
  let m = S.pipe($(([x, w]) => [x, { [v]: w }]));
  if (u.join && u.join.length > 0 && (m = fu(m, u.join, g, b, v, p, c, l, s, n, i, r, o, a, t, Vs, f, y, d)), u.where && u.where.length > 0) for (const x of u.where) {
    const w = Es(x), P = V(w);
    m = m.pipe(he(([C, E]) => Ee(P(E))));
  }
  if (u.fnWhere && u.fnWhere.length > 0) for (const x of u.fnWhere) m = m.pipe(he(([w, P]) => Ee(x(P))));
  if (u.distinct && !u.fnSelect && !u.select) throw new Yo();
  if (u.fnSelect ? m = m.pipe($(([x, w]) => {
    const P = u.fnSelect(w);
    return [x, { ...w, $selected: P }];
  })) : u.select ? m = bu(m, u.select) : m = m.pipe($(([x, w]) => {
    const P = !u.join && !u.groupBy ? w[v] : w;
    return [x, { ...w, $selected: P }];
  })), u.groupBy && u.groupBy.length > 0 ? m = zn(m, u.groupBy, u.having, u.select, u.fnHaving) : u.select && Object.values(u.select).some((w) => w.type === "agg") && (m = zn(m, [], u.having, u.select, u.fnHaving)), u.having && (!u.groupBy || u.groupBy.length === 0) && !(u.select ? Object.values(u.select).some((w) => w.type === "agg") : false)) throw new Xo();
  if (u.fnHaving && u.fnHaving.length > 0 && (!u.groupBy || u.groupBy.length === 0)) for (const x of u.fnHaving) m = m.pipe(he(([w, P]) => x(P)));
  if (u.distinct && (m = m.pipe(Kc(([x, w]) => w.$selected))), u.orderBy && u.orderBy.length > 0) {
    const P = cl(t, m, u.orderBy, u.select || {}, s[b], o, a, u.limit, u.offset).pipe($(([E, [I, M]]) => {
      const F = I.$selected, J = bs(F);
      return [E, [J, M]];
    })), C = { collectionId: b, pipeline: P, sourceWhereClauses: d, aliasToCollectionId: f, aliasRemapping: y };
    return c.set(t, C), C;
  } else if (u.limit !== void 0 || u.offset !== void 0) throw new Zo();
  const k = m.pipe($(([x, w]) => {
    const P = w.$selected, C = bs(P);
    return [x, [C, void 0]];
  })), _ = { collectionId: b, pipeline: k, sourceWhereClauses: d, aliasToCollectionId: f, aliasRemapping: y };
  return c.set(t, _), _;
}
function Ru(t) {
  const e = /* @__PURE__ */ new Set();
  if (t.from.type === "collectionRef" && e.add(t.from.alias), t.join) for (const s of t.join) s.from.type === "collectionRef" && e.add(s.from.alias);
  return e;
}
function Ss(t, e = /* @__PURE__ */ new Set()) {
  const s = Ru(t);
  for (const i of s) if (e.has(i)) throw new ea(i, Array.from(e));
  const n = /* @__PURE__ */ new Set([...e, ...s]);
  if (t.from.type === "queryRef" && Ss(t.from.query, n), t.join) for (const i of t.join) i.from.type === "queryRef" && Ss(i.from.query, n);
}
function Cu(t, e, s, n, i, r, o, a, c, l, h, u, d) {
  switch (t.type) {
    case "collectionRef": {
      const p = e[t.alias];
      if (!p) throw new wi(t.alias, t.collection.id, Object.keys(e));
      return h[t.alias] = t.collection.id, { alias: t.alias, input: p, collectionId: t.collection.id };
    }
    case "queryRef": {
      const p = l.get(t.query) || t.query, f = Vs(p, e, s, n, i, r, o, a, c, l);
      Object.assign(h, f.aliasToCollectionId), Object.assign(u, f.aliasRemapping);
      const y = l.has(t.query), g = t.query.from.alias;
      if (!(!y && t.alias === g)) for (const [R, k] of f.sourceWhereClauses) d.set(R, k);
      const S = Object.keys(f.aliasToCollectionId).find((R) => f.aliasToCollectionId[R] === f.collectionId);
      S && S !== t.alias && (u[t.alias] = S);
      const m = f.pipeline.pipe($((R) => {
        const [k, [_, x]] = R, w = bs(_);
        return [k, w];
      }));
      return { alias: t.alias, input: m, collectionId: f.collectionId };
    }
    default:
      throw new ta(t.type);
  }
}
function _u(t) {
  return t instanceof U || t && typeof t == "object" && "type" in t && t.type === "val";
}
function bs(t) {
  return _u(t) ? t.value : t;
}
function xs(t, e, s) {
  if (t.from.type === "queryRef" && e.from.type === "queryRef" && (s.set(t.from.query, e.from.query), xs(t.from.query, e.from.query, s)), t.join && e.join) for (let n = 0; n < t.join.length && n < e.join.length; n++) {
    const i = t.join[n], r = e.join[n];
    i.from.type === "queryRef" && r.from.type === "queryRef" && (s.set(i.from.query, r.from.query), xs(i.from.query, r.from.query, s));
  }
}
function qs(t, e) {
  const s = t.type;
  if (s === "val") return new U(t.value);
  if (s === "ref") {
    const n = t.path;
    if (Array.isArray(n)) {
      if (n[0] === e && n.length > 1) return new N(n.slice(1));
      if (n.length === 1 && n[0] !== void 0) return new N([n[0]]);
    }
    return new N(Array.isArray(n) ? n : [String(n)]);
  } else {
    const n = [];
    for (const i of t.args) {
      const r = qs(i, e);
      n.push(r);
    }
    return new G(t.name, n);
  }
}
function Zt(t, e) {
  return t.map((n) => {
    const i = qs(n.expression, e);
    return { ...n, expression: i };
  });
}
const Gn = /* @__PURE__ */ Symbol.for("@tanstack/db.collection-config-builder");
class ku {
  constructor(e, s, n, i) {
    this.alias = e, this.collectionId = s, this.collection = n, this.collectionConfigBuilder = i, this.biggest = void 0, this.subscriptionLoadingPromises = /* @__PURE__ */ new Map(), this.sentToD2Keys = /* @__PURE__ */ new Set();
  }
  subscribe() {
    const e = this.getWhereClauseForAlias();
    if (e) {
      const s = qs(e, this.alias);
      return this.subscribeToChanges(s);
    }
    return this.subscribeToChanges();
  }
  subscribeToChanges(e) {
    const s = this.getOrderByInfo(), n = (a) => {
      a instanceof Promise && this.collectionConfigBuilder.liveQueryCollection._sync.trackLoadPromise(a);
    }, i = (a) => {
      const c = a.subscription;
      if (a.status === "loadingSubset") this.ensureLoadingPromise(c);
      else {
        const l = this.subscriptionLoadingPromises.get(c);
        l && (this.subscriptionLoadingPromises.delete(c), l.resolve());
      }
    };
    let r;
    if (s) r = this.subscribeToOrderedChanges(e, s, i, n);
    else {
      const a = !this.collectionConfigBuilder.isLazyAlias(this.alias);
      r = this.subscribeToMatchingChanges(e, a, i);
    }
    r.status === "loadingSubset" && this.ensureLoadingPromise(r);
    const o = () => {
      const a = this.subscriptionLoadingPromises.get(r);
      a && (this.subscriptionLoadingPromises.delete(r), a.resolve()), r.unsubscribe();
    };
    return this.collectionConfigBuilder.currentSyncState.unsubscribeCallbacks.add(o), r;
  }
  sendChangesToPipeline(e, s) {
    const n = Array.isArray(e) ? e : [...e], i = [];
    for (const c of n) {
      if (c.type === "insert") {
        if (this.sentToD2Keys.has(c.key)) continue;
        this.sentToD2Keys.add(c.key);
      } else c.type === "delete" && this.sentToD2Keys.delete(c.key);
      i.push(c);
    }
    const r = this.collectionConfigBuilder.currentSyncState.inputs[this.alias], a = Iu(r, i, this.collection.config.getKey) > 0 ? s : void 0;
    this.collectionConfigBuilder.scheduleGraphRun(a, { alias: this.alias });
  }
  subscribeToMatchingChanges(e, s, n) {
    const i = (y) => {
      this.sendChangesToPipeline(y);
    }, { orderBy: r, limit: o, offset: a } = this.collectionConfigBuilder.query, c = o !== void 0 && a !== void 0 ? o + a : o, l = r ? Zt(r, this.alias) : void 0, h = (l == null ? void 0 : l.every((y) => {
      const g = y.expression;
      if (g.type !== "ref") return false;
      const v = g.path;
      return Array.isArray(v) && v.length === 1;
    })) ?? false, u = h ? l : void 0, d = h ? c : void 0, p = s ? (y) => {
      y instanceof Promise && this.collectionConfigBuilder.liveQueryCollection._sync.trackLoadPromise(y);
    } : void 0;
    return this.collection.subscribeChanges(i, { ...s && { includeInitialState: s }, whereExpression: e, onStatusChange: n, orderBy: u, limit: d, onLoadSubsetResult: p });
  }
  subscribeToOrderedChanges(e, s, n, i) {
    const { orderBy: r, offset: o, limit: a, index: c } = s, l = (y) => {
      y instanceof Promise && (this.pendingOrderedLoadPromise = y, y.finally(() => {
        this.pendingOrderedLoadPromise === y && (this.pendingOrderedLoadPromise = void 0);
      })), i(y);
    };
    this.orderedLoadSubsetResult = l;
    const h = {}, u = (y) => {
      const g = Array.isArray(y) ? y : [...y];
      this.trackSentValues(g, s.comparator);
      const v = Eu(g);
      this.sendChangesToPipelineWithTracking(v, h.current);
    }, d = this.collection.subscribeChanges(u, { whereExpression: e, onStatusChange: n });
    h.current = d;
    const p = this.collection.on("truncate", () => {
      this.biggest = void 0, this.lastLoadRequestKey = void 0, this.pendingOrderedLoadPromise = void 0, this.sentToD2Keys.clear();
    });
    d.on("unsubscribed", () => {
      p();
    });
    const f = Zt(r, this.alias);
    return c ? (d.setOrderByIndex(c), d.requestLimitedSnapshot({ limit: o + a, orderBy: f, trackLoadSubsetPromise: false, onLoadSubsetResult: l })) : d.requestSnapshot({ orderBy: f, limit: o + a, trackLoadSubsetPromise: false, onLoadSubsetResult: l }), d;
  }
  loadMoreIfNeeded(e) {
    const s = this.getOrderByInfo();
    if (!s) return true;
    const { dataNeeded: n } = s;
    if (!n || this.pendingOrderedLoadPromise) return true;
    const i = n();
    return i > 0 && this.loadNextItems(i, e), true;
  }
  sendChangesToPipelineWithTracking(e, s) {
    if (!this.getOrderByInfo()) {
      this.sendChangesToPipeline(e);
      return;
    }
    const i = s;
    i[Gn] ?? (i[Gn] = this.loadMoreIfNeeded.bind(this, s)), this.sendChangesToPipeline(e, i[Gn]);
  }
  loadNextItems(e, s) {
    const n = this.getOrderByInfo();
    if (!n) return;
    const { orderBy: i, valueExtractorForRawRow: r, offset: o } = n, a = this.biggest, c = a ? r(a) : void 0;
    let l;
    c !== void 0 && (l = Array.isArray(c) ? c : [c]);
    const h = this.getLoadRequestKey({ minValues: l, offset: o, limit: e });
    if (this.lastLoadRequestKey === h) return;
    const u = Zt(i, this.alias);
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
      const i = !this.sentToD2Keys.has(n.key);
      this.biggest ? s(this.biggest, n.value) < 0 ? (this.biggest = n.value, this.lastLoadRequestKey = void 0) : i && (this.lastLoadRequestKey = void 0) : (this.biggest = n.value, this.lastLoadRequestKey = void 0);
    }
  }
  ensureLoadingPromise(e) {
    if (this.subscriptionLoadingPromises.has(e)) return;
    let s;
    const n = new Promise((i) => {
      s = i;
    });
    this.subscriptionLoadingPromises.set(e, { resolve: s }), this.collectionConfigBuilder.liveQueryCollection._sync.trackLoadPromise(n);
  }
  getLoadRequestKey(e) {
    return Bs({ minValues: e.minValues ?? null, offset: e.offset, limit: e.limit });
  }
}
function Iu(t, e, s) {
  const n = [];
  for (const i of e) {
    const r = s(i.value);
    i.type === "insert" ? n.push([[r, i.value], 1]) : i.type === "update" ? (n.push([[r, i.previousValue], -1]), n.push([[r, i.value], 1])) : n.push([[r, i.value], -1]);
  }
  return n.length !== 0 && t.sendData(new T(n)), n.length;
}
function* Eu(t) {
  for (const e of t) e.type === "update" ? (yield { type: "delete", key: e.key, value: e.previousValue }, yield { type: "insert", key: e.key, value: e.value }) : yield e;
}
const Ki = /* @__PURE__ */ new WeakMap();
function Ou(t) {
  var _a5, _b2, _c3;
  return (_c3 = (_b2 = (_a5 = t.utils) == null ? void 0 : _a5[js]) == null ? void 0 : _b2.getBuilder) == null ? void 0 : _c3.call(_b2);
}
function Mu(t, e) {
  Ki.set(t, e);
}
function Tu(t) {
  return Ki.get(t);
}
let Au = 0;
class Lu {
  constructor(e) {
    this.config = e, this.compiledAliasToCollectionId = {}, this.resultKeys = /* @__PURE__ */ new WeakMap(), this.orderByIndices = /* @__PURE__ */ new WeakMap(), this.isGraphRunning = false, this.runCount = 0, this.isInErrorState = false, this.aliasDependencies = {}, this.builderDependencies = /* @__PURE__ */ new Set(), this.pendingGraphRuns = /* @__PURE__ */ new Map(), this.subscriptions = {}, this.lazySourcesCallbacks = {}, this.lazySources = /* @__PURE__ */ new Set(), this.optimizableOrderByCollections = {}, this.id = e.id || `live-query-${++Au}`, this.query = Fu(e), this.collections = Ku(this.query);
    const s = Du(this.query);
    this.collectionByAlias = {};
    for (const [n, i] of s.entries()) {
      const r = this.collections[n];
      if (r) for (const o of i) this.collectionByAlias[o] = r;
    }
    this.query.orderBy && this.query.orderBy.length > 0 && (this.compare = Bu(this.orderByIndices)), this.compareOptions = this.config.defaultStringCollation ?? Di(this.query).compareOptions, this.compileBasePipeline();
  }
  hasJoins(e) {
    return !!(e.join && e.join.length > 0 || e.from.type === "queryRef" && this.hasJoins(e.from.query));
  }
  getConfig() {
    return { id: this.id, getKey: this.config.getKey || ((e) => this.resultKeys.get(e)), sync: this.getSyncConfig(), compare: this.compare, defaultStringCollation: this.compareOptions, gcTime: this.config.gcTime || 5e3, schema: this.config.schema, onInsert: this.config.onInsert, onUpdate: this.config.onUpdate, onDelete: this.config.onDelete, startSync: this.config.startSync, singleResult: this.query.singleResult, utils: { getRunCount: this.getRunCount.bind(this), setWindow: this.setWindow.bind(this), getWindow: this.getWindow.bind(this), [js]: { getBuilder: () => this, hasCustomGetKey: !!this.config.getKey, hasJoins: this.hasJoins(this.query), hasDistinct: !!this.query.distinct } } };
  }
  setWindow(e) {
    var _a5, _b2;
    if (!this.windowFn) throw new Sa();
    return this.currentWindow = e, this.windowFn(e), (_a5 = this.maybeRunGraphFn) == null ? void 0 : _a5.call(this), ((_b2 = this.liveQueryCollection) == null ? void 0 : _b2.isLoadingSubset) ? new Promise((s) => {
      const n = this.liveQueryCollection.on("loadingSubset:change", (i) => {
        i.isLoadingSubset || (n(), s());
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
        const { begin: s, commit: n } = this.currentSyncConfig, i = this.currentSyncState;
        if (this.isInErrorState) return;
        if (i.subscribedToAllCollections) {
          for (; i.graph.pendingWork(); ) i.graph.run(), (_a5 = i.flushPendingChanges) == null ? void 0 : _a5.call(i), e == null ? void 0 : e();
          i.messagesCount === 0 && (s(), n()), this.updateLiveQueryStatus(this.currentSyncConfig);
        }
      } finally {
        this.isGraphRunning = false;
      }
    }
  }
  scheduleGraphRun(e, s) {
    var _a5;
    const n = (s == null ? void 0 : s.contextId) ?? ((_a5 = wt()) == null ? void 0 : _a5.id), i = (s == null ? void 0 : s.jobId) ?? this, r = (() => {
      if (s == null ? void 0 : s.dependencies) return s.dependencies;
      const c = new Set(this.builderDependencies);
      if (s == null ? void 0 : s.alias) {
        const l = this.aliasDependencies[s.alias];
        if (l) for (const h of l) c.add(h);
      }
      return c.delete(this), Array.from(c);
    })();
    if (n) for (const c of r) typeof c.scheduleGraphRun == "function" && c.scheduleGraphRun(void 0, { contextId: n });
    if (!this.currentSyncConfig || !this.currentSyncState) throw new Error("scheduleGraphRun called without active sync session. This should not happen.");
    let o = n ? this.pendingGraphRuns.get(n) : void 0;
    o || (o = { loadCallbacks: /* @__PURE__ */ new Set() }, n && this.pendingGraphRuns.set(n, o)), e && o.loadCallbacks.add(e);
    const a = n ? void 0 : o;
    St.schedule({ contextId: n, jobId: i, dependencies: r, run: () => this.executeGraphRun(n, a) });
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
    const i = () => {
      let r = true, o;
      if (n.loadCallbacks.forEach((a) => {
        try {
          r = a() && r;
        } catch (c) {
          r = false, o ?? (o = c);
        }
      }), o) throw o;
      return r;
    };
    this.maybeRunGraph(i);
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
    this.currentSyncState = n, this.unsubscribeFromSchedulerClears = St.onClear((o) => {
      this.clearPendingGraphRun(o);
    });
    const i = e.collection.on("loadingSubset:change", (o) => {
      o.isLoadingSubset || this.updateLiveQueryStatus(e);
    });
    s.unsubscribeCallbacks.add(i);
    const r = this.subscribeToAllCollections(e, n);
    return this.maybeRunGraphFn = () => this.scheduleGraphRun(r), this.scheduleGraphRun(r), () => {
      var _a5;
      s.unsubscribeCallbacks.forEach((o) => o()), this.currentSyncConfig = void 0, this.currentSyncState = void 0, this.pendingGraphRuns.clear(), this.graphCache = void 0, this.inputsCache = void 0, this.pipelineCache = void 0, this.sourceWhereClausesCache = void 0, this.lazySources.clear(), this.optimizableOrderByCollections = {}, this.lazySourcesCallbacks = {}, Object.keys(this.subscriptions).forEach((o) => delete this.subscriptions[o]), this.compiledAliasToCollectionId = {}, (_a5 = this.unsubscribeFromSchedulerClears) == null ? void 0 : _a5.call(this), this.unsubscribeFromSchedulerClears = void 0;
    };
  }
  compileBasePipeline() {
    this.graphCache = new gc(), this.inputsCache = Object.fromEntries(Object.keys(this.collectionByAlias).map((n) => [n, this.graphCache.newInput()]));
    const e = Vs(this.query, this.inputsCache, this.collections, this.subscriptions, this.lazySourcesCallbacks, this.lazySources, this.optimizableOrderByCollections, (n) => {
      this.windowFn = n;
    });
    this.pipelineCache = e.pipeline, this.sourceWhereClausesCache = e.sourceWhereClauses, this.compiledAliasToCollectionId = e.aliasToCollectionId;
    const s = Object.keys(this.compiledAliasToCollectionId).filter((n) => !Object.hasOwn(this.inputsCache, n));
    if (s.length > 0) throw new wa(s);
  }
  maybeCompileBasePipeline() {
    return (!this.graphCache || !this.inputsCache || !this.pipelineCache) && this.compileBasePipeline(), { graph: this.graphCache, inputs: this.inputsCache, pipeline: this.pipelineCache };
  }
  extendPipelineWithChangeProcessing(e, s) {
    const { begin: n, commit: i } = e, { graph: r, inputs: o, pipeline: a } = this.maybeCompileBasePipeline();
    let c = /* @__PURE__ */ new Map();
    return a.pipe(Mc((l) => {
      const h = l.getInner();
      s.messagesCount += h.length, h.reduce(ju, c);
    })), s.flushPendingChanges = () => {
      c.size !== 0 && (n(), c.forEach(this.applyChanges.bind(this, e)), i(), c = /* @__PURE__ */ new Map());
    }, r.finalize(), s.graph = r, s.inputs = o, s.pipeline = a, s;
  }
  applyChanges(e, s, n) {
    const { write: i, collection: r } = e, { deletes: o, inserts: a, value: c, orderByIndex: l } = s;
    if (this.resultKeys.set(c, n), l !== void 0 && this.orderByIndices.set(c, l), a && o === 0) i({ value: c, type: "insert" });
    else if (a > o || a === o && r.has(r.getKeyFromItem(c))) i({ value: c, type: "update" });
    else if (o > 0) i({ value: c, type: "delete" });
    else throw new Error(`Could not apply changes: ${JSON.stringify(s)}. This should never happen.`);
  }
  handleSourceStatusChange(e, s, n) {
    const { status: i } = n;
    if (i === "error") {
      this.transitionToError(`Source collection '${s}' entered error state`);
      return;
    }
    if (i === "cleaned-up") {
      this.transitionToError(`Source collection '${s}' was manually cleaned up while live query '${this.id}' depends on it. Live queries prevent automatic GC, so this was likely a manual cleanup() call.`);
      return;
    }
    this.updateLiveQueryStatus(e);
  }
  updateLiveQueryStatus(e) {
    var _a5, _b2;
    const { markReady: s } = e;
    if (this.isInErrorState) return;
    const n = (_a5 = this.currentSyncState) == null ? void 0 : _a5.subscribedToAllCollections, i = this.allCollectionsReady(), r = (_b2 = this.liveQueryCollection) == null ? void 0 : _b2.isLoadingSubset;
    n && i && !r && s();
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
    const i = n.map(([o, a]) => {
      const c = this.collectionByAlias[o] ?? this.collections[a], l = Tu(c);
      l && l !== this ? (this.aliasDependencies[o] = [l], this.builderDependencies.add(l)) : this.aliasDependencies[o] = [];
      const h = new ku(o, a, c, this), u = c.on("status:change", (f) => {
        this.handleSourceStatusChange(e, a, f);
      });
      s.unsubscribeCallbacks.add(u);
      const d = h.subscribe();
      return this.subscriptions[o] = d, h.loadMoreIfNeeded.bind(h, d);
    }), r = () => (i.map((o) => o()), true);
    return s.subscribedToAllCollections = true, r;
  }
}
function Fu(t) {
  return typeof t.query == "function" ? Yl(t.query) : Mi(t.query);
}
function Bu(t) {
  return (e, s) => {
    const n = t.get(e), i = t.get(s);
    return n && i ? n < i ? -1 : n > i ? 1 : 0 : 0;
  };
}
function Ku(t) {
  const e = {};
  function s(i) {
    i.type === "collectionRef" ? e[i.collection.id] = i.collection : i.type === "queryRef" && n(i.query);
  }
  function n(i) {
    if (i.from && s(i.from), i.join && Array.isArray(i.join)) for (const r of i.join) r.from && s(r.from);
  }
  return n(t), e;
}
function Di(t) {
  const e = t.from;
  if (e.type === "collectionRef") return e.collection;
  if (e.type === "queryRef") return Di(e.query);
  throw new Error(`Failed to extract collection. Invalid FROM clause: ${JSON.stringify(t)}`);
}
function Du(t) {
  const e = /* @__PURE__ */ new Map();
  function s(i) {
    if (i) if (i.type === "collectionRef") {
      const { id: r } = i.collection, o = e.get(r);
      o ? o.add(i.alias) : e.set(r, /* @__PURE__ */ new Set([i.alias]));
    } else i.type === "queryRef" && n(i.query);
  }
  function n(i) {
    if (i && (s(i.from), i.join)) for (const r of i.join) s(r.from);
  }
  return n(t), e;
}
function ju(t, [[e, s], n]) {
  const [i, r] = s, o = t.get(e) || { deletes: 0, inserts: 0, value: i, orderByIndex: r };
  return n < 0 ? o.deletes += Math.abs(n) : n > 0 && (o.inserts += n, o.value = i, r !== void 0 && (o.orderByIndex = r)), t.set(e, o), t;
}
function Qn(t) {
  return new Lu(t).getConfig();
}
function Zu(t) {
  if (typeof t == "function") {
    const s = Qn({ query: t });
    return Jn(s);
  } else {
    const e = t, s = Qn(e);
    return e.utils && (s.utils = { ...s.utils, ...e.utils }), Jn(s);
  }
}
function Jn(t) {
  const e = Hl(t), s = Ou(t);
  return s && Mu(e, s), e;
}
export {
  Yu as B,
  Ei as C,
  Xu as Q,
  Qu as R,
  nn as a,
  Vr as b,
  Vu as c,
  _e as d,
  Hu as e,
  Re as f,
  qu as g,
  Wt as h,
  Zn as i,
  Gu as j,
  re as k,
  ne as l,
  Ge as m,
  X as n,
  Wu as o,
  Ju as p,
  B as q,
  q as r,
  Zu as s,
  ve as t,
  Hl as u,
  Or as v,
  us as w,
  Qn as x
};
