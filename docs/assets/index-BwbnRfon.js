import { r as x, j as e, Q as he, H as $e, O as xe, c as Ee, a as pe, l as ge, b as ke, R as Ge, d as De, A as Ae, K as Oe, S as Me, e as H, L as Fe, f as I, t as g, g as ze, P as Ue, U as Ve, T as Be, u as He, h as fe, C as Ke, i as Xe, k as We } from "./react-vendor-C1AjJau_.js";
import { Q as je, c as qe } from "./tanstack-vendor-BB7HWJ-3.js";
import { T as Ye, a as Je, B as N, C as K, b as X, c as W, d as ve, e as q, L as y, I as R, f as S, g as Qe, h as Ze, i as k, j as T, k as et, l as _, D as ye, m as Ne, n as Re, o as Ce, p as Se, q as tt, r as st, s as se, t as ae, u as be, S as at, v as rt, w as nt, x as ot, y as P, z as re, A as lt, E as it, F as ct, G as dt, H as ut, M as mt, J as G, K as D, N as A, O, P as M, Q as F, R as z, U as ne, V as U, W as ht, X as xt, Y as pt } from "./app-components-CCuPG-ln.js";
import { R as gt, a as ft, b as jt, c as vt, d as yt, e as Nt, f as Rt, g as Ct, h as St, i as bt, j as _t, k as wt, l as Tt, m as Pt, n as Lt, o as It, p as $t, q as Et, r as kt, s as Gt, t as Dt, u as At, v as Ot, w as Mt, x as Ft, y as zt, z as Ut, A as Vt } from "./app-route-for-_layout-game-DQsWYR09.js";
import { g as Bt, u as _e, a as Ht, p as Kt } from "./app-common-DnxDJJb8.js";
import { D as Xt } from "./vendor-VvUkZRdw.js";
import "./index-BwbnRfon.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./app-libs-for-custom-theme-CQCQ3KAn.js";
import "./components-and-styling-lnR2ABT4.js";
import "./gsap-DDlvirwQ.js";
import "./silly-tavern-ui-C8y0dUuM.js";
import "./silly-tavern-shared-DgvARXo1.js";
import "./zod-grrOrvCS.js";
import "./id-OxPLOBIU.js";
import "./silly-tavern-db-C6OCLe8X.js";
import "./@tanstack-Bw4lGhTw.js";
import "./dexie-Ca-96kR6.js";
import "./silly-tavern-engine-D0R6Sr8P.js";
import "./es-toolkit-CstbrnlE.js";
import "./future-lib-llm-ui-react-jbeTDxFo.js";
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
var wa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ta(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Wt() {
  const [t] = x.useState(() => new je({ defaultOptions: { queries: { staleTime: 3e5, retry: 1 } } }));
  return e.jsxs(he, { client: t, children: [e.jsx($e, {}), e.jsxs(Ye, { defaultTheme: "dark", storageKey: "allinone-webapp-ui-theme", children: [e.jsx(xe, {}), e.jsx(Je, { expand: true, visibleToasts: 6 })] })] });
}
const $ = Ee({ component: Wt }), qt = "modulepreload", Yt = function(t) {
  return "/tavern/" + t;
}, oe = {}, we = function(s, n, o) {
  let a = Promise.resolve();
  if (n && n.length > 0) {
    let h = function(u) {
      return Promise.all(u.map((m) => Promise.resolve(m).then((i) => ({ status: "fulfilled", value: i }), (i) => ({ status: "rejected", reason: i }))));
    };
    document.getElementsByTagName("link");
    const c = document.querySelector("meta[property=csp-nonce]"), d = (c == null ? void 0 : c.nonce) || (c == null ? void 0 : c.getAttribute("nonce"));
    a = h(n.map((u) => {
      if (u = Yt(u), u in oe) return;
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
}, Jt = () => we(() => Promise.resolve().then(() => Us), void 0), Qt = pe("/invitation")({ component: ge(Jt, "component") }), Zt = () => we(() => Promise.resolve().then(() => Xs), void 0), es = pe("/admin")({ component: ge(Zt, "component") }), ts = Qt.update({ id: "/invitation", path: "/invitation", getParentRoute: () => $ }), ss = es.update({ id: "/admin", path: "/admin", getParentRoute: () => $ }), Te = gt.update({ id: "/_layout-game", getParentRoute: () => $ }), v = ft.update({ id: "/_silly-tavern", getParentRoute: () => Te }), as = jt.update({ id: "/", path: "/", getParentRoute: () => v }), Pe = vt.update({ id: "/session", path: "/session", getParentRoute: () => v }), w = yt.update({ id: "/plaza", path: "/plaza", getParentRoute: () => v }), rs = Nt.update({ id: "/create", path: "/create", getParentRoute: () => v }), L = Rt.update({ id: "/config", path: "/config", getParentRoute: () => v }), ns = Ct.update({ id: "/", path: "/", getParentRoute: () => w }), os = St.update({ id: "/", path: "/", getParentRoute: () => L }), ls = bt.update({ id: "/$sessionId", path: "/$sessionId", getParentRoute: () => Pe }), is = _t.update({ id: "/small-town", path: "/small-town", getParentRoute: () => w }), cs = wt.update({ id: "/group-chat", path: "/group-chat", getParentRoute: () => w }), ds = Tt.update({ id: "/dnd", path: "/dnd", getParentRoute: () => w }), us = Pt.update({ id: "/characters", path: "/characters", getParentRoute: () => w }), ms = Lt.update({ id: "/challenges", path: "/challenges", getParentRoute: () => w }), hs = It.update({ id: "/create_/small-town", path: "/create/small-town", getParentRoute: () => v }), xs = $t.update({ id: "/create_/group-chat", path: "/create/group-chat", getParentRoute: () => v }), ps = Et.update({ id: "/create_/dnd", path: "/create/dnd", getParentRoute: () => v }), gs = kt.update({ id: "/create_/chat-character", path: "/create/chat-character", getParentRoute: () => v }), fs = Gt.update({ id: "/create_/chat-challenge", path: "/create/chat-challenge", getParentRoute: () => v }), js = Dt.update({ id: "/create_/character", path: "/create/character", getParentRoute: () => v }), vs = At.update({ id: "/create_/challenge", path: "/create/challenge", getParentRoute: () => v }), ys = Ot.update({ id: "/settings", path: "/settings", getParentRoute: () => L }), Ns = Mt.update({ id: "/overview", path: "/overview", getParentRoute: () => L }), Rs = Ft.update({ id: "/llm", path: "/llm", getParentRoute: () => L }), Cs = zt.update({ id: "/characters_/$characterId", path: "/characters/$characterId", getParentRoute: () => v }), Ss = Ut.update({ id: "/challenges_/$challengeId", path: "/challenges/$challengeId", getParentRoute: () => v }), bs = Vt.update({ id: "/characters_/$characterId_/edit", path: "/characters/$characterId/edit", getParentRoute: () => v }), _s = { LayoutGameSillyTavernConfigLlmRoute: Rs, LayoutGameSillyTavernConfigOverviewRoute: Ns, LayoutGameSillyTavernConfigSettingsRoute: ys, LayoutGameSillyTavernConfigIndexRoute: os }, ws = L._addFileChildren(_s), Ts = { LayoutGameSillyTavernPlazaChallengesRoute: ms, LayoutGameSillyTavernPlazaCharactersRoute: us, LayoutGameSillyTavernPlazaDndRoute: ds, LayoutGameSillyTavernPlazaGroupChatRoute: cs, LayoutGameSillyTavernPlazaSmallTownRoute: is, LayoutGameSillyTavernPlazaIndexRoute: ns }, Ps = w._addFileChildren(Ts), Ls = { LayoutGameSillyTavernSessionSessionIdRoute: ls }, Is = Pe._addFileChildren(Ls), $s = { LayoutGameSillyTavernConfigRouteRoute: ws, LayoutGameSillyTavernCreateRoute: rs, LayoutGameSillyTavernPlazaRoute: Ps, LayoutGameSillyTavernSessionRoute: Is, LayoutGameSillyTavernIndexRoute: as, LayoutGameSillyTavernChallengesChallengeIdRoute: Ss, LayoutGameSillyTavernCharactersCharacterIdRoute: Cs, LayoutGameSillyTavernCreateChallengeRoute: vs, LayoutGameSillyTavernCreateCharacterRoute: js, LayoutGameSillyTavernCreateChatChallengeRoute: fs, LayoutGameSillyTavernCreateChatCharacterRoute: gs, LayoutGameSillyTavernCreateDndRoute: ps, LayoutGameSillyTavernCreateGroupChatRoute: xs, LayoutGameSillyTavernCreateSmallTownRoute: hs, LayoutGameSillyTavernCharactersCharacterIdEditRoute: bs }, Es = v._addFileChildren($s), ks = { LayoutGameSillyTavernRouteRoute: Es }, Gs = Te._addFileChildren(ks), Ds = { LayoutGameRouteRoute: Gs, AdminRoute: ss, InvitationRoute: ts }, As = $._addFileChildren(Ds)._addFileTypes();
Xt({ interval: 2e3, tkName: "dev", md5: "43f1516c98cf02ba06d7406c37ad52f0", url: "https://nexworld.wiki/", timeOutUrl: "https://nexworld.wiki/" });
const Os = qe(), Ms = ke({ routeTree: As, history: Os, defaultPreload: "intent", scrollRestoration: true }), Fs = new je(), V = document.getElementById("app");
V && !V.innerHTML && Ge.createRoot(V).render(e.jsx(he, { client: Fs, children: e.jsx(De, { router: Ms }) }));
const le = "__NexTavern_Auth_API_URL__", ie = "__NexTavern_Auth_Code_Persistent__", ce = "__NexTavern_Auth_Verified__", de = "__NexTavern_Auth_Permissions__";
function zs() {
  var _a, _b;
  const [t, s] = x.useState(false), n = Bt(), [o, a] = x.useState(""), [l, c] = x.useState(""), [d, h] = x.useState(null);
  x.useEffect(() => {
    if (a(localStorage.getItem(le) || ""), c(localStorage.getItem(ie) || ""), sessionStorage.getItem(ce) === "true") try {
      const r = JSON.parse(sessionStorage.getItem(de) || "{}");
      h({ verified: true, features: r.features || [] });
    } catch {
    }
  }, []);
  const u = (r) => {
    a(r), localStorage.setItem(le, r);
  }, m = (r) => {
    c(r), localStorage.setItem(ie, r);
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
        sessionStorage.setItem(ce, "true"), sessionStorage.setItem(de, JSON.stringify(C)), h({ verified: true, features: C.features || [] });
      } else throw new Error("\u9080\u8BF7\u7801\u65E0\u6548");
    } catch (f) {
      h({ verified: false, error: f.message }), g.error(f.message);
    } finally {
      s(false);
    }
  };
  return e.jsx("div", { className: "min-h-screen bg-muted/20 flex flex-col items-center p-8", children: e.jsxs("div", { className: "w-full max-w-md space-y-6", children: [e.jsxs(N, { variant: "ghost", size: "sm", onClick: () => window.history.back(), className: "gap-2", children: [e.jsx(Ae, { className: "w-4 h-4" }), "\u8FD4\u56DE"] }), e.jsxs(K, { className: "shadow-lg", children: [e.jsxs(X, { children: [e.jsxs(W, { className: "text-2xl font-bold flex items-center gap-2", children: [e.jsx(Oe, { className: "w-6 h-6 text-primary" }), "\u9080\u8BF7\u7801\u7BA1\u7406"] }), e.jsx(ve, { children: "\u914D\u7F6E\u60A8\u7684\u6388\u6743\u4FE1\u606F\u4EE5\u89E3\u9501\u5185\u6D4B\u529F\u80FD" })] }), e.jsxs(q, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(y, { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [e.jsx(Me, { className: "w-3 h-3" }), "\u8BBE\u5907 UUID (\u4E0D\u53EF\u4FEE\u6539)"] }), e.jsx(R, { value: n, disabled: true, className: "bg-muted text-xs font-mono h-9" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(y, { htmlFor: "code", children: "\u9080\u8BF7\u7801" }), e.jsx(R, { id: "code", value: l, onChange: (r) => m(r.target.value), placeholder: "\u8F93\u5165\u9080\u8BF7\u7801 (\u4F8B\u5982: NEX-XXXX)", className: "h-10" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(y, { htmlFor: "apiUrl", children: "\u670D\u52A1\u5668\u5730\u5740" }), e.jsx(R, { id: "apiUrl", value: o, onChange: (r) => u(r.target.value), placeholder: "https://auth.example.workers.dev", className: "h-10" })] }), d && e.jsx("div", { className: `p-4 rounded-lg border transition-all ${d.verified ? "bg-primary/5 border-primary/20" : "bg-destructive/5 border-destructive/20"}`, children: d.verified ? e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "text-sm font-bold text-primary flex items-center gap-2", children: [e.jsx(H, { className: "w-4 h-4" }), "\u6821\u9A8C\u901A\u8FC7"] }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [(_a = d.features) == null ? void 0 : _a.map((r) => e.jsx(S, { variant: "secondary", className: "px-2 py-0.5", children: r }, r)), ((_b = d.features) == null ? void 0 : _b.length) === 0 && e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u57FA\u7840\u6743\u9650" })] })] }) : e.jsxs("div", { className: "text-sm text-destructive flex items-center gap-2 font-medium", children: [e.jsx(Fe, { className: "w-4 h-4" }), d.error || "\u9A8C\u8BC1\u5931\u8D25"] }) }), e.jsxs(N, { onClick: i, disabled: t, className: "w-full h-11 text-base font-medium gap-2", children: [t ? e.jsx(I, { className: "w-5 h-5 animate-spin" }) : e.jsx(H, { className: "w-5 h-5" }), "\u7ACB\u5373\u6821\u9A8C\u6743\u9650"] })] })] })] }) });
}
const Us = Object.freeze(Object.defineProperty({ __proto__: null, component: zs }, Symbol.toStringTag, { value: "Module" })), B = "nex_tavern_admin_token", ue = "__NexTavern_Auth_API_URL__";
function Vs() {
  const [t, s] = x.useState(null), [n, o] = x.useState("");
  x.useEffect(() => {
    const c = sessionStorage.getItem(B), d = localStorage.getItem(ue);
    c && s(c), d && o(d);
  }, []);
  const a = (c, d) => {
    s(c), o(d), sessionStorage.setItem(B, c), localStorage.setItem(ue, d);
  }, l = () => {
    s(null), sessionStorage.removeItem(B);
  };
  return t ? e.jsx("div", { className: "min-h-screen bg-muted/20 p-8", children: e.jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "\u7BA1\u7406\u63A7\u5236\u53F0" }), e.jsx("p", { className: "text-muted-foreground", children: "NexTavern \u9080\u8BF7\u7801\u7BA1\u7406\u7CFB\u7EDF" })] }), e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full", children: n }), e.jsxs(N, { variant: "outline", onClick: l, className: "gap-2", children: [e.jsx(ze, { className: "w-4 h-4" }), "\u9000\u51FA\u767B\u5F55"] })] })] }), e.jsx(Hs, { apiUrl: n, token: t, onLogout: l })] }) }) : e.jsx(Bs, { onLogin: a, defaultApiUrl: n });
}
function Bs({ onLogin: t, defaultApiUrl: s }) {
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
  return e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-muted/20 p-4", children: e.jsxs(K, { className: "w-full max-w-md", children: [e.jsxs(X, { className: "space-y-1", children: [e.jsxs(W, { className: "text-2xl font-bold flex items-center gap-2", children: [e.jsx(H, { className: "w-6 h-6 text-primary" }), "\u7BA1\u7406\u5458\u767B\u5F55"] }), e.jsx(ve, { children: "\u8BF7\u8F93\u5165\u7BA1\u7406\u5458\u51ED\u8BC1\u4EE5\u8BBF\u95EE\u63A7\u5236\u53F0" })] }), e.jsx(q, { children: e.jsxs("form", { onSubmit: m, className: "space-y-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(y, { htmlFor: "url", children: "API \u5730\u5740" }), e.jsx(R, { id: "url", placeholder: "https://auth.example.workers.dev", value: n, onChange: (i) => o(i.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(y, { htmlFor: "username", children: "\u7528\u6237\u540D" }), e.jsx(R, { id: "username", value: a, onChange: (i) => l(i.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(y, { htmlFor: "password", children: "\u5BC6\u7801" }), e.jsx(R, { id: "password", type: "password", value: c, onChange: (i) => d(i.target.value) })] }), e.jsx(N, { type: "submit", className: "w-full", disabled: h, children: h ? "\u767B\u5F55\u4E2D..." : "\u767B\u5F55" })] }) })] }) });
}
function Hs({ apiUrl: t, token: s, onLogout: n }) {
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
  return e.jsxs("div", { className: "space-y-6", children: [e.jsx("div", { className: "flex justify-end", children: e.jsxs(N, { onClick: () => h(true), className: "gap-2", children: [e.jsx(Ue, { className: "w-4 h-4" }), "\u521B\u5EFA\u9080\u8BF7\u7801"] }) }), e.jsxs(K, { children: [e.jsx(X, { children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx(W, { children: "\u9080\u8BF7\u7801\u5217\u8868" }), e.jsx(N, { variant: "ghost", size: "icon", onClick: u, disabled: l, children: e.jsx(I, { className: `w-4 h-4 ${l ? "animate-spin" : ""}` }) })] }) }), e.jsx(q, { children: e.jsxs(Qe, { children: [e.jsx(Ze, { children: e.jsxs(k, { children: [e.jsx(T, { children: "\u9080\u8BF7\u7801" }), e.jsx(T, { children: "\u5907\u6CE8" }), e.jsx(T, { children: "\u4F7F\u7528\u60C5\u51B5" }), e.jsx(T, { children: "\u6743\u9650" }), e.jsx(T, { children: "\u8FC7\u671F\u65F6\u95F4" }), e.jsx(T, { className: "text-right", children: "\u64CD\u4F5C" })] }) }), e.jsx(et, { children: o.length === 0 ? e.jsx(k, { children: e.jsx(_, { colSpan: 6, className: "text-center py-8 text-muted-foreground", children: "\u6682\u65E0\u6570\u636E" }) }) : o.map((i) => {
    var _a, _b, _c;
    return e.jsxs(k, { children: [e.jsx(_, { className: "font-mono font-medium", children: i.code }), e.jsx(_, { children: i.memo }), e.jsx(_, { children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Ve, { className: "w-3 h-3 text-muted-foreground" }), e.jsxs("span", { children: [i.usage_count, " / ", i.max_usages] })] }) }), e.jsx(_, { children: e.jsxs("div", { className: "flex gap-1 flex-wrap", children: [((_a = i.permissions) == null ? void 0 : _a.isAdmin) && e.jsx(S, { variant: "destructive", className: "text-[10px]", children: "Admin" }), (_c = (_b = i.permissions) == null ? void 0 : _b.features) == null ? void 0 : _c.map((r) => e.jsx(S, { variant: "secondary", className: "text-[10px]", children: r }, r)), (!i.permissions || Object.keys(i.permissions).length === 0 || !i.permissions.isAdmin && (!i.permissions.features || i.permissions.features.length === 0)) && e.jsx(S, { variant: "outline", className: "text-[10px]", children: "No Access" })] }) }), e.jsx(_, { children: i.expires_at ? e.jsx("div", { className: `text-sm ${i.expires_at < Date.now() ? "text-destructive" : ""}`, children: new Date(i.expires_at).toLocaleDateString() }) : e.jsx("span", { className: "text-muted-foreground text-sm", children: "\u6C38\u4E45\u6709\u6548" }) }), e.jsx(_, { className: "text-right", children: e.jsx(N, { variant: "ghost", size: "icon", className: "text-muted-foreground hover:text-destructive", onClick: () => m(i.code), children: e.jsx(Be, { className: "w-4 h-4" }) }) })] }, i.code);
  }) })] }) })] }), e.jsx(Ks, { open: d, onOpenChange: h, apiUrl: t, token: s, onSuccess: u })] });
}
function Ks({ open: t, onOpenChange: s, apiUrl: n, token: o, onSuccess: a }) {
  const [l, c] = x.useState("single"), [d, h] = x.useState({ code: "", memo: "", max_usages: 3, days_valid: "0", features: [] }), [u, m] = x.useState({ prefix: "NEX-", count: 10, memo: "", max_usages: 3, days_valid: "0", features: [] }), [i, r] = x.useState(false), p = () => {
    const j = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let C = "NEX-";
    for (let b = 0; b < 8; b++) C += j.charAt(Math.floor(Math.random() * j.length));
    h((b) => ({ ...b, code: C }));
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
      const b = await fetch(`${n}/admin/api/codes`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${o}` }, body: JSON.stringify(C) }), Y = await b.json();
      b.ok ? (g.success(l === "single" ? "\u9080\u8BF7\u7801\u521B\u5EFA\u6210\u529F" : `\u6210\u529F\u521B\u5EFA ${Y.message}`), s(false), a(), h({ code: "", memo: "", max_usages: 3, days_valid: "0", features: [] }), m({ prefix: "NEX-", count: 10, memo: "", max_usages: 3, days_valid: "0", features: [] })) : g.error(Y.error || "\u521B\u5EFA\u5931\u8D25");
    } catch {
      g.error("\u7F51\u7EDC\u9519\u8BEF");
    } finally {
      r(false);
    }
  };
  return e.jsx(ye, { open: t, onOpenChange: s, children: e.jsxs(Ne, { className: "sm:max-w-[500px]", children: [e.jsxs(Re, { children: [e.jsx(Ce, { children: "\u521B\u5EFA\u9080\u8BF7\u7801" }), e.jsx(Se, { children: "\u751F\u6210\u5355\u4E2A\u6216\u6279\u91CF\u751F\u6210\u9080\u8BF7\u7801\u3002" })] }), e.jsxs(tt, { defaultValue: "single", value: l, onValueChange: c, children: [e.jsxs(st, { className: "grid w-full grid-cols-2", children: [e.jsx(se, { value: "single", children: "\u5355\u4E2A\u521B\u5EFA" }), e.jsx(se, { value: "bulk", children: "\u6279\u91CF\u751F\u6210" })] }), e.jsxs("form", { onSubmit: f, className: "py-4 space-y-4", children: [e.jsxs(ae, { value: "single", className: "space-y-4 mt-0", children: [e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(y, { htmlFor: "code", className: "text-right", children: "\u9080\u8BF7\u7801" }), e.jsxs("div", { className: "col-span-3 flex gap-2", children: [e.jsx(R, { id: "code", value: d.code, onChange: (j) => h({ ...d, code: j.target.value }), placeholder: "\u4F8B\u5982: NEX-8888", required: l === "single" }), e.jsx(N, { type: "button", variant: "secondary", size: "icon", onClick: p, title: "\u968F\u673A\u751F\u6210", children: e.jsx(I, { className: "w-4 h-4" }) })] })] }), e.jsx(me, { data: d, setData: h })] }), e.jsxs(ae, { value: "bulk", className: "space-y-4 mt-0", children: [e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(y, { htmlFor: "prefix", className: "text-right", children: "\u524D\u7F00" }), e.jsx(R, { id: "prefix", value: u.prefix, onChange: (j) => m({ ...u, prefix: j.target.value }), className: "col-span-3", placeholder: "\u4F8B\u5982: NEX-" })] }), e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(y, { htmlFor: "count", className: "text-right", children: "\u6570\u91CF" }), e.jsxs("div", { className: "col-span-3 flex items-center gap-2", children: [e.jsx(R, { id: "count", type: "number", min: "1", max: "50", value: u.count, onChange: (j) => m({ ...u, count: Number(j.target.value) }) }), e.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: "\u6700\u591A 50 \u4E2A" })] })] }), e.jsx(me, { data: u, setData: m })] }), e.jsx(be, { children: e.jsxs(N, { type: "submit", disabled: i, children: [i && e.jsx(I, { className: "mr-2 h-4 w-4 animate-spin" }), l === "single" ? "\u521B\u5EFA" : "\u6279\u91CF\u751F\u6210"] }) })] })] })] }) });
}
function me({ data: t, setData: s }) {
  const n = (o) => {
    const a = t.features || [];
    a.includes(o) ? s({ ...t, features: a.filter((l) => l !== o) }) : s({ ...t, features: [...a, o] });
  };
  return e.jsxs(e.Fragment, { children: [e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(y, { className: "text-right", children: "\u5907\u6CE8" }), e.jsx(R, { value: t.memo, onChange: (o) => s({ ...t, memo: o.target.value }), className: "col-span-3", placeholder: "\u4F8B\u5982: \u6D3B\u52A8\u5206\u53D1" })] }), e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(y, { className: "text-right", children: "\u6700\u5927\u8BBE\u5907\u6570" }), e.jsx(R, { type: "number", min: "1", value: t.max_usages, onChange: (o) => s({ ...t, max_usages: Number(o.target.value) }), className: "col-span-3" })] }), e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(y, { className: "text-right", children: "\u6709\u6548\u671F" }), e.jsxs(at, { value: String(t.days_valid), onValueChange: (o) => s({ ...t, days_valid: o }), children: [e.jsx(rt, { className: "col-span-3", children: e.jsx(nt, { placeholder: "\u9009\u62E9\u6709\u6548\u671F" }) }), e.jsxs(ot, { children: [e.jsx(P, { value: "0", children: "\u6C38\u4E45\u6709\u6548" }), e.jsx(P, { value: "1", children: "1 \u5929" }), e.jsx(P, { value: "7", children: "7 \u5929" }), e.jsx(P, { value: "30", children: "30 \u5929" }), e.jsx(P, { value: "90", children: "90 \u5929" })] })] })] }), e.jsxs("div", { className: "grid grid-cols-4 items-start gap-4", children: [e.jsx(y, { className: "text-right pt-2", children: "\u529F\u80FD\u6743\u9650" }), e.jsxs("div", { className: "col-span-3 space-y-2 border rounded-md p-3", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(re, { id: "feat-small-town", checked: (t.features || []).includes("small-town"), onCheckedChange: () => n("small-town") }), e.jsx(y, { htmlFor: "feat-small-town", className: "cursor-pointer", children: "\u5C0F\u9547\u6A21\u5F0F (Small Town)" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(re, { id: "feat-dnd", checked: (t.features || []).includes("dnd"), onCheckedChange: () => n("dnd") }), e.jsx(y, { htmlFor: "feat-dnd", className: "cursor-pointer", children: "DnD \u8DD1\u56E2 (D&D)" })] })] })] })] });
}
const Xs = Object.freeze(Object.defineProperty({ __proto__: null, component: Vs }, Symbol.toStringTag, { value: "Module" }));
function Ws(t) {
  const s = [];
  return t.split("/").forEach((o, a) => {
    if (o.startsWith("$")) {
      const l = o.slice(1), c = qs(l);
      s.push({ name: l, position: a, exampleValue: c });
    }
  }), s;
}
function qs(t) {
  return { postId: "123", userId: "456", id: "1", slug: "example-slug", category: "tech", tag: "javascript" }[t] || "example";
}
function Ys(t, s) {
  var _a, _b;
  const n = s.fullPath || s.path || t, a = n.split("/").filter(Boolean).length, l = Ws(n);
  return { id: t, path: s.path || "", fullPath: n, level: a, isRoot: n === "/", children: [], params: l, metadata: { hasComponent: !!((_a = s.options) == null ? void 0 : _a.component), isIndex: n === "/" || n.endsWith("/"), parentId: (_b = s.parentRoute) == null ? void 0 : _b.id } };
}
function Js(t) {
  const s = [];
  for (const n of t.values()) if (n.isRoot || !n.metadata.parentId || n.metadata.parentId === "__root__") s.push(n);
  else {
    const o = t.get(n.metadata.parentId);
    o ? o.children.push(n) : s.push(n);
  }
  return s;
}
function Le(t) {
  t.sort((s, n) => s.isRoot ? -1 : n.isRoot ? 1 : s.fullPath.localeCompare(n.fullPath));
  for (const s of t) s.children.length > 0 && Le(s.children);
}
function Qs(t) {
  const s = t.routesById || {}, n = /* @__PURE__ */ new Map();
  for (const [a, l] of Object.entries(s)) {
    if (a === "__root__") continue;
    const d = Ys(a, l);
    n.set(a, d);
  }
  const o = Js(n);
  return Le(o), o;
}
function Zs({ params: t, paramValues: s, onParamChange: n, onNavigate: o }) {
  return e.jsxs("div", { className: "space-y-3", children: [t.map((a) => e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "text-xs font-medium text-gray-600", children: [a.name, e.jsxs("span", { className: "text-gray-400 ml-2", children: ["(\u793A\u4F8B: ", e.jsx("code", { className: "bg-blue-50 px-1 rounded", children: a.exampleValue }), ")"] })] }), e.jsx(R, { type: "text", value: s[a.name], onChange: (l) => n(a.name, l.target.value), placeholder: `\u8F93\u5165 ${a.name}`, className: "h-8 text-sm" })] }, a.name)), e.jsx("div", { className: "flex gap-1", children: e.jsx(N, { variant: "outline", size: "sm", onClick: () => o(false), className: "", children: "\u524D\u5F80" }) })] });
}
function Ie({ route: t, depth: s = 0 }) {
  const n = fe(), o = s * 32, [a, l] = x.useState(() => {
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
  return e.jsxs("div", { className: "relative", children: [i && e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-200 to-transparent", style: { left: `${o - 16}px` } }), e.jsx("div", { className: "absolute top-6 w-4 h-0.5 bg-indigo-200", style: { left: `${o - 16}px` } })] }), e.jsxs("div", { style: { marginLeft: `${o}px` }, className: "", children: [e.jsxs(lt, { variant: "outline", size: "sm", className: "bg-background", children: [e.jsx(it, { children: e.jsxs("div", { className: "w-full flex gap-2 items-center", children: [m && e.jsx(N, { variant: "ghost", size: "sm", onClick: () => d(!c), children: c ? e.jsx(Ke, { className: "h-4 w-4" }) : e.jsx(Xe, { className: "h-4 w-4" }) }), e.jsx(ct, { children: e.jsx("div", { className: "font-semibold", children: t.fullPath }) }), e.jsxs("div", { className: "inline-flex gap-2 flex-wrap", children: [t.isRoot && e.jsx(S, { variant: "default", children: "root" }), t.params.length > 0 && e.jsx(S, { variant: "destructive", children: "\u52A8\u6001" }), t.metadata.isIndex && !t.isRoot && e.jsx(S, { variant: "secondary", children: "index" }), m && e.jsx(S, { className: "bg-blue-500 text-white dark:bg-blue-600", children: t.children.length })] }), t.params.length === 0 && e.jsx(N, { size: "sm", variant: "ghost", onClick: () => h(false), children: "\u2192" })] }) }), t.params.length === 0 && e.jsx(dt, { children: e.jsx(N, { size: "sm", variant: "outline", onClick: () => h(false), children: "\u2192" }) }), t.params.length > 0 && e.jsx(Zs, { params: t.params, paramValues: a, onParamChange: u, onNavigate: h })] }), c && t.children.length > 0 && e.jsx("div", { className: "py-1", children: e.jsx("div", { className: "space-y-1", children: t.children.map((r) => e.jsx(Ie, { route: r, depth: s + 1 }, r.id)) }) })] })] });
}
function ea() {
  const t = He(), s = x.useMemo(() => Qs(t), [t]), n = x.useMemo(() => {
    let o = 0;
    const a = (l) => {
      for (const c of l) o++, c.children.length > 0 && a(c.children);
    };
    return a(s), o;
  }, [s]);
  return e.jsxs("div", { className: "space-y-2", children: [e.jsx("div", { className: "", children: e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u5171 ", n, " \u4E2A\u8DEF\u7531\u3002"] }) }), s.length > 0 && e.jsx("div", { className: "space-y-2", children: s.map((o) => e.jsx(Ie, { route: o }, o.id)) }), s.length === 0 && e.jsx("div", { className: "text-center py-12 text-gray-500", children: e.jsx("p", { children: "\u672A\u627E\u5230\u4EFB\u4F55\u8DEF\u7531" }) })] });
}
const ta = /* @__PURE__ */ new Date("2026-05-01");
function sa() {
  return e.jsxs(Ne, { className: "sm:max-w-xl p-0 space-y-0 gap-0", children: [e.jsxs(Re, { className: "p-3 pb-2", children: [e.jsx(Ce, { children: "\u6240\u6709\u9875\u9762" }), e.jsx(Se, { children: "\u53EF\u8BBF\u95EE\u5E94\u7528\u4E2D\u6240\u6709\u5DF2\u6CE8\u518C\u7684\u8DEF\u7531\u3002" })] }), e.jsx("div", { className: "p-3 max-h-[60vh] overflow-auto border-y", children: e.jsx(ea, {}) }), e.jsx(be, { className: "sm:justify-start p-3 pt-2", children: e.jsx(pt, { asChild: true, children: e.jsx(N, { type: "button", variant: "secondary", size: "sm", children: "Close" }) }) })] });
}
function aa({ className: t }) {
  const s = fe({}), { systemTheme: n, theme: o, setTheme: a, defaultTheme: l, primaryColor: c, setPrimaryColor: d, defaultPrimaryColor: h } = Ht(), u = _e((m) => m.recentPages);
  return e.jsxs(ye, { children: [e.jsxs(mt, { className: `rounded-none border-x-0 border-t-0 ${t ?? ""}`, children: [e.jsxs(G, { children: [e.jsx(D, { children: "Go" }), e.jsxs(A, { children: [e.jsx(O, { onClick: () => s({ to: "/" }), children: " Home " }), e.jsx(O, { onClick: () => s({ to: "/config/llm" }), children: " Config " })] })] }), e.jsxs(G, { children: [e.jsx(D, { children: "History" }), e.jsx(A, { children: u.map((m) => e.jsx(O, { onClick: () => s({ to: m }), children: m }, m)) })] }), e.jsxs(G, { children: [e.jsx(D, { children: "View" }), e.jsxs(A, { children: [e.jsxs(M, { children: [e.jsx(F, { children: "Theme" }), e.jsx(z, { children: Object.entries(Kt).map(([m, i]) => e.jsxs(M, { children: [e.jsx(F, { children: m }), e.jsx(z, { children: e.jsx(ne, { value: c, children: i.map((r) => e.jsxs(U, { value: r, onClick: () => d == null ? void 0 : d(r), children: [r.charAt(0).toUpperCase() + r.slice(1), h === r ? " (default)" : ""] }, r)) }) })] }, m)) })] }), e.jsxs(M, { children: [e.jsx(F, { children: "Theme Mode" }), e.jsxs(z, { children: [e.jsxs(ne, { value: o, children: [e.jsxs(U, { value: "light", onClick: () => a("light"), children: ["Light", l === "light" ? " (default)" : ""] }), e.jsxs(U, { value: "dark", onClick: () => a("dark"), children: ["Dark", l === "dark" ? " (default)" : ""] })] }), e.jsx(ht, {}), e.jsxs(xt, { checked: o === "system", onClick: () => a("system"), children: ["System (", n, ")", l === "system" ? " (default)" : ""] })] })] })] })] })] }), e.jsx(sa, {})] });
}
function Pa() {
  const t = We(), s = _e((c) => c.addPage), [n, o] = x.useState(false), [a, l] = x.useState(false);
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
        await c() > ta && (o(true), g.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005", { duration: 1e4 })), l(true);
      } catch (h) {
        o(true), l(true), g.error(String(h), { duration: 1e4 }), g.error(String(h == null ? void 0 : h.message), { duration: 1e4 }), g.error("[3]\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005", { duration: 1e4 });
      }
    })();
  }, []), a && !n ? e.jsx(ut, { children: e.jsxs("div", { className: "flex flex-col gap-0 h-screen print:h-auto", children: [e.jsx(aa, { className: "shrink-0 grow-0 print:hidden" }), e.jsx("div", { className: "flex-1 overflow-auto", children: e.jsx(xe, {}) })] }) }) : a ? e.jsx("div", { className: "flex items-center justify-center h-screen", children: e.jsx("div", { className: "text-center", children: e.jsx("h1", { className: "text-2xl font-bold", children: "\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005" }) }) }) : e.jsx("div", { className: "flex items-center justify-center h-screen", children: e.jsx("div", { className: "text-center", children: e.jsx("h1", { className: "text-2xl font-bold", children: "\u6B63\u5728\u52A0\u8F7D..." }) }) });
}
export {
  Pa as D,
  we as _,
  wa as c,
  Ta as g
};
