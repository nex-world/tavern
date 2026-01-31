import { g as Ce } from "./index-BY00pYZM.js";
var Oe = { exports: {} }, Se = {};
var et;
function Ut() {
  return et || (et = 1, (function(e) {
    function t(m, C) {
      var y = m.length;
      m.push(C);
      e: for (; 0 < y; ) {
        var O = y - 1 >>> 1, P = m[O];
        if (0 < l(P, C)) m[O] = C, m[y] = P, y = O;
        else break e;
      }
    }
    function r(m) {
      return m.length === 0 ? null : m[0];
    }
    function n(m) {
      if (m.length === 0) return null;
      var C = m[0], y = m.pop();
      if (y !== C) {
        m[0] = y;
        e: for (var O = 0, P = m.length, ae = P >>> 1; O < ae; ) {
          var ce = 2 * (O + 1) - 1, Ee = m[ce], G = ce + 1, fe = m[G];
          if (0 > l(Ee, y)) G < P && 0 > l(fe, Ee) ? (m[O] = fe, m[G] = y, O = G) : (m[O] = Ee, m[ce] = y, O = ce);
          else if (G < P && 0 > l(fe, y)) m[O] = fe, m[G] = y, O = G;
          else break e;
        }
      }
      return C;
    }
    function l(m, C) {
      var y = m.sortIndex - C.sortIndex;
      return y !== 0 ? y : m.id - C.id;
    }
    if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var i = performance;
      e.unstable_now = function() {
        return i.now();
      };
    } else {
      var c = Date, u = c.now();
      e.unstable_now = function() {
        return c.now() - u;
      };
    }
    var d = [], s = [], o = 1, a = null, f = 3, h = false, g = false, w = false, p = false, v = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    function A(m) {
      for (var C = r(s); C !== null; ) {
        if (C.callback === null) n(s);
        else if (C.startTime <= m) n(s), C.sortIndex = C.expirationTime, t(d, C);
        else break;
        C = r(s);
      }
    }
    function F(m) {
      if (w = false, A(m), !g) if (r(d) !== null) g = true, E || (E = true, _());
      else {
        var C = r(s);
        C !== null && W(F, C.startTime - m);
      }
    }
    var E = false, S = -1, k = 5, D = -1;
    function R() {
      return p ? true : !(e.unstable_now() - D < k);
    }
    function I() {
      if (p = false, E) {
        var m = e.unstable_now();
        D = m;
        var C = true;
        try {
          e: {
            g = false, w && (w = false, x(S), S = -1), h = true;
            var y = f;
            try {
              t: {
                for (A(m), a = r(d); a !== null && !(a.expirationTime > m && R()); ) {
                  var O = a.callback;
                  if (typeof O == "function") {
                    a.callback = null, f = a.priorityLevel;
                    var P = O(a.expirationTime <= m);
                    if (m = e.unstable_now(), typeof P == "function") {
                      a.callback = P, A(m), C = true;
                      break t;
                    }
                    a === r(d) && n(d), A(m);
                  } else n(d);
                  a = r(d);
                }
                if (a !== null) C = true;
                else {
                  var ae = r(s);
                  ae !== null && W(F, ae.startTime - m), C = false;
                }
              }
              break e;
            } finally {
              a = null, f = y, h = false;
            }
            C = void 0;
          }
        } finally {
          C ? _() : E = false;
        }
      }
    }
    var _;
    if (typeof b == "function") _ = function() {
      b(I);
    };
    else if (typeof MessageChannel < "u") {
      var N = new MessageChannel(), T = N.port2;
      N.port1.onmessage = I, _ = function() {
        T.postMessage(null);
      };
    } else _ = function() {
      v(I, 0);
    };
    function W(m, C) {
      S = v(function() {
        m(e.unstable_now());
      }, C);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(m) {
      m.callback = null;
    }, e.unstable_forceFrameRate = function(m) {
      0 > m || 125 < m ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < m ? Math.floor(1e3 / m) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return f;
    }, e.unstable_next = function(m) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var C = 3;
          break;
        default:
          C = f;
      }
      var y = f;
      f = C;
      try {
        return m();
      } finally {
        f = y;
      }
    }, e.unstable_requestPaint = function() {
      p = true;
    }, e.unstable_runWithPriority = function(m, C) {
      switch (m) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          m = 3;
      }
      var y = f;
      f = m;
      try {
        return C();
      } finally {
        f = y;
      }
    }, e.unstable_scheduleCallback = function(m, C, y) {
      var O = e.unstable_now();
      switch (typeof y == "object" && y !== null ? (y = y.delay, y = typeof y == "number" && 0 < y ? O + y : O) : y = O, m) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = y + P, m = { id: o++, callback: C, priorityLevel: m, startTime: y, expirationTime: P, sortIndex: -1 }, y > O ? (m.sortIndex = y, t(s, m), r(d) === null && m === r(s) && (w ? (x(S), S = -1) : w = true, W(F, y - O))) : (m.sortIndex = P, t(d, m), g || h || (g = true, E || (E = true, _()))), m;
    }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(m) {
      var C = f;
      return function() {
        var y = f;
        f = C;
        try {
          return m.apply(this, arguments);
        } finally {
          f = y;
        }
      };
    };
  })(Se)), Se;
}
var tt;
function ur() {
  return tt || (tt = 1, Oe.exports = Ut()), Oe.exports;
}
var zt = "Invariant failed";
function dr(e, t) {
  if (!e) throw new Error(zt);
}
function hr(e, t) {
}
const Vt = ["top", "right", "bottom", "left"], X = Math.min, L = Math.max, we = Math.round, ue = Math.floor, Y = (e) => ({ x: e, y: e }), Kt = { left: "right", right: "left", bottom: "top", top: "bottom" }, Xt = { start: "end", end: "start" };
function We(e, t, r) {
  return L(e, X(t, r));
}
function V(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function K(e) {
  return e.split("-")[0];
}
function te(e) {
  return e.split("-")[1];
}
function Ue(e) {
  return e === "x" ? "y" : "x";
}
function ze(e) {
  return e === "y" ? "height" : "width";
}
const jt = /* @__PURE__ */ new Set(["top", "bottom"]);
function q(e) {
  return jt.has(K(e)) ? "y" : "x";
}
function Ve(e) {
  return Ue(q(e));
}
function Gt(e, t, r) {
  r === void 0 && (r = false);
  const n = te(e), l = Ve(e), i = ze(l);
  let c = l === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (c = pe(c)), [c, pe(c)];
}
function Zt(e) {
  const t = pe(e);
  return [Be(e), t, Be(t)];
}
function Be(e) {
  return e.replace(/start|end/g, (t) => Xt[t]);
}
const nt = ["left", "right"], rt = ["right", "left"], Jt = ["top", "bottom"], Qt = ["bottom", "top"];
function $t(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? rt : nt : t ? nt : rt;
    case "left":
    case "right":
      return t ? Jt : Qt;
    default:
      return [];
  }
}
function en(e, t, r, n) {
  const l = te(e);
  let i = $t(K(e), r === "start", n);
  return l && (i = i.map((c) => c + "-" + l), t && (i = i.concat(i.map(Be)))), i;
}
function pe(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Kt[t]);
}
function tn(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Et(e) {
  return typeof e != "number" ? tn(e) : { top: e, right: e, bottom: e, left: e };
}
function ve(e) {
  const { x: t, y: r, width: n, height: l } = e;
  return { width: n, height: l, top: r, left: t, right: t + n, bottom: r + l, x: t, y: r };
}
function ot(e, t, r) {
  let { reference: n, floating: l } = e;
  const i = q(t), c = Ve(t), u = ze(c), d = K(t), s = i === "y", o = n.x + n.width / 2 - l.width / 2, a = n.y + n.height / 2 - l.height / 2, f = n[u] / 2 - l[u] / 2;
  let h;
  switch (d) {
    case "top":
      h = { x: o, y: n.y - l.height };
      break;
    case "bottom":
      h = { x: o, y: n.y + n.height };
      break;
    case "right":
      h = { x: n.x + n.width, y: a };
      break;
    case "left":
      h = { x: n.x - l.width, y: a };
      break;
    default:
      h = { x: n.x, y: n.y };
  }
  switch (te(t)) {
    case "start":
      h[c] -= f * (r && s ? -1 : 1);
      break;
    case "end":
      h[c] += f * (r && s ? -1 : 1);
      break;
  }
  return h;
}
async function nn(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: l, platform: i, rects: c, elements: u, strategy: d } = e, { boundary: s = "clippingAncestors", rootBoundary: o = "viewport", elementContext: a = "floating", altBoundary: f = false, padding: h = 0 } = V(t, e), g = Et(h), p = u[f ? a === "floating" ? "reference" : "floating" : a], v = ve(await i.getClippingRect({ element: (r = await (i.isElement == null ? void 0 : i.isElement(p))) == null || r ? p : p.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(u.floating)), boundary: s, rootBoundary: o, strategy: d })), x = a === "floating" ? { x: n, y: l, width: c.floating.width, height: c.floating.height } : c.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u.floating)), A = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || { x: 1, y: 1 } : { x: 1, y: 1 }, F = ve(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: u, rect: x, offsetParent: b, strategy: d }) : x);
  return { top: (v.top - F.top + g.top) / A.y, bottom: (F.bottom - v.bottom + g.bottom) / A.y, left: (v.left - F.left + g.left) / A.x, right: (F.right - v.right + g.right) / A.x };
}
const rn = async (e, t, r) => {
  const { placement: n = "bottom", strategy: l = "absolute", middleware: i = [], platform: c } = r, u = i.filter(Boolean), d = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let s = await c.getElementRects({ reference: e, floating: t, strategy: l }), { x: o, y: a } = ot(s, n, d), f = n, h = {}, g = 0;
  for (let p = 0; p < u.length; p++) {
    var w;
    const { name: v, fn: x } = u[p], { x: b, y: A, data: F, reset: E } = await x({ x: o, y: a, initialPlacement: n, placement: f, strategy: l, middlewareData: h, rects: s, platform: { ...c, detectOverflow: (w = c.detectOverflow) != null ? w : nn }, elements: { reference: e, floating: t } });
    o = b ?? o, a = A ?? a, h = { ...h, [v]: { ...h[v], ...F } }, E && g <= 50 && (g++, typeof E == "object" && (E.placement && (f = E.placement), E.rects && (s = E.rects === true ? await c.getElementRects({ reference: e, floating: t, strategy: l }) : E.rects), { x: o, y: a } = ot(s, f, d)), p = -1);
  }
  return { x: o, y: a, placement: f, strategy: l, middlewareData: h };
}, on = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: r, y: n, placement: l, rects: i, platform: c, elements: u, middlewareData: d } = t, { element: s, padding: o = 0 } = V(e, t) || {};
  if (s == null) return {};
  const a = Et(o), f = { x: r, y: n }, h = Ve(l), g = ze(h), w = await c.getDimensions(s), p = h === "y", v = p ? "top" : "left", x = p ? "bottom" : "right", b = p ? "clientHeight" : "clientWidth", A = i.reference[g] + i.reference[h] - f[h] - i.floating[g], F = f[h] - i.reference[h], E = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(s));
  let S = E ? E[b] : 0;
  (!S || !await (c.isElement == null ? void 0 : c.isElement(E))) && (S = u.floating[b] || i.floating[g]);
  const k = A / 2 - F / 2, D = S / 2 - w[g] / 2 - 1, R = X(a[v], D), I = X(a[x], D), _ = R, N = S - w[g] - I, T = S / 2 - w[g] / 2 + k, W = We(_, T, N), m = !d.arrow && te(l) != null && T !== W && i.reference[g] / 2 - (T < _ ? R : I) - w[g] / 2 < 0, C = m ? T < _ ? T - _ : T - N : 0;
  return { [h]: f[h] + C, data: { [h]: W, centerOffset: T - W - C, ...m && { alignmentOffset: C } }, reset: m };
} }), sn = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r, n;
    const { placement: l, middlewareData: i, rects: c, initialPlacement: u, platform: d, elements: s } = t, { mainAxis: o = true, crossAxis: a = true, fallbackPlacements: f, fallbackStrategy: h = "bestFit", fallbackAxisSideDirection: g = "none", flipAlignment: w = true, ...p } = V(e, t);
    if ((r = i.arrow) != null && r.alignmentOffset) return {};
    const v = K(l), x = q(u), b = K(u) === u, A = await (d.isRTL == null ? void 0 : d.isRTL(s.floating)), F = f || (b || !w ? [pe(u)] : Zt(u)), E = g !== "none";
    !f && E && F.push(...en(u, w, g, A));
    const S = [u, ...F], k = await d.detectOverflow(t, p), D = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (o && D.push(k[v]), a) {
      const T = Gt(l, c, A);
      D.push(k[T[0]], k[T[1]]);
    }
    if (R = [...R, { placement: l, overflows: D }], !D.every((T) => T <= 0)) {
      var I, _;
      const T = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, W = S[T];
      if (W && (!(a === "alignment" ? x !== q(W) : false) || R.every((y) => q(y.placement) === x ? y.overflows[0] > 0 : true))) return { data: { index: T, overflows: R }, reset: { placement: W } };
      let m = (_ = R.filter((C) => C.overflows[0] <= 0).sort((C, y) => C.overflows[1] - y.overflows[1])[0]) == null ? void 0 : _.placement;
      if (!m) switch (h) {
        case "bestFit": {
          var N;
          const C = (N = R.filter((y) => {
            if (E) {
              const O = q(y.placement);
              return O === x || O === "y";
            }
            return true;
          }).map((y) => [y.placement, y.overflows.filter((O) => O > 0).reduce((O, P) => O + P, 0)]).sort((y, O) => y[1] - O[1])[0]) == null ? void 0 : N[0];
          C && (m = C);
          break;
        }
        case "initialPlacement":
          m = u;
          break;
      }
      if (l !== m) return { reset: { placement: m } };
    }
    return {};
  } };
};
function it(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function st(e) {
  return Vt.some((t) => e[t] >= 0);
}
const ln = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    const { rects: r, platform: n } = t, { strategy: l = "referenceHidden", ...i } = V(e, t);
    switch (l) {
      case "referenceHidden": {
        const c = await n.detectOverflow(t, { ...i, elementContext: "reference" }), u = it(c, r.reference);
        return { data: { referenceHiddenOffsets: u, referenceHidden: st(u) } };
      }
      case "escaped": {
        const c = await n.detectOverflow(t, { ...i, altBoundary: true }), u = it(c, r.floating);
        return { data: { escapedOffsets: u, escaped: st(u) } };
      }
      default:
        return {};
    }
  } };
}, Ot = /* @__PURE__ */ new Set(["left", "top"]);
async function an(e, t) {
  const { placement: r, platform: n, elements: l } = e, i = await (n.isRTL == null ? void 0 : n.isRTL(l.floating)), c = K(r), u = te(r), d = q(r) === "y", s = Ot.has(c) ? -1 : 1, o = i && d ? -1 : 1, a = V(t, e);
  let { mainAxis: f, crossAxis: h, alignmentAxis: g } = typeof a == "number" ? { mainAxis: a, crossAxis: 0, alignmentAxis: null } : { mainAxis: a.mainAxis || 0, crossAxis: a.crossAxis || 0, alignmentAxis: a.alignmentAxis };
  return u && typeof g == "number" && (h = u === "end" ? g * -1 : g), d ? { x: h * o, y: f * s } : { x: f * s, y: h * o };
}
const cn = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var r, n;
    const { x: l, y: i, placement: c, middlewareData: u } = t, d = await an(t, e);
    return c === ((r = u.offset) == null ? void 0 : r.placement) && (n = u.arrow) != null && n.alignmentOffset ? {} : { x: l + d.x, y: i + d.y, data: { ...d, placement: c } };
  } };
}, fn = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: n, placement: l, platform: i } = t, { mainAxis: c = true, crossAxis: u = false, limiter: d = { fn: (v) => {
      let { x, y: b } = v;
      return { x, y: b };
    } }, ...s } = V(e, t), o = { x: r, y: n }, a = await i.detectOverflow(t, s), f = q(K(l)), h = Ue(f);
    let g = o[h], w = o[f];
    if (c) {
      const v = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", b = g + a[v], A = g - a[x];
      g = We(b, g, A);
    }
    if (u) {
      const v = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", b = w + a[v], A = w - a[x];
      w = We(b, w, A);
    }
    const p = d.fn({ ...t, [h]: g, [f]: w });
    return { ...p, data: { x: p.x - r, y: p.y - n, enabled: { [h]: c, [f]: u } } };
  } };
}, un = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: r, y: n, placement: l, rects: i, middlewareData: c } = t, { offset: u = 0, mainAxis: d = true, crossAxis: s = true } = V(e, t), o = { x: r, y: n }, a = q(l), f = Ue(a);
    let h = o[f], g = o[a];
    const w = V(u, t), p = typeof w == "number" ? { mainAxis: w, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...w };
    if (d) {
      const b = f === "y" ? "height" : "width", A = i.reference[f] - i.floating[b] + p.mainAxis, F = i.reference[f] + i.reference[b] - p.mainAxis;
      h < A ? h = A : h > F && (h = F);
    }
    if (s) {
      var v, x;
      const b = f === "y" ? "width" : "height", A = Ot.has(K(l)), F = i.reference[a] - i.floating[b] + (A && ((v = c.offset) == null ? void 0 : v[a]) || 0) + (A ? 0 : p.crossAxis), E = i.reference[a] + i.reference[b] + (A ? 0 : ((x = c.offset) == null ? void 0 : x[a]) || 0) - (A ? p.crossAxis : 0);
      g < F ? g = F : g > E && (g = E);
    }
    return { [f]: h, [a]: g };
  } };
}, dn = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    var r, n;
    const { placement: l, rects: i, platform: c, elements: u } = t, { apply: d = () => {
    }, ...s } = V(e, t), o = await c.detectOverflow(t, s), a = K(l), f = te(l), h = q(l) === "y", { width: g, height: w } = i.floating;
    let p, v;
    a === "top" || a === "bottom" ? (p = a, v = f === (await (c.isRTL == null ? void 0 : c.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (v = a, p = f === "end" ? "top" : "bottom");
    const x = w - o.top - o.bottom, b = g - o.left - o.right, A = X(w - o[p], x), F = X(g - o[v], b), E = !t.middlewareData.shift;
    let S = A, k = F;
    if ((r = t.middlewareData.shift) != null && r.enabled.x && (k = b), (n = t.middlewareData.shift) != null && n.enabled.y && (S = x), E && !f) {
      const R = L(o.left, 0), I = L(o.right, 0), _ = L(o.top, 0), N = L(o.bottom, 0);
      h ? k = g - 2 * (R !== 0 || I !== 0 ? R + I : L(o.left, o.right)) : S = w - 2 * (_ !== 0 || N !== 0 ? _ + N : L(o.top, o.bottom));
    }
    await d({ ...t, availableWidth: k, availableHeight: S });
    const D = await c.getDimensions(u.floating);
    return g !== D.width || w !== D.height ? { reset: { rects: true } } : {};
  } };
};
function xe() {
  return typeof window < "u";
}
function ne(e) {
  return St(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function M(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function z(e) {
  var t;
  return (t = (St(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function St(e) {
  return xe() ? e instanceof Node || e instanceof M(e).Node : false;
}
function B(e) {
  return xe() ? e instanceof Element || e instanceof M(e).Element : false;
}
function U(e) {
  return xe() ? e instanceof HTMLElement || e instanceof M(e).HTMLElement : false;
}
function lt(e) {
  return !xe() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof M(e).ShadowRoot;
}
const hn = /* @__PURE__ */ new Set(["inline", "contents"]);
function le(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: l } = H(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !hn.has(l);
}
const gn = /* @__PURE__ */ new Set(["table", "td", "th"]);
function mn(e) {
  return gn.has(ne(e));
}
const wn = [":popover-open", ":modal"];
function be(e) {
  return wn.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return false;
    }
  });
}
const pn = ["transform", "translate", "scale", "rotate", "perspective"], vn = ["transform", "translate", "scale", "rotate", "perspective", "filter"], yn = ["paint", "layout", "strict", "content"];
function Ke(e) {
  const t = Xe(), r = B(e) ? H(e) : e;
  return pn.some((n) => r[n] ? r[n] !== "none" : false) || (r.containerType ? r.containerType !== "normal" : false) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : false) || !t && (r.filter ? r.filter !== "none" : false) || vn.some((n) => (r.willChange || "").includes(n)) || yn.some((n) => (r.contain || "").includes(n));
}
function Cn(e) {
  let t = j(e);
  for (; U(t) && !ee(t); ) {
    if (Ke(t)) return t;
    if (be(t)) return null;
    t = j(t);
  }
  return null;
}
function Xe() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
const xn = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ee(e) {
  return xn.has(ne(e));
}
function H(e) {
  return M(e).getComputedStyle(e);
}
function Ae(e) {
  return B(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function j(e) {
  if (ne(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || lt(e) && e.host || z(e);
  return lt(t) ? t.host : t;
}
function Pt(e) {
  const t = j(e);
  return ee(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : U(t) && le(t) ? t : Pt(t);
}
function se(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = true);
  const l = Pt(e), i = l === ((n = e.ownerDocument) == null ? void 0 : n.body), c = M(l);
  if (i) {
    const u = He(c);
    return t.concat(c, c.visualViewport || [], le(l) ? l : [], u && r ? se(u) : []);
  }
  return t.concat(l, se(l, [], r));
}
function He(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Rt(e) {
  const t = H(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const l = U(e), i = l ? e.offsetWidth : r, c = l ? e.offsetHeight : n, u = we(r) !== i || we(n) !== c;
  return u && (r = i, n = c), { width: r, height: n, $: u };
}
function je(e) {
  return B(e) ? e : e.contextElement;
}
function $(e) {
  const t = je(e);
  if (!U(t)) return Y(1);
  const r = t.getBoundingClientRect(), { width: n, height: l, $: i } = Rt(t);
  let c = (i ? we(r.width) : r.width) / n, u = (i ? we(r.height) : r.height) / l;
  return (!c || !Number.isFinite(c)) && (c = 1), (!u || !Number.isFinite(u)) && (u = 1), { x: c, y: u };
}
const bn = Y(0);
function _t(e) {
  const t = M(e);
  return !Xe() || !t.visualViewport ? bn : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function An(e, t, r) {
  return t === void 0 && (t = false), !r || t && r !== M(e) ? false : t;
}
function Z(e, t, r, n) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  const l = e.getBoundingClientRect(), i = je(e);
  let c = Y(1);
  t && (n ? B(n) && (c = $(n)) : c = $(e));
  const u = An(i, r, n) ? _t(i) : Y(0);
  let d = (l.left + u.x) / c.x, s = (l.top + u.y) / c.y, o = l.width / c.x, a = l.height / c.y;
  if (i) {
    const f = M(i), h = n && B(n) ? M(n) : n;
    let g = f, w = He(g);
    for (; w && n && h !== g; ) {
      const p = $(w), v = w.getBoundingClientRect(), x = H(w), b = v.left + (w.clientLeft + parseFloat(x.paddingLeft)) * p.x, A = v.top + (w.clientTop + parseFloat(x.paddingTop)) * p.y;
      d *= p.x, s *= p.y, o *= p.x, a *= p.y, d += b, s += A, g = M(w), w = He(g);
    }
  }
  return ve({ width: o, height: a, x: d, y: s });
}
function Fe(e, t) {
  const r = Ae(e).scrollLeft;
  return t ? t.left + r : Z(z(e)).left + r;
}
function Tt(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - Fe(e, r), l = r.top + t.scrollTop;
  return { x: n, y: l };
}
function Fn(e) {
  let { elements: t, rect: r, offsetParent: n, strategy: l } = e;
  const i = l === "fixed", c = z(n), u = t ? be(t.floating) : false;
  if (n === c || u && i) return r;
  let d = { scrollLeft: 0, scrollTop: 0 }, s = Y(1);
  const o = Y(0), a = U(n);
  if ((a || !a && !i) && ((ne(n) !== "body" || le(c)) && (d = Ae(n)), U(n))) {
    const h = Z(n);
    s = $(n), o.x = h.x + n.clientLeft, o.y = h.y + n.clientTop;
  }
  const f = c && !a && !i ? Tt(c, d) : Y(0);
  return { width: r.width * s.x, height: r.height * s.y, x: r.x * s.x - d.scrollLeft * s.x + o.x + f.x, y: r.y * s.y - d.scrollTop * s.y + o.y + f.y };
}
function En(e) {
  return Array.from(e.getClientRects());
}
function On(e) {
  const t = z(e), r = Ae(e), n = e.ownerDocument.body, l = L(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = L(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let c = -r.scrollLeft + Fe(e);
  const u = -r.scrollTop;
  return H(n).direction === "rtl" && (c += L(t.clientWidth, n.clientWidth) - l), { width: l, height: i, x: c, y: u };
}
const at = 25;
function Sn(e, t) {
  const r = M(e), n = z(e), l = r.visualViewport;
  let i = n.clientWidth, c = n.clientHeight, u = 0, d = 0;
  if (l) {
    i = l.width, c = l.height;
    const o = Xe();
    (!o || o && t === "fixed") && (u = l.offsetLeft, d = l.offsetTop);
  }
  const s = Fe(n);
  if (s <= 0) {
    const o = n.ownerDocument, a = o.body, f = getComputedStyle(a), h = o.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, g = Math.abs(n.clientWidth - a.clientWidth - h);
    g <= at && (i -= g);
  } else s <= at && (i += s);
  return { width: i, height: c, x: u, y: d };
}
const Pn = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Rn(e, t) {
  const r = Z(e, true, t === "fixed"), n = r.top + e.clientTop, l = r.left + e.clientLeft, i = U(e) ? $(e) : Y(1), c = e.clientWidth * i.x, u = e.clientHeight * i.y, d = l * i.x, s = n * i.y;
  return { width: c, height: u, x: d, y: s };
}
function ct(e, t, r) {
  let n;
  if (t === "viewport") n = Sn(e, r);
  else if (t === "document") n = On(z(e));
  else if (B(t)) n = Rn(t, r);
  else {
    const l = _t(e);
    n = { x: t.x - l.x, y: t.y - l.y, width: t.width, height: t.height };
  }
  return ve(n);
}
function Dt(e, t) {
  const r = j(e);
  return r === t || !B(r) || ee(r) ? false : H(r).position === "fixed" || Dt(r, t);
}
function _n(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = se(e, [], false).filter((u) => B(u) && ne(u) !== "body"), l = null;
  const i = H(e).position === "fixed";
  let c = i ? j(e) : e;
  for (; B(c) && !ee(c); ) {
    const u = H(c), d = Ke(c);
    !d && u.position === "fixed" && (l = null), (i ? !d && !l : !d && u.position === "static" && !!l && Pn.has(l.position) || le(c) && !d && Dt(e, c)) ? n = n.filter((o) => o !== c) : l = u, c = j(c);
  }
  return t.set(e, n), n;
}
function Tn(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: l } = e;
  const c = [...r === "clippingAncestors" ? be(t) ? [] : _n(t, this._c) : [].concat(r), n], u = c[0], d = c.reduce((s, o) => {
    const a = ct(t, o, l);
    return s.top = L(a.top, s.top), s.right = X(a.right, s.right), s.bottom = X(a.bottom, s.bottom), s.left = L(a.left, s.left), s;
  }, ct(t, u, l));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}
function Dn(e) {
  const { width: t, height: r } = Rt(e);
  return { width: t, height: r };
}
function kn(e, t, r) {
  const n = U(t), l = z(t), i = r === "fixed", c = Z(e, true, i, t);
  let u = { scrollLeft: 0, scrollTop: 0 };
  const d = Y(0);
  function s() {
    d.x = Fe(l);
  }
  if (n || !n && !i) if ((ne(t) !== "body" || le(l)) && (u = Ae(t)), n) {
    const h = Z(t, true, i, t);
    d.x = h.x + t.clientLeft, d.y = h.y + t.clientTop;
  } else l && s();
  i && !n && l && s();
  const o = l && !n && !i ? Tt(l, u) : Y(0), a = c.left + u.scrollLeft - d.x - o.x, f = c.top + u.scrollTop - d.y - o.y;
  return { x: a, y: f, width: c.width, height: c.height };
}
function Pe(e) {
  return H(e).position === "static";
}
function ft(e, t) {
  if (!U(e) || H(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return z(e) === r && (r = r.ownerDocument.body), r;
}
function kt(e, t) {
  const r = M(e);
  if (be(e)) return r;
  if (!U(e)) {
    let l = j(e);
    for (; l && !ee(l); ) {
      if (B(l) && !Pe(l)) return l;
      l = j(l);
    }
    return r;
  }
  let n = ft(e, t);
  for (; n && mn(n) && Pe(n); ) n = ft(n, t);
  return n && ee(n) && Pe(n) && !Ke(n) ? r : n || Cn(e) || r;
}
const Ln = async function(e) {
  const t = this.getOffsetParent || kt, r = this.getDimensions, n = await r(e.floating);
  return { reference: kn(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: n.width, height: n.height } };
};
function Mn(e) {
  return H(e).direction === "rtl";
}
const In = { convertOffsetParentRelativeRectToViewportRelativeRect: Fn, getDocumentElement: z, getClippingRect: Tn, getOffsetParent: kt, getElementRects: Ln, getClientRects: En, getDimensions: Dn, getScale: $, isElement: B, isRTL: Mn };
function Lt(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Nn(e, t) {
  let r = null, n;
  const l = z(e);
  function i() {
    var u;
    clearTimeout(n), (u = r) == null || u.disconnect(), r = null;
  }
  function c(u, d) {
    u === void 0 && (u = false), d === void 0 && (d = 1), i();
    const s = e.getBoundingClientRect(), { left: o, top: a, width: f, height: h } = s;
    if (u || t(), !f || !h) return;
    const g = ue(a), w = ue(l.clientWidth - (o + f)), p = ue(l.clientHeight - (a + h)), v = ue(o), b = { rootMargin: -g + "px " + -w + "px " + -p + "px " + -v + "px", threshold: L(0, X(1, d)) || 1 };
    let A = true;
    function F(E) {
      const S = E[0].intersectionRatio;
      if (S !== d) {
        if (!A) return c();
        S ? c(false, S) : n = setTimeout(() => {
          c(false, 1e-7);
        }, 1e3);
      }
      S === 1 && !Lt(s, e.getBoundingClientRect()) && c(), A = false;
    }
    try {
      r = new IntersectionObserver(F, { ...b, root: l.ownerDocument });
    } catch {
      r = new IntersectionObserver(F, b);
    }
    r.observe(e);
  }
  return c(true), i;
}
function gr(e, t, r, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: l = true, ancestorResize: i = true, elementResize: c = typeof ResizeObserver == "function", layoutShift: u = typeof IntersectionObserver == "function", animationFrame: d = false } = n, s = je(e), o = l || i ? [...s ? se(s) : [], ...se(t)] : [];
  o.forEach((v) => {
    l && v.addEventListener("scroll", r, { passive: true }), i && v.addEventListener("resize", r);
  });
  const a = s && u ? Nn(s, r) : null;
  let f = -1, h = null;
  c && (h = new ResizeObserver((v) => {
    let [x] = v;
    x && x.target === s && h && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var b;
      (b = h) == null || b.observe(t);
    })), r();
  }), s && !d && h.observe(s), h.observe(t));
  let g, w = d ? Z(e) : null;
  d && p();
  function p() {
    const v = Z(e);
    w && !Lt(w, v) && r(), w = v, g = requestAnimationFrame(p);
  }
  return r(), () => {
    var v;
    o.forEach((x) => {
      l && x.removeEventListener("scroll", r), i && x.removeEventListener("resize", r);
    }), a == null ? void 0 : a(), (v = h) == null || v.disconnect(), h = null, d && cancelAnimationFrame(g);
  };
}
const mr = cn, wr = fn, pr = sn, vr = dn, yr = ln, Cr = on, xr = un, br = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), l = { platform: In, ...r }, i = { ...l.platform, _c: n };
  return rn(e, t, { ...l, platform: i });
};
var Wn = function(e) {
  if (typeof document > "u") return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, J = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), he = {}, Re = 0, Mt = function(e) {
  return e && (e.host || Mt(e.parentNode));
}, Bn = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r)) return r;
    var n = Mt(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Hn = function(e, t, r, n) {
  var l = Bn(t, Array.isArray(e) ? e : [e]);
  he[r] || (he[r] = /* @__PURE__ */ new WeakMap());
  var i = he[r], c = [], u = /* @__PURE__ */ new Set(), d = new Set(l), s = function(a) {
    !a || u.has(a) || (u.add(a), s(a.parentNode));
  };
  l.forEach(s);
  var o = function(a) {
    !a || d.has(a) || Array.prototype.forEach.call(a.children, function(f) {
      if (u.has(f)) o(f);
      else try {
        var h = f.getAttribute(n), g = h !== null && h !== "false", w = (J.get(f) || 0) + 1, p = (i.get(f) || 0) + 1;
        J.set(f, w), i.set(f, p), c.push(f), w === 1 && g && de.set(f, true), p === 1 && f.setAttribute(r, "true"), g || f.setAttribute(n, "true");
      } catch (v) {
        console.error("aria-hidden: cannot operate on ", f, v);
      }
    });
  };
  return o(t), u.clear(), Re++, function() {
    c.forEach(function(a) {
      var f = J.get(a) - 1, h = i.get(a) - 1;
      J.set(a, f), i.set(a, h), f || (de.has(a) || a.removeAttribute(n), de.delete(a)), h || a.removeAttribute(r);
    }), Re--, Re || (J = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), he = {});
  };
}, Ar = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), l = Wn(e);
  return l ? (n.push.apply(n, Array.from(l.querySelectorAll("[aria-live], script"))), Hn(n, l, r, "aria-hidden")) : function() {
    return null;
  };
}, ut = function() {
  return ut = Object.assign || function(t) {
    for (var r, n = 1, l = arguments.length; n < l; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, ut.apply(this, arguments);
};
function Fr(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) t.indexOf(n[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[l]) && (r[n[l]] = e[n[l]]);
  return r;
}
function Er(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, l = t.length, i; n < l; n++) (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Or = function() {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
const qn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function Q(e, t, r) {
  const n = r[0];
  if (t != null && e >= t) throw new Error(e + " >= " + t);
  if (e.slice(-1) === n || t && t.slice(-1) === n) throw new Error("trailing zero");
  if (t) {
    let c = 0;
    for (; (e[c] || n) === t[c]; ) c++;
    if (c > 0) return t.slice(0, c) + Q(e.slice(c), t.slice(c), r);
  }
  const l = e ? r.indexOf(e[0]) : 0, i = t != null ? r.indexOf(t[0]) : r.length;
  if (i - l > 1) {
    const c = Math.round(0.5 * (l + i));
    return r[c];
  } else return t && t.length > 1 ? t.slice(0, 1) : r[l] + Q(e.slice(1), null, r);
}
function It(e) {
  if (e.length !== Nt(e[0])) throw new Error("invalid integer part of order key: " + e);
}
function Nt(e) {
  if (e >= "a" && e <= "z") return e.charCodeAt(0) - 97 + 2;
  if (e >= "A" && e <= "Z") return 90 - e.charCodeAt(0) + 2;
  throw new Error("invalid order key head: " + e);
}
function re(e) {
  const t = Nt(e[0]);
  if (t > e.length) throw new Error("invalid order key: " + e);
  return e.slice(0, t);
}
function dt(e, t) {
  if (e === "A" + t[0].repeat(26)) throw new Error("invalid order key: " + e);
  const r = re(e);
  if (e.slice(r.length).slice(-1) === t[0]) throw new Error("invalid order key: " + e);
}
function ht(e, t) {
  It(e);
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
function Yn(e, t) {
  It(e);
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
function Sr(e, t, r = qn) {
  if (e != null && dt(e, r), t != null && dt(t, r), e != null && t != null && e >= t) throw new Error(e + " >= " + t);
  if (e == null) {
    if (t == null) return "a" + r[0];
    const d = re(t), s = t.slice(d.length);
    if (d === "A" + r[0].repeat(26)) return d + Q("", s, r);
    if (d < t) return d;
    const o = Yn(d, r);
    if (o == null) throw new Error("cannot decrement any more");
    return o;
  }
  if (t == null) {
    const d = re(e), s = e.slice(d.length), o = ht(d, r);
    return o ?? d + Q(s, null, r);
  }
  const n = re(e), l = e.slice(n.length), i = re(t), c = t.slice(i.length);
  if (n === i) return n + Q(l, c, r);
  const u = ht(n, r);
  if (u == null) throw new Error("cannot increment any more");
  return u < t ? u : n + Q(l, null, r);
}
var ge = { exports: {} }, _e, gt;
function Un() {
  if (gt) return _e;
  gt = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, l = n * 7, i = n * 365.25;
  _e = function(o, a) {
    a = a || {};
    var f = typeof o;
    if (f === "string" && o.length > 0) return c(o);
    if (f === "number" && isFinite(o)) return a.long ? d(o) : u(o);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(o));
  };
  function c(o) {
    if (o = String(o), !(o.length > 100)) {
      var a = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);
      if (a) {
        var f = parseFloat(a[1]), h = (a[2] || "ms").toLowerCase();
        switch (h) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return f * i;
          case "weeks":
          case "week":
          case "w":
            return f * l;
          case "days":
          case "day":
          case "d":
            return f * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return f * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return f * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return f * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return f;
          default:
            return;
        }
      }
    }
  }
  function u(o) {
    var a = Math.abs(o);
    return a >= n ? Math.round(o / n) + "d" : a >= r ? Math.round(o / r) + "h" : a >= t ? Math.round(o / t) + "m" : a >= e ? Math.round(o / e) + "s" : o + "ms";
  }
  function d(o) {
    var a = Math.abs(o);
    return a >= n ? s(o, a, n, "day") : a >= r ? s(o, a, r, "hour") : a >= t ? s(o, a, t, "minute") : a >= e ? s(o, a, e, "second") : o + " ms";
  }
  function s(o, a, f, h) {
    var g = a >= f * 1.5;
    return Math.round(o / f) + " " + h + (g ? "s" : "");
  }
  return _e;
}
var Te, mt;
function zn() {
  if (mt) return Te;
  mt = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = s, n.disable = u, n.enable = i, n.enabled = d, n.humanize = Un(), n.destroy = o, Object.keys(t).forEach((a) => {
      n[a] = t[a];
    }), n.names = [], n.skips = [], n.formatters = {};
    function r(a) {
      let f = 0;
      for (let h = 0; h < a.length; h++) f = (f << 5) - f + a.charCodeAt(h), f |= 0;
      return n.colors[Math.abs(f) % n.colors.length];
    }
    n.selectColor = r;
    function n(a) {
      let f, h = null, g, w;
      function p(...v) {
        if (!p.enabled) return;
        const x = p, b = Number(/* @__PURE__ */ new Date()), A = b - (f || b);
        x.diff = A, x.prev = f, x.curr = b, f = b, v[0] = n.coerce(v[0]), typeof v[0] != "string" && v.unshift("%O");
        let F = 0;
        v[0] = v[0].replace(/%([a-zA-Z%])/g, (S, k) => {
          if (S === "%%") return "%";
          F++;
          const D = n.formatters[k];
          if (typeof D == "function") {
            const R = v[F];
            S = D.call(x, R), v.splice(F, 1), F--;
          }
          return S;
        }), n.formatArgs.call(x, v), (x.log || n.log).apply(x, v);
      }
      return p.namespace = a, p.useColors = n.useColors(), p.color = n.selectColor(a), p.extend = l, p.destroy = n.destroy, Object.defineProperty(p, "enabled", { enumerable: true, configurable: false, get: () => h !== null ? h : (g !== n.namespaces && (g = n.namespaces, w = n.enabled(a)), w), set: (v) => {
        h = v;
      } }), typeof n.init == "function" && n.init(p), p;
    }
    function l(a, f) {
      const h = n(this.namespace + (typeof f > "u" ? ":" : f) + a);
      return h.log = this.log, h;
    }
    function i(a) {
      n.save(a), n.namespaces = a, n.names = [], n.skips = [];
      const f = (typeof a == "string" ? a : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const h of f) h[0] === "-" ? n.skips.push(h.slice(1)) : n.names.push(h);
    }
    function c(a, f) {
      let h = 0, g = 0, w = -1, p = 0;
      for (; h < a.length; ) if (g < f.length && (f[g] === a[h] || f[g] === "*")) f[g] === "*" ? (w = g, p = h, g++) : (h++, g++);
      else if (w !== -1) g = w + 1, p++, h = p;
      else return false;
      for (; g < f.length && f[g] === "*"; ) g++;
      return g === f.length;
    }
    function u() {
      const a = [...n.names, ...n.skips.map((f) => "-" + f)].join(",");
      return n.enable(""), a;
    }
    function d(a) {
      for (const f of n.skips) if (c(a, f)) return false;
      for (const f of n.names) if (c(a, f)) return true;
      return false;
    }
    function s(a) {
      return a instanceof Error ? a.stack || a.message : a;
    }
    function o() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return n.enable(n.load()), n;
  }
  return Te = e, Te;
}
var wt;
function Vn() {
  return wt || (wt = 1, (function(e, t) {
    var r = {};
    t.formatArgs = l, t.save = i, t.load = c, t.useColors = n, t.storage = u(), t.destroy = /* @__PURE__ */ (() => {
      let s = false;
      return () => {
        s || (s = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function n() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
      let s;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (s = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(s[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function l(s) {
      if (s[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + s[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
      const o = "color: " + this.color;
      s.splice(1, 0, o, "color: inherit");
      let a = 0, f = 0;
      s[0].replace(/%[a-zA-Z%]/g, (h) => {
        h !== "%%" && (a++, h === "%c" && (f = a));
      }), s.splice(f, 0, o);
    }
    t.log = console.debug || console.log || (() => {
    });
    function i(s) {
      try {
        s ? t.storage.setItem("debug", s) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function c() {
      let s;
      try {
        s = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
      } catch {
      }
      return !s && typeof process < "u" && "env" in process && (s = r.DEBUG), s;
    }
    function u() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = zn()(t);
    const { formatters: d } = e.exports;
    d.j = function(s) {
      try {
        return JSON.stringify(s);
      } catch (o) {
        return "[UnexpectedJSONParseError]: " + o.message;
      }
    };
  })(ge, ge.exports)), ge.exports;
}
var Kn = Vn();
const Pr = Ce(Kn), Xn = /* @__PURE__ */ Symbol(), Ge = /* @__PURE__ */ Symbol(), oe = "a", Wt = "f", pt = "p", Bt = "c", Ht = "t", Ze = "h", ie = "w", Je = "o", Qe = "k";
let jn = (e, t) => new Proxy(e, t);
const qe = Object.getPrototypeOf, Ye = /* @__PURE__ */ new WeakMap(), qt = (e) => e && (Ye.has(e) ? Ye.get(e) : qe(e) === Object.prototype || qe(e) === Array.prototype), ye = (e) => typeof e == "object" && e !== null, Gn = (e) => Object.values(Object.getOwnPropertyDescriptors(e)).some((t) => !t.configurable && !t.writable), Zn = (e) => {
  if (Array.isArray(e)) return Array.from(e);
  const t = Object.getOwnPropertyDescriptors(e);
  return Object.values(t).forEach((r) => {
    r.configurable = true;
  }), Object.create(qe(e), t);
}, Jn = (e, t) => {
  const r = { [Wt]: t };
  let n = false;
  const l = (u, d) => {
    if (!n) {
      let s = r[oe].get(e);
      if (s || (s = {}, r[oe].set(e, s)), u === ie) s[ie] = true;
      else {
        let o = s[u];
        o || (o = /* @__PURE__ */ new Set(), s[u] = o), o.add(d);
      }
    }
  }, i = () => {
    n = true, r[oe].delete(e);
  }, c = { get(u, d) {
    return d === Ge ? e : (l(Qe, d), Qn(Reflect.get(u, d), r[oe], r[Bt], r[Ht]));
  }, has(u, d) {
    return d === Xn ? (i(), true) : (l(Ze, d), Reflect.has(u, d));
  }, getOwnPropertyDescriptor(u, d) {
    return l(Je, d), Reflect.getOwnPropertyDescriptor(u, d);
  }, ownKeys(u) {
    return l(ie), Reflect.ownKeys(u);
  } };
  return t && (c.set = c.deleteProperty = () => false), [c, r];
}, $e = (e) => e[Ge] || e, Qn = (e, t, r, n) => {
  if (!qt(e)) return e;
  let l = n && n.get(e);
  if (!l) {
    const d = $e(e);
    Gn(d) ? l = [d, Zn(d)] : l = [d], n == null ? void 0 : n.set(e, l);
  }
  const [i, c] = l;
  let u = r && r.get(i);
  return (!u || u[1][Wt] !== !!c) && (u = Jn(i, !!c), u[1][pt] = jn(c || i, u[0]), r && r.set(i, u)), u[1][oe] = t, u[1][Bt] = r, u[1][Ht] = n, u[1][pt];
}, $n = (e, t) => {
  const r = Reflect.ownKeys(e), n = Reflect.ownKeys(t);
  return r.length !== n.length || r.some((l, i) => l !== n[i]);
}, er = (e, t, r, n, l = Object.is) => {
  if (l(e, t)) return false;
  if (!ye(e) || !ye(t)) return true;
  const i = r.get($e(e));
  if (!i) return true;
  if (n) {
    if (n.get(e) === t) return false;
    n.set(e, t);
  }
  let c = null;
  for (const u of i[Ze] || []) if (c = Reflect.has(e, u) !== Reflect.has(t, u), c) return c;
  if (i[ie] === true) {
    if (c = $n(e, t), c) return c;
  } else for (const u of i[Je] || []) {
    const d = !!Reflect.getOwnPropertyDescriptor(e, u), s = !!Reflect.getOwnPropertyDescriptor(t, u);
    if (c = d !== s, c) return c;
  }
  for (const u of i[Qe] || []) if (c = er(e[u], t[u], r, n, l), c) return c;
  if (c === null) throw new Error("invalid used");
  return c;
}, Rr = (e) => qt(e) && e[Ge] || null, _r = (e, t = true) => {
  Ye.set(e, t);
}, Tr = (e, t, r) => {
  const n = [], l = /* @__PURE__ */ new WeakSet(), i = (c, u) => {
    var d, s, o;
    if (l.has(c)) return;
    ye(c) && l.add(c);
    const a = ye(c) && t.get($e(c));
    if (a) {
      if ((d = a[Ze]) === null || d === void 0 || d.forEach((f) => {
        const h = `:has(${String(f)})`;
        n.push(u ? [...u, h] : [h]);
      }), a[ie] === true) {
        const f = ":ownKeys";
        n.push(u ? [...u, f] : [f]);
      } else (s = a[Je]) === null || s === void 0 || s.forEach((f) => {
        const h = `:hasOwn(${String(f)})`;
        n.push(u ? [...u, h] : [h]);
      });
      (o = a[Qe]) === null || o === void 0 || o.forEach((f) => {
        "value" in (Object.getOwnPropertyDescriptor(c, f) || {}) && i(c[f], u ? [...u, f] : [f]);
      });
    } else u && n.push(u);
  };
  return i(e), n;
};
var De = {}, vt;
function Yt() {
  return vt || (vt = 1, (function(e) {
    (function(t) {
      t(typeof DO_NOT_EXPORT_CRC > "u" ? e : {});
    })(function(t) {
      t.version = "0.3.0";
      function r() {
        for (var s = 0, o = new Array(256), a = 0; a != 256; ++a) s = a, s = s & 1 ? -306674912 ^ s >>> 1 : s >>> 1, s = s & 1 ? -306674912 ^ s >>> 1 : s >>> 1, s = s & 1 ? -306674912 ^ s >>> 1 : s >>> 1, s = s & 1 ? -306674912 ^ s >>> 1 : s >>> 1, s = s & 1 ? -306674912 ^ s >>> 1 : s >>> 1, s = s & 1 ? -306674912 ^ s >>> 1 : s >>> 1, s = s & 1 ? -306674912 ^ s >>> 1 : s >>> 1, s = s & 1 ? -306674912 ^ s >>> 1 : s >>> 1, o[a] = s;
        return typeof Int32Array < "u" ? new Int32Array(o) : o;
      }
      var n = r(), l = typeof Buffer < "u";
      function i(s) {
        if (s.length > 32768 && l) return u(new Buffer(s));
        for (var o = -1, a = s.length - 1, f = 0; f < a; ) o = n[(o ^ s.charCodeAt(f++)) & 255] ^ o >>> 8, o = n[(o ^ s.charCodeAt(f++)) & 255] ^ o >>> 8;
        return f === a && (o = o >>> 8 ^ n[(o ^ s.charCodeAt(f)) & 255]), o ^ -1;
      }
      function c(s) {
        if (s.length > 1e4) return u(s);
        for (var o = -1, a = 0, f = s.length - 3; a < f; ) o = o >>> 8 ^ n[(o ^ s[a++]) & 255], o = o >>> 8 ^ n[(o ^ s[a++]) & 255], o = o >>> 8 ^ n[(o ^ s[a++]) & 255], o = o >>> 8 ^ n[(o ^ s[a++]) & 255];
        for (; a < f + 3; ) o = o >>> 8 ^ n[(o ^ s[a++]) & 255];
        return o ^ -1;
      }
      function u(s) {
        for (var o = -1, a = 0, f = s.length - 7; a < f; ) o = o >>> 8 ^ n[(o ^ s[a++]) & 255], o = o >>> 8 ^ n[(o ^ s[a++]) & 255], o = o >>> 8 ^ n[(o ^ s[a++]) & 255], o = o >>> 8 ^ n[(o ^ s[a++]) & 255], o = o >>> 8 ^ n[(o ^ s[a++]) & 255], o = o >>> 8 ^ n[(o ^ s[a++]) & 255], o = o >>> 8 ^ n[(o ^ s[a++]) & 255], o = o >>> 8 ^ n[(o ^ s[a++]) & 255];
        for (; a < f + 7; ) o = o >>> 8 ^ n[(o ^ s[a++]) & 255];
        return o ^ -1;
      }
      function d(s) {
        for (var o = -1, a = 0, f = s.length, h, g; a < f; ) h = s.charCodeAt(a++), h < 128 ? o = o >>> 8 ^ n[(o ^ h) & 255] : h < 2048 ? (o = o >>> 8 ^ n[(o ^ (192 | h >> 6 & 31)) & 255], o = o >>> 8 ^ n[(o ^ (128 | h & 63)) & 255]) : h >= 55296 && h < 57344 ? (h = (h & 1023) + 64, g = s.charCodeAt(a++) & 1023, o = o >>> 8 ^ n[(o ^ (240 | h >> 8 & 7)) & 255], o = o >>> 8 ^ n[(o ^ (128 | h >> 2 & 63)) & 255], o = o >>> 8 ^ n[(o ^ (128 | g >> 6 & 15 | h & 3)) & 255], o = o >>> 8 ^ n[(o ^ (128 | g & 63)) & 255]) : (o = o >>> 8 ^ n[(o ^ (224 | h >> 12 & 15)) & 255], o = o >>> 8 ^ n[(o ^ (128 | h >> 6 & 63)) & 255], o = o >>> 8 ^ n[(o ^ (128 | h & 63)) & 255]);
        return o ^ -1;
      }
      t.table = n, t.bstr = i, t.buf = c, t.str = d;
    });
  })(De)), De;
}
var ke, yt;
function tr() {
  if (yt) return ke;
  yt = 1;
  var e = Yt();
  ke = l;
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
    for (var c = false, u = [], d = 8; d < i.length; ) {
      t[3] = i[d++], t[2] = i[d++], t[1] = i[d++], t[0] = i[d++];
      var s = n[0] + 4, o = new Uint8Array(s);
      o[0] = i[d++], o[1] = i[d++], o[2] = i[d++], o[3] = i[d++];
      var a = String.fromCharCode(o[0]) + String.fromCharCode(o[1]) + String.fromCharCode(o[2]) + String.fromCharCode(o[3]);
      if (!u.length && a !== "IHDR") throw new Error("IHDR header missing");
      if (a === "IEND") {
        c = true, u.push({ name: a, data: new Uint8Array(0) });
        break;
      }
      for (var f = 4; f < s; f++) o[f] = i[d++];
      t[3] = i[d++], t[2] = i[d++], t[1] = i[d++], t[0] = i[d++];
      var h = r[0], g = e.buf(o);
      if (g !== h) throw new Error("CRC values for " + a + " header do not match, PNG file is likely corrupted");
      var w = new Uint8Array(o.buffer.slice(4));
      u.push({ name: a, data: w });
    }
    if (!c) throw new Error(".png file ended prematurely: no IEND header was found");
    return u;
  }
  return ke;
}
var nr = tr();
const Dr = Ce(nr);
var Le, Ct;
function rr() {
  return Ct || (Ct = 1, Le = function(e, t, r) {
    var n = [], l = e.length;
    if (l === 0) return n;
    var i = t < 0 ? Math.max(0, t + l) : t || 0;
    for (r !== void 0 && (l = r < 0 ? r + l : r); l-- > i; ) n[l - i] = e[l];
    return n;
  }), Le;
}
var Me, xt;
function or() {
  if (xt) return Me;
  xt = 1;
  var e = rr(), t = Yt();
  Me = i;
  var r = new Uint8Array(4), n = new Int32Array(r.buffer), l = new Uint32Array(r.buffer);
  function i(c) {
    var u = 8, d = u, s;
    for (s = 0; s < c.length; s++) u += c[s].data.length, u += 12;
    var o = new Uint8Array(u);
    for (o[0] = 137, o[1] = 80, o[2] = 78, o[3] = 71, o[4] = 13, o[5] = 10, o[6] = 26, o[7] = 10, s = 0; s < c.length; s++) {
      var a = c[s], f = a.name, h = a.data, g = h.length, w = [f.charCodeAt(0), f.charCodeAt(1), f.charCodeAt(2), f.charCodeAt(3)];
      l[0] = g, o[d++] = r[3], o[d++] = r[2], o[d++] = r[1], o[d++] = r[0], o[d++] = w[0], o[d++] = w[1], o[d++] = w[2], o[d++] = w[3];
      for (var p = 0; p < g; ) o[d++] = h[p++];
      var v = w.concat(e(h)), x = t.buf(v);
      n[0] = x, o[d++] = r[3], o[d++] = r[2], o[d++] = r[1], o[d++] = r[0];
    }
    return o;
  }
  return Me;
}
var ir = or();
const kr = Ce(ir);
var me = {}, Ie, bt;
function sr() {
  if (bt) return Ie;
  bt = 1, Ie = e;
  function e(t, r) {
    if (t = String(t), r = String(r), !/^[\x00-\xFF]+$/.test(t) || !/^[\x00-\xFF]+$/.test(r)) throw new Error("Only Latin-1 characters are permitted in PNG tEXt chunks. You might want to consider base64 encoding and/or zEXt compression");
    if (t.length >= 80) throw new Error('Keyword "' + t + '" is longer than the 79-character limit imposed by the PNG specification');
    for (var n = t.length + r.length + 1, l = new Uint8Array(n), i = 0, c, u = 0; u < t.length; u++) {
      if (!(c = t.charCodeAt(u))) throw new Error("0x00 character is not permitted in tEXt keywords");
      l[i++] = c;
    }
    l[i++] = 0;
    for (var d = 0; d < r.length; d++) {
      if (!(c = r.charCodeAt(d))) throw new Error("0x00 character is not permitted in tEXt content");
      l[i++] = c;
    }
    return { name: "tEXt", data: l };
  }
  return Ie;
}
var Ne, At;
function lr() {
  if (At) return Ne;
  At = 1, Ne = e;
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
  return Ne;
}
var Ft;
function ar() {
  return Ft || (Ft = 1, me.encode = sr(), me.decode = lr()), me;
}
var cr = ar();
const Lr = Ce(cr);
export {
  Pr as D,
  ut as _,
  vr as a,
  Cr as b,
  br as c,
  gr as d,
  Fr as e,
  pr as f,
  Or as g,
  yr as h,
  Er as i,
  Ar as j,
  Rr as k,
  xr as l,
  _r as m,
  er as n,
  mr as o,
  Qn as p,
  Tr as q,
  ur as r,
  wr as s,
  dr as t,
  Sr as u,
  Dr as v,
  hr as w,
  Lr as x,
  kr as y
};
