import { r as x, j as e, R as Ee, t as g } from "./react-1W-rR8FQ.js";
import { Q as xe, a as pe, H as ke, O as ge, c as Ge, b as fe, l as je, d as De, e as Ae, R as Oe, u as Me, f as ve, g as Fe } from "./@tanstack-DKuuEdLe.js";
import { T as Ue, a as ze, B as N, C as K, b as X, c as W, d as ye, e as Y, L as y, I as R, f as S, g as Ve, h as Be, i as k, j as T, k as He, l as b, D as Ne, m as Re, n as Ce, o as Se, p as _e, q as Ke, r as Xe, s as se, t as ae, u as be, S as We, v as Ye, w as qe, x as Je, y as P, z as re, A as Qe, E as Ze, F as et, G as tt, H as st, M as at, J as G, K as D, N as A, O, P as M, Q as F, R as U, U as ne, V as z, W as rt, X as nt, Y as ot } from "./app-components-CsAfwMCw.js";
import { R as lt, a as it, b as ct, c as dt, d as ut, e as mt, f as ht, g as xt, h as pt, i as gt, j as ft, k as jt, l as vt, m as yt, n as Nt, o as Rt, p as Ct, q as St, r as _t, s as bt, t as wt, u as Tt, v as Pt, w as Lt, x as It, y as $t, z as Et, A as kt } from "./app-route-for-_layout-game-Bu10_d0_.js";
import { D as Gt } from "./vendor-CsGpsoRf.js";
import { n as Dt } from "./id-OxPLOBIU.js";
import { A as At, K as Ot, S as Mt, a as H, L as Ft, R as I, b as Ut, P as zt, U as Vt, T as Bt, C as Ht, c as Kt } from "./icons-1N0m32Tb.js";
import { u as we } from "./app-lib-BIt54Jc6.js";
import { u as Xt, p as Wt } from "./app-hooks-D4wnnCdG.js";
import "./index-zC5F17iY.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-BEWXHaIH.js";
import "./app-libs-for-custom-theme-BHLM3087.js";
import "./components-and-styling-lnR2ABT4.js";
import "./gsap-DDlvirwQ.js";
import "./app-libs-for-silly-tavern-_0UvqmZ2.js";
import "./zod-grrOrvCS.js";
import "./future-lib-llm-ui-react-BOJj2ddx.js";
import "./es-toolkit-CstbrnlE.js";
import "./@tailwind-COJ8Fh6m.js";
(function() {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) o(a);
  new MutationObserver((a) => {
    for (const l of a) if (l.type === "childList") for (const c of l.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && o(c);
  }).observe(document, { childList: true, subtree: true });
  function n(a) {
    const l = {};
    return a.integrity && (l.integrity = a.integrity), a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? l.credentials = "include" : a.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l;
  }
  function o(a) {
    if (a.ep) return;
    a.ep = true;
    const l = n(a);
    fetch(a.href, l);
  }
})();
var Ta = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pa(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Yt() {
  const [t] = x.useState(() => new xe({ defaultOptions: { queries: { staleTime: 3e5, retry: 1 } } }));
  return e.jsxs(pe, { client: t, children: [e.jsx(ke, {}), e.jsxs(Ue, { defaultTheme: "dark", storageKey: "allinone-webapp-ui-theme", children: [e.jsx(ge, {}), e.jsx(ze, { expand: true, visibleToasts: 6 })] })] });
}
const $ = Ge({ component: Yt }), qt = "modulepreload", Jt = function(t) {
  return "/" + t;
}, oe = {}, Te = function(s, n, o) {
  let a = Promise.resolve();
  if (n && n.length > 0) {
    let h = function(u) {
      return Promise.all(u.map((m) => Promise.resolve(m).then((i) => ({ status: "fulfilled", value: i }), (i) => ({ status: "rejected", reason: i }))));
    };
    document.getElementsByTagName("link");
    const c = document.querySelector("meta[property=csp-nonce]"), d = (c == null ? void 0 : c.nonce) || (c == null ? void 0 : c.getAttribute("nonce"));
    a = h(n.map((u) => {
      if (u = Jt(u), u in oe) return;
      oe[u] = true;
      const m = u.endsWith(".css"), i = m ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${u}"]${i}`)) return;
      const r = document.createElement("link");
      if (r.rel = m ? "stylesheet" : qt, m || (r.as = "script"), r.crossOrigin = "", r.href = u, d && r.setAttribute("nonce", d), document.head.appendChild(r), m) return new Promise((p, f) => {
        r.addEventListener("load", p), r.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${u}`)));
      });
    }));
  }
  function l(c) {
    const d = new Event("vite:preloadError", { cancelable: true });
    if (d.payload = c, window.dispatchEvent(d), !d.defaultPrevented) throw c;
  }
  return a.then((c) => {
    for (const d of c || []) d.status === "rejected" && l(d.reason);
    return s().catch(l);
  });
}, Qt = () => Te(() => Promise.resolve().then(() => Bs), void 0), Zt = fe("/invitation")({ component: je(Qt, "component") }), es = () => Te(() => Promise.resolve().then(() => Ys), void 0), ts = fe("/admin")({ component: je(es, "component") }), ss = Zt.update({ id: "/invitation", path: "/invitation", getParentRoute: () => $ }), as = ts.update({ id: "/admin", path: "/admin", getParentRoute: () => $ }), Pe = lt.update({ id: "/_layout-game", getParentRoute: () => $ }), v = it.update({ id: "/_silly-tavern", getParentRoute: () => Pe }), rs = ct.update({ id: "/", path: "/", getParentRoute: () => v }), Le = dt.update({ id: "/session", path: "/session", getParentRoute: () => v }), w = ut.update({ id: "/plaza", path: "/plaza", getParentRoute: () => v }), ns = mt.update({ id: "/create", path: "/create", getParentRoute: () => v }), L = ht.update({ id: "/config", path: "/config", getParentRoute: () => v }), os = xt.update({ id: "/", path: "/", getParentRoute: () => w }), ls = pt.update({ id: "/", path: "/", getParentRoute: () => L }), is = gt.update({ id: "/$sessionId", path: "/$sessionId", getParentRoute: () => Le }), cs = ft.update({ id: "/small-town", path: "/small-town", getParentRoute: () => w }), ds = jt.update({ id: "/group-chat", path: "/group-chat", getParentRoute: () => w }), us = vt.update({ id: "/dnd", path: "/dnd", getParentRoute: () => w }), ms = yt.update({ id: "/characters", path: "/characters", getParentRoute: () => w }), hs = Nt.update({ id: "/challenges", path: "/challenges", getParentRoute: () => w }), xs = Rt.update({ id: "/create_/small-town", path: "/create/small-town", getParentRoute: () => v }), ps = Ct.update({ id: "/create_/group-chat", path: "/create/group-chat", getParentRoute: () => v }), gs = St.update({ id: "/create_/dnd", path: "/create/dnd", getParentRoute: () => v }), fs = _t.update({ id: "/create_/chat-character", path: "/create/chat-character", getParentRoute: () => v }), js = bt.update({ id: "/create_/chat-challenge", path: "/create/chat-challenge", getParentRoute: () => v }), vs = wt.update({ id: "/create_/character", path: "/create/character", getParentRoute: () => v }), ys = Tt.update({ id: "/create_/challenge", path: "/create/challenge", getParentRoute: () => v }), Ns = Pt.update({ id: "/settings", path: "/settings", getParentRoute: () => L }), Rs = Lt.update({ id: "/overview", path: "/overview", getParentRoute: () => L }), Cs = It.update({ id: "/llm", path: "/llm", getParentRoute: () => L }), Ss = $t.update({ id: "/characters_/$characterId", path: "/characters/$characterId", getParentRoute: () => v }), _s = Et.update({ id: "/challenges_/$challengeId", path: "/challenges/$challengeId", getParentRoute: () => v }), bs = kt.update({ id: "/characters_/$characterId_/edit", path: "/characters/$characterId/edit", getParentRoute: () => v }), ws = { LayoutGameSillyTavernConfigLlmRoute: Cs, LayoutGameSillyTavernConfigOverviewRoute: Rs, LayoutGameSillyTavernConfigSettingsRoute: Ns, LayoutGameSillyTavernConfigIndexRoute: ls }, Ts = L._addFileChildren(ws), Ps = { LayoutGameSillyTavernPlazaChallengesRoute: hs, LayoutGameSillyTavernPlazaCharactersRoute: ms, LayoutGameSillyTavernPlazaDndRoute: us, LayoutGameSillyTavernPlazaGroupChatRoute: ds, LayoutGameSillyTavernPlazaSmallTownRoute: cs, LayoutGameSillyTavernPlazaIndexRoute: os }, Ls = w._addFileChildren(Ps), Is = { LayoutGameSillyTavernSessionSessionIdRoute: is }, $s = Le._addFileChildren(Is), Es = { LayoutGameSillyTavernConfigRouteRoute: Ts, LayoutGameSillyTavernCreateRoute: ns, LayoutGameSillyTavernPlazaRoute: Ls, LayoutGameSillyTavernSessionRoute: $s, LayoutGameSillyTavernIndexRoute: rs, LayoutGameSillyTavernChallengesChallengeIdRoute: _s, LayoutGameSillyTavernCharactersCharacterIdRoute: Ss, LayoutGameSillyTavernCreateChallengeRoute: ys, LayoutGameSillyTavernCreateCharacterRoute: vs, LayoutGameSillyTavernCreateChatChallengeRoute: js, LayoutGameSillyTavernCreateChatCharacterRoute: fs, LayoutGameSillyTavernCreateDndRoute: gs, LayoutGameSillyTavernCreateGroupChatRoute: ps, LayoutGameSillyTavernCreateSmallTownRoute: xs, LayoutGameSillyTavernCharactersCharacterIdEditRoute: bs }, ks = v._addFileChildren(Es), Gs = { LayoutGameSillyTavernRouteRoute: ks }, Ds = Pe._addFileChildren(Gs), As = { LayoutGameRouteRoute: Ds, AdminRoute: as, InvitationRoute: ss }, Os = $._addFileChildren(As)._addFileTypes();
Gt({ interval: 2e3, tkName: "dev", md5: "43f1516c98cf02ba06d7406c37ad52f0", url: "https://nexworld.wiki/", timeOutUrl: "https://nexworld.wiki/" });
const Ms = De(), Fs = Ae({ routeTree: Os, history: Ms, defaultPreload: "intent", scrollRestoration: true }), Us = new xe(), V = document.getElementById("app");
V && !V.innerHTML && Ee.createRoot(V).render(e.jsx(pe, { client: Us, children: e.jsx(Oe, { router: Fs }) }));
const le = "__NexTavern_UUID__";
function zs() {
  if (typeof window > "u") return "";
  let t = localStorage.getItem(le);
  return t || (t = Dt(), localStorage.setItem(le, t)), t;
}
const ie = "__NexTavern_Auth_API_URL__", ce = "__NexTavern_Auth_Code_Persistent__", de = "__NexTavern_Auth_Verified__", ue = "__NexTavern_Auth_Permissions__";
function Vs() {
  var _a, _b;
  const [t, s] = x.useState(false), n = zs(), [o, a] = x.useState(""), [l, c] = x.useState(""), [d, h] = x.useState(null);
  x.useEffect(() => {
    if (a(localStorage.getItem(ie) || ""), c(localStorage.getItem(ce) || ""), sessionStorage.getItem(de) === "true") try {
      const r = JSON.parse(sessionStorage.getItem(ue) || "{}");
      h({ verified: true, features: r.features || [] });
    } catch {
    }
  }, []);
  const u = (r) => {
    a(r), localStorage.setItem(ie, r);
  }, m = (r) => {
    c(r), localStorage.setItem(ce, r);
  }, i = async () => {
    if (!o.trim() || !l.trim()) {
      g.error("\u8BF7\u586B\u5199\u5B8C\u6574\u914D\u7F6E");
      return;
    }
    s(true), h(null);
    const r = o.trim().replace(/\/$/, ""), p = l.trim();
    try {
      const f = await fetch(`${r}/verify`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: p, uuid: n }) }), j = await f.json();
      if (!f.ok) throw new Error(j.error || "\u9A8C\u8BC1\u5931\u8D25");
      if (j.valid) {
        g.success("\u6821\u9A8C\u6210\u529F");
        const C = j.permissions || {};
        sessionStorage.setItem(de, "true"), sessionStorage.setItem(ue, JSON.stringify(C)), h({ verified: true, features: C.features || [] });
      } else throw new Error("\u9080\u8BF7\u7801\u65E0\u6548");
    } catch (f) {
      h({ verified: false, error: f.message }), g.error(f.message);
    } finally {
      s(false);
    }
  };
  return e.jsx("div", { className: "min-h-screen bg-muted/20 flex flex-col items-center p-8", children: e.jsxs("div", { className: "w-full max-w-md space-y-6", children: [e.jsxs(N, { variant: "ghost", size: "sm", onClick: () => window.history.back(), className: "gap-2", children: [e.jsx(At, { className: "w-4 h-4" }), "\u8FD4\u56DE"] }), e.jsxs(K, { className: "shadow-lg", children: [e.jsxs(X, { children: [e.jsxs(W, { className: "text-2xl font-bold flex items-center gap-2", children: [e.jsx(Ot, { className: "w-6 h-6 text-primary" }), "\u9080\u8BF7\u7801\u7BA1\u7406"] }), e.jsx(ye, { children: "\u914D\u7F6E\u60A8\u7684\u6388\u6743\u4FE1\u606F\u4EE5\u89E3\u9501\u5185\u6D4B\u529F\u80FD" })] }), e.jsxs(Y, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(y, { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [e.jsx(Mt, { className: "w-3 h-3" }), "\u8BBE\u5907 UUID (\u4E0D\u53EF\u4FEE\u6539)"] }), e.jsx(R, { value: n, disabled: true, className: "bg-muted text-xs font-mono h-9" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(y, { htmlFor: "code", children: "\u9080\u8BF7\u7801" }), e.jsx(R, { id: "code", value: l, onChange: (r) => m(r.target.value), placeholder: "\u8F93\u5165\u9080\u8BF7\u7801 (\u4F8B\u5982: NEX-XXXX)", className: "h-10" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(y, { htmlFor: "apiUrl", children: "\u670D\u52A1\u5668\u5730\u5740" }), e.jsx(R, { id: "apiUrl", value: o, onChange: (r) => u(r.target.value), placeholder: "https://auth.example.workers.dev", className: "h-10" })] }), d && e.jsx("div", { className: `p-4 rounded-lg border transition-all ${d.verified ? "bg-primary/5 border-primary/20" : "bg-destructive/5 border-destructive/20"}`, children: d.verified ? e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "text-sm font-bold text-primary flex items-center gap-2", children: [e.jsx(H, { className: "w-4 h-4" }), "\u6821\u9A8C\u901A\u8FC7"] }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [(_a = d.features) == null ? void 0 : _a.map((r) => e.jsx(S, { variant: "secondary", className: "px-2 py-0.5", children: r }, r)), ((_b = d.features) == null ? void 0 : _b.length) === 0 && e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u57FA\u7840\u6743\u9650" })] })] }) : e.jsxs("div", { className: "text-sm text-destructive flex items-center gap-2 font-medium", children: [e.jsx(Ft, { className: "w-4 h-4" }), d.error || "\u9A8C\u8BC1\u5931\u8D25"] }) }), e.jsxs(N, { onClick: i, disabled: t, className: "w-full h-11 text-base font-medium gap-2", children: [t ? e.jsx(I, { className: "w-5 h-5 animate-spin" }) : e.jsx(H, { className: "w-5 h-5" }), "\u7ACB\u5373\u6821\u9A8C\u6743\u9650"] })] })] })] }) });
}
const Bs = Object.freeze(Object.defineProperty({ __proto__: null, component: Vs }, Symbol.toStringTag, { value: "Module" })), B = "nex_tavern_admin_token", me = "__NexTavern_Auth_API_URL__";
function Hs() {
  const [t, s] = x.useState(null), [n, o] = x.useState("");
  x.useEffect(() => {
    const c = sessionStorage.getItem(B), d = localStorage.getItem(me);
    c && s(c), d && o(d);
  }, []);
  const a = (c, d) => {
    s(c), o(d), sessionStorage.setItem(B, c), localStorage.setItem(me, d);
  }, l = () => {
    s(null), sessionStorage.removeItem(B);
  };
  return t ? e.jsx("div", { className: "min-h-screen bg-muted/20 p-8", children: e.jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "\u7BA1\u7406\u63A7\u5236\u53F0" }), e.jsx("p", { className: "text-muted-foreground", children: "NexTavern \u9080\u8BF7\u7801\u7BA1\u7406\u7CFB\u7EDF" })] }), e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full", children: n }), e.jsxs(N, { variant: "outline", onClick: l, className: "gap-2", children: [e.jsx(Ut, { className: "w-4 h-4" }), "\u9000\u51FA\u767B\u5F55"] })] })] }), e.jsx(Xs, { apiUrl: n, token: t, onLogout: l })] }) }) : e.jsx(Ks, { onLogin: a, defaultApiUrl: n });
}
function Ks({ onLogin: t, defaultApiUrl: s }) {
  const [n, o] = x.useState(s), [a, l] = x.useState(""), [c, d] = x.useState(""), [h, u] = x.useState(false), m = async (i) => {
    if (i.preventDefault(), !n || !a || !c) {
      g.error("\u8BF7\u586B\u5199\u6240\u6709\u5B57\u6BB5");
      return;
    }
    const r = n.replace(/\/$/, "");
    u(true);
    try {
      const p = await fetch(`${r}/admin/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: a, password: c }) }), f = await p.json();
      if (!p.ok) throw new Error(f.error || "\u767B\u5F55\u5931\u8D25");
      g.success("\u767B\u5F55\u6210\u529F"), t(f.token, r);
    } catch (p) {
      g.error(p instanceof Error ? p.message : "\u767B\u5F55\u51FA\u9519");
    } finally {
      u(false);
    }
  };
  return e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-muted/20 p-4", children: e.jsxs(K, { className: "w-full max-w-md", children: [e.jsxs(X, { className: "space-y-1", children: [e.jsxs(W, { className: "text-2xl font-bold flex items-center gap-2", children: [e.jsx(H, { className: "w-6 h-6 text-primary" }), "\u7BA1\u7406\u5458\u767B\u5F55"] }), e.jsx(ye, { children: "\u8BF7\u8F93\u5165\u7BA1\u7406\u5458\u51ED\u8BC1\u4EE5\u8BBF\u95EE\u63A7\u5236\u53F0" })] }), e.jsx(Y, { children: e.jsxs("form", { onSubmit: m, className: "space-y-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(y, { htmlFor: "url", children: "API \u5730\u5740" }), e.jsx(R, { id: "url", placeholder: "https://auth.example.workers.dev", value: n, onChange: (i) => o(i.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(y, { htmlFor: "username", children: "\u7528\u6237\u540D" }), e.jsx(R, { id: "username", value: a, onChange: (i) => l(i.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(y, { htmlFor: "password", children: "\u5BC6\u7801" }), e.jsx(R, { id: "password", type: "password", value: c, onChange: (i) => d(i.target.value) })] }), e.jsx(N, { type: "submit", className: "w-full", disabled: h, children: h ? "\u767B\u5F55\u4E2D..." : "\u767B\u5F55" })] }) })] }) });
}
function Xs({ apiUrl: t, token: s, onLogout: n }) {
  const [o, a] = x.useState([]), [l, c] = x.useState(true), [d, h] = x.useState(false), u = async () => {
    c(true);
    try {
      const i = await fetch(`${t}/admin/api/codes`, { headers: { Authorization: `Bearer ${s}` } });
      if (i.status === 401) {
        n();
        return;
      }
      const r = await i.json();
      r.success ? a(r.codes) : g.error(r.error || "\u83B7\u53D6\u6570\u636E\u5931\u8D25");
    } catch {
      g.error("\u7F51\u7EDC\u9519\u8BEF");
    } finally {
      c(false);
    }
  };
  x.useEffect(() => {
    u();
  }, []);
  const m = async (i) => {
    if (confirm("\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u9080\u8BF7\u7801\u5417\uFF1F\u76F8\u5173\u7684\u6240\u6709\u8BBE\u5907\u6388\u6743\u4E5F\u5C06\u5931\u6548\u3002")) try {
      (await fetch(`${t}/admin/api/codes/${i}`, { method: "DELETE", headers: { Authorization: `Bearer ${s}` } })).ok ? (g.success("\u5220\u9664\u6210\u529F"), u()) : g.error("\u5220\u9664\u5931\u8D25");
    } catch {
      g.error("\u64CD\u4F5C\u51FA\u9519");
    }
  };
  return e.jsxs("div", { className: "space-y-6", children: [e.jsx("div", { className: "flex justify-end", children: e.jsxs(N, { onClick: () => h(true), className: "gap-2", children: [e.jsx(zt, { className: "w-4 h-4" }), "\u521B\u5EFA\u9080\u8BF7\u7801"] }) }), e.jsxs(K, { children: [e.jsx(X, { children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx(W, { children: "\u9080\u8BF7\u7801\u5217\u8868" }), e.jsx(N, { variant: "ghost", size: "icon", onClick: u, disabled: l, children: e.jsx(I, { className: `w-4 h-4 ${l ? "animate-spin" : ""}` }) })] }) }), e.jsx(Y, { children: e.jsxs(Ve, { children: [e.jsx(Be, { children: e.jsxs(k, { children: [e.jsx(T, { children: "\u9080\u8BF7\u7801" }), e.jsx(T, { children: "\u5907\u6CE8" }), e.jsx(T, { children: "\u4F7F\u7528\u60C5\u51B5" }), e.jsx(T, { children: "\u6743\u9650" }), e.jsx(T, { children: "\u8FC7\u671F\u65F6\u95F4" }), e.jsx(T, { className: "text-right", children: "\u64CD\u4F5C" })] }) }), e.jsx(He, { children: o.length === 0 ? e.jsx(k, { children: e.jsx(b, { colSpan: 6, className: "text-center py-8 text-muted-foreground", children: "\u6682\u65E0\u6570\u636E" }) }) : o.map((i) => {
    var _a, _b, _c;
    return e.jsxs(k, { children: [e.jsx(b, { className: "font-mono font-medium", children: i.code }), e.jsx(b, { children: i.memo }), e.jsx(b, { children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Vt, { className: "w-3 h-3 text-muted-foreground" }), e.jsxs("span", { children: [i.usage_count, " / ", i.max_usages] })] }) }), e.jsx(b, { children: e.jsxs("div", { className: "flex gap-1 flex-wrap", children: [((_a = i.permissions) == null ? void 0 : _a.isAdmin) && e.jsx(S, { variant: "destructive", className: "text-[10px]", children: "Admin" }), (_c = (_b = i.permissions) == null ? void 0 : _b.features) == null ? void 0 : _c.map((r) => e.jsx(S, { variant: "secondary", className: "text-[10px]", children: r }, r)), (!i.permissions || Object.keys(i.permissions).length === 0 || !i.permissions.isAdmin && (!i.permissions.features || i.permissions.features.length === 0)) && e.jsx(S, { variant: "outline", className: "text-[10px]", children: "No Access" })] }) }), e.jsx(b, { children: i.expires_at ? e.jsx("div", { className: `text-sm ${i.expires_at < Date.now() ? "text-destructive" : ""}`, children: new Date(i.expires_at).toLocaleDateString() }) : e.jsx("span", { className: "text-muted-foreground text-sm", children: "\u6C38\u4E45\u6709\u6548" }) }), e.jsx(b, { className: "text-right", children: e.jsx(N, { variant: "ghost", size: "icon", className: "text-muted-foreground hover:text-destructive", onClick: () => m(i.code), children: e.jsx(Bt, { className: "w-4 h-4" }) }) })] }, i.code);
  }) })] }) })] }), e.jsx(Ws, { open: d, onOpenChange: h, apiUrl: t, token: s, onSuccess: u })] });
}
function Ws({ open: t, onOpenChange: s, apiUrl: n, token: o, onSuccess: a }) {
  const [l, c] = x.useState("single"), [d, h] = x.useState({ code: "", memo: "", max_usages: 3, days_valid: "0", features: [] }), [u, m] = x.useState({ prefix: "NEX-", count: 10, memo: "", max_usages: 3, days_valid: "0", features: [] }), [i, r] = x.useState(false), p = () => {
    const j = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let C = "NEX-";
    for (let _ = 0; _ < 8; _++) C += j.charAt(Math.floor(Math.random() * j.length));
    h((_) => ({ ..._, code: C }));
  }, f = async (j) => {
    j.preventDefault(), r(true);
    try {
      let C;
      if (l === "single") C = { code: d.code, memo: d.memo, max_usages: Number(d.max_usages), days_valid: Number(d.days_valid) === 0 ? null : Number(d.days_valid), permissions: { features: d.features } };
      else {
        const J = Math.min(Math.max(1, u.count), 50), Q = [], Z = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        for (let E = 0; E < J; E++) {
          let ee = "";
          for (let te = 0; te < 6; te++) ee += Z.charAt(Math.floor(Math.random() * Z.length));
          Q.push({ code: `${u.prefix}${ee}`, memo: u.memo || `\u6279\u91CF\u751F\u6210 ${E + 1}/${J}`, max_usages: Number(u.max_usages), days_valid: Number(u.days_valid) === 0 ? null : Number(u.days_valid), permissions: { features: u.features } });
        }
        C = Q;
      }
      const _ = await fetch(`${n}/admin/api/codes`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${o}` }, body: JSON.stringify(C) }), q = await _.json();
      _.ok ? (g.success(l === "single" ? "\u9080\u8BF7\u7801\u521B\u5EFA\u6210\u529F" : `\u6210\u529F\u521B\u5EFA ${q.message}`), s(false), a(), h({ code: "", memo: "", max_usages: 3, days_valid: "0", features: [] }), m({ prefix: "NEX-", count: 10, memo: "", max_usages: 3, days_valid: "0", features: [] })) : g.error(q.error || "\u521B\u5EFA\u5931\u8D25");
    } catch {
      g.error("\u7F51\u7EDC\u9519\u8BEF");
    } finally {
      r(false);
    }
  };
  return e.jsx(Ne, { open: t, onOpenChange: s, children: e.jsxs(Re, { className: "sm:max-w-[500px]", children: [e.jsxs(Ce, { children: [e.jsx(Se, { children: "\u521B\u5EFA\u9080\u8BF7\u7801" }), e.jsx(_e, { children: "\u751F\u6210\u5355\u4E2A\u6216\u6279\u91CF\u751F\u6210\u9080\u8BF7\u7801\u3002" })] }), e.jsxs(Ke, { defaultValue: "single", value: l, onValueChange: c, children: [e.jsxs(Xe, { className: "grid w-full grid-cols-2", children: [e.jsx(se, { value: "single", children: "\u5355\u4E2A\u521B\u5EFA" }), e.jsx(se, { value: "bulk", children: "\u6279\u91CF\u751F\u6210" })] }), e.jsxs("form", { onSubmit: f, className: "py-4 space-y-4", children: [e.jsxs(ae, { value: "single", className: "space-y-4 mt-0", children: [e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(y, { htmlFor: "code", className: "text-right", children: "\u9080\u8BF7\u7801" }), e.jsxs("div", { className: "col-span-3 flex gap-2", children: [e.jsx(R, { id: "code", value: d.code, onChange: (j) => h({ ...d, code: j.target.value }), placeholder: "\u4F8B\u5982: NEX-8888", required: l === "single" }), e.jsx(N, { type: "button", variant: "secondary", size: "icon", onClick: p, title: "\u968F\u673A\u751F\u6210", children: e.jsx(I, { className: "w-4 h-4" }) })] })] }), e.jsx(he, { data: d, setData: h })] }), e.jsxs(ae, { value: "bulk", className: "space-y-4 mt-0", children: [e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(y, { htmlFor: "prefix", className: "text-right", children: "\u524D\u7F00" }), e.jsx(R, { id: "prefix", value: u.prefix, onChange: (j) => m({ ...u, prefix: j.target.value }), className: "col-span-3", placeholder: "\u4F8B\u5982: NEX-" })] }), e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(y, { htmlFor: "count", className: "text-right", children: "\u6570\u91CF" }), e.jsxs("div", { className: "col-span-3 flex items-center gap-2", children: [e.jsx(R, { id: "count", type: "number", min: "1", max: "50", value: u.count, onChange: (j) => m({ ...u, count: Number(j.target.value) }) }), e.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: "\u6700\u591A 50 \u4E2A" })] })] }), e.jsx(he, { data: u, setData: m })] }), e.jsx(be, { children: e.jsxs(N, { type: "submit", disabled: i, children: [i && e.jsx(I, { className: "mr-2 h-4 w-4 animate-spin" }), l === "single" ? "\u521B\u5EFA" : "\u6279\u91CF\u751F\u6210"] }) })] })] })] }) });
}
function he({ data: t, setData: s }) {
  const n = (o) => {
    const a = t.features || [];
    a.includes(o) ? s({ ...t, features: a.filter((l) => l !== o) }) : s({ ...t, features: [...a, o] });
  };
  return e.jsxs(e.Fragment, { children: [e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(y, { className: "text-right", children: "\u5907\u6CE8" }), e.jsx(R, { value: t.memo, onChange: (o) => s({ ...t, memo: o.target.value }), className: "col-span-3", placeholder: "\u4F8B\u5982: \u6D3B\u52A8\u5206\u53D1" })] }), e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(y, { className: "text-right", children: "\u6700\u5927\u8BBE\u5907\u6570" }), e.jsx(R, { type: "number", min: "1", value: t.max_usages, onChange: (o) => s({ ...t, max_usages: Number(o.target.value) }), className: "col-span-3" })] }), e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(y, { className: "text-right", children: "\u6709\u6548\u671F" }), e.jsxs(We, { value: String(t.days_valid), onValueChange: (o) => s({ ...t, days_valid: o }), children: [e.jsx(Ye, { className: "col-span-3", children: e.jsx(qe, { placeholder: "\u9009\u62E9\u6709\u6548\u671F" }) }), e.jsxs(Je, { children: [e.jsx(P, { value: "0", children: "\u6C38\u4E45\u6709\u6548" }), e.jsx(P, { value: "1", children: "1 \u5929" }), e.jsx(P, { value: "7", children: "7 \u5929" }), e.jsx(P, { value: "30", children: "30 \u5929" }), e.jsx(P, { value: "90", children: "90 \u5929" })] })] })] }), e.jsxs("div", { className: "grid grid-cols-4 items-start gap-4", children: [e.jsx(y, { className: "text-right pt-2", children: "\u529F\u80FD\u6743\u9650" }), e.jsxs("div", { className: "col-span-3 space-y-2 border rounded-md p-3", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(re, { id: "feat-small-town", checked: (t.features || []).includes("small-town"), onCheckedChange: () => n("small-town") }), e.jsx(y, { htmlFor: "feat-small-town", className: "cursor-pointer", children: "\u5C0F\u9547\u6A21\u5F0F (Small Town)" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(re, { id: "feat-dnd", checked: (t.features || []).includes("dnd"), onCheckedChange: () => n("dnd") }), e.jsx(y, { htmlFor: "feat-dnd", className: "cursor-pointer", children: "DnD \u8DD1\u56E2 (D&D)" })] })] })] })] });
}
const Ys = Object.freeze(Object.defineProperty({ __proto__: null, component: Hs }, Symbol.toStringTag, { value: "Module" }));
function qs(t) {
  const s = [];
  return t.split("/").forEach((o, a) => {
    if (o.startsWith("$")) {
      const l = o.slice(1), c = Js(l);
      s.push({ name: l, position: a, exampleValue: c });
    }
  }), s;
}
function Js(t) {
  return { postId: "123", userId: "456", id: "1", slug: "example-slug", category: "tech", tag: "javascript" }[t] || "example";
}
function Qs(t, s) {
  var _a, _b;
  const n = s.fullPath || s.path || t, a = n.split("/").filter(Boolean).length, l = qs(n);
  return { id: t, path: s.path || "", fullPath: n, level: a, isRoot: n === "/", children: [], params: l, metadata: { hasComponent: !!((_a = s.options) == null ? void 0 : _a.component), isIndex: n === "/" || n.endsWith("/"), parentId: (_b = s.parentRoute) == null ? void 0 : _b.id } };
}
function Zs(t) {
  const s = [];
  for (const n of t.values()) if (n.isRoot || !n.metadata.parentId || n.metadata.parentId === "__root__") s.push(n);
  else {
    const o = t.get(n.metadata.parentId);
    o ? o.children.push(n) : s.push(n);
  }
  return s;
}
function Ie(t) {
  t.sort((s, n) => s.isRoot ? -1 : n.isRoot ? 1 : s.fullPath.localeCompare(n.fullPath));
  for (const s of t) s.children.length > 0 && Ie(s.children);
}
function ea(t) {
  const s = t.routesById || {}, n = /* @__PURE__ */ new Map();
  for (const [a, l] of Object.entries(s)) {
    if (a === "__root__") continue;
    const d = Qs(a, l);
    n.set(a, d);
  }
  const o = Zs(n);
  return Ie(o), o;
}
function ta({ params: t, paramValues: s, onParamChange: n, onNavigate: o }) {
  return e.jsxs("div", { className: "space-y-3", children: [t.map((a) => e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "text-xs font-medium text-gray-600", children: [a.name, e.jsxs("span", { className: "text-gray-400 ml-2", children: ["(\u793A\u4F8B: ", e.jsx("code", { className: "bg-blue-50 px-1 rounded", children: a.exampleValue }), ")"] })] }), e.jsx(R, { type: "text", value: s[a.name], onChange: (l) => n(a.name, l.target.value), placeholder: `\u8F93\u5165 ${a.name}`, className: "h-8 text-sm" })] }, a.name)), e.jsx("div", { className: "flex gap-1", children: e.jsx(N, { variant: "outline", size: "sm", onClick: () => o(false), className: "", children: "\u524D\u5F80" }) })] });
}
function $e({ route: t, depth: s = 0 }) {
  const n = ve(), o = s * 32, [a, l] = x.useState(() => {
    const r = {};
    for (const p of t.params) r[p.name] = p.exampleValue;
    return r;
  }), [c, d] = x.useState(true), h = (r = false) => {
    let p = t.fullPath;
    if (t.params.length > 0) for (const f of t.params) {
      const j = r ? f.exampleValue : a[f.name];
      p = p.replace(`$${f.name}`, j || f.exampleValue);
    }
    n({ to: p });
  }, u = (r, p) => {
    l((f) => ({ ...f, [r]: p }));
  }, m = t.children.length > 0, i = s > 0;
  return e.jsxs("div", { className: "relative", children: [i && e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-200 to-transparent", style: { left: `${o - 16}px` } }), e.jsx("div", { className: "absolute top-6 w-4 h-0.5 bg-indigo-200", style: { left: `${o - 16}px` } })] }), e.jsxs("div", { style: { marginLeft: `${o}px` }, className: "", children: [e.jsxs(Qe, { variant: "outline", size: "sm", className: "bg-background", children: [e.jsx(Ze, { children: e.jsxs("div", { className: "w-full flex gap-2 items-center", children: [m && e.jsx(N, { variant: "ghost", size: "sm", onClick: () => d(!c), children: c ? e.jsx(Ht, { className: "h-4 w-4" }) : e.jsx(Kt, { className: "h-4 w-4" }) }), e.jsx(et, { children: e.jsx("div", { className: "font-semibold", children: t.fullPath }) }), e.jsxs("div", { className: "inline-flex gap-2 flex-wrap", children: [t.isRoot && e.jsx(S, { variant: "default", children: "root" }), t.params.length > 0 && e.jsx(S, { variant: "destructive", children: "\u52A8\u6001" }), t.metadata.isIndex && !t.isRoot && e.jsx(S, { variant: "secondary", children: "index" }), m && e.jsx(S, { className: "bg-blue-500 text-white dark:bg-blue-600", children: t.children.length })] }), t.params.length === 0 && e.jsx(N, { size: "sm", variant: "ghost", onClick: () => h(false), children: "\u2192" })] }) }), t.params.length === 0 && e.jsx(tt, { children: e.jsx(N, { size: "sm", variant: "outline", onClick: () => h(false), children: "\u2192" }) }), t.params.length > 0 && e.jsx(ta, { params: t.params, paramValues: a, onParamChange: u, onNavigate: h })] }), c && t.children.length > 0 && e.jsx("div", { className: "py-1", children: e.jsx("div", { className: "space-y-1", children: t.children.map((r) => e.jsx($e, { route: r, depth: s + 1 }, r.id)) }) })] })] });
}
function sa() {
  const t = Me(), s = x.useMemo(() => ea(t), [t]), n = x.useMemo(() => {
    let o = 0;
    const a = (l) => {
      for (const c of l) o++, c.children.length > 0 && a(c.children);
    };
    return a(s), o;
  }, [s]);
  return e.jsxs("div", { className: "space-y-2", children: [e.jsx("div", { className: "", children: e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u5171 ", n, " \u4E2A\u8DEF\u7531\u3002"] }) }), s.length > 0 && e.jsx("div", { className: "space-y-2", children: s.map((o) => e.jsx($e, { route: o }, o.id)) }), s.length === 0 && e.jsx("div", { className: "text-center py-12 text-gray-500", children: e.jsx("p", { children: "\u672A\u627E\u5230\u4EFB\u4F55\u8DEF\u7531" }) })] });
}
const aa = /* @__PURE__ */ new Date("2026-05-01");
function ra() {
  return e.jsxs(Re, { className: "sm:max-w-xl p-0 space-y-0 gap-0", children: [e.jsxs(Ce, { className: "p-3 pb-2", children: [e.jsx(Se, { children: "\u6240\u6709\u9875\u9762" }), e.jsx(_e, { children: "\u53EF\u8BBF\u95EE\u5E94\u7528\u4E2D\u6240\u6709\u5DF2\u6CE8\u518C\u7684\u8DEF\u7531\u3002" })] }), e.jsx("div", { className: "p-3 max-h-[60vh] overflow-auto border-y", children: e.jsx(sa, {}) }), e.jsx(be, { className: "sm:justify-start p-3 pt-2", children: e.jsx(ot, { asChild: true, children: e.jsx(N, { type: "button", variant: "secondary", size: "sm", children: "Close" }) }) })] });
}
function na({ className: t }) {
  const s = ve({}), { systemTheme: n, theme: o, setTheme: a, defaultTheme: l, primaryColor: c, setPrimaryColor: d, defaultPrimaryColor: h } = Xt(), u = we((m) => m.recentPages);
  return e.jsxs(Ne, { children: [e.jsxs(at, { className: `rounded-none border-x-0 border-t-0 ${t ?? ""}`, children: [e.jsxs(G, { children: [e.jsx(D, { children: "Go" }), e.jsxs(A, { children: [e.jsx(O, { onClick: () => s({ to: "/" }), children: " Home " }), e.jsx(O, { onClick: () => s({ to: "/config/llm" }), children: " Config " })] })] }), e.jsxs(G, { children: [e.jsx(D, { children: "History" }), e.jsx(A, { children: u.map((m) => e.jsx(O, { onClick: () => s({ to: m }), children: m }, m)) })] }), e.jsxs(G, { children: [e.jsx(D, { children: "View" }), e.jsxs(A, { children: [e.jsxs(M, { children: [e.jsx(F, { children: "Theme" }), e.jsx(U, { children: Object.entries(Wt).map(([m, i]) => e.jsxs(M, { children: [e.jsx(F, { children: m }), e.jsx(U, { children: e.jsx(ne, { value: c, children: i.map((r) => e.jsxs(z, { value: r, onClick: () => d == null ? void 0 : d(r), children: [r.charAt(0).toUpperCase() + r.slice(1), h === r ? " (default)" : ""] }, r)) }) })] }, m)) })] }), e.jsxs(M, { children: [e.jsx(F, { children: "Theme Mode" }), e.jsxs(U, { children: [e.jsxs(ne, { value: o, children: [e.jsxs(z, { value: "light", onClick: () => a("light"), children: ["Light", l === "light" ? " (default)" : ""] }), e.jsxs(z, { value: "dark", onClick: () => a("dark"), children: ["Dark", l === "dark" ? " (default)" : ""] })] }), e.jsx(rt, {}), e.jsxs(nt, { checked: o === "system", onClick: () => a("system"), children: ["System (", n, ")", l === "system" ? " (default)" : ""] })] })] })] })] })] }), e.jsx(ra, {})] });
}
function La() {
  const t = Fe(), s = we((c) => c.addPage), [n, o] = x.useState(false), [a, l] = x.useState(false);
  return x.useEffect(() => {
    s(t.pathname);
  }, [t.pathname, s]), x.useEffect(() => {
    const c = async () => {
      try {
        const u = await (await fetch("https://time.akamai.com/")).text(), m = Number.parseFloat(u);
        if (Number.isNaN(m)) throw g.error("timestamp is NaN", { duration: 1e4 }), new Error("[2]\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005");
        return new Date(m * 1e3);
      } catch {
        const u = await (await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC")).json();
        if (u.datetime) return new Date(u.datetime);
        throw g.error("datetime not found in response", { duration: 1e4 }), new Error("[1]\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005");
      }
    };
    (async () => {
      try {
        await c() > aa && (o(true), g.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005", { duration: 1e4 })), l(true);
      } catch (h) {
        o(true), l(true), g.error(String(h), { duration: 1e4 }), g.error(String(h == null ? void 0 : h.message), { duration: 1e4 }), g.error("[3]\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005", { duration: 1e4 });
      }
    })();
  }, []), a && !n ? e.jsx(st, { children: e.jsxs("div", { className: "flex flex-col gap-0 h-screen print:h-auto", children: [e.jsx(na, { className: "shrink-0 grow-0 print:hidden" }), e.jsx("div", { className: "flex-1 overflow-auto", children: e.jsx(ge, {}) })] }) }) : a ? e.jsx("div", { className: "flex items-center justify-center h-screen", children: e.jsx("div", { className: "text-center", children: e.jsx("h1", { className: "text-2xl font-bold", children: "\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005" }) }) }) : e.jsx("div", { className: "flex items-center justify-center h-screen", children: e.jsx("div", { className: "text-center", children: e.jsx("h1", { className: "text-2xl font-bold", children: "\u6B63\u5728\u52A0\u8F7D..." }) }) });
}
export {
  La as D,
  Te as _,
  zs as a,
  Ta as c,
  Pa as g
};
