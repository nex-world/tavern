import { g as Kf } from "./index-BwbnRfon.js";
import { r as dx, i as Cv, f as Mv, p as px, e as hx, a as Rv, d as mx, B as vx, b as gx, g as yx, t as wv, h as Xi, j as bx, k as Fi, l as Xf, m as Sx, n as xx, R as Ex, o as _x, q as Tv, C as Cx, s as Qs } from "./tanstack-vendor-BB7HWJ-3.js";
import { w as $f, i as hr, _ as Ra, a as C0, g as Mx, b as Rx, h as uc, c as wx, o as Tx, s as Ax, f as Nx, d as Dx, e as Ox, j as Av, l as zx, k as jx, m as Nv, n as kx, p as Lx, q as Hx, r as Ux } from "./vendor-VvUkZRdw.js";
import { c as ne, a as Ji } from "./@radix-ui-BQCqNqg0.js";
import { p as Bx } from "./immer-BCQU3qJI.js";
function Ix(a, r) {
  for (var l = 0; l < r.length; l++) {
    const i = r[l];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const s in i) if (s !== "default" && !(s in a)) {
        const f = Object.getOwnPropertyDescriptor(i, s);
        f && Object.defineProperty(a, s, f.get ? f : { enumerable: true, get: () => i[s] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var Zs = { exports: {} }, or = {};
var Dv;
function Px() {
  if (Dv) return or;
  Dv = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function l(i, s, f) {
    var p = null;
    if (f !== void 0 && (p = "" + f), s.key !== void 0 && (p = "" + s.key), "key" in s) {
      f = {};
      for (var v in s) v !== "key" && (f[v] = s[v]);
    } else f = s;
    return s = f.ref, { $$typeof: a, type: i, key: p, ref: s !== void 0 ? s : null, props: f };
  }
  return or.Fragment = r, or.jsx = l, or.jsxs = l, or;
}
var Ov;
function qx() {
  return Ov || (Ov = 1, Zs.exports = Px()), Zs.exports;
}
var S = qx(), Fs = { exports: {} }, lr = {}, Js = { exports: {} }, Ws = {};
var zv;
function Vx() {
  return zv || (zv = 1, (function(a) {
    function r(z, X) {
      var W = z.length;
      z.push(X);
      e: for (; 0 < W; ) {
        var ee = W - 1 >>> 1, re = z[ee];
        if (0 < s(re, X)) z[ee] = X, z[W] = re, W = ee;
        else break e;
      }
    }
    function l(z) {
      return z.length === 0 ? null : z[0];
    }
    function i(z) {
      if (z.length === 0) return null;
      var X = z[0], W = z.pop();
      if (W !== X) {
        z[0] = W;
        e: for (var ee = 0, re = z.length, A = re >>> 1; ee < A; ) {
          var N = 2 * (ee + 1) - 1, L = z[N], P = N + 1, G = z[P];
          if (0 > s(L, W)) P < re && 0 > s(G, L) ? (z[ee] = G, z[P] = W, ee = P) : (z[ee] = L, z[N] = W, ee = N);
          else if (P < re && 0 > s(G, W)) z[ee] = G, z[P] = W, ee = P;
          else break e;
        }
      }
      return X;
    }
    function s(z, X) {
      var W = z.sortIndex - X.sortIndex;
      return W !== 0 ? W : z.id - X.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      a.unstable_now = function() {
        return f.now();
      };
    } else {
      var p = Date, v = p.now();
      a.unstable_now = function() {
        return p.now() - v;
      };
    }
    var y = [], m = [], b = 1, h = null, E = 3, w = false, M = false, _ = false, C = false, R = typeof setTimeout == "function" ? setTimeout : null, O = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function I(z) {
      for (var X = l(m); X !== null; ) {
        if (X.callback === null) i(m);
        else if (X.startTime <= z) i(m), X.sortIndex = X.expirationTime, r(y, X);
        else break;
        X = l(m);
      }
    }
    function Z(z) {
      if (_ = false, I(z), !M) if (l(y) !== null) M = true, F || (F = true, de());
      else {
        var X = l(m);
        X !== null && ye(Z, X.startTime - z);
      }
    }
    var F = false, V = -1, oe = 5, ge = -1;
    function ve() {
      return C ? true : !(a.unstable_now() - ge < oe);
    }
    function ue() {
      if (C = false, F) {
        var z = a.unstable_now();
        ge = z;
        var X = true;
        try {
          e: {
            M = false, _ && (_ = false, O(V), V = -1), w = true;
            var W = E;
            try {
              t: {
                for (I(z), h = l(y); h !== null && !(h.expirationTime > z && ve()); ) {
                  var ee = h.callback;
                  if (typeof ee == "function") {
                    h.callback = null, E = h.priorityLevel;
                    var re = ee(h.expirationTime <= z);
                    if (z = a.unstable_now(), typeof re == "function") {
                      h.callback = re, I(z), X = true;
                      break t;
                    }
                    h === l(y) && i(y), I(z);
                  } else i(y);
                  h = l(y);
                }
                if (h !== null) X = true;
                else {
                  var A = l(m);
                  A !== null && ye(Z, A.startTime - z), X = false;
                }
              }
              break e;
            } finally {
              h = null, E = W, w = false;
            }
            X = void 0;
          }
        } finally {
          X ? de() : F = false;
        }
      }
    }
    var de;
    if (typeof k == "function") de = function() {
      k(ue);
    };
    else if (typeof MessageChannel < "u") {
      var he = new MessageChannel(), be = he.port2;
      he.port1.onmessage = ue, de = function() {
        be.postMessage(null);
      };
    } else de = function() {
      R(ue, 0);
    };
    function ye(z, X) {
      V = R(function() {
        z(a.unstable_now());
      }, X);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, a.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : oe = 0 < z ? Math.floor(1e3 / z) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, a.unstable_next = function(z) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = E;
      }
      var W = E;
      E = X;
      try {
        return z();
      } finally {
        E = W;
      }
    }, a.unstable_requestPaint = function() {
      C = true;
    }, a.unstable_runWithPriority = function(z, X) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var W = E;
      E = z;
      try {
        return X();
      } finally {
        E = W;
      }
    }, a.unstable_scheduleCallback = function(z, X, W) {
      var ee = a.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? ee + W : ee) : W = ee, z) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return re = W + re, z = { id: b++, callback: X, priorityLevel: z, startTime: W, expirationTime: re, sortIndex: -1 }, W > ee ? (z.sortIndex = W, r(m, z), l(y) === null && z === l(m) && (_ ? (O(V), V = -1) : _ = true, ye(Z, W - ee))) : (z.sortIndex = re, r(y, z), M || w || (M = true, F || (F = true, de()))), z;
    }, a.unstable_shouldYield = ve, a.unstable_wrapCallback = function(z) {
      var X = E;
      return function() {
        var W = E;
        E = X;
        try {
          return z.apply(this, arguments);
        } finally {
          E = W;
        }
      };
    };
  })(Ws)), Ws;
}
var jv;
function Gx() {
  return jv || (jv = 1, Js.exports = Vx()), Js.exports;
}
var ef = { exports: {} }, _e = {};
var kv;
function Yx() {
  if (kv) return _e;
  kv = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), v = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), h = /* @__PURE__ */ Symbol.for("react.activity"), E = Symbol.iterator;
  function w(A) {
    return A === null || typeof A != "object" ? null : (A = E && A[E] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var M = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _ = Object.assign, C = {};
  function R(A, N, L) {
    this.props = A, this.context = N, this.refs = C, this.updater = L || M;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(A, N) {
    if (typeof A != "object" && typeof A != "function" && A != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, A, N, "setState");
  }, R.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function O() {
  }
  O.prototype = R.prototype;
  function k(A, N, L) {
    this.props = A, this.context = N, this.refs = C, this.updater = L || M;
  }
  var I = k.prototype = new O();
  I.constructor = k, _(I, R.prototype), I.isPureReactComponent = true;
  var Z = Array.isArray;
  function F() {
  }
  var V = { H: null, A: null, T: null, S: null }, oe = Object.prototype.hasOwnProperty;
  function ge(A, N, L) {
    var P = L.ref;
    return { $$typeof: a, type: A, key: N, ref: P !== void 0 ? P : null, props: L };
  }
  function ve(A, N) {
    return ge(A.type, N, A.props);
  }
  function ue(A) {
    return typeof A == "object" && A !== null && A.$$typeof === a;
  }
  function de(A) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(L) {
      return N[L];
    });
  }
  var he = /\/+/g;
  function be(A, N) {
    return typeof A == "object" && A !== null && A.key != null ? de("" + A.key) : N.toString(36);
  }
  function ye(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(F, F) : (A.status = "pending", A.then(function(N) {
          A.status === "pending" && (A.status = "fulfilled", A.value = N);
        }, function(N) {
          A.status === "pending" && (A.status = "rejected", A.reason = N);
        })), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function z(A, N, L, P, G) {
    var te = typeof A;
    (te === "undefined" || te === "boolean") && (A = null);
    var Y = false;
    if (A === null) Y = true;
    else switch (te) {
      case "bigint":
      case "string":
      case "number":
        Y = true;
        break;
      case "object":
        switch (A.$$typeof) {
          case a:
          case r:
            Y = true;
            break;
          case b:
            return Y = A._init, z(Y(A._payload), N, L, P, G);
        }
    }
    if (Y) return G = G(A), Y = P === "" ? "." + be(A, 0) : P, Z(G) ? (L = "", Y != null && (L = Y.replace(he, "$&/") + "/"), z(G, N, L, "", function(Se) {
      return Se;
    })) : G != null && (ue(G) && (G = ve(G, L + (G.key == null || A && A.key === G.key ? "" : ("" + G.key).replace(he, "$&/") + "/") + Y)), N.push(G)), 1;
    Y = 0;
    var ae = P === "" ? "." : P + ":";
    if (Z(A)) for (var ce = 0; ce < A.length; ce++) P = A[ce], te = ae + be(P, ce), Y += z(P, N, L, te, G);
    else if (ce = w(A), typeof ce == "function") for (A = ce.call(A), ce = 0; !(P = A.next()).done; ) P = P.value, te = ae + be(P, ce++), Y += z(P, N, L, te, G);
    else if (te === "object") {
      if (typeof A.then == "function") return z(ye(A), N, L, P, G);
      throw N = String(A), Error("Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead.");
    }
    return Y;
  }
  function X(A, N, L) {
    if (A == null) return A;
    var P = [], G = 0;
    return z(A, P, "", "", function(te) {
      return N.call(L, te, G++);
    }), P;
  }
  function W(A) {
    if (A._status === -1) {
      var N = A._result;
      N = N(), N.then(function(L) {
        (A._status === 0 || A._status === -1) && (A._status = 1, A._result = L);
      }, function(L) {
        (A._status === 0 || A._status === -1) && (A._status = 2, A._result = L);
      }), A._status === -1 && (A._status = 0, A._result = N);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var ee = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A), error: A });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", A);
      return;
    }
    console.error(A);
  }, re = { map: X, forEach: function(A, N, L) {
    X(A, function() {
      N.apply(this, arguments);
    }, L);
  }, count: function(A) {
    var N = 0;
    return X(A, function() {
      N++;
    }), N;
  }, toArray: function(A) {
    return X(A, function(N) {
      return N;
    }) || [];
  }, only: function(A) {
    if (!ue(A)) throw Error("React.Children.only expected to receive a single React element child.");
    return A;
  } };
  return _e.Activity = h, _e.Children = re, _e.Component = R, _e.Fragment = l, _e.Profiler = s, _e.PureComponent = k, _e.StrictMode = i, _e.Suspense = y, _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, _e.__COMPILER_RUNTIME = { __proto__: null, c: function(A) {
    return V.H.useMemoCache(A);
  } }, _e.cache = function(A) {
    return function() {
      return A.apply(null, arguments);
    };
  }, _e.cacheSignal = function() {
    return null;
  }, _e.cloneElement = function(A, N, L) {
    if (A == null) throw Error("The argument must be a React element, but you passed " + A + ".");
    var P = _({}, A.props), G = A.key;
    if (N != null) for (te in N.key !== void 0 && (G = "" + N.key), N) !oe.call(N, te) || te === "key" || te === "__self" || te === "__source" || te === "ref" && N.ref === void 0 || (P[te] = N[te]);
    var te = arguments.length - 2;
    if (te === 1) P.children = L;
    else if (1 < te) {
      for (var Y = Array(te), ae = 0; ae < te; ae++) Y[ae] = arguments[ae + 2];
      P.children = Y;
    }
    return ge(A.type, G, P);
  }, _e.createContext = function(A) {
    return A = { $$typeof: p, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null }, A.Provider = A, A.Consumer = { $$typeof: f, _context: A }, A;
  }, _e.createElement = function(A, N, L) {
    var P, G = {}, te = null;
    if (N != null) for (P in N.key !== void 0 && (te = "" + N.key), N) oe.call(N, P) && P !== "key" && P !== "__self" && P !== "__source" && (G[P] = N[P]);
    var Y = arguments.length - 2;
    if (Y === 1) G.children = L;
    else if (1 < Y) {
      for (var ae = Array(Y), ce = 0; ce < Y; ce++) ae[ce] = arguments[ce + 2];
      G.children = ae;
    }
    if (A && A.defaultProps) for (P in Y = A.defaultProps, Y) G[P] === void 0 && (G[P] = Y[P]);
    return ge(A, te, G);
  }, _e.createRef = function() {
    return { current: null };
  }, _e.forwardRef = function(A) {
    return { $$typeof: v, render: A };
  }, _e.isValidElement = ue, _e.lazy = function(A) {
    return { $$typeof: b, _payload: { _status: -1, _result: A }, _init: W };
  }, _e.memo = function(A, N) {
    return { $$typeof: m, type: A, compare: N === void 0 ? null : N };
  }, _e.startTransition = function(A) {
    var N = V.T, L = {};
    V.T = L;
    try {
      var P = A(), G = V.S;
      G !== null && G(L, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(F, ee);
    } catch (te) {
      ee(te);
    } finally {
      N !== null && L.types !== null && (N.types = L.types), V.T = N;
    }
  }, _e.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, _e.use = function(A) {
    return V.H.use(A);
  }, _e.useActionState = function(A, N, L) {
    return V.H.useActionState(A, N, L);
  }, _e.useCallback = function(A, N) {
    return V.H.useCallback(A, N);
  }, _e.useContext = function(A) {
    return V.H.useContext(A);
  }, _e.useDebugValue = function() {
  }, _e.useDeferredValue = function(A, N) {
    return V.H.useDeferredValue(A, N);
  }, _e.useEffect = function(A, N) {
    return V.H.useEffect(A, N);
  }, _e.useEffectEvent = function(A) {
    return V.H.useEffectEvent(A);
  }, _e.useId = function() {
    return V.H.useId();
  }, _e.useImperativeHandle = function(A, N, L) {
    return V.H.useImperativeHandle(A, N, L);
  }, _e.useInsertionEffect = function(A, N) {
    return V.H.useInsertionEffect(A, N);
  }, _e.useLayoutEffect = function(A, N) {
    return V.H.useLayoutEffect(A, N);
  }, _e.useMemo = function(A, N) {
    return V.H.useMemo(A, N);
  }, _e.useOptimistic = function(A, N) {
    return V.H.useOptimistic(A, N);
  }, _e.useReducer = function(A, N, L) {
    return V.H.useReducer(A, N, L);
  }, _e.useRef = function(A) {
    return V.H.useRef(A);
  }, _e.useState = function(A) {
    return V.H.useState(A);
  }, _e.useSyncExternalStore = function(A, N, L) {
    return V.H.useSyncExternalStore(A, N, L);
  }, _e.useTransition = function() {
    return V.H.useTransition();
  }, _e.version = "19.2.4", _e;
}
var Lv;
function gr() {
  return Lv || (Lv = 1, ef.exports = Yx()), ef.exports;
}
var tf = { exports: {} }, Mt = {};
var Hv;
function Kx() {
  if (Hv) return Mt;
  Hv = 1;
  var a = gr();
  function r(y) {
    var m = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++) m += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + y + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l() {
  }
  var i = { d: { f: l, r: function() {
    throw Error(r(522));
  }, D: l, C: l, L: l, m: l, X: l, S: l, M: l }, p: 0, findDOMNode: null }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function f(y, m, b) {
    var h = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: s, key: h == null ? null : "" + h, children: y, containerInfo: m, implementation: b };
  }
  var p = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(y, m) {
    if (y === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return Mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, Mt.createPortal = function(y, m) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(r(299));
    return f(y, m, null, b);
  }, Mt.flushSync = function(y) {
    var m = p.T, b = i.p;
    try {
      if (p.T = null, i.p = 2, y) return y();
    } finally {
      p.T = m, i.p = b, i.d.f();
    }
  }, Mt.preconnect = function(y, m) {
    typeof y == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, i.d.C(y, m));
  }, Mt.prefetchDNS = function(y) {
    typeof y == "string" && i.d.D(y);
  }, Mt.preinit = function(y, m) {
    if (typeof y == "string" && m && typeof m.as == "string") {
      var b = m.as, h = v(b, m.crossOrigin), E = typeof m.integrity == "string" ? m.integrity : void 0, w = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      b === "style" ? i.d.S(y, typeof m.precedence == "string" ? m.precedence : void 0, { crossOrigin: h, integrity: E, fetchPriority: w }) : b === "script" && i.d.X(y, { crossOrigin: h, integrity: E, fetchPriority: w, nonce: typeof m.nonce == "string" ? m.nonce : void 0 });
    }
  }, Mt.preinitModule = function(y, m) {
    if (typeof y == "string") if (typeof m == "object" && m !== null) {
      if (m.as == null || m.as === "script") {
        var b = v(m.as, m.crossOrigin);
        i.d.M(y, { crossOrigin: b, integrity: typeof m.integrity == "string" ? m.integrity : void 0, nonce: typeof m.nonce == "string" ? m.nonce : void 0 });
      }
    } else m == null && i.d.M(y);
  }, Mt.preload = function(y, m) {
    if (typeof y == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var b = m.as, h = v(b, m.crossOrigin);
      i.d.L(y, b, { crossOrigin: h, integrity: typeof m.integrity == "string" ? m.integrity : void 0, nonce: typeof m.nonce == "string" ? m.nonce : void 0, type: typeof m.type == "string" ? m.type : void 0, fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0, referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0, imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0, imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0, media: typeof m.media == "string" ? m.media : void 0 });
    }
  }, Mt.preloadModule = function(y, m) {
    if (typeof y == "string") if (m) {
      var b = v(m.as, m.crossOrigin);
      i.d.m(y, { as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0, crossOrigin: b, integrity: typeof m.integrity == "string" ? m.integrity : void 0 });
    } else i.d.m(y);
  }, Mt.requestFormReset = function(y) {
    i.d.r(y);
  }, Mt.unstable_batchedUpdates = function(y, m) {
    return y(m);
  }, Mt.useFormState = function(y, m, b) {
    return p.H.useFormState(y, m, b);
  }, Mt.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, Mt.version = "19.2.4", Mt;
}
var Uv;
function M0() {
  if (Uv) return tf.exports;
  Uv = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
    } catch (r) {
      console.error(r);
    }
  }
  return a(), tf.exports = Kx(), tf.exports;
}
var Bv;
function Xx() {
  if (Bv) return lr;
  Bv = 1;
  var a = Gx(), r = gr(), l = M0();
  function i(e) {
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
  function p(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (f(e) !== e) throw Error(i(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, o = t; ; ) {
      var c = n.return;
      if (c === null) break;
      var u = c.alternate;
      if (u === null) {
        if (o = c.return, o !== null) {
          n = o;
          continue;
        }
        break;
      }
      if (c.child === u.child) {
        for (u = c.child; u; ) {
          if (u === n) return y(c), e;
          if (u === o) return y(c), t;
          u = u.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== o.return) n = c, o = u;
      else {
        for (var g = false, x = c.child; x; ) {
          if (x === n) {
            g = true, n = c, o = u;
            break;
          }
          if (x === o) {
            g = true, o = c, n = u;
            break;
          }
          x = x.sibling;
        }
        if (!g) {
          for (x = u.child; x; ) {
            if (x === n) {
              g = true, n = u, o = c;
              break;
            }
            if (x === o) {
              g = true, o = u, n = c;
              break;
            }
            x = x.sibling;
          }
          if (!g) throw Error(i(189));
        }
      }
      if (n.alternate !== o) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
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
  var h = Object.assign, E = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), _ = /* @__PURE__ */ Symbol.for("react.fragment"), C = /* @__PURE__ */ Symbol.for("react.strict_mode"), R = /* @__PURE__ */ Symbol.for("react.profiler"), O = /* @__PURE__ */ Symbol.for("react.consumer"), k = /* @__PURE__ */ Symbol.for("react.context"), I = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), F = /* @__PURE__ */ Symbol.for("react.suspense_list"), V = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), ge = /* @__PURE__ */ Symbol.for("react.activity"), ve = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ue = Symbol.iterator;
  function de(e) {
    return e === null || typeof e != "object" ? null : (e = ue && e[ue] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var he = /* @__PURE__ */ Symbol.for("react.client.reference");
  function be(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === he ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case _:
        return "Fragment";
      case R:
        return "Profiler";
      case C:
        return "StrictMode";
      case Z:
        return "Suspense";
      case F:
        return "SuspenseList";
      case ge:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case M:
        return "Portal";
      case k:
        return e.displayName || "Context";
      case O:
        return (e._context.displayName || "Context") + ".Consumer";
      case I:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case V:
        return t = e.displayName || null, t !== null ? t : be(e.type) || "Memo";
      case oe:
        t = e._payload, e = e._init;
        try {
          return be(e(t));
        } catch {
        }
    }
    return null;
  }
  var ye = Array.isArray, z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = { pending: false, data: null, method: null, action: null }, ee = [], re = -1;
  function A(e) {
    return { current: e };
  }
  function N(e) {
    0 > re || (e.current = ee[re], ee[re] = null, re--);
  }
  function L(e, t) {
    re++, ee[re] = e.current, e.current = t;
  }
  var P = A(null), G = A(null), te = A(null), Y = A(null);
  function ae(e, t) {
    switch (L(te, t), L(G, e), L(P, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Xm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = Xm(t), e = $m(t, e);
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
    N(P), L(P, e);
  }
  function ce() {
    N(P), N(G), N(te);
  }
  function Se(e) {
    e.memoizedState !== null && L(Y, e);
    var t = P.current, n = $m(t, e.type);
    t !== n && (L(G, e), L(P, n));
  }
  function Re(e) {
    G.current === e && (N(P), N(G)), Y.current === e && (N(Y), er._currentValue = W);
  }
  var Oe, tt;
  function Fe(e) {
    if (Oe === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Oe = t && t[1] || "", tt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Oe + e + tt;
  }
  var Jt = false;
  function Gt(e, t) {
    if (!e || Jt) return "";
    Jt = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = { DetermineComponentFrameRoot: function() {
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
              } catch (q) {
                var B = q;
              }
              Reflect.construct(e, [], Q);
            } else {
              try {
                Q.call();
              } catch (q) {
                B = q;
              }
              e.call(Q.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (q) {
              B = q;
            }
            (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
            });
          }
        } catch (q) {
          if (q && B && typeof q.stack == "string") return [q.stack, B.stack];
        }
        return [null, null];
      } };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
      c && c.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var u = o.DetermineComponentFrameRoot(), g = u[0], x = u[1];
      if (g && x) {
        var T = g.split(`
`), U = x.split(`
`);
        for (c = o = 0; o < T.length && !T[o].includes("DetermineComponentFrameRoot"); ) o++;
        for (; c < U.length && !U[c].includes("DetermineComponentFrameRoot"); ) c++;
        if (o === T.length || c === U.length) for (o = T.length - 1, c = U.length - 1; 1 <= o && 0 <= c && T[o] !== U[c]; ) c--;
        for (; 1 <= o && 0 <= c; o--, c--) if (T[o] !== U[c]) {
          if (o !== 1 || c !== 1) do
            if (o--, c--, 0 > c || T[o] !== U[c]) {
              var K = `
` + T[o].replace(" at new ", " at ");
              return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), K;
            }
          while (1 <= o && 0 <= c);
          break;
        }
      }
    } finally {
      Jt = false, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Fe(n) : "";
  }
  function ut(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Fe(e.type);
      case 16:
        return Fe("Lazy");
      case 13:
        return e.child !== t && t !== null ? Fe("Suspense Fallback") : Fe("Suspense");
      case 19:
        return Fe("SuspenseList");
      case 0:
      case 15:
        return Gt(e.type, false);
      case 11:
        return Gt(e.type.render, false);
      case 1:
        return Gt(e.type, true);
      case 31:
        return Fe("Activity");
      default:
        return "";
    }
  }
  function Nn(e) {
    try {
      var t = "", n = null;
      do
        t += ut(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (o) {
      return `
Error generating stack: ` + o.message + `
` + o.stack;
    }
  }
  var Je = Object.prototype.hasOwnProperty, ka = a.unstable_scheduleCallback, La = a.unstable_cancelCallback, st = a.unstable_shouldYield, Sn = a.unstable_requestPaint, mt = a.unstable_now, pl = a.unstable_getCurrentPriorityLevel, Le = a.unstable_ImmediatePriority, rt = a.unstable_UserBlockingPriority, it = a.unstable_NormalPriority, Jn = a.unstable_LowPriority, Dn = a.unstable_IdlePriority, Ar = a.log, Wn = a.unstable_setDisableYieldValue, Ha = null, Tt = null;
  function fn(e) {
    if (typeof Ar == "function" && Wn(e), Tt && typeof Tt.setStrictMode == "function") try {
      Tt.setStrictMode(Ha, e);
    } catch {
    }
  }
  var _t = Math.clz32 ? Math.clz32 : xn, Uc = Math.log, hl = Math.LN2;
  function xn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Uc(e) / hl | 0) | 0;
  }
  var so = 256, fo = 262144, Ua = 4194304;
  function En(e) {
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
  function xe(e, t, n) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0, u = e.suspendedLanes, g = e.pingedLanes;
    e = e.warmLanes;
    var x = o & 134217727;
    return x !== 0 ? (o = x & ~u, o !== 0 ? c = En(o) : (g &= x, g !== 0 ? c = En(g) : n || (n = x & ~e, n !== 0 && (c = En(n))))) : (x = o & ~u, x !== 0 ? c = En(x) : g !== 0 ? c = En(g) : n || (n = o & ~e, n !== 0 && (c = En(n)))), c === 0 ? 0 : t !== 0 && t !== c && (t & u) === 0 && (u = c & -c, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : c;
  }
  function Ye(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ft(e, t) {
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
  function Ct() {
    var e = Ua;
    return Ua <<= 1, (Ua & 62914560) === 0 && (Ua = 4194304), e;
  }
  function ea(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function $e(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ot(e, t, n, o, c, u) {
    var g = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var x = e.entanglements, T = e.expirationTimes, U = e.hiddenUpdates;
    for (n = g & ~n; 0 < n; ) {
      var K = 31 - _t(n), Q = 1 << K;
      x[K] = 0, T[K] = -1;
      var B = U[K];
      if (B !== null) for (U[K] = null, K = 0; K < B.length; K++) {
        var q = B[K];
        q !== null && (q.lane &= -536870913);
      }
      n &= ~Q;
    }
    o !== 0 && Ba(e, o, 0), u !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(g & ~t));
  }
  function Ba(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var o = 31 - _t(t);
    e.entangledLanes |= t, e.entanglements[o] = e.entanglements[o] | 1073741824 | n & 261930;
  }
  function zt(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var o = 31 - _t(n), c = 1 << o;
      c & t | e[o] & t && (e[o] |= t), n &= ~c;
    }
  }
  function jt(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : po(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function po(e) {
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
  function dn(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Bc() {
    var e = X.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : gv(e.type));
  }
  function zd(e, t) {
    var n = X.p;
    try {
      return X.p = e, t();
    } finally {
      X.p = n;
    }
  }
  var ta = Math.random().toString(36).slice(2), vt = "__reactFiber$" + ta, kt = "__reactProps$" + ta, ho = "__reactContainer$" + ta, Ic = "__reactEvents$" + ta, tS = "__reactListeners$" + ta, nS = "__reactHandles$" + ta, jd = "__reactResources$" + ta, ml = "__reactMarker$" + ta;
  function Pc(e) {
    delete e[vt], delete e[kt], delete e[Ic], delete e[tS], delete e[nS];
  }
  function mo(e) {
    var t = e[vt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[ho] || n[vt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = tv(e); e !== null; ) {
          if (n = e[vt]) return n;
          e = tv(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function vo(e) {
    if (e = e[vt] || e[ho]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function vl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function go(e) {
    var t = e[jd];
    return t || (t = e[jd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function dt(e) {
    e[ml] = true;
  }
  var kd = /* @__PURE__ */ new Set(), Ld = {};
  function Ia(e, t) {
    yo(e, t), yo(e + "Capture", t);
  }
  function yo(e, t) {
    for (Ld[e] = t, e = 0; e < t.length; e++) kd.add(t[e]);
  }
  var aS = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Hd = {}, Ud = {};
  function oS(e) {
    return Je.call(Ud, e) ? true : Je.call(Hd, e) ? false : aS.test(e) ? Ud[e] = true : (Hd[e] = true, false);
  }
  function Nr(e, t, n) {
    if (oS(t)) if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(t);
          return;
        case "boolean":
          var o = t.toLowerCase().slice(0, 5);
          if (o !== "data-" && o !== "aria-") {
            e.removeAttribute(t);
            return;
          }
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Dr(e, t, n) {
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
  function On(e, t, n, o) {
    if (o === null) e.removeAttribute(n);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + o);
    }
  }
  function Wt(e) {
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
  function Bd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function lS(e, t, n) {
    var o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, u = o.set;
      return Object.defineProperty(e, t, { configurable: true, get: function() {
        return c.call(this);
      }, set: function(g) {
        n = "" + g, u.call(this, g);
      } }), Object.defineProperty(e, t, { enumerable: o.enumerable }), { getValue: function() {
        return n;
      }, setValue: function(g) {
        n = "" + g;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function qc(e) {
    if (!e._valueTracker) {
      var t = Bd(e) ? "checked" : "value";
      e._valueTracker = lS(e, t, "" + e[t]);
    }
  }
  function Id(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(), o = "";
    return e && (o = Bd(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== n ? (t.setValue(e), true) : false;
  }
  function Or(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var rS = /[\n"\\]/g;
  function en(e) {
    return e.replace(rS, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Vc(e, t, n, o, c, u, g, x) {
    e.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"), t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Wt(t)) : e.value !== "" + Wt(t) && (e.value = "" + Wt(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"), t != null ? Gc(e, g, Wt(t)) : n != null ? Gc(e, g, Wt(n)) : o != null && e.removeAttribute("value"), c == null && u != null && (e.defaultChecked = !!u), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? e.name = "" + Wt(x) : e.removeAttribute("name");
  }
  function Pd(e, t, n, o, c, u, g, x) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        qc(e);
        return;
      }
      n = n != null ? "" + Wt(n) : "", t = t != null ? "" + Wt(t) : n, x || t === e.value || (e.value = t), e.defaultValue = t;
    }
    o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = x ? e.checked : !!o, e.defaultChecked = !!o, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g), qc(e);
  }
  function Gc(e, t, n) {
    t === "number" && Or(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function bo(e, t, n, o) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < n.length; c++) t["$" + n[c]] = true;
      for (n = 0; n < e.length; n++) c = t.hasOwnProperty("$" + e[n].value), e[n].selected !== c && (e[n].selected = c), c && o && (e[n].defaultSelected = true);
    } else {
      for (n = "" + Wt(n), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === n) {
          e[c].selected = true, o && (e[c].defaultSelected = true);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = true);
    }
  }
  function qd(e, t, n) {
    if (t != null && (t = "" + Wt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Wt(n) : "";
  }
  function Vd(e, t, n, o) {
    if (t == null) {
      if (o != null) {
        if (n != null) throw Error(i(92));
        if (ye(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        n = o;
      }
      n == null && (n = ""), t = n;
    }
    n = Wt(t), e.defaultValue = n, o = e.textContent, o === n && o !== "" && o !== null && (e.value = o), qc(e);
  }
  function So(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var iS = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Gd(e, t, n) {
    var o = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? o ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : o ? e.setProperty(t, n) : typeof n != "number" || n === 0 || iS.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Yd(e, t, n) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (e = e.style, n != null) {
      for (var o in n) !n.hasOwnProperty(o) || t != null && t.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var c in t) o = t[c], t.hasOwnProperty(c) && n[c] !== o && Gd(e, c, o);
    } else for (var u in t) t.hasOwnProperty(u) && Gd(e, u, t[u]);
  }
  function Yc(e) {
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
  var cS = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), uS = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zr(e) {
    return uS.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function zn() {
  }
  var Kc = null;
  function Xc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var xo = null, Eo = null;
  function Kd(e) {
    var t = vo(e);
    if (t && (e = t.stateNode)) {
      var n = e[kt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Vc(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + en("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
              var o = n[t];
              if (o !== e && o.form === e.form) {
                var c = o[kt] || null;
                if (!c) throw Error(i(90));
                Vc(o, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name);
              }
            }
            for (t = 0; t < n.length; t++) o = n[t], o.form === e.form && Id(o);
          }
          break e;
        case "textarea":
          qd(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && bo(e, !!n.multiple, t, false);
      }
    }
  }
  var $c = false;
  function Xd(e, t, n) {
    if ($c) return e(t, n);
    $c = true;
    try {
      var o = e(t);
      return o;
    } finally {
      if ($c = false, (xo !== null || Eo !== null) && (Si(), xo && (t = xo, e = Eo, Eo = xo = null, Kd(t), e))) for (t = 0; t < e.length; t++) Kd(e[t]);
    }
  }
  function gl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var o = n[kt] || null;
    if (o === null) return null;
    n = o[t];
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
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qc = false;
  if (jn) try {
    var yl = {};
    Object.defineProperty(yl, "passive", { get: function() {
      Qc = true;
    } }), window.addEventListener("test", yl, yl), window.removeEventListener("test", yl, yl);
  } catch {
    Qc = false;
  }
  var na = null, Zc = null, jr = null;
  function $d() {
    if (jr) return jr;
    var e, t = Zc, n = t.length, o, c = "value" in na ? na.value : na.textContent, u = c.length;
    for (e = 0; e < n && t[e] === c[e]; e++) ;
    var g = n - e;
    for (o = 1; o <= g && t[n - o] === c[u - o]; o++) ;
    return jr = c.slice(e, 1 < o ? 1 - o : void 0);
  }
  function kr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Lr() {
    return true;
  }
  function Qd() {
    return false;
  }
  function Lt(e) {
    function t(n, o, c, u, g) {
      this._reactName = n, this._targetInst = c, this.type = o, this.nativeEvent = u, this.target = g, this.currentTarget = null;
      for (var x in e) e.hasOwnProperty(x) && (n = e[x], this[x] = n ? n(u) : u[x]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? Lr : Qd, this.isPropagationStopped = Qd, this;
    }
    return h(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Lr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Lr);
    }, persist: function() {
    }, isPersistent: Lr }), t;
  }
  var Pa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Hr = Lt(Pa), bl = h({}, Pa, { view: 0, detail: 0 }), sS = Lt(bl), Fc, Jc, Sl, Ur = h({}, bl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: eu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Sl && (Sl && e.type === "mousemove" ? (Fc = e.screenX - Sl.screenX, Jc = e.screenY - Sl.screenY) : Jc = Fc = 0, Sl = e), Fc);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Jc;
  } }), Zd = Lt(Ur), fS = h({}, Ur, { dataTransfer: 0 }), dS = Lt(fS), pS = h({}, bl, { relatedTarget: 0 }), Wc = Lt(pS), hS = h({}, Pa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mS = Lt(hS), vS = h({}, Pa, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), gS = Lt(vS), yS = h({}, Pa, { data: 0 }), Fd = Lt(yS), bS = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, SS = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, xS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ES(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = xS[e]) ? !!t[e] : false;
  }
  function eu() {
    return ES;
  }
  var _S = h({}, bl, { key: function(e) {
    if (e.key) {
      var t = bS[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = kr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? SS[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: eu, charCode: function(e) {
    return e.type === "keypress" ? kr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? kr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), CS = Lt(_S), MS = h({}, Ur, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Jd = Lt(MS), RS = h({}, bl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: eu }), wS = Lt(RS), TS = h({}, Pa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), AS = Lt(TS), NS = h({}, Ur, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), DS = Lt(NS), OS = h({}, Pa, { newState: 0, oldState: 0 }), zS = Lt(OS), jS = [9, 13, 27, 32], tu = jn && "CompositionEvent" in window, xl = null;
  jn && "documentMode" in document && (xl = document.documentMode);
  var kS = jn && "TextEvent" in window && !xl, Wd = jn && (!tu || xl && 8 < xl && 11 >= xl), ep = " ", tp = false;
  function np(e, t) {
    switch (e) {
      case "keyup":
        return jS.indexOf(t.keyCode) !== -1;
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
  function ap(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var _o = false;
  function LS(e, t) {
    switch (e) {
      case "compositionend":
        return ap(t);
      case "keypress":
        return t.which !== 32 ? null : (tp = true, ep);
      case "textInput":
        return e = t.data, e === ep && tp ? null : e;
      default:
        return null;
    }
  }
  function HS(e, t) {
    if (_o) return e === "compositionend" || !tu && np(e, t) ? (e = $d(), jr = Zc = na = null, _o = false, e) : null;
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
        return Wd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var US = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function op(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!US[e.type] : t === "textarea";
  }
  function lp(e, t, n, o) {
    xo ? Eo ? Eo.push(o) : Eo = [o] : xo = o, t = wi(t, "onChange"), 0 < t.length && (n = new Hr("onChange", "change", null, n, o), e.push({ event: n, listeners: t }));
  }
  var El = null, _l = null;
  function BS(e) {
    Pm(e, 0);
  }
  function Br(e) {
    var t = vl(e);
    if (Id(t)) return e;
  }
  function rp(e, t) {
    if (e === "change") return t;
  }
  var ip = false;
  if (jn) {
    var nu;
    if (jn) {
      var au = "oninput" in document;
      if (!au) {
        var cp = document.createElement("div");
        cp.setAttribute("oninput", "return;"), au = typeof cp.oninput == "function";
      }
      nu = au;
    } else nu = false;
    ip = nu && (!document.documentMode || 9 < document.documentMode);
  }
  function up() {
    El && (El.detachEvent("onpropertychange", sp), _l = El = null);
  }
  function sp(e) {
    if (e.propertyName === "value" && Br(_l)) {
      var t = [];
      lp(t, _l, e, Xc(e)), Xd(BS, t);
    }
  }
  function IS(e, t, n) {
    e === "focusin" ? (up(), El = t, _l = n, El.attachEvent("onpropertychange", sp)) : e === "focusout" && up();
  }
  function PS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Br(_l);
  }
  function qS(e, t) {
    if (e === "click") return Br(t);
  }
  function VS(e, t) {
    if (e === "input" || e === "change") return Br(t);
  }
  function GS(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Yt = typeof Object.is == "function" ? Object.is : GS;
  function Cl(e, t) {
    if (Yt(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var n = Object.keys(e), o = Object.keys(t);
    if (n.length !== o.length) return false;
    for (o = 0; o < n.length; o++) {
      var c = n[o];
      if (!Je.call(t, c) || !Yt(e[c], t[c])) return false;
    }
    return true;
  }
  function fp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function dp(e, t) {
    var n = fp(e);
    e = 0;
    for (var o; n; ) {
      if (n.nodeType === 3) {
        if (o = e + n.textContent.length, e <= t && o >= t) return { node: n, offset: t - e };
        e = o;
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
      n = fp(n);
    }
  }
  function pp(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? pp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function hp(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Or(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Or(e.document);
    }
    return t;
  }
  function ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var YS = jn && "documentMode" in document && 11 >= document.documentMode, Co = null, lu = null, Ml = null, ru = false;
  function mp(e, t, n) {
    var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ru || Co == null || Co !== Or(o) || (o = Co, "selectionStart" in o && ou(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Ml && Cl(Ml, o) || (Ml = o, o = wi(lu, "onSelect"), 0 < o.length && (t = new Hr("onSelect", "select", null, t, n), e.push({ event: t, listeners: o }), t.target = Co)));
  }
  function qa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Mo = { animationend: qa("Animation", "AnimationEnd"), animationiteration: qa("Animation", "AnimationIteration"), animationstart: qa("Animation", "AnimationStart"), transitionrun: qa("Transition", "TransitionRun"), transitionstart: qa("Transition", "TransitionStart"), transitioncancel: qa("Transition", "TransitionCancel"), transitionend: qa("Transition", "TransitionEnd") }, iu = {}, vp = {};
  jn && (vp = document.createElement("div").style, "AnimationEvent" in window || (delete Mo.animationend.animation, delete Mo.animationiteration.animation, delete Mo.animationstart.animation), "TransitionEvent" in window || delete Mo.transitionend.transition);
  function Va(e) {
    if (iu[e]) return iu[e];
    if (!Mo[e]) return e;
    var t = Mo[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in vp) return iu[e] = t[n];
    return e;
  }
  var gp = Va("animationend"), yp = Va("animationiteration"), bp = Va("animationstart"), KS = Va("transitionrun"), XS = Va("transitionstart"), $S = Va("transitioncancel"), Sp = Va("transitionend"), xp = /* @__PURE__ */ new Map(), cu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  cu.push("scrollEnd");
  function pn(e, t) {
    xp.set(e, t), Ia(t, [e]);
  }
  var Ir = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, tn = [], Ro = 0, uu = 0;
  function Pr() {
    for (var e = Ro, t = uu = Ro = 0; t < e; ) {
      var n = tn[t];
      tn[t++] = null;
      var o = tn[t];
      tn[t++] = null;
      var c = tn[t];
      tn[t++] = null;
      var u = tn[t];
      if (tn[t++] = null, o !== null && c !== null) {
        var g = o.pending;
        g === null ? c.next = c : (c.next = g.next, g.next = c), o.pending = c;
      }
      u !== 0 && Ep(n, c, u);
    }
  }
  function qr(e, t, n, o) {
    tn[Ro++] = e, tn[Ro++] = t, tn[Ro++] = n, tn[Ro++] = o, uu |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function su(e, t, n, o) {
    return qr(e, t, n, o), Vr(e);
  }
  function Ga(e, t) {
    return qr(e, null, null, t), Vr(e);
  }
  function Ep(e, t, n) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n);
    for (var c = false, u = e.return; u !== null; ) u.childLanes |= n, o = u.alternate, o !== null && (o.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (c = true)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, c && t !== null && (c = 31 - _t(n), e = u.hiddenUpdates, o = e[c], o === null ? e[c] = [t] : o.push(t), t.lane = n | 536870912), u) : null;
  }
  function Vr(e) {
    if (50 < Xl) throw Xl = 0, bs = null, Error(i(185));
    for (var t = e.return; t !== null; ) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var wo = {};
  function QS(e, t, n, o) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kt(e, t, n, o) {
    return new QS(e, t, n, o);
  }
  function fu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function kn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Kt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function _p(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
  }
  function Gr(e, t, n, o, c, u) {
    var g = 0;
    if (o = e, typeof e == "function") fu(e) && (g = 1);
    else if (typeof e == "string") g = ex(e, n, P.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case ge:
        return e = Kt(31, n, t, c), e.elementType = ge, e.lanes = u, e;
      case _:
        return Ya(n.children, c, u, t);
      case C:
        g = 8, c |= 24;
        break;
      case R:
        return e = Kt(12, n, t, c | 2), e.elementType = R, e.lanes = u, e;
      case Z:
        return e = Kt(13, n, t, c), e.elementType = Z, e.lanes = u, e;
      case F:
        return e = Kt(19, n, t, c), e.elementType = F, e.lanes = u, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case k:
            g = 10;
            break e;
          case O:
            g = 9;
            break e;
          case I:
            g = 11;
            break e;
          case V:
            g = 14;
            break e;
          case oe:
            g = 16, o = null;
            break e;
        }
        g = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), o = null;
    }
    return t = Kt(g, n, t, c), t.elementType = e, t.type = o, t.lanes = u, t;
  }
  function Ya(e, t, n, o) {
    return e = Kt(7, e, o, t), e.lanes = n, e;
  }
  function du(e, t, n) {
    return e = Kt(6, e, null, t), e.lanes = n, e;
  }
  function Cp(e) {
    var t = Kt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function pu(e, t, n) {
    return t = Kt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  var Mp = /* @__PURE__ */ new WeakMap();
  function nn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Mp.get(e);
      return n !== void 0 ? n : (t = { value: e, source: t, stack: Nn(t) }, Mp.set(e, t), t);
    }
    return { value: e, source: t, stack: Nn(t) };
  }
  var To = [], Ao = 0, Yr = null, Rl = 0, an = [], on = 0, aa = null, _n = 1, Cn = "";
  function Ln(e, t) {
    To[Ao++] = Rl, To[Ao++] = Yr, Yr = e, Rl = t;
  }
  function Rp(e, t, n) {
    an[on++] = _n, an[on++] = Cn, an[on++] = aa, aa = e;
    var o = _n;
    e = Cn;
    var c = 32 - _t(o) - 1;
    o &= ~(1 << c), n += 1;
    var u = 32 - _t(t) + c;
    if (30 < u) {
      var g = c - c % 5;
      u = (o & (1 << g) - 1).toString(32), o >>= g, c -= g, _n = 1 << 32 - _t(t) + c | n << c | o, Cn = u + e;
    } else _n = 1 << u | n << c | o, Cn = e;
  }
  function hu(e) {
    e.return !== null && (Ln(e, 1), Rp(e, 1, 0));
  }
  function mu(e) {
    for (; e === Yr; ) Yr = To[--Ao], To[Ao] = null, Rl = To[--Ao], To[Ao] = null;
    for (; e === aa; ) aa = an[--on], an[on] = null, Cn = an[--on], an[on] = null, _n = an[--on], an[on] = null;
  }
  function wp(e, t) {
    an[on++] = _n, an[on++] = Cn, an[on++] = aa, _n = t.id, Cn = t.overflow, aa = e;
  }
  var gt = null, Ve = null, De = false, oa = null, ln = false, vu = Error(i(519));
  function la(e) {
    var t = Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw wl(nn(t, e)), vu;
  }
  function Tp(e) {
    var t = e.stateNode, n = e.type, o = e.memoizedProps;
    switch (t[vt] = e, t[kt] = o, n) {
      case "dialog":
        Te("cancel", t), Te("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Te("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ql.length; n++) Te(Ql[n], t);
        break;
      case "source":
        Te("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Te("error", t), Te("load", t);
        break;
      case "details":
        Te("toggle", t);
        break;
      case "input":
        Te("invalid", t), Pd(t, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, true);
        break;
      case "select":
        Te("invalid", t);
        break;
      case "textarea":
        Te("invalid", t), Vd(t, o.value, o.defaultValue, o.children);
    }
    n = o.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || o.suppressHydrationWarning === true || Ym(t.textContent, n) ? (o.popover != null && (Te("beforetoggle", t), Te("toggle", t)), o.onScroll != null && Te("scroll", t), o.onScrollEnd != null && Te("scrollend", t), o.onClick != null && (t.onclick = zn), t = true) : t = false, t || la(e, true);
  }
  function Ap(e) {
    for (gt = e.return; gt; ) switch (gt.tag) {
      case 5:
      case 31:
      case 13:
        ln = false;
        return;
      case 27:
      case 3:
        ln = true;
        return;
      default:
        gt = gt.return;
    }
  }
  function No(e) {
    if (e !== gt) return false;
    if (!De) return Ap(e), De = true, false;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || js(e.type, e.memoizedProps)), n = !n), n && Ve && la(e), Ap(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      Ve = ev(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      Ve = ev(e);
    } else t === 27 ? (t = Ve, ba(e.type) ? (e = Bs, Bs = null, Ve = e) : Ve = t) : Ve = gt ? cn(e.stateNode.nextSibling) : null;
    return true;
  }
  function Ka() {
    Ve = gt = null, De = false;
  }
  function gu() {
    var e = oa;
    return e !== null && (It === null ? It = e : It.push.apply(It, e), oa = null), e;
  }
  function wl(e) {
    oa === null ? oa = [e] : oa.push(e);
  }
  var yu = A(null), Xa = null, Hn = null;
  function ra(e, t, n) {
    L(yu, t._currentValue), t._currentValue = n;
  }
  function Un(e) {
    e._currentValue = yu.current, N(yu);
  }
  function bu(e, t, n) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Su(e, t, n, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var u = c.dependencies;
      if (u !== null) {
        var g = c.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var x = u;
          u = c;
          for (var T = 0; T < t.length; T++) if (x.context === t[T]) {
            u.lanes |= n, x = u.alternate, x !== null && (x.lanes |= n), bu(u.return, n, e), o || (g = null);
            break e;
          }
          u = x.next;
        }
      } else if (c.tag === 18) {
        if (g = c.return, g === null) throw Error(i(341));
        g.lanes |= n, u = g.alternate, u !== null && (u.lanes |= n), bu(g, n, e), g = null;
      } else g = c.child;
      if (g !== null) g.return = c;
      else for (g = c; g !== null; ) {
        if (g === e) {
          g = null;
          break;
        }
        if (c = g.sibling, c !== null) {
          c.return = g.return, g = c;
          break;
        }
        g = g.return;
      }
      c = g;
    }
  }
  function Do(e, t, n, o) {
    e = null;
    for (var c = t, u = false; c !== null; ) {
      if (!u) {
        if ((c.flags & 524288) !== 0) u = true;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var g = c.alternate;
        if (g === null) throw Error(i(387));
        if (g = g.memoizedProps, g !== null) {
          var x = c.type;
          Yt(c.pendingProps.value, g.value) || (e !== null ? e.push(x) : e = [x]);
        }
      } else if (c === Y.current) {
        if (g = c.alternate, g === null) throw Error(i(387));
        g.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(er) : e = [er]);
      }
      c = c.return;
    }
    e !== null && Su(t, e, n, o), t.flags |= 262144;
  }
  function Kr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Yt(e.context._currentValue, e.memoizedValue)) return true;
      e = e.next;
    }
    return false;
  }
  function $a(e) {
    Xa = e, Hn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function yt(e) {
    return Np(Xa, e);
  }
  function Xr(e, t) {
    return Xa === null && $a(e), Np(e, t);
  }
  function Np(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Hn === null) {
      if (e === null) throw Error(i(308));
      Hn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Hn = Hn.next = t;
    return n;
  }
  var ZS = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = { aborted: false, addEventListener: function(n, o) {
      e.push(o);
    } };
    this.abort = function() {
      t.aborted = true, e.forEach(function(n) {
        return n();
      });
    };
  }, FS = a.unstable_scheduleCallback, JS = a.unstable_NormalPriority, nt = { $$typeof: k, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function xu() {
    return { controller: new ZS(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Tl(e) {
    e.refCount--, e.refCount === 0 && FS(JS, function() {
      e.controller.abort();
    });
  }
  var Al = null, Eu = 0, Oo = 0, zo = null;
  function WS(e, t) {
    if (Al === null) {
      var n = Al = [];
      Eu = 0, Oo = Ms(), zo = { status: "pending", value: void 0, then: function(o) {
        n.push(o);
      } };
    }
    return Eu++, t.then(Dp, Dp), t;
  }
  function Dp() {
    if (--Eu === 0 && Al !== null) {
      zo !== null && (zo.status = "fulfilled");
      var e = Al;
      Al = null, Oo = 0, zo = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function e2(e, t) {
    var n = [], o = { status: "pending", value: null, reason: null, then: function(c) {
      n.push(c);
    } };
    return e.then(function() {
      o.status = "fulfilled", o.value = t;
      for (var c = 0; c < n.length; c++) (0, n[c])(t);
    }, function(c) {
      for (o.status = "rejected", o.reason = c, c = 0; c < n.length; c++) (0, n[c])(void 0);
    }), o;
  }
  var Op = z.S;
  z.S = function(e, t) {
    mm = mt(), typeof t == "object" && t !== null && typeof t.then == "function" && WS(e, t), Op !== null && Op(e, t);
  };
  var Qa = A(null);
  function _u() {
    var e = Qa.current;
    return e !== null ? e : qe.pooledCache;
  }
  function $r(e, t) {
    t === null ? L(Qa, Qa.current) : L(Qa, t.pool);
  }
  function zp() {
    var e = _u();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var jo = Error(i(460)), Cu = Error(i(474)), Qr = Error(i(542)), Zr = { then: function() {
  } };
  function jp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function kp(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(zn, zn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Hp(e), e;
      default:
        if (typeof t.status == "string") t.then(zn, zn);
        else {
          if (e = qe, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
          e = t, e.status = "pending", e.then(function(o) {
            if (t.status === "pending") {
              var c = t;
              c.status = "fulfilled", c.value = o;
            }
          }, function(o) {
            if (t.status === "pending") {
              var c = t;
              c.status = "rejected", c.reason = o;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Hp(e), e;
        }
        throw Fa = t, jo;
    }
  }
  function Za(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Fa = n, jo) : n;
    }
  }
  var Fa = null;
  function Lp() {
    if (Fa === null) throw Error(i(459));
    var e = Fa;
    return Fa = null, e;
  }
  function Hp(e) {
    if (e === jo || e === Qr) throw Error(i(483));
  }
  var ko = null, Nl = 0;
  function Fr(e) {
    var t = Nl;
    return Nl += 1, ko === null && (ko = []), kp(ko, e, t);
  }
  function Dl(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Jr(e, t) {
    throw t.$$typeof === E ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function Up(e) {
    function t(j, D) {
      if (e) {
        var H = j.deletions;
        H === null ? (j.deletions = [D], j.flags |= 16) : H.push(D);
      }
    }
    function n(j, D) {
      if (!e) return null;
      for (; D !== null; ) t(j, D), D = D.sibling;
      return null;
    }
    function o(j) {
      for (var D = /* @__PURE__ */ new Map(); j !== null; ) j.key !== null ? D.set(j.key, j) : D.set(j.index, j), j = j.sibling;
      return D;
    }
    function c(j, D) {
      return j = kn(j, D), j.index = 0, j.sibling = null, j;
    }
    function u(j, D, H) {
      return j.index = H, e ? (H = j.alternate, H !== null ? (H = H.index, H < D ? (j.flags |= 67108866, D) : H) : (j.flags |= 67108866, D)) : (j.flags |= 1048576, D);
    }
    function g(j) {
      return e && j.alternate === null && (j.flags |= 67108866), j;
    }
    function x(j, D, H, $) {
      return D === null || D.tag !== 6 ? (D = du(H, j.mode, $), D.return = j, D) : (D = c(D, H), D.return = j, D);
    }
    function T(j, D, H, $) {
      var pe = H.type;
      return pe === _ ? K(j, D, H.props.children, $, H.key) : D !== null && (D.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === oe && Za(pe) === D.type) ? (D = c(D, H.props), Dl(D, H), D.return = j, D) : (D = Gr(H.type, H.key, H.props, null, j.mode, $), Dl(D, H), D.return = j, D);
    }
    function U(j, D, H, $) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== H.containerInfo || D.stateNode.implementation !== H.implementation ? (D = pu(H, j.mode, $), D.return = j, D) : (D = c(D, H.children || []), D.return = j, D);
    }
    function K(j, D, H, $, pe) {
      return D === null || D.tag !== 7 ? (D = Ya(H, j.mode, $, pe), D.return = j, D) : (D = c(D, H), D.return = j, D);
    }
    function Q(j, D, H) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint") return D = du("" + D, j.mode, H), D.return = j, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case w:
            return H = Gr(D.type, D.key, D.props, null, j.mode, H), Dl(H, D), H.return = j, H;
          case M:
            return D = pu(D, j.mode, H), D.return = j, D;
          case oe:
            return D = Za(D), Q(j, D, H);
        }
        if (ye(D) || de(D)) return D = Ya(D, j.mode, H, null), D.return = j, D;
        if (typeof D.then == "function") return Q(j, Fr(D), H);
        if (D.$$typeof === k) return Q(j, Xr(j, D), H);
        Jr(j, D);
      }
      return null;
    }
    function B(j, D, H, $) {
      var pe = D !== null ? D.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint") return pe !== null ? null : x(j, D, "" + H, $);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case w:
            return H.key === pe ? T(j, D, H, $) : null;
          case M:
            return H.key === pe ? U(j, D, H, $) : null;
          case oe:
            return H = Za(H), B(j, D, H, $);
        }
        if (ye(H) || de(H)) return pe !== null ? null : K(j, D, H, $, null);
        if (typeof H.then == "function") return B(j, D, Fr(H), $);
        if (H.$$typeof === k) return B(j, D, Xr(j, H), $);
        Jr(j, H);
      }
      return null;
    }
    function q(j, D, H, $, pe) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint") return j = j.get(H) || null, x(D, j, "" + $, pe);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case w:
            return j = j.get($.key === null ? H : $.key) || null, T(D, j, $, pe);
          case M:
            return j = j.get($.key === null ? H : $.key) || null, U(D, j, $, pe);
          case oe:
            return $ = Za($), q(j, D, H, $, pe);
        }
        if (ye($) || de($)) return j = j.get(H) || null, K(D, j, $, pe, null);
        if (typeof $.then == "function") return q(j, D, H, Fr($), pe);
        if ($.$$typeof === k) return q(j, D, H, Xr(D, $), pe);
        Jr(D, $);
      }
      return null;
    }
    function ie(j, D, H, $) {
      for (var pe = null, ze = null, se = D, Me = D = 0, Ne = null; se !== null && Me < H.length; Me++) {
        se.index > Me ? (Ne = se, se = null) : Ne = se.sibling;
        var je = B(j, se, H[Me], $);
        if (je === null) {
          se === null && (se = Ne);
          break;
        }
        e && se && je.alternate === null && t(j, se), D = u(je, D, Me), ze === null ? pe = je : ze.sibling = je, ze = je, se = Ne;
      }
      if (Me === H.length) return n(j, se), De && Ln(j, Me), pe;
      if (se === null) {
        for (; Me < H.length; Me++) se = Q(j, H[Me], $), se !== null && (D = u(se, D, Me), ze === null ? pe = se : ze.sibling = se, ze = se);
        return De && Ln(j, Me), pe;
      }
      for (se = o(se); Me < H.length; Me++) Ne = q(se, j, Me, H[Me], $), Ne !== null && (e && Ne.alternate !== null && se.delete(Ne.key === null ? Me : Ne.key), D = u(Ne, D, Me), ze === null ? pe = Ne : ze.sibling = Ne, ze = Ne);
      return e && se.forEach(function(Ca) {
        return t(j, Ca);
      }), De && Ln(j, Me), pe;
    }
    function me(j, D, H, $) {
      if (H == null) throw Error(i(151));
      for (var pe = null, ze = null, se = D, Me = D = 0, Ne = null, je = H.next(); se !== null && !je.done; Me++, je = H.next()) {
        se.index > Me ? (Ne = se, se = null) : Ne = se.sibling;
        var Ca = B(j, se, je.value, $);
        if (Ca === null) {
          se === null && (se = Ne);
          break;
        }
        e && se && Ca.alternate === null && t(j, se), D = u(Ca, D, Me), ze === null ? pe = Ca : ze.sibling = Ca, ze = Ca, se = Ne;
      }
      if (je.done) return n(j, se), De && Ln(j, Me), pe;
      if (se === null) {
        for (; !je.done; Me++, je = H.next()) je = Q(j, je.value, $), je !== null && (D = u(je, D, Me), ze === null ? pe = je : ze.sibling = je, ze = je);
        return De && Ln(j, Me), pe;
      }
      for (se = o(se); !je.done; Me++, je = H.next()) je = q(se, j, Me, je.value, $), je !== null && (e && je.alternate !== null && se.delete(je.key === null ? Me : je.key), D = u(je, D, Me), ze === null ? pe = je : ze.sibling = je, ze = je);
      return e && se.forEach(function(fx) {
        return t(j, fx);
      }), De && Ln(j, Me), pe;
    }
    function Pe(j, D, H, $) {
      if (typeof H == "object" && H !== null && H.type === _ && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case w:
            e: {
              for (var pe = H.key; D !== null; ) {
                if (D.key === pe) {
                  if (pe = H.type, pe === _) {
                    if (D.tag === 7) {
                      n(j, D.sibling), $ = c(D, H.props.children), $.return = j, j = $;
                      break e;
                    }
                  } else if (D.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === oe && Za(pe) === D.type) {
                    n(j, D.sibling), $ = c(D, H.props), Dl($, H), $.return = j, j = $;
                    break e;
                  }
                  n(j, D);
                  break;
                } else t(j, D);
                D = D.sibling;
              }
              H.type === _ ? ($ = Ya(H.props.children, j.mode, $, H.key), $.return = j, j = $) : ($ = Gr(H.type, H.key, H.props, null, j.mode, $), Dl($, H), $.return = j, j = $);
            }
            return g(j);
          case M:
            e: {
              for (pe = H.key; D !== null; ) {
                if (D.key === pe) if (D.tag === 4 && D.stateNode.containerInfo === H.containerInfo && D.stateNode.implementation === H.implementation) {
                  n(j, D.sibling), $ = c(D, H.children || []), $.return = j, j = $;
                  break e;
                } else {
                  n(j, D);
                  break;
                }
                else t(j, D);
                D = D.sibling;
              }
              $ = pu(H, j.mode, $), $.return = j, j = $;
            }
            return g(j);
          case oe:
            return H = Za(H), Pe(j, D, H, $);
        }
        if (ye(H)) return ie(j, D, H, $);
        if (de(H)) {
          if (pe = de(H), typeof pe != "function") throw Error(i(150));
          return H = pe.call(H), me(j, D, H, $);
        }
        if (typeof H.then == "function") return Pe(j, D, Fr(H), $);
        if (H.$$typeof === k) return Pe(j, D, Xr(j, H), $);
        Jr(j, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, D !== null && D.tag === 6 ? (n(j, D.sibling), $ = c(D, H), $.return = j, j = $) : (n(j, D), $ = du(H, j.mode, $), $.return = j, j = $), g(j)) : n(j, D);
    }
    return function(j, D, H, $) {
      try {
        Nl = 0;
        var pe = Pe(j, D, H, $);
        return ko = null, pe;
      } catch (se) {
        if (se === jo || se === Qr) throw se;
        var ze = Kt(29, se, null, j.mode);
        return ze.lanes = $, ze.return = j, ze;
      }
    };
  }
  var Ja = Up(true), Bp = Up(false), ia = false;
  function Mu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Ru(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
  }
  function ca(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ua(e, t, n) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (ke & 2) !== 0) {
      var c = o.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), o.pending = t, t = Vr(e), Ep(e, null, n), t;
    }
    return qr(e, o, t, n), Vr(e);
  }
  function Ol(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, n |= o, t.lanes = n, zt(e, n);
    }
  }
  function wu(e, t) {
    var n = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, n === o)) {
      var c = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var g = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          u === null ? c = u = g : u = u.next = g, n = n.next;
        } while (n !== null);
        u === null ? c = u = t : u = u.next = t;
      } else c = u = t;
      n = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: u, shared: o.shared, callbacks: o.callbacks }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Tu = false;
  function zl() {
    if (Tu) {
      var e = zo;
      if (e !== null) throw e;
    }
  }
  function jl(e, t, n, o) {
    Tu = false;
    var c = e.updateQueue;
    ia = false;
    var u = c.firstBaseUpdate, g = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var T = x, U = T.next;
      T.next = null, g === null ? u = U : g.next = U, g = T;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, x = K.lastBaseUpdate, x !== g && (x === null ? K.firstBaseUpdate = U : x.next = U, K.lastBaseUpdate = T));
    }
    if (u !== null) {
      var Q = c.baseState;
      g = 0, K = U = T = null, x = u;
      do {
        var B = x.lane & -536870913, q = B !== x.lane;
        if (q ? (Ae & B) === B : (o & B) === B) {
          B !== 0 && B === Oo && (Tu = true), K !== null && (K = K.next = { lane: 0, tag: x.tag, payload: x.payload, callback: null, next: null });
          e: {
            var ie = e, me = x;
            B = t;
            var Pe = n;
            switch (me.tag) {
              case 1:
                if (ie = me.payload, typeof ie == "function") {
                  Q = ie.call(Pe, Q, B);
                  break e;
                }
                Q = ie;
                break e;
              case 3:
                ie.flags = ie.flags & -65537 | 128;
              case 0:
                if (ie = me.payload, B = typeof ie == "function" ? ie.call(Pe, Q, B) : ie, B == null) break e;
                Q = h({}, Q, B);
                break e;
              case 2:
                ia = true;
            }
          }
          B = x.callback, B !== null && (e.flags |= 64, q && (e.flags |= 8192), q = c.callbacks, q === null ? c.callbacks = [B] : q.push(B));
        } else q = { lane: B, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, K === null ? (U = K = q, T = Q) : K = K.next = q, g |= B;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null) break;
          q = x, x = q.next, q.next = null, c.lastBaseUpdate = q, c.shared.pending = null;
        }
      } while (true);
      K === null && (T = Q), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = K, u === null && (c.shared.lanes = 0), ha |= g, e.lanes = g, e.memoizedState = Q;
    }
  }
  function Ip(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function Pp(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Ip(n[e], t);
  }
  var Lo = A(null), Wr = A(0);
  function qp(e, t) {
    e = Xn, L(Wr, e), L(Lo, t), Xn = e | t.baseLanes;
  }
  function Au() {
    L(Wr, Xn), L(Lo, Lo.current);
  }
  function Nu() {
    Xn = Wr.current, N(Lo), N(Wr);
  }
  var Xt = A(null), rn = null;
  function sa(e) {
    var t = e.alternate;
    L(We, We.current & 1), L(Xt, e), rn === null && (t === null || Lo.current !== null || t.memoizedState !== null) && (rn = e);
  }
  function Du(e) {
    L(We, We.current), L(Xt, e), rn === null && (rn = e);
  }
  function Vp(e) {
    e.tag === 22 ? (L(We, We.current), L(Xt, e), rn === null && (rn = e)) : fa();
  }
  function fa() {
    L(We, We.current), L(Xt, Xt.current);
  }
  function $t(e) {
    N(Xt), rn === e && (rn = null), N(We);
  }
  var We = A(0);
  function ei(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Hs(n) || Us(n))) return t;
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
  var Bn = 0, Ce = null, Be = null, at = null, ti = false, Ho = false, Wa = false, ni = 0, kl = 0, Uo = null, t2 = 0;
  function Qe() {
    throw Error(i(321));
  }
  function Ou(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Yt(e[n], t[n])) return false;
    return true;
  }
  function zu(e, t, n, o, c, u) {
    return Bn = u, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = e === null || e.memoizedState === null ? Rh : $u, Wa = false, u = n(o, c), Wa = false, Ho && (u = Yp(t, n, o, c)), Gp(e), u;
  }
  function Gp(e) {
    z.H = Ul;
    var t = Be !== null && Be.next !== null;
    if (Bn = 0, at = Be = Ce = null, ti = false, kl = 0, Uo = null, t) throw Error(i(300));
    e === null || ot || (e = e.dependencies, e !== null && Kr(e) && (ot = true));
  }
  function Yp(e, t, n, o) {
    Ce = e;
    var c = 0;
    do {
      if (Ho && (Uo = null), kl = 0, Ho = false, 25 <= c) throw Error(i(301));
      if (c += 1, at = Be = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      z.H = wh, u = t(n, o);
    } while (Ho);
    return u;
  }
  function n2() {
    var e = z.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ll(t) : t, e = e.useState()[0], (Be !== null ? Be.memoizedState : null) !== e && (Ce.flags |= 1024), t;
  }
  function ju() {
    var e = ni !== 0;
    return ni = 0, e;
  }
  function ku(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Lu(e) {
    if (ti) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ti = false;
    }
    Bn = 0, at = Be = Ce = null, Ho = false, kl = ni = 0, Uo = null;
  }
  function At() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return at === null ? Ce.memoizedState = at = e : at = at.next = e, at;
  }
  function et() {
    if (Be === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = at === null ? Ce.memoizedState : at.next;
    if (t !== null) at = t, Be = e;
    else {
      if (e === null) throw Ce.alternate === null ? Error(i(467)) : Error(i(310));
      Be = e, e = { memoizedState: Be.memoizedState, baseState: Be.baseState, baseQueue: Be.baseQueue, queue: Be.queue, next: null }, at === null ? Ce.memoizedState = at = e : at = at.next = e;
    }
    return at;
  }
  function ai() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ll(e) {
    var t = kl;
    return kl += 1, Uo === null && (Uo = []), e = kp(Uo, e, t), t = Ce, (at === null ? t.memoizedState : at.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? Rh : $u), e;
  }
  function oi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ll(e);
      if (e.$$typeof === k) return yt(e);
    }
    throw Error(i(438, String(e)));
  }
  function Hu(e) {
    var t = null, n = Ce.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var o = Ce.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (t = { data: o.data.map(function(c) {
        return c.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = ai(), Ce.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), o = 0; o < e; o++) n[o] = ve;
    return t.index++, n;
  }
  function In(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function li(e) {
    var t = et();
    return Uu(t, Be, e);
  }
  function Uu(e, t, n) {
    var o = e.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = n;
    var c = e.baseQueue, u = o.pending;
    if (u !== null) {
      if (c !== null) {
        var g = c.next;
        c.next = u.next, u.next = g;
      }
      t.baseQueue = c = u, o.pending = null;
    }
    if (u = e.baseState, c === null) e.memoizedState = u;
    else {
      t = c.next;
      var x = g = null, T = null, U = t, K = false;
      do {
        var Q = U.lane & -536870913;
        if (Q !== U.lane ? (Ae & Q) === Q : (Bn & Q) === Q) {
          var B = U.revertLane;
          if (B === 0) T !== null && (T = T.next = { lane: 0, revertLane: 0, gesture: null, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), Q === Oo && (K = true);
          else if ((Bn & B) === B) {
            U = U.next, B === Oo && (K = true);
            continue;
          } else Q = { lane: 0, revertLane: U.revertLane, gesture: null, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }, T === null ? (x = T = Q, g = u) : T = T.next = Q, Ce.lanes |= B, ha |= B;
          Q = U.action, Wa && n(u, Q), u = U.hasEagerState ? U.eagerState : n(u, Q);
        } else B = { lane: Q, revertLane: U.revertLane, gesture: U.gesture, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }, T === null ? (x = T = B, g = u) : T = T.next = B, Ce.lanes |= Q, ha |= Q;
        U = U.next;
      } while (U !== null && U !== t);
      if (T === null ? g = u : T.next = x, !Yt(u, e.memoizedState) && (ot = true, K && (n = zo, n !== null))) throw n;
      e.memoizedState = u, e.baseState = g, e.baseQueue = T, o.lastRenderedState = u;
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Bu(e) {
    var t = et(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var o = n.dispatch, c = n.pending, u = t.memoizedState;
    if (c !== null) {
      n.pending = null;
      var g = c = c.next;
      do
        u = e(u, g.action), g = g.next;
      while (g !== c);
      Yt(u, t.memoizedState) || (ot = true), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, o];
  }
  function Kp(e, t, n) {
    var o = Ce, c = et(), u = De;
    if (u) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else n = t();
    var g = !Yt((Be || c).memoizedState, n);
    if (g && (c.memoizedState = n, ot = true), c = c.queue, qu(Qp.bind(null, o, c, e), [e]), c.getSnapshot !== t || g || at !== null && at.memoizedState.tag & 1) {
      if (o.flags |= 2048, Bo(9, { destroy: void 0 }, $p.bind(null, o, c, n, t), null), qe === null) throw Error(i(349));
      u || (Bn & 127) !== 0 || Xp(o, t, n);
    }
    return n;
  }
  function Xp(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ce.updateQueue, t === null ? (t = ai(), Ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function $p(e, t, n, o) {
    t.value = n, t.getSnapshot = o, Zp(t) && Fp(e);
  }
  function Qp(e, t, n) {
    return n(function() {
      Zp(t) && Fp(e);
    });
  }
  function Zp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Yt(e, n);
    } catch {
      return true;
    }
  }
  function Fp(e) {
    var t = Ga(e, 2);
    t !== null && Pt(t, e, 2);
  }
  function Iu(e) {
    var t = At();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Wa) {
        fn(true);
        try {
          n();
        } finally {
          fn(false);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: In, lastRenderedState: e }, t;
  }
  function Jp(e, t, n, o) {
    return e.baseState = n, Uu(e, Be, typeof o == "function" ? o : In);
  }
  function a2(e, t, n, o, c) {
    if (ci(e)) throw Error(i(485));
    if (e = t.action, e !== null) {
      var u = { payload: c, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(g) {
        u.listeners.push(g);
      } };
      z.T !== null ? n(true) : u.isTransition = false, o(u), n = t.pending, n === null ? (u.next = t.pending = u, Wp(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function Wp(e, t) {
    var n = t.action, o = t.payload, c = e.state;
    if (t.isTransition) {
      var u = z.T, g = {};
      z.T = g;
      try {
        var x = n(c, o), T = z.S;
        T !== null && T(g, x), eh(e, t, x);
      } catch (U) {
        Pu(e, t, U);
      } finally {
        u !== null && g.types !== null && (u.types = g.types), z.T = u;
      }
    } else try {
      u = n(c, o), eh(e, t, u);
    } catch (U) {
      Pu(e, t, U);
    }
  }
  function eh(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(o) {
      th(e, t, o);
    }, function(o) {
      return Pu(e, t, o);
    }) : th(e, t, n);
  }
  function th(e, t, n) {
    t.status = "fulfilled", t.value = n, nh(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Wp(e, n)));
  }
  function Pu(e, t, n) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        t.status = "rejected", t.reason = n, nh(t), t = t.next;
      while (t !== o);
    }
    e.action = null;
  }
  function nh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ah(e, t) {
    return t;
  }
  function oh(e, t) {
    if (De) {
      var n = qe.formState;
      if (n !== null) {
        e: {
          var o = Ce;
          if (De) {
            if (Ve) {
              t: {
                for (var c = Ve, u = ln; c.nodeType !== 8; ) {
                  if (!u) {
                    c = null;
                    break t;
                  }
                  if (c = cn(c.nextSibling), c === null) {
                    c = null;
                    break t;
                  }
                }
                u = c.data, c = u === "F!" || u === "F" ? c : null;
              }
              if (c) {
                Ve = cn(c.nextSibling), o = c.data === "F!";
                break e;
              }
            }
            la(o);
          }
          o = false;
        }
        o && (t = n[0]);
      }
    }
    return n = At(), n.memoizedState = n.baseState = t, o = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ah, lastRenderedState: t }, n.queue = o, n = _h.bind(null, Ce, o), o.dispatch = n, o = Iu(false), u = Xu.bind(null, Ce, false, o.queue), o = At(), c = { state: t, dispatch: null, action: e, pending: null }, o.queue = c, n = a2.bind(null, Ce, c, u, n), c.dispatch = n, o.memoizedState = e, [t, n, false];
  }
  function lh(e) {
    var t = et();
    return rh(t, Be, e);
  }
  function rh(e, t, n) {
    if (t = Uu(e, t, ah)[0], e = li(In)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var o = Ll(t);
    } catch (g) {
      throw g === jo ? Qr : g;
    }
    else o = t;
    t = et();
    var c = t.queue, u = c.dispatch;
    return n !== t.memoizedState && (Ce.flags |= 2048, Bo(9, { destroy: void 0 }, o2.bind(null, c, n), null)), [o, u, e];
  }
  function o2(e, t) {
    e.action = t;
  }
  function ih(e) {
    var t = et(), n = Be;
    if (n !== null) return rh(t, n, e);
    et(), t = t.memoizedState, n = et();
    var o = n.queue.dispatch;
    return n.memoizedState = e, [t, o, false];
  }
  function Bo(e, t, n, o) {
    return e = { tag: e, create: n, deps: o, inst: t, next: null }, t = Ce.updateQueue, t === null && (t = ai(), Ce.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (o = n.next, n.next = e, e.next = o, t.lastEffect = e), e;
  }
  function ch() {
    return et().memoizedState;
  }
  function ri(e, t, n, o) {
    var c = At();
    Ce.flags |= e, c.memoizedState = Bo(1 | t, { destroy: void 0 }, n, o === void 0 ? null : o);
  }
  function ii(e, t, n, o) {
    var c = et();
    o = o === void 0 ? null : o;
    var u = c.memoizedState.inst;
    Be !== null && o !== null && Ou(o, Be.memoizedState.deps) ? c.memoizedState = Bo(t, u, n, o) : (Ce.flags |= e, c.memoizedState = Bo(1 | t, u, n, o));
  }
  function uh(e, t) {
    ri(8390656, 8, e, t);
  }
  function qu(e, t) {
    ii(2048, 8, e, t);
  }
  function l2(e) {
    Ce.flags |= 4;
    var t = Ce.updateQueue;
    if (t === null) t = ai(), Ce.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function sh(e) {
    var t = et().memoizedState;
    return l2({ ref: t, nextImpl: e }), function() {
      if ((ke & 2) !== 0) throw Error(i(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function fh(e, t) {
    return ii(4, 2, e, t);
  }
  function dh(e, t) {
    return ii(4, 4, e, t);
  }
  function ph(e, t) {
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
  function hh(e, t, n) {
    n = n != null ? n.concat([e]) : null, ii(4, 4, ph.bind(null, t, e), n);
  }
  function Vu() {
  }
  function mh(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return t !== null && Ou(t, o[1]) ? o[0] : (n.memoizedState = [e, t], e);
  }
  function vh(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    if (t !== null && Ou(t, o[1])) return o[0];
    if (o = e(), Wa) {
      fn(true);
      try {
        e();
      } finally {
        fn(false);
      }
    }
    return n.memoizedState = [o, t], o;
  }
  function Gu(e, t, n) {
    return n === void 0 || (Bn & 1073741824) !== 0 && (Ae & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = gm(), Ce.lanes |= e, ha |= e, n);
  }
  function gh(e, t, n, o) {
    return Yt(n, t) ? n : Lo.current !== null ? (e = Gu(e, n, o), Yt(e, t) || (ot = true), e) : (Bn & 42) === 0 || (Bn & 1073741824) !== 0 && (Ae & 261930) === 0 ? (ot = true, e.memoizedState = n) : (e = gm(), Ce.lanes |= e, ha |= e, t);
  }
  function yh(e, t, n, o, c) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var g = z.T, x = {};
    z.T = x, Xu(e, false, t, n);
    try {
      var T = c(), U = z.S;
      if (U !== null && U(x, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var K = e2(T, o);
        Hl(e, t, K, Ft(e));
      } else Hl(e, t, o, Ft(e));
    } catch (Q) {
      Hl(e, t, { then: function() {
      }, status: "rejected", reason: Q }, Ft());
    } finally {
      X.p = u, g !== null && x.types !== null && (g.types = x.types), z.T = g;
    }
  }
  function r2() {
  }
  function Yu(e, t, n, o) {
    if (e.tag !== 5) throw Error(i(476));
    var c = bh(e).queue;
    yh(e, c, t, W, n === null ? r2 : function() {
      return Sh(e), n(o);
    });
  }
  function bh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: W, baseState: W, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: In, lastRenderedState: W }, next: null };
    var n = {};
    return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: In, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Sh(e) {
    var t = bh(e);
    t.next === null && (t = e.alternate.memoizedState), Hl(e, t.next.queue, {}, Ft());
  }
  function Ku() {
    return yt(er);
  }
  function xh() {
    return et().memoizedState;
  }
  function Eh() {
    return et().memoizedState;
  }
  function i2(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Ft();
          e = ca(n);
          var o = ua(t, e, n);
          o !== null && (Pt(o, t, n), Ol(o, t, n)), t = { cache: xu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function c2(e, t, n) {
    var o = Ft();
    n = { lane: o, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, ci(e) ? Ch(t, n) : (n = su(e, t, n, o), n !== null && (Pt(n, e, o), Mh(n, t, o)));
  }
  function _h(e, t, n) {
    var o = Ft();
    Hl(e, t, n, o);
  }
  function Hl(e, t, n, o) {
    var c = { lane: o, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
    if (ci(e)) Ch(t, c);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var g = t.lastRenderedState, x = u(g, n);
        if (c.hasEagerState = true, c.eagerState = x, Yt(x, g)) return qr(e, t, c, 0), qe === null && Pr(), false;
      } catch {
      }
      if (n = su(e, t, c, o), n !== null) return Pt(n, e, o), Mh(n, t, o), true;
    }
    return false;
  }
  function Xu(e, t, n, o) {
    if (o = { lane: 2, revertLane: Ms(), gesture: null, action: o, hasEagerState: false, eagerState: null, next: null }, ci(e)) {
      if (t) throw Error(i(479));
    } else t = su(e, n, o, 2), t !== null && Pt(t, e, 2);
  }
  function ci(e) {
    var t = e.alternate;
    return e === Ce || t !== null && t === Ce;
  }
  function Ch(e, t) {
    Ho = ti = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Mh(e, t, n) {
    if ((n & 4194048) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, n |= o, t.lanes = n, zt(e, n);
    }
  }
  var Ul = { readContext: yt, use: oi, useCallback: Qe, useContext: Qe, useEffect: Qe, useImperativeHandle: Qe, useLayoutEffect: Qe, useInsertionEffect: Qe, useMemo: Qe, useReducer: Qe, useRef: Qe, useState: Qe, useDebugValue: Qe, useDeferredValue: Qe, useTransition: Qe, useSyncExternalStore: Qe, useId: Qe, useHostTransitionStatus: Qe, useFormState: Qe, useActionState: Qe, useOptimistic: Qe, useMemoCache: Qe, useCacheRefresh: Qe };
  Ul.useEffectEvent = Qe;
  var Rh = { readContext: yt, use: oi, useCallback: function(e, t) {
    return At().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: yt, useEffect: uh, useImperativeHandle: function(e, t, n) {
    n = n != null ? n.concat([e]) : null, ri(4194308, 4, ph.bind(null, t, e), n);
  }, useLayoutEffect: function(e, t) {
    return ri(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    ri(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = At();
    t = t === void 0 ? null : t;
    var o = e();
    if (Wa) {
      fn(true);
      try {
        e();
      } finally {
        fn(false);
      }
    }
    return n.memoizedState = [o, t], o;
  }, useReducer: function(e, t, n) {
    var o = At();
    if (n !== void 0) {
      var c = n(t);
      if (Wa) {
        fn(true);
        try {
          n(t);
        } finally {
          fn(false);
        }
      }
    } else c = t;
    return o.memoizedState = o.baseState = c, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: c }, o.queue = e, e = e.dispatch = c2.bind(null, Ce, e), [o.memoizedState, e];
  }, useRef: function(e) {
    var t = At();
    return e = { current: e }, t.memoizedState = e;
  }, useState: function(e) {
    e = Iu(e);
    var t = e.queue, n = _h.bind(null, Ce, t);
    return t.dispatch = n, [e.memoizedState, n];
  }, useDebugValue: Vu, useDeferredValue: function(e, t) {
    var n = At();
    return Gu(n, e, t);
  }, useTransition: function() {
    var e = Iu(false);
    return e = yh.bind(null, Ce, e.queue, true, false), At().memoizedState = e, [false, e];
  }, useSyncExternalStore: function(e, t, n) {
    var o = Ce, c = At();
    if (De) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), qe === null) throw Error(i(349));
      (Ae & 127) !== 0 || Xp(o, t, n);
    }
    c.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return c.queue = u, uh(Qp.bind(null, o, u, e), [e]), o.flags |= 2048, Bo(9, { destroy: void 0 }, $p.bind(null, o, u, n, t), null), n;
  }, useId: function() {
    var e = At(), t = qe.identifierPrefix;
    if (De) {
      var n = Cn, o = _n;
      n = (o & ~(1 << 32 - _t(o) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = ni++, 0 < n && (t += "H" + n.toString(32)), t += "_";
    } else n = t2++, t = "_" + t + "r_" + n.toString(32) + "_";
    return e.memoizedState = t;
  }, useHostTransitionStatus: Ku, useFormState: oh, useActionState: oh, useOptimistic: function(e) {
    var t = At();
    t.memoizedState = t.baseState = e;
    var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = n, t = Xu.bind(null, Ce, true, n), n.dispatch = t, [e, t];
  }, useMemoCache: Hu, useCacheRefresh: function() {
    return At().memoizedState = i2.bind(null, Ce);
  }, useEffectEvent: function(e) {
    var t = At(), n = { impl: e };
    return t.memoizedState = n, function() {
      if ((ke & 2) !== 0) throw Error(i(440));
      return n.impl.apply(void 0, arguments);
    };
  } }, $u = { readContext: yt, use: oi, useCallback: mh, useContext: yt, useEffect: qu, useImperativeHandle: hh, useInsertionEffect: fh, useLayoutEffect: dh, useMemo: vh, useReducer: li, useRef: ch, useState: function() {
    return li(In);
  }, useDebugValue: Vu, useDeferredValue: function(e, t) {
    var n = et();
    return gh(n, Be.memoizedState, e, t);
  }, useTransition: function() {
    var e = li(In)[0], t = et().memoizedState;
    return [typeof e == "boolean" ? e : Ll(e), t];
  }, useSyncExternalStore: Kp, useId: xh, useHostTransitionStatus: Ku, useFormState: lh, useActionState: lh, useOptimistic: function(e, t) {
    var n = et();
    return Jp(n, Be, e, t);
  }, useMemoCache: Hu, useCacheRefresh: Eh };
  $u.useEffectEvent = sh;
  var wh = { readContext: yt, use: oi, useCallback: mh, useContext: yt, useEffect: qu, useImperativeHandle: hh, useInsertionEffect: fh, useLayoutEffect: dh, useMemo: vh, useReducer: Bu, useRef: ch, useState: function() {
    return Bu(In);
  }, useDebugValue: Vu, useDeferredValue: function(e, t) {
    var n = et();
    return Be === null ? Gu(n, e, t) : gh(n, Be.memoizedState, e, t);
  }, useTransition: function() {
    var e = Bu(In)[0], t = et().memoizedState;
    return [typeof e == "boolean" ? e : Ll(e), t];
  }, useSyncExternalStore: Kp, useId: xh, useHostTransitionStatus: Ku, useFormState: ih, useActionState: ih, useOptimistic: function(e, t) {
    var n = et();
    return Be !== null ? Jp(n, Be, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
  }, useMemoCache: Hu, useCacheRefresh: Eh };
  wh.useEffectEvent = sh;
  function Qu(e, t, n, o) {
    t = e.memoizedState, n = n(o, t), n = n == null ? t : h({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Zu = { enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var o = Ft(), c = ca(o);
    c.payload = t, n != null && (c.callback = n), t = ua(e, c, o), t !== null && (Pt(t, e, o), Ol(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var o = Ft(), c = ca(o);
    c.tag = 1, c.payload = t, n != null && (c.callback = n), t = ua(e, c, o), t !== null && (Pt(t, e, o), Ol(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ft(), o = ca(n);
    o.tag = 2, t != null && (o.callback = t), t = ua(e, o, n), t !== null && (Pt(t, e, n), Ol(t, e, n));
  } };
  function Th(e, t, n, o, c, u, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, u, g) : t.prototype && t.prototype.isPureReactComponent ? !Cl(n, o) || !Cl(c, u) : true;
  }
  function Ah(e, t, n, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, o), t.state !== e && Zu.enqueueReplaceState(t, t.state, null);
  }
  function eo(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var o in t) o !== "ref" && (n[o] = t[o]);
    }
    if (e = e.defaultProps) {
      n === t && (n = h({}, n));
      for (var c in e) n[c] === void 0 && (n[c] = e[c]);
    }
    return n;
  }
  function Nh(e) {
    Ir(e);
  }
  function Dh(e) {
    console.error(e);
  }
  function Oh(e) {
    Ir(e);
  }
  function ui(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function zh(e, t, n) {
    try {
      var o = e.onCaughtError;
      o(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Fu(e, t, n) {
    return n = ca(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ui(e, t);
    }, n;
  }
  function jh(e) {
    return e = ca(e), e.tag = 3, e;
  }
  function kh(e, t, n, o) {
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var u = o.value;
      e.payload = function() {
        return c(u);
      }, e.callback = function() {
        zh(t, n, o);
      };
    }
    var g = n.stateNode;
    g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
      zh(t, n, o), typeof c != "function" && (ma === null ? ma = /* @__PURE__ */ new Set([this]) : ma.add(this));
      var x = o.stack;
      this.componentDidCatch(o.value, { componentStack: x !== null ? x : "" });
    });
  }
  function u2(e, t, n, o, c) {
    if (n.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (t = n.alternate, t !== null && Do(t, n, c, true), n = Xt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return rn === null ? xi() : n.alternate === null && Ze === 0 && (Ze = 3), n.flags &= -257, n.flags |= 65536, n.lanes = c, o === Zr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([o]) : t.add(o), Es(e, o, c)), false;
          case 22:
            return n.flags |= 65536, o === Zr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([o]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([o]) : n.add(o)), Es(e, o, c)), false;
        }
        throw Error(i(435, n.tag));
      }
      return Es(e, o, c), xi(), false;
    }
    if (De) return t = Xt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, o !== vu && (e = Error(i(422), { cause: o }), wl(nn(e, n)))) : (o !== vu && (t = Error(i(423), { cause: o }), wl(nn(t, n))), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, o = nn(o, n), c = Fu(e.stateNode, o, c), wu(e, c), Ze !== 4 && (Ze = 2)), false;
    var u = Error(i(520), { cause: o });
    if (u = nn(u, n), Kl === null ? Kl = [u] : Kl.push(u), Ze !== 4 && (Ze = 2), t === null) return true;
    o = nn(o, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = c & -c, n.lanes |= e, e = Fu(n.stateNode, o, e), wu(n, e), false;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ma === null || !ma.has(u)))) return n.flags |= 65536, c &= -c, n.lanes |= c, c = jh(c), kh(c, e, n, o), wu(n, c), false;
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var Ju = Error(i(461)), ot = false;
  function bt(e, t, n, o) {
    t.child = e === null ? Bp(t, null, n, o) : Ja(t, e.child, n, o);
  }
  function Lh(e, t, n, o, c) {
    n = n.render;
    var u = t.ref;
    if ("ref" in o) {
      var g = {};
      for (var x in o) x !== "ref" && (g[x] = o[x]);
    } else g = o;
    return $a(t), o = zu(e, t, n, g, u, c), x = ju(), e !== null && !ot ? (ku(e, t, c), Pn(e, t, c)) : (De && x && hu(t), t.flags |= 1, bt(e, t, o, c), t.child);
  }
  function Hh(e, t, n, o, c) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !fu(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Uh(e, t, u, o, c)) : (e = Gr(n.type, null, o, t, t.mode, c), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !rs(e, c)) {
      var g = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Cl, n(g, o) && e.ref === t.ref) return Pn(e, t, c);
    }
    return t.flags |= 1, e = kn(u, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Uh(e, t, n, o, c) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Cl(u, o) && e.ref === t.ref) if (ot = false, t.pendingProps = o = u, rs(e, c)) (e.flags & 131072) !== 0 && (ot = true);
      else return t.lanes = e.lanes, Pn(e, t, c);
    }
    return Wu(e, t, n, o, c);
  }
  function Bh(e, t, n, o) {
    var c = o.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), o.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (o = t.child = e.child, c = 0; o !== null; ) c = c | o.lanes | o.childLanes, o = o.sibling;
          o = c & ~u;
        } else o = 0, t.child = null;
        return Ih(e, t, u, n, o);
      }
      if ((n & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && $r(t, u !== null ? u.cachePool : null), u !== null ? qp(t, u) : Au(), Vp(t);
      else return o = t.lanes = 536870912, Ih(e, t, u !== null ? u.baseLanes | n : n, n, o);
    } else u !== null ? ($r(t, u.cachePool), qp(t, u), fa(), t.memoizedState = null) : (e !== null && $r(t, null), Au(), fa());
    return bt(e, t, c, n), t.child;
  }
  function Bl(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function Ih(e, t, n, o, c) {
    var u = _u();
    return u = u === null ? null : { parent: nt._currentValue, pool: u }, t.memoizedState = { baseLanes: n, cachePool: u }, e !== null && $r(t, null), Au(), Vp(t), e !== null && Do(e, t, o, true), t.childLanes = c, null;
  }
  function si(e, t) {
    return t = di({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ph(e, t, n) {
    return Ja(t, e.child, null, n), e = si(t, t.pendingProps), e.flags |= 2, $t(t), t.memoizedState = null, e;
  }
  function s2(e, t, n) {
    var o = t.pendingProps, c = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (De) {
        if (o.mode === "hidden") return e = si(t, o), t.lanes = 536870912, Bl(null, e);
        if (Du(t), (e = Ve) ? (e = Wm(e, ln), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: aa !== null ? { id: _n, overflow: Cn } : null, retryLane: 536870912, hydrationErrors: null }, n = Cp(e), n.return = t, t.child = n, gt = t, Ve = null)) : e = null, e === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return si(t, o);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var g = u.dehydrated;
      if (Du(t), c) if (t.flags & 256) t.flags &= -257, t = Ph(e, t, n);
      else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(i(558));
      else if (ot || Do(e, t, n, false), c = (n & e.childLanes) !== 0, ot || c) {
        if (o = qe, o !== null && (g = jt(o, n), g !== 0 && g !== u.retryLane)) throw u.retryLane = g, Ga(e, g), Pt(o, e, g), Ju;
        xi(), t = Ph(e, t, n);
      } else e = u.treeContext, Ve = cn(g.nextSibling), gt = t, De = true, oa = null, ln = false, e !== null && wp(t, e), t = si(t, o), t.flags |= 4096;
      return t;
    }
    return e = kn(e.child, { mode: o.mode, children: o.children }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function fi(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(i(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Wu(e, t, n, o, c) {
    return $a(t), n = zu(e, t, n, o, void 0, c), o = ju(), e !== null && !ot ? (ku(e, t, c), Pn(e, t, c)) : (De && o && hu(t), t.flags |= 1, bt(e, t, n, c), t.child);
  }
  function qh(e, t, n, o, c, u) {
    return $a(t), t.updateQueue = null, n = Yp(t, o, n, c), Gp(e), o = ju(), e !== null && !ot ? (ku(e, t, u), Pn(e, t, u)) : (De && o && hu(t), t.flags |= 1, bt(e, t, n, u), t.child);
  }
  function Vh(e, t, n, o, c) {
    if ($a(t), t.stateNode === null) {
      var u = wo, g = n.contextType;
      typeof g == "object" && g !== null && (u = yt(g)), u = new n(o, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Zu, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = o, u.state = t.memoizedState, u.refs = {}, Mu(t), g = n.contextType, u.context = typeof g == "object" && g !== null ? yt(g) : wo, u.state = t.memoizedState, g = n.getDerivedStateFromProps, typeof g == "function" && (Qu(t, n, g, o), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (g = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), g !== u.state && Zu.enqueueReplaceState(u, u.state, null), jl(t, o, u, c), zl(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), o = true;
    } else if (e === null) {
      u = t.stateNode;
      var x = t.memoizedProps, T = eo(n, x);
      u.props = T;
      var U = u.context, K = n.contextType;
      g = wo, typeof K == "object" && K !== null && (g = yt(K));
      var Q = n.getDerivedStateFromProps;
      K = typeof Q == "function" || typeof u.getSnapshotBeforeUpdate == "function", x = t.pendingProps !== x, K || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (x || U !== g) && Ah(t, u, o, g), ia = false;
      var B = t.memoizedState;
      u.state = B, jl(t, o, u, c), zl(), U = t.memoizedState, x || B !== U || ia ? (typeof Q == "function" && (Qu(t, n, Q, o), U = t.memoizedState), (T = ia || Th(t, n, T, o, B, U, g)) ? (K || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = U), u.props = o, u.state = U, u.context = g, o = T) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), o = false);
    } else {
      u = t.stateNode, Ru(e, t), g = t.memoizedProps, K = eo(n, g), u.props = K, Q = t.pendingProps, B = u.context, U = n.contextType, T = wo, typeof U == "object" && U !== null && (T = yt(U)), x = n.getDerivedStateFromProps, (U = typeof x == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (g !== Q || B !== T) && Ah(t, u, o, T), ia = false, B = t.memoizedState, u.state = B, jl(t, o, u, c), zl();
      var q = t.memoizedState;
      g !== Q || B !== q || ia || e !== null && e.dependencies !== null && Kr(e.dependencies) ? (typeof x == "function" && (Qu(t, n, x, o), q = t.memoizedState), (K = ia || Th(t, n, K, o, B, q, T) || e !== null && e.dependencies !== null && Kr(e.dependencies)) ? (U || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(o, q, T), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(o, q, T)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || g === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = q), u.props = o, u.state = q, u.context = T, o = K) : (typeof u.componentDidUpdate != "function" || g === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), o = false);
    }
    return u = o, fi(e, t), o = (t.flags & 128) !== 0, u || o ? (u = t.stateNode, n = o && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && o ? (t.child = Ja(t, e.child, null, c), t.child = Ja(t, null, n, c)) : bt(e, t, n, c), t.memoizedState = u.state, e = t.child) : e = Pn(e, t, c), e;
  }
  function Gh(e, t, n, o) {
    return Ka(), t.flags |= 256, bt(e, t, n, o), t.child;
  }
  var es = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function ts(e) {
    return { baseLanes: e, cachePool: zp() };
  }
  function ns(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Zt), e;
  }
  function Yh(e, t, n) {
    var o = t.pendingProps, c = false, u = (t.flags & 128) !== 0, g;
    if ((g = u) || (g = e !== null && e.memoizedState === null ? false : (We.current & 2) !== 0), g && (c = true, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (De) {
        if (c ? sa(t) : fa(), (e = Ve) ? (e = Wm(e, ln), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: aa !== null ? { id: _n, overflow: Cn } : null, retryLane: 536870912, hydrationErrors: null }, n = Cp(e), n.return = t, t.child = n, gt = t, Ve = null)) : e = null, e === null) throw la(t);
        return Us(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var x = o.children;
      return o = o.fallback, c ? (fa(), c = t.mode, x = di({ mode: "hidden", children: x }, c), o = Ya(o, c, n, null), x.return = t, o.return = t, x.sibling = o, t.child = x, o = t.child, o.memoizedState = ts(n), o.childLanes = ns(e, g, n), t.memoizedState = es, Bl(null, o)) : (sa(t), as(t, x));
    }
    var T = e.memoizedState;
    if (T !== null && (x = T.dehydrated, x !== null)) {
      if (u) t.flags & 256 ? (sa(t), t.flags &= -257, t = os(e, t, n)) : t.memoizedState !== null ? (fa(), t.child = e.child, t.flags |= 128, t = null) : (fa(), x = o.fallback, c = t.mode, o = di({ mode: "visible", children: o.children }, c), x = Ya(x, c, n, null), x.flags |= 2, o.return = t, x.return = t, o.sibling = x, t.child = o, Ja(t, e.child, null, n), o = t.child, o.memoizedState = ts(n), o.childLanes = ns(e, g, n), t.memoizedState = es, t = Bl(null, o));
      else if (sa(t), Us(x)) {
        if (g = x.nextSibling && x.nextSibling.dataset, g) var U = g.dgst;
        g = U, o = Error(i(419)), o.stack = "", o.digest = g, wl({ value: o, source: null, stack: null }), t = os(e, t, n);
      } else if (ot || Do(e, t, n, false), g = (n & e.childLanes) !== 0, ot || g) {
        if (g = qe, g !== null && (o = jt(g, n), o !== 0 && o !== T.retryLane)) throw T.retryLane = o, Ga(e, o), Pt(g, e, o), Ju;
        Hs(x) || xi(), t = os(e, t, n);
      } else Hs(x) ? (t.flags |= 192, t.child = e.child, t = null) : (e = T.treeContext, Ve = cn(x.nextSibling), gt = t, De = true, oa = null, ln = false, e !== null && wp(t, e), t = as(t, o.children), t.flags |= 4096);
      return t;
    }
    return c ? (fa(), x = o.fallback, c = t.mode, T = e.child, U = T.sibling, o = kn(T, { mode: "hidden", children: o.children }), o.subtreeFlags = T.subtreeFlags & 65011712, U !== null ? x = kn(U, x) : (x = Ya(x, c, n, null), x.flags |= 2), x.return = t, o.return = t, o.sibling = x, t.child = o, Bl(null, o), o = t.child, x = e.child.memoizedState, x === null ? x = ts(n) : (c = x.cachePool, c !== null ? (T = nt._currentValue, c = c.parent !== T ? { parent: T, pool: T } : c) : c = zp(), x = { baseLanes: x.baseLanes | n, cachePool: c }), o.memoizedState = x, o.childLanes = ns(e, g, n), t.memoizedState = es, Bl(e.child, o)) : (sa(t), n = e.child, e = n.sibling, n = kn(n, { mode: "visible", children: o.children }), n.return = t, n.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [e], t.flags |= 16) : g.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function as(e, t) {
    return t = di({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
  }
  function di(e, t) {
    return e = Kt(22, e, null, t), e.lanes = 0, e;
  }
  function os(e, t, n) {
    return Ja(t, e.child, null, n), e = as(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Kh(e, t, n) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), bu(e.return, t, n);
  }
  function ls(e, t, n, o, c, u) {
    var g = e.memoizedState;
    g === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: o, tail: n, tailMode: c, treeForkCount: u } : (g.isBackwards = t, g.rendering = null, g.renderingStartTime = 0, g.last = o, g.tail = n, g.tailMode = c, g.treeForkCount = u);
  }
  function Xh(e, t, n) {
    var o = t.pendingProps, c = o.revealOrder, u = o.tail;
    o = o.children;
    var g = We.current, x = (g & 2) !== 0;
    if (x ? (g = g & 1 | 2, t.flags |= 128) : g &= 1, L(We, g), bt(e, t, o, n), o = De ? Rl : 0, !x && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Kh(e, n, t);
      else if (e.tag === 19) Kh(e, n, t);
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
    switch (c) {
      case "forwards":
        for (n = t.child, c = null; n !== null; ) e = n.alternate, e !== null && ei(e) === null && (c = n), n = n.sibling;
        n = c, n === null ? (c = t.child, t.child = null) : (c = n.sibling, n.sibling = null), ls(t, false, c, n, u, o);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, c = t.child, t.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && ei(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = n, n = c, c = e;
        }
        ls(t, true, n, null, u, o);
        break;
      case "together":
        ls(t, false, null, null, void 0, o);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Pn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ha |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
      if (Do(e, t, n, false), (n & t.childLanes) === 0) return null;
    } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = kn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = kn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function rs(e, t) {
    return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && Kr(e)));
  }
  function f2(e, t, n) {
    switch (t.tag) {
      case 3:
        ae(t, t.stateNode.containerInfo), ra(t, nt, e.memoizedState.cache), Ka();
        break;
      case 27:
      case 5:
        Se(t);
        break;
      case 4:
        ae(t, t.stateNode.containerInfo);
        break;
      case 10:
        ra(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Du(t), null;
        break;
      case 13:
        var o = t.memoizedState;
        if (o !== null) return o.dehydrated !== null ? (sa(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Yh(e, t, n) : (sa(t), e = Pn(e, t, n), e !== null ? e.sibling : null);
        sa(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (o = (n & t.childLanes) !== 0, o || (Do(e, t, n, false), o = (n & t.childLanes) !== 0), c) {
          if (o) return Xh(e, t, n);
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), L(We, We.current), o) break;
        return null;
      case 22:
        return t.lanes = 0, Bh(e, t, n, t.pendingProps);
      case 24:
        ra(t, nt, e.memoizedState.cache);
    }
    return Pn(e, t, n);
  }
  function $h(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) ot = true;
    else {
      if (!rs(e, n) && (t.flags & 128) === 0) return ot = false, f2(e, t, n);
      ot = (e.flags & 131072) !== 0;
    }
    else ot = false, De && (t.flags & 1048576) !== 0 && Rp(t, Rl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var o = t.pendingProps;
          if (e = Za(t.elementType), t.type = e, typeof e == "function") fu(e) ? (o = eo(e, o), t.tag = 1, t = Vh(null, t, e, o, n)) : (t.tag = 0, t = Wu(null, t, e, o, n));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === I) {
                t.tag = 11, t = Lh(null, t, e, o, n);
                break e;
              } else if (c === V) {
                t.tag = 14, t = Hh(null, t, e, o, n);
                break e;
              }
            }
            throw t = be(e) || e, Error(i(306, t, ""));
          }
        }
        return t;
      case 0:
        return Wu(e, t, t.type, t.pendingProps, n);
      case 1:
        return o = t.type, c = eo(o, t.pendingProps), Vh(e, t, o, c, n);
      case 3:
        e: {
          if (ae(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
          o = t.pendingProps;
          var u = t.memoizedState;
          c = u.element, Ru(e, t), jl(t, o, null, n);
          var g = t.memoizedState;
          if (o = g.cache, ra(t, nt, o), o !== u.cache && Su(t, [nt], n, true), zl(), o = g.element, u.isDehydrated) if (u = { element: o, isDehydrated: false, cache: g.cache }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            t = Gh(e, t, o, n);
            break e;
          } else if (o !== c) {
            c = nn(Error(i(424)), t), wl(c), t = Gh(e, t, o, n);
            break e;
          } else for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ve = cn(e.firstChild), gt = t, De = true, oa = null, ln = true, n = Bp(t, null, o, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ka(), o === c) {
              t = Pn(e, t, n);
              break e;
            }
            bt(e, t, o, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return fi(e, t), e === null ? (n = lv(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : De || (n = t.type, e = t.pendingProps, o = Ti(te.current).createElement(n), o[vt] = t, o[kt] = e, St(o, n, e), dt(o), t.stateNode = o) : t.memoizedState = lv(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return Se(t), e === null && De && (o = t.stateNode = nv(t.type, t.pendingProps, te.current), gt = t, ln = true, c = Ve, ba(t.type) ? (Bs = c, Ve = cn(o.firstChild)) : Ve = c), bt(e, t, t.pendingProps.children, n), fi(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && De && ((c = o = Ve) && (o = P2(o, t.type, t.pendingProps, ln), o !== null ? (t.stateNode = o, gt = t, Ve = cn(o.firstChild), ln = false, c = true) : c = false), c || la(t)), Se(t), c = t.type, u = t.pendingProps, g = e !== null ? e.memoizedProps : null, o = u.children, js(c, u) ? o = null : g !== null && js(c, g) && (t.flags |= 32), t.memoizedState !== null && (c = zu(e, t, n2, null, null, n), er._currentValue = c), fi(e, t), bt(e, t, o, n), t.child;
      case 6:
        return e === null && De && ((e = n = Ve) && (n = q2(n, t.pendingProps, ln), n !== null ? (t.stateNode = n, gt = t, Ve = null, e = true) : e = false), e || la(t)), null;
      case 13:
        return Yh(e, t, n);
      case 4:
        return ae(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = Ja(t, null, o, n) : bt(e, t, o, n), t.child;
      case 11:
        return Lh(e, t, t.type, t.pendingProps, n);
      case 7:
        return bt(e, t, t.pendingProps, n), t.child;
      case 8:
        return bt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return bt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return o = t.pendingProps, ra(t, t.type, o.value), bt(e, t, o.children, n), t.child;
      case 9:
        return c = t.type._context, o = t.pendingProps.children, $a(t), c = yt(c), o = o(c), t.flags |= 1, bt(e, t, o, n), t.child;
      case 14:
        return Hh(e, t, t.type, t.pendingProps, n);
      case 15:
        return Uh(e, t, t.type, t.pendingProps, n);
      case 19:
        return Xh(e, t, n);
      case 31:
        return s2(e, t, n);
      case 22:
        return Bh(e, t, n, t.pendingProps);
      case 24:
        return $a(t), o = yt(nt), e === null ? (c = _u(), c === null && (c = qe, u = xu(), c.pooledCache = u, u.refCount++, u !== null && (c.pooledCacheLanes |= n), c = u), t.memoizedState = { parent: o, cache: c }, Mu(t), ra(t, nt, c)) : ((e.lanes & n) !== 0 && (Ru(e, t), jl(t, null, null, n), zl()), c = e.memoizedState, u = t.memoizedState, c.parent !== o ? (c = { parent: o, cache: o }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), ra(t, nt, o)) : (o = u.cache, ra(t, nt, o), o !== c.cache && Su(t, [nt], n, true))), bt(e, t, t.pendingProps.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function qn(e) {
    e.flags |= 4;
  }
  function is(e, t, n, o, c) {
    if ((t = (e.mode & 32) !== 0) && (t = false), t) {
      if (e.flags |= 16777216, (c & 335544128) === c) if (e.stateNode.complete) e.flags |= 8192;
      else if (xm()) e.flags |= 8192;
      else throw Fa = Zr, Cu;
    } else e.flags &= -16777217;
  }
  function Qh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !sv(t)) if (xm()) e.flags |= 8192;
    else throw Fa = Zr, Cu;
  }
  function pi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ct() : 536870912, e.lanes |= t, Vo |= t);
  }
  function Il(e, t) {
    if (!De) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var o = null; n !== null; ) n.alternate !== null && (o = n), n = n.sibling;
        o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
    }
  }
  function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, o = 0;
    if (t) for (var c = e.child; c !== null; ) n |= c.lanes | c.childLanes, o |= c.subtreeFlags & 65011712, o |= c.flags & 65011712, c.return = e, c = c.sibling;
    else for (c = e.child; c !== null; ) n |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= o, e.childLanes = n, t;
  }
  function d2(e, t, n) {
    var o = t.pendingProps;
    switch (mu(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ge(t), null;
      case 1:
        return Ge(t), null;
      case 3:
        return n = t.stateNode, o = null, e !== null && (o = e.memoizedState.cache), t.memoizedState.cache !== o && (t.flags |= 2048), Un(nt), ce(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (No(t) ? qn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, gu())), Ge(t), null;
      case 26:
        var c = t.type, u = t.memoizedState;
        return e === null ? (qn(t), u !== null ? (Ge(t), Qh(t, u)) : (Ge(t), is(t, c, null, o, n))) : u ? u !== e.memoizedState ? (qn(t), Ge(t), Qh(t, u)) : (Ge(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== o && qn(t), Ge(t), is(t, c, e, o, n)), null;
      case 27:
        if (Re(t), n = te.current, c = t.type, e !== null && t.stateNode != null) e.memoizedProps !== o && qn(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(i(166));
            return Ge(t), null;
          }
          e = P.current, No(t) ? Tp(t) : (e = nv(c, o, n), t.stateNode = e, qn(t));
        }
        return Ge(t), null;
      case 5:
        if (Re(t), c = t.type, e !== null && t.stateNode != null) e.memoizedProps !== o && qn(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(i(166));
            return Ge(t), null;
          }
          if (u = P.current, No(t)) Tp(t);
          else {
            var g = Ti(te.current);
            switch (u) {
              case 1:
                u = g.createElementNS("http://www.w3.org/2000/svg", c);
                break;
              case 2:
                u = g.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                break;
              default:
                switch (c) {
                  case "svg":
                    u = g.createElementNS("http://www.w3.org/2000/svg", c);
                    break;
                  case "math":
                    u = g.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                    break;
                  case "script":
                    u = g.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                    break;
                  case "select":
                    u = typeof o.is == "string" ? g.createElement("select", { is: o.is }) : g.createElement("select"), o.multiple ? u.multiple = true : o.size && (u.size = o.size);
                    break;
                  default:
                    u = typeof o.is == "string" ? g.createElement(c, { is: o.is }) : g.createElement(c);
                }
            }
            u[vt] = t, u[kt] = o;
            e: for (g = t.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6) u.appendChild(g.stateNode);
              else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                g.child.return = g, g = g.child;
                continue;
              }
              if (g === t) break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === t) break e;
                g = g.return;
              }
              g.sibling.return = g.return, g = g.sibling;
            }
            t.stateNode = u;
            e: switch (St(u, c, o), c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = true;
                break e;
              default:
                o = false;
            }
            o && qn(t);
          }
        }
        return Ge(t), is(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== o && qn(t);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(i(166));
          if (e = te.current, No(t)) {
            if (e = t.stateNode, n = t.memoizedProps, o = null, c = gt, c !== null) switch (c.tag) {
              case 27:
              case 5:
                o = c.memoizedProps;
            }
            e[vt] = t, e = !!(e.nodeValue === n || o !== null && o.suppressHydrationWarning === true || Ym(e.nodeValue, n)), e || la(t, true);
          } else e = Ti(e).createTextNode(o), e[vt] = t, t.stateNode = e;
        }
        return Ge(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (o = No(t), n !== null) {
            if (e === null) {
              if (!o) throw Error(i(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(557));
              e[vt] = t;
            } else Ka(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), e = false;
          } else n = gu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = true;
          if (!e) return t.flags & 256 ? ($t(t), t) : ($t(t), null);
          if ((t.flags & 128) !== 0) throw Error(i(558));
        }
        return Ge(t), null;
      case 13:
        if (o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = No(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(i(317));
              c[vt] = t;
            } else Ka(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), c = false;
          } else c = gu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = true;
          if (!c) return t.flags & 256 ? ($t(t), t) : ($t(t), null);
        }
        return $t(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = o !== null, e = e !== null && e.memoizedState !== null, n && (o = t.child, c = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (c = o.alternate.memoizedState.cachePool.pool), u = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (u = o.memoizedState.cachePool.pool), u !== c && (o.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), pi(t, t.updateQueue), Ge(t), null);
      case 4:
        return ce(), e === null && As(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return Un(t.type), Ge(t), null;
      case 19:
        if (N(We), o = t.memoizedState, o === null) return Ge(t), null;
        if (c = (t.flags & 128) !== 0, u = o.rendering, u === null) if (c) Il(o, false);
        else {
          if (Ze !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (u = ei(e), u !== null) {
              for (t.flags |= 128, Il(o, false), e = u.updateQueue, t.updateQueue = e, pi(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; ) _p(n, e), n = n.sibling;
              return L(We, We.current & 1 | 2), De && Ln(t, o.treeForkCount), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && mt() > yi && (t.flags |= 128, c = true, Il(o, false), t.lanes = 4194304);
        }
        else {
          if (!c) if (e = ei(u), e !== null) {
            if (t.flags |= 128, c = true, e = e.updateQueue, t.updateQueue = e, pi(t, e), Il(o, true), o.tail === null && o.tailMode === "hidden" && !u.alternate && !De) return Ge(t), null;
          } else 2 * mt() - o.renderingStartTime > yi && n !== 536870912 && (t.flags |= 128, c = true, Il(o, false), t.lanes = 4194304);
          o.isBackwards ? (u.sibling = t.child, t.child = u) : (e = o.last, e !== null ? e.sibling = u : t.child = u, o.last = u);
        }
        return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = mt(), e.sibling = null, n = We.current, L(We, c ? n & 1 | 2 : n & 1), De && Ln(t, o.treeForkCount), e) : (Ge(t), null);
      case 22:
      case 23:
        return $t(t), Nu(), o = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (t.flags |= 8192) : o && (t.flags |= 8192), o ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t), n = t.updateQueue, n !== null && pi(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), o = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), o !== n && (t.flags |= 2048), e !== null && N(Qa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Un(nt), Ge(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function p2(e, t) {
    switch (mu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Un(nt), ce(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Re(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ($t(t), t.alternate === null) throw Error(i(340));
          Ka();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if ($t(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          Ka();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return N(We), null;
      case 4:
        return ce(), null;
      case 10:
        return Un(t.type), null;
      case 22:
      case 23:
        return $t(t), Nu(), e !== null && N(Qa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Un(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zh(e, t) {
    switch (mu(t), t.tag) {
      case 3:
        Un(nt), ce();
        break;
      case 26:
      case 27:
      case 5:
        Re(t);
        break;
      case 4:
        ce();
        break;
      case 31:
        t.memoizedState !== null && $t(t);
        break;
      case 13:
        $t(t);
        break;
      case 19:
        N(We);
        break;
      case 10:
        Un(t.type);
        break;
      case 22:
      case 23:
        $t(t), Nu(), e !== null && N(Qa);
        break;
      case 24:
        Un(nt);
    }
  }
  function Pl(e, t) {
    try {
      var n = t.updateQueue, o = n !== null ? n.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        n = c;
        do {
          if ((n.tag & e) === e) {
            o = void 0;
            var u = n.create, g = n.inst;
            o = u(), g.destroy = o;
          }
          n = n.next;
        } while (n !== c);
      }
    } catch (x) {
      Ue(t, t.return, x);
    }
  }
  function da(e, t, n) {
    try {
      var o = t.updateQueue, c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var u = c.next;
        o = u;
        do {
          if ((o.tag & e) === e) {
            var g = o.inst, x = g.destroy;
            if (x !== void 0) {
              g.destroy = void 0, c = t;
              var T = n, U = x;
              try {
                U();
              } catch (K) {
                Ue(c, T, K);
              }
            }
          }
          o = o.next;
        } while (o !== u);
      }
    } catch (K) {
      Ue(t, t.return, K);
    }
  }
  function Fh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Pp(t, n);
      } catch (o) {
        Ue(e, e.return, o);
      }
    }
  }
  function Jh(e, t, n) {
    n.props = eo(e.type, e.memoizedProps), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (o) {
      Ue(e, t, o);
    }
  }
  function ql(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(o) : n.current = o;
      }
    } catch (c) {
      Ue(e, t, c);
    }
  }
  function Mn(e, t) {
    var n = e.ref, o = e.refCleanup;
    if (n !== null) if (typeof o == "function") try {
      o();
    } catch (c) {
      Ue(e, t, c);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof n == "function") try {
      n(null);
    } catch (c) {
      Ue(e, t, c);
    }
    else n.current = null;
  }
  function Wh(e) {
    var t = e.type, n = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && o.focus();
          break e;
        case "img":
          n.src ? o.src = n.src : n.srcSet && (o.srcset = n.srcSet);
      }
    } catch (c) {
      Ue(e, e.return, c);
    }
  }
  function cs(e, t, n) {
    try {
      var o = e.stateNode;
      k2(o, e.type, n, t), o[kt] = t;
    } catch (c) {
      Ue(e, e.return, c);
    }
  }
  function em(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ba(e.type) || e.tag === 4;
  }
  function us(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || em(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ba(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ss(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = zn));
    else if (o !== 4 && (o === 27 && ba(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (ss(e, t, n), e = e.sibling; e !== null; ) ss(e, t, n), e = e.sibling;
  }
  function hi(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (o !== 4 && (o === 27 && ba(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (hi(e, t, n), e = e.sibling; e !== null; ) hi(e, t, n), e = e.sibling;
  }
  function tm(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var o = e.type, c = t.attributes; c.length; ) t.removeAttributeNode(c[0]);
      St(t, o, n), t[vt] = e, t[kt] = n;
    } catch (u) {
      Ue(e, e.return, u);
    }
  }
  var Vn = false, lt = false, fs = false, nm = typeof WeakSet == "function" ? WeakSet : Set, pt = null;
  function h2(e, t) {
    if (e = e.containerInfo, Os = ki, e = hp(e), ou(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var o = n.getSelection && n.getSelection();
        if (o && o.rangeCount !== 0) {
          n = o.anchorNode;
          var c = o.anchorOffset, u = o.focusNode;
          o = o.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var g = 0, x = -1, T = -1, U = 0, K = 0, Q = e, B = null;
          t: for (; ; ) {
            for (var q; Q !== n || c !== 0 && Q.nodeType !== 3 || (x = g + c), Q !== u || o !== 0 && Q.nodeType !== 3 || (T = g + o), Q.nodeType === 3 && (g += Q.nodeValue.length), (q = Q.firstChild) !== null; ) B = Q, Q = q;
            for (; ; ) {
              if (Q === e) break t;
              if (B === n && ++U === c && (x = g), B === u && ++K === o && (T = g), (q = Q.nextSibling) !== null) break;
              Q = B, B = Q.parentNode;
            }
            Q = q;
          }
          n = x === -1 || T === -1 ? null : { start: x, end: T };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (zs = { focusedElem: e, selectionRange: n }, ki = false, pt = t; pt !== null; ) if (t = pt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, pt = e;
    else for (; pt !== null; ) {
      switch (t = pt, u = t.alternate, e = t.flags, t.tag) {
        case 0:
          if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (n = 0; n < e.length; n++) c = e[n], c.ref.impl = c.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && u !== null) {
            e = void 0, n = t, c = u.memoizedProps, u = u.memoizedState, o = n.stateNode;
            try {
              var ie = eo(n.type, c);
              e = o.getSnapshotBeforeUpdate(ie, u), o.__reactInternalSnapshotBeforeUpdate = e;
            } catch (me) {
              Ue(n, n.return, me);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) Ls(e);
            else if (n === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Ls(e);
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
          if ((e & 1024) !== 0) throw Error(i(163));
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, pt = e;
        break;
      }
      pt = t.return;
    }
  }
  function am(e, t, n) {
    var o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Yn(e, n), o & 4 && Pl(5, n);
        break;
      case 1:
        if (Yn(e, n), o & 4) if (e = n.stateNode, t === null) try {
          e.componentDidMount();
        } catch (g) {
          Ue(n, n.return, g);
        }
        else {
          var c = eo(n.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (g) {
            Ue(n, n.return, g);
          }
        }
        o & 64 && Fh(n), o & 512 && ql(n, n.return);
        break;
      case 3:
        if (Yn(e, n), o & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null) switch (n.child.tag) {
            case 27:
            case 5:
              t = n.child.stateNode;
              break;
            case 1:
              t = n.child.stateNode;
          }
          try {
            Pp(e, t);
          } catch (g) {
            Ue(n, n.return, g);
          }
        }
        break;
      case 27:
        t === null && o & 4 && tm(n);
      case 26:
      case 5:
        Yn(e, n), t === null && o & 4 && Wh(n), o & 512 && ql(n, n.return);
        break;
      case 12:
        Yn(e, n);
        break;
      case 31:
        Yn(e, n), o & 4 && rm(e, n);
        break;
      case 13:
        Yn(e, n), o & 4 && im(e, n), o & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = _2.bind(null, n), V2(e, n))));
        break;
      case 22:
        if (o = n.memoizedState !== null || Vn, !o) {
          t = t !== null && t.memoizedState !== null || lt, c = Vn;
          var u = lt;
          Vn = o, (lt = t) && !u ? Kn(e, n, (n.subtreeFlags & 8772) !== 0) : Yn(e, n), Vn = c, lt = u;
        }
        break;
      case 30:
        break;
      default:
        Yn(e, n);
    }
  }
  function om(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, om(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Pc(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ke = null, Ht = false;
  function Gn(e, t, n) {
    for (n = n.child; n !== null; ) lm(e, t, n), n = n.sibling;
  }
  function lm(e, t, n) {
    if (Tt && typeof Tt.onCommitFiberUnmount == "function") try {
      Tt.onCommitFiberUnmount(Ha, n);
    } catch {
    }
    switch (n.tag) {
      case 26:
        lt || Mn(n, t), Gn(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        lt || Mn(n, t);
        var o = Ke, c = Ht;
        ba(n.type) && (Ke = n.stateNode, Ht = false), Gn(e, t, n), Fl(n.stateNode), Ke = o, Ht = c;
        break;
      case 5:
        lt || Mn(n, t);
      case 6:
        if (o = Ke, c = Ht, Ke = null, Gn(e, t, n), Ke = o, Ht = c, Ke !== null) if (Ht) try {
          (Ke.nodeType === 9 ? Ke.body : Ke.nodeName === "HTML" ? Ke.ownerDocument.body : Ke).removeChild(n.stateNode);
        } catch (u) {
          Ue(n, t, u);
        }
        else try {
          Ke.removeChild(n.stateNode);
        } catch (u) {
          Ue(n, t, u);
        }
        break;
      case 18:
        Ke !== null && (Ht ? (e = Ke, Fm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Fo(e)) : Fm(Ke, n.stateNode));
        break;
      case 4:
        o = Ke, c = Ht, Ke = n.stateNode.containerInfo, Ht = true, Gn(e, t, n), Ke = o, Ht = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        da(2, n, t), lt || da(4, n, t), Gn(e, t, n);
        break;
      case 1:
        lt || (Mn(n, t), o = n.stateNode, typeof o.componentWillUnmount == "function" && Jh(n, t, o)), Gn(e, t, n);
        break;
      case 21:
        Gn(e, t, n);
        break;
      case 22:
        lt = (o = lt) || n.memoizedState !== null, Gn(e, t, n), lt = o;
        break;
      default:
        Gn(e, t, n);
    }
  }
  function rm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Fo(e);
      } catch (n) {
        Ue(t, t.return, n);
      }
    }
  }
  function im(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      Fo(e);
    } catch (n) {
      Ue(t, t.return, n);
    }
  }
  function m2(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new nm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new nm()), t;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function mi(e, t) {
    var n = m2(e);
    t.forEach(function(o) {
      if (!n.has(o)) {
        n.add(o);
        var c = C2.bind(null, e, o);
        o.then(c, c);
      }
    });
  }
  function Ut(e, t) {
    var n = t.deletions;
    if (n !== null) for (var o = 0; o < n.length; o++) {
      var c = n[o], u = e, g = t, x = g;
      e: for (; x !== null; ) {
        switch (x.tag) {
          case 27:
            if (ba(x.type)) {
              Ke = x.stateNode, Ht = false;
              break e;
            }
            break;
          case 5:
            Ke = x.stateNode, Ht = false;
            break e;
          case 3:
          case 4:
            Ke = x.stateNode.containerInfo, Ht = true;
            break e;
        }
        x = x.return;
      }
      if (Ke === null) throw Error(i(160));
      lm(u, g, c), Ke = null, Ht = false, u = c.alternate, u !== null && (u.return = null), c.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) cm(t, e), t = t.sibling;
  }
  var hn = null;
  function cm(e, t) {
    var n = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ut(t, e), Bt(e), o & 4 && (da(3, e, e.return), Pl(3, e), da(5, e, e.return));
        break;
      case 1:
        Ut(t, e), Bt(e), o & 512 && (lt || n === null || Mn(n, n.return)), o & 64 && Vn && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? o : n.concat(o))));
        break;
      case 26:
        var c = hn;
        if (Ut(t, e), Bt(e), o & 512 && (lt || n === null || Mn(n, n.return)), o & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (o = e.memoizedState, n === null) if (o === null) if (e.stateNode === null) {
            e: {
              o = e.type, n = e.memoizedProps, c = c.ownerDocument || c;
              t: switch (o) {
                case "title":
                  u = c.getElementsByTagName("title")[0], (!u || u[ml] || u[vt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = c.createElement(o), c.head.insertBefore(u, c.querySelector("head > title"))), St(u, o, n), u[vt] = e, dt(u), o = u;
                  break e;
                case "link":
                  var g = cv("link", "href", c).get(o + (n.href || ""));
                  if (g) {
                    for (var x = 0; x < g.length; x++) if (u = g[x], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                      g.splice(x, 1);
                      break t;
                    }
                  }
                  u = c.createElement(o), St(u, o, n), c.head.appendChild(u);
                  break;
                case "meta":
                  if (g = cv("meta", "content", c).get(o + (n.content || ""))) {
                    for (x = 0; x < g.length; x++) if (u = g[x], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                      g.splice(x, 1);
                      break t;
                    }
                  }
                  u = c.createElement(o), St(u, o, n), c.head.appendChild(u);
                  break;
                default:
                  throw Error(i(468, o));
              }
              u[vt] = e, dt(u), o = u;
            }
            e.stateNode = o;
          } else uv(c, e.type, e.stateNode);
          else e.stateNode = iv(c, o, e.memoizedProps);
          else u !== o ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, o === null ? uv(c, e.type, e.stateNode) : iv(c, o, e.memoizedProps)) : o === null && e.stateNode !== null && cs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Ut(t, e), Bt(e), o & 512 && (lt || n === null || Mn(n, n.return)), n !== null && o & 4 && cs(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (Ut(t, e), Bt(e), o & 512 && (lt || n === null || Mn(n, n.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            So(c, "");
          } catch (ie) {
            Ue(e, e.return, ie);
          }
        }
        o & 4 && e.stateNode != null && (c = e.memoizedProps, cs(e, c, n !== null ? n.memoizedProps : c)), o & 1024 && (fs = true);
        break;
      case 6:
        if (Ut(t, e), Bt(e), o & 4) {
          if (e.stateNode === null) throw Error(i(162));
          o = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = o;
          } catch (ie) {
            Ue(e, e.return, ie);
          }
        }
        break;
      case 3:
        if (Di = null, c = hn, hn = Ai(t.containerInfo), Ut(t, e), hn = c, Bt(e), o & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Fo(t.containerInfo);
        } catch (ie) {
          Ue(e, e.return, ie);
        }
        fs && (fs = false, um(e));
        break;
      case 4:
        o = hn, hn = Ai(e.stateNode.containerInfo), Ut(t, e), Bt(e), hn = o;
        break;
      case 12:
        Ut(t, e), Bt(e);
        break;
      case 31:
        Ut(t, e), Bt(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, mi(e, o)));
        break;
      case 13:
        Ut(t, e), Bt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (gi = mt()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, mi(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null, U = Vn, K = lt;
        if (Vn = U || c, lt = K || T, Ut(t, e), lt = K, Vn = U, Bt(e), o & 8192) e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (n === null || T || Vn || lt || to(e)), n = null, t = e; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (n === null) {
              T = n = t;
              try {
                if (u = T.stateNode, c) g = u.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                else {
                  x = T.stateNode;
                  var Q = T.memoizedProps.style, B = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                  x.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                }
              } catch (ie) {
                Ue(T, T.return, ie);
              }
            }
          } else if (t.tag === 6) {
            if (n === null) {
              T = t;
              try {
                T.stateNode.nodeValue = c ? "" : T.memoizedProps;
              } catch (ie) {
                Ue(T, T.return, ie);
              }
            }
          } else if (t.tag === 18) {
            if (n === null) {
              T = t;
              try {
                var q = T.stateNode;
                c ? Jm(q, true) : Jm(T.stateNode, false);
              } catch (ie) {
                Ue(T, T.return, ie);
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
        o & 4 && (o = e.updateQueue, o !== null && (n = o.retryQueue, n !== null && (o.retryQueue = null, mi(e, n))));
        break;
      case 19:
        Ut(t, e), Bt(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, mi(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ut(t, e), Bt(e);
    }
  }
  function Bt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, o = e.return; o !== null; ) {
          if (em(o)) {
            n = o;
            break;
          }
          o = o.return;
        }
        if (n == null) throw Error(i(160));
        switch (n.tag) {
          case 27:
            var c = n.stateNode, u = us(e);
            hi(e, u, c);
            break;
          case 5:
            var g = n.stateNode;
            n.flags & 32 && (So(g, ""), n.flags &= -33);
            var x = us(e);
            hi(e, x, g);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo, U = us(e);
            ss(e, U, T);
            break;
          default:
            throw Error(i(161));
        }
      } catch (K) {
        Ue(e, e.return, K);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function um(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var t = e;
      um(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
    }
  }
  function Yn(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) am(e, t.alternate, t), t = t.sibling;
  }
  function to(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          da(4, t, t.return), to(t);
          break;
        case 1:
          Mn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Jh(t, t.return, n), to(t);
          break;
        case 27:
          Fl(t.stateNode);
        case 26:
        case 5:
          Mn(t, t.return), to(t);
          break;
        case 22:
          t.memoizedState === null && to(t);
          break;
        case 30:
          to(t);
          break;
        default:
          to(t);
      }
      e = e.sibling;
    }
  }
  function Kn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate, c = e, u = t, g = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Kn(c, u, n), Pl(4, u);
          break;
        case 1:
          if (Kn(c, u, n), o = u, c = o.stateNode, typeof c.componentDidMount == "function") try {
            c.componentDidMount();
          } catch (U) {
            Ue(o, o.return, U);
          }
          if (o = u, c = o.updateQueue, c !== null) {
            var x = o.stateNode;
            try {
              var T = c.shared.hiddenCallbacks;
              if (T !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < T.length; c++) Ip(T[c], x);
            } catch (U) {
              Ue(o, o.return, U);
            }
          }
          n && g & 64 && Fh(u), ql(u, u.return);
          break;
        case 27:
          tm(u);
        case 26:
        case 5:
          Kn(c, u, n), n && o === null && g & 4 && Wh(u), ql(u, u.return);
          break;
        case 12:
          Kn(c, u, n);
          break;
        case 31:
          Kn(c, u, n), n && g & 4 && rm(c, u);
          break;
        case 13:
          Kn(c, u, n), n && g & 4 && im(c, u);
          break;
        case 22:
          u.memoizedState === null && Kn(c, u, n), ql(u, u.return);
          break;
        case 30:
          break;
        default:
          Kn(c, u, n);
      }
      t = t.sibling;
    }
  }
  function ds(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Tl(n));
  }
  function ps(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Tl(e));
  }
  function mn(e, t, n, o) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) sm(e, t, n, o), t = t.sibling;
  }
  function sm(e, t, n, o) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        mn(e, t, n, o), c & 2048 && Pl(9, t);
        break;
      case 1:
        mn(e, t, n, o);
        break;
      case 3:
        mn(e, t, n, o), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Tl(e)));
        break;
      case 12:
        if (c & 2048) {
          mn(e, t, n, o), e = t.stateNode;
          try {
            var u = t.memoizedProps, g = u.id, x = u.onPostCommit;
            typeof x == "function" && x(g, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (T) {
            Ue(t, t.return, T);
          }
        } else mn(e, t, n, o);
        break;
      case 31:
        mn(e, t, n, o);
        break;
      case 13:
        mn(e, t, n, o);
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, g = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? mn(e, t, n, o) : Vl(e, t) : u._visibility & 2 ? mn(e, t, n, o) : (u._visibility |= 2, Io(e, t, n, o, (t.subtreeFlags & 10256) !== 0 || false)), c & 2048 && ds(g, t);
        break;
      case 24:
        mn(e, t, n, o), c & 2048 && ps(t.alternate, t);
        break;
      default:
        mn(e, t, n, o);
    }
  }
  function Io(e, t, n, o, c) {
    for (c = c && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var u = e, g = t, x = n, T = o, U = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Io(u, g, x, T, c), Pl(8, g);
          break;
        case 23:
          break;
        case 22:
          var K = g.stateNode;
          g.memoizedState !== null ? K._visibility & 2 ? Io(u, g, x, T, c) : Vl(u, g) : (K._visibility |= 2, Io(u, g, x, T, c)), c && U & 2048 && ds(g.alternate, g);
          break;
        case 24:
          Io(u, g, x, T, c), c && U & 2048 && ps(g.alternate, g);
          break;
        default:
          Io(u, g, x, T, c);
      }
      t = t.sibling;
    }
  }
  function Vl(e, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var n = e, o = t, c = o.flags;
      switch (o.tag) {
        case 22:
          Vl(n, o), c & 2048 && ds(o.alternate, o);
          break;
        case 24:
          Vl(n, o), c & 2048 && ps(o.alternate, o);
          break;
        default:
          Vl(n, o);
      }
      t = t.sibling;
    }
  }
  var Gl = 8192;
  function Po(e, t, n) {
    if (e.subtreeFlags & Gl) for (e = e.child; e !== null; ) fm(e, t, n), e = e.sibling;
  }
  function fm(e, t, n) {
    switch (e.tag) {
      case 26:
        Po(e, t, n), e.flags & Gl && e.memoizedState !== null && tx(n, hn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Po(e, t, n);
        break;
      case 3:
      case 4:
        var o = hn;
        hn = Ai(e.stateNode.containerInfo), Po(e, t, n), hn = o;
        break;
      case 22:
        e.memoizedState === null && (o = e.alternate, o !== null && o.memoizedState !== null ? (o = Gl, Gl = 16777216, Po(e, t, n), Gl = o) : Po(e, t, n));
        break;
      default:
        Po(e, t, n);
    }
  }
  function dm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Yl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var n = 0; n < t.length; n++) {
        var o = t[n];
        pt = o, hm(o, e);
      }
      dm(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) pm(e), e = e.sibling;
  }
  function pm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Yl(e), e.flags & 2048 && da(9, e, e.return);
        break;
      case 3:
        Yl(e);
        break;
      case 12:
        Yl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, vi(e)) : Yl(e);
        break;
      default:
        Yl(e);
    }
  }
  function vi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var n = 0; n < t.length; n++) {
        var o = t[n];
        pt = o, hm(o, e);
      }
      dm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          da(8, t, t.return), vi(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, vi(t));
          break;
        default:
          vi(t);
      }
      e = e.sibling;
    }
  }
  function hm(e, t) {
    for (; pt !== null; ) {
      var n = pt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          da(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var o = n.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Tl(n.memoizedState.cache);
      }
      if (o = n.child, o !== null) o.return = n, pt = o;
      else e: for (n = e; pt !== null; ) {
        o = pt;
        var c = o.sibling, u = o.return;
        if (om(o), o === n) {
          pt = null;
          break e;
        }
        if (c !== null) {
          c.return = u, pt = c;
          break e;
        }
        pt = u;
      }
    }
  }
  var v2 = { getCacheForType: function(e) {
    var t = yt(nt), n = t.data.get(e);
    return n === void 0 && (n = e(), t.data.set(e, n)), n;
  }, cacheSignal: function() {
    return yt(nt).controller.signal;
  } }, g2 = typeof WeakMap == "function" ? WeakMap : Map, ke = 0, qe = null, we = null, Ae = 0, He = 0, Qt = null, pa = false, qo = false, hs = false, Xn = 0, Ze = 0, ha = 0, no = 0, ms = 0, Zt = 0, Vo = 0, Kl = null, It = null, vs = false, gi = 0, mm = 0, yi = 1 / 0, bi = null, ma = null, ct = 0, va = null, Go = null, $n = 0, gs = 0, ys = null, vm = null, Xl = 0, bs = null;
  function Ft() {
    return (ke & 2) !== 0 && Ae !== 0 ? Ae & -Ae : z.T !== null ? Ms() : Bc();
  }
  function gm() {
    if (Zt === 0) if ((Ae & 536870912) === 0 || De) {
      var e = fo;
      fo <<= 1, (fo & 3932160) === 0 && (fo = 262144), Zt = e;
    } else Zt = 536870912;
    return e = Xt.current, e !== null && (e.flags |= 32), Zt;
  }
  function Pt(e, t, n) {
    (e === qe && (He === 2 || He === 9) || e.cancelPendingCommit !== null) && (Yo(e, 0), ga(e, Ae, Zt, false)), $e(e, n), ((ke & 2) === 0 || e !== qe) && (e === qe && ((ke & 2) === 0 && (no |= n), Ze === 4 && ga(e, Ae, Zt, false)), Rn(e));
  }
  function ym(e, t, n) {
    if ((ke & 6) !== 0) throw Error(i(327));
    var o = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ye(e, t), c = o ? S2(e, t) : xs(e, t, true), u = o;
    do {
      if (c === 0) {
        qo && !o && ga(e, t, 0, false);
        break;
      } else {
        if (n = e.current.alternate, u && !y2(n)) {
          c = xs(e, t, false), u = false;
          continue;
        }
        if (c === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u) var g = 0;
          else g = e.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
          if (g !== 0) {
            t = g;
            e: {
              var x = e;
              c = Kl;
              var T = x.current.memoizedState.isDehydrated;
              if (T && (Yo(x, g).flags |= 256), g = xs(x, g, false), g !== 2) {
                if (hs && !T) {
                  x.errorRecoveryDisabledLanes |= u, no |= u, c = 4;
                  break e;
                }
                u = It, It = c, u !== null && (It === null ? It = u : It.push.apply(It, u));
              }
              c = g;
            }
            if (u = false, c !== 2) continue;
          }
        }
        if (c === 1) {
          Yo(e, 0), ga(e, t, 0, true);
          break;
        }
        e: {
          switch (o = e, u = c, u) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ga(o, t, Zt, !pa);
              break e;
            case 2:
              It = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && (c = gi + 300 - mt(), 10 < c)) {
            if (ga(o, t, Zt, !pa), xe(o, 0, true) !== 0) break e;
            $n = t, o.timeoutHandle = Qm(bm.bind(null, o, n, It, bi, vs, t, Zt, no, Vo, pa, u, "Throttled", -0, 0), c);
            break e;
          }
          bm(o, n, It, bi, vs, t, Zt, no, Vo, pa, u, null, -0, 0);
        }
      }
      break;
    } while (true);
    Rn(e);
  }
  function bm(e, t, n, o, c, u, g, x, T, U, K, Q, B, q) {
    if (e.timeoutHandle = -1, Q = t.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
      Q = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: zn }, fm(t, u, Q);
      var ie = (u & 62914560) === u ? gi - mt() : (u & 4194048) === u ? mm - mt() : 0;
      if (ie = nx(Q, ie), ie !== null) {
        $n = u, e.cancelPendingCommit = ie(wm.bind(null, e, t, u, n, o, c, g, x, T, K, Q, null, B, q)), ga(e, u, g, !U);
        return;
      }
    }
    wm(e, t, u, n, o, c, g, x, T);
  }
  function y2(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var o = 0; o < n.length; o++) {
        var c = n[o], u = c.getSnapshot;
        c = c.value;
        try {
          if (!Yt(u(), c)) return false;
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
  function ga(e, t, n, o) {
    t &= ~ms, t &= ~no, e.suspendedLanes |= t, e.pingedLanes &= ~t, o && (e.warmLanes |= t), o = e.expirationTimes;
    for (var c = t; 0 < c; ) {
      var u = 31 - _t(c), g = 1 << u;
      o[u] = -1, c &= ~g;
    }
    n !== 0 && Ba(e, n, t);
  }
  function Si() {
    return (ke & 6) === 0 ? ($l(0), false) : true;
  }
  function Ss() {
    if (we !== null) {
      if (He === 0) var e = we.return;
      else e = we, Hn = Xa = null, Lu(e), ko = null, Nl = 0, e = we;
      for (; e !== null; ) Zh(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function Yo(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, U2(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), $n = 0, Ss(), qe = e, we = n = kn(e.current, null), Ae = t, He = 0, Qt = null, pa = false, qo = Ye(e, t), hs = false, Vo = Zt = ms = no = ha = Ze = 0, It = Kl = null, vs = false, (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0) for (e = e.entanglements, o &= t; 0 < o; ) {
      var c = 31 - _t(o), u = 1 << c;
      t |= e[c], o &= ~u;
    }
    return Xn = t, Pr(), n;
  }
  function Sm(e, t) {
    Ce = null, z.H = Ul, t === jo || t === Qr ? (t = Lp(), He = 3) : t === Cu ? (t = Lp(), He = 4) : He = t === Ju ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Qt = t, we === null && (Ze = 1, ui(e, nn(t, e.current)));
  }
  function xm() {
    var e = Xt.current;
    return e === null ? true : (Ae & 4194048) === Ae ? rn === null : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0 ? e === rn : false;
  }
  function Em() {
    var e = z.H;
    return z.H = Ul, e === null ? Ul : e;
  }
  function _m() {
    var e = z.A;
    return z.A = v2, e;
  }
  function xi() {
    Ze = 4, pa || (Ae & 4194048) !== Ae && Xt.current !== null || (qo = true), (ha & 134217727) === 0 && (no & 134217727) === 0 || qe === null || ga(qe, Ae, Zt, false);
  }
  function xs(e, t, n) {
    var o = ke;
    ke |= 2;
    var c = Em(), u = _m();
    (qe !== e || Ae !== t) && (bi = null, Yo(e, t)), t = false;
    var g = Ze;
    e: do
      try {
        if (He !== 0 && we !== null) {
          var x = we, T = Qt;
          switch (He) {
            case 8:
              Ss(), g = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Xt.current === null && (t = true);
              var U = He;
              if (He = 0, Qt = null, Ko(e, x, T, U), n && qo) {
                g = 0;
                break e;
              }
              break;
            default:
              U = He, He = 0, Qt = null, Ko(e, x, T, U);
          }
        }
        b2(), g = Ze;
        break;
      } catch (K) {
        Sm(e, K);
      }
    while (true);
    return t && e.shellSuspendCounter++, Hn = Xa = null, ke = o, z.H = c, z.A = u, we === null && (qe = null, Ae = 0, Pr()), g;
  }
  function b2() {
    for (; we !== null; ) Cm(we);
  }
  function S2(e, t) {
    var n = ke;
    ke |= 2;
    var o = Em(), c = _m();
    qe !== e || Ae !== t ? (bi = null, yi = mt() + 500, Yo(e, t)) : qo = Ye(e, t);
    e: do
      try {
        if (He !== 0 && we !== null) {
          t = we;
          var u = Qt;
          t: switch (He) {
            case 1:
              He = 0, Qt = null, Ko(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (jp(u)) {
                He = 0, Qt = null, Mm(t);
                break;
              }
              t = function() {
                He !== 2 && He !== 9 || qe !== e || (He = 7), Rn(e);
              }, u.then(t, t);
              break e;
            case 3:
              He = 7;
              break e;
            case 4:
              He = 5;
              break e;
            case 7:
              jp(u) ? (He = 0, Qt = null, Mm(t)) : (He = 0, Qt = null, Ko(e, t, u, 7));
              break;
            case 5:
              var g = null;
              switch (we.tag) {
                case 26:
                  g = we.memoizedState;
                case 5:
                case 27:
                  var x = we;
                  if (g ? sv(g) : x.stateNode.complete) {
                    He = 0, Qt = null;
                    var T = x.sibling;
                    if (T !== null) we = T;
                    else {
                      var U = x.return;
                      U !== null ? (we = U, Ei(U)) : we = null;
                    }
                    break t;
                  }
              }
              He = 0, Qt = null, Ko(e, t, u, 5);
              break;
            case 6:
              He = 0, Qt = null, Ko(e, t, u, 6);
              break;
            case 8:
              Ss(), Ze = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        x2();
        break;
      } catch (K) {
        Sm(e, K);
      }
    while (true);
    return Hn = Xa = null, z.H = o, z.A = c, ke = n, we !== null ? 0 : (qe = null, Ae = 0, Pr(), Ze);
  }
  function x2() {
    for (; we !== null && !st(); ) Cm(we);
  }
  function Cm(e) {
    var t = $h(e.alternate, e, Xn);
    e.memoizedProps = e.pendingProps, t === null ? Ei(e) : we = t;
  }
  function Mm(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = qh(n, t, t.pendingProps, t.type, void 0, Ae);
        break;
      case 11:
        t = qh(n, t, t.pendingProps, t.type.render, t.ref, Ae);
        break;
      case 5:
        Lu(t);
      default:
        Zh(n, t), t = we = _p(t, Xn), t = $h(n, t, Xn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ei(e) : we = t;
  }
  function Ko(e, t, n, o) {
    Hn = Xa = null, Lu(t), ko = null, Nl = 0;
    var c = t.return;
    try {
      if (u2(e, c, t, n, Ae)) {
        Ze = 1, ui(e, nn(n, e.current)), we = null;
        return;
      }
    } catch (u) {
      if (c !== null) throw we = c, u;
      Ze = 1, ui(e, nn(n, e.current)), we = null;
      return;
    }
    t.flags & 32768 ? (De || o === 1 ? e = true : qo || (Ae & 536870912) !== 0 ? e = false : (pa = e = true, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Xt.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Rm(t, e)) : Ei(t);
  }
  function Ei(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Rm(t, pa);
        return;
      }
      e = t.return;
      var n = d2(t.alternate, t, Xn);
      if (n !== null) {
        we = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    Ze === 0 && (Ze = 5);
  }
  function Rm(e, t) {
    do {
      var n = p2(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        we = e;
        return;
      }
      we = e = n;
    } while (e !== null);
    Ze = 6, we = null;
  }
  function wm(e, t, n, o, c, u, g, x, T) {
    e.cancelPendingCommit = null;
    do
      _i();
    while (ct !== 0);
    if ((ke & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (u = t.lanes | t.childLanes, u |= uu, Ot(e, n, u, g, x, T), e === qe && (we = qe = null, Ae = 0), Go = t, va = e, $n = n, gs = u, ys = c, vm = o, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, M2(it, function() {
        return Om(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || o) {
        o = z.T, z.T = null, c = X.p, X.p = 2, g = ke, ke |= 4;
        try {
          h2(e, t, n);
        } finally {
          ke = g, X.p = c, z.T = o;
        }
      }
      ct = 1, Tm(), Am(), Nm();
    }
  }
  function Tm() {
    if (ct === 1) {
      ct = 0;
      var e = va, t = Go, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = z.T, z.T = null;
        var o = X.p;
        X.p = 2;
        var c = ke;
        ke |= 4;
        try {
          cm(t, e);
          var u = zs, g = hp(e.containerInfo), x = u.focusedElem, T = u.selectionRange;
          if (g !== x && x && x.ownerDocument && pp(x.ownerDocument.documentElement, x)) {
            if (T !== null && ou(x)) {
              var U = T.start, K = T.end;
              if (K === void 0 && (K = U), "selectionStart" in x) x.selectionStart = U, x.selectionEnd = Math.min(K, x.value.length);
              else {
                var Q = x.ownerDocument || document, B = Q && Q.defaultView || window;
                if (B.getSelection) {
                  var q = B.getSelection(), ie = x.textContent.length, me = Math.min(T.start, ie), Pe = T.end === void 0 ? me : Math.min(T.end, ie);
                  !q.extend && me > Pe && (g = Pe, Pe = me, me = g);
                  var j = dp(x, me), D = dp(x, Pe);
                  if (j && D && (q.rangeCount !== 1 || q.anchorNode !== j.node || q.anchorOffset !== j.offset || q.focusNode !== D.node || q.focusOffset !== D.offset)) {
                    var H = Q.createRange();
                    H.setStart(j.node, j.offset), q.removeAllRanges(), me > Pe ? (q.addRange(H), q.extend(D.node, D.offset)) : (H.setEnd(D.node, D.offset), q.addRange(H));
                  }
                }
              }
            }
            for (Q = [], q = x; q = q.parentNode; ) q.nodeType === 1 && Q.push({ element: q, left: q.scrollLeft, top: q.scrollTop });
            for (typeof x.focus == "function" && x.focus(), x = 0; x < Q.length; x++) {
              var $ = Q[x];
              $.element.scrollLeft = $.left, $.element.scrollTop = $.top;
            }
          }
          ki = !!Os, zs = Os = null;
        } finally {
          ke = c, X.p = o, z.T = n;
        }
      }
      e.current = t, ct = 2;
    }
  }
  function Am() {
    if (ct === 2) {
      ct = 0;
      var e = va, t = Go, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = z.T, z.T = null;
        var o = X.p;
        X.p = 2;
        var c = ke;
        ke |= 4;
        try {
          am(e, t.alternate, t);
        } finally {
          ke = c, X.p = o, z.T = n;
        }
      }
      ct = 3;
    }
  }
  function Nm() {
    if (ct === 4 || ct === 3) {
      ct = 0, Sn();
      var e = va, t = Go, n = $n, o = vm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ct = 5 : (ct = 0, Go = va = null, Dm(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (ma = null), dn(n), t = t.stateNode, Tt && typeof Tt.onCommitFiberRoot == "function") try {
        Tt.onCommitFiberRoot(Ha, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (o !== null) {
        t = z.T, c = X.p, X.p = 2, z.T = null;
        try {
          for (var u = e.onRecoverableError, g = 0; g < o.length; g++) {
            var x = o[g];
            u(x.value, { componentStack: x.stack });
          }
        } finally {
          z.T = t, X.p = c;
        }
      }
      ($n & 3) !== 0 && _i(), Rn(e), c = e.pendingLanes, (n & 261930) !== 0 && (c & 42) !== 0 ? e === bs ? Xl++ : (Xl = 0, bs = e) : Xl = 0, $l(0);
    }
  }
  function Dm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Tl(t)));
  }
  function _i() {
    return Tm(), Am(), Nm(), Om();
  }
  function Om() {
    if (ct !== 5) return false;
    var e = va, t = gs;
    gs = 0;
    var n = dn($n), o = z.T, c = X.p;
    try {
      X.p = 32 > n ? 32 : n, z.T = null, n = ys, ys = null;
      var u = va, g = $n;
      if (ct = 0, Go = va = null, $n = 0, (ke & 6) !== 0) throw Error(i(331));
      var x = ke;
      if (ke |= 4, pm(u.current), sm(u, u.current, g, n), ke = x, $l(0, false), Tt && typeof Tt.onPostCommitFiberRoot == "function") try {
        Tt.onPostCommitFiberRoot(Ha, u);
      } catch {
      }
      return true;
    } finally {
      X.p = c, z.T = o, Dm(e, t);
    }
  }
  function zm(e, t, n) {
    t = nn(n, t), t = Fu(e.stateNode, t, 2), e = ua(e, t, 2), e !== null && ($e(e, 2), Rn(e));
  }
  function Ue(e, t, n) {
    if (e.tag === 3) zm(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        zm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ma === null || !ma.has(o))) {
          e = nn(n, e), n = jh(2), o = ua(t, n, 2), o !== null && (kh(n, o, t, e), $e(o, 2), Rn(o));
          break;
        }
      }
      t = t.return;
    }
  }
  function Es(e, t, n) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new g2();
      var c = /* @__PURE__ */ new Set();
      o.set(t, c);
    } else c = o.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(t, c));
    c.has(n) || (hs = true, c.add(n), e = E2.bind(null, e, t, n), t.then(e, e));
  }
  function E2(e, t, n) {
    var o = e.pingCache;
    o !== null && o.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, qe === e && (Ae & n) === n && (Ze === 4 || Ze === 3 && (Ae & 62914560) === Ae && 300 > mt() - gi ? (ke & 2) === 0 && Yo(e, 0) : ms |= n, Vo === Ae && (Vo = 0)), Rn(e);
  }
  function jm(e, t) {
    t === 0 && (t = Ct()), e = Ga(e, t), e !== null && ($e(e, t), Rn(e));
  }
  function _2(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), jm(e, n);
  }
  function C2(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var o = e.stateNode, c = e.memoizedState;
        c !== null && (n = c.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    o !== null && o.delete(t), jm(e, n);
  }
  function M2(e, t) {
    return ka(e, t);
  }
  var Ci = null, Xo = null, _s = false, Mi = false, Cs = false, ya = 0;
  function Rn(e) {
    e !== Xo && e.next === null && (Xo === null ? Ci = Xo = e : Xo = Xo.next = e), Mi = true, _s || (_s = true, w2());
  }
  function $l(e, t) {
    if (!Cs && Mi) {
      Cs = true;
      do
        for (var n = false, o = Ci; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var u = 0;
            else {
              var g = o.suspendedLanes, x = o.pingedLanes;
              u = (1 << 31 - _t(42 | e) + 1) - 1, u &= c & ~(g & ~x), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = true, Um(o, u));
          } else u = Ae, u = xe(o, o === qe ? u : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== -1), (u & 3) === 0 || Ye(o, u) || (n = true, Um(o, u));
          o = o.next;
        }
      while (n);
      Cs = false;
    }
  }
  function R2() {
    km();
  }
  function km() {
    Mi = _s = false;
    var e = 0;
    ya !== 0 && H2() && (e = ya);
    for (var t = mt(), n = null, o = Ci; o !== null; ) {
      var c = o.next, u = Lm(o, t);
      u === 0 ? (o.next = null, n === null ? Ci = c : n.next = c, c === null && (Xo = n)) : (n = o, (e !== 0 || (u & 3) !== 0) && (Mi = true)), o = c;
    }
    ct !== 0 && ct !== 5 || $l(e), ya !== 0 && (ya = 0);
  }
  function Lm(e, t) {
    for (var n = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var g = 31 - _t(u), x = 1 << g, T = c[g];
      T === -1 ? ((x & n) === 0 || (x & o) !== 0) && (c[g] = ft(x, t)) : T <= t && (e.expiredLanes |= x), u &= ~x;
    }
    if (t = qe, n = Ae, n = xe(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), o = e.callbackNode, n === 0 || e === t && (He === 2 || He === 9) || e.cancelPendingCommit !== null) return o !== null && o !== null && La(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Ye(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (o !== null && La(o), dn(n)) {
        case 2:
        case 8:
          n = rt;
          break;
        case 32:
          n = it;
          break;
        case 268435456:
          n = Dn;
          break;
        default:
          n = it;
      }
      return o = Hm.bind(null, e), n = ka(n, o), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return o !== null && o !== null && La(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Hm(e, t) {
    if (ct !== 0 && ct !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (_i() && e.callbackNode !== n) return null;
    var o = Ae;
    return o = xe(e, e === qe ? o : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), o === 0 ? null : (ym(e, o, t), Lm(e, mt()), e.callbackNode != null && e.callbackNode === n ? Hm.bind(null, e) : null);
  }
  function Um(e, t) {
    if (_i()) return null;
    ym(e, t, true);
  }
  function w2() {
    B2(function() {
      (ke & 6) !== 0 ? ka(Le, R2) : km();
    });
  }
  function Ms() {
    if (ya === 0) {
      var e = Oo;
      e === 0 && (e = so, so <<= 1, (so & 261888) === 0 && (so = 256)), ya = e;
    }
    return ya;
  }
  function Bm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : zr("" + e);
  }
  function Im(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function T2(e, t, n, o, c) {
    if (t === "submit" && n && n.stateNode === c) {
      var u = Bm((c[kt] || null).action), g = o.submitter;
      g && (t = (t = g[kt] || null) ? Bm(t.formAction) : g.getAttribute("formAction"), t !== null && (u = t, g = null));
      var x = new Hr("action", "action", null, o, c);
      e.push({ event: x, listeners: [{ instance: null, listener: function() {
        if (o.defaultPrevented) {
          if (ya !== 0) {
            var T = g ? Im(c, g) : new FormData(c);
            Yu(n, { pending: true, data: T, method: c.method, action: u }, null, T);
          }
        } else typeof u == "function" && (x.preventDefault(), T = g ? Im(c, g) : new FormData(c), Yu(n, { pending: true, data: T, method: c.method, action: u }, u, T));
      }, currentTarget: c }] });
    }
  }
  for (var Rs = 0; Rs < cu.length; Rs++) {
    var ws = cu[Rs], A2 = ws.toLowerCase(), N2 = ws[0].toUpperCase() + ws.slice(1);
    pn(A2, "on" + N2);
  }
  pn(gp, "onAnimationEnd"), pn(yp, "onAnimationIteration"), pn(bp, "onAnimationStart"), pn("dblclick", "onDoubleClick"), pn("focusin", "onFocus"), pn("focusout", "onBlur"), pn(KS, "onTransitionRun"), pn(XS, "onTransitionStart"), pn($S, "onTransitionCancel"), pn(Sp, "onTransitionEnd"), yo("onMouseEnter", ["mouseout", "mouseover"]), yo("onMouseLeave", ["mouseout", "mouseover"]), yo("onPointerEnter", ["pointerout", "pointerover"]), yo("onPointerLeave", ["pointerout", "pointerover"]), Ia("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ia("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ia("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ia("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ia("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ia("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ql = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), D2 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ql));
  function Pm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var o = e[n], c = o.event;
      o = o.listeners;
      e: {
        var u = void 0;
        if (t) for (var g = o.length - 1; 0 <= g; g--) {
          var x = o[g], T = x.instance, U = x.currentTarget;
          if (x = x.listener, T !== u && c.isPropagationStopped()) break e;
          u = x, c.currentTarget = U;
          try {
            u(c);
          } catch (K) {
            Ir(K);
          }
          c.currentTarget = null, u = T;
        }
        else for (g = 0; g < o.length; g++) {
          if (x = o[g], T = x.instance, U = x.currentTarget, x = x.listener, T !== u && c.isPropagationStopped()) break e;
          u = x, c.currentTarget = U;
          try {
            u(c);
          } catch (K) {
            Ir(K);
          }
          c.currentTarget = null, u = T;
        }
      }
    }
  }
  function Te(e, t) {
    var n = t[Ic];
    n === void 0 && (n = t[Ic] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    n.has(o) || (qm(t, e, 2, false), n.add(o));
  }
  function Ts(e, t, n) {
    var o = 0;
    t && (o |= 4), qm(n, e, o, t);
  }
  var Ri = "_reactListening" + Math.random().toString(36).slice(2);
  function As(e) {
    if (!e[Ri]) {
      e[Ri] = true, kd.forEach(function(n) {
        n !== "selectionchange" && (D2.has(n) || Ts(n, false, e), Ts(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ri] || (t[Ri] = true, Ts("selectionchange", false, t));
    }
  }
  function qm(e, t, n, o) {
    switch (gv(t)) {
      case 2:
        var c = lx;
        break;
      case 8:
        c = rx;
        break;
      default:
        c = Gs;
    }
    n = c.bind(null, t, n, e), c = void 0, !Qc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = true), o ? c !== void 0 ? e.addEventListener(t, n, { capture: true, passive: c }) : e.addEventListener(t, n, true) : c !== void 0 ? e.addEventListener(t, n, { passive: c }) : e.addEventListener(t, n, false);
  }
  function Ns(e, t, n, o, c) {
    var u = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var g = o.tag;
      if (g === 3 || g === 4) {
        var x = o.stateNode.containerInfo;
        if (x === c) break;
        if (g === 4) for (g = o.return; g !== null; ) {
          var T = g.tag;
          if ((T === 3 || T === 4) && g.stateNode.containerInfo === c) return;
          g = g.return;
        }
        for (; x !== null; ) {
          if (g = mo(x), g === null) return;
          if (T = g.tag, T === 5 || T === 6 || T === 26 || T === 27) {
            o = u = g;
            continue e;
          }
          x = x.parentNode;
        }
      }
      o = o.return;
    }
    Xd(function() {
      var U = u, K = Xc(n), Q = [];
      e: {
        var B = xp.get(e);
        if (B !== void 0) {
          var q = Hr, ie = e;
          switch (e) {
            case "keypress":
              if (kr(n) === 0) break e;
            case "keydown":
            case "keyup":
              q = CS;
              break;
            case "focusin":
              ie = "focus", q = Wc;
              break;
            case "focusout":
              ie = "blur", q = Wc;
              break;
            case "beforeblur":
            case "afterblur":
              q = Wc;
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
              q = Zd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = dS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = wS;
              break;
            case gp:
            case yp:
            case bp:
              q = mS;
              break;
            case Sp:
              q = AS;
              break;
            case "scroll":
            case "scrollend":
              q = sS;
              break;
            case "wheel":
              q = DS;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = gS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = Jd;
              break;
            case "toggle":
            case "beforetoggle":
              q = zS;
          }
          var me = (t & 4) !== 0, Pe = !me && (e === "scroll" || e === "scrollend"), j = me ? B !== null ? B + "Capture" : null : B;
          me = [];
          for (var D = U, H; D !== null; ) {
            var $ = D;
            if (H = $.stateNode, $ = $.tag, $ !== 5 && $ !== 26 && $ !== 27 || H === null || j === null || ($ = gl(D, j), $ != null && me.push(Zl(D, $, H))), Pe) break;
            D = D.return;
          }
          0 < me.length && (B = new q(B, ie, null, n, K), Q.push({ event: B, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (B = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", B && n !== Kc && (ie = n.relatedTarget || n.fromElement) && (mo(ie) || ie[ho])) break e;
          if ((q || B) && (B = K.window === K ? K : (B = K.ownerDocument) ? B.defaultView || B.parentWindow : window, q ? (ie = n.relatedTarget || n.toElement, q = U, ie = ie ? mo(ie) : null, ie !== null && (Pe = f(ie), me = ie.tag, ie !== Pe || me !== 5 && me !== 27 && me !== 6) && (ie = null)) : (q = null, ie = U), q !== ie)) {
            if (me = Zd, $ = "onMouseLeave", j = "onMouseEnter", D = "mouse", (e === "pointerout" || e === "pointerover") && (me = Jd, $ = "onPointerLeave", j = "onPointerEnter", D = "pointer"), Pe = q == null ? B : vl(q), H = ie == null ? B : vl(ie), B = new me($, D + "leave", q, n, K), B.target = Pe, B.relatedTarget = H, $ = null, mo(K) === U && (me = new me(j, D + "enter", ie, n, K), me.target = H, me.relatedTarget = Pe, $ = me), Pe = $, q && ie) t: {
              for (me = O2, j = q, D = ie, H = 0, $ = j; $; $ = me($)) H++;
              $ = 0;
              for (var pe = D; pe; pe = me(pe)) $++;
              for (; 0 < H - $; ) j = me(j), H--;
              for (; 0 < $ - H; ) D = me(D), $--;
              for (; H--; ) {
                if (j === D || D !== null && j === D.alternate) {
                  me = j;
                  break t;
                }
                j = me(j), D = me(D);
              }
              me = null;
            }
            else me = null;
            q !== null && Vm(Q, B, q, me, false), ie !== null && Pe !== null && Vm(Q, Pe, ie, me, true);
          }
        }
        e: {
          if (B = U ? vl(U) : window, q = B.nodeName && B.nodeName.toLowerCase(), q === "select" || q === "input" && B.type === "file") var ze = rp;
          else if (op(B)) if (ip) ze = VS;
          else {
            ze = PS;
            var se = IS;
          }
          else q = B.nodeName, !q || q.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? U && Yc(U.elementType) && (ze = rp) : ze = qS;
          if (ze && (ze = ze(e, U))) {
            lp(Q, ze, n, K);
            break e;
          }
          se && se(e, B, U), e === "focusout" && U && B.type === "number" && U.memoizedProps.value != null && Gc(B, "number", B.value);
        }
        switch (se = U ? vl(U) : window, e) {
          case "focusin":
            (op(se) || se.contentEditable === "true") && (Co = se, lu = U, Ml = null);
            break;
          case "focusout":
            Ml = lu = Co = null;
            break;
          case "mousedown":
            ru = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ru = false, mp(Q, n, K);
            break;
          case "selectionchange":
            if (YS) break;
          case "keydown":
          case "keyup":
            mp(Q, n, K);
        }
        var Me;
        if (tu) e: {
          switch (e) {
            case "compositionstart":
              var Ne = "onCompositionStart";
              break e;
            case "compositionend":
              Ne = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ne = "onCompositionUpdate";
              break e;
          }
          Ne = void 0;
        }
        else _o ? np(e, n) && (Ne = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ne = "onCompositionStart");
        Ne && (Wd && n.locale !== "ko" && (_o || Ne !== "onCompositionStart" ? Ne === "onCompositionEnd" && _o && (Me = $d()) : (na = K, Zc = "value" in na ? na.value : na.textContent, _o = true)), se = wi(U, Ne), 0 < se.length && (Ne = new Fd(Ne, e, null, n, K), Q.push({ event: Ne, listeners: se }), Me ? Ne.data = Me : (Me = ap(n), Me !== null && (Ne.data = Me)))), (Me = kS ? LS(e, n) : HS(e, n)) && (Ne = wi(U, "onBeforeInput"), 0 < Ne.length && (se = new Fd("onBeforeInput", "beforeinput", null, n, K), Q.push({ event: se, listeners: Ne }), se.data = Me)), T2(Q, e, U, n, K);
      }
      Pm(Q, t);
    });
  }
  function Zl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function wi(e, t) {
    for (var n = t + "Capture", o = []; e !== null; ) {
      var c = e, u = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || u === null || (c = gl(e, n), c != null && o.unshift(Zl(e, c, u)), c = gl(e, t), c != null && o.push(Zl(e, c, u))), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function O2(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Vm(e, t, n, o, c) {
    for (var u = t._reactName, g = []; n !== null && n !== o; ) {
      var x = n, T = x.alternate, U = x.stateNode;
      if (x = x.tag, T !== null && T === o) break;
      x !== 5 && x !== 26 && x !== 27 || U === null || (T = U, c ? (U = gl(n, u), U != null && g.unshift(Zl(n, U, T))) : c || (U = gl(n, u), U != null && g.push(Zl(n, U, T)))), n = n.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var z2 = /\r\n?/g, j2 = /\u0000|\uFFFD/g;
  function Gm(e) {
    return (typeof e == "string" ? e : "" + e).replace(z2, `
`).replace(j2, "");
  }
  function Ym(e, t) {
    return t = Gm(t), Gm(e) === t;
  }
  function Ie(e, t, n, o, c, u) {
    switch (n) {
      case "children":
        typeof o == "string" ? t === "body" || t === "textarea" && o === "" || So(e, o) : (typeof o == "number" || typeof o == "bigint") && t !== "body" && So(e, "" + o);
        break;
      case "className":
        Dr(e, "class", o);
        break;
      case "tabIndex":
        Dr(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Dr(e, n, o);
        break;
      case "style":
        Yd(e, o, u);
        break;
      case "data":
        if (t !== "object") {
          Dr(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(n);
          break;
        }
        o = zr("" + o), e.setAttribute(n, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof u == "function" && (n === "formAction" ? (t !== "input" && Ie(e, t, "name", c.name, c, null), Ie(e, t, "formEncType", c.formEncType, c, null), Ie(e, t, "formMethod", c.formMethod, c, null), Ie(e, t, "formTarget", c.formTarget, c, null)) : (Ie(e, t, "encType", c.encType, c, null), Ie(e, t, "method", c.method, c, null), Ie(e, t, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(n);
          break;
        }
        o = zr("" + o), e.setAttribute(n, o);
        break;
      case "onClick":
        o != null && (e.onclick = zn);
        break;
      case "onScroll":
        o != null && Te("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Te("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(i(61));
          if (n = o.__html, n != null) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
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
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = zr("" + o), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(n, "" + o) : e.removeAttribute(n);
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
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        o === true ? e.setAttribute(n, "") : o !== false && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(n, o) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(n, o) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(n) : e.setAttribute(n, o);
        break;
      case "popover":
        Te("beforetoggle", e), Te("toggle", e), Nr(e, "popover", o);
        break;
      case "xlinkActuate":
        On(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        On(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        On(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        On(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        On(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        On(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        On(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        On(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        On(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        Nr(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = cS.get(n) || n, Nr(e, n, o));
    }
  }
  function Ds(e, t, n, o, c, u) {
    switch (n) {
      case "style":
        Yd(e, o, u);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(i(61));
          if (n = o.__html, n != null) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof o == "string" ? So(e, o) : (typeof o == "number" || typeof o == "bigint") && So(e, "" + o);
        break;
      case "onScroll":
        o != null && Te("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Te("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = zn);
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
        if (!Ld.hasOwnProperty(n)) e: {
          if (n[0] === "o" && n[1] === "n" && (c = n.endsWith("Capture"), t = n.slice(2, c ? n.length - 7 : void 0), u = e[kt] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, c), typeof o == "function")) {
            typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, o, c);
            break e;
          }
          n in e ? e[n] = o : o === true ? e.setAttribute(n, "") : Nr(e, n, o);
        }
    }
  }
  function St(e, t, n) {
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
        Te("error", e), Te("load", e);
        var o = false, c = false, u;
        for (u in n) if (n.hasOwnProperty(u)) {
          var g = n[u];
          if (g != null) switch (u) {
            case "src":
              o = true;
              break;
            case "srcSet":
              c = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(i(137, t));
            default:
              Ie(e, t, u, g, n, null);
          }
        }
        c && Ie(e, t, "srcSet", n.srcSet, n, null), o && Ie(e, t, "src", n.src, n, null);
        return;
      case "input":
        Te("invalid", e);
        var x = u = g = c = null, T = null, U = null;
        for (o in n) if (n.hasOwnProperty(o)) {
          var K = n[o];
          if (K != null) switch (o) {
            case "name":
              c = K;
              break;
            case "type":
              g = K;
              break;
            case "checked":
              T = K;
              break;
            case "defaultChecked":
              U = K;
              break;
            case "value":
              u = K;
              break;
            case "defaultValue":
              x = K;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (K != null) throw Error(i(137, t));
              break;
            default:
              Ie(e, t, o, K, n, null);
          }
        }
        Pd(e, u, x, T, U, g, c, false);
        return;
      case "select":
        Te("invalid", e), o = g = u = null;
        for (c in n) if (n.hasOwnProperty(c) && (x = n[c], x != null)) switch (c) {
          case "value":
            u = x;
            break;
          case "defaultValue":
            g = x;
            break;
          case "multiple":
            o = x;
          default:
            Ie(e, t, c, x, n, null);
        }
        t = u, n = g, e.multiple = !!o, t != null ? bo(e, !!o, t, false) : n != null && bo(e, !!o, n, true);
        return;
      case "textarea":
        Te("invalid", e), u = c = o = null;
        for (g in n) if (n.hasOwnProperty(g) && (x = n[g], x != null)) switch (g) {
          case "value":
            o = x;
            break;
          case "defaultValue":
            c = x;
            break;
          case "children":
            u = x;
            break;
          case "dangerouslySetInnerHTML":
            if (x != null) throw Error(i(91));
            break;
          default:
            Ie(e, t, g, x, n, null);
        }
        Vd(e, o, c, u);
        return;
      case "option":
        for (T in n) n.hasOwnProperty(T) && (o = n[T], o != null) && (T === "selected" ? e.selected = o && typeof o != "function" && typeof o != "symbol" : Ie(e, t, T, o, n, null));
        return;
      case "dialog":
        Te("beforetoggle", e), Te("toggle", e), Te("cancel", e), Te("close", e);
        break;
      case "iframe":
      case "object":
        Te("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ql.length; o++) Te(Ql[o], e);
        break;
      case "image":
        Te("error", e), Te("load", e);
        break;
      case "details":
        Te("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Te("error", e), Te("load", e);
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
        for (U in n) if (n.hasOwnProperty(U) && (o = n[U], o != null)) switch (U) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(i(137, t));
          default:
            Ie(e, t, U, o, n, null);
        }
        return;
      default:
        if (Yc(t)) {
          for (K in n) n.hasOwnProperty(K) && (o = n[K], o !== void 0 && Ds(e, t, K, o, n, void 0));
          return;
        }
    }
    for (x in n) n.hasOwnProperty(x) && (o = n[x], o != null && Ie(e, t, x, o, n, null));
  }
  function k2(e, t, n, o) {
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
        var c = null, u = null, g = null, x = null, T = null, U = null, K = null;
        for (q in n) {
          var Q = n[q];
          if (n.hasOwnProperty(q) && Q != null) switch (q) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              T = Q;
            default:
              o.hasOwnProperty(q) || Ie(e, t, q, null, o, Q);
          }
        }
        for (var B in o) {
          var q = o[B];
          if (Q = n[B], o.hasOwnProperty(B) && (q != null || Q != null)) switch (B) {
            case "type":
              u = q;
              break;
            case "name":
              c = q;
              break;
            case "checked":
              U = q;
              break;
            case "defaultChecked":
              K = q;
              break;
            case "value":
              g = q;
              break;
            case "defaultValue":
              x = q;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (q != null) throw Error(i(137, t));
              break;
            default:
              q !== Q && Ie(e, t, B, q, o, Q);
          }
        }
        Vc(e, g, x, T, U, K, u, c);
        return;
      case "select":
        q = g = x = B = null;
        for (u in n) if (T = n[u], n.hasOwnProperty(u) && T != null) switch (u) {
          case "value":
            break;
          case "multiple":
            q = T;
          default:
            o.hasOwnProperty(u) || Ie(e, t, u, null, o, T);
        }
        for (c in o) if (u = o[c], T = n[c], o.hasOwnProperty(c) && (u != null || T != null)) switch (c) {
          case "value":
            B = u;
            break;
          case "defaultValue":
            x = u;
            break;
          case "multiple":
            g = u;
          default:
            u !== T && Ie(e, t, c, u, o, T);
        }
        t = x, n = g, o = q, B != null ? bo(e, !!n, B, false) : !!o != !!n && (t != null ? bo(e, !!n, t, true) : bo(e, !!n, n ? [] : "", false));
        return;
      case "textarea":
        q = B = null;
        for (x in n) if (c = n[x], n.hasOwnProperty(x) && c != null && !o.hasOwnProperty(x)) switch (x) {
          case "value":
            break;
          case "children":
            break;
          default:
            Ie(e, t, x, null, o, c);
        }
        for (g in o) if (c = o[g], u = n[g], o.hasOwnProperty(g) && (c != null || u != null)) switch (g) {
          case "value":
            B = c;
            break;
          case "defaultValue":
            q = c;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(i(91));
            break;
          default:
            c !== u && Ie(e, t, g, c, o, u);
        }
        qd(e, B, q);
        return;
      case "option":
        for (var ie in n) B = n[ie], n.hasOwnProperty(ie) && B != null && !o.hasOwnProperty(ie) && (ie === "selected" ? e.selected = false : Ie(e, t, ie, null, o, B));
        for (T in o) B = o[T], q = n[T], o.hasOwnProperty(T) && B !== q && (B != null || q != null) && (T === "selected" ? e.selected = B && typeof B != "function" && typeof B != "symbol" : Ie(e, t, T, B, o, q));
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
        for (var me in n) B = n[me], n.hasOwnProperty(me) && B != null && !o.hasOwnProperty(me) && Ie(e, t, me, null, o, B);
        for (U in o) if (B = o[U], q = n[U], o.hasOwnProperty(U) && B !== q && (B != null || q != null)) switch (U) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (B != null) throw Error(i(137, t));
            break;
          default:
            Ie(e, t, U, B, o, q);
        }
        return;
      default:
        if (Yc(t)) {
          for (var Pe in n) B = n[Pe], n.hasOwnProperty(Pe) && B !== void 0 && !o.hasOwnProperty(Pe) && Ds(e, t, Pe, void 0, o, B);
          for (K in o) B = o[K], q = n[K], !o.hasOwnProperty(K) || B === q || B === void 0 && q === void 0 || Ds(e, t, K, B, o, q);
          return;
        }
    }
    for (var j in n) B = n[j], n.hasOwnProperty(j) && B != null && !o.hasOwnProperty(j) && Ie(e, t, j, null, o, B);
    for (Q in o) B = o[Q], q = n[Q], !o.hasOwnProperty(Q) || B === q || B == null && q == null || Ie(e, t, Q, B, o, q);
  }
  function Km(e) {
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
  function L2() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), o = 0; o < n.length; o++) {
        var c = n[o], u = c.transferSize, g = c.initiatorType, x = c.duration;
        if (u && x && Km(g)) {
          for (g = 0, x = c.responseEnd, o += 1; o < n.length; o++) {
            var T = n[o], U = T.startTime;
            if (U > x) break;
            var K = T.transferSize, Q = T.initiatorType;
            K && Km(Q) && (T = T.responseEnd, g += K * (T < x ? 1 : (x - U) / (T - U)));
          }
          if (--o, t += 8 * (u + g) / (c.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Os = null, zs = null;
  function Ti(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Xm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function $m(e, t) {
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
  function js(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ks = null;
  function H2() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ks ? false : (ks = e, true) : (ks = null, false);
  }
  var Qm = typeof setTimeout == "function" ? setTimeout : void 0, U2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Zm = typeof Promise == "function" ? Promise : void 0, B2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zm < "u" ? function(e) {
    return Zm.resolve(null).then(e).catch(I2);
  } : Qm;
  function I2(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ba(e) {
    return e === "head";
  }
  function Fm(e, t) {
    var n = t, o = 0;
    do {
      var c = n.nextSibling;
      if (e.removeChild(n), c && c.nodeType === 8) if (n = c.data, n === "/$" || n === "/&") {
        if (o === 0) {
          e.removeChild(c), Fo(t);
          return;
        }
        o--;
      } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") o++;
      else if (n === "html") Fl(e.ownerDocument.documentElement);
      else if (n === "head") {
        n = e.ownerDocument.head, Fl(n);
        for (var u = n.firstChild; u; ) {
          var g = u.nextSibling, x = u.nodeName;
          u[ml] || x === "SCRIPT" || x === "STYLE" || x === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = g;
        }
      } else n === "body" && Fl(e.ownerDocument.body);
      n = c;
    } while (n);
    Fo(t);
  }
  function Jm(e, t) {
    var n = e;
    e = 0;
    do {
      var o = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (e === 0) break;
        e--;
      } else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = o;
    } while (n);
  }
  function Ls(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ls(n), Pc(n);
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
  function P2(e, t, n, o) {
    for (; e.nodeType === 1; ) {
      var c = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (o) {
        if (!e[ml]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (u !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (u = e.getAttribute("src"), (u !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (t === "input" && e.type === "hidden") {
        var u = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (e = cn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function q2(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = cn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Wm(e, t) {
    for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = cn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Hs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Us(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function V2(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var o = function() {
        t(), n.removeEventListener("DOMContentLoaded", o);
      };
      n.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function cn(e) {
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
  var Bs = null;
  function ev(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return cn(e.nextSibling);
          t--;
        } else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function tv(e) {
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
  function nv(e, t, n) {
    switch (t = Ti(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(i(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(i(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function Fl(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Pc(e);
  }
  var un = /* @__PURE__ */ new Map(), av = /* @__PURE__ */ new Set();
  function Ai(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Qn = X.d;
  X.d = { f: G2, r: Y2, D: K2, C: X2, L: $2, m: Q2, X: F2, S: Z2, M: J2 };
  function G2() {
    var e = Qn.f(), t = Si();
    return e || t;
  }
  function Y2(e) {
    var t = vo(e);
    t !== null && t.tag === 5 && t.type === "form" ? Sh(t) : Qn.r(e);
  }
  var $o = typeof document > "u" ? null : document;
  function ov(e, t, n) {
    var o = $o;
    if (o && typeof t == "string" && t) {
      var c = en(t);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof n == "string" && (c += '[crossorigin="' + n + '"]'), av.has(c) || (av.add(c), e = { rel: e, crossOrigin: n, href: t }, o.querySelector(c) === null && (t = o.createElement("link"), St(t, "link", e), dt(t), o.head.appendChild(t)));
    }
  }
  function K2(e) {
    Qn.D(e), ov("dns-prefetch", e, null);
  }
  function X2(e, t) {
    Qn.C(e, t), ov("preconnect", e, t);
  }
  function $2(e, t, n) {
    Qn.L(e, t, n);
    var o = $o;
    if (o && e && t) {
      var c = 'link[rel="preload"][as="' + en(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (c += '[imagesrcset="' + en(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (c += '[imagesizes="' + en(n.imageSizes) + '"]')) : c += '[href="' + en(e) + '"]';
      var u = c;
      switch (t) {
        case "style":
          u = Qo(e);
          break;
        case "script":
          u = Zo(e);
      }
      un.has(u) || (e = h({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), un.set(u, e), o.querySelector(c) !== null || t === "style" && o.querySelector(Jl(u)) || t === "script" && o.querySelector(Wl(u)) || (t = o.createElement("link"), St(t, "link", e), dt(t), o.head.appendChild(t)));
    }
  }
  function Q2(e, t) {
    Qn.m(e, t);
    var n = $o;
    if (n && e) {
      var o = t && typeof t.as == "string" ? t.as : "script", c = 'link[rel="modulepreload"][as="' + en(o) + '"][href="' + en(e) + '"]', u = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Zo(e);
      }
      if (!un.has(u) && (e = h({ rel: "modulepreload", href: e }, t), un.set(u, e), n.querySelector(c) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Wl(u))) return;
        }
        o = n.createElement("link"), St(o, "link", e), dt(o), n.head.appendChild(o);
      }
    }
  }
  function Z2(e, t, n) {
    Qn.S(e, t, n);
    var o = $o;
    if (o && e) {
      var c = go(o).hoistableStyles, u = Qo(e);
      t = t || "default";
      var g = c.get(u);
      if (!g) {
        var x = { loading: 0, preload: null };
        if (g = o.querySelector(Jl(u))) x.loading = 5;
        else {
          e = h({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = un.get(u)) && Is(e, n);
          var T = g = o.createElement("link");
          dt(T), St(T, "link", e), T._p = new Promise(function(U, K) {
            T.onload = U, T.onerror = K;
          }), T.addEventListener("load", function() {
            x.loading |= 1;
          }), T.addEventListener("error", function() {
            x.loading |= 2;
          }), x.loading |= 4, Ni(g, t, o);
        }
        g = { type: "stylesheet", instance: g, count: 1, state: x }, c.set(u, g);
      }
    }
  }
  function F2(e, t) {
    Qn.X(e, t);
    var n = $o;
    if (n && e) {
      var o = go(n).hoistableScripts, c = Zo(e), u = o.get(c);
      u || (u = n.querySelector(Wl(c)), u || (e = h({ src: e, async: true }, t), (t = un.get(c)) && Ps(e, t), u = n.createElement("script"), dt(u), St(u, "link", e), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, o.set(c, u));
    }
  }
  function J2(e, t) {
    Qn.M(e, t);
    var n = $o;
    if (n && e) {
      var o = go(n).hoistableScripts, c = Zo(e), u = o.get(c);
      u || (u = n.querySelector(Wl(c)), u || (e = h({ src: e, async: true, type: "module" }, t), (t = un.get(c)) && Ps(e, t), u = n.createElement("script"), dt(u), St(u, "link", e), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, o.set(c, u));
    }
  }
  function lv(e, t, n, o) {
    var c = (c = te.current) ? Ai(c) : null;
    if (!c) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Qo(n.href), n = go(c).hoistableStyles, o = n.get(t), o || (o = { type: "style", instance: null, count: 0, state: null }, n.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Qo(n.href);
          var u = go(c).hoistableStyles, g = u.get(e);
          if (g || (c = c.ownerDocument || c, g = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, u.set(e, g), (u = c.querySelector(Jl(e))) && !u._p && (g.instance = u, g.state.loading = 5), un.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, un.set(e, n), u || W2(c, e, n, g.state))), t && o === null) throw Error(i(528, ""));
          return g;
        }
        if (t && o !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Zo(n), n = go(c).hoistableScripts, o = n.get(t), o || (o = { type: "script", instance: null, count: 0, state: null }, n.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, e));
    }
  }
  function Qo(e) {
    return 'href="' + en(e) + '"';
  }
  function Jl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function rv(e) {
    return h({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function W2(e, t, n, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? o.loading = 1 : (t = e.createElement("link"), o.preload = t, t.addEventListener("load", function() {
      return o.loading |= 1;
    }), t.addEventListener("error", function() {
      return o.loading |= 2;
    }), St(t, "link", n), dt(t), e.head.appendChild(t));
  }
  function Zo(e) {
    return '[src="' + en(e) + '"]';
  }
  function Wl(e) {
    return "script[async]" + e;
  }
  function iv(e, t, n) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var o = e.querySelector('style[data-href~="' + en(n.href) + '"]');
        if (o) return t.instance = o, dt(o), o;
        var c = h({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
        return o = (e.ownerDocument || e).createElement("style"), dt(o), St(o, "style", c), Ni(o, n.precedence, e), t.instance = o;
      case "stylesheet":
        c = Qo(n.href);
        var u = e.querySelector(Jl(c));
        if (u) return t.state.loading |= 4, t.instance = u, dt(u), u;
        o = rv(n), (c = un.get(c)) && Is(o, c), u = (e.ownerDocument || e).createElement("link"), dt(u);
        var g = u;
        return g._p = new Promise(function(x, T) {
          g.onload = x, g.onerror = T;
        }), St(u, "link", o), t.state.loading |= 4, Ni(u, n.precedence, e), t.instance = u;
      case "script":
        return u = Zo(n.src), (c = e.querySelector(Wl(u))) ? (t.instance = c, dt(c), c) : (o = n, (c = un.get(u)) && (o = h({}, n), Ps(o, c)), e = e.ownerDocument || e, c = e.createElement("script"), dt(c), St(c, "link", o), e.head.appendChild(c), t.instance = c);
      case "void":
        return null;
      default:
        throw Error(i(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (o = t.instance, t.state.loading |= 4, Ni(o, n.precedence, e));
    return t.instance;
  }
  function Ni(e, t, n) {
    for (var o = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = o.length ? o[o.length - 1] : null, u = c, g = 0; g < o.length; g++) {
      var x = o[g];
      if (x.dataset.precedence === t) u = x;
      else if (u !== c) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Is(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ps(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Di = null;
  function cv(e, t, n) {
    if (Di === null) {
      var o = /* @__PURE__ */ new Map(), c = Di = /* @__PURE__ */ new Map();
      c.set(n, o);
    } else c = Di, o = c.get(n), o || (o = /* @__PURE__ */ new Map(), c.set(n, o));
    if (o.has(e)) return o;
    for (o.set(e, null), n = n.getElementsByTagName(e), c = 0; c < n.length; c++) {
      var u = n[c];
      if (!(u[ml] || u[vt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var g = u.getAttribute(t) || "";
        g = e + g;
        var x = o.get(g);
        x ? x.push(u) : o.set(g, [u]);
      }
    }
    return o;
  }
  function uv(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
  }
  function ex(e, t, n) {
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
  function sv(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function tx(e, t, n, o) {
    if (n.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !== false) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = Qo(o.href), u = t.querySelector(Jl(c));
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Oi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, dt(u);
          return;
        }
        u = t.ownerDocument || t, o = rv(o), (c = un.get(c)) && Is(o, c), u = u.createElement("link"), dt(u);
        var g = u;
        g._p = new Promise(function(x, T) {
          g.onload = x, g.onerror = T;
        }), St(u, "link", o), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Oi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var qs = 0;
  function nx(e, t) {
    return e.stylesheets && e.count === 0 && ji(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var o = setTimeout(function() {
        if (e.stylesheets && ji(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && qs === 0 && (qs = 62500 * L2());
      var c = setTimeout(function() {
        if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && ji(e, e.stylesheets), e.unsuspend)) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, (e.imgBytes > qs ? 50 : 800) + t);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(o), clearTimeout(c);
      };
    } : null;
  }
  function Oi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ji(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var zi = null;
  function ji(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, zi = /* @__PURE__ */ new Map(), t.forEach(ax, e), zi = null, Oi.call(e));
  }
  function ax(e, t) {
    if (!(t.state.loading & 4)) {
      var n = zi.get(e);
      if (n) var o = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), zi.set(e, n);
        for (var c = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < c.length; u++) {
          var g = c[u];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (n.set(g.dataset.precedence, g), o = g);
        }
        o && n.set(null, o);
      }
      c = t.instance, g = c.getAttribute("data-precedence"), u = n.get(g) || o, u === o && n.set(null, c), n.set(g, c), this.count++, o = Oi.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), u ? u.parentNode.insertBefore(c, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4;
    }
  }
  var er = { $$typeof: k, Provider: null, Consumer: null, _currentValue: W, _currentValue2: W, _threadCount: 0 };
  function ox(e, t, n, o, c, u, g, x, T) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ea(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ea(0), this.hiddenUpdates = ea(null), this.identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = u, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function fv(e, t, n, o, c, u, g, x, T, U, K, Q) {
    return e = new ox(e, t, n, g, T, U, K, Q, x), t = 1, u === true && (t |= 24), u = Kt(3, null, null, t), e.current = u, u.stateNode = e, t = xu(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = { element: o, isDehydrated: n, cache: t }, Mu(u), e;
  }
  function dv(e) {
    return e ? (e = wo, e) : wo;
  }
  function pv(e, t, n, o, c, u) {
    c = dv(c), o.context === null ? o.context = c : o.pendingContext = c, o = ca(t), o.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (o.callback = u), n = ua(e, o, t), n !== null && (Pt(n, e, t), Ol(n, e, t));
  }
  function hv(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Vs(e, t) {
    hv(e, t), (e = e.alternate) && hv(e, t);
  }
  function mv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ga(e, 67108864);
      t !== null && Pt(t, e, 67108864), Vs(e, 67108864);
    }
  }
  function vv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ft();
      t = po(t);
      var n = Ga(e, t);
      n !== null && Pt(n, e, t), Vs(e, t);
    }
  }
  var ki = true;
  function lx(e, t, n, o) {
    var c = z.T;
    z.T = null;
    var u = X.p;
    try {
      X.p = 2, Gs(e, t, n, o);
    } finally {
      X.p = u, z.T = c;
    }
  }
  function rx(e, t, n, o) {
    var c = z.T;
    z.T = null;
    var u = X.p;
    try {
      X.p = 8, Gs(e, t, n, o);
    } finally {
      X.p = u, z.T = c;
    }
  }
  function Gs(e, t, n, o) {
    if (ki) {
      var c = Ys(o);
      if (c === null) Ns(e, t, o, Li, n), yv(e, o);
      else if (cx(c, e, t, n, o)) o.stopPropagation();
      else if (yv(e, o), t & 4 && -1 < ix.indexOf(e)) {
        for (; c !== null; ) {
          var u = vo(c);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var g = En(u.pendingLanes);
                if (g !== 0) {
                  var x = u;
                  for (x.pendingLanes |= 2, x.entangledLanes |= 2; g; ) {
                    var T = 1 << 31 - _t(g);
                    x.entanglements[1] |= T, g &= ~T;
                  }
                  Rn(u), (ke & 6) === 0 && (yi = mt() + 500, $l(0));
                }
              }
              break;
            case 31:
            case 13:
              x = Ga(u, 2), x !== null && Pt(x, u, 2), Si(), Vs(u, 2);
          }
          if (u = Ys(o), u === null && Ns(e, t, o, Li, n), u === c) break;
          c = u;
        }
        c !== null && o.stopPropagation();
      } else Ns(e, t, o, null, n);
    }
  }
  function Ys(e) {
    return e = Xc(e), Ks(e);
  }
  var Li = null;
  function Ks(e) {
    if (Li = null, e = mo(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = v(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Li = e, null;
  }
  function gv(e) {
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
        switch (pl()) {
          case Le:
            return 2;
          case rt:
            return 8;
          case it:
          case Jn:
            return 32;
          case Dn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xs = false, Sa = null, xa = null, Ea = null, tr = /* @__PURE__ */ new Map(), nr = /* @__PURE__ */ new Map(), _a = [], ix = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function yv(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Sa = null;
        break;
      case "dragenter":
      case "dragleave":
        xa = null;
        break;
      case "mouseover":
      case "mouseout":
        Ea = null;
        break;
      case "pointerover":
      case "pointerout":
        tr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        nr.delete(t.pointerId);
    }
  }
  function ar(e, t, n, o, c, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: o, nativeEvent: u, targetContainers: [c] }, t !== null && (t = vo(t), t !== null && mv(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function cx(e, t, n, o, c) {
    switch (t) {
      case "focusin":
        return Sa = ar(Sa, e, t, n, o, c), true;
      case "dragenter":
        return xa = ar(xa, e, t, n, o, c), true;
      case "mouseover":
        return Ea = ar(Ea, e, t, n, o, c), true;
      case "pointerover":
        var u = c.pointerId;
        return tr.set(u, ar(tr.get(u) || null, e, t, n, o, c)), true;
      case "gotpointercapture":
        return u = c.pointerId, nr.set(u, ar(nr.get(u) || null, e, t, n, o, c)), true;
    }
    return false;
  }
  function bv(e) {
    var t = mo(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, zd(e.priority, function() {
              vv(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = v(n), t !== null) {
            e.blockedOn = t, zd(e.priority, function() {
              vv(n);
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
  function Hi(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ys(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var o = new n.constructor(n.type, n);
        Kc = o, n.target.dispatchEvent(o), Kc = null;
      } else return t = vo(n), t !== null && mv(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function Sv(e, t, n) {
    Hi(e) && n.delete(t);
  }
  function ux() {
    Xs = false, Sa !== null && Hi(Sa) && (Sa = null), xa !== null && Hi(xa) && (xa = null), Ea !== null && Hi(Ea) && (Ea = null), tr.forEach(Sv), nr.forEach(Sv);
  }
  function Ui(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Xs || (Xs = true, a.unstable_scheduleCallback(a.unstable_NormalPriority, ux)));
  }
  var Bi = null;
  function xv(e) {
    Bi !== e && (Bi = e, a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
      Bi === e && (Bi = null);
      for (var t = 0; t < e.length; t += 3) {
        var n = e[t], o = e[t + 1], c = e[t + 2];
        if (typeof o != "function") {
          if (Ks(o || n) === null) continue;
          break;
        }
        var u = vo(n);
        u !== null && (e.splice(t, 3), t -= 3, Yu(u, { pending: true, data: c, method: n.method, action: o }, o, c));
      }
    }));
  }
  function Fo(e) {
    function t(T) {
      return Ui(T, e);
    }
    Sa !== null && Ui(Sa, e), xa !== null && Ui(xa, e), Ea !== null && Ui(Ea, e), tr.forEach(t), nr.forEach(t);
    for (var n = 0; n < _a.length; n++) {
      var o = _a[n];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < _a.length && (n = _a[0], n.blockedOn === null); ) bv(n), n.blockedOn === null && _a.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (o = 0; o < n.length; o += 3) {
      var c = n[o], u = n[o + 1], g = c[kt] || null;
      if (typeof u == "function") g || xv(n);
      else if (g) {
        var x = null;
        if (u && u.hasAttribute("formAction")) {
          if (c = u, g = u[kt] || null) x = g.formAction;
          else if (Ks(c) !== null) continue;
        } else x = g.action;
        typeof x == "function" ? n[o + 1] = x : (n.splice(o, 3), o -= 3), xv(n);
      }
    }
  }
  function Ev() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({ handler: function() {
        return new Promise(function(g) {
          return c = g;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      c !== null && (c(), c = null), o || setTimeout(n, 20);
    }
    function n() {
      if (!o && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, { state: u.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var o = false, c = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        o = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), c !== null && (c(), c = null);
      };
    }
  }
  function $s(e) {
    this._internalRoot = e;
  }
  Ii.prototype.render = $s.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    var n = t.current, o = Ft();
    pv(n, o, e, t, null, null);
  }, Ii.prototype.unmount = $s.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      pv(e.current, 2, null, e, null, null), Si(), t[ho] = null;
    }
  };
  function Ii(e) {
    this._internalRoot = e;
  }
  Ii.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Bc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < _a.length && t !== 0 && t < _a[n].priority; n++) ;
      _a.splice(n, 0, e), n === 0 && bv(e);
    }
  };
  var _v = r.version;
  if (_v !== "19.2.4") throw Error(i(527, _v, "19.2.4"));
  X.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = m(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var sx = { bundleType: 0, version: "19.2.4", rendererPackageName: "react-dom", currentDispatcherRef: z, reconcilerVersion: "19.2.4" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pi.isDisabled && Pi.supportsFiber) try {
      Ha = Pi.inject(sx), Tt = Pi;
    } catch {
    }
  }
  return lr.createRoot = function(e, t) {
    if (!s(e)) throw Error(i(299));
    var n = false, o = "", c = Nh, u = Dh, g = Oh;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError)), t = fv(e, 1, false, null, null, n, o, null, c, u, g, Ev), e[ho] = t.current, As(e), new $s(t);
  }, lr.hydrateRoot = function(e, t, n) {
    if (!s(e)) throw Error(i(299));
    var o = false, c = "", u = Nh, g = Dh, x = Oh, T = null;
    return n != null && (n.unstable_strictMode === true && (o = true), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (g = n.onCaughtError), n.onRecoverableError !== void 0 && (x = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), t = fv(e, 1, true, t, n ?? null, o, c, T, u, g, x, Ev), t.context = dv(null), n = t.current, o = Ft(), o = po(o), c = ca(o), c.callback = null, ua(n, c, o), n = o, t.current.lanes = n, $e(t, n), Rn(t), e[ho] = t.current, As(e), new Ii(t);
  }, lr.version = "19.2.4", lr;
}
var Iv;
function $x() {
  if (Iv) return Fs.exports;
  Iv = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
    } catch (r) {
      console.error(r);
    }
  }
  return a(), Fs.exports = Xx(), Fs.exports;
}
var Qx = $x();
const uN = Kf(Qx), Cf = /* @__PURE__ */ new WeakMap(), Zx = /* @__PURE__ */ new WeakMap(), Wi = { current: [] };
let nf = false, pr = 0;
const ur = /* @__PURE__ */ new Set(), qi = /* @__PURE__ */ new Map();
function R0(a) {
  for (const r of a) {
    if (Wi.current.includes(r)) continue;
    Wi.current.push(r), r.recompute();
    const l = Zx.get(r);
    if (l) for (const i of l) {
      const s = Cf.get(i);
      (s == null ? void 0 : s.length) && R0(s);
    }
  }
}
function Fx(a) {
  const r = { prevVal: a.prevState, currentVal: a.state };
  for (const l of a.listeners) l(r);
}
function Jx(a) {
  const r = { prevVal: a.prevState, currentVal: a.state };
  for (const l of a.listeners) l(r);
}
function Wx(a) {
  if (pr > 0 && !qi.has(a) && qi.set(a, a.prevState), ur.add(a), !(pr > 0) && !nf) try {
    for (nf = true; ur.size > 0; ) {
      const r = Array.from(ur);
      ur.clear();
      for (const l of r) {
        const i = qi.get(l) ?? l.prevState;
        l.prevState = i, Fx(l);
      }
      for (const l of r) {
        const i = Cf.get(l);
        i && (Wi.current.push(l), R0(i));
      }
      for (const l of r) {
        const i = Cf.get(l);
        if (i) for (const s of i) Jx(s);
      }
    }
  } finally {
    nf = false, Wi.current = [], qi.clear();
  }
}
function sN(a) {
  pr++;
  try {
    a();
  } finally {
    if (pr--, pr === 0) {
      const r = ur.values().next().value;
      r && Wx(r);
    }
  }
}
var d = gr();
const J = Kf(d), sc = Ix({ __proto__: null, default: J }, [d]), eE = "use", Pv = sc[eE], sr = typeof window < "u" ? d.useLayoutEffect : d.useEffect;
function af(a) {
  const r = d.useRef({ value: a, prev: null }), l = r.current.value;
  return a !== l && (r.current = { value: a, prev: l }), r.current.prev;
}
function tE(a, r, l = {}, i = {}) {
  d.useEffect(() => {
    if (!a.current || i.disabled || typeof IntersectionObserver != "function") return;
    const s = new IntersectionObserver(([f]) => {
      r(f);
    }, l);
    return s.observe(a.current), () => {
      s.disconnect();
    };
  }, [r, l, i.disabled, a]);
}
function nE(a) {
  const r = d.useRef(null);
  return d.useImperativeHandle(a, () => r.current, []), r;
}
function Qf(a) {
  const r = a.errorComponent ?? Zf;
  return S.jsx(aE, { getResetKey: a.getResetKey, onCatch: a.onCatch, children: ({ error: l, reset: i }) => l ? d.createElement(r, { error: l, reset: i }) : a.children });
}
class aE extends d.Component {
  constructor() {
    super(...arguments), this.state = { error: null };
  }
  static getDerivedStateFromProps(r) {
    return { resetKey: r.getResetKey() };
  }
  static getDerivedStateFromError(r) {
    return { error: r };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(r, l) {
    l.error && l.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(r, l) {
    this.props.onCatch && this.props.onCatch(r, l);
  }
  render() {
    return this.props.children({ error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error, reset: () => {
      this.reset();
    } });
  }
}
function Zf({ error: a }) {
  const [r, l] = d.useState(false);
  return S.jsxs("div", { style: { padding: ".5rem", maxWidth: "100%" }, children: [S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [S.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }), S.jsx("button", { style: { appearance: "none", fontSize: ".6em", border: "1px solid currentColor", padding: ".1rem .2rem", fontWeight: "bold", borderRadius: ".25rem" }, onClick: () => l((i) => !i), children: r ? "Hide Error" : "Show Error" })] }), S.jsx("div", { style: { height: ".25rem" } }), r ? S.jsx("div", { children: S.jsx("pre", { style: { fontSize: ".7em", border: "1px solid red", borderRadius: ".25rem", padding: ".3rem", color: "red", overflow: "auto" }, children: a.message ? S.jsx("code", { children: a.message }) : null }) }) : null] });
}
function oE({ children: a, fallback: r = null }) {
  return w0() ? S.jsx(J.Fragment, { children: a }) : S.jsx(J.Fragment, { children: r });
}
function w0() {
  return J.useSyncExternalStore(lE, () => true, () => false);
}
function lE() {
  return () => {
  };
}
var of = { exports: {} }, lf = {}, rf = { exports: {} }, cf = {};
var qv;
function rE() {
  if (qv) return cf;
  qv = 1;
  var a = gr();
  function r(h, E) {
    return h === E && (h !== 0 || 1 / h === 1 / E) || h !== h && E !== E;
  }
  var l = typeof Object.is == "function" ? Object.is : r, i = a.useState, s = a.useEffect, f = a.useLayoutEffect, p = a.useDebugValue;
  function v(h, E) {
    var w = E(), M = i({ inst: { value: w, getSnapshot: E } }), _ = M[0].inst, C = M[1];
    return f(function() {
      _.value = w, _.getSnapshot = E, y(_) && C({ inst: _ });
    }, [h, w, E]), s(function() {
      return y(_) && C({ inst: _ }), h(function() {
        y(_) && C({ inst: _ });
      });
    }, [h]), p(w), w;
  }
  function y(h) {
    var E = h.getSnapshot;
    h = h.value;
    try {
      var w = E();
      return !l(h, w);
    } catch {
      return true;
    }
  }
  function m(h, E) {
    return E();
  }
  var b = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : v;
  return cf.useSyncExternalStore = a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : b, cf;
}
var Vv;
function iE() {
  return Vv || (Vv = 1, rf.exports = rE()), rf.exports;
}
var Gv;
function cE() {
  if (Gv) return lf;
  Gv = 1;
  var a = gr(), r = iE();
  function l(m, b) {
    return m === b && (m !== 0 || 1 / m === 1 / b) || m !== m && b !== b;
  }
  var i = typeof Object.is == "function" ? Object.is : l, s = r.useSyncExternalStore, f = a.useRef, p = a.useEffect, v = a.useMemo, y = a.useDebugValue;
  return lf.useSyncExternalStoreWithSelector = function(m, b, h, E, w) {
    var M = f(null);
    if (M.current === null) {
      var _ = { hasValue: false, value: null };
      M.current = _;
    } else _ = M.current;
    M = v(function() {
      function R(F) {
        if (!O) {
          if (O = true, k = F, F = E(F), w !== void 0 && _.hasValue) {
            var V = _.value;
            if (w(V, F)) return I = V;
          }
          return I = F;
        }
        if (V = I, i(k, F)) return V;
        var oe = E(F);
        return w !== void 0 && w(V, oe) ? (k = F, V) : (k = F, I = oe);
      }
      var O = false, k, I, Z = h === void 0 ? null : h;
      return [function() {
        return R(b());
      }, Z === null ? void 0 : function() {
        return R(Z());
      }];
    }, [b, h, E, w]);
    var C = s(m, M[0], M[1]);
    return p(function() {
      _.hasValue = true, _.value = C;
    }, [C]), y(C), C;
  }, lf;
}
var Yv;
function uE() {
  return Yv || (Yv = 1, of.exports = cE()), of.exports;
}
var sE = uE();
function fE(a, r = (i) => i, l = {}) {
  const i = l.equal ?? dE;
  return sE.useSyncExternalStoreWithSelector(a.subscribe, () => a.state, () => a.state, r, i);
}
function dE(a, r) {
  if (Object.is(a, r)) return true;
  if (typeof a != "object" || a === null || typeof r != "object" || r === null) return false;
  if (a instanceof Map && r instanceof Map) {
    if (a.size !== r.size) return false;
    for (const [i, s] of a) if (!r.has(i) || !Object.is(s, r.get(i))) return false;
    return true;
  }
  if (a instanceof Set && r instanceof Set) {
    if (a.size !== r.size) return false;
    for (const i of a) if (!r.has(i)) return false;
    return true;
  }
  if (a instanceof Date && r instanceof Date) return a.getTime() === r.getTime();
  const l = Kv(a);
  if (l.length !== Kv(r).length) return false;
  for (let i = 0; i < l.length; i++) if (!Object.prototype.hasOwnProperty.call(r, l[i]) || !Object.is(a[l[i]], r[l[i]])) return false;
  return true;
}
function Kv(a) {
  return Object.keys(a).concat(Object.getOwnPropertySymbols(a));
}
const uf = d.createContext(null);
function T0() {
  return typeof document > "u" ? uf : window.__TSR_ROUTER_CONTEXT__ ? window.__TSR_ROUTER_CONTEXT__ : (window.__TSR_ROUTER_CONTEXT__ = uf, uf);
}
function Rt(a) {
  const r = d.useContext(T0());
  return $f(!(((a == null ? void 0 : a.warn) ?? true) && !r)), r;
}
function ht(a) {
  const r = Rt({ warn: (a == null ? void 0 : a.router) === void 0 }), l = (a == null ? void 0 : a.router) || r, i = d.useRef(void 0);
  return fE(l.__store, (s) => {
    if (a == null ? void 0 : a.select) {
      if (a.structuralSharing ?? l.options.defaultStructuralSharing) {
        const f = dx(i.current, a.select(s));
        return i.current = f, f;
      }
      return a.select(s);
    }
    return s;
  });
}
const fc = d.createContext(void 0), pE = d.createContext(void 0);
function Tn(a) {
  const r = d.useContext(a.from ? pE : fc);
  return ht({ select: (i) => {
    const s = i.matches.find((f) => a.from ? a.from === f.routeId : f.id === r);
    if (hr(!((a.shouldThrow ?? true) && !s), `Could not find ${a.from ? `an active match from "${a.from}"` : "a nearest match!"}`), s !== void 0) return a.select ? a.select(s) : s;
  }, structuralSharing: a.structuralSharing });
}
function Ff(a) {
  return Tn({ from: a.from, strict: a.strict, structuralSharing: a.structuralSharing, select: (r) => a.select ? a.select(r.loaderData) : r.loaderData });
}
function Jf(a) {
  const { select: r, ...l } = a;
  return Tn({ ...l, select: (i) => r ? r(i.loaderDeps) : i.loaderDeps });
}
function Wf(a) {
  return Tn({ from: a.from, shouldThrow: a.shouldThrow, structuralSharing: a.structuralSharing, strict: a.strict, select: (r) => {
    const l = a.strict === false ? r.params : r._strictParams;
    return a.select ? a.select(l) : l;
  } });
}
function ed(a) {
  return Tn({ from: a.from, strict: a.strict, shouldThrow: a.shouldThrow, structuralSharing: a.structuralSharing, select: (r) => a.select ? a.select(r.search) : r.search });
}
function dc(a) {
  const r = Rt();
  return d.useCallback((l) => r.navigate({ ...l, from: l.from ?? (a == null ? void 0 : a.from) }), [a == null ? void 0 : a.from, r]);
}
function fN(a) {
  const r = Rt(), l = dc(), i = d.useRef(null);
  return sr(() => {
    i.current !== a && (l(a), i.current = a);
  }, [r, a, l]), null;
}
var il = M0();
const A0 = Kf(il);
function hE(a, r) {
  const l = Rt(), i = nE(r), { activeProps: s, inactiveProps: f, activeOptions: p, to: v, preload: y, preloadDelay: m, hashScrollIntoView: b, replace: h, startTransition: E, resetScroll: w, viewTransition: M, children: _, target: C, disabled: R, style: O, className: k, onClick: I, onFocus: Z, onMouseEnter: F, onMouseLeave: V, onTouchStart: oe, ignoreBlocker: ge, params: ve, search: ue, hash: de, state: he, mask: be, reloadDocument: ye, unsafeRelative: z, from: X, _fromLocation: W, ...ee } = a, re = w0(), A = ht({ select: (Le) => Le.location.search, structuralSharing: true }), N = a.from, L = d.useMemo(() => ({ ...a, from: N }), [l, A, N, a._fromLocation, a.hash, a.to, a.search, a.params, a.state, a.mask, a.unsafeRelative]), P = d.useMemo(() => l.buildLocation({ ...L }), [l, L]), G = P.maskedLocation ? P.maskedLocation.publicHref : P.publicHref, te = P.maskedLocation ? P.maskedLocation.external : P.external, Y = d.useMemo(() => SE(G, te, l.history, R), [R, te, G, l.history]), ae = d.useMemo(() => {
    if (Y == null ? void 0 : Y.external) return Cv(Y.href) ? void 0 : Y.href;
    if (!xE(v) && !(typeof v != "string" || v.indexOf(":") === -1)) try {
      return new URL(v), Cv(v) ? void 0 : v;
    } catch {
    }
  }, [v, Y]), ce = ht({ select: (Le) => {
    if (ae) return false;
    if (p == null ? void 0 : p.exact) {
      if (!hx(Le.location.pathname, P.pathname, l.basepath)) return false;
    } else {
      const rt = Rv(Le.location.pathname, l.basepath), it = Rv(P.pathname, l.basepath);
      if (!(rt.startsWith(it) && (rt.length === it.length || rt[it.length] === "/"))) return false;
    }
    return ((p == null ? void 0 : p.includeSearch) ?? true) && !mx(Le.location.search, P.search, { partial: !(p == null ? void 0 : p.exact), ignoreUndefined: !(p == null ? void 0 : p.explicitUndefined) }) ? false : (p == null ? void 0 : p.includeHash) ? re && Le.location.hash === P.hash : true;
  } }), Se = ce ? Mv(s, {}) ?? mE : sf, Re = ce ? sf : Mv(f, {}) ?? sf, Oe = [k, Se.className, Re.className].filter(Boolean).join(" "), tt = (O || Se.style || Re.style) && { ...O, ...Se.style, ...Re.style }, [Fe, Jt] = d.useState(false), Gt = d.useRef(false), ut = a.reloadDocument || ae ? false : y ?? l.options.defaultPreload, Nn = m ?? l.options.defaultPreloadDelay ?? 0, Je = d.useCallback(() => {
    l.preloadRoute({ ...L }).catch((Le) => {
      console.warn(Le), console.warn(px);
    });
  }, [l, L]), ka = d.useCallback((Le) => {
    (Le == null ? void 0 : Le.isIntersecting) && Je();
  }, [Je]);
  tE(i, ka, bE, { disabled: !!R || ut !== "viewport" }), d.useEffect(() => {
    Gt.current || !R && ut === "render" && (Je(), Gt.current = true);
  }, [R, Je, ut]);
  const La = (Le) => {
    const rt = Le.currentTarget.getAttribute("target"), it = C !== void 0 ? C : rt;
    if (!R && !EE(Le) && !Le.defaultPrevented && (!it || it === "_self") && Le.button === 0) {
      Le.preventDefault(), il.flushSync(() => {
        Jt(true);
      });
      const Jn = l.subscribe("onResolved", () => {
        Jn(), Jt(false);
      });
      l.navigate({ ...L, replace: h, resetScroll: w, hashScrollIntoView: b, startTransition: E, viewTransition: M, ignoreBlocker: ge });
    }
  };
  if (ae) return { ...ee, ref: i, href: ae, ..._ && { children: _ }, ...C && { target: C }, ...R && { disabled: R }, ...O && { style: O }, ...k && { className: k }, ...I && { onClick: I }, ...Z && { onFocus: Z }, ...F && { onMouseEnter: F }, ...V && { onMouseLeave: V }, ...oe && { onTouchStart: oe } };
  const st = (Le) => {
    R || ut && Je();
  }, Sn = st, mt = (Le) => {
    if (!(R || !ut)) if (!Nn) Je();
    else {
      const rt = Le.target;
      if (rr.has(rt)) return;
      const it = setTimeout(() => {
        rr.delete(rt), Je();
      }, Nn);
      rr.set(rt, it);
    }
  }, pl = (Le) => {
    if (R || !ut || !Nn) return;
    const rt = Le.target, it = rr.get(rt);
    it && (clearTimeout(it), rr.delete(rt));
  };
  return { ...ee, ...Se, ...Re, href: Y == null ? void 0 : Y.href, ref: i, onClick: ir([I, La]), onFocus: ir([Z, st]), onMouseEnter: ir([F, mt]), onMouseLeave: ir([V, pl]), onTouchStart: ir([oe, Sn]), disabled: !!R, target: C, ...tt && { style: tt }, ...Oe && { className: Oe }, ...R && vE, ...ce && gE, ...re && Fe && yE };
}
const sf = {}, mE = { className: "active" }, vE = { role: "link", "aria-disabled": true }, gE = { "data-status": "active", "aria-current": "page" }, yE = { "data-transitioning": "transitioning" }, rr = /* @__PURE__ */ new WeakMap(), bE = { rootMargin: "100px" }, ir = (a) => (r) => {
  for (const l of a) if (l) {
    if (r.defaultPrevented) return;
    l(r);
  }
};
function SE(a, r, l, i) {
  if (!i) return r ? { href: a, external: true } : { href: l.createHref(a) || "/", external: false };
}
function xE(a) {
  if (typeof a != "string") return false;
  const r = a.charCodeAt(0);
  return r === 47 ? a.charCodeAt(1) !== 47 : r === 46;
}
const N0 = d.forwardRef((a, r) => {
  const { _asChild: l, ...i } = a, { type: s, ...f } = hE(i, r), p = typeof i.children == "function" ? i.children({ isActive: f["data-status"] === "active" }) : i.children;
  if (!l) {
    const { disabled: v, ...y } = f;
    return d.createElement("a", y, p);
  }
  return d.createElement(l, f, p);
});
function EE(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
class _E extends gx {
  constructor(r) {
    super(r), this.useMatch = (l) => Tn({ select: l == null ? void 0 : l.select, from: this.id, structuralSharing: l == null ? void 0 : l.structuralSharing }), this.useRouteContext = (l) => Tn({ ...l, from: this.id, select: (i) => (l == null ? void 0 : l.select) ? l.select(i.context) : i.context }), this.useSearch = (l) => ed({ select: l == null ? void 0 : l.select, structuralSharing: l == null ? void 0 : l.structuralSharing, from: this.id }), this.useParams = (l) => Wf({ select: l == null ? void 0 : l.select, structuralSharing: l == null ? void 0 : l.structuralSharing, from: this.id }), this.useLoaderDeps = (l) => Jf({ ...l, from: this.id }), this.useLoaderData = (l) => Ff({ ...l, from: this.id }), this.useNavigate = () => dc({ from: this.fullPath }), this.Link = J.forwardRef((l, i) => S.jsx(N0, { ref: i, from: this.fullPath, ...l })), this.$$typeof = /* @__PURE__ */ Symbol.for("react.memo");
  }
}
function CE(a) {
  return new _E(a);
}
class ME extends vx {
  constructor(r) {
    super(r), this.useMatch = (l) => Tn({ select: l == null ? void 0 : l.select, from: this.id, structuralSharing: l == null ? void 0 : l.structuralSharing }), this.useRouteContext = (l) => Tn({ ...l, from: this.id, select: (i) => (l == null ? void 0 : l.select) ? l.select(i.context) : i.context }), this.useSearch = (l) => ed({ select: l == null ? void 0 : l.select, structuralSharing: l == null ? void 0 : l.structuralSharing, from: this.id }), this.useParams = (l) => Wf({ select: l == null ? void 0 : l.select, structuralSharing: l == null ? void 0 : l.structuralSharing, from: this.id }), this.useLoaderDeps = (l) => Jf({ ...l, from: this.id }), this.useLoaderData = (l) => Ff({ ...l, from: this.id }), this.useNavigate = () => dc({ from: this.fullPath }), this.Link = J.forwardRef((l, i) => S.jsx(N0, { ref: i, from: this.fullPath, ...l })), this.$$typeof = /* @__PURE__ */ Symbol.for("react.memo");
  }
}
function dN(a) {
  return new ME(a);
}
function Xv(a) {
  return typeof a == "object" ? new $v(a, { silent: true }).createRoute(a) : new $v(a, { silent: true }).createRoute;
}
class $v {
  constructor(r, l) {
    this.path = r, this.createRoute = (i) => {
      $f(this.silent);
      const s = CE(i);
      return s.isRoot = false, s;
    }, this.silent = l == null ? void 0 : l.silent;
  }
}
class Qv {
  constructor(r) {
    this.useMatch = (l) => Tn({ select: l == null ? void 0 : l.select, from: this.options.id, structuralSharing: l == null ? void 0 : l.structuralSharing }), this.useRouteContext = (l) => Tn({ from: this.options.id, select: (i) => (l == null ? void 0 : l.select) ? l.select(i.context) : i.context }), this.useSearch = (l) => ed({ select: l == null ? void 0 : l.select, structuralSharing: l == null ? void 0 : l.structuralSharing, from: this.options.id }), this.useParams = (l) => Wf({ select: l == null ? void 0 : l.select, structuralSharing: l == null ? void 0 : l.structuralSharing, from: this.options.id }), this.useLoaderDeps = (l) => Jf({ ...l, from: this.options.id }), this.useLoaderData = (l) => Ff({ ...l, from: this.options.id }), this.useNavigate = () => {
      const l = Rt();
      return dc({ from: l.routesById[this.options.id].fullPath });
    }, this.options = r, this.$$typeof = /* @__PURE__ */ Symbol.for("react.memo");
  }
}
function Zv(a) {
  return typeof a == "object" ? new Qv(a) : (r) => new Qv({ id: a, ...r });
}
function pN(a, r) {
  let l, i, s, f;
  const p = () => (l || (l = a().then((y) => {
    l = void 0, i = y[r];
  }).catch((y) => {
    if (s = y, yx(s) && s instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
      const m = `tanstack_router_reload:${s.message}`;
      sessionStorage.getItem(m) || (sessionStorage.setItem(m, "1"), f = true);
    }
  })), l), v = function(m) {
    if (f) throw window.location.reload(), new Promise(() => {
    });
    if (s) throw s;
    if (!i) if (Pv) Pv(p());
    else throw p();
    return d.createElement(i, m);
  };
  return v.preload = p, v;
}
function RE() {
  const a = Rt(), r = d.useRef({ router: a, mounted: false }), [l, i] = d.useState(false), { hasPendingMatches: s, isLoading: f } = ht({ select: (h) => ({ isLoading: h.isLoading, hasPendingMatches: h.matches.some((E) => E.status === "pending") }), structuralSharing: true }), p = af(f), v = f || l || s, y = af(v), m = f || s, b = af(m);
  return a.startTransition = (h) => {
    i(true), d.startTransition(() => {
      h(), i(false);
    });
  }, d.useEffect(() => {
    const h = a.history.subscribe(a.load), E = a.buildLocation({ to: a.latestLocation.pathname, search: true, params: true, hash: true, state: true, _includeValidateSearch: true });
    return wv(a.latestLocation.publicHref) !== wv(E.publicHref) && a.commitLocation({ ...E, replace: true }), () => {
      h();
    };
  }, [a, a.history]), sr(() => {
    if (typeof window < "u" && a.ssr || r.current.router === a && r.current.mounted) return;
    r.current = { router: a, mounted: true }, (async () => {
      try {
        await a.load();
      } catch (E) {
        console.error(E);
      }
    })();
  }, [a]), sr(() => {
    p && !f && a.emit({ type: "onLoad", ...Xi(a.state) });
  }, [p, a, f]), sr(() => {
    b && !m && a.emit({ type: "onBeforeRouteMount", ...Xi(a.state) });
  }, [m, b, a]), sr(() => {
    if (y && !v) {
      const h = Xi(a.state);
      a.emit({ type: "onResolved", ...h }), a.__store.setState((E) => ({ ...E, status: "idle", resolvedLocation: E.location })), h.hrefChanged && bx(a);
    }
  }, [v, y, a]), null;
}
function wE(a) {
  const r = ht({ select: (l) => `not-found-${l.location.pathname}-${l.status}` });
  return S.jsx(Qf, { getResetKey: () => r, onCatch: (l, i) => {
    var _a;
    if (Fi(l)) (_a = a.onCatch) == null ? void 0 : _a.call(a, l, i);
    else throw l;
  }, errorComponent: ({ error: l }) => {
    var _a;
    if (Fi(l)) return (_a = a.fallback) == null ? void 0 : _a.call(a, l);
    throw l;
  }, children: a.children });
}
function TE() {
  return S.jsx("p", { children: "Not Found" });
}
function el(a) {
  return S.jsx(S.Fragment, { children: a.children });
}
function D0(a, r, l) {
  return r.options.notFoundComponent ? S.jsx(r.options.notFoundComponent, { ...l }) : a.options.defaultNotFoundComponent ? S.jsx(a.options.defaultNotFoundComponent, { ...l }) : S.jsx(TE, {});
}
function AE() {
  return Rt().isScrollRestoring, null;
}
const O0 = d.memo(function({ matchId: r }) {
  var _a, _b2;
  const l = Rt(), i = ht({ select: (_) => {
    var _a2;
    const C = _.matches.findIndex((O) => O.id === r), R = _.matches[C];
    return hr(R), { routeId: R.routeId, ssr: R.ssr, _displayPending: R._displayPending, resetKey: _.loadedAt, parentRouteId: (_a2 = _.matches[C - 1]) == null ? void 0 : _a2.routeId };
  }, structuralSharing: true }), s = l.routesById[i.routeId], f = s.options.pendingComponent ?? l.options.defaultPendingComponent, p = f ? S.jsx(f, {}) : null, v = s.options.errorComponent ?? l.options.defaultErrorComponent, y = s.options.onCatch ?? l.options.defaultOnCatch, m = s.isRoot ? s.options.notFoundComponent ?? ((_a = l.options.notFoundRoute) == null ? void 0 : _a.options.component) : s.options.notFoundComponent, b = i.ssr === false || i.ssr === "data-only", h = (!s.isRoot || s.options.wrapInSuspense || b) && (s.options.wrapInSuspense ?? f ?? (((_b2 = s.options.errorComponent) == null ? void 0 : _b2.preload) || b)) ? d.Suspense : el, E = v ? Qf : el, w = m ? wE : el, M = s.isRoot ? s.options.shellComponent ?? el : el;
  return S.jsxs(M, { children: [S.jsx(fc.Provider, { value: r, children: S.jsx(h, { fallback: p, children: S.jsx(E, { getResetKey: () => i.resetKey, errorComponent: v || Zf, onCatch: (_, C) => {
    if (Fi(_)) throw _;
    y == null ? void 0 : y(_, C);
  }, children: S.jsx(w, { fallback: (_) => {
    if (!m || _.routeId && _.routeId !== i.routeId || !_.routeId && !s.isRoot) throw _;
    return d.createElement(m, _);
  }, children: b || i._displayPending ? S.jsx(oE, { fallback: p, children: S.jsx(Fv, { matchId: r }) }) : S.jsx(Fv, { matchId: r }) }) }) }) }), i.parentRouteId === Xf && l.options.scrollRestoration ? S.jsxs(S.Fragment, { children: [S.jsx(NE, {}), S.jsx(AE, {})] }) : null] });
});
function NE() {
  const a = Rt(), r = d.useRef(void 0);
  return S.jsx("script", { suppressHydrationWarning: true, ref: (l) => {
    l && (r.current === void 0 || r.current.href !== a.latestLocation.href) && (a.emit({ type: "onRendered", ...Xi(a.state) }), r.current = a.latestLocation);
  } }, a.latestLocation.state.__TSR_key);
}
const Fv = d.memo(function({ matchId: r }) {
  var _a, _b2, _c2, _d2;
  const l = Rt(), { match: i, key: s, routeId: f } = ht({ select: (y) => {
    var _a2;
    const m = y.matches.find((M) => M.id === r), b = m.routeId, E = (_a2 = l.routesById[b].options.remountDeps ?? l.options.defaultRemountDeps) == null ? void 0 : _a2({ routeId: b, loaderDeps: m.loaderDeps, params: m._strictParams, search: m._strictSearch });
    return { key: E ? JSON.stringify(E) : void 0, routeId: b, match: { id: m.id, status: m.status, error: m.error, invalid: m.invalid, _forcePending: m._forcePending, _displayPending: m._displayPending } };
  }, structuralSharing: true }), p = l.routesById[f], v = d.useMemo(() => {
    const y = p.options.component ?? l.options.defaultComponent;
    return y ? S.jsx(y, {}, s) : S.jsx(DE, {});
  }, [s, p.options.component, l.options.defaultComponent]);
  if (i._displayPending) throw (_a = l.getMatch(i.id)) == null ? void 0 : _a._nonReactive.displayPendingPromise;
  if (i._forcePending) throw (_b2 = l.getMatch(i.id)) == null ? void 0 : _b2._nonReactive.minPendingPromise;
  if (i.status === "pending") {
    const y = p.options.pendingMinMs ?? l.options.defaultPendingMinMs;
    if (y) {
      const m = l.getMatch(i.id);
      if (m && !m._nonReactive.minPendingPromise) {
        const b = Sx();
        m._nonReactive.minPendingPromise = b, setTimeout(() => {
          b.resolve(), m._nonReactive.minPendingPromise = void 0;
        }, y);
      }
    }
    throw (_c2 = l.getMatch(i.id)) == null ? void 0 : _c2._nonReactive.loadPromise;
  }
  if (i.status === "notFound") return hr(Fi(i.error)), D0(l, p, i.error);
  if (i.status === "redirected") throw hr(xx(i.error)), (_d2 = l.getMatch(i.id)) == null ? void 0 : _d2._nonReactive.loadPromise;
  if (i.status === "error") throw i.error;
  return v;
}), DE = d.memo(function() {
  const r = Rt(), l = d.useContext(fc), i = ht({ select: (m) => {
    var _a;
    return (_a = m.matches.find((b) => b.id === l)) == null ? void 0 : _a.routeId;
  } }), s = r.routesById[i], f = ht({ select: (m) => {
    const h = m.matches.find((E) => E.id === l);
    return hr(h), h.globalNotFound;
  } }), p = ht({ select: (m) => {
    var _a;
    const b = m.matches, h = b.findIndex((E) => E.id === l);
    return (_a = b[h + 1]) == null ? void 0 : _a.id;
  } }), v = r.options.defaultPendingComponent ? S.jsx(r.options.defaultPendingComponent, {}) : null;
  if (f) return D0(r, s, void 0);
  if (!p) return null;
  const y = S.jsx(O0, { matchId: p });
  return i === Xf ? S.jsx(d.Suspense, { fallback: v, children: y }) : y;
});
function OE() {
  const a = Rt(), l = a.routesById[Xf].options.pendingComponent ?? a.options.defaultPendingComponent, i = l ? S.jsx(l, {}) : null, s = typeof document < "u" && a.ssr ? el : d.Suspense, f = S.jsxs(s, { fallback: i, children: [S.jsx(RE, {}), S.jsx(zE, {})] });
  return a.options.InnerWrap ? S.jsx(a.options.InnerWrap, { children: f }) : f;
}
function zE() {
  const a = Rt(), r = ht({ select: (s) => {
    var _a;
    return (_a = s.matches[0]) == null ? void 0 : _a.id;
  } }), l = ht({ select: (s) => s.loadedAt }), i = r ? S.jsx(O0, { matchId: r }) : null;
  return S.jsx(fc.Provider, { value: r, children: a.options.disableGlobalCatchBoundary ? i : S.jsx(Qf, { getResetKey: () => l, errorComponent: Zf, onCatch: (s) => {
    $f(false, s.message || s.toString());
  }, children: i }) });
}
const hN = (a) => new jE(a);
class jE extends Ex {
  constructor(r) {
    super(r);
  }
}
typeof globalThis < "u" ? (globalThis.createFileRoute = Xv, globalThis.createLazyFileRoute = Zv) : typeof window < "u" && (window.createFileRoute = Xv, window.createLazyFileRoute = Zv);
function kE({ router: a, children: r, ...l }) {
  Object.keys(l).length > 0 && a.update({ ...a.options, ...l, context: { ...a.options.context, ...l.context } });
  const i = T0(), s = S.jsx(i.Provider, { value: a, children: r });
  return a.options.Wrap ? S.jsx(a.options.Wrap, { children: s }) : s;
}
function mN({ router: a, ...r }) {
  return S.jsx(kE, { router: a, ...r, children: S.jsx(OE, {}) });
}
function vN(a) {
  return ht({ select: (r) => r.location });
}
function LE({ tag: a, attrs: r, children: l, nonce: i }) {
  switch (a) {
    case "title":
      return S.jsx("title", { ...r, suppressHydrationWarning: true, children: l });
    case "meta":
      return S.jsx("meta", { ...r, suppressHydrationWarning: true });
    case "link":
      return S.jsx("link", { ...r, nonce: i, suppressHydrationWarning: true });
    case "style":
      return S.jsx("style", { ...r, dangerouslySetInnerHTML: { __html: l }, nonce: i });
    case "script":
      return S.jsx(HE, { attrs: r, children: l });
    default:
      return null;
  }
}
function HE({ attrs: a, children: r }) {
  Rt(), d.useEffect(() => {
    if (a == null ? void 0 : a.src) {
      const l = (() => {
        try {
          const f = document.baseURI || window.location.href;
          return new URL(a.src, f).href;
        } catch {
          return a.src;
        }
      })();
      if (Array.from(document.querySelectorAll("script[src]")).find((f) => f.src === l)) return;
      const s = document.createElement("script");
      for (const [f, p] of Object.entries(a)) f !== "suppressHydrationWarning" && p !== void 0 && p !== false && s.setAttribute(f, typeof p == "boolean" ? "" : String(p));
      return document.head.appendChild(s), () => {
        s.parentNode && s.parentNode.removeChild(s);
      };
    }
    if (typeof r == "string") {
      const l = typeof (a == null ? void 0 : a.type) == "string" ? a.type : "text/javascript", i = typeof (a == null ? void 0 : a.nonce) == "string" ? a.nonce : void 0;
      if (Array.from(document.querySelectorAll("script:not([src])")).find((p) => {
        if (!(p instanceof HTMLScriptElement)) return false;
        const v = p.getAttribute("type") ?? "text/javascript", y = p.getAttribute("nonce") ?? void 0;
        return p.textContent === r && v === l && y === i;
      })) return;
      const f = document.createElement("script");
      if (f.textContent = r, a) for (const [p, v] of Object.entries(a)) p !== "suppressHydrationWarning" && v !== void 0 && v !== false && f.setAttribute(p, typeof v == "boolean" ? "" : String(v));
      return document.head.appendChild(f), () => {
        f.parentNode && f.parentNode.removeChild(f);
      };
    }
  }, [a, r]);
  {
    const { src: l, ...i } = a || {};
    return S.jsx("script", { suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: "" }, ...i });
  }
}
const UE = () => {
  var _a;
  const a = Rt(), r = (_a = a.options.ssr) == null ? void 0 : _a.nonce, l = ht({ select: (y) => y.matches.map((m) => m.meta).filter(Boolean) }), i = d.useMemo(() => {
    const y = [], m = {};
    let b;
    for (let h = l.length - 1; h >= 0; h--) {
      const E = l[h];
      for (let w = E.length - 1; w >= 0; w--) {
        const M = E[w];
        if (M) if (M.title) b || (b = { tag: "title", children: M.title });
        else if ("script:ld+json" in M) try {
          const _ = JSON.stringify(M["script:ld+json"]);
          y.push({ tag: "script", attrs: { type: "application/ld+json" }, children: _x(_) });
        } catch {
        }
        else {
          const _ = M.name ?? M.property;
          if (_) {
            if (m[_]) continue;
            m[_] = true;
          }
          y.push({ tag: "meta", attrs: { ...M, nonce: r } });
        }
      }
    }
    return b && y.push(b), r && y.push({ tag: "meta", attrs: { property: "csp-nonce", content: r } }), y.reverse(), y;
  }, [l, r]), s = ht({ select: (y) => {
    var _a2;
    const m = y.matches.map((E) => E.links).filter(Boolean).flat(1).map((E) => ({ tag: "link", attrs: { ...E, nonce: r } })), b = (_a2 = a.ssr) == null ? void 0 : _a2.manifest, h = y.matches.map((E) => {
      var _a3;
      return ((_a3 = b == null ? void 0 : b.routes[E.routeId]) == null ? void 0 : _a3.assets) ?? [];
    }).filter(Boolean).flat(1).filter((E) => E.tag === "link").map((E) => ({ tag: "link", attrs: { ...E.attrs, suppressHydrationWarning: true, nonce: r } }));
    return [...m, ...h];
  }, structuralSharing: true }), f = ht({ select: (y) => {
    const m = [];
    return y.matches.map((b) => a.looseRoutesById[b.routeId]).forEach((b) => {
      var _a2, _b2, _c2, _d2;
      return (_d2 = (_c2 = (_b2 = (_a2 = a.ssr) == null ? void 0 : _a2.manifest) == null ? void 0 : _b2.routes[b.id]) == null ? void 0 : _c2.preloads) == null ? void 0 : _d2.filter(Boolean).forEach((h) => {
        m.push({ tag: "link", attrs: { rel: "modulepreload", href: h, nonce: r } });
      });
    }), m;
  }, structuralSharing: true }), p = ht({ select: (y) => y.matches.map((m) => m.styles).flat(1).filter(Boolean).map(({ children: m, ...b }) => ({ tag: "style", attrs: { ...b, nonce: r }, children: m })), structuralSharing: true }), v = ht({ select: (y) => y.matches.map((m) => m.headScripts).flat(1).filter(Boolean).map(({ children: m, ...b }) => ({ tag: "script", attrs: { ...b, nonce: r }, children: m })), structuralSharing: true });
  return BE([...i, ...f, ...s, ...p, ...v], (y) => JSON.stringify(y));
};
function BE(a, r) {
  const l = /* @__PURE__ */ new Set();
  return a.filter((i) => {
    const s = r(i);
    return l.has(s) ? false : (l.add(s), true);
  });
}
function gN() {
  var _a;
  const a = UE(), l = (_a = Rt().options.ssr) == null ? void 0 : _a.nonce;
  return S.jsx(S.Fragment, { children: a.map((i) => d.createElement(LE, { ...i, key: `tsr-meta-${JSON.stringify(i)}`, nonce: l })) });
}
var IE = d.createContext(void 0), yN = ({ client: a, children: r }) => (d.useEffect(() => (a.mount(), () => {
  a.unmount();
}), [a]), S.jsx(IE.Provider, { value: a, children: r }));
const PE = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qE = (a) => a.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, l, i) => i ? i.toUpperCase() : l.toLowerCase()), Jv = (a) => {
  const r = qE(a);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, z0 = (...a) => a.filter((r, l, i) => !!r && r.trim() !== "" && i.indexOf(r) === l).join(" ").trim(), VE = (a) => {
  for (const r in a) if (r.startsWith("aria-") || r === "role" || r === "title") return true;
};
var GE = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const YE = d.forwardRef(({ color: a = "currentColor", size: r = 24, strokeWidth: l = 2, absoluteStrokeWidth: i, className: s = "", children: f, iconNode: p, ...v }, y) => d.createElement("svg", { ref: y, ...GE, width: r, height: r, stroke: a, strokeWidth: i ? Number(l) * 24 / Number(r) : l, className: z0("lucide", s), ...!f && !VE(v) && { "aria-hidden": "true" }, ...v }, [...p.map(([m, b]) => d.createElement(m, b)), ...Array.isArray(f) ? f : [f]]));
const le = (a, r) => {
  const l = d.forwardRef(({ className: i, ...s }, f) => d.createElement(YE, { ref: f, iconNode: r, className: z0(`lucide-${PE(Jv(a))}`, `lucide-${a}`, i), ...s }));
  return l.displayName = Jv(a), l;
};
const KE = [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]], bN = le("activity", KE);
const XE = [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]], SN = le("arrow-left", XE);
const $E = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]], xN = le("arrow-right", $E);
const QE = [["path", { d: "M12 7v14", key: "1akyts" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z", key: "ruj8y" }]], EN = le("book-open", QE);
const ZE = [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }]], _N = le("book", ZE);
const FE = [["path", { d: "M12 8V4H8", key: "hb8ula" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }], ["path", { d: "M2 14h2", key: "vft8re" }], ["path", { d: "M20 14h2", key: "4cs60a" }], ["path", { d: "M15 13v2", key: "1xurst" }], ["path", { d: "M9 13v2", key: "rq6x2g" }]], CN = le("bot", FE);
const JE = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], MN = le("check", JE);
const WE = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], RN = le("chevron-down", WE);
const e_ = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], wN = le("chevron-left", e_);
const t_ = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], TN = le("chevron-right", t_);
const n_ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], AN = le("chevron-up", n_);
const a_ = [["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }], ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]], NN = le("chevrons-up-down", a_);
const o_ = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]], DN = le("circle-alert", o_);
const l_ = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], ON = le("circle-check", l_);
const r_ = [["path", { d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z", key: "kmsa83" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], zN = le("circle-play", r_);
const i_ = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M12 8v8", key: "napkw2" }]], jN = le("circle-plus", i_);
const c_ = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]], kN = le("circle-x", c_);
const u_ = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], LN = le("circle", u_);
const s_ = [["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }], ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }], ["path", { d: "M7 6h1v4", key: "1obek4" }], ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]], HN = le("coins", s_);
const f_ = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }], ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }], ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]], UN = le("crosshair", f_);
const d_ = [["path", { d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z", key: "1vdc57" }], ["path", { d: "M5 21h14", key: "11awu3" }]], BN = le("crown", d_);
const p_ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["path", { d: "M16 8h.01", key: "cr5u4v" }], ["path", { d: "M8 8h.01", key: "1e4136" }], ["path", { d: "M8 16h.01", key: "18s6g9" }], ["path", { d: "M16 16h.01", key: "1f9h7w" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }]], IN = le("dice-5", p_);
const h_ = [["path", { d: "M12 15V3", key: "m9g1x1" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }], ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]], PN = le("download", h_);
const m_ = [["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }], ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }], ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]], qN = le("ellipsis", m_);
const v_ = [["path", { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z", key: "b19h5q" }], ["path", { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z", key: "h7h5ge" }]], VN = le("fast-forward", v_);
const g_ = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }], ["path", { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }]], GN = le("file-braces", g_);
const y_ = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]], YN = le("file-text", y_);
const b_ = [["path", { d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z", key: "sc7q7i" }]], KN = le("funnel", b_);
const S_ = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }], ["path", { d: "M2 12h20", key: "9i4pu4" }]], XN = le("globe", S_);
const x_ = [["path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9", key: "1hayfq" }], ["path", { d: "m18 15 4-4", key: "16gjal" }], ["path", { d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5", key: "15ts47" }]], $N = le("hammer", x_);
const E_ = [["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }], ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }], ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }], ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]], QN = le("hash", E_);
const __ = [["path", { d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5", key: "mvr1a0" }]], ZN = le("heart", __);
const C_ = [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }], ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]], FN = le("history", C_);
const M_ = [["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }], ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "r6nss1" }]], JN = le("house", M_);
const R_ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]], WN = le("image", R_);
const w_ = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]], e4 = le("info", w_);
const T_ = [["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }], ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }], ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]], t4 = le("key", T_);
const A_ = [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z", key: "zw3jo" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key: "1wduqc" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key: "kqbvx6" }]], n4 = le("layers", A_);
const N_ = [["path", { d: "M13 5h8", key: "a7qcls" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 19h8", key: "c3s6r1" }], ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]], a4 = le("list-checks", N_);
const D_ = [["path", { d: "M13 5h8", key: "a7qcls" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 19h8", key: "c3s6r1" }], ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["rect", { x: "3", y: "4", width: "6", height: "6", rx: "1", key: "cif1o7" }]], o4 = le("list-todo", D_);
const O_ = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], l4 = le("loader-circle", O_);
const z_ = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]], r4 = le("lock", z_);
const j_ = [["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }], ["path", { d: "M21 12H9", key: "dn1m92" }], ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]], i4 = le("log-out", j_);
const k_ = [["path", { d: "M4 5h16", key: "1tepv9" }], ["path", { d: "M4 12h16", key: "1lakjw" }], ["path", { d: "M4 19h16", key: "1djgab" }]], c4 = le("menu", k_);
const L_ = [["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719", key: "1sd12s" }]], u4 = le("message-circle", L_);
const H_ = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }]], s4 = le("message-square", H_);
const U_ = [["path", { d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z", key: "1n2ejm" }], ["path", { d: "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1", key: "1qfcsi" }]], f4 = le("messages-square", U_);
const B_ = [["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z", key: "2d38gg" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]], d4 = le("octagon-x", B_);
const I_ = [["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }], ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]], p4 = le("pause", I_);
const P_ = [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z", key: "10ikf1" }]], h4 = le("play", P_);
const q_ = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]], m4 = le("plus", q_);
const V_ = [["path", { d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", key: "rib7q0" }], ["path", { d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", key: "1ymkrd" }]], v4 = le("quote", V_);
const G_ = [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }], ["path", { d: "M8 16H3v5", key: "1cv678" }]], g4 = le("refresh-cw", G_);
const Y_ = [["path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z", key: "m3kijz" }], ["path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z", key: "1fmvmk" }], ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }], ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]], y4 = le("rocket", Y_);
const K_ = [["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", key: "1c8476" }], ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }], ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]], b4 = le("save", K_);
const X_ = [["path", { d: "M15 12h-5", key: "r7krc0" }], ["path", { d: "M15 8h-5", key: "1khuty" }], ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }], ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3", key: "1ph1d7" }]], S4 = le("scroll-text", X_);
const $_ = [["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }], ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]], x4 = le("search", $_);
const Q_ = [["path", { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z", key: "1ffxy3" }], ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]], E4 = le("send", Q_);
const Z_ = [["path", { d: "M14 17H5", key: "gfn3mx" }], ["path", { d: "M19 7h-9", key: "6i9tg" }], ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }], ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]], _4 = le("settings-2", Z_);
const F_ = [["path", { d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915", key: "1i5ecw" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]], C4 = le("settings", F_);
const J_ = [["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }], ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }], ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }], ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }], ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]], M4 = le("share-2", J_);
const W_ = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "M12 8v4", key: "1got3b" }], ["path", { d: "M12 16h.01", key: "1drbdi" }]], R4 = le("shield-alert", W_);
const eC = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], w4 = le("shield-check", eC);
const tC = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }]], T4 = le("shield", tC);
const nC = [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }], ["path", { d: "M12 18h.01", key: "mhygvu" }]], A4 = le("smartphone", nC);
const aC = [["path", { d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z", key: "1s2grr" }], ["path", { d: "M20 2v4", key: "1rf3ol" }], ["path", { d: "M22 4h-4", key: "gwowj6" }], ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]], N4 = le("sparkles", aC);
const oC = [["path", { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]], D4 = le("square-check-big", oC);
const lC = [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }], ["path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z", key: "ohrbg2" }]], O4 = le("square-pen", lC);
const rC = [["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }], ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }], ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }], ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }], ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }], ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }], ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }], ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }]], z4 = le("swords", rC);
const iC = [["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", key: "vktsd0" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]], j4 = le("tag", iC);
const cC = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], k4 = le("target", cC);
const uC = [["path", { d: "M10 11v6", key: "nco0om" }], ["path", { d: "M14 11v6", key: "outv1u" }], ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }], ["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]], L4 = le("trash-2", uC);
const sC = [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }], ["path", { d: "M12 9v4", key: "juzpu7" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], H4 = le("triangle-alert", sC);
const fC = [["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }], ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }], ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }], ["path", { d: "M4 22h16", key: "57wxv0" }], ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }], ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]], U4 = le("trophy", fC);
const dC = [["path", { d: "M12 4v16", key: "1654pz" }], ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }], ["path", { d: "M9 20h6", key: "s66wpe" }]], B4 = le("type", dC);
const pC = [["path", { d: "M12 3v12", key: "1x0j5s" }], ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]], I4 = le("upload", pC);
const hC = [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }], ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]], P4 = le("user-plus", hC);
const mC = [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }], ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]], q4 = le("user", mC);
const vC = [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]], V4 = le("users", vC);
const gC = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]], G4 = le("x", gC);
var yC = (a, r, l, i, s, f, p, v) => {
  let y = document.documentElement, m = ["light", "dark"];
  function b(w) {
    (Array.isArray(a) ? a : [a]).forEach((M) => {
      let _ = M === "class", C = _ && f ? s.map((R) => f[R] || R) : s;
      _ ? (y.classList.remove(...C), y.classList.add(f && f[w] ? f[w] : w)) : y.setAttribute(M, w);
    }), h(w);
  }
  function h(w) {
    v && m.includes(w) && (y.style.colorScheme = w);
  }
  function E() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (i) b(i);
  else try {
    let w = localStorage.getItem(r) || l, M = p && w === "system" ? E() : w;
    b(M);
  } catch {
  }
}, bC = d.createContext(void 0), SC = { setTheme: (a) => {
}, themes: [] }, Y4 = () => {
  var a;
  return (a = d.useContext(bC)) != null ? a : SC;
};
d.memo(({ forcedTheme: a, storageKey: r, attribute: l, enableSystem: i, enableColorScheme: s, defaultTheme: f, value: p, themes: v, nonce: y, scriptProps: m }) => {
  let b = JSON.stringify([l, r, f, a, v, p, i, s]).slice(1, -1);
  return d.createElement("script", { ...m, suppressHydrationWarning: true, nonce: typeof window > "u" ? y : "", dangerouslySetInnerHTML: { __html: `(${yC.toString()})(${b})` } });
});
function xC(a) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0], l = document.createElement("style");
  l.type = "text/css", r.appendChild(l), l.styleSheet ? l.styleSheet.cssText = a : l.appendChild(document.createTextNode(a));
}
const EC = (a) => {
  switch (a) {
    case "success":
      return MC;
    case "info":
      return wC;
    case "warning":
      return RC;
    case "error":
      return TC;
    default:
      return null;
  }
}, _C = Array(12).fill(0), CC = ({ visible: a, className: r }) => J.createElement("div", { className: ["sonner-loading-wrapper", r].filter(Boolean).join(" "), "data-visible": a }, J.createElement("div", { className: "sonner-spinner" }, _C.map((l, i) => J.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${i}` })))), MC = J.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, J.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), RC = J.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, J.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), wC = J.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, J.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), TC = J.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, J.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), AC = J.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, J.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), J.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), NC = () => {
  const [a, r] = J.useState(document.hidden);
  return J.useEffect(() => {
    const l = () => {
      r(document.hidden);
    };
    return document.addEventListener("visibilitychange", l), () => window.removeEventListener("visibilitychange", l);
  }, []), a;
};
let Mf = 1;
class DC {
  constructor() {
    this.subscribe = (r) => (this.subscribers.push(r), () => {
      const l = this.subscribers.indexOf(r);
      this.subscribers.splice(l, 1);
    }), this.publish = (r) => {
      this.subscribers.forEach((l) => l(r));
    }, this.addToast = (r) => {
      this.publish(r), this.toasts = [...this.toasts, r];
    }, this.create = (r) => {
      var l;
      const { message: i, ...s } = r, f = typeof (r == null ? void 0 : r.id) == "number" || ((l = r.id) == null ? void 0 : l.length) > 0 ? r.id : Mf++, p = this.toasts.find((y) => y.id === f), v = r.dismissible === void 0 ? true : r.dismissible;
      return this.dismissedToasts.has(f) && this.dismissedToasts.delete(f), p ? this.toasts = this.toasts.map((y) => y.id === f ? (this.publish({ ...y, ...r, id: f, title: i }), { ...y, ...r, id: f, dismissible: v, title: i }) : y) : this.addToast({ title: i, ...s, dismissible: v, id: f }), f;
    }, this.dismiss = (r) => (r ? (this.dismissedToasts.add(r), requestAnimationFrame(() => this.subscribers.forEach((l) => l({ id: r, dismiss: true })))) : this.toasts.forEach((l) => {
      this.subscribers.forEach((i) => i({ id: l.id, dismiss: true }));
    }), r), this.message = (r, l) => this.create({ ...l, message: r }), this.error = (r, l) => this.create({ ...l, message: r, type: "error" }), this.success = (r, l) => this.create({ ...l, type: "success", message: r }), this.info = (r, l) => this.create({ ...l, type: "info", message: r }), this.warning = (r, l) => this.create({ ...l, type: "warning", message: r }), this.loading = (r, l) => this.create({ ...l, type: "loading", message: r }), this.promise = (r, l) => {
      if (!l) return;
      let i;
      l.loading !== void 0 && (i = this.create({ ...l, promise: r, type: "loading", message: l.loading, description: typeof l.description != "function" ? l.description : void 0 }));
      const s = Promise.resolve(r instanceof Function ? r() : r);
      let f = i !== void 0, p;
      const v = s.then(async (m) => {
        if (p = ["resolve", m], J.isValidElement(m)) f = false, this.create({ id: i, type: "default", message: m });
        else if (zC(m) && !m.ok) {
          f = false;
          const h = typeof l.error == "function" ? await l.error(`HTTP error! status: ${m.status}`) : l.error, E = typeof l.description == "function" ? await l.description(`HTTP error! status: ${m.status}`) : l.description, M = typeof h == "object" && !J.isValidElement(h) ? h : { message: h };
          this.create({ id: i, type: "error", description: E, ...M });
        } else if (m instanceof Error) {
          f = false;
          const h = typeof l.error == "function" ? await l.error(m) : l.error, E = typeof l.description == "function" ? await l.description(m) : l.description, M = typeof h == "object" && !J.isValidElement(h) ? h : { message: h };
          this.create({ id: i, type: "error", description: E, ...M });
        } else if (l.success !== void 0) {
          f = false;
          const h = typeof l.success == "function" ? await l.success(m) : l.success, E = typeof l.description == "function" ? await l.description(m) : l.description, M = typeof h == "object" && !J.isValidElement(h) ? h : { message: h };
          this.create({ id: i, type: "success", description: E, ...M });
        }
      }).catch(async (m) => {
        if (p = ["reject", m], l.error !== void 0) {
          f = false;
          const b = typeof l.error == "function" ? await l.error(m) : l.error, h = typeof l.description == "function" ? await l.description(m) : l.description, w = typeof b == "object" && !J.isValidElement(b) ? b : { message: b };
          this.create({ id: i, type: "error", description: h, ...w });
        }
      }).finally(() => {
        f && (this.dismiss(i), i = void 0), l.finally == null || l.finally.call(l);
      }), y = () => new Promise((m, b) => v.then(() => p[0] === "reject" ? b(p[1]) : m(p[1])).catch(b));
      return typeof i != "string" && typeof i != "number" ? { unwrap: y } : Object.assign(i, { unwrap: y });
    }, this.custom = (r, l) => {
      const i = (l == null ? void 0 : l.id) || Mf++;
      return this.create({ jsx: r(i), id: i, ...l }), i;
    }, this.getActiveToasts = () => this.toasts.filter((r) => !this.dismissedToasts.has(r.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const qt = new DC(), OC = (a, r) => {
  const l = (r == null ? void 0 : r.id) || Mf++;
  return qt.addToast({ title: a, ...r, id: l }), l;
}, zC = (a) => a && typeof a == "object" && "ok" in a && typeof a.ok == "boolean" && "status" in a && typeof a.status == "number", jC = OC, kC = () => qt.toasts, LC = () => qt.getActiveToasts(), K4 = Object.assign(jC, { success: qt.success, info: qt.info, warning: qt.warning, error: qt.error, custom: qt.custom, message: qt.message, promise: qt.promise, dismiss: qt.dismiss, loading: qt.loading }, { getHistory: kC, getToasts: LC });
xC("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Vi(a) {
  return a.label !== void 0;
}
const HC = 3, UC = "24px", BC = "16px", Wv = 4e3, IC = 356, PC = 14, qC = 45, VC = 200;
function wn(...a) {
  return a.filter(Boolean).join(" ");
}
function GC(a) {
  const [r, l] = a.split("-"), i = [];
  return r && i.push(r), l && i.push(l), i;
}
const YC = (a) => {
  var r, l, i, s, f, p, v, y, m;
  const { invert: b, toast: h, unstyled: E, interacting: w, setHeights: M, visibleToasts: _, heights: C, index: R, toasts: O, expanded: k, removeToast: I, defaultRichColors: Z, closeButton: F, style: V, cancelButtonStyle: oe, actionButtonStyle: ge, className: ve = "", descriptionClassName: ue = "", duration: de, position: he, gap: be, expandByDefault: ye, classNames: z, icons: X, closeButtonAriaLabel: W = "Close toast" } = a, [ee, re] = J.useState(null), [A, N] = J.useState(null), [L, P] = J.useState(false), [G, te] = J.useState(false), [Y, ae] = J.useState(false), [ce, Se] = J.useState(false), [Re, Oe] = J.useState(false), [tt, Fe] = J.useState(0), [Jt, Gt] = J.useState(0), ut = J.useRef(h.duration || de || Wv), Nn = J.useRef(null), Je = J.useRef(null), ka = R === 0, La = R + 1 <= _, st = h.type, Sn = h.dismissible !== false, mt = h.className || "", pl = h.descriptionClassName || "", Le = J.useMemo(() => C.findIndex((xe) => xe.toastId === h.id) || 0, [C, h.id]), rt = J.useMemo(() => {
    var xe;
    return (xe = h.closeButton) != null ? xe : F;
  }, [h.closeButton, F]), it = J.useMemo(() => h.duration || de || Wv, [h.duration, de]), Jn = J.useRef(0), Dn = J.useRef(0), Ar = J.useRef(0), Wn = J.useRef(null), [Ha, Tt] = he.split("-"), fn = J.useMemo(() => C.reduce((xe, Ye, ft) => ft >= Le ? xe : xe + Ye.height, 0), [C, Le]), _t = NC(), Uc = h.invert || b, hl = st === "loading";
  Dn.current = J.useMemo(() => Le * be + fn, [Le, fn]), J.useEffect(() => {
    ut.current = it;
  }, [it]), J.useEffect(() => {
    P(true);
  }, []), J.useEffect(() => {
    const xe = Je.current;
    if (xe) {
      const Ye = xe.getBoundingClientRect().height;
      return Gt(Ye), M((ft) => [{ toastId: h.id, height: Ye, position: h.position }, ...ft]), () => M((ft) => ft.filter((Ct) => Ct.toastId !== h.id));
    }
  }, [M, h.id]), J.useLayoutEffect(() => {
    if (!L) return;
    const xe = Je.current, Ye = xe.style.height;
    xe.style.height = "auto";
    const ft = xe.getBoundingClientRect().height;
    xe.style.height = Ye, Gt(ft), M((Ct) => Ct.find(($e) => $e.toastId === h.id) ? Ct.map(($e) => $e.toastId === h.id ? { ...$e, height: ft } : $e) : [{ toastId: h.id, height: ft, position: h.position }, ...Ct]);
  }, [L, h.title, h.description, M, h.id, h.jsx, h.action, h.cancel]);
  const xn = J.useCallback(() => {
    te(true), Fe(Dn.current), M((xe) => xe.filter((Ye) => Ye.toastId !== h.id)), setTimeout(() => {
      I(h);
    }, VC);
  }, [h, I, M, Dn]);
  J.useEffect(() => {
    if (h.promise && st === "loading" || h.duration === 1 / 0 || h.type === "loading") return;
    let xe;
    return k || w || _t ? (() => {
      if (Ar.current < Jn.current) {
        const Ct = (/* @__PURE__ */ new Date()).getTime() - Jn.current;
        ut.current = ut.current - Ct;
      }
      Ar.current = (/* @__PURE__ */ new Date()).getTime();
    })() : ut.current !== 1 / 0 && (Jn.current = (/* @__PURE__ */ new Date()).getTime(), xe = setTimeout(() => {
      h.onAutoClose == null || h.onAutoClose.call(h, h), xn();
    }, ut.current)), () => clearTimeout(xe);
  }, [k, w, h, st, _t, xn]), J.useEffect(() => {
    h.delete && (xn(), h.onDismiss == null || h.onDismiss.call(h, h));
  }, [xn, h.delete]);
  function so() {
    var xe;
    if (X == null ? void 0 : X.loading) {
      var Ye;
      return J.createElement("div", { className: wn(z == null ? void 0 : z.loader, h == null || (Ye = h.classNames) == null ? void 0 : Ye.loader, "sonner-loader"), "data-visible": st === "loading" }, X.loading);
    }
    return J.createElement(CC, { className: wn(z == null ? void 0 : z.loader, h == null || (xe = h.classNames) == null ? void 0 : xe.loader), visible: st === "loading" });
  }
  const fo = h.icon || (X == null ? void 0 : X[st]) || EC(st);
  var Ua, En;
  return J.createElement("li", { tabIndex: 0, ref: Je, className: wn(ve, mt, z == null ? void 0 : z.toast, h == null || (r = h.classNames) == null ? void 0 : r.toast, z == null ? void 0 : z.default, z == null ? void 0 : z[st], h == null || (l = h.classNames) == null ? void 0 : l[st]), "data-sonner-toast": "", "data-rich-colors": (Ua = h.richColors) != null ? Ua : Z, "data-styled": !(h.jsx || h.unstyled || E), "data-mounted": L, "data-promise": !!h.promise, "data-swiped": Re, "data-removed": G, "data-visible": La, "data-y-position": Ha, "data-x-position": Tt, "data-index": R, "data-front": ka, "data-swiping": Y, "data-dismissible": Sn, "data-type": st, "data-invert": Uc, "data-swipe-out": ce, "data-swipe-direction": A, "data-expanded": !!(k || ye && L), "data-testid": h.testId, style: { "--index": R, "--toasts-before": R, "--z-index": O.length - R, "--offset": `${G ? tt : Dn.current}px`, "--initial-height": ye ? "auto" : `${Jt}px`, ...V, ...h.style }, onDragEnd: () => {
    ae(false), re(null), Wn.current = null;
  }, onPointerDown: (xe) => {
    xe.button !== 2 && (hl || !Sn || (Nn.current = /* @__PURE__ */ new Date(), Fe(Dn.current), xe.target.setPointerCapture(xe.pointerId), xe.target.tagName !== "BUTTON" && (ae(true), Wn.current = { x: xe.clientX, y: xe.clientY })));
  }, onPointerUp: () => {
    var xe, Ye, ft;
    if (ce || !Sn) return;
    Wn.current = null;
    const Ct = Number(((xe = Je.current) == null ? void 0 : xe.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), ea = Number(((Ye = Je.current) == null ? void 0 : Ye.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), $e = (/* @__PURE__ */ new Date()).getTime() - ((ft = Nn.current) == null ? void 0 : ft.getTime()), Ot = ee === "x" ? Ct : ea, Ba = Math.abs(Ot) / $e;
    if (Math.abs(Ot) >= qC || Ba > 0.11) {
      Fe(Dn.current), h.onDismiss == null || h.onDismiss.call(h, h), N(ee === "x" ? Ct > 0 ? "right" : "left" : ea > 0 ? "down" : "up"), xn(), Se(true);
      return;
    } else {
      var zt, jt;
      (zt = Je.current) == null || zt.style.setProperty("--swipe-amount-x", "0px"), (jt = Je.current) == null || jt.style.setProperty("--swipe-amount-y", "0px");
    }
    Oe(false), ae(false), re(null);
  }, onPointerMove: (xe) => {
    var Ye, ft, Ct;
    if (!Wn.current || !Sn || ((Ye = window.getSelection()) == null ? void 0 : Ye.toString().length) > 0) return;
    const $e = xe.clientY - Wn.current.y, Ot = xe.clientX - Wn.current.x;
    var Ba;
    const zt = (Ba = a.swipeDirections) != null ? Ba : GC(he);
    !ee && (Math.abs(Ot) > 1 || Math.abs($e) > 1) && re(Math.abs(Ot) > Math.abs($e) ? "x" : "y");
    let jt = { x: 0, y: 0 };
    const po = (dn) => 1 / (1.5 + Math.abs(dn) / 20);
    if (ee === "y") {
      if (zt.includes("top") || zt.includes("bottom")) if (zt.includes("top") && $e < 0 || zt.includes("bottom") && $e > 0) jt.y = $e;
      else {
        const dn = $e * po($e);
        jt.y = Math.abs(dn) < Math.abs($e) ? dn : $e;
      }
    } else if (ee === "x" && (zt.includes("left") || zt.includes("right"))) if (zt.includes("left") && Ot < 0 || zt.includes("right") && Ot > 0) jt.x = Ot;
    else {
      const dn = Ot * po(Ot);
      jt.x = Math.abs(dn) < Math.abs(Ot) ? dn : Ot;
    }
    (Math.abs(jt.x) > 0 || Math.abs(jt.y) > 0) && Oe(true), (ft = Je.current) == null || ft.style.setProperty("--swipe-amount-x", `${jt.x}px`), (Ct = Je.current) == null || Ct.style.setProperty("--swipe-amount-y", `${jt.y}px`);
  } }, rt && !h.jsx && st !== "loading" ? J.createElement("button", { "aria-label": W, "data-disabled": hl, "data-close-button": true, onClick: hl || !Sn ? () => {
  } : () => {
    xn(), h.onDismiss == null || h.onDismiss.call(h, h);
  }, className: wn(z == null ? void 0 : z.closeButton, h == null || (i = h.classNames) == null ? void 0 : i.closeButton) }, (En = X == null ? void 0 : X.close) != null ? En : AC) : null, (st || h.icon || h.promise) && h.icon !== null && ((X == null ? void 0 : X[st]) !== null || h.icon) ? J.createElement("div", { "data-icon": "", className: wn(z == null ? void 0 : z.icon, h == null || (s = h.classNames) == null ? void 0 : s.icon) }, h.promise || h.type === "loading" && !h.icon ? h.icon || so() : null, h.type !== "loading" ? fo : null) : null, J.createElement("div", { "data-content": "", className: wn(z == null ? void 0 : z.content, h == null || (f = h.classNames) == null ? void 0 : f.content) }, J.createElement("div", { "data-title": "", className: wn(z == null ? void 0 : z.title, h == null || (p = h.classNames) == null ? void 0 : p.title) }, h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title), h.description ? J.createElement("div", { "data-description": "", className: wn(ue, pl, z == null ? void 0 : z.description, h == null || (v = h.classNames) == null ? void 0 : v.description) }, typeof h.description == "function" ? h.description() : h.description) : null), J.isValidElement(h.cancel) ? h.cancel : h.cancel && Vi(h.cancel) ? J.createElement("button", { "data-button": true, "data-cancel": true, style: h.cancelButtonStyle || oe, onClick: (xe) => {
    Vi(h.cancel) && Sn && (h.cancel.onClick == null || h.cancel.onClick.call(h.cancel, xe), xn());
  }, className: wn(z == null ? void 0 : z.cancelButton, h == null || (y = h.classNames) == null ? void 0 : y.cancelButton) }, h.cancel.label) : null, J.isValidElement(h.action) ? h.action : h.action && Vi(h.action) ? J.createElement("button", { "data-button": true, "data-action": true, style: h.actionButtonStyle || ge, onClick: (xe) => {
    Vi(h.action) && (h.action.onClick == null || h.action.onClick.call(h.action, xe), !xe.defaultPrevented && xn());
  }, className: wn(z == null ? void 0 : z.actionButton, h == null || (m = h.classNames) == null ? void 0 : m.actionButton) }, h.action.label) : null);
};
function e0() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const a = document.documentElement.getAttribute("dir");
  return a === "auto" || !a ? window.getComputedStyle(document.documentElement).direction : a;
}
function KC(a, r) {
  const l = {};
  return [a, r].forEach((i, s) => {
    const f = s === 1, p = f ? "--mobile-offset" : "--offset", v = f ? BC : UC;
    function y(m) {
      ["top", "right", "bottom", "left"].forEach((b) => {
        l[`${p}-${b}`] = typeof m == "number" ? `${m}px` : m;
      });
    }
    typeof i == "number" || typeof i == "string" ? y(i) : typeof i == "object" ? ["top", "right", "bottom", "left"].forEach((m) => {
      i[m] === void 0 ? l[`${p}-${m}`] = v : l[`${p}-${m}`] = typeof i[m] == "number" ? `${i[m]}px` : i[m];
    }) : y(v);
  }), l;
}
const X4 = J.forwardRef(function(r, l) {
  const { id: i, invert: s, position: f = "bottom-right", hotkey: p = ["altKey", "KeyT"], expand: v, closeButton: y, className: m, offset: b, mobileOffset: h, theme: E = "light", richColors: w, duration: M, style: _, visibleToasts: C = HC, toastOptions: R, dir: O = e0(), gap: k = PC, icons: I, containerAriaLabel: Z = "Notifications" } = r, [F, V] = J.useState([]), oe = J.useMemo(() => i ? F.filter((L) => L.toasterId === i) : F.filter((L) => !L.toasterId), [F, i]), ge = J.useMemo(() => Array.from(new Set([f].concat(oe.filter((L) => L.position).map((L) => L.position)))), [oe, f]), [ve, ue] = J.useState([]), [de, he] = J.useState(false), [be, ye] = J.useState(false), [z, X] = J.useState(E !== "system" ? E : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), W = J.useRef(null), ee = p.join("+").replace(/Key/g, "").replace(/Digit/g, ""), re = J.useRef(null), A = J.useRef(false), N = J.useCallback((L) => {
    V((P) => {
      var G;
      return (G = P.find((te) => te.id === L.id)) != null && G.delete || qt.dismiss(L.id), P.filter(({ id: te }) => te !== L.id);
    });
  }, []);
  return J.useEffect(() => qt.subscribe((L) => {
    if (L.dismiss) {
      requestAnimationFrame(() => {
        V((P) => P.map((G) => G.id === L.id ? { ...G, delete: true } : G));
      });
      return;
    }
    setTimeout(() => {
      A0.flushSync(() => {
        V((P) => {
          const G = P.findIndex((te) => te.id === L.id);
          return G !== -1 ? [...P.slice(0, G), { ...P[G], ...L }, ...P.slice(G + 1)] : [L, ...P];
        });
      });
    });
  }), [F]), J.useEffect(() => {
    if (E !== "system") {
      X(E);
      return;
    }
    if (E === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? X("dark") : X("light")), typeof window > "u") return;
    const L = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      L.addEventListener("change", ({ matches: P }) => {
        X(P ? "dark" : "light");
      });
    } catch {
      L.addListener(({ matches: G }) => {
        try {
          X(G ? "dark" : "light");
        } catch (te) {
          console.error(te);
        }
      });
    }
  }, [E]), J.useEffect(() => {
    F.length <= 1 && he(false);
  }, [F]), J.useEffect(() => {
    const L = (P) => {
      var G;
      if (p.every((ae) => P[ae] || P.code === ae)) {
        var Y;
        he(true), (Y = W.current) == null || Y.focus();
      }
      P.code === "Escape" && (document.activeElement === W.current || (G = W.current) != null && G.contains(document.activeElement)) && he(false);
    };
    return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [p]), J.useEffect(() => {
    if (W.current) return () => {
      re.current && (re.current.focus({ preventScroll: true }), re.current = null, A.current = false);
    };
  }, [W.current]), J.createElement("section", { ref: l, "aria-label": `${Z} ${ee}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: true }, ge.map((L, P) => {
    var G;
    const [te, Y] = L.split("-");
    return oe.length ? J.createElement("ol", { key: L, dir: O === "auto" ? e0() : O, tabIndex: -1, ref: W, className: m, "data-sonner-toaster": true, "data-sonner-theme": z, "data-y-position": te, "data-x-position": Y, style: { "--front-toast-height": `${((G = ve[0]) == null ? void 0 : G.height) || 0}px`, "--width": `${IC}px`, "--gap": `${k}px`, ..._, ...KC(b, h) }, onBlur: (ae) => {
      A.current && !ae.currentTarget.contains(ae.relatedTarget) && (A.current = false, re.current && (re.current.focus({ preventScroll: true }), re.current = null));
    }, onFocus: (ae) => {
      ae.target instanceof HTMLElement && ae.target.dataset.dismissible === "false" || A.current || (A.current = true, re.current = ae.relatedTarget);
    }, onMouseEnter: () => he(true), onMouseMove: () => he(true), onMouseLeave: () => {
      be || he(false);
    }, onDragEnd: () => he(false), onPointerDown: (ae) => {
      ae.target instanceof HTMLElement && ae.target.dataset.dismissible === "false" || ye(true);
    }, onPointerUp: () => ye(false) }, oe.filter((ae) => !ae.position && P === 0 || ae.position === L).map((ae, ce) => {
      var Se, Re;
      return J.createElement(YC, { key: ae.id, icons: I, index: ce, toast: ae, defaultRichColors: w, duration: (Se = R == null ? void 0 : R.duration) != null ? Se : M, className: R == null ? void 0 : R.className, descriptionClassName: R == null ? void 0 : R.descriptionClassName, invert: s, visibleToasts: C, closeButton: (Re = R == null ? void 0 : R.closeButton) != null ? Re : y, interacting: be, position: L, style: R == null ? void 0 : R.style, unstyled: R == null ? void 0 : R.unstyled, classNames: R == null ? void 0 : R.classNames, cancelButtonStyle: R == null ? void 0 : R.cancelButtonStyle, actionButtonStyle: R == null ? void 0 : R.actionButtonStyle, closeButtonAriaLabel: R == null ? void 0 : R.closeButtonAriaLabel, removeToast: N, toasts: oe.filter((Oe) => Oe.position == ae.position), heights: ve.filter((Oe) => Oe.position == ae.position), setHeights: ue, expandByDefault: v, gap: k, expanded: de, swipeDirections: r.swipeDirections });
    })) : null;
  }));
}), t0 = (a) => {
  let r;
  const l = /* @__PURE__ */ new Set(), i = (m, b) => {
    const h = typeof m == "function" ? m(r) : m;
    if (!Object.is(h, r)) {
      const E = r;
      r = b ?? (typeof h != "object" || h === null) ? h : Object.assign({}, r, h), l.forEach((w) => w(r, E));
    }
  }, s = () => r, v = { setState: i, getState: s, getInitialState: () => y, subscribe: (m) => (l.add(m), () => l.delete(m)) }, y = r = a(i, s, v);
  return v;
}, XC = ((a) => a ? t0(a) : t0), $C = (a) => a;
function QC(a, r = $C) {
  const l = J.useSyncExternalStore(a.subscribe, J.useCallback(() => r(a.getState()), [a, r]), J.useCallback(() => r(a.getInitialState()), [a, r]));
  return J.useDebugValue(l), l;
}
const ZC = (a) => {
  const r = XC(a), l = (i) => QC(r, i);
  return Object.assign(l, r), l;
}, $4 = ((a) => ZC);
function FC(a, r) {
  let l;
  try {
    l = a();
  } catch {
    return;
  }
  return { getItem: (s) => {
    var f;
    const p = (y) => y === null ? null : JSON.parse(y, void 0), v = (f = l.getItem(s)) != null ? f : null;
    return v instanceof Promise ? v.then(p) : p(v);
  }, setItem: (s, f) => l.setItem(s, JSON.stringify(f, void 0)), removeItem: (s) => l.removeItem(s) };
}
const Rf = (a) => (r) => {
  try {
    const l = a(r);
    return l instanceof Promise ? l : { then(i) {
      return Rf(i)(l);
    }, catch(i) {
      return this;
    } };
  } catch (l) {
    return { then(i) {
      return this;
    }, catch(i) {
      return Rf(i)(l);
    } };
  }
}, JC = (a, r) => (l, i, s) => {
  let f = { storage: FC(() => window.localStorage), partialize: (C) => C, version: 0, merge: (C, R) => ({ ...R, ...C }), ...r }, p = false, v = 0;
  const y = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set();
  let b = f.storage;
  if (!b) return a((...C) => {
    console.warn(`[zustand persist middleware] Unable to update item '${f.name}', the given storage is currently unavailable.`), l(...C);
  }, i, s);
  const h = () => {
    const C = f.partialize({ ...i() });
    return b.setItem(f.name, { state: C, version: f.version });
  }, E = s.setState;
  s.setState = (C, R) => (E(C, R), h());
  const w = a((...C) => (l(...C), h()), i, s);
  s.getInitialState = () => w;
  let M;
  const _ = () => {
    var C, R;
    if (!b) return;
    const O = ++v;
    p = false, y.forEach((I) => {
      var Z;
      return I((Z = i()) != null ? Z : w);
    });
    const k = ((R = f.onRehydrateStorage) == null ? void 0 : R.call(f, (C = i()) != null ? C : w)) || void 0;
    return Rf(b.getItem.bind(b))(f.name).then((I) => {
      if (I) if (typeof I.version == "number" && I.version !== f.version) {
        if (f.migrate) {
          const Z = f.migrate(I.state, I.version);
          return Z instanceof Promise ? Z.then((F) => [true, F]) : [true, Z];
        }
        console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
      } else return [false, I.state];
      return [false, void 0];
    }).then((I) => {
      var Z;
      if (O !== v) return;
      const [F, V] = I;
      if (M = f.merge(V, (Z = i()) != null ? Z : w), l(M, true), F) return h();
    }).then(() => {
      O === v && (k == null ? void 0 : k(M, void 0), M = i(), p = true, m.forEach((I) => I(M)));
    }).catch((I) => {
      O === v && (k == null ? void 0 : k(void 0, I));
    });
  };
  return s.persist = { setOptions: (C) => {
    f = { ...f, ...C }, C.storage && (b = C.storage);
  }, clearStorage: () => {
    b == null ? void 0 : b.removeItem(f.name);
  }, getOptions: () => f, rehydrate: () => _(), hasHydrated: () => p, onHydrate: (C) => (y.add(C), () => {
    y.delete(C);
  }), onFinishHydration: (C) => (m.add(C), () => {
    m.delete(C);
  }) }, f.skipHydration || _(), M || w;
}, Q4 = JC;
function n0(a, r) {
  if (typeof a == "function") return a(r);
  a != null && (a.current = r);
}
function An(...a) {
  return (r) => {
    let l = false;
    const i = a.map((s) => {
      const f = n0(s, r);
      return !l && typeof f == "function" && (l = true), f;
    });
    if (l) return () => {
      for (let s = 0; s < i.length; s++) {
        const f = i[s];
        typeof f == "function" ? f() : n0(a[s], null);
      }
    };
  };
}
function Ee(...a) {
  return d.useCallback(An(...a), a);
}
var WC = /* @__PURE__ */ Symbol.for("react.lazy"), ec = sc[" use ".trim().toString()];
function eM(a) {
  return typeof a == "object" && a !== null && "then" in a;
}
function j0(a) {
  return a != null && typeof a == "object" && "$$typeof" in a && a.$$typeof === WC && "_payload" in a && eM(a._payload);
}
function k0(a) {
  const r = tM(a), l = d.forwardRef((i, s) => {
    let { children: f, ...p } = i;
    j0(f) && typeof ec == "function" && (f = ec(f._payload));
    const v = d.Children.toArray(f), y = v.find(aM);
    if (y) {
      const m = y.props.children, b = v.map((h) => h === y ? d.Children.count(m) > 1 ? d.Children.only(null) : d.isValidElement(m) ? m.props.children : null : h);
      return S.jsx(r, { ...p, ref: s, children: d.isValidElement(m) ? d.cloneElement(m, void 0, b) : null });
    }
    return S.jsx(r, { ...p, ref: s, children: f });
  });
  return l.displayName = `${a}.Slot`, l;
}
var Z4 = k0("Slot");
function tM(a) {
  const r = d.forwardRef((l, i) => {
    let { children: s, ...f } = l;
    if (j0(s) && typeof ec == "function" && (s = ec(s._payload)), d.isValidElement(s)) {
      const p = lM(s), v = oM(f, s.props);
      return s.type !== d.Fragment && (v.ref = i ? An(i, p) : p), d.cloneElement(s, v);
    }
    return d.Children.count(s) > 1 ? d.Children.only(null) : null;
  });
  return r.displayName = `${a}.SlotClone`, r;
}
var nM = /* @__PURE__ */ Symbol("radix.slottable");
function aM(a) {
  return d.isValidElement(a) && typeof a.type == "function" && "__radixId" in a.type && a.type.__radixId === nM;
}
function oM(a, r) {
  const l = { ...r };
  for (const i in r) {
    const s = a[i], f = r[i];
    /^on[A-Z]/.test(i) ? s && f ? l[i] = (...v) => {
      const y = f(...v);
      return s(...v), y;
    } : s && (l[i] = s) : i === "style" ? l[i] = { ...s, ...f } : i === "className" && (l[i] = [s, f].filter(Boolean).join(" "));
  }
  return { ...a, ...l };
}
function lM(a) {
  var _a, _b2;
  let r = (_a = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : _a.get, l = r && "isReactWarning" in r && r.isReactWarning;
  return l ? a.ref : (r = (_b2 = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : _b2.get, l = r && "isReactWarning" in r && r.isReactWarning, l ? a.props.ref : a.props.ref || a.ref);
}
var rM = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], Zn = rM.reduce((a, r) => {
  const l = k0(`Primitive.${r}`), i = d.forwardRef((s, f) => {
    const { asChild: p, ...v } = s, y = p ? l : r;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), S.jsx(y, { ...v, ref: f });
  });
  return i.displayName = `Primitive.${r}`, { ...a, [r]: i };
}, {}), iM = "Label", L0 = d.forwardRef((a, r) => S.jsx(Zn.label, { ...a, ref: r, onMouseDown: (l) => {
  var _a;
  l.target.closest("button, input, select, textarea") || ((_a = a.onMouseDown) == null ? void 0 : _a.call(a, l), !l.defaultPrevented && l.detail > 1 && l.preventDefault());
} }));
L0.displayName = iM;
var F4 = L0;
function cM(a, r) {
  const l = d.createContext(r), i = (f) => {
    const { children: p, ...v } = f, y = d.useMemo(() => v, Object.values(v));
    return S.jsx(l.Provider, { value: y, children: p });
  };
  i.displayName = a + "Provider";
  function s(f) {
    const p = d.useContext(l);
    if (p) return p;
    if (r !== void 0) return r;
    throw new Error(`\`${f}\` must be used within \`${a}\``);
  }
  return [i, s];
}
function Et(a, r = []) {
  let l = [];
  function i(f, p) {
    const v = d.createContext(p), y = l.length;
    l = [...l, p];
    const m = (h) => {
      var _a;
      const { scope: E, children: w, ...M } = h, _ = ((_a = E == null ? void 0 : E[a]) == null ? void 0 : _a[y]) || v, C = d.useMemo(() => M, Object.values(M));
      return S.jsx(_.Provider, { value: C, children: w });
    };
    m.displayName = f + "Provider";
    function b(h, E) {
      var _a;
      const w = ((_a = E == null ? void 0 : E[a]) == null ? void 0 : _a[y]) || v, M = d.useContext(w);
      if (M) return M;
      if (p !== void 0) return p;
      throw new Error(`\`${h}\` must be used within \`${f}\``);
    }
    return [m, b];
  }
  const s = () => {
    const f = l.map((p) => d.createContext(p));
    return function(v) {
      const y = (v == null ? void 0 : v[a]) || f;
      return d.useMemo(() => ({ [`__scope${a}`]: { ...v, [a]: y } }), [v, y]);
    };
  };
  return s.scopeName = a, [i, uM(s, ...r)];
}
function uM(...a) {
  const r = a[0];
  if (a.length === 1) return r;
  const l = () => {
    const i = a.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function(f) {
      const p = i.reduce((v, { useScope: y, scopeName: m }) => {
        const h = y(f)[`__scope${m}`];
        return { ...v, ...h };
      }, {});
      return d.useMemo(() => ({ [`__scope${r.scopeName}`]: p }), [p]);
    };
  };
  return l.scopeName = r.scopeName, l;
}
var xt = (globalThis == null ? void 0 : globalThis.document) ? d.useLayoutEffect : () => {
}, sM = sc[" useId ".trim().toString()] || (() => {
}), fM = 0;
function Xe(a) {
  const [r, l] = d.useState(sM());
  return xt(() => {
    l((i) => i ?? String(fM++));
  }, [a]), a || (r ? `radix-${r}` : "");
}
var dM = sc[" useInsertionEffect ".trim().toString()] || xt;
function Nt({ prop: a, defaultProp: r, onChange: l = () => {
}, caller: i }) {
  const [s, f, p] = pM({ defaultProp: r, onChange: l }), v = a !== void 0, y = v ? a : s;
  {
    const b = d.useRef(a !== void 0);
    d.useEffect(() => {
      const h = b.current;
      h !== v && console.warn(`${i} is changing from ${h ? "controlled" : "uncontrolled"} to ${v ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), b.current = v;
    }, [v, i]);
  }
  const m = d.useCallback((b) => {
    var _a;
    if (v) {
      const h = hM(b) ? b(a) : b;
      h !== a && ((_a = p.current) == null ? void 0 : _a.call(p, h));
    } else f(b);
  }, [v, a, f, p]);
  return [y, m];
}
function pM({ defaultProp: a, onChange: r }) {
  const [l, i] = d.useState(a), s = d.useRef(l), f = d.useRef(r);
  return dM(() => {
    f.current = r;
  }, [r]), d.useEffect(() => {
    var _a;
    s.current !== l && ((_a = f.current) == null ? void 0 : _a.call(f, l), s.current = l);
  }, [l, s]), [l, i, f];
}
function hM(a) {
  return typeof a == "function";
}
function ao(a) {
  const r = mM(a), l = d.forwardRef((i, s) => {
    const { children: f, ...p } = i, v = d.Children.toArray(f), y = v.find(vM);
    if (y) {
      const m = y.props.children, b = v.map((h) => h === y ? d.Children.count(m) > 1 ? d.Children.only(null) : d.isValidElement(m) ? m.props.children : null : h);
      return S.jsx(r, { ...p, ref: s, children: d.isValidElement(m) ? d.cloneElement(m, void 0, b) : null });
    }
    return S.jsx(r, { ...p, ref: s, children: f });
  });
  return l.displayName = `${a}.Slot`, l;
}
function mM(a) {
  const r = d.forwardRef((l, i) => {
    const { children: s, ...f } = l;
    if (d.isValidElement(s)) {
      const p = yM(s), v = gM(f, s.props);
      return s.type !== d.Fragment && (v.ref = i ? An(i, p) : p), d.cloneElement(s, v);
    }
    return d.Children.count(s) > 1 ? d.Children.only(null) : null;
  });
  return r.displayName = `${a}.SlotClone`, r;
}
var H0 = /* @__PURE__ */ Symbol("radix.slottable");
function U0(a) {
  const r = ({ children: l }) => S.jsx(S.Fragment, { children: l });
  return r.displayName = `${a}.Slottable`, r.__radixId = H0, r;
}
function vM(a) {
  return d.isValidElement(a) && typeof a.type == "function" && "__radixId" in a.type && a.type.__radixId === H0;
}
function gM(a, r) {
  const l = { ...r };
  for (const i in r) {
    const s = a[i], f = r[i];
    /^on[A-Z]/.test(i) ? s && f ? l[i] = (...v) => {
      const y = f(...v);
      return s(...v), y;
    } : s && (l[i] = s) : i === "style" ? l[i] = { ...s, ...f } : i === "className" && (l[i] = [s, f].filter(Boolean).join(" "));
  }
  return { ...a, ...l };
}
function yM(a) {
  var _a, _b2;
  let r = (_a = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : _a.get, l = r && "isReactWarning" in r && r.isReactWarning;
  return l ? a.ref : (r = (_b2 = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : _b2.get, l = r && "isReactWarning" in r && r.isReactWarning, l ? a.props.ref : a.props.ref || a.ref);
}
var bM = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], fe = bM.reduce((a, r) => {
  const l = ao(`Primitive.${r}`), i = d.forwardRef((s, f) => {
    const { asChild: p, ...v } = s, y = p ? l : r;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), S.jsx(y, { ...v, ref: f });
  });
  return i.displayName = `Primitive.${r}`, { ...a, [r]: i };
}, {});
function B0(a, r) {
  a && il.flushSync(() => a.dispatchEvent(r));
}
function gn(a) {
  const r = d.useRef(a);
  return d.useEffect(() => {
    r.current = a;
  }), d.useMemo(() => (...l) => {
    var _a;
    return (_a = r.current) == null ? void 0 : _a.call(r, ...l);
  }, []);
}
function SM(a, r = globalThis == null ? void 0 : globalThis.document) {
  const l = gn(a);
  d.useEffect(() => {
    const i = (s) => {
      s.key === "Escape" && l(s);
    };
    return r.addEventListener("keydown", i, { capture: true }), () => r.removeEventListener("keydown", i, { capture: true });
  }, [l, r]);
}
var xM = "DismissableLayer", wf = "dismissableLayer.update", EM = "dismissableLayer.pointerDownOutside", _M = "dismissableLayer.focusOutside", a0, I0 = d.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), cl = d.forwardRef((a, r) => {
  const { disableOutsidePointerEvents: l = false, onEscapeKeyDown: i, onPointerDownOutside: s, onFocusOutside: f, onInteractOutside: p, onDismiss: v, ...y } = a, m = d.useContext(I0), [b, h] = d.useState(null), E = (b == null ? void 0 : b.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = d.useState({}), M = Ee(r, (V) => h(V)), _ = Array.from(m.layers), [C] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), R = _.indexOf(C), O = b ? _.indexOf(b) : -1, k = m.layersWithOutsidePointerEventsDisabled.size > 0, I = O >= R, Z = RM((V) => {
    const oe = V.target, ge = [...m.branches].some((ve) => ve.contains(oe));
    !I || ge || (s == null ? void 0 : s(V), p == null ? void 0 : p(V), V.defaultPrevented || (v == null ? void 0 : v()));
  }, E), F = wM((V) => {
    const oe = V.target;
    [...m.branches].some((ve) => ve.contains(oe)) || (f == null ? void 0 : f(V), p == null ? void 0 : p(V), V.defaultPrevented || (v == null ? void 0 : v()));
  }, E);
  return SM((V) => {
    O === m.layers.size - 1 && (i == null ? void 0 : i(V), !V.defaultPrevented && v && (V.preventDefault(), v()));
  }, E), d.useEffect(() => {
    if (b) return l && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (a0 = E.body.style.pointerEvents, E.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(b)), m.layers.add(b), o0(), () => {
      l && m.layersWithOutsidePointerEventsDisabled.size === 1 && (E.body.style.pointerEvents = a0);
    };
  }, [b, E, l, m]), d.useEffect(() => () => {
    b && (m.layers.delete(b), m.layersWithOutsidePointerEventsDisabled.delete(b), o0());
  }, [b, m]), d.useEffect(() => {
    const V = () => w({});
    return document.addEventListener(wf, V), () => document.removeEventListener(wf, V);
  }, []), S.jsx(fe.div, { ...y, ref: M, style: { pointerEvents: k ? I ? "auto" : "none" : void 0, ...a.style }, onFocusCapture: ne(a.onFocusCapture, F.onFocusCapture), onBlurCapture: ne(a.onBlurCapture, F.onBlurCapture), onPointerDownCapture: ne(a.onPointerDownCapture, Z.onPointerDownCapture) });
});
cl.displayName = xM;
var CM = "DismissableLayerBranch", MM = d.forwardRef((a, r) => {
  const l = d.useContext(I0), i = d.useRef(null), s = Ee(r, i);
  return d.useEffect(() => {
    const f = i.current;
    if (f) return l.branches.add(f), () => {
      l.branches.delete(f);
    };
  }, [l.branches]), S.jsx(fe.div, { ...a, ref: s });
});
MM.displayName = CM;
function RM(a, r = globalThis == null ? void 0 : globalThis.document) {
  const l = gn(a), i = d.useRef(false), s = d.useRef(() => {
  });
  return d.useEffect(() => {
    const f = (v) => {
      if (v.target && !i.current) {
        let y = function() {
          P0(EM, l, m, { discrete: true });
        };
        const m = { originalEvent: v };
        v.pointerType === "touch" ? (r.removeEventListener("click", s.current), s.current = y, r.addEventListener("click", s.current, { once: true })) : y();
      } else r.removeEventListener("click", s.current);
      i.current = false;
    }, p = window.setTimeout(() => {
      r.addEventListener("pointerdown", f);
    }, 0);
    return () => {
      window.clearTimeout(p), r.removeEventListener("pointerdown", f), r.removeEventListener("click", s.current);
    };
  }, [r, l]), { onPointerDownCapture: () => i.current = true };
}
function wM(a, r = globalThis == null ? void 0 : globalThis.document) {
  const l = gn(a), i = d.useRef(false);
  return d.useEffect(() => {
    const s = (f) => {
      f.target && !i.current && P0(_M, l, { originalEvent: f }, { discrete: false });
    };
    return r.addEventListener("focusin", s), () => r.removeEventListener("focusin", s);
  }, [r, l]), { onFocusCapture: () => i.current = true, onBlurCapture: () => i.current = false };
}
function o0() {
  const a = new CustomEvent(wf);
  document.dispatchEvent(a);
}
function P0(a, r, l, { discrete: i }) {
  const s = l.originalEvent.target, f = new CustomEvent(a, { bubbles: false, cancelable: true, detail: l });
  r && s.addEventListener(a, r, { once: true }), i ? B0(s, f) : s.dispatchEvent(f);
}
var ff = "focusScope.autoFocusOnMount", df = "focusScope.autoFocusOnUnmount", l0 = { bubbles: false, cancelable: true }, TM = "FocusScope", yr = d.forwardRef((a, r) => {
  const { loop: l = false, trapped: i = false, onMountAutoFocus: s, onUnmountAutoFocus: f, ...p } = a, [v, y] = d.useState(null), m = gn(s), b = gn(f), h = d.useRef(null), E = Ee(r, (_) => y(_)), w = d.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  d.useEffect(() => {
    if (i) {
      let _ = function(k) {
        if (w.paused || !v) return;
        const I = k.target;
        v.contains(I) ? h.current = I : Ma(h.current, { select: true });
      }, C = function(k) {
        if (w.paused || !v) return;
        const I = k.relatedTarget;
        I !== null && (v.contains(I) || Ma(h.current, { select: true }));
      }, R = function(k) {
        if (document.activeElement === document.body) for (const Z of k) Z.removedNodes.length > 0 && Ma(v);
      };
      document.addEventListener("focusin", _), document.addEventListener("focusout", C);
      const O = new MutationObserver(R);
      return v && O.observe(v, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", _), document.removeEventListener("focusout", C), O.disconnect();
      };
    }
  }, [i, v, w.paused]), d.useEffect(() => {
    if (v) {
      i0.add(w);
      const _ = document.activeElement;
      if (!v.contains(_)) {
        const R = new CustomEvent(ff, l0);
        v.addEventListener(ff, m), v.dispatchEvent(R), R.defaultPrevented || (AM(jM(q0(v)), { select: true }), document.activeElement === _ && Ma(v));
      }
      return () => {
        v.removeEventListener(ff, m), setTimeout(() => {
          const R = new CustomEvent(df, l0);
          v.addEventListener(df, b), v.dispatchEvent(R), R.defaultPrevented || Ma(_ ?? document.body, { select: true }), v.removeEventListener(df, b), i0.remove(w);
        }, 0);
      };
    }
  }, [v, m, b, w]);
  const M = d.useCallback((_) => {
    if (!l && !i || w.paused) return;
    const C = _.key === "Tab" && !_.altKey && !_.ctrlKey && !_.metaKey, R = document.activeElement;
    if (C && R) {
      const O = _.currentTarget, [k, I] = NM(O);
      k && I ? !_.shiftKey && R === I ? (_.preventDefault(), l && Ma(k, { select: true })) : _.shiftKey && R === k && (_.preventDefault(), l && Ma(I, { select: true })) : R === O && _.preventDefault();
    }
  }, [l, i, w.paused]);
  return S.jsx(fe.div, { tabIndex: -1, ...p, ref: E, onKeyDown: M });
});
yr.displayName = TM;
function AM(a, { select: r = false } = {}) {
  const l = document.activeElement;
  for (const i of a) if (Ma(i, { select: r }), document.activeElement !== l) return;
}
function NM(a) {
  const r = q0(a), l = r0(r, a), i = r0(r.reverse(), a);
  return [l, i];
}
function q0(a) {
  const r = [], l = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, { acceptNode: (i) => {
    const s = i.tagName === "INPUT" && i.type === "hidden";
    return i.disabled || i.hidden || s ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; l.nextNode(); ) r.push(l.currentNode);
  return r;
}
function r0(a, r) {
  for (const l of a) if (!DM(l, { upTo: r })) return l;
}
function DM(a, { upTo: r }) {
  if (getComputedStyle(a).visibility === "hidden") return true;
  for (; a; ) {
    if (r !== void 0 && a === r) return false;
    if (getComputedStyle(a).display === "none") return true;
    a = a.parentElement;
  }
  return false;
}
function OM(a) {
  return a instanceof HTMLInputElement && "select" in a;
}
function Ma(a, { select: r = false } = {}) {
  if (a && a.focus) {
    const l = document.activeElement;
    a.focus({ preventScroll: true }), a !== l && OM(a) && r && a.select();
  }
}
var i0 = zM();
function zM() {
  let a = [];
  return { add(r) {
    const l = a[0];
    r !== l && (l == null ? void 0 : l.pause()), a = c0(a, r), a.unshift(r);
  }, remove(r) {
    var _a;
    a = c0(a, r), (_a = a[0]) == null ? void 0 : _a.resume();
  } };
}
function c0(a, r) {
  const l = [...a], i = l.indexOf(r);
  return i !== -1 && l.splice(i, 1), l;
}
function jM(a) {
  return a.filter((r) => r.tagName !== "A");
}
var kM = "Portal", br = d.forwardRef((a, r) => {
  var _a;
  const { container: l, ...i } = a, [s, f] = d.useState(false);
  xt(() => f(true), []);
  const p = l || s && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return p ? A0.createPortal(S.jsx(fe.div, { ...i, ref: r }), p) : null;
});
br.displayName = kM;
function LM(a, r) {
  return d.useReducer((l, i) => r[l][i] ?? l, a);
}
var Vt = (a) => {
  const { present: r, children: l } = a, i = HM(r), s = typeof l == "function" ? l({ present: i.isPresent }) : d.Children.only(l), f = Ee(i.ref, UM(s));
  return typeof l == "function" || i.isPresent ? d.cloneElement(s, { ref: f }) : null;
};
Vt.displayName = "Presence";
function HM(a) {
  const [r, l] = d.useState(), i = d.useRef(null), s = d.useRef(a), f = d.useRef("none"), p = a ? "mounted" : "unmounted", [v, y] = LM(p, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return d.useEffect(() => {
    const m = Gi(i.current);
    f.current = v === "mounted" ? m : "none";
  }, [v]), xt(() => {
    const m = i.current, b = s.current;
    if (b !== a) {
      const E = f.current, w = Gi(m);
      a ? y("MOUNT") : w === "none" || (m == null ? void 0 : m.display) === "none" ? y("UNMOUNT") : y(b && E !== w ? "ANIMATION_OUT" : "UNMOUNT"), s.current = a;
    }
  }, [a, y]), xt(() => {
    if (r) {
      let m;
      const b = r.ownerDocument.defaultView ?? window, h = (w) => {
        const _ = Gi(i.current).includes(CSS.escape(w.animationName));
        if (w.target === r && _ && (y("ANIMATION_END"), !s.current)) {
          const C = r.style.animationFillMode;
          r.style.animationFillMode = "forwards", m = b.setTimeout(() => {
            r.style.animationFillMode === "forwards" && (r.style.animationFillMode = C);
          });
        }
      }, E = (w) => {
        w.target === r && (f.current = Gi(i.current));
      };
      return r.addEventListener("animationstart", E), r.addEventListener("animationcancel", h), r.addEventListener("animationend", h), () => {
        b.clearTimeout(m), r.removeEventListener("animationstart", E), r.removeEventListener("animationcancel", h), r.removeEventListener("animationend", h);
      };
    } else y("ANIMATION_END");
  }, [r, y]), { isPresent: ["mounted", "unmountSuspended"].includes(v), ref: d.useCallback((m) => {
    i.current = m ? getComputedStyle(m) : null, l(m);
  }, []) };
}
function Gi(a) {
  return (a == null ? void 0 : a.animationName) || "none";
}
function UM(a) {
  var _a, _b2;
  let r = (_a = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : _a.get, l = r && "isReactWarning" in r && r.isReactWarning;
  return l ? a.ref : (r = (_b2 = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : _b2.get, l = r && "isReactWarning" in r && r.isReactWarning, l ? a.props.ref : a.props.ref || a.ref);
}
var pf = 0;
function pc() {
  d.useEffect(() => {
    const a = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", a[0] ?? u0()), document.body.insertAdjacentElement("beforeend", a[1] ?? u0()), pf++, () => {
      pf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), pf--;
    };
  }, []);
}
function u0() {
  const a = document.createElement("span");
  return a.setAttribute("data-radix-focus-guard", ""), a.tabIndex = 0, a.style.outline = "none", a.style.opacity = "0", a.style.position = "fixed", a.style.pointerEvents = "none", a;
}
var $i = "right-scroll-bar-position", Qi = "width-before-scroll-bar", BM = "with-scroll-bars-hidden", IM = "--removed-body-scroll-bar-size";
function hf(a, r) {
  return typeof a == "function" ? a(r) : a && (a.current = r), a;
}
function PM(a, r) {
  var l = d.useState(function() {
    return { value: a, callback: r, facade: { get current() {
      return l.value;
    }, set current(i) {
      var s = l.value;
      s !== i && (l.value = i, l.callback(i, s));
    } } };
  })[0];
  return l.callback = r, l.facade;
}
var qM = typeof window < "u" ? d.useLayoutEffect : d.useEffect, s0 = /* @__PURE__ */ new WeakMap();
function VM(a, r) {
  var l = PM(null, function(i) {
    return a.forEach(function(s) {
      return hf(s, i);
    });
  });
  return qM(function() {
    var i = s0.get(l);
    if (i) {
      var s = new Set(i), f = new Set(a), p = l.current;
      s.forEach(function(v) {
        f.has(v) || hf(v, null);
      }), f.forEach(function(v) {
        s.has(v) || hf(v, p);
      });
    }
    s0.set(l, a);
  }, [a]), l;
}
function GM(a) {
  return a;
}
function YM(a, r) {
  r === void 0 && (r = GM);
  var l = [], i = false, s = { read: function() {
    if (i) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return l.length ? l[l.length - 1] : a;
  }, useMedium: function(f) {
    var p = r(f, i);
    return l.push(p), function() {
      l = l.filter(function(v) {
        return v !== p;
      });
    };
  }, assignSyncMedium: function(f) {
    for (i = true; l.length; ) {
      var p = l;
      l = [], p.forEach(f);
    }
    l = { push: function(v) {
      return f(v);
    }, filter: function() {
      return l;
    } };
  }, assignMedium: function(f) {
    i = true;
    var p = [];
    if (l.length) {
      var v = l;
      l = [], v.forEach(f), p = l;
    }
    var y = function() {
      var b = p;
      p = [], b.forEach(f);
    }, m = function() {
      return Promise.resolve().then(y);
    };
    m(), l = { push: function(b) {
      p.push(b), m();
    }, filter: function(b) {
      return p = p.filter(b), l;
    } };
  } };
  return s;
}
function KM(a) {
  a === void 0 && (a = {});
  var r = YM(null);
  return r.options = Ra({ async: true, ssr: false }, a), r;
}
var V0 = function(a) {
  var r = a.sideCar, l = C0(a, ["sideCar"]);
  if (!r) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var i = r.read();
  if (!i) throw new Error("Sidecar medium not found");
  return d.createElement(i, Ra({}, l));
};
V0.isSideCarExport = true;
function XM(a, r) {
  return a.useMedium(r), V0;
}
var G0 = KM(), mf = function() {
}, hc = d.forwardRef(function(a, r) {
  var l = d.useRef(null), i = d.useState({ onScrollCapture: mf, onWheelCapture: mf, onTouchMoveCapture: mf }), s = i[0], f = i[1], p = a.forwardProps, v = a.children, y = a.className, m = a.removeScrollBar, b = a.enabled, h = a.shards, E = a.sideCar, w = a.noRelative, M = a.noIsolation, _ = a.inert, C = a.allowPinchZoom, R = a.as, O = R === void 0 ? "div" : R, k = a.gapMode, I = C0(a, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), Z = E, F = VM([l, r]), V = Ra(Ra({}, I), s);
  return d.createElement(d.Fragment, null, b && d.createElement(Z, { sideCar: G0, removeScrollBar: m, shards: h, noRelative: w, noIsolation: M, inert: _, setCallbacks: f, allowPinchZoom: !!C, lockRef: l, gapMode: k }), p ? d.cloneElement(d.Children.only(v), Ra(Ra({}, V), { ref: F })) : d.createElement(O, Ra({}, V, { className: y, ref: F }), v));
});
hc.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
hc.classNames = { fullWidth: Qi, zeroRight: $i };
function $M() {
  if (!document) return null;
  var a = document.createElement("style");
  a.type = "text/css";
  var r = Mx();
  return r && a.setAttribute("nonce", r), a;
}
function QM(a, r) {
  a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r));
}
function ZM(a) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(a);
}
var FM = function() {
  var a = 0, r = null;
  return { add: function(l) {
    a == 0 && (r = $M()) && (QM(r, l), ZM(r)), a++;
  }, remove: function() {
    a--, !a && r && (r.parentNode && r.parentNode.removeChild(r), r = null);
  } };
}, JM = function() {
  var a = FM();
  return function(r, l) {
    d.useEffect(function() {
      return a.add(r), function() {
        a.remove();
      };
    }, [r && l]);
  };
}, Y0 = function() {
  var a = JM(), r = function(l) {
    var i = l.styles, s = l.dynamic;
    return a(i, s), null;
  };
  return r;
}, WM = { left: 0, top: 0, right: 0, gap: 0 }, vf = function(a) {
  return parseInt(a || "", 10) || 0;
}, eR = function(a) {
  var r = window.getComputedStyle(document.body), l = r[a === "padding" ? "paddingLeft" : "marginLeft"], i = r[a === "padding" ? "paddingTop" : "marginTop"], s = r[a === "padding" ? "paddingRight" : "marginRight"];
  return [vf(l), vf(i), vf(s)];
}, tR = function(a) {
  if (a === void 0 && (a = "margin"), typeof window > "u") return WM;
  var r = eR(a), l = document.documentElement.clientWidth, i = window.innerWidth;
  return { left: r[0], top: r[1], right: r[2], gap: Math.max(0, i - l + r[2] - r[0]) };
}, nR = Y0(), al = "data-scroll-locked", aR = function(a, r, l, i) {
  var s = a.left, f = a.top, p = a.right, v = a.gap;
  return l === void 0 && (l = "margin"), `
  .`.concat(BM, ` {
   overflow: hidden `).concat(i, `;
   padding-right: `).concat(v, "px ").concat(i, `;
  }
  body[`).concat(al, `] {
    overflow: hidden `).concat(i, `;
    overscroll-behavior: contain;
    `).concat([r && "position: relative ".concat(i, ";"), l === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(p, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(v, "px ").concat(i, `;
    `), l === "padding" && "padding-right: ".concat(v, "px ").concat(i, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat($i, ` {
    right: `).concat(v, "px ").concat(i, `;
  }
  
  .`).concat(Qi, ` {
    margin-right: `).concat(v, "px ").concat(i, `;
  }
  
  .`).concat($i, " .").concat($i, ` {
    right: 0 `).concat(i, `;
  }
  
  .`).concat(Qi, " .").concat(Qi, ` {
    margin-right: 0 `).concat(i, `;
  }
  
  body[`).concat(al, `] {
    `).concat(IM, ": ").concat(v, `px;
  }
`);
}, f0 = function() {
  var a = parseInt(document.body.getAttribute(al) || "0", 10);
  return isFinite(a) ? a : 0;
}, oR = function() {
  d.useEffect(function() {
    return document.body.setAttribute(al, (f0() + 1).toString()), function() {
      var a = f0() - 1;
      a <= 0 ? document.body.removeAttribute(al) : document.body.setAttribute(al, a.toString());
    };
  }, []);
}, lR = function(a) {
  var r = a.noRelative, l = a.noImportant, i = a.gapMode, s = i === void 0 ? "margin" : i;
  oR();
  var f = d.useMemo(function() {
    return tR(s);
  }, [s]);
  return d.createElement(nR, { styles: aR(f, !r, s, l ? "" : "!important") });
}, Tf = false;
if (typeof window < "u") try {
  var Yi = Object.defineProperty({}, "passive", { get: function() {
    return Tf = true, true;
  } });
  window.addEventListener("test", Yi, Yi), window.removeEventListener("test", Yi, Yi);
} catch {
  Tf = false;
}
var Jo = Tf ? { passive: false } : false, rR = function(a) {
  return a.tagName === "TEXTAREA";
}, K0 = function(a, r) {
  if (!(a instanceof Element)) return false;
  var l = window.getComputedStyle(a);
  return l[r] !== "hidden" && !(l.overflowY === l.overflowX && !rR(a) && l[r] === "visible");
}, iR = function(a) {
  return K0(a, "overflowY");
}, cR = function(a) {
  return K0(a, "overflowX");
}, d0 = function(a, r) {
  var l = r.ownerDocument, i = r;
  do {
    typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
    var s = X0(a, i);
    if (s) {
      var f = $0(a, i), p = f[1], v = f[2];
      if (p > v) return true;
    }
    i = i.parentNode;
  } while (i && i !== l.body);
  return false;
}, uR = function(a) {
  var r = a.scrollTop, l = a.scrollHeight, i = a.clientHeight;
  return [r, l, i];
}, sR = function(a) {
  var r = a.scrollLeft, l = a.scrollWidth, i = a.clientWidth;
  return [r, l, i];
}, X0 = function(a, r) {
  return a === "v" ? iR(r) : cR(r);
}, $0 = function(a, r) {
  return a === "v" ? uR(r) : sR(r);
}, fR = function(a, r) {
  return a === "h" && r === "rtl" ? -1 : 1;
}, dR = function(a, r, l, i, s) {
  var f = fR(a, window.getComputedStyle(r).direction), p = f * i, v = l.target, y = r.contains(v), m = false, b = p > 0, h = 0, E = 0;
  do {
    if (!v) break;
    var w = $0(a, v), M = w[0], _ = w[1], C = w[2], R = _ - C - f * M;
    (M || R) && X0(a, v) && (h += R, E += M);
    var O = v.parentNode;
    v = O && O.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? O.host : O;
  } while (!y && v !== document.body || y && (r.contains(v) || r === v));
  return (b && Math.abs(h) < 1 || !b && Math.abs(E) < 1) && (m = true), m;
}, Ki = function(a) {
  return "changedTouches" in a ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY] : [0, 0];
}, p0 = function(a) {
  return [a.deltaX, a.deltaY];
}, h0 = function(a) {
  return a && "current" in a ? a.current : a;
}, pR = function(a, r) {
  return a[0] === r[0] && a[1] === r[1];
}, hR = function(a) {
  return `
  .block-interactivity-`.concat(a, ` {pointer-events: none;}
  .allow-interactivity-`).concat(a, ` {pointer-events: all;}
`);
}, mR = 0, Wo = [];
function vR(a) {
  var r = d.useRef([]), l = d.useRef([0, 0]), i = d.useRef(), s = d.useState(mR++)[0], f = d.useState(Y0)[0], p = d.useRef(a);
  d.useEffect(function() {
    p.current = a;
  }, [a]), d.useEffect(function() {
    if (a.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var _ = Rx([a.lockRef.current], (a.shards || []).map(h0), true).filter(Boolean);
      return _.forEach(function(C) {
        return C.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), _.forEach(function(C) {
          return C.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [a.inert, a.lockRef.current, a.shards]);
  var v = d.useCallback(function(_, C) {
    if ("touches" in _ && _.touches.length === 2 || _.type === "wheel" && _.ctrlKey) return !p.current.allowPinchZoom;
    var R = Ki(_), O = l.current, k = "deltaX" in _ ? _.deltaX : O[0] - R[0], I = "deltaY" in _ ? _.deltaY : O[1] - R[1], Z, F = _.target, V = Math.abs(k) > Math.abs(I) ? "h" : "v";
    if ("touches" in _ && V === "h" && F.type === "range") return false;
    var oe = window.getSelection(), ge = oe && oe.anchorNode, ve = ge ? ge === F || ge.contains(F) : false;
    if (ve) return false;
    var ue = d0(V, F);
    if (!ue) return true;
    if (ue ? Z = V : (Z = V === "v" ? "h" : "v", ue = d0(V, F)), !ue) return false;
    if (!i.current && "changedTouches" in _ && (k || I) && (i.current = Z), !Z) return true;
    var de = i.current || Z;
    return dR(de, C, _, de === "h" ? k : I);
  }, []), y = d.useCallback(function(_) {
    var C = _;
    if (!(!Wo.length || Wo[Wo.length - 1] !== f)) {
      var R = "deltaY" in C ? p0(C) : Ki(C), O = r.current.filter(function(Z) {
        return Z.name === C.type && (Z.target === C.target || C.target === Z.shadowParent) && pR(Z.delta, R);
      })[0];
      if (O && O.should) {
        C.cancelable && C.preventDefault();
        return;
      }
      if (!O) {
        var k = (p.current.shards || []).map(h0).filter(Boolean).filter(function(Z) {
          return Z.contains(C.target);
        }), I = k.length > 0 ? v(C, k[0]) : !p.current.noIsolation;
        I && C.cancelable && C.preventDefault();
      }
    }
  }, []), m = d.useCallback(function(_, C, R, O) {
    var k = { name: _, delta: C, target: R, should: O, shadowParent: gR(R) };
    r.current.push(k), setTimeout(function() {
      r.current = r.current.filter(function(I) {
        return I !== k;
      });
    }, 1);
  }, []), b = d.useCallback(function(_) {
    l.current = Ki(_), i.current = void 0;
  }, []), h = d.useCallback(function(_) {
    m(_.type, p0(_), _.target, v(_, a.lockRef.current));
  }, []), E = d.useCallback(function(_) {
    m(_.type, Ki(_), _.target, v(_, a.lockRef.current));
  }, []);
  d.useEffect(function() {
    return Wo.push(f), a.setCallbacks({ onScrollCapture: h, onWheelCapture: h, onTouchMoveCapture: E }), document.addEventListener("wheel", y, Jo), document.addEventListener("touchmove", y, Jo), document.addEventListener("touchstart", b, Jo), function() {
      Wo = Wo.filter(function(_) {
        return _ !== f;
      }), document.removeEventListener("wheel", y, Jo), document.removeEventListener("touchmove", y, Jo), document.removeEventListener("touchstart", b, Jo);
    };
  }, []);
  var w = a.removeScrollBar, M = a.inert;
  return d.createElement(d.Fragment, null, M ? d.createElement(f, { styles: hR(s) }) : null, w ? d.createElement(lR, { noRelative: a.noRelative, gapMode: a.gapMode }) : null);
}
function gR(a) {
  for (var r = null; a !== null; ) a instanceof ShadowRoot && (r = a.host, a = a.host), a = a.parentNode;
  return r;
}
const yR = XM(G0, vR);
var Sr = d.forwardRef(function(a, r) {
  return d.createElement(hc, Ra({}, a, { ref: r, sideCar: yR }));
});
Sr.classNames = hc.classNames;
var mc = "Dialog", [Q0, Z0] = Et(mc), [bR, yn] = Q0(mc), F0 = (a) => {
  const { __scopeDialog: r, children: l, open: i, defaultOpen: s, onOpenChange: f, modal: p = true } = a, v = d.useRef(null), y = d.useRef(null), [m, b] = Nt({ prop: i, defaultProp: s ?? false, onChange: f, caller: mc });
  return S.jsx(bR, { scope: r, triggerRef: v, contentRef: y, contentId: Xe(), titleId: Xe(), descriptionId: Xe(), open: m, onOpenChange: b, onOpenToggle: d.useCallback(() => b((h) => !h), [b]), modal: p, children: l });
};
F0.displayName = mc;
var J0 = "DialogTrigger", W0 = d.forwardRef((a, r) => {
  const { __scopeDialog: l, ...i } = a, s = yn(J0, l), f = Ee(r, s.triggerRef);
  return S.jsx(fe.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": s.open, "aria-controls": s.contentId, "data-state": ad(s.open), ...i, ref: f, onClick: ne(a.onClick, s.onOpenToggle) });
});
W0.displayName = J0;
var td = "DialogPortal", [SR, eg] = Q0(td, { forceMount: void 0 }), tg = (a) => {
  const { __scopeDialog: r, forceMount: l, children: i, container: s } = a, f = yn(td, r);
  return S.jsx(SR, { scope: r, forceMount: l, children: d.Children.map(i, (p) => S.jsx(Vt, { present: l || f.open, children: S.jsx(br, { asChild: true, container: s, children: p }) })) });
};
tg.displayName = td;
var tc = "DialogOverlay", ng = d.forwardRef((a, r) => {
  const l = eg(tc, a.__scopeDialog), { forceMount: i = l.forceMount, ...s } = a, f = yn(tc, a.__scopeDialog);
  return f.modal ? S.jsx(Vt, { present: i || f.open, children: S.jsx(ER, { ...s, ref: r }) }) : null;
});
ng.displayName = tc;
var xR = ao("DialogOverlay.RemoveScroll"), ER = d.forwardRef((a, r) => {
  const { __scopeDialog: l, ...i } = a, s = yn(tc, l);
  return S.jsx(Sr, { as: xR, allowPinchZoom: true, shards: [s.contentRef], children: S.jsx(fe.div, { "data-state": ad(s.open), ...i, ref: r, style: { pointerEvents: "auto", ...i.style } }) });
}), oo = "DialogContent", ag = d.forwardRef((a, r) => {
  const l = eg(oo, a.__scopeDialog), { forceMount: i = l.forceMount, ...s } = a, f = yn(oo, a.__scopeDialog);
  return S.jsx(Vt, { present: i || f.open, children: f.modal ? S.jsx(_R, { ...s, ref: r }) : S.jsx(CR, { ...s, ref: r }) });
});
ag.displayName = oo;
var _R = d.forwardRef((a, r) => {
  const l = yn(oo, a.__scopeDialog), i = d.useRef(null), s = Ee(r, l.contentRef, i);
  return d.useEffect(() => {
    const f = i.current;
    if (f) return uc(f);
  }, []), S.jsx(og, { ...a, ref: s, trapFocus: l.open, disableOutsidePointerEvents: true, onCloseAutoFocus: ne(a.onCloseAutoFocus, (f) => {
    var _a;
    f.preventDefault(), (_a = l.triggerRef.current) == null ? void 0 : _a.focus();
  }), onPointerDownOutside: ne(a.onPointerDownOutside, (f) => {
    const p = f.detail.originalEvent, v = p.button === 0 && p.ctrlKey === true;
    (p.button === 2 || v) && f.preventDefault();
  }), onFocusOutside: ne(a.onFocusOutside, (f) => f.preventDefault()) });
}), CR = d.forwardRef((a, r) => {
  const l = yn(oo, a.__scopeDialog), i = d.useRef(false), s = d.useRef(false);
  return S.jsx(og, { ...a, ref: r, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (f) => {
    var _a, _b2;
    (_a = a.onCloseAutoFocus) == null ? void 0 : _a.call(a, f), f.defaultPrevented || (i.current || ((_b2 = l.triggerRef.current) == null ? void 0 : _b2.focus()), f.preventDefault()), i.current = false, s.current = false;
  }, onInteractOutside: (f) => {
    var _a, _b2;
    (_a = a.onInteractOutside) == null ? void 0 : _a.call(a, f), f.defaultPrevented || (i.current = true, f.detail.originalEvent.type === "pointerdown" && (s.current = true));
    const p = f.target;
    ((_b2 = l.triggerRef.current) == null ? void 0 : _b2.contains(p)) && f.preventDefault(), f.detail.originalEvent.type === "focusin" && s.current && f.preventDefault();
  } });
}), og = d.forwardRef((a, r) => {
  const { __scopeDialog: l, trapFocus: i, onOpenAutoFocus: s, onCloseAutoFocus: f, ...p } = a, v = yn(oo, l), y = d.useRef(null), m = Ee(r, y);
  return pc(), S.jsxs(S.Fragment, { children: [S.jsx(yr, { asChild: true, loop: true, trapped: i, onMountAutoFocus: s, onUnmountAutoFocus: f, children: S.jsx(cl, { role: "dialog", id: v.contentId, "aria-describedby": v.descriptionId, "aria-labelledby": v.titleId, "data-state": ad(v.open), ...p, ref: m, onDismiss: () => v.onOpenChange(false) }) }), S.jsxs(S.Fragment, { children: [S.jsx(RR, { titleId: v.titleId }), S.jsx(TR, { contentRef: y, descriptionId: v.descriptionId })] })] });
}), nd = "DialogTitle", lg = d.forwardRef((a, r) => {
  const { __scopeDialog: l, ...i } = a, s = yn(nd, l);
  return S.jsx(fe.h2, { id: s.titleId, ...i, ref: r });
});
lg.displayName = nd;
var rg = "DialogDescription", ig = d.forwardRef((a, r) => {
  const { __scopeDialog: l, ...i } = a, s = yn(rg, l);
  return S.jsx(fe.p, { id: s.descriptionId, ...i, ref: r });
});
ig.displayName = rg;
var cg = "DialogClose", ug = d.forwardRef((a, r) => {
  const { __scopeDialog: l, ...i } = a, s = yn(cg, l);
  return S.jsx(fe.button, { type: "button", ...i, ref: r, onClick: ne(a.onClick, () => s.onOpenChange(false)) });
});
ug.displayName = cg;
function ad(a) {
  return a ? "open" : "closed";
}
var sg = "DialogTitleWarning", [MR, fg] = cM(sg, { contentName: oo, titleName: nd, docsSlug: "dialog" }), RR = ({ titleId: a }) => {
  const r = fg(sg), l = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;
  return d.useEffect(() => {
    a && (document.getElementById(a) || console.error(l));
  }, [l, a]), null;
}, wR = "DialogDescriptionWarning", TR = ({ contentRef: a, descriptionId: r }) => {
  const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${fg(wR).contentName}}.`;
  return d.useEffect(() => {
    var _a;
    const s = (_a = a.current) == null ? void 0 : _a.getAttribute("aria-describedby");
    r && s && (document.getElementById(r) || console.warn(i));
  }, [i, a, r]), null;
}, dg = F0, AR = W0, pg = tg, hg = ng, mg = ag, NR = lg, DR = ig, vg = ug;
function ul(a) {
  const r = a + "CollectionProvider", [l, i] = Et(r), [s, f] = l(r, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), p = (_) => {
    const { scope: C, children: R } = _, O = J.useRef(null), k = J.useRef(/* @__PURE__ */ new Map()).current;
    return S.jsx(s, { scope: C, itemMap: k, collectionRef: O, children: R });
  };
  p.displayName = r;
  const v = a + "CollectionSlot", y = ao(v), m = J.forwardRef((_, C) => {
    const { scope: R, children: O } = _, k = f(v, R), I = Ee(C, k.collectionRef);
    return S.jsx(y, { ref: I, children: O });
  });
  m.displayName = v;
  const b = a + "CollectionItemSlot", h = "data-radix-collection-item", E = ao(b), w = J.forwardRef((_, C) => {
    const { scope: R, children: O, ...k } = _, I = J.useRef(null), Z = Ee(C, I), F = f(b, R);
    return J.useEffect(() => (F.itemMap.set(I, { ref: I, ...k }), () => {
      F.itemMap.delete(I);
    })), S.jsx(E, { [h]: "", ref: Z, children: O });
  });
  w.displayName = b;
  function M(_) {
    const C = f(a + "CollectionConsumer", _);
    return J.useCallback(() => {
      const O = C.collectionRef.current;
      if (!O) return [];
      const k = Array.from(O.querySelectorAll(`[${h}]`));
      return Array.from(C.itemMap.values()).sort((F, V) => k.indexOf(F.ref.current) - k.indexOf(V.ref.current));
    }, [C.collectionRef, C.itemMap]);
  }
  return [{ Provider: p, Slot: m, ItemSlot: w }, M, i];
}
var OR = d.createContext(void 0);
function co(a) {
  const r = d.useContext(OR);
  return a || r || "ltr";
}
var zR = typeof document < "u", jR = function() {
}, Zi = zR ? d.useLayoutEffect : jR;
function nc(a, r) {
  if (a === r) return true;
  if (typeof a != typeof r) return false;
  if (typeof a == "function" && a.toString() === r.toString()) return true;
  let l, i, s;
  if (a && r && typeof a == "object") {
    if (Array.isArray(a)) {
      if (l = a.length, l !== r.length) return false;
      for (i = l; i-- !== 0; ) if (!nc(a[i], r[i])) return false;
      return true;
    }
    if (s = Object.keys(a), l = s.length, l !== Object.keys(r).length) return false;
    for (i = l; i-- !== 0; ) if (!{}.hasOwnProperty.call(r, s[i])) return false;
    for (i = l; i-- !== 0; ) {
      const f = s[i];
      if (!(f === "_owner" && a.$$typeof) && !nc(a[f], r[f])) return false;
    }
    return true;
  }
  return a !== a && r !== r;
}
function gg(a) {
  return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function m0(a, r) {
  const l = gg(a);
  return Math.round(r * l) / l;
}
function gf(a) {
  const r = d.useRef(a);
  return Zi(() => {
    r.current = a;
  }), r;
}
function kR(a) {
  a === void 0 && (a = {});
  const { placement: r = "bottom", strategy: l = "absolute", middleware: i = [], platform: s, elements: { reference: f, floating: p } = {}, transform: v = true, whileElementsMounted: y, open: m } = a, [b, h] = d.useState({ x: 0, y: 0, strategy: l, placement: r, middlewareData: {}, isPositioned: false }), [E, w] = d.useState(i);
  nc(E, i) || w(i);
  const [M, _] = d.useState(null), [C, R] = d.useState(null), O = d.useCallback((W) => {
    W !== F.current && (F.current = W, _(W));
  }, []), k = d.useCallback((W) => {
    W !== V.current && (V.current = W, R(W));
  }, []), I = f || M, Z = p || C, F = d.useRef(null), V = d.useRef(null), oe = d.useRef(b), ge = y != null, ve = gf(y), ue = gf(s), de = gf(m), he = d.useCallback(() => {
    if (!F.current || !V.current) return;
    const W = { placement: r, strategy: l, middleware: E };
    ue.current && (W.platform = ue.current), wx(F.current, V.current, W).then((ee) => {
      const re = { ...ee, isPositioned: de.current !== false };
      be.current && !nc(oe.current, re) && (oe.current = re, il.flushSync(() => {
        h(re);
      }));
    });
  }, [E, r, l, ue, de]);
  Zi(() => {
    m === false && oe.current.isPositioned && (oe.current.isPositioned = false, h((W) => ({ ...W, isPositioned: false })));
  }, [m]);
  const be = d.useRef(false);
  Zi(() => (be.current = true, () => {
    be.current = false;
  }), []), Zi(() => {
    if (I && (F.current = I), Z && (V.current = Z), I && Z) {
      if (ve.current) return ve.current(I, Z, he);
      he();
    }
  }, [I, Z, he, ve, ge]);
  const ye = d.useMemo(() => ({ reference: F, floating: V, setReference: O, setFloating: k }), [O, k]), z = d.useMemo(() => ({ reference: I, floating: Z }), [I, Z]), X = d.useMemo(() => {
    const W = { position: l, left: 0, top: 0 };
    if (!z.floating) return W;
    const ee = m0(z.floating, b.x), re = m0(z.floating, b.y);
    return v ? { ...W, transform: "translate(" + ee + "px, " + re + "px)", ...gg(z.floating) >= 1.5 && { willChange: "transform" } } : { position: l, left: ee, top: re };
  }, [l, v, z.floating, b.x, b.y]);
  return d.useMemo(() => ({ ...b, update: he, refs: ye, elements: z, floatingStyles: X }), [b, he, ye, z, X]);
}
const LR = (a) => {
  function r(l) {
    return {}.hasOwnProperty.call(l, "current");
  }
  return { name: "arrow", options: a, fn(l) {
    const { element: i, padding: s } = typeof a == "function" ? a(l) : a;
    return i && r(i) ? i.current != null ? Av({ element: i.current, padding: s }).fn(l) : {} : i ? Av({ element: i, padding: s }).fn(l) : {};
  } };
}, HR = (a, r) => ({ ...Tx(a), options: [a, r] }), UR = (a, r) => ({ ...Ax(a), options: [a, r] }), BR = (a, r) => ({ ...zx(a), options: [a, r] }), IR = (a, r) => ({ ...Nx(a), options: [a, r] }), PR = (a, r) => ({ ...Dx(a), options: [a, r] }), qR = (a, r) => ({ ...Ox(a), options: [a, r] }), VR = (a, r) => ({ ...LR(a), options: [a, r] });
var GR = "Arrow", yg = d.forwardRef((a, r) => {
  const { children: l, width: i = 10, height: s = 5, ...f } = a;
  return S.jsx(fe.svg, { ...f, ref: r, width: i, height: s, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: a.asChild ? l : S.jsx("polygon", { points: "0,0 30,0 15,10" }) });
});
yg.displayName = GR;
var YR = yg;
function vc(a) {
  const [r, l] = d.useState(void 0);
  return xt(() => {
    if (a) {
      l({ width: a.offsetWidth, height: a.offsetHeight });
      const i = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length) return;
        const f = s[0];
        let p, v;
        if ("borderBoxSize" in f) {
          const y = f.borderBoxSize, m = Array.isArray(y) ? y[0] : y;
          p = m.inlineSize, v = m.blockSize;
        } else p = a.offsetWidth, v = a.offsetHeight;
        l({ width: p, height: v });
      });
      return i.observe(a, { box: "border-box" }), () => i.unobserve(a);
    } else l(void 0);
  }, [a]), r;
}
var od = "Popper", [bg, Na] = Et(od), [KR, Sg] = bg(od), xg = (a) => {
  const { __scopePopper: r, children: l } = a, [i, s] = d.useState(null);
  return S.jsx(KR, { scope: r, anchor: i, onAnchorChange: s, children: l });
};
xg.displayName = od;
var Eg = "PopperAnchor", _g = d.forwardRef((a, r) => {
  const { __scopePopper: l, virtualRef: i, ...s } = a, f = Sg(Eg, l), p = d.useRef(null), v = Ee(r, p), y = d.useRef(null);
  return d.useEffect(() => {
    const m = y.current;
    y.current = (i == null ? void 0 : i.current) || p.current, m !== y.current && f.onAnchorChange(y.current);
  }), i ? null : S.jsx(fe.div, { ...s, ref: v });
});
_g.displayName = Eg;
var ld = "PopperContent", [XR, $R] = bg(ld), Cg = d.forwardRef((a, r) => {
  var _a, _b2, _c2, _d2, _e2, _f2;
  const { __scopePopper: l, side: i = "bottom", sideOffset: s = 0, align: f = "center", alignOffset: p = 0, arrowPadding: v = 0, avoidCollisions: y = true, collisionBoundary: m = [], collisionPadding: b = 0, sticky: h = "partial", hideWhenDetached: E = false, updatePositionStrategy: w = "optimized", onPlaced: M, ..._ } = a, C = Sg(ld, l), [R, O] = d.useState(null), k = Ee(r, (Y) => O(Y)), [I, Z] = d.useState(null), F = vc(I), V = (F == null ? void 0 : F.width) ?? 0, oe = (F == null ? void 0 : F.height) ?? 0, ge = i + (f !== "center" ? "-" + f : ""), ve = typeof b == "number" ? b : { top: 0, right: 0, bottom: 0, left: 0, ...b }, ue = Array.isArray(m) ? m : [m], de = ue.length > 0, he = { padding: ve, boundary: ue.filter(ZR), altBoundary: de }, { refs: be, floatingStyles: ye, placement: z, isPositioned: X, middlewareData: W } = kR({ strategy: "fixed", placement: ge, whileElementsMounted: (...Y) => jx(...Y, { animationFrame: w === "always" }), elements: { reference: C.anchor }, middleware: [HR({ mainAxis: s + oe, alignmentAxis: p }), y && UR({ mainAxis: true, crossAxis: false, limiter: h === "partial" ? BR() : void 0, ...he }), y && IR({ ...he }), PR({ ...he, apply: ({ elements: Y, rects: ae, availableWidth: ce, availableHeight: Se }) => {
    const { width: Re, height: Oe } = ae.reference, tt = Y.floating.style;
    tt.setProperty("--radix-popper-available-width", `${ce}px`), tt.setProperty("--radix-popper-available-height", `${Se}px`), tt.setProperty("--radix-popper-anchor-width", `${Re}px`), tt.setProperty("--radix-popper-anchor-height", `${Oe}px`);
  } }), I && VR({ element: I, padding: v }), FR({ arrowWidth: V, arrowHeight: oe }), E && qR({ strategy: "referenceHidden", ...he })] }), [ee, re] = wg(z), A = gn(M);
  xt(() => {
    X && (A == null ? void 0 : A());
  }, [X, A]);
  const N = (_a = W.arrow) == null ? void 0 : _a.x, L = (_b2 = W.arrow) == null ? void 0 : _b2.y, P = ((_c2 = W.arrow) == null ? void 0 : _c2.centerOffset) !== 0, [G, te] = d.useState();
  return xt(() => {
    R && te(window.getComputedStyle(R).zIndex);
  }, [R]), S.jsx("div", { ref: be.setFloating, "data-radix-popper-content-wrapper": "", style: { ...ye, transform: X ? ye.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: G, "--radix-popper-transform-origin": [(_d2 = W.transformOrigin) == null ? void 0 : _d2.x, (_e2 = W.transformOrigin) == null ? void 0 : _e2.y].join(" "), ...((_f2 = W.hide) == null ? void 0 : _f2.referenceHidden) && { visibility: "hidden", pointerEvents: "none" } }, dir: a.dir, children: S.jsx(XR, { scope: l, placedSide: ee, onArrowChange: Z, arrowX: N, arrowY: L, shouldHideArrow: P, children: S.jsx(fe.div, { "data-side": ee, "data-align": re, ..._, ref: k, style: { ..._.style, animation: X ? void 0 : "none" } }) }) });
});
Cg.displayName = ld;
var Mg = "PopperArrow", QR = { top: "bottom", right: "left", bottom: "top", left: "right" }, Rg = d.forwardRef(function(r, l) {
  const { __scopePopper: i, ...s } = r, f = $R(Mg, i), p = QR[f.placedSide];
  return S.jsx("span", { ref: f.onArrowChange, style: { position: "absolute", left: f.arrowX, top: f.arrowY, [p]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[f.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[f.placedSide], visibility: f.shouldHideArrow ? "hidden" : void 0 }, children: S.jsx(YR, { ...s, ref: l, style: { ...s.style, display: "block" } }) });
});
Rg.displayName = Mg;
function ZR(a) {
  return a !== null;
}
var FR = (a) => ({ name: "transformOrigin", options: a, fn(r) {
  var _a, _b2, _c2;
  const { placement: l, rects: i, middlewareData: s } = r, p = ((_a = s.arrow) == null ? void 0 : _a.centerOffset) !== 0, v = p ? 0 : a.arrowWidth, y = p ? 0 : a.arrowHeight, [m, b] = wg(l), h = { start: "0%", center: "50%", end: "100%" }[b], E = (((_b2 = s.arrow) == null ? void 0 : _b2.x) ?? 0) + v / 2, w = (((_c2 = s.arrow) == null ? void 0 : _c2.y) ?? 0) + y / 2;
  let M = "", _ = "";
  return m === "bottom" ? (M = p ? h : `${E}px`, _ = `${-y}px`) : m === "top" ? (M = p ? h : `${E}px`, _ = `${i.floating.height + y}px`) : m === "right" ? (M = `${-y}px`, _ = p ? h : `${w}px`) : m === "left" && (M = `${i.floating.width + y}px`, _ = p ? h : `${w}px`), { data: { x: M, y: _ } };
} });
function wg(a) {
  const [r, l = "center"] = a.split("-");
  return [r, l];
}
var gc = xg, xr = _g, yc = Cg, bc = Rg;
function Sc(a) {
  const r = d.useRef({ value: a, previous: a });
  return d.useMemo(() => (r.current.value !== a && (r.current.previous = r.current.value, r.current.value = a), r.current.previous), [a]);
}
var Tg = Object.freeze({ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" }), JR = "VisuallyHidden", Ag = d.forwardRef((a, r) => S.jsx(fe.span, { ...a, ref: r, style: { ...Tg, ...a.style } }));
Ag.displayName = JR;
var WR = Ag, ew = [" ", "Enter", "ArrowUp", "ArrowDown"], tw = [" ", "Enter"], lo = "Select", [xc, Ec, nw] = ul(lo), [sl] = Et(lo, [nw, Na]), _c = Na(), [aw, Da] = sl(lo), [ow, lw] = sl(lo), Ng = (a) => {
  const { __scopeSelect: r, children: l, open: i, defaultOpen: s, onOpenChange: f, value: p, defaultValue: v, onValueChange: y, dir: m, name: b, autoComplete: h, disabled: E, required: w, form: M } = a, _ = _c(r), [C, R] = d.useState(null), [O, k] = d.useState(null), [I, Z] = d.useState(false), F = co(m), [V, oe] = Nt({ prop: i, defaultProp: s ?? false, onChange: f, caller: lo }), [ge, ve] = Nt({ prop: p, defaultProp: v, onChange: y, caller: lo }), ue = d.useRef(null), de = C ? M || !!C.closest("form") : true, [he, be] = d.useState(/* @__PURE__ */ new Set()), ye = Array.from(he).map((z) => z.props.value).join(";");
  return S.jsx(gc, { ..._, children: S.jsxs(aw, { required: w, scope: r, trigger: C, onTriggerChange: R, valueNode: O, onValueNodeChange: k, valueNodeHasChildren: I, onValueNodeHasChildrenChange: Z, contentId: Xe(), value: ge, onValueChange: ve, open: V, onOpenChange: oe, dir: F, triggerPointerDownPosRef: ue, disabled: E, children: [S.jsx(xc.Provider, { scope: r, children: S.jsx(ow, { scope: a.__scopeSelect, onNativeOptionAdd: d.useCallback((z) => {
    be((X) => new Set(X).add(z));
  }, []), onNativeOptionRemove: d.useCallback((z) => {
    be((X) => {
      const W = new Set(X);
      return W.delete(z), W;
    });
  }, []), children: l }) }), de ? S.jsxs(Jg, { "aria-hidden": true, required: w, tabIndex: -1, name: b, autoComplete: h, value: ge, onChange: (z) => ve(z.target.value), disabled: E, form: M, children: [ge === void 0 ? S.jsx("option", { value: "" }) : null, Array.from(he)] }, ye) : null] }) });
};
Ng.displayName = lo;
var Dg = "SelectTrigger", Og = d.forwardRef((a, r) => {
  const { __scopeSelect: l, disabled: i = false, ...s } = a, f = _c(l), p = Da(Dg, l), v = p.disabled || i, y = Ee(r, p.onTriggerChange), m = Ec(l), b = d.useRef("touch"), [h, E, w] = ey((_) => {
    const C = m().filter((k) => !k.disabled), R = C.find((k) => k.value === p.value), O = ty(C, _, R);
    O !== void 0 && p.onValueChange(O.value);
  }), M = (_) => {
    v || (p.onOpenChange(true), w()), _ && (p.triggerPointerDownPosRef.current = { x: Math.round(_.pageX), y: Math.round(_.pageY) });
  };
  return S.jsx(xr, { asChild: true, ...f, children: S.jsx(fe.button, { type: "button", role: "combobox", "aria-controls": p.contentId, "aria-expanded": p.open, "aria-required": p.required, "aria-autocomplete": "none", dir: p.dir, "data-state": p.open ? "open" : "closed", disabled: v, "data-disabled": v ? "" : void 0, "data-placeholder": Wg(p.value) ? "" : void 0, ...s, ref: y, onClick: ne(s.onClick, (_) => {
    _.currentTarget.focus(), b.current !== "mouse" && M(_);
  }), onPointerDown: ne(s.onPointerDown, (_) => {
    b.current = _.pointerType;
    const C = _.target;
    C.hasPointerCapture(_.pointerId) && C.releasePointerCapture(_.pointerId), _.button === 0 && _.ctrlKey === false && _.pointerType === "mouse" && (M(_), _.preventDefault());
  }), onKeyDown: ne(s.onKeyDown, (_) => {
    const C = h.current !== "";
    !(_.ctrlKey || _.altKey || _.metaKey) && _.key.length === 1 && E(_.key), !(C && _.key === " ") && ew.includes(_.key) && (M(), _.preventDefault());
  }) }) });
});
Og.displayName = Dg;
var zg = "SelectValue", jg = d.forwardRef((a, r) => {
  const { __scopeSelect: l, className: i, style: s, children: f, placeholder: p = "", ...v } = a, y = Da(zg, l), { onValueNodeHasChildrenChange: m } = y, b = f !== void 0, h = Ee(r, y.onValueNodeChange);
  return xt(() => {
    m(b);
  }, [m, b]), S.jsx(fe.span, { ...v, ref: h, style: { pointerEvents: "none" }, children: Wg(y.value) ? S.jsx(S.Fragment, { children: p }) : f });
});
jg.displayName = zg;
var rw = "SelectIcon", kg = d.forwardRef((a, r) => {
  const { __scopeSelect: l, children: i, ...s } = a;
  return S.jsx(fe.span, { "aria-hidden": true, ...s, ref: r, children: i || "\u25BC" });
});
kg.displayName = rw;
var iw = "SelectPortal", Lg = (a) => S.jsx(br, { asChild: true, ...a });
Lg.displayName = iw;
var ro = "SelectContent", Hg = d.forwardRef((a, r) => {
  const l = Da(ro, a.__scopeSelect), [i, s] = d.useState();
  if (xt(() => {
    s(new DocumentFragment());
  }, []), !l.open) {
    const f = i;
    return f ? il.createPortal(S.jsx(Ug, { scope: a.__scopeSelect, children: S.jsx(xc.Slot, { scope: a.__scopeSelect, children: S.jsx("div", { children: a.children }) }) }), f) : null;
  }
  return S.jsx(Bg, { ...a, ref: r });
});
Hg.displayName = ro;
var vn = 10, [Ug, Oa] = sl(ro), cw = "SelectContentImpl", uw = ao("SelectContent.RemoveScroll"), Bg = d.forwardRef((a, r) => {
  const { __scopeSelect: l, position: i = "item-aligned", onCloseAutoFocus: s, onEscapeKeyDown: f, onPointerDownOutside: p, side: v, sideOffset: y, align: m, alignOffset: b, arrowPadding: h, collisionBoundary: E, collisionPadding: w, sticky: M, hideWhenDetached: _, avoidCollisions: C, ...R } = a, O = Da(ro, l), [k, I] = d.useState(null), [Z, F] = d.useState(null), V = Ee(r, (Y) => I(Y)), [oe, ge] = d.useState(null), [ve, ue] = d.useState(null), de = Ec(l), [he, be] = d.useState(false), ye = d.useRef(false);
  d.useEffect(() => {
    if (k) return uc(k);
  }, [k]), pc();
  const z = d.useCallback((Y) => {
    const [ae, ...ce] = de().map((Oe) => Oe.ref.current), [Se] = ce.slice(-1), Re = document.activeElement;
    for (const Oe of Y) if (Oe === Re || (Oe == null ? void 0 : Oe.scrollIntoView({ block: "nearest" }), Oe === ae && Z && (Z.scrollTop = 0), Oe === Se && Z && (Z.scrollTop = Z.scrollHeight), Oe == null ? void 0 : Oe.focus(), document.activeElement !== Re)) return;
  }, [de, Z]), X = d.useCallback(() => z([oe, k]), [z, oe, k]);
  d.useEffect(() => {
    he && X();
  }, [he, X]);
  const { onOpenChange: W, triggerPointerDownPosRef: ee } = O;
  d.useEffect(() => {
    if (k) {
      let Y = { x: 0, y: 0 };
      const ae = (Se) => {
        var _a, _b2;
        Y = { x: Math.abs(Math.round(Se.pageX) - (((_a = ee.current) == null ? void 0 : _a.x) ?? 0)), y: Math.abs(Math.round(Se.pageY) - (((_b2 = ee.current) == null ? void 0 : _b2.y) ?? 0)) };
      }, ce = (Se) => {
        Y.x <= 10 && Y.y <= 10 ? Se.preventDefault() : k.contains(Se.target) || W(false), document.removeEventListener("pointermove", ae), ee.current = null;
      };
      return ee.current !== null && (document.addEventListener("pointermove", ae), document.addEventListener("pointerup", ce, { capture: true, once: true })), () => {
        document.removeEventListener("pointermove", ae), document.removeEventListener("pointerup", ce, { capture: true });
      };
    }
  }, [k, W, ee]), d.useEffect(() => {
    const Y = () => W(false);
    return window.addEventListener("blur", Y), window.addEventListener("resize", Y), () => {
      window.removeEventListener("blur", Y), window.removeEventListener("resize", Y);
    };
  }, [W]);
  const [re, A] = ey((Y) => {
    const ae = de().filter((Re) => !Re.disabled), ce = ae.find((Re) => Re.ref.current === document.activeElement), Se = ty(ae, Y, ce);
    Se && setTimeout(() => Se.ref.current.focus());
  }), N = d.useCallback((Y, ae, ce) => {
    const Se = !ye.current && !ce;
    (O.value !== void 0 && O.value === ae || Se) && (ge(Y), Se && (ye.current = true));
  }, [O.value]), L = d.useCallback(() => k == null ? void 0 : k.focus(), [k]), P = d.useCallback((Y, ae, ce) => {
    const Se = !ye.current && !ce;
    (O.value !== void 0 && O.value === ae || Se) && ue(Y);
  }, [O.value]), G = i === "popper" ? Af : Ig, te = G === Af ? { side: v, sideOffset: y, align: m, alignOffset: b, arrowPadding: h, collisionBoundary: E, collisionPadding: w, sticky: M, hideWhenDetached: _, avoidCollisions: C } : {};
  return S.jsx(Ug, { scope: l, content: k, viewport: Z, onViewportChange: F, itemRefCallback: N, selectedItem: oe, onItemLeave: L, itemTextRefCallback: P, focusSelectedItem: X, selectedItemText: ve, position: i, isPositioned: he, searchRef: re, children: S.jsx(Sr, { as: uw, allowPinchZoom: true, children: S.jsx(yr, { asChild: true, trapped: O.open, onMountAutoFocus: (Y) => {
    Y.preventDefault();
  }, onUnmountAutoFocus: ne(s, (Y) => {
    var _a;
    (_a = O.trigger) == null ? void 0 : _a.focus({ preventScroll: true }), Y.preventDefault();
  }), children: S.jsx(cl, { asChild: true, disableOutsidePointerEvents: true, onEscapeKeyDown: f, onPointerDownOutside: p, onFocusOutside: (Y) => Y.preventDefault(), onDismiss: () => O.onOpenChange(false), children: S.jsx(G, { role: "listbox", id: O.contentId, "data-state": O.open ? "open" : "closed", dir: O.dir, onContextMenu: (Y) => Y.preventDefault(), ...R, ...te, onPlaced: () => be(true), ref: V, style: { display: "flex", flexDirection: "column", outline: "none", ...R.style }, onKeyDown: ne(R.onKeyDown, (Y) => {
    const ae = Y.ctrlKey || Y.altKey || Y.metaKey;
    if (Y.key === "Tab" && Y.preventDefault(), !ae && Y.key.length === 1 && A(Y.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(Y.key)) {
      let Se = de().filter((Re) => !Re.disabled).map((Re) => Re.ref.current);
      if (["ArrowUp", "End"].includes(Y.key) && (Se = Se.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(Y.key)) {
        const Re = Y.target, Oe = Se.indexOf(Re);
        Se = Se.slice(Oe + 1);
      }
      setTimeout(() => z(Se)), Y.preventDefault();
    }
  }) }) }) }) }) });
});
Bg.displayName = cw;
var sw = "SelectItemAlignedPosition", Ig = d.forwardRef((a, r) => {
  const { __scopeSelect: l, onPlaced: i, ...s } = a, f = Da(ro, l), p = Oa(ro, l), [v, y] = d.useState(null), [m, b] = d.useState(null), h = Ee(r, (V) => b(V)), E = Ec(l), w = d.useRef(false), M = d.useRef(true), { viewport: _, selectedItem: C, selectedItemText: R, focusSelectedItem: O } = p, k = d.useCallback(() => {
    if (f.trigger && f.valueNode && v && m && _ && C && R) {
      const V = f.trigger.getBoundingClientRect(), oe = m.getBoundingClientRect(), ge = f.valueNode.getBoundingClientRect(), ve = R.getBoundingClientRect();
      if (f.dir !== "rtl") {
        const Re = ve.left - oe.left, Oe = ge.left - Re, tt = V.left - Oe, Fe = V.width + tt, Jt = Math.max(Fe, oe.width), Gt = window.innerWidth - vn, ut = Ji(Oe, [vn, Math.max(vn, Gt - Jt)]);
        v.style.minWidth = Fe + "px", v.style.left = ut + "px";
      } else {
        const Re = oe.right - ve.right, Oe = window.innerWidth - ge.right - Re, tt = window.innerWidth - V.right - Oe, Fe = V.width + tt, Jt = Math.max(Fe, oe.width), Gt = window.innerWidth - vn, ut = Ji(Oe, [vn, Math.max(vn, Gt - Jt)]);
        v.style.minWidth = Fe + "px", v.style.right = ut + "px";
      }
      const ue = E(), de = window.innerHeight - vn * 2, he = _.scrollHeight, be = window.getComputedStyle(m), ye = parseInt(be.borderTopWidth, 10), z = parseInt(be.paddingTop, 10), X = parseInt(be.borderBottomWidth, 10), W = parseInt(be.paddingBottom, 10), ee = ye + z + he + W + X, re = Math.min(C.offsetHeight * 5, ee), A = window.getComputedStyle(_), N = parseInt(A.paddingTop, 10), L = parseInt(A.paddingBottom, 10), P = V.top + V.height / 2 - vn, G = de - P, te = C.offsetHeight / 2, Y = C.offsetTop + te, ae = ye + z + Y, ce = ee - ae;
      if (ae <= P) {
        const Re = ue.length > 0 && C === ue[ue.length - 1].ref.current;
        v.style.bottom = "0px";
        const Oe = m.clientHeight - _.offsetTop - _.offsetHeight, tt = Math.max(G, te + (Re ? L : 0) + Oe + X), Fe = ae + tt;
        v.style.height = Fe + "px";
      } else {
        const Re = ue.length > 0 && C === ue[0].ref.current;
        v.style.top = "0px";
        const tt = Math.max(P, ye + _.offsetTop + (Re ? N : 0) + te) + ce;
        v.style.height = tt + "px", _.scrollTop = ae - P + _.offsetTop;
      }
      v.style.margin = `${vn}px 0`, v.style.minHeight = re + "px", v.style.maxHeight = de + "px", i == null ? void 0 : i(), requestAnimationFrame(() => w.current = true);
    }
  }, [E, f.trigger, f.valueNode, v, m, _, C, R, f.dir, i]);
  xt(() => k(), [k]);
  const [I, Z] = d.useState();
  xt(() => {
    m && Z(window.getComputedStyle(m).zIndex);
  }, [m]);
  const F = d.useCallback((V) => {
    V && M.current === true && (k(), O == null ? void 0 : O(), M.current = false);
  }, [k, O]);
  return S.jsx(dw, { scope: l, contentWrapper: v, shouldExpandOnScrollRef: w, onScrollButtonChange: F, children: S.jsx("div", { ref: y, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: I }, children: S.jsx(fe.div, { ...s, ref: h, style: { boxSizing: "border-box", maxHeight: "100%", ...s.style } }) }) });
});
Ig.displayName = sw;
var fw = "SelectPopperPosition", Af = d.forwardRef((a, r) => {
  const { __scopeSelect: l, align: i = "start", collisionPadding: s = vn, ...f } = a, p = _c(l);
  return S.jsx(yc, { ...p, ...f, ref: r, align: i, collisionPadding: s, style: { boxSizing: "border-box", ...f.style, "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" } });
});
Af.displayName = fw;
var [dw, rd] = sl(ro, {}), Nf = "SelectViewport", Pg = d.forwardRef((a, r) => {
  const { __scopeSelect: l, nonce: i, ...s } = a, f = Oa(Nf, l), p = rd(Nf, l), v = Ee(r, f.onViewportChange), y = d.useRef(0);
  return S.jsxs(S.Fragment, { children: [S.jsx("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: i }), S.jsx(xc.Slot, { scope: l, children: S.jsx(fe.div, { "data-radix-select-viewport": "", role: "presentation", ...s, ref: v, style: { position: "relative", flex: 1, overflow: "hidden auto", ...s.style }, onScroll: ne(s.onScroll, (m) => {
    const b = m.currentTarget, { contentWrapper: h, shouldExpandOnScrollRef: E } = p;
    if ((E == null ? void 0 : E.current) && h) {
      const w = Math.abs(y.current - b.scrollTop);
      if (w > 0) {
        const M = window.innerHeight - vn * 2, _ = parseFloat(h.style.minHeight), C = parseFloat(h.style.height), R = Math.max(_, C);
        if (R < M) {
          const O = R + w, k = Math.min(M, O), I = O - k;
          h.style.height = k + "px", h.style.bottom === "0px" && (b.scrollTop = I > 0 ? I : 0, h.style.justifyContent = "flex-end");
        }
      }
    }
    y.current = b.scrollTop;
  }) }) })] });
});
Pg.displayName = Nf;
var qg = "SelectGroup", [pw, hw] = sl(qg), mw = d.forwardRef((a, r) => {
  const { __scopeSelect: l, ...i } = a, s = Xe();
  return S.jsx(pw, { scope: l, id: s, children: S.jsx(fe.div, { role: "group", "aria-labelledby": s, ...i, ref: r }) });
});
mw.displayName = qg;
var Vg = "SelectLabel", vw = d.forwardRef((a, r) => {
  const { __scopeSelect: l, ...i } = a, s = hw(Vg, l);
  return S.jsx(fe.div, { id: s.id, ...i, ref: r });
});
vw.displayName = Vg;
var ac = "SelectItem", [gw, Gg] = sl(ac), Yg = d.forwardRef((a, r) => {
  const { __scopeSelect: l, value: i, disabled: s = false, textValue: f, ...p } = a, v = Da(ac, l), y = Oa(ac, l), m = v.value === i, [b, h] = d.useState(f ?? ""), [E, w] = d.useState(false), M = Ee(r, (O) => {
    var _a;
    return (_a = y.itemRefCallback) == null ? void 0 : _a.call(y, O, i, s);
  }), _ = Xe(), C = d.useRef("touch"), R = () => {
    s || (v.onValueChange(i), v.onOpenChange(false));
  };
  if (i === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return S.jsx(gw, { scope: l, value: i, disabled: s, textId: _, isSelected: m, onItemTextChange: d.useCallback((O) => {
    h((k) => k || ((O == null ? void 0 : O.textContent) ?? "").trim());
  }, []), children: S.jsx(xc.ItemSlot, { scope: l, value: i, disabled: s, textValue: b, children: S.jsx(fe.div, { role: "option", "aria-labelledby": _, "data-highlighted": E ? "" : void 0, "aria-selected": m && E, "data-state": m ? "checked" : "unchecked", "aria-disabled": s || void 0, "data-disabled": s ? "" : void 0, tabIndex: s ? void 0 : -1, ...p, ref: M, onFocus: ne(p.onFocus, () => w(true)), onBlur: ne(p.onBlur, () => w(false)), onClick: ne(p.onClick, () => {
    C.current !== "mouse" && R();
  }), onPointerUp: ne(p.onPointerUp, () => {
    C.current === "mouse" && R();
  }), onPointerDown: ne(p.onPointerDown, (O) => {
    C.current = O.pointerType;
  }), onPointerMove: ne(p.onPointerMove, (O) => {
    var _a;
    C.current = O.pointerType, s ? (_a = y.onItemLeave) == null ? void 0 : _a.call(y) : C.current === "mouse" && O.currentTarget.focus({ preventScroll: true });
  }), onPointerLeave: ne(p.onPointerLeave, (O) => {
    var _a;
    O.currentTarget === document.activeElement && ((_a = y.onItemLeave) == null ? void 0 : _a.call(y));
  }), onKeyDown: ne(p.onKeyDown, (O) => {
    var _a;
    ((_a = y.searchRef) == null ? void 0 : _a.current) !== "" && O.key === " " || (tw.includes(O.key) && R(), O.key === " " && O.preventDefault());
  }) }) }) });
});
Yg.displayName = ac;
var fr = "SelectItemText", Kg = d.forwardRef((a, r) => {
  const { __scopeSelect: l, className: i, style: s, ...f } = a, p = Da(fr, l), v = Oa(fr, l), y = Gg(fr, l), m = lw(fr, l), [b, h] = d.useState(null), E = Ee(r, (R) => h(R), y.onItemTextChange, (R) => {
    var _a;
    return (_a = v.itemTextRefCallback) == null ? void 0 : _a.call(v, R, y.value, y.disabled);
  }), w = b == null ? void 0 : b.textContent, M = d.useMemo(() => S.jsx("option", { value: y.value, disabled: y.disabled, children: w }, y.value), [y.disabled, y.value, w]), { onNativeOptionAdd: _, onNativeOptionRemove: C } = m;
  return xt(() => (_(M), () => C(M)), [_, C, M]), S.jsxs(S.Fragment, { children: [S.jsx(fe.span, { id: y.textId, ...f, ref: E }), y.isSelected && p.valueNode && !p.valueNodeHasChildren ? il.createPortal(f.children, p.valueNode) : null] });
});
Kg.displayName = fr;
var Xg = "SelectItemIndicator", $g = d.forwardRef((a, r) => {
  const { __scopeSelect: l, ...i } = a;
  return Gg(Xg, l).isSelected ? S.jsx(fe.span, { "aria-hidden": true, ...i, ref: r }) : null;
});
$g.displayName = Xg;
var Df = "SelectScrollUpButton", Qg = d.forwardRef((a, r) => {
  const l = Oa(Df, a.__scopeSelect), i = rd(Df, a.__scopeSelect), [s, f] = d.useState(false), p = Ee(r, i.onScrollButtonChange);
  return xt(() => {
    if (l.viewport && l.isPositioned) {
      let v = function() {
        const m = y.scrollTop > 0;
        f(m);
      };
      const y = l.viewport;
      return v(), y.addEventListener("scroll", v), () => y.removeEventListener("scroll", v);
    }
  }, [l.viewport, l.isPositioned]), s ? S.jsx(Fg, { ...a, ref: p, onAutoScroll: () => {
    const { viewport: v, selectedItem: y } = l;
    v && y && (v.scrollTop = v.scrollTop - y.offsetHeight);
  } }) : null;
});
Qg.displayName = Df;
var Of = "SelectScrollDownButton", Zg = d.forwardRef((a, r) => {
  const l = Oa(Of, a.__scopeSelect), i = rd(Of, a.__scopeSelect), [s, f] = d.useState(false), p = Ee(r, i.onScrollButtonChange);
  return xt(() => {
    if (l.viewport && l.isPositioned) {
      let v = function() {
        const m = y.scrollHeight - y.clientHeight, b = Math.ceil(y.scrollTop) < m;
        f(b);
      };
      const y = l.viewport;
      return v(), y.addEventListener("scroll", v), () => y.removeEventListener("scroll", v);
    }
  }, [l.viewport, l.isPositioned]), s ? S.jsx(Fg, { ...a, ref: p, onAutoScroll: () => {
    const { viewport: v, selectedItem: y } = l;
    v && y && (v.scrollTop = v.scrollTop + y.offsetHeight);
  } }) : null;
});
Zg.displayName = Of;
var Fg = d.forwardRef((a, r) => {
  const { __scopeSelect: l, onAutoScroll: i, ...s } = a, f = Oa("SelectScrollButton", l), p = d.useRef(null), v = Ec(l), y = d.useCallback(() => {
    p.current !== null && (window.clearInterval(p.current), p.current = null);
  }, []);
  return d.useEffect(() => () => y(), [y]), xt(() => {
    var _a, _b2;
    (_b2 = (_a = v().find((b) => b.ref.current === document.activeElement)) == null ? void 0 : _a.ref.current) == null ? void 0 : _b2.scrollIntoView({ block: "nearest" });
  }, [v]), S.jsx(fe.div, { "aria-hidden": true, ...s, ref: r, style: { flexShrink: 0, ...s.style }, onPointerDown: ne(s.onPointerDown, () => {
    p.current === null && (p.current = window.setInterval(i, 50));
  }), onPointerMove: ne(s.onPointerMove, () => {
    var _a;
    (_a = f.onItemLeave) == null ? void 0 : _a.call(f), p.current === null && (p.current = window.setInterval(i, 50));
  }), onPointerLeave: ne(s.onPointerLeave, () => {
    y();
  }) });
}), yw = "SelectSeparator", bw = d.forwardRef((a, r) => {
  const { __scopeSelect: l, ...i } = a;
  return S.jsx(fe.div, { "aria-hidden": true, ...i, ref: r });
});
bw.displayName = yw;
var zf = "SelectArrow", Sw = d.forwardRef((a, r) => {
  const { __scopeSelect: l, ...i } = a, s = _c(l), f = Da(zf, l), p = Oa(zf, l);
  return f.open && p.position === "popper" ? S.jsx(bc, { ...s, ...i, ref: r }) : null;
});
Sw.displayName = zf;
var xw = "SelectBubbleInput", Jg = d.forwardRef(({ __scopeSelect: a, value: r, ...l }, i) => {
  const s = d.useRef(null), f = Ee(i, s), p = Sc(r);
  return d.useEffect(() => {
    const v = s.current;
    if (!v) return;
    const y = window.HTMLSelectElement.prototype, b = Object.getOwnPropertyDescriptor(y, "value").set;
    if (p !== r && b) {
      const h = new Event("change", { bubbles: true });
      b.call(v, r), v.dispatchEvent(h);
    }
  }, [p, r]), S.jsx(fe.select, { ...l, style: { ...Tg, ...l.style }, ref: f, defaultValue: r });
});
Jg.displayName = xw;
function Wg(a) {
  return a === "" || a === void 0;
}
function ey(a) {
  const r = gn(a), l = d.useRef(""), i = d.useRef(0), s = d.useCallback((p) => {
    const v = l.current + p;
    r(v), (function y(m) {
      l.current = m, window.clearTimeout(i.current), m !== "" && (i.current = window.setTimeout(() => y(""), 1e3));
    })(v);
  }, [r]), f = d.useCallback(() => {
    l.current = "", window.clearTimeout(i.current);
  }, []);
  return d.useEffect(() => () => window.clearTimeout(i.current), []), [l, s, f];
}
function ty(a, r, l) {
  const s = r.length > 1 && Array.from(r).every((m) => m === r[0]) ? r[0] : r, f = l ? a.indexOf(l) : -1;
  let p = Ew(a, Math.max(f, 0));
  s.length === 1 && (p = p.filter((m) => m !== l));
  const y = p.find((m) => m.textValue.toLowerCase().startsWith(s.toLowerCase()));
  return y !== l ? y : void 0;
}
function Ew(a, r) {
  return a.map((l, i) => a[(r + i) % a.length]);
}
var J4 = Ng, W4 = Og, e3 = jg, t3 = kg, n3 = Lg, a3 = Hg, o3 = Pg, l3 = Yg, r3 = Kg, i3 = $g, c3 = Qg, u3 = Zg, yf = "rovingFocusGroup.onEntryFocus", _w = { bubbles: false, cancelable: true }, Er = "RovingFocusGroup", [jf, ny, Cw] = ul(Er), [Mw, fl] = Et(Er, [Cw]), [Rw, ww] = Mw(Er), ay = d.forwardRef((a, r) => S.jsx(jf.Provider, { scope: a.__scopeRovingFocusGroup, children: S.jsx(jf.Slot, { scope: a.__scopeRovingFocusGroup, children: S.jsx(Tw, { ...a, ref: r }) }) }));
ay.displayName = Er;
var Tw = d.forwardRef((a, r) => {
  const { __scopeRovingFocusGroup: l, orientation: i, loop: s = false, dir: f, currentTabStopId: p, defaultCurrentTabStopId: v, onCurrentTabStopIdChange: y, onEntryFocus: m, preventScrollOnEntryFocus: b = false, ...h } = a, E = d.useRef(null), w = Ee(r, E), M = co(f), [_, C] = Nt({ prop: p, defaultProp: v ?? null, onChange: y, caller: Er }), [R, O] = d.useState(false), k = gn(m), I = ny(l), Z = d.useRef(false), [F, V] = d.useState(0);
  return d.useEffect(() => {
    const oe = E.current;
    if (oe) return oe.addEventListener(yf, k), () => oe.removeEventListener(yf, k);
  }, [k]), S.jsx(Rw, { scope: l, orientation: i, dir: M, loop: s, currentTabStopId: _, onItemFocus: d.useCallback((oe) => C(oe), [C]), onItemShiftTab: d.useCallback(() => O(true), []), onFocusableItemAdd: d.useCallback(() => V((oe) => oe + 1), []), onFocusableItemRemove: d.useCallback(() => V((oe) => oe - 1), []), children: S.jsx(fe.div, { tabIndex: R || F === 0 ? -1 : 0, "data-orientation": i, ...h, ref: w, style: { outline: "none", ...a.style }, onMouseDown: ne(a.onMouseDown, () => {
    Z.current = true;
  }), onFocus: ne(a.onFocus, (oe) => {
    const ge = !Z.current;
    if (oe.target === oe.currentTarget && ge && !R) {
      const ve = new CustomEvent(yf, _w);
      if (oe.currentTarget.dispatchEvent(ve), !ve.defaultPrevented) {
        const ue = I().filter((z) => z.focusable), de = ue.find((z) => z.active), he = ue.find((z) => z.id === _), ye = [de, he, ...ue].filter(Boolean).map((z) => z.ref.current);
        ry(ye, b);
      }
    }
    Z.current = false;
  }), onBlur: ne(a.onBlur, () => O(false)) }) });
}), oy = "RovingFocusGroupItem", ly = d.forwardRef((a, r) => {
  const { __scopeRovingFocusGroup: l, focusable: i = true, active: s = false, tabStopId: f, children: p, ...v } = a, y = Xe(), m = f || y, b = ww(oy, l), h = b.currentTabStopId === m, E = ny(l), { onFocusableItemAdd: w, onFocusableItemRemove: M, currentTabStopId: _ } = b;
  return d.useEffect(() => {
    if (i) return w(), () => M();
  }, [i, w, M]), S.jsx(jf.ItemSlot, { scope: l, id: m, focusable: i, active: s, children: S.jsx(fe.span, { tabIndex: h ? 0 : -1, "data-orientation": b.orientation, ...v, ref: r, onMouseDown: ne(a.onMouseDown, (C) => {
    i ? b.onItemFocus(m) : C.preventDefault();
  }), onFocus: ne(a.onFocus, () => b.onItemFocus(m)), onKeyDown: ne(a.onKeyDown, (C) => {
    if (C.key === "Tab" && C.shiftKey) {
      b.onItemShiftTab();
      return;
    }
    if (C.target !== C.currentTarget) return;
    const R = Dw(C, b.orientation, b.dir);
    if (R !== void 0) {
      if (C.metaKey || C.ctrlKey || C.altKey || C.shiftKey) return;
      C.preventDefault();
      let k = E().filter((I) => I.focusable).map((I) => I.ref.current);
      if (R === "last") k.reverse();
      else if (R === "prev" || R === "next") {
        R === "prev" && k.reverse();
        const I = k.indexOf(C.currentTarget);
        k = b.loop ? Ow(k, I + 1) : k.slice(I + 1);
      }
      setTimeout(() => ry(k));
    }
  }), children: typeof p == "function" ? p({ isCurrentTabStop: h, hasTabStop: _ != null }) : p }) });
});
ly.displayName = oy;
var Aw = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function Nw(a, r) {
  return r !== "rtl" ? a : a === "ArrowLeft" ? "ArrowRight" : a === "ArrowRight" ? "ArrowLeft" : a;
}
function Dw(a, r, l) {
  const i = Nw(a.key, l);
  if (!(r === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) && !(r === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i))) return Aw[i];
}
function ry(a, r = false) {
  const l = document.activeElement;
  for (const i of a) if (i === l || (i.focus({ preventScroll: r }), document.activeElement !== l)) return;
}
function Ow(a, r) {
  return a.map((l, i) => a[(r + i) % a.length]);
}
var id = ay, cd = ly, Cc = "Tabs", [zw] = Et(Cc, [fl]), iy = fl(), [jw, ud] = zw(Cc), cy = d.forwardRef((a, r) => {
  const { __scopeTabs: l, value: i, onValueChange: s, defaultValue: f, orientation: p = "horizontal", dir: v, activationMode: y = "automatic", ...m } = a, b = co(v), [h, E] = Nt({ prop: i, onChange: s, defaultProp: f ?? "", caller: Cc });
  return S.jsx(jw, { scope: l, baseId: Xe(), value: h, onValueChange: E, orientation: p, dir: b, activationMode: y, children: S.jsx(fe.div, { dir: b, "data-orientation": p, ...m, ref: r }) });
});
cy.displayName = Cc;
var uy = "TabsList", sy = d.forwardRef((a, r) => {
  const { __scopeTabs: l, loop: i = true, ...s } = a, f = ud(uy, l), p = iy(l);
  return S.jsx(id, { asChild: true, ...p, orientation: f.orientation, dir: f.dir, loop: i, children: S.jsx(fe.div, { role: "tablist", "aria-orientation": f.orientation, ...s, ref: r }) });
});
sy.displayName = uy;
var fy = "TabsTrigger", dy = d.forwardRef((a, r) => {
  const { __scopeTabs: l, value: i, disabled: s = false, ...f } = a, p = ud(fy, l), v = iy(l), y = my(p.baseId, i), m = vy(p.baseId, i), b = i === p.value;
  return S.jsx(cd, { asChild: true, ...v, focusable: !s, active: b, children: S.jsx(fe.button, { type: "button", role: "tab", "aria-selected": b, "aria-controls": m, "data-state": b ? "active" : "inactive", "data-disabled": s ? "" : void 0, disabled: s, id: y, ...f, ref: r, onMouseDown: ne(a.onMouseDown, (h) => {
    !s && h.button === 0 && h.ctrlKey === false ? p.onValueChange(i) : h.preventDefault();
  }), onKeyDown: ne(a.onKeyDown, (h) => {
    [" ", "Enter"].includes(h.key) && p.onValueChange(i);
  }), onFocus: ne(a.onFocus, () => {
    const h = p.activationMode !== "manual";
    !b && !s && h && p.onValueChange(i);
  }) }) });
});
dy.displayName = fy;
var py = "TabsContent", hy = d.forwardRef((a, r) => {
  const { __scopeTabs: l, value: i, forceMount: s, children: f, ...p } = a, v = ud(py, l), y = my(v.baseId, i), m = vy(v.baseId, i), b = i === v.value, h = d.useRef(b);
  return d.useEffect(() => {
    const E = requestAnimationFrame(() => h.current = false);
    return () => cancelAnimationFrame(E);
  }, []), S.jsx(Vt, { present: s || b, children: ({ present: E }) => S.jsx(fe.div, { "data-state": b ? "active" : "inactive", "data-orientation": v.orientation, role: "tabpanel", "aria-labelledby": y, hidden: !E, id: m, tabIndex: 0, ...p, ref: r, style: { ...a.style, animationDuration: h.current ? "0s" : void 0 }, children: E && f }) });
});
hy.displayName = py;
function my(a, r) {
  return `${a}-trigger-${r}`;
}
function vy(a, r) {
  return `${a}-content-${r}`;
}
var s3 = cy, f3 = sy, d3 = dy, p3 = hy, Mc = "Checkbox", [kw] = Et(Mc), [Lw, sd] = kw(Mc);
function Hw(a) {
  const { __scopeCheckbox: r, checked: l, children: i, defaultChecked: s, disabled: f, form: p, name: v, onCheckedChange: y, required: m, value: b = "on", internal_do_not_use_render: h } = a, [E, w] = Nt({ prop: l, defaultProp: s ?? false, onChange: y, caller: Mc }), [M, _] = d.useState(null), [C, R] = d.useState(null), O = d.useRef(false), k = M ? !!p || !!M.closest("form") : true, I = { checked: E, disabled: f, setChecked: w, control: M, setControl: _, name: v, form: p, value: b, hasConsumerStoppedPropagationRef: O, required: m, defaultChecked: wa(s) ? false : s, isFormControl: k, bubbleInput: C, setBubbleInput: R };
  return S.jsx(Lw, { scope: r, ...I, children: Iw(h) ? h(I) : i });
}
var gy = "CheckboxTrigger", yy = d.forwardRef(({ __scopeCheckbox: a, onKeyDown: r, onClick: l, ...i }, s) => {
  const { control: f, value: p, disabled: v, checked: y, required: m, setControl: b, setChecked: h, hasConsumerStoppedPropagationRef: E, isFormControl: w, bubbleInput: M } = sd(gy, a), _ = Ee(s, b), C = d.useRef(y);
  return d.useEffect(() => {
    const R = f == null ? void 0 : f.form;
    if (R) {
      const O = () => h(C.current);
      return R.addEventListener("reset", O), () => R.removeEventListener("reset", O);
    }
  }, [f, h]), S.jsx(fe.button, { type: "button", role: "checkbox", "aria-checked": wa(y) ? "mixed" : y, "aria-required": m, "data-state": Ey(y), "data-disabled": v ? "" : void 0, disabled: v, value: p, ...i, ref: _, onKeyDown: ne(r, (R) => {
    R.key === "Enter" && R.preventDefault();
  }), onClick: ne(l, (R) => {
    h((O) => wa(O) ? true : !O), M && w && (E.current = R.isPropagationStopped(), E.current || R.stopPropagation());
  }) });
});
yy.displayName = gy;
var Uw = d.forwardRef((a, r) => {
  const { __scopeCheckbox: l, name: i, checked: s, defaultChecked: f, required: p, disabled: v, value: y, onCheckedChange: m, form: b, ...h } = a;
  return S.jsx(Hw, { __scopeCheckbox: l, checked: s, defaultChecked: f, disabled: v, required: p, onCheckedChange: m, name: i, form: b, value: y, internal_do_not_use_render: ({ isFormControl: E }) => S.jsxs(S.Fragment, { children: [S.jsx(yy, { ...h, ref: r, __scopeCheckbox: l }), E && S.jsx(xy, { __scopeCheckbox: l })] }) });
});
Uw.displayName = Mc;
var by = "CheckboxIndicator", Bw = d.forwardRef((a, r) => {
  const { __scopeCheckbox: l, forceMount: i, ...s } = a, f = sd(by, l);
  return S.jsx(Vt, { present: i || wa(f.checked) || f.checked === true, children: S.jsx(fe.span, { "data-state": Ey(f.checked), "data-disabled": f.disabled ? "" : void 0, ...s, ref: r, style: { pointerEvents: "none", ...a.style } }) });
});
Bw.displayName = by;
var Sy = "CheckboxBubbleInput", xy = d.forwardRef(({ __scopeCheckbox: a, ...r }, l) => {
  const { control: i, hasConsumerStoppedPropagationRef: s, checked: f, defaultChecked: p, required: v, disabled: y, name: m, value: b, form: h, bubbleInput: E, setBubbleInput: w } = sd(Sy, a), M = Ee(l, w), _ = Sc(f), C = vc(i);
  d.useEffect(() => {
    const O = E;
    if (!O) return;
    const k = window.HTMLInputElement.prototype, Z = Object.getOwnPropertyDescriptor(k, "checked").set, F = !s.current;
    if (_ !== f && Z) {
      const V = new Event("click", { bubbles: F });
      O.indeterminate = wa(f), Z.call(O, wa(f) ? false : f), O.dispatchEvent(V);
    }
  }, [E, _, f, s]);
  const R = d.useRef(wa(f) ? false : f);
  return S.jsx(fe.input, { type: "checkbox", "aria-hidden": true, defaultChecked: p ?? R.current, required: v, disabled: y, name: m, value: b, form: h, ...r, tabIndex: -1, ref: M, style: { ...r.style, ...C, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0, transform: "translateX(-100%)" } });
});
xy.displayName = Sy;
function Iw(a) {
  return typeof a == "function";
}
function wa(a) {
  return a === "indeterminate";
}
function Ey(a) {
  return wa(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
var [Rc] = Et("Tooltip", [Na]), fd = Na(), _y = "TooltipProvider", Pw = 700, v0 = "tooltip.open", [qw, Cy] = Rc(_y), My = (a) => {
  const { __scopeTooltip: r, delayDuration: l = Pw, skipDelayDuration: i = 300, disableHoverableContent: s = false, children: f } = a, p = d.useRef(true), v = d.useRef(false), y = d.useRef(0);
  return d.useEffect(() => {
    const m = y.current;
    return () => window.clearTimeout(m);
  }, []), S.jsx(qw, { scope: r, isOpenDelayedRef: p, delayDuration: l, onOpen: d.useCallback(() => {
    window.clearTimeout(y.current), p.current = false;
  }, []), onClose: d.useCallback(() => {
    window.clearTimeout(y.current), y.current = window.setTimeout(() => p.current = true, i);
  }, [i]), isPointerInTransitRef: v, onPointerInTransitChange: d.useCallback((m) => {
    v.current = m;
  }, []), disableHoverableContent: s, children: f });
};
My.displayName = _y;
var Ry = "Tooltip", [h3, wc] = Rc(Ry), kf = "TooltipTrigger", Vw = d.forwardRef((a, r) => {
  const { __scopeTooltip: l, ...i } = a, s = wc(kf, l), f = Cy(kf, l), p = fd(l), v = d.useRef(null), y = Ee(r, v, s.onTriggerChange), m = d.useRef(false), b = d.useRef(false), h = d.useCallback(() => m.current = false, []);
  return d.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), S.jsx(xr, { asChild: true, ...p, children: S.jsx(fe.button, { "aria-describedby": s.open ? s.contentId : void 0, "data-state": s.stateAttribute, ...i, ref: y, onPointerMove: ne(a.onPointerMove, (E) => {
    E.pointerType !== "touch" && !b.current && !f.isPointerInTransitRef.current && (s.onTriggerEnter(), b.current = true);
  }), onPointerLeave: ne(a.onPointerLeave, () => {
    s.onTriggerLeave(), b.current = false;
  }), onPointerDown: ne(a.onPointerDown, () => {
    s.open && s.onClose(), m.current = true, document.addEventListener("pointerup", h, { once: true });
  }), onFocus: ne(a.onFocus, () => {
    m.current || s.onOpen();
  }), onBlur: ne(a.onBlur, s.onClose), onClick: ne(a.onClick, s.onClose) }) });
});
Vw.displayName = kf;
var Gw = "TooltipPortal", [m3, Yw] = Rc(Gw, { forceMount: void 0 }), ll = "TooltipContent", Kw = d.forwardRef((a, r) => {
  const l = Yw(ll, a.__scopeTooltip), { forceMount: i = l.forceMount, side: s = "top", ...f } = a, p = wc(ll, a.__scopeTooltip);
  return S.jsx(Vt, { present: i || p.open, children: p.disableHoverableContent ? S.jsx(wy, { side: s, ...f, ref: r }) : S.jsx(Xw, { side: s, ...f, ref: r }) });
}), Xw = d.forwardRef((a, r) => {
  const l = wc(ll, a.__scopeTooltip), i = Cy(ll, a.__scopeTooltip), s = d.useRef(null), f = Ee(r, s), [p, v] = d.useState(null), { trigger: y, onClose: m } = l, b = s.current, { onPointerInTransitChange: h } = i, E = d.useCallback(() => {
    v(null), h(false);
  }, [h]), w = d.useCallback((M, _) => {
    const C = M.currentTarget, R = { x: M.clientX, y: M.clientY }, O = Jw(R, C.getBoundingClientRect()), k = Ww(R, O), I = eT(_.getBoundingClientRect()), Z = nT([...k, ...I]);
    v(Z), h(true);
  }, [h]);
  return d.useEffect(() => () => E(), [E]), d.useEffect(() => {
    if (y && b) {
      const M = (C) => w(C, b), _ = (C) => w(C, y);
      return y.addEventListener("pointerleave", M), b.addEventListener("pointerleave", _), () => {
        y.removeEventListener("pointerleave", M), b.removeEventListener("pointerleave", _);
      };
    }
  }, [y, b, w, E]), d.useEffect(() => {
    if (p) {
      const M = (_) => {
        const C = _.target, R = { x: _.clientX, y: _.clientY }, O = (y == null ? void 0 : y.contains(C)) || (b == null ? void 0 : b.contains(C)), k = !tT(R, p);
        O ? E() : k && (E(), m());
      };
      return document.addEventListener("pointermove", M), () => document.removeEventListener("pointermove", M);
    }
  }, [y, b, p, m, E]), S.jsx(wy, { ...a, ref: f });
}), [$w, Qw] = Rc(Ry, { isInside: false }), Zw = U0("TooltipContent"), wy = d.forwardRef((a, r) => {
  const { __scopeTooltip: l, children: i, "aria-label": s, onEscapeKeyDown: f, onPointerDownOutside: p, ...v } = a, y = wc(ll, l), m = fd(l), { onClose: b } = y;
  return d.useEffect(() => (document.addEventListener(v0, b), () => document.removeEventListener(v0, b)), [b]), d.useEffect(() => {
    if (y.trigger) {
      const h = (E) => {
        var _a;
        ((_a = E.target) == null ? void 0 : _a.contains(y.trigger)) && b();
      };
      return window.addEventListener("scroll", h, { capture: true }), () => window.removeEventListener("scroll", h, { capture: true });
    }
  }, [y.trigger, b]), S.jsx(cl, { asChild: true, disableOutsidePointerEvents: false, onEscapeKeyDown: f, onPointerDownOutside: p, onFocusOutside: (h) => h.preventDefault(), onDismiss: b, children: S.jsxs(yc, { "data-state": y.stateAttribute, ...m, ...v, ref: r, style: { ...v.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)", "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)", "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" }, children: [S.jsx(Zw, { children: i }), S.jsx($w, { scope: l, isInside: true, children: S.jsx(WR, { id: y.contentId, role: "tooltip", children: s || i }) })] }) });
});
Kw.displayName = ll;
var Ty = "TooltipArrow", Fw = d.forwardRef((a, r) => {
  const { __scopeTooltip: l, ...i } = a, s = fd(l);
  return Qw(Ty, l).isInside ? null : S.jsx(bc, { ...s, ...i, ref: r });
});
Fw.displayName = Ty;
function Jw(a, r) {
  const l = Math.abs(r.top - a.y), i = Math.abs(r.bottom - a.y), s = Math.abs(r.right - a.x), f = Math.abs(r.left - a.x);
  switch (Math.min(l, i, s, f)) {
    case f:
      return "left";
    case s:
      return "right";
    case l:
      return "top";
    case i:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Ww(a, r, l = 5) {
  const i = [];
  switch (r) {
    case "top":
      i.push({ x: a.x - l, y: a.y + l }, { x: a.x + l, y: a.y + l });
      break;
    case "bottom":
      i.push({ x: a.x - l, y: a.y - l }, { x: a.x + l, y: a.y - l });
      break;
    case "left":
      i.push({ x: a.x + l, y: a.y - l }, { x: a.x + l, y: a.y + l });
      break;
    case "right":
      i.push({ x: a.x - l, y: a.y - l }, { x: a.x - l, y: a.y + l });
      break;
  }
  return i;
}
function eT(a) {
  const { top: r, right: l, bottom: i, left: s } = a;
  return [{ x: s, y: r }, { x: l, y: r }, { x: l, y: i }, { x: s, y: i }];
}
function tT(a, r) {
  const { x: l, y: i } = a;
  let s = false;
  for (let f = 0, p = r.length - 1; f < r.length; p = f++) {
    const v = r[f], y = r[p], m = v.x, b = v.y, h = y.x, E = y.y;
    b > i != E > i && l < (h - m) * (i - b) / (E - b) + m && (s = !s);
  }
  return s;
}
function nT(a) {
  const r = a.slice();
  return r.sort((l, i) => l.x < i.x ? -1 : l.x > i.x ? 1 : l.y < i.y ? -1 : l.y > i.y ? 1 : 0), aT(r);
}
function aT(a) {
  if (a.length <= 1) return a.slice();
  const r = [];
  for (let i = 0; i < a.length; i++) {
    const s = a[i];
    for (; r.length >= 2; ) {
      const f = r[r.length - 1], p = r[r.length - 2];
      if ((f.x - p.x) * (s.y - p.y) >= (f.y - p.y) * (s.x - p.x)) r.pop();
      else break;
    }
    r.push(s);
  }
  r.pop();
  const l = [];
  for (let i = a.length - 1; i >= 0; i--) {
    const s = a[i];
    for (; l.length >= 2; ) {
      const f = l[l.length - 1], p = l[l.length - 2];
      if ((f.x - p.x) * (s.y - p.y) >= (f.y - p.y) * (s.x - p.x)) l.pop();
      else break;
    }
    l.push(s);
  }
  return l.pop(), r.length === 1 && l.length === 1 && r[0].x === l[0].x && r[0].y === l[0].y ? r : r.concat(l);
}
var v3 = My, Lf = ["Enter", " "], oT = ["ArrowDown", "PageUp", "Home"], Ay = ["ArrowUp", "PageDown", "End"], lT = [...oT, ...Ay], rT = { ltr: [...Lf, "ArrowRight"], rtl: [...Lf, "ArrowLeft"] }, iT = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] }, _r = "Menu", [mr, cT, uT] = ul(_r), [uo, dd] = Et(_r, [uT, Na, fl]), Cr = Na(), Ny = fl(), [Dy, za] = uo(_r), [sT, Mr] = uo(_r), Oy = (a) => {
  const { __scopeMenu: r, open: l = false, children: i, dir: s, onOpenChange: f, modal: p = true } = a, v = Cr(r), [y, m] = d.useState(null), b = d.useRef(false), h = gn(f), E = co(s);
  return d.useEffect(() => {
    const w = () => {
      b.current = true, document.addEventListener("pointerdown", M, { capture: true, once: true }), document.addEventListener("pointermove", M, { capture: true, once: true });
    }, M = () => b.current = false;
    return document.addEventListener("keydown", w, { capture: true }), () => {
      document.removeEventListener("keydown", w, { capture: true }), document.removeEventListener("pointerdown", M, { capture: true }), document.removeEventListener("pointermove", M, { capture: true });
    };
  }, []), S.jsx(gc, { ...v, children: S.jsx(Dy, { scope: r, open: l, onOpenChange: h, content: y, onContentChange: m, children: S.jsx(sT, { scope: r, onClose: d.useCallback(() => h(false), [h]), isUsingKeyboardRef: b, dir: E, modal: p, children: i }) }) });
};
Oy.displayName = _r;
var fT = "MenuAnchor", pd = d.forwardRef((a, r) => {
  const { __scopeMenu: l, ...i } = a, s = Cr(l);
  return S.jsx(xr, { ...s, ...i, ref: r });
});
pd.displayName = fT;
var hd = "MenuPortal", [dT, zy] = uo(hd, { forceMount: void 0 }), jy = (a) => {
  const { __scopeMenu: r, forceMount: l, children: i, container: s } = a, f = za(hd, r);
  return S.jsx(dT, { scope: r, forceMount: l, children: S.jsx(Vt, { present: l || f.open, children: S.jsx(br, { asChild: true, container: s, children: i }) }) });
};
jy.displayName = hd;
var sn = "MenuContent", [pT, md] = uo(sn), ky = d.forwardRef((a, r) => {
  const l = zy(sn, a.__scopeMenu), { forceMount: i = l.forceMount, ...s } = a, f = za(sn, a.__scopeMenu), p = Mr(sn, a.__scopeMenu);
  return S.jsx(mr.Provider, { scope: a.__scopeMenu, children: S.jsx(Vt, { present: i || f.open, children: S.jsx(mr.Slot, { scope: a.__scopeMenu, children: p.modal ? S.jsx(hT, { ...s, ref: r }) : S.jsx(mT, { ...s, ref: r }) }) }) });
}), hT = d.forwardRef((a, r) => {
  const l = za(sn, a.__scopeMenu), i = d.useRef(null), s = Ee(r, i);
  return d.useEffect(() => {
    const f = i.current;
    if (f) return uc(f);
  }, []), S.jsx(vd, { ...a, ref: s, trapFocus: l.open, disableOutsidePointerEvents: l.open, disableOutsideScroll: true, onFocusOutside: ne(a.onFocusOutside, (f) => f.preventDefault(), { checkForDefaultPrevented: false }), onDismiss: () => l.onOpenChange(false) });
}), mT = d.forwardRef((a, r) => {
  const l = za(sn, a.__scopeMenu);
  return S.jsx(vd, { ...a, ref: r, trapFocus: false, disableOutsidePointerEvents: false, disableOutsideScroll: false, onDismiss: () => l.onOpenChange(false) });
}), vT = ao("MenuContent.ScrollLock"), vd = d.forwardRef((a, r) => {
  const { __scopeMenu: l, loop: i = false, trapFocus: s, onOpenAutoFocus: f, onCloseAutoFocus: p, disableOutsidePointerEvents: v, onEntryFocus: y, onEscapeKeyDown: m, onPointerDownOutside: b, onFocusOutside: h, onInteractOutside: E, onDismiss: w, disableOutsideScroll: M, ..._ } = a, C = za(sn, l), R = Mr(sn, l), O = Cr(l), k = Ny(l), I = cT(l), [Z, F] = d.useState(null), V = d.useRef(null), oe = Ee(r, V, C.onContentChange), ge = d.useRef(0), ve = d.useRef(""), ue = d.useRef(0), de = d.useRef(null), he = d.useRef("right"), be = d.useRef(0), ye = M ? Sr : d.Fragment, z = M ? { as: vT, allowPinchZoom: true } : void 0, X = (ee) => {
    var _a, _b2;
    const re = ve.current + ee, A = I().filter((Y) => !Y.disabled), N = document.activeElement, L = (_a = A.find((Y) => Y.ref.current === N)) == null ? void 0 : _a.textValue, P = A.map((Y) => Y.textValue), G = TT(P, re, L), te = (_b2 = A.find((Y) => Y.textValue === G)) == null ? void 0 : _b2.ref.current;
    (function Y(ae) {
      ve.current = ae, window.clearTimeout(ge.current), ae !== "" && (ge.current = window.setTimeout(() => Y(""), 1e3));
    })(re), te && setTimeout(() => te.focus());
  };
  d.useEffect(() => () => window.clearTimeout(ge.current), []), pc();
  const W = d.useCallback((ee) => {
    var _a, _b2;
    return he.current === ((_a = de.current) == null ? void 0 : _a.side) && NT(ee, (_b2 = de.current) == null ? void 0 : _b2.area);
  }, []);
  return S.jsx(pT, { scope: l, searchRef: ve, onItemEnter: d.useCallback((ee) => {
    W(ee) && ee.preventDefault();
  }, [W]), onItemLeave: d.useCallback((ee) => {
    var _a;
    W(ee) || ((_a = V.current) == null ? void 0 : _a.focus(), F(null));
  }, [W]), onTriggerLeave: d.useCallback((ee) => {
    W(ee) && ee.preventDefault();
  }, [W]), pointerGraceTimerRef: ue, onPointerGraceIntentChange: d.useCallback((ee) => {
    de.current = ee;
  }, []), children: S.jsx(ye, { ...z, children: S.jsx(yr, { asChild: true, trapped: s, onMountAutoFocus: ne(f, (ee) => {
    var _a;
    ee.preventDefault(), (_a = V.current) == null ? void 0 : _a.focus({ preventScroll: true });
  }), onUnmountAutoFocus: p, children: S.jsx(cl, { asChild: true, disableOutsidePointerEvents: v, onEscapeKeyDown: m, onPointerDownOutside: b, onFocusOutside: h, onInteractOutside: E, onDismiss: w, children: S.jsx(id, { asChild: true, ...k, dir: R.dir, orientation: "vertical", loop: i, currentTabStopId: Z, onCurrentTabStopIdChange: F, onEntryFocus: ne(y, (ee) => {
    R.isUsingKeyboardRef.current || ee.preventDefault();
  }), preventScrollOnEntryFocus: true, children: S.jsx(yc, { role: "menu", "aria-orientation": "vertical", "data-state": Jy(C.open), "data-radix-menu-content": "", dir: R.dir, ...O, ..._, ref: oe, style: { outline: "none", ..._.style }, onKeyDown: ne(_.onKeyDown, (ee) => {
    const A = ee.target.closest("[data-radix-menu-content]") === ee.currentTarget, N = ee.ctrlKey || ee.altKey || ee.metaKey, L = ee.key.length === 1;
    A && (ee.key === "Tab" && ee.preventDefault(), !N && L && X(ee.key));
    const P = V.current;
    if (ee.target !== P || !lT.includes(ee.key)) return;
    ee.preventDefault();
    const te = I().filter((Y) => !Y.disabled).map((Y) => Y.ref.current);
    Ay.includes(ee.key) && te.reverse(), RT(te);
  }), onBlur: ne(a.onBlur, (ee) => {
    ee.currentTarget.contains(ee.target) || (window.clearTimeout(ge.current), ve.current = "");
  }), onPointerMove: ne(a.onPointerMove, vr((ee) => {
    const re = ee.target, A = be.current !== ee.clientX;
    if (ee.currentTarget.contains(re) && A) {
      const N = ee.clientX > be.current ? "right" : "left";
      he.current = N, be.current = ee.clientX;
    }
  })) }) }) }) }) }) });
});
ky.displayName = sn;
var gT = "MenuGroup", gd = d.forwardRef((a, r) => {
  const { __scopeMenu: l, ...i } = a;
  return S.jsx(fe.div, { role: "group", ...i, ref: r });
});
gd.displayName = gT;
var yT = "MenuLabel", Ly = d.forwardRef((a, r) => {
  const { __scopeMenu: l, ...i } = a;
  return S.jsx(fe.div, { ...i, ref: r });
});
Ly.displayName = yT;
var oc = "MenuItem", g0 = "menu.itemSelect", Tc = d.forwardRef((a, r) => {
  const { disabled: l = false, onSelect: i, ...s } = a, f = d.useRef(null), p = Mr(oc, a.__scopeMenu), v = md(oc, a.__scopeMenu), y = Ee(r, f), m = d.useRef(false), b = () => {
    const h = f.current;
    if (!l && h) {
      const E = new CustomEvent(g0, { bubbles: true, cancelable: true });
      h.addEventListener(g0, (w) => i == null ? void 0 : i(w), { once: true }), B0(h, E), E.defaultPrevented ? m.current = false : p.onClose();
    }
  };
  return S.jsx(Hy, { ...s, ref: y, disabled: l, onClick: ne(a.onClick, b), onPointerDown: (h) => {
    var _a;
    (_a = a.onPointerDown) == null ? void 0 : _a.call(a, h), m.current = true;
  }, onPointerUp: ne(a.onPointerUp, (h) => {
    var _a;
    m.current || ((_a = h.currentTarget) == null ? void 0 : _a.click());
  }), onKeyDown: ne(a.onKeyDown, (h) => {
    const E = v.searchRef.current !== "";
    l || E && h.key === " " || Lf.includes(h.key) && (h.currentTarget.click(), h.preventDefault());
  }) });
});
Tc.displayName = oc;
var Hy = d.forwardRef((a, r) => {
  const { __scopeMenu: l, disabled: i = false, textValue: s, ...f } = a, p = md(oc, l), v = Ny(l), y = d.useRef(null), m = Ee(r, y), [b, h] = d.useState(false), [E, w] = d.useState("");
  return d.useEffect(() => {
    const M = y.current;
    M && w((M.textContent ?? "").trim());
  }, [f.children]), S.jsx(mr.ItemSlot, { scope: l, disabled: i, textValue: s ?? E, children: S.jsx(cd, { asChild: true, ...v, focusable: !i, children: S.jsx(fe.div, { role: "menuitem", "data-highlighted": b ? "" : void 0, "aria-disabled": i || void 0, "data-disabled": i ? "" : void 0, ...f, ref: m, onPointerMove: ne(a.onPointerMove, vr((M) => {
    i ? p.onItemLeave(M) : (p.onItemEnter(M), M.defaultPrevented || M.currentTarget.focus({ preventScroll: true }));
  })), onPointerLeave: ne(a.onPointerLeave, vr((M) => p.onItemLeave(M))), onFocus: ne(a.onFocus, () => h(true)), onBlur: ne(a.onBlur, () => h(false)) }) }) });
}), bT = "MenuCheckboxItem", Uy = d.forwardRef((a, r) => {
  const { checked: l = false, onCheckedChange: i, ...s } = a;
  return S.jsx(Vy, { scope: a.__scopeMenu, checked: l, children: S.jsx(Tc, { role: "menuitemcheckbox", "aria-checked": lc(l) ? "mixed" : l, ...s, ref: r, "data-state": Sd(l), onSelect: ne(s.onSelect, () => i == null ? void 0 : i(lc(l) ? true : !l), { checkForDefaultPrevented: false }) }) });
});
Uy.displayName = bT;
var By = "MenuRadioGroup", [ST, xT] = uo(By, { value: void 0, onValueChange: () => {
} }), Iy = d.forwardRef((a, r) => {
  const { value: l, onValueChange: i, ...s } = a, f = gn(i);
  return S.jsx(ST, { scope: a.__scopeMenu, value: l, onValueChange: f, children: S.jsx(gd, { ...s, ref: r }) });
});
Iy.displayName = By;
var Py = "MenuRadioItem", qy = d.forwardRef((a, r) => {
  const { value: l, ...i } = a, s = xT(Py, a.__scopeMenu), f = l === s.value;
  return S.jsx(Vy, { scope: a.__scopeMenu, checked: f, children: S.jsx(Tc, { role: "menuitemradio", "aria-checked": f, ...i, ref: r, "data-state": Sd(f), onSelect: ne(i.onSelect, () => {
    var _a;
    return (_a = s.onValueChange) == null ? void 0 : _a.call(s, l);
  }, { checkForDefaultPrevented: false }) }) });
});
qy.displayName = Py;
var yd = "MenuItemIndicator", [Vy, ET] = uo(yd, { checked: false }), Gy = d.forwardRef((a, r) => {
  const { __scopeMenu: l, forceMount: i, ...s } = a, f = ET(yd, l);
  return S.jsx(Vt, { present: i || lc(f.checked) || f.checked === true, children: S.jsx(fe.span, { ...s, ref: r, "data-state": Sd(f.checked) }) });
});
Gy.displayName = yd;
var _T = "MenuSeparator", Yy = d.forwardRef((a, r) => {
  const { __scopeMenu: l, ...i } = a;
  return S.jsx(fe.div, { role: "separator", "aria-orientation": "horizontal", ...i, ref: r });
});
Yy.displayName = _T;
var CT = "MenuArrow", Ky = d.forwardRef((a, r) => {
  const { __scopeMenu: l, ...i } = a, s = Cr(l);
  return S.jsx(bc, { ...s, ...i, ref: r });
});
Ky.displayName = CT;
var bd = "MenuSub", [MT, Xy] = uo(bd), $y = (a) => {
  const { __scopeMenu: r, children: l, open: i = false, onOpenChange: s } = a, f = za(bd, r), p = Cr(r), [v, y] = d.useState(null), [m, b] = d.useState(null), h = gn(s);
  return d.useEffect(() => (f.open === false && h(false), () => h(false)), [f.open, h]), S.jsx(gc, { ...p, children: S.jsx(Dy, { scope: r, open: i, onOpenChange: h, content: m, onContentChange: b, children: S.jsx(MT, { scope: r, contentId: Xe(), triggerId: Xe(), trigger: v, onTriggerChange: y, children: l }) }) });
};
$y.displayName = bd;
var dr = "MenuSubTrigger", Qy = d.forwardRef((a, r) => {
  const l = za(dr, a.__scopeMenu), i = Mr(dr, a.__scopeMenu), s = Xy(dr, a.__scopeMenu), f = md(dr, a.__scopeMenu), p = d.useRef(null), { pointerGraceTimerRef: v, onPointerGraceIntentChange: y } = f, m = { __scopeMenu: a.__scopeMenu }, b = d.useCallback(() => {
    p.current && window.clearTimeout(p.current), p.current = null;
  }, []);
  return d.useEffect(() => b, [b]), d.useEffect(() => {
    const h = v.current;
    return () => {
      window.clearTimeout(h), y(null);
    };
  }, [v, y]), S.jsx(pd, { asChild: true, ...m, children: S.jsx(Hy, { id: s.triggerId, "aria-haspopup": "menu", "aria-expanded": l.open, "aria-controls": s.contentId, "data-state": Jy(l.open), ...a, ref: An(r, s.onTriggerChange), onClick: (h) => {
    var _a;
    (_a = a.onClick) == null ? void 0 : _a.call(a, h), !(a.disabled || h.defaultPrevented) && (h.currentTarget.focus(), l.open || l.onOpenChange(true));
  }, onPointerMove: ne(a.onPointerMove, vr((h) => {
    f.onItemEnter(h), !h.defaultPrevented && !a.disabled && !l.open && !p.current && (f.onPointerGraceIntentChange(null), p.current = window.setTimeout(() => {
      l.onOpenChange(true), b();
    }, 100));
  })), onPointerLeave: ne(a.onPointerLeave, vr((h) => {
    var _a, _b2;
    b();
    const E = (_a = l.content) == null ? void 0 : _a.getBoundingClientRect();
    if (E) {
      const w = (_b2 = l.content) == null ? void 0 : _b2.dataset.side, M = w === "right", _ = M ? -5 : 5, C = E[M ? "left" : "right"], R = E[M ? "right" : "left"];
      f.onPointerGraceIntentChange({ area: [{ x: h.clientX + _, y: h.clientY }, { x: C, y: E.top }, { x: R, y: E.top }, { x: R, y: E.bottom }, { x: C, y: E.bottom }], side: w }), window.clearTimeout(v.current), v.current = window.setTimeout(() => f.onPointerGraceIntentChange(null), 300);
    } else {
      if (f.onTriggerLeave(h), h.defaultPrevented) return;
      f.onPointerGraceIntentChange(null);
    }
  })), onKeyDown: ne(a.onKeyDown, (h) => {
    var _a;
    const E = f.searchRef.current !== "";
    a.disabled || E && h.key === " " || rT[i.dir].includes(h.key) && (l.onOpenChange(true), (_a = l.content) == null ? void 0 : _a.focus(), h.preventDefault());
  }) }) });
});
Qy.displayName = dr;
var Zy = "MenuSubContent", Fy = d.forwardRef((a, r) => {
  const l = zy(sn, a.__scopeMenu), { forceMount: i = l.forceMount, ...s } = a, f = za(sn, a.__scopeMenu), p = Mr(sn, a.__scopeMenu), v = Xy(Zy, a.__scopeMenu), y = d.useRef(null), m = Ee(r, y);
  return S.jsx(mr.Provider, { scope: a.__scopeMenu, children: S.jsx(Vt, { present: i || f.open, children: S.jsx(mr.Slot, { scope: a.__scopeMenu, children: S.jsx(vd, { id: v.contentId, "aria-labelledby": v.triggerId, ...s, ref: m, align: "start", side: p.dir === "rtl" ? "left" : "right", disableOutsidePointerEvents: false, disableOutsideScroll: false, trapFocus: false, onOpenAutoFocus: (b) => {
    var _a;
    p.isUsingKeyboardRef.current && ((_a = y.current) == null ? void 0 : _a.focus()), b.preventDefault();
  }, onCloseAutoFocus: (b) => b.preventDefault(), onFocusOutside: ne(a.onFocusOutside, (b) => {
    b.target !== v.trigger && f.onOpenChange(false);
  }), onEscapeKeyDown: ne(a.onEscapeKeyDown, (b) => {
    p.onClose(), b.preventDefault();
  }), onKeyDown: ne(a.onKeyDown, (b) => {
    var _a;
    const h = b.currentTarget.contains(b.target), E = iT[p.dir].includes(b.key);
    h && E && (f.onOpenChange(false), (_a = v.trigger) == null ? void 0 : _a.focus(), b.preventDefault());
  }) }) }) }) });
});
Fy.displayName = Zy;
function Jy(a) {
  return a ? "open" : "closed";
}
function lc(a) {
  return a === "indeterminate";
}
function Sd(a) {
  return lc(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
function RT(a) {
  const r = document.activeElement;
  for (const l of a) if (l === r || (l.focus(), document.activeElement !== r)) return;
}
function wT(a, r) {
  return a.map((l, i) => a[(r + i) % a.length]);
}
function TT(a, r, l) {
  const s = r.length > 1 && Array.from(r).every((m) => m === r[0]) ? r[0] : r, f = l ? a.indexOf(l) : -1;
  let p = wT(a, Math.max(f, 0));
  s.length === 1 && (p = p.filter((m) => m !== l));
  const y = p.find((m) => m.toLowerCase().startsWith(s.toLowerCase()));
  return y !== l ? y : void 0;
}
function AT(a, r) {
  const { x: l, y: i } = a;
  let s = false;
  for (let f = 0, p = r.length - 1; f < r.length; p = f++) {
    const v = r[f], y = r[p], m = v.x, b = v.y, h = y.x, E = y.y;
    b > i != E > i && l < (h - m) * (i - b) / (E - b) + m && (s = !s);
  }
  return s;
}
function NT(a, r) {
  if (!r) return false;
  const l = { x: a.clientX, y: a.clientY };
  return AT(l, r);
}
function vr(a) {
  return (r) => r.pointerType === "mouse" ? a(r) : void 0;
}
var Wy = Oy, e1 = pd, t1 = jy, n1 = ky, a1 = gd, o1 = Ly, l1 = Tc, r1 = Uy, i1 = Iy, c1 = qy, u1 = Gy, s1 = Yy, f1 = Ky, DT = $y, d1 = Qy, p1 = Fy, Rr = "Menubar", [Hf, OT, zT] = ul(Rr), [h1] = Et(Rr, [zT, fl]), wt = dd(), m1 = fl(), [jT, xd] = h1(Rr), v1 = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, value: i, onValueChange: s, defaultValue: f, loop: p = true, dir: v, ...y } = a, m = co(v), b = m1(l), [h, E] = Nt({ prop: i, onChange: s, defaultProp: f ?? "", caller: Rr }), [w, M] = d.useState(null);
  return S.jsx(jT, { scope: l, value: h, onMenuOpen: d.useCallback((_) => {
    E(_), M(_);
  }, [E]), onMenuClose: d.useCallback(() => E(""), [E]), onMenuToggle: d.useCallback((_) => {
    E((C) => C ? "" : _), M(_);
  }, [E]), dir: m, loop: p, children: S.jsx(Hf.Provider, { scope: l, children: S.jsx(Hf.Slot, { scope: l, children: S.jsx(id, { asChild: true, ...b, orientation: "horizontal", loop: p, dir: m, currentTabStopId: w, onCurrentTabStopIdChange: M, children: S.jsx(fe.div, { role: "menubar", ...y, ref: r }) }) }) }) });
});
v1.displayName = Rr;
var Ed = "MenubarMenu", [kT, g1] = h1(Ed), y1 = (a) => {
  const { __scopeMenubar: r, value: l, ...i } = a, s = Xe(), f = l || s || "LEGACY_REACT_AUTO_VALUE", p = xd(Ed, r), v = wt(r), y = d.useRef(null), m = d.useRef(false), b = p.value === f;
  return d.useEffect(() => {
    b || (m.current = false);
  }, [b]), S.jsx(kT, { scope: r, value: f, triggerId: Xe(), triggerRef: y, contentId: Xe(), wasKeyboardTriggerOpenRef: m, children: S.jsx(Wy, { ...v, open: b, onOpenChange: (h) => {
    h || p.onMenuClose();
  }, modal: false, dir: p.dir, ...i }) });
};
y1.displayName = Ed;
var Uf = "MenubarTrigger", b1 = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, disabled: i = false, ...s } = a, f = m1(l), p = wt(l), v = xd(Uf, l), y = g1(Uf, l), m = d.useRef(null), b = Ee(r, m, y.triggerRef), [h, E] = d.useState(false), w = v.value === y.value;
  return S.jsx(Hf.ItemSlot, { scope: l, value: y.value, disabled: i, children: S.jsx(cd, { asChild: true, ...f, focusable: !i, tabStopId: y.value, children: S.jsx(e1, { asChild: true, ...p, children: S.jsx(fe.button, { type: "button", role: "menuitem", id: y.triggerId, "aria-haspopup": "menu", "aria-expanded": w, "aria-controls": w ? y.contentId : void 0, "data-highlighted": h ? "" : void 0, "data-state": w ? "open" : "closed", "data-disabled": i ? "" : void 0, disabled: i, ...s, ref: b, onPointerDown: ne(a.onPointerDown, (M) => {
    !i && M.button === 0 && M.ctrlKey === false && (v.onMenuOpen(y.value), w || M.preventDefault());
  }), onPointerEnter: ne(a.onPointerEnter, () => {
    var _a;
    v.value && !w && (v.onMenuOpen(y.value), (_a = m.current) == null ? void 0 : _a.focus());
  }), onKeyDown: ne(a.onKeyDown, (M) => {
    i || (["Enter", " "].includes(M.key) && v.onMenuToggle(y.value), M.key === "ArrowDown" && v.onMenuOpen(y.value), ["Enter", " ", "ArrowDown"].includes(M.key) && (y.wasKeyboardTriggerOpenRef.current = true, M.preventDefault()));
  }), onFocus: ne(a.onFocus, () => E(true)), onBlur: ne(a.onBlur, () => E(false)) }) }) }) });
});
b1.displayName = Uf;
var LT = "MenubarPortal", S1 = (a) => {
  const { __scopeMenubar: r, ...l } = a, i = wt(r);
  return S.jsx(t1, { ...i, ...l });
};
S1.displayName = LT;
var Bf = "MenubarContent", x1 = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, align: i = "start", ...s } = a, f = wt(l), p = xd(Bf, l), v = g1(Bf, l), y = OT(l), m = d.useRef(false);
  return S.jsx(n1, { id: v.contentId, "aria-labelledby": v.triggerId, "data-radix-menubar-content": "", ...f, ...s, ref: r, align: i, onCloseAutoFocus: ne(a.onCloseAutoFocus, (b) => {
    var _a;
    !p.value && !m.current && ((_a = v.triggerRef.current) == null ? void 0 : _a.focus()), m.current = false, b.preventDefault();
  }), onFocusOutside: ne(a.onFocusOutside, (b) => {
    const h = b.target;
    y().some((w) => {
      var _a;
      return (_a = w.ref.current) == null ? void 0 : _a.contains(h);
    }) && b.preventDefault();
  }), onInteractOutside: ne(a.onInteractOutside, () => {
    m.current = true;
  }), onEntryFocus: (b) => {
    v.wasKeyboardTriggerOpenRef.current || b.preventDefault();
  }, onKeyDown: ne(a.onKeyDown, (b) => {
    if (["ArrowRight", "ArrowLeft"].includes(b.key)) {
      const h = b.target, E = h.hasAttribute("data-radix-menubar-subtrigger"), w = h.closest("[data-radix-menubar-content]") !== b.currentTarget, _ = (p.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === b.key;
      if (!_ && E || w && _) return;
      let O = y().filter((Z) => !Z.disabled).map((Z) => Z.value);
      _ && O.reverse();
      const k = O.indexOf(v.value);
      O = p.loop ? FT(O, k + 1) : O.slice(k + 1);
      const [I] = O;
      I && p.onMenuOpen(I);
    }
  }, { checkForDefaultPrevented: false }), style: { ...a.style, "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-menubar-content-available-width": "var(--radix-popper-available-width)", "--radix-menubar-content-available-height": "var(--radix-popper-available-height)", "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)", "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)" } });
});
x1.displayName = Bf;
var HT = "MenubarGroup", UT = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, ...i } = a, s = wt(l);
  return S.jsx(a1, { ...s, ...i, ref: r });
});
UT.displayName = HT;
var BT = "MenubarLabel", IT = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, ...i } = a, s = wt(l);
  return S.jsx(o1, { ...s, ...i, ref: r });
});
IT.displayName = BT;
var PT = "MenubarItem", E1 = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, ...i } = a, s = wt(l);
  return S.jsx(l1, { ...s, ...i, ref: r });
});
E1.displayName = PT;
var qT = "MenubarCheckboxItem", _1 = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, ...i } = a, s = wt(l);
  return S.jsx(r1, { ...s, ...i, ref: r });
});
_1.displayName = qT;
var VT = "MenubarRadioGroup", C1 = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, ...i } = a, s = wt(l);
  return S.jsx(i1, { ...s, ...i, ref: r });
});
C1.displayName = VT;
var GT = "MenubarRadioItem", M1 = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, ...i } = a, s = wt(l);
  return S.jsx(c1, { ...s, ...i, ref: r });
});
M1.displayName = GT;
var YT = "MenubarItemIndicator", R1 = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, ...i } = a, s = wt(l);
  return S.jsx(u1, { ...s, ...i, ref: r });
});
R1.displayName = YT;
var KT = "MenubarSeparator", w1 = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, ...i } = a, s = wt(l);
  return S.jsx(s1, { ...s, ...i, ref: r });
});
w1.displayName = KT;
var XT = "MenubarArrow", $T = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, ...i } = a, s = wt(l);
  return S.jsx(f1, { ...s, ...i, ref: r });
});
$T.displayName = XT;
var T1 = "MenubarSub", A1 = (a) => {
  const { __scopeMenubar: r, children: l, open: i, onOpenChange: s, defaultOpen: f } = a, p = wt(r), [v, y] = Nt({ prop: i, defaultProp: f ?? false, onChange: s, caller: T1 });
  return S.jsx(DT, { ...p, open: v, onOpenChange: y, children: l });
};
A1.displayName = T1;
var QT = "MenubarSubTrigger", N1 = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, ...i } = a, s = wt(l);
  return S.jsx(d1, { "data-radix-menubar-subtrigger": "", ...s, ...i, ref: r });
});
N1.displayName = QT;
var ZT = "MenubarSubContent", D1 = d.forwardRef((a, r) => {
  const { __scopeMenubar: l, ...i } = a, s = wt(l);
  return S.jsx(p1, { ...s, "data-radix-menubar-content": "", ...i, ref: r, style: { ...a.style, "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-menubar-content-available-width": "var(--radix-popper-available-width)", "--radix-menubar-content-available-height": "var(--radix-popper-available-height)", "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)", "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)" } });
});
D1.displayName = ZT;
function FT(a, r) {
  return a.map((l, i) => a[(r + i) % a.length]);
}
var g3 = v1, y3 = y1, b3 = b1, S3 = S1, x3 = x1, E3 = E1, _3 = _1, C3 = C1, M3 = M1, R3 = R1, w3 = w1, T3 = A1, A3 = N1, N3 = D1, O1 = "AlertDialog", [JT] = Et(O1, [Z0]), Fn = Z0(), z1 = (a) => {
  const { __scopeAlertDialog: r, ...l } = a, i = Fn(r);
  return S.jsx(dg, { ...i, ...l, modal: true });
};
z1.displayName = O1;
var WT = "AlertDialogTrigger", j1 = d.forwardRef((a, r) => {
  const { __scopeAlertDialog: l, ...i } = a, s = Fn(l);
  return S.jsx(AR, { ...s, ...i, ref: r });
});
j1.displayName = WT;
var eA = "AlertDialogPortal", k1 = (a) => {
  const { __scopeAlertDialog: r, ...l } = a, i = Fn(r);
  return S.jsx(pg, { ...i, ...l });
};
k1.displayName = eA;
var tA = "AlertDialogOverlay", L1 = d.forwardRef((a, r) => {
  const { __scopeAlertDialog: l, ...i } = a, s = Fn(l);
  return S.jsx(hg, { ...s, ...i, ref: r });
});
L1.displayName = tA;
var ol = "AlertDialogContent", [nA, aA] = JT(ol), oA = U0("AlertDialogContent"), H1 = d.forwardRef((a, r) => {
  const { __scopeAlertDialog: l, children: i, ...s } = a, f = Fn(l), p = d.useRef(null), v = Ee(r, p), y = d.useRef(null);
  return S.jsx(MR, { contentName: ol, titleName: U1, docsSlug: "alert-dialog", children: S.jsx(nA, { scope: l, cancelRef: y, children: S.jsxs(mg, { role: "alertdialog", ...f, ...s, ref: v, onOpenAutoFocus: ne(s.onOpenAutoFocus, (m) => {
    var _a;
    m.preventDefault(), (_a = y.current) == null ? void 0 : _a.focus({ preventScroll: true });
  }), onPointerDownOutside: (m) => m.preventDefault(), onInteractOutside: (m) => m.preventDefault(), children: [S.jsx(oA, { children: i }), S.jsx(rA, { contentRef: p })] }) }) });
});
H1.displayName = ol;
var U1 = "AlertDialogTitle", B1 = d.forwardRef((a, r) => {
  const { __scopeAlertDialog: l, ...i } = a, s = Fn(l);
  return S.jsx(NR, { ...s, ...i, ref: r });
});
B1.displayName = U1;
var I1 = "AlertDialogDescription", P1 = d.forwardRef((a, r) => {
  const { __scopeAlertDialog: l, ...i } = a, s = Fn(l);
  return S.jsx(DR, { ...s, ...i, ref: r });
});
P1.displayName = I1;
var lA = "AlertDialogAction", q1 = d.forwardRef((a, r) => {
  const { __scopeAlertDialog: l, ...i } = a, s = Fn(l);
  return S.jsx(vg, { ...s, ...i, ref: r });
});
q1.displayName = lA;
var V1 = "AlertDialogCancel", G1 = d.forwardRef((a, r) => {
  const { __scopeAlertDialog: l, ...i } = a, { cancelRef: s } = aA(V1, l), f = Fn(l), p = Ee(r, s);
  return S.jsx(vg, { ...f, ...i, ref: p });
});
G1.displayName = V1;
var rA = ({ contentRef: a }) => {
  const r = `\`${ol}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${ol}\` by passing a \`${I1}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${ol}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return d.useEffect(() => {
    var _a;
    document.getElementById((_a = a.current) == null ? void 0 : _a.getAttribute("aria-describedby")) || console.warn(r);
  }, [r, a]), null;
}, D3 = z1, O3 = j1, z3 = k1, j3 = L1, k3 = H1, L3 = q1, H3 = G1, U3 = B1, B3 = P1;
function iA(a) {
  return typeof a == "object" && a !== null && typeof a.hasPendingGraphRun == "function";
}
class cA {
  constructor() {
    this.contexts = /* @__PURE__ */ new Map(), this.clearListeners = /* @__PURE__ */ new Set();
  }
  getOrCreateContext(r) {
    let l = this.contexts.get(r);
    return l || (l = { queue: [], jobs: /* @__PURE__ */ new Map(), dependencies: /* @__PURE__ */ new Map(), completed: /* @__PURE__ */ new Set() }, this.contexts.set(r, l)), l;
  }
  schedule({ contextId: r, jobId: l, dependencies: i, run: s }) {
    if (typeof r > "u") {
      s();
      return;
    }
    const f = this.getOrCreateContext(r);
    if (f.jobs.has(l) || f.queue.push(l), f.jobs.set(l, s), i) {
      const p = new Set(i);
      p.delete(l), f.dependencies.set(l, p);
    } else f.dependencies.has(l) || f.dependencies.set(l, /* @__PURE__ */ new Set());
    f.completed.delete(l);
  }
  flush(r) {
    const l = this.contexts.get(r);
    if (!l) return;
    const { queue: i, jobs: s, dependencies: f, completed: p } = l;
    for (; i.length > 0; ) {
      let v = false;
      const y = i.length;
      for (let m = 0; m < y; m++) {
        const b = i.shift(), h = s.get(b);
        if (!h) {
          f.delete(b), p.delete(b);
          continue;
        }
        const E = f.get(b);
        let w = !E;
        if (E) {
          w = true;
          for (const M of E) {
            if (M === b) continue;
            const _ = iA(M) && M.hasPendingGraphRun(r);
            if (s.has(M) && !p.has(M) || !s.has(M) && _) {
              w = false;
              break;
            }
          }
        }
        w ? (s.delete(b), f.delete(b), h(), p.add(b), v = true) : i.push(b);
      }
      if (!v) throw new Error(`Scheduler detected unresolved dependencies for context ${String(r)}.`);
    }
    this.contexts.delete(r);
  }
  flushAll() {
    for (const r of Array.from(this.contexts.keys())) this.flush(r);
  }
  clear(r) {
    this.contexts.delete(r), this.clearListeners.forEach((l) => l(r));
  }
  onClear(r) {
    return this.clearListeners.add(r), () => this.clearListeners.delete(r);
  }
  hasPendingJobs(r) {
    const l = this.contexts.get(r);
    return !!l && l.jobs.size > 0;
  }
  clearJob(r, l) {
    const i = this.contexts.get(r);
    i && (i.jobs.delete(l), i.dependencies.delete(l), i.completed.delete(l), i.queue = i.queue.filter((s) => s !== l), i.jobs.size === 0 && this.contexts.delete(r));
  }
}
const I3 = new cA(), bf = 1;
function P3(a, r = []) {
  var _a;
  const l = a && typeof a == "object" && typeof a.subscribeChanges == "function" && typeof a.startSyncImmediate == "function" && typeof a.id == "string", i = d.useRef(null), s = d.useRef(null), f = d.useRef(null), p = d.useRef(0), v = d.useRef(null), y = !i.current || l && f.current !== a || !l && (s.current === null || s.current.length !== r.length || s.current.some((M, _) => M !== r[_]));
  if (y) if (l) ((_a = a.config) == null ? void 0 : _a.syncMode) === "on-demand" && console.warn(`[useLiveQuery] Warning: Passing a collection with syncMode "on-demand" directly to useLiveQuery will not load any data. In on-demand mode, data is only loaded when queries with predicates request it.

Instead, use a query builder function:
  const { data } = useLiveQuery((q) => q.from({ c: myCollection }).select(({ c }) => c))

Or switch to syncMode "eager" if you want all data to sync automatically.`), a.startSyncImmediate(), i.current = a, f.current = a;
  else if (typeof a == "function") {
    const M = new Tv(), _ = a(M);
    if (_ == null) i.current = null;
    else if (_ instanceof Cx) _.startSyncImmediate(), i.current = _;
    else if (_ instanceof Tv) i.current = Qs({ query: a, startSync: true, gcTime: bf });
    else if (_ && typeof _ == "object") i.current = Qs({ startSync: true, gcTime: bf, ..._ });
    else throw new Error(`useLiveQuery callback must return a QueryBuilder, LiveQueryCollectionConfig, Collection, undefined, or null. Got: ${typeof _}`);
    s.current = [...r];
  } else i.current = Qs({ startSync: true, gcTime: bf, ...a }), s.current = [...r];
  y && (p.current = 0, v.current = null);
  const m = d.useRef(null);
  (!m.current || y) && (m.current = (M) => {
    if (!i.current) return () => {
    };
    const _ = i.current.subscribeChanges(() => {
      p.current += 1, M();
    });
    return i.current.status === "ready" && (p.current += 1, M()), () => {
      _.unsubscribe();
    };
  });
  const b = d.useRef(null);
  (!b.current || y) && (b.current = () => {
    const M = p.current, _ = i.current;
    return (!v.current || v.current.version !== M || v.current.collection !== _) && (v.current = { collection: _, version: M }), v.current;
  });
  const h = d.useSyncExternalStore(m.current, b.current), E = d.useRef(null), w = d.useRef(null);
  if (!E.current || E.current.version !== h.version || E.current.collection !== h.collection) {
    if (!h.collection) w.current = { state: void 0, data: void 0, collection: void 0, status: "disabled", isLoading: false, isReady: true, isIdle: false, isError: false, isCleanedUp: false, isEnabled: false };
    else {
      const M = Array.from(h.collection.entries()), C = h.collection.config.singleResult;
      let R = null, O = null;
      w.current = { get state() {
        return R || (R = new Map(M)), R;
      }, get data() {
        return O || (O = M.map(([, k]) => k)), C ? O[0] : O;
      }, collection: h.collection, status: h.collection.status, isLoading: h.collection.status === "loading", isReady: h.collection.status === "ready", isIdle: h.collection.status === "idle", isError: h.collection.status === "error", isCleanedUp: h.collection.status === "cleaned-up", isEnabled: true };
    }
    E.current = h;
  }
  return w.current;
}
const rc = {}, _d = (a) => typeof a == "object" && a !== null, uA = (a) => _d(a) && !Ac.has(a) && (Array.isArray(a) || !(Symbol.iterator in a)) && !(a instanceof WeakMap) && !(a instanceof WeakSet) && !(a instanceof Error) && !(a instanceof Number) && !(a instanceof Date) && !(a instanceof String) && !(a instanceof RegExp) && !(a instanceof ArrayBuffer) && !(a instanceof Promise), Y1 = (a, r) => {
  const l = y0.get(a);
  if ((l == null ? void 0 : l[0]) === r) return l[1];
  const i = Array.isArray(a) ? [] : Object.create(Object.getPrototypeOf(a));
  return Nv(i, true), y0.set(a, [r, i]), Reflect.ownKeys(a).forEach((s) => {
    if (Object.getOwnPropertyDescriptor(i, s)) return;
    const f = Reflect.get(a, s), { enumerable: p } = Reflect.getOwnPropertyDescriptor(a, s), v = { value: f, enumerable: p, configurable: true };
    if (Ac.has(f)) Nv(f, false);
    else if (Ta.has(f)) {
      const [y, m] = Ta.get(f);
      v.value = Y1(y, m());
    }
    Object.defineProperty(i, s, v);
  }), Object.preventExtensions(i);
}, sA = (a, r, l, i) => ({ deleteProperty(s, f) {
  Reflect.get(s, f), l(f);
  const p = Reflect.deleteProperty(s, f);
  return p && i(void 0), p;
}, set(s, f, p, v) {
  const y = !a() && Reflect.has(s, f), m = Reflect.get(s, f, v);
  if (y && (b0(m, p) || ic.has(p) && b0(m, ic.get(p)))) return true;
  l(f), _d(p) && (p = kx(p) || p);
  const b = !Ta.has(p) && dA(p) ? mA(p) : p;
  return r(f, b), Reflect.set(s, f, b, v), i(void 0), true;
} }), Ta = /* @__PURE__ */ new WeakMap(), Ac = /* @__PURE__ */ new WeakSet(), y0 = /* @__PURE__ */ new WeakMap(), Sf = [1], ic = /* @__PURE__ */ new WeakMap();
let b0 = Object.is, fA = (a, r) => new Proxy(a, r), dA = uA, pA = Y1, hA = sA;
function mA(a = {}) {
  if (!_d(a)) throw new Error("object required");
  const r = ic.get(a);
  if (r) return r;
  let l = Sf[0];
  const i = /* @__PURE__ */ new Set(), s = (C, R = ++Sf[0]) => {
    l !== R && (f = l = R, i.forEach((O) => O(C, R)));
  };
  let f = l;
  const p = (C = Sf[0]) => (f !== C && (f = C, y.forEach(([R]) => {
    const O = R[1](C);
    O > l && (l = O);
  })), l), v = (C) => (R, O) => {
    let k;
    R && (k = [...R], k[1] = [C, ...k[1]]), s(k, O);
  }, y = /* @__PURE__ */ new Map(), m = (C, R) => {
    const O = !Ac.has(R) && Ta.get(R);
    if (O) {
      if ((rc ? "production" : void 0) !== "production" && y.has(C)) throw new Error("prop listener already exists");
      if (i.size) {
        const k = O[2](v(C));
        y.set(C, [O, k]);
      } else y.set(C, [O]);
    }
  }, b = (C) => {
    var R;
    const O = y.get(C);
    O && (y.delete(C), (R = O[1]) == null || R.call(O));
  }, h = (C) => (i.add(C), i.size === 1 && y.forEach(([O, k], I) => {
    if ((rc ? "production" : void 0) !== "production" && k) throw new Error("remove already exists");
    const Z = O[2](v(I));
    y.set(I, [O, Z]);
  }), () => {
    i.delete(C), i.size === 0 && y.forEach(([O, k], I) => {
      k && (k(), y.set(I, [O]));
    });
  });
  let E = true;
  const w = hA(() => E, m, b, s), M = fA(a, w);
  ic.set(a, M);
  const _ = [a, p, h];
  return Ta.set(M, _), Reflect.ownKeys(a).forEach((C) => {
    const R = Object.getOwnPropertyDescriptor(a, C);
    "value" in R && R.writable && (M[C] = a[C]);
  }), E = false, M;
}
function q3(a) {
  const r = Ta.get(a);
  return r == null ? void 0 : r[1]();
}
function vA(a, r, l) {
  const i = Ta.get(a);
  (rc ? "production" : void 0) !== "production" && !i && console.warn("Please use proxy object");
  let s;
  const f = [], p = i[2];
  let v = false;
  const m = p((b) => {
    b && f.push(b), s || (s = Promise.resolve().then(() => {
      s = void 0, v && r(f.splice(0));
    }));
  });
  return v = true, () => {
    v = false, m();
  };
}
function S0(a) {
  const r = Ta.get(a);
  (rc ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [l, i] = r;
  return pA(l, i());
}
function V3(a) {
  return Ac.add(a), a;
}
const gA = {}, yA = (a, r) => {
  const l = d.useRef(void 0);
  d.useEffect(() => {
    l.current = Ux(a, r);
  }), d.useDebugValue(l.current);
}, bA = yA, SA = /* @__PURE__ */ new WeakMap();
function G3(a, r) {
  const i = d.useMemo(() => a && /* @__PURE__ */ new WeakMap(), [a]), s = d.useRef(void 0), f = d.useRef(false), p = d.useSyncExternalStore(d.useCallback((y) => {
    f.current = true;
    const m = vA(a, y);
    return y(), () => {
      m(), f.current = false;
    };
  }, [a, void 0]), () => {
    const y = S0(a);
    try {
      if (f.current && s.current && !Lx(s.current, y, i, /* @__PURE__ */ new WeakMap())) return s.current;
    } catch {
    }
    return y;
  }, () => S0(a));
  d.useLayoutEffect(() => {
    s.current = p;
  }), (gA ? "production" : void 0) !== "production" && bA(p, i);
  const v = d.useMemo(() => /* @__PURE__ */ new WeakMap(), []);
  return Hx(p, i, v, SA);
}
var K1 = ["PageUp", "PageDown"], X1 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], $1 = { "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"], "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"] }, dl = "Slider", [If, xA, EA] = ul(dl), [Q1] = Et(dl, [EA]), [_A, Nc] = Q1(dl), Z1 = d.forwardRef((a, r) => {
  const { name: l, min: i = 0, max: s = 100, step: f = 1, orientation: p = "horizontal", disabled: v = false, minStepsBetweenThumbs: y = 0, defaultValue: m = [i], value: b, onValueChange: h = () => {
  }, onValueCommit: E = () => {
  }, inverted: w = false, form: M, ..._ } = a, C = d.useRef(/* @__PURE__ */ new Set()), R = d.useRef(0), k = p === "horizontal" ? CA : MA, [I = [], Z] = Nt({ prop: b, defaultProp: m, onChange: (ue) => {
    var _a;
    (_a = [...C.current][R.current]) == null ? void 0 : _a.focus(), h(ue);
  } }), F = d.useRef(I);
  function V(ue) {
    const de = NA(I, ue);
    ve(ue, de);
  }
  function oe(ue) {
    ve(ue, R.current);
  }
  function ge() {
    const ue = F.current[R.current];
    I[R.current] !== ue && E(I);
  }
  function ve(ue, de, { commit: he } = { commit: false }) {
    const be = jA(f), ye = kA(Math.round((ue - i) / f) * f + i, be), z = Ji(ye, [i, s]);
    Z((X = []) => {
      const W = TA(X, z, de);
      if (zA(W, y * f)) {
        R.current = W.indexOf(z);
        const ee = String(W) !== String(X);
        return ee && he && E(W), ee ? W : X;
      } else return X;
    });
  }
  return S.jsx(_A, { scope: a.__scopeSlider, name: l, disabled: v, min: i, max: s, valueIndexToChangeRef: R, thumbs: C.current, values: I, orientation: p, form: M, children: S.jsx(If.Provider, { scope: a.__scopeSlider, children: S.jsx(If.Slot, { scope: a.__scopeSlider, children: S.jsx(k, { "aria-disabled": v, "data-disabled": v ? "" : void 0, ..._, ref: r, onPointerDown: ne(_.onPointerDown, () => {
    v || (F.current = I);
  }), min: i, max: s, inverted: w, onSlideStart: v ? void 0 : V, onSlideMove: v ? void 0 : oe, onSlideEnd: v ? void 0 : ge, onHomeKeyDown: () => !v && ve(i, 0, { commit: true }), onEndKeyDown: () => !v && ve(s, I.length - 1, { commit: true }), onStepKeyDown: ({ event: ue, direction: de }) => {
    if (!v) {
      const ye = K1.includes(ue.key) || ue.shiftKey && X1.includes(ue.key) ? 10 : 1, z = R.current, X = I[z], W = f * ye * de;
      ve(X + W, z, { commit: true });
    }
  } }) }) }) });
});
Z1.displayName = dl;
var [F1, J1] = Q1(dl, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }), CA = d.forwardRef((a, r) => {
  const { min: l, max: i, dir: s, inverted: f, onSlideStart: p, onSlideMove: v, onSlideEnd: y, onStepKeyDown: m, ...b } = a, [h, E] = d.useState(null), w = Ee(r, (k) => E(k)), M = d.useRef(void 0), _ = co(s), C = _ === "ltr", R = C && !f || !C && f;
  function O(k) {
    const I = M.current || h.getBoundingClientRect(), Z = [0, I.width], V = Cd(Z, R ? [l, i] : [i, l]);
    return M.current = I, V(k - I.left);
  }
  return S.jsx(F1, { scope: a.__scopeSlider, startEdge: R ? "left" : "right", endEdge: R ? "right" : "left", direction: R ? 1 : -1, size: "width", children: S.jsx(W1, { dir: _, "data-orientation": "horizontal", ...b, ref: w, style: { ...b.style, "--radix-slider-thumb-transform": "translateX(-50%)" }, onSlideStart: (k) => {
    const I = O(k.clientX);
    p == null ? void 0 : p(I);
  }, onSlideMove: (k) => {
    const I = O(k.clientX);
    v == null ? void 0 : v(I);
  }, onSlideEnd: () => {
    M.current = void 0, y == null ? void 0 : y();
  }, onStepKeyDown: (k) => {
    const Z = $1[R ? "from-left" : "from-right"].includes(k.key);
    m == null ? void 0 : m({ event: k, direction: Z ? -1 : 1 });
  } }) });
}), MA = d.forwardRef((a, r) => {
  const { min: l, max: i, inverted: s, onSlideStart: f, onSlideMove: p, onSlideEnd: v, onStepKeyDown: y, ...m } = a, b = d.useRef(null), h = Ee(r, b), E = d.useRef(void 0), w = !s;
  function M(_) {
    const C = E.current || b.current.getBoundingClientRect(), R = [0, C.height], k = Cd(R, w ? [i, l] : [l, i]);
    return E.current = C, k(_ - C.top);
  }
  return S.jsx(F1, { scope: a.__scopeSlider, startEdge: w ? "bottom" : "top", endEdge: w ? "top" : "bottom", size: "height", direction: w ? 1 : -1, children: S.jsx(W1, { "data-orientation": "vertical", ...m, ref: h, style: { ...m.style, "--radix-slider-thumb-transform": "translateY(50%)" }, onSlideStart: (_) => {
    const C = M(_.clientY);
    f == null ? void 0 : f(C);
  }, onSlideMove: (_) => {
    const C = M(_.clientY);
    p == null ? void 0 : p(C);
  }, onSlideEnd: () => {
    E.current = void 0, v == null ? void 0 : v();
  }, onStepKeyDown: (_) => {
    const R = $1[w ? "from-bottom" : "from-top"].includes(_.key);
    y == null ? void 0 : y({ event: _, direction: R ? -1 : 1 });
  } }) });
}), W1 = d.forwardRef((a, r) => {
  const { __scopeSlider: l, onSlideStart: i, onSlideMove: s, onSlideEnd: f, onHomeKeyDown: p, onEndKeyDown: v, onStepKeyDown: y, ...m } = a, b = Nc(dl, l);
  return S.jsx(fe.span, { ...m, ref: r, onKeyDown: ne(a.onKeyDown, (h) => {
    h.key === "Home" ? (p(h), h.preventDefault()) : h.key === "End" ? (v(h), h.preventDefault()) : K1.concat(X1).includes(h.key) && (y(h), h.preventDefault());
  }), onPointerDown: ne(a.onPointerDown, (h) => {
    const E = h.target;
    E.setPointerCapture(h.pointerId), h.preventDefault(), b.thumbs.has(E) ? E.focus() : i(h);
  }), onPointerMove: ne(a.onPointerMove, (h) => {
    h.target.hasPointerCapture(h.pointerId) && s(h);
  }), onPointerUp: ne(a.onPointerUp, (h) => {
    const E = h.target;
    E.hasPointerCapture(h.pointerId) && (E.releasePointerCapture(h.pointerId), f(h));
  }) });
}), eb = "SliderTrack", tb = d.forwardRef((a, r) => {
  const { __scopeSlider: l, ...i } = a, s = Nc(eb, l);
  return S.jsx(fe.span, { "data-disabled": s.disabled ? "" : void 0, "data-orientation": s.orientation, ...i, ref: r });
});
tb.displayName = eb;
var Pf = "SliderRange", nb = d.forwardRef((a, r) => {
  const { __scopeSlider: l, ...i } = a, s = Nc(Pf, l), f = J1(Pf, l), p = d.useRef(null), v = Ee(r, p), y = s.values.length, m = s.values.map((E) => lb(E, s.min, s.max)), b = y > 1 ? Math.min(...m) : 0, h = 100 - Math.max(...m);
  return S.jsx(fe.span, { "data-orientation": s.orientation, "data-disabled": s.disabled ? "" : void 0, ...i, ref: v, style: { ...a.style, [f.startEdge]: b + "%", [f.endEdge]: h + "%" } });
});
nb.displayName = Pf;
var qf = "SliderThumb", ab = d.forwardRef((a, r) => {
  const l = xA(a.__scopeSlider), [i, s] = d.useState(null), f = Ee(r, (v) => s(v)), p = d.useMemo(() => i ? l().findIndex((v) => v.ref.current === i) : -1, [l, i]);
  return S.jsx(RA, { ...a, ref: f, index: p });
}), RA = d.forwardRef((a, r) => {
  const { __scopeSlider: l, index: i, name: s, ...f } = a, p = Nc(qf, l), v = J1(qf, l), [y, m] = d.useState(null), b = Ee(r, (O) => m(O)), h = y ? p.form || !!y.closest("form") : true, E = vc(y), w = p.values[i], M = w === void 0 ? 0 : lb(w, p.min, p.max), _ = AA(i, p.values.length), C = E == null ? void 0 : E[v.size], R = C ? DA(C, M, v.direction) : 0;
  return d.useEffect(() => {
    if (y) return p.thumbs.add(y), () => {
      p.thumbs.delete(y);
    };
  }, [y, p.thumbs]), S.jsxs("span", { style: { transform: "var(--radix-slider-thumb-transform)", position: "absolute", [v.startEdge]: `calc(${M}% + ${R}px)` }, children: [S.jsx(If.ItemSlot, { scope: a.__scopeSlider, children: S.jsx(fe.span, { role: "slider", "aria-label": a["aria-label"] || _, "aria-valuemin": p.min, "aria-valuenow": w, "aria-valuemax": p.max, "aria-orientation": p.orientation, "data-orientation": p.orientation, "data-disabled": p.disabled ? "" : void 0, tabIndex: p.disabled ? void 0 : 0, ...f, ref: b, style: w === void 0 ? { display: "none" } : a.style, onFocus: ne(a.onFocus, () => {
    p.valueIndexToChangeRef.current = i;
  }) }) }), h && S.jsx(ob, { name: s ?? (p.name ? p.name + (p.values.length > 1 ? "[]" : "") : void 0), form: p.form, value: w }, i)] });
});
ab.displayName = qf;
var wA = "RadioBubbleInput", ob = d.forwardRef(({ __scopeSlider: a, value: r, ...l }, i) => {
  const s = d.useRef(null), f = Ee(s, i), p = Sc(r);
  return d.useEffect(() => {
    const v = s.current;
    if (!v) return;
    const y = window.HTMLInputElement.prototype, b = Object.getOwnPropertyDescriptor(y, "value").set;
    if (p !== r && b) {
      const h = new Event("input", { bubbles: true });
      b.call(v, r), v.dispatchEvent(h);
    }
  }, [p, r]), S.jsx(fe.input, { style: { display: "none" }, ...l, ref: f, defaultValue: r });
});
ob.displayName = wA;
function TA(a = [], r, l) {
  const i = [...a];
  return i[l] = r, i.sort((s, f) => s - f);
}
function lb(a, r, l) {
  const f = 100 / (l - r) * (a - r);
  return Ji(f, [0, 100]);
}
function AA(a, r) {
  return r > 2 ? `Value ${a + 1} of ${r}` : r === 2 ? ["Minimum", "Maximum"][a] : void 0;
}
function NA(a, r) {
  if (a.length === 1) return 0;
  const l = a.map((s) => Math.abs(s - r)), i = Math.min(...l);
  return l.indexOf(i);
}
function DA(a, r, l) {
  const i = a / 2, f = Cd([0, 50], [0, i]);
  return (i - f(r) * l) * l;
}
function OA(a) {
  return a.slice(0, -1).map((r, l) => a[l + 1] - r);
}
function zA(a, r) {
  if (r > 0) {
    const l = OA(a);
    return Math.min(...l) >= r;
  }
  return true;
}
function Cd(a, r) {
  return (l) => {
    if (a[0] === a[1] || r[0] === r[1]) return r[0];
    const i = (r[1] - r[0]) / (a[1] - a[0]);
    return r[0] + i * (l - a[0]);
  };
}
function jA(a) {
  return (String(a).split(".")[1] || "").length;
}
function kA(a, r) {
  const l = Math.pow(10, r);
  return Math.round(a * l) / l;
}
var Y3 = Z1, K3 = tb, X3 = nb, $3 = ab;
const LA = (a) => (r, l, i) => (i.setState = (s, f, ...p) => {
  const v = typeof s == "function" ? Bx(s) : s;
  return r(v, f, ...p);
}, a(i.setState, l, i)), Q3 = LA;
var Dc = "Collapsible", [HA, rb] = Et(Dc), [UA, Md] = HA(Dc), ib = d.forwardRef((a, r) => {
  const { __scopeCollapsible: l, open: i, defaultOpen: s, disabled: f, onOpenChange: p, ...v } = a, [y, m] = Nt({ prop: i, defaultProp: s ?? false, onChange: p, caller: Dc });
  return S.jsx(UA, { scope: l, disabled: f, contentId: Xe(), open: y, onOpenToggle: d.useCallback(() => m((b) => !b), [m]), children: S.jsx(fe.div, { "data-state": wd(y), "data-disabled": f ? "" : void 0, ...v, ref: r }) });
});
ib.displayName = Dc;
var cb = "CollapsibleTrigger", ub = d.forwardRef((a, r) => {
  const { __scopeCollapsible: l, ...i } = a, s = Md(cb, l);
  return S.jsx(fe.button, { type: "button", "aria-controls": s.contentId, "aria-expanded": s.open || false, "data-state": wd(s.open), "data-disabled": s.disabled ? "" : void 0, disabled: s.disabled, ...i, ref: r, onClick: ne(a.onClick, s.onOpenToggle) });
});
ub.displayName = cb;
var Rd = "CollapsibleContent", sb = d.forwardRef((a, r) => {
  const { forceMount: l, ...i } = a, s = Md(Rd, a.__scopeCollapsible);
  return S.jsx(Vt, { present: l || s.open, children: ({ present: f }) => S.jsx(BA, { ...i, ref: r, present: f }) });
});
sb.displayName = Rd;
var BA = d.forwardRef((a, r) => {
  const { __scopeCollapsible: l, present: i, children: s, ...f } = a, p = Md(Rd, l), [v, y] = d.useState(i), m = d.useRef(null), b = Ee(r, m), h = d.useRef(0), E = h.current, w = d.useRef(0), M = w.current, _ = p.open || v, C = d.useRef(_), R = d.useRef(void 0);
  return d.useEffect(() => {
    const O = requestAnimationFrame(() => C.current = false);
    return () => cancelAnimationFrame(O);
  }, []), xt(() => {
    const O = m.current;
    if (O) {
      R.current = R.current || { transitionDuration: O.style.transitionDuration, animationName: O.style.animationName }, O.style.transitionDuration = "0s", O.style.animationName = "none";
      const k = O.getBoundingClientRect();
      h.current = k.height, w.current = k.width, C.current || (O.style.transitionDuration = R.current.transitionDuration, O.style.animationName = R.current.animationName), y(i);
    }
  }, [p.open, i]), S.jsx(fe.div, { "data-state": wd(p.open), "data-disabled": p.disabled ? "" : void 0, id: p.contentId, hidden: !_, ...f, ref: b, style: { "--radix-collapsible-content-height": E ? `${E}px` : void 0, "--radix-collapsible-content-width": M ? `${M}px` : void 0, ...a.style }, children: _ && s });
});
function wd(a) {
  return a ? "open" : "closed";
}
var IA = ib, PA = ub, qA = sb, bn = "Accordion", VA = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Td, GA, YA] = ul(bn), [Oc] = Et(bn, [YA, rb]), Ad = rb(), fb = J.forwardRef((a, r) => {
  const { type: l, ...i } = a, s = i, f = i;
  return S.jsx(Td.Provider, { scope: a.__scopeAccordion, children: l === "multiple" ? S.jsx(QA, { ...f, ref: r }) : S.jsx($A, { ...s, ref: r }) });
});
fb.displayName = bn;
var [db, KA] = Oc(bn), [pb, XA] = Oc(bn, { collapsible: false }), $A = J.forwardRef((a, r) => {
  const { value: l, defaultValue: i, onValueChange: s = () => {
  }, collapsible: f = false, ...p } = a, [v, y] = Nt({ prop: l, defaultProp: i ?? "", onChange: s, caller: bn });
  return S.jsx(db, { scope: a.__scopeAccordion, value: J.useMemo(() => v ? [v] : [], [v]), onItemOpen: y, onItemClose: J.useCallback(() => f && y(""), [f, y]), children: S.jsx(pb, { scope: a.__scopeAccordion, collapsible: f, children: S.jsx(hb, { ...p, ref: r }) }) });
}), QA = J.forwardRef((a, r) => {
  const { value: l, defaultValue: i, onValueChange: s = () => {
  }, ...f } = a, [p, v] = Nt({ prop: l, defaultProp: i ?? [], onChange: s, caller: bn }), y = J.useCallback((b) => v((h = []) => [...h, b]), [v]), m = J.useCallback((b) => v((h = []) => h.filter((E) => E !== b)), [v]);
  return S.jsx(db, { scope: a.__scopeAccordion, value: p, onItemOpen: y, onItemClose: m, children: S.jsx(pb, { scope: a.__scopeAccordion, collapsible: true, children: S.jsx(hb, { ...f, ref: r }) }) });
}), [ZA, zc] = Oc(bn), hb = J.forwardRef((a, r) => {
  const { __scopeAccordion: l, disabled: i, dir: s, orientation: f = "vertical", ...p } = a, v = J.useRef(null), y = Ee(v, r), m = GA(l), h = co(s) === "ltr", E = ne(a.onKeyDown, (w) => {
    var _a;
    if (!VA.includes(w.key)) return;
    const M = w.target, _ = m().filter((oe) => {
      var _a2;
      return !((_a2 = oe.ref.current) == null ? void 0 : _a2.disabled);
    }), C = _.findIndex((oe) => oe.ref.current === M), R = _.length;
    if (C === -1) return;
    w.preventDefault();
    let O = C;
    const k = 0, I = R - 1, Z = () => {
      O = C + 1, O > I && (O = k);
    }, F = () => {
      O = C - 1, O < k && (O = I);
    };
    switch (w.key) {
      case "Home":
        O = k;
        break;
      case "End":
        O = I;
        break;
      case "ArrowRight":
        f === "horizontal" && (h ? Z() : F());
        break;
      case "ArrowDown":
        f === "vertical" && Z();
        break;
      case "ArrowLeft":
        f === "horizontal" && (h ? F() : Z());
        break;
      case "ArrowUp":
        f === "vertical" && F();
        break;
    }
    const V = O % R;
    (_a = _[V].ref.current) == null ? void 0 : _a.focus();
  });
  return S.jsx(ZA, { scope: l, disabled: i, direction: s, orientation: f, children: S.jsx(Td.Slot, { scope: l, children: S.jsx(fe.div, { ...p, "data-orientation": f, ref: y, onKeyDown: i ? void 0 : E }) }) });
}), cc = "AccordionItem", [FA, Nd] = Oc(cc), mb = J.forwardRef((a, r) => {
  const { __scopeAccordion: l, value: i, ...s } = a, f = zc(cc, l), p = KA(cc, l), v = Ad(l), y = Xe(), m = i && p.value.includes(i) || false, b = f.disabled || a.disabled;
  return S.jsx(FA, { scope: l, open: m, disabled: b, triggerId: y, children: S.jsx(IA, { "data-orientation": f.orientation, "data-state": xb(m), ...v, ...s, ref: r, disabled: b, open: m, onOpenChange: (h) => {
    h ? p.onItemOpen(i) : p.onItemClose(i);
  } }) });
});
mb.displayName = cc;
var vb = "AccordionHeader", gb = J.forwardRef((a, r) => {
  const { __scopeAccordion: l, ...i } = a, s = zc(bn, l), f = Nd(vb, l);
  return S.jsx(fe.h3, { "data-orientation": s.orientation, "data-state": xb(f.open), "data-disabled": f.disabled ? "" : void 0, ...i, ref: r });
});
gb.displayName = vb;
var Vf = "AccordionTrigger", yb = J.forwardRef((a, r) => {
  const { __scopeAccordion: l, ...i } = a, s = zc(bn, l), f = Nd(Vf, l), p = XA(Vf, l), v = Ad(l);
  return S.jsx(Td.ItemSlot, { scope: l, children: S.jsx(PA, { "aria-disabled": f.open && !p.collapsible || void 0, "data-orientation": s.orientation, id: f.triggerId, ...v, ...i, ref: r }) });
});
yb.displayName = Vf;
var bb = "AccordionContent", Sb = J.forwardRef((a, r) => {
  const { __scopeAccordion: l, ...i } = a, s = zc(bn, l), f = Nd(bb, l), p = Ad(l);
  return S.jsx(qA, { role: "region", "aria-labelledby": f.triggerId, "data-orientation": s.orientation, ...p, ...i, ref: r, style: { "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", ...a.style } });
});
Sb.displayName = bb;
function xb(a) {
  return a ? "open" : "closed";
}
var Z3 = fb, F3 = mb, J3 = gb, W3 = yb, eD = Sb, jc = "Switch", [JA] = Et(jc), [WA, e5] = JA(jc), Eb = d.forwardRef((a, r) => {
  const { __scopeSwitch: l, name: i, checked: s, defaultChecked: f, required: p, disabled: v, value: y = "on", onCheckedChange: m, form: b, ...h } = a, [E, w] = d.useState(null), M = Ee(r, (k) => w(k)), _ = d.useRef(false), C = E ? b || !!E.closest("form") : true, [R, O] = Nt({ prop: s, defaultProp: f ?? false, onChange: m, caller: jc });
  return S.jsxs(WA, { scope: l, checked: R, disabled: v, children: [S.jsx(fe.button, { type: "button", role: "switch", "aria-checked": R, "aria-required": p, "data-state": Rb(R), "data-disabled": v ? "" : void 0, disabled: v, value: y, ...h, ref: M, onClick: ne(a.onClick, (k) => {
    O((I) => !I), C && (_.current = k.isPropagationStopped(), _.current || k.stopPropagation());
  }) }), C && S.jsx(Mb, { control: E, bubbles: !_.current, name: i, value: y, checked: R, required: p, disabled: v, form: b, style: { transform: "translateX(-100%)" } })] });
});
Eb.displayName = jc;
var _b = "SwitchThumb", Cb = d.forwardRef((a, r) => {
  const { __scopeSwitch: l, ...i } = a, s = e5(_b, l);
  return S.jsx(fe.span, { "data-state": Rb(s.checked), "data-disabled": s.disabled ? "" : void 0, ...i, ref: r });
});
Cb.displayName = _b;
var t5 = "SwitchBubbleInput", Mb = d.forwardRef(({ __scopeSwitch: a, control: r, checked: l, bubbles: i = true, ...s }, f) => {
  const p = d.useRef(null), v = Ee(p, f), y = Sc(l), m = vc(r);
  return d.useEffect(() => {
    const b = p.current;
    if (!b) return;
    const h = window.HTMLInputElement.prototype, w = Object.getOwnPropertyDescriptor(h, "checked").set;
    if (y !== l && w) {
      const M = new Event("click", { bubbles: i });
      w.call(b, l), b.dispatchEvent(M);
    }
  }, [y, l, i]), S.jsx("input", { type: "checkbox", "aria-hidden": true, defaultChecked: l, ...s, tabIndex: -1, ref: v, style: { ...s.style, ...m, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } });
});
Mb.displayName = t5;
function Rb(a) {
  return a ? "checked" : "unchecked";
}
var tD = Eb, nD = Cb, kc = "Popover", [wb] = Et(kc, [Na]), wr = Na(), [n5, ja] = wb(kc), Tb = (a) => {
  const { __scopePopover: r, children: l, open: i, defaultOpen: s, onOpenChange: f, modal: p = false } = a, v = wr(r), y = d.useRef(null), [m, b] = d.useState(false), [h, E] = Nt({ prop: i, defaultProp: s ?? false, onChange: f, caller: kc });
  return S.jsx(gc, { ...v, children: S.jsx(n5, { scope: r, contentId: Xe(), triggerRef: y, open: h, onOpenChange: E, onOpenToggle: d.useCallback(() => E((w) => !w), [E]), hasCustomAnchor: m, onCustomAnchorAdd: d.useCallback(() => b(true), []), onCustomAnchorRemove: d.useCallback(() => b(false), []), modal: p, children: l }) });
};
Tb.displayName = kc;
var Ab = "PopoverAnchor", a5 = d.forwardRef((a, r) => {
  const { __scopePopover: l, ...i } = a, s = ja(Ab, l), f = wr(l), { onCustomAnchorAdd: p, onCustomAnchorRemove: v } = s;
  return d.useEffect(() => (p(), () => v()), [p, v]), S.jsx(xr, { ...f, ...i, ref: r });
});
a5.displayName = Ab;
var Nb = "PopoverTrigger", Db = d.forwardRef((a, r) => {
  const { __scopePopover: l, ...i } = a, s = ja(Nb, l), f = wr(l), p = Ee(r, s.triggerRef), v = S.jsx(fe.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": s.open, "aria-controls": s.contentId, "data-state": Lb(s.open), ...i, ref: p, onClick: ne(a.onClick, s.onOpenToggle) });
  return s.hasCustomAnchor ? v : S.jsx(xr, { asChild: true, ...f, children: v });
});
Db.displayName = Nb;
var Dd = "PopoverPortal", [o5, l5] = wb(Dd, { forceMount: void 0 }), Ob = (a) => {
  const { __scopePopover: r, forceMount: l, children: i, container: s } = a, f = ja(Dd, r);
  return S.jsx(o5, { scope: r, forceMount: l, children: S.jsx(Vt, { present: l || f.open, children: S.jsx(br, { asChild: true, container: s, children: i }) }) });
};
Ob.displayName = Dd;
var rl = "PopoverContent", zb = d.forwardRef((a, r) => {
  const l = l5(rl, a.__scopePopover), { forceMount: i = l.forceMount, ...s } = a, f = ja(rl, a.__scopePopover);
  return S.jsx(Vt, { present: i || f.open, children: f.modal ? S.jsx(i5, { ...s, ref: r }) : S.jsx(c5, { ...s, ref: r }) });
});
zb.displayName = rl;
var r5 = ao("PopoverContent.RemoveScroll"), i5 = d.forwardRef((a, r) => {
  const l = ja(rl, a.__scopePopover), i = d.useRef(null), s = Ee(r, i), f = d.useRef(false);
  return d.useEffect(() => {
    const p = i.current;
    if (p) return uc(p);
  }, []), S.jsx(Sr, { as: r5, allowPinchZoom: true, children: S.jsx(jb, { ...a, ref: s, trapFocus: l.open, disableOutsidePointerEvents: true, onCloseAutoFocus: ne(a.onCloseAutoFocus, (p) => {
    var _a;
    p.preventDefault(), f.current || ((_a = l.triggerRef.current) == null ? void 0 : _a.focus());
  }), onPointerDownOutside: ne(a.onPointerDownOutside, (p) => {
    const v = p.detail.originalEvent, y = v.button === 0 && v.ctrlKey === true, m = v.button === 2 || y;
    f.current = m;
  }, { checkForDefaultPrevented: false }), onFocusOutside: ne(a.onFocusOutside, (p) => p.preventDefault(), { checkForDefaultPrevented: false }) }) });
}), c5 = d.forwardRef((a, r) => {
  const l = ja(rl, a.__scopePopover), i = d.useRef(false), s = d.useRef(false);
  return S.jsx(jb, { ...a, ref: r, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (f) => {
    var _a, _b2;
    (_a = a.onCloseAutoFocus) == null ? void 0 : _a.call(a, f), f.defaultPrevented || (i.current || ((_b2 = l.triggerRef.current) == null ? void 0 : _b2.focus()), f.preventDefault()), i.current = false, s.current = false;
  }, onInteractOutside: (f) => {
    var _a, _b2;
    (_a = a.onInteractOutside) == null ? void 0 : _a.call(a, f), f.defaultPrevented || (i.current = true, f.detail.originalEvent.type === "pointerdown" && (s.current = true));
    const p = f.target;
    ((_b2 = l.triggerRef.current) == null ? void 0 : _b2.contains(p)) && f.preventDefault(), f.detail.originalEvent.type === "focusin" && s.current && f.preventDefault();
  } });
}), jb = d.forwardRef((a, r) => {
  const { __scopePopover: l, trapFocus: i, onOpenAutoFocus: s, onCloseAutoFocus: f, disableOutsidePointerEvents: p, onEscapeKeyDown: v, onPointerDownOutside: y, onFocusOutside: m, onInteractOutside: b, ...h } = a, E = ja(rl, l), w = wr(l);
  return pc(), S.jsx(yr, { asChild: true, loop: true, trapped: i, onMountAutoFocus: s, onUnmountAutoFocus: f, children: S.jsx(cl, { asChild: true, disableOutsidePointerEvents: p, onInteractOutside: b, onEscapeKeyDown: v, onPointerDownOutside: y, onFocusOutside: m, onDismiss: () => E.onOpenChange(false), children: S.jsx(yc, { "data-state": Lb(E.open), role: "dialog", id: E.contentId, ...w, ...h, ref: r, style: { ...h.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
}), kb = "PopoverClose", u5 = d.forwardRef((a, r) => {
  const { __scopePopover: l, ...i } = a, s = ja(kb, l);
  return S.jsx(fe.button, { type: "button", ...i, ref: r, onClick: ne(a.onClick, () => s.onOpenChange(false)) });
});
u5.displayName = kb;
var s5 = "PopoverArrow", f5 = d.forwardRef((a, r) => {
  const { __scopePopover: l, ...i } = a, s = wr(l);
  return S.jsx(bc, { ...s, ...i, ref: r });
});
f5.displayName = s5;
function Lb(a) {
  return a ? "open" : "closed";
}
var aD = Tb, oD = Db, lD = Ob, rD = zb, x0 = 1, d5 = 0.9, p5 = 0.8, h5 = 0.17, xf = 0.1, Ef = 0.999, m5 = 0.9999, v5 = 0.99, g5 = /[\\\/_+.#"@\[\(\{&]/, y5 = /[\\\/_+.#"@\[\(\{&]/g, b5 = /[\s-]/, Hb = /[\s-]/g;
function Gf(a, r, l, i, s, f, p) {
  if (f === r.length) return s === a.length ? x0 : v5;
  var v = `${s},${f}`;
  if (p[v] !== void 0) return p[v];
  for (var y = i.charAt(f), m = l.indexOf(y, s), b = 0, h, E, w, M; m >= 0; ) h = Gf(a, r, l, i, m + 1, f + 1, p), h > b && (m === s ? h *= x0 : g5.test(a.charAt(m - 1)) ? (h *= p5, w = a.slice(s, m - 1).match(y5), w && s > 0 && (h *= Math.pow(Ef, w.length))) : b5.test(a.charAt(m - 1)) ? (h *= d5, M = a.slice(s, m - 1).match(Hb), M && s > 0 && (h *= Math.pow(Ef, M.length))) : (h *= h5, s > 0 && (h *= Math.pow(Ef, m - s))), a.charAt(m) !== r.charAt(f) && (h *= m5)), (h < xf && l.charAt(m - 1) === i.charAt(f + 1) || i.charAt(f + 1) === i.charAt(f) && l.charAt(m - 1) !== i.charAt(f)) && (E = Gf(a, r, l, i, m + 1, f + 2, p), E * xf > h && (h = E * xf)), h > b && (b = h), m = l.indexOf(y, m + 1);
  return p[v] = b, b;
}
function E0(a) {
  return a.toLowerCase().replace(Hb, " ");
}
function S5(a, r, l) {
  return a = l && l.length > 0 ? `${a + " " + l.join(" ")}` : a, Gf(a, r, E0(a), E0(r), 0, 0, {});
}
var cr = '[cmdk-group=""]', _f = '[cmdk-group-items=""]', x5 = '[cmdk-group-heading=""]', Ub = '[cmdk-item=""]', _0 = `${Ub}:not([aria-disabled="true"])`, Yf = "cmdk-item-select", tl = "data-value", E5 = (a, r, l) => S5(a, r, l), Bb = d.createContext(void 0), Tr = () => d.useContext(Bb), Ib = d.createContext(void 0), Od = () => d.useContext(Ib), Pb = d.createContext(void 0), qb = d.forwardRef((a, r) => {
  let l = nl(() => {
    var N, L;
    return { search: "", value: (L = (N = a.value) != null ? N : a.defaultValue) != null ? L : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), i = nl(() => /* @__PURE__ */ new Set()), s = nl(() => /* @__PURE__ */ new Map()), f = nl(() => /* @__PURE__ */ new Map()), p = nl(() => /* @__PURE__ */ new Set()), v = Vb(a), { label: y, children: m, value: b, onValueChange: h, filter: E, shouldFilter: w, loop: M, disablePointerSelection: _ = false, vimBindings: C = true, ...R } = a, O = Xe(), k = Xe(), I = Xe(), Z = d.useRef(null), F = z5();
  io(() => {
    if (b !== void 0) {
      let N = b.trim();
      l.current.value = N, V.emit();
    }
  }, [b]), io(() => {
    F(6, he);
  }, []);
  let V = d.useMemo(() => ({ subscribe: (N) => (p.current.add(N), () => p.current.delete(N)), snapshot: () => l.current, setState: (N, L, P) => {
    var G, te, Y, ae;
    if (!Object.is(l.current[N], L)) {
      if (l.current[N] = L, N === "search") de(), ve(), F(1, ue);
      else if (N === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let ce = document.getElementById(I);
          ce ? ce.focus() : (G = document.getElementById(O)) == null || G.focus();
        }
        if (F(7, () => {
          var ce;
          l.current.selectedItemId = (ce = be()) == null ? void 0 : ce.id, V.emit();
        }), P || F(5, he), ((te = v.current) == null ? void 0 : te.value) !== void 0) {
          let ce = L ?? "";
          (ae = (Y = v.current).onValueChange) == null || ae.call(Y, ce);
          return;
        }
      }
      V.emit();
    }
  }, emit: () => {
    p.current.forEach((N) => N());
  } }), []), oe = d.useMemo(() => ({ value: (N, L, P) => {
    var G;
    L !== ((G = f.current.get(N)) == null ? void 0 : G.value) && (f.current.set(N, { value: L, keywords: P }), l.current.filtered.items.set(N, ge(L, P)), F(2, () => {
      ve(), V.emit();
    }));
  }, item: (N, L) => (i.current.add(N), L && (s.current.has(L) ? s.current.get(L).add(N) : s.current.set(L, /* @__PURE__ */ new Set([N]))), F(3, () => {
    de(), ve(), l.current.value || ue(), V.emit();
  }), () => {
    f.current.delete(N), i.current.delete(N), l.current.filtered.items.delete(N);
    let P = be();
    F(4, () => {
      de(), (P == null ? void 0 : P.getAttribute("id")) === N && ue(), V.emit();
    });
  }), group: (N) => (s.current.has(N) || s.current.set(N, /* @__PURE__ */ new Set()), () => {
    f.current.delete(N), s.current.delete(N);
  }), filter: () => v.current.shouldFilter, label: y || a["aria-label"], getDisablePointerSelection: () => v.current.disablePointerSelection, listId: O, inputId: I, labelId: k, listInnerRef: Z }), []);
  function ge(N, L) {
    var P, G;
    let te = (G = (P = v.current) == null ? void 0 : P.filter) != null ? G : E5;
    return N ? te(N, l.current.search, L) : 0;
  }
  function ve() {
    if (!l.current.search || v.current.shouldFilter === false) return;
    let N = l.current.filtered.items, L = [];
    l.current.filtered.groups.forEach((G) => {
      let te = s.current.get(G), Y = 0;
      te.forEach((ae) => {
        let ce = N.get(ae);
        Y = Math.max(ce, Y);
      }), L.push([G, Y]);
    });
    let P = Z.current;
    ye().sort((G, te) => {
      var Y, ae;
      let ce = G.getAttribute("id"), Se = te.getAttribute("id");
      return ((Y = N.get(Se)) != null ? Y : 0) - ((ae = N.get(ce)) != null ? ae : 0);
    }).forEach((G) => {
      let te = G.closest(_f);
      te ? te.appendChild(G.parentElement === te ? G : G.closest(`${_f} > *`)) : P.appendChild(G.parentElement === P ? G : G.closest(`${_f} > *`));
    }), L.sort((G, te) => te[1] - G[1]).forEach((G) => {
      var te;
      let Y = (te = Z.current) == null ? void 0 : te.querySelector(`${cr}[${tl}="${encodeURIComponent(G[0])}"]`);
      Y == null ? void 0 : Y.parentElement.appendChild(Y);
    });
  }
  function ue() {
    let N = ye().find((P) => P.getAttribute("aria-disabled") !== "true"), L = N == null ? void 0 : N.getAttribute(tl);
    V.setState("value", L || void 0);
  }
  function de() {
    var N, L, P, G;
    if (!l.current.search || v.current.shouldFilter === false) {
      l.current.filtered.count = i.current.size;
      return;
    }
    l.current.filtered.groups = /* @__PURE__ */ new Set();
    let te = 0;
    for (let Y of i.current) {
      let ae = (L = (N = f.current.get(Y)) == null ? void 0 : N.value) != null ? L : "", ce = (G = (P = f.current.get(Y)) == null ? void 0 : P.keywords) != null ? G : [], Se = ge(ae, ce);
      l.current.filtered.items.set(Y, Se), Se > 0 && te++;
    }
    for (let [Y, ae] of s.current) for (let ce of ae) if (l.current.filtered.items.get(ce) > 0) {
      l.current.filtered.groups.add(Y);
      break;
    }
    l.current.filtered.count = te;
  }
  function he() {
    var N, L, P;
    let G = be();
    G && (((N = G.parentElement) == null ? void 0 : N.firstChild) === G && ((P = (L = G.closest(cr)) == null ? void 0 : L.querySelector(x5)) == null || P.scrollIntoView({ block: "nearest" })), G.scrollIntoView({ block: "nearest" }));
  }
  function be() {
    var N;
    return (N = Z.current) == null ? void 0 : N.querySelector(`${Ub}[aria-selected="true"]`);
  }
  function ye() {
    var N;
    return Array.from(((N = Z.current) == null ? void 0 : N.querySelectorAll(_0)) || []);
  }
  function z(N) {
    let L = ye()[N];
    L && V.setState("value", L.getAttribute(tl));
  }
  function X(N) {
    var L;
    let P = be(), G = ye(), te = G.findIndex((ae) => ae === P), Y = G[te + N];
    (L = v.current) != null && L.loop && (Y = te + N < 0 ? G[G.length - 1] : te + N === G.length ? G[0] : G[te + N]), Y && V.setState("value", Y.getAttribute(tl));
  }
  function W(N) {
    let L = be(), P = L == null ? void 0 : L.closest(cr), G;
    for (; P && !G; ) P = N > 0 ? D5(P, cr) : O5(P, cr), G = P == null ? void 0 : P.querySelector(_0);
    G ? V.setState("value", G.getAttribute(tl)) : X(N);
  }
  let ee = () => z(ye().length - 1), re = (N) => {
    N.preventDefault(), N.metaKey ? ee() : N.altKey ? W(1) : X(1);
  }, A = (N) => {
    N.preventDefault(), N.metaKey ? z(0) : N.altKey ? W(-1) : X(-1);
  };
  return d.createElement(Zn.div, { ref: r, tabIndex: -1, ...R, "cmdk-root": "", onKeyDown: (N) => {
    var L;
    (L = R.onKeyDown) == null || L.call(R, N);
    let P = N.nativeEvent.isComposing || N.keyCode === 229;
    if (!(N.defaultPrevented || P)) switch (N.key) {
      case "n":
      case "j": {
        C && N.ctrlKey && re(N);
        break;
      }
      case "ArrowDown": {
        re(N);
        break;
      }
      case "p":
      case "k": {
        C && N.ctrlKey && A(N);
        break;
      }
      case "ArrowUp": {
        A(N);
        break;
      }
      case "Home": {
        N.preventDefault(), z(0);
        break;
      }
      case "End": {
        N.preventDefault(), ee();
        break;
      }
      case "Enter": {
        N.preventDefault();
        let G = be();
        if (G) {
          let te = new Event(Yf);
          G.dispatchEvent(te);
        }
      }
    }
  } }, d.createElement("label", { "cmdk-label": "", htmlFor: oe.inputId, id: oe.labelId, style: k5 }, y), Lc(a, (N) => d.createElement(Ib.Provider, { value: V }, d.createElement(Bb.Provider, { value: oe }, N))));
}), _5 = d.forwardRef((a, r) => {
  var l, i;
  let s = Xe(), f = d.useRef(null), p = d.useContext(Pb), v = Tr(), y = Vb(a), m = (i = (l = y.current) == null ? void 0 : l.forceMount) != null ? i : p == null ? void 0 : p.forceMount;
  io(() => {
    if (!m) return v.item(s, p == null ? void 0 : p.id);
  }, [m]);
  let b = Gb(s, f, [a.value, a.children, f], a.keywords), h = Od(), E = Aa((F) => F.value && F.value === b.current), w = Aa((F) => m || v.filter() === false ? true : F.search ? F.filtered.items.get(s) > 0 : true);
  d.useEffect(() => {
    let F = f.current;
    if (!(!F || a.disabled)) return F.addEventListener(Yf, M), () => F.removeEventListener(Yf, M);
  }, [w, a.onSelect, a.disabled]);
  function M() {
    var F, V;
    _(), (V = (F = y.current).onSelect) == null || V.call(F, b.current);
  }
  function _() {
    h.setState("value", b.current, true);
  }
  if (!w) return null;
  let { disabled: C, value: R, onSelect: O, forceMount: k, keywords: I, ...Z } = a;
  return d.createElement(Zn.div, { ref: An(f, r), ...Z, id: s, "cmdk-item": "", role: "option", "aria-disabled": !!C, "aria-selected": !!E, "data-disabled": !!C, "data-selected": !!E, onPointerMove: C || v.getDisablePointerSelection() ? void 0 : _, onClick: C ? void 0 : M }, a.children);
}), C5 = d.forwardRef((a, r) => {
  let { heading: l, children: i, forceMount: s, ...f } = a, p = Xe(), v = d.useRef(null), y = d.useRef(null), m = Xe(), b = Tr(), h = Aa((w) => s || b.filter() === false ? true : w.search ? w.filtered.groups.has(p) : true);
  io(() => b.group(p), []), Gb(p, v, [a.value, a.heading, y]);
  let E = d.useMemo(() => ({ id: p, forceMount: s }), [s]);
  return d.createElement(Zn.div, { ref: An(v, r), ...f, "cmdk-group": "", role: "presentation", hidden: h ? void 0 : true }, l && d.createElement("div", { ref: y, "cmdk-group-heading": "", "aria-hidden": true, id: m }, l), Lc(a, (w) => d.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": l ? m : void 0 }, d.createElement(Pb.Provider, { value: E }, w))));
}), M5 = d.forwardRef((a, r) => {
  let { alwaysRender: l, ...i } = a, s = d.useRef(null), f = Aa((p) => !p.search);
  return !l && !f ? null : d.createElement(Zn.div, { ref: An(s, r), ...i, "cmdk-separator": "", role: "separator" });
}), R5 = d.forwardRef((a, r) => {
  let { onValueChange: l, ...i } = a, s = a.value != null, f = Od(), p = Aa((m) => m.search), v = Aa((m) => m.selectedItemId), y = Tr();
  return d.useEffect(() => {
    a.value != null && f.setState("search", a.value);
  }, [a.value]), d.createElement(Zn.input, { ref: r, ...i, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": y.listId, "aria-labelledby": y.labelId, "aria-activedescendant": v, id: y.inputId, type: "text", value: s ? a.value : p, onChange: (m) => {
    s || f.setState("search", m.target.value), l == null ? void 0 : l(m.target.value);
  } });
}), w5 = d.forwardRef((a, r) => {
  let { children: l, label: i = "Suggestions", ...s } = a, f = d.useRef(null), p = d.useRef(null), v = Aa((m) => m.selectedItemId), y = Tr();
  return d.useEffect(() => {
    if (p.current && f.current) {
      let m = p.current, b = f.current, h, E = new ResizeObserver(() => {
        h = requestAnimationFrame(() => {
          let w = m.offsetHeight;
          b.style.setProperty("--cmdk-list-height", w.toFixed(1) + "px");
        });
      });
      return E.observe(m), () => {
        cancelAnimationFrame(h), E.unobserve(m);
      };
    }
  }, []), d.createElement(Zn.div, { ref: An(f, r), ...s, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": v, "aria-label": i, id: y.listId }, Lc(a, (m) => d.createElement("div", { ref: An(p, y.listInnerRef), "cmdk-list-sizer": "" }, m)));
}), T5 = d.forwardRef((a, r) => {
  let { open: l, onOpenChange: i, overlayClassName: s, contentClassName: f, container: p, ...v } = a;
  return d.createElement(dg, { open: l, onOpenChange: i }, d.createElement(pg, { container: p }, d.createElement(hg, { "cmdk-overlay": "", className: s }), d.createElement(mg, { "aria-label": a.label, "cmdk-dialog": "", className: f }, d.createElement(qb, { ref: r, ...v }))));
}), A5 = d.forwardRef((a, r) => Aa((l) => l.filtered.count === 0) ? d.createElement(Zn.div, { ref: r, ...a, "cmdk-empty": "", role: "presentation" }) : null), N5 = d.forwardRef((a, r) => {
  let { progress: l, children: i, label: s = "Loading...", ...f } = a;
  return d.createElement(Zn.div, { ref: r, ...f, "cmdk-loading": "", role: "progressbar", "aria-valuenow": l, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": s }, Lc(a, (p) => d.createElement("div", { "aria-hidden": true }, p)));
}), iD = Object.assign(qb, { List: w5, Item: _5, Input: R5, Group: C5, Separator: M5, Dialog: T5, Empty: A5, Loading: N5 });
function D5(a, r) {
  let l = a.nextElementSibling;
  for (; l; ) {
    if (l.matches(r)) return l;
    l = l.nextElementSibling;
  }
}
function O5(a, r) {
  let l = a.previousElementSibling;
  for (; l; ) {
    if (l.matches(r)) return l;
    l = l.previousElementSibling;
  }
}
function Vb(a) {
  let r = d.useRef(a);
  return io(() => {
    r.current = a;
  }), r;
}
var io = typeof window > "u" ? d.useEffect : d.useLayoutEffect;
function nl(a) {
  let r = d.useRef();
  return r.current === void 0 && (r.current = a()), r;
}
function Aa(a) {
  let r = Od(), l = () => a(r.snapshot());
  return d.useSyncExternalStore(r.subscribe, l, l);
}
function Gb(a, r, l, i = []) {
  let s = d.useRef(), f = Tr();
  return io(() => {
    var p;
    let v = (() => {
      var m;
      for (let b of l) {
        if (typeof b == "string") return b.trim();
        if (typeof b == "object" && "current" in b) return b.current ? (m = b.current.textContent) == null ? void 0 : m.trim() : s.current;
      }
    })(), y = i.map((m) => m.trim());
    f.value(a, v, y), (p = r.current) == null || p.setAttribute(tl, v), s.current = v;
  }), s;
}
var z5 = () => {
  let [a, r] = d.useState(), l = nl(() => /* @__PURE__ */ new Map());
  return io(() => {
    l.current.forEach((i) => i()), l.current = /* @__PURE__ */ new Map();
  }, [a]), (i, s) => {
    l.current.set(i, s), r({});
  };
};
function j5(a) {
  let r = a.type;
  return typeof r == "function" ? r(a.props) : "render" in r ? r.render(a.props) : a;
}
function Lc({ asChild: a, children: r }, l) {
  return a && d.isValidElement(r) ? d.cloneElement(j5(r), { ref: r.ref }, l(r.props.children)) : l(r);
}
var k5 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" }, Hc = "DropdownMenu", [L5] = Et(Hc, [dd]), Dt = dd(), [H5, Yb] = L5(Hc), Kb = (a) => {
  const { __scopeDropdownMenu: r, children: l, dir: i, open: s, defaultOpen: f, onOpenChange: p, modal: v = true } = a, y = Dt(r), m = d.useRef(null), [b, h] = Nt({ prop: s, defaultProp: f ?? false, onChange: p, caller: Hc });
  return S.jsx(H5, { scope: r, triggerId: Xe(), triggerRef: m, contentId: Xe(), open: b, onOpenChange: h, onOpenToggle: d.useCallback(() => h((E) => !E), [h]), modal: v, children: S.jsx(Wy, { ...y, open: b, onOpenChange: h, dir: i, modal: v, children: l }) });
};
Kb.displayName = Hc;
var Xb = "DropdownMenuTrigger", $b = d.forwardRef((a, r) => {
  const { __scopeDropdownMenu: l, disabled: i = false, ...s } = a, f = Yb(Xb, l), p = Dt(l);
  return S.jsx(e1, { asChild: true, ...p, children: S.jsx(fe.button, { type: "button", id: f.triggerId, "aria-haspopup": "menu", "aria-expanded": f.open, "aria-controls": f.open ? f.contentId : void 0, "data-state": f.open ? "open" : "closed", "data-disabled": i ? "" : void 0, disabled: i, ...s, ref: An(r, f.triggerRef), onPointerDown: ne(a.onPointerDown, (v) => {
    !i && v.button === 0 && v.ctrlKey === false && (f.onOpenToggle(), f.open || v.preventDefault());
  }), onKeyDown: ne(a.onKeyDown, (v) => {
    i || (["Enter", " "].includes(v.key) && f.onOpenToggle(), v.key === "ArrowDown" && f.onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(v.key) && v.preventDefault());
  }) }) });
});
$b.displayName = Xb;
var U5 = "DropdownMenuPortal", Qb = (a) => {
  const { __scopeDropdownMenu: r, ...l } = a, i = Dt(r);
  return S.jsx(t1, { ...i, ...l });
};
Qb.displayName = U5;
var Zb = "DropdownMenuContent", Fb = d.forwardRef((a, r) => {
  const { __scopeDropdownMenu: l, ...i } = a, s = Yb(Zb, l), f = Dt(l), p = d.useRef(false);
  return S.jsx(n1, { id: s.contentId, "aria-labelledby": s.triggerId, ...f, ...i, ref: r, onCloseAutoFocus: ne(a.onCloseAutoFocus, (v) => {
    var _a;
    p.current || ((_a = s.triggerRef.current) == null ? void 0 : _a.focus()), p.current = false, v.preventDefault();
  }), onInteractOutside: ne(a.onInteractOutside, (v) => {
    const y = v.detail.originalEvent, m = y.button === 0 && y.ctrlKey === true, b = y.button === 2 || m;
    (!s.modal || b) && (p.current = true);
  }), style: { ...a.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
Fb.displayName = Zb;
var B5 = "DropdownMenuGroup", I5 = d.forwardRef((a, r) => {
  const { __scopeDropdownMenu: l, ...i } = a, s = Dt(l);
  return S.jsx(a1, { ...s, ...i, ref: r });
});
I5.displayName = B5;
var P5 = "DropdownMenuLabel", Jb = d.forwardRef((a, r) => {
  const { __scopeDropdownMenu: l, ...i } = a, s = Dt(l);
  return S.jsx(o1, { ...s, ...i, ref: r });
});
Jb.displayName = P5;
var q5 = "DropdownMenuItem", Wb = d.forwardRef((a, r) => {
  const { __scopeDropdownMenu: l, ...i } = a, s = Dt(l);
  return S.jsx(l1, { ...s, ...i, ref: r });
});
Wb.displayName = q5;
var V5 = "DropdownMenuCheckboxItem", G5 = d.forwardRef((a, r) => {
  const { __scopeDropdownMenu: l, ...i } = a, s = Dt(l);
  return S.jsx(r1, { ...s, ...i, ref: r });
});
G5.displayName = V5;
var Y5 = "DropdownMenuRadioGroup", K5 = d.forwardRef((a, r) => {
  const { __scopeDropdownMenu: l, ...i } = a, s = Dt(l);
  return S.jsx(i1, { ...s, ...i, ref: r });
});
K5.displayName = Y5;
var X5 = "DropdownMenuRadioItem", $5 = d.forwardRef((a, r) => {
  const { __scopeDropdownMenu: l, ...i } = a, s = Dt(l);
  return S.jsx(c1, { ...s, ...i, ref: r });
});
$5.displayName = X5;
var Q5 = "DropdownMenuItemIndicator", Z5 = d.forwardRef((a, r) => {
  const { __scopeDropdownMenu: l, ...i } = a, s = Dt(l);
  return S.jsx(u1, { ...s, ...i, ref: r });
});
Z5.displayName = Q5;
var F5 = "DropdownMenuSeparator", eS = d.forwardRef((a, r) => {
  const { __scopeDropdownMenu: l, ...i } = a, s = Dt(l);
  return S.jsx(s1, { ...s, ...i, ref: r });
});
eS.displayName = F5;
var J5 = "DropdownMenuArrow", W5 = d.forwardRef((a, r) => {
  const { __scopeDropdownMenu: l, ...i } = a, s = Dt(l);
  return S.jsx(f1, { ...s, ...i, ref: r });
});
W5.displayName = J5;
var eN = "DropdownMenuSubTrigger", tN = d.forwardRef((a, r) => {
  const { __scopeDropdownMenu: l, ...i } = a, s = Dt(l);
  return S.jsx(d1, { ...s, ...i, ref: r });
});
tN.displayName = eN;
var nN = "DropdownMenuSubContent", aN = d.forwardRef((a, r) => {
  const { __scopeDropdownMenu: l, ...i } = a, s = Dt(l);
  return S.jsx(p1, { ...s, ...i, ref: r, style: { ...a.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
aN.displayName = nN;
var cD = Kb, uD = $b, sD = Qb, fD = Fb, dD = Jb, pD = Wb, hD = eS;
export {
  a3 as $,
  SN as A,
  mg as B,
  RN as C,
  vg as D,
  NR as E,
  DR as F,
  pg as G,
  gN as H,
  e4 as I,
  hg as J,
  t4 as K,
  r4 as L,
  AR as M,
  J4 as N,
  DE as O,
  m4 as P,
  yN as Q,
  uN as R,
  A4 as S,
  L4 as T,
  V4 as U,
  W4 as V,
  t3 as W,
  G4 as X,
  e3 as Y,
  n3 as Z,
  Wx as _,
  Xv as a,
  IA as a$,
  o3 as a0,
  l3 as a1,
  i3 as a2,
  MN as a3,
  r3 as a4,
  c3 as a5,
  AN as a6,
  u3 as a7,
  s3 as a8,
  f3 as a9,
  L3 as aA,
  z3 as aB,
  j3 as aC,
  Y3 as aD,
  K3 as aE,
  X3 as aF,
  $3 as aG,
  Z3 as aH,
  F3 as aI,
  J3 as aJ,
  W3 as aK,
  eD as aL,
  tD as aM,
  nD as aN,
  aD as aO,
  oD as aP,
  lD as aQ,
  rD as aR,
  iD as aS,
  x4 as aT,
  cD as aU,
  uD as aV,
  sD as aW,
  fD as aX,
  dD as aY,
  hD as aZ,
  pD as a_,
  d3 as aa,
  p3 as ab,
  Uw as ac,
  Bw as ad,
  v3 as ae,
  g3 as af,
  y3 as ag,
  b3 as ah,
  x3 as ai,
  E3 as aj,
  T3 as ak,
  A3 as al,
  N3 as am,
  C3 as an,
  M3 as ao,
  R3 as ap,
  LN as aq,
  w3 as ar,
  _3 as as,
  S3 as at,
  D3 as au,
  O3 as av,
  k3 as aw,
  U3 as ax,
  B3 as ay,
  H3 as az,
  hN as b,
  h4 as b$,
  ub as b0,
  sb as b1,
  $4 as b2,
  Q4 as b3,
  Q3 as b4,
  N0 as b5,
  N4 as b6,
  $N as b7,
  FN as b8,
  Wf as b9,
  HN as bA,
  CN as bB,
  _4 as bC,
  IN as bD,
  BN as bE,
  mA as bF,
  G3 as bG,
  E4 as bH,
  S0 as bI,
  s4 as bJ,
  C4 as bK,
  b4 as bL,
  n4 as bM,
  UN as bN,
  QN as bO,
  D4 as bP,
  B4 as bQ,
  j4 as bR,
  o4 as bS,
  EN as bT,
  w4 as bU,
  v4 as bV,
  YN as bW,
  kN as bX,
  xN as bY,
  bN as bZ,
  a4 as b_,
  P3 as ba,
  U4 as bb,
  z4 as bc,
  f4 as bd,
  P4 as be,
  k4 as bf,
  c4 as bg,
  fN as bh,
  JN as bi,
  zN as bj,
  I4 as bk,
  PN as bl,
  wN as bm,
  WN as bn,
  GN as bo,
  qN as bp,
  O4 as bq,
  M4 as br,
  q4 as bs,
  R4 as bt,
  u4 as bu,
  jN as bv,
  KN as bw,
  DN as bx,
  XN as by,
  y4 as bz,
  dN as c,
  V3 as c0,
  p4 as c1,
  S4 as c2,
  ZN as c3,
  VN as c4,
  _N as c5,
  q3 as c6,
  NN as c7,
  mN as d,
  T4 as e,
  g4 as f,
  i4 as g,
  dc as h,
  TN as i,
  S as j,
  vN as k,
  pN as l,
  sN as m,
  I3 as n,
  X4 as o,
  l4 as p,
  d4 as q,
  d as r,
  H4 as s,
  K4 as t,
  Rt as u,
  ON as v,
  Z4 as w,
  F4 as x,
  dg as y,
  Y4 as z
};
