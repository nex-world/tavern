const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-GEKPo3xD.js","assets/react-Cp7JIDMn.js","assets/vendor-C24HE5AE.js","assets/formatting-KflFifHg.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/skeleton-CtEN8_Oh.js","assets/shadcn-utils-Cnr6N47i.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-CPcsbTWB.js","assets/conversation-message-BZgJiHtS.js","assets/button-p-Zf1khH.js","assets/icons-Dc5fwOe3.js","assets/collapsible-LmfNNF2P.js","assets/spinner-fCA3hgE0.js","assets/empty-BQ47fiAO.js","assets/input-group-BLS_bbvz.js","assets/input-Dv-vR-0h.js","assets/textarea-BWW78K6H.js","assets/db-master-DpInMzGh.js","assets/@tanstack-8dqqXYTU.js","assets/dexie-DSi1kBxz.js","assets/zod-BTj0C3yc.js","assets/analytics-DqIS_F3D.js","assets/nex-tavern-uuid-B02Y_twK.js","assets/index-Dvos9xYb.js","assets/index-B5OkmrnP.css","assets/id-BY9c7rfI.js","assets/db-C6a7nMI2.js","assets/context-manager.class-CetS2fXT.js","assets/es-toolkit-9bjl2JfA.js","assets/CharacterAvatar-C7K0X6_t.js","assets/avatar-qY3aVgMP.js","assets/PlayerInputItem-Bb5XigwW.js","assets/useLLM-dxiXMELK.js","assets/global-llm-config.store-CXBroG1M.js","assets/tavern-model-config-button-zuZSrgaX.js","assets/responsive-dialog-CnPA2NUp.js","assets/form-width-constraints-n6SdO9NQ.js","assets/alert-dialog-B2Ci2Y_l.js","assets/tavern-llm-config-editor-B6tyngf3.js","assets/select-Whuypjrp.js","assets/field-CA4kBoof.js","assets/label-PMstkkML.js","assets/checkbox-BmIkQT6j.js","assets/draft-field-Cab9dfFm.js","assets/InvitationGuard-BDZ9QGpc.js","assets/SessionMainForChallenge-CZorryeJ.js","assets/badge-8hWiZNtW.js","assets/card--sAYb8Bf.js","assets/alert-l3_BzK2Q.js","assets/session-manager.class-D6gTmGU7.js","assets/SessionMainForDnd-DRZUfrsJ.js","assets/progress-T13oMyRS.js","assets/switch-B4Jbj6hs.js","assets/SessionMainForGroupChat-BIUeAPQd.js","assets/SessionMainForSmallTown-pbQce9o4.js","assets/slider-CFYIjbli.js","assets/tooltip-2nTITX1N.js","assets/AutoScrollDownArea-BJfmeK6d.js","assets/toggle-group-CnzUVRTf.js","assets/SessionMainForNovelWriting-D_H0CVZV.js","assets/SessionMainForBalanceAdventure-1UHhCu35.js","assets/balance-adventure-items-r5KpWD3-.js"])))=>i.map(i=>d[i]);
import { m as _, _ as d, __tla as __tla_0 } from "./index-Dvos9xYb.js";
import { j as e, r as a } from "./react-Cp7JIDMn.js";
import { T as j } from "./tavern-model-config-button-zuZSrgaX.js";
import { B as m } from "./button-p-Zf1khH.js";
import { L as g, m as S, n as w } from "./@tanstack-8dqqXYTU.js";
import { D as N, g as b, R as A, a as E, b as D, c as M, h as T } from "./responsive-dialog-CnPA2NUp.js";
import { A as v, y as F } from "./icons-Dc5fwOe3.js";
import { E as C, b as I, c as k, d as L, a as P } from "./empty-BQ47fiAO.js";
import { S as R, m as z } from "./db-master-DpInMzGh.js";
import { I as O } from "./InvitationGuard-BDZ9QGpc.js";
import { t as V } from "./analytics-DqIS_F3D.js";
let p, ce, de, me;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    p = function({ title: s, subtitle: i, avatar: n, actions: o }) {
        return e.jsx("header", {
            className: "shrink-0 border-b bg-background px-3 py-2 sm:px-5",
            children: e.jsxs("div", {
                className: "mx-auto flex w-full max-w-4xl min-w-0 items-center gap-2",
                children: [
                    e.jsx(m, {
                        asChild: !0,
                        variant: "ghost",
                        size: "icon",
                        className: "shrink-0",
                        children: e.jsx(g, {
                            to: "/session",
                            "aria-label": "返回会话列表",
                            title: "返回会话列表",
                            children: e.jsx(v, {})
                        })
                    }),
                    n && e.jsx("div", {
                        className: "shrink-0",
                        children: n
                    }),
                    e.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            e.jsx("h1", {
                                className: "truncate text-sm font-semibold",
                                title: s,
                                children: s
                            }),
                            i && e.jsx("p", {
                                className: "truncate text-xs text-muted-foreground",
                                title: i,
                                children: i
                            })
                        ]
                    }),
                    e.jsxs("div", {
                        className: "flex shrink-0 items-center gap-1",
                        children: [
                            o,
                            e.jsx(j, {
                                compact: !0
                            })
                        ]
                    })
                ]
            })
        });
    };
    de = function({ children: s }) {
        return e.jsx("section", {
            "aria-label": "关键状态",
            className: "max-h-28 shrink-0 overflow-y-auto overscroll-contain border-b px-3 py-2 sm:px-5",
            children: e.jsx("div", {
                className: "mx-auto flex max-w-4xl min-w-0 flex-wrap items-center gap-2",
                children: s
            })
        });
    };
    ce = function({ label: s, description: i, children: n }) {
        return e.jsxs(N, {
            children: [
                e.jsx(b, {
                    asChild: !0,
                    children: e.jsx(m, {
                        type: "button",
                        variant: "outline",
                        size: "sm",
                        children: s
                    })
                }),
                e.jsxs(A, {
                    className: "flex max-h-[85dvh] flex-col gap-0 overflow-hidden p-0 sm:max-w-xl",
                    children: [
                        e.jsxs(E, {
                            className: "shrink-0 border-b p-4 pr-12 text-left",
                            children: [
                                e.jsx(D, {
                                    children: s
                                }),
                                e.jsx(M, {
                                    children: i
                                })
                            ]
                        }),
                        e.jsx(T, {
                            className: "flex flex-col gap-4 overscroll-contain p-4",
                            children: n
                        })
                    ]
                })
            ]
        });
    };
    function B(s) {
        return s === "chat" || s === "challenge" || s === "dnd" || s === "group-chat" || s === "small-town" || s === "novel-writing" || s === "balance-adventure";
    }
    function $(s) {
        const i = s ?? {}, n = i.modeConfig ?? {}, o = i.modeState ?? {};
        return typeof i.challengeId == "string" || typeof n.roleTaskPrompt == "string" || Array.isArray(n.goals) ? "challenge" : n.worldSnapshot !== void 0 || Array.isArray(n.playerCharacterSnapshots) ? "dnd" : Array.isArray(n.participantSnapshots) || typeof n.topic == "string" ? "group-chat" : typeof n.worldName == "string" || Array.isArray(n.characterSnapshots) || o.gameTime !== void 0 ? "small-town" : typeof n.projectName == "string" || o.progressTracking !== void 0 || o.currentChapterIndex !== void 0 ? "novel-writing" : typeof n.worldCardId == "string" && Array.isArray(n.balanceAxes) ? "balance-adventure" : "chat";
    }
    const q = a.lazy(()=>d(()=>import("./SessionMainForChat-GEKPo3xD.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46])).then((s)=>({
                default: s.SessionMainForChat
            }))), G = a.lazy(()=>d(()=>import("./SessionMainForChallenge-CZorryeJ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([47,1,2,3,4,5,48,8,7,9,10,11,12,13,14,49,50,16,17,18,20,21,19,22,23,24,25,26,27,28,29,30,51,15,31,32,33,35,36,37,38,39,40,41,42,43,44,45,46])).then((s)=>({
                default: s.SessionMainForChallenge
            }))), H = a.lazy(()=>d(()=>import("./SessionMainForDnd-DRZUfrsJ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([52,1,2,3,4,5,49,7,8,9,53,50,14,12,10,11,13,16,17,18,20,21,19,22,23,24,25,26,27,28,29,30,51,48,35,54,31,32,36,37,38,39,40,41,42,43,44,45,15,46])).then((s)=>({
                default: s.SessionMainForDnd
            }))), W = a.lazy(()=>d(()=>import("./SessionMainForGroupChat-BIUeAPQd.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([55,1,2,3,4,5,49,7,8,9,14,12,10,11,13,16,17,18,20,21,19,22,23,24,25,26,27,28,29,30,51,48,35,31,32,36,37,38,39,40,41,42,43,44,45,15,46])).then((s)=>({
                default: s.SessionMainForGroupChat
            }))), K = a.lazy(()=>d(()=>import("./SessionMainForSmallTown-pbQce9o4.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([56,1,2,3,4,5,20,21,19,22,23,24,25,12,26,27,57,7,8,9,29,30,11,31,32,40,41,42,43,44,45,17,18,35,58,48,53,59,60,34,37,38,39,54])).then((s)=>({
                default: s.SessionMainForSmallTown
            }))), Q = a.lazy(()=>d(()=>import("./SessionMainForNovelWriting-D_H0CVZV.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([61,1,2,3,4,5,19,20,21,22,23,24,25,12,26,27,29,30,51,11,8,7,9,35,59,18,43,37,38,39,17,49,31,32,41])).then((s)=>({
                default: s.SessionMainForNovelWriting
            }))), J = a.lazy(()=>d(()=>import("./SessionMainForBalanceAdventure-1UHhCu35.js"), __vite__mapDeps([62,1,2,3,4,5,53,7,8,9,41,12,20,21,19,22,23,24,25,26,27,63,11,49,48,36,37,38,39,35,30,40,42,43,44,45,17,18,15,46])).then((s)=>({
                default: s.SessionMainForBalanceAdventure
            })));
    function U() {
        return e.jsx("section", {
            "aria-label": "当前会话",
            className: "flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden",
            children: e.jsx("div", {
                className: "min-h-0 min-w-0 flex-1 overflow-hidden",
                children: e.jsx(X, {})
            })
        });
    }
    function X() {
        const { sessionId: s } = _.useParams(), { data: i = [], isLoading: n, isError: o } = S((c)=>c.from({
                s: R
            }).where(({ s: y })=>w(y.id, s)), [
            s
        ]), r = i.find((c)=>c.id === s), x = a.useRef(null), t = B(r?.mode) ? r.mode : $(r);
        if (a.useEffect(()=>{
            if (!r || x.current === r.id) return;
            x.current = r.id;
            const c = !r.analyticsFirstStartedAt;
            c && (z.sessions.update(r.id, {
                analyticsFirstStartedAt: Date.now()
            }), sessionStorage.setItem(`__NexTavern_Analytics_First_Entry__${r.id}`, "true")), V({
                eventType: c ? "session.started.first" : "session.started.returning",
                sessionType: t,
                sessionId: r.id
            });
        }, [
            t,
            r
        ]), n) return e.jsxs("div", {
            className: "flex h-full min-h-0 flex-col",
            children: [
                e.jsx(p, {
                    title: "会话加载中"
                }),
                e.jsx("div", {
                    className: "flex flex-1 items-center justify-center text-sm text-muted-foreground",
                    role: "status",
                    children: "会话加载中..."
                })
            ]
        });
        if (o || !r) return e.jsxs("div", {
            className: "flex h-full min-h-0 flex-col",
            children: [
                e.jsx(p, {
                    title: "会话"
                }),
                e.jsx(C, {
                    className: "flex-1",
                    children: e.jsxs(I, {
                        children: [
                            e.jsx(k, {
                                variant: "icon",
                                children: e.jsx(F, {})
                            }),
                            e.jsx(L, {
                                children: o ? "会话加载失败" : "找不到这个会话"
                            }),
                            e.jsx(P, {
                                children: o ? "请刷新重试，或返回会话列表。" : "会话可能已被删除，请返回列表选择其他会话。"
                            })
                        ]
                    })
                })
            ]
        });
        const l = `${t}:${r.id}`, f = t === "dnd" ? "dnd" : t === "small-town" ? "small-town" : void 0, h = e.jsx(a.Suspense, {
            fallback: e.jsx("div", {
                className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
                children: e.jsx("p", {
                    children: "加载中..."
                })
            }),
            children: t === "dnd" ? e.jsx(H, {
                sessionId: s
            }, l) : t === "group-chat" ? e.jsx(W, {
                sessionId: s
            }, l) : t === "challenge" ? e.jsx(G, {
                sessionId: s
            }, l) : t === "small-town" ? e.jsx(K, {
                sessionId: s
            }, l) : t === "balance-adventure" ? e.jsx(J, {
                sessionId: s
            }, l) : t === "novel-writing" ? e.jsx(Q, {
                sessionId: s
            }, l) : e.jsx(q, {
                sessionId: s
            }, l)
        }), u = t === "small-town" || t === "novel-writing" ? e.jsxs("div", {
            className: "flex h-full min-h-0 flex-col",
            children: [
                e.jsxs("nav", {
                    "aria-label": "会话导航",
                    className: "flex shrink-0 items-center justify-between border-b px-3 py-1.5 md:px-5",
                    children: [
                        e.jsx(m, {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            asChild: !0,
                            children: e.jsxs(g, {
                                to: "/session",
                                children: [
                                    e.jsx(v, {
                                        "data-icon": "inline-start"
                                    }),
                                    "返回会话列表"
                                ]
                            })
                        }),
                        e.jsx(j, {
                            compact: !0
                        })
                    ]
                }),
                e.jsx("div", {
                    className: "min-h-0 flex-1 overflow-hidden",
                    children: h
                })
            ]
        }) : h;
        return f ? e.jsx(O, {
            requiredFeature: f,
            children: u
        }) : u;
    }
    me = Object.freeze(Object.defineProperty({
        __proto__: null,
        component: U
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { p as S, ce as a, de as b, me as s, __tla };
