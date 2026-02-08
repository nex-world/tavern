const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/silly-tavern-db-C6OCLe8X.js","assets/@tanstack-Bw4lGhTw.js","assets/dexie-Ca-96kR6.js","assets/index-BwbnRfon.js","assets/react-vendor-C1AjJau_.js","assets/tanstack-vendor-BB7HWJ-3.js","assets/vendor-VvUkZRdw.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/app-components-CCuPG-ln.js","assets/app-common-DnxDJJb8.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-COJ8Fh6m.js","assets/id-OxPLOBIU.js","assets/es-toolkit-CstbrnlE.js","assets/future-lib-llm-ui-react-jbeTDxFo.js","assets/zod-grrOrvCS.js","assets/app-common-Daz3Tiae.css","assets/app-libs-for-custom-theme-CQCQ3KAn.js","assets/gsap-DDlvirwQ.js","assets/app-components-DvwNuPEv.css","assets/app-route-for-_layout-game-DQsWYR09.js","assets/silly-tavern-engine-D0R6Sr8P.js","assets/silly-tavern-shared-DgvARXo1.js"])))=>i.map(i=>d[i]);
import { r as g, j as e, T as _e, bg as It, bv as Dt, aT as Ue, bw as _t, bo as tt, bn as vs, bx as at, bl as Cs, t as L, bb as ke, bf as cs, h as K, ba as xe, bm as ks, bi as Tt, by as nt, U as ve, P as te, bz as os, X as Je, bA as Mt, bB as Z, bd as ts, bc as as, bC as Ie, bD as Oe, bE as ns, bF as Q, bG as ue, A as Is, b6 as me, a3 as Ce, f as rs, bH as Te, a6 as Lt, C as rt, I as ds, bI as le, bs as je, bJ as Ds, bK as ze, bL as it, bM as lt, bN as At, bO as bs, bP as Pt, bQ as Et, bR as ct, bS as Ot, s as Rt, bT as $t, bU as Ft, bV as Bt, bW as Ut, bj as ot, bX as dt, v as Ge, bY as mt, bu as zt, bZ as de, bt as Gt, b_ as ut, g as _s, b$ as Ts, c0 as xt, c1 as ht, e as Ht, c2 as Jt, c3 as Vt, c4 as Yt, c5 as Kt } from "./react-vendor-C1AjJau_.js";
import { d as A, f as ms, e as Ms } from "./app-common-DnxDJJb8.js";
import { g as is, i as Xt, a as Wt, b as gt, c as He } from "./silly-tavern-shared-DgvARXo1.js";
import { a1 as qt, a2 as Qt, B as w, a3 as Zt, a4 as ea, a5 as sa, a6 as ta, a7 as aa, a8 as na, a9 as ra, Z as ia, _ as la, $ as ca, o as be, p as Ve, I as E, f as R, ai as oa, C as U, b as H, c as J, d as Y, e as z, D as Me, m as Le, n as Ae, aj as da, ak as ma, al as ua, L as k, u as Ls, am as pt, z as us, an as As, aa as G, ao as ys, S as Re, v as $e, w as Fe, x as Be, y as ie, ab as De, ap as xa, aq as Xe, ar as We, as as qe, q as ft, r as jt, s as pe, t as fe, at as ha, au as ga, av as pa, aw as fa } from "./app-components-CCuPG-ln.js";
import { n as F } from "./id-OxPLOBIU.js";
import { C as Ye, m as ye, S as Ke, c as Es, s as xs, b as ja } from "./silly-tavern-db-C6OCLe8X.js";
import { b as Na, d as Os, C as va, e as Rs, f as ba, g as Ne, m as ya, h as wa, V as Sa, i as hs, D as Ca, j as $s, p as Nt, G as ka, k as Ia, l as Da, n as _a, o as Fs, q as Ta, M as vt, S as Ma, r as La, W as Aa, L as Pa, s as he, t as Ea, u as Oa, v as Bs, w as Ra, x as $a, y as Us, z as Fa, A as Qe, B as Ba, E as zs, F as Ua, H as za, I as Gs, J as Hs, K as Ga, N as Ha, O as Js, P as Ja, Q as Va } from "./silly-tavern-engine-D0R6Sr8P.js";
import { _ as ce } from "./index-BwbnRfon.js";
import { a as Ps } from "./future-lib-llm-ui-react-jbeTDxFo.js";
import { w as Ya } from "./tanstack-vendor-BB7HWJ-3.js";
let hr, br, fr, vr, pr, xr, gr, jr, Nr, yr, wr, Sr, Cr, Dr, Ir, kr, _r, Tr, Mr, Lr, Ar, Pr, Er, Or;
let __tla = (async () => {
  let Ka;
  Ka = (s) => {
    const [t, a] = g.useState(false);
    return e.jsxs(qt, {
      open: t,
      onOpenChange: a,
      children: [
        e.jsxs("div", {
          className: A("group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors mb-1", s.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"),
          onClick: () => s.onClick(s.session),
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3 overflow-hidden",
              children: [
                (() => {
                  const r = is(s.session.mode).icon;
                  return e.jsx(r, {
                    className: "w-4 h-4 shrink-0"
                  });
                })(),
                e.jsxs("div", {
                  className: "flex flex-col overflow-hidden",
                  children: [
                    e.jsx("span", {
                      className: "text-sm font-medium truncate",
                      children: s.session.title || s.characterName
                    }),
                    e.jsx("span", {
                      className: "text-[10px] opacity-70",
                      children: new Date(s.session.updatedAt).toLocaleDateString()
                    })
                  ]
                })
              ]
            }),
            e.jsx(Qt, {
              asChild: true,
              children: e.jsx(w, {
                variant: "ghost",
                size: "icon",
                className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity",
                onClick: (r) => r.stopPropagation(),
                type: "button",
                children: e.jsx(_e, {
                  className: "w-3.5 h-3.5 text-muted-foreground hover:text-destructive"
                })
              })
            })
          ]
        }),
        e.jsxs(Zt, {
          children: [
            e.jsxs(ea, {
              children: [
                e.jsx(sa, {
                  children: "\u786E\u8BA4\u5220\u9664"
                }),
                e.jsx(ta, {
                  children: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u4F1A\u8BDD\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002"
                })
              ]
            }),
            e.jsxs(aa, {
              children: [
                e.jsx(na, {
                  children: "\u53D6\u6D88"
                }),
                e.jsx(ra, {
                  onClick: () => {
                    var _a2;
                    (_a2 = s.onDelete) == null ? void 0 : _a2.call(s, s.session), a(false);
                  },
                  children: "\u5220\u9664"
                })
              ]
            })
          ]
        })
      ]
    });
  };
  xr = (s) => {
    const [t, a] = g.useState(""), [r, l] = g.useState(false), c = (d) => {
      var _a2, _b;
      if (d.title) return d.title;
      const i = is(d.mode), o = (_a2 = d.modeConfig) == null ? void 0 : _a2.characterId;
      if (o) {
        const n = (_b = s.characters.find((m) => m.id === o)) == null ? void 0 : _b.name;
        if (n) return `${i.sessionPrefix}: ${n}`;
      }
      return i.sessionPrefix;
    }, x = s.sessions.filter((d) => c(d).toLowerCase().includes(t.toLowerCase())).sort((d, i) => i.updatedAt - d.updatedAt), p = (d = false) => e.jsxs("div", {
      className: "flex flex-col h-full bg-muted/30 border-r w-64",
      children: [
        e.jsxs("div", {
          className: `p-4 space-y-4 ${d ? "pt-12" : ""}`,
          children: [
            e.jsxs(w, {
              className: "w-full flex items-center gap-2",
              onClick: () => {
                s.onNewSession(), d && l(false);
              },
              type: "button",
              children: [
                e.jsx(Dt, {
                  className: "w-4 h-4"
                }),
                "\u65B0\u4F1A\u8BDD"
              ]
            }),
            e.jsxs("div", {
              className: "relative",
              children: [
                e.jsx(Ue, {
                  className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                }),
                e.jsx(E, {
                  placeholder: "\u641C\u7D22\u4F1A\u8BDD...",
                  className: "pl-8 h-9 text-xs",
                  value: t,
                  onChange: (i) => a(i.target.value)
                })
              ]
            })
          ]
        }),
        e.jsx("div", {
          className: "grow overflow-y-auto px-2",
          children: e.jsxs("div", {
            className: "space-y-1",
            children: [
              x.map((i) => e.jsx(Ka, {
                session: i,
                isActive: i.id === s.activeSessionId,
                characterName: c(i),
                onClick: (o) => {
                  s.onSessionSelect(o), d && l(false);
                },
                onDelete: s.onSessionDelete
              }, i.id)),
              x.length === 0 && e.jsx("div", {
                className: "text-center py-10 text-muted-foreground text-xs",
                children: "\u65E0\u4F1A\u8BDD"
              })
            ]
          })
        })
      ]
    });
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("aside", {
          className: "hidden md:flex w-64 flex-col",
          children: p(false)
        }),
        e.jsxs(ia, {
          open: r,
          onOpenChange: l,
          children: [
            e.jsx(la, {
              asChild: true,
              children: e.jsx(w, {
                variant: "outline",
                size: "icon",
                className: "md:hidden fixed bottom-6 left-6 rounded-full shadow-lg z-50 h-12 w-12",
                children: e.jsx(It, {
                  className: "h-6 w-6"
                })
              })
            }),
            e.jsxs(ca, {
              side: "left",
              className: "w-64 p-0",
              children: [
                e.jsx(be, {
                  className: "sr-only",
                  children: "\u4F1A\u8BDD\u5217\u8868"
                }),
                e.jsx(Ve, {
                  className: "sr-only",
                  children: "\u9009\u62E9\u548C\u7BA1\u7406\u60A8\u7684\u804A\u5929\u4F1A\u8BDD"
                }),
                p(true)
              ]
            })
          ]
        })
      ]
    });
  };
  hr = function(s) {
    const [t, a] = g.useState(""), [r, l] = g.useState([]), c = g.useMemo(() => {
      const i = /* @__PURE__ */ new Set();
      for (const o of s.items) for (const n of s.getTags(o)) i.add(n);
      return Array.from(i).sort();
    }, [
      s.items,
      s.getTags
    ]), x = g.useMemo(() => s.items.filter((i) => {
      const o = s.getSearchableContent(i).toLowerCase().includes(t.toLowerCase()), n = s.getTags(i), m = r.length === 0 || r.every((u) => n.includes(u));
      return o && m;
    }), [
      s.items,
      t,
      r,
      s.getSearchableContent,
      s.getTags
    ]), p = (i) => {
      l((o) => o.includes(i) ? o.filter((n) => n !== i) : [
        ...o,
        i
      ]);
    }, d = g.useMemo(() => x.map((i) => ({
      ...i,
      id: s.getId(i)
    })), [
      x,
      s.getId
    ]);
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs("div", {
          className: "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between",
          children: [
            s.title && e.jsx("div", {
              className: "space-y-1",
              children: e.jsx("h2", {
                className: "text-2xl font-bold tracking-tight",
                children: s.title
              })
            }),
            e.jsxs("div", {
              className: "flex items-center gap-3 w-full md:w-auto",
              children: [
                s.actions,
                e.jsxs("div", {
                  className: "relative flex-1 md:w-72",
                  children: [
                    e.jsx(Ue, {
                      className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    }),
                    e.jsx(E, {
                      type: "search",
                      placeholder: s.placeholder || "\u641C\u7D22...",
                      className: "pl-9",
                      value: t,
                      onChange: (i) => a(i.target.value)
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex flex-wrap gap-2 items-center",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-1.5 mr-2 text-sm text-muted-foreground",
              children: [
                e.jsx(_t, {
                  className: "w-4 h-4"
                }),
                "\u6807\u7B7E\u8FC7\u6EE4:"
              ]
            }),
            c.map((i) => e.jsx(R, {
              variant: r.includes(i) ? "default" : "outline",
              className: "cursor-pointer",
              onClick: () => p(i),
              children: i
            }, i)),
            r.length > 0 && e.jsx(w, {
              variant: "ghost",
              size: "sm",
              onClick: () => l([]),
              className: "h-7 px-2 text-xs",
              type: "button",
              children: "\u6E05\u9664"
            })
          ]
        }),
        d.length > 0 ? e.jsx(oa, {
          items: d,
          renderItem: (i) => s.renderCard(i),
          gap: 16,
          animate: false,
          scaleOnHover: false
        }) : e.jsx("div", {
          className: "py-20 text-center text-muted-foreground",
          children: "\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u5361\u7247\u3002"
        })
      ]
    });
  };
  gr = (s) => {
    var _a2;
    const t = !!s.character.imageBase64, a = !!s.character.avatar, r = t || !t && a;
    return e.jsxs(U, {
      className: `relative mx-auto w-full max-w-sm ${r ? "pt-0" : ""} hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col`,
      onClick: () => {
        var _a3;
        return (_a3 = s.onClick) == null ? void 0 : _a3.call(s, s.character);
      },
      children: [
        r && e.jsxs("div", {
          className: "relative",
          children: [
            t ? e.jsx("img", {
              src: s.character.imageBase64,
              alt: `${s.character.name} \u89D2\u8272\u56FE\u7247`,
              className: "relative z-20 w-full object-contain"
            }) : e.jsx("div", {
              className: "relative z-20 w-full aspect-square bg-muted flex items-center justify-center",
              children: e.jsx("img", {
                src: s.character.avatar,
                alt: `${s.character.name} \u5934\u50CF`,
                className: "w-[66%] h-[66%] object-cover"
              })
            }),
            e.jsx("div", {
              className: "z-21 absolute bottom-0 left-0 right-0 p-4",
              children: e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  a && e.jsx("div", {
                    className: "bg-foreground/90 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-black/90 shrink-0",
                    children: e.jsx("img", {
                      src: s.character.avatar,
                      alt: `${s.character.name} \u5934\u50CF`,
                      className: "w-full h-full object-cover"
                    })
                  }),
                  e.jsxs("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      e.jsx("div", {
                        className: "text-white font-bold text-md truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.96)]",
                        children: s.character.name
                      }),
                      e.jsx("div", {
                        className: "text-white/80 font-medium text-sm truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.968)]",
                        children: (s.character.creator ? `by ${s.character.creator}` : void 0) ?? s.character.nickname
                      })
                    ]
                  })
                ]
              })
            })
          ]
        }),
        e.jsx(H, {
          className: r ? "hidden" : "",
          children: e.jsx("div", {
            className: "flex justify-between items-start",
            children: e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                s.character.avatar && e.jsx("div", {
                  className: "bg-muted w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border shrink-0",
                  children: e.jsx("img", {
                    src: s.character.avatar,
                    alt: `${s.character.name} \u5934\u50CF`,
                    className: "w-full h-full object-cover"
                  })
                }),
                e.jsxs("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    e.jsx(J, {
                      className: "text-lg truncate",
                      children: s.character.name
                    }),
                    e.jsx(Y, {
                      className: "truncate",
                      children: (s.character.creator ? `by ${s.character.creator}` : void 0) ?? s.character.nickname
                    })
                  ]
                })
              ]
            })
          })
        }),
        e.jsxs(z, {
          className: "grow space-y-2",
          children: [
            e.jsx("p", {
              className: "text-sm text-muted-foreground line-clamp-3",
              children: s.character.description
            }),
            ((_a2 = s.character.tags) == null ? void 0 : _a2.length) > 0 && e.jsx("div", {
              className: "flex flex-wrap gap-1",
              children: s.character.tags.slice(0, 5).map((l, c) => e.jsx(R, {
                variant: "secondary",
                className: "text-[10px] px-1.5 py-0",
                children: l
              }, `[${c}]${l}`))
            })
          ]
        })
      ]
    });
  };
  pr = (s) => {
    const [t, a] = g.useState(null), [r, l] = g.useState(false), [c, x] = g.useState(null), [p, d] = g.useState(false), i = g.useId(), o = g.useRef(null), n = (j) => {
      var _a2;
      const f = (_a2 = j.target.files) == null ? void 0 : _a2[0];
      f && (f.type === "image/png" || f.type === "application/json" || f.name.endsWith(".json") ? (a(f), x(null)) : (x("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), a(null)));
    }, m = (j) => {
      j.preventDefault(), j.stopPropagation(), d(true);
    }, u = (j) => {
      j.preventDefault(), j.stopPropagation(), d(false);
    }, h = (j) => {
      j.preventDefault(), j.stopPropagation(), d(false);
      const f = j.dataTransfer.files;
      if (f.length > 0) {
        const y = f[0];
        y.type === "image/png" || y.type === "application/json" || y.name.endsWith(".json") ? (a(y), x(null)) : (x("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), a(null));
      }
    }, N = async () => {
      if (t) {
        l(true), x(null);
        try {
          if (t.type === "image/png") {
            const j = await Xt(t);
            s.onImport(j);
          } else {
            const j = await t.text(), f = Wt(j);
            s.onImport(f);
          }
          s.onOpenChange(false), a(null), d(false);
        } catch (j) {
          console.error("Import error:", j), x(j instanceof Error ? j.message : "\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F");
        } finally {
          l(false);
        }
      }
    };
    return e.jsx(Me, {
      open: s.open,
      onOpenChange: s.onOpenChange,
      children: e.jsxs(Le, {
        className: "sm:max-w-md max-h-[80vh] overflow-y-auto",
        children: [
          e.jsxs(Ae, {
            children: [
              e.jsx(be, {
                children: "\u5BFC\u5165\u89D2\u8272/\u6311\u6218\u5361"
              }),
              e.jsx(Ve, {
                children: "\u652F\u6301 SillyTavern \u683C\u5F0F\u7684 PNG \u89D2\u8272\u5361\u6216 JSON \u6570\u636E\u3002"
              })
            ]
          }),
          e.jsxs("div", {
            className: "space-y-4 py-4",
            children: [
              e.jsxs("div", {
                className: `border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer ${p ? "border-primary bg-primary/10 scale-105" : t ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:border-primary/50"}`,
                onDragOver: m,
                onDragLeave: u,
                onDrop: h,
                onClick: () => {
                  var _a2;
                  return (_a2 = o.current) == null ? void 0 : _a2.click();
                },
                children: [
                  e.jsx("div", {
                    className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center",
                    children: (t == null ? void 0 : t.type) === "application/json" ? e.jsx(tt, {
                      className: "w-6 h-6 text-primary"
                    }) : e.jsx(vs, {
                      className: "w-6 h-6 text-primary"
                    })
                  }),
                  e.jsxs("div", {
                    className: "text-center",
                    children: [
                      e.jsx("p", {
                        className: "text-sm font-medium",
                        children: p ? "\u91CA\u653E\u6587\u4EF6\u4EE5\u4E0A\u4F20" : t ? t.name : "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904"
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: "PNG \u6216 JSON (\u6700\u5927 5MB)"
                      })
                    ]
                  })
                ]
              }),
              e.jsx(E, {
                ref: o,
                type: "file",
                accept: "image/png,.json",
                className: "hidden",
                onChange: n
              }),
              c && e.jsxs(da, {
                variant: "destructive",
                children: [
                  e.jsx(at, {
                    className: "h-4 w-4"
                  }),
                  e.jsx(ma, {
                    children: "\u9519\u8BEF"
                  }),
                  e.jsx(ua, {
                    children: c
                  })
                ]
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(k, {
                    htmlFor: i,
                    className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                    children: "\u901A\u8FC7 URL \u5BFC\u5165"
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsx(E, {
                        id: i,
                        placeholder: "https://...",
                        className: "rounded-lg"
                      }),
                      e.jsx(w, {
                        variant: "secondary",
                        className: "shrink-0 rounded-lg",
                        type: "button",
                        children: "\u6293\u53D6"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          e.jsxs(Ls, {
            children: [
              e.jsx(w, {
                variant: "outline",
                onClick: () => s.onOpenChange(false),
                type: "button",
                className: "rounded-lg",
                children: "\u53D6\u6D88"
              }),
              e.jsx(w, {
                disabled: !t || r,
                onClick: N,
                type: "button",
                className: "rounded-lg min-w-20",
                children: r ? "\u5904\u7406\u4E2D..." : "\u5F00\u59CB\u5BFC\u5165"
              })
            ]
          })
        ]
      })
    });
  };
  fr = function({ characters: s, trigger: t }) {
    const [a, r] = g.useState(false), [l, c] = g.useState(false), x = g.useId(), p = () => {
      if (s.length === 0) {
        L.error("\u6CA1\u6709\u89D2\u8272\u53EF\u5BFC\u51FA");
        return;
      }
      try {
        const d = s.map((m) => {
          const u = gt(m, {
            includeImageBase64: l
          });
          return JSON.parse(u);
        }), i = new Blob([
          JSON.stringify(d, null, 2)
        ], {
          type: "application/json"
        }), o = URL.createObjectURL(i), n = document.createElement("a");
        n.href = o, n.download = `characters-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, document.body.appendChild(n), n.click(), document.body.removeChild(n), URL.revokeObjectURL(o), L.success(`\u6210\u529F\u5BFC\u51FA ${s.length} \u4E2A\u89D2\u8272`), r(false);
      } catch (d) {
        L.error("\u5BFC\u51FA\u5931\u8D25"), console.error("Export error:", d);
      }
    };
    return e.jsxs(Me, {
      open: a,
      onOpenChange: r,
      children: [
        e.jsx(pt, {
          asChild: true,
          children: t || e.jsxs(w, {
            variant: "outline",
            size: "sm",
            className: "flex items-center gap-2",
            type: "button",
            children: [
              e.jsx(Cs, {
                className: "w-4 h-4"
              }),
              "\u6279\u91CF\u5BFC\u51FA"
            ]
          })
        }),
        e.jsxs(Le, {
          className: "sm:max-w-md",
          children: [
            e.jsx(Ae, {
              children: e.jsx(be, {
                children: "\u5BFC\u51FA\u89D2\u8272"
              })
            }),
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("p", {
                  className: "text-sm text-muted-foreground",
                  children: [
                    "\u5C06\u5BFC\u51FA ",
                    s.length,
                    " \u4E2A\u89D2\u8272\u4E3A JSON \u6587\u4EF6\u3002"
                  ]
                }),
                e.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    e.jsx(us, {
                      id: `${x}-include-image`,
                      checked: l,
                      onCheckedChange: (d) => c(d === true)
                    }),
                    e.jsx(k, {
                      htmlFor: `${x}-include-image`,
                      className: "text-sm",
                      children: "\u5305\u542B Base64 \u56FE\u50CF\u6570\u636E"
                    })
                  ]
                }),
                e.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children: l ? "\u6587\u4EF6\u5C06\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5927\u4F46\u5B8C\u6574\u3002" : "\u6587\u4EF6\u4E0D\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5C0F\u4F46\u9700\u8981\u5355\u72EC\u5904\u7406\u56FE\u50CF\u3002"
                })
              ]
            }),
            e.jsxs("div", {
              className: "flex justify-end gap-2",
              children: [
                e.jsx(w, {
                  variant: "outline",
                  onClick: () => r(false),
                  children: "\u53D6\u6D88"
                }),
                e.jsx(w, {
                  onClick: p,
                  children: "\u5BFC\u51FA"
                })
              ]
            })
          ]
        })
      ]
    });
  };
  let ws;
  jr = (s) => {
    var _a2;
    return e.jsxs(U, {
      className: "hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col",
      onClick: () => {
        var _a3;
        return (_a3 = s.onClick) == null ? void 0 : _a3.call(s, s.challenge);
      },
      children: [
        e.jsx(H, {
          className: "pb-2",
          children: e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx("div", {
                className: "bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center",
                children: e.jsx(ke, {
                  className: "w-6 h-6 text-primary"
                })
              }),
              e.jsxs("div", {
                children: [
                  e.jsx(J, {
                    className: "text-lg",
                    children: s.challenge.name
                  }),
                  e.jsx(Y, {
                    className: "line-clamp-1",
                    children: (_a2 = s.challenge.tags) == null ? void 0 : _a2.join(", ")
                  })
                ]
              })
            ]
          })
        }),
        e.jsxs(z, {
          className: "grow",
          children: [
            e.jsx("p", {
              className: "text-sm text-muted-foreground line-clamp-3 mb-4",
              children: s.challenge.description
            }),
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsxs("div", {
                  className: "text-xs font-medium flex items-center gap-1",
                  children: [
                    e.jsx(cs, {
                      className: "w-3 h-3"
                    }),
                    "\u76EE\u6807 (",
                    s.challenge.goals.length,
                    "):"
                  ]
                }),
                e.jsxs("ul", {
                  className: "text-xs text-muted-foreground list-disc list-inside",
                  children: [
                    s.challenge.goals.slice(0, 2).map((t, a) => e.jsx("li", {
                      className: "line-clamp-1",
                      children: t.description
                    }, a)),
                    s.challenge.goals.length > 2 && e.jsxs("li", {
                      className: "list-none",
                      children: [
                        "...\u53CA\u5176\u4ED6 ",
                        s.challenge.goals.length - 2,
                        " \u4E2A\u76EE\u6807"
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsx(As, {
          className: "pt-0 pb-4 border-t-0",
          children: e.jsx(w, {
            variant: "outline",
            size: "sm",
            className: "w-full text-xs",
            onClick: (t) => {
              var _a3;
              t.stopPropagation(), (_a3 = s.onStartSession) == null ? void 0 : _a3.call(s, s.challenge);
            },
            type: "button",
            children: "\u5F00\u59CB\u6311\u6218"
          })
        })
      ]
    });
  };
  ws = [
    "#e74c3c",
    "#3498db",
    "#2ecc71",
    "#f39c12",
    "#9b59b6",
    "#1abc9c",
    "#e67e22",
    "#34495e"
  ];
  function Xa(s, t) {
    var _a2;
    return {
      characterId: s.id,
      name: s.name,
      personality: ((_a2 = s.description) == null ? void 0 : _a2.slice(0, 100)) || "\u53CB\u5584\u7684\u5C0F\u9547\u5C45\u6C11",
      systemPrompt: s.system_prompt || s.description || "",
      avatar: s.avatar || s.imageBase64,
      color: ws[t % ws.length],
      longTermGoal: "\u8FC7\u4E0A\u5E78\u798F\u7684\u751F\u6D3B",
      initialMoney: 50,
      initialHomeLevel: 0,
      aiEnabled: true
    };
  }
  let Wa, qa, Qa;
  Nr = () => {
    const s = K(), [t, a] = g.useState("\u5B81\u9759\u5C0F\u9547"), [r, l] = g.useState(""), [c, x] = g.useState([]), { data: p = [] } = xe((u) => u.from({
      c: Ye
    })), d = new Set(c.map((u) => u.characterId)), i = (u) => {
      if (d.has(u.id)) return;
      const h = Xa(u, c.length);
      x((N) => [
        ...N,
        h
      ]);
    }, o = (u) => {
      x((h) => h.filter((N) => N.characterId !== u));
    }, n = (u, h) => {
      x((N) => N.map((j) => j.characterId === u ? {
        ...j,
        ...h
      } : j));
    }, m = async () => {
      if (!t.trim()) {
        L.error("\u8BF7\u8F93\u5165\u5C0F\u9547\u540D\u79F0");
        return;
      }
      if (c.length === 0) {
        L.error("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
        return;
      }
      if (c.length < 2) {
        L.error("\u5C0F\u9547\u6A21\u5F0F\u81F3\u5C11\u9700\u8981 2 \u4E2A\u89D2\u8272\u624D\u80FD\u4E92\u52A8");
        return;
      }
      if (!He().isReady) {
        L.error("\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E"), s({
          to: "/config/llm"
        });
        return;
      }
      try {
        const h = F(), N = Date.now(), j = c.map((b) => ({
          id: b.characterId,
          name: b.name,
          personality: b.personality,
          avatar: b.avatar,
          systemPrompt: b.systemPrompt,
          color: b.color,
          longTermGoal: b.longTermGoal,
          initialMoney: b.initialMoney,
          initialHomeLevel: b.initialHomeLevel,
          aiEnabled: b.aiEnabled
        })), f = {
          worldName: t.trim(),
          worldDescription: r.trim(),
          characterIds: j.map((b) => b.id),
          characterSnapshots: j,
          tickInterval: 5e3,
          minsPerTick: 20,
          settings: {
            aiEnabled: true,
            workingInterval: 6,
            idleInterval: 2,
            aiDecisionOnTaskComplete: true,
            waitForAICompletion: true,
            maxAIWaitTicks: 3,
            aiTimeoutMs: 3e4,
            fastTickInterval: 500,
            normalTickInterval: 5e3
          }
        }, y = Na(f), S = {
          id: h,
          title: `\u5C0F\u9547: ${t}`,
          contextId: null,
          mode: "small-town",
          modeConfig: f,
          modeState: y,
          createdAt: N,
          updatedAt: N,
          isActive: true
        };
        await ye.sessions.add(S), L.success("\u5C0F\u9547\u5DF2\u521B\u5EFA\uFF01"), s({
          to: "/session/$sessionId",
          params: {
            sessionId: h
          },
          search: {
            mode: "small-town"
          }
        });
      } catch (h) {
        console.error("[SmallTown] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", h), L.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      }
    };
    return e.jsxs("div", {
      className: "max-w-4xl mx-auto space-y-8 pb-12",
      children: [
        e.jsx("div", {
          className: "flex items-center justify-between",
          children: e.jsxs(w, {
            type: "button",
            variant: "ghost",
            size: "sm",
            className: "-ml-2 text-muted-foreground",
            onClick: () => s({
              to: "/plaza/small-town"
            }),
            children: [
              e.jsx(ks, {
                className: "w-4 h-4 mr-1"
              }),
              " \u8FD4\u56DE"
            ]
          })
        }),
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsxs("h1", {
              className: "text-3xl font-bold flex items-center gap-3",
              children: [
                e.jsx(Tt, {
                  className: "w-8 h-8 text-amber-500"
                }),
                "\u521B\u5EFA\u5C0F\u9547"
              ]
            }),
            e.jsx("p", {
              className: "text-muted-foreground",
              children: "\u9009\u62E9\u89D2\u8272\u52A0\u5165\u5C0F\u9547\uFF0C\u4ED6\u4EEC\u5C06\u81EA\u4E3B\u751F\u6D3B\u3001\u5DE5\u4F5C\u3001\u4EA4\u6D41\u3002"
            })
          ]
        }),
        e.jsxs(U, {
          children: [
            e.jsxs(H, {
              children: [
                e.jsxs(J, {
                  className: "flex items-center gap-2 text-lg",
                  children: [
                    e.jsx(nt, {
                      className: "w-5 h-5 text-primary"
                    }),
                    "\u5C0F\u9547\u8BBE\u5B9A"
                  ]
                }),
                e.jsx(Y, {
                  children: "\u8BBE\u7F6E\u5C0F\u9547\u7684\u57FA\u672C\u4FE1\u606F"
                })
              ]
            }),
            e.jsx(z, {
              className: "space-y-4",
              children: e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(k, {
                        htmlFor: "world-name",
                        children: "\u5C0F\u9547\u540D\u79F0 *"
                      }),
                      e.jsx(E, {
                        id: "world-name",
                        placeholder: "\u4F8B\u5982\uFF1A\u5B81\u9759\u5C0F\u9547",
                        value: t,
                        onChange: (u) => a(u.target.value)
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(k, {
                        htmlFor: "world-desc",
                        children: "\u5C0F\u9547\u7B80\u4ECB"
                      }),
                      e.jsx(E, {
                        id: "world-desc",
                        placeholder: "\u4E00\u53E5\u8BDD\u63CF\u8FF0\u8FD9\u4E2A\u5C0F\u9547",
                        value: r,
                        onChange: (u) => l(u.target.value)
                      })
                    ]
                  })
                ]
              })
            })
          ]
        }),
        e.jsxs(U, {
          children: [
            e.jsxs(H, {
              children: [
                e.jsxs(J, {
                  className: "flex items-center gap-2 text-lg",
                  children: [
                    e.jsx(ve, {
                      className: "w-5 h-5 text-primary"
                    }),
                    "\u5C0F\u9547\u5C45\u6C11"
                  ]
                }),
                e.jsx(Y, {
                  children: "\u4ECE\u5DF2\u6709\u89D2\u8272\u4E2D\u9009\u62E9\u5C0F\u9547\u5C45\u6C11\uFF08\u81F3\u5C11 2 \u4E2A\uFF09"
                })
              ]
            }),
            e.jsxs(z, {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(k, {
                      children: "\u6DFB\u52A0\u5C45\u6C11"
                    }),
                    e.jsxs("div", {
                      className: "flex flex-wrap gap-2",
                      children: [
                        p.filter((u) => !d.has(u.id)).map((u) => e.jsxs(w, {
                          type: "button",
                          variant: "outline",
                          size: "sm",
                          className: "gap-2",
                          onClick: () => i(u),
                          children: [
                            e.jsx(te, {
                              className: "w-3 h-3"
                            }),
                            u.name
                          ]
                        }, u.id)),
                        p.length === 0 && e.jsxs("p", {
                          className: "text-sm text-muted-foreground py-2",
                          children: [
                            "\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148",
                            e.jsx(w, {
                              type: "button",
                              variant: "link",
                              className: "px-1 h-auto",
                              onClick: () => s({
                                to: "/create/character"
                              }),
                              children: "\u521B\u5EFA\u89D2\u8272"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                c.length > 0 && e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx(k, {
                      children: "\u5DF2\u9009\u5C45\u6C11\u914D\u7F6E"
                    }),
                    c.map((u) => e.jsx(qa, {
                      config: u,
                      onUpdate: (h) => n(u.characterId, h),
                      onRemove: () => o(u.characterId)
                    }, u.characterId))
                  ]
                }),
                c.length === 0 && e.jsxs("div", {
                  className: "text-center py-10 border border-dashed rounded-xl",
                  children: [
                    e.jsx(ve, {
                      className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3"
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: "\u8BF7\u4ECE\u4E0A\u65B9\u9009\u62E9\u89D2\u8272\u52A0\u5165\u5C0F\u9547"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex justify-end gap-4",
          children: [
            e.jsx(w, {
              type: "button",
              variant: "outline",
              onClick: () => s({
                to: "/plaza/small-town"
              }),
              children: "\u53D6\u6D88"
            }),
            e.jsxs(w, {
              type: "button",
              size: "lg",
              className: "gap-2 px-8",
              onClick: m,
              disabled: !t.trim() || c.length < 2,
              children: [
                e.jsx(os, {
                  className: "w-5 h-5"
                }),
                "\u521B\u5EFA\u5C0F\u9547"
              ]
            })
          ]
        })
      ]
    });
  };
  Wa = [
    "\u6D41\u6D6A\u8005",
    "\u6551\u6D4E\u623F",
    "\u516C\u5BD3",
    "\u5957\u623F",
    "\u8C6A\u534E\u5957\u623F",
    "\u522B\u5885"
  ];
  qa = ({ config: s, onUpdate: t, onRemove: a }) => e.jsxs("div", {
    className: A("p-4 rounded-xl border relative group transition-colors", "border-muted/50 bg-muted/10"),
    children: [
      e.jsx(w, {
        type: "button",
        variant: "ghost",
        size: "icon",
        className: "absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity",
        onClick: a,
        children: e.jsx(Je, {
          className: "w-4 h-4 text-muted-foreground"
        })
      }),
      e.jsxs("div", {
        className: "flex items-start gap-4 mb-4",
        children: [
          e.jsx("div", {
            className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-bold",
            style: {
              backgroundColor: s.color
            },
            children: s.name.charAt(0)
          }),
          e.jsxs("div", {
            className: "grow min-w-0",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2 mb-1",
                children: [
                  e.jsx("span", {
                    className: "font-bold",
                    children: s.name
                  }),
                  e.jsx(R, {
                    variant: "outline",
                    className: "text-[9px]",
                    children: s.aiEnabled ? "AI \u63A7\u5236" : "\u73A9\u5BB6\u63A7\u5236"
                  })
                ]
              }),
              e.jsx("p", {
                className: "text-xs text-muted-foreground truncate",
                children: s.personality
              })
            ]
          })
        ]
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
        children: [
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(k, {
                className: "text-xs",
                children: "\u957F\u671F\u76EE\u6807"
              }),
              e.jsx(G, {
                value: s.longTermGoal,
                onChange: (r) => t({
                  longTermGoal: r.target.value
                }),
                className: "h-16 text-sm resize-none",
                placeholder: "\u8FD9\u4E2A\u89D2\u8272\u7684\u4EBA\u751F\u76EE\u6807\u662F\u4EC0\u4E48\uFF1F"
              })
            ]
          }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(k, {
                className: "text-xs",
                children: "\u6027\u683C\u63CF\u8FF0"
              }),
              e.jsx(G, {
                value: s.personality,
                onChange: (r) => t({
                  personality: r.target.value
                }),
                className: "h-16 text-sm resize-none",
                placeholder: "\u7B80\u77ED\u63CF\u8FF0\u6027\u683C\u7279\u70B9"
              })
            ]
          })
        ]
      }),
      e.jsxs("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-3",
        children: [
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsxs(k, {
                className: "text-xs flex items-center gap-1",
                children: [
                  e.jsx(Mt, {
                    className: "w-3 h-3"
                  }),
                  " \u521D\u59CB\u91D1\u94B1"
                ]
              }),
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(ys, {
                    value: [
                      s.initialMoney
                    ],
                    onValueChange: ([r]) => t({
                      initialMoney: r
                    }),
                    min: 0,
                    max: 200,
                    step: 10,
                    className: "flex-1"
                  }),
                  e.jsxs("span", {
                    className: "text-xs font-mono w-8 text-right",
                    children: [
                      "$",
                      s.initialMoney
                    ]
                  })
                ]
              })
            ]
          }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(k, {
                className: "text-xs",
                children: "\u521D\u59CB\u4F4F\u623F"
              }),
              e.jsx("select", {
                className: "w-full h-8 text-xs rounded border bg-background px-2",
                value: s.initialHomeLevel,
                onChange: (r) => t({
                  initialHomeLevel: Number(r.target.value)
                }),
                children: Wa.map((r, l) => e.jsx("option", {
                  value: l,
                  children: r
                }, l))
              })
            ]
          }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(k, {
                className: "text-xs",
                children: "\u989C\u8272"
              }),
              e.jsx("div", {
                className: "flex gap-1 flex-wrap",
                children: ws.map((r) => e.jsx("button", {
                  type: "button",
                  className: A("w-5 h-5 rounded-full border-2 transition-transform", s.color === r ? "border-primary scale-110" : "border-transparent"),
                  style: {
                    backgroundColor: r
                  },
                  onClick: () => t({
                    color: r
                  })
                }, r))
              })
            ]
          }),
          e.jsx("div", {
            className: "flex items-end pb-1",
            children: e.jsxs("label", {
              className: "flex items-center gap-2 cursor-pointer",
              children: [
                e.jsx(us, {
                  checked: s.aiEnabled,
                  onCheckedChange: (r) => t({
                    aiEnabled: !!r
                  })
                }),
                e.jsx(Z, {
                  className: "w-3 h-3"
                }),
                e.jsx("span", {
                  className: "text-xs font-medium",
                  children: "AI \u63A7\u5236"
                })
              ]
            })
          })
        ]
      })
    ]
  });
  vr = () => {
    const s = K(), [t, a] = g.useState(""), [r, l] = g.useState(""), [c, x] = g.useState(""), [p, d] = g.useState(5), [i, o] = g.useState(/* @__PURE__ */ new Set()), [n, m] = g.useState([]), { data: u = [] } = xe((f) => f.from({
      c: Ye
    })), h = (f) => {
      if (i.has(f.id)) return;
      const y = {
        id: f.id,
        name: f.name,
        description: f.description,
        systemPrompt: f.system_prompt || f.description,
        avatar: f.avatar || f.imageBase64,
        personality: f.personality || "",
        firstMessage: f.first_mes || ""
      };
      o(/* @__PURE__ */ new Set([
        ...i,
        f.id
      ])), m([
        ...n,
        y
      ]);
    }, N = (f) => {
      const y = new Set(i);
      y.delete(f), o(y), m(n.filter((S) => S.id !== f));
    }, j = async () => {
      if (n.length === 0) {
        L.warning("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
        return;
      }
      if (!He().isReady) {
        L.warning("\u8BF7\u5148\u914D\u7F6E LLM \u8FDE\u63A5");
        return;
      }
      try {
        const y = F(), S = Date.now(), b = {
          id: y,
          title: t || `\u7FA4\u804A: ${n.map((v) => v.name).join("\u3001")}`,
          mode: "group-chat",
          modeConfig: {
            topic: t || void 0,
            participantSnapshots: n,
            userName: r || "\u6211",
            dmSystemPrompt: c || void 0,
            maxAIAutoSpeakCount: p
          },
          modeState: {
            currentPhase: "dm_select_speaker",
            currentUIState: "idle",
            currentSpeakerId: "",
            messageCount: 0,
            speakCounts: {},
            aiAutoSpeakCounter: 0
          },
          createdAt: S,
          updatedAt: S,
          isActive: true
        };
        await ye.sessions.add(b), L.success("\u7FA4\u804A\u5DF2\u521B\u5EFA\uFF01"), s({
          to: "/session/$sessionId",
          params: {
            sessionId: y
          },
          search: {
            mode: "group-chat"
          }
        });
      } catch (y) {
        console.error("[GroupChat] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", y), L.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      }
    };
    return e.jsxs("div", {
      className: "max-w-3xl mx-auto space-y-8 pb-12",
      children: [
        e.jsx("div", {
          className: "flex items-center justify-between",
          children: e.jsxs(w, {
            type: "button",
            variant: "ghost",
            size: "sm",
            className: "-ml-2 text-muted-foreground",
            onClick: () => s({
              to: "/plaza/characters"
            }),
            children: [
              e.jsx(ks, {
                className: "w-4 h-4 mr-1"
              }),
              " \u8FD4\u56DE"
            ]
          })
        }),
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsxs("h1", {
              className: "text-3xl font-bold flex items-center gap-3",
              children: [
                e.jsx(ts, {
                  className: "w-8 h-8 text-violet-500"
                }),
                "\u521B\u5EFA\u7FA4\u804A"
              ]
            }),
            e.jsx("p", {
              className: "text-muted-foreground",
              children: "\u9009\u62E9 AI \u89D2\u8272\u52A0\u5165\u7FA4\u804A\uFF0C\u4EE5\u4F60\u81EA\u5DF1\u7684\u8EAB\u4EFD\u53C2\u4E0E\u5BF9\u8BDD\u3002"
            })
          ]
        }),
        e.jsxs(U, {
          children: [
            e.jsxs(H, {
              children: [
                e.jsxs(J, {
                  className: "flex items-center gap-2 text-lg",
                  children: [
                    e.jsx(ts, {
                      className: "w-5 h-5 text-primary"
                    }),
                    "\u57FA\u672C\u4FE1\u606F"
                  ]
                }),
                e.jsx(Y, {
                  children: "\u8BBE\u7F6E\u7FA4\u804A\u8BDD\u9898\u548C\u4F60\u7684\u540D\u79F0"
                })
              ]
            }),
            e.jsxs(z, {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(k, {
                          htmlFor: "gc-topic",
                          children: "\u7FA4\u804A\u8BDD\u9898\uFF08\u53EF\u9009\uFF09"
                        }),
                        e.jsx(E, {
                          id: "gc-topic",
                          placeholder: "\u4F8B\u5982\uFF1A\u8BA8\u8BBA\u4ECA\u5929\u7684\u5192\u9669\u8BA1\u5212",
                          value: t,
                          onChange: (f) => a(f.target.value)
                        })
                      ]
                    }),
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(k, {
                          htmlFor: "gc-username",
                          children: "\u4F60\u7684\u540D\u79F0"
                        }),
                        e.jsx(E, {
                          id: "gc-username",
                          placeholder: "\u9ED8\u8BA4\uFF1A\u6211",
                          value: r,
                          onChange: (f) => l(f.target.value)
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(k, {
                      htmlFor: "gc-dm-prompt",
                      children: "DM \u8C03\u5EA6\u63D0\u793A\u8BCD\uFF08\u53EF\u9009\uFF09"
                    }),
                    e.jsx(G, {
                      id: "gc-dm-prompt",
                      placeholder: "\u81EA\u5B9A\u4E49 DM \u5982\u4F55\u9009\u62E9\u4E0B\u4E00\u4F4D\u53D1\u8A00\u8005...",
                      className: "min-h-16",
                      value: c,
                      onChange: (f) => x(f.target.value)
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "DM \u662F\u9690\u5F62\u7684\u8C03\u5EA6\u8005\uFF0C\u8D1F\u8D23\u5728\u540E\u53F0\u9009\u62E9\u54EA\u4E2A AI \u89D2\u8272\u4E0B\u4E00\u4E2A\u53D1\u8A00\u3002"
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(k, {
                      htmlFor: "gc-max-ai",
                      children: "AI \u81EA\u4E3B\u53D1\u8A00\u6700\u5927\u6570\u91CF"
                    }),
                    e.jsx(E, {
                      id: "gc-max-ai",
                      type: "number",
                      min: 1,
                      max: 50,
                      value: p,
                      onChange: (f) => d(Number(f.target.value) || 5)
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "AI \u89D2\u8272\u8FDE\u7EED\u53D1\u8A00\u8FBE\u5230\u6B64\u6570\u91CF\u540E\u5C06\u6682\u505C\uFF0C\u7B49\u5F85\u4F60\u53D1\u9001\u6D88\u606F\u540E\u7EE7\u7EED\u3002"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs(U, {
          children: [
            e.jsxs(H, {
              children: [
                e.jsxs(J, {
                  className: "flex items-center gap-2 text-lg",
                  children: [
                    e.jsx(ve, {
                      className: "w-5 h-5 text-primary"
                    }),
                    "\u7FA4\u804A\u89D2\u8272"
                  ]
                }),
                e.jsx(Y, {
                  children: "\u9009\u62E9\u52A0\u5165\u7FA4\u804A\u7684 AI \u89D2\u8272"
                })
              ]
            }),
            e.jsxs(z, {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(k, {
                      children: "\u6DFB\u52A0\u89D2\u8272"
                    }),
                    e.jsxs("div", {
                      className: "flex flex-wrap gap-2",
                      children: [
                        u.filter((f) => !i.has(f.id)).map((f) => e.jsxs(w, {
                          type: "button",
                          variant: "outline",
                          size: "sm",
                          className: "gap-2",
                          onClick: () => h(f),
                          children: [
                            e.jsx(te, {
                              className: "w-3 h-3"
                            }),
                            f.name
                          ]
                        }, f.id)),
                        u.length === 0 && e.jsxs("p", {
                          className: "text-sm text-muted-foreground py-2",
                          children: [
                            "\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148",
                            e.jsx(w, {
                              type: "button",
                              variant: "link",
                              className: "px-1 h-auto",
                              onClick: () => s({
                                to: "/create/character"
                              }),
                              children: "\u521B\u5EFA\u89D2\u8272"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                n.length > 0 ? e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    e.jsxs(k, {
                      children: [
                        "\u5DF2\u9009 (",
                        n.length,
                        ")"
                      ]
                    }),
                    n.map((f) => e.jsxs("div", {
                      className: "flex items-center gap-3 p-3 rounded-xl border border-muted/50 bg-muted/10 group",
                      children: [
                        e.jsx("div", {
                          className: "w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-600",
                          children: e.jsx(Z, {
                            className: "w-4 h-4"
                          })
                        }),
                        e.jsxs("div", {
                          className: "grow min-w-0",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx("span", {
                                  className: "font-bold text-sm",
                                  children: f.name
                                }),
                                e.jsx(R, {
                                  variant: "outline",
                                  className: "text-[9px]",
                                  children: "AI"
                                })
                              ]
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground truncate",
                              children: f.description
                            })
                          ]
                        }),
                        e.jsx(w, {
                          type: "button",
                          variant: "ghost",
                          size: "icon",
                          className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity",
                          onClick: () => N(f.id),
                          children: e.jsx(Je, {
                            className: "w-4 h-4 text-muted-foreground"
                          })
                        })
                      ]
                    }, f.id))
                  ]
                }) : e.jsxs("div", {
                  className: "text-center py-10 border border-dashed rounded-xl",
                  children: [
                    e.jsx(ve, {
                      className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3"
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: "\u8BF7\u9009\u62E9\u81F3\u5C11\u4E00\u4E2A\u89D2\u8272\u52A0\u5165\u7FA4\u804A"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex justify-end gap-4",
          children: [
            e.jsx(w, {
              type: "button",
              variant: "outline",
              onClick: () => s({
                to: "/plaza/characters"
              }),
              children: "\u53D6\u6D88"
            }),
            e.jsxs(w, {
              type: "button",
              size: "lg",
              className: "gap-2 px-8",
              onClick: j,
              disabled: n.length === 0,
              children: [
                e.jsx(os, {
                  className: "w-5 h-5"
                }),
                "\u5F00\u59CB\u7FA4\u804A"
              ]
            })
          ]
        })
      ]
    });
  };
  Qa = {
    \u529B\u91CF: 10,
    \u654F\u6377: 10,
    \u4F53\u8D28: 10,
    \u667A\u529B: 10,
    \u611F\u77E5: 10,
    \u9B45\u529B: 10
  };
  function Za(s) {
    return {
      characterId: s.id,
      name: s.name,
      description: s.description,
      systemPrompt: s.system_prompt || s.description,
      avatar: s.avatar || s.imageBase64,
      race: "\u4EBA\u7C7B",
      class: "\u5192\u9669\u8005",
      isHumanControlled: false,
      currentHP: 20,
      maxHP: 20,
      attributes: {
        ...Qa
      }
    };
  }
  let en, sn, _, tn, an, nn;
  br = () => {
    const s = K(), [t, a] = g.useState(""), [r, l] = g.useState(""), [c, x] = g.useState(""), [p, d] = g.useState(""), [i, o] = g.useState("standard"), [n, m] = g.useState([]), { data: u = [] } = xe((b) => b.from({
      c: Ye
    })), h = new Set(n.map((b) => b.characterId)), N = (b) => {
      if (h.has(b.id)) return;
      const v = Za(b);
      n.length === 0 && (v.isHumanControlled = true), m((C) => [
        ...C,
        v
      ]);
    }, j = (b) => {
      m((v) => v.filter((C) => C.characterId !== b));
    }, f = (b, v) => {
      m((C) => C.map(($) => $.characterId === b ? {
        ...$,
        ...v
      } : $));
    }, y = (b, v, C) => {
      m(($) => $.map((V) => V.characterId === b ? {
        ...V,
        attributes: {
          ...V.attributes,
          [v]: C
        }
      } : V));
    }, S = async () => {
      if (!t.trim()) {
        L.error("\u8BF7\u8F93\u5165\u4E16\u754C\u540D\u79F0");
        return;
      }
      if (!c.trim()) {
        L.error("\u8BF7\u8F93\u5165\u4E16\u754C\u7CFB\u7EDF\u63D0\u793A\u8BCD");
        return;
      }
      if (n.length === 0) {
        L.error("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
        return;
      }
      if (!He().isReady) {
        L.error("\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E"), s({
          to: "/config/llm"
        });
        return;
      }
      if (!n.some((C) => C.isHumanControlled) && i !== "solo") {
        L.error("\u8BF7\u81F3\u5C11\u6307\u5B9A\u4E00\u4E2A\u4EBA\u7C7B\u63A7\u5236\u7684\u89D2\u8272");
        return;
      }
      try {
        const C = F(), $ = Date.now(), V = n.map((P) => ({
          id: P.characterId,
          name: P.name,
          description: P.description,
          systemPrompt: P.systemPrompt,
          avatar: P.avatar,
          attributes: P.attributes,
          race: P.race,
          class: P.class,
          currentHP: P.currentHP,
          maxHP: P.maxHP,
          isHumanControlled: P.isHumanControlled
        })), I = {
          id: C,
          title: `DnD: ${t}`,
          contextId: null,
          mode: "dnd",
          modeConfig: {
            worldSnapshot: {
              name: t,
              description: r,
              systemPrompt: c,
              globalKnowledge: p || void 0
            },
            gameMode: i,
            playerCharacterSnapshots: V,
            dmName: "Dungeon Master"
          },
          modeState: {
            currentPhase: "dm_game_intro",
            currentUIState: "idle",
            currentTurnCharacterId: "dm",
            currentRound: 1,
            turnCounts: {},
            historySummary: ""
          },
          createdAt: $,
          updatedAt: $,
          isActive: true
        };
        await ye.sessions.add(I), L.success("DnD \u5192\u9669\u5DF2\u521B\u5EFA\uFF01"), s({
          to: "/session/$sessionId",
          params: {
            sessionId: C
          },
          search: {
            mode: "dnd"
          }
        });
      } catch (C) {
        console.error("[DnD] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", C), L.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      }
    };
    return e.jsxs("div", {
      className: "max-w-4xl mx-auto space-y-8 pb-12",
      children: [
        e.jsx("div", {
          className: "flex items-center justify-between",
          children: e.jsxs(w, {
            type: "button",
            variant: "ghost",
            size: "sm",
            className: "-ml-2 text-muted-foreground",
            onClick: () => s({
              to: "/plaza/characters"
            }),
            children: [
              e.jsx(ks, {
                className: "w-4 h-4 mr-1"
              }),
              " \u8FD4\u56DE"
            ]
          })
        }),
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsxs("h1", {
              className: "text-3xl font-bold flex items-center gap-3",
              children: [
                e.jsx(as, {
                  className: "w-8 h-8 text-amber-500"
                }),
                "\u521B\u5EFA DnD \u5192\u9669"
              ]
            }),
            e.jsx("p", {
              className: "text-muted-foreground",
              children: "\u914D\u7F6E\u4E16\u754C\u8BBE\u5B9A\u3001\u9009\u62E9\u5192\u9669\u89D2\u8272\uFF0C\u5F00\u542F\u4E00\u6BB5\u684C\u6E38\u98CE\u683C\u7684\u591A\u4EBA\u5192\u9669\u3002"
            })
          ]
        }),
        e.jsxs(U, {
          children: [
            e.jsxs(H, {
              children: [
                e.jsxs(J, {
                  className: "flex items-center gap-2 text-lg",
                  children: [
                    e.jsx(nt, {
                      className: "w-5 h-5 text-primary"
                    }),
                    "\u4E16\u754C\u8BBE\u5B9A"
                  ]
                }),
                e.jsx(Y, {
                  children: "\u63CF\u8FF0\u5192\u9669\u53D1\u751F\u7684\u4E16\u754C\u80CC\u666F"
                })
              ]
            }),
            e.jsxs(z, {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(k, {
                          htmlFor: "world-name",
                          children: "\u4E16\u754C\u540D\u79F0 *"
                        }),
                        e.jsx(E, {
                          id: "world-name",
                          placeholder: "\u4F8B\u5982\uFF1A\u88AB\u9057\u5FD8\u7684\u56FD\u5EA6",
                          value: t,
                          onChange: (b) => a(b.target.value)
                        })
                      ]
                    }),
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(k, {
                          htmlFor: "world-desc",
                          children: "\u4E16\u754C\u7B80\u4ECB"
                        }),
                        e.jsx(E, {
                          id: "world-desc",
                          placeholder: "\u4E00\u53E5\u8BDD\u63CF\u8FF0\u8FD9\u4E2A\u4E16\u754C",
                          value: r,
                          onChange: (b) => l(b.target.value)
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(k, {
                      htmlFor: "world-prompt",
                      children: "DM \u7CFB\u7EDF\u63D0\u793A\u8BCD *"
                    }),
                    e.jsx(G, {
                      id: "world-prompt",
                      placeholder: "\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684 DM\uFF0C\u64C5\u957F\u5728\u4E2D\u4E16\u7EAA\u5947\u5E7B\u4E16\u754C\u4E2D\u5F15\u5BFC\u5192\u9669...",
                      className: "min-h-32",
                      value: c,
                      onChange: (b) => x(b.target.value)
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "\u6307\u5BFC LLM \u5982\u4F55\u626E\u6F14 DM\u3002\u5305\u62EC\u4E16\u754C\u89C4\u5219\u3001\u8BED\u6C14\u98CE\u683C\u3001\u53D9\u4E8B\u504F\u597D\u7B49\u3002"
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(k, {
                      htmlFor: "world-knowledge",
                      children: "\u4E16\u754C\u89C2\u8865\u5145\uFF08\u53EF\u9009\uFF09"
                    }),
                    e.jsx(G, {
                      id: "world-knowledge",
                      placeholder: "\u8865\u5145\u7684\u5730\u7406\u3001\u5386\u53F2\u3001\u9635\u8425\u3001NPC \u7B49\u4FE1\u606F...",
                      className: "min-h-20",
                      value: p,
                      onChange: (b) => d(b.target.value)
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs(U, {
          children: [
            e.jsxs(H, {
              children: [
                e.jsxs(J, {
                  className: "flex items-center gap-2 text-lg",
                  children: [
                    e.jsx(ve, {
                      className: "w-5 h-5 text-primary"
                    }),
                    "\u5192\u9669\u89D2\u8272"
                  ]
                }),
                e.jsx(Y, {
                  children: "\u4ECE\u5DF2\u6709\u89D2\u8272\u4E2D\u9009\u62E9\u53C2\u4E0E\u5192\u9669\u7684\u89D2\u8272\uFF0C\u5E76\u914D\u7F6E DnD \u5C5E\u6027"
                })
              ]
            }),
            e.jsxs(z, {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(k, {
                      children: "\u6DFB\u52A0\u89D2\u8272"
                    }),
                    e.jsxs("div", {
                      className: "flex flex-wrap gap-2",
                      children: [
                        u.filter((b) => !h.has(b.id)).map((b) => e.jsxs(w, {
                          type: "button",
                          variant: "outline",
                          size: "sm",
                          className: "gap-2",
                          onClick: () => N(b),
                          children: [
                            e.jsx(te, {
                              className: "w-3 h-3"
                            }),
                            b.name
                          ]
                        }, b.id)),
                        u.length === 0 && e.jsxs("p", {
                          className: "text-sm text-muted-foreground py-2",
                          children: [
                            "\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148",
                            e.jsx(w, {
                              type: "button",
                              variant: "link",
                              className: "px-1 h-auto",
                              onClick: () => s({
                                to: "/create/character"
                              }),
                              children: "\u521B\u5EFA\u89D2\u8272"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                n.length > 0 && e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx(k, {
                      children: "\u5DF2\u9009\u89D2\u8272\u914D\u7F6E"
                    }),
                    n.map((b) => e.jsx(sn, {
                      config: b,
                      onUpdate: (v) => f(b.characterId, v),
                      onUpdateAttribute: (v, C) => y(b.characterId, v, C),
                      onRemove: () => j(b.characterId)
                    }, b.characterId))
                  ]
                }),
                n.length === 0 && e.jsxs("div", {
                  className: "text-center py-10 border border-dashed rounded-xl",
                  children: [
                    e.jsx(ve, {
                      className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3"
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: "\u8BF7\u4ECE\u4E0A\u65B9\u9009\u62E9\u89D2\u8272\u52A0\u5165\u5192\u9669"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs(U, {
          children: [
            e.jsx(H, {
              children: e.jsxs(J, {
                className: "flex items-center gap-2 text-lg",
                children: [
                  e.jsx(Ie, {
                    className: "w-5 h-5 text-primary"
                  }),
                  "\u6E38\u620F\u8BBE\u7F6E"
                ]
              })
            }),
            e.jsx(z, {
              className: "space-y-4",
              children: e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(k, {
                    children: "\u6E38\u620F\u6A21\u5F0F"
                  }),
                  e.jsxs(Re, {
                    value: i,
                    onValueChange: (b) => o(b),
                    children: [
                      e.jsx($e, {
                        className: "w-full md:w-80",
                        children: e.jsx(Fe, {})
                      }),
                      e.jsxs(Be, {
                        children: [
                          e.jsx(ie, {
                            value: "standard",
                            children: e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(Oe, {
                                  className: "w-4 h-4"
                                }),
                                "\u6807\u51C6\u6A21\u5F0F \u2014 \u5B8C\u6574\u68C0\u5B9A\u6D41\u7A0B"
                              ]
                            })
                          }),
                          e.jsx(ie, {
                            value: "narrative",
                            children: e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(Oe, {
                                  className: "w-4 h-4"
                                }),
                                "\u53D9\u4E8B\u6A21\u5F0F \u2014 DM \u53EF\u8DF3\u8FC7\u68C0\u5B9A"
                              ]
                            })
                          }),
                          e.jsx(ie, {
                            value: "hardcore",
                            children: e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(Oe, {
                                  className: "w-4 h-4"
                                }),
                                "\u786C\u6838\u6A21\u5F0F \u2014 \u4E25\u683C\u89C4\u5219\uFF0C\u9AD8 DC"
                              ]
                            })
                          }),
                          e.jsx(ie, {
                            value: "solo",
                            children: e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(Oe, {
                                  className: "w-4 h-4"
                                }),
                                "\u72EC\u594F\u6A21\u5F0F \u2014 \u5168 AI \u81EA\u52A8\u8FD0\u884C"
                              ]
                            })
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex justify-end gap-4",
          children: [
            e.jsx(w, {
              type: "button",
              variant: "outline",
              onClick: () => s({
                to: "/plaza/characters"
              }),
              children: "\u53D6\u6D88"
            }),
            e.jsxs(w, {
              type: "button",
              size: "lg",
              className: "gap-2 px-8",
              onClick: S,
              disabled: !t.trim() || !c.trim() || n.length === 0,
              children: [
                e.jsx(os, {
                  className: "w-5 h-5"
                }),
                "\u5F00\u59CB\u5192\u9669"
              ]
            })
          ]
        })
      ]
    });
  };
  en = [
    "\u529B\u91CF",
    "\u654F\u6377",
    "\u4F53\u8D28",
    "\u667A\u529B",
    "\u611F\u77E5",
    "\u9B45\u529B"
  ];
  sn = ({ config: s, onUpdate: t, onUpdateAttribute: a, onRemove: r }) => e.jsxs("div", {
    className: A("p-4 rounded-xl border relative group transition-colors", s.isHumanControlled ? "border-blue-500/30 bg-blue-500/5" : "border-muted/50 bg-muted/10"),
    children: [
      e.jsx(w, {
        type: "button",
        variant: "ghost",
        size: "icon",
        className: "absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity",
        onClick: r,
        children: e.jsx(Je, {
          className: "w-4 h-4 text-muted-foreground"
        })
      }),
      e.jsxs("div", {
        className: "flex items-start gap-4 mb-4",
        children: [
          e.jsx("div", {
            className: A("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", s.isHumanControlled ? "bg-blue-500/20" : "bg-muted"),
            children: s.isHumanControlled ? e.jsx(ns, {
              className: "w-5 h-5 text-blue-500"
            }) : e.jsx(Z, {
              className: "w-5 h-5 text-muted-foreground"
            })
          }),
          e.jsxs("div", {
            className: "grow min-w-0",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2 mb-1",
                children: [
                  e.jsx("span", {
                    className: "font-bold",
                    children: s.name
                  }),
                  e.jsx(R, {
                    variant: "outline",
                    className: "text-[9px]",
                    children: s.isHumanControlled ? "\u73A9\u5BB6\u63A7\u5236" : "AI \u63A7\u5236"
                  })
                ]
              }),
              e.jsx("p", {
                className: "text-xs text-muted-foreground truncate",
                children: s.description
              })
            ]
          })
        ]
      }),
      e.jsxs("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-4",
        children: [
          e.jsxs("div", {
            className: "space-y-1",
            children: [
              e.jsx(k, {
                className: "text-[10px] uppercase tracking-wider text-muted-foreground",
                children: "\u79CD\u65CF"
              }),
              e.jsx(E, {
                value: s.race,
                onChange: (l) => t({
                  race: l.target.value
                }),
                className: "h-8 text-sm",
                placeholder: "\u4EBA\u7C7B"
              })
            ]
          }),
          e.jsxs("div", {
            className: "space-y-1",
            children: [
              e.jsx(k, {
                className: "text-[10px] uppercase tracking-wider text-muted-foreground",
                children: "\u804C\u4E1A"
              }),
              e.jsx(E, {
                value: s.class,
                onChange: (l) => t({
                  class: l.target.value
                }),
                className: "h-8 text-sm",
                placeholder: "\u6218\u58EB"
              })
            ]
          }),
          e.jsxs("div", {
            className: "space-y-1",
            children: [
              e.jsx(k, {
                className: "text-[10px] uppercase tracking-wider text-muted-foreground",
                children: "HP"
              }),
              e.jsx(E, {
                type: "number",
                value: s.maxHP,
                onChange: (l) => {
                  const c = Number(l.target.value) || 20;
                  t({
                    maxHP: c,
                    currentHP: c
                  });
                },
                className: "h-8 text-sm",
                min: 1
              })
            ]
          }),
          e.jsx("div", {
            className: "flex items-end pb-1",
            children: e.jsxs("label", {
              className: "flex items-center gap-2 cursor-pointer",
              children: [
                e.jsx(us, {
                  checked: s.isHumanControlled,
                  onCheckedChange: (l) => t({
                    isHumanControlled: !!l
                  })
                }),
                e.jsx("span", {
                  className: "text-xs font-medium",
                  children: "\u73A9\u5BB6\u63A7\u5236"
                })
              ]
            })
          })
        ]
      }),
      e.jsx("div", {
        className: "grid grid-cols-3 md:grid-cols-6 gap-2",
        children: en.map((l) => e.jsxs("div", {
          className: "space-y-1",
          children: [
            e.jsx(k, {
              className: "text-[9px] uppercase tracking-wider text-muted-foreground text-center block",
              children: l
            }),
            e.jsx(E, {
              type: "number",
              value: s.attributes[l],
              onChange: (c) => a(l, Number(c.target.value) || 10),
              className: "h-8 text-sm text-center font-mono",
              min: 1,
              max: 30
            })
          ]
        }, l))
      })
    ]
  });
  _ = Q({
    currentSession: null,
    isLoading: false,
    streamingContent: "",
    startNewSession(s) {
      const t = Date.now(), a = {
        id: `chat-create-char-${t}`,
        mode: "chat-create-character",
        modeConfig: {
          presetHint: s
        },
        modeState: Os(),
        createdAt: t,
        updatedAt: t
      };
      return this.currentSession = a, this.isLoading = false, this.streamingContent = "", a;
    },
    getState() {
      var _a2;
      return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState) ?? null;
    },
    getMessages() {
      var _a2;
      return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.messages) ?? [];
    },
    addUserMessage(s) {
      const t = {
        id: F(),
        role: "user",
        content: s,
        timestamp: Date.now(),
        messageType: "chat"
      };
      return this.currentSession && (this.currentSession.modeState.messages.push(t), this.currentSession.updatedAt = Date.now()), t;
    },
    addAssistantMessage(s, t = "chat") {
      const a = {
        id: F(),
        role: "assistant",
        content: s,
        timestamp: Date.now(),
        messageType: t
      };
      return this.currentSession && (this.currentSession.modeState.messages.push(a), this.currentSession.updatedAt = Date.now()), a;
    },
    setUIState(s) {
      this.currentSession && (this.currentSession.modeState.currentUIState = s, this.currentSession.updatedAt = Date.now());
    },
    setGeneratedDescription(s) {
      this.currentSession && (this.currentSession.modeState.generatedDescription = s, this.currentSession.updatedAt = Date.now());
    },
    setGeneratedJson(s) {
      this.currentSession && (this.currentSession.modeState.generatedJson = s, this.currentSession.updatedAt = Date.now());
    },
    updateGeneratedJsonField(s, t) {
      var _a2;
      ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.generatedJson) && (this.currentSession.modeState.generatedJson[s] = t, this.currentSession.updatedAt = Date.now());
    },
    setDescriptionConfirmed(s) {
      this.currentSession && (this.currentSession.modeState.descriptionConfirmed = s, this.currentSession.updatedAt = Date.now());
    },
    setLoading(s) {
      this.isLoading = s;
    },
    setStreamingContent(s) {
      this.streamingContent = s;
    },
    clearStreamingContent() {
      this.streamingContent = "";
    },
    endSession() {
      this.currentSession = null, this.isLoading = false, this.streamingContent = "";
    },
    resetSession() {
      this.currentSession && (this.currentSession.modeState = Os(), this.currentSession.updatedAt = Date.now()), this.isLoading = false, this.streamingContent = "";
    }
  });
  tn = `\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u7684\u89D2\u8272\u521B\u5EFA\u987E\u95EE\u3002\u4F60\u7684\u4EFB\u52A1\u662F\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u7528\u6237\u521B\u5EFA\u4E00\u4E2A AI \u89D2\u8272\u5361\u3002

\u4F60\u9700\u8981\u6536\u96C6\u4EE5\u4E0B\u4FE1\u606F\uFF1A
1. \u89D2\u8272\u7684\u57FA\u672C\u4FE1\u606F\uFF08\u540D\u5B57\u3001\u6027\u522B\u3001\u5E74\u9F84\u7B49\uFF09
2. \u89D2\u8272\u7684\u5916\u8C8C\u7279\u5F81
3. \u89D2\u8272\u7684\u6027\u683C\u7279\u70B9
4. \u89D2\u8272\u7684\u80CC\u666F\u6545\u4E8B
5. \u89D2\u8272\u7684\u8BF4\u8BDD\u98CE\u683C\u548C\u53E3\u5934\u7985
6. \u89D2\u8272\u7684\u6280\u80FD\u6216\u7279\u6B8A\u80FD\u529B
7. \u89D2\u8272\u9002\u7528\u7684\u573A\u666F

\u8BF7\u7528\u53CB\u597D\u3001\u4E13\u4E1A\u7684\u8BED\u6C14\u4E0E\u7528\u6237\u4EA4\u6D41\uFF0C\u4E00\u6B21\u53EA\u95EE 1-2 \u4E2A\u95EE\u9898\uFF0C\u907F\u514D\u8BA9\u7528\u6237\u611F\u5230\u538B\u529B\u3002
\u6839\u636E\u7528\u6237\u7684\u56DE\u7B54\u7075\u6D3B\u8C03\u6574\u95EE\u9898\uFF0C\u6DF1\u5165\u6316\u6398\u89D2\u8272\u7684\u7EC6\u8282\u3002
\u5F53\u4F60\u8BA4\u4E3A\u6536\u96C6\u7684\u4FE1\u606F\u8DB3\u591F\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u89D2\u8272\u65F6\uFF0C\u5728\u56DE\u590D\u7684\u672B\u5C3E\u6DFB\u52A0 [INFO_COMPLETE] \u6807\u8BB0\u3002`;
  an = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u4E00\u4EFD\u5B8C\u6574\u7684\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\u3002
\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA\uFF1A

## \u89D2\u8272\u540D\u79F0
[\u89D2\u8272\u540D\u5B57]

## \u57FA\u672C\u4FE1\u606F
[\u5E74\u9F84\u3001\u6027\u522B\u7B49\u57FA\u672C\u4FE1\u606F]

## \u5916\u8C8C\u7279\u5F81
[\u5916\u8C8C\u63CF\u8FF0]

## \u6027\u683C\u7279\u70B9
[\u6027\u683C\u63CF\u8FF0]

## \u80CC\u666F\u6545\u4E8B
[\u80CC\u666F\u6545\u4E8B]

## \u8BF4\u8BDD\u98CE\u683C
[\u8BF4\u8BDD\u65B9\u5F0F\u3001\u53E3\u5934\u7985\u7B49]

## \u6280\u80FD\u4E0E\u80FD\u529B
[\u7279\u6B8A\u6280\u80FD\u6216\u80FD\u529B]

## \u9002\u7528\u573A\u666F
[\u89D2\u8272\u9002\u5408\u7684\u5BF9\u8BDD\u573A\u666F]

\u8BF7\u786E\u4FDD\u63CF\u8FF0\u8BE6\u7EC6\u3001\u751F\u52A8\uFF0C\u80FD\u591F\u5B8C\u6574\u5448\u73B0\u8FD9\u4E2A\u89D2\u8272\u7684\u5F62\u8C61\u3002`;
  nn = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u548C\u89D2\u8272\u63CF\u8FF0\uFF0C\u751F\u6210\u4E00\u4E2A\u7B26\u5408\u89C4\u8303\u7684\u89D2\u8272\u5361 JSON\u3002

\u8BF7\u4E25\u683C\u6309\u7167\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA JSON\uFF08\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\uFF09\uFF1A
{
  "name": "\u89D2\u8272\u540D\u79F0",
  "description": "\u89D2\u8272\u7684\u8BE6\u7EC6\u63CF\u8FF0\uFF0C\u5305\u62EC\u5916\u8C8C\u3001\u80CC\u666F\u7B49",
  "personality": "\u89D2\u8272\u7684\u6027\u683C\u7279\u70B9",
  "scenario": "\u89D2\u8272\u6240\u5904\u7684\u573A\u666F\u8BBE\u5B9A",
  "first_mes": "\u89D2\u8272\u7684\u7B2C\u4E00\u6761\u5F00\u573A\u6D88\u606F\uFF0C\u5E94\u8BE5\u7B26\u5408\u89D2\u8272\u7684\u8BF4\u8BDD\u98CE\u683C",
  "mes_example": "\u89D2\u8272\u7684\u5BF9\u8BDD\u793A\u4F8B\uFF0C\u5C55\u793A\u5176\u8BF4\u8BDD\u98CE\u683C",
  "creator_notes": "\u521B\u5EFA\u8005\u5907\u6CE8",
  "system_prompt": "\u7ED9 AI \u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u63CF\u8FF0\u5982\u4F55\u626E\u6F14\u8FD9\u4E2A\u89D2\u8272",
  "post_history_instructions": "\u5386\u53F2\u6D88\u606F\u540E\u7684\u6307\u4EE4",
  "tags": ["\u6807\u7B7E1", "\u6807\u7B7E2"]
}

\u786E\u4FDD JSON \u683C\u5F0F\u6B63\u786E\uFF0C\u6240\u6709\u5B57\u6BB5\u90FD\u6709\u5408\u9002\u7684\u5185\u5BB9\u3002`;
  function rn() {
    const s = ms(), t = K(), a = g.useRef(false), r = ue(_), l = g.useCallback(async (i) => {
      if (!(a.current || !_.currentSession)) try {
        a.current = true, _.setLoading(true), _.addUserMessage(i);
        const o = _.currentSession.modeState.currentUIState;
        (o === "idle" || o === "interview_waiting") && _.setUIState("interview_running");
        const n = _.getMessages(), m = [
          {
            id: F(),
            role: "system",
            content: tn
          },
          ...n.map((j) => ({
            id: j.id,
            role: j.role,
            content: j.content
          }))
        ];
        let u = "";
        _.clearStreamingContent(), await s.callLLMStream(m, (j, f) => {
          u = f, _.setStreamingContent(f);
        });
        const h = u.includes("[INFO_COMPLETE]"), N = u.replace("[INFO_COMPLETE]", "").trim();
        _.addAssistantMessage(N), _.clearStreamingContent(), h ? _.setUIState("description_confirming") : _.setUIState("interview_waiting");
      } catch (o) {
        console.error("Chat Create Character Error:", o), L.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", {
          duration: 5e3,
          action: {
            label: "\u524D\u5F80\u914D\u7F6E",
            onClick: () => t({
              to: "/config/llm"
            })
          }
        }), _.setUIState("interview_waiting");
      } finally {
        a.current = false, _.setLoading(false);
      }
    }, [
      s,
      t
    ]), c = g.useCallback(async () => {
      if (!(a.current || !_.currentSession)) try {
        a.current = true, _.setLoading(true), _.setUIState("description_generating");
        const i = _.getMessages(), o = [
          {
            id: F(),
            role: "system",
            content: an
          },
          ...i.map((m) => ({
            id: m.id,
            role: m.role,
            content: m.content
          })),
          {
            id: F(),
            role: "user",
            content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\u3002"
          }
        ];
        let n = "";
        _.clearStreamingContent(), await s.callLLMStream(o, (m, u) => {
          n = u, _.setStreamingContent(u);
        }), _.setGeneratedDescription(n), _.addAssistantMessage(n, "description_summary"), _.clearStreamingContent(), _.setUIState("description_confirming");
      } catch (i) {
        console.error("Generate Description Error:", i), L.error("\u751F\u6210\u63CF\u8FF0\u5931\u8D25"), _.setUIState("interview_waiting");
      } finally {
        a.current = false, _.setLoading(false);
      }
    }, [
      s
    ]), x = g.useCallback(async () => {
      if (!(a.current || !_.currentSession)) try {
        a.current = true, _.setLoading(true), _.setUIState("json_generating");
        const i = _.getMessages(), o = _.currentSession.modeState.generatedDescription, n = [
          {
            id: F(),
            role: "system",
            content: nn
          },
          ...i.map((u) => ({
            id: u.id,
            role: u.role,
            content: u.content
          }))
        ];
        o && n.push({
          id: F(),
          role: "assistant",
          content: `\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\uFF1A
${o}`
        }), n.push({
          id: F(),
          role: "user",
          content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u4FE1\u606F\uFF0C\u751F\u6210\u89D2\u8272\u5361 JSON\u3002\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\u3002"
        });
        let m = "";
        await s.callLLMStream(n, (u, h) => {
          m = h, _.setStreamingContent(h);
        });
        try {
          let u = m;
          const h = m.match(/```(?:json)?\s*([\s\S]*?)```/);
          h && (u = h[1].trim());
          const N = JSON.parse(u), j = Date.now(), f = {
            id: `char-${j}`,
            name: N.name || "\u672A\u547D\u540D\u89D2\u8272",
            description: N.description || "",
            personality: N.personality || "",
            scenario: N.scenario || "",
            first_mes: N.first_mes || "",
            mes_example: N.mes_example || "",
            creator_notes: N.creator_notes || "",
            system_prompt: N.system_prompt || "",
            post_history_instructions: N.post_history_instructions || "",
            alternate_greetings: N.alternate_greetings || [],
            group_only_greetings: N.group_only_greetings || [],
            tags: N.tags || [],
            extensions: N.extensions || {},
            creator: "User",
            character_version: "1.0",
            createdAt: j,
            updatedAt: j
          };
          _.setGeneratedJson(f), _.clearStreamingContent(), _.setUIState("json_editing"), L.success("\u89D2\u8272\u5361\u751F\u6210\u6210\u529F\uFF01");
        } catch (u) {
          console.error("JSON Parse Error:", u), L.error("JSON \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), _.setUIState("description_confirming");
        }
      } catch (i) {
        console.error("Generate JSON Error:", i), L.error("\u751F\u6210\u89D2\u8272\u5361\u5931\u8D25"), _.setUIState("description_confirming");
      } finally {
        a.current = false, _.setLoading(false);
      }
    }, [
      s
    ]), p = g.useCallback(() => {
      _.setUIState("json_confirmed");
    }, []), d = g.useCallback(async () => {
      await x();
    }, [
      x
    ]);
    return {
      store: r,
      sendMessage: l,
      generateDescription: c,
      generateJson: x,
      confirmJson: p,
      regenerateJson: d,
      isLoading: r.isLoading,
      streamingContent: r.streamingContent
    };
  }
  yr = function() {
    var _a2, _b, _c, _d;
    const s = K(), t = ue(_), { sendMessage: a, generateDescription: r, generateJson: l, confirmJson: c, regenerateJson: x, isLoading: p, streamingContent: d } = rn(), [i, o] = g.useState("");
    g.useEffect(() => (_.currentSession || _.startNewSession(), () => {
    }), []);
    const n = ((_a2 = t.currentSession) == null ? void 0 : _a2.modeState.currentUIState) ?? "idle", m = va[n], u = ((_b = t.currentSession) == null ? void 0 : _b.modeState.messages) ?? [], h = (_c = t.currentSession) == null ? void 0 : _c.modeState.generatedJson, N = g.useCallback(async () => {
      if (!i.trim() || p) return;
      const v = i.trim();
      o(""), await a(v);
    }, [
      i,
      p,
      a
    ]), j = g.useCallback((v) => {
      v.key === "Enter" && !v.shiftKey && (v.preventDefault(), N());
    }, [
      N
    ]), f = g.useCallback(() => {
      if (!h) return;
      const v = new Blob([
        JSON.stringify(h, null, 2)
      ], {
        type: "application/json"
      }), C = URL.createObjectURL(v), $ = document.createElement("a");
      $.href = C, $.download = `${h.name || "character"}.json`, $.click(), URL.revokeObjectURL(C), L.success("\u89D2\u8272\u5361\u5DF2\u5BFC\u51FA");
    }, [
      h
    ]), y = g.useCallback(async () => {
      if (h) try {
        const v = JSON.parse(JSON.stringify(h));
        await ye.characters.add(v), L.success(`\u89D2\u8272 ${v.name} \u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A`), _.setUIState("completed"), s({
          to: "/plaza/characters"
        });
      } catch (v) {
        console.error("Add to plaza error:", v), L.error("\u6DFB\u52A0\u5931\u8D25");
      }
    }, [
      h,
      s
    ]), S = g.useCallback(() => {
      _.endSession(), s({
        to: "/create"
      });
    }, [
      s
    ]), b = g.useCallback(() => {
      _.resetSession();
    }, []);
    return e.jsxs("div", {
      className: "flex flex-col h-full max-h-[calc(100vh-4rem)]",
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between p-4 border-b",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsx(w, {
                  type: "button",
                  variant: "ghost",
                  size: "icon",
                  onClick: S,
                  children: e.jsx(Is, {
                    className: "w-5 h-5"
                  })
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h1", {
                      className: "text-lg font-semibold",
                      children: "\u804A\u5929\u5F0F\u521B\u5EFA\u89D2\u8272"
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: "\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u521B\u5EFA\u89D2\u8272\u5361"
                    })
                  ]
                })
              ]
            }),
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx(R, {
                  variant: "outline",
                  children: m.label
                }),
                u.length > 0 && e.jsx(w, {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  onClick: b,
                  children: "\u91CD\u65B0\u5F00\u59CB"
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex flex-1 overflow-hidden",
          children: [
            e.jsxs("div", {
              className: "flex-1 flex flex-col overflow-hidden",
              children: [
                e.jsxs("div", {
                  className: "flex-1 overflow-y-auto p-4 space-y-4",
                  children: [
                    u.length === 0 && !d && e.jsxs("div", {
                      className: "text-center text-muted-foreground py-12",
                      children: [
                        e.jsx(me, {
                          className: "w-12 h-12 mx-auto mb-4 opacity-50"
                        }),
                        e.jsx("p", {
                          children: "\u5F00\u59CB\u63CF\u8FF0\u4F60\u60F3\u521B\u5EFA\u7684\u89D2\u8272\u5427\uFF01"
                        }),
                        e.jsx("p", {
                          className: "text-sm mt-2",
                          children: "\u4F8B\u5982\uFF1A\u6211\u60F3\u521B\u5EFA\u4E00\u4E2A\u6E29\u67D4\u7684\u56FE\u4E66\u9986\u7BA1\u7406\u5458..."
                        })
                      ]
                    }),
                    u.map((v) => e.jsxs("div", {
                      className: A("max-w-[80%] rounded-lg p-3", v.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"),
                      children: [
                        e.jsx("div", {
                          className: "whitespace-pre-wrap text-sm",
                          children: v.content
                        }),
                        v.messageType === "description_summary" && e.jsx(R, {
                          variant: "secondary",
                          className: "mt-2",
                          children: "\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3"
                        })
                      ]
                    }, v.id)),
                    d && e.jsxs("div", {
                      className: "max-w-[80%] rounded-lg p-3 bg-muted",
                      children: [
                        e.jsx("div", {
                          className: "whitespace-pre-wrap text-sm",
                          children: d
                        }),
                        e.jsx("span", {
                          className: "inline-block w-2 h-4 bg-foreground/50 animate-pulse ml-1"
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "p-4 border-t space-y-3",
                  children: [
                    e.jsxs("div", {
                      className: "flex flex-wrap gap-2",
                      children: [
                        n === "description_confirming" && e.jsxs(e.Fragment, {
                          children: [
                            e.jsxs(w, {
                              type: "button",
                              size: "sm",
                              onClick: l,
                              disabled: p,
                              children: [
                                e.jsx(Ce, {
                                  className: "w-4 h-4 mr-1"
                                }),
                                "\u786E\u8BA4\u5E76\u751F\u6210\u89D2\u8272\u5361"
                              ]
                            }),
                            e.jsxs(w, {
                              type: "button",
                              size: "sm",
                              variant: "outline",
                              onClick: r,
                              disabled: p,
                              children: [
                                e.jsx(rs, {
                                  className: "w-4 h-4 mr-1"
                                }),
                                "\u91CD\u65B0\u751F\u6210\u63CF\u8FF0"
                              ]
                            })
                          ]
                        }),
                        (n === "interview_waiting" || n === "idle") && u.length > 2 && e.jsxs(w, {
                          type: "button",
                          size: "sm",
                          variant: "secondary",
                          onClick: l,
                          disabled: p,
                          children: [
                            e.jsx(me, {
                              className: "w-4 h-4 mr-1"
                            }),
                            "\u7ACB\u5373\u751F\u6210\u89D2\u8272\u5361"
                          ]
                        })
                      ]
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx(G, {
                          value: i,
                          onChange: (v) => o(v.target.value),
                          onKeyDown: j,
                          placeholder: m.placeholder,
                          disabled: !m.inputEnabled || p,
                          className: "min-h-[60px] max-h-[120px] resize-none"
                        }),
                        e.jsx(w, {
                          type: "button",
                          size: "icon",
                          onClick: N,
                          disabled: !m.inputEnabled || p || !i.trim(),
                          children: e.jsx(Te, {
                            className: "w-4 h-4"
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (n === "json_editing" || n === "json_confirmed" || n === "completed") && h && e.jsxs("div", {
              className: "w-96 border-l overflow-y-auto p-4 space-y-4",
              children: [
                e.jsxs(U, {
                  children: [
                    e.jsx(H, {
                      className: "pb-2",
                      children: e.jsxs(J, {
                        className: "text-base flex items-center justify-between",
                        children: [
                          "\u89D2\u8272\u5361\u9884\u89C8",
                          e.jsx("div", {
                            className: "flex gap-1",
                            children: e.jsx(w, {
                              type: "button",
                              size: "icon",
                              variant: "ghost",
                              onClick: x,
                              disabled: p,
                              title: "\u91CD\u65B0\u751F\u6210",
                              children: e.jsx(rs, {
                                className: "w-4 h-4"
                              })
                            })
                          })
                        ]
                      })
                    }),
                    e.jsxs(z, {
                      className: "space-y-3",
                      children: [
                        e.jsx(we, {
                          label: "\u540D\u79F0",
                          value: h.name,
                          onChange: (v) => _.updateGeneratedJsonField("name", v)
                        }),
                        e.jsx(we, {
                          label: "\u63CF\u8FF0",
                          value: h.description,
                          multiline: true,
                          onChange: (v) => _.updateGeneratedJsonField("description", v)
                        }),
                        e.jsx(we, {
                          label: "\u6027\u683C",
                          value: h.personality,
                          onChange: (v) => _.updateGeneratedJsonField("personality", v)
                        }),
                        e.jsx(we, {
                          label: "\u573A\u666F",
                          value: h.scenario,
                          onChange: (v) => _.updateGeneratedJsonField("scenario", v)
                        }),
                        e.jsx(we, {
                          label: "\u5F00\u573A\u767D",
                          value: h.first_mes,
                          multiline: true,
                          onChange: (v) => _.updateGeneratedJsonField("first_mes", v)
                        }),
                        e.jsx(we, {
                          label: "\u7CFB\u7EDF\u63D0\u793A\u8BCD",
                          value: h.system_prompt,
                          multiline: true,
                          onChange: (v) => _.updateGeneratedJsonField("system_prompt", v)
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className: "text-xs text-muted-foreground",
                              children: "\u6807\u7B7E"
                            }),
                            e.jsx("div", {
                              className: "flex flex-wrap gap-1 mt-1",
                              children: (_d = h.tags) == null ? void 0 : _d.map((v, C) => e.jsx(R, {
                                variant: "secondary",
                                className: "text-xs",
                                children: v
                              }, C))
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                n !== "completed" && e.jsxs("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    e.jsxs(w, {
                      type: "button",
                      onClick: y,
                      className: "w-full",
                      children: [
                        e.jsx(te, {
                          className: "w-4 h-4 mr-2"
                        }),
                        "\u6DFB\u52A0\u5230\u5E7F\u573A"
                      ]
                    }),
                    e.jsxs(w, {
                      type: "button",
                      variant: "outline",
                      onClick: f,
                      className: "w-full",
                      children: [
                        e.jsx(Cs, {
                          className: "w-4 h-4 mr-2"
                        }),
                        "\u5BFC\u51FA\u4E3A\u6587\u4EF6"
                      ]
                    }),
                    n === "json_editing" && e.jsxs(w, {
                      type: "button",
                      variant: "secondary",
                      onClick: c,
                      className: "w-full",
                      children: [
                        e.jsx(Ce, {
                          className: "w-4 h-4 mr-2"
                        }),
                        "\u786E\u8BA4\u5B8C\u6210\u7F16\u8F91"
                      ]
                    })
                  ]
                }),
                n === "completed" && e.jsxs("div", {
                  className: "text-center text-muted-foreground py-4",
                  children: [
                    e.jsx(Ce, {
                      className: "w-8 h-8 mx-auto mb-2 text-green-500"
                    }),
                    e.jsx("p", {
                      children: "\u89D2\u8272\u5361\u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A\uFF01"
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  };
  function we({ label: s, value: t, multiline: a = false, onChange: r }) {
    const [l, c] = g.useState(false), [x, p] = g.useState(t), d = () => {
      r(x), c(false);
    }, i = () => {
      p(t), c(false);
    };
    return l ? e.jsxs("div", {
      className: "space-y-1",
      children: [
        e.jsx("span", {
          className: "text-xs text-muted-foreground",
          children: s
        }),
        a ? e.jsx(G, {
          value: x,
          onChange: (o) => p(o.target.value),
          className: "text-sm min-h-[60px]",
          autoFocus: true
        }) : e.jsx("input", {
          type: "text",
          value: x,
          onChange: (o) => p(o.target.value),
          className: "w-full text-sm border rounded px-2 py-1 bg-background",
          autoFocus: true
        }),
        e.jsxs("div", {
          className: "flex gap-1",
          children: [
            e.jsx(w, {
              type: "button",
              size: "sm",
              variant: "ghost",
              onClick: d,
              children: "\u4FDD\u5B58"
            }),
            e.jsx(w, {
              type: "button",
              size: "sm",
              variant: "ghost",
              onClick: i,
              children: "\u53D6\u6D88"
            })
          ]
        })
      ]
    }) : e.jsxs("div", {
      className: "cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors",
      onClick: () => {
        p(t), c(true);
      },
      children: [
        e.jsx("span", {
          className: "text-xs text-muted-foreground",
          children: s
        }),
        e.jsx("p", {
          className: A("text-sm", a ? "whitespace-pre-wrap line-clamp-3" : "truncate"),
          children: t || e.jsx("span", {
            className: "text-muted-foreground italic",
            children: "\u70B9\u51FB\u7F16\u8F91"
          })
        })
      ]
    });
  }
  const T = Q({
    currentSession: null,
    isLoading: false,
    streamingContent: "",
    startNewSession(s, t) {
      const a = Date.now(), r = {
        id: `chat-create-chal-${a}`,
        mode: "chat-create-challenge",
        modeConfig: {
          presetHint: s,
          preselectedCharacterId: t
        },
        modeState: Rs(),
        createdAt: a,
        updatedAt: a
      };
      return this.currentSession = r, this.isLoading = false, this.streamingContent = "", r;
    },
    getState() {
      var _a2;
      return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState) ?? null;
    },
    getMessages() {
      var _a2;
      return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.messages) ?? [];
    },
    addUserMessage(s) {
      const t = {
        id: F(),
        role: "user",
        content: s,
        timestamp: Date.now(),
        messageType: "chat"
      };
      return this.currentSession && (this.currentSession.modeState.messages.push(t), this.currentSession.updatedAt = Date.now()), t;
    },
    addAssistantMessage(s, t = "chat") {
      const a = {
        id: F(),
        role: "assistant",
        content: s,
        timestamp: Date.now(),
        messageType: t
      };
      return this.currentSession && (this.currentSession.modeState.messages.push(a), this.currentSession.updatedAt = Date.now()), a;
    },
    setUIState(s) {
      this.currentSession && (this.currentSession.modeState.currentUIState = s, this.currentSession.updatedAt = Date.now());
    },
    setGeneratedDescription(s) {
      this.currentSession && (this.currentSession.modeState.generatedDescription = s, this.currentSession.updatedAt = Date.now());
    },
    setGeneratedJson(s) {
      this.currentSession && (this.currentSession.modeState.generatedJson = s, this.currentSession.updatedAt = Date.now());
    },
    updateGeneratedJsonField(s, t) {
      var _a2;
      ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.generatedJson) && (this.currentSession.modeState.generatedJson[s] = t, this.currentSession.updatedAt = Date.now());
    },
    setDescriptionConfirmed(s) {
      this.currentSession && (this.currentSession.modeState.descriptionConfirmed = s, this.currentSession.updatedAt = Date.now());
    },
    setLoading(s) {
      this.isLoading = s;
    },
    setStreamingContent(s) {
      this.streamingContent = s;
    },
    clearStreamingContent() {
      this.streamingContent = "";
    },
    endSession() {
      this.currentSession = null, this.isLoading = false, this.streamingContent = "";
    },
    resetSession() {
      this.currentSession && (this.currentSession.modeState = Rs(), this.currentSession.updatedAt = Date.now()), this.isLoading = false, this.streamingContent = "";
    }
  }), ln = `\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u7684\u6311\u6218\u8BBE\u8BA1\u987E\u95EE\u3002\u4F60\u7684\u4EFB\u52A1\u662F\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u7528\u6237\u521B\u5EFA\u4E00\u4E2A\u6311\u6218\u5361\u3002

\u4F60\u9700\u8981\u6536\u96C6\u4EE5\u4E0B\u4FE1\u606F\uFF1A
1. \u6311\u6218\u7684\u57FA\u672C\u6982\u5FF5\uFF08\u540D\u79F0\u3001\u4E3B\u9898\u3001\u6545\u4E8B\u80CC\u666F\uFF09
2. \u6311\u6218\u7684\u76EE\u6807\uFF08\u73A9\u5BB6\u9700\u8981\u8FBE\u6210\u4EC0\u4E48\uFF09
3. \u6311\u6218\u7684\u5931\u8D25\u6761\u4EF6\uFF08\u4EC0\u4E48\u60C5\u51B5\u4E0B\u7B97\u5931\u8D25\uFF09
4. \u9700\u8981\u8FFD\u8E2A\u7684\u53D8\u91CF\uFF08\u5982\u597D\u611F\u5EA6\u3001\u91D1\u94B1\u3001\u65F6\u95F4\u7B49\uFF0C\u5305\u62EC\u521D\u59CB\u503C\u548C\u8303\u56F4\uFF09
5. \u89D2\u8272\u5728\u6311\u6218\u4E2D\u7684\u884C\u4E3A\u65B9\u5F0F\uFF08roleTaskPrompt\uFF09
6. \u7ED9\u73A9\u5BB6\u7684\u5F15\u5BFC\u63D0\u793A\uFF08userGuidance\uFF09
7. \u96BE\u5EA6\u548C\u9884\u671F\u4F53\u9A8C

\u8BF7\u7528\u53CB\u597D\u3001\u4E13\u4E1A\u7684\u8BED\u6C14\u4E0E\u7528\u6237\u4EA4\u6D41\uFF0C\u4E00\u6B21\u53EA\u95EE 1-2 \u4E2A\u95EE\u9898\u3002
\u5E2E\u52A9\u7528\u6237\u8BBE\u8BA1\u6709\u8DA3\u4E14\u5E73\u8861\u7684\u6311\u6218\uFF0C\u7ED9\u51FA\u4E13\u4E1A\u5EFA\u8BAE\u3002
\u5F53\u4F60\u8BA4\u4E3A\u6536\u96C6\u7684\u4FE1\u606F\u8DB3\u591F\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u6311\u6218\u65F6\uFF0C\u5728\u56DE\u590D\u7684\u672B\u5C3E\u6DFB\u52A0 [INFO_COMPLETE] \u6807\u8BB0\u3002`, cn = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u4E00\u4EFD\u5B8C\u6574\u7684\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3\u3002
\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA\uFF1A

## \u6311\u6218\u540D\u79F0
[\u6311\u6218\u540D\u5B57]

## \u6311\u6218\u63CF\u8FF0
[\u6311\u6218\u7684\u80CC\u666F\u6545\u4E8B\u548C\u60C5\u5883\u63CF\u8FF0]

## \u53D8\u91CF\u8BBE\u8BA1
| \u53D8\u91CF\u540D | \u7C7B\u578B | \u521D\u59CB\u503C | \u8303\u56F4 | \u8BF4\u660E |
|--------|------|--------|------|------|
[\u5217\u51FA\u6240\u6709\u9700\u8981\u8FFD\u8E2A\u7684\u53D8\u91CF]

## \u76EE\u6807\u6761\u4EF6
[\u5217\u51FA\u73A9\u5BB6\u9700\u8981\u8FBE\u6210\u7684\u76EE\u6807\u53CA\u5176\u6761\u4EF6]

## \u5931\u8D25\u6761\u4EF6
[\u5217\u51FA\u4F1A\u5BFC\u81F4\u5931\u8D25\u7684\u6761\u4EF6]

## \u89D2\u8272\u884C\u4E3A\u6307\u5BFC
[\u89D2\u8272\u5728\u6B64\u6311\u6218\u4E2D\u5E94\u8BE5\u5982\u4F55\u8868\u73B0]

## \u73A9\u5BB6\u5F15\u5BFC
[\u7ED9\u73A9\u5BB6\u7684\u63D0\u793A\u548C\u5EFA\u8BAE]

\u8BF7\u786E\u4FDD\u8BBE\u8BA1\u5408\u7406\u3001\u5E73\u8861\uFF0C\u80FD\u591F\u5E26\u6765\u6709\u8DA3\u7684\u6E38\u620F\u4F53\u9A8C\u3002`, on = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u548C\u6311\u6218\u8BBE\u8BA1\uFF0C\u751F\u6210\u4E00\u4E2A\u7B26\u5408\u89C4\u8303\u7684\u6311\u6218\u5361 JSON\u3002

\u53D8\u91CF\u6761\u4EF6\u8868\u8FBE\u5F0F\u683C\u5F0F\uFF1A
- ['gt', 'varName', value] - \u5927\u4E8E
- ['gte', 'varName', value] - \u5927\u4E8E\u7B49\u4E8E
- ['lt', 'varName', value] - \u5C0F\u4E8E
- ['lte', 'varName', value] - \u5C0F\u4E8E\u7B49\u4E8E
- ['eq', 'varName', value] - \u7B49\u4E8E
- ['isTrue', 'varName'] - \u5E03\u5C14\u771F
- ['isFalse', 'varName'] - \u5E03\u5C14\u5047
- ['and', [...conditions]] - \u4E0E
- ['or', [...conditions]] - \u6216

\u8BF7\u4E25\u683C\u6309\u7167\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA JSON\uFF08\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\uFF09\uFF1A
{
  "name": "\u6311\u6218\u540D\u79F0",
  "description": "\u6311\u6218\u63CF\u8FF0",
  "characterId": "",
  "roleTaskPrompt": "\u89D2\u8272\u5728\u6311\u6218\u4E2D\u7684\u884C\u4E3A\u6307\u5BFC",
  "userGuidance": "\u7ED9\u73A9\u5BB6\u7684\u5F15\u5BFC\u63D0\u793A",
  "variables": {
    "\u53D8\u91CF\u540D": {
      "key": "\u53D8\u91CF\u540D",
      "type": "number",
      "description": "\u53D8\u91CF\u8BF4\u660E",
      "hidden": false,
      "initial": 0,
      "min": 0,
      "max": 100
    }
  },
  "goals": [
    {
      "key": "goal_key",
      "description": "\u76EE\u6807\u63CF\u8FF0",
      "condition": ["gte", "\u53D8\u91CF\u540D", 100],
      "characterPrompt": "\u8FBE\u6210\u540E\u7ED9\u89D2\u8272\u7684\u63D0\u793A",
      "userInfo": "\u8FBE\u6210\u540E\u7ED9\u73A9\u5BB6\u7684\u4FE1\u606F"
    }
  ],
  "failureChecks": [
    {
      "key": "failure_key",
      "description": "\u5931\u8D25\u6761\u4EF6\u63CF\u8FF0",
      "condition": ["lte", "\u53D8\u91CF\u540D", 0],
      "characterPrompt": "\u5931\u8D25\u540E\u7ED9\u89D2\u8272\u7684\u63D0\u793A",
      "userInfo": "\u5931\u8D25\u540E\u7ED9\u73A9\u5BB6\u7684\u4FE1\u606F"
    }
  ],
  "tags": ["\u6807\u7B7E1", "\u6807\u7B7E2"]
}

\u786E\u4FDD JSON \u683C\u5F0F\u6B63\u786E\uFF0C\u6761\u4EF6\u8868\u8FBE\u5F0F\u8BED\u6CD5\u6B63\u786E\u3002`;
  function dn() {
    const s = ms(), t = K(), a = g.useRef(false), r = ue(T), l = g.useCallback(async (i) => {
      if (!(a.current || !T.currentSession)) try {
        a.current = true, T.setLoading(true), T.addUserMessage(i);
        const o = T.currentSession.modeState.currentUIState;
        (o === "idle" || o === "interview_waiting") && T.setUIState("interview_running");
        const n = T.getMessages(), m = [
          {
            id: F(),
            role: "system",
            content: ln
          },
          ...n.map((j) => ({
            id: j.id,
            role: j.role,
            content: j.content
          }))
        ];
        let u = "";
        T.clearStreamingContent(), await s.callLLMStream(m, (j, f) => {
          u = f, T.setStreamingContent(f);
        });
        const h = u.includes("[INFO_COMPLETE]"), N = u.replace("[INFO_COMPLETE]", "").trim();
        T.addAssistantMessage(N), T.clearStreamingContent(), h ? T.setUIState("description_confirming") : T.setUIState("interview_waiting");
      } catch (o) {
        console.error("Chat Create Challenge Error:", o), L.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", {
          duration: 5e3,
          action: {
            label: "\u524D\u5F80\u914D\u7F6E",
            onClick: () => t({
              to: "/config/llm"
            })
          }
        }), T.setUIState("interview_waiting");
      } finally {
        a.current = false, T.setLoading(false);
      }
    }, [
      s,
      t
    ]), c = g.useCallback(async () => {
      if (!(a.current || !T.currentSession)) try {
        a.current = true, T.setLoading(true), T.setUIState("description_generating");
        const i = T.getMessages(), o = [
          {
            id: F(),
            role: "system",
            content: cn
          },
          ...i.map((m) => ({
            id: m.id,
            role: m.role,
            content: m.content
          })),
          {
            id: F(),
            role: "user",
            content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3\u3002"
          }
        ];
        let n = "";
        T.clearStreamingContent(), await s.callLLMStream(o, (m, u) => {
          n = u, T.setStreamingContent(u);
        }), T.setGeneratedDescription(n), T.addAssistantMessage(n, "description_summary"), T.clearStreamingContent(), T.setUIState("description_confirming");
      } catch (i) {
        console.error("Generate Description Error:", i), L.error("\u751F\u6210\u8BBE\u8BA1\u603B\u7ED3\u5931\u8D25"), T.setUIState("interview_waiting");
      } finally {
        a.current = false, T.setLoading(false);
      }
    }, [
      s
    ]), x = g.useCallback(async () => {
      if (!(a.current || !T.currentSession)) try {
        a.current = true, T.setLoading(true), T.setUIState("json_generating");
        const i = T.getMessages(), o = T.currentSession.modeState.generatedDescription, n = [
          {
            id: F(),
            role: "system",
            content: on
          },
          ...i.map((u) => ({
            id: u.id,
            role: u.role,
            content: u.content
          }))
        ];
        o && n.push({
          id: F(),
          role: "assistant",
          content: `\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3\uFF1A
${o}`
        }), n.push({
          id: F(),
          role: "user",
          content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u4FE1\u606F\uFF0C\u751F\u6210\u6311\u6218\u5361 JSON\u3002\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\u3002"
        });
        let m = "";
        await s.callLLMStream(n, (u, h) => {
          m = h, T.setStreamingContent(h);
        });
        try {
          let u = m;
          const h = m.match(/```(?:json)?\s*([\s\S]*?)```/);
          h && (u = h[1].trim());
          const N = JSON.parse(u), j = Date.now(), f = {
            id: `chal-${j}`,
            name: N.name || "\u672A\u547D\u540D\u6311\u6218",
            description: N.description || "",
            characterId: N.characterId || "",
            roleTaskPrompt: N.roleTaskPrompt || "",
            userGuidance: N.userGuidance || "",
            variables: N.variables || {},
            goals: N.goals || [],
            failureChecks: N.failureChecks || [],
            tags: N.tags || [],
            createdAt: j,
            updatedAt: j
          };
          T.setGeneratedJson(f), T.clearStreamingContent(), T.setUIState("json_editing"), L.success("\u6311\u6218\u5361\u751F\u6210\u6210\u529F\uFF01");
        } catch (u) {
          console.error("JSON Parse Error:", u), L.error("JSON \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), T.setUIState("description_confirming");
        }
      } catch (i) {
        console.error("Generate JSON Error:", i), L.error("\u751F\u6210\u6311\u6218\u5361\u5931\u8D25"), T.setUIState("description_confirming");
      } finally {
        a.current = false, T.setLoading(false);
      }
    }, [
      s
    ]), p = g.useCallback(() => {
      T.setUIState("json_confirmed");
    }, []), d = g.useCallback(async () => {
      await x();
    }, [
      x
    ]);
    return {
      store: r,
      sendMessage: l,
      generateDescription: c,
      generateJson: x,
      confirmJson: p,
      regenerateJson: d,
      isLoading: r.isLoading,
      streamingContent: r.streamingContent
    };
  }
  wr = function() {
    var _a2, _b, _c, _d;
    const s = K(), t = ue(T), { sendMessage: a, generateDescription: r, generateJson: l, confirmJson: c, regenerateJson: x, isLoading: p, streamingContent: d } = dn(), [i, o] = g.useState("");
    g.useEffect(() => (T.currentSession || T.startNewSession(), () => {
    }), []);
    const n = ((_a2 = t.currentSession) == null ? void 0 : _a2.modeState.currentUIState) ?? "idle", m = ba[n], u = ((_b = t.currentSession) == null ? void 0 : _b.modeState.messages) ?? [], h = (_c = t.currentSession) == null ? void 0 : _c.modeState.generatedJson, N = g.useCallback(async () => {
      if (!i.trim() || p) return;
      const v = i.trim();
      o(""), await a(v);
    }, [
      i,
      p,
      a
    ]), j = g.useCallback((v) => {
      v.key === "Enter" && !v.shiftKey && (v.preventDefault(), N());
    }, [
      N
    ]), f = g.useCallback(() => {
      if (!h) return;
      const v = new Blob([
        JSON.stringify(h, null, 2)
      ], {
        type: "application/json"
      }), C = URL.createObjectURL(v), $ = document.createElement("a");
      $.href = C, $.download = `${h.name || "challenge"}.json`, $.click(), URL.revokeObjectURL(C), L.success("\u6311\u6218\u5361\u5DF2\u5BFC\u51FA");
    }, [
      h
    ]), y = g.useCallback(async () => {
      if (h) try {
        const v = JSON.parse(JSON.stringify(h));
        await ye.challenges.add(v), L.success(`\u6311\u6218 ${v.name} \u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A`), T.setUIState("completed"), s({
          to: "/plaza/challenges"
        });
      } catch (v) {
        console.error("Add to plaza error:", v), L.error("\u6DFB\u52A0\u5931\u8D25");
      }
    }, [
      h,
      s
    ]), S = g.useCallback(() => {
      T.endSession(), s({
        to: "/create"
      });
    }, [
      s
    ]), b = g.useCallback(() => {
      T.resetSession();
    }, []);
    return e.jsxs("div", {
      className: "flex flex-col h-full max-h-[calc(100vh-4rem)]",
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between p-4 border-b",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsx(w, {
                  type: "button",
                  variant: "ghost",
                  size: "icon",
                  onClick: S,
                  children: e.jsx(Is, {
                    className: "w-5 h-5"
                  })
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h1", {
                      className: "text-lg font-semibold",
                      children: "\u804A\u5929\u5F0F\u521B\u5EFA\u6311\u6218"
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: "\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u521B\u5EFA\u6311\u6218\u5361"
                    })
                  ]
                })
              ]
            }),
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx(R, {
                  variant: "outline",
                  children: m.label
                }),
                u.length > 0 && e.jsx(w, {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  onClick: b,
                  children: "\u91CD\u65B0\u5F00\u59CB"
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex flex-1 overflow-hidden",
          children: [
            e.jsxs("div", {
              className: "flex-1 flex flex-col overflow-hidden",
              children: [
                e.jsxs("div", {
                  className: "flex-1 overflow-y-auto p-4 space-y-4",
                  children: [
                    u.length === 0 && !d && e.jsxs("div", {
                      className: "text-center text-muted-foreground py-12",
                      children: [
                        e.jsx(me, {
                          className: "w-12 h-12 mx-auto mb-4 opacity-50"
                        }),
                        e.jsx("p", {
                          children: "\u5F00\u59CB\u63CF\u8FF0\u4F60\u60F3\u521B\u5EFA\u7684\u6311\u6218\u5427\uFF01"
                        }),
                        e.jsx("p", {
                          className: "text-sm mt-2",
                          children: "\u4F8B\u5982\uFF1A\u6211\u60F3\u521B\u5EFA\u4E00\u4E2A\u8BA8\u4EF7\u8FD8\u4EF7\u7684\u6311\u6218..."
                        })
                      ]
                    }),
                    u.map((v) => e.jsxs("div", {
                      className: A("max-w-[80%] rounded-lg p-3", v.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"),
                      children: [
                        e.jsx("div", {
                          className: "whitespace-pre-wrap text-sm",
                          children: v.content
                        }),
                        v.messageType === "description_summary" && e.jsx(R, {
                          variant: "secondary",
                          className: "mt-2",
                          children: "\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3"
                        })
                      ]
                    }, v.id)),
                    d && e.jsxs("div", {
                      className: "max-w-[80%] rounded-lg p-3 bg-muted",
                      children: [
                        e.jsx("div", {
                          className: "whitespace-pre-wrap text-sm",
                          children: d
                        }),
                        e.jsx("span", {
                          className: "inline-block w-2 h-4 bg-foreground/50 animate-pulse ml-1"
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "p-4 border-t space-y-3",
                  children: [
                    e.jsxs("div", {
                      className: "flex flex-wrap gap-2",
                      children: [
                        n === "description_confirming" && e.jsxs(e.Fragment, {
                          children: [
                            e.jsxs(w, {
                              type: "button",
                              size: "sm",
                              onClick: l,
                              disabled: p,
                              children: [
                                e.jsx(Ce, {
                                  className: "w-4 h-4 mr-1"
                                }),
                                "\u786E\u8BA4\u5E76\u751F\u6210\u6311\u6218\u5361"
                              ]
                            }),
                            e.jsxs(w, {
                              type: "button",
                              size: "sm",
                              variant: "outline",
                              onClick: r,
                              disabled: p,
                              children: [
                                e.jsx(rs, {
                                  className: "w-4 h-4 mr-1"
                                }),
                                "\u91CD\u65B0\u751F\u6210\u8BBE\u8BA1"
                              ]
                            })
                          ]
                        }),
                        (n === "interview_waiting" || n === "idle") && u.length > 2 && e.jsxs(w, {
                          type: "button",
                          size: "sm",
                          variant: "secondary",
                          onClick: l,
                          disabled: p,
                          children: [
                            e.jsx(me, {
                              className: "w-4 h-4 mr-1"
                            }),
                            "\u7ACB\u5373\u751F\u6210\u6311\u6218\u5361"
                          ]
                        })
                      ]
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx(G, {
                          value: i,
                          onChange: (v) => o(v.target.value),
                          onKeyDown: j,
                          placeholder: m.placeholder,
                          disabled: !m.inputEnabled || p,
                          className: "min-h-[60px] max-h-[120px] resize-none"
                        }),
                        e.jsx(w, {
                          type: "button",
                          size: "icon",
                          onClick: N,
                          disabled: !m.inputEnabled || p || !i.trim(),
                          children: e.jsx(Te, {
                            className: "w-4 h-4"
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (n === "json_editing" || n === "json_confirmed" || n === "completed") && h && e.jsxs("div", {
              className: "w-96 border-l overflow-y-auto p-4 space-y-4",
              children: [
                e.jsxs(U, {
                  children: [
                    e.jsx(H, {
                      className: "pb-2",
                      children: e.jsxs(J, {
                        className: "text-base flex items-center justify-between",
                        children: [
                          "\u6311\u6218\u5361\u9884\u89C8",
                          e.jsx("div", {
                            className: "flex gap-1",
                            children: e.jsx(w, {
                              type: "button",
                              size: "icon",
                              variant: "ghost",
                              onClick: x,
                              disabled: p,
                              title: "\u91CD\u65B0\u751F\u6210",
                              children: e.jsx(rs, {
                                className: "w-4 h-4"
                              })
                            })
                          })
                        ]
                      })
                    }),
                    e.jsxs(z, {
                      className: "space-y-3",
                      children: [
                        e.jsx(Ze, {
                          label: "\u540D\u79F0",
                          value: h.name,
                          onChange: (v) => T.updateGeneratedJsonField("name", v)
                        }),
                        e.jsx(Ze, {
                          label: "\u63CF\u8FF0",
                          value: h.description,
                          multiline: true,
                          onChange: (v) => T.updateGeneratedJsonField("description", v)
                        }),
                        e.jsx(Ze, {
                          label: "\u89D2\u8272\u884C\u4E3A\u6307\u5BFC",
                          value: h.roleTaskPrompt,
                          multiline: true,
                          onChange: (v) => T.updateGeneratedJsonField("roleTaskPrompt", v)
                        }),
                        e.jsx(Ze, {
                          label: "\u73A9\u5BB6\u5F15\u5BFC",
                          value: h.userGuidance,
                          multiline: true,
                          onChange: (v) => T.updateGeneratedJsonField("userGuidance", v)
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className: "text-xs text-muted-foreground",
                              children: "\u53D8\u91CF"
                            }),
                            e.jsx("div", {
                              className: "mt-1 space-y-1",
                              children: Object.entries(h.variables || {}).map(([v, C]) => e.jsxs("div", {
                                className: "text-xs bg-muted rounded p-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-medium",
                                    children: v
                                  }),
                                  e.jsxs("span", {
                                    className: "text-muted-foreground ml-2",
                                    children: [
                                      "\u521D\u59CB\u503C:",
                                      " ",
                                      String(C.initial ?? 0)
                                    ]
                                  })
                                ]
                              }, v))
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className: "text-xs text-muted-foreground",
                              children: "\u76EE\u6807"
                            }),
                            e.jsx("div", {
                              className: "mt-1 space-y-1",
                              children: (h.goals || []).map((v, C) => e.jsx("div", {
                                className: "text-xs bg-muted rounded p-2",
                                children: e.jsx("span", {
                                  className: "font-medium",
                                  children: v.description
                                })
                              }, C))
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className: "text-xs text-muted-foreground",
                              children: "\u5931\u8D25\u6761\u4EF6"
                            }),
                            e.jsx("div", {
                              className: "mt-1 space-y-1",
                              children: (h.failureChecks || []).map((v, C) => e.jsx("div", {
                                className: "text-xs bg-muted rounded p-2",
                                children: e.jsx("span", {
                                  className: "font-medium",
                                  children: v.description
                                })
                              }, C))
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className: "text-xs text-muted-foreground",
                              children: "\u6807\u7B7E"
                            }),
                            e.jsx("div", {
                              className: "flex flex-wrap gap-1 mt-1",
                              children: (_d = h.tags) == null ? void 0 : _d.map((v, C) => e.jsx(R, {
                                variant: "secondary",
                                className: "text-xs",
                                children: v
                              }, C))
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                n !== "completed" && e.jsxs("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    e.jsxs(w, {
                      type: "button",
                      onClick: y,
                      className: "w-full",
                      children: [
                        e.jsx(te, {
                          className: "w-4 h-4 mr-2"
                        }),
                        "\u6DFB\u52A0\u5230\u5E7F\u573A"
                      ]
                    }),
                    e.jsxs(w, {
                      type: "button",
                      variant: "outline",
                      onClick: f,
                      className: "w-full",
                      children: [
                        e.jsx(Cs, {
                          className: "w-4 h-4 mr-2"
                        }),
                        "\u5BFC\u51FA\u4E3A\u6587\u4EF6"
                      ]
                    }),
                    n === "json_editing" && e.jsxs(w, {
                      type: "button",
                      variant: "secondary",
                      onClick: c,
                      className: "w-full",
                      children: [
                        e.jsx(Ce, {
                          className: "w-4 h-4 mr-2"
                        }),
                        "\u786E\u8BA4\u5B8C\u6210\u7F16\u8F91"
                      ]
                    })
                  ]
                }),
                n === "completed" && e.jsxs("div", {
                  className: "text-center text-muted-foreground py-4",
                  children: [
                    e.jsx(Ce, {
                      className: "w-8 h-8 mx-auto mb-2 text-green-500"
                    }),
                    e.jsx("p", {
                      children: "\u6311\u6218\u5361\u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A\uFF01"
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  };
  function Ze({ label: s, value: t, multiline: a = false, onChange: r }) {
    const [l, c] = g.useState(false), [x, p] = g.useState(t), d = () => {
      r(x), c(false);
    }, i = () => {
      p(t), c(false);
    };
    return l ? e.jsxs("div", {
      className: "space-y-1",
      children: [
        e.jsx("span", {
          className: "text-xs text-muted-foreground",
          children: s
        }),
        a ? e.jsx(G, {
          value: x,
          onChange: (o) => p(o.target.value),
          className: "text-sm min-h-[60px]",
          autoFocus: true
        }) : e.jsx("input", {
          type: "text",
          value: x,
          onChange: (o) => p(o.target.value),
          className: "w-full text-sm border rounded px-2 py-1 bg-background",
          autoFocus: true
        }),
        e.jsxs("div", {
          className: "flex gap-1",
          children: [
            e.jsx(w, {
              type: "button",
              size: "sm",
              variant: "ghost",
              onClick: d,
              children: "\u4FDD\u5B58"
            }),
            e.jsx(w, {
              type: "button",
              size: "sm",
              variant: "ghost",
              onClick: i,
              children: "\u53D6\u6D88"
            })
          ]
        })
      ]
    }) : e.jsxs("div", {
      className: "cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors",
      onClick: () => {
        p(t), c(true);
      },
      children: [
        e.jsx("span", {
          className: "text-xs text-muted-foreground",
          children: s
        }),
        e.jsx("p", {
          className: A("text-sm", a ? "whitespace-pre-wrap line-clamp-3" : "truncate"),
          children: t || e.jsx("span", {
            className: "text-muted-foreground italic",
            children: "\u70B9\u51FB\u7F16\u8F91"
          })
        })
      ]
    });
  }
  let mn, un, xn, gs, ee, hn, gn, Vs, bt, Ys, pn, fn, ps, fs, js, re, jn, Nn, Se, ge, es;
  mn = {
    keys: [],
    content: "",
    enabled: true,
    insertion_order: 100,
    use_regex: false,
    extensions: {}
  };
  un = /[,，]/;
  xn = (s) => {
    var _a2;
    const [t, a] = g.useState(((_a2 = s.value) == null ? void 0 : _a2.entries) || []), [r, l] = g.useState(null), c = (o) => {
      var _a3;
      a(o), s.onChange({
        ...s.value,
        entries: o,
        extensions: ((_a3 = s.value) == null ? void 0 : _a3.extensions) || {}
      });
    }, x = () => {
      const o = {
        ...mn,
        id: crypto.randomUUID()
      };
      c([
        ...t,
        o
      ]), l(t.length);
    }, p = (o) => {
      c(t.filter((n, m) => m !== o)), r === o && l(null);
    }, d = (o, n) => {
      const m = [
        ...t
      ];
      m[o] = {
        ...m[o],
        ...n
      }, c(m);
    }, i = (o) => {
      l(r === o ? null : o);
    };
    return e.jsxs("div", {
      className: "space-y-4",
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs("h3", {
                  className: "text-sm font-medium",
                  children: [
                    "\u77E5\u8BC6\u4E66\u6761\u76EE (",
                    t.length,
                    ")"
                  ]
                }),
                e.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children: "\u5F53\u5173\u952E\u8BCD\u5728\u5BF9\u8BDD\u4E2D\u5339\u914D\u65F6\uFF0C\u81EA\u52A8\u63D2\u5165\u76F8\u5173\u8BBE\u5B9A"
                })
              ]
            }),
            e.jsxs(w, {
              variant: "outline",
              size: "sm",
              onClick: x,
              type: "button",
              className: "h-8",
              children: [
                e.jsx(te, {
                  className: "w-3.5 h-3.5 mr-1"
                }),
                " \u6DFB\u52A0\u6761\u76EE"
              ]
            })
          ]
        }),
        e.jsx("div", {
          className: "space-y-2",
          children: t.length === 0 ? e.jsxs("div", {
            className: "py-12 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5",
            children: [
              e.jsx(Ue, {
                className: "w-8 h-8 mb-2 opacity-20"
              }),
              e.jsx("p", {
                className: "text-xs",
                children: "\u6682\u65E0\u77E5\u8BC6\u4E66\u6761\u76EE"
              })
            ]
          }) : t.map((o, n) => e.jsxs(U, {
            className: A("overflow-hidden border-muted/60 shadow-none transition-all", r === n ? "ring-1 ring-primary/20" : "hover:border-primary/20"),
            children: [
              e.jsxs("div", {
                className: "px-4 py-3 flex items-center justify-between cursor-pointer group",
                onClick: () => i(n),
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3 overflow-hidden",
                    children: [
                      e.jsx("div", {
                        className: A("w-2 h-2 rounded-full", o.enabled ? "bg-green-500" : "bg-muted-foreground/30")
                      }),
                      e.jsxs("div", {
                        className: "flex flex-col overflow-hidden",
                        children: [
                          e.jsx("span", {
                            className: "text-sm font-medium truncate",
                            children: o.name || (o.keys.length > 0 ? o.keys.slice(0, 3).join(", ") : "(\u672A\u547D\u540D\u6761\u76EE)")
                          }),
                          e.jsxs("span", {
                            className: "text-[10px] text-muted-foreground truncate",
                            children: [
                              "\u4F18\u5148\u7EA7: ",
                              o.insertion_order,
                              " | ",
                              "use_regex" in o && o.use_regex ? "\u6B63\u5219" : "\u666E\u901A"
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(w, {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-destructive opacity-0 group-hover:opacity-100 transition-opacity",
                        onClick: (m) => {
                          m.stopPropagation(), p(n);
                        },
                        type: "button",
                        children: e.jsx(_e, {
                          className: "w-3.5 h-3.5"
                        })
                      }),
                      r === n ? e.jsx(Lt, {
                        className: "w-4 h-4 text-muted-foreground"
                      }) : e.jsx(rt, {
                        className: "w-4 h-4 text-muted-foreground"
                      })
                    ]
                  })
                ]
              }),
              r === n && e.jsxs(z, {
                className: "px-4 pb-4 pt-1 space-y-4 border-t border-muted/40 bg-muted/5 animate-in slide-in-from-top-2 duration-200",
                children: [
                  e.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(k, {
                            className: "text-xs",
                            children: "\u6761\u76EE\u540D\u79F0 (\u53EF\u9009)"
                          }),
                          e.jsx(E, {
                            value: o.name || "",
                            onChange: (m) => d(n, {
                              name: m.target.value
                            }),
                            placeholder: "\u7ED9\u6761\u76EE\u4E00\u4E2A\u4FBF\u4E8E\u8BC6\u522B\u7684\u540D\u5B57",
                            className: "h-8 text-xs"
                          })
                        ]
                      }),
                      e.jsxs("div", {
                        className: "flex items-end gap-6 h-8",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              e.jsx(De, {
                                checked: o.enabled,
                                onCheckedChange: (m) => d(n, {
                                  enabled: m
                                })
                              }),
                              e.jsx(k, {
                                className: "text-xs",
                                children: "\u542F\u7528\u72B6\u6001"
                              })
                            ]
                          }),
                          e.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              e.jsx(De, {
                                checked: "use_regex" in o ? o.use_regex : false,
                                onCheckedChange: (m) => d(n, {
                                  use_regex: m
                                })
                              }),
                              e.jsx(k, {
                                className: "text-xs",
                                children: "\u6B63\u5219\u5339\u914D"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsxs(k, {
                        className: "text-xs flex items-center gap-1.5",
                        children: [
                          "\u89E6\u53D1\u5173\u952E\u8BCD (Keys)",
                          e.jsx(ds, {
                            className: "w-3 h-3 text-muted-foreground"
                          })
                        ]
                      }),
                      e.jsx(E, {
                        value: o.keys.join(", "),
                        onChange: (m) => d(n, {
                          keys: m.target.value.split(un).map((u) => u.trim()).filter(Boolean)
                        }),
                        placeholder: "\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u5173\u952E\u8BCD",
                        className: "h-8 text-xs"
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(k, {
                        className: "text-xs",
                        children: "\u5185\u5BB9 (Content)"
                      }),
                      e.jsx(G, {
                        value: o.content,
                        onChange: (m) => d(n, {
                          content: m.target.value
                        }),
                        placeholder: "\u5339\u914D\u65F6\u6CE8\u5165\u7684\u6587\u672C\u5185\u5BB9",
                        className: "min-h-24 text-xs font-mono"
                      })
                    ]
                  }),
                  e.jsx("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(k, {
                          className: "text-xs",
                          children: "\u63D2\u5165\u987A\u5E8F (Insertion Order)"
                        }),
                        e.jsx(E, {
                          type: "number",
                          value: o.insertion_order,
                          onChange: (m) => d(n, {
                            insertion_order: Number.parseInt(m.target.value) || 0
                          }),
                          className: "h-8 text-xs"
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          }, o.id || `entry-${n}`))
        })
      ]
    });
  };
  gs = {
    name: "",
    nickname: "",
    description: "",
    personality: "",
    scenario: "",
    first_mes: "",
    mes_example: "",
    system_prompt: "",
    post_history_instructions: "",
    creator_notes: "",
    creator: "",
    character_version: "1.0.0",
    tags: [],
    alternate_greetings: [],
    avatar: "",
    imageBase64: "",
    character_book: void 0
  };
  ee = Q({
    formData: {
      ...gs
    },
    updateField(s, t) {
      this.formData[s] = t;
    },
    setAvatar(s) {
      this.formData.avatar = s;
    },
    setLargeImage(s) {
      this.formData.imageBase64 = s;
    },
    addGreeting() {
      this.formData.alternate_greetings.push("");
    },
    updateGreeting(s, t) {
      s >= 0 && s < this.formData.alternate_greetings.length && (this.formData.alternate_greetings[s] = t);
    },
    removeGreeting(s) {
      s >= 0 && s < this.formData.alternate_greetings.length && this.formData.alternate_greetings.splice(s, 1);
    },
    setTags(s) {
      this.formData.tags = s;
    },
    loadInitialData(s) {
      s ? Object.assign(this.formData, {
        ...s,
        tags: s.tags || [],
        alternate_greetings: [
          ...s.alternate_greetings || []
        ],
        character_book: s.character_book ? {
          ...s.character_book,
          entries: s.character_book.entries.map((t) => ({
            ...t,
            keys: [
              ...t.keys
            ],
            extensions: {
              ...t.extensions
            },
            secondary_keys: t.secondary_keys ? [
              ...t.secondary_keys
            ] : void 0,
            comment: t.comment
          })),
          extensions: {
            ...s.character_book.extensions
          }
        } : void 0
      }) : Object.assign(this.formData, gs);
    },
    resetForm() {
      Object.assign(this.formData, gs);
    },
    getFormDataForSave() {
      return le(this.formData);
    }
  });
  hn = /[,，]/;
  Sr = (s) => {
    const { className: t } = s, a = s.mode || (s.initialData ? "edit" : "create"), r = g.useId(), l = g.useRef(null), c = g.useRef(null), x = ue(ee), [p, d] = g.useState(false), [i, o] = g.useState(false);
    g.useEffect(() => {
      ee.loadInitialData(s.initialData);
    }, [
      s.initialData
    ]);
    const n = (y) => {
      const { name: S, value: b } = y.target;
      S === "tags" ? ee.setTags(b.split(hn).map((v) => v.trim()).filter(Boolean)) : ee.updateField(S, b);
    }, m = (y) => {
      var _a2;
      const S = (_a2 = y.target.files) == null ? void 0 : _a2[0];
      if (S) {
        const b = new FileReader();
        b.onloadend = () => {
          ee.setAvatar(b.result);
        }, b.readAsDataURL(S);
      }
    }, u = (y) => {
      var _a2;
      const S = (_a2 = y.target.files) == null ? void 0 : _a2[0];
      if (S) {
        const b = new FileReader();
        b.onloadend = () => {
          ee.setLargeImage(b.result);
        }, b.readAsDataURL(S);
      }
    }, h = () => {
      ee.addGreeting();
    }, N = (y, S) => {
      ee.updateGreeting(y, S);
    }, j = (y) => {
      ee.removeGreeting(y);
    }, f = (y) => {
      y.preventDefault(), s.onSave(ee.getFormDataForSave());
    };
    return e.jsxs(U, {
      className: A("max-w-4xl mx-auto shadow-lg border-muted/60", t),
      children: [
        e.jsx(H, {
          className: "pb-4",
          children: e.jsx("div", {
            className: "flex items-center justify-between",
            children: e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("div", {
                  className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center",
                  children: e.jsx(je, {
                    className: "w-6 h-6 text-primary"
                  })
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(J, {
                      className: "text-xl",
                      children: a === "edit" ? "\u7F16\u8F91\u89D2\u8272" : "\u521B\u4F5C\u8005\u5DE5\u574A"
                    }),
                    e.jsx(Y, {
                      children: a === "edit" ? "\u4FEE\u6539\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" : "\u5B9A\u4E49\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219"
                    })
                  ]
                })
              ]
            })
          })
        }),
        e.jsxs("form", {
          onSubmit: f,
          children: [
            e.jsx(z, {
              children: e.jsxs(xa, {
                type: "multiple",
                defaultValue: [
                  "identity",
                  "dialogue",
                  "prompt",
                  "meta"
                ],
                className: "w-full",
                children: [
                  e.jsxs(Xe, {
                    className: "border-none",
                    value: "identity",
                    children: [
                      e.jsx(We, {
                        className: "bg-background my-4 p-4 items-center rounded-xl text-xl",
                        children: e.jsx("div", {
                          children: "\u8EAB\u4EFD\u8BBE\u5B9A"
                        })
                      }),
                      e.jsxs(qe, {
                        className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300",
                        children: [
                          e.jsxs("div", {
                            className: "flex flex-col md:flex-row gap-8 items-start",
                            children: [
                              e.jsxs("div", {
                                className: "flex flex-col items-center gap-4 shrink-0",
                                children: [
                                  e.jsxs("div", {
                                    className: `w-32 h-32 rounded-2xl bg-muted border-2 border-dashed ${p ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`,
                                    onClick: () => {
                                      var _a2;
                                      return (_a2 = l.current) == null ? void 0 : _a2.click();
                                    },
                                    onDragOver: (y) => {
                                      y.preventDefault(), d(true);
                                    },
                                    onDragLeave: () => d(false),
                                    onDrop: (y) => {
                                      var _a2, _b;
                                      y.preventDefault(), d(false);
                                      const S = (_a2 = y.dataTransfer.files) == null ? void 0 : _a2[0];
                                      if ((_b = S == null ? void 0 : S.type) == null ? void 0 : _b.startsWith("image/")) {
                                        const b = new FileReader();
                                        b.onloadend = () => {
                                          ee.setAvatar(b.result);
                                        }, b.readAsDataURL(S);
                                      }
                                    },
                                    children: [
                                      x.formData.avatar ? e.jsx("img", {
                                        src: x.formData.avatar,
                                        alt: "Avatar",
                                        className: "w-full h-full object-cover"
                                      }) : e.jsx(vs, {
                                        className: "w-8 h-8 text-muted-foreground/40"
                                      }),
                                      e.jsx("div", {
                                        className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                        children: e.jsx(te, {
                                          className: "w-6 h-6 text-white"
                                        })
                                      })
                                    ]
                                  }),
                                  e.jsx(E, {
                                    type: "file",
                                    ref: l,
                                    className: "hidden",
                                    accept: "image/*",
                                    onChange: m
                                  }),
                                  e.jsx("span", {
                                    className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider",
                                    children: "\u4E0A\u4F20\u89D2\u8272\u5934\u50CF"
                                  })
                                ]
                              }),
                              e.jsxs("div", {
                                className: "flex flex-col items-center gap-4 shrink-0",
                                children: [
                                  e.jsxs("div", {
                                    className: `w-64 h-32 rounded-2xl bg-muted border-2 border-dashed ${i ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`,
                                    onClick: () => {
                                      var _a2;
                                      return (_a2 = c.current) == null ? void 0 : _a2.click();
                                    },
                                    onDragOver: (y) => {
                                      y.preventDefault(), o(true);
                                    },
                                    onDragLeave: () => o(false),
                                    onDrop: (y) => {
                                      var _a2, _b;
                                      y.preventDefault(), o(false);
                                      const S = (_a2 = y.dataTransfer.files) == null ? void 0 : _a2[0];
                                      if ((_b = S == null ? void 0 : S.type) == null ? void 0 : _b.startsWith("image/")) {
                                        const b = new FileReader();
                                        b.onloadend = () => {
                                          ee.setLargeImage(b.result);
                                        }, b.readAsDataURL(S);
                                      }
                                    },
                                    children: [
                                      x.formData.imageBase64 ? e.jsx("img", {
                                        src: x.formData.imageBase64,
                                        alt: "\u89D2\u8272\u5927\u56FE",
                                        className: "w-full h-full object-cover"
                                      }) : e.jsx(vs, {
                                        className: "w-8 h-8 text-muted-foreground/40"
                                      }),
                                      e.jsx("div", {
                                        className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                        children: e.jsx(te, {
                                          className: "w-6 h-6 text-white"
                                        })
                                      })
                                    ]
                                  }),
                                  e.jsx(E, {
                                    type: "file",
                                    ref: c,
                                    className: "hidden",
                                    accept: "image/*",
                                    onChange: u
                                  }),
                                  e.jsx("span", {
                                    className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider",
                                    children: "\u4E0A\u4F20\u89D2\u8272\u5927\u56FE"
                                  })
                                ]
                              }),
                              e.jsxs("div", {
                                className: "grow space-y-4 w-full",
                                children: [
                                  e.jsxs("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                      e.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          e.jsx(k, {
                                            htmlFor: `${r}-name`,
                                            children: "\u57FA\u672C\u540D\u79F0 (Name)"
                                          }),
                                          e.jsx(E, {
                                            id: `${r}-name`,
                                            name: "name",
                                            value: x.formData.name,
                                            onChange: n,
                                            placeholder: "\u5982\uFF1A\u827E\u7433",
                                            required: true
                                          })
                                        ]
                                      }),
                                      e.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          e.jsx(k, {
                                            htmlFor: `${r}-nickname`,
                                            children: "\u5934\u8854/\u6635\u79F0 (Nickname)"
                                          }),
                                          e.jsx(E, {
                                            id: `${r}-nickname`,
                                            name: "nickname",
                                            value: x.formData.nickname,
                                            onChange: n,
                                            placeholder: "\u5982\uFF1A\u6668\u66E6\u4E4B\u5203"
                                          })
                                        ]
                                      })
                                    ]
                                  }),
                                  e.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      e.jsx(k, {
                                        htmlFor: `${r}-tags`,
                                        children: "\u68C0\u7D22\u6807\u7B7E (Tags)"
                                      }),
                                      e.jsx(E, {
                                        id: `${r}-tags`,
                                        name: "tags",
                                        value: x.formData.tags.join(", "),
                                        onChange: n,
                                        placeholder: "\u7528\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u5947\u5E7B, \u7CBE\u7075, \u6218\u58EB"
                                      })
                                    ]
                                  })
                                ]
                              })
                            ]
                          }),
                          e.jsxs("div", {
                            className: "space-y-4 pt-4",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  e.jsx(k, {
                                    htmlFor: `${r}-personality`,
                                    children: "\u4EBA\u683C/\u6027\u683C (Personality)"
                                  }),
                                  e.jsx(G, {
                                    id: `${r}-personality`,
                                    name: "personality",
                                    value: x.formData.personality,
                                    onChange: n,
                                    placeholder: "\u8BE6\u7EC6\u63CF\u8FF0\u89D2\u8272\u7684\u6027\u683C\u3001\u602A\u7656\u3001\u601D\u7EF4\u903B\u8F91\u7B49",
                                    className: "min-h-32 leading-relaxed"
                                  })
                                ]
                              }),
                              e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  e.jsx(k, {
                                    htmlFor: `${r}-description`,
                                    children: "\u8EAB\u4E16/\u63CF\u8FF0 (Description)"
                                  }),
                                  e.jsx(G, {
                                    id: `${r}-description`,
                                    name: "description",
                                    value: x.formData.description,
                                    onChange: n,
                                    placeholder: "\u89D2\u8272\u7684\u8FC7\u5F80\u3001\u5916\u8C8C\u63CF\u8FF0\u4E0E\u80CC\u666F\u6545\u4E8B",
                                    className: "min-h-32 leading-relaxed"
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  e.jsxs(Xe, {
                    className: "border-none",
                    value: "dialogue",
                    children: [
                      e.jsx(We, {
                        className: "bg-background my-4 p-4 items-center rounded-xl text-xl",
                        children: e.jsx("div", {
                          children: "\u5BF9\u8BDD\u5199\u4F5C"
                        })
                      }),
                      e.jsxs(qe, {
                        className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300",
                        children: [
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsxs(k, {
                                htmlFor: `${r}-first_mes`,
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx(Ds, {
                                    className: "w-4 h-4 text-primary"
                                  }),
                                  "\u5F00\u573A\u8BED (First Message)"
                                ]
                              }),
                              e.jsx(G, {
                                id: `${r}-first_mes`,
                                name: "first_mes",
                                value: x.formData.first_mes,
                                onChange: n,
                                placeholder: "\u8FDB\u5165\u5BF9\u8BDD\u540E\u89D2\u8272\u7684\u7B2C\u4E00\u53E5\u8BDD",
                                className: "min-h-32"
                              })
                            ]
                          }),
                          e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  e.jsx(k, {
                                    className: "text-sm",
                                    children: "\u5907\u7528\u95EE\u5019\u8BED (Alternate Greetings)"
                                  }),
                                  e.jsxs(w, {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: h,
                                    type: "button",
                                    className: "h-8 rounded-lg",
                                    children: [
                                      e.jsx(te, {
                                        className: "w-3 h-3 mr-1"
                                      }),
                                      " \u6DFB\u52A0"
                                    ]
                                  })
                                ]
                              }),
                              e.jsx("div", {
                                className: "space-y-2",
                                children: x.formData.alternate_greetings.map((y, S) => e.jsxs("div", {
                                  className: "flex gap-2",
                                  children: [
                                    e.jsx(G, {
                                      value: y,
                                      onChange: (b) => N(S, b.target.value),
                                      placeholder: `\u95EE\u5019\u8BED\u5019\u9009 ${S + 1}`,
                                      className: "min-h-16 text-sm"
                                    }),
                                    e.jsx(w, {
                                      variant: "ghost",
                                      size: "icon",
                                      onClick: () => j(S),
                                      type: "button",
                                      className: "h-10 w-10 text-destructive shrink-0",
                                      children: e.jsx(_e, {
                                        className: "w-4 h-4"
                                      })
                                    })
                                  ]
                                }, `greeting-${S}-${y.length}`))
                              })
                            ]
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx(k, {
                                htmlFor: `${r}-scenario`,
                                children: "\u5BF9\u8BDD\u573A\u666F\u8BBE\u5B9A (Scenario)"
                              }),
                              e.jsx(G, {
                                id: `${r}-scenario`,
                                name: "scenario",
                                value: x.formData.scenario,
                                onChange: n,
                                placeholder: "\u5B9A\u4E49\u5F00\u573A\u65F6\u6240\u5904\u7684\u7279\u5B9A\u73AF\u5883\u6216\u5F53\u524D\u53D1\u751F\u7684\u4E8B\u4EF6",
                                className: "min-h-24"
                              })
                            ]
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx(k, {
                                htmlFor: `${r}-mes_example`,
                                children: "\u4E66\u5199\u98CE\u683C\u793A\u4F8B (Message Examples)"
                              }),
                              e.jsxs(Y, {
                                className: "text-xs mb-2",
                                children: [
                                  "\u4F7F\u7528 <START> \u5F00\u59CB\u4E00\u6BB5\u793A\u4F8B\uFF0C",
                                  "{{user}}",
                                  " \u4EE3\u8868\u7528\u6237"
                                ]
                              }),
                              e.jsx(G, {
                                id: `${r}-mes_example`,
                                name: "mes_example",
                                value: x.formData.mes_example,
                                onChange: n,
                                placeholder: "<START>\\n{{user}}: \u4F60\u662F\u8C01\uFF1F\\n\u89D2\u8272: \u6211\u662F...",
                                className: "min-h-48 font-mono text-xs"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  e.jsxs(Xe, {
                    className: "border-none",
                    value: "prompt",
                    children: [
                      e.jsx(We, {
                        className: "bg-background my-4 p-4 items-center rounded-xl text-xl",
                        children: e.jsx("div", {
                          children: "Prompt \u6A21\u677F"
                        })
                      }),
                      e.jsxs(qe, {
                        className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300",
                        children: [
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsxs(k, {
                                htmlFor: `${r}-system_prompt`,
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx(ze, {
                                    className: "w-4 h-4 text-blue-500"
                                  }),
                                  "\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD (System Prompt Override)"
                                ]
                              }),
                              e.jsx(G, {
                                id: `${r}-system_prompt`,
                                name: "system_prompt",
                                value: x.formData.system_prompt,
                                onChange: n,
                                placeholder: "\u8986\u76D6\u89D2\u8272\u7684\u5168\u5C40\u7CFB\u7EDF\u63D0\u793A\u8BCD...",
                                className: "min-h-48 font-mono text-xs"
                              })
                            ]
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsxs(k, {
                                htmlFor: `${r}-post_history_instructions`,
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx(ze, {
                                    className: "w-4 h-4 text-purple-500"
                                  }),
                                  "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"
                                ]
                              }),
                              e.jsx(G, {
                                id: `${r}-post_history_instructions`,
                                name: "post_history_instructions",
                                value: x.formData.post_history_instructions,
                                onChange: n,
                                placeholder: "\u7D27\u968F\u5BF9\u8BDD\u5386\u53F2\u540E\u7684\u7279\u5B9A\u6307\u4EE4\uFF08\u5F3A\u5236\u8F93\u51FA\u683C\u5F0F\u7B49\uFF09",
                                className: "min-h-32 font-mono text-xs"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  e.jsxs(Xe, {
                    className: "border-none",
                    value: "meta",
                    children: [
                      e.jsx(We, {
                        className: "bg-background my-4 p-4 items-center rounded-xl text-xl",
                        children: e.jsx("div", {
                          children: "\u5143\u6570\u636E/\u5907\u6CE8"
                        })
                      }),
                      e.jsxs(qe, {
                        className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300",
                        children: [
                          e.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  e.jsx(k, {
                                    htmlFor: `${r}-creator`,
                                    children: "\u5361\u7247\u521B\u5EFA\u8005 (Creator)"
                                  }),
                                  e.jsx(E, {
                                    id: `${r}-creator`,
                                    name: "creator",
                                    value: x.formData.creator,
                                    onChange: n,
                                    placeholder: "\u60A8\u7684\u540D\u5B57\u6216 ID"
                                  })
                                ]
                              }),
                              e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  e.jsx(k, {
                                    htmlFor: `${r}-character_version`,
                                    children: "\u89D2\u8272\u7248\u672C (Version)"
                                  }),
                                  e.jsx(E, {
                                    id: `${r}-character_version`,
                                    name: "character_version",
                                    value: x.formData.character_version,
                                    onChange: n,
                                    placeholder: "1.0.0"
                                  })
                                ]
                              })
                            ]
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx(k, {
                                htmlFor: `${r}-creator_notes`,
                                children: "\u521B\u5EFA\u8005\u5907\u6CE8 (Creator Notes)"
                              }),
                              e.jsx(G, {
                                id: `${r}-creator_notes`,
                                name: "creator_notes",
                                value: x.formData.creator_notes,
                                onChange: n,
                                placeholder: "\u8BB0\u4E0B\u6709\u5173\u6B64\u89D2\u8272\u5361\u7684\u5F00\u53D1\u7B14\u8BB0\uFF0C\u4EC5\u5728\u5DE5\u574A\u53EF\u89C1",
                                className: "min-h-32"
                              })
                            ]
                          }),
                          e.jsx("div", {
                            className: "pt-4",
                            children: e.jsx(xn, {
                              value: x.formData.character_book,
                              onChange: (y) => ee.updateField("character_book", y)
                            })
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            }),
            e.jsxs(As, {
              className: "flex justify-between border-t py-6 bg-muted/10",
              children: [
                e.jsxs(w, {
                  variant: "ghost",
                  type: "button",
                  onClick: s.onCancel,
                  className: "rounded-lg h-11 px-6",
                  children: [
                    e.jsx(Je, {
                      className: "w-4 h-4 mr-2"
                    }),
                    " ",
                    "\u653E\u5F03\u4FEE\u6539"
                  ]
                }),
                e.jsxs(w, {
                  type: "submit",
                  className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20",
                  children: [
                    e.jsx(it, {
                      className: "w-4 h-4 mr-2"
                    }),
                    " ",
                    a === "edit" ? "\u4FDD\u5B58\u4FEE\u6539" : "\u751F\u6210\u5E76\u4FDD\u5B58\u89D2\u8272\u5361"
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  };
  gn = [
    "isTrue",
    "isFalse",
    "eq",
    "neq",
    "gt",
    "gte",
    "lt",
    "lte",
    "includes",
    "has"
  ];
  Vs = [
    "and",
    "or"
  ];
  bt = (s) => {
    const { condition: t, variables: a, onChange: r, level: l = 0 } = s, c = t[0], x = Object.keys(a), p = (n) => {
      Vs.includes(n) ? r([
        n,
        [
          t
        ]
      ]) : [
        "isTrue",
        "isFalse"
      ].includes(n) ? r([
        n,
        x[0] || ""
      ]) : r([
        n,
        x[0] || "",
        ""
      ]);
    };
    if (Vs.includes(c)) {
      const n = t[1];
      return e.jsxs("div", {
        className: `p-4 border rounded-lg space-y-4 bg-muted/5 ${l > 0 ? "ml-6" : ""}`,
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(R, {
                    variant: "outline",
                    className: "bg-primary/5",
                    children: "\u590D\u5408\u903B\u8F91"
                  }),
                  e.jsxs(Re, {
                    value: c,
                    onValueChange: (m) => p(m),
                    children: [
                      e.jsx($e, {
                        className: "h-8 w-24",
                        children: e.jsx(Fe, {})
                      }),
                      e.jsxs(Be, {
                        children: [
                          e.jsx(ie, {
                            value: "and",
                            children: "\u5E76\u4E14 (AND)"
                          }),
                          e.jsx(ie, {
                            value: "or",
                            children: "\u6216\u8005 (OR)"
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsx(w, {
                    variant: "outline",
                    size: "sm",
                    className: "h-7 text-[10px]",
                    onClick: () => r([
                      ...n[0]
                    ]),
                    type: "button",
                    children: "\u8F6C\u4E3A\u5355\u4E00\u6761\u4EF6"
                  }),
                  e.jsxs(w, {
                    variant: "outline",
                    size: "sm",
                    className: "h-7 text-[10px]",
                    onClick: () => r([
                      c,
                      [
                        ...n,
                        [
                          "isTrue",
                          x[0] || ""
                        ]
                      ]
                    ]),
                    type: "button",
                    children: [
                      e.jsx(te, {
                        className: "w-3 h-3 mr-1"
                      }),
                      " \u6DFB\u52A0\u5B50\u6761\u4EF6"
                    ]
                  })
                ]
              })
            ]
          }),
          e.jsx("div", {
            className: "space-y-3",
            children: n.map((m, u) => e.jsxs("div", {
              className: "relative group",
              children: [
                e.jsx(bt, {
                  condition: m,
                  variables: a,
                  level: l + 1,
                  onChange: (h) => {
                    const N = [
                      ...n
                    ];
                    N[u] = h, r([
                      c,
                      N
                    ]);
                  }
                }),
                e.jsx(w, {
                  variant: "ghost",
                  size: "icon",
                  className: "absolute -right-2 top-0 h-6 w-6 text-destructive opacity-0 group-hover:opacity-100",
                  onClick: () => {
                    const h = n.filter((N, j) => j !== u);
                    h.length === 0 ? p("isTrue") : r([
                      c,
                      h
                    ]);
                  },
                  type: "button",
                  children: e.jsx(_e, {
                    className: "w-3 h-3"
                  })
                })
              ]
            }, u))
          })
        ]
      });
    }
    const i = t[1], o = t[2];
    return e.jsxs("div", {
      className: `flex flex-wrap items-center gap-2 p-2 border rounded-md bg-background ${l > 0 ? "ml-6" : ""}`,
      children: [
        e.jsxs(Re, {
          value: i,
          onValueChange: (n) => {
            const m = [
              ...t
            ];
            m[1] = n, r(m);
          },
          children: [
            e.jsx($e, {
              className: "h-8 w-40 overflow-hidden",
              children: e.jsx(Fe, {
                placeholder: "\u9009\u62E9\u53D8\u91CF"
              })
            }),
            e.jsx(Be, {
              children: x.map((n) => e.jsx(ie, {
                value: n,
                children: n
              }, n))
            })
          ]
        }),
        e.jsxs(Re, {
          value: c,
          onValueChange: (n) => p(n),
          children: [
            e.jsx($e, {
              className: "h-8 w-28",
              children: e.jsx(Fe, {})
            }),
            e.jsx(Be, {
              children: gn.map((n) => e.jsx(ie, {
                value: n,
                children: n
              }, n))
            })
          ]
        }),
        ![
          "isTrue",
          "isFalse"
        ].includes(c) && e.jsx(E, {
          value: String(o ?? ""),
          onChange: (n) => {
            const m = [
              ...t
            ];
            let u = n.target.value;
            u === "true" ? u = true : u === "false" ? u = false : !isNaN(Number(u)) && u.trim() !== "" && (u = Number(u)), m[2] = u, r(m);
          },
          placeholder: "\u76EE\u6807\u503C",
          className: "h-8 w-32 text-xs"
        }),
        e.jsx("div", {
          className: "ml-auto flex gap-1",
          children: e.jsx(w, {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: () => p("and"),
            type: "button",
            children: e.jsx(lt, {
              className: "w-4 h-4"
            })
          })
        })
      ]
    });
  };
  Ys = (s) => {
    const { variables: t, title: a = "\u4EFB\u52A1\u76EE\u6807", description: r = "\u5B9A\u4E49\u6311\u6218\u6A21\u5F0F\u4E0B\u9700\u8981\u8FBE\u6210\u7684\u91CC\u7A0B\u7891" } = s, [l, c] = g.useState(s.value || []), x = (o) => {
      c(o), s.onChange(o);
    }, p = () => {
      const o = {
        key: `goal_${F(5)}`,
        description: "",
        condition: [
          "eq",
          Object.keys(t)[0] || "",
          ""
        ],
        characterPrompt: "",
        userInfo: ""
      };
      x([
        ...l,
        o
      ]);
    }, d = (o) => {
      x(l.filter((n) => n.key !== o));
    }, i = (o, n) => {
      x(l.map((m) => m.key === o ? {
        ...m,
        ...n
      } : m));
    };
    return e.jsxs("div", {
      className: "space-y-4",
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs("h3", {
                  className: "text-sm font-medium",
                  children: [
                    a,
                    " (",
                    l.length,
                    ")"
                  ]
                }),
                e.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children: r
                })
              ]
            }),
            e.jsxs(w, {
              variant: "outline",
              size: "sm",
              onClick: p,
              type: "button",
              className: "h-8",
              children: [
                e.jsx(te, {
                  className: "w-3.5 h-3.5 mr-1"
                }),
                " \u6DFB\u52A0\u9879"
              ]
            })
          ]
        }),
        e.jsx("div", {
          className: "space-y-3",
          children: l.length === 0 ? e.jsxs("div", {
            className: "py-8 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5",
            children: [
              e.jsx(cs, {
                className: "w-8 h-8 mb-2 opacity-20"
              }),
              e.jsx("p", {
                className: "text-xs",
                children: "\u6682\u65E0\u914D\u7F6E\u9879"
              })
            ]
          }) : l.map((o) => e.jsx(U, {
            className: "border-muted/60 shadow-none",
            children: e.jsx(z, {
              className: "p-4 space-y-4",
              children: e.jsxs("div", {
                className: "flex gap-4",
                children: [
                  e.jsxs("div", {
                    className: "grow space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsxs(k, {
                                className: "text-xs flex items-center gap-1.5 font-bold",
                                children: [
                                  e.jsx(Ie, {
                                    className: "w-3 h-3"
                                  }),
                                  " \u552F\u4E00\u6807\u8BC6 (Key)"
                                ]
                              }),
                              e.jsx(E, {
                                value: o.key,
                                onChange: (n) => i(o.key, {
                                  key: n.target.value
                                }),
                                placeholder: "\u552F\u4E00\u8BC6\u522B\u7801",
                                className: "h-9 text-sm font-mono"
                              })
                            ]
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsxs(k, {
                                className: "text-xs flex items-center gap-1.5 font-bold",
                                children: [
                                  e.jsx(At, {
                                    className: "w-3 h-3"
                                  }),
                                  " \u663E\u793A\u63CF\u8FF0"
                                ]
                              }),
                              e.jsx(E, {
                                value: o.description,
                                onChange: (n) => i(o.key, {
                                  description: n.target.value
                                }),
                                placeholder: "\u4F8B\u5982\uFF1A\u8BF4\u670D\u827E\u7433\u653E\u4E0B\u6B66\u5668",
                                className: "h-9 text-sm"
                              })
                            ]
                          })
                        ]
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsxs(k, {
                            className: "text-xs flex items-center gap-1.5 font-bold",
                            children: [
                              e.jsx(Ie, {
                                className: "w-3 h-3"
                              }),
                              " \u89E6\u53D1\u6761\u4EF6 (\u7ED3\u6784\u5316\u903B\u8F91)"
                            ]
                          }),
                          e.jsx(bt, {
                            condition: o.condition,
                            variables: t,
                            onChange: (n) => i(o.key, {
                              condition: n
                            })
                          })
                        ]
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsxs(k, {
                                className: "text-xs flex items-center gap-1.5 font-bold opacity-70",
                                children: [
                                  e.jsx(Ds, {
                                    className: "w-3 h-3"
                                  }),
                                  " \u89D2\u8272\u63D0\u793A (\u89E6\u53D1\u540E)"
                                ]
                              }),
                              e.jsx(G, {
                                value: o.characterPrompt || "",
                                onChange: (n) => i(o.key, {
                                  characterPrompt: n.target.value
                                }),
                                placeholder: "\u89E6\u53D1\u540E\u5BF9\u89D2\u8272\u7684\u989D\u5916\u6307\u4EE4...",
                                className: "min-h-15 text-xs resize-none"
                              })
                            ]
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsxs(k, {
                                className: "text-xs flex items-center gap-1.5 font-bold opacity-70",
                                children: [
                                  e.jsx(ds, {
                                    className: "w-3 h-3"
                                  }),
                                  " \u7528\u6237\u6D88\u606F (\u89E6\u53D1\u540E)"
                                ]
                              }),
                              e.jsx(G, {
                                value: o.userInfo || "",
                                onChange: (n) => i(o.key, {
                                  userInfo: n.target.value
                                }),
                                placeholder: "\u89E6\u53D1\u540E\u663E\u793A\u7ED9\u7528\u6237\u7684\u4FE1\u606F...",
                                className: "min-h-15 text-xs resize-none"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  e.jsx(w, {
                    variant: "ghost",
                    size: "icon",
                    className: "h-8 w-8 text-destructive self-start",
                    onClick: () => d(o.key),
                    type: "button",
                    children: e.jsx(_e, {
                      className: "w-3.5 h-3.5"
                    })
                  })
                ]
              })
            })
          }, o.key))
        })
      ]
    });
  };
  pn = /[,，]/;
  fn = (s) => {
    const { variables: t, variableConfigs: a, onChange: r } = s, [l, c] = g.useState(""), x = () => {
      const i = l.trim();
      if (!i || t[i]) return;
      const o = {
        key: i,
        type: "number",
        hidden: false,
        initial: 0
      }, n = 0;
      r({
        ...t,
        [i]: {
          key: i,
          value: n
        }
      }, {
        ...a,
        [i]: o
      }), c("");
    }, p = (i) => {
      const o = {
        ...t
      };
      delete o[i];
      const n = {
        ...a
      };
      delete n[i], r(o, n);
    }, d = (i, o) => {
      const n = a[i];
      if (!n) return;
      let m = {
        ...n,
        ...o
      };
      o.type && o.type !== n.type && (o.type === "number" ? m = {
        key: i,
        type: "number",
        hidden: false,
        initial: 0
      } : o.type === "boolean" ? m = {
        key: i,
        type: "boolean",
        hidden: false,
        initial: false
      } : o.type === "string" ? m = {
        key: i,
        type: "string",
        hidden: false,
        initial: ""
      } : o.type === "tags" && (m = {
        key: i,
        type: "tags",
        hidden: false,
        initial: []
      }));
      const u = {
        ...a,
        [i]: m
      }, h = {
        ...t,
        [i]: {
          key: i,
          value: m.initial ?? 0
        }
      };
      r(h, u);
    };
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs("div", {
          className: "flex gap-2",
          children: [
            e.jsx("div", {
              className: "grow",
              children: e.jsx(E, {
                value: l,
                onChange: (i) => c(i.target.value),
                placeholder: "\u53D8\u91CF\u952E\u540D (\u5982\uFF1Atrust, points, health)",
                onKeyDown: (i) => {
                  i.key === "Enter" && (i.preventDefault(), x());
                }
              })
            }),
            e.jsxs(w, {
              onClick: x,
              type: "button",
              disabled: !l.trim() || !!t[l.trim()],
              children: [
                e.jsx(te, {
                  className: "w-4 h-4 mr-2"
                }),
                " \u6DFB\u52A0\u53D8\u91CF"
              ]
            })
          ]
        }),
        e.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: Object.entries(a).length === 0 ? e.jsxs("div", {
            className: "col-span-full p-12 border border-dashed rounded-xl flex flex-col items-center justify-center text-muted-foreground bg-muted/5",
            children: [
              e.jsx(bs, {
                className: "w-8 h-8 mb-2 opacity-20"
              }),
              e.jsx("p", {
                className: "text-sm",
                children: "\u6682\u672A\u5B9A\u4E49\u4EFB\u4F55\u53D8\u91CF"
              })
            ]
          }) : Object.entries(a).map(([i, o]) => e.jsxs(U, {
            className: "relative group border-muted/60 hover:border-primary/30 transition-colors",
            children: [
              e.jsx(w, {
                variant: "ghost",
                size: "icon",
                className: "absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity z-10",
                onClick: () => p(i),
                type: "button",
                children: e.jsx(_e, {
                  className: "w-3.5 h-3.5"
                })
              }),
              e.jsxs(z, {
                className: "p-4 space-y-4",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2 mb-1",
                    children: [
                      e.jsx("div", {
                        className: "bg-primary/10 p-1.5 rounded-lg",
                        children: e.jsx(Ie, {
                          className: "w-4 h-4 text-primary"
                        })
                      }),
                      e.jsx("span", {
                        className: "font-bold text-sm truncate pr-8",
                        children: i
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-1",
                        children: [
                          e.jsx(k, {
                            className: "text-[10px] uppercase text-muted-foreground font-bold",
                            children: "\u6570\u636E\u7C7B\u578B"
                          }),
                          e.jsxs(Re, {
                            value: o.type,
                            onValueChange: (n) => d(i, {
                              type: n
                            }),
                            children: [
                              e.jsx($e, {
                                className: "h-8 text-sm",
                                children: e.jsx(Fe, {})
                              }),
                              e.jsxs(Be, {
                                children: [
                                  e.jsxs(ie, {
                                    value: "number",
                                    className: "text-xs",
                                    children: [
                                      e.jsx(bs, {
                                        className: "w-3 h-3 inline mr-1"
                                      }),
                                      " \u6570\u503C"
                                    ]
                                  }),
                                  e.jsxs(ie, {
                                    value: "boolean",
                                    className: "text-xs",
                                    children: [
                                      e.jsx(Pt, {
                                        className: "w-3 h-3 inline mr-1"
                                      }),
                                      " \u5E03\u5C14"
                                    ]
                                  }),
                                  e.jsxs(ie, {
                                    value: "string",
                                    className: "text-xs",
                                    children: [
                                      e.jsx(Et, {
                                        className: "w-3 h-3 inline mr-1"
                                      }),
                                      " \u6587\u672C"
                                    ]
                                  }),
                                  e.jsxs(ie, {
                                    value: "tags",
                                    className: "text-xs",
                                    children: [
                                      e.jsx(ct, {
                                        className: "w-3 h-3 inline mr-1"
                                      }),
                                      " \u6807\u7B7E\u96C6\u5408"
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      e.jsxs("div", {
                        className: "space-y-1",
                        children: [
                          e.jsx(k, {
                            className: "text-[10px] uppercase text-muted-foreground font-bold",
                            children: "\u521D\u59CB\u503C (Initial)"
                          }),
                          o.type === "number" && e.jsx(E, {
                            type: "number",
                            value: o.initial,
                            onChange: (n) => d(i, {
                              initial: Number(n.target.value)
                            }),
                            className: "h-8 text-sm font-mono"
                          }),
                          o.type === "boolean" && e.jsxs("div", {
                            className: "flex items-center gap-2 h-8",
                            children: [
                              e.jsx(De, {
                                checked: o.initial,
                                onCheckedChange: (n) => d(i, {
                                  initial: n
                                })
                              }),
                              e.jsx("span", {
                                className: "text-xs font-medium",
                                children: o.initial ? "\u5F00\u542F/\u771F" : "\u5173\u95ED/\u5047"
                              })
                            ]
                          }),
                          o.type === "string" && e.jsx(E, {
                            value: o.initial,
                            onChange: (n) => d(i, {
                              initial: n.target.value
                            }),
                            className: "h-8 text-sm"
                          }),
                          o.type === "tags" && e.jsx(E, {
                            value: o.initial.join(", "),
                            onChange: (n) => d(i, {
                              initial: n.target.value.split(pn).map((m) => m.trim()).filter(Boolean)
                            }),
                            placeholder: "\u9017\u53F7\u5206\u9694\u521D\u59CB\u6807\u7B7E",
                            className: "h-8 text-sm"
                          })
                        ]
                      }),
                      o.type === "number" && e.jsxs("div", {
                        className: "grid grid-cols-2 gap-2 pt-1",
                        children: [
                          e.jsxs("div", {
                            className: "space-y-1",
                            children: [
                              e.jsx(k, {
                                className: "text-[10px] text-muted-foreground",
                                children: "\u6700\u5C0F\u503C"
                              }),
                              e.jsx(E, {
                                type: "number",
                                value: o.min ?? "",
                                onChange: (n) => d(i, {
                                  min: n.target.value ? Number(n.target.value) : void 0
                                }),
                                className: "h-7 text-[10px] px-2"
                              })
                            ]
                          }),
                          e.jsxs("div", {
                            className: "space-y-1",
                            children: [
                              e.jsx(k, {
                                className: "text-[10px] text-muted-foreground",
                                children: "\u6700\u5927\u503C"
                              }),
                              e.jsx(E, {
                                type: "number",
                                value: o.max ?? "",
                                onChange: (n) => d(i, {
                                  max: n.target.value ? Number(n.target.value) : void 0
                                }),
                                className: "h-7 text-[10px] px-2"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }, i))
        })
      ]
    });
  };
  ps = {
    id: "",
    characterId: "",
    roleTaskPrompt: "",
    userGuidance: "",
    name: "",
    description: "",
    goals: [],
    failureChecks: [],
    variables: {},
    tags: []
  };
  fs = {};
  js = {};
  re = Q({
    formData: {
      ...ps
    },
    variables: {
      ...fs
    },
    variableConfigs: {
      ...js
    },
    updateField(s, t) {
      this.formData[s] = t;
    },
    setVariables(s) {
      this.variables = {
        ...s
      };
    },
    setVariableConfigs(s) {
      this.variableConfigs = {
        ...s
      };
    },
    updateVariablesAndConfigs(s, t) {
      this.variables = {
        ...s
      }, this.variableConfigs = {
        ...t
      };
    },
    setTags(s) {
      this.formData.tags = s;
    },
    loadInitialData(s) {
      s ? (Object.assign(this.formData, {
        ...s,
        goals: s.goals || [],
        failureChecks: s.failureChecks || [],
        variables: s.variables || {},
        tags: s.tags || [],
        ...s.createdAt ? {
          createdAt: s.createdAt
        } : {},
        ...s.updatedAt ? {
          updatedAt: s.updatedAt
        } : {}
      }), this.variableConfigs = s.variables || {}) : (Object.assign(this.formData, ps), this.variables = {
        ...fs
      }, this.variableConfigs = {
        ...js
      });
    },
    resetForm() {
      Object.assign(this.formData, ps), this.variables = {
        ...fs
      }, this.variableConfigs = {
        ...js
      };
    },
    getFormDataForSave() {
      return {
        ...le(this.formData),
        variables: le(this.variableConfigs)
      };
    }
  });
  jn = /[,，]/;
  Cr = (s) => {
    var _a2;
    const t = g.useId(), a = ue(re);
    g.useEffect(() => {
      re.loadInitialData(s.initialData);
    }, [
      s.initialData
    ]);
    const r = (l) => {
      l.preventDefault(), s.onSave(re.getFormDataForSave());
    };
    return e.jsxs(U, {
      className: "max-w-4xl mx-auto shadow-lg border-muted/60",
      children: [
        e.jsx(H, {
          className: "pb-4",
          children: e.jsx("div", {
            className: "flex items-center justify-between",
            children: e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("div", {
                  className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center",
                  children: e.jsx(ke, {
                    className: "w-6 h-6 text-primary"
                  })
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(J, {
                      className: "text-xl",
                      children: "\u6311\u6218\u8BBE\u8BA1\u5DE5\u4F5C\u5BA4"
                    }),
                    e.jsx(Y, {
                      children: "\u8BBE\u8BA1\u5173\u5361\u76EE\u6807\u3001\u6570\u503C\u53D8\u91CF\u4E0E\u53D9\u4E8B\u89C4\u5219"
                    })
                  ]
                })
              ]
            })
          })
        }),
        e.jsxs("form", {
          onSubmit: r,
          children: [
            e.jsx(z, {
              children: e.jsxs(ft, {
                defaultValue: "base",
                className: "w-full",
                children: [
                  e.jsxs(jt, {
                    className: "grid grid-cols-4 w-full h-11 bg-muted/30 p-1 mb-8",
                    children: [
                      e.jsxs(pe, {
                        value: "base",
                        className: "gap-2",
                        children: [
                          e.jsx(ze, {
                            className: "w-4 h-4"
                          }),
                          " \u57FA\u7840\u8BBE\u5B9A"
                        ]
                      }),
                      e.jsxs(pe, {
                        value: "goals",
                        className: "gap-2",
                        children: [
                          e.jsx(Ot, {
                            className: "w-4 h-4"
                          }),
                          " \u4EFB\u52A1\u76EE\u6807"
                        ]
                      }),
                      e.jsxs(pe, {
                        value: "failures",
                        className: "gap-2",
                        children: [
                          e.jsx(Rt, {
                            className: "w-4 h-4"
                          }),
                          " \u5931\u8D25\u6761\u4EF6"
                        ]
                      }),
                      e.jsxs(pe, {
                        value: "variables",
                        className: "gap-2",
                        children: [
                          e.jsx(bs, {
                            className: "w-4 h-4"
                          }),
                          " \u6570\u503C\u53D8\u91CF"
                        ]
                      })
                    ]
                  }),
                  e.jsx(fe, {
                    value: "base",
                    className: "space-y-6 animate-in fade-in-50 duration-300",
                    children: e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          className: "grid grid-cols-2 gap-4",
                          children: [
                            e.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                e.jsx(k, {
                                  htmlFor: `${t}-name`,
                                  children: "\u6311\u6218\u540D\u79F0"
                                }),
                                e.jsx(E, {
                                  id: `${t}-name`,
                                  value: a.formData.name,
                                  onChange: (l) => re.updateField("name", l.target.value),
                                  placeholder: "\u5982\uFF1A\u8FF7\u5931\u4E4B\u57CE\u7684\u5951\u7EA6",
                                  required: true
                                })
                              ]
                            }),
                            e.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                e.jsx(k, {
                                  htmlFor: `${t}-charId`,
                                  children: "\u7ED1\u5B9A\u89D2\u8272 ID"
                                }),
                                e.jsx(E, {
                                  id: `${t}-charId`,
                                  value: a.formData.characterId,
                                  onChange: (l) => re.updateField("characterId", l.target.value),
                                  placeholder: "\u4F8B\u5982: kallen-123",
                                  required: true
                                })
                              ]
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx(k, {
                              htmlFor: `${t}-desc`,
                              children: "\u80CC\u666F\u4ECB\u7ECD\u4E0E\u89C4\u5219\u8BF4\u660E"
                            }),
                            e.jsx(G, {
                              id: `${t}-desc`,
                              value: a.formData.description,
                              onChange: (l) => re.updateField("description", l.target.value),
                              placeholder: "\u63CF\u8FF0\u8BE5\u6311\u6218\u7684\u80CC\u666F\u6545\u4E8B\uFF0C\u4EE5\u53CA\u73A9\u5BB6\u9700\u8981\u9075\u5B88\u7684\u7279\u6B8A\u89C4\u5219...",
                              className: "min-h-32 leading-relaxed"
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          className: "grid grid-cols-2 gap-4",
                          children: [
                            e.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                e.jsx(k, {
                                  htmlFor: `${t}-roleTask`,
                                  children: "\u89D2\u8272\u4EFB\u52A1\u63D0\u793A\u8BCD (DM\u89C6\u89D2)"
                                }),
                                e.jsx(G, {
                                  id: `${t}-roleTask`,
                                  value: a.formData.roleTaskPrompt,
                                  onChange: (l) => re.updateField("roleTaskPrompt", l.target.value),
                                  placeholder: "\u5728\u8BE5\u6311\u6218\u4E2D\uFF0C\u901A\u8FC7AI\u7CFB\u7EDF\u53D1\u7ED9\u89D2\u8272\u7684\u7279\u6B8A\u6307\u4EE4...",
                                  className: "min-h-24 text-xs font-mono"
                                })
                              ]
                            }),
                            e.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                e.jsx(k, {
                                  htmlFor: `${t}-userGuidance`,
                                  children: "\u7528\u6237\u6307\u5F15\u8BF4\u660E"
                                }),
                                e.jsx(G, {
                                  id: `${t}-userGuidance`,
                                  value: a.formData.userGuidance,
                                  onChange: (l) => re.updateField("userGuidance", l.target.value),
                                  placeholder: "\u7ED9\u8FDB\u5165\u6311\u6218\u7684\u7528\u6237\u7684\u6587\u5B57\u6307\u5F15...",
                                  className: "min-h-24 text-xs font-mono"
                                })
                              ]
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx(k, {
                              htmlFor: `${t}-tags`,
                              children: "\u6311\u6218\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)"
                            }),
                            e.jsx(E, {
                              id: `${t}-tags`,
                              value: (_a2 = a.formData.tags) == null ? void 0 : _a2.join(", "),
                              onChange: (l) => re.setTags(l.target.value.split(jn).map((c) => c.trim()).filter(Boolean)),
                              placeholder: "\u5947\u5E7B, \u60AC\u7591, \u9AD8\u96BE\u5EA6"
                            })
                          ]
                        })
                      ]
                    })
                  }),
                  e.jsx(fe, {
                    value: "goals",
                    className: "animate-in fade-in-50 duration-300",
                    children: e.jsx(Ys, {
                      value: a.formData.goals,
                      variables: a.variableConfigs,
                      onChange: (l) => re.updateField("goals", l)
                    })
                  }),
                  e.jsx(fe, {
                    value: "failures",
                    className: "animate-in fade-in-50 duration-300",
                    children: e.jsx(Ys, {
                      title: "\u5931\u8D25\u68C0\u67E5",
                      description: "\u5B9A\u4E49\u5BFC\u81F4\u6311\u6218\u5931\u8D25\u7684\u6761\u4EF6",
                      value: a.formData.failureChecks,
                      variables: a.variableConfigs,
                      onChange: (l) => re.updateField("failureChecks", l)
                    })
                  }),
                  e.jsx(fe, {
                    value: "variables",
                    className: "animate-in fade-in-50 duration-300",
                    children: e.jsx(fn, {
                      variables: a.variables,
                      variableConfigs: a.variableConfigs,
                      onChange: (l, c) => re.updateVariablesAndConfigs(l, c)
                    })
                  })
                ]
              })
            }),
            e.jsxs(As, {
              className: "flex justify-between border-t py-6 bg-muted/10",
              children: [
                e.jsxs(w, {
                  variant: "ghost",
                  type: "button",
                  onClick: s.onCancel,
                  className: "rounded-lg h-11 px-6",
                  children: [
                    e.jsx(Je, {
                      className: "w-4 h-4 mr-2"
                    }),
                    " \u653E\u5F03\u4FEE\u6539"
                  ]
                }),
                e.jsxs(w, {
                  type: "submit",
                  className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20",
                  children: [
                    e.jsx(it, {
                      className: "w-4 h-4 mr-2"
                    }),
                    " \u4FDD\u5B58\u6311\u6218\u8BBE\u8BA1"
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  };
  Nn = (s) => !s.lorebook || !s.lorebook.entries || s.lorebook.entries.length === 0 ? e.jsx(U, {
    className: "bg-muted/20 border-dashed",
    children: e.jsxs(z, {
      className: "py-10 flex flex-col items-center justify-center text-muted-foreground",
      children: [
        e.jsx($t, {
          className: "w-10 h-10 mb-3 opacity-20"
        }),
        e.jsx("p", {
          className: "text-sm",
          children: "\u8BE5\u89D2\u8272\u6682\u65E0\u7ED1\u5B9A\u7684\u77E5\u8BC6\u4E66 (Lorebook)"
        })
      ]
    })
  }) : e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        className: "flex flex-wrap gap-4",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2 text-xs bg-muted/50 px-3 py-1.5 rounded-full border",
            children: [
              e.jsx(Ue, {
                className: "w-3.5 h-3.5 text-primary"
              }),
              e.jsx("span", {
                className: "font-medium text-muted-foreground mr-1",
                children: "\u626B\u63CF\u6DF1\u5EA6:"
              }),
              s.lorebook.scan_depth ?? 50
            ]
          }),
          e.jsxs("div", {
            className: "flex items-center gap-2 text-xs bg-muted/50 px-3 py-1.5 rounded-full border",
            children: [
              e.jsx(lt, {
                className: "w-3.5 h-3.5 text-blue-500"
              }),
              e.jsx("span", {
                className: "font-medium text-muted-foreground mr-1",
                children: "Token \u9884\u7B97:"
              }),
              s.lorebook.token_budget ?? 500
            ]
          }),
          s.lorebook.recursive_scanning && e.jsxs("div", {
            className: "flex items-center gap-2 text-xs bg-green-500/5 text-green-600 px-3 py-1.5 rounded-full border border-green-500/20",
            children: [
              e.jsx(Ft, {
                className: "w-3.5 h-3.5"
              }),
              "\u9012\u5F52\u626B\u63CF\u5DF2\u5F00\u542F"
            ]
          })
        ]
      }),
      e.jsx("div", {
        className: "grid grid-cols-1 gap-4",
        children: s.lorebook.entries.map((t, a) => e.jsx(U, {
          className: "overflow-hidden group hover:border-primary/40 transition-colors shadow-sm",
          children: e.jsxs("div", {
            className: "flex",
            children: [
              e.jsx("div", {
                className: "w-1 bg-primary group-hover:w-2 transition-all shrink-0"
              }),
              e.jsxs("div", {
                className: "grow",
                children: [
                  e.jsxs(H, {
                    className: "py-4 flex flex-row items-start justify-between space-y-0",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-1.5 grow",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2 flex-wrap",
                            children: [
                              e.jsx(J, {
                                className: "text-base font-bold",
                                children: t.name || `\u6761\u76EE ${a + 1}`
                              }),
                              !t.enabled && e.jsx(R, {
                                variant: "secondary",
                                children: "\u5DF2\u7981\u7528"
                              }),
                              t.constant && e.jsx(R, {
                                variant: "outline",
                                className: "text-amber-600 border-amber-200 bg-amber-50",
                                children: "\u5E38\u91CF"
                              })
                            ]
                          }),
                          e.jsx("div", {
                            className: "flex flex-wrap gap-1.5",
                            children: t.keys.map((r) => e.jsxs("div", {
                              className: "flex items-center gap-1 bg-primary/5 text-[10px] text-primary px-1.5 py-0.5 rounded border border-primary/10 font-mono",
                              children: [
                                e.jsx(ct, {
                                  className: "w-2.5 h-2.5"
                                }),
                                r
                              ]
                            }, `key-${r}-${t.id || a}`))
                          })
                        ]
                      }),
                      e.jsxs("div", {
                        className: "text-[10px] text-muted-foreground font-mono text-right shrink-0 ml-4",
                        children: [
                          "Order: ",
                          t.insertion_order,
                          " ",
                          e.jsx("br", {}),
                          "Pos: ",
                          t.position === "before_char" ? "Before Char" : "After Char"
                        ]
                      })
                    ]
                  }),
                  e.jsxs(z, {
                    className: "pb-4",
                    children: [
                      e.jsx("div", {
                        className: "text-sm bg-muted/30 p-3 rounded-lg border text-muted-foreground leading-relaxed whitespace-pre-wrap",
                        children: t.content
                      }),
                      t.comment && e.jsxs("p", {
                        className: "mt-2 text-[10px] text-muted-foreground italic flex items-center gap-1",
                        children: [
                          e.jsx(Ue, {
                            className: "w-2.5 h-2.5 opacity-50"
                          }),
                          "\u6CE8: ",
                          t.comment
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }, t.id || `entry-${a}`))
      })
    ]
  });
  kr = (s) => e.jsx("div", {
    className: "space-y-6",
    children: e.jsxs(ft, {
      defaultValue: "basic",
      className: "w-full",
      children: [
        e.jsxs(jt, {
          className: "grid grid-cols-4 w-full h-11 bg-muted/30 p-1 mb-6",
          children: [
            e.jsx(pe, {
              value: "basic",
              className: "data-[state=active]:bg-background",
              children: "\u57FA\u7840\u8BBE\u5B9A"
            }),
            e.jsx(pe, {
              value: "prompt",
              className: "data-[state=active]:bg-background",
              children: "\u63D0\u793A\u8BCD\u6A21\u677F"
            }),
            e.jsx(pe, {
              value: "lorebook",
              className: "data-[state=active]:bg-background",
              children: "\u77E5\u8BC6\u4E66"
            }),
            e.jsx(pe, {
              value: "advanced",
              className: "data-[state=active]:bg-background",
              children: "\u9AD8\u7EA7/\u6269\u5C55"
            })
          ]
        }),
        e.jsxs(fe, {
          value: "basic",
          className: "space-y-6 animate-in fade-in-50 duration-300",
          children: [
            e.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: [
                e.jsxs(U, {
                  className: "shadow-xs border-muted/50",
                  children: [
                    e.jsx(H, {
                      className: "py-4",
                      children: e.jsxs(J, {
                        className: "text-sm flex items-center gap-2",
                        children: [
                          e.jsx(je, {
                            className: "w-4 h-4 text-primary"
                          }),
                          "\u4EBA\u683C\u4E0E\u8EAB\u4E16"
                        ]
                      })
                    }),
                    e.jsxs(z, {
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            e.jsx(Se, {
                              children: "\u4EBA\u683C\u63CF\u8FF0 (Personality)"
                            }),
                            e.jsx(ge, {
                              children: s.character.personality
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            e.jsx(Se, {
                              children: "\u89D2\u8272\u63CF\u8FF0 (Description)"
                            }),
                            e.jsx(ge, {
                              children: s.character.description
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs(U, {
                  className: "shadow-xs border-muted/50",
                  children: [
                    e.jsx(H, {
                      className: "py-4",
                      children: e.jsxs(J, {
                        className: "text-sm flex items-center gap-2",
                        children: [
                          e.jsx(Ds, {
                            className: "w-4 h-4 text-green-500"
                          }),
                          "\u5F00\u573A\u8BED\u4E0E\u793A\u4F8B"
                        ]
                      })
                    }),
                    e.jsxs(z, {
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            e.jsx(Se, {
                              children: "\u7B2C\u4E00\u6761\u6D88\u606F (First Message)"
                            }),
                            e.jsx(ge, {
                              variant: "primary",
                              children: s.character.first_mes
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            e.jsx(Se, {
                              children: "\u5BF9\u8BDD\u573A\u666F\u63CF\u8FF0 (Scenario)"
                            }),
                            e.jsx(ge, {
                              children: s.character.scenario
                            })
                          ]
                        }),
                        s.character.alternate_greetings.length > 0 && e.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            e.jsxs(Se, {
                              children: [
                                "\u5907\u7528\u95EE\u5019\u8BED (",
                                s.character.alternate_greetings.length,
                                ")"
                              ]
                            }),
                            e.jsx("div", {
                              className: "space-y-2",
                              children: s.character.alternate_greetings.map((t, a) => e.jsx(ge, {
                                className: "py-2 opacity-80",
                                children: t
                              }, `alt-greet-${a}-${t.length}`))
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            e.jsxs(U, {
              className: "shadow-xs border-muted/50",
              children: [
                e.jsx(H, {
                  className: "py-4",
                  children: e.jsxs(J, {
                    className: "text-sm flex items-center gap-2",
                    children: [
                      e.jsx(Bt, {
                        className: "w-4 h-4 text-amber-500"
                      }),
                      "\u6D88\u606F\u793A\u4F8B (Message Examples)"
                    ]
                  })
                }),
                e.jsx(z, {
                  children: e.jsx(ge, {
                    className: "font-mono text-xs",
                    children: s.character.mes_example
                  })
                })
              ]
            })
          ]
        }),
        e.jsxs(fe, {
          value: "prompt",
          className: "space-y-6 animate-in fade-in-50 duration-300",
          children: [
            e.jsxs(U, {
              className: "border-muted/50",
              children: [
                e.jsxs(H, {
                  className: "py-4",
                  children: [
                    e.jsxs(J, {
                      className: "text-sm flex items-center gap-2 text-blue-600",
                      children: [
                        e.jsx(ze, {
                          className: "w-4 h-4"
                        }),
                        "\u7CFB\u7EDF\u63D0\u793A\u8BCD\u6A21\u677F (System Prompt)"
                      ]
                    }),
                    e.jsx(Y, {
                      className: "text-[11px]",
                      children: "\u5C06\u63D2\u5165\u5230\u5BF9\u8BDD\u5386\u53F2\u7684\u6700\u524D\u65B9\uFF0C\u7528\u4E8E\u5B9A\u4E49\u89D2\u8272\u7684\u6838\u5FC3\u884C\u4E3A\u51C6\u5219\u3002"
                    })
                  ]
                }),
                e.jsx(z, {
                  children: e.jsx(ge, {
                    className: "font-mono text-xs bg-blue-500/2 border-blue-500/10",
                    children: s.character.system_prompt || "\u4F7F\u7528\u5168\u5C40\u9ED8\u8BA4\u8BBE\u7F6E"
                  })
                })
              ]
            }),
            e.jsxs(U, {
              className: "border-muted/50",
              children: [
                e.jsxs(H, {
                  className: "py-4",
                  children: [
                    e.jsxs(J, {
                      className: "text-sm flex items-center gap-2 text-purple-600",
                      children: [
                        e.jsx(Ut, {
                          className: "w-4 h-4"
                        }),
                        "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"
                      ]
                    }),
                    e.jsx(Y, {
                      className: "text-[11px]",
                      children: "\u5C06\u63D2\u5165\u5230\u6BCF\u6761\u8BF7\u6C42\u6D88\u606F\u4E4B\u540E\uFF0C\u7528\u4E8E\u5F3A\u5236 LLM \u9075\u5B88\u7279\u5B9A\u8F93\u51FA\u683C\u5F0F\u3002"
                    })
                  ]
                }),
                e.jsx(z, {
                  children: e.jsx(ge, {
                    className: "font-mono text-xs bg-purple-500/2 border-purple-500/10",
                    children: s.character.post_history_instructions || "\u65E0\u7279\u5B9A\u6307\u4EE4"
                  })
                })
              ]
            })
          ]
        }),
        e.jsx(fe, {
          value: "lorebook",
          className: "animate-in fade-in-50 duration-300",
          children: e.jsx(Nn, {
            lorebook: s.character.character_book
          })
        }),
        e.jsx(fe, {
          value: "advanced",
          className: "space-y-6 animate-in fade-in-50 duration-300",
          children: e.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [
              e.jsxs(U, {
                className: "border-muted/50",
                children: [
                  e.jsx(H, {
                    className: "py-4",
                    children: e.jsx(J, {
                      className: "text-sm",
                      children: "\u5143\u6570\u636E\u4FE1\u606F"
                    })
                  }),
                  e.jsxs(z, {
                    className: "space-y-3",
                    children: [
                      e.jsx(es, {
                        label: "\u521B\u5EFA\u8005",
                        value: s.character.creator
                      }),
                      e.jsx(es, {
                        label: "\u89D2\u8272\u7248\u672C",
                        value: s.character.character_version
                      }),
                      e.jsx(es, {
                        label: "\u521B\u5EFA\u4E8E",
                        value: s.character.createdAt ? new Date(s.character.createdAt).toLocaleString() : "-"
                      }),
                      e.jsx(es, {
                        label: "\u66F4\u65B0\u4E8E",
                        value: s.character.updatedAt ? new Date(s.character.updatedAt).toLocaleString() : "-"
                      }),
                      e.jsxs("div", {
                        className: "pt-2",
                        children: [
                          e.jsx(Se, {
                            children: "\u521B\u5EFA\u8005\u7B14\u8BB0 (Creator Notes)"
                          }),
                          e.jsx(ge, {
                            className: "mt-1 text-xs",
                            children: s.character.creator_notes
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              e.jsxs(U, {
                className: "border-muted/50",
                children: [
                  e.jsx(H, {
                    className: "py-4",
                    children: e.jsx(J, {
                      className: "text-sm",
                      children: "\u6269\u5C55\u5B57\u6BB5 (Extensions)"
                    })
                  }),
                  e.jsx(z, {
                    children: e.jsx("div", {
                      className: "max-h-75 overflow-auto rounded-lg border bg-muted/20 p-4",
                      children: e.jsx("pre", {
                        className: "text-[10px] font-mono leading-tight",
                        children: JSON.stringify(s.character.extensions, null, 2)
                      })
                    })
                  })
                ]
              })
            ]
          })
        })
      ]
    })
  });
  Se = (s) => e.jsx("span", {
    className: "text-[11px] font-bold text-muted-foreground/80 uppercase tracking-widest block",
    children: s.children
  });
  ge = (s) => e.jsx("div", {
    className: `text-sm rounded-lg border p-3 leading-relaxed whitespace-pre-wrap ${s.variant === "primary" ? "bg-primary/5 text-primary/90 border-primary/20 italic" : "bg-muted/30 text-muted-foreground/90 border-muted/50"} ${s.className || ""}`,
    children: s.children || e.jsx("span", {
      className: "opacity-30",
      children: "\u672A\u586B\u5199"
    })
  });
  es = (s) => e.jsxs("div", {
    className: "flex justify-between items-center text-xs py-1.5 border-b border-muted/50 last:border-0",
    children: [
      e.jsx("span", {
        className: "text-muted-foreground",
        children: s.label
      }),
      e.jsx("span", {
        className: "font-mono font-medium",
        children: s.value ?? "-"
      })
    ]
  });
  Ir = (s) => {
    const t = K();
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs(U, {
          className: "border-primary/20 bg-primary/5",
          children: [
            e.jsxs(H, {
              children: [
                e.jsxs(J, {
                  className: "text-lg flex items-center gap-2",
                  children: [
                    e.jsx(te, {
                      className: "w-5 h-5"
                    }),
                    "\u5F00\u542F\u65B0\u4F1A\u8BDD"
                  ]
                }),
                e.jsx(Y, {
                  children: "\u9009\u62E9\u4E00\u4E2A\u6A21\u5F0F\u5F00\u59CB\u4E0E\u8BE5\u89D2\u8272\u7684\u6545\u4E8B"
                })
              ]
            }),
            e.jsx(z, {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
              children: [
                "chat",
                "challenge",
                "dnd",
                "group-chat"
              ].map((a) => {
                const r = is(a), l = r.icon;
                return e.jsxs(w, {
                  className: "h-auto py-4 flex flex-col items-center gap-2",
                  variant: "outline",
                  onClick: () => s.onStartNew(a),
                  type: "button",
                  children: [
                    e.jsx(l, {
                      className: `w-6 h-6 ${r.colorClass}`
                    }),
                    e.jsxs("div", {
                      className: "text-center",
                      children: [
                        e.jsxs("div", {
                          className: "font-bold",
                          children: [
                            r.label,
                            "\u6A21\u5F0F"
                          ]
                        }),
                        e.jsx("div", {
                          className: "text-[10px] text-muted-foreground",
                          children: r.description
                        })
                      ]
                    })
                  ]
                }, a);
              })
            })
          ]
        }),
        e.jsxs(U, {
          children: [
            e.jsx(H, {
              children: e.jsx(J, {
                className: "text-lg",
                children: "\u5386\u53F2\u4F1A\u8BDD"
              })
            }),
            e.jsx(z, {
              className: "space-y-3",
              children: s.sessions.length > 0 ? s.sessions.map((a) => e.jsxs(w, {
                className: "w-full justify-between items-center h-auto py-4 px-5 border hover:bg-muted/50 transition-colors",
                variant: "ghost",
                onClick: () => t({
                  to: "/session/$sessionId",
                  params: {
                    sessionId: a.id
                  }
                }),
                type: "button",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      e.jsx("div", {
                        className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                        children: e.jsx(ot, {
                          className: "w-6 h-6 text-primary"
                        })
                      }),
                      e.jsxs("div", {
                        className: "text-left",
                        children: [
                          e.jsx("div", {
                            className: "font-semibold",
                            children: "\u7EE7\u7EED\u4E0A\u6B21\u6545\u4E8B"
                          }),
                          e.jsxs("div", {
                            className: "text-xs text-muted-foreground mt-1",
                            children: [
                              "\u6700\u540E\u6D3B\u8DC3: ",
                              new Date(a.updatedAt).toLocaleString()
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  e.jsx("div", {
                    className: "flex flex-col items-end gap-2",
                    children: e.jsx(R, {
                      variant: a.mode === "chat" ? "secondary" : "default",
                      className: "text-[10px]",
                      children: is(a.mode).badgeText
                    })
                  })
                ]
              }, a.id)) : e.jsx("div", {
                className: "text-center py-10 border rounded-lg border-dashed",
                children: e.jsx("p", {
                  className: "text-muted-foreground text-sm",
                  children: "\u8FD8\u6CA1\u6709\u8BE5\u89D2\u8272\u7684\u5386\u53F2\u4F1A\u8BDD"
                })
              })
            })
          ]
        })
      ]
    });
  };
  Dr = function({ character: s, trigger: t }) {
    const [a, r] = g.useState(false), [l, c] = g.useState(false), x = g.useId(), p = () => {
      try {
        const d = gt(s, {
          includeImageBase64: l
        }), i = "data:text/json;charset=utf-8," + encodeURIComponent(d), o = document.createElement("a");
        o.setAttribute("href", i), o.setAttribute("download", `${s.name}.json`), document.body.appendChild(o), o.click(), o.remove(), L.success(`\u89D2\u8272 ${s.name} \u5DF2\u5BFC\u51FA\u4E3A JSON`), r(false);
      } catch (d) {
        L.error("\u5BFC\u51FA\u5931\u8D25"), console.error("Export error:", d);
      }
    };
    return e.jsxs(Me, {
      open: a,
      onOpenChange: r,
      children: [
        e.jsx(pt, {
          asChild: true,
          children: t || e.jsxs(w, {
            variant: "outline",
            size: "sm",
            className: "flex items-center gap-2",
            type: "button",
            children: [
              e.jsx(tt, {
                className: "w-4 h-4"
              }),
              "\u5BFC\u51FA JSON"
            ]
          })
        }),
        e.jsxs(Le, {
          className: "sm:max-w-md",
          children: [
            e.jsx(Ae, {
              children: e.jsx(be, {
                children: "\u5BFC\u51FA\u89D2\u8272\u4E3A JSON"
              })
            }),
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("p", {
                  className: "text-sm text-muted-foreground",
                  children: [
                    '\u5C06\u89D2\u8272 "',
                    s.name,
                    '" \u5BFC\u51FA\u4E3A JSON \u6587\u4EF6\u3002'
                  ]
                }),
                e.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    e.jsx(us, {
                      id: `${x}-include-image-single`,
                      checked: l,
                      onCheckedChange: (d) => c(d === true)
                    }),
                    e.jsx(k, {
                      htmlFor: `${x}-include-image-single`,
                      className: "text-sm",
                      children: "\u5305\u542B Base64 \u56FE\u50CF\u6570\u636E"
                    })
                  ]
                }),
                e.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children: l ? "\u6587\u4EF6\u5C06\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5927\u4F46\u5B8C\u6574\u3002" : "\u6587\u4EF6\u4E0D\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5C0F\u4F46\u9700\u8981\u5355\u72EC\u5904\u7406\u56FE\u50CF\u3002"
                })
              ]
            }),
            e.jsxs("div", {
              className: "flex justify-end gap-2",
              children: [
                e.jsx(w, {
                  variant: "outline",
                  onClick: () => r(false),
                  children: "\u53D6\u6D88"
                }),
                e.jsx(w, {
                  onClick: p,
                  children: "\u5BFC\u51FA"
                })
              ]
            })
          ]
        })
      ]
    });
  };
  const vn = ({ onReady: s }) => {
    const t = K(), [a, r] = g.useState(null);
    if (g.useEffect(() => {
      const x = He();
      if (r(x), x.isReady) {
        const p = setTimeout(() => s(), 600);
        return () => clearTimeout(p);
      }
    }, [
      s
    ]), !a) return null;
    const l = [
      {
        key: "baseUrl",
        label: "API \u5730\u5740"
      },
      {
        key: "apiKey",
        label: "API \u5BC6\u94A5"
      },
      {
        key: "model",
        label: "\u6A21\u578B\u9009\u62E9"
      }
    ], c = new Set(a.missingItems.map((x) => x.key));
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsx("h3", {
              className: "text-lg font-bold",
              children: "LLM \u914D\u7F6E\u68C0\u6D4B"
            }),
            e.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA\uFF0C\u786E\u4FDD\u4F1A\u8BDD\u53EF\u4EE5\u6B63\u5E38\u8FDB\u884C\u3002"
            })
          ]
        }),
        e.jsx("div", {
          className: "space-y-3",
          children: l.map((x) => {
            const p = c.has(x.key), d = a.missingItems.find((i) => i.key === x.key);
            return e.jsxs("div", {
              className: A("flex items-center gap-3 p-3 rounded-xl border transition-colors", p ? "border-destructive/30 bg-destructive/5" : "border-primary/20 bg-primary/5"),
              children: [
                p ? e.jsx(dt, {
                  className: "w-5 h-5 text-destructive shrink-0"
                }) : e.jsx(Ge, {
                  className: "w-5 h-5 text-primary shrink-0"
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx("div", {
                      className: A("text-sm font-medium", p ? "text-destructive" : "text-foreground"),
                      children: x.label
                    }),
                    p && d && e.jsx("div", {
                      className: "text-xs text-muted-foreground mt-0.5",
                      children: d.description
                    })
                  ]
                })
              ]
            }, x.key);
          })
        }),
        a.isReady ? e.jsxs("div", {
          className: "flex items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/20",
          children: [
            e.jsx(Ge, {
              className: "w-5 h-5 text-primary shrink-0"
            }),
            e.jsx("span", {
              className: "text-sm font-medium text-primary",
              children: "\u6240\u6709\u914D\u7F6E\u5DF2\u5C31\u7EEA\uFF0C\u6B63\u5728\u8FDB\u5165\u4E0B\u4E00\u6B65..."
            })
          ]
        }) : e.jsxs("div", {
          className: "flex flex-col gap-3",
          children: [
            e.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E\u540E\u518D\u5F00\u59CB\u4F1A\u8BDD\u3002"
            }),
            e.jsxs("div", {
              className: "flex gap-3",
              children: [
                e.jsxs(w, {
                  type: "button",
                  variant: "default",
                  className: "gap-2",
                  onClick: () => t({
                    to: "/config/llm"
                  }),
                  children: [
                    e.jsx(Ie, {
                      className: "w-4 h-4"
                    }),
                    "\u524D\u5F80 LLM \u914D\u7F6E"
                  ]
                }),
                e.jsxs(w, {
                  type: "button",
                  variant: "outline",
                  className: "gap-2",
                  onClick: () => {
                    const x = He();
                    r(x), x.isReady && s();
                  },
                  children: [
                    e.jsx(mt, {
                      className: "w-4 h-4"
                    }),
                    "\u91CD\u65B0\u68C0\u6D4B"
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  };
  function Ns() {
    return {
      userName: "User",
      globalSystemPrompt: ""
    };
  }
  const bn = ({ config: s, onChange: t, character: a }) => {
    var _a2;
    const r = g.useId(), l = g.useId(), c = !!((_a2 = a.system_prompt) == null ? void 0 : _a2.trim());
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsxs("h3", {
              className: "text-lg font-bold flex items-center gap-2",
              children: [
                e.jsx(zt, {
                  className: "w-5 h-5 text-primary"
                }),
                "\u804A\u5929\u4F1A\u8BDD\u914D\u7F6E"
              ]
            }),
            e.jsxs("p", {
              className: "text-sm text-muted-foreground",
              children: [
                "\u914D\u7F6E\u672C\u6B21\u4E0E ",
                e.jsx("span", {
                  className: "font-medium text-foreground",
                  children: a.name
                }),
                " \u7684\u804A\u5929\u4F1A\u8BDD\u53C2\u6570\u3002"
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsx(k, {
              htmlFor: r,
              className: "text-sm font-medium",
              children: "\u4F60\u7684\u540D\u79F0"
            }),
            e.jsx(E, {
              id: r,
              value: s.userName,
              onChange: (x) => t({
                ...s,
                userName: x.target.value
              }),
              placeholder: "\u8F93\u5165\u4F60\u5728\u5BF9\u8BDD\u4E2D\u7684\u540D\u79F0...",
              className: "max-w-xs"
            }),
            e.jsx("p", {
              className: "text-xs text-muted-foreground",
              children: "\u89D2\u8272\u5728\u5BF9\u8BDD\u4E2D\u5982\u4F55\u79F0\u547C\u4F60\u3002"
            })
          ]
        }),
        c && e.jsxs("div", {
          className: "flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-muted",
          children: [
            e.jsx(ds, {
              className: "w-4 h-4 text-muted-foreground shrink-0 mt-0.5"
            }),
            e.jsxs("div", {
              className: "text-xs text-muted-foreground space-y-1",
              children: [
                e.jsx("p", {
                  className: "font-medium",
                  children: "\u8BE5\u89D2\u8272\u81EA\u5E26\u7CFB\u7EDF\u63D0\u793A\u8BCD"
                }),
                e.jsx("p", {
                  className: "line-clamp-2 italic",
                  children: a.system_prompt
                })
              ]
            })
          ]
        }),
        e.jsxs(ha, {
          children: [
            e.jsxs(ga, {
              className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group w-full",
              children: [
                e.jsx(rt, {
                  className: "w-4 h-4 transition-transform group-data-[state=open]:rotate-180"
                }),
                "\u9AD8\u7EA7\u914D\u7F6E"
              ]
            }),
            e.jsx(pa, {
              className: "pt-4 space-y-4",
              children: e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(k, {
                    htmlFor: l,
                    className: "text-sm font-medium",
                    children: "\u9644\u52A0\u7CFB\u7EDF\u63D0\u793A\u8BCD"
                  }),
                  e.jsx(G, {
                    id: l,
                    value: s.globalSystemPrompt,
                    onChange: (x) => t({
                      ...s,
                      globalSystemPrompt: x.target.value
                    }),
                    placeholder: "\u8F93\u5165\u989D\u5916\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u5C06\u8FFD\u52A0\u5230\u89D2\u8272\u5361\u81EA\u5E26\u7684\u63D0\u793A\u8BCD\u4E4B\u540E...",
                    className: "min-h-24 resize-y"
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: "\u53EF\u9009\u3002\u7528\u4E8E\u6DFB\u52A0\u989D\u5916\u7684\u89C4\u5219\u6216\u9650\u5236\uFF0C\u5982\u300C\u8BF7\u4F7F\u7528\u4E2D\u6587\u56DE\u590D\u300D\u3002"
                  })
                ]
              })
            })
          ]
        })
      ]
    });
  }, yn = ({ challenge: s, character: t }) => {
    const a = s.variables || {}, r = s.goals || [], l = s.failureChecks || [];
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsxs("h3", {
              className: "text-lg font-bold flex items-center gap-2",
              children: [
                e.jsx(ke, {
                  className: "w-5 h-5 text-amber-500"
                }),
                "\u6311\u6218\u89C4\u5219\u9884\u89C8"
              ]
            }),
            e.jsxs("p", {
              className: "text-sm text-muted-foreground",
              children: [
                "\u4EE5\u89D2\u8272 ",
                e.jsx("span", {
                  className: "font-medium text-foreground",
                  children: t.name
                }),
                " \u53C2\u4E0E\u6311\u6218 \u300C",
                e.jsx("span", {
                  className: "font-medium text-foreground",
                  children: s.name
                }),
                "\u300D\u3002"
              ]
            })
          ]
        }),
        s.userGuidance && e.jsxs("div", {
          className: "p-4 rounded-xl bg-muted/50 border border-muted italic text-sm text-muted-foreground leading-relaxed",
          children: [
            '"',
            s.userGuidance,
            '"'
          ]
        }),
        e.jsxs("div", {
          className: "space-y-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 text-sm font-bold text-muted-foreground",
              children: [
                e.jsx(de, {
                  className: "w-4 h-4 text-primary"
                }),
                "\u4E16\u754C\u53D8\u91CF",
                e.jsxs(R, {
                  variant: "outline",
                  className: "text-[9px] h-4 ml-auto",
                  children: [
                    Object.keys(a).length,
                    " \u4E2A"
                  ]
                })
              ]
            }),
            Object.keys(a).length > 0 ? e.jsx("div", {
              className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
              children: Object.entries(a).map(([c, x]) => e.jsxs("div", {
                className: A("p-3 rounded-xl border bg-background/60 space-y-1", x.hidden && "opacity-50"),
                children: [
                  e.jsx("div", {
                    className: "text-[10px] text-muted-foreground font-bold uppercase truncate",
                    children: c
                  }),
                  e.jsx("div", {
                    className: "text-base font-mono font-bold truncate",
                    children: String(x.initial)
                  }),
                  e.jsxs("div", {
                    className: "text-[10px] text-muted-foreground/60 truncate",
                    children: [
                      x.type,
                      " ",
                      x.hidden ? "(\u9690\u85CF)" : ""
                    ]
                  })
                ]
              }, c))
            }) : e.jsx("p", {
              className: "text-sm text-muted-foreground/60 italic",
              children: "\u65E0\u4E16\u754C\u53D8\u91CF"
            })
          ]
        }),
        e.jsxs("div", {
          className: "space-y-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 text-sm font-bold text-muted-foreground",
              children: [
                e.jsx(cs, {
                  className: "w-4 h-4 text-primary"
                }),
                "\u751F\u5B58\u76EE\u6807",
                e.jsxs(R, {
                  variant: "outline",
                  className: "text-[9px] h-4 ml-auto",
                  children: [
                    r.length,
                    " \u4E2A"
                  ]
                })
              ]
            }),
            r.length > 0 ? e.jsx("div", {
              className: "space-y-2",
              children: r.map((c) => e.jsxs("div", {
                className: "flex items-start gap-3 p-3 rounded-xl border bg-background/60",
                children: [
                  e.jsx("div", {
                    className: "w-4 h-4 rounded-full border-2 border-primary/30 shrink-0 mt-0.5"
                  }),
                  e.jsx("div", {
                    className: "text-sm",
                    children: c.description
                  })
                ]
              }, c.key))
            }) : e.jsx("p", {
              className: "text-sm text-muted-foreground/60 italic",
              children: "\u65E0\u8BBE\u5B9A\u76EE\u6807"
            })
          ]
        }),
        e.jsxs("div", {
          className: "space-y-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 text-sm font-bold text-muted-foreground",
              children: [
                e.jsx(Gt, {
                  className: "w-4 h-4 text-destructive"
                }),
                "\u6B7B\u4EA1\u7981\u5FCC",
                e.jsxs(R, {
                  variant: "outline",
                  className: "text-[9px] h-4 ml-auto",
                  children: [
                    l.length,
                    " \u4E2A"
                  ]
                })
              ]
            }),
            l.length > 0 ? e.jsx("div", {
              className: "space-y-2",
              children: l.map((c) => e.jsxs("div", {
                className: "flex items-start gap-3 p-3 rounded-xl border border-destructive/10 bg-destructive/5",
                children: [
                  e.jsx("div", {
                    className: "w-4 h-4 rounded-full border-2 border-destructive/30 shrink-0 mt-0.5"
                  }),
                  e.jsx("div", {
                    className: "text-sm",
                    children: c.description
                  })
                ]
              }, c.key))
            }) : e.jsx("p", {
              className: "text-sm text-muted-foreground/60 italic",
              children: "\u65E0\u5931\u8D25\u6761\u4EF6"
            })
          ]
        })
      ]
    });
  };
  function wn(s) {
    return s === "chat" ? [
      {
        key: "llm-check",
        title: "LLM \u68C0\u6D4B",
        description: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA"
      },
      {
        key: "chat-config",
        title: "\u4F1A\u8BDD\u914D\u7F6E",
        description: "\u914D\u7F6E\u672C\u6B21\u804A\u5929\u4F1A\u8BDD\u7684\u53C2\u6570"
      }
    ] : [
      {
        key: "llm-check",
        title: "LLM \u68C0\u6D4B",
        description: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA"
      },
      {
        key: "challenge-preview",
        title: "\u89C4\u5219\u9884\u89C8",
        description: "\u9884\u89C8\u5E76\u786E\u8BA4\u6311\u6218\u89C4\u5219"
      }
    ];
  }
  let yt, se, wt, ls, Ss;
  _r = ({ open: s, onOpenChange: t, wizardProps: a }) => {
    const [r, l] = g.useState(0), [c, x] = g.useState(Ns), p = wn(a.mode), d = p[r], i = r === p.length - 1, o = r === 0, n = g.useCallback(() => {
      l((j) => Math.min(j + 1, p.length - 1));
    }, [
      p.length
    ]), m = () => {
      i ? (a.mode === "chat" ? a.onConfirm(c) : a.onConfirm(), t(false), l(0), x(Ns())) : l((j) => j + 1);
    }, u = () => {
      l((j) => Math.max(j - 1, 0));
    }, h = (j) => {
      j || (l(0), x(Ns())), t(j);
    }, N = a.mode === "chat" ? "\u804A\u5929\u4F1A\u8BDD" : "\u6311\u6218\u4F1A\u8BDD";
    return e.jsx(Me, {
      open: s,
      onOpenChange: h,
      children: e.jsxs(Le, {
        className: "sm:max-w-lg max-h-[85vh] overflow-y-auto",
        children: [
          e.jsxs(Ae, {
            children: [
              e.jsxs(be, {
                className: "flex items-center gap-2",
                children: [
                  "\u5F00\u59CB",
                  N
                ]
              }),
              e.jsx(Ve, {
                children: d == null ? void 0 : d.description
              })
            ]
          }),
          e.jsx("div", {
            className: "flex items-center gap-2 py-2",
            children: p.map((j, f) => e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                f > 0 && e.jsx("div", {
                  className: "h-px w-6 bg-muted-foreground/20"
                }),
                e.jsx("div", {
                  className: `
                  w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-colors
                  ${f < r ? "bg-primary text-primary-foreground" : f === r ? "bg-primary/20 text-primary border-2 border-primary" : "bg-muted text-muted-foreground"}
                `,
                  children: f + 1
                }),
                e.jsx("span", {
                  className: `text-xs font-medium hidden sm:inline ${f === r ? "text-foreground" : "text-muted-foreground"}`,
                  children: j.title
                })
              ]
            }, j.key))
          }),
          e.jsxs("div", {
            className: "py-2 min-h-48",
            children: [
              (d == null ? void 0 : d.key) === "llm-check" && e.jsx(vn, {
                onReady: n
              }),
              (d == null ? void 0 : d.key) === "chat-config" && a.mode === "chat" && e.jsx(bn, {
                config: c,
                onChange: x,
                character: a.character
              }),
              (d == null ? void 0 : d.key) === "challenge-preview" && a.mode === "challenge" && e.jsx(yn, {
                challenge: a.challenge,
                character: a.character
              })
            ]
          }),
          e.jsxs(Ls, {
            className: "flex-row justify-between sm:justify-between gap-2",
            children: [
              e.jsxs(w, {
                type: "button",
                variant: "outline",
                disabled: o,
                onClick: u,
                className: "gap-1.5",
                children: [
                  e.jsx(Is, {
                    className: "w-4 h-4"
                  }),
                  "\u4E0A\u4E00\u6B65"
                ]
              }),
              e.jsx(w, {
                type: "button",
                onClick: m,
                disabled: (d == null ? void 0 : d.key) === "llm-check",
                className: "gap-1.5",
                children: i ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(os, {
                      className: "w-4 h-4"
                    }),
                    "\u5F00\u59CB",
                    N
                  ]
                }) : e.jsxs(e.Fragment, {
                  children: [
                    "\u4E0B\u4E00\u6B65",
                    e.jsx(mt, {
                      className: "w-4 h-4"
                    })
                  ]
                })
              })
            ]
          })
        ]
      })
    });
  };
  yt = (s) => {
    const [t, ...a] = s;
    if ([
      "and",
      "or",
      "all",
      "any",
      "some"
    ].includes(t)) {
      const r = a[0], l = t === "and" || t === "all" ? " \u4E14 " : " \u6216 ";
      return `(${r.map(yt).join(l)})`;
    }
    return t === "isTrue" || t === "isFalse" ? `${a[0]} \u4E3A ${t === "isTrue" ? "\u771F" : "\u5047"}` : `${a[0]} ${t} ${JSON.stringify(a[1])}`;
  };
  Tr = (s) => e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs(U, {
        children: [
          e.jsxs(H, {
            children: [
              e.jsxs(J, {
                className: "text-lg flex items-center gap-2",
                children: [
                  e.jsx(cs, {
                    className: "w-5 h-5 text-destructive"
                  }),
                  "\u6838\u5FC3\u4ECB\u7ECD"
                ]
              }),
              e.jsx(Y, {
                children: "\u6311\u6218\u80CC\u666F\u4E0E\u4E16\u754C\u89C2\u8BBE\u5B9A"
              })
            ]
          }),
          e.jsx(z, {
            children: e.jsx("p", {
              className: "text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap",
              children: s.challenge.description
            })
          })
        ]
      }),
      e.jsxs(U, {
        children: [
          e.jsxs(H, {
            children: [
              e.jsxs(J, {
                className: "text-lg flex items-center gap-2",
                children: [
                  e.jsx(ut, {
                    className: "w-5 h-5 text-primary"
                  }),
                  "\u76EE\u6807\u6311\u6218 (Goals)"
                ]
              }),
              e.jsx(Y, {
                children: "\u5F53\u6240\u6709\u76EE\u6807\u8FBE\u6210\u65F6\uFF0C\u6311\u6218\u5373\u544A\u6210\u529F"
              })
            ]
          }),
          e.jsx(z, {
            className: "space-y-4",
            children: s.challenge.goals.map((t, a) => e.jsxs("div", {
              className: "flex gap-4 p-4 rounded-lg bg-muted/40 border group hover:border-primary/50 transition-colors",
              children: [
                e.jsx("div", {
                  className: "w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0",
                  children: a + 1
                }),
                e.jsxs("div", {
                  className: "grow",
                  children: [
                    e.jsx("div", {
                      className: "font-medium text-sm",
                      children: t.description
                    }),
                    e.jsxs("div", {
                      className: "text-[10px] text-muted-foreground mt-2 font-mono flex items-center gap-2",
                      children: [
                        e.jsx(R, {
                          variant: "outline",
                          className: "text-[9px] font-mono py-0 h-4 shrink-0",
                          children: "Condition"
                        }),
                        e.jsx("span", {
                          className: "truncate",
                          children: yt(t.condition)
                        })
                      ]
                    })
                  ]
                })
              ]
            }, t.key))
          })
        ]
      }),
      e.jsxs(U, {
        children: [
          e.jsx(H, {
            children: e.jsxs(J, {
              className: "text-lg flex items-center gap-2",
              children: [
                e.jsx(Ie, {
                  className: "w-5 h-5 text-secondary"
                }),
                "\u53D8\u91CF\u914D\u7F6E (Variables)"
              ]
            })
          }),
          e.jsx(z, {
            children: e.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
              children: Object.entries(s.challenge.variables).map(([t, a]) => e.jsxs("div", {
                className: "p-3 rounded-md bg-muted/30 border flex justify-between items-center",
                children: [
                  e.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      e.jsx("div", {
                        className: "text-xs font-bold font-mono",
                        children: t
                      }),
                      e.jsxs("div", {
                        className: "text-[10px] text-muted-foreground",
                        children: [
                          "\u521D\u59CB\u503C: ",
                          String(a.initial ?? "null")
                        ]
                      })
                    ]
                  }),
                  e.jsx(R, {
                    variant: "secondary",
                    className: "text-[10px] capitalize",
                    children: a.type
                  })
                ]
              }, t))
            })
          })
        ]
      })
    ]
  });
  Mr = (s) => {
    const t = K();
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs(U, {
          className: "border-primary/20 bg-primary/5",
          children: [
            e.jsxs(H, {
              children: [
                e.jsxs(J, {
                  className: "text-lg flex items-center gap-2",
                  children: [
                    e.jsx(me, {
                      className: "w-5 h-5 text-primary"
                    }),
                    "\u4EE5\u6B64\u5267\u672C\u5F00\u542F\u65B0\u6311\u6218"
                  ]
                }),
                e.jsx(Y, {
                  children: "\u8BF7\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u4F5C\u4E3A\u6311\u6218\u7684\u4E3B\u89D2"
                })
              ]
            }),
            e.jsx(z, {
              className: "space-y-3",
              children: e.jsx("div", {
                className: "grid grid-cols-1 gap-2",
                children: s.characters.map((a) => e.jsxs(w, {
                  variant: "outline",
                  className: "w-full justify-start gap-4 h-14 bg-background",
                  onClick: () => s.onStartNew(a.id),
                  type: "button",
                  children: [
                    e.jsx("div", {
                      className: "w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0",
                      children: e.jsx(ve, {
                        className: "w-4 h-4 text-muted-foreground"
                      })
                    }),
                    e.jsxs("div", {
                      className: "text-left",
                      children: [
                        e.jsxs("div", {
                          className: "font-semibold text-sm",
                          children: [
                            "\u4F7F\u7528 ",
                            a.name
                          ]
                        }),
                        e.jsx("div", {
                          className: "text-[10px] text-muted-foreground truncate max-w-50",
                          children: a.description
                        })
                      ]
                    })
                  ]
                }, a.id))
              })
            })
          ]
        }),
        e.jsxs(U, {
          children: [
            e.jsx(H, {
              children: e.jsx(J, {
                className: "text-lg",
                children: "\u5DF2\u5B58\u6311\u6218\u8FDB\u5EA6"
              })
            }),
            e.jsx(z, {
              className: "space-y-3",
              children: s.sessions.length > 0 ? s.sessions.map((a) => e.jsxs(w, {
                className: "w-full justify-between items-center h-auto py-4 px-5 border hover:bg-muted/50 transition-colors",
                variant: "ghost",
                onClick: () => t({
                  to: "/session/$sessionId",
                  params: {
                    sessionId: a.id
                  }
                }),
                type: "button",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      e.jsx("div", {
                        className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                        children: e.jsx(ot, {
                          className: "w-6 h-6 text-primary"
                        })
                      }),
                      e.jsxs("div", {
                        className: "text-left",
                        children: [
                          e.jsx("div", {
                            className: "font-semibold",
                            children: "\u7EE7\u7EED\u6311\u6218"
                          }),
                          e.jsxs("div", {
                            className: "text-xs text-muted-foreground mt-1",
                            children: [
                              "\u6700\u540E\u6D3B\u8DC3: ",
                              new Date(a.updatedAt).toLocaleString()
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "flex flex-col items-end gap-1",
                    children: [
                      e.jsx(R, {
                        variant: "outline",
                        className: "text-[9px] h-5",
                        children: "\u4EE5\u6B64\u5267\u672C\u8FDB\u53D1"
                      }),
                      e.jsx("span", {
                        className: "text-[10px] text-muted-foreground italic",
                        children: a.characterId ? `\u89D2\u8272 ID: ${a.characterId.slice(0, 8)}...` : "\u672A\u77E5\u89D2\u8272"
                      })
                    ]
                  })
                ]
              }, a.id)) : e.jsx("div", {
                className: "text-center py-10 border rounded-lg border-dashed",
                children: e.jsx("p", {
                  className: "text-muted-foreground text-sm",
                  children: "\u8FD8\u6CA1\u6709\u57FA\u4E8E\u6B64\u5267\u672C\u7684\u6311\u6218\u8BB0\u5F55"
                })
              })
            })
          ]
        })
      ]
    });
  };
  se = Q({
    currentSession: null,
    contextManager: null,
    get messages() {
      if (!(this.contextManager && this.currentSession)) return [];
      const s = ya(this.contextManager.state, {
        characterId: this.currentSession.modeConfig.characterId
      });
      return Array.isArray(s) ? s : [];
    },
    startNewSession(s, t) {
      const a = {
        id: F(),
        contextId: null,
        mode: "chat",
        modeConfig: s,
        modeState: {
          currentPhase: "character_first_msg"
        },
        createdAt: Date.now(),
        updatedAt: Date.now(),
        isActive: true
      };
      this.currentSession = a;
      const r = new Ne(t || {
        historyItems: [],
        processingItem: void 0
      });
      return r.state = Q(r.state), this.contextManager = r, a;
    },
    getContextState() {
      return this.contextManager ? this.contextManager.state : null;
    },
    updateContextState(s) {
      this.contextManager && (Object.assign(this.contextManager.state, s), this.currentSession && (this.currentSession.updatedAt = Date.now()));
    },
    updateCurrentPhase(s) {
      this.currentSession && (this.currentSession.modeState.currentPhase = s, this.currentSession.updatedAt = Date.now());
    },
    updateCurrentConfig(s) {
      this.currentSession && (Object.assign(this.currentSession.modeConfig, s), this.currentSession.updatedAt = Date.now());
    },
    endCurrentSession() {
      this.currentSession = null, this.contextManager = null;
    },
    getCurrentSessionSnapshot() {
      return this.currentSession ? {
        ...this.currentSession
      } : null;
    },
    loadFromData(s) {
      this.currentSession = s.session, s.contextState && (this.contextManager = new Ne(s.contextState), this.contextManager.state = Q(this.contextManager.state));
    },
    loadSession(s) {
      this.currentSession = s;
    },
    async saveNewContextItemsToDB(s, t) {
      const { SessionDB: a } = await ce(async () => {
        const { SessionDB: l } = await import("./silly-tavern-db-C6OCLe8X.js").then((c) => c.d);
        return {
          SessionDB: l
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]));
      await new a(s).addContextItems(t);
    }
  });
  wt = (s) => {
    const { item: t, character: a } = s;
    return e.jsxs("div", {
      className: "flex gap-4 md:gap-6 group",
      children: [
        e.jsx("div", {
          className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden",
          children: a.imageBase64 || a.avatar ? e.jsx("img", {
            src: a.imageBase64 || a.avatar,
            alt: a.name,
            className: "w-full h-full object-cover"
          }) : e.jsx(Z, {
            className: "w-6 h-6 text-primary"
          })
        }),
        e.jsxs("div", {
          className: "space-y-1.5 grow pt-1",
          children: [
            e.jsx("div", {
              className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2",
              children: a.name
            }),
            e.jsx("div", {
              className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium",
              children: t.data.content
            }),
            t.processing && e.jsx("div", {
              className: "text-[10px] text-muted-foreground/60 tracking-widest",
              children: "Streaming..."
            })
          ]
        })
      ]
    });
  };
  ls = (s) => {
    const { item: t, character: a } = s;
    return e.jsxs("div", {
      className: "flex gap-4 md:gap-6 group",
      children: [
        e.jsx("div", {
          className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden",
          children: a.imageBase64 || a.avatar ? e.jsx("img", {
            src: a.imageBase64 || a.avatar,
            alt: a.name,
            className: "w-full h-full object-cover"
          }) : e.jsx(Z, {
            className: "w-6 h-6 text-primary"
          })
        }),
        e.jsxs("div", {
          className: "space-y-1.5 grow pt-1",
          children: [
            e.jsx("div", {
              className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2",
              children: a.name
            }),
            e.jsx("div", {
              className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium",
              children: t.data.content
            }),
            t.processing && e.jsx("div", {
              className: "text-[10px] text-muted-foreground/60 tracking-widest",
              children: "Streaming..."
            })
          ]
        })
      ]
    });
  };
  Ss = (s) => {
    const { item: t } = s;
    return e.jsxs("div", {
      className: "flex gap-4 md:gap-6 flex-row-reverse group",
      children: [
        e.jsx("div", {
          className: "w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105",
          children: e.jsx(je, {
            className: "w-5 h-5 text-secondary-foreground"
          })
        }),
        e.jsxs("div", {
          className: "space-y-1.5 text-right grow pt-1",
          children: [
            e.jsx("div", {
              className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2 justify-end",
              children: "Player"
            }),
            e.jsx("div", {
              className: "text-[15px] leading-relaxed whitespace-pre-wrap bg-primary/5 text-foreground p-4 rounded-2xl inline-block text-left min-w-25 shadow-sm",
              children: t.data.content
            })
          ]
        })
      ]
    });
  };
  function Sn(s, t) {
    const a = ms(), r = g.useRef(false), l = K(), c = g.useCallback(async (p) => {
      if (!(r.current || !t || t.getHistoryCount() > 0 || !s)) try {
        r.current = true;
        const { makeChatModeStartingContextItems_CN: d } = await ce(async () => {
          const { makeChatModeStartingContextItems_CN: n } = await import("./silly-tavern-engine-D0R6Sr8P.js").then((m) => m.T);
          return {
            makeChatModeStartingContextItems_CN: n
          };
        }, __vite__mapDeps([22,23,4,3,5,6,9,10,11,12,13,14,15,1,2,16,17,18,19,20,21,0,7,8])), i = d(s);
        for (const n of i) t.addHistoryItem(n);
        const o = i.find((n) => n.type === "character_intro");
        if (o && p) {
          const n = o.data.content.split(" ");
          let m = "";
          for (const u of n) m += (m ? " " : "") + u, p(m), await new Promise((h) => setTimeout(h, 50));
        }
      } catch (d) {
        console.error("Initialize Chat Error:", d), L.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", {
          duration: Number.POSITIVE_INFINITY,
          action: {
            label: "\u524D\u5F80\u914D\u7F6E",
            onClick: () => l({
              to: "/config/llm"
            })
          }
        });
      } finally {
        r.current = false;
      }
    }, [
      t,
      s
    ]), x = g.useCallback(async (p, d) => {
      if (!(r.current || !s || !t)) try {
        r.current = true, t.addLLMResponseAsContextItem({
          role: "user",
          content: p
        }, {});
        const { makeChatModeLLMMessagesFromContextStateForCharacterId: i } = await ce(async () => {
          const { makeChatModeLLMMessagesFromContextStateForCharacterId: h } = await import("./silly-tavern-engine-D0R6Sr8P.js").then((N) => N.T);
          return {
            makeChatModeLLMMessagesFromContextStateForCharacterId: h
          };
        }, __vite__mapDeps([22,23,4,3,5,6,9,10,11,12,13,14,15,1,2,16,17,18,19,20,21,0,7,8])), n = i(t.state, {
          characterId: s.id
        }).map((h) => ({
          id: F(),
          role: h.role,
          content: h.content,
          name: h.name
        })), m = {
          id: F(),
          type: "character_message",
          orderRef: 0,
          timestamp: Date.now(),
          data: {
            characterId: s.id,
            content: "",
            name: s.name
          }
        };
        t.setProcessingItem(m);
        let u = "";
        await a.callLLMStream(n, (h, N) => {
          u = N, d == null ? void 0 : d(h);
          const j = t.getProcessingItem();
          j && (j.data.content = u);
        }), m.data.content = u, t.completeProcessingItem();
      } catch (i) {
        console.error("ChatLoop Error:", i), L.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", {
          duration: Number.POSITIVE_INFINITY,
          action: {
            label: "\u524D\u5F80\u914D\u7F6E",
            onClick: () => l({
              to: "/config/llm"
            })
          }
        });
      } finally {
        r.current = false;
      }
    }, [
      t,
      s,
      a
    ]);
    return {
      initializeChat: c,
      sendUserMessage: x
    };
  }
  let Cn, kn, In, O;
  Cn = (s) => {
    var _a2;
    const [t, a] = g.useState(""), r = g.useRef(null), [l, c] = g.useState(false), [x, p] = g.useState(""), [d, i] = g.useState(false), { data: o = [] } = xe((f) => f.from({
      s: Ke
    })), { data: n = [] } = xe((f) => f.from({
      c: Ye
    })), m = o.find((f) => f.id === s.sessionId), u = n.find((f) => f.id === (m == null ? void 0 : m.characterId));
    g.useEffect(() => {
      let f = false;
      return i(false), (async () => {
        if (m) try {
          const b = await xs.createSessionDB(m.id).getContextItems();
          if (f) return;
          const v = {
            historyItems: b,
            processingItem: void 0
          }, C = new Ne(v);
          se.contextManager = C, Es(m.id), i(true);
        } catch {
          if (!f) {
            const S = new Ne({
              historyItems: [],
              processingItem: void 0
            });
            se.contextManager = S, i(true);
          }
        }
      })(), () => {
        f = true;
      };
    }, [
      m
    ]), g.useEffect(() => () => {
      s.sessionId && Es(s.sessionId);
    }, [
      s.sessionId
    ]);
    const { sendUserMessage: h, initializeChat: N } = Sn(u, se.contextManager);
    if (g.useEffect(() => {
      var _a3;
      d && ((_a3 = se.contextManager) == null ? void 0 : _a3.getHistoryCount()) === 0 && u && m && (async () => {
        if (await N((y) => {
          p((S) => S + y);
        }), se.contextManager) {
          const y = se.contextManager.getHistoryItems();
          y.length > 0 && await se.saveNewContextItemsToDB(m.id, y);
        }
      })();
    }, [
      d,
      N,
      u,
      m
    ]), g.useEffect(() => {
      r.current && (r.current.scrollTop = r.current.scrollHeight);
    }), !(m && u)) return e.jsx("div", {
      className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
      children: e.jsx("p", {
        children: "\u4F1A\u8BDD\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664"
      })
    });
    const j = async () => {
      if (!(!t.trim() || l)) {
        c(true), p("");
        try {
          if (await h(t, (f) => {
            p((y) => y + f);
          }), se.contextManager && m) {
            const y = se.contextManager.getHistoryItems().filter((S) => !S.processing);
            y.length > 0 && await se.saveNewContextItemsToDB(m.id, y);
          }
        } catch (f) {
          console.error("Send message error:", f);
        } finally {
          c(false), p("");
        }
        a("");
      }
    };
    return e.jsx("div", {
      className: "flex flex-row h-full overflow-hidden bg-background",
      children: e.jsxs("div", {
        className: "flex flex-col grow min-w-0 h-full relative",
        children: [
          e.jsxs("div", {
            className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20",
                    children: e.jsx(Z, {
                      className: "w-5 h-5 text-primary"
                    })
                  }),
                  e.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      e.jsx("span", {
                        className: "font-bold text-sm leading-tight",
                        children: u.name
                      }),
                      e.jsx("span", {
                        className: "text-[10px] text-muted-foreground",
                        children: u.nickname || "NPC"
                      })
                    ]
                  })
                ]
              }),
              e.jsx("div", {
                className: "flex items-center gap-2",
                children: e.jsx(R, {
                  variant: "secondary",
                  className: "text-[9px] h-5 px-1.5 font-bold uppercase",
                  children: "CHAT MODE"
                })
              })
            ]
          }),
          e.jsx("div", {
            className: "flex grow overflow-y-auto p-4 md:p-8 space-y-8",
            ref: r,
            children: e.jsxs("div", {
              className: "max-w-4xl mx-auto w-full space-y-8",
              children: [
                (() => {
                  var _a3, _b;
                  const f = ((_a3 = se.contextManager) == null ? void 0 : _a3.getVisibleHistoryItems()) || [], y = (_b = se.contextManager) == null ? void 0 : _b.getProcessingItem(), S = [
                    ...f
                  ];
                  return y && !f.some((b) => b.id === y.id) && S.push(y), S.map((b, v) => e.jsx(kn, {
                    item: b,
                    character: u,
                    isProcessing: b.processing || void 0,
                    streamingText: b.processing ? x : void 0
                  }, `[${v}]${b.id}`));
                })(),
                l && !((_a2 = se.contextManager) == null ? void 0 : _a2.getProcessingItem()) && e.jsxs("div", {
                  className: "flex gap-4 animate-pulse",
                  children: [
                    e.jsx("div", {
                      className: "w-10 h-10 rounded-full bg-muted shrink-0"
                    }),
                    e.jsxs("div", {
                      className: "space-y-3 grow pt-2",
                      children: [
                        e.jsx("div", {
                          className: "h-4 bg-muted rounded w-1/4"
                        }),
                        e.jsx("div", {
                          className: "h-24 bg-muted rounded w-full"
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          }),
          e.jsxs("div", {
            className: "p-4 md:p-6 border-t shrink-0 bg-background/50 backdrop-blur-sm",
            children: [
              e.jsxs("div", {
                className: "max-w-4xl mx-auto relative group",
                children: [
                  e.jsx("div", {
                    className: "absolute -inset-0.5 bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"
                  }),
                  e.jsxs("div", {
                    className: "relative",
                    children: [
                      e.jsx(G, {
                        value: t,
                        onChange: (f) => a(f.target.value),
                        placeholder: `\u5411 ${u.name} \u53D1\u9001\u6D88\u606F...`,
                        className: "min-h-24 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/20 focus-visible:ring-primary/30 bg-background",
                        onKeyDown: (f) => {
                          f.key === "Enter" && !f.shiftKey && (f.preventDefault(), j());
                        }
                      }),
                      e.jsx(w, {
                        size: "icon",
                        className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform",
                        disabled: !t.trim() || l,
                        onClick: j,
                        type: "button",
                        children: e.jsx(Te, {
                          className: "w-5 h-5"
                        })
                      })
                    ]
                  })
                ]
              }),
              e.jsx("p", {
                className: "text-[10px] text-center text-muted-foreground mt-3 font-medium uppercase tracking-tighter opacity-50",
                children: "Shift + Enter to line break \u2022 Enter to send"
              })
            ]
          })
        ]
      })
    });
  };
  kn = (s) => {
    switch (s.item.type) {
      case "character_intro":
        return e.jsx(wt, {
          item: s.item,
          character: s.character
        });
      case "character_message":
        return s.isProcessing ? e.jsx(In, {
          item: s.item,
          character: s.character,
          streamingText: s.streamingText || ""
        }) : e.jsx(ls, {
          item: s.item,
          character: s.character
        });
      case "character_message_group":
        return e.jsx("div", {
          className: "space-y-4",
          children: (s.item.data.list || []).map((t, a) => e.jsx(ls, {
            item: {
              ...s.item,
              type: "character_message",
              data: {
                ...s.item.data,
                content: t.content,
                timestamp: t.timestamp
              }
            },
            character: s.character
          }, t.id || a))
        });
      case "participant_message":
        return e.jsx(Ss, {
          item: s.item
        });
      case "participant_message_group":
        return e.jsx("div", {
          className: "space-y-4",
          children: (s.item.data.list || []).map((t, a) => e.jsx(Ss, {
            item: {
              ...s.item,
              type: "participant_message",
              data: {
                ...s.item.data,
                content: t.content,
                timestamp: t.timestamp
              }
            }
          }, t.id || a))
        });
      case "system_notification":
        return e.jsx("div", {
          className: "flex justify-center my-4",
          children: e.jsx(R, {
            variant: "outline",
            className: "px-3 py-1 text-[10px] text-muted-foreground bg-muted/20",
            children: s.item.data.content
          })
        });
      case "starting_system_message":
      case "in_context_system_message":
      case "placeholder":
        return null;
      default:
        return console.warn("Unknown context item type:", s.item.type), null;
    }
  };
  In = (s) => s.item.type === "character_message" ? e.jsxs("div", {
    className: "flex gap-4 animate-pulse",
    children: [
      e.jsx("div", {
        className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20",
        children: s.character.imageBase64 || s.character.avatar ? e.jsx("img", {
          src: s.character.imageBase64 || s.character.avatar,
          alt: s.character.name,
          className: "w-full h-full object-cover rounded-2xl"
        }) : e.jsx(Z, {
          className: "w-6 h-6 text-primary"
        })
      }),
      e.jsxs("div", {
        className: "space-y-1.5 grow pt-1",
        children: [
          e.jsx("div", {
            className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2",
            children: s.character.name
          }),
          e.jsx("div", {
            className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium",
            children: s.streamingText || s.item.data.content
          })
        ]
      })
    ]
  }) : null;
  Lr = Object.freeze(Object.defineProperty({
    __proto__: null,
    SessionMainForChat: Cn
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  O = Q({
    currentSession: null,
    contextManager: null,
    sessionManager: null,
    variablesManager: null,
    loadSession(s, t) {
      this.currentSession = s, s.modeState.currentUIState = "idle", this.sessionManager = new wa(s);
      const a = Q(t || {
        historyItems: [],
        processingItem: void 0
      });
      this.contextManager = new Ne(a), s.modeState && s.modeConfig && (this.variablesManager = new Sa(s.modeState.variableStates, s.modeConfig.variables || {}));
    },
    applyVariableOperation(s) {
      if (this.variablesManager) try {
        this.variablesManager.performOperation(s);
      } catch (t) {
        console.error("[Store] VarOp Failed", t);
      }
    },
    updateConditionState(s, t, a) {
      const r = this.currentSession;
      if (!r) return;
      const c = (s === "goal" ? r.modeState.goalStates : r.modeState.failureStates).find((x) => x.key === t);
      c && (c.isCompleted = a);
    },
    setPhase(s) {
      this.currentSession && (this.currentSession.modeState.currentPhase = s);
    },
    async saveNewContextItemsToDB(s, t) {
      const { SessionDB: a } = await ce(async () => {
        const { SessionDB: c } = await import("./silly-tavern-db-C6OCLe8X.js").then((x) => x.d);
        return {
          SessionDB: c
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])), r = new a(s);
      let l;
      try {
        l = le(t);
      } catch {
        l = JSON.parse(JSON.stringify(t));
      }
      await r.addContextItems(l);
    },
    async updateSessionInDB() {
      if (!this.currentSession) return;
      const { masterDb: s } = await ce(async () => {
        const { masterDb: a } = await import("./silly-tavern-db-C6OCLe8X.js").then((r) => r.e);
        return {
          masterDb: a
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])), t = le(this.currentSession.modeState);
      await s.sessions.update(this.currentSession.id, {
        modeState: t,
        updatedAt: Date.now()
      });
    }
  });
  function Dn() {
    const s = Ms((d) => d.config), t = g.useRef(false), a = K(), r = async (d, i, o, n, m = {}) => {
      const u = O.contextManager;
      if (!u) return {
        content: ""
      };
      const h = {
        id: F(),
        type: o,
        orderRef: 0,
        timestamp: Date.now(),
        data: {
          content: "",
          ...m
        }
      };
      u.setProcessingItem(h);
      let N = "";
      return await Ps(d, i, [], (j, f) => {
        n == null ? void 0 : n(j), N = f;
        const y = u.getProcessingItem();
        y && (y.data.content = f);
      }), u.completeProcessingItem(), {
        content: N
      };
    }, l = async (d, i) => {
      const o = O.sessionManager, n = O.contextManager;
      if (!(o && n)) return;
      const m = await o.executeCurrentStateLogic(n);
      if (console.log("[Loop] Action:", m), m.type === "WAIT_FOR_INPUT" || m.type === "STOP") {
        await O.updateSessionInDB(), t.current = false;
        return;
      }
      if (m.type === "STATE_CHANGE") {
        await O.updateSessionInDB(), setTimeout(() => x(d.id), 0);
        return;
      }
      if (m.type === "LLM_CALL") {
        if (m.callbackPhase) {
          const h = m.callbackPhase;
          o.setCurrentUIState(o.getRunningUIStateForPhase(h));
        }
        await O.updateSessionInDB();
        const u = await r(i, m.messages.map((h) => ({
          ...h,
          id: F()
        })), m.llmRequestType, void 0, m.dataExtra);
        await O.saveNewContextItemsToDB(d.id, n.getHistoryItems()), await c(m, u.content, d.id), await O.updateSessionInDB(), setTimeout(() => x(d.id), 0);
      }
    }, c = async (d, i, o) => {
      const n = O.sessionManager, m = O.contextManager;
      if (d.callbackPhase === "dm_eval_changes") {
        try {
          const u = i.indexOf("{"), h = i.lastIndexOf("}") + 1;
          if (u >= 0 && h > u) {
            const N = JSON.parse(i.slice(u, h)), j = N.analyze || "", f = [];
            if (N.operations) {
              const y = n.session.modeConfig.variables || {};
              for (const S of N.operations) {
                if (!y[S.key]) continue;
                let v;
                S.op === "delta" ? v = [
                  "delta",
                  S.key,
                  Number(S.value)
                ] : S.op === "setTo" ? v = [
                  "setTo",
                  S.key,
                  S.value
                ] : S.op === "setTrue" ? v = [
                  "setTrue",
                  S.key
                ] : S.op === "setFalse" ? v = [
                  "setFalse",
                  S.key
                ] : S.op === "add" ? v = [
                  "add",
                  S.key,
                  String(S.value)
                ] : S.op === "remove" && (v = [
                  "remove",
                  S.key,
                  String(S.value)
                ]), v && (O.applyVariableOperation(v), f.push(v));
              }
            }
            m.addHistoryItem({
              id: F(),
              type: "challenge_mode_dm_eval",
              idx: 0,
              orderRef: 0,
              timestamp: Date.now(),
              data: {
                analyze: j,
                operations: f
              },
              hidden: false
            }), await O.saveNewContextItemsToDB(o, m.getHistoryItems());
          }
        } catch (u) {
          console.error("Failed to parse DM evaluation", u), L.error("DM \u8BC4\u4F30\u6570\u636E\u89E3\u6790\u5931\u8D25\uFF0C\u5C06\u5FFD\u7565\u672C\u6B21\u53D8\u66F4");
        }
        n.enterNextState("dm_narrate_changes"), n.setCurrentUIState(n.getDoneUIStateForPhase("dm_eval_changes"));
      } else d.callbackPhase === "dm_intro" ? (n.setCurrentUIState(n.getDoneUIStateForPhase("dm_intro")), n.enterNextState("character_intro")) : d.callbackPhase === "character_intro" ? (n.setCurrentUIState(n.getDoneUIStateForPhase("character_intro")), n.enterNextState("player_input")) : d.callbackPhase === "dm_narrate_changes" ? (n.setCurrentUIState(n.getDoneUIStateForPhase("dm_narrate_changes")), n.enterNextState("failure_check")) : d.callbackPhase === "character_response" && (n.setCurrentUIState(n.getDoneUIStateForPhase("character_response")), n.session.modeState.shouldCheck !== false ? n.enterNextState("dm_eval_changes") : n.enterNextState("player_input"));
    }, x = async (d) => {
      const i = O.currentSession;
      if (!i || i.id !== d) return;
      const o = {
        ...s
      };
      try {
        t.current = true, await l(i, o);
      } catch (n) {
        console.error("ChallengeLoop Critical Error:", n), L.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", {
          duration: Number.POSITIVE_INFINITY,
          action: {
            label: "\u524D\u5F80\u914D\u7F6E",
            onClick: () => a({
              to: "/config/llm"
            })
          }
        }), t.current = false;
      }
    };
    return {
      nextStep: g.useCallback(async (d) => {
        if (t.current) return;
        const i = O.currentSession, o = O.contextManager, n = O.sessionManager;
        if (!(i && o && n)) {
          console.warn("Session or Managers not ready");
          return;
        }
        if (d) {
          if (n.getCurrentPhase() !== "player_input") {
            L.warning("\u5F53\u524D\u5E76\u975E\u73A9\u5BB6\u884C\u52A8\u56DE\u5408");
            return;
          }
          n.setCurrentUIState(n.getRunningUIStateForPhase("player_input")), o.addLLMResponseAsContextItem({
            role: "user",
            content: d
          }, {}), await O.saveNewContextItemsToDB(i.id, o.getHistoryItems()), n.setCurrentUIState(n.getDoneUIStateForPhase("player_input")), n.enterNextState("character_response"), n.setCurrentUIState(n.getReadyUIStateForPhase("character_response")), await O.updateSessionInDB();
        }
        await x(i.id);
      }, [
        s
      ])
    };
  }
  let _n, Tn, Ks, Xs, Mn, Ws, qs, B;
  _n = (s) => {
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p;
    const t = K(), [a, r] = g.useState(""), l = g.useRef(null), [c, x] = g.useState(false), [p, d] = g.useState(false), i = ue(O), { data: o = [] } = xe((I) => I.from({
      s: Ke
    })), { data: n = [] } = xe((I) => I.from({
      c: Ye
    })), m = o.find((I) => I.id === s.sessionId), u = n.find((I) => {
      var _a3;
      return I.id === ((_a3 = m == null ? void 0 : m.modeConfig) == null ? void 0 : _a3.characterId);
    });
    g.useEffect(() => {
      var _a3;
      let I = false;
      if (!m) return;
      if (((_a3 = O.currentSession) == null ? void 0 : _a3.id) === m.id && O.contextManager) {
        d(true);
        return;
      }
      return (async () => {
        try {
          const X = await xs.createSessionDB(m.id).getContextItems();
          if (I) return;
          m.modeConfig && !m.modeConfig.characterSnapshot && u && (m.modeConfig.characterSnapshot = {
            name: u.name,
            description: u.description,
            avatar: u.avatar
          }), O.loadSession(m, {
            historyItems: X,
            processingItem: void 0
          }), d(true);
        } catch (ae) {
          console.error("Load session error", ae);
        }
      })(), () => {
        I = true;
      };
    }, [
      m == null ? void 0 : m.id,
      m
    ]);
    const { nextStep: h } = Dn();
    g.useEffect(() => {
      l.current && (l.current.scrollTop = l.current.scrollHeight);
    });
    const N = async () => {
      if (c) return;
      const I = O.sessionManager, P = O.contextManager;
      if (I && P) {
        x(true);
        try {
          if (P.getHistoryItems().some((Pe) => Pe.type === "challenge_mode_ending")) {
            I.setShouldCheck(false), I.enterNextState("player_input"), I.setCurrentUIState(I.getReadyUIStateForPhase("player_input")), await O.updateSessionInDB();
            return;
          }
          const X = I.getActualCurrentPhase(P);
          I.enterNextState(X), I.setCurrentUIState(I.getReadyUIStateForPhase(X)), await O.updateSessionInDB(), await h();
        } finally {
          x(false);
        }
      }
    };
    if (!(m && u && p)) return e.jsxs("div", {
      className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
      children: [
        e.jsx("div", {
          className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center",
          children: e.jsx(de, {
            className: "w-6 h-6 opacity-20"
          })
        }),
        e.jsx("p", {
          className: "text-xs font-medium tracking-widest uppercase opacity-50",
          children: "\u6B63\u5728\u6784\u5EFA\u53D9\u4E8B\u73AF\u5883..."
        })
      ]
    });
    const j = async () => {
      if (!(!a.trim() || c)) {
        x(true);
        try {
          await h(a);
        } finally {
          x(false), r("");
        }
      }
    }, f = O.sessionManager && O.contextManager ? O.sessionManager.getActualCurrentUIState(O.contextManager) : ((_b = (_a2 = i.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b.currentUIState) || "idle", y = f === "ended", S = hs[f] || hs.idle, b = c || !(S.inputEnabled || y), v = async () => {
      O.sessionManager && (O.sessionManager.setShouldCheck(false), O.sessionManager.enterNextState("player_input"), O.sessionManager.setCurrentUIState(O.sessionManager.getReadyUIStateForPhase("player_input")), await O.updateSessionInDB());
    }, C = () => {
      t({
        to: "/plaza/challenges"
      });
    }, $ = () => {
      console.log("[Challenge][Memory Session]", O.currentSession);
    }, V = async () => {
      if (!(m == null ? void 0 : m.id)) return;
      const I = await ye.sessions.getTable().get(m.id);
      console.log("[Challenge][DB Session]", I);
    };
    return e.jsxs("div", {
      className: "flex flex-row h-full overflow-hidden bg-background",
      children: [
        e.jsxs("div", {
          className: "flex flex-col grow min-w-0 h-full relative",
          children: [
            e.jsxs("div", {
              className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm",
                      children: e.jsx(Z, {
                        className: "w-5 h-5 text-primary"
                      })
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className: "font-bold text-sm tracking-tight",
                              children: u.name
                            }),
                            e.jsx(R, {
                              variant: "outline",
                              className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-primary/5 text-primary border-primary/10",
                              children: "Lv.1"
                            })
                          ]
                        }),
                        e.jsx("span", {
                          className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide",
                          children: "\u53D9\u4E8B\u534F\u8BAE\u8FDE\u63A5\u5DF2\u5EFA\u7ACB"
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsxs(R, {
                      variant: "secondary",
                      className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50",
                      children: [
                        e.jsx("span", {
                          className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                        }),
                        "CHALLENGE"
                      ]
                    }),
                    e.jsx(w, {
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px]",
                      onClick: $,
                      children: "LOG MEM"
                    }),
                    e.jsx(w, {
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px]",
                      onClick: V,
                      children: "LOG DB"
                    })
                  ]
                })
              ]
            }),
            e.jsx("div", {
              className: "flex grow overflow-y-auto",
              ref: l,
              children: e.jsx("div", {
                className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-10",
                children: (() => {
                  var _a3, _b2, _c2, _d2, _e3;
                  const I = (((_a3 = i.contextManager) == null ? void 0 : _a3.state.historyItems) || []).filter((X) => !X.hidden), P = (_b2 = i.contextManager) == null ? void 0 : _b2.state.processingItem;
                  if (f === "idle") {
                    const X = I.length === 0 ? "\u5F00\u59CB" : "\u7EE7\u7EED";
                    return e.jsxs("div", {
                      className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                      children: [
                        e.jsx("div", {
                          className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500",
                          children: e.jsx(ke, {
                            className: "w-10 h-10 text-amber-500 drop-shadow-sm"
                          })
                        }),
                        e.jsx("h2", {
                          className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                          children: ((_d2 = (_c2 = m == null ? void 0 : m.modeConfig) == null ? void 0 : _c2.characterSnapshot) == null ? void 0 : _d2.name) || "\u6311\u6218\u6A21\u5F0F"
                        }),
                        e.jsx("p", {
                          className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm",
                          children: ((_e3 = m == null ? void 0 : m.modeConfig) == null ? void 0 : _e3.userGuidance) || "\u547D\u8FD0\u7684\u9F7F\u8F6E\u5DF2\u7ECF\u5F00\u59CB\u8F6C\u52A8\uFF0C\u4F60\u51C6\u5907\u597D\u63A5\u53D7\u6311\u6218\u4E86\u5417\uFF1F"
                        }),
                        e.jsxs(w, {
                          size: "lg",
                          className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-primary/25 shadow-primary/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90",
                          onClick: N,
                          disabled: c,
                          children: [
                            c ? e.jsx(de, {
                              className: "w-5 h-5 animate-spin mr-3"
                            }) : e.jsx(me, {
                              className: "w-5 h-5 mr-3"
                            }),
                            X
                          ]
                        }),
                        e.jsxs("div", {
                          className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest",
                          children: [
                            e.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                e.jsx(Ge, {
                                  className: "w-3 h-3"
                                }),
                                " \u81EA\u52A8\u5B58\u6863"
                              ]
                            }),
                            e.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                e.jsx(de, {
                                  className: "w-3 h-3"
                                }),
                                " \u5B9E\u65F6\u53D8\u91CF"
                              ]
                            })
                          ]
                        })
                      ]
                    });
                  }
                  const ae = [
                    ...I
                  ];
                  return P && !P.hidden && !I.some((X) => X.id === P.id) && ae.push(P), ae.map((X, Pe) => e.jsx(Tn, {
                    item: X,
                    character: u
                  }, `[${Pe}]${X.id}`));
                })()
              })
            }),
            y ? e.jsx("div", {
              className: "p-6 md:p-8 shrink-0 bg-background border-t",
              children: e.jsxs("div", {
                className: "max-w-xl mx-auto flex flex-col items-center gap-6 animate-in slide-in-from-bottom-4 fade-in duration-700",
                children: [
                  e.jsx("div", {
                    className: "text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60",
                    children: "\u6545\u4E8B\u5DF2\u5B8C\u7ED3"
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-4 w-full",
                    children: [
                      e.jsxs(w, {
                        variant: "outline",
                        className: "flex-1 h-12 rounded-xl border-dashed border-2 hover:border-primary/50 hover:bg-primary/5 gap-2",
                        onClick: C,
                        children: [
                          e.jsx(_s, {
                            className: "w-4 h-4"
                          }),
                          e.jsx("span", {
                            className: "font-bold tracking-wider",
                            children: "\u9000\u51FA\u6311\u6218"
                          })
                        ]
                      }),
                      e.jsxs(w, {
                        className: "flex-2 h-12 rounded-xl shadow-lg shadow-primary/10 gap-2 text-base",
                        onClick: v,
                        children: [
                          e.jsx(Ts, {
                            className: "w-4 h-4 fill-current"
                          }),
                          e.jsx("span", {
                            className: "font-black tracking-[0.15em] uppercase",
                            children: "\u7EE7\u7EED\u81EA\u7531\u5BF9\u8BDD"
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            }) : e.jsxs("div", {
              className: "p-4 md:p-6 shrink-0 bg-background",
              children: [
                e.jsxs("div", {
                  className: "max-w-3xl mx-auto relative group",
                  children: [
                    e.jsx(G, {
                      value: a,
                      onChange: (I) => r(I.target.value),
                      placeholder: b ? S.placeholder : hs.player_input_ready.placeholder,
                      disabled: b,
                      className: A("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-primary/20 focus-visible:bg-background transition-all", b && "opacity-50 cursor-not-allowed"),
                      onKeyDown: (I) => {
                        I.key === "Enter" && !I.shiftKey && (I.preventDefault(), j());
                      }
                    }),
                    e.jsx(w, {
                      size: "icon",
                      type: "button",
                      className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-primary/20 transition-all",
                      disabled: !a.trim() || b,
                      onClick: j,
                      children: c ? e.jsx(de, {
                        className: "w-4 h-4 animate-spin"
                      }) : e.jsx(Te, {
                        className: "w-4 h-4"
                      })
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40",
                  children: [
                    e.jsx("div", {
                      className: "text-[9px] font-bold tracking-widest uppercase",
                      children: "INPUT MANIFESTO"
                    }),
                    e.jsx("div", {
                      className: "text-[9px] font-medium",
                      children: b ? "\u8F93\u5165\u5DF2\u9501\u5B9A" : "Shift + Enter \u6362\u884C"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "w-[320px] h-full overflow-y-auto bg-muted/10 border-l p-8 space-y-10 shrink-0 hidden lg:block scrollbar-none",
          children: [
            e.jsxs("div", {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                      children: [
                        e.jsx(de, {
                          className: "w-3.5 h-3.5 text-primary"
                        }),
                        "\u4E16\u754C\u53D8\u91CF"
                      ]
                    }),
                    e.jsx(R, {
                      variant: "outline",
                      className: "text-[9px] px-1.5 opacity-50",
                      children: "SYNCED"
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-1 gap-3",
                  children: [
                    Object.entries(((_d = (_c = i.currentSession) == null ? void 0 : _c.modeState) == null ? void 0 : _d.variableStates) || {}).map(([I, P]) => e.jsxs("div", {
                      className: "bg-background/40 p-4 rounded-xl border border-muted/30 hover:border-primary/20 transition-colors group",
                      children: [
                        e.jsxs("div", {
                          className: "flex justify-between items-start mb-1",
                          children: [
                            e.jsx("span", {
                              className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider",
                              children: I
                            }),
                            e.jsx("div", {
                              className: "w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors"
                            })
                          ]
                        }),
                        e.jsx("div", {
                          className: "text-xl font-mono font-bold tracking-tight text-foreground/90",
                          children: typeof (P == null ? void 0 : P.value) == "number" ? P.value.toLocaleString() : String(P == null ? void 0 : P.value)
                        })
                      ]
                    }, I)),
                    Object.keys(((_f = (_e2 = i.currentSession) == null ? void 0 : _e2.modeState) == null ? void 0 : _f.variableStates) || {}).length === 0 && e.jsx("div", {
                      className: "py-8 text-center border border-dashed rounded-xl opacity-30",
                      children: e.jsx("p", {
                        className: "text-[10px] font-bold uppercase tracking-widest",
                        children: "\u65E0\u52A8\u6001\u53D8\u91CF"
                      })
                    })
                  ]
                })
              ]
            }),
            e.jsxs("div", {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                  children: [
                    e.jsx(ut, {
                      className: "w-3.5 h-3.5 text-primary"
                    }),
                    "\u751F\u5B58\u76EE\u6807"
                  ]
                }),
                e.jsxs("div", {
                  className: "space-y-2.5",
                  children: [
                    (_i = (_h = (_g = i.currentSession) == null ? void 0 : _g.modeConfig) == null ? void 0 : _h.goals) == null ? void 0 : _i.map((I) => {
                      var _a3, _b2, _c2;
                      const P = (_c2 = (_b2 = (_a3 = i.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.goalStates) == null ? void 0 : _c2.find((ae) => ae.key === I.key);
                      return e.jsxs("div", {
                        className: A("p-3.5 rounded-xl border flex items-start gap-3 transition-all duration-300", (P == null ? void 0 : P.isCompleted) ? "bg-primary/3 border-primary/20 shadow-sm" : "bg-background/40 border-muted/50 grayscale-[0.8] opacity-60"),
                        children: [
                          e.jsx("div", {
                            className: A("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5 shadow-inner", (P == null ? void 0 : P.isCompleted) ? "bg-primary text-primary-foreground" : "bg-muted border border-muted-foreground/10"),
                            children: (P == null ? void 0 : P.isCompleted) ? e.jsx(Ge, {
                              className: "w-3 h-3"
                            }) : e.jsx("div", {
                              className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20"
                            })
                          }),
                          e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              e.jsx("div", {
                                className: A("text-[13px] leading-tight font-bold tracking-tight", (P == null ? void 0 : P.isCompleted) ? "text-primary" : "text-foreground/70"),
                                children: I.description
                              }),
                              (P == null ? void 0 : P.isCompleted) && e.jsx("span", {
                                className: "text-[9px] font-bold uppercase tracking-wider opacity-60",
                                children: "Objective Achieved"
                              })
                            ]
                          })
                        ]
                      }, I.key);
                    }),
                    (!((_k = (_j = i.currentSession) == null ? void 0 : _j.modeConfig) == null ? void 0 : _k.goals) || i.currentSession.modeConfig.goals.length === 0) && e.jsx("div", {
                      className: "py-8 text-center border border-dashed rounded-xl opacity-30",
                      children: e.jsx("p", {
                        className: "text-[10px] font-bold uppercase tracking-widest",
                        children: "\u65E0\u8BBE\u5B9A\u76EE\u6807"
                      })
                    })
                  ]
                })
              ]
            }),
            e.jsxs("div", {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                  children: [
                    e.jsx(ke, {
                      className: "w-3.5 h-3.5 text-destructive"
                    }),
                    "\u6B7B\u4EA1\u7981\u5FCC"
                  ]
                }),
                e.jsxs("div", {
                  className: "space-y-2.5",
                  children: [
                    (_n2 = (_m = (_l = i.currentSession) == null ? void 0 : _l.modeConfig) == null ? void 0 : _m.failureChecks) == null ? void 0 : _n2.map((I) => {
                      var _a3, _b2, _c2;
                      const P = (_c2 = (_b2 = (_a3 = i.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.failureStates) == null ? void 0 : _c2.find((ae) => ae.key === I.key);
                      return e.jsxs("div", {
                        className: A("p-3.5 rounded-xl border flex items-start gap-3 transition-all", (P == null ? void 0 : P.isCompleted) ? "bg-destructive/5 border-destructive/20" : "bg-background/40 border-muted/50 opacity-60"),
                        children: [
                          e.jsx("div", {
                            className: A("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5", (P == null ? void 0 : P.isCompleted) ? "bg-destructive text-destructive-foreground" : "bg-muted border border-muted-foreground/10"),
                            children: (P == null ? void 0 : P.isCompleted) ? e.jsx(dt, {
                              className: "w-3 h-3"
                            }) : e.jsx("div", {
                              className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20"
                            })
                          }),
                          e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              e.jsx("div", {
                                className: A("text-[13px] leading-tight font-bold tracking-tight", (P == null ? void 0 : P.isCompleted) ? "text-destructive" : "text-foreground/70"),
                                children: I.description
                              }),
                              (P == null ? void 0 : P.isCompleted) && e.jsx("span", {
                                className: "text-[9px] font-bold uppercase tracking-wider opacity-60",
                                children: "Critical Failure Triggered"
                              })
                            ]
                          })
                        ]
                      }, I.key);
                    }),
                    (!((_p = (_o = i.currentSession) == null ? void 0 : _o.modeConfig) == null ? void 0 : _p.failureChecks) || i.currentSession.modeConfig.failureChecks.length === 0) && e.jsx("div", {
                      className: "py-8 text-center border border-dashed rounded-xl opacity-30",
                      children: e.jsx("p", {
                        className: "text-[10px] font-bold uppercase tracking-widest",
                        children: "\u65E0\u5931\u8D25\u5224\u5B9A"
                      })
                    })
                  ]
                })
              ]
            }),
            e.jsxs("div", {
              className: "pt-10 opacity-30",
              children: [
                e.jsx("div", {
                  className: "h-px bg-linear-to-r from-transparent via-muted-foreground/50 to-transparent"
                }),
                e.jsx("p", {
                  className: "text-[9px] text-center mt-4 font-bold tracking-[0.3em] uppercase",
                  children: "Narrative Engine v1.0.4"
                })
              ]
            })
          ]
        })
      ]
    });
  };
  Tn = (s) => {
    const { item: t, character: a } = s, l = (() => {
      const c = t.data;
      return c ? Array.isArray(c.operations) ? e.jsx(Xs, {
        item: {
          ...t,
          type: "challenge_mode_dm_eval"
        }
      }) : Array.isArray(c.results) && c.results.every((x) => x && (x.type === "goal" || x.type === "failure")) ? e.jsx(Ws, {
        item: {
          ...t,
          type: "challenge_mode_checking"
        }
      }) : c.type && (c.type === "success" || c.type === "failure") && typeof c.description == "string" ? e.jsx(qs, {
        item: {
          ...t,
          type: "challenge_mode_ending"
        }
      }) : null : null;
    })();
    if (l) return l;
    switch (t.type) {
      case "dm_intro":
        return e.jsx(Ks, {
          content: t.data.content,
          title: "Challenge Intro"
        });
      case "challenge_mode_dm_eval":
        return e.jsx(Xs, {
          item: t
        });
      case "challenge_mode_checking":
        return e.jsx(Ws, {
          item: t
        });
      case "challenge_mode_ending":
        return e.jsx(qs, {
          item: t
        });
      case "character_intro":
        return e.jsx(wt, {
          item: t,
          character: a
        });
      case "character_message":
        return e.jsx(ls, {
          item: t,
          character: a
        });
      case "character_message_group":
        return e.jsx("div", {
          className: "space-y-4",
          children: (t.data.list || []).map((c, x) => e.jsx(ls, {
            item: {
              ...t,
              data: {
                ...t.data,
                content: c.content
              }
            },
            character: a
          }, c.id || x))
        });
      case "participant_message":
        return t.data.isDM || t.data.name === "DM" || !(t.data.isUser || t.data.isCharacter || t.data.isEnv) ? e.jsx(Ks, {
          content: t.data.content
        }) : e.jsx(Ss, {
          item: t
        });
      case "system_notification":
        return e.jsx("div", {
          className: "flex justify-center my-6",
          children: e.jsxs("div", {
            className: "flex items-center gap-3 px-4 py-1.5 rounded-full bg-muted/30 border border-muted/50 text-muted-foreground shadow-sm",
            children: [
              e.jsx("span", {
                className: "w-1 h-1 rounded-full bg-muted-foreground/40"
              }),
              e.jsx("span", {
                className: "text-[10px] font-bold tracking-widest uppercase",
                children: t.data.content
              }),
              e.jsx("span", {
                className: "w-1 h-1 rounded-full bg-muted-foreground/40"
              })
            ]
          })
        });
      case "placeholder":
        return null;
      default:
        return null;
    }
  };
  Ks = ({ content: s, title: t = "Narrative Master" }) => e.jsxs("div", {
    className: "flex gap-6 group animate-in fade-in slide-in-from-left-2 duration-500",
    children: [
      e.jsxs("div", {
        className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden",
        children: [
          e.jsx("div", {
            className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
          }),
          e.jsx(Z, {
            className: "w-5 h-5 text-amber-600 relative z-10"
          })
        ]
      }),
      e.jsxs("div", {
        className: "space-y-2 grow pt-1",
        children: [
          e.jsxs("div", {
            className: "text-[10px] font-black tracking-[0.2em] text-amber-600/60 flex items-center gap-2 uppercase",
            children: [
              e.jsx(me, {
                className: "w-3 h-3"
              }),
              t
            ]
          }),
          e.jsx("div", {
            className: "text-[15px] leading-relaxed italic text-foreground/80 whitespace-pre-wrap font-serif",
            children: s
          })
        ]
      })
    ]
  });
  Xs = ({ item: s }) => e.jsx("div", {
    className: "max-w-2xl mx-auto w-full group animate-in fade-in zoom-in-95 duration-500",
    children: e.jsxs("div", {
      className: "bg-muted/10 border border-muted/40 rounded-2xl overflow-hidden shadow-sm",
      children: [
        e.jsxs("div", {
          className: "px-4 py-2 border-b border-muted/40 bg-muted/20 flex items-center justify-between",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground/60",
              children: [
                e.jsx(de, {
                  className: "w-3 h-3"
                }),
                "\u4E16\u754C\u7EBF\u6F14\u53D8\u8BC4\u4F30"
              ]
            }),
            e.jsx(ds, {
              className: "w-3 h-3 text-muted-foreground/30"
            })
          ]
        }),
        e.jsxs("div", {
          className: "p-5 space-y-4",
          children: [
            s.data.analyze && e.jsx("div", {
              className: "text-[13px] text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1",
              children: s.data.analyze
            }),
            e.jsx("div", {
              className: "flex flex-wrap gap-2",
              children: s.data.operations.map((t, a) => e.jsx(Mn, {
                operation: t
              }, a))
            })
          ]
        })
      ]
    })
  });
  Mn = ({ operation: s }) => {
    const [t, a, r] = s;
    let l = "bg-primary/10 text-primary border-primary/20", c = "";
    if (t === "delta") {
      const x = r;
      l = x > 0 ? "bg-green-500/10 text-green-600 border-green-500/20" : "bg-red-500/10 text-red-600 border-red-500/20", c = `${a} ${x > 0 ? "+" : ""}${x}`;
    } else t === "setTrue" || t === "setFalse" ? c = `${a} \u2192 ${t === "setTrue" ? "YES" : "NO"}` : c = `${a} = ${r}`;
    return e.jsx(R, {
      variant: "outline",
      className: A("text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg border", l),
      children: c
    });
  };
  Ws = ({ item: s }) => e.jsx("div", {
    className: "flex justify-center opacity-40 hover:opacity-100 transition-opacity",
    children: e.jsx("div", {
      className: "flex gap-4",
      children: s.data.results.map((t, a) => t.result && e.jsxs("div", {
        className: "flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground",
        children: [
          e.jsx(Ge, {
            className: "w-3 h-3 text-primary"
          }),
          t.key,
          " \u66F4\u65B0"
        ]
      }, a))
    })
  });
  qs = ({ item: s }) => {
    const t = s.data.type === "success";
    return e.jsx("div", {
      className: "py-12 animate-in fade-in zoom-in duration-1000",
      children: e.jsxs("div", {
        className: A("max-w-lg mx-auto p-12 rounded-[2.5rem] border-4 text-center space-y-6 shadow-2xl relative overflow-hidden", t ? "bg-primary/5 border-primary/30 shadow-primary/10" : "bg-destructive/5 border-destructive/30 shadow-destructive/10"),
        children: [
          e.jsx("div", {
            className: A("absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20", t ? "bg-primary" : "bg-destructive")
          }),
          e.jsx("div", {
            className: A("absolute -bottom-12 -left-12 w-48 h-48 rounded-full blur-3xl opacity-20", t ? "bg-primary" : "bg-destructive")
          }),
          e.jsx("div", {
            className: "inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-background border shadow-xl relative z-10 mb-2",
            children: t ? e.jsx(ke, {
              className: "w-12 h-12 text-primary animate-bounce-short"
            }) : e.jsx(at, {
              className: "w-12 h-12 text-destructive animate-pulse"
            })
          }),
          e.jsxs("div", {
            className: "space-y-2 relative z-10",
            children: [
              e.jsx("h2", {
                className: A("text-3xl font-black uppercase tracking-[0.3em]", t ? "text-primary" : "text-destructive"),
                children: t ? "\u6311\u6218\u6210\u529F" : "\u6311\u6218\u5931\u8D25"
              }),
              e.jsx("div", {
                className: "h-1 w-12 bg-muted-foreground/20 mx-auto rounded-full"
              })
            ]
          }),
          e.jsx("p", {
            className: "text-lg font-medium text-foreground/80 leading-relaxed font-serif relative z-10",
            children: s.data.description
          }),
          !t && s.data.failureReason && e.jsxs("div", {
            className: "pt-4 px-6 relative z-10",
            children: [
              e.jsx("div", {
                className: "text-[10px] font-black uppercase tracking-[0.2em] text-destructive/60 mb-2",
                children: "\u5931\u8D25\u6839\u6E90"
              }),
              e.jsxs("p", {
                className: "text-xs font-bold text-destructive/80 italic",
                children: [
                  "\u300C",
                  s.data.failureReason,
                  "\u300D"
                ]
              })
            ]
          }),
          e.jsx("div", {
            className: "pt-8 relative z-10",
            children: e.jsx(R, {
              variant: "outline",
              className: "text-[10px] font-black tracking-[0.4em] uppercase py-2 px-6 rounded-2xl bg-background/50 backdrop-blur-sm border-muted/50",
              children: "NARRATIVE ENDED"
            })
          })
        ]
      })
    });
  };
  Ar = Object.freeze(Object.defineProperty({
    __proto__: null,
    SessionMainForChallenge: _n
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  B = Q({
    currentSession: null,
    contextManager: null,
    sessionManager: null,
    loadSession(s, t) {
      this.currentSession = s, this.currentSession.modeState.currentUIState = "idle", this.sessionManager = xt(new Ca(this.currentSession));
      const a = Q(t || {
        historyItems: [],
        processingItem: void 0
      });
      this.contextManager = new Ne(a);
    },
    setCurrentTurn(s) {
      this.sessionManager && this.sessionManager.setCurrentTurn(s);
    },
    incrementRound() {
      this.sessionManager && this.sessionManager.incrementRound();
    },
    setPhase(s) {
      this.currentSession && (this.currentSession.modeState.currentPhase = s);
    },
    updateCharacterAttributes(s, t) {
      if (!this.currentSession) return;
      const a = this.currentSession.modeConfig.playerCharacterSnapshots.find((r) => r.id === s);
      a && Object.assign(a.attributes, t);
    },
    toggleCharacterControl(s) {
      if (!this.currentSession) return;
      const t = this.currentSession.modeConfig.playerCharacterSnapshots.find((a) => a.id === s);
      t && (t.isHumanControlled = !t.isHumanControlled, this.currentSession.updatedAt = Date.now());
    },
    updateCharacterHP(s, t) {
      if (!this.currentSession) return;
      const a = this.currentSession.modeConfig.playerCharacterSnapshots.find((r) => r.id === s);
      a && (a.currentHP = Math.max(0, Math.min(t, a.maxHP)));
    },
    async saveNewContextItemsToDB(s, t) {
      const { SessionDB: a } = await ce(async () => {
        const { SessionDB: c } = await import("./silly-tavern-db-C6OCLe8X.js").then((x) => x.d);
        return {
          SessionDB: c
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])), r = new a(s);
      let l;
      try {
        l = le(t);
      } catch {
        l = JSON.parse(JSON.stringify(t));
      }
      await r.addContextItems(l);
    },
    async updateSessionInDB() {
      if (!this.currentSession) return;
      const { masterDb: s } = await ce(async () => {
        const { masterDb: r } = await import("./silly-tavern-db-C6OCLe8X.js").then((l) => l.e);
        return {
          masterDb: r
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])), t = le(this.currentSession.modeState), a = le(this.currentSession.modeConfig);
      await s.sessions.update(this.currentSession.id, {
        modeState: t,
        modeConfig: a,
        updatedAt: Date.now()
      });
    }
  });
  function Ln() {
    const s = Ms((n) => n.config), t = g.useRef(false), a = g.useRef(false), r = K(), l = async (n, m, u, h, N = {}) => {
      const j = B.contextManager;
      if (!j) return {
        content: ""
      };
      const f = {
        id: F(),
        type: u,
        orderRef: 0,
        timestamp: Date.now(),
        data: {
          content: "",
          ...N
        }
      };
      j.setProcessingItem(f);
      let y = "";
      return await Ps(n, m, [], (S, b) => {
        h == null ? void 0 : h(S), y = b;
        const v = j.getProcessingItem();
        v && (v.data.content = b);
      }), j.completeProcessingItem(), {
        content: y
      };
    }, c = async (n, m) => {
      const u = B.sessionManager, h = B.contextManager;
      if (!(u && h)) return;
      const N = await u.executeCurrentStateLogic(h);
      if (console.log("[DndLoop] Action:", N), N.type === "WAIT_FOR_INPUT" || N.type === "STOP") {
        await B.updateSessionInDB(), t.current = false;
        return;
      }
      if (N.type === "STATE_CHANGE") {
        if (await B.updateSessionInDB(), a.current) {
          console.log("[DndLoop] \u6E38\u620F\u5DF2\u6682\u505C\uFF08STATE_CHANGE \u540E\uFF09"), t.current = false;
          return;
        }
        setTimeout(() => p(n.id), 0);
        return;
      }
      if (N.type === "LLM_CALL") {
        if (N.callbackPhase) {
          const f = N.callbackPhase;
          u.setCurrentUIState(u.getRunningUIStateForPhase(f));
        }
        await B.updateSessionInDB();
        const j = await l(m, N.messages.map((f) => ({
          ...f,
          id: F()
        })), N.llmRequestType, void 0, N.dataExtra);
        if (await B.saveNewContextItemsToDB(n.id, h.getHistoryItems()), x(N, j.content, n.id), await B.updateSessionInDB(), a.current) {
          console.log("[DndLoop] \u6E38\u620F\u5DF2\u6682\u505C\uFF08LLM_CALL \u5B8C\u6210\u540E\uFF09"), t.current = false;
          return;
        }
        setTimeout(() => p(n.id), 0);
      }
    }, x = (n, m, u) => {
      const h = B.sessionManager, N = B.contextManager;
      h && N && h.handleLLMResponse(n.callbackPhase, m, N);
    }, p = async (n) => {
      const m = B.currentSession;
      if (!m || m.id !== n) return;
      const u = {
        ...s
      };
      try {
        t.current = true, await c(m, u);
      } catch (h) {
        console.error("[DndLoop] Critical Error:", h), L.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", {
          duration: Number.POSITIVE_INFINITY,
          action: {
            label: "\u524D\u5F80\u914D\u7F6E",
            onClick: () => r({
              to: "/config/llm"
            })
          }
        }), t.current = false;
      }
    }, d = g.useCallback(async (n) => {
      if (t.current) return;
      const m = B.currentSession, u = B.contextManager, h = B.sessionManager;
      if (!(m && u && h)) {
        console.warn("[DndLoop] Session or Managers not ready");
        return;
      }
      if (n) {
        if (h.getCurrentPhase() !== "player_action") {
          L.warning("\u5F53\u524D\u5E76\u975E\u8BE5\u89D2\u8272\u7684\u884C\u52A8\u56DE\u5408");
          return;
        }
        const N = m.modeState.currentTurnCharacterId, j = m.modeConfig.playerCharacterSnapshots.find((f) => f.id === N);
        if (!(j == null ? void 0 : j.isHumanControlled)) {
          L.warning("\u5F53\u524D\u89D2\u8272\u7531 AI \u63A7\u5236\uFF0C\u65E0\u6CD5\u624B\u52A8\u8F93\u5165");
          return;
        }
        h.setCurrentUIState(h.getRunningUIStateForPhase("player_action")), u.addHistoryItem({
          id: F(),
          type: "dnd_player_action",
          idx: 0,
          orderRef: 0,
          timestamp: Date.now(),
          data: {
            content: n,
            characterId: N,
            characterName: j.name,
            isHumanControlled: true
          }
        }), await B.saveNewContextItemsToDB(m.id, u.getHistoryItems()), h.incrementTurnCount(N), h.setCurrentUIState(h.getDoneUIStateForPhase("player_action")), h.enterNextState("dm_check_eval"), await B.updateSessionInDB();
      }
      await p(m.id);
    }, [
      s
    ]), i = g.useCallback(() => {
      a.current = true, console.log("[DndLoop] \u6682\u505C\u8BF7\u6C42\u5DF2\u53D1\u51FA");
    }, []), o = g.useCallback(() => {
      if (!a.current) return;
      a.current = false, console.log("[DndLoop] \u6062\u590D\u6E38\u620F");
      const n = B.currentSession;
      n && !t.current && p(n.id);
    }, [
      s
    ]);
    return {
      nextStep: d,
      isCallingRef: t,
      isPausedRef: a,
      pauseGame: i,
      resumeGame: o
    };
  }
  let An, Pn, ss, Qs, En, Zs, oe, et;
  An = (s) => {
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q;
    const t = K(), [a, r] = g.useState(""), l = g.useRef(null), [c, x] = g.useState(false), [p, d] = g.useState(false), i = ue(B), { data: o = [] } = xe((D) => D.from({
      s: Ke
    })), n = o.find((D) => D.id === s.sessionId);
    g.useEffect(() => {
      var _a3;
      let D = false;
      if (!n) return;
      if (((_a3 = B.currentSession) == null ? void 0 : _a3.id) === n.id && B.contextManager) {
        d(true);
        return;
      }
      return (async () => {
        try {
          const q = await xs.createSessionDB(n.id).getContextItems();
          if (D) return;
          B.loadSession(n, {
            historyItems: q,
            processingItem: void 0
          }), d(true);
        } catch (ne) {
          console.error("[DnD] Load session error", ne);
        }
      })(), () => {
        D = true;
      };
    }, [
      n == null ? void 0 : n.id,
      n
    ]);
    const { nextStep: m, isPausedRef: u, pauseGame: h, resumeGame: N } = Ln(), [j, f] = g.useState(false);
    g.useEffect(() => {
      l.current && (l.current.scrollTop = l.current.scrollHeight);
    });
    const y = async () => {
      if (c) return;
      const D = B.sessionManager, W = B.contextManager;
      if (D && W) {
        u.current = false, f(false), x(true);
        try {
          const ne = D.getActualCurrentPhase(W);
          D.enterNextState(ne), D.setCurrentUIState(D.getReadyUIStateForPhase(ne)), await B.updateSessionInDB(), await m();
        } finally {
          x(false);
        }
      }
    };
    if (!(n && p)) return e.jsxs("div", {
      className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
      children: [
        e.jsx("div", {
          className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center",
          children: e.jsx(de, {
            className: "w-6 h-6 opacity-20"
          })
        }),
        e.jsx("p", {
          className: "text-xs font-medium tracking-widest uppercase opacity-50",
          children: "\u6B63\u5728\u6784\u5EFA\u5192\u9669\u4E16\u754C..."
        })
      ]
    });
    const S = async () => {
      if (!(!a.trim() || c)) {
        u.current = false, f(false), x(true);
        try {
          await m(a);
        } finally {
          x(false), r("");
        }
      }
    }, b = B.sessionManager && B.contextManager ? B.sessionManager.getActualCurrentUIState(B.contextManager) : ((_b = (_a2 = i.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b.currentUIState) || "idle", v = $s[b] || $s.idle, C = (_e2 = (_d = (_c = i.currentSession) == null ? void 0 : _c.modeConfig) == null ? void 0 : _d.playerCharacterSnapshots) == null ? void 0 : _e2.find((D) => {
      var _a3, _b2;
      return D.id === ((_b2 = (_a3 = i.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentTurnCharacterId);
    }), $ = !!(C == null ? void 0 : C.isHumanControlled), V = c || !v.inputEnabled || v.inputEnabled && !$, I = () => {
      h(), f(true);
    }, P = () => {
      N(), f(false);
    }, ae = async (D) => {
      var _a3, _b2, _c2;
      const W = (_a3 = B.currentSession) == null ? void 0 : _a3.modeConfig.playerCharacterSnapshots.find((kt) => kt.id === D);
      if (!W) return;
      const ne = W.isHumanControlled;
      B.toggleCharacterControl(D), await B.updateSessionInDB();
      const q = D === ((_b2 = B.currentSession) == null ? void 0 : _b2.modeState.currentTurnCharacterId), Ee = (_c2 = B.sessionManager) == null ? void 0 : _c2.getCurrentPhase();
      ne && q && Ee === "player_action" && !c && await m();
    }, X = () => {
      t({
        to: "/plaza"
      });
    }, Pe = () => {
      console.log("[DnD][Memory Session]", B.currentSession);
    }, Ct = async () => {
      if (!(n == null ? void 0 : n.id)) return;
      const D = await ye.sessions.getTable().get(n.id);
      console.log("[DnD][DB Session]", D);
    };
    return e.jsxs("div", {
      className: "flex flex-row h-full overflow-hidden bg-background",
      children: [
        e.jsxs("div", {
          className: "flex flex-col grow min-w-0 h-full relative",
          children: [
            e.jsxs("div", {
              className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: "w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-sm",
                      children: e.jsx(as, {
                        className: "w-5 h-5 text-amber-600"
                      })
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className: "font-bold text-sm tracking-tight",
                              children: ((_h = (_g = (_f = i.currentSession) == null ? void 0 : _f.modeConfig) == null ? void 0 : _g.worldSnapshot) == null ? void 0 : _h.name) || "DnD \u5192\u9669"
                            }),
                            e.jsxs(R, {
                              variant: "outline",
                              className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-amber-500/5 text-amber-600 border-amber-500/10",
                              children: [
                                "R",
                                ((_j = (_i = i.currentSession) == null ? void 0 : _i.modeState) == null ? void 0 : _j.currentRound) || 1
                              ]
                            })
                          ]
                        }),
                        e.jsx("span", {
                          className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide",
                          children: C ? `\u5F53\u524D\u884C\u52A8: ${C.name} (${C.isHumanControlled ? "\u73A9\u5BB6" : "AI"})` : "\u7B49\u5F85\u5F00\u59CB..."
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    b !== "idle" && (j ? e.jsxs(w, {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-green-500/30 text-green-600 hover:bg-green-500/10",
                      onClick: P,
                      children: [
                        e.jsx(Ts, {
                          className: "w-3 h-3"
                        }),
                        "\u7EE7\u7EED"
                      ]
                    }) : e.jsxs(w, {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-amber-500/30 text-amber-600 hover:bg-amber-500/10",
                      onClick: I,
                      disabled: !c,
                      children: [
                        e.jsx(ht, {
                          className: "w-3 h-3"
                        }),
                        "\u6682\u505C"
                      ]
                    })),
                    e.jsxs(R, {
                      variant: "secondary",
                      className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50",
                      children: [
                        e.jsx("span", {
                          className: A("w-1.5 h-1.5 rounded-full", j ? "bg-amber-400" : "bg-amber-500 animate-pulse")
                        }),
                        j ? "\u5DF2\u6682\u505C" : "DND"
                      ]
                    }),
                    e.jsx(w, {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px]",
                      onClick: Pe,
                      children: "LOG MEM"
                    }),
                    e.jsx(w, {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px]",
                      onClick: Ct,
                      children: "LOG DB"
                    })
                  ]
                })
              ]
            }),
            e.jsx("div", {
              className: "flex grow overflow-y-auto",
              ref: l,
              children: e.jsx("div", {
                className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-8",
                children: (() => {
                  var _a3, _b2, _c2, _d2, _e3, _f2, _g2, _h2;
                  const D = (((_a3 = i.contextManager) == null ? void 0 : _a3.state.historyItems) || []).filter((q) => !q.hidden), W = (_b2 = i.contextManager) == null ? void 0 : _b2.state.processingItem;
                  if (b === "idle") {
                    const q = D.length === 0 ? "\u5F00\u59CB\u5192\u9669" : "\u7EE7\u7EED\u5192\u9669";
                    return e.jsxs("div", {
                      className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                      children: [
                        e.jsx("div", {
                          className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500",
                          children: e.jsx(as, {
                            className: "w-10 h-10 text-amber-500 drop-shadow-sm"
                          })
                        }),
                        e.jsx("h2", {
                          className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                          children: ((_e3 = (_d2 = (_c2 = i.currentSession) == null ? void 0 : _c2.modeConfig) == null ? void 0 : _d2.worldSnapshot) == null ? void 0 : _e3.name) || "DnD \u5192\u9669"
                        }),
                        e.jsx("p", {
                          className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm",
                          children: ((_h2 = (_g2 = (_f2 = i.currentSession) == null ? void 0 : _f2.modeConfig) == null ? void 0 : _g2.worldSnapshot) == null ? void 0 : _h2.description) || "\u4E00\u6BB5\u5168\u65B0\u7684\u5192\u9669\u65C5\u7A0B\u5373\u5C06\u5C55\u5F00\uFF0C\u51C6\u5907\u597D\u63B7\u51FA\u547D\u8FD0\u7684\u9AB0\u5B50\u4E86\u5417\uFF1F"
                        }),
                        e.jsxs(w, {
                          type: "button",
                          size: "lg",
                          className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-amber-500/25 shadow-amber-500/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90",
                          onClick: y,
                          disabled: c,
                          children: [
                            c ? e.jsx(de, {
                              className: "w-5 h-5 animate-spin mr-3"
                            }) : e.jsx(me, {
                              className: "w-5 h-5 mr-3"
                            }),
                            q
                          ]
                        }),
                        e.jsxs("div", {
                          className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest",
                          children: [
                            e.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                e.jsx(Oe, {
                                  className: "w-3 h-3"
                                }),
                                " D20 \u68C0\u5B9A"
                              ]
                            }),
                            e.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                e.jsx(Ht, {
                                  className: "w-3 h-3"
                                }),
                                " \u591A\u4EBA\u5192\u9669"
                              ]
                            })
                          ]
                        })
                      ]
                    });
                  }
                  const ne = [
                    ...D
                  ];
                  return W && !W.hidden && !D.some((q) => q.id === W.id) && ne.push(W), ne.map((q, Ee) => e.jsx(Pn, {
                    item: q
                  }, `[${Ee}]${q.id}`));
                })()
              })
            }),
            e.jsxs("div", {
              className: "p-4 md:p-6 shrink-0 bg-background",
              children: [
                e.jsxs("div", {
                  className: "max-w-3xl mx-auto relative group",
                  children: [
                    e.jsx(G, {
                      value: a,
                      onChange: (D) => r(D.target.value),
                      placeholder: V ? v.inputEnabled && !$ ? `${(C == null ? void 0 : C.name) || "\u89D2\u8272"} \u7531 AI \u63A7\u5236\uFF0C\u7B49\u5F85\u81EA\u52A8\u884C\u52A8...` : v.placeholder : `\u4F5C\u4E3A ${(C == null ? void 0 : C.name) || "\u89D2\u8272"}\uFF0C\u63CF\u8FF0\u4F60\u7684\u884C\u52A8...`,
                      disabled: V,
                      className: A("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-amber-500/20 focus-visible:bg-background transition-all", V && "opacity-50 cursor-not-allowed"),
                      onKeyDown: (D) => {
                        D.key === "Enter" && !D.shiftKey && (D.preventDefault(), S());
                      }
                    }),
                    e.jsx(w, {
                      type: "button",
                      size: "icon",
                      className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all",
                      disabled: !a.trim() || V,
                      onClick: S,
                      children: c ? e.jsx(de, {
                        className: "w-4 h-4 animate-spin"
                      }) : e.jsx(Te, {
                        className: "w-4 h-4"
                      })
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40",
                  children: [
                    e.jsx("div", {
                      className: "text-[9px] font-bold tracking-widest uppercase",
                      children: C ? `${C.name} \u7684\u56DE\u5408 (${C.isHumanControlled ? "\u73A9\u5BB6\u64CD\u4F5C" : "AI \u81EA\u52A8"})` : "ADVENTURE LOG"
                    }),
                    e.jsx("div", {
                      className: "text-[9px] font-medium",
                      children: V ? "\u7B49\u5F85\u4E2D..." : "Shift + Enter \u6362\u884C"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "w-[320px] h-full overflow-y-auto bg-muted/10 border-l p-6 space-y-8 shrink-0 hidden lg:block scrollbar-none",
          children: [
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                  children: [
                    e.jsx(Jt, {
                      className: "w-3.5 h-3.5 text-amber-500"
                    }),
                    "\u5192\u9669\u72B6\u6001"
                  ]
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: [
                    e.jsxs("div", {
                      className: "bg-background/40 p-3 rounded-xl border border-muted/30",
                      children: [
                        e.jsx("div", {
                          className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1",
                          children: "\u56DE\u5408"
                        }),
                        e.jsx("div", {
                          className: "text-xl font-mono font-bold tracking-tight text-foreground/90",
                          children: ((_l = (_k = i.currentSession) == null ? void 0 : _k.modeState) == null ? void 0 : _l.currentRound) || 1
                        })
                      ]
                    }),
                    e.jsxs("div", {
                      className: "bg-background/40 p-3 rounded-xl border border-muted/30",
                      children: [
                        e.jsx("div", {
                          className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1",
                          children: "\u6A21\u5F0F"
                        }),
                        e.jsx("div", {
                          className: "text-sm font-bold tracking-tight text-foreground/90 capitalize",
                          children: ((_n2 = (_m = i.currentSession) == null ? void 0 : _m.modeConfig) == null ? void 0 : _n2.gameMode) || "standard"
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                  children: [
                    e.jsx(je, {
                      className: "w-3.5 h-3.5 text-amber-500"
                    }),
                    "\u5192\u9669\u8005"
                  ]
                }),
                e.jsx("div", {
                  className: "space-y-3",
                  children: (_q = (_p = (_o = i.currentSession) == null ? void 0 : _o.modeConfig) == null ? void 0 : _p.playerCharacterSnapshots) == null ? void 0 : _q.map((D) => {
                    var _a3, _b2, _c2, _d2, _e3;
                    const W = D.id === ((_b2 = (_a3 = i.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentTurnCharacterId), ne = ((_e3 = (_d2 = (_c2 = i.currentSession) == null ? void 0 : _c2.modeState) == null ? void 0 : _d2.turnCounts) == null ? void 0 : _e3[D.id]) || 0;
                    return e.jsxs("div", {
                      className: A("p-4 rounded-xl border transition-all duration-300", W ? "bg-amber-500/5 border-amber-500/30 shadow-sm shadow-amber-500/10" : "bg-background/40 border-muted/30"),
                      children: [
                        e.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            e.jsx("div", {
                              className: A("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold", W ? "bg-amber-500/20 text-amber-600" : D.isHumanControlled ? "bg-blue-500/10 text-blue-600" : "bg-muted text-muted-foreground"),
                              children: D.isHumanControlled ? e.jsx(ns, {
                                className: "w-4 h-4"
                              }) : e.jsx(Z, {
                                className: "w-4 h-4"
                              })
                            }),
                            e.jsxs("div", {
                              className: "grow min-w-0",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2 mb-1",
                                  children: [
                                    e.jsx("span", {
                                      className: "text-sm font-bold tracking-tight truncate",
                                      children: D.name
                                    }),
                                    e.jsx(R, {
                                      variant: "outline",
                                      className: A("text-[8px] px-1 h-3.5", D.isHumanControlled ? "bg-blue-500/10 text-blue-600 border-blue-500/20" : "bg-muted/50 text-muted-foreground border-muted/30"),
                                      children: D.isHumanControlled ? "\u73A9\u5BB6" : "AI"
                                    }),
                                    W && e.jsx(R, {
                                      variant: "outline",
                                      className: "text-[8px] px-1 h-3.5 bg-amber-500/10 text-amber-600 border-amber-500/20",
                                      children: "\u884C\u52A8\u4E2D"
                                    })
                                  ]
                                }),
                                e.jsxs("div", {
                                  className: "text-[10px] text-muted-foreground/60 font-medium",
                                  children: [
                                    D.race,
                                    " \xB7 ",
                                    D.class,
                                    " \xB7 \u884C\u52A8 \xD7",
                                    ne
                                  ]
                                })
                              ]
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          className: "mt-3 flex items-center justify-between px-1",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-1.5",
                              children: [
                                e.jsx(Z, {
                                  className: A("w-3 h-3 transition-colors", D.isHumanControlled ? "text-muted-foreground/30" : "text-foreground/70")
                                }),
                                e.jsx("span", {
                                  className: A("text-[9px] font-bold uppercase tracking-wider transition-colors", D.isHumanControlled ? "text-muted-foreground/20" : "text-foreground/50"),
                                  children: "AI"
                                })
                              ]
                            }),
                            e.jsx(De, {
                              checked: D.isHumanControlled,
                              onCheckedChange: () => ae(D.id),
                              className: "data-[state=checked]:bg-blue-500 h-4 w-7 [&>span]:h-3 [&>span]:w-3"
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-1.5",
                              children: [
                                e.jsx("span", {
                                  className: A("text-[9px] font-bold uppercase tracking-wider transition-colors", D.isHumanControlled ? "text-foreground/50" : "text-muted-foreground/20"),
                                  children: "\u73A9\u5BB6"
                                }),
                                e.jsx(ns, {
                                  className: A("w-3 h-3 transition-colors", D.isHumanControlled ? "text-blue-500" : "text-muted-foreground/30")
                                })
                              ]
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          className: "mt-3 space-y-1",
                          children: [
                            e.jsxs("div", {
                              className: "flex justify-between text-[9px] font-bold text-muted-foreground/60",
                              children: [
                                e.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    e.jsx(Vt, {
                                      className: "w-2.5 h-2.5 text-red-400"
                                    }),
                                    "HP"
                                  ]
                                }),
                                e.jsxs("span", {
                                  children: [
                                    D.currentHP,
                                    "/",
                                    D.maxHP
                                  ]
                                })
                              ]
                            }),
                            e.jsx("div", {
                              className: "h-1.5 bg-muted/50 rounded-full overflow-hidden",
                              children: e.jsx("div", {
                                className: A("h-full rounded-full transition-all duration-500", D.currentHP / D.maxHP > 0.5 ? "bg-green-500" : D.currentHP / D.maxHP > 0.25 ? "bg-amber-500" : "bg-red-500"),
                                style: {
                                  width: `${Math.max(0, D.currentHP / D.maxHP * 100)}%`
                                }
                              })
                            })
                          ]
                        }),
                        e.jsx("div", {
                          className: "mt-3 grid grid-cols-3 gap-1.5",
                          children: Object.entries(D.attributes || {}).map(([q, Ee]) => e.jsxs("div", {
                            className: "text-center py-1 px-1 rounded bg-muted/30 border border-muted/20",
                            children: [
                              e.jsx("div", {
                                className: "text-[8px] font-bold uppercase text-muted-foreground/50",
                                children: q.slice(0, 3)
                              }),
                              e.jsx("div", {
                                className: "text-xs font-mono font-bold",
                                children: Ee
                              })
                            ]
                          }, q))
                        })
                      ]
                    }, D.id);
                  })
                })
              ]
            }),
            e.jsx("div", {
              className: "space-y-3",
              children: e.jsxs(w, {
                type: "button",
                variant: "outline",
                className: "w-full h-10 rounded-xl border-dashed border-2 hover:border-amber-500/50 hover:bg-amber-500/5 gap-2",
                onClick: X,
                children: [
                  e.jsx(_s, {
                    className: "w-4 h-4"
                  }),
                  e.jsx("span", {
                    className: "font-bold tracking-wider text-sm",
                    children: "\u9000\u51FA\u5192\u9669"
                  })
                ]
              })
            }),
            e.jsxs("div", {
              className: "pt-6 opacity-30",
              children: [
                e.jsx("div", {
                  className: "h-px bg-linear-to-r from-transparent via-muted-foreground/50 to-transparent"
                }),
                e.jsx("p", {
                  className: "text-[9px] text-center mt-4 font-bold tracking-[0.3em] uppercase",
                  children: "DnD Engine v1.0.0"
                })
              ]
            })
          ]
        })
      ]
    });
  };
  Pn = ({ item: s }) => {
    var _a2, _b;
    switch (s.type) {
      case "dnd_dm_intro":
        return e.jsx(ss, {
          content: s.data.content,
          title: "\u5F00\u573A\u53D9\u4E8B"
        });
      case "dnd_dm_narrate":
        return e.jsx(ss, {
          content: s.data.content
        });
      case "dnd_player_action":
        return e.jsx(Qs, {
          item: s
        });
      case "dnd_roll_result":
        return e.jsx(En, {
          item: s
        });
      case "dnd_system_notice":
        return e.jsx(Zs, {
          item: s
        });
      case "dnd_assign_player":
        return null;
      case "dnd_check_decision":
        return null;
      case "participant_message":
        return ((_a2 = s.data) == null ? void 0 : _a2.isDM) ? e.jsx(ss, {
          content: s.data.content
        }) : e.jsx(Qs, {
          item: s
        });
      case "system_notification":
        return e.jsx(Zs, {
          item: s
        });
      default:
        return ((_b = s.data) == null ? void 0 : _b.content) ? e.jsx(ss, {
          content: s.data.content,
          title: "\u6D88\u606F"
        }) : null;
    }
  };
  ss = ({ content: s, title: t = "Dungeon Master" }) => {
    const a = Nt(s);
    return e.jsxs("div", {
      className: "flex gap-5 group animate-in fade-in slide-in-from-left-2 duration-500",
      children: [
        e.jsxs("div", {
          className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden",
          children: [
            e.jsx("div", {
              className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            }),
            e.jsx(Z, {
              className: "w-5 h-5 text-amber-600 relative z-10"
            })
          ]
        }),
        e.jsxs("div", {
          className: "space-y-2 grow pt-1 min-w-0",
          children: [
            e.jsxs("div", {
              className: "text-[10px] font-black tracking-[0.2em] text-amber-600/60 flex items-center gap-2 uppercase",
              children: [
                e.jsx(me, {
                  className: "w-3 h-3"
                }),
                t
              ]
            }),
            e.jsxs("div", {
              className: "text-[15px] leading-relaxed text-foreground/80 whitespace-pre-wrap font-serif",
              children: [
                a.think && e.jsxs("div", {
                  className: "text-xs italic text-muted-foreground/50 mb-3 pl-3 border-l-2 border-muted/30",
                  children: [
                    e.jsx("span", {
                      className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1",
                      children: "DM \u601D\u8003"
                    }),
                    a.think
                  ]
                }),
                a.speak && e.jsxs("div", {
                  className: "mb-2",
                  children: [
                    e.jsx("span", {
                      className: "text-amber-600/80 font-bold",
                      children: "\u201C"
                    }),
                    e.jsx("span", {
                      className: "italic",
                      children: a.speak
                    }),
                    e.jsx("span", {
                      className: "text-amber-600/80 font-bold",
                      children: "\u201D"
                    })
                  ]
                }),
                a.action && e.jsx("div", {
                  className: "text-foreground/70",
                  children: a.action
                }),
                !(a.think || a.speak || a.action) && a.rawText
              ]
            })
          ]
        })
      ]
    });
  };
  Qs = ({ item: s }) => {
    const t = s.data, a = Nt(t.content || ""), r = t.characterName || t.name || "\u5192\u9669\u8005", l = t.isHumanControlled || t.isUser;
    return e.jsxs("div", {
      className: "flex gap-5 group animate-in fade-in slide-in-from-right-2 duration-500",
      children: [
        e.jsx("div", {
          className: A("w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border shadow-sm", l ? "bg-blue-500/5 border-blue-500/10" : "bg-violet-500/5 border-violet-500/10"),
          children: l ? e.jsx(ns, {
            className: "w-5 h-5 text-blue-500"
          }) : e.jsx(je, {
            className: "w-5 h-5 text-violet-500"
          })
        }),
        e.jsxs("div", {
          className: "space-y-2 grow pt-1 min-w-0",
          children: [
            e.jsxs("div", {
              className: A("text-[10px] font-black tracking-[0.2em] flex items-center gap-2 uppercase", l ? "text-blue-500/60" : "text-violet-500/60"),
              children: [
                e.jsx(as, {
                  className: "w-3 h-3"
                }),
                r,
                l && e.jsx(R, {
                  variant: "outline",
                  className: "text-[8px] px-1 h-3 bg-blue-500/5 text-blue-500 border-blue-500/10",
                  children: "\u73A9\u5BB6"
                })
              ]
            }),
            e.jsxs("div", {
              className: "text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap",
              children: [
                a.think && e.jsxs("div", {
                  className: "text-xs italic text-muted-foreground/50 mb-3 pl-3 border-l-2 border-muted/30",
                  children: [
                    e.jsx("span", {
                      className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1",
                      children: "\u5185\u5FC3\u60F3\u6CD5"
                    }),
                    a.think
                  ]
                }),
                a.speak && e.jsxs("div", {
                  className: "mb-2 font-medium",
                  children: [
                    "\u201C",
                    a.speak,
                    "\u201D"
                  ]
                }),
                a.action && e.jsx("div", {
                  className: "text-foreground/70",
                  children: a.action
                }),
                !(a.think || a.speak || a.action) && a.rawText
              ]
            })
          ]
        })
      ]
    });
  };
  En = ({ item: s }) => {
    var _a2;
    const t = s.data, a = t.checkResult, r = t.characterName || "\u89D2\u8272", l = t.attributeName || "\u5C5E\u6027";
    if (!a) return null;
    const c = a.isSuccess, x = a.naturalRoll === 20, p = a.naturalRoll === 1;
    return e.jsx("div", {
      className: "flex justify-center my-6 animate-in fade-in zoom-in duration-500",
      children: e.jsxs("div", {
        className: A("inline-flex items-center gap-4 px-6 py-4 rounded-2xl border-2 shadow-lg", c ? "bg-green-500/5 border-green-500/30 shadow-green-500/10" : "bg-red-500/5 border-red-500/30 shadow-red-500/10"),
        children: [
          e.jsxs("div", {
            className: A("w-14 h-14 rounded-xl flex items-center justify-center font-mono font-black text-2xl relative", x ? "bg-amber-500/20 text-amber-500 ring-2 ring-amber-500/30" : p ? "bg-red-500/20 text-red-500 ring-2 ring-red-500/30" : c ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"),
            children: [
              a.naturalRoll,
              x && e.jsx(me, {
                className: "w-3 h-3 text-amber-500 absolute -top-1 -right-1 animate-pulse"
              })
            ]
          }),
          e.jsxs("div", {
            className: "space-y-1",
            children: [
              e.jsxs("div", {
                className: "text-[10px] font-black uppercase tracking-widest text-muted-foreground/60",
                children: [
                  r,
                  " \xB7 ",
                  l,
                  " \u68C0\u5B9A"
                ]
              }),
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsxs("span", {
                    className: "text-lg font-mono font-bold",
                    children: [
                      a.naturalRoll,
                      a.modifier >= 0 ? "+" : "",
                      a.modifier,
                      " = ",
                      a.total
                    ]
                  }),
                  e.jsxs("span", {
                    className: "text-xs text-muted-foreground",
                    children: [
                      "vs DC ",
                      ((_a2 = t.checkSpec) == null ? void 0 : _a2.dc) || "?"
                    ]
                  })
                ]
              }),
              e.jsx("div", {
                className: A("text-xs font-black uppercase tracking-wider", x ? "text-amber-500" : p ? "text-red-500" : c ? "text-green-600" : "text-red-600"),
                children: x ? "\u5927\u6210\u529F\uFF01" : p ? "\u5927\u5931\u8D25\uFF01" : c ? "\u68C0\u5B9A\u6210\u529F" : "\u68C0\u5B9A\u5931\u8D25"
              })
            ]
          })
        ]
      })
    });
  };
  Zs = ({ item: s }) => {
    const t = s.data, a = t.noticeType;
    return e.jsx("div", {
      className: "flex justify-center my-4",
      children: e.jsxs("div", {
        className: "flex items-center gap-3 px-4 py-1.5 rounded-full bg-muted/30 border border-muted/50 text-muted-foreground shadow-sm",
        children: [
          e.jsx("span", {
            className: "w-1 h-1 rounded-full bg-amber-500/40"
          }),
          e.jsx("span", {
            className: "text-[10px] font-bold tracking-widest uppercase",
            children: a === "turn_start" && t.characterName ? `\u2694 ${t.characterName} \u7684\u56DE\u5408` : t.content || "\u7CFB\u7EDF\u901A\u77E5"
          }),
          e.jsx("span", {
            className: "w-1 h-1 rounded-full bg-amber-500/40"
          })
        ]
      })
    });
  };
  Pr = Object.freeze(Object.defineProperty({
    __proto__: null,
    SessionMainForDnd: An
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  oe = Q({
    currentSession: null,
    contextManager: null,
    sessionManager: null,
    loadSession(s, t) {
      this.currentSession = s;
      const a = this.currentSession;
      a.modeState.currentUIState = "idle", a.modeState.aiAutoSpeakCounter === void 0 && (a.modeState.aiAutoSpeakCounter = 0), this.sessionManager = xt(new ka(a));
      const r = Q(t || {
        historyItems: [],
        processingItem: void 0
      });
      this.contextManager = new Ne(r);
    },
    async saveNewContextItemsToDB(s, t) {
      const { SessionDB: a } = await ce(async () => {
        const { SessionDB: c } = await import("./silly-tavern-db-C6OCLe8X.js").then((x) => x.d);
        return {
          SessionDB: c
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])), r = new a(s);
      let l;
      try {
        l = le(t);
      } catch {
        l = JSON.parse(JSON.stringify(t));
      }
      await r.addContextItems(l);
    },
    async updateSessionInDB() {
      if (!this.currentSession) return;
      const { masterDb: s } = await ce(async () => {
        const { masterDb: r } = await import("./silly-tavern-db-C6OCLe8X.js").then((l) => l.e);
        return {
          masterDb: r
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])), t = le(this.currentSession.modeState), a = le(this.currentSession.modeConfig);
      await s.sessions.update(this.currentSession.id, {
        modeState: t,
        modeConfig: a,
        updatedAt: Date.now()
      });
    }
  });
  et = 3;
  function On() {
    const s = Ms((d) => d.config), t = g.useRef(false), a = K(), r = g.useCallback(async (d, i, o, n = {}) => {
      const m = oe.contextManager;
      if (!m) return "";
      const u = {
        id: F(),
        type: o,
        orderRef: 0,
        timestamp: Date.now(),
        data: {
          content: "",
          ...n
        }
      };
      m.setProcessingItem(u);
      try {
        let h = "";
        if (await Ps(d, i.map((N) => ({
          ...N,
          id: F()
        })), [], (N, j) => {
          h = j;
          const f = m.getProcessingItem();
          f && (f.data.content = j);
        }), !h.trim()) throw m.setProcessingItem(void 0), new Error("LLM \u8BF7\u6C42\u5931\u8D25\uFF1A\u672A\u6536\u5230\u6709\u6548\u54CD\u5E94\uFF08\u53EF\u80FD\u662F API \u5BC6\u94A5\u65E0\u6548\u3001\u6A21\u578B\u4E0D\u53EF\u7528\u6216\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF\uFF09");
        return m.completeProcessingItem(), h;
      } catch (h) {
        throw m.setProcessingItem(void 0), h;
      }
    }, []), l = g.useCallback(async () => {
      if (t.current) return;
      t.current = true;
      const d = {
        ...s
      };
      try {
        for (; ; ) {
          const i = oe, o = i.currentSession, n = i.sessionManager, m = i.contextManager;
          if (!(o && n && m)) break;
          if (n.isAICounterAtMax()) {
            n.setCurrentPhase("waiting_for_player"), n.setCurrentUIState("ai_loop_paused"), await i.updateSessionInDB();
            break;
          }
          n.setCurrentUIState("ai_loop_running"), n.setCurrentPhase("dm_select_speaker"), await i.updateSessionInDB();
          let u = null;
          for (let j = 0; j < et; j++) {
            const f = Ia(o, m), y = await r(d, f, "gc_select_speaker");
            if (u = Da(y), u) break;
            console.warn(`[GroupChat] DM \u9009\u62E9\u89E3\u6790\u5931\u8D25 (${j + 1}/${et})`);
          }
          if (!u) {
            L.warning("DM \u9009\u62E9\u53D1\u8A00\u8005\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), n.setCurrentUIState("ai_loop_paused"), await i.updateSessionInDB();
            break;
          }
          const h = n.findParticipantName(u.nextSpeakerId);
          m.addHistoryItem({
            id: F(),
            type: "gc_select_speaker",
            idx: 0,
            orderRef: 0,
            timestamp: Date.now(),
            data: {
              nextSpeakerId: u.nextSpeakerId,
              nextSpeakerName: h,
              reason: u.reason
            },
            hidden: true
          }), n.setCurrentSpeaker(u.nextSpeakerId), n.setCurrentPhase("character_speak"), await i.updateSessionInDB();
          const N = _a(o, m);
          await r(d, N, "gc_character_message", {
            characterId: u.nextSpeakerId,
            characterName: h
          }), n.incrementAfterAISpeaks(u.nextSpeakerId), await i.saveNewContextItemsToDB(o.id, m.getHistoryItems()), await i.updateSessionInDB(), await new Promise((j) => setTimeout(j, 50));
        }
      } catch (i) {
        console.error("[GroupChat] AI \u5FAA\u73AF\u9519\u8BEF:", i);
        const o = oe.sessionManager;
        o && o.setCurrentUIState("ai_loop_paused");
        try {
          await oe.updateSessionInDB();
        } catch {
        }
        L.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", {
          duration: Number.POSITIVE_INFINITY,
          action: {
            label: "\u524D\u5F80\u914D\u7F6E",
            onClick: () => a({
              to: "/config/llm"
            })
          }
        });
      } finally {
        t.current = false;
      }
    }, [
      s,
      r,
      a
    ]), c = g.useCallback(async (d) => {
      const i = oe, { currentSession: o, contextManager: n, sessionManager: m } = i;
      o && n && m && (n.addHistoryItem({
        id: F(),
        type: "gc_user_message",
        idx: 0,
        orderRef: 0,
        timestamp: Date.now(),
        data: {
          content: d,
          userName: o.modeConfig.userName || "\u6211"
        }
      }), m.resetCounterAfterPlayerSpeaks(), await i.saveNewContextItemsToDB(o.id, n.getHistoryItems()), await i.updateSessionInDB(), t.current || l());
    }, [
      l
    ]), x = g.useCallback(async () => {
      const d = oe, { sessionManager: i } = d;
      i && (i.resetAIAutoSpeakCounter(), await d.updateSessionInDB(), t.current || l());
    }, [
      l
    ]), p = g.useCallback(async () => {
      const d = oe, { sessionManager: i } = d;
      i && (i.setCurrentPhase("dm_select_speaker"), i.setCurrentUIState("ai_loop_running"), i.resetAIAutoSpeakCounter(), await d.updateSessionInDB(), await new Promise((o) => setTimeout(o, 50)), l());
    }, [
      l
    ]);
    return {
      sendPlayerMessage: c,
      continueAILoop: x,
      startChat: p,
      isRunningRef: t
    };
  }
  function St(s) {
    if (!s) return "";
    const t = new Date(s), a = /* @__PURE__ */ new Date(), r = t.getHours().toString().padStart(2, "0"), l = t.getMinutes().toString().padStart(2, "0");
    return t.toDateString() === a.toDateString() ? `${r}:${l}` : `${t.getMonth() + 1}/${t.getDate()} ${r}:${l}`;
  }
  let Rn, $n, st, Fn, M;
  Rn = (s) => {
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r2, _s2, _t2, _u;
    const t = K(), [a, r] = g.useState(""), l = g.useRef(null), [c, x] = g.useState(false), p = ue(oe), { data: d = [] } = xe((C) => C.from({
      s: Ke
    })), i = d.find((C) => C.id === s.sessionId);
    g.useEffect(() => {
      var _a3;
      let C = false;
      if (!i) return;
      if (((_a3 = oe.currentSession) == null ? void 0 : _a3.id) === i.id && oe.contextManager) {
        x(true);
        return;
      }
      return (async () => {
        try {
          const I = await xs.createSessionDB(i.id).getContextItems();
          if (C) return;
          oe.loadSession(i, {
            historyItems: I,
            processingItem: void 0
          }), x(true);
        } catch (V) {
          console.error("[GroupChat] Load session error", V);
        }
      })(), () => {
        C = true;
      };
    }, [
      i == null ? void 0 : i.id,
      i
    ]);
    const { sendPlayerMessage: o, continueAILoop: n, startChat: m, isRunningRef: u } = On();
    if (g.useEffect(() => {
      l.current && (l.current.scrollTop = l.current.scrollHeight);
    }), !(i && c)) return e.jsxs("div", {
      className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
      children: [
        e.jsx("div", {
          className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center",
          children: e.jsx(de, {
            className: "w-6 h-6 opacity-20"
          })
        }),
        e.jsx("p", {
          className: "text-xs font-medium tracking-widest uppercase opacity-50",
          children: "\u52A0\u8F7D\u7FA4\u804A..."
        })
      ]
    });
    const h = ((_b = (_a2 = p.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b.currentUIState) || "idle", N = Fs[h] || Fs.idle, j = (_e2 = (_d = (_c = p.currentSession) == null ? void 0 : _c.modeConfig) == null ? void 0 : _d.participantSnapshots) == null ? void 0 : _e2.find((C) => {
      var _a3, _b2;
      return C.id === ((_b2 = (_a3 = p.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentSpeakerId);
    }), f = async () => {
      if (!a.trim()) return;
      const C = a;
      r(""), await o(C);
    }, y = async () => {
      u.current || await m();
    }, S = async () => {
      u.current || await n();
    }, b = () => t({
      to: "/plaza"
    }), v = (_g = (_f = p.contextManager) == null ? void 0 : _f.state.processingItem) == null ? void 0 : _g.id;
    return e.jsxs("div", {
      className: "flex flex-row h-full overflow-hidden bg-background",
      children: [
        e.jsxs("div", {
          className: "flex flex-col grow min-w-0 h-full relative",
          children: [
            e.jsxs("div", {
              className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: "w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shadow-sm",
                      children: e.jsx(ts, {
                        className: "w-5 h-5 text-violet-600"
                      })
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className: "font-bold text-sm tracking-tight",
                              children: ((_i = (_h = p.currentSession) == null ? void 0 : _h.modeConfig) == null ? void 0 : _i.topic) || "\u7FA4\u804A"
                            }),
                            e.jsxs(R, {
                              variant: "outline",
                              className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-violet-500/5 text-violet-600 border-violet-500/10",
                              children: [
                                ((_l = (_k = (_j = p.currentSession) == null ? void 0 : _j.modeConfig) == null ? void 0 : _k.participantSnapshots) == null ? void 0 : _l.length) || 0,
                                " \u4EBA"
                              ]
                            })
                          ]
                        }),
                        e.jsx("span", {
                          className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide",
                          children: j && h === "ai_loop_running" ? `${j.name} \u6B63\u5728\u8F93\u5165...` : N.label
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    h !== "idle" && e.jsxs("span", {
                      className: "text-[9px] text-muted-foreground/50 font-mono",
                      children: [
                        "AI ",
                        ((_n2 = (_m = p.currentSession) == null ? void 0 : _m.modeState) == null ? void 0 : _n2.aiAutoSpeakCounter) || 0,
                        "/",
                        ((_p = (_o = p.currentSession) == null ? void 0 : _o.modeConfig) == null ? void 0 : _p.maxAIAutoSpeakCount) ?? 5
                      ]
                    }),
                    e.jsxs(R, {
                      variant: "secondary",
                      className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50",
                      children: [
                        e.jsx("span", {
                          className: A("w-1.5 h-1.5 rounded-full", h === "ai_loop_running" ? "bg-violet-500 animate-pulse" : h === "ai_loop_paused" ? "bg-amber-500" : "bg-muted-foreground/30")
                        }),
                        "\u7FA4\u804A"
                      ]
                    })
                  ]
                })
              ]
            }),
            e.jsx("div", {
              className: "flex grow overflow-y-auto",
              ref: l,
              children: e.jsx("div", {
                className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-6",
                children: (() => {
                  var _a3, _b2, _c2, _d2, _e3, _f2, _g2;
                  const C = (((_a3 = p.contextManager) == null ? void 0 : _a3.state.historyItems) || []).filter((I) => !I.hidden), $ = (_b2 = p.contextManager) == null ? void 0 : _b2.state.processingItem;
                  if (h === "idle") {
                    const I = C.length === 0 ? "\u5F00\u59CB\u7FA4\u804A" : "\u7EE7\u7EED\u7FA4\u804A";
                    return e.jsxs("div", {
                      className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                      children: [
                        e.jsx("div", {
                          className: "w-24 h-24 rounded-4xl bg-violet-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-violet-500/10 ring-8 ring-violet-500/5",
                          children: e.jsx(ts, {
                            className: "w-10 h-10 text-violet-500 drop-shadow-sm"
                          })
                        }),
                        e.jsx("h2", {
                          className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                          children: ((_d2 = (_c2 = p.currentSession) == null ? void 0 : _c2.modeConfig) == null ? void 0 : _d2.topic) || "\u7FA4\u804A"
                        }),
                        e.jsxs("p", {
                          className: "text-muted-foreground/80 font-medium tracking-wider mb-6 max-w-md text-center leading-relaxed text-sm",
                          children: [
                            "\u4E0E ",
                            (_g2 = (_f2 = (_e3 = p.currentSession) == null ? void 0 : _e3.modeConfig) == null ? void 0 : _f2.participantSnapshots) == null ? void 0 : _g2.map((P) => P.name).join("\u3001"),
                            " \u4E00\u8D77\u804A\u5929"
                          ]
                        }),
                        e.jsxs(w, {
                          type: "button",
                          size: "lg",
                          className: "h-14 px-10 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-violet-500/25 shadow-violet-500/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90",
                          onClick: y,
                          disabled: u.current,
                          children: [
                            e.jsx(me, {
                              className: "w-5 h-5 mr-3"
                            }),
                            I
                          ]
                        })
                      ]
                    });
                  }
                  const V = [
                    ...C
                  ];
                  return $ && !$.hidden && !C.some((I) => I.id === $.id) && V.push($), V.map((I, P) => {
                    var _a4, _b3, _c3, _d3;
                    return e.jsx($n, {
                      item: I,
                      participants: ((_b3 = (_a4 = p.currentSession) == null ? void 0 : _a4.modeConfig) == null ? void 0 : _b3.participantSnapshots) || [],
                      userName: ((_d3 = (_c3 = p.currentSession) == null ? void 0 : _c3.modeConfig) == null ? void 0 : _d3.userName) || "\u6211",
                      isStreaming: I.id === v
                    }, `[${P}]${I.id}`);
                  });
                })()
              })
            }),
            h !== "idle" && e.jsxs("div", {
              className: "p-4 md:p-6 shrink-0 bg-background",
              children: [
                e.jsxs("div", {
                  className: "max-w-3xl mx-auto relative group",
                  children: [
                    e.jsx(G, {
                      value: a,
                      onChange: (C) => r(C.target.value),
                      placeholder: N.placeholder,
                      className: "min-h-20 max-h-40 pr-28 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-violet-500/20 focus-visible:bg-background transition-all",
                      onKeyDown: (C) => {
                        C.key === "Enter" && !C.shiftKey && (C.preventDefault(), f());
                      }
                    }),
                    e.jsxs("div", {
                      className: "absolute right-3 bottom-3 flex gap-2",
                      children: [
                        e.jsx(w, {
                          type: "button",
                          size: "icon",
                          variant: "ghost",
                          className: A("h-10 w-10 rounded-xl text-muted-foreground hover:text-violet-600", h === "ai_loop_paused" && "text-amber-500 animate-pulse"),
                          disabled: u.current,
                          onClick: S,
                          title: "\u8BA9 AI \u7EE7\u7EED\u5BF9\u8BDD\uFF08\u91CD\u7F6E\u8BA1\u6570\u5668\uFF09",
                          children: e.jsx(Yt, {
                            className: "w-4 h-4"
                          })
                        }),
                        e.jsx(w, {
                          type: "button",
                          size: "icon",
                          className: "h-10 w-10 rounded-xl shadow-lg hover:shadow-violet-500/20 transition-all",
                          disabled: !a.trim(),
                          onClick: f,
                          children: e.jsx(Te, {
                            className: "w-4 h-4"
                          })
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40",
                  children: [
                    e.jsx("div", {
                      className: "text-[9px] font-bold tracking-widest uppercase",
                      children: "GROUP CHAT"
                    }),
                    e.jsx("div", {
                      className: "text-[9px] font-medium",
                      children: "Shift + Enter \u6362\u884C \xB7 \u23E9 \u8BA9 AI \u7EE7\u7EED"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "w-70 h-full overflow-y-auto bg-muted/10 border-l p-6 space-y-6 shrink-0 hidden lg:block scrollbar-none",
          children: [
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                  children: [
                    e.jsx(je, {
                      className: "w-3.5 h-3.5 text-violet-500"
                    }),
                    "\u7FA4\u804A\u6210\u5458"
                  ]
                }),
                e.jsx("div", {
                  className: "p-3 rounded-xl border bg-background/40 border-muted/30",
                  children: e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className: "w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600",
                        children: e.jsx(je, {
                          className: "w-4 h-4"
                        })
                      }),
                      e.jsx("div", {
                        className: "grow min-w-0",
                        children: e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className: "text-sm font-bold truncate",
                              children: ((_r2 = (_q = p.currentSession) == null ? void 0 : _q.modeConfig) == null ? void 0 : _r2.userName) || "\u6211"
                            }),
                            e.jsx(R, {
                              variant: "outline",
                              className: "text-[8px] px-1 h-3.5 bg-blue-500/10 text-blue-600 border-blue-500/20",
                              children: "\u73A9\u5BB6"
                            })
                          ]
                        })
                      })
                    ]
                  })
                }),
                e.jsx("div", {
                  className: "space-y-2",
                  children: (_u = (_t2 = (_s2 = p.currentSession) == null ? void 0 : _s2.modeConfig) == null ? void 0 : _t2.participantSnapshots) == null ? void 0 : _u.map((C) => {
                    var _a3, _b2, _c2, _d2, _e3;
                    const $ = C.id === ((_b2 = (_a3 = p.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentSpeakerId) && h === "ai_loop_running", V = ((_e3 = (_d2 = (_c2 = p.currentSession) == null ? void 0 : _c2.modeState) == null ? void 0 : _d2.speakCounts) == null ? void 0 : _e3[C.id]) || 0;
                    return e.jsx("div", {
                      className: A("p-3 rounded-xl border transition-all duration-300", $ ? "bg-violet-500/5 border-violet-500/30 shadow-sm shadow-violet-500/10" : "bg-background/40 border-muted/30"),
                      children: e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx("div", {
                            className: A("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", $ ? "bg-violet-500/20 text-violet-600" : "bg-muted text-muted-foreground"),
                            children: e.jsx(Z, {
                              className: "w-4 h-4"
                            })
                          }),
                          e.jsxs("div", {
                            className: "grow min-w-0",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2 mb-0.5",
                                children: [
                                  e.jsx("span", {
                                    className: "text-sm font-bold truncate",
                                    children: C.name
                                  }),
                                  $ && e.jsx(R, {
                                    variant: "outline",
                                    className: "text-[8px] px-1 h-3.5 bg-violet-500/10 text-violet-600 border-violet-500/20",
                                    children: "\u53D1\u8A00\u4E2D"
                                  })
                                ]
                              }),
                              e.jsxs("div", {
                                className: "text-[10px] text-muted-foreground/60 font-medium",
                                children: [
                                  "\u53D1\u8A00 \xD7",
                                  V
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    }, C.id);
                  })
                })
              ]
            }),
            e.jsx("div", {
              className: "space-y-3 pt-4",
              children: e.jsxs(w, {
                type: "button",
                variant: "outline",
                className: "w-full h-10 rounded-xl border-dashed border-2 hover:border-violet-500/50 hover:bg-violet-500/5 gap-2",
                onClick: b,
                children: [
                  e.jsx(_s, {
                    className: "w-4 h-4"
                  }),
                  e.jsx("span", {
                    className: "font-bold tracking-wider text-sm",
                    children: "\u9000\u51FA\u7FA4\u804A"
                  })
                ]
              })
            })
          ]
        })
      ]
    });
  };
  $n = ({ item: s, participants: t, userName: a, isStreaming: r }) => {
    var _a2;
    switch (s.type) {
      case "gc_character_message":
        return e.jsx(st, {
          item: s,
          participants: t,
          isStreaming: r
        });
      case "gc_user_message":
        return e.jsx(Fn, {
          item: s,
          userName: a
        });
      case "gc_select_speaker":
        return null;
      default:
        return ((_a2 = s.data) == null ? void 0 : _a2.content) ? e.jsx(st, {
          item: s,
          participants: t,
          isStreaming: r
        }) : null;
    }
  };
  st = ({ item: s, participants: t, isStreaming: a }) => {
    var _a2;
    const r = s.data, l = r.characterName || ((_a2 = t.find((x) => x.id === r.characterId)) == null ? void 0 : _a2.name) || "\u89D2\u8272", c = a ? "..." : St(s.timestamp);
    return e.jsxs("div", {
      className: "flex gap-4 group animate-in fade-in slide-in-from-left-2 duration-300",
      children: [
        e.jsx("div", {
          className: "w-9 h-9 rounded-xl bg-violet-500/5 flex items-center justify-center shrink-0 border border-violet-500/10",
          children: e.jsx(Z, {
            className: "w-4.5 h-4.5 text-violet-600"
          })
        }),
        e.jsxs("div", {
          className: "space-y-1 grow pt-0.5 min-w-0",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("span", {
                  className: "text-[10px] font-black tracking-[0.15em] text-violet-600/60 uppercase",
                  children: l
                }),
                e.jsx("span", {
                  className: "text-[9px] text-muted-foreground/40 font-medium tabular-nums",
                  children: c
                })
              ]
            }),
            e.jsx("div", {
              className: "text-[15px] leading-relaxed text-foreground/85 whitespace-pre-wrap",
              children: r.content || ""
            })
          ]
        })
      ]
    });
  };
  Fn = ({ item: s, userName: t }) => {
    const a = s.data, r = St(s.timestamp);
    return e.jsxs("div", {
      className: "flex gap-4 group animate-in fade-in slide-in-from-right-2 duration-300",
      children: [
        e.jsx("div", {
          className: "w-9 h-9 rounded-xl bg-blue-500/5 flex items-center justify-center shrink-0 border border-blue-500/10",
          children: e.jsx(je, {
            className: "w-4.5 h-4.5 text-blue-600"
          })
        }),
        e.jsxs("div", {
          className: "space-y-1 grow pt-0.5 min-w-0",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("span", {
                  className: "text-[10px] font-black tracking-[0.15em] text-blue-600/60 uppercase",
                  children: a.userName || t
                }),
                e.jsx("span", {
                  className: "text-[9px] text-muted-foreground/40 font-medium tabular-nums",
                  children: r
                })
              ]
            }),
            e.jsx("div", {
              className: "text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap",
              children: a.content || ""
            })
          ]
        })
      ]
    });
  };
  Er = Object.freeze(Object.defineProperty({
    __proto__: null,
    SessionMainForGroupChat: Rn
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  M = Q({
    currentSession: null,
    sessionManager: null,
    contextManager: null,
    historyItems: [],
    aiProcessingState: {
      isProcessing: false,
      processingCharacters: /* @__PURE__ */ new Set(),
      startedAt: 0,
      ticksPending: 0
    },
    loadSession(s, t) {
      this.currentSession = JSON.parse(JSON.stringify(s)), this.currentSession && (this.currentSession.modeState.isRunning = false, this.currentSession.modeState.currentPhase = "paused"), this.currentSession && (this.sessionManager = new Ma(this.currentSession));
      const a = Q(t || {
        historyItems: [],
        processingItem: void 0
      });
      this.contextManager = new Ne(a), this.historyItems = [
        ...(t == null ? void 0 : t.historyItems) || []
      ];
    },
    unloadSession() {
      this.currentSession = null, this.sessionManager = null, this.contextManager = null, this.historyItems = [];
    },
    start() {
      this.currentSession && (this.currentSession.modeState.isRunning = true, this.currentSession.modeState.currentPhase = "running", this.updateSessionInDB());
    },
    pause() {
      this.currentSession && (this.currentSession.modeState.isRunning = false, this.currentSession.modeState.currentPhase = "paused", this.updateSessionInDB());
    },
    toggle() {
      var _a2;
      ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.isRunning) ? this.pause() : this.start();
    },
    getCharacterState(s) {
      var _a2;
      return (_a2 = this.currentSession) == null ? void 0 : _a2.modeState.characterStates[s];
    },
    updateCharacterState(s, t) {
      if (this.currentSession) {
        const a = this.currentSession.modeState.characterStates[s];
        a && (this.currentSession.modeState.characterStates[s] = {
          ...a,
          ...t
        });
      }
    },
    setCharacterState(s, t) {
      this.currentSession && (this.currentSession.modeState.characterStates[s] = t);
    },
    advanceTime() {
      if (!this.currentSession) return {
        dayChanged: false,
        oldDay: 0
      };
      const s = this.currentSession.modeState, t = s.gameTime.day;
      let { day: a, hour: r, minute: l } = s.gameTime;
      return l += vt, l >= 60 && (r += Math.floor(l / 60), l %= 60), r >= 24 && (a += Math.floor(r / 24), r %= 24), s.gameTime = {
        day: a,
        hour: r,
        minute: l
      }, s.tickCount++, {
        dayChanged: a !== t,
        oldDay: t
      };
    },
    addLog(s, t, a) {
      if (!(this.currentSession && this.contextManager)) return;
      let r;
      const l = Date.now(), c = Ta(this.currentSession.modeState.gameTime);
      a === "chat" ? r = {
        id: F(),
        type: "participant_message",
        timestamp: l,
        data: {
          content: s,
          name: t,
          role: "assistant",
          isCharacter: true,
          characterId: t,
          isUser: false,
          isDM: false,
          isEnv: false,
          gameTime: c
        }
      } : r = {
        id: F(),
        type: "alert",
        timestamp: l,
        orderRef: 0,
        data: {
          type: a === "trade" ? "success" : "info",
          content: s,
          source: t,
          gameTime: c,
          timestamp: l
        }
      }, this.contextManager.addHistoryItem(r), this.historyItems = [
        ...this.historyItems,
        r
      ], this.historyItems.length > 500 && (this.historyItems = this.historyItems.slice(-400)), this.saveContextItemToDB(this.currentSession.id, r).catch((x) => {
        console.error("Failed to save log to DB:", x);
      });
    },
    getSalesStand() {
      var _a2;
      return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.salesStand) ?? [];
    },
    setSalesStand(s) {
      this.currentSession && (this.currentSession.modeState.salesStand = s);
    },
    startAIProcessing(s) {
      this.aiProcessingState.isProcessing = true, this.aiProcessingState.startedAt = Date.now(), this.aiProcessingState.processingCharacters = new Set(s);
    },
    finishAIProcessing() {
      this.aiProcessingState.isProcessing = false, this.aiProcessingState.processingCharacters = /* @__PURE__ */ new Set(), this.aiProcessingState.startedAt = 0;
    },
    addPendingTick() {
      this.aiProcessingState.ticksPending++;
    },
    consumePendingTicks() {
      const s = this.aiProcessingState.ticksPending;
      return this.aiProcessingState.ticksPending = 0, s;
    },
    isAIStuck() {
      var _a2;
      if (!this.aiProcessingState.isProcessing) return false;
      const s = ((_a2 = this.currentSession) == null ? void 0 : _a2.modeConfig.settings.aiTimeoutMs) ?? 3e4;
      return Date.now() - this.aiProcessingState.startedAt > s;
    },
    async saveContextItemToDB(s, t) {
      const { SessionDB: a } = await ce(async () => {
        const { SessionDB: c } = await import("./silly-tavern-db-C6OCLe8X.js").then((x) => x.d);
        return {
          SessionDB: c
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])), r = new a(s), l = JSON.parse(JSON.stringify(t));
      await r.addContextItems([
        l
      ]);
    },
    async updateSessionInDB() {
      if (!this.currentSession) return;
      const { masterDb: s } = await ce(async () => {
        const { masterDb: a } = await import("./silly-tavern-db-C6OCLe8X.js").then((r) => r.e);
        return {
          masterDb: a
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])), t = le(this.currentSession.modeState);
      await s.sessions.update(this.currentSession.id, {
        modeState: t,
        updatedAt: Date.now()
      });
    }
  });
  function Bn({ gameTime: s, isRunning: t, onToggle: a, onSettings: r }) {
    return e.jsxs("div", {
      className: "flex items-center justify-between px-4 py-2 border-b bg-card",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-4",
          children: [
            e.jsx("h1", {
              className: "text-lg font-semibold",
              children: "\u{1F3D8}\uFE0F \u5C0F\u9547\u6A21\u5F0F"
            }),
            e.jsx("div", {
              className: "text-sm text-muted-foreground",
              children: La(s)
            })
          ]
        }),
        e.jsx("div", {
          className: "flex items-center gap-2",
          children: e.jsx(w, {
            type: "button",
            variant: t ? "default" : "outline",
            size: "sm",
            onClick: a,
            children: t ? e.jsxs(e.Fragment, {
              children: [
                e.jsx(ht, {
                  className: "w-4 h-4 mr-1"
                }),
                "\u6682\u505C"
              ]
            }) : e.jsxs(e.Fragment, {
              children: [
                e.jsx(Ts, {
                  className: "w-4 h-4 mr-1"
                }),
                "\u5F00\u59CB"
              ]
            })
          })
        }),
        e.jsx("div", {
          className: "flex items-center gap-2",
          children: e.jsx(w, {
            type: "button",
            variant: "ghost",
            size: "icon",
            onClick: r,
            children: e.jsx(ze, {
              className: "w-4 h-4"
            })
          })
        })
      ]
    });
  }
  function Un({ config: s, gridSize: t }) {
    const a = {
      position: "absolute",
      left: s.x * t,
      top: s.y * t,
      width: s.w * t,
      height: s.h * t,
      backgroundColor: s.color,
      opacity: 0.6
    };
    return e.jsx("div", {
      className: "rounded border border-black/10 dark:border-white/10 flex items-center justify-center text-center pointer-events-none",
      style: a,
      title: s.info || s.label,
      children: e.jsx("span", {
        className: "text-xs font-medium text-black/70 dark:text-white/70 px-1 leading-tight",
        children: s.label
      })
    });
  }
  const zn = 5e3;
  function Gn({ character: s, gridSize: t, isSelected: a, onClick: r }) {
    var _a2;
    const l = t * 0.8, c = (t - l) / 2, x = s.visualX ?? s.gridX, p = s.visualY ?? s.gridY, d = {
      position: "absolute",
      left: x * t + c,
      top: p * t + c,
      width: l,
      height: l,
      backgroundColor: s.color,
      zIndex: a ? 10 : 1
    }, i = s.taskTimer > 0, o = Aa, n = i ? Math.max(0, Math.min(100, (o - s.taskTimer) / o * 100)) : 0, m = s.lastDialogue && Date.now() - s.lastDialogue.timestamp < zn, u = ((_a2 = s.lastDialogue) == null ? void 0 : _a2.content) ? s.lastDialogue.content.length > 20 ? `${s.lastDialogue.content.slice(0, 20)}...` : s.lastDialogue.content : "";
    return e.jsxs("div", {
      style: d,
      className: "flex flex-col items-center justify-center pointer-events-none",
      children: [
        m && e.jsxs("div", {
          className: "absolute -top-12 left-1/2 -translate-x-1/2 max-w-32 px-2 py-1 bg-white dark:bg-gray-800 text-xs text-gray-800 dark:text-gray-200 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 whitespace-nowrap overflow-hidden text-ellipsis z-20",
          children: [
            e.jsx("div", {
              className: "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"
            }),
            '"',
            u,
            '"'
          ]
        }),
        i && e.jsx("div", {
          className: "absolute -top-3 w-8 h-1 bg-gray-200 rounded-full overflow-hidden border border-black/10",
          children: e.jsx("div", {
            className: "h-full bg-blue-500 transition-all duration-300 ease-linear",
            style: {
              width: `${n}%`
            }
          })
        }),
        s.thought && !i && !m && e.jsx("div", {
          className: "absolute -top-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
        }),
        e.jsx("button", {
          type: "button",
          className: `w-full h-full rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform pointer-events-auto shadow-sm border border-white/20 ${a ? "ring-2 ring-primary ring-offset-2" : ""}`,
          style: {
            backgroundColor: s.color
          },
          onClick: r,
          title: `${s.name}: ${s.status}`,
          children: s.name.charAt(0)
        }),
        e.jsx("span", {
          className: "absolute -bottom-4 text-[10px] whitespace-nowrap bg-black/50 text-white px-1 rounded backdrop-blur-sm",
          children: s.name
        })
      ]
    });
  }
  function Hn({ characterStates: s, selectedCharacterId: t, onSelectCharacter: a }) {
    const r = he * Ea, l = g.useMemo(() => Object.entries(Pa).map(([p, d]) => e.jsx(Un, {
      locationKey: p,
      config: d,
      gridSize: he
    }, p)), []), c = g.useMemo(() => s.map((p) => e.jsx(Gn, {
      character: p,
      gridSize: he,
      isSelected: p.id === t,
      onClick: () => a(p.id)
    }, p.id)), [
      s,
      t,
      a
    ]), x = g.useMemo(() => s.map((p) => {
      if (!p.currentPath || p.currentPath.length < 2) return null;
      const d = p.currentPath.map(([i, o]) => `${i * he + he / 2},${o * he + he / 2}`).join(" ");
      return e.jsx("polyline", {
        points: d,
        fill: "none",
        stroke: p.color,
        strokeWidth: "2",
        strokeDasharray: "4 2",
        opacity: "0.5"
      }, `path-${p.id}`);
    }), [
      s
    ]);
    return e.jsxs("div", {
      className: "relative bg-amber-50 dark:bg-amber-950/20 rounded-lg border overflow-hidden",
      style: {
        width: r,
        height: r,
        minWidth: r,
        minHeight: r
      },
      children: [
        e.jsx("div", {
          className: "absolute inset-0 pointer-events-none",
          style: {
            backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
            backgroundSize: `${he}px ${he}px`
          }
        }),
        e.jsx("svg", {
          className: "absolute inset-0 pointer-events-none",
          width: r,
          height: r,
          children: x
        }),
        l,
        c
      ]
    });
  }
  function Jn({ character: s, onOpenDiary: t }) {
    if (!s) return e.jsx("div", {
      className: "w-72 border-l bg-card p-4",
      children: e.jsx("p", {
        className: "text-muted-foreground text-sm",
        children: "\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u67E5\u770B\u8BE6\u60C5"
      })
    });
    const a = s.stamina / s.maxStamina * 100, r = s.energy / s.maxEnergy * 100, l = s.happiness;
    return e.jsxs("div", {
      className: "w-72 border-l bg-card overflow-y-auto",
      children: [
        e.jsx("div", {
          className: "p-4 border-b",
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("div", {
                className: "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg",
                style: {
                  backgroundColor: s.color
                },
                children: s.name.charAt(0)
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsx("h2", {
                    className: "font-semibold truncate",
                    children: s.name
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground truncate",
                    children: s.personality
                  })
                ]
              })
            ]
          })
        }),
        e.jsxs("div", {
          className: "p-4 border-b space-y-3",
          children: [
            e.jsx("h3", {
              className: "text-sm font-medium text-muted-foreground",
              children: "\u72B6\u6001"
            }),
            e.jsxs("div", {
              className: "space-y-1",
              children: [
                e.jsxs("div", {
                  className: "flex justify-between text-sm",
                  children: [
                    e.jsx("span", {
                      children: "\u4F53\u529B"
                    }),
                    e.jsxs("span", {
                      children: [
                        s.stamina,
                        "/",
                        s.maxStamina
                      ]
                    })
                  ]
                }),
                e.jsx("div", {
                  className: "h-2 bg-muted rounded-full overflow-hidden",
                  children: e.jsx("div", {
                    className: "h-full bg-green-500 transition-all",
                    style: {
                      width: `${a}%`
                    }
                  })
                })
              ]
            }),
            e.jsxs("div", {
              className: "space-y-1",
              children: [
                e.jsxs("div", {
                  className: "flex justify-between text-sm",
                  children: [
                    e.jsx("span", {
                      children: "\u6D3B\u529B"
                    }),
                    e.jsxs("span", {
                      children: [
                        s.energy,
                        "/",
                        s.maxEnergy
                      ]
                    })
                  ]
                }),
                e.jsx("div", {
                  className: "h-2 bg-muted rounded-full overflow-hidden",
                  children: e.jsx("div", {
                    className: "h-full bg-blue-500 transition-all",
                    style: {
                      width: `${r}%`
                    }
                  })
                })
              ]
            }),
            e.jsxs("div", {
              className: "space-y-1",
              children: [
                e.jsxs("div", {
                  className: "flex justify-between text-sm",
                  children: [
                    e.jsx("span", {
                      children: "\u6109\u60A6"
                    }),
                    e.jsxs("span", {
                      children: [
                        s.happiness,
                        "/100"
                      ]
                    })
                  ]
                }),
                e.jsx("div", {
                  className: "h-2 bg-muted rounded-full overflow-hidden",
                  children: e.jsx("div", {
                    className: "h-full bg-yellow-500 transition-all",
                    style: {
                      width: `${l}%`
                    }
                  })
                })
              ]
            }),
            e.jsxs("div", {
              className: "flex justify-between text-sm",
              children: [
                e.jsx("span", {
                  children: "\u{1F4B0} \u91D1\u94B1"
                }),
                e.jsxs("span", {
                  className: "font-medium",
                  children: [
                    "$",
                    s.money
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "p-4 border-b space-y-2",
          children: [
            e.jsx("h3", {
              className: "text-sm font-medium text-muted-foreground",
              children: "\u5F53\u524D\u6D3B\u52A8"
            }),
            e.jsxs("div", {
              className: "text-sm",
              children: [
                e.jsxs("p", {
                  children: [
                    e.jsx("span", {
                      className: "text-muted-foreground",
                      children: "\u72B6\u6001:"
                    }),
                    " ",
                    s.status
                  ]
                }),
                e.jsxs("p", {
                  children: [
                    e.jsx("span", {
                      className: "text-muted-foreground",
                      children: "\u4F4D\u7F6E:"
                    }),
                    " ",
                    s.locationName
                  ]
                }),
                e.jsxs("p", {
                  children: [
                    e.jsx("span", {
                      className: "text-muted-foreground",
                      children: "\u4EFB\u52A1:"
                    }),
                    " ",
                    s.taskName
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "p-4 border-b space-y-2",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsx("h3", {
                  className: "text-sm font-medium text-muted-foreground",
                  children: "\u5185\u5FC3\u60F3\u6CD5"
                }),
                t && e.jsxs(w, {
                  variant: "ghost",
                  size: "sm",
                  className: "h-6 px-2 text-muted-foreground hover:text-foreground",
                  onClick: t,
                  children: [
                    e.jsx(Kt, {
                      className: "w-3 h-3 mr-1"
                    }),
                    "\u65E5\u8BB0"
                  ]
                })
              ]
            }),
            e.jsxs("p", {
              className: "text-sm italic text-muted-foreground",
              children: [
                '"',
                s.thought || "...",
                '"'
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "p-4 border-b space-y-2",
          children: [
            e.jsx("h3", {
              className: "text-sm font-medium text-muted-foreground",
              children: "\u5E93\u5B58"
            }),
            Object.keys(s.inventory).length === 0 ? e.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "(\u7A7A)"
            }) : e.jsx("div", {
              className: "space-y-1",
              children: Object.entries(s.inventory).map(([c, x]) => e.jsxs("div", {
                className: "flex justify-between text-sm",
                children: [
                  e.jsx("span", {
                    children: c
                  }),
                  e.jsxs("span", {
                    children: [
                      "\xD7",
                      x
                    ]
                  })
                ]
              }, c))
            })
          ]
        }),
        e.jsxs("div", {
          className: "p-4 space-y-2",
          children: [
            e.jsxs("h3", {
              className: "text-sm font-medium text-muted-foreground",
              children: [
                "\u5F85\u529E\u4E8B\u9879 (",
                s.todoList.filter((c) => c.status === "pending").length,
                ")"
              ]
            }),
            s.todoList.length === 0 ? e.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "(\u65E0)"
            }) : e.jsx("div", {
              className: "space-y-1 max-h-32 overflow-y-auto",
              children: s.todoList.filter((c) => c.status !== "completed" && c.status !== "cancelled").slice(0, 5).map((c) => e.jsxs("div", {
                className: `text-xs p-1.5 rounded ${c.status === "in-progress" ? "bg-primary/10 text-primary" : "bg-muted"}`,
                children: [
                  e.jsxs("span", {
                    className: "text-muted-foreground",
                    children: [
                      "[",
                      c.type,
                      "]"
                    ]
                  }),
                  " ",
                  c.content
                ]
              }, c.id))
            })
          ]
        })
      ]
    });
  }
  function Vn(s, t) {
    return s === "chat" ? "text-blue-600 dark:text-blue-400 font-semibold" : t.includes("\u8BA1\u5212") || t.includes("\u51B3\u5B9A") ? "text-purple-600 dark:text-purple-400" : t.includes("\u524D\u5F80") || t.includes("\u79FB\u52A8") ? "text-amber-600 dark:text-amber-400" : t.includes("\u5B8C\u6210") || t.includes("\u5403\u4E86") || t.includes("\u559D\u4E86") || t.includes("\u7761\u9192") ? "text-emerald-600 dark:text-emerald-400" : t.includes("\u53D6\u6D88") || t.includes("\u5931\u8D25") || t.includes("\u65E0\u6CD5") || t.includes("\u6655\u5012") ? "text-red-600 dark:text-red-400" : t.includes("\u5F00\u59CB") ? "text-cyan-600 dark:text-cyan-400" : "text-muted-foreground";
  }
  function Yn({ contextItems: s, selectedCharacter: t }) {
    const a = g.useRef(null);
    g.useEffect(() => {
      a.current && (a.current.scrollTop = a.current.scrollHeight);
    }, [
      s.length
    ]);
    const l = g.useMemo(() => s.filter((c) => !(c.hidden || c.deleted)).map((c) => c.type === "alert" ? {
      id: c.id,
      time: c.data.gameTime || (c.timestamp ? new Date(c.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }) : ""),
      source: "\u7CFB\u7EDF",
      content: c.data.content,
      type: "sys"
    } : c.type === "participant_message" || c.type === "character_message" ? {
      id: c.id,
      time: c.data.gameTime || (c.timestamp ? new Date(c.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }) : ""),
      source: c.data.name || "\u672A\u77E5",
      content: c.data.content,
      type: "chat"
    } : null).filter((c) => c !== null).filter((c) => c.type === "sys" || !t ? true : c.source.includes(t.name) || c.content.includes(t.name)), [
      s,
      t
    ]).slice(-50);
    return e.jsxs("div", {
      className: "h-40 border rounded-lg bg-card flex flex-col",
      children: [
        e.jsxs("div", {
          className: "px-3 py-1.5 border-b bg-muted/50 flex items-center justify-between",
          children: [
            e.jsx("span", {
              className: "text-sm font-medium",
              children: "\u65E5\u5FD7"
            }),
            e.jsx("span", {
              className: "text-xs text-muted-foreground",
              children: t ? `\u7B5B\u9009: ${t.name}` : "\u5168\u90E8"
            })
          ]
        }),
        e.jsx("div", {
          ref: a,
          className: "flex-1 overflow-y-auto p-2 space-y-1 text-xs font-mono",
          children: l.length === 0 ? e.jsx("p", {
            className: "text-muted-foreground text-center py-4",
            children: "\u6682\u65E0\u65E5\u5FD7"
          }) : l.map((c) => e.jsxs("div", {
            className: `flex gap-2 ${Vn(c.type, c.content)}`,
            children: [
              e.jsxs("span", {
                className: "opacity-70 shrink-0",
                children: [
                  "[",
                  c.time,
                  "]"
                ]
              }),
              e.jsxs("span", {
                className: "font-medium shrink-0",
                children: [
                  c.source,
                  ":"
                ]
              }),
              e.jsx("span", {
                className: "break-all",
                children: c.content
              })
            ]
          }, c.id))
        })
      ]
    });
  }
  function Kn(s) {
    return s.hour === Ha && s.minute >= Js && s.minute < Js + vt;
  }
  function Xn() {
    const { callLLMStream: s } = ms(), t = g.useRef({
      pendingThinking: /* @__PURE__ */ new Set(),
      pendingDialogue: /* @__PURE__ */ new Set()
    }), a = g.useCallback(() => M.currentSession, []), r = g.useCallback(async (n, m) => {
      let u = "";
      return await s(n.map((h) => ({
        role: h.role,
        content: h.content,
        id: Math.random().toString(36).substring(7)
      })), (h, N) => {
        u = N, m && M.updateCharacterState(m, {
          thought: `Thinking... ${N.slice(-50)}`
        });
      }), u;
    }, [
      s
    ]), l = g.useCallback(async (n, m) => {
      const u = await Oa(n, m, r);
      u && (M.updateCharacterState(n.id, {
        dailyEntry: u.diary,
        dailyWisdom: u.wisdom,
        wroteDiaryToday: true
      }), M.addLog(`${n.name} \u5199\u5B8C\u4E86\u4ECA\u65E5\u65E5\u8BB0`, "\u7CFB\u7EDF", "sys"));
    }, [
      r
    ]), c = g.useCallback(async (n, m, u) => {
      var _a2;
      const h = Bs(n, u);
      if (!h) return;
      console.log(`[ThinkingSystem] ${n.name} \u89E6\u53D1\u601D\u8003: ${h.type}`);
      const N = Object.values(((_a2 = M.currentSession) == null ? void 0 : _a2.modeState.characterStates) || {}), j = await Ra(n, h, m, N, (S) => r(S, n.id));
      let f;
      j ? f = $a(j) || Us(n) : f = Us(n);
      const y = Fa(n, f, u);
      if (M.setCharacterState(n.id, y), f.addTodos.length > 0) {
        const S = f.addTodos.map((b) => b.content).join("\u3001");
        M.addLog(`${n.name} \u8BA1\u5212: ${S}`, "\u7CFB\u7EDF", "sys");
      }
    }, [
      r
    ]), x = g.useCallback(async (n, m, u, h) => {
      let N = m.relatedCharacterId, j = null;
      if (m.type === "social" && !N) {
        const { findChatPartner: S } = await ce(async () => {
          const { findChatPartner: b } = await import("./silly-tavern-engine-D0R6Sr8P.js").then((v) => v.U);
          return {
            findChatPartner: b
          };
        }, __vite__mapDeps([22,23,4,3,5,6,9,10,11,12,13,14,15,1,2,16,17,18,19,20,21,0,7,8]));
        if (j = S(n, u), !j) {
          M.updateCharacterState(n.id, Qe(n, m.id)), M.addLog(`${n.name} \u60F3\u627E\u4EBA\u804A\u5929\uFF0C\u4F46\u5468\u56F4\u6CA1\u6709\u4EBA`, "\u7CFB\u7EDF", "sys");
          return;
        }
        N = j.id, console.log(`[AIDecision] ${n.name} \u4E3B\u52A8\u627E ${j.name} \u804A\u5929`);
      }
      if (!N) {
        M.updateCharacterState(n.id, Qe(n, m.id));
        return;
      }
      if (j || (j = u.find((S) => S.id === N)), !j) {
        M.updateCharacterState(n.id, Qe(n, m.id));
        return;
      }
      const f = m.type === "social", y = await Ba(n, N, j.name, f, r);
      if (y && y.dialogue) {
        const S = f ? "\u5BF9" : "\u56DE\u5E94";
        M.addLog(`${n.name} ${S} ${j.name} \u8BF4: "${y.dialogue}"`, n.name, "chat");
        const b = [
          ...n.history,
          {
            role: "assistant",
            content: `[${S}${j.name}\u8BF4] ${y.dialogue}`
          }
        ];
        let v = {
          ...n,
          history: b,
          thought: y.innerThought || n.thought,
          lastDialogue: {
            content: y.dialogue,
            timestamp: Date.now()
          }
        };
        if (v = zs(v, m.id), y.endConversation && (v = Ua(v, N)), M.setCharacterState(n.id, v), j.aiEnabled) {
          const C = za(j, n.id, n.name, y.dialogue, h);
          M.setCharacterState(N, C.updatedChar), C.shouldRespond && console.log(`[AIDecision] ${j.name} \u51B3\u5B9A\u56DE\u5E94 ${n.name} \u7684\u5BF9\u8BDD`);
        }
      } else M.updateCharacterState(n.id, Qe(n, m.id)), M.addLog(`${n.name} \u4F3C\u4E4E\u4E0D\u77E5\u9053\u8BE5\u5BF9 ${j.name} \u8BF4\u4EC0\u4E48...`, "\u7CFB\u7EDF", "sys");
    }, [
      r
    ]), p = g.useCallback(async (n, m, u, h, N) => {
      if (n.currentPath && n.currentPath.length > 1 || n.taskTimer > 0) return;
      const j = Gs(n);
      if (j && j.status === "in-progress") {
        if (j.type === "respond" || j.type === "social") {
          await x(n, j, u, N);
          return;
        }
        if (j.type === "work" || j.type === "rest") {
          const S = Hs(n, j);
          M.updateCharacterState(n.id, {
            ...S.updatedChar,
            history: [
              ...n.history,
              ...S.historyEntries
            ]
          });
          for (const b of S.logs) M.addLog(b.content, b.source, b.type);
          return;
        }
        M.updateCharacterState(n.id, zs(n, j.id));
        return;
      }
      const f = Ga(n, N);
      if (!f) return;
      const y = Hs(n, f);
      M.updateCharacterState(n.id, {
        ...y.updatedChar,
        history: [
          ...n.history,
          ...y.historyEntries
        ]
      });
      for (const S of y.logs) M.addLog(S.content, S.source, S.type);
    }, [
      x
    ]), d = g.useCallback((n) => {
      var _a2;
      return n.status === "\u6655\u5012" || ((_a2 = n.faintedState) == null ? void 0 : _a2.isFainted) ? "fainted" : n.status.includes("\u7761\u89C9") || n.status.includes("\u4F11\u606F\u4E2D") ? "sleeping" : n.taskTimer > 0 ? "working" : "idle";
    }, []), i = g.useCallback(async (n) => {
      const m = a();
      if (!m || !m.modeConfig.settings.aiEnabled) return false;
      const h = m.modeState.characterStates[n];
      if (!(h && h.aiEnabled) || t.current.pendingThinking.has(n)) return false;
      const N = d(h);
      if (N === "sleeping" || N === "fainted") return false;
      let j = false;
      try {
        const f = m.modeState.gameTime, y = m.modeState.tickCount;
        if (Kn(f) && !h.wroteDiaryToday) return await l(h, f), true;
        if (Bs(h, y) !== null) {
          t.current.pendingThinking.add(n);
          try {
            await c(h, f, y), j = true;
          } finally {
            t.current.pendingThinking.delete(n);
          }
        }
        const b = a(), v = b == null ? void 0 : b.modeState.characterStates[n], C = Object.values((b == null ? void 0 : b.modeState.characterStates) || {});
        if (v) {
          const $ = Gs(v), V = $ && ($.type === "social" || $.type === "respond");
          await p(v, f, C, (b == null ? void 0 : b.modeState.salesStand) || [], y), V && (j = true);
        }
      } catch (f) {
        console.error(`AI processing error for ${h.name}:`, f), M.updateCharacterState(h.id, {
          status: "AI Error"
        });
      }
      return j;
    }, [
      a,
      d,
      l,
      c,
      p
    ]);
    return {
      processAllAI: g.useCallback(async () => {
        const n = a();
        if (!(n && n.modeConfig.settings.aiEnabled)) return false;
        const m = Object.values(n.modeState.characterStates), u = 3;
        let h = false;
        const N = [];
        for (let j = 0; j < m.length; j += u) N.push(m.slice(j, j + u));
        return await N.reduce(async (j, f) => {
          await j;
          const y = f.map((b) => i(b.id));
          (await Promise.all(y)).some((b) => b) && (h = true);
        }, Promise.resolve()), h;
      }, [
        a,
        i
      ])
    };
  }
  function Wn(s, t) {
    M.addLog(`\u7B2C ${s} \u5929\u7ED3\u675F\uFF0C\u65B0\u7684\u4E00\u5929\u5F00\u59CB\u4E86\uFF01`, "\u7CFB\u7EDF", "sys");
    for (const a of Object.keys(t.modeState.characterStates)) {
      const r = t.modeState.characterStates[a];
      r.wroteDiaryToday = false, r.dailyEntry = null, r.dailyWisdom = null, r.dailyShopVisit = false, r.dailySalesStandVisit = false, r.conversationState.totalTurnsToday = 0;
    }
  }
  function qn() {
    var _a2;
    const s = ue(M), t = g.useRef(null), a = g.useRef(false), { processAllAI: r } = Xn(), l = g.useRef(r);
    l.current = r;
    const c = ((_a2 = s.currentSession) == null ? void 0 : _a2.modeState.isRunning) ?? false, x = g.useCallback(async () => {
      if (!M.currentSession) return false;
      const d = M.currentSession, { dayChanged: i, oldDay: o } = M.advanceTime();
      i && Wn(o, d);
      const n = Object.keys(d.modeState.characterStates), m = Object.values(d.modeState.characterStates), u = d.modeState.salesStand, h = d.modeState.gameTime, N = d.modeState.tickCount;
      for (const f of n) {
        const y = d.modeState.characterStates[f], S = Ja(y, h, (b, v, C) => M.addLog(b, v, C), m, u, N);
        M.setCharacterState(f, S);
      }
      M.startAIProcessing(n);
      let j = false;
      try {
        j = await l.current();
      } finally {
        M.finishAIProcessing();
      }
      return d.modeState.tickCount % 10 === 0 && await M.updateSessionInDB(), j;
    }, []), p = g.useCallback(async () => {
      var _a3, _b;
      if (a.current) {
        const o = (_a3 = M.currentSession) == null ? void 0 : _a3.modeConfig.settings;
        if (o == null ? void 0 : o.waitForAICompletion) {
          M.addPendingTick();
          const n = o.maxAIWaitTicks ?? 3;
          M.aiProcessingState.ticksPending >= n && console.warn("[SmallTown] AI \u5904\u7406\u65F6\u95F4\u8FC7\u957F\uFF0C\u5DF2\u7D2F\u79EF", n, "\u4E2A tick"), M.isAIStuck() && (console.error("[SmallTown] AI \u5904\u7406\u8D85\u65F6\uFF0C\u53EF\u80FD\u5361\u4F4F\u4E86"), M.addLog("AI \u5904\u7406\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5", "\u7CFB\u7EDF", "sys"));
        }
        return;
      }
      a.current = true;
      let d = false;
      try {
        d = await x();
        const i = M.consumePendingTicks();
        if (i > 0) {
          console.log(`[SmallTown] \u5904\u7406\u7D2F\u79EF\u7684 ${i} \u4E2A tick`);
          for (let o = 0; o < i; o++) await x() && (d = true);
        }
      } catch (i) {
        console.error("[SmallTown] Tick error:", i);
      } finally {
        a.current = false;
      }
      if (t.current) {
        const o = (_b = M.currentSession) == null ? void 0 : _b.modeConfig.settings, n = (o == null ? void 0 : o.fastTickInterval) ?? 500, m = (o == null ? void 0 : o.normalTickInterval) ?? 5e3, u = d ? m : n;
        t.current = setTimeout(p, u);
      }
    }, [
      x
    ]);
    return g.useEffect(() => {
      if (c) {
        if (t.current) return;
        console.log("[SmallTown] Game loop started"), t.current = setTimeout(p, 0);
      } else t.current && (clearTimeout(t.current), t.current = null, console.log("[SmallTown] Game loop stopped"));
      return () => {
        t.current && (clearTimeout(t.current), t.current = null);
      };
    }, [
      c,
      p
    ]), {
      isRunning: c,
      aiProcessingState: s.aiProcessingState
    };
  }
  function Qn() {
    const s = g.useRef(void 0), t = g.useRef(void 0), a = (r) => {
      if (t.current !== void 0) {
        const l = (r - t.current) / 1e3, c = M.currentSession;
        if (c && c.modeState.isRunning) {
          const x = c.modeState.characterStates;
          Object.keys(x).forEach((p) => {
            const d = x[p];
            if (d.currentPath && d.currentPath.length > 1) {
              (d.visualX === void 0 || Number.isNaN(d.visualX)) && (d.visualX = d.gridX), (d.visualY === void 0 || Number.isNaN(d.visualY)) && (d.visualY = d.gridY);
              const o = Va(d.visualX, d.visualY, d.currentPath, 4, l);
              !Number.isNaN(o.x) && !Number.isNaN(o.y) && (d.visualX = o.x, d.visualY = o.y), o.reachedNextTile && (d.currentPath.shift(), d.gridX = Math.round(o.x), d.gridY = Math.round(o.y)), o.completed && (d.currentPath = void 0, d.visualX = d.gridX, d.visualY = d.gridY, d.targetLocationName && (d.locationName = d.targetLocationName, d.targetLocationName = void 0));
            } else if ((d.visualX === void 0 || Number.isNaN(d.visualX)) && (d.visualX = d.gridX), (d.visualY === void 0 || Number.isNaN(d.visualY)) && (d.visualY = d.gridY), Math.abs(d.visualX - d.gridX) + Math.abs(d.visualY - d.gridY) < 0.05) d.visualX = d.gridX, d.visualY = d.gridY;
            else {
              const o = 10 * l;
              d.visualX += (d.gridX - d.visualX) * o, d.visualY += (d.gridY - d.visualY) * o;
            }
          });
        }
      }
      t.current = r, s.current = requestAnimationFrame(a);
    };
    g.useEffect(() => (s.current = requestAnimationFrame(a), () => {
      s.current && cancelAnimationFrame(s.current);
    }), []);
  }
  function Zn({ open: s, onOpenChange: t, settings: a, onSave: r }) {
    const [l, c] = g.useState(a);
    g.useEffect(() => {
      s && c(a);
    }, [
      s,
      a
    ]);
    const x = () => {
      r(l), t(false);
    };
    return e.jsx(Me, {
      open: s,
      onOpenChange: t,
      children: e.jsxs(Le, {
        className: "sm:max-w-[425px]",
        children: [
          e.jsxs(Ae, {
            children: [
              e.jsx(be, {
                children: "\u5C0F\u9547\u8BBE\u7F6E"
              }),
              e.jsx(Ve, {
                children: "\u8C03\u6574\u6E38\u620F\u8FD0\u884C\u53C2\u6570\u548C AI \u884C\u4E3A\u3002"
              })
            ]
          }),
          e.jsxs("div", {
            className: "grid gap-4 py-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs(k, {
                    htmlFor: "ai-enabled",
                    className: "flex flex-col gap-1",
                    children: [
                      e.jsx("span", {
                        children: "\u542F\u7528 AI \u51B3\u7B56"
                      }),
                      e.jsx("span", {
                        className: "font-normal text-xs text-muted-foreground",
                        children: "\u5173\u95ED\u540E\u89D2\u8272\u5C06\u505C\u6B62\u81EA\u4E3B\u601D\u8003"
                      })
                    ]
                  }),
                  e.jsx(De, {
                    id: "ai-enabled",
                    checked: l.aiEnabled,
                    onCheckedChange: (p) => c((d) => ({
                      ...d,
                      aiEnabled: p
                    }))
                  })
                ]
              }),
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs(k, {
                    htmlFor: "wait-ai",
                    className: "flex flex-col gap-1",
                    children: [
                      e.jsx("span", {
                        children: "\u7B49\u5F85 AI \u5B8C\u6210 (\u5F3A\u4E00\u81F4\u6027)"
                      }),
                      e.jsx("span", {
                        className: "font-normal text-xs text-muted-foreground",
                        children: "Tick \u53EA\u6709\u5728 AI \u601D\u8003\u5B8C\u540E\u624D\u7EE7\u7EED"
                      })
                    ]
                  }),
                  e.jsx(De, {
                    id: "wait-ai",
                    checked: l.waitForAICompletion,
                    onCheckedChange: (p) => c((d) => ({
                      ...d,
                      waitForAICompletion: p
                    }))
                  })
                ]
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsxs(k, {
                    children: [
                      "\u5FEB\u901F Tick (\u65E0 AI \u65F6) - ",
                      l.fastTickInterval,
                      "ms"
                    ]
                  }),
                  e.jsx(ys, {
                    min: 100,
                    max: 2e3,
                    step: 100,
                    value: [
                      l.fastTickInterval
                    ],
                    onValueChange: ([p]) => c((d) => ({
                      ...d,
                      fastTickInterval: p
                    }))
                  })
                ]
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsxs(k, {
                    children: [
                      "\u6B63\u5E38 Tick (\u6709 AI \u65F6) - ",
                      l.normalTickInterval,
                      "ms"
                    ]
                  }),
                  e.jsx(ys, {
                    min: 1e3,
                    max: 1e4,
                    step: 500,
                    value: [
                      l.normalTickInterval
                    ],
                    onValueChange: ([p]) => c((d) => ({
                      ...d,
                      normalTickInterval: p
                    }))
                  })
                ]
              }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(k, {
                        children: "\u5DE5\u4F5C\u65F6\u957F (Tick)"
                      }),
                      e.jsx(E, {
                        type: "number",
                        value: l.workingInterval,
                        onChange: (p) => c((d) => ({
                          ...d,
                          workingInterval: Number(p.target.value)
                        }))
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(k, {
                        children: "\u7A7A\u95F2\u65F6\u957F (Tick)"
                      }),
                      e.jsx(E, {
                        type: "number",
                        value: l.idleInterval,
                        onChange: (p) => c((d) => ({
                          ...d,
                          idleInterval: Number(p.target.value)
                        }))
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          e.jsxs(Ls, {
            children: [
              e.jsx(w, {
                variant: "outline",
                onClick: () => t(false),
                children: "\u53D6\u6D88"
              }),
              e.jsx(w, {
                onClick: x,
                children: "\u4FDD\u5B58\u66F4\u6539"
              })
            ]
          })
        ]
      })
    });
  }
  function er({ open: s, onOpenChange: t, character: a }) {
    if (!a) return null;
    const r = [
      ...a.dailyLog
    ].sort((l, c) => c.day - l.day);
    return e.jsx(Me, {
      open: s,
      onOpenChange: t,
      children: e.jsxs(Le, {
        className: "sm:max-w-[600px] max-h-[80vh] flex flex-col",
        children: [
          e.jsxs(Ae, {
            children: [
              e.jsxs(be, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx("div", {
                    className: "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold",
                    style: {
                      backgroundColor: a.color
                    },
                    children: a.name.charAt(0)
                  }),
                  a.name,
                  " \u7684\u65E5\u8BB0\u672C"
                ]
              }),
              e.jsx(Ve, {
                children: "\u8BB0\u5F55\u4E86\u6BCF\u5929\u53D1\u751F\u7684\u4E8B\u60C5\u548C\u611F\u609F\u3002"
              })
            ]
          }),
          e.jsx(fa, {
            className: "flex-1 pr-4 -mr-4",
            children: e.jsx("div", {
              className: "space-y-6 py-4",
              children: r.length === 0 ? e.jsx("div", {
                className: "text-center text-muted-foreground py-10",
                children: "\u8FD8\u6CA1\u6709\u5199\u8FC7\u65E5\u8BB0..."
              }) : r.map((l) => e.jsxs("div", {
                className: "border rounded-lg p-4 bg-card/50 space-y-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between border-b pb-2",
                    children: [
                      e.jsxs("h3", {
                        className: "font-semibold",
                        children: [
                          "\u7B2C ",
                          l.day,
                          " \u5929"
                        ]
                      }),
                      e.jsxs("span", {
                        className: "text-xs text-muted-foreground bg-muted px-2 py-1 rounded",
                        children: [
                          "\u7B56\u7565: ",
                          l.strategy
                        ]
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      e.jsx("h4", {
                        className: "text-sm font-medium text-muted-foreground",
                        children: "\u4ECA\u65E5\u8BB0\u4E8B"
                      }),
                      e.jsx("p", {
                        className: "text-sm leading-relaxed whitespace-pre-wrap",
                        children: l.dailyEntry
                      })
                    ]
                  }),
                  l.dailyWisdom && e.jsxs("div", {
                    className: "space-y-1 bg-primary/5 p-3 rounded border border-primary/10",
                    children: [
                      e.jsx("h4", {
                        className: "text-xs font-medium text-primary",
                        children: "\u6BCF\u65E5\u611F\u609F"
                      }),
                      e.jsxs("p", {
                        className: "text-sm italic text-muted-foreground",
                        children: [
                          '"',
                          l.dailyWisdom,
                          '"'
                        ]
                      })
                    ]
                  }),
                  e.jsxs("div", {
                    className: "pt-2 border-t flex gap-4 text-xs text-muted-foreground",
                    children: [
                      e.jsxs("span", {
                        children: [
                          "\u{1F4B0} $",
                          l.endStatus.money
                        ]
                      }),
                      e.jsxs("span", {
                        children: [
                          "\u26A1\uFE0F ",
                          l.endStatus.stamina
                        ]
                      }),
                      e.jsxs("span", {
                        children: [
                          "\u{1F604} ",
                          l.endStatus.happiness
                        ]
                      })
                    ]
                  })
                ]
              }, l.day))
            })
          })
        ]
      })
    });
  }
  function sr({ sessionId: s }) {
    const t = ue(M), [a, r] = g.useState(null), [l, c] = g.useState(false), [x, p] = g.useState(false), d = g.useCallback((h) => {
      M.currentSession && (M.currentSession.modeConfig.settings = h, M.updateSessionInDB());
    }, []), { isRunning: i } = qn();
    Qn();
    const o = g.useCallback((h) => {
      r(h);
    }, []), n = t.currentSession, m = n ? Object.values(n.modeState.characterStates) : [];
    if (g.useEffect(() => {
      !a && m.length > 0 && r(m[0].id);
    }, [
      m,
      a
    ]), !n) return e.jsx("div", {
      className: "flex items-center justify-center h-full",
      children: e.jsx("p", {
        className: "text-muted-foreground",
        children: "\u52A0\u8F7D\u4E2D..."
      })
    });
    const u = a ? n.modeState.characterStates[a] : null;
    return e.jsxs("div", {
      className: "flex flex-col h-full bg-background",
      children: [
        e.jsx(Bn, {
          gameTime: n.modeState.gameTime,
          isRunning: i,
          onToggle: () => M.toggle(),
          onSettings: () => c(true)
        }),
        e.jsxs("div", {
          className: "flex-1 flex overflow-hidden",
          children: [
            e.jsxs("div", {
              className: "flex-1 flex flex-col p-4 gap-2 overflow-hidden",
              children: [
                e.jsx("div", {
                  className: "flex-1 overflow-auto",
                  children: e.jsx(Hn, {
                    characterStates: m,
                    selectedCharacterId: a,
                    onSelectCharacter: o
                  })
                }),
                e.jsx(Yn, {
                  contextItems: t.historyItems,
                  selectedCharacter: u || null
                })
              ]
            }),
            e.jsx(Jn, {
              character: u || null,
              gameTime: n.modeState.gameTime,
              onOpenDiary: () => p(true)
            })
          ]
        }),
        n && e.jsx(Zn, {
          open: l,
          onOpenChange: c,
          settings: n.modeConfig.settings,
          onSave: d
        }),
        e.jsx(er, {
          open: x,
          onOpenChange: p,
          character: u || null
        })
      ]
    });
  }
  function tr({ sessionId: s }) {
    const { data: t = [] } = xe((r) => r.from({
      s: Ke
    }).where(({ s: l }) => Ya(l.id, s))), a = t[0];
    return g.useEffect(() => {
      var _a2;
      if (!a || ((_a2 = M.currentSession) == null ? void 0 : _a2.id) === s) return;
      (async () => {
        try {
          const x = {
            historyItems: await new ja(s).getContextItems(),
            processingItem: void 0
          };
          M.loadSession(a, x);
        } catch (l) {
          console.error("[SmallTown] \u52A0\u8F7D\u4F1A\u8BDD\u5931\u8D25:", l);
        }
      })();
    }, [
      a,
      s
    ]), g.useEffect(() => () => {
      M.unloadSession();
    }, []), a ? a.mode !== "small-town" ? e.jsx("div", {
      className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
      children: e.jsx("p", {
        children: "\u4F1A\u8BDD\u6A21\u5F0F\u4E0D\u5339\u914D"
      })
    }) : e.jsx(sr, {
      sessionId: s
    }) : e.jsx("div", {
      className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
      children: e.jsx("p", {
        children: "\u4F1A\u8BDD\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664"
      })
    });
  }
  Or = Object.freeze(Object.defineProperty({
    __proto__: null,
    SessionMainForSmallTown: tr
  }, Symbol.toStringTag, {
    value: "Module"
  }));
})();
export {
  hr as C,
  br as D,
  fr as E,
  vr as G,
  pr as I,
  xr as S,
  __tla,
  gr as a,
  jr as b,
  Nr as c,
  yr as d,
  wr as e,
  Sr as f,
  Cr as g,
  Dr as h,
  Ir as i,
  kr as j,
  _r as k,
  Tr as l,
  Mr as m,
  Lr as n,
  Ar as o,
  Pr as p,
  Er as q,
  Or as r
};
