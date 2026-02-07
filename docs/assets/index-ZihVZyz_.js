import { r as g, j as e, R as A, t as y } from "./react-CbLQ1BCV.js";
import { Q as k, a as E, H as W, O as D, c as U, b as Q, d as K, R as X, u as Y, e as M, f as J } from "./@tanstack-CBJ8iKIX.js";
import { T as Z, a as ee, I as te, b as ae, B as v, c as se, d as C, e as ne, f as re, g as oe, D as ie, M as le, h as P, i as T, j as b, k as S, l as L, m as N, n as w, o as $, p as G, q as ce, r as ue, s as de, t as he, u as me, v as pe, w as fe, x as ge } from "./app-components-B7Ss78Y7.js";
import { R as xe, a as ye, b as Re, c as ve, d as je, e as Ce, f as Pe, g as Te, h as be, i as Se, j as Le, k as Ne, l as we, m as Ge, n as Ie, o as $e, p as _e, q as ke, r as Ee, s as De, t as Me, u as ze, v as Oe, w as Fe, x as He, y as qe } from "./app-route-for-_layout-game-h4nOCY4k.js";
import { D as Be } from "./vendor-COi5Ab7_.js";
import { C as Ve, a as Ae } from "./icons-D_VIAZxC.js";
import { u as z } from "./app-lib-BV4GtTtn.js";
import { u as We, p as Ue } from "./app-hooks-CLrZS5cX.js";
import "./index-ZihVZyz_.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-D2PZIgT1.js";
import "./app-libs-for-custom-theme-DiZywLAL.js";
import "./components-and-styling-lnR2ABT4.js";
import "./gsap-DDlvirwQ.js";
import "./app-libs-for-silly-tavern-CCJ98-SQ.js";
import "./id-OxPLOBIU.js";
import "./zod-grrOrvCS.js";
import "./future-lib-llm-ui-react-B5HG0st1.js";
import "./es-toolkit-CstbrnlE.js";
import "./@tailwind-COJ8Fh6m.js";
(function() {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const r of s) if (r.type === "childList") for (const i of r.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && o(i);
  }).observe(document, { childList: true, subtree: true });
  function n(s) {
    const r = {};
    return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function o(s) {
    if (s.ep) return;
    s.ep = true;
    const r = n(s);
    fetch(s.href, r);
  }
})();
var da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ha(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Qe() {
  const [t] = g.useState(() => new k({ defaultOptions: { queries: { staleTime: 3e5, retry: 1 } } }));
  return e.jsxs(E, { client: t, children: [e.jsx(W, {}), e.jsxs(Z, { defaultTheme: "dark", storageKey: "allinone-webapp-ui-theme", children: [e.jsx(D, {}), e.jsx(ee, { expand: true, visibleToasts: 6 })] })] });
}
const O = U({ component: Qe }), Ke = "modulepreload", Xe = function(t) {
  return "/tavern/" + t;
}, _ = {}, ma = function(a, n, o) {
  let s = Promise.resolve();
  if (n && n.length > 0) {
    let m = function(u) {
      return Promise.all(u.map((c) => Promise.resolve(c).then((p) => ({ status: "fulfilled", value: p }), (p) => ({ status: "rejected", reason: p }))));
    };
    document.getElementsByTagName("link");
    const i = document.querySelector("meta[property=csp-nonce]"), d = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
    s = m(n.map((u) => {
      if (u = Xe(u), u in _) return;
      _[u] = true;
      const c = u.endsWith(".css"), p = c ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${u}"]${p}`)) return;
      const l = document.createElement("link");
      if (l.rel = c ? "stylesheet" : Ke, c || (l.as = "script"), l.crossOrigin = "", l.href = u, d && l.setAttribute("nonce", d), document.head.appendChild(l), c) return new Promise((f, x) => {
        l.addEventListener("load", f), l.addEventListener("error", () => x(new Error(`Unable to preload CSS for ${u}`)));
      });
    }));
  }
  function r(i) {
    const d = new Event("vite:preloadError", { cancelable: true });
    if (d.payload = i, window.dispatchEvent(d), !d.defaultPrevented) throw i;
  }
  return s.then((i) => {
    for (const d of i || []) d.status === "rejected" && r(d.reason);
    return a().catch(r);
  });
}, F = xe.update({ id: "/_layout-game", getParentRoute: () => O }), h = ye.update({ id: "/_silly-tavern", getParentRoute: () => F }), Ye = Re.update({ id: "/", path: "/", getParentRoute: () => h }), H = ve.update({ id: "/session", path: "/session", getParentRoute: () => h }), R = je.update({ id: "/plaza", path: "/plaza", getParentRoute: () => h }), Je = Ce.update({ id: "/create", path: "/create", getParentRoute: () => h }), j = Pe.update({ id: "/config", path: "/config", getParentRoute: () => h }), Ze = Te.update({ id: "/", path: "/", getParentRoute: () => R }), et = be.update({ id: "/", path: "/", getParentRoute: () => j }), tt = Se.update({ id: "/$sessionId", path: "/$sessionId", getParentRoute: () => H }), at = Le.update({ id: "/group-chat", path: "/group-chat", getParentRoute: () => R }), st = Ne.update({ id: "/dnd", path: "/dnd", getParentRoute: () => R }), nt = we.update({ id: "/characters", path: "/characters", getParentRoute: () => R }), rt = Ge.update({ id: "/challenges", path: "/challenges", getParentRoute: () => R }), ot = Ie.update({ id: "/create_/group-chat", path: "/create/group-chat", getParentRoute: () => h }), it = $e.update({ id: "/create_/dnd", path: "/create/dnd", getParentRoute: () => h }), lt = _e.update({ id: "/create_/chat-character", path: "/create/chat-character", getParentRoute: () => h }), ct = ke.update({ id: "/create_/chat-challenge", path: "/create/chat-challenge", getParentRoute: () => h }), ut = Ee.update({ id: "/create_/character", path: "/create/character", getParentRoute: () => h }), dt = De.update({ id: "/create_/challenge", path: "/create/challenge", getParentRoute: () => h }), ht = Me.update({ id: "/settings", path: "/settings", getParentRoute: () => j }), mt = ze.update({ id: "/overview", path: "/overview", getParentRoute: () => j }), pt = Oe.update({ id: "/llm", path: "/llm", getParentRoute: () => j }), ft = Fe.update({ id: "/characters_/$characterId", path: "/characters/$characterId", getParentRoute: () => h }), gt = He.update({ id: "/challenges_/$challengeId", path: "/challenges/$challengeId", getParentRoute: () => h }), xt = qe.update({ id: "/characters_/$characterId_/edit", path: "/characters/$characterId/edit", getParentRoute: () => h }), yt = { LayoutGameSillyTavernConfigLlmRoute: pt, LayoutGameSillyTavernConfigOverviewRoute: mt, LayoutGameSillyTavernConfigSettingsRoute: ht, LayoutGameSillyTavernConfigIndexRoute: et }, Rt = j._addFileChildren(yt), vt = { LayoutGameSillyTavernPlazaChallengesRoute: rt, LayoutGameSillyTavernPlazaCharactersRoute: nt, LayoutGameSillyTavernPlazaDndRoute: st, LayoutGameSillyTavernPlazaGroupChatRoute: at, LayoutGameSillyTavernPlazaIndexRoute: Ze }, jt = R._addFileChildren(vt), Ct = { LayoutGameSillyTavernSessionSessionIdRoute: tt }, Pt = H._addFileChildren(Ct), Tt = { LayoutGameSillyTavernConfigRouteRoute: Rt, LayoutGameSillyTavernCreateRoute: Je, LayoutGameSillyTavernPlazaRoute: jt, LayoutGameSillyTavernSessionRoute: Pt, LayoutGameSillyTavernIndexRoute: Ye, LayoutGameSillyTavernChallengesChallengeIdRoute: gt, LayoutGameSillyTavernCharactersCharacterIdRoute: ft, LayoutGameSillyTavernCreateChallengeRoute: dt, LayoutGameSillyTavernCreateCharacterRoute: ut, LayoutGameSillyTavernCreateChatChallengeRoute: ct, LayoutGameSillyTavernCreateChatCharacterRoute: lt, LayoutGameSillyTavernCreateDndRoute: it, LayoutGameSillyTavernCreateGroupChatRoute: ot, LayoutGameSillyTavernCharactersCharacterIdEditRoute: xt }, bt = h._addFileChildren(Tt), St = { LayoutGameSillyTavernRouteRoute: bt }, Lt = F._addFileChildren(St), Nt = { LayoutGameRouteRoute: Lt }, wt = O._addFileChildren(Nt)._addFileTypes();
Be({ interval: 2e3, tkName: "dev", md5: "43f1516c98cf02ba06d7406c37ad52f0", url: "https://nexworld.wiki/", timeOutUrl: "https://nexworld.wiki/" });
const Gt = Q(), It = K({ routeTree: wt, history: Gt, defaultPreload: "intent", scrollRestoration: true }), $t = new k(), I = document.getElementById("app");
I && !I.innerHTML && A.createRoot(I).render(e.jsx(E, { client: $t, children: e.jsx(X, { router: It }) }));
function _t(t) {
  const a = [];
  return t.split("/").forEach((o, s) => {
    if (o.startsWith("$")) {
      const r = o.slice(1), i = kt(r);
      a.push({ name: r, position: s, exampleValue: i });
    }
  }), a;
}
function kt(t) {
  return { postId: "123", userId: "456", id: "1", slug: "example-slug", category: "tech", tag: "javascript" }[t] || "example";
}
function Et(t, a) {
  var _a, _b;
  const n = a.fullPath || a.path || t, s = n.split("/").filter(Boolean).length, r = _t(n);
  return { id: t, path: a.path || "", fullPath: n, level: s, isRoot: n === "/", children: [], params: r, metadata: { hasComponent: !!((_a = a.options) == null ? void 0 : _a.component), isIndex: n === "/" || n.endsWith("/"), parentId: (_b = a.parentRoute) == null ? void 0 : _b.id } };
}
function Dt(t) {
  const a = [];
  for (const n of t.values()) if (n.isRoot || !n.metadata.parentId || n.metadata.parentId === "__root__") a.push(n);
  else {
    const o = t.get(n.metadata.parentId);
    o ? o.children.push(n) : a.push(n);
  }
  return a;
}
function q(t) {
  t.sort((a, n) => a.isRoot ? -1 : n.isRoot ? 1 : a.fullPath.localeCompare(n.fullPath));
  for (const a of t) a.children.length > 0 && q(a.children);
}
function Mt(t) {
  const a = t.routesById || {}, n = /* @__PURE__ */ new Map();
  for (const [s, r] of Object.entries(a)) {
    if (s === "__root__") continue;
    const d = Et(s, r);
    n.set(s, d);
  }
  const o = Dt(n);
  return q(o), o;
}
function zt({ params: t, paramValues: a, onParamChange: n, onNavigate: o }) {
  return e.jsxs("div", { className: "space-y-3", children: [t.map((s) => e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "text-xs font-medium text-gray-600", children: [s.name, e.jsxs("span", { className: "text-gray-400 ml-2", children: ["(\u793A\u4F8B: ", e.jsx("code", { className: "bg-blue-50 px-1 rounded", children: s.exampleValue }), ")"] })] }), e.jsx(re, { type: "text", value: a[s.name], onChange: (r) => n(s.name, r.target.value), placeholder: `\u8F93\u5165 ${s.name}`, className: "h-8 text-sm" })] }, s.name)), e.jsx("div", { className: "flex gap-1", children: e.jsx(v, { variant: "outline", size: "sm", onClick: () => o(false), className: "", children: "\u524D\u5F80" }) })] });
}
function B({ route: t, depth: a = 0 }) {
  const n = M(), o = a * 32, [s, r] = g.useState(() => {
    const l = {};
    for (const f of t.params) l[f.name] = f.exampleValue;
    return l;
  }), [i, d] = g.useState(true), m = (l = false) => {
    let f = t.fullPath;
    if (t.params.length > 0) for (const x of t.params) {
      const V = l ? x.exampleValue : s[x.name];
      f = f.replace(`$${x.name}`, V || x.exampleValue);
    }
    n({ to: f });
  }, u = (l, f) => {
    r((x) => ({ ...x, [l]: f }));
  }, c = t.children.length > 0, p = a > 0;
  return e.jsxs("div", { className: "relative", children: [p && e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-200 to-transparent", style: { left: `${o - 16}px` } }), e.jsx("div", { className: "absolute top-6 w-4 h-0.5 bg-indigo-200", style: { left: `${o - 16}px` } })] }), e.jsxs("div", { style: { marginLeft: `${o}px` }, className: "", children: [e.jsxs(te, { variant: "outline", size: "sm", className: "bg-background", children: [e.jsx(ae, { children: e.jsxs("div", { className: "w-full flex gap-2 items-center", children: [c && e.jsx(v, { variant: "ghost", size: "sm", onClick: () => d(!i), children: i ? e.jsx(Ve, { className: "h-4 w-4" }) : e.jsx(Ae, { className: "h-4 w-4" }) }), e.jsx(se, { children: e.jsx("div", { className: "font-semibold", children: t.fullPath }) }), e.jsxs("div", { className: "inline-flex gap-2 flex-wrap", children: [t.isRoot && e.jsx(C, { variant: "default", children: "root" }), t.params.length > 0 && e.jsx(C, { variant: "destructive", children: "\u52A8\u6001" }), t.metadata.isIndex && !t.isRoot && e.jsx(C, { variant: "secondary", children: "index" }), c && e.jsx(C, { className: "bg-blue-500 text-white dark:bg-blue-600", children: t.children.length })] }), t.params.length === 0 && e.jsx(v, { size: "sm", variant: "ghost", onClick: () => m(false), children: "\u2192" })] }) }), t.params.length === 0 && e.jsx(ne, { children: e.jsx(v, { size: "sm", variant: "outline", onClick: () => m(false), children: "\u2192" }) }), t.params.length > 0 && e.jsx(zt, { params: t.params, paramValues: s, onParamChange: u, onNavigate: m })] }), i && t.children.length > 0 && e.jsx("div", { className: "py-1", children: e.jsx("div", { className: "space-y-1", children: t.children.map((l) => e.jsx(B, { route: l, depth: a + 1 }, l.id)) }) })] })] });
}
function Ot() {
  const t = Y(), a = g.useMemo(() => Mt(t), [t]), n = g.useMemo(() => {
    let o = 0;
    const s = (r) => {
      for (const i of r) o++, i.children.length > 0 && s(i.children);
    };
    return s(a), o;
  }, [a]);
  return e.jsxs("div", { className: "space-y-2", children: [e.jsx("div", { className: "", children: e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u5171 ", n, " \u4E2A\u8DEF\u7531\u3002"] }) }), a.length > 0 && e.jsx("div", { className: "space-y-2", children: a.map((o) => e.jsx(B, { route: o }, o.id)) }), a.length === 0 && e.jsx("div", { className: "text-center py-12 text-gray-500", children: e.jsx("p", { children: "\u672A\u627E\u5230\u4EFB\u4F55\u8DEF\u7531" }) })] });
}
const Ft = /* @__PURE__ */ new Date("2026-05-01");
function Ht() {
  return e.jsxs(de, { className: "sm:max-w-xl p-0 space-y-0 gap-0", children: [e.jsxs(he, { className: "p-3 pb-2", children: [e.jsx(me, { children: "\u6240\u6709\u9875\u9762" }), e.jsx(pe, { children: "\u53EF\u8BBF\u95EE\u5E94\u7528\u4E2D\u6240\u6709\u5DF2\u6CE8\u518C\u7684\u8DEF\u7531\u3002" })] }), e.jsx("div", { className: "p-3 max-h-[60vh] overflow-auto border-y", children: e.jsx(Ot, {}) }), e.jsx(fe, { className: "sm:justify-start p-3 pt-2", children: e.jsx(ge, { asChild: true, children: e.jsx(v, { type: "button", variant: "secondary", size: "sm", children: "Close" }) }) })] });
}
function qt({ className: t }) {
  const a = M({}), { systemTheme: n, theme: o, setTheme: s, defaultTheme: r, primaryColor: i, setPrimaryColor: d, defaultPrimaryColor: m } = We(), u = z((c) => c.recentPages);
  return e.jsxs(ie, { children: [e.jsxs(le, { className: `rounded-none border-x-0 border-t-0 ${t ?? ""}`, children: [e.jsxs(P, { children: [e.jsx(T, { children: "Go" }), e.jsxs(b, { children: [e.jsx(S, { onClick: () => a({ to: "/" }), children: " Home " }), e.jsx(S, { onClick: () => a({ to: "/config/llm" }), children: " Config " })] })] }), e.jsxs(P, { children: [e.jsx(T, { children: "History" }), e.jsx(b, { children: u.map((c) => e.jsx(S, { onClick: () => a({ to: c }), children: c }, c)) })] }), e.jsxs(P, { children: [e.jsx(T, { children: "View" }), e.jsxs(b, { children: [e.jsxs(L, { children: [e.jsx(N, { children: "Theme" }), e.jsx(w, { children: Object.entries(Ue).map(([c, p]) => e.jsxs(L, { children: [e.jsx(N, { children: c }), e.jsx(w, { children: e.jsx($, { value: i, children: p.map((l) => e.jsxs(G, { value: l, onClick: () => d == null ? void 0 : d(l), children: [l.charAt(0).toUpperCase() + l.slice(1), m === l ? " (default)" : ""] }, l)) }) })] }, c)) })] }), e.jsxs(L, { children: [e.jsx(N, { children: "Theme Mode" }), e.jsxs(w, { children: [e.jsxs($, { value: o, children: [e.jsxs(G, { value: "light", onClick: () => s("light"), children: ["Light", r === "light" ? " (default)" : ""] }), e.jsxs(G, { value: "dark", onClick: () => s("dark"), children: ["Dark", r === "dark" ? " (default)" : ""] })] }), e.jsx(ce, {}), e.jsxs(ue, { checked: o === "system", onClick: () => s("system"), children: ["System (", n, ")", r === "system" ? " (default)" : ""] })] })] })] })] })] }), e.jsx(Ht, {})] });
}
function pa() {
  const t = J(), a = z((i) => i.addPage), [n, o] = g.useState(false), [s, r] = g.useState(false);
  return g.useEffect(() => {
    a(t.pathname);
  }, [t.pathname, a]), g.useEffect(() => {
    const i = async () => {
      try {
        const u = await (await fetch("https://time.akamai.com/")).text(), c = Number.parseFloat(u);
        if (Number.isNaN(c)) throw y.error("timestamp is NaN", { duration: 1e4 }), new Error("[2]\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005");
        return new Date(c * 1e3);
      } catch {
        const u = await (await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC")).json();
        if (u.datetime) return new Date(u.datetime);
        throw y.error("datetime not found in response", { duration: 1e4 }), new Error("[1]\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005");
      }
    };
    (async () => {
      try {
        await i() > Ft && (o(true), y.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005", { duration: 1e4 })), r(true);
      } catch (m) {
        o(true), r(true), y.error(String(m), { duration: 1e4 }), y.error(String(m == null ? void 0 : m.message), { duration: 1e4 }), y.error("[3]\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005", { duration: 1e4 });
      }
    })();
  }, []), s && !n ? e.jsx(oe, { children: e.jsxs("div", { className: "flex flex-col gap-0 h-screen print:h-auto", children: [e.jsx(qt, { className: "shrink-0 grow-0 print:hidden" }), e.jsx("div", { className: "flex-1 overflow-auto", children: e.jsx(D, {}) })] }) }) : s ? e.jsx("div", { className: "flex items-center justify-center h-screen", children: e.jsx("div", { className: "text-center", children: e.jsx("h1", { className: "text-2xl font-bold", children: "\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005" }) }) }) : e.jsx("div", { className: "flex items-center justify-center h-screen", children: e.jsx("div", { className: "text-center", children: e.jsx("h1", { className: "text-2xl font-bold", children: "\u6B63\u5728\u52A0\u8F7D..." }) }) });
}
export {
  pa as D,
  ma as _,
  da as c,
  ha as g
};
