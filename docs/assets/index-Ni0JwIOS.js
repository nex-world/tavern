const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/route-zMIwdcmG.js","assets/react-BPCshYXX.js","assets/vendor-DqU8PgXE.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/@tanstack-BuNX36FW.js","assets/dexie-DOn8o3hw.js","assets/shadcn-utils-BMZD7_jZ.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-COJ8Fh6m.js","assets/icons-BpfK1DnB.js","assets/button-CKyQl8ny.js","assets/dialog-CbwgCfJB.js","assets/badge-b3CWeD_H.js","assets/input-Dje6SeH9.js","assets/app-configurations-Cz44104t.js","assets/es-toolkit-CstbrnlE.js","assets/route-BsGIgwHM.js","assets/index-B9OSbGWq.js","assets/session-tUDpUcwd.js","assets/mode-registry-B-qWNhGq.js","assets/alert-dialog-D3tRcaR3.js","assets/CharacterAvatar-DwtbYeXp.js","assets/sheet-9m8O3R_a.js","assets/db-master-xI8DZi24.js","assets/zod-fbN9ubnj.js","assets/plaza-CW9WS35X.js","assets/tabs-ZtUtVHhO.js","assets/me-BMEtpYzi.js","assets/invitation-BuPKo1rc.js","assets/label-DxXosFPV.js","assets/card-B79febki.js","assets/nex-tavern-uuid-HW61e36x.js","assets/id-OxPLOBIU.js","assets/create-ekZes9ss.js","assets/admin-zbVMc6b0.js","assets/select-CgkKzHrj.js","assets/checkbox-BCgVagup.js","assets/route-C3Q8wEaJ.js","assets/index-dTDOHMVL.js","assets/session._sessionId-Dpj9YqKI.js","assets/InvitationGuard-CREUuIl2.js","assets/plaza.small-town-PgtChSGv.js","assets/plaza.group-chat-B9ceEpkQ.js","assets/plaza.dnd-D9g2aveG.js","assets/plaza.characters-BpzcLqBL.js","assets/ImportCardDialog-7-WOgScb.js","assets/gsap-DDlvirwQ.js","assets/card-converters-D3se0fkY.js","assets/ImportCardDialog-DvwNuPEv.css","assets/plaza.challenges-CvL7Xz6Y.js","assets/create_.small-town-BYPqWFcy.js","assets/slider-x3H1qI5O.js","assets/textarea-Dc_MpBxB.js","assets/llm-readiness-DgR8F2ee.js","assets/create_.novel-writing-Bv-2kB2D.js","assets/create_.group-chat-fiTsvniW.js","assets/create_.dnd-D_-lQVrV.js","assets/create_.chat-character-CsbLHQ8p.js","assets/useLLM-CCvhQGvi.js","assets/global-llm-config.store-B8jg895c.js","assets/create_.chat-challenge-Clx_oqyE.js","assets/create_.character-DTyFaDSF.js","assets/CharacterCreationForm-r4hjOvIc.js","assets/switch-DwXGULrD.js","assets/create_.challenge-Ck_xOQK7.js","assets/settings-BVVEkAAX.js","assets/overview-DAzD2HfX.js","assets/llm-D70x7Zl0.js","assets/characters_._characterId-Ck4xmy6T.js","assets/SessionSetupWizard-Ki7Tbb9h.js","assets/challenges_._challengeId-CZfYYOMw.js","assets/characters_._characterId_.edit-BA8zkzJZ.js"])))=>i.map(i=>d[i]);
import { z as j, j as p, T as M, r as R, d as H, p as W, e as q } from "./react-BPCshYXX.js";
import { Q as D, a as w, H as B, O as K, c as U, b as a, l as n, r as Q, d as X, e as J, R as Y } from "./@tanstack-BuNX36FW.js";
import { L as Z, O as ee, T as te, I as oe, C as ae } from "./icons-BpfK1DnB.js";
import { v as ne } from "./vendor-DqU8PgXE.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-DOn8o3hw.js";
let Me, r, $t, ft, Tt, Pt, ce, Lo;
let __tla = (async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
    new MutationObserver((s) => {
      for (const u of s) if (u.type === "childList") for (const d of u.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && o(d);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function e(s) {
      const u = {};
      return s.integrity && (u.integrity = s.integrity), s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? u.credentials = "include" : s.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u;
    }
    function o(s) {
      if (s.ep) return;
      s.ep = true;
      const u = e(s);
      fetch(s.href, u);
    }
  })();
  let re, ie, le, C, b, se;
  re = ({ ...c }) => {
    const { theme: t = "system" } = j();
    return p.jsx(M, {
      theme: t,
      className: "toaster group",
      icons: {
        success: p.jsx(ae, {
          className: "size-4"
        }),
        info: p.jsx(oe, {
          className: "size-4"
        }),
        warning: p.jsx(te, {
          className: "size-4"
        }),
        error: p.jsx(ee, {
          className: "size-4"
        }),
        loading: p.jsx(Z, {
          className: "size-4 animate-spin"
        })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      ...c
    });
  };
  ie = [
    "neutral",
    "stone",
    "zinc",
    "gray",
    "slate"
  ];
  ce = {
    Classic: [
      "default",
      "blue",
      "violet",
      "rose"
    ],
    Featured: [
      "sakura",
      "gold",
      "coffee",
      "forest",
      "moonlight",
      "ocean",
      "mint",
      "halloween"
    ],
    Morandi: [
      "morandi-green",
      "morandi-purple",
      "morandi-grayblue",
      "morandi-brown"
    ]
  };
  le = Object.values(ce).flat();
  C = {
    storageKey: "vite-ui-theme",
    defaultTheme: "system",
    defaultBaseColor: "zinc",
    defaultPrimaryColor: "violet",
    theme: "system",
    systemTheme: void 0,
    baseColor: "zinc",
    primaryColor: "violet",
    storageKeyOfTheme: "vite-ui-theme",
    storageKeyOfBaseColor: "vite-ui-base-color",
    storageKeyOfPrimaryColor: "vite-ui-primary-color",
    setTheme: () => null,
    setBaseColor: () => null,
    setPrimaryColor: () => null
  };
  b = R.createContext(C);
  Lo = () => {
    const c = R.useContext(b);
    if (c === void 0) throw new Error("useTheme must be used within a ThemeProvider");
    return c;
  };
  se = /oklch\(([\d.]+)%?\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+)%?)?\)/;
  function me(c) {
    const t = c.match(se);
    return t ? {
      l: Number.parseFloat(t[1]),
      c: Number.parseFloat(t[2]),
      h: Number.parseFloat(t[3]),
      a: t[4] ? t[4].endsWith("%") ? Number.parseFloat(t[4]) / 100 : Number.parseFloat(t[4]) : 1
    } : {
      l: 0.5,
      c: 0.1,
      h: 0,
      a: 1
    };
  }
  function v(c, t, e, o = 1) {
    const s = o < 1 ? ` / ${Math.round(o * 100)}%` : "";
    return `oklch(${c.toFixed(3)} ${t.toFixed(3)} ${Math.round(e)}${s})`;
  }
  function G(c, t) {
    const e = me(c.primary), o = {
      ...c
    };
    return o.primaryForeground = e.l > 0.6 ? "oklch(0.2 0.01 285)" : "oklch(0.98 0.01 285)", o.ring = v(e.l, e.c, e.h, 0.5), t ? (o.secondary = v(0.25, e.c * 0.3, e.h), o.secondaryForeground = v(0.9, e.c * 0.1, e.h)) : (o.secondary = v(0.96, e.c * 0.2, e.h), o.secondaryForeground = v(0.2, e.c * 0.5, e.h)), o.accent = v(t ? 0.3 : 0.92, e.c * 0.4, e.h), o.accentForeground = o.secondaryForeground, o.muted = v(t ? 0.2 : 0.96, e.c * 0.1, e.h), o.mutedForeground = v(t ? 0.6 : 0.5, e.c * 0.1, e.h), o.border = v(t ? 0.25 : 0.9, e.c * 0.1, e.h, t ? 0.1 : 1), o.input = o.border, o;
  }
  const ue = {
    background: "oklch(1 0 0)",
    foreground: "oklch(0.141 0.005 285.823)",
    card: "oklch(1 0 0)",
    cardForeground: "oklch(0.141 0.005 285.823)",
    popover: "oklch(1 0 0)",
    popoverForeground: "oklch(0.141 0.005 285.823)",
    primary: "oklch(0.21 0.006 285.885)",
    primaryForeground: "oklch(0.985 0 0)",
    secondary: "oklch(0.967 0.001 286.375)",
    secondaryForeground: "oklch(0.21 0.006 285.885)",
    muted: "oklch(0.967 0.001 286.375)",
    mutedForeground: "oklch(0.552 0.016 285.938)",
    accent: "oklch(0.967 0.001 286.375)",
    accentForeground: "oklch(0.21 0.006 285.885)",
    destructive: "oklch(0.577 0.245 27.325)",
    destructiveForeground: "oklch(0.985 0 0)",
    border: "oklch(0.92 0.004 286.32)",
    input: "oklch(0.92 0.004 286.32)",
    ring: "oklch(0.705 0.015 286.067)",
    radius: "0.625rem"
  }, de = {
    background: "oklch(0.141 0.005 285.823)",
    foreground: "oklch(0.985 0 0)",
    card: "oklch(0.21 0.006 285.885)",
    cardForeground: "oklch(0.985 0 0)",
    popover: "oklch(0.21 0.006 285.885)",
    popoverForeground: "oklch(0.985 0 0)",
    primary: "oklch(0.92 0.004 286.32)",
    primaryForeground: "oklch(0.21 0.006 285.885)",
    secondary: "oklch(0.274 0.006 286.033)",
    secondaryForeground: "oklch(0.985 0 0)",
    muted: "oklch(0.274 0.006 286.033)",
    mutedForeground: "oklch(0.705 0.015 286.067)",
    accent: "oklch(0.274 0.006 286.033)",
    accentForeground: "oklch(0.985 0 0)",
    destructive: "oklch(0.704 0.191 22.216)",
    destructiveForeground: "oklch(0.985 0 0)",
    border: "oklch(1 0 0 / 10%)",
    input: "oklch(1 0 0 / 15%)",
    ring: "oklch(0.552 0.016 285.938)",
    radius: "0.625rem"
  }, pe = H()(W((c) => ({
    theme: {
      name: "my-custom-theme",
      synergy: true,
      light: ue,
      dark: de
    },
    setTheme: (t) => c((e) => ({
      theme: {
        ...e.theme,
        ...t
      }
    })),
    setLightColors: (t) => c((e) => {
      let o = {
        ...e.theme.light,
        ...t
      };
      return e.theme.synergy && t.primary && (o = G(o, false)), {
        theme: {
          ...e.theme,
          light: o
        }
      };
    }),
    setDarkColors: (t) => c((e) => {
      let o = {
        ...e.theme.dark,
        ...t
      };
      return e.theme.synergy && t.primary && (o = G(o, true)), {
        theme: {
          ...e.theme,
          dark: o
        }
      };
    }),
    toggleSynergy: () => c((t) => ({
      theme: {
        ...t.theme,
        synergy: !t.theme.synergy
      }
    }))
  }), {
    name: "custom-theme-storage"
  }));
  function he({ children: c, defaultTheme: t = C.defaultTheme, defaultBaseColor: e = C.defaultBaseColor, defaultPrimaryColor: o = C.defaultPrimaryColor, storageKey: s = C.storageKey, storageKeyOfTheme: u = C.storageKeyOfTheme, storageKeyOfBaseColor: d = C.storageKeyOfBaseColor, storageKeyOfPrimaryColor: h = C.storageKeyOfPrimaryColor, ...E }) {
    const [y, $] = R.useState(void 0), [_, g] = R.useState(() => localStorage.getItem(u) || localStorage.getItem(s) || t), [L, S] = R.useState(() => localStorage.getItem(d) || e), [T, V] = R.useState(() => localStorage.getItem(h) || o), k = pe((l) => l.theme);
    R.useEffect(() => {
      if (T !== "custom") {
        const i = document.getElementById("custom-theme-styles");
        i && i.remove();
        return;
      }
      let l = document.getElementById("custom-theme-styles");
      l || (l = document.createElement("style"), l.id = "custom-theme-styles", document.head.appendChild(l));
      const I = (i) => `
      --background: ${i.background};
      --foreground: ${i.foreground};
      --card: ${i.card};
      --card-foreground: ${i.cardForeground};
      --popover: ${i.popover};
      --popover-foreground: ${i.popoverForeground};
      --primary: ${i.primary};
      --primary-foreground: ${i.primaryForeground};
      --secondary: ${i.secondary};
      --secondary-foreground: ${i.secondaryForeground};
      --muted: ${i.muted};
      --muted-foreground: ${i.mutedForeground};
      --accent: ${i.accent};
      --accent-foreground: ${i.accentForeground};
      --destructive: ${i.destructive};
      --destructive-foreground: ${i.destructiveForeground};
      --border: ${i.border};
      --input: ${i.input};
      --ring: ${i.ring};
      --radius: ${i.radius};
    `;
      l.innerHTML = `
      .primary-color-custom {
        ${I(k.light)}
      }
      .dark.primary-color-custom,
      .primary-color-custom.dark,
      .dark .primary-color-custom,
      .primary-color-custom .dark {
        ${I(k.dark)}
      }
    `;
    }, [
      T,
      k
    ]), R.useEffect(() => {
      const l = window.document.documentElement;
      l.classList.remove("light", "dark"), l.classList.remove(...ie.map((i) => `base-color-${i}`)), l.classList.remove(...le.map((i) => `primary-color-${i}`));
      const I = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      $(I), _ === "system" ? l.classList.add(I) : l.classList.add(_), l.classList.add(`base-color-${L}`), l.classList.add(`primary-color-${T}`);
    }, [
      _,
      L,
      T
    ]);
    const N = {
      storageKey: s,
      defaultTheme: t,
      defaultBaseColor: e,
      defaultPrimaryColor: o,
      theme: _,
      setTheme: (l) => {
        localStorage.setItem(s, l), localStorage.setItem(u, l), g(l);
      },
      baseColor: L,
      setBaseColor: (l) => {
        localStorage.setItem(d, l), S(l);
      },
      primaryColor: T,
      setPrimaryColor: (l) => {
        localStorage.setItem(h, l), V(l);
      },
      systemTheme: y,
      storageKeyOfTheme: u,
      storageKeyOfBaseColor: d,
      storageKeyOfPrimaryColor: h
    };
    return p.jsx(b.Provider, {
      ...E,
      value: N,
      children: c
    });
  }
  function ye() {
    const [c] = R.useState(() => new D({
      defaultOptions: {
        queries: {
          staleTime: 3e5,
          retry: 1
        }
      }
    }));
    return p.jsxs(w, {
      client: c,
      children: [
        p.jsx(B, {}),
        p.jsxs(he, {
          children: [
            p.jsx(K, {}),
            p.jsx(re, {
              expand: true,
              visibleToasts: 6
            })
          ]
        })
      ]
    });
  }
  let F, _e, ge, O, ve, Re, $e, Ce, fe, Le, Te, Ie, Pe, Ee, Se, ke, Ae, Ge, Oe, De, we, be, Fe, xe, ze, Ve, Ne, je, He, We, qe, Be, Ke, Ue, Qe, Xe, Je, Ye, Ze, et, tt, ot, at, nt, rt, it, ct, lt, st, mt, ut, dt, pt, ht, yt, _t, gt, vt, Rt, Ct, Lt, It, x, m, Et, z, f, St, kt, At, Gt, P, Ot, Dt, wt, bt, Ft, xt, zt, Vt, Nt, jt, Mt, Ht, Wt, qt, Bt, Kt, Ut, Qt, Xt, Jt, Yt, Zt, eo, to, oo, ao, no, ro, io, co, lo, so, mo, uo;
  F = U({
    component: ye
  });
  _e = "modulepreload";
  ge = function(c) {
    return "/tavern/" + c;
  };
  O = {};
  r = function(t, e, o) {
    let s = Promise.resolve();
    if (e && e.length > 0) {
      let E = function(y) {
        return Promise.all(y.map(($) => Promise.resolve($).then((_) => ({
          status: "fulfilled",
          value: _
        }), (_) => ({
          status: "rejected",
          reason: _
        }))));
      };
      document.getElementsByTagName("link");
      const d = document.querySelector("meta[property=csp-nonce]"), h = (d == null ? void 0 : d.nonce) || (d == null ? void 0 : d.getAttribute("nonce"));
      s = E(e.map((y) => {
        if (y = ge(y), y in O) return;
        O[y] = true;
        const $ = y.endsWith(".css"), _ = $ ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${y}"]${_}`)) return;
        const g = document.createElement("link");
        if (g.rel = $ ? "stylesheet" : _e, $ || (g.as = "script"), g.crossOrigin = "", g.href = y, h && g.setAttribute("nonce", h), document.head.appendChild(g), $) return new Promise((L, S) => {
          g.addEventListener("load", L), g.addEventListener("error", () => S(new Error(`Unable to preload CSS for ${y}`)));
        });
      }));
    }
    function u(d) {
      const h = new Event("vite:preloadError", {
        cancelable: true
      });
      if (h.payload = d, window.dispatchEvent(h), !h.defaultPrevented) throw d;
    }
    return s.then((d) => {
      for (const h of d || []) h.status === "rejected" && u(h.reason);
      return t().catch(u);
    });
  };
  ve = () => r(() => import("./route-zMIwdcmG.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));
  Re = a("/_layout-game")({
    component: n(ve, "component")
  });
  $e = () => r(() => import("./route-BsGIgwHM.js"), __vite__mapDeps([17,1,2,3,4,5,6,10]));
  Ce = a("/_layout-game/_silly-tavern")({
    head: () => ({
      meta: [
        {
          title: "NexTavern | AI \u89D2\u8272\u626E\u6F14\u5E73\u53F0"
        },
        {
          name: "description",
          content: "\u8F7B\u91CF\u7EA7 AI \u89D2\u8272\u626E\u6F14\u5E73\u53F0\uFF0C\u652F\u6301\u89D2\u8272\u5361\u521B\u5EFA\u3001\u6311\u6218\u8BBE\u5B9A\u548C\u5BF9\u8BDD\u4F1A\u8BDD\u7BA1\u7406"
        }
      ]
    }),
    component: n($e, "component")
  });
  fe = () => r(() => import("./index-B9OSbGWq.js"), __vite__mapDeps([18,1,2,3,4,5,6,10]));
  Le = a("/_layout-game/_silly-tavern/")({
    head: () => ({
      meta: [
        {
          title: "\u6B22\u8FCE\u6765\u5230 NexTavern | Welcome to NexTavern"
        },
        {
          name: "description",
          content: "\u6B22\u8FCE\u4F7F\u7528 NexTavern\uFF0CAI \u89D2\u8272\u626E\u6F14\u521B\u4F5C\u5E73\u53F0"
        }
      ]
    }),
    component: n(fe, "component")
  });
  Te = () => r(() => import("./session-tUDpUcwd.js"), __vite__mapDeps([19,1,2,3,4,5,6,7,8,9,20,10,11,21,22,14,23,12,24,25]));
  Ie = a("/_layout-game/_silly-tavern/session")({
    head: () => ({
      meta: [
        {
          title: "\u5BF9\u8BDD\u4F1A\u8BDD | Chat Sessions"
        },
        {
          name: "description",
          content: "\u7BA1\u7406\u4F60\u7684 AI \u89D2\u8272\u626E\u6F14\u5BF9\u8BDD\u4F1A\u8BDD\uFF0C\u67E5\u770B\u5386\u53F2\u8BB0\u5F55\u548C\u7EE7\u7EED\u5BF9\u8BDD"
        }
      ]
    }),
    component: n(Te, "component")
  });
  Pe = () => r(() => import("./plaza-CW9WS35X.js"), __vite__mapDeps([26,1,2,3,4,5,6,27,7,8,9]));
  Ee = a("/_layout-game/_silly-tavern/plaza")({
    head: () => ({
      meta: [
        {
          title: "\u89D2\u8272\u5E7F\u573A | Character Plaza"
        },
        {
          name: "description",
          content: "\u6D4F\u89C8\u548C\u9009\u62E9\u89D2\u8272\u5361\u4E0E\u6311\u6218\u5361\uFF0C\u5F00\u59CB\u4F60\u7684 AI \u89D2\u8272\u626E\u6F14\u5192\u9669"
        }
      ]
    }),
    component: n(Pe, "component")
  });
  Se = () => r(() => import("./me-BMEtpYzi.js"), __vite__mapDeps([28,1,2,3,4,5,6,11,8,7,9,10]));
  ke = a("/_layout-game/_silly-tavern/me")({
    component: n(Se, "component")
  });
  Ae = () => r(() => import("./invitation-BuPKo1rc.js"), __vite__mapDeps([29,1,2,3,4,11,8,7,9,14,30,31,13,32,33,10]));
  Ge = a("/_layout-game/_silly-tavern/invitation")({
    component: n(Ae, "component")
  });
  Oe = () => r(() => import("./create-ekZes9ss.js"), __vite__mapDeps([34,1,2,3,4,5,6,31,7,8,9,10]));
  De = a("/_layout-game/_silly-tavern/create")({
    head: () => ({
      meta: [
        {
          title: "\u521B\u4F5C\u8005\u5DE5\u574A | Creator Workshop"
        },
        {
          name: "description",
          content: "\u521B\u5EFA\u548C\u7BA1\u7406\u4F60\u7684\u89D2\u8272\u5361\u4E0E\u6311\u6218\u8BBE\u5B9A\uFF0C\u6253\u9020\u72EC\u7279\u7684 AI \u89D2\u8272\u626E\u6F14\u4F53\u9A8C"
        }
      ]
    }),
    component: n(Oe, "component")
  });
  we = () => r(() => import("./admin-zbVMc6b0.js"), __vite__mapDeps([35,1,2,3,4,11,8,7,9,14,30,31,13,12,10,36,27,37]));
  be = a("/_layout-game/_silly-tavern/admin")({
    component: n(we, "component")
  });
  Fe = () => r(() => import("./route-C3Q8wEaJ.js"), __vite__mapDeps([38,1,2,3,4,5,6,11,8,7,9,23,10]));
  xe = a("/_layout-game/_silly-tavern/config")({
    head: () => ({
      meta: [
        {
          title: "\u914D\u7F6E\u7BA1\u7406 | Configuration"
        },
        {
          name: "description",
          content: "\u5E94\u7528\u914D\u7F6E\u7BA1\u7406\u4E2D\u5FC3\uFF0C\u5305\u62EC LLM \u914D\u7F6E\u3001\u7CFB\u7EDF\u8BBE\u7F6E\u7B49"
        }
      ]
    }),
    component: n(Fe, "component")
  });
  ze = a("/_layout-game/_silly-tavern/plaza/")({
    head: () => ({
      meta: [
        {
          title: "\u89D2\u8272\u5E7F\u573A | Character Plaza"
        },
        {
          name: "description",
          content: "SillyTavern \u89D2\u8272\u5E7F\u573A\uFF0C\u6D4F\u89C8\u89D2\u8272\u5361\u548C\u6311\u6218\u5361"
        }
      ]
    }),
    beforeLoad: () => {
      throw Q({
        to: "/plaza/characters"
      });
    }
  });
  Ve = () => r(() => import("./index-dTDOHMVL.js"), __vite__mapDeps([39,1,2,3,4,5,6]));
  Ne = a("/_layout-game/_silly-tavern/config/")({
    component: n(Ve, "component")
  });
  je = () => r(() => import("./session._sessionId-Dpj9YqKI.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }), __vite__mapDeps([40,1,2,3,4,5,6,24,25,41,11,8,7,9,32,33,10]));
  Me = a("/_layout-game/_silly-tavern/session/$sessionId")({
    head: () => ({
      meta: [
        {
          title: "\u5BF9\u8BDD\u4F1A\u8BDD | Chat Session"
        },
        {
          name: "description",
          content: "\u4E0E AI \u89D2\u8272\u8FDB\u884C\u5BF9\u8BDD\u4F1A\u8BDD\uFF0C\u4F53\u9A8C\u89D2\u8272\u626E\u6F14\u4E92\u52A8"
        }
      ]
    }),
    component: n(je, "component")
  });
  He = () => r(() => import("./plaza.small-town-PgtChSGv.js"), __vite__mapDeps([42,1,2,3,4,5,6,24,25,11,8,7,9,31,13,21,41,32,33,10]));
  We = a("/_layout-game/_silly-tavern/plaza/small-town")({
    head: () => ({
      meta: [
        {
          title: "\u5C0F\u9547\u6A21\u5F0F | Small Town"
        },
        {
          name: "description",
          content: "\u591A\u89D2\u8272\u81EA\u4E3B\u751F\u6D3B\u7684\u5C0F\u9547\u6A21\u62DF\u6E38\u620F"
        }
      ]
    }),
    component: n(He, "component")
  });
  qe = () => r(() => import("./plaza.group-chat-B9ceEpkQ.js"), __vite__mapDeps([43,1,2,3,4,5,6,24,25,11,8,7,9,31,13,21,10]));
  Be = a("/_layout-game/_silly-tavern/plaza/group-chat")({
    head: () => ({
      meta: [
        {
          title: "\u7FA4\u804A\u5E7F\u573A | Group Chat Plaza"
        },
        {
          name: "description",
          content: "\u6D4F\u89C8\u548C\u7BA1\u7406\u4F60\u7684\u7FA4\u804A\u4F1A\u8BDD"
        }
      ]
    }),
    component: n(qe, "component")
  });
  Ke = () => r(() => import("./plaza.dnd-D9g2aveG.js"), __vite__mapDeps([44,1,2,3,4,5,6,24,25,11,8,7,9,31,13,21,41,32,33,10]));
  Ue = a("/_layout-game/_silly-tavern/plaza/dnd")({
    head: () => ({
      meta: [
        {
          title: "DnD \u5192\u9669\u5E7F\u573A | DnD Adventures"
        },
        {
          name: "description",
          content: "\u6D4F\u89C8\u548C\u7BA1\u7406\u4F60\u7684 DnD \u684C\u6E38\u5192\u9669\u4F1A\u8BDD"
        }
      ]
    }),
    component: n(Ke, "component")
  });
  Qe = () => r(() => import("./plaza.characters-BpzcLqBL.js"), __vite__mapDeps([45,1,2,3,4,5,6,46,14,7,8,9,13,11,47,10,12,30,48,24,25,49,31,22,37]));
  Xe = a("/_layout-game/_silly-tavern/plaza/characters")({
    head: () => ({
      meta: [
        {
          title: "\u89D2\u8272\u5361\u5E7F\u573A | Character Cards Plaza"
        },
        {
          name: "description",
          content: "\u6D4F\u89C8\u548C\u9009\u62E9\u89D2\u8272\u5361\uFF0C\u4E0E AI \u89D2\u8272\u5F00\u59CB\u5BF9\u8BDD\u548C\u89D2\u8272\u626E\u6F14"
        }
      ]
    }),
    component: n(Qe, "component")
  });
  Je = () => r(() => import("./plaza.challenges-CvL7Xz6Y.js"), __vite__mapDeps([50,1,2,3,4,5,6,46,14,7,8,9,13,11,47,10,12,30,48,24,25,49,31]));
  Ye = a("/_layout-game/_silly-tavern/plaza/challenges")({
    head: () => ({
      meta: [
        {
          title: "\u6311\u6218\u5361\u5E7F\u573A | Challenge Cards Plaza"
        },
        {
          name: "description",
          content: "\u6D4F\u89C8\u548C\u9009\u62E9\u6311\u6218\u5361\uFF0C\u4F53\u9A8C\u4E0D\u540C\u7684 AI \u89D2\u8272\u626E\u6F14\u6311\u6218\u6A21\u5F0F"
        }
      ]
    }),
    component: n(Je, "component")
  });
  Ze = () => r(() => import("./create_.small-town-BYPqWFcy.js"), __vite__mapDeps([51,1,2,3,4,5,6,33,24,25,52,7,8,9,11,14,53,30,31,13,22,10,37,54,41,32]));
  et = a("/_layout-game/_silly-tavern/create_/small-town")({
    head: () => ({
      meta: [
        {
          title: "\u521B\u5EFA\u5C0F\u9547 | Create Small Town"
        },
        {
          name: "description",
          content: "\u9009\u62E9\u89D2\u8272\uFF0C\u521B\u5EFA\u4E00\u4E2A\u591A\u89D2\u8272\u81EA\u4E3B\u751F\u6D3B\u7684\u5C0F\u9547\u6A21\u62DF"
        }
      ]
    }),
    component: n(Ze, "component")
  });
  tt = () => r(() => import("./create_.novel-writing-Bv-2kB2D.js"), __vite__mapDeps([55,1,2,3,4,5,6,24,25,33,11,8,7,9,14,30,31,10]));
  ot = a("/_layout-game/_silly-tavern/create_/novel-writing")({
    head: () => ({
      meta: [
        {
          title: "\u521B\u5EFA\u5C0F\u8BF4\u9879\u76EE | Create Novel Project"
        },
        {
          name: "description",
          content: "\u5F00\u59CB\u4F60\u7684\u5C0F\u8BF4\u521B\u4F5C\u4E4B\u65C5\uFF0CAI \u8F85\u52A9\u4ECE\u6784\u601D\u5230\u5B8C\u6210"
        }
      ]
    }),
    component: n(tt, "component")
  });
  at = () => r(() => import("./create_.group-chat-fiTsvniW.js"), __vite__mapDeps([56,1,2,3,4,5,6,33,24,25,54,11,8,7,9,31,14,30,53,13,22,10]));
  nt = a("/_layout-game/_silly-tavern/create_/group-chat")({
    head: () => ({
      meta: [
        {
          title: "\u521B\u5EFA\u7FA4\u804A | Create Group Chat"
        },
        {
          name: "description",
          content: "\u9009\u62E9 AI \u89D2\u8272\u521B\u5EFA\u7FA4\u804A\u4F1A\u8BDD"
        }
      ]
    }),
    component: n(at, "component")
  });
  rt = () => r(() => import("./create_.dnd-D_-lQVrV.js"), __vite__mapDeps([57,1,2,3,4,5,6,33,24,25,11,8,7,9,14,53,30,31,13,22,10,37,36,54,41,32]));
  it = a("/_layout-game/_silly-tavern/create_/dnd")({
    head: () => ({
      meta: [
        {
          title: "\u521B\u5EFA DnD \u5192\u9669 | Create DnD Adventure"
        },
        {
          name: "description",
          content: "\u914D\u7F6E\u4E16\u754C\u8BBE\u5B9A\u548C\u5192\u9669\u89D2\u8272\uFF0C\u5F00\u542F\u4E00\u6BB5 DnD \u684C\u6E38\u98CE\u683C\u7684\u591A\u4EBA\u5192\u9669"
        }
      ]
    }),
    component: n(rt, "component")
  });
  ct = () => r(() => import("./create_.chat-character-CsbLHQ8p.js"), __vite__mapDeps([58,1,2,3,4,5,6,11,8,7,9,53,31,13,33,24,25,59,60,16,15,10]));
  lt = a("/_layout-game/_silly-tavern/create_/chat-character")({
    head: () => ({
      meta: [
        {
          title: "\u804A\u5929\u5F0F\u521B\u5EFA\u89D2\u8272 | Chat Create Character"
        },
        {
          name: "description",
          content: "\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u521B\u5EFA AI \u89D2\u8272\u5361"
        }
      ]
    }),
    component: n(ct, "component")
  });
  st = () => r(() => import("./create_.chat-challenge-Clx_oqyE.js"), __vite__mapDeps([61,1,2,3,4,5,6,11,8,7,9,53,31,13,33,24,25,59,60,16,15,10]));
  mt = a("/_layout-game/_silly-tavern/create_/chat-challenge")({
    head: () => ({
      meta: [
        {
          title: "\u804A\u5929\u5F0F\u521B\u5EFA\u6311\u6218 | Chat Create Challenge"
        },
        {
          name: "description",
          content: "\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u521B\u5EFA\u6311\u6218\u5361"
        }
      ]
    }),
    component: n(st, "component")
  });
  ut = () => r(() => import("./create_.character-DTyFaDSF.js"), __vite__mapDeps([62,1,2,3,4,5,6,63,11,8,7,9,14,53,31,30,10,64,24,25]));
  dt = a("/_layout-game/_silly-tavern/create_/character")({
    head: () => ({
      meta: [
        {
          title: "\u521B\u5EFA\u89D2\u8272\u5361 | Create Character Card"
        },
        {
          name: "description",
          content: "\u521B\u5EFA\u65B0\u7684 AI \u89D2\u8272\u5361\uFF0C\u5B9A\u4E49\u4EBA\u683C\u3001\u80CC\u666F\u548C\u5BF9\u8BDD\u98CE\u683C"
        }
      ]
    }),
    component: n(ut, "component")
  });
  pt = () => r(() => import("./create_.challenge-Ck_xOQK7.js"), __vite__mapDeps([65,1,2,3,4,5,6,11,8,7,9,14,53,31,30,27,36,10,13,33,64,24,25]));
  ht = a("/_layout-game/_silly-tavern/create_/challenge")({
    head: () => ({
      meta: [
        {
          title: "\u521B\u5EFA\u6311\u6218\u5361 | Create Challenge Card"
        },
        {
          name: "description",
          content: "\u521B\u5EFA\u65B0\u7684\u6311\u6218\u5361\uFF0C\u8BBE\u5B9A\u4E16\u754C\u53D8\u91CF\u3001\u6210\u5C31\u76EE\u6807\u548C DM \u5F15\u5BFC\u89C4\u5219"
        }
      ]
    }),
    component: n(pt, "component")
  });
  yt = () => r(() => import("./settings-BVVEkAAX.js"), __vite__mapDeps([66,1,2,3,4,31,7,8,9,11,14,30,64,53]));
  _t = a("/_layout-game/_silly-tavern/config/settings")({
    head: () => ({
      meta: [
        {
          title: "\u5E94\u7528\u8BBE\u7F6E | Application Settings"
        },
        {
          name: "description",
          content: "\u7BA1\u7406\u5E94\u7528\u7684\u57FA\u672C\u914D\u7F6E\u3001\u504F\u597D\u8BBE\u7F6E\u548C\u7528\u6237\u9009\u9879"
        }
      ]
    }),
    component: n(yt, "component")
  });
  gt = () => r(() => import("./overview-DAzD2HfX.js"), __vite__mapDeps([67,1,2,3,4,5,6,31,7,8,9,11]));
  vt = a("/_layout-game/_silly-tavern/config/overview")({
    head: () => ({
      meta: [
        {
          title: "\u914D\u7F6E\u7BA1\u7406\u6982\u89C8 | Configuration Overview"
        },
        {
          name: "description",
          content: "\u914D\u7F6E\u7BA1\u7406\u4E2D\u5FC3\u6982\u89C8\uFF0C\u5C55\u793A\u6240\u6709\u53EF\u914D\u7F6E\u7684\u9879\u76EE\u548C\u8BBE\u7F6E"
        }
      ]
    }),
    component: n(gt, "component")
  });
  Rt = () => r(() => import("./llm-D70x7Zl0.js"), __vite__mapDeps([68,1,2,3,4,11,8,7,9,14,30,36,10,37,60,33,16,5,6]));
  $t = a("/_layout-game/_silly-tavern/config/llm")({
    head: () => ({
      meta: [
        {
          title: "LLM \u914D\u7F6E | LLM Configuration"
        },
        {
          name: "description",
          content: "\u7BA1\u7406\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\uFF0C\u5305\u62EC API \u5BC6\u94A5\u3001\u6A21\u578B\u9009\u62E9\u548C\u8C03\u7528\u53C2\u6570"
        }
      ]
    }),
    component: n(Rt, "component")
  });
  Ct = () => r(() => import("./characters_._characterId-Ck4xmy6T.js"), __vite__mapDeps([69,1,2,3,4,5,6,24,25,11,8,7,9,13,22,10,31,27,20,70,12,54,14,30,53,48,37,21]));
  ft = a("/_layout-game/_silly-tavern/characters_/$characterId")({
    head: () => ({
      meta: [
        {
          title: "\u89D2\u8272\u8BE6\u60C5 | Character Details"
        },
        {
          name: "description",
          content: "\u67E5\u770B\u89D2\u8272\u5361\u8BE6\u60C5\u3001\u4F1A\u8BDD\u5386\u53F2\u548C\u7BA1\u7406\u89D2\u8272\u8BBE\u7F6E"
        }
      ]
    }),
    component: n(Ct, "component")
  });
  Lt = () => r(() => import("./challenges_._challengeId-CZfYYOMw.js"), __vite__mapDeps([71,1,2,3,4,5,6,24,25,11,8,7,9,13,31,10,27,70,12,54,14,30,53,22,33,21]));
  Tt = a("/_layout-game/_silly-tavern/challenges_/$challengeId")({
    head: () => ({
      meta: [
        {
          title: "\u6311\u6218\u8BE6\u60C5 | Challenge Details"
        },
        {
          name: "description",
          content: "\u67E5\u770B\u6311\u6218\u5361\u8BE6\u60C5\u3001\u89C4\u5219\u8BBE\u7F6E\u548C\u76F8\u5173\u4F1A\u8BDD\u8BB0\u5F55"
        }
      ]
    }),
    component: n(Lt, "component")
  });
  It = () => r(() => import("./characters_._characterId_.edit-BA8zkzJZ.js"), __vite__mapDeps([72,1,2,3,4,5,6,63,11,8,7,9,14,53,31,30,10,64,24,25]));
  Pt = a("/_layout-game/_silly-tavern/characters_/$characterId_/edit")({
    head: () => ({
      meta: [
        {
          title: "\u7F16\u8F91\u89D2\u8272\u5361 | Edit Character Card"
        },
        {
          name: "description",
          content: "\u7F16\u8F91\u73B0\u6709\u89D2\u8272\u5361\u7684\u5C5E\u6027\u3001\u80CC\u666F\u548C\u5BF9\u8BDD\u8BBE\u7F6E"
        }
      ]
    }),
    component: n(It, "component")
  });
  x = Re.update({
    id: "/_layout-game",
    getParentRoute: () => F
  });
  m = Ce.update({
    id: "/_silly-tavern",
    getParentRoute: () => x
  });
  Et = Le.update({
    id: "/",
    path: "/",
    getParentRoute: () => m
  });
  z = Ie.update({
    id: "/session",
    path: "/session",
    getParentRoute: () => m
  });
  f = Ee.update({
    id: "/plaza",
    path: "/plaza",
    getParentRoute: () => m
  });
  St = ke.update({
    id: "/me",
    path: "/me",
    getParentRoute: () => m
  });
  kt = Ge.update({
    id: "/invitation",
    path: "/invitation",
    getParentRoute: () => m
  });
  At = De.update({
    id: "/create",
    path: "/create",
    getParentRoute: () => m
  });
  Gt = be.update({
    id: "/admin",
    path: "/admin",
    getParentRoute: () => m
  });
  P = xe.update({
    id: "/config",
    path: "/config",
    getParentRoute: () => m
  });
  Ot = ze.update({
    id: "/",
    path: "/",
    getParentRoute: () => f
  });
  Dt = Ne.update({
    id: "/",
    path: "/",
    getParentRoute: () => P
  });
  wt = Me.update({
    id: "/$sessionId",
    path: "/$sessionId",
    getParentRoute: () => z
  });
  bt = We.update({
    id: "/small-town",
    path: "/small-town",
    getParentRoute: () => f
  });
  Ft = Be.update({
    id: "/group-chat",
    path: "/group-chat",
    getParentRoute: () => f
  });
  xt = Ue.update({
    id: "/dnd",
    path: "/dnd",
    getParentRoute: () => f
  });
  zt = Xe.update({
    id: "/characters",
    path: "/characters",
    getParentRoute: () => f
  });
  Vt = Ye.update({
    id: "/challenges",
    path: "/challenges",
    getParentRoute: () => f
  });
  Nt = et.update({
    id: "/create_/small-town",
    path: "/create/small-town",
    getParentRoute: () => m
  });
  jt = ot.update({
    id: "/create_/novel-writing",
    path: "/create/novel-writing",
    getParentRoute: () => m
  });
  Mt = nt.update({
    id: "/create_/group-chat",
    path: "/create/group-chat",
    getParentRoute: () => m
  });
  Ht = it.update({
    id: "/create_/dnd",
    path: "/create/dnd",
    getParentRoute: () => m
  });
  Wt = lt.update({
    id: "/create_/chat-character",
    path: "/create/chat-character",
    getParentRoute: () => m
  });
  qt = mt.update({
    id: "/create_/chat-challenge",
    path: "/create/chat-challenge",
    getParentRoute: () => m
  });
  Bt = dt.update({
    id: "/create_/character",
    path: "/create/character",
    getParentRoute: () => m
  });
  Kt = ht.update({
    id: "/create_/challenge",
    path: "/create/challenge",
    getParentRoute: () => m
  });
  Ut = _t.update({
    id: "/settings",
    path: "/settings",
    getParentRoute: () => P
  });
  Qt = vt.update({
    id: "/overview",
    path: "/overview",
    getParentRoute: () => P
  });
  Xt = $t.update({
    id: "/llm",
    path: "/llm",
    getParentRoute: () => P
  });
  Jt = ft.update({
    id: "/characters_/$characterId",
    path: "/characters/$characterId",
    getParentRoute: () => m
  });
  Yt = Tt.update({
    id: "/challenges_/$challengeId",
    path: "/challenges/$challengeId",
    getParentRoute: () => m
  });
  Zt = Pt.update({
    id: "/characters_/$characterId_/edit",
    path: "/characters/$characterId/edit",
    getParentRoute: () => m
  });
  eo = {
    LayoutGameSillyTavernConfigLlmRoute: Xt,
    LayoutGameSillyTavernConfigOverviewRoute: Qt,
    LayoutGameSillyTavernConfigSettingsRoute: Ut,
    LayoutGameSillyTavernConfigIndexRoute: Dt
  };
  to = P._addFileChildren(eo);
  oo = {
    LayoutGameSillyTavernPlazaChallengesRoute: Vt,
    LayoutGameSillyTavernPlazaCharactersRoute: zt,
    LayoutGameSillyTavernPlazaDndRoute: xt,
    LayoutGameSillyTavernPlazaGroupChatRoute: Ft,
    LayoutGameSillyTavernPlazaSmallTownRoute: bt,
    LayoutGameSillyTavernPlazaIndexRoute: Ot
  };
  ao = f._addFileChildren(oo);
  no = {
    LayoutGameSillyTavernSessionSessionIdRoute: wt
  };
  ro = z._addFileChildren(no);
  io = {
    LayoutGameSillyTavernConfigRouteRoute: to,
    LayoutGameSillyTavernAdminRoute: Gt,
    LayoutGameSillyTavernCreateRoute: At,
    LayoutGameSillyTavernInvitationRoute: kt,
    LayoutGameSillyTavernMeRoute: St,
    LayoutGameSillyTavernPlazaRoute: ao,
    LayoutGameSillyTavernSessionRoute: ro,
    LayoutGameSillyTavernIndexRoute: Et,
    LayoutGameSillyTavernChallengesChallengeIdRoute: Yt,
    LayoutGameSillyTavernCharactersCharacterIdRoute: Jt,
    LayoutGameSillyTavernCreateChallengeRoute: Kt,
    LayoutGameSillyTavernCreateCharacterRoute: Bt,
    LayoutGameSillyTavernCreateChatChallengeRoute: qt,
    LayoutGameSillyTavernCreateChatCharacterRoute: Wt,
    LayoutGameSillyTavernCreateDndRoute: Ht,
    LayoutGameSillyTavernCreateGroupChatRoute: Mt,
    LayoutGameSillyTavernCreateNovelWritingRoute: jt,
    LayoutGameSillyTavernCreateSmallTownRoute: Nt,
    LayoutGameSillyTavernCharactersCharacterIdEditRoute: Zt
  };
  co = m._addFileChildren(io);
  lo = {
    LayoutGameSillyTavernRouteRoute: co
  };
  so = x._addFileChildren(lo);
  mo = {
    LayoutGameRouteRoute: so
  };
  uo = F._addFileChildren(mo)._addFileTypes();
  ne({
    interval: 2e3,
    tkName: "dev",
    md5: "43f1516c98cf02ba06d7406c37ad52f0",
    url: "https://nexworld.wiki/",
    timeOutUrl: "https://nexworld.wiki/"
  });
  const po = X(), ho = J({
    routeTree: uo,
    history: po,
    defaultPreload: "intent",
    scrollRestoration: true
  }), yo = new D(), A = document.getElementById("app");
  A && !A.innerHTML && q.createRoot(A).render(p.jsx(w, {
    client: yo,
    children: p.jsx(Y, {
      router: ho
    })
  }));
})();
export {
  Me as R,
  r as _,
  __tla,
  $t as a,
  ft as b,
  Tt as c,
  Pt as d,
  ce as p,
  Lo as u
};
