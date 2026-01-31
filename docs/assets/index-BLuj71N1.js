import { r as x, j as e, R as A, t as y } from "./react-yvOuIRP4.js";
import { Q as k, a as E, H as W, O as M, c as U, b as Q, d as K, R as X, u as Y, e as D, f as J } from "./@tanstack-CkFHb3Uq.js";
import { T as Z, a as ee, I as te, b as ae, B as R, c as se, d as j, e as ne, f as re, g as oe, D as ie, M as le, h as P, i as b, j as T, k as S, l as N, m as w, n as L, o as $, p as I, q as ce, r as ue, s as de, t as he, u as me, v as pe, w as fe, x as xe } from "./app-components-CXEpHOPX.js";
import { R as ge, a as ye, b as Re, c as ve, d as je, e as Ce, f as Pe, g as be, h as Te, i as Se, j as Ne, k as we, l as Le, m as Ie, n as Ge, o as $e, p as _e, q as ke, r as Ee, s as Me } from "./app-route-for-_layout-game-DbXxl6Nb.js";
import { D as De } from "./vendor-B6AqdxtN.js";
import { C as ze, a as Oe } from "./icons-RIOklkzb.js";
import { u as z } from "./app-lib-CUGc0APc.js";
import { u as Fe, p as He } from "./app-hooks-BS7L2h5w.js";
import "./index-BLuj71N1.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-BXKxEfoC.js";
import "./app-libs-for-custom-theme-CnMfby2Z.js";
import "./components-and-styling-lnR2ABT4.js";
import "./gsap-DDlvirwQ.js";
import "./app-libs-for-silly-tavern-5Sl9eX5r.js";
import "./id-OxPLOBIU.js";
import "./zod-grrOrvCS.js";
import "./es-toolkit-CstbrnlE.js";
import "./future-lib-llm-ui-react-YZenkMFQ.js";
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
var Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ea(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Be() {
  const [t] = x.useState(() => new k({ defaultOptions: { queries: { staleTime: 3e5, retry: 1 } } }));
  return e.jsxs(E, { client: t, children: [e.jsx(W, {}), e.jsxs(Z, { defaultTheme: "dark", storageKey: "allinone-webapp-ui-theme", children: [e.jsx(M, {}), e.jsx(ee, { expand: true, visibleToasts: 6 })] })] });
}
const O = U({ component: Be }), Ve = "modulepreload", qe = function(t) {
  return "/tavern/" + t;
}, _ = {}, ta = function(a, n, o) {
  let s = Promise.resolve();
  if (n && n.length > 0) {
    let h = function(u) {
      return Promise.all(u.map((c) => Promise.resolve(c).then((p) => ({ status: "fulfilled", value: p }), (p) => ({ status: "rejected", reason: p }))));
    };
    document.getElementsByTagName("link");
    const i = document.querySelector("meta[property=csp-nonce]"), d = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
    s = h(n.map((u) => {
      if (u = qe(u), u in _) return;
      _[u] = true;
      const c = u.endsWith(".css"), p = c ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${u}"]${p}`)) return;
      const l = document.createElement("link");
      if (l.rel = c ? "stylesheet" : Ve, c || (l.as = "script"), l.crossOrigin = "", l.href = u, d && l.setAttribute("nonce", d), document.head.appendChild(l), c) return new Promise((f, g) => {
        l.addEventListener("load", f), l.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${u}`)));
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
}, F = ge.update({ id: "/_layout-game", getParentRoute: () => O }), m = ye.update({ id: "/_silly-tavern", getParentRoute: () => F }), Ae = Re.update({ id: "/", path: "/", getParentRoute: () => m }), H = ve.update({ id: "/session", path: "/session", getParentRoute: () => m }), C = je.update({ id: "/plaza", path: "/plaza", getParentRoute: () => m }), We = Ce.update({ id: "/create", path: "/create", getParentRoute: () => m }), v = Pe.update({ id: "/config", path: "/config", getParentRoute: () => m }), Ue = be.update({ id: "/", path: "/", getParentRoute: () => C }), Qe = Te.update({ id: "/", path: "/", getParentRoute: () => v }), Ke = Se.update({ id: "/$sessionId", path: "/$sessionId", getParentRoute: () => H }), Xe = Ne.update({ id: "/characters", path: "/characters", getParentRoute: () => C }), Ye = we.update({ id: "/challenges", path: "/challenges", getParentRoute: () => C }), Je = Le.update({ id: "/create_/character", path: "/create/character", getParentRoute: () => m }), Ze = Ie.update({ id: "/create_/challenge", path: "/create/challenge", getParentRoute: () => m }), et = Ge.update({ id: "/settings", path: "/settings", getParentRoute: () => v }), tt = $e.update({ id: "/overview", path: "/overview", getParentRoute: () => v }), at = _e.update({ id: "/llm", path: "/llm", getParentRoute: () => v }), st = ke.update({ id: "/characters_/$characterId", path: "/characters/$characterId", getParentRoute: () => m }), nt = Ee.update({ id: "/challenges_/$challengeId", path: "/challenges/$challengeId", getParentRoute: () => m }), rt = Me.update({ id: "/characters_/$characterId_/edit", path: "/characters/$characterId/edit", getParentRoute: () => m }), ot = { LayoutGameSillyTavernConfigLlmRoute: at, LayoutGameSillyTavernConfigOverviewRoute: tt, LayoutGameSillyTavernConfigSettingsRoute: et, LayoutGameSillyTavernConfigIndexRoute: Qe }, it = v._addFileChildren(ot), lt = { LayoutGameSillyTavernPlazaChallengesRoute: Ye, LayoutGameSillyTavernPlazaCharactersRoute: Xe, LayoutGameSillyTavernPlazaIndexRoute: Ue }, ct = C._addFileChildren(lt), ut = { LayoutGameSillyTavernSessionSessionIdRoute: Ke }, dt = H._addFileChildren(ut), ht = { LayoutGameSillyTavernConfigRouteRoute: it, LayoutGameSillyTavernCreateRoute: We, LayoutGameSillyTavernPlazaRoute: ct, LayoutGameSillyTavernSessionRoute: dt, LayoutGameSillyTavernIndexRoute: Ae, LayoutGameSillyTavernChallengesChallengeIdRoute: nt, LayoutGameSillyTavernCharactersCharacterIdRoute: st, LayoutGameSillyTavernCreateChallengeRoute: Ze, LayoutGameSillyTavernCreateCharacterRoute: Je, LayoutGameSillyTavernCharactersCharacterIdEditRoute: rt }, mt = m._addFileChildren(ht), pt = { LayoutGameSillyTavernRouteRoute: mt }, ft = F._addFileChildren(pt), xt = { LayoutGameRouteRoute: ft }, gt = O._addFileChildren(xt)._addFileTypes();
De({ interval: 2e3, tkName: "dev", md5: "43f1516c98cf02ba06d7406c37ad52f0", url: "https://nexworld.wiki/", timeOutUrl: "https://nexworld.wiki/" });
const yt = Q(), Rt = K({ routeTree: gt, history: yt, defaultPreload: "intent", scrollRestoration: true }), vt = new k(), G = document.getElementById("app");
G && !G.innerHTML && A.createRoot(G).render(e.jsx(E, { client: vt, children: e.jsx(X, { router: Rt }) }));
function jt(t) {
  const a = [];
  return t.split("/").forEach((o, s) => {
    if (o.startsWith("$")) {
      const r = o.slice(1), i = Ct(r);
      a.push({ name: r, position: s, exampleValue: i });
    }
  }), a;
}
function Ct(t) {
  return { postId: "123", userId: "456", id: "1", slug: "example-slug", category: "tech", tag: "javascript" }[t] || "example";
}
function Pt(t, a) {
  var _a, _b;
  const n = a.fullPath || a.path || t, s = n.split("/").filter(Boolean).length, r = jt(n);
  return { id: t, path: a.path || "", fullPath: n, level: s, isRoot: n === "/", children: [], params: r, metadata: { hasComponent: !!((_a = a.options) == null ? void 0 : _a.component), isIndex: n === "/" || n.endsWith("/"), parentId: (_b = a.parentRoute) == null ? void 0 : _b.id } };
}
function bt(t) {
  const a = [];
  for (const n of t.values()) if (n.isRoot || !n.metadata.parentId || n.metadata.parentId === "__root__") a.push(n);
  else {
    const o = t.get(n.metadata.parentId);
    o ? o.children.push(n) : a.push(n);
  }
  return a;
}
function B(t) {
  t.sort((a, n) => a.isRoot ? -1 : n.isRoot ? 1 : a.fullPath.localeCompare(n.fullPath));
  for (const a of t) a.children.length > 0 && B(a.children);
}
function Tt(t) {
  const a = t.routesById || {}, n = /* @__PURE__ */ new Map();
  for (const [s, r] of Object.entries(a)) {
    if (s === "__root__") continue;
    const d = Pt(s, r);
    n.set(s, d);
  }
  const o = bt(n);
  return B(o), o;
}
function St({ params: t, paramValues: a, onParamChange: n, onNavigate: o }) {
  return e.jsxs("div", { className: "space-y-3", children: [t.map((s) => e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "text-xs font-medium text-gray-600", children: [s.name, e.jsxs("span", { className: "text-gray-400 ml-2", children: ["(\u793A\u4F8B: ", e.jsx("code", { className: "bg-blue-50 px-1 rounded", children: s.exampleValue }), ")"] })] }), e.jsx(re, { type: "text", value: a[s.name], onChange: (r) => n(s.name, r.target.value), placeholder: `\u8F93\u5165 ${s.name}`, className: "h-8 text-sm" })] }, s.name)), e.jsx("div", { className: "flex gap-1", children: e.jsx(R, { variant: "outline", size: "sm", onClick: () => o(false), className: "", children: "\u524D\u5F80" }) })] });
}
function V({ route: t, depth: a = 0 }) {
  const n = D(), o = a * 32, [s, r] = x.useState(() => {
    const l = {};
    for (const f of t.params) l[f.name] = f.exampleValue;
    return l;
  }), [i, d] = x.useState(true), h = (l = false) => {
    let f = t.fullPath;
    if (t.params.length > 0) for (const g of t.params) {
      const q = l ? g.exampleValue : s[g.name];
      f = f.replace(`$${g.name}`, q || g.exampleValue);
    }
    n({ to: f });
  }, u = (l, f) => {
    r((g) => ({ ...g, [l]: f }));
  }, c = t.children.length > 0, p = a > 0;
  return e.jsxs("div", { className: "relative", children: [p && e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-200 to-transparent", style: { left: `${o - 16}px` } }), e.jsx("div", { className: "absolute top-6 w-4 h-0.5 bg-indigo-200", style: { left: `${o - 16}px` } })] }), e.jsxs("div", { style: { marginLeft: `${o}px` }, className: "", children: [e.jsxs(te, { variant: "outline", size: "sm", className: "bg-background", children: [e.jsx(ae, { children: e.jsxs("div", { className: "w-full flex gap-2 items-center", children: [c && e.jsx(R, { variant: "ghost", size: "sm", onClick: () => d(!i), children: i ? e.jsx(ze, { className: "h-4 w-4" }) : e.jsx(Oe, { className: "h-4 w-4" }) }), e.jsx(se, { children: e.jsx("div", { className: "font-semibold", children: t.fullPath }) }), e.jsxs("div", { className: "inline-flex gap-2 flex-wrap", children: [t.isRoot && e.jsx(j, { variant: "default", children: "root" }), t.params.length > 0 && e.jsx(j, { variant: "destructive", children: "\u52A8\u6001" }), t.metadata.isIndex && !t.isRoot && e.jsx(j, { variant: "secondary", children: "index" }), c && e.jsx(j, { className: "bg-blue-500 text-white dark:bg-blue-600", children: t.children.length })] }), t.params.length === 0 && e.jsx(R, { size: "sm", variant: "ghost", onClick: () => h(false), children: "\u2192" })] }) }), t.params.length === 0 && e.jsx(ne, { children: e.jsx(R, { size: "sm", variant: "outline", onClick: () => h(false), children: "\u2192" }) }), t.params.length > 0 && e.jsx(St, { params: t.params, paramValues: s, onParamChange: u, onNavigate: h })] }), i && t.children.length > 0 && e.jsx("div", { className: "py-1", children: e.jsx("div", { className: "space-y-1", children: t.children.map((l) => e.jsx(V, { route: l, depth: a + 1 }, l.id)) }) })] })] });
}
function Nt() {
  const t = Y(), a = x.useMemo(() => Tt(t), [t]), n = x.useMemo(() => {
    let o = 0;
    const s = (r) => {
      for (const i of r) o++, i.children.length > 0 && s(i.children);
    };
    return s(a), o;
  }, [a]);
  return e.jsxs("div", { className: "space-y-2", children: [e.jsx("div", { className: "", children: e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u5171 ", n, " \u4E2A\u8DEF\u7531\u3002"] }) }), a.length > 0 && e.jsx("div", { className: "space-y-2", children: a.map((o) => e.jsx(V, { route: o }, o.id)) }), a.length === 0 && e.jsx("div", { className: "text-center py-12 text-gray-500", children: e.jsx("p", { children: "\u672A\u627E\u5230\u4EFB\u4F55\u8DEF\u7531" }) })] });
}
const wt = /* @__PURE__ */ new Date("2026-05-01");
function Lt() {
  return e.jsxs(de, { className: "sm:max-w-xl p-0 space-y-0 gap-0", children: [e.jsxs(he, { className: "p-3 pb-2", children: [e.jsx(me, { children: "\u6240\u6709\u9875\u9762" }), e.jsx(pe, { children: "\u53EF\u8BBF\u95EE\u5E94\u7528\u4E2D\u6240\u6709\u5DF2\u6CE8\u518C\u7684\u8DEF\u7531\u3002" })] }), e.jsx("div", { className: "p-3 max-h-[60vh] overflow-auto border-y", children: e.jsx(Nt, {}) }), e.jsx(fe, { className: "sm:justify-start p-3 pt-2", children: e.jsx(xe, { asChild: true, children: e.jsx(R, { type: "button", variant: "secondary", size: "sm", children: "Close" }) }) })] });
}
function It({ className: t }) {
  const a = D({}), { systemTheme: n, theme: o, setTheme: s, defaultTheme: r, primaryColor: i, setPrimaryColor: d, defaultPrimaryColor: h } = Fe(), u = z((c) => c.recentPages);
  return e.jsxs(ie, { children: [e.jsxs(le, { className: `rounded-none border-x-0 border-t-0 ${t ?? ""}`, children: [e.jsxs(P, { children: [e.jsx(b, { children: "Go" }), e.jsxs(T, { children: [e.jsx(S, { onClick: () => a({ to: "/" }), children: " Home " }), e.jsx(S, { onClick: () => a({ to: "/config/llm" }), children: " Config " })] })] }), e.jsxs(P, { children: [e.jsx(b, { children: "History" }), e.jsx(T, { children: u.map((c) => e.jsx(S, { onClick: () => a({ to: c }), children: c }, c)) })] }), e.jsxs(P, { children: [e.jsx(b, { children: "View" }), e.jsxs(T, { children: [e.jsxs(N, { children: [e.jsx(w, { children: "Theme" }), e.jsx(L, { children: Object.entries(He).map(([c, p]) => e.jsxs(N, { children: [e.jsx(w, { children: c }), e.jsx(L, { children: e.jsx($, { value: i, children: p.map((l) => e.jsxs(I, { value: l, onClick: () => d == null ? void 0 : d(l), children: [l.charAt(0).toUpperCase() + l.slice(1), h === l ? " (default)" : ""] }, l)) }) })] }, c)) })] }), e.jsxs(N, { children: [e.jsx(w, { children: "Theme Mode" }), e.jsxs(L, { children: [e.jsxs($, { value: o, children: [e.jsxs(I, { value: "light", onClick: () => s("light"), children: ["Light", r === "light" ? " (default)" : ""] }), e.jsxs(I, { value: "dark", onClick: () => s("dark"), children: ["Dark", r === "dark" ? " (default)" : ""] })] }), e.jsx(ce, {}), e.jsxs(ue, { checked: o === "system", onClick: () => s("system"), children: ["System (", n, ")", r === "system" ? " (default)" : ""] })] })] })] })] })] }), e.jsx(Lt, {})] });
}
function aa() {
  const t = J(), a = z((i) => i.addPage), [n, o] = x.useState(false), [s, r] = x.useState(false);
  return x.useEffect(() => {
    a(t.pathname);
  }, [t.pathname, a]), x.useEffect(() => {
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
        await i() > wt && (o(true), y.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005", { duration: 1e4 })), r(true);
      } catch (h) {
        o(true), r(true), y.error(String(h), { duration: 1e4 }), y.error(String(h == null ? void 0 : h.message), { duration: 1e4 }), y.error("[3]\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005", { duration: 1e4 });
      }
    })();
  }, []), s && !n ? e.jsx(oe, { children: e.jsxs("div", { className: "flex flex-col gap-0 h-screen print:h-auto", children: [e.jsx(It, { className: "shrink-0 grow-0 print:hidden" }), e.jsx("div", { className: "flex-1 overflow-auto", children: e.jsx(M, {}) })] }) }) : s ? e.jsx("div", { className: "flex items-center justify-center h-screen", children: e.jsx("div", { className: "text-center", children: e.jsx("h1", { className: "text-2xl font-bold", children: "\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005" }) }) }) : e.jsx("div", { className: "flex items-center justify-center h-screen", children: e.jsx("div", { className: "text-center", children: e.jsx("h1", { className: "text-2xl font-bold", children: "\u6B63\u5728\u52A0\u8F7D..." }) }) });
}
export {
  aa as D,
  ta as _,
  Zt as c,
  ea as g
};
