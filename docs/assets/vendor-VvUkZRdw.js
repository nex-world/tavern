import { g as Ne } from "./index-BwbnRfon.js";
var Rr = "Invariant failed";
function bo(t, n) {
  if (!t) throw new Error(Rr);
}
function yo(t, n) {
}
var Ve = { exports: {} }, Tr = Ve.exports, dn;
function Wr() {
  return dn || (dn = 1, (function(t, n) {
    (function(o, e) {
      t.exports = e();
    })(Tr, function() {
      function o(A) {
        return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
          return typeof v;
        } : function(v) {
          return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
        })(A);
      }
      function e(A, v) {
        if (!(A instanceof v)) throw new TypeError("Cannot call a class as a function");
      }
      function r(A, v) {
        for (var C = 0; C < v.length; C++) {
          var E = v[C];
          E.enumerable = E.enumerable || false, E.configurable = true, "value" in E && (E.writable = true), Object.defineProperty(A, E.key, E);
        }
      }
      function i(A, v, C) {
        v && r(A.prototype, v), C && r(A, C), Object.defineProperty(A, "prototype", { writable: false });
      }
      function a(A, v, C) {
        v in A ? Object.defineProperty(A, v, { value: C, enumerable: true, configurable: true, writable: true }) : A[v] = C;
      }
      function s(A, v) {
        if (typeof v != "function" && v !== null) throw new TypeError("Super expression must either be null or a function");
        A.prototype = Object.create(v && v.prototype, { constructor: { value: A, writable: true, configurable: true } }), Object.defineProperty(A, "prototype", { writable: false }), v && u(A, v);
      }
      function c(A) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(v) {
          return v.__proto__ || Object.getPrototypeOf(v);
        })(A);
      }
      function u(A, v) {
        return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(C, E) {
          return C.__proto__ = E, C;
        })(A, v);
      }
      function l(A, v) {
        if (v && (typeof v == "object" || typeof v == "function")) return v;
        if (v !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        if (v = A, v === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return v;
      }
      function f(A) {
        var v = (function() {
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
          return l(this, v ? (C = c(this).constructor, Reflect.construct(E, arguments, C)) : E.apply(this, arguments));
        };
      }
      function d(A, v) {
        (v == null || v > A.length) && (v = A.length);
        for (var C = 0, E = new Array(v); C < v; C++) E[C] = A[C];
        return E;
      }
      function h(A, v) {
        var C, E = typeof Symbol < "u" && A[Symbol.iterator] || A["@@iterator"];
        if (!E) {
          if (Array.isArray(A) || (E = (function(F, k) {
            if (F) {
              if (typeof F == "string") return d(F, k);
              var P = Object.prototype.toString.call(F).slice(8, -1);
              return (P = P === "Object" && F.constructor ? F.constructor.name : P) === "Map" || P === "Set" ? Array.from(F) : P === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P) ? d(F, k) : void 0;
            }
          })(A)) || v && A && typeof A.length == "number") return E && (A = E), C = 0, { s: v = function() {
          }, n: function() {
            return C >= A.length ? { done: true } : { done: false, value: A[C++] };
          }, e: function(F) {
            throw F;
          }, f: v };
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var T, O = true, N = false;
        return { s: function() {
          E = E.call(A);
        }, n: function() {
          var F = E.next();
          return O = F.done, F;
        }, e: function(F) {
          N = true, T = F;
        }, f: function() {
          try {
            O || E.return == null || E.return();
          } finally {
            if (N) throw T;
          }
        } };
      }
      function g() {
        if (m.url) window.location.href = m.url;
        else if (m.rewriteHTML) try {
          document.documentElement.innerHTML = m.rewriteHTML;
        } catch {
          document.documentElement.innerText = m.rewriteHTML;
        }
        else {
          try {
            window.opener = null, window.open("", "_self"), window.close(), window.history.back();
          } catch (A) {
            console.log(A);
          }
          setTimeout(function() {
            window.location.href = m.timeOutUrl || "https://theajack.github.io/disable-devtool/404.html?h=".concat(encodeURIComponent(location.host));
          }, 500);
        }
      }
      var m = { md5: "", ondevtoolopen: g, ondevtoolclose: null, url: "", timeOutUrl: "", tkName: "ddtk", interval: 500, disableMenu: true, stopIntervalTime: 5e3, clearIntervalWhenDevOpenTrigger: false, detectors: [1, 3, 4, 5, 6, 7], clearLog: true, disableSelect: false, disableInputSelect: false, disableCopy: false, disableCut: false, disablePaste: false, ignore: null, disableIframeParents: true, seo: true, rewriteHTML: "" }, p = ["detectors", "ondevtoolclose", "ignore"];
      function w(A) {
        var v, C = 0 < arguments.length && A !== void 0 ? A : {};
        for (v in C.onDevtoolOpen && (C.ondevtoolopen = C.onDevtoolOpen), C.onDevtoolClose && (C.ondevtoolclose = C.onDevtoolClose), m) {
          var E = v;
          C[E] === void 0 || o(m[E]) !== o(C[E]) && p.indexOf(E) === -1 || (m[E] = C[E]);
        }
        typeof m.ondevtoolclose == "function" && m.clearIntervalWhenDevOpenTrigger === true && (m.clearIntervalWhenDevOpenTrigger = false, console.warn("\u3010DISABLE-DEVTOOL\u3011clearIntervalWhenDevOpenTrigger \u5728\u4F7F\u7528 ondevtoolclose \u65F6\u65E0\u6548"));
      }
      function b() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
      function y(A) {
        var v = b();
        return A(), b() - v;
      }
      function x(A, v) {
        function C(N) {
          return function() {
            A && A();
            var F = N.apply(void 0, arguments);
            return v && v(), F;
          };
        }
        var E = window.alert, T = window.confirm, O = window.prompt;
        try {
          window.alert = C(E), window.confirm = C(T), window.prompt = C(O);
        } catch {
        }
      }
      var M, S, W, _ = { iframe: false, pc: false, qqBrowser: false, firefox: false, macos: false, edge: false, oldEdge: false, ie: false, iosChrome: false, iosEdge: false, chrome: false, seoBot: false, mobile: false };
      function I() {
        function A(ge) {
          return v.indexOf(ge) !== -1;
        }
        var v = navigator.userAgent.toLowerCase(), C = (function() {
          var ve = navigator, ge = ve.platform, ve = ve.maxTouchPoints;
          if (typeof ve == "number") return 1 < ve;
          if (typeof ge == "string") {
            if (ve = ge.toLowerCase(), /(mac|win)/i.test(ve)) return false;
            if (/(android|iphone|ipad|ipod|arch)/i.test(ve)) return true;
          }
          return /(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase());
        })(), E = !!window.top && window !== window.top, T = !C, O = A("qqbrowser"), N = A("firefox"), F = A("macintosh"), k = A("edge"), P = k && !A("chrome"), D = P || A("trident") || A("msie"), R = A("crios"), Ce = A("edgios"), pe = A("chrome") || R, Fe = !C && /(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(v);
        Object.assign(_, { iframe: E, pc: T, qqBrowser: O, firefox: N, macos: F, edge: k, oldEdge: P, ie: D, iosChrome: R, iosEdge: Ce, chrome: pe, seoBot: Fe, mobile: C });
      }
      function B() {
        for (var A = (function() {
          for (var E = {}, T = 0; T < 500; T++) E["".concat(T)] = "".concat(T);
          return E;
        })(), v = [], C = 0; C < 50; C++) v.push(A);
        return v;
      }
      function L() {
        m.clearLog && W();
      }
      var j = "", J = false;
      function U() {
        var A = m.ignore;
        if (A) {
          if (typeof A == "function") return A();
          if (A.length !== 0) {
            var v = location.href;
            if (j === v) return J;
            j = v;
            var C, E = false, T = h(A);
            try {
              for (T.s(); !(C = T.n()).done; ) {
                var O = C.value;
                if (typeof O == "string") {
                  if (v.indexOf(O) !== -1) {
                    E = true;
                    break;
                  }
                } else if (O.test(v)) {
                  E = true;
                  break;
                }
              }
            } catch (N) {
              T.e(N);
            } finally {
              T.f();
            }
            return J = E;
          }
        }
      }
      var te = function() {
        return false;
      };
      function $(A) {
        var v, C, E = 74, T = 73, O = 85, N = 83, F = 123, k = _.macos ? function(D, R) {
          return D.metaKey && D.altKey && (R === T || R === E);
        } : function(D, R) {
          return D.ctrlKey && D.shiftKey && (R === T || R === E);
        }, P = _.macos ? function(D, R) {
          return D.metaKey && D.altKey && R === O || D.metaKey && R === N;
        } : function(D, R) {
          return D.ctrlKey && (R === N || R === O);
        };
        A.addEventListener("keydown", function(D) {
          var R = (D = D || A.event).keyCode || D.which;
          if (R === F || k(D, R) || P(D, R)) return V(A, D);
        }, true), v = A, m.disableMenu && v.addEventListener("contextmenu", function(D) {
          if (D.pointerType !== "touch") return V(v, D);
        }), C = A, (m.disableSelect || m.disableInputSelect) && z(C, "selectstart"), C = A, m.disableCopy && z(C, "copy"), C = A, m.disableCut && z(C, "cut"), C = A, m.disablePaste && z(C, "paste");
      }
      function z(A, v) {
        A.addEventListener(v, function(C) {
          if (!(E = C.target) || E.tagName !== "INPUT" && E.tagName !== "TEXTAREA" && ((T = E.getAttribute) == null ? void 0 : T.call(E, "contenteditable")) !== "true") {
            if (m.disableSelect) return V(A, C);
          } else if (m.disableInputSelect) return V(A, C);
          var E, T;
        });
      }
      function V(A, v) {
        if (!U() && !te()) return (v = v || A.event).returnValue = false, v.preventDefault(), false;
      }
      var q, Pe = false, Le = {};
      function tn(A) {
        Le[A] = false;
      }
      function nn() {
        for (var A in Le) if (Le[A]) return Pe = true;
        return Pe = false;
      }
      (H = q = q || {})[H.Unknown = -1] = "Unknown", H[H.RegToString = 0] = "RegToString", H[H.DefineId = 1] = "DefineId", H[H.Size = 2] = "Size", H[H.DateToString = 3] = "DateToString", H[H.FuncToString = 4] = "FuncToString", H[H.Debugger = 5] = "Debugger", H[H.Performance = 6] = "Performance", H[H.DebugLib = 7] = "DebugLib";
      var de = (function() {
        function A(E) {
          var C = E.type, E = E.enabled, E = E === void 0 || E;
          e(this, A), this.type = q.Unknown, this.enabled = true, this.type = C, this.enabled = E, this.enabled && (C = this, an.push(C), this.init());
        }
        return i(A, [{ key: "onDevToolOpen", value: function() {
          var v;
          console.warn("You don't have permission to use DEVTOOL!\u3010type = ".concat(this.type, "\u3011")), m.clearIntervalWhenDevOpenTrigger && ln(), window.clearTimeout(sn), m.ondevtoolopen(this.type, g), v = this.type, Le[v] = true;
        } }, { key: "init", value: function() {
        } }]), A;
      })(), rn = (function() {
        s(v, de);
        var A = f(v);
        function v() {
          return e(this, v), A.call(this, { type: q.DebugLib });
        }
        return i(v, [{ key: "init", value: function() {
        } }, { key: "detect", value: function() {
          var C;
          (((C = (C = window.eruda) == null ? void 0 : C._devTools) == null ? void 0 : C._isShow) === true || window._vcOrigConsole && window.document.querySelector("#__vconsole.vc-toggle")) && this.onDevToolOpen();
        } }], [{ key: "isUsing", value: function() {
          return !!window.eruda || !!window._vcOrigConsole;
        } }]), v;
      })(), on = 0, sn = 0, an = [], xr = 0;
      function Or(A) {
        function v() {
          P = true;
        }
        function C() {
          P = false;
        }
        var E, T, O, N, F, k, P = false;
        function D() {
          (k[N] === O ? T : E)();
        }
        x(v, C), E = C, T = v, (k = document).hidden !== void 0 ? (O = "hidden", F = "visibilitychange", N = "visibilityState") : k.mozHidden !== void 0 ? (O = "mozHidden", F = "mozvisibilitychange", N = "mozVisibilityState") : k.msHidden !== void 0 ? (O = "msHidden", F = "msvisibilitychange", N = "msVisibilityState") : k.webkitHidden !== void 0 && (O = "webkitHidden", F = "webkitvisibilitychange", N = "webkitVisibilityState"), k.removeEventListener(F, D, false), k.addEventListener(F, D, false), on = window.setInterval(function() {
          if (!(A.isSuspend || P || U())) {
            var R, Ce, pe = h(an);
            try {
              for (pe.s(); !(R = pe.n()).done; ) {
                var Fe = R.value;
                tn(Fe.type), Fe.detect(xr++);
              }
            } catch (ge) {
              pe.e(ge);
            } finally {
              pe.f();
            }
            L(), typeof m.ondevtoolclose == "function" && (Ce = Pe, !nn() && Ce && m.ondevtoolclose());
          }
        }, m.interval), sn = setTimeout(function() {
          _.pc || rn.isUsing() || ln();
        }, m.stopIntervalTime);
      }
      function ln() {
        window.clearInterval(on);
      }
      var Ee = 8;
      function un(A) {
        for (var v = (function(O, N) {
          O[N >> 5] |= 128 << N % 32, O[14 + (N + 64 >>> 9 << 4)] = N;
          for (var F = 1732584193, k = -271733879, P = -1732584194, D = 271733878, R = 0; R < O.length; R += 16) {
            var Ce = F, pe = k, Fe = P, ge = D;
            F = Y(F, k, P, D, O[R + 0], 7, -680876936), D = Y(D, F, k, P, O[R + 1], 12, -389564586), P = Y(P, D, F, k, O[R + 2], 17, 606105819), k = Y(k, P, D, F, O[R + 3], 22, -1044525330), F = Y(F, k, P, D, O[R + 4], 7, -176418897), D = Y(D, F, k, P, O[R + 5], 12, 1200080426), P = Y(P, D, F, k, O[R + 6], 17, -1473231341), k = Y(k, P, D, F, O[R + 7], 22, -45705983), F = Y(F, k, P, D, O[R + 8], 7, 1770035416), D = Y(D, F, k, P, O[R + 9], 12, -1958414417), P = Y(P, D, F, k, O[R + 10], 17, -42063), k = Y(k, P, D, F, O[R + 11], 22, -1990404162), F = Y(F, k, P, D, O[R + 12], 7, 1804603682), D = Y(D, F, k, P, O[R + 13], 12, -40341101), P = Y(P, D, F, k, O[R + 14], 17, -1502002290), k = Y(k, P, D, F, O[R + 15], 22, 1236535329), F = K(F, k, P, D, O[R + 1], 5, -165796510), D = K(D, F, k, P, O[R + 6], 9, -1069501632), P = K(P, D, F, k, O[R + 11], 14, 643717713), k = K(k, P, D, F, O[R + 0], 20, -373897302), F = K(F, k, P, D, O[R + 5], 5, -701558691), D = K(D, F, k, P, O[R + 10], 9, 38016083), P = K(P, D, F, k, O[R + 15], 14, -660478335), k = K(k, P, D, F, O[R + 4], 20, -405537848), F = K(F, k, P, D, O[R + 9], 5, 568446438), D = K(D, F, k, P, O[R + 14], 9, -1019803690), P = K(P, D, F, k, O[R + 3], 14, -187363961), k = K(k, P, D, F, O[R + 8], 20, 1163531501), F = K(F, k, P, D, O[R + 13], 5, -1444681467), D = K(D, F, k, P, O[R + 2], 9, -51403784), P = K(P, D, F, k, O[R + 7], 14, 1735328473), k = K(k, P, D, F, O[R + 12], 20, -1926607734), F = X(F, k, P, D, O[R + 5], 4, -378558), D = X(D, F, k, P, O[R + 8], 11, -2022574463), P = X(P, D, F, k, O[R + 11], 16, 1839030562), k = X(k, P, D, F, O[R + 14], 23, -35309556), F = X(F, k, P, D, O[R + 1], 4, -1530992060), D = X(D, F, k, P, O[R + 4], 11, 1272893353), P = X(P, D, F, k, O[R + 7], 16, -155497632), k = X(k, P, D, F, O[R + 10], 23, -1094730640), F = X(F, k, P, D, O[R + 13], 4, 681279174), D = X(D, F, k, P, O[R + 0], 11, -358537222), P = X(P, D, F, k, O[R + 3], 16, -722521979), k = X(k, P, D, F, O[R + 6], 23, 76029189), F = X(F, k, P, D, O[R + 9], 4, -640364487), D = X(D, F, k, P, O[R + 12], 11, -421815835), P = X(P, D, F, k, O[R + 15], 16, 530742520), k = X(k, P, D, F, O[R + 2], 23, -995338651), F = G(F, k, P, D, O[R + 0], 6, -198630844), D = G(D, F, k, P, O[R + 7], 10, 1126891415), P = G(P, D, F, k, O[R + 14], 15, -1416354905), k = G(k, P, D, F, O[R + 5], 21, -57434055), F = G(F, k, P, D, O[R + 12], 6, 1700485571), D = G(D, F, k, P, O[R + 3], 10, -1894986606), P = G(P, D, F, k, O[R + 10], 15, -1051523), k = G(k, P, D, F, O[R + 1], 21, -2054922799), F = G(F, k, P, D, O[R + 8], 6, 1873313359), D = G(D, F, k, P, O[R + 15], 10, -30611744), P = G(P, D, F, k, O[R + 6], 15, -1560198380), k = G(k, P, D, F, O[R + 13], 21, 1309151649), F = G(F, k, P, D, O[R + 4], 6, -145523070), D = G(D, F, k, P, O[R + 11], 10, -1120210379), P = G(P, D, F, k, O[R + 2], 15, 718787259), k = G(k, P, D, F, O[R + 9], 21, -343485551), F = he(F, Ce), k = he(k, pe), P = he(P, Fe), D = he(D, ge);
          }
          return Array(F, k, P, D);
        })((function(O) {
          for (var N = Array(), F = (1 << Ee) - 1, k = 0; k < O.length * Ee; k += Ee) N[k >> 5] |= (O.charCodeAt(k / Ee) & F) << k % 32;
          return N;
        })(A), A.length * Ee), C = "0123456789abcdef", E = "", T = 0; T < 4 * v.length; T++) E += C.charAt(v[T >> 2] >> T % 4 * 8 + 4 & 15) + C.charAt(v[T >> 2] >> T % 4 * 8 & 15);
        return E;
      }
      function qe(A, v, C, E, T, O) {
        return he((v = he(he(v, A), he(E, O))) << T | v >>> 32 - T, C);
      }
      function Y(A, v, C, E, T, O, N) {
        return qe(v & C | ~v & E, A, v, T, O, N);
      }
      function K(A, v, C, E, T, O, N) {
        return qe(v & E | C & ~E, A, v, T, O, N);
      }
      function X(A, v, C, E, T, O, N) {
        return qe(v ^ C ^ E, A, v, T, O, N);
      }
      function G(A, v, C, E, T, O, N) {
        return qe(C ^ (v | ~E), A, v, T, O, N);
      }
      function he(A, v) {
        var C = (65535 & A) + (65535 & v);
        return (A >> 16) + (v >> 16) + (C >> 16) << 16 | 65535 & C;
      }
      var H = (function() {
        s(v, de);
        var A = f(v);
        function v() {
          return e(this, v), A.call(this, { type: q.RegToString, enabled: _.qqBrowser || _.firefox });
        }
        return i(v, [{ key: "init", value: function() {
          var C = this;
          this.lastTime = 0, this.reg = /./, M(this.reg), this.reg.toString = function() {
            var E;
            return _.qqBrowser ? (E = (/* @__PURE__ */ new Date()).getTime(), C.lastTime && E - C.lastTime < 100 ? C.onDevToolOpen() : C.lastTime = E) : _.firefox && C.onDevToolOpen(), "";
          };
        } }, { key: "detect", value: function() {
          M(this.reg);
        } }]), v;
      })(), kr = (function() {
        s(v, de);
        var A = f(v);
        function v() {
          return e(this, v), A.call(this, { type: q.DefineId });
        }
        return i(v, [{ key: "init", value: function() {
          var C = this;
          this.div = document.createElement("div"), this.div.__defineGetter__("id", function() {
            C.onDevToolOpen();
          }), Object.defineProperty(this.div, "id", { get: function() {
            C.onDevToolOpen();
          } });
        } }, { key: "detect", value: function() {
          M(this.div);
        } }]), v;
      })(), Dr = (function() {
        s(v, de);
        var A = f(v);
        function v() {
          return e(this, v), A.call(this, { type: q.Size, enabled: !_.iframe && !_.edge });
        }
        return i(v, [{ key: "init", value: function() {
          var C = this;
          this.checkWindowSizeUneven(), window.addEventListener("resize", function() {
            setTimeout(function() {
              C.checkWindowSizeUneven();
            }, 100);
          }, true);
        } }, { key: "detect", value: function() {
        } }, { key: "checkWindowSizeUneven", value: function() {
          var C = (function() {
            if (fn(window.devicePixelRatio)) return window.devicePixelRatio;
            var T = window.screen;
            return !!(fn(T) && T.deviceXDPI && T.logicalXDPI) && T.deviceXDPI / T.logicalXDPI;
          })();
          if (C !== false) {
            var E = 200 < window.outerWidth - window.innerWidth * C, C = 300 < window.outerHeight - window.innerHeight * C;
            if (E || C) return this.onDevToolOpen(), false;
            tn(this.type);
          }
          return true;
        } }]), v;
      })();
      function fn(A) {
        return A != null;
      }
      var le, Mr = (function() {
        s(v, de);
        var A = f(v);
        function v() {
          return e(this, v), A.call(this, { type: q.DateToString, enabled: !_.iosChrome && !_.iosEdge });
        }
        return i(v, [{ key: "init", value: function() {
          var C = this;
          this.count = 0, this.date = /* @__PURE__ */ new Date(), this.date.toString = function() {
            return C.count++, "";
          };
        } }, { key: "detect", value: function() {
          this.count = 0, M(this.date), L(), 2 <= this.count && this.onDevToolOpen();
        } }]), v;
      })(), Sr = (function() {
        s(v, de);
        var A = f(v);
        function v() {
          return e(this, v), A.call(this, { type: q.FuncToString, enabled: !_.iosChrome && !_.iosEdge });
        }
        return i(v, [{ key: "init", value: function() {
          var C = this;
          this.count = 0, this.func = function() {
          }, this.func.toString = function() {
            return C.count++, "";
          };
        } }, { key: "detect", value: function() {
          this.count = 0, M(this.func), L(), 2 <= this.count && this.onDevToolOpen();
        } }]), v;
      })(), Pr = (function() {
        s(v, de);
        var A = f(v);
        function v() {
          return e(this, v), A.call(this, { type: q.Debugger, enabled: _.iosChrome || _.iosEdge });
        }
        return i(v, [{ key: "detect", value: function() {
          var C = b();
          100 < b() - C && this.onDevToolOpen();
        } }]), v;
      })(), Er = (function() {
        s(v, de);
        var A = f(v);
        function v() {
          var C;
          return e(this, v), (C = A.call(this, { type: q.Performance, enabled: _.chrome || !_.mobile })).count = 0, C;
        }
        return i(v, [{ key: "init", value: function() {
          this.maxPrintTime = 0, this.largeObjectArray = B();
        } }, { key: "detect", value: function() {
          var C = this, E = y(function() {
            S(C.largeObjectArray);
          }), T = y(function() {
            M(C.largeObjectArray);
          });
          if (this.maxPrintTime = Math.max(this.maxPrintTime, T), L(), E === 0 || this.maxPrintTime === 0) return false;
          E > 10 * this.maxPrintTime && (2 <= this.count ? this.onDevToolOpen() : (this.count++, this.detect()));
        } }]), v;
      })(), cn = (a(le = {}, q.RegToString, H), a(le, q.DefineId, kr), a(le, q.Size, Dr), a(le, q.DateToString, Mr), a(le, q.FuncToString, Sr), a(le, q.Debugger, Pr), a(le, q.Performance, Er), a(le, q.DebugLib, rn), le), Ae = Object.assign(function(A) {
        function v() {
          var N = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "";
          return { success: !N, reason: N };
        }
        var C;
        if (Ae.isRunning) return v("already running");
        if (I(), C = window.console || { log: function() {
        }, table: function() {
        }, clear: function() {
        } }, W = _.ie ? (M = function() {
          return C.log.apply(C, arguments);
        }, S = function() {
          return C.table.apply(C, arguments);
        }, function() {
          return C.clear();
        }) : (M = C.log, S = C.table, C.clear), w(A), m.md5 && un((function(N) {
          var F = window.location.search, k = window.location.hash;
          return (F = F === "" && k !== "" ? "?".concat(k.split("?")[1]) : F) !== "" && F !== void 0 && (k = new RegExp("(^|&)" + N + "=([^&]*)(&|$)", "i"), N = F.substr(1).match(k), N != null) ? unescape(N[2]) : "";
        })(m.tkName)) === m.md5) return v("token passed");
        if (m.seo && _.seoBot) return v("seobot");
        Ae.isRunning = true, Or(Ae);
        var E = Ae, T = (te = function() {
          return E.isSuspend;
        }, window.top), O = window.parent;
        if ($(window), m.disableIframeParents && T && O && T !== window) {
          for (; O !== T; ) $(O), O = O.parent;
          $(T);
        }
        return (m.detectors === "all" ? Object.keys(cn) : m.detectors).forEach(function(N) {
          new cn[N]();
        }), v();
      }, { isRunning: false, isSuspend: false, md5: un, version: "0.3.9", DetectorType: q, isDevToolOpened: nn });
      return H = (function() {
        if (typeof window > "u" || !window.document) return null;
        var A = document.querySelector("[disable-devtool-auto]");
        if (!A) return null;
        var v = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"], C = ["interval"], E = {};
        return ["md5", "url", "tk-name", "detectors"].concat(v, C).forEach(function(T) {
          var O = A.getAttribute(T);
          O !== null && (C.indexOf(T) !== -1 ? O = parseInt(O) : v.indexOf(T) !== -1 ? O = O !== "false" : T === "detector" && O !== "all" && (O = O.split(" ")), E[(function(N) {
            if (N.indexOf("-") === -1) return N;
            var F = false;
            return N.split("").map(function(k) {
              return k === "-" ? (F = true, "") : F ? (F = false, k.toUpperCase()) : k;
            }).join("");
          })(T)] = O);
        }), E;
      })(), H && Ae(H), Ae;
    });
  })(Ve)), Ve.exports;
}
var _r = Wr();
const Ao = Ne(_r);
var hn = function() {
  return hn = Object.assign || function(n) {
    for (var o, e = 1, r = arguments.length; e < r; e++) {
      o = arguments[e];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
    }
    return n;
  }, hn.apply(this, arguments);
};
function Co(t, n) {
  var o = {};
  for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && n.indexOf(e) < 0 && (o[e] = t[e]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, e = Object.getOwnPropertySymbols(t); r < e.length; r++) n.indexOf(e[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, e[r]) && (o[e[r]] = t[e[r]]);
  return o;
}
function Fo(t, n, o) {
  if (o || arguments.length === 2) for (var e = 0, r = n.length, i; e < r; e++) (i || !(e in n)) && (i || (i = Array.prototype.slice.call(n, 0, e)), i[e] = n[e]);
  return t.concat(i || Array.prototype.slice.call(n));
}
var xo = function() {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
}, Nr = function(t) {
  if (typeof document > "u") return null;
  var n = Array.isArray(t) ? t[0] : t;
  return n.ownerDocument.body;
}, xe = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), He = {}, it = 0, sr = function(t) {
  return t && (t.host || sr(t.parentNode));
}, Ir = function(t, n) {
  return n.map(function(o) {
    if (t.contains(o)) return o;
    var e = sr(o);
    return e && t.contains(e) ? e : (console.error("aria-hidden", o, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, Br = function(t, n, o, e) {
  var r = Ir(n, Array.isArray(t) ? t : [t]);
  He[o] || (He[o] = /* @__PURE__ */ new WeakMap());
  var i = He[o], a = [], s = /* @__PURE__ */ new Set(), c = new Set(r), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  r.forEach(u);
  var l = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (s.has(d)) l(d);
      else try {
        var h = d.getAttribute(e), g = h !== null && h !== "false", m = (xe.get(d) || 0) + 1, p = (i.get(d) || 0) + 1;
        xe.set(d, m), i.set(d, p), a.push(d), m === 1 && g && je.set(d, true), p === 1 && d.setAttribute(o, "true"), g || d.setAttribute(e, "true");
      } catch (w) {
        console.error("aria-hidden: cannot operate on ", d, w);
      }
    });
  };
  return l(n), s.clear(), it++, function() {
    a.forEach(function(f) {
      var d = xe.get(f) - 1, h = i.get(f) - 1;
      xe.set(f, d), i.set(f, h), d || (je.has(f) || f.removeAttribute(e), je.delete(f)), h || f.removeAttribute(o);
    }), it--, it || (xe = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), He = {});
  };
}, Oo = function(t, n, o) {
  o === void 0 && (o = "data-aria-hidden");
  var e = Array.from(Array.isArray(t) ? t : [t]), r = Nr(t);
  return r ? (e.push.apply(e, Array.from(r.querySelectorAll("[aria-live], script"))), Br(e, r, o, "aria-hidden")) : function() {
    return null;
  };
};
const Lr = ["top", "right", "bottom", "left"], me = Math.min, Z = Math.max, Ke = Math.round, Ue = Math.floor, oe = (t) => ({ x: t, y: t }), qr = { left: "right", right: "left", bottom: "top", top: "bottom" }, jr = { start: "end", end: "start" };
function Nt(t, n, o) {
  return Z(t, me(n, o));
}
function fe(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function ce(t) {
  return t.split("-")[0];
}
function Me(t) {
  return t.split("-")[1];
}
function jt(t) {
  return t === "x" ? "y" : "x";
}
function Ht(t) {
  return t === "y" ? "height" : "width";
}
const Hr = /* @__PURE__ */ new Set(["top", "bottom"]);
function ie(t) {
  return Hr.has(ce(t)) ? "y" : "x";
}
function Ut(t) {
  return jt(ie(t));
}
function Ur(t, n, o) {
  o === void 0 && (o = false);
  const e = Me(t), r = Ut(t), i = Ht(r);
  let a = r === "x" ? e === (o ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return n.reference[i] > n.floating[i] && (a = Xe(a)), [a, Xe(a)];
}
function Jr(t) {
  const n = Xe(t);
  return [It(t), n, It(n)];
}
function It(t) {
  return t.replace(/start|end/g, (n) => jr[n]);
}
const pn = ["left", "right"], gn = ["right", "left"], zr = ["top", "bottom"], Vr = ["bottom", "top"];
function Yr(t, n, o) {
  switch (t) {
    case "top":
    case "bottom":
      return o ? n ? gn : pn : n ? pn : gn;
    case "left":
    case "right":
      return n ? zr : Vr;
    default:
      return [];
  }
}
function Kr(t, n, o, e) {
  const r = Me(t);
  let i = Yr(ce(t), o === "start", e);
  return r && (i = i.map((a) => a + "-" + r), n && (i = i.concat(i.map(It)))), i;
}
function Xe(t) {
  return t.replace(/left|right|bottom|top/g, (n) => qr[n]);
}
function Xr(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function ar(t) {
  return typeof t != "number" ? Xr(t) : { top: t, right: t, bottom: t, left: t };
}
function Ge(t) {
  const { x: n, y: o, width: e, height: r } = t;
  return { width: e, height: r, top: o, left: n, right: n + e, bottom: o + r, x: n, y: o };
}
function vn(t, n, o) {
  let { reference: e, floating: r } = t;
  const i = ie(n), a = Ut(n), s = Ht(a), c = ce(n), u = i === "y", l = e.x + e.width / 2 - r.width / 2, f = e.y + e.height / 2 - r.height / 2, d = e[s] / 2 - r[s] / 2;
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
  switch (Me(n)) {
    case "start":
      h[a] -= d * (o && u ? -1 : 1);
      break;
    case "end":
      h[a] += d * (o && u ? -1 : 1);
      break;
  }
  return h;
}
async function Gr(t, n) {
  var o;
  n === void 0 && (n = {});
  const { x: e, y: r, platform: i, rects: a, elements: s, strategy: c } = t, { boundary: u = "clippingAncestors", rootBoundary: l = "viewport", elementContext: f = "floating", altBoundary: d = false, padding: h = 0 } = fe(n, t), g = ar(h), p = s[d ? f === "floating" ? "reference" : "floating" : f], w = Ge(await i.getClippingRect({ element: (o = await (i.isElement == null ? void 0 : i.isElement(p))) == null || o ? p : p.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)), boundary: u, rootBoundary: l, strategy: c })), b = f === "floating" ? { x: e, y: r, width: a.floating.width, height: a.floating.height } : a.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), x = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || { x: 1, y: 1 } : { x: 1, y: 1 }, M = Ge(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: s, rect: b, offsetParent: y, strategy: c }) : b);
  return { top: (w.top - M.top + g.top) / x.y, bottom: (M.bottom - w.bottom + g.bottom) / x.y, left: (w.left - M.left + g.left) / x.x, right: (M.right - w.right + g.right) / x.x };
}
const $r = async (t, n, o) => {
  const { placement: e = "bottom", strategy: r = "absolute", middleware: i = [], platform: a } = o, s = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(n));
  let u = await a.getElementRects({ reference: t, floating: n, strategy: r }), { x: l, y: f } = vn(u, e, c), d = e, h = {}, g = 0;
  for (let p = 0; p < s.length; p++) {
    var m;
    const { name: w, fn: b } = s[p], { x: y, y: x, data: M, reset: S } = await b({ x: l, y: f, initialPlacement: e, placement: d, strategy: r, middlewareData: h, rects: u, platform: { ...a, detectOverflow: (m = a.detectOverflow) != null ? m : Gr }, elements: { reference: t, floating: n } });
    l = y ?? l, f = x ?? f, h = { ...h, [w]: { ...h[w], ...M } }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (u = S.rects === true ? await a.getElementRects({ reference: t, floating: n, strategy: r }) : S.rects), { x: l, y: f } = vn(u, d, c)), p = -1);
  }
  return { x: l, y: f, placement: d, strategy: r, middlewareData: h };
}, Zr = (t) => ({ name: "arrow", options: t, async fn(n) {
  const { x: o, y: e, placement: r, rects: i, platform: a, elements: s, middlewareData: c } = n, { element: u, padding: l = 0 } = fe(t, n) || {};
  if (u == null) return {};
  const f = ar(l), d = { x: o, y: e }, h = Ut(r), g = Ht(h), m = await a.getDimensions(u), p = h === "y", w = p ? "top" : "left", b = p ? "bottom" : "right", y = p ? "clientHeight" : "clientWidth", x = i.reference[g] + i.reference[h] - d[h] - i.floating[g], M = d[h] - i.reference[h], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
  let W = S ? S[y] : 0;
  (!W || !await (a.isElement == null ? void 0 : a.isElement(S))) && (W = s.floating[y] || i.floating[g]);
  const _ = x / 2 - M / 2, I = W / 2 - m[g] / 2 - 1, B = me(f[w], I), L = me(f[b], I), j = B, J = W - m[g] - L, U = W / 2 - m[g] / 2 + _, te = Nt(j, U, J), $ = !c.arrow && Me(r) != null && U !== te && i.reference[g] / 2 - (U < j ? B : L) - m[g] / 2 < 0, z = $ ? U < j ? U - j : U - J : 0;
  return { [h]: d[h] + z, data: { [h]: te, centerOffset: U - te - z, ...$ && { alignmentOffset: z } }, reset: $ };
} }), Qr = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(n) {
    var o, e;
    const { placement: r, middlewareData: i, rects: a, initialPlacement: s, platform: c, elements: u } = n, { mainAxis: l = true, crossAxis: f = true, fallbackPlacements: d, fallbackStrategy: h = "bestFit", fallbackAxisSideDirection: g = "none", flipAlignment: m = true, ...p } = fe(t, n);
    if ((o = i.arrow) != null && o.alignmentOffset) return {};
    const w = ce(r), b = ie(s), y = ce(s) === s, x = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), M = d || (y || !m ? [Xe(s)] : Jr(s)), S = g !== "none";
    !d && S && M.push(...Kr(s, m, g, x));
    const W = [s, ...M], _ = await c.detectOverflow(n, p), I = [];
    let B = ((e = i.flip) == null ? void 0 : e.overflows) || [];
    if (l && I.push(_[w]), f) {
      const U = Ur(r, a, x);
      I.push(_[U[0]], _[U[1]]);
    }
    if (B = [...B, { placement: r, overflows: I }], !I.every((U) => U <= 0)) {
      var L, j;
      const U = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, te = W[U];
      if (te && (!(f === "alignment" ? b !== ie(te) : false) || B.every((V) => ie(V.placement) === b ? V.overflows[0] > 0 : true))) return { data: { index: U, overflows: B }, reset: { placement: te } };
      let $ = (j = B.filter((z) => z.overflows[0] <= 0).sort((z, V) => z.overflows[1] - V.overflows[1])[0]) == null ? void 0 : j.placement;
      if (!$) switch (h) {
        case "bestFit": {
          var J;
          const z = (J = B.filter((V) => {
            if (S) {
              const q = ie(V.placement);
              return q === b || q === "y";
            }
            return true;
          }).map((V) => [V.placement, V.overflows.filter((q) => q > 0).reduce((q, Pe) => q + Pe, 0)]).sort((V, q) => V[1] - q[1])[0]) == null ? void 0 : J[0];
          z && ($ = z);
          break;
        }
        case "initialPlacement":
          $ = s;
          break;
      }
      if (r !== $) return { reset: { placement: $ } };
    }
    return {};
  } };
};
function mn(t, n) {
  return { top: t.top - n.height, right: t.right - n.width, bottom: t.bottom - n.height, left: t.left - n.width };
}
function wn(t) {
  return Lr.some((n) => t[n] >= 0);
}
const ei = function(t) {
  return t === void 0 && (t = {}), { name: "hide", options: t, async fn(n) {
    const { rects: o, platform: e } = n, { strategy: r = "referenceHidden", ...i } = fe(t, n);
    switch (r) {
      case "referenceHidden": {
        const a = await e.detectOverflow(n, { ...i, elementContext: "reference" }), s = mn(a, o.reference);
        return { data: { referenceHiddenOffsets: s, referenceHidden: wn(s) } };
      }
      case "escaped": {
        const a = await e.detectOverflow(n, { ...i, altBoundary: true }), s = mn(a, o.floating);
        return { data: { escapedOffsets: s, escaped: wn(s) } };
      }
      default:
        return {};
    }
  } };
}, lr = /* @__PURE__ */ new Set(["left", "top"]);
async function ti(t, n) {
  const { placement: o, platform: e, elements: r } = t, i = await (e.isRTL == null ? void 0 : e.isRTL(r.floating)), a = ce(o), s = Me(o), c = ie(o) === "y", u = lr.has(a) ? -1 : 1, l = i && c ? -1 : 1, f = fe(n, t);
  let { mainAxis: d, crossAxis: h, alignmentAxis: g } = typeof f == "number" ? { mainAxis: f, crossAxis: 0, alignmentAxis: null } : { mainAxis: f.mainAxis || 0, crossAxis: f.crossAxis || 0, alignmentAxis: f.alignmentAxis };
  return s && typeof g == "number" && (h = s === "end" ? g * -1 : g), c ? { x: h * l, y: d * u } : { x: d * u, y: h * l };
}
const ni = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(n) {
    var o, e;
    const { x: r, y: i, placement: a, middlewareData: s } = n, c = await ti(n, t);
    return a === ((o = s.offset) == null ? void 0 : o.placement) && (e = s.arrow) != null && e.alignmentOffset ? {} : { x: r + c.x, y: i + c.y, data: { ...c, placement: a } };
  } };
}, ri = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(n) {
    const { x: o, y: e, placement: r, platform: i } = n, { mainAxis: a = true, crossAxis: s = false, limiter: c = { fn: (w) => {
      let { x: b, y } = w;
      return { x: b, y };
    } }, ...u } = fe(t, n), l = { x: o, y: e }, f = await i.detectOverflow(n, u), d = ie(ce(r)), h = jt(d);
    let g = l[h], m = l[d];
    if (a) {
      const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", y = g + f[w], x = g - f[b];
      g = Nt(y, g, x);
    }
    if (s) {
      const w = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", y = m + f[w], x = m - f[b];
      m = Nt(y, m, x);
    }
    const p = c.fn({ ...n, [h]: g, [d]: m });
    return { ...p, data: { x: p.x - o, y: p.y - e, enabled: { [h]: a, [d]: s } } };
  } };
}, ii = function(t) {
  return t === void 0 && (t = {}), { options: t, fn(n) {
    const { x: o, y: e, placement: r, rects: i, middlewareData: a } = n, { offset: s = 0, mainAxis: c = true, crossAxis: u = true } = fe(t, n), l = { x: o, y: e }, f = ie(r), d = jt(f);
    let h = l[d], g = l[f];
    const m = fe(s, n), p = typeof m == "number" ? { mainAxis: m, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...m };
    if (c) {
      const y = d === "y" ? "height" : "width", x = i.reference[d] - i.floating[y] + p.mainAxis, M = i.reference[d] + i.reference[y] - p.mainAxis;
      h < x ? h = x : h > M && (h = M);
    }
    if (u) {
      var w, b;
      const y = d === "y" ? "width" : "height", x = lr.has(ce(r)), M = i.reference[f] - i.floating[y] + (x && ((w = a.offset) == null ? void 0 : w[f]) || 0) + (x ? 0 : p.crossAxis), S = i.reference[f] + i.reference[y] + (x ? 0 : ((b = a.offset) == null ? void 0 : b[f]) || 0) - (x ? p.crossAxis : 0);
      g < M ? g = M : g > S && (g = S);
    }
    return { [d]: h, [f]: g };
  } };
}, oi = function(t) {
  return t === void 0 && (t = {}), { name: "size", options: t, async fn(n) {
    var o, e;
    const { placement: r, rects: i, platform: a, elements: s } = n, { apply: c = () => {
    }, ...u } = fe(t, n), l = await a.detectOverflow(n, u), f = ce(r), d = Me(r), h = ie(r) === "y", { width: g, height: m } = i.floating;
    let p, w;
    f === "top" || f === "bottom" ? (p = f, w = d === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = f, p = d === "end" ? "top" : "bottom");
    const b = m - l.top - l.bottom, y = g - l.left - l.right, x = me(m - l[p], b), M = me(g - l[w], y), S = !n.middlewareData.shift;
    let W = x, _ = M;
    if ((o = n.middlewareData.shift) != null && o.enabled.x && (_ = y), (e = n.middlewareData.shift) != null && e.enabled.y && (W = b), S && !d) {
      const B = Z(l.left, 0), L = Z(l.right, 0), j = Z(l.top, 0), J = Z(l.bottom, 0);
      h ? _ = g - 2 * (B !== 0 || L !== 0 ? B + L : Z(l.left, l.right)) : W = m - 2 * (j !== 0 || J !== 0 ? j + J : Z(l.top, l.bottom));
    }
    await c({ ...n, availableWidth: _, availableHeight: W });
    const I = await a.getDimensions(s.floating);
    return g !== I.width || m !== I.height ? { reset: { rects: true } } : {};
  } };
};
function Ze() {
  return typeof window < "u";
}
function Se(t) {
  return ur(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Q(t) {
  var n;
  return (t == null || (n = t.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function ae(t) {
  var n;
  return (n = (ur(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : n.documentElement;
}
function ur(t) {
  return Ze() ? t instanceof Node || t instanceof Q(t).Node : false;
}
function ne(t) {
  return Ze() ? t instanceof Element || t instanceof Q(t).Element : false;
}
function se(t) {
  return Ze() ? t instanceof HTMLElement || t instanceof Q(t).HTMLElement : false;
}
function bn(t) {
  return !Ze() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof Q(t).ShadowRoot;
}
const si = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ie(t) {
  const { overflow: n, overflowX: o, overflowY: e, display: r } = re(t);
  return /auto|scroll|overlay|hidden|clip/.test(n + e + o) && !si.has(r);
}
const ai = /* @__PURE__ */ new Set(["table", "td", "th"]);
function li(t) {
  return ai.has(Se(t));
}
const ui = [":popover-open", ":modal"];
function Qe(t) {
  return ui.some((n) => {
    try {
      return t.matches(n);
    } catch {
      return false;
    }
  });
}
const fi = ["transform", "translate", "scale", "rotate", "perspective"], ci = ["transform", "translate", "scale", "rotate", "perspective", "filter"], di = ["paint", "layout", "strict", "content"];
function Jt(t) {
  const n = zt(), o = ne(t) ? re(t) : t;
  return fi.some((e) => o[e] ? o[e] !== "none" : false) || (o.containerType ? o.containerType !== "normal" : false) || !n && (o.backdropFilter ? o.backdropFilter !== "none" : false) || !n && (o.filter ? o.filter !== "none" : false) || ci.some((e) => (o.willChange || "").includes(e)) || di.some((e) => (o.contain || "").includes(e));
}
function hi(t) {
  let n = we(t);
  for (; se(n) && !De(n); ) {
    if (Jt(n)) return n;
    if (Qe(n)) return null;
    n = we(n);
  }
  return null;
}
function zt() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
const pi = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function De(t) {
  return pi.has(Se(t));
}
function re(t) {
  return Q(t).getComputedStyle(t);
}
function et(t) {
  return ne(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function we(t) {
  if (Se(t) === "html") return t;
  const n = t.assignedSlot || t.parentNode || bn(t) && t.host || ae(t);
  return bn(n) ? n.host : n;
}
function fr(t) {
  const n = we(t);
  return De(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : se(n) && Ie(n) ? n : fr(n);
}
function _e(t, n, o) {
  var e;
  n === void 0 && (n = []), o === void 0 && (o = true);
  const r = fr(t), i = r === ((e = t.ownerDocument) == null ? void 0 : e.body), a = Q(r);
  if (i) {
    const s = Bt(a);
    return n.concat(a, a.visualViewport || [], Ie(r) ? r : [], s && o ? _e(s) : []);
  }
  return n.concat(r, _e(r, [], o));
}
function Bt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function cr(t) {
  const n = re(t);
  let o = parseFloat(n.width) || 0, e = parseFloat(n.height) || 0;
  const r = se(t), i = r ? t.offsetWidth : o, a = r ? t.offsetHeight : e, s = Ke(o) !== i || Ke(e) !== a;
  return s && (o = i, e = a), { width: o, height: e, $: s };
}
function Vt(t) {
  return ne(t) ? t : t.contextElement;
}
function ke(t) {
  const n = Vt(t);
  if (!se(n)) return oe(1);
  const o = n.getBoundingClientRect(), { width: e, height: r, $: i } = cr(n);
  let a = (i ? Ke(o.width) : o.width) / e, s = (i ? Ke(o.height) : o.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), { x: a, y: s };
}
const gi = oe(0);
function dr(t) {
  const n = Q(t);
  return !zt() || !n.visualViewport ? gi : { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop };
}
function vi(t, n, o) {
  return n === void 0 && (n = false), !o || n && o !== Q(t) ? false : n;
}
function be(t, n, o, e) {
  n === void 0 && (n = false), o === void 0 && (o = false);
  const r = t.getBoundingClientRect(), i = Vt(t);
  let a = oe(1);
  n && (e ? ne(e) && (a = ke(e)) : a = ke(t));
  const s = vi(i, o, e) ? dr(i) : oe(0);
  let c = (r.left + s.x) / a.x, u = (r.top + s.y) / a.y, l = r.width / a.x, f = r.height / a.y;
  if (i) {
    const d = Q(i), h = e && ne(e) ? Q(e) : e;
    let g = d, m = Bt(g);
    for (; m && e && h !== g; ) {
      const p = ke(m), w = m.getBoundingClientRect(), b = re(m), y = w.left + (m.clientLeft + parseFloat(b.paddingLeft)) * p.x, x = w.top + (m.clientTop + parseFloat(b.paddingTop)) * p.y;
      c *= p.x, u *= p.y, l *= p.x, f *= p.y, c += y, u += x, g = Q(m), m = Bt(g);
    }
  }
  return Ge({ width: l, height: f, x: c, y: u });
}
function tt(t, n) {
  const o = et(t).scrollLeft;
  return n ? n.left + o : be(ae(t)).left + o;
}
function hr(t, n) {
  const o = t.getBoundingClientRect(), e = o.left + n.scrollLeft - tt(t, o), r = o.top + n.scrollTop;
  return { x: e, y: r };
}
function mi(t) {
  let { elements: n, rect: o, offsetParent: e, strategy: r } = t;
  const i = r === "fixed", a = ae(e), s = n ? Qe(n.floating) : false;
  if (e === a || s && i) return o;
  let c = { scrollLeft: 0, scrollTop: 0 }, u = oe(1);
  const l = oe(0), f = se(e);
  if ((f || !f && !i) && ((Se(e) !== "body" || Ie(a)) && (c = et(e)), se(e))) {
    const h = be(e);
    u = ke(e), l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
  }
  const d = a && !f && !i ? hr(a, c) : oe(0);
  return { width: o.width * u.x, height: o.height * u.y, x: o.x * u.x - c.scrollLeft * u.x + l.x + d.x, y: o.y * u.y - c.scrollTop * u.y + l.y + d.y };
}
function wi(t) {
  return Array.from(t.getClientRects());
}
function bi(t) {
  const n = ae(t), o = et(t), e = t.ownerDocument.body, r = Z(n.scrollWidth, n.clientWidth, e.scrollWidth, e.clientWidth), i = Z(n.scrollHeight, n.clientHeight, e.scrollHeight, e.clientHeight);
  let a = -o.scrollLeft + tt(t);
  const s = -o.scrollTop;
  return re(e).direction === "rtl" && (a += Z(n.clientWidth, e.clientWidth) - r), { width: r, height: i, x: a, y: s };
}
const yn = 25;
function yi(t, n) {
  const o = Q(t), e = ae(t), r = o.visualViewport;
  let i = e.clientWidth, a = e.clientHeight, s = 0, c = 0;
  if (r) {
    i = r.width, a = r.height;
    const l = zt();
    (!l || l && n === "fixed") && (s = r.offsetLeft, c = r.offsetTop);
  }
  const u = tt(e);
  if (u <= 0) {
    const l = e.ownerDocument, f = l.body, d = getComputedStyle(f), h = l.compatMode === "CSS1Compat" && parseFloat(d.marginLeft) + parseFloat(d.marginRight) || 0, g = Math.abs(e.clientWidth - f.clientWidth - h);
    g <= yn && (i -= g);
  } else u <= yn && (i += u);
  return { width: i, height: a, x: s, y: c };
}
const Ai = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ci(t, n) {
  const o = be(t, true, n === "fixed"), e = o.top + t.clientTop, r = o.left + t.clientLeft, i = se(t) ? ke(t) : oe(1), a = t.clientWidth * i.x, s = t.clientHeight * i.y, c = r * i.x, u = e * i.y;
  return { width: a, height: s, x: c, y: u };
}
function An(t, n, o) {
  let e;
  if (n === "viewport") e = yi(t, o);
  else if (n === "document") e = bi(ae(t));
  else if (ne(n)) e = Ci(n, o);
  else {
    const r = dr(t);
    e = { x: n.x - r.x, y: n.y - r.y, width: n.width, height: n.height };
  }
  return Ge(e);
}
function pr(t, n) {
  const o = we(t);
  return o === n || !ne(o) || De(o) ? false : re(o).position === "fixed" || pr(o, n);
}
function Fi(t, n) {
  const o = n.get(t);
  if (o) return o;
  let e = _e(t, [], false).filter((s) => ne(s) && Se(s) !== "body"), r = null;
  const i = re(t).position === "fixed";
  let a = i ? we(t) : t;
  for (; ne(a) && !De(a); ) {
    const s = re(a), c = Jt(a);
    !c && s.position === "fixed" && (r = null), (i ? !c && !r : !c && s.position === "static" && !!r && Ai.has(r.position) || Ie(a) && !c && pr(t, a)) ? e = e.filter((l) => l !== a) : r = s, a = we(a);
  }
  return n.set(t, e), e;
}
function xi(t) {
  let { element: n, boundary: o, rootBoundary: e, strategy: r } = t;
  const a = [...o === "clippingAncestors" ? Qe(n) ? [] : Fi(n, this._c) : [].concat(o), e], s = a[0], c = a.reduce((u, l) => {
    const f = An(n, l, r);
    return u.top = Z(f.top, u.top), u.right = me(f.right, u.right), u.bottom = me(f.bottom, u.bottom), u.left = Z(f.left, u.left), u;
  }, An(n, s, r));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}
function Oi(t) {
  const { width: n, height: o } = cr(t);
  return { width: n, height: o };
}
function ki(t, n, o) {
  const e = se(n), r = ae(n), i = o === "fixed", a = be(t, true, i, n);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const c = oe(0);
  function u() {
    c.x = tt(r);
  }
  if (e || !e && !i) if ((Se(n) !== "body" || Ie(r)) && (s = et(n)), e) {
    const h = be(n, true, i, n);
    c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
  } else r && u();
  i && !e && r && u();
  const l = r && !e && !i ? hr(r, s) : oe(0), f = a.left + s.scrollLeft - c.x - l.x, d = a.top + s.scrollTop - c.y - l.y;
  return { x: f, y: d, width: a.width, height: a.height };
}
function ot(t) {
  return re(t).position === "static";
}
function Cn(t, n) {
  if (!se(t) || re(t).position === "fixed") return null;
  if (n) return n(t);
  let o = t.offsetParent;
  return ae(t) === o && (o = o.ownerDocument.body), o;
}
function gr(t, n) {
  const o = Q(t);
  if (Qe(t)) return o;
  if (!se(t)) {
    let r = we(t);
    for (; r && !De(r); ) {
      if (ne(r) && !ot(r)) return r;
      r = we(r);
    }
    return o;
  }
  let e = Cn(t, n);
  for (; e && li(e) && ot(e); ) e = Cn(e, n);
  return e && De(e) && ot(e) && !Jt(e) ? o : e || hi(t) || o;
}
const Di = async function(t) {
  const n = this.getOffsetParent || gr, o = this.getDimensions, e = await o(t.floating);
  return { reference: ki(t.reference, await n(t.floating), t.strategy), floating: { x: 0, y: 0, width: e.width, height: e.height } };
};
function Mi(t) {
  return re(t).direction === "rtl";
}
const Si = { convertOffsetParentRelativeRectToViewportRelativeRect: mi, getDocumentElement: ae, getClippingRect: xi, getOffsetParent: gr, getElementRects: Di, getClientRects: wi, getDimensions: Oi, getScale: ke, isElement: ne, isRTL: Mi };
function vr(t, n) {
  return t.x === n.x && t.y === n.y && t.width === n.width && t.height === n.height;
}
function Pi(t, n) {
  let o = null, e;
  const r = ae(t);
  function i() {
    var s;
    clearTimeout(e), (s = o) == null || s.disconnect(), o = null;
  }
  function a(s, c) {
    s === void 0 && (s = false), c === void 0 && (c = 1), i();
    const u = t.getBoundingClientRect(), { left: l, top: f, width: d, height: h } = u;
    if (s || n(), !d || !h) return;
    const g = Ue(f), m = Ue(r.clientWidth - (l + d)), p = Ue(r.clientHeight - (f + h)), w = Ue(l), y = { rootMargin: -g + "px " + -m + "px " + -p + "px " + -w + "px", threshold: Z(0, me(1, c)) || 1 };
    let x = true;
    function M(S) {
      const W = S[0].intersectionRatio;
      if (W !== c) {
        if (!x) return a();
        W ? a(false, W) : e = setTimeout(() => {
          a(false, 1e-7);
        }, 1e3);
      }
      W === 1 && !vr(u, t.getBoundingClientRect()) && a(), x = false;
    }
    try {
      o = new IntersectionObserver(M, { ...y, root: r.ownerDocument });
    } catch {
      o = new IntersectionObserver(M, y);
    }
    o.observe(t);
  }
  return a(true), i;
}
function ko(t, n, o, e) {
  e === void 0 && (e = {});
  const { ancestorScroll: r = true, ancestorResize: i = true, elementResize: a = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = false } = e, u = Vt(t), l = r || i ? [...u ? _e(u) : [], ..._e(n)] : [];
  l.forEach((w) => {
    r && w.addEventListener("scroll", o, { passive: true }), i && w.addEventListener("resize", o);
  });
  const f = u && s ? Pi(u, o) : null;
  let d = -1, h = null;
  a && (h = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === u && h && (h.unobserve(n), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(n);
    })), o();
  }), u && !c && h.observe(u), h.observe(n));
  let g, m = c ? be(t) : null;
  c && p();
  function p() {
    const w = be(t);
    m && !vr(m, w) && o(), m = w, g = requestAnimationFrame(p);
  }
  return o(), () => {
    var w;
    l.forEach((b) => {
      r && b.removeEventListener("scroll", o), i && b.removeEventListener("resize", o);
    }), f == null ? void 0 : f(), (w = h) == null || w.disconnect(), h = null, c && cancelAnimationFrame(g);
  };
}
const Do = ni, Mo = ri, So = Qr, Po = oi, Eo = ei, Ro = Zr, To = ii, Wo = (t, n, o) => {
  const e = /* @__PURE__ */ new Map(), r = { platform: Si, ...o }, i = { ...r.platform, _c: e };
  return $r(t, n, { ...r, platform: i });
}, Ei = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function Oe(t, n, o) {
  const e = o[0];
  if (n != null && t >= n) throw new Error(t + " >= " + n);
  if (t.slice(-1) === e || n && n.slice(-1) === e) throw new Error("trailing zero");
  if (n) {
    let a = 0;
    for (; (t[a] || e) === n[a]; ) a++;
    if (a > 0) return n.slice(0, a) + Oe(t.slice(a), n.slice(a), o);
  }
  const r = t ? o.indexOf(t[0]) : 0, i = n != null ? o.indexOf(n[0]) : o.length;
  if (i - r > 1) {
    const a = Math.round(0.5 * (r + i));
    return o[a];
  } else return n && n.length > 1 ? n.slice(0, 1) : o[r] + Oe(t.slice(1), null, o);
}
function mr(t) {
  if (t.length !== wr(t[0])) throw new Error("invalid integer part of order key: " + t);
}
function wr(t) {
  if (t >= "a" && t <= "z") return t.charCodeAt(0) - 97 + 2;
  if (t >= "A" && t <= "Z") return 90 - t.charCodeAt(0) + 2;
  throw new Error("invalid order key head: " + t);
}
function Re(t) {
  const n = wr(t[0]);
  if (n > t.length) throw new Error("invalid order key: " + t);
  return t.slice(0, n);
}
function Fn(t, n) {
  if (t === "A" + n[0].repeat(26)) throw new Error("invalid order key: " + t);
  const o = Re(t);
  if (t.slice(o.length).slice(-1) === n[0]) throw new Error("invalid order key: " + t);
}
function xn(t, n) {
  mr(t);
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
function Ri(t, n) {
  mr(t);
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
function _o(t, n, o = Ei) {
  if (t != null && Fn(t, o), n != null && Fn(n, o), t != null && n != null && t >= n) throw new Error(t + " >= " + n);
  if (t == null) {
    if (n == null) return "a" + o[0];
    const c = Re(n), u = n.slice(c.length);
    if (c === "A" + o[0].repeat(26)) return c + Oe("", u, o);
    if (c < n) return c;
    const l = Ri(c, o);
    if (l == null) throw new Error("cannot decrement any more");
    return l;
  }
  if (n == null) {
    const c = Re(t), u = t.slice(c.length), l = xn(c, o);
    return l ?? c + Oe(u, null, o);
  }
  const e = Re(t), r = t.slice(e.length), i = Re(n), a = n.slice(i.length);
  if (e === i) return e + Oe(r, a, o);
  const s = xn(e, o);
  if (s == null) throw new Error("cannot increment any more");
  return s < n ? s : e + Oe(r, null, o);
}
var Je = { exports: {} }, st, On;
function Ti() {
  if (On) return st;
  On = 1;
  var t = 1e3, n = t * 60, o = n * 60, e = o * 24, r = e * 7, i = e * 365.25;
  st = function(l, f) {
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
  return st;
}
var at, kn;
function Wi() {
  if (kn) return at;
  kn = 1;
  function t(n) {
    e.debug = e, e.default = e, e.coerce = u, e.disable = s, e.enable = i, e.enabled = c, e.humanize = Ti(), e.destroy = l, Object.keys(n).forEach((f) => {
      e[f] = n[f];
    }), e.names = [], e.skips = [], e.formatters = {};
    function o(f) {
      let d = 0;
      for (let h = 0; h < f.length; h++) d = (d << 5) - d + f.charCodeAt(h), d |= 0;
      return e.colors[Math.abs(d) % e.colors.length];
    }
    e.selectColor = o;
    function e(f) {
      let d, h = null, g, m;
      function p(...w) {
        if (!p.enabled) return;
        const b = p, y = Number(/* @__PURE__ */ new Date()), x = y - (d || y);
        b.diff = x, b.prev = d, b.curr = y, d = y, w[0] = e.coerce(w[0]), typeof w[0] != "string" && w.unshift("%O");
        let M = 0;
        w[0] = w[0].replace(/%([a-zA-Z%])/g, (W, _) => {
          if (W === "%%") return "%";
          M++;
          const I = e.formatters[_];
          if (typeof I == "function") {
            const B = w[M];
            W = I.call(b, B), w.splice(M, 1), M--;
          }
          return W;
        }), e.formatArgs.call(b, w), (b.log || e.log).apply(b, w);
      }
      return p.namespace = f, p.useColors = e.useColors(), p.color = e.selectColor(f), p.extend = r, p.destroy = e.destroy, Object.defineProperty(p, "enabled", { enumerable: true, configurable: false, get: () => h !== null ? h : (g !== e.namespaces && (g = e.namespaces, m = e.enabled(f)), m), set: (w) => {
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
      let h = 0, g = 0, m = -1, p = 0;
      for (; h < f.length; ) if (g < d.length && (d[g] === f[h] || d[g] === "*")) d[g] === "*" ? (m = g, p = h, g++) : (h++, g++);
      else if (m !== -1) g = m + 1, p++, h = p;
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
  return at = t, at;
}
var Dn;
function _i() {
  return Dn || (Dn = 1, (function(t, n) {
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
    t.exports = Wi()(n);
    const { formatters: c } = t.exports;
    c.j = function(u) {
      try {
        return JSON.stringify(u);
      } catch (l) {
        return "[UnexpectedJSONParseError]: " + l.message;
      }
    };
  })(Je, Je.exports)), Je.exports;
}
var Ni = _i();
const No = Ne(Ni), Ii = /* @__PURE__ */ Symbol(), Yt = /* @__PURE__ */ Symbol(), Te = "a", br = "f", Mn = "p", yr = "c", Ar = "t", Kt = "h", We = "w", Xt = "o", Gt = "k";
let Bi = (t, n) => new Proxy(t, n);
const Lt = Object.getPrototypeOf, qt = /* @__PURE__ */ new WeakMap(), Cr = (t) => t && (qt.has(t) ? qt.get(t) : Lt(t) === Object.prototype || Lt(t) === Array.prototype), $e = (t) => typeof t == "object" && t !== null, Li = (t) => Object.values(Object.getOwnPropertyDescriptors(t)).some((n) => !n.configurable && !n.writable), qi = (t) => {
  if (Array.isArray(t)) return Array.from(t);
  const n = Object.getOwnPropertyDescriptors(t);
  return Object.values(n).forEach((o) => {
    o.configurable = true;
  }), Object.create(Lt(t), n);
}, ji = (t, n) => {
  const o = { [br]: n };
  let e = false;
  const r = (s, c) => {
    if (!e) {
      let u = o[Te].get(t);
      if (u || (u = {}, o[Te].set(t, u)), s === We) u[We] = true;
      else {
        let l = u[s];
        l || (l = /* @__PURE__ */ new Set(), u[s] = l), l.add(c);
      }
    }
  }, i = () => {
    e = true, o[Te].delete(t);
  }, a = { get(s, c) {
    return c === Yt ? t : (r(Gt, c), Hi(Reflect.get(s, c), o[Te], o[yr], o[Ar]));
  }, has(s, c) {
    return c === Ii ? (i(), true) : (r(Kt, c), Reflect.has(s, c));
  }, getOwnPropertyDescriptor(s, c) {
    return r(Xt, c), Reflect.getOwnPropertyDescriptor(s, c);
  }, ownKeys(s) {
    return r(We), Reflect.ownKeys(s);
  } };
  return n && (a.set = a.deleteProperty = () => false), [a, o];
}, $t = (t) => t[Yt] || t, Hi = (t, n, o, e) => {
  if (!Cr(t)) return t;
  let r = e && e.get(t);
  if (!r) {
    const c = $t(t);
    Li(c) ? r = [c, qi(c)] : r = [c], e == null ? void 0 : e.set(t, r);
  }
  const [i, a] = r;
  let s = o && o.get(i);
  return (!s || s[1][br] !== !!a) && (s = ji(i, !!a), s[1][Mn] = Bi(a || i, s[0]), o && o.set(i, s)), s[1][Te] = n, s[1][yr] = o, s[1][Ar] = e, s[1][Mn];
}, Ui = (t, n) => {
  const o = Reflect.ownKeys(t), e = Reflect.ownKeys(n);
  return o.length !== e.length || o.some((r, i) => r !== e[i]);
}, Ji = (t, n, o, e, r = Object.is) => {
  if (r(t, n)) return false;
  if (!$e(t) || !$e(n)) return true;
  const i = o.get($t(t));
  if (!i) return true;
  if (e) {
    if (e.get(t) === n) return false;
    e.set(t, n);
  }
  let a = null;
  for (const s of i[Kt] || []) if (a = Reflect.has(t, s) !== Reflect.has(n, s), a) return a;
  if (i[We] === true) {
    if (a = Ui(t, n), a) return a;
  } else for (const s of i[Xt] || []) {
    const c = !!Reflect.getOwnPropertyDescriptor(t, s), u = !!Reflect.getOwnPropertyDescriptor(n, s);
    if (a = c !== u, a) return a;
  }
  for (const s of i[Gt] || []) if (a = Ji(t[s], n[s], o, e, r), a) return a;
  if (a === null) throw new Error("invalid used");
  return a;
}, Io = (t) => Cr(t) && t[Yt] || null, Bo = (t, n = true) => {
  qt.set(t, n);
}, Lo = (t, n, o) => {
  const e = [], r = /* @__PURE__ */ new WeakSet(), i = (a, s) => {
    var c, u, l;
    if (r.has(a)) return;
    $e(a) && r.add(a);
    const f = $e(a) && n.get($t(a));
    if (f) {
      if ((c = f[Kt]) === null || c === void 0 || c.forEach((d) => {
        const h = `:has(${String(d)})`;
        e.push(s ? [...s, h] : [h]);
      }), f[We] === true) {
        const d = ":ownKeys";
        e.push(s ? [...s, d] : [d]);
      } else (u = f[Xt]) === null || u === void 0 || u.forEach((d) => {
        const h = `:hasOwn(${String(d)})`;
        e.push(s ? [...s, h] : [h]);
      });
      (l = f[Gt]) === null || l === void 0 || l.forEach((d) => {
        "value" in (Object.getOwnPropertyDescriptor(a, d) || {}) && i(a[d], s ? [...s, d] : [d]);
      });
    } else s && e.push(s);
  };
  return i(t), e;
};
var lt = {}, Sn;
function Fr() {
  return Sn || (Sn = 1, (function(t) {
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
  })(lt)), lt;
}
var ut, Pn;
function zi() {
  if (Pn) return ut;
  Pn = 1;
  var t = Fr();
  ut = r;
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
      var m = new Uint8Array(l.buffer.slice(4));
      s.push({ name: f, data: m });
    }
    if (!a) throw new Error(".png file ended prematurely: no IEND header was found");
    return s;
  }
  return ut;
}
var Vi = zi();
const qo = Ne(Vi);
var ft, En;
function Yi() {
  return En || (En = 1, ft = function(t, n, o) {
    var e = [], r = t.length;
    if (r === 0) return e;
    var i = n < 0 ? Math.max(0, n + r) : n || 0;
    for (o !== void 0 && (r = o < 0 ? o + r : o); r-- > i; ) e[r - i] = t[r];
    return e;
  }), ft;
}
var ct, Rn;
function Ki() {
  if (Rn) return ct;
  Rn = 1;
  var t = Yi(), n = Fr();
  ct = i;
  var o = new Uint8Array(4), e = new Int32Array(o.buffer), r = new Uint32Array(o.buffer);
  function i(a) {
    var s = 8, c = s, u;
    for (u = 0; u < a.length; u++) s += a[u].data.length, s += 12;
    var l = new Uint8Array(s);
    for (l[0] = 137, l[1] = 80, l[2] = 78, l[3] = 71, l[4] = 13, l[5] = 10, l[6] = 26, l[7] = 10, u = 0; u < a.length; u++) {
      var f = a[u], d = f.name, h = f.data, g = h.length, m = [d.charCodeAt(0), d.charCodeAt(1), d.charCodeAt(2), d.charCodeAt(3)];
      r[0] = g, l[c++] = o[3], l[c++] = o[2], l[c++] = o[1], l[c++] = o[0], l[c++] = m[0], l[c++] = m[1], l[c++] = m[2], l[c++] = m[3];
      for (var p = 0; p < g; ) l[c++] = h[p++];
      var w = m.concat(t(h)), b = n.buf(w);
      e[0] = b, l[c++] = o[3], l[c++] = o[2], l[c++] = o[1], l[c++] = o[0];
    }
    return l;
  }
  return ct;
}
var Xi = Ki();
const jo = Ne(Xi);
var ze = {}, dt, Tn;
function Gi() {
  if (Tn) return dt;
  Tn = 1, dt = t;
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
  return dt;
}
var ht, Wn;
function $i() {
  if (Wn) return ht;
  Wn = 1, ht = t;
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
  return ht;
}
var _n;
function Zi() {
  return _n || (_n = 1, ze.encode = Gi(), ze.decode = $i()), ze;
}
var Qi = Zi();
const Ho = Ne(Qi);
var Ye = { exports: {} }, eo = Ye.exports, Nn;
function to() {
  return Nn || (Nn = 1, (function(t) {
    (function() {
      var n, o, e, r, i, a, s, c, u, l, f, d, h, g, m;
      e = Math.floor, l = Math.min, o = function(p, w) {
        return p < w ? -1 : p > w ? 1 : 0;
      }, u = function(p, w, b, y, x) {
        var M;
        if (b == null && (b = 0), x == null && (x = o), b < 0) throw new Error("lo must be non-negative");
        for (y == null && (y = p.length); b < y; ) M = e((b + y) / 2), x(w, p[M]) < 0 ? y = M : b = M + 1;
        return [].splice.apply(p, [b, b - b].concat(w)), w;
      }, a = function(p, w, b) {
        return b == null && (b = o), p.push(w), g(p, 0, p.length - 1, b);
      }, i = function(p, w) {
        var b, y;
        return w == null && (w = o), b = p.pop(), p.length ? (y = p[0], p[0] = b, m(p, 0, w)) : y = b, y;
      }, c = function(p, w, b) {
        var y;
        return b == null && (b = o), y = p[0], p[0] = w, m(p, 0, b), y;
      }, s = function(p, w, b) {
        var y;
        return b == null && (b = o), p.length && b(p[0], w) < 0 && (y = [p[0], w], w = y[0], p[0] = y[1], m(p, 0, b)), w;
      }, r = function(p, w) {
        var b, y, x, M, S, W;
        for (w == null && (w = o), M = (function() {
          W = [];
          for (var _ = 0, I = e(p.length / 2); 0 <= I ? _ < I : _ > I; 0 <= I ? _++ : _--) W.push(_);
          return W;
        }).apply(this).reverse(), S = [], y = 0, x = M.length; y < x; y++) b = M[y], S.push(m(p, b, w));
        return S;
      }, h = function(p, w, b) {
        var y;
        if (b == null && (b = o), y = p.indexOf(w), y !== -1) return g(p, 0, y, b), m(p, y, b);
      }, f = function(p, w, b) {
        var y, x, M, S, W;
        if (b == null && (b = o), x = p.slice(0, w), !x.length) return x;
        for (r(x, b), W = p.slice(w), M = 0, S = W.length; M < S; M++) y = W[M], s(x, y, b);
        return x.sort(b).reverse();
      }, d = function(p, w, b) {
        var y, x, M, S, W, _, I, B, L;
        if (b == null && (b = o), w * 10 <= p.length) {
          if (M = p.slice(0, w).sort(b), !M.length) return M;
          for (x = M[M.length - 1], I = p.slice(w), S = 0, _ = I.length; S < _; S++) y = I[S], b(y, x) < 0 && (u(M, y, 0, null, b), M.pop(), x = M[M.length - 1]);
          return M;
        }
        for (r(p, b), L = [], W = 0, B = l(w, p.length); 0 <= B ? W < B : W > B; 0 <= B ? ++W : --W) L.push(i(p, b));
        return L;
      }, g = function(p, w, b, y) {
        var x, M, S;
        for (y == null && (y = o), x = p[b]; b > w; ) {
          if (S = b - 1 >> 1, M = p[S], y(x, M) < 0) {
            p[b] = M, b = S;
            continue;
          }
          break;
        }
        return p[b] = x;
      }, m = function(p, w, b) {
        var y, x, M, S, W;
        for (b == null && (b = o), x = p.length, W = w, M = p[w], y = 2 * w + 1; y < x; ) S = y + 1, S < x && !(b(p[y], p[S]) < 0) && (y = S), p[w] = p[y], w = y, y = 2 * w + 1;
        return p[w] = M, g(p, W, w, b);
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
    }).call(eo);
  })(Ye)), Ye.exports;
}
var pt, In;
function nt() {
  return In || (In = 1, pt = to()), pt;
}
var gt, Bn;
function Zt() {
  if (Bn) return gt;
  Bn = 1;
  function t(n, o, e) {
    this.x = n, this.y = o, this.walkable = e === void 0 ? true : e;
  }
  return gt = t, gt;
}
var vt, Ln;
function ee() {
  if (Ln) return vt;
  Ln = 1;
  var t = { Always: 1, Never: 2, IfAtMostOneObstacle: 3, OnlyWhenNoObstacles: 4 };
  return vt = t, vt;
}
var mt, qn;
function no() {
  if (qn) return mt;
  qn = 1;
  var t = Zt(), n = ee();
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
    var i = e.x, a = e.y, s = [], c = false, u = false, l = false, f = false, d = false, h = false, g = false, m = false, p = this.nodes;
    if (this.isWalkableAt(i, a - 1) && (s.push(p[a - 1][i]), c = true), this.isWalkableAt(i + 1, a) && (s.push(p[a][i + 1]), l = true), this.isWalkableAt(i, a + 1) && (s.push(p[a + 1][i]), d = true), this.isWalkableAt(i - 1, a) && (s.push(p[a][i - 1]), g = true), r === n.Never) return s;
    if (r === n.OnlyWhenNoObstacles) u = g && c, f = c && l, h = l && d, m = d && g;
    else if (r === n.IfAtMostOneObstacle) u = g || c, f = c || l, h = l || d, m = d || g;
    else if (r === n.Always) u = true, f = true, h = true, m = true;
    else throw new Error("Incorrect value of diagonalMovement");
    return u && this.isWalkableAt(i - 1, a - 1) && s.push(p[a - 1][i - 1]), f && this.isWalkableAt(i + 1, a - 1) && s.push(p[a - 1][i + 1]), h && this.isWalkableAt(i + 1, a + 1) && s.push(p[a + 1][i + 1]), m && this.isWalkableAt(i - 1, a + 1) && s.push(p[a + 1][i - 1]), s;
  }, o.prototype.clone = function() {
    var e, r, i = this.width, a = this.height, s = this.nodes, c = new o(i, a), u = new Array(a);
    for (e = 0; e < a; ++e) for (u[e] = new Array(i), r = 0; r < i; ++r) u[e][r] = new t(r, e, s[e][r].walkable);
    return c.nodes = u, c;
  }, mt = o, mt;
}
var ue = {}, jn;
function ye() {
  if (jn) return ue;
  jn = 1;
  function t(s) {
    for (var c = [[s.x, s.y]]; s.parent; ) s = s.parent, c.push([s.x, s.y]);
    return c.reverse();
  }
  ue.backtrace = t;
  function n(s, c) {
    var u = t(s), l = t(c);
    return u.concat(l.reverse());
  }
  ue.biBacktrace = n;
  function o(s) {
    var c, u = 0, l, f, d, h;
    for (c = 1; c < s.length; ++c) l = s[c - 1], f = s[c], d = l[0] - f[0], h = l[1] - f[1], u += Math.sqrt(d * d + h * h);
    return u;
  }
  ue.pathLength = o;
  function e(s, c, u, l) {
    var f = Math.abs, d = [], h, g, m, p, w, b;
    for (m = f(u - s), p = f(l - c), h = s < u ? 1 : -1, g = c < l ? 1 : -1, w = m - p; d.push([s, c]), !(s === u && c === l); ) b = 2 * w, b > -p && (w = w - p, s = s + h), b < m && (w = w + m, c = c + g);
    return d;
  }
  ue.interpolate = e;
  function r(s) {
    var c = [], u = s.length, l, f, d, h, g, m;
    if (u < 2) return c;
    for (g = 0; g < u - 1; ++g) for (l = s[g], f = s[g + 1], d = e(l[0], l[1], f[0], f[1]), h = d.length, m = 0; m < h - 1; ++m) c.push(d[m]);
    return c.push(s[u - 1]), c;
  }
  ue.expandPath = r;
  function i(s, c) {
    var u = c.length, l = c[0][0], f = c[0][1], d = c[u - 1][0], h = c[u - 1][1], g, m, p, w, b, y, x, M, S, W, _;
    for (g = l, m = f, b = [[g, m]], y = 2; y < u; ++y) {
      for (M = c[y], p = M[0], w = M[1], S = e(g, m, p, w), _ = false, x = 1; x < S.length; ++x) if (W = S[x], !s.isWalkableAt(W[0], W[1])) {
        _ = true;
        break;
      }
      _ && (lastValidCoord = c[y - 1], b.push(lastValidCoord), g = lastValidCoord[0], m = lastValidCoord[1]);
    }
    return b.push([d, h]), b;
  }
  ue.smoothenPath = i;
  function a(s) {
    if (s.length < 3) return s;
    var c = [], u = s[0][0], l = s[0][1], f = s[1][0], d = s[1][1], h = f - u, g = d - l, m, p, w, b, y, x;
    for (y = Math.sqrt(h * h + g * g), h /= y, g /= y, c.push([u, l]), x = 2; x < s.length; x++) m = f, p = d, w = h, b = g, f = s[x][0], d = s[x][1], h = f - m, g = d - p, y = Math.sqrt(h * h + g * g), h /= y, g /= y, (h !== w || g !== b) && c.push([m, p]);
    return c.push([f, d]), c;
  }
  return ue.compressPath = a, ue;
}
var wt, Hn;
function Be() {
  return Hn || (Hn = 1, wt = { manhattan: function(t, n) {
    return t + n;
  }, euclidean: function(t, n) {
    return Math.sqrt(t * t + n * n);
  }, octile: function(t, n) {
    var o = Math.SQRT2 - 1;
    return t < n ? o * t + n : o * n + t;
  }, chebyshev: function(t, n) {
    return Math.max(t, n);
  } }), wt;
}
var bt, Un;
function Qt() {
  if (Un) return bt;
  Un = 1;
  var t = nt(), n = ye(), o = Be(), e = ee();
  function r(i) {
    i = i || {}, this.allowDiagonal = i.allowDiagonal, this.dontCrossCorners = i.dontCrossCorners, this.heuristic = i.heuristic || o.manhattan, this.weight = i.weight || 1, this.diagonalMovement = i.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = e.OnlyWhenNoObstacles : this.diagonalMovement = e.IfAtMostOneObstacle : this.diagonalMovement = e.Never), this.diagonalMovement === e.Never ? this.heuristic = i.heuristic || o.manhattan : this.heuristic = i.heuristic || o.octile;
  }
  return r.prototype.findPath = function(i, a, s, c, u) {
    var l = new t(function(B, L) {
      return B.f - L.f;
    }), f = u.getNodeAt(i, a), d = u.getNodeAt(s, c), h = this.heuristic, g = this.diagonalMovement, m = this.weight, p = Math.abs, w = Math.SQRT2, b, y, x, M, S, W, _, I;
    for (f.g = 0, f.f = 0, l.push(f), f.opened = true; !l.empty(); ) {
      if (b = l.pop(), b.closed = true, b === d) return n.backtrace(d);
      for (y = u.getNeighbors(b, g), M = 0, S = y.length; M < S; ++M) x = y[M], !x.closed && (W = x.x, _ = x.y, I = b.g + (W - b.x === 0 || _ - b.y === 0 ? 1 : w), (!x.opened || I < x.g) && (x.g = I, x.h = x.h || m * h(p(W - s), p(_ - c)), x.f = x.g + x.h, x.parent = b, x.opened ? l.updateItem(x) : (l.push(x), x.opened = true)));
    }
    return [];
  }, bt = r, bt;
}
var yt, Jn;
function ro() {
  if (Jn) return yt;
  Jn = 1;
  var t = Qt();
  function n(o) {
    t.call(this, o);
    var e = this.heuristic;
    this.heuristic = function(r, i) {
      return e(r, i) * 1e6;
    };
  }
  return n.prototype = new t(), n.prototype.constructor = n, yt = n, yt;
}
var At, zn;
function io() {
  if (zn) return At;
  zn = 1;
  var t = ye(), n = ee();
  function o(e) {
    e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = n.OnlyWhenNoObstacles : this.diagonalMovement = n.IfAtMostOneObstacle : this.diagonalMovement = n.Never);
  }
  return o.prototype.findPath = function(e, r, i, a, s) {
    var c = [], u = this.diagonalMovement, l = s.getNodeAt(e, r), f = s.getNodeAt(i, a), d, h, g, m, p;
    for (c.push(l), l.opened = true; c.length; ) {
      if (g = c.shift(), g.closed = true, g === f) return t.backtrace(f);
      for (d = s.getNeighbors(g, u), m = 0, p = d.length; m < p; ++m) h = d[m], !(h.closed || h.opened) && (c.push(h), h.opened = true, h.parent = g);
    }
    return [];
  }, At = o, At;
}
var Ct, Vn;
function oo() {
  if (Vn) return Ct;
  Vn = 1;
  var t = Qt();
  function n(o) {
    t.call(this, o), this.heuristic = function(e, r) {
      return 0;
    };
  }
  return n.prototype = new t(), n.prototype.constructor = n, Ct = n, Ct;
}
var Ft, Yn;
function en() {
  if (Yn) return Ft;
  Yn = 1;
  var t = nt(), n = ye(), o = Be(), e = ee();
  function r(i) {
    i = i || {}, this.allowDiagonal = i.allowDiagonal, this.dontCrossCorners = i.dontCrossCorners, this.diagonalMovement = i.diagonalMovement, this.heuristic = i.heuristic || o.manhattan, this.weight = i.weight || 1, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = e.OnlyWhenNoObstacles : this.diagonalMovement = e.IfAtMostOneObstacle : this.diagonalMovement = e.Never), this.diagonalMovement === e.Never ? this.heuristic = i.heuristic || o.manhattan : this.heuristic = i.heuristic || o.octile;
  }
  return r.prototype.findPath = function(i, a, s, c, u) {
    var l = function(U, te) {
      return U.f - te.f;
    }, f = new t(l), d = new t(l), h = u.getNodeAt(i, a), g = u.getNodeAt(s, c), m = this.heuristic, p = this.diagonalMovement, w = this.weight, b = Math.abs, y = Math.SQRT2, x, M, S, W, _, I, B, L, j = 1, J = 2;
    for (h.g = 0, h.f = 0, f.push(h), h.opened = j, g.g = 0, g.f = 0, d.push(g), g.opened = J; !f.empty() && !d.empty(); ) {
      for (x = f.pop(), x.closed = true, M = u.getNeighbors(x, p), W = 0, _ = M.length; W < _; ++W) if (S = M[W], !S.closed) {
        if (S.opened === J) return n.biBacktrace(x, S);
        I = S.x, B = S.y, L = x.g + (I - x.x === 0 || B - x.y === 0 ? 1 : y), (!S.opened || L < S.g) && (S.g = L, S.h = S.h || w * m(b(I - s), b(B - c)), S.f = S.g + S.h, S.parent = x, S.opened ? f.updateItem(S) : (f.push(S), S.opened = j));
      }
      for (x = d.pop(), x.closed = true, M = u.getNeighbors(x, p), W = 0, _ = M.length; W < _; ++W) if (S = M[W], !S.closed) {
        if (S.opened === j) return n.biBacktrace(S, x);
        I = S.x, B = S.y, L = x.g + (I - x.x === 0 || B - x.y === 0 ? 1 : y), (!S.opened || L < S.g) && (S.g = L, S.h = S.h || w * m(b(I - i), b(B - a)), S.f = S.g + S.h, S.parent = x, S.opened ? d.updateItem(S) : (d.push(S), S.opened = J));
      }
    }
    return [];
  }, Ft = r, Ft;
}
var xt, Kn;
function so() {
  if (Kn) return xt;
  Kn = 1;
  var t = en();
  function n(o) {
    t.call(this, o);
    var e = this.heuristic;
    this.heuristic = function(r, i) {
      return e(r, i) * 1e6;
    };
  }
  return n.prototype = new t(), n.prototype.constructor = n, xt = n, xt;
}
var Ot, Xn;
function ao() {
  if (Xn) return Ot;
  Xn = 1;
  var t = ye(), n = ee();
  function o(e) {
    e = e || {}, this.allowDiagonal = e.allowDiagonal, this.dontCrossCorners = e.dontCrossCorners, this.diagonalMovement = e.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = n.OnlyWhenNoObstacles : this.diagonalMovement = n.IfAtMostOneObstacle : this.diagonalMovement = n.Never);
  }
  return o.prototype.findPath = function(e, r, i, a, s) {
    var c = s.getNodeAt(e, r), u = s.getNodeAt(i, a), l = [], f = [], d, h, g, m = this.diagonalMovement, p = 0, w = 1, b, y;
    for (l.push(c), c.opened = true, c.by = p, f.push(u), u.opened = true, u.by = w; l.length && f.length; ) {
      for (g = l.shift(), g.closed = true, d = s.getNeighbors(g, m), b = 0, y = d.length; b < y; ++b) if (h = d[b], !h.closed) {
        if (h.opened) {
          if (h.by === w) return t.biBacktrace(g, h);
          continue;
        }
        l.push(h), h.parent = g, h.opened = true, h.by = p;
      }
      for (g = f.shift(), g.closed = true, d = s.getNeighbors(g, m), b = 0, y = d.length; b < y; ++b) if (h = d[b], !h.closed) {
        if (h.opened) {
          if (h.by === p) return t.biBacktrace(h, g);
          continue;
        }
        f.push(h), h.parent = g, h.opened = true, h.by = w;
      }
    }
    return [];
  }, Ot = o, Ot;
}
var kt, Gn;
function lo() {
  if (Gn) return kt;
  Gn = 1;
  var t = en();
  function n(o) {
    t.call(this, o), this.heuristic = function(e, r) {
      return 0;
    };
  }
  return n.prototype = new t(), n.prototype.constructor = n, kt = n, kt;
}
var Dt, $n;
function uo() {
  if ($n) return Dt;
  $n = 1, ye();
  var t = Be(), n = Zt(), o = ee();
  function e(r) {
    r = r || {}, this.allowDiagonal = r.allowDiagonal, this.dontCrossCorners = r.dontCrossCorners, this.diagonalMovement = r.diagonalMovement, this.heuristic = r.heuristic || t.manhattan, this.weight = r.weight || 1, this.trackRecursion = r.trackRecursion || false, this.timeLimit = r.timeLimit || 1 / 0, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = o.OnlyWhenNoObstacles : this.diagonalMovement = o.IfAtMostOneObstacle : this.diagonalMovement = o.Never), this.diagonalMovement === o.Never ? this.heuristic = r.heuristic || t.manhattan : this.heuristic = r.heuristic || t.octile;
  }
  return e.prototype.findPath = function(r, i, a, s, c) {
    var u = (/* @__PURE__ */ new Date()).getTime(), l = (function(y, x) {
      return this.heuristic(Math.abs(x.x - y.x), Math.abs(x.y - y.y));
    }).bind(this), f = function(y, x) {
      return y.x === x.x || y.y === x.y ? 1 : Math.SQRT2;
    }, d = (function(y, x, M, S, W) {
      if (this.timeLimit > 0 && (/* @__PURE__ */ new Date()).getTime() - u > this.timeLimit * 1e3) return 1 / 0;
      var _ = x + l(y, g) * this.weight;
      if (_ > M) return _;
      if (y == g) return S[W] = [y.x, y.y], y;
      var I, B, L, j, J = c.getNeighbors(y, this.diagonalMovement);
      for (L = 0, I = 1 / 0; j = J[L]; ++L) {
        if (this.trackRecursion && (j.retainCount = j.retainCount + 1 || 1, j.tested !== true && (j.tested = true)), B = d(j, x + f(y, j), M, S, W + 1), B instanceof n) return S[W] = [y.x, y.y], B;
        this.trackRecursion && --j.retainCount === 0 && (j.tested = false), B < I && (I = B);
      }
      return I;
    }).bind(this), h = c.getNodeAt(r, i), g = c.getNodeAt(a, s), m = l(h, g), p, w, b;
    for (p = 0; ; ++p) {
      if (w = [], b = d(h, 0, m, w, 0), b === 1 / 0) return [];
      if (b instanceof n) return w;
      m = b;
    }
    return [];
  }, Dt = e, Dt;
}
var Mt, Zn;
function rt() {
  if (Zn) return Mt;
  Zn = 1;
  var t = nt(), n = ye(), o = Be();
  ee();
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
    var i = this.grid, a = this.heuristic, s = this.openList, c = this.endNode.x, u = this.endNode.y, l, f, d, h, g, m = r.x, p = r.y, w, b, y, x, M, S = Math.abs;
    for (l = this._findNeighbors(r), h = 0, g = l.length; h < g; ++h) if (f = l[h], d = this._jump(f[0], f[1], m, p), d) {
      if (w = d[0], b = d[1], M = i.getNodeAt(w, b), M.closed) continue;
      y = o.octile(S(w - m), S(b - p)), x = r.g + y, (!M.opened || x < M.g) && (M.g = x, M.h = M.h || a(S(w - c), S(b - u)), M.f = M.g + M.h, M.parent = r, M.opened ? s.updateItem(M) : (s.push(M), M.opened = true));
    }
  }, Mt = e, Mt;
}
var St, Qn;
function fo() {
  if (Qn) return St;
  Qn = 1;
  var t = rt(), n = ee();
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
    var r = e.parent, i = e.x, a = e.y, s = this.grid, c, u, l, f, d = [], h, g, m, p;
    if (r) c = r.x, u = r.y, l = (i - c) / Math.max(Math.abs(i - c), 1), f = (a - u) / Math.max(Math.abs(a - u), 1), l !== 0 ? (s.isWalkableAt(i, a - 1) && d.push([i, a - 1]), s.isWalkableAt(i, a + 1) && d.push([i, a + 1]), s.isWalkableAt(i + l, a) && d.push([i + l, a])) : f !== 0 && (s.isWalkableAt(i - 1, a) && d.push([i - 1, a]), s.isWalkableAt(i + 1, a) && d.push([i + 1, a]), s.isWalkableAt(i, a + f) && d.push([i, a + f]));
    else for (h = s.getNeighbors(e, n.Never), m = 0, p = h.length; m < p; ++m) g = h[m], d.push([g.x, g.y]);
    return d;
  }, St = o, St;
}
var Pt, er;
function co() {
  if (er) return Pt;
  er = 1;
  var t = rt(), n = ee();
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
    var r = e.parent, i = e.x, a = e.y, s = this.grid, c, u, l, f, d = [], h, g, m, p;
    if (r) c = r.x, u = r.y, l = (i - c) / Math.max(Math.abs(i - c), 1), f = (a - u) / Math.max(Math.abs(a - u), 1), l !== 0 && f !== 0 ? (s.isWalkableAt(i, a + f) && d.push([i, a + f]), s.isWalkableAt(i + l, a) && d.push([i + l, a]), s.isWalkableAt(i + l, a + f) && d.push([i + l, a + f]), s.isWalkableAt(i - l, a) || d.push([i - l, a + f]), s.isWalkableAt(i, a - f) || d.push([i + l, a - f])) : l === 0 ? (s.isWalkableAt(i, a + f) && d.push([i, a + f]), s.isWalkableAt(i + 1, a) || d.push([i + 1, a + f]), s.isWalkableAt(i - 1, a) || d.push([i - 1, a + f])) : (s.isWalkableAt(i + l, a) && d.push([i + l, a]), s.isWalkableAt(i, a + 1) || d.push([i + l, a + 1]), s.isWalkableAt(i, a - 1) || d.push([i + l, a - 1]));
    else for (h = s.getNeighbors(e, n.Always), m = 0, p = h.length; m < p; ++m) g = h[m], d.push([g.x, g.y]);
    return d;
  }, Pt = o, Pt;
}
var Et, tr;
function ho() {
  if (tr) return Et;
  tr = 1;
  var t = rt(), n = ee();
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
    var r = e.parent, i = e.x, a = e.y, s = this.grid, c, u, l, f, d = [], h, g, m, p;
    if (r) if (c = r.x, u = r.y, l = (i - c) / Math.max(Math.abs(i - c), 1), f = (a - u) / Math.max(Math.abs(a - u), 1), l !== 0 && f !== 0) s.isWalkableAt(i, a + f) && d.push([i, a + f]), s.isWalkableAt(i + l, a) && d.push([i + l, a]), s.isWalkableAt(i, a + f) && s.isWalkableAt(i + l, a) && d.push([i + l, a + f]);
    else {
      var w;
      if (l !== 0) {
        w = s.isWalkableAt(i + l, a);
        var b = s.isWalkableAt(i, a + 1), y = s.isWalkableAt(i, a - 1);
        w && (d.push([i + l, a]), b && d.push([i + l, a + 1]), y && d.push([i + l, a - 1])), b && d.push([i, a + 1]), y && d.push([i, a - 1]);
      } else if (f !== 0) {
        w = s.isWalkableAt(i, a + f);
        var x = s.isWalkableAt(i + 1, a), M = s.isWalkableAt(i - 1, a);
        w && (d.push([i, a + f]), x && d.push([i + 1, a + f]), M && d.push([i - 1, a + f])), x && d.push([i + 1, a]), M && d.push([i - 1, a]);
      }
    }
    else for (h = s.getNeighbors(e, n.OnlyWhenNoObstacles), m = 0, p = h.length; m < p; ++m) g = h[m], d.push([g.x, g.y]);
    return d;
  }, Et = o, Et;
}
var Rt, nr;
function po() {
  if (nr) return Rt;
  nr = 1;
  var t = rt(), n = ee();
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
    var r = e.parent, i = e.x, a = e.y, s = this.grid, c, u, l, f, d = [], h, g, m, p;
    if (r) c = r.x, u = r.y, l = (i - c) / Math.max(Math.abs(i - c), 1), f = (a - u) / Math.max(Math.abs(a - u), 1), l !== 0 && f !== 0 ? (s.isWalkableAt(i, a + f) && d.push([i, a + f]), s.isWalkableAt(i + l, a) && d.push([i + l, a]), (s.isWalkableAt(i, a + f) || s.isWalkableAt(i + l, a)) && d.push([i + l, a + f]), !s.isWalkableAt(i - l, a) && s.isWalkableAt(i, a + f) && d.push([i - l, a + f]), !s.isWalkableAt(i, a - f) && s.isWalkableAt(i + l, a) && d.push([i + l, a - f])) : l === 0 ? s.isWalkableAt(i, a + f) && (d.push([i, a + f]), s.isWalkableAt(i + 1, a) || d.push([i + 1, a + f]), s.isWalkableAt(i - 1, a) || d.push([i - 1, a + f])) : s.isWalkableAt(i + l, a) && (d.push([i + l, a]), s.isWalkableAt(i, a + 1) || d.push([i + l, a + 1]), s.isWalkableAt(i, a - 1) || d.push([i + l, a - 1]));
    else for (h = s.getNeighbors(e, n.IfAtMostOneObstacle), m = 0, p = h.length; m < p; ++m) g = h[m], d.push([g.x, g.y]);
    return d;
  }, Rt = o, Rt;
}
var Tt, rr;
function go() {
  if (rr) return Tt;
  rr = 1;
  var t = ee(), n = fo(), o = co(), e = ho(), r = po();
  function i(a) {
    return a = a || {}, a.diagonalMovement === t.Never ? new n(a) : a.diagonalMovement === t.Always ? new o(a) : a.diagonalMovement === t.OnlyWhenNoObstacles ? new e(a) : new r(a);
  }
  return Tt = i, Tt;
}
var Wt, ir;
function vo() {
  return ir || (ir = 1, Wt = { Heap: nt(), Node: Zt(), Grid: no(), Util: ye(), DiagonalMovement: ee(), Heuristic: Be(), AStarFinder: Qt(), BestFirstFinder: ro(), BreadthFirstFinder: io(), DijkstraFinder: oo(), BiAStarFinder: en(), BiBestFirstFinder: so(), BiBreadthFirstFinder: ao(), BiDijkstraFinder: lo(), IDAStarFinder: uo(), JumpPointFinder: go() }), Wt;
}
var _t, or;
function mo() {
  return or || (or = 1, _t = vo()), _t;
}
var Uo = mo();
export {
  Ao as D,
  hn as _,
  Co as a,
  Fo as b,
  Wo as c,
  Po as d,
  Eo as e,
  So as f,
  xo as g,
  Oo as h,
  bo as i,
  Ro as j,
  ko as k,
  To as l,
  Bo as m,
  Io as n,
  Do as o,
  Ji as p,
  Hi as q,
  Lo as r,
  Mo as s,
  _o as t,
  qo as u,
  Ho as v,
  yo as w,
  jo as x,
  No as y,
  Uo as z
};
