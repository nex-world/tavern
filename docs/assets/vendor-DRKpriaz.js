import { g as et, c as Ft } from "./react-gFHNOnf5.js";
var Gt = { exports: {} }, $t = {};
var tr;
function Yi() {
  return tr || (tr = 1, (function(t) {
    function n(Y, X) {
      var $ = Y.length;
      Y.push(X);
      e: for (; 0 < $; ) {
        var Z = $ - 1 >>> 1, ue = Y[Z];
        if (0 < i(ue, X)) Y[Z] = X, Y[$] = ue, $ = Z;
        else break e;
      }
    }
    function a(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function e(Y) {
      if (Y.length === 0) return null;
      var X = Y[0], $ = Y.pop();
      if ($ !== X) {
        Y[0] = $;
        e: for (var Z = 0, ue = Y.length, pe = ue >>> 1; Z < pe; ) {
          var Ee = 2 * (Z + 1) - 1, Ue = Y[Ee], me = Ee + 1, Ne = Y[me];
          if (0 > i(Ue, $)) me < ue && 0 > i(Ne, Ue) ? (Y[Z] = Ne, Y[me] = $, Z = me) : (Y[Z] = Ue, Y[Ee] = $, Z = Ee);
          else if (me < ue && 0 > i(Ne, $)) Y[Z] = Ne, Y[me] = $, Z = me;
          else break e;
        }
      }
      return X;
    }
    function i(Y, X) {
      var $ = Y.sortIndex - X.sortIndex;
      return $ !== 0 ? $ : Y.id - X.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var r = performance;
      t.unstable_now = function() {
        return r.now();
      };
    } else {
      var s = Date, o = s.now();
      t.unstable_now = function() {
        return s.now() - o;
      };
    }
    var h = [], f = [], l = 1, u = null, c = 3, p = false, y = false, A = false, g = false, F = typeof setTimeout == "function" ? setTimeout : null, C = typeof clearTimeout == "function" ? clearTimeout : null, E = typeof setImmediate < "u" ? setImmediate : null;
    function R(Y) {
      for (var X = a(f); X !== null; ) {
        if (X.callback === null) e(f);
        else if (X.startTime <= Y) e(f), X.sortIndex = X.expirationTime, n(h, X);
        else break;
        X = a(f);
      }
    }
    function _(Y) {
      if (A = false, R(Y), !y) if (a(h) !== null) y = true, O || (O = true, ne());
      else {
        var X = a(f);
        X !== null && ce(_, X.startTime - Y);
      }
    }
    var O = false, W = -1, z = 5, K = -1;
    function Q() {
      return g ? true : !(t.unstable_now() - K < z);
    }
    function te() {
      if (g = false, O) {
        var Y = t.unstable_now();
        K = Y;
        var X = true;
        try {
          e: {
            y = false, A && (A = false, C(W), W = -1), p = true;
            var $ = c;
            try {
              t: {
                for (R(Y), u = a(h); u !== null && !(u.expirationTime > Y && Q()); ) {
                  var Z = u.callback;
                  if (typeof Z == "function") {
                    u.callback = null, c = u.priorityLevel;
                    var ue = Z(u.expirationTime <= Y);
                    if (Y = t.unstable_now(), typeof ue == "function") {
                      u.callback = ue, R(Y), X = true;
                      break t;
                    }
                    u === a(h) && e(h), R(Y);
                  } else e(h);
                  u = a(h);
                }
                if (u !== null) X = true;
                else {
                  var pe = a(f);
                  pe !== null && ce(_, pe.startTime - Y), X = false;
                }
              }
              break e;
            } finally {
              u = null, c = $, p = false;
            }
            X = void 0;
          }
        } finally {
          X ? ne() : O = false;
        }
      }
    }
    var ne;
    if (typeof E == "function") ne = function() {
      E(te);
    };
    else if (typeof MessageChannel < "u") {
      var ie = new MessageChannel(), se = ie.port2;
      ie.port1.onmessage = te, ne = function() {
        se.postMessage(null);
      };
    } else ne = function() {
      F(te, 0);
    };
    function ce(Y, X) {
      W = F(function() {
        Y(t.unstable_now());
      }, X);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, t.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return c;
    }, t.unstable_next = function(Y) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = c;
      }
      var $ = c;
      c = X;
      try {
        return Y();
      } finally {
        c = $;
      }
    }, t.unstable_requestPaint = function() {
      g = true;
    }, t.unstable_runWithPriority = function(Y, X) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var $ = c;
      c = Y;
      try {
        return X();
      } finally {
        c = $;
      }
    }, t.unstable_scheduleCallback = function(Y, X, $) {
      var Z = t.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? Z + $ : Z) : $ = Z, Y) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return ue = $ + ue, Y = { id: l++, callback: X, priorityLevel: Y, startTime: $, expirationTime: ue, sortIndex: -1 }, $ > Z ? (Y.sortIndex = $, n(f, Y), a(h) === null && Y === a(f) && (A ? (C(W), W = -1) : A = true, ce(_, $ - Z))) : (Y.sortIndex = ue, n(h, Y), y || p || (y = true, O || (O = true, ne()))), Y;
    }, t.unstable_shouldYield = Q, t.unstable_wrapCallback = function(Y) {
      var X = c;
      return function() {
        var $ = c;
        c = X;
        try {
          return Y.apply(this, arguments);
        } finally {
          c = $;
        }
      };
    };
  })($t)), $t;
}
var nr;
function Ma() {
  return nr || (nr = 1, Gt.exports = Yi()), Gt.exports;
}
var Ji = "Invariant failed";
function Ba(t, n) {
  if (!t) throw new Error(Ji);
}
function Wa(t, n) {
}
var Pt = { exports: {} }, Vi = Pt.exports, rr;
function Ki() {
  return rr || (rr = 1, (function(t, n) {
    (function(a, e) {
      t.exports = e();
    })(Vi, function() {
      function a(D) {
        return (a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(x) {
          return typeof x;
        } : function(x) {
          return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
        })(D);
      }
      function e(D, x) {
        if (!(D instanceof x)) throw new TypeError("Cannot call a class as a function");
      }
      function i(D, x) {
        for (var T = 0; T < x.length; T++) {
          var q = x[T];
          q.enumerable = q.enumerable || false, q.configurable = true, "value" in q && (q.writable = true), Object.defineProperty(D, q.key, q);
        }
      }
      function r(D, x, T) {
        x && i(D.prototype, x), T && i(D, T), Object.defineProperty(D, "prototype", { writable: false });
      }
      function s(D, x, T) {
        x in D ? Object.defineProperty(D, x, { value: T, enumerable: true, configurable: true, writable: true }) : D[x] = T;
      }
      function o(D, x) {
        if (typeof x != "function" && x !== null) throw new TypeError("Super expression must either be null or a function");
        D.prototype = Object.create(x && x.prototype, { constructor: { value: D, writable: true, configurable: true } }), Object.defineProperty(D, "prototype", { writable: false }), x && f(D, x);
      }
      function h(D) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(x) {
          return x.__proto__ || Object.getPrototypeOf(x);
        })(D);
      }
      function f(D, x) {
        return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(T, q) {
          return T.__proto__ = q, T;
        })(D, x);
      }
      function l(D, x) {
        if (x && (typeof x == "object" || typeof x == "function")) return x;
        if (x !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        if (x = D, x === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return x;
      }
      function u(D) {
        var x = (function() {
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
          var T, q = h(D);
          return l(this, x ? (T = h(this).constructor, Reflect.construct(q, arguments, T)) : q.apply(this, arguments));
        };
      }
      function c(D, x) {
        (x == null || x > D.length) && (x = D.length);
        for (var T = 0, q = new Array(x); T < x; T++) q[T] = D[T];
        return q;
      }
      function p(D, x) {
        var T, q = typeof Symbol < "u" && D[Symbol.iterator] || D["@@iterator"];
        if (!q) {
          if (Array.isArray(D) || (q = (function(P, I) {
            if (P) {
              if (typeof P == "string") return c(P, I);
              var B = Object.prototype.toString.call(P).slice(8, -1);
              return (B = B === "Object" && P.constructor ? P.constructor.name : B) === "Map" || B === "Set" ? Array.from(P) : B === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B) ? c(P, I) : void 0;
            }
          })(D)) || x && D && typeof D.length == "number") return q && (D = q), T = 0, { s: x = function() {
          }, n: function() {
            return T >= D.length ? { done: true } : { done: false, value: D[T++] };
          }, e: function(P) {
            throw P;
          }, f: x };
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var V, k = true, ee = false;
        return { s: function() {
          q = q.call(D);
        }, n: function() {
          var P = q.next();
          return k = P.done, P;
        }, e: function(P) {
          ee = true, V = P;
        }, f: function() {
          try {
            k || q.return == null || q.return();
          } finally {
            if (ee) throw V;
          }
        } };
      }
      function y() {
        if (A.url) window.location.href = A.url;
        else if (A.rewriteHTML) try {
          document.documentElement.innerHTML = A.rewriteHTML;
        } catch {
          document.documentElement.innerText = A.rewriteHTML;
        }
        else {
          try {
            window.opener = null, window.open("", "_self"), window.close(), window.history.back();
          } catch (D) {
            console.log(D);
          }
          setTimeout(function() {
            window.location.href = A.timeOutUrl || "https://theajack.github.io/disable-devtool/404.html?h=".concat(encodeURIComponent(location.host));
          }, 500);
        }
      }
      var A = { md5: "", ondevtoolopen: y, ondevtoolclose: null, url: "", timeOutUrl: "", tkName: "ddtk", interval: 500, disableMenu: true, stopIntervalTime: 5e3, clearIntervalWhenDevOpenTrigger: false, detectors: [1, 3, 4, 5, 6, 7], clearLog: true, disableSelect: false, disableInputSelect: false, disableCopy: false, disableCut: false, disablePaste: false, ignore: null, disableIframeParents: true, seo: true, rewriteHTML: "" }, g = ["detectors", "ondevtoolclose", "ignore"];
      function F(D) {
        var x, T = 0 < arguments.length && D !== void 0 ? D : {};
        for (x in T.onDevtoolOpen && (T.ondevtoolopen = T.onDevtoolOpen), T.onDevtoolClose && (T.ondevtoolclose = T.onDevtoolClose), A) {
          var q = x;
          T[q] === void 0 || a(A[q]) !== a(T[q]) && g.indexOf(q) === -1 || (A[q] = T[q]);
        }
        typeof A.ondevtoolclose == "function" && A.clearIntervalWhenDevOpenTrigger === true && (A.clearIntervalWhenDevOpenTrigger = false, console.warn("\u3010DISABLE-DEVTOOL\u3011clearIntervalWhenDevOpenTrigger \u5728\u4F7F\u7528 ondevtoolclose \u65F6\u65E0\u6548"));
      }
      function C() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
      function E(D) {
        var x = C();
        return D(), C() - x;
      }
      function R(D, x) {
        function T(ee) {
          return function() {
            D && D();
            var P = ee.apply(void 0, arguments);
            return x && x(), P;
          };
        }
        var q = window.alert, V = window.confirm, k = window.prompt;
        try {
          window.alert = T(q), window.confirm = T(V), window.prompt = T(k);
        } catch {
        }
      }
      var _, O, W, z = { iframe: false, pc: false, qqBrowser: false, firefox: false, macos: false, edge: false, oldEdge: false, ie: false, iosChrome: false, iosEdge: false, chrome: false, seoBot: false, mobile: false };
      function K() {
        function D(De) {
          return x.indexOf(De) !== -1;
        }
        var x = navigator.userAgent.toLowerCase(), T = (function() {
          var Re = navigator, De = Re.platform, Re = Re.maxTouchPoints;
          if (typeof Re == "number") return 1 < Re;
          if (typeof De == "string") {
            if (Re = De.toLowerCase(), /(mac|win)/i.test(Re)) return false;
            if (/(android|iphone|ipad|ipod|arch)/i.test(Re)) return true;
          }
          return /(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase());
        })(), q = !!window.top && window !== window.top, V = !T, k = D("qqbrowser"), ee = D("firefox"), P = D("macintosh"), I = D("edge"), B = I && !D("chrome"), M = B || D("trident") || D("msie"), U = D("crios"), Be = D("edgios"), Oe = D("chrome") || U, je = !T && /(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(x);
        Object.assign(z, { iframe: q, pc: V, qqBrowser: k, firefox: ee, macos: P, edge: I, oldEdge: B, ie: M, iosChrome: U, iosEdge: Be, chrome: Oe, seoBot: je, mobile: T });
      }
      function Q() {
        for (var D = (function() {
          for (var q = {}, V = 0; V < 500; V++) q["".concat(V)] = "".concat(V);
          return q;
        })(), x = [], T = 0; T < 50; T++) x.push(D);
        return x;
      }
      function te() {
        A.clearLog && W();
      }
      var ne = "", ie = false;
      function se() {
        var D = A.ignore;
        if (D) {
          if (typeof D == "function") return D();
          if (D.length !== 0) {
            var x = location.href;
            if (ne === x) return ie;
            ne = x;
            var T, q = false, V = p(D);
            try {
              for (V.s(); !(T = V.n()).done; ) {
                var k = T.value;
                if (typeof k == "string") {
                  if (x.indexOf(k) !== -1) {
                    q = true;
                    break;
                  }
                } else if (k.test(x)) {
                  q = true;
                  break;
                }
              }
            } catch (ee) {
              V.e(ee);
            } finally {
              V.f();
            }
            return ie = q;
          }
        }
      }
      var ce = function() {
        return false;
      };
      function Y(D) {
        var x, T, q = 74, V = 73, k = 85, ee = 83, P = 123, I = z.macos ? function(M, U) {
          return M.metaKey && M.altKey && (U === V || U === q);
        } : function(M, U) {
          return M.ctrlKey && M.shiftKey && (U === V || U === q);
        }, B = z.macos ? function(M, U) {
          return M.metaKey && M.altKey && U === k || M.metaKey && U === ee;
        } : function(M, U) {
          return M.ctrlKey && (U === ee || U === k);
        };
        D.addEventListener("keydown", function(M) {
          var U = (M = M || D.event).keyCode || M.which;
          if (U === P || I(M, U) || B(M, U)) return $(D, M);
        }, true), x = D, A.disableMenu && x.addEventListener("contextmenu", function(M) {
          if (M.pointerType !== "touch") return $(x, M);
        }), T = D, (A.disableSelect || A.disableInputSelect) && X(T, "selectstart"), T = D, A.disableCopy && X(T, "copy"), T = D, A.disableCut && X(T, "cut"), T = D, A.disablePaste && X(T, "paste");
      }
      function X(D, x) {
        D.addEventListener(x, function(T) {
          if (!(q = T.target) || q.tagName !== "INPUT" && q.tagName !== "TEXTAREA" && ((V = q.getAttribute) == null ? void 0 : V.call(q, "contenteditable")) !== "true") {
            if (A.disableSelect) return $(D, T);
          } else if (A.disableInputSelect) return $(D, T);
          var q, V;
        });
      }
      function $(D, x) {
        if (!se() && !ce()) return (x = x || D.event).returnValue = false, x.preventDefault(), false;
      }
      var Z, ue = false, pe = {};
      function Ee(D) {
        pe[D] = false;
      }
      function Ue() {
        for (var D in pe) if (pe[D]) return ue = true;
        return ue = false;
      }
      (le = Z = Z || {})[le.Unknown = -1] = "Unknown", le[le.RegToString = 0] = "RegToString", le[le.DefineId = 1] = "DefineId", le[le.Size = 2] = "Size", le[le.DateToString = 3] = "DateToString", le[le.FuncToString = 4] = "FuncToString", le[le.Debugger = 5] = "Debugger", le[le.Performance = 6] = "Performance", le[le.DebugLib = 7] = "DebugLib";
      var me = (function() {
        function D(q) {
          var T = q.type, q = q.enabled, q = q === void 0 || q;
          e(this, D), this.type = Z.Unknown, this.enabled = true, this.type = T, this.enabled = q, this.enabled && (T = this, gt.push(T), this.init());
        }
        return r(D, [{ key: "onDevToolOpen", value: function() {
          var x;
          console.warn("You don't have permission to use DEVTOOL!\u3010type = ".concat(this.type, "\u3011")), A.clearIntervalWhenDevOpenTrigger && mt(), window.clearTimeout(pt), A.ondevtoolopen(this.type, y), x = this.type, pe[x] = true;
        } }, { key: "init", value: function() {
        } }]), D;
      })(), Ne = (function() {
        o(x, me);
        var D = u(x);
        function x() {
          return e(this, x), D.call(this, { type: Z.DebugLib });
        }
        return r(x, [{ key: "init", value: function() {
        } }, { key: "detect", value: function() {
          var T;
          (((T = (T = window.eruda) == null ? void 0 : T._devTools) == null ? void 0 : T._isShow) === true || window._vcOrigConsole && window.document.querySelector("#__vconsole.vc-toggle")) && this.onDevToolOpen();
        } }], [{ key: "isUsing", value: function() {
          return !!window.eruda || !!window._vcOrigConsole;
        } }]), x;
      })(), vt = 0, pt = 0, gt = [], zt = 0;
      function Yt(D) {
        function x() {
          B = true;
        }
        function T() {
          B = false;
        }
        var q, V, k, ee, P, I, B = false;
        function M() {
          (I[ee] === k ? V : q)();
        }
        R(x, T), q = T, V = x, (I = document).hidden !== void 0 ? (k = "hidden", P = "visibilitychange", ee = "visibilityState") : I.mozHidden !== void 0 ? (k = "mozHidden", P = "mozvisibilitychange", ee = "mozVisibilityState") : I.msHidden !== void 0 ? (k = "msHidden", P = "msvisibilitychange", ee = "msVisibilityState") : I.webkitHidden !== void 0 && (k = "webkitHidden", P = "webkitvisibilitychange", ee = "webkitVisibilityState"), I.removeEventListener(P, M, false), I.addEventListener(P, M, false), vt = window.setInterval(function() {
          if (!(D.isSuspend || B || se())) {
            var U, Be, Oe = p(gt);
            try {
              for (Oe.s(); !(U = Oe.n()).done; ) {
                var je = U.value;
                Ee(je.type), je.detect(zt++);
              }
            } catch (De) {
              Oe.e(De);
            } finally {
              Oe.f();
            }
            te(), typeof A.ondevtoolclose == "function" && (Be = ue, !Ue() && Be && A.ondevtoolclose());
          }
        }, A.interval), pt = setTimeout(function() {
          z.pc || Ne.isUsing() || mt();
        }, A.stopIntervalTime);
      }
      function mt() {
        window.clearInterval(vt);
      }
      var Ye = 8;
      function yt(D) {
        for (var x = (function(k, ee) {
          k[ee >> 5] |= 128 << ee % 32, k[14 + (ee + 64 >>> 9 << 4)] = ee;
          for (var P = 1732584193, I = -271733879, B = -1732584194, M = 271733878, U = 0; U < k.length; U += 16) {
            var Be = P, Oe = I, je = B, De = M;
            P = fe(P, I, B, M, k[U + 0], 7, -680876936), M = fe(M, P, I, B, k[U + 1], 12, -389564586), B = fe(B, M, P, I, k[U + 2], 17, 606105819), I = fe(I, B, M, P, k[U + 3], 22, -1044525330), P = fe(P, I, B, M, k[U + 4], 7, -176418897), M = fe(M, P, I, B, k[U + 5], 12, 1200080426), B = fe(B, M, P, I, k[U + 6], 17, -1473231341), I = fe(I, B, M, P, k[U + 7], 22, -45705983), P = fe(P, I, B, M, k[U + 8], 7, 1770035416), M = fe(M, P, I, B, k[U + 9], 12, -1958414417), B = fe(B, M, P, I, k[U + 10], 17, -42063), I = fe(I, B, M, P, k[U + 11], 22, -1990404162), P = fe(P, I, B, M, k[U + 12], 7, 1804603682), M = fe(M, P, I, B, k[U + 13], 12, -40341101), B = fe(B, M, P, I, k[U + 14], 17, -1502002290), I = fe(I, B, M, P, k[U + 15], 22, 1236535329), P = ye(P, I, B, M, k[U + 1], 5, -165796510), M = ye(M, P, I, B, k[U + 6], 9, -1069501632), B = ye(B, M, P, I, k[U + 11], 14, 643717713), I = ye(I, B, M, P, k[U + 0], 20, -373897302), P = ye(P, I, B, M, k[U + 5], 5, -701558691), M = ye(M, P, I, B, k[U + 10], 9, 38016083), B = ye(B, M, P, I, k[U + 15], 14, -660478335), I = ye(I, B, M, P, k[U + 4], 20, -405537848), P = ye(P, I, B, M, k[U + 9], 5, 568446438), M = ye(M, P, I, B, k[U + 14], 9, -1019803690), B = ye(B, M, P, I, k[U + 3], 14, -187363961), I = ye(I, B, M, P, k[U + 8], 20, 1163531501), P = ye(P, I, B, M, k[U + 13], 5, -1444681467), M = ye(M, P, I, B, k[U + 2], 9, -51403784), B = ye(B, M, P, I, k[U + 7], 14, 1735328473), I = ye(I, B, M, P, k[U + 12], 20, -1926607734), P = ge(P, I, B, M, k[U + 5], 4, -378558), M = ge(M, P, I, B, k[U + 8], 11, -2022574463), B = ge(B, M, P, I, k[U + 11], 16, 1839030562), I = ge(I, B, M, P, k[U + 14], 23, -35309556), P = ge(P, I, B, M, k[U + 1], 4, -1530992060), M = ge(M, P, I, B, k[U + 4], 11, 1272893353), B = ge(B, M, P, I, k[U + 7], 16, -155497632), I = ge(I, B, M, P, k[U + 10], 23, -1094730640), P = ge(P, I, B, M, k[U + 13], 4, 681279174), M = ge(M, P, I, B, k[U + 0], 11, -358537222), B = ge(B, M, P, I, k[U + 3], 16, -722521979), I = ge(I, B, M, P, k[U + 6], 23, 76029189), P = ge(P, I, B, M, k[U + 9], 4, -640364487), M = ge(M, P, I, B, k[U + 12], 11, -421815835), B = ge(B, M, P, I, k[U + 15], 16, 530742520), I = ge(I, B, M, P, k[U + 2], 23, -995338651), P = de(P, I, B, M, k[U + 0], 6, -198630844), M = de(M, P, I, B, k[U + 7], 10, 1126891415), B = de(B, M, P, I, k[U + 14], 15, -1416354905), I = de(I, B, M, P, k[U + 5], 21, -57434055), P = de(P, I, B, M, k[U + 12], 6, 1700485571), M = de(M, P, I, B, k[U + 3], 10, -1894986606), B = de(B, M, P, I, k[U + 10], 15, -1051523), I = de(I, B, M, P, k[U + 1], 21, -2054922799), P = de(P, I, B, M, k[U + 8], 6, 1873313359), M = de(M, P, I, B, k[U + 15], 10, -30611744), B = de(B, M, P, I, k[U + 6], 15, -1560198380), I = de(I, B, M, P, k[U + 13], 21, 1309151649), P = de(P, I, B, M, k[U + 4], 6, -145523070), M = de(M, P, I, B, k[U + 11], 10, -1120210379), B = de(B, M, P, I, k[U + 2], 15, 718787259), I = de(I, B, M, P, k[U + 9], 21, -343485551), P = _e(P, Be), I = _e(I, Oe), B = _e(B, je), M = _e(M, De);
          }
          return Array(P, I, B, M);
        })((function(k) {
          for (var ee = Array(), P = (1 << Ye) - 1, I = 0; I < k.length * Ye; I += Ye) ee[I >> 5] |= (k.charCodeAt(I / Ye) & P) << I % 32;
          return ee;
        })(D), D.length * Ye), T = "0123456789abcdef", q = "", V = 0; V < 4 * x.length; V++) q += T.charAt(x[V >> 2] >> V % 4 * 8 + 4 & 15) + T.charAt(x[V >> 2] >> V % 4 * 8 & 15);
        return q;
      }
      function Ke(D, x, T, q, V, k) {
        return _e((x = _e(_e(x, D), _e(q, k))) << V | x >>> 32 - V, T);
      }
      function fe(D, x, T, q, V, k, ee) {
        return Ke(x & T | ~x & q, D, x, V, k, ee);
      }
      function ye(D, x, T, q, V, k, ee) {
        return Ke(x & q | T & ~q, D, x, V, k, ee);
      }
      function ge(D, x, T, q, V, k, ee) {
        return Ke(x ^ T ^ q, D, x, V, k, ee);
      }
      function de(D, x, T, q, V, k, ee) {
        return Ke(T ^ (x | ~q), D, x, V, k, ee);
      }
      function _e(D, x) {
        var T = (65535 & D) + (65535 & x);
        return (D >> 16) + (x >> 16) + (T >> 16) << 16 | 65535 & T;
      }
      var le = (function() {
        o(x, me);
        var D = u(x);
        function x() {
          return e(this, x), D.call(this, { type: Z.RegToString, enabled: z.qqBrowser || z.firefox });
        }
        return r(x, [{ key: "init", value: function() {
          var T = this;
          this.lastTime = 0, this.reg = /./, _(this.reg), this.reg.toString = function() {
            var q;
            return z.qqBrowser ? (q = (/* @__PURE__ */ new Date()).getTime(), T.lastTime && q - T.lastTime < 100 ? T.onDevToolOpen() : T.lastTime = q) : z.firefox && T.onDevToolOpen(), "";
          };
        } }, { key: "detect", value: function() {
          _(this.reg);
        } }]), x;
      })(), rt = (function() {
        o(x, me);
        var D = u(x);
        function x() {
          return e(this, x), D.call(this, { type: Z.DefineId });
        }
        return r(x, [{ key: "init", value: function() {
          var T = this;
          this.div = document.createElement("div"), this.div.__defineGetter__("id", function() {
            T.onDevToolOpen();
          }), Object.defineProperty(this.div, "id", { get: function() {
            T.onDevToolOpen();
          } });
        } }, { key: "detect", value: function() {
          _(this.div);
        } }]), x;
      })(), bt = (function() {
        o(x, me);
        var D = u(x);
        function x() {
          return e(this, x), D.call(this, { type: Z.Size, enabled: !z.iframe && !z.edge });
        }
        return r(x, [{ key: "init", value: function() {
          var T = this;
          this.checkWindowSizeUneven(), window.addEventListener("resize", function() {
            setTimeout(function() {
              T.checkWindowSizeUneven();
            }, 100);
          }, true);
        } }, { key: "detect", value: function() {
        } }, { key: "checkWindowSizeUneven", value: function() {
          var T = (function() {
            if (it(window.devicePixelRatio)) return window.devicePixelRatio;
            var V = window.screen;
            return !!(it(V) && V.deviceXDPI && V.logicalXDPI) && V.deviceXDPI / V.logicalXDPI;
          })();
          if (T !== false) {
            var q = 200 < window.outerWidth - window.innerWidth * T, T = 300 < window.outerHeight - window.innerHeight * T;
            if (q || T) return this.onDevToolOpen(), false;
            Ee(this.type);
          }
          return true;
        } }]), x;
      })();
      function it(D) {
        return D != null;
      }
      var Ce, wt = (function() {
        o(x, me);
        var D = u(x);
        function x() {
          return e(this, x), D.call(this, { type: Z.DateToString, enabled: !z.iosChrome && !z.iosEdge });
        }
        return r(x, [{ key: "init", value: function() {
          var T = this;
          this.count = 0, this.date = /* @__PURE__ */ new Date(), this.date.toString = function() {
            return T.count++, "";
          };
        } }, { key: "detect", value: function() {
          this.count = 0, _(this.date), te(), 2 <= this.count && this.onDevToolOpen();
        } }]), x;
      })(), At = (function() {
        o(x, me);
        var D = u(x);
        function x() {
          return e(this, x), D.call(this, { type: Z.FuncToString, enabled: !z.iosChrome && !z.iosEdge });
        }
        return r(x, [{ key: "init", value: function() {
          var T = this;
          this.count = 0, this.func = function() {
          }, this.func.toString = function() {
            return T.count++, "";
          };
        } }, { key: "detect", value: function() {
          this.count = 0, _(this.func), te(), 2 <= this.count && this.onDevToolOpen();
        } }]), x;
      })(), _t = (function() {
        o(x, me);
        var D = u(x);
        function x() {
          return e(this, x), D.call(this, { type: Z.Debugger, enabled: z.iosChrome || z.iosEdge });
        }
        return r(x, [{ key: "detect", value: function() {
          var T = C();
          100 < C() - T && this.onDevToolOpen();
        } }]), x;
      })(), Ct = (function() {
        o(x, me);
        var D = u(x);
        function x() {
          var T;
          return e(this, x), (T = D.call(this, { type: Z.Performance, enabled: z.chrome || !z.mobile })).count = 0, T;
        }
        return r(x, [{ key: "init", value: function() {
          this.maxPrintTime = 0, this.largeObjectArray = Q();
        } }, { key: "detect", value: function() {
          var T = this, q = E(function() {
            O(T.largeObjectArray);
          }), V = E(function() {
            _(T.largeObjectArray);
          });
          if (this.maxPrintTime = Math.max(this.maxPrintTime, V), te(), q === 0 || this.maxPrintTime === 0) return false;
          q > 10 * this.maxPrintTime && (2 <= this.count ? this.onDevToolOpen() : (this.count++, this.detect()));
        } }]), x;
      })(), ot = (s(Ce = {}, Z.RegToString, le), s(Ce, Z.DefineId, rt), s(Ce, Z.Size, bt), s(Ce, Z.DateToString, wt), s(Ce, Z.FuncToString, At), s(Ce, Z.Debugger, _t), s(Ce, Z.Performance, Ct), s(Ce, Z.DebugLib, Ne), Ce), Me = Object.assign(function(D) {
        function x() {
          var ee = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "";
          return { success: !ee, reason: ee };
        }
        var T;
        if (Me.isRunning) return x("already running");
        if (K(), T = window.console || { log: function() {
        }, table: function() {
        }, clear: function() {
        } }, W = z.ie ? (_ = function() {
          return T.log.apply(T, arguments);
        }, O = function() {
          return T.table.apply(T, arguments);
        }, function() {
          return T.clear();
        }) : (_ = T.log, O = T.table, T.clear), F(D), A.md5 && yt((function(ee) {
          var P = window.location.search, I = window.location.hash;
          return (P = P === "" && I !== "" ? "?".concat(I.split("?")[1]) : P) !== "" && P !== void 0 && (I = new RegExp("(^|&)" + ee + "=([^&]*)(&|$)", "i"), ee = P.substr(1).match(I), ee != null) ? unescape(ee[2]) : "";
        })(A.tkName)) === A.md5) return x("token passed");
        if (A.seo && z.seoBot) return x("seobot");
        Me.isRunning = true, Yt(Me);
        var q = Me, V = (ce = function() {
          return q.isSuspend;
        }, window.top), k = window.parent;
        if (Y(window), A.disableIframeParents && V && k && V !== window) {
          for (; k !== V; ) Y(k), k = k.parent;
          Y(V);
        }
        return (A.detectors === "all" ? Object.keys(ot) : A.detectors).forEach(function(ee) {
          new ot[ee]();
        }), x();
      }, { isRunning: false, isSuspend: false, md5: yt, version: "0.3.9", DetectorType: Z, isDevToolOpened: Ue });
      return le = (function() {
        if (typeof window > "u" || !window.document) return null;
        var D = document.querySelector("[disable-devtool-auto]");
        if (!D) return null;
        var x = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"], T = ["interval"], q = {};
        return ["md5", "url", "tk-name", "detectors"].concat(x, T).forEach(function(V) {
          var k = D.getAttribute(V);
          k !== null && (T.indexOf(V) !== -1 ? k = parseInt(k) : x.indexOf(V) !== -1 ? k = k !== "false" : V === "detector" && k !== "all" && (k = k.split(" ")), q[(function(ee) {
            if (ee.indexOf("-") === -1) return ee;
            var P = false;
            return ee.split("").map(function(I) {
              return I === "-" ? (P = true, "") : P ? (P = false, I.toUpperCase()) : I;
            }).join("");
          })(V)] = k);
        }), q;
      })(), le && Me(le), Me;
    });
  })(Pt)), Pt.exports;
}
var Xi = Ki();
const La = et(Xi), Gi = ["top", "right", "bottom", "left"], He = Math.min, be = Math.max, It = Math.round, xt = Math.floor, Pe = (t) => ({ x: t, y: t }), $i = { left: "right", right: "left", bottom: "top", top: "bottom" }, Qi = { start: "end", end: "start" };
function Pn(t, n, a) {
  return be(t, He(n, a));
}
function Le(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function qe(t) {
  return t.split("-")[0];
}
function tt(t) {
  return t.split("-")[1];
}
function Bn(t) {
  return t === "x" ? "y" : "x";
}
function Wn(t) {
  return t === "y" ? "height" : "width";
}
const Zi = /* @__PURE__ */ new Set(["top", "bottom"]);
function Te(t) {
  return Zi.has(qe(t)) ? "y" : "x";
}
function Ln(t) {
  return Bn(Te(t));
}
function eo(t, n, a) {
  a === void 0 && (a = false);
  const e = tt(t), i = Ln(t), r = Wn(i);
  let s = i === "x" ? e === (a ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return n.reference[r] > n.floating[r] && (s = Nt(s)), [s, Nt(s)];
}
function to(t) {
  const n = Nt(t);
  return [kn(t), n, kn(n)];
}
function kn(t) {
  return t.replace(/start|end/g, (n) => Qi[n]);
}
const ir = ["left", "right"], or = ["right", "left"], no = ["top", "bottom"], ro = ["bottom", "top"];
function io(t, n, a) {
  switch (t) {
    case "top":
    case "bottom":
      return a ? n ? or : ir : n ? ir : or;
    case "left":
    case "right":
      return n ? no : ro;
    default:
      return [];
  }
}
function oo(t, n, a, e) {
  const i = tt(t);
  let r = io(qe(t), a === "start", e);
  return i && (r = r.map((s) => s + "-" + i), n && (r = r.concat(r.map(kn)))), r;
}
function Nt(t) {
  return t.replace(/left|right|bottom|top/g, (n) => $i[n]);
}
function ao(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Qr(t) {
  return typeof t != "number" ? ao(t) : { top: t, right: t, bottom: t, left: t };
}
function Mt(t) {
  const { x: n, y: a, width: e, height: i } = t;
  return { width: e, height: i, top: a, left: n, right: n + e, bottom: a + i, x: n, y: a };
}
function ar(t, n, a) {
  let { reference: e, floating: i } = t;
  const r = Te(n), s = Ln(n), o = Wn(s), h = qe(n), f = r === "y", l = e.x + e.width / 2 - i.width / 2, u = e.y + e.height / 2 - i.height / 2, c = e[o] / 2 - i[o] / 2;
  let p;
  switch (h) {
    case "top":
      p = { x: l, y: e.y - i.height };
      break;
    case "bottom":
      p = { x: l, y: e.y + e.height };
      break;
    case "right":
      p = { x: e.x + e.width, y: u };
      break;
    case "left":
      p = { x: e.x - i.width, y: u };
      break;
    default:
      p = { x: e.x, y: e.y };
  }
  switch (tt(n)) {
    case "start":
      p[s] -= c * (a && f ? -1 : 1);
      break;
    case "end":
      p[s] += c * (a && f ? -1 : 1);
      break;
  }
  return p;
}
async function so(t, n) {
  var a;
  n === void 0 && (n = {});
  const { x: e, y: i, platform: r, rects: s, elements: o, strategy: h } = t, { boundary: f = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: c = false, padding: p = 0 } = Le(n, t), y = Qr(p), g = o[c ? u === "floating" ? "reference" : "floating" : u], F = Mt(await r.getClippingRect({ element: (a = await (r.isElement == null ? void 0 : r.isElement(g))) == null || a ? g : g.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)), boundary: f, rootBoundary: l, strategy: h })), C = u === "floating" ? { x: e, y: i, width: s.floating.width, height: s.floating.height } : s.reference, E = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), R = await (r.isElement == null ? void 0 : r.isElement(E)) ? await (r.getScale == null ? void 0 : r.getScale(E)) || { x: 1, y: 1 } : { x: 1, y: 1 }, _ = Mt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: o, rect: C, offsetParent: E, strategy: h }) : C);
  return { top: (F.top - _.top + y.top) / R.y, bottom: (_.bottom - F.bottom + y.bottom) / R.y, left: (F.left - _.left + y.left) / R.x, right: (_.right - F.right + y.right) / R.x };
}
const uo = async (t, n, a) => {
  const { placement: e = "bottom", strategy: i = "absolute", middleware: r = [], platform: s } = a, o = r.filter(Boolean), h = await (s.isRTL == null ? void 0 : s.isRTL(n));
  let f = await s.getElementRects({ reference: t, floating: n, strategy: i }), { x: l, y: u } = ar(f, e, h), c = e, p = {}, y = 0;
  for (let g = 0; g < o.length; g++) {
    var A;
    const { name: F, fn: C } = o[g], { x: E, y: R, data: _, reset: O } = await C({ x: l, y: u, initialPlacement: e, placement: c, strategy: i, middlewareData: p, rects: f, platform: { ...s, detectOverflow: (A = s.detectOverflow) != null ? A : so }, elements: { reference: t, floating: n } });
    l = E ?? l, u = R ?? u, p = { ...p, [F]: { ...p[F], ..._ } }, O && y <= 50 && (y++, typeof O == "object" && (O.placement && (c = O.placement), O.rects && (f = O.rects === true ? await s.getElementRects({ reference: t, floating: n, strategy: i }) : O.rects), { x: l, y: u } = ar(f, c, h)), g = -1);
  }
  return { x: l, y: u, placement: c, strategy: i, middlewareData: p };
}, lo = (t) => ({ name: "arrow", options: t, async fn(n) {
  const { x: a, y: e, placement: i, rects: r, platform: s, elements: o, middlewareData: h } = n, { element: f, padding: l = 0 } = Le(t, n) || {};
  if (f == null) return {};
  const u = Qr(l), c = { x: a, y: e }, p = Ln(i), y = Wn(p), A = await s.getDimensions(f), g = p === "y", F = g ? "top" : "left", C = g ? "bottom" : "right", E = g ? "clientHeight" : "clientWidth", R = r.reference[y] + r.reference[p] - c[p] - r.floating[y], _ = c[p] - r.reference[p], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
  let W = O ? O[E] : 0;
  (!W || !await (s.isElement == null ? void 0 : s.isElement(O))) && (W = o.floating[E] || r.floating[y]);
  const z = R / 2 - _ / 2, K = W / 2 - A[y] / 2 - 1, Q = He(u[F], K), te = He(u[C], K), ne = Q, ie = W - A[y] - te, se = W / 2 - A[y] / 2 + z, ce = Pn(ne, se, ie), Y = !h.arrow && tt(i) != null && se !== ce && r.reference[y] / 2 - (se < ne ? Q : te) - A[y] / 2 < 0, X = Y ? se < ne ? se - ne : se - ie : 0;
  return { [p]: c[p] + X, data: { [p]: ce, centerOffset: se - ce - X, ...Y && { alignmentOffset: X } }, reset: Y };
} }), fo = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(n) {
    var a, e;
    const { placement: i, middlewareData: r, rects: s, initialPlacement: o, platform: h, elements: f } = n, { mainAxis: l = true, crossAxis: u = true, fallbackPlacements: c, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: A = true, ...g } = Le(t, n);
    if ((a = r.arrow) != null && a.alignmentOffset) return {};
    const F = qe(i), C = Te(o), E = qe(o) === o, R = await (h.isRTL == null ? void 0 : h.isRTL(f.floating)), _ = c || (E || !A ? [Nt(o)] : to(o)), O = y !== "none";
    !c && O && _.push(...oo(o, A, y, R));
    const W = [o, ..._], z = await h.detectOverflow(n, g), K = [];
    let Q = ((e = r.flip) == null ? void 0 : e.overflows) || [];
    if (l && K.push(z[F]), u) {
      const se = eo(i, s, R);
      K.push(z[se[0]], z[se[1]]);
    }
    if (Q = [...Q, { placement: i, overflows: K }], !K.every((se) => se <= 0)) {
      var te, ne;
      const se = (((te = r.flip) == null ? void 0 : te.index) || 0) + 1, ce = W[se];
      if (ce && (!(u === "alignment" ? C !== Te(ce) : false) || Q.every(($) => Te($.placement) === C ? $.overflows[0] > 0 : true))) return { data: { index: se, overflows: Q }, reset: { placement: ce } };
      let Y = (ne = Q.filter((X) => X.overflows[0] <= 0).sort((X, $) => X.overflows[1] - $.overflows[1])[0]) == null ? void 0 : ne.placement;
      if (!Y) switch (p) {
        case "bestFit": {
          var ie;
          const X = (ie = Q.filter(($) => {
            if (O) {
              const Z = Te($.placement);
              return Z === C || Z === "y";
            }
            return true;
          }).map(($) => [$.placement, $.overflows.filter((Z) => Z > 0).reduce((Z, ue) => Z + ue, 0)]).sort(($, Z) => $[1] - Z[1])[0]) == null ? void 0 : ie[0];
          X && (Y = X);
          break;
        }
        case "initialPlacement":
          Y = o;
          break;
      }
      if (i !== Y) return { reset: { placement: Y } };
    }
    return {};
  } };
};
function sr(t, n) {
  return { top: t.top - n.height, right: t.right - n.width, bottom: t.bottom - n.height, left: t.left - n.width };
}
function ur(t) {
  return Gi.some((n) => t[n] >= 0);
}
const co = function(t) {
  return t === void 0 && (t = {}), { name: "hide", options: t, async fn(n) {
    const { rects: a, platform: e } = n, { strategy: i = "referenceHidden", ...r } = Le(t, n);
    switch (i) {
      case "referenceHidden": {
        const s = await e.detectOverflow(n, { ...r, elementContext: "reference" }), o = sr(s, a.reference);
        return { data: { referenceHiddenOffsets: o, referenceHidden: ur(o) } };
      }
      case "escaped": {
        const s = await e.detectOverflow(n, { ...r, altBoundary: true }), o = sr(s, a.floating);
        return { data: { escapedOffsets: o, escaped: ur(o) } };
      }
      default:
        return {};
    }
  } };
}, Zr = /* @__PURE__ */ new Set(["left", "top"]);
async function ho(t, n) {
  const { placement: a, platform: e, elements: i } = t, r = await (e.isRTL == null ? void 0 : e.isRTL(i.floating)), s = qe(a), o = tt(a), h = Te(a) === "y", f = Zr.has(s) ? -1 : 1, l = r && h ? -1 : 1, u = Le(n, t);
  let { mainAxis: c, crossAxis: p, alignmentAxis: y } = typeof u == "number" ? { mainAxis: u, crossAxis: 0, alignmentAxis: null } : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis };
  return o && typeof y == "number" && (p = o === "end" ? y * -1 : y), h ? { x: p * l, y: c * f } : { x: c * f, y: p * l };
}
const vo = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(n) {
    var a, e;
    const { x: i, y: r, placement: s, middlewareData: o } = n, h = await ho(n, t);
    return s === ((a = o.offset) == null ? void 0 : a.placement) && (e = o.arrow) != null && e.alignmentOffset ? {} : { x: i + h.x, y: r + h.y, data: { ...h, placement: s } };
  } };
}, po = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(n) {
    const { x: a, y: e, placement: i, platform: r } = n, { mainAxis: s = true, crossAxis: o = false, limiter: h = { fn: (F) => {
      let { x: C, y: E } = F;
      return { x: C, y: E };
    } }, ...f } = Le(t, n), l = { x: a, y: e }, u = await r.detectOverflow(n, f), c = Te(qe(i)), p = Bn(c);
    let y = l[p], A = l[c];
    if (s) {
      const F = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", E = y + u[F], R = y - u[C];
      y = Pn(E, y, R);
    }
    if (o) {
      const F = c === "y" ? "top" : "left", C = c === "y" ? "bottom" : "right", E = A + u[F], R = A - u[C];
      A = Pn(E, A, R);
    }
    const g = h.fn({ ...n, [p]: y, [c]: A });
    return { ...g, data: { x: g.x - a, y: g.y - e, enabled: { [p]: s, [c]: o } } };
  } };
}, go = function(t) {
  return t === void 0 && (t = {}), { options: t, fn(n) {
    const { x: a, y: e, placement: i, rects: r, middlewareData: s } = n, { offset: o = 0, mainAxis: h = true, crossAxis: f = true } = Le(t, n), l = { x: a, y: e }, u = Te(i), c = Bn(u);
    let p = l[c], y = l[u];
    const A = Le(o, n), g = typeof A == "number" ? { mainAxis: A, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...A };
    if (h) {
      const E = c === "y" ? "height" : "width", R = r.reference[c] - r.floating[E] + g.mainAxis, _ = r.reference[c] + r.reference[E] - g.mainAxis;
      p < R ? p = R : p > _ && (p = _);
    }
    if (f) {
      var F, C;
      const E = c === "y" ? "width" : "height", R = Zr.has(qe(i)), _ = r.reference[u] - r.floating[E] + (R && ((F = s.offset) == null ? void 0 : F[u]) || 0) + (R ? 0 : g.crossAxis), O = r.reference[u] + r.reference[E] + (R ? 0 : ((C = s.offset) == null ? void 0 : C[u]) || 0) - (R ? g.crossAxis : 0);
      y < _ ? y = _ : y > O && (y = O);
    }
    return { [c]: p, [u]: y };
  } };
}, mo = function(t) {
  return t === void 0 && (t = {}), { name: "size", options: t, async fn(n) {
    var a, e;
    const { placement: i, rects: r, platform: s, elements: o } = n, { apply: h = () => {
    }, ...f } = Le(t, n), l = await s.detectOverflow(n, f), u = qe(i), c = tt(i), p = Te(i) === "y", { width: y, height: A } = r.floating;
    let g, F;
    u === "top" || u === "bottom" ? (g = u, F = c === (await (s.isRTL == null ? void 0 : s.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (F = u, g = c === "end" ? "top" : "bottom");
    const C = A - l.top - l.bottom, E = y - l.left - l.right, R = He(A - l[g], C), _ = He(y - l[F], E), O = !n.middlewareData.shift;
    let W = R, z = _;
    if ((a = n.middlewareData.shift) != null && a.enabled.x && (z = E), (e = n.middlewareData.shift) != null && e.enabled.y && (W = C), O && !c) {
      const Q = be(l.left, 0), te = be(l.right, 0), ne = be(l.top, 0), ie = be(l.bottom, 0);
      p ? z = y - 2 * (Q !== 0 || te !== 0 ? Q + te : be(l.left, l.right)) : W = A - 2 * (ne !== 0 || ie !== 0 ? ne + ie : be(l.top, l.bottom));
    }
    await h({ ...n, availableWidth: z, availableHeight: W });
    const K = await s.getDimensions(o.floating);
    return y !== K.width || A !== K.height ? { reset: { rects: true } } : {};
  } };
};
function Wt() {
  return typeof window < "u";
}
function nt(t) {
  return ei(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function we(t) {
  var n;
  return (t == null || (n = t.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Ie(t) {
  var n;
  return (n = (ei(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : n.documentElement;
}
function ei(t) {
  return Wt() ? t instanceof Node || t instanceof we(t).Node : false;
}
function Fe(t) {
  return Wt() ? t instanceof Element || t instanceof we(t).Element : false;
}
function ke(t) {
  return Wt() ? t instanceof HTMLElement || t instanceof we(t).HTMLElement : false;
}
function lr(t) {
  return !Wt() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof we(t).ShadowRoot;
}
const yo = /* @__PURE__ */ new Set(["inline", "contents"]);
function dt(t) {
  const { overflow: n, overflowX: a, overflowY: e, display: i } = xe(t);
  return /auto|scroll|overlay|hidden|clip/.test(n + e + a) && !yo.has(i);
}
const bo = /* @__PURE__ */ new Set(["table", "td", "th"]);
function wo(t) {
  return bo.has(nt(t));
}
const Ao = [":popover-open", ":modal"];
function Lt(t) {
  return Ao.some((n) => {
    try {
      return t.matches(n);
    } catch {
      return false;
    }
  });
}
const _o = ["transform", "translate", "scale", "rotate", "perspective"], Co = ["transform", "translate", "scale", "rotate", "perspective", "filter"], So = ["paint", "layout", "strict", "content"];
function qn(t) {
  const n = Un(), a = Fe(t) ? xe(t) : t;
  return _o.some((e) => a[e] ? a[e] !== "none" : false) || (a.containerType ? a.containerType !== "normal" : false) || !n && (a.backdropFilter ? a.backdropFilter !== "none" : false) || !n && (a.filter ? a.filter !== "none" : false) || Co.some((e) => (a.willChange || "").includes(e)) || So.some((e) => (a.contain || "").includes(e));
}
function Fo(t) {
  let n = ze(t);
  for (; ke(n) && !Ze(n); ) {
    if (qn(n)) return n;
    if (Lt(n)) return null;
    n = ze(n);
  }
  return null;
}
function Un() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
const xo = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ze(t) {
  return xo.has(nt(t));
}
function xe(t) {
  return we(t).getComputedStyle(t);
}
function qt(t) {
  return Fe(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function ze(t) {
  if (nt(t) === "html") return t;
  const n = t.assignedSlot || t.parentNode || lr(t) && t.host || Ie(t);
  return lr(n) ? n.host : n;
}
function ti(t) {
  const n = ze(t);
  return Ze(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : ke(n) && dt(n) ? n : ti(n);
}
function ct(t, n, a) {
  var e;
  n === void 0 && (n = []), a === void 0 && (a = true);
  const i = ti(t), r = i === ((e = t.ownerDocument) == null ? void 0 : e.body), s = we(i);
  if (r) {
    const o = In(s);
    return n.concat(s, s.visualViewport || [], dt(i) ? i : [], o && a ? ct(o) : []);
  }
  return n.concat(i, ct(i, [], a));
}
function In(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function ni(t) {
  const n = xe(t);
  let a = parseFloat(n.width) || 0, e = parseFloat(n.height) || 0;
  const i = ke(t), r = i ? t.offsetWidth : a, s = i ? t.offsetHeight : e, o = It(a) !== r || It(e) !== s;
  return o && (a = r, e = s), { width: a, height: e, $: o };
}
function jn(t) {
  return Fe(t) ? t : t.contextElement;
}
function Qe(t) {
  const n = jn(t);
  if (!ke(n)) return Pe(1);
  const a = n.getBoundingClientRect(), { width: e, height: i, $: r } = ni(n);
  let s = (r ? It(a.width) : a.width) / e, o = (r ? It(a.height) : a.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!o || !Number.isFinite(o)) && (o = 1), { x: s, y: o };
}
const Eo = Pe(0);
function ri(t) {
  const n = we(t);
  return !Un() || !n.visualViewport ? Eo : { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop };
}
function Oo(t, n, a) {
  return n === void 0 && (n = false), !a || n && a !== we(t) ? false : n;
}
function Je(t, n, a, e) {
  n === void 0 && (n = false), a === void 0 && (a = false);
  const i = t.getBoundingClientRect(), r = jn(t);
  let s = Pe(1);
  n && (e ? Fe(e) && (s = Qe(e)) : s = Qe(t));
  const o = Oo(r, a, e) ? ri(r) : Pe(0);
  let h = (i.left + o.x) / s.x, f = (i.top + o.y) / s.y, l = i.width / s.x, u = i.height / s.y;
  if (r) {
    const c = we(r), p = e && Fe(e) ? we(e) : e;
    let y = c, A = In(y);
    for (; A && e && p !== y; ) {
      const g = Qe(A), F = A.getBoundingClientRect(), C = xe(A), E = F.left + (A.clientLeft + parseFloat(C.paddingLeft)) * g.x, R = F.top + (A.clientTop + parseFloat(C.paddingTop)) * g.y;
      h *= g.x, f *= g.y, l *= g.x, u *= g.y, h += E, f += R, y = we(A), A = In(y);
    }
  }
  return Mt({ width: l, height: u, x: h, y: f });
}
function Ut(t, n) {
  const a = qt(t).scrollLeft;
  return n ? n.left + a : Je(Ie(t)).left + a;
}
function ii(t, n) {
  const a = t.getBoundingClientRect(), e = a.left + n.scrollLeft - Ut(t, a), i = a.top + n.scrollTop;
  return { x: e, y: i };
}
function Do(t) {
  let { elements: n, rect: a, offsetParent: e, strategy: i } = t;
  const r = i === "fixed", s = Ie(e), o = n ? Lt(n.floating) : false;
  if (e === s || o && r) return a;
  let h = { scrollLeft: 0, scrollTop: 0 }, f = Pe(1);
  const l = Pe(0), u = ke(e);
  if ((u || !u && !r) && ((nt(e) !== "body" || dt(s)) && (h = qt(e)), ke(e))) {
    const p = Je(e);
    f = Qe(e), l.x = p.x + e.clientLeft, l.y = p.y + e.clientTop;
  }
  const c = s && !u && !r ? ii(s, h) : Pe(0);
  return { width: a.width * f.x, height: a.height * f.y, x: a.x * f.x - h.scrollLeft * f.x + l.x + c.x, y: a.y * f.y - h.scrollTop * f.y + l.y + c.y };
}
function Ro(t) {
  return Array.from(t.getClientRects());
}
function To(t) {
  const n = Ie(t), a = qt(t), e = t.ownerDocument.body, i = be(n.scrollWidth, n.clientWidth, e.scrollWidth, e.clientWidth), r = be(n.scrollHeight, n.clientHeight, e.scrollHeight, e.clientHeight);
  let s = -a.scrollLeft + Ut(t);
  const o = -a.scrollTop;
  return xe(e).direction === "rtl" && (s += be(n.clientWidth, e.clientWidth) - i), { width: i, height: r, x: s, y: o };
}
const fr = 25;
function Po(t, n) {
  const a = we(t), e = Ie(t), i = a.visualViewport;
  let r = e.clientWidth, s = e.clientHeight, o = 0, h = 0;
  if (i) {
    r = i.width, s = i.height;
    const l = Un();
    (!l || l && n === "fixed") && (o = i.offsetLeft, h = i.offsetTop);
  }
  const f = Ut(e);
  if (f <= 0) {
    const l = e.ownerDocument, u = l.body, c = getComputedStyle(u), p = l.compatMode === "CSS1Compat" && parseFloat(c.marginLeft) + parseFloat(c.marginRight) || 0, y = Math.abs(e.clientWidth - u.clientWidth - p);
    y <= fr && (r -= y);
  } else f <= fr && (r += f);
  return { width: r, height: s, x: o, y: h };
}
const ko = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Io(t, n) {
  const a = Je(t, true, n === "fixed"), e = a.top + t.clientTop, i = a.left + t.clientLeft, r = ke(t) ? Qe(t) : Pe(1), s = t.clientWidth * r.x, o = t.clientHeight * r.y, h = i * r.x, f = e * r.y;
  return { width: s, height: o, x: h, y: f };
}
function cr(t, n, a) {
  let e;
  if (n === "viewport") e = Po(t, a);
  else if (n === "document") e = To(Ie(t));
  else if (Fe(n)) e = Io(n, a);
  else {
    const i = ri(t);
    e = { x: n.x - i.x, y: n.y - i.y, width: n.width, height: n.height };
  }
  return Mt(e);
}
function oi(t, n) {
  const a = ze(t);
  return a === n || !Fe(a) || Ze(a) ? false : xe(a).position === "fixed" || oi(a, n);
}
function No(t, n) {
  const a = n.get(t);
  if (a) return a;
  let e = ct(t, [], false).filter((o) => Fe(o) && nt(o) !== "body"), i = null;
  const r = xe(t).position === "fixed";
  let s = r ? ze(t) : t;
  for (; Fe(s) && !Ze(s); ) {
    const o = xe(s), h = qn(s);
    !h && o.position === "fixed" && (i = null), (r ? !h && !i : !h && o.position === "static" && !!i && ko.has(i.position) || dt(s) && !h && oi(t, s)) ? e = e.filter((l) => l !== s) : i = o, s = ze(s);
  }
  return n.set(t, e), e;
}
function Mo(t) {
  let { element: n, boundary: a, rootBoundary: e, strategy: i } = t;
  const s = [...a === "clippingAncestors" ? Lt(n) ? [] : No(n, this._c) : [].concat(a), e], o = s[0], h = s.reduce((f, l) => {
    const u = cr(n, l, i);
    return f.top = be(u.top, f.top), f.right = He(u.right, f.right), f.bottom = He(u.bottom, f.bottom), f.left = be(u.left, f.left), f;
  }, cr(n, o, i));
  return { width: h.right - h.left, height: h.bottom - h.top, x: h.left, y: h.top };
}
function Bo(t) {
  const { width: n, height: a } = ni(t);
  return { width: n, height: a };
}
function Wo(t, n, a) {
  const e = ke(n), i = Ie(n), r = a === "fixed", s = Je(t, true, r, n);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const h = Pe(0);
  function f() {
    h.x = Ut(i);
  }
  if (e || !e && !r) if ((nt(n) !== "body" || dt(i)) && (o = qt(n)), e) {
    const p = Je(n, true, r, n);
    h.x = p.x + n.clientLeft, h.y = p.y + n.clientTop;
  } else i && f();
  r && !e && i && f();
  const l = i && !e && !r ? ii(i, o) : Pe(0), u = s.left + o.scrollLeft - h.x - l.x, c = s.top + o.scrollTop - h.y - l.y;
  return { x: u, y: c, width: s.width, height: s.height };
}
function Qt(t) {
  return xe(t).position === "static";
}
function dr(t, n) {
  if (!ke(t) || xe(t).position === "fixed") return null;
  if (n) return n(t);
  let a = t.offsetParent;
  return Ie(t) === a && (a = a.ownerDocument.body), a;
}
function ai(t, n) {
  const a = we(t);
  if (Lt(t)) return a;
  if (!ke(t)) {
    let i = ze(t);
    for (; i && !Ze(i); ) {
      if (Fe(i) && !Qt(i)) return i;
      i = ze(i);
    }
    return a;
  }
  let e = dr(t, n);
  for (; e && wo(e) && Qt(e); ) e = dr(e, n);
  return e && Ze(e) && Qt(e) && !qn(e) ? a : e || Fo(t) || a;
}
const Lo = async function(t) {
  const n = this.getOffsetParent || ai, a = this.getDimensions, e = await a(t.floating);
  return { reference: Wo(t.reference, await n(t.floating), t.strategy), floating: { x: 0, y: 0, width: e.width, height: e.height } };
};
function qo(t) {
  return xe(t).direction === "rtl";
}
const Uo = { convertOffsetParentRelativeRectToViewportRelativeRect: Do, getDocumentElement: Ie, getClippingRect: Mo, getOffsetParent: ai, getElementRects: Lo, getClientRects: Ro, getDimensions: Bo, getScale: Qe, isElement: Fe, isRTL: qo };
function si(t, n) {
  return t.x === n.x && t.y === n.y && t.width === n.width && t.height === n.height;
}
function jo(t, n) {
  let a = null, e;
  const i = Ie(t);
  function r() {
    var o;
    clearTimeout(e), (o = a) == null || o.disconnect(), a = null;
  }
  function s(o, h) {
    o === void 0 && (o = false), h === void 0 && (h = 1), r();
    const f = t.getBoundingClientRect(), { left: l, top: u, width: c, height: p } = f;
    if (o || n(), !c || !p) return;
    const y = xt(u), A = xt(i.clientWidth - (l + c)), g = xt(i.clientHeight - (u + p)), F = xt(l), E = { rootMargin: -y + "px " + -A + "px " + -g + "px " + -F + "px", threshold: be(0, He(1, h)) || 1 };
    let R = true;
    function _(O) {
      const W = O[0].intersectionRatio;
      if (W !== h) {
        if (!R) return s();
        W ? s(false, W) : e = setTimeout(() => {
          s(false, 1e-7);
        }, 1e3);
      }
      W === 1 && !si(f, t.getBoundingClientRect()) && s(), R = false;
    }
    try {
      a = new IntersectionObserver(_, { ...E, root: i.ownerDocument });
    } catch {
      a = new IntersectionObserver(_, E);
    }
    a.observe(t);
  }
  return s(true), r;
}
function qa(t, n, a, e) {
  e === void 0 && (e = {});
  const { ancestorScroll: i = true, ancestorResize: r = true, elementResize: s = typeof ResizeObserver == "function", layoutShift: o = typeof IntersectionObserver == "function", animationFrame: h = false } = e, f = jn(t), l = i || r ? [...f ? ct(f) : [], ...ct(n)] : [];
  l.forEach((F) => {
    i && F.addEventListener("scroll", a, { passive: true }), r && F.addEventListener("resize", a);
  });
  const u = f && o ? jo(f, a) : null;
  let c = -1, p = null;
  s && (p = new ResizeObserver((F) => {
    let [C] = F;
    C && C.target === f && p && (p.unobserve(n), cancelAnimationFrame(c), c = requestAnimationFrame(() => {
      var E;
      (E = p) == null || E.observe(n);
    })), a();
  }), f && !h && p.observe(f), p.observe(n));
  let y, A = h ? Je(t) : null;
  h && g();
  function g() {
    const F = Je(t);
    A && !si(A, F) && a(), A = F, y = requestAnimationFrame(g);
  }
  return a(), () => {
    var F;
    l.forEach((C) => {
      i && C.removeEventListener("scroll", a), r && C.removeEventListener("resize", a);
    }), u == null ? void 0 : u(), (F = p) == null || F.disconnect(), p = null, h && cancelAnimationFrame(y);
  };
}
const Ua = vo, ja = po, Ha = fo, za = mo, Ya = co, Ja = lo, Va = go, Ka = (t, n, a) => {
  const e = /* @__PURE__ */ new Map(), i = { platform: Uo, ...a }, r = { ...i.platform, _c: e };
  return uo(t, n, { ...i, platform: r });
};
var Ho = function(t) {
  if (typeof document > "u") return null;
  var n = Array.isArray(t) ? t[0] : t;
  return n.ownerDocument.body;
}, Ge = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), Ot = {}, Zt = 0, ui = function(t) {
  return t && (t.host || ui(t.parentNode));
}, zo = function(t, n) {
  return n.map(function(a) {
    if (t.contains(a)) return a;
    var e = ui(a);
    return e && t.contains(e) ? e : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, Yo = function(t, n, a, e) {
  var i = zo(n, Array.isArray(t) ? t : [t]);
  Ot[a] || (Ot[a] = /* @__PURE__ */ new WeakMap());
  var r = Ot[a], s = [], o = /* @__PURE__ */ new Set(), h = new Set(i), f = function(u) {
    !u || o.has(u) || (o.add(u), f(u.parentNode));
  };
  i.forEach(f);
  var l = function(u) {
    !u || h.has(u) || Array.prototype.forEach.call(u.children, function(c) {
      if (o.has(c)) l(c);
      else try {
        var p = c.getAttribute(e), y = p !== null && p !== "false", A = (Ge.get(c) || 0) + 1, g = (r.get(c) || 0) + 1;
        Ge.set(c, A), r.set(c, g), s.push(c), A === 1 && y && Et.set(c, true), g === 1 && c.setAttribute(a, "true"), y || c.setAttribute(e, "true");
      } catch (F) {
        console.error("aria-hidden: cannot operate on ", c, F);
      }
    });
  };
  return l(n), o.clear(), Zt++, function() {
    s.forEach(function(u) {
      var c = Ge.get(u) - 1, p = r.get(u) - 1;
      Ge.set(u, c), r.set(u, p), c || (Et.has(u) || u.removeAttribute(e), Et.delete(u)), p || u.removeAttribute(a);
    }), Zt--, Zt || (Ge = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), Ot = {});
  };
}, Xa = function(t, n, a) {
  a === void 0 && (a = "data-aria-hidden");
  var e = Array.from(Array.isArray(t) ? t : [t]), i = Ho(t);
  return i ? (e.push.apply(e, Array.from(i.querySelectorAll("[aria-live], script"))), Yo(e, i, a, "aria-hidden")) : function() {
    return null;
  };
}, hr = function() {
  return hr = Object.assign || function(n) {
    for (var a, e = 1, i = arguments.length; e < i; e++) {
      a = arguments[e];
      for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
    }
    return n;
  }, hr.apply(this, arguments);
};
function Ga(t, n) {
  var a = {};
  for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && n.indexOf(e) < 0 && (a[e] = t[e]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, e = Object.getOwnPropertySymbols(t); i < e.length; i++) n.indexOf(e[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, e[i]) && (a[e[i]] = t[e[i]]);
  return a;
}
function $a(t, n, a) {
  if (a || arguments.length === 2) for (var e = 0, i = n.length, r; e < i; e++) (r || !(e in n)) && (r || (r = Array.prototype.slice.call(n, 0, e)), r[e] = n[e]);
  return t.concat(r || Array.prototype.slice.call(n));
}
var Qa = function() {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
const Jo = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function $e(t, n, a) {
  const e = a[0];
  if (n != null && t >= n) throw new Error(t + " >= " + n);
  if (t.slice(-1) === e || n && n.slice(-1) === e) throw new Error("trailing zero");
  if (n) {
    let s = 0;
    for (; (t[s] || e) === n[s]; ) s++;
    if (s > 0) return n.slice(0, s) + $e(t.slice(s), n.slice(s), a);
  }
  const i = t ? a.indexOf(t[0]) : 0, r = n != null ? a.indexOf(n[0]) : a.length;
  if (r - i > 1) {
    const s = Math.round(0.5 * (i + r));
    return a[s];
  } else return n && n.length > 1 ? n.slice(0, 1) : a[i] + $e(t.slice(1), null, a);
}
function li(t) {
  if (t.length !== fi(t[0])) throw new Error("invalid integer part of order key: " + t);
}
function fi(t) {
  if (t >= "a" && t <= "z") return t.charCodeAt(0) - 97 + 2;
  if (t >= "A" && t <= "Z") return 90 - t.charCodeAt(0) + 2;
  throw new Error("invalid order key head: " + t);
}
function ut(t) {
  const n = fi(t[0]);
  if (n > t.length) throw new Error("invalid order key: " + t);
  return t.slice(0, n);
}
function vr(t, n) {
  if (t === "A" + n[0].repeat(26)) throw new Error("invalid order key: " + t);
  const a = ut(t);
  if (t.slice(a.length).slice(-1) === n[0]) throw new Error("invalid order key: " + t);
}
function pr(t, n) {
  li(t);
  const [a, ...e] = t.split("");
  let i = true;
  for (let r = e.length - 1; i && r >= 0; r--) {
    const s = n.indexOf(e[r]) + 1;
    s === n.length ? e[r] = n[0] : (e[r] = n[s], i = false);
  }
  if (i) {
    if (a === "Z") return "a" + n[0];
    if (a === "z") return null;
    const r = String.fromCharCode(a.charCodeAt(0) + 1);
    return r > "a" ? e.push(n[0]) : e.pop(), r + e.join("");
  } else return a + e.join("");
}
function Vo(t, n) {
  li(t);
  const [a, ...e] = t.split("");
  let i = true;
  for (let r = e.length - 1; i && r >= 0; r--) {
    const s = n.indexOf(e[r]) - 1;
    s === -1 ? e[r] = n.slice(-1) : (e[r] = n[s], i = false);
  }
  if (i) {
    if (a === "a") return "Z" + n.slice(-1);
    if (a === "A") return null;
    const r = String.fromCharCode(a.charCodeAt(0) - 1);
    return r < "Z" ? e.push(n.slice(-1)) : e.pop(), r + e.join("");
  } else return a + e.join("");
}
function Za(t, n, a = Jo) {
  if (t != null && vr(t, a), n != null && vr(n, a), t != null && n != null && t >= n) throw new Error(t + " >= " + n);
  if (t == null) {
    if (n == null) return "a" + a[0];
    const h = ut(n), f = n.slice(h.length);
    if (h === "A" + a[0].repeat(26)) return h + $e("", f, a);
    if (h < n) return h;
    const l = Vo(h, a);
    if (l == null) throw new Error("cannot decrement any more");
    return l;
  }
  if (n == null) {
    const h = ut(t), f = t.slice(h.length), l = pr(h, a);
    return l ?? h + $e(f, null, a);
  }
  const e = ut(t), i = t.slice(e.length), r = ut(n), s = n.slice(r.length);
  if (e === r) return e + $e(i, s, a);
  const o = pr(e, a);
  if (o == null) throw new Error("cannot increment any more");
  return o < n ? o : e + $e(i, null, a);
}
var Dt = { exports: {} }, en, gr;
function Ko() {
  if (gr) return en;
  gr = 1;
  var t = 1e3, n = t * 60, a = n * 60, e = a * 24, i = e * 7, r = e * 365.25;
  en = function(l, u) {
    u = u || {};
    var c = typeof l;
    if (c === "string" && l.length > 0) return s(l);
    if (c === "number" && isFinite(l)) return u.long ? h(l) : o(l);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(l));
  };
  function s(l) {
    if (l = String(l), !(l.length > 100)) {
      var u = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(l);
      if (u) {
        var c = parseFloat(u[1]), p = (u[2] || "ms").toLowerCase();
        switch (p) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return c * r;
          case "weeks":
          case "week":
          case "w":
            return c * i;
          case "days":
          case "day":
          case "d":
            return c * e;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return c * a;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return c * n;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return c * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return c;
          default:
            return;
        }
      }
    }
  }
  function o(l) {
    var u = Math.abs(l);
    return u >= e ? Math.round(l / e) + "d" : u >= a ? Math.round(l / a) + "h" : u >= n ? Math.round(l / n) + "m" : u >= t ? Math.round(l / t) + "s" : l + "ms";
  }
  function h(l) {
    var u = Math.abs(l);
    return u >= e ? f(l, u, e, "day") : u >= a ? f(l, u, a, "hour") : u >= n ? f(l, u, n, "minute") : u >= t ? f(l, u, t, "second") : l + " ms";
  }
  function f(l, u, c, p) {
    var y = u >= c * 1.5;
    return Math.round(l / c) + " " + p + (y ? "s" : "");
  }
  return en;
}
var tn, mr;
function Xo() {
  if (mr) return tn;
  mr = 1;
  function t(n) {
    e.debug = e, e.default = e, e.coerce = f, e.disable = o, e.enable = r, e.enabled = h, e.humanize = Ko(), e.destroy = l, Object.keys(n).forEach((u) => {
      e[u] = n[u];
    }), e.names = [], e.skips = [], e.formatters = {};
    function a(u) {
      let c = 0;
      for (let p = 0; p < u.length; p++) c = (c << 5) - c + u.charCodeAt(p), c |= 0;
      return e.colors[Math.abs(c) % e.colors.length];
    }
    e.selectColor = a;
    function e(u) {
      let c, p = null, y, A;
      function g(...F) {
        if (!g.enabled) return;
        const C = g, E = Number(/* @__PURE__ */ new Date()), R = E - (c || E);
        C.diff = R, C.prev = c, C.curr = E, c = E, F[0] = e.coerce(F[0]), typeof F[0] != "string" && F.unshift("%O");
        let _ = 0;
        F[0] = F[0].replace(/%([a-zA-Z%])/g, (W, z) => {
          if (W === "%%") return "%";
          _++;
          const K = e.formatters[z];
          if (typeof K == "function") {
            const Q = F[_];
            W = K.call(C, Q), F.splice(_, 1), _--;
          }
          return W;
        }), e.formatArgs.call(C, F), (C.log || e.log).apply(C, F);
      }
      return g.namespace = u, g.useColors = e.useColors(), g.color = e.selectColor(u), g.extend = i, g.destroy = e.destroy, Object.defineProperty(g, "enabled", { enumerable: true, configurable: false, get: () => p !== null ? p : (y !== e.namespaces && (y = e.namespaces, A = e.enabled(u)), A), set: (F) => {
        p = F;
      } }), typeof e.init == "function" && e.init(g), g;
    }
    function i(u, c) {
      const p = e(this.namespace + (typeof c > "u" ? ":" : c) + u);
      return p.log = this.log, p;
    }
    function r(u) {
      e.save(u), e.namespaces = u, e.names = [], e.skips = [];
      const c = (typeof u == "string" ? u : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const p of c) p[0] === "-" ? e.skips.push(p.slice(1)) : e.names.push(p);
    }
    function s(u, c) {
      let p = 0, y = 0, A = -1, g = 0;
      for (; p < u.length; ) if (y < c.length && (c[y] === u[p] || c[y] === "*")) c[y] === "*" ? (A = y, g = p, y++) : (p++, y++);
      else if (A !== -1) y = A + 1, g++, p = g;
      else return false;
      for (; y < c.length && c[y] === "*"; ) y++;
      return y === c.length;
    }
    function o() {
      const u = [...e.names, ...e.skips.map((c) => "-" + c)].join(",");
      return e.enable(""), u;
    }
    function h(u) {
      for (const c of e.skips) if (s(u, c)) return false;
      for (const c of e.names) if (s(u, c)) return true;
      return false;
    }
    function f(u) {
      return u instanceof Error ? u.stack || u.message : u;
    }
    function l() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return e.enable(e.load()), e;
  }
  return tn = t, tn;
}
var yr;
function Go() {
  return yr || (yr = 1, (function(t, n) {
    var a = {};
    n.formatArgs = i, n.save = r, n.load = s, n.useColors = e, n.storage = o(), n.destroy = /* @__PURE__ */ (() => {
      let f = false;
      return () => {
        f || (f = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function e() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
      let f;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (f = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(f[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function i(f) {
      if (f[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + f[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
      const l = "color: " + this.color;
      f.splice(1, 0, l, "color: inherit");
      let u = 0, c = 0;
      f[0].replace(/%[a-zA-Z%]/g, (p) => {
        p !== "%%" && (u++, p === "%c" && (c = u));
      }), f.splice(c, 0, l);
    }
    n.log = console.debug || console.log || (() => {
    });
    function r(f) {
      try {
        f ? n.storage.setItem("debug", f) : n.storage.removeItem("debug");
      } catch {
      }
    }
    function s() {
      let f;
      try {
        f = n.storage.getItem("debug") || n.storage.getItem("DEBUG");
      } catch {
      }
      return !f && typeof process < "u" && "env" in process && (f = a.DEBUG), f;
    }
    function o() {
      try {
        return localStorage;
      } catch {
      }
    }
    t.exports = Xo()(n);
    const { formatters: h } = t.exports;
    h.j = function(f) {
      try {
        return JSON.stringify(f);
      } catch (l) {
        return "[UnexpectedJSONParseError]: " + l.message;
      }
    };
  })(Dt, Dt.exports)), Dt.exports;
}
var $o = Go();
const es = et($o), Qo = /* @__PURE__ */ Symbol(), Hn = /* @__PURE__ */ Symbol(), lt = "a", ci = "f", br = "p", di = "c", hi = "t", zn = "h", ft = "w", Yn = "o", Jn = "k";
let Zo = (t, n) => new Proxy(t, n);
const Nn = Object.getPrototypeOf, Mn = /* @__PURE__ */ new WeakMap(), vi = (t) => t && (Mn.has(t) ? Mn.get(t) : Nn(t) === Object.prototype || Nn(t) === Array.prototype), Bt = (t) => typeof t == "object" && t !== null, ea = (t) => Object.values(Object.getOwnPropertyDescriptors(t)).some((n) => !n.configurable && !n.writable), ta = (t) => {
  if (Array.isArray(t)) return Array.from(t);
  const n = Object.getOwnPropertyDescriptors(t);
  return Object.values(n).forEach((a) => {
    a.configurable = true;
  }), Object.create(Nn(t), n);
}, na = (t, n) => {
  const a = { [ci]: n };
  let e = false;
  const i = (o, h) => {
    if (!e) {
      let f = a[lt].get(t);
      if (f || (f = {}, a[lt].set(t, f)), o === ft) f[ft] = true;
      else {
        let l = f[o];
        l || (l = /* @__PURE__ */ new Set(), f[o] = l), l.add(h);
      }
    }
  }, r = () => {
    e = true, a[lt].delete(t);
  }, s = { get(o, h) {
    return h === Hn ? t : (i(Jn, h), ra(Reflect.get(o, h), a[lt], a[di], a[hi]));
  }, has(o, h) {
    return h === Qo ? (r(), true) : (i(zn, h), Reflect.has(o, h));
  }, getOwnPropertyDescriptor(o, h) {
    return i(Yn, h), Reflect.getOwnPropertyDescriptor(o, h);
  }, ownKeys(o) {
    return i(ft), Reflect.ownKeys(o);
  } };
  return n && (s.set = s.deleteProperty = () => false), [s, a];
}, Vn = (t) => t[Hn] || t, ra = (t, n, a, e) => {
  if (!vi(t)) return t;
  let i = e && e.get(t);
  if (!i) {
    const h = Vn(t);
    ea(h) ? i = [h, ta(h)] : i = [h], e == null ? void 0 : e.set(t, i);
  }
  const [r, s] = i;
  let o = a && a.get(r);
  return (!o || o[1][ci] !== !!s) && (o = na(r, !!s), o[1][br] = Zo(s || r, o[0]), a && a.set(r, o)), o[1][lt] = n, o[1][di] = a, o[1][hi] = e, o[1][br];
}, ia = (t, n) => {
  const a = Reflect.ownKeys(t), e = Reflect.ownKeys(n);
  return a.length !== e.length || a.some((i, r) => i !== e[r]);
}, oa = (t, n, a, e, i = Object.is) => {
  if (i(t, n)) return false;
  if (!Bt(t) || !Bt(n)) return true;
  const r = a.get(Vn(t));
  if (!r) return true;
  if (e) {
    if (e.get(t) === n) return false;
    e.set(t, n);
  }
  let s = null;
  for (const o of r[zn] || []) if (s = Reflect.has(t, o) !== Reflect.has(n, o), s) return s;
  if (r[ft] === true) {
    if (s = ia(t, n), s) return s;
  } else for (const o of r[Yn] || []) {
    const h = !!Reflect.getOwnPropertyDescriptor(t, o), f = !!Reflect.getOwnPropertyDescriptor(n, o);
    if (s = h !== f, s) return s;
  }
  for (const o of r[Jn] || []) if (s = oa(t[o], n[o], a, e, i), s) return s;
  if (s === null) throw new Error("invalid used");
  return s;
}, ts = (t) => vi(t) && t[Hn] || null, ns = (t, n = true) => {
  Mn.set(t, n);
}, rs = (t, n, a) => {
  const e = [], i = /* @__PURE__ */ new WeakSet(), r = (s, o) => {
    var h, f, l;
    if (i.has(s)) return;
    Bt(s) && i.add(s);
    const u = Bt(s) && n.get(Vn(s));
    if (u) {
      if ((h = u[zn]) === null || h === void 0 || h.forEach((c) => {
        const p = `:has(${String(c)})`;
        e.push(o ? [...o, p] : [p]);
      }), u[ft] === true) {
        const c = ":ownKeys";
        e.push(o ? [...o, c] : [c]);
      } else (f = u[Yn]) === null || f === void 0 || f.forEach((c) => {
        const p = `:hasOwn(${String(c)})`;
        e.push(o ? [...o, p] : [p]);
      });
      (l = u[Jn]) === null || l === void 0 || l.forEach((c) => {
        "value" in (Object.getOwnPropertyDescriptor(s, c) || {}) && r(s[c], o ? [...o, c] : [c]);
      });
    } else o && e.push(o);
  };
  return r(t), e;
};
function Rt(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var nn = { exports: {} };
var wr;
function aa() {
  return wr || (wr = 1, (function(t, n) {
    (function(a) {
      t.exports = a();
    })(function() {
      return (function a(e, i, r) {
        function s(f, l) {
          if (!i[f]) {
            if (!e[f]) {
              var u = typeof Rt == "function" && Rt;
              if (!l && u) return u(f, true);
              if (o) return o(f, true);
              var c = new Error("Cannot find module '" + f + "'");
              throw c.code = "MODULE_NOT_FOUND", c;
            }
            var p = i[f] = { exports: {} };
            e[f][0].call(p.exports, function(y) {
              var A = e[f][1][y];
              return s(A || y);
            }, p, p.exports, a, e, i, r);
          }
          return i[f].exports;
        }
        for (var o = typeof Rt == "function" && Rt, h = 0; h < r.length; h++) s(r[h]);
        return s;
      })({ 1: [function(a, e, i) {
        (function(r) {
          var s = r.MutationObserver || r.WebKitMutationObserver, o;
          if (s) {
            var h = 0, f = new s(y), l = r.document.createTextNode("");
            f.observe(l, { characterData: true }), o = function() {
              l.data = h = ++h % 2;
            };
          } else if (!r.setImmediate && typeof r.MessageChannel < "u") {
            var u = new r.MessageChannel();
            u.port1.onmessage = y, o = function() {
              u.port2.postMessage(0);
            };
          } else "document" in r && "onreadystatechange" in r.document.createElement("script") ? o = function() {
            var g = r.document.createElement("script");
            g.onreadystatechange = function() {
              y(), g.onreadystatechange = null, g.parentNode.removeChild(g), g = null;
            }, r.document.documentElement.appendChild(g);
          } : o = function() {
            setTimeout(y, 0);
          };
          var c, p = [];
          function y() {
            c = true;
            for (var g, F, C = p.length; C; ) {
              for (F = p, p = [], g = -1; ++g < C; ) F[g]();
              C = p.length;
            }
            c = false;
          }
          e.exports = A;
          function A(g) {
            p.push(g) === 1 && !c && o();
          }
        }).call(this, typeof Ft < "u" ? Ft : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 2: [function(a, e, i) {
        var r = a(1);
        function s() {
        }
        var o = {}, h = ["REJECTED"], f = ["FULFILLED"], l = ["PENDING"];
        e.exports = u;
        function u(_) {
          if (typeof _ != "function") throw new TypeError("resolver must be a function");
          this.state = l, this.queue = [], this.outcome = void 0, _ !== s && A(this, _);
        }
        u.prototype.catch = function(_) {
          return this.then(null, _);
        }, u.prototype.then = function(_, O) {
          if (typeof _ != "function" && this.state === f || typeof O != "function" && this.state === h) return this;
          var W = new this.constructor(s);
          if (this.state !== l) {
            var z = this.state === f ? _ : O;
            p(W, z, this.outcome);
          } else this.queue.push(new c(W, _, O));
          return W;
        };
        function c(_, O, W) {
          this.promise = _, typeof O == "function" && (this.onFulfilled = O, this.callFulfilled = this.otherCallFulfilled), typeof W == "function" && (this.onRejected = W, this.callRejected = this.otherCallRejected);
        }
        c.prototype.callFulfilled = function(_) {
          o.resolve(this.promise, _);
        }, c.prototype.otherCallFulfilled = function(_) {
          p(this.promise, this.onFulfilled, _);
        }, c.prototype.callRejected = function(_) {
          o.reject(this.promise, _);
        }, c.prototype.otherCallRejected = function(_) {
          p(this.promise, this.onRejected, _);
        };
        function p(_, O, W) {
          r(function() {
            var z;
            try {
              z = O(W);
            } catch (K) {
              return o.reject(_, K);
            }
            z === _ ? o.reject(_, new TypeError("Cannot resolve promise with itself")) : o.resolve(_, z);
          });
        }
        o.resolve = function(_, O) {
          var W = g(y, O);
          if (W.status === "error") return o.reject(_, W.value);
          var z = W.value;
          if (z) A(_, z);
          else {
            _.state = f, _.outcome = O;
            for (var K = -1, Q = _.queue.length; ++K < Q; ) _.queue[K].callFulfilled(O);
          }
          return _;
        }, o.reject = function(_, O) {
          _.state = h, _.outcome = O;
          for (var W = -1, z = _.queue.length; ++W < z; ) _.queue[W].callRejected(O);
          return _;
        };
        function y(_) {
          var O = _ && _.then;
          if (_ && (typeof _ == "object" || typeof _ == "function") && typeof O == "function") return function() {
            O.apply(_, arguments);
          };
        }
        function A(_, O) {
          var W = false;
          function z(ne) {
            W || (W = true, o.reject(_, ne));
          }
          function K(ne) {
            W || (W = true, o.resolve(_, ne));
          }
          function Q() {
            O(K, z);
          }
          var te = g(Q);
          te.status === "error" && z(te.value);
        }
        function g(_, O) {
          var W = {};
          try {
            W.value = _(O), W.status = "success";
          } catch (z) {
            W.status = "error", W.value = z;
          }
          return W;
        }
        u.resolve = F;
        function F(_) {
          return _ instanceof this ? _ : o.resolve(new this(s), _);
        }
        u.reject = C;
        function C(_) {
          var O = new this(s);
          return o.reject(O, _);
        }
        u.all = E;
        function E(_) {
          var O = this;
          if (Object.prototype.toString.call(_) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var W = _.length, z = false;
          if (!W) return this.resolve([]);
          for (var K = new Array(W), Q = 0, te = -1, ne = new this(s); ++te < W; ) ie(_[te], te);
          return ne;
          function ie(se, ce) {
            O.resolve(se).then(Y, function(X) {
              z || (z = true, o.reject(ne, X));
            });
            function Y(X) {
              K[ce] = X, ++Q === W && !z && (z = true, o.resolve(ne, K));
            }
          }
        }
        u.race = R;
        function R(_) {
          var O = this;
          if (Object.prototype.toString.call(_) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var W = _.length, z = false;
          if (!W) return this.resolve([]);
          for (var K = -1, Q = new this(s); ++K < W; ) te(_[K]);
          return Q;
          function te(ne) {
            O.resolve(ne).then(function(ie) {
              z || (z = true, o.resolve(Q, ie));
            }, function(ie) {
              z || (z = true, o.reject(Q, ie));
            });
          }
        }
      }, { 1: 1 }], 3: [function(a, e, i) {
        (function(r) {
          typeof r.Promise != "function" && (r.Promise = a(2));
        }).call(this, typeof Ft < "u" ? Ft : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { 2: 2 }], 4: [function(a, e, i) {
        var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
          return typeof d;
        } : function(d) {
          return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
        };
        function s(d, m) {
          if (!(d instanceof m)) throw new TypeError("Cannot call a class as a function");
        }
        function o() {
          try {
            if (typeof indexedDB < "u") return indexedDB;
            if (typeof webkitIndexedDB < "u") return webkitIndexedDB;
            if (typeof mozIndexedDB < "u") return mozIndexedDB;
            if (typeof OIndexedDB < "u") return OIndexedDB;
            if (typeof msIndexedDB < "u") return msIndexedDB;
          } catch {
            return;
          }
        }
        var h = o();
        function f() {
          try {
            if (!h || !h.open) return false;
            var d = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), m = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
            return (!d || m) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
          } catch {
            return false;
          }
        }
        function l(d, m) {
          d = d || [], m = m || {};
          try {
            return new Blob(d, m);
          } catch (b) {
            if (b.name !== "TypeError") throw b;
            for (var v = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, w = new v(), S = 0; S < d.length; S += 1) w.append(d[S]);
            return w.getBlob(m.type);
          }
        }
        typeof Promise > "u" && a(3);
        var u = Promise;
        function c(d, m) {
          m && d.then(function(v) {
            m(null, v);
          }, function(v) {
            m(v);
          });
        }
        function p(d, m, v) {
          typeof m == "function" && d.then(m), typeof v == "function" && d.catch(v);
        }
        function y(d) {
          return typeof d != "string" && (console.warn(d + " used as a key, but it is not a string."), d = String(d)), d;
        }
        function A() {
          if (arguments.length && typeof arguments[arguments.length - 1] == "function") return arguments[arguments.length - 1];
        }
        var g = "local-forage-detect-blob-support", F = void 0, C = {}, E = Object.prototype.toString, R = "readonly", _ = "readwrite";
        function O(d) {
          for (var m = d.length, v = new ArrayBuffer(m), w = new Uint8Array(v), S = 0; S < m; S++) w[S] = d.charCodeAt(S);
          return v;
        }
        function W(d) {
          return new u(function(m) {
            var v = d.transaction(g, _), w = l([""]);
            v.objectStore(g).put(w, "key"), v.onabort = function(S) {
              S.preventDefault(), S.stopPropagation(), m(false);
            }, v.oncomplete = function() {
              var S = navigator.userAgent.match(/Chrome\/(\d+)/), b = navigator.userAgent.match(/Edge\//);
              m(b || !S || parseInt(S[1], 10) >= 43);
            };
          }).catch(function() {
            return false;
          });
        }
        function z(d) {
          return typeof F == "boolean" ? u.resolve(F) : W(d).then(function(m) {
            return F = m, F;
          });
        }
        function K(d) {
          var m = C[d.name], v = {};
          v.promise = new u(function(w, S) {
            v.resolve = w, v.reject = S;
          }), m.deferredOperations.push(v), m.dbReady ? m.dbReady = m.dbReady.then(function() {
            return v.promise;
          }) : m.dbReady = v.promise;
        }
        function Q(d) {
          var m = C[d.name], v = m.deferredOperations.pop();
          if (v) return v.resolve(), v.promise;
        }
        function te(d, m) {
          var v = C[d.name], w = v.deferredOperations.pop();
          if (w) return w.reject(m), w.promise;
        }
        function ne(d, m) {
          return new u(function(v, w) {
            if (C[d.name] = C[d.name] || Ee(), d.db) if (m) K(d), d.db.close();
            else return v(d.db);
            var S = [d.name];
            m && S.push(d.version);
            var b = h.open.apply(h, S);
            m && (b.onupgradeneeded = function(N) {
              var L = b.result;
              try {
                L.createObjectStore(d.storeName), N.oldVersion <= 1 && L.createObjectStore(g);
              } catch (j) {
                if (j.name === "ConstraintError") console.warn('The database "' + d.name + '" has been upgraded from version ' + N.oldVersion + " to version " + N.newVersion + ', but the storage "' + d.storeName + '" already exists.');
                else throw j;
              }
            }), b.onerror = function(N) {
              N.preventDefault(), w(b.error);
            }, b.onsuccess = function() {
              var N = b.result;
              N.onversionchange = function(L) {
                L.target.close();
              }, v(N), Q(d);
            };
          });
        }
        function ie(d) {
          return ne(d, false);
        }
        function se(d) {
          return ne(d, true);
        }
        function ce(d, m) {
          if (!d.db) return true;
          var v = !d.db.objectStoreNames.contains(d.storeName), w = d.version < d.db.version, S = d.version > d.db.version;
          if (w && (d.version !== m && console.warn('The database "' + d.name + `" can't be downgraded from version ` + d.db.version + " to version " + d.version + "."), d.version = d.db.version), S || v) {
            if (v) {
              var b = d.db.version + 1;
              b > d.version && (d.version = b);
            }
            return true;
          }
          return false;
        }
        function Y(d) {
          return new u(function(m, v) {
            var w = new FileReader();
            w.onerror = v, w.onloadend = function(S) {
              var b = btoa(S.target.result || "");
              m({ __local_forage_encoded_blob: true, data: b, type: d.type });
            }, w.readAsBinaryString(d);
          });
        }
        function X(d) {
          var m = O(atob(d.data));
          return l([m], { type: d.type });
        }
        function $(d) {
          return d && d.__local_forage_encoded_blob;
        }
        function Z(d) {
          var m = this, v = m._initReady().then(function() {
            var w = C[m._dbInfo.name];
            if (w && w.dbReady) return w.dbReady;
          });
          return p(v, d, d), v;
        }
        function ue(d) {
          K(d);
          for (var m = C[d.name], v = m.forages, w = 0; w < v.length; w++) {
            var S = v[w];
            S._dbInfo.db && (S._dbInfo.db.close(), S._dbInfo.db = null);
          }
          return d.db = null, ie(d).then(function(b) {
            return d.db = b, ce(d) ? se(d) : b;
          }).then(function(b) {
            d.db = m.db = b;
            for (var N = 0; N < v.length; N++) v[N]._dbInfo.db = b;
          }).catch(function(b) {
            throw te(d, b), b;
          });
        }
        function pe(d, m, v, w) {
          w === void 0 && (w = 1);
          try {
            var S = d.db.transaction(d.storeName, m);
            v(null, S);
          } catch (b) {
            if (w > 0 && (!d.db || b.name === "InvalidStateError" || b.name === "NotFoundError")) return u.resolve().then(function() {
              if (!d.db || b.name === "NotFoundError" && !d.db.objectStoreNames.contains(d.storeName) && d.version <= d.db.version) return d.db && (d.version = d.db.version + 1), se(d);
            }).then(function() {
              return ue(d).then(function() {
                pe(d, m, v, w - 1);
              });
            }).catch(v);
            v(b);
          }
        }
        function Ee() {
          return { forages: [], db: null, dbReady: null, deferredOperations: [] };
        }
        function Ue(d) {
          var m = this, v = { db: null };
          if (d) for (var w in d) v[w] = d[w];
          var S = C[v.name];
          S || (S = Ee(), C[v.name] = S), S.forages.push(m), m._initReady || (m._initReady = m.ready, m.ready = Z);
          var b = [];
          function N() {
            return u.resolve();
          }
          for (var L = 0; L < S.forages.length; L++) {
            var j = S.forages[L];
            j !== m && b.push(j._initReady().catch(N));
          }
          var H = S.forages.slice(0);
          return u.all(b).then(function() {
            return v.db = S.db, ie(v);
          }).then(function(J) {
            return v.db = J, ce(v, m._defaultConfig.version) ? se(v) : J;
          }).then(function(J) {
            v.db = S.db = J, m._dbInfo = v;
            for (var G = 0; G < H.length; G++) {
              var re = H[G];
              re !== m && (re._dbInfo.db = v.db, re._dbInfo.version = v.version);
            }
          });
        }
        function me(d, m) {
          var v = this;
          d = y(d);
          var w = new u(function(S, b) {
            v.ready().then(function() {
              pe(v._dbInfo, R, function(N, L) {
                if (N) return b(N);
                try {
                  var j = L.objectStore(v._dbInfo.storeName), H = j.get(d);
                  H.onsuccess = function() {
                    var J = H.result;
                    J === void 0 && (J = null), $(J) && (J = X(J)), S(J);
                  }, H.onerror = function() {
                    b(H.error);
                  };
                } catch (J) {
                  b(J);
                }
              });
            }).catch(b);
          });
          return c(w, m), w;
        }
        function Ne(d, m) {
          var v = this, w = new u(function(S, b) {
            v.ready().then(function() {
              pe(v._dbInfo, R, function(N, L) {
                if (N) return b(N);
                try {
                  var j = L.objectStore(v._dbInfo.storeName), H = j.openCursor(), J = 1;
                  H.onsuccess = function() {
                    var G = H.result;
                    if (G) {
                      var re = G.value;
                      $(re) && (re = X(re));
                      var oe = d(re, G.key, J++);
                      oe !== void 0 ? S(oe) : G.continue();
                    } else S();
                  }, H.onerror = function() {
                    b(H.error);
                  };
                } catch (G) {
                  b(G);
                }
              });
            }).catch(b);
          });
          return c(w, m), w;
        }
        function vt(d, m, v) {
          var w = this;
          d = y(d);
          var S = new u(function(b, N) {
            var L;
            w.ready().then(function() {
              return L = w._dbInfo, E.call(m) === "[object Blob]" ? z(L.db).then(function(j) {
                return j ? m : Y(m);
              }) : m;
            }).then(function(j) {
              pe(w._dbInfo, _, function(H, J) {
                if (H) return N(H);
                try {
                  var G = J.objectStore(w._dbInfo.storeName);
                  j === null && (j = void 0);
                  var re = G.put(j, d);
                  J.oncomplete = function() {
                    j === void 0 && (j = null), b(j);
                  }, J.onabort = J.onerror = function() {
                    var oe = re.error ? re.error : re.transaction.error;
                    N(oe);
                  };
                } catch (oe) {
                  N(oe);
                }
              });
            }).catch(N);
          });
          return c(S, v), S;
        }
        function pt(d, m) {
          var v = this;
          d = y(d);
          var w = new u(function(S, b) {
            v.ready().then(function() {
              pe(v._dbInfo, _, function(N, L) {
                if (N) return b(N);
                try {
                  var j = L.objectStore(v._dbInfo.storeName), H = j.delete(d);
                  L.oncomplete = function() {
                    S();
                  }, L.onerror = function() {
                    b(H.error);
                  }, L.onabort = function() {
                    var J = H.error ? H.error : H.transaction.error;
                    b(J);
                  };
                } catch (J) {
                  b(J);
                }
              });
            }).catch(b);
          });
          return c(w, m), w;
        }
        function gt(d) {
          var m = this, v = new u(function(w, S) {
            m.ready().then(function() {
              pe(m._dbInfo, _, function(b, N) {
                if (b) return S(b);
                try {
                  var L = N.objectStore(m._dbInfo.storeName), j = L.clear();
                  N.oncomplete = function() {
                    w();
                  }, N.onabort = N.onerror = function() {
                    var H = j.error ? j.error : j.transaction.error;
                    S(H);
                  };
                } catch (H) {
                  S(H);
                }
              });
            }).catch(S);
          });
          return c(v, d), v;
        }
        function zt(d) {
          var m = this, v = new u(function(w, S) {
            m.ready().then(function() {
              pe(m._dbInfo, R, function(b, N) {
                if (b) return S(b);
                try {
                  var L = N.objectStore(m._dbInfo.storeName), j = L.count();
                  j.onsuccess = function() {
                    w(j.result);
                  }, j.onerror = function() {
                    S(j.error);
                  };
                } catch (H) {
                  S(H);
                }
              });
            }).catch(S);
          });
          return c(v, d), v;
        }
        function Yt(d, m) {
          var v = this, w = new u(function(S, b) {
            if (d < 0) {
              S(null);
              return;
            }
            v.ready().then(function() {
              pe(v._dbInfo, R, function(N, L) {
                if (N) return b(N);
                try {
                  var j = L.objectStore(v._dbInfo.storeName), H = false, J = j.openKeyCursor();
                  J.onsuccess = function() {
                    var G = J.result;
                    if (!G) {
                      S(null);
                      return;
                    }
                    d === 0 || H ? S(G.key) : (H = true, G.advance(d));
                  }, J.onerror = function() {
                    b(J.error);
                  };
                } catch (G) {
                  b(G);
                }
              });
            }).catch(b);
          });
          return c(w, m), w;
        }
        function mt(d) {
          var m = this, v = new u(function(w, S) {
            m.ready().then(function() {
              pe(m._dbInfo, R, function(b, N) {
                if (b) return S(b);
                try {
                  var L = N.objectStore(m._dbInfo.storeName), j = L.openKeyCursor(), H = [];
                  j.onsuccess = function() {
                    var J = j.result;
                    if (!J) {
                      w(H);
                      return;
                    }
                    H.push(J.key), J.continue();
                  }, j.onerror = function() {
                    S(j.error);
                  };
                } catch (J) {
                  S(J);
                }
              });
            }).catch(S);
          });
          return c(v, d), v;
        }
        function Ye(d, m) {
          m = A.apply(this, arguments);
          var v = this.config();
          d = typeof d != "function" && d || {}, d.name || (d.name = d.name || v.name, d.storeName = d.storeName || v.storeName);
          var w = this, S;
          if (!d.name) S = u.reject("Invalid arguments");
          else {
            var b = d.name === v.name && w._dbInfo.db, N = b ? u.resolve(w._dbInfo.db) : ie(d).then(function(L) {
              var j = C[d.name], H = j.forages;
              j.db = L;
              for (var J = 0; J < H.length; J++) H[J]._dbInfo.db = L;
              return L;
            });
            d.storeName ? S = N.then(function(L) {
              if (L.objectStoreNames.contains(d.storeName)) {
                var j = L.version + 1;
                K(d);
                var H = C[d.name], J = H.forages;
                L.close();
                for (var G = 0; G < J.length; G++) {
                  var re = J[G];
                  re._dbInfo.db = null, re._dbInfo.version = j;
                }
                var oe = new u(function(ae, ve) {
                  var he = h.open(d.name, j);
                  he.onerror = function(Se) {
                    var st = he.result;
                    st.close(), ve(Se);
                  }, he.onupgradeneeded = function() {
                    var Se = he.result;
                    Se.deleteObjectStore(d.storeName);
                  }, he.onsuccess = function() {
                    var Se = he.result;
                    Se.close(), ae(Se);
                  };
                });
                return oe.then(function(ae) {
                  H.db = ae;
                  for (var ve = 0; ve < J.length; ve++) {
                    var he = J[ve];
                    he._dbInfo.db = ae, Q(he._dbInfo);
                  }
                }).catch(function(ae) {
                  throw (te(d, ae) || u.resolve()).catch(function() {
                  }), ae;
                });
              }
            }) : S = N.then(function(L) {
              K(d);
              var j = C[d.name], H = j.forages;
              L.close();
              for (var J = 0; J < H.length; J++) {
                var G = H[J];
                G._dbInfo.db = null;
              }
              var re = new u(function(oe, ae) {
                var ve = h.deleteDatabase(d.name);
                ve.onerror = function() {
                  var he = ve.result;
                  he && he.close(), ae(ve.error);
                }, ve.onblocked = function() {
                  console.warn('dropInstance blocked for database "' + d.name + '" until all open connections are closed');
                }, ve.onsuccess = function() {
                  var he = ve.result;
                  he && he.close(), oe(he);
                };
              });
              return re.then(function(oe) {
                j.db = oe;
                for (var ae = 0; ae < H.length; ae++) {
                  var ve = H[ae];
                  Q(ve._dbInfo);
                }
              }).catch(function(oe) {
                throw (te(d, oe) || u.resolve()).catch(function() {
                }), oe;
              });
            });
          }
          return c(S, m), S;
        }
        var yt = { _driver: "asyncStorage", _initStorage: Ue, _support: f(), iterate: Ne, getItem: me, setItem: vt, removeItem: pt, clear: gt, length: zt, key: Yt, keys: mt, dropInstance: Ye };
        function Ke() {
          return typeof openDatabase == "function";
        }
        var fe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ye = "~~local_forage_type~", ge = /^~~local_forage_type~([^~]+)~/, de = "__lfsc__:", _e = de.length, le = "arbf", rt = "blob", bt = "si08", it = "ui08", Ce = "uic8", wt = "si16", At = "si32", _t = "ur16", Ct = "ui32", ot = "fl32", Me = "fl64", D = _e + le.length, x = Object.prototype.toString;
        function T(d) {
          var m = d.length * 0.75, v = d.length, w, S = 0, b, N, L, j;
          d[d.length - 1] === "=" && (m--, d[d.length - 2] === "=" && m--);
          var H = new ArrayBuffer(m), J = new Uint8Array(H);
          for (w = 0; w < v; w += 4) b = fe.indexOf(d[w]), N = fe.indexOf(d[w + 1]), L = fe.indexOf(d[w + 2]), j = fe.indexOf(d[w + 3]), J[S++] = b << 2 | N >> 4, J[S++] = (N & 15) << 4 | L >> 2, J[S++] = (L & 3) << 6 | j & 63;
          return H;
        }
        function q(d) {
          var m = new Uint8Array(d), v = "", w;
          for (w = 0; w < m.length; w += 3) v += fe[m[w] >> 2], v += fe[(m[w] & 3) << 4 | m[w + 1] >> 4], v += fe[(m[w + 1] & 15) << 2 | m[w + 2] >> 6], v += fe[m[w + 2] & 63];
          return m.length % 3 === 2 ? v = v.substring(0, v.length - 1) + "=" : m.length % 3 === 1 && (v = v.substring(0, v.length - 2) + "=="), v;
        }
        function V(d, m) {
          var v = "";
          if (d && (v = x.call(d)), d && (v === "[object ArrayBuffer]" || d.buffer && x.call(d.buffer) === "[object ArrayBuffer]")) {
            var w, S = de;
            d instanceof ArrayBuffer ? (w = d, S += le) : (w = d.buffer, v === "[object Int8Array]" ? S += bt : v === "[object Uint8Array]" ? S += it : v === "[object Uint8ClampedArray]" ? S += Ce : v === "[object Int16Array]" ? S += wt : v === "[object Uint16Array]" ? S += _t : v === "[object Int32Array]" ? S += At : v === "[object Uint32Array]" ? S += Ct : v === "[object Float32Array]" ? S += ot : v === "[object Float64Array]" ? S += Me : m(new Error("Failed to get type for BinaryArray"))), m(S + q(w));
          } else if (v === "[object Blob]") {
            var b = new FileReader();
            b.onload = function() {
              var N = ye + d.type + "~" + q(this.result);
              m(de + rt + N);
            }, b.readAsArrayBuffer(d);
          } else try {
            m(JSON.stringify(d));
          } catch (N) {
            console.error("Couldn't convert value into a JSON string: ", d), m(null, N);
          }
        }
        function k(d) {
          if (d.substring(0, _e) !== de) return JSON.parse(d);
          var m = d.substring(D), v = d.substring(_e, D), w;
          if (v === rt && ge.test(m)) {
            var S = m.match(ge);
            w = S[1], m = m.substring(S[0].length);
          }
          var b = T(m);
          switch (v) {
            case le:
              return b;
            case rt:
              return l([b], { type: w });
            case bt:
              return new Int8Array(b);
            case it:
              return new Uint8Array(b);
            case Ce:
              return new Uint8ClampedArray(b);
            case wt:
              return new Int16Array(b);
            case _t:
              return new Uint16Array(b);
            case At:
              return new Int32Array(b);
            case Ct:
              return new Uint32Array(b);
            case ot:
              return new Float32Array(b);
            case Me:
              return new Float64Array(b);
            default:
              throw new Error("Unkown type: " + v);
          }
        }
        var ee = { serialize: V, deserialize: k, stringToBuffer: T, bufferToString: q };
        function P(d, m, v, w) {
          d.executeSql("CREATE TABLE IF NOT EXISTS " + m.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], v, w);
        }
        function I(d) {
          var m = this, v = { db: null };
          if (d) for (var w in d) v[w] = typeof d[w] != "string" ? d[w].toString() : d[w];
          var S = new u(function(b, N) {
            try {
              v.db = openDatabase(v.name, String(v.version), v.description, v.size);
            } catch (L) {
              return N(L);
            }
            v.db.transaction(function(L) {
              P(L, v, function() {
                m._dbInfo = v, b();
              }, function(j, H) {
                N(H);
              });
            }, N);
          });
          return v.serializer = ee, S;
        }
        function B(d, m, v, w, S, b) {
          d.executeSql(v, w, S, function(N, L) {
            L.code === L.SYNTAX_ERR ? N.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [m.storeName], function(j, H) {
              H.rows.length ? b(j, L) : P(j, m, function() {
                j.executeSql(v, w, S, b);
              }, b);
            }, b) : b(N, L);
          }, b);
        }
        function M(d, m) {
          var v = this;
          d = y(d);
          var w = new u(function(S, b) {
            v.ready().then(function() {
              var N = v._dbInfo;
              N.db.transaction(function(L) {
                B(L, N, "SELECT * FROM " + N.storeName + " WHERE key = ? LIMIT 1", [d], function(j, H) {
                  var J = H.rows.length ? H.rows.item(0).value : null;
                  J && (J = N.serializer.deserialize(J)), S(J);
                }, function(j, H) {
                  b(H);
                });
              });
            }).catch(b);
          });
          return c(w, m), w;
        }
        function U(d, m) {
          var v = this, w = new u(function(S, b) {
            v.ready().then(function() {
              var N = v._dbInfo;
              N.db.transaction(function(L) {
                B(L, N, "SELECT * FROM " + N.storeName, [], function(j, H) {
                  for (var J = H.rows, G = J.length, re = 0; re < G; re++) {
                    var oe = J.item(re), ae = oe.value;
                    if (ae && (ae = N.serializer.deserialize(ae)), ae = d(ae, oe.key, re + 1), ae !== void 0) {
                      S(ae);
                      return;
                    }
                  }
                  S();
                }, function(j, H) {
                  b(H);
                });
              });
            }).catch(b);
          });
          return c(w, m), w;
        }
        function Be(d, m, v, w) {
          var S = this;
          d = y(d);
          var b = new u(function(N, L) {
            S.ready().then(function() {
              m === void 0 && (m = null);
              var j = m, H = S._dbInfo;
              H.serializer.serialize(m, function(J, G) {
                G ? L(G) : H.db.transaction(function(re) {
                  B(re, H, "INSERT OR REPLACE INTO " + H.storeName + " (key, value) VALUES (?, ?)", [d, J], function() {
                    N(j);
                  }, function(oe, ae) {
                    L(ae);
                  });
                }, function(re) {
                  if (re.code === re.QUOTA_ERR) {
                    if (w > 0) {
                      N(Be.apply(S, [d, j, v, w - 1]));
                      return;
                    }
                    L(re);
                  }
                });
              });
            }).catch(L);
          });
          return c(b, v), b;
        }
        function Oe(d, m, v) {
          return Be.apply(this, [d, m, v, 1]);
        }
        function je(d, m) {
          var v = this;
          d = y(d);
          var w = new u(function(S, b) {
            v.ready().then(function() {
              var N = v._dbInfo;
              N.db.transaction(function(L) {
                B(L, N, "DELETE FROM " + N.storeName + " WHERE key = ?", [d], function() {
                  S();
                }, function(j, H) {
                  b(H);
                });
              });
            }).catch(b);
          });
          return c(w, m), w;
        }
        function De(d) {
          var m = this, v = new u(function(w, S) {
            m.ready().then(function() {
              var b = m._dbInfo;
              b.db.transaction(function(N) {
                B(N, b, "DELETE FROM " + b.storeName, [], function() {
                  w();
                }, function(L, j) {
                  S(j);
                });
              });
            }).catch(S);
          });
          return c(v, d), v;
        }
        function Re(d) {
          var m = this, v = new u(function(w, S) {
            m.ready().then(function() {
              var b = m._dbInfo;
              b.db.transaction(function(N) {
                B(N, b, "SELECT COUNT(key) as c FROM " + b.storeName, [], function(L, j) {
                  var H = j.rows.item(0).c;
                  w(H);
                }, function(L, j) {
                  S(j);
                });
              });
            }).catch(S);
          });
          return c(v, d), v;
        }
        function gi(d, m) {
          var v = this, w = new u(function(S, b) {
            v.ready().then(function() {
              var N = v._dbInfo;
              N.db.transaction(function(L) {
                B(L, N, "SELECT key FROM " + N.storeName + " WHERE id = ? LIMIT 1", [d + 1], function(j, H) {
                  var J = H.rows.length ? H.rows.item(0).key : null;
                  S(J);
                }, function(j, H) {
                  b(H);
                });
              });
            }).catch(b);
          });
          return c(w, m), w;
        }
        function mi(d) {
          var m = this, v = new u(function(w, S) {
            m.ready().then(function() {
              var b = m._dbInfo;
              b.db.transaction(function(N) {
                B(N, b, "SELECT key FROM " + b.storeName, [], function(L, j) {
                  for (var H = [], J = 0; J < j.rows.length; J++) H.push(j.rows.item(J).key);
                  w(H);
                }, function(L, j) {
                  S(j);
                });
              });
            }).catch(S);
          });
          return c(v, d), v;
        }
        function yi(d) {
          return new u(function(m, v) {
            d.transaction(function(w) {
              w.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(S, b) {
                for (var N = [], L = 0; L < b.rows.length; L++) N.push(b.rows.item(L).name);
                m({ db: d, storeNames: N });
              }, function(S, b) {
                v(b);
              });
            }, function(w) {
              v(w);
            });
          });
        }
        function bi(d, m) {
          m = A.apply(this, arguments);
          var v = this.config();
          d = typeof d != "function" && d || {}, d.name || (d.name = d.name || v.name, d.storeName = d.storeName || v.storeName);
          var w = this, S;
          return d.name ? S = new u(function(b) {
            var N;
            d.name === v.name ? N = w._dbInfo.db : N = openDatabase(d.name, "", "", 0), d.storeName ? b({ db: N, storeNames: [d.storeName] }) : b(yi(N));
          }).then(function(b) {
            return new u(function(N, L) {
              b.db.transaction(function(j) {
                function H(oe) {
                  return new u(function(ae, ve) {
                    j.executeSql("DROP TABLE IF EXISTS " + oe, [], function() {
                      ae();
                    }, function(he, Se) {
                      ve(Se);
                    });
                  });
                }
                for (var J = [], G = 0, re = b.storeNames.length; G < re; G++) J.push(H(b.storeNames[G]));
                u.all(J).then(function() {
                  N();
                }).catch(function(oe) {
                  L(oe);
                });
              }, function(j) {
                L(j);
              });
            });
          }) : S = u.reject("Invalid arguments"), c(S, m), S;
        }
        var wi = { _driver: "webSQLStorage", _initStorage: I, _support: Ke(), iterate: U, getItem: M, setItem: Oe, removeItem: je, clear: De, length: Re, key: gi, keys: mi, dropInstance: bi };
        function Ai() {
          try {
            return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
          } catch {
            return false;
          }
        }
        function $n(d, m) {
          var v = d.name + "/";
          return d.storeName !== m.storeName && (v += d.storeName + "/"), v;
        }
        function _i() {
          var d = "_localforage_support_test";
          try {
            return localStorage.setItem(d, true), localStorage.removeItem(d), false;
          } catch {
            return true;
          }
        }
        function Ci() {
          return !_i() || localStorage.length > 0;
        }
        function Si(d) {
          var m = this, v = {};
          if (d) for (var w in d) v[w] = d[w];
          return v.keyPrefix = $n(d, m._defaultConfig), Ci() ? (m._dbInfo = v, v.serializer = ee, u.resolve()) : u.reject();
        }
        function Fi(d) {
          var m = this, v = m.ready().then(function() {
            for (var w = m._dbInfo.keyPrefix, S = localStorage.length - 1; S >= 0; S--) {
              var b = localStorage.key(S);
              b.indexOf(w) === 0 && localStorage.removeItem(b);
            }
          });
          return c(v, d), v;
        }
        function xi(d, m) {
          var v = this;
          d = y(d);
          var w = v.ready().then(function() {
            var S = v._dbInfo, b = localStorage.getItem(S.keyPrefix + d);
            return b && (b = S.serializer.deserialize(b)), b;
          });
          return c(w, m), w;
        }
        function Ei(d, m) {
          var v = this, w = v.ready().then(function() {
            for (var S = v._dbInfo, b = S.keyPrefix, N = b.length, L = localStorage.length, j = 1, H = 0; H < L; H++) {
              var J = localStorage.key(H);
              if (J.indexOf(b) === 0) {
                var G = localStorage.getItem(J);
                if (G && (G = S.serializer.deserialize(G)), G = d(G, J.substring(N), j++), G !== void 0) return G;
              }
            }
          });
          return c(w, m), w;
        }
        function Oi(d, m) {
          var v = this, w = v.ready().then(function() {
            var S = v._dbInfo, b;
            try {
              b = localStorage.key(d);
            } catch {
              b = null;
            }
            return b && (b = b.substring(S.keyPrefix.length)), b;
          });
          return c(w, m), w;
        }
        function Di(d) {
          var m = this, v = m.ready().then(function() {
            for (var w = m._dbInfo, S = localStorage.length, b = [], N = 0; N < S; N++) {
              var L = localStorage.key(N);
              L.indexOf(w.keyPrefix) === 0 && b.push(L.substring(w.keyPrefix.length));
            }
            return b;
          });
          return c(v, d), v;
        }
        function Ri(d) {
          var m = this, v = m.keys().then(function(w) {
            return w.length;
          });
          return c(v, d), v;
        }
        function Ti(d, m) {
          var v = this;
          d = y(d);
          var w = v.ready().then(function() {
            var S = v._dbInfo;
            localStorage.removeItem(S.keyPrefix + d);
          });
          return c(w, m), w;
        }
        function Pi(d, m, v) {
          var w = this;
          d = y(d);
          var S = w.ready().then(function() {
            m === void 0 && (m = null);
            var b = m;
            return new u(function(N, L) {
              var j = w._dbInfo;
              j.serializer.serialize(m, function(H, J) {
                if (J) L(J);
                else try {
                  localStorage.setItem(j.keyPrefix + d, H), N(b);
                } catch (G) {
                  (G.name === "QuotaExceededError" || G.name === "NS_ERROR_DOM_QUOTA_REACHED") && L(G), L(G);
                }
              });
            });
          });
          return c(S, v), S;
        }
        function ki(d, m) {
          if (m = A.apply(this, arguments), d = typeof d != "function" && d || {}, !d.name) {
            var v = this.config();
            d.name = d.name || v.name, d.storeName = d.storeName || v.storeName;
          }
          var w = this, S;
          return d.name ? S = new u(function(b) {
            d.storeName ? b($n(d, w._defaultConfig)) : b(d.name + "/");
          }).then(function(b) {
            for (var N = localStorage.length - 1; N >= 0; N--) {
              var L = localStorage.key(N);
              L.indexOf(b) === 0 && localStorage.removeItem(L);
            }
          }) : S = u.reject("Invalid arguments"), c(S, m), S;
        }
        var Ii = { _driver: "localStorageWrapper", _initStorage: Si, _support: Ai(), iterate: Ei, getItem: xi, setItem: Pi, removeItem: Ti, clear: Fi, length: Ri, key: Oi, keys: Di, dropInstance: ki }, Ni = function(m, v) {
          return m === v || typeof m == "number" && typeof v == "number" && isNaN(m) && isNaN(v);
        }, Mi = function(m, v) {
          for (var w = m.length, S = 0; S < w; ) {
            if (Ni(m[S], v)) return true;
            S++;
          }
          return false;
        }, Qn = Array.isArray || function(d) {
          return Object.prototype.toString.call(d) === "[object Array]";
        }, at = {}, Zn = {}, Xe = { INDEXEDDB: yt, WEBSQL: wi, LOCALSTORAGE: Ii }, Bi = [Xe.INDEXEDDB._driver, Xe.WEBSQL._driver, Xe.LOCALSTORAGE._driver], St = ["dropInstance"], Jt = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(St), Wi = { description: "", driver: Bi.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 };
        function Li(d, m) {
          d[m] = function() {
            var v = arguments;
            return d.ready().then(function() {
              return d[m].apply(d, v);
            });
          };
        }
        function Vt() {
          for (var d = 1; d < arguments.length; d++) {
            var m = arguments[d];
            if (m) for (var v in m) m.hasOwnProperty(v) && (Qn(m[v]) ? arguments[0][v] = m[v].slice() : arguments[0][v] = m[v]);
          }
          return arguments[0];
        }
        var qi = (function() {
          function d(m) {
            s(this, d);
            for (var v in Xe) if (Xe.hasOwnProperty(v)) {
              var w = Xe[v], S = w._driver;
              this[v] = S, at[S] || this.defineDriver(w);
            }
            this._defaultConfig = Vt({}, Wi), this._config = Vt({}, this._defaultConfig, m), this._driverSet = null, this._initDriver = null, this._ready = false, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
            });
          }
          return d.prototype.config = function(v) {
            if ((typeof v > "u" ? "undefined" : r(v)) === "object") {
              if (this._ready) return new Error("Can't call config() after localforage has been used.");
              for (var w in v) {
                if (w === "storeName" && (v[w] = v[w].replace(/\W/g, "_")), w === "version" && typeof v[w] != "number") return new Error("Database version must be a number.");
                this._config[w] = v[w];
              }
              return "driver" in v && v.driver ? this.setDriver(this._config.driver) : true;
            } else return typeof v == "string" ? this._config[v] : this._config;
          }, d.prototype.defineDriver = function(v, w, S) {
            var b = new u(function(N, L) {
              try {
                var j = v._driver, H = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                if (!v._driver) {
                  L(H);
                  return;
                }
                for (var J = Jt.concat("_initStorage"), G = 0, re = J.length; G < re; G++) {
                  var oe = J[G], ae = !Mi(St, oe);
                  if ((ae || v[oe]) && typeof v[oe] != "function") {
                    L(H);
                    return;
                  }
                }
                var ve = function() {
                  for (var st = function(Hi) {
                    return function() {
                      var zi = new Error("Method " + Hi + " is not implemented by the current driver"), er = u.reject(zi);
                      return c(er, arguments[arguments.length - 1]), er;
                    };
                  }, Kt = 0, ji = St.length; Kt < ji; Kt++) {
                    var Xt = St[Kt];
                    v[Xt] || (v[Xt] = st(Xt));
                  }
                };
                ve();
                var he = function(st) {
                  at[j] && console.info("Redefining LocalForage driver: " + j), at[j] = v, Zn[j] = st, N();
                };
                "_support" in v ? v._support && typeof v._support == "function" ? v._support().then(he, L) : he(!!v._support) : he(true);
              } catch (Se) {
                L(Se);
              }
            });
            return p(b, w, S), b;
          }, d.prototype.driver = function() {
            return this._driver || null;
          }, d.prototype.getDriver = function(v, w, S) {
            var b = at[v] ? u.resolve(at[v]) : u.reject(new Error("Driver not found."));
            return p(b, w, S), b;
          }, d.prototype.getSerializer = function(v) {
            var w = u.resolve(ee);
            return p(w, v), w;
          }, d.prototype.ready = function(v) {
            var w = this, S = w._driverSet.then(function() {
              return w._ready === null && (w._ready = w._initDriver()), w._ready;
            });
            return p(S, v, v), S;
          }, d.prototype.setDriver = function(v, w, S) {
            var b = this;
            Qn(v) || (v = [v]);
            var N = this._getSupportedDrivers(v);
            function L() {
              b._config.driver = b.driver();
            }
            function j(G) {
              return b._extend(G), L(), b._ready = b._initStorage(b._config), b._ready;
            }
            function H(G) {
              return function() {
                var re = 0;
                function oe() {
                  for (; re < G.length; ) {
                    var ae = G[re];
                    return re++, b._dbInfo = null, b._ready = null, b.getDriver(ae).then(j).catch(oe);
                  }
                  L();
                  var ve = new Error("No available storage method found.");
                  return b._driverSet = u.reject(ve), b._driverSet;
                }
                return oe();
              };
            }
            var J = this._driverSet !== null ? this._driverSet.catch(function() {
              return u.resolve();
            }) : u.resolve();
            return this._driverSet = J.then(function() {
              var G = N[0];
              return b._dbInfo = null, b._ready = null, b.getDriver(G).then(function(re) {
                b._driver = re._driver, L(), b._wrapLibraryMethodsWithReady(), b._initDriver = H(N);
              });
            }).catch(function() {
              L();
              var G = new Error("No available storage method found.");
              return b._driverSet = u.reject(G), b._driverSet;
            }), p(this._driverSet, w, S), this._driverSet;
          }, d.prototype.supports = function(v) {
            return !!Zn[v];
          }, d.prototype._extend = function(v) {
            Vt(this, v);
          }, d.prototype._getSupportedDrivers = function(v) {
            for (var w = [], S = 0, b = v.length; S < b; S++) {
              var N = v[S];
              this.supports(N) && w.push(N);
            }
            return w;
          }, d.prototype._wrapLibraryMethodsWithReady = function() {
            for (var v = 0, w = Jt.length; v < w; v++) Li(this, Jt[v]);
          }, d.prototype.createInstance = function(v) {
            return new d(v);
          }, d;
        })(), Ui = new qi();
        e.exports = Ui;
      }, { 3: 3 }] }, {}, [4])(4);
    });
  })(nn)), nn.exports;
}
var sa = aa();
const is = et(sa);
var rn = {}, Ar;
function pi() {
  return Ar || (Ar = 1, (function(t) {
    (function(n) {
      n(typeof DO_NOT_EXPORT_CRC > "u" ? t : {});
    })(function(n) {
      n.version = "0.3.0";
      function a() {
        for (var f = 0, l = new Array(256), u = 0; u != 256; ++u) f = u, f = f & 1 ? -306674912 ^ f >>> 1 : f >>> 1, f = f & 1 ? -306674912 ^ f >>> 1 : f >>> 1, f = f & 1 ? -306674912 ^ f >>> 1 : f >>> 1, f = f & 1 ? -306674912 ^ f >>> 1 : f >>> 1, f = f & 1 ? -306674912 ^ f >>> 1 : f >>> 1, f = f & 1 ? -306674912 ^ f >>> 1 : f >>> 1, f = f & 1 ? -306674912 ^ f >>> 1 : f >>> 1, f = f & 1 ? -306674912 ^ f >>> 1 : f >>> 1, l[u] = f;
        return typeof Int32Array < "u" ? new Int32Array(l) : l;
      }
      var e = a(), i = typeof Buffer < "u";
      function r(f) {
        if (f.length > 32768 && i) return o(new Buffer(f));
        for (var l = -1, u = f.length - 1, c = 0; c < u; ) l = e[(l ^ f.charCodeAt(c++)) & 255] ^ l >>> 8, l = e[(l ^ f.charCodeAt(c++)) & 255] ^ l >>> 8;
        return c === u && (l = l >>> 8 ^ e[(l ^ f.charCodeAt(c)) & 255]), l ^ -1;
      }
      function s(f) {
        if (f.length > 1e4) return o(f);
        for (var l = -1, u = 0, c = f.length - 3; u < c; ) l = l >>> 8 ^ e[(l ^ f[u++]) & 255], l = l >>> 8 ^ e[(l ^ f[u++]) & 255], l = l >>> 8 ^ e[(l ^ f[u++]) & 255], l = l >>> 8 ^ e[(l ^ f[u++]) & 255];
        for (; u < c + 3; ) l = l >>> 8 ^ e[(l ^ f[u++]) & 255];
        return l ^ -1;
      }
      function o(f) {
        for (var l = -1, u = 0, c = f.length - 7; u < c; ) l = l >>> 8 ^ e[(l ^ f[u++]) & 255], l = l >>> 8 ^ e[(l ^ f[u++]) & 255], l = l >>> 8 ^ e[(l ^ f[u++]) & 255], l = l >>> 8 ^ e[(l ^ f[u++]) & 255], l = l >>> 8 ^ e[(l ^ f[u++]) & 255], l = l >>> 8 ^ e[(l ^ f[u++]) & 255], l = l >>> 8 ^ e[(l ^ f[u++]) & 255], l = l >>> 8 ^ e[(l ^ f[u++]) & 255];
        for (; u < c + 7; ) l = l >>> 8 ^ e[(l ^ f[u++]) & 255];
        return l ^ -1;
      }
      function h(f) {
        for (var l = -1, u = 0, c = f.length, p, y; u < c; ) p = f.charCodeAt(u++), p < 128 ? l = l >>> 8 ^ e[(l ^ p) & 255] : p < 2048 ? (l = l >>> 8 ^ e[(l ^ (192 | p >> 6 & 31)) & 255], l = l >>> 8 ^ e[(l ^ (128 | p & 63)) & 255]) : p >= 55296 && p < 57344 ? (p = (p & 1023) + 64, y = f.charCodeAt(u++) & 1023, l = l >>> 8 ^ e[(l ^ (240 | p >> 8 & 7)) & 255], l = l >>> 8 ^ e[(l ^ (128 | p >> 2 & 63)) & 255], l = l >>> 8 ^ e[(l ^ (128 | y >> 6 & 15 | p & 3)) & 255], l = l >>> 8 ^ e[(l ^ (128 | y & 63)) & 255]) : (l = l >>> 8 ^ e[(l ^ (224 | p >> 12 & 15)) & 255], l = l >>> 8 ^ e[(l ^ (128 | p >> 6 & 63)) & 255], l = l >>> 8 ^ e[(l ^ (128 | p & 63)) & 255]);
        return l ^ -1;
      }
      n.table = e, n.bstr = r, n.buf = s, n.str = h;
    });
  })(rn)), rn;
}
var on, _r;
function ua() {
  if (_r) return on;
  _r = 1;
  var t = pi();
  on = i;
  var n = new Uint8Array(4), a = new Int32Array(n.buffer), e = new Uint32Array(n.buffer);
  function i(r) {
    if (r[0] !== 137) throw new Error("Invalid .png file header");
    if (r[1] !== 80) throw new Error("Invalid .png file header");
    if (r[2] !== 78) throw new Error("Invalid .png file header");
    if (r[3] !== 71) throw new Error("Invalid .png file header");
    if (r[4] !== 13) throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
    if (r[5] !== 10) throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
    if (r[6] !== 26) throw new Error("Invalid .png file header");
    if (r[7] !== 10) throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
    for (var s = false, o = [], h = 8; h < r.length; ) {
      n[3] = r[h++], n[2] = r[h++], n[1] = r[h++], n[0] = r[h++];
      var f = e[0] + 4, l = new Uint8Array(f);
      l[0] = r[h++], l[1] = r[h++], l[2] = r[h++], l[3] = r[h++];
      var u = String.fromCharCode(l[0]) + String.fromCharCode(l[1]) + String.fromCharCode(l[2]) + String.fromCharCode(l[3]);
      if (!o.length && u !== "IHDR") throw new Error("IHDR header missing");
      if (u === "IEND") {
        s = true, o.push({ name: u, data: new Uint8Array(0) });
        break;
      }
      for (var c = 4; c < f; c++) l[c] = r[h++];
      n[3] = r[h++], n[2] = r[h++], n[1] = r[h++], n[0] = r[h++];
      var p = a[0], y = t.buf(l);
      if (y !== p) throw new Error("CRC values for " + u + " header do not match, PNG file is likely corrupted");
      var A = new Uint8Array(l.buffer.slice(4));
      o.push({ name: u, data: A });
    }
    if (!s) throw new Error(".png file ended prematurely: no IEND header was found");
    return o;
  }
  return on;
}
var la = ua();
const os = et(la);
var an, Cr;
function fa() {
  return Cr || (Cr = 1, an = function(t, n, a) {
    var e = [], i = t.length;
    if (i === 0) return e;
    var r = n < 0 ? Math.max(0, n + i) : n || 0;
    for (a !== void 0 && (i = a < 0 ? a + i : a); i-- > r; ) e[i - r] = t[i];
    return e;
  }), an;
}
var sn, Sr;
function ca() {
  if (Sr) return sn;
  Sr = 1;
  var t = fa(), n = pi();
  sn = r;
  var a = new Uint8Array(4), e = new Int32Array(a.buffer), i = new Uint32Array(a.buffer);
  function r(s) {
    var o = 8, h = o, f;
    for (f = 0; f < s.length; f++) o += s[f].data.length, o += 12;
    var l = new Uint8Array(o);
    for (l[0] = 137, l[1] = 80, l[2] = 78, l[3] = 71, l[4] = 13, l[5] = 10, l[6] = 26, l[7] = 10, f = 0; f < s.length; f++) {
      var u = s[f], c = u.name, p = u.data, y = p.length, A = [c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2), c.charCodeAt(3)];
      i[0] = y, l[h++] = a[3], l[h++] = a[2], l[h++] = a[1], l[h++] = a[0], l[h++] = A[0], l[h++] = A[1], l[h++] = A[2], l[h++] = A[3];
      for (var g = 0; g < y; ) l[h++] = p[g++];
      var F = A.concat(t(p)), C = n.buf(F);
      e[0] = C, l[h++] = a[3], l[h++] = a[2], l[h++] = a[1], l[h++] = a[0];
    }
    return l;
  }
  return sn;
}
var da = ca();
const as = et(da);
var Tt = {}, un, Fr;
function ha() {
  if (Fr) return un;
  Fr = 1, un = t;
  function t(n, a) {
    if (n = String(n), a = String(a), !/^[\x00-\xFF]+$/.test(n) || !/^[\x00-\xFF]+$/.test(a)) throw new Error("Only Latin-1 characters are permitted in PNG tEXt chunks. You might want to consider base64 encoding and/or zEXt compression");
    if (n.length >= 80) throw new Error('Keyword "' + n + '" is longer than the 79-character limit imposed by the PNG specification');
    for (var e = n.length + a.length + 1, i = new Uint8Array(e), r = 0, s, o = 0; o < n.length; o++) {
      if (!(s = n.charCodeAt(o))) throw new Error("0x00 character is not permitted in tEXt keywords");
      i[r++] = s;
    }
    i[r++] = 0;
    for (var h = 0; h < a.length; h++) {
      if (!(s = a.charCodeAt(h))) throw new Error("0x00 character is not permitted in tEXt content");
      i[r++] = s;
    }
    return { name: "tEXt", data: i };
  }
  return un;
}
var ln, xr;
function va() {
  if (xr) return ln;
  xr = 1, ln = t;
  function t(n) {
    n.data && n.name && (n = n.data);
    for (var a = true, e = "", i = "", r = 0; r < n.length; r++) {
      var s = n[r];
      if (a) s ? i += String.fromCharCode(s) : a = false;
      else if (s) e += String.fromCharCode(s);
      else throw new Error("Invalid NULL character found. 0x00 character is not permitted in tEXt content");
    }
    return { keyword: i, text: e };
  }
  return ln;
}
var Er;
function pa() {
  return Er || (Er = 1, Tt.encode = ha(), Tt.decode = va()), Tt;
}
var ga = pa();
const ss = et(ga);
var kt = { exports: {} }, ma = kt.exports, Or;
function ya() {
  return Or || (Or = 1, (function(t) {
    (function() {
      var n, a, e, i, r, s, o, h, f, l, u, c, p, y, A;
      e = Math.floor, l = Math.min, a = function(g, F) {
        return g < F ? -1 : g > F ? 1 : 0;
      }, f = function(g, F, C, E, R) {
        var _;
        if (C == null && (C = 0), R == null && (R = a), C < 0) throw new Error("lo must be non-negative");
        for (E == null && (E = g.length); C < E; ) _ = e((C + E) / 2), R(F, g[_]) < 0 ? E = _ : C = _ + 1;
        return [].splice.apply(g, [C, C - C].concat(F)), F;
      }, s = function(g, F, C) {
        return C == null && (C = a), g.push(F), y(g, 0, g.length - 1, C);
      }, r = function(g, F) {
        var C, E;
        return F == null && (F = a), C = g.pop(), g.length ? (E = g[0], g[0] = C, A(g, 0, F)) : E = C, E;
      }, h = function(g, F, C) {
        var E;
        return C == null && (C = a), E = g[0], g[0] = F, A(g, 0, C), E;
      }, o = function(g, F, C) {
        var E;
        return C == null && (C = a), g.length && C(g[0], F) < 0 && (E = [g[0], F], F = E[0], g[0] = E[1], A(g, 0, C)), F;
      }, i = function(g, F) {
        var C, E, R, _, O, W;
        for (F == null && (F = a), _ = (function() {
          W = [];
          for (var z = 0, K = e(g.length / 2); 0 <= K ? z < K : z > K; 0 <= K ? z++ : z--) W.push(z);
          return W;
        }).apply(this).reverse(), O = [], E = 0, R = _.length; E < R; E++) C = _[E], O.push(A(g, C, F));
        return O;
      }, p = function(g, F, C) {
        var E;
        if (C == null && (C = a), E = g.indexOf(F), E !== -1) return y(g, 0, E, C), A(g, E, C);
      }, u = function(g, F, C) {
        var E, R, _, O, W;
        if (C == null && (C = a), R = g.slice(0, F), !R.length) return R;
        for (i(R, C), W = g.slice(F), _ = 0, O = W.length; _ < O; _++) E = W[_], o(R, E, C);
        return R.sort(C).reverse();
      }, c = function(g, F, C) {
        var E, R, _, O, W, z, K, Q, te;
        if (C == null && (C = a), F * 10 <= g.length) {
          if (_ = g.slice(0, F).sort(C), !_.length) return _;
          for (R = _[_.length - 1], K = g.slice(F), O = 0, z = K.length; O < z; O++) E = K[O], C(E, R) < 0 && (f(_, E, 0, null, C), _.pop(), R = _[_.length - 1]);
          return _;
        }
        for (i(g, C), te = [], W = 0, Q = l(F, g.length); 0 <= Q ? W < Q : W > Q; 0 <= Q ? ++W : --W) te.push(r(g, C));
        return te;
      }, y = function(g, F, C, E) {
        var R, _, O;
        for (E == null && (E = a), R = g[C]; C > F; ) {
          if (O = C - 1 >> 1, _ = g[O], E(R, _) < 0) {
            g[C] = _, C = O;
            continue;
          }
          break;
        }
        return g[C] = R;
      }, A = function(g, F, C) {
        var E, R, _, O, W;
        for (C == null && (C = a), R = g.length, W = F, _ = g[F], E = 2 * F + 1; E < R; ) O = E + 1, O < R && !(C(g[E], g[O]) < 0) && (E = O), g[F] = g[E], F = E, E = 2 * F + 1;
        return g[F] = _, y(g, W, F, C);
      }, n = (function() {
        g.push = s, g.pop = r, g.replace = h, g.pushpop = o, g.heapify = i, g.updateItem = p, g.nlargest = u, g.nsmallest = c;
        function g(F) {
          this.cmp = F ?? a, this.nodes = [];
        }
        return g.prototype.push = function(F) {
          return s(this.nodes, F, this.cmp);
        }, g.prototype.pop = function() {
          return r(this.nodes, this.cmp);
        }, g.prototype.peek = function() {
          return this.nodes[0];
        }, g.prototype.contains = function(F) {
          return this.nodes.indexOf(F) !== -1;
        }, g.prototype.replace = function(F) {
          return h(this.nodes, F, this.cmp);
        }, g.prototype.pushpop = function(F) {
          return o(this.nodes, F, this.cmp);
        }, g.prototype.heapify = function() {
          return i(this.nodes, this.cmp);
        }, g.prototype.updateItem = function(F) {
          return p(this.nodes, F, this.cmp);
        }, g.prototype.clear = function() {
          return this.nodes = [];
        }, g.prototype.empty = function() {
          return this.nodes.length === 0;
        }, g.prototype.size = function() {
          return this.nodes.length;
        }, g.prototype.clone = function() {
          var F;
          return F = new g(), F.nodes = this.nodes.slice(0), F;
        }, g.prototype.toArray = function() {
          return this.nodes.slice(0);
        }, g.prototype.insert = g.prototype.push, g.prototype.top = g.prototype.peek, g.prototype.front = g.prototype.peek, g.prototype.has = g.prototype.contains, g.prototype.copy = g.prototype.clone, g;
      })(), t !== null && t.exports ? t.exports = n : window.Heap = n;
    }).call(ma);
  })(kt)), kt.exports;
}
var fn, Dr;
function jt() {
  return Dr || (Dr = 1, fn = ya()), fn;
}
var cn, Rr;
function Kn() {
  if (Rr) return cn;
  Rr = 1;
  function t(n, a, e) {
    this.x = n, this.y = a, this.walkable = e === void 0 ? true : e;
  }
  return cn = t, cn;
}
var dn, Tr;
function Ae() {
  if (Tr) return dn;
  Tr = 1;
  var t = { Always: 1, Never: 2, IfAtMostOneObstacle: 3, OnlyWhenNoObstacles: 4 };
  return dn = t, dn;
}
var hn, Pr;
function ba() {
  if (Pr) return hn;
  Pr = 1;
  var t = Kn(), n = Ae();
  function a(e, i, r) {
    var s;
    typeof e != "object" ? s = e : (i = e.length, s = e[0].length, r = e), this.width = s, this.height = i, this.nodes = this._buildNodes(s, i, r);
  }
  return a.prototype._buildNodes = function(e, i, r) {
    var s, o, h = new Array(i);
    for (s = 0; s < i; ++s) for (h[s] = new Array(e), o = 0; o < e; ++o) h[s][o] = new t(o, s);
    if (r === void 0) return h;
    if (r.length !== i || r[0].length !== e) throw new Error("Matrix size does not fit");
    for (s = 0; s < i; ++s) for (o = 0; o < e; ++o) r[s][o] && (h[s][o].walkable = false);
    return h;
  }, a.prototype.getNodeAt = function(e, i) {
    return this.nodes[i][e];
  }, a.prototype.isWalkableAt = function(e, i) {
    return this.isInside(e, i) && this.nodes[i][e].walkable;
  }, a.prototype.isInside = function(e, i) {
    return e >= 0 && e < this.width && i >= 0 && i < this.height;
  }, a.prototype.setWalkableAt = function(e, i, r) {
    this.nodes[i][e].walkable = r;
  }, a.prototype.getNeighbors = function(e, i) {
    var r = e.x, s = e.y, o = [], h = false, f = false, l = false, u = false, c = false, p = false, y = false, A = false, g = this.nodes;
    if (this.isWalkableAt(r, s - 1) && (o.push(g[s - 1][r]), h = true), this.isWalkableAt(r + 1, s) && (o.push(g[s][r + 1]), l = true), this.isWalkableAt(r, s + 1) && (o.push(g[s + 1][r]), c = true), this.isWalkableAt(r - 1, s) && (o.push(g[s][r - 1]), y = true), i === n.Never) return o;
    if (i === n.OnlyWhenNoObstacles) f = y && h, u = h && l, p = l && c, A = c && y;
    else if (i === n.IfAtMostOneObstacle) f = y || h, u = h || l, p = l || c, A = c || y;
    else if (i === n.Always) f = true, u = true, p = true, A = true;
    else throw new Error("Incorrect value of diagonalMovement");
    return f && this.isWalkableAt(r - 1, s - 1) && o.push(g[s - 1][r - 1]), u && this.isWalkableAt(r + 1, s - 1) && o.push(g[s - 1][r + 1]), p && this.isWalkableAt(r + 1, s + 1) && o.push(g[s + 1][r + 1]), A && this.isWalkableAt(r - 1, s + 1) && o.push(g[s + 1][r - 1]), o;
  }, a.prototype.clone = function() {
    var e, i, r = this.width, s = this.height, o = this.nodes, h = new a(r, s), f = new Array(s);
    for (e = 0; e < s; ++e) for (f[e] = new Array(r), i = 0; i < r; ++i) f[e][i] = new t(i, e, o[e][i].walkable);
    return h.nodes = f, h;
  }, hn = a, hn;
}
var We = {}, kr;
function Ve() {
  if (kr) return We;
  kr = 1;
  function t(o) {
    for (var h = [[o.x, o.y]]; o.parent; ) o = o.parent, h.push([o.x, o.y]);
    return h.reverse();
  }
  We.backtrace = t;
  function n(o, h) {
    var f = t(o), l = t(h);
    return f.concat(l.reverse());
  }
  We.biBacktrace = n;
  function a(o) {
    var h, f = 0, l, u, c, p;
    for (h = 1; h < o.length; ++h) l = o[h - 1], u = o[h], c = l[0] - u[0], p = l[1] - u[1], f += Math.sqrt(c * c + p * p);
    return f;
  }
  We.pathLength = a;
  function e(o, h, f, l) {
    var u = Math.abs, c = [], p, y, A, g, F, C;
    for (A = u(f - o), g = u(l - h), p = o < f ? 1 : -1, y = h < l ? 1 : -1, F = A - g; c.push([o, h]), !(o === f && h === l); ) C = 2 * F, C > -g && (F = F - g, o = o + p), C < A && (F = F + A, h = h + y);
    return c;
  }
  We.interpolate = e;
  function i(o) {
    var h = [], f = o.length, l, u, c, p, y, A;
    if (f < 2) return h;
    for (y = 0; y < f - 1; ++y) for (l = o[y], u = o[y + 1], c = e(l[0], l[1], u[0], u[1]), p = c.length, A = 0; A < p - 1; ++A) h.push(c[A]);
    return h.push(o[f - 1]), h;
  }
  We.expandPath = i;
  function r(o, h) {
    var f = h.length, l = h[0][0], u = h[0][1], c = h[f - 1][0], p = h[f - 1][1], y, A, g, F, C, E, R, _, O, W, z;
    for (y = l, A = u, C = [[y, A]], E = 2; E < f; ++E) {
      for (_ = h[E], g = _[0], F = _[1], O = e(y, A, g, F), z = false, R = 1; R < O.length; ++R) if (W = O[R], !o.isWalkableAt(W[0], W[1])) {
        z = true;
        break;
      }
      z && (lastValidCoord = h[E - 1], C.push(lastValidCoord), y = lastValidCoord[0], A = lastValidCoord[1]);
    }
    return C.push([c, p]), C;
  }
  We.smoothenPath = r;
  function s(o) {
    if (o.length < 3) return o;
    var h = [], f = o[0][0], l = o[0][1], u = o[1][0], c = o[1][1], p = u - f, y = c - l, A, g, F, C, E, R;
    for (E = Math.sqrt(p * p + y * y), p /= E, y /= E, h.push([f, l]), R = 2; R < o.length; R++) A = u, g = c, F = p, C = y, u = o[R][0], c = o[R][1], p = u - A, y = c - g, E = Math.sqrt(p * p + y * y), p /= E, y /= E, (p !== F || y !== C) && h.push([A, g]);
    return h.push([u, c]), h;
  }
  return We.compressPath = s, We;
}
var vn, Ir;
function ht() {
  return Ir || (Ir = 1, vn = { manhattan: function(t, n) {
    return t + n;
  }, euclidean: function(t, n) {
    return Math.sqrt(t * t + n * n);
  }, octile: function(t, n) {
    var a = Math.SQRT2 - 1;
    return t < n ? a * t + n : a * n + t;
  }, chebyshev: function(t, n) {
    return Math.max(t, n);
  } }), vn;
}
var pn, Nr;
function Xn() {
  if (Nr) return pn;
  Nr = 1;
  var t = jt(), n = Ve(), a = ht(), e = Ae();
  function i(r) {
    r = r || {}, this.allowDiagonal = r.allowDiagonal, this.dontCrossCorners = r.dontCrossCorners, this.heuristic = r.heuristic || a.manhattan, this.weight = r.weight || 1, this.diagonalMovement = r.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = e.OnlyWhenNoObstacles : this.diagonalMovement = e.IfAtMostOneObstacle : this.diagonalMovement = e.Never), this.diagonalMovement === e.Never ? this.heuristic = r.heuristic || a.manhattan : this.heuristic = r.heuristic || a.octile;
  }
  return i.prototype.findPath = function(r, s, o, h, f) {
    var l = new t(function(Q, te) {
      return Q.f - te.f;
    }), u = f.getNodeAt(r, s), c = f.getNodeAt(o, h), p = this.heuristic, y = this.diagonalMovement, A = this.weight, g = Math.abs, F = Math.SQRT2, C, E, R, _, O, W, z, K;
    for (u.g = 0, u.f = 0, l.push(u), u.opened = true; !l.empty(); ) {
      if (C = l.pop(), C.closed = true, C === c) return n.backtrace(c);
      for (E = f.getNeighbors(C, y), _ = 0, O = E.length; _ < O; ++_) R = E[_], !R.closed && (W = R.x, z = R.y, K = C.g + (W - C.x === 0 || z - C.y === 0 ? 1 : F), (!R.opened || K < R.g) && (R.g = K, R.h = R.h || A * p(g(W - o), g(z - h)), R.f = R.g + R.h, R.parent = C, R.opened ? l.updateItem(R) : (l.push(R), R.opened = true)));
    }
    return [];
  }, pn = i, pn;
}
var gn, Mr;
function wa() {
  if (Mr) return gn;
  Mr = 1;
  var t = Xn();
  function n(a) {
    t.call(this, a);
    var e = this.heuristic;
    this.heuristic = function(i, r) {
      return e(i, r) * 1e6;
    };
  }
  return n.prototype = new t(), n.prototype.constructor = n, gn = n, gn;
}
var mn, Br;
function Aa() {
  if (Br) return mn;
  Br = 1;
  var t = Ve(), n = Ae();
  function a(e) {
    e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = n.OnlyWhenNoObstacles : this.diagonalMovement = n.IfAtMostOneObstacle : this.diagonalMovement = n.Never);
  }
  return a.prototype.findPath = function(e, i, r, s, o) {
    var h = [], f = this.diagonalMovement, l = o.getNodeAt(e, i), u = o.getNodeAt(r, s), c, p, y, A, g;
    for (h.push(l), l.opened = true; h.length; ) {
      if (y = h.shift(), y.closed = true, y === u) return t.backtrace(u);
      for (c = o.getNeighbors(y, f), A = 0, g = c.length; A < g; ++A) p = c[A], !(p.closed || p.opened) && (h.push(p), p.opened = true, p.parent = y);
    }
    return [];
  }, mn = a, mn;
}
var yn, Wr;
function _a() {
  if (Wr) return yn;
  Wr = 1;
  var t = Xn();
  function n(a) {
    t.call(this, a), this.heuristic = function(e, i) {
      return 0;
    };
  }
  return n.prototype = new t(), n.prototype.constructor = n, yn = n, yn;
}
var bn, Lr;
function Gn() {
  if (Lr) return bn;
  Lr = 1;
  var t = jt(), n = Ve(), a = ht(), e = Ae();
  function i(r) {
    r = r || {}, this.allowDiagonal = r.allowDiagonal, this.dontCrossCorners = r.dontCrossCorners, this.diagonalMovement = r.diagonalMovement, this.heuristic = r.heuristic || a.manhattan, this.weight = r.weight || 1, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = e.OnlyWhenNoObstacles : this.diagonalMovement = e.IfAtMostOneObstacle : this.diagonalMovement = e.Never), this.diagonalMovement === e.Never ? this.heuristic = r.heuristic || a.manhattan : this.heuristic = r.heuristic || a.octile;
  }
  return i.prototype.findPath = function(r, s, o, h, f) {
    var l = function(se, ce) {
      return se.f - ce.f;
    }, u = new t(l), c = new t(l), p = f.getNodeAt(r, s), y = f.getNodeAt(o, h), A = this.heuristic, g = this.diagonalMovement, F = this.weight, C = Math.abs, E = Math.SQRT2, R, _, O, W, z, K, Q, te, ne = 1, ie = 2;
    for (p.g = 0, p.f = 0, u.push(p), p.opened = ne, y.g = 0, y.f = 0, c.push(y), y.opened = ie; !u.empty() && !c.empty(); ) {
      for (R = u.pop(), R.closed = true, _ = f.getNeighbors(R, g), W = 0, z = _.length; W < z; ++W) if (O = _[W], !O.closed) {
        if (O.opened === ie) return n.biBacktrace(R, O);
        K = O.x, Q = O.y, te = R.g + (K - R.x === 0 || Q - R.y === 0 ? 1 : E), (!O.opened || te < O.g) && (O.g = te, O.h = O.h || F * A(C(K - o), C(Q - h)), O.f = O.g + O.h, O.parent = R, O.opened ? u.updateItem(O) : (u.push(O), O.opened = ne));
      }
      for (R = c.pop(), R.closed = true, _ = f.getNeighbors(R, g), W = 0, z = _.length; W < z; ++W) if (O = _[W], !O.closed) {
        if (O.opened === ne) return n.biBacktrace(O, R);
        K = O.x, Q = O.y, te = R.g + (K - R.x === 0 || Q - R.y === 0 ? 1 : E), (!O.opened || te < O.g) && (O.g = te, O.h = O.h || F * A(C(K - r), C(Q - s)), O.f = O.g + O.h, O.parent = R, O.opened ? c.updateItem(O) : (c.push(O), O.opened = ie));
      }
    }
    return [];
  }, bn = i, bn;
}
var wn, qr;
function Ca() {
  if (qr) return wn;
  qr = 1;
  var t = Gn();
  function n(a) {
    t.call(this, a);
    var e = this.heuristic;
    this.heuristic = function(i, r) {
      return e(i, r) * 1e6;
    };
  }
  return n.prototype = new t(), n.prototype.constructor = n, wn = n, wn;
}
var An, Ur;
function Sa() {
  if (Ur) return An;
  Ur = 1;
  var t = Ve(), n = Ae();
  function a(e) {
    e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = n.OnlyWhenNoObstacles : this.diagonalMovement = n.IfAtMostOneObstacle : this.diagonalMovement = n.Never);
  }
  return a.prototype.findPath = function(e, i, r, s, o) {
    var h = o.getNodeAt(e, i), f = o.getNodeAt(r, s), l = [], u = [], c, p, y, A = this.diagonalMovement, g = 0, F = 1, C, E;
    for (l.push(h), h.opened = true, h.by = g, u.push(f), f.opened = true, f.by = F; l.length && u.length; ) {
      for (y = l.shift(), y.closed = true, c = o.getNeighbors(y, A), C = 0, E = c.length; C < E; ++C) if (p = c[C], !p.closed) {
        if (p.opened) {
          if (p.by === F) return t.biBacktrace(y, p);
          continue;
        }
        l.push(p), p.parent = y, p.opened = true, p.by = g;
      }
      for (y = u.shift(), y.closed = true, c = o.getNeighbors(y, A), C = 0, E = c.length; C < E; ++C) if (p = c[C], !p.closed) {
        if (p.opened) {
          if (p.by === g) return t.biBacktrace(p, y);
          continue;
        }
        u.push(p), p.parent = y, p.opened = true, p.by = F;
      }
    }
    return [];
  }, An = a, An;
}
var _n, jr;
function Fa() {
  if (jr) return _n;
  jr = 1;
  var t = Gn();
  function n(a) {
    t.call(this, a), this.heuristic = function(e, i) {
      return 0;
    };
  }
  return n.prototype = new t(), n.prototype.constructor = n, _n = n, _n;
}
var Cn, Hr;
function xa() {
  if (Hr) return Cn;
  Hr = 1, Ve();
  var t = ht(), n = Kn(), a = Ae();
  function e(i) {
    i = i || {}, this.allowDiagonal = i.allowDiagonal, this.dontCrossCorners = i.dontCrossCorners, this.diagonalMovement = i.diagonalMovement, this.heuristic = i.heuristic || t.manhattan, this.weight = i.weight || 1, this.trackRecursion = i.trackRecursion || false, this.timeLimit = i.timeLimit || 1 / 0, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = a.OnlyWhenNoObstacles : this.diagonalMovement = a.IfAtMostOneObstacle : this.diagonalMovement = a.Never), this.diagonalMovement === a.Never ? this.heuristic = i.heuristic || t.manhattan : this.heuristic = i.heuristic || t.octile;
  }
  return e.prototype.findPath = function(i, r, s, o, h) {
    var f = (/* @__PURE__ */ new Date()).getTime(), l = (function(E, R) {
      return this.heuristic(Math.abs(R.x - E.x), Math.abs(R.y - E.y));
    }).bind(this), u = function(E, R) {
      return E.x === R.x || E.y === R.y ? 1 : Math.SQRT2;
    }, c = (function(E, R, _, O, W) {
      if (this.timeLimit > 0 && (/* @__PURE__ */ new Date()).getTime() - f > this.timeLimit * 1e3) return 1 / 0;
      var z = R + l(E, y) * this.weight;
      if (z > _) return z;
      if (E == y) return O[W] = [E.x, E.y], E;
      var K, Q, te, ne, ie = h.getNeighbors(E, this.diagonalMovement);
      for (te = 0, K = 1 / 0; ne = ie[te]; ++te) {
        if (this.trackRecursion && (ne.retainCount = ne.retainCount + 1 || 1, ne.tested !== true && (ne.tested = true)), Q = c(ne, R + u(E, ne), _, O, W + 1), Q instanceof n) return O[W] = [E.x, E.y], Q;
        this.trackRecursion && --ne.retainCount === 0 && (ne.tested = false), Q < K && (K = Q);
      }
      return K;
    }).bind(this), p = h.getNodeAt(i, r), y = h.getNodeAt(s, o), A = l(p, y), g, F, C;
    for (g = 0; ; ++g) {
      if (F = [], C = c(p, 0, A, F, 0), C === 1 / 0) return [];
      if (C instanceof n) return F;
      A = C;
    }
    return [];
  }, Cn = e, Cn;
}
var Sn, zr;
function Ht() {
  if (zr) return Sn;
  zr = 1;
  var t = jt(), n = Ve(), a = ht();
  Ae();
  function e(i) {
    i = i || {}, this.heuristic = i.heuristic || a.manhattan, this.trackJumpRecursion = i.trackJumpRecursion || false;
  }
  return e.prototype.findPath = function(i, r, s, o, h) {
    var f = this.openList = new t(function(p, y) {
      return p.f - y.f;
    }), l = this.startNode = h.getNodeAt(i, r), u = this.endNode = h.getNodeAt(s, o), c;
    for (this.grid = h, l.g = 0, l.f = 0, f.push(l), l.opened = true; !f.empty(); ) {
      if (c = f.pop(), c.closed = true, c === u) return n.expandPath(n.backtrace(u));
      this._identifySuccessors(c);
    }
    return [];
  }, e.prototype._identifySuccessors = function(i) {
    var r = this.grid, s = this.heuristic, o = this.openList, h = this.endNode.x, f = this.endNode.y, l, u, c, p, y, A = i.x, g = i.y, F, C, E, R, _, O = Math.abs;
    for (l = this._findNeighbors(i), p = 0, y = l.length; p < y; ++p) if (u = l[p], c = this._jump(u[0], u[1], A, g), c) {
      if (F = c[0], C = c[1], _ = r.getNodeAt(F, C), _.closed) continue;
      E = a.octile(O(F - A), O(C - g)), R = i.g + E, (!_.opened || R < _.g) && (_.g = R, _.h = _.h || s(O(F - h), O(C - f)), _.f = _.g + _.h, _.parent = i, _.opened ? o.updateItem(_) : (o.push(_), _.opened = true));
    }
  }, Sn = e, Sn;
}
var Fn, Yr;
function Ea() {
  if (Yr) return Fn;
  Yr = 1;
  var t = Ht(), n = Ae();
  function a(e) {
    t.call(this, e);
  }
  return a.prototype = new t(), a.prototype.constructor = a, a.prototype._jump = function(e, i, r, s) {
    var o = this.grid, h = e - r, f = i - s;
    if (!o.isWalkableAt(e, i)) return null;
    if (this.trackJumpRecursion === true && (o.getNodeAt(e, i).tested = true), o.getNodeAt(e, i) === this.endNode) return [e, i];
    if (h !== 0) {
      if (o.isWalkableAt(e, i - 1) && !o.isWalkableAt(e - h, i - 1) || o.isWalkableAt(e, i + 1) && !o.isWalkableAt(e - h, i + 1)) return [e, i];
    } else if (f !== 0) {
      if (o.isWalkableAt(e - 1, i) && !o.isWalkableAt(e - 1, i - f) || o.isWalkableAt(e + 1, i) && !o.isWalkableAt(e + 1, i - f)) return [e, i];
      if (this._jump(e + 1, i, e, i) || this._jump(e - 1, i, e, i)) return [e, i];
    } else throw new Error("Only horizontal and vertical movements are allowed");
    return this._jump(e + h, i + f, e, i);
  }, a.prototype._findNeighbors = function(e) {
    var i = e.parent, r = e.x, s = e.y, o = this.grid, h, f, l, u, c = [], p, y, A, g;
    if (i) h = i.x, f = i.y, l = (r - h) / Math.max(Math.abs(r - h), 1), u = (s - f) / Math.max(Math.abs(s - f), 1), l !== 0 ? (o.isWalkableAt(r, s - 1) && c.push([r, s - 1]), o.isWalkableAt(r, s + 1) && c.push([r, s + 1]), o.isWalkableAt(r + l, s) && c.push([r + l, s])) : u !== 0 && (o.isWalkableAt(r - 1, s) && c.push([r - 1, s]), o.isWalkableAt(r + 1, s) && c.push([r + 1, s]), o.isWalkableAt(r, s + u) && c.push([r, s + u]));
    else for (p = o.getNeighbors(e, n.Never), A = 0, g = p.length; A < g; ++A) y = p[A], c.push([y.x, y.y]);
    return c;
  }, Fn = a, Fn;
}
var xn, Jr;
function Oa() {
  if (Jr) return xn;
  Jr = 1;
  var t = Ht(), n = Ae();
  function a(e) {
    t.call(this, e);
  }
  return a.prototype = new t(), a.prototype.constructor = a, a.prototype._jump = function(e, i, r, s) {
    var o = this.grid, h = e - r, f = i - s;
    if (!o.isWalkableAt(e, i)) return null;
    if (this.trackJumpRecursion === true && (o.getNodeAt(e, i).tested = true), o.getNodeAt(e, i) === this.endNode) return [e, i];
    if (h !== 0 && f !== 0) {
      if (o.isWalkableAt(e - h, i + f) && !o.isWalkableAt(e - h, i) || o.isWalkableAt(e + h, i - f) && !o.isWalkableAt(e, i - f)) return [e, i];
      if (this._jump(e + h, i, e, i) || this._jump(e, i + f, e, i)) return [e, i];
    } else if (h !== 0) {
      if (o.isWalkableAt(e + h, i + 1) && !o.isWalkableAt(e, i + 1) || o.isWalkableAt(e + h, i - 1) && !o.isWalkableAt(e, i - 1)) return [e, i];
    } else if (o.isWalkableAt(e + 1, i + f) && !o.isWalkableAt(e + 1, i) || o.isWalkableAt(e - 1, i + f) && !o.isWalkableAt(e - 1, i)) return [e, i];
    return this._jump(e + h, i + f, e, i);
  }, a.prototype._findNeighbors = function(e) {
    var i = e.parent, r = e.x, s = e.y, o = this.grid, h, f, l, u, c = [], p, y, A, g;
    if (i) h = i.x, f = i.y, l = (r - h) / Math.max(Math.abs(r - h), 1), u = (s - f) / Math.max(Math.abs(s - f), 1), l !== 0 && u !== 0 ? (o.isWalkableAt(r, s + u) && c.push([r, s + u]), o.isWalkableAt(r + l, s) && c.push([r + l, s]), o.isWalkableAt(r + l, s + u) && c.push([r + l, s + u]), o.isWalkableAt(r - l, s) || c.push([r - l, s + u]), o.isWalkableAt(r, s - u) || c.push([r + l, s - u])) : l === 0 ? (o.isWalkableAt(r, s + u) && c.push([r, s + u]), o.isWalkableAt(r + 1, s) || c.push([r + 1, s + u]), o.isWalkableAt(r - 1, s) || c.push([r - 1, s + u])) : (o.isWalkableAt(r + l, s) && c.push([r + l, s]), o.isWalkableAt(r, s + 1) || c.push([r + l, s + 1]), o.isWalkableAt(r, s - 1) || c.push([r + l, s - 1]));
    else for (p = o.getNeighbors(e, n.Always), A = 0, g = p.length; A < g; ++A) y = p[A], c.push([y.x, y.y]);
    return c;
  }, xn = a, xn;
}
var En, Vr;
function Da() {
  if (Vr) return En;
  Vr = 1;
  var t = Ht(), n = Ae();
  function a(e) {
    t.call(this, e);
  }
  return a.prototype = new t(), a.prototype.constructor = a, a.prototype._jump = function(e, i, r, s) {
    var o = this.grid, h = e - r, f = i - s;
    if (!o.isWalkableAt(e, i)) return null;
    if (this.trackJumpRecursion === true && (o.getNodeAt(e, i).tested = true), o.getNodeAt(e, i) === this.endNode) return [e, i];
    if (h !== 0 && f !== 0) {
      if (this._jump(e + h, i, e, i) || this._jump(e, i + f, e, i)) return [e, i];
    } else if (h !== 0) {
      if (o.isWalkableAt(e, i - 1) && !o.isWalkableAt(e - h, i - 1) || o.isWalkableAt(e, i + 1) && !o.isWalkableAt(e - h, i + 1)) return [e, i];
    } else if (f !== 0 && (o.isWalkableAt(e - 1, i) && !o.isWalkableAt(e - 1, i - f) || o.isWalkableAt(e + 1, i) && !o.isWalkableAt(e + 1, i - f))) return [e, i];
    return o.isWalkableAt(e + h, i) && o.isWalkableAt(e, i + f) ? this._jump(e + h, i + f, e, i) : null;
  }, a.prototype._findNeighbors = function(e) {
    var i = e.parent, r = e.x, s = e.y, o = this.grid, h, f, l, u, c = [], p, y, A, g;
    if (i) if (h = i.x, f = i.y, l = (r - h) / Math.max(Math.abs(r - h), 1), u = (s - f) / Math.max(Math.abs(s - f), 1), l !== 0 && u !== 0) o.isWalkableAt(r, s + u) && c.push([r, s + u]), o.isWalkableAt(r + l, s) && c.push([r + l, s]), o.isWalkableAt(r, s + u) && o.isWalkableAt(r + l, s) && c.push([r + l, s + u]);
    else {
      var F;
      if (l !== 0) {
        F = o.isWalkableAt(r + l, s);
        var C = o.isWalkableAt(r, s + 1), E = o.isWalkableAt(r, s - 1);
        F && (c.push([r + l, s]), C && c.push([r + l, s + 1]), E && c.push([r + l, s - 1])), C && c.push([r, s + 1]), E && c.push([r, s - 1]);
      } else if (u !== 0) {
        F = o.isWalkableAt(r, s + u);
        var R = o.isWalkableAt(r + 1, s), _ = o.isWalkableAt(r - 1, s);
        F && (c.push([r, s + u]), R && c.push([r + 1, s + u]), _ && c.push([r - 1, s + u])), R && c.push([r + 1, s]), _ && c.push([r - 1, s]);
      }
    }
    else for (p = o.getNeighbors(e, n.OnlyWhenNoObstacles), A = 0, g = p.length; A < g; ++A) y = p[A], c.push([y.x, y.y]);
    return c;
  }, En = a, En;
}
var On, Kr;
function Ra() {
  if (Kr) return On;
  Kr = 1;
  var t = Ht(), n = Ae();
  function a(e) {
    t.call(this, e);
  }
  return a.prototype = new t(), a.prototype.constructor = a, a.prototype._jump = function(e, i, r, s) {
    var o = this.grid, h = e - r, f = i - s;
    if (!o.isWalkableAt(e, i)) return null;
    if (this.trackJumpRecursion === true && (o.getNodeAt(e, i).tested = true), o.getNodeAt(e, i) === this.endNode) return [e, i];
    if (h !== 0 && f !== 0) {
      if (o.isWalkableAt(e - h, i + f) && !o.isWalkableAt(e - h, i) || o.isWalkableAt(e + h, i - f) && !o.isWalkableAt(e, i - f)) return [e, i];
      if (this._jump(e + h, i, e, i) || this._jump(e, i + f, e, i)) return [e, i];
    } else if (h !== 0) {
      if (o.isWalkableAt(e + h, i + 1) && !o.isWalkableAt(e, i + 1) || o.isWalkableAt(e + h, i - 1) && !o.isWalkableAt(e, i - 1)) return [e, i];
    } else if (o.isWalkableAt(e + 1, i + f) && !o.isWalkableAt(e + 1, i) || o.isWalkableAt(e - 1, i + f) && !o.isWalkableAt(e - 1, i)) return [e, i];
    return o.isWalkableAt(e + h, i) || o.isWalkableAt(e, i + f) ? this._jump(e + h, i + f, e, i) : null;
  }, a.prototype._findNeighbors = function(e) {
    var i = e.parent, r = e.x, s = e.y, o = this.grid, h, f, l, u, c = [], p, y, A, g;
    if (i) h = i.x, f = i.y, l = (r - h) / Math.max(Math.abs(r - h), 1), u = (s - f) / Math.max(Math.abs(s - f), 1), l !== 0 && u !== 0 ? (o.isWalkableAt(r, s + u) && c.push([r, s + u]), o.isWalkableAt(r + l, s) && c.push([r + l, s]), (o.isWalkableAt(r, s + u) || o.isWalkableAt(r + l, s)) && c.push([r + l, s + u]), !o.isWalkableAt(r - l, s) && o.isWalkableAt(r, s + u) && c.push([r - l, s + u]), !o.isWalkableAt(r, s - u) && o.isWalkableAt(r + l, s) && c.push([r + l, s - u])) : l === 0 ? o.isWalkableAt(r, s + u) && (c.push([r, s + u]), o.isWalkableAt(r + 1, s) || c.push([r + 1, s + u]), o.isWalkableAt(r - 1, s) || c.push([r - 1, s + u])) : o.isWalkableAt(r + l, s) && (c.push([r + l, s]), o.isWalkableAt(r, s + 1) || c.push([r + l, s + 1]), o.isWalkableAt(r, s - 1) || c.push([r + l, s - 1]));
    else for (p = o.getNeighbors(e, n.IfAtMostOneObstacle), A = 0, g = p.length; A < g; ++A) y = p[A], c.push([y.x, y.y]);
    return c;
  }, On = a, On;
}
var Dn, Xr;
function Ta() {
  if (Xr) return Dn;
  Xr = 1;
  var t = Ae(), n = Ea(), a = Oa(), e = Da(), i = Ra();
  function r(s) {
    return s = s || {}, s.diagonalMovement === t.Never ? new n(s) : s.diagonalMovement === t.Always ? new a(s) : s.diagonalMovement === t.OnlyWhenNoObstacles ? new e(s) : new i(s);
  }
  return Dn = r, Dn;
}
var Rn, Gr;
function Pa() {
  return Gr || (Gr = 1, Rn = { Heap: jt(), Node: Kn(), Grid: ba(), Util: Ve(), DiagonalMovement: Ae(), Heuristic: ht(), AStarFinder: Xn(), BestFirstFinder: wa(), BreadthFirstFinder: Aa(), DijkstraFinder: _a(), BiAStarFinder: Gn(), BiBestFirstFinder: Ca(), BiBreadthFirstFinder: Sa(), BiDijkstraFinder: Fa(), IDAStarFinder: xa(), JumpPointFinder: Ta() }), Rn;
}
var Tn, $r;
function ka() {
  return $r || ($r = 1, Tn = Pa()), Tn;
}
var us = ka();
export {
  as as A,
  us as B,
  es as D,
  hr as _,
  za as a,
  Ja as b,
  Ka as c,
  qa as d,
  Ga as e,
  Ha as f,
  Qa as g,
  Ya as h,
  $a as i,
  Xa as j,
  ts as k,
  Va as l,
  ns as m,
  oa as n,
  Ua as o,
  ra as p,
  rs as q,
  Ma as r,
  ja as s,
  Ba as t,
  Za as u,
  La as v,
  Wa as w,
  is as x,
  os as y,
  ss as z
};
