const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/invitation-nljD_fSB.js","assets/react-BQpw03Eg.js","assets/vendor-CjYbcnj-.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/button-B9brLUSp.js","assets/components-and-styling-lnR2ABT4.js","assets/shadcn-utils-BMZD7_jZ.js","assets/@tailwind-COJ8Fh6m.js","assets/input-C44X3vA9.js","assets/label-DMtPOVS-.js","assets/card-ClPZDGV4.js","assets/badge-DvaSwOwN.js","assets/nex-tavern-uuid-HW61e36x.js","assets/id-OxPLOBIU.js","assets/icons-BC63ChG4.js","assets/admin-CMuwfILy.js","assets/dialog-ClhHrx6A.js","assets/select-VEltzsBv.js","assets/tabs-CfJoSLaG.js","assets/checkbox-5kiXjLha.js","assets/route-e8RvQYj3.js","assets/@tanstack-B4B5CfFY.js","assets/dexie-B3Kybfa7.js","assets/app-configurations-Cz44104t.js","assets/es-toolkit-CstbrnlE.js","assets/route-BeJHCuzT.js","assets/index-CmANkn4r.js","assets/session-BiRtuc5n.js","assets/mode-registry-C0esuoLo.js","assets/alert-dialog-BRuctX1f.js","assets/sheet-ehVu6ZDU.js","assets/db-master-l33tB5ke.js","assets/zod-fbN9ubnj.js","assets/plaza-KQwuV625.js","assets/create-TwMoRhSM.js","assets/route-TZEMmyba.js","assets/index-ff2GDMWN.js","assets/session._sessionId-C_pfCJb5.js","assets/InvitationGuard-DZ3pj6mc.js","assets/plaza.small-town-CSbKuhKA.js","assets/plaza.group-chat-BRgQtDnO.js","assets/plaza.dnd-BEy8UHws.js","assets/plaza.characters-BYfP-GJ4.js","assets/ImportCardDialog-D_4oPsao.js","assets/gsap-DDlvirwQ.js","assets/card-converters-CZK5cTNt.js","assets/ImportCardDialog-DvwNuPEv.css","assets/plaza.challenges-0f3DA2A3.js","assets/create_.small-town-BZd8RcTW.js","assets/slider-DVuMaH4f.js","assets/textarea-D6rL78Aw.js","assets/llm-readiness-DgR8F2ee.js","assets/create_.group-chat-DzTZ-fuf.js","assets/create_.dnd-C9AAoBD4.js","assets/create_.chat-character-DuG6Pm5V.js","assets/useLLM-D0SorjDU.js","assets/global-llm-config.store-DiEUj8Zz.js","assets/create_.chat-challenge-CyJGZWLK.js","assets/create_.character-BQSKH5_d.js","assets/CharacterCreationForm-fw9zxxC-.js","assets/switch-BPeiHTCh.js","assets/create_.challenge-70ZrXBD1.js","assets/settings-CaeJewJR.js","assets/overview-DdmZivkE.js","assets/llm-BqO-Y96Y.js","assets/characters_._characterId-CiqlxHQT.js","assets/SessionSetupWizard-GHkIIEVu.js","assets/challenges_._challengeId-C9t9qL5d.js","assets/characters_._characterId_.edit-9cDPIGfU.js"])))=>i.map(i=>d[i]);
import { z as N, j as p, T as j, r as R, d as M, p as H, e as W } from "./react-BQpw03Eg.js";
import { Q as b, a as D, H as q, O as B, c as K, b as a, l as r, r as U, d as Q, e as X, R as J } from "./@tanstack-B4B5CfFY.js";
import { L as Y, O as Z, T as ee, I as te, C as oe } from "./icons-BC63ChG4.js";
import { v as ae } from "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-B3Kybfa7.js";
let Ne, n, _t, vt, $t, ft, ie, go;
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
  let re, ne, ce, se, F, le;
  re = ({ ...c }) => {
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
  ne = [
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
  F = R.createContext(se);
  go = () => {
    const c = R.useContext(F);
    if (c === void 0) throw new Error("useTheme must be used within a ThemeProvider");
    return c;
  };
  le = /oklch\(([\d.]+)%?\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+)%?)?\)/;
  function ue(c) {
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
  function A(c, t) {
    const e = ue(c.primary), o = {
      ...c
    };
    return o.primaryForeground = e.l > 0.6 ? "oklch(0.2 0.01 285)" : "oklch(0.98 0.01 285)", o.ring = v(e.l, e.c, e.h, 0.5), t ? (o.secondary = v(0.25, e.c * 0.3, e.h), o.secondaryForeground = v(0.9, e.c * 0.1, e.h)) : (o.secondary = v(0.96, e.c * 0.2, e.h), o.secondaryForeground = v(0.2, e.c * 0.5, e.h)), o.accent = v(t ? 0.3 : 0.92, e.c * 0.4, e.h), o.accentForeground = o.secondaryForeground, o.muted = v(t ? 0.2 : 0.96, e.c * 0.1, e.h), o.mutedForeground = v(t ? 0.6 : 0.5, e.c * 0.1, e.h), o.border = v(t ? 0.25 : 0.9, e.c * 0.1, e.h, t ? 0.1 : 1), o.input = o.border, o;
  }
  const me = {
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
      light: me,
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
      return e.theme.synergy && t.primary && (o = A(o, false)), {
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
      return e.theme.synergy && t.primary && (o = A(o, true)), {
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
  function he({ children: c, defaultTheme: t = "system", defaultBaseColor: e = "zinc", defaultPrimaryColor: o = "default", storageKey: s = "vite-ui-theme", storageKeyOfTheme: u = "vite-ui-theme", storageKeyOfBaseColor: d = "vite-ui-base-color", storageKeyOfPrimaryColor: h = "vite-ui-primary-color", ...E }) {
    const [y, $] = R.useState(void 0), [_, g] = R.useState(() => localStorage.getItem(u) || localStorage.getItem(s) || t), [f, S] = R.useState(() => localStorage.getItem(d) || e), [T, z] = R.useState(() => localStorage.getItem(h) || o), k = pe((l) => l.theme);
    R.useEffect(() => {
      if (T !== "custom") {
        const i = document.getElementById("custom-theme-styles");
        i && i.remove();
        return;
      }
      let l = document.getElementById("custom-theme-styles");
      l || (l = document.createElement("style"), l.id = "custom-theme-styles", document.head.appendChild(l));
      const L = (i) => `
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
        ${L(k.light)}
      }
      .dark.primary-color-custom,
      .primary-color-custom.dark,
      .dark .primary-color-custom,
      .primary-color-custom .dark {
        ${L(k.dark)}
      }
    `;
    }, [
      T,
      k
    ]), R.useEffect(() => {
      const l = window.document.documentElement;
      l.classList.remove("light", "dark"), l.classList.remove(...ne.map((i) => `base-color-${i}`)), l.classList.remove(...ce.map((i) => `primary-color-${i}`));
      const L = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      $(L), _ === "system" ? l.classList.add(L) : l.classList.add(_), l.classList.add(`base-color-${f}`), l.classList.add(`primary-color-${T}`);
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
        localStorage.setItem(s, l), localStorage.setItem(u, l), g(l);
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
    return p.jsx(F.Provider, {
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
            p.jsx(re, {
              expand: true,
              visibleToasts: 6
            })
          ]
        })
      ]
    });
  }
  let P, _e, ge, G, ve, Re, $e, Ce, fe, Te, Le, Ie, Pe, Ee, Se, ke, Oe, Ae, Ge, be, De, Fe, we, xe, ze, Ve, je, Me, He, We, qe, Be, Ke, Ue, Qe, Xe, Je, Ye, Ze, et, tt, ot, at, rt, nt, it, ct, st, lt, ut, mt, dt, pt, ht, yt, gt, Rt, Ct, Tt, Lt, w, m, It, x, C, Pt, I, Et, St, kt, Ot, At, Gt, bt, Dt, Ft, wt, xt, zt, Vt, Nt, jt, Mt, Ht, Wt, qt, Bt, Kt, Ut, Qt, Xt, Jt, Yt, Zt, eo, to, oo, ao, ro, no;
  P = K({
    component: ye
  });
  _e = "modulepreload";
  ge = function(c) {
    return "/tavern/" + c;
  };
  G = {};
  n = function(t, e, o) {
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
  ve = () => n(() => import("./invitation-nljD_fSB.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
  Re = a("/invitation")({
    component: r(ve, "component")
  });
  $e = () => n(() => import("./admin-CMuwfILy.js"), __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11,12,17,15,18,19,20]));
  Ce = a("/admin")({
    component: r($e, "component")
  });
  fe = () => n(() => import("./route-e8RvQYj3.js"), __vite__mapDeps([21,1,2,3,4,22,23,7,6,8,15,5,17,12,9,24,25]));
  Te = a("/_layout-game")({
    component: r(fe, "component")
  });
  Le = () => n(() => import("./route-BeJHCuzT.js"), __vite__mapDeps([26,1,2,3,4,22,23,15]));
  Ie = a("/_layout-game/_silly-tavern")({
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
    component: r(Le, "component")
  });
  Pe = () => n(() => import("./index-CmANkn4r.js"), __vite__mapDeps([27,1,2,3,4,22,23,15]));
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
    component: r(Pe, "component")
  });
  Se = () => n(() => import("./session-BiRtuc5n.js"), __vite__mapDeps([28,1,2,3,4,22,23,7,6,8,29,15,5,30,9,31,17,32,33]));
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
    component: r(Se, "component")
  });
  Oe = () => n(() => import("./plaza-KQwuV625.js"), __vite__mapDeps([34,1,2,3,4,22,23,19,7,6,8]));
  Ae = a("/_layout-game/_silly-tavern/plaza")({
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
    component: r(Oe, "component")
  });
  Ge = () => n(() => import("./create-TwMoRhSM.js"), __vite__mapDeps([35,1,2,3,4,22,23,11,7,6,8,15]));
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
    component: r(Ge, "component")
  });
  De = () => n(() => import("./route-TZEMmyba.js"), __vite__mapDeps([36,1,2,3,4,22,23,5,6,7,8,31,15]));
  Fe = a("/_layout-game/_silly-tavern/config")({
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
    component: r(De, "component")
  });
  we = a("/_layout-game/_silly-tavern/plaza/")({
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
  xe = () => n(() => import("./index-ff2GDMWN.js"), __vite__mapDeps([37,1,2,3,4,22,23]));
  ze = a("/_layout-game/_silly-tavern/config/")({
    component: r(xe, "component")
  });
  Ve = () => n(() => import("./session._sessionId-C_pfCJb5.js").then(async (m2) => {
    await m2.__tla;
    return m2;
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
    component: r(Ve, "component")
  });
  je = () => n(() => import("./plaza.small-town-CSbKuhKA.js"), __vite__mapDeps([40,1,2,3,4,22,23,32,33,5,6,7,8,11,12,30,39,13,14,15]));
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
    component: r(je, "component")
  });
  He = () => n(() => import("./plaza.group-chat-BRgQtDnO.js"), __vite__mapDeps([41,1,2,3,4,22,23,32,33,5,6,7,8,11,12,30,15]));
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
    component: r(He, "component")
  });
  qe = () => n(() => import("./plaza.dnd-BEy8UHws.js"), __vite__mapDeps([42,1,2,3,4,22,23,32,33,5,6,7,8,11,12,30,39,13,14,15]));
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
    component: r(qe, "component")
  });
  Ke = () => n(() => import("./plaza.characters-BYfP-GJ4.js"), __vite__mapDeps([43,1,2,3,4,22,23,44,9,7,6,8,12,5,45,15,17,10,46,32,33,47,11,20]));
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
    component: r(Ke, "component")
  });
  Qe = () => n(() => import("./plaza.challenges-0f3DA2A3.js"), __vite__mapDeps([48,1,2,3,4,22,23,44,9,7,6,8,12,5,45,15,17,10,46,32,33,47,11]));
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
    component: r(Qe, "component")
  });
  Je = () => n(() => import("./create_.small-town-BZd8RcTW.js"), __vite__mapDeps([49,1,2,3,4,22,23,14,32,33,50,7,6,8,5,9,51,10,11,12,20,15,52,39,13]));
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
    component: r(Je, "component")
  });
  Ze = () => n(() => import("./create_.group-chat-DzTZ-fuf.js"), __vite__mapDeps([53,1,2,3,4,22,23,14,32,33,52,5,6,7,8,11,9,10,51,12,15]));
  et = a("/_layout-game/_silly-tavern/create_/group-chat")({
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
    component: r(Ze, "component")
  });
  tt = () => n(() => import("./create_.dnd-C9AAoBD4.js"), __vite__mapDeps([54,1,2,3,4,22,23,14,32,33,5,6,7,8,9,51,10,11,12,20,15,18,52,39,13]));
  ot = a("/_layout-game/_silly-tavern/create_/dnd")({
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
    component: r(tt, "component")
  });
  at = () => n(() => import("./create_.chat-character-DuG6Pm5V.js"), __vite__mapDeps([55,1,2,3,4,22,23,5,6,7,8,51,11,12,14,32,33,56,57,25,24,15]));
  rt = a("/_layout-game/_silly-tavern/create_/chat-character")({
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
    component: r(at, "component")
  });
  nt = () => n(() => import("./create_.chat-challenge-CyJGZWLK.js"), __vite__mapDeps([58,1,2,3,4,22,23,5,6,7,8,51,11,12,14,32,33,56,57,25,24,15]));
  it = a("/_layout-game/_silly-tavern/create_/chat-challenge")({
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
    component: r(nt, "component")
  });
  ct = () => n(() => import("./create_.character-BQSKH5_d.js"), __vite__mapDeps([59,1,2,3,4,22,23,60,5,6,7,8,9,51,11,10,15,61,32,33]));
  st = a("/_layout-game/_silly-tavern/create_/character")({
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
    component: r(ct, "component")
  });
  lt = () => n(() => import("./create_.challenge-70ZrXBD1.js"), __vite__mapDeps([62,1,2,3,4,22,23,5,6,7,8,9,51,11,10,19,18,15,12,14,61,32,33]));
  ut = a("/_layout-game/_silly-tavern/create_/challenge")({
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
    component: r(lt, "component")
  });
  mt = () => n(() => import("./settings-CaeJewJR.js"), __vite__mapDeps([63,1,2,3,4,11,7,6,8,5,9,10,61,51]));
  dt = a("/_layout-game/_silly-tavern/config/settings")({
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
    component: r(mt, "component")
  });
  pt = () => n(() => import("./overview-DdmZivkE.js"), __vite__mapDeps([64,1,2,3,4,22,23,11,7,6,8,5]));
  ht = a("/_layout-game/_silly-tavern/config/overview")({
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
    component: r(pt, "component")
  });
  yt = () => n(() => import("./llm-BqO-Y96Y.js"), __vite__mapDeps([65,1,2,3,4,5,6,7,8,9,10,18,15,20,57,14,25,22,23]));
  _t = a("/_layout-game/_silly-tavern/config/llm")({
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
    component: r(yt, "component")
  });
  gt = () => n(() => import("./characters_._characterId-CiqlxHQT.js"), __vite__mapDeps([66,1,2,3,4,22,23,32,33,5,6,7,8,12,11,19,15,29,67,17,52,9,10,51,46,20,30]));
  vt = a("/_layout-game/_silly-tavern/characters_/$characterId")({
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
    component: r(gt, "component")
  });
  Rt = () => n(() => import("./challenges_._challengeId-C9t9qL5d.js"), __vite__mapDeps([68,1,2,3,4,22,23,32,33,5,6,7,8,12,11,15,19,67,17,52,9,10,51,14,30]));
  $t = a("/_layout-game/_silly-tavern/challenges_/$challengeId")({
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
    component: r(Rt, "component")
  });
  Ct = () => n(() => import("./characters_._characterId_.edit-9cDPIGfU.js"), __vite__mapDeps([69,1,2,3,4,22,23,60,5,6,7,8,9,51,11,10,15,61,32,33]));
  ft = a("/_layout-game/_silly-tavern/characters_/$characterId_/edit")({
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
    component: r(Ct, "component")
  });
  Tt = Re.update({
    id: "/invitation",
    path: "/invitation",
    getParentRoute: () => P
  });
  Lt = Ce.update({
    id: "/admin",
    path: "/admin",
    getParentRoute: () => P
  });
  w = Te.update({
    id: "/_layout-game",
    getParentRoute: () => P
  });
  m = Ie.update({
    id: "/_silly-tavern",
    getParentRoute: () => w
  });
  It = Ee.update({
    id: "/",
    path: "/",
    getParentRoute: () => m
  });
  x = ke.update({
    id: "/session",
    path: "/session",
    getParentRoute: () => m
  });
  C = Ae.update({
    id: "/plaza",
    path: "/plaza",
    getParentRoute: () => m
  });
  Pt = be.update({
    id: "/create",
    path: "/create",
    getParentRoute: () => m
  });
  I = Fe.update({
    id: "/config",
    path: "/config",
    getParentRoute: () => m
  });
  Et = we.update({
    id: "/",
    path: "/",
    getParentRoute: () => C
  });
  St = ze.update({
    id: "/",
    path: "/",
    getParentRoute: () => I
  });
  kt = Ne.update({
    id: "/$sessionId",
    path: "/$sessionId",
    getParentRoute: () => x
  });
  Ot = Me.update({
    id: "/small-town",
    path: "/small-town",
    getParentRoute: () => C
  });
  At = We.update({
    id: "/group-chat",
    path: "/group-chat",
    getParentRoute: () => C
  });
  Gt = Be.update({
    id: "/dnd",
    path: "/dnd",
    getParentRoute: () => C
  });
  bt = Ue.update({
    id: "/characters",
    path: "/characters",
    getParentRoute: () => C
  });
  Dt = Xe.update({
    id: "/challenges",
    path: "/challenges",
    getParentRoute: () => C
  });
  Ft = Ye.update({
    id: "/create_/small-town",
    path: "/create/small-town",
    getParentRoute: () => m
  });
  wt = et.update({
    id: "/create_/group-chat",
    path: "/create/group-chat",
    getParentRoute: () => m
  });
  xt = ot.update({
    id: "/create_/dnd",
    path: "/create/dnd",
    getParentRoute: () => m
  });
  zt = rt.update({
    id: "/create_/chat-character",
    path: "/create/chat-character",
    getParentRoute: () => m
  });
  Vt = it.update({
    id: "/create_/chat-challenge",
    path: "/create/chat-challenge",
    getParentRoute: () => m
  });
  Nt = st.update({
    id: "/create_/character",
    path: "/create/character",
    getParentRoute: () => m
  });
  jt = ut.update({
    id: "/create_/challenge",
    path: "/create/challenge",
    getParentRoute: () => m
  });
  Mt = dt.update({
    id: "/settings",
    path: "/settings",
    getParentRoute: () => I
  });
  Ht = ht.update({
    id: "/overview",
    path: "/overview",
    getParentRoute: () => I
  });
  Wt = _t.update({
    id: "/llm",
    path: "/llm",
    getParentRoute: () => I
  });
  qt = vt.update({
    id: "/characters_/$characterId",
    path: "/characters/$characterId",
    getParentRoute: () => m
  });
  Bt = $t.update({
    id: "/challenges_/$challengeId",
    path: "/challenges/$challengeId",
    getParentRoute: () => m
  });
  Kt = ft.update({
    id: "/characters_/$characterId_/edit",
    path: "/characters/$characterId/edit",
    getParentRoute: () => m
  });
  Ut = {
    LayoutGameSillyTavernConfigLlmRoute: Wt,
    LayoutGameSillyTavernConfigOverviewRoute: Ht,
    LayoutGameSillyTavernConfigSettingsRoute: Mt,
    LayoutGameSillyTavernConfigIndexRoute: St
  };
  Qt = I._addFileChildren(Ut);
  Xt = {
    LayoutGameSillyTavernPlazaChallengesRoute: Dt,
    LayoutGameSillyTavernPlazaCharactersRoute: bt,
    LayoutGameSillyTavernPlazaDndRoute: Gt,
    LayoutGameSillyTavernPlazaGroupChatRoute: At,
    LayoutGameSillyTavernPlazaSmallTownRoute: Ot,
    LayoutGameSillyTavernPlazaIndexRoute: Et
  };
  Jt = C._addFileChildren(Xt);
  Yt = {
    LayoutGameSillyTavernSessionSessionIdRoute: kt
  };
  Zt = x._addFileChildren(Yt);
  eo = {
    LayoutGameSillyTavernConfigRouteRoute: Qt,
    LayoutGameSillyTavernCreateRoute: Pt,
    LayoutGameSillyTavernPlazaRoute: Jt,
    LayoutGameSillyTavernSessionRoute: Zt,
    LayoutGameSillyTavernIndexRoute: It,
    LayoutGameSillyTavernChallengesChallengeIdRoute: Bt,
    LayoutGameSillyTavernCharactersCharacterIdRoute: qt,
    LayoutGameSillyTavernCreateChallengeRoute: jt,
    LayoutGameSillyTavernCreateCharacterRoute: Nt,
    LayoutGameSillyTavernCreateChatChallengeRoute: Vt,
    LayoutGameSillyTavernCreateChatCharacterRoute: zt,
    LayoutGameSillyTavernCreateDndRoute: xt,
    LayoutGameSillyTavernCreateGroupChatRoute: wt,
    LayoutGameSillyTavernCreateSmallTownRoute: Ft,
    LayoutGameSillyTavernCharactersCharacterIdEditRoute: Kt
  };
  to = m._addFileChildren(eo);
  oo = {
    LayoutGameSillyTavernRouteRoute: to
  };
  ao = w._addFileChildren(oo);
  ro = {
    LayoutGameRouteRoute: ao,
    AdminRoute: Lt,
    InvitationRoute: Tt
  };
  no = P._addFileChildren(ro)._addFileTypes();
  ae({
    interval: 2e3,
    tkName: "dev",
    md5: "43f1516c98cf02ba06d7406c37ad52f0",
    url: "https://nexworld.wiki/",
    timeOutUrl: "https://nexworld.wiki/"
  });
  const io = Q(), co = X({
    routeTree: no,
    history: io,
    defaultPreload: "intent",
    scrollRestoration: true
  }), so = new b(), O = document.getElementById("app");
  O && !O.innerHTML && W.createRoot(O).render(p.jsx(D, {
    client: so,
    children: p.jsx(J, {
      router: co
    })
  }));
})();
export {
  Ne as R,
  n as _,
  __tla,
  _t as a,
  vt as b,
  $t as c,
  ft as d,
  ie as p,
  go as u
};
