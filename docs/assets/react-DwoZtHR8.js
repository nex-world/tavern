import { g as sf } from "./index-BHy3yCie.js";
import { r as I1, c as X1, o as K1, s as Q1, f as P1, a as Z1, h as k1, b as Hm, l as $1, d as J1, _ as ga, e as xh, g as F1, i as W1, j as Xi, m as Lm, k as eE } from "./vendor-KHQmFMTG.js";
import { c as W, a as Gm } from "./@radix-ui-BQCqNqg0.js";
import { p as tE } from "./immer-BCQU3qJI.js";
function nE(l, i) {
  for (var r = 0; r < i.length; r++) {
    const c = i[r];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const s in c) if (s !== "default" && !(s in l)) {
        const f = Object.getOwnPropertyDescriptor(c, s);
        f && Object.defineProperty(l, s, f.get ? f : { enumerable: true, get: () => c[s] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
var Ts = { exports: {} }, Zo = {};
var Ym;
function aE() {
  if (Ym) return Zo;
  Ym = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(c, s, f) {
    var v = null;
    if (f !== void 0 && (v = "" + f), s.key !== void 0 && (v = "" + s.key), "key" in s) {
      f = {};
      for (var g in s) g !== "key" && (f[g] = s[g]);
    } else f = s;
    return s = f.ref, { $$typeof: l, type: c, key: v, ref: s !== void 0 ? s : null, props: f };
  }
  return Zo.Fragment = i, Zo.jsx = r, Zo.jsxs = r, Zo;
}
var Vm;
function lE() {
  return Vm || (Vm = 1, Ts.exports = aE()), Ts.exports;
}
var E = lE(), _s = { exports: {} }, ko = {}, As = { exports: {} }, de = {};
var qm;
function oE() {
  if (qm) return de;
  qm = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), v = /* @__PURE__ */ Symbol.for("react.context"), g = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), h = /* @__PURE__ */ Symbol.for("react.activity"), A = Symbol.iterator;
  function w(_) {
    return _ === null || typeof _ != "object" ? null : (_ = A && _[A] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var O = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, T = {};
  function D(_, R, B) {
    this.props = _, this.context = R, this.refs = T, this.updater = B || O;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(_, R) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, R, "setState");
  }, D.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function z() {
  }
  z.prototype = D.prototype;
  function L(_, R, B) {
    this.props = _, this.context = R, this.refs = T, this.updater = B || O;
  }
  var X = L.prototype = new z();
  X.constructor = L, C(X, D.prototype), X.isPureReactComponent = true;
  var $ = Array.isArray;
  function J() {
  }
  var V = { H: null, A: null, T: null, S: null }, ae = Object.prototype.hasOwnProperty;
  function ge(_, R, B) {
    var I = B.ref;
    return { $$typeof: l, type: _, key: R, ref: I !== void 0 ? I : null, props: B };
  }
  function Ee(_, R) {
    return ge(_.type, R, _.props);
  }
  function me(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === l;
  }
  function ye(_) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(B) {
      return R[B];
    });
  }
  var pe = /\/+/g;
  function xe(_, R) {
    return typeof _ == "object" && _ !== null && _.key != null ? ye("" + _.key) : R.toString(36);
  }
  function Te(_) {
    switch (_.status) {
      case "fulfilled":
        return _.value;
      case "rejected":
        throw _.reason;
      default:
        switch (typeof _.status == "string" ? _.then(J, J) : (_.status = "pending", _.then(function(R) {
          _.status === "pending" && (_.status = "fulfilled", _.value = R);
        }, function(R) {
          _.status === "pending" && (_.status = "rejected", _.reason = R);
        })), _.status) {
          case "fulfilled":
            return _.value;
          case "rejected":
            throw _.reason;
        }
    }
    throw _;
  }
  function K(_, R, B, I, Q) {
    var F = typeof _;
    (F === "undefined" || F === "boolean") && (_ = null);
    var q = false;
    if (_ === null) q = true;
    else switch (F) {
      case "bigint":
      case "string":
      case "number":
        q = true;
        break;
      case "object":
        switch (_.$$typeof) {
          case l:
          case i:
            q = true;
            break;
          case S:
            return q = _._init, K(q(_._payload), R, B, I, Q);
        }
    }
    if (q) return Q = Q(_), q = I === "" ? "." + xe(_, 0) : I, $(Q) ? (B = "", q != null && (B = q.replace(pe, "$&/") + "/"), K(Q, R, B, "", function(be) {
      return be;
    })) : Q != null && (me(Q) && (Q = Ee(Q, B + (Q.key == null || _ && _.key === Q.key ? "" : ("" + Q.key).replace(pe, "$&/") + "/") + q)), R.push(Q)), 1;
    q = 0;
    var ee = I === "" ? "." : I + ":";
    if ($(_)) for (var ie = 0; ie < _.length; ie++) I = _[ie], F = ee + xe(I, ie), q += K(I, R, B, F, Q);
    else if (ie = w(_), typeof ie == "function") for (_ = ie.call(_), ie = 0; !(I = _.next()).done; ) I = I.value, F = ee + xe(I, ie++), q += K(I, R, B, F, Q);
    else if (F === "object") {
      if (typeof _.then == "function") return K(Te(_), R, B, I, Q);
      throw R = String(_), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
    }
    return q;
  }
  function te(_, R, B) {
    if (_ == null) return _;
    var I = [], Q = 0;
    return K(_, I, "", "", function(F) {
      return R.call(B, F, Q++);
    }), I;
  }
  function oe(_) {
    if (_._status === -1) {
      var R = _._result;
      R = R(), R.then(function(B) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = B);
      }, function(B) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = B);
      }), _._status === -1 && (_._status = 0, _._result = R);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var ne = typeof reportError == "function" ? reportError : function(_) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var R = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof _ == "object" && _ !== null && typeof _.message == "string" ? String(_.message) : String(_), error: _ });
      if (!window.dispatchEvent(R)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", _);
      return;
    }
    console.error(_);
  }, ve = { map: te, forEach: function(_, R, B) {
    te(_, function() {
      R.apply(this, arguments);
    }, B);
  }, count: function(_) {
    var R = 0;
    return te(_, function() {
      R++;
    }), R;
  }, toArray: function(_) {
    return te(_, function(R) {
      return R;
    }) || [];
  }, only: function(_) {
    if (!me(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } };
  return de.Activity = h, de.Children = ve, de.Component = D, de.Fragment = r, de.Profiler = s, de.PureComponent = L, de.StrictMode = c, de.Suspense = y, de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, de.__COMPILER_RUNTIME = { __proto__: null, c: function(_) {
    return V.H.useMemoCache(_);
  } }, de.cache = function(_) {
    return function() {
      return _.apply(null, arguments);
    };
  }, de.cacheSignal = function() {
    return null;
  }, de.cloneElement = function(_, R, B) {
    if (_ == null) throw Error("The argument must be a React element, but you passed " + _ + ".");
    var I = C({}, _.props), Q = _.key;
    if (R != null) for (F in R.key !== void 0 && (Q = "" + R.key), R) !ae.call(R, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && R.ref === void 0 || (I[F] = R[F]);
    var F = arguments.length - 2;
    if (F === 1) I.children = B;
    else if (1 < F) {
      for (var q = Array(F), ee = 0; ee < F; ee++) q[ee] = arguments[ee + 2];
      I.children = q;
    }
    return ge(_.type, Q, I);
  }, de.createContext = function(_) {
    return _ = { $$typeof: v, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null }, _.Provider = _, _.Consumer = { $$typeof: f, _context: _ }, _;
  }, de.createElement = function(_, R, B) {
    var I, Q = {}, F = null;
    if (R != null) for (I in R.key !== void 0 && (F = "" + R.key), R) ae.call(R, I) && I !== "key" && I !== "__self" && I !== "__source" && (Q[I] = R[I]);
    var q = arguments.length - 2;
    if (q === 1) Q.children = B;
    else if (1 < q) {
      for (var ee = Array(q), ie = 0; ie < q; ie++) ee[ie] = arguments[ie + 2];
      Q.children = ee;
    }
    if (_ && _.defaultProps) for (I in q = _.defaultProps, q) Q[I] === void 0 && (Q[I] = q[I]);
    return ge(_, F, Q);
  }, de.createRef = function() {
    return { current: null };
  }, de.forwardRef = function(_) {
    return { $$typeof: g, render: _ };
  }, de.isValidElement = me, de.lazy = function(_) {
    return { $$typeof: S, _payload: { _status: -1, _result: _ }, _init: oe };
  }, de.memo = function(_, R) {
    return { $$typeof: m, type: _, compare: R === void 0 ? null : R };
  }, de.startTransition = function(_) {
    var R = V.T, B = {};
    V.T = B;
    try {
      var I = _(), Q = V.S;
      Q !== null && Q(B, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(J, ne);
    } catch (F) {
      ne(F);
    } finally {
      R !== null && B.types !== null && (R.types = B.types), V.T = R;
    }
  }, de.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, de.use = function(_) {
    return V.H.use(_);
  }, de.useActionState = function(_, R, B) {
    return V.H.useActionState(_, R, B);
  }, de.useCallback = function(_, R) {
    return V.H.useCallback(_, R);
  }, de.useContext = function(_) {
    return V.H.useContext(_);
  }, de.useDebugValue = function() {
  }, de.useDeferredValue = function(_, R) {
    return V.H.useDeferredValue(_, R);
  }, de.useEffect = function(_, R) {
    return V.H.useEffect(_, R);
  }, de.useEffectEvent = function(_) {
    return V.H.useEffectEvent(_);
  }, de.useId = function() {
    return V.H.useId();
  }, de.useImperativeHandle = function(_, R, B) {
    return V.H.useImperativeHandle(_, R, B);
  }, de.useInsertionEffect = function(_, R) {
    return V.H.useInsertionEffect(_, R);
  }, de.useLayoutEffect = function(_, R) {
    return V.H.useLayoutEffect(_, R);
  }, de.useMemo = function(_, R) {
    return V.H.useMemo(_, R);
  }, de.useOptimistic = function(_, R) {
    return V.H.useOptimistic(_, R);
  }, de.useReducer = function(_, R, B) {
    return V.H.useReducer(_, R, B);
  }, de.useRef = function(_) {
    return V.H.useRef(_);
  }, de.useState = function(_) {
    return V.H.useState(_);
  }, de.useSyncExternalStore = function(_, R, B) {
    return V.H.useSyncExternalStore(_, R, B);
  }, de.useTransition = function() {
    return V.H.useTransition();
  }, de.version = "19.2.4", de;
}
var Im;
function tr() {
  return Im || (Im = 1, As.exports = oE()), As.exports;
}
var Rs = { exports: {} }, mt = {};
var Xm;
function rE() {
  if (Xm) return mt;
  Xm = 1;
  var l = tr();
  function i(y) {
    var m = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++) m += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + y + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var c = { d: { f: r, r: function() {
    throw Error(i(522));
  }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function f(y, m, S) {
    var h = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: s, key: h == null ? null : "" + h, children: y, containerInfo: m, implementation: S };
  }
  var v = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(y, m) {
    if (y === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, mt.createPortal = function(y, m) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(i(299));
    return f(y, m, null, S);
  }, mt.flushSync = function(y) {
    var m = v.T, S = c.p;
    try {
      if (v.T = null, c.p = 2, y) return y();
    } finally {
      v.T = m, c.p = S, c.d.f();
    }
  }, mt.preconnect = function(y, m) {
    typeof y == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, c.d.C(y, m));
  }, mt.prefetchDNS = function(y) {
    typeof y == "string" && c.d.D(y);
  }, mt.preinit = function(y, m) {
    if (typeof y == "string" && m && typeof m.as == "string") {
      var S = m.as, h = g(S, m.crossOrigin), A = typeof m.integrity == "string" ? m.integrity : void 0, w = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      S === "style" ? c.d.S(y, typeof m.precedence == "string" ? m.precedence : void 0, { crossOrigin: h, integrity: A, fetchPriority: w }) : S === "script" && c.d.X(y, { crossOrigin: h, integrity: A, fetchPriority: w, nonce: typeof m.nonce == "string" ? m.nonce : void 0 });
    }
  }, mt.preinitModule = function(y, m) {
    if (typeof y == "string") if (typeof m == "object" && m !== null) {
      if (m.as == null || m.as === "script") {
        var S = g(m.as, m.crossOrigin);
        c.d.M(y, { crossOrigin: S, integrity: typeof m.integrity == "string" ? m.integrity : void 0, nonce: typeof m.nonce == "string" ? m.nonce : void 0 });
      }
    } else m == null && c.d.M(y);
  }, mt.preload = function(y, m) {
    if (typeof y == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var S = m.as, h = g(S, m.crossOrigin);
      c.d.L(y, S, { crossOrigin: h, integrity: typeof m.integrity == "string" ? m.integrity : void 0, nonce: typeof m.nonce == "string" ? m.nonce : void 0, type: typeof m.type == "string" ? m.type : void 0, fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0, referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0, imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0, imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0, media: typeof m.media == "string" ? m.media : void 0 });
    }
  }, mt.preloadModule = function(y, m) {
    if (typeof y == "string") if (m) {
      var S = g(m.as, m.crossOrigin);
      c.d.m(y, { as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0, crossOrigin: S, integrity: typeof m.integrity == "string" ? m.integrity : void 0 });
    } else c.d.m(y);
  }, mt.requestFormReset = function(y) {
    c.d.r(y);
  }, mt.unstable_batchedUpdates = function(y, m) {
    return y(m);
  }, mt.useFormState = function(y, m, S) {
    return v.H.useFormState(y, m, S);
  }, mt.useFormStatus = function() {
    return v.H.useHostTransitionStatus();
  }, mt.version = "19.2.4", mt;
}
var Km;
function Ch() {
  if (Km) return Rs.exports;
  Km = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
    } catch (i) {
      console.error(i);
    }
  }
  return l(), Rs.exports = rE(), Rs.exports;
}
var Qm;
function iE() {
  if (Qm) return ko;
  Qm = 1;
  var l = I1(), i = tr(), r = Ch();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function v(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (f(e) !== e) throw Error(c(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (a = o.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === n) return y(o), e;
          if (u === a) return y(o), t;
          u = u.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== a.return) n = o, a = u;
      else {
        for (var p = false, b = o.child; b; ) {
          if (b === n) {
            p = true, n = o, a = u;
            break;
          }
          if (b === a) {
            p = true, a = o, n = u;
            break;
          }
          b = b.sibling;
        }
        if (!p) {
          for (b = u.child; b; ) {
            if (b === n) {
              p = true, n = u, a = o;
              break;
            }
            if (b === a) {
              p = true, a = u, n = o;
              break;
            }
            b = b.sibling;
          }
          if (!p) throw Error(c(189));
        }
      }
      if (n.alternate !== a) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function S(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = S(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var h = Object.assign, A = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.transitional.element"), O = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), T = /* @__PURE__ */ Symbol.for("react.strict_mode"), D = /* @__PURE__ */ Symbol.for("react.profiler"), z = /* @__PURE__ */ Symbol.for("react.consumer"), L = /* @__PURE__ */ Symbol.for("react.context"), X = /* @__PURE__ */ Symbol.for("react.forward_ref"), $ = /* @__PURE__ */ Symbol.for("react.suspense"), J = /* @__PURE__ */ Symbol.for("react.suspense_list"), V = /* @__PURE__ */ Symbol.for("react.memo"), ae = /* @__PURE__ */ Symbol.for("react.lazy"), ge = /* @__PURE__ */ Symbol.for("react.activity"), Ee = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), me = Symbol.iterator;
  function ye(e) {
    return e === null || typeof e != "object" ? null : (e = me && e[me] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var pe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function xe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === pe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case C:
        return "Fragment";
      case D:
        return "Profiler";
      case T:
        return "StrictMode";
      case $:
        return "Suspense";
      case J:
        return "SuspenseList";
      case ge:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case O:
        return "Portal";
      case L:
        return e.displayName || "Context";
      case z:
        return (e._context.displayName || "Context") + ".Consumer";
      case X:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case V:
        return t = e.displayName || null, t !== null ? t : xe(e.type) || "Memo";
      case ae:
        t = e._payload, e = e._init;
        try {
          return xe(e(t));
        } catch {
        }
    }
    return null;
  }
  var Te = Array.isArray, K = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = { pending: false, data: null, method: null, action: null }, ne = [], ve = -1;
  function _(e) {
    return { current: e };
  }
  function R(e) {
    0 > ve || (e.current = ne[ve], ne[ve] = null, ve--);
  }
  function B(e, t) {
    ve++, ne[ve] = e.current, e.current = t;
  }
  var I = _(null), Q = _(null), F = _(null), q = _(null);
  function ee(e, t) {
    switch (B(F, t), B(Q, e), B(I, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? rm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = rm(t), e = im(t, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
    }
    R(I), B(I, e);
  }
  function ie() {
    R(I), R(Q), R(F);
  }
  function be(e) {
    e.memoizedState !== null && B(q, e);
    var t = I.current, n = im(t, e.type);
    t !== n && (B(Q, e), B(I, n));
  }
  function De(e) {
    Q.current === e && (R(I), R(Q)), q.current === e && (R(q), Xo._currentValue = oe);
  }
  var ze, rt;
  function tt(e) {
    if (ze === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ze = t && t[1] || "", rt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + ze + e + rt;
  }
  var En = false;
  function dn(e, t) {
    if (!e || En) return "";
    En = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var Z = function() {
              throw Error();
            };
            if (Object.defineProperty(Z.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Z, []);
              } catch (G) {
                var H = G;
              }
              Reflect.construct(e, [], Z);
            } else {
              try {
                Z.call();
              } catch (G) {
                H = G;
              }
              e.call(Z.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (G) {
              H = G;
            }
            (Z = e()) && typeof Z.catch == "function" && Z.catch(function() {
            });
          }
        } catch (G) {
          if (G && H && typeof G.stack == "string") return [G.stack, H.stack];
        }
        return [null, null];
      } };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      o && o.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var u = a.DetermineComponentFrameRoot(), p = u[0], b = u[1];
      if (p && b) {
        var x = p.split(`
`), U = b.split(`
`);
        for (o = a = 0; a < x.length && !x[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; o < U.length && !U[o].includes("DetermineComponentFrameRoot"); ) o++;
        if (a === x.length || o === U.length) for (a = x.length - 1, o = U.length - 1; 1 <= a && 0 <= o && x[a] !== U[o]; ) o--;
        for (; 1 <= a && 0 <= o; a--, o--) if (x[a] !== U[o]) {
          if (a !== 1 || o !== 1) do
            if (a--, o--, 0 > o || x[a] !== U[o]) {
              var Y = `
` + x[a].replace(" at new ", " at ");
              return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), Y;
            }
          while (1 <= a && 0 <= o);
          break;
        }
      }
    } finally {
      En = false, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? tt(n) : "";
  }
  function tn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return tt(e.type);
      case 16:
        return tt("Lazy");
      case 13:
        return e.child !== t && t !== null ? tt("Suspense Fallback") : tt("Suspense");
      case 19:
        return tt("SuspenseList");
      case 0:
      case 15:
        return dn(e.type, false);
      case 11:
        return dn(e.type.render, false);
      case 1:
        return dn(e.type, true);
      case 31:
        return tt("Activity");
      default:
        return "";
    }
  }
  function Wl(e) {
    try {
      var t = "", n = null;
      do
        t += tn(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Bt = Object.prototype.hasOwnProperty, eo = l.unstable_scheduleCallback, to = l.unstable_cancelCallback, yt = l.unstable_shouldYield, In = l.unstable_requestPaint, bt = l.unstable_now, du = l.unstable_getCurrentPriorityLevel, _a = l.unstable_ImmediatePriority, mr = l.unstable_UserBlockingPriority, Aa = l.unstable_NormalPriority, no = l.unstable_LowPriority, xn = l.unstable_IdlePriority, hr = l.log, Xn = l.unstable_setDisableYieldValue, Ra = null, St = null;
  function nn(e) {
    if (typeof hr == "function" && Xn(e), St && typeof St.setStrictMode == "function") try {
      St.setStrictMode(Ra, e);
    } catch {
    }
  }
  var pt = Math.clz32 ? Math.clz32 : pn, pu = Math.log, ao = Math.LN2;
  function pn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (pu(e) / ao | 0) | 0;
  }
  var el = 256, tl = 262144, Ma = 4194304;
  function vn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function fe(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var o = 0, u = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var b = a & 134217727;
    return b !== 0 ? (a = b & ~u, a !== 0 ? o = vn(a) : (p &= b, p !== 0 ? o = vn(p) : n || (n = b & ~e, n !== 0 && (o = vn(n))))) : (b = a & ~u, b !== 0 ? o = vn(b) : p !== 0 ? o = vn(p) : n || (n = a & ~e, n !== 0 && (o = vn(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & u) === 0 && (u = o & -o, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : o;
  }
  function Ie(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function at(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function vt() {
    var e = Ma;
    return Ma <<= 1, (Ma & 62914560) === 0 && (Ma = 4194304), e;
  }
  function Kn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Qe(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ct(e, t, n, a, o, u) {
    var p = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var b = e.entanglements, x = e.expirationTimes, U = e.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var Y = 31 - pt(n), Z = 1 << Y;
      b[Y] = 0, x[Y] = -1;
      var H = U[Y];
      if (H !== null) for (U[Y] = null, Y = 0; Y < H.length; Y++) {
        var G = H[Y];
        G !== null && (G.lane &= -536870913);
      }
      n &= ~Z;
    }
    a !== 0 && wa(e, a, 0), u !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(p & ~t));
  }
  function wa(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - pt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Tt(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - pt(n), o = 1 << a;
      o & t | e[a] & t && (e[a] |= t), n &= ~o;
    }
  }
  function _t(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : nl(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function nl(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function an(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function vu() {
    var e = te.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Dm(e.type));
  }
  function Qf(e, t) {
    var n = te.p;
    try {
      return te.p = e, t();
    } finally {
      te.p = n;
    }
  }
  var Qn = Math.random().toString(36).slice(2), it = "__reactFiber$" + Qn, At = "__reactProps$" + Qn, al = "__reactContainer$" + Qn, mu = "__reactEvents$" + Qn, Nb = "__reactListeners$" + Qn, zb = "__reactHandles$" + Qn, Pf = "__reactResources$" + Qn, lo = "__reactMarker$" + Qn;
  function hu(e) {
    delete e[it], delete e[At], delete e[mu], delete e[Nb], delete e[zb];
  }
  function ll(e) {
    var t = e[it];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[al] || n[it]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = vm(e); e !== null; ) {
          if (n = e[it]) return n;
          e = vm(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ol(e) {
    if (e = e[it] || e[al]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function oo(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function rl(e) {
    var t = e[Pf];
    return t || (t = e[Pf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function lt(e) {
    e[lo] = true;
  }
  var Zf = /* @__PURE__ */ new Set(), kf = {};
  function Da(e, t) {
    il(e, t), il(e + "Capture", t);
  }
  function il(e, t) {
    for (kf[e] = t, e = 0; e < t.length; e++) Zf.add(t[e]);
  }
  var jb = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), $f = {}, Jf = {};
  function Ub(e) {
    return Bt.call(Jf, e) ? true : Bt.call($f, e) ? false : jb.test(e) ? Jf[e] = true : ($f[e] = true, false);
  }
  function gr(e, t, n) {
    if (Ub(t)) if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(t);
          return;
        case "boolean":
          var a = t.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            e.removeAttribute(t);
            return;
          }
      }
      e.setAttribute(t, "" + n);
    }
  }
  function yr(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Cn(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + a);
    }
  }
  function Xt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ff(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Bb(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var o = a.get, u = a.set;
      return Object.defineProperty(e, t, { configurable: true, get: function() {
        return o.call(this);
      }, set: function(p) {
        n = "" + p, u.call(this, p);
      } }), Object.defineProperty(e, t, { enumerable: a.enumerable }), { getValue: function() {
        return n;
      }, setValue: function(p) {
        n = "" + p;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function gu(e) {
    if (!e._valueTracker) {
      var t = Ff(e) ? "checked" : "value";
      e._valueTracker = Bb(e, t, "" + e[t]);
    }
  }
  function Wf(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(), a = "";
    return e && (a = Ff(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), true) : false;
  }
  function br(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Hb = /[\n"\\]/g;
  function Kt(e) {
    return e.replace(Hb, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function yu(e, t, n, a, o, u, p, b) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Xt(t)) : e.value !== "" + Xt(t) && (e.value = "" + Xt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? bu(e, p, Xt(t)) : n != null ? bu(e, p, Xt(n)) : a != null && e.removeAttribute("value"), o == null && u != null && (e.defaultChecked = !!u), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + Xt(b) : e.removeAttribute("name");
  }
  function ed(e, t, n, a, o, u, p, b) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        gu(e);
        return;
      }
      n = n != null ? "" + Xt(n) : "", t = t != null ? "" + Xt(t) : n, b || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? o, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = b ? e.checked : !!a, e.defaultChecked = !!a, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), gu(e);
  }
  function bu(e, t, n) {
    t === "number" && br(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function ul(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = true;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && a && (e[n].defaultSelected = true);
    } else {
      for (n = "" + Xt(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = true, a && (e[o].defaultSelected = true);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = true);
    }
  }
  function td(e, t, n) {
    if (t != null && (t = "" + Xt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Xt(n) : "";
  }
  function nd(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (Te(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Xt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), gu(e);
  }
  function cl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Lb = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function ad(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Lb.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function ld(e, t, n) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n) !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var o in t) a = t[o], t.hasOwnProperty(o) && n[o] !== a && ad(e, o, a);
    } else for (var u in t) t.hasOwnProperty(u) && ad(e, u, t[u]);
  }
  function Su(e) {
    if (e.indexOf("-") === -1) return false;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Gb = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Yb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Sr(e) {
    return Yb.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Tn() {
  }
  var Eu = null;
  function xu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var sl = null, fl = null;
  function od(e) {
    var t = ol(e);
    if (t && (e = t.stateNode)) {
      var n = e[At] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (yu(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Kt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var o = a[At] || null;
                if (!o) throw Error(c(90));
                yu(a, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
              }
            }
            for (t = 0; t < n.length; t++) a = n[t], a.form === e.form && Wf(a);
          }
          break e;
        case "textarea":
          td(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && ul(e, !!n.multiple, t, false);
      }
    }
  }
  var Cu = false;
  function rd(e, t, n) {
    if (Cu) return e(t, n);
    Cu = true;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Cu = false, (sl !== null || fl !== null) && (ii(), sl && (t = sl, e = fl, fl = sl = null, od(t), e))) for (t = 0; t < e.length; t++) od(e[t]);
    }
  }
  function ro(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[At] || null;
    if (a === null) return null;
    n = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var _n = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Tu = false;
  if (_n) try {
    var io = {};
    Object.defineProperty(io, "passive", { get: function() {
      Tu = true;
    } }), window.addEventListener("test", io, io), window.removeEventListener("test", io, io);
  } catch {
    Tu = false;
  }
  var Pn = null, _u = null, Er = null;
  function id() {
    if (Er) return Er;
    var e, t = _u, n = t.length, a, o = "value" in Pn ? Pn.value : Pn.textContent, u = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var p = n - e;
    for (a = 1; a <= p && t[n - a] === o[u - a]; a++) ;
    return Er = o.slice(e, 1 < a ? 1 - a : void 0);
  }
  function xr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Cr() {
    return true;
  }
  function ud() {
    return false;
  }
  function Rt(e) {
    function t(n, a, o, u, p) {
      this._reactName = n, this._targetInst = o, this.type = a, this.nativeEvent = u, this.target = p, this.currentTarget = null;
      for (var b in e) e.hasOwnProperty(b) && (n = e[b], this[b] = n ? n(u) : u[b]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? Cr : ud, this.isPropagationStopped = ud, this;
    }
    return h(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Cr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Cr);
    }, persist: function() {
    }, isPersistent: Cr }), t;
  }
  var Oa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Tr = Rt(Oa), uo = h({}, Oa, { view: 0, detail: 0 }), Vb = Rt(uo), Au, Ru, co, _r = h({}, uo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== co && (co && e.type === "mousemove" ? (Au = e.screenX - co.screenX, Ru = e.screenY - co.screenY) : Ru = Au = 0, co = e), Au);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ru;
  } }), cd = Rt(_r), qb = h({}, _r, { dataTransfer: 0 }), Ib = Rt(qb), Xb = h({}, uo, { relatedTarget: 0 }), Mu = Rt(Xb), Kb = h({}, Oa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Qb = Rt(Kb), Pb = h({}, Oa, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Zb = Rt(Pb), kb = h({}, Oa, { data: 0 }), sd = Rt(kb), $b = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Jb = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Fb = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wb(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Fb[e]) ? !!t[e] : false;
  }
  function wu() {
    return Wb;
  }
  var eS = h({}, uo, { key: function(e) {
    if (e.key) {
      var t = $b[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = xr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Jb[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wu, charCode: function(e) {
    return e.type === "keypress" ? xr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? xr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), tS = Rt(eS), nS = h({}, _r, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fd = Rt(nS), aS = h({}, uo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wu }), lS = Rt(aS), oS = h({}, Oa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), rS = Rt(oS), iS = h({}, _r, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), uS = Rt(iS), cS = h({}, Oa, { newState: 0, oldState: 0 }), sS = Rt(cS), fS = [9, 13, 27, 32], Du = _n && "CompositionEvent" in window, so = null;
  _n && "documentMode" in document && (so = document.documentMode);
  var dS = _n && "TextEvent" in window && !so, dd = _n && (!Du || so && 8 < so && 11 >= so), pd = " ", vd = false;
  function md(e, t) {
    switch (e) {
      case "keyup":
        return fS.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function hd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var dl = false;
  function pS(e, t) {
    switch (e) {
      case "compositionend":
        return hd(t);
      case "keypress":
        return t.which !== 32 ? null : (vd = true, pd);
      case "textInput":
        return e = t.data, e === pd && vd ? null : e;
      default:
        return null;
    }
  }
  function vS(e, t) {
    if (dl) return e === "compositionend" || !Du && md(e, t) ? (e = id(), Er = _u = Pn = null, dl = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return dd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var mS = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function gd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!mS[e.type] : t === "textarea";
  }
  function yd(e, t, n, a) {
    sl ? fl ? fl.push(a) : fl = [a] : sl = a, t = vi(t, "onChange"), 0 < t.length && (n = new Tr("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
  }
  var fo = null, po = null;
  function hS(e) {
    em(e, 0);
  }
  function Ar(e) {
    var t = oo(e);
    if (Wf(t)) return e;
  }
  function bd(e, t) {
    if (e === "change") return t;
  }
  var Sd = false;
  if (_n) {
    var Ou;
    if (_n) {
      var Nu = "oninput" in document;
      if (!Nu) {
        var Ed = document.createElement("div");
        Ed.setAttribute("oninput", "return;"), Nu = typeof Ed.oninput == "function";
      }
      Ou = Nu;
    } else Ou = false;
    Sd = Ou && (!document.documentMode || 9 < document.documentMode);
  }
  function xd() {
    fo && (fo.detachEvent("onpropertychange", Cd), po = fo = null);
  }
  function Cd(e) {
    if (e.propertyName === "value" && Ar(po)) {
      var t = [];
      yd(t, po, e, xu(e)), rd(hS, t);
    }
  }
  function gS(e, t, n) {
    e === "focusin" ? (xd(), fo = t, po = n, fo.attachEvent("onpropertychange", Cd)) : e === "focusout" && xd();
  }
  function yS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ar(po);
  }
  function bS(e, t) {
    if (e === "click") return Ar(t);
  }
  function SS(e, t) {
    if (e === "input" || e === "change") return Ar(t);
  }
  function ES(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ht = typeof Object.is == "function" ? Object.is : ES;
  function vo(e, t) {
    if (Ht(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return false;
    for (a = 0; a < n.length; a++) {
      var o = n[a];
      if (!Bt.call(t, o) || !Ht(e[o], t[o])) return false;
    }
    return true;
  }
  function Td(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function _d(e, t) {
    var n = Td(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = e + n.textContent.length, e <= t && a >= t) return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Td(n);
    }
  }
  function Ad(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Ad(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function Rd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = br(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = br(e.document);
    }
    return t;
  }
  function zu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var xS = _n && "documentMode" in document && 11 >= document.documentMode, pl = null, ju = null, mo = null, Uu = false;
  function Md(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Uu || pl == null || pl !== br(a) || (a = pl, "selectionStart" in a && zu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), mo && vo(mo, a) || (mo = a, a = vi(ju, "onSelect"), 0 < a.length && (t = new Tr("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = pl)));
  }
  function Na(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var vl = { animationend: Na("Animation", "AnimationEnd"), animationiteration: Na("Animation", "AnimationIteration"), animationstart: Na("Animation", "AnimationStart"), transitionrun: Na("Transition", "TransitionRun"), transitionstart: Na("Transition", "TransitionStart"), transitioncancel: Na("Transition", "TransitionCancel"), transitionend: Na("Transition", "TransitionEnd") }, Bu = {}, wd = {};
  _n && (wd = document.createElement("div").style, "AnimationEvent" in window || (delete vl.animationend.animation, delete vl.animationiteration.animation, delete vl.animationstart.animation), "TransitionEvent" in window || delete vl.transitionend.transition);
  function za(e) {
    if (Bu[e]) return Bu[e];
    if (!vl[e]) return e;
    var t = vl[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in wd) return Bu[e] = t[n];
    return e;
  }
  var Dd = za("animationend"), Od = za("animationiteration"), Nd = za("animationstart"), CS = za("transitionrun"), TS = za("transitionstart"), _S = za("transitioncancel"), zd = za("transitionend"), jd = /* @__PURE__ */ new Map(), Hu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Hu.push("scrollEnd");
  function ln(e, t) {
    jd.set(e, t), Da(t, [e]);
  }
  var Rr = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Qt = [], ml = 0, Lu = 0;
  function Mr() {
    for (var e = ml, t = Lu = ml = 0; t < e; ) {
      var n = Qt[t];
      Qt[t++] = null;
      var a = Qt[t];
      Qt[t++] = null;
      var o = Qt[t];
      Qt[t++] = null;
      var u = Qt[t];
      if (Qt[t++] = null, a !== null && o !== null) {
        var p = a.pending;
        p === null ? o.next = o : (o.next = p.next, p.next = o), a.pending = o;
      }
      u !== 0 && Ud(n, o, u);
    }
  }
  function wr(e, t, n, a) {
    Qt[ml++] = e, Qt[ml++] = t, Qt[ml++] = n, Qt[ml++] = a, Lu |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Gu(e, t, n, a) {
    return wr(e, t, n, a), Dr(e);
  }
  function ja(e, t) {
    return wr(e, null, null, t), Dr(e);
  }
  function Ud(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var o = false, u = e.return; u !== null; ) u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (o = true)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, o && t !== null && (o = 31 - pt(n), e = u.hiddenUpdates, a = e[o], a === null ? e[o] = [t] : a.push(t), t.lane = n | 536870912), u) : null;
  }
  function Dr(e) {
    if (50 < Ho) throw Ho = 0, Zc = null, Error(c(185));
    for (var t = e.return; t !== null; ) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var hl = {};
  function AS(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Lt(e, t, n, a) {
    return new AS(e, t, n, a);
  }
  function Yu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function An(e, t) {
    var n = e.alternate;
    return n === null ? (n = Lt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Bd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
  }
  function Or(e, t, n, a, o, u) {
    var p = 0;
    if (a = e, typeof e == "function") Yu(e) && (p = 1);
    else if (typeof e == "string") p = O1(e, n, I.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case ge:
        return e = Lt(31, n, t, o), e.elementType = ge, e.lanes = u, e;
      case C:
        return Ua(n.children, o, u, t);
      case T:
        p = 8, o |= 24;
        break;
      case D:
        return e = Lt(12, n, t, o | 2), e.elementType = D, e.lanes = u, e;
      case $:
        return e = Lt(13, n, t, o), e.elementType = $, e.lanes = u, e;
      case J:
        return e = Lt(19, n, t, o), e.elementType = J, e.lanes = u, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case L:
            p = 10;
            break e;
          case z:
            p = 9;
            break e;
          case X:
            p = 11;
            break e;
          case V:
            p = 14;
            break e;
          case ae:
            p = 16, a = null;
            break e;
        }
        p = 29, n = Error(c(130, e === null ? "null" : typeof e, "")), a = null;
    }
    return t = Lt(p, n, t, o), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function Ua(e, t, n, a) {
    return e = Lt(7, e, a, t), e.lanes = n, e;
  }
  function Vu(e, t, n) {
    return e = Lt(6, e, null, t), e.lanes = n, e;
  }
  function Hd(e) {
    var t = Lt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function qu(e, t, n) {
    return t = Lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  var Ld = /* @__PURE__ */ new WeakMap();
  function Pt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Ld.get(e);
      return n !== void 0 ? n : (t = { value: e, source: t, stack: Wl(t) }, Ld.set(e, t), t);
    }
    return { value: e, source: t, stack: Wl(t) };
  }
  var gl = [], yl = 0, Nr = null, ho = 0, Zt = [], kt = 0, Zn = null, mn = 1, hn = "";
  function Rn(e, t) {
    gl[yl++] = ho, gl[yl++] = Nr, Nr = e, ho = t;
  }
  function Gd(e, t, n) {
    Zt[kt++] = mn, Zt[kt++] = hn, Zt[kt++] = Zn, Zn = e;
    var a = mn;
    e = hn;
    var o = 32 - pt(a) - 1;
    a &= ~(1 << o), n += 1;
    var u = 32 - pt(t) + o;
    if (30 < u) {
      var p = o - o % 5;
      u = (a & (1 << p) - 1).toString(32), a >>= p, o -= p, mn = 1 << 32 - pt(t) + o | n << o | a, hn = u + e;
    } else mn = 1 << u | n << o | a, hn = e;
  }
  function Iu(e) {
    e.return !== null && (Rn(e, 1), Gd(e, 1, 0));
  }
  function Xu(e) {
    for (; e === Nr; ) Nr = gl[--yl], gl[yl] = null, ho = gl[--yl], gl[yl] = null;
    for (; e === Zn; ) Zn = Zt[--kt], Zt[kt] = null, hn = Zt[--kt], Zt[kt] = null, mn = Zt[--kt], Zt[kt] = null;
  }
  function Yd(e, t) {
    Zt[kt++] = mn, Zt[kt++] = hn, Zt[kt++] = Zn, mn = t.id, hn = t.overflow, Zn = e;
  }
  var ut = null, Ve = null, we = false, kn = null, $t = false, Ku = Error(c(519));
  function $n(e) {
    var t = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw go(Pt(t, e)), Ku;
  }
  function Vd(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[it] = e, t[At] = a, n) {
      case "dialog":
        Ae("cancel", t), Ae("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ae("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Go.length; n++) Ae(Go[n], t);
        break;
      case "source":
        Ae("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ae("error", t), Ae("load", t);
        break;
      case "details":
        Ae("toggle", t);
        break;
      case "input":
        Ae("invalid", t), ed(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
        break;
      case "select":
        Ae("invalid", t);
        break;
      case "textarea":
        Ae("invalid", t), nd(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === true || lm(t.textContent, n) ? (a.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)), a.onScroll != null && Ae("scroll", t), a.onScrollEnd != null && Ae("scrollend", t), a.onClick != null && (t.onclick = Tn), t = true) : t = false, t || $n(e, true);
  }
  function qd(e) {
    for (ut = e.return; ut; ) switch (ut.tag) {
      case 5:
      case 31:
      case 13:
        $t = false;
        return;
      case 27:
      case 3:
        $t = true;
        return;
      default:
        ut = ut.return;
    }
  }
  function bl(e) {
    if (e !== ut) return false;
    if (!we) return qd(e), we = true, false;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || cs(e.type, e.memoizedProps)), n = !n), n && Ve && $n(e), qd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Ve = pm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Ve = pm(e);
    } else t === 27 ? (t = Ve, sa(e.type) ? (e = vs, vs = null, Ve = e) : Ve = t) : Ve = ut ? Ft(e.stateNode.nextSibling) : null;
    return true;
  }
  function Ba() {
    Ve = ut = null, we = false;
  }
  function Qu() {
    var e = kn;
    return e !== null && (Ot === null ? Ot = e : Ot.push.apply(Ot, e), kn = null), e;
  }
  function go(e) {
    kn === null ? kn = [e] : kn.push(e);
  }
  var Pu = _(null), Ha = null, Mn = null;
  function Jn(e, t, n) {
    B(Pu, t._currentValue), t._currentValue = n;
  }
  function wn(e) {
    e._currentValue = Pu.current, R(Pu);
  }
  function Zu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ku(e, t, n, a) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var u = o.dependencies;
      if (u !== null) {
        var p = o.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var b = u;
          u = o;
          for (var x = 0; x < t.length; x++) if (b.context === t[x]) {
            u.lanes |= n, b = u.alternate, b !== null && (b.lanes |= n), Zu(u.return, n, e), a || (p = null);
            break e;
          }
          u = b.next;
        }
      } else if (o.tag === 18) {
        if (p = o.return, p === null) throw Error(c(341));
        p.lanes |= n, u = p.alternate, u !== null && (u.lanes |= n), Zu(p, n, e), p = null;
      } else p = o.child;
      if (p !== null) p.return = o;
      else for (p = o; p !== null; ) {
        if (p === e) {
          p = null;
          break;
        }
        if (o = p.sibling, o !== null) {
          o.return = p.return, p = o;
          break;
        }
        p = p.return;
      }
      o = p;
    }
  }
  function Sl(e, t, n, a) {
    e = null;
    for (var o = t, u = false; o !== null; ) {
      if (!u) {
        if ((o.flags & 524288) !== 0) u = true;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var p = o.alternate;
        if (p === null) throw Error(c(387));
        if (p = p.memoizedProps, p !== null) {
          var b = o.type;
          Ht(o.pendingProps.value, p.value) || (e !== null ? e.push(b) : e = [b]);
        }
      } else if (o === q.current) {
        if (p = o.alternate, p === null) throw Error(c(387));
        p.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Xo) : e = [Xo]);
      }
      o = o.return;
    }
    e !== null && ku(t, e, n, a), t.flags |= 262144;
  }
  function zr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ht(e.context._currentValue, e.memoizedValue)) return true;
      e = e.next;
    }
    return false;
  }
  function La(e) {
    Ha = e, Mn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ct(e) {
    return Id(Ha, e);
  }
  function jr(e, t) {
    return Ha === null && La(e), Id(e, t);
  }
  function Id(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Mn === null) {
      if (e === null) throw Error(c(308));
      Mn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Mn = Mn.next = t;
    return n;
  }
  var RS = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = { aborted: false, addEventListener: function(n, a) {
      e.push(a);
    } };
    this.abort = function() {
      t.aborted = true, e.forEach(function(n) {
        return n();
      });
    };
  }, MS = l.unstable_scheduleCallback, wS = l.unstable_NormalPriority, Je = { $$typeof: L, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function $u() {
    return { controller: new RS(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function yo(e) {
    e.refCount--, e.refCount === 0 && MS(wS, function() {
      e.controller.abort();
    });
  }
  var bo = null, Ju = 0, El = 0, xl = null;
  function DS(e, t) {
    if (bo === null) {
      var n = bo = [];
      Ju = 0, El = es(), xl = { status: "pending", value: void 0, then: function(a) {
        n.push(a);
      } };
    }
    return Ju++, t.then(Xd, Xd), t;
  }
  function Xd() {
    if (--Ju === 0 && bo !== null) {
      xl !== null && (xl.status = "fulfilled");
      var e = bo;
      bo = null, El = 0, xl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function OS(e, t) {
    var n = [], a = { status: "pending", value: null, reason: null, then: function(o) {
      n.push(o);
    } };
    return e.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var o = 0; o < n.length; o++) (0, n[o])(t);
    }, function(o) {
      for (a.status = "rejected", a.reason = o, o = 0; o < n.length; o++) (0, n[o])(void 0);
    }), a;
  }
  var Kd = K.S;
  K.S = function(e, t) {
    Mv = bt(), typeof t == "object" && t !== null && typeof t.then == "function" && DS(e, t), Kd !== null && Kd(e, t);
  };
  var Ga = _(null);
  function Fu() {
    var e = Ga.current;
    return e !== null ? e : Ye.pooledCache;
  }
  function Ur(e, t) {
    t === null ? B(Ga, Ga.current) : B(Ga, t.pool);
  }
  function Qd() {
    var e = Fu();
    return e === null ? null : { parent: Je._currentValue, pool: e };
  }
  var Cl = Error(c(460)), Wu = Error(c(474)), Br = Error(c(542)), Hr = { then: function() {
  } };
  function Pd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Zd(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Tn, Tn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, $d(e), e;
      default:
        if (typeof t.status == "string") t.then(Tn, Tn);
        else {
          if (e = Ye, e !== null && 100 < e.shellSuspendCounter) throw Error(c(482));
          e = t, e.status = "pending", e.then(function(a) {
            if (t.status === "pending") {
              var o = t;
              o.status = "fulfilled", o.value = a;
            }
          }, function(a) {
            if (t.status === "pending") {
              var o = t;
              o.status = "rejected", o.reason = a;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, $d(e), e;
        }
        throw Va = t, Cl;
    }
  }
  function Ya(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Va = n, Cl) : n;
    }
  }
  var Va = null;
  function kd() {
    if (Va === null) throw Error(c(459));
    var e = Va;
    return Va = null, e;
  }
  function $d(e) {
    if (e === Cl || e === Br) throw Error(c(483));
  }
  var Tl = null, So = 0;
  function Lr(e) {
    var t = So;
    return So += 1, Tl === null && (Tl = []), Zd(Tl, e, t);
  }
  function Eo(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Gr(e, t) {
    throw t.$$typeof === A ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function Jd(e) {
    function t(N, M) {
      if (e) {
        var j = N.deletions;
        j === null ? (N.deletions = [M], N.flags |= 16) : j.push(M);
      }
    }
    function n(N, M) {
      if (!e) return null;
      for (; M !== null; ) t(N, M), M = M.sibling;
      return null;
    }
    function a(N) {
      for (var M = /* @__PURE__ */ new Map(); N !== null; ) N.key !== null ? M.set(N.key, N) : M.set(N.index, N), N = N.sibling;
      return M;
    }
    function o(N, M) {
      return N = An(N, M), N.index = 0, N.sibling = null, N;
    }
    function u(N, M, j) {
      return N.index = j, e ? (j = N.alternate, j !== null ? (j = j.index, j < M ? (N.flags |= 67108866, M) : j) : (N.flags |= 67108866, M)) : (N.flags |= 1048576, M);
    }
    function p(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function b(N, M, j, P) {
      return M === null || M.tag !== 6 ? (M = Vu(j, N.mode, P), M.return = N, M) : (M = o(M, j), M.return = N, M);
    }
    function x(N, M, j, P) {
      var ue = j.type;
      return ue === C ? Y(N, M, j.props.children, P, j.key) : M !== null && (M.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === ae && Ya(ue) === M.type) ? (M = o(M, j.props), Eo(M, j), M.return = N, M) : (M = Or(j.type, j.key, j.props, null, N.mode, P), Eo(M, j), M.return = N, M);
    }
    function U(N, M, j, P) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== j.containerInfo || M.stateNode.implementation !== j.implementation ? (M = qu(j, N.mode, P), M.return = N, M) : (M = o(M, j.children || []), M.return = N, M);
    }
    function Y(N, M, j, P, ue) {
      return M === null || M.tag !== 7 ? (M = Ua(j, N.mode, P, ue), M.return = N, M) : (M = o(M, j), M.return = N, M);
    }
    function Z(N, M, j) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return M = Vu("" + M, N.mode, j), M.return = N, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case w:
            return j = Or(M.type, M.key, M.props, null, N.mode, j), Eo(j, M), j.return = N, j;
          case O:
            return M = qu(M, N.mode, j), M.return = N, M;
          case ae:
            return M = Ya(M), Z(N, M, j);
        }
        if (Te(M) || ye(M)) return M = Ua(M, N.mode, j, null), M.return = N, M;
        if (typeof M.then == "function") return Z(N, Lr(M), j);
        if (M.$$typeof === L) return Z(N, jr(N, M), j);
        Gr(N, M);
      }
      return null;
    }
    function H(N, M, j, P) {
      var ue = M !== null ? M.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return ue !== null ? null : b(N, M, "" + j, P);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case w:
            return j.key === ue ? x(N, M, j, P) : null;
          case O:
            return j.key === ue ? U(N, M, j, P) : null;
          case ae:
            return j = Ya(j), H(N, M, j, P);
        }
        if (Te(j) || ye(j)) return ue !== null ? null : Y(N, M, j, P, null);
        if (typeof j.then == "function") return H(N, M, Lr(j), P);
        if (j.$$typeof === L) return H(N, M, jr(N, j), P);
        Gr(N, j);
      }
      return null;
    }
    function G(N, M, j, P, ue) {
      if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint") return N = N.get(j) || null, b(M, N, "" + P, ue);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case w:
            return N = N.get(P.key === null ? j : P.key) || null, x(M, N, P, ue);
          case O:
            return N = N.get(P.key === null ? j : P.key) || null, U(M, N, P, ue);
          case ae:
            return P = Ya(P), G(N, M, j, P, ue);
        }
        if (Te(P) || ye(P)) return N = N.get(j) || null, Y(M, N, P, ue, null);
        if (typeof P.then == "function") return G(N, M, j, Lr(P), ue);
        if (P.$$typeof === L) return G(N, M, j, jr(M, P), ue);
        Gr(M, P);
      }
      return null;
    }
    function le(N, M, j, P) {
      for (var ue = null, Oe = null, re = M, Se = M = 0, Me = null; re !== null && Se < j.length; Se++) {
        re.index > Se ? (Me = re, re = null) : Me = re.sibling;
        var Ne = H(N, re, j[Se], P);
        if (Ne === null) {
          re === null && (re = Me);
          break;
        }
        e && re && Ne.alternate === null && t(N, re), M = u(Ne, M, Se), Oe === null ? ue = Ne : Oe.sibling = Ne, Oe = Ne, re = Me;
      }
      if (Se === j.length) return n(N, re), we && Rn(N, Se), ue;
      if (re === null) {
        for (; Se < j.length; Se++) re = Z(N, j[Se], P), re !== null && (M = u(re, M, Se), Oe === null ? ue = re : Oe.sibling = re, Oe = re);
        return we && Rn(N, Se), ue;
      }
      for (re = a(re); Se < j.length; Se++) Me = G(re, N, Se, j[Se], P), Me !== null && (e && Me.alternate !== null && re.delete(Me.key === null ? Se : Me.key), M = u(Me, M, Se), Oe === null ? ue = Me : Oe.sibling = Me, Oe = Me);
      return e && re.forEach(function(ma) {
        return t(N, ma);
      }), we && Rn(N, Se), ue;
    }
    function se(N, M, j, P) {
      if (j == null) throw Error(c(151));
      for (var ue = null, Oe = null, re = M, Se = M = 0, Me = null, Ne = j.next(); re !== null && !Ne.done; Se++, Ne = j.next()) {
        re.index > Se ? (Me = re, re = null) : Me = re.sibling;
        var ma = H(N, re, Ne.value, P);
        if (ma === null) {
          re === null && (re = Me);
          break;
        }
        e && re && ma.alternate === null && t(N, re), M = u(ma, M, Se), Oe === null ? ue = ma : Oe.sibling = ma, Oe = ma, re = Me;
      }
      if (Ne.done) return n(N, re), we && Rn(N, Se), ue;
      if (re === null) {
        for (; !Ne.done; Se++, Ne = j.next()) Ne = Z(N, Ne.value, P), Ne !== null && (M = u(Ne, M, Se), Oe === null ? ue = Ne : Oe.sibling = Ne, Oe = Ne);
        return we && Rn(N, Se), ue;
      }
      for (re = a(re); !Ne.done; Se++, Ne = j.next()) Ne = G(re, N, Se, Ne.value, P), Ne !== null && (e && Ne.alternate !== null && re.delete(Ne.key === null ? Se : Ne.key), M = u(Ne, M, Se), Oe === null ? ue = Ne : Oe.sibling = Ne, Oe = Ne);
      return e && re.forEach(function(q1) {
        return t(N, q1);
      }), we && Rn(N, Se), ue;
    }
    function Ge(N, M, j, P) {
      if (typeof j == "object" && j !== null && j.type === C && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case w:
            e: {
              for (var ue = j.key; M !== null; ) {
                if (M.key === ue) {
                  if (ue = j.type, ue === C) {
                    if (M.tag === 7) {
                      n(N, M.sibling), P = o(M, j.props.children), P.return = N, N = P;
                      break e;
                    }
                  } else if (M.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === ae && Ya(ue) === M.type) {
                    n(N, M.sibling), P = o(M, j.props), Eo(P, j), P.return = N, N = P;
                    break e;
                  }
                  n(N, M);
                  break;
                } else t(N, M);
                M = M.sibling;
              }
              j.type === C ? (P = Ua(j.props.children, N.mode, P, j.key), P.return = N, N = P) : (P = Or(j.type, j.key, j.props, null, N.mode, P), Eo(P, j), P.return = N, N = P);
            }
            return p(N);
          case O:
            e: {
              for (ue = j.key; M !== null; ) {
                if (M.key === ue) if (M.tag === 4 && M.stateNode.containerInfo === j.containerInfo && M.stateNode.implementation === j.implementation) {
                  n(N, M.sibling), P = o(M, j.children || []), P.return = N, N = P;
                  break e;
                } else {
                  n(N, M);
                  break;
                }
                else t(N, M);
                M = M.sibling;
              }
              P = qu(j, N.mode, P), P.return = N, N = P;
            }
            return p(N);
          case ae:
            return j = Ya(j), Ge(N, M, j, P);
        }
        if (Te(j)) return le(N, M, j, P);
        if (ye(j)) {
          if (ue = ye(j), typeof ue != "function") throw Error(c(150));
          return j = ue.call(j), se(N, M, j, P);
        }
        if (typeof j.then == "function") return Ge(N, M, Lr(j), P);
        if (j.$$typeof === L) return Ge(N, M, jr(N, j), P);
        Gr(N, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, M !== null && M.tag === 6 ? (n(N, M.sibling), P = o(M, j), P.return = N, N = P) : (n(N, M), P = Vu(j, N.mode, P), P.return = N, N = P), p(N)) : n(N, M);
    }
    return function(N, M, j, P) {
      try {
        So = 0;
        var ue = Ge(N, M, j, P);
        return Tl = null, ue;
      } catch (re) {
        if (re === Cl || re === Br) throw re;
        var Oe = Lt(29, re, null, N.mode);
        return Oe.lanes = P, Oe.return = N, Oe;
      }
    };
  }
  var qa = Jd(true), Fd = Jd(false), Fn = false;
  function ec(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function tc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
  }
  function Wn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ea(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (je & 2) !== 0) {
      var o = a.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), a.pending = t, t = Dr(e), Ud(e, null, n), t;
    }
    return wr(e, a, t, n), Dr(e);
  }
  function xo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Tt(e, n);
    }
  }
  function nc(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var o = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var p = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          u === null ? o = u = p : u = u.next = p, n = n.next;
        } while (n !== null);
        u === null ? o = u = t : u = u.next = t;
      } else o = u = t;
      n = { baseState: a.baseState, firstBaseUpdate: o, lastBaseUpdate: u, shared: a.shared, callbacks: a.callbacks }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var ac = false;
  function Co() {
    if (ac) {
      var e = xl;
      if (e !== null) throw e;
    }
  }
  function To(e, t, n, a) {
    ac = false;
    var o = e.updateQueue;
    Fn = false;
    var u = o.firstBaseUpdate, p = o.lastBaseUpdate, b = o.shared.pending;
    if (b !== null) {
      o.shared.pending = null;
      var x = b, U = x.next;
      x.next = null, p === null ? u = U : p.next = U, p = x;
      var Y = e.alternate;
      Y !== null && (Y = Y.updateQueue, b = Y.lastBaseUpdate, b !== p && (b === null ? Y.firstBaseUpdate = U : b.next = U, Y.lastBaseUpdate = x));
    }
    if (u !== null) {
      var Z = o.baseState;
      p = 0, Y = U = x = null, b = u;
      do {
        var H = b.lane & -536870913, G = H !== b.lane;
        if (G ? (Re & H) === H : (a & H) === H) {
          H !== 0 && H === El && (ac = true), Y !== null && (Y = Y.next = { lane: 0, tag: b.tag, payload: b.payload, callback: null, next: null });
          e: {
            var le = e, se = b;
            H = t;
            var Ge = n;
            switch (se.tag) {
              case 1:
                if (le = se.payload, typeof le == "function") {
                  Z = le.call(Ge, Z, H);
                  break e;
                }
                Z = le;
                break e;
              case 3:
                le.flags = le.flags & -65537 | 128;
              case 0:
                if (le = se.payload, H = typeof le == "function" ? le.call(Ge, Z, H) : le, H == null) break e;
                Z = h({}, Z, H);
                break e;
              case 2:
                Fn = true;
            }
          }
          H = b.callback, H !== null && (e.flags |= 64, G && (e.flags |= 8192), G = o.callbacks, G === null ? o.callbacks = [H] : G.push(H));
        } else G = { lane: H, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, Y === null ? (U = Y = G, x = Z) : Y = Y.next = G, p |= H;
        if (b = b.next, b === null) {
          if (b = o.shared.pending, b === null) break;
          G = b, b = G.next, G.next = null, o.lastBaseUpdate = G, o.shared.pending = null;
        }
      } while (true);
      Y === null && (x = Z), o.baseState = x, o.firstBaseUpdate = U, o.lastBaseUpdate = Y, u === null && (o.shared.lanes = 0), oa |= p, e.lanes = p, e.memoizedState = Z;
    }
  }
  function Wd(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }
  function ep(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Wd(n[e], t);
  }
  var _l = _(null), Yr = _(0);
  function tp(e, t) {
    e = Ln, B(Yr, e), B(_l, t), Ln = e | t.baseLanes;
  }
  function lc() {
    B(Yr, Ln), B(_l, _l.current);
  }
  function oc() {
    Ln = Yr.current, R(_l), R(Yr);
  }
  var Gt = _(null), Jt = null;
  function ta(e) {
    var t = e.alternate;
    B(ke, ke.current & 1), B(Gt, e), Jt === null && (t === null || _l.current !== null || t.memoizedState !== null) && (Jt = e);
  }
  function rc(e) {
    B(ke, ke.current), B(Gt, e), Jt === null && (Jt = e);
  }
  function np(e) {
    e.tag === 22 ? (B(ke, ke.current), B(Gt, e), Jt === null && (Jt = e)) : na();
  }
  function na() {
    B(ke, ke.current), B(Gt, Gt.current);
  }
  function Yt(e) {
    R(Gt), Jt === e && (Jt = null), R(ke);
  }
  var ke = _(0);
  function Vr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || ds(n) || ps(n))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Dn = 0, he = null, He = null, Fe = null, qr = false, Al = false, Ia = false, Ir = 0, _o = 0, Rl = null, NS = 0;
  function Pe() {
    throw Error(c(321));
  }
  function ic(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ht(e[n], t[n])) return false;
    return true;
  }
  function uc(e, t, n, a, o, u) {
    return Dn = u, he = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, K.H = e === null || e.memoizedState === null ? Gp : Cc, Ia = false, u = n(a, o), Ia = false, Al && (u = lp(t, n, a, o)), ap(e), u;
  }
  function ap(e) {
    K.H = Mo;
    var t = He !== null && He.next !== null;
    if (Dn = 0, Fe = He = he = null, qr = false, _o = 0, Rl = null, t) throw Error(c(300));
    e === null || We || (e = e.dependencies, e !== null && zr(e) && (We = true));
  }
  function lp(e, t, n, a) {
    he = e;
    var o = 0;
    do {
      if (Al && (Rl = null), _o = 0, Al = false, 25 <= o) throw Error(c(301));
      if (o += 1, Fe = He = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      K.H = Yp, u = t(n, a);
    } while (Al);
    return u;
  }
  function zS() {
    var e = K.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ao(t) : t, e = e.useState()[0], (He !== null ? He.memoizedState : null) !== e && (he.flags |= 1024), t;
  }
  function cc() {
    var e = Ir !== 0;
    return Ir = 0, e;
  }
  function sc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function fc(e) {
    if (qr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      qr = false;
    }
    Dn = 0, Fe = He = he = null, Al = false, _o = Ir = 0, Rl = null;
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Fe === null ? he.memoizedState = Fe = e : Fe = Fe.next = e, Fe;
  }
  function $e() {
    if (He === null) {
      var e = he.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = He.next;
    var t = Fe === null ? he.memoizedState : Fe.next;
    if (t !== null) Fe = t, He = e;
    else {
      if (e === null) throw he.alternate === null ? Error(c(467)) : Error(c(310));
      He = e, e = { memoizedState: He.memoizedState, baseState: He.baseState, baseQueue: He.baseQueue, queue: He.queue, next: null }, Fe === null ? he.memoizedState = Fe = e : Fe = Fe.next = e;
    }
    return Fe;
  }
  function Xr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ao(e) {
    var t = _o;
    return _o += 1, Rl === null && (Rl = []), e = Zd(Rl, e, t), t = he, (Fe === null ? t.memoizedState : Fe.next) === null && (t = t.alternate, K.H = t === null || t.memoizedState === null ? Gp : Cc), e;
  }
  function Kr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ao(e);
      if (e.$$typeof === L) return ct(e);
    }
    throw Error(c(438, String(e)));
  }
  function dc(e) {
    var t = null, n = he.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = he.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(o) {
        return o.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Xr(), he.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = Ee;
    return t.index++, n;
  }
  function On(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qr(e) {
    var t = $e();
    return pc(t, He, e);
  }
  function pc(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = n;
    var o = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (o !== null) {
        var p = o.next;
        o.next = u.next, u.next = p;
      }
      t.baseQueue = o = u, a.pending = null;
    }
    if (u = e.baseState, o === null) e.memoizedState = u;
    else {
      t = o.next;
      var b = p = null, x = null, U = t, Y = false;
      do {
        var Z = U.lane & -536870913;
        if (Z !== U.lane ? (Re & Z) === Z : (Dn & Z) === Z) {
          var H = U.revertLane;
          if (H === 0) x !== null && (x = x.next = { lane: 0, revertLane: 0, gesture: null, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), Z === El && (Y = true);
          else if ((Dn & H) === H) {
            U = U.next, H === El && (Y = true);
            continue;
          } else Z = { lane: 0, revertLane: U.revertLane, gesture: null, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }, x === null ? (b = x = Z, p = u) : x = x.next = Z, he.lanes |= H, oa |= H;
          Z = U.action, Ia && n(u, Z), u = U.hasEagerState ? U.eagerState : n(u, Z);
        } else H = { lane: Z, revertLane: U.revertLane, gesture: U.gesture, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }, x === null ? (b = x = H, p = u) : x = x.next = H, he.lanes |= Z, oa |= Z;
        U = U.next;
      } while (U !== null && U !== t);
      if (x === null ? p = u : x.next = b, !Ht(u, e.memoizedState) && (We = true, Y && (n = xl, n !== null))) throw n;
      e.memoizedState = u, e.baseState = p, e.baseQueue = x, a.lastRenderedState = u;
    }
    return o === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function vc(e) {
    var t = $e(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, o = n.pending, u = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var p = o = o.next;
      do
        u = e(u, p.action), p = p.next;
      while (p !== o);
      Ht(u, t.memoizedState) || (We = true), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function op(e, t, n) {
    var a = he, o = $e(), u = we;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var p = !Ht((He || o).memoizedState, n);
    if (p && (o.memoizedState = n, We = true), o = o.queue, gc(up.bind(null, a, o, e), [e]), o.getSnapshot !== t || p || Fe !== null && Fe.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ml(9, { destroy: void 0 }, ip.bind(null, a, o, n, t), null), Ye === null) throw Error(c(349));
      u || (Dn & 127) !== 0 || rp(a, t, n);
    }
    return n;
  }
  function rp(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = he.updateQueue, t === null ? (t = Xr(), he.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ip(e, t, n, a) {
    t.value = n, t.getSnapshot = a, cp(t) && sp(e);
  }
  function up(e, t, n) {
    return n(function() {
      cp(t) && sp(e);
    });
  }
  function cp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ht(e, n);
    } catch {
      return true;
    }
  }
  function sp(e) {
    var t = ja(e, 2);
    t !== null && Nt(t, e, 2);
  }
  function mc(e) {
    var t = Et();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Ia) {
        nn(true);
        try {
          n();
        } finally {
          nn(false);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: On, lastRenderedState: e }, t;
  }
  function fp(e, t, n, a) {
    return e.baseState = n, pc(e, He, typeof a == "function" ? a : On);
  }
  function jS(e, t, n, a, o) {
    if (kr(e)) throw Error(c(485));
    if (e = t.action, e !== null) {
      var u = { payload: o, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(p) {
        u.listeners.push(p);
      } };
      K.T !== null ? n(true) : u.isTransition = false, a(u), n = t.pending, n === null ? (u.next = t.pending = u, dp(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function dp(e, t) {
    var n = t.action, a = t.payload, o = e.state;
    if (t.isTransition) {
      var u = K.T, p = {};
      K.T = p;
      try {
        var b = n(o, a), x = K.S;
        x !== null && x(p, b), pp(e, t, b);
      } catch (U) {
        hc(e, t, U);
      } finally {
        u !== null && p.types !== null && (u.types = p.types), K.T = u;
      }
    } else try {
      u = n(o, a), pp(e, t, u);
    } catch (U) {
      hc(e, t, U);
    }
  }
  function pp(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
      vp(e, t, a);
    }, function(a) {
      return hc(e, t, a);
    }) : vp(e, t, n);
  }
  function vp(e, t, n) {
    t.status = "fulfilled", t.value = n, mp(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, dp(e, n)));
  }
  function hc(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, mp(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function mp(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function hp(e, t) {
    return t;
  }
  function gp(e, t) {
    if (we) {
      var n = Ye.formState;
      if (n !== null) {
        e: {
          var a = he;
          if (we) {
            if (Ve) {
              t: {
                for (var o = Ve, u = $t; o.nodeType !== 8; ) {
                  if (!u) {
                    o = null;
                    break t;
                  }
                  if (o = Ft(o.nextSibling), o === null) {
                    o = null;
                    break t;
                  }
                }
                u = o.data, o = u === "F!" || u === "F" ? o : null;
              }
              if (o) {
                Ve = Ft(o.nextSibling), a = o.data === "F!";
                break e;
              }
            }
            $n(a);
          }
          a = false;
        }
        a && (t = n[0]);
      }
    }
    return n = Et(), n.memoizedState = n.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: hp, lastRenderedState: t }, n.queue = a, n = Bp.bind(null, he, a), a.dispatch = n, a = mc(false), u = xc.bind(null, he, false, a.queue), a = Et(), o = { state: t, dispatch: null, action: e, pending: null }, a.queue = o, n = jS.bind(null, he, o, u, n), o.dispatch = n, a.memoizedState = e, [t, n, false];
  }
  function yp(e) {
    var t = $e();
    return bp(t, He, e);
  }
  function bp(e, t, n) {
    if (t = pc(e, t, hp)[0], e = Qr(On)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = Ao(t);
    } catch (p) {
      throw p === Cl ? Br : p;
    }
    else a = t;
    t = $e();
    var o = t.queue, u = o.dispatch;
    return n !== t.memoizedState && (he.flags |= 2048, Ml(9, { destroy: void 0 }, US.bind(null, o, n), null)), [a, u, e];
  }
  function US(e, t) {
    e.action = t;
  }
  function Sp(e) {
    var t = $e(), n = He;
    if (n !== null) return bp(t, n, e);
    $e(), t = t.memoizedState, n = $e();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, false];
  }
  function Ml(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = he.updateQueue, t === null && (t = Xr(), he.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Ep() {
    return $e().memoizedState;
  }
  function Pr(e, t, n, a) {
    var o = Et();
    he.flags |= e, o.memoizedState = Ml(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a);
  }
  function Zr(e, t, n, a) {
    var o = $e();
    a = a === void 0 ? null : a;
    var u = o.memoizedState.inst;
    He !== null && a !== null && ic(a, He.memoizedState.deps) ? o.memoizedState = Ml(t, u, n, a) : (he.flags |= e, o.memoizedState = Ml(1 | t, u, n, a));
  }
  function xp(e, t) {
    Pr(8390656, 8, e, t);
  }
  function gc(e, t) {
    Zr(2048, 8, e, t);
  }
  function BS(e) {
    he.flags |= 4;
    var t = he.updateQueue;
    if (t === null) t = Xr(), he.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Cp(e) {
    var t = $e().memoizedState;
    return BS({ ref: t, nextImpl: e }), function() {
      if ((je & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Tp(e, t) {
    return Zr(4, 2, e, t);
  }
  function _p(e, t) {
    return Zr(4, 4, e, t);
  }
  function Ap(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Rp(e, t, n) {
    n = n != null ? n.concat([e]) : null, Zr(4, 4, Ap.bind(null, t, e), n);
  }
  function yc() {
  }
  function Mp(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && ic(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function wp(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && ic(t, a[1])) return a[0];
    if (a = e(), Ia) {
      nn(true);
      try {
        e();
      } finally {
        nn(false);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function bc(e, t, n) {
    return n === void 0 || (Dn & 1073741824) !== 0 && (Re & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Dv(), he.lanes |= e, oa |= e, n);
  }
  function Dp(e, t, n, a) {
    return Ht(n, t) ? n : _l.current !== null ? (e = bc(e, n, a), Ht(e, t) || (We = true), e) : (Dn & 42) === 0 || (Dn & 1073741824) !== 0 && (Re & 261930) === 0 ? (We = true, e.memoizedState = n) : (e = Dv(), he.lanes |= e, oa |= e, t);
  }
  function Op(e, t, n, a, o) {
    var u = te.p;
    te.p = u !== 0 && 8 > u ? u : 8;
    var p = K.T, b = {};
    K.T = b, xc(e, false, t, n);
    try {
      var x = o(), U = K.S;
      if (U !== null && U(b, x), x !== null && typeof x == "object" && typeof x.then == "function") {
        var Y = OS(x, a);
        Ro(e, t, Y, It(e));
      } else Ro(e, t, a, It(e));
    } catch (Z) {
      Ro(e, t, { then: function() {
      }, status: "rejected", reason: Z }, It());
    } finally {
      te.p = u, p !== null && b.types !== null && (p.types = b.types), K.T = p;
    }
  }
  function HS() {
  }
  function Sc(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var o = Np(e).queue;
    Op(e, o, t, oe, n === null ? HS : function() {
      return zp(e), n(a);
    });
  }
  function Np(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: oe, baseState: oe, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: On, lastRenderedState: oe }, next: null };
    var n = {};
    return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: On, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function zp(e) {
    var t = Np(e);
    t.next === null && (t = e.alternate.memoizedState), Ro(e, t.next.queue, {}, It());
  }
  function Ec() {
    return ct(Xo);
  }
  function jp() {
    return $e().memoizedState;
  }
  function Up() {
    return $e().memoizedState;
  }
  function LS(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = It();
          e = Wn(n);
          var a = ea(t, e, n);
          a !== null && (Nt(a, t, n), xo(a, t, n)), t = { cache: $u() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function GS(e, t, n) {
    var a = It();
    n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, kr(e) ? Hp(t, n) : (n = Gu(e, t, n, a), n !== null && (Nt(n, e, a), Lp(n, t, a)));
  }
  function Bp(e, t, n) {
    var a = It();
    Ro(e, t, n, a);
  }
  function Ro(e, t, n, a) {
    var o = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
    if (kr(e)) Hp(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var p = t.lastRenderedState, b = u(p, n);
        if (o.hasEagerState = true, o.eagerState = b, Ht(b, p)) return wr(e, t, o, 0), Ye === null && Mr(), false;
      } catch {
      }
      if (n = Gu(e, t, o, a), n !== null) return Nt(n, e, a), Lp(n, t, a), true;
    }
    return false;
  }
  function xc(e, t, n, a) {
    if (a = { lane: 2, revertLane: es(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, kr(e)) {
      if (t) throw Error(c(479));
    } else t = Gu(e, n, a, 2), t !== null && Nt(t, e, 2);
  }
  function kr(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he;
  }
  function Hp(e, t) {
    Al = qr = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Lp(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Tt(e, n);
    }
  }
  var Mo = { readContext: ct, use: Kr, useCallback: Pe, useContext: Pe, useEffect: Pe, useImperativeHandle: Pe, useLayoutEffect: Pe, useInsertionEffect: Pe, useMemo: Pe, useReducer: Pe, useRef: Pe, useState: Pe, useDebugValue: Pe, useDeferredValue: Pe, useTransition: Pe, useSyncExternalStore: Pe, useId: Pe, useHostTransitionStatus: Pe, useFormState: Pe, useActionState: Pe, useOptimistic: Pe, useMemoCache: Pe, useCacheRefresh: Pe };
  Mo.useEffectEvent = Pe;
  var Gp = { readContext: ct, use: Kr, useCallback: function(e, t) {
    return Et().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ct, useEffect: xp, useImperativeHandle: function(e, t, n) {
    n = n != null ? n.concat([e]) : null, Pr(4194308, 4, Ap.bind(null, t, e), n);
  }, useLayoutEffect: function(e, t) {
    return Pr(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    Pr(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Et();
    t = t === void 0 ? null : t;
    var a = e();
    if (Ia) {
      nn(true);
      try {
        e();
      } finally {
        nn(false);
      }
    }
    return n.memoizedState = [a, t], a;
  }, useReducer: function(e, t, n) {
    var a = Et();
    if (n !== void 0) {
      var o = n(t);
      if (Ia) {
        nn(true);
        try {
          n(t);
        } finally {
          nn(false);
        }
      }
    } else o = t;
    return a.memoizedState = a.baseState = o, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: o }, a.queue = e, e = e.dispatch = GS.bind(null, he, e), [a.memoizedState, e];
  }, useRef: function(e) {
    var t = Et();
    return e = { current: e }, t.memoizedState = e;
  }, useState: function(e) {
    e = mc(e);
    var t = e.queue, n = Bp.bind(null, he, t);
    return t.dispatch = n, [e.memoizedState, n];
  }, useDebugValue: yc, useDeferredValue: function(e, t) {
    var n = Et();
    return bc(n, e, t);
  }, useTransition: function() {
    var e = mc(false);
    return e = Op.bind(null, he, e.queue, true, false), Et().memoizedState = e, [false, e];
  }, useSyncExternalStore: function(e, t, n) {
    var a = he, o = Et();
    if (we) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else {
      if (n = t(), Ye === null) throw Error(c(349));
      (Re & 127) !== 0 || rp(a, t, n);
    }
    o.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return o.queue = u, xp(up.bind(null, a, u, e), [e]), a.flags |= 2048, Ml(9, { destroy: void 0 }, ip.bind(null, a, u, n, t), null), n;
  }, useId: function() {
    var e = Et(), t = Ye.identifierPrefix;
    if (we) {
      var n = hn, a = mn;
      n = (a & ~(1 << 32 - pt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Ir++, 0 < n && (t += "H" + n.toString(32)), t += "_";
    } else n = NS++, t = "_" + t + "r_" + n.toString(32) + "_";
    return e.memoizedState = t;
  }, useHostTransitionStatus: Ec, useFormState: gp, useActionState: gp, useOptimistic: function(e) {
    var t = Et();
    t.memoizedState = t.baseState = e;
    var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = n, t = xc.bind(null, he, true, n), n.dispatch = t, [e, t];
  }, useMemoCache: dc, useCacheRefresh: function() {
    return Et().memoizedState = LS.bind(null, he);
  }, useEffectEvent: function(e) {
    var t = Et(), n = { impl: e };
    return t.memoizedState = n, function() {
      if ((je & 2) !== 0) throw Error(c(440));
      return n.impl.apply(void 0, arguments);
    };
  } }, Cc = { readContext: ct, use: Kr, useCallback: Mp, useContext: ct, useEffect: gc, useImperativeHandle: Rp, useInsertionEffect: Tp, useLayoutEffect: _p, useMemo: wp, useReducer: Qr, useRef: Ep, useState: function() {
    return Qr(On);
  }, useDebugValue: yc, useDeferredValue: function(e, t) {
    var n = $e();
    return Dp(n, He.memoizedState, e, t);
  }, useTransition: function() {
    var e = Qr(On)[0], t = $e().memoizedState;
    return [typeof e == "boolean" ? e : Ao(e), t];
  }, useSyncExternalStore: op, useId: jp, useHostTransitionStatus: Ec, useFormState: yp, useActionState: yp, useOptimistic: function(e, t) {
    var n = $e();
    return fp(n, He, e, t);
  }, useMemoCache: dc, useCacheRefresh: Up };
  Cc.useEffectEvent = Cp;
  var Yp = { readContext: ct, use: Kr, useCallback: Mp, useContext: ct, useEffect: gc, useImperativeHandle: Rp, useInsertionEffect: Tp, useLayoutEffect: _p, useMemo: wp, useReducer: vc, useRef: Ep, useState: function() {
    return vc(On);
  }, useDebugValue: yc, useDeferredValue: function(e, t) {
    var n = $e();
    return He === null ? bc(n, e, t) : Dp(n, He.memoizedState, e, t);
  }, useTransition: function() {
    var e = vc(On)[0], t = $e().memoizedState;
    return [typeof e == "boolean" ? e : Ao(e), t];
  }, useSyncExternalStore: op, useId: jp, useHostTransitionStatus: Ec, useFormState: Sp, useActionState: Sp, useOptimistic: function(e, t) {
    var n = $e();
    return He !== null ? fp(n, He, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
  }, useMemoCache: dc, useCacheRefresh: Up };
  Yp.useEffectEvent = Cp;
  function Tc(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : h({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var _c = { enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var a = It(), o = Wn(a);
    o.payload = t, n != null && (o.callback = n), t = ea(e, o, a), t !== null && (Nt(t, e, a), xo(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var a = It(), o = Wn(a);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ea(e, o, a), t !== null && (Nt(t, e, a), xo(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = It(), a = Wn(n);
    a.tag = 2, t != null && (a.callback = t), t = ea(e, a, n), t !== null && (Nt(t, e, n), xo(t, e, n));
  } };
  function Vp(e, t, n, a, o, u, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, p) : t.prototype && t.prototype.isPureReactComponent ? !vo(n, a) || !vo(o, u) : true;
  }
  function qp(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && _c.enqueueReplaceState(t, t.state, null);
  }
  function Xa(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t) a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = h({}, n));
      for (var o in e) n[o] === void 0 && (n[o] = e[o]);
    }
    return n;
  }
  function Ip(e) {
    Rr(e);
  }
  function Xp(e) {
    console.error(e);
  }
  function Kp(e) {
    Rr(e);
  }
  function $r(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Qp(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Ac(e, t, n) {
    return n = Wn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      $r(e, t);
    }, n;
  }
  function Pp(e) {
    return e = Wn(e), e.tag = 3, e;
  }
  function Zp(e, t, n, a) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = a.value;
      e.payload = function() {
        return o(u);
      }, e.callback = function() {
        Qp(t, n, a);
      };
    }
    var p = n.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      Qp(t, n, a), typeof o != "function" && (ra === null ? ra = /* @__PURE__ */ new Set([this]) : ra.add(this));
      var b = a.stack;
      this.componentDidCatch(a.value, { componentStack: b !== null ? b : "" });
    });
  }
  function YS(e, t, n, a, o) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Sl(t, n, o, true), n = Gt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Jt === null ? ui() : n.alternate === null && Ze === 0 && (Ze = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, a === Hr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Jc(e, a, o)), false;
          case 22:
            return n.flags |= 65536, a === Hr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Jc(e, a, o)), false;
        }
        throw Error(c(435, n.tag));
      }
      return Jc(e, a, o), ui(), false;
    }
    if (we) return t = Gt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, a !== Ku && (e = Error(c(422), { cause: a }), go(Pt(e, n)))) : (a !== Ku && (t = Error(c(423), { cause: a }), go(Pt(t, n))), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, a = Pt(a, n), o = Ac(e.stateNode, a, o), nc(e, o), Ze !== 4 && (Ze = 2)), false;
    var u = Error(c(520), { cause: a });
    if (u = Pt(u, n), Bo === null ? Bo = [u] : Bo.push(u), Ze !== 4 && (Ze = 2), t === null) return true;
    a = Pt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = Ac(n.stateNode, a, e), nc(n, e), false;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ra === null || !ra.has(u)))) return n.flags |= 65536, o &= -o, n.lanes |= o, o = Pp(o), Zp(o, e, n, a), nc(n, o), false;
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var Rc = Error(c(461)), We = false;
  function st(e, t, n, a) {
    t.child = e === null ? Fd(t, null, n, a) : qa(t, e.child, n, a);
  }
  function kp(e, t, n, a, o) {
    n = n.render;
    var u = t.ref;
    if ("ref" in a) {
      var p = {};
      for (var b in a) b !== "ref" && (p[b] = a[b]);
    } else p = a;
    return La(t), a = uc(e, t, n, p, u, o), b = cc(), e !== null && !We ? (sc(e, t, o), Nn(e, t, o)) : (we && b && Iu(t), t.flags |= 1, st(e, t, a, o), t.child);
  }
  function $p(e, t, n, a, o) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !Yu(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Jp(e, t, u, a, o)) : (e = Or(n.type, null, a, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Uc(e, o)) {
      var p = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : vo, n(p, a) && e.ref === t.ref) return Nn(e, t, o);
    }
    return t.flags |= 1, e = An(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Jp(e, t, n, a, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (vo(u, a) && e.ref === t.ref) if (We = false, t.pendingProps = a = u, Uc(e, o)) (e.flags & 131072) !== 0 && (We = true);
      else return t.lanes = e.lanes, Nn(e, t, o);
    }
    return Mc(e, t, n, a, o);
  }
  function Fp(e, t, n, a) {
    var o = a.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (a = t.child = e.child, o = 0; a !== null; ) o = o | a.lanes | a.childLanes, a = a.sibling;
          a = o & ~u;
        } else a = 0, t.child = null;
        return Wp(e, t, u, n, a);
      }
      if ((n & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ur(t, u !== null ? u.cachePool : null), u !== null ? tp(t, u) : lc(), np(t);
      else return a = t.lanes = 536870912, Wp(e, t, u !== null ? u.baseLanes | n : n, n, a);
    } else u !== null ? (Ur(t, u.cachePool), tp(t, u), na(), t.memoizedState = null) : (e !== null && Ur(t, null), lc(), na());
    return st(e, t, o, n), t.child;
  }
  function wo(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function Wp(e, t, n, a, o) {
    var u = Fu();
    return u = u === null ? null : { parent: Je._currentValue, pool: u }, t.memoizedState = { baseLanes: n, cachePool: u }, e !== null && Ur(t, null), lc(), np(t), e !== null && Sl(e, t, a, true), t.childLanes = o, null;
  }
  function Jr(e, t) {
    return t = Wr({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ev(e, t, n) {
    return qa(t, e.child, null, n), e = Jr(t, t.pendingProps), e.flags |= 2, Yt(t), t.memoizedState = null, e;
  }
  function VS(e, t, n) {
    var a = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (we) {
        if (a.mode === "hidden") return e = Jr(t, a), t.lanes = 536870912, wo(null, e);
        if (rc(t), (e = Ve) ? (e = dm(e, $t), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Zn !== null ? { id: mn, overflow: hn } : null, retryLane: 536870912, hydrationErrors: null }, n = Hd(e), n.return = t, t.child = n, ut = t, Ve = null)) : e = null, e === null) throw $n(t);
        return t.lanes = 536870912, null;
      }
      return Jr(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var p = u.dehydrated;
      if (rc(t), o) if (t.flags & 256) t.flags &= -257, t = ev(e, t, n);
      else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(c(558));
      else if (We || Sl(e, t, n, false), o = (n & e.childLanes) !== 0, We || o) {
        if (a = Ye, a !== null && (p = _t(a, n), p !== 0 && p !== u.retryLane)) throw u.retryLane = p, ja(e, p), Nt(a, e, p), Rc;
        ui(), t = ev(e, t, n);
      } else e = u.treeContext, Ve = Ft(p.nextSibling), ut = t, we = true, kn = null, $t = false, e !== null && Yd(t, e), t = Jr(t, a), t.flags |= 4096;
      return t;
    }
    return e = An(e.child, { mode: a.mode, children: a.children }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Fr(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Mc(e, t, n, a, o) {
    return La(t), n = uc(e, t, n, a, void 0, o), a = cc(), e !== null && !We ? (sc(e, t, o), Nn(e, t, o)) : (we && a && Iu(t), t.flags |= 1, st(e, t, n, o), t.child);
  }
  function tv(e, t, n, a, o, u) {
    return La(t), t.updateQueue = null, n = lp(t, a, n, o), ap(e), a = cc(), e !== null && !We ? (sc(e, t, u), Nn(e, t, u)) : (we && a && Iu(t), t.flags |= 1, st(e, t, n, u), t.child);
  }
  function nv(e, t, n, a, o) {
    if (La(t), t.stateNode === null) {
      var u = hl, p = n.contextType;
      typeof p == "object" && p !== null && (u = ct(p)), u = new n(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = _c, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, ec(t), p = n.contextType, u.context = typeof p == "object" && p !== null ? ct(p) : hl, u.state = t.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (Tc(t, n, p, a), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (p = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), p !== u.state && _c.enqueueReplaceState(u, u.state, null), To(t, a, u, o), Co(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = true;
    } else if (e === null) {
      u = t.stateNode;
      var b = t.memoizedProps, x = Xa(n, b);
      u.props = x;
      var U = u.context, Y = n.contextType;
      p = hl, typeof Y == "object" && Y !== null && (p = ct(Y));
      var Z = n.getDerivedStateFromProps;
      Y = typeof Z == "function" || typeof u.getSnapshotBeforeUpdate == "function", b = t.pendingProps !== b, Y || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || U !== p) && qp(t, u, a, p), Fn = false;
      var H = t.memoizedState;
      u.state = H, To(t, a, u, o), Co(), U = t.memoizedState, b || H !== U || Fn ? (typeof Z == "function" && (Tc(t, n, Z, a), U = t.memoizedState), (x = Fn || Vp(t, n, x, a, H, U, p)) ? (Y || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = U), u.props = a, u.state = U, u.context = p, a = x) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = false);
    } else {
      u = t.stateNode, tc(e, t), p = t.memoizedProps, Y = Xa(n, p), u.props = Y, Z = t.pendingProps, H = u.context, U = n.contextType, x = hl, typeof U == "object" && U !== null && (x = ct(U)), b = n.getDerivedStateFromProps, (U = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p !== Z || H !== x) && qp(t, u, a, x), Fn = false, H = t.memoizedState, u.state = H, To(t, a, u, o), Co();
      var G = t.memoizedState;
      p !== Z || H !== G || Fn || e !== null && e.dependencies !== null && zr(e.dependencies) ? (typeof b == "function" && (Tc(t, n, b, a), G = t.memoizedState), (Y = Fn || Vp(t, n, Y, a, H, G, x) || e !== null && e.dependencies !== null && zr(e.dependencies)) ? (U || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, G, x), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, G, x)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = G), u.props = a, u.state = G, u.context = x, a = Y) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), a = false);
    }
    return u = a, Fr(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = qa(t, e.child, null, o), t.child = qa(t, null, n, o)) : st(e, t, n, o), t.memoizedState = u.state, e = t.child) : e = Nn(e, t, o), e;
  }
  function av(e, t, n, a) {
    return Ba(), t.flags |= 256, st(e, t, n, a), t.child;
  }
  var wc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Dc(e) {
    return { baseLanes: e, cachePool: Qd() };
  }
  function Oc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= qt), e;
  }
  function lv(e, t, n) {
    var a = t.pendingProps, o = false, u = (t.flags & 128) !== 0, p;
    if ((p = u) || (p = e !== null && e.memoizedState === null ? false : (ke.current & 2) !== 0), p && (o = true, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (we) {
        if (o ? ta(t) : na(), (e = Ve) ? (e = dm(e, $t), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Zn !== null ? { id: mn, overflow: hn } : null, retryLane: 536870912, hydrationErrors: null }, n = Hd(e), n.return = t, t.child = n, ut = t, Ve = null)) : e = null, e === null) throw $n(t);
        return ps(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var b = a.children;
      return a = a.fallback, o ? (na(), o = t.mode, b = Wr({ mode: "hidden", children: b }, o), a = Ua(a, o, n, null), b.return = t, a.return = t, b.sibling = a, t.child = b, a = t.child, a.memoizedState = Dc(n), a.childLanes = Oc(e, p, n), t.memoizedState = wc, wo(null, a)) : (ta(t), Nc(t, b));
    }
    var x = e.memoizedState;
    if (x !== null && (b = x.dehydrated, b !== null)) {
      if (u) t.flags & 256 ? (ta(t), t.flags &= -257, t = zc(e, t, n)) : t.memoizedState !== null ? (na(), t.child = e.child, t.flags |= 128, t = null) : (na(), b = a.fallback, o = t.mode, a = Wr({ mode: "visible", children: a.children }, o), b = Ua(b, o, n, null), b.flags |= 2, a.return = t, b.return = t, a.sibling = b, t.child = a, qa(t, e.child, null, n), a = t.child, a.memoizedState = Dc(n), a.childLanes = Oc(e, p, n), t.memoizedState = wc, t = wo(null, a));
      else if (ta(t), ps(b)) {
        if (p = b.nextSibling && b.nextSibling.dataset, p) var U = p.dgst;
        p = U, a = Error(c(419)), a.stack = "", a.digest = p, go({ value: a, source: null, stack: null }), t = zc(e, t, n);
      } else if (We || Sl(e, t, n, false), p = (n & e.childLanes) !== 0, We || p) {
        if (p = Ye, p !== null && (a = _t(p, n), a !== 0 && a !== x.retryLane)) throw x.retryLane = a, ja(e, a), Nt(p, e, a), Rc;
        ds(b) || ui(), t = zc(e, t, n);
      } else ds(b) ? (t.flags |= 192, t.child = e.child, t = null) : (e = x.treeContext, Ve = Ft(b.nextSibling), ut = t, we = true, kn = null, $t = false, e !== null && Yd(t, e), t = Nc(t, a.children), t.flags |= 4096);
      return t;
    }
    return o ? (na(), b = a.fallback, o = t.mode, x = e.child, U = x.sibling, a = An(x, { mode: "hidden", children: a.children }), a.subtreeFlags = x.subtreeFlags & 65011712, U !== null ? b = An(U, b) : (b = Ua(b, o, n, null), b.flags |= 2), b.return = t, a.return = t, a.sibling = b, t.child = a, wo(null, a), a = t.child, b = e.child.memoizedState, b === null ? b = Dc(n) : (o = b.cachePool, o !== null ? (x = Je._currentValue, o = o.parent !== x ? { parent: x, pool: x } : o) : o = Qd(), b = { baseLanes: b.baseLanes | n, cachePool: o }), a.memoizedState = b, a.childLanes = Oc(e, p, n), t.memoizedState = wc, wo(e.child, a)) : (ta(t), n = e.child, e = n.sibling, n = An(n, { mode: "visible", children: a.children }), n.return = t, n.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Nc(e, t) {
    return t = Wr({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
  }
  function Wr(e, t) {
    return e = Lt(22, e, null, t), e.lanes = 0, e;
  }
  function zc(e, t, n) {
    return qa(t, e.child, null, n), e = Nc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function ov(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Zu(e.return, t, n);
  }
  function jc(e, t, n, a, o, u) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: o, treeForkCount: u } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = a, p.tail = n, p.tailMode = o, p.treeForkCount = u);
  }
  function rv(e, t, n) {
    var a = t.pendingProps, o = a.revealOrder, u = a.tail;
    a = a.children;
    var p = ke.current, b = (p & 2) !== 0;
    if (b ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, B(ke, p), st(e, t, a, n), a = we ? ho : 0, !b && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ov(e, n, t);
      else if (e.tag === 19) ov(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Vr(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), jc(t, false, o, n, u, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Vr(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        jc(t, true, n, null, u, a);
        break;
      case "together":
        jc(t, false, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Nn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), oa |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
      if (Sl(e, t, n, false), (n & t.childLanes) === 0) return null;
    } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, n = An(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = An(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Uc(e, t) {
    return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && zr(e)));
  }
  function qS(e, t, n) {
    switch (t.tag) {
      case 3:
        ee(t, t.stateNode.containerInfo), Jn(t, Je, e.memoizedState.cache), Ba();
        break;
      case 27:
      case 5:
        be(t);
        break;
      case 4:
        ee(t, t.stateNode.containerInfo);
        break;
      case 10:
        Jn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, rc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (ta(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? lv(e, t, n) : (ta(t), e = Nn(e, t, n), e !== null ? e.sibling : null);
        ta(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (Sl(e, t, n, false), a = (n & t.childLanes) !== 0), o) {
          if (a) return rv(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), B(ke, ke.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Fp(e, t, n, t.pendingProps);
      case 24:
        Jn(t, Je, e.memoizedState.cache);
    }
    return Nn(e, t, n);
  }
  function iv(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) We = true;
    else {
      if (!Uc(e, n) && (t.flags & 128) === 0) return We = false, qS(e, t, n);
      We = (e.flags & 131072) !== 0;
    }
    else We = false, we && (t.flags & 1048576) !== 0 && Gd(t, ho, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Ya(t.elementType), t.type = e, typeof e == "function") Yu(e) ? (a = Xa(e, a), t.tag = 1, t = nv(null, t, e, a, n)) : (t.tag = 0, t = Mc(null, t, e, a, n));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === X) {
                t.tag = 11, t = kp(null, t, e, a, n);
                break e;
              } else if (o === V) {
                t.tag = 14, t = $p(null, t, e, a, n);
                break e;
              }
            }
            throw t = xe(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return Mc(e, t, t.type, t.pendingProps, n);
      case 1:
        return a = t.type, o = Xa(a, t.pendingProps), nv(e, t, a, o, n);
      case 3:
        e: {
          if (ee(t, t.stateNode.containerInfo), e === null) throw Error(c(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          o = u.element, tc(e, t), To(t, a, null, n);
          var p = t.memoizedState;
          if (a = p.cache, Jn(t, Je, a), a !== u.cache && ku(t, [Je], n, true), Co(), a = p.element, u.isDehydrated) if (u = { element: a, isDehydrated: false, cache: p.cache }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            t = av(e, t, a, n);
            break e;
          } else if (a !== o) {
            o = Pt(Error(c(424)), t), go(o), t = av(e, t, a, n);
            break e;
          } else for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ve = Ft(e.firstChild), ut = t, we = true, kn = null, $t = true, n = Fd(t, null, a, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ba(), a === o) {
              t = Nn(e, t, n);
              break e;
            }
            st(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Fr(e, t), e === null ? (n = ym(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : we || (n = t.type, e = t.pendingProps, a = mi(F.current).createElement(n), a[it] = t, a[At] = e, ft(a, n, e), lt(a), t.stateNode = a) : t.memoizedState = ym(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return be(t), e === null && we && (a = t.stateNode = mm(t.type, t.pendingProps, F.current), ut = t, $t = true, o = Ve, sa(t.type) ? (vs = o, Ve = Ft(a.firstChild)) : Ve = o), st(e, t, t.pendingProps.children, n), Fr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && we && ((o = a = Ve) && (a = y1(a, t.type, t.pendingProps, $t), a !== null ? (t.stateNode = a, ut = t, Ve = Ft(a.firstChild), $t = false, o = true) : o = false), o || $n(t)), be(t), o = t.type, u = t.pendingProps, p = e !== null ? e.memoizedProps : null, a = u.children, cs(o, u) ? a = null : p !== null && cs(o, p) && (t.flags |= 32), t.memoizedState !== null && (o = uc(e, t, zS, null, null, n), Xo._currentValue = o), Fr(e, t), st(e, t, a, n), t.child;
      case 6:
        return e === null && we && ((e = n = Ve) && (n = b1(n, t.pendingProps, $t), n !== null ? (t.stateNode = n, ut = t, Ve = null, e = true) : e = false), e || $n(t)), null;
      case 13:
        return lv(e, t, n);
      case 4:
        return ee(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = qa(t, null, a, n) : st(e, t, a, n), t.child;
      case 11:
        return kp(e, t, t.type, t.pendingProps, n);
      case 7:
        return st(e, t, t.pendingProps, n), t.child;
      case 8:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return a = t.pendingProps, Jn(t, t.type, a.value), st(e, t, a.children, n), t.child;
      case 9:
        return o = t.type._context, a = t.pendingProps.children, La(t), o = ct(o), a = a(o), t.flags |= 1, st(e, t, a, n), t.child;
      case 14:
        return $p(e, t, t.type, t.pendingProps, n);
      case 15:
        return Jp(e, t, t.type, t.pendingProps, n);
      case 19:
        return rv(e, t, n);
      case 31:
        return VS(e, t, n);
      case 22:
        return Fp(e, t, n, t.pendingProps);
      case 24:
        return La(t), a = ct(Je), e === null ? (o = Fu(), o === null && (o = Ye, u = $u(), o.pooledCache = u, u.refCount++, u !== null && (o.pooledCacheLanes |= n), o = u), t.memoizedState = { parent: a, cache: o }, ec(t), Jn(t, Je, o)) : ((e.lanes & n) !== 0 && (tc(e, t), To(t, null, null, n), Co()), o = e.memoizedState, u = t.memoizedState, o.parent !== a ? (o = { parent: a, cache: a }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Jn(t, Je, a)) : (a = u.cache, Jn(t, Je, a), a !== o.cache && ku(t, [Je], n, true))), st(e, t, t.pendingProps.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function zn(e) {
    e.flags |= 4;
  }
  function Bc(e, t, n, a, o) {
    if ((t = (e.mode & 32) !== 0) && (t = false), t) {
      if (e.flags |= 16777216, (o & 335544128) === o) if (e.stateNode.complete) e.flags |= 8192;
      else if (jv()) e.flags |= 8192;
      else throw Va = Hr, Wu;
    } else e.flags &= -16777217;
  }
  function uv(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !Cm(t)) if (jv()) e.flags |= 8192;
    else throw Va = Hr, Wu;
  }
  function ei(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? vt() : 536870912, e.lanes |= t, Nl |= t);
  }
  function Do(e, t) {
    if (!we) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var a = null; n !== null; ) n.alternate !== null && (a = n), n = n.sibling;
        a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
    }
  }
  function qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, a |= o.subtreeFlags & 65011712, a |= o.flags & 65011712, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, a |= o.subtreeFlags, a |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function IS(e, t, n) {
    var a = t.pendingProps;
    switch (Xu(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qe(t), null;
      case 1:
        return qe(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), wn(Je), ie(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (bl(t) ? zn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Qu())), qe(t), null;
      case 26:
        var o = t.type, u = t.memoizedState;
        return e === null ? (zn(t), u !== null ? (qe(t), uv(t, u)) : (qe(t), Bc(t, o, null, a, n))) : u ? u !== e.memoizedState ? (zn(t), qe(t), uv(t, u)) : (qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && zn(t), qe(t), Bc(t, o, e, a, n)), null;
      case 27:
        if (De(t), n = F.current, o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && zn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(c(166));
            return qe(t), null;
          }
          e = I.current, bl(t) ? Vd(t) : (e = mm(o, a, n), t.stateNode = e, zn(t));
        }
        return qe(t), null;
      case 5:
        if (De(t), o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && zn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(c(166));
            return qe(t), null;
          }
          if (u = I.current, bl(t)) Vd(t);
          else {
            var p = mi(F.current);
            switch (u) {
              case 1:
                u = p.createElementNS("http://www.w3.org/2000/svg", o);
                break;
              case 2:
                u = p.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                break;
              default:
                switch (o) {
                  case "svg":
                    u = p.createElementNS("http://www.w3.org/2000/svg", o);
                    break;
                  case "math":
                    u = p.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                    break;
                  case "script":
                    u = p.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                    break;
                  case "select":
                    u = typeof a.is == "string" ? p.createElement("select", { is: a.is }) : p.createElement("select"), a.multiple ? u.multiple = true : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? p.createElement(o, { is: a.is }) : p.createElement(o);
                }
            }
            u[it] = t, u[At] = a;
            e: for (p = t.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6) u.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                p.child.return = p, p = p.child;
                continue;
              }
              if (p === t) break e;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === t) break e;
                p = p.return;
              }
              p.sibling.return = p.return, p = p.sibling;
            }
            t.stateNode = u;
            e: switch (ft(u, o, a), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = true;
                break e;
              default:
                a = false;
            }
            a && zn(t);
          }
        }
        return qe(t), Bc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && zn(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(c(166));
          if (e = F.current, bl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, o = ut, o !== null) switch (o.tag) {
              case 27:
              case 5:
                a = o.memoizedProps;
            }
            e[it] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === true || lm(e.nodeValue, n)), e || $n(t, true);
          } else e = mi(e).createTextNode(a), e[it] = t, t.stateNode = e;
        }
        return qe(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = bl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[it] = t;
            } else Ba(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), e = false;
          } else n = Qu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = true;
          if (!e) return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
          if ((t.flags & 128) !== 0) throw Error(c(558));
        }
        return qe(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = bl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(c(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(c(317));
              o[it] = t;
            } else Ba(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), o = false;
          } else o = Qu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = true;
          if (!o) return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
        }
        return Yt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, o = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (o = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== o && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), ei(t, t.updateQueue), qe(t), null);
      case 4:
        return ie(), e === null && ls(t.stateNode.containerInfo), qe(t), null;
      case 10:
        return wn(t.type), qe(t), null;
      case 19:
        if (R(ke), a = t.memoizedState, a === null) return qe(t), null;
        if (o = (t.flags & 128) !== 0, u = a.rendering, u === null) if (o) Do(a, false);
        else {
          if (Ze !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (u = Vr(e), u !== null) {
              for (t.flags |= 128, Do(a, false), e = u.updateQueue, t.updateQueue = e, ei(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; ) Bd(n, e), n = n.sibling;
              return B(ke, ke.current & 1 | 2), we && Rn(t, a.treeForkCount), t.child;
            }
            e = e.sibling;
          }
          a.tail !== null && bt() > oi && (t.flags |= 128, o = true, Do(a, false), t.lanes = 4194304);
        }
        else {
          if (!o) if (e = Vr(u), e !== null) {
            if (t.flags |= 128, o = true, e = e.updateQueue, t.updateQueue = e, ei(t, e), Do(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !we) return qe(t), null;
          } else 2 * bt() - a.renderingStartTime > oi && n !== 536870912 && (t.flags |= 128, o = true, Do(a, false), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = bt(), e.sibling = null, n = ke.current, B(ke, o ? n & 1 | 2 : n & 1), we && Rn(t, a.treeForkCount), e) : (qe(t), null);
      case 22:
      case 23:
        return Yt(t), oc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), n = t.updateQueue, n !== null && ei(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && R(Ga), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), wn(Je), qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function XS(e, t) {
    switch (Xu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return wn(Je), ie(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return De(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Yt(t), t.alternate === null) throw Error(c(340));
          Ba();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Yt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(c(340));
          Ba();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return R(ke), null;
      case 4:
        return ie(), null;
      case 10:
        return wn(t.type), null;
      case 22:
      case 23:
        return Yt(t), oc(), e !== null && R(Ga), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return wn(Je), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function cv(e, t) {
    switch (Xu(t), t.tag) {
      case 3:
        wn(Je), ie();
        break;
      case 26:
      case 27:
      case 5:
        De(t);
        break;
      case 4:
        ie();
        break;
      case 31:
        t.memoizedState !== null && Yt(t);
        break;
      case 13:
        Yt(t);
        break;
      case 19:
        R(ke);
        break;
      case 10:
        wn(t.type);
        break;
      case 22:
      case 23:
        Yt(t), oc(), e !== null && R(Ga);
        break;
      case 24:
        wn(Je);
    }
  }
  function Oo(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var o = a.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var u = n.create, p = n.inst;
            a = u(), p.destroy = a;
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (b) {
      Be(t, t.return, b);
    }
  }
  function aa(e, t, n) {
    try {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var p = a.inst, b = p.destroy;
            if (b !== void 0) {
              p.destroy = void 0, o = t;
              var x = n, U = b;
              try {
                U();
              } catch (Y) {
                Be(o, x, Y);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (Y) {
      Be(t, t.return, Y);
    }
  }
  function sv(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        ep(t, n);
      } catch (a) {
        Be(e, e.return, a);
      }
    }
  }
  function fv(e, t, n) {
    n.props = Xa(e.type, e.memoizedProps), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Be(e, t, a);
    }
  }
  function No(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(a) : n.current = a;
      }
    } catch (o) {
      Be(e, t, o);
    }
  }
  function gn(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null) if (typeof a == "function") try {
      a();
    } catch (o) {
      Be(e, t, o);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof n == "function") try {
      n(null);
    } catch (o) {
      Be(e, t, o);
    }
    else n.current = null;
  }
  function dv(e) {
    var t = e.type, n = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (o) {
      Be(e, e.return, o);
    }
  }
  function Hc(e, t, n) {
    try {
      var a = e.stateNode;
      d1(a, e.type, n, t), a[At] = t;
    } catch (o) {
      Be(e, e.return, o);
    }
  }
  function pv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && sa(e.type) || e.tag === 4;
  }
  function Lc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || pv(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && sa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Gc(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Tn));
    else if (a !== 4 && (a === 27 && sa(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (Gc(e, t, n), e = e.sibling; e !== null; ) Gc(e, t, n), e = e.sibling;
  }
  function ti(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && sa(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (ti(e, t, n), e = e.sibling; e !== null; ) ti(e, t, n), e = e.sibling;
  }
  function vv(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, o = t.attributes; o.length; ) t.removeAttributeNode(o[0]);
      ft(t, a, n), t[it] = e, t[At] = n;
    } catch (u) {
      Be(e, e.return, u);
    }
  }
  var jn = false, et = false, Yc = false, mv = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function KS(e, t) {
    if (e = e.containerInfo, is = xi, e = Rd(e), zu(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var a = n.getSelection && n.getSelection();
        if (a && a.rangeCount !== 0) {
          n = a.anchorNode;
          var o = a.anchorOffset, u = a.focusNode;
          a = a.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var p = 0, b = -1, x = -1, U = 0, Y = 0, Z = e, H = null;
          t: for (; ; ) {
            for (var G; Z !== n || o !== 0 && Z.nodeType !== 3 || (b = p + o), Z !== u || a !== 0 && Z.nodeType !== 3 || (x = p + a), Z.nodeType === 3 && (p += Z.nodeValue.length), (G = Z.firstChild) !== null; ) H = Z, Z = G;
            for (; ; ) {
              if (Z === e) break t;
              if (H === n && ++U === o && (b = p), H === u && ++Y === a && (x = p), (G = Z.nextSibling) !== null) break;
              Z = H, H = Z.parentNode;
            }
            Z = G;
          }
          n = b === -1 || x === -1 ? null : { start: b, end: x };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (us = { focusedElem: e, selectionRange: n }, xi = false, ot = t; ot !== null; ) if (t = ot, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ot = e;
    else for (; ot !== null; ) {
      switch (t = ot, u = t.alternate, e = t.flags, t.tag) {
        case 0:
          if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (n = 0; n < e.length; n++) o = e[n], o.ref.impl = o.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && u !== null) {
            e = void 0, n = t, o = u.memoizedProps, u = u.memoizedState, a = n.stateNode;
            try {
              var le = Xa(n.type, o);
              e = a.getSnapshotBeforeUpdate(le, u), a.__reactInternalSnapshotBeforeUpdate = e;
            } catch (se) {
              Be(n, n.return, se);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) fs(e);
            else if (n === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                fs(e);
                break;
              default:
                e.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((e & 1024) !== 0) throw Error(c(163));
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ot = e;
        break;
      }
      ot = t.return;
    }
  }
  function hv(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Bn(e, n), a & 4 && Oo(5, n);
        break;
      case 1:
        if (Bn(e, n), a & 4) if (e = n.stateNode, t === null) try {
          e.componentDidMount();
        } catch (p) {
          Be(n, n.return, p);
        }
        else {
          var o = Xa(n.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (p) {
            Be(n, n.return, p);
          }
        }
        a & 64 && sv(n), a & 512 && No(n, n.return);
        break;
      case 3:
        if (Bn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null) switch (n.child.tag) {
            case 27:
            case 5:
              t = n.child.stateNode;
              break;
            case 1:
              t = n.child.stateNode;
          }
          try {
            ep(e, t);
          } catch (p) {
            Be(n, n.return, p);
          }
        }
        break;
      case 27:
        t === null && a & 4 && vv(n);
      case 26:
      case 5:
        Bn(e, n), t === null && a & 4 && dv(n), a & 512 && No(n, n.return);
        break;
      case 12:
        Bn(e, n);
        break;
      case 31:
        Bn(e, n), a & 4 && bv(e, n);
        break;
      case 13:
        Bn(e, n), a & 4 && Sv(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = e1.bind(null, n), S1(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || jn, !a) {
          t = t !== null && t.memoizedState !== null || et, o = jn;
          var u = et;
          jn = a, (et = t) && !u ? Hn(e, n, (n.subtreeFlags & 8772) !== 0) : Bn(e, n), jn = o, et = u;
        }
        break;
      case 30:
        break;
      default:
        Bn(e, n);
    }
  }
  function gv(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, gv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && hu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Xe = null, Mt = false;
  function Un(e, t, n) {
    for (n = n.child; n !== null; ) yv(e, t, n), n = n.sibling;
  }
  function yv(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function") try {
      St.onCommitFiberUnmount(Ra, n);
    } catch {
    }
    switch (n.tag) {
      case 26:
        et || gn(n, t), Un(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        et || gn(n, t);
        var a = Xe, o = Mt;
        sa(n.type) && (Xe = n.stateNode, Mt = false), Un(e, t, n), Vo(n.stateNode), Xe = a, Mt = o;
        break;
      case 5:
        et || gn(n, t);
      case 6:
        if (a = Xe, o = Mt, Xe = null, Un(e, t, n), Xe = a, Mt = o, Xe !== null) if (Mt) try {
          (Xe.nodeType === 9 ? Xe.body : Xe.nodeName === "HTML" ? Xe.ownerDocument.body : Xe).removeChild(n.stateNode);
        } catch (u) {
          Be(n, t, u);
        }
        else try {
          Xe.removeChild(n.stateNode);
        } catch (u) {
          Be(n, t, u);
        }
        break;
      case 18:
        Xe !== null && (Mt ? (e = Xe, sm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Yl(e)) : sm(Xe, n.stateNode));
        break;
      case 4:
        a = Xe, o = Mt, Xe = n.stateNode.containerInfo, Mt = true, Un(e, t, n), Xe = a, Mt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        aa(2, n, t), et || aa(4, n, t), Un(e, t, n);
        break;
      case 1:
        et || (gn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && fv(n, t, a)), Un(e, t, n);
        break;
      case 21:
        Un(e, t, n);
        break;
      case 22:
        et = (a = et) || n.memoizedState !== null, Un(e, t, n), et = a;
        break;
      default:
        Un(e, t, n);
    }
  }
  function bv(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Yl(e);
      } catch (n) {
        Be(t, t.return, n);
      }
    }
  }
  function Sv(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      Yl(e);
    } catch (n) {
      Be(t, t.return, n);
    }
  }
  function QS(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new mv()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new mv()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function ni(e, t) {
    var n = QS(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var o = t1.bind(null, e, a);
        a.then(o, o);
      }
    });
  }
  function wt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var a = 0; a < n.length; a++) {
      var o = n[a], u = e, p = t, b = p;
      e: for (; b !== null; ) {
        switch (b.tag) {
          case 27:
            if (sa(b.type)) {
              Xe = b.stateNode, Mt = false;
              break e;
            }
            break;
          case 5:
            Xe = b.stateNode, Mt = false;
            break e;
          case 3:
          case 4:
            Xe = b.stateNode.containerInfo, Mt = true;
            break e;
        }
        b = b.return;
      }
      if (Xe === null) throw Error(c(160));
      yv(u, p, o), Xe = null, Mt = false, u = o.alternate, u !== null && (u.return = null), o.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) Ev(t, e), t = t.sibling;
  }
  var on = null;
  function Ev(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        wt(t, e), Dt(e), a & 4 && (aa(3, e, e.return), Oo(3, e), aa(5, e, e.return));
        break;
      case 1:
        wt(t, e), Dt(e), a & 512 && (et || n === null || gn(n, n.return)), a & 64 && jn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var o = on;
        if (wt(t, e), Dt(e), a & 512 && (et || n === null || gn(n, n.return)), a & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null) if (a === null) if (e.stateNode === null) {
            e: {
              a = e.type, n = e.memoizedProps, o = o.ownerDocument || o;
              t: switch (a) {
                case "title":
                  u = o.getElementsByTagName("title")[0], (!u || u[lo] || u[it] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = o.createElement(a), o.head.insertBefore(u, o.querySelector("head > title"))), ft(u, a, n), u[it] = e, lt(u), a = u;
                  break e;
                case "link":
                  var p = Em("link", "href", o).get(a + (n.href || ""));
                  if (p) {
                    for (var b = 0; b < p.length; b++) if (u = p[b], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                      p.splice(b, 1);
                      break t;
                    }
                  }
                  u = o.createElement(a), ft(u, a, n), o.head.appendChild(u);
                  break;
                case "meta":
                  if (p = Em("meta", "content", o).get(a + (n.content || ""))) {
                    for (b = 0; b < p.length; b++) if (u = p[b], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                      p.splice(b, 1);
                      break t;
                    }
                  }
                  u = o.createElement(a), ft(u, a, n), o.head.appendChild(u);
                  break;
                default:
                  throw Error(c(468, a));
              }
              u[it] = e, lt(u), a = u;
            }
            e.stateNode = a;
          } else xm(o, e.type, e.stateNode);
          else e.stateNode = Sm(o, a, e.memoizedProps);
          else u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, a === null ? xm(o, e.type, e.stateNode) : Sm(o, a, e.memoizedProps)) : a === null && e.stateNode !== null && Hc(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        wt(t, e), Dt(e), a & 512 && (et || n === null || gn(n, n.return)), n !== null && a & 4 && Hc(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (wt(t, e), Dt(e), a & 512 && (et || n === null || gn(n, n.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            cl(o, "");
          } catch (le) {
            Be(e, e.return, le);
          }
        }
        a & 4 && e.stateNode != null && (o = e.memoizedProps, Hc(e, o, n !== null ? n.memoizedProps : o)), a & 1024 && (Yc = true);
        break;
      case 6:
        if (wt(t, e), Dt(e), a & 4) {
          if (e.stateNode === null) throw Error(c(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (le) {
            Be(e, e.return, le);
          }
        }
        break;
      case 3:
        if (yi = null, o = on, on = hi(t.containerInfo), wt(t, e), on = o, Dt(e), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Yl(t.containerInfo);
        } catch (le) {
          Be(e, e.return, le);
        }
        Yc && (Yc = false, xv(e));
        break;
      case 4:
        a = on, on = hi(e.stateNode.containerInfo), wt(t, e), Dt(e), on = a;
        break;
      case 12:
        wt(t, e), Dt(e);
        break;
      case 31:
        wt(t, e), Dt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, ni(e, a)));
        break;
      case 13:
        wt(t, e), Dt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (li = bt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, ni(e, a)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var x = n !== null && n.memoizedState !== null, U = jn, Y = et;
        if (jn = U || o, et = Y || x, wt(t, e), et = Y, jn = U, Dt(e), a & 8192) e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || x || jn || et || Ka(e)), n = null, t = e; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (n === null) {
              x = n = t;
              try {
                if (u = x.stateNode, o) p = u.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                else {
                  b = x.stateNode;
                  var Z = x.memoizedProps.style, H = Z != null && Z.hasOwnProperty("display") ? Z.display : null;
                  b.style.display = H == null || typeof H == "boolean" ? "" : ("" + H).trim();
                }
              } catch (le) {
                Be(x, x.return, le);
              }
            }
          } else if (t.tag === 6) {
            if (n === null) {
              x = t;
              try {
                x.stateNode.nodeValue = o ? "" : x.memoizedProps;
              } catch (le) {
                Be(x, x.return, le);
              }
            }
          } else if (t.tag === 18) {
            if (n === null) {
              x = t;
              try {
                var G = x.stateNode;
                o ? fm(G, true) : fm(x.stateNode, false);
              } catch (le) {
                Be(x, x.return, le);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break e;
            n === t && (n = null), t = t.return;
          }
          n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
        }
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, ni(e, n))));
        break;
      case 19:
        wt(t, e), Dt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, ni(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        wt(t, e), Dt(e);
    }
  }
  function Dt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (pv(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode, u = Lc(e);
            ti(e, u, o);
            break;
          case 5:
            var p = n.stateNode;
            n.flags & 32 && (cl(p, ""), n.flags &= -33);
            var b = Lc(e);
            ti(e, b, p);
            break;
          case 3:
          case 4:
            var x = n.stateNode.containerInfo, U = Lc(e);
            Gc(e, U, x);
            break;
          default:
            throw Error(c(161));
        }
      } catch (Y) {
        Be(e, e.return, Y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function xv(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var t = e;
      xv(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
    }
  }
  function Bn(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) hv(e, t.alternate, t), t = t.sibling;
  }
  function Ka(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          aa(4, t, t.return), Ka(t);
          break;
        case 1:
          gn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && fv(t, t.return, n), Ka(t);
          break;
        case 27:
          Vo(t.stateNode);
        case 26:
        case 5:
          gn(t, t.return), Ka(t);
          break;
        case 22:
          t.memoizedState === null && Ka(t);
          break;
        case 30:
          Ka(t);
          break;
        default:
          Ka(t);
      }
      e = e.sibling;
    }
  }
  function Hn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, o = e, u = t, p = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Hn(o, u, n), Oo(4, u);
          break;
        case 1:
          if (Hn(o, u, n), a = u, o = a.stateNode, typeof o.componentDidMount == "function") try {
            o.componentDidMount();
          } catch (U) {
            Be(a, a.return, U);
          }
          if (a = u, o = a.updateQueue, o !== null) {
            var b = a.stateNode;
            try {
              var x = o.shared.hiddenCallbacks;
              if (x !== null) for (o.shared.hiddenCallbacks = null, o = 0; o < x.length; o++) Wd(x[o], b);
            } catch (U) {
              Be(a, a.return, U);
            }
          }
          n && p & 64 && sv(u), No(u, u.return);
          break;
        case 27:
          vv(u);
        case 26:
        case 5:
          Hn(o, u, n), n && a === null && p & 4 && dv(u), No(u, u.return);
          break;
        case 12:
          Hn(o, u, n);
          break;
        case 31:
          Hn(o, u, n), n && p & 4 && bv(o, u);
          break;
        case 13:
          Hn(o, u, n), n && p & 4 && Sv(o, u);
          break;
        case 22:
          u.memoizedState === null && Hn(o, u, n), No(u, u.return);
          break;
        case 30:
          break;
        default:
          Hn(o, u, n);
      }
      t = t.sibling;
    }
  }
  function Vc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && yo(n));
  }
  function qc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && yo(e));
  }
  function rn(e, t, n, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Cv(e, t, n, a), t = t.sibling;
  }
  function Cv(e, t, n, a) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        rn(e, t, n, a), o & 2048 && Oo(9, t);
        break;
      case 1:
        rn(e, t, n, a);
        break;
      case 3:
        rn(e, t, n, a), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && yo(e)));
        break;
      case 12:
        if (o & 2048) {
          rn(e, t, n, a), e = t.stateNode;
          try {
            var u = t.memoizedProps, p = u.id, b = u.onPostCommit;
            typeof b == "function" && b(p, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (x) {
            Be(t, t.return, x);
          }
        } else rn(e, t, n, a);
        break;
      case 31:
        rn(e, t, n, a);
        break;
      case 13:
        rn(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, p = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? rn(e, t, n, a) : zo(e, t) : u._visibility & 2 ? rn(e, t, n, a) : (u._visibility |= 2, wl(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || false)), o & 2048 && Vc(p, t);
        break;
      case 24:
        rn(e, t, n, a), o & 2048 && qc(t.alternate, t);
        break;
      default:
        rn(e, t, n, a);
    }
  }
  function wl(e, t, n, a, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var u = e, p = t, b = n, x = a, U = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          wl(u, p, b, x, o), Oo(8, p);
          break;
        case 23:
          break;
        case 22:
          var Y = p.stateNode;
          p.memoizedState !== null ? Y._visibility & 2 ? wl(u, p, b, x, o) : zo(u, p) : (Y._visibility |= 2, wl(u, p, b, x, o)), o && U & 2048 && Vc(p.alternate, p);
          break;
        case 24:
          wl(u, p, b, x, o), o && U & 2048 && qc(p.alternate, p);
          break;
        default:
          wl(u, p, b, x, o);
      }
      t = t.sibling;
    }
  }
  function zo(e, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var n = e, a = t, o = a.flags;
      switch (a.tag) {
        case 22:
          zo(n, a), o & 2048 && Vc(a.alternate, a);
          break;
        case 24:
          zo(n, a), o & 2048 && qc(a.alternate, a);
          break;
        default:
          zo(n, a);
      }
      t = t.sibling;
    }
  }
  var jo = 8192;
  function Dl(e, t, n) {
    if (e.subtreeFlags & jo) for (e = e.child; e !== null; ) Tv(e, t, n), e = e.sibling;
  }
  function Tv(e, t, n) {
    switch (e.tag) {
      case 26:
        Dl(e, t, n), e.flags & jo && e.memoizedState !== null && N1(n, on, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Dl(e, t, n);
        break;
      case 3:
      case 4:
        var a = on;
        on = hi(e.stateNode.containerInfo), Dl(e, t, n), on = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = jo, jo = 16777216, Dl(e, t, n), jo = a) : Dl(e, t, n));
        break;
      default:
        Dl(e, t, n);
    }
  }
  function _v(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Uo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var n = 0; n < t.length; n++) {
        var a = t[n];
        ot = a, Rv(a, e);
      }
      _v(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Av(e), e = e.sibling;
  }
  function Av(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Uo(e), e.flags & 2048 && aa(9, e, e.return);
        break;
      case 3:
        Uo(e);
        break;
      case 12:
        Uo(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ai(e)) : Uo(e);
        break;
      default:
        Uo(e);
    }
  }
  function ai(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var n = 0; n < t.length; n++) {
        var a = t[n];
        ot = a, Rv(a, e);
      }
      _v(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          aa(8, t, t.return), ai(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, ai(t));
          break;
        default:
          ai(t);
      }
      e = e.sibling;
    }
  }
  function Rv(e, t) {
    for (; ot !== null; ) {
      var n = ot;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          aa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          yo(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ot = a;
      else e: for (n = e; ot !== null; ) {
        a = ot;
        var o = a.sibling, u = a.return;
        if (gv(a), a === n) {
          ot = null;
          break e;
        }
        if (o !== null) {
          o.return = u, ot = o;
          break e;
        }
        ot = u;
      }
    }
  }
  var PS = { getCacheForType: function(e) {
    var t = ct(Je), n = t.data.get(e);
    return n === void 0 && (n = e(), t.data.set(e, n)), n;
  }, cacheSignal: function() {
    return ct(Je).controller.signal;
  } }, ZS = typeof WeakMap == "function" ? WeakMap : Map, je = 0, Ye = null, _e = null, Re = 0, Ue = 0, Vt = null, la = false, Ol = false, Ic = false, Ln = 0, Ze = 0, oa = 0, Qa = 0, Xc = 0, qt = 0, Nl = 0, Bo = null, Ot = null, Kc = false, li = 0, Mv = 0, oi = 1 / 0, ri = null, ra = null, nt = 0, ia = null, zl = null, Gn = 0, Qc = 0, Pc = null, wv = null, Ho = 0, Zc = null;
  function It() {
    return (je & 2) !== 0 && Re !== 0 ? Re & -Re : K.T !== null ? es() : vu();
  }
  function Dv() {
    if (qt === 0) if ((Re & 536870912) === 0 || we) {
      var e = tl;
      tl <<= 1, (tl & 3932160) === 0 && (tl = 262144), qt = e;
    } else qt = 536870912;
    return e = Gt.current, e !== null && (e.flags |= 32), qt;
  }
  function Nt(e, t, n) {
    (e === Ye && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null) && (jl(e, 0), ua(e, Re, qt, false)), Qe(e, n), ((je & 2) === 0 || e !== Ye) && (e === Ye && ((je & 2) === 0 && (Qa |= n), Ze === 4 && ua(e, Re, qt, false)), yn(e));
  }
  function Ov(e, t, n) {
    if ((je & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ie(e, t), o = a ? JS(e, t) : $c(e, t, true), u = a;
    do {
      if (o === 0) {
        Ol && !a && ua(e, t, 0, false);
        break;
      } else {
        if (n = e.current.alternate, u && !kS(n)) {
          o = $c(e, t, false), u = false;
          continue;
        }
        if (o === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u) var p = 0;
          else p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            t = p;
            e: {
              var b = e;
              o = Bo;
              var x = b.current.memoizedState.isDehydrated;
              if (x && (jl(b, p).flags |= 256), p = $c(b, p, false), p !== 2) {
                if (Ic && !x) {
                  b.errorRecoveryDisabledLanes |= u, Qa |= u, o = 4;
                  break e;
                }
                u = Ot, Ot = o, u !== null && (Ot === null ? Ot = u : Ot.push.apply(Ot, u));
              }
              o = p;
            }
            if (u = false, o !== 2) continue;
          }
        }
        if (o === 1) {
          jl(e, 0), ua(e, t, 0, true);
          break;
        }
        e: {
          switch (a = e, u = o, u) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ua(a, t, qt, !la);
              break e;
            case 2:
              Ot = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (o = li + 300 - bt(), 10 < o)) {
            if (ua(a, t, qt, !la), fe(a, 0, true) !== 0) break e;
            Gn = t, a.timeoutHandle = um(Nv.bind(null, a, n, Ot, ri, Kc, t, qt, Qa, Nl, la, u, "Throttled", -0, 0), o);
            break e;
          }
          Nv(a, n, Ot, ri, Kc, t, qt, Qa, Nl, la, u, null, -0, 0);
        }
      }
      break;
    } while (true);
    yn(e);
  }
  function Nv(e, t, n, a, o, u, p, b, x, U, Y, Z, H, G) {
    if (e.timeoutHandle = -1, Z = t.subtreeFlags, Z & 8192 || (Z & 16785408) === 16785408) {
      Z = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Tn }, Tv(t, u, Z);
      var le = (u & 62914560) === u ? li - bt() : (u & 4194048) === u ? Mv - bt() : 0;
      if (le = z1(Z, le), le !== null) {
        Gn = u, e.cancelPendingCommit = le(Yv.bind(null, e, t, u, n, a, o, p, b, x, Y, Z, null, H, G)), ua(e, u, p, !U);
        return;
      }
    }
    Yv(e, t, u, n, a, o, p, b, x);
  }
  function kS(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var a = 0; a < n.length; a++) {
        var o = n[a], u = o.getSnapshot;
        o = o.value;
        try {
          if (!Ht(u(), o)) return false;
        } catch {
          return false;
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function ua(e, t, n, a) {
    t &= ~Xc, t &= ~Qa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var u = 31 - pt(o), p = 1 << u;
      a[u] = -1, o &= ~p;
    }
    n !== 0 && wa(e, n, t);
  }
  function ii() {
    return (je & 6) === 0 ? (Lo(0), false) : true;
  }
  function kc() {
    if (_e !== null) {
      if (Ue === 0) var e = _e.return;
      else e = _e, Mn = Ha = null, fc(e), Tl = null, So = 0, e = _e;
      for (; e !== null; ) cv(e.alternate, e), e = e.return;
      _e = null;
    }
  }
  function jl(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, m1(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Gn = 0, kc(), Ye = e, _e = n = An(e.current, null), Re = t, Ue = 0, Vt = null, la = false, Ol = Ie(e, t), Ic = false, Nl = qt = Xc = Qa = oa = Ze = 0, Ot = Bo = null, Kc = false, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0) for (e = e.entanglements, a &= t; 0 < a; ) {
      var o = 31 - pt(a), u = 1 << o;
      t |= e[o], a &= ~u;
    }
    return Ln = t, Mr(), n;
  }
  function zv(e, t) {
    he = null, K.H = Mo, t === Cl || t === Br ? (t = kd(), Ue = 3) : t === Wu ? (t = kd(), Ue = 4) : Ue = t === Rc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, _e === null && (Ze = 1, $r(e, Pt(t, e.current)));
  }
  function jv() {
    var e = Gt.current;
    return e === null ? true : (Re & 4194048) === Re ? Jt === null : (Re & 62914560) === Re || (Re & 536870912) !== 0 ? e === Jt : false;
  }
  function Uv() {
    var e = K.H;
    return K.H = Mo, e === null ? Mo : e;
  }
  function Bv() {
    var e = K.A;
    return K.A = PS, e;
  }
  function ui() {
    Ze = 4, la || (Re & 4194048) !== Re && Gt.current !== null || (Ol = true), (oa & 134217727) === 0 && (Qa & 134217727) === 0 || Ye === null || ua(Ye, Re, qt, false);
  }
  function $c(e, t, n) {
    var a = je;
    je |= 2;
    var o = Uv(), u = Bv();
    (Ye !== e || Re !== t) && (ri = null, jl(e, t)), t = false;
    var p = Ze;
    e: do
      try {
        if (Ue !== 0 && _e !== null) {
          var b = _e, x = Vt;
          switch (Ue) {
            case 8:
              kc(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Gt.current === null && (t = true);
              var U = Ue;
              if (Ue = 0, Vt = null, Ul(e, b, x, U), n && Ol) {
                p = 0;
                break e;
              }
              break;
            default:
              U = Ue, Ue = 0, Vt = null, Ul(e, b, x, U);
          }
        }
        $S(), p = Ze;
        break;
      } catch (Y) {
        zv(e, Y);
      }
    while (true);
    return t && e.shellSuspendCounter++, Mn = Ha = null, je = a, K.H = o, K.A = u, _e === null && (Ye = null, Re = 0, Mr()), p;
  }
  function $S() {
    for (; _e !== null; ) Hv(_e);
  }
  function JS(e, t) {
    var n = je;
    je |= 2;
    var a = Uv(), o = Bv();
    Ye !== e || Re !== t ? (ri = null, oi = bt() + 500, jl(e, t)) : Ol = Ie(e, t);
    e: do
      try {
        if (Ue !== 0 && _e !== null) {
          t = _e;
          var u = Vt;
          t: switch (Ue) {
            case 1:
              Ue = 0, Vt = null, Ul(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Pd(u)) {
                Ue = 0, Vt = null, Lv(t);
                break;
              }
              t = function() {
                Ue !== 2 && Ue !== 9 || Ye !== e || (Ue = 7), yn(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ue = 7;
              break e;
            case 4:
              Ue = 5;
              break e;
            case 7:
              Pd(u) ? (Ue = 0, Vt = null, Lv(t)) : (Ue = 0, Vt = null, Ul(e, t, u, 7));
              break;
            case 5:
              var p = null;
              switch (_e.tag) {
                case 26:
                  p = _e.memoizedState;
                case 5:
                case 27:
                  var b = _e;
                  if (p ? Cm(p) : b.stateNode.complete) {
                    Ue = 0, Vt = null;
                    var x = b.sibling;
                    if (x !== null) _e = x;
                    else {
                      var U = b.return;
                      U !== null ? (_e = U, ci(U)) : _e = null;
                    }
                    break t;
                  }
              }
              Ue = 0, Vt = null, Ul(e, t, u, 5);
              break;
            case 6:
              Ue = 0, Vt = null, Ul(e, t, u, 6);
              break;
            case 8:
              kc(), Ze = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        FS();
        break;
      } catch (Y) {
        zv(e, Y);
      }
    while (true);
    return Mn = Ha = null, K.H = a, K.A = o, je = n, _e !== null ? 0 : (Ye = null, Re = 0, Mr(), Ze);
  }
  function FS() {
    for (; _e !== null && !yt(); ) Hv(_e);
  }
  function Hv(e) {
    var t = iv(e.alternate, e, Ln);
    e.memoizedProps = e.pendingProps, t === null ? ci(e) : _e = t;
  }
  function Lv(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = tv(n, t, t.pendingProps, t.type, void 0, Re);
        break;
      case 11:
        t = tv(n, t, t.pendingProps, t.type.render, t.ref, Re);
        break;
      case 5:
        fc(t);
      default:
        cv(n, t), t = _e = Bd(t, Ln), t = iv(n, t, Ln);
    }
    e.memoizedProps = e.pendingProps, t === null ? ci(e) : _e = t;
  }
  function Ul(e, t, n, a) {
    Mn = Ha = null, fc(t), Tl = null, So = 0;
    var o = t.return;
    try {
      if (YS(e, o, t, n, Re)) {
        Ze = 1, $r(e, Pt(n, e.current)), _e = null;
        return;
      }
    } catch (u) {
      if (o !== null) throw _e = o, u;
      Ze = 1, $r(e, Pt(n, e.current)), _e = null;
      return;
    }
    t.flags & 32768 ? (we || a === 1 ? e = true : Ol || (Re & 536870912) !== 0 ? e = false : (la = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Gt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Gv(t, e)) : ci(t);
  }
  function ci(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Gv(t, la);
        return;
      }
      e = t.return;
      var n = IS(t.alternate, t, Ln);
      if (n !== null) {
        _e = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Ze === 0 && (Ze = 5);
  }
  function Gv(e, t) {
    do {
      var n = XS(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, _e = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        _e = e;
        return;
      }
      _e = e = n;
    } while (e !== null);
    Ze = 6, _e = null;
  }
  function Yv(e, t, n, a, o, u, p, b, x) {
    e.cancelPendingCommit = null;
    do
      si();
    while (nt !== 0);
    if ((je & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (u = t.lanes | t.childLanes, u |= Lu, Ct(e, n, u, p, b, x), e === Ye && (_e = Ye = null, Re = 0), zl = t, ia = e, Gn = n, Qc = u, Pc = o, wv = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, n1(Aa, function() {
        return Kv(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = K.T, K.T = null, o = te.p, te.p = 2, p = je, je |= 4;
        try {
          KS(e, t, n);
        } finally {
          je = p, te.p = o, K.T = a;
        }
      }
      nt = 1, Vv(), qv(), Iv();
    }
  }
  function Vv() {
    if (nt === 1) {
      nt = 0;
      var e = ia, t = zl, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = K.T, K.T = null;
        var a = te.p;
        te.p = 2;
        var o = je;
        je |= 4;
        try {
          Ev(t, e);
          var u = us, p = Rd(e.containerInfo), b = u.focusedElem, x = u.selectionRange;
          if (p !== b && b && b.ownerDocument && Ad(b.ownerDocument.documentElement, b)) {
            if (x !== null && zu(b)) {
              var U = x.start, Y = x.end;
              if (Y === void 0 && (Y = U), "selectionStart" in b) b.selectionStart = U, b.selectionEnd = Math.min(Y, b.value.length);
              else {
                var Z = b.ownerDocument || document, H = Z && Z.defaultView || window;
                if (H.getSelection) {
                  var G = H.getSelection(), le = b.textContent.length, se = Math.min(x.start, le), Ge = x.end === void 0 ? se : Math.min(x.end, le);
                  !G.extend && se > Ge && (p = Ge, Ge = se, se = p);
                  var N = _d(b, se), M = _d(b, Ge);
                  if (N && M && (G.rangeCount !== 1 || G.anchorNode !== N.node || G.anchorOffset !== N.offset || G.focusNode !== M.node || G.focusOffset !== M.offset)) {
                    var j = Z.createRange();
                    j.setStart(N.node, N.offset), G.removeAllRanges(), se > Ge ? (G.addRange(j), G.extend(M.node, M.offset)) : (j.setEnd(M.node, M.offset), G.addRange(j));
                  }
                }
              }
            }
            for (Z = [], G = b; G = G.parentNode; ) G.nodeType === 1 && Z.push({ element: G, left: G.scrollLeft, top: G.scrollTop });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < Z.length; b++) {
              var P = Z[b];
              P.element.scrollLeft = P.left, P.element.scrollTop = P.top;
            }
          }
          xi = !!is, us = is = null;
        } finally {
          je = o, te.p = a, K.T = n;
        }
      }
      e.current = t, nt = 2;
    }
  }
  function qv() {
    if (nt === 2) {
      nt = 0;
      var e = ia, t = zl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = K.T, K.T = null;
        var a = te.p;
        te.p = 2;
        var o = je;
        je |= 4;
        try {
          hv(e, t.alternate, t);
        } finally {
          je = o, te.p = a, K.T = n;
        }
      }
      nt = 3;
    }
  }
  function Iv() {
    if (nt === 4 || nt === 3) {
      nt = 0, In();
      var e = ia, t = zl, n = Gn, a = wv;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? nt = 5 : (nt = 0, zl = ia = null, Xv(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (ra = null), an(n), t = t.stateNode, St && typeof St.onCommitFiberRoot == "function") try {
        St.onCommitFiberRoot(Ra, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        t = K.T, o = te.p, te.p = 2, K.T = null;
        try {
          for (var u = e.onRecoverableError, p = 0; p < a.length; p++) {
            var b = a[p];
            u(b.value, { componentStack: b.stack });
          }
        } finally {
          K.T = t, te.p = o;
        }
      }
      (Gn & 3) !== 0 && si(), yn(e), o = e.pendingLanes, (n & 261930) !== 0 && (o & 42) !== 0 ? e === Zc ? Ho++ : (Ho = 0, Zc = e) : Ho = 0, Lo(0);
    }
  }
  function Xv(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, yo(t)));
  }
  function si() {
    return Vv(), qv(), Iv(), Kv();
  }
  function Kv() {
    if (nt !== 5) return false;
    var e = ia, t = Qc;
    Qc = 0;
    var n = an(Gn), a = K.T, o = te.p;
    try {
      te.p = 32 > n ? 32 : n, K.T = null, n = Pc, Pc = null;
      var u = ia, p = Gn;
      if (nt = 0, zl = ia = null, Gn = 0, (je & 6) !== 0) throw Error(c(331));
      var b = je;
      if (je |= 4, Av(u.current), Cv(u, u.current, p, n), je = b, Lo(0, false), St && typeof St.onPostCommitFiberRoot == "function") try {
        St.onPostCommitFiberRoot(Ra, u);
      } catch {
      }
      return true;
    } finally {
      te.p = o, K.T = a, Xv(e, t);
    }
  }
  function Qv(e, t, n) {
    t = Pt(n, t), t = Ac(e.stateNode, t, 2), e = ea(e, t, 2), e !== null && (Qe(e, 2), yn(e));
  }
  function Be(e, t, n) {
    if (e.tag === 3) Qv(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Qv(t, e, n);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ra === null || !ra.has(a))) {
          e = Pt(n, e), n = Pp(2), a = ea(t, n, 2), a !== null && (Zp(n, a, t, e), Qe(a, 2), yn(a));
          break;
        }
      }
      t = t.return;
    }
  }
  function Jc(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new ZS();
      var o = /* @__PURE__ */ new Set();
      a.set(t, o);
    } else o = a.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), a.set(t, o));
    o.has(n) || (Ic = true, o.add(n), e = WS.bind(null, e, t, n), t.then(e, e));
  }
  function WS(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ye === e && (Re & n) === n && (Ze === 4 || Ze === 3 && (Re & 62914560) === Re && 300 > bt() - li ? (je & 2) === 0 && jl(e, 0) : Xc |= n, Nl === Re && (Nl = 0)), yn(e);
  }
  function Pv(e, t) {
    t === 0 && (t = vt()), e = ja(e, t), e !== null && (Qe(e, t), yn(e));
  }
  function e1(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Pv(e, n);
  }
  function t1(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    a !== null && a.delete(t), Pv(e, n);
  }
  function n1(e, t) {
    return eo(e, t);
  }
  var fi = null, Bl = null, Fc = false, di = false, Wc = false, ca = 0;
  function yn(e) {
    e !== Bl && e.next === null && (Bl === null ? fi = Bl = e : Bl = Bl.next = e), di = true, Fc || (Fc = true, l1());
  }
  function Lo(e, t) {
    if (!Wc && di) {
      Wc = true;
      do
        for (var n = false, a = fi; a !== null; ) {
          if (e !== 0) {
            var o = a.pendingLanes;
            if (o === 0) var u = 0;
            else {
              var p = a.suspendedLanes, b = a.pingedLanes;
              u = (1 << 31 - pt(42 | e) + 1) - 1, u &= o & ~(p & ~b), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = true, Jv(a, u));
          } else u = Re, u = fe(a, a === Ye ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Ie(a, u) || (n = true, Jv(a, u));
          a = a.next;
        }
      while (n);
      Wc = false;
    }
  }
  function a1() {
    Zv();
  }
  function Zv() {
    di = Fc = false;
    var e = 0;
    ca !== 0 && v1() && (e = ca);
    for (var t = bt(), n = null, a = fi; a !== null; ) {
      var o = a.next, u = kv(a, t);
      u === 0 ? (a.next = null, n === null ? fi = o : n.next = o, o === null && (Bl = n)) : (n = a, (e !== 0 || (u & 3) !== 0) && (di = true)), a = o;
    }
    nt !== 0 && nt !== 5 || Lo(e), ca !== 0 && (ca = 0);
  }
  function kv(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var p = 31 - pt(u), b = 1 << p, x = o[p];
      x === -1 ? ((b & n) === 0 || (b & a) !== 0) && (o[p] = at(b, t)) : x <= t && (e.expiredLanes |= b), u &= ~b;
    }
    if (t = Ye, n = Re, n = fe(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && to(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Ie(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && to(a), an(n)) {
        case 2:
        case 8:
          n = mr;
          break;
        case 32:
          n = Aa;
          break;
        case 268435456:
          n = xn;
          break;
        default:
          n = Aa;
      }
      return a = $v.bind(null, e), n = eo(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && to(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function $v(e, t) {
    if (nt !== 0 && nt !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (si() && e.callbackNode !== n) return null;
    var a = Re;
    return a = fe(e, e === Ye ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Ov(e, a, t), kv(e, bt()), e.callbackNode != null && e.callbackNode === n ? $v.bind(null, e) : null);
  }
  function Jv(e, t) {
    if (si()) return null;
    Ov(e, t, true);
  }
  function l1() {
    h1(function() {
      (je & 6) !== 0 ? eo(_a, a1) : Zv();
    });
  }
  function es() {
    if (ca === 0) {
      var e = El;
      e === 0 && (e = el, el <<= 1, (el & 261888) === 0 && (el = 256)), ca = e;
    }
    return ca;
  }
  function Fv(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Sr("" + e);
  }
  function Wv(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function o1(e, t, n, a, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var u = Fv((o[At] || null).action), p = a.submitter;
      p && (t = (t = p[At] || null) ? Fv(t.formAction) : p.getAttribute("formAction"), t !== null && (u = t, p = null));
      var b = new Tr("action", "action", null, a, o);
      e.push({ event: b, listeners: [{ instance: null, listener: function() {
        if (a.defaultPrevented) {
          if (ca !== 0) {
            var x = p ? Wv(o, p) : new FormData(o);
            Sc(n, { pending: true, data: x, method: o.method, action: u }, null, x);
          }
        } else typeof u == "function" && (b.preventDefault(), x = p ? Wv(o, p) : new FormData(o), Sc(n, { pending: true, data: x, method: o.method, action: u }, u, x));
      }, currentTarget: o }] });
    }
  }
  for (var ts = 0; ts < Hu.length; ts++) {
    var ns = Hu[ts], r1 = ns.toLowerCase(), i1 = ns[0].toUpperCase() + ns.slice(1);
    ln(r1, "on" + i1);
  }
  ln(Dd, "onAnimationEnd"), ln(Od, "onAnimationIteration"), ln(Nd, "onAnimationStart"), ln("dblclick", "onDoubleClick"), ln("focusin", "onFocus"), ln("focusout", "onBlur"), ln(CS, "onTransitionRun"), ln(TS, "onTransitionStart"), ln(_S, "onTransitionCancel"), ln(zd, "onTransitionEnd"), il("onMouseEnter", ["mouseout", "mouseover"]), il("onMouseLeave", ["mouseout", "mouseover"]), il("onPointerEnter", ["pointerout", "pointerover"]), il("onPointerLeave", ["pointerout", "pointerover"]), Da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Go = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), u1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));
  function em(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], o = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t) for (var p = a.length - 1; 0 <= p; p--) {
          var b = a[p], x = b.instance, U = b.currentTarget;
          if (b = b.listener, x !== u && o.isPropagationStopped()) break e;
          u = b, o.currentTarget = U;
          try {
            u(o);
          } catch (Y) {
            Rr(Y);
          }
          o.currentTarget = null, u = x;
        }
        else for (p = 0; p < a.length; p++) {
          if (b = a[p], x = b.instance, U = b.currentTarget, b = b.listener, x !== u && o.isPropagationStopped()) break e;
          u = b, o.currentTarget = U;
          try {
            u(o);
          } catch (Y) {
            Rr(Y);
          }
          o.currentTarget = null, u = x;
        }
      }
    }
  }
  function Ae(e, t) {
    var n = t[mu];
    n === void 0 && (n = t[mu] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (tm(t, e, 2, false), n.add(a));
  }
  function as(e, t, n) {
    var a = 0;
    t && (a |= 4), tm(n, e, a, t);
  }
  var pi = "_reactListening" + Math.random().toString(36).slice(2);
  function ls(e) {
    if (!e[pi]) {
      e[pi] = true, Zf.forEach(function(n) {
        n !== "selectionchange" && (u1.has(n) || as(n, false, e), as(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[pi] || (t[pi] = true, as("selectionchange", false, t));
    }
  }
  function tm(e, t, n, a) {
    switch (Dm(t)) {
      case 2:
        var o = B1;
        break;
      case 8:
        o = H1;
        break;
      default:
        o = bs;
    }
    n = o.bind(null, t, n, e), o = void 0, !Tu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), a ? o !== void 0 ? e.addEventListener(t, n, { capture: true, passive: o }) : e.addEventListener(t, n, true) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, false);
  }
  function os(e, t, n, a, o) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (; ; ) {
      if (a === null) return;
      var p = a.tag;
      if (p === 3 || p === 4) {
        var b = a.stateNode.containerInfo;
        if (b === o) break;
        if (p === 4) for (p = a.return; p !== null; ) {
          var x = p.tag;
          if ((x === 3 || x === 4) && p.stateNode.containerInfo === o) return;
          p = p.return;
        }
        for (; b !== null; ) {
          if (p = ll(b), p === null) return;
          if (x = p.tag, x === 5 || x === 6 || x === 26 || x === 27) {
            a = u = p;
            continue e;
          }
          b = b.parentNode;
        }
      }
      a = a.return;
    }
    rd(function() {
      var U = u, Y = xu(n), Z = [];
      e: {
        var H = jd.get(e);
        if (H !== void 0) {
          var G = Tr, le = e;
          switch (e) {
            case "keypress":
              if (xr(n) === 0) break e;
            case "keydown":
            case "keyup":
              G = tS;
              break;
            case "focusin":
              le = "focus", G = Mu;
              break;
            case "focusout":
              le = "blur", G = Mu;
              break;
            case "beforeblur":
            case "afterblur":
              G = Mu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = cd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = Ib;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = lS;
              break;
            case Dd:
            case Od:
            case Nd:
              G = Qb;
              break;
            case zd:
              G = rS;
              break;
            case "scroll":
            case "scrollend":
              G = Vb;
              break;
            case "wheel":
              G = uS;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Zb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = fd;
              break;
            case "toggle":
            case "beforetoggle":
              G = sS;
          }
          var se = (t & 4) !== 0, Ge = !se && (e === "scroll" || e === "scrollend"), N = se ? H !== null ? H + "Capture" : null : H;
          se = [];
          for (var M = U, j; M !== null; ) {
            var P = M;
            if (j = P.stateNode, P = P.tag, P !== 5 && P !== 26 && P !== 27 || j === null || N === null || (P = ro(M, N), P != null && se.push(Yo(M, P, j))), Ge) break;
            M = M.return;
          }
          0 < se.length && (H = new G(H, le, null, n, Y), Z.push({ event: H, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (H = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", H && n !== Eu && (le = n.relatedTarget || n.fromElement) && (ll(le) || le[al])) break e;
          if ((G || H) && (H = Y.window === Y ? Y : (H = Y.ownerDocument) ? H.defaultView || H.parentWindow : window, G ? (le = n.relatedTarget || n.toElement, G = U, le = le ? ll(le) : null, le !== null && (Ge = f(le), se = le.tag, le !== Ge || se !== 5 && se !== 27 && se !== 6) && (le = null)) : (G = null, le = U), G !== le)) {
            if (se = cd, P = "onMouseLeave", N = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (se = fd, P = "onPointerLeave", N = "onPointerEnter", M = "pointer"), Ge = G == null ? H : oo(G), j = le == null ? H : oo(le), H = new se(P, M + "leave", G, n, Y), H.target = Ge, H.relatedTarget = j, P = null, ll(Y) === U && (se = new se(N, M + "enter", le, n, Y), se.target = j, se.relatedTarget = Ge, P = se), Ge = P, G && le) t: {
              for (se = c1, N = G, M = le, j = 0, P = N; P; P = se(P)) j++;
              P = 0;
              for (var ue = M; ue; ue = se(ue)) P++;
              for (; 0 < j - P; ) N = se(N), j--;
              for (; 0 < P - j; ) M = se(M), P--;
              for (; j--; ) {
                if (N === M || M !== null && N === M.alternate) {
                  se = N;
                  break t;
                }
                N = se(N), M = se(M);
              }
              se = null;
            }
            else se = null;
            G !== null && nm(Z, H, G, se, false), le !== null && Ge !== null && nm(Z, Ge, le, se, true);
          }
        }
        e: {
          if (H = U ? oo(U) : window, G = H.nodeName && H.nodeName.toLowerCase(), G === "select" || G === "input" && H.type === "file") var Oe = bd;
          else if (gd(H)) if (Sd) Oe = SS;
          else {
            Oe = yS;
            var re = gS;
          }
          else G = H.nodeName, !G || G.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? U && Su(U.elementType) && (Oe = bd) : Oe = bS;
          if (Oe && (Oe = Oe(e, U))) {
            yd(Z, Oe, n, Y);
            break e;
          }
          re && re(e, H, U), e === "focusout" && U && H.type === "number" && U.memoizedProps.value != null && bu(H, "number", H.value);
        }
        switch (re = U ? oo(U) : window, e) {
          case "focusin":
            (gd(re) || re.contentEditable === "true") && (pl = re, ju = U, mo = null);
            break;
          case "focusout":
            mo = ju = pl = null;
            break;
          case "mousedown":
            Uu = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Uu = false, Md(Z, n, Y);
            break;
          case "selectionchange":
            if (xS) break;
          case "keydown":
          case "keyup":
            Md(Z, n, Y);
        }
        var Se;
        if (Du) e: {
          switch (e) {
            case "compositionstart":
              var Me = "onCompositionStart";
              break e;
            case "compositionend":
              Me = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Me = "onCompositionUpdate";
              break e;
          }
          Me = void 0;
        }
        else dl ? md(e, n) && (Me = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Me = "onCompositionStart");
        Me && (dd && n.locale !== "ko" && (dl || Me !== "onCompositionStart" ? Me === "onCompositionEnd" && dl && (Se = id()) : (Pn = Y, _u = "value" in Pn ? Pn.value : Pn.textContent, dl = true)), re = vi(U, Me), 0 < re.length && (Me = new sd(Me, e, null, n, Y), Z.push({ event: Me, listeners: re }), Se ? Me.data = Se : (Se = hd(n), Se !== null && (Me.data = Se)))), (Se = dS ? pS(e, n) : vS(e, n)) && (Me = vi(U, "onBeforeInput"), 0 < Me.length && (re = new sd("onBeforeInput", "beforeinput", null, n, Y), Z.push({ event: re, listeners: Me }), re.data = Se)), o1(Z, e, U, n, Y);
      }
      em(Z, t);
    });
  }
  function Yo(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function vi(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var o = e, u = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || u === null || (o = ro(e, n), o != null && a.unshift(Yo(e, o, u)), o = ro(e, t), o != null && a.push(Yo(e, o, u))), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function c1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function nm(e, t, n, a, o) {
    for (var u = t._reactName, p = []; n !== null && n !== a; ) {
      var b = n, x = b.alternate, U = b.stateNode;
      if (b = b.tag, x !== null && x === a) break;
      b !== 5 && b !== 26 && b !== 27 || U === null || (x = U, o ? (U = ro(n, u), U != null && p.unshift(Yo(n, U, x))) : o || (U = ro(n, u), U != null && p.push(Yo(n, U, x)))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var s1 = /\r\n?/g, f1 = /\u0000|\uFFFD/g;
  function am(e) {
    return (typeof e == "string" ? e : "" + e).replace(s1, `
`).replace(f1, "");
  }
  function lm(e, t) {
    return t = am(t), am(e) === t;
  }
  function Le(e, t, n, a, o, u) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || cl(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && cl(e, "" + a);
        break;
      case "className":
        yr(e, "class", a);
        break;
      case "tabIndex":
        yr(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        yr(e, n, a);
        break;
      case "style":
        ld(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          yr(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = Sr("" + a), e.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof u == "function" && (n === "formAction" ? (t !== "input" && Le(e, t, "name", o.name, o, null), Le(e, t, "formEncType", o.formEncType, o, null), Le(e, t, "formMethod", o.formMethod, o, null), Le(e, t, "formTarget", o.formTarget, o, null)) : (Le(e, t, "encType", o.encType, o, null), Le(e, t, "method", o.method, o, null), Le(e, t, "target", o.target, o, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = Sr("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = Tn);
        break;
      case "onScroll":
        a != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Ae("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
          if (n = a.__html, n != null) {
            if (o.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Sr("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === true ? e.setAttribute(n, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
        break;
      case "popover":
        Ae("beforetoggle", e), Ae("toggle", e), gr(e, "popover", a);
        break;
      case "xlinkActuate":
        Cn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Cn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Cn(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Cn(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Cn(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Cn(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Cn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Cn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Cn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        gr(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Gb.get(n) || n, gr(e, n, a));
    }
  }
  function rs(e, t, n, a, o, u) {
    switch (n) {
      case "style":
        ld(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
          if (n = a.__html, n != null) {
            if (o.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? cl(e, a) : (typeof a == "number" || typeof a == "bigint") && cl(e, "" + a);
        break;
      case "onScroll":
        a != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Ae("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Tn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!kf.hasOwnProperty(n)) e: {
          if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), u = e[At] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, o), typeof a == "function")) {
            typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, o);
            break e;
          }
          n in e ? e[n] = a : a === true ? e.setAttribute(n, "") : gr(e, n, a);
        }
    }
  }
  function ft(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ae("error", e), Ae("load", e);
        var a = false, o = false, u;
        for (u in n) if (n.hasOwnProperty(u)) {
          var p = n[u];
          if (p != null) switch (u) {
            case "src":
              a = true;
              break;
            case "srcSet":
              o = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(c(137, t));
            default:
              Le(e, t, u, p, n, null);
          }
        }
        o && Le(e, t, "srcSet", n.srcSet, n, null), a && Le(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ae("invalid", e);
        var b = u = p = o = null, x = null, U = null;
        for (a in n) if (n.hasOwnProperty(a)) {
          var Y = n[a];
          if (Y != null) switch (a) {
            case "name":
              o = Y;
              break;
            case "type":
              p = Y;
              break;
            case "checked":
              x = Y;
              break;
            case "defaultChecked":
              U = Y;
              break;
            case "value":
              u = Y;
              break;
            case "defaultValue":
              b = Y;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (Y != null) throw Error(c(137, t));
              break;
            default:
              Le(e, t, a, Y, n, null);
          }
        }
        ed(e, u, b, x, U, p, o, false);
        return;
      case "select":
        Ae("invalid", e), a = p = u = null;
        for (o in n) if (n.hasOwnProperty(o) && (b = n[o], b != null)) switch (o) {
          case "value":
            u = b;
            break;
          case "defaultValue":
            p = b;
            break;
          case "multiple":
            a = b;
          default:
            Le(e, t, o, b, n, null);
        }
        t = u, n = p, e.multiple = !!a, t != null ? ul(e, !!a, t, false) : n != null && ul(e, !!a, n, true);
        return;
      case "textarea":
        Ae("invalid", e), u = o = a = null;
        for (p in n) if (n.hasOwnProperty(p) && (b = n[p], b != null)) switch (p) {
          case "value":
            a = b;
            break;
          case "defaultValue":
            o = b;
            break;
          case "children":
            u = b;
            break;
          case "dangerouslySetInnerHTML":
            if (b != null) throw Error(c(91));
            break;
          default:
            Le(e, t, p, b, n, null);
        }
        nd(e, a, o, u);
        return;
      case "option":
        for (x in n) n.hasOwnProperty(x) && (a = n[x], a != null) && (x === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Le(e, t, x, a, n, null));
        return;
      case "dialog":
        Ae("beforetoggle", e), Ae("toggle", e), Ae("cancel", e), Ae("close", e);
        break;
      case "iframe":
      case "object":
        Ae("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Go.length; a++) Ae(Go[a], e);
        break;
      case "image":
        Ae("error", e), Ae("load", e);
        break;
      case "details":
        Ae("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ae("error", e), Ae("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (U in n) if (n.hasOwnProperty(U) && (a = n[U], a != null)) switch (U) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(c(137, t));
          default:
            Le(e, t, U, a, n, null);
        }
        return;
      default:
        if (Su(t)) {
          for (Y in n) n.hasOwnProperty(Y) && (a = n[Y], a !== void 0 && rs(e, t, Y, a, n, void 0));
          return;
        }
    }
    for (b in n) n.hasOwnProperty(b) && (a = n[b], a != null && Le(e, t, b, a, n, null));
  }
  function d1(e, t, n, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null, u = null, p = null, b = null, x = null, U = null, Y = null;
        for (G in n) {
          var Z = n[G];
          if (n.hasOwnProperty(G) && Z != null) switch (G) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              x = Z;
            default:
              a.hasOwnProperty(G) || Le(e, t, G, null, a, Z);
          }
        }
        for (var H in a) {
          var G = a[H];
          if (Z = n[H], a.hasOwnProperty(H) && (G != null || Z != null)) switch (H) {
            case "type":
              u = G;
              break;
            case "name":
              o = G;
              break;
            case "checked":
              U = G;
              break;
            case "defaultChecked":
              Y = G;
              break;
            case "value":
              p = G;
              break;
            case "defaultValue":
              b = G;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (G != null) throw Error(c(137, t));
              break;
            default:
              G !== Z && Le(e, t, H, G, a, Z);
          }
        }
        yu(e, p, b, x, U, Y, u, o);
        return;
      case "select":
        G = p = b = H = null;
        for (u in n) if (x = n[u], n.hasOwnProperty(u) && x != null) switch (u) {
          case "value":
            break;
          case "multiple":
            G = x;
          default:
            a.hasOwnProperty(u) || Le(e, t, u, null, a, x);
        }
        for (o in a) if (u = a[o], x = n[o], a.hasOwnProperty(o) && (u != null || x != null)) switch (o) {
          case "value":
            H = u;
            break;
          case "defaultValue":
            b = u;
            break;
          case "multiple":
            p = u;
          default:
            u !== x && Le(e, t, o, u, a, x);
        }
        t = b, n = p, a = G, H != null ? ul(e, !!n, H, false) : !!a != !!n && (t != null ? ul(e, !!n, t, true) : ul(e, !!n, n ? [] : "", false));
        return;
      case "textarea":
        G = H = null;
        for (b in n) if (o = n[b], n.hasOwnProperty(b) && o != null && !a.hasOwnProperty(b)) switch (b) {
          case "value":
            break;
          case "children":
            break;
          default:
            Le(e, t, b, null, a, o);
        }
        for (p in a) if (o = a[p], u = n[p], a.hasOwnProperty(p) && (o != null || u != null)) switch (p) {
          case "value":
            H = o;
            break;
          case "defaultValue":
            G = o;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (o != null) throw Error(c(91));
            break;
          default:
            o !== u && Le(e, t, p, o, a, u);
        }
        td(e, H, G);
        return;
      case "option":
        for (var le in n) H = n[le], n.hasOwnProperty(le) && H != null && !a.hasOwnProperty(le) && (le === "selected" ? e.selected = false : Le(e, t, le, null, a, H));
        for (x in a) H = a[x], G = n[x], a.hasOwnProperty(x) && H !== G && (H != null || G != null) && (x === "selected" ? e.selected = H && typeof H != "function" && typeof H != "symbol" : Le(e, t, x, H, a, G));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var se in n) H = n[se], n.hasOwnProperty(se) && H != null && !a.hasOwnProperty(se) && Le(e, t, se, null, a, H);
        for (U in a) if (H = a[U], G = n[U], a.hasOwnProperty(U) && H !== G && (H != null || G != null)) switch (U) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (H != null) throw Error(c(137, t));
            break;
          default:
            Le(e, t, U, H, a, G);
        }
        return;
      default:
        if (Su(t)) {
          for (var Ge in n) H = n[Ge], n.hasOwnProperty(Ge) && H !== void 0 && !a.hasOwnProperty(Ge) && rs(e, t, Ge, void 0, a, H);
          for (Y in a) H = a[Y], G = n[Y], !a.hasOwnProperty(Y) || H === G || H === void 0 && G === void 0 || rs(e, t, Y, H, a, G);
          return;
        }
    }
    for (var N in n) H = n[N], n.hasOwnProperty(N) && H != null && !a.hasOwnProperty(N) && Le(e, t, N, null, a, H);
    for (Z in a) H = a[Z], G = n[Z], !a.hasOwnProperty(Z) || H === G || H == null && G == null || Le(e, t, Z, H, a, G);
  }
  function om(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function p1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var o = n[a], u = o.transferSize, p = o.initiatorType, b = o.duration;
        if (u && b && om(p)) {
          for (p = 0, b = o.responseEnd, a += 1; a < n.length; a++) {
            var x = n[a], U = x.startTime;
            if (U > b) break;
            var Y = x.transferSize, Z = x.initiatorType;
            Y && om(Z) && (x = x.responseEnd, p += Y * (x < b ? 1 : (b - U) / (x - U)));
          }
          if (--a, t += 8 * (u + p) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var is = null, us = null;
  function mi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function rm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function im(e, t) {
    if (e === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function cs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ss = null;
  function v1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ss ? false : (ss = e, true) : (ss = null, false);
  }
  var um = typeof setTimeout == "function" ? setTimeout : void 0, m1 = typeof clearTimeout == "function" ? clearTimeout : void 0, cm = typeof Promise == "function" ? Promise : void 0, h1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof cm < "u" ? function(e) {
    return cm.resolve(null).then(e).catch(g1);
  } : um;
  function g1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function sa(e) {
    return e === "head";
  }
  function sm(e, t) {
    var n = t, a = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$" || n === "/&") {
        if (a === 0) {
          e.removeChild(o), Yl(t);
          return;
        }
        a--;
      } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") a++;
      else if (n === "html") Vo(e.ownerDocument.documentElement);
      else if (n === "head") {
        n = e.ownerDocument.head, Vo(n);
        for (var u = n.firstChild; u; ) {
          var p = u.nextSibling, b = u.nodeName;
          u[lo] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = p;
        }
      } else n === "body" && Vo(e.ownerDocument.body);
      n = o;
    } while (n);
    Yl(t);
  }
  function fm(e, t) {
    var n = e;
    e = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (e === 0) break;
        e--;
      } else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = a;
    } while (n);
  }
  function fs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          fs(n), hu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function y1(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[lo]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (u !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (u = e.getAttribute("src"), (u !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (t === "input" && e.type === "hidden") {
        var u = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (e = Ft(e.nextSibling), e === null) break;
    }
    return null;
  }
  function b1(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Ft(e.nextSibling), e === null)) return null;
    return e;
  }
  function dm(e, t) {
    for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ft(e.nextSibling), e === null)) return null;
    return e;
  }
  function ds(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ps(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function S1(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var a = function() {
        t(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function Ft(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var vs = null;
  function pm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return Ft(e.nextSibling);
          t--;
        } else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function vm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function mm(e, t, n) {
    switch (t = mi(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(c(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(c(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function Vo(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    hu(e);
  }
  var Wt = /* @__PURE__ */ new Map(), hm = /* @__PURE__ */ new Set();
  function hi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Yn = te.d;
  te.d = { f: E1, r: x1, D: C1, C: T1, L: _1, m: A1, X: M1, S: R1, M: w1 };
  function E1() {
    var e = Yn.f(), t = ii();
    return e || t;
  }
  function x1(e) {
    var t = ol(e);
    t !== null && t.tag === 5 && t.type === "form" ? zp(t) : Yn.r(e);
  }
  var Hl = typeof document > "u" ? null : document;
  function gm(e, t, n) {
    var a = Hl;
    if (a && typeof t == "string" && t) {
      var o = Kt(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), hm.has(o) || (hm.add(o), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(o) === null && (t = a.createElement("link"), ft(t, "link", e), lt(t), a.head.appendChild(t)));
    }
  }
  function C1(e) {
    Yn.D(e), gm("dns-prefetch", e, null);
  }
  function T1(e, t) {
    Yn.C(e, t), gm("preconnect", e, t);
  }
  function _1(e, t, n) {
    Yn.L(e, t, n);
    var a = Hl;
    if (a && e && t) {
      var o = 'link[rel="preload"][as="' + Kt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + Kt(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + Kt(n.imageSizes) + '"]')) : o += '[href="' + Kt(e) + '"]';
      var u = o;
      switch (t) {
        case "style":
          u = Ll(e);
          break;
        case "script":
          u = Gl(e);
      }
      Wt.has(u) || (e = h({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), Wt.set(u, e), a.querySelector(o) !== null || t === "style" && a.querySelector(qo(u)) || t === "script" && a.querySelector(Io(u)) || (t = a.createElement("link"), ft(t, "link", e), lt(t), a.head.appendChild(t)));
    }
  }
  function A1(e, t) {
    Yn.m(e, t);
    var n = Hl;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Kt(a) + '"][href="' + Kt(e) + '"]', u = o;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Gl(e);
      }
      if (!Wt.has(u) && (e = h({ rel: "modulepreload", href: e }, t), Wt.set(u, e), n.querySelector(o) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Io(u))) return;
        }
        a = n.createElement("link"), ft(a, "link", e), lt(a), n.head.appendChild(a);
      }
    }
  }
  function R1(e, t, n) {
    Yn.S(e, t, n);
    var a = Hl;
    if (a && e) {
      var o = rl(a).hoistableStyles, u = Ll(e);
      t = t || "default";
      var p = o.get(u);
      if (!p) {
        var b = { loading: 0, preload: null };
        if (p = a.querySelector(qo(u))) b.loading = 5;
        else {
          e = h({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = Wt.get(u)) && ms(e, n);
          var x = p = a.createElement("link");
          lt(x), ft(x, "link", e), x._p = new Promise(function(U, Y) {
            x.onload = U, x.onerror = Y;
          }), x.addEventListener("load", function() {
            b.loading |= 1;
          }), x.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, gi(p, t, a);
        }
        p = { type: "stylesheet", instance: p, count: 1, state: b }, o.set(u, p);
      }
    }
  }
  function M1(e, t) {
    Yn.X(e, t);
    var n = Hl;
    if (n && e) {
      var a = rl(n).hoistableScripts, o = Gl(e), u = a.get(o);
      u || (u = n.querySelector(Io(o)), u || (e = h({ src: e, async: true }, t), (t = Wt.get(o)) && hs(e, t), u = n.createElement("script"), lt(u), ft(u, "link", e), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, a.set(o, u));
    }
  }
  function w1(e, t) {
    Yn.M(e, t);
    var n = Hl;
    if (n && e) {
      var a = rl(n).hoistableScripts, o = Gl(e), u = a.get(o);
      u || (u = n.querySelector(Io(o)), u || (e = h({ src: e, async: true, type: "module" }, t), (t = Wt.get(o)) && hs(e, t), u = n.createElement("script"), lt(u), ft(u, "link", e), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, a.set(o, u));
    }
  }
  function ym(e, t, n, a) {
    var o = (o = F.current) ? hi(o) : null;
    if (!o) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Ll(n.href), n = rl(o).hoistableStyles, a = n.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Ll(n.href);
          var u = rl(o).hoistableStyles, p = u.get(e);
          if (p || (o = o.ownerDocument || o, p = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, u.set(e, p), (u = o.querySelector(qo(e))) && !u._p && (p.instance = u, p.state.loading = 5), Wt.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, Wt.set(e, n), u || D1(o, e, n, p.state))), t && a === null) throw Error(c(528, ""));
          return p;
        }
        if (t && a !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Gl(n), n = rl(o).hoistableScripts, a = n.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, e));
    }
  }
  function Ll(e) {
    return 'href="' + Kt(e) + '"';
  }
  function qo(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function bm(e) {
    return h({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function D1(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ft(t, "link", n), lt(t), e.head.appendChild(t));
  }
  function Gl(e) {
    return '[src="' + Kt(e) + '"]';
  }
  function Io(e) {
    return "script[async]" + e;
  }
  function Sm(e, t, n) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = e.querySelector('style[data-href~="' + Kt(n.href) + '"]');
        if (a) return t.instance = a, lt(a), a;
        var o = h({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
        return a = (e.ownerDocument || e).createElement("style"), lt(a), ft(a, "style", o), gi(a, n.precedence, e), t.instance = a;
      case "stylesheet":
        o = Ll(n.href);
        var u = e.querySelector(qo(o));
        if (u) return t.state.loading |= 4, t.instance = u, lt(u), u;
        a = bm(n), (o = Wt.get(o)) && ms(a, o), u = (e.ownerDocument || e).createElement("link"), lt(u);
        var p = u;
        return p._p = new Promise(function(b, x) {
          p.onload = b, p.onerror = x;
        }), ft(u, "link", a), t.state.loading |= 4, gi(u, n.precedence, e), t.instance = u;
      case "script":
        return u = Gl(n.src), (o = e.querySelector(Io(u))) ? (t.instance = o, lt(o), o) : (a = n, (o = Wt.get(u)) && (a = h({}, n), hs(a, o)), e = e.ownerDocument || e, o = e.createElement("script"), lt(o), ft(o, "link", a), e.head.appendChild(o), t.instance = o);
      case "void":
        return null;
      default:
        throw Error(c(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, gi(a, n.precedence, e));
    return t.instance;
  }
  function gi(e, t, n) {
    for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = a.length ? a[a.length - 1] : null, u = o, p = 0; p < a.length; p++) {
      var b = a[p];
      if (b.dataset.precedence === t) u = b;
      else if (u !== o) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function ms(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function hs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var yi = null;
  function Em(e, t, n) {
    if (yi === null) {
      var a = /* @__PURE__ */ new Map(), o = yi = /* @__PURE__ */ new Map();
      o.set(n, a);
    } else o = yi, a = o.get(n), a || (a = /* @__PURE__ */ new Map(), o.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
      var u = n[o];
      if (!(u[lo] || u[it] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = u.getAttribute(t) || "";
        p = e + p;
        var b = a.get(p);
        b ? b.push(u) : a.set(p, [u]);
      }
    }
    return a;
  }
  function xm(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
  }
  function O1(e, t, n) {
    if (n === 1 || t.itemProp != null) return false;
    switch (e) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : true;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function Cm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function N1(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var o = Ll(a.href), u = t.querySelector(qo(o));
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = bi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, lt(u);
          return;
        }
        u = t.ownerDocument || t, a = bm(a), (o = Wt.get(o)) && ms(a, o), u = u.createElement("link"), lt(u);
        var p = u;
        p._p = new Promise(function(b, x) {
          p.onload = b, p.onerror = x;
        }), ft(u, "link", a), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = bi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var gs = 0;
  function z1(e, t) {
    return e.stylesheets && e.count === 0 && Ei(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Ei(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && gs === 0 && (gs = 62500 * p1());
      var o = setTimeout(function() {
        if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && Ei(e, e.stylesheets), e.unsuspend)) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, (e.imgBytes > gs ? 50 : 800) + t);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(o);
      };
    } : null;
  }
  function bi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ei(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Si = null;
  function Ei(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Si = /* @__PURE__ */ new Map(), t.forEach(j1, e), Si = null, bi.call(e));
  }
  function j1(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Si.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Si.set(e, n);
        for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < o.length; u++) {
          var p = o[u];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (n.set(p.dataset.precedence, p), a = p);
        }
        a && n.set(null, a);
      }
      o = t.instance, p = o.getAttribute("data-precedence"), u = n.get(p) || a, u === a && n.set(null, o), n.set(p, o), this.count++, a = bi.bind(this), o.addEventListener("load", a), o.addEventListener("error", a), u ? u.parentNode.insertBefore(o, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Xo = { $$typeof: L, Provider: null, Consumer: null, _currentValue: oe, _currentValue2: oe, _threadCount: 0 };
  function U1(e, t, n, a, o, u, p, b, x) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Kn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kn(0), this.hiddenUpdates = Kn(null), this.identifierPrefix = a, this.onUncaughtError = o, this.onCaughtError = u, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Tm(e, t, n, a, o, u, p, b, x, U, Y, Z) {
    return e = new U1(e, t, n, p, x, U, Y, Z, b), t = 1, u === true && (t |= 24), u = Lt(3, null, null, t), e.current = u, u.stateNode = e, t = $u(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = { element: a, isDehydrated: n, cache: t }, ec(u), e;
  }
  function _m(e) {
    return e ? (e = hl, e) : hl;
  }
  function Am(e, t, n, a, o, u) {
    o = _m(o), a.context === null ? a.context = o : a.pendingContext = o, a = Wn(t), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = ea(e, a, t), n !== null && (Nt(n, e, t), xo(n, e, t));
  }
  function Rm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ys(e, t) {
    Rm(e, t), (e = e.alternate) && Rm(e, t);
  }
  function Mm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ja(e, 67108864);
      t !== null && Nt(t, e, 67108864), ys(e, 67108864);
    }
  }
  function wm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = It();
      t = nl(t);
      var n = ja(e, t);
      n !== null && Nt(n, e, t), ys(e, t);
    }
  }
  var xi = true;
  function B1(e, t, n, a) {
    var o = K.T;
    K.T = null;
    var u = te.p;
    try {
      te.p = 2, bs(e, t, n, a);
    } finally {
      te.p = u, K.T = o;
    }
  }
  function H1(e, t, n, a) {
    var o = K.T;
    K.T = null;
    var u = te.p;
    try {
      te.p = 8, bs(e, t, n, a);
    } finally {
      te.p = u, K.T = o;
    }
  }
  function bs(e, t, n, a) {
    if (xi) {
      var o = Ss(a);
      if (o === null) os(e, t, a, Ci, n), Om(e, a);
      else if (G1(o, e, t, n, a)) a.stopPropagation();
      else if (Om(e, a), t & 4 && -1 < L1.indexOf(e)) {
        for (; o !== null; ) {
          var u = ol(o);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var p = vn(u.pendingLanes);
                if (p !== 0) {
                  var b = u;
                  for (b.pendingLanes |= 2, b.entangledLanes |= 2; p; ) {
                    var x = 1 << 31 - pt(p);
                    b.entanglements[1] |= x, p &= ~x;
                  }
                  yn(u), (je & 6) === 0 && (oi = bt() + 500, Lo(0));
                }
              }
              break;
            case 31:
            case 13:
              b = ja(u, 2), b !== null && Nt(b, u, 2), ii(), ys(u, 2);
          }
          if (u = Ss(a), u === null && os(e, t, a, Ci, n), u === o) break;
          o = u;
        }
        o !== null && a.stopPropagation();
      } else os(e, t, a, null, n);
    }
  }
  function Ss(e) {
    return e = xu(e), Es(e);
  }
  var Ci = null;
  function Es(e) {
    if (Ci = null, e = ll(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = v(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = g(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Ci = e, null;
  }
  function Dm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (du()) {
          case _a:
            return 2;
          case mr:
            return 8;
          case Aa:
          case no:
            return 32;
          case xn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var xs = false, fa = null, da = null, pa = null, Ko = /* @__PURE__ */ new Map(), Qo = /* @__PURE__ */ new Map(), va = [], L1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Om(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        fa = null;
        break;
      case "dragenter":
      case "dragleave":
        da = null;
        break;
      case "mouseover":
      case "mouseout":
        pa = null;
        break;
      case "pointerover":
      case "pointerout":
        Ko.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qo.delete(t.pointerId);
    }
  }
  function Po(e, t, n, a, o, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: u, targetContainers: [o] }, t !== null && (t = ol(t), t !== null && Mm(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function G1(e, t, n, a, o) {
    switch (t) {
      case "focusin":
        return fa = Po(fa, e, t, n, a, o), true;
      case "dragenter":
        return da = Po(da, e, t, n, a, o), true;
      case "mouseover":
        return pa = Po(pa, e, t, n, a, o), true;
      case "pointerover":
        var u = o.pointerId;
        return Ko.set(u, Po(Ko.get(u) || null, e, t, n, a, o)), true;
      case "gotpointercapture":
        return u = o.pointerId, Qo.set(u, Po(Qo.get(u) || null, e, t, n, a, o)), true;
    }
    return false;
  }
  function Nm(e) {
    var t = ll(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = v(n), t !== null) {
            e.blockedOn = t, Qf(e.priority, function() {
              wm(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = g(n), t !== null) {
            e.blockedOn = t, Qf(e.priority, function() {
              wm(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ti(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ss(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        Eu = a, n.target.dispatchEvent(a), Eu = null;
      } else return t = ol(n), t !== null && Mm(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function zm(e, t, n) {
    Ti(e) && n.delete(t);
  }
  function Y1() {
    xs = false, fa !== null && Ti(fa) && (fa = null), da !== null && Ti(da) && (da = null), pa !== null && Ti(pa) && (pa = null), Ko.forEach(zm), Qo.forEach(zm);
  }
  function _i(e, t) {
    e.blockedOn === t && (e.blockedOn = null, xs || (xs = true, l.unstable_scheduleCallback(l.unstable_NormalPriority, Y1)));
  }
  var Ai = null;
  function jm(e) {
    Ai !== e && (Ai = e, l.unstable_scheduleCallback(l.unstable_NormalPriority, function() {
      Ai === e && (Ai = null);
      for (var t = 0; t < e.length; t += 3) {
        var n = e[t], a = e[t + 1], o = e[t + 2];
        if (typeof a != "function") {
          if (Es(a || n) === null) continue;
          break;
        }
        var u = ol(n);
        u !== null && (e.splice(t, 3), t -= 3, Sc(u, { pending: true, data: o, method: n.method, action: a }, a, o));
      }
    }));
  }
  function Yl(e) {
    function t(x) {
      return _i(x, e);
    }
    fa !== null && _i(fa, e), da !== null && _i(da, e), pa !== null && _i(pa, e), Ko.forEach(t), Qo.forEach(t);
    for (var n = 0; n < va.length; n++) {
      var a = va[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < va.length && (n = va[0], n.blockedOn === null); ) Nm(n), n.blockedOn === null && va.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (a = 0; a < n.length; a += 3) {
      var o = n[a], u = n[a + 1], p = o[At] || null;
      if (typeof u == "function") p || jm(n);
      else if (p) {
        var b = null;
        if (u && u.hasAttribute("formAction")) {
          if (o = u, p = u[At] || null) b = p.formAction;
          else if (Es(o) !== null) continue;
        } else b = p.action;
        typeof b == "function" ? n[a + 1] = b : (n.splice(a, 3), a -= 3), jm(n);
      }
    }
  }
  function Um() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({ handler: function() {
        return new Promise(function(p) {
          return o = p;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      o !== null && (o(), o = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, { state: u.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var a = false, o = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        a = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null);
      };
    }
  }
  function Cs(e) {
    this._internalRoot = e;
  }
  Ri.prototype.render = Cs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = It();
    Am(n, a, e, t, null, null);
  }, Ri.prototype.unmount = Cs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Am(e.current, 2, null, e, null, null), ii(), t[al] = null;
    }
  };
  function Ri(e) {
    this._internalRoot = e;
  }
  Ri.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = vu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < va.length && t !== 0 && t < va[n].priority; n++) ;
      va.splice(n, 0, e), n === 0 && Nm(e);
    }
  };
  var Bm = i.version;
  if (Bm !== "19.2.4") throw Error(c(527, Bm, "19.2.4"));
  te.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = m(t), e = e !== null ? S(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var V1 = { bundleType: 0, version: "19.2.4", rendererPackageName: "react-dom", currentDispatcherRef: K, reconcilerVersion: "19.2.4" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mi.isDisabled && Mi.supportsFiber) try {
      Ra = Mi.inject(V1), St = Mi;
    } catch {
    }
  }
  return ko.createRoot = function(e, t) {
    if (!s(e)) throw Error(c(299));
    var n = false, a = "", o = Ip, u = Xp, p = Kp;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = Tm(e, 1, false, null, null, n, a, null, o, u, p, Um), e[al] = t.current, ls(e), new Cs(t);
  }, ko.hydrateRoot = function(e, t, n) {
    if (!s(e)) throw Error(c(299));
    var a = false, o = "", u = Ip, p = Xp, b = Kp, x = null;
    return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.formState !== void 0 && (x = n.formState)), t = Tm(e, 1, true, t, n ?? null, a, o, x, u, p, b, Um), t.context = _m(null), n = t.current, a = It(), a = nl(a), o = Wn(a), o.callback = null, ea(n, o, a), n = a, t.current.lanes = n, Qe(t, n), yn(t), e[al] = t.current, ls(e), new Ri(t);
  }, ko.version = "19.2.4", ko;
}
var Pm;
function uE() {
  if (Pm) return _s.exports;
  Pm = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
    } catch (i) {
      console.error(i);
    }
  }
  return l(), _s.exports = iE(), _s.exports;
}
var cE = uE();
const BR = sf(cE);
var d = tr();
const k = sf(d), ff = nE({ __proto__: null, default: k }, [d]);
var Ms = { exports: {} }, ws = {}, Ds = { exports: {} }, Os = {};
var Zm;
function sE() {
  if (Zm) return Os;
  Zm = 1;
  var l = tr();
  function i(h, A) {
    return h === A && (h !== 0 || 1 / h === 1 / A) || h !== h && A !== A;
  }
  var r = typeof Object.is == "function" ? Object.is : i, c = l.useState, s = l.useEffect, f = l.useLayoutEffect, v = l.useDebugValue;
  function g(h, A) {
    var w = A(), O = c({ inst: { value: w, getSnapshot: A } }), C = O[0].inst, T = O[1];
    return f(function() {
      C.value = w, C.getSnapshot = A, y(C) && T({ inst: C });
    }, [h, w, A]), s(function() {
      return y(C) && T({ inst: C }), h(function() {
        y(C) && T({ inst: C });
      });
    }, [h]), v(w), w;
  }
  function y(h) {
    var A = h.getSnapshot;
    h = h.value;
    try {
      var w = A();
      return !r(h, w);
    } catch {
      return true;
    }
  }
  function m(h, A) {
    return A();
  }
  var S = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : g;
  return Os.useSyncExternalStore = l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : S, Os;
}
var km;
function fE() {
  return km || (km = 1, Ds.exports = sE()), Ds.exports;
}
var $m;
function dE() {
  if ($m) return ws;
  $m = 1;
  var l = tr(), i = fE();
  function r(m, S) {
    return m === S && (m !== 0 || 1 / m === 1 / S) || m !== m && S !== S;
  }
  var c = typeof Object.is == "function" ? Object.is : r, s = i.useSyncExternalStore, f = l.useRef, v = l.useEffect, g = l.useMemo, y = l.useDebugValue;
  return ws.useSyncExternalStoreWithSelector = function(m, S, h, A, w) {
    var O = f(null);
    if (O.current === null) {
      var C = { hasValue: false, value: null };
      O.current = C;
    } else C = O.current;
    O = g(function() {
      function D(J) {
        if (!z) {
          if (z = true, L = J, J = A(J), w !== void 0 && C.hasValue) {
            var V = C.value;
            if (w(V, J)) return X = V;
          }
          return X = J;
        }
        if (V = X, c(L, J)) return V;
        var ae = A(J);
        return w !== void 0 && w(V, ae) ? (L = J, V) : (L = J, X = ae);
      }
      var z = false, L, X, $ = h === void 0 ? null : h;
      return [function() {
        return D(S());
      }, $ === null ? void 0 : function() {
        return D($());
      }];
    }, [S, h, A, w]);
    var T = s(m, O[0], O[1]);
    return v(function() {
      C.hasValue = true, C.value = T;
    }, [T]), y(T), T;
  }, ws;
}
var Jm;
function pE() {
  return Jm || (Jm = 1, Ms.exports = dE()), Ms.exports;
}
var HR = pE(), nr = Ch();
const Th = sf(nr);
var vE = (l, i, r, c, s, f, v, g) => {
  let y = document.documentElement, m = ["light", "dark"];
  function S(w) {
    (Array.isArray(l) ? l : [l]).forEach((O) => {
      let C = O === "class", T = C && f ? s.map((D) => f[D] || D) : s;
      C ? (y.classList.remove(...T), y.classList.add(f && f[w] ? f[w] : w)) : y.setAttribute(O, w);
    }), h(w);
  }
  function h(w) {
    g && m.includes(w) && (y.style.colorScheme = w);
  }
  function A() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (c) S(c);
  else try {
    let w = localStorage.getItem(i) || r, O = v && w === "system" ? A() : w;
    S(O);
  } catch {
  }
}, mE = d.createContext(void 0), hE = { setTheme: (l) => {
}, themes: [] }, LR = () => {
  var l;
  return (l = d.useContext(mE)) != null ? l : hE;
};
d.memo(({ forcedTheme: l, storageKey: i, attribute: r, enableSystem: c, enableColorScheme: s, defaultTheme: f, value: v, themes: g, nonce: y, scriptProps: m }) => {
  let S = JSON.stringify([r, i, f, l, g, v, c, s]).slice(1, -1);
  return d.createElement("script", { ...m, suppressHydrationWarning: true, nonce: typeof window > "u" ? y : "", dangerouslySetInnerHTML: { __html: `(${vE.toString()})(${S})` } });
});
function gE(l) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", i.appendChild(r), r.styleSheet ? r.styleSheet.cssText = l : r.appendChild(document.createTextNode(l));
}
const yE = (l) => {
  switch (l) {
    case "success":
      return EE;
    case "info":
      return CE;
    case "warning":
      return xE;
    case "error":
      return TE;
    default:
      return null;
  }
}, bE = Array(12).fill(0), SE = ({ visible: l, className: i }) => k.createElement("div", { className: ["sonner-loading-wrapper", i].filter(Boolean).join(" "), "data-visible": l }, k.createElement("div", { className: "sonner-spinner" }, bE.map((r, c) => k.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${c}` })))), EE = k.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, k.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), xE = k.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, k.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), CE = k.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, k.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), TE = k.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, k.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), _E = k.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, k.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), k.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), AE = () => {
  const [l, i] = k.useState(document.hidden);
  return k.useEffect(() => {
    const r = () => {
      i(document.hidden);
    };
    return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r);
  }, []), l;
};
let Xs = 1;
class RE {
  constructor() {
    this.subscribe = (i) => (this.subscribers.push(i), () => {
      const r = this.subscribers.indexOf(i);
      this.subscribers.splice(r, 1);
    }), this.publish = (i) => {
      this.subscribers.forEach((r) => r(i));
    }, this.addToast = (i) => {
      this.publish(i), this.toasts = [...this.toasts, i];
    }, this.create = (i) => {
      var r;
      const { message: c, ...s } = i, f = typeof (i == null ? void 0 : i.id) == "number" || ((r = i.id) == null ? void 0 : r.length) > 0 ? i.id : Xs++, v = this.toasts.find((y) => y.id === f), g = i.dismissible === void 0 ? true : i.dismissible;
      return this.dismissedToasts.has(f) && this.dismissedToasts.delete(f), v ? this.toasts = this.toasts.map((y) => y.id === f ? (this.publish({ ...y, ...i, id: f, title: c }), { ...y, ...i, id: f, dismissible: g, title: c }) : y) : this.addToast({ title: c, ...s, dismissible: g, id: f }), f;
    }, this.dismiss = (i) => (i ? (this.dismissedToasts.add(i), requestAnimationFrame(() => this.subscribers.forEach((r) => r({ id: i, dismiss: true })))) : this.toasts.forEach((r) => {
      this.subscribers.forEach((c) => c({ id: r.id, dismiss: true }));
    }), i), this.message = (i, r) => this.create({ ...r, message: i }), this.error = (i, r) => this.create({ ...r, message: i, type: "error" }), this.success = (i, r) => this.create({ ...r, type: "success", message: i }), this.info = (i, r) => this.create({ ...r, type: "info", message: i }), this.warning = (i, r) => this.create({ ...r, type: "warning", message: i }), this.loading = (i, r) => this.create({ ...r, type: "loading", message: i }), this.promise = (i, r) => {
      if (!r) return;
      let c;
      r.loading !== void 0 && (c = this.create({ ...r, promise: i, type: "loading", message: r.loading, description: typeof r.description != "function" ? r.description : void 0 }));
      const s = Promise.resolve(i instanceof Function ? i() : i);
      let f = c !== void 0, v;
      const g = s.then(async (m) => {
        if (v = ["resolve", m], k.isValidElement(m)) f = false, this.create({ id: c, type: "default", message: m });
        else if (wE(m) && !m.ok) {
          f = false;
          const h = typeof r.error == "function" ? await r.error(`HTTP error! status: ${m.status}`) : r.error, A = typeof r.description == "function" ? await r.description(`HTTP error! status: ${m.status}`) : r.description, O = typeof h == "object" && !k.isValidElement(h) ? h : { message: h };
          this.create({ id: c, type: "error", description: A, ...O });
        } else if (m instanceof Error) {
          f = false;
          const h = typeof r.error == "function" ? await r.error(m) : r.error, A = typeof r.description == "function" ? await r.description(m) : r.description, O = typeof h == "object" && !k.isValidElement(h) ? h : { message: h };
          this.create({ id: c, type: "error", description: A, ...O });
        } else if (r.success !== void 0) {
          f = false;
          const h = typeof r.success == "function" ? await r.success(m) : r.success, A = typeof r.description == "function" ? await r.description(m) : r.description, O = typeof h == "object" && !k.isValidElement(h) ? h : { message: h };
          this.create({ id: c, type: "success", description: A, ...O });
        }
      }).catch(async (m) => {
        if (v = ["reject", m], r.error !== void 0) {
          f = false;
          const S = typeof r.error == "function" ? await r.error(m) : r.error, h = typeof r.description == "function" ? await r.description(m) : r.description, w = typeof S == "object" && !k.isValidElement(S) ? S : { message: S };
          this.create({ id: c, type: "error", description: h, ...w });
        }
      }).finally(() => {
        f && (this.dismiss(c), c = void 0), r.finally == null || r.finally.call(r);
      }), y = () => new Promise((m, S) => g.then(() => v[0] === "reject" ? S(v[1]) : m(v[1])).catch(S));
      return typeof c != "string" && typeof c != "number" ? { unwrap: y } : Object.assign(c, { unwrap: y });
    }, this.custom = (i, r) => {
      const c = (r == null ? void 0 : r.id) || Xs++;
      return this.create({ jsx: i(c), id: c, ...r }), c;
    }, this.getActiveToasts = () => this.toasts.filter((i) => !this.dismissedToasts.has(i.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const zt = new RE(), ME = (l, i) => {
  const r = (i == null ? void 0 : i.id) || Xs++;
  return zt.addToast({ title: l, ...i, id: r }), r;
}, wE = (l) => l && typeof l == "object" && "ok" in l && typeof l.ok == "boolean" && "status" in l && typeof l.status == "number", DE = ME, OE = () => zt.toasts, NE = () => zt.getActiveToasts(), GR = Object.assign(DE, { success: zt.success, info: zt.info, warning: zt.warning, error: zt.error, custom: zt.custom, message: zt.message, promise: zt.promise, dismiss: zt.dismiss, loading: zt.loading }, { getHistory: OE, getToasts: NE });
gE("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function wi(l) {
  return l.label !== void 0;
}
const zE = 3, jE = "24px", UE = "16px", Fm = 4e3, BE = 356, HE = 14, LE = 45, GE = 200;
function bn(...l) {
  return l.filter(Boolean).join(" ");
}
function YE(l) {
  const [i, r] = l.split("-"), c = [];
  return i && c.push(i), r && c.push(r), c;
}
const VE = (l) => {
  var i, r, c, s, f, v, g, y, m;
  const { invert: S, toast: h, unstyled: A, interacting: w, setHeights: O, visibleToasts: C, heights: T, index: D, toasts: z, expanded: L, removeToast: X, defaultRichColors: $, closeButton: J, style: V, cancelButtonStyle: ae, actionButtonStyle: ge, className: Ee = "", descriptionClassName: me = "", duration: ye, position: pe, gap: xe, expandByDefault: Te, classNames: K, icons: te, closeButtonAriaLabel: oe = "Close toast" } = l, [ne, ve] = k.useState(null), [_, R] = k.useState(null), [B, I] = k.useState(false), [Q, F] = k.useState(false), [q, ee] = k.useState(false), [ie, be] = k.useState(false), [De, ze] = k.useState(false), [rt, tt] = k.useState(0), [En, dn] = k.useState(0), tn = k.useRef(h.duration || ye || Fm), Wl = k.useRef(null), Bt = k.useRef(null), eo = D === 0, to = D + 1 <= C, yt = h.type, In = h.dismissible !== false, bt = h.className || "", du = h.descriptionClassName || "", _a = k.useMemo(() => T.findIndex((fe) => fe.toastId === h.id) || 0, [T, h.id]), mr = k.useMemo(() => {
    var fe;
    return (fe = h.closeButton) != null ? fe : J;
  }, [h.closeButton, J]), Aa = k.useMemo(() => h.duration || ye || Fm, [h.duration, ye]), no = k.useRef(0), xn = k.useRef(0), hr = k.useRef(0), Xn = k.useRef(null), [Ra, St] = pe.split("-"), nn = k.useMemo(() => T.reduce((fe, Ie, at) => at >= _a ? fe : fe + Ie.height, 0), [T, _a]), pt = AE(), pu = h.invert || S, ao = yt === "loading";
  xn.current = k.useMemo(() => _a * xe + nn, [_a, nn]), k.useEffect(() => {
    tn.current = Aa;
  }, [Aa]), k.useEffect(() => {
    I(true);
  }, []), k.useEffect(() => {
    const fe = Bt.current;
    if (fe) {
      const Ie = fe.getBoundingClientRect().height;
      return dn(Ie), O((at) => [{ toastId: h.id, height: Ie, position: h.position }, ...at]), () => O((at) => at.filter((vt) => vt.toastId !== h.id));
    }
  }, [O, h.id]), k.useLayoutEffect(() => {
    if (!B) return;
    const fe = Bt.current, Ie = fe.style.height;
    fe.style.height = "auto";
    const at = fe.getBoundingClientRect().height;
    fe.style.height = Ie, dn(at), O((vt) => vt.find((Qe) => Qe.toastId === h.id) ? vt.map((Qe) => Qe.toastId === h.id ? { ...Qe, height: at } : Qe) : [{ toastId: h.id, height: at, position: h.position }, ...vt]);
  }, [B, h.title, h.description, O, h.id, h.jsx, h.action, h.cancel]);
  const pn = k.useCallback(() => {
    F(true), tt(xn.current), O((fe) => fe.filter((Ie) => Ie.toastId !== h.id)), setTimeout(() => {
      X(h);
    }, GE);
  }, [h, X, O, xn]);
  k.useEffect(() => {
    if (h.promise && yt === "loading" || h.duration === 1 / 0 || h.type === "loading") return;
    let fe;
    return L || w || pt ? (() => {
      if (hr.current < no.current) {
        const vt = (/* @__PURE__ */ new Date()).getTime() - no.current;
        tn.current = tn.current - vt;
      }
      hr.current = (/* @__PURE__ */ new Date()).getTime();
    })() : tn.current !== 1 / 0 && (no.current = (/* @__PURE__ */ new Date()).getTime(), fe = setTimeout(() => {
      h.onAutoClose == null || h.onAutoClose.call(h, h), pn();
    }, tn.current)), () => clearTimeout(fe);
  }, [L, w, h, yt, pt, pn]), k.useEffect(() => {
    h.delete && (pn(), h.onDismiss == null || h.onDismiss.call(h, h));
  }, [pn, h.delete]);
  function el() {
    var fe;
    if (te == null ? void 0 : te.loading) {
      var Ie;
      return k.createElement("div", { className: bn(K == null ? void 0 : K.loader, h == null || (Ie = h.classNames) == null ? void 0 : Ie.loader, "sonner-loader"), "data-visible": yt === "loading" }, te.loading);
    }
    return k.createElement(SE, { className: bn(K == null ? void 0 : K.loader, h == null || (fe = h.classNames) == null ? void 0 : fe.loader), visible: yt === "loading" });
  }
  const tl = h.icon || (te == null ? void 0 : te[yt]) || yE(yt);
  var Ma, vn;
  return k.createElement("li", { tabIndex: 0, ref: Bt, className: bn(Ee, bt, K == null ? void 0 : K.toast, h == null || (i = h.classNames) == null ? void 0 : i.toast, K == null ? void 0 : K.default, K == null ? void 0 : K[yt], h == null || (r = h.classNames) == null ? void 0 : r[yt]), "data-sonner-toast": "", "data-rich-colors": (Ma = h.richColors) != null ? Ma : $, "data-styled": !(h.jsx || h.unstyled || A), "data-mounted": B, "data-promise": !!h.promise, "data-swiped": De, "data-removed": Q, "data-visible": to, "data-y-position": Ra, "data-x-position": St, "data-index": D, "data-front": eo, "data-swiping": q, "data-dismissible": In, "data-type": yt, "data-invert": pu, "data-swipe-out": ie, "data-swipe-direction": _, "data-expanded": !!(L || Te && B), "data-testid": h.testId, style: { "--index": D, "--toasts-before": D, "--z-index": z.length - D, "--offset": `${Q ? rt : xn.current}px`, "--initial-height": Te ? "auto" : `${En}px`, ...V, ...h.style }, onDragEnd: () => {
    ee(false), ve(null), Xn.current = null;
  }, onPointerDown: (fe) => {
    fe.button !== 2 && (ao || !In || (Wl.current = /* @__PURE__ */ new Date(), tt(xn.current), fe.target.setPointerCapture(fe.pointerId), fe.target.tagName !== "BUTTON" && (ee(true), Xn.current = { x: fe.clientX, y: fe.clientY })));
  }, onPointerUp: () => {
    var fe, Ie, at;
    if (ie || !In) return;
    Xn.current = null;
    const vt = Number(((fe = Bt.current) == null ? void 0 : fe.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), Kn = Number(((Ie = Bt.current) == null ? void 0 : Ie.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Qe = (/* @__PURE__ */ new Date()).getTime() - ((at = Wl.current) == null ? void 0 : at.getTime()), Ct = ne === "x" ? vt : Kn, wa = Math.abs(Ct) / Qe;
    if (Math.abs(Ct) >= LE || wa > 0.11) {
      tt(xn.current), h.onDismiss == null || h.onDismiss.call(h, h), R(ne === "x" ? vt > 0 ? "right" : "left" : Kn > 0 ? "down" : "up"), pn(), be(true);
      return;
    } else {
      var Tt, _t;
      (Tt = Bt.current) == null || Tt.style.setProperty("--swipe-amount-x", "0px"), (_t = Bt.current) == null || _t.style.setProperty("--swipe-amount-y", "0px");
    }
    ze(false), ee(false), ve(null);
  }, onPointerMove: (fe) => {
    var Ie, at, vt;
    if (!Xn.current || !In || ((Ie = window.getSelection()) == null ? void 0 : Ie.toString().length) > 0) return;
    const Qe = fe.clientY - Xn.current.y, Ct = fe.clientX - Xn.current.x;
    var wa;
    const Tt = (wa = l.swipeDirections) != null ? wa : YE(pe);
    !ne && (Math.abs(Ct) > 1 || Math.abs(Qe) > 1) && ve(Math.abs(Ct) > Math.abs(Qe) ? "x" : "y");
    let _t = { x: 0, y: 0 };
    const nl = (an) => 1 / (1.5 + Math.abs(an) / 20);
    if (ne === "y") {
      if (Tt.includes("top") || Tt.includes("bottom")) if (Tt.includes("top") && Qe < 0 || Tt.includes("bottom") && Qe > 0) _t.y = Qe;
      else {
        const an = Qe * nl(Qe);
        _t.y = Math.abs(an) < Math.abs(Qe) ? an : Qe;
      }
    } else if (ne === "x" && (Tt.includes("left") || Tt.includes("right"))) if (Tt.includes("left") && Ct < 0 || Tt.includes("right") && Ct > 0) _t.x = Ct;
    else {
      const an = Ct * nl(Ct);
      _t.x = Math.abs(an) < Math.abs(Ct) ? an : Ct;
    }
    (Math.abs(_t.x) > 0 || Math.abs(_t.y) > 0) && ze(true), (at = Bt.current) == null || at.style.setProperty("--swipe-amount-x", `${_t.x}px`), (vt = Bt.current) == null || vt.style.setProperty("--swipe-amount-y", `${_t.y}px`);
  } }, mr && !h.jsx && yt !== "loading" ? k.createElement("button", { "aria-label": oe, "data-disabled": ao, "data-close-button": true, onClick: ao || !In ? () => {
  } : () => {
    pn(), h.onDismiss == null || h.onDismiss.call(h, h);
  }, className: bn(K == null ? void 0 : K.closeButton, h == null || (c = h.classNames) == null ? void 0 : c.closeButton) }, (vn = te == null ? void 0 : te.close) != null ? vn : _E) : null, (yt || h.icon || h.promise) && h.icon !== null && ((te == null ? void 0 : te[yt]) !== null || h.icon) ? k.createElement("div", { "data-icon": "", className: bn(K == null ? void 0 : K.icon, h == null || (s = h.classNames) == null ? void 0 : s.icon) }, h.promise || h.type === "loading" && !h.icon ? h.icon || el() : null, h.type !== "loading" ? tl : null) : null, k.createElement("div", { "data-content": "", className: bn(K == null ? void 0 : K.content, h == null || (f = h.classNames) == null ? void 0 : f.content) }, k.createElement("div", { "data-title": "", className: bn(K == null ? void 0 : K.title, h == null || (v = h.classNames) == null ? void 0 : v.title) }, h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title), h.description ? k.createElement("div", { "data-description": "", className: bn(me, du, K == null ? void 0 : K.description, h == null || (g = h.classNames) == null ? void 0 : g.description) }, typeof h.description == "function" ? h.description() : h.description) : null), k.isValidElement(h.cancel) ? h.cancel : h.cancel && wi(h.cancel) ? k.createElement("button", { "data-button": true, "data-cancel": true, style: h.cancelButtonStyle || ae, onClick: (fe) => {
    wi(h.cancel) && In && (h.cancel.onClick == null || h.cancel.onClick.call(h.cancel, fe), pn());
  }, className: bn(K == null ? void 0 : K.cancelButton, h == null || (y = h.classNames) == null ? void 0 : y.cancelButton) }, h.cancel.label) : null, k.isValidElement(h.action) ? h.action : h.action && wi(h.action) ? k.createElement("button", { "data-button": true, "data-action": true, style: h.actionButtonStyle || ge, onClick: (fe) => {
    wi(h.action) && (h.action.onClick == null || h.action.onClick.call(h.action, fe), !fe.defaultPrevented && pn());
  }, className: bn(K == null ? void 0 : K.actionButton, h == null || (m = h.classNames) == null ? void 0 : m.actionButton) }, h.action.label) : null);
};
function Wm() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const l = document.documentElement.getAttribute("dir");
  return l === "auto" || !l ? window.getComputedStyle(document.documentElement).direction : l;
}
function qE(l, i) {
  const r = {};
  return [l, i].forEach((c, s) => {
    const f = s === 1, v = f ? "--mobile-offset" : "--offset", g = f ? UE : jE;
    function y(m) {
      ["top", "right", "bottom", "left"].forEach((S) => {
        r[`${v}-${S}`] = typeof m == "number" ? `${m}px` : m;
      });
    }
    typeof c == "number" || typeof c == "string" ? y(c) : typeof c == "object" ? ["top", "right", "bottom", "left"].forEach((m) => {
      c[m] === void 0 ? r[`${v}-${m}`] = g : r[`${v}-${m}`] = typeof c[m] == "number" ? `${c[m]}px` : c[m];
    }) : y(g);
  }), r;
}
const YR = k.forwardRef(function(i, r) {
  const { id: c, invert: s, position: f = "bottom-right", hotkey: v = ["altKey", "KeyT"], expand: g, closeButton: y, className: m, offset: S, mobileOffset: h, theme: A = "light", richColors: w, duration: O, style: C, visibleToasts: T = zE, toastOptions: D, dir: z = Wm(), gap: L = HE, icons: X, containerAriaLabel: $ = "Notifications" } = i, [J, V] = k.useState([]), ae = k.useMemo(() => c ? J.filter((B) => B.toasterId === c) : J.filter((B) => !B.toasterId), [J, c]), ge = k.useMemo(() => Array.from(new Set([f].concat(ae.filter((B) => B.position).map((B) => B.position)))), [ae, f]), [Ee, me] = k.useState([]), [ye, pe] = k.useState(false), [xe, Te] = k.useState(false), [K, te] = k.useState(A !== "system" ? A : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), oe = k.useRef(null), ne = v.join("+").replace(/Key/g, "").replace(/Digit/g, ""), ve = k.useRef(null), _ = k.useRef(false), R = k.useCallback((B) => {
    V((I) => {
      var Q;
      return (Q = I.find((F) => F.id === B.id)) != null && Q.delete || zt.dismiss(B.id), I.filter(({ id: F }) => F !== B.id);
    });
  }, []);
  return k.useEffect(() => zt.subscribe((B) => {
    if (B.dismiss) {
      requestAnimationFrame(() => {
        V((I) => I.map((Q) => Q.id === B.id ? { ...Q, delete: true } : Q));
      });
      return;
    }
    setTimeout(() => {
      Th.flushSync(() => {
        V((I) => {
          const Q = I.findIndex((F) => F.id === B.id);
          return Q !== -1 ? [...I.slice(0, Q), { ...I[Q], ...B }, ...I.slice(Q + 1)] : [B, ...I];
        });
      });
    });
  }), [J]), k.useEffect(() => {
    if (A !== "system") {
      te(A);
      return;
    }
    if (A === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? te("dark") : te("light")), typeof window > "u") return;
    const B = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      B.addEventListener("change", ({ matches: I }) => {
        te(I ? "dark" : "light");
      });
    } catch {
      B.addListener(({ matches: Q }) => {
        try {
          te(Q ? "dark" : "light");
        } catch (F) {
          console.error(F);
        }
      });
    }
  }, [A]), k.useEffect(() => {
    J.length <= 1 && pe(false);
  }, [J]), k.useEffect(() => {
    const B = (I) => {
      var Q;
      if (v.every((ee) => I[ee] || I.code === ee)) {
        var q;
        pe(true), (q = oe.current) == null || q.focus();
      }
      I.code === "Escape" && (document.activeElement === oe.current || (Q = oe.current) != null && Q.contains(document.activeElement)) && pe(false);
    };
    return document.addEventListener("keydown", B), () => document.removeEventListener("keydown", B);
  }, [v]), k.useEffect(() => {
    if (oe.current) return () => {
      ve.current && (ve.current.focus({ preventScroll: true }), ve.current = null, _.current = false);
    };
  }, [oe.current]), k.createElement("section", { ref: r, "aria-label": `${$} ${ne}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: true }, ge.map((B, I) => {
    var Q;
    const [F, q] = B.split("-");
    return ae.length ? k.createElement("ol", { key: B, dir: z === "auto" ? Wm() : z, tabIndex: -1, ref: oe, className: m, "data-sonner-toaster": true, "data-sonner-theme": K, "data-y-position": F, "data-x-position": q, style: { "--front-toast-height": `${((Q = Ee[0]) == null ? void 0 : Q.height) || 0}px`, "--width": `${BE}px`, "--gap": `${L}px`, ...C, ...qE(S, h) }, onBlur: (ee) => {
      _.current && !ee.currentTarget.contains(ee.relatedTarget) && (_.current = false, ve.current && (ve.current.focus({ preventScroll: true }), ve.current = null));
    }, onFocus: (ee) => {
      ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || _.current || (_.current = true, ve.current = ee.relatedTarget);
    }, onMouseEnter: () => pe(true), onMouseMove: () => pe(true), onMouseLeave: () => {
      xe || pe(false);
    }, onDragEnd: () => pe(false), onPointerDown: (ee) => {
      ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || Te(true);
    }, onPointerUp: () => Te(false) }, ae.filter((ee) => !ee.position && I === 0 || ee.position === B).map((ee, ie) => {
      var be, De;
      return k.createElement(VE, { key: ee.id, icons: X, index: ie, toast: ee, defaultRichColors: w, duration: (be = D == null ? void 0 : D.duration) != null ? be : O, className: D == null ? void 0 : D.className, descriptionClassName: D == null ? void 0 : D.descriptionClassName, invert: s, visibleToasts: T, closeButton: (De = D == null ? void 0 : D.closeButton) != null ? De : y, interacting: xe, position: B, style: D == null ? void 0 : D.style, unstyled: D == null ? void 0 : D.unstyled, classNames: D == null ? void 0 : D.classNames, cancelButtonStyle: D == null ? void 0 : D.cancelButtonStyle, actionButtonStyle: D == null ? void 0 : D.actionButtonStyle, closeButtonAriaLabel: D == null ? void 0 : D.closeButtonAriaLabel, removeToast: R, toasts: ae.filter((ze) => ze.position == ee.position), heights: Ee.filter((ze) => ze.position == ee.position), setHeights: me, expandByDefault: g, gap: L, expanded: ye, swipeDirections: i.swipeDirections });
    })) : null;
  }));
}), eh = (l) => {
  let i;
  const r = /* @__PURE__ */ new Set(), c = (m, S) => {
    const h = typeof m == "function" ? m(i) : m;
    if (!Object.is(h, i)) {
      const A = i;
      i = S ?? (typeof h != "object" || h === null) ? h : Object.assign({}, i, h), r.forEach((w) => w(i, A));
    }
  }, s = () => i, g = { setState: c, getState: s, getInitialState: () => y, subscribe: (m) => (r.add(m), () => r.delete(m)) }, y = i = l(c, s, g);
  return g;
}, IE = ((l) => l ? eh(l) : eh), XE = (l) => l;
function KE(l, i = XE) {
  const r = k.useSyncExternalStore(l.subscribe, k.useCallback(() => i(l.getState()), [l, i]), k.useCallback(() => i(l.getInitialState()), [l, i]));
  return k.useDebugValue(r), r;
}
const QE = (l) => {
  const i = IE(l), r = (c) => KE(i, c);
  return Object.assign(r, i), r;
}, VR = ((l) => QE);
function PE(l, i) {
  let r;
  try {
    r = l();
  } catch {
    return;
  }
  return { getItem: (s) => {
    var f;
    const v = (y) => y === null ? null : JSON.parse(y, void 0), g = (f = r.getItem(s)) != null ? f : null;
    return g instanceof Promise ? g.then(v) : v(g);
  }, setItem: (s, f) => r.setItem(s, JSON.stringify(f, void 0)), removeItem: (s) => r.removeItem(s) };
}
const Ks = (l) => (i) => {
  try {
    const r = l(i);
    return r instanceof Promise ? r : { then(c) {
      return Ks(c)(r);
    }, catch(c) {
      return this;
    } };
  } catch (r) {
    return { then(c) {
      return this;
    }, catch(c) {
      return Ks(c)(r);
    } };
  }
}, ZE = (l, i) => (r, c, s) => {
  let f = { storage: PE(() => localStorage), partialize: (T) => T, version: 0, merge: (T, D) => ({ ...D, ...T }), ...i }, v = false, g = 0;
  const y = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set();
  let S = f.storage;
  if (!S) return l((...T) => {
    console.warn(`[zustand persist middleware] Unable to update item '${f.name}', the given storage is currently unavailable.`), r(...T);
  }, c, s);
  const h = () => {
    const T = f.partialize({ ...c() });
    return S.setItem(f.name, { state: T, version: f.version });
  }, A = s.setState;
  s.setState = (T, D) => (A(T, D), h());
  const w = l((...T) => (r(...T), h()), c, s);
  s.getInitialState = () => w;
  let O;
  const C = () => {
    var T, D;
    if (!S) return;
    const z = ++g;
    v = false, y.forEach((X) => {
      var $;
      return X(($ = c()) != null ? $ : w);
    });
    const L = ((D = f.onRehydrateStorage) == null ? void 0 : D.call(f, (T = c()) != null ? T : w)) || void 0;
    return Ks(S.getItem.bind(S))(f.name).then((X) => {
      if (X) if (typeof X.version == "number" && X.version !== f.version) {
        if (f.migrate) {
          const $ = f.migrate(X.state, X.version);
          return $ instanceof Promise ? $.then((J) => [true, J]) : [true, $];
        }
        console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
      } else return [false, X.state];
      return [false, void 0];
    }).then((X) => {
      var $;
      if (z !== g) return;
      const [J, V] = X;
      if (O = f.merge(V, ($ = c()) != null ? $ : w), r(O, true), J) return h();
    }).then(() => {
      z === g && (L == null ? void 0 : L(O, void 0), O = c(), v = true, m.forEach((X) => X(O)));
    }).catch((X) => {
      z === g && (L == null ? void 0 : L(void 0, X));
    });
  };
  return s.persist = { setOptions: (T) => {
    f = { ...f, ...T }, T.storage && (S = T.storage);
  }, clearStorage: () => {
    S == null ? void 0 : S.removeItem(f.name);
  }, getOptions: () => f, rehydrate: () => C(), hasHydrated: () => v, onHydrate: (T) => (y.add(T), () => {
    y.delete(T);
  }), onFinishHydration: (T) => (m.add(T), () => {
    m.delete(T);
  }) }, f.skipHydration || C(), O || w;
}, qR = ZE;
function th(l, i) {
  if (typeof l == "function") return l(i);
  l != null && (l.current = i);
}
function Sn(...l) {
  return (i) => {
    let r = false;
    const c = l.map((s) => {
      const f = th(s, i);
      return !r && typeof f == "function" && (r = true), f;
    });
    if (r) return () => {
      for (let s = 0; s < c.length; s++) {
        const f = c[s];
        typeof f == "function" ? f() : th(l[s], null);
      }
    };
  };
}
function Ce(...l) {
  return d.useCallback(Sn(...l), l);
}
function kE(l, i) {
  const r = d.createContext(i), c = (f) => {
    const { children: v, ...g } = f, y = d.useMemo(() => g, Object.values(g));
    return E.jsx(r.Provider, { value: y, children: v });
  };
  c.displayName = l + "Provider";
  function s(f) {
    const v = d.useContext(r);
    if (v) return v;
    if (i !== void 0) return i;
    throw new Error(`\`${f}\` must be used within \`${l}\``);
  }
  return [c, s];
}
function ht(l, i = []) {
  let r = [];
  function c(f, v) {
    const g = d.createContext(v), y = r.length;
    r = [...r, v];
    const m = (h) => {
      var _a;
      const { scope: A, children: w, ...O } = h, C = ((_a = A == null ? void 0 : A[l]) == null ? void 0 : _a[y]) || g, T = d.useMemo(() => O, Object.values(O));
      return E.jsx(C.Provider, { value: T, children: w });
    };
    m.displayName = f + "Provider";
    function S(h, A) {
      var _a;
      const w = ((_a = A == null ? void 0 : A[l]) == null ? void 0 : _a[y]) || g, O = d.useContext(w);
      if (O) return O;
      if (v !== void 0) return v;
      throw new Error(`\`${h}\` must be used within \`${f}\``);
    }
    return [m, S];
  }
  const s = () => {
    const f = r.map((v) => d.createContext(v));
    return function(g) {
      const y = (g == null ? void 0 : g[l]) || f;
      return d.useMemo(() => ({ [`__scope${l}`]: { ...g, [l]: y } }), [g, y]);
    };
  };
  return s.scopeName = l, [c, $E(s, ...i)];
}
function $E(...l) {
  const i = l[0];
  if (l.length === 1) return i;
  const r = () => {
    const c = l.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function(f) {
      const v = c.reduce((g, { useScope: y, scopeName: m }) => {
        const h = y(f)[`__scope${m}`];
        return { ...g, ...h };
      }, {});
      return d.useMemo(() => ({ [`__scope${i.scopeName}`]: v }), [v]);
    };
  };
  return r.scopeName = i.scopeName, r;
}
function Pa(l) {
  const i = JE(l), r = d.forwardRef((c, s) => {
    const { children: f, ...v } = c, g = d.Children.toArray(f), y = g.find(FE);
    if (y) {
      const m = y.props.children, S = g.map((h) => h === y ? d.Children.count(m) > 1 ? d.Children.only(null) : d.isValidElement(m) ? m.props.children : null : h);
      return E.jsx(i, { ...v, ref: s, children: d.isValidElement(m) ? d.cloneElement(m, void 0, S) : null });
    }
    return E.jsx(i, { ...v, ref: s, children: f });
  });
  return r.displayName = `${l}.Slot`, r;
}
function JE(l) {
  const i = d.forwardRef((r, c) => {
    const { children: s, ...f } = r;
    if (d.isValidElement(s)) {
      const v = ex(s), g = WE(f, s.props);
      return s.type !== d.Fragment && (g.ref = c ? Sn(c, v) : v), d.cloneElement(s, g);
    }
    return d.Children.count(s) > 1 ? d.Children.only(null) : null;
  });
  return i.displayName = `${l}.SlotClone`, i;
}
var _h = /* @__PURE__ */ Symbol("radix.slottable");
function Ah(l) {
  const i = ({ children: r }) => E.jsx(E.Fragment, { children: r });
  return i.displayName = `${l}.Slottable`, i.__radixId = _h, i;
}
function FE(l) {
  return d.isValidElement(l) && typeof l.type == "function" && "__radixId" in l.type && l.type.__radixId === _h;
}
function WE(l, i) {
  const r = { ...i };
  for (const c in i) {
    const s = l[c], f = i[c];
    /^on[A-Z]/.test(c) ? s && f ? r[c] = (...g) => {
      const y = f(...g);
      return s(...g), y;
    } : s && (r[c] = s) : c === "style" ? r[c] = { ...s, ...f } : c === "className" && (r[c] = [s, f].filter(Boolean).join(" "));
  }
  return { ...l, ...r };
}
function ex(l) {
  var _a, _b2;
  let i = (_a = Object.getOwnPropertyDescriptor(l.props, "ref")) == null ? void 0 : _a.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? l.ref : (i = (_b2 = Object.getOwnPropertyDescriptor(l, "ref")) == null ? void 0 : _b2.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? l.props.ref : l.props.ref || l.ref);
}
var tx = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], ce = tx.reduce((l, i) => {
  const r = Pa(`Primitive.${i}`), c = d.forwardRef((s, f) => {
    const { asChild: v, ...g } = s, y = v ? r : i;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), E.jsx(y, { ...g, ref: f });
  });
  return c.displayName = `Primitive.${i}`, { ...l, [i]: c };
}, {});
function Rh(l, i) {
  l && nr.flushSync(() => l.dispatchEvent(i));
}
function cn(l) {
  const i = d.useRef(l);
  return d.useEffect(() => {
    i.current = l;
  }), d.useMemo(() => (...r) => {
    var _a;
    return (_a = i.current) == null ? void 0 : _a.call(i, ...r);
  }, []);
}
function nx(l, i = globalThis == null ? void 0 : globalThis.document) {
  const r = cn(l);
  d.useEffect(() => {
    const c = (s) => {
      s.key === "Escape" && r(s);
    };
    return i.addEventListener("keydown", c, { capture: true }), () => i.removeEventListener("keydown", c, { capture: true });
  }, [r, i]);
}
var ax = "DismissableLayer", Qs = "dismissableLayer.update", lx = "dismissableLayer.pointerDownOutside", ox = "dismissableLayer.focusOutside", nh, Mh = d.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), kl = d.forwardRef((l, i) => {
  const { disableOutsidePointerEvents: r = false, onEscapeKeyDown: c, onPointerDownOutside: s, onFocusOutside: f, onInteractOutside: v, onDismiss: g, ...y } = l, m = d.useContext(Mh), [S, h] = d.useState(null), A = (S == null ? void 0 : S.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = d.useState({}), O = Ce(i, (V) => h(V)), C = Array.from(m.layers), [T] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), D = C.indexOf(T), z = S ? C.indexOf(S) : -1, L = m.layersWithOutsidePointerEventsDisabled.size > 0, X = z >= D, $ = ux((V) => {
    const ae = V.target, ge = [...m.branches].some((Ee) => Ee.contains(ae));
    !X || ge || (s == null ? void 0 : s(V), v == null ? void 0 : v(V), V.defaultPrevented || (g == null ? void 0 : g()));
  }, A), J = cx((V) => {
    const ae = V.target;
    [...m.branches].some((Ee) => Ee.contains(ae)) || (f == null ? void 0 : f(V), v == null ? void 0 : v(V), V.defaultPrevented || (g == null ? void 0 : g()));
  }, A);
  return nx((V) => {
    z === m.layers.size - 1 && (c == null ? void 0 : c(V), !V.defaultPrevented && g && (V.preventDefault(), g()));
  }, A), d.useEffect(() => {
    if (S) return r && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (nh = A.body.style.pointerEvents, A.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(S)), m.layers.add(S), ah(), () => {
      r && m.layersWithOutsidePointerEventsDisabled.size === 1 && (A.body.style.pointerEvents = nh);
    };
  }, [S, A, r, m]), d.useEffect(() => () => {
    S && (m.layers.delete(S), m.layersWithOutsidePointerEventsDisabled.delete(S), ah());
  }, [S, m]), d.useEffect(() => {
    const V = () => w({});
    return document.addEventListener(Qs, V), () => document.removeEventListener(Qs, V);
  }, []), E.jsx(ce.div, { ...y, ref: O, style: { pointerEvents: L ? X ? "auto" : "none" : void 0, ...l.style }, onFocusCapture: W(l.onFocusCapture, J.onFocusCapture), onBlurCapture: W(l.onBlurCapture, J.onBlurCapture), onPointerDownCapture: W(l.onPointerDownCapture, $.onPointerDownCapture) });
});
kl.displayName = ax;
var rx = "DismissableLayerBranch", ix = d.forwardRef((l, i) => {
  const r = d.useContext(Mh), c = d.useRef(null), s = Ce(i, c);
  return d.useEffect(() => {
    const f = c.current;
    if (f) return r.branches.add(f), () => {
      r.branches.delete(f);
    };
  }, [r.branches]), E.jsx(ce.div, { ...l, ref: s });
});
ix.displayName = rx;
function ux(l, i = globalThis == null ? void 0 : globalThis.document) {
  const r = cn(l), c = d.useRef(false), s = d.useRef(() => {
  });
  return d.useEffect(() => {
    const f = (g) => {
      if (g.target && !c.current) {
        let y = function() {
          wh(lx, r, m, { discrete: true });
        };
        const m = { originalEvent: g };
        g.pointerType === "touch" ? (i.removeEventListener("click", s.current), s.current = y, i.addEventListener("click", s.current, { once: true })) : y();
      } else i.removeEventListener("click", s.current);
      c.current = false;
    }, v = window.setTimeout(() => {
      i.addEventListener("pointerdown", f);
    }, 0);
    return () => {
      window.clearTimeout(v), i.removeEventListener("pointerdown", f), i.removeEventListener("click", s.current);
    };
  }, [i, r]), { onPointerDownCapture: () => c.current = true };
}
function cx(l, i = globalThis == null ? void 0 : globalThis.document) {
  const r = cn(l), c = d.useRef(false);
  return d.useEffect(() => {
    const s = (f) => {
      f.target && !c.current && wh(ox, r, { originalEvent: f }, { discrete: false });
    };
    return i.addEventListener("focusin", s), () => i.removeEventListener("focusin", s);
  }, [i, r]), { onFocusCapture: () => c.current = true, onBlurCapture: () => c.current = false };
}
function ah() {
  const l = new CustomEvent(Qs);
  document.dispatchEvent(l);
}
function wh(l, i, r, { discrete: c }) {
  const s = r.originalEvent.target, f = new CustomEvent(l, { bubbles: false, cancelable: true, detail: r });
  i && s.addEventListener(l, i, { once: true }), c ? Rh(s, f) : s.dispatchEvent(f);
}
var dt = (globalThis == null ? void 0 : globalThis.document) ? d.useLayoutEffect : () => {
}, sx = ff[" useId ".trim().toString()] || (() => {
}), fx = 0;
function Ke(l) {
  const [i, r] = d.useState(sx());
  return dt(() => {
    r((c) => c ?? String(fx++));
  }, [l]), l || (i ? `radix-${i}` : "");
}
var dx = typeof document < "u", px = function() {
}, zi = dx ? d.useLayoutEffect : px;
function Bi(l, i) {
  if (l === i) return true;
  if (typeof l != typeof i) return false;
  if (typeof l == "function" && l.toString() === i.toString()) return true;
  let r, c, s;
  if (l && i && typeof l == "object") {
    if (Array.isArray(l)) {
      if (r = l.length, r !== i.length) return false;
      for (c = r; c-- !== 0; ) if (!Bi(l[c], i[c])) return false;
      return true;
    }
    if (s = Object.keys(l), r = s.length, r !== Object.keys(i).length) return false;
    for (c = r; c-- !== 0; ) if (!{}.hasOwnProperty.call(i, s[c])) return false;
    for (c = r; c-- !== 0; ) {
      const f = s[c];
      if (!(f === "_owner" && l.$$typeof) && !Bi(l[f], i[f])) return false;
    }
    return true;
  }
  return l !== l && i !== i;
}
function Dh(l) {
  return typeof window > "u" ? 1 : (l.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function lh(l, i) {
  const r = Dh(l);
  return Math.round(i * r) / r;
}
function Ns(l) {
  const i = d.useRef(l);
  return zi(() => {
    i.current = l;
  }), i;
}
function vx(l) {
  l === void 0 && (l = {});
  const { placement: i = "bottom", strategy: r = "absolute", middleware: c = [], platform: s, elements: { reference: f, floating: v } = {}, transform: g = true, whileElementsMounted: y, open: m } = l, [S, h] = d.useState({ x: 0, y: 0, strategy: r, placement: i, middlewareData: {}, isPositioned: false }), [A, w] = d.useState(c);
  Bi(A, c) || w(c);
  const [O, C] = d.useState(null), [T, D] = d.useState(null), z = d.useCallback((oe) => {
    oe !== J.current && (J.current = oe, C(oe));
  }, []), L = d.useCallback((oe) => {
    oe !== V.current && (V.current = oe, D(oe));
  }, []), X = f || O, $ = v || T, J = d.useRef(null), V = d.useRef(null), ae = d.useRef(S), ge = y != null, Ee = Ns(y), me = Ns(s), ye = Ns(m), pe = d.useCallback(() => {
    if (!J.current || !V.current) return;
    const oe = { placement: i, strategy: r, middleware: A };
    me.current && (oe.platform = me.current), X1(J.current, V.current, oe).then((ne) => {
      const ve = { ...ne, isPositioned: ye.current !== false };
      xe.current && !Bi(ae.current, ve) && (ae.current = ve, nr.flushSync(() => {
        h(ve);
      }));
    });
  }, [A, i, r, me, ye]);
  zi(() => {
    m === false && ae.current.isPositioned && (ae.current.isPositioned = false, h((oe) => ({ ...oe, isPositioned: false })));
  }, [m]);
  const xe = d.useRef(false);
  zi(() => (xe.current = true, () => {
    xe.current = false;
  }), []), zi(() => {
    if (X && (J.current = X), $ && (V.current = $), X && $) {
      if (Ee.current) return Ee.current(X, $, pe);
      pe();
    }
  }, [X, $, pe, Ee, ge]);
  const Te = d.useMemo(() => ({ reference: J, floating: V, setReference: z, setFloating: L }), [z, L]), K = d.useMemo(() => ({ reference: X, floating: $ }), [X, $]), te = d.useMemo(() => {
    const oe = { position: r, left: 0, top: 0 };
    if (!K.floating) return oe;
    const ne = lh(K.floating, S.x), ve = lh(K.floating, S.y);
    return g ? { ...oe, transform: "translate(" + ne + "px, " + ve + "px)", ...Dh(K.floating) >= 1.5 && { willChange: "transform" } } : { position: r, left: ne, top: ve };
  }, [r, g, K.floating, S.x, S.y]);
  return d.useMemo(() => ({ ...S, update: pe, refs: Te, elements: K, floatingStyles: te }), [S, pe, Te, K, te]);
}
const mx = (l) => {
  function i(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return { name: "arrow", options: l, fn(r) {
    const { element: c, padding: s } = typeof l == "function" ? l(r) : l;
    return c && i(c) ? c.current != null ? Hm({ element: c.current, padding: s }).fn(r) : {} : c ? Hm({ element: c, padding: s }).fn(r) : {};
  } };
}, hx = (l, i) => ({ ...K1(l), options: [l, i] }), gx = (l, i) => ({ ...Q1(l), options: [l, i] }), yx = (l, i) => ({ ...$1(l), options: [l, i] }), bx = (l, i) => ({ ...P1(l), options: [l, i] }), Sx = (l, i) => ({ ...Z1(l), options: [l, i] }), Ex = (l, i) => ({ ...k1(l), options: [l, i] }), xx = (l, i) => ({ ...mx(l), options: [l, i] });
var Cx = "Arrow", Oh = d.forwardRef((l, i) => {
  const { children: r, width: c = 10, height: s = 5, ...f } = l;
  return E.jsx(ce.svg, { ...f, ref: i, width: c, height: s, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: l.asChild ? r : E.jsx("polygon", { points: "0,0 30,0 15,10" }) });
});
Oh.displayName = Cx;
var Tx = Oh;
function df(l) {
  const [i, r] = d.useState(void 0);
  return dt(() => {
    if (l) {
      r({ width: l.offsetWidth, height: l.offsetHeight });
      const c = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length) return;
        const f = s[0];
        let v, g;
        if ("borderBoxSize" in f) {
          const y = f.borderBoxSize, m = Array.isArray(y) ? y[0] : y;
          v = m.inlineSize, g = m.blockSize;
        } else v = l.offsetWidth, g = l.offsetHeight;
        r({ width: v, height: g });
      });
      return c.observe(l, { box: "border-box" }), () => c.unobserve(l);
    } else r(void 0);
  }, [l]), i;
}
var pf = "Popper", [Nh, Sa] = ht(pf), [_x, zh] = Nh(pf), jh = (l) => {
  const { __scopePopper: i, children: r } = l, [c, s] = d.useState(null);
  return E.jsx(_x, { scope: i, anchor: c, onAnchorChange: s, children: r });
};
jh.displayName = pf;
var Uh = "PopperAnchor", Bh = d.forwardRef((l, i) => {
  const { __scopePopper: r, virtualRef: c, ...s } = l, f = zh(Uh, r), v = d.useRef(null), g = Ce(i, v), y = d.useRef(null);
  return d.useEffect(() => {
    const m = y.current;
    y.current = (c == null ? void 0 : c.current) || v.current, m !== y.current && f.onAnchorChange(y.current);
  }), c ? null : E.jsx(ce.div, { ...s, ref: g });
});
Bh.displayName = Uh;
var vf = "PopperContent", [Ax, Rx] = Nh(vf), Hh = d.forwardRef((l, i) => {
  var _a, _b2, _c, _d, _e, _f2;
  const { __scopePopper: r, side: c = "bottom", sideOffset: s = 0, align: f = "center", alignOffset: v = 0, arrowPadding: g = 0, avoidCollisions: y = true, collisionBoundary: m = [], collisionPadding: S = 0, sticky: h = "partial", hideWhenDetached: A = false, updatePositionStrategy: w = "optimized", onPlaced: O, ...C } = l, T = zh(vf, r), [D, z] = d.useState(null), L = Ce(i, (q) => z(q)), [X, $] = d.useState(null), J = df(X), V = (J == null ? void 0 : J.width) ?? 0, ae = (J == null ? void 0 : J.height) ?? 0, ge = c + (f !== "center" ? "-" + f : ""), Ee = typeof S == "number" ? S : { top: 0, right: 0, bottom: 0, left: 0, ...S }, me = Array.isArray(m) ? m : [m], ye = me.length > 0, pe = { padding: Ee, boundary: me.filter(wx), altBoundary: ye }, { refs: xe, floatingStyles: Te, placement: K, isPositioned: te, middlewareData: oe } = vx({ strategy: "fixed", placement: ge, whileElementsMounted: (...q) => J1(...q, { animationFrame: w === "always" }), elements: { reference: T.anchor }, middleware: [hx({ mainAxis: s + ae, alignmentAxis: v }), y && gx({ mainAxis: true, crossAxis: false, limiter: h === "partial" ? yx() : void 0, ...pe }), y && bx({ ...pe }), Sx({ ...pe, apply: ({ elements: q, rects: ee, availableWidth: ie, availableHeight: be }) => {
    const { width: De, height: ze } = ee.reference, rt = q.floating.style;
    rt.setProperty("--radix-popper-available-width", `${ie}px`), rt.setProperty("--radix-popper-available-height", `${be}px`), rt.setProperty("--radix-popper-anchor-width", `${De}px`), rt.setProperty("--radix-popper-anchor-height", `${ze}px`);
  } }), X && xx({ element: X, padding: g }), Dx({ arrowWidth: V, arrowHeight: ae }), A && Ex({ strategy: "referenceHidden", ...pe })] }), [ne, ve] = Yh(K), _ = cn(O);
  dt(() => {
    te && (_ == null ? void 0 : _());
  }, [te, _]);
  const R = (_a = oe.arrow) == null ? void 0 : _a.x, B = (_b2 = oe.arrow) == null ? void 0 : _b2.y, I = ((_c = oe.arrow) == null ? void 0 : _c.centerOffset) !== 0, [Q, F] = d.useState();
  return dt(() => {
    D && F(window.getComputedStyle(D).zIndex);
  }, [D]), E.jsx("div", { ref: xe.setFloating, "data-radix-popper-content-wrapper": "", style: { ...Te, transform: te ? Te.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: Q, "--radix-popper-transform-origin": [(_d = oe.transformOrigin) == null ? void 0 : _d.x, (_e = oe.transformOrigin) == null ? void 0 : _e.y].join(" "), ...((_f2 = oe.hide) == null ? void 0 : _f2.referenceHidden) && { visibility: "hidden", pointerEvents: "none" } }, dir: l.dir, children: E.jsx(Ax, { scope: r, placedSide: ne, onArrowChange: $, arrowX: R, arrowY: B, shouldHideArrow: I, children: E.jsx(ce.div, { "data-side": ne, "data-align": ve, ...C, ref: L, style: { ...C.style, animation: te ? void 0 : "none" } }) }) });
});
Hh.displayName = vf;
var Lh = "PopperArrow", Mx = { top: "bottom", right: "left", bottom: "top", left: "right" }, Gh = d.forwardRef(function(i, r) {
  const { __scopePopper: c, ...s } = i, f = Rx(Lh, c), v = Mx[f.placedSide];
  return E.jsx("span", { ref: f.onArrowChange, style: { position: "absolute", left: f.arrowX, top: f.arrowY, [v]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[f.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[f.placedSide], visibility: f.shouldHideArrow ? "hidden" : void 0 }, children: E.jsx(Tx, { ...s, ref: r, style: { ...s.style, display: "block" } }) });
});
Gh.displayName = Lh;
function wx(l) {
  return l !== null;
}
var Dx = (l) => ({ name: "transformOrigin", options: l, fn(i) {
  var _a, _b2, _c;
  const { placement: r, rects: c, middlewareData: s } = i, v = ((_a = s.arrow) == null ? void 0 : _a.centerOffset) !== 0, g = v ? 0 : l.arrowWidth, y = v ? 0 : l.arrowHeight, [m, S] = Yh(r), h = { start: "0%", center: "50%", end: "100%" }[S], A = (((_b2 = s.arrow) == null ? void 0 : _b2.x) ?? 0) + g / 2, w = (((_c = s.arrow) == null ? void 0 : _c.y) ?? 0) + y / 2;
  let O = "", C = "";
  return m === "bottom" ? (O = v ? h : `${A}px`, C = `${-y}px`) : m === "top" ? (O = v ? h : `${A}px`, C = `${c.floating.height + y}px`) : m === "right" ? (O = `${-y}px`, C = v ? h : `${w}px`) : m === "left" && (O = `${c.floating.width + y}px`, C = v ? h : `${w}px`), { data: { x: O, y: C } };
} });
function Yh(l) {
  const [i, r = "center"] = l.split("-");
  return [i, r];
}
var Ki = jh, ar = Bh, Qi = Hh, Pi = Gh, Ox = "Portal", lr = d.forwardRef((l, i) => {
  var _a;
  const { container: r, ...c } = l, [s, f] = d.useState(false);
  dt(() => f(true), []);
  const v = r || s && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return v ? Th.createPortal(E.jsx(ce.div, { ...c, ref: i }), v) : null;
});
lr.displayName = Ox;
function Nx(l, i) {
  return d.useReducer((r, c) => i[r][c] ?? r, l);
}
var Ut = (l) => {
  const { present: i, children: r } = l, c = zx(i), s = typeof r == "function" ? r({ present: c.isPresent }) : d.Children.only(r), f = Ce(c.ref, jx(s));
  return typeof r == "function" || c.isPresent ? d.cloneElement(s, { ref: f }) : null;
};
Ut.displayName = "Presence";
function zx(l) {
  const [i, r] = d.useState(), c = d.useRef(null), s = d.useRef(l), f = d.useRef("none"), v = l ? "mounted" : "unmounted", [g, y] = Nx(v, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return d.useEffect(() => {
    const m = Di(c.current);
    f.current = g === "mounted" ? m : "none";
  }, [g]), dt(() => {
    const m = c.current, S = s.current;
    if (S !== l) {
      const A = f.current, w = Di(m);
      l ? y("MOUNT") : w === "none" || (m == null ? void 0 : m.display) === "none" ? y("UNMOUNT") : y(S && A !== w ? "ANIMATION_OUT" : "UNMOUNT"), s.current = l;
    }
  }, [l, y]), dt(() => {
    if (i) {
      let m;
      const S = i.ownerDocument.defaultView ?? window, h = (w) => {
        const C = Di(c.current).includes(CSS.escape(w.animationName));
        if (w.target === i && C && (y("ANIMATION_END"), !s.current)) {
          const T = i.style.animationFillMode;
          i.style.animationFillMode = "forwards", m = S.setTimeout(() => {
            i.style.animationFillMode === "forwards" && (i.style.animationFillMode = T);
          });
        }
      }, A = (w) => {
        w.target === i && (f.current = Di(c.current));
      };
      return i.addEventListener("animationstart", A), i.addEventListener("animationcancel", h), i.addEventListener("animationend", h), () => {
        S.clearTimeout(m), i.removeEventListener("animationstart", A), i.removeEventListener("animationcancel", h), i.removeEventListener("animationend", h);
      };
    } else y("ANIMATION_END");
  }, [i, y]), { isPresent: ["mounted", "unmountSuspended"].includes(g), ref: d.useCallback((m) => {
    c.current = m ? getComputedStyle(m) : null, r(m);
  }, []) };
}
function Di(l) {
  return (l == null ? void 0 : l.animationName) || "none";
}
function jx(l) {
  var _a, _b2;
  let i = (_a = Object.getOwnPropertyDescriptor(l.props, "ref")) == null ? void 0 : _a.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? l.ref : (i = (_b2 = Object.getOwnPropertyDescriptor(l, "ref")) == null ? void 0 : _b2.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? l.props.ref : l.props.ref || l.ref);
}
var Ux = ff[" useInsertionEffect ".trim().toString()] || dt;
function jt({ prop: l, defaultProp: i, onChange: r = () => {
}, caller: c }) {
  const [s, f, v] = Bx({ defaultProp: i, onChange: r }), g = l !== void 0, y = g ? l : s;
  {
    const S = d.useRef(l !== void 0);
    d.useEffect(() => {
      const h = S.current;
      h !== g && console.warn(`${c} is changing from ${h ? "controlled" : "uncontrolled"} to ${g ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), S.current = g;
    }, [g, c]);
  }
  const m = d.useCallback((S) => {
    var _a;
    if (g) {
      const h = Hx(S) ? S(l) : S;
      h !== l && ((_a = v.current) == null ? void 0 : _a.call(v, h));
    } else f(S);
  }, [g, l, f, v]);
  return [y, m];
}
function Bx({ defaultProp: l, onChange: i }) {
  const [r, c] = d.useState(l), s = d.useRef(r), f = d.useRef(i);
  return Ux(() => {
    f.current = i;
  }, [i]), d.useEffect(() => {
    var _a;
    s.current !== r && ((_a = f.current) == null ? void 0 : _a.call(f, r), s.current = r);
  }, [r, s]), [r, c, f];
}
function Hx(l) {
  return typeof l == "function";
}
var Vh = Object.freeze({ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" }), Lx = "VisuallyHidden", qh = d.forwardRef((l, i) => E.jsx(ce.span, { ...l, ref: i, style: { ...Vh, ...l.style } }));
qh.displayName = Lx;
var Gx = qh, [Zi] = ht("Tooltip", [Sa]), mf = Sa(), Ih = "TooltipProvider", Yx = 700, oh = "tooltip.open", [Vx, Xh] = Zi(Ih), Kh = (l) => {
  const { __scopeTooltip: i, delayDuration: r = Yx, skipDelayDuration: c = 300, disableHoverableContent: s = false, children: f } = l, v = d.useRef(true), g = d.useRef(false), y = d.useRef(0);
  return d.useEffect(() => {
    const m = y.current;
    return () => window.clearTimeout(m);
  }, []), E.jsx(Vx, { scope: i, isOpenDelayedRef: v, delayDuration: r, onOpen: d.useCallback(() => {
    window.clearTimeout(y.current), v.current = false;
  }, []), onClose: d.useCallback(() => {
    window.clearTimeout(y.current), y.current = window.setTimeout(() => v.current = true, c);
  }, [c]), isPointerInTransitRef: g, onPointerInTransitChange: d.useCallback((m) => {
    g.current = m;
  }, []), disableHoverableContent: s, children: f });
};
Kh.displayName = Ih;
var Qh = "Tooltip", [IR, ki] = Zi(Qh), Ps = "TooltipTrigger", qx = d.forwardRef((l, i) => {
  const { __scopeTooltip: r, ...c } = l, s = ki(Ps, r), f = Xh(Ps, r), v = mf(r), g = d.useRef(null), y = Ce(i, g, s.onTriggerChange), m = d.useRef(false), S = d.useRef(false), h = d.useCallback(() => m.current = false, []);
  return d.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), E.jsx(ar, { asChild: true, ...v, children: E.jsx(ce.button, { "aria-describedby": s.open ? s.contentId : void 0, "data-state": s.stateAttribute, ...c, ref: y, onPointerMove: W(l.onPointerMove, (A) => {
    A.pointerType !== "touch" && !S.current && !f.isPointerInTransitRef.current && (s.onTriggerEnter(), S.current = true);
  }), onPointerLeave: W(l.onPointerLeave, () => {
    s.onTriggerLeave(), S.current = false;
  }), onPointerDown: W(l.onPointerDown, () => {
    s.open && s.onClose(), m.current = true, document.addEventListener("pointerup", h, { once: true });
  }), onFocus: W(l.onFocus, () => {
    m.current || s.onOpen();
  }), onBlur: W(l.onBlur, s.onClose), onClick: W(l.onClick, s.onClose) }) });
});
qx.displayName = Ps;
var Ix = "TooltipPortal", [XR, Xx] = Zi(Ix, { forceMount: void 0 }), Pl = "TooltipContent", Kx = d.forwardRef((l, i) => {
  const r = Xx(Pl, l.__scopeTooltip), { forceMount: c = r.forceMount, side: s = "top", ...f } = l, v = ki(Pl, l.__scopeTooltip);
  return E.jsx(Ut, { present: c || v.open, children: v.disableHoverableContent ? E.jsx(Ph, { side: s, ...f, ref: i }) : E.jsx(Qx, { side: s, ...f, ref: i }) });
}), Qx = d.forwardRef((l, i) => {
  const r = ki(Pl, l.__scopeTooltip), c = Xh(Pl, l.__scopeTooltip), s = d.useRef(null), f = Ce(i, s), [v, g] = d.useState(null), { trigger: y, onClose: m } = r, S = s.current, { onPointerInTransitChange: h } = c, A = d.useCallback(() => {
    g(null), h(false);
  }, [h]), w = d.useCallback((O, C) => {
    const T = O.currentTarget, D = { x: O.clientX, y: O.clientY }, z = Jx(D, T.getBoundingClientRect()), L = Fx(D, z), X = Wx(C.getBoundingClientRect()), $ = tC([...L, ...X]);
    g($), h(true);
  }, [h]);
  return d.useEffect(() => () => A(), [A]), d.useEffect(() => {
    if (y && S) {
      const O = (T) => w(T, S), C = (T) => w(T, y);
      return y.addEventListener("pointerleave", O), S.addEventListener("pointerleave", C), () => {
        y.removeEventListener("pointerleave", O), S.removeEventListener("pointerleave", C);
      };
    }
  }, [y, S, w, A]), d.useEffect(() => {
    if (v) {
      const O = (C) => {
        const T = C.target, D = { x: C.clientX, y: C.clientY }, z = (y == null ? void 0 : y.contains(T)) || (S == null ? void 0 : S.contains(T)), L = !eC(D, v);
        z ? A() : L && (A(), m());
      };
      return document.addEventListener("pointermove", O), () => document.removeEventListener("pointermove", O);
    }
  }, [y, S, v, m, A]), E.jsx(Ph, { ...l, ref: f });
}), [Px, Zx] = Zi(Qh, { isInside: false }), kx = Ah("TooltipContent"), Ph = d.forwardRef((l, i) => {
  const { __scopeTooltip: r, children: c, "aria-label": s, onEscapeKeyDown: f, onPointerDownOutside: v, ...g } = l, y = ki(Pl, r), m = mf(r), { onClose: S } = y;
  return d.useEffect(() => (document.addEventListener(oh, S), () => document.removeEventListener(oh, S)), [S]), d.useEffect(() => {
    if (y.trigger) {
      const h = (A) => {
        var _a;
        ((_a = A.target) == null ? void 0 : _a.contains(y.trigger)) && S();
      };
      return window.addEventListener("scroll", h, { capture: true }), () => window.removeEventListener("scroll", h, { capture: true });
    }
  }, [y.trigger, S]), E.jsx(kl, { asChild: true, disableOutsidePointerEvents: false, onEscapeKeyDown: f, onPointerDownOutside: v, onFocusOutside: (h) => h.preventDefault(), onDismiss: S, children: E.jsxs(Qi, { "data-state": y.stateAttribute, ...m, ...g, ref: i, style: { ...g.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)", "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)", "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" }, children: [E.jsx(kx, { children: c }), E.jsx(Px, { scope: r, isInside: true, children: E.jsx(Gx, { id: y.contentId, role: "tooltip", children: s || c }) })] }) });
});
Kx.displayName = Pl;
var Zh = "TooltipArrow", $x = d.forwardRef((l, i) => {
  const { __scopeTooltip: r, ...c } = l, s = mf(r);
  return Zx(Zh, r).isInside ? null : E.jsx(Pi, { ...s, ...c, ref: i });
});
$x.displayName = Zh;
function Jx(l, i) {
  const r = Math.abs(i.top - l.y), c = Math.abs(i.bottom - l.y), s = Math.abs(i.right - l.x), f = Math.abs(i.left - l.x);
  switch (Math.min(r, c, s, f)) {
    case f:
      return "left";
    case s:
      return "right";
    case r:
      return "top";
    case c:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Fx(l, i, r = 5) {
  const c = [];
  switch (i) {
    case "top":
      c.push({ x: l.x - r, y: l.y + r }, { x: l.x + r, y: l.y + r });
      break;
    case "bottom":
      c.push({ x: l.x - r, y: l.y - r }, { x: l.x + r, y: l.y - r });
      break;
    case "left":
      c.push({ x: l.x + r, y: l.y - r }, { x: l.x + r, y: l.y + r });
      break;
    case "right":
      c.push({ x: l.x - r, y: l.y - r }, { x: l.x - r, y: l.y + r });
      break;
  }
  return c;
}
function Wx(l) {
  const { top: i, right: r, bottom: c, left: s } = l;
  return [{ x: s, y: i }, { x: r, y: i }, { x: r, y: c }, { x: s, y: c }];
}
function eC(l, i) {
  const { x: r, y: c } = l;
  let s = false;
  for (let f = 0, v = i.length - 1; f < i.length; v = f++) {
    const g = i[f], y = i[v], m = g.x, S = g.y, h = y.x, A = y.y;
    S > c != A > c && r < (h - m) * (c - S) / (A - S) + m && (s = !s);
  }
  return s;
}
function tC(l) {
  const i = l.slice();
  return i.sort((r, c) => r.x < c.x ? -1 : r.x > c.x ? 1 : r.y < c.y ? -1 : r.y > c.y ? 1 : 0), nC(i);
}
function nC(l) {
  if (l.length <= 1) return l.slice();
  const i = [];
  for (let c = 0; c < l.length; c++) {
    const s = l[c];
    for (; i.length >= 2; ) {
      const f = i[i.length - 1], v = i[i.length - 2];
      if ((f.x - v.x) * (s.y - v.y) >= (f.y - v.y) * (s.x - v.x)) i.pop();
      else break;
    }
    i.push(s);
  }
  i.pop();
  const r = [];
  for (let c = l.length - 1; c >= 0; c--) {
    const s = l[c];
    for (; r.length >= 2; ) {
      const f = r[r.length - 1], v = r[r.length - 2];
      if ((f.x - v.x) * (s.y - v.y) >= (f.y - v.y) * (s.x - v.x)) r.pop();
      else break;
    }
    r.push(s);
  }
  return r.pop(), i.length === 1 && r.length === 1 && i[0].x === r[0].x && i[0].y === r[0].y ? i : i.concat(r);
}
var KR = Kh;
function or(l) {
  const i = l + "CollectionProvider", [r, c] = ht(i), [s, f] = r(i, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), v = (C) => {
    const { scope: T, children: D } = C, z = k.useRef(null), L = k.useRef(/* @__PURE__ */ new Map()).current;
    return E.jsx(s, { scope: T, itemMap: L, collectionRef: z, children: D });
  };
  v.displayName = i;
  const g = l + "CollectionSlot", y = Pa(g), m = k.forwardRef((C, T) => {
    const { scope: D, children: z } = C, L = f(g, D), X = Ce(T, L.collectionRef);
    return E.jsx(y, { ref: X, children: z });
  });
  m.displayName = g;
  const S = l + "CollectionItemSlot", h = "data-radix-collection-item", A = Pa(S), w = k.forwardRef((C, T) => {
    const { scope: D, children: z, ...L } = C, X = k.useRef(null), $ = Ce(T, X), J = f(S, D);
    return k.useEffect(() => (J.itemMap.set(X, { ref: X, ...L }), () => {
      J.itemMap.delete(X);
    })), E.jsx(A, { [h]: "", ref: $, children: z });
  });
  w.displayName = S;
  function O(C) {
    const T = f(l + "CollectionConsumer", C);
    return k.useCallback(() => {
      const z = T.collectionRef.current;
      if (!z) return [];
      const L = Array.from(z.querySelectorAll(`[${h}]`));
      return Array.from(T.itemMap.values()).sort((J, V) => L.indexOf(J.ref.current) - L.indexOf(V.ref.current));
    }, [T.collectionRef, T.itemMap]);
  }
  return [{ Provider: v, Slot: m, ItemSlot: w }, O, c];
}
var aC = d.createContext(void 0);
function $l(l) {
  const i = d.useContext(aC);
  return l || i || "ltr";
}
var zs = 0;
function $i() {
  d.useEffect(() => {
    const l = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", l[0] ?? rh()), document.body.insertAdjacentElement("beforeend", l[1] ?? rh()), zs++, () => {
      zs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((i) => i.remove()), zs--;
    };
  }, []);
}
function rh() {
  const l = document.createElement("span");
  return l.setAttribute("data-radix-focus-guard", ""), l.tabIndex = 0, l.style.outline = "none", l.style.opacity = "0", l.style.position = "fixed", l.style.pointerEvents = "none", l;
}
var js = "focusScope.autoFocusOnMount", Us = "focusScope.autoFocusOnUnmount", ih = { bubbles: false, cancelable: true }, lC = "FocusScope", rr = d.forwardRef((l, i) => {
  const { loop: r = false, trapped: c = false, onMountAutoFocus: s, onUnmountAutoFocus: f, ...v } = l, [g, y] = d.useState(null), m = cn(s), S = cn(f), h = d.useRef(null), A = Ce(i, (C) => y(C)), w = d.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  d.useEffect(() => {
    if (c) {
      let C = function(L) {
        if (w.paused || !g) return;
        const X = L.target;
        g.contains(X) ? h.current = X : ha(h.current, { select: true });
      }, T = function(L) {
        if (w.paused || !g) return;
        const X = L.relatedTarget;
        X !== null && (g.contains(X) || ha(h.current, { select: true }));
      }, D = function(L) {
        if (document.activeElement === document.body) for (const $ of L) $.removedNodes.length > 0 && ha(g);
      };
      document.addEventListener("focusin", C), document.addEventListener("focusout", T);
      const z = new MutationObserver(D);
      return g && z.observe(g, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", C), document.removeEventListener("focusout", T), z.disconnect();
      };
    }
  }, [c, g, w.paused]), d.useEffect(() => {
    if (g) {
      ch.add(w);
      const C = document.activeElement;
      if (!g.contains(C)) {
        const D = new CustomEvent(js, ih);
        g.addEventListener(js, m), g.dispatchEvent(D), D.defaultPrevented || (oC(sC(kh(g)), { select: true }), document.activeElement === C && ha(g));
      }
      return () => {
        g.removeEventListener(js, m), setTimeout(() => {
          const D = new CustomEvent(Us, ih);
          g.addEventListener(Us, S), g.dispatchEvent(D), D.defaultPrevented || ha(C ?? document.body, { select: true }), g.removeEventListener(Us, S), ch.remove(w);
        }, 0);
      };
    }
  }, [g, m, S, w]);
  const O = d.useCallback((C) => {
    if (!r && !c || w.paused) return;
    const T = C.key === "Tab" && !C.altKey && !C.ctrlKey && !C.metaKey, D = document.activeElement;
    if (T && D) {
      const z = C.currentTarget, [L, X] = rC(z);
      L && X ? !C.shiftKey && D === X ? (C.preventDefault(), r && ha(L, { select: true })) : C.shiftKey && D === L && (C.preventDefault(), r && ha(X, { select: true })) : D === z && C.preventDefault();
    }
  }, [r, c, w.paused]);
  return E.jsx(ce.div, { tabIndex: -1, ...v, ref: A, onKeyDown: O });
});
rr.displayName = lC;
function oC(l, { select: i = false } = {}) {
  const r = document.activeElement;
  for (const c of l) if (ha(c, { select: i }), document.activeElement !== r) return;
}
function rC(l) {
  const i = kh(l), r = uh(i, l), c = uh(i.reverse(), l);
  return [r, c];
}
function kh(l) {
  const i = [], r = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, { acceptNode: (c) => {
    const s = c.tagName === "INPUT" && c.type === "hidden";
    return c.disabled || c.hidden || s ? NodeFilter.FILTER_SKIP : c.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; r.nextNode(); ) i.push(r.currentNode);
  return i;
}
function uh(l, i) {
  for (const r of l) if (!iC(r, { upTo: i })) return r;
}
function iC(l, { upTo: i }) {
  if (getComputedStyle(l).visibility === "hidden") return true;
  for (; l; ) {
    if (i !== void 0 && l === i) return false;
    if (getComputedStyle(l).display === "none") return true;
    l = l.parentElement;
  }
  return false;
}
function uC(l) {
  return l instanceof HTMLInputElement && "select" in l;
}
function ha(l, { select: i = false } = {}) {
  if (l && l.focus) {
    const r = document.activeElement;
    l.focus({ preventScroll: true }), l !== r && uC(l) && i && l.select();
  }
}
var ch = cC();
function cC() {
  let l = [];
  return { add(i) {
    const r = l[0];
    i !== r && (r == null ? void 0 : r.pause()), l = sh(l, i), l.unshift(i);
  }, remove(i) {
    var _a;
    l = sh(l, i), (_a = l[0]) == null ? void 0 : _a.resume();
  } };
}
function sh(l, i) {
  const r = [...l], c = r.indexOf(i);
  return c !== -1 && r.splice(c, 1), r;
}
function sC(l) {
  return l.filter((i) => i.tagName !== "A");
}
var Bs = "rovingFocusGroup.onEntryFocus", fC = { bubbles: false, cancelable: true }, ir = "RovingFocusGroup", [Zs, $h, dC] = or(ir), [pC, Jl] = ht(ir, [dC]), [vC, mC] = pC(ir), Jh = d.forwardRef((l, i) => E.jsx(Zs.Provider, { scope: l.__scopeRovingFocusGroup, children: E.jsx(Zs.Slot, { scope: l.__scopeRovingFocusGroup, children: E.jsx(hC, { ...l, ref: i }) }) }));
Jh.displayName = ir;
var hC = d.forwardRef((l, i) => {
  const { __scopeRovingFocusGroup: r, orientation: c, loop: s = false, dir: f, currentTabStopId: v, defaultCurrentTabStopId: g, onCurrentTabStopIdChange: y, onEntryFocus: m, preventScrollOnEntryFocus: S = false, ...h } = l, A = d.useRef(null), w = Ce(i, A), O = $l(f), [C, T] = jt({ prop: v, defaultProp: g ?? null, onChange: y, caller: ir }), [D, z] = d.useState(false), L = cn(m), X = $h(r), $ = d.useRef(false), [J, V] = d.useState(0);
  return d.useEffect(() => {
    const ae = A.current;
    if (ae) return ae.addEventListener(Bs, L), () => ae.removeEventListener(Bs, L);
  }, [L]), E.jsx(vC, { scope: r, orientation: c, dir: O, loop: s, currentTabStopId: C, onItemFocus: d.useCallback((ae) => T(ae), [T]), onItemShiftTab: d.useCallback(() => z(true), []), onFocusableItemAdd: d.useCallback(() => V((ae) => ae + 1), []), onFocusableItemRemove: d.useCallback(() => V((ae) => ae - 1), []), children: E.jsx(ce.div, { tabIndex: D || J === 0 ? -1 : 0, "data-orientation": c, ...h, ref: w, style: { outline: "none", ...l.style }, onMouseDown: W(l.onMouseDown, () => {
    $.current = true;
  }), onFocus: W(l.onFocus, (ae) => {
    const ge = !$.current;
    if (ae.target === ae.currentTarget && ge && !D) {
      const Ee = new CustomEvent(Bs, fC);
      if (ae.currentTarget.dispatchEvent(Ee), !Ee.defaultPrevented) {
        const me = X().filter((K) => K.focusable), ye = me.find((K) => K.active), pe = me.find((K) => K.id === C), Te = [ye, pe, ...me].filter(Boolean).map((K) => K.ref.current);
        eg(Te, S);
      }
    }
    $.current = false;
  }), onBlur: W(l.onBlur, () => z(false)) }) });
}), Fh = "RovingFocusGroupItem", Wh = d.forwardRef((l, i) => {
  const { __scopeRovingFocusGroup: r, focusable: c = true, active: s = false, tabStopId: f, children: v, ...g } = l, y = Ke(), m = f || y, S = mC(Fh, r), h = S.currentTabStopId === m, A = $h(r), { onFocusableItemAdd: w, onFocusableItemRemove: O, currentTabStopId: C } = S;
  return d.useEffect(() => {
    if (c) return w(), () => O();
  }, [c, w, O]), E.jsx(Zs.ItemSlot, { scope: r, id: m, focusable: c, active: s, children: E.jsx(ce.span, { tabIndex: h ? 0 : -1, "data-orientation": S.orientation, ...g, ref: i, onMouseDown: W(l.onMouseDown, (T) => {
    c ? S.onItemFocus(m) : T.preventDefault();
  }), onFocus: W(l.onFocus, () => S.onItemFocus(m)), onKeyDown: W(l.onKeyDown, (T) => {
    if (T.key === "Tab" && T.shiftKey) {
      S.onItemShiftTab();
      return;
    }
    if (T.target !== T.currentTarget) return;
    const D = bC(T, S.orientation, S.dir);
    if (D !== void 0) {
      if (T.metaKey || T.ctrlKey || T.altKey || T.shiftKey) return;
      T.preventDefault();
      let L = A().filter((X) => X.focusable).map((X) => X.ref.current);
      if (D === "last") L.reverse();
      else if (D === "prev" || D === "next") {
        D === "prev" && L.reverse();
        const X = L.indexOf(T.currentTarget);
        L = S.loop ? SC(L, X + 1) : L.slice(X + 1);
      }
      setTimeout(() => eg(L));
    }
  }), children: typeof v == "function" ? v({ isCurrentTabStop: h, hasTabStop: C != null }) : v }) });
});
Wh.displayName = Fh;
var gC = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function yC(l, i) {
  return i !== "rtl" ? l : l === "ArrowLeft" ? "ArrowRight" : l === "ArrowRight" ? "ArrowLeft" : l;
}
function bC(l, i, r) {
  const c = yC(l.key, r);
  if (!(i === "vertical" && ["ArrowLeft", "ArrowRight"].includes(c)) && !(i === "horizontal" && ["ArrowUp", "ArrowDown"].includes(c))) return gC[c];
}
function eg(l, i = false) {
  const r = document.activeElement;
  for (const c of l) if (c === r || (c.focus({ preventScroll: i }), document.activeElement !== r)) return;
}
function SC(l, i) {
  return l.map((r, c) => l[(i + c) % l.length]);
}
var hf = Jh, gf = Wh, ji = "right-scroll-bar-position", Ui = "width-before-scroll-bar", EC = "with-scroll-bars-hidden", xC = "--removed-body-scroll-bar-size";
function Hs(l, i) {
  return typeof l == "function" ? l(i) : l && (l.current = i), l;
}
function CC(l, i) {
  var r = d.useState(function() {
    return { value: l, callback: i, facade: { get current() {
      return r.value;
    }, set current(c) {
      var s = r.value;
      s !== c && (r.value = c, r.callback(c, s));
    } } };
  })[0];
  return r.callback = i, r.facade;
}
var TC = typeof window < "u" ? d.useLayoutEffect : d.useEffect, fh = /* @__PURE__ */ new WeakMap();
function _C(l, i) {
  var r = CC(null, function(c) {
    return l.forEach(function(s) {
      return Hs(s, c);
    });
  });
  return TC(function() {
    var c = fh.get(r);
    if (c) {
      var s = new Set(c), f = new Set(l), v = r.current;
      s.forEach(function(g) {
        f.has(g) || Hs(g, null);
      }), f.forEach(function(g) {
        s.has(g) || Hs(g, v);
      });
    }
    fh.set(r, l);
  }, [l]), r;
}
function AC(l) {
  return l;
}
function RC(l, i) {
  i === void 0 && (i = AC);
  var r = [], c = false, s = { read: function() {
    if (c) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return r.length ? r[r.length - 1] : l;
  }, useMedium: function(f) {
    var v = i(f, c);
    return r.push(v), function() {
      r = r.filter(function(g) {
        return g !== v;
      });
    };
  }, assignSyncMedium: function(f) {
    for (c = true; r.length; ) {
      var v = r;
      r = [], v.forEach(f);
    }
    r = { push: function(g) {
      return f(g);
    }, filter: function() {
      return r;
    } };
  }, assignMedium: function(f) {
    c = true;
    var v = [];
    if (r.length) {
      var g = r;
      r = [], g.forEach(f), v = r;
    }
    var y = function() {
      var S = v;
      v = [], S.forEach(f);
    }, m = function() {
      return Promise.resolve().then(y);
    };
    m(), r = { push: function(S) {
      v.push(S), m();
    }, filter: function(S) {
      return v = v.filter(S), r;
    } };
  } };
  return s;
}
function MC(l) {
  l === void 0 && (l = {});
  var i = RC(null);
  return i.options = ga({ async: true, ssr: false }, l), i;
}
var tg = function(l) {
  var i = l.sideCar, r = xh(l, ["sideCar"]);
  if (!i) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var c = i.read();
  if (!c) throw new Error("Sidecar medium not found");
  return d.createElement(c, ga({}, r));
};
tg.isSideCarExport = true;
function wC(l, i) {
  return l.useMedium(i), tg;
}
var ng = MC(), Ls = function() {
}, Ji = d.forwardRef(function(l, i) {
  var r = d.useRef(null), c = d.useState({ onScrollCapture: Ls, onWheelCapture: Ls, onTouchMoveCapture: Ls }), s = c[0], f = c[1], v = l.forwardProps, g = l.children, y = l.className, m = l.removeScrollBar, S = l.enabled, h = l.shards, A = l.sideCar, w = l.noRelative, O = l.noIsolation, C = l.inert, T = l.allowPinchZoom, D = l.as, z = D === void 0 ? "div" : D, L = l.gapMode, X = xh(l, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), $ = A, J = _C([r, i]), V = ga(ga({}, X), s);
  return d.createElement(d.Fragment, null, S && d.createElement($, { sideCar: ng, removeScrollBar: m, shards: h, noRelative: w, noIsolation: O, inert: C, setCallbacks: f, allowPinchZoom: !!T, lockRef: r, gapMode: L }), v ? d.cloneElement(d.Children.only(g), ga(ga({}, V), { ref: J })) : d.createElement(z, ga({}, V, { className: y, ref: J }), g));
});
Ji.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
Ji.classNames = { fullWidth: Ui, zeroRight: ji };
function DC() {
  if (!document) return null;
  var l = document.createElement("style");
  l.type = "text/css";
  var i = F1();
  return i && l.setAttribute("nonce", i), l;
}
function OC(l, i) {
  l.styleSheet ? l.styleSheet.cssText = i : l.appendChild(document.createTextNode(i));
}
function NC(l) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(l);
}
var zC = function() {
  var l = 0, i = null;
  return { add: function(r) {
    l == 0 && (i = DC()) && (OC(i, r), NC(i)), l++;
  }, remove: function() {
    l--, !l && i && (i.parentNode && i.parentNode.removeChild(i), i = null);
  } };
}, jC = function() {
  var l = zC();
  return function(i, r) {
    d.useEffect(function() {
      return l.add(i), function() {
        l.remove();
      };
    }, [i && r]);
  };
}, ag = function() {
  var l = jC(), i = function(r) {
    var c = r.styles, s = r.dynamic;
    return l(c, s), null;
  };
  return i;
}, UC = { left: 0, top: 0, right: 0, gap: 0 }, Gs = function(l) {
  return parseInt(l || "", 10) || 0;
}, BC = function(l) {
  var i = window.getComputedStyle(document.body), r = i[l === "padding" ? "paddingLeft" : "marginLeft"], c = i[l === "padding" ? "paddingTop" : "marginTop"], s = i[l === "padding" ? "paddingRight" : "marginRight"];
  return [Gs(r), Gs(c), Gs(s)];
}, HC = function(l) {
  if (l === void 0 && (l = "margin"), typeof window > "u") return UC;
  var i = BC(l), r = document.documentElement.clientWidth, c = window.innerWidth;
  return { left: i[0], top: i[1], right: i[2], gap: Math.max(0, c - r + i[2] - i[0]) };
}, LC = ag(), Kl = "data-scroll-locked", GC = function(l, i, r, c) {
  var s = l.left, f = l.top, v = l.right, g = l.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(EC, ` {
   overflow: hidden `).concat(c, `;
   padding-right: `).concat(g, "px ").concat(c, `;
  }
  body[`).concat(Kl, `] {
    overflow: hidden `).concat(c, `;
    overscroll-behavior: contain;
    `).concat([i && "position: relative ".concat(c, ";"), r === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(v, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(g, "px ").concat(c, `;
    `), r === "padding" && "padding-right: ".concat(g, "px ").concat(c, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(ji, ` {
    right: `).concat(g, "px ").concat(c, `;
  }
  
  .`).concat(Ui, ` {
    margin-right: `).concat(g, "px ").concat(c, `;
  }
  
  .`).concat(ji, " .").concat(ji, ` {
    right: 0 `).concat(c, `;
  }
  
  .`).concat(Ui, " .").concat(Ui, ` {
    margin-right: 0 `).concat(c, `;
  }
  
  body[`).concat(Kl, `] {
    `).concat(xC, ": ").concat(g, `px;
  }
`);
}, dh = function() {
  var l = parseInt(document.body.getAttribute(Kl) || "0", 10);
  return isFinite(l) ? l : 0;
}, YC = function() {
  d.useEffect(function() {
    return document.body.setAttribute(Kl, (dh() + 1).toString()), function() {
      var l = dh() - 1;
      l <= 0 ? document.body.removeAttribute(Kl) : document.body.setAttribute(Kl, l.toString());
    };
  }, []);
}, VC = function(l) {
  var i = l.noRelative, r = l.noImportant, c = l.gapMode, s = c === void 0 ? "margin" : c;
  YC();
  var f = d.useMemo(function() {
    return HC(s);
  }, [s]);
  return d.createElement(LC, { styles: GC(f, !i, s, r ? "" : "!important") });
}, ks = false;
if (typeof window < "u") try {
  var Oi = Object.defineProperty({}, "passive", { get: function() {
    return ks = true, true;
  } });
  window.addEventListener("test", Oi, Oi), window.removeEventListener("test", Oi, Oi);
} catch {
  ks = false;
}
var Vl = ks ? { passive: false } : false, qC = function(l) {
  return l.tagName === "TEXTAREA";
}, lg = function(l, i) {
  if (!(l instanceof Element)) return false;
  var r = window.getComputedStyle(l);
  return r[i] !== "hidden" && !(r.overflowY === r.overflowX && !qC(l) && r[i] === "visible");
}, IC = function(l) {
  return lg(l, "overflowY");
}, XC = function(l) {
  return lg(l, "overflowX");
}, ph = function(l, i) {
  var r = i.ownerDocument, c = i;
  do {
    typeof ShadowRoot < "u" && c instanceof ShadowRoot && (c = c.host);
    var s = og(l, c);
    if (s) {
      var f = rg(l, c), v = f[1], g = f[2];
      if (v > g) return true;
    }
    c = c.parentNode;
  } while (c && c !== r.body);
  return false;
}, KC = function(l) {
  var i = l.scrollTop, r = l.scrollHeight, c = l.clientHeight;
  return [i, r, c];
}, QC = function(l) {
  var i = l.scrollLeft, r = l.scrollWidth, c = l.clientWidth;
  return [i, r, c];
}, og = function(l, i) {
  return l === "v" ? IC(i) : XC(i);
}, rg = function(l, i) {
  return l === "v" ? KC(i) : QC(i);
}, PC = function(l, i) {
  return l === "h" && i === "rtl" ? -1 : 1;
}, ZC = function(l, i, r, c, s) {
  var f = PC(l, window.getComputedStyle(i).direction), v = f * c, g = r.target, y = i.contains(g), m = false, S = v > 0, h = 0, A = 0;
  do {
    if (!g) break;
    var w = rg(l, g), O = w[0], C = w[1], T = w[2], D = C - T - f * O;
    (O || D) && og(l, g) && (h += D, A += O);
    var z = g.parentNode;
    g = z && z.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? z.host : z;
  } while (!y && g !== document.body || y && (i.contains(g) || i === g));
  return (S && Math.abs(h) < 1 || !S && Math.abs(A) < 1) && (m = true), m;
}, Ni = function(l) {
  return "changedTouches" in l ? [l.changedTouches[0].clientX, l.changedTouches[0].clientY] : [0, 0];
}, vh = function(l) {
  return [l.deltaX, l.deltaY];
}, mh = function(l) {
  return l && "current" in l ? l.current : l;
}, kC = function(l, i) {
  return l[0] === i[0] && l[1] === i[1];
}, $C = function(l) {
  return `
  .block-interactivity-`.concat(l, ` {pointer-events: none;}
  .allow-interactivity-`).concat(l, ` {pointer-events: all;}
`);
}, JC = 0, ql = [];
function FC(l) {
  var i = d.useRef([]), r = d.useRef([0, 0]), c = d.useRef(), s = d.useState(JC++)[0], f = d.useState(ag)[0], v = d.useRef(l);
  d.useEffect(function() {
    v.current = l;
  }, [l]), d.useEffect(function() {
    if (l.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var C = W1([l.lockRef.current], (l.shards || []).map(mh), true).filter(Boolean);
      return C.forEach(function(T) {
        return T.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), C.forEach(function(T) {
          return T.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [l.inert, l.lockRef.current, l.shards]);
  var g = d.useCallback(function(C, T) {
    if ("touches" in C && C.touches.length === 2 || C.type === "wheel" && C.ctrlKey) return !v.current.allowPinchZoom;
    var D = Ni(C), z = r.current, L = "deltaX" in C ? C.deltaX : z[0] - D[0], X = "deltaY" in C ? C.deltaY : z[1] - D[1], $, J = C.target, V = Math.abs(L) > Math.abs(X) ? "h" : "v";
    if ("touches" in C && V === "h" && J.type === "range") return false;
    var ae = window.getSelection(), ge = ae && ae.anchorNode, Ee = ge ? ge === J || ge.contains(J) : false;
    if (Ee) return false;
    var me = ph(V, J);
    if (!me) return true;
    if (me ? $ = V : ($ = V === "v" ? "h" : "v", me = ph(V, J)), !me) return false;
    if (!c.current && "changedTouches" in C && (L || X) && (c.current = $), !$) return true;
    var ye = c.current || $;
    return ZC(ye, T, C, ye === "h" ? L : X);
  }, []), y = d.useCallback(function(C) {
    var T = C;
    if (!(!ql.length || ql[ql.length - 1] !== f)) {
      var D = "deltaY" in T ? vh(T) : Ni(T), z = i.current.filter(function($) {
        return $.name === T.type && ($.target === T.target || T.target === $.shadowParent) && kC($.delta, D);
      })[0];
      if (z && z.should) {
        T.cancelable && T.preventDefault();
        return;
      }
      if (!z) {
        var L = (v.current.shards || []).map(mh).filter(Boolean).filter(function($) {
          return $.contains(T.target);
        }), X = L.length > 0 ? g(T, L[0]) : !v.current.noIsolation;
        X && T.cancelable && T.preventDefault();
      }
    }
  }, []), m = d.useCallback(function(C, T, D, z) {
    var L = { name: C, delta: T, target: D, should: z, shadowParent: WC(D) };
    i.current.push(L), setTimeout(function() {
      i.current = i.current.filter(function(X) {
        return X !== L;
      });
    }, 1);
  }, []), S = d.useCallback(function(C) {
    r.current = Ni(C), c.current = void 0;
  }, []), h = d.useCallback(function(C) {
    m(C.type, vh(C), C.target, g(C, l.lockRef.current));
  }, []), A = d.useCallback(function(C) {
    m(C.type, Ni(C), C.target, g(C, l.lockRef.current));
  }, []);
  d.useEffect(function() {
    return ql.push(f), l.setCallbacks({ onScrollCapture: h, onWheelCapture: h, onTouchMoveCapture: A }), document.addEventListener("wheel", y, Vl), document.addEventListener("touchmove", y, Vl), document.addEventListener("touchstart", S, Vl), function() {
      ql = ql.filter(function(C) {
        return C !== f;
      }), document.removeEventListener("wheel", y, Vl), document.removeEventListener("touchmove", y, Vl), document.removeEventListener("touchstart", S, Vl);
    };
  }, []);
  var w = l.removeScrollBar, O = l.inert;
  return d.createElement(d.Fragment, null, O ? d.createElement(f, { styles: $C(s) }) : null, w ? d.createElement(VC, { noRelative: l.noRelative, gapMode: l.gapMode }) : null);
}
function WC(l) {
  for (var i = null; l !== null; ) l instanceof ShadowRoot && (i = l.host, l = l.host), l = l.parentNode;
  return i;
}
const eT = wC(ng, FC);
var ur = d.forwardRef(function(l, i) {
  return d.createElement(Ji, ga({}, l, { ref: i, sideCar: eT }));
});
ur.classNames = Ji.classNames;
var $s = ["Enter", " "], tT = ["ArrowDown", "PageUp", "Home"], ig = ["ArrowUp", "PageDown", "End"], nT = [...tT, ...ig], aT = { ltr: [...$s, "ArrowRight"], rtl: [...$s, "ArrowLeft"] }, lT = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] }, cr = "Menu", [Wo, oT, rT] = or(cr), [Wa, yf] = ht(cr, [rT, Sa, Jl]), sr = Sa(), ug = Jl(), [cg, Ea] = Wa(cr), [iT, fr] = Wa(cr), sg = (l) => {
  const { __scopeMenu: i, open: r = false, children: c, dir: s, onOpenChange: f, modal: v = true } = l, g = sr(i), [y, m] = d.useState(null), S = d.useRef(false), h = cn(f), A = $l(s);
  return d.useEffect(() => {
    const w = () => {
      S.current = true, document.addEventListener("pointerdown", O, { capture: true, once: true }), document.addEventListener("pointermove", O, { capture: true, once: true });
    }, O = () => S.current = false;
    return document.addEventListener("keydown", w, { capture: true }), () => {
      document.removeEventListener("keydown", w, { capture: true }), document.removeEventListener("pointerdown", O, { capture: true }), document.removeEventListener("pointermove", O, { capture: true });
    };
  }, []), E.jsx(Ki, { ...g, children: E.jsx(cg, { scope: i, open: r, onOpenChange: h, content: y, onContentChange: m, children: E.jsx(iT, { scope: i, onClose: d.useCallback(() => h(false), [h]), isUsingKeyboardRef: S, dir: A, modal: v, children: c }) }) });
};
sg.displayName = cr;
var uT = "MenuAnchor", bf = d.forwardRef((l, i) => {
  const { __scopeMenu: r, ...c } = l, s = sr(r);
  return E.jsx(ar, { ...s, ...c, ref: i });
});
bf.displayName = uT;
var Sf = "MenuPortal", [cT, fg] = Wa(Sf, { forceMount: void 0 }), dg = (l) => {
  const { __scopeMenu: i, forceMount: r, children: c, container: s } = l, f = Ea(Sf, i);
  return E.jsx(cT, { scope: i, forceMount: r, children: E.jsx(Ut, { present: r || f.open, children: E.jsx(lr, { asChild: true, container: s, children: c }) }) });
};
dg.displayName = Sf;
var en = "MenuContent", [sT, Ef] = Wa(en), pg = d.forwardRef((l, i) => {
  const r = fg(en, l.__scopeMenu), { forceMount: c = r.forceMount, ...s } = l, f = Ea(en, l.__scopeMenu), v = fr(en, l.__scopeMenu);
  return E.jsx(Wo.Provider, { scope: l.__scopeMenu, children: E.jsx(Ut, { present: c || f.open, children: E.jsx(Wo.Slot, { scope: l.__scopeMenu, children: v.modal ? E.jsx(fT, { ...s, ref: i }) : E.jsx(dT, { ...s, ref: i }) }) }) });
}), fT = d.forwardRef((l, i) => {
  const r = Ea(en, l.__scopeMenu), c = d.useRef(null), s = Ce(i, c);
  return d.useEffect(() => {
    const f = c.current;
    if (f) return Xi(f);
  }, []), E.jsx(xf, { ...l, ref: s, trapFocus: r.open, disableOutsidePointerEvents: r.open, disableOutsideScroll: true, onFocusOutside: W(l.onFocusOutside, (f) => f.preventDefault(), { checkForDefaultPrevented: false }), onDismiss: () => r.onOpenChange(false) });
}), dT = d.forwardRef((l, i) => {
  const r = Ea(en, l.__scopeMenu);
  return E.jsx(xf, { ...l, ref: i, trapFocus: false, disableOutsidePointerEvents: false, disableOutsideScroll: false, onDismiss: () => r.onOpenChange(false) });
}), pT = Pa("MenuContent.ScrollLock"), xf = d.forwardRef((l, i) => {
  const { __scopeMenu: r, loop: c = false, trapFocus: s, onOpenAutoFocus: f, onCloseAutoFocus: v, disableOutsidePointerEvents: g, onEntryFocus: y, onEscapeKeyDown: m, onPointerDownOutside: S, onFocusOutside: h, onInteractOutside: A, onDismiss: w, disableOutsideScroll: O, ...C } = l, T = Ea(en, r), D = fr(en, r), z = sr(r), L = ug(r), X = oT(r), [$, J] = d.useState(null), V = d.useRef(null), ae = Ce(i, V, T.onContentChange), ge = d.useRef(0), Ee = d.useRef(""), me = d.useRef(0), ye = d.useRef(null), pe = d.useRef("right"), xe = d.useRef(0), Te = O ? ur : d.Fragment, K = O ? { as: pT, allowPinchZoom: true } : void 0, te = (ne) => {
    var _a, _b2;
    const ve = Ee.current + ne, _ = X().filter((q) => !q.disabled), R = document.activeElement, B = (_a = _.find((q) => q.ref.current === R)) == null ? void 0 : _a.textValue, I = _.map((q) => q.textValue), Q = _T(I, ve, B), F = (_b2 = _.find((q) => q.textValue === Q)) == null ? void 0 : _b2.ref.current;
    (function q(ee) {
      Ee.current = ee, window.clearTimeout(ge.current), ee !== "" && (ge.current = window.setTimeout(() => q(""), 1e3));
    })(ve), F && setTimeout(() => F.focus());
  };
  d.useEffect(() => () => window.clearTimeout(ge.current), []), $i();
  const oe = d.useCallback((ne) => {
    var _a, _b2;
    return pe.current === ((_a = ye.current) == null ? void 0 : _a.side) && RT(ne, (_b2 = ye.current) == null ? void 0 : _b2.area);
  }, []);
  return E.jsx(sT, { scope: r, searchRef: Ee, onItemEnter: d.useCallback((ne) => {
    oe(ne) && ne.preventDefault();
  }, [oe]), onItemLeave: d.useCallback((ne) => {
    var _a;
    oe(ne) || ((_a = V.current) == null ? void 0 : _a.focus(), J(null));
  }, [oe]), onTriggerLeave: d.useCallback((ne) => {
    oe(ne) && ne.preventDefault();
  }, [oe]), pointerGraceTimerRef: me, onPointerGraceIntentChange: d.useCallback((ne) => {
    ye.current = ne;
  }, []), children: E.jsx(Te, { ...K, children: E.jsx(rr, { asChild: true, trapped: s, onMountAutoFocus: W(f, (ne) => {
    var _a;
    ne.preventDefault(), (_a = V.current) == null ? void 0 : _a.focus({ preventScroll: true });
  }), onUnmountAutoFocus: v, children: E.jsx(kl, { asChild: true, disableOutsidePointerEvents: g, onEscapeKeyDown: m, onPointerDownOutside: S, onFocusOutside: h, onInteractOutside: A, onDismiss: w, children: E.jsx(hf, { asChild: true, ...L, dir: D.dir, orientation: "vertical", loop: c, currentTabStopId: $, onCurrentTabStopIdChange: J, onEntryFocus: W(y, (ne) => {
    D.isUsingKeyboardRef.current || ne.preventDefault();
  }), preventScrollOnEntryFocus: true, children: E.jsx(Qi, { role: "menu", "aria-orientation": "vertical", "data-state": Dg(T.open), "data-radix-menu-content": "", dir: D.dir, ...z, ...C, ref: ae, style: { outline: "none", ...C.style }, onKeyDown: W(C.onKeyDown, (ne) => {
    const _ = ne.target.closest("[data-radix-menu-content]") === ne.currentTarget, R = ne.ctrlKey || ne.altKey || ne.metaKey, B = ne.key.length === 1;
    _ && (ne.key === "Tab" && ne.preventDefault(), !R && B && te(ne.key));
    const I = V.current;
    if (ne.target !== I || !nT.includes(ne.key)) return;
    ne.preventDefault();
    const F = X().filter((q) => !q.disabled).map((q) => q.ref.current);
    ig.includes(ne.key) && F.reverse(), CT(F);
  }), onBlur: W(l.onBlur, (ne) => {
    ne.currentTarget.contains(ne.target) || (window.clearTimeout(ge.current), Ee.current = "");
  }), onPointerMove: W(l.onPointerMove, er((ne) => {
    const ve = ne.target, _ = xe.current !== ne.clientX;
    if (ne.currentTarget.contains(ve) && _) {
      const R = ne.clientX > xe.current ? "right" : "left";
      pe.current = R, xe.current = ne.clientX;
    }
  })) }) }) }) }) }) });
});
pg.displayName = en;
var vT = "MenuGroup", Cf = d.forwardRef((l, i) => {
  const { __scopeMenu: r, ...c } = l;
  return E.jsx(ce.div, { role: "group", ...c, ref: i });
});
Cf.displayName = vT;
var mT = "MenuLabel", vg = d.forwardRef((l, i) => {
  const { __scopeMenu: r, ...c } = l;
  return E.jsx(ce.div, { ...c, ref: i });
});
vg.displayName = mT;
var Hi = "MenuItem", hh = "menu.itemSelect", Fi = d.forwardRef((l, i) => {
  const { disabled: r = false, onSelect: c, ...s } = l, f = d.useRef(null), v = fr(Hi, l.__scopeMenu), g = Ef(Hi, l.__scopeMenu), y = Ce(i, f), m = d.useRef(false), S = () => {
    const h = f.current;
    if (!r && h) {
      const A = new CustomEvent(hh, { bubbles: true, cancelable: true });
      h.addEventListener(hh, (w) => c == null ? void 0 : c(w), { once: true }), Rh(h, A), A.defaultPrevented ? m.current = false : v.onClose();
    }
  };
  return E.jsx(mg, { ...s, ref: y, disabled: r, onClick: W(l.onClick, S), onPointerDown: (h) => {
    var _a;
    (_a = l.onPointerDown) == null ? void 0 : _a.call(l, h), m.current = true;
  }, onPointerUp: W(l.onPointerUp, (h) => {
    var _a;
    m.current || ((_a = h.currentTarget) == null ? void 0 : _a.click());
  }), onKeyDown: W(l.onKeyDown, (h) => {
    const A = g.searchRef.current !== "";
    r || A && h.key === " " || $s.includes(h.key) && (h.currentTarget.click(), h.preventDefault());
  }) });
});
Fi.displayName = Hi;
var mg = d.forwardRef((l, i) => {
  const { __scopeMenu: r, disabled: c = false, textValue: s, ...f } = l, v = Ef(Hi, r), g = ug(r), y = d.useRef(null), m = Ce(i, y), [S, h] = d.useState(false), [A, w] = d.useState("");
  return d.useEffect(() => {
    const O = y.current;
    O && w((O.textContent ?? "").trim());
  }, [f.children]), E.jsx(Wo.ItemSlot, { scope: r, disabled: c, textValue: s ?? A, children: E.jsx(gf, { asChild: true, ...g, focusable: !c, children: E.jsx(ce.div, { role: "menuitem", "data-highlighted": S ? "" : void 0, "aria-disabled": c || void 0, "data-disabled": c ? "" : void 0, ...f, ref: m, onPointerMove: W(l.onPointerMove, er((O) => {
    c ? v.onItemLeave(O) : (v.onItemEnter(O), O.defaultPrevented || O.currentTarget.focus({ preventScroll: true }));
  })), onPointerLeave: W(l.onPointerLeave, er((O) => v.onItemLeave(O))), onFocus: W(l.onFocus, () => h(true)), onBlur: W(l.onBlur, () => h(false)) }) }) });
}), hT = "MenuCheckboxItem", hg = d.forwardRef((l, i) => {
  const { checked: r = false, onCheckedChange: c, ...s } = l;
  return E.jsx(Eg, { scope: l.__scopeMenu, checked: r, children: E.jsx(Fi, { role: "menuitemcheckbox", "aria-checked": Li(r) ? "mixed" : r, ...s, ref: i, "data-state": Af(r), onSelect: W(s.onSelect, () => c == null ? void 0 : c(Li(r) ? true : !r), { checkForDefaultPrevented: false }) }) });
});
hg.displayName = hT;
var gg = "MenuRadioGroup", [gT, yT] = Wa(gg, { value: void 0, onValueChange: () => {
} }), yg = d.forwardRef((l, i) => {
  const { value: r, onValueChange: c, ...s } = l, f = cn(c);
  return E.jsx(gT, { scope: l.__scopeMenu, value: r, onValueChange: f, children: E.jsx(Cf, { ...s, ref: i }) });
});
yg.displayName = gg;
var bg = "MenuRadioItem", Sg = d.forwardRef((l, i) => {
  const { value: r, ...c } = l, s = yT(bg, l.__scopeMenu), f = r === s.value;
  return E.jsx(Eg, { scope: l.__scopeMenu, checked: f, children: E.jsx(Fi, { role: "menuitemradio", "aria-checked": f, ...c, ref: i, "data-state": Af(f), onSelect: W(c.onSelect, () => {
    var _a;
    return (_a = s.onValueChange) == null ? void 0 : _a.call(s, r);
  }, { checkForDefaultPrevented: false }) }) });
});
Sg.displayName = bg;
var Tf = "MenuItemIndicator", [Eg, bT] = Wa(Tf, { checked: false }), xg = d.forwardRef((l, i) => {
  const { __scopeMenu: r, forceMount: c, ...s } = l, f = bT(Tf, r);
  return E.jsx(Ut, { present: c || Li(f.checked) || f.checked === true, children: E.jsx(ce.span, { ...s, ref: i, "data-state": Af(f.checked) }) });
});
xg.displayName = Tf;
var ST = "MenuSeparator", Cg = d.forwardRef((l, i) => {
  const { __scopeMenu: r, ...c } = l;
  return E.jsx(ce.div, { role: "separator", "aria-orientation": "horizontal", ...c, ref: i });
});
Cg.displayName = ST;
var ET = "MenuArrow", Tg = d.forwardRef((l, i) => {
  const { __scopeMenu: r, ...c } = l, s = sr(r);
  return E.jsx(Pi, { ...s, ...c, ref: i });
});
Tg.displayName = ET;
var _f = "MenuSub", [xT, _g] = Wa(_f), Ag = (l) => {
  const { __scopeMenu: i, children: r, open: c = false, onOpenChange: s } = l, f = Ea(_f, i), v = sr(i), [g, y] = d.useState(null), [m, S] = d.useState(null), h = cn(s);
  return d.useEffect(() => (f.open === false && h(false), () => h(false)), [f.open, h]), E.jsx(Ki, { ...v, children: E.jsx(cg, { scope: i, open: c, onOpenChange: h, content: m, onContentChange: S, children: E.jsx(xT, { scope: i, contentId: Ke(), triggerId: Ke(), trigger: g, onTriggerChange: y, children: r }) }) });
};
Ag.displayName = _f;
var Jo = "MenuSubTrigger", Rg = d.forwardRef((l, i) => {
  const r = Ea(Jo, l.__scopeMenu), c = fr(Jo, l.__scopeMenu), s = _g(Jo, l.__scopeMenu), f = Ef(Jo, l.__scopeMenu), v = d.useRef(null), { pointerGraceTimerRef: g, onPointerGraceIntentChange: y } = f, m = { __scopeMenu: l.__scopeMenu }, S = d.useCallback(() => {
    v.current && window.clearTimeout(v.current), v.current = null;
  }, []);
  return d.useEffect(() => S, [S]), d.useEffect(() => {
    const h = g.current;
    return () => {
      window.clearTimeout(h), y(null);
    };
  }, [g, y]), E.jsx(bf, { asChild: true, ...m, children: E.jsx(mg, { id: s.triggerId, "aria-haspopup": "menu", "aria-expanded": r.open, "aria-controls": s.contentId, "data-state": Dg(r.open), ...l, ref: Sn(i, s.onTriggerChange), onClick: (h) => {
    var _a;
    (_a = l.onClick) == null ? void 0 : _a.call(l, h), !(l.disabled || h.defaultPrevented) && (h.currentTarget.focus(), r.open || r.onOpenChange(true));
  }, onPointerMove: W(l.onPointerMove, er((h) => {
    f.onItemEnter(h), !h.defaultPrevented && !l.disabled && !r.open && !v.current && (f.onPointerGraceIntentChange(null), v.current = window.setTimeout(() => {
      r.onOpenChange(true), S();
    }, 100));
  })), onPointerLeave: W(l.onPointerLeave, er((h) => {
    var _a, _b2;
    S();
    const A = (_a = r.content) == null ? void 0 : _a.getBoundingClientRect();
    if (A) {
      const w = (_b2 = r.content) == null ? void 0 : _b2.dataset.side, O = w === "right", C = O ? -5 : 5, T = A[O ? "left" : "right"], D = A[O ? "right" : "left"];
      f.onPointerGraceIntentChange({ area: [{ x: h.clientX + C, y: h.clientY }, { x: T, y: A.top }, { x: D, y: A.top }, { x: D, y: A.bottom }, { x: T, y: A.bottom }], side: w }), window.clearTimeout(g.current), g.current = window.setTimeout(() => f.onPointerGraceIntentChange(null), 300);
    } else {
      if (f.onTriggerLeave(h), h.defaultPrevented) return;
      f.onPointerGraceIntentChange(null);
    }
  })), onKeyDown: W(l.onKeyDown, (h) => {
    var _a;
    const A = f.searchRef.current !== "";
    l.disabled || A && h.key === " " || aT[c.dir].includes(h.key) && (r.onOpenChange(true), (_a = r.content) == null ? void 0 : _a.focus(), h.preventDefault());
  }) }) });
});
Rg.displayName = Jo;
var Mg = "MenuSubContent", wg = d.forwardRef((l, i) => {
  const r = fg(en, l.__scopeMenu), { forceMount: c = r.forceMount, ...s } = l, f = Ea(en, l.__scopeMenu), v = fr(en, l.__scopeMenu), g = _g(Mg, l.__scopeMenu), y = d.useRef(null), m = Ce(i, y);
  return E.jsx(Wo.Provider, { scope: l.__scopeMenu, children: E.jsx(Ut, { present: c || f.open, children: E.jsx(Wo.Slot, { scope: l.__scopeMenu, children: E.jsx(xf, { id: g.contentId, "aria-labelledby": g.triggerId, ...s, ref: m, align: "start", side: v.dir === "rtl" ? "left" : "right", disableOutsidePointerEvents: false, disableOutsideScroll: false, trapFocus: false, onOpenAutoFocus: (S) => {
    var _a;
    v.isUsingKeyboardRef.current && ((_a = y.current) == null ? void 0 : _a.focus()), S.preventDefault();
  }, onCloseAutoFocus: (S) => S.preventDefault(), onFocusOutside: W(l.onFocusOutside, (S) => {
    S.target !== g.trigger && f.onOpenChange(false);
  }), onEscapeKeyDown: W(l.onEscapeKeyDown, (S) => {
    v.onClose(), S.preventDefault();
  }), onKeyDown: W(l.onKeyDown, (S) => {
    var _a;
    const h = S.currentTarget.contains(S.target), A = lT[v.dir].includes(S.key);
    h && A && (f.onOpenChange(false), (_a = g.trigger) == null ? void 0 : _a.focus(), S.preventDefault());
  }) }) }) }) });
});
wg.displayName = Mg;
function Dg(l) {
  return l ? "open" : "closed";
}
function Li(l) {
  return l === "indeterminate";
}
function Af(l) {
  return Li(l) ? "indeterminate" : l ? "checked" : "unchecked";
}
function CT(l) {
  const i = document.activeElement;
  for (const r of l) if (r === i || (r.focus(), document.activeElement !== i)) return;
}
function TT(l, i) {
  return l.map((r, c) => l[(i + c) % l.length]);
}
function _T(l, i, r) {
  const s = i.length > 1 && Array.from(i).every((m) => m === i[0]) ? i[0] : i, f = r ? l.indexOf(r) : -1;
  let v = TT(l, Math.max(f, 0));
  s.length === 1 && (v = v.filter((m) => m !== r));
  const y = v.find((m) => m.toLowerCase().startsWith(s.toLowerCase()));
  return y !== r ? y : void 0;
}
function AT(l, i) {
  const { x: r, y: c } = l;
  let s = false;
  for (let f = 0, v = i.length - 1; f < i.length; v = f++) {
    const g = i[f], y = i[v], m = g.x, S = g.y, h = y.x, A = y.y;
    S > c != A > c && r < (h - m) * (c - S) / (A - S) + m && (s = !s);
  }
  return s;
}
function RT(l, i) {
  if (!i) return false;
  const r = { x: l.clientX, y: l.clientY };
  return AT(r, i);
}
function er(l) {
  return (i) => i.pointerType === "mouse" ? l(i) : void 0;
}
var Og = sg, Ng = bf, zg = dg, jg = pg, Ug = Cf, Bg = vg, Hg = Fi, Lg = hg, Gg = yg, Yg = Sg, Vg = xg, qg = Cg, Ig = Tg, MT = Ag, Xg = Rg, Kg = wg, dr = "Menubar", [Js, wT, DT] = or(dr), [Qg] = ht(dr, [DT, Jl]), gt = yf(), Pg = Jl(), [OT, Rf] = Qg(dr), Zg = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, value: c, onValueChange: s, defaultValue: f, loop: v = true, dir: g, ...y } = l, m = $l(g), S = Pg(r), [h, A] = jt({ prop: c, onChange: s, defaultProp: f ?? "", caller: dr }), [w, O] = d.useState(null);
  return E.jsx(OT, { scope: r, value: h, onMenuOpen: d.useCallback((C) => {
    A(C), O(C);
  }, [A]), onMenuClose: d.useCallback(() => A(""), [A]), onMenuToggle: d.useCallback((C) => {
    A((T) => T ? "" : C), O(C);
  }, [A]), dir: m, loop: v, children: E.jsx(Js.Provider, { scope: r, children: E.jsx(Js.Slot, { scope: r, children: E.jsx(hf, { asChild: true, ...S, orientation: "horizontal", loop: v, dir: m, currentTabStopId: w, onCurrentTabStopIdChange: O, children: E.jsx(ce.div, { role: "menubar", ...y, ref: i }) }) }) }) });
});
Zg.displayName = dr;
var Mf = "MenubarMenu", [NT, kg] = Qg(Mf), $g = (l) => {
  const { __scopeMenubar: i, value: r, ...c } = l, s = Ke(), f = r || s || "LEGACY_REACT_AUTO_VALUE", v = Rf(Mf, i), g = gt(i), y = d.useRef(null), m = d.useRef(false), S = v.value === f;
  return d.useEffect(() => {
    S || (m.current = false);
  }, [S]), E.jsx(NT, { scope: i, value: f, triggerId: Ke(), triggerRef: y, contentId: Ke(), wasKeyboardTriggerOpenRef: m, children: E.jsx(Og, { ...g, open: S, onOpenChange: (h) => {
    h || v.onMenuClose();
  }, modal: false, dir: v.dir, ...c }) });
};
$g.displayName = Mf;
var Fs = "MenubarTrigger", Jg = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, disabled: c = false, ...s } = l, f = Pg(r), v = gt(r), g = Rf(Fs, r), y = kg(Fs, r), m = d.useRef(null), S = Ce(i, m, y.triggerRef), [h, A] = d.useState(false), w = g.value === y.value;
  return E.jsx(Js.ItemSlot, { scope: r, value: y.value, disabled: c, children: E.jsx(gf, { asChild: true, ...f, focusable: !c, tabStopId: y.value, children: E.jsx(Ng, { asChild: true, ...v, children: E.jsx(ce.button, { type: "button", role: "menuitem", id: y.triggerId, "aria-haspopup": "menu", "aria-expanded": w, "aria-controls": w ? y.contentId : void 0, "data-highlighted": h ? "" : void 0, "data-state": w ? "open" : "closed", "data-disabled": c ? "" : void 0, disabled: c, ...s, ref: S, onPointerDown: W(l.onPointerDown, (O) => {
    !c && O.button === 0 && O.ctrlKey === false && (g.onMenuOpen(y.value), w || O.preventDefault());
  }), onPointerEnter: W(l.onPointerEnter, () => {
    var _a;
    g.value && !w && (g.onMenuOpen(y.value), (_a = m.current) == null ? void 0 : _a.focus());
  }), onKeyDown: W(l.onKeyDown, (O) => {
    c || (["Enter", " "].includes(O.key) && g.onMenuToggle(y.value), O.key === "ArrowDown" && g.onMenuOpen(y.value), ["Enter", " ", "ArrowDown"].includes(O.key) && (y.wasKeyboardTriggerOpenRef.current = true, O.preventDefault()));
  }), onFocus: W(l.onFocus, () => A(true)), onBlur: W(l.onBlur, () => A(false)) }) }) }) });
});
Jg.displayName = Fs;
var zT = "MenubarPortal", Fg = (l) => {
  const { __scopeMenubar: i, ...r } = l, c = gt(i);
  return E.jsx(zg, { ...c, ...r });
};
Fg.displayName = zT;
var Ws = "MenubarContent", Wg = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, align: c = "start", ...s } = l, f = gt(r), v = Rf(Ws, r), g = kg(Ws, r), y = wT(r), m = d.useRef(false);
  return E.jsx(jg, { id: g.contentId, "aria-labelledby": g.triggerId, "data-radix-menubar-content": "", ...f, ...s, ref: i, align: c, onCloseAutoFocus: W(l.onCloseAutoFocus, (S) => {
    var _a;
    !v.value && !m.current && ((_a = g.triggerRef.current) == null ? void 0 : _a.focus()), m.current = false, S.preventDefault();
  }), onFocusOutside: W(l.onFocusOutside, (S) => {
    const h = S.target;
    y().some((w) => {
      var _a;
      return (_a = w.ref.current) == null ? void 0 : _a.contains(h);
    }) && S.preventDefault();
  }), onInteractOutside: W(l.onInteractOutside, () => {
    m.current = true;
  }), onEntryFocus: (S) => {
    g.wasKeyboardTriggerOpenRef.current || S.preventDefault();
  }, onKeyDown: W(l.onKeyDown, (S) => {
    if (["ArrowRight", "ArrowLeft"].includes(S.key)) {
      const h = S.target, A = h.hasAttribute("data-radix-menubar-subtrigger"), w = h.closest("[data-radix-menubar-content]") !== S.currentTarget, C = (v.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === S.key;
      if (!C && A || w && C) return;
      let z = y().filter(($) => !$.disabled).map(($) => $.value);
      C && z.reverse();
      const L = z.indexOf(g.value);
      z = v.loop ? ZT(z, L + 1) : z.slice(L + 1);
      const [X] = z;
      X && v.onMenuOpen(X);
    }
  }, { checkForDefaultPrevented: false }), style: { ...l.style, "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-menubar-content-available-width": "var(--radix-popper-available-width)", "--radix-menubar-content-available-height": "var(--radix-popper-available-height)", "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)", "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)" } });
});
Wg.displayName = Ws;
var jT = "MenubarGroup", UT = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...c } = l, s = gt(r);
  return E.jsx(Ug, { ...s, ...c, ref: i });
});
UT.displayName = jT;
var BT = "MenubarLabel", HT = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...c } = l, s = gt(r);
  return E.jsx(Bg, { ...s, ...c, ref: i });
});
HT.displayName = BT;
var LT = "MenubarItem", ey = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...c } = l, s = gt(r);
  return E.jsx(Hg, { ...s, ...c, ref: i });
});
ey.displayName = LT;
var GT = "MenubarCheckboxItem", ty = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...c } = l, s = gt(r);
  return E.jsx(Lg, { ...s, ...c, ref: i });
});
ty.displayName = GT;
var YT = "MenubarRadioGroup", ny = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...c } = l, s = gt(r);
  return E.jsx(Gg, { ...s, ...c, ref: i });
});
ny.displayName = YT;
var VT = "MenubarRadioItem", ay = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...c } = l, s = gt(r);
  return E.jsx(Yg, { ...s, ...c, ref: i });
});
ay.displayName = VT;
var qT = "MenubarItemIndicator", ly = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...c } = l, s = gt(r);
  return E.jsx(Vg, { ...s, ...c, ref: i });
});
ly.displayName = qT;
var IT = "MenubarSeparator", oy = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...c } = l, s = gt(r);
  return E.jsx(qg, { ...s, ...c, ref: i });
});
oy.displayName = IT;
var XT = "MenubarArrow", KT = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...c } = l, s = gt(r);
  return E.jsx(Ig, { ...s, ...c, ref: i });
});
KT.displayName = XT;
var ry = "MenubarSub", iy = (l) => {
  const { __scopeMenubar: i, children: r, open: c, onOpenChange: s, defaultOpen: f } = l, v = gt(i), [g, y] = jt({ prop: c, defaultProp: f ?? false, onChange: s, caller: ry });
  return E.jsx(MT, { ...v, open: g, onOpenChange: y, children: r });
};
iy.displayName = ry;
var QT = "MenubarSubTrigger", uy = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...c } = l, s = gt(r);
  return E.jsx(Xg, { "data-radix-menubar-subtrigger": "", ...s, ...c, ref: i });
});
uy.displayName = QT;
var PT = "MenubarSubContent", cy = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...c } = l, s = gt(r);
  return E.jsx(Kg, { ...s, "data-radix-menubar-content": "", ...c, ref: i, style: { ...l.style, "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-menubar-content-available-width": "var(--radix-popper-available-width)", "--radix-menubar-content-available-height": "var(--radix-popper-available-height)", "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)", "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)" } });
});
cy.displayName = PT;
function ZT(l, i) {
  return l.map((r, c) => l[(i + c) % l.length]);
}
var QR = Zg, PR = $g, ZR = Jg, kR = Fg, $R = Wg, JR = ey, FR = ty, WR = ny, eM = ay, tM = ly, nM = oy, aM = iy, lM = uy, oM = cy, kT = /* @__PURE__ */ Symbol.for("react.lazy"), Gi = ff[" use ".trim().toString()];
function $T(l) {
  return typeof l == "object" && l !== null && "then" in l;
}
function sy(l) {
  return l != null && typeof l == "object" && "$$typeof" in l && l.$$typeof === kT && "_payload" in l && $T(l._payload);
}
function fy(l) {
  const i = JT(l), r = d.forwardRef((c, s) => {
    let { children: f, ...v } = c;
    sy(f) && typeof Gi == "function" && (f = Gi(f._payload));
    const g = d.Children.toArray(f), y = g.find(WT);
    if (y) {
      const m = y.props.children, S = g.map((h) => h === y ? d.Children.count(m) > 1 ? d.Children.only(null) : d.isValidElement(m) ? m.props.children : null : h);
      return E.jsx(i, { ...v, ref: s, children: d.isValidElement(m) ? d.cloneElement(m, void 0, S) : null });
    }
    return E.jsx(i, { ...v, ref: s, children: f });
  });
  return r.displayName = `${l}.Slot`, r;
}
var rM = fy("Slot");
function JT(l) {
  const i = d.forwardRef((r, c) => {
    let { children: s, ...f } = r;
    if (sy(s) && typeof Gi == "function" && (s = Gi(s._payload)), d.isValidElement(s)) {
      const v = t_(s), g = e_(f, s.props);
      return s.type !== d.Fragment && (g.ref = c ? Sn(c, v) : v), d.cloneElement(s, g);
    }
    return d.Children.count(s) > 1 ? d.Children.only(null) : null;
  });
  return i.displayName = `${l}.SlotClone`, i;
}
var FT = /* @__PURE__ */ Symbol("radix.slottable");
function WT(l) {
  return d.isValidElement(l) && typeof l.type == "function" && "__radixId" in l.type && l.type.__radixId === FT;
}
function e_(l, i) {
  const r = { ...i };
  for (const c in i) {
    const s = l[c], f = i[c];
    /^on[A-Z]/.test(c) ? s && f ? r[c] = (...g) => {
      const y = f(...g);
      return s(...g), y;
    } : s && (r[c] = s) : c === "style" ? r[c] = { ...s, ...f } : c === "className" && (r[c] = [s, f].filter(Boolean).join(" "));
  }
  return { ...l, ...r };
}
function t_(l) {
  var _a, _b2;
  let i = (_a = Object.getOwnPropertyDescriptor(l.props, "ref")) == null ? void 0 : _a.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? l.ref : (i = (_b2 = Object.getOwnPropertyDescriptor(l, "ref")) == null ? void 0 : _b2.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? l.props.ref : l.props.ref || l.ref);
}
var Wi = "Dialog", [dy, py] = ht(Wi), [n_, sn] = dy(Wi), vy = (l) => {
  const { __scopeDialog: i, children: r, open: c, defaultOpen: s, onOpenChange: f, modal: v = true } = l, g = d.useRef(null), y = d.useRef(null), [m, S] = jt({ prop: c, defaultProp: s ?? false, onChange: f, caller: Wi });
  return E.jsx(n_, { scope: i, triggerRef: g, contentRef: y, contentId: Ke(), titleId: Ke(), descriptionId: Ke(), open: m, onOpenChange: S, onOpenToggle: d.useCallback(() => S((h) => !h), [S]), modal: v, children: r });
};
vy.displayName = Wi;
var my = "DialogTrigger", hy = d.forwardRef((l, i) => {
  const { __scopeDialog: r, ...c } = l, s = sn(my, r), f = Ce(i, s.triggerRef);
  return E.jsx(ce.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": s.open, "aria-controls": s.contentId, "data-state": Of(s.open), ...c, ref: f, onClick: W(l.onClick, s.onOpenToggle) });
});
hy.displayName = my;
var wf = "DialogPortal", [a_, gy] = dy(wf, { forceMount: void 0 }), yy = (l) => {
  const { __scopeDialog: i, forceMount: r, children: c, container: s } = l, f = sn(wf, i);
  return E.jsx(a_, { scope: i, forceMount: r, children: d.Children.map(c, (v) => E.jsx(Ut, { present: r || f.open, children: E.jsx(lr, { asChild: true, container: s, children: v }) })) });
};
yy.displayName = wf;
var Yi = "DialogOverlay", by = d.forwardRef((l, i) => {
  const r = gy(Yi, l.__scopeDialog), { forceMount: c = r.forceMount, ...s } = l, f = sn(Yi, l.__scopeDialog);
  return f.modal ? E.jsx(Ut, { present: c || f.open, children: E.jsx(o_, { ...s, ref: i }) }) : null;
});
by.displayName = Yi;
var l_ = Pa("DialogOverlay.RemoveScroll"), o_ = d.forwardRef((l, i) => {
  const { __scopeDialog: r, ...c } = l, s = sn(Yi, r);
  return E.jsx(ur, { as: l_, allowPinchZoom: true, shards: [s.contentRef], children: E.jsx(ce.div, { "data-state": Of(s.open), ...c, ref: i, style: { pointerEvents: "auto", ...c.style } }) });
}), Za = "DialogContent", Sy = d.forwardRef((l, i) => {
  const r = gy(Za, l.__scopeDialog), { forceMount: c = r.forceMount, ...s } = l, f = sn(Za, l.__scopeDialog);
  return E.jsx(Ut, { present: c || f.open, children: f.modal ? E.jsx(r_, { ...s, ref: i }) : E.jsx(i_, { ...s, ref: i }) });
});
Sy.displayName = Za;
var r_ = d.forwardRef((l, i) => {
  const r = sn(Za, l.__scopeDialog), c = d.useRef(null), s = Ce(i, r.contentRef, c);
  return d.useEffect(() => {
    const f = c.current;
    if (f) return Xi(f);
  }, []), E.jsx(Ey, { ...l, ref: s, trapFocus: r.open, disableOutsidePointerEvents: true, onCloseAutoFocus: W(l.onCloseAutoFocus, (f) => {
    var _a;
    f.preventDefault(), (_a = r.triggerRef.current) == null ? void 0 : _a.focus();
  }), onPointerDownOutside: W(l.onPointerDownOutside, (f) => {
    const v = f.detail.originalEvent, g = v.button === 0 && v.ctrlKey === true;
    (v.button === 2 || g) && f.preventDefault();
  }), onFocusOutside: W(l.onFocusOutside, (f) => f.preventDefault()) });
}), i_ = d.forwardRef((l, i) => {
  const r = sn(Za, l.__scopeDialog), c = d.useRef(false), s = d.useRef(false);
  return E.jsx(Ey, { ...l, ref: i, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (f) => {
    var _a, _b2;
    (_a = l.onCloseAutoFocus) == null ? void 0 : _a.call(l, f), f.defaultPrevented || (c.current || ((_b2 = r.triggerRef.current) == null ? void 0 : _b2.focus()), f.preventDefault()), c.current = false, s.current = false;
  }, onInteractOutside: (f) => {
    var _a, _b2;
    (_a = l.onInteractOutside) == null ? void 0 : _a.call(l, f), f.defaultPrevented || (c.current = true, f.detail.originalEvent.type === "pointerdown" && (s.current = true));
    const v = f.target;
    ((_b2 = r.triggerRef.current) == null ? void 0 : _b2.contains(v)) && f.preventDefault(), f.detail.originalEvent.type === "focusin" && s.current && f.preventDefault();
  } });
}), Ey = d.forwardRef((l, i) => {
  const { __scopeDialog: r, trapFocus: c, onOpenAutoFocus: s, onCloseAutoFocus: f, ...v } = l, g = sn(Za, r), y = d.useRef(null), m = Ce(i, y);
  return $i(), E.jsxs(E.Fragment, { children: [E.jsx(rr, { asChild: true, loop: true, trapped: c, onMountAutoFocus: s, onUnmountAutoFocus: f, children: E.jsx(kl, { role: "dialog", id: g.contentId, "aria-describedby": g.descriptionId, "aria-labelledby": g.titleId, "data-state": Of(g.open), ...v, ref: m, onDismiss: () => g.onOpenChange(false) }) }), E.jsxs(E.Fragment, { children: [E.jsx(c_, { titleId: g.titleId }), E.jsx(f_, { contentRef: y, descriptionId: g.descriptionId })] })] });
}), Df = "DialogTitle", xy = d.forwardRef((l, i) => {
  const { __scopeDialog: r, ...c } = l, s = sn(Df, r);
  return E.jsx(ce.h2, { id: s.titleId, ...c, ref: i });
});
xy.displayName = Df;
var Cy = "DialogDescription", Ty = d.forwardRef((l, i) => {
  const { __scopeDialog: r, ...c } = l, s = sn(Cy, r);
  return E.jsx(ce.p, { id: s.descriptionId, ...c, ref: i });
});
Ty.displayName = Cy;
var _y = "DialogClose", Ay = d.forwardRef((l, i) => {
  const { __scopeDialog: r, ...c } = l, s = sn(_y, r);
  return E.jsx(ce.button, { type: "button", ...c, ref: i, onClick: W(l.onClick, () => s.onOpenChange(false)) });
});
Ay.displayName = _y;
function Of(l) {
  return l ? "open" : "closed";
}
var Ry = "DialogTitleWarning", [u_, My] = kE(Ry, { contentName: Za, titleName: Df, docsSlug: "dialog" }), c_ = ({ titleId: l }) => {
  const i = My(Ry), r = `\`${i.contentName}\` requires a \`${i.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${i.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${i.docsSlug}`;
  return d.useEffect(() => {
    l && (document.getElementById(l) || console.error(r));
  }, [r, l]), null;
}, s_ = "DialogDescriptionWarning", f_ = ({ contentRef: l, descriptionId: i }) => {
  const c = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${My(s_).contentName}}.`;
  return d.useEffect(() => {
    var _a;
    const s = (_a = l.current) == null ? void 0 : _a.getAttribute("aria-describedby");
    i && s && (document.getElementById(i) || console.warn(c));
  }, [c, l, i]), null;
}, wy = vy, d_ = hy, Dy = yy, Oy = by, Ny = Sy, p_ = xy, v_ = Ty, zy = Ay, m_ = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], Vn = m_.reduce((l, i) => {
  const r = fy(`Primitive.${i}`), c = d.forwardRef((s, f) => {
    const { asChild: v, ...g } = s, y = v ? r : i;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), E.jsx(y, { ...g, ref: f });
  });
  return c.displayName = `Primitive.${i}`, { ...l, [i]: c };
}, {}), jy = "AlertDialog", [h_] = ht(jy, [py]), qn = py(), Uy = (l) => {
  const { __scopeAlertDialog: i, ...r } = l, c = qn(i);
  return E.jsx(wy, { ...c, ...r, modal: true });
};
Uy.displayName = jy;
var g_ = "AlertDialogTrigger", By = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, ...c } = l, s = qn(r);
  return E.jsx(d_, { ...s, ...c, ref: i });
});
By.displayName = g_;
var y_ = "AlertDialogPortal", Hy = (l) => {
  const { __scopeAlertDialog: i, ...r } = l, c = qn(i);
  return E.jsx(Dy, { ...c, ...r });
};
Hy.displayName = y_;
var b_ = "AlertDialogOverlay", Ly = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, ...c } = l, s = qn(r);
  return E.jsx(Oy, { ...s, ...c, ref: i });
});
Ly.displayName = b_;
var Ql = "AlertDialogContent", [S_, E_] = h_(Ql), x_ = Ah("AlertDialogContent"), Gy = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, children: c, ...s } = l, f = qn(r), v = d.useRef(null), g = Ce(i, v), y = d.useRef(null);
  return E.jsx(u_, { contentName: Ql, titleName: Yy, docsSlug: "alert-dialog", children: E.jsx(S_, { scope: r, cancelRef: y, children: E.jsxs(Ny, { role: "alertdialog", ...f, ...s, ref: g, onOpenAutoFocus: W(s.onOpenAutoFocus, (m) => {
    var _a;
    m.preventDefault(), (_a = y.current) == null ? void 0 : _a.focus({ preventScroll: true });
  }), onPointerDownOutside: (m) => m.preventDefault(), onInteractOutside: (m) => m.preventDefault(), children: [E.jsx(x_, { children: c }), E.jsx(T_, { contentRef: v })] }) }) });
});
Gy.displayName = Ql;
var Yy = "AlertDialogTitle", Vy = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, ...c } = l, s = qn(r);
  return E.jsx(p_, { ...s, ...c, ref: i });
});
Vy.displayName = Yy;
var qy = "AlertDialogDescription", Iy = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, ...c } = l, s = qn(r);
  return E.jsx(v_, { ...s, ...c, ref: i });
});
Iy.displayName = qy;
var C_ = "AlertDialogAction", Xy = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, ...c } = l, s = qn(r);
  return E.jsx(zy, { ...s, ...c, ref: i });
});
Xy.displayName = C_;
var Ky = "AlertDialogCancel", Qy = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, ...c } = l, { cancelRef: s } = E_(Ky, r), f = qn(r), v = Ce(i, s);
  return E.jsx(zy, { ...f, ...c, ref: v });
});
Qy.displayName = Ky;
var T_ = ({ contentRef: l }) => {
  const i = `\`${Ql}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Ql}\` by passing a \`${qy}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Ql}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return d.useEffect(() => {
    var _a;
    document.getElementById((_a = l.current) == null ? void 0 : _a.getAttribute("aria-describedby")) || console.warn(i);
  }, [i, l]), null;
}, iM = Uy, uM = By, cM = Hy, sM = Ly, fM = Gy, dM = Xy, pM = Qy, vM = Vy, mM = Iy;
const ef = {}, Nf = (l) => typeof l == "object" && l !== null, __ = (l) => Nf(l) && !zf.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer) && !(l instanceof Promise), Py = (l, i) => {
  const r = gh.get(l);
  if ((r == null ? void 0 : r[0]) === i) return r[1];
  const c = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
  return Lm(c, true), gh.set(l, [i, c]), Reflect.ownKeys(l).forEach((s) => {
    if (Object.getOwnPropertyDescriptor(c, s)) return;
    const f = Reflect.get(l, s), { enumerable: v } = Reflect.getOwnPropertyDescriptor(l, s), g = { value: f, enumerable: v, configurable: true };
    if (zf.has(f)) Lm(f, false);
    else if (ka.has(f)) {
      const [y, m] = ka.get(f);
      g.value = Py(y, m());
    }
    Object.defineProperty(c, s, g);
  }), Object.preventExtensions(c);
}, A_ = (l, i, r, c) => ({ deleteProperty(s, f) {
  Reflect.get(s, f), r(f);
  const v = Reflect.deleteProperty(s, f);
  return v && c(void 0), v;
}, set(s, f, v, g) {
  const y = !l() && Reflect.has(s, f), m = Reflect.get(s, f, g);
  if (y && (yh(m, v) || Vi.has(v) && yh(m, Vi.get(v)))) return true;
  r(f), Nf(v) && (v = eE(v) || v);
  const S = !ka.has(v) && M_(v) ? O_(v) : v;
  return i(f, S), Reflect.set(s, f, S, g), c(void 0), true;
} }), ka = /* @__PURE__ */ new WeakMap(), zf = /* @__PURE__ */ new WeakSet(), gh = /* @__PURE__ */ new WeakMap(), Ys = [1], Vi = /* @__PURE__ */ new WeakMap();
let yh = Object.is, R_ = (l, i) => new Proxy(l, i), M_ = __, w_ = Py, D_ = A_;
function O_(l = {}) {
  if (!Nf(l)) throw new Error("object required");
  const i = Vi.get(l);
  if (i) return i;
  let r = Ys[0];
  const c = /* @__PURE__ */ new Set(), s = (T, D = ++Ys[0]) => {
    r !== D && (f = r = D, c.forEach((z) => z(T, D)));
  };
  let f = r;
  const v = (T = Ys[0]) => (f !== T && (f = T, y.forEach(([D]) => {
    const z = D[1](T);
    z > r && (r = z);
  })), r), g = (T) => (D, z) => {
    let L;
    D && (L = [...D], L[1] = [T, ...L[1]]), s(L, z);
  }, y = /* @__PURE__ */ new Map(), m = (T, D) => {
    const z = !zf.has(D) && ka.get(D);
    if (z) {
      if ((ef ? "production" : void 0) !== "production" && y.has(T)) throw new Error("prop listener already exists");
      if (c.size) {
        const L = z[2](g(T));
        y.set(T, [z, L]);
      } else y.set(T, [z]);
    }
  }, S = (T) => {
    var D;
    const z = y.get(T);
    z && (y.delete(T), (D = z[1]) == null || D.call(z));
  }, h = (T) => (c.add(T), c.size === 1 && y.forEach(([z, L], X) => {
    if ((ef ? "production" : void 0) !== "production" && L) throw new Error("remove already exists");
    const $ = z[2](g(X));
    y.set(X, [z, $]);
  }), () => {
    c.delete(T), c.size === 0 && y.forEach(([z, L], X) => {
      L && (L(), y.set(X, [z]));
    });
  });
  let A = true;
  const w = D_(() => A, m, S, s), O = R_(l, w);
  Vi.set(l, O);
  const C = [l, v, h];
  return ka.set(O, C), Reflect.ownKeys(l).forEach((T) => {
    const D = Object.getOwnPropertyDescriptor(l, T);
    "value" in D && D.writable && (O[T] = l[T]);
  }), A = false, O;
}
function hM(l) {
  const i = ka.get(l);
  return i == null ? void 0 : i[1]();
}
function gM(l) {
  const i = ka.get(l);
  (ef ? "production" : void 0) !== "production" && !i && console.warn("Please use proxy object");
  const [r, c] = i;
  return w_(r, c());
}
var eu = "Tabs", [N_] = ht(eu, [Jl]), Zy = Jl(), [z_, jf] = N_(eu), ky = d.forwardRef((l, i) => {
  const { __scopeTabs: r, value: c, onValueChange: s, defaultValue: f, orientation: v = "horizontal", dir: g, activationMode: y = "automatic", ...m } = l, S = $l(g), [h, A] = jt({ prop: c, onChange: s, defaultProp: f ?? "", caller: eu });
  return E.jsx(z_, { scope: r, baseId: Ke(), value: h, onValueChange: A, orientation: v, dir: S, activationMode: y, children: E.jsx(ce.div, { dir: S, "data-orientation": v, ...m, ref: i }) });
});
ky.displayName = eu;
var $y = "TabsList", Jy = d.forwardRef((l, i) => {
  const { __scopeTabs: r, loop: c = true, ...s } = l, f = jf($y, r), v = Zy(r);
  return E.jsx(hf, { asChild: true, ...v, orientation: f.orientation, dir: f.dir, loop: c, children: E.jsx(ce.div, { role: "tablist", "aria-orientation": f.orientation, ...s, ref: i }) });
});
Jy.displayName = $y;
var Fy = "TabsTrigger", Wy = d.forwardRef((l, i) => {
  const { __scopeTabs: r, value: c, disabled: s = false, ...f } = l, v = jf(Fy, r), g = Zy(r), y = n0(v.baseId, c), m = a0(v.baseId, c), S = c === v.value;
  return E.jsx(gf, { asChild: true, ...g, focusable: !s, active: S, children: E.jsx(ce.button, { type: "button", role: "tab", "aria-selected": S, "aria-controls": m, "data-state": S ? "active" : "inactive", "data-disabled": s ? "" : void 0, disabled: s, id: y, ...f, ref: i, onMouseDown: W(l.onMouseDown, (h) => {
    !s && h.button === 0 && h.ctrlKey === false ? v.onValueChange(c) : h.preventDefault();
  }), onKeyDown: W(l.onKeyDown, (h) => {
    [" ", "Enter"].includes(h.key) && v.onValueChange(c);
  }), onFocus: W(l.onFocus, () => {
    const h = v.activationMode !== "manual";
    !S && !s && h && v.onValueChange(c);
  }) }) });
});
Wy.displayName = Fy;
var e0 = "TabsContent", t0 = d.forwardRef((l, i) => {
  const { __scopeTabs: r, value: c, forceMount: s, children: f, ...v } = l, g = jf(e0, r), y = n0(g.baseId, c), m = a0(g.baseId, c), S = c === g.value, h = d.useRef(S);
  return d.useEffect(() => {
    const A = requestAnimationFrame(() => h.current = false);
    return () => cancelAnimationFrame(A);
  }, []), E.jsx(Ut, { present: s || S, children: ({ present: A }) => E.jsx(ce.div, { "data-state": S ? "active" : "inactive", "data-orientation": g.orientation, role: "tabpanel", "aria-labelledby": y, hidden: !A, id: m, tabIndex: 0, ...v, ref: i, style: { ...l.style, animationDuration: h.current ? "0s" : void 0 }, children: A && f }) });
});
t0.displayName = e0;
function n0(l, i) {
  return `${l}-trigger-${i}`;
}
function a0(l, i) {
  return `${l}-content-${i}`;
}
var yM = ky, bM = Jy, SM = Wy, EM = t0, j_ = "Label", l0 = d.forwardRef((l, i) => E.jsx(Vn.label, { ...l, ref: i, onMouseDown: (r) => {
  var _a;
  r.target.closest("button, input, select, textarea") || ((_a = l.onMouseDown) == null ? void 0 : _a.call(l, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
} }));
l0.displayName = j_;
var xM = l0;
function Uf(l) {
  const i = d.useRef({ value: l, previous: l });
  return d.useMemo(() => (i.current.value !== l && (i.current.previous = i.current.value, i.current.value = l), i.current.previous), [l]);
}
var tu = "Checkbox", [U_] = ht(tu), [B_, Bf] = U_(tu);
function H_(l) {
  const { __scopeCheckbox: i, checked: r, children: c, defaultChecked: s, disabled: f, form: v, name: g, onCheckedChange: y, required: m, value: S = "on", internal_do_not_use_render: h } = l, [A, w] = jt({ prop: r, defaultProp: s ?? false, onChange: y, caller: tu }), [O, C] = d.useState(null), [T, D] = d.useState(null), z = d.useRef(false), L = O ? !!v || !!O.closest("form") : true, X = { checked: A, disabled: f, setChecked: w, control: O, setControl: C, name: g, form: v, value: S, hasConsumerStoppedPropagationRef: z, required: m, defaultChecked: ya(s) ? false : s, isFormControl: L, bubbleInput: T, setBubbleInput: D };
  return E.jsx(B_, { scope: i, ...X, children: Y_(h) ? h(X) : c });
}
var o0 = "CheckboxTrigger", r0 = d.forwardRef(({ __scopeCheckbox: l, onKeyDown: i, onClick: r, ...c }, s) => {
  const { control: f, value: v, disabled: g, checked: y, required: m, setControl: S, setChecked: h, hasConsumerStoppedPropagationRef: A, isFormControl: w, bubbleInput: O } = Bf(o0, l), C = Ce(s, S), T = d.useRef(y);
  return d.useEffect(() => {
    const D = f == null ? void 0 : f.form;
    if (D) {
      const z = () => h(T.current);
      return D.addEventListener("reset", z), () => D.removeEventListener("reset", z);
    }
  }, [f, h]), E.jsx(ce.button, { type: "button", role: "checkbox", "aria-checked": ya(y) ? "mixed" : y, "aria-required": m, "data-state": s0(y), "data-disabled": g ? "" : void 0, disabled: g, value: v, ...c, ref: C, onKeyDown: W(i, (D) => {
    D.key === "Enter" && D.preventDefault();
  }), onClick: W(r, (D) => {
    h((z) => ya(z) ? true : !z), O && w && (A.current = D.isPropagationStopped(), A.current || D.stopPropagation());
  }) });
});
r0.displayName = o0;
var L_ = d.forwardRef((l, i) => {
  const { __scopeCheckbox: r, name: c, checked: s, defaultChecked: f, required: v, disabled: g, value: y, onCheckedChange: m, form: S, ...h } = l;
  return E.jsx(H_, { __scopeCheckbox: r, checked: s, defaultChecked: f, disabled: g, required: v, onCheckedChange: m, name: c, form: S, value: y, internal_do_not_use_render: ({ isFormControl: A }) => E.jsxs(E.Fragment, { children: [E.jsx(r0, { ...h, ref: i, __scopeCheckbox: r }), A && E.jsx(c0, { __scopeCheckbox: r })] }) });
});
L_.displayName = tu;
var i0 = "CheckboxIndicator", G_ = d.forwardRef((l, i) => {
  const { __scopeCheckbox: r, forceMount: c, ...s } = l, f = Bf(i0, r);
  return E.jsx(Ut, { present: c || ya(f.checked) || f.checked === true, children: E.jsx(ce.span, { "data-state": s0(f.checked), "data-disabled": f.disabled ? "" : void 0, ...s, ref: i, style: { pointerEvents: "none", ...l.style } }) });
});
G_.displayName = i0;
var u0 = "CheckboxBubbleInput", c0 = d.forwardRef(({ __scopeCheckbox: l, ...i }, r) => {
  const { control: c, hasConsumerStoppedPropagationRef: s, checked: f, defaultChecked: v, required: g, disabled: y, name: m, value: S, form: h, bubbleInput: A, setBubbleInput: w } = Bf(u0, l), O = Ce(r, w), C = Uf(f), T = df(c);
  d.useEffect(() => {
    const z = A;
    if (!z) return;
    const L = window.HTMLInputElement.prototype, $ = Object.getOwnPropertyDescriptor(L, "checked").set, J = !s.current;
    if (C !== f && $) {
      const V = new Event("click", { bubbles: J });
      z.indeterminate = ya(f), $.call(z, ya(f) ? false : f), z.dispatchEvent(V);
    }
  }, [A, C, f, s]);
  const D = d.useRef(ya(f) ? false : f);
  return E.jsx(ce.input, { type: "checkbox", "aria-hidden": true, defaultChecked: v ?? D.current, required: g, disabled: y, name: m, value: S, form: h, ...i, tabIndex: -1, ref: O, style: { ...i.style, ...T, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0, transform: "translateX(-100%)" } });
});
c0.displayName = u0;
function Y_(l) {
  return typeof l == "function";
}
function ya(l) {
  return l === "indeterminate";
}
function s0(l) {
  return ya(l) ? "indeterminate" : l ? "checked" : "unchecked";
}
var nu = "Collapsible", [V_, f0] = ht(nu), [q_, Hf] = V_(nu), d0 = d.forwardRef((l, i) => {
  const { __scopeCollapsible: r, open: c, defaultOpen: s, disabled: f, onOpenChange: v, ...g } = l, [y, m] = jt({ prop: c, defaultProp: s ?? false, onChange: v, caller: nu });
  return E.jsx(q_, { scope: r, disabled: f, contentId: Ke(), open: y, onOpenToggle: d.useCallback(() => m((S) => !S), [m]), children: E.jsx(ce.div, { "data-state": Gf(y), "data-disabled": f ? "" : void 0, ...g, ref: i }) });
});
d0.displayName = nu;
var p0 = "CollapsibleTrigger", v0 = d.forwardRef((l, i) => {
  const { __scopeCollapsible: r, ...c } = l, s = Hf(p0, r);
  return E.jsx(ce.button, { type: "button", "aria-controls": s.contentId, "aria-expanded": s.open || false, "data-state": Gf(s.open), "data-disabled": s.disabled ? "" : void 0, disabled: s.disabled, ...c, ref: i, onClick: W(l.onClick, s.onOpenToggle) });
});
v0.displayName = p0;
var Lf = "CollapsibleContent", m0 = d.forwardRef((l, i) => {
  const { forceMount: r, ...c } = l, s = Hf(Lf, l.__scopeCollapsible);
  return E.jsx(Ut, { present: r || s.open, children: ({ present: f }) => E.jsx(I_, { ...c, ref: i, present: f }) });
});
m0.displayName = Lf;
var I_ = d.forwardRef((l, i) => {
  const { __scopeCollapsible: r, present: c, children: s, ...f } = l, v = Hf(Lf, r), [g, y] = d.useState(c), m = d.useRef(null), S = Ce(i, m), h = d.useRef(0), A = h.current, w = d.useRef(0), O = w.current, C = v.open || g, T = d.useRef(C), D = d.useRef(void 0);
  return d.useEffect(() => {
    const z = requestAnimationFrame(() => T.current = false);
    return () => cancelAnimationFrame(z);
  }, []), dt(() => {
    const z = m.current;
    if (z) {
      D.current = D.current || { transitionDuration: z.style.transitionDuration, animationName: z.style.animationName }, z.style.transitionDuration = "0s", z.style.animationName = "none";
      const L = z.getBoundingClientRect();
      h.current = L.height, w.current = L.width, T.current || (z.style.transitionDuration = D.current.transitionDuration, z.style.animationName = D.current.animationName), y(c);
    }
  }, [v.open, c]), E.jsx(ce.div, { "data-state": Gf(v.open), "data-disabled": v.disabled ? "" : void 0, id: v.contentId, hidden: !C, ...f, ref: S, style: { "--radix-collapsible-content-height": A ? `${A}px` : void 0, "--radix-collapsible-content-width": O ? `${O}px` : void 0, ...l.style }, children: C && s });
});
function Gf(l) {
  return l ? "open" : "closed";
}
var X_ = d0, K_ = v0, Q_ = m0, fn = "Accordion", P_ = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Yf, Z_, k_] = or(fn), [au] = ht(fn, [k_, f0]), Vf = f0(), h0 = k.forwardRef((l, i) => {
  const { type: r, ...c } = l, s = c, f = c;
  return E.jsx(Yf.Provider, { scope: l.__scopeAccordion, children: r === "multiple" ? E.jsx(W_, { ...f, ref: i }) : E.jsx(F_, { ...s, ref: i }) });
});
h0.displayName = fn;
var [g0, $_] = au(fn), [y0, J_] = au(fn, { collapsible: false }), F_ = k.forwardRef((l, i) => {
  const { value: r, defaultValue: c, onValueChange: s = () => {
  }, collapsible: f = false, ...v } = l, [g, y] = jt({ prop: r, defaultProp: c ?? "", onChange: s, caller: fn });
  return E.jsx(g0, { scope: l.__scopeAccordion, value: k.useMemo(() => g ? [g] : [], [g]), onItemOpen: y, onItemClose: k.useCallback(() => f && y(""), [f, y]), children: E.jsx(y0, { scope: l.__scopeAccordion, collapsible: f, children: E.jsx(b0, { ...v, ref: i }) }) });
}), W_ = k.forwardRef((l, i) => {
  const { value: r, defaultValue: c, onValueChange: s = () => {
  }, ...f } = l, [v, g] = jt({ prop: r, defaultProp: c ?? [], onChange: s, caller: fn }), y = k.useCallback((S) => g((h = []) => [...h, S]), [g]), m = k.useCallback((S) => g((h = []) => h.filter((A) => A !== S)), [g]);
  return E.jsx(g0, { scope: l.__scopeAccordion, value: v, onItemOpen: y, onItemClose: m, children: E.jsx(y0, { scope: l.__scopeAccordion, collapsible: true, children: E.jsx(b0, { ...f, ref: i }) }) });
}), [eA, lu] = au(fn), b0 = k.forwardRef((l, i) => {
  const { __scopeAccordion: r, disabled: c, dir: s, orientation: f = "vertical", ...v } = l, g = k.useRef(null), y = Ce(g, i), m = Z_(r), h = $l(s) === "ltr", A = W(l.onKeyDown, (w) => {
    var _a;
    if (!P_.includes(w.key)) return;
    const O = w.target, C = m().filter((ae) => {
      var _a2;
      return !((_a2 = ae.ref.current) == null ? void 0 : _a2.disabled);
    }), T = C.findIndex((ae) => ae.ref.current === O), D = C.length;
    if (T === -1) return;
    w.preventDefault();
    let z = T;
    const L = 0, X = D - 1, $ = () => {
      z = T + 1, z > X && (z = L);
    }, J = () => {
      z = T - 1, z < L && (z = X);
    };
    switch (w.key) {
      case "Home":
        z = L;
        break;
      case "End":
        z = X;
        break;
      case "ArrowRight":
        f === "horizontal" && (h ? $() : J());
        break;
      case "ArrowDown":
        f === "vertical" && $();
        break;
      case "ArrowLeft":
        f === "horizontal" && (h ? J() : $());
        break;
      case "ArrowUp":
        f === "vertical" && J();
        break;
    }
    const V = z % D;
    (_a = C[V].ref.current) == null ? void 0 : _a.focus();
  });
  return E.jsx(eA, { scope: r, disabled: c, direction: s, orientation: f, children: E.jsx(Yf.Slot, { scope: r, children: E.jsx(ce.div, { ...v, "data-orientation": f, ref: y, onKeyDown: c ? void 0 : A }) }) });
}), qi = "AccordionItem", [tA, qf] = au(qi), S0 = k.forwardRef((l, i) => {
  const { __scopeAccordion: r, value: c, ...s } = l, f = lu(qi, r), v = $_(qi, r), g = Vf(r), y = Ke(), m = c && v.value.includes(c) || false, S = f.disabled || l.disabled;
  return E.jsx(tA, { scope: r, open: m, disabled: S, triggerId: y, children: E.jsx(X_, { "data-orientation": f.orientation, "data-state": A0(m), ...g, ...s, ref: i, disabled: S, open: m, onOpenChange: (h) => {
    h ? v.onItemOpen(c) : v.onItemClose(c);
  } }) });
});
S0.displayName = qi;
var E0 = "AccordionHeader", x0 = k.forwardRef((l, i) => {
  const { __scopeAccordion: r, ...c } = l, s = lu(fn, r), f = qf(E0, r);
  return E.jsx(ce.h3, { "data-orientation": s.orientation, "data-state": A0(f.open), "data-disabled": f.disabled ? "" : void 0, ...c, ref: i });
});
x0.displayName = E0;
var tf = "AccordionTrigger", C0 = k.forwardRef((l, i) => {
  const { __scopeAccordion: r, ...c } = l, s = lu(fn, r), f = qf(tf, r), v = J_(tf, r), g = Vf(r);
  return E.jsx(Yf.ItemSlot, { scope: r, children: E.jsx(K_, { "aria-disabled": f.open && !v.collapsible || void 0, "data-orientation": s.orientation, id: f.triggerId, ...g, ...c, ref: i }) });
});
C0.displayName = tf;
var T0 = "AccordionContent", _0 = k.forwardRef((l, i) => {
  const { __scopeAccordion: r, ...c } = l, s = lu(fn, r), f = qf(T0, r), v = Vf(r);
  return E.jsx(Q_, { role: "region", "aria-labelledby": f.triggerId, "data-orientation": s.orientation, ...v, ...c, ref: i, style: { "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", ...l.style } });
});
_0.displayName = T0;
function A0(l) {
  return l ? "open" : "closed";
}
var CM = h0, TM = S0, _M = x0, AM = C0, RM = _0, ou = "Switch", [nA] = ht(ou), [aA, lA] = nA(ou), R0 = d.forwardRef((l, i) => {
  const { __scopeSwitch: r, name: c, checked: s, defaultChecked: f, required: v, disabled: g, value: y = "on", onCheckedChange: m, form: S, ...h } = l, [A, w] = d.useState(null), O = Ce(i, (L) => w(L)), C = d.useRef(false), T = A ? S || !!A.closest("form") : true, [D, z] = jt({ prop: s, defaultProp: f ?? false, onChange: m, caller: ou });
  return E.jsxs(aA, { scope: r, checked: D, disabled: g, children: [E.jsx(ce.button, { type: "button", role: "switch", "aria-checked": D, "aria-required": v, "data-state": O0(D), "data-disabled": g ? "" : void 0, disabled: g, value: y, ...h, ref: O, onClick: W(l.onClick, (L) => {
    z((X) => !X), T && (C.current = L.isPropagationStopped(), C.current || L.stopPropagation());
  }) }), T && E.jsx(D0, { control: A, bubbles: !C.current, name: c, value: y, checked: D, required: v, disabled: g, form: S, style: { transform: "translateX(-100%)" } })] });
});
R0.displayName = ou;
var M0 = "SwitchThumb", w0 = d.forwardRef((l, i) => {
  const { __scopeSwitch: r, ...c } = l, s = lA(M0, r);
  return E.jsx(ce.span, { "data-state": O0(s.checked), "data-disabled": s.disabled ? "" : void 0, ...c, ref: i });
});
w0.displayName = M0;
var oA = "SwitchBubbleInput", D0 = d.forwardRef(({ __scopeSwitch: l, control: i, checked: r, bubbles: c = true, ...s }, f) => {
  const v = d.useRef(null), g = Ce(v, f), y = Uf(r), m = df(i);
  return d.useEffect(() => {
    const S = v.current;
    if (!S) return;
    const h = window.HTMLInputElement.prototype, w = Object.getOwnPropertyDescriptor(h, "checked").set;
    if (y !== r && w) {
      const O = new Event("click", { bubbles: c });
      w.call(S, r), S.dispatchEvent(O);
    }
  }, [y, r, c]), E.jsx("input", { type: "checkbox", "aria-hidden": true, defaultChecked: r, ...s, tabIndex: -1, ref: g, style: { ...s.style, ...m, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } });
});
D0.displayName = oA;
function O0(l) {
  return l ? "checked" : "unchecked";
}
var MM = R0, wM = w0, rA = [" ", "Enter", "ArrowUp", "ArrowDown"], iA = [" ", "Enter"], $a = "Select", [ru, iu, uA] = or($a), [Fl] = ht($a, [uA, Sa]), uu = Sa(), [cA, xa] = Fl($a), [sA, fA] = Fl($a), N0 = (l) => {
  const { __scopeSelect: i, children: r, open: c, defaultOpen: s, onOpenChange: f, value: v, defaultValue: g, onValueChange: y, dir: m, name: S, autoComplete: h, disabled: A, required: w, form: O } = l, C = uu(i), [T, D] = d.useState(null), [z, L] = d.useState(null), [X, $] = d.useState(false), J = $l(m), [V, ae] = jt({ prop: c, defaultProp: s ?? false, onChange: f, caller: $a }), [ge, Ee] = jt({ prop: v, defaultProp: g, onChange: y, caller: $a }), me = d.useRef(null), ye = T ? O || !!T.closest("form") : true, [pe, xe] = d.useState(/* @__PURE__ */ new Set()), Te = Array.from(pe).map((K) => K.props.value).join(";");
  return E.jsx(Ki, { ...C, children: E.jsxs(cA, { required: w, scope: i, trigger: T, onTriggerChange: D, valueNode: z, onValueNodeChange: L, valueNodeHasChildren: X, onValueNodeHasChildrenChange: $, contentId: Ke(), value: ge, onValueChange: Ee, open: V, onOpenChange: ae, dir: J, triggerPointerDownPosRef: me, disabled: A, children: [E.jsx(ru.Provider, { scope: i, children: E.jsx(sA, { scope: l.__scopeSelect, onNativeOptionAdd: d.useCallback((K) => {
    xe((te) => new Set(te).add(K));
  }, []), onNativeOptionRemove: d.useCallback((K) => {
    xe((te) => {
      const oe = new Set(te);
      return oe.delete(K), oe;
    });
  }, []), children: r }) }), ye ? E.jsxs(eb, { "aria-hidden": true, required: w, tabIndex: -1, name: S, autoComplete: h, value: ge, onChange: (K) => Ee(K.target.value), disabled: A, form: O, children: [ge === void 0 ? E.jsx("option", { value: "" }) : null, Array.from(pe)] }, Te) : null] }) });
};
N0.displayName = $a;
var z0 = "SelectTrigger", j0 = d.forwardRef((l, i) => {
  const { __scopeSelect: r, disabled: c = false, ...s } = l, f = uu(r), v = xa(z0, r), g = v.disabled || c, y = Ce(i, v.onTriggerChange), m = iu(r), S = d.useRef("touch"), [h, A, w] = nb((C) => {
    const T = m().filter((L) => !L.disabled), D = T.find((L) => L.value === v.value), z = ab(T, C, D);
    z !== void 0 && v.onValueChange(z.value);
  }), O = (C) => {
    g || (v.onOpenChange(true), w()), C && (v.triggerPointerDownPosRef.current = { x: Math.round(C.pageX), y: Math.round(C.pageY) });
  };
  return E.jsx(ar, { asChild: true, ...f, children: E.jsx(ce.button, { type: "button", role: "combobox", "aria-controls": v.contentId, "aria-expanded": v.open, "aria-required": v.required, "aria-autocomplete": "none", dir: v.dir, "data-state": v.open ? "open" : "closed", disabled: g, "data-disabled": g ? "" : void 0, "data-placeholder": tb(v.value) ? "" : void 0, ...s, ref: y, onClick: W(s.onClick, (C) => {
    C.currentTarget.focus(), S.current !== "mouse" && O(C);
  }), onPointerDown: W(s.onPointerDown, (C) => {
    S.current = C.pointerType;
    const T = C.target;
    T.hasPointerCapture(C.pointerId) && T.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === false && C.pointerType === "mouse" && (O(C), C.preventDefault());
  }), onKeyDown: W(s.onKeyDown, (C) => {
    const T = h.current !== "";
    !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && A(C.key), !(T && C.key === " ") && rA.includes(C.key) && (O(), C.preventDefault());
  }) }) });
});
j0.displayName = z0;
var U0 = "SelectValue", B0 = d.forwardRef((l, i) => {
  const { __scopeSelect: r, className: c, style: s, children: f, placeholder: v = "", ...g } = l, y = xa(U0, r), { onValueNodeHasChildrenChange: m } = y, S = f !== void 0, h = Ce(i, y.onValueNodeChange);
  return dt(() => {
    m(S);
  }, [m, S]), E.jsx(ce.span, { ...g, ref: h, style: { pointerEvents: "none" }, children: tb(y.value) ? E.jsx(E.Fragment, { children: v }) : f });
});
B0.displayName = U0;
var dA = "SelectIcon", H0 = d.forwardRef((l, i) => {
  const { __scopeSelect: r, children: c, ...s } = l;
  return E.jsx(ce.span, { "aria-hidden": true, ...s, ref: i, children: c || "\u25BC" });
});
H0.displayName = dA;
var pA = "SelectPortal", L0 = (l) => E.jsx(lr, { asChild: true, ...l });
L0.displayName = pA;
var Ja = "SelectContent", G0 = d.forwardRef((l, i) => {
  const r = xa(Ja, l.__scopeSelect), [c, s] = d.useState();
  if (dt(() => {
    s(new DocumentFragment());
  }, []), !r.open) {
    const f = c;
    return f ? nr.createPortal(E.jsx(Y0, { scope: l.__scopeSelect, children: E.jsx(ru.Slot, { scope: l.__scopeSelect, children: E.jsx("div", { children: l.children }) }) }), f) : null;
  }
  return E.jsx(V0, { ...l, ref: i });
});
G0.displayName = Ja;
var un = 10, [Y0, Ca] = Fl(Ja), vA = "SelectContentImpl", mA = Pa("SelectContent.RemoveScroll"), V0 = d.forwardRef((l, i) => {
  const { __scopeSelect: r, position: c = "item-aligned", onCloseAutoFocus: s, onEscapeKeyDown: f, onPointerDownOutside: v, side: g, sideOffset: y, align: m, alignOffset: S, arrowPadding: h, collisionBoundary: A, collisionPadding: w, sticky: O, hideWhenDetached: C, avoidCollisions: T, ...D } = l, z = xa(Ja, r), [L, X] = d.useState(null), [$, J] = d.useState(null), V = Ce(i, (q) => X(q)), [ae, ge] = d.useState(null), [Ee, me] = d.useState(null), ye = iu(r), [pe, xe] = d.useState(false), Te = d.useRef(false);
  d.useEffect(() => {
    if (L) return Xi(L);
  }, [L]), $i();
  const K = d.useCallback((q) => {
    const [ee, ...ie] = ye().map((ze) => ze.ref.current), [be] = ie.slice(-1), De = document.activeElement;
    for (const ze of q) if (ze === De || (ze == null ? void 0 : ze.scrollIntoView({ block: "nearest" }), ze === ee && $ && ($.scrollTop = 0), ze === be && $ && ($.scrollTop = $.scrollHeight), ze == null ? void 0 : ze.focus(), document.activeElement !== De)) return;
  }, [ye, $]), te = d.useCallback(() => K([ae, L]), [K, ae, L]);
  d.useEffect(() => {
    pe && te();
  }, [pe, te]);
  const { onOpenChange: oe, triggerPointerDownPosRef: ne } = z;
  d.useEffect(() => {
    if (L) {
      let q = { x: 0, y: 0 };
      const ee = (be) => {
        var _a, _b2;
        q = { x: Math.abs(Math.round(be.pageX) - (((_a = ne.current) == null ? void 0 : _a.x) ?? 0)), y: Math.abs(Math.round(be.pageY) - (((_b2 = ne.current) == null ? void 0 : _b2.y) ?? 0)) };
      }, ie = (be) => {
        q.x <= 10 && q.y <= 10 ? be.preventDefault() : L.contains(be.target) || oe(false), document.removeEventListener("pointermove", ee), ne.current = null;
      };
      return ne.current !== null && (document.addEventListener("pointermove", ee), document.addEventListener("pointerup", ie, { capture: true, once: true })), () => {
        document.removeEventListener("pointermove", ee), document.removeEventListener("pointerup", ie, { capture: true });
      };
    }
  }, [L, oe, ne]), d.useEffect(() => {
    const q = () => oe(false);
    return window.addEventListener("blur", q), window.addEventListener("resize", q), () => {
      window.removeEventListener("blur", q), window.removeEventListener("resize", q);
    };
  }, [oe]);
  const [ve, _] = nb((q) => {
    const ee = ye().filter((De) => !De.disabled), ie = ee.find((De) => De.ref.current === document.activeElement), be = ab(ee, q, ie);
    be && setTimeout(() => be.ref.current.focus());
  }), R = d.useCallback((q, ee, ie) => {
    const be = !Te.current && !ie;
    (z.value !== void 0 && z.value === ee || be) && (ge(q), be && (Te.current = true));
  }, [z.value]), B = d.useCallback(() => L == null ? void 0 : L.focus(), [L]), I = d.useCallback((q, ee, ie) => {
    const be = !Te.current && !ie;
    (z.value !== void 0 && z.value === ee || be) && me(q);
  }, [z.value]), Q = c === "popper" ? nf : q0, F = Q === nf ? { side: g, sideOffset: y, align: m, alignOffset: S, arrowPadding: h, collisionBoundary: A, collisionPadding: w, sticky: O, hideWhenDetached: C, avoidCollisions: T } : {};
  return E.jsx(Y0, { scope: r, content: L, viewport: $, onViewportChange: J, itemRefCallback: R, selectedItem: ae, onItemLeave: B, itemTextRefCallback: I, focusSelectedItem: te, selectedItemText: Ee, position: c, isPositioned: pe, searchRef: ve, children: E.jsx(ur, { as: mA, allowPinchZoom: true, children: E.jsx(rr, { asChild: true, trapped: z.open, onMountAutoFocus: (q) => {
    q.preventDefault();
  }, onUnmountAutoFocus: W(s, (q) => {
    var _a;
    (_a = z.trigger) == null ? void 0 : _a.focus({ preventScroll: true }), q.preventDefault();
  }), children: E.jsx(kl, { asChild: true, disableOutsidePointerEvents: true, onEscapeKeyDown: f, onPointerDownOutside: v, onFocusOutside: (q) => q.preventDefault(), onDismiss: () => z.onOpenChange(false), children: E.jsx(Q, { role: "listbox", id: z.contentId, "data-state": z.open ? "open" : "closed", dir: z.dir, onContextMenu: (q) => q.preventDefault(), ...D, ...F, onPlaced: () => xe(true), ref: V, style: { display: "flex", flexDirection: "column", outline: "none", ...D.style }, onKeyDown: W(D.onKeyDown, (q) => {
    const ee = q.ctrlKey || q.altKey || q.metaKey;
    if (q.key === "Tab" && q.preventDefault(), !ee && q.key.length === 1 && _(q.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(q.key)) {
      let be = ye().filter((De) => !De.disabled).map((De) => De.ref.current);
      if (["ArrowUp", "End"].includes(q.key) && (be = be.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(q.key)) {
        const De = q.target, ze = be.indexOf(De);
        be = be.slice(ze + 1);
      }
      setTimeout(() => K(be)), q.preventDefault();
    }
  }) }) }) }) }) });
});
V0.displayName = vA;
var hA = "SelectItemAlignedPosition", q0 = d.forwardRef((l, i) => {
  const { __scopeSelect: r, onPlaced: c, ...s } = l, f = xa(Ja, r), v = Ca(Ja, r), [g, y] = d.useState(null), [m, S] = d.useState(null), h = Ce(i, (V) => S(V)), A = iu(r), w = d.useRef(false), O = d.useRef(true), { viewport: C, selectedItem: T, selectedItemText: D, focusSelectedItem: z } = v, L = d.useCallback(() => {
    if (f.trigger && f.valueNode && g && m && C && T && D) {
      const V = f.trigger.getBoundingClientRect(), ae = m.getBoundingClientRect(), ge = f.valueNode.getBoundingClientRect(), Ee = D.getBoundingClientRect();
      if (f.dir !== "rtl") {
        const De = Ee.left - ae.left, ze = ge.left - De, rt = V.left - ze, tt = V.width + rt, En = Math.max(tt, ae.width), dn = window.innerWidth - un, tn = Gm(ze, [un, Math.max(un, dn - En)]);
        g.style.minWidth = tt + "px", g.style.left = tn + "px";
      } else {
        const De = ae.right - Ee.right, ze = window.innerWidth - ge.right - De, rt = window.innerWidth - V.right - ze, tt = V.width + rt, En = Math.max(tt, ae.width), dn = window.innerWidth - un, tn = Gm(ze, [un, Math.max(un, dn - En)]);
        g.style.minWidth = tt + "px", g.style.right = tn + "px";
      }
      const me = A(), ye = window.innerHeight - un * 2, pe = C.scrollHeight, xe = window.getComputedStyle(m), Te = parseInt(xe.borderTopWidth, 10), K = parseInt(xe.paddingTop, 10), te = parseInt(xe.borderBottomWidth, 10), oe = parseInt(xe.paddingBottom, 10), ne = Te + K + pe + oe + te, ve = Math.min(T.offsetHeight * 5, ne), _ = window.getComputedStyle(C), R = parseInt(_.paddingTop, 10), B = parseInt(_.paddingBottom, 10), I = V.top + V.height / 2 - un, Q = ye - I, F = T.offsetHeight / 2, q = T.offsetTop + F, ee = Te + K + q, ie = ne - ee;
      if (ee <= I) {
        const De = me.length > 0 && T === me[me.length - 1].ref.current;
        g.style.bottom = "0px";
        const ze = m.clientHeight - C.offsetTop - C.offsetHeight, rt = Math.max(Q, F + (De ? B : 0) + ze + te), tt = ee + rt;
        g.style.height = tt + "px";
      } else {
        const De = me.length > 0 && T === me[0].ref.current;
        g.style.top = "0px";
        const rt = Math.max(I, Te + C.offsetTop + (De ? R : 0) + F) + ie;
        g.style.height = rt + "px", C.scrollTop = ee - I + C.offsetTop;
      }
      g.style.margin = `${un}px 0`, g.style.minHeight = ve + "px", g.style.maxHeight = ye + "px", c == null ? void 0 : c(), requestAnimationFrame(() => w.current = true);
    }
  }, [A, f.trigger, f.valueNode, g, m, C, T, D, f.dir, c]);
  dt(() => L(), [L]);
  const [X, $] = d.useState();
  dt(() => {
    m && $(window.getComputedStyle(m).zIndex);
  }, [m]);
  const J = d.useCallback((V) => {
    V && O.current === true && (L(), z == null ? void 0 : z(), O.current = false);
  }, [L, z]);
  return E.jsx(yA, { scope: r, contentWrapper: g, shouldExpandOnScrollRef: w, onScrollButtonChange: J, children: E.jsx("div", { ref: y, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: X }, children: E.jsx(ce.div, { ...s, ref: h, style: { boxSizing: "border-box", maxHeight: "100%", ...s.style } }) }) });
});
q0.displayName = hA;
var gA = "SelectPopperPosition", nf = d.forwardRef((l, i) => {
  const { __scopeSelect: r, align: c = "start", collisionPadding: s = un, ...f } = l, v = uu(r);
  return E.jsx(Qi, { ...v, ...f, ref: i, align: c, collisionPadding: s, style: { boxSizing: "border-box", ...f.style, "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" } });
});
nf.displayName = gA;
var [yA, If] = Fl(Ja, {}), af = "SelectViewport", I0 = d.forwardRef((l, i) => {
  const { __scopeSelect: r, nonce: c, ...s } = l, f = Ca(af, r), v = If(af, r), g = Ce(i, f.onViewportChange), y = d.useRef(0);
  return E.jsxs(E.Fragment, { children: [E.jsx("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: c }), E.jsx(ru.Slot, { scope: r, children: E.jsx(ce.div, { "data-radix-select-viewport": "", role: "presentation", ...s, ref: g, style: { position: "relative", flex: 1, overflow: "hidden auto", ...s.style }, onScroll: W(s.onScroll, (m) => {
    const S = m.currentTarget, { contentWrapper: h, shouldExpandOnScrollRef: A } = v;
    if ((A == null ? void 0 : A.current) && h) {
      const w = Math.abs(y.current - S.scrollTop);
      if (w > 0) {
        const O = window.innerHeight - un * 2, C = parseFloat(h.style.minHeight), T = parseFloat(h.style.height), D = Math.max(C, T);
        if (D < O) {
          const z = D + w, L = Math.min(O, z), X = z - L;
          h.style.height = L + "px", h.style.bottom === "0px" && (S.scrollTop = X > 0 ? X : 0, h.style.justifyContent = "flex-end");
        }
      }
    }
    y.current = S.scrollTop;
  }) }) })] });
});
I0.displayName = af;
var X0 = "SelectGroup", [bA, SA] = Fl(X0), EA = d.forwardRef((l, i) => {
  const { __scopeSelect: r, ...c } = l, s = Ke();
  return E.jsx(bA, { scope: r, id: s, children: E.jsx(ce.div, { role: "group", "aria-labelledby": s, ...c, ref: i }) });
});
EA.displayName = X0;
var K0 = "SelectLabel", xA = d.forwardRef((l, i) => {
  const { __scopeSelect: r, ...c } = l, s = SA(K0, r);
  return E.jsx(ce.div, { id: s.id, ...c, ref: i });
});
xA.displayName = K0;
var Ii = "SelectItem", [CA, Q0] = Fl(Ii), P0 = d.forwardRef((l, i) => {
  const { __scopeSelect: r, value: c, disabled: s = false, textValue: f, ...v } = l, g = xa(Ii, r), y = Ca(Ii, r), m = g.value === c, [S, h] = d.useState(f ?? ""), [A, w] = d.useState(false), O = Ce(i, (z) => {
    var _a;
    return (_a = y.itemRefCallback) == null ? void 0 : _a.call(y, z, c, s);
  }), C = Ke(), T = d.useRef("touch"), D = () => {
    s || (g.onValueChange(c), g.onOpenChange(false));
  };
  if (c === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return E.jsx(CA, { scope: r, value: c, disabled: s, textId: C, isSelected: m, onItemTextChange: d.useCallback((z) => {
    h((L) => L || ((z == null ? void 0 : z.textContent) ?? "").trim());
  }, []), children: E.jsx(ru.ItemSlot, { scope: r, value: c, disabled: s, textValue: S, children: E.jsx(ce.div, { role: "option", "aria-labelledby": C, "data-highlighted": A ? "" : void 0, "aria-selected": m && A, "data-state": m ? "checked" : "unchecked", "aria-disabled": s || void 0, "data-disabled": s ? "" : void 0, tabIndex: s ? void 0 : -1, ...v, ref: O, onFocus: W(v.onFocus, () => w(true)), onBlur: W(v.onBlur, () => w(false)), onClick: W(v.onClick, () => {
    T.current !== "mouse" && D();
  }), onPointerUp: W(v.onPointerUp, () => {
    T.current === "mouse" && D();
  }), onPointerDown: W(v.onPointerDown, (z) => {
    T.current = z.pointerType;
  }), onPointerMove: W(v.onPointerMove, (z) => {
    var _a;
    T.current = z.pointerType, s ? (_a = y.onItemLeave) == null ? void 0 : _a.call(y) : T.current === "mouse" && z.currentTarget.focus({ preventScroll: true });
  }), onPointerLeave: W(v.onPointerLeave, (z) => {
    var _a;
    z.currentTarget === document.activeElement && ((_a = y.onItemLeave) == null ? void 0 : _a.call(y));
  }), onKeyDown: W(v.onKeyDown, (z) => {
    var _a;
    ((_a = y.searchRef) == null ? void 0 : _a.current) !== "" && z.key === " " || (iA.includes(z.key) && D(), z.key === " " && z.preventDefault());
  }) }) }) });
});
P0.displayName = Ii;
var Fo = "SelectItemText", Z0 = d.forwardRef((l, i) => {
  const { __scopeSelect: r, className: c, style: s, ...f } = l, v = xa(Fo, r), g = Ca(Fo, r), y = Q0(Fo, r), m = fA(Fo, r), [S, h] = d.useState(null), A = Ce(i, (D) => h(D), y.onItemTextChange, (D) => {
    var _a;
    return (_a = g.itemTextRefCallback) == null ? void 0 : _a.call(g, D, y.value, y.disabled);
  }), w = S == null ? void 0 : S.textContent, O = d.useMemo(() => E.jsx("option", { value: y.value, disabled: y.disabled, children: w }, y.value), [y.disabled, y.value, w]), { onNativeOptionAdd: C, onNativeOptionRemove: T } = m;
  return dt(() => (C(O), () => T(O)), [C, T, O]), E.jsxs(E.Fragment, { children: [E.jsx(ce.span, { id: y.textId, ...f, ref: A }), y.isSelected && v.valueNode && !v.valueNodeHasChildren ? nr.createPortal(f.children, v.valueNode) : null] });
});
Z0.displayName = Fo;
var k0 = "SelectItemIndicator", $0 = d.forwardRef((l, i) => {
  const { __scopeSelect: r, ...c } = l;
  return Q0(k0, r).isSelected ? E.jsx(ce.span, { "aria-hidden": true, ...c, ref: i }) : null;
});
$0.displayName = k0;
var lf = "SelectScrollUpButton", J0 = d.forwardRef((l, i) => {
  const r = Ca(lf, l.__scopeSelect), c = If(lf, l.__scopeSelect), [s, f] = d.useState(false), v = Ce(i, c.onScrollButtonChange);
  return dt(() => {
    if (r.viewport && r.isPositioned) {
      let g = function() {
        const m = y.scrollTop > 0;
        f(m);
      };
      const y = r.viewport;
      return g(), y.addEventListener("scroll", g), () => y.removeEventListener("scroll", g);
    }
  }, [r.viewport, r.isPositioned]), s ? E.jsx(W0, { ...l, ref: v, onAutoScroll: () => {
    const { viewport: g, selectedItem: y } = r;
    g && y && (g.scrollTop = g.scrollTop - y.offsetHeight);
  } }) : null;
});
J0.displayName = lf;
var of = "SelectScrollDownButton", F0 = d.forwardRef((l, i) => {
  const r = Ca(of, l.__scopeSelect), c = If(of, l.__scopeSelect), [s, f] = d.useState(false), v = Ce(i, c.onScrollButtonChange);
  return dt(() => {
    if (r.viewport && r.isPositioned) {
      let g = function() {
        const m = y.scrollHeight - y.clientHeight, S = Math.ceil(y.scrollTop) < m;
        f(S);
      };
      const y = r.viewport;
      return g(), y.addEventListener("scroll", g), () => y.removeEventListener("scroll", g);
    }
  }, [r.viewport, r.isPositioned]), s ? E.jsx(W0, { ...l, ref: v, onAutoScroll: () => {
    const { viewport: g, selectedItem: y } = r;
    g && y && (g.scrollTop = g.scrollTop + y.offsetHeight);
  } }) : null;
});
F0.displayName = of;
var W0 = d.forwardRef((l, i) => {
  const { __scopeSelect: r, onAutoScroll: c, ...s } = l, f = Ca("SelectScrollButton", r), v = d.useRef(null), g = iu(r), y = d.useCallback(() => {
    v.current !== null && (window.clearInterval(v.current), v.current = null);
  }, []);
  return d.useEffect(() => () => y(), [y]), dt(() => {
    var _a, _b2;
    (_b2 = (_a = g().find((S) => S.ref.current === document.activeElement)) == null ? void 0 : _a.ref.current) == null ? void 0 : _b2.scrollIntoView({ block: "nearest" });
  }, [g]), E.jsx(ce.div, { "aria-hidden": true, ...s, ref: i, style: { flexShrink: 0, ...s.style }, onPointerDown: W(s.onPointerDown, () => {
    v.current === null && (v.current = window.setInterval(c, 50));
  }), onPointerMove: W(s.onPointerMove, () => {
    var _a;
    (_a = f.onItemLeave) == null ? void 0 : _a.call(f), v.current === null && (v.current = window.setInterval(c, 50));
  }), onPointerLeave: W(s.onPointerLeave, () => {
    y();
  }) });
}), TA = "SelectSeparator", _A = d.forwardRef((l, i) => {
  const { __scopeSelect: r, ...c } = l;
  return E.jsx(ce.div, { "aria-hidden": true, ...c, ref: i });
});
_A.displayName = TA;
var rf = "SelectArrow", AA = d.forwardRef((l, i) => {
  const { __scopeSelect: r, ...c } = l, s = uu(r), f = xa(rf, r), v = Ca(rf, r);
  return f.open && v.position === "popper" ? E.jsx(Pi, { ...s, ...c, ref: i }) : null;
});
AA.displayName = rf;
var RA = "SelectBubbleInput", eb = d.forwardRef(({ __scopeSelect: l, value: i, ...r }, c) => {
  const s = d.useRef(null), f = Ce(c, s), v = Uf(i);
  return d.useEffect(() => {
    const g = s.current;
    if (!g) return;
    const y = window.HTMLSelectElement.prototype, S = Object.getOwnPropertyDescriptor(y, "value").set;
    if (v !== i && S) {
      const h = new Event("change", { bubbles: true });
      S.call(g, i), g.dispatchEvent(h);
    }
  }, [v, i]), E.jsx(ce.select, { ...r, style: { ...Vh, ...r.style }, ref: f, defaultValue: i });
});
eb.displayName = RA;
function tb(l) {
  return l === "" || l === void 0;
}
function nb(l) {
  const i = cn(l), r = d.useRef(""), c = d.useRef(0), s = d.useCallback((v) => {
    const g = r.current + v;
    i(g), (function y(m) {
      r.current = m, window.clearTimeout(c.current), m !== "" && (c.current = window.setTimeout(() => y(""), 1e3));
    })(g);
  }, [i]), f = d.useCallback(() => {
    r.current = "", window.clearTimeout(c.current);
  }, []);
  return d.useEffect(() => () => window.clearTimeout(c.current), []), [r, s, f];
}
function ab(l, i, r) {
  const s = i.length > 1 && Array.from(i).every((m) => m === i[0]) ? i[0] : i, f = r ? l.indexOf(r) : -1;
  let v = MA(l, Math.max(f, 0));
  s.length === 1 && (v = v.filter((m) => m !== r));
  const y = v.find((m) => m.textValue.toLowerCase().startsWith(s.toLowerCase()));
  return y !== r ? y : void 0;
}
function MA(l, i) {
  return l.map((r, c) => l[(i + c) % l.length]);
}
var DM = N0, OM = j0, NM = B0, zM = H0, jM = L0, UM = G0, BM = I0, HM = P0, LM = Z0, GM = $0, YM = J0, VM = F0, cu = "Popover", [lb] = ht(cu, [Sa]), pr = Sa(), [wA, Ta] = lb(cu), ob = (l) => {
  const { __scopePopover: i, children: r, open: c, defaultOpen: s, onOpenChange: f, modal: v = false } = l, g = pr(i), y = d.useRef(null), [m, S] = d.useState(false), [h, A] = jt({ prop: c, defaultProp: s ?? false, onChange: f, caller: cu });
  return E.jsx(Ki, { ...g, children: E.jsx(wA, { scope: i, contentId: Ke(), triggerRef: y, open: h, onOpenChange: A, onOpenToggle: d.useCallback(() => A((w) => !w), [A]), hasCustomAnchor: m, onCustomAnchorAdd: d.useCallback(() => S(true), []), onCustomAnchorRemove: d.useCallback(() => S(false), []), modal: v, children: r }) });
};
ob.displayName = cu;
var rb = "PopoverAnchor", DA = d.forwardRef((l, i) => {
  const { __scopePopover: r, ...c } = l, s = Ta(rb, r), f = pr(r), { onCustomAnchorAdd: v, onCustomAnchorRemove: g } = s;
  return d.useEffect(() => (v(), () => g()), [v, g]), E.jsx(ar, { ...f, ...c, ref: i });
});
DA.displayName = rb;
var ib = "PopoverTrigger", ub = d.forwardRef((l, i) => {
  const { __scopePopover: r, ...c } = l, s = Ta(ib, r), f = pr(r), v = Ce(i, s.triggerRef), g = E.jsx(ce.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": s.open, "aria-controls": s.contentId, "data-state": pb(s.open), ...c, ref: v, onClick: W(l.onClick, s.onOpenToggle) });
  return s.hasCustomAnchor ? g : E.jsx(ar, { asChild: true, ...f, children: g });
});
ub.displayName = ib;
var Xf = "PopoverPortal", [OA, NA] = lb(Xf, { forceMount: void 0 }), cb = (l) => {
  const { __scopePopover: i, forceMount: r, children: c, container: s } = l, f = Ta(Xf, i);
  return E.jsx(OA, { scope: i, forceMount: r, children: E.jsx(Ut, { present: r || f.open, children: E.jsx(lr, { asChild: true, container: s, children: c }) }) });
};
cb.displayName = Xf;
var Zl = "PopoverContent", sb = d.forwardRef((l, i) => {
  const r = NA(Zl, l.__scopePopover), { forceMount: c = r.forceMount, ...s } = l, f = Ta(Zl, l.__scopePopover);
  return E.jsx(Ut, { present: c || f.open, children: f.modal ? E.jsx(jA, { ...s, ref: i }) : E.jsx(UA, { ...s, ref: i }) });
});
sb.displayName = Zl;
var zA = Pa("PopoverContent.RemoveScroll"), jA = d.forwardRef((l, i) => {
  const r = Ta(Zl, l.__scopePopover), c = d.useRef(null), s = Ce(i, c), f = d.useRef(false);
  return d.useEffect(() => {
    const v = c.current;
    if (v) return Xi(v);
  }, []), E.jsx(ur, { as: zA, allowPinchZoom: true, children: E.jsx(fb, { ...l, ref: s, trapFocus: r.open, disableOutsidePointerEvents: true, onCloseAutoFocus: W(l.onCloseAutoFocus, (v) => {
    var _a;
    v.preventDefault(), f.current || ((_a = r.triggerRef.current) == null ? void 0 : _a.focus());
  }), onPointerDownOutside: W(l.onPointerDownOutside, (v) => {
    const g = v.detail.originalEvent, y = g.button === 0 && g.ctrlKey === true, m = g.button === 2 || y;
    f.current = m;
  }, { checkForDefaultPrevented: false }), onFocusOutside: W(l.onFocusOutside, (v) => v.preventDefault(), { checkForDefaultPrevented: false }) }) });
}), UA = d.forwardRef((l, i) => {
  const r = Ta(Zl, l.__scopePopover), c = d.useRef(false), s = d.useRef(false);
  return E.jsx(fb, { ...l, ref: i, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (f) => {
    var _a, _b2;
    (_a = l.onCloseAutoFocus) == null ? void 0 : _a.call(l, f), f.defaultPrevented || (c.current || ((_b2 = r.triggerRef.current) == null ? void 0 : _b2.focus()), f.preventDefault()), c.current = false, s.current = false;
  }, onInteractOutside: (f) => {
    var _a, _b2;
    (_a = l.onInteractOutside) == null ? void 0 : _a.call(l, f), f.defaultPrevented || (c.current = true, f.detail.originalEvent.type === "pointerdown" && (s.current = true));
    const v = f.target;
    ((_b2 = r.triggerRef.current) == null ? void 0 : _b2.contains(v)) && f.preventDefault(), f.detail.originalEvent.type === "focusin" && s.current && f.preventDefault();
  } });
}), fb = d.forwardRef((l, i) => {
  const { __scopePopover: r, trapFocus: c, onOpenAutoFocus: s, onCloseAutoFocus: f, disableOutsidePointerEvents: v, onEscapeKeyDown: g, onPointerDownOutside: y, onFocusOutside: m, onInteractOutside: S, ...h } = l, A = Ta(Zl, r), w = pr(r);
  return $i(), E.jsx(rr, { asChild: true, loop: true, trapped: c, onMountAutoFocus: s, onUnmountAutoFocus: f, children: E.jsx(kl, { asChild: true, disableOutsidePointerEvents: v, onInteractOutside: S, onEscapeKeyDown: g, onPointerDownOutside: y, onFocusOutside: m, onDismiss: () => A.onOpenChange(false), children: E.jsx(Qi, { "data-state": pb(A.open), role: "dialog", id: A.contentId, ...w, ...h, ref: i, style: { ...h.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
}), db = "PopoverClose", BA = d.forwardRef((l, i) => {
  const { __scopePopover: r, ...c } = l, s = Ta(db, r);
  return E.jsx(ce.button, { type: "button", ...c, ref: i, onClick: W(l.onClick, () => s.onOpenChange(false)) });
});
BA.displayName = db;
var HA = "PopoverArrow", LA = d.forwardRef((l, i) => {
  const { __scopePopover: r, ...c } = l, s = pr(r);
  return E.jsx(Pi, { ...s, ...c, ref: i });
});
LA.displayName = HA;
function pb(l) {
  return l ? "open" : "closed";
}
var qM = ob, IM = ub, XM = cb, KM = sb, bh = 1, GA = 0.9, YA = 0.8, VA = 0.17, Vs = 0.1, qs = 0.999, qA = 0.9999, IA = 0.99, XA = /[\\\/_+.#"@\[\(\{&]/, KA = /[\\\/_+.#"@\[\(\{&]/g, QA = /[\s-]/, vb = /[\s-]/g;
function uf(l, i, r, c, s, f, v) {
  if (f === i.length) return s === l.length ? bh : IA;
  var g = `${s},${f}`;
  if (v[g] !== void 0) return v[g];
  for (var y = c.charAt(f), m = r.indexOf(y, s), S = 0, h, A, w, O; m >= 0; ) h = uf(l, i, r, c, m + 1, f + 1, v), h > S && (m === s ? h *= bh : XA.test(l.charAt(m - 1)) ? (h *= YA, w = l.slice(s, m - 1).match(KA), w && s > 0 && (h *= Math.pow(qs, w.length))) : QA.test(l.charAt(m - 1)) ? (h *= GA, O = l.slice(s, m - 1).match(vb), O && s > 0 && (h *= Math.pow(qs, O.length))) : (h *= VA, s > 0 && (h *= Math.pow(qs, m - s))), l.charAt(m) !== i.charAt(f) && (h *= qA)), (h < Vs && r.charAt(m - 1) === c.charAt(f + 1) || c.charAt(f + 1) === c.charAt(f) && r.charAt(m - 1) !== c.charAt(f)) && (A = uf(l, i, r, c, m + 1, f + 2, v), A * Vs > h && (h = A * Vs)), h > S && (S = h), m = r.indexOf(y, m + 1);
  return v[g] = S, S;
}
function Sh(l) {
  return l.toLowerCase().replace(vb, " ");
}
function PA(l, i, r) {
  return l = r && r.length > 0 ? `${l + " " + r.join(" ")}` : l, uf(l, i, Sh(l), Sh(i), 0, 0, {});
}
var $o = '[cmdk-group=""]', Is = '[cmdk-group-items=""]', ZA = '[cmdk-group-heading=""]', mb = '[cmdk-item=""]', Eh = `${mb}:not([aria-disabled="true"])`, cf = "cmdk-item-select", Il = "data-value", kA = (l, i, r) => PA(l, i, r), hb = d.createContext(void 0), vr = () => d.useContext(hb), gb = d.createContext(void 0), Kf = () => d.useContext(gb), yb = d.createContext(void 0), bb = d.forwardRef((l, i) => {
  let r = Xl(() => {
    var R, B;
    return { search: "", value: (B = (R = l.value) != null ? R : l.defaultValue) != null ? B : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), c = Xl(() => /* @__PURE__ */ new Set()), s = Xl(() => /* @__PURE__ */ new Map()), f = Xl(() => /* @__PURE__ */ new Map()), v = Xl(() => /* @__PURE__ */ new Set()), g = Sb(l), { label: y, children: m, value: S, onValueChange: h, filter: A, shouldFilter: w, loop: O, disablePointerSelection: C = false, vimBindings: T = true, ...D } = l, z = Ke(), L = Ke(), X = Ke(), $ = d.useRef(null), J = rR();
  Fa(() => {
    if (S !== void 0) {
      let R = S.trim();
      r.current.value = R, V.emit();
    }
  }, [S]), Fa(() => {
    J(6, pe);
  }, []);
  let V = d.useMemo(() => ({ subscribe: (R) => (v.current.add(R), () => v.current.delete(R)), snapshot: () => r.current, setState: (R, B, I) => {
    var Q, F, q, ee;
    if (!Object.is(r.current[R], B)) {
      if (r.current[R] = B, R === "search") ye(), Ee(), J(1, me);
      else if (R === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let ie = document.getElementById(X);
          ie ? ie.focus() : (Q = document.getElementById(z)) == null || Q.focus();
        }
        if (J(7, () => {
          var ie;
          r.current.selectedItemId = (ie = xe()) == null ? void 0 : ie.id, V.emit();
        }), I || J(5, pe), ((F = g.current) == null ? void 0 : F.value) !== void 0) {
          let ie = B ?? "";
          (ee = (q = g.current).onValueChange) == null || ee.call(q, ie);
          return;
        }
      }
      V.emit();
    }
  }, emit: () => {
    v.current.forEach((R) => R());
  } }), []), ae = d.useMemo(() => ({ value: (R, B, I) => {
    var Q;
    B !== ((Q = f.current.get(R)) == null ? void 0 : Q.value) && (f.current.set(R, { value: B, keywords: I }), r.current.filtered.items.set(R, ge(B, I)), J(2, () => {
      Ee(), V.emit();
    }));
  }, item: (R, B) => (c.current.add(R), B && (s.current.has(B) ? s.current.get(B).add(R) : s.current.set(B, /* @__PURE__ */ new Set([R]))), J(3, () => {
    ye(), Ee(), r.current.value || me(), V.emit();
  }), () => {
    f.current.delete(R), c.current.delete(R), r.current.filtered.items.delete(R);
    let I = xe();
    J(4, () => {
      ye(), (I == null ? void 0 : I.getAttribute("id")) === R && me(), V.emit();
    });
  }), group: (R) => (s.current.has(R) || s.current.set(R, /* @__PURE__ */ new Set()), () => {
    f.current.delete(R), s.current.delete(R);
  }), filter: () => g.current.shouldFilter, label: y || l["aria-label"], getDisablePointerSelection: () => g.current.disablePointerSelection, listId: z, inputId: X, labelId: L, listInnerRef: $ }), []);
  function ge(R, B) {
    var I, Q;
    let F = (Q = (I = g.current) == null ? void 0 : I.filter) != null ? Q : kA;
    return R ? F(R, r.current.search, B) : 0;
  }
  function Ee() {
    if (!r.current.search || g.current.shouldFilter === false) return;
    let R = r.current.filtered.items, B = [];
    r.current.filtered.groups.forEach((Q) => {
      let F = s.current.get(Q), q = 0;
      F.forEach((ee) => {
        let ie = R.get(ee);
        q = Math.max(ie, q);
      }), B.push([Q, q]);
    });
    let I = $.current;
    Te().sort((Q, F) => {
      var q, ee;
      let ie = Q.getAttribute("id"), be = F.getAttribute("id");
      return ((q = R.get(be)) != null ? q : 0) - ((ee = R.get(ie)) != null ? ee : 0);
    }).forEach((Q) => {
      let F = Q.closest(Is);
      F ? F.appendChild(Q.parentElement === F ? Q : Q.closest(`${Is} > *`)) : I.appendChild(Q.parentElement === I ? Q : Q.closest(`${Is} > *`));
    }), B.sort((Q, F) => F[1] - Q[1]).forEach((Q) => {
      var F;
      let q = (F = $.current) == null ? void 0 : F.querySelector(`${$o}[${Il}="${encodeURIComponent(Q[0])}"]`);
      q == null ? void 0 : q.parentElement.appendChild(q);
    });
  }
  function me() {
    let R = Te().find((I) => I.getAttribute("aria-disabled") !== "true"), B = R == null ? void 0 : R.getAttribute(Il);
    V.setState("value", B || void 0);
  }
  function ye() {
    var R, B, I, Q;
    if (!r.current.search || g.current.shouldFilter === false) {
      r.current.filtered.count = c.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let F = 0;
    for (let q of c.current) {
      let ee = (B = (R = f.current.get(q)) == null ? void 0 : R.value) != null ? B : "", ie = (Q = (I = f.current.get(q)) == null ? void 0 : I.keywords) != null ? Q : [], be = ge(ee, ie);
      r.current.filtered.items.set(q, be), be > 0 && F++;
    }
    for (let [q, ee] of s.current) for (let ie of ee) if (r.current.filtered.items.get(ie) > 0) {
      r.current.filtered.groups.add(q);
      break;
    }
    r.current.filtered.count = F;
  }
  function pe() {
    var R, B, I;
    let Q = xe();
    Q && (((R = Q.parentElement) == null ? void 0 : R.firstChild) === Q && ((I = (B = Q.closest($o)) == null ? void 0 : B.querySelector(ZA)) == null || I.scrollIntoView({ block: "nearest" })), Q.scrollIntoView({ block: "nearest" }));
  }
  function xe() {
    var R;
    return (R = $.current) == null ? void 0 : R.querySelector(`${mb}[aria-selected="true"]`);
  }
  function Te() {
    var R;
    return Array.from(((R = $.current) == null ? void 0 : R.querySelectorAll(Eh)) || []);
  }
  function K(R) {
    let B = Te()[R];
    B && V.setState("value", B.getAttribute(Il));
  }
  function te(R) {
    var B;
    let I = xe(), Q = Te(), F = Q.findIndex((ee) => ee === I), q = Q[F + R];
    (B = g.current) != null && B.loop && (q = F + R < 0 ? Q[Q.length - 1] : F + R === Q.length ? Q[0] : Q[F + R]), q && V.setState("value", q.getAttribute(Il));
  }
  function oe(R) {
    let B = xe(), I = B == null ? void 0 : B.closest($o), Q;
    for (; I && !Q; ) I = R > 0 ? lR(I, $o) : oR(I, $o), Q = I == null ? void 0 : I.querySelector(Eh);
    Q ? V.setState("value", Q.getAttribute(Il)) : te(R);
  }
  let ne = () => K(Te().length - 1), ve = (R) => {
    R.preventDefault(), R.metaKey ? ne() : R.altKey ? oe(1) : te(1);
  }, _ = (R) => {
    R.preventDefault(), R.metaKey ? K(0) : R.altKey ? oe(-1) : te(-1);
  };
  return d.createElement(Vn.div, { ref: i, tabIndex: -1, ...D, "cmdk-root": "", onKeyDown: (R) => {
    var B;
    (B = D.onKeyDown) == null || B.call(D, R);
    let I = R.nativeEvent.isComposing || R.keyCode === 229;
    if (!(R.defaultPrevented || I)) switch (R.key) {
      case "n":
      case "j": {
        T && R.ctrlKey && ve(R);
        break;
      }
      case "ArrowDown": {
        ve(R);
        break;
      }
      case "p":
      case "k": {
        T && R.ctrlKey && _(R);
        break;
      }
      case "ArrowUp": {
        _(R);
        break;
      }
      case "Home": {
        R.preventDefault(), K(0);
        break;
      }
      case "End": {
        R.preventDefault(), ne();
        break;
      }
      case "Enter": {
        R.preventDefault();
        let Q = xe();
        if (Q) {
          let F = new Event(cf);
          Q.dispatchEvent(F);
        }
      }
    }
  } }, d.createElement("label", { "cmdk-label": "", htmlFor: ae.inputId, id: ae.labelId, style: uR }, y), su(l, (R) => d.createElement(gb.Provider, { value: V }, d.createElement(hb.Provider, { value: ae }, R))));
}), $A = d.forwardRef((l, i) => {
  var r, c;
  let s = Ke(), f = d.useRef(null), v = d.useContext(yb), g = vr(), y = Sb(l), m = (c = (r = y.current) == null ? void 0 : r.forceMount) != null ? c : v == null ? void 0 : v.forceMount;
  Fa(() => {
    if (!m) return g.item(s, v == null ? void 0 : v.id);
  }, [m]);
  let S = Eb(s, f, [l.value, l.children, f], l.keywords), h = Kf(), A = ba((J) => J.value && J.value === S.current), w = ba((J) => m || g.filter() === false ? true : J.search ? J.filtered.items.get(s) > 0 : true);
  d.useEffect(() => {
    let J = f.current;
    if (!(!J || l.disabled)) return J.addEventListener(cf, O), () => J.removeEventListener(cf, O);
  }, [w, l.onSelect, l.disabled]);
  function O() {
    var J, V;
    C(), (V = (J = y.current).onSelect) == null || V.call(J, S.current);
  }
  function C() {
    h.setState("value", S.current, true);
  }
  if (!w) return null;
  let { disabled: T, value: D, onSelect: z, forceMount: L, keywords: X, ...$ } = l;
  return d.createElement(Vn.div, { ref: Sn(f, i), ...$, id: s, "cmdk-item": "", role: "option", "aria-disabled": !!T, "aria-selected": !!A, "data-disabled": !!T, "data-selected": !!A, onPointerMove: T || g.getDisablePointerSelection() ? void 0 : C, onClick: T ? void 0 : O }, l.children);
}), JA = d.forwardRef((l, i) => {
  let { heading: r, children: c, forceMount: s, ...f } = l, v = Ke(), g = d.useRef(null), y = d.useRef(null), m = Ke(), S = vr(), h = ba((w) => s || S.filter() === false ? true : w.search ? w.filtered.groups.has(v) : true);
  Fa(() => S.group(v), []), Eb(v, g, [l.value, l.heading, y]);
  let A = d.useMemo(() => ({ id: v, forceMount: s }), [s]);
  return d.createElement(Vn.div, { ref: Sn(g, i), ...f, "cmdk-group": "", role: "presentation", hidden: h ? void 0 : true }, r && d.createElement("div", { ref: y, "cmdk-group-heading": "", "aria-hidden": true, id: m }, r), su(l, (w) => d.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? m : void 0 }, d.createElement(yb.Provider, { value: A }, w))));
}), FA = d.forwardRef((l, i) => {
  let { alwaysRender: r, ...c } = l, s = d.useRef(null), f = ba((v) => !v.search);
  return !r && !f ? null : d.createElement(Vn.div, { ref: Sn(s, i), ...c, "cmdk-separator": "", role: "separator" });
}), WA = d.forwardRef((l, i) => {
  let { onValueChange: r, ...c } = l, s = l.value != null, f = Kf(), v = ba((m) => m.search), g = ba((m) => m.selectedItemId), y = vr();
  return d.useEffect(() => {
    l.value != null && f.setState("search", l.value);
  }, [l.value]), d.createElement(Vn.input, { ref: i, ...c, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": y.listId, "aria-labelledby": y.labelId, "aria-activedescendant": g, id: y.inputId, type: "text", value: s ? l.value : v, onChange: (m) => {
    s || f.setState("search", m.target.value), r == null ? void 0 : r(m.target.value);
  } });
}), eR = d.forwardRef((l, i) => {
  let { children: r, label: c = "Suggestions", ...s } = l, f = d.useRef(null), v = d.useRef(null), g = ba((m) => m.selectedItemId), y = vr();
  return d.useEffect(() => {
    if (v.current && f.current) {
      let m = v.current, S = f.current, h, A = new ResizeObserver(() => {
        h = requestAnimationFrame(() => {
          let w = m.offsetHeight;
          S.style.setProperty("--cmdk-list-height", w.toFixed(1) + "px");
        });
      });
      return A.observe(m), () => {
        cancelAnimationFrame(h), A.unobserve(m);
      };
    }
  }, []), d.createElement(Vn.div, { ref: Sn(f, i), ...s, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": g, "aria-label": c, id: y.listId }, su(l, (m) => d.createElement("div", { ref: Sn(v, y.listInnerRef), "cmdk-list-sizer": "" }, m)));
}), tR = d.forwardRef((l, i) => {
  let { open: r, onOpenChange: c, overlayClassName: s, contentClassName: f, container: v, ...g } = l;
  return d.createElement(wy, { open: r, onOpenChange: c }, d.createElement(Dy, { container: v }, d.createElement(Oy, { "cmdk-overlay": "", className: s }), d.createElement(Ny, { "aria-label": l.label, "cmdk-dialog": "", className: f }, d.createElement(bb, { ref: i, ...g }))));
}), nR = d.forwardRef((l, i) => ba((r) => r.filtered.count === 0) ? d.createElement(Vn.div, { ref: i, ...l, "cmdk-empty": "", role: "presentation" }) : null), aR = d.forwardRef((l, i) => {
  let { progress: r, children: c, label: s = "Loading...", ...f } = l;
  return d.createElement(Vn.div, { ref: i, ...f, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": s }, su(l, (v) => d.createElement("div", { "aria-hidden": true }, v)));
}), QM = Object.assign(bb, { List: eR, Item: $A, Input: WA, Group: JA, Separator: FA, Dialog: tR, Empty: nR, Loading: aR });
function lR(l, i) {
  let r = l.nextElementSibling;
  for (; r; ) {
    if (r.matches(i)) return r;
    r = r.nextElementSibling;
  }
}
function oR(l, i) {
  let r = l.previousElementSibling;
  for (; r; ) {
    if (r.matches(i)) return r;
    r = r.previousElementSibling;
  }
}
function Sb(l) {
  let i = d.useRef(l);
  return Fa(() => {
    i.current = l;
  }), i;
}
var Fa = typeof window > "u" ? d.useEffect : d.useLayoutEffect;
function Xl(l) {
  let i = d.useRef();
  return i.current === void 0 && (i.current = l()), i;
}
function ba(l) {
  let i = Kf(), r = () => l(i.snapshot());
  return d.useSyncExternalStore(i.subscribe, r, r);
}
function Eb(l, i, r, c = []) {
  let s = d.useRef(), f = vr();
  return Fa(() => {
    var v;
    let g = (() => {
      var m;
      for (let S of r) {
        if (typeof S == "string") return S.trim();
        if (typeof S == "object" && "current" in S) return S.current ? (m = S.current.textContent) == null ? void 0 : m.trim() : s.current;
      }
    })(), y = c.map((m) => m.trim());
    f.value(l, g, y), (v = i.current) == null || v.setAttribute(Il, g), s.current = g;
  }), s;
}
var rR = () => {
  let [l, i] = d.useState(), r = Xl(() => /* @__PURE__ */ new Map());
  return Fa(() => {
    r.current.forEach((c) => c()), r.current = /* @__PURE__ */ new Map();
  }, [l]), (c, s) => {
    r.current.set(c, s), i({});
  };
};
function iR(l) {
  let i = l.type;
  return typeof i == "function" ? i(l.props) : "render" in i ? i.render(l.props) : l;
}
function su({ asChild: l, children: i }, r) {
  return l && d.isValidElement(i) ? d.cloneElement(iR(i), { ref: i.ref }, r(i.props.children)) : r(i);
}
var uR = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const cR = (l) => (i, r, c) => (c.setState = (s, f, ...v) => {
  const g = typeof s == "function" ? tE(s) : s;
  return i(g, f, ...v);
}, l(c.setState, r, c)), PM = cR;
var fu = "DropdownMenu", [sR] = ht(fu, [yf]), xt = yf(), [fR, xb] = sR(fu), Cb = (l) => {
  const { __scopeDropdownMenu: i, children: r, dir: c, open: s, defaultOpen: f, onOpenChange: v, modal: g = true } = l, y = xt(i), m = d.useRef(null), [S, h] = jt({ prop: s, defaultProp: f ?? false, onChange: v, caller: fu });
  return E.jsx(fR, { scope: i, triggerId: Ke(), triggerRef: m, contentId: Ke(), open: S, onOpenChange: h, onOpenToggle: d.useCallback(() => h((A) => !A), [h]), modal: g, children: E.jsx(Og, { ...y, open: S, onOpenChange: h, dir: c, modal: g, children: r }) });
};
Cb.displayName = fu;
var Tb = "DropdownMenuTrigger", _b = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, disabled: c = false, ...s } = l, f = xb(Tb, r), v = xt(r);
  return E.jsx(Ng, { asChild: true, ...v, children: E.jsx(ce.button, { type: "button", id: f.triggerId, "aria-haspopup": "menu", "aria-expanded": f.open, "aria-controls": f.open ? f.contentId : void 0, "data-state": f.open ? "open" : "closed", "data-disabled": c ? "" : void 0, disabled: c, ...s, ref: Sn(i, f.triggerRef), onPointerDown: W(l.onPointerDown, (g) => {
    !c && g.button === 0 && g.ctrlKey === false && (f.onOpenToggle(), f.open || g.preventDefault());
  }), onKeyDown: W(l.onKeyDown, (g) => {
    c || (["Enter", " "].includes(g.key) && f.onOpenToggle(), g.key === "ArrowDown" && f.onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(g.key) && g.preventDefault());
  }) }) });
});
_b.displayName = Tb;
var dR = "DropdownMenuPortal", Ab = (l) => {
  const { __scopeDropdownMenu: i, ...r } = l, c = xt(i);
  return E.jsx(zg, { ...c, ...r });
};
Ab.displayName = dR;
var Rb = "DropdownMenuContent", Mb = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...c } = l, s = xb(Rb, r), f = xt(r), v = d.useRef(false);
  return E.jsx(jg, { id: s.contentId, "aria-labelledby": s.triggerId, ...f, ...c, ref: i, onCloseAutoFocus: W(l.onCloseAutoFocus, (g) => {
    var _a;
    v.current || ((_a = s.triggerRef.current) == null ? void 0 : _a.focus()), v.current = false, g.preventDefault();
  }), onInteractOutside: W(l.onInteractOutside, (g) => {
    const y = g.detail.originalEvent, m = y.button === 0 && y.ctrlKey === true, S = y.button === 2 || m;
    (!s.modal || S) && (v.current = true);
  }), style: { ...l.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
Mb.displayName = Rb;
var pR = "DropdownMenuGroup", vR = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...c } = l, s = xt(r);
  return E.jsx(Ug, { ...s, ...c, ref: i });
});
vR.displayName = pR;
var mR = "DropdownMenuLabel", wb = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...c } = l, s = xt(r);
  return E.jsx(Bg, { ...s, ...c, ref: i });
});
wb.displayName = mR;
var hR = "DropdownMenuItem", Db = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...c } = l, s = xt(r);
  return E.jsx(Hg, { ...s, ...c, ref: i });
});
Db.displayName = hR;
var gR = "DropdownMenuCheckboxItem", yR = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...c } = l, s = xt(r);
  return E.jsx(Lg, { ...s, ...c, ref: i });
});
yR.displayName = gR;
var bR = "DropdownMenuRadioGroup", SR = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...c } = l, s = xt(r);
  return E.jsx(Gg, { ...s, ...c, ref: i });
});
SR.displayName = bR;
var ER = "DropdownMenuRadioItem", xR = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...c } = l, s = xt(r);
  return E.jsx(Yg, { ...s, ...c, ref: i });
});
xR.displayName = ER;
var CR = "DropdownMenuItemIndicator", TR = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...c } = l, s = xt(r);
  return E.jsx(Vg, { ...s, ...c, ref: i });
});
TR.displayName = CR;
var _R = "DropdownMenuSeparator", Ob = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...c } = l, s = xt(r);
  return E.jsx(qg, { ...s, ...c, ref: i });
});
Ob.displayName = _R;
var AR = "DropdownMenuArrow", RR = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...c } = l, s = xt(r);
  return E.jsx(Ig, { ...s, ...c, ref: i });
});
RR.displayName = AR;
var MR = "DropdownMenuSubTrigger", wR = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...c } = l, s = xt(r);
  return E.jsx(Xg, { ...s, ...c, ref: i });
});
wR.displayName = MR;
var DR = "DropdownMenuSubContent", OR = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...c } = l, s = xt(r);
  return E.jsx(Kg, { ...s, ...c, ref: i, style: { ...l.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
OR.displayName = DR;
var ZM = Cb, kM = _b, $M = Ab, JM = Mb, FM = wb, WM = Db, ew = Ob;
export {
  AM as $,
  uM as A,
  fM as B,
  $R as C,
  v_ as D,
  vM as E,
  mM as F,
  pM as G,
  dM as H,
  JR as I,
  cM as J,
  sM as K,
  yM as L,
  PR as M,
  bM as N,
  Oy as O,
  KR as P,
  SM as Q,
  BR as R,
  aM as S,
  YR as T,
  EM as U,
  xM as V,
  L_ as W,
  G_ as X,
  CM as Y,
  TM as Z,
  _M as _,
  ff as a,
  RM as a0,
  MM as a1,
  wM as a2,
  DM as a3,
  OM as a4,
  zM as a5,
  NM as a6,
  jM as a7,
  UM as a8,
  BM as a9,
  HM as aa,
  GM as ab,
  LM as ac,
  YM as ad,
  VM as ae,
  qM as af,
  IM as ag,
  XM as ah,
  KM as ai,
  QM as aj,
  ZM as ak,
  kM as al,
  $M as am,
  JM as an,
  FM as ao,
  ew as ap,
  WM as aq,
  VR as ar,
  PM as as,
  qR as at,
  gM as au,
  hM as av,
  O_ as aw,
  k as b,
  nr as c,
  QR as d,
  ZR as e,
  lM as f,
  oM as g,
  WR as h,
  eM as i,
  E as j,
  tM as k,
  nM as l,
  FR as m,
  kR as n,
  rM as o,
  p_ as p,
  wy as q,
  d as r,
  d_ as s,
  GR as t,
  Ny as u,
  zy as v,
  HR as w,
  Dy as x,
  iM as y,
  LR as z
};
