import { g as bf } from "./index-zC5F17iY.js";
import { r as sE, _ as ga, a as wh, g as fE, b as dE, h as ki, c as pE, o as mE, s as vE, f as hE, d as gE, e as yE, i as Kv, l as bE, j as SE, m as Xv, k as EE, n as xE, p as CE, q as TE } from "./vendor-CsGpsoRf.js";
import { c as W, a as Hi } from "./@radix-ui-BQCqNqg0.js";
import { p as _E } from "./immer-BCQU3qJI.js";
function RE(l, i) {
  for (var r = 0; r < i.length; r++) {
    const u = i[r];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const s in u) if (s !== "default" && !(s in l)) {
        const f = Object.getOwnPropertyDescriptor(u, s);
        f && Object.defineProperty(l, s, f.get ? f : { enumerable: true, get: () => u[s] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
var Ns = { exports: {} }, $o = {};
var Pv;
function AE() {
  if (Pv) return $o;
  Pv = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(u, s, f) {
    var m = null;
    if (f !== void 0 && (m = "" + f), s.key !== void 0 && (m = "" + s.key), "key" in s) {
      f = {};
      for (var h in s) h !== "key" && (f[h] = s[h]);
    } else f = s;
    return s = f.ref, { $$typeof: l, type: u, key: m, ref: s !== void 0 ? s : null, props: f };
  }
  return $o.Fragment = i, $o.jsx = r, $o.jsxs = r, $o;
}
var kv;
function ME() {
  return kv || (kv = 1, Ns.exports = AE()), Ns.exports;
}
var E = ME(), Os = { exports: {} }, Jo = {}, zs = { exports: {} }, ge = {};
var Qv;
function wE() {
  if (Qv) return ge;
  Qv = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), m = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.activity"), C = Symbol.iterator;
  function w(R) {
    return R === null || typeof R != "object" ? null : (R = C && R[C] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var N = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, x = Object.assign, T = {};
  function M(R, A, H) {
    this.props = R, this.context = A, this.refs = T, this.updater = H || N;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(R, A) {
    if (typeof R != "object" && typeof R != "function" && R != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, A, "setState");
  }, M.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function O() {
  }
  O.prototype = M.prototype;
  function j(R, A, H) {
    this.props = R, this.context = A, this.refs = T, this.updater = H || N;
  }
  var Y = j.prototype = new O();
  Y.constructor = j, x(Y, M.prototype), Y.isPureReactComponent = true;
  var $ = Array.isArray;
  function J() {
  }
  var V = { H: null, A: null, T: null, S: null }, ae = Object.prototype.hasOwnProperty;
  function ye(R, A, H) {
    var X = H.ref;
    return { $$typeof: l, type: R, key: A, ref: X !== void 0 ? X : null, props: H };
  }
  function me(R, A) {
    return ye(R.type, A, R.props);
  }
  function ce(R) {
    return typeof R == "object" && R !== null && R.$$typeof === l;
  }
  function de(R) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(H) {
      return A[H];
    });
  }
  var pe = /\/+/g;
  function be(R, A) {
    return typeof R == "object" && R !== null && R.key != null ? de("" + R.key) : A.toString(36);
  }
  function Se(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(J, J) : (R.status = "pending", R.then(function(A) {
          R.status === "pending" && (R.status = "fulfilled", R.value = A);
        }, function(A) {
          R.status === "pending" && (R.status = "rejected", R.reason = A);
        })), R.status) {
          case "fulfilled":
            return R.value;
          case "rejected":
            throw R.reason;
        }
    }
    throw R;
  }
  function I(R, A, H, X, P) {
    var F = typeof R;
    (F === "undefined" || F === "boolean") && (R = null);
    var K = false;
    if (R === null) K = true;
    else switch (F) {
      case "bigint":
      case "string":
      case "number":
        K = true;
        break;
      case "object":
        switch (R.$$typeof) {
          case l:
          case i:
            K = true;
            break;
          case b:
            return K = R._init, I(K(R._payload), A, H, X, P);
        }
    }
    if (K) return P = P(R), K = X === "" ? "." + be(R, 0) : X, $(P) ? (H = "", K != null && (H = K.replace(pe, "$&/") + "/"), I(P, A, H, "", function(Ce) {
      return Ce;
    })) : P != null && (ce(P) && (P = me(P, H + (P.key == null || R && R.key === P.key ? "" : ("" + P.key).replace(pe, "$&/") + "/") + K)), A.push(P)), 1;
    K = 0;
    var te = X === "" ? "." : X + ":";
    if ($(R)) for (var ie = 0; ie < R.length; ie++) X = R[ie], F = te + be(X, ie), K += I(X, A, H, F, P);
    else if (ie = w(R), typeof ie == "function") for (R = ie.call(R), ie = 0; !(X = R.next()).done; ) X = X.value, F = te + be(X, ie++), K += I(X, A, H, F, P);
    else if (F === "object") {
      if (typeof R.then == "function") return I(Se(R), A, H, X, P);
      throw A = String(R), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    }
    return K;
  }
  function ee(R, A, H) {
    if (R == null) return R;
    var X = [], P = 0;
    return I(R, X, "", "", function(F) {
      return A.call(H, F, P++);
    }), X;
  }
  function le(R) {
    if (R._status === -1) {
      var A = R._result;
      A = A(), A.then(function(H) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = H);
      }, function(H) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = H);
      }), R._status === -1 && (R._status = 0, R._result = A);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var ne = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R), error: R });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  }, Ee = { map: ee, forEach: function(R, A, H) {
    ee(R, function() {
      A.apply(this, arguments);
    }, H);
  }, count: function(R) {
    var A = 0;
    return ee(R, function() {
      A++;
    }), A;
  }, toArray: function(R) {
    return ee(R, function(A) {
      return A;
    }) || [];
  }, only: function(R) {
    if (!ce(R)) throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } };
  return ge.Activity = v, ge.Children = Ee, ge.Component = M, ge.Fragment = r, ge.Profiler = s, ge.PureComponent = j, ge.StrictMode = u, ge.Suspense = y, ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, ge.__COMPILER_RUNTIME = { __proto__: null, c: function(R) {
    return V.H.useMemoCache(R);
  } }, ge.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, ge.cacheSignal = function() {
    return null;
  }, ge.cloneElement = function(R, A, H) {
    if (R == null) throw Error("The argument must be a React element, but you passed " + R + ".");
    var X = x({}, R.props), P = R.key;
    if (A != null) for (F in A.key !== void 0 && (P = "" + A.key), A) !ae.call(A, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && A.ref === void 0 || (X[F] = A[F]);
    var F = arguments.length - 2;
    if (F === 1) X.children = H;
    else if (1 < F) {
      for (var K = Array(F), te = 0; te < F; te++) K[te] = arguments[te + 2];
      X.children = K;
    }
    return ye(R.type, P, X);
  }, ge.createContext = function(R) {
    return R = { $$typeof: m, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null }, R.Provider = R, R.Consumer = { $$typeof: f, _context: R }, R;
  }, ge.createElement = function(R, A, H) {
    var X, P = {}, F = null;
    if (A != null) for (X in A.key !== void 0 && (F = "" + A.key), A) ae.call(A, X) && X !== "key" && X !== "__self" && X !== "__source" && (P[X] = A[X]);
    var K = arguments.length - 2;
    if (K === 1) P.children = H;
    else if (1 < K) {
      for (var te = Array(K), ie = 0; ie < K; ie++) te[ie] = arguments[ie + 2];
      P.children = te;
    }
    if (R && R.defaultProps) for (X in K = R.defaultProps, K) P[X] === void 0 && (P[X] = K[X]);
    return ye(R, F, P);
  }, ge.createRef = function() {
    return { current: null };
  }, ge.forwardRef = function(R) {
    return { $$typeof: h, render: R };
  }, ge.isValidElement = ce, ge.lazy = function(R) {
    return { $$typeof: b, _payload: { _status: -1, _result: R }, _init: le };
  }, ge.memo = function(R, A) {
    return { $$typeof: g, type: R, compare: A === void 0 ? null : A };
  }, ge.startTransition = function(R) {
    var A = V.T, H = {};
    V.T = H;
    try {
      var X = R(), P = V.S;
      P !== null && P(H, X), typeof X == "object" && X !== null && typeof X.then == "function" && X.then(J, ne);
    } catch (F) {
      ne(F);
    } finally {
      A !== null && H.types !== null && (A.types = H.types), V.T = A;
    }
  }, ge.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, ge.use = function(R) {
    return V.H.use(R);
  }, ge.useActionState = function(R, A, H) {
    return V.H.useActionState(R, A, H);
  }, ge.useCallback = function(R, A) {
    return V.H.useCallback(R, A);
  }, ge.useContext = function(R) {
    return V.H.useContext(R);
  }, ge.useDebugValue = function() {
  }, ge.useDeferredValue = function(R, A) {
    return V.H.useDeferredValue(R, A);
  }, ge.useEffect = function(R, A) {
    return V.H.useEffect(R, A);
  }, ge.useEffectEvent = function(R) {
    return V.H.useEffectEvent(R);
  }, ge.useId = function() {
    return V.H.useId();
  }, ge.useImperativeHandle = function(R, A, H) {
    return V.H.useImperativeHandle(R, A, H);
  }, ge.useInsertionEffect = function(R, A) {
    return V.H.useInsertionEffect(R, A);
  }, ge.useLayoutEffect = function(R, A) {
    return V.H.useLayoutEffect(R, A);
  }, ge.useMemo = function(R, A) {
    return V.H.useMemo(R, A);
  }, ge.useOptimistic = function(R, A) {
    return V.H.useOptimistic(R, A);
  }, ge.useReducer = function(R, A, H) {
    return V.H.useReducer(R, A, H);
  }, ge.useRef = function(R) {
    return V.H.useRef(R);
  }, ge.useState = function(R) {
    return V.H.useState(R);
  }, ge.useSyncExternalStore = function(R, A, H) {
    return V.H.useSyncExternalStore(R, A, H);
  }, ge.useTransition = function() {
    return V.H.useTransition();
  }, ge.version = "19.2.4", ge;
}
var Zv;
function ar() {
  return Zv || (Zv = 1, zs.exports = wE()), zs.exports;
}
var js = { exports: {} }, ht = {};
var $v;
function DE() {
  if ($v) return ht;
  $v = 1;
  var l = ar();
  function i(y) {
    var g = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++) g += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + y + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var u = { d: { f: r, r: function() {
    throw Error(i(522));
  }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function f(y, g, b) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: s, key: v == null ? null : "" + v, children: y, containerInfo: g, implementation: b };
  }
  var m = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(y, g) {
    if (y === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, ht.createPortal = function(y, g) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(i(299));
    return f(y, g, null, b);
  }, ht.flushSync = function(y) {
    var g = m.T, b = u.p;
    try {
      if (m.T = null, u.p = 2, y) return y();
    } finally {
      m.T = g, u.p = b, u.d.f();
    }
  }, ht.preconnect = function(y, g) {
    typeof y == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, u.d.C(y, g));
  }, ht.prefetchDNS = function(y) {
    typeof y == "string" && u.d.D(y);
  }, ht.preinit = function(y, g) {
    if (typeof y == "string" && g && typeof g.as == "string") {
      var b = g.as, v = h(b, g.crossOrigin), C = typeof g.integrity == "string" ? g.integrity : void 0, w = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      b === "style" ? u.d.S(y, typeof g.precedence == "string" ? g.precedence : void 0, { crossOrigin: v, integrity: C, fetchPriority: w }) : b === "script" && u.d.X(y, { crossOrigin: v, integrity: C, fetchPriority: w, nonce: typeof g.nonce == "string" ? g.nonce : void 0 });
    }
  }, ht.preinitModule = function(y, g) {
    if (typeof y == "string") if (typeof g == "object" && g !== null) {
      if (g.as == null || g.as === "script") {
        var b = h(g.as, g.crossOrigin);
        u.d.M(y, { crossOrigin: b, integrity: typeof g.integrity == "string" ? g.integrity : void 0, nonce: typeof g.nonce == "string" ? g.nonce : void 0 });
      }
    } else g == null && u.d.M(y);
  }, ht.preload = function(y, g) {
    if (typeof y == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var b = g.as, v = h(b, g.crossOrigin);
      u.d.L(y, b, { crossOrigin: v, integrity: typeof g.integrity == "string" ? g.integrity : void 0, nonce: typeof g.nonce == "string" ? g.nonce : void 0, type: typeof g.type == "string" ? g.type : void 0, fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0, referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0, imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0, imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0, media: typeof g.media == "string" ? g.media : void 0 });
    }
  }, ht.preloadModule = function(y, g) {
    if (typeof y == "string") if (g) {
      var b = h(g.as, g.crossOrigin);
      u.d.m(y, { as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0, crossOrigin: b, integrity: typeof g.integrity == "string" ? g.integrity : void 0 });
    } else u.d.m(y);
  }, ht.requestFormReset = function(y) {
    u.d.r(y);
  }, ht.unstable_batchedUpdates = function(y, g) {
    return y(g);
  }, ht.useFormState = function(y, g, b) {
    return m.H.useFormState(y, g, b);
  }, ht.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, ht.version = "19.2.4", ht;
}
var Jv;
function Dh() {
  if (Jv) return js.exports;
  Jv = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
    } catch (i) {
      console.error(i);
    }
  }
  return l(), js.exports = DE(), js.exports;
}
var Fv;
function NE() {
  if (Fv) return Jo;
  Fv = 1;
  var l = sE(), i = ar(), r = Dh();
  function u(e) {
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
  function m(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (f(e) !== e) throw Error(u(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var c = o.alternate;
      if (c === null) {
        if (a = o.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (o.child === c.child) {
        for (c = o.child; c; ) {
          if (c === n) return y(o), e;
          if (c === a) return y(o), t;
          c = c.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== a.return) n = o, a = c;
      else {
        for (var p = false, S = o.child; S; ) {
          if (S === n) {
            p = true, n = o, a = c;
            break;
          }
          if (S === a) {
            p = true, a = o, n = c;
            break;
          }
          S = S.sibling;
        }
        if (!p) {
          for (S = c.child; S; ) {
            if (S === n) {
              p = true, n = c, a = o;
              break;
            }
            if (S === a) {
              p = true, a = c, n = o;
              break;
            }
            S = S.sibling;
          }
          if (!p) throw Error(u(189));
        }
      }
      if (n.alternate !== a) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = b(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign, C = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.transitional.element"), N = /* @__PURE__ */ Symbol.for("react.portal"), x = /* @__PURE__ */ Symbol.for("react.fragment"), T = /* @__PURE__ */ Symbol.for("react.strict_mode"), M = /* @__PURE__ */ Symbol.for("react.profiler"), O = /* @__PURE__ */ Symbol.for("react.consumer"), j = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), $ = /* @__PURE__ */ Symbol.for("react.suspense"), J = /* @__PURE__ */ Symbol.for("react.suspense_list"), V = /* @__PURE__ */ Symbol.for("react.memo"), ae = /* @__PURE__ */ Symbol.for("react.lazy"), ye = /* @__PURE__ */ Symbol.for("react.activity"), me = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ce = Symbol.iterator;
  function de(e) {
    return e === null || typeof e != "object" ? null : (e = ce && e[ce] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var pe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function be(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === pe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case x:
        return "Fragment";
      case M:
        return "Profiler";
      case T:
        return "StrictMode";
      case $:
        return "Suspense";
      case J:
        return "SuspenseList";
      case ye:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case N:
        return "Portal";
      case j:
        return e.displayName || "Context";
      case O:
        return (e._context.displayName || "Context") + ".Consumer";
      case Y:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case V:
        return t = e.displayName || null, t !== null ? t : be(e.type) || "Memo";
      case ae:
        t = e._payload, e = e._init;
        try {
          return be(e(t));
        } catch {
        }
    }
    return null;
  }
  var Se = Array.isArray, I = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = { pending: false, data: null, method: null, action: null }, ne = [], Ee = -1;
  function R(e) {
    return { current: e };
  }
  function A(e) {
    0 > Ee || (e.current = ne[Ee], ne[Ee] = null, Ee--);
  }
  function H(e, t) {
    Ee++, ne[Ee] = e.current, e.current = t;
  }
  var X = R(null), P = R(null), F = R(null), K = R(null);
  function te(e, t) {
    switch (H(F, t), H(P, e), H(X, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? pv(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = pv(t), e = mv(t, e);
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
    A(X), H(X, e);
  }
  function ie() {
    A(X), A(P), A(F);
  }
  function Ce(e) {
    e.memoizedState !== null && H(K, e);
    var t = X.current, n = mv(t, e.type);
    t !== n && (H(P, e), H(X, n));
  }
  function De(e) {
    P.current === e && (A(X), A(P)), K.current === e && (A(K), Po._currentValue = le);
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
            var Q = function() {
              throw Error();
            };
            if (Object.defineProperty(Q.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Q, []);
              } catch (G) {
                var L = G;
              }
              Reflect.construct(e, [], Q);
            } else {
              try {
                Q.call();
              } catch (G) {
                L = G;
              }
              e.call(Q.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (G) {
              L = G;
            }
            (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
            });
          }
        } catch (G) {
          if (G && L && typeof G.stack == "string") return [G.stack, L.stack];
        }
        return [null, null];
      } };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      o && o.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var c = a.DetermineComponentFrameRoot(), p = c[0], S = c[1];
      if (p && S) {
        var _ = p.split(`
`), B = S.split(`
`);
        for (o = a = 0; a < _.length && !_[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; o < B.length && !B[o].includes("DetermineComponentFrameRoot"); ) o++;
        if (a === _.length || o === B.length) for (a = _.length - 1, o = B.length - 1; 1 <= a && 0 <= o && _[a] !== B[o]; ) o--;
        for (; 1 <= a && 0 <= o; a--, o--) if (_[a] !== B[o]) {
          if (a !== 1 || o !== 1) do
            if (a--, o--, 0 > o || _[a] !== B[o]) {
              var q = `
` + _[a].replace(" at new ", " at ");
              return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q;
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
  function to(e) {
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
  var Bt = Object.prototype.hasOwnProperty, no = l.unstable_scheduleCallback, ao = l.unstable_cancelCallback, yt = l.unstable_shouldYield, qn = l.unstable_requestPaint, bt = l.unstable_now, bu = l.unstable_getCurrentPriorityLevel, Ra = l.unstable_ImmediatePriority, hr = l.unstable_UserBlockingPriority, Aa = l.unstable_NormalPriority, lo = l.unstable_LowPriority, xn = l.unstable_IdlePriority, gr = l.log, Kn = l.unstable_setDisableYieldValue, Ma = null, St = null;
  function nn(e) {
    if (typeof gr == "function" && Kn(e), St && typeof St.setStrictMode == "function") try {
      St.setStrictMode(Ma, e);
    } catch {
    }
  }
  var mt = Math.clz32 ? Math.clz32 : pn, Su = Math.log, oo = Math.LN2;
  function pn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Su(e) / oo | 0) | 0;
  }
  var tl = 256, nl = 262144, wa = 4194304;
  function mn(e) {
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
  function ve(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var o = 0, c = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var S = a & 134217727;
    return S !== 0 ? (a = S & ~c, a !== 0 ? o = mn(a) : (p &= S, p !== 0 ? o = mn(p) : n || (n = S & ~e, n !== 0 && (o = mn(n))))) : (S = a & ~c, S !== 0 ? o = mn(S) : p !== 0 ? o = mn(p) : n || (n = a & ~e, n !== 0 && (o = mn(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & c) === 0 && (c = o & -o, n = t & -t, c >= n || c === 32 && (n & 4194048) !== 0) ? t : o;
  }
  function qe(e, t) {
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
    var e = wa;
    return wa <<= 1, (wa & 62914560) === 0 && (wa = 4194304), e;
  }
  function Xn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Pe(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Tt(e, t, n, a, o, c) {
    var p = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var S = e.entanglements, _ = e.expirationTimes, B = e.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var q = 31 - mt(n), Q = 1 << q;
      S[q] = 0, _[q] = -1;
      var L = B[q];
      if (L !== null) for (B[q] = null, q = 0; q < L.length; q++) {
        var G = L[q];
        G !== null && (G.lane &= -536870913);
      }
      n &= ~Q;
    }
    a !== 0 && Da(e, a, 0), c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(p & ~t));
  }
  function Da(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - mt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function _t(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - mt(n), o = 1 << a;
      o & t | e[a] & t && (e[a] |= t), n &= ~o;
    }
  }
  function Rt(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : al(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function al(e) {
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
  function Eu() {
    var e = ee.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Hv(e.type));
  }
  function Wf(e, t) {
    var n = ee.p;
    try {
      return ee.p = e, t();
    } finally {
      ee.p = n;
    }
  }
  var Pn = Math.random().toString(36).slice(2), it = "__reactFiber$" + Pn, At = "__reactProps$" + Pn, ll = "__reactContainer$" + Pn, xu = "__reactEvents$" + Pn, Wb = "__reactListeners$" + Pn, eS = "__reactHandles$" + Pn, ed = "__reactResources$" + Pn, ro = "__reactMarker$" + Pn;
  function Cu(e) {
    delete e[it], delete e[At], delete e[xu], delete e[Wb], delete e[eS];
  }
  function ol(e) {
    var t = e[it];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[ll] || n[it]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ev(e); e !== null; ) {
          if (n = e[it]) return n;
          e = Ev(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function rl(e) {
    if (e = e[it] || e[ll]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function io(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function il(e) {
    var t = e[ed];
    return t || (t = e[ed] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function lt(e) {
    e[ro] = true;
  }
  var td = /* @__PURE__ */ new Set(), nd = {};
  function Na(e, t) {
    ul(e, t), ul(e + "Capture", t);
  }
  function ul(e, t) {
    for (nd[e] = t, e = 0; e < t.length; e++) td.add(t[e]);
  }
  var tS = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ad = {}, ld = {};
  function nS(e) {
    return Bt.call(ld, e) ? true : Bt.call(ad, e) ? false : tS.test(e) ? ld[e] = true : (ad[e] = true, false);
  }
  function yr(e, t, n) {
    if (nS(t)) if (n === null) e.removeAttribute(t);
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
  function br(e, t, n) {
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
  function Kt(e) {
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
  function od(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function aS(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var o = a.get, c = a.set;
      return Object.defineProperty(e, t, { configurable: true, get: function() {
        return o.call(this);
      }, set: function(p) {
        n = "" + p, c.call(this, p);
      } }), Object.defineProperty(e, t, { enumerable: a.enumerable }), { getValue: function() {
        return n;
      }, setValue: function(p) {
        n = "" + p;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Tu(e) {
    if (!e._valueTracker) {
      var t = od(e) ? "checked" : "value";
      e._valueTracker = aS(e, t, "" + e[t]);
    }
  }
  function rd(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(), a = "";
    return e && (a = od(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), true) : false;
  }
  function Sr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var lS = /[\n"\\]/g;
  function Xt(e) {
    return e.replace(lS, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function _u(e, t, n, a, o, c, p, S) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Kt(t)) : e.value !== "" + Kt(t) && (e.value = "" + Kt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? Ru(e, p, Kt(t)) : n != null ? Ru(e, p, Kt(n)) : a != null && e.removeAttribute("value"), o == null && c != null && (e.defaultChecked = !!c), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + Kt(S) : e.removeAttribute("name");
  }
  function id(e, t, n, a, o, c, p, S) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || n != null) {
      if (!(c !== "submit" && c !== "reset" || t != null)) {
        Tu(e);
        return;
      }
      n = n != null ? "" + Kt(n) : "", t = t != null ? "" + Kt(t) : n, S || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? o, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = S ? e.checked : !!a, e.defaultChecked = !!a, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), Tu(e);
  }
  function Ru(e, t, n) {
    t === "number" && Sr(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function cl(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = true;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && a && (e[n].defaultSelected = true);
    } else {
      for (n = "" + Kt(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = true, a && (e[o].defaultSelected = true);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = true);
    }
  }
  function ud(e, t, n) {
    if (t != null && (t = "" + Kt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Kt(n) : "";
  }
  function cd(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(u(92));
        if (Se(a)) {
          if (1 < a.length) throw Error(u(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Kt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Tu(e);
  }
  function sl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var oS = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function sd(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || oS.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function fd(e, t, n) {
    if (t != null && typeof t != "object") throw Error(u(62));
    if (e = e.style, n != null) {
      for (var a in n) !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var o in t) a = t[o], t.hasOwnProperty(o) && n[o] !== a && sd(e, o, a);
    } else for (var c in t) t.hasOwnProperty(c) && sd(e, c, t[c]);
  }
  function Au(e) {
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
  var rS = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), iS = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Er(e) {
    return iS.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Tn() {
  }
  var Mu = null;
  function wu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var fl = null, dl = null;
  function dd(e) {
    var t = rl(e);
    if (t && (e = t.stateNode)) {
      var n = e[At] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (_u(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Xt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var o = a[At] || null;
                if (!o) throw Error(u(90));
                _u(a, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
              }
            }
            for (t = 0; t < n.length; t++) a = n[t], a.form === e.form && rd(a);
          }
          break e;
        case "textarea":
          ud(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && cl(e, !!n.multiple, t, false);
      }
    }
  }
  var Du = false;
  function pd(e, t, n) {
    if (Du) return e(t, n);
    Du = true;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Du = false, (fl !== null || dl !== null) && (ui(), fl && (t = fl, e = dl, dl = fl = null, dd(t), e))) for (t = 0; t < e.length; t++) dd(e[t]);
    }
  }
  function uo(e, t) {
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
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var _n = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Nu = false;
  if (_n) try {
    var co = {};
    Object.defineProperty(co, "passive", { get: function() {
      Nu = true;
    } }), window.addEventListener("test", co, co), window.removeEventListener("test", co, co);
  } catch {
    Nu = false;
  }
  var kn = null, Ou = null, xr = null;
  function md() {
    if (xr) return xr;
    var e, t = Ou, n = t.length, a, o = "value" in kn ? kn.value : kn.textContent, c = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var p = n - e;
    for (a = 1; a <= p && t[n - a] === o[c - a]; a++) ;
    return xr = o.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Cr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Tr() {
    return true;
  }
  function vd() {
    return false;
  }
  function Mt(e) {
    function t(n, a, o, c, p) {
      this._reactName = n, this._targetInst = o, this.type = a, this.nativeEvent = c, this.target = p, this.currentTarget = null;
      for (var S in e) e.hasOwnProperty(S) && (n = e[S], this[S] = n ? n(c) : c[S]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === false) ? Tr : vd, this.isPropagationStopped = vd, this;
    }
    return v(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Tr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Tr);
    }, persist: function() {
    }, isPersistent: Tr }), t;
  }
  var Oa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, _r = Mt(Oa), so = v({}, Oa, { view: 0, detail: 0 }), uS = Mt(so), zu, ju, fo, Rr = v({}, so, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== fo && (fo && e.type === "mousemove" ? (zu = e.screenX - fo.screenX, ju = e.screenY - fo.screenY) : ju = zu = 0, fo = e), zu);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ju;
  } }), hd = Mt(Rr), cS = v({}, Rr, { dataTransfer: 0 }), sS = Mt(cS), fS = v({}, so, { relatedTarget: 0 }), Uu = Mt(fS), dS = v({}, Oa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pS = Mt(dS), mS = v({}, Oa, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), vS = Mt(mS), hS = v({}, Oa, { data: 0 }), gd = Mt(hS), gS = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, yS = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, bS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function SS(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = bS[e]) ? !!t[e] : false;
  }
  function Bu() {
    return SS;
  }
  var ES = v({}, so, { key: function(e) {
    if (e.key) {
      var t = gS[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Cr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yS[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Bu, charCode: function(e) {
    return e.type === "keypress" ? Cr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Cr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), xS = Mt(ES), CS = v({}, Rr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), yd = Mt(CS), TS = v({}, so, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bu }), _S = Mt(TS), RS = v({}, Oa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), AS = Mt(RS), MS = v({}, Rr, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), wS = Mt(MS), DS = v({}, Oa, { newState: 0, oldState: 0 }), NS = Mt(DS), OS = [9, 13, 27, 32], Hu = _n && "CompositionEvent" in window, po = null;
  _n && "documentMode" in document && (po = document.documentMode);
  var zS = _n && "TextEvent" in window && !po, bd = _n && (!Hu || po && 8 < po && 11 >= po), Sd = " ", Ed = false;
  function xd(e, t) {
    switch (e) {
      case "keyup":
        return OS.indexOf(t.keyCode) !== -1;
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
  function Cd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pl = false;
  function jS(e, t) {
    switch (e) {
      case "compositionend":
        return Cd(t);
      case "keypress":
        return t.which !== 32 ? null : (Ed = true, Sd);
      case "textInput":
        return e = t.data, e === Sd && Ed ? null : e;
      default:
        return null;
    }
  }
  function US(e, t) {
    if (pl) return e === "compositionend" || !Hu && xd(e, t) ? (e = md(), xr = Ou = kn = null, pl = false, e) : null;
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
        return bd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var BS = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Td(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!BS[e.type] : t === "textarea";
  }
  function _d(e, t, n, a) {
    fl ? dl ? dl.push(a) : dl = [a] : fl = a, t = vi(t, "onChange"), 0 < t.length && (n = new _r("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
  }
  var mo = null, vo = null;
  function HS(e) {
    iv(e, 0);
  }
  function Ar(e) {
    var t = io(e);
    if (rd(t)) return e;
  }
  function Rd(e, t) {
    if (e === "change") return t;
  }
  var Ad = false;
  if (_n) {
    var Lu;
    if (_n) {
      var Gu = "oninput" in document;
      if (!Gu) {
        var Md = document.createElement("div");
        Md.setAttribute("oninput", "return;"), Gu = typeof Md.oninput == "function";
      }
      Lu = Gu;
    } else Lu = false;
    Ad = Lu && (!document.documentMode || 9 < document.documentMode);
  }
  function wd() {
    mo && (mo.detachEvent("onpropertychange", Dd), vo = mo = null);
  }
  function Dd(e) {
    if (e.propertyName === "value" && Ar(vo)) {
      var t = [];
      _d(t, vo, e, wu(e)), pd(HS, t);
    }
  }
  function LS(e, t, n) {
    e === "focusin" ? (wd(), mo = t, vo = n, mo.attachEvent("onpropertychange", Dd)) : e === "focusout" && wd();
  }
  function GS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ar(vo);
  }
  function YS(e, t) {
    if (e === "click") return Ar(t);
  }
  function VS(e, t) {
    if (e === "input" || e === "change") return Ar(t);
  }
  function IS(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ht = typeof Object.is == "function" ? Object.is : IS;
  function ho(e, t) {
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
  function Nd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Od(e, t) {
    var n = Nd(e);
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
      n = Nd(n);
    }
  }
  function zd(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? zd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function jd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Sr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function Yu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var qS = _n && "documentMode" in document && 11 >= document.documentMode, ml = null, Vu = null, go = null, Iu = false;
  function Ud(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Iu || ml == null || ml !== Sr(a) || (a = ml, "selectionStart" in a && Yu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), go && ho(go, a) || (go = a, a = vi(Vu, "onSelect"), 0 < a.length && (t = new _r("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = ml)));
  }
  function za(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var vl = { animationend: za("Animation", "AnimationEnd"), animationiteration: za("Animation", "AnimationIteration"), animationstart: za("Animation", "AnimationStart"), transitionrun: za("Transition", "TransitionRun"), transitionstart: za("Transition", "TransitionStart"), transitioncancel: za("Transition", "TransitionCancel"), transitionend: za("Transition", "TransitionEnd") }, qu = {}, Bd = {};
  _n && (Bd = document.createElement("div").style, "AnimationEvent" in window || (delete vl.animationend.animation, delete vl.animationiteration.animation, delete vl.animationstart.animation), "TransitionEvent" in window || delete vl.transitionend.transition);
  function ja(e) {
    if (qu[e]) return qu[e];
    if (!vl[e]) return e;
    var t = vl[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Bd) return qu[e] = t[n];
    return e;
  }
  var Hd = ja("animationend"), Ld = ja("animationiteration"), Gd = ja("animationstart"), KS = ja("transitionrun"), XS = ja("transitionstart"), PS = ja("transitioncancel"), Yd = ja("transitionend"), Vd = /* @__PURE__ */ new Map(), Ku = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Ku.push("scrollEnd");
  function ln(e, t) {
    Vd.set(e, t), Na(t, [e]);
  }
  var Mr = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Pt = [], hl = 0, Xu = 0;
  function wr() {
    for (var e = hl, t = Xu = hl = 0; t < e; ) {
      var n = Pt[t];
      Pt[t++] = null;
      var a = Pt[t];
      Pt[t++] = null;
      var o = Pt[t];
      Pt[t++] = null;
      var c = Pt[t];
      if (Pt[t++] = null, a !== null && o !== null) {
        var p = a.pending;
        p === null ? o.next = o : (o.next = p.next, p.next = o), a.pending = o;
      }
      c !== 0 && Id(n, o, c);
    }
  }
  function Dr(e, t, n, a) {
    Pt[hl++] = e, Pt[hl++] = t, Pt[hl++] = n, Pt[hl++] = a, Xu |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Pu(e, t, n, a) {
    return Dr(e, t, n, a), Nr(e);
  }
  function Ua(e, t) {
    return Dr(e, null, null, t), Nr(e);
  }
  function Id(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var o = false, c = e.return; c !== null; ) c.childLanes |= n, a = c.alternate, a !== null && (a.childLanes |= n), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (o = true)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, o && t !== null && (o = 31 - mt(n), e = c.hiddenUpdates, a = e[o], a === null ? e[o] = [t] : a.push(t), t.lane = n | 536870912), c) : null;
  }
  function Nr(e) {
    if (50 < Go) throw Go = 0, ts = null, Error(u(185));
    for (var t = e.return; t !== null; ) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var gl = {};
  function kS(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Lt(e, t, n, a) {
    return new kS(e, t, n, a);
  }
  function ku(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Rn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Lt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function qd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
  }
  function Or(e, t, n, a, o, c) {
    var p = 0;
    if (a = e, typeof e == "function") ku(e) && (p = 1);
    else if (typeof e == "string") p = F1(e, n, X.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case ye:
        return e = Lt(31, n, t, o), e.elementType = ye, e.lanes = c, e;
      case x:
        return Ba(n.children, o, c, t);
      case T:
        p = 8, o |= 24;
        break;
      case M:
        return e = Lt(12, n, t, o | 2), e.elementType = M, e.lanes = c, e;
      case $:
        return e = Lt(13, n, t, o), e.elementType = $, e.lanes = c, e;
      case J:
        return e = Lt(19, n, t, o), e.elementType = J, e.lanes = c, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case j:
            p = 10;
            break e;
          case O:
            p = 9;
            break e;
          case Y:
            p = 11;
            break e;
          case V:
            p = 14;
            break e;
          case ae:
            p = 16, a = null;
            break e;
        }
        p = 29, n = Error(u(130, e === null ? "null" : typeof e, "")), a = null;
    }
    return t = Lt(p, n, t, o), t.elementType = e, t.type = a, t.lanes = c, t;
  }
  function Ba(e, t, n, a) {
    return e = Lt(7, e, a, t), e.lanes = n, e;
  }
  function Qu(e, t, n) {
    return e = Lt(6, e, null, t), e.lanes = n, e;
  }
  function Kd(e) {
    var t = Lt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Zu(e, t, n) {
    return t = Lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  var Xd = /* @__PURE__ */ new WeakMap();
  function kt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Xd.get(e);
      return n !== void 0 ? n : (t = { value: e, source: t, stack: to(t) }, Xd.set(e, t), t);
    }
    return { value: e, source: t, stack: to(t) };
  }
  var yl = [], bl = 0, zr = null, yo = 0, Qt = [], Zt = 0, Qn = null, vn = 1, hn = "";
  function An(e, t) {
    yl[bl++] = yo, yl[bl++] = zr, zr = e, yo = t;
  }
  function Pd(e, t, n) {
    Qt[Zt++] = vn, Qt[Zt++] = hn, Qt[Zt++] = Qn, Qn = e;
    var a = vn;
    e = hn;
    var o = 32 - mt(a) - 1;
    a &= ~(1 << o), n += 1;
    var c = 32 - mt(t) + o;
    if (30 < c) {
      var p = o - o % 5;
      c = (a & (1 << p) - 1).toString(32), a >>= p, o -= p, vn = 1 << 32 - mt(t) + o | n << o | a, hn = c + e;
    } else vn = 1 << c | n << o | a, hn = e;
  }
  function $u(e) {
    e.return !== null && (An(e, 1), Pd(e, 1, 0));
  }
  function Ju(e) {
    for (; e === zr; ) zr = yl[--bl], yl[bl] = null, yo = yl[--bl], yl[bl] = null;
    for (; e === Qn; ) Qn = Qt[--Zt], Qt[Zt] = null, hn = Qt[--Zt], Qt[Zt] = null, vn = Qt[--Zt], Qt[Zt] = null;
  }
  function kd(e, t) {
    Qt[Zt++] = vn, Qt[Zt++] = hn, Qt[Zt++] = Qn, vn = t.id, hn = t.overflow, Qn = e;
  }
  var ut = null, Ve = null, we = false, Zn = null, $t = false, Fu = Error(u(519));
  function $n(e) {
    var t = Error(u(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw bo(kt(t, e)), Fu;
  }
  function Qd(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[it] = e, t[At] = a, n) {
      case "dialog":
        Re("cancel", t), Re("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Re("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Vo.length; n++) Re(Vo[n], t);
        break;
      case "source":
        Re("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Re("error", t), Re("load", t);
        break;
      case "details":
        Re("toggle", t);
        break;
      case "input":
        Re("invalid", t), id(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
        break;
      case "select":
        Re("invalid", t);
        break;
      case "textarea":
        Re("invalid", t), cd(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === true || fv(t.textContent, n) ? (a.popover != null && (Re("beforetoggle", t), Re("toggle", t)), a.onScroll != null && Re("scroll", t), a.onScrollEnd != null && Re("scrollend", t), a.onClick != null && (t.onclick = Tn), t = true) : t = false, t || $n(e, true);
  }
  function Zd(e) {
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
  function Sl(e) {
    if (e !== ut) return false;
    if (!we) return Zd(e), we = true, false;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || hs(e.type, e.memoizedProps)), n = !n), n && Ve && $n(e), Zd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      Ve = Sv(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      Ve = Sv(e);
    } else t === 27 ? (t = Ve, sa(e.type) ? (e = Es, Es = null, Ve = e) : Ve = t) : Ve = ut ? Ft(e.stateNode.nextSibling) : null;
    return true;
  }
  function Ha() {
    Ve = ut = null, we = false;
  }
  function Wu() {
    var e = Zn;
    return e !== null && (Ot === null ? Ot = e : Ot.push.apply(Ot, e), Zn = null), e;
  }
  function bo(e) {
    Zn === null ? Zn = [e] : Zn.push(e);
  }
  var ec = R(null), La = null, Mn = null;
  function Jn(e, t, n) {
    H(ec, t._currentValue), t._currentValue = n;
  }
  function wn(e) {
    e._currentValue = ec.current, A(ec);
  }
  function tc(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function nc(e, t, n, a) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var c = o.dependencies;
      if (c !== null) {
        var p = o.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var S = c;
          c = o;
          for (var _ = 0; _ < t.length; _++) if (S.context === t[_]) {
            c.lanes |= n, S = c.alternate, S !== null && (S.lanes |= n), tc(c.return, n, e), a || (p = null);
            break e;
          }
          c = S.next;
        }
      } else if (o.tag === 18) {
        if (p = o.return, p === null) throw Error(u(341));
        p.lanes |= n, c = p.alternate, c !== null && (c.lanes |= n), tc(p, n, e), p = null;
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
  function El(e, t, n, a) {
    e = null;
    for (var o = t, c = false; o !== null; ) {
      if (!c) {
        if ((o.flags & 524288) !== 0) c = true;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var p = o.alternate;
        if (p === null) throw Error(u(387));
        if (p = p.memoizedProps, p !== null) {
          var S = o.type;
          Ht(o.pendingProps.value, p.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (o === K.current) {
        if (p = o.alternate, p === null) throw Error(u(387));
        p.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Po) : e = [Po]);
      }
      o = o.return;
    }
    e !== null && nc(t, e, n, a), t.flags |= 262144;
  }
  function jr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ht(e.context._currentValue, e.memoizedValue)) return true;
      e = e.next;
    }
    return false;
  }
  function Ga(e) {
    La = e, Mn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ct(e) {
    return $d(La, e);
  }
  function Ur(e, t) {
    return La === null && Ga(e), $d(e, t);
  }
  function $d(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Mn === null) {
      if (e === null) throw Error(u(308));
      Mn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Mn = Mn.next = t;
    return n;
  }
  var QS = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = { aborted: false, addEventListener: function(n, a) {
      e.push(a);
    } };
    this.abort = function() {
      t.aborted = true, e.forEach(function(n) {
        return n();
      });
    };
  }, ZS = l.unstable_scheduleCallback, $S = l.unstable_NormalPriority, Je = { $$typeof: j, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function ac() {
    return { controller: new QS(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function So(e) {
    e.refCount--, e.refCount === 0 && ZS($S, function() {
      e.controller.abort();
    });
  }
  var Eo = null, lc = 0, xl = 0, Cl = null;
  function JS(e, t) {
    if (Eo === null) {
      var n = Eo = [];
      lc = 0, xl = is(), Cl = { status: "pending", value: void 0, then: function(a) {
        n.push(a);
      } };
    }
    return lc++, t.then(Jd, Jd), t;
  }
  function Jd() {
    if (--lc === 0 && Eo !== null) {
      Cl !== null && (Cl.status = "fulfilled");
      var e = Eo;
      Eo = null, xl = 0, Cl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function FS(e, t) {
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
  var Fd = I.S;
  I.S = function(e, t) {
    Um = bt(), typeof t == "object" && t !== null && typeof t.then == "function" && JS(e, t), Fd !== null && Fd(e, t);
  };
  var Ya = R(null);
  function oc() {
    var e = Ya.current;
    return e !== null ? e : Ye.pooledCache;
  }
  function Br(e, t) {
    t === null ? H(Ya, Ya.current) : H(Ya, t.pool);
  }
  function Wd() {
    var e = oc();
    return e === null ? null : { parent: Je._currentValue, pool: e };
  }
  var Tl = Error(u(460)), rc = Error(u(474)), Hr = Error(u(542)), Lr = { then: function() {
  } };
  function ep(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function tp(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Tn, Tn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, ap(e), e;
      default:
        if (typeof t.status == "string") t.then(Tn, Tn);
        else {
          if (e = Ye, e !== null && 100 < e.shellSuspendCounter) throw Error(u(482));
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
            throw e = t.reason, ap(e), e;
        }
        throw Ia = t, Tl;
    }
  }
  function Va(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ia = n, Tl) : n;
    }
  }
  var Ia = null;
  function np() {
    if (Ia === null) throw Error(u(459));
    var e = Ia;
    return Ia = null, e;
  }
  function ap(e) {
    if (e === Tl || e === Hr) throw Error(u(483));
  }
  var _l = null, xo = 0;
  function Gr(e) {
    var t = xo;
    return xo += 1, _l === null && (_l = []), tp(_l, e, t);
  }
  function Co(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Yr(e, t) {
    throw t.$$typeof === C ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function lp(e) {
    function t(z, D) {
      if (e) {
        var U = z.deletions;
        U === null ? (z.deletions = [D], z.flags |= 16) : U.push(D);
      }
    }
    function n(z, D) {
      if (!e) return null;
      for (; D !== null; ) t(z, D), D = D.sibling;
      return null;
    }
    function a(z) {
      for (var D = /* @__PURE__ */ new Map(); z !== null; ) z.key !== null ? D.set(z.key, z) : D.set(z.index, z), z = z.sibling;
      return D;
    }
    function o(z, D) {
      return z = Rn(z, D), z.index = 0, z.sibling = null, z;
    }
    function c(z, D, U) {
      return z.index = U, e ? (U = z.alternate, U !== null ? (U = U.index, U < D ? (z.flags |= 67108866, D) : U) : (z.flags |= 67108866, D)) : (z.flags |= 1048576, D);
    }
    function p(z) {
      return e && z.alternate === null && (z.flags |= 67108866), z;
    }
    function S(z, D, U, k) {
      return D === null || D.tag !== 6 ? (D = Qu(U, z.mode, k), D.return = z, D) : (D = o(D, U), D.return = z, D);
    }
    function _(z, D, U, k) {
      var se = U.type;
      return se === x ? q(z, D, U.props.children, k, U.key) : D !== null && (D.elementType === se || typeof se == "object" && se !== null && se.$$typeof === ae && Va(se) === D.type) ? (D = o(D, U.props), Co(D, U), D.return = z, D) : (D = Or(U.type, U.key, U.props, null, z.mode, k), Co(D, U), D.return = z, D);
    }
    function B(z, D, U, k) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== U.containerInfo || D.stateNode.implementation !== U.implementation ? (D = Zu(U, z.mode, k), D.return = z, D) : (D = o(D, U.children || []), D.return = z, D);
    }
    function q(z, D, U, k, se) {
      return D === null || D.tag !== 7 ? (D = Ba(U, z.mode, k, se), D.return = z, D) : (D = o(D, U), D.return = z, D);
    }
    function Q(z, D, U) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint") return D = Qu("" + D, z.mode, U), D.return = z, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case w:
            return U = Or(D.type, D.key, D.props, null, z.mode, U), Co(U, D), U.return = z, U;
          case N:
            return D = Zu(D, z.mode, U), D.return = z, D;
          case ae:
            return D = Va(D), Q(z, D, U);
        }
        if (Se(D) || de(D)) return D = Ba(D, z.mode, U, null), D.return = z, D;
        if (typeof D.then == "function") return Q(z, Gr(D), U);
        if (D.$$typeof === j) return Q(z, Ur(z, D), U);
        Yr(z, D);
      }
      return null;
    }
    function L(z, D, U, k) {
      var se = D !== null ? D.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint") return se !== null ? null : S(z, D, "" + U, k);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case w:
            return U.key === se ? _(z, D, U, k) : null;
          case N:
            return U.key === se ? B(z, D, U, k) : null;
          case ae:
            return U = Va(U), L(z, D, U, k);
        }
        if (Se(U) || de(U)) return se !== null ? null : q(z, D, U, k, null);
        if (typeof U.then == "function") return L(z, D, Gr(U), k);
        if (U.$$typeof === j) return L(z, D, Ur(z, U), k);
        Yr(z, U);
      }
      return null;
    }
    function G(z, D, U, k, se) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint") return z = z.get(U) || null, S(D, z, "" + k, se);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case w:
            return z = z.get(k.key === null ? U : k.key) || null, _(D, z, k, se);
          case N:
            return z = z.get(k.key === null ? U : k.key) || null, B(D, z, k, se);
          case ae:
            return k = Va(k), G(z, D, U, k, se);
        }
        if (Se(k) || de(k)) return z = z.get(U) || null, q(D, z, k, se, null);
        if (typeof k.then == "function") return G(z, D, U, Gr(k), se);
        if (k.$$typeof === j) return G(z, D, U, Ur(D, k), se);
        Yr(D, k);
      }
      return null;
    }
    function oe(z, D, U, k) {
      for (var se = null, Ne = null, re = D, Te = D = 0, Me = null; re !== null && Te < U.length; Te++) {
        re.index > Te ? (Me = re, re = null) : Me = re.sibling;
        var Oe = L(z, re, U[Te], k);
        if (Oe === null) {
          re === null && (re = Me);
          break;
        }
        e && re && Oe.alternate === null && t(z, re), D = c(Oe, D, Te), Ne === null ? se = Oe : Ne.sibling = Oe, Ne = Oe, re = Me;
      }
      if (Te === U.length) return n(z, re), we && An(z, Te), se;
      if (re === null) {
        for (; Te < U.length; Te++) re = Q(z, U[Te], k), re !== null && (D = c(re, D, Te), Ne === null ? se = re : Ne.sibling = re, Ne = re);
        return we && An(z, Te), se;
      }
      for (re = a(re); Te < U.length; Te++) Me = G(re, z, Te, U[Te], k), Me !== null && (e && Me.alternate !== null && re.delete(Me.key === null ? Te : Me.key), D = c(Me, D, Te), Ne === null ? se = Me : Ne.sibling = Me, Ne = Me);
      return e && re.forEach(function(va) {
        return t(z, va);
      }), we && An(z, Te), se;
    }
    function fe(z, D, U, k) {
      if (U == null) throw Error(u(151));
      for (var se = null, Ne = null, re = D, Te = D = 0, Me = null, Oe = U.next(); re !== null && !Oe.done; Te++, Oe = U.next()) {
        re.index > Te ? (Me = re, re = null) : Me = re.sibling;
        var va = L(z, re, Oe.value, k);
        if (va === null) {
          re === null && (re = Me);
          break;
        }
        e && re && va.alternate === null && t(z, re), D = c(va, D, Te), Ne === null ? se = va : Ne.sibling = va, Ne = va, re = Me;
      }
      if (Oe.done) return n(z, re), we && An(z, Te), se;
      if (re === null) {
        for (; !Oe.done; Te++, Oe = U.next()) Oe = Q(z, Oe.value, k), Oe !== null && (D = c(Oe, D, Te), Ne === null ? se = Oe : Ne.sibling = Oe, Ne = Oe);
        return we && An(z, Te), se;
      }
      for (re = a(re); !Oe.done; Te++, Oe = U.next()) Oe = G(re, z, Te, Oe.value, k), Oe !== null && (e && Oe.alternate !== null && re.delete(Oe.key === null ? Te : Oe.key), D = c(Oe, D, Te), Ne === null ? se = Oe : Ne.sibling = Oe, Ne = Oe);
      return e && re.forEach(function(cE) {
        return t(z, cE);
      }), we && An(z, Te), se;
    }
    function Ge(z, D, U, k) {
      if (typeof U == "object" && U !== null && U.type === x && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case w:
            e: {
              for (var se = U.key; D !== null; ) {
                if (D.key === se) {
                  if (se = U.type, se === x) {
                    if (D.tag === 7) {
                      n(z, D.sibling), k = o(D, U.props.children), k.return = z, z = k;
                      break e;
                    }
                  } else if (D.elementType === se || typeof se == "object" && se !== null && se.$$typeof === ae && Va(se) === D.type) {
                    n(z, D.sibling), k = o(D, U.props), Co(k, U), k.return = z, z = k;
                    break e;
                  }
                  n(z, D);
                  break;
                } else t(z, D);
                D = D.sibling;
              }
              U.type === x ? (k = Ba(U.props.children, z.mode, k, U.key), k.return = z, z = k) : (k = Or(U.type, U.key, U.props, null, z.mode, k), Co(k, U), k.return = z, z = k);
            }
            return p(z);
          case N:
            e: {
              for (se = U.key; D !== null; ) {
                if (D.key === se) if (D.tag === 4 && D.stateNode.containerInfo === U.containerInfo && D.stateNode.implementation === U.implementation) {
                  n(z, D.sibling), k = o(D, U.children || []), k.return = z, z = k;
                  break e;
                } else {
                  n(z, D);
                  break;
                }
                else t(z, D);
                D = D.sibling;
              }
              k = Zu(U, z.mode, k), k.return = z, z = k;
            }
            return p(z);
          case ae:
            return U = Va(U), Ge(z, D, U, k);
        }
        if (Se(U)) return oe(z, D, U, k);
        if (de(U)) {
          if (se = de(U), typeof se != "function") throw Error(u(150));
          return U = se.call(U), fe(z, D, U, k);
        }
        if (typeof U.then == "function") return Ge(z, D, Gr(U), k);
        if (U.$$typeof === j) return Ge(z, D, Ur(z, U), k);
        Yr(z, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, D !== null && D.tag === 6 ? (n(z, D.sibling), k = o(D, U), k.return = z, z = k) : (n(z, D), k = Qu(U, z.mode, k), k.return = z, z = k), p(z)) : n(z, D);
    }
    return function(z, D, U, k) {
      try {
        xo = 0;
        var se = Ge(z, D, U, k);
        return _l = null, se;
      } catch (re) {
        if (re === Tl || re === Hr) throw re;
        var Ne = Lt(29, re, null, z.mode);
        return Ne.lanes = k, Ne.return = z, Ne;
      }
    };
  }
  var qa = lp(true), op = lp(false), Fn = false;
  function ic(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function uc(e, t) {
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
      return o === null ? t.next = t : (t.next = o.next, o.next = t), a.pending = t, t = Nr(e), Id(e, null, n), t;
    }
    return Dr(e, a, t, n), Nr(e);
  }
  function To(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, _t(e, n);
    }
  }
  function cc(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var o = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var p = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          c === null ? o = c = p : c = c.next = p, n = n.next;
        } while (n !== null);
        c === null ? o = c = t : c = c.next = t;
      } else o = c = t;
      n = { baseState: a.baseState, firstBaseUpdate: o, lastBaseUpdate: c, shared: a.shared, callbacks: a.callbacks }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var sc = false;
  function _o() {
    if (sc) {
      var e = Cl;
      if (e !== null) throw e;
    }
  }
  function Ro(e, t, n, a) {
    sc = false;
    var o = e.updateQueue;
    Fn = false;
    var c = o.firstBaseUpdate, p = o.lastBaseUpdate, S = o.shared.pending;
    if (S !== null) {
      o.shared.pending = null;
      var _ = S, B = _.next;
      _.next = null, p === null ? c = B : p.next = B, p = _;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, S = q.lastBaseUpdate, S !== p && (S === null ? q.firstBaseUpdate = B : S.next = B, q.lastBaseUpdate = _));
    }
    if (c !== null) {
      var Q = o.baseState;
      p = 0, q = B = _ = null, S = c;
      do {
        var L = S.lane & -536870913, G = L !== S.lane;
        if (G ? (Ae & L) === L : (a & L) === L) {
          L !== 0 && L === xl && (sc = true), q !== null && (q = q.next = { lane: 0, tag: S.tag, payload: S.payload, callback: null, next: null });
          e: {
            var oe = e, fe = S;
            L = t;
            var Ge = n;
            switch (fe.tag) {
              case 1:
                if (oe = fe.payload, typeof oe == "function") {
                  Q = oe.call(Ge, Q, L);
                  break e;
                }
                Q = oe;
                break e;
              case 3:
                oe.flags = oe.flags & -65537 | 128;
              case 0:
                if (oe = fe.payload, L = typeof oe == "function" ? oe.call(Ge, Q, L) : oe, L == null) break e;
                Q = v({}, Q, L);
                break e;
              case 2:
                Fn = true;
            }
          }
          L = S.callback, L !== null && (e.flags |= 64, G && (e.flags |= 8192), G = o.callbacks, G === null ? o.callbacks = [L] : G.push(L));
        } else G = { lane: L, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, q === null ? (B = q = G, _ = Q) : q = q.next = G, p |= L;
        if (S = S.next, S === null) {
          if (S = o.shared.pending, S === null) break;
          G = S, S = G.next, G.next = null, o.lastBaseUpdate = G, o.shared.pending = null;
        }
      } while (true);
      q === null && (_ = Q), o.baseState = _, o.firstBaseUpdate = B, o.lastBaseUpdate = q, c === null && (o.shared.lanes = 0), oa |= p, e.lanes = p, e.memoizedState = Q;
    }
  }
  function rp(e, t) {
    if (typeof e != "function") throw Error(u(191, e));
    e.call(t);
  }
  function ip(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) rp(n[e], t);
  }
  var Rl = R(null), Vr = R(0);
  function up(e, t) {
    e = Ln, H(Vr, e), H(Rl, t), Ln = e | t.baseLanes;
  }
  function fc() {
    H(Vr, Ln), H(Rl, Rl.current);
  }
  function dc() {
    Ln = Vr.current, A(Rl), A(Vr);
  }
  var Gt = R(null), Jt = null;
  function ta(e) {
    var t = e.alternate;
    H(Ze, Ze.current & 1), H(Gt, e), Jt === null && (t === null || Rl.current !== null || t.memoizedState !== null) && (Jt = e);
  }
  function pc(e) {
    H(Ze, Ze.current), H(Gt, e), Jt === null && (Jt = e);
  }
  function cp(e) {
    e.tag === 22 ? (H(Ze, Ze.current), H(Gt, e), Jt === null && (Jt = e)) : na();
  }
  function na() {
    H(Ze, Ze.current), H(Gt, Gt.current);
  }
  function Yt(e) {
    A(Gt), Jt === e && (Jt = null), A(Ze);
  }
  var Ze = R(0);
  function Ir(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || bs(n) || Ss(n))) return t;
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
  var Dn = 0, xe = null, He = null, Fe = null, qr = false, Al = false, Ka = false, Kr = 0, Ao = 0, Ml = null, WS = 0;
  function ke() {
    throw Error(u(321));
  }
  function mc(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ht(e[n], t[n])) return false;
    return true;
  }
  function vc(e, t, n, a, o, c) {
    return Dn = c, xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, I.H = e === null || e.memoizedState === null ? Pp : Dc, Ka = false, c = n(a, o), Ka = false, Al && (c = fp(t, n, a, o)), sp(e), c;
  }
  function sp(e) {
    I.H = Do;
    var t = He !== null && He.next !== null;
    if (Dn = 0, Fe = He = xe = null, qr = false, Ao = 0, Ml = null, t) throw Error(u(300));
    e === null || We || (e = e.dependencies, e !== null && jr(e) && (We = true));
  }
  function fp(e, t, n, a) {
    xe = e;
    var o = 0;
    do {
      if (Al && (Ml = null), Ao = 0, Al = false, 25 <= o) throw Error(u(301));
      if (o += 1, Fe = He = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      I.H = kp, c = t(n, a);
    } while (Al);
    return c;
  }
  function e1() {
    var e = I.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Mo(t) : t, e = e.useState()[0], (He !== null ? He.memoizedState : null) !== e && (xe.flags |= 1024), t;
  }
  function hc() {
    var e = Kr !== 0;
    return Kr = 0, e;
  }
  function gc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function yc(e) {
    if (qr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      qr = false;
    }
    Dn = 0, Fe = He = xe = null, Al = false, Ao = Kr = 0, Ml = null;
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Fe === null ? xe.memoizedState = Fe = e : Fe = Fe.next = e, Fe;
  }
  function $e() {
    if (He === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = He.next;
    var t = Fe === null ? xe.memoizedState : Fe.next;
    if (t !== null) Fe = t, He = e;
    else {
      if (e === null) throw xe.alternate === null ? Error(u(467)) : Error(u(310));
      He = e, e = { memoizedState: He.memoizedState, baseState: He.baseState, baseQueue: He.baseQueue, queue: He.queue, next: null }, Fe === null ? xe.memoizedState = Fe = e : Fe = Fe.next = e;
    }
    return Fe;
  }
  function Xr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Mo(e) {
    var t = Ao;
    return Ao += 1, Ml === null && (Ml = []), e = tp(Ml, e, t), t = xe, (Fe === null ? t.memoizedState : Fe.next) === null && (t = t.alternate, I.H = t === null || t.memoizedState === null ? Pp : Dc), e;
  }
  function Pr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Mo(e);
      if (e.$$typeof === j) return ct(e);
    }
    throw Error(u(438, String(e)));
  }
  function bc(e) {
    var t = null, n = xe.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = xe.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(o) {
        return o.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Xr(), xe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = me;
    return t.index++, n;
  }
  function Nn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function kr(e) {
    var t = $e();
    return Sc(t, He, e);
  }
  function Sc(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = n;
    var o = e.baseQueue, c = a.pending;
    if (c !== null) {
      if (o !== null) {
        var p = o.next;
        o.next = c.next, c.next = p;
      }
      t.baseQueue = o = c, a.pending = null;
    }
    if (c = e.baseState, o === null) e.memoizedState = c;
    else {
      t = o.next;
      var S = p = null, _ = null, B = t, q = false;
      do {
        var Q = B.lane & -536870913;
        if (Q !== B.lane ? (Ae & Q) === Q : (Dn & Q) === Q) {
          var L = B.revertLane;
          if (L === 0) _ !== null && (_ = _.next = { lane: 0, revertLane: 0, gesture: null, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), Q === xl && (q = true);
          else if ((Dn & L) === L) {
            B = B.next, L === xl && (q = true);
            continue;
          } else Q = { lane: 0, revertLane: B.revertLane, gesture: null, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }, _ === null ? (S = _ = Q, p = c) : _ = _.next = Q, xe.lanes |= L, oa |= L;
          Q = B.action, Ka && n(c, Q), c = B.hasEagerState ? B.eagerState : n(c, Q);
        } else L = { lane: Q, revertLane: B.revertLane, gesture: B.gesture, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }, _ === null ? (S = _ = L, p = c) : _ = _.next = L, xe.lanes |= Q, oa |= Q;
        B = B.next;
      } while (B !== null && B !== t);
      if (_ === null ? p = c : _.next = S, !Ht(c, e.memoizedState) && (We = true, q && (n = Cl, n !== null))) throw n;
      e.memoizedState = c, e.baseState = p, e.baseQueue = _, a.lastRenderedState = c;
    }
    return o === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Ec(e) {
    var t = $e(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, o = n.pending, c = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var p = o = o.next;
      do
        c = e(c, p.action), p = p.next;
      while (p !== o);
      Ht(c, t.memoizedState) || (We = true), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
    }
    return [c, a];
  }
  function dp(e, t, n) {
    var a = xe, o = $e(), c = we;
    if (c) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = t();
    var p = !Ht((He || o).memoizedState, n);
    if (p && (o.memoizedState = n, We = true), o = o.queue, Tc(vp.bind(null, a, o, e), [e]), o.getSnapshot !== t || p || Fe !== null && Fe.memoizedState.tag & 1) {
      if (a.flags |= 2048, wl(9, { destroy: void 0 }, mp.bind(null, a, o, n, t), null), Ye === null) throw Error(u(349));
      c || (Dn & 127) !== 0 || pp(a, t, n);
    }
    return n;
  }
  function pp(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = xe.updateQueue, t === null ? (t = Xr(), xe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function mp(e, t, n, a) {
    t.value = n, t.getSnapshot = a, hp(t) && gp(e);
  }
  function vp(e, t, n) {
    return n(function() {
      hp(t) && gp(e);
    });
  }
  function hp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ht(e, n);
    } catch {
      return true;
    }
  }
  function gp(e) {
    var t = Ua(e, 2);
    t !== null && zt(t, e, 2);
  }
  function xc(e) {
    var t = Et();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Ka) {
        nn(true);
        try {
          n();
        } finally {
          nn(false);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Nn, lastRenderedState: e }, t;
  }
  function yp(e, t, n, a) {
    return e.baseState = n, Sc(e, He, typeof a == "function" ? a : Nn);
  }
  function t1(e, t, n, a, o) {
    if ($r(e)) throw Error(u(485));
    if (e = t.action, e !== null) {
      var c = { payload: o, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(p) {
        c.listeners.push(p);
      } };
      I.T !== null ? n(true) : c.isTransition = false, a(c), n = t.pending, n === null ? (c.next = t.pending = c, bp(t, c)) : (c.next = n.next, t.pending = n.next = c);
    }
  }
  function bp(e, t) {
    var n = t.action, a = t.payload, o = e.state;
    if (t.isTransition) {
      var c = I.T, p = {};
      I.T = p;
      try {
        var S = n(o, a), _ = I.S;
        _ !== null && _(p, S), Sp(e, t, S);
      } catch (B) {
        Cc(e, t, B);
      } finally {
        c !== null && p.types !== null && (c.types = p.types), I.T = c;
      }
    } else try {
      c = n(o, a), Sp(e, t, c);
    } catch (B) {
      Cc(e, t, B);
    }
  }
  function Sp(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
      Ep(e, t, a);
    }, function(a) {
      return Cc(e, t, a);
    }) : Ep(e, t, n);
  }
  function Ep(e, t, n) {
    t.status = "fulfilled", t.value = n, xp(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, bp(e, n)));
  }
  function Cc(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, xp(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function xp(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Cp(e, t) {
    return t;
  }
  function Tp(e, t) {
    if (we) {
      var n = Ye.formState;
      if (n !== null) {
        e: {
          var a = xe;
          if (we) {
            if (Ve) {
              t: {
                for (var o = Ve, c = $t; o.nodeType !== 8; ) {
                  if (!c) {
                    o = null;
                    break t;
                  }
                  if (o = Ft(o.nextSibling), o === null) {
                    o = null;
                    break t;
                  }
                }
                c = o.data, o = c === "F!" || c === "F" ? o : null;
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
    return n = Et(), n.memoizedState = n.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Cp, lastRenderedState: t }, n.queue = a, n = qp.bind(null, xe, a), a.dispatch = n, a = xc(false), c = wc.bind(null, xe, false, a.queue), a = Et(), o = { state: t, dispatch: null, action: e, pending: null }, a.queue = o, n = t1.bind(null, xe, o, c, n), o.dispatch = n, a.memoizedState = e, [t, n, false];
  }
  function _p(e) {
    var t = $e();
    return Rp(t, He, e);
  }
  function Rp(e, t, n) {
    if (t = Sc(e, t, Cp)[0], e = kr(Nn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = Mo(t);
    } catch (p) {
      throw p === Tl ? Hr : p;
    }
    else a = t;
    t = $e();
    var o = t.queue, c = o.dispatch;
    return n !== t.memoizedState && (xe.flags |= 2048, wl(9, { destroy: void 0 }, n1.bind(null, o, n), null)), [a, c, e];
  }
  function n1(e, t) {
    e.action = t;
  }
  function Ap(e) {
    var t = $e(), n = He;
    if (n !== null) return Rp(t, n, e);
    $e(), t = t.memoizedState, n = $e();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, false];
  }
  function wl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = xe.updateQueue, t === null && (t = Xr(), xe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Mp() {
    return $e().memoizedState;
  }
  function Qr(e, t, n, a) {
    var o = Et();
    xe.flags |= e, o.memoizedState = wl(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a);
  }
  function Zr(e, t, n, a) {
    var o = $e();
    a = a === void 0 ? null : a;
    var c = o.memoizedState.inst;
    He !== null && a !== null && mc(a, He.memoizedState.deps) ? o.memoizedState = wl(t, c, n, a) : (xe.flags |= e, o.memoizedState = wl(1 | t, c, n, a));
  }
  function wp(e, t) {
    Qr(8390656, 8, e, t);
  }
  function Tc(e, t) {
    Zr(2048, 8, e, t);
  }
  function a1(e) {
    xe.flags |= 4;
    var t = xe.updateQueue;
    if (t === null) t = Xr(), xe.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Dp(e) {
    var t = $e().memoizedState;
    return a1({ ref: t, nextImpl: e }), function() {
      if ((je & 2) !== 0) throw Error(u(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Np(e, t) {
    return Zr(4, 2, e, t);
  }
  function Op(e, t) {
    return Zr(4, 4, e, t);
  }
  function zp(e, t) {
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
  function jp(e, t, n) {
    n = n != null ? n.concat([e]) : null, Zr(4, 4, zp.bind(null, t, e), n);
  }
  function _c() {
  }
  function Up(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && mc(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Bp(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && mc(t, a[1])) return a[0];
    if (a = e(), Ka) {
      nn(true);
      try {
        e();
      } finally {
        nn(false);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Rc(e, t, n) {
    return n === void 0 || (Dn & 1073741824) !== 0 && (Ae & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Hm(), xe.lanes |= e, oa |= e, n);
  }
  function Hp(e, t, n, a) {
    return Ht(n, t) ? n : Rl.current !== null ? (e = Rc(e, n, a), Ht(e, t) || (We = true), e) : (Dn & 42) === 0 || (Dn & 1073741824) !== 0 && (Ae & 261930) === 0 ? (We = true, e.memoizedState = n) : (e = Hm(), xe.lanes |= e, oa |= e, t);
  }
  function Lp(e, t, n, a, o) {
    var c = ee.p;
    ee.p = c !== 0 && 8 > c ? c : 8;
    var p = I.T, S = {};
    I.T = S, wc(e, false, t, n);
    try {
      var _ = o(), B = I.S;
      if (B !== null && B(S, _), _ !== null && typeof _ == "object" && typeof _.then == "function") {
        var q = FS(_, a);
        wo(e, t, q, qt(e));
      } else wo(e, t, a, qt(e));
    } catch (Q) {
      wo(e, t, { then: function() {
      }, status: "rejected", reason: Q }, qt());
    } finally {
      ee.p = c, p !== null && S.types !== null && (p.types = S.types), I.T = p;
    }
  }
  function l1() {
  }
  function Ac(e, t, n, a) {
    if (e.tag !== 5) throw Error(u(476));
    var o = Gp(e).queue;
    Lp(e, o, t, le, n === null ? l1 : function() {
      return Yp(e), n(a);
    });
  }
  function Gp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: le, baseState: le, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Nn, lastRenderedState: le }, next: null };
    var n = {};
    return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Nn, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Yp(e) {
    var t = Gp(e);
    t.next === null && (t = e.alternate.memoizedState), wo(e, t.next.queue, {}, qt());
  }
  function Mc() {
    return ct(Po);
  }
  function Vp() {
    return $e().memoizedState;
  }
  function Ip() {
    return $e().memoizedState;
  }
  function o1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = qt();
          e = Wn(n);
          var a = ea(t, e, n);
          a !== null && (zt(a, t, n), To(a, t, n)), t = { cache: ac() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function r1(e, t, n) {
    var a = qt();
    n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, $r(e) ? Kp(t, n) : (n = Pu(e, t, n, a), n !== null && (zt(n, e, a), Xp(n, t, a)));
  }
  function qp(e, t, n) {
    var a = qt();
    wo(e, t, n, a);
  }
  function wo(e, t, n, a) {
    var o = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
    if ($r(e)) Kp(t, o);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
        var p = t.lastRenderedState, S = c(p, n);
        if (o.hasEagerState = true, o.eagerState = S, Ht(S, p)) return Dr(e, t, o, 0), Ye === null && wr(), false;
      } catch {
      }
      if (n = Pu(e, t, o, a), n !== null) return zt(n, e, a), Xp(n, t, a), true;
    }
    return false;
  }
  function wc(e, t, n, a) {
    if (a = { lane: 2, revertLane: is(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, $r(e)) {
      if (t) throw Error(u(479));
    } else t = Pu(e, n, a, 2), t !== null && zt(t, e, 2);
  }
  function $r(e) {
    var t = e.alternate;
    return e === xe || t !== null && t === xe;
  }
  function Kp(e, t) {
    Al = qr = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Xp(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, _t(e, n);
    }
  }
  var Do = { readContext: ct, use: Pr, useCallback: ke, useContext: ke, useEffect: ke, useImperativeHandle: ke, useLayoutEffect: ke, useInsertionEffect: ke, useMemo: ke, useReducer: ke, useRef: ke, useState: ke, useDebugValue: ke, useDeferredValue: ke, useTransition: ke, useSyncExternalStore: ke, useId: ke, useHostTransitionStatus: ke, useFormState: ke, useActionState: ke, useOptimistic: ke, useMemoCache: ke, useCacheRefresh: ke };
  Do.useEffectEvent = ke;
  var Pp = { readContext: ct, use: Pr, useCallback: function(e, t) {
    return Et().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ct, useEffect: wp, useImperativeHandle: function(e, t, n) {
    n = n != null ? n.concat([e]) : null, Qr(4194308, 4, zp.bind(null, t, e), n);
  }, useLayoutEffect: function(e, t) {
    return Qr(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    Qr(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Et();
    t = t === void 0 ? null : t;
    var a = e();
    if (Ka) {
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
      if (Ka) {
        nn(true);
        try {
          n(t);
        } finally {
          nn(false);
        }
      }
    } else o = t;
    return a.memoizedState = a.baseState = o, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: o }, a.queue = e, e = e.dispatch = r1.bind(null, xe, e), [a.memoizedState, e];
  }, useRef: function(e) {
    var t = Et();
    return e = { current: e }, t.memoizedState = e;
  }, useState: function(e) {
    e = xc(e);
    var t = e.queue, n = qp.bind(null, xe, t);
    return t.dispatch = n, [e.memoizedState, n];
  }, useDebugValue: _c, useDeferredValue: function(e, t) {
    var n = Et();
    return Rc(n, e, t);
  }, useTransition: function() {
    var e = xc(false);
    return e = Lp.bind(null, xe, e.queue, true, false), Et().memoizedState = e, [false, e];
  }, useSyncExternalStore: function(e, t, n) {
    var a = xe, o = Et();
    if (we) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), Ye === null) throw Error(u(349));
      (Ae & 127) !== 0 || pp(a, t, n);
    }
    o.memoizedState = n;
    var c = { value: n, getSnapshot: t };
    return o.queue = c, wp(vp.bind(null, a, c, e), [e]), a.flags |= 2048, wl(9, { destroy: void 0 }, mp.bind(null, a, c, n, t), null), n;
  }, useId: function() {
    var e = Et(), t = Ye.identifierPrefix;
    if (we) {
      var n = hn, a = vn;
      n = (a & ~(1 << 32 - mt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Kr++, 0 < n && (t += "H" + n.toString(32)), t += "_";
    } else n = WS++, t = "_" + t + "r_" + n.toString(32) + "_";
    return e.memoizedState = t;
  }, useHostTransitionStatus: Mc, useFormState: Tp, useActionState: Tp, useOptimistic: function(e) {
    var t = Et();
    t.memoizedState = t.baseState = e;
    var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = n, t = wc.bind(null, xe, true, n), n.dispatch = t, [e, t];
  }, useMemoCache: bc, useCacheRefresh: function() {
    return Et().memoizedState = o1.bind(null, xe);
  }, useEffectEvent: function(e) {
    var t = Et(), n = { impl: e };
    return t.memoizedState = n, function() {
      if ((je & 2) !== 0) throw Error(u(440));
      return n.impl.apply(void 0, arguments);
    };
  } }, Dc = { readContext: ct, use: Pr, useCallback: Up, useContext: ct, useEffect: Tc, useImperativeHandle: jp, useInsertionEffect: Np, useLayoutEffect: Op, useMemo: Bp, useReducer: kr, useRef: Mp, useState: function() {
    return kr(Nn);
  }, useDebugValue: _c, useDeferredValue: function(e, t) {
    var n = $e();
    return Hp(n, He.memoizedState, e, t);
  }, useTransition: function() {
    var e = kr(Nn)[0], t = $e().memoizedState;
    return [typeof e == "boolean" ? e : Mo(e), t];
  }, useSyncExternalStore: dp, useId: Vp, useHostTransitionStatus: Mc, useFormState: _p, useActionState: _p, useOptimistic: function(e, t) {
    var n = $e();
    return yp(n, He, e, t);
  }, useMemoCache: bc, useCacheRefresh: Ip };
  Dc.useEffectEvent = Dp;
  var kp = { readContext: ct, use: Pr, useCallback: Up, useContext: ct, useEffect: Tc, useImperativeHandle: jp, useInsertionEffect: Np, useLayoutEffect: Op, useMemo: Bp, useReducer: Ec, useRef: Mp, useState: function() {
    return Ec(Nn);
  }, useDebugValue: _c, useDeferredValue: function(e, t) {
    var n = $e();
    return He === null ? Rc(n, e, t) : Hp(n, He.memoizedState, e, t);
  }, useTransition: function() {
    var e = Ec(Nn)[0], t = $e().memoizedState;
    return [typeof e == "boolean" ? e : Mo(e), t];
  }, useSyncExternalStore: dp, useId: Vp, useHostTransitionStatus: Mc, useFormState: Ap, useActionState: Ap, useOptimistic: function(e, t) {
    var n = $e();
    return He !== null ? yp(n, He, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
  }, useMemoCache: bc, useCacheRefresh: Ip };
  kp.useEffectEvent = Dp;
  function Nc(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : v({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Oc = { enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var a = qt(), o = Wn(a);
    o.payload = t, n != null && (o.callback = n), t = ea(e, o, a), t !== null && (zt(t, e, a), To(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var a = qt(), o = Wn(a);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ea(e, o, a), t !== null && (zt(t, e, a), To(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = qt(), a = Wn(n);
    a.tag = 2, t != null && (a.callback = t), t = ea(e, a, n), t !== null && (zt(t, e, n), To(t, e, n));
  } };
  function Qp(e, t, n, a, o, c, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, c, p) : t.prototype && t.prototype.isPureReactComponent ? !ho(n, a) || !ho(o, c) : true;
  }
  function Zp(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Oc.enqueueReplaceState(t, t.state, null);
  }
  function Xa(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t) a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = v({}, n));
      for (var o in e) n[o] === void 0 && (n[o] = e[o]);
    }
    return n;
  }
  function $p(e) {
    Mr(e);
  }
  function Jp(e) {
    console.error(e);
  }
  function Fp(e) {
    Mr(e);
  }
  function Jr(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Wp(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function zc(e, t, n) {
    return n = Wn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Jr(e, t);
    }, n;
  }
  function em(e) {
    return e = Wn(e), e.tag = 3, e;
  }
  function tm(e, t, n, a) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = a.value;
      e.payload = function() {
        return o(c);
      }, e.callback = function() {
        Wp(t, n, a);
      };
    }
    var p = n.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      Wp(t, n, a), typeof o != "function" && (ra === null ? ra = /* @__PURE__ */ new Set([this]) : ra.add(this));
      var S = a.stack;
      this.componentDidCatch(a.value, { componentStack: S !== null ? S : "" });
    });
  }
  function i1(e, t, n, a, o) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && El(t, n, o, true), n = Gt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Jt === null ? ci() : n.alternate === null && Qe === 0 && (Qe = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, a === Lr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), ls(e, a, o)), false;
          case 22:
            return n.flags |= 65536, a === Lr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), ls(e, a, o)), false;
        }
        throw Error(u(435, n.tag));
      }
      return ls(e, a, o), ci(), false;
    }
    if (we) return t = Gt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, a !== Fu && (e = Error(u(422), { cause: a }), bo(kt(e, n)))) : (a !== Fu && (t = Error(u(423), { cause: a }), bo(kt(t, n))), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, a = kt(a, n), o = zc(e.stateNode, a, o), cc(e, o), Qe !== 4 && (Qe = 2)), false;
    var c = Error(u(520), { cause: a });
    if (c = kt(c, n), Lo === null ? Lo = [c] : Lo.push(c), Qe !== 4 && (Qe = 2), t === null) return true;
    a = kt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = zc(n.stateNode, a, e), cc(n, e), false;
        case 1:
          if (t = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (ra === null || !ra.has(c)))) return n.flags |= 65536, o &= -o, n.lanes |= o, o = em(o), tm(o, e, n, a), cc(n, o), false;
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var jc = Error(u(461)), We = false;
  function st(e, t, n, a) {
    t.child = e === null ? op(t, null, n, a) : qa(t, e.child, n, a);
  }
  function nm(e, t, n, a, o) {
    n = n.render;
    var c = t.ref;
    if ("ref" in a) {
      var p = {};
      for (var S in a) S !== "ref" && (p[S] = a[S]);
    } else p = a;
    return Ga(t), a = vc(e, t, n, p, c, o), S = hc(), e !== null && !We ? (gc(e, t, o), On(e, t, o)) : (we && S && $u(t), t.flags |= 1, st(e, t, a, o), t.child);
  }
  function am(e, t, n, a, o) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !ku(c) && c.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = c, lm(e, t, c, a, o)) : (e = Or(n.type, null, a, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !Ic(e, o)) {
      var p = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ho, n(p, a) && e.ref === t.ref) return On(e, t, o);
    }
    return t.flags |= 1, e = Rn(c, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function lm(e, t, n, a, o) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (ho(c, a) && e.ref === t.ref) if (We = false, t.pendingProps = a = c, Ic(e, o)) (e.flags & 131072) !== 0 && (We = true);
      else return t.lanes = e.lanes, On(e, t, o);
    }
    return Uc(e, t, n, a, o);
  }
  function om(e, t, n, a) {
    var o = a.children, c = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | n : n, e !== null) {
          for (a = t.child = e.child, o = 0; a !== null; ) o = o | a.lanes | a.childLanes, a = a.sibling;
          a = o & ~c;
        } else a = 0, t.child = null;
        return rm(e, t, c, n, a);
      }
      if ((n & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Br(t, c !== null ? c.cachePool : null), c !== null ? up(t, c) : fc(), cp(t);
      else return a = t.lanes = 536870912, rm(e, t, c !== null ? c.baseLanes | n : n, n, a);
    } else c !== null ? (Br(t, c.cachePool), up(t, c), na(), t.memoizedState = null) : (e !== null && Br(t, null), fc(), na());
    return st(e, t, o, n), t.child;
  }
  function No(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function rm(e, t, n, a, o) {
    var c = oc();
    return c = c === null ? null : { parent: Je._currentValue, pool: c }, t.memoizedState = { baseLanes: n, cachePool: c }, e !== null && Br(t, null), fc(), cp(t), e !== null && El(e, t, a, true), t.childLanes = o, null;
  }
  function Fr(e, t) {
    return t = ei({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function im(e, t, n) {
    return qa(t, e.child, null, n), e = Fr(t, t.pendingProps), e.flags |= 2, Yt(t), t.memoizedState = null, e;
  }
  function u1(e, t, n) {
    var a = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (we) {
        if (a.mode === "hidden") return e = Fr(t, a), t.lanes = 536870912, No(null, e);
        if (pc(t), (e = Ve) ? (e = bv(e, $t), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Qn !== null ? { id: vn, overflow: hn } : null, retryLane: 536870912, hydrationErrors: null }, n = Kd(e), n.return = t, t.child = n, ut = t, Ve = null)) : e = null, e === null) throw $n(t);
        return t.lanes = 536870912, null;
      }
      return Fr(t, a);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var p = c.dehydrated;
      if (pc(t), o) if (t.flags & 256) t.flags &= -257, t = im(e, t, n);
      else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(u(558));
      else if (We || El(e, t, n, false), o = (n & e.childLanes) !== 0, We || o) {
        if (a = Ye, a !== null && (p = Rt(a, n), p !== 0 && p !== c.retryLane)) throw c.retryLane = p, Ua(e, p), zt(a, e, p), jc;
        ci(), t = im(e, t, n);
      } else e = c.treeContext, Ve = Ft(p.nextSibling), ut = t, we = true, Zn = null, $t = false, e !== null && kd(t, e), t = Fr(t, a), t.flags |= 4096;
      return t;
    }
    return e = Rn(e.child, { mode: a.mode, children: a.children }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Wr(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(u(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Uc(e, t, n, a, o) {
    return Ga(t), n = vc(e, t, n, a, void 0, o), a = hc(), e !== null && !We ? (gc(e, t, o), On(e, t, o)) : (we && a && $u(t), t.flags |= 1, st(e, t, n, o), t.child);
  }
  function um(e, t, n, a, o, c) {
    return Ga(t), t.updateQueue = null, n = fp(t, a, n, o), sp(e), a = hc(), e !== null && !We ? (gc(e, t, c), On(e, t, c)) : (we && a && $u(t), t.flags |= 1, st(e, t, n, c), t.child);
  }
  function cm(e, t, n, a, o) {
    if (Ga(t), t.stateNode === null) {
      var c = gl, p = n.contextType;
      typeof p == "object" && p !== null && (c = ct(p)), c = new n(a, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Oc, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = a, c.state = t.memoizedState, c.refs = {}, ic(t), p = n.contextType, c.context = typeof p == "object" && p !== null ? ct(p) : gl, c.state = t.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (Nc(t, n, p, a), c.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), p !== c.state && Oc.enqueueReplaceState(c, c.state, null), Ro(t, a, c, o), _o(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), a = true;
    } else if (e === null) {
      c = t.stateNode;
      var S = t.memoizedProps, _ = Xa(n, S);
      c.props = _;
      var B = c.context, q = n.contextType;
      p = gl, typeof q == "object" && q !== null && (p = ct(q));
      var Q = n.getDerivedStateFromProps;
      q = typeof Q == "function" || typeof c.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, q || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (S || B !== p) && Zp(t, c, a, p), Fn = false;
      var L = t.memoizedState;
      c.state = L, Ro(t, a, c, o), _o(), B = t.memoizedState, S || L !== B || Fn ? (typeof Q == "function" && (Nc(t, n, Q, a), B = t.memoizedState), (_ = Fn || Qp(t, n, _, a, L, B, p)) ? (q || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = B), c.props = a, c.state = B, c.context = p, a = _) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), a = false);
    } else {
      c = t.stateNode, uc(e, t), p = t.memoizedProps, q = Xa(n, p), c.props = q, Q = t.pendingProps, L = c.context, B = n.contextType, _ = gl, typeof B == "object" && B !== null && (_ = ct(B)), S = n.getDerivedStateFromProps, (B = typeof S == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== Q || L !== _) && Zp(t, c, a, _), Fn = false, L = t.memoizedState, c.state = L, Ro(t, a, c, o), _o();
      var G = t.memoizedState;
      p !== Q || L !== G || Fn || e !== null && e.dependencies !== null && jr(e.dependencies) ? (typeof S == "function" && (Nc(t, n, S, a), G = t.memoizedState), (q = Fn || Qp(t, n, q, a, L, G, _) || e !== null && e.dependencies !== null && jr(e.dependencies)) ? (B || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(a, G, _), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(a, G, _)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && L === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && L === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = G), c.props = a, c.state = G, c.context = _, a = q) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && L === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && L === e.memoizedState || (t.flags |= 1024), a = false);
    }
    return c = a, Wr(e, t), a = (t.flags & 128) !== 0, c || a ? (c = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && a ? (t.child = qa(t, e.child, null, o), t.child = qa(t, null, n, o)) : st(e, t, n, o), t.memoizedState = c.state, e = t.child) : e = On(e, t, o), e;
  }
  function sm(e, t, n, a) {
    return Ha(), t.flags |= 256, st(e, t, n, a), t.child;
  }
  var Bc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Hc(e) {
    return { baseLanes: e, cachePool: Wd() };
  }
  function Lc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= It), e;
  }
  function fm(e, t, n) {
    var a = t.pendingProps, o = false, c = (t.flags & 128) !== 0, p;
    if ((p = c) || (p = e !== null && e.memoizedState === null ? false : (Ze.current & 2) !== 0), p && (o = true, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (we) {
        if (o ? ta(t) : na(), (e = Ve) ? (e = bv(e, $t), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Qn !== null ? { id: vn, overflow: hn } : null, retryLane: 536870912, hydrationErrors: null }, n = Kd(e), n.return = t, t.child = n, ut = t, Ve = null)) : e = null, e === null) throw $n(t);
        return Ss(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var S = a.children;
      return a = a.fallback, o ? (na(), o = t.mode, S = ei({ mode: "hidden", children: S }, o), a = Ba(a, o, n, null), S.return = t, a.return = t, S.sibling = a, t.child = S, a = t.child, a.memoizedState = Hc(n), a.childLanes = Lc(e, p, n), t.memoizedState = Bc, No(null, a)) : (ta(t), Gc(t, S));
    }
    var _ = e.memoizedState;
    if (_ !== null && (S = _.dehydrated, S !== null)) {
      if (c) t.flags & 256 ? (ta(t), t.flags &= -257, t = Yc(e, t, n)) : t.memoizedState !== null ? (na(), t.child = e.child, t.flags |= 128, t = null) : (na(), S = a.fallback, o = t.mode, a = ei({ mode: "visible", children: a.children }, o), S = Ba(S, o, n, null), S.flags |= 2, a.return = t, S.return = t, a.sibling = S, t.child = a, qa(t, e.child, null, n), a = t.child, a.memoizedState = Hc(n), a.childLanes = Lc(e, p, n), t.memoizedState = Bc, t = No(null, a));
      else if (ta(t), Ss(S)) {
        if (p = S.nextSibling && S.nextSibling.dataset, p) var B = p.dgst;
        p = B, a = Error(u(419)), a.stack = "", a.digest = p, bo({ value: a, source: null, stack: null }), t = Yc(e, t, n);
      } else if (We || El(e, t, n, false), p = (n & e.childLanes) !== 0, We || p) {
        if (p = Ye, p !== null && (a = Rt(p, n), a !== 0 && a !== _.retryLane)) throw _.retryLane = a, Ua(e, a), zt(p, e, a), jc;
        bs(S) || ci(), t = Yc(e, t, n);
      } else bs(S) ? (t.flags |= 192, t.child = e.child, t = null) : (e = _.treeContext, Ve = Ft(S.nextSibling), ut = t, we = true, Zn = null, $t = false, e !== null && kd(t, e), t = Gc(t, a.children), t.flags |= 4096);
      return t;
    }
    return o ? (na(), S = a.fallback, o = t.mode, _ = e.child, B = _.sibling, a = Rn(_, { mode: "hidden", children: a.children }), a.subtreeFlags = _.subtreeFlags & 65011712, B !== null ? S = Rn(B, S) : (S = Ba(S, o, n, null), S.flags |= 2), S.return = t, a.return = t, a.sibling = S, t.child = a, No(null, a), a = t.child, S = e.child.memoizedState, S === null ? S = Hc(n) : (o = S.cachePool, o !== null ? (_ = Je._currentValue, o = o.parent !== _ ? { parent: _, pool: _ } : o) : o = Wd(), S = { baseLanes: S.baseLanes | n, cachePool: o }), a.memoizedState = S, a.childLanes = Lc(e, p, n), t.memoizedState = Bc, No(e.child, a)) : (ta(t), n = e.child, e = n.sibling, n = Rn(n, { mode: "visible", children: a.children }), n.return = t, n.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Gc(e, t) {
    return t = ei({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
  }
  function ei(e, t) {
    return e = Lt(22, e, null, t), e.lanes = 0, e;
  }
  function Yc(e, t, n) {
    return qa(t, e.child, null, n), e = Gc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function dm(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), tc(e.return, t, n);
  }
  function Vc(e, t, n, a, o, c) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: o, treeForkCount: c } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = a, p.tail = n, p.tailMode = o, p.treeForkCount = c);
  }
  function pm(e, t, n) {
    var a = t.pendingProps, o = a.revealOrder, c = a.tail;
    a = a.children;
    var p = Ze.current, S = (p & 2) !== 0;
    if (S ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, H(Ze, p), st(e, t, a, n), a = we ? yo : 0, !S && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && dm(e, n, t);
      else if (e.tag === 19) dm(e, n, t);
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
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ir(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Vc(t, false, o, n, c, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Ir(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Vc(t, true, n, null, c, a);
        break;
      case "together":
        Vc(t, false, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function On(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), oa |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
      if (El(e, t, n, false), (n & t.childLanes) === 0) return null;
    } else return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Rn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ic(e, t) {
    return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && jr(e)));
  }
  function c1(e, t, n) {
    switch (t.tag) {
      case 3:
        te(t, t.stateNode.containerInfo), Jn(t, Je, e.memoizedState.cache), Ha();
        break;
      case 27:
      case 5:
        Ce(t);
        break;
      case 4:
        te(t, t.stateNode.containerInfo);
        break;
      case 10:
        Jn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, pc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (ta(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? fm(e, t, n) : (ta(t), e = On(e, t, n), e !== null ? e.sibling : null);
        ta(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (El(e, t, n, false), a = (n & t.childLanes) !== 0), o) {
          if (a) return pm(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), H(Ze, Ze.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, om(e, t, n, t.pendingProps);
      case 24:
        Jn(t, Je, e.memoizedState.cache);
    }
    return On(e, t, n);
  }
  function mm(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) We = true;
    else {
      if (!Ic(e, n) && (t.flags & 128) === 0) return We = false, c1(e, t, n);
      We = (e.flags & 131072) !== 0;
    }
    else We = false, we && (t.flags & 1048576) !== 0 && Pd(t, yo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Va(t.elementType), t.type = e, typeof e == "function") ku(e) ? (a = Xa(e, a), t.tag = 1, t = cm(null, t, e, a, n)) : (t.tag = 0, t = Uc(null, t, e, a, n));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === Y) {
                t.tag = 11, t = nm(null, t, e, a, n);
                break e;
              } else if (o === V) {
                t.tag = 14, t = am(null, t, e, a, n);
                break e;
              }
            }
            throw t = be(e) || e, Error(u(306, t, ""));
          }
        }
        return t;
      case 0:
        return Uc(e, t, t.type, t.pendingProps, n);
      case 1:
        return a = t.type, o = Xa(a, t.pendingProps), cm(e, t, a, o, n);
      case 3:
        e: {
          if (te(t, t.stateNode.containerInfo), e === null) throw Error(u(387));
          a = t.pendingProps;
          var c = t.memoizedState;
          o = c.element, uc(e, t), Ro(t, a, null, n);
          var p = t.memoizedState;
          if (a = p.cache, Jn(t, Je, a), a !== c.cache && nc(t, [Je], n, true), _o(), a = p.element, c.isDehydrated) if (c = { element: a, isDehydrated: false, cache: p.cache }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
            t = sm(e, t, a, n);
            break e;
          } else if (a !== o) {
            o = kt(Error(u(424)), t), bo(o), t = sm(e, t, a, n);
            break e;
          } else for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ve = Ft(e.firstChild), ut = t, we = true, Zn = null, $t = true, n = op(t, null, a, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ha(), a === o) {
              t = On(e, t, n);
              break e;
            }
            st(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Wr(e, t), e === null ? (n = _v(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : we || (n = t.type, e = t.pendingProps, a = hi(F.current).createElement(n), a[it] = t, a[At] = e, ft(a, n, e), lt(a), t.stateNode = a) : t.memoizedState = _v(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return Ce(t), e === null && we && (a = t.stateNode = xv(t.type, t.pendingProps, F.current), ut = t, $t = true, o = Ve, sa(t.type) ? (Es = o, Ve = Ft(a.firstChild)) : Ve = o), st(e, t, t.pendingProps.children, n), Wr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && we && ((o = a = Ve) && (a = G1(a, t.type, t.pendingProps, $t), a !== null ? (t.stateNode = a, ut = t, Ve = Ft(a.firstChild), $t = false, o = true) : o = false), o || $n(t)), Ce(t), o = t.type, c = t.pendingProps, p = e !== null ? e.memoizedProps : null, a = c.children, hs(o, c) ? a = null : p !== null && hs(o, p) && (t.flags |= 32), t.memoizedState !== null && (o = vc(e, t, e1, null, null, n), Po._currentValue = o), Wr(e, t), st(e, t, a, n), t.child;
      case 6:
        return e === null && we && ((e = n = Ve) && (n = Y1(n, t.pendingProps, $t), n !== null ? (t.stateNode = n, ut = t, Ve = null, e = true) : e = false), e || $n(t)), null;
      case 13:
        return fm(e, t, n);
      case 4:
        return te(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = qa(t, null, a, n) : st(e, t, a, n), t.child;
      case 11:
        return nm(e, t, t.type, t.pendingProps, n);
      case 7:
        return st(e, t, t.pendingProps, n), t.child;
      case 8:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return a = t.pendingProps, Jn(t, t.type, a.value), st(e, t, a.children, n), t.child;
      case 9:
        return o = t.type._context, a = t.pendingProps.children, Ga(t), o = ct(o), a = a(o), t.flags |= 1, st(e, t, a, n), t.child;
      case 14:
        return am(e, t, t.type, t.pendingProps, n);
      case 15:
        return lm(e, t, t.type, t.pendingProps, n);
      case 19:
        return pm(e, t, n);
      case 31:
        return u1(e, t, n);
      case 22:
        return om(e, t, n, t.pendingProps);
      case 24:
        return Ga(t), a = ct(Je), e === null ? (o = oc(), o === null && (o = Ye, c = ac(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= n), o = c), t.memoizedState = { parent: a, cache: o }, ic(t), Jn(t, Je, o)) : ((e.lanes & n) !== 0 && (uc(e, t), Ro(t, null, null, n), _o()), o = e.memoizedState, c = t.memoizedState, o.parent !== a ? (o = { parent: a, cache: a }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Jn(t, Je, a)) : (a = c.cache, Jn(t, Je, a), a !== o.cache && nc(t, [Je], n, true))), st(e, t, t.pendingProps.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function zn(e) {
    e.flags |= 4;
  }
  function qc(e, t, n, a, o) {
    if ((t = (e.mode & 32) !== 0) && (t = false), t) {
      if (e.flags |= 16777216, (o & 335544128) === o) if (e.stateNode.complete) e.flags |= 8192;
      else if (Vm()) e.flags |= 8192;
      else throw Ia = Lr, rc;
    } else e.flags &= -16777217;
  }
  function vm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !Dv(t)) if (Vm()) e.flags |= 8192;
    else throw Ia = Lr, rc;
  }
  function ti(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? vt() : 536870912, e.lanes |= t, zl |= t);
  }
  function Oo(e, t) {
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
  function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, a |= o.subtreeFlags & 65011712, a |= o.flags & 65011712, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, a |= o.subtreeFlags, a |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function s1(e, t, n) {
    var a = t.pendingProps;
    switch (Ju(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ie(t), null;
      case 1:
        return Ie(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), wn(Je), ie(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Sl(t) ? zn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Wu())), Ie(t), null;
      case 26:
        var o = t.type, c = t.memoizedState;
        return e === null ? (zn(t), c !== null ? (Ie(t), vm(t, c)) : (Ie(t), qc(t, o, null, a, n))) : c ? c !== e.memoizedState ? (zn(t), Ie(t), vm(t, c)) : (Ie(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && zn(t), Ie(t), qc(t, o, e, a, n)), null;
      case 27:
        if (De(t), n = F.current, o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && zn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(u(166));
            return Ie(t), null;
          }
          e = X.current, Sl(t) ? Qd(t) : (e = xv(o, a, n), t.stateNode = e, zn(t));
        }
        return Ie(t), null;
      case 5:
        if (De(t), o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && zn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(u(166));
            return Ie(t), null;
          }
          if (c = X.current, Sl(t)) Qd(t);
          else {
            var p = hi(F.current);
            switch (c) {
              case 1:
                c = p.createElementNS("http://www.w3.org/2000/svg", o);
                break;
              case 2:
                c = p.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                break;
              default:
                switch (o) {
                  case "svg":
                    c = p.createElementNS("http://www.w3.org/2000/svg", o);
                    break;
                  case "math":
                    c = p.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                    break;
                  case "script":
                    c = p.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(c.firstChild);
                    break;
                  case "select":
                    c = typeof a.is == "string" ? p.createElement("select", { is: a.is }) : p.createElement("select"), a.multiple ? c.multiple = true : a.size && (c.size = a.size);
                    break;
                  default:
                    c = typeof a.is == "string" ? p.createElement(o, { is: a.is }) : p.createElement(o);
                }
            }
            c[it] = t, c[At] = a;
            e: for (p = t.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6) c.appendChild(p.stateNode);
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
            t.stateNode = c;
            e: switch (ft(c, o, a), o) {
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
        return Ie(t), qc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && zn(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(u(166));
          if (e = F.current, Sl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, o = ut, o !== null) switch (o.tag) {
              case 27:
              case 5:
                a = o.memoizedProps;
            }
            e[it] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === true || fv(e.nodeValue, n)), e || $n(t, true);
          } else e = hi(e).createTextNode(a), e[it] = t, t.stateNode = e;
        }
        return Ie(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Sl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(u(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(557));
              e[it] = t;
            } else Ha(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ie(t), e = false;
          } else n = Wu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = true;
          if (!e) return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
          if ((t.flags & 128) !== 0) throw Error(u(558));
        }
        return Ie(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Sl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[it] = t;
            } else Ha(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ie(t), o = false;
          } else o = Wu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = true;
          if (!o) return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
        }
        return Yt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, o = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (o = a.alternate.memoizedState.cachePool.pool), c = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== o && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), ti(t, t.updateQueue), Ie(t), null);
      case 4:
        return ie(), e === null && fs(t.stateNode.containerInfo), Ie(t), null;
      case 10:
        return wn(t.type), Ie(t), null;
      case 19:
        if (A(Ze), a = t.memoizedState, a === null) return Ie(t), null;
        if (o = (t.flags & 128) !== 0, c = a.rendering, c === null) if (o) Oo(a, false);
        else {
          if (Qe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (c = Ir(e), c !== null) {
              for (t.flags |= 128, Oo(a, false), e = c.updateQueue, t.updateQueue = e, ti(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; ) qd(n, e), n = n.sibling;
              return H(Ze, Ze.current & 1 | 2), we && An(t, a.treeForkCount), t.child;
            }
            e = e.sibling;
          }
          a.tail !== null && bt() > ri && (t.flags |= 128, o = true, Oo(a, false), t.lanes = 4194304);
        }
        else {
          if (!o) if (e = Ir(c), e !== null) {
            if (t.flags |= 128, o = true, e = e.updateQueue, t.updateQueue = e, ti(t, e), Oo(a, true), a.tail === null && a.tailMode === "hidden" && !c.alternate && !we) return Ie(t), null;
          } else 2 * bt() - a.renderingStartTime > ri && n !== 536870912 && (t.flags |= 128, o = true, Oo(a, false), t.lanes = 4194304);
          a.isBackwards ? (c.sibling = t.child, t.child = c) : (e = a.last, e !== null ? e.sibling = c : t.child = c, a.last = c);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = bt(), e.sibling = null, n = Ze.current, H(Ze, o ? n & 1 | 2 : n & 1), we && An(t, a.treeForkCount), e) : (Ie(t), null);
      case 22:
      case 23:
        return Yt(t), dc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), n = t.updateQueue, n !== null && ti(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && A(Ya), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), wn(Je), Ie(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function f1(e, t) {
    switch (Ju(t), t.tag) {
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
          if (Yt(t), t.alternate === null) throw Error(u(340));
          Ha();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Yt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          Ha();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return A(Ze), null;
      case 4:
        return ie(), null;
      case 10:
        return wn(t.type), null;
      case 22:
      case 23:
        return Yt(t), dc(), e !== null && A(Ya), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return wn(Je), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function hm(e, t) {
    switch (Ju(t), t.tag) {
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
        A(Ze);
        break;
      case 10:
        wn(t.type);
        break;
      case 22:
      case 23:
        Yt(t), dc(), e !== null && A(Ya);
        break;
      case 24:
        wn(Je);
    }
  }
  function zo(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var o = a.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var c = n.create, p = n.inst;
            a = c(), p.destroy = a;
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (S) {
      Be(t, t.return, S);
    }
  }
  function aa(e, t, n) {
    try {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            var p = a.inst, S = p.destroy;
            if (S !== void 0) {
              p.destroy = void 0, o = t;
              var _ = n, B = S;
              try {
                B();
              } catch (q) {
                Be(o, _, q);
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (q) {
      Be(t, t.return, q);
    }
  }
  function gm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        ip(t, n);
      } catch (a) {
        Be(e, e.return, a);
      }
    }
  }
  function ym(e, t, n) {
    n.props = Xa(e.type, e.memoizedProps), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Be(e, t, a);
    }
  }
  function jo(e, t) {
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
  function bm(e) {
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
  function Kc(e, t, n) {
    try {
      var a = e.stateNode;
      z1(a, e.type, n, t), a[At] = t;
    } catch (o) {
      Be(e, e.return, o);
    }
  }
  function Sm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && sa(e.type) || e.tag === 4;
  }
  function Xc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Sm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && sa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Pc(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Tn));
    else if (a !== 4 && (a === 27 && sa(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (Pc(e, t, n), e = e.sibling; e !== null; ) Pc(e, t, n), e = e.sibling;
  }
  function ni(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && sa(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (ni(e, t, n), e = e.sibling; e !== null; ) ni(e, t, n), e = e.sibling;
  }
  function Em(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, o = t.attributes; o.length; ) t.removeAttributeNode(o[0]);
      ft(t, a, n), t[it] = e, t[At] = n;
    } catch (c) {
      Be(e, e.return, c);
    }
  }
  var jn = false, et = false, kc = false, xm = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function d1(e, t) {
    if (e = e.containerInfo, ms = Ci, e = jd(e), Yu(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var a = n.getSelection && n.getSelection();
        if (a && a.rangeCount !== 0) {
          n = a.anchorNode;
          var o = a.anchorOffset, c = a.focusNode;
          a = a.focusOffset;
          try {
            n.nodeType, c.nodeType;
          } catch {
            n = null;
            break e;
          }
          var p = 0, S = -1, _ = -1, B = 0, q = 0, Q = e, L = null;
          t: for (; ; ) {
            for (var G; Q !== n || o !== 0 && Q.nodeType !== 3 || (S = p + o), Q !== c || a !== 0 && Q.nodeType !== 3 || (_ = p + a), Q.nodeType === 3 && (p += Q.nodeValue.length), (G = Q.firstChild) !== null; ) L = Q, Q = G;
            for (; ; ) {
              if (Q === e) break t;
              if (L === n && ++B === o && (S = p), L === c && ++q === a && (_ = p), (G = Q.nextSibling) !== null) break;
              Q = L, L = Q.parentNode;
            }
            Q = G;
          }
          n = S === -1 || _ === -1 ? null : { start: S, end: _ };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (vs = { focusedElem: e, selectionRange: n }, Ci = false, ot = t; ot !== null; ) if (t = ot, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ot = e;
    else for (; ot !== null; ) {
      switch (t = ot, c = t.alternate, e = t.flags, t.tag) {
        case 0:
          if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (n = 0; n < e.length; n++) o = e[n], o.ref.impl = o.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && c !== null) {
            e = void 0, n = t, o = c.memoizedProps, c = c.memoizedState, a = n.stateNode;
            try {
              var oe = Xa(n.type, o);
              e = a.getSnapshotBeforeUpdate(oe, c), a.__reactInternalSnapshotBeforeUpdate = e;
            } catch (fe) {
              Be(n, n.return, fe);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) ys(e);
            else if (n === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                ys(e);
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
          if ((e & 1024) !== 0) throw Error(u(163));
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ot = e;
        break;
      }
      ot = t.return;
    }
  }
  function Cm(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Bn(e, n), a & 4 && zo(5, n);
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
        a & 64 && gm(n), a & 512 && jo(n, n.return);
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
            ip(e, t);
          } catch (p) {
            Be(n, n.return, p);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Em(n);
      case 26:
      case 5:
        Bn(e, n), t === null && a & 4 && bm(n), a & 512 && jo(n, n.return);
        break;
      case 12:
        Bn(e, n);
        break;
      case 31:
        Bn(e, n), a & 4 && Rm(e, n);
        break;
      case 13:
        Bn(e, n), a & 4 && Am(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = E1.bind(null, n), V1(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || jn, !a) {
          t = t !== null && t.memoizedState !== null || et, o = jn;
          var c = et;
          jn = a, (et = t) && !c ? Hn(e, n, (n.subtreeFlags & 8772) !== 0) : Bn(e, n), jn = o, et = c;
        }
        break;
      case 30:
        break;
      default:
        Bn(e, n);
    }
  }
  function Tm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Tm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Cu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ke = null, wt = false;
  function Un(e, t, n) {
    for (n = n.child; n !== null; ) _m(e, t, n), n = n.sibling;
  }
  function _m(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function") try {
      St.onCommitFiberUnmount(Ma, n);
    } catch {
    }
    switch (n.tag) {
      case 26:
        et || gn(n, t), Un(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        et || gn(n, t);
        var a = Ke, o = wt;
        sa(n.type) && (Ke = n.stateNode, wt = false), Un(e, t, n), qo(n.stateNode), Ke = a, wt = o;
        break;
      case 5:
        et || gn(n, t);
      case 6:
        if (a = Ke, o = wt, Ke = null, Un(e, t, n), Ke = a, wt = o, Ke !== null) if (wt) try {
          (Ke.nodeType === 9 ? Ke.body : Ke.nodeName === "HTML" ? Ke.ownerDocument.body : Ke).removeChild(n.stateNode);
        } catch (c) {
          Be(n, t, c);
        }
        else try {
          Ke.removeChild(n.stateNode);
        } catch (c) {
          Be(n, t, c);
        }
        break;
      case 18:
        Ke !== null && (wt ? (e = Ke, gv(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Vl(e)) : gv(Ke, n.stateNode));
        break;
      case 4:
        a = Ke, o = wt, Ke = n.stateNode.containerInfo, wt = true, Un(e, t, n), Ke = a, wt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        aa(2, n, t), et || aa(4, n, t), Un(e, t, n);
        break;
      case 1:
        et || (gn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && ym(n, t, a)), Un(e, t, n);
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
  function Rm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Vl(e);
      } catch (n) {
        Be(t, t.return, n);
      }
    }
  }
  function Am(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      Vl(e);
    } catch (n) {
      Be(t, t.return, n);
    }
  }
  function p1(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new xm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new xm()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function ai(e, t) {
    var n = p1(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var o = x1.bind(null, e, a);
        a.then(o, o);
      }
    });
  }
  function Dt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var a = 0; a < n.length; a++) {
      var o = n[a], c = e, p = t, S = p;
      e: for (; S !== null; ) {
        switch (S.tag) {
          case 27:
            if (sa(S.type)) {
              Ke = S.stateNode, wt = false;
              break e;
            }
            break;
          case 5:
            Ke = S.stateNode, wt = false;
            break e;
          case 3:
          case 4:
            Ke = S.stateNode.containerInfo, wt = true;
            break e;
        }
        S = S.return;
      }
      if (Ke === null) throw Error(u(160));
      _m(c, p, o), Ke = null, wt = false, c = o.alternate, c !== null && (c.return = null), o.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) Mm(t, e), t = t.sibling;
  }
  var on = null;
  function Mm(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Dt(t, e), Nt(e), a & 4 && (aa(3, e, e.return), zo(3, e), aa(5, e, e.return));
        break;
      case 1:
        Dt(t, e), Nt(e), a & 512 && (et || n === null || gn(n, n.return)), a & 64 && jn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var o = on;
        if (Dt(t, e), Nt(e), a & 512 && (et || n === null || gn(n, n.return)), a & 4) {
          var c = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null) if (a === null) if (e.stateNode === null) {
            e: {
              a = e.type, n = e.memoizedProps, o = o.ownerDocument || o;
              t: switch (a) {
                case "title":
                  c = o.getElementsByTagName("title")[0], (!c || c[ro] || c[it] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(a), o.head.insertBefore(c, o.querySelector("head > title"))), ft(c, a, n), c[it] = e, lt(c), a = c;
                  break e;
                case "link":
                  var p = Mv("link", "href", o).get(a + (n.href || ""));
                  if (p) {
                    for (var S = 0; S < p.length; S++) if (c = p[S], c.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                      p.splice(S, 1);
                      break t;
                    }
                  }
                  c = o.createElement(a), ft(c, a, n), o.head.appendChild(c);
                  break;
                case "meta":
                  if (p = Mv("meta", "content", o).get(a + (n.content || ""))) {
                    for (S = 0; S < p.length; S++) if (c = p[S], c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                      p.splice(S, 1);
                      break t;
                    }
                  }
                  c = o.createElement(a), ft(c, a, n), o.head.appendChild(c);
                  break;
                default:
                  throw Error(u(468, a));
              }
              c[it] = e, lt(c), a = c;
            }
            e.stateNode = a;
          } else wv(o, e.type, e.stateNode);
          else e.stateNode = Av(o, a, e.memoizedProps);
          else c !== a ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, a === null ? wv(o, e.type, e.stateNode) : Av(o, a, e.memoizedProps)) : a === null && e.stateNode !== null && Kc(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Dt(t, e), Nt(e), a & 512 && (et || n === null || gn(n, n.return)), n !== null && a & 4 && Kc(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (Dt(t, e), Nt(e), a & 512 && (et || n === null || gn(n, n.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            sl(o, "");
          } catch (oe) {
            Be(e, e.return, oe);
          }
        }
        a & 4 && e.stateNode != null && (o = e.memoizedProps, Kc(e, o, n !== null ? n.memoizedProps : o)), a & 1024 && (kc = true);
        break;
      case 6:
        if (Dt(t, e), Nt(e), a & 4) {
          if (e.stateNode === null) throw Error(u(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (oe) {
            Be(e, e.return, oe);
          }
        }
        break;
      case 3:
        if (bi = null, o = on, on = gi(t.containerInfo), Dt(t, e), on = o, Nt(e), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Vl(t.containerInfo);
        } catch (oe) {
          Be(e, e.return, oe);
        }
        kc && (kc = false, wm(e));
        break;
      case 4:
        a = on, on = gi(e.stateNode.containerInfo), Dt(t, e), Nt(e), on = a;
        break;
      case 12:
        Dt(t, e), Nt(e);
        break;
      case 31:
        Dt(t, e), Nt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, ai(e, a)));
        break;
      case 13:
        Dt(t, e), Nt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (oi = bt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, ai(e, a)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var _ = n !== null && n.memoizedState !== null, B = jn, q = et;
        if (jn = B || o, et = q || _, Dt(t, e), et = q, jn = B, Nt(e), a & 8192) e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || _ || jn || et || Pa(e)), n = null, t = e; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (n === null) {
              _ = n = t;
              try {
                if (c = _.stateNode, o) p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                else {
                  S = _.stateNode;
                  var Q = _.memoizedProps.style, L = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                  S.style.display = L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                }
              } catch (oe) {
                Be(_, _.return, oe);
              }
            }
          } else if (t.tag === 6) {
            if (n === null) {
              _ = t;
              try {
                _.stateNode.nodeValue = o ? "" : _.memoizedProps;
              } catch (oe) {
                Be(_, _.return, oe);
              }
            }
          } else if (t.tag === 18) {
            if (n === null) {
              _ = t;
              try {
                var G = _.stateNode;
                o ? yv(G, true) : yv(_.stateNode, false);
              } catch (oe) {
                Be(_, _.return, oe);
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
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, ai(e, n))));
        break;
      case 19:
        Dt(t, e), Nt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, ai(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Dt(t, e), Nt(e);
    }
  }
  function Nt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Sm(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode, c = Xc(e);
            ni(e, c, o);
            break;
          case 5:
            var p = n.stateNode;
            n.flags & 32 && (sl(p, ""), n.flags &= -33);
            var S = Xc(e);
            ni(e, S, p);
            break;
          case 3:
          case 4:
            var _ = n.stateNode.containerInfo, B = Xc(e);
            Pc(e, B, _);
            break;
          default:
            throw Error(u(161));
        }
      } catch (q) {
        Be(e, e.return, q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function wm(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var t = e;
      wm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
    }
  }
  function Bn(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) Cm(e, t.alternate, t), t = t.sibling;
  }
  function Pa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          aa(4, t, t.return), Pa(t);
          break;
        case 1:
          gn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && ym(t, t.return, n), Pa(t);
          break;
        case 27:
          qo(t.stateNode);
        case 26:
        case 5:
          gn(t, t.return), Pa(t);
          break;
        case 22:
          t.memoizedState === null && Pa(t);
          break;
        case 30:
          Pa(t);
          break;
        default:
          Pa(t);
      }
      e = e.sibling;
    }
  }
  function Hn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, o = e, c = t, p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Hn(o, c, n), zo(4, c);
          break;
        case 1:
          if (Hn(o, c, n), a = c, o = a.stateNode, typeof o.componentDidMount == "function") try {
            o.componentDidMount();
          } catch (B) {
            Be(a, a.return, B);
          }
          if (a = c, o = a.updateQueue, o !== null) {
            var S = a.stateNode;
            try {
              var _ = o.shared.hiddenCallbacks;
              if (_ !== null) for (o.shared.hiddenCallbacks = null, o = 0; o < _.length; o++) rp(_[o], S);
            } catch (B) {
              Be(a, a.return, B);
            }
          }
          n && p & 64 && gm(c), jo(c, c.return);
          break;
        case 27:
          Em(c);
        case 26:
        case 5:
          Hn(o, c, n), n && a === null && p & 4 && bm(c), jo(c, c.return);
          break;
        case 12:
          Hn(o, c, n);
          break;
        case 31:
          Hn(o, c, n), n && p & 4 && Rm(o, c);
          break;
        case 13:
          Hn(o, c, n), n && p & 4 && Am(o, c);
          break;
        case 22:
          c.memoizedState === null && Hn(o, c, n), jo(c, c.return);
          break;
        case 30:
          break;
        default:
          Hn(o, c, n);
      }
      t = t.sibling;
    }
  }
  function Qc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && So(n));
  }
  function Zc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && So(e));
  }
  function rn(e, t, n, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Dm(e, t, n, a), t = t.sibling;
  }
  function Dm(e, t, n, a) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        rn(e, t, n, a), o & 2048 && zo(9, t);
        break;
      case 1:
        rn(e, t, n, a);
        break;
      case 3:
        rn(e, t, n, a), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && So(e)));
        break;
      case 12:
        if (o & 2048) {
          rn(e, t, n, a), e = t.stateNode;
          try {
            var c = t.memoizedProps, p = c.id, S = c.onPostCommit;
            typeof S == "function" && S(p, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (_) {
            Be(t, t.return, _);
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
        c = t.stateNode, p = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? rn(e, t, n, a) : Uo(e, t) : c._visibility & 2 ? rn(e, t, n, a) : (c._visibility |= 2, Dl(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || false)), o & 2048 && Qc(p, t);
        break;
      case 24:
        rn(e, t, n, a), o & 2048 && Zc(t.alternate, t);
        break;
      default:
        rn(e, t, n, a);
    }
  }
  function Dl(e, t, n, a, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var c = e, p = t, S = n, _ = a, B = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Dl(c, p, S, _, o), zo(8, p);
          break;
        case 23:
          break;
        case 22:
          var q = p.stateNode;
          p.memoizedState !== null ? q._visibility & 2 ? Dl(c, p, S, _, o) : Uo(c, p) : (q._visibility |= 2, Dl(c, p, S, _, o)), o && B & 2048 && Qc(p.alternate, p);
          break;
        case 24:
          Dl(c, p, S, _, o), o && B & 2048 && Zc(p.alternate, p);
          break;
        default:
          Dl(c, p, S, _, o);
      }
      t = t.sibling;
    }
  }
  function Uo(e, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var n = e, a = t, o = a.flags;
      switch (a.tag) {
        case 22:
          Uo(n, a), o & 2048 && Qc(a.alternate, a);
          break;
        case 24:
          Uo(n, a), o & 2048 && Zc(a.alternate, a);
          break;
        default:
          Uo(n, a);
      }
      t = t.sibling;
    }
  }
  var Bo = 8192;
  function Nl(e, t, n) {
    if (e.subtreeFlags & Bo) for (e = e.child; e !== null; ) Nm(e, t, n), e = e.sibling;
  }
  function Nm(e, t, n) {
    switch (e.tag) {
      case 26:
        Nl(e, t, n), e.flags & Bo && e.memoizedState !== null && W1(n, on, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Nl(e, t, n);
        break;
      case 3:
      case 4:
        var a = on;
        on = gi(e.stateNode.containerInfo), Nl(e, t, n), on = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Bo, Bo = 16777216, Nl(e, t, n), Bo = a) : Nl(e, t, n));
        break;
      default:
        Nl(e, t, n);
    }
  }
  function Om(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ho(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var n = 0; n < t.length; n++) {
        var a = t[n];
        ot = a, jm(a, e);
      }
      Om(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) zm(e), e = e.sibling;
  }
  function zm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ho(e), e.flags & 2048 && aa(9, e, e.return);
        break;
      case 3:
        Ho(e);
        break;
      case 12:
        Ho(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, li(e)) : Ho(e);
        break;
      default:
        Ho(e);
    }
  }
  function li(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var n = 0; n < t.length; n++) {
        var a = t[n];
        ot = a, jm(a, e);
      }
      Om(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          aa(8, t, t.return), li(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, li(t));
          break;
        default:
          li(t);
      }
      e = e.sibling;
    }
  }
  function jm(e, t) {
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
          So(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ot = a;
      else e: for (n = e; ot !== null; ) {
        a = ot;
        var o = a.sibling, c = a.return;
        if (Tm(a), a === n) {
          ot = null;
          break e;
        }
        if (o !== null) {
          o.return = c, ot = o;
          break e;
        }
        ot = c;
      }
    }
  }
  var m1 = { getCacheForType: function(e) {
    var t = ct(Je), n = t.data.get(e);
    return n === void 0 && (n = e(), t.data.set(e, n)), n;
  }, cacheSignal: function() {
    return ct(Je).controller.signal;
  } }, v1 = typeof WeakMap == "function" ? WeakMap : Map, je = 0, Ye = null, _e = null, Ae = 0, Ue = 0, Vt = null, la = false, Ol = false, $c = false, Ln = 0, Qe = 0, oa = 0, ka = 0, Jc = 0, It = 0, zl = 0, Lo = null, Ot = null, Fc = false, oi = 0, Um = 0, ri = 1 / 0, ii = null, ra = null, nt = 0, ia = null, jl = null, Gn = 0, Wc = 0, es = null, Bm = null, Go = 0, ts = null;
  function qt() {
    return (je & 2) !== 0 && Ae !== 0 ? Ae & -Ae : I.T !== null ? is() : Eu();
  }
  function Hm() {
    if (It === 0) if ((Ae & 536870912) === 0 || we) {
      var e = nl;
      nl <<= 1, (nl & 3932160) === 0 && (nl = 262144), It = e;
    } else It = 536870912;
    return e = Gt.current, e !== null && (e.flags |= 32), It;
  }
  function zt(e, t, n) {
    (e === Ye && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null) && (Ul(e, 0), ua(e, Ae, It, false)), Pe(e, n), ((je & 2) === 0 || e !== Ye) && (e === Ye && ((je & 2) === 0 && (ka |= n), Qe === 4 && ua(e, Ae, It, false)), yn(e));
  }
  function Lm(e, t, n) {
    if ((je & 6) !== 0) throw Error(u(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || qe(e, t), o = a ? y1(e, t) : as(e, t, true), c = a;
    do {
      if (o === 0) {
        Ol && !a && ua(e, t, 0, false);
        break;
      } else {
        if (n = e.current.alternate, c && !h1(n)) {
          o = as(e, t, false), c = false;
          continue;
        }
        if (o === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c) var p = 0;
          else p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            t = p;
            e: {
              var S = e;
              o = Lo;
              var _ = S.current.memoizedState.isDehydrated;
              if (_ && (Ul(S, p).flags |= 256), p = as(S, p, false), p !== 2) {
                if ($c && !_) {
                  S.errorRecoveryDisabledLanes |= c, ka |= c, o = 4;
                  break e;
                }
                c = Ot, Ot = o, c !== null && (Ot === null ? Ot = c : Ot.push.apply(Ot, c));
              }
              o = p;
            }
            if (c = false, o !== 2) continue;
          }
        }
        if (o === 1) {
          Ul(e, 0), ua(e, t, 0, true);
          break;
        }
        e: {
          switch (a = e, c = o, c) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ua(a, t, It, !la);
              break e;
            case 2:
              Ot = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && (o = oi + 300 - bt(), 10 < o)) {
            if (ua(a, t, It, !la), ve(a, 0, true) !== 0) break e;
            Gn = t, a.timeoutHandle = vv(Gm.bind(null, a, n, Ot, ii, Fc, t, It, ka, zl, la, c, "Throttled", -0, 0), o);
            break e;
          }
          Gm(a, n, Ot, ii, Fc, t, It, ka, zl, la, c, null, -0, 0);
        }
      }
      break;
    } while (true);
    yn(e);
  }
  function Gm(e, t, n, a, o, c, p, S, _, B, q, Q, L, G) {
    if (e.timeoutHandle = -1, Q = t.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
      Q = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Tn }, Nm(t, c, Q);
      var oe = (c & 62914560) === c ? oi - bt() : (c & 4194048) === c ? Um - bt() : 0;
      if (oe = eE(Q, oe), oe !== null) {
        Gn = c, e.cancelPendingCommit = oe(km.bind(null, e, t, c, n, a, o, p, S, _, q, Q, null, L, G)), ua(e, c, p, !B);
        return;
      }
    }
    km(e, t, c, n, a, o, p, S, _);
  }
  function h1(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var a = 0; a < n.length; a++) {
        var o = n[a], c = o.getSnapshot;
        o = o.value;
        try {
          if (!Ht(c(), o)) return false;
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
    t &= ~Jc, t &= ~ka, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var c = 31 - mt(o), p = 1 << c;
      a[c] = -1, o &= ~p;
    }
    n !== 0 && Da(e, n, t);
  }
  function ui() {
    return (je & 6) === 0 ? (Yo(0), false) : true;
  }
  function ns() {
    if (_e !== null) {
      if (Ue === 0) var e = _e.return;
      else e = _e, Mn = La = null, yc(e), _l = null, xo = 0, e = _e;
      for (; e !== null; ) hm(e.alternate, e), e = e.return;
      _e = null;
    }
  }
  function Ul(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, B1(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Gn = 0, ns(), Ye = e, _e = n = Rn(e.current, null), Ae = t, Ue = 0, Vt = null, la = false, Ol = qe(e, t), $c = false, zl = It = Jc = ka = oa = Qe = 0, Ot = Lo = null, Fc = false, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0) for (e = e.entanglements, a &= t; 0 < a; ) {
      var o = 31 - mt(a), c = 1 << o;
      t |= e[o], a &= ~c;
    }
    return Ln = t, wr(), n;
  }
  function Ym(e, t) {
    xe = null, I.H = Do, t === Tl || t === Hr ? (t = np(), Ue = 3) : t === rc ? (t = np(), Ue = 4) : Ue = t === jc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, _e === null && (Qe = 1, Jr(e, kt(t, e.current)));
  }
  function Vm() {
    var e = Gt.current;
    return e === null ? true : (Ae & 4194048) === Ae ? Jt === null : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0 ? e === Jt : false;
  }
  function Im() {
    var e = I.H;
    return I.H = Do, e === null ? Do : e;
  }
  function qm() {
    var e = I.A;
    return I.A = m1, e;
  }
  function ci() {
    Qe = 4, la || (Ae & 4194048) !== Ae && Gt.current !== null || (Ol = true), (oa & 134217727) === 0 && (ka & 134217727) === 0 || Ye === null || ua(Ye, Ae, It, false);
  }
  function as(e, t, n) {
    var a = je;
    je |= 2;
    var o = Im(), c = qm();
    (Ye !== e || Ae !== t) && (ii = null, Ul(e, t)), t = false;
    var p = Qe;
    e: do
      try {
        if (Ue !== 0 && _e !== null) {
          var S = _e, _ = Vt;
          switch (Ue) {
            case 8:
              ns(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Gt.current === null && (t = true);
              var B = Ue;
              if (Ue = 0, Vt = null, Bl(e, S, _, B), n && Ol) {
                p = 0;
                break e;
              }
              break;
            default:
              B = Ue, Ue = 0, Vt = null, Bl(e, S, _, B);
          }
        }
        g1(), p = Qe;
        break;
      } catch (q) {
        Ym(e, q);
      }
    while (true);
    return t && e.shellSuspendCounter++, Mn = La = null, je = a, I.H = o, I.A = c, _e === null && (Ye = null, Ae = 0, wr()), p;
  }
  function g1() {
    for (; _e !== null; ) Km(_e);
  }
  function y1(e, t) {
    var n = je;
    je |= 2;
    var a = Im(), o = qm();
    Ye !== e || Ae !== t ? (ii = null, ri = bt() + 500, Ul(e, t)) : Ol = qe(e, t);
    e: do
      try {
        if (Ue !== 0 && _e !== null) {
          t = _e;
          var c = Vt;
          t: switch (Ue) {
            case 1:
              Ue = 0, Vt = null, Bl(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (ep(c)) {
                Ue = 0, Vt = null, Xm(t);
                break;
              }
              t = function() {
                Ue !== 2 && Ue !== 9 || Ye !== e || (Ue = 7), yn(e);
              }, c.then(t, t);
              break e;
            case 3:
              Ue = 7;
              break e;
            case 4:
              Ue = 5;
              break e;
            case 7:
              ep(c) ? (Ue = 0, Vt = null, Xm(t)) : (Ue = 0, Vt = null, Bl(e, t, c, 7));
              break;
            case 5:
              var p = null;
              switch (_e.tag) {
                case 26:
                  p = _e.memoizedState;
                case 5:
                case 27:
                  var S = _e;
                  if (p ? Dv(p) : S.stateNode.complete) {
                    Ue = 0, Vt = null;
                    var _ = S.sibling;
                    if (_ !== null) _e = _;
                    else {
                      var B = S.return;
                      B !== null ? (_e = B, si(B)) : _e = null;
                    }
                    break t;
                  }
              }
              Ue = 0, Vt = null, Bl(e, t, c, 5);
              break;
            case 6:
              Ue = 0, Vt = null, Bl(e, t, c, 6);
              break;
            case 8:
              ns(), Qe = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        b1();
        break;
      } catch (q) {
        Ym(e, q);
      }
    while (true);
    return Mn = La = null, I.H = a, I.A = o, je = n, _e !== null ? 0 : (Ye = null, Ae = 0, wr(), Qe);
  }
  function b1() {
    for (; _e !== null && !yt(); ) Km(_e);
  }
  function Km(e) {
    var t = mm(e.alternate, e, Ln);
    e.memoizedProps = e.pendingProps, t === null ? si(e) : _e = t;
  }
  function Xm(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = um(n, t, t.pendingProps, t.type, void 0, Ae);
        break;
      case 11:
        t = um(n, t, t.pendingProps, t.type.render, t.ref, Ae);
        break;
      case 5:
        yc(t);
      default:
        hm(n, t), t = _e = qd(t, Ln), t = mm(n, t, Ln);
    }
    e.memoizedProps = e.pendingProps, t === null ? si(e) : _e = t;
  }
  function Bl(e, t, n, a) {
    Mn = La = null, yc(t), _l = null, xo = 0;
    var o = t.return;
    try {
      if (i1(e, o, t, n, Ae)) {
        Qe = 1, Jr(e, kt(n, e.current)), _e = null;
        return;
      }
    } catch (c) {
      if (o !== null) throw _e = o, c;
      Qe = 1, Jr(e, kt(n, e.current)), _e = null;
      return;
    }
    t.flags & 32768 ? (we || a === 1 ? e = true : Ol || (Ae & 536870912) !== 0 ? e = false : (la = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Gt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Pm(t, e)) : si(t);
  }
  function si(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Pm(t, la);
        return;
      }
      e = t.return;
      var n = s1(t.alternate, t, Ln);
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
    Qe === 0 && (Qe = 5);
  }
  function Pm(e, t) {
    do {
      var n = f1(e.alternate, e);
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
    Qe = 6, _e = null;
  }
  function km(e, t, n, a, o, c, p, S, _) {
    e.cancelPendingCommit = null;
    do
      fi();
    while (nt !== 0);
    if ((je & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (c = t.lanes | t.childLanes, c |= Xu, Tt(e, n, c, p, S, _), e === Ye && (_e = Ye = null, Ae = 0), jl = t, ia = e, Gn = n, Wc = c, es = o, Bm = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, C1(Aa, function() {
        return Fm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = I.T, I.T = null, o = ee.p, ee.p = 2, p = je, je |= 4;
        try {
          d1(e, t, n);
        } finally {
          je = p, ee.p = o, I.T = a;
        }
      }
      nt = 1, Qm(), Zm(), $m();
    }
  }
  function Qm() {
    if (nt === 1) {
      nt = 0;
      var e = ia, t = jl, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = I.T, I.T = null;
        var a = ee.p;
        ee.p = 2;
        var o = je;
        je |= 4;
        try {
          Mm(t, e);
          var c = vs, p = jd(e.containerInfo), S = c.focusedElem, _ = c.selectionRange;
          if (p !== S && S && S.ownerDocument && zd(S.ownerDocument.documentElement, S)) {
            if (_ !== null && Yu(S)) {
              var B = _.start, q = _.end;
              if (q === void 0 && (q = B), "selectionStart" in S) S.selectionStart = B, S.selectionEnd = Math.min(q, S.value.length);
              else {
                var Q = S.ownerDocument || document, L = Q && Q.defaultView || window;
                if (L.getSelection) {
                  var G = L.getSelection(), oe = S.textContent.length, fe = Math.min(_.start, oe), Ge = _.end === void 0 ? fe : Math.min(_.end, oe);
                  !G.extend && fe > Ge && (p = Ge, Ge = fe, fe = p);
                  var z = Od(S, fe), D = Od(S, Ge);
                  if (z && D && (G.rangeCount !== 1 || G.anchorNode !== z.node || G.anchorOffset !== z.offset || G.focusNode !== D.node || G.focusOffset !== D.offset)) {
                    var U = Q.createRange();
                    U.setStart(z.node, z.offset), G.removeAllRanges(), fe > Ge ? (G.addRange(U), G.extend(D.node, D.offset)) : (U.setEnd(D.node, D.offset), G.addRange(U));
                  }
                }
              }
            }
            for (Q = [], G = S; G = G.parentNode; ) G.nodeType === 1 && Q.push({ element: G, left: G.scrollLeft, top: G.scrollTop });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < Q.length; S++) {
              var k = Q[S];
              k.element.scrollLeft = k.left, k.element.scrollTop = k.top;
            }
          }
          Ci = !!ms, vs = ms = null;
        } finally {
          je = o, ee.p = a, I.T = n;
        }
      }
      e.current = t, nt = 2;
    }
  }
  function Zm() {
    if (nt === 2) {
      nt = 0;
      var e = ia, t = jl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = I.T, I.T = null;
        var a = ee.p;
        ee.p = 2;
        var o = je;
        je |= 4;
        try {
          Cm(e, t.alternate, t);
        } finally {
          je = o, ee.p = a, I.T = n;
        }
      }
      nt = 3;
    }
  }
  function $m() {
    if (nt === 4 || nt === 3) {
      nt = 0, qn();
      var e = ia, t = jl, n = Gn, a = Bm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? nt = 5 : (nt = 0, jl = ia = null, Jm(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (ra = null), an(n), t = t.stateNode, St && typeof St.onCommitFiberRoot == "function") try {
        St.onCommitFiberRoot(Ma, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        t = I.T, o = ee.p, ee.p = 2, I.T = null;
        try {
          for (var c = e.onRecoverableError, p = 0; p < a.length; p++) {
            var S = a[p];
            c(S.value, { componentStack: S.stack });
          }
        } finally {
          I.T = t, ee.p = o;
        }
      }
      (Gn & 3) !== 0 && fi(), yn(e), o = e.pendingLanes, (n & 261930) !== 0 && (o & 42) !== 0 ? e === ts ? Go++ : (Go = 0, ts = e) : Go = 0, Yo(0);
    }
  }
  function Jm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, So(t)));
  }
  function fi() {
    return Qm(), Zm(), $m(), Fm();
  }
  function Fm() {
    if (nt !== 5) return false;
    var e = ia, t = Wc;
    Wc = 0;
    var n = an(Gn), a = I.T, o = ee.p;
    try {
      ee.p = 32 > n ? 32 : n, I.T = null, n = es, es = null;
      var c = ia, p = Gn;
      if (nt = 0, jl = ia = null, Gn = 0, (je & 6) !== 0) throw Error(u(331));
      var S = je;
      if (je |= 4, zm(c.current), Dm(c, c.current, p, n), je = S, Yo(0, false), St && typeof St.onPostCommitFiberRoot == "function") try {
        St.onPostCommitFiberRoot(Ma, c);
      } catch {
      }
      return true;
    } finally {
      ee.p = o, I.T = a, Jm(e, t);
    }
  }
  function Wm(e, t, n) {
    t = kt(n, t), t = zc(e.stateNode, t, 2), e = ea(e, t, 2), e !== null && (Pe(e, 2), yn(e));
  }
  function Be(e, t, n) {
    if (e.tag === 3) Wm(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Wm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ra === null || !ra.has(a))) {
          e = kt(n, e), n = em(2), a = ea(t, n, 2), a !== null && (tm(n, a, t, e), Pe(a, 2), yn(a));
          break;
        }
      }
      t = t.return;
    }
  }
  function ls(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new v1();
      var o = /* @__PURE__ */ new Set();
      a.set(t, o);
    } else o = a.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), a.set(t, o));
    o.has(n) || ($c = true, o.add(n), e = S1.bind(null, e, t, n), t.then(e, e));
  }
  function S1(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ye === e && (Ae & n) === n && (Qe === 4 || Qe === 3 && (Ae & 62914560) === Ae && 300 > bt() - oi ? (je & 2) === 0 && Ul(e, 0) : Jc |= n, zl === Ae && (zl = 0)), yn(e);
  }
  function ev(e, t) {
    t === 0 && (t = vt()), e = Ua(e, t), e !== null && (Pe(e, t), yn(e));
  }
  function E1(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ev(e, n);
  }
  function x1(e, t) {
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
        throw Error(u(314));
    }
    a !== null && a.delete(t), ev(e, n);
  }
  function C1(e, t) {
    return no(e, t);
  }
  var di = null, Hl = null, os = false, pi = false, rs = false, ca = 0;
  function yn(e) {
    e !== Hl && e.next === null && (Hl === null ? di = Hl = e : Hl = Hl.next = e), pi = true, os || (os = true, _1());
  }
  function Yo(e, t) {
    if (!rs && pi) {
      rs = true;
      do
        for (var n = false, a = di; a !== null; ) {
          if (e !== 0) {
            var o = a.pendingLanes;
            if (o === 0) var c = 0;
            else {
              var p = a.suspendedLanes, S = a.pingedLanes;
              c = (1 << 31 - mt(42 | e) + 1) - 1, c &= o & ~(p & ~S), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (n = true, lv(a, c));
          } else c = Ae, c = ve(a, a === Ye ? c : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (c & 3) === 0 || qe(a, c) || (n = true, lv(a, c));
          a = a.next;
        }
      while (n);
      rs = false;
    }
  }
  function T1() {
    tv();
  }
  function tv() {
    pi = os = false;
    var e = 0;
    ca !== 0 && U1() && (e = ca);
    for (var t = bt(), n = null, a = di; a !== null; ) {
      var o = a.next, c = nv(a, t);
      c === 0 ? (a.next = null, n === null ? di = o : n.next = o, o === null && (Hl = n)) : (n = a, (e !== 0 || (c & 3) !== 0) && (pi = true)), a = o;
    }
    nt !== 0 && nt !== 5 || Yo(e), ca !== 0 && (ca = 0);
  }
  function nv(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var p = 31 - mt(c), S = 1 << p, _ = o[p];
      _ === -1 ? ((S & n) === 0 || (S & a) !== 0) && (o[p] = at(S, t)) : _ <= t && (e.expiredLanes |= S), c &= ~S;
    }
    if (t = Ye, n = Ae, n = ve(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && ao(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || qe(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && ao(a), an(n)) {
        case 2:
        case 8:
          n = hr;
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
      return a = av.bind(null, e), n = no(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && ao(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function av(e, t) {
    if (nt !== 0 && nt !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (fi() && e.callbackNode !== n) return null;
    var a = Ae;
    return a = ve(e, e === Ye ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Lm(e, a, t), nv(e, bt()), e.callbackNode != null && e.callbackNode === n ? av.bind(null, e) : null);
  }
  function lv(e, t) {
    if (fi()) return null;
    Lm(e, t, true);
  }
  function _1() {
    H1(function() {
      (je & 6) !== 0 ? no(Ra, T1) : tv();
    });
  }
  function is() {
    if (ca === 0) {
      var e = xl;
      e === 0 && (e = tl, tl <<= 1, (tl & 261888) === 0 && (tl = 256)), ca = e;
    }
    return ca;
  }
  function ov(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Er("" + e);
  }
  function rv(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function R1(e, t, n, a, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var c = ov((o[At] || null).action), p = a.submitter;
      p && (t = (t = p[At] || null) ? ov(t.formAction) : p.getAttribute("formAction"), t !== null && (c = t, p = null));
      var S = new _r("action", "action", null, a, o);
      e.push({ event: S, listeners: [{ instance: null, listener: function() {
        if (a.defaultPrevented) {
          if (ca !== 0) {
            var _ = p ? rv(o, p) : new FormData(o);
            Ac(n, { pending: true, data: _, method: o.method, action: c }, null, _);
          }
        } else typeof c == "function" && (S.preventDefault(), _ = p ? rv(o, p) : new FormData(o), Ac(n, { pending: true, data: _, method: o.method, action: c }, c, _));
      }, currentTarget: o }] });
    }
  }
  for (var us = 0; us < Ku.length; us++) {
    var cs = Ku[us], A1 = cs.toLowerCase(), M1 = cs[0].toUpperCase() + cs.slice(1);
    ln(A1, "on" + M1);
  }
  ln(Hd, "onAnimationEnd"), ln(Ld, "onAnimationIteration"), ln(Gd, "onAnimationStart"), ln("dblclick", "onDoubleClick"), ln("focusin", "onFocus"), ln("focusout", "onBlur"), ln(KS, "onTransitionRun"), ln(XS, "onTransitionStart"), ln(PS, "onTransitionCancel"), ln(Yd, "onTransitionEnd"), ul("onMouseEnter", ["mouseout", "mouseover"]), ul("onMouseLeave", ["mouseout", "mouseover"]), ul("onPointerEnter", ["pointerout", "pointerover"]), ul("onPointerLeave", ["pointerout", "pointerover"]), Na("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Na("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Na("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Na("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Na("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Na("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), w1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));
  function iv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], o = a.event;
      a = a.listeners;
      e: {
        var c = void 0;
        if (t) for (var p = a.length - 1; 0 <= p; p--) {
          var S = a[p], _ = S.instance, B = S.currentTarget;
          if (S = S.listener, _ !== c && o.isPropagationStopped()) break e;
          c = S, o.currentTarget = B;
          try {
            c(o);
          } catch (q) {
            Mr(q);
          }
          o.currentTarget = null, c = _;
        }
        else for (p = 0; p < a.length; p++) {
          if (S = a[p], _ = S.instance, B = S.currentTarget, S = S.listener, _ !== c && o.isPropagationStopped()) break e;
          c = S, o.currentTarget = B;
          try {
            c(o);
          } catch (q) {
            Mr(q);
          }
          o.currentTarget = null, c = _;
        }
      }
    }
  }
  function Re(e, t) {
    var n = t[xu];
    n === void 0 && (n = t[xu] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (uv(t, e, 2, false), n.add(a));
  }
  function ss(e, t, n) {
    var a = 0;
    t && (a |= 4), uv(n, e, a, t);
  }
  var mi = "_reactListening" + Math.random().toString(36).slice(2);
  function fs(e) {
    if (!e[mi]) {
      e[mi] = true, td.forEach(function(n) {
        n !== "selectionchange" && (w1.has(n) || ss(n, false, e), ss(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[mi] || (t[mi] = true, ss("selectionchange", false, t));
    }
  }
  function uv(e, t, n, a) {
    switch (Hv(t)) {
      case 2:
        var o = aE;
        break;
      case 8:
        o = lE;
        break;
      default:
        o = Rs;
    }
    n = o.bind(null, t, n, e), o = void 0, !Nu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), a ? o !== void 0 ? e.addEventListener(t, n, { capture: true, passive: o }) : e.addEventListener(t, n, true) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, false);
  }
  function ds(e, t, n, a, o) {
    var c = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (; ; ) {
      if (a === null) return;
      var p = a.tag;
      if (p === 3 || p === 4) {
        var S = a.stateNode.containerInfo;
        if (S === o) break;
        if (p === 4) for (p = a.return; p !== null; ) {
          var _ = p.tag;
          if ((_ === 3 || _ === 4) && p.stateNode.containerInfo === o) return;
          p = p.return;
        }
        for (; S !== null; ) {
          if (p = ol(S), p === null) return;
          if (_ = p.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
            a = c = p;
            continue e;
          }
          S = S.parentNode;
        }
      }
      a = a.return;
    }
    pd(function() {
      var B = c, q = wu(n), Q = [];
      e: {
        var L = Vd.get(e);
        if (L !== void 0) {
          var G = _r, oe = e;
          switch (e) {
            case "keypress":
              if (Cr(n) === 0) break e;
            case "keydown":
            case "keyup":
              G = xS;
              break;
            case "focusin":
              oe = "focus", G = Uu;
              break;
            case "focusout":
              oe = "blur", G = Uu;
              break;
            case "beforeblur":
            case "afterblur":
              G = Uu;
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
              G = hd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = sS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = _S;
              break;
            case Hd:
            case Ld:
            case Gd:
              G = pS;
              break;
            case Yd:
              G = AS;
              break;
            case "scroll":
            case "scrollend":
              G = uS;
              break;
            case "wheel":
              G = wS;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = vS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = yd;
              break;
            case "toggle":
            case "beforetoggle":
              G = NS;
          }
          var fe = (t & 4) !== 0, Ge = !fe && (e === "scroll" || e === "scrollend"), z = fe ? L !== null ? L + "Capture" : null : L;
          fe = [];
          for (var D = B, U; D !== null; ) {
            var k = D;
            if (U = k.stateNode, k = k.tag, k !== 5 && k !== 26 && k !== 27 || U === null || z === null || (k = uo(D, z), k != null && fe.push(Io(D, k, U))), Ge) break;
            D = D.return;
          }
          0 < fe.length && (L = new G(L, oe, null, n, q), Q.push({ event: L, listeners: fe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (L = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", L && n !== Mu && (oe = n.relatedTarget || n.fromElement) && (ol(oe) || oe[ll])) break e;
          if ((G || L) && (L = q.window === q ? q : (L = q.ownerDocument) ? L.defaultView || L.parentWindow : window, G ? (oe = n.relatedTarget || n.toElement, G = B, oe = oe ? ol(oe) : null, oe !== null && (Ge = f(oe), fe = oe.tag, oe !== Ge || fe !== 5 && fe !== 27 && fe !== 6) && (oe = null)) : (G = null, oe = B), G !== oe)) {
            if (fe = hd, k = "onMouseLeave", z = "onMouseEnter", D = "mouse", (e === "pointerout" || e === "pointerover") && (fe = yd, k = "onPointerLeave", z = "onPointerEnter", D = "pointer"), Ge = G == null ? L : io(G), U = oe == null ? L : io(oe), L = new fe(k, D + "leave", G, n, q), L.target = Ge, L.relatedTarget = U, k = null, ol(q) === B && (fe = new fe(z, D + "enter", oe, n, q), fe.target = U, fe.relatedTarget = Ge, k = fe), Ge = k, G && oe) t: {
              for (fe = D1, z = G, D = oe, U = 0, k = z; k; k = fe(k)) U++;
              k = 0;
              for (var se = D; se; se = fe(se)) k++;
              for (; 0 < U - k; ) z = fe(z), U--;
              for (; 0 < k - U; ) D = fe(D), k--;
              for (; U--; ) {
                if (z === D || D !== null && z === D.alternate) {
                  fe = z;
                  break t;
                }
                z = fe(z), D = fe(D);
              }
              fe = null;
            }
            else fe = null;
            G !== null && cv(Q, L, G, fe, false), oe !== null && Ge !== null && cv(Q, Ge, oe, fe, true);
          }
        }
        e: {
          if (L = B ? io(B) : window, G = L.nodeName && L.nodeName.toLowerCase(), G === "select" || G === "input" && L.type === "file") var Ne = Rd;
          else if (Td(L)) if (Ad) Ne = VS;
          else {
            Ne = GS;
            var re = LS;
          }
          else G = L.nodeName, !G || G.toLowerCase() !== "input" || L.type !== "checkbox" && L.type !== "radio" ? B && Au(B.elementType) && (Ne = Rd) : Ne = YS;
          if (Ne && (Ne = Ne(e, B))) {
            _d(Q, Ne, n, q);
            break e;
          }
          re && re(e, L, B), e === "focusout" && B && L.type === "number" && B.memoizedProps.value != null && Ru(L, "number", L.value);
        }
        switch (re = B ? io(B) : window, e) {
          case "focusin":
            (Td(re) || re.contentEditable === "true") && (ml = re, Vu = B, go = null);
            break;
          case "focusout":
            go = Vu = ml = null;
            break;
          case "mousedown":
            Iu = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Iu = false, Ud(Q, n, q);
            break;
          case "selectionchange":
            if (qS) break;
          case "keydown":
          case "keyup":
            Ud(Q, n, q);
        }
        var Te;
        if (Hu) e: {
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
        else pl ? xd(e, n) && (Me = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Me = "onCompositionStart");
        Me && (bd && n.locale !== "ko" && (pl || Me !== "onCompositionStart" ? Me === "onCompositionEnd" && pl && (Te = md()) : (kn = q, Ou = "value" in kn ? kn.value : kn.textContent, pl = true)), re = vi(B, Me), 0 < re.length && (Me = new gd(Me, e, null, n, q), Q.push({ event: Me, listeners: re }), Te ? Me.data = Te : (Te = Cd(n), Te !== null && (Me.data = Te)))), (Te = zS ? jS(e, n) : US(e, n)) && (Me = vi(B, "onBeforeInput"), 0 < Me.length && (re = new gd("onBeforeInput", "beforeinput", null, n, q), Q.push({ event: re, listeners: Me }), re.data = Te)), R1(Q, e, B, n, q);
      }
      iv(Q, t);
    });
  }
  function Io(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function vi(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var o = e, c = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = uo(e, n), o != null && a.unshift(Io(e, o, c)), o = uo(e, t), o != null && a.push(Io(e, o, c))), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function D1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function cv(e, t, n, a, o) {
    for (var c = t._reactName, p = []; n !== null && n !== a; ) {
      var S = n, _ = S.alternate, B = S.stateNode;
      if (S = S.tag, _ !== null && _ === a) break;
      S !== 5 && S !== 26 && S !== 27 || B === null || (_ = B, o ? (B = uo(n, c), B != null && p.unshift(Io(n, B, _))) : o || (B = uo(n, c), B != null && p.push(Io(n, B, _)))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var N1 = /\r\n?/g, O1 = /\u0000|\uFFFD/g;
  function sv(e) {
    return (typeof e == "string" ? e : "" + e).replace(N1, `
`).replace(O1, "");
  }
  function fv(e, t) {
    return t = sv(t), sv(e) === t;
  }
  function Le(e, t, n, a, o, c) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || sl(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && sl(e, "" + a);
        break;
      case "className":
        br(e, "class", a);
        break;
      case "tabIndex":
        br(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        br(e, n, a);
        break;
      case "style":
        fd(e, a, c);
        break;
      case "data":
        if (t !== "object") {
          br(e, "data", a);
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
        a = Er("" + a), e.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof c == "function" && (n === "formAction" ? (t !== "input" && Le(e, t, "name", o.name, o, null), Le(e, t, "formEncType", o.formEncType, o, null), Le(e, t, "formMethod", o.formMethod, o, null), Le(e, t, "formTarget", o.formTarget, o, null)) : (Le(e, t, "encType", o.encType, o, null), Le(e, t, "method", o.method, o, null), Le(e, t, "target", o.target, o, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = Er("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = Tn);
        break;
      case "onScroll":
        a != null && Re("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Re("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
          if (n = a.__html, n != null) {
            if (o.children != null) throw Error(u(60));
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
        n = Er("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
        Re("beforetoggle", e), Re("toggle", e), yr(e, "popover", a);
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
        yr(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = rS.get(n) || n, yr(e, n, a));
    }
  }
  function ps(e, t, n, a, o, c) {
    switch (n) {
      case "style":
        fd(e, a, c);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
          if (n = a.__html, n != null) {
            if (o.children != null) throw Error(u(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? sl(e, a) : (typeof a == "number" || typeof a == "bigint") && sl(e, "" + a);
        break;
      case "onScroll":
        a != null && Re("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Re("scrollend", e);
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
        if (!nd.hasOwnProperty(n)) e: {
          if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), c = e[At] || null, c = c != null ? c[n] : null, typeof c == "function" && e.removeEventListener(t, c, o), typeof a == "function")) {
            typeof c != "function" && c !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, o);
            break e;
          }
          n in e ? e[n] = a : a === true ? e.setAttribute(n, "") : yr(e, n, a);
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
        Re("error", e), Re("load", e);
        var a = false, o = false, c;
        for (c in n) if (n.hasOwnProperty(c)) {
          var p = n[c];
          if (p != null) switch (c) {
            case "src":
              a = true;
              break;
            case "srcSet":
              o = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(u(137, t));
            default:
              Le(e, t, c, p, n, null);
          }
        }
        o && Le(e, t, "srcSet", n.srcSet, n, null), a && Le(e, t, "src", n.src, n, null);
        return;
      case "input":
        Re("invalid", e);
        var S = c = p = o = null, _ = null, B = null;
        for (a in n) if (n.hasOwnProperty(a)) {
          var q = n[a];
          if (q != null) switch (a) {
            case "name":
              o = q;
              break;
            case "type":
              p = q;
              break;
            case "checked":
              _ = q;
              break;
            case "defaultChecked":
              B = q;
              break;
            case "value":
              c = q;
              break;
            case "defaultValue":
              S = q;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (q != null) throw Error(u(137, t));
              break;
            default:
              Le(e, t, a, q, n, null);
          }
        }
        id(e, c, S, _, B, p, o, false);
        return;
      case "select":
        Re("invalid", e), a = p = c = null;
        for (o in n) if (n.hasOwnProperty(o) && (S = n[o], S != null)) switch (o) {
          case "value":
            c = S;
            break;
          case "defaultValue":
            p = S;
            break;
          case "multiple":
            a = S;
          default:
            Le(e, t, o, S, n, null);
        }
        t = c, n = p, e.multiple = !!a, t != null ? cl(e, !!a, t, false) : n != null && cl(e, !!a, n, true);
        return;
      case "textarea":
        Re("invalid", e), c = o = a = null;
        for (p in n) if (n.hasOwnProperty(p) && (S = n[p], S != null)) switch (p) {
          case "value":
            a = S;
            break;
          case "defaultValue":
            o = S;
            break;
          case "children":
            c = S;
            break;
          case "dangerouslySetInnerHTML":
            if (S != null) throw Error(u(91));
            break;
          default:
            Le(e, t, p, S, n, null);
        }
        cd(e, a, o, c);
        return;
      case "option":
        for (_ in n) n.hasOwnProperty(_) && (a = n[_], a != null) && (_ === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Le(e, t, _, a, n, null));
        return;
      case "dialog":
        Re("beforetoggle", e), Re("toggle", e), Re("cancel", e), Re("close", e);
        break;
      case "iframe":
      case "object":
        Re("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Vo.length; a++) Re(Vo[a], e);
        break;
      case "image":
        Re("error", e), Re("load", e);
        break;
      case "details":
        Re("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Re("error", e), Re("load", e);
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
        for (B in n) if (n.hasOwnProperty(B) && (a = n[B], a != null)) switch (B) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(137, t));
          default:
            Le(e, t, B, a, n, null);
        }
        return;
      default:
        if (Au(t)) {
          for (q in n) n.hasOwnProperty(q) && (a = n[q], a !== void 0 && ps(e, t, q, a, n, void 0));
          return;
        }
    }
    for (S in n) n.hasOwnProperty(S) && (a = n[S], a != null && Le(e, t, S, a, n, null));
  }
  function z1(e, t, n, a) {
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
        var o = null, c = null, p = null, S = null, _ = null, B = null, q = null;
        for (G in n) {
          var Q = n[G];
          if (n.hasOwnProperty(G) && Q != null) switch (G) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              _ = Q;
            default:
              a.hasOwnProperty(G) || Le(e, t, G, null, a, Q);
          }
        }
        for (var L in a) {
          var G = a[L];
          if (Q = n[L], a.hasOwnProperty(L) && (G != null || Q != null)) switch (L) {
            case "type":
              c = G;
              break;
            case "name":
              o = G;
              break;
            case "checked":
              B = G;
              break;
            case "defaultChecked":
              q = G;
              break;
            case "value":
              p = G;
              break;
            case "defaultValue":
              S = G;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (G != null) throw Error(u(137, t));
              break;
            default:
              G !== Q && Le(e, t, L, G, a, Q);
          }
        }
        _u(e, p, S, _, B, q, c, o);
        return;
      case "select":
        G = p = S = L = null;
        for (c in n) if (_ = n[c], n.hasOwnProperty(c) && _ != null) switch (c) {
          case "value":
            break;
          case "multiple":
            G = _;
          default:
            a.hasOwnProperty(c) || Le(e, t, c, null, a, _);
        }
        for (o in a) if (c = a[o], _ = n[o], a.hasOwnProperty(o) && (c != null || _ != null)) switch (o) {
          case "value":
            L = c;
            break;
          case "defaultValue":
            S = c;
            break;
          case "multiple":
            p = c;
          default:
            c !== _ && Le(e, t, o, c, a, _);
        }
        t = S, n = p, a = G, L != null ? cl(e, !!n, L, false) : !!a != !!n && (t != null ? cl(e, !!n, t, true) : cl(e, !!n, n ? [] : "", false));
        return;
      case "textarea":
        G = L = null;
        for (S in n) if (o = n[S], n.hasOwnProperty(S) && o != null && !a.hasOwnProperty(S)) switch (S) {
          case "value":
            break;
          case "children":
            break;
          default:
            Le(e, t, S, null, a, o);
        }
        for (p in a) if (o = a[p], c = n[p], a.hasOwnProperty(p) && (o != null || c != null)) switch (p) {
          case "value":
            L = o;
            break;
          case "defaultValue":
            G = o;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (o != null) throw Error(u(91));
            break;
          default:
            o !== c && Le(e, t, p, o, a, c);
        }
        ud(e, L, G);
        return;
      case "option":
        for (var oe in n) L = n[oe], n.hasOwnProperty(oe) && L != null && !a.hasOwnProperty(oe) && (oe === "selected" ? e.selected = false : Le(e, t, oe, null, a, L));
        for (_ in a) L = a[_], G = n[_], a.hasOwnProperty(_) && L !== G && (L != null || G != null) && (_ === "selected" ? e.selected = L && typeof L != "function" && typeof L != "symbol" : Le(e, t, _, L, a, G));
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
        for (var fe in n) L = n[fe], n.hasOwnProperty(fe) && L != null && !a.hasOwnProperty(fe) && Le(e, t, fe, null, a, L);
        for (B in a) if (L = a[B], G = n[B], a.hasOwnProperty(B) && L !== G && (L != null || G != null)) switch (B) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (L != null) throw Error(u(137, t));
            break;
          default:
            Le(e, t, B, L, a, G);
        }
        return;
      default:
        if (Au(t)) {
          for (var Ge in n) L = n[Ge], n.hasOwnProperty(Ge) && L !== void 0 && !a.hasOwnProperty(Ge) && ps(e, t, Ge, void 0, a, L);
          for (q in a) L = a[q], G = n[q], !a.hasOwnProperty(q) || L === G || L === void 0 && G === void 0 || ps(e, t, q, L, a, G);
          return;
        }
    }
    for (var z in n) L = n[z], n.hasOwnProperty(z) && L != null && !a.hasOwnProperty(z) && Le(e, t, z, null, a, L);
    for (Q in a) L = a[Q], G = n[Q], !a.hasOwnProperty(Q) || L === G || L == null && G == null || Le(e, t, Q, L, a, G);
  }
  function dv(e) {
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
  function j1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var o = n[a], c = o.transferSize, p = o.initiatorType, S = o.duration;
        if (c && S && dv(p)) {
          for (p = 0, S = o.responseEnd, a += 1; a < n.length; a++) {
            var _ = n[a], B = _.startTime;
            if (B > S) break;
            var q = _.transferSize, Q = _.initiatorType;
            q && dv(Q) && (_ = _.responseEnd, p += q * (_ < S ? 1 : (S - B) / (_ - B)));
          }
          if (--a, t += 8 * (c + p) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var ms = null, vs = null;
  function hi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function pv(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function mv(e, t) {
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
  function hs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var gs = null;
  function U1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === gs ? false : (gs = e, true) : (gs = null, false);
  }
  var vv = typeof setTimeout == "function" ? setTimeout : void 0, B1 = typeof clearTimeout == "function" ? clearTimeout : void 0, hv = typeof Promise == "function" ? Promise : void 0, H1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof hv < "u" ? function(e) {
    return hv.resolve(null).then(e).catch(L1);
  } : vv;
  function L1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function sa(e) {
    return e === "head";
  }
  function gv(e, t) {
    var n = t, a = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$" || n === "/&") {
        if (a === 0) {
          e.removeChild(o), Vl(t);
          return;
        }
        a--;
      } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") a++;
      else if (n === "html") qo(e.ownerDocument.documentElement);
      else if (n === "head") {
        n = e.ownerDocument.head, qo(n);
        for (var c = n.firstChild; c; ) {
          var p = c.nextSibling, S = c.nodeName;
          c[ro] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && c.rel.toLowerCase() === "stylesheet" || n.removeChild(c), c = p;
        }
      } else n === "body" && qo(e.ownerDocument.body);
      n = o;
    } while (n);
    Vl(t);
  }
  function yv(e, t) {
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
  function ys(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ys(n), Cu(n);
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
  function G1(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[ro]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (c !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (c = e.getAttribute("src"), (c !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (t === "input" && e.type === "hidden") {
        var c = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === c) return e;
      } else return e;
      if (e = Ft(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Y1(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Ft(e.nextSibling), e === null)) return null;
    return e;
  }
  function bv(e, t) {
    for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ft(e.nextSibling), e === null)) return null;
    return e;
  }
  function bs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ss(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function V1(e, t) {
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
  var Es = null;
  function Sv(e) {
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
  function Ev(e) {
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
  function xv(e, t, n) {
    switch (t = hi(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(u(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(u(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function qo(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Cu(e);
  }
  var Wt = /* @__PURE__ */ new Map(), Cv = /* @__PURE__ */ new Set();
  function gi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Yn = ee.d;
  ee.d = { f: I1, r: q1, D: K1, C: X1, L: P1, m: k1, X: Z1, S: Q1, M: $1 };
  function I1() {
    var e = Yn.f(), t = ui();
    return e || t;
  }
  function q1(e) {
    var t = rl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Yp(t) : Yn.r(e);
  }
  var Ll = typeof document > "u" ? null : document;
  function Tv(e, t, n) {
    var a = Ll;
    if (a && typeof t == "string" && t) {
      var o = Xt(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), Cv.has(o) || (Cv.add(o), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(o) === null && (t = a.createElement("link"), ft(t, "link", e), lt(t), a.head.appendChild(t)));
    }
  }
  function K1(e) {
    Yn.D(e), Tv("dns-prefetch", e, null);
  }
  function X1(e, t) {
    Yn.C(e, t), Tv("preconnect", e, t);
  }
  function P1(e, t, n) {
    Yn.L(e, t, n);
    var a = Ll;
    if (a && e && t) {
      var o = 'link[rel="preload"][as="' + Xt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + Xt(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + Xt(n.imageSizes) + '"]')) : o += '[href="' + Xt(e) + '"]';
      var c = o;
      switch (t) {
        case "style":
          c = Gl(e);
          break;
        case "script":
          c = Yl(e);
      }
      Wt.has(c) || (e = v({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), Wt.set(c, e), a.querySelector(o) !== null || t === "style" && a.querySelector(Ko(c)) || t === "script" && a.querySelector(Xo(c)) || (t = a.createElement("link"), ft(t, "link", e), lt(t), a.head.appendChild(t)));
    }
  }
  function k1(e, t) {
    Yn.m(e, t);
    var n = Ll;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Xt(a) + '"][href="' + Xt(e) + '"]', c = o;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Yl(e);
      }
      if (!Wt.has(c) && (e = v({ rel: "modulepreload", href: e }, t), Wt.set(c, e), n.querySelector(o) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Xo(c))) return;
        }
        a = n.createElement("link"), ft(a, "link", e), lt(a), n.head.appendChild(a);
      }
    }
  }
  function Q1(e, t, n) {
    Yn.S(e, t, n);
    var a = Ll;
    if (a && e) {
      var o = il(a).hoistableStyles, c = Gl(e);
      t = t || "default";
      var p = o.get(c);
      if (!p) {
        var S = { loading: 0, preload: null };
        if (p = a.querySelector(Ko(c))) S.loading = 5;
        else {
          e = v({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = Wt.get(c)) && xs(e, n);
          var _ = p = a.createElement("link");
          lt(_), ft(_, "link", e), _._p = new Promise(function(B, q) {
            _.onload = B, _.onerror = q;
          }), _.addEventListener("load", function() {
            S.loading |= 1;
          }), _.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, yi(p, t, a);
        }
        p = { type: "stylesheet", instance: p, count: 1, state: S }, o.set(c, p);
      }
    }
  }
  function Z1(e, t) {
    Yn.X(e, t);
    var n = Ll;
    if (n && e) {
      var a = il(n).hoistableScripts, o = Yl(e), c = a.get(o);
      c || (c = n.querySelector(Xo(o)), c || (e = v({ src: e, async: true }, t), (t = Wt.get(o)) && Cs(e, t), c = n.createElement("script"), lt(c), ft(c, "link", e), n.head.appendChild(c)), c = { type: "script", instance: c, count: 1, state: null }, a.set(o, c));
    }
  }
  function $1(e, t) {
    Yn.M(e, t);
    var n = Ll;
    if (n && e) {
      var a = il(n).hoistableScripts, o = Yl(e), c = a.get(o);
      c || (c = n.querySelector(Xo(o)), c || (e = v({ src: e, async: true, type: "module" }, t), (t = Wt.get(o)) && Cs(e, t), c = n.createElement("script"), lt(c), ft(c, "link", e), n.head.appendChild(c)), c = { type: "script", instance: c, count: 1, state: null }, a.set(o, c));
    }
  }
  function _v(e, t, n, a) {
    var o = (o = F.current) ? gi(o) : null;
    if (!o) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Gl(n.href), n = il(o).hoistableStyles, a = n.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Gl(n.href);
          var c = il(o).hoistableStyles, p = c.get(e);
          if (p || (o = o.ownerDocument || o, p = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, c.set(e, p), (c = o.querySelector(Ko(e))) && !c._p && (p.instance = c, p.state.loading = 5), Wt.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, Wt.set(e, n), c || J1(o, e, n, p.state))), t && a === null) throw Error(u(528, ""));
          return p;
        }
        if (t && a !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Yl(n), n = il(o).hoistableScripts, a = n.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, e));
    }
  }
  function Gl(e) {
    return 'href="' + Xt(e) + '"';
  }
  function Ko(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Rv(e) {
    return v({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function J1(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ft(t, "link", n), lt(t), e.head.appendChild(t));
  }
  function Yl(e) {
    return '[src="' + Xt(e) + '"]';
  }
  function Xo(e) {
    return "script[async]" + e;
  }
  function Av(e, t, n) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = e.querySelector('style[data-href~="' + Xt(n.href) + '"]');
        if (a) return t.instance = a, lt(a), a;
        var o = v({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
        return a = (e.ownerDocument || e).createElement("style"), lt(a), ft(a, "style", o), yi(a, n.precedence, e), t.instance = a;
      case "stylesheet":
        o = Gl(n.href);
        var c = e.querySelector(Ko(o));
        if (c) return t.state.loading |= 4, t.instance = c, lt(c), c;
        a = Rv(n), (o = Wt.get(o)) && xs(a, o), c = (e.ownerDocument || e).createElement("link"), lt(c);
        var p = c;
        return p._p = new Promise(function(S, _) {
          p.onload = S, p.onerror = _;
        }), ft(c, "link", a), t.state.loading |= 4, yi(c, n.precedence, e), t.instance = c;
      case "script":
        return c = Yl(n.src), (o = e.querySelector(Xo(c))) ? (t.instance = o, lt(o), o) : (a = n, (o = Wt.get(c)) && (a = v({}, n), Cs(a, o)), e = e.ownerDocument || e, o = e.createElement("script"), lt(o), ft(o, "link", a), e.head.appendChild(o), t.instance = o);
      case "void":
        return null;
      default:
        throw Error(u(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, yi(a, n.precedence, e));
    return t.instance;
  }
  function yi(e, t, n) {
    for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = a.length ? a[a.length - 1] : null, c = o, p = 0; p < a.length; p++) {
      var S = a[p];
      if (S.dataset.precedence === t) c = S;
      else if (c !== o) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function xs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Cs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var bi = null;
  function Mv(e, t, n) {
    if (bi === null) {
      var a = /* @__PURE__ */ new Map(), o = bi = /* @__PURE__ */ new Map();
      o.set(n, a);
    } else o = bi, a = o.get(n), a || (a = /* @__PURE__ */ new Map(), o.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
      var c = n[o];
      if (!(c[ro] || c[it] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = c.getAttribute(t) || "";
        p = e + p;
        var S = a.get(p);
        S ? S.push(c) : a.set(p, [c]);
      }
    }
    return a;
  }
  function wv(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
  }
  function F1(e, t, n) {
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
  function Dv(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function W1(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var o = Gl(a.href), c = t.querySelector(Ko(o));
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Si.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = c, lt(c);
          return;
        }
        c = t.ownerDocument || t, a = Rv(a), (o = Wt.get(o)) && xs(a, o), c = c.createElement("link"), lt(c);
        var p = c;
        p._p = new Promise(function(S, _) {
          p.onload = S, p.onerror = _;
        }), ft(c, "link", a), n.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Si.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Ts = 0;
  function eE(e, t) {
    return e.stylesheets && e.count === 0 && xi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && xi(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ts === 0 && (Ts = 62500 * j1());
      var o = setTimeout(function() {
        if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && xi(e, e.stylesheets), e.unsuspend)) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, (e.imgBytes > Ts ? 50 : 800) + t);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(o);
      };
    } : null;
  }
  function Si() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) xi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ei = null;
  function xi(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ei = /* @__PURE__ */ new Map(), t.forEach(tE, e), Ei = null, Si.call(e));
  }
  function tE(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ei.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Ei.set(e, n);
        for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < o.length; c++) {
          var p = o[c];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (n.set(p.dataset.precedence, p), a = p);
        }
        a && n.set(null, a);
      }
      o = t.instance, p = o.getAttribute("data-precedence"), c = n.get(p) || a, c === a && n.set(null, o), n.set(p, o), this.count++, a = Si.bind(this), o.addEventListener("load", a), o.addEventListener("error", a), c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Po = { $$typeof: j, Provider: null, Consumer: null, _currentValue: le, _currentValue2: le, _threadCount: 0 };
  function nE(e, t, n, a, o, c, p, S, _) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xn(0), this.hiddenUpdates = Xn(null), this.identifierPrefix = a, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Nv(e, t, n, a, o, c, p, S, _, B, q, Q) {
    return e = new nE(e, t, n, p, _, B, q, Q, S), t = 1, c === true && (t |= 24), c = Lt(3, null, null, t), e.current = c, c.stateNode = e, t = ac(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = { element: a, isDehydrated: n, cache: t }, ic(c), e;
  }
  function Ov(e) {
    return e ? (e = gl, e) : gl;
  }
  function zv(e, t, n, a, o, c) {
    o = Ov(o), a.context === null ? a.context = o : a.pendingContext = o, a = Wn(t), a.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (a.callback = c), n = ea(e, a, t), n !== null && (zt(n, e, t), To(n, e, t));
  }
  function jv(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function _s(e, t) {
    jv(e, t), (e = e.alternate) && jv(e, t);
  }
  function Uv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ua(e, 67108864);
      t !== null && zt(t, e, 67108864), _s(e, 67108864);
    }
  }
  function Bv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qt();
      t = al(t);
      var n = Ua(e, t);
      n !== null && zt(n, e, t), _s(e, t);
    }
  }
  var Ci = true;
  function aE(e, t, n, a) {
    var o = I.T;
    I.T = null;
    var c = ee.p;
    try {
      ee.p = 2, Rs(e, t, n, a);
    } finally {
      ee.p = c, I.T = o;
    }
  }
  function lE(e, t, n, a) {
    var o = I.T;
    I.T = null;
    var c = ee.p;
    try {
      ee.p = 8, Rs(e, t, n, a);
    } finally {
      ee.p = c, I.T = o;
    }
  }
  function Rs(e, t, n, a) {
    if (Ci) {
      var o = As(a);
      if (o === null) ds(e, t, a, Ti, n), Lv(e, a);
      else if (rE(o, e, t, n, a)) a.stopPropagation();
      else if (Lv(e, a), t & 4 && -1 < oE.indexOf(e)) {
        for (; o !== null; ) {
          var c = rl(o);
          if (c !== null) switch (c.tag) {
            case 3:
              if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                var p = mn(c.pendingLanes);
                if (p !== 0) {
                  var S = c;
                  for (S.pendingLanes |= 2, S.entangledLanes |= 2; p; ) {
                    var _ = 1 << 31 - mt(p);
                    S.entanglements[1] |= _, p &= ~_;
                  }
                  yn(c), (je & 6) === 0 && (ri = bt() + 500, Yo(0));
                }
              }
              break;
            case 31:
            case 13:
              S = Ua(c, 2), S !== null && zt(S, c, 2), ui(), _s(c, 2);
          }
          if (c = As(a), c === null && ds(e, t, a, Ti, n), c === o) break;
          o = c;
        }
        o !== null && a.stopPropagation();
      } else ds(e, t, a, null, n);
    }
  }
  function As(e) {
    return e = wu(e), Ms(e);
  }
  var Ti = null;
  function Ms(e) {
    if (Ti = null, e = ol(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Ti = e, null;
  }
  function Hv(e) {
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
        switch (bu()) {
          case Ra:
            return 2;
          case hr:
            return 8;
          case Aa:
          case lo:
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
  var ws = false, fa = null, da = null, pa = null, ko = /* @__PURE__ */ new Map(), Qo = /* @__PURE__ */ new Map(), ma = [], oE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Lv(e, t) {
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
        ko.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qo.delete(t.pointerId);
    }
  }
  function Zo(e, t, n, a, o, c) {
    return e === null || e.nativeEvent !== c ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: c, targetContainers: [o] }, t !== null && (t = rl(t), t !== null && Uv(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function rE(e, t, n, a, o) {
    switch (t) {
      case "focusin":
        return fa = Zo(fa, e, t, n, a, o), true;
      case "dragenter":
        return da = Zo(da, e, t, n, a, o), true;
      case "mouseover":
        return pa = Zo(pa, e, t, n, a, o), true;
      case "pointerover":
        var c = o.pointerId;
        return ko.set(c, Zo(ko.get(c) || null, e, t, n, a, o)), true;
      case "gotpointercapture":
        return c = o.pointerId, Qo.set(c, Zo(Qo.get(c) || null, e, t, n, a, o)), true;
    }
    return false;
  }
  function Gv(e) {
    var t = ol(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = m(n), t !== null) {
            e.blockedOn = t, Wf(e.priority, function() {
              Bv(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = h(n), t !== null) {
            e.blockedOn = t, Wf(e.priority, function() {
              Bv(n);
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
  function _i(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = As(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        Mu = a, n.target.dispatchEvent(a), Mu = null;
      } else return t = rl(n), t !== null && Uv(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function Yv(e, t, n) {
    _i(e) && n.delete(t);
  }
  function iE() {
    ws = false, fa !== null && _i(fa) && (fa = null), da !== null && _i(da) && (da = null), pa !== null && _i(pa) && (pa = null), ko.forEach(Yv), Qo.forEach(Yv);
  }
  function Ri(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ws || (ws = true, l.unstable_scheduleCallback(l.unstable_NormalPriority, iE)));
  }
  var Ai = null;
  function Vv(e) {
    Ai !== e && (Ai = e, l.unstable_scheduleCallback(l.unstable_NormalPriority, function() {
      Ai === e && (Ai = null);
      for (var t = 0; t < e.length; t += 3) {
        var n = e[t], a = e[t + 1], o = e[t + 2];
        if (typeof a != "function") {
          if (Ms(a || n) === null) continue;
          break;
        }
        var c = rl(n);
        c !== null && (e.splice(t, 3), t -= 3, Ac(c, { pending: true, data: o, method: n.method, action: a }, a, o));
      }
    }));
  }
  function Vl(e) {
    function t(_) {
      return Ri(_, e);
    }
    fa !== null && Ri(fa, e), da !== null && Ri(da, e), pa !== null && Ri(pa, e), ko.forEach(t), Qo.forEach(t);
    for (var n = 0; n < ma.length; n++) {
      var a = ma[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ma.length && (n = ma[0], n.blockedOn === null); ) Gv(n), n.blockedOn === null && ma.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (a = 0; a < n.length; a += 3) {
      var o = n[a], c = n[a + 1], p = o[At] || null;
      if (typeof c == "function") p || Vv(n);
      else if (p) {
        var S = null;
        if (c && c.hasAttribute("formAction")) {
          if (o = c, p = c[At] || null) S = p.formAction;
          else if (Ms(o) !== null) continue;
        } else S = p.action;
        typeof S == "function" ? n[a + 1] = S : (n.splice(a, 3), a -= 3), Vv(n);
      }
    }
  }
  function Iv() {
    function e(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({ handler: function() {
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
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, { state: c.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var a = false, o = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        a = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null);
      };
    }
  }
  function Ds(e) {
    this._internalRoot = e;
  }
  Mi.prototype.render = Ds.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var n = t.current, a = qt();
    zv(n, a, e, t, null, null);
  }, Mi.prototype.unmount = Ds.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      zv(e.current, 2, null, e, null, null), ui(), t[ll] = null;
    }
  };
  function Mi(e) {
    this._internalRoot = e;
  }
  Mi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Eu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ma.length && t !== 0 && t < ma[n].priority; n++) ;
      ma.splice(n, 0, e), n === 0 && Gv(e);
    }
  };
  var qv = i.version;
  if (qv !== "19.2.4") throw Error(u(527, qv, "19.2.4"));
  ee.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = g(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var uE = { bundleType: 0, version: "19.2.4", rendererPackageName: "react-dom", currentDispatcherRef: I, reconcilerVersion: "19.2.4" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wi.isDisabled && wi.supportsFiber) try {
      Ma = wi.inject(uE), St = wi;
    } catch {
    }
  }
  return Jo.createRoot = function(e, t) {
    if (!s(e)) throw Error(u(299));
    var n = false, a = "", o = $p, c = Jp, p = Fp;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = Nv(e, 1, false, null, null, n, a, null, o, c, p, Iv), e[ll] = t.current, fs(e), new Ds(t);
  }, Jo.hydrateRoot = function(e, t, n) {
    if (!s(e)) throw Error(u(299));
    var a = false, o = "", c = $p, p = Jp, S = Fp, _ = null;
    return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (S = n.onRecoverableError), n.formState !== void 0 && (_ = n.formState)), t = Nv(e, 1, true, t, n ?? null, a, o, _, c, p, S, Iv), t.context = Ov(null), n = t.current, a = qt(), a = al(a), o = Wn(a), o.callback = null, ea(n, o, a), n = a, t.current.lanes = n, Pe(t, n), yn(t), e[ll] = t.current, fs(e), new Mi(t);
  }, Jo.version = "19.2.4", Jo;
}
var Wv;
function OE() {
  if (Wv) return Os.exports;
  Wv = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
    } catch (i) {
      console.error(i);
    }
  }
  return l(), Os.exports = NE(), Os.exports;
}
var zE = OE();
const RM = bf(zE);
var d = ar();
const Z = bf(d), Sf = RE({ __proto__: null, default: Z }, [d]);
var Us = { exports: {} }, Bs = {}, Hs = { exports: {} }, Ls = {};
var eh;
function jE() {
  if (eh) return Ls;
  eh = 1;
  var l = ar();
  function i(v, C) {
    return v === C && (v !== 0 || 1 / v === 1 / C) || v !== v && C !== C;
  }
  var r = typeof Object.is == "function" ? Object.is : i, u = l.useState, s = l.useEffect, f = l.useLayoutEffect, m = l.useDebugValue;
  function h(v, C) {
    var w = C(), N = u({ inst: { value: w, getSnapshot: C } }), x = N[0].inst, T = N[1];
    return f(function() {
      x.value = w, x.getSnapshot = C, y(x) && T({ inst: x });
    }, [v, w, C]), s(function() {
      return y(x) && T({ inst: x }), v(function() {
        y(x) && T({ inst: x });
      });
    }, [v]), m(w), w;
  }
  function y(v) {
    var C = v.getSnapshot;
    v = v.value;
    try {
      var w = C();
      return !r(v, w);
    } catch {
      return true;
    }
  }
  function g(v, C) {
    return C();
  }
  var b = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? g : h;
  return Ls.useSyncExternalStore = l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : b, Ls;
}
var th;
function UE() {
  return th || (th = 1, Hs.exports = jE()), Hs.exports;
}
var nh;
function BE() {
  if (nh) return Bs;
  nh = 1;
  var l = ar(), i = UE();
  function r(g, b) {
    return g === b && (g !== 0 || 1 / g === 1 / b) || g !== g && b !== b;
  }
  var u = typeof Object.is == "function" ? Object.is : r, s = i.useSyncExternalStore, f = l.useRef, m = l.useEffect, h = l.useMemo, y = l.useDebugValue;
  return Bs.useSyncExternalStoreWithSelector = function(g, b, v, C, w) {
    var N = f(null);
    if (N.current === null) {
      var x = { hasValue: false, value: null };
      N.current = x;
    } else x = N.current;
    N = h(function() {
      function M(J) {
        if (!O) {
          if (O = true, j = J, J = C(J), w !== void 0 && x.hasValue) {
            var V = x.value;
            if (w(V, J)) return Y = V;
          }
          return Y = J;
        }
        if (V = Y, u(j, J)) return V;
        var ae = C(J);
        return w !== void 0 && w(V, ae) ? (j = J, V) : (j = J, Y = ae);
      }
      var O = false, j, Y, $ = v === void 0 ? null : v;
      return [function() {
        return M(b());
      }, $ === null ? void 0 : function() {
        return M($());
      }];
    }, [b, v, C, w]);
    var T = s(g, N[0], N[1]);
    return m(function() {
      x.hasValue = true, x.value = T;
    }, [T]), y(T), T;
  }, Bs;
}
var ah;
function HE() {
  return ah || (ah = 1, Us.exports = BE()), Us.exports;
}
var AM = HE(), lr = Dh();
const Nh = bf(lr);
var LE = (l, i, r, u, s, f, m, h) => {
  let y = document.documentElement, g = ["light", "dark"];
  function b(w) {
    (Array.isArray(l) ? l : [l]).forEach((N) => {
      let x = N === "class", T = x && f ? s.map((M) => f[M] || M) : s;
      x ? (y.classList.remove(...T), y.classList.add(f && f[w] ? f[w] : w)) : y.setAttribute(N, w);
    }), v(w);
  }
  function v(w) {
    h && g.includes(w) && (y.style.colorScheme = w);
  }
  function C() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (u) b(u);
  else try {
    let w = localStorage.getItem(i) || r, N = m && w === "system" ? C() : w;
    b(N);
  } catch {
  }
}, GE = d.createContext(void 0), YE = { setTheme: (l) => {
}, themes: [] }, MM = () => {
  var l;
  return (l = d.useContext(GE)) != null ? l : YE;
};
d.memo(({ forcedTheme: l, storageKey: i, attribute: r, enableSystem: u, enableColorScheme: s, defaultTheme: f, value: m, themes: h, nonce: y, scriptProps: g }) => {
  let b = JSON.stringify([r, i, f, l, h, m, u, s]).slice(1, -1);
  return d.createElement("script", { ...g, suppressHydrationWarning: true, nonce: typeof window > "u" ? y : "", dangerouslySetInnerHTML: { __html: `(${LE.toString()})(${b})` } });
});
function VE(l) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", i.appendChild(r), r.styleSheet ? r.styleSheet.cssText = l : r.appendChild(document.createTextNode(l));
}
const IE = (l) => {
  switch (l) {
    case "success":
      return XE;
    case "info":
      return kE;
    case "warning":
      return PE;
    case "error":
      return QE;
    default:
      return null;
  }
}, qE = Array(12).fill(0), KE = ({ visible: l, className: i }) => Z.createElement("div", { className: ["sonner-loading-wrapper", i].filter(Boolean).join(" "), "data-visible": l }, Z.createElement("div", { className: "sonner-spinner" }, qE.map((r, u) => Z.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${u}` })))), XE = Z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, Z.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), PE = Z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, Z.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), kE = Z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, Z.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), QE = Z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, Z.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), ZE = Z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, Z.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), Z.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), $E = () => {
  const [l, i] = Z.useState(document.hidden);
  return Z.useEffect(() => {
    const r = () => {
      i(document.hidden);
    };
    return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r);
  }, []), l;
};
let Js = 1;
class JE {
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
      const { message: u, ...s } = i, f = typeof (i == null ? void 0 : i.id) == "number" || ((r = i.id) == null ? void 0 : r.length) > 0 ? i.id : Js++, m = this.toasts.find((y) => y.id === f), h = i.dismissible === void 0 ? true : i.dismissible;
      return this.dismissedToasts.has(f) && this.dismissedToasts.delete(f), m ? this.toasts = this.toasts.map((y) => y.id === f ? (this.publish({ ...y, ...i, id: f, title: u }), { ...y, ...i, id: f, dismissible: h, title: u }) : y) : this.addToast({ title: u, ...s, dismissible: h, id: f }), f;
    }, this.dismiss = (i) => (i ? (this.dismissedToasts.add(i), requestAnimationFrame(() => this.subscribers.forEach((r) => r({ id: i, dismiss: true })))) : this.toasts.forEach((r) => {
      this.subscribers.forEach((u) => u({ id: r.id, dismiss: true }));
    }), i), this.message = (i, r) => this.create({ ...r, message: i }), this.error = (i, r) => this.create({ ...r, message: i, type: "error" }), this.success = (i, r) => this.create({ ...r, type: "success", message: i }), this.info = (i, r) => this.create({ ...r, type: "info", message: i }), this.warning = (i, r) => this.create({ ...r, type: "warning", message: i }), this.loading = (i, r) => this.create({ ...r, type: "loading", message: i }), this.promise = (i, r) => {
      if (!r) return;
      let u;
      r.loading !== void 0 && (u = this.create({ ...r, promise: i, type: "loading", message: r.loading, description: typeof r.description != "function" ? r.description : void 0 }));
      const s = Promise.resolve(i instanceof Function ? i() : i);
      let f = u !== void 0, m;
      const h = s.then(async (g) => {
        if (m = ["resolve", g], Z.isValidElement(g)) f = false, this.create({ id: u, type: "default", message: g });
        else if (WE(g) && !g.ok) {
          f = false;
          const v = typeof r.error == "function" ? await r.error(`HTTP error! status: ${g.status}`) : r.error, C = typeof r.description == "function" ? await r.description(`HTTP error! status: ${g.status}`) : r.description, N = typeof v == "object" && !Z.isValidElement(v) ? v : { message: v };
          this.create({ id: u, type: "error", description: C, ...N });
        } else if (g instanceof Error) {
          f = false;
          const v = typeof r.error == "function" ? await r.error(g) : r.error, C = typeof r.description == "function" ? await r.description(g) : r.description, N = typeof v == "object" && !Z.isValidElement(v) ? v : { message: v };
          this.create({ id: u, type: "error", description: C, ...N });
        } else if (r.success !== void 0) {
          f = false;
          const v = typeof r.success == "function" ? await r.success(g) : r.success, C = typeof r.description == "function" ? await r.description(g) : r.description, N = typeof v == "object" && !Z.isValidElement(v) ? v : { message: v };
          this.create({ id: u, type: "success", description: C, ...N });
        }
      }).catch(async (g) => {
        if (m = ["reject", g], r.error !== void 0) {
          f = false;
          const b = typeof r.error == "function" ? await r.error(g) : r.error, v = typeof r.description == "function" ? await r.description(g) : r.description, w = typeof b == "object" && !Z.isValidElement(b) ? b : { message: b };
          this.create({ id: u, type: "error", description: v, ...w });
        }
      }).finally(() => {
        f && (this.dismiss(u), u = void 0), r.finally == null || r.finally.call(r);
      }), y = () => new Promise((g, b) => h.then(() => m[0] === "reject" ? b(m[1]) : g(m[1])).catch(b));
      return typeof u != "string" && typeof u != "number" ? { unwrap: y } : Object.assign(u, { unwrap: y });
    }, this.custom = (i, r) => {
      const u = (r == null ? void 0 : r.id) || Js++;
      return this.create({ jsx: i(u), id: u, ...r }), u;
    }, this.getActiveToasts = () => this.toasts.filter((i) => !this.dismissedToasts.has(i.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const jt = new JE(), FE = (l, i) => {
  const r = (i == null ? void 0 : i.id) || Js++;
  return jt.addToast({ title: l, ...i, id: r }), r;
}, WE = (l) => l && typeof l == "object" && "ok" in l && typeof l.ok == "boolean" && "status" in l && typeof l.status == "number", ex = FE, tx = () => jt.toasts, nx = () => jt.getActiveToasts(), wM = Object.assign(ex, { success: jt.success, info: jt.info, warning: jt.warning, error: jt.error, custom: jt.custom, message: jt.message, promise: jt.promise, dismiss: jt.dismiss, loading: jt.loading }, { getHistory: tx, getToasts: nx });
VE("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Di(l) {
  return l.label !== void 0;
}
const ax = 3, lx = "24px", ox = "16px", lh = 4e3, rx = 356, ix = 14, ux = 45, cx = 200;
function bn(...l) {
  return l.filter(Boolean).join(" ");
}
function sx(l) {
  const [i, r] = l.split("-"), u = [];
  return i && u.push(i), r && u.push(r), u;
}
const fx = (l) => {
  var i, r, u, s, f, m, h, y, g;
  const { invert: b, toast: v, unstyled: C, interacting: w, setHeights: N, visibleToasts: x, heights: T, index: M, toasts: O, expanded: j, removeToast: Y, defaultRichColors: $, closeButton: J, style: V, cancelButtonStyle: ae, actionButtonStyle: ye, className: me = "", descriptionClassName: ce = "", duration: de, position: pe, gap: be, expandByDefault: Se, classNames: I, icons: ee, closeButtonAriaLabel: le = "Close toast" } = l, [ne, Ee] = Z.useState(null), [R, A] = Z.useState(null), [H, X] = Z.useState(false), [P, F] = Z.useState(false), [K, te] = Z.useState(false), [ie, Ce] = Z.useState(false), [De, ze] = Z.useState(false), [rt, tt] = Z.useState(0), [En, dn] = Z.useState(0), tn = Z.useRef(v.duration || de || lh), to = Z.useRef(null), Bt = Z.useRef(null), no = M === 0, ao = M + 1 <= x, yt = v.type, qn = v.dismissible !== false, bt = v.className || "", bu = v.descriptionClassName || "", Ra = Z.useMemo(() => T.findIndex((ve) => ve.toastId === v.id) || 0, [T, v.id]), hr = Z.useMemo(() => {
    var ve;
    return (ve = v.closeButton) != null ? ve : J;
  }, [v.closeButton, J]), Aa = Z.useMemo(() => v.duration || de || lh, [v.duration, de]), lo = Z.useRef(0), xn = Z.useRef(0), gr = Z.useRef(0), Kn = Z.useRef(null), [Ma, St] = pe.split("-"), nn = Z.useMemo(() => T.reduce((ve, qe, at) => at >= Ra ? ve : ve + qe.height, 0), [T, Ra]), mt = $E(), Su = v.invert || b, oo = yt === "loading";
  xn.current = Z.useMemo(() => Ra * be + nn, [Ra, nn]), Z.useEffect(() => {
    tn.current = Aa;
  }, [Aa]), Z.useEffect(() => {
    X(true);
  }, []), Z.useEffect(() => {
    const ve = Bt.current;
    if (ve) {
      const qe = ve.getBoundingClientRect().height;
      return dn(qe), N((at) => [{ toastId: v.id, height: qe, position: v.position }, ...at]), () => N((at) => at.filter((vt) => vt.toastId !== v.id));
    }
  }, [N, v.id]), Z.useLayoutEffect(() => {
    if (!H) return;
    const ve = Bt.current, qe = ve.style.height;
    ve.style.height = "auto";
    const at = ve.getBoundingClientRect().height;
    ve.style.height = qe, dn(at), N((vt) => vt.find((Pe) => Pe.toastId === v.id) ? vt.map((Pe) => Pe.toastId === v.id ? { ...Pe, height: at } : Pe) : [{ toastId: v.id, height: at, position: v.position }, ...vt]);
  }, [H, v.title, v.description, N, v.id, v.jsx, v.action, v.cancel]);
  const pn = Z.useCallback(() => {
    F(true), tt(xn.current), N((ve) => ve.filter((qe) => qe.toastId !== v.id)), setTimeout(() => {
      Y(v);
    }, cx);
  }, [v, Y, N, xn]);
  Z.useEffect(() => {
    if (v.promise && yt === "loading" || v.duration === 1 / 0 || v.type === "loading") return;
    let ve;
    return j || w || mt ? (() => {
      if (gr.current < lo.current) {
        const vt = (/* @__PURE__ */ new Date()).getTime() - lo.current;
        tn.current = tn.current - vt;
      }
      gr.current = (/* @__PURE__ */ new Date()).getTime();
    })() : tn.current !== 1 / 0 && (lo.current = (/* @__PURE__ */ new Date()).getTime(), ve = setTimeout(() => {
      v.onAutoClose == null || v.onAutoClose.call(v, v), pn();
    }, tn.current)), () => clearTimeout(ve);
  }, [j, w, v, yt, mt, pn]), Z.useEffect(() => {
    v.delete && (pn(), v.onDismiss == null || v.onDismiss.call(v, v));
  }, [pn, v.delete]);
  function tl() {
    var ve;
    if (ee == null ? void 0 : ee.loading) {
      var qe;
      return Z.createElement("div", { className: bn(I == null ? void 0 : I.loader, v == null || (qe = v.classNames) == null ? void 0 : qe.loader, "sonner-loader"), "data-visible": yt === "loading" }, ee.loading);
    }
    return Z.createElement(KE, { className: bn(I == null ? void 0 : I.loader, v == null || (ve = v.classNames) == null ? void 0 : ve.loader), visible: yt === "loading" });
  }
  const nl = v.icon || (ee == null ? void 0 : ee[yt]) || IE(yt);
  var wa, mn;
  return Z.createElement("li", { tabIndex: 0, ref: Bt, className: bn(me, bt, I == null ? void 0 : I.toast, v == null || (i = v.classNames) == null ? void 0 : i.toast, I == null ? void 0 : I.default, I == null ? void 0 : I[yt], v == null || (r = v.classNames) == null ? void 0 : r[yt]), "data-sonner-toast": "", "data-rich-colors": (wa = v.richColors) != null ? wa : $, "data-styled": !(v.jsx || v.unstyled || C), "data-mounted": H, "data-promise": !!v.promise, "data-swiped": De, "data-removed": P, "data-visible": ao, "data-y-position": Ma, "data-x-position": St, "data-index": M, "data-front": no, "data-swiping": K, "data-dismissible": qn, "data-type": yt, "data-invert": Su, "data-swipe-out": ie, "data-swipe-direction": R, "data-expanded": !!(j || Se && H), "data-testid": v.testId, style: { "--index": M, "--toasts-before": M, "--z-index": O.length - M, "--offset": `${P ? rt : xn.current}px`, "--initial-height": Se ? "auto" : `${En}px`, ...V, ...v.style }, onDragEnd: () => {
    te(false), Ee(null), Kn.current = null;
  }, onPointerDown: (ve) => {
    ve.button !== 2 && (oo || !qn || (to.current = /* @__PURE__ */ new Date(), tt(xn.current), ve.target.setPointerCapture(ve.pointerId), ve.target.tagName !== "BUTTON" && (te(true), Kn.current = { x: ve.clientX, y: ve.clientY })));
  }, onPointerUp: () => {
    var ve, qe, at;
    if (ie || !qn) return;
    Kn.current = null;
    const vt = Number(((ve = Bt.current) == null ? void 0 : ve.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), Xn = Number(((qe = Bt.current) == null ? void 0 : qe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Pe = (/* @__PURE__ */ new Date()).getTime() - ((at = to.current) == null ? void 0 : at.getTime()), Tt = ne === "x" ? vt : Xn, Da = Math.abs(Tt) / Pe;
    if (Math.abs(Tt) >= ux || Da > 0.11) {
      tt(xn.current), v.onDismiss == null || v.onDismiss.call(v, v), A(ne === "x" ? vt > 0 ? "right" : "left" : Xn > 0 ? "down" : "up"), pn(), Ce(true);
      return;
    } else {
      var _t, Rt;
      (_t = Bt.current) == null || _t.style.setProperty("--swipe-amount-x", "0px"), (Rt = Bt.current) == null || Rt.style.setProperty("--swipe-amount-y", "0px");
    }
    ze(false), te(false), Ee(null);
  }, onPointerMove: (ve) => {
    var qe, at, vt;
    if (!Kn.current || !qn || ((qe = window.getSelection()) == null ? void 0 : qe.toString().length) > 0) return;
    const Pe = ve.clientY - Kn.current.y, Tt = ve.clientX - Kn.current.x;
    var Da;
    const _t = (Da = l.swipeDirections) != null ? Da : sx(pe);
    !ne && (Math.abs(Tt) > 1 || Math.abs(Pe) > 1) && Ee(Math.abs(Tt) > Math.abs(Pe) ? "x" : "y");
    let Rt = { x: 0, y: 0 };
    const al = (an) => 1 / (1.5 + Math.abs(an) / 20);
    if (ne === "y") {
      if (_t.includes("top") || _t.includes("bottom")) if (_t.includes("top") && Pe < 0 || _t.includes("bottom") && Pe > 0) Rt.y = Pe;
      else {
        const an = Pe * al(Pe);
        Rt.y = Math.abs(an) < Math.abs(Pe) ? an : Pe;
      }
    } else if (ne === "x" && (_t.includes("left") || _t.includes("right"))) if (_t.includes("left") && Tt < 0 || _t.includes("right") && Tt > 0) Rt.x = Tt;
    else {
      const an = Tt * al(Tt);
      Rt.x = Math.abs(an) < Math.abs(Tt) ? an : Tt;
    }
    (Math.abs(Rt.x) > 0 || Math.abs(Rt.y) > 0) && ze(true), (at = Bt.current) == null || at.style.setProperty("--swipe-amount-x", `${Rt.x}px`), (vt = Bt.current) == null || vt.style.setProperty("--swipe-amount-y", `${Rt.y}px`);
  } }, hr && !v.jsx && yt !== "loading" ? Z.createElement("button", { "aria-label": le, "data-disabled": oo, "data-close-button": true, onClick: oo || !qn ? () => {
  } : () => {
    pn(), v.onDismiss == null || v.onDismiss.call(v, v);
  }, className: bn(I == null ? void 0 : I.closeButton, v == null || (u = v.classNames) == null ? void 0 : u.closeButton) }, (mn = ee == null ? void 0 : ee.close) != null ? mn : ZE) : null, (yt || v.icon || v.promise) && v.icon !== null && ((ee == null ? void 0 : ee[yt]) !== null || v.icon) ? Z.createElement("div", { "data-icon": "", className: bn(I == null ? void 0 : I.icon, v == null || (s = v.classNames) == null ? void 0 : s.icon) }, v.promise || v.type === "loading" && !v.icon ? v.icon || tl() : null, v.type !== "loading" ? nl : null) : null, Z.createElement("div", { "data-content": "", className: bn(I == null ? void 0 : I.content, v == null || (f = v.classNames) == null ? void 0 : f.content) }, Z.createElement("div", { "data-title": "", className: bn(I == null ? void 0 : I.title, v == null || (m = v.classNames) == null ? void 0 : m.title) }, v.jsx ? v.jsx : typeof v.title == "function" ? v.title() : v.title), v.description ? Z.createElement("div", { "data-description": "", className: bn(ce, bu, I == null ? void 0 : I.description, v == null || (h = v.classNames) == null ? void 0 : h.description) }, typeof v.description == "function" ? v.description() : v.description) : null), Z.isValidElement(v.cancel) ? v.cancel : v.cancel && Di(v.cancel) ? Z.createElement("button", { "data-button": true, "data-cancel": true, style: v.cancelButtonStyle || ae, onClick: (ve) => {
    Di(v.cancel) && qn && (v.cancel.onClick == null || v.cancel.onClick.call(v.cancel, ve), pn());
  }, className: bn(I == null ? void 0 : I.cancelButton, v == null || (y = v.classNames) == null ? void 0 : y.cancelButton) }, v.cancel.label) : null, Z.isValidElement(v.action) ? v.action : v.action && Di(v.action) ? Z.createElement("button", { "data-button": true, "data-action": true, style: v.actionButtonStyle || ye, onClick: (ve) => {
    Di(v.action) && (v.action.onClick == null || v.action.onClick.call(v.action, ve), !ve.defaultPrevented && pn());
  }, className: bn(I == null ? void 0 : I.actionButton, v == null || (g = v.classNames) == null ? void 0 : g.actionButton) }, v.action.label) : null);
};
function oh() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const l = document.documentElement.getAttribute("dir");
  return l === "auto" || !l ? window.getComputedStyle(document.documentElement).direction : l;
}
function dx(l, i) {
  const r = {};
  return [l, i].forEach((u, s) => {
    const f = s === 1, m = f ? "--mobile-offset" : "--offset", h = f ? ox : lx;
    function y(g) {
      ["top", "right", "bottom", "left"].forEach((b) => {
        r[`${m}-${b}`] = typeof g == "number" ? `${g}px` : g;
      });
    }
    typeof u == "number" || typeof u == "string" ? y(u) : typeof u == "object" ? ["top", "right", "bottom", "left"].forEach((g) => {
      u[g] === void 0 ? r[`${m}-${g}`] = h : r[`${m}-${g}`] = typeof u[g] == "number" ? `${u[g]}px` : u[g];
    }) : y(h);
  }), r;
}
const DM = Z.forwardRef(function(i, r) {
  const { id: u, invert: s, position: f = "bottom-right", hotkey: m = ["altKey", "KeyT"], expand: h, closeButton: y, className: g, offset: b, mobileOffset: v, theme: C = "light", richColors: w, duration: N, style: x, visibleToasts: T = ax, toastOptions: M, dir: O = oh(), gap: j = ix, icons: Y, containerAriaLabel: $ = "Notifications" } = i, [J, V] = Z.useState([]), ae = Z.useMemo(() => u ? J.filter((H) => H.toasterId === u) : J.filter((H) => !H.toasterId), [J, u]), ye = Z.useMemo(() => Array.from(new Set([f].concat(ae.filter((H) => H.position).map((H) => H.position)))), [ae, f]), [me, ce] = Z.useState([]), [de, pe] = Z.useState(false), [be, Se] = Z.useState(false), [I, ee] = Z.useState(C !== "system" ? C : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), le = Z.useRef(null), ne = m.join("+").replace(/Key/g, "").replace(/Digit/g, ""), Ee = Z.useRef(null), R = Z.useRef(false), A = Z.useCallback((H) => {
    V((X) => {
      var P;
      return (P = X.find((F) => F.id === H.id)) != null && P.delete || jt.dismiss(H.id), X.filter(({ id: F }) => F !== H.id);
    });
  }, []);
  return Z.useEffect(() => jt.subscribe((H) => {
    if (H.dismiss) {
      requestAnimationFrame(() => {
        V((X) => X.map((P) => P.id === H.id ? { ...P, delete: true } : P));
      });
      return;
    }
    setTimeout(() => {
      Nh.flushSync(() => {
        V((X) => {
          const P = X.findIndex((F) => F.id === H.id);
          return P !== -1 ? [...X.slice(0, P), { ...X[P], ...H }, ...X.slice(P + 1)] : [H, ...X];
        });
      });
    });
  }), [J]), Z.useEffect(() => {
    if (C !== "system") {
      ee(C);
      return;
    }
    if (C === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ee("dark") : ee("light")), typeof window > "u") return;
    const H = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      H.addEventListener("change", ({ matches: X }) => {
        ee(X ? "dark" : "light");
      });
    } catch {
      H.addListener(({ matches: P }) => {
        try {
          ee(P ? "dark" : "light");
        } catch (F) {
          console.error(F);
        }
      });
    }
  }, [C]), Z.useEffect(() => {
    J.length <= 1 && pe(false);
  }, [J]), Z.useEffect(() => {
    const H = (X) => {
      var P;
      if (m.every((te) => X[te] || X.code === te)) {
        var K;
        pe(true), (K = le.current) == null || K.focus();
      }
      X.code === "Escape" && (document.activeElement === le.current || (P = le.current) != null && P.contains(document.activeElement)) && pe(false);
    };
    return document.addEventListener("keydown", H), () => document.removeEventListener("keydown", H);
  }, [m]), Z.useEffect(() => {
    if (le.current) return () => {
      Ee.current && (Ee.current.focus({ preventScroll: true }), Ee.current = null, R.current = false);
    };
  }, [le.current]), Z.createElement("section", { ref: r, "aria-label": `${$} ${ne}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: true }, ye.map((H, X) => {
    var P;
    const [F, K] = H.split("-");
    return ae.length ? Z.createElement("ol", { key: H, dir: O === "auto" ? oh() : O, tabIndex: -1, ref: le, className: g, "data-sonner-toaster": true, "data-sonner-theme": I, "data-y-position": F, "data-x-position": K, style: { "--front-toast-height": `${((P = me[0]) == null ? void 0 : P.height) || 0}px`, "--width": `${rx}px`, "--gap": `${j}px`, ...x, ...dx(b, v) }, onBlur: (te) => {
      R.current && !te.currentTarget.contains(te.relatedTarget) && (R.current = false, Ee.current && (Ee.current.focus({ preventScroll: true }), Ee.current = null));
    }, onFocus: (te) => {
      te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || R.current || (R.current = true, Ee.current = te.relatedTarget);
    }, onMouseEnter: () => pe(true), onMouseMove: () => pe(true), onMouseLeave: () => {
      be || pe(false);
    }, onDragEnd: () => pe(false), onPointerDown: (te) => {
      te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || Se(true);
    }, onPointerUp: () => Se(false) }, ae.filter((te) => !te.position && X === 0 || te.position === H).map((te, ie) => {
      var Ce, De;
      return Z.createElement(fx, { key: te.id, icons: Y, index: ie, toast: te, defaultRichColors: w, duration: (Ce = M == null ? void 0 : M.duration) != null ? Ce : N, className: M == null ? void 0 : M.className, descriptionClassName: M == null ? void 0 : M.descriptionClassName, invert: s, visibleToasts: T, closeButton: (De = M == null ? void 0 : M.closeButton) != null ? De : y, interacting: be, position: H, style: M == null ? void 0 : M.style, unstyled: M == null ? void 0 : M.unstyled, classNames: M == null ? void 0 : M.classNames, cancelButtonStyle: M == null ? void 0 : M.cancelButtonStyle, actionButtonStyle: M == null ? void 0 : M.actionButtonStyle, closeButtonAriaLabel: M == null ? void 0 : M.closeButtonAriaLabel, removeToast: A, toasts: ae.filter((ze) => ze.position == te.position), heights: me.filter((ze) => ze.position == te.position), setHeights: ce, expandByDefault: h, gap: j, expanded: de, swipeDirections: i.swipeDirections });
    })) : null;
  }));
}), rh = (l) => {
  let i;
  const r = /* @__PURE__ */ new Set(), u = (g, b) => {
    const v = typeof g == "function" ? g(i) : g;
    if (!Object.is(v, i)) {
      const C = i;
      i = b ?? (typeof v != "object" || v === null) ? v : Object.assign({}, i, v), r.forEach((w) => w(i, C));
    }
  }, s = () => i, h = { setState: u, getState: s, getInitialState: () => y, subscribe: (g) => (r.add(g), () => r.delete(g)) }, y = i = l(u, s, h);
  return h;
}, px = ((l) => l ? rh(l) : rh), mx = (l) => l;
function vx(l, i = mx) {
  const r = Z.useSyncExternalStore(l.subscribe, Z.useCallback(() => i(l.getState()), [l, i]), Z.useCallback(() => i(l.getInitialState()), [l, i]));
  return Z.useDebugValue(r), r;
}
const hx = (l) => {
  const i = px(l), r = (u) => vx(i, u);
  return Object.assign(r, i), r;
}, NM = ((l) => hx);
function gx(l, i) {
  let r;
  try {
    r = l();
  } catch {
    return;
  }
  return { getItem: (s) => {
    var f;
    const m = (y) => y === null ? null : JSON.parse(y, void 0), h = (f = r.getItem(s)) != null ? f : null;
    return h instanceof Promise ? h.then(m) : m(h);
  }, setItem: (s, f) => r.setItem(s, JSON.stringify(f, void 0)), removeItem: (s) => r.removeItem(s) };
}
const Fs = (l) => (i) => {
  try {
    const r = l(i);
    return r instanceof Promise ? r : { then(u) {
      return Fs(u)(r);
    }, catch(u) {
      return this;
    } };
  } catch (r) {
    return { then(u) {
      return this;
    }, catch(u) {
      return Fs(u)(r);
    } };
  }
}, yx = (l, i) => (r, u, s) => {
  let f = { storage: gx(() => window.localStorage), partialize: (T) => T, version: 0, merge: (T, M) => ({ ...M, ...T }), ...i }, m = false, h = 0;
  const y = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
  let b = f.storage;
  if (!b) return l((...T) => {
    console.warn(`[zustand persist middleware] Unable to update item '${f.name}', the given storage is currently unavailable.`), r(...T);
  }, u, s);
  const v = () => {
    const T = f.partialize({ ...u() });
    return b.setItem(f.name, { state: T, version: f.version });
  }, C = s.setState;
  s.setState = (T, M) => (C(T, M), v());
  const w = l((...T) => (r(...T), v()), u, s);
  s.getInitialState = () => w;
  let N;
  const x = () => {
    var T, M;
    if (!b) return;
    const O = ++h;
    m = false, y.forEach((Y) => {
      var $;
      return Y(($ = u()) != null ? $ : w);
    });
    const j = ((M = f.onRehydrateStorage) == null ? void 0 : M.call(f, (T = u()) != null ? T : w)) || void 0;
    return Fs(b.getItem.bind(b))(f.name).then((Y) => {
      if (Y) if (typeof Y.version == "number" && Y.version !== f.version) {
        if (f.migrate) {
          const $ = f.migrate(Y.state, Y.version);
          return $ instanceof Promise ? $.then((J) => [true, J]) : [true, $];
        }
        console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
      } else return [false, Y.state];
      return [false, void 0];
    }).then((Y) => {
      var $;
      if (O !== h) return;
      const [J, V] = Y;
      if (N = f.merge(V, ($ = u()) != null ? $ : w), r(N, true), J) return v();
    }).then(() => {
      O === h && (j == null ? void 0 : j(N, void 0), N = u(), m = true, g.forEach((Y) => Y(N)));
    }).catch((Y) => {
      O === h && (j == null ? void 0 : j(void 0, Y));
    });
  };
  return s.persist = { setOptions: (T) => {
    f = { ...f, ...T }, T.storage && (b = T.storage);
  }, clearStorage: () => {
    b == null ? void 0 : b.removeItem(f.name);
  }, getOptions: () => f, rehydrate: () => x(), hasHydrated: () => m, onHydrate: (T) => (y.add(T), () => {
    y.delete(T);
  }), onFinishHydration: (T) => (g.add(T), () => {
    g.delete(T);
  }) }, f.skipHydration || x(), N || w;
}, OM = yx;
function ih(l, i) {
  if (typeof l == "function") return l(i);
  l != null && (l.current = i);
}
function Sn(...l) {
  return (i) => {
    let r = false;
    const u = l.map((s) => {
      const f = ih(s, i);
      return !r && typeof f == "function" && (r = true), f;
    });
    if (r) return () => {
      for (let s = 0; s < u.length; s++) {
        const f = u[s];
        typeof f == "function" ? f() : ih(l[s], null);
      }
    };
  };
}
function he(...l) {
  return d.useCallback(Sn(...l), l);
}
var bx = /* @__PURE__ */ Symbol.for("react.lazy"), Li = Sf[" use ".trim().toString()];
function Sx(l) {
  return typeof l == "object" && l !== null && "then" in l;
}
function Oh(l) {
  return l != null && typeof l == "object" && "$$typeof" in l && l.$$typeof === bx && "_payload" in l && Sx(l._payload);
}
function zh(l) {
  const i = Ex(l), r = d.forwardRef((u, s) => {
    let { children: f, ...m } = u;
    Oh(f) && typeof Li == "function" && (f = Li(f._payload));
    const h = d.Children.toArray(f), y = h.find(Cx);
    if (y) {
      const g = y.props.children, b = h.map((v) => v === y ? d.Children.count(g) > 1 ? d.Children.only(null) : d.isValidElement(g) ? g.props.children : null : v);
      return E.jsx(i, { ...m, ref: s, children: d.isValidElement(g) ? d.cloneElement(g, void 0, b) : null });
    }
    return E.jsx(i, { ...m, ref: s, children: f });
  });
  return r.displayName = `${l}.Slot`, r;
}
var zM = zh("Slot");
function Ex(l) {
  const i = d.forwardRef((r, u) => {
    let { children: s, ...f } = r;
    if (Oh(s) && typeof Li == "function" && (s = Li(s._payload)), d.isValidElement(s)) {
      const m = _x(s), h = Tx(f, s.props);
      return s.type !== d.Fragment && (h.ref = u ? Sn(u, m) : m), d.cloneElement(s, h);
    }
    return d.Children.count(s) > 1 ? d.Children.only(null) : null;
  });
  return i.displayName = `${l}.SlotClone`, i;
}
var xx = /* @__PURE__ */ Symbol("radix.slottable");
function Cx(l) {
  return d.isValidElement(l) && typeof l.type == "function" && "__radixId" in l.type && l.type.__radixId === xx;
}
function Tx(l, i) {
  const r = { ...i };
  for (const u in i) {
    const s = l[u], f = i[u];
    /^on[A-Z]/.test(u) ? s && f ? r[u] = (...h) => {
      const y = f(...h);
      return s(...h), y;
    } : s && (r[u] = s) : u === "style" ? r[u] = { ...s, ...f } : u === "className" && (r[u] = [s, f].filter(Boolean).join(" "));
  }
  return { ...l, ...r };
}
function _x(l) {
  var _a2, _b2;
  let i = (_a2 = Object.getOwnPropertyDescriptor(l.props, "ref")) == null ? void 0 : _a2.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? l.ref : (i = (_b2 = Object.getOwnPropertyDescriptor(l, "ref")) == null ? void 0 : _b2.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? l.props.ref : l.props.ref || l.ref);
}
var Rx = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], Vn = Rx.reduce((l, i) => {
  const r = zh(`Primitive.${i}`), u = d.forwardRef((s, f) => {
    const { asChild: m, ...h } = s, y = m ? r : i;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), E.jsx(y, { ...h, ref: f });
  });
  return u.displayName = `Primitive.${i}`, { ...l, [i]: u };
}, {}), Ax = "Label", jh = d.forwardRef((l, i) => E.jsx(Vn.label, { ...l, ref: i, onMouseDown: (r) => {
  var _a2;
  r.target.closest("button, input, select, textarea") || ((_a2 = l.onMouseDown) == null ? void 0 : _a2.call(l, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
} }));
jh.displayName = Ax;
var jM = jh;
function Mx(l, i) {
  const r = d.createContext(i), u = (f) => {
    const { children: m, ...h } = f, y = d.useMemo(() => h, Object.values(h));
    return E.jsx(r.Provider, { value: y, children: m });
  };
  u.displayName = l + "Provider";
  function s(f) {
    const m = d.useContext(r);
    if (m) return m;
    if (i !== void 0) return i;
    throw new Error(`\`${f}\` must be used within \`${l}\``);
  }
  return [u, s];
}
function pt(l, i = []) {
  let r = [];
  function u(f, m) {
    const h = d.createContext(m), y = r.length;
    r = [...r, m];
    const g = (v) => {
      var _a2;
      const { scope: C, children: w, ...N } = v, x = ((_a2 = C == null ? void 0 : C[l]) == null ? void 0 : _a2[y]) || h, T = d.useMemo(() => N, Object.values(N));
      return E.jsx(x.Provider, { value: T, children: w });
    };
    g.displayName = f + "Provider";
    function b(v, C) {
      var _a2;
      const w = ((_a2 = C == null ? void 0 : C[l]) == null ? void 0 : _a2[y]) || h, N = d.useContext(w);
      if (N) return N;
      if (m !== void 0) return m;
      throw new Error(`\`${v}\` must be used within \`${f}\``);
    }
    return [g, b];
  }
  const s = () => {
    const f = r.map((m) => d.createContext(m));
    return function(h) {
      const y = (h == null ? void 0 : h[l]) || f;
      return d.useMemo(() => ({ [`__scope${l}`]: { ...h, [l]: y } }), [h, y]);
    };
  };
  return s.scopeName = l, [u, wx(s, ...i)];
}
function wx(...l) {
  const i = l[0];
  if (l.length === 1) return i;
  const r = () => {
    const u = l.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function(f) {
      const m = u.reduce((h, { useScope: y, scopeName: g }) => {
        const v = y(f)[`__scope${g}`];
        return { ...h, ...v };
      }, {});
      return d.useMemo(() => ({ [`__scope${i.scopeName}`]: m }), [m]);
    };
  };
  return r.scopeName = i.scopeName, r;
}
var dt = (globalThis == null ? void 0 : globalThis.document) ? d.useLayoutEffect : () => {
}, Dx = Sf[" useId ".trim().toString()] || (() => {
}), Nx = 0;
function Xe(l) {
  const [i, r] = d.useState(Dx());
  return dt(() => {
    r((u) => u ?? String(Nx++));
  }, [l]), l || (i ? `radix-${i}` : "");
}
var Ox = Sf[" useInsertionEffect ".trim().toString()] || dt;
function xt({ prop: l, defaultProp: i, onChange: r = () => {
}, caller: u }) {
  const [s, f, m] = zx({ defaultProp: i, onChange: r }), h = l !== void 0, y = h ? l : s;
  {
    const b = d.useRef(l !== void 0);
    d.useEffect(() => {
      const v = b.current;
      v !== h && console.warn(`${u} is changing from ${v ? "controlled" : "uncontrolled"} to ${h ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), b.current = h;
    }, [h, u]);
  }
  const g = d.useCallback((b) => {
    var _a2;
    if (h) {
      const v = jx(b) ? b(l) : b;
      v !== l && ((_a2 = m.current) == null ? void 0 : _a2.call(m, v));
    } else f(b);
  }, [h, l, f, m]);
  return [y, g];
}
function zx({ defaultProp: l, onChange: i }) {
  const [r, u] = d.useState(l), s = d.useRef(r), f = d.useRef(i);
  return Ox(() => {
    f.current = i;
  }, [i]), d.useEffect(() => {
    var _a2;
    s.current !== r && ((_a2 = f.current) == null ? void 0 : _a2.call(f, r), s.current = r);
  }, [r, s]), [r, u, f];
}
function jx(l) {
  return typeof l == "function";
}
function Qa(l) {
  const i = Ux(l), r = d.forwardRef((u, s) => {
    const { children: f, ...m } = u, h = d.Children.toArray(f), y = h.find(Bx);
    if (y) {
      const g = y.props.children, b = h.map((v) => v === y ? d.Children.count(g) > 1 ? d.Children.only(null) : d.isValidElement(g) ? g.props.children : null : v);
      return E.jsx(i, { ...m, ref: s, children: d.isValidElement(g) ? d.cloneElement(g, void 0, b) : null });
    }
    return E.jsx(i, { ...m, ref: s, children: f });
  });
  return r.displayName = `${l}.Slot`, r;
}
function Ux(l) {
  const i = d.forwardRef((r, u) => {
    const { children: s, ...f } = r;
    if (d.isValidElement(s)) {
      const m = Lx(s), h = Hx(f, s.props);
      return s.type !== d.Fragment && (h.ref = u ? Sn(u, m) : m), d.cloneElement(s, h);
    }
    return d.Children.count(s) > 1 ? d.Children.only(null) : null;
  });
  return i.displayName = `${l}.SlotClone`, i;
}
var Uh = /* @__PURE__ */ Symbol("radix.slottable");
function Bh(l) {
  const i = ({ children: r }) => E.jsx(E.Fragment, { children: r });
  return i.displayName = `${l}.Slottable`, i.__radixId = Uh, i;
}
function Bx(l) {
  return d.isValidElement(l) && typeof l.type == "function" && "__radixId" in l.type && l.type.__radixId === Uh;
}
function Hx(l, i) {
  const r = { ...i };
  for (const u in i) {
    const s = l[u], f = i[u];
    /^on[A-Z]/.test(u) ? s && f ? r[u] = (...h) => {
      const y = f(...h);
      return s(...h), y;
    } : s && (r[u] = s) : u === "style" ? r[u] = { ...s, ...f } : u === "className" && (r[u] = [s, f].filter(Boolean).join(" "));
  }
  return { ...l, ...r };
}
function Lx(l) {
  var _a2, _b2;
  let i = (_a2 = Object.getOwnPropertyDescriptor(l.props, "ref")) == null ? void 0 : _a2.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? l.ref : (i = (_b2 = Object.getOwnPropertyDescriptor(l, "ref")) == null ? void 0 : _b2.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? l.props.ref : l.props.ref || l.ref);
}
var Gx = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], ue = Gx.reduce((l, i) => {
  const r = Qa(`Primitive.${i}`), u = d.forwardRef((s, f) => {
    const { asChild: m, ...h } = s, y = m ? r : i;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), E.jsx(y, { ...h, ref: f });
  });
  return u.displayName = `Primitive.${i}`, { ...l, [i]: u };
}, {});
function Hh(l, i) {
  l && lr.flushSync(() => l.dispatchEvent(i));
}
function cn(l) {
  const i = d.useRef(l);
  return d.useEffect(() => {
    i.current = l;
  }), d.useMemo(() => (...r) => {
    var _a2;
    return (_a2 = i.current) == null ? void 0 : _a2.call(i, ...r);
  }, []);
}
function Yx(l, i = globalThis == null ? void 0 : globalThis.document) {
  const r = cn(l);
  d.useEffect(() => {
    const u = (s) => {
      s.key === "Escape" && r(s);
    };
    return i.addEventListener("keydown", u, { capture: true }), () => i.removeEventListener("keydown", u, { capture: true });
  }, [r, i]);
}
var Vx = "DismissableLayer", Ws = "dismissableLayer.update", Ix = "dismissableLayer.pointerDownOutside", qx = "dismissableLayer.focusOutside", uh, Lh = d.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), $l = d.forwardRef((l, i) => {
  const { disableOutsidePointerEvents: r = false, onEscapeKeyDown: u, onPointerDownOutside: s, onFocusOutside: f, onInteractOutside: m, onDismiss: h, ...y } = l, g = d.useContext(Lh), [b, v] = d.useState(null), C = (b == null ? void 0 : b.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = d.useState({}), N = he(i, (V) => v(V)), x = Array.from(g.layers), [T] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), M = x.indexOf(T), O = b ? x.indexOf(b) : -1, j = g.layersWithOutsidePointerEventsDisabled.size > 0, Y = O >= M, $ = Px((V) => {
    const ae = V.target, ye = [...g.branches].some((me) => me.contains(ae));
    !Y || ye || (s == null ? void 0 : s(V), m == null ? void 0 : m(V), V.defaultPrevented || (h == null ? void 0 : h()));
  }, C), J = kx((V) => {
    const ae = V.target;
    [...g.branches].some((me) => me.contains(ae)) || (f == null ? void 0 : f(V), m == null ? void 0 : m(V), V.defaultPrevented || (h == null ? void 0 : h()));
  }, C);
  return Yx((V) => {
    O === g.layers.size - 1 && (u == null ? void 0 : u(V), !V.defaultPrevented && h && (V.preventDefault(), h()));
  }, C), d.useEffect(() => {
    if (b) return r && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (uh = C.body.style.pointerEvents, C.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(b)), g.layers.add(b), ch(), () => {
      r && g.layersWithOutsidePointerEventsDisabled.size === 1 && (C.body.style.pointerEvents = uh);
    };
  }, [b, C, r, g]), d.useEffect(() => () => {
    b && (g.layers.delete(b), g.layersWithOutsidePointerEventsDisabled.delete(b), ch());
  }, [b, g]), d.useEffect(() => {
    const V = () => w({});
    return document.addEventListener(Ws, V), () => document.removeEventListener(Ws, V);
  }, []), E.jsx(ue.div, { ...y, ref: N, style: { pointerEvents: j ? Y ? "auto" : "none" : void 0, ...l.style }, onFocusCapture: W(l.onFocusCapture, J.onFocusCapture), onBlurCapture: W(l.onBlurCapture, J.onBlurCapture), onPointerDownCapture: W(l.onPointerDownCapture, $.onPointerDownCapture) });
});
$l.displayName = Vx;
var Kx = "DismissableLayerBranch", Xx = d.forwardRef((l, i) => {
  const r = d.useContext(Lh), u = d.useRef(null), s = he(i, u);
  return d.useEffect(() => {
    const f = u.current;
    if (f) return r.branches.add(f), () => {
      r.branches.delete(f);
    };
  }, [r.branches]), E.jsx(ue.div, { ...l, ref: s });
});
Xx.displayName = Kx;
function Px(l, i = globalThis == null ? void 0 : globalThis.document) {
  const r = cn(l), u = d.useRef(false), s = d.useRef(() => {
  });
  return d.useEffect(() => {
    const f = (h) => {
      if (h.target && !u.current) {
        let y = function() {
          Gh(Ix, r, g, { discrete: true });
        };
        const g = { originalEvent: h };
        h.pointerType === "touch" ? (i.removeEventListener("click", s.current), s.current = y, i.addEventListener("click", s.current, { once: true })) : y();
      } else i.removeEventListener("click", s.current);
      u.current = false;
    }, m = window.setTimeout(() => {
      i.addEventListener("pointerdown", f);
    }, 0);
    return () => {
      window.clearTimeout(m), i.removeEventListener("pointerdown", f), i.removeEventListener("click", s.current);
    };
  }, [i, r]), { onPointerDownCapture: () => u.current = true };
}
function kx(l, i = globalThis == null ? void 0 : globalThis.document) {
  const r = cn(l), u = d.useRef(false);
  return d.useEffect(() => {
    const s = (f) => {
      f.target && !u.current && Gh(qx, r, { originalEvent: f }, { discrete: false });
    };
    return i.addEventListener("focusin", s), () => i.removeEventListener("focusin", s);
  }, [i, r]), { onFocusCapture: () => u.current = true, onBlurCapture: () => u.current = false };
}
function ch() {
  const l = new CustomEvent(Ws);
  document.dispatchEvent(l);
}
function Gh(l, i, r, { discrete: u }) {
  const s = r.originalEvent.target, f = new CustomEvent(l, { bubbles: false, cancelable: true, detail: r });
  i && s.addEventListener(l, i, { once: true }), u ? Hh(s, f) : s.dispatchEvent(f);
}
var Gs = "focusScope.autoFocusOnMount", Ys = "focusScope.autoFocusOnUnmount", sh = { bubbles: false, cancelable: true }, Qx = "FocusScope", or = d.forwardRef((l, i) => {
  const { loop: r = false, trapped: u = false, onMountAutoFocus: s, onUnmountAutoFocus: f, ...m } = l, [h, y] = d.useState(null), g = cn(s), b = cn(f), v = d.useRef(null), C = he(i, (x) => y(x)), w = d.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  d.useEffect(() => {
    if (u) {
      let x = function(j) {
        if (w.paused || !h) return;
        const Y = j.target;
        h.contains(Y) ? v.current = Y : ha(v.current, { select: true });
      }, T = function(j) {
        if (w.paused || !h) return;
        const Y = j.relatedTarget;
        Y !== null && (h.contains(Y) || ha(v.current, { select: true }));
      }, M = function(j) {
        if (document.activeElement === document.body) for (const $ of j) $.removedNodes.length > 0 && ha(h);
      };
      document.addEventListener("focusin", x), document.addEventListener("focusout", T);
      const O = new MutationObserver(M);
      return h && O.observe(h, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", x), document.removeEventListener("focusout", T), O.disconnect();
      };
    }
  }, [u, h, w.paused]), d.useEffect(() => {
    if (h) {
      dh.add(w);
      const x = document.activeElement;
      if (!h.contains(x)) {
        const M = new CustomEvent(Gs, sh);
        h.addEventListener(Gs, g), h.dispatchEvent(M), M.defaultPrevented || (Zx(eC(Yh(h)), { select: true }), document.activeElement === x && ha(h));
      }
      return () => {
        h.removeEventListener(Gs, g), setTimeout(() => {
          const M = new CustomEvent(Ys, sh);
          h.addEventListener(Ys, b), h.dispatchEvent(M), M.defaultPrevented || ha(x ?? document.body, { select: true }), h.removeEventListener(Ys, b), dh.remove(w);
        }, 0);
      };
    }
  }, [h, g, b, w]);
  const N = d.useCallback((x) => {
    if (!r && !u || w.paused) return;
    const T = x.key === "Tab" && !x.altKey && !x.ctrlKey && !x.metaKey, M = document.activeElement;
    if (T && M) {
      const O = x.currentTarget, [j, Y] = $x(O);
      j && Y ? !x.shiftKey && M === Y ? (x.preventDefault(), r && ha(j, { select: true })) : x.shiftKey && M === j && (x.preventDefault(), r && ha(Y, { select: true })) : M === O && x.preventDefault();
    }
  }, [r, u, w.paused]);
  return E.jsx(ue.div, { tabIndex: -1, ...m, ref: C, onKeyDown: N });
});
or.displayName = Qx;
function Zx(l, { select: i = false } = {}) {
  const r = document.activeElement;
  for (const u of l) if (ha(u, { select: i }), document.activeElement !== r) return;
}
function $x(l) {
  const i = Yh(l), r = fh(i, l), u = fh(i.reverse(), l);
  return [r, u];
}
function Yh(l) {
  const i = [], r = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, { acceptNode: (u) => {
    const s = u.tagName === "INPUT" && u.type === "hidden";
    return u.disabled || u.hidden || s ? NodeFilter.FILTER_SKIP : u.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; r.nextNode(); ) i.push(r.currentNode);
  return i;
}
function fh(l, i) {
  for (const r of l) if (!Jx(r, { upTo: i })) return r;
}
function Jx(l, { upTo: i }) {
  if (getComputedStyle(l).visibility === "hidden") return true;
  for (; l; ) {
    if (i !== void 0 && l === i) return false;
    if (getComputedStyle(l).display === "none") return true;
    l = l.parentElement;
  }
  return false;
}
function Fx(l) {
  return l instanceof HTMLInputElement && "select" in l;
}
function ha(l, { select: i = false } = {}) {
  if (l && l.focus) {
    const r = document.activeElement;
    l.focus({ preventScroll: true }), l !== r && Fx(l) && i && l.select();
  }
}
var dh = Wx();
function Wx() {
  let l = [];
  return { add(i) {
    const r = l[0];
    i !== r && (r == null ? void 0 : r.pause()), l = ph(l, i), l.unshift(i);
  }, remove(i) {
    var _a2;
    l = ph(l, i), (_a2 = l[0]) == null ? void 0 : _a2.resume();
  } };
}
function ph(l, i) {
  const r = [...l], u = r.indexOf(i);
  return u !== -1 && r.splice(u, 1), r;
}
function eC(l) {
  return l.filter((i) => i.tagName !== "A");
}
var tC = "Portal", rr = d.forwardRef((l, i) => {
  var _a2;
  const { container: r, ...u } = l, [s, f] = d.useState(false);
  dt(() => f(true), []);
  const m = r || s && ((_a2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a2.body);
  return m ? Nh.createPortal(E.jsx(ue.div, { ...u, ref: i }), m) : null;
});
rr.displayName = tC;
function nC(l, i) {
  return d.useReducer((r, u) => i[r][u] ?? r, l);
}
var Ut = (l) => {
  const { present: i, children: r } = l, u = aC(i), s = typeof r == "function" ? r({ present: u.isPresent }) : d.Children.only(r), f = he(u.ref, lC(s));
  return typeof r == "function" || u.isPresent ? d.cloneElement(s, { ref: f }) : null;
};
Ut.displayName = "Presence";
function aC(l) {
  const [i, r] = d.useState(), u = d.useRef(null), s = d.useRef(l), f = d.useRef("none"), m = l ? "mounted" : "unmounted", [h, y] = nC(m, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return d.useEffect(() => {
    const g = Ni(u.current);
    f.current = h === "mounted" ? g : "none";
  }, [h]), dt(() => {
    const g = u.current, b = s.current;
    if (b !== l) {
      const C = f.current, w = Ni(g);
      l ? y("MOUNT") : w === "none" || (g == null ? void 0 : g.display) === "none" ? y("UNMOUNT") : y(b && C !== w ? "ANIMATION_OUT" : "UNMOUNT"), s.current = l;
    }
  }, [l, y]), dt(() => {
    if (i) {
      let g;
      const b = i.ownerDocument.defaultView ?? window, v = (w) => {
        const x = Ni(u.current).includes(CSS.escape(w.animationName));
        if (w.target === i && x && (y("ANIMATION_END"), !s.current)) {
          const T = i.style.animationFillMode;
          i.style.animationFillMode = "forwards", g = b.setTimeout(() => {
            i.style.animationFillMode === "forwards" && (i.style.animationFillMode = T);
          });
        }
      }, C = (w) => {
        w.target === i && (f.current = Ni(u.current));
      };
      return i.addEventListener("animationstart", C), i.addEventListener("animationcancel", v), i.addEventListener("animationend", v), () => {
        b.clearTimeout(g), i.removeEventListener("animationstart", C), i.removeEventListener("animationcancel", v), i.removeEventListener("animationend", v);
      };
    } else y("ANIMATION_END");
  }, [i, y]), { isPresent: ["mounted", "unmountSuspended"].includes(h), ref: d.useCallback((g) => {
    u.current = g ? getComputedStyle(g) : null, r(g);
  }, []) };
}
function Ni(l) {
  return (l == null ? void 0 : l.animationName) || "none";
}
function lC(l) {
  var _a2, _b2;
  let i = (_a2 = Object.getOwnPropertyDescriptor(l.props, "ref")) == null ? void 0 : _a2.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? l.ref : (i = (_b2 = Object.getOwnPropertyDescriptor(l, "ref")) == null ? void 0 : _b2.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? l.props.ref : l.props.ref || l.ref);
}
var Vs = 0;
function Qi() {
  d.useEffect(() => {
    const l = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", l[0] ?? mh()), document.body.insertAdjacentElement("beforeend", l[1] ?? mh()), Vs++, () => {
      Vs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((i) => i.remove()), Vs--;
    };
  }, []);
}
function mh() {
  const l = document.createElement("span");
  return l.setAttribute("data-radix-focus-guard", ""), l.tabIndex = 0, l.style.outline = "none", l.style.opacity = "0", l.style.position = "fixed", l.style.pointerEvents = "none", l;
}
var ji = "right-scroll-bar-position", Ui = "width-before-scroll-bar", oC = "with-scroll-bars-hidden", rC = "--removed-body-scroll-bar-size";
function Is(l, i) {
  return typeof l == "function" ? l(i) : l && (l.current = i), l;
}
function iC(l, i) {
  var r = d.useState(function() {
    return { value: l, callback: i, facade: { get current() {
      return r.value;
    }, set current(u) {
      var s = r.value;
      s !== u && (r.value = u, r.callback(u, s));
    } } };
  })[0];
  return r.callback = i, r.facade;
}
var uC = typeof window < "u" ? d.useLayoutEffect : d.useEffect, vh = /* @__PURE__ */ new WeakMap();
function cC(l, i) {
  var r = iC(null, function(u) {
    return l.forEach(function(s) {
      return Is(s, u);
    });
  });
  return uC(function() {
    var u = vh.get(r);
    if (u) {
      var s = new Set(u), f = new Set(l), m = r.current;
      s.forEach(function(h) {
        f.has(h) || Is(h, null);
      }), f.forEach(function(h) {
        s.has(h) || Is(h, m);
      });
    }
    vh.set(r, l);
  }, [l]), r;
}
function sC(l) {
  return l;
}
function fC(l, i) {
  i === void 0 && (i = sC);
  var r = [], u = false, s = { read: function() {
    if (u) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return r.length ? r[r.length - 1] : l;
  }, useMedium: function(f) {
    var m = i(f, u);
    return r.push(m), function() {
      r = r.filter(function(h) {
        return h !== m;
      });
    };
  }, assignSyncMedium: function(f) {
    for (u = true; r.length; ) {
      var m = r;
      r = [], m.forEach(f);
    }
    r = { push: function(h) {
      return f(h);
    }, filter: function() {
      return r;
    } };
  }, assignMedium: function(f) {
    u = true;
    var m = [];
    if (r.length) {
      var h = r;
      r = [], h.forEach(f), m = r;
    }
    var y = function() {
      var b = m;
      m = [], b.forEach(f);
    }, g = function() {
      return Promise.resolve().then(y);
    };
    g(), r = { push: function(b) {
      m.push(b), g();
    }, filter: function(b) {
      return m = m.filter(b), r;
    } };
  } };
  return s;
}
function dC(l) {
  l === void 0 && (l = {});
  var i = fC(null);
  return i.options = ga({ async: true, ssr: false }, l), i;
}
var Vh = function(l) {
  var i = l.sideCar, r = wh(l, ["sideCar"]);
  if (!i) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var u = i.read();
  if (!u) throw new Error("Sidecar medium not found");
  return d.createElement(u, ga({}, r));
};
Vh.isSideCarExport = true;
function pC(l, i) {
  return l.useMedium(i), Vh;
}
var Ih = dC(), qs = function() {
}, Zi = d.forwardRef(function(l, i) {
  var r = d.useRef(null), u = d.useState({ onScrollCapture: qs, onWheelCapture: qs, onTouchMoveCapture: qs }), s = u[0], f = u[1], m = l.forwardProps, h = l.children, y = l.className, g = l.removeScrollBar, b = l.enabled, v = l.shards, C = l.sideCar, w = l.noRelative, N = l.noIsolation, x = l.inert, T = l.allowPinchZoom, M = l.as, O = M === void 0 ? "div" : M, j = l.gapMode, Y = wh(l, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), $ = C, J = cC([r, i]), V = ga(ga({}, Y), s);
  return d.createElement(d.Fragment, null, b && d.createElement($, { sideCar: Ih, removeScrollBar: g, shards: v, noRelative: w, noIsolation: N, inert: x, setCallbacks: f, allowPinchZoom: !!T, lockRef: r, gapMode: j }), m ? d.cloneElement(d.Children.only(h), ga(ga({}, V), { ref: J })) : d.createElement(O, ga({}, V, { className: y, ref: J }), h));
});
Zi.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
Zi.classNames = { fullWidth: Ui, zeroRight: ji };
function mC() {
  if (!document) return null;
  var l = document.createElement("style");
  l.type = "text/css";
  var i = fE();
  return i && l.setAttribute("nonce", i), l;
}
function vC(l, i) {
  l.styleSheet ? l.styleSheet.cssText = i : l.appendChild(document.createTextNode(i));
}
function hC(l) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(l);
}
var gC = function() {
  var l = 0, i = null;
  return { add: function(r) {
    l == 0 && (i = mC()) && (vC(i, r), hC(i)), l++;
  }, remove: function() {
    l--, !l && i && (i.parentNode && i.parentNode.removeChild(i), i = null);
  } };
}, yC = function() {
  var l = gC();
  return function(i, r) {
    d.useEffect(function() {
      return l.add(i), function() {
        l.remove();
      };
    }, [i && r]);
  };
}, qh = function() {
  var l = yC(), i = function(r) {
    var u = r.styles, s = r.dynamic;
    return l(u, s), null;
  };
  return i;
}, bC = { left: 0, top: 0, right: 0, gap: 0 }, Ks = function(l) {
  return parseInt(l || "", 10) || 0;
}, SC = function(l) {
  var i = window.getComputedStyle(document.body), r = i[l === "padding" ? "paddingLeft" : "marginLeft"], u = i[l === "padding" ? "paddingTop" : "marginTop"], s = i[l === "padding" ? "paddingRight" : "marginRight"];
  return [Ks(r), Ks(u), Ks(s)];
}, EC = function(l) {
  if (l === void 0 && (l = "margin"), typeof window > "u") return bC;
  var i = SC(l), r = document.documentElement.clientWidth, u = window.innerWidth;
  return { left: i[0], top: i[1], right: i[2], gap: Math.max(0, u - r + i[2] - i[0]) };
}, xC = qh(), Pl = "data-scroll-locked", CC = function(l, i, r, u) {
  var s = l.left, f = l.top, m = l.right, h = l.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(oC, ` {
   overflow: hidden `).concat(u, `;
   padding-right: `).concat(h, "px ").concat(u, `;
  }
  body[`).concat(Pl, `] {
    overflow: hidden `).concat(u, `;
    overscroll-behavior: contain;
    `).concat([i && "position: relative ".concat(u, ";"), r === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(m, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h, "px ").concat(u, `;
    `), r === "padding" && "padding-right: ".concat(h, "px ").concat(u, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(ji, ` {
    right: `).concat(h, "px ").concat(u, `;
  }
  
  .`).concat(Ui, ` {
    margin-right: `).concat(h, "px ").concat(u, `;
  }
  
  .`).concat(ji, " .").concat(ji, ` {
    right: 0 `).concat(u, `;
  }
  
  .`).concat(Ui, " .").concat(Ui, ` {
    margin-right: 0 `).concat(u, `;
  }
  
  body[`).concat(Pl, `] {
    `).concat(rC, ": ").concat(h, `px;
  }
`);
}, hh = function() {
  var l = parseInt(document.body.getAttribute(Pl) || "0", 10);
  return isFinite(l) ? l : 0;
}, TC = function() {
  d.useEffect(function() {
    return document.body.setAttribute(Pl, (hh() + 1).toString()), function() {
      var l = hh() - 1;
      l <= 0 ? document.body.removeAttribute(Pl) : document.body.setAttribute(Pl, l.toString());
    };
  }, []);
}, _C = function(l) {
  var i = l.noRelative, r = l.noImportant, u = l.gapMode, s = u === void 0 ? "margin" : u;
  TC();
  var f = d.useMemo(function() {
    return EC(s);
  }, [s]);
  return d.createElement(xC, { styles: CC(f, !i, s, r ? "" : "!important") });
}, ef = false;
if (typeof window < "u") try {
  var Oi = Object.defineProperty({}, "passive", { get: function() {
    return ef = true, true;
  } });
  window.addEventListener("test", Oi, Oi), window.removeEventListener("test", Oi, Oi);
} catch {
  ef = false;
}
var Il = ef ? { passive: false } : false, RC = function(l) {
  return l.tagName === "TEXTAREA";
}, Kh = function(l, i) {
  if (!(l instanceof Element)) return false;
  var r = window.getComputedStyle(l);
  return r[i] !== "hidden" && !(r.overflowY === r.overflowX && !RC(l) && r[i] === "visible");
}, AC = function(l) {
  return Kh(l, "overflowY");
}, MC = function(l) {
  return Kh(l, "overflowX");
}, gh = function(l, i) {
  var r = i.ownerDocument, u = i;
  do {
    typeof ShadowRoot < "u" && u instanceof ShadowRoot && (u = u.host);
    var s = Xh(l, u);
    if (s) {
      var f = Ph(l, u), m = f[1], h = f[2];
      if (m > h) return true;
    }
    u = u.parentNode;
  } while (u && u !== r.body);
  return false;
}, wC = function(l) {
  var i = l.scrollTop, r = l.scrollHeight, u = l.clientHeight;
  return [i, r, u];
}, DC = function(l) {
  var i = l.scrollLeft, r = l.scrollWidth, u = l.clientWidth;
  return [i, r, u];
}, Xh = function(l, i) {
  return l === "v" ? AC(i) : MC(i);
}, Ph = function(l, i) {
  return l === "v" ? wC(i) : DC(i);
}, NC = function(l, i) {
  return l === "h" && i === "rtl" ? -1 : 1;
}, OC = function(l, i, r, u, s) {
  var f = NC(l, window.getComputedStyle(i).direction), m = f * u, h = r.target, y = i.contains(h), g = false, b = m > 0, v = 0, C = 0;
  do {
    if (!h) break;
    var w = Ph(l, h), N = w[0], x = w[1], T = w[2], M = x - T - f * N;
    (N || M) && Xh(l, h) && (v += M, C += N);
    var O = h.parentNode;
    h = O && O.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? O.host : O;
  } while (!y && h !== document.body || y && (i.contains(h) || i === h));
  return (b && Math.abs(v) < 1 || !b && Math.abs(C) < 1) && (g = true), g;
}, zi = function(l) {
  return "changedTouches" in l ? [l.changedTouches[0].clientX, l.changedTouches[0].clientY] : [0, 0];
}, yh = function(l) {
  return [l.deltaX, l.deltaY];
}, bh = function(l) {
  return l && "current" in l ? l.current : l;
}, zC = function(l, i) {
  return l[0] === i[0] && l[1] === i[1];
}, jC = function(l) {
  return `
  .block-interactivity-`.concat(l, ` {pointer-events: none;}
  .allow-interactivity-`).concat(l, ` {pointer-events: all;}
`);
}, UC = 0, ql = [];
function BC(l) {
  var i = d.useRef([]), r = d.useRef([0, 0]), u = d.useRef(), s = d.useState(UC++)[0], f = d.useState(qh)[0], m = d.useRef(l);
  d.useEffect(function() {
    m.current = l;
  }, [l]), d.useEffect(function() {
    if (l.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var x = dE([l.lockRef.current], (l.shards || []).map(bh), true).filter(Boolean);
      return x.forEach(function(T) {
        return T.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), x.forEach(function(T) {
          return T.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [l.inert, l.lockRef.current, l.shards]);
  var h = d.useCallback(function(x, T) {
    if ("touches" in x && x.touches.length === 2 || x.type === "wheel" && x.ctrlKey) return !m.current.allowPinchZoom;
    var M = zi(x), O = r.current, j = "deltaX" in x ? x.deltaX : O[0] - M[0], Y = "deltaY" in x ? x.deltaY : O[1] - M[1], $, J = x.target, V = Math.abs(j) > Math.abs(Y) ? "h" : "v";
    if ("touches" in x && V === "h" && J.type === "range") return false;
    var ae = window.getSelection(), ye = ae && ae.anchorNode, me = ye ? ye === J || ye.contains(J) : false;
    if (me) return false;
    var ce = gh(V, J);
    if (!ce) return true;
    if (ce ? $ = V : ($ = V === "v" ? "h" : "v", ce = gh(V, J)), !ce) return false;
    if (!u.current && "changedTouches" in x && (j || Y) && (u.current = $), !$) return true;
    var de = u.current || $;
    return OC(de, T, x, de === "h" ? j : Y);
  }, []), y = d.useCallback(function(x) {
    var T = x;
    if (!(!ql.length || ql[ql.length - 1] !== f)) {
      var M = "deltaY" in T ? yh(T) : zi(T), O = i.current.filter(function($) {
        return $.name === T.type && ($.target === T.target || T.target === $.shadowParent) && zC($.delta, M);
      })[0];
      if (O && O.should) {
        T.cancelable && T.preventDefault();
        return;
      }
      if (!O) {
        var j = (m.current.shards || []).map(bh).filter(Boolean).filter(function($) {
          return $.contains(T.target);
        }), Y = j.length > 0 ? h(T, j[0]) : !m.current.noIsolation;
        Y && T.cancelable && T.preventDefault();
      }
    }
  }, []), g = d.useCallback(function(x, T, M, O) {
    var j = { name: x, delta: T, target: M, should: O, shadowParent: HC(M) };
    i.current.push(j), setTimeout(function() {
      i.current = i.current.filter(function(Y) {
        return Y !== j;
      });
    }, 1);
  }, []), b = d.useCallback(function(x) {
    r.current = zi(x), u.current = void 0;
  }, []), v = d.useCallback(function(x) {
    g(x.type, yh(x), x.target, h(x, l.lockRef.current));
  }, []), C = d.useCallback(function(x) {
    g(x.type, zi(x), x.target, h(x, l.lockRef.current));
  }, []);
  d.useEffect(function() {
    return ql.push(f), l.setCallbacks({ onScrollCapture: v, onWheelCapture: v, onTouchMoveCapture: C }), document.addEventListener("wheel", y, Il), document.addEventListener("touchmove", y, Il), document.addEventListener("touchstart", b, Il), function() {
      ql = ql.filter(function(x) {
        return x !== f;
      }), document.removeEventListener("wheel", y, Il), document.removeEventListener("touchmove", y, Il), document.removeEventListener("touchstart", b, Il);
    };
  }, []);
  var w = l.removeScrollBar, N = l.inert;
  return d.createElement(d.Fragment, null, N ? d.createElement(f, { styles: jC(s) }) : null, w ? d.createElement(_C, { noRelative: l.noRelative, gapMode: l.gapMode }) : null);
}
function HC(l) {
  for (var i = null; l !== null; ) l instanceof ShadowRoot && (i = l.host, l = l.host), l = l.parentNode;
  return i;
}
const LC = pC(Ih, BC);
var ir = d.forwardRef(function(l, i) {
  return d.createElement(Zi, ga({}, l, { ref: i, sideCar: LC }));
});
ir.classNames = Zi.classNames;
var $i = "Dialog", [kh, Qh] = pt($i), [GC, sn] = kh($i), Zh = (l) => {
  const { __scopeDialog: i, children: r, open: u, defaultOpen: s, onOpenChange: f, modal: m = true } = l, h = d.useRef(null), y = d.useRef(null), [g, b] = xt({ prop: u, defaultProp: s ?? false, onChange: f, caller: $i });
  return E.jsx(GC, { scope: i, triggerRef: h, contentRef: y, contentId: Xe(), titleId: Xe(), descriptionId: Xe(), open: g, onOpenChange: b, onOpenToggle: d.useCallback(() => b((v) => !v), [b]), modal: m, children: r });
};
Zh.displayName = $i;
var $h = "DialogTrigger", Jh = d.forwardRef((l, i) => {
  const { __scopeDialog: r, ...u } = l, s = sn($h, r), f = he(i, s.triggerRef);
  return E.jsx(ue.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": s.open, "aria-controls": s.contentId, "data-state": Cf(s.open), ...u, ref: f, onClick: W(l.onClick, s.onOpenToggle) });
});
Jh.displayName = $h;
var Ef = "DialogPortal", [YC, Fh] = kh(Ef, { forceMount: void 0 }), Wh = (l) => {
  const { __scopeDialog: i, forceMount: r, children: u, container: s } = l, f = sn(Ef, i);
  return E.jsx(YC, { scope: i, forceMount: r, children: d.Children.map(u, (m) => E.jsx(Ut, { present: r || f.open, children: E.jsx(rr, { asChild: true, container: s, children: m }) })) });
};
Wh.displayName = Ef;
var Gi = "DialogOverlay", eg = d.forwardRef((l, i) => {
  const r = Fh(Gi, l.__scopeDialog), { forceMount: u = r.forceMount, ...s } = l, f = sn(Gi, l.__scopeDialog);
  return f.modal ? E.jsx(Ut, { present: u || f.open, children: E.jsx(IC, { ...s, ref: i }) }) : null;
});
eg.displayName = Gi;
var VC = Qa("DialogOverlay.RemoveScroll"), IC = d.forwardRef((l, i) => {
  const { __scopeDialog: r, ...u } = l, s = sn(Gi, r);
  return E.jsx(ir, { as: VC, allowPinchZoom: true, shards: [s.contentRef], children: E.jsx(ue.div, { "data-state": Cf(s.open), ...u, ref: i, style: { pointerEvents: "auto", ...u.style } }) });
}), Za = "DialogContent", tg = d.forwardRef((l, i) => {
  const r = Fh(Za, l.__scopeDialog), { forceMount: u = r.forceMount, ...s } = l, f = sn(Za, l.__scopeDialog);
  return E.jsx(Ut, { present: u || f.open, children: f.modal ? E.jsx(qC, { ...s, ref: i }) : E.jsx(KC, { ...s, ref: i }) });
});
tg.displayName = Za;
var qC = d.forwardRef((l, i) => {
  const r = sn(Za, l.__scopeDialog), u = d.useRef(null), s = he(i, r.contentRef, u);
  return d.useEffect(() => {
    const f = u.current;
    if (f) return ki(f);
  }, []), E.jsx(ng, { ...l, ref: s, trapFocus: r.open, disableOutsidePointerEvents: true, onCloseAutoFocus: W(l.onCloseAutoFocus, (f) => {
    var _a2;
    f.preventDefault(), (_a2 = r.triggerRef.current) == null ? void 0 : _a2.focus();
  }), onPointerDownOutside: W(l.onPointerDownOutside, (f) => {
    const m = f.detail.originalEvent, h = m.button === 0 && m.ctrlKey === true;
    (m.button === 2 || h) && f.preventDefault();
  }), onFocusOutside: W(l.onFocusOutside, (f) => f.preventDefault()) });
}), KC = d.forwardRef((l, i) => {
  const r = sn(Za, l.__scopeDialog), u = d.useRef(false), s = d.useRef(false);
  return E.jsx(ng, { ...l, ref: i, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (f) => {
    var _a2, _b2;
    (_a2 = l.onCloseAutoFocus) == null ? void 0 : _a2.call(l, f), f.defaultPrevented || (u.current || ((_b2 = r.triggerRef.current) == null ? void 0 : _b2.focus()), f.preventDefault()), u.current = false, s.current = false;
  }, onInteractOutside: (f) => {
    var _a2, _b2;
    (_a2 = l.onInteractOutside) == null ? void 0 : _a2.call(l, f), f.defaultPrevented || (u.current = true, f.detail.originalEvent.type === "pointerdown" && (s.current = true));
    const m = f.target;
    ((_b2 = r.triggerRef.current) == null ? void 0 : _b2.contains(m)) && f.preventDefault(), f.detail.originalEvent.type === "focusin" && s.current && f.preventDefault();
  } });
}), ng = d.forwardRef((l, i) => {
  const { __scopeDialog: r, trapFocus: u, onOpenAutoFocus: s, onCloseAutoFocus: f, ...m } = l, h = sn(Za, r), y = d.useRef(null), g = he(i, y);
  return Qi(), E.jsxs(E.Fragment, { children: [E.jsx(or, { asChild: true, loop: true, trapped: u, onMountAutoFocus: s, onUnmountAutoFocus: f, children: E.jsx($l, { role: "dialog", id: h.contentId, "aria-describedby": h.descriptionId, "aria-labelledby": h.titleId, "data-state": Cf(h.open), ...m, ref: g, onDismiss: () => h.onOpenChange(false) }) }), E.jsxs(E.Fragment, { children: [E.jsx(PC, { titleId: h.titleId }), E.jsx(QC, { contentRef: y, descriptionId: h.descriptionId })] })] });
}), xf = "DialogTitle", ag = d.forwardRef((l, i) => {
  const { __scopeDialog: r, ...u } = l, s = sn(xf, r);
  return E.jsx(ue.h2, { id: s.titleId, ...u, ref: i });
});
ag.displayName = xf;
var lg = "DialogDescription", og = d.forwardRef((l, i) => {
  const { __scopeDialog: r, ...u } = l, s = sn(lg, r);
  return E.jsx(ue.p, { id: s.descriptionId, ...u, ref: i });
});
og.displayName = lg;
var rg = "DialogClose", ig = d.forwardRef((l, i) => {
  const { __scopeDialog: r, ...u } = l, s = sn(rg, r);
  return E.jsx(ue.button, { type: "button", ...u, ref: i, onClick: W(l.onClick, () => s.onOpenChange(false)) });
});
ig.displayName = rg;
function Cf(l) {
  return l ? "open" : "closed";
}
var ug = "DialogTitleWarning", [XC, cg] = Mx(ug, { contentName: Za, titleName: xf, docsSlug: "dialog" }), PC = ({ titleId: l }) => {
  const i = cg(ug), r = `\`${i.contentName}\` requires a \`${i.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${i.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${i.docsSlug}`;
  return d.useEffect(() => {
    l && (document.getElementById(l) || console.error(r));
  }, [r, l]), null;
}, kC = "DialogDescriptionWarning", QC = ({ contentRef: l, descriptionId: i }) => {
  const u = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${cg(kC).contentName}}.`;
  return d.useEffect(() => {
    var _a2;
    const s = (_a2 = l.current) == null ? void 0 : _a2.getAttribute("aria-describedby");
    i && s && (document.getElementById(i) || console.warn(u));
  }, [u, l, i]), null;
}, sg = Zh, ZC = Jh, fg = Wh, dg = eg, pg = tg, $C = ag, JC = og, mg = ig;
function Jl(l) {
  const i = l + "CollectionProvider", [r, u] = pt(i), [s, f] = r(i, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), m = (x) => {
    const { scope: T, children: M } = x, O = Z.useRef(null), j = Z.useRef(/* @__PURE__ */ new Map()).current;
    return E.jsx(s, { scope: T, itemMap: j, collectionRef: O, children: M });
  };
  m.displayName = i;
  const h = l + "CollectionSlot", y = Qa(h), g = Z.forwardRef((x, T) => {
    const { scope: M, children: O } = x, j = f(h, M), Y = he(T, j.collectionRef);
    return E.jsx(y, { ref: Y, children: O });
  });
  g.displayName = h;
  const b = l + "CollectionItemSlot", v = "data-radix-collection-item", C = Qa(b), w = Z.forwardRef((x, T) => {
    const { scope: M, children: O, ...j } = x, Y = Z.useRef(null), $ = he(T, Y), J = f(b, M);
    return Z.useEffect(() => (J.itemMap.set(Y, { ref: Y, ...j }), () => {
      J.itemMap.delete(Y);
    })), E.jsx(C, { [v]: "", ref: $, children: O });
  });
  w.displayName = b;
  function N(x) {
    const T = f(l + "CollectionConsumer", x);
    return Z.useCallback(() => {
      const O = T.collectionRef.current;
      if (!O) return [];
      const j = Array.from(O.querySelectorAll(`[${v}]`));
      return Array.from(T.itemMap.values()).sort((J, V) => j.indexOf(J.ref.current) - j.indexOf(V.ref.current));
    }, [T.collectionRef, T.itemMap]);
  }
  return [{ Provider: m, Slot: g, ItemSlot: w }, N, u];
}
var FC = d.createContext(void 0);
function Wa(l) {
  const i = d.useContext(FC);
  return l || i || "ltr";
}
var WC = typeof document < "u", eT = function() {
}, Bi = WC ? d.useLayoutEffect : eT;
function Yi(l, i) {
  if (l === i) return true;
  if (typeof l != typeof i) return false;
  if (typeof l == "function" && l.toString() === i.toString()) return true;
  let r, u, s;
  if (l && i && typeof l == "object") {
    if (Array.isArray(l)) {
      if (r = l.length, r !== i.length) return false;
      for (u = r; u-- !== 0; ) if (!Yi(l[u], i[u])) return false;
      return true;
    }
    if (s = Object.keys(l), r = s.length, r !== Object.keys(i).length) return false;
    for (u = r; u-- !== 0; ) if (!{}.hasOwnProperty.call(i, s[u])) return false;
    for (u = r; u-- !== 0; ) {
      const f = s[u];
      if (!(f === "_owner" && l.$$typeof) && !Yi(l[f], i[f])) return false;
    }
    return true;
  }
  return l !== l && i !== i;
}
function vg(l) {
  return typeof window > "u" ? 1 : (l.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Sh(l, i) {
  const r = vg(l);
  return Math.round(i * r) / r;
}
function Xs(l) {
  const i = d.useRef(l);
  return Bi(() => {
    i.current = l;
  }), i;
}
function tT(l) {
  l === void 0 && (l = {});
  const { placement: i = "bottom", strategy: r = "absolute", middleware: u = [], platform: s, elements: { reference: f, floating: m } = {}, transform: h = true, whileElementsMounted: y, open: g } = l, [b, v] = d.useState({ x: 0, y: 0, strategy: r, placement: i, middlewareData: {}, isPositioned: false }), [C, w] = d.useState(u);
  Yi(C, u) || w(u);
  const [N, x] = d.useState(null), [T, M] = d.useState(null), O = d.useCallback((le) => {
    le !== J.current && (J.current = le, x(le));
  }, []), j = d.useCallback((le) => {
    le !== V.current && (V.current = le, M(le));
  }, []), Y = f || N, $ = m || T, J = d.useRef(null), V = d.useRef(null), ae = d.useRef(b), ye = y != null, me = Xs(y), ce = Xs(s), de = Xs(g), pe = d.useCallback(() => {
    if (!J.current || !V.current) return;
    const le = { placement: i, strategy: r, middleware: C };
    ce.current && (le.platform = ce.current), pE(J.current, V.current, le).then((ne) => {
      const Ee = { ...ne, isPositioned: de.current !== false };
      be.current && !Yi(ae.current, Ee) && (ae.current = Ee, lr.flushSync(() => {
        v(Ee);
      }));
    });
  }, [C, i, r, ce, de]);
  Bi(() => {
    g === false && ae.current.isPositioned && (ae.current.isPositioned = false, v((le) => ({ ...le, isPositioned: false })));
  }, [g]);
  const be = d.useRef(false);
  Bi(() => (be.current = true, () => {
    be.current = false;
  }), []), Bi(() => {
    if (Y && (J.current = Y), $ && (V.current = $), Y && $) {
      if (me.current) return me.current(Y, $, pe);
      pe();
    }
  }, [Y, $, pe, me, ye]);
  const Se = d.useMemo(() => ({ reference: J, floating: V, setReference: O, setFloating: j }), [O, j]), I = d.useMemo(() => ({ reference: Y, floating: $ }), [Y, $]), ee = d.useMemo(() => {
    const le = { position: r, left: 0, top: 0 };
    if (!I.floating) return le;
    const ne = Sh(I.floating, b.x), Ee = Sh(I.floating, b.y);
    return h ? { ...le, transform: "translate(" + ne + "px, " + Ee + "px)", ...vg(I.floating) >= 1.5 && { willChange: "transform" } } : { position: r, left: ne, top: Ee };
  }, [r, h, I.floating, b.x, b.y]);
  return d.useMemo(() => ({ ...b, update: pe, refs: Se, elements: I, floatingStyles: ee }), [b, pe, Se, I, ee]);
}
const nT = (l) => {
  function i(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return { name: "arrow", options: l, fn(r) {
    const { element: u, padding: s } = typeof l == "function" ? l(r) : l;
    return u && i(u) ? u.current != null ? Kv({ element: u.current, padding: s }).fn(r) : {} : u ? Kv({ element: u, padding: s }).fn(r) : {};
  } };
}, aT = (l, i) => ({ ...mE(l), options: [l, i] }), lT = (l, i) => ({ ...vE(l), options: [l, i] }), oT = (l, i) => ({ ...bE(l), options: [l, i] }), rT = (l, i) => ({ ...hE(l), options: [l, i] }), iT = (l, i) => ({ ...gE(l), options: [l, i] }), uT = (l, i) => ({ ...yE(l), options: [l, i] }), cT = (l, i) => ({ ...nT(l), options: [l, i] });
var sT = "Arrow", hg = d.forwardRef((l, i) => {
  const { children: r, width: u = 10, height: s = 5, ...f } = l;
  return E.jsx(ue.svg, { ...f, ref: i, width: u, height: s, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: l.asChild ? r : E.jsx("polygon", { points: "0,0 30,0 15,10" }) });
});
hg.displayName = sT;
var fT = hg;
function Ji(l) {
  const [i, r] = d.useState(void 0);
  return dt(() => {
    if (l) {
      r({ width: l.offsetWidth, height: l.offsetHeight });
      const u = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length) return;
        const f = s[0];
        let m, h;
        if ("borderBoxSize" in f) {
          const y = f.borderBoxSize, g = Array.isArray(y) ? y[0] : y;
          m = g.inlineSize, h = g.blockSize;
        } else m = l.offsetWidth, h = l.offsetHeight;
        r({ width: m, height: h });
      });
      return u.observe(l, { box: "border-box" }), () => u.unobserve(l);
    } else r(void 0);
  }, [l]), i;
}
var Tf = "Popper", [gg, Ea] = pt(Tf), [dT, yg] = gg(Tf), bg = (l) => {
  const { __scopePopper: i, children: r } = l, [u, s] = d.useState(null);
  return E.jsx(dT, { scope: i, anchor: u, onAnchorChange: s, children: r });
};
bg.displayName = Tf;
var Sg = "PopperAnchor", Eg = d.forwardRef((l, i) => {
  const { __scopePopper: r, virtualRef: u, ...s } = l, f = yg(Sg, r), m = d.useRef(null), h = he(i, m), y = d.useRef(null);
  return d.useEffect(() => {
    const g = y.current;
    y.current = (u == null ? void 0 : u.current) || m.current, g !== y.current && f.onAnchorChange(y.current);
  }), u ? null : E.jsx(ue.div, { ...s, ref: h });
});
Eg.displayName = Sg;
var _f = "PopperContent", [pT, mT] = gg(_f), xg = d.forwardRef((l, i) => {
  var _a2, _b2, _c, _d, _e, _f2;
  const { __scopePopper: r, side: u = "bottom", sideOffset: s = 0, align: f = "center", alignOffset: m = 0, arrowPadding: h = 0, avoidCollisions: y = true, collisionBoundary: g = [], collisionPadding: b = 0, sticky: v = "partial", hideWhenDetached: C = false, updatePositionStrategy: w = "optimized", onPlaced: N, ...x } = l, T = yg(_f, r), [M, O] = d.useState(null), j = he(i, (K) => O(K)), [Y, $] = d.useState(null), J = Ji(Y), V = (J == null ? void 0 : J.width) ?? 0, ae = (J == null ? void 0 : J.height) ?? 0, ye = u + (f !== "center" ? "-" + f : ""), me = typeof b == "number" ? b : { top: 0, right: 0, bottom: 0, left: 0, ...b }, ce = Array.isArray(g) ? g : [g], de = ce.length > 0, pe = { padding: me, boundary: ce.filter(hT), altBoundary: de }, { refs: be, floatingStyles: Se, placement: I, isPositioned: ee, middlewareData: le } = tT({ strategy: "fixed", placement: ye, whileElementsMounted: (...K) => SE(...K, { animationFrame: w === "always" }), elements: { reference: T.anchor }, middleware: [aT({ mainAxis: s + ae, alignmentAxis: m }), y && lT({ mainAxis: true, crossAxis: false, limiter: v === "partial" ? oT() : void 0, ...pe }), y && rT({ ...pe }), iT({ ...pe, apply: ({ elements: K, rects: te, availableWidth: ie, availableHeight: Ce }) => {
    const { width: De, height: ze } = te.reference, rt = K.floating.style;
    rt.setProperty("--radix-popper-available-width", `${ie}px`), rt.setProperty("--radix-popper-available-height", `${Ce}px`), rt.setProperty("--radix-popper-anchor-width", `${De}px`), rt.setProperty("--radix-popper-anchor-height", `${ze}px`);
  } }), Y && cT({ element: Y, padding: h }), gT({ arrowWidth: V, arrowHeight: ae }), C && uT({ strategy: "referenceHidden", ...pe })] }), [ne, Ee] = _g(I), R = cn(N);
  dt(() => {
    ee && (R == null ? void 0 : R());
  }, [ee, R]);
  const A = (_a2 = le.arrow) == null ? void 0 : _a2.x, H = (_b2 = le.arrow) == null ? void 0 : _b2.y, X = ((_c = le.arrow) == null ? void 0 : _c.centerOffset) !== 0, [P, F] = d.useState();
  return dt(() => {
    M && F(window.getComputedStyle(M).zIndex);
  }, [M]), E.jsx("div", { ref: be.setFloating, "data-radix-popper-content-wrapper": "", style: { ...Se, transform: ee ? Se.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: P, "--radix-popper-transform-origin": [(_d = le.transformOrigin) == null ? void 0 : _d.x, (_e = le.transformOrigin) == null ? void 0 : _e.y].join(" "), ...((_f2 = le.hide) == null ? void 0 : _f2.referenceHidden) && { visibility: "hidden", pointerEvents: "none" } }, dir: l.dir, children: E.jsx(pT, { scope: r, placedSide: ne, onArrowChange: $, arrowX: A, arrowY: H, shouldHideArrow: X, children: E.jsx(ue.div, { "data-side": ne, "data-align": Ee, ...x, ref: j, style: { ...x.style, animation: ee ? void 0 : "none" } }) }) });
});
xg.displayName = _f;
var Cg = "PopperArrow", vT = { top: "bottom", right: "left", bottom: "top", left: "right" }, Tg = d.forwardRef(function(i, r) {
  const { __scopePopper: u, ...s } = i, f = mT(Cg, u), m = vT[f.placedSide];
  return E.jsx("span", { ref: f.onArrowChange, style: { position: "absolute", left: f.arrowX, top: f.arrowY, [m]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[f.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[f.placedSide], visibility: f.shouldHideArrow ? "hidden" : void 0 }, children: E.jsx(fT, { ...s, ref: r, style: { ...s.style, display: "block" } }) });
});
Tg.displayName = Cg;
function hT(l) {
  return l !== null;
}
var gT = (l) => ({ name: "transformOrigin", options: l, fn(i) {
  var _a2, _b2, _c;
  const { placement: r, rects: u, middlewareData: s } = i, m = ((_a2 = s.arrow) == null ? void 0 : _a2.centerOffset) !== 0, h = m ? 0 : l.arrowWidth, y = m ? 0 : l.arrowHeight, [g, b] = _g(r), v = { start: "0%", center: "50%", end: "100%" }[b], C = (((_b2 = s.arrow) == null ? void 0 : _b2.x) ?? 0) + h / 2, w = (((_c = s.arrow) == null ? void 0 : _c.y) ?? 0) + y / 2;
  let N = "", x = "";
  return g === "bottom" ? (N = m ? v : `${C}px`, x = `${-y}px`) : g === "top" ? (N = m ? v : `${C}px`, x = `${u.floating.height + y}px`) : g === "right" ? (N = `${-y}px`, x = m ? v : `${w}px`) : g === "left" && (N = `${u.floating.width + y}px`, x = m ? v : `${w}px`), { data: { x: N, y: x } };
} });
function _g(l) {
  const [i, r = "center"] = l.split("-");
  return [i, r];
}
var Fi = bg, ur = Eg, Wi = xg, eu = Tg;
function tu(l) {
  const i = d.useRef({ value: l, previous: l });
  return d.useMemo(() => (i.current.value !== l && (i.current.previous = i.current.value, i.current.value = l), i.current.previous), [l]);
}
var Rg = Object.freeze({ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" }), yT = "VisuallyHidden", Ag = d.forwardRef((l, i) => E.jsx(ue.span, { ...l, ref: i, style: { ...Rg, ...l.style } }));
Ag.displayName = yT;
var bT = Ag, ST = [" ", "Enter", "ArrowUp", "ArrowDown"], ET = [" ", "Enter"], $a = "Select", [nu, au, xT] = Jl($a), [Fl] = pt($a, [xT, Ea]), lu = Ea(), [CT, xa] = Fl($a), [TT, _T] = Fl($a), Mg = (l) => {
  const { __scopeSelect: i, children: r, open: u, defaultOpen: s, onOpenChange: f, value: m, defaultValue: h, onValueChange: y, dir: g, name: b, autoComplete: v, disabled: C, required: w, form: N } = l, x = lu(i), [T, M] = d.useState(null), [O, j] = d.useState(null), [Y, $] = d.useState(false), J = Wa(g), [V, ae] = xt({ prop: u, defaultProp: s ?? false, onChange: f, caller: $a }), [ye, me] = xt({ prop: m, defaultProp: h, onChange: y, caller: $a }), ce = d.useRef(null), de = T ? N || !!T.closest("form") : true, [pe, be] = d.useState(/* @__PURE__ */ new Set()), Se = Array.from(pe).map((I) => I.props.value).join(";");
  return E.jsx(Fi, { ...x, children: E.jsxs(CT, { required: w, scope: i, trigger: T, onTriggerChange: M, valueNode: O, onValueNodeChange: j, valueNodeHasChildren: Y, onValueNodeHasChildrenChange: $, contentId: Xe(), value: ye, onValueChange: me, open: V, onOpenChange: ae, dir: J, triggerPointerDownPosRef: ce, disabled: C, children: [E.jsx(nu.Provider, { scope: i, children: E.jsx(TT, { scope: l.__scopeSelect, onNativeOptionAdd: d.useCallback((I) => {
    be((ee) => new Set(ee).add(I));
  }, []), onNativeOptionRemove: d.useCallback((I) => {
    be((ee) => {
      const le = new Set(ee);
      return le.delete(I), le;
    });
  }, []), children: r }) }), de ? E.jsxs($g, { "aria-hidden": true, required: w, tabIndex: -1, name: b, autoComplete: v, value: ye, onChange: (I) => me(I.target.value), disabled: C, form: N, children: [ye === void 0 ? E.jsx("option", { value: "" }) : null, Array.from(pe)] }, Se) : null] }) });
};
Mg.displayName = $a;
var wg = "SelectTrigger", Dg = d.forwardRef((l, i) => {
  const { __scopeSelect: r, disabled: u = false, ...s } = l, f = lu(r), m = xa(wg, r), h = m.disabled || u, y = he(i, m.onTriggerChange), g = au(r), b = d.useRef("touch"), [v, C, w] = Fg((x) => {
    const T = g().filter((j) => !j.disabled), M = T.find((j) => j.value === m.value), O = Wg(T, x, M);
    O !== void 0 && m.onValueChange(O.value);
  }), N = (x) => {
    h || (m.onOpenChange(true), w()), x && (m.triggerPointerDownPosRef.current = { x: Math.round(x.pageX), y: Math.round(x.pageY) });
  };
  return E.jsx(ur, { asChild: true, ...f, children: E.jsx(ue.button, { type: "button", role: "combobox", "aria-controls": m.contentId, "aria-expanded": m.open, "aria-required": m.required, "aria-autocomplete": "none", dir: m.dir, "data-state": m.open ? "open" : "closed", disabled: h, "data-disabled": h ? "" : void 0, "data-placeholder": Jg(m.value) ? "" : void 0, ...s, ref: y, onClick: W(s.onClick, (x) => {
    x.currentTarget.focus(), b.current !== "mouse" && N(x);
  }), onPointerDown: W(s.onPointerDown, (x) => {
    b.current = x.pointerType;
    const T = x.target;
    T.hasPointerCapture(x.pointerId) && T.releasePointerCapture(x.pointerId), x.button === 0 && x.ctrlKey === false && x.pointerType === "mouse" && (N(x), x.preventDefault());
  }), onKeyDown: W(s.onKeyDown, (x) => {
    const T = v.current !== "";
    !(x.ctrlKey || x.altKey || x.metaKey) && x.key.length === 1 && C(x.key), !(T && x.key === " ") && ST.includes(x.key) && (N(), x.preventDefault());
  }) }) });
});
Dg.displayName = wg;
var Ng = "SelectValue", Og = d.forwardRef((l, i) => {
  const { __scopeSelect: r, className: u, style: s, children: f, placeholder: m = "", ...h } = l, y = xa(Ng, r), { onValueNodeHasChildrenChange: g } = y, b = f !== void 0, v = he(i, y.onValueNodeChange);
  return dt(() => {
    g(b);
  }, [g, b]), E.jsx(ue.span, { ...h, ref: v, style: { pointerEvents: "none" }, children: Jg(y.value) ? E.jsx(E.Fragment, { children: m }) : f });
});
Og.displayName = Ng;
var RT = "SelectIcon", zg = d.forwardRef((l, i) => {
  const { __scopeSelect: r, children: u, ...s } = l;
  return E.jsx(ue.span, { "aria-hidden": true, ...s, ref: i, children: u || "\u25BC" });
});
zg.displayName = RT;
var AT = "SelectPortal", jg = (l) => E.jsx(rr, { asChild: true, ...l });
jg.displayName = AT;
var Ja = "SelectContent", Ug = d.forwardRef((l, i) => {
  const r = xa(Ja, l.__scopeSelect), [u, s] = d.useState();
  if (dt(() => {
    s(new DocumentFragment());
  }, []), !r.open) {
    const f = u;
    return f ? lr.createPortal(E.jsx(Bg, { scope: l.__scopeSelect, children: E.jsx(nu.Slot, { scope: l.__scopeSelect, children: E.jsx("div", { children: l.children }) }) }), f) : null;
  }
  return E.jsx(Hg, { ...l, ref: i });
});
Ug.displayName = Ja;
var un = 10, [Bg, Ca] = Fl(Ja), MT = "SelectContentImpl", wT = Qa("SelectContent.RemoveScroll"), Hg = d.forwardRef((l, i) => {
  const { __scopeSelect: r, position: u = "item-aligned", onCloseAutoFocus: s, onEscapeKeyDown: f, onPointerDownOutside: m, side: h, sideOffset: y, align: g, alignOffset: b, arrowPadding: v, collisionBoundary: C, collisionPadding: w, sticky: N, hideWhenDetached: x, avoidCollisions: T, ...M } = l, O = xa(Ja, r), [j, Y] = d.useState(null), [$, J] = d.useState(null), V = he(i, (K) => Y(K)), [ae, ye] = d.useState(null), [me, ce] = d.useState(null), de = au(r), [pe, be] = d.useState(false), Se = d.useRef(false);
  d.useEffect(() => {
    if (j) return ki(j);
  }, [j]), Qi();
  const I = d.useCallback((K) => {
    const [te, ...ie] = de().map((ze) => ze.ref.current), [Ce] = ie.slice(-1), De = document.activeElement;
    for (const ze of K) if (ze === De || (ze == null ? void 0 : ze.scrollIntoView({ block: "nearest" }), ze === te && $ && ($.scrollTop = 0), ze === Ce && $ && ($.scrollTop = $.scrollHeight), ze == null ? void 0 : ze.focus(), document.activeElement !== De)) return;
  }, [de, $]), ee = d.useCallback(() => I([ae, j]), [I, ae, j]);
  d.useEffect(() => {
    pe && ee();
  }, [pe, ee]);
  const { onOpenChange: le, triggerPointerDownPosRef: ne } = O;
  d.useEffect(() => {
    if (j) {
      let K = { x: 0, y: 0 };
      const te = (Ce) => {
        var _a2, _b2;
        K = { x: Math.abs(Math.round(Ce.pageX) - (((_a2 = ne.current) == null ? void 0 : _a2.x) ?? 0)), y: Math.abs(Math.round(Ce.pageY) - (((_b2 = ne.current) == null ? void 0 : _b2.y) ?? 0)) };
      }, ie = (Ce) => {
        K.x <= 10 && K.y <= 10 ? Ce.preventDefault() : j.contains(Ce.target) || le(false), document.removeEventListener("pointermove", te), ne.current = null;
      };
      return ne.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", ie, { capture: true, once: true })), () => {
        document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", ie, { capture: true });
      };
    }
  }, [j, le, ne]), d.useEffect(() => {
    const K = () => le(false);
    return window.addEventListener("blur", K), window.addEventListener("resize", K), () => {
      window.removeEventListener("blur", K), window.removeEventListener("resize", K);
    };
  }, [le]);
  const [Ee, R] = Fg((K) => {
    const te = de().filter((De) => !De.disabled), ie = te.find((De) => De.ref.current === document.activeElement), Ce = Wg(te, K, ie);
    Ce && setTimeout(() => Ce.ref.current.focus());
  }), A = d.useCallback((K, te, ie) => {
    const Ce = !Se.current && !ie;
    (O.value !== void 0 && O.value === te || Ce) && (ye(K), Ce && (Se.current = true));
  }, [O.value]), H = d.useCallback(() => j == null ? void 0 : j.focus(), [j]), X = d.useCallback((K, te, ie) => {
    const Ce = !Se.current && !ie;
    (O.value !== void 0 && O.value === te || Ce) && ce(K);
  }, [O.value]), P = u === "popper" ? tf : Lg, F = P === tf ? { side: h, sideOffset: y, align: g, alignOffset: b, arrowPadding: v, collisionBoundary: C, collisionPadding: w, sticky: N, hideWhenDetached: x, avoidCollisions: T } : {};
  return E.jsx(Bg, { scope: r, content: j, viewport: $, onViewportChange: J, itemRefCallback: A, selectedItem: ae, onItemLeave: H, itemTextRefCallback: X, focusSelectedItem: ee, selectedItemText: me, position: u, isPositioned: pe, searchRef: Ee, children: E.jsx(ir, { as: wT, allowPinchZoom: true, children: E.jsx(or, { asChild: true, trapped: O.open, onMountAutoFocus: (K) => {
    K.preventDefault();
  }, onUnmountAutoFocus: W(s, (K) => {
    var _a2;
    (_a2 = O.trigger) == null ? void 0 : _a2.focus({ preventScroll: true }), K.preventDefault();
  }), children: E.jsx($l, { asChild: true, disableOutsidePointerEvents: true, onEscapeKeyDown: f, onPointerDownOutside: m, onFocusOutside: (K) => K.preventDefault(), onDismiss: () => O.onOpenChange(false), children: E.jsx(P, { role: "listbox", id: O.contentId, "data-state": O.open ? "open" : "closed", dir: O.dir, onContextMenu: (K) => K.preventDefault(), ...M, ...F, onPlaced: () => be(true), ref: V, style: { display: "flex", flexDirection: "column", outline: "none", ...M.style }, onKeyDown: W(M.onKeyDown, (K) => {
    const te = K.ctrlKey || K.altKey || K.metaKey;
    if (K.key === "Tab" && K.preventDefault(), !te && K.key.length === 1 && R(K.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(K.key)) {
      let Ce = de().filter((De) => !De.disabled).map((De) => De.ref.current);
      if (["ArrowUp", "End"].includes(K.key) && (Ce = Ce.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(K.key)) {
        const De = K.target, ze = Ce.indexOf(De);
        Ce = Ce.slice(ze + 1);
      }
      setTimeout(() => I(Ce)), K.preventDefault();
    }
  }) }) }) }) }) });
});
Hg.displayName = MT;
var DT = "SelectItemAlignedPosition", Lg = d.forwardRef((l, i) => {
  const { __scopeSelect: r, onPlaced: u, ...s } = l, f = xa(Ja, r), m = Ca(Ja, r), [h, y] = d.useState(null), [g, b] = d.useState(null), v = he(i, (V) => b(V)), C = au(r), w = d.useRef(false), N = d.useRef(true), { viewport: x, selectedItem: T, selectedItemText: M, focusSelectedItem: O } = m, j = d.useCallback(() => {
    if (f.trigger && f.valueNode && h && g && x && T && M) {
      const V = f.trigger.getBoundingClientRect(), ae = g.getBoundingClientRect(), ye = f.valueNode.getBoundingClientRect(), me = M.getBoundingClientRect();
      if (f.dir !== "rtl") {
        const De = me.left - ae.left, ze = ye.left - De, rt = V.left - ze, tt = V.width + rt, En = Math.max(tt, ae.width), dn = window.innerWidth - un, tn = Hi(ze, [un, Math.max(un, dn - En)]);
        h.style.minWidth = tt + "px", h.style.left = tn + "px";
      } else {
        const De = ae.right - me.right, ze = window.innerWidth - ye.right - De, rt = window.innerWidth - V.right - ze, tt = V.width + rt, En = Math.max(tt, ae.width), dn = window.innerWidth - un, tn = Hi(ze, [un, Math.max(un, dn - En)]);
        h.style.minWidth = tt + "px", h.style.right = tn + "px";
      }
      const ce = C(), de = window.innerHeight - un * 2, pe = x.scrollHeight, be = window.getComputedStyle(g), Se = parseInt(be.borderTopWidth, 10), I = parseInt(be.paddingTop, 10), ee = parseInt(be.borderBottomWidth, 10), le = parseInt(be.paddingBottom, 10), ne = Se + I + pe + le + ee, Ee = Math.min(T.offsetHeight * 5, ne), R = window.getComputedStyle(x), A = parseInt(R.paddingTop, 10), H = parseInt(R.paddingBottom, 10), X = V.top + V.height / 2 - un, P = de - X, F = T.offsetHeight / 2, K = T.offsetTop + F, te = Se + I + K, ie = ne - te;
      if (te <= X) {
        const De = ce.length > 0 && T === ce[ce.length - 1].ref.current;
        h.style.bottom = "0px";
        const ze = g.clientHeight - x.offsetTop - x.offsetHeight, rt = Math.max(P, F + (De ? H : 0) + ze + ee), tt = te + rt;
        h.style.height = tt + "px";
      } else {
        const De = ce.length > 0 && T === ce[0].ref.current;
        h.style.top = "0px";
        const rt = Math.max(X, Se + x.offsetTop + (De ? A : 0) + F) + ie;
        h.style.height = rt + "px", x.scrollTop = te - X + x.offsetTop;
      }
      h.style.margin = `${un}px 0`, h.style.minHeight = Ee + "px", h.style.maxHeight = de + "px", u == null ? void 0 : u(), requestAnimationFrame(() => w.current = true);
    }
  }, [C, f.trigger, f.valueNode, h, g, x, T, M, f.dir, u]);
  dt(() => j(), [j]);
  const [Y, $] = d.useState();
  dt(() => {
    g && $(window.getComputedStyle(g).zIndex);
  }, [g]);
  const J = d.useCallback((V) => {
    V && N.current === true && (j(), O == null ? void 0 : O(), N.current = false);
  }, [j, O]);
  return E.jsx(OT, { scope: r, contentWrapper: h, shouldExpandOnScrollRef: w, onScrollButtonChange: J, children: E.jsx("div", { ref: y, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: Y }, children: E.jsx(ue.div, { ...s, ref: v, style: { boxSizing: "border-box", maxHeight: "100%", ...s.style } }) }) });
});
Lg.displayName = DT;
var NT = "SelectPopperPosition", tf = d.forwardRef((l, i) => {
  const { __scopeSelect: r, align: u = "start", collisionPadding: s = un, ...f } = l, m = lu(r);
  return E.jsx(Wi, { ...m, ...f, ref: i, align: u, collisionPadding: s, style: { boxSizing: "border-box", ...f.style, "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" } });
});
tf.displayName = NT;
var [OT, Rf] = Fl(Ja, {}), nf = "SelectViewport", Gg = d.forwardRef((l, i) => {
  const { __scopeSelect: r, nonce: u, ...s } = l, f = Ca(nf, r), m = Rf(nf, r), h = he(i, f.onViewportChange), y = d.useRef(0);
  return E.jsxs(E.Fragment, { children: [E.jsx("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: u }), E.jsx(nu.Slot, { scope: r, children: E.jsx(ue.div, { "data-radix-select-viewport": "", role: "presentation", ...s, ref: h, style: { position: "relative", flex: 1, overflow: "hidden auto", ...s.style }, onScroll: W(s.onScroll, (g) => {
    const b = g.currentTarget, { contentWrapper: v, shouldExpandOnScrollRef: C } = m;
    if ((C == null ? void 0 : C.current) && v) {
      const w = Math.abs(y.current - b.scrollTop);
      if (w > 0) {
        const N = window.innerHeight - un * 2, x = parseFloat(v.style.minHeight), T = parseFloat(v.style.height), M = Math.max(x, T);
        if (M < N) {
          const O = M + w, j = Math.min(N, O), Y = O - j;
          v.style.height = j + "px", v.style.bottom === "0px" && (b.scrollTop = Y > 0 ? Y : 0, v.style.justifyContent = "flex-end");
        }
      }
    }
    y.current = b.scrollTop;
  }) }) })] });
});
Gg.displayName = nf;
var Yg = "SelectGroup", [zT, jT] = Fl(Yg), UT = d.forwardRef((l, i) => {
  const { __scopeSelect: r, ...u } = l, s = Xe();
  return E.jsx(zT, { scope: r, id: s, children: E.jsx(ue.div, { role: "group", "aria-labelledby": s, ...u, ref: i }) });
});
UT.displayName = Yg;
var Vg = "SelectLabel", BT = d.forwardRef((l, i) => {
  const { __scopeSelect: r, ...u } = l, s = jT(Vg, r);
  return E.jsx(ue.div, { id: s.id, ...u, ref: i });
});
BT.displayName = Vg;
var Vi = "SelectItem", [HT, Ig] = Fl(Vi), qg = d.forwardRef((l, i) => {
  const { __scopeSelect: r, value: u, disabled: s = false, textValue: f, ...m } = l, h = xa(Vi, r), y = Ca(Vi, r), g = h.value === u, [b, v] = d.useState(f ?? ""), [C, w] = d.useState(false), N = he(i, (O) => {
    var _a2;
    return (_a2 = y.itemRefCallback) == null ? void 0 : _a2.call(y, O, u, s);
  }), x = Xe(), T = d.useRef("touch"), M = () => {
    s || (h.onValueChange(u), h.onOpenChange(false));
  };
  if (u === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return E.jsx(HT, { scope: r, value: u, disabled: s, textId: x, isSelected: g, onItemTextChange: d.useCallback((O) => {
    v((j) => j || ((O == null ? void 0 : O.textContent) ?? "").trim());
  }, []), children: E.jsx(nu.ItemSlot, { scope: r, value: u, disabled: s, textValue: b, children: E.jsx(ue.div, { role: "option", "aria-labelledby": x, "data-highlighted": C ? "" : void 0, "aria-selected": g && C, "data-state": g ? "checked" : "unchecked", "aria-disabled": s || void 0, "data-disabled": s ? "" : void 0, tabIndex: s ? void 0 : -1, ...m, ref: N, onFocus: W(m.onFocus, () => w(true)), onBlur: W(m.onBlur, () => w(false)), onClick: W(m.onClick, () => {
    T.current !== "mouse" && M();
  }), onPointerUp: W(m.onPointerUp, () => {
    T.current === "mouse" && M();
  }), onPointerDown: W(m.onPointerDown, (O) => {
    T.current = O.pointerType;
  }), onPointerMove: W(m.onPointerMove, (O) => {
    var _a2;
    T.current = O.pointerType, s ? (_a2 = y.onItemLeave) == null ? void 0 : _a2.call(y) : T.current === "mouse" && O.currentTarget.focus({ preventScroll: true });
  }), onPointerLeave: W(m.onPointerLeave, (O) => {
    var _a2;
    O.currentTarget === document.activeElement && ((_a2 = y.onItemLeave) == null ? void 0 : _a2.call(y));
  }), onKeyDown: W(m.onKeyDown, (O) => {
    var _a2;
    ((_a2 = y.searchRef) == null ? void 0 : _a2.current) !== "" && O.key === " " || (ET.includes(O.key) && M(), O.key === " " && O.preventDefault());
  }) }) }) });
});
qg.displayName = Vi;
var Wo = "SelectItemText", Kg = d.forwardRef((l, i) => {
  const { __scopeSelect: r, className: u, style: s, ...f } = l, m = xa(Wo, r), h = Ca(Wo, r), y = Ig(Wo, r), g = _T(Wo, r), [b, v] = d.useState(null), C = he(i, (M) => v(M), y.onItemTextChange, (M) => {
    var _a2;
    return (_a2 = h.itemTextRefCallback) == null ? void 0 : _a2.call(h, M, y.value, y.disabled);
  }), w = b == null ? void 0 : b.textContent, N = d.useMemo(() => E.jsx("option", { value: y.value, disabled: y.disabled, children: w }, y.value), [y.disabled, y.value, w]), { onNativeOptionAdd: x, onNativeOptionRemove: T } = g;
  return dt(() => (x(N), () => T(N)), [x, T, N]), E.jsxs(E.Fragment, { children: [E.jsx(ue.span, { id: y.textId, ...f, ref: C }), y.isSelected && m.valueNode && !m.valueNodeHasChildren ? lr.createPortal(f.children, m.valueNode) : null] });
});
Kg.displayName = Wo;
var Xg = "SelectItemIndicator", Pg = d.forwardRef((l, i) => {
  const { __scopeSelect: r, ...u } = l;
  return Ig(Xg, r).isSelected ? E.jsx(ue.span, { "aria-hidden": true, ...u, ref: i }) : null;
});
Pg.displayName = Xg;
var af = "SelectScrollUpButton", kg = d.forwardRef((l, i) => {
  const r = Ca(af, l.__scopeSelect), u = Rf(af, l.__scopeSelect), [s, f] = d.useState(false), m = he(i, u.onScrollButtonChange);
  return dt(() => {
    if (r.viewport && r.isPositioned) {
      let h = function() {
        const g = y.scrollTop > 0;
        f(g);
      };
      const y = r.viewport;
      return h(), y.addEventListener("scroll", h), () => y.removeEventListener("scroll", h);
    }
  }, [r.viewport, r.isPositioned]), s ? E.jsx(Zg, { ...l, ref: m, onAutoScroll: () => {
    const { viewport: h, selectedItem: y } = r;
    h && y && (h.scrollTop = h.scrollTop - y.offsetHeight);
  } }) : null;
});
kg.displayName = af;
var lf = "SelectScrollDownButton", Qg = d.forwardRef((l, i) => {
  const r = Ca(lf, l.__scopeSelect), u = Rf(lf, l.__scopeSelect), [s, f] = d.useState(false), m = he(i, u.onScrollButtonChange);
  return dt(() => {
    if (r.viewport && r.isPositioned) {
      let h = function() {
        const g = y.scrollHeight - y.clientHeight, b = Math.ceil(y.scrollTop) < g;
        f(b);
      };
      const y = r.viewport;
      return h(), y.addEventListener("scroll", h), () => y.removeEventListener("scroll", h);
    }
  }, [r.viewport, r.isPositioned]), s ? E.jsx(Zg, { ...l, ref: m, onAutoScroll: () => {
    const { viewport: h, selectedItem: y } = r;
    h && y && (h.scrollTop = h.scrollTop + y.offsetHeight);
  } }) : null;
});
Qg.displayName = lf;
var Zg = d.forwardRef((l, i) => {
  const { __scopeSelect: r, onAutoScroll: u, ...s } = l, f = Ca("SelectScrollButton", r), m = d.useRef(null), h = au(r), y = d.useCallback(() => {
    m.current !== null && (window.clearInterval(m.current), m.current = null);
  }, []);
  return d.useEffect(() => () => y(), [y]), dt(() => {
    var _a2, _b2;
    (_b2 = (_a2 = h().find((b) => b.ref.current === document.activeElement)) == null ? void 0 : _a2.ref.current) == null ? void 0 : _b2.scrollIntoView({ block: "nearest" });
  }, [h]), E.jsx(ue.div, { "aria-hidden": true, ...s, ref: i, style: { flexShrink: 0, ...s.style }, onPointerDown: W(s.onPointerDown, () => {
    m.current === null && (m.current = window.setInterval(u, 50));
  }), onPointerMove: W(s.onPointerMove, () => {
    var _a2;
    (_a2 = f.onItemLeave) == null ? void 0 : _a2.call(f), m.current === null && (m.current = window.setInterval(u, 50));
  }), onPointerLeave: W(s.onPointerLeave, () => {
    y();
  }) });
}), LT = "SelectSeparator", GT = d.forwardRef((l, i) => {
  const { __scopeSelect: r, ...u } = l;
  return E.jsx(ue.div, { "aria-hidden": true, ...u, ref: i });
});
GT.displayName = LT;
var of = "SelectArrow", YT = d.forwardRef((l, i) => {
  const { __scopeSelect: r, ...u } = l, s = lu(r), f = xa(of, r), m = Ca(of, r);
  return f.open && m.position === "popper" ? E.jsx(eu, { ...s, ...u, ref: i }) : null;
});
YT.displayName = of;
var VT = "SelectBubbleInput", $g = d.forwardRef(({ __scopeSelect: l, value: i, ...r }, u) => {
  const s = d.useRef(null), f = he(u, s), m = tu(i);
  return d.useEffect(() => {
    const h = s.current;
    if (!h) return;
    const y = window.HTMLSelectElement.prototype, b = Object.getOwnPropertyDescriptor(y, "value").set;
    if (m !== i && b) {
      const v = new Event("change", { bubbles: true });
      b.call(h, i), h.dispatchEvent(v);
    }
  }, [m, i]), E.jsx(ue.select, { ...r, style: { ...Rg, ...r.style }, ref: f, defaultValue: i });
});
$g.displayName = VT;
function Jg(l) {
  return l === "" || l === void 0;
}
function Fg(l) {
  const i = cn(l), r = d.useRef(""), u = d.useRef(0), s = d.useCallback((m) => {
    const h = r.current + m;
    i(h), (function y(g) {
      r.current = g, window.clearTimeout(u.current), g !== "" && (u.current = window.setTimeout(() => y(""), 1e3));
    })(h);
  }, [i]), f = d.useCallback(() => {
    r.current = "", window.clearTimeout(u.current);
  }, []);
  return d.useEffect(() => () => window.clearTimeout(u.current), []), [r, s, f];
}
function Wg(l, i, r) {
  const s = i.length > 1 && Array.from(i).every((g) => g === i[0]) ? i[0] : i, f = r ? l.indexOf(r) : -1;
  let m = IT(l, Math.max(f, 0));
  s.length === 1 && (m = m.filter((g) => g !== r));
  const y = m.find((g) => g.textValue.toLowerCase().startsWith(s.toLowerCase()));
  return y !== r ? y : void 0;
}
function IT(l, i) {
  return l.map((r, u) => l[(i + u) % l.length]);
}
var UM = Mg, BM = Dg, HM = Og, LM = zg, GM = jg, YM = Ug, VM = Gg, IM = qg, qM = Kg, KM = Pg, XM = kg, PM = Qg, Ps = "rovingFocusGroup.onEntryFocus", qT = { bubbles: false, cancelable: true }, cr = "RovingFocusGroup", [rf, ey, KT] = Jl(cr), [XT, Wl] = pt(cr, [KT]), [PT, kT] = XT(cr), ty = d.forwardRef((l, i) => E.jsx(rf.Provider, { scope: l.__scopeRovingFocusGroup, children: E.jsx(rf.Slot, { scope: l.__scopeRovingFocusGroup, children: E.jsx(QT, { ...l, ref: i }) }) }));
ty.displayName = cr;
var QT = d.forwardRef((l, i) => {
  const { __scopeRovingFocusGroup: r, orientation: u, loop: s = false, dir: f, currentTabStopId: m, defaultCurrentTabStopId: h, onCurrentTabStopIdChange: y, onEntryFocus: g, preventScrollOnEntryFocus: b = false, ...v } = l, C = d.useRef(null), w = he(i, C), N = Wa(f), [x, T] = xt({ prop: m, defaultProp: h ?? null, onChange: y, caller: cr }), [M, O] = d.useState(false), j = cn(g), Y = ey(r), $ = d.useRef(false), [J, V] = d.useState(0);
  return d.useEffect(() => {
    const ae = C.current;
    if (ae) return ae.addEventListener(Ps, j), () => ae.removeEventListener(Ps, j);
  }, [j]), E.jsx(PT, { scope: r, orientation: u, dir: N, loop: s, currentTabStopId: x, onItemFocus: d.useCallback((ae) => T(ae), [T]), onItemShiftTab: d.useCallback(() => O(true), []), onFocusableItemAdd: d.useCallback(() => V((ae) => ae + 1), []), onFocusableItemRemove: d.useCallback(() => V((ae) => ae - 1), []), children: E.jsx(ue.div, { tabIndex: M || J === 0 ? -1 : 0, "data-orientation": u, ...v, ref: w, style: { outline: "none", ...l.style }, onMouseDown: W(l.onMouseDown, () => {
    $.current = true;
  }), onFocus: W(l.onFocus, (ae) => {
    const ye = !$.current;
    if (ae.target === ae.currentTarget && ye && !M) {
      const me = new CustomEvent(Ps, qT);
      if (ae.currentTarget.dispatchEvent(me), !me.defaultPrevented) {
        const ce = Y().filter((I) => I.focusable), de = ce.find((I) => I.active), pe = ce.find((I) => I.id === x), Se = [de, pe, ...ce].filter(Boolean).map((I) => I.ref.current);
        ly(Se, b);
      }
    }
    $.current = false;
  }), onBlur: W(l.onBlur, () => O(false)) }) });
}), ny = "RovingFocusGroupItem", ay = d.forwardRef((l, i) => {
  const { __scopeRovingFocusGroup: r, focusable: u = true, active: s = false, tabStopId: f, children: m, ...h } = l, y = Xe(), g = f || y, b = kT(ny, r), v = b.currentTabStopId === g, C = ey(r), { onFocusableItemAdd: w, onFocusableItemRemove: N, currentTabStopId: x } = b;
  return d.useEffect(() => {
    if (u) return w(), () => N();
  }, [u, w, N]), E.jsx(rf.ItemSlot, { scope: r, id: g, focusable: u, active: s, children: E.jsx(ue.span, { tabIndex: v ? 0 : -1, "data-orientation": b.orientation, ...h, ref: i, onMouseDown: W(l.onMouseDown, (T) => {
    u ? b.onItemFocus(g) : T.preventDefault();
  }), onFocus: W(l.onFocus, () => b.onItemFocus(g)), onKeyDown: W(l.onKeyDown, (T) => {
    if (T.key === "Tab" && T.shiftKey) {
      b.onItemShiftTab();
      return;
    }
    if (T.target !== T.currentTarget) return;
    const M = JT(T, b.orientation, b.dir);
    if (M !== void 0) {
      if (T.metaKey || T.ctrlKey || T.altKey || T.shiftKey) return;
      T.preventDefault();
      let j = C().filter((Y) => Y.focusable).map((Y) => Y.ref.current);
      if (M === "last") j.reverse();
      else if (M === "prev" || M === "next") {
        M === "prev" && j.reverse();
        const Y = j.indexOf(T.currentTarget);
        j = b.loop ? FT(j, Y + 1) : j.slice(Y + 1);
      }
      setTimeout(() => ly(j));
    }
  }), children: typeof m == "function" ? m({ isCurrentTabStop: v, hasTabStop: x != null }) : m }) });
});
ay.displayName = ny;
var ZT = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function $T(l, i) {
  return i !== "rtl" ? l : l === "ArrowLeft" ? "ArrowRight" : l === "ArrowRight" ? "ArrowLeft" : l;
}
function JT(l, i, r) {
  const u = $T(l.key, r);
  if (!(i === "vertical" && ["ArrowLeft", "ArrowRight"].includes(u)) && !(i === "horizontal" && ["ArrowUp", "ArrowDown"].includes(u))) return ZT[u];
}
function ly(l, i = false) {
  const r = document.activeElement;
  for (const u of l) if (u === r || (u.focus({ preventScroll: i }), document.activeElement !== r)) return;
}
function FT(l, i) {
  return l.map((r, u) => l[(i + u) % l.length]);
}
var Af = ty, Mf = ay, ou = "Tabs", [WT] = pt(ou, [Wl]), oy = Wl(), [e_, wf] = WT(ou), ry = d.forwardRef((l, i) => {
  const { __scopeTabs: r, value: u, onValueChange: s, defaultValue: f, orientation: m = "horizontal", dir: h, activationMode: y = "automatic", ...g } = l, b = Wa(h), [v, C] = xt({ prop: u, onChange: s, defaultProp: f ?? "", caller: ou });
  return E.jsx(e_, { scope: r, baseId: Xe(), value: v, onValueChange: C, orientation: m, dir: b, activationMode: y, children: E.jsx(ue.div, { dir: b, "data-orientation": m, ...g, ref: i }) });
});
ry.displayName = ou;
var iy = "TabsList", uy = d.forwardRef((l, i) => {
  const { __scopeTabs: r, loop: u = true, ...s } = l, f = wf(iy, r), m = oy(r);
  return E.jsx(Af, { asChild: true, ...m, orientation: f.orientation, dir: f.dir, loop: u, children: E.jsx(ue.div, { role: "tablist", "aria-orientation": f.orientation, ...s, ref: i }) });
});
uy.displayName = iy;
var cy = "TabsTrigger", sy = d.forwardRef((l, i) => {
  const { __scopeTabs: r, value: u, disabled: s = false, ...f } = l, m = wf(cy, r), h = oy(r), y = py(m.baseId, u), g = my(m.baseId, u), b = u === m.value;
  return E.jsx(Mf, { asChild: true, ...h, focusable: !s, active: b, children: E.jsx(ue.button, { type: "button", role: "tab", "aria-selected": b, "aria-controls": g, "data-state": b ? "active" : "inactive", "data-disabled": s ? "" : void 0, disabled: s, id: y, ...f, ref: i, onMouseDown: W(l.onMouseDown, (v) => {
    !s && v.button === 0 && v.ctrlKey === false ? m.onValueChange(u) : v.preventDefault();
  }), onKeyDown: W(l.onKeyDown, (v) => {
    [" ", "Enter"].includes(v.key) && m.onValueChange(u);
  }), onFocus: W(l.onFocus, () => {
    const v = m.activationMode !== "manual";
    !b && !s && v && m.onValueChange(u);
  }) }) });
});
sy.displayName = cy;
var fy = "TabsContent", dy = d.forwardRef((l, i) => {
  const { __scopeTabs: r, value: u, forceMount: s, children: f, ...m } = l, h = wf(fy, r), y = py(h.baseId, u), g = my(h.baseId, u), b = u === h.value, v = d.useRef(b);
  return d.useEffect(() => {
    const C = requestAnimationFrame(() => v.current = false);
    return () => cancelAnimationFrame(C);
  }, []), E.jsx(Ut, { present: s || b, children: ({ present: C }) => E.jsx(ue.div, { "data-state": b ? "active" : "inactive", "data-orientation": h.orientation, role: "tabpanel", "aria-labelledby": y, hidden: !C, id: g, tabIndex: 0, ...m, ref: i, style: { ...l.style, animationDuration: v.current ? "0s" : void 0 }, children: C && f }) });
});
dy.displayName = fy;
function py(l, i) {
  return `${l}-trigger-${i}`;
}
function my(l, i) {
  return `${l}-content-${i}`;
}
var kM = ry, QM = uy, ZM = sy, $M = dy, ru = "Checkbox", [t_] = pt(ru), [n_, Df] = t_(ru);
function a_(l) {
  const { __scopeCheckbox: i, checked: r, children: u, defaultChecked: s, disabled: f, form: m, name: h, onCheckedChange: y, required: g, value: b = "on", internal_do_not_use_render: v } = l, [C, w] = xt({ prop: r, defaultProp: s ?? false, onChange: y, caller: ru }), [N, x] = d.useState(null), [T, M] = d.useState(null), O = d.useRef(false), j = N ? !!m || !!N.closest("form") : true, Y = { checked: C, disabled: f, setChecked: w, control: N, setControl: x, name: h, form: m, value: b, hasConsumerStoppedPropagationRef: O, required: g, defaultChecked: ya(s) ? false : s, isFormControl: j, bubbleInput: T, setBubbleInput: M };
  return E.jsx(n_, { scope: i, ...Y, children: r_(v) ? v(Y) : u });
}
var vy = "CheckboxTrigger", hy = d.forwardRef(({ __scopeCheckbox: l, onKeyDown: i, onClick: r, ...u }, s) => {
  const { control: f, value: m, disabled: h, checked: y, required: g, setControl: b, setChecked: v, hasConsumerStoppedPropagationRef: C, isFormControl: w, bubbleInput: N } = Df(vy, l), x = he(s, b), T = d.useRef(y);
  return d.useEffect(() => {
    const M = f == null ? void 0 : f.form;
    if (M) {
      const O = () => v(T.current);
      return M.addEventListener("reset", O), () => M.removeEventListener("reset", O);
    }
  }, [f, v]), E.jsx(ue.button, { type: "button", role: "checkbox", "aria-checked": ya(y) ? "mixed" : y, "aria-required": g, "data-state": Sy(y), "data-disabled": h ? "" : void 0, disabled: h, value: m, ...u, ref: x, onKeyDown: W(i, (M) => {
    M.key === "Enter" && M.preventDefault();
  }), onClick: W(r, (M) => {
    v((O) => ya(O) ? true : !O), N && w && (C.current = M.isPropagationStopped(), C.current || M.stopPropagation());
  }) });
});
hy.displayName = vy;
var l_ = d.forwardRef((l, i) => {
  const { __scopeCheckbox: r, name: u, checked: s, defaultChecked: f, required: m, disabled: h, value: y, onCheckedChange: g, form: b, ...v } = l;
  return E.jsx(a_, { __scopeCheckbox: r, checked: s, defaultChecked: f, disabled: h, required: m, onCheckedChange: g, name: u, form: b, value: y, internal_do_not_use_render: ({ isFormControl: C }) => E.jsxs(E.Fragment, { children: [E.jsx(hy, { ...v, ref: i, __scopeCheckbox: r }), C && E.jsx(by, { __scopeCheckbox: r })] }) });
});
l_.displayName = ru;
var gy = "CheckboxIndicator", o_ = d.forwardRef((l, i) => {
  const { __scopeCheckbox: r, forceMount: u, ...s } = l, f = Df(gy, r);
  return E.jsx(Ut, { present: u || ya(f.checked) || f.checked === true, children: E.jsx(ue.span, { "data-state": Sy(f.checked), "data-disabled": f.disabled ? "" : void 0, ...s, ref: i, style: { pointerEvents: "none", ...l.style } }) });
});
o_.displayName = gy;
var yy = "CheckboxBubbleInput", by = d.forwardRef(({ __scopeCheckbox: l, ...i }, r) => {
  const { control: u, hasConsumerStoppedPropagationRef: s, checked: f, defaultChecked: m, required: h, disabled: y, name: g, value: b, form: v, bubbleInput: C, setBubbleInput: w } = Df(yy, l), N = he(r, w), x = tu(f), T = Ji(u);
  d.useEffect(() => {
    const O = C;
    if (!O) return;
    const j = window.HTMLInputElement.prototype, $ = Object.getOwnPropertyDescriptor(j, "checked").set, J = !s.current;
    if (x !== f && $) {
      const V = new Event("click", { bubbles: J });
      O.indeterminate = ya(f), $.call(O, ya(f) ? false : f), O.dispatchEvent(V);
    }
  }, [C, x, f, s]);
  const M = d.useRef(ya(f) ? false : f);
  return E.jsx(ue.input, { type: "checkbox", "aria-hidden": true, defaultChecked: m ?? M.current, required: h, disabled: y, name: g, value: b, form: v, ...i, tabIndex: -1, ref: N, style: { ...i.style, ...T, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0, transform: "translateX(-100%)" } });
});
by.displayName = yy;
function r_(l) {
  return typeof l == "function";
}
function ya(l) {
  return l === "indeterminate";
}
function Sy(l) {
  return ya(l) ? "indeterminate" : l ? "checked" : "unchecked";
}
var [iu] = pt("Tooltip", [Ea]), Nf = Ea(), Ey = "TooltipProvider", i_ = 700, Eh = "tooltip.open", [u_, xy] = iu(Ey), Cy = (l) => {
  const { __scopeTooltip: i, delayDuration: r = i_, skipDelayDuration: u = 300, disableHoverableContent: s = false, children: f } = l, m = d.useRef(true), h = d.useRef(false), y = d.useRef(0);
  return d.useEffect(() => {
    const g = y.current;
    return () => window.clearTimeout(g);
  }, []), E.jsx(u_, { scope: i, isOpenDelayedRef: m, delayDuration: r, onOpen: d.useCallback(() => {
    window.clearTimeout(y.current), m.current = false;
  }, []), onClose: d.useCallback(() => {
    window.clearTimeout(y.current), y.current = window.setTimeout(() => m.current = true, u);
  }, [u]), isPointerInTransitRef: h, onPointerInTransitChange: d.useCallback((g) => {
    h.current = g;
  }, []), disableHoverableContent: s, children: f });
};
Cy.displayName = Ey;
var Ty = "Tooltip", [JM, uu] = iu(Ty), uf = "TooltipTrigger", c_ = d.forwardRef((l, i) => {
  const { __scopeTooltip: r, ...u } = l, s = uu(uf, r), f = xy(uf, r), m = Nf(r), h = d.useRef(null), y = he(i, h, s.onTriggerChange), g = d.useRef(false), b = d.useRef(false), v = d.useCallback(() => g.current = false, []);
  return d.useEffect(() => () => document.removeEventListener("pointerup", v), [v]), E.jsx(ur, { asChild: true, ...m, children: E.jsx(ue.button, { "aria-describedby": s.open ? s.contentId : void 0, "data-state": s.stateAttribute, ...u, ref: y, onPointerMove: W(l.onPointerMove, (C) => {
    C.pointerType !== "touch" && !b.current && !f.isPointerInTransitRef.current && (s.onTriggerEnter(), b.current = true);
  }), onPointerLeave: W(l.onPointerLeave, () => {
    s.onTriggerLeave(), b.current = false;
  }), onPointerDown: W(l.onPointerDown, () => {
    s.open && s.onClose(), g.current = true, document.addEventListener("pointerup", v, { once: true });
  }), onFocus: W(l.onFocus, () => {
    g.current || s.onOpen();
  }), onBlur: W(l.onBlur, s.onClose), onClick: W(l.onClick, s.onClose) }) });
});
c_.displayName = uf;
var s_ = "TooltipPortal", [FM, f_] = iu(s_, { forceMount: void 0 }), Ql = "TooltipContent", d_ = d.forwardRef((l, i) => {
  const r = f_(Ql, l.__scopeTooltip), { forceMount: u = r.forceMount, side: s = "top", ...f } = l, m = uu(Ql, l.__scopeTooltip);
  return E.jsx(Ut, { present: u || m.open, children: m.disableHoverableContent ? E.jsx(_y, { side: s, ...f, ref: i }) : E.jsx(p_, { side: s, ...f, ref: i }) });
}), p_ = d.forwardRef((l, i) => {
  const r = uu(Ql, l.__scopeTooltip), u = xy(Ql, l.__scopeTooltip), s = d.useRef(null), f = he(i, s), [m, h] = d.useState(null), { trigger: y, onClose: g } = r, b = s.current, { onPointerInTransitChange: v } = u, C = d.useCallback(() => {
    h(null), v(false);
  }, [v]), w = d.useCallback((N, x) => {
    const T = N.currentTarget, M = { x: N.clientX, y: N.clientY }, O = y_(M, T.getBoundingClientRect()), j = b_(M, O), Y = S_(x.getBoundingClientRect()), $ = x_([...j, ...Y]);
    h($), v(true);
  }, [v]);
  return d.useEffect(() => () => C(), [C]), d.useEffect(() => {
    if (y && b) {
      const N = (T) => w(T, b), x = (T) => w(T, y);
      return y.addEventListener("pointerleave", N), b.addEventListener("pointerleave", x), () => {
        y.removeEventListener("pointerleave", N), b.removeEventListener("pointerleave", x);
      };
    }
  }, [y, b, w, C]), d.useEffect(() => {
    if (m) {
      const N = (x) => {
        const T = x.target, M = { x: x.clientX, y: x.clientY }, O = (y == null ? void 0 : y.contains(T)) || (b == null ? void 0 : b.contains(T)), j = !E_(M, m);
        O ? C() : j && (C(), g());
      };
      return document.addEventListener("pointermove", N), () => document.removeEventListener("pointermove", N);
    }
  }, [y, b, m, g, C]), E.jsx(_y, { ...l, ref: f });
}), [m_, v_] = iu(Ty, { isInside: false }), h_ = Bh("TooltipContent"), _y = d.forwardRef((l, i) => {
  const { __scopeTooltip: r, children: u, "aria-label": s, onEscapeKeyDown: f, onPointerDownOutside: m, ...h } = l, y = uu(Ql, r), g = Nf(r), { onClose: b } = y;
  return d.useEffect(() => (document.addEventListener(Eh, b), () => document.removeEventListener(Eh, b)), [b]), d.useEffect(() => {
    if (y.trigger) {
      const v = (C) => {
        var _a2;
        ((_a2 = C.target) == null ? void 0 : _a2.contains(y.trigger)) && b();
      };
      return window.addEventListener("scroll", v, { capture: true }), () => window.removeEventListener("scroll", v, { capture: true });
    }
  }, [y.trigger, b]), E.jsx($l, { asChild: true, disableOutsidePointerEvents: false, onEscapeKeyDown: f, onPointerDownOutside: m, onFocusOutside: (v) => v.preventDefault(), onDismiss: b, children: E.jsxs(Wi, { "data-state": y.stateAttribute, ...g, ...h, ref: i, style: { ...h.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)", "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)", "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" }, children: [E.jsx(h_, { children: u }), E.jsx(m_, { scope: r, isInside: true, children: E.jsx(bT, { id: y.contentId, role: "tooltip", children: s || u }) })] }) });
});
d_.displayName = Ql;
var Ry = "TooltipArrow", g_ = d.forwardRef((l, i) => {
  const { __scopeTooltip: r, ...u } = l, s = Nf(r);
  return v_(Ry, r).isInside ? null : E.jsx(eu, { ...s, ...u, ref: i });
});
g_.displayName = Ry;
function y_(l, i) {
  const r = Math.abs(i.top - l.y), u = Math.abs(i.bottom - l.y), s = Math.abs(i.right - l.x), f = Math.abs(i.left - l.x);
  switch (Math.min(r, u, s, f)) {
    case f:
      return "left";
    case s:
      return "right";
    case r:
      return "top";
    case u:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function b_(l, i, r = 5) {
  const u = [];
  switch (i) {
    case "top":
      u.push({ x: l.x - r, y: l.y + r }, { x: l.x + r, y: l.y + r });
      break;
    case "bottom":
      u.push({ x: l.x - r, y: l.y - r }, { x: l.x + r, y: l.y - r });
      break;
    case "left":
      u.push({ x: l.x + r, y: l.y - r }, { x: l.x + r, y: l.y + r });
      break;
    case "right":
      u.push({ x: l.x - r, y: l.y - r }, { x: l.x - r, y: l.y + r });
      break;
  }
  return u;
}
function S_(l) {
  const { top: i, right: r, bottom: u, left: s } = l;
  return [{ x: s, y: i }, { x: r, y: i }, { x: r, y: u }, { x: s, y: u }];
}
function E_(l, i) {
  const { x: r, y: u } = l;
  let s = false;
  for (let f = 0, m = i.length - 1; f < i.length; m = f++) {
    const h = i[f], y = i[m], g = h.x, b = h.y, v = y.x, C = y.y;
    b > u != C > u && r < (v - g) * (u - b) / (C - b) + g && (s = !s);
  }
  return s;
}
function x_(l) {
  const i = l.slice();
  return i.sort((r, u) => r.x < u.x ? -1 : r.x > u.x ? 1 : r.y < u.y ? -1 : r.y > u.y ? 1 : 0), C_(i);
}
function C_(l) {
  if (l.length <= 1) return l.slice();
  const i = [];
  for (let u = 0; u < l.length; u++) {
    const s = l[u];
    for (; i.length >= 2; ) {
      const f = i[i.length - 1], m = i[i.length - 2];
      if ((f.x - m.x) * (s.y - m.y) >= (f.y - m.y) * (s.x - m.x)) i.pop();
      else break;
    }
    i.push(s);
  }
  i.pop();
  const r = [];
  for (let u = l.length - 1; u >= 0; u--) {
    const s = l[u];
    for (; r.length >= 2; ) {
      const f = r[r.length - 1], m = r[r.length - 2];
      if ((f.x - m.x) * (s.y - m.y) >= (f.y - m.y) * (s.x - m.x)) r.pop();
      else break;
    }
    r.push(s);
  }
  return r.pop(), i.length === 1 && r.length === 1 && i[0].x === r[0].x && i[0].y === r[0].y ? i : i.concat(r);
}
var WM = Cy, cf = ["Enter", " "], T_ = ["ArrowDown", "PageUp", "Home"], Ay = ["ArrowUp", "PageDown", "End"], __ = [...T_, ...Ay], R_ = { ltr: [...cf, "ArrowRight"], rtl: [...cf, "ArrowLeft"] }, A_ = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] }, sr = "Menu", [tr, M_, w_] = Jl(sr), [el, Of] = pt(sr, [w_, Ea, Wl]), fr = Ea(), My = Wl(), [wy, Ta] = el(sr), [D_, dr] = el(sr), Dy = (l) => {
  const { __scopeMenu: i, open: r = false, children: u, dir: s, onOpenChange: f, modal: m = true } = l, h = fr(i), [y, g] = d.useState(null), b = d.useRef(false), v = cn(f), C = Wa(s);
  return d.useEffect(() => {
    const w = () => {
      b.current = true, document.addEventListener("pointerdown", N, { capture: true, once: true }), document.addEventListener("pointermove", N, { capture: true, once: true });
    }, N = () => b.current = false;
    return document.addEventListener("keydown", w, { capture: true }), () => {
      document.removeEventListener("keydown", w, { capture: true }), document.removeEventListener("pointerdown", N, { capture: true }), document.removeEventListener("pointermove", N, { capture: true });
    };
  }, []), E.jsx(Fi, { ...h, children: E.jsx(wy, { scope: i, open: r, onOpenChange: v, content: y, onContentChange: g, children: E.jsx(D_, { scope: i, onClose: d.useCallback(() => v(false), [v]), isUsingKeyboardRef: b, dir: C, modal: m, children: u }) }) });
};
Dy.displayName = sr;
var N_ = "MenuAnchor", zf = d.forwardRef((l, i) => {
  const { __scopeMenu: r, ...u } = l, s = fr(r);
  return E.jsx(ur, { ...s, ...u, ref: i });
});
zf.displayName = N_;
var jf = "MenuPortal", [O_, Ny] = el(jf, { forceMount: void 0 }), Oy = (l) => {
  const { __scopeMenu: i, forceMount: r, children: u, container: s } = l, f = Ta(jf, i);
  return E.jsx(O_, { scope: i, forceMount: r, children: E.jsx(Ut, { present: r || f.open, children: E.jsx(rr, { asChild: true, container: s, children: u }) }) });
};
Oy.displayName = jf;
var en = "MenuContent", [z_, Uf] = el(en), zy = d.forwardRef((l, i) => {
  const r = Ny(en, l.__scopeMenu), { forceMount: u = r.forceMount, ...s } = l, f = Ta(en, l.__scopeMenu), m = dr(en, l.__scopeMenu);
  return E.jsx(tr.Provider, { scope: l.__scopeMenu, children: E.jsx(Ut, { present: u || f.open, children: E.jsx(tr.Slot, { scope: l.__scopeMenu, children: m.modal ? E.jsx(j_, { ...s, ref: i }) : E.jsx(U_, { ...s, ref: i }) }) }) });
}), j_ = d.forwardRef((l, i) => {
  const r = Ta(en, l.__scopeMenu), u = d.useRef(null), s = he(i, u);
  return d.useEffect(() => {
    const f = u.current;
    if (f) return ki(f);
  }, []), E.jsx(Bf, { ...l, ref: s, trapFocus: r.open, disableOutsidePointerEvents: r.open, disableOutsideScroll: true, onFocusOutside: W(l.onFocusOutside, (f) => f.preventDefault(), { checkForDefaultPrevented: false }), onDismiss: () => r.onOpenChange(false) });
}), U_ = d.forwardRef((l, i) => {
  const r = Ta(en, l.__scopeMenu);
  return E.jsx(Bf, { ...l, ref: i, trapFocus: false, disableOutsidePointerEvents: false, disableOutsideScroll: false, onDismiss: () => r.onOpenChange(false) });
}), B_ = Qa("MenuContent.ScrollLock"), Bf = d.forwardRef((l, i) => {
  const { __scopeMenu: r, loop: u = false, trapFocus: s, onOpenAutoFocus: f, onCloseAutoFocus: m, disableOutsidePointerEvents: h, onEntryFocus: y, onEscapeKeyDown: g, onPointerDownOutside: b, onFocusOutside: v, onInteractOutside: C, onDismiss: w, disableOutsideScroll: N, ...x } = l, T = Ta(en, r), M = dr(en, r), O = fr(r), j = My(r), Y = M_(r), [$, J] = d.useState(null), V = d.useRef(null), ae = he(i, V, T.onContentChange), ye = d.useRef(0), me = d.useRef(""), ce = d.useRef(0), de = d.useRef(null), pe = d.useRef("right"), be = d.useRef(0), Se = N ? ir : d.Fragment, I = N ? { as: B_, allowPinchZoom: true } : void 0, ee = (ne) => {
    var _a2, _b2;
    const Ee = me.current + ne, R = Y().filter((K) => !K.disabled), A = document.activeElement, H = (_a2 = R.find((K) => K.ref.current === A)) == null ? void 0 : _a2.textValue, X = R.map((K) => K.textValue), P = Q_(X, Ee, H), F = (_b2 = R.find((K) => K.textValue === P)) == null ? void 0 : _b2.ref.current;
    (function K(te) {
      me.current = te, window.clearTimeout(ye.current), te !== "" && (ye.current = window.setTimeout(() => K(""), 1e3));
    })(Ee), F && setTimeout(() => F.focus());
  };
  d.useEffect(() => () => window.clearTimeout(ye.current), []), Qi();
  const le = d.useCallback((ne) => {
    var _a2, _b2;
    return pe.current === ((_a2 = de.current) == null ? void 0 : _a2.side) && $_(ne, (_b2 = de.current) == null ? void 0 : _b2.area);
  }, []);
  return E.jsx(z_, { scope: r, searchRef: me, onItemEnter: d.useCallback((ne) => {
    le(ne) && ne.preventDefault();
  }, [le]), onItemLeave: d.useCallback((ne) => {
    var _a2;
    le(ne) || ((_a2 = V.current) == null ? void 0 : _a2.focus(), J(null));
  }, [le]), onTriggerLeave: d.useCallback((ne) => {
    le(ne) && ne.preventDefault();
  }, [le]), pointerGraceTimerRef: ce, onPointerGraceIntentChange: d.useCallback((ne) => {
    de.current = ne;
  }, []), children: E.jsx(Se, { ...I, children: E.jsx(or, { asChild: true, trapped: s, onMountAutoFocus: W(f, (ne) => {
    var _a2;
    ne.preventDefault(), (_a2 = V.current) == null ? void 0 : _a2.focus({ preventScroll: true });
  }), onUnmountAutoFocus: m, children: E.jsx($l, { asChild: true, disableOutsidePointerEvents: h, onEscapeKeyDown: g, onPointerDownOutside: b, onFocusOutside: v, onInteractOutside: C, onDismiss: w, children: E.jsx(Af, { asChild: true, ...j, dir: M.dir, orientation: "vertical", loop: u, currentTabStopId: $, onCurrentTabStopIdChange: J, onEntryFocus: W(y, (ne) => {
    M.isUsingKeyboardRef.current || ne.preventDefault();
  }), preventScrollOnEntryFocus: true, children: E.jsx(Wi, { role: "menu", "aria-orientation": "vertical", "data-state": $y(T.open), "data-radix-menu-content": "", dir: M.dir, ...O, ...x, ref: ae, style: { outline: "none", ...x.style }, onKeyDown: W(x.onKeyDown, (ne) => {
    const R = ne.target.closest("[data-radix-menu-content]") === ne.currentTarget, A = ne.ctrlKey || ne.altKey || ne.metaKey, H = ne.key.length === 1;
    R && (ne.key === "Tab" && ne.preventDefault(), !A && H && ee(ne.key));
    const X = V.current;
    if (ne.target !== X || !__.includes(ne.key)) return;
    ne.preventDefault();
    const F = Y().filter((K) => !K.disabled).map((K) => K.ref.current);
    Ay.includes(ne.key) && F.reverse(), P_(F);
  }), onBlur: W(l.onBlur, (ne) => {
    ne.currentTarget.contains(ne.target) || (window.clearTimeout(ye.current), me.current = "");
  }), onPointerMove: W(l.onPointerMove, nr((ne) => {
    const Ee = ne.target, R = be.current !== ne.clientX;
    if (ne.currentTarget.contains(Ee) && R) {
      const A = ne.clientX > be.current ? "right" : "left";
      pe.current = A, be.current = ne.clientX;
    }
  })) }) }) }) }) }) });
});
zy.displayName = en;
var H_ = "MenuGroup", Hf = d.forwardRef((l, i) => {
  const { __scopeMenu: r, ...u } = l;
  return E.jsx(ue.div, { role: "group", ...u, ref: i });
});
Hf.displayName = H_;
var L_ = "MenuLabel", jy = d.forwardRef((l, i) => {
  const { __scopeMenu: r, ...u } = l;
  return E.jsx(ue.div, { ...u, ref: i });
});
jy.displayName = L_;
var Ii = "MenuItem", xh = "menu.itemSelect", cu = d.forwardRef((l, i) => {
  const { disabled: r = false, onSelect: u, ...s } = l, f = d.useRef(null), m = dr(Ii, l.__scopeMenu), h = Uf(Ii, l.__scopeMenu), y = he(i, f), g = d.useRef(false), b = () => {
    const v = f.current;
    if (!r && v) {
      const C = new CustomEvent(xh, { bubbles: true, cancelable: true });
      v.addEventListener(xh, (w) => u == null ? void 0 : u(w), { once: true }), Hh(v, C), C.defaultPrevented ? g.current = false : m.onClose();
    }
  };
  return E.jsx(Uy, { ...s, ref: y, disabled: r, onClick: W(l.onClick, b), onPointerDown: (v) => {
    var _a2;
    (_a2 = l.onPointerDown) == null ? void 0 : _a2.call(l, v), g.current = true;
  }, onPointerUp: W(l.onPointerUp, (v) => {
    var _a2;
    g.current || ((_a2 = v.currentTarget) == null ? void 0 : _a2.click());
  }), onKeyDown: W(l.onKeyDown, (v) => {
    const C = h.searchRef.current !== "";
    r || C && v.key === " " || cf.includes(v.key) && (v.currentTarget.click(), v.preventDefault());
  }) });
});
cu.displayName = Ii;
var Uy = d.forwardRef((l, i) => {
  const { __scopeMenu: r, disabled: u = false, textValue: s, ...f } = l, m = Uf(Ii, r), h = My(r), y = d.useRef(null), g = he(i, y), [b, v] = d.useState(false), [C, w] = d.useState("");
  return d.useEffect(() => {
    const N = y.current;
    N && w((N.textContent ?? "").trim());
  }, [f.children]), E.jsx(tr.ItemSlot, { scope: r, disabled: u, textValue: s ?? C, children: E.jsx(Mf, { asChild: true, ...h, focusable: !u, children: E.jsx(ue.div, { role: "menuitem", "data-highlighted": b ? "" : void 0, "aria-disabled": u || void 0, "data-disabled": u ? "" : void 0, ...f, ref: g, onPointerMove: W(l.onPointerMove, nr((N) => {
    u ? m.onItemLeave(N) : (m.onItemEnter(N), N.defaultPrevented || N.currentTarget.focus({ preventScroll: true }));
  })), onPointerLeave: W(l.onPointerLeave, nr((N) => m.onItemLeave(N))), onFocus: W(l.onFocus, () => v(true)), onBlur: W(l.onBlur, () => v(false)) }) }) });
}), G_ = "MenuCheckboxItem", By = d.forwardRef((l, i) => {
  const { checked: r = false, onCheckedChange: u, ...s } = l;
  return E.jsx(Vy, { scope: l.__scopeMenu, checked: r, children: E.jsx(cu, { role: "menuitemcheckbox", "aria-checked": qi(r) ? "mixed" : r, ...s, ref: i, "data-state": Yf(r), onSelect: W(s.onSelect, () => u == null ? void 0 : u(qi(r) ? true : !r), { checkForDefaultPrevented: false }) }) });
});
By.displayName = G_;
var Hy = "MenuRadioGroup", [Y_, V_] = el(Hy, { value: void 0, onValueChange: () => {
} }), Ly = d.forwardRef((l, i) => {
  const { value: r, onValueChange: u, ...s } = l, f = cn(u);
  return E.jsx(Y_, { scope: l.__scopeMenu, value: r, onValueChange: f, children: E.jsx(Hf, { ...s, ref: i }) });
});
Ly.displayName = Hy;
var Gy = "MenuRadioItem", Yy = d.forwardRef((l, i) => {
  const { value: r, ...u } = l, s = V_(Gy, l.__scopeMenu), f = r === s.value;
  return E.jsx(Vy, { scope: l.__scopeMenu, checked: f, children: E.jsx(cu, { role: "menuitemradio", "aria-checked": f, ...u, ref: i, "data-state": Yf(f), onSelect: W(u.onSelect, () => {
    var _a2;
    return (_a2 = s.onValueChange) == null ? void 0 : _a2.call(s, r);
  }, { checkForDefaultPrevented: false }) }) });
});
Yy.displayName = Gy;
var Lf = "MenuItemIndicator", [Vy, I_] = el(Lf, { checked: false }), Iy = d.forwardRef((l, i) => {
  const { __scopeMenu: r, forceMount: u, ...s } = l, f = I_(Lf, r);
  return E.jsx(Ut, { present: u || qi(f.checked) || f.checked === true, children: E.jsx(ue.span, { ...s, ref: i, "data-state": Yf(f.checked) }) });
});
Iy.displayName = Lf;
var q_ = "MenuSeparator", qy = d.forwardRef((l, i) => {
  const { __scopeMenu: r, ...u } = l;
  return E.jsx(ue.div, { role: "separator", "aria-orientation": "horizontal", ...u, ref: i });
});
qy.displayName = q_;
var K_ = "MenuArrow", Ky = d.forwardRef((l, i) => {
  const { __scopeMenu: r, ...u } = l, s = fr(r);
  return E.jsx(eu, { ...s, ...u, ref: i });
});
Ky.displayName = K_;
var Gf = "MenuSub", [X_, Xy] = el(Gf), Py = (l) => {
  const { __scopeMenu: i, children: r, open: u = false, onOpenChange: s } = l, f = Ta(Gf, i), m = fr(i), [h, y] = d.useState(null), [g, b] = d.useState(null), v = cn(s);
  return d.useEffect(() => (f.open === false && v(false), () => v(false)), [f.open, v]), E.jsx(Fi, { ...m, children: E.jsx(wy, { scope: i, open: u, onOpenChange: v, content: g, onContentChange: b, children: E.jsx(X_, { scope: i, contentId: Xe(), triggerId: Xe(), trigger: h, onTriggerChange: y, children: r }) }) });
};
Py.displayName = Gf;
var er = "MenuSubTrigger", ky = d.forwardRef((l, i) => {
  const r = Ta(er, l.__scopeMenu), u = dr(er, l.__scopeMenu), s = Xy(er, l.__scopeMenu), f = Uf(er, l.__scopeMenu), m = d.useRef(null), { pointerGraceTimerRef: h, onPointerGraceIntentChange: y } = f, g = { __scopeMenu: l.__scopeMenu }, b = d.useCallback(() => {
    m.current && window.clearTimeout(m.current), m.current = null;
  }, []);
  return d.useEffect(() => b, [b]), d.useEffect(() => {
    const v = h.current;
    return () => {
      window.clearTimeout(v), y(null);
    };
  }, [h, y]), E.jsx(zf, { asChild: true, ...g, children: E.jsx(Uy, { id: s.triggerId, "aria-haspopup": "menu", "aria-expanded": r.open, "aria-controls": s.contentId, "data-state": $y(r.open), ...l, ref: Sn(i, s.onTriggerChange), onClick: (v) => {
    var _a2;
    (_a2 = l.onClick) == null ? void 0 : _a2.call(l, v), !(l.disabled || v.defaultPrevented) && (v.currentTarget.focus(), r.open || r.onOpenChange(true));
  }, onPointerMove: W(l.onPointerMove, nr((v) => {
    f.onItemEnter(v), !v.defaultPrevented && !l.disabled && !r.open && !m.current && (f.onPointerGraceIntentChange(null), m.current = window.setTimeout(() => {
      r.onOpenChange(true), b();
    }, 100));
  })), onPointerLeave: W(l.onPointerLeave, nr((v) => {
    var _a2, _b2;
    b();
    const C = (_a2 = r.content) == null ? void 0 : _a2.getBoundingClientRect();
    if (C) {
      const w = (_b2 = r.content) == null ? void 0 : _b2.dataset.side, N = w === "right", x = N ? -5 : 5, T = C[N ? "left" : "right"], M = C[N ? "right" : "left"];
      f.onPointerGraceIntentChange({ area: [{ x: v.clientX + x, y: v.clientY }, { x: T, y: C.top }, { x: M, y: C.top }, { x: M, y: C.bottom }, { x: T, y: C.bottom }], side: w }), window.clearTimeout(h.current), h.current = window.setTimeout(() => f.onPointerGraceIntentChange(null), 300);
    } else {
      if (f.onTriggerLeave(v), v.defaultPrevented) return;
      f.onPointerGraceIntentChange(null);
    }
  })), onKeyDown: W(l.onKeyDown, (v) => {
    var _a2;
    const C = f.searchRef.current !== "";
    l.disabled || C && v.key === " " || R_[u.dir].includes(v.key) && (r.onOpenChange(true), (_a2 = r.content) == null ? void 0 : _a2.focus(), v.preventDefault());
  }) }) });
});
ky.displayName = er;
var Qy = "MenuSubContent", Zy = d.forwardRef((l, i) => {
  const r = Ny(en, l.__scopeMenu), { forceMount: u = r.forceMount, ...s } = l, f = Ta(en, l.__scopeMenu), m = dr(en, l.__scopeMenu), h = Xy(Qy, l.__scopeMenu), y = d.useRef(null), g = he(i, y);
  return E.jsx(tr.Provider, { scope: l.__scopeMenu, children: E.jsx(Ut, { present: u || f.open, children: E.jsx(tr.Slot, { scope: l.__scopeMenu, children: E.jsx(Bf, { id: h.contentId, "aria-labelledby": h.triggerId, ...s, ref: g, align: "start", side: m.dir === "rtl" ? "left" : "right", disableOutsidePointerEvents: false, disableOutsideScroll: false, trapFocus: false, onOpenAutoFocus: (b) => {
    var _a2;
    m.isUsingKeyboardRef.current && ((_a2 = y.current) == null ? void 0 : _a2.focus()), b.preventDefault();
  }, onCloseAutoFocus: (b) => b.preventDefault(), onFocusOutside: W(l.onFocusOutside, (b) => {
    b.target !== h.trigger && f.onOpenChange(false);
  }), onEscapeKeyDown: W(l.onEscapeKeyDown, (b) => {
    m.onClose(), b.preventDefault();
  }), onKeyDown: W(l.onKeyDown, (b) => {
    var _a2;
    const v = b.currentTarget.contains(b.target), C = A_[m.dir].includes(b.key);
    v && C && (f.onOpenChange(false), (_a2 = h.trigger) == null ? void 0 : _a2.focus(), b.preventDefault());
  }) }) }) }) });
});
Zy.displayName = Qy;
function $y(l) {
  return l ? "open" : "closed";
}
function qi(l) {
  return l === "indeterminate";
}
function Yf(l) {
  return qi(l) ? "indeterminate" : l ? "checked" : "unchecked";
}
function P_(l) {
  const i = document.activeElement;
  for (const r of l) if (r === i || (r.focus(), document.activeElement !== i)) return;
}
function k_(l, i) {
  return l.map((r, u) => l[(i + u) % l.length]);
}
function Q_(l, i, r) {
  const s = i.length > 1 && Array.from(i).every((g) => g === i[0]) ? i[0] : i, f = r ? l.indexOf(r) : -1;
  let m = k_(l, Math.max(f, 0));
  s.length === 1 && (m = m.filter((g) => g !== r));
  const y = m.find((g) => g.toLowerCase().startsWith(s.toLowerCase()));
  return y !== r ? y : void 0;
}
function Z_(l, i) {
  const { x: r, y: u } = l;
  let s = false;
  for (let f = 0, m = i.length - 1; f < i.length; m = f++) {
    const h = i[f], y = i[m], g = h.x, b = h.y, v = y.x, C = y.y;
    b > u != C > u && r < (v - g) * (u - b) / (C - b) + g && (s = !s);
  }
  return s;
}
function $_(l, i) {
  if (!i) return false;
  const r = { x: l.clientX, y: l.clientY };
  return Z_(r, i);
}
function nr(l) {
  return (i) => i.pointerType === "mouse" ? l(i) : void 0;
}
var Jy = Dy, Fy = zf, Wy = Oy, e0 = zy, t0 = Hf, n0 = jy, a0 = cu, l0 = By, o0 = Ly, r0 = Yy, i0 = Iy, u0 = qy, c0 = Ky, J_ = Py, s0 = ky, f0 = Zy, pr = "Menubar", [sf, F_, W_] = Jl(pr), [d0] = pt(pr, [W_, Wl]), gt = Of(), p0 = Wl(), [eR, Vf] = d0(pr), m0 = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, value: u, onValueChange: s, defaultValue: f, loop: m = true, dir: h, ...y } = l, g = Wa(h), b = p0(r), [v, C] = xt({ prop: u, onChange: s, defaultProp: f ?? "", caller: pr }), [w, N] = d.useState(null);
  return E.jsx(eR, { scope: r, value: v, onMenuOpen: d.useCallback((x) => {
    C(x), N(x);
  }, [C]), onMenuClose: d.useCallback(() => C(""), [C]), onMenuToggle: d.useCallback((x) => {
    C((T) => T ? "" : x), N(x);
  }, [C]), dir: g, loop: m, children: E.jsx(sf.Provider, { scope: r, children: E.jsx(sf.Slot, { scope: r, children: E.jsx(Af, { asChild: true, ...b, orientation: "horizontal", loop: m, dir: g, currentTabStopId: w, onCurrentTabStopIdChange: N, children: E.jsx(ue.div, { role: "menubar", ...y, ref: i }) }) }) }) });
});
m0.displayName = pr;
var If = "MenubarMenu", [tR, v0] = d0(If), h0 = (l) => {
  const { __scopeMenubar: i, value: r, ...u } = l, s = Xe(), f = r || s || "LEGACY_REACT_AUTO_VALUE", m = Vf(If, i), h = gt(i), y = d.useRef(null), g = d.useRef(false), b = m.value === f;
  return d.useEffect(() => {
    b || (g.current = false);
  }, [b]), E.jsx(tR, { scope: i, value: f, triggerId: Xe(), triggerRef: y, contentId: Xe(), wasKeyboardTriggerOpenRef: g, children: E.jsx(Jy, { ...h, open: b, onOpenChange: (v) => {
    v || m.onMenuClose();
  }, modal: false, dir: m.dir, ...u }) });
};
h0.displayName = If;
var ff = "MenubarTrigger", g0 = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, disabled: u = false, ...s } = l, f = p0(r), m = gt(r), h = Vf(ff, r), y = v0(ff, r), g = d.useRef(null), b = he(i, g, y.triggerRef), [v, C] = d.useState(false), w = h.value === y.value;
  return E.jsx(sf.ItemSlot, { scope: r, value: y.value, disabled: u, children: E.jsx(Mf, { asChild: true, ...f, focusable: !u, tabStopId: y.value, children: E.jsx(Fy, { asChild: true, ...m, children: E.jsx(ue.button, { type: "button", role: "menuitem", id: y.triggerId, "aria-haspopup": "menu", "aria-expanded": w, "aria-controls": w ? y.contentId : void 0, "data-highlighted": v ? "" : void 0, "data-state": w ? "open" : "closed", "data-disabled": u ? "" : void 0, disabled: u, ...s, ref: b, onPointerDown: W(l.onPointerDown, (N) => {
    !u && N.button === 0 && N.ctrlKey === false && (h.onMenuOpen(y.value), w || N.preventDefault());
  }), onPointerEnter: W(l.onPointerEnter, () => {
    var _a2;
    h.value && !w && (h.onMenuOpen(y.value), (_a2 = g.current) == null ? void 0 : _a2.focus());
  }), onKeyDown: W(l.onKeyDown, (N) => {
    u || (["Enter", " "].includes(N.key) && h.onMenuToggle(y.value), N.key === "ArrowDown" && h.onMenuOpen(y.value), ["Enter", " ", "ArrowDown"].includes(N.key) && (y.wasKeyboardTriggerOpenRef.current = true, N.preventDefault()));
  }), onFocus: W(l.onFocus, () => C(true)), onBlur: W(l.onBlur, () => C(false)) }) }) }) });
});
g0.displayName = ff;
var nR = "MenubarPortal", y0 = (l) => {
  const { __scopeMenubar: i, ...r } = l, u = gt(i);
  return E.jsx(Wy, { ...u, ...r });
};
y0.displayName = nR;
var df = "MenubarContent", b0 = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, align: u = "start", ...s } = l, f = gt(r), m = Vf(df, r), h = v0(df, r), y = F_(r), g = d.useRef(false);
  return E.jsx(e0, { id: h.contentId, "aria-labelledby": h.triggerId, "data-radix-menubar-content": "", ...f, ...s, ref: i, align: u, onCloseAutoFocus: W(l.onCloseAutoFocus, (b) => {
    var _a2;
    !m.value && !g.current && ((_a2 = h.triggerRef.current) == null ? void 0 : _a2.focus()), g.current = false, b.preventDefault();
  }), onFocusOutside: W(l.onFocusOutside, (b) => {
    const v = b.target;
    y().some((w) => {
      var _a2;
      return (_a2 = w.ref.current) == null ? void 0 : _a2.contains(v);
    }) && b.preventDefault();
  }), onInteractOutside: W(l.onInteractOutside, () => {
    g.current = true;
  }), onEntryFocus: (b) => {
    h.wasKeyboardTriggerOpenRef.current || b.preventDefault();
  }, onKeyDown: W(l.onKeyDown, (b) => {
    if (["ArrowRight", "ArrowLeft"].includes(b.key)) {
      const v = b.target, C = v.hasAttribute("data-radix-menubar-subtrigger"), w = v.closest("[data-radix-menubar-content]") !== b.currentTarget, x = (m.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === b.key;
      if (!x && C || w && x) return;
      let O = y().filter(($) => !$.disabled).map(($) => $.value);
      x && O.reverse();
      const j = O.indexOf(h.value);
      O = m.loop ? gR(O, j + 1) : O.slice(j + 1);
      const [Y] = O;
      Y && m.onMenuOpen(Y);
    }
  }, { checkForDefaultPrevented: false }), style: { ...l.style, "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-menubar-content-available-width": "var(--radix-popper-available-width)", "--radix-menubar-content-available-height": "var(--radix-popper-available-height)", "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)", "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)" } });
});
b0.displayName = df;
var aR = "MenubarGroup", lR = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...u } = l, s = gt(r);
  return E.jsx(t0, { ...s, ...u, ref: i });
});
lR.displayName = aR;
var oR = "MenubarLabel", rR = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...u } = l, s = gt(r);
  return E.jsx(n0, { ...s, ...u, ref: i });
});
rR.displayName = oR;
var iR = "MenubarItem", S0 = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...u } = l, s = gt(r);
  return E.jsx(a0, { ...s, ...u, ref: i });
});
S0.displayName = iR;
var uR = "MenubarCheckboxItem", E0 = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...u } = l, s = gt(r);
  return E.jsx(l0, { ...s, ...u, ref: i });
});
E0.displayName = uR;
var cR = "MenubarRadioGroup", x0 = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...u } = l, s = gt(r);
  return E.jsx(o0, { ...s, ...u, ref: i });
});
x0.displayName = cR;
var sR = "MenubarRadioItem", C0 = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...u } = l, s = gt(r);
  return E.jsx(r0, { ...s, ...u, ref: i });
});
C0.displayName = sR;
var fR = "MenubarItemIndicator", T0 = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...u } = l, s = gt(r);
  return E.jsx(i0, { ...s, ...u, ref: i });
});
T0.displayName = fR;
var dR = "MenubarSeparator", _0 = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...u } = l, s = gt(r);
  return E.jsx(u0, { ...s, ...u, ref: i });
});
_0.displayName = dR;
var pR = "MenubarArrow", mR = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...u } = l, s = gt(r);
  return E.jsx(c0, { ...s, ...u, ref: i });
});
mR.displayName = pR;
var R0 = "MenubarSub", A0 = (l) => {
  const { __scopeMenubar: i, children: r, open: u, onOpenChange: s, defaultOpen: f } = l, m = gt(i), [h, y] = xt({ prop: u, defaultProp: f ?? false, onChange: s, caller: R0 });
  return E.jsx(J_, { ...m, open: h, onOpenChange: y, children: r });
};
A0.displayName = R0;
var vR = "MenubarSubTrigger", M0 = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...u } = l, s = gt(r);
  return E.jsx(s0, { "data-radix-menubar-subtrigger": "", ...s, ...u, ref: i });
});
M0.displayName = vR;
var hR = "MenubarSubContent", w0 = d.forwardRef((l, i) => {
  const { __scopeMenubar: r, ...u } = l, s = gt(r);
  return E.jsx(f0, { ...s, "data-radix-menubar-content": "", ...u, ref: i, style: { ...l.style, "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-menubar-content-available-width": "var(--radix-popper-available-width)", "--radix-menubar-content-available-height": "var(--radix-popper-available-height)", "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)", "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)" } });
});
w0.displayName = hR;
function gR(l, i) {
  return l.map((r, u) => l[(i + u) % l.length]);
}
var ew = m0, tw = h0, nw = g0, aw = y0, lw = b0, ow = S0, rw = E0, iw = x0, uw = C0, cw = T0, sw = _0, fw = A0, dw = M0, pw = w0, D0 = "AlertDialog", [yR] = pt(D0, [Qh]), In = Qh(), N0 = (l) => {
  const { __scopeAlertDialog: i, ...r } = l, u = In(i);
  return E.jsx(sg, { ...u, ...r, modal: true });
};
N0.displayName = D0;
var bR = "AlertDialogTrigger", O0 = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, ...u } = l, s = In(r);
  return E.jsx(ZC, { ...s, ...u, ref: i });
});
O0.displayName = bR;
var SR = "AlertDialogPortal", z0 = (l) => {
  const { __scopeAlertDialog: i, ...r } = l, u = In(i);
  return E.jsx(fg, { ...u, ...r });
};
z0.displayName = SR;
var ER = "AlertDialogOverlay", j0 = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, ...u } = l, s = In(r);
  return E.jsx(dg, { ...s, ...u, ref: i });
});
j0.displayName = ER;
var kl = "AlertDialogContent", [xR, CR] = yR(kl), TR = Bh("AlertDialogContent"), U0 = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, children: u, ...s } = l, f = In(r), m = d.useRef(null), h = he(i, m), y = d.useRef(null);
  return E.jsx(XC, { contentName: kl, titleName: B0, docsSlug: "alert-dialog", children: E.jsx(xR, { scope: r, cancelRef: y, children: E.jsxs(pg, { role: "alertdialog", ...f, ...s, ref: h, onOpenAutoFocus: W(s.onOpenAutoFocus, (g) => {
    var _a2;
    g.preventDefault(), (_a2 = y.current) == null ? void 0 : _a2.focus({ preventScroll: true });
  }), onPointerDownOutside: (g) => g.preventDefault(), onInteractOutside: (g) => g.preventDefault(), children: [E.jsx(TR, { children: u }), E.jsx(RR, { contentRef: m })] }) }) });
});
U0.displayName = kl;
var B0 = "AlertDialogTitle", H0 = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, ...u } = l, s = In(r);
  return E.jsx($C, { ...s, ...u, ref: i });
});
H0.displayName = B0;
var L0 = "AlertDialogDescription", G0 = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, ...u } = l, s = In(r);
  return E.jsx(JC, { ...s, ...u, ref: i });
});
G0.displayName = L0;
var _R = "AlertDialogAction", Y0 = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, ...u } = l, s = In(r);
  return E.jsx(mg, { ...s, ...u, ref: i });
});
Y0.displayName = _R;
var V0 = "AlertDialogCancel", I0 = d.forwardRef((l, i) => {
  const { __scopeAlertDialog: r, ...u } = l, { cancelRef: s } = CR(V0, r), f = In(r), m = he(i, s);
  return E.jsx(mg, { ...f, ...u, ref: m });
});
I0.displayName = V0;
var RR = ({ contentRef: l }) => {
  const i = `\`${kl}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${kl}\` by passing a \`${L0}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${kl}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return d.useEffect(() => {
    var _a2;
    document.getElementById((_a2 = l.current) == null ? void 0 : _a2.getAttribute("aria-describedby")) || console.warn(i);
  }, [i, l]), null;
}, mw = N0, vw = O0, hw = z0, gw = j0, yw = U0, bw = Y0, Sw = I0, Ew = H0, xw = G0;
const Ki = {}, qf = (l) => typeof l == "object" && l !== null, AR = (l) => qf(l) && !su.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer) && !(l instanceof Promise), q0 = (l, i) => {
  const r = Ch.get(l);
  if ((r == null ? void 0 : r[0]) === i) return r[1];
  const u = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
  return Xv(u, true), Ch.set(l, [i, u]), Reflect.ownKeys(l).forEach((s) => {
    if (Object.getOwnPropertyDescriptor(u, s)) return;
    const f = Reflect.get(l, s), { enumerable: m } = Reflect.getOwnPropertyDescriptor(l, s), h = { value: f, enumerable: m, configurable: true };
    if (su.has(f)) Xv(f, false);
    else if (ba.has(f)) {
      const [y, g] = ba.get(f);
      h.value = q0(y, g());
    }
    Object.defineProperty(u, s, h);
  }), Object.preventExtensions(u);
}, MR = (l, i, r, u) => ({ deleteProperty(s, f) {
  Reflect.get(s, f), r(f);
  const m = Reflect.deleteProperty(s, f);
  return m && u(void 0), m;
}, set(s, f, m, h) {
  const y = !l() && Reflect.has(s, f), g = Reflect.get(s, f, h);
  if (y && (Th(g, m) || Xi.has(m) && Th(g, Xi.get(m)))) return true;
  r(f), qf(m) && (m = EE(m) || m);
  const b = !ba.has(m) && DR(m) ? zR(m) : m;
  return i(f, b), Reflect.set(s, f, b, h), u(void 0), true;
} }), ba = /* @__PURE__ */ new WeakMap(), su = /* @__PURE__ */ new WeakSet(), Ch = /* @__PURE__ */ new WeakMap(), ks = [1], Xi = /* @__PURE__ */ new WeakMap();
let Th = Object.is, wR = (l, i) => new Proxy(l, i), DR = AR, NR = q0, OR = MR;
function zR(l = {}) {
  if (!qf(l)) throw new Error("object required");
  const i = Xi.get(l);
  if (i) return i;
  let r = ks[0];
  const u = /* @__PURE__ */ new Set(), s = (T, M = ++ks[0]) => {
    r !== M && (f = r = M, u.forEach((O) => O(T, M)));
  };
  let f = r;
  const m = (T = ks[0]) => (f !== T && (f = T, y.forEach(([M]) => {
    const O = M[1](T);
    O > r && (r = O);
  })), r), h = (T) => (M, O) => {
    let j;
    M && (j = [...M], j[1] = [T, ...j[1]]), s(j, O);
  }, y = /* @__PURE__ */ new Map(), g = (T, M) => {
    const O = !su.has(M) && ba.get(M);
    if (O) {
      if ((Ki ? "production" : void 0) !== "production" && y.has(T)) throw new Error("prop listener already exists");
      if (u.size) {
        const j = O[2](h(T));
        y.set(T, [O, j]);
      } else y.set(T, [O]);
    }
  }, b = (T) => {
    var M;
    const O = y.get(T);
    O && (y.delete(T), (M = O[1]) == null || M.call(O));
  }, v = (T) => (u.add(T), u.size === 1 && y.forEach(([O, j], Y) => {
    if ((Ki ? "production" : void 0) !== "production" && j) throw new Error("remove already exists");
    const $ = O[2](h(Y));
    y.set(Y, [O, $]);
  }), () => {
    u.delete(T), u.size === 0 && y.forEach(([O, j], Y) => {
      j && (j(), y.set(Y, [O]));
    });
  });
  let C = true;
  const w = OR(() => C, g, b, s), N = wR(l, w);
  Xi.set(l, N);
  const x = [l, m, v];
  return ba.set(N, x), Reflect.ownKeys(l).forEach((T) => {
    const M = Object.getOwnPropertyDescriptor(l, T);
    "value" in M && M.writable && (N[T] = l[T]);
  }), C = false, N;
}
function Cw(l) {
  const i = ba.get(l);
  return i == null ? void 0 : i[1]();
}
function jR(l, i, r) {
  const u = ba.get(l);
  (Ki ? "production" : void 0) !== "production" && !u && console.warn("Please use proxy object");
  let s;
  const f = [], m = u[2];
  let h = false;
  const g = m((b) => {
    b && f.push(b), s || (s = Promise.resolve().then(() => {
      s = void 0, h && i(f.splice(0));
    }));
  });
  return h = true, () => {
    h = false, g();
  };
}
function _h(l) {
  const i = ba.get(l);
  (Ki ? "production" : void 0) !== "production" && !i && console.warn("Please use proxy object");
  const [r, u] = i;
  return NR(r, u());
}
function Tw(l) {
  return su.add(l), l;
}
const UR = {}, BR = (l, i) => {
  const r = d.useRef(void 0);
  d.useEffect(() => {
    r.current = TE(l, i);
  }), d.useDebugValue(r.current);
}, HR = BR, LR = /* @__PURE__ */ new WeakMap();
function _w(l, i) {
  const u = d.useMemo(() => l && /* @__PURE__ */ new WeakMap(), [l]), s = d.useRef(void 0), f = d.useRef(false), m = d.useSyncExternalStore(d.useCallback((y) => {
    f.current = true;
    const g = jR(l, y);
    return y(), () => {
      g(), f.current = false;
    };
  }, [l, void 0]), () => {
    const y = _h(l);
    try {
      if (f.current && s.current && !xE(s.current, y, u, /* @__PURE__ */ new WeakMap())) return s.current;
    } catch {
    }
    return y;
  }, () => _h(l));
  d.useLayoutEffect(() => {
    s.current = m;
  }), (UR ? "production" : void 0) !== "production" && HR(m, u);
  const h = d.useMemo(() => /* @__PURE__ */ new WeakMap(), []);
  return CE(m, u, h, LR);
}
var K0 = ["PageUp", "PageDown"], X0 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], P0 = { "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"], "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"] }, eo = "Slider", [pf, GR, YR] = Jl(eo), [k0] = pt(eo, [YR]), [VR, fu] = k0(eo), Q0 = d.forwardRef((l, i) => {
  const { name: r, min: u = 0, max: s = 100, step: f = 1, orientation: m = "horizontal", disabled: h = false, minStepsBetweenThumbs: y = 0, defaultValue: g = [u], value: b, onValueChange: v = () => {
  }, onValueCommit: C = () => {
  }, inverted: w = false, form: N, ...x } = l, T = d.useRef(/* @__PURE__ */ new Set()), M = d.useRef(0), j = m === "horizontal" ? IR : qR, [Y = [], $] = xt({ prop: b, defaultProp: g, onChange: (ce) => {
    var _a2;
    (_a2 = [...T.current][M.current]) == null ? void 0 : _a2.focus(), v(ce);
  } }), J = d.useRef(Y);
  function V(ce) {
    const de = QR(Y, ce);
    me(ce, de);
  }
  function ae(ce) {
    me(ce, M.current);
  }
  function ye() {
    const ce = J.current[M.current];
    Y[M.current] !== ce && C(Y);
  }
  function me(ce, de, { commit: pe } = { commit: false }) {
    const be = FR(f), Se = WR(Math.round((ce - u) / f) * f + u, be), I = Hi(Se, [u, s]);
    $((ee = []) => {
      const le = PR(ee, I, de);
      if (JR(le, y * f)) {
        M.current = le.indexOf(I);
        const ne = String(le) !== String(ee);
        return ne && pe && C(le), ne ? le : ee;
      } else return ee;
    });
  }
  return E.jsx(VR, { scope: l.__scopeSlider, name: r, disabled: h, min: u, max: s, valueIndexToChangeRef: M, thumbs: T.current, values: Y, orientation: m, form: N, children: E.jsx(pf.Provider, { scope: l.__scopeSlider, children: E.jsx(pf.Slot, { scope: l.__scopeSlider, children: E.jsx(j, { "aria-disabled": h, "data-disabled": h ? "" : void 0, ...x, ref: i, onPointerDown: W(x.onPointerDown, () => {
    h || (J.current = Y);
  }), min: u, max: s, inverted: w, onSlideStart: h ? void 0 : V, onSlideMove: h ? void 0 : ae, onSlideEnd: h ? void 0 : ye, onHomeKeyDown: () => !h && me(u, 0, { commit: true }), onEndKeyDown: () => !h && me(s, Y.length - 1, { commit: true }), onStepKeyDown: ({ event: ce, direction: de }) => {
    if (!h) {
      const Se = K0.includes(ce.key) || ce.shiftKey && X0.includes(ce.key) ? 10 : 1, I = M.current, ee = Y[I], le = f * Se * de;
      me(ee + le, I, { commit: true });
    }
  } }) }) }) });
});
Q0.displayName = eo;
var [Z0, $0] = k0(eo, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }), IR = d.forwardRef((l, i) => {
  const { min: r, max: u, dir: s, inverted: f, onSlideStart: m, onSlideMove: h, onSlideEnd: y, onStepKeyDown: g, ...b } = l, [v, C] = d.useState(null), w = he(i, (j) => C(j)), N = d.useRef(void 0), x = Wa(s), T = x === "ltr", M = T && !f || !T && f;
  function O(j) {
    const Y = N.current || v.getBoundingClientRect(), $ = [0, Y.width], V = Kf($, M ? [r, u] : [u, r]);
    return N.current = Y, V(j - Y.left);
  }
  return E.jsx(Z0, { scope: l.__scopeSlider, startEdge: M ? "left" : "right", endEdge: M ? "right" : "left", direction: M ? 1 : -1, size: "width", children: E.jsx(J0, { dir: x, "data-orientation": "horizontal", ...b, ref: w, style: { ...b.style, "--radix-slider-thumb-transform": "translateX(-50%)" }, onSlideStart: (j) => {
    const Y = O(j.clientX);
    m == null ? void 0 : m(Y);
  }, onSlideMove: (j) => {
    const Y = O(j.clientX);
    h == null ? void 0 : h(Y);
  }, onSlideEnd: () => {
    N.current = void 0, y == null ? void 0 : y();
  }, onStepKeyDown: (j) => {
    const $ = P0[M ? "from-left" : "from-right"].includes(j.key);
    g == null ? void 0 : g({ event: j, direction: $ ? -1 : 1 });
  } }) });
}), qR = d.forwardRef((l, i) => {
  const { min: r, max: u, inverted: s, onSlideStart: f, onSlideMove: m, onSlideEnd: h, onStepKeyDown: y, ...g } = l, b = d.useRef(null), v = he(i, b), C = d.useRef(void 0), w = !s;
  function N(x) {
    const T = C.current || b.current.getBoundingClientRect(), M = [0, T.height], j = Kf(M, w ? [u, r] : [r, u]);
    return C.current = T, j(x - T.top);
  }
  return E.jsx(Z0, { scope: l.__scopeSlider, startEdge: w ? "bottom" : "top", endEdge: w ? "top" : "bottom", size: "height", direction: w ? 1 : -1, children: E.jsx(J0, { "data-orientation": "vertical", ...g, ref: v, style: { ...g.style, "--radix-slider-thumb-transform": "translateY(50%)" }, onSlideStart: (x) => {
    const T = N(x.clientY);
    f == null ? void 0 : f(T);
  }, onSlideMove: (x) => {
    const T = N(x.clientY);
    m == null ? void 0 : m(T);
  }, onSlideEnd: () => {
    C.current = void 0, h == null ? void 0 : h();
  }, onStepKeyDown: (x) => {
    const M = P0[w ? "from-bottom" : "from-top"].includes(x.key);
    y == null ? void 0 : y({ event: x, direction: M ? -1 : 1 });
  } }) });
}), J0 = d.forwardRef((l, i) => {
  const { __scopeSlider: r, onSlideStart: u, onSlideMove: s, onSlideEnd: f, onHomeKeyDown: m, onEndKeyDown: h, onStepKeyDown: y, ...g } = l, b = fu(eo, r);
  return E.jsx(ue.span, { ...g, ref: i, onKeyDown: W(l.onKeyDown, (v) => {
    v.key === "Home" ? (m(v), v.preventDefault()) : v.key === "End" ? (h(v), v.preventDefault()) : K0.concat(X0).includes(v.key) && (y(v), v.preventDefault());
  }), onPointerDown: W(l.onPointerDown, (v) => {
    const C = v.target;
    C.setPointerCapture(v.pointerId), v.preventDefault(), b.thumbs.has(C) ? C.focus() : u(v);
  }), onPointerMove: W(l.onPointerMove, (v) => {
    v.target.hasPointerCapture(v.pointerId) && s(v);
  }), onPointerUp: W(l.onPointerUp, (v) => {
    const C = v.target;
    C.hasPointerCapture(v.pointerId) && (C.releasePointerCapture(v.pointerId), f(v));
  }) });
}), F0 = "SliderTrack", W0 = d.forwardRef((l, i) => {
  const { __scopeSlider: r, ...u } = l, s = fu(F0, r);
  return E.jsx(ue.span, { "data-disabled": s.disabled ? "" : void 0, "data-orientation": s.orientation, ...u, ref: i });
});
W0.displayName = F0;
var mf = "SliderRange", eb = d.forwardRef((l, i) => {
  const { __scopeSlider: r, ...u } = l, s = fu(mf, r), f = $0(mf, r), m = d.useRef(null), h = he(i, m), y = s.values.length, g = s.values.map((C) => ab(C, s.min, s.max)), b = y > 1 ? Math.min(...g) : 0, v = 100 - Math.max(...g);
  return E.jsx(ue.span, { "data-orientation": s.orientation, "data-disabled": s.disabled ? "" : void 0, ...u, ref: h, style: { ...l.style, [f.startEdge]: b + "%", [f.endEdge]: v + "%" } });
});
eb.displayName = mf;
var vf = "SliderThumb", tb = d.forwardRef((l, i) => {
  const r = GR(l.__scopeSlider), [u, s] = d.useState(null), f = he(i, (h) => s(h)), m = d.useMemo(() => u ? r().findIndex((h) => h.ref.current === u) : -1, [r, u]);
  return E.jsx(KR, { ...l, ref: f, index: m });
}), KR = d.forwardRef((l, i) => {
  const { __scopeSlider: r, index: u, name: s, ...f } = l, m = fu(vf, r), h = $0(vf, r), [y, g] = d.useState(null), b = he(i, (O) => g(O)), v = y ? m.form || !!y.closest("form") : true, C = Ji(y), w = m.values[u], N = w === void 0 ? 0 : ab(w, m.min, m.max), x = kR(u, m.values.length), T = C == null ? void 0 : C[h.size], M = T ? ZR(T, N, h.direction) : 0;
  return d.useEffect(() => {
    if (y) return m.thumbs.add(y), () => {
      m.thumbs.delete(y);
    };
  }, [y, m.thumbs]), E.jsxs("span", { style: { transform: "var(--radix-slider-thumb-transform)", position: "absolute", [h.startEdge]: `calc(${N}% + ${M}px)` }, children: [E.jsx(pf.ItemSlot, { scope: l.__scopeSlider, children: E.jsx(ue.span, { role: "slider", "aria-label": l["aria-label"] || x, "aria-valuemin": m.min, "aria-valuenow": w, "aria-valuemax": m.max, "aria-orientation": m.orientation, "data-orientation": m.orientation, "data-disabled": m.disabled ? "" : void 0, tabIndex: m.disabled ? void 0 : 0, ...f, ref: b, style: w === void 0 ? { display: "none" } : l.style, onFocus: W(l.onFocus, () => {
    m.valueIndexToChangeRef.current = u;
  }) }) }), v && E.jsx(nb, { name: s ?? (m.name ? m.name + (m.values.length > 1 ? "[]" : "") : void 0), form: m.form, value: w }, u)] });
});
tb.displayName = vf;
var XR = "RadioBubbleInput", nb = d.forwardRef(({ __scopeSlider: l, value: i, ...r }, u) => {
  const s = d.useRef(null), f = he(s, u), m = tu(i);
  return d.useEffect(() => {
    const h = s.current;
    if (!h) return;
    const y = window.HTMLInputElement.prototype, b = Object.getOwnPropertyDescriptor(y, "value").set;
    if (m !== i && b) {
      const v = new Event("input", { bubbles: true });
      b.call(h, i), h.dispatchEvent(v);
    }
  }, [m, i]), E.jsx(ue.input, { style: { display: "none" }, ...r, ref: f, defaultValue: i });
});
nb.displayName = XR;
function PR(l = [], i, r) {
  const u = [...l];
  return u[r] = i, u.sort((s, f) => s - f);
}
function ab(l, i, r) {
  const f = 100 / (r - i) * (l - i);
  return Hi(f, [0, 100]);
}
function kR(l, i) {
  return i > 2 ? `Value ${l + 1} of ${i}` : i === 2 ? ["Minimum", "Maximum"][l] : void 0;
}
function QR(l, i) {
  if (l.length === 1) return 0;
  const r = l.map((s) => Math.abs(s - i)), u = Math.min(...r);
  return r.indexOf(u);
}
function ZR(l, i, r) {
  const u = l / 2, f = Kf([0, 50], [0, u]);
  return (u - f(i) * r) * r;
}
function $R(l) {
  return l.slice(0, -1).map((i, r) => l[r + 1] - i);
}
function JR(l, i) {
  if (i > 0) {
    const r = $R(l);
    return Math.min(...r) >= i;
  }
  return true;
}
function Kf(l, i) {
  return (r) => {
    if (l[0] === l[1] || i[0] === i[1]) return i[0];
    const u = (i[1] - i[0]) / (l[1] - l[0]);
    return i[0] + u * (r - l[0]);
  };
}
function FR(l) {
  return (String(l).split(".")[1] || "").length;
}
function WR(l, i) {
  const r = Math.pow(10, i);
  return Math.round(l * r) / r;
}
var Rw = Q0, Aw = W0, Mw = eb, ww = tb;
const eA = (l) => (i, r, u) => (u.setState = (s, f, ...m) => {
  const h = typeof s == "function" ? _E(s) : s;
  return i(h, f, ...m);
}, l(u.setState, r, u)), Dw = eA;
var du = "Collapsible", [tA, lb] = pt(du), [nA, Xf] = tA(du), ob = d.forwardRef((l, i) => {
  const { __scopeCollapsible: r, open: u, defaultOpen: s, disabled: f, onOpenChange: m, ...h } = l, [y, g] = xt({ prop: u, defaultProp: s ?? false, onChange: m, caller: du });
  return E.jsx(nA, { scope: r, disabled: f, contentId: Xe(), open: y, onOpenToggle: d.useCallback(() => g((b) => !b), [g]), children: E.jsx(ue.div, { "data-state": kf(y), "data-disabled": f ? "" : void 0, ...h, ref: i }) });
});
ob.displayName = du;
var rb = "CollapsibleTrigger", ib = d.forwardRef((l, i) => {
  const { __scopeCollapsible: r, ...u } = l, s = Xf(rb, r);
  return E.jsx(ue.button, { type: "button", "aria-controls": s.contentId, "aria-expanded": s.open || false, "data-state": kf(s.open), "data-disabled": s.disabled ? "" : void 0, disabled: s.disabled, ...u, ref: i, onClick: W(l.onClick, s.onOpenToggle) });
});
ib.displayName = rb;
var Pf = "CollapsibleContent", ub = d.forwardRef((l, i) => {
  const { forceMount: r, ...u } = l, s = Xf(Pf, l.__scopeCollapsible);
  return E.jsx(Ut, { present: r || s.open, children: ({ present: f }) => E.jsx(aA, { ...u, ref: i, present: f }) });
});
ub.displayName = Pf;
var aA = d.forwardRef((l, i) => {
  const { __scopeCollapsible: r, present: u, children: s, ...f } = l, m = Xf(Pf, r), [h, y] = d.useState(u), g = d.useRef(null), b = he(i, g), v = d.useRef(0), C = v.current, w = d.useRef(0), N = w.current, x = m.open || h, T = d.useRef(x), M = d.useRef(void 0);
  return d.useEffect(() => {
    const O = requestAnimationFrame(() => T.current = false);
    return () => cancelAnimationFrame(O);
  }, []), dt(() => {
    const O = g.current;
    if (O) {
      M.current = M.current || { transitionDuration: O.style.transitionDuration, animationName: O.style.animationName }, O.style.transitionDuration = "0s", O.style.animationName = "none";
      const j = O.getBoundingClientRect();
      v.current = j.height, w.current = j.width, T.current || (O.style.transitionDuration = M.current.transitionDuration, O.style.animationName = M.current.animationName), y(u);
    }
  }, [m.open, u]), E.jsx(ue.div, { "data-state": kf(m.open), "data-disabled": m.disabled ? "" : void 0, id: m.contentId, hidden: !x, ...f, ref: b, style: { "--radix-collapsible-content-height": C ? `${C}px` : void 0, "--radix-collapsible-content-width": N ? `${N}px` : void 0, ...l.style }, children: x && s });
});
function kf(l) {
  return l ? "open" : "closed";
}
var lA = ob, oA = ib, rA = ub, fn = "Accordion", iA = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Qf, uA, cA] = Jl(fn), [pu] = pt(fn, [cA, lb]), Zf = lb(), cb = Z.forwardRef((l, i) => {
  const { type: r, ...u } = l, s = u, f = u;
  return E.jsx(Qf.Provider, { scope: l.__scopeAccordion, children: r === "multiple" ? E.jsx(pA, { ...f, ref: i }) : E.jsx(dA, { ...s, ref: i }) });
});
cb.displayName = fn;
var [sb, sA] = pu(fn), [fb, fA] = pu(fn, { collapsible: false }), dA = Z.forwardRef((l, i) => {
  const { value: r, defaultValue: u, onValueChange: s = () => {
  }, collapsible: f = false, ...m } = l, [h, y] = xt({ prop: r, defaultProp: u ?? "", onChange: s, caller: fn });
  return E.jsx(sb, { scope: l.__scopeAccordion, value: Z.useMemo(() => h ? [h] : [], [h]), onItemOpen: y, onItemClose: Z.useCallback(() => f && y(""), [f, y]), children: E.jsx(fb, { scope: l.__scopeAccordion, collapsible: f, children: E.jsx(db, { ...m, ref: i }) }) });
}), pA = Z.forwardRef((l, i) => {
  const { value: r, defaultValue: u, onValueChange: s = () => {
  }, ...f } = l, [m, h] = xt({ prop: r, defaultProp: u ?? [], onChange: s, caller: fn }), y = Z.useCallback((b) => h((v = []) => [...v, b]), [h]), g = Z.useCallback((b) => h((v = []) => v.filter((C) => C !== b)), [h]);
  return E.jsx(sb, { scope: l.__scopeAccordion, value: m, onItemOpen: y, onItemClose: g, children: E.jsx(fb, { scope: l.__scopeAccordion, collapsible: true, children: E.jsx(db, { ...f, ref: i }) }) });
}), [mA, mu] = pu(fn), db = Z.forwardRef((l, i) => {
  const { __scopeAccordion: r, disabled: u, dir: s, orientation: f = "vertical", ...m } = l, h = Z.useRef(null), y = he(h, i), g = uA(r), v = Wa(s) === "ltr", C = W(l.onKeyDown, (w) => {
    var _a2;
    if (!iA.includes(w.key)) return;
    const N = w.target, x = g().filter((ae) => {
      var _a3;
      return !((_a3 = ae.ref.current) == null ? void 0 : _a3.disabled);
    }), T = x.findIndex((ae) => ae.ref.current === N), M = x.length;
    if (T === -1) return;
    w.preventDefault();
    let O = T;
    const j = 0, Y = M - 1, $ = () => {
      O = T + 1, O > Y && (O = j);
    }, J = () => {
      O = T - 1, O < j && (O = Y);
    };
    switch (w.key) {
      case "Home":
        O = j;
        break;
      case "End":
        O = Y;
        break;
      case "ArrowRight":
        f === "horizontal" && (v ? $() : J());
        break;
      case "ArrowDown":
        f === "vertical" && $();
        break;
      case "ArrowLeft":
        f === "horizontal" && (v ? J() : $());
        break;
      case "ArrowUp":
        f === "vertical" && J();
        break;
    }
    const V = O % M;
    (_a2 = x[V].ref.current) == null ? void 0 : _a2.focus();
  });
  return E.jsx(mA, { scope: r, disabled: u, direction: s, orientation: f, children: E.jsx(Qf.Slot, { scope: r, children: E.jsx(ue.div, { ...m, "data-orientation": f, ref: y, onKeyDown: u ? void 0 : C }) }) });
}), Pi = "AccordionItem", [vA, $f] = pu(Pi), pb = Z.forwardRef((l, i) => {
  const { __scopeAccordion: r, value: u, ...s } = l, f = mu(Pi, r), m = sA(Pi, r), h = Zf(r), y = Xe(), g = u && m.value.includes(u) || false, b = f.disabled || l.disabled;
  return E.jsx(vA, { scope: r, open: g, disabled: b, triggerId: y, children: E.jsx(lA, { "data-orientation": f.orientation, "data-state": bb(g), ...h, ...s, ref: i, disabled: b, open: g, onOpenChange: (v) => {
    v ? m.onItemOpen(u) : m.onItemClose(u);
  } }) });
});
pb.displayName = Pi;
var mb = "AccordionHeader", vb = Z.forwardRef((l, i) => {
  const { __scopeAccordion: r, ...u } = l, s = mu(fn, r), f = $f(mb, r);
  return E.jsx(ue.h3, { "data-orientation": s.orientation, "data-state": bb(f.open), "data-disabled": f.disabled ? "" : void 0, ...u, ref: i });
});
vb.displayName = mb;
var hf = "AccordionTrigger", hb = Z.forwardRef((l, i) => {
  const { __scopeAccordion: r, ...u } = l, s = mu(fn, r), f = $f(hf, r), m = fA(hf, r), h = Zf(r);
  return E.jsx(Qf.ItemSlot, { scope: r, children: E.jsx(oA, { "aria-disabled": f.open && !m.collapsible || void 0, "data-orientation": s.orientation, id: f.triggerId, ...h, ...u, ref: i }) });
});
hb.displayName = hf;
var gb = "AccordionContent", yb = Z.forwardRef((l, i) => {
  const { __scopeAccordion: r, ...u } = l, s = mu(fn, r), f = $f(gb, r), m = Zf(r);
  return E.jsx(rA, { role: "region", "aria-labelledby": f.triggerId, "data-orientation": s.orientation, ...m, ...u, ref: i, style: { "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", ...l.style } });
});
yb.displayName = gb;
function bb(l) {
  return l ? "open" : "closed";
}
var Nw = cb, Ow = pb, zw = vb, jw = hb, Uw = yb, vu = "Switch", [hA] = pt(vu), [gA, yA] = hA(vu), Sb = d.forwardRef((l, i) => {
  const { __scopeSwitch: r, name: u, checked: s, defaultChecked: f, required: m, disabled: h, value: y = "on", onCheckedChange: g, form: b, ...v } = l, [C, w] = d.useState(null), N = he(i, (j) => w(j)), x = d.useRef(false), T = C ? b || !!C.closest("form") : true, [M, O] = xt({ prop: s, defaultProp: f ?? false, onChange: g, caller: vu });
  return E.jsxs(gA, { scope: r, checked: M, disabled: h, children: [E.jsx(ue.button, { type: "button", role: "switch", "aria-checked": M, "aria-required": m, "data-state": Tb(M), "data-disabled": h ? "" : void 0, disabled: h, value: y, ...v, ref: N, onClick: W(l.onClick, (j) => {
    O((Y) => !Y), T && (x.current = j.isPropagationStopped(), x.current || j.stopPropagation());
  }) }), T && E.jsx(Cb, { control: C, bubbles: !x.current, name: u, value: y, checked: M, required: m, disabled: h, form: b, style: { transform: "translateX(-100%)" } })] });
});
Sb.displayName = vu;
var Eb = "SwitchThumb", xb = d.forwardRef((l, i) => {
  const { __scopeSwitch: r, ...u } = l, s = yA(Eb, r);
  return E.jsx(ue.span, { "data-state": Tb(s.checked), "data-disabled": s.disabled ? "" : void 0, ...u, ref: i });
});
xb.displayName = Eb;
var bA = "SwitchBubbleInput", Cb = d.forwardRef(({ __scopeSwitch: l, control: i, checked: r, bubbles: u = true, ...s }, f) => {
  const m = d.useRef(null), h = he(m, f), y = tu(r), g = Ji(i);
  return d.useEffect(() => {
    const b = m.current;
    if (!b) return;
    const v = window.HTMLInputElement.prototype, w = Object.getOwnPropertyDescriptor(v, "checked").set;
    if (y !== r && w) {
      const N = new Event("click", { bubbles: u });
      w.call(b, r), b.dispatchEvent(N);
    }
  }, [y, r, u]), E.jsx("input", { type: "checkbox", "aria-hidden": true, defaultChecked: r, ...s, tabIndex: -1, ref: h, style: { ...s.style, ...g, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } });
});
Cb.displayName = bA;
function Tb(l) {
  return l ? "checked" : "unchecked";
}
var Bw = Sb, Hw = xb, hu = "Popover", [_b] = pt(hu, [Ea]), mr = Ea(), [SA, _a] = _b(hu), Rb = (l) => {
  const { __scopePopover: i, children: r, open: u, defaultOpen: s, onOpenChange: f, modal: m = false } = l, h = mr(i), y = d.useRef(null), [g, b] = d.useState(false), [v, C] = xt({ prop: u, defaultProp: s ?? false, onChange: f, caller: hu });
  return E.jsx(Fi, { ...h, children: E.jsx(SA, { scope: i, contentId: Xe(), triggerRef: y, open: v, onOpenChange: C, onOpenToggle: d.useCallback(() => C((w) => !w), [C]), hasCustomAnchor: g, onCustomAnchorAdd: d.useCallback(() => b(true), []), onCustomAnchorRemove: d.useCallback(() => b(false), []), modal: m, children: r }) });
};
Rb.displayName = hu;
var Ab = "PopoverAnchor", EA = d.forwardRef((l, i) => {
  const { __scopePopover: r, ...u } = l, s = _a(Ab, r), f = mr(r), { onCustomAnchorAdd: m, onCustomAnchorRemove: h } = s;
  return d.useEffect(() => (m(), () => h()), [m, h]), E.jsx(ur, { ...f, ...u, ref: i });
});
EA.displayName = Ab;
var Mb = "PopoverTrigger", wb = d.forwardRef((l, i) => {
  const { __scopePopover: r, ...u } = l, s = _a(Mb, r), f = mr(r), m = he(i, s.triggerRef), h = E.jsx(ue.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": s.open, "aria-controls": s.contentId, "data-state": jb(s.open), ...u, ref: m, onClick: W(l.onClick, s.onOpenToggle) });
  return s.hasCustomAnchor ? h : E.jsx(ur, { asChild: true, ...f, children: h });
});
wb.displayName = Mb;
var Jf = "PopoverPortal", [xA, CA] = _b(Jf, { forceMount: void 0 }), Db = (l) => {
  const { __scopePopover: i, forceMount: r, children: u, container: s } = l, f = _a(Jf, i);
  return E.jsx(xA, { scope: i, forceMount: r, children: E.jsx(Ut, { present: r || f.open, children: E.jsx(rr, { asChild: true, container: s, children: u }) }) });
};
Db.displayName = Jf;
var Zl = "PopoverContent", Nb = d.forwardRef((l, i) => {
  const r = CA(Zl, l.__scopePopover), { forceMount: u = r.forceMount, ...s } = l, f = _a(Zl, l.__scopePopover);
  return E.jsx(Ut, { present: u || f.open, children: f.modal ? E.jsx(_A, { ...s, ref: i }) : E.jsx(RA, { ...s, ref: i }) });
});
Nb.displayName = Zl;
var TA = Qa("PopoverContent.RemoveScroll"), _A = d.forwardRef((l, i) => {
  const r = _a(Zl, l.__scopePopover), u = d.useRef(null), s = he(i, u), f = d.useRef(false);
  return d.useEffect(() => {
    const m = u.current;
    if (m) return ki(m);
  }, []), E.jsx(ir, { as: TA, allowPinchZoom: true, children: E.jsx(Ob, { ...l, ref: s, trapFocus: r.open, disableOutsidePointerEvents: true, onCloseAutoFocus: W(l.onCloseAutoFocus, (m) => {
    var _a2;
    m.preventDefault(), f.current || ((_a2 = r.triggerRef.current) == null ? void 0 : _a2.focus());
  }), onPointerDownOutside: W(l.onPointerDownOutside, (m) => {
    const h = m.detail.originalEvent, y = h.button === 0 && h.ctrlKey === true, g = h.button === 2 || y;
    f.current = g;
  }, { checkForDefaultPrevented: false }), onFocusOutside: W(l.onFocusOutside, (m) => m.preventDefault(), { checkForDefaultPrevented: false }) }) });
}), RA = d.forwardRef((l, i) => {
  const r = _a(Zl, l.__scopePopover), u = d.useRef(false), s = d.useRef(false);
  return E.jsx(Ob, { ...l, ref: i, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (f) => {
    var _a2, _b2;
    (_a2 = l.onCloseAutoFocus) == null ? void 0 : _a2.call(l, f), f.defaultPrevented || (u.current || ((_b2 = r.triggerRef.current) == null ? void 0 : _b2.focus()), f.preventDefault()), u.current = false, s.current = false;
  }, onInteractOutside: (f) => {
    var _a2, _b2;
    (_a2 = l.onInteractOutside) == null ? void 0 : _a2.call(l, f), f.defaultPrevented || (u.current = true, f.detail.originalEvent.type === "pointerdown" && (s.current = true));
    const m = f.target;
    ((_b2 = r.triggerRef.current) == null ? void 0 : _b2.contains(m)) && f.preventDefault(), f.detail.originalEvent.type === "focusin" && s.current && f.preventDefault();
  } });
}), Ob = d.forwardRef((l, i) => {
  const { __scopePopover: r, trapFocus: u, onOpenAutoFocus: s, onCloseAutoFocus: f, disableOutsidePointerEvents: m, onEscapeKeyDown: h, onPointerDownOutside: y, onFocusOutside: g, onInteractOutside: b, ...v } = l, C = _a(Zl, r), w = mr(r);
  return Qi(), E.jsx(or, { asChild: true, loop: true, trapped: u, onMountAutoFocus: s, onUnmountAutoFocus: f, children: E.jsx($l, { asChild: true, disableOutsidePointerEvents: m, onInteractOutside: b, onEscapeKeyDown: h, onPointerDownOutside: y, onFocusOutside: g, onDismiss: () => C.onOpenChange(false), children: E.jsx(Wi, { "data-state": jb(C.open), role: "dialog", id: C.contentId, ...w, ...v, ref: i, style: { ...v.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
}), zb = "PopoverClose", AA = d.forwardRef((l, i) => {
  const { __scopePopover: r, ...u } = l, s = _a(zb, r);
  return E.jsx(ue.button, { type: "button", ...u, ref: i, onClick: W(l.onClick, () => s.onOpenChange(false)) });
});
AA.displayName = zb;
var MA = "PopoverArrow", wA = d.forwardRef((l, i) => {
  const { __scopePopover: r, ...u } = l, s = mr(r);
  return E.jsx(eu, { ...s, ...u, ref: i });
});
wA.displayName = MA;
function jb(l) {
  return l ? "open" : "closed";
}
var Lw = Rb, Gw = wb, Yw = Db, Vw = Nb, Rh = 1, DA = 0.9, NA = 0.8, OA = 0.17, Qs = 0.1, Zs = 0.999, zA = 0.9999, jA = 0.99, UA = /[\\\/_+.#"@\[\(\{&]/, BA = /[\\\/_+.#"@\[\(\{&]/g, HA = /[\s-]/, Ub = /[\s-]/g;
function gf(l, i, r, u, s, f, m) {
  if (f === i.length) return s === l.length ? Rh : jA;
  var h = `${s},${f}`;
  if (m[h] !== void 0) return m[h];
  for (var y = u.charAt(f), g = r.indexOf(y, s), b = 0, v, C, w, N; g >= 0; ) v = gf(l, i, r, u, g + 1, f + 1, m), v > b && (g === s ? v *= Rh : UA.test(l.charAt(g - 1)) ? (v *= NA, w = l.slice(s, g - 1).match(BA), w && s > 0 && (v *= Math.pow(Zs, w.length))) : HA.test(l.charAt(g - 1)) ? (v *= DA, N = l.slice(s, g - 1).match(Ub), N && s > 0 && (v *= Math.pow(Zs, N.length))) : (v *= OA, s > 0 && (v *= Math.pow(Zs, g - s))), l.charAt(g) !== i.charAt(f) && (v *= zA)), (v < Qs && r.charAt(g - 1) === u.charAt(f + 1) || u.charAt(f + 1) === u.charAt(f) && r.charAt(g - 1) !== u.charAt(f)) && (C = gf(l, i, r, u, g + 1, f + 2, m), C * Qs > v && (v = C * Qs)), v > b && (b = v), g = r.indexOf(y, g + 1);
  return m[h] = b, b;
}
function Ah(l) {
  return l.toLowerCase().replace(Ub, " ");
}
function LA(l, i, r) {
  return l = r && r.length > 0 ? `${l + " " + r.join(" ")}` : l, gf(l, i, Ah(l), Ah(i), 0, 0, {});
}
var Fo = '[cmdk-group=""]', $s = '[cmdk-group-items=""]', GA = '[cmdk-group-heading=""]', Bb = '[cmdk-item=""]', Mh = `${Bb}:not([aria-disabled="true"])`, yf = "cmdk-item-select", Kl = "data-value", YA = (l, i, r) => LA(l, i, r), Hb = d.createContext(void 0), vr = () => d.useContext(Hb), Lb = d.createContext(void 0), Ff = () => d.useContext(Lb), Gb = d.createContext(void 0), Yb = d.forwardRef((l, i) => {
  let r = Xl(() => {
    var A, H;
    return { search: "", value: (H = (A = l.value) != null ? A : l.defaultValue) != null ? H : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), u = Xl(() => /* @__PURE__ */ new Set()), s = Xl(() => /* @__PURE__ */ new Map()), f = Xl(() => /* @__PURE__ */ new Map()), m = Xl(() => /* @__PURE__ */ new Set()), h = Vb(l), { label: y, children: g, value: b, onValueChange: v, filter: C, shouldFilter: w, loop: N, disablePointerSelection: x = false, vimBindings: T = true, ...M } = l, O = Xe(), j = Xe(), Y = Xe(), $ = d.useRef(null), J = JA();
  Fa(() => {
    if (b !== void 0) {
      let A = b.trim();
      r.current.value = A, V.emit();
    }
  }, [b]), Fa(() => {
    J(6, pe);
  }, []);
  let V = d.useMemo(() => ({ subscribe: (A) => (m.current.add(A), () => m.current.delete(A)), snapshot: () => r.current, setState: (A, H, X) => {
    var P, F, K, te;
    if (!Object.is(r.current[A], H)) {
      if (r.current[A] = H, A === "search") de(), me(), J(1, ce);
      else if (A === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let ie = document.getElementById(Y);
          ie ? ie.focus() : (P = document.getElementById(O)) == null || P.focus();
        }
        if (J(7, () => {
          var ie;
          r.current.selectedItemId = (ie = be()) == null ? void 0 : ie.id, V.emit();
        }), X || J(5, pe), ((F = h.current) == null ? void 0 : F.value) !== void 0) {
          let ie = H ?? "";
          (te = (K = h.current).onValueChange) == null || te.call(K, ie);
          return;
        }
      }
      V.emit();
    }
  }, emit: () => {
    m.current.forEach((A) => A());
  } }), []), ae = d.useMemo(() => ({ value: (A, H, X) => {
    var P;
    H !== ((P = f.current.get(A)) == null ? void 0 : P.value) && (f.current.set(A, { value: H, keywords: X }), r.current.filtered.items.set(A, ye(H, X)), J(2, () => {
      me(), V.emit();
    }));
  }, item: (A, H) => (u.current.add(A), H && (s.current.has(H) ? s.current.get(H).add(A) : s.current.set(H, /* @__PURE__ */ new Set([A]))), J(3, () => {
    de(), me(), r.current.value || ce(), V.emit();
  }), () => {
    f.current.delete(A), u.current.delete(A), r.current.filtered.items.delete(A);
    let X = be();
    J(4, () => {
      de(), (X == null ? void 0 : X.getAttribute("id")) === A && ce(), V.emit();
    });
  }), group: (A) => (s.current.has(A) || s.current.set(A, /* @__PURE__ */ new Set()), () => {
    f.current.delete(A), s.current.delete(A);
  }), filter: () => h.current.shouldFilter, label: y || l["aria-label"], getDisablePointerSelection: () => h.current.disablePointerSelection, listId: O, inputId: Y, labelId: j, listInnerRef: $ }), []);
  function ye(A, H) {
    var X, P;
    let F = (P = (X = h.current) == null ? void 0 : X.filter) != null ? P : YA;
    return A ? F(A, r.current.search, H) : 0;
  }
  function me() {
    if (!r.current.search || h.current.shouldFilter === false) return;
    let A = r.current.filtered.items, H = [];
    r.current.filtered.groups.forEach((P) => {
      let F = s.current.get(P), K = 0;
      F.forEach((te) => {
        let ie = A.get(te);
        K = Math.max(ie, K);
      }), H.push([P, K]);
    });
    let X = $.current;
    Se().sort((P, F) => {
      var K, te;
      let ie = P.getAttribute("id"), Ce = F.getAttribute("id");
      return ((K = A.get(Ce)) != null ? K : 0) - ((te = A.get(ie)) != null ? te : 0);
    }).forEach((P) => {
      let F = P.closest($s);
      F ? F.appendChild(P.parentElement === F ? P : P.closest(`${$s} > *`)) : X.appendChild(P.parentElement === X ? P : P.closest(`${$s} > *`));
    }), H.sort((P, F) => F[1] - P[1]).forEach((P) => {
      var F;
      let K = (F = $.current) == null ? void 0 : F.querySelector(`${Fo}[${Kl}="${encodeURIComponent(P[0])}"]`);
      K == null ? void 0 : K.parentElement.appendChild(K);
    });
  }
  function ce() {
    let A = Se().find((X) => X.getAttribute("aria-disabled") !== "true"), H = A == null ? void 0 : A.getAttribute(Kl);
    V.setState("value", H || void 0);
  }
  function de() {
    var A, H, X, P;
    if (!r.current.search || h.current.shouldFilter === false) {
      r.current.filtered.count = u.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let F = 0;
    for (let K of u.current) {
      let te = (H = (A = f.current.get(K)) == null ? void 0 : A.value) != null ? H : "", ie = (P = (X = f.current.get(K)) == null ? void 0 : X.keywords) != null ? P : [], Ce = ye(te, ie);
      r.current.filtered.items.set(K, Ce), Ce > 0 && F++;
    }
    for (let [K, te] of s.current) for (let ie of te) if (r.current.filtered.items.get(ie) > 0) {
      r.current.filtered.groups.add(K);
      break;
    }
    r.current.filtered.count = F;
  }
  function pe() {
    var A, H, X;
    let P = be();
    P && (((A = P.parentElement) == null ? void 0 : A.firstChild) === P && ((X = (H = P.closest(Fo)) == null ? void 0 : H.querySelector(GA)) == null || X.scrollIntoView({ block: "nearest" })), P.scrollIntoView({ block: "nearest" }));
  }
  function be() {
    var A;
    return (A = $.current) == null ? void 0 : A.querySelector(`${Bb}[aria-selected="true"]`);
  }
  function Se() {
    var A;
    return Array.from(((A = $.current) == null ? void 0 : A.querySelectorAll(Mh)) || []);
  }
  function I(A) {
    let H = Se()[A];
    H && V.setState("value", H.getAttribute(Kl));
  }
  function ee(A) {
    var H;
    let X = be(), P = Se(), F = P.findIndex((te) => te === X), K = P[F + A];
    (H = h.current) != null && H.loop && (K = F + A < 0 ? P[P.length - 1] : F + A === P.length ? P[0] : P[F + A]), K && V.setState("value", K.getAttribute(Kl));
  }
  function le(A) {
    let H = be(), X = H == null ? void 0 : H.closest(Fo), P;
    for (; X && !P; ) X = A > 0 ? ZA(X, Fo) : $A(X, Fo), P = X == null ? void 0 : X.querySelector(Mh);
    P ? V.setState("value", P.getAttribute(Kl)) : ee(A);
  }
  let ne = () => I(Se().length - 1), Ee = (A) => {
    A.preventDefault(), A.metaKey ? ne() : A.altKey ? le(1) : ee(1);
  }, R = (A) => {
    A.preventDefault(), A.metaKey ? I(0) : A.altKey ? le(-1) : ee(-1);
  };
  return d.createElement(Vn.div, { ref: i, tabIndex: -1, ...M, "cmdk-root": "", onKeyDown: (A) => {
    var H;
    (H = M.onKeyDown) == null || H.call(M, A);
    let X = A.nativeEvent.isComposing || A.keyCode === 229;
    if (!(A.defaultPrevented || X)) switch (A.key) {
      case "n":
      case "j": {
        T && A.ctrlKey && Ee(A);
        break;
      }
      case "ArrowDown": {
        Ee(A);
        break;
      }
      case "p":
      case "k": {
        T && A.ctrlKey && R(A);
        break;
      }
      case "ArrowUp": {
        R(A);
        break;
      }
      case "Home": {
        A.preventDefault(), I(0);
        break;
      }
      case "End": {
        A.preventDefault(), ne();
        break;
      }
      case "Enter": {
        A.preventDefault();
        let P = be();
        if (P) {
          let F = new Event(yf);
          P.dispatchEvent(F);
        }
      }
    }
  } }, d.createElement("label", { "cmdk-label": "", htmlFor: ae.inputId, id: ae.labelId, style: WA }, y), gu(l, (A) => d.createElement(Lb.Provider, { value: V }, d.createElement(Hb.Provider, { value: ae }, A))));
}), VA = d.forwardRef((l, i) => {
  var r, u;
  let s = Xe(), f = d.useRef(null), m = d.useContext(Gb), h = vr(), y = Vb(l), g = (u = (r = y.current) == null ? void 0 : r.forceMount) != null ? u : m == null ? void 0 : m.forceMount;
  Fa(() => {
    if (!g) return h.item(s, m == null ? void 0 : m.id);
  }, [g]);
  let b = Ib(s, f, [l.value, l.children, f], l.keywords), v = Ff(), C = Sa((J) => J.value && J.value === b.current), w = Sa((J) => g || h.filter() === false ? true : J.search ? J.filtered.items.get(s) > 0 : true);
  d.useEffect(() => {
    let J = f.current;
    if (!(!J || l.disabled)) return J.addEventListener(yf, N), () => J.removeEventListener(yf, N);
  }, [w, l.onSelect, l.disabled]);
  function N() {
    var J, V;
    x(), (V = (J = y.current).onSelect) == null || V.call(J, b.current);
  }
  function x() {
    v.setState("value", b.current, true);
  }
  if (!w) return null;
  let { disabled: T, value: M, onSelect: O, forceMount: j, keywords: Y, ...$ } = l;
  return d.createElement(Vn.div, { ref: Sn(f, i), ...$, id: s, "cmdk-item": "", role: "option", "aria-disabled": !!T, "aria-selected": !!C, "data-disabled": !!T, "data-selected": !!C, onPointerMove: T || h.getDisablePointerSelection() ? void 0 : x, onClick: T ? void 0 : N }, l.children);
}), IA = d.forwardRef((l, i) => {
  let { heading: r, children: u, forceMount: s, ...f } = l, m = Xe(), h = d.useRef(null), y = d.useRef(null), g = Xe(), b = vr(), v = Sa((w) => s || b.filter() === false ? true : w.search ? w.filtered.groups.has(m) : true);
  Fa(() => b.group(m), []), Ib(m, h, [l.value, l.heading, y]);
  let C = d.useMemo(() => ({ id: m, forceMount: s }), [s]);
  return d.createElement(Vn.div, { ref: Sn(h, i), ...f, "cmdk-group": "", role: "presentation", hidden: v ? void 0 : true }, r && d.createElement("div", { ref: y, "cmdk-group-heading": "", "aria-hidden": true, id: g }, r), gu(l, (w) => d.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? g : void 0 }, d.createElement(Gb.Provider, { value: C }, w))));
}), qA = d.forwardRef((l, i) => {
  let { alwaysRender: r, ...u } = l, s = d.useRef(null), f = Sa((m) => !m.search);
  return !r && !f ? null : d.createElement(Vn.div, { ref: Sn(s, i), ...u, "cmdk-separator": "", role: "separator" });
}), KA = d.forwardRef((l, i) => {
  let { onValueChange: r, ...u } = l, s = l.value != null, f = Ff(), m = Sa((g) => g.search), h = Sa((g) => g.selectedItemId), y = vr();
  return d.useEffect(() => {
    l.value != null && f.setState("search", l.value);
  }, [l.value]), d.createElement(Vn.input, { ref: i, ...u, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": y.listId, "aria-labelledby": y.labelId, "aria-activedescendant": h, id: y.inputId, type: "text", value: s ? l.value : m, onChange: (g) => {
    s || f.setState("search", g.target.value), r == null ? void 0 : r(g.target.value);
  } });
}), XA = d.forwardRef((l, i) => {
  let { children: r, label: u = "Suggestions", ...s } = l, f = d.useRef(null), m = d.useRef(null), h = Sa((g) => g.selectedItemId), y = vr();
  return d.useEffect(() => {
    if (m.current && f.current) {
      let g = m.current, b = f.current, v, C = new ResizeObserver(() => {
        v = requestAnimationFrame(() => {
          let w = g.offsetHeight;
          b.style.setProperty("--cmdk-list-height", w.toFixed(1) + "px");
        });
      });
      return C.observe(g), () => {
        cancelAnimationFrame(v), C.unobserve(g);
      };
    }
  }, []), d.createElement(Vn.div, { ref: Sn(f, i), ...s, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": h, "aria-label": u, id: y.listId }, gu(l, (g) => d.createElement("div", { ref: Sn(m, y.listInnerRef), "cmdk-list-sizer": "" }, g)));
}), PA = d.forwardRef((l, i) => {
  let { open: r, onOpenChange: u, overlayClassName: s, contentClassName: f, container: m, ...h } = l;
  return d.createElement(sg, { open: r, onOpenChange: u }, d.createElement(fg, { container: m }, d.createElement(dg, { "cmdk-overlay": "", className: s }), d.createElement(pg, { "aria-label": l.label, "cmdk-dialog": "", className: f }, d.createElement(Yb, { ref: i, ...h }))));
}), kA = d.forwardRef((l, i) => Sa((r) => r.filtered.count === 0) ? d.createElement(Vn.div, { ref: i, ...l, "cmdk-empty": "", role: "presentation" }) : null), QA = d.forwardRef((l, i) => {
  let { progress: r, children: u, label: s = "Loading...", ...f } = l;
  return d.createElement(Vn.div, { ref: i, ...f, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": s }, gu(l, (m) => d.createElement("div", { "aria-hidden": true }, m)));
}), Iw = Object.assign(Yb, { List: XA, Item: VA, Input: KA, Group: IA, Separator: qA, Dialog: PA, Empty: kA, Loading: QA });
function ZA(l, i) {
  let r = l.nextElementSibling;
  for (; r; ) {
    if (r.matches(i)) return r;
    r = r.nextElementSibling;
  }
}
function $A(l, i) {
  let r = l.previousElementSibling;
  for (; r; ) {
    if (r.matches(i)) return r;
    r = r.previousElementSibling;
  }
}
function Vb(l) {
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
function Sa(l) {
  let i = Ff(), r = () => l(i.snapshot());
  return d.useSyncExternalStore(i.subscribe, r, r);
}
function Ib(l, i, r, u = []) {
  let s = d.useRef(), f = vr();
  return Fa(() => {
    var m;
    let h = (() => {
      var g;
      for (let b of r) {
        if (typeof b == "string") return b.trim();
        if (typeof b == "object" && "current" in b) return b.current ? (g = b.current.textContent) == null ? void 0 : g.trim() : s.current;
      }
    })(), y = u.map((g) => g.trim());
    f.value(l, h, y), (m = i.current) == null || m.setAttribute(Kl, h), s.current = h;
  }), s;
}
var JA = () => {
  let [l, i] = d.useState(), r = Xl(() => /* @__PURE__ */ new Map());
  return Fa(() => {
    r.current.forEach((u) => u()), r.current = /* @__PURE__ */ new Map();
  }, [l]), (u, s) => {
    r.current.set(u, s), i({});
  };
};
function FA(l) {
  let i = l.type;
  return typeof i == "function" ? i(l.props) : "render" in i ? i.render(l.props) : l;
}
function gu({ asChild: l, children: i }, r) {
  return l && d.isValidElement(i) ? d.cloneElement(FA(i), { ref: i.ref }, r(i.props.children)) : r(i);
}
var WA = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" }, yu = "DropdownMenu", [eM] = pt(yu, [Of]), Ct = Of(), [tM, qb] = eM(yu), Kb = (l) => {
  const { __scopeDropdownMenu: i, children: r, dir: u, open: s, defaultOpen: f, onOpenChange: m, modal: h = true } = l, y = Ct(i), g = d.useRef(null), [b, v] = xt({ prop: s, defaultProp: f ?? false, onChange: m, caller: yu });
  return E.jsx(tM, { scope: i, triggerId: Xe(), triggerRef: g, contentId: Xe(), open: b, onOpenChange: v, onOpenToggle: d.useCallback(() => v((C) => !C), [v]), modal: h, children: E.jsx(Jy, { ...y, open: b, onOpenChange: v, dir: u, modal: h, children: r }) });
};
Kb.displayName = yu;
var Xb = "DropdownMenuTrigger", Pb = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, disabled: u = false, ...s } = l, f = qb(Xb, r), m = Ct(r);
  return E.jsx(Fy, { asChild: true, ...m, children: E.jsx(ue.button, { type: "button", id: f.triggerId, "aria-haspopup": "menu", "aria-expanded": f.open, "aria-controls": f.open ? f.contentId : void 0, "data-state": f.open ? "open" : "closed", "data-disabled": u ? "" : void 0, disabled: u, ...s, ref: Sn(i, f.triggerRef), onPointerDown: W(l.onPointerDown, (h) => {
    !u && h.button === 0 && h.ctrlKey === false && (f.onOpenToggle(), f.open || h.preventDefault());
  }), onKeyDown: W(l.onKeyDown, (h) => {
    u || (["Enter", " "].includes(h.key) && f.onOpenToggle(), h.key === "ArrowDown" && f.onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(h.key) && h.preventDefault());
  }) }) });
});
Pb.displayName = Xb;
var nM = "DropdownMenuPortal", kb = (l) => {
  const { __scopeDropdownMenu: i, ...r } = l, u = Ct(i);
  return E.jsx(Wy, { ...u, ...r });
};
kb.displayName = nM;
var Qb = "DropdownMenuContent", Zb = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...u } = l, s = qb(Qb, r), f = Ct(r), m = d.useRef(false);
  return E.jsx(e0, { id: s.contentId, "aria-labelledby": s.triggerId, ...f, ...u, ref: i, onCloseAutoFocus: W(l.onCloseAutoFocus, (h) => {
    var _a2;
    m.current || ((_a2 = s.triggerRef.current) == null ? void 0 : _a2.focus()), m.current = false, h.preventDefault();
  }), onInteractOutside: W(l.onInteractOutside, (h) => {
    const y = h.detail.originalEvent, g = y.button === 0 && y.ctrlKey === true, b = y.button === 2 || g;
    (!s.modal || b) && (m.current = true);
  }), style: { ...l.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
Zb.displayName = Qb;
var aM = "DropdownMenuGroup", lM = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...u } = l, s = Ct(r);
  return E.jsx(t0, { ...s, ...u, ref: i });
});
lM.displayName = aM;
var oM = "DropdownMenuLabel", $b = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...u } = l, s = Ct(r);
  return E.jsx(n0, { ...s, ...u, ref: i });
});
$b.displayName = oM;
var rM = "DropdownMenuItem", Jb = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...u } = l, s = Ct(r);
  return E.jsx(a0, { ...s, ...u, ref: i });
});
Jb.displayName = rM;
var iM = "DropdownMenuCheckboxItem", uM = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...u } = l, s = Ct(r);
  return E.jsx(l0, { ...s, ...u, ref: i });
});
uM.displayName = iM;
var cM = "DropdownMenuRadioGroup", sM = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...u } = l, s = Ct(r);
  return E.jsx(o0, { ...s, ...u, ref: i });
});
sM.displayName = cM;
var fM = "DropdownMenuRadioItem", dM = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...u } = l, s = Ct(r);
  return E.jsx(r0, { ...s, ...u, ref: i });
});
dM.displayName = fM;
var pM = "DropdownMenuItemIndicator", mM = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...u } = l, s = Ct(r);
  return E.jsx(i0, { ...s, ...u, ref: i });
});
mM.displayName = pM;
var vM = "DropdownMenuSeparator", Fb = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...u } = l, s = Ct(r);
  return E.jsx(u0, { ...s, ...u, ref: i });
});
Fb.displayName = vM;
var hM = "DropdownMenuArrow", gM = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...u } = l, s = Ct(r);
  return E.jsx(c0, { ...s, ...u, ref: i });
});
gM.displayName = hM;
var yM = "DropdownMenuSubTrigger", bM = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...u } = l, s = Ct(r);
  return E.jsx(s0, { ...s, ...u, ref: i });
});
bM.displayName = yM;
var SM = "DropdownMenuSubContent", EM = d.forwardRef((l, i) => {
  const { __scopeDropdownMenu: r, ...u } = l, s = Ct(r);
  return E.jsx(f0, { ...s, ...u, ref: i, style: { ...l.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
EM.displayName = SM;
var qw = Kb, Kw = Pb, Xw = kb, Pw = Zb, kw = $b, Qw = Jb, Zw = Fb;
export {
  mw as $,
  l_ as A,
  o_ as B,
  pg as C,
  JC as D,
  WM as E,
  ew as F,
  nw as G,
  lw as H,
  LM as I,
  ow as J,
  fw as K,
  QM as L,
  tw as M,
  dw as N,
  dg as O,
  fg as P,
  pw as Q,
  RM as R,
  zM as S,
  DM as T,
  iw as U,
  HM as V,
  uw as W,
  cw as X,
  sw as Y,
  rw as Z,
  aw as _,
  Sf as a,
  vw as a0,
  yw as a1,
  Ew as a2,
  xw as a3,
  Sw as a4,
  bw as a5,
  hw as a6,
  gw as a7,
  Rw as a8,
  Aw as a9,
  OM as aA,
  _h as aB,
  Cw as aC,
  zR as aD,
  _w as aE,
  Tw as aF,
  Mw as aa,
  ww as ab,
  Nw as ac,
  Ow as ad,
  zw as ae,
  jw as af,
  Uw as ag,
  Bw as ah,
  Hw as ai,
  Lw as aj,
  Gw as ak,
  Yw as al,
  Vw as am,
  Iw as an,
  qw as ao,
  Kw as ap,
  Xw as aq,
  Pw as ar,
  kw as as,
  Zw as at,
  Qw as au,
  lA as av,
  ib as aw,
  ub as ax,
  NM as ay,
  Dw as az,
  Z as b,
  lr as c,
  jM as d,
  sg as e,
  mg as f,
  $C as g,
  ZC as h,
  UM as i,
  E as j,
  BM as k,
  GM as l,
  YM as m,
  VM as n,
  IM as o,
  KM as p,
  qM as q,
  d as r,
  XM as s,
  wM as t,
  PM as u,
  kM as v,
  AM as w,
  ZM as x,
  $M as y,
  MM as z
};
