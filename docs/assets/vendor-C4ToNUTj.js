import { g as qe } from "./react-D9TtqY-V.js";
var at = { exports: {} }, lt = {};
var pn;
function Wr() {
  return pn || (pn = 1, (function(t) {
    function n(_, B) {
      var I = _.length;
      _.push(B);
      e: for (; 0 < I; ) {
        var L = I - 1 >>> 1, z = _[L];
        if (0 < r(z, B)) _[L] = B, _[I] = z, I = L;
        else break e;
      }
    }
    function o(_) {
      return _.length === 0 ? null : _[0];
    }
    function e(_) {
      if (_.length === 0) return null;
      var B = _[0], I = _.pop();
      if (I !== B) {
        _[0] = I;
        e: for (var L = 0, z = _.length, fe = z >>> 1; L < fe; ) {
          var Ae = 2 * (L + 1) - 1, ke = _[Ae], G = Ae + 1, Ce = _[G];
          if (0 > r(ke, I)) G < z && 0 > r(Ce, ke) ? (_[L] = Ce, _[G] = I, L = G) : (_[L] = ke, _[Ae] = I, L = Ae);
          else if (G < z && 0 > r(Ce, I)) _[L] = Ce, _[G] = I, L = G;
          else break e;
        }
      }
      return B;
    }
    function r(_, B) {
      var I = _.sortIndex - B.sortIndex;
      return I !== 0 ? I : _.id - B.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var i = performance;
      t.unstable_now = function() {
        return i.now();
      };
    } else {
      var a = Date, s = a.now();
      t.unstable_now = function() {
        return a.now() - s;
      };
    }
    var c = [], u = [], l = 1, f = null, d = 3, h = false, g = false, v = false, p = false, w = typeof setTimeout == "function" ? setTimeout : null, b = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
    function F(_) {
      for (var B = o(u); B !== null; ) {
        if (B.callback === null) e(u);
        else if (B.startTime <= _) e(u), B.sortIndex = B.expirationTime, n(c, B);
        else break;
        B = o(u);
      }
    }
    function P(_) {
      if (v = false, F(_), !g) if (o(c) !== null) g = true, S || (S = true, J());
      else {
        var B = o(u);
        B !== null && X(P, B.startTime - _);
      }
    }
    var S = false, T = -1, W = 5, j = -1;
    function H() {
      return p ? true : !(t.unstable_now() - j < W);
    }
    function U() {
      if (p = false, S) {
        var _ = t.unstable_now();
        j = _;
        var B = true;
        try {
          e: {
            g = false, v && (v = false, b(T), T = -1), h = true;
            var I = d;
            try {
              t: {
                for (F(_), f = o(c); f !== null && !(f.expirationTime > _ && H()); ) {
                  var L = f.callback;
                  if (typeof L == "function") {
                    f.callback = null, d = f.priorityLevel;
                    var z = L(f.expirationTime <= _);
                    if (_ = t.unstable_now(), typeof z == "function") {
                      f.callback = z, F(_), B = true;
                      break t;
                    }
                    f === o(c) && e(c), F(_);
                  } else e(c);
                  f = o(c);
                }
                if (f !== null) B = true;
                else {
                  var fe = o(u);
                  fe !== null && X(P, fe.startTime - _), B = false;
                }
              }
              break e;
            } finally {
              f = null, d = I, h = false;
            }
            B = void 0;
          }
        } finally {
          B ? J() : S = false;
        }
      }
    }
    var J;
    if (typeof y == "function") J = function() {
      y(U);
    };
    else if (typeof MessageChannel < "u") {
      var K = new MessageChannel(), V = K.port2;
      K.port1.onmessage = U, J = function() {
        V.postMessage(null);
      };
    } else J = function() {
      w(U, 0);
    };
    function X(_, B) {
      T = w(function() {
        _(t.unstable_now());
      }, B);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, t.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return d;
    }, t.unstable_next = function(_) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = d;
      }
      var I = d;
      d = B;
      try {
        return _();
      } finally {
        d = I;
      }
    }, t.unstable_requestPaint = function() {
      p = true;
    }, t.unstable_runWithPriority = function(_, B) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var I = d;
      d = _;
      try {
        return B();
      } finally {
        d = I;
      }
    }, t.unstable_scheduleCallback = function(_, B, I) {
      var L = t.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? L + I : L) : I = L, _) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return z = I + z, _ = { id: l++, callback: B, priorityLevel: _, startTime: I, expirationTime: z, sortIndex: -1 }, I > L ? (_.sortIndex = I, n(u, _), o(c) === null && _ === o(u) && (v ? (b(T), T = -1) : v = true, X(P, I - L))) : (_.sortIndex = z, n(c, _), g || h || (g = true, S || (S = true, J()))), _;
    }, t.unstable_shouldYield = H, t.unstable_wrapCallback = function(_) {
      var B = d;
      return function() {
        var I = d;
        d = B;
        try {
          return _.apply(this, arguments);
        } finally {
          d = I;
        }
      };
    };
  })(lt)), lt;
}
var gn;
function Oo() {
  return gn || (gn = 1, at.exports = Wr()), at.exports;
}
var Ir = "Invariant failed";
function ko(t, n) {
  if (!t) throw new Error(Ir);
}
function xo(t, n) {
}
var Xe = { exports: {} }, Br = Xe.exports, vn;
function Lr() {
  return vn || (vn = 1, (function(t, n) {
    (function(o, e) {
      t.exports = e();
    })(Br, function() {
      function o(A) {
        return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
          return typeof m;
        } : function(m) {
          return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
        })(A);
      }
      function e(A, m) {
        if (!(A instanceof m)) throw new TypeError("Cannot call a class as a function");
      }
      function r(A, m) {
        for (var C = 0; C < m.length; C++) {
          var E = m[C];
          E.enumerable = E.enumerable || false, E.configurable = true, "value" in E && (E.writable = true), Object.defineProperty(A, E.key, E);
        }
      }
      function i(A, m, C) {
        m && r(A.prototype, m), C && r(A, C), Object.defineProperty(A, "prototype", { writable: false });
      }
      function a(A, m, C) {
        m in A ? Object.defineProperty(A, m, { value: C, enumerable: true, configurable: true, writable: true }) : A[m] = C;
      }
      function s(A, m) {
        if (typeof m != "function" && m !== null) throw new TypeError("Super expression must either be null or a function");
        A.prototype = Object.create(m && m.prototype, { constructor: { value: A, writable: true, configurable: true } }), Object.defineProperty(A, "prototype", { writable: false }), m && u(A, m);
      }
      function c(A) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(m) {
          return m.__proto__ || Object.getPrototypeOf(m);
        })(A);
      }
      function u(A, m) {
        return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(C, E) {
          return C.__proto__ = E, C;
        })(A, m);
      }
      function l(A, m) {
        if (m && (typeof m == "object" || typeof m == "function")) return m;
        if (m !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        if (m = A, m === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return m;
      }
      function f(A) {
        var m = (function() {
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
          var C, E = c(A);
          return l(this, m ? (C = c(this).constructor, Reflect.construct(E, arguments, C)) : E.apply(this, arguments));
        };
      }
      function d(A, m) {
        (m == null || m > A.length) && (m = A.length);
        for (var C = 0, E = new Array(m); C < m; C++) E[C] = A[C];
        return E;
      }
      function h(A, m) {
        var C, E = typeof Symbol < "u" && A[Symbol.iterator] || A["@@iterator"];
        if (!E) {
          if (Array.isArray(A) || (E = (function(O, x) {
            if (O) {
              if (typeof O == "string") return d(O, x);
              var M = Object.prototype.toString.call(O).slice(8, -1);
              return (M = M === "Object" && O.constructor ? O.constructor.name : M) === "Map" || M === "Set" ? Array.from(O) : M === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M) ? d(O, x) : void 0;
            }
          })(A)) || m && A && typeof A.length == "number") return E && (A = E), C = 0, { s: m = function() {
          }, n: function() {
            return C >= A.length ? { done: true } : { done: false, value: A[C++] };
          }, e: function(O) {
            throw O;
          }, f: m };
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var N, k = true, q = false;
        return { s: function() {
          E = E.call(A);
        }, n: function() {
          var O = E.next();
          return k = O.done, O;
        }, e: function(O) {
          q = true, N = O;
        }, f: function() {
          try {
            k || E.return == null || E.return();
          } finally {
            if (q) throw N;
          }
        } };
      }
      function g() {
        if (v.url) window.location.href = v.url;
        else if (v.rewriteHTML) try {
          document.documentElement.innerHTML = v.rewriteHTML;
        } catch {
          document.documentElement.innerText = v.rewriteHTML;
        }
        else {
          try {
            window.opener = null, window.open("", "_self"), window.close(), window.history.back();
          } catch (A) {
            console.log(A);
          }
          setTimeout(function() {
            window.location.href = v.timeOutUrl || "https://theajack.github.io/disable-devtool/404.html?h=".concat(encodeURIComponent(location.host));
          }, 500);
        }
      }
      var v = { md5: "", ondevtoolopen: g, ondevtoolclose: null, url: "", timeOutUrl: "", tkName: "ddtk", interval: 500, disableMenu: true, stopIntervalTime: 5e3, clearIntervalWhenDevOpenTrigger: false, detectors: [1, 3, 4, 5, 6, 7], clearLog: true, disableSelect: false, disableInputSelect: false, disableCopy: false, disableCut: false, disablePaste: false, ignore: null, disableIframeParents: true, seo: true, rewriteHTML: "" }, p = ["detectors", "ondevtoolclose", "ignore"];
      function w(A) {
        var m, C = 0 < arguments.length && A !== void 0 ? A : {};
        for (m in C.onDevtoolOpen && (C.ondevtoolopen = C.onDevtoolOpen), C.onDevtoolClose && (C.ondevtoolclose = C.onDevtoolClose), v) {
          var E = m;
          C[E] === void 0 || o(v[E]) !== o(C[E]) && p.indexOf(E) === -1 || (v[E] = C[E]);
        }
        typeof v.ondevtoolclose == "function" && v.clearIntervalWhenDevOpenTrigger === true && (v.clearIntervalWhenDevOpenTrigger = false, console.warn("\u3010DISABLE-DEVTOOL\u3011clearIntervalWhenDevOpenTrigger \u5728\u4F7F\u7528 ondevtoolclose \u65F6\u65E0\u6548"));
      }
      function b() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
      function y(A) {
        var m = b();
        return A(), b() - m;
      }
      function F(A, m) {
        function C(q) {
          return function() {
            A && A();
            var O = q.apply(void 0, arguments);
            return m && m(), O;
          };
        }
        var E = window.alert, N = window.confirm, k = window.prompt;
        try {
          window.alert = C(E), window.confirm = C(N), window.prompt = C(k);
        } catch {
        }
      }
      var P, S, T, W = { iframe: false, pc: false, qqBrowser: false, firefox: false, macos: false, edge: false, oldEdge: false, ie: false, iosChrome: false, iosEdge: false, chrome: false, seoBot: false, mobile: false };
      function j() {
        function A(me) {
          return m.indexOf(me) !== -1;
        }
        var m = navigator.userAgent.toLowerCase(), C = (function() {
          var we = navigator, me = we.platform, we = we.maxTouchPoints;
          if (typeof we == "number") return 1 < we;
          if (typeof me == "string") {
            if (we = me.toLowerCase(), /(mac|win)/i.test(we)) return false;
            if (/(android|iphone|ipad|ipod|arch)/i.test(we)) return true;
          }
          return /(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase());
        })(), E = !!window.top && window !== window.top, N = !C, k = A("qqbrowser"), q = A("firefox"), O = A("macintosh"), x = A("edge"), M = x && !A("chrome"), D = M || A("trident") || A("msie"), R = A("crios"), De = A("edgios"), ve = A("chrome") || R, Pe = !C && /(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(m);
        Object.assign(W, { iframe: E, pc: N, qqBrowser: k, firefox: q, macos: O, edge: x, oldEdge: M, ie: D, iosChrome: R, iosEdge: De, chrome: ve, seoBot: Pe, mobile: C });
      }
      function H() {
        for (var A = (function() {
          for (var E = {}, N = 0; N < 500; N++) E["".concat(N)] = "".concat(N);
          return E;
        })(), m = [], C = 0; C < 50; C++) m.push(A);
        return m;
      }
      function U() {
        v.clearLog && T();
      }
      var J = "", K = false;
      function V() {
        var A = v.ignore;
        if (A) {
          if (typeof A == "function") return A();
          if (A.length !== 0) {
            var m = location.href;
            if (J === m) return K;
            J = m;
            var C, E = false, N = h(A);
            try {
              for (N.s(); !(C = N.n()).done; ) {
                var k = C.value;
                if (typeof k == "string") {
                  if (m.indexOf(k) !== -1) {
                    E = true;
                    break;
                  }
                } else if (k.test(m)) {
                  E = true;
                  break;
                }
              }
            } catch (q) {
              N.e(q);
            } finally {
              N.f();
            }
            return K = E;
          }
        }
      }
      var X = function() {
        return false;
      };
      function _(A) {
        var m, C, E = 74, N = 73, k = 85, q = 83, O = 123, x = W.macos ? function(D, R) {
          return D.metaKey && D.altKey && (R === N || R === E);
        } : function(D, R) {
          return D.ctrlKey && D.shiftKey && (R === N || R === E);
        }, M = W.macos ? function(D, R) {
          return D.metaKey && D.altKey && R === k || D.metaKey && R === q;
        } : function(D, R) {
          return D.ctrlKey && (R === q || R === k);
        };
        A.addEventListener("keydown", function(D) {
          var R = (D = D || A.event).keyCode || D.which;
          if (R === O || x(D, R) || M(D, R)) return I(A, D);
        }, true), m = A, v.disableMenu && m.addEventListener("contextmenu", function(D) {
          if (D.pointerType !== "touch") return I(m, D);
        }), C = A, (v.disableSelect || v.disableInputSelect) && B(C, "selectstart"), C = A, v.disableCopy && B(C, "copy"), C = A, v.disableCut && B(C, "cut"), C = A, v.disablePaste && B(C, "paste");
      }
      function B(A, m) {
        A.addEventListener(m, function(C) {
          if (!(E = C.target) || E.tagName !== "INPUT" && E.tagName !== "TEXTAREA" && ((N = E.getAttribute) == null ? void 0 : N.call(E, "contenteditable")) !== "true") {
            if (v.disableSelect) return I(A, C);
          } else if (v.disableInputSelect) return I(A, C);
          var E, N;
        });
      }
      function I(A, m) {
        if (!V() && !X()) return (m = m || A.event).returnValue = false, m.preventDefault(), false;
      }
      var L, z = false, fe = {};
      function Ae(A) {
        fe[A] = false;
      }
      function ke() {
        for (var A in fe) if (fe[A]) return z = true;
        return z = false;
      }
      (Y = L = L || {})[Y.Unknown = -1] = "Unknown", Y[Y.RegToString = 0] = "RegToString", Y[Y.DefineId = 1] = "DefineId", Y[Y.Size = 2] = "Size", Y[Y.DateToString = 3] = "DateToString", Y[Y.FuncToString = 4] = "FuncToString", Y[Y.Debugger = 5] = "Debugger", Y[Y.Performance = 6] = "Performance", Y[Y.DebugLib = 7] = "DebugLib";
      var G = (function() {
        function A(E) {
          var C = E.type, E = E.enabled, E = E === void 0 || E;
          e(this, A), this.type = L.Unknown, this.enabled = true, this.type = C, this.enabled = E, this.enabled && (C = this, un.push(C), this.init());
        }
        return i(A, [{ key: "onDevToolOpen", value: function() {
          var m;
          console.warn("You don't have permission to use DEVTOOL!\u3010type = ".concat(this.type, "\u3011")), v.clearIntervalWhenDevOpenTrigger && fn(), window.clearTimeout(ln), v.ondevtoolopen(this.type, g), m = this.type, fe[m] = true;
        } }, { key: "init", value: function() {
        } }]), A;
      })(), Ce = (function() {
        s(m, G);
        var A = f(m);
        function m() {
          return e(this, m), A.call(this, { type: L.DebugLib });
        }
        return i(m, [{ key: "init", value: function() {
        } }, { key: "detect", value: function() {
          var C;
          (((C = (C = window.eruda) == null ? void 0 : C._devTools) == null ? void 0 : C._isShow) === true || window._vcOrigConsole && window.document.querySelector("#__vconsole.vc-toggle")) && this.onDevToolOpen();
        } }], [{ key: "isUsing", value: function() {
          return !!window.eruda || !!window._vcOrigConsole;
        } }]), m;
      })(), an = 0, ln = 0, un = [], Pr = 0;
      function Sr(A) {
        function m() {
          M = true;
        }
        function C() {
          M = false;
        }
        var E, N, k, q, O, x, M = false;
        function D() {
          (x[q] === k ? N : E)();
        }
        F(m, C), E = C, N = m, (x = document).hidden !== void 0 ? (k = "hidden", O = "visibilitychange", q = "visibilityState") : x.mozHidden !== void 0 ? (k = "mozHidden", O = "mozvisibilitychange", q = "mozVisibilityState") : x.msHidden !== void 0 ? (k = "msHidden", O = "msvisibilitychange", q = "msVisibilityState") : x.webkitHidden !== void 0 && (k = "webkitHidden", O = "webkitvisibilitychange", q = "webkitVisibilityState"), x.removeEventListener(O, D, false), x.addEventListener(O, D, false), an = window.setInterval(function() {
          if (!(A.isSuspend || M || V())) {
            var R, De, ve = h(un);
            try {
              for (ve.s(); !(R = ve.n()).done; ) {
                var Pe = R.value;
                Ae(Pe.type), Pe.detect(Pr++);
              }
            } catch (me) {
              ve.e(me);
            } finally {
              ve.f();
            }
            U(), typeof v.ondevtoolclose == "function" && (De = z, !ke() && De && v.ondevtoolclose());
          }
        }, v.interval), ln = setTimeout(function() {
          W.pc || Ce.isUsing() || fn();
        }, v.stopIntervalTime);
      }
      function fn() {
        window.clearInterval(an);
      }
      var Ne = 8;
      function cn(A) {
        for (var m = (function(k, q) {
          k[q >> 5] |= 128 << q % 32, k[14 + (q + 64 >>> 9 << 4)] = q;
          for (var O = 1732584193, x = -271733879, M = -1732584194, D = 271733878, R = 0; R < k.length; R += 16) {
            var De = O, ve = x, Pe = M, me = D;
            O = Q(O, x, M, D, k[R + 0], 7, -680876936), D = Q(D, O, x, M, k[R + 1], 12, -389564586), M = Q(M, D, O, x, k[R + 2], 17, 606105819), x = Q(x, M, D, O, k[R + 3], 22, -1044525330), O = Q(O, x, M, D, k[R + 4], 7, -176418897), D = Q(D, O, x, M, k[R + 5], 12, 1200080426), M = Q(M, D, O, x, k[R + 6], 17, -1473231341), x = Q(x, M, D, O, k[R + 7], 22, -45705983), O = Q(O, x, M, D, k[R + 8], 7, 1770035416), D = Q(D, O, x, M, k[R + 9], 12, -1958414417), M = Q(M, D, O, x, k[R + 10], 17, -42063), x = Q(x, M, D, O, k[R + 11], 22, -1990404162), O = Q(O, x, M, D, k[R + 12], 7, 1804603682), D = Q(D, O, x, M, k[R + 13], 12, -40341101), M = Q(M, D, O, x, k[R + 14], 17, -1502002290), x = Q(x, M, D, O, k[R + 15], 22, 1236535329), O = Z(O, x, M, D, k[R + 1], 5, -165796510), D = Z(D, O, x, M, k[R + 6], 9, -1069501632), M = Z(M, D, O, x, k[R + 11], 14, 643717713), x = Z(x, M, D, O, k[R + 0], 20, -373897302), O = Z(O, x, M, D, k[R + 5], 5, -701558691), D = Z(D, O, x, M, k[R + 10], 9, 38016083), M = Z(M, D, O, x, k[R + 15], 14, -660478335), x = Z(x, M, D, O, k[R + 4], 20, -405537848), O = Z(O, x, M, D, k[R + 9], 5, 568446438), D = Z(D, O, x, M, k[R + 14], 9, -1019803690), M = Z(M, D, O, x, k[R + 3], 14, -187363961), x = Z(x, M, D, O, k[R + 8], 20, 1163531501), O = Z(O, x, M, D, k[R + 13], 5, -1444681467), D = Z(D, O, x, M, k[R + 2], 9, -51403784), M = Z(M, D, O, x, k[R + 7], 14, 1735328473), x = Z(x, M, D, O, k[R + 12], 20, -1926607734), O = $(O, x, M, D, k[R + 5], 4, -378558), D = $(D, O, x, M, k[R + 8], 11, -2022574463), M = $(M, D, O, x, k[R + 11], 16, 1839030562), x = $(x, M, D, O, k[R + 14], 23, -35309556), O = $(O, x, M, D, k[R + 1], 4, -1530992060), D = $(D, O, x, M, k[R + 4], 11, 1272893353), M = $(M, D, O, x, k[R + 7], 16, -155497632), x = $(x, M, D, O, k[R + 10], 23, -1094730640), O = $(O, x, M, D, k[R + 13], 4, 681279174), D = $(D, O, x, M, k[R + 0], 11, -358537222), M = $(M, D, O, x, k[R + 3], 16, -722521979), x = $(x, M, D, O, k[R + 6], 23, 76029189), O = $(O, x, M, D, k[R + 9], 4, -640364487), D = $(D, O, x, M, k[R + 12], 11, -421815835), M = $(M, D, O, x, k[R + 15], 16, 530742520), x = $(x, M, D, O, k[R + 2], 23, -995338651), O = ee(O, x, M, D, k[R + 0], 6, -198630844), D = ee(D, O, x, M, k[R + 7], 10, 1126891415), M = ee(M, D, O, x, k[R + 14], 15, -1416354905), x = ee(x, M, D, O, k[R + 5], 21, -57434055), O = ee(O, x, M, D, k[R + 12], 6, 1700485571), D = ee(D, O, x, M, k[R + 3], 10, -1894986606), M = ee(M, D, O, x, k[R + 10], 15, -1051523), x = ee(x, M, D, O, k[R + 1], 21, -2054922799), O = ee(O, x, M, D, k[R + 8], 6, 1873313359), D = ee(D, O, x, M, k[R + 15], 10, -30611744), M = ee(M, D, O, x, k[R + 6], 15, -1560198380), x = ee(x, M, D, O, k[R + 13], 21, 1309151649), O = ee(O, x, M, D, k[R + 4], 6, -145523070), D = ee(D, O, x, M, k[R + 11], 10, -1120210379), M = ee(M, D, O, x, k[R + 2], 15, 718787259), x = ee(x, M, D, O, k[R + 9], 21, -343485551), O = ge(O, De), x = ge(x, ve), M = ge(M, Pe), D = ge(D, me);
          }
          return Array(O, x, M, D);
        })((function(k) {
          for (var q = Array(), O = (1 << Ne) - 1, x = 0; x < k.length * Ne; x += Ne) q[x >> 5] |= (k.charCodeAt(x / Ne) & O) << x % 32;
          return q;
        })(A), A.length * Ne), C = "0123456789abcdef", E = "", N = 0; N < 4 * m.length; N++) E += C.charAt(m[N >> 2] >> N % 4 * 8 + 4 & 15) + C.charAt(m[N >> 2] >> N % 4 * 8 & 15);
        return E;
      }
      function Ue(A, m, C, E, N, k) {
        return ge((m = ge(ge(m, A), ge(E, k))) << N | m >>> 32 - N, C);
      }
      function Q(A, m, C, E, N, k, q) {
        return Ue(m & C | ~m & E, A, m, N, k, q);
      }
      function Z(A, m, C, E, N, k, q) {
        return Ue(m & E | C & ~E, A, m, N, k, q);
      }
      function $(A, m, C, E, N, k, q) {
        return Ue(m ^ C ^ E, A, m, N, k, q);
      }
      function ee(A, m, C, E, N, k, q) {
        return Ue(C ^ (m | ~E), A, m, N, k, q);
      }
      function ge(A, m) {
        var C = (65535 & A) + (65535 & m);
        return (A >> 16) + (m >> 16) + (C >> 16) << 16 | 65535 & C;
      }
      var Y = (function() {
        s(m, G);
        var A = f(m);
        function m() {
          return e(this, m), A.call(this, { type: L.RegToString, enabled: W.qqBrowser || W.firefox });
        }
        return i(m, [{ key: "init", value: function() {
          var C = this;
          this.lastTime = 0, this.reg = /./, P(this.reg), this.reg.toString = function() {
            var E;
            return W.qqBrowser ? (E = (/* @__PURE__ */ new Date()).getTime(), C.lastTime && E - C.lastTime < 100 ? C.onDevToolOpen() : C.lastTime = E) : W.firefox && C.onDevToolOpen(), "";
          };
        } }, { key: "detect", value: function() {
          P(this.reg);
        } }]), m;
      })(), Mr = (function() {
        s(m, G);
        var A = f(m);
        function m() {
          return e(this, m), A.call(this, { type: L.DefineId });
        }
        return i(m, [{ key: "init", value: function() {
          var C = this;
          this.div = document.createElement("div"), this.div.__defineGetter__("id", function() {
            C.onDevToolOpen();
          }), Object.defineProperty(this.div, "id", { get: function() {
            C.onDevToolOpen();
          } });
        } }, { key: "detect", value: function() {
          P(this.div);
        } }]), m;
      })(), Er = (function() {
        s(m, G);
        var A = f(m);
        function m() {
          return e(this, m), A.call(this, { type: L.Size, enabled: !W.iframe && !W.edge });
        }
        return i(m, [{ key: "init", value: function() {
          var C = this;
          this.checkWindowSizeUneven(), window.addEventListener("resize", function() {
            setTimeout(function() {
              C.checkWindowSizeUneven();
            }, 100);
          }, true);
        } }, { key: "detect", value: function() {
        } }, { key: "checkWindowSizeUneven", value: function() {
          var C = (function() {
            if (dn(window.devicePixelRatio)) return window.devicePixelRatio;
            var N = window.screen;
            return !!(dn(N) && N.deviceXDPI && N.logicalXDPI) && N.deviceXDPI / N.logicalXDPI;
          })();
          if (C !== false) {
            var E = 200 < window.outerWidth - window.innerWidth * C, C = 300 < window.outerHeight - window.innerHeight * C;
            if (E || C) return this.onDevToolOpen(), false;
            Ae(this.type);
          }
          return true;
        } }]), m;
      })();
      function dn(A) {
        return A != null;
      }
      var ce, Rr = (function() {
        s(m, G);
        var A = f(m);
        function m() {
          return e(this, m), A.call(this, { type: L.DateToString, enabled: !W.iosChrome && !W.iosEdge });
        }
        return i(m, [{ key: "init", value: function() {
          var C = this;
          this.count = 0, this.date = /* @__PURE__ */ new Date(), this.date.toString = function() {
            return C.count++, "";
          };
        } }, { key: "detect", value: function() {
          this.count = 0, P(this.date), U(), 2 <= this.count && this.onDevToolOpen();
        } }]), m;
      })(), _r = (function() {
        s(m, G);
        var A = f(m);
        function m() {
          return e(this, m), A.call(this, { type: L.FuncToString, enabled: !W.iosChrome && !W.iosEdge });
        }
        return i(m, [{ key: "init", value: function() {
          var C = this;
          this.count = 0, this.func = function() {
          }, this.func.toString = function() {
            return C.count++, "";
          };
        } }, { key: "detect", value: function() {
          this.count = 0, P(this.func), U(), 2 <= this.count && this.onDevToolOpen();
        } }]), m;
      })(), Tr = (function() {
        s(m, G);
        var A = f(m);
        function m() {
          return e(this, m), A.call(this, { type: L.Debugger, enabled: W.iosChrome || W.iosEdge });
        }
        return i(m, [{ key: "detect", value: function() {
          var C = b();
          100 < b() - C && this.onDevToolOpen();
        } }]), m;
      })(), Nr = (function() {
        s(m, G);
        var A = f(m);
        function m() {
          var C;
          return e(this, m), (C = A.call(this, { type: L.Performance, enabled: W.chrome || !W.mobile })).count = 0, C;
        }
        return i(m, [{ key: "init", value: function() {
          this.maxPrintTime = 0, this.largeObjectArray = H();
        } }, { key: "detect", value: function() {
          var C = this, E = y(function() {
            S(C.largeObjectArray);
          }), N = y(function() {
            P(C.largeObjectArray);
          });
          if (this.maxPrintTime = Math.max(this.maxPrintTime, N), U(), E === 0 || this.maxPrintTime === 0) return false;
          E > 10 * this.maxPrintTime && (2 <= this.count ? this.onDevToolOpen() : (this.count++, this.detect()));
        } }]), m;
      })(), hn = (a(ce = {}, L.RegToString, Y), a(ce, L.DefineId, Mr), a(ce, L.Size, Er), a(ce, L.DateToString, Rr), a(ce, L.FuncToString, _r), a(ce, L.Debugger, Tr), a(ce, L.Performance, Nr), a(ce, L.DebugLib, Ce), ce), xe = Object.assign(function(A) {
        function m() {
          var q = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "";
          return { success: !q, reason: q };
        }
        var C;
        if (xe.isRunning) return m("already running");
        if (j(), C = window.console || { log: function() {
        }, table: function() {
        }, clear: function() {
        } }, T = W.ie ? (P = function() {
          return C.log.apply(C, arguments);
        }, S = function() {
          return C.table.apply(C, arguments);
        }, function() {
          return C.clear();
        }) : (P = C.log, S = C.table, C.clear), w(A), v.md5 && cn((function(q) {
          var O = window.location.search, x = window.location.hash;
          return (O = O === "" && x !== "" ? "?".concat(x.split("?")[1]) : O) !== "" && O !== void 0 && (x = new RegExp("(^|&)" + q + "=([^&]*)(&|$)", "i"), q = O.substr(1).match(x), q != null) ? unescape(q[2]) : "";
        })(v.tkName)) === v.md5) return m("token passed");
        if (v.seo && W.seoBot) return m("seobot");
        xe.isRunning = true, Sr(xe);
        var E = xe, N = (X = function() {
          return E.isSuspend;
        }, window.top), k = window.parent;
        if (_(window), v.disableIframeParents && N && k && N !== window) {
          for (; k !== N; ) _(k), k = k.parent;
          _(N);
        }
        return (v.detectors === "all" ? Object.keys(hn) : v.detectors).forEach(function(q) {
          new hn[q]();
        }), m();
      }, { isRunning: false, isSuspend: false, md5: cn, version: "0.3.9", DetectorType: L, isDevToolOpened: ke });
      return Y = (function() {
        if (typeof window > "u" || !window.document) return null;
        var A = document.querySelector("[disable-devtool-auto]");
        if (!A) return null;
        var m = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"], C = ["interval"], E = {};
        return ["md5", "url", "tk-name", "detectors"].concat(m, C).forEach(function(N) {
          var k = A.getAttribute(N);
          k !== null && (C.indexOf(N) !== -1 ? k = parseInt(k) : m.indexOf(N) !== -1 ? k = k !== "false" : N === "detector" && k !== "all" && (k = k.split(" ")), E[(function(q) {
            if (q.indexOf("-") === -1) return q;
            var O = false;
            return q.split("").map(function(x) {
              return x === "-" ? (O = true, "") : O ? (O = false, x.toUpperCase()) : x;
            }).join("");
          })(N)] = k);
        }), E;
      })(), Y && xe(Y), xe;
    });
  })(Xe)), Xe.exports;
}
var qr = Lr();
const Do = qe(qr);
var mn = function() {
  return mn = Object.assign || function(n) {
    for (var o, e = 1, r = arguments.length; e < r; e++) {
      o = arguments[e];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
    }
    return n;
  }, mn.apply(this, arguments);
};
function Po(t, n) {
  var o = {};
  for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && n.indexOf(e) < 0 && (o[e] = t[e]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, e = Object.getOwnPropertySymbols(t); r < e.length; r++) n.indexOf(e[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, e[r]) && (o[e[r]] = t[e[r]]);
  return o;
}
function So(t, n, o) {
  if (o || arguments.length === 2) for (var e = 0, r = n.length, i; e < r; e++) (i || !(e in n)) && (i || (i = Array.prototype.slice.call(n, 0, e)), i[e] = n[e]);
  return t.concat(i || Array.prototype.slice.call(n));
}
var Mo = function() {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
}, jr = function(t) {
  if (typeof document > "u") return null;
  var n = Array.isArray(t) ? t[0] : t;
  return n.ownerDocument.body;
}, Se = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakMap(), ze = {}, ut = 0, fr = function(t) {
  return t && (t.host || fr(t.parentNode));
}, Hr = function(t, n) {
  return n.map(function(o) {
    if (t.contains(o)) return o;
    var e = fr(o);
    return e && t.contains(e) ? e : (console.error("aria-hidden", o, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, Ur = function(t, n, o, e) {
  var r = Hr(n, Array.isArray(t) ? t : [t]);
  ze[o] || (ze[o] = /* @__PURE__ */ new WeakMap());
  var i = ze[o], a = [], s = /* @__PURE__ */ new Set(), c = new Set(r), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  r.forEach(u);
  var l = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (s.has(d)) l(d);
      else try {
        var h = d.getAttribute(e), g = h !== null && h !== "false", v = (Se.get(d) || 0) + 1, p = (i.get(d) || 0) + 1;
        Se.set(d, v), i.set(d, p), a.push(d), v === 1 && g && Je.set(d, true), p === 1 && d.setAttribute(o, "true"), g || d.setAttribute(e, "true");
      } catch (w) {
        console.error("aria-hidden: cannot operate on ", d, w);
      }
    });
  };
  return l(n), s.clear(), ut++, function() {
    a.forEach(function(f) {
      var d = Se.get(f) - 1, h = i.get(f) - 1;
      Se.set(f, d), i.set(f, h), d || (Je.has(f) || f.removeAttribute(e), Je.delete(f)), h || f.removeAttribute(o);
    }), ut--, ut || (Se = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakMap(), ze = {});
  };
}, Eo = function(t, n, o) {
  o === void 0 && (o = "data-aria-hidden");
  var e = Array.from(Array.isArray(t) ? t : [t]), r = jr(t);
  return r ? (e.push.apply(e, Array.from(r.querySelectorAll("[aria-live], script"))), Ur(e, r, o, "aria-hidden")) : function() {
    return null;
  };
};
const Jr = ["top", "right", "bottom", "left"], be = Math.min, te = Math.max, Qe = Math.round, Ve = Math.floor, ae = (t) => ({ x: t, y: t }), zr = { left: "right", right: "left", bottom: "top", top: "bottom" }, Vr = { start: "end", end: "start" };
function jt(t, n, o) {
  return te(t, be(n, o));
}
function he(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function pe(t) {
  return t.split("-")[0];
}
function _e(t) {
  return t.split("-")[1];
}
function Vt(t) {
  return t === "x" ? "y" : "x";
}
function Yt(t) {
  return t === "y" ? "height" : "width";
}
const Yr = /* @__PURE__ */ new Set(["top", "bottom"]);
function se(t) {
  return Yr.has(pe(t)) ? "y" : "x";
}
function Kt(t) {
  return Vt(se(t));
}
function Kr(t, n, o) {
  o === void 0 && (o = false);
  const e = _e(t), r = Kt(t), i = Yt(r);
  let a = r === "x" ? e === (o ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return n.reference[i] > n.floating[i] && (a = Ze(a)), [a, Ze(a)];
}
function Xr(t) {
  const n = Ze(t);
  return [Ht(t), n, Ht(n)];
}
function Ht(t) {
  return t.replace(/start|end/g, (n) => Vr[n]);
}
const wn = ["left", "right"], bn = ["right", "left"], Gr = ["top", "bottom"], Qr = ["bottom", "top"];
function Zr(t, n, o) {
  switch (t) {
    case "top":
    case "bottom":
      return o ? n ? bn : wn : n ? wn : bn;
    case "left":
    case "right":
      return n ? Gr : Qr;
    default:
      return [];
  }
}
function $r(t, n, o, e) {
  const r = _e(t);
  let i = Zr(pe(t), o === "start", e);
  return r && (i = i.map((a) => a + "-" + r), n && (i = i.concat(i.map(Ht)))), i;
}
function Ze(t) {
  return t.replace(/left|right|bottom|top/g, (n) => zr[n]);
}
function ei(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function cr(t) {
  return typeof t != "number" ? ei(t) : { top: t, right: t, bottom: t, left: t };
}
function $e(t) {
  const { x: n, y: o, width: e, height: r } = t;
  return { width: e, height: r, top: o, left: n, right: n + e, bottom: o + r, x: n, y: o };
}
function yn(t, n, o) {
  let { reference: e, floating: r } = t;
  const i = se(n), a = Kt(n), s = Yt(a), c = pe(n), u = i === "y", l = e.x + e.width / 2 - r.width / 2, f = e.y + e.height / 2 - r.height / 2, d = e[s] / 2 - r[s] / 2;
  let h;
  switch (c) {
    case "top":
      h = { x: l, y: e.y - r.height };
      break;
    case "bottom":
      h = { x: l, y: e.y + e.height };
      break;
    case "right":
      h = { x: e.x + e.width, y: f };
      break;
    case "left":
      h = { x: e.x - r.width, y: f };
      break;
    default:
      h = { x: e.x, y: e.y };
  }
  switch (_e(n)) {
    case "start":
      h[a] -= d * (o && u ? -1 : 1);
      break;
    case "end":
      h[a] += d * (o && u ? -1 : 1);
      break;
  }
  return h;
}
async function ti(t, n) {
  var o;
  n === void 0 && (n = {});
  const { x: e, y: r, platform: i, rects: a, elements: s, strategy: c } = t, { boundary: u = "clippingAncestors", rootBoundary: l = "viewport", elementContext: f = "floating", altBoundary: d = false, padding: h = 0 } = he(n, t), g = cr(h), p = s[d ? f === "floating" ? "reference" : "floating" : f], w = $e(await i.getClippingRect({ element: (o = await (i.isElement == null ? void 0 : i.isElement(p))) == null || o ? p : p.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)), boundary: u, rootBoundary: l, strategy: c })), b = f === "floating" ? { x: e, y: r, width: a.floating.width, height: a.floating.height } : a.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), F = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || { x: 1, y: 1 } : { x: 1, y: 1 }, P = $e(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: s, rect: b, offsetParent: y, strategy: c }) : b);
  return { top: (w.top - P.top + g.top) / F.y, bottom: (P.bottom - w.bottom + g.bottom) / F.y, left: (w.left - P.left + g.left) / F.x, right: (P.right - w.right + g.right) / F.x };
}
const ni = async (t, n, o) => {
  const { placement: e = "bottom", strategy: r = "absolute", middleware: i = [], platform: a } = o, s = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(n));
  let u = await a.getElementRects({ reference: t, floating: n, strategy: r }), { x: l, y: f } = yn(u, e, c), d = e, h = {}, g = 0;
  for (let p = 0; p < s.length; p++) {
    var v;
    const { name: w, fn: b } = s[p], { x: y, y: F, data: P, reset: S } = await b({ x: l, y: f, initialPlacement: e, placement: d, strategy: r, middlewareData: h, rects: u, platform: { ...a, detectOverflow: (v = a.detectOverflow) != null ? v : ti }, elements: { reference: t, floating: n } });
    l = y ?? l, f = F ?? f, h = { ...h, [w]: { ...h[w], ...P } }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (u = S.rects === true ? await a.getElementRects({ reference: t, floating: n, strategy: r }) : S.rects), { x: l, y: f } = yn(u, d, c)), p = -1);
  }
  return { x: l, y: f, placement: d, strategy: r, middlewareData: h };
}, ri = (t) => ({ name: "arrow", options: t, async fn(n) {
  const { x: o, y: e, placement: r, rects: i, platform: a, elements: s, middlewareData: c } = n, { element: u, padding: l = 0 } = he(t, n) || {};
  if (u == null) return {};
  const f = cr(l), d = { x: o, y: e }, h = Kt(r), g = Yt(h), v = await a.getDimensions(u), p = h === "y", w = p ? "top" : "left", b = p ? "bottom" : "right", y = p ? "clientHeight" : "clientWidth", F = i.reference[g] + i.reference[h] - d[h] - i.floating[g], P = d[h] - i.reference[h], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
  let T = S ? S[y] : 0;
  (!T || !await (a.isElement == null ? void 0 : a.isElement(S))) && (T = s.floating[y] || i.floating[g]);
  const W = F / 2 - P / 2, j = T / 2 - v[g] / 2 - 1, H = be(f[w], j), U = be(f[b], j), J = H, K = T - v[g] - U, V = T / 2 - v[g] / 2 + W, X = jt(J, V, K), _ = !c.arrow && _e(r) != null && V !== X && i.reference[g] / 2 - (V < J ? H : U) - v[g] / 2 < 0, B = _ ? V < J ? V - J : V - K : 0;
  return { [h]: d[h] + B, data: { [h]: X, centerOffset: V - X - B, ..._ && { alignmentOffset: B } }, reset: _ };
} }), ii = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(n) {
    var o, e;
    const { placement: r, middlewareData: i, rects: a, initialPlacement: s, platform: c, elements: u } = n, { mainAxis: l = true, crossAxis: f = true, fallbackPlacements: d, fallbackStrategy: h = "bestFit", fallbackAxisSideDirection: g = "none", flipAlignment: v = true, ...p } = he(t, n);
    if ((o = i.arrow) != null && o.alignmentOffset) return {};
    const w = pe(r), b = se(s), y = pe(s) === s, F = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), P = d || (y || !v ? [Ze(s)] : Xr(s)), S = g !== "none";
    !d && S && P.push(...$r(s, v, g, F));
    const T = [s, ...P], W = await c.detectOverflow(n, p), j = [];
    let H = ((e = i.flip) == null ? void 0 : e.overflows) || [];
    if (l && j.push(W[w]), f) {
      const V = Kr(r, a, F);
      j.push(W[V[0]], W[V[1]]);
    }
    if (H = [...H, { placement: r, overflows: j }], !j.every((V) => V <= 0)) {
      var U, J;
      const V = (((U = i.flip) == null ? void 0 : U.index) || 0) + 1, X = T[V];
      if (X && (!(f === "alignment" ? b !== se(X) : false) || H.every((I) => se(I.placement) === b ? I.overflows[0] > 0 : true))) return { data: { index: V, overflows: H }, reset: { placement: X } };
      let _ = (J = H.filter((B) => B.overflows[0] <= 0).sort((B, I) => B.overflows[1] - I.overflows[1])[0]) == null ? void 0 : J.placement;
      if (!_) switch (h) {
        case "bestFit": {
          var K;
          const B = (K = H.filter((I) => {
            if (S) {
              const L = se(I.placement);
              return L === b || L === "y";
            }
            return true;
          }).map((I) => [I.placement, I.overflows.filter((L) => L > 0).reduce((L, z) => L + z, 0)]).sort((I, L) => I[1] - L[1])[0]) == null ? void 0 : K[0];
          B && (_ = B);
          break;
        }
        case "initialPlacement":
          _ = s;
          break;
      }
      if (r !== _) return { reset: { placement: _ } };
    }
    return {};
  } };
};
function An(t, n) {
  return { top: t.top - n.height, right: t.right - n.width, bottom: t.bottom - n.height, left: t.left - n.width };
}
function Cn(t) {
  return Jr.some((n) => t[n] >= 0);
}
const oi = function(t) {
  return t === void 0 && (t = {}), { name: "hide", options: t, async fn(n) {
    const { rects: o, platform: e } = n, { strategy: r = "referenceHidden", ...i } = he(t, n);
    switch (r) {
      case "referenceHidden": {
        const a = await e.detectOverflow(n, { ...i, elementContext: "reference" }), s = An(a, o.reference);
        return { data: { referenceHiddenOffsets: s, referenceHidden: Cn(s) } };
      }
      case "escaped": {
        const a = await e.detectOverflow(n, { ...i, altBoundary: true }), s = An(a, o.floating);
        return { data: { escapedOffsets: s, escaped: Cn(s) } };
      }
      default:
        return {};
    }
  } };
}, dr = /* @__PURE__ */ new Set(["left", "top"]);
async function si(t, n) {
  const { placement: o, platform: e, elements: r } = t, i = await (e.isRTL == null ? void 0 : e.isRTL(r.floating)), a = pe(o), s = _e(o), c = se(o) === "y", u = dr.has(a) ? -1 : 1, l = i && c ? -1 : 1, f = he(n, t);
  let { mainAxis: d, crossAxis: h, alignmentAxis: g } = typeof f == "number" ? { mainAxis: f, crossAxis: 0, alignmentAxis: null } : { mainAxis: f.mainAxis || 0, crossAxis: f.crossAxis || 0, alignmentAxis: f.alignmentAxis };
  return s && typeof g == "number" && (h = s === "end" ? g * -1 : g), c ? { x: h * l, y: d * u } : { x: d * u, y: h * l };
}
const ai = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(n) {
    var o, e;
    const { x: r, y: i, placement: a, middlewareData: s } = n, c = await si(n, t);
    return a === ((o = s.offset) == null ? void 0 : o.placement) && (e = s.arrow) != null && e.alignmentOffset ? {} : { x: r + c.x, y: i + c.y, data: { ...c, placement: a } };
  } };
}, li = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(n) {
    const { x: o, y: e, placement: r, platform: i } = n, { mainAxis: a = true, crossAxis: s = false, limiter: c = { fn: (w) => {
      let { x: b, y } = w;
      return { x: b, y };
    } }, ...u } = he(t, n), l = { x: o, y: e }, f = await i.detectOverflow(n, u), d = se(pe(r)), h = Vt(d);
    let g = l[h], v = l[d];
    if (a) {
      const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", y = g + f[w], F = g - f[b];
      g = jt(y, g, F);
    }
    if (s) {
      const w = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", y = v + f[w], F = v - f[b];
      v = jt(y, v, F);
    }
    const p = c.fn({ ...n, [h]: g, [d]: v });
    return { ...p, data: { x: p.x - o, y: p.y - e, enabled: { [h]: a, [d]: s } } };
  } };
}, ui = function(t) {
  return t === void 0 && (t = {}), { options: t, fn(n) {
    const { x: o, y: e, placement: r, rects: i, middlewareData: a } = n, { offset: s = 0, mainAxis: c = true, crossAxis: u = true } = he(t, n), l = { x: o, y: e }, f = se(r), d = Vt(f);
    let h = l[d], g = l[f];
    const v = he(s, n), p = typeof v == "number" ? { mainAxis: v, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...v };
    if (c) {
      const y = d === "y" ? "height" : "width", F = i.reference[d] - i.floating[y] + p.mainAxis, P = i.reference[d] + i.reference[y] - p.mainAxis;
      h < F ? h = F : h > P && (h = P);
    }
    if (u) {
      var w, b;
      const y = d === "y" ? "width" : "height", F = dr.has(pe(r)), P = i.reference[f] - i.floating[y] + (F && ((w = a.offset) == null ? void 0 : w[f]) || 0) + (F ? 0 : p.crossAxis), S = i.reference[f] + i.reference[y] + (F ? 0 : ((b = a.offset) == null ? void 0 : b[f]) || 0) - (F ? p.crossAxis : 0);
      g < P ? g = P : g > S && (g = S);
    }
    return { [d]: h, [f]: g };
  } };
}, fi = function(t) {
  return t === void 0 && (t = {}), { name: "size", options: t, async fn(n) {
    var o, e;
    const { placement: r, rects: i, platform: a, elements: s } = n, { apply: c = () => {
    }, ...u } = he(t, n), l = await a.detectOverflow(n, u), f = pe(r), d = _e(r), h = se(r) === "y", { width: g, height: v } = i.floating;
    let p, w;
    f === "top" || f === "bottom" ? (p = f, w = d === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = f, p = d === "end" ? "top" : "bottom");
    const b = v - l.top - l.bottom, y = g - l.left - l.right, F = be(v - l[p], b), P = be(g - l[w], y), S = !n.middlewareData.shift;
    let T = F, W = P;
    if ((o = n.middlewareData.shift) != null && o.enabled.x && (W = y), (e = n.middlewareData.shift) != null && e.enabled.y && (T = b), S && !d) {
      const H = te(l.left, 0), U = te(l.right, 0), J = te(l.top, 0), K = te(l.bottom, 0);
      h ? W = g - 2 * (H !== 0 || U !== 0 ? H + U : te(l.left, l.right)) : T = v - 2 * (J !== 0 || K !== 0 ? J + K : te(l.top, l.bottom));
    }
    await c({ ...n, availableWidth: W, availableHeight: T });
    const j = await a.getDimensions(s.floating);
    return g !== j.width || v !== j.height ? { reset: { rects: true } } : {};
  } };
};
function tt() {
  return typeof window < "u";
}
function Te(t) {
  return hr(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function ne(t) {
  var n;
  return (t == null || (n = t.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function ue(t) {
  var n;
  return (n = (hr(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : n.documentElement;
}
function hr(t) {
  return tt() ? t instanceof Node || t instanceof ne(t).Node : false;
}
function ie(t) {
  return tt() ? t instanceof Element || t instanceof ne(t).Element : false;
}
function le(t) {
  return tt() ? t instanceof HTMLElement || t instanceof ne(t).HTMLElement : false;
}
function Fn(t) {
  return !tt() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof ne(t).ShadowRoot;
}
const ci = /* @__PURE__ */ new Set(["inline", "contents"]);
function je(t) {
  const { overflow: n, overflowX: o, overflowY: e, display: r } = oe(t);
  return /auto|scroll|overlay|hidden|clip/.test(n + e + o) && !ci.has(r);
}
const di = /* @__PURE__ */ new Set(["table", "td", "th"]);
function hi(t) {
  return di.has(Te(t));
}
const pi = [":popover-open", ":modal"];
function nt(t) {
  return pi.some((n) => {
    try {
      return t.matches(n);
    } catch {
      return false;
    }
  });
}
const gi = ["transform", "translate", "scale", "rotate", "perspective"], vi = ["transform", "translate", "scale", "rotate", "perspective", "filter"], mi = ["paint", "layout", "strict", "content"];
function Xt(t) {
  const n = Gt(), o = ie(t) ? oe(t) : t;
  return gi.some((e) => o[e] ? o[e] !== "none" : false) || (o.containerType ? o.containerType !== "normal" : false) || !n && (o.backdropFilter ? o.backdropFilter !== "none" : false) || !n && (o.filter ? o.filter !== "none" : false) || vi.some((e) => (o.willChange || "").includes(e)) || mi.some((e) => (o.contain || "").includes(e));
}
function wi(t) {
  let n = ye(t);
  for (; le(n) && !Re(n); ) {
    if (Xt(n)) return n;
    if (nt(n)) return null;
    n = ye(n);
  }
  return null;
}
function Gt() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
const bi = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Re(t) {
  return bi.has(Te(t));
}
function oe(t) {
  return ne(t).getComputedStyle(t);
}
function rt(t) {
  return ie(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function ye(t) {
  if (Te(t) === "html") return t;
  const n = t.assignedSlot || t.parentNode || Fn(t) && t.host || ue(t);
  return Fn(n) ? n.host : n;
}
function pr(t) {
  const n = ye(t);
  return Re(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : le(n) && je(n) ? n : pr(n);
}
function Le(t, n, o) {
  var e;
  n === void 0 && (n = []), o === void 0 && (o = true);
  const r = pr(t), i = r === ((e = t.ownerDocument) == null ? void 0 : e.body), a = ne(r);
  if (i) {
    const s = Ut(a);
    return n.concat(a, a.visualViewport || [], je(r) ? r : [], s && o ? Le(s) : []);
  }
  return n.concat(r, Le(r, [], o));
}
function Ut(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function gr(t) {
  const n = oe(t);
  let o = parseFloat(n.width) || 0, e = parseFloat(n.height) || 0;
  const r = le(t), i = r ? t.offsetWidth : o, a = r ? t.offsetHeight : e, s = Qe(o) !== i || Qe(e) !== a;
  return s && (o = i, e = a), { width: o, height: e, $: s };
}
function Qt(t) {
  return ie(t) ? t : t.contextElement;
}
function Ee(t) {
  const n = Qt(t);
  if (!le(n)) return ae(1);
  const o = n.getBoundingClientRect(), { width: e, height: r, $: i } = gr(n);
  let a = (i ? Qe(o.width) : o.width) / e, s = (i ? Qe(o.height) : o.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), { x: a, y: s };
}
const yi = ae(0);
function vr(t) {
  const n = ne(t);
  return !Gt() || !n.visualViewport ? yi : { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop };
}
function Ai(t, n, o) {
  return n === void 0 && (n = false), !o || n && o !== ne(t) ? false : n;
}
function Fe(t, n, o, e) {
  n === void 0 && (n = false), o === void 0 && (o = false);
  const r = t.getBoundingClientRect(), i = Qt(t);
  let a = ae(1);
  n && (e ? ie(e) && (a = Ee(e)) : a = Ee(t));
  const s = Ai(i, o, e) ? vr(i) : ae(0);
  let c = (r.left + s.x) / a.x, u = (r.top + s.y) / a.y, l = r.width / a.x, f = r.height / a.y;
  if (i) {
    const d = ne(i), h = e && ie(e) ? ne(e) : e;
    let g = d, v = Ut(g);
    for (; v && e && h !== g; ) {
      const p = Ee(v), w = v.getBoundingClientRect(), b = oe(v), y = w.left + (v.clientLeft + parseFloat(b.paddingLeft)) * p.x, F = w.top + (v.clientTop + parseFloat(b.paddingTop)) * p.y;
      c *= p.x, u *= p.y, l *= p.x, f *= p.y, c += y, u += F, g = ne(v), v = Ut(g);
    }
  }
  return $e({ width: l, height: f, x: c, y: u });
}
function it(t, n) {
  const o = rt(t).scrollLeft;
  return n ? n.left + o : Fe(ue(t)).left + o;
}
function mr(t, n) {
  const o = t.getBoundingClientRect(), e = o.left + n.scrollLeft - it(t, o), r = o.top + n.scrollTop;
  return { x: e, y: r };
}
function Ci(t) {
  let { elements: n, rect: o, offsetParent: e, strategy: r } = t;
  const i = r === "fixed", a = ue(e), s = n ? nt(n.floating) : false;
  if (e === a || s && i) return o;
  let c = { scrollLeft: 0, scrollTop: 0 }, u = ae(1);
  const l = ae(0), f = le(e);
  if ((f || !f && !i) && ((Te(e) !== "body" || je(a)) && (c = rt(e)), le(e))) {
    const h = Fe(e);
    u = Ee(e), l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
  }
  const d = a && !f && !i ? mr(a, c) : ae(0);
  return { width: o.width * u.x, height: o.height * u.y, x: o.x * u.x - c.scrollLeft * u.x + l.x + d.x, y: o.y * u.y - c.scrollTop * u.y + l.y + d.y };
}
function Fi(t) {
  return Array.from(t.getClientRects());
}
function Oi(t) {
  const n = ue(t), o = rt(t), e = t.ownerDocument.body, r = te(n.scrollWidth, n.clientWidth, e.scrollWidth, e.clientWidth), i = te(n.scrollHeight, n.clientHeight, e.scrollHeight, e.clientHeight);
  let a = -o.scrollLeft + it(t);
  const s = -o.scrollTop;
  return oe(e).direction === "rtl" && (a += te(n.clientWidth, e.clientWidth) - r), { width: r, height: i, x: a, y: s };
}
const On = 25;
function ki(t, n) {
  const o = ne(t), e = ue(t), r = o.visualViewport;
  let i = e.clientWidth, a = e.clientHeight, s = 0, c = 0;
  if (r) {
    i = r.width, a = r.height;
    const l = Gt();
    (!l || l && n === "fixed") && (s = r.offsetLeft, c = r.offsetTop);
  }
  const u = it(e);
  if (u <= 0) {
    const l = e.ownerDocument, f = l.body, d = getComputedStyle(f), h = l.compatMode === "CSS1Compat" && parseFloat(d.marginLeft) + parseFloat(d.marginRight) || 0, g = Math.abs(e.clientWidth - f.clientWidth - h);
    g <= On && (i -= g);
  } else u <= On && (i += u);
  return { width: i, height: a, x: s, y: c };
}
const xi = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Di(t, n) {
  const o = Fe(t, true, n === "fixed"), e = o.top + t.clientTop, r = o.left + t.clientLeft, i = le(t) ? Ee(t) : ae(1), a = t.clientWidth * i.x, s = t.clientHeight * i.y, c = r * i.x, u = e * i.y;
  return { width: a, height: s, x: c, y: u };
}
function kn(t, n, o) {
  let e;
  if (n === "viewport") e = ki(t, o);
  else if (n === "document") e = Oi(ue(t));
  else if (ie(n)) e = Di(n, o);
  else {
    const r = vr(t);
    e = { x: n.x - r.x, y: n.y - r.y, width: n.width, height: n.height };
  }
  return $e(e);
}
function wr(t, n) {
  const o = ye(t);
  return o === n || !ie(o) || Re(o) ? false : oe(o).position === "fixed" || wr(o, n);
}
function Pi(t, n) {
  const o = n.get(t);
  if (o) return o;
  let e = Le(t, [], false).filter((s) => ie(s) && Te(s) !== "body"), r = null;
  const i = oe(t).position === "fixed";
  let a = i ? ye(t) : t;
  for (; ie(a) && !Re(a); ) {
    const s = oe(a), c = Xt(a);
    !c && s.position === "fixed" && (r = null), (i ? !c && !r : !c && s.position === "static" && !!r && xi.has(r.position) || je(a) && !c && wr(t, a)) ? e = e.filter((l) => l !== a) : r = s, a = ye(a);
  }
  return n.set(t, e), e;
}
function Si(t) {
  let { element: n, boundary: o, rootBoundary: e, strategy: r } = t;
  const a = [...o === "clippingAncestors" ? nt(n) ? [] : Pi(n, this._c) : [].concat(o), e], s = a[0], c = a.reduce((u, l) => {
    const f = kn(n, l, r);
    return u.top = te(f.top, u.top), u.right = be(f.right, u.right), u.bottom = be(f.bottom, u.bottom), u.left = te(f.left, u.left), u;
  }, kn(n, s, r));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}
function Mi(t) {
  const { width: n, height: o } = gr(t);
  return { width: n, height: o };
}
function Ei(t, n, o) {
  const e = le(n), r = ue(n), i = o === "fixed", a = Fe(t, true, i, n);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const c = ae(0);
  function u() {
    c.x = it(r);
  }
  if (e || !e && !i) if ((Te(n) !== "body" || je(r)) && (s = rt(n)), e) {
    const h = Fe(n, true, i, n);
    c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
  } else r && u();
  i && !e && r && u();
  const l = r && !e && !i ? mr(r, s) : ae(0), f = a.left + s.scrollLeft - c.x - l.x, d = a.top + s.scrollTop - c.y - l.y;
  return { x: f, y: d, width: a.width, height: a.height };
}
function ft(t) {
  return oe(t).position === "static";
}
function xn(t, n) {
  if (!le(t) || oe(t).position === "fixed") return null;
  if (n) return n(t);
  let o = t.offsetParent;
  return ue(t) === o && (o = o.ownerDocument.body), o;
}
function br(t, n) {
  const o = ne(t);
  if (nt(t)) return o;
  if (!le(t)) {
    let r = ye(t);
    for (; r && !Re(r); ) {
      if (ie(r) && !ft(r)) return r;
      r = ye(r);
    }
    return o;
  }
  let e = xn(t, n);
  for (; e && hi(e) && ft(e); ) e = xn(e, n);
  return e && Re(e) && ft(e) && !Xt(e) ? o : e || wi(t) || o;
}
const Ri = async function(t) {
  const n = this.getOffsetParent || br, o = this.getDimensions, e = await o(t.floating);
  return { reference: Ei(t.reference, await n(t.floating), t.strategy), floating: { x: 0, y: 0, width: e.width, height: e.height } };
};
function _i(t) {
  return oe(t).direction === "rtl";
}
const Ti = { convertOffsetParentRelativeRectToViewportRelativeRect: Ci, getDocumentElement: ue, getClippingRect: Si, getOffsetParent: br, getElementRects: Ri, getClientRects: Fi, getDimensions: Mi, getScale: Ee, isElement: ie, isRTL: _i };
function yr(t, n) {
  return t.x === n.x && t.y === n.y && t.width === n.width && t.height === n.height;
}
function Ni(t, n) {
  let o = null, e;
  const r = ue(t);
  function i() {
    var s;
    clearTimeout(e), (s = o) == null || s.disconnect(), o = null;
  }
  function a(s, c) {
    s === void 0 && (s = false), c === void 0 && (c = 1), i();
    const u = t.getBoundingClientRect(), { left: l, top: f, width: d, height: h } = u;
    if (s || n(), !d || !h) return;
    const g = Ve(f), v = Ve(r.clientWidth - (l + d)), p = Ve(r.clientHeight - (f + h)), w = Ve(l), y = { rootMargin: -g + "px " + -v + "px " + -p + "px " + -w + "px", threshold: te(0, be(1, c)) || 1 };
    let F = true;
    function P(S) {
      const T = S[0].intersectionRatio;
      if (T !== c) {
        if (!F) return a();
        T ? a(false, T) : e = setTimeout(() => {
          a(false, 1e-7);
        }, 1e3);
      }
      T === 1 && !yr(u, t.getBoundingClientRect()) && a(), F = false;
    }
    try {
      o = new IntersectionObserver(P, { ...y, root: r.ownerDocument });
    } catch {
      o = new IntersectionObserver(P, y);
    }
    o.observe(t);
  }
  return a(true), i;
}
function Ro(t, n, o, e) {
  e === void 0 && (e = {});
  const { ancestorScroll: r = true, ancestorResize: i = true, elementResize: a = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = false } = e, u = Qt(t), l = r || i ? [...u ? Le(u) : [], ...Le(n)] : [];
  l.forEach((w) => {
    r && w.addEventListener("scroll", o, { passive: true }), i && w.addEventListener("resize", o);
  });
  const f = u && s ? Ni(u, o) : null;
  let d = -1, h = null;
  a && (h = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === u && h && (h.unobserve(n), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(n);
    })), o();
  }), u && !c && h.observe(u), h.observe(n));
  let g, v = c ? Fe(t) : null;
  c && p();
  function p() {
    const w = Fe(t);
    v && !yr(v, w) && o(), v = w, g = requestAnimationFrame(p);
  }
  return o(), () => {
    var w;
    l.forEach((b) => {
      r && b.removeEventListener("scroll", o), i && b.removeEventListener("resize", o);
    }), f == null ? void 0 : f(), (w = h) == null || w.disconnect(), h = null, c && cancelAnimationFrame(g);
  };
}
const _o = ai, To = li, No = ii, Wo = fi, Io = oi, Bo = ri, Lo = ui, qo = (t, n, o) => {
  const e = /* @__PURE__ */ new Map(), r = { platform: Ti, ...o }, i = { ...r.platform, _c: e };
  return ni(t, n, { ...r, platform: i });
}, Wi = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function Me(t, n, o) {
  const e = o[0];
  if (n != null && t >= n) throw new Error(t + " >= " + n);
  if (t.slice(-1) === e || n && n.slice(-1) === e) throw new Error("trailing zero");
  if (n) {
    let a = 0;
    for (; (t[a] || e) === n[a]; ) a++;
    if (a > 0) return n.slice(0, a) + Me(t.slice(a), n.slice(a), o);
  }
  const r = t ? o.indexOf(t[0]) : 0, i = n != null ? o.indexOf(n[0]) : o.length;
  if (i - r > 1) {
    const a = Math.round(0.5 * (r + i));
    return o[a];
  } else return n && n.length > 1 ? n.slice(0, 1) : o[r] + Me(t.slice(1), null, o);
}
function Ar(t) {
  if (t.length !== Cr(t[0])) throw new Error("invalid integer part of order key: " + t);
}
function Cr(t) {
  if (t >= "a" && t <= "z") return t.charCodeAt(0) - 97 + 2;
  if (t >= "A" && t <= "Z") return 90 - t.charCodeAt(0) + 2;
  throw new Error("invalid order key head: " + t);
}
function We(t) {
  const n = Cr(t[0]);
  if (n > t.length) throw new Error("invalid order key: " + t);
  return t.slice(0, n);
}
function Dn(t, n) {
  if (t === "A" + n[0].repeat(26)) throw new Error("invalid order key: " + t);
  const o = We(t);
  if (t.slice(o.length).slice(-1) === n[0]) throw new Error("invalid order key: " + t);
}
function Pn(t, n) {
  Ar(t);
  const [o, ...e] = t.split("");
  let r = true;
  for (let i = e.length - 1; r && i >= 0; i--) {
    const a = n.indexOf(e[i]) + 1;
    a === n.length ? e[i] = n[0] : (e[i] = n[a], r = false);
  }
  if (r) {
    if (o === "Z") return "a" + n[0];
    if (o === "z") return null;
    const i = String.fromCharCode(o.charCodeAt(0) + 1);
    return i > "a" ? e.push(n[0]) : e.pop(), i + e.join("");
  } else return o + e.join("");
}
function Ii(t, n) {
  Ar(t);
  const [o, ...e] = t.split("");
  let r = true;
  for (let i = e.length - 1; r && i >= 0; i--) {
    const a = n.indexOf(e[i]) - 1;
    a === -1 ? e[i] = n.slice(-1) : (e[i] = n[a], r = false);
  }
  if (r) {
    if (o === "a") return "Z" + n.slice(-1);
    if (o === "A") return null;
    const i = String.fromCharCode(o.charCodeAt(0) - 1);
    return i < "Z" ? e.push(n.slice(-1)) : e.pop(), i + e.join("");
  } else return o + e.join("");
}
function jo(t, n, o = Wi) {
  if (t != null && Dn(t, o), n != null && Dn(n, o), t != null && n != null && t >= n) throw new Error(t + " >= " + n);
  if (t == null) {
    if (n == null) return "a" + o[0];
    const c = We(n), u = n.slice(c.length);
    if (c === "A" + o[0].repeat(26)) return c + Me("", u, o);
    if (c < n) return c;
    const l = Ii(c, o);
    if (l == null) throw new Error("cannot decrement any more");
    return l;
  }
  if (n == null) {
    const c = We(t), u = t.slice(c.length), l = Pn(c, o);
    return l ?? c + Me(u, null, o);
  }
  const e = We(t), r = t.slice(e.length), i = We(n), a = n.slice(i.length);
  if (e === i) return e + Me(r, a, o);
  const s = Pn(e, o);
  if (s == null) throw new Error("cannot increment any more");
  return s < n ? s : e + Me(r, null, o);
}
var Ye = { exports: {} }, ct, Sn;
function Bi() {
  if (Sn) return ct;
  Sn = 1;
  var t = 1e3, n = t * 60, o = n * 60, e = o * 24, r = e * 7, i = e * 365.25;
  ct = function(l, f) {
    f = f || {};
    var d = typeof l;
    if (d === "string" && l.length > 0) return a(l);
    if (d === "number" && isFinite(l)) return f.long ? c(l) : s(l);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(l));
  };
  function a(l) {
    if (l = String(l), !(l.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(l);
      if (f) {
        var d = parseFloat(f[1]), h = (f[2] || "ms").toLowerCase();
        switch (h) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * i;
          case "weeks":
          case "week":
          case "w":
            return d * r;
          case "days":
          case "day":
          case "d":
            return d * e;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return d * o;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return d * n;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return d;
          default:
            return;
        }
      }
    }
  }
  function s(l) {
    var f = Math.abs(l);
    return f >= e ? Math.round(l / e) + "d" : f >= o ? Math.round(l / o) + "h" : f >= n ? Math.round(l / n) + "m" : f >= t ? Math.round(l / t) + "s" : l + "ms";
  }
  function c(l) {
    var f = Math.abs(l);
    return f >= e ? u(l, f, e, "day") : f >= o ? u(l, f, o, "hour") : f >= n ? u(l, f, n, "minute") : f >= t ? u(l, f, t, "second") : l + " ms";
  }
  function u(l, f, d, h) {
    var g = f >= d * 1.5;
    return Math.round(l / d) + " " + h + (g ? "s" : "");
  }
  return ct;
}
var dt, Mn;
function Li() {
  if (Mn) return dt;
  Mn = 1;
  function t(n) {
    e.debug = e, e.default = e, e.coerce = u, e.disable = s, e.enable = i, e.enabled = c, e.humanize = Bi(), e.destroy = l, Object.keys(n).forEach((f) => {
      e[f] = n[f];
    }), e.names = [], e.skips = [], e.formatters = {};
    function o(f) {
      let d = 0;
      for (let h = 0; h < f.length; h++) d = (d << 5) - d + f.charCodeAt(h), d |= 0;
      return e.colors[Math.abs(d) % e.colors.length];
    }
    e.selectColor = o;
    function e(f) {
      let d, h = null, g, v;
      function p(...w) {
        if (!p.enabled) return;
        const b = p, y = Number(/* @__PURE__ */ new Date()), F = y - (d || y);
        b.diff = F, b.prev = d, b.curr = y, d = y, w[0] = e.coerce(w[0]), typeof w[0] != "string" && w.unshift("%O");
        let P = 0;
        w[0] = w[0].replace(/%([a-zA-Z%])/g, (T, W) => {
          if (T === "%%") return "%";
          P++;
          const j = e.formatters[W];
          if (typeof j == "function") {
            const H = w[P];
            T = j.call(b, H), w.splice(P, 1), P--;
          }
          return T;
        }), e.formatArgs.call(b, w), (b.log || e.log).apply(b, w);
      }
      return p.namespace = f, p.useColors = e.useColors(), p.color = e.selectColor(f), p.extend = r, p.destroy = e.destroy, Object.defineProperty(p, "enabled", { enumerable: true, configurable: false, get: () => h !== null ? h : (g !== e.namespaces && (g = e.namespaces, v = e.enabled(f)), v), set: (w) => {
        h = w;
      } }), typeof e.init == "function" && e.init(p), p;
    }
    function r(f, d) {
      const h = e(this.namespace + (typeof d > "u" ? ":" : d) + f);
      return h.log = this.log, h;
    }
    function i(f) {
      e.save(f), e.namespaces = f, e.names = [], e.skips = [];
      const d = (typeof f == "string" ? f : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const h of d) h[0] === "-" ? e.skips.push(h.slice(1)) : e.names.push(h);
    }
    function a(f, d) {
      let h = 0, g = 0, v = -1, p = 0;
      for (; h < f.length; ) if (g < d.length && (d[g] === f[h] || d[g] === "*")) d[g] === "*" ? (v = g, p = h, g++) : (h++, g++);
      else if (v !== -1) g = v + 1, p++, h = p;
      else return false;
      for (; g < d.length && d[g] === "*"; ) g++;
      return g === d.length;
    }
    function s() {
      const f = [...e.names, ...e.skips.map((d) => "-" + d)].join(",");
      return e.enable(""), f;
    }
    function c(f) {
      for (const d of e.skips) if (a(f, d)) return false;
      for (const d of e.names) if (a(f, d)) return true;
      return false;
    }
    function u(f) {
      return f instanceof Error ? f.stack || f.message : f;
    }
    function l() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return e.enable(e.load()), e;
  }
  return dt = t, dt;
}
var En;
function qi() {
  return En || (En = 1, (function(t, n) {
    var o = {};
    n.formatArgs = r, n.save = i, n.load = a, n.useColors = e, n.storage = s(), n.destroy = /* @__PURE__ */ (() => {
      let u = false;
      return () => {
        u || (u = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function e() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
      let u;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (u = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(u[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function r(u) {
      if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
      const l = "color: " + this.color;
      u.splice(1, 0, l, "color: inherit");
      let f = 0, d = 0;
      u[0].replace(/%[a-zA-Z%]/g, (h) => {
        h !== "%%" && (f++, h === "%c" && (d = f));
      }), u.splice(d, 0, l);
    }
    n.log = console.debug || console.log || (() => {
    });
    function i(u) {
      try {
        u ? n.storage.setItem("debug", u) : n.storage.removeItem("debug");
      } catch {
      }
    }
    function a() {
      let u;
      try {
        u = n.storage.getItem("debug") || n.storage.getItem("DEBUG");
      } catch {
      }
      return !u && typeof process < "u" && "env" in process && (u = o.DEBUG), u;
    }
    function s() {
      try {
        return localStorage;
      } catch {
      }
    }
    t.exports = Li()(n);
    const { formatters: c } = t.exports;
    c.j = function(u) {
      try {
        return JSON.stringify(u);
      } catch (l) {
        return "[UnexpectedJSONParseError]: " + l.message;
      }
    };
  })(Ye, Ye.exports)), Ye.exports;
}
var ji = qi();
const Ho = qe(ji), Hi = /* @__PURE__ */ Symbol(), Zt = /* @__PURE__ */ Symbol(), Ie = "a", Fr = "f", Rn = "p", Or = "c", kr = "t", $t = "h", Be = "w", en = "o", tn = "k";
let Ui = (t, n) => new Proxy(t, n);
const Jt = Object.getPrototypeOf, zt = /* @__PURE__ */ new WeakMap(), xr = (t) => t && (zt.has(t) ? zt.get(t) : Jt(t) === Object.prototype || Jt(t) === Array.prototype), et = (t) => typeof t == "object" && t !== null, Ji = (t) => Object.values(Object.getOwnPropertyDescriptors(t)).some((n) => !n.configurable && !n.writable), zi = (t) => {
  if (Array.isArray(t)) return Array.from(t);
  const n = Object.getOwnPropertyDescriptors(t);
  return Object.values(n).forEach((o) => {
    o.configurable = true;
  }), Object.create(Jt(t), n);
}, Vi = (t, n) => {
  const o = { [Fr]: n };
  let e = false;
  const r = (s, c) => {
    if (!e) {
      let u = o[Ie].get(t);
      if (u || (u = {}, o[Ie].set(t, u)), s === Be) u[Be] = true;
      else {
        let l = u[s];
        l || (l = /* @__PURE__ */ new Set(), u[s] = l), l.add(c);
      }
    }
  }, i = () => {
    e = true, o[Ie].delete(t);
  }, a = { get(s, c) {
    return c === Zt ? t : (r(tn, c), Yi(Reflect.get(s, c), o[Ie], o[Or], o[kr]));
  }, has(s, c) {
    return c === Hi ? (i(), true) : (r($t, c), Reflect.has(s, c));
  }, getOwnPropertyDescriptor(s, c) {
    return r(en, c), Reflect.getOwnPropertyDescriptor(s, c);
  }, ownKeys(s) {
    return r(Be), Reflect.ownKeys(s);
  } };
  return n && (a.set = a.deleteProperty = () => false), [a, o];
}, nn = (t) => t[Zt] || t, Yi = (t, n, o, e) => {
  if (!xr(t)) return t;
  let r = e && e.get(t);
  if (!r) {
    const c = nn(t);
    Ji(c) ? r = [c, zi(c)] : r = [c], e == null ? void 0 : e.set(t, r);
  }
  const [i, a] = r;
  let s = o && o.get(i);
  return (!s || s[1][Fr] !== !!a) && (s = Vi(i, !!a), s[1][Rn] = Ui(a || i, s[0]), o && o.set(i, s)), s[1][Ie] = n, s[1][Or] = o, s[1][kr] = e, s[1][Rn];
}, Ki = (t, n) => {
  const o = Reflect.ownKeys(t), e = Reflect.ownKeys(n);
  return o.length !== e.length || o.some((r, i) => r !== e[i]);
}, Xi = (t, n, o, e, r = Object.is) => {
  if (r(t, n)) return false;
  if (!et(t) || !et(n)) return true;
  const i = o.get(nn(t));
  if (!i) return true;
  if (e) {
    if (e.get(t) === n) return false;
    e.set(t, n);
  }
  let a = null;
  for (const s of i[$t] || []) if (a = Reflect.has(t, s) !== Reflect.has(n, s), a) return a;
  if (i[Be] === true) {
    if (a = Ki(t, n), a) return a;
  } else for (const s of i[en] || []) {
    const c = !!Reflect.getOwnPropertyDescriptor(t, s), u = !!Reflect.getOwnPropertyDescriptor(n, s);
    if (a = c !== u, a) return a;
  }
  for (const s of i[tn] || []) if (a = Xi(t[s], n[s], o, e, r), a) return a;
  if (a === null) throw new Error("invalid used");
  return a;
}, Uo = (t) => xr(t) && t[Zt] || null, Jo = (t, n = true) => {
  zt.set(t, n);
}, zo = (t, n, o) => {
  const e = [], r = /* @__PURE__ */ new WeakSet(), i = (a, s) => {
    var c, u, l;
    if (r.has(a)) return;
    et(a) && r.add(a);
    const f = et(a) && n.get(nn(a));
    if (f) {
      if ((c = f[$t]) === null || c === void 0 || c.forEach((d) => {
        const h = `:has(${String(d)})`;
        e.push(s ? [...s, h] : [h]);
      }), f[Be] === true) {
        const d = ":ownKeys";
        e.push(s ? [...s, d] : [d]);
      } else (u = f[en]) === null || u === void 0 || u.forEach((d) => {
        const h = `:hasOwn(${String(d)})`;
        e.push(s ? [...s, h] : [h]);
      });
      (l = f[tn]) === null || l === void 0 || l.forEach((d) => {
        "value" in (Object.getOwnPropertyDescriptor(a, d) || {}) && i(a[d], s ? [...s, d] : [d]);
      });
    } else s && e.push(s);
  };
  return i(t), e;
};
var ht = {}, _n;
function Dr() {
  return _n || (_n = 1, (function(t) {
    (function(n) {
      n(typeof DO_NOT_EXPORT_CRC > "u" ? t : {});
    })(function(n) {
      n.version = "0.3.0";
      function o() {
        for (var u = 0, l = new Array(256), f = 0; f != 256; ++f) u = f, u = u & 1 ? -306674912 ^ u >>> 1 : u >>> 1, u = u & 1 ? -306674912 ^ u >>> 1 : u >>> 1, u = u & 1 ? -306674912 ^ u >>> 1 : u >>> 1, u = u & 1 ? -306674912 ^ u >>> 1 : u >>> 1, u = u & 1 ? -306674912 ^ u >>> 1 : u >>> 1, u = u & 1 ? -306674912 ^ u >>> 1 : u >>> 1, u = u & 1 ? -306674912 ^ u >>> 1 : u >>> 1, u = u & 1 ? -306674912 ^ u >>> 1 : u >>> 1, l[f] = u;
        return typeof Int32Array < "u" ? new Int32Array(l) : l;
      }
      var e = o(), r = typeof Buffer < "u";
      function i(u) {
        if (u.length > 32768 && r) return s(new Buffer(u));
        for (var l = -1, f = u.length - 1, d = 0; d < f; ) l = e[(l ^ u.charCodeAt(d++)) & 255] ^ l >>> 8, l = e[(l ^ u.charCodeAt(d++)) & 255] ^ l >>> 8;
        return d === f && (l = l >>> 8 ^ e[(l ^ u.charCodeAt(d)) & 255]), l ^ -1;
      }
      function a(u) {
        if (u.length > 1e4) return s(u);
        for (var l = -1, f = 0, d = u.length - 3; f < d; ) l = l >>> 8 ^ e[(l ^ u[f++]) & 255], l = l >>> 8 ^ e[(l ^ u[f++]) & 255], l = l >>> 8 ^ e[(l ^ u[f++]) & 255], l = l >>> 8 ^ e[(l ^ u[f++]) & 255];
        for (; f < d + 3; ) l = l >>> 8 ^ e[(l ^ u[f++]) & 255];
        return l ^ -1;
      }
      function s(u) {
        for (var l = -1, f = 0, d = u.length - 7; f < d; ) l = l >>> 8 ^ e[(l ^ u[f++]) & 255], l = l >>> 8 ^ e[(l ^ u[f++]) & 255], l = l >>> 8 ^ e[(l ^ u[f++]) & 255], l = l >>> 8 ^ e[(l ^ u[f++]) & 255], l = l >>> 8 ^ e[(l ^ u[f++]) & 255], l = l >>> 8 ^ e[(l ^ u[f++]) & 255], l = l >>> 8 ^ e[(l ^ u[f++]) & 255], l = l >>> 8 ^ e[(l ^ u[f++]) & 255];
        for (; f < d + 7; ) l = l >>> 8 ^ e[(l ^ u[f++]) & 255];
        return l ^ -1;
      }
      function c(u) {
        for (var l = -1, f = 0, d = u.length, h, g; f < d; ) h = u.charCodeAt(f++), h < 128 ? l = l >>> 8 ^ e[(l ^ h) & 255] : h < 2048 ? (l = l >>> 8 ^ e[(l ^ (192 | h >> 6 & 31)) & 255], l = l >>> 8 ^ e[(l ^ (128 | h & 63)) & 255]) : h >= 55296 && h < 57344 ? (h = (h & 1023) + 64, g = u.charCodeAt(f++) & 1023, l = l >>> 8 ^ e[(l ^ (240 | h >> 8 & 7)) & 255], l = l >>> 8 ^ e[(l ^ (128 | h >> 2 & 63)) & 255], l = l >>> 8 ^ e[(l ^ (128 | g >> 6 & 15 | h & 3)) & 255], l = l >>> 8 ^ e[(l ^ (128 | g & 63)) & 255]) : (l = l >>> 8 ^ e[(l ^ (224 | h >> 12 & 15)) & 255], l = l >>> 8 ^ e[(l ^ (128 | h >> 6 & 63)) & 255], l = l >>> 8 ^ e[(l ^ (128 | h & 63)) & 255]);
        return l ^ -1;
      }
      n.table = e, n.bstr = i, n.buf = a, n.str = c;
    });
  })(ht)), ht;
}
var pt, Tn;
function Gi() {
  if (Tn) return pt;
  Tn = 1;
  var t = Dr();
  pt = r;
  var n = new Uint8Array(4), o = new Int32Array(n.buffer), e = new Uint32Array(n.buffer);
  function r(i) {
    if (i[0] !== 137) throw new Error("Invalid .png file header");
    if (i[1] !== 80) throw new Error("Invalid .png file header");
    if (i[2] !== 78) throw new Error("Invalid .png file header");
    if (i[3] !== 71) throw new Error("Invalid .png file header");
    if (i[4] !== 13) throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
    if (i[5] !== 10) throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
    if (i[6] !== 26) throw new Error("Invalid .png file header");
    if (i[7] !== 10) throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
    for (var a = false, s = [], c = 8; c < i.length; ) {
      n[3] = i[c++], n[2] = i[c++], n[1] = i[c++], n[0] = i[c++];
      var u = e[0] + 4, l = new Uint8Array(u);
      l[0] = i[c++], l[1] = i[c++], l[2] = i[c++], l[3] = i[c++];
      var f = String.fromCharCode(l[0]) + String.fromCharCode(l[1]) + String.fromCharCode(l[2]) + String.fromCharCode(l[3]);
      if (!s.length && f !== "IHDR") throw new Error("IHDR header missing");
      if (f === "IEND") {
        a = true, s.push({ name: f, data: new Uint8Array(0) });
        break;
      }
      for (var d = 4; d < u; d++) l[d] = i[c++];
      n[3] = i[c++], n[2] = i[c++], n[1] = i[c++], n[0] = i[c++];
      var h = o[0], g = t.buf(l);
      if (g !== h) throw new Error("CRC values for " + f + " header do not match, PNG file is likely corrupted");
      var v = new Uint8Array(l.buffer.slice(4));
      s.push({ name: f, data: v });
    }
    if (!a) throw new Error(".png file ended prematurely: no IEND header was found");
    return s;
  }
  return pt;
}
var Qi = Gi();
const Vo = qe(Qi);
var gt, Nn;
function Zi() {
  return Nn || (Nn = 1, gt = function(t, n, o) {
    var e = [], r = t.length;
    if (r === 0) return e;
    var i = n < 0 ? Math.max(0, n + r) : n || 0;
    for (o !== void 0 && (r = o < 0 ? o + r : o); r-- > i; ) e[r - i] = t[r];
    return e;
  }), gt;
}
var vt, Wn;
function $i() {
  if (Wn) return vt;
  Wn = 1;
  var t = Zi(), n = Dr();
  vt = i;
  var o = new Uint8Array(4), e = new Int32Array(o.buffer), r = new Uint32Array(o.buffer);
  function i(a) {
    var s = 8, c = s, u;
    for (u = 0; u < a.length; u++) s += a[u].data.length, s += 12;
    var l = new Uint8Array(s);
    for (l[0] = 137, l[1] = 80, l[2] = 78, l[3] = 71, l[4] = 13, l[5] = 10, l[6] = 26, l[7] = 10, u = 0; u < a.length; u++) {
      var f = a[u], d = f.name, h = f.data, g = h.length, v = [d.charCodeAt(0), d.charCodeAt(1), d.charCodeAt(2), d.charCodeAt(3)];
      r[0] = g, l[c++] = o[3], l[c++] = o[2], l[c++] = o[1], l[c++] = o[0], l[c++] = v[0], l[c++] = v[1], l[c++] = v[2], l[c++] = v[3];
      for (var p = 0; p < g; ) l[c++] = h[p++];
      var w = v.concat(t(h)), b = n.buf(w);
      e[0] = b, l[c++] = o[3], l[c++] = o[2], l[c++] = o[1], l[c++] = o[0];
    }
    return l;
  }
  return vt;
}
var eo = $i();
const Yo = qe(eo);
var Ke = {}, mt, In;
function to() {
  if (In) return mt;
  In = 1, mt = t;
  function t(n, o) {
    if (n = String(n), o = String(o), !/^[\x00-\xFF]+$/.test(n) || !/^[\x00-\xFF]+$/.test(o)) throw new Error("Only Latin-1 characters are permitted in PNG tEXt chunks. You might want to consider base64 encoding and/or zEXt compression");
    if (n.length >= 80) throw new Error('Keyword "' + n + '" is longer than the 79-character limit imposed by the PNG specification');
    for (var e = n.length + o.length + 1, r = new Uint8Array(e), i = 0, a, s = 0; s < n.length; s++) {
      if (!(a = n.charCodeAt(s))) throw new Error("0x00 character is not permitted in tEXt keywords");
      r[i++] = a;
    }
    r[i++] = 0;
    for (var c = 0; c < o.length; c++) {
      if (!(a = o.charCodeAt(c))) throw new Error("0x00 character is not permitted in tEXt content");
      r[i++] = a;
    }
    return { name: "tEXt", data: r };
  }
  return mt;
}
var wt, Bn;
function no() {
  if (Bn) return wt;
  Bn = 1, wt = t;
  function t(n) {
    n.data && n.name && (n = n.data);
    for (var o = true, e = "", r = "", i = 0; i < n.length; i++) {
      var a = n[i];
      if (o) a ? r += String.fromCharCode(a) : o = false;
      else if (a) e += String.fromCharCode(a);
      else throw new Error("Invalid NULL character found. 0x00 character is not permitted in tEXt content");
    }
    return { keyword: r, text: e };
  }
  return wt;
}
var Ln;
function ro() {
  return Ln || (Ln = 1, Ke.encode = to(), Ke.decode = no()), Ke;
}
var io = ro();
const Ko = qe(io);
var Ge = { exports: {} }, oo = Ge.exports, qn;
function so() {
  return qn || (qn = 1, (function(t) {
    (function() {
      var n, o, e, r, i, a, s, c, u, l, f, d, h, g, v;
      e = Math.floor, l = Math.min, o = function(p, w) {
        return p < w ? -1 : p > w ? 1 : 0;
      }, u = function(p, w, b, y, F) {
        var P;
        if (b == null && (b = 0), F == null && (F = o), b < 0) throw new Error("lo must be non-negative");
        for (y == null && (y = p.length); b < y; ) P = e((b + y) / 2), F(w, p[P]) < 0 ? y = P : b = P + 1;
        return [].splice.apply(p, [b, b - b].concat(w)), w;
      }, a = function(p, w, b) {
        return b == null && (b = o), p.push(w), g(p, 0, p.length - 1, b);
      }, i = function(p, w) {
        var b, y;
        return w == null && (w = o), b = p.pop(), p.length ? (y = p[0], p[0] = b, v(p, 0, w)) : y = b, y;
      }, c = function(p, w, b) {
        var y;
        return b == null && (b = o), y = p[0], p[0] = w, v(p, 0, b), y;
      }, s = function(p, w, b) {
        var y;
        return b == null && (b = o), p.length && b(p[0], w) < 0 && (y = [p[0], w], w = y[0], p[0] = y[1], v(p, 0, b)), w;
      }, r = function(p, w) {
        var b, y, F, P, S, T;
        for (w == null && (w = o), P = (function() {
          T = [];
          for (var W = 0, j = e(p.length / 2); 0 <= j ? W < j : W > j; 0 <= j ? W++ : W--) T.push(W);
          return T;
        }).apply(this).reverse(), S = [], y = 0, F = P.length; y < F; y++) b = P[y], S.push(v(p, b, w));
        return S;
      }, h = function(p, w, b) {
        var y;
        if (b == null && (b = o), y = p.indexOf(w), y !== -1) return g(p, 0, y, b), v(p, y, b);
      }, f = function(p, w, b) {
        var y, F, P, S, T;
        if (b == null && (b = o), F = p.slice(0, w), !F.length) return F;
        for (r(F, b), T = p.slice(w), P = 0, S = T.length; P < S; P++) y = T[P], s(F, y, b);
        return F.sort(b).reverse();
      }, d = function(p, w, b) {
        var y, F, P, S, T, W, j, H, U;
        if (b == null && (b = o), w * 10 <= p.length) {
          if (P = p.slice(0, w).sort(b), !P.length) return P;
          for (F = P[P.length - 1], j = p.slice(w), S = 0, W = j.length; S < W; S++) y = j[S], b(y, F) < 0 && (u(P, y, 0, null, b), P.pop(), F = P[P.length - 1]);
          return P;
        }
        for (r(p, b), U = [], T = 0, H = l(w, p.length); 0 <= H ? T < H : T > H; 0 <= H ? ++T : --T) U.push(i(p, b));
        return U;
      }, g = function(p, w, b, y) {
        var F, P, S;
        for (y == null && (y = o), F = p[b]; b > w; ) {
          if (S = b - 1 >> 1, P = p[S], y(F, P) < 0) {
            p[b] = P, b = S;
            continue;
          }
          break;
        }
        return p[b] = F;
      }, v = function(p, w, b) {
        var y, F, P, S, T;
        for (b == null && (b = o), F = p.length, T = w, P = p[w], y = 2 * w + 1; y < F; ) S = y + 1, S < F && !(b(p[y], p[S]) < 0) && (y = S), p[w] = p[y], w = y, y = 2 * w + 1;
        return p[w] = P, g(p, T, w, b);
      }, n = (function() {
        p.push = a, p.pop = i, p.replace = c, p.pushpop = s, p.heapify = r, p.updateItem = h, p.nlargest = f, p.nsmallest = d;
        function p(w) {
          this.cmp = w ?? o, this.nodes = [];
        }
        return p.prototype.push = function(w) {
          return a(this.nodes, w, this.cmp);
        }, p.prototype.pop = function() {
          return i(this.nodes, this.cmp);
        }, p.prototype.peek = function() {
          return this.nodes[0];
        }, p.prototype.contains = function(w) {
          return this.nodes.indexOf(w) !== -1;
        }, p.prototype.replace = function(w) {
          return c(this.nodes, w, this.cmp);
        }, p.prototype.pushpop = function(w) {
          return s(this.nodes, w, this.cmp);
        }, p.prototype.heapify = function() {
          return r(this.nodes, this.cmp);
        }, p.prototype.updateItem = function(w) {
          return h(this.nodes, w, this.cmp);
        }, p.prototype.clear = function() {
          return this.nodes = [];
        }, p.prototype.empty = function() {
          return this.nodes.length === 0;
        }, p.prototype.size = function() {
          return this.nodes.length;
        }, p.prototype.clone = function() {
          var w;
          return w = new p(), w.nodes = this.nodes.slice(0), w;
        }, p.prototype.toArray = function() {
          return this.nodes.slice(0);
        }, p.prototype.insert = p.prototype.push, p.prototype.top = p.prototype.peek, p.prototype.front = p.prototype.peek, p.prototype.has = p.prototype.contains, p.prototype.copy = p.prototype.clone, p;
      })(), t !== null && t.exports ? t.exports = n : window.Heap = n;
    }).call(oo);
  })(Ge)), Ge.exports;
}
var bt, jn;
function ot() {
  return jn || (jn = 1, bt = so()), bt;
}
var yt, Hn;
function rn() {
  if (Hn) return yt;
  Hn = 1;
  function t(n, o, e) {
    this.x = n, this.y = o, this.walkable = e === void 0 ? true : e;
  }
  return yt = t, yt;
}
var At, Un;
function re() {
  if (Un) return At;
  Un = 1;
  var t = { Always: 1, Never: 2, IfAtMostOneObstacle: 3, OnlyWhenNoObstacles: 4 };
  return At = t, At;
}
var Ct, Jn;
function ao() {
  if (Jn) return Ct;
  Jn = 1;
  var t = rn(), n = re();
  function o(e, r, i) {
    var a;
    typeof e != "object" ? a = e : (r = e.length, a = e[0].length, i = e), this.width = a, this.height = r, this.nodes = this._buildNodes(a, r, i);
  }
  return o.prototype._buildNodes = function(e, r, i) {
    var a, s, c = new Array(r);
    for (a = 0; a < r; ++a) for (c[a] = new Array(e), s = 0; s < e; ++s) c[a][s] = new t(s, a);
    if (i === void 0) return c;
    if (i.length !== r || i[0].length !== e) throw new Error("Matrix size does not fit");
    for (a = 0; a < r; ++a) for (s = 0; s < e; ++s) i[a][s] && (c[a][s].walkable = false);
    return c;
  }, o.prototype.getNodeAt = function(e, r) {
    return this.nodes[r][e];
  }, o.prototype.isWalkableAt = function(e, r) {
    return this.isInside(e, r) && this.nodes[r][e].walkable;
  }, o.prototype.isInside = function(e, r) {
    return e >= 0 && e < this.width && r >= 0 && r < this.height;
  }, o.prototype.setWalkableAt = function(e, r, i) {
    this.nodes[r][e].walkable = i;
  }, o.prototype.getNeighbors = function(e, r) {
    var i = e.x, a = e.y, s = [], c = false, u = false, l = false, f = false, d = false, h = false, g = false, v = false, p = this.nodes;
    if (this.isWalkableAt(i, a - 1) && (s.push(p[a - 1][i]), c = true), this.isWalkableAt(i + 1, a) && (s.push(p[a][i + 1]), l = true), this.isWalkableAt(i, a + 1) && (s.push(p[a + 1][i]), d = true), this.isWalkableAt(i - 1, a) && (s.push(p[a][i - 1]), g = true), r === n.Never) return s;
    if (r === n.OnlyWhenNoObstacles) u = g && c, f = c && l, h = l && d, v = d && g;
    else if (r === n.IfAtMostOneObstacle) u = g || c, f = c || l, h = l || d, v = d || g;
    else if (r === n.Always) u = true, f = true, h = true, v = true;
    else throw new Error("Incorrect value of diagonalMovement");
    return u && this.isWalkableAt(i - 1, a - 1) && s.push(p[a - 1][i - 1]), f && this.isWalkableAt(i + 1, a - 1) && s.push(p[a - 1][i + 1]), h && this.isWalkableAt(i + 1, a + 1) && s.push(p[a + 1][i + 1]), v && this.isWalkableAt(i - 1, a + 1) && s.push(p[a + 1][i - 1]), s;
  }, o.prototype.clone = function() {
    var e, r, i = this.width, a = this.height, s = this.nodes, c = new o(i, a), u = new Array(a);
    for (e = 0; e < a; ++e) for (u[e] = new Array(i), r = 0; r < i; ++r) u[e][r] = new t(r, e, s[e][r].walkable);
    return c.nodes = u, c;
  }, Ct = o, Ct;
}
var de = {}, zn;
function Oe() {
  if (zn) return de;
  zn = 1;
  function t(s) {
    for (var c = [[s.x, s.y]]; s.parent; ) s = s.parent, c.push([s.x, s.y]);
    return c.reverse();
  }
  de.backtrace = t;
  function n(s, c) {
    var u = t(s), l = t(c);
    return u.concat(l.reverse());
  }
  de.biBacktrace = n;
  function o(s) {
    var c, u = 0, l, f, d, h;
    for (c = 1; c < s.length; ++c) l = s[c - 1], f = s[c], d = l[0] - f[0], h = l[1] - f[1], u += Math.sqrt(d * d + h * h);
    return u;
  }
  de.pathLength = o;
  function e(s, c, u, l) {
    var f = Math.abs, d = [], h, g, v, p, w, b;
    for (v = f(u - s), p = f(l - c), h = s < u ? 1 : -1, g = c < l ? 1 : -1, w = v - p; d.push([s, c]), !(s === u && c === l); ) b = 2 * w, b > -p && (w = w - p, s = s + h), b < v && (w = w + v, c = c + g);
    return d;
  }
  de.interpolate = e;
  function r(s) {
    var c = [], u = s.length, l, f, d, h, g, v;
    if (u < 2) return c;
    for (g = 0; g < u - 1; ++g) for (l = s[g], f = s[g + 1], d = e(l[0], l[1], f[0], f[1]), h = d.length, v = 0; v < h - 1; ++v) c.push(d[v]);
    return c.push(s[u - 1]), c;
  }
  de.expandPath = r;
  function i(s, c) {
    var u = c.length, l = c[0][0], f = c[0][1], d = c[u - 1][0], h = c[u - 1][1], g, v, p, w, b, y, F, P, S, T, W;
    for (g = l, v = f, b = [[g, v]], y = 2; y < u; ++y) {
      for (P = c[y], p = P[0], w = P[1], S = e(g, v, p, w), W = false, F = 1; F < S.length; ++F) if (T = S[F], !s.isWalkableAt(T[0], T[1])) {
        W = true;
        break;
      }
      W && (lastValidCoord = c[y - 1], b.push(lastValidCoord), g = lastValidCoord[0], v = lastValidCoord[1]);
    }
    return b.push([d, h]), b;
  }
  de.smoothenPath = i;
  function a(s) {
    if (s.length < 3) return s;
    var c = [], u = s[0][0], l = s[0][1], f = s[1][0], d = s[1][1], h = f - u, g = d - l, v, p, w, b, y, F;
    for (y = Math.sqrt(h * h + g * g), h /= y, g /= y, c.push([u, l]), F = 2; F < s.length; F++) v = f, p = d, w = h, b = g, f = s[F][0], d = s[F][1], h = f - v, g = d - p, y = Math.sqrt(h * h + g * g), h /= y, g /= y, (h !== w || g !== b) && c.push([v, p]);
    return c.push([f, d]), c;
  }
  return de.compressPath = a, de;
}
var Ft, Vn;
function He() {
  return Vn || (Vn = 1, Ft = { manhattan: function(t, n) {
    return t + n;
  }, euclidean: function(t, n) {
    return Math.sqrt(t * t + n * n);
  }, octile: function(t, n) {
    var o = Math.SQRT2 - 1;
    return t < n ? o * t + n : o * n + t;
  }, chebyshev: function(t, n) {
    return Math.max(t, n);
  } }), Ft;
}
var Ot, Yn;
function on() {
  if (Yn) return Ot;
  Yn = 1;
  var t = ot(), n = Oe(), o = He(), e = re();
  function r(i) {
    i = i || {}, this.allowDiagonal = i.allowDiagonal, this.dontCrossCorners = i.dontCrossCorners, this.heuristic = i.heuristic || o.manhattan, this.weight = i.weight || 1, this.diagonalMovement = i.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = e.OnlyWhenNoObstacles : this.diagonalMovement = e.IfAtMostOneObstacle : this.diagonalMovement = e.Never), this.diagonalMovement === e.Never ? this.heuristic = i.heuristic || o.manhattan : this.heuristic = i.heuristic || o.octile;
  }
  return r.prototype.findPath = function(i, a, s, c, u) {
    var l = new t(function(H, U) {
      return H.f - U.f;
    }), f = u.getNodeAt(i, a), d = u.getNodeAt(s, c), h = this.heuristic, g = this.diagonalMovement, v = this.weight, p = Math.abs, w = Math.SQRT2, b, y, F, P, S, T, W, j;
    for (f.g = 0, f.f = 0, l.push(f), f.opened = true; !l.empty(); ) {
      if (b = l.pop(), b.closed = true, b === d) return n.backtrace(d);
      for (y = u.getNeighbors(b, g), P = 0, S = y.length; P < S; ++P) F = y[P], !F.closed && (T = F.x, W = F.y, j = b.g + (T - b.x === 0 || W - b.y === 0 ? 1 : w), (!F.opened || j < F.g) && (F.g = j, F.h = F.h || v * h(p(T - s), p(W - c)), F.f = F.g + F.h, F.parent = b, F.opened ? l.updateItem(F) : (l.push(F), F.opened = true)));
    }
    return [];
  }, Ot = r, Ot;
}
var kt, Kn;
function lo() {
  if (Kn) return kt;
  Kn = 1;
  var t = on();
  function n(o) {
    t.call(this, o);
    var e = this.heuristic;
    this.heuristic = function(r, i) {
      return e(r, i) * 1e6;
    };
  }
  return n.prototype = new t(), n.prototype.constructor = n, kt = n, kt;
}
var xt, Xn;
function uo() {
  if (Xn) return xt;
  Xn = 1;
  var t = Oe(), n = re();
  function o(e) {
    e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = n.OnlyWhenNoObstacles : this.diagonalMovement = n.IfAtMostOneObstacle : this.diagonalMovement = n.Never);
  }
  return o.prototype.findPath = function(e, r, i, a, s) {
    var c = [], u = this.diagonalMovement, l = s.getNodeAt(e, r), f = s.getNodeAt(i, a), d, h, g, v, p;
    for (c.push(l), l.opened = true; c.length; ) {
      if (g = c.shift(), g.closed = true, g === f) return t.backtrace(f);
      for (d = s.getNeighbors(g, u), v = 0, p = d.length; v < p; ++v) h = d[v], !(h.closed || h.opened) && (c.push(h), h.opened = true, h.parent = g);
    }
    return [];
  }, xt = o, xt;
}
var Dt, Gn;
function fo() {
  if (Gn) return Dt;
  Gn = 1;
  var t = on();
  function n(o) {
    t.call(this, o), this.heuristic = function(e, r) {
      return 0;
    };
  }
  return n.prototype = new t(), n.prototype.constructor = n, Dt = n, Dt;
}
var Pt, Qn;
function sn() {
  if (Qn) return Pt;
  Qn = 1;
  var t = ot(), n = Oe(), o = He(), e = re();
  function r(i) {
    i = i || {}, this.allowDiagonal = i.allowDiagonal, this.dontCrossCorners = i.dontCrossCorners, this.diagonalMovement = i.diagonalMovement, this.heuristic = i.heuristic || o.manhattan, this.weight = i.weight || 1, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = e.OnlyWhenNoObstacles : this.diagonalMovement = e.IfAtMostOneObstacle : this.diagonalMovement = e.Never), this.diagonalMovement === e.Never ? this.heuristic = i.heuristic || o.manhattan : this.heuristic = i.heuristic || o.octile;
  }
  return r.prototype.findPath = function(i, a, s, c, u) {
    var l = function(V, X) {
      return V.f - X.f;
    }, f = new t(l), d = new t(l), h = u.getNodeAt(i, a), g = u.getNodeAt(s, c), v = this.heuristic, p = this.diagonalMovement, w = this.weight, b = Math.abs, y = Math.SQRT2, F, P, S, T, W, j, H, U, J = 1, K = 2;
    for (h.g = 0, h.f = 0, f.push(h), h.opened = J, g.g = 0, g.f = 0, d.push(g), g.opened = K; !f.empty() && !d.empty(); ) {
      for (F = f.pop(), F.closed = true, P = u.getNeighbors(F, p), T = 0, W = P.length; T < W; ++T) if (S = P[T], !S.closed) {
        if (S.opened === K) return n.biBacktrace(F, S);
        j = S.x, H = S.y, U = F.g + (j - F.x === 0 || H - F.y === 0 ? 1 : y), (!S.opened || U < S.g) && (S.g = U, S.h = S.h || w * v(b(j - s), b(H - c)), S.f = S.g + S.h, S.parent = F, S.opened ? f.updateItem(S) : (f.push(S), S.opened = J));
      }
      for (F = d.pop(), F.closed = true, P = u.getNeighbors(F, p), T = 0, W = P.length; T < W; ++T) if (S = P[T], !S.closed) {
        if (S.opened === J) return n.biBacktrace(S, F);
        j = S.x, H = S.y, U = F.g + (j - F.x === 0 || H - F.y === 0 ? 1 : y), (!S.opened || U < S.g) && (S.g = U, S.h = S.h || w * v(b(j - i), b(H - a)), S.f = S.g + S.h, S.parent = F, S.opened ? d.updateItem(S) : (d.push(S), S.opened = K));
      }
    }
    return [];
  }, Pt = r, Pt;
}
var St, Zn;
function co() {
  if (Zn) return St;
  Zn = 1;
  var t = sn();
  function n(o) {
    t.call(this, o);
    var e = this.heuristic;
    this.heuristic = function(r, i) {
      return e(r, i) * 1e6;
    };
  }
  return n.prototype = new t(), n.prototype.constructor = n, St = n, St;
}
var Mt, $n;
function ho() {
  if ($n) return Mt;
  $n = 1;
  var t = Oe(), n = re();
  function o(e) {
    e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = n.OnlyWhenNoObstacles : this.diagonalMovement = n.IfAtMostOneObstacle : this.diagonalMovement = n.Never);
  }
  return o.prototype.findPath = function(e, r, i, a, s) {
    var c = s.getNodeAt(e, r), u = s.getNodeAt(i, a), l = [], f = [], d, h, g, v = this.diagonalMovement, p = 0, w = 1, b, y;
    for (l.push(c), c.opened = true, c.by = p, f.push(u), u.opened = true, u.by = w; l.length && f.length; ) {
      for (g = l.shift(), g.closed = true, d = s.getNeighbors(g, v), b = 0, y = d.length; b < y; ++b) if (h = d[b], !h.closed) {
        if (h.opened) {
          if (h.by === w) return t.biBacktrace(g, h);
          continue;
        }
        l.push(h), h.parent = g, h.opened = true, h.by = p;
      }
      for (g = f.shift(), g.closed = true, d = s.getNeighbors(g, v), b = 0, y = d.length; b < y; ++b) if (h = d[b], !h.closed) {
        if (h.opened) {
          if (h.by === p) return t.biBacktrace(h, g);
          continue;
        }
        f.push(h), h.parent = g, h.opened = true, h.by = w;
      }
    }
    return [];
  }, Mt = o, Mt;
}
var Et, er;
function po() {
  if (er) return Et;
  er = 1;
  var t = sn();
  function n(o) {
    t.call(this, o), this.heuristic = function(e, r) {
      return 0;
    };
  }
  return n.prototype = new t(), n.prototype.constructor = n, Et = n, Et;
}
var Rt, tr;
function go() {
  if (tr) return Rt;
  tr = 1, Oe();
  var t = He(), n = rn(), o = re();
  function e(r) {
    r = r || {}, this.allowDiagonal = r.allowDiagonal, this.dontCrossCorners = r.dontCrossCorners, this.diagonalMovement = r.diagonalMovement, this.heuristic = r.heuristic || t.manhattan, this.weight = r.weight || 1, this.trackRecursion = r.trackRecursion || false, this.timeLimit = r.timeLimit || 1 / 0, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = o.OnlyWhenNoObstacles : this.diagonalMovement = o.IfAtMostOneObstacle : this.diagonalMovement = o.Never), this.diagonalMovement === o.Never ? this.heuristic = r.heuristic || t.manhattan : this.heuristic = r.heuristic || t.octile;
  }
  return e.prototype.findPath = function(r, i, a, s, c) {
    var u = (/* @__PURE__ */ new Date()).getTime(), l = (function(y, F) {
      return this.heuristic(Math.abs(F.x - y.x), Math.abs(F.y - y.y));
    }).bind(this), f = function(y, F) {
      return y.x === F.x || y.y === F.y ? 1 : Math.SQRT2;
    }, d = (function(y, F, P, S, T) {
      if (this.timeLimit > 0 && (/* @__PURE__ */ new Date()).getTime() - u > this.timeLimit * 1e3) return 1 / 0;
      var W = F + l(y, g) * this.weight;
      if (W > P) return W;
      if (y == g) return S[T] = [y.x, y.y], y;
      var j, H, U, J, K = c.getNeighbors(y, this.diagonalMovement);
      for (U = 0, j = 1 / 0; J = K[U]; ++U) {
        if (this.trackRecursion && (J.retainCount = J.retainCount + 1 || 1, J.tested !== true && (J.tested = true)), H = d(J, F + f(y, J), P, S, T + 1), H instanceof n) return S[T] = [y.x, y.y], H;
        this.trackRecursion && --J.retainCount === 0 && (J.tested = false), H < j && (j = H);
      }
      return j;
    }).bind(this), h = c.getNodeAt(r, i), g = c.getNodeAt(a, s), v = l(h, g), p, w, b;
    for (p = 0; ; ++p) {
      if (w = [], b = d(h, 0, v, w, 0), b === 1 / 0) return [];
      if (b instanceof n) return w;
      v = b;
    }
    return [];
  }, Rt = e, Rt;
}
var _t, nr;
function st() {
  if (nr) return _t;
  nr = 1;
  var t = ot(), n = Oe(), o = He();
  re();
  function e(r) {
    r = r || {}, this.heuristic = r.heuristic || o.manhattan, this.trackJumpRecursion = r.trackJumpRecursion || false;
  }
  return e.prototype.findPath = function(r, i, a, s, c) {
    var u = this.openList = new t(function(h, g) {
      return h.f - g.f;
    }), l = this.startNode = c.getNodeAt(r, i), f = this.endNode = c.getNodeAt(a, s), d;
    for (this.grid = c, l.g = 0, l.f = 0, u.push(l), l.opened = true; !u.empty(); ) {
      if (d = u.pop(), d.closed = true, d === f) return n.expandPath(n.backtrace(f));
      this._identifySuccessors(d);
    }
    return [];
  }, e.prototype._identifySuccessors = function(r) {
    var i = this.grid, a = this.heuristic, s = this.openList, c = this.endNode.x, u = this.endNode.y, l, f, d, h, g, v = r.x, p = r.y, w, b, y, F, P, S = Math.abs;
    for (l = this._findNeighbors(r), h = 0, g = l.length; h < g; ++h) if (f = l[h], d = this._jump(f[0], f[1], v, p), d) {
      if (w = d[0], b = d[1], P = i.getNodeAt(w, b), P.closed) continue;
      y = o.octile(S(w - v), S(b - p)), F = r.g + y, (!P.opened || F < P.g) && (P.g = F, P.h = P.h || a(S(w - c), S(b - u)), P.f = P.g + P.h, P.parent = r, P.opened ? s.updateItem(P) : (s.push(P), P.opened = true));
    }
  }, _t = e, _t;
}
var Tt, rr;
function vo() {
  if (rr) return Tt;
  rr = 1;
  var t = st(), n = re();
  function o(e) {
    t.call(this, e);
  }
  return o.prototype = new t(), o.prototype.constructor = o, o.prototype._jump = function(e, r, i, a) {
    var s = this.grid, c = e - i, u = r - a;
    if (!s.isWalkableAt(e, r)) return null;
    if (this.trackJumpRecursion === true && (s.getNodeAt(e, r).tested = true), s.getNodeAt(e, r) === this.endNode) return [e, r];
    if (c !== 0) {
      if (s.isWalkableAt(e, r - 1) && !s.isWalkableAt(e - c, r - 1) || s.isWalkableAt(e, r + 1) && !s.isWalkableAt(e - c, r + 1)) return [e, r];
    } else if (u !== 0) {
      if (s.isWalkableAt(e - 1, r) && !s.isWalkableAt(e - 1, r - u) || s.isWalkableAt(e + 1, r) && !s.isWalkableAt(e + 1, r - u)) return [e, r];
      if (this._jump(e + 1, r, e, r) || this._jump(e - 1, r, e, r)) return [e, r];
    } else throw new Error("Only horizontal and vertical movements are allowed");
    return this._jump(e + c, r + u, e, r);
  }, o.prototype._findNeighbors = function(e) {
    var r = e.parent, i = e.x, a = e.y, s = this.grid, c, u, l, f, d = [], h, g, v, p;
    if (r) c = r.x, u = r.y, l = (i - c) / Math.max(Math.abs(i - c), 1), f = (a - u) / Math.max(Math.abs(a - u), 1), l !== 0 ? (s.isWalkableAt(i, a - 1) && d.push([i, a - 1]), s.isWalkableAt(i, a + 1) && d.push([i, a + 1]), s.isWalkableAt(i + l, a) && d.push([i + l, a])) : f !== 0 && (s.isWalkableAt(i - 1, a) && d.push([i - 1, a]), s.isWalkableAt(i + 1, a) && d.push([i + 1, a]), s.isWalkableAt(i, a + f) && d.push([i, a + f]));
    else for (h = s.getNeighbors(e, n.Never), v = 0, p = h.length; v < p; ++v) g = h[v], d.push([g.x, g.y]);
    return d;
  }, Tt = o, Tt;
}
var Nt, ir;
function mo() {
  if (ir) return Nt;
  ir = 1;
  var t = st(), n = re();
  function o(e) {
    t.call(this, e);
  }
  return o.prototype = new t(), o.prototype.constructor = o, o.prototype._jump = function(e, r, i, a) {
    var s = this.grid, c = e - i, u = r - a;
    if (!s.isWalkableAt(e, r)) return null;
    if (this.trackJumpRecursion === true && (s.getNodeAt(e, r).tested = true), s.getNodeAt(e, r) === this.endNode) return [e, r];
    if (c !== 0 && u !== 0) {
      if (s.isWalkableAt(e - c, r + u) && !s.isWalkableAt(e - c, r) || s.isWalkableAt(e + c, r - u) && !s.isWalkableAt(e, r - u)) return [e, r];
      if (this._jump(e + c, r, e, r) || this._jump(e, r + u, e, r)) return [e, r];
    } else if (c !== 0) {
      if (s.isWalkableAt(e + c, r + 1) && !s.isWalkableAt(e, r + 1) || s.isWalkableAt(e + c, r - 1) && !s.isWalkableAt(e, r - 1)) return [e, r];
    } else if (s.isWalkableAt(e + 1, r + u) && !s.isWalkableAt(e + 1, r) || s.isWalkableAt(e - 1, r + u) && !s.isWalkableAt(e - 1, r)) return [e, r];
    return this._jump(e + c, r + u, e, r);
  }, o.prototype._findNeighbors = function(e) {
    var r = e.parent, i = e.x, a = e.y, s = this.grid, c, u, l, f, d = [], h, g, v, p;
    if (r) c = r.x, u = r.y, l = (i - c) / Math.max(Math.abs(i - c), 1), f = (a - u) / Math.max(Math.abs(a - u), 1), l !== 0 && f !== 0 ? (s.isWalkableAt(i, a + f) && d.push([i, a + f]), s.isWalkableAt(i + l, a) && d.push([i + l, a]), s.isWalkableAt(i + l, a + f) && d.push([i + l, a + f]), s.isWalkableAt(i - l, a) || d.push([i - l, a + f]), s.isWalkableAt(i, a - f) || d.push([i + l, a - f])) : l === 0 ? (s.isWalkableAt(i, a + f) && d.push([i, a + f]), s.isWalkableAt(i + 1, a) || d.push([i + 1, a + f]), s.isWalkableAt(i - 1, a) || d.push([i - 1, a + f])) : (s.isWalkableAt(i + l, a) && d.push([i + l, a]), s.isWalkableAt(i, a + 1) || d.push([i + l, a + 1]), s.isWalkableAt(i, a - 1) || d.push([i + l, a - 1]));
    else for (h = s.getNeighbors(e, n.Always), v = 0, p = h.length; v < p; ++v) g = h[v], d.push([g.x, g.y]);
    return d;
  }, Nt = o, Nt;
}
var Wt, or;
function wo() {
  if (or) return Wt;
  or = 1;
  var t = st(), n = re();
  function o(e) {
    t.call(this, e);
  }
  return o.prototype = new t(), o.prototype.constructor = o, o.prototype._jump = function(e, r, i, a) {
    var s = this.grid, c = e - i, u = r - a;
    if (!s.isWalkableAt(e, r)) return null;
    if (this.trackJumpRecursion === true && (s.getNodeAt(e, r).tested = true), s.getNodeAt(e, r) === this.endNode) return [e, r];
    if (c !== 0 && u !== 0) {
      if (this._jump(e + c, r, e, r) || this._jump(e, r + u, e, r)) return [e, r];
    } else if (c !== 0) {
      if (s.isWalkableAt(e, r - 1) && !s.isWalkableAt(e - c, r - 1) || s.isWalkableAt(e, r + 1) && !s.isWalkableAt(e - c, r + 1)) return [e, r];
    } else if (u !== 0 && (s.isWalkableAt(e - 1, r) && !s.isWalkableAt(e - 1, r - u) || s.isWalkableAt(e + 1, r) && !s.isWalkableAt(e + 1, r - u))) return [e, r];
    return s.isWalkableAt(e + c, r) && s.isWalkableAt(e, r + u) ? this._jump(e + c, r + u, e, r) : null;
  }, o.prototype._findNeighbors = function(e) {
    var r = e.parent, i = e.x, a = e.y, s = this.grid, c, u, l, f, d = [], h, g, v, p;
    if (r) if (c = r.x, u = r.y, l = (i - c) / Math.max(Math.abs(i - c), 1), f = (a - u) / Math.max(Math.abs(a - u), 1), l !== 0 && f !== 0) s.isWalkableAt(i, a + f) && d.push([i, a + f]), s.isWalkableAt(i + l, a) && d.push([i + l, a]), s.isWalkableAt(i, a + f) && s.isWalkableAt(i + l, a) && d.push([i + l, a + f]);
    else {
      var w;
      if (l !== 0) {
        w = s.isWalkableAt(i + l, a);
        var b = s.isWalkableAt(i, a + 1), y = s.isWalkableAt(i, a - 1);
        w && (d.push([i + l, a]), b && d.push([i + l, a + 1]), y && d.push([i + l, a - 1])), b && d.push([i, a + 1]), y && d.push([i, a - 1]);
      } else if (f !== 0) {
        w = s.isWalkableAt(i, a + f);
        var F = s.isWalkableAt(i + 1, a), P = s.isWalkableAt(i - 1, a);
        w && (d.push([i, a + f]), F && d.push([i + 1, a + f]), P && d.push([i - 1, a + f])), F && d.push([i + 1, a]), P && d.push([i - 1, a]);
      }
    }
    else for (h = s.getNeighbors(e, n.OnlyWhenNoObstacles), v = 0, p = h.length; v < p; ++v) g = h[v], d.push([g.x, g.y]);
    return d;
  }, Wt = o, Wt;
}
var It, sr;
function bo() {
  if (sr) return It;
  sr = 1;
  var t = st(), n = re();
  function o(e) {
    t.call(this, e);
  }
  return o.prototype = new t(), o.prototype.constructor = o, o.prototype._jump = function(e, r, i, a) {
    var s = this.grid, c = e - i, u = r - a;
    if (!s.isWalkableAt(e, r)) return null;
    if (this.trackJumpRecursion === true && (s.getNodeAt(e, r).tested = true), s.getNodeAt(e, r) === this.endNode) return [e, r];
    if (c !== 0 && u !== 0) {
      if (s.isWalkableAt(e - c, r + u) && !s.isWalkableAt(e - c, r) || s.isWalkableAt(e + c, r - u) && !s.isWalkableAt(e, r - u)) return [e, r];
      if (this._jump(e + c, r, e, r) || this._jump(e, r + u, e, r)) return [e, r];
    } else if (c !== 0) {
      if (s.isWalkableAt(e + c, r + 1) && !s.isWalkableAt(e, r + 1) || s.isWalkableAt(e + c, r - 1) && !s.isWalkableAt(e, r - 1)) return [e, r];
    } else if (s.isWalkableAt(e + 1, r + u) && !s.isWalkableAt(e + 1, r) || s.isWalkableAt(e - 1, r + u) && !s.isWalkableAt(e - 1, r)) return [e, r];
    return s.isWalkableAt(e + c, r) || s.isWalkableAt(e, r + u) ? this._jump(e + c, r + u, e, r) : null;
  }, o.prototype._findNeighbors = function(e) {
    var r = e.parent, i = e.x, a = e.y, s = this.grid, c, u, l, f, d = [], h, g, v, p;
    if (r) c = r.x, u = r.y, l = (i - c) / Math.max(Math.abs(i - c), 1), f = (a - u) / Math.max(Math.abs(a - u), 1), l !== 0 && f !== 0 ? (s.isWalkableAt(i, a + f) && d.push([i, a + f]), s.isWalkableAt(i + l, a) && d.push([i + l, a]), (s.isWalkableAt(i, a + f) || s.isWalkableAt(i + l, a)) && d.push([i + l, a + f]), !s.isWalkableAt(i - l, a) && s.isWalkableAt(i, a + f) && d.push([i - l, a + f]), !s.isWalkableAt(i, a - f) && s.isWalkableAt(i + l, a) && d.push([i + l, a - f])) : l === 0 ? s.isWalkableAt(i, a + f) && (d.push([i, a + f]), s.isWalkableAt(i + 1, a) || d.push([i + 1, a + f]), s.isWalkableAt(i - 1, a) || d.push([i - 1, a + f])) : s.isWalkableAt(i + l, a) && (d.push([i + l, a]), s.isWalkableAt(i, a + 1) || d.push([i + l, a + 1]), s.isWalkableAt(i, a - 1) || d.push([i + l, a - 1]));
    else for (h = s.getNeighbors(e, n.IfAtMostOneObstacle), v = 0, p = h.length; v < p; ++v) g = h[v], d.push([g.x, g.y]);
    return d;
  }, It = o, It;
}
var Bt, ar;
function yo() {
  if (ar) return Bt;
  ar = 1;
  var t = re(), n = vo(), o = mo(), e = wo(), r = bo();
  function i(a) {
    return a = a || {}, a.diagonalMovement === t.Never ? new n(a) : a.diagonalMovement === t.Always ? new o(a) : a.diagonalMovement === t.OnlyWhenNoObstacles ? new e(a) : new r(a);
  }
  return Bt = i, Bt;
}
var Lt, lr;
function Ao() {
  return lr || (lr = 1, Lt = { Heap: ot(), Node: rn(), Grid: ao(), Util: Oe(), DiagonalMovement: re(), Heuristic: He(), AStarFinder: on(), BestFirstFinder: lo(), BreadthFirstFinder: uo(), DijkstraFinder: fo(), BiAStarFinder: sn(), BiBestFirstFinder: co(), BiBreadthFirstFinder: ho(), BiDijkstraFinder: po(), IDAStarFinder: go(), JumpPointFinder: yo() }), Lt;
}
var qt, ur;
function Co() {
  return ur || (ur = 1, qt = Ao()), qt;
}
var Xo = Co();
export {
  Xo as A,
  Ho as D,
  mn as _,
  Po as a,
  So as b,
  qo as c,
  Wo as d,
  Io as e,
  No as f,
  Mo as g,
  Eo as h,
  Bo as i,
  Ro as j,
  Uo as k,
  Lo as l,
  Jo as m,
  Xi as n,
  _o as o,
  Yi as p,
  zo as q,
  Oo as r,
  To as s,
  ko as t,
  jo as u,
  Do as v,
  xo as w,
  Vo as x,
  Ko as y,
  Yo as z
};
