import { g as We } from "./index-ZihVZyz_.js";
var et = { exports: {} }, tt = {};
var It;
function Ln() {
  return It || (It = 1, (function(e) {
    function t(E, R) {
      var D = E.length;
      E.push(R);
      e: for (; 0 < D; ) {
        var _ = D - 1 >>> 1, N = E[_];
        if (0 < l(N, R)) E[_] = R, E[D] = N, D = _;
        else break e;
      }
    }
    function r(E) {
      return E.length === 0 ? null : E[0];
    }
    function n(E) {
      if (E.length === 0) return null;
      var R = E[0], D = E.pop();
      if (D !== R) {
        E[0] = D;
        e: for (var _ = 0, N = E.length, ce = N >>> 1; _ < ce; ) {
          var ye = 2 * (_ + 1) - 1, Ce = E[ye], X = ye + 1, be = E[X];
          if (0 > l(Ce, D)) X < N && 0 > l(be, Ce) ? (E[_] = be, E[X] = D, _ = X) : (E[_] = Ce, E[ye] = D, _ = ye);
          else if (X < N && 0 > l(be, D)) E[_] = be, E[X] = D, _ = X;
          else break e;
        }
      }
      return R;
    }
    function l(E, R) {
      var D = E.sortIndex - R.sortIndex;
      return D !== 0 ? D : E.id - R.id;
    }
    if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var i = performance;
      e.unstable_now = function() {
        return i.now();
      };
    } else {
      var c = Date, f = c.now();
      e.unstable_now = function() {
        return c.now() - f;
      };
    }
    var h = [], a = [], o = 1, s = null, u = 3, g = false, A = false, x = false, S = false, T = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, I = typeof setImmediate < "u" ? setImmediate : null;
    function M(E) {
      for (var R = r(a); R !== null; ) {
        if (R.callback === null) n(a);
        else if (R.startTime <= E) n(a), R.sortIndex = R.expirationTime, t(h, R);
        else break;
        R = r(a);
      }
    }
    function W(E) {
      if (x = false, M(E), !A) if (r(h) !== null) A = true, H || (H = true, z());
      else {
        var R = r(a);
        R !== null && ee(W, R.startTime - E);
      }
    }
    var H = false, q = -1, B = 5, Y = -1;
    function V() {
      return S ? true : !(e.unstable_now() - Y < B);
    }
    function K() {
      if (S = false, H) {
        var E = e.unstable_now();
        Y = E;
        var R = true;
        try {
          e: {
            A = false, x && (x = false, k(q), q = -1), g = true;
            var D = u;
            try {
              t: {
                for (M(E), s = r(h); s !== null && !(s.expirationTime > E && V()); ) {
                  var _ = s.callback;
                  if (typeof _ == "function") {
                    s.callback = null, u = s.priorityLevel;
                    var N = _(s.expirationTime <= E);
                    if (E = e.unstable_now(), typeof N == "function") {
                      s.callback = N, M(E), R = true;
                      break t;
                    }
                    s === r(h) && n(h), M(E);
                  } else n(h);
                  s = r(h);
                }
                if (s !== null) R = true;
                else {
                  var ce = r(a);
                  ce !== null && ee(W, ce.startTime - E), R = false;
                }
              }
              break e;
            } finally {
              s = null, u = D, g = false;
            }
            R = void 0;
          }
        } finally {
          R ? z() : H = false;
        }
      }
    }
    var z;
    if (typeof I == "function") z = function() {
      I(K);
    };
    else if (typeof MessageChannel < "u") {
      var $ = new MessageChannel(), j = $.port2;
      $.port1.onmessage = K, z = function() {
        j.postMessage(null);
      };
    } else z = function() {
      T(K, 0);
    };
    function ee(E, R) {
      q = T(function() {
        E(e.unstable_now());
      }, R);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, e.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < E ? Math.floor(1e3 / E) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return u;
    }, e.unstable_next = function(E) {
      switch (u) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = u;
      }
      var D = u;
      u = R;
      try {
        return E();
      } finally {
        u = D;
      }
    }, e.unstable_requestPaint = function() {
      S = true;
    }, e.unstable_runWithPriority = function(E, R) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var D = u;
      u = E;
      try {
        return R();
      } finally {
        u = D;
      }
    }, e.unstable_scheduleCallback = function(E, R, D) {
      var _ = e.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? _ + D : _) : D = _, E) {
        case 1:
          var N = -1;
          break;
        case 2:
          N = 250;
          break;
        case 5:
          N = 1073741823;
          break;
        case 4:
          N = 1e4;
          break;
        default:
          N = 5e3;
      }
      return N = D + N, E = { id: o++, callback: R, priorityLevel: E, startTime: D, expirationTime: N, sortIndex: -1 }, D > _ ? (E.sortIndex = D, t(a, E), r(h) === null && E === r(a) && (x ? (k(q), q = -1) : x = true, ee(W, D - _))) : (E.sortIndex = N, t(h, E), A || g || (A = true, H || (H = true, z()))), E;
    }, e.unstable_shouldYield = V, e.unstable_wrapCallback = function(E) {
      var R = u;
      return function() {
        var D = u;
        u = R;
        try {
          return E.apply(this, arguments);
        } finally {
          u = D;
        }
      };
    };
  })(tt)), tt;
}
var Mt;
function oo() {
  return Mt || (Mt = 1, et.exports = Ln()), et.exports;
}
var In = "Invariant failed";
function io(e, t) {
  if (!e) throw new Error(In);
}
function so(e, t) {
}
var Wt = function() {
  return Wt = Object.assign || function(t) {
    for (var r, n = 1, l = arguments.length; n < l; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Wt.apply(this, arguments);
};
function ao(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) t.indexOf(n[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[l]) && (r[n[l]] = e[n[l]]);
  return r;
}
function lo(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, l = t.length, i; n < l; n++) (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var co = function() {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
}, Mn = function(e) {
  if (typeof document > "u") return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ee = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), Ne = {}, nt = 0, ln = function(e) {
  return e && (e.host || ln(e.parentNode));
}, Wn = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r)) return r;
    var n = ln(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Bn = function(e, t, r, n) {
  var l = Wn(t, Array.isArray(e) ? e : [e]);
  Ne[r] || (Ne[r] = /* @__PURE__ */ new WeakMap());
  var i = Ne[r], c = [], f = /* @__PURE__ */ new Set(), h = new Set(l), a = function(s) {
    !s || f.has(s) || (f.add(s), a(s.parentNode));
  };
  l.forEach(a);
  var o = function(s) {
    !s || h.has(s) || Array.prototype.forEach.call(s.children, function(u) {
      if (f.has(u)) o(u);
      else try {
        var g = u.getAttribute(n), A = g !== null && g !== "false", x = (Ee.get(u) || 0) + 1, S = (i.get(u) || 0) + 1;
        Ee.set(u, x), i.set(u, S), c.push(u), x === 1 && A && qe.set(u, true), S === 1 && u.setAttribute(r, "true"), A || u.setAttribute(n, "true");
      } catch (T) {
        console.error("aria-hidden: cannot operate on ", u, T);
      }
    });
  };
  return o(t), f.clear(), nt++, function() {
    c.forEach(function(s) {
      var u = Ee.get(s) - 1, g = i.get(s) - 1;
      Ee.set(s, u), i.set(s, g), u || (qe.has(s) || s.removeAttribute(n), qe.delete(s)), g || s.removeAttribute(r);
    }), nt--, nt || (Ee = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), Ne = {});
  };
}, fo = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), l = Mn(e);
  return l ? (n.push.apply(n, Array.from(l.querySelectorAll("[aria-live], script"))), Bn(n, l, r, "aria-hidden")) : function() {
    return null;
  };
}, Ve = { exports: {} }, Hn = Ve.exports, Bt;
function qn() {
  return Bt || (Bt = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Hn, function() {
      function r(m) {
        return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
          return typeof d;
        } : function(d) {
          return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
        })(m);
      }
      function n(m, d) {
        if (!(m instanceof d)) throw new TypeError("Cannot call a class as a function");
      }
      function l(m, d) {
        for (var v = 0; v < d.length; v++) {
          var O = d[v];
          O.enumerable = O.enumerable || false, O.configurable = true, "value" in O && (O.writable = true), Object.defineProperty(m, O.key, O);
        }
      }
      function i(m, d, v) {
        d && l(m.prototype, d), v && l(m, v), Object.defineProperty(m, "prototype", { writable: false });
      }
      function c(m, d, v) {
        d in m ? Object.defineProperty(m, d, { value: v, enumerable: true, configurable: true, writable: true }) : m[d] = v;
      }
      function f(m, d) {
        if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
        m.prototype = Object.create(d && d.prototype, { constructor: { value: m, writable: true, configurable: true } }), Object.defineProperty(m, "prototype", { writable: false }), d && a(m, d);
      }
      function h(m) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(d) {
          return d.__proto__ || Object.getPrototypeOf(d);
        })(m);
      }
      function a(m, d) {
        return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, O) {
          return v.__proto__ = O, v;
        })(m, d);
      }
      function o(m, d) {
        if (d && (typeof d == "object" || typeof d == "function")) return d;
        if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        if (d = m, d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return d;
      }
      function s(m) {
        var d = (function() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
          if (typeof Proxy == "function") return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch {
            return false;
          }
        })();
        return function() {
          var v, O = h(m);
          return o(this, d ? (v = h(this).constructor, Reflect.construct(O, arguments, v)) : O.apply(this, arguments));
        };
      }
      function u(m, d) {
        (d == null || d > m.length) && (d = m.length);
        for (var v = 0, O = new Array(d); v < d; v++) O[v] = m[v];
        return O;
      }
      function g(m, d) {
        var v, O = typeof Symbol < "u" && m[Symbol.iterator] || m["@@iterator"];
        if (!O) {
          if (Array.isArray(m) || (O = (function(p, y) {
            if (p) {
              if (typeof p == "string") return u(p, y);
              var C = Object.prototype.toString.call(p).slice(8, -1);
              return (C = C === "Object" && p.constructor ? p.constructor.name : C) === "Map" || C === "Set" ? Array.from(p) : C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C) ? u(p, y) : void 0;
            }
          })(m)) || d && m && typeof m.length == "number") return O && (m = O), v = 0, { s: d = function() {
          }, n: function() {
            return v >= m.length ? { done: true } : { done: false, value: m[v++] };
          }, e: function(p) {
            throw p;
          }, f: d };
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var P, w = true, L = false;
        return { s: function() {
          O = O.call(m);
        }, n: function() {
          var p = O.next();
          return w = p.done, p;
        }, e: function(p) {
          L = true, P = p;
        }, f: function() {
          try {
            w || O.return == null || O.return();
          } finally {
            if (L) throw P;
          }
        } };
      }
      function A() {
        if (x.url) window.location.href = x.url;
        else if (x.rewriteHTML) try {
          document.documentElement.innerHTML = x.rewriteHTML;
        } catch {
          document.documentElement.innerText = x.rewriteHTML;
        }
        else {
          try {
            window.opener = null, window.open("", "_self"), window.close(), window.history.back();
          } catch (m) {
            console.log(m);
          }
          setTimeout(function() {
            window.location.href = x.timeOutUrl || "https://theajack.github.io/disable-devtool/404.html?h=".concat(encodeURIComponent(location.host));
          }, 500);
        }
      }
      var x = { md5: "", ondevtoolopen: A, ondevtoolclose: null, url: "", timeOutUrl: "", tkName: "ddtk", interval: 500, disableMenu: true, stopIntervalTime: 5e3, clearIntervalWhenDevOpenTrigger: false, detectors: [1, 3, 4, 5, 6, 7], clearLog: true, disableSelect: false, disableInputSelect: false, disableCopy: false, disableCut: false, disablePaste: false, ignore: null, disableIframeParents: true, seo: true, rewriteHTML: "" }, S = ["detectors", "ondevtoolclose", "ignore"];
      function T(m) {
        var d, v = 0 < arguments.length && m !== void 0 ? m : {};
        for (d in v.onDevtoolOpen && (v.ondevtoolopen = v.onDevtoolOpen), v.onDevtoolClose && (v.ondevtoolclose = v.onDevtoolClose), x) {
          var O = d;
          v[O] === void 0 || r(x[O]) !== r(v[O]) && S.indexOf(O) === -1 || (x[O] = v[O]);
        }
        typeof x.ondevtoolclose == "function" && x.clearIntervalWhenDevOpenTrigger === true && (x.clearIntervalWhenDevOpenTrigger = false, console.warn("\u3010DISABLE-DEVTOOL\u3011clearIntervalWhenDevOpenTrigger \u5728\u4F7F\u7528 ondevtoolclose \u65F6\u65E0\u6548"));
      }
      function k() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
      function I(m) {
        var d = k();
        return m(), k() - d;
      }
      function M(m, d) {
        function v(L) {
          return function() {
            m && m();
            var p = L.apply(void 0, arguments);
            return d && d(), p;
          };
        }
        var O = window.alert, P = window.confirm, w = window.prompt;
        try {
          window.alert = v(O), window.confirm = v(P), window.prompt = v(w);
        } catch {
        }
      }
      var W, H, q, B = { iframe: false, pc: false, qqBrowser: false, firefox: false, macos: false, edge: false, oldEdge: false, ie: false, iosChrome: false, iosEdge: false, chrome: false, seoBot: false, mobile: false };
      function Y() {
        function m(me) {
          return d.indexOf(me) !== -1;
        }
        var d = navigator.userAgent.toLowerCase(), v = (function() {
          var ve = navigator, me = ve.platform, ve = ve.maxTouchPoints;
          if (typeof ve == "number") return 1 < ve;
          if (typeof me == "string") {
            if (ve = me.toLowerCase(), /(mac|win)/i.test(ve)) return false;
            if (/(android|iphone|ipad|ipod|arch)/i.test(ve)) return true;
          }
          return /(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase());
        })(), O = !!window.top && window !== window.top, P = !v, w = m("qqbrowser"), L = m("firefox"), p = m("macintosh"), y = m("edge"), C = y && !m("chrome"), b = C || m("trident") || m("msie"), F = m("crios"), Oe = m("edgios"), ge = m("chrome") || F, Fe = !v && /(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(d);
        Object.assign(B, { iframe: O, pc: P, qqBrowser: w, firefox: L, macos: p, edge: y, oldEdge: C, ie: b, iosChrome: F, iosEdge: Oe, chrome: ge, seoBot: Fe, mobile: v });
      }
      function V() {
        for (var m = (function() {
          for (var O = {}, P = 0; P < 500; P++) O["".concat(P)] = "".concat(P);
          return O;
        })(), d = [], v = 0; v < 50; v++) d.push(m);
        return d;
      }
      function K() {
        x.clearLog && q();
      }
      var z = "", $ = false;
      function j() {
        var m = x.ignore;
        if (m) {
          if (typeof m == "function") return m();
          if (m.length !== 0) {
            var d = location.href;
            if (z === d) return $;
            z = d;
            var v, O = false, P = g(m);
            try {
              for (P.s(); !(v = P.n()).done; ) {
                var w = v.value;
                if (typeof w == "string") {
                  if (d.indexOf(w) !== -1) {
                    O = true;
                    break;
                  }
                } else if (w.test(d)) {
                  O = true;
                  break;
                }
              }
            } catch (L) {
              P.e(L);
            } finally {
              P.f();
            }
            return $ = O;
          }
        }
      }
      var ee = function() {
        return false;
      };
      function E(m) {
        var d, v, O = 74, P = 73, w = 85, L = 83, p = 123, y = B.macos ? function(b, F) {
          return b.metaKey && b.altKey && (F === P || F === O);
        } : function(b, F) {
          return b.ctrlKey && b.shiftKey && (F === P || F === O);
        }, C = B.macos ? function(b, F) {
          return b.metaKey && b.altKey && F === w || b.metaKey && F === L;
        } : function(b, F) {
          return b.ctrlKey && (F === L || F === w);
        };
        m.addEventListener("keydown", function(b) {
          var F = (b = b || m.event).keyCode || b.which;
          if (F === p || y(b, F) || C(b, F)) return D(m, b);
        }, true), d = m, x.disableMenu && d.addEventListener("contextmenu", function(b) {
          if (b.pointerType !== "touch") return D(d, b);
        }), v = m, (x.disableSelect || x.disableInputSelect) && R(v, "selectstart"), v = m, x.disableCopy && R(v, "copy"), v = m, x.disableCut && R(v, "cut"), v = m, x.disablePaste && R(v, "paste");
      }
      function R(m, d) {
        m.addEventListener(d, function(v) {
          if (!(O = v.target) || O.tagName !== "INPUT" && O.tagName !== "TEXTAREA" && ((P = O.getAttribute) == null ? void 0 : P.call(O, "contenteditable")) !== "true") {
            if (x.disableSelect) return D(m, v);
          } else if (x.disableInputSelect) return D(m, v);
          var O, P;
        });
      }
      function D(m, d) {
        if (!j() && !ee()) return (d = d || m.event).returnValue = false, d.preventDefault(), false;
      }
      var _, N = false, ce = {};
      function ye(m) {
        ce[m] = false;
      }
      function Ce() {
        for (var m in ce) if (ce[m]) return N = true;
        return N = false;
      }
      (U = _ = _ || {})[U.Unknown = -1] = "Unknown", U[U.RegToString = 0] = "RegToString", U[U.DefineId = 1] = "DefineId", U[U.Size = 2] = "Size", U[U.DateToString = 3] = "DateToString", U[U.FuncToString = 4] = "FuncToString", U[U.Debugger = 5] = "Debugger", U[U.Performance = 6] = "Performance", U[U.DebugLib = 7] = "DebugLib";
      var X = (function() {
        function m(O) {
          var v = O.type, O = O.enabled, O = O === void 0 || O;
          n(this, m), this.type = _.Unknown, this.enabled = true, this.type = v, this.enabled = O, this.enabled && (v = this, Dt.push(v), this.init());
        }
        return i(m, [{ key: "onDevToolOpen", value: function() {
          var d;
          console.warn("You don't have permission to use DEVTOOL!\u3010type = ".concat(this.type, "\u3011")), x.clearIntervalWhenDevOpenTrigger && Rt(), window.clearTimeout(Pt), x.ondevtoolopen(this.type, A), d = this.type, ce[d] = true;
        } }, { key: "init", value: function() {
        } }]), m;
      })(), be = (function() {
        f(d, X);
        var m = s(d);
        function d() {
          return n(this, d), m.call(this, { type: _.DebugLib });
        }
        return i(d, [{ key: "init", value: function() {
        } }, { key: "detect", value: function() {
          var v;
          (((v = (v = window.eruda) == null ? void 0 : v._devTools) == null ? void 0 : v._isShow) === true || window._vcOrigConsole && window.document.querySelector("#__vconsole.vc-toggle")) && this.onDevToolOpen();
        } }], [{ key: "isUsing", value: function() {
          return !!window.eruda || !!window._vcOrigConsole;
        } }]), d;
      })(), Tt = 0, Pt = 0, Dt = [], En = 0;
      function Sn(m) {
        function d() {
          C = true;
        }
        function v() {
          C = false;
        }
        var O, P, w, L, p, y, C = false;
        function b() {
          (y[L] === w ? P : O)();
        }
        M(d, v), O = v, P = d, (y = document).hidden !== void 0 ? (w = "hidden", p = "visibilitychange", L = "visibilityState") : y.mozHidden !== void 0 ? (w = "mozHidden", p = "mozvisibilitychange", L = "mozVisibilityState") : y.msHidden !== void 0 ? (w = "msHidden", p = "msvisibilitychange", L = "msVisibilityState") : y.webkitHidden !== void 0 && (w = "webkitHidden", p = "webkitvisibilitychange", L = "webkitVisibilityState"), y.removeEventListener(p, b, false), y.addEventListener(p, b, false), Tt = window.setInterval(function() {
          if (!(m.isSuspend || C || j())) {
            var F, Oe, ge = g(Dt);
            try {
              for (ge.s(); !(F = ge.n()).done; ) {
                var Fe = F.value;
                ye(Fe.type), Fe.detect(En++);
              }
            } catch (me) {
              ge.e(me);
            } finally {
              ge.f();
            }
            K(), typeof x.ondevtoolclose == "function" && (Oe = N, !Ce() && Oe && x.ondevtoolclose());
          }
        }, x.interval), Pt = setTimeout(function() {
          B.pc || be.isUsing() || Rt();
        }, x.stopIntervalTime);
      }
      function Rt() {
        window.clearInterval(Tt);
      }
      var _e = 8;
      function _t(m) {
        for (var d = (function(w, L) {
          w[L >> 5] |= 128 << L % 32, w[14 + (L + 64 >>> 9 << 4)] = L;
          for (var p = 1732584193, y = -271733879, C = -1732584194, b = 271733878, F = 0; F < w.length; F += 16) {
            var Oe = p, ge = y, Fe = C, me = b;
            p = G(p, y, C, b, w[F + 0], 7, -680876936), b = G(b, p, y, C, w[F + 1], 12, -389564586), C = G(C, b, p, y, w[F + 2], 17, 606105819), y = G(y, C, b, p, w[F + 3], 22, -1044525330), p = G(p, y, C, b, w[F + 4], 7, -176418897), b = G(b, p, y, C, w[F + 5], 12, 1200080426), C = G(C, b, p, y, w[F + 6], 17, -1473231341), y = G(y, C, b, p, w[F + 7], 22, -45705983), p = G(p, y, C, b, w[F + 8], 7, 1770035416), b = G(b, p, y, C, w[F + 9], 12, -1958414417), C = G(C, b, p, y, w[F + 10], 17, -42063), y = G(y, C, b, p, w[F + 11], 22, -1990404162), p = G(p, y, C, b, w[F + 12], 7, 1804603682), b = G(b, p, y, C, w[F + 13], 12, -40341101), C = G(C, b, p, y, w[F + 14], 17, -1502002290), y = G(y, C, b, p, w[F + 15], 22, 1236535329), p = Z(p, y, C, b, w[F + 1], 5, -165796510), b = Z(b, p, y, C, w[F + 6], 9, -1069501632), C = Z(C, b, p, y, w[F + 11], 14, 643717713), y = Z(y, C, b, p, w[F + 0], 20, -373897302), p = Z(p, y, C, b, w[F + 5], 5, -701558691), b = Z(b, p, y, C, w[F + 10], 9, 38016083), C = Z(C, b, p, y, w[F + 15], 14, -660478335), y = Z(y, C, b, p, w[F + 4], 20, -405537848), p = Z(p, y, C, b, w[F + 9], 5, 568446438), b = Z(b, p, y, C, w[F + 14], 9, -1019803690), C = Z(C, b, p, y, w[F + 3], 14, -187363961), y = Z(y, C, b, p, w[F + 8], 20, 1163531501), p = Z(p, y, C, b, w[F + 13], 5, -1444681467), b = Z(b, p, y, C, w[F + 2], 9, -51403784), C = Z(C, b, p, y, w[F + 7], 14, 1735328473), y = Z(y, C, b, p, w[F + 12], 20, -1926607734), p = J(p, y, C, b, w[F + 5], 4, -378558), b = J(b, p, y, C, w[F + 8], 11, -2022574463), C = J(C, b, p, y, w[F + 11], 16, 1839030562), y = J(y, C, b, p, w[F + 14], 23, -35309556), p = J(p, y, C, b, w[F + 1], 4, -1530992060), b = J(b, p, y, C, w[F + 4], 11, 1272893353), C = J(C, b, p, y, w[F + 7], 16, -155497632), y = J(y, C, b, p, w[F + 10], 23, -1094730640), p = J(p, y, C, b, w[F + 13], 4, 681279174), b = J(b, p, y, C, w[F + 0], 11, -358537222), C = J(C, b, p, y, w[F + 3], 16, -722521979), y = J(y, C, b, p, w[F + 6], 23, 76029189), p = J(p, y, C, b, w[F + 9], 4, -640364487), b = J(b, p, y, C, w[F + 12], 11, -421815835), C = J(C, b, p, y, w[F + 15], 16, 530742520), y = J(y, C, b, p, w[F + 2], 23, -995338651), p = Q(p, y, C, b, w[F + 0], 6, -198630844), b = Q(b, p, y, C, w[F + 7], 10, 1126891415), C = Q(C, b, p, y, w[F + 14], 15, -1416354905), y = Q(y, C, b, p, w[F + 5], 21, -57434055), p = Q(p, y, C, b, w[F + 12], 6, 1700485571), b = Q(b, p, y, C, w[F + 3], 10, -1894986606), C = Q(C, b, p, y, w[F + 10], 15, -1051523), y = Q(y, C, b, p, w[F + 1], 21, -2054922799), p = Q(p, y, C, b, w[F + 8], 6, 1873313359), b = Q(b, p, y, C, w[F + 15], 10, -30611744), C = Q(C, b, p, y, w[F + 6], 15, -1560198380), y = Q(y, C, b, p, w[F + 13], 21, 1309151649), p = Q(p, y, C, b, w[F + 4], 6, -145523070), b = Q(b, p, y, C, w[F + 11], 10, -1120210379), C = Q(C, b, p, y, w[F + 2], 15, 718787259), y = Q(y, C, b, p, w[F + 9], 21, -343485551), p = he(p, Oe), y = he(y, ge), C = he(C, Fe), b = he(b, me);
          }
          return Array(p, y, C, b);
        })((function(w) {
          for (var L = Array(), p = (1 << _e) - 1, y = 0; y < w.length * _e; y += _e) L[y >> 5] |= (w.charCodeAt(y / _e) & p) << y % 32;
          return L;
        })(m), m.length * _e), v = "0123456789abcdef", O = "", P = 0; P < 4 * d.length; P++) O += v.charAt(d[P >> 2] >> P % 4 * 8 + 4 & 15) + v.charAt(d[P >> 2] >> P % 4 * 8 & 15);
        return O;
      }
      function He(m, d, v, O, P, w) {
        return he((d = he(he(d, m), he(O, w))) << P | d >>> 32 - P, v);
      }
      function G(m, d, v, O, P, w, L) {
        return He(d & v | ~d & O, m, d, P, w, L);
      }
      function Z(m, d, v, O, P, w, L) {
        return He(d & O | v & ~O, m, d, P, w, L);
      }
      function J(m, d, v, O, P, w, L) {
        return He(d ^ v ^ O, m, d, P, w, L);
      }
      function Q(m, d, v, O, P, w, L) {
        return He(v ^ (d | ~O), m, d, P, w, L);
      }
      function he(m, d) {
        var v = (65535 & m) + (65535 & d);
        return (m >> 16) + (d >> 16) + (v >> 16) << 16 | 65535 & v;
      }
      var U = (function() {
        f(d, X);
        var m = s(d);
        function d() {
          return n(this, d), m.call(this, { type: _.RegToString, enabled: B.qqBrowser || B.firefox });
        }
        return i(d, [{ key: "init", value: function() {
          var v = this;
          this.lastTime = 0, this.reg = /./, W(this.reg), this.reg.toString = function() {
            var O;
            return B.qqBrowser ? (O = (/* @__PURE__ */ new Date()).getTime(), v.lastTime && O - v.lastTime < 100 ? v.onDevToolOpen() : v.lastTime = O) : B.firefox && v.onDevToolOpen(), "";
          };
        } }, { key: "detect", value: function() {
          W(this.reg);
        } }]), d;
      })(), Tn = (function() {
        f(d, X);
        var m = s(d);
        function d() {
          return n(this, d), m.call(this, { type: _.DefineId });
        }
        return i(d, [{ key: "init", value: function() {
          var v = this;
          this.div = document.createElement("div"), this.div.__defineGetter__("id", function() {
            v.onDevToolOpen();
          }), Object.defineProperty(this.div, "id", { get: function() {
            v.onDevToolOpen();
          } });
        } }, { key: "detect", value: function() {
          W(this.div);
        } }]), d;
      })(), Pn = (function() {
        f(d, X);
        var m = s(d);
        function d() {
          return n(this, d), m.call(this, { type: _.Size, enabled: !B.iframe && !B.edge });
        }
        return i(d, [{ key: "init", value: function() {
          var v = this;
          this.checkWindowSizeUneven(), window.addEventListener("resize", function() {
            setTimeout(function() {
              v.checkWindowSizeUneven();
            }, 100);
          }, true);
        } }, { key: "detect", value: function() {
        } }, { key: "checkWindowSizeUneven", value: function() {
          var v = (function() {
            if (kt(window.devicePixelRatio)) return window.devicePixelRatio;
            var P = window.screen;
            return !!(kt(P) && P.deviceXDPI && P.logicalXDPI) && P.deviceXDPI / P.logicalXDPI;
          })();
          if (v !== false) {
            var O = 200 < window.outerWidth - window.innerWidth * v, v = 300 < window.outerHeight - window.innerHeight * v;
            if (O || v) return this.onDevToolOpen(), false;
            ye(this.type);
          }
          return true;
        } }]), d;
      })();
      function kt(m) {
        return m != null;
      }
      var fe, Dn = (function() {
        f(d, X);
        var m = s(d);
        function d() {
          return n(this, d), m.call(this, { type: _.DateToString, enabled: !B.iosChrome && !B.iosEdge });
        }
        return i(d, [{ key: "init", value: function() {
          var v = this;
          this.count = 0, this.date = /* @__PURE__ */ new Date(), this.date.toString = function() {
            return v.count++, "";
          };
        } }, { key: "detect", value: function() {
          this.count = 0, W(this.date), K(), 2 <= this.count && this.onDevToolOpen();
        } }]), d;
      })(), Rn = (function() {
        f(d, X);
        var m = s(d);
        function d() {
          return n(this, d), m.call(this, { type: _.FuncToString, enabled: !B.iosChrome && !B.iosEdge });
        }
        return i(d, [{ key: "init", value: function() {
          var v = this;
          this.count = 0, this.func = function() {
          }, this.func.toString = function() {
            return v.count++, "";
          };
        } }, { key: "detect", value: function() {
          this.count = 0, W(this.func), K(), 2 <= this.count && this.onDevToolOpen();
        } }]), d;
      })(), _n = (function() {
        f(d, X);
        var m = s(d);
        function d() {
          return n(this, d), m.call(this, { type: _.Debugger, enabled: B.iosChrome || B.iosEdge });
        }
        return i(d, [{ key: "detect", value: function() {
          var v = k();
          100 < k() - v && this.onDevToolOpen();
        } }]), d;
      })(), kn = (function() {
        f(d, X);
        var m = s(d);
        function d() {
          var v;
          return n(this, d), (v = m.call(this, { type: _.Performance, enabled: B.chrome || !B.mobile })).count = 0, v;
        }
        return i(d, [{ key: "init", value: function() {
          this.maxPrintTime = 0, this.largeObjectArray = V();
        } }, { key: "detect", value: function() {
          var v = this, O = I(function() {
            H(v.largeObjectArray);
          }), P = I(function() {
            W(v.largeObjectArray);
          });
          if (this.maxPrintTime = Math.max(this.maxPrintTime, P), K(), O === 0 || this.maxPrintTime === 0) return false;
          O > 10 * this.maxPrintTime && (2 <= this.count ? this.onDevToolOpen() : (this.count++, this.detect()));
        } }]), d;
      })(), Lt = (c(fe = {}, _.RegToString, U), c(fe, _.DefineId, Tn), c(fe, _.Size, Pn), c(fe, _.DateToString, Dn), c(fe, _.FuncToString, Rn), c(fe, _.Debugger, _n), c(fe, _.Performance, kn), c(fe, _.DebugLib, be), fe), Ae = Object.assign(function(m) {
        function d() {
          var L = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "";
          return { success: !L, reason: L };
        }
        var v;
        if (Ae.isRunning) return d("already running");
        if (Y(), v = window.console || { log: function() {
        }, table: function() {
        }, clear: function() {
        } }, q = B.ie ? (W = function() {
          return v.log.apply(v, arguments);
        }, H = function() {
          return v.table.apply(v, arguments);
        }, function() {
          return v.clear();
        }) : (W = v.log, H = v.table, v.clear), T(m), x.md5 && _t((function(L) {
          var p = window.location.search, y = window.location.hash;
          return (p = p === "" && y !== "" ? "?".concat(y.split("?")[1]) : p) !== "" && p !== void 0 && (y = new RegExp("(^|&)" + L + "=([^&]*)(&|$)", "i"), L = p.substr(1).match(y), L != null) ? unescape(L[2]) : "";
        })(x.tkName)) === x.md5) return d("token passed");
        if (x.seo && B.seoBot) return d("seobot");
        Ae.isRunning = true, Sn(Ae);
        var O = Ae, P = (ee = function() {
          return O.isSuspend;
        }, window.top), w = window.parent;
        if (E(window), x.disableIframeParents && P && w && P !== window) {
          for (; w !== P; ) E(w), w = w.parent;
          E(P);
        }
        return (x.detectors === "all" ? Object.keys(Lt) : x.detectors).forEach(function(L) {
          new Lt[L]();
        }), d();
      }, { isRunning: false, isSuspend: false, md5: _t, version: "0.3.9", DetectorType: _, isDevToolOpened: Ce });
      return U = (function() {
        if (typeof window > "u" || !window.document) return null;
        var m = document.querySelector("[disable-devtool-auto]");
        if (!m) return null;
        var d = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"], v = ["interval"], O = {};
        return ["md5", "url", "tk-name", "detectors"].concat(d, v).forEach(function(P) {
          var w = m.getAttribute(P);
          w !== null && (v.indexOf(P) !== -1 ? w = parseInt(w) : d.indexOf(P) !== -1 ? w = w !== "false" : P === "detector" && w !== "all" && (w = w.split(" ")), O[(function(L) {
            if (L.indexOf("-") === -1) return L;
            var p = false;
            return L.split("").map(function(y) {
              return y === "-" ? (p = true, "") : p ? (p = false, y.toUpperCase()) : y;
            }).join("");
          })(P)] = w);
        }), O;
      })(), U && Ae(U), Ae;
    });
  })(Ve)), Ve.exports;
}
var Nn = qn();
const uo = We(Nn), Un = ["top", "right", "bottom", "left"], pe = Math.min, te = Math.max, Ye = Math.round, Ue = Math.floor, se = (e) => ({ x: e, y: e }), zn = { left: "right", right: "left", bottom: "top", top: "bottom" }, jn = { start: "end", end: "start" };
function dt(e, t, r) {
  return te(e, pe(t, r));
}
function ue(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function de(e) {
  return e.split("-")[0];
}
function De(e) {
  return e.split("-")[1];
}
function pt(e) {
  return e === "x" ? "y" : "x";
}
function wt(e) {
  return e === "y" ? "height" : "width";
}
const Vn = /* @__PURE__ */ new Set(["top", "bottom"]);
function ie(e) {
  return Vn.has(de(e)) ? "y" : "x";
}
function yt(e) {
  return pt(ie(e));
}
function Yn(e, t, r) {
  r === void 0 && (r = false);
  const n = De(e), l = yt(e), i = wt(l);
  let c = l === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (c = Ke(c)), [c, Ke(c)];
}
function Kn(e) {
  const t = Ke(e);
  return [ht(e), t, ht(t)];
}
function ht(e) {
  return e.replace(/start|end/g, (t) => jn[t]);
}
const Ht = ["left", "right"], qt = ["right", "left"], Xn = ["top", "bottom"], Gn = ["bottom", "top"];
function Zn(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? qt : Ht : t ? Ht : qt;
    case "left":
    case "right":
      return t ? Xn : Gn;
    default:
      return [];
  }
}
function Jn(e, t, r, n) {
  const l = De(e);
  let i = Zn(de(e), r === "start", n);
  return l && (i = i.map((c) => c + "-" + l), t && (i = i.concat(i.map(ht)))), i;
}
function Ke(e) {
  return e.replace(/left|right|bottom|top/g, (t) => zn[t]);
}
function Qn(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function cn(e) {
  return typeof e != "number" ? Qn(e) : { top: e, right: e, bottom: e, left: e };
}
function Xe(e) {
  const { x: t, y: r, width: n, height: l } = e;
  return { width: n, height: l, top: r, left: t, right: t + n, bottom: r + l, x: t, y: r };
}
function Nt(e, t, r) {
  let { reference: n, floating: l } = e;
  const i = ie(t), c = yt(t), f = wt(c), h = de(t), a = i === "y", o = n.x + n.width / 2 - l.width / 2, s = n.y + n.height / 2 - l.height / 2, u = n[f] / 2 - l[f] / 2;
  let g;
  switch (h) {
    case "top":
      g = { x: o, y: n.y - l.height };
      break;
    case "bottom":
      g = { x: o, y: n.y + n.height };
      break;
    case "right":
      g = { x: n.x + n.width, y: s };
      break;
    case "left":
      g = { x: n.x - l.width, y: s };
      break;
    default:
      g = { x: n.x, y: n.y };
  }
  switch (De(t)) {
    case "start":
      g[c] -= u * (r && a ? -1 : 1);
      break;
    case "end":
      g[c] += u * (r && a ? -1 : 1);
      break;
  }
  return g;
}
async function $n(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: l, platform: i, rects: c, elements: f, strategy: h } = e, { boundary: a = "clippingAncestors", rootBoundary: o = "viewport", elementContext: s = "floating", altBoundary: u = false, padding: g = 0 } = ue(t, e), A = cn(g), S = f[u ? s === "floating" ? "reference" : "floating" : s], T = Xe(await i.getClippingRect({ element: (r = await (i.isElement == null ? void 0 : i.isElement(S))) == null || r ? S : S.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(f.floating)), boundary: a, rootBoundary: o, strategy: h })), k = s === "floating" ? { x: n, y: l, width: c.floating.width, height: c.floating.height } : c.reference, I = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(f.floating)), M = await (i.isElement == null ? void 0 : i.isElement(I)) ? await (i.getScale == null ? void 0 : i.getScale(I)) || { x: 1, y: 1 } : { x: 1, y: 1 }, W = Xe(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: f, rect: k, offsetParent: I, strategy: h }) : k);
  return { top: (T.top - W.top + A.top) / M.y, bottom: (W.bottom - T.bottom + A.bottom) / M.y, left: (T.left - W.left + A.left) / M.x, right: (W.right - T.right + A.right) / M.x };
}
const er = async (e, t, r) => {
  const { placement: n = "bottom", strategy: l = "absolute", middleware: i = [], platform: c } = r, f = i.filter(Boolean), h = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let a = await c.getElementRects({ reference: e, floating: t, strategy: l }), { x: o, y: s } = Nt(a, n, h), u = n, g = {}, A = 0;
  for (let S = 0; S < f.length; S++) {
    var x;
    const { name: T, fn: k } = f[S], { x: I, y: M, data: W, reset: H } = await k({ x: o, y: s, initialPlacement: n, placement: u, strategy: l, middlewareData: g, rects: a, platform: { ...c, detectOverflow: (x = c.detectOverflow) != null ? x : $n }, elements: { reference: e, floating: t } });
    o = I ?? o, s = M ?? s, g = { ...g, [T]: { ...g[T], ...W } }, H && A <= 50 && (A++, typeof H == "object" && (H.placement && (u = H.placement), H.rects && (a = H.rects === true ? await c.getElementRects({ reference: e, floating: t, strategy: l }) : H.rects), { x: o, y: s } = Nt(a, u, h)), S = -1);
  }
  return { x: o, y: s, placement: u, strategy: l, middlewareData: g };
}, tr = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: r, y: n, placement: l, rects: i, platform: c, elements: f, middlewareData: h } = t, { element: a, padding: o = 0 } = ue(e, t) || {};
  if (a == null) return {};
  const s = cn(o), u = { x: r, y: n }, g = yt(l), A = wt(g), x = await c.getDimensions(a), S = g === "y", T = S ? "top" : "left", k = S ? "bottom" : "right", I = S ? "clientHeight" : "clientWidth", M = i.reference[A] + i.reference[g] - u[g] - i.floating[A], W = u[g] - i.reference[g], H = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(a));
  let q = H ? H[I] : 0;
  (!q || !await (c.isElement == null ? void 0 : c.isElement(H))) && (q = f.floating[I] || i.floating[A]);
  const B = M / 2 - W / 2, Y = q / 2 - x[A] / 2 - 1, V = pe(s[T], Y), K = pe(s[k], Y), z = V, $ = q - x[A] - K, j = q / 2 - x[A] / 2 + B, ee = dt(z, j, $), E = !h.arrow && De(l) != null && j !== ee && i.reference[A] / 2 - (j < z ? V : K) - x[A] / 2 < 0, R = E ? j < z ? j - z : j - $ : 0;
  return { [g]: u[g] + R, data: { [g]: ee, centerOffset: j - ee - R, ...E && { alignmentOffset: R } }, reset: E };
} }), nr = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r, n;
    const { placement: l, middlewareData: i, rects: c, initialPlacement: f, platform: h, elements: a } = t, { mainAxis: o = true, crossAxis: s = true, fallbackPlacements: u, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: A = "none", flipAlignment: x = true, ...S } = ue(e, t);
    if ((r = i.arrow) != null && r.alignmentOffset) return {};
    const T = de(l), k = ie(f), I = de(f) === f, M = await (h.isRTL == null ? void 0 : h.isRTL(a.floating)), W = u || (I || !x ? [Ke(f)] : Kn(f)), H = A !== "none";
    !u && H && W.push(...Jn(f, x, A, M));
    const q = [f, ...W], B = await h.detectOverflow(t, S), Y = [];
    let V = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (o && Y.push(B[T]), s) {
      const j = Yn(l, c, M);
      Y.push(B[j[0]], B[j[1]]);
    }
    if (V = [...V, { placement: l, overflows: Y }], !Y.every((j) => j <= 0)) {
      var K, z;
      const j = (((K = i.flip) == null ? void 0 : K.index) || 0) + 1, ee = q[j];
      if (ee && (!(s === "alignment" ? k !== ie(ee) : false) || V.every((D) => ie(D.placement) === k ? D.overflows[0] > 0 : true))) return { data: { index: j, overflows: V }, reset: { placement: ee } };
      let E = (z = V.filter((R) => R.overflows[0] <= 0).sort((R, D) => R.overflows[1] - D.overflows[1])[0]) == null ? void 0 : z.placement;
      if (!E) switch (g) {
        case "bestFit": {
          var $;
          const R = ($ = V.filter((D) => {
            if (H) {
              const _ = ie(D.placement);
              return _ === k || _ === "y";
            }
            return true;
          }).map((D) => [D.placement, D.overflows.filter((_) => _ > 0).reduce((_, N) => _ + N, 0)]).sort((D, _) => D[1] - _[1])[0]) == null ? void 0 : $[0];
          R && (E = R);
          break;
        }
        case "initialPlacement":
          E = f;
          break;
      }
      if (l !== E) return { reset: { placement: E } };
    }
    return {};
  } };
};
function Ut(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function zt(e) {
  return Un.some((t) => e[t] >= 0);
}
const rr = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    const { rects: r, platform: n } = t, { strategy: l = "referenceHidden", ...i } = ue(e, t);
    switch (l) {
      case "referenceHidden": {
        const c = await n.detectOverflow(t, { ...i, elementContext: "reference" }), f = Ut(c, r.reference);
        return { data: { referenceHiddenOffsets: f, referenceHidden: zt(f) } };
      }
      case "escaped": {
        const c = await n.detectOverflow(t, { ...i, altBoundary: true }), f = Ut(c, r.floating);
        return { data: { escapedOffsets: f, escaped: zt(f) } };
      }
      default:
        return {};
    }
  } };
}, fn = /* @__PURE__ */ new Set(["left", "top"]);
async function or(e, t) {
  const { placement: r, platform: n, elements: l } = e, i = await (n.isRTL == null ? void 0 : n.isRTL(l.floating)), c = de(r), f = De(r), h = ie(r) === "y", a = fn.has(c) ? -1 : 1, o = i && h ? -1 : 1, s = ue(t, e);
  let { mainAxis: u, crossAxis: g, alignmentAxis: A } = typeof s == "number" ? { mainAxis: s, crossAxis: 0, alignmentAxis: null } : { mainAxis: s.mainAxis || 0, crossAxis: s.crossAxis || 0, alignmentAxis: s.alignmentAxis };
  return f && typeof A == "number" && (g = f === "end" ? A * -1 : A), h ? { x: g * o, y: u * a } : { x: u * a, y: g * o };
}
const ir = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var r, n;
    const { x: l, y: i, placement: c, middlewareData: f } = t, h = await or(t, e);
    return c === ((r = f.offset) == null ? void 0 : r.placement) && (n = f.arrow) != null && n.alignmentOffset ? {} : { x: l + h.x, y: i + h.y, data: { ...h, placement: c } };
  } };
}, sr = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: n, placement: l, platform: i } = t, { mainAxis: c = true, crossAxis: f = false, limiter: h = { fn: (T) => {
      let { x: k, y: I } = T;
      return { x: k, y: I };
    } }, ...a } = ue(e, t), o = { x: r, y: n }, s = await i.detectOverflow(t, a), u = ie(de(l)), g = pt(u);
    let A = o[g], x = o[u];
    if (c) {
      const T = g === "y" ? "top" : "left", k = g === "y" ? "bottom" : "right", I = A + s[T], M = A - s[k];
      A = dt(I, A, M);
    }
    if (f) {
      const T = u === "y" ? "top" : "left", k = u === "y" ? "bottom" : "right", I = x + s[T], M = x - s[k];
      x = dt(I, x, M);
    }
    const S = h.fn({ ...t, [g]: A, [u]: x });
    return { ...S, data: { x: S.x - r, y: S.y - n, enabled: { [g]: c, [u]: f } } };
  } };
}, ar = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: r, y: n, placement: l, rects: i, middlewareData: c } = t, { offset: f = 0, mainAxis: h = true, crossAxis: a = true } = ue(e, t), o = { x: r, y: n }, s = ie(l), u = pt(s);
    let g = o[u], A = o[s];
    const x = ue(f, t), S = typeof x == "number" ? { mainAxis: x, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...x };
    if (h) {
      const I = u === "y" ? "height" : "width", M = i.reference[u] - i.floating[I] + S.mainAxis, W = i.reference[u] + i.reference[I] - S.mainAxis;
      g < M ? g = M : g > W && (g = W);
    }
    if (a) {
      var T, k;
      const I = u === "y" ? "width" : "height", M = fn.has(de(l)), W = i.reference[s] - i.floating[I] + (M && ((T = c.offset) == null ? void 0 : T[s]) || 0) + (M ? 0 : S.crossAxis), H = i.reference[s] + i.reference[I] + (M ? 0 : ((k = c.offset) == null ? void 0 : k[s]) || 0) - (M ? S.crossAxis : 0);
      A < W ? A = W : A > H && (A = H);
    }
    return { [u]: g, [s]: A };
  } };
}, lr = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    var r, n;
    const { placement: l, rects: i, platform: c, elements: f } = t, { apply: h = () => {
    }, ...a } = ue(e, t), o = await c.detectOverflow(t, a), s = de(l), u = De(l), g = ie(l) === "y", { width: A, height: x } = i.floating;
    let S, T;
    s === "top" || s === "bottom" ? (S = s, T = u === (await (c.isRTL == null ? void 0 : c.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (T = s, S = u === "end" ? "top" : "bottom");
    const k = x - o.top - o.bottom, I = A - o.left - o.right, M = pe(x - o[S], k), W = pe(A - o[T], I), H = !t.middlewareData.shift;
    let q = M, B = W;
    if ((r = t.middlewareData.shift) != null && r.enabled.x && (B = I), (n = t.middlewareData.shift) != null && n.enabled.y && (q = k), H && !u) {
      const V = te(o.left, 0), K = te(o.right, 0), z = te(o.top, 0), $ = te(o.bottom, 0);
      g ? B = A - 2 * (V !== 0 || K !== 0 ? V + K : te(o.left, o.right)) : q = x - 2 * (z !== 0 || $ !== 0 ? z + $ : te(o.top, o.bottom));
    }
    await h({ ...t, availableWidth: B, availableHeight: q });
    const Y = await c.getDimensions(f.floating);
    return A !== Y.width || x !== Y.height ? { reset: { rects: true } } : {};
  } };
};
function Ze() {
  return typeof window < "u";
}
function Re(e) {
  return un(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ne(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function le(e) {
  var t;
  return (t = (un(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function un(e) {
  return Ze() ? e instanceof Node || e instanceof ne(e).Node : false;
}
function re(e) {
  return Ze() ? e instanceof Element || e instanceof ne(e).Element : false;
}
function ae(e) {
  return Ze() ? e instanceof HTMLElement || e instanceof ne(e).HTMLElement : false;
}
function jt(e) {
  return !Ze() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof ne(e).ShadowRoot;
}
const cr = /* @__PURE__ */ new Set(["inline", "contents"]);
function Be(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: l } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !cr.has(l);
}
const fr = /* @__PURE__ */ new Set(["table", "td", "th"]);
function ur(e) {
  return fr.has(Re(e));
}
const dr = [":popover-open", ":modal"];
function Je(e) {
  return dr.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return false;
    }
  });
}
const hr = ["transform", "translate", "scale", "rotate", "perspective"], gr = ["transform", "translate", "scale", "rotate", "perspective", "filter"], mr = ["paint", "layout", "strict", "content"];
function bt(e) {
  const t = xt(), r = re(e) ? oe(e) : e;
  return hr.some((n) => r[n] ? r[n] !== "none" : false) || (r.containerType ? r.containerType !== "normal" : false) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : false) || !t && (r.filter ? r.filter !== "none" : false) || gr.some((n) => (r.willChange || "").includes(n)) || mr.some((n) => (r.contain || "").includes(n));
}
function vr(e) {
  let t = we(e);
  for (; ae(t) && !Pe(t); ) {
    if (bt(t)) return t;
    if (Je(t)) return null;
    t = we(t);
  }
  return null;
}
function xt() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
const pr = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Pe(e) {
  return pr.has(Re(e));
}
function oe(e) {
  return ne(e).getComputedStyle(e);
}
function Qe(e) {
  return re(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function we(e) {
  if (Re(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || jt(e) && e.host || le(e);
  return jt(t) ? t.host : t;
}
function dn(e) {
  const t = we(e);
  return Pe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ae(t) && Be(t) ? t : dn(t);
}
function Me(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = true);
  const l = dn(e), i = l === ((n = e.ownerDocument) == null ? void 0 : n.body), c = ne(l);
  if (i) {
    const f = gt(c);
    return t.concat(c, c.visualViewport || [], Be(l) ? l : [], f && r ? Me(f) : []);
  }
  return t.concat(l, Me(l, [], r));
}
function gt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function hn(e) {
  const t = oe(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const l = ae(e), i = l ? e.offsetWidth : r, c = l ? e.offsetHeight : n, f = Ye(r) !== i || Ye(n) !== c;
  return f && (r = i, n = c), { width: r, height: n, $: f };
}
function Ct(e) {
  return re(e) ? e : e.contextElement;
}
function Te(e) {
  const t = Ct(e);
  if (!ae(t)) return se(1);
  const r = t.getBoundingClientRect(), { width: n, height: l, $: i } = hn(t);
  let c = (i ? Ye(r.width) : r.width) / n, f = (i ? Ye(r.height) : r.height) / l;
  return (!c || !Number.isFinite(c)) && (c = 1), (!f || !Number.isFinite(f)) && (f = 1), { x: c, y: f };
}
const wr = se(0);
function gn(e) {
  const t = ne(e);
  return !xt() || !t.visualViewport ? wr : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function yr(e, t, r) {
  return t === void 0 && (t = false), !r || t && r !== ne(e) ? false : t;
}
function xe(e, t, r, n) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  const l = e.getBoundingClientRect(), i = Ct(e);
  let c = se(1);
  t && (n ? re(n) && (c = Te(n)) : c = Te(e));
  const f = yr(i, r, n) ? gn(i) : se(0);
  let h = (l.left + f.x) / c.x, a = (l.top + f.y) / c.y, o = l.width / c.x, s = l.height / c.y;
  if (i) {
    const u = ne(i), g = n && re(n) ? ne(n) : n;
    let A = u, x = gt(A);
    for (; x && n && g !== A; ) {
      const S = Te(x), T = x.getBoundingClientRect(), k = oe(x), I = T.left + (x.clientLeft + parseFloat(k.paddingLeft)) * S.x, M = T.top + (x.clientTop + parseFloat(k.paddingTop)) * S.y;
      h *= S.x, a *= S.y, o *= S.x, s *= S.y, h += I, a += M, A = ne(x), x = gt(A);
    }
  }
  return Xe({ width: o, height: s, x: h, y: a });
}
function $e(e, t) {
  const r = Qe(e).scrollLeft;
  return t ? t.left + r : xe(le(e)).left + r;
}
function mn(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - $e(e, r), l = r.top + t.scrollTop;
  return { x: n, y: l };
}
function br(e) {
  let { elements: t, rect: r, offsetParent: n, strategy: l } = e;
  const i = l === "fixed", c = le(n), f = t ? Je(t.floating) : false;
  if (n === c || f && i) return r;
  let h = { scrollLeft: 0, scrollTop: 0 }, a = se(1);
  const o = se(0), s = ae(n);
  if ((s || !s && !i) && ((Re(n) !== "body" || Be(c)) && (h = Qe(n)), ae(n))) {
    const g = xe(n);
    a = Te(n), o.x = g.x + n.clientLeft, o.y = g.y + n.clientTop;
  }
  const u = c && !s && !i ? mn(c, h) : se(0);
  return { width: r.width * a.x, height: r.height * a.y, x: r.x * a.x - h.scrollLeft * a.x + o.x + u.x, y: r.y * a.y - h.scrollTop * a.y + o.y + u.y };
}
function xr(e) {
  return Array.from(e.getClientRects());
}
function Cr(e) {
  const t = le(e), r = Qe(e), n = e.ownerDocument.body, l = te(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = te(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let c = -r.scrollLeft + $e(e);
  const f = -r.scrollTop;
  return oe(n).direction === "rtl" && (c += te(t.clientWidth, n.clientWidth) - l), { width: l, height: i, x: c, y: f };
}
const Vt = 25;
function Ar(e, t) {
  const r = ne(e), n = le(e), l = r.visualViewport;
  let i = n.clientWidth, c = n.clientHeight, f = 0, h = 0;
  if (l) {
    i = l.width, c = l.height;
    const o = xt();
    (!o || o && t === "fixed") && (f = l.offsetLeft, h = l.offsetTop);
  }
  const a = $e(n);
  if (a <= 0) {
    const o = n.ownerDocument, s = o.body, u = getComputedStyle(s), g = o.compatMode === "CSS1Compat" && parseFloat(u.marginLeft) + parseFloat(u.marginRight) || 0, A = Math.abs(n.clientWidth - s.clientWidth - g);
    A <= Vt && (i -= A);
  } else a <= Vt && (i += a);
  return { width: i, height: c, x: f, y: h };
}
const Or = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Fr(e, t) {
  const r = xe(e, true, t === "fixed"), n = r.top + e.clientTop, l = r.left + e.clientLeft, i = ae(e) ? Te(e) : se(1), c = e.clientWidth * i.x, f = e.clientHeight * i.y, h = l * i.x, a = n * i.y;
  return { width: c, height: f, x: h, y: a };
}
function Yt(e, t, r) {
  let n;
  if (t === "viewport") n = Ar(e, r);
  else if (t === "document") n = Cr(le(e));
  else if (re(t)) n = Fr(t, r);
  else {
    const l = gn(e);
    n = { x: t.x - l.x, y: t.y - l.y, width: t.width, height: t.height };
  }
  return Xe(n);
}
function vn(e, t) {
  const r = we(e);
  return r === t || !re(r) || Pe(r) ? false : oe(r).position === "fixed" || vn(r, t);
}
function Er(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = Me(e, [], false).filter((f) => re(f) && Re(f) !== "body"), l = null;
  const i = oe(e).position === "fixed";
  let c = i ? we(e) : e;
  for (; re(c) && !Pe(c); ) {
    const f = oe(c), h = bt(c);
    !h && f.position === "fixed" && (l = null), (i ? !h && !l : !h && f.position === "static" && !!l && Or.has(l.position) || Be(c) && !h && vn(e, c)) ? n = n.filter((o) => o !== c) : l = f, c = we(c);
  }
  return t.set(e, n), n;
}
function Sr(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: l } = e;
  const c = [...r === "clippingAncestors" ? Je(t) ? [] : Er(t, this._c) : [].concat(r), n], f = c[0], h = c.reduce((a, o) => {
    const s = Yt(t, o, l);
    return a.top = te(s.top, a.top), a.right = pe(s.right, a.right), a.bottom = pe(s.bottom, a.bottom), a.left = te(s.left, a.left), a;
  }, Yt(t, f, l));
  return { width: h.right - h.left, height: h.bottom - h.top, x: h.left, y: h.top };
}
function Tr(e) {
  const { width: t, height: r } = hn(e);
  return { width: t, height: r };
}
function Pr(e, t, r) {
  const n = ae(t), l = le(t), i = r === "fixed", c = xe(e, true, i, t);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const h = se(0);
  function a() {
    h.x = $e(l);
  }
  if (n || !n && !i) if ((Re(t) !== "body" || Be(l)) && (f = Qe(t)), n) {
    const g = xe(t, true, i, t);
    h.x = g.x + t.clientLeft, h.y = g.y + t.clientTop;
  } else l && a();
  i && !n && l && a();
  const o = l && !n && !i ? mn(l, f) : se(0), s = c.left + f.scrollLeft - h.x - o.x, u = c.top + f.scrollTop - h.y - o.y;
  return { x: s, y: u, width: c.width, height: c.height };
}
function rt(e) {
  return oe(e).position === "static";
}
function Kt(e, t) {
  if (!ae(e) || oe(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return le(e) === r && (r = r.ownerDocument.body), r;
}
function pn(e, t) {
  const r = ne(e);
  if (Je(e)) return r;
  if (!ae(e)) {
    let l = we(e);
    for (; l && !Pe(l); ) {
      if (re(l) && !rt(l)) return l;
      l = we(l);
    }
    return r;
  }
  let n = Kt(e, t);
  for (; n && ur(n) && rt(n); ) n = Kt(n, t);
  return n && Pe(n) && rt(n) && !bt(n) ? r : n || vr(e) || r;
}
const Dr = async function(e) {
  const t = this.getOffsetParent || pn, r = this.getDimensions, n = await r(e.floating);
  return { reference: Pr(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: n.width, height: n.height } };
};
function Rr(e) {
  return oe(e).direction === "rtl";
}
const _r = { convertOffsetParentRelativeRectToViewportRelativeRect: br, getDocumentElement: le, getClippingRect: Sr, getOffsetParent: pn, getElementRects: Dr, getClientRects: xr, getDimensions: Tr, getScale: Te, isElement: re, isRTL: Rr };
function wn(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function kr(e, t) {
  let r = null, n;
  const l = le(e);
  function i() {
    var f;
    clearTimeout(n), (f = r) == null || f.disconnect(), r = null;
  }
  function c(f, h) {
    f === void 0 && (f = false), h === void 0 && (h = 1), i();
    const a = e.getBoundingClientRect(), { left: o, top: s, width: u, height: g } = a;
    if (f || t(), !u || !g) return;
    const A = Ue(s), x = Ue(l.clientWidth - (o + u)), S = Ue(l.clientHeight - (s + g)), T = Ue(o), I = { rootMargin: -A + "px " + -x + "px " + -S + "px " + -T + "px", threshold: te(0, pe(1, h)) || 1 };
    let M = true;
    function W(H) {
      const q = H[0].intersectionRatio;
      if (q !== h) {
        if (!M) return c();
        q ? c(false, q) : n = setTimeout(() => {
          c(false, 1e-7);
        }, 1e3);
      }
      q === 1 && !wn(a, e.getBoundingClientRect()) && c(), M = false;
    }
    try {
      r = new IntersectionObserver(W, { ...I, root: l.ownerDocument });
    } catch {
      r = new IntersectionObserver(W, I);
    }
    r.observe(e);
  }
  return c(true), i;
}
function ho(e, t, r, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: l = true, ancestorResize: i = true, elementResize: c = typeof ResizeObserver == "function", layoutShift: f = typeof IntersectionObserver == "function", animationFrame: h = false } = n, a = Ct(e), o = l || i ? [...a ? Me(a) : [], ...Me(t)] : [];
  o.forEach((T) => {
    l && T.addEventListener("scroll", r, { passive: true }), i && T.addEventListener("resize", r);
  });
  const s = a && f ? kr(a, r) : null;
  let u = -1, g = null;
  c && (g = new ResizeObserver((T) => {
    let [k] = T;
    k && k.target === a && g && (g.unobserve(t), cancelAnimationFrame(u), u = requestAnimationFrame(() => {
      var I;
      (I = g) == null || I.observe(t);
    })), r();
  }), a && !h && g.observe(a), g.observe(t));
  let A, x = h ? xe(e) : null;
  h && S();
  function S() {
    const T = xe(e);
    x && !wn(x, T) && r(), x = T, A = requestAnimationFrame(S);
  }
  return r(), () => {
    var T;
    o.forEach((k) => {
      l && k.removeEventListener("scroll", r), i && k.removeEventListener("resize", r);
    }), s == null ? void 0 : s(), (T = g) == null || T.disconnect(), g = null, h && cancelAnimationFrame(A);
  };
}
const go = ir, mo = sr, vo = nr, po = lr, wo = rr, yo = tr, bo = ar, xo = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), l = { platform: _r, ...r }, i = { ...l.platform, _c: n };
  return er(e, t, { ...l, platform: i });
}, Lr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function Se(e, t, r) {
  const n = r[0];
  if (t != null && e >= t) throw new Error(e + " >= " + t);
  if (e.slice(-1) === n || t && t.slice(-1) === n) throw new Error("trailing zero");
  if (t) {
    let c = 0;
    for (; (e[c] || n) === t[c]; ) c++;
    if (c > 0) return t.slice(0, c) + Se(e.slice(c), t.slice(c), r);
  }
  const l = e ? r.indexOf(e[0]) : 0, i = t != null ? r.indexOf(t[0]) : r.length;
  if (i - l > 1) {
    const c = Math.round(0.5 * (l + i));
    return r[c];
  } else return t && t.length > 1 ? t.slice(0, 1) : r[l] + Se(e.slice(1), null, r);
}
function yn(e) {
  if (e.length !== bn(e[0])) throw new Error("invalid integer part of order key: " + e);
}
function bn(e) {
  if (e >= "a" && e <= "z") return e.charCodeAt(0) - 97 + 2;
  if (e >= "A" && e <= "Z") return 90 - e.charCodeAt(0) + 2;
  throw new Error("invalid order key head: " + e);
}
function ke(e) {
  const t = bn(e[0]);
  if (t > e.length) throw new Error("invalid order key: " + e);
  return e.slice(0, t);
}
function Xt(e, t) {
  if (e === "A" + t[0].repeat(26)) throw new Error("invalid order key: " + e);
  const r = ke(e);
  if (e.slice(r.length).slice(-1) === t[0]) throw new Error("invalid order key: " + e);
}
function Gt(e, t) {
  yn(e);
  const [r, ...n] = e.split("");
  let l = true;
  for (let i = n.length - 1; l && i >= 0; i--) {
    const c = t.indexOf(n[i]) + 1;
    c === t.length ? n[i] = t[0] : (n[i] = t[c], l = false);
  }
  if (l) {
    if (r === "Z") return "a" + t[0];
    if (r === "z") return null;
    const i = String.fromCharCode(r.charCodeAt(0) + 1);
    return i > "a" ? n.push(t[0]) : n.pop(), i + n.join("");
  } else return r + n.join("");
}
function Ir(e, t) {
  yn(e);
  const [r, ...n] = e.split("");
  let l = true;
  for (let i = n.length - 1; l && i >= 0; i--) {
    const c = t.indexOf(n[i]) - 1;
    c === -1 ? n[i] = t.slice(-1) : (n[i] = t[c], l = false);
  }
  if (l) {
    if (r === "a") return "Z" + t.slice(-1);
    if (r === "A") return null;
    const i = String.fromCharCode(r.charCodeAt(0) - 1);
    return i < "Z" ? n.push(t.slice(-1)) : n.pop(), i + n.join("");
  } else return r + n.join("");
}
function Co(e, t, r = Lr) {
  if (e != null && Xt(e, r), t != null && Xt(t, r), e != null && t != null && e >= t) throw new Error(e + " >= " + t);
  if (e == null) {
    if (t == null) return "a" + r[0];
    const h = ke(t), a = t.slice(h.length);
    if (h === "A" + r[0].repeat(26)) return h + Se("", a, r);
    if (h < t) return h;
    const o = Ir(h, r);
    if (o == null) throw new Error("cannot decrement any more");
    return o;
  }
  if (t == null) {
    const h = ke(e), a = e.slice(h.length), o = Gt(h, r);
    return o ?? h + Se(a, null, r);
  }
  const n = ke(e), l = e.slice(n.length), i = ke(t), c = t.slice(i.length);
  if (n === i) return n + Se(l, c, r);
  const f = Gt(n, r);
  if (f == null) throw new Error("cannot increment any more");
  return f < t ? f : n + Se(l, null, r);
}
var ze = { exports: {} }, ot, Zt;
function Mr() {
  if (Zt) return ot;
  Zt = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, l = n * 7, i = n * 365.25;
  ot = function(o, s) {
    s = s || {};
    var u = typeof o;
    if (u === "string" && o.length > 0) return c(o);
    if (u === "number" && isFinite(o)) return s.long ? h(o) : f(o);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(o));
  };
  function c(o) {
    if (o = String(o), !(o.length > 100)) {
      var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);
      if (s) {
        var u = parseFloat(s[1]), g = (s[2] || "ms").toLowerCase();
        switch (g) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return u * i;
          case "weeks":
          case "week":
          case "w":
            return u * l;
          case "days":
          case "day":
          case "d":
            return u * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return u * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return u * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return u * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return u;
          default:
            return;
        }
      }
    }
  }
  function f(o) {
    var s = Math.abs(o);
    return s >= n ? Math.round(o / n) + "d" : s >= r ? Math.round(o / r) + "h" : s >= t ? Math.round(o / t) + "m" : s >= e ? Math.round(o / e) + "s" : o + "ms";
  }
  function h(o) {
    var s = Math.abs(o);
    return s >= n ? a(o, s, n, "day") : s >= r ? a(o, s, r, "hour") : s >= t ? a(o, s, t, "minute") : s >= e ? a(o, s, e, "second") : o + " ms";
  }
  function a(o, s, u, g) {
    var A = s >= u * 1.5;
    return Math.round(o / u) + " " + g + (A ? "s" : "");
  }
  return ot;
}
var it, Jt;
function Wr() {
  if (Jt) return it;
  Jt = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = a, n.disable = f, n.enable = i, n.enabled = h, n.humanize = Mr(), n.destroy = o, Object.keys(t).forEach((s) => {
      n[s] = t[s];
    }), n.names = [], n.skips = [], n.formatters = {};
    function r(s) {
      let u = 0;
      for (let g = 0; g < s.length; g++) u = (u << 5) - u + s.charCodeAt(g), u |= 0;
      return n.colors[Math.abs(u) % n.colors.length];
    }
    n.selectColor = r;
    function n(s) {
      let u, g = null, A, x;
      function S(...T) {
        if (!S.enabled) return;
        const k = S, I = Number(/* @__PURE__ */ new Date()), M = I - (u || I);
        k.diff = M, k.prev = u, k.curr = I, u = I, T[0] = n.coerce(T[0]), typeof T[0] != "string" && T.unshift("%O");
        let W = 0;
        T[0] = T[0].replace(/%([a-zA-Z%])/g, (q, B) => {
          if (q === "%%") return "%";
          W++;
          const Y = n.formatters[B];
          if (typeof Y == "function") {
            const V = T[W];
            q = Y.call(k, V), T.splice(W, 1), W--;
          }
          return q;
        }), n.formatArgs.call(k, T), (k.log || n.log).apply(k, T);
      }
      return S.namespace = s, S.useColors = n.useColors(), S.color = n.selectColor(s), S.extend = l, S.destroy = n.destroy, Object.defineProperty(S, "enabled", { enumerable: true, configurable: false, get: () => g !== null ? g : (A !== n.namespaces && (A = n.namespaces, x = n.enabled(s)), x), set: (T) => {
        g = T;
      } }), typeof n.init == "function" && n.init(S), S;
    }
    function l(s, u) {
      const g = n(this.namespace + (typeof u > "u" ? ":" : u) + s);
      return g.log = this.log, g;
    }
    function i(s) {
      n.save(s), n.namespaces = s, n.names = [], n.skips = [];
      const u = (typeof s == "string" ? s : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const g of u) g[0] === "-" ? n.skips.push(g.slice(1)) : n.names.push(g);
    }
    function c(s, u) {
      let g = 0, A = 0, x = -1, S = 0;
      for (; g < s.length; ) if (A < u.length && (u[A] === s[g] || u[A] === "*")) u[A] === "*" ? (x = A, S = g, A++) : (g++, A++);
      else if (x !== -1) A = x + 1, S++, g = S;
      else return false;
      for (; A < u.length && u[A] === "*"; ) A++;
      return A === u.length;
    }
    function f() {
      const s = [...n.names, ...n.skips.map((u) => "-" + u)].join(",");
      return n.enable(""), s;
    }
    function h(s) {
      for (const u of n.skips) if (c(s, u)) return false;
      for (const u of n.names) if (c(s, u)) return true;
      return false;
    }
    function a(s) {
      return s instanceof Error ? s.stack || s.message : s;
    }
    function o() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return n.enable(n.load()), n;
  }
  return it = e, it;
}
var Qt;
function Br() {
  return Qt || (Qt = 1, (function(e, t) {
    var r = {};
    t.formatArgs = l, t.save = i, t.load = c, t.useColors = n, t.storage = f(), t.destroy = /* @__PURE__ */ (() => {
      let a = false;
      return () => {
        a || (a = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function n() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
      let a;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (a = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(a[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function l(a) {
      if (a[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + a[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
      const o = "color: " + this.color;
      a.splice(1, 0, o, "color: inherit");
      let s = 0, u = 0;
      a[0].replace(/%[a-zA-Z%]/g, (g) => {
        g !== "%%" && (s++, g === "%c" && (u = s));
      }), a.splice(u, 0, o);
    }
    t.log = console.debug || console.log || (() => {
    });
    function i(a) {
      try {
        a ? t.storage.setItem("debug", a) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function c() {
      let a;
      try {
        a = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
      } catch {
      }
      return !a && typeof process < "u" && "env" in process && (a = r.DEBUG), a;
    }
    function f() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = Wr()(t);
    const { formatters: h } = e.exports;
    h.j = function(a) {
      try {
        return JSON.stringify(a);
      } catch (o) {
        return "[UnexpectedJSONParseError]: " + o.message;
      }
    };
  })(ze, ze.exports)), ze.exports;
}
var Hr = Br();
const Ao = We(Hr), qr = /* @__PURE__ */ Symbol(), At = /* @__PURE__ */ Symbol(), Le = "a", xn = "f", $t = "p", Cn = "c", An = "t", Ot = "h", Ie = "w", Ft = "o", Et = "k";
let Nr = (e, t) => new Proxy(e, t);
const mt = Object.getPrototypeOf, vt = /* @__PURE__ */ new WeakMap(), On = (e) => e && (vt.has(e) ? vt.get(e) : mt(e) === Object.prototype || mt(e) === Array.prototype), Ge = (e) => typeof e == "object" && e !== null, Ur = (e) => Object.values(Object.getOwnPropertyDescriptors(e)).some((t) => !t.configurable && !t.writable), zr = (e) => {
  if (Array.isArray(e)) return Array.from(e);
  const t = Object.getOwnPropertyDescriptors(e);
  return Object.values(t).forEach((r) => {
    r.configurable = true;
  }), Object.create(mt(e), t);
}, jr = (e, t) => {
  const r = { [xn]: t };
  let n = false;
  const l = (f, h) => {
    if (!n) {
      let a = r[Le].get(e);
      if (a || (a = {}, r[Le].set(e, a)), f === Ie) a[Ie] = true;
      else {
        let o = a[f];
        o || (o = /* @__PURE__ */ new Set(), a[f] = o), o.add(h);
      }
    }
  }, i = () => {
    n = true, r[Le].delete(e);
  }, c = { get(f, h) {
    return h === At ? e : (l(Et, h), Vr(Reflect.get(f, h), r[Le], r[Cn], r[An]));
  }, has(f, h) {
    return h === qr ? (i(), true) : (l(Ot, h), Reflect.has(f, h));
  }, getOwnPropertyDescriptor(f, h) {
    return l(Ft, h), Reflect.getOwnPropertyDescriptor(f, h);
  }, ownKeys(f) {
    return l(Ie), Reflect.ownKeys(f);
  } };
  return t && (c.set = c.deleteProperty = () => false), [c, r];
}, St = (e) => e[At] || e, Vr = (e, t, r, n) => {
  if (!On(e)) return e;
  let l = n && n.get(e);
  if (!l) {
    const h = St(e);
    Ur(h) ? l = [h, zr(h)] : l = [h], n == null ? void 0 : n.set(e, l);
  }
  const [i, c] = l;
  let f = r && r.get(i);
  return (!f || f[1][xn] !== !!c) && (f = jr(i, !!c), f[1][$t] = Nr(c || i, f[0]), r && r.set(i, f)), f[1][Le] = t, f[1][Cn] = r, f[1][An] = n, f[1][$t];
}, Yr = (e, t) => {
  const r = Reflect.ownKeys(e), n = Reflect.ownKeys(t);
  return r.length !== n.length || r.some((l, i) => l !== n[i]);
}, Kr = (e, t, r, n, l = Object.is) => {
  if (l(e, t)) return false;
  if (!Ge(e) || !Ge(t)) return true;
  const i = r.get(St(e));
  if (!i) return true;
  if (n) {
    if (n.get(e) === t) return false;
    n.set(e, t);
  }
  let c = null;
  for (const f of i[Ot] || []) if (c = Reflect.has(e, f) !== Reflect.has(t, f), c) return c;
  if (i[Ie] === true) {
    if (c = Yr(e, t), c) return c;
  } else for (const f of i[Ft] || []) {
    const h = !!Reflect.getOwnPropertyDescriptor(e, f), a = !!Reflect.getOwnPropertyDescriptor(t, f);
    if (c = h !== a, c) return c;
  }
  for (const f of i[Et] || []) if (c = Kr(e[f], t[f], r, n, l), c) return c;
  if (c === null) throw new Error("invalid used");
  return c;
}, Oo = (e) => On(e) && e[At] || null, Fo = (e, t = true) => {
  vt.set(e, t);
}, Eo = (e, t, r) => {
  const n = [], l = /* @__PURE__ */ new WeakSet(), i = (c, f) => {
    var h, a, o;
    if (l.has(c)) return;
    Ge(c) && l.add(c);
    const s = Ge(c) && t.get(St(c));
    if (s) {
      if ((h = s[Ot]) === null || h === void 0 || h.forEach((u) => {
        const g = `:has(${String(u)})`;
        n.push(f ? [...f, g] : [g]);
      }), s[Ie] === true) {
        const u = ":ownKeys";
        n.push(f ? [...f, u] : [u]);
      } else (a = s[Ft]) === null || a === void 0 || a.forEach((u) => {
        const g = `:hasOwn(${String(u)})`;
        n.push(f ? [...f, g] : [g]);
      });
      (o = s[Et]) === null || o === void 0 || o.forEach((u) => {
        "value" in (Object.getOwnPropertyDescriptor(c, u) || {}) && i(c[u], f ? [...f, u] : [u]);
      });
    } else f && n.push(f);
  };
  return i(e), n;
};
var st = {}, en;
function Fn() {
  return en || (en = 1, (function(e) {
    (function(t) {
      t(typeof DO_NOT_EXPORT_CRC > "u" ? e : {});
    })(function(t) {
      t.version = "0.3.0";
      function r() {
        for (var a = 0, o = new Array(256), s = 0; s != 256; ++s) a = s, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, o[s] = a;
        return typeof Int32Array < "u" ? new Int32Array(o) : o;
      }
      var n = r(), l = typeof Buffer < "u";
      function i(a) {
        if (a.length > 32768 && l) return f(new Buffer(a));
        for (var o = -1, s = a.length - 1, u = 0; u < s; ) o = n[(o ^ a.charCodeAt(u++)) & 255] ^ o >>> 8, o = n[(o ^ a.charCodeAt(u++)) & 255] ^ o >>> 8;
        return u === s && (o = o >>> 8 ^ n[(o ^ a.charCodeAt(u)) & 255]), o ^ -1;
      }
      function c(a) {
        if (a.length > 1e4) return f(a);
        for (var o = -1, s = 0, u = a.length - 3; s < u; ) o = o >>> 8 ^ n[(o ^ a[s++]) & 255], o = o >>> 8 ^ n[(o ^ a[s++]) & 255], o = o >>> 8 ^ n[(o ^ a[s++]) & 255], o = o >>> 8 ^ n[(o ^ a[s++]) & 255];
        for (; s < u + 3; ) o = o >>> 8 ^ n[(o ^ a[s++]) & 255];
        return o ^ -1;
      }
      function f(a) {
        for (var o = -1, s = 0, u = a.length - 7; s < u; ) o = o >>> 8 ^ n[(o ^ a[s++]) & 255], o = o >>> 8 ^ n[(o ^ a[s++]) & 255], o = o >>> 8 ^ n[(o ^ a[s++]) & 255], o = o >>> 8 ^ n[(o ^ a[s++]) & 255], o = o >>> 8 ^ n[(o ^ a[s++]) & 255], o = o >>> 8 ^ n[(o ^ a[s++]) & 255], o = o >>> 8 ^ n[(o ^ a[s++]) & 255], o = o >>> 8 ^ n[(o ^ a[s++]) & 255];
        for (; s < u + 7; ) o = o >>> 8 ^ n[(o ^ a[s++]) & 255];
        return o ^ -1;
      }
      function h(a) {
        for (var o = -1, s = 0, u = a.length, g, A; s < u; ) g = a.charCodeAt(s++), g < 128 ? o = o >>> 8 ^ n[(o ^ g) & 255] : g < 2048 ? (o = o >>> 8 ^ n[(o ^ (192 | g >> 6 & 31)) & 255], o = o >>> 8 ^ n[(o ^ (128 | g & 63)) & 255]) : g >= 55296 && g < 57344 ? (g = (g & 1023) + 64, A = a.charCodeAt(s++) & 1023, o = o >>> 8 ^ n[(o ^ (240 | g >> 8 & 7)) & 255], o = o >>> 8 ^ n[(o ^ (128 | g >> 2 & 63)) & 255], o = o >>> 8 ^ n[(o ^ (128 | A >> 6 & 15 | g & 3)) & 255], o = o >>> 8 ^ n[(o ^ (128 | A & 63)) & 255]) : (o = o >>> 8 ^ n[(o ^ (224 | g >> 12 & 15)) & 255], o = o >>> 8 ^ n[(o ^ (128 | g >> 6 & 63)) & 255], o = o >>> 8 ^ n[(o ^ (128 | g & 63)) & 255]);
        return o ^ -1;
      }
      t.table = n, t.bstr = i, t.buf = c, t.str = h;
    });
  })(st)), st;
}
var at, tn;
function Xr() {
  if (tn) return at;
  tn = 1;
  var e = Fn();
  at = l;
  var t = new Uint8Array(4), r = new Int32Array(t.buffer), n = new Uint32Array(t.buffer);
  function l(i) {
    if (i[0] !== 137) throw new Error("Invalid .png file header");
    if (i[1] !== 80) throw new Error("Invalid .png file header");
    if (i[2] !== 78) throw new Error("Invalid .png file header");
    if (i[3] !== 71) throw new Error("Invalid .png file header");
    if (i[4] !== 13) throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
    if (i[5] !== 10) throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
    if (i[6] !== 26) throw new Error("Invalid .png file header");
    if (i[7] !== 10) throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
    for (var c = false, f = [], h = 8; h < i.length; ) {
      t[3] = i[h++], t[2] = i[h++], t[1] = i[h++], t[0] = i[h++];
      var a = n[0] + 4, o = new Uint8Array(a);
      o[0] = i[h++], o[1] = i[h++], o[2] = i[h++], o[3] = i[h++];
      var s = String.fromCharCode(o[0]) + String.fromCharCode(o[1]) + String.fromCharCode(o[2]) + String.fromCharCode(o[3]);
      if (!f.length && s !== "IHDR") throw new Error("IHDR header missing");
      if (s === "IEND") {
        c = true, f.push({ name: s, data: new Uint8Array(0) });
        break;
      }
      for (var u = 4; u < a; u++) o[u] = i[h++];
      t[3] = i[h++], t[2] = i[h++], t[1] = i[h++], t[0] = i[h++];
      var g = r[0], A = e.buf(o);
      if (A !== g) throw new Error("CRC values for " + s + " header do not match, PNG file is likely corrupted");
      var x = new Uint8Array(o.buffer.slice(4));
      f.push({ name: s, data: x });
    }
    if (!c) throw new Error(".png file ended prematurely: no IEND header was found");
    return f;
  }
  return at;
}
var Gr = Xr();
const So = We(Gr);
var lt, nn;
function Zr() {
  return nn || (nn = 1, lt = function(e, t, r) {
    var n = [], l = e.length;
    if (l === 0) return n;
    var i = t < 0 ? Math.max(0, t + l) : t || 0;
    for (r !== void 0 && (l = r < 0 ? r + l : r); l-- > i; ) n[l - i] = e[l];
    return n;
  }), lt;
}
var ct, rn;
function Jr() {
  if (rn) return ct;
  rn = 1;
  var e = Zr(), t = Fn();
  ct = i;
  var r = new Uint8Array(4), n = new Int32Array(r.buffer), l = new Uint32Array(r.buffer);
  function i(c) {
    var f = 8, h = f, a;
    for (a = 0; a < c.length; a++) f += c[a].data.length, f += 12;
    var o = new Uint8Array(f);
    for (o[0] = 137, o[1] = 80, o[2] = 78, o[3] = 71, o[4] = 13, o[5] = 10, o[6] = 26, o[7] = 10, a = 0; a < c.length; a++) {
      var s = c[a], u = s.name, g = s.data, A = g.length, x = [u.charCodeAt(0), u.charCodeAt(1), u.charCodeAt(2), u.charCodeAt(3)];
      l[0] = A, o[h++] = r[3], o[h++] = r[2], o[h++] = r[1], o[h++] = r[0], o[h++] = x[0], o[h++] = x[1], o[h++] = x[2], o[h++] = x[3];
      for (var S = 0; S < A; ) o[h++] = g[S++];
      var T = x.concat(e(g)), k = t.buf(T);
      n[0] = k, o[h++] = r[3], o[h++] = r[2], o[h++] = r[1], o[h++] = r[0];
    }
    return o;
  }
  return ct;
}
var Qr = Jr();
const To = We(Qr);
var je = {}, ft, on;
function $r() {
  if (on) return ft;
  on = 1, ft = e;
  function e(t, r) {
    if (t = String(t), r = String(r), !/^[\x00-\xFF]+$/.test(t) || !/^[\x00-\xFF]+$/.test(r)) throw new Error("Only Latin-1 characters are permitted in PNG tEXt chunks. You might want to consider base64 encoding and/or zEXt compression");
    if (t.length >= 80) throw new Error('Keyword "' + t + '" is longer than the 79-character limit imposed by the PNG specification');
    for (var n = t.length + r.length + 1, l = new Uint8Array(n), i = 0, c, f = 0; f < t.length; f++) {
      if (!(c = t.charCodeAt(f))) throw new Error("0x00 character is not permitted in tEXt keywords");
      l[i++] = c;
    }
    l[i++] = 0;
    for (var h = 0; h < r.length; h++) {
      if (!(c = r.charCodeAt(h))) throw new Error("0x00 character is not permitted in tEXt content");
      l[i++] = c;
    }
    return { name: "tEXt", data: l };
  }
  return ft;
}
var ut, sn;
function eo() {
  if (sn) return ut;
  sn = 1, ut = e;
  function e(t) {
    t.data && t.name && (t = t.data);
    for (var r = true, n = "", l = "", i = 0; i < t.length; i++) {
      var c = t[i];
      if (r) c ? l += String.fromCharCode(c) : r = false;
      else if (c) n += String.fromCharCode(c);
      else throw new Error("Invalid NULL character found. 0x00 character is not permitted in tEXt content");
    }
    return { keyword: l, text: n };
  }
  return ut;
}
var an;
function to() {
  return an || (an = 1, je.encode = $r(), je.decode = eo()), je;
}
var no = to();
const Po = We(no);
export {
  uo as D,
  Wt as _,
  ao as a,
  lo as b,
  xo as c,
  po as d,
  wo as e,
  vo as f,
  co as g,
  fo as h,
  yo as i,
  ho as j,
  Oo as k,
  bo as l,
  Fo as m,
  Kr as n,
  go as o,
  Vr as p,
  Eo as q,
  oo as r,
  mo as s,
  io as t,
  Co as u,
  Ao as v,
  so as w,
  So as x,
  Po as y,
  To as z
};
