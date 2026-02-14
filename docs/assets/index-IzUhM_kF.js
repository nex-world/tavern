const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/invitation-CtPD0x4E.js","assets/react-D9TtqY-V.js","assets/vendor-C4ToNUTj.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/button-CMoAlsw3.js","assets/components-and-styling-lnR2ABT4.js","assets/shadcn-utils-BMZD7_jZ.js","assets/@tailwind-COJ8Fh6m.js","assets/input-CtGFdN_9.js","assets/label-CBzbyhxK.js","assets/card-85OZoUtz.js","assets/badge-B6qKYUZD.js","assets/nex-tavern-uuid-HW61e36x.js","assets/id-OxPLOBIU.js","assets/icons-bBaH0MBC.js","assets/admin-DL-Cp0JP.js","assets/dialog-v6BqSj-g.js","assets/select-BTDHXfPN.js","assets/tabs-D5XuT8p1.js","assets/checkbox-DyRtCSLW.js","assets/route-Ces7FN1I.js","assets/@tanstack-3iyDWv8L.js","assets/dexie-C2pyTzVO.js","assets/app-configurations-Cz44104t.js","assets/es-toolkit-CstbrnlE.js","assets/route--lzTgLzI.js","assets/index-CNlNkcA8.js","assets/session-DCExh3wH.js","assets/mode-registry-feswD2MX.js","assets/alert-dialog-Bxna6sSR.js","assets/sheet-Bz0o77KW.js","assets/db-master-BrZHBPj2.js","assets/zod-fbN9ubnj.js","assets/plaza-D9XOQikb.js","assets/create-B8A2HLPx.js","assets/route-SHSubnIC.js","assets/index-Cd6NeO-V.js","assets/session._sessionId-CpjSGp1-.js","assets/InvitationGuard-HXq7MeQC.js","assets/plaza.small-town-CQa00HDK.js","assets/plaza.group-chat-Bq3SWTSE.js","assets/plaza.dnd-BoY8v9Gt.js","assets/plaza.characters-D2GktCa-.js","assets/ImportCardDialog-BQxa7hMZ.js","assets/gsap-DDlvirwQ.js","assets/card-converters-CUCioum9.js","assets/ImportCardDialog-DvwNuPEv.css","assets/plaza.challenges-BIdQNz-7.js","assets/create_.small-town-i6ElD3Wb.js","assets/slider-D-CCs0Tm.js","assets/textarea-NuAUq_bK.js","assets/llm-readiness-DgR8F2ee.js","assets/create_.novel-writing-C9nLVXPf.js","assets/create_.group-chat-C0d9q3Yl.js","assets/create_.dnd-BRzn15-H.js","assets/create_.chat-character-Bw5AFpQz.js","assets/useLLM-tAU3ECR6.js","assets/global-llm-config.store-C91qlFOh.js","assets/create_.chat-challenge-D4A-nTyR.js","assets/create_.character-C_VB8UFO.js","assets/CharacterCreationForm-djD1miHk.js","assets/switch-CGreuh1l.js","assets/create_.challenge-BfvRvmYs.js","assets/settings--6DcB4Zn.js","assets/overview-NbPB89SI.js","assets/llm-Dr9MZpOU.js","assets/characters_._characterId-B6UBRRH9.js","assets/SessionSetupWizard-CsDv7O_p.js","assets/challenges_._challengeId-B3gn3XcX.js","assets/characters_._characterId_.edit-Cw5YgDqv.js"])))=>i.map(i=>d[i]);
import { z as N, j as p, T as j, r as R, d as M, p as H, e as W } from "./react-D9TtqY-V.js";
import { Q as b, a as D, H as q, O as B, c as K, b as a, l as n, r as U, d as Q, e as X, R as J } from "./@tanstack-3iyDWv8L.js";
import { L as Y, O as Z, T as ee, I as te, C as oe } from "./icons-bBaH0MBC.js";
import { v as ae } from "./vendor-C4ToNUTj.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C2pyTzVO.js";
let Ne, r, vt, $t, ft, It, ie, $o;
let __tla = (async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
    new MutationObserver((s) => {
      for (const m of s) if (m.type === "childList") for (const d of m.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && o(d);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function e(s) {
      const m = {};
      return s.integrity && (m.integrity = s.integrity), s.referrerPolicy && (m.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? m.credentials = "include" : s.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin", m;
    }
    function o(s) {
      if (s.ep) return;
      s.ep = true;
      const m = e(s);
      fetch(s.href, m);
    }
  })();
  let ne, re, ce, se, w, le;
  ne = ({ ...c }) => {
    const { theme: t = "system" } = N();
    return p.jsx(j, {
      theme: t,
      className: "toaster group",
      icons: {
        success: p.jsx(oe, {
          className: "size-4"
        }),
        info: p.jsx(te, {
          className: "size-4"
        }),
        warning: p.jsx(ee, {
          className: "size-4"
        }),
        error: p.jsx(Z, {
          className: "size-4"
        }),
        loading: p.jsx(Y, {
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
  re = [
    "neutral",
    "stone",
    "zinc",
    "gray",
    "slate"
  ];
  ie = {
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
  ce = Object.values(ie).flat();
  se = {
    storageKey: "vite-ui-theme",
    defaultTheme: "dark",
    defaultBaseColor: "zinc",
    defaultPrimaryColor: "violet",
    theme: "dark",
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
  w = R.createContext(se);
  $o = () => {
    const c = R.useContext(w);
    if (c === void 0) throw new Error("useTheme must be used within a ThemeProvider");
    return c;
  };
  le = /oklch\(([\d.]+)%?\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+)%?)?\)/;
  function me(c) {
    const t = c.match(le);
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
  function O(c, t) {
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
  }, pe = M()(H((c) => ({
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
      return e.theme.synergy && t.primary && (o = O(o, false)), {
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
      return e.theme.synergy && t.primary && (o = O(o, true)), {
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
  function he({ children: c, defaultTheme: t = "system", defaultBaseColor: e = "zinc", defaultPrimaryColor: o = "default", storageKey: s = "vite-ui-theme", storageKeyOfTheme: m = "vite-ui-theme", storageKeyOfBaseColor: d = "vite-ui-base-color", storageKeyOfPrimaryColor: h = "vite-ui-primary-color", ...E }) {
    const [y, $] = R.useState(void 0), [_, g] = R.useState(() => localStorage.getItem(m) || localStorage.getItem(s) || t), [f, S] = R.useState(() => localStorage.getItem(d) || e), [T, z] = R.useState(() => localStorage.getItem(h) || o), k = pe((l) => l.theme);
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
      l.classList.remove("light", "dark"), l.classList.remove(...re.map((i) => `base-color-${i}`)), l.classList.remove(...ce.map((i) => `primary-color-${i}`));
      const I = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      $(I), _ === "system" ? l.classList.add(I) : l.classList.add(_), l.classList.add(`base-color-${f}`), l.classList.add(`primary-color-${T}`);
    }, [
      _,
      f,
      T
    ]);
    const V = {
      storageKey: s,
      defaultTheme: t,
      defaultBaseColor: e,
      defaultPrimaryColor: o,
      theme: _,
      setTheme: (l) => {
        localStorage.setItem(s, l), localStorage.setItem(m, l), g(l);
      },
      baseColor: f,
      setBaseColor: (l) => {
        localStorage.setItem(d, l), S(l);
      },
      primaryColor: T,
      setPrimaryColor: (l) => {
        localStorage.setItem(h, l), z(l);
      },
      systemTheme: y,
      storageKeyOfTheme: s,
      storageKeyOfBaseColor: "vite-ui-base-color",
      storageKeyOfPrimaryColor: "vite-ui-primary-color"
    };
    return p.jsx(w.Provider, {
      ...E,
      value: V,
      children: c
    });
  }
  function ye() {
    const [c] = R.useState(() => new b({
      defaultOptions: {
        queries: {
          staleTime: 3e5,
          retry: 1
        }
      }
    }));
    return p.jsxs(D, {
      client: c,
      children: [
        p.jsx(q, {}),
        p.jsxs(he, {
          defaultTheme: "dark",
          storageKey: "allinone-webapp-ui-theme",
          children: [
            p.jsx(B, {}),
            p.jsx(ne, {
              expand: true,
              visibleToasts: 6
            })
          ]
        })
      ]
    });
  }
  let P, _e, ge, G, ve, Re, $e, Ce, fe, Te, Ie, Le, Pe, Ee, Se, ke, Ae, Oe, Ge, be, De, we, Fe, xe, ze, Ve, je, Me, He, We, qe, Be, Ke, Ue, Qe, Xe, Je, Ye, Ze, et, tt, ot, at, nt, rt, it, ct, st, lt, mt, ut, dt, pt, ht, yt, _t, gt, Rt, Ct, Tt, Lt, Pt, F, u, Et, x, C, St, L, kt, At, Ot, Gt, bt, Dt, wt, Ft, xt, zt, Vt, Nt, jt, Mt, Ht, Wt, qt, Bt, Kt, Ut, Qt, Xt, Jt, Yt, Zt, eo, to, oo, ao, no, ro, io, co, so;
  P = K({
    component: ye
  });
  _e = "modulepreload";
  ge = function(c) {
    return "/tavern/" + c;
  };
  G = {};
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
        if (y = ge(y), y in G) return;
        G[y] = true;
        const $ = y.endsWith(".css"), _ = $ ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${y}"]${_}`)) return;
        const g = document.createElement("link");
        if (g.rel = $ ? "stylesheet" : _e, $ || (g.as = "script"), g.crossOrigin = "", g.href = y, h && g.setAttribute("nonce", h), document.head.appendChild(g), $) return new Promise((f, S) => {
          g.addEventListener("load", f), g.addEventListener("error", () => S(new Error(`Unable to preload CSS for ${y}`)));
        });
      }));
    }
    function m(d) {
      const h = new Event("vite:preloadError", {
        cancelable: true
      });
      if (h.payload = d, window.dispatchEvent(h), !h.defaultPrevented) throw d;
    }
    return s.then((d) => {
      for (const h of d || []) h.status === "rejected" && m(h.reason);
      return t().catch(m);
    });
  };
  ve = () => r(() => import("./invitation-CtPD0x4E.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
  Re = a("/invitation")({
    component: n(ve, "component")
  });
  $e = () => r(() => import("./admin-DL-Cp0JP.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11,12,17,15,18,19,20]));
  Ce = a("/admin")({
    component: n($e, "component")
  });
  fe = () => r(() => import("./route-Ces7FN1I.js"), __vite__mapDeps([21,1,2,3,4,22,23,7,6,8,15,5,17,12,9,24,25]));
  Te = a("/_layout-game")({
    component: n(fe, "component")
  });
  Ie = () => r(() => import("./route--lzTgLzI.js"), __vite__mapDeps([26,1,2,3,4,22,23,15]));
  Le = a("/_layout-game/_silly-tavern")({
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
    component: n(Ie, "component")
  });
  Pe = () => r(() => import("./index-CNlNkcA8.js"), __vite__mapDeps([27,1,2,3,4,22,23,15]));
  Ee = a("/_layout-game/_silly-tavern/")({
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
    component: n(Pe, "component")
  });
  Se = () => r(() => import("./session-DCExh3wH.js"), __vite__mapDeps([28,1,2,3,4,22,23,7,6,8,29,15,5,30,9,31,17,32,33]));
  ke = a("/_layout-game/_silly-tavern/session")({
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
    component: n(Se, "component")
  });
  Ae = () => r(() => import("./plaza-D9XOQikb.js"), __vite__mapDeps([34,1,2,3,4,22,23,19,7,6,8]));
  Oe = a("/_layout-game/_silly-tavern/plaza")({
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
    component: n(Ae, "component")
  });
  Ge = () => r(() => import("./create-B8A2HLPx.js"), __vite__mapDeps([35,1,2,3,4,22,23,11,7,6,8,15]));
  be = a("/_layout-game/_silly-tavern/create")({
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
    component: n(Ge, "component")
  });
  De = () => r(() => import("./route-SHSubnIC.js"), __vite__mapDeps([36,1,2,3,4,22,23,5,6,7,8,31,15]));
  we = a("/_layout-game/_silly-tavern/config")({
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
    component: n(De, "component")
  });
  Fe = a("/_layout-game/_silly-tavern/plaza/")({
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
      throw U({
        to: "/plaza/characters"
      });
    }
  });
  xe = () => r(() => import("./index-Cd6NeO-V.js"), __vite__mapDeps([37,1,2,3,4,22,23]));
  ze = a("/_layout-game/_silly-tavern/config/")({
    component: n(xe, "component")
  });
  Ve = () => r(() => import("./session._sessionId-CpjSGp1-.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([38,1,2,3,4,22,23,32,33,39,5,6,7,8,13,14,15]));
  Ne = a("/_layout-game/_silly-tavern/session/$sessionId")({
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
    component: n(Ve, "component")
  });
  je = () => r(() => import("./plaza.small-town-CQa00HDK.js"), __vite__mapDeps([40,1,2,3,4,22,23,32,33,5,6,7,8,11,12,30,39,13,14,15]));
  Me = a("/_layout-game/_silly-tavern/plaza/small-town")({
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
    component: n(je, "component")
  });
  He = () => r(() => import("./plaza.group-chat-Bq3SWTSE.js"), __vite__mapDeps([41,1,2,3,4,22,23,32,33,5,6,7,8,11,12,30,15]));
  We = a("/_layout-game/_silly-tavern/plaza/group-chat")({
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
    component: n(He, "component")
  });
  qe = () => r(() => import("./plaza.dnd-BoY8v9Gt.js"), __vite__mapDeps([42,1,2,3,4,22,23,32,33,5,6,7,8,11,12,30,39,13,14,15]));
  Be = a("/_layout-game/_silly-tavern/plaza/dnd")({
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
    component: n(qe, "component")
  });
  Ke = () => r(() => import("./plaza.characters-D2GktCa-.js"), __vite__mapDeps([43,1,2,3,4,22,23,44,9,7,6,8,12,5,45,15,17,10,46,32,33,47,11,20]));
  Ue = a("/_layout-game/_silly-tavern/plaza/characters")({
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
    component: n(Ke, "component")
  });
  Qe = () => r(() => import("./plaza.challenges-BIdQNz-7.js"), __vite__mapDeps([48,1,2,3,4,22,23,44,9,7,6,8,12,5,45,15,17,10,46,32,33,47,11]));
  Xe = a("/_layout-game/_silly-tavern/plaza/challenges")({
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
    component: n(Qe, "component")
  });
  Je = () => r(() => import("./create_.small-town-i6ElD3Wb.js"), __vite__mapDeps([49,1,2,3,4,22,23,14,32,33,50,7,6,8,5,9,51,10,11,12,20,15,52,39,13]));
  Ye = a("/_layout-game/_silly-tavern/create_/small-town")({
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
    component: n(Je, "component")
  });
  Ze = () => r(() => import("./create_.novel-writing-C9nLVXPf.js"), __vite__mapDeps([53,1,2,3,4,22,23,32,33,14,5,6,7,8,9,10,11,15]));
  et = a("/_layout-game/_silly-tavern/create_/novel-writing")({
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
    component: n(Ze, "component")
  });
  tt = () => r(() => import("./create_.group-chat-C0d9q3Yl.js"), __vite__mapDeps([54,1,2,3,4,22,23,14,32,33,52,5,6,7,8,11,9,10,51,12,15]));
  ot = a("/_layout-game/_silly-tavern/create_/group-chat")({
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
    component: n(tt, "component")
  });
  at = () => r(() => import("./create_.dnd-BRzn15-H.js"), __vite__mapDeps([55,1,2,3,4,22,23,14,32,33,5,6,7,8,9,51,10,11,12,20,15,18,52,39,13]));
  nt = a("/_layout-game/_silly-tavern/create_/dnd")({
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
    component: n(at, "component")
  });
  rt = () => r(() => import("./create_.chat-character-Bw5AFpQz.js"), __vite__mapDeps([56,1,2,3,4,22,23,5,6,7,8,51,11,12,14,32,33,57,58,25,24,15]));
  it = a("/_layout-game/_silly-tavern/create_/chat-character")({
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
    component: n(rt, "component")
  });
  ct = () => r(() => import("./create_.chat-challenge-D4A-nTyR.js"), __vite__mapDeps([59,1,2,3,4,22,23,5,6,7,8,51,11,12,14,32,33,57,58,25,24,15]));
  st = a("/_layout-game/_silly-tavern/create_/chat-challenge")({
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
    component: n(ct, "component")
  });
  lt = () => r(() => import("./create_.character-C_VB8UFO.js"), __vite__mapDeps([60,1,2,3,4,22,23,61,5,6,7,8,9,51,11,10,15,62,32,33]));
  mt = a("/_layout-game/_silly-tavern/create_/character")({
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
    component: n(lt, "component")
  });
  ut = () => r(() => import("./create_.challenge-BfvRvmYs.js"), __vite__mapDeps([63,1,2,3,4,22,23,5,6,7,8,9,51,11,10,19,18,15,12,14,62,32,33]));
  dt = a("/_layout-game/_silly-tavern/create_/challenge")({
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
    component: n(ut, "component")
  });
  pt = () => r(() => import("./settings--6DcB4Zn.js"), __vite__mapDeps([64,1,2,3,4,11,7,6,8,5,9,10,62,51]));
  ht = a("/_layout-game/_silly-tavern/config/settings")({
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
    component: n(pt, "component")
  });
  yt = () => r(() => import("./overview-NbPB89SI.js"), __vite__mapDeps([65,1,2,3,4,22,23,11,7,6,8,5]));
  _t = a("/_layout-game/_silly-tavern/config/overview")({
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
    component: n(yt, "component")
  });
  gt = () => r(() => import("./llm-Dr9MZpOU.js"), __vite__mapDeps([66,1,2,3,4,5,6,7,8,9,10,18,15,20,58,14,25,22,23]));
  vt = a("/_layout-game/_silly-tavern/config/llm")({
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
    component: n(gt, "component")
  });
  Rt = () => r(() => import("./characters_._characterId-B6UBRRH9.js"), __vite__mapDeps([67,1,2,3,4,22,23,32,33,5,6,7,8,12,11,19,15,29,68,17,52,9,10,51,46,20,30]));
  $t = a("/_layout-game/_silly-tavern/characters_/$characterId")({
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
    component: n(Rt, "component")
  });
  Ct = () => r(() => import("./challenges_._challengeId-B3gn3XcX.js"), __vite__mapDeps([69,1,2,3,4,22,23,32,33,5,6,7,8,12,11,15,19,68,17,52,9,10,51,14,30]));
  ft = a("/_layout-game/_silly-tavern/challenges_/$challengeId")({
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
    component: n(Ct, "component")
  });
  Tt = () => r(() => import("./characters_._characterId_.edit-Cw5YgDqv.js"), __vite__mapDeps([70,1,2,3,4,22,23,61,5,6,7,8,9,51,11,10,15,62,32,33]));
  It = a("/_layout-game/_silly-tavern/characters_/$characterId_/edit")({
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
    component: n(Tt, "component")
  });
  Lt = Re.update({
    id: "/invitation",
    path: "/invitation",
    getParentRoute: () => P
  });
  Pt = Ce.update({
    id: "/admin",
    path: "/admin",
    getParentRoute: () => P
  });
  F = Te.update({
    id: "/_layout-game",
    getParentRoute: () => P
  });
  u = Le.update({
    id: "/_silly-tavern",
    getParentRoute: () => F
  });
  Et = Ee.update({
    id: "/",
    path: "/",
    getParentRoute: () => u
  });
  x = ke.update({
    id: "/session",
    path: "/session",
    getParentRoute: () => u
  });
  C = Oe.update({
    id: "/plaza",
    path: "/plaza",
    getParentRoute: () => u
  });
  St = be.update({
    id: "/create",
    path: "/create",
    getParentRoute: () => u
  });
  L = we.update({
    id: "/config",
    path: "/config",
    getParentRoute: () => u
  });
  kt = Fe.update({
    id: "/",
    path: "/",
    getParentRoute: () => C
  });
  At = ze.update({
    id: "/",
    path: "/",
    getParentRoute: () => L
  });
  Ot = Ne.update({
    id: "/$sessionId",
    path: "/$sessionId",
    getParentRoute: () => x
  });
  Gt = Me.update({
    id: "/small-town",
    path: "/small-town",
    getParentRoute: () => C
  });
  bt = We.update({
    id: "/group-chat",
    path: "/group-chat",
    getParentRoute: () => C
  });
  Dt = Be.update({
    id: "/dnd",
    path: "/dnd",
    getParentRoute: () => C
  });
  wt = Ue.update({
    id: "/characters",
    path: "/characters",
    getParentRoute: () => C
  });
  Ft = Xe.update({
    id: "/challenges",
    path: "/challenges",
    getParentRoute: () => C
  });
  xt = Ye.update({
    id: "/create_/small-town",
    path: "/create/small-town",
    getParentRoute: () => u
  });
  zt = et.update({
    id: "/create_/novel-writing",
    path: "/create/novel-writing",
    getParentRoute: () => u
  });
  Vt = ot.update({
    id: "/create_/group-chat",
    path: "/create/group-chat",
    getParentRoute: () => u
  });
  Nt = nt.update({
    id: "/create_/dnd",
    path: "/create/dnd",
    getParentRoute: () => u
  });
  jt = it.update({
    id: "/create_/chat-character",
    path: "/create/chat-character",
    getParentRoute: () => u
  });
  Mt = st.update({
    id: "/create_/chat-challenge",
    path: "/create/chat-challenge",
    getParentRoute: () => u
  });
  Ht = mt.update({
    id: "/create_/character",
    path: "/create/character",
    getParentRoute: () => u
  });
  Wt = dt.update({
    id: "/create_/challenge",
    path: "/create/challenge",
    getParentRoute: () => u
  });
  qt = ht.update({
    id: "/settings",
    path: "/settings",
    getParentRoute: () => L
  });
  Bt = _t.update({
    id: "/overview",
    path: "/overview",
    getParentRoute: () => L
  });
  Kt = vt.update({
    id: "/llm",
    path: "/llm",
    getParentRoute: () => L
  });
  Ut = $t.update({
    id: "/characters_/$characterId",
    path: "/characters/$characterId",
    getParentRoute: () => u
  });
  Qt = ft.update({
    id: "/challenges_/$challengeId",
    path: "/challenges/$challengeId",
    getParentRoute: () => u
  });
  Xt = It.update({
    id: "/characters_/$characterId_/edit",
    path: "/characters/$characterId/edit",
    getParentRoute: () => u
  });
  Jt = {
    LayoutGameSillyTavernConfigLlmRoute: Kt,
    LayoutGameSillyTavernConfigOverviewRoute: Bt,
    LayoutGameSillyTavernConfigSettingsRoute: qt,
    LayoutGameSillyTavernConfigIndexRoute: At
  };
  Yt = L._addFileChildren(Jt);
  Zt = {
    LayoutGameSillyTavernPlazaChallengesRoute: Ft,
    LayoutGameSillyTavernPlazaCharactersRoute: wt,
    LayoutGameSillyTavernPlazaDndRoute: Dt,
    LayoutGameSillyTavernPlazaGroupChatRoute: bt,
    LayoutGameSillyTavernPlazaSmallTownRoute: Gt,
    LayoutGameSillyTavernPlazaIndexRoute: kt
  };
  eo = C._addFileChildren(Zt);
  to = {
    LayoutGameSillyTavernSessionSessionIdRoute: Ot
  };
  oo = x._addFileChildren(to);
  ao = {
    LayoutGameSillyTavernConfigRouteRoute: Yt,
    LayoutGameSillyTavernCreateRoute: St,
    LayoutGameSillyTavernPlazaRoute: eo,
    LayoutGameSillyTavernSessionRoute: oo,
    LayoutGameSillyTavernIndexRoute: Et,
    LayoutGameSillyTavernChallengesChallengeIdRoute: Qt,
    LayoutGameSillyTavernCharactersCharacterIdRoute: Ut,
    LayoutGameSillyTavernCreateChallengeRoute: Wt,
    LayoutGameSillyTavernCreateCharacterRoute: Ht,
    LayoutGameSillyTavernCreateChatChallengeRoute: Mt,
    LayoutGameSillyTavernCreateChatCharacterRoute: jt,
    LayoutGameSillyTavernCreateDndRoute: Nt,
    LayoutGameSillyTavernCreateGroupChatRoute: Vt,
    LayoutGameSillyTavernCreateNovelWritingRoute: zt,
    LayoutGameSillyTavernCreateSmallTownRoute: xt,
    LayoutGameSillyTavernCharactersCharacterIdEditRoute: Xt
  };
  no = u._addFileChildren(ao);
  ro = {
    LayoutGameSillyTavernRouteRoute: no
  };
  io = F._addFileChildren(ro);
  co = {
    LayoutGameRouteRoute: io,
    AdminRoute: Pt,
    InvitationRoute: Lt
  };
  so = P._addFileChildren(co)._addFileTypes();
  ae({
    interval: 2e3,
    tkName: "dev",
    md5: "43f1516c98cf02ba06d7406c37ad52f0",
    url: "https://nexworld.wiki/",
    timeOutUrl: "https://nexworld.wiki/"
  });
  const lo = Q(), mo = X({
    routeTree: so,
    history: lo,
    defaultPreload: "intent",
    scrollRestoration: true
  }), uo = new b(), A = document.getElementById("app");
  A && !A.innerHTML && W.createRoot(A).render(p.jsx(D, {
    client: uo,
    children: p.jsx(J, {
      router: mo
    })
  }));
})();
export {
  Ne as R,
  r as _,
  __tla,
  vt as a,
  $t as b,
  ft as c,
  It as d,
  ie as p,
  $o as u
};
