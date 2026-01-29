import { g as Le } from "./index-BHy3yCie.js";
var Ue = { exports: {} }, xn = Ue.exports, St;
function Cn() {
  return St || (St = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(xn, function() {
      function r(h) {
        return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
          return typeof f;
        } : function(f) {
          return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
        })(h);
      }
      function n(h, f) {
        if (!(h instanceof f)) throw new TypeError("Cannot call a class as a function");
      }
      function l(h, f) {
        for (var v = 0; v < f.length; v++) {
          var O = f[v];
          O.enumerable = O.enumerable || false, O.configurable = true, "value" in O && (O.writable = true), Object.defineProperty(h, O.key, O);
        }
      }
      function s(h, f, v) {
        f && l(h.prototype, f), v && l(h, v), Object.defineProperty(h, "prototype", { writable: false });
      }
      function c(h, f, v) {
        f in h ? Object.defineProperty(h, f, { value: v, enumerable: true, configurable: true, writable: true }) : h[f] = v;
      }
      function g(h, f) {
        if (typeof f != "function" && f !== null) throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(f && f.prototype, { constructor: { value: h, writable: true, configurable: true } }), Object.defineProperty(h, "prototype", { writable: false }), f && a(h, f);
      }
      function d(h) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(f) {
          return f.__proto__ || Object.getPrototypeOf(f);
        })(h);
      }
      function a(h, f) {
        return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, O) {
          return v.__proto__ = O, v;
        })(h, f);
      }
      function o(h, f) {
        if (f && (typeof f == "object" || typeof f == "function")) return f;
        if (f !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        if (f = h, f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return f;
      }
      function i(h) {
        var f = (function() {
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
          var v, O = d(h);
          return o(this, f ? (v = d(this).constructor, Reflect.construct(O, arguments, v)) : O.apply(this, arguments));
        };
      }
      function u(h, f) {
        (f == null || f > h.length) && (f = h.length);
        for (var v = 0, O = new Array(f); v < f; v++) O[v] = h[v];
        return O;
      }
      function m(h, f) {
        var v, O = typeof Symbol < "u" && h[Symbol.iterator] || h["@@iterator"];
        if (!O) {
          if (Array.isArray(h) || (O = (function(p, y) {
            if (p) {
              if (typeof p == "string") return u(p, y);
              var C = Object.prototype.toString.call(p).slice(8, -1);
              return (C = C === "Object" && p.constructor ? p.constructor.name : C) === "Map" || C === "Set" ? Array.from(p) : C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C) ? u(p, y) : void 0;
            }
          })(h)) || f && h && typeof h.length == "number") return O && (h = O), v = 0, { s: f = function() {
          }, n: function() {
            return v >= h.length ? { done: true } : { done: false, value: h[v++] };
          }, e: function(p) {
            throw p;
          }, f };
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var D, w = true, I = false;
        return { s: function() {
          O = O.call(h);
        }, n: function() {
          var p = O.next();
          return w = p.done, p;
        }, e: function(p) {
          I = true, D = p;
        }, f: function() {
          try {
            w || O.return == null || O.return();
          } finally {
            if (I) throw D;
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
          } catch (h) {
            console.log(h);
          }
          setTimeout(function() {
            window.location.href = x.timeOutUrl || "https://theajack.github.io/disable-devtool/404.html?h=".concat(encodeURIComponent(location.host));
          }, 500);
        }
      }
      var x = { md5: "", ondevtoolopen: A, ondevtoolclose: null, url: "", timeOutUrl: "", tkName: "ddtk", interval: 500, disableMenu: true, stopIntervalTime: 5e3, clearIntervalWhenDevOpenTrigger: false, detectors: [1, 3, 4, 5, 6, 7], clearLog: true, disableSelect: false, disableInputSelect: false, disableCopy: false, disableCut: false, disablePaste: false, ignore: null, disableIframeParents: true, seo: true, rewriteHTML: "" }, E = ["detectors", "ondevtoolclose", "ignore"];
      function T(h) {
        var f, v = 0 < arguments.length && h !== void 0 ? h : {};
        for (f in v.onDevtoolOpen && (v.ondevtoolopen = v.onDevtoolOpen), v.onDevtoolClose && (v.ondevtoolclose = v.onDevtoolClose), x) {
          var O = f;
          v[O] === void 0 || r(x[O]) !== r(v[O]) && E.indexOf(O) === -1 || (x[O] = v[O]);
        }
        typeof x.ondevtoolclose == "function" && x.clearIntervalWhenDevOpenTrigger === true && (x.clearIntervalWhenDevOpenTrigger = false, console.warn("\u3010DISABLE-DEVTOOL\u3011clearIntervalWhenDevOpenTrigger \u5728\u4F7F\u7528 ondevtoolclose \u65F6\u65E0\u6548"));
      }
      function R() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
      function L(h) {
        var f = R();
        return h(), R() - f;
      }
      function M(h, f) {
        function v(I) {
          return function() {
            h && h();
            var p = I.apply(void 0, arguments);
            return f && f(), p;
          };
        }
        var O = window.alert, D = window.confirm, w = window.prompt;
        try {
          window.alert = v(O), window.confirm = v(D), window.prompt = v(w);
        } catch {
        }
      }
      var j, B, W, q = { iframe: false, pc: false, qqBrowser: false, firefox: false, macos: false, edge: false, oldEdge: false, ie: false, iosChrome: false, iosEdge: false, chrome: false, seoBot: false, mobile: false };
      function X() {
        function h(ve) {
          return f.indexOf(ve) !== -1;
        }
        var f = navigator.userAgent.toLowerCase(), v = (function() {
          var ge = navigator, ve = ge.platform, ge = ge.maxTouchPoints;
          if (typeof ge == "number") return 1 < ge;
          if (typeof ve == "string") {
            if (ge = ve.toLowerCase(), /(mac|win)/i.test(ge)) return false;
            if (/(android|iphone|ipad|ipod|arch)/i.test(ge)) return true;
          }
          return /(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase());
        })(), O = !!window.top && window !== window.top, D = !v, w = h("qqbrowser"), I = h("firefox"), p = h("macintosh"), y = h("edge"), C = y && !h("chrome"), b = C || h("trident") || h("msie"), F = h("crios"), Oe = h("edgios"), me = h("chrome") || F, Fe = !v && /(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(f);
        Object.assign(q, { iframe: O, pc: D, qqBrowser: w, firefox: I, macos: p, edge: y, oldEdge: C, ie: b, iosChrome: F, iosEdge: Oe, chrome: me, seoBot: Fe, mobile: v });
      }
      function V() {
        for (var h = (function() {
          for (var O = {}, D = 0; D < 500; D++) O["".concat(D)] = "".concat(D);
          return O;
        })(), f = [], v = 0; v < 50; v++) f.push(h);
        return f;
      }
      function K() {
        x.clearLog && W();
      }
      var U = "", $ = false;
      function z() {
        var h = x.ignore;
        if (h) {
          if (typeof h == "function") return h();
          if (h.length !== 0) {
            var f = location.href;
            if (U === f) return $;
            U = f;
            var v, O = false, D = m(h);
            try {
              for (D.s(); !(v = D.n()).done; ) {
                var w = v.value;
                if (typeof w == "string") {
                  if (f.indexOf(w) !== -1) {
                    O = true;
                    break;
                  }
                } else if (w.test(f)) {
                  O = true;
                  break;
                }
              }
            } catch (I) {
              D.e(I);
            } finally {
              D.f();
            }
            return $ = O;
          }
        }
      }
      var ee = function() {
        return false;
      };
      function S(h) {
        var f, v, O = 74, D = 73, w = 85, I = 83, p = 123, y = q.macos ? function(b, F) {
          return b.metaKey && b.altKey && (F === D || F === O);
        } : function(b, F) {
          return b.ctrlKey && b.shiftKey && (F === D || F === O);
        }, C = q.macos ? function(b, F) {
          return b.metaKey && b.altKey && F === w || b.metaKey && F === I;
        } : function(b, F) {
          return b.ctrlKey && (F === I || F === w);
        };
        h.addEventListener("keydown", function(b) {
          var F = (b = b || h.event).keyCode || b.which;
          if (F === p || y(b, F) || C(b, F)) return k(h, b);
        }, true), f = h, x.disableMenu && f.addEventListener("contextmenu", function(b) {
          if (b.pointerType !== "touch") return k(f, b);
        }), v = h, (x.disableSelect || x.disableInputSelect) && P(v, "selectstart"), v = h, x.disableCopy && P(v, "copy"), v = h, x.disableCut && P(v, "cut"), v = h, x.disablePaste && P(v, "paste");
      }
      function P(h, f) {
        h.addEventListener(f, function(v) {
          if (!(O = v.target) || O.tagName !== "INPUT" && O.tagName !== "TEXTAREA" && ((D = O.getAttribute) == null ? void 0 : D.call(O, "contenteditable")) !== "true") {
            if (x.disableSelect) return k(h, v);
          } else if (x.disableInputSelect) return k(h, v);
          var O, D;
        });
      }
      function k(h, f) {
        if (!z() && !ee()) return (f = f || h.event).returnValue = false, f.preventDefault(), false;
      }
      var _, H = false, ce = {};
      function ye(h) {
        ce[h] = false;
      }
      function Ce() {
        for (var h in ce) if (ce[h]) return H = true;
        return H = false;
      }
      (N = _ = _ || {})[N.Unknown = -1] = "Unknown", N[N.RegToString = 0] = "RegToString", N[N.DefineId = 1] = "DefineId", N[N.Size = 2] = "Size", N[N.DateToString = 3] = "DateToString", N[N.FuncToString = 4] = "FuncToString", N[N.Debugger = 5] = "Debugger", N[N.Performance = 6] = "Performance", N[N.DebugLib = 7] = "DebugLib";
      var Y = (function() {
        function h(O) {
          var v = O.type, O = O.enabled, O = O === void 0 || O;
          n(this, h), this.type = _.Unknown, this.enabled = true, this.type = v, this.enabled = O, this.enabled && (v = this, xt.push(v), this.init());
        }
        return s(h, [{ key: "onDevToolOpen", value: function() {
          var f;
          console.warn("You don't have permission to use DEVTOOL!\u3010type = ".concat(this.type, "\u3011")), x.clearIntervalWhenDevOpenTrigger && Ct(), window.clearTimeout(bt), x.ondevtoolopen(this.type, A), f = this.type, ce[f] = true;
        } }, { key: "init", value: function() {
        } }]), h;
      })(), be = (function() {
        g(f, Y);
        var h = i(f);
        function f() {
          return n(this, f), h.call(this, { type: _.DebugLib });
        }
        return s(f, [{ key: "init", value: function() {
        } }, { key: "detect", value: function() {
          var v;
          (((v = (v = window.eruda) == null ? void 0 : v._devTools) == null ? void 0 : v._isShow) === true || window._vcOrigConsole && window.document.querySelector("#__vconsole.vc-toggle")) && this.onDevToolOpen();
        } }], [{ key: "isUsing", value: function() {
          return !!window.eruda || !!window._vcOrigConsole;
        } }]), f;
      })(), yt = 0, bt = 0, xt = [], hn = 0;
      function mn(h) {
        function f() {
          C = true;
        }
        function v() {
          C = false;
        }
        var O, D, w, I, p, y, C = false;
        function b() {
          (y[I] === w ? D : O)();
        }
        M(f, v), O = v, D = f, (y = document).hidden !== void 0 ? (w = "hidden", p = "visibilitychange", I = "visibilityState") : y.mozHidden !== void 0 ? (w = "mozHidden", p = "mozvisibilitychange", I = "mozVisibilityState") : y.msHidden !== void 0 ? (w = "msHidden", p = "msvisibilitychange", I = "msVisibilityState") : y.webkitHidden !== void 0 && (w = "webkitHidden", p = "webkitvisibilitychange", I = "webkitVisibilityState"), y.removeEventListener(p, b, false), y.addEventListener(p, b, false), yt = window.setInterval(function() {
          if (!(h.isSuspend || C || z())) {
            var F, Oe, me = m(xt);
            try {
              for (me.s(); !(F = me.n()).done; ) {
                var Fe = F.value;
                ye(Fe.type), Fe.detect(hn++);
              }
            } catch (ve) {
              me.e(ve);
            } finally {
              me.f();
            }
            K(), typeof x.ondevtoolclose == "function" && (Oe = H, !Ce() && Oe && x.ondevtoolclose());
          }
        }, x.interval), bt = setTimeout(function() {
          q.pc || be.isUsing() || Ct();
        }, x.stopIntervalTime);
      }
      function Ct() {
        window.clearInterval(yt);
      }
      var _e = 8;
      function At(h) {
        for (var f = (function(w, I) {
          w[I >> 5] |= 128 << I % 32, w[14 + (I + 64 >>> 9 << 4)] = I;
          for (var p = 1732584193, y = -271733879, C = -1732584194, b = 271733878, F = 0; F < w.length; F += 16) {
            var Oe = p, me = y, Fe = C, ve = b;
            p = G(p, y, C, b, w[F + 0], 7, -680876936), b = G(b, p, y, C, w[F + 1], 12, -389564586), C = G(C, b, p, y, w[F + 2], 17, 606105819), y = G(y, C, b, p, w[F + 3], 22, -1044525330), p = G(p, y, C, b, w[F + 4], 7, -176418897), b = G(b, p, y, C, w[F + 5], 12, 1200080426), C = G(C, b, p, y, w[F + 6], 17, -1473231341), y = G(y, C, b, p, w[F + 7], 22, -45705983), p = G(p, y, C, b, w[F + 8], 7, 1770035416), b = G(b, p, y, C, w[F + 9], 12, -1958414417), C = G(C, b, p, y, w[F + 10], 17, -42063), y = G(y, C, b, p, w[F + 11], 22, -1990404162), p = G(p, y, C, b, w[F + 12], 7, 1804603682), b = G(b, p, y, C, w[F + 13], 12, -40341101), C = G(C, b, p, y, w[F + 14], 17, -1502002290), y = G(y, C, b, p, w[F + 15], 22, 1236535329), p = Z(p, y, C, b, w[F + 1], 5, -165796510), b = Z(b, p, y, C, w[F + 6], 9, -1069501632), C = Z(C, b, p, y, w[F + 11], 14, 643717713), y = Z(y, C, b, p, w[F + 0], 20, -373897302), p = Z(p, y, C, b, w[F + 5], 5, -701558691), b = Z(b, p, y, C, w[F + 10], 9, 38016083), C = Z(C, b, p, y, w[F + 15], 14, -660478335), y = Z(y, C, b, p, w[F + 4], 20, -405537848), p = Z(p, y, C, b, w[F + 9], 5, 568446438), b = Z(b, p, y, C, w[F + 14], 9, -1019803690), C = Z(C, b, p, y, w[F + 3], 14, -187363961), y = Z(y, C, b, p, w[F + 8], 20, 1163531501), p = Z(p, y, C, b, w[F + 13], 5, -1444681467), b = Z(b, p, y, C, w[F + 2], 9, -51403784), C = Z(C, b, p, y, w[F + 7], 14, 1735328473), y = Z(y, C, b, p, w[F + 12], 20, -1926607734), p = J(p, y, C, b, w[F + 5], 4, -378558), b = J(b, p, y, C, w[F + 8], 11, -2022574463), C = J(C, b, p, y, w[F + 11], 16, 1839030562), y = J(y, C, b, p, w[F + 14], 23, -35309556), p = J(p, y, C, b, w[F + 1], 4, -1530992060), b = J(b, p, y, C, w[F + 4], 11, 1272893353), C = J(C, b, p, y, w[F + 7], 16, -155497632), y = J(y, C, b, p, w[F + 10], 23, -1094730640), p = J(p, y, C, b, w[F + 13], 4, 681279174), b = J(b, p, y, C, w[F + 0], 11, -358537222), C = J(C, b, p, y, w[F + 3], 16, -722521979), y = J(y, C, b, p, w[F + 6], 23, 76029189), p = J(p, y, C, b, w[F + 9], 4, -640364487), b = J(b, p, y, C, w[F + 12], 11, -421815835), C = J(C, b, p, y, w[F + 15], 16, 530742520), y = J(y, C, b, p, w[F + 2], 23, -995338651), p = Q(p, y, C, b, w[F + 0], 6, -198630844), b = Q(b, p, y, C, w[F + 7], 10, 1126891415), C = Q(C, b, p, y, w[F + 14], 15, -1416354905), y = Q(y, C, b, p, w[F + 5], 21, -57434055), p = Q(p, y, C, b, w[F + 12], 6, 1700485571), b = Q(b, p, y, C, w[F + 3], 10, -1894986606), C = Q(C, b, p, y, w[F + 10], 15, -1051523), y = Q(y, C, b, p, w[F + 1], 21, -2054922799), p = Q(p, y, C, b, w[F + 8], 6, 1873313359), b = Q(b, p, y, C, w[F + 15], 10, -30611744), C = Q(C, b, p, y, w[F + 6], 15, -1560198380), y = Q(y, C, b, p, w[F + 13], 21, 1309151649), p = Q(p, y, C, b, w[F + 4], 6, -145523070), b = Q(b, p, y, C, w[F + 11], 10, -1120210379), C = Q(C, b, p, y, w[F + 2], 15, 718787259), y = Q(y, C, b, p, w[F + 9], 21, -343485551), p = he(p, Oe), y = he(y, me), C = he(C, Fe), b = he(b, ve);
          }
          return Array(p, y, C, b);
        })((function(w) {
          for (var I = Array(), p = (1 << _e) - 1, y = 0; y < w.length * _e; y += _e) I[y >> 5] |= (w.charCodeAt(y / _e) & p) << y % 32;
          return I;
        })(h), h.length * _e), v = "0123456789abcdef", O = "", D = 0; D < 4 * f.length; D++) O += v.charAt(f[D >> 2] >> D % 4 * 8 + 4 & 15) + v.charAt(f[D >> 2] >> D % 4 * 8 & 15);
        return O;
      }
      function je(h, f, v, O, D, w) {
        return he((f = he(he(f, h), he(O, w))) << D | f >>> 32 - D, v);
      }
      function G(h, f, v, O, D, w, I) {
        return je(f & v | ~f & O, h, f, D, w, I);
      }
      function Z(h, f, v, O, D, w, I) {
        return je(f & O | v & ~O, h, f, D, w, I);
      }
      function J(h, f, v, O, D, w, I) {
        return je(f ^ v ^ O, h, f, D, w, I);
      }
      function Q(h, f, v, O, D, w, I) {
        return je(v ^ (f | ~O), h, f, D, w, I);
      }
      function he(h, f) {
        var v = (65535 & h) + (65535 & f);
        return (h >> 16) + (f >> 16) + (v >> 16) << 16 | 65535 & v;
      }
      var N = (function() {
        g(f, Y);
        var h = i(f);
        function f() {
          return n(this, f), h.call(this, { type: _.RegToString, enabled: q.qqBrowser || q.firefox });
        }
        return s(f, [{ key: "init", value: function() {
          var v = this;
          this.lastTime = 0, this.reg = /./, j(this.reg), this.reg.toString = function() {
            var O;
            return q.qqBrowser ? (O = (/* @__PURE__ */ new Date()).getTime(), v.lastTime && O - v.lastTime < 100 ? v.onDevToolOpen() : v.lastTime = O) : q.firefox && v.onDevToolOpen(), "";
          };
        } }, { key: "detect", value: function() {
          j(this.reg);
        } }]), f;
      })(), vn = (function() {
        g(f, Y);
        var h = i(f);
        function f() {
          return n(this, f), h.call(this, { type: _.DefineId });
        }
        return s(f, [{ key: "init", value: function() {
          var v = this;
          this.div = document.createElement("div"), this.div.__defineGetter__("id", function() {
            v.onDevToolOpen();
          }), Object.defineProperty(this.div, "id", { get: function() {
            v.onDevToolOpen();
          } });
        } }, { key: "detect", value: function() {
          j(this.div);
        } }]), f;
      })(), gn = (function() {
        g(f, Y);
        var h = i(f);
        function f() {
          return n(this, f), h.call(this, { type: _.Size, enabled: !q.iframe && !q.edge });
        }
        return s(f, [{ key: "init", value: function() {
          var v = this;
          this.checkWindowSizeUneven(), window.addEventListener("resize", function() {
            setTimeout(function() {
              v.checkWindowSizeUneven();
            }, 100);
          }, true);
        } }, { key: "detect", value: function() {
        } }, { key: "checkWindowSizeUneven", value: function() {
          var v = (function() {
            if (Ot(window.devicePixelRatio)) return window.devicePixelRatio;
            var D = window.screen;
            return !!(Ot(D) && D.deviceXDPI && D.logicalXDPI) && D.deviceXDPI / D.logicalXDPI;
          })();
          if (v !== false) {
            var O = 200 < window.outerWidth - window.innerWidth * v, v = 300 < window.outerHeight - window.innerHeight * v;
            if (O || v) return this.onDevToolOpen(), false;
            ye(this.type);
          }
          return true;
        } }]), f;
      })();
      function Ot(h) {
        return h != null;
      }
      var fe, pn = (function() {
        g(f, Y);
        var h = i(f);
        function f() {
          return n(this, f), h.call(this, { type: _.DateToString, enabled: !q.iosChrome && !q.iosEdge });
        }
        return s(f, [{ key: "init", value: function() {
          var v = this;
          this.count = 0, this.date = /* @__PURE__ */ new Date(), this.date.toString = function() {
            return v.count++, "";
          };
        } }, { key: "detect", value: function() {
          this.count = 0, j(this.date), K(), 2 <= this.count && this.onDevToolOpen();
        } }]), f;
      })(), wn = (function() {
        g(f, Y);
        var h = i(f);
        function f() {
          return n(this, f), h.call(this, { type: _.FuncToString, enabled: !q.iosChrome && !q.iosEdge });
        }
        return s(f, [{ key: "init", value: function() {
          var v = this;
          this.count = 0, this.func = function() {
          }, this.func.toString = function() {
            return v.count++, "";
          };
        } }, { key: "detect", value: function() {
          this.count = 0, j(this.func), K(), 2 <= this.count && this.onDevToolOpen();
        } }]), f;
      })(), yn = (function() {
        g(f, Y);
        var h = i(f);
        function f() {
          return n(this, f), h.call(this, { type: _.Debugger, enabled: q.iosChrome || q.iosEdge });
        }
        return s(f, [{ key: "detect", value: function() {
          var v = R();
          100 < R() - v && this.onDevToolOpen();
        } }]), f;
      })(), bn = (function() {
        g(f, Y);
        var h = i(f);
        function f() {
          var v;
          return n(this, f), (v = h.call(this, { type: _.Performance, enabled: q.chrome || !q.mobile })).count = 0, v;
        }
        return s(f, [{ key: "init", value: function() {
          this.maxPrintTime = 0, this.largeObjectArray = V();
        } }, { key: "detect", value: function() {
          var v = this, O = L(function() {
            B(v.largeObjectArray);
          }), D = L(function() {
            j(v.largeObjectArray);
          });
          if (this.maxPrintTime = Math.max(this.maxPrintTime, D), K(), O === 0 || this.maxPrintTime === 0) return false;
          O > 10 * this.maxPrintTime && (2 <= this.count ? this.onDevToolOpen() : (this.count++, this.detect()));
        } }]), f;
      })(), Ft = (c(fe = {}, _.RegToString, N), c(fe, _.DefineId, vn), c(fe, _.Size, gn), c(fe, _.DateToString, pn), c(fe, _.FuncToString, wn), c(fe, _.Debugger, yn), c(fe, _.Performance, bn), c(fe, _.DebugLib, be), fe), Ae = Object.assign(function(h) {
        function f() {
          var I = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "";
          return { success: !I, reason: I };
        }
        var v;
        if (Ae.isRunning) return f("already running");
        if (X(), v = window.console || { log: function() {
        }, table: function() {
        }, clear: function() {
        } }, W = q.ie ? (j = function() {
          return v.log.apply(v, arguments);
        }, B = function() {
          return v.table.apply(v, arguments);
        }, function() {
          return v.clear();
        }) : (j = v.log, B = v.table, v.clear), T(h), x.md5 && At((function(I) {
          var p = window.location.search, y = window.location.hash;
          return (p = p === "" && y !== "" ? "?".concat(y.split("?")[1]) : p) !== "" && p !== void 0 && (y = new RegExp("(^|&)" + I + "=([^&]*)(&|$)", "i"), I = p.substr(1).match(y), I != null) ? unescape(I[2]) : "";
        })(x.tkName)) === x.md5) return f("token passed");
        if (x.seo && q.seoBot) return f("seobot");
        Ae.isRunning = true, mn(Ae);
        var O = Ae, D = (ee = function() {
          return O.isSuspend;
        }, window.top), w = window.parent;
        if (S(window), x.disableIframeParents && D && w && D !== window) {
          for (; w !== D; ) S(w), w = w.parent;
          S(D);
        }
        return (x.detectors === "all" ? Object.keys(Ft) : x.detectors).forEach(function(I) {
          new Ft[I]();
        }), f();
      }, { isRunning: false, isSuspend: false, md5: At, version: "0.3.9", DetectorType: _, isDevToolOpened: Ce });
      return N = (function() {
        if (typeof window > "u" || !window.document) return null;
        var h = document.querySelector("[disable-devtool-auto]");
        if (!h) return null;
        var f = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"], v = ["interval"], O = {};
        return ["md5", "url", "tk-name", "detectors"].concat(f, v).forEach(function(D) {
          var w = h.getAttribute(D);
          w !== null && (v.indexOf(D) !== -1 ? w = parseInt(w) : f.indexOf(D) !== -1 ? w = w !== "false" : D === "detector" && w !== "all" && (w = w.split(" ")), O[(function(I) {
            if (I.indexOf("-") === -1) return I;
            var p = false;
            return I.split("").map(function(y) {
              return y === "-" ? (p = true, "") : p ? (p = false, y.toUpperCase()) : y;
            }).join("");
          })(D)] = w);
        }), O;
      })(), N && Ae(N), Ae;
    });
  })(Ue)), Ue.exports;
}
var An = Cn();
const Br = Le(An);
var Je = { exports: {} }, Qe = {};
var Et;
function On() {
  return Et || (Et = 1, (function(e) {
    function t(S, P) {
      var k = S.length;
      S.push(P);
      e: for (; 0 < k; ) {
        var _ = k - 1 >>> 1, H = S[_];
        if (0 < l(H, P)) S[_] = P, S[k] = H, k = _;
        else break e;
      }
    }
    function r(S) {
      return S.length === 0 ? null : S[0];
    }
    function n(S) {
      if (S.length === 0) return null;
      var P = S[0], k = S.pop();
      if (k !== P) {
        S[0] = k;
        e: for (var _ = 0, H = S.length, ce = H >>> 1; _ < ce; ) {
          var ye = 2 * (_ + 1) - 1, Ce = S[ye], Y = ye + 1, be = S[Y];
          if (0 > l(Ce, k)) Y < H && 0 > l(be, Ce) ? (S[_] = be, S[Y] = k, _ = Y) : (S[_] = Ce, S[ye] = k, _ = ye);
          else if (Y < H && 0 > l(be, k)) S[_] = be, S[Y] = k, _ = Y;
          else break e;
        }
      }
      return P;
    }
    function l(S, P) {
      var k = S.sortIndex - P.sortIndex;
      return k !== 0 ? k : S.id - P.id;
    }
    if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var s = performance;
      e.unstable_now = function() {
        return s.now();
      };
    } else {
      var c = Date, g = c.now();
      e.unstable_now = function() {
        return c.now() - g;
      };
    }
    var d = [], a = [], o = 1, i = null, u = 3, m = false, A = false, x = false, E = false, T = typeof setTimeout == "function" ? setTimeout : null, R = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    function M(S) {
      for (var P = r(a); P !== null; ) {
        if (P.callback === null) n(a);
        else if (P.startTime <= S) n(a), P.sortIndex = P.expirationTime, t(d, P);
        else break;
        P = r(a);
      }
    }
    function j(S) {
      if (x = false, M(S), !A) if (r(d) !== null) A = true, B || (B = true, U());
      else {
        var P = r(a);
        P !== null && ee(j, P.startTime - S);
      }
    }
    var B = false, W = -1, q = 5, X = -1;
    function V() {
      return E ? true : !(e.unstable_now() - X < q);
    }
    function K() {
      if (E = false, B) {
        var S = e.unstable_now();
        X = S;
        var P = true;
        try {
          e: {
            A = false, x && (x = false, R(W), W = -1), m = true;
            var k = u;
            try {
              t: {
                for (M(S), i = r(d); i !== null && !(i.expirationTime > S && V()); ) {
                  var _ = i.callback;
                  if (typeof _ == "function") {
                    i.callback = null, u = i.priorityLevel;
                    var H = _(i.expirationTime <= S);
                    if (S = e.unstable_now(), typeof H == "function") {
                      i.callback = H, M(S), P = true;
                      break t;
                    }
                    i === r(d) && n(d), M(S);
                  } else n(d);
                  i = r(d);
                }
                if (i !== null) P = true;
                else {
                  var ce = r(a);
                  ce !== null && ee(j, ce.startTime - S), P = false;
                }
              }
              break e;
            } finally {
              i = null, u = k, m = false;
            }
            P = void 0;
          }
        } finally {
          P ? U() : B = false;
        }
      }
    }
    var U;
    if (typeof L == "function") U = function() {
      L(K);
    };
    else if (typeof MessageChannel < "u") {
      var $ = new MessageChannel(), z = $.port2;
      $.port1.onmessage = K, U = function() {
        z.postMessage(null);
      };
    } else U = function() {
      T(K, 0);
    };
    function ee(S, P) {
      W = T(function() {
        S(e.unstable_now());
      }, P);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, e.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : q = 0 < S ? Math.floor(1e3 / S) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return u;
    }, e.unstable_next = function(S) {
      switch (u) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = u;
      }
      var k = u;
      u = P;
      try {
        return S();
      } finally {
        u = k;
      }
    }, e.unstable_requestPaint = function() {
      E = true;
    }, e.unstable_runWithPriority = function(S, P) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var k = u;
      u = S;
      try {
        return P();
      } finally {
        u = k;
      }
    }, e.unstable_scheduleCallback = function(S, P, k) {
      var _ = e.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? _ + k : _) : k = _, S) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return H = k + H, S = { id: o++, callback: P, priorityLevel: S, startTime: k, expirationTime: H, sortIndex: -1 }, k > _ ? (S.sortIndex = k, t(a, S), r(d) === null && S === r(a) && (x ? (R(W), W = -1) : x = true, ee(j, k - _))) : (S.sortIndex = H, t(d, S), A || m || (A = true, B || (B = true, U()))), S;
    }, e.unstable_shouldYield = V, e.unstable_wrapCallback = function(S) {
      var P = u;
      return function() {
        var k = u;
        u = P;
        try {
          return S.apply(this, arguments);
        } finally {
          u = k;
        }
      };
    };
  })(Qe)), Qe;
}
var Tt;
function Wr() {
  return Tt || (Tt = 1, Je.exports = On()), Je.exports;
}
var Fn = "Invariant failed";
function Hr(e, t) {
  if (!e) throw new Error(Fn);
}
function Nr(e, t) {
}
const Sn = ["top", "right", "bottom", "left"], pe = Math.min, te = Math.max, ze = Math.round, qe = Math.floor, se = (e) => ({ x: e, y: e }), En = { left: "right", right: "left", bottom: "top", top: "bottom" }, Tn = { start: "end", end: "start" };
function ct(e, t, r) {
  return te(e, pe(t, r));
}
function ue(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function de(e) {
  return e.split("-")[0];
}
function ke(e) {
  return e.split("-")[1];
}
function ht(e) {
  return e === "x" ? "y" : "x";
}
function mt(e) {
  return e === "y" ? "height" : "width";
}
const Dn = /* @__PURE__ */ new Set(["top", "bottom"]);
function ie(e) {
  return Dn.has(de(e)) ? "y" : "x";
}
function vt(e) {
  return ht(ie(e));
}
function kn(e, t, r) {
  r === void 0 && (r = false);
  const n = ke(e), l = vt(e), s = mt(l);
  let c = l === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (c = Ve(c)), [c, Ve(c)];
}
function Pn(e) {
  const t = Ve(e);
  return [ft(e), t, ft(t)];
}
function ft(e) {
  return e.replace(/start|end/g, (t) => Tn[t]);
}
const Dt = ["left", "right"], kt = ["right", "left"], _n = ["top", "bottom"], Rn = ["bottom", "top"];
function In(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? kt : Dt : t ? Dt : kt;
    case "left":
    case "right":
      return t ? _n : Rn;
    default:
      return [];
  }
}
function Ln(e, t, r, n) {
  const l = ke(e);
  let s = In(de(e), r === "start", n);
  return l && (s = s.map((c) => c + "-" + l), t && (s = s.concat(s.map(ft)))), s;
}
function Ve(e) {
  return e.replace(/left|right|bottom|top/g, (t) => En[t]);
}
function Mn(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Qt(e) {
  return typeof e != "number" ? Mn(e) : { top: e, right: e, bottom: e, left: e };
}
function Xe(e) {
  const { x: t, y: r, width: n, height: l } = e;
  return { width: n, height: l, top: r, left: t, right: t + n, bottom: r + l, x: t, y: r };
}
function Pt(e, t, r) {
  let { reference: n, floating: l } = e;
  const s = ie(t), c = vt(t), g = mt(c), d = de(t), a = s === "y", o = n.x + n.width / 2 - l.width / 2, i = n.y + n.height / 2 - l.height / 2, u = n[g] / 2 - l[g] / 2;
  let m;
  switch (d) {
    case "top":
      m = { x: o, y: n.y - l.height };
      break;
    case "bottom":
      m = { x: o, y: n.y + n.height };
      break;
    case "right":
      m = { x: n.x + n.width, y: i };
      break;
    case "left":
      m = { x: n.x - l.width, y: i };
      break;
    default:
      m = { x: n.x, y: n.y };
  }
  switch (ke(t)) {
    case "start":
      m[c] -= u * (r && a ? -1 : 1);
      break;
    case "end":
      m[c] += u * (r && a ? -1 : 1);
      break;
  }
  return m;
}
async function jn(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: l, platform: s, rects: c, elements: g, strategy: d } = e, { boundary: a = "clippingAncestors", rootBoundary: o = "viewport", elementContext: i = "floating", altBoundary: u = false, padding: m = 0 } = ue(t, e), A = Qt(m), E = g[u ? i === "floating" ? "reference" : "floating" : i], T = Xe(await s.getClippingRect({ element: (r = await (s.isElement == null ? void 0 : s.isElement(E))) == null || r ? E : E.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(g.floating)), boundary: a, rootBoundary: o, strategy: d })), R = i === "floating" ? { x: n, y: l, width: c.floating.width, height: c.floating.height } : c.reference, L = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(g.floating)), M = await (s.isElement == null ? void 0 : s.isElement(L)) ? await (s.getScale == null ? void 0 : s.getScale(L)) || { x: 1, y: 1 } : { x: 1, y: 1 }, j = Xe(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: g, rect: R, offsetParent: L, strategy: d }) : R);
  return { top: (T.top - j.top + A.top) / M.y, bottom: (j.bottom - T.bottom + A.bottom) / M.y, left: (T.left - j.left + A.left) / M.x, right: (j.right - T.right + A.right) / M.x };
}
const qn = async (e, t, r) => {
  const { placement: n = "bottom", strategy: l = "absolute", middleware: s = [], platform: c } = r, g = s.filter(Boolean), d = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let a = await c.getElementRects({ reference: e, floating: t, strategy: l }), { x: o, y: i } = Pt(a, n, d), u = n, m = {}, A = 0;
  for (let E = 0; E < g.length; E++) {
    var x;
    const { name: T, fn: R } = g[E], { x: L, y: M, data: j, reset: B } = await R({ x: o, y: i, initialPlacement: n, placement: u, strategy: l, middlewareData: m, rects: a, platform: { ...c, detectOverflow: (x = c.detectOverflow) != null ? x : jn }, elements: { reference: e, floating: t } });
    o = L ?? o, i = M ?? i, m = { ...m, [T]: { ...m[T], ...j } }, B && A <= 50 && (A++, typeof B == "object" && (B.placement && (u = B.placement), B.rects && (a = B.rects === true ? await c.getElementRects({ reference: e, floating: t, strategy: l }) : B.rects), { x: o, y: i } = Pt(a, u, d)), E = -1);
  }
  return { x: o, y: i, placement: u, strategy: l, middlewareData: m };
}, Bn = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: r, y: n, placement: l, rects: s, platform: c, elements: g, middlewareData: d } = t, { element: a, padding: o = 0 } = ue(e, t) || {};
  if (a == null) return {};
  const i = Qt(o), u = { x: r, y: n }, m = vt(l), A = mt(m), x = await c.getDimensions(a), E = m === "y", T = E ? "top" : "left", R = E ? "bottom" : "right", L = E ? "clientHeight" : "clientWidth", M = s.reference[A] + s.reference[m] - u[m] - s.floating[A], j = u[m] - s.reference[m], B = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(a));
  let W = B ? B[L] : 0;
  (!W || !await (c.isElement == null ? void 0 : c.isElement(B))) && (W = g.floating[L] || s.floating[A]);
  const q = M / 2 - j / 2, X = W / 2 - x[A] / 2 - 1, V = pe(i[T], X), K = pe(i[R], X), U = V, $ = W - x[A] - K, z = W / 2 - x[A] / 2 + q, ee = ct(U, z, $), S = !d.arrow && ke(l) != null && z !== ee && s.reference[A] / 2 - (z < U ? V : K) - x[A] / 2 < 0, P = S ? z < U ? z - U : z - $ : 0;
  return { [m]: u[m] + P, data: { [m]: ee, centerOffset: z - ee - P, ...S && { alignmentOffset: P } }, reset: S };
} }), Wn = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r, n;
    const { placement: l, middlewareData: s, rects: c, initialPlacement: g, platform: d, elements: a } = t, { mainAxis: o = true, crossAxis: i = true, fallbackPlacements: u, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: A = "none", flipAlignment: x = true, ...E } = ue(e, t);
    if ((r = s.arrow) != null && r.alignmentOffset) return {};
    const T = de(l), R = ie(g), L = de(g) === g, M = await (d.isRTL == null ? void 0 : d.isRTL(a.floating)), j = u || (L || !x ? [Ve(g)] : Pn(g)), B = A !== "none";
    !u && B && j.push(...Ln(g, x, A, M));
    const W = [g, ...j], q = await d.detectOverflow(t, E), X = [];
    let V = ((n = s.flip) == null ? void 0 : n.overflows) || [];
    if (o && X.push(q[T]), i) {
      const z = kn(l, c, M);
      X.push(q[z[0]], q[z[1]]);
    }
    if (V = [...V, { placement: l, overflows: X }], !X.every((z) => z <= 0)) {
      var K, U;
      const z = (((K = s.flip) == null ? void 0 : K.index) || 0) + 1, ee = W[z];
      if (ee && (!(i === "alignment" ? R !== ie(ee) : false) || V.every((k) => ie(k.placement) === R ? k.overflows[0] > 0 : true))) return { data: { index: z, overflows: V }, reset: { placement: ee } };
      let S = (U = V.filter((P) => P.overflows[0] <= 0).sort((P, k) => P.overflows[1] - k.overflows[1])[0]) == null ? void 0 : U.placement;
      if (!S) switch (m) {
        case "bestFit": {
          var $;
          const P = ($ = V.filter((k) => {
            if (B) {
              const _ = ie(k.placement);
              return _ === R || _ === "y";
            }
            return true;
          }).map((k) => [k.placement, k.overflows.filter((_) => _ > 0).reduce((_, H) => _ + H, 0)]).sort((k, _) => k[1] - _[1])[0]) == null ? void 0 : $[0];
          P && (S = P);
          break;
        }
        case "initialPlacement":
          S = g;
          break;
      }
      if (l !== S) return { reset: { placement: S } };
    }
    return {};
  } };
};
function _t(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Rt(e) {
  return Sn.some((t) => e[t] >= 0);
}
const Hn = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    const { rects: r, platform: n } = t, { strategy: l = "referenceHidden", ...s } = ue(e, t);
    switch (l) {
      case "referenceHidden": {
        const c = await n.detectOverflow(t, { ...s, elementContext: "reference" }), g = _t(c, r.reference);
        return { data: { referenceHiddenOffsets: g, referenceHidden: Rt(g) } };
      }
      case "escaped": {
        const c = await n.detectOverflow(t, { ...s, altBoundary: true }), g = _t(c, r.floating);
        return { data: { escapedOffsets: g, escaped: Rt(g) } };
      }
      default:
        return {};
    }
  } };
}, $t = /* @__PURE__ */ new Set(["left", "top"]);
async function Nn(e, t) {
  const { placement: r, platform: n, elements: l } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(l.floating)), c = de(r), g = ke(r), d = ie(r) === "y", a = $t.has(c) ? -1 : 1, o = s && d ? -1 : 1, i = ue(t, e);
  let { mainAxis: u, crossAxis: m, alignmentAxis: A } = typeof i == "number" ? { mainAxis: i, crossAxis: 0, alignmentAxis: null } : { mainAxis: i.mainAxis || 0, crossAxis: i.crossAxis || 0, alignmentAxis: i.alignmentAxis };
  return g && typeof A == "number" && (m = g === "end" ? A * -1 : A), d ? { x: m * o, y: u * a } : { x: u * a, y: m * o };
}
const Un = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var r, n;
    const { x: l, y: s, placement: c, middlewareData: g } = t, d = await Nn(t, e);
    return c === ((r = g.offset) == null ? void 0 : r.placement) && (n = g.arrow) != null && n.alignmentOffset ? {} : { x: l + d.x, y: s + d.y, data: { ...d, placement: c } };
  } };
}, zn = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: n, placement: l, platform: s } = t, { mainAxis: c = true, crossAxis: g = false, limiter: d = { fn: (T) => {
      let { x: R, y: L } = T;
      return { x: R, y: L };
    } }, ...a } = ue(e, t), o = { x: r, y: n }, i = await s.detectOverflow(t, a), u = ie(de(l)), m = ht(u);
    let A = o[m], x = o[u];
    if (c) {
      const T = m === "y" ? "top" : "left", R = m === "y" ? "bottom" : "right", L = A + i[T], M = A - i[R];
      A = ct(L, A, M);
    }
    if (g) {
      const T = u === "y" ? "top" : "left", R = u === "y" ? "bottom" : "right", L = x + i[T], M = x - i[R];
      x = ct(L, x, M);
    }
    const E = d.fn({ ...t, [m]: A, [u]: x });
    return { ...E, data: { x: E.x - r, y: E.y - n, enabled: { [m]: c, [u]: g } } };
  } };
}, Vn = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: r, y: n, placement: l, rects: s, middlewareData: c } = t, { offset: g = 0, mainAxis: d = true, crossAxis: a = true } = ue(e, t), o = { x: r, y: n }, i = ie(l), u = ht(i);
    let m = o[u], A = o[i];
    const x = ue(g, t), E = typeof x == "number" ? { mainAxis: x, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...x };
    if (d) {
      const L = u === "y" ? "height" : "width", M = s.reference[u] - s.floating[L] + E.mainAxis, j = s.reference[u] + s.reference[L] - E.mainAxis;
      m < M ? m = M : m > j && (m = j);
    }
    if (a) {
      var T, R;
      const L = u === "y" ? "width" : "height", M = $t.has(de(l)), j = s.reference[i] - s.floating[L] + (M && ((T = c.offset) == null ? void 0 : T[i]) || 0) + (M ? 0 : E.crossAxis), B = s.reference[i] + s.reference[L] + (M ? 0 : ((R = c.offset) == null ? void 0 : R[i]) || 0) - (M ? E.crossAxis : 0);
      A < j ? A = j : A > B && (A = B);
    }
    return { [u]: m, [i]: A };
  } };
}, Xn = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    var r, n;
    const { placement: l, rects: s, platform: c, elements: g } = t, { apply: d = () => {
    }, ...a } = ue(e, t), o = await c.detectOverflow(t, a), i = de(l), u = ke(l), m = ie(l) === "y", { width: A, height: x } = s.floating;
    let E, T;
    i === "top" || i === "bottom" ? (E = i, T = u === (await (c.isRTL == null ? void 0 : c.isRTL(g.floating)) ? "start" : "end") ? "left" : "right") : (T = i, E = u === "end" ? "top" : "bottom");
    const R = x - o.top - o.bottom, L = A - o.left - o.right, M = pe(x - o[E], R), j = pe(A - o[T], L), B = !t.middlewareData.shift;
    let W = M, q = j;
    if ((r = t.middlewareData.shift) != null && r.enabled.x && (q = L), (n = t.middlewareData.shift) != null && n.enabled.y && (W = R), B && !u) {
      const V = te(o.left, 0), K = te(o.right, 0), U = te(o.top, 0), $ = te(o.bottom, 0);
      m ? q = A - 2 * (V !== 0 || K !== 0 ? V + K : te(o.left, o.right)) : W = x - 2 * (U !== 0 || $ !== 0 ? U + $ : te(o.top, o.bottom));
    }
    await d({ ...t, availableWidth: q, availableHeight: W });
    const X = await c.getDimensions(g.floating);
    return A !== X.width || x !== X.height ? { reset: { rects: true } } : {};
  } };
};
function Ke() {
  return typeof window < "u";
}
function Pe(e) {
  return en(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ne(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function le(e) {
  var t;
  return (t = (en(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function en(e) {
  return Ke() ? e instanceof Node || e instanceof ne(e).Node : false;
}
function re(e) {
  return Ke() ? e instanceof Element || e instanceof ne(e).Element : false;
}
function ae(e) {
  return Ke() ? e instanceof HTMLElement || e instanceof ne(e).HTMLElement : false;
}
function It(e) {
  return !Ke() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof ne(e).ShadowRoot;
}
const Kn = /* @__PURE__ */ new Set(["inline", "contents"]);
function Me(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: l } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !Kn.has(l);
}
const Yn = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Gn(e) {
  return Yn.has(Pe(e));
}
const Zn = [":popover-open", ":modal"];
function Ye(e) {
  return Zn.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return false;
    }
  });
}
const Jn = ["transform", "translate", "scale", "rotate", "perspective"], Qn = ["transform", "translate", "scale", "rotate", "perspective", "filter"], $n = ["paint", "layout", "strict", "content"];
function gt(e) {
  const t = pt(), r = re(e) ? oe(e) : e;
  return Jn.some((n) => r[n] ? r[n] !== "none" : false) || (r.containerType ? r.containerType !== "normal" : false) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : false) || !t && (r.filter ? r.filter !== "none" : false) || Qn.some((n) => (r.willChange || "").includes(n)) || $n.some((n) => (r.contain || "").includes(n));
}
function er(e) {
  let t = we(e);
  for (; ae(t) && !De(t); ) {
    if (gt(t)) return t;
    if (Ye(t)) return null;
    t = we(t);
  }
  return null;
}
function pt() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
const tr = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function De(e) {
  return tr.has(Pe(e));
}
function oe(e) {
  return ne(e).getComputedStyle(e);
}
function Ge(e) {
  return re(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function we(e) {
  if (Pe(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || It(e) && e.host || le(e);
  return It(t) ? t.host : t;
}
function tn(e) {
  const t = we(e);
  return De(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ae(t) && Me(t) ? t : tn(t);
}
function Ie(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = true);
  const l = tn(e), s = l === ((n = e.ownerDocument) == null ? void 0 : n.body), c = ne(l);
  if (s) {
    const g = ut(c);
    return t.concat(c, c.visualViewport || [], Me(l) ? l : [], g && r ? Ie(g) : []);
  }
  return t.concat(l, Ie(l, [], r));
}
function ut(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function nn(e) {
  const t = oe(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const l = ae(e), s = l ? e.offsetWidth : r, c = l ? e.offsetHeight : n, g = ze(r) !== s || ze(n) !== c;
  return g && (r = s, n = c), { width: r, height: n, $: g };
}
function wt(e) {
  return re(e) ? e : e.contextElement;
}
function Te(e) {
  const t = wt(e);
  if (!ae(t)) return se(1);
  const r = t.getBoundingClientRect(), { width: n, height: l, $: s } = nn(t);
  let c = (s ? ze(r.width) : r.width) / n, g = (s ? ze(r.height) : r.height) / l;
  return (!c || !Number.isFinite(c)) && (c = 1), (!g || !Number.isFinite(g)) && (g = 1), { x: c, y: g };
}
const nr = se(0);
function rn(e) {
  const t = ne(e);
  return !pt() || !t.visualViewport ? nr : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function rr(e, t, r) {
  return t === void 0 && (t = false), !r || t && r !== ne(e) ? false : t;
}
function xe(e, t, r, n) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  const l = e.getBoundingClientRect(), s = wt(e);
  let c = se(1);
  t && (n ? re(n) && (c = Te(n)) : c = Te(e));
  const g = rr(s, r, n) ? rn(s) : se(0);
  let d = (l.left + g.x) / c.x, a = (l.top + g.y) / c.y, o = l.width / c.x, i = l.height / c.y;
  if (s) {
    const u = ne(s), m = n && re(n) ? ne(n) : n;
    let A = u, x = ut(A);
    for (; x && n && m !== A; ) {
      const E = Te(x), T = x.getBoundingClientRect(), R = oe(x), L = T.left + (x.clientLeft + parseFloat(R.paddingLeft)) * E.x, M = T.top + (x.clientTop + parseFloat(R.paddingTop)) * E.y;
      d *= E.x, a *= E.y, o *= E.x, i *= E.y, d += L, a += M, A = ne(x), x = ut(A);
    }
  }
  return Xe({ width: o, height: i, x: d, y: a });
}
function Ze(e, t) {
  const r = Ge(e).scrollLeft;
  return t ? t.left + r : xe(le(e)).left + r;
}
function on(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - Ze(e, r), l = r.top + t.scrollTop;
  return { x: n, y: l };
}
function or(e) {
  let { elements: t, rect: r, offsetParent: n, strategy: l } = e;
  const s = l === "fixed", c = le(n), g = t ? Ye(t.floating) : false;
  if (n === c || g && s) return r;
  let d = { scrollLeft: 0, scrollTop: 0 }, a = se(1);
  const o = se(0), i = ae(n);
  if ((i || !i && !s) && ((Pe(n) !== "body" || Me(c)) && (d = Ge(n)), ae(n))) {
    const m = xe(n);
    a = Te(n), o.x = m.x + n.clientLeft, o.y = m.y + n.clientTop;
  }
  const u = c && !i && !s ? on(c, d) : se(0);
  return { width: r.width * a.x, height: r.height * a.y, x: r.x * a.x - d.scrollLeft * a.x + o.x + u.x, y: r.y * a.y - d.scrollTop * a.y + o.y + u.y };
}
function ir(e) {
  return Array.from(e.getClientRects());
}
function sr(e) {
  const t = le(e), r = Ge(e), n = e.ownerDocument.body, l = te(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = te(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let c = -r.scrollLeft + Ze(e);
  const g = -r.scrollTop;
  return oe(n).direction === "rtl" && (c += te(t.clientWidth, n.clientWidth) - l), { width: l, height: s, x: c, y: g };
}
const Lt = 25;
function ar(e, t) {
  const r = ne(e), n = le(e), l = r.visualViewport;
  let s = n.clientWidth, c = n.clientHeight, g = 0, d = 0;
  if (l) {
    s = l.width, c = l.height;
    const o = pt();
    (!o || o && t === "fixed") && (g = l.offsetLeft, d = l.offsetTop);
  }
  const a = Ze(n);
  if (a <= 0) {
    const o = n.ownerDocument, i = o.body, u = getComputedStyle(i), m = o.compatMode === "CSS1Compat" && parseFloat(u.marginLeft) + parseFloat(u.marginRight) || 0, A = Math.abs(n.clientWidth - i.clientWidth - m);
    A <= Lt && (s -= A);
  } else a <= Lt && (s += a);
  return { width: s, height: c, x: g, y: d };
}
const lr = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function cr(e, t) {
  const r = xe(e, true, t === "fixed"), n = r.top + e.clientTop, l = r.left + e.clientLeft, s = ae(e) ? Te(e) : se(1), c = e.clientWidth * s.x, g = e.clientHeight * s.y, d = l * s.x, a = n * s.y;
  return { width: c, height: g, x: d, y: a };
}
function Mt(e, t, r) {
  let n;
  if (t === "viewport") n = ar(e, r);
  else if (t === "document") n = sr(le(e));
  else if (re(t)) n = cr(t, r);
  else {
    const l = rn(e);
    n = { x: t.x - l.x, y: t.y - l.y, width: t.width, height: t.height };
  }
  return Xe(n);
}
function sn(e, t) {
  const r = we(e);
  return r === t || !re(r) || De(r) ? false : oe(r).position === "fixed" || sn(r, t);
}
function fr(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = Ie(e, [], false).filter((g) => re(g) && Pe(g) !== "body"), l = null;
  const s = oe(e).position === "fixed";
  let c = s ? we(e) : e;
  for (; re(c) && !De(c); ) {
    const g = oe(c), d = gt(c);
    !d && g.position === "fixed" && (l = null), (s ? !d && !l : !d && g.position === "static" && !!l && lr.has(l.position) || Me(c) && !d && sn(e, c)) ? n = n.filter((o) => o !== c) : l = g, c = we(c);
  }
  return t.set(e, n), n;
}
function ur(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: l } = e;
  const c = [...r === "clippingAncestors" ? Ye(t) ? [] : fr(t, this._c) : [].concat(r), n], g = c[0], d = c.reduce((a, o) => {
    const i = Mt(t, o, l);
    return a.top = te(i.top, a.top), a.right = pe(i.right, a.right), a.bottom = pe(i.bottom, a.bottom), a.left = te(i.left, a.left), a;
  }, Mt(t, g, l));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}
function dr(e) {
  const { width: t, height: r } = nn(e);
  return { width: t, height: r };
}
function hr(e, t, r) {
  const n = ae(t), l = le(t), s = r === "fixed", c = xe(e, true, s, t);
  let g = { scrollLeft: 0, scrollTop: 0 };
  const d = se(0);
  function a() {
    d.x = Ze(l);
  }
  if (n || !n && !s) if ((Pe(t) !== "body" || Me(l)) && (g = Ge(t)), n) {
    const m = xe(t, true, s, t);
    d.x = m.x + t.clientLeft, d.y = m.y + t.clientTop;
  } else l && a();
  s && !n && l && a();
  const o = l && !n && !s ? on(l, g) : se(0), i = c.left + g.scrollLeft - d.x - o.x, u = c.top + g.scrollTop - d.y - o.y;
  return { x: i, y: u, width: c.width, height: c.height };
}
function $e(e) {
  return oe(e).position === "static";
}
function jt(e, t) {
  if (!ae(e) || oe(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return le(e) === r && (r = r.ownerDocument.body), r;
}
function an(e, t) {
  const r = ne(e);
  if (Ye(e)) return r;
  if (!ae(e)) {
    let l = we(e);
    for (; l && !De(l); ) {
      if (re(l) && !$e(l)) return l;
      l = we(l);
    }
    return r;
  }
  let n = jt(e, t);
  for (; n && Gn(n) && $e(n); ) n = jt(n, t);
  return n && De(n) && $e(n) && !gt(n) ? r : n || er(e) || r;
}
const mr = async function(e) {
  const t = this.getOffsetParent || an, r = this.getDimensions, n = await r(e.floating);
  return { reference: hr(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: n.width, height: n.height } };
};
function vr(e) {
  return oe(e).direction === "rtl";
}
const gr = { convertOffsetParentRelativeRectToViewportRelativeRect: or, getDocumentElement: le, getClippingRect: ur, getOffsetParent: an, getElementRects: mr, getClientRects: ir, getDimensions: dr, getScale: Te, isElement: re, isRTL: vr };
function ln(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function pr(e, t) {
  let r = null, n;
  const l = le(e);
  function s() {
    var g;
    clearTimeout(n), (g = r) == null || g.disconnect(), r = null;
  }
  function c(g, d) {
    g === void 0 && (g = false), d === void 0 && (d = 1), s();
    const a = e.getBoundingClientRect(), { left: o, top: i, width: u, height: m } = a;
    if (g || t(), !u || !m) return;
    const A = qe(i), x = qe(l.clientWidth - (o + u)), E = qe(l.clientHeight - (i + m)), T = qe(o), L = { rootMargin: -A + "px " + -x + "px " + -E + "px " + -T + "px", threshold: te(0, pe(1, d)) || 1 };
    let M = true;
    function j(B) {
      const W = B[0].intersectionRatio;
      if (W !== d) {
        if (!M) return c();
        W ? c(false, W) : n = setTimeout(() => {
          c(false, 1e-7);
        }, 1e3);
      }
      W === 1 && !ln(a, e.getBoundingClientRect()) && c(), M = false;
    }
    try {
      r = new IntersectionObserver(j, { ...L, root: l.ownerDocument });
    } catch {
      r = new IntersectionObserver(j, L);
    }
    r.observe(e);
  }
  return c(true), s;
}
function Ur(e, t, r, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: l = true, ancestorResize: s = true, elementResize: c = typeof ResizeObserver == "function", layoutShift: g = typeof IntersectionObserver == "function", animationFrame: d = false } = n, a = wt(e), o = l || s ? [...a ? Ie(a) : [], ...Ie(t)] : [];
  o.forEach((T) => {
    l && T.addEventListener("scroll", r, { passive: true }), s && T.addEventListener("resize", r);
  });
  const i = a && g ? pr(a, r) : null;
  let u = -1, m = null;
  c && (m = new ResizeObserver((T) => {
    let [R] = T;
    R && R.target === a && m && (m.unobserve(t), cancelAnimationFrame(u), u = requestAnimationFrame(() => {
      var L;
      (L = m) == null || L.observe(t);
    })), r();
  }), a && !d && m.observe(a), m.observe(t));
  let A, x = d ? xe(e) : null;
  d && E();
  function E() {
    const T = xe(e);
    x && !ln(x, T) && r(), x = T, A = requestAnimationFrame(E);
  }
  return r(), () => {
    var T;
    o.forEach((R) => {
      l && R.removeEventListener("scroll", r), s && R.removeEventListener("resize", r);
    }), i == null ? void 0 : i(), (T = m) == null || T.disconnect(), m = null, d && cancelAnimationFrame(A);
  };
}
const zr = Un, Vr = zn, Xr = Wn, Kr = Xn, Yr = Hn, Gr = Bn, Zr = Vn, Jr = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), l = { platform: gr, ...r }, s = { ...l.platform, _c: n };
  return qn(e, t, { ...l, platform: s });
};
var wr = function(e) {
  if (typeof document > "u") return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Se = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap(), We = {}, et = 0, cn = function(e) {
  return e && (e.host || cn(e.parentNode));
}, yr = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r)) return r;
    var n = cn(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, br = function(e, t, r, n) {
  var l = yr(t, Array.isArray(e) ? e : [e]);
  We[r] || (We[r] = /* @__PURE__ */ new WeakMap());
  var s = We[r], c = [], g = /* @__PURE__ */ new Set(), d = new Set(l), a = function(i) {
    !i || g.has(i) || (g.add(i), a(i.parentNode));
  };
  l.forEach(a);
  var o = function(i) {
    !i || d.has(i) || Array.prototype.forEach.call(i.children, function(u) {
      if (g.has(u)) o(u);
      else try {
        var m = u.getAttribute(n), A = m !== null && m !== "false", x = (Se.get(u) || 0) + 1, E = (s.get(u) || 0) + 1;
        Se.set(u, x), s.set(u, E), c.push(u), x === 1 && A && Be.set(u, true), E === 1 && u.setAttribute(r, "true"), A || u.setAttribute(n, "true");
      } catch (T) {
        console.error("aria-hidden: cannot operate on ", u, T);
      }
    });
  };
  return o(t), g.clear(), et++, function() {
    c.forEach(function(i) {
      var u = Se.get(i) - 1, m = s.get(i) - 1;
      Se.set(i, u), s.set(i, m), u || (Be.has(i) || i.removeAttribute(n), Be.delete(i)), m || i.removeAttribute(r);
    }), et--, et || (Se = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap(), We = {});
  };
}, Qr = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), l = wr(e);
  return l ? (n.push.apply(n, Array.from(l.querySelectorAll("[aria-live], script"))), br(n, l, r, "aria-hidden")) : function() {
    return null;
  };
}, qt = function() {
  return qt = Object.assign || function(t) {
    for (var r, n = 1, l = arguments.length; n < l; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, qt.apply(this, arguments);
};
function $r(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) t.indexOf(n[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[l]) && (r[n[l]] = e[n[l]]);
  return r;
}
function eo(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, l = t.length, s; n < l; n++) (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var to = function() {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
const xr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function Ee(e, t, r) {
  const n = r[0];
  if (t != null && e >= t) throw new Error(e + " >= " + t);
  if (e.slice(-1) === n || t && t.slice(-1) === n) throw new Error("trailing zero");
  if (t) {
    let c = 0;
    for (; (e[c] || n) === t[c]; ) c++;
    if (c > 0) return t.slice(0, c) + Ee(e.slice(c), t.slice(c), r);
  }
  const l = e ? r.indexOf(e[0]) : 0, s = t != null ? r.indexOf(t[0]) : r.length;
  if (s - l > 1) {
    const c = Math.round(0.5 * (l + s));
    return r[c];
  } else return t && t.length > 1 ? t.slice(0, 1) : r[l] + Ee(e.slice(1), null, r);
}
function fn(e) {
  if (e.length !== un(e[0])) throw new Error("invalid integer part of order key: " + e);
}
function un(e) {
  if (e >= "a" && e <= "z") return e.charCodeAt(0) - 97 + 2;
  if (e >= "A" && e <= "Z") return 90 - e.charCodeAt(0) + 2;
  throw new Error("invalid order key head: " + e);
}
function Re(e) {
  const t = un(e[0]);
  if (t > e.length) throw new Error("invalid order key: " + e);
  return e.slice(0, t);
}
function Bt(e, t) {
  if (e === "A" + t[0].repeat(26)) throw new Error("invalid order key: " + e);
  const r = Re(e);
  if (e.slice(r.length).slice(-1) === t[0]) throw new Error("invalid order key: " + e);
}
function Wt(e, t) {
  fn(e);
  const [r, ...n] = e.split("");
  let l = true;
  for (let s = n.length - 1; l && s >= 0; s--) {
    const c = t.indexOf(n[s]) + 1;
    c === t.length ? n[s] = t[0] : (n[s] = t[c], l = false);
  }
  if (l) {
    if (r === "Z") return "a" + t[0];
    if (r === "z") return null;
    const s = String.fromCharCode(r.charCodeAt(0) + 1);
    return s > "a" ? n.push(t[0]) : n.pop(), s + n.join("");
  } else return r + n.join("");
}
function Cr(e, t) {
  fn(e);
  const [r, ...n] = e.split("");
  let l = true;
  for (let s = n.length - 1; l && s >= 0; s--) {
    const c = t.indexOf(n[s]) - 1;
    c === -1 ? n[s] = t.slice(-1) : (n[s] = t[c], l = false);
  }
  if (l) {
    if (r === "a") return "Z" + t.slice(-1);
    if (r === "A") return null;
    const s = String.fromCharCode(r.charCodeAt(0) - 1);
    return s < "Z" ? n.push(t.slice(-1)) : n.pop(), s + n.join("");
  } else return r + n.join("");
}
function no(e, t, r = xr) {
  if (e != null && Bt(e, r), t != null && Bt(t, r), e != null && t != null && e >= t) throw new Error(e + " >= " + t);
  if (e == null) {
    if (t == null) return "a" + r[0];
    const d = Re(t), a = t.slice(d.length);
    if (d === "A" + r[0].repeat(26)) return d + Ee("", a, r);
    if (d < t) return d;
    const o = Cr(d, r);
    if (o == null) throw new Error("cannot decrement any more");
    return o;
  }
  if (t == null) {
    const d = Re(e), a = e.slice(d.length), o = Wt(d, r);
    return o ?? d + Ee(a, null, r);
  }
  const n = Re(e), l = e.slice(n.length), s = Re(t), c = t.slice(s.length);
  if (n === s) return n + Ee(l, c, r);
  const g = Wt(n, r);
  if (g == null) throw new Error("cannot increment any more");
  return g < t ? g : n + Ee(l, null, r);
}
var He = { exports: {} }, tt, Ht;
function Ar() {
  if (Ht) return tt;
  Ht = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, l = n * 7, s = n * 365.25;
  tt = function(o, i) {
    i = i || {};
    var u = typeof o;
    if (u === "string" && o.length > 0) return c(o);
    if (u === "number" && isFinite(o)) return i.long ? d(o) : g(o);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(o));
  };
  function c(o) {
    if (o = String(o), !(o.length > 100)) {
      var i = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);
      if (i) {
        var u = parseFloat(i[1]), m = (i[2] || "ms").toLowerCase();
        switch (m) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return u * s;
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
  function g(o) {
    var i = Math.abs(o);
    return i >= n ? Math.round(o / n) + "d" : i >= r ? Math.round(o / r) + "h" : i >= t ? Math.round(o / t) + "m" : i >= e ? Math.round(o / e) + "s" : o + "ms";
  }
  function d(o) {
    var i = Math.abs(o);
    return i >= n ? a(o, i, n, "day") : i >= r ? a(o, i, r, "hour") : i >= t ? a(o, i, t, "minute") : i >= e ? a(o, i, e, "second") : o + " ms";
  }
  function a(o, i, u, m) {
    var A = i >= u * 1.5;
    return Math.round(o / u) + " " + m + (A ? "s" : "");
  }
  return tt;
}
var nt, Nt;
function Or() {
  if (Nt) return nt;
  Nt = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = a, n.disable = g, n.enable = s, n.enabled = d, n.humanize = Ar(), n.destroy = o, Object.keys(t).forEach((i) => {
      n[i] = t[i];
    }), n.names = [], n.skips = [], n.formatters = {};
    function r(i) {
      let u = 0;
      for (let m = 0; m < i.length; m++) u = (u << 5) - u + i.charCodeAt(m), u |= 0;
      return n.colors[Math.abs(u) % n.colors.length];
    }
    n.selectColor = r;
    function n(i) {
      let u, m = null, A, x;
      function E(...T) {
        if (!E.enabled) return;
        const R = E, L = Number(/* @__PURE__ */ new Date()), M = L - (u || L);
        R.diff = M, R.prev = u, R.curr = L, u = L, T[0] = n.coerce(T[0]), typeof T[0] != "string" && T.unshift("%O");
        let j = 0;
        T[0] = T[0].replace(/%([a-zA-Z%])/g, (W, q) => {
          if (W === "%%") return "%";
          j++;
          const X = n.formatters[q];
          if (typeof X == "function") {
            const V = T[j];
            W = X.call(R, V), T.splice(j, 1), j--;
          }
          return W;
        }), n.formatArgs.call(R, T), (R.log || n.log).apply(R, T);
      }
      return E.namespace = i, E.useColors = n.useColors(), E.color = n.selectColor(i), E.extend = l, E.destroy = n.destroy, Object.defineProperty(E, "enabled", { enumerable: true, configurable: false, get: () => m !== null ? m : (A !== n.namespaces && (A = n.namespaces, x = n.enabled(i)), x), set: (T) => {
        m = T;
      } }), typeof n.init == "function" && n.init(E), E;
    }
    function l(i, u) {
      const m = n(this.namespace + (typeof u > "u" ? ":" : u) + i);
      return m.log = this.log, m;
    }
    function s(i) {
      n.save(i), n.namespaces = i, n.names = [], n.skips = [];
      const u = (typeof i == "string" ? i : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const m of u) m[0] === "-" ? n.skips.push(m.slice(1)) : n.names.push(m);
    }
    function c(i, u) {
      let m = 0, A = 0, x = -1, E = 0;
      for (; m < i.length; ) if (A < u.length && (u[A] === i[m] || u[A] === "*")) u[A] === "*" ? (x = A, E = m, A++) : (m++, A++);
      else if (x !== -1) A = x + 1, E++, m = E;
      else return false;
      for (; A < u.length && u[A] === "*"; ) A++;
      return A === u.length;
    }
    function g() {
      const i = [...n.names, ...n.skips.map((u) => "-" + u)].join(",");
      return n.enable(""), i;
    }
    function d(i) {
      for (const u of n.skips) if (c(i, u)) return false;
      for (const u of n.names) if (c(i, u)) return true;
      return false;
    }
    function a(i) {
      return i instanceof Error ? i.stack || i.message : i;
    }
    function o() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return n.enable(n.load()), n;
  }
  return nt = e, nt;
}
var Ut;
function Fr() {
  return Ut || (Ut = 1, (function(e, t) {
    var r = {};
    t.formatArgs = l, t.save = s, t.load = c, t.useColors = n, t.storage = g(), t.destroy = /* @__PURE__ */ (() => {
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
      let i = 0, u = 0;
      a[0].replace(/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (i++, m === "%c" && (u = i));
      }), a.splice(u, 0, o);
    }
    t.log = console.debug || console.log || (() => {
    });
    function s(a) {
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
    function g() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = Or()(t);
    const { formatters: d } = e.exports;
    d.j = function(a) {
      try {
        return JSON.stringify(a);
      } catch (o) {
        return "[UnexpectedJSONParseError]: " + o.message;
      }
    };
  })(He, He.exports)), He.exports;
}
var Sr = Fr();
const ro = Le(Sr), Er = /* @__PURE__ */ Symbol(), zt = Object.getPrototypeOf, dt = /* @__PURE__ */ new WeakMap(), Tr = (e) => e && (dt.has(e) ? dt.get(e) : zt(e) === Object.prototype || zt(e) === Array.prototype), oo = (e) => Tr(e) && e[Er] || null, io = (e, t = true) => {
  dt.set(e, t);
};
var rt = {}, Vt;
function dn() {
  return Vt || (Vt = 1, (function(e) {
    (function(t) {
      t(typeof DO_NOT_EXPORT_CRC > "u" ? e : {});
    })(function(t) {
      t.version = "0.3.0";
      function r() {
        for (var a = 0, o = new Array(256), i = 0; i != 256; ++i) a = i, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, a = a & 1 ? -306674912 ^ a >>> 1 : a >>> 1, o[i] = a;
        return typeof Int32Array < "u" ? new Int32Array(o) : o;
      }
      var n = r(), l = typeof Buffer < "u";
      function s(a) {
        if (a.length > 32768 && l) return g(new Buffer(a));
        for (var o = -1, i = a.length - 1, u = 0; u < i; ) o = n[(o ^ a.charCodeAt(u++)) & 255] ^ o >>> 8, o = n[(o ^ a.charCodeAt(u++)) & 255] ^ o >>> 8;
        return u === i && (o = o >>> 8 ^ n[(o ^ a.charCodeAt(u)) & 255]), o ^ -1;
      }
      function c(a) {
        if (a.length > 1e4) return g(a);
        for (var o = -1, i = 0, u = a.length - 3; i < u; ) o = o >>> 8 ^ n[(o ^ a[i++]) & 255], o = o >>> 8 ^ n[(o ^ a[i++]) & 255], o = o >>> 8 ^ n[(o ^ a[i++]) & 255], o = o >>> 8 ^ n[(o ^ a[i++]) & 255];
        for (; i < u + 3; ) o = o >>> 8 ^ n[(o ^ a[i++]) & 255];
        return o ^ -1;
      }
      function g(a) {
        for (var o = -1, i = 0, u = a.length - 7; i < u; ) o = o >>> 8 ^ n[(o ^ a[i++]) & 255], o = o >>> 8 ^ n[(o ^ a[i++]) & 255], o = o >>> 8 ^ n[(o ^ a[i++]) & 255], o = o >>> 8 ^ n[(o ^ a[i++]) & 255], o = o >>> 8 ^ n[(o ^ a[i++]) & 255], o = o >>> 8 ^ n[(o ^ a[i++]) & 255], o = o >>> 8 ^ n[(o ^ a[i++]) & 255], o = o >>> 8 ^ n[(o ^ a[i++]) & 255];
        for (; i < u + 7; ) o = o >>> 8 ^ n[(o ^ a[i++]) & 255];
        return o ^ -1;
      }
      function d(a) {
        for (var o = -1, i = 0, u = a.length, m, A; i < u; ) m = a.charCodeAt(i++), m < 128 ? o = o >>> 8 ^ n[(o ^ m) & 255] : m < 2048 ? (o = o >>> 8 ^ n[(o ^ (192 | m >> 6 & 31)) & 255], o = o >>> 8 ^ n[(o ^ (128 | m & 63)) & 255]) : m >= 55296 && m < 57344 ? (m = (m & 1023) + 64, A = a.charCodeAt(i++) & 1023, o = o >>> 8 ^ n[(o ^ (240 | m >> 8 & 7)) & 255], o = o >>> 8 ^ n[(o ^ (128 | m >> 2 & 63)) & 255], o = o >>> 8 ^ n[(o ^ (128 | A >> 6 & 15 | m & 3)) & 255], o = o >>> 8 ^ n[(o ^ (128 | A & 63)) & 255]) : (o = o >>> 8 ^ n[(o ^ (224 | m >> 12 & 15)) & 255], o = o >>> 8 ^ n[(o ^ (128 | m >> 6 & 63)) & 255], o = o >>> 8 ^ n[(o ^ (128 | m & 63)) & 255]);
        return o ^ -1;
      }
      t.table = n, t.bstr = s, t.buf = c, t.str = d;
    });
  })(rt)), rt;
}
var ot, Xt;
function Dr() {
  if (Xt) return ot;
  Xt = 1;
  var e = dn();
  ot = l;
  var t = new Uint8Array(4), r = new Int32Array(t.buffer), n = new Uint32Array(t.buffer);
  function l(s) {
    if (s[0] !== 137) throw new Error("Invalid .png file header");
    if (s[1] !== 80) throw new Error("Invalid .png file header");
    if (s[2] !== 78) throw new Error("Invalid .png file header");
    if (s[3] !== 71) throw new Error("Invalid .png file header");
    if (s[4] !== 13) throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
    if (s[5] !== 10) throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
    if (s[6] !== 26) throw new Error("Invalid .png file header");
    if (s[7] !== 10) throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
    for (var c = false, g = [], d = 8; d < s.length; ) {
      t[3] = s[d++], t[2] = s[d++], t[1] = s[d++], t[0] = s[d++];
      var a = n[0] + 4, o = new Uint8Array(a);
      o[0] = s[d++], o[1] = s[d++], o[2] = s[d++], o[3] = s[d++];
      var i = String.fromCharCode(o[0]) + String.fromCharCode(o[1]) + String.fromCharCode(o[2]) + String.fromCharCode(o[3]);
      if (!g.length && i !== "IHDR") throw new Error("IHDR header missing");
      if (i === "IEND") {
        c = true, g.push({ name: i, data: new Uint8Array(0) });
        break;
      }
      for (var u = 4; u < a; u++) o[u] = s[d++];
      t[3] = s[d++], t[2] = s[d++], t[1] = s[d++], t[0] = s[d++];
      var m = r[0], A = e.buf(o);
      if (A !== m) throw new Error("CRC values for " + i + " header do not match, PNG file is likely corrupted");
      var x = new Uint8Array(o.buffer.slice(4));
      g.push({ name: i, data: x });
    }
    if (!c) throw new Error(".png file ended prematurely: no IEND header was found");
    return g;
  }
  return ot;
}
var kr = Dr();
const so = Le(kr);
var it, Kt;
function Pr() {
  return Kt || (Kt = 1, it = function(e, t, r) {
    var n = [], l = e.length;
    if (l === 0) return n;
    var s = t < 0 ? Math.max(0, t + l) : t || 0;
    for (r !== void 0 && (l = r < 0 ? r + l : r); l-- > s; ) n[l - s] = e[l];
    return n;
  }), it;
}
var st, Yt;
function _r() {
  if (Yt) return st;
  Yt = 1;
  var e = Pr(), t = dn();
  st = s;
  var r = new Uint8Array(4), n = new Int32Array(r.buffer), l = new Uint32Array(r.buffer);
  function s(c) {
    var g = 8, d = g, a;
    for (a = 0; a < c.length; a++) g += c[a].data.length, g += 12;
    var o = new Uint8Array(g);
    for (o[0] = 137, o[1] = 80, o[2] = 78, o[3] = 71, o[4] = 13, o[5] = 10, o[6] = 26, o[7] = 10, a = 0; a < c.length; a++) {
      var i = c[a], u = i.name, m = i.data, A = m.length, x = [u.charCodeAt(0), u.charCodeAt(1), u.charCodeAt(2), u.charCodeAt(3)];
      l[0] = A, o[d++] = r[3], o[d++] = r[2], o[d++] = r[1], o[d++] = r[0], o[d++] = x[0], o[d++] = x[1], o[d++] = x[2], o[d++] = x[3];
      for (var E = 0; E < A; ) o[d++] = m[E++];
      var T = x.concat(e(m)), R = t.buf(T);
      n[0] = R, o[d++] = r[3], o[d++] = r[2], o[d++] = r[1], o[d++] = r[0];
    }
    return o;
  }
  return st;
}
var Rr = _r();
const ao = Le(Rr);
var Ne = {}, at, Gt;
function Ir() {
  if (Gt) return at;
  Gt = 1, at = e;
  function e(t, r) {
    if (t = String(t), r = String(r), !/^[\x00-\xFF]+$/.test(t) || !/^[\x00-\xFF]+$/.test(r)) throw new Error("Only Latin-1 characters are permitted in PNG tEXt chunks. You might want to consider base64 encoding and/or zEXt compression");
    if (t.length >= 80) throw new Error('Keyword "' + t + '" is longer than the 79-character limit imposed by the PNG specification');
    for (var n = t.length + r.length + 1, l = new Uint8Array(n), s = 0, c, g = 0; g < t.length; g++) {
      if (!(c = t.charCodeAt(g))) throw new Error("0x00 character is not permitted in tEXt keywords");
      l[s++] = c;
    }
    l[s++] = 0;
    for (var d = 0; d < r.length; d++) {
      if (!(c = r.charCodeAt(d))) throw new Error("0x00 character is not permitted in tEXt content");
      l[s++] = c;
    }
    return { name: "tEXt", data: l };
  }
  return at;
}
var lt, Zt;
function Lr() {
  if (Zt) return lt;
  Zt = 1, lt = e;
  function e(t) {
    t.data && t.name && (t = t.data);
    for (var r = true, n = "", l = "", s = 0; s < t.length; s++) {
      var c = t[s];
      if (r) c ? l += String.fromCharCode(c) : r = false;
      else if (c) n += String.fromCharCode(c);
      else throw new Error("Invalid NULL character found. 0x00 character is not permitted in tEXt content");
    }
    return { keyword: l, text: n };
  }
  return lt;
}
var Jt;
function Mr() {
  return Jt || (Jt = 1, Ne.encode = Ir(), Ne.decode = Lr()), Ne;
}
var jr = Mr();
const lo = Le(jr);
export {
  Br as D,
  qt as _,
  Kr as a,
  Gr as b,
  Jr as c,
  Ur as d,
  $r as e,
  Xr as f,
  to as g,
  Yr as h,
  eo as i,
  Qr as j,
  oo as k,
  Zr as l,
  io as m,
  Hr as n,
  zr as o,
  no as p,
  ro as q,
  Wr as r,
  Vr as s,
  so as t,
  lo as u,
  ao as v,
  Nr as w
};
