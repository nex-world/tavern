const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-CBxHwNTk.js","assets/react-CdECYH1o.js","assets/vendor-BK50ji10.js","assets/formatting-BBnWba-L.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/conversation-message-BwOyJT_A.js","assets/alert-DSZBkTkP.js","assets/components-and-styling-lnR2ABT4.js","assets/shadcn-utils-Cnr6N47i.js","assets/@tailwind-CPcsbTWB.js","assets/button-DXPhLBkO.js","assets/icons-LD1dlQlv.js","assets/reading-settings.store-BQ85Rkks.js","assets/collapsible-CruqMeF1.js","assets/id-BY9c7rfI.js","assets/es-toolkit-9bjl2JfA.js","assets/spinner-DANPY4R7.js","assets/skeleton-D8tABb8R.js","assets/empty-D_9_HEmg.js","assets/input-group-Y3ah1Rbi.js","assets/input-DbakF4VO.js","assets/textarea-tLeysPi9.js","assets/db-master-b5fCn9mB.js","assets/@tanstack-HvIyZ7G-.js","assets/dexie-B_g1HnUg.js","assets/zod-BTj0C3yc.js","assets/analytics-BjBUYDN_.js","assets/nex-tavern-uuid-CXz893WL.js","assets/index-k6qYjFMJ.js","assets/index-BOxVUFQ5.css","assets/db-BnATHJL5.js","assets/context-manager.class-I6ERY2vv.js","assets/CharacterAvatar-C5WMuKF2.js","assets/avatar-C5_yDDay.js","assets/PlayerInputItem-CkD1KaPf.js","assets/useLLM-CtGCYvq3.js","assets/tavern-model-config-button-CxHHDyv1.js","assets/responsive-dialog-BySnrNxs.js","assets/form-width-constraints-n6SdO9NQ.js","assets/alert-dialog-DAc-q07k.js","assets/ai-settings-NDNTds_Q.js","assets/tavern-llm-config-editor-CIGpfO_r.js","assets/field-6rZnMWyu.js","assets/label-fnuupfsA.js","assets/select-Czt6njHx.js","assets/switch-DzOF-yP9.js","assets/InvitationGuard-Duw6q46K.js","assets/SessionMainForChallenge-DE9_0USQ.js","assets/badge-CuoEhJCl.js","assets/card-BBOLaoBh.js","assets/session-manager.class-DYRgdOIu.js","assets/SessionMainForDnd-sAWsEP8P.js","assets/progress-Chzb2aGS.js","assets/SessionMainForGroupChat-C8S2U6qT.js","assets/SessionMainForSmallTown-oFxspDup.js","assets/slider-BsEuxZ6k.js","assets/tooltip-D8EcN3DT.js","assets/AutoScrollDownArea-D5L7f17C.js","assets/toggle-group-1RK1_uNY.js","assets/SessionMainForNovelWriting-DRTnbjTP.js","assets/SessionMainForBalanceAdventure-BjFbYNCE.js","assets/balance-adventure-items-Nm32w1mN.js"])))=>i.map(i=>d[i]);
import { c as _, _ as c, __tla as __tla_0 } from "./index-k6qYjFMJ.js";
import { j as e, r as a } from "./react-CdECYH1o.js";
import { T as j } from "./tavern-model-config-button-CxHHDyv1.js";
import { B as m } from "./button-DXPhLBkO.js";
import { L as g, k as S, m as w } from "./@tanstack-HvIyZ7G-.js";
import { D as N, f as b, R as A, a as E, b as D, c as M, g as T } from "./responsive-dialog-BySnrNxs.js";
import { A as v, s as F } from "./icons-LD1dlQlv.js";
import { E as C, a as I, b as k, c as L, d as P } from "./empty-D_9_HEmg.js";
import { S as R, m as z } from "./db-master-b5fCn9mB.js";
import { I as O } from "./InvitationGuard-Duw6q46K.js";
import { t as V } from "./analytics-BjBUYDN_.js";
let p, de, ce, me;
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
    ce = function({ children: s }) {
        return e.jsx("section", {
            "aria-label": "关键状态",
            className: "max-h-28 shrink-0 overflow-y-auto overscroll-contain border-b px-3 py-2 sm:px-5",
            children: e.jsx("div", {
                className: "mx-auto flex max-w-4xl min-w-0 flex-wrap items-center gap-2",
                children: s
            })
        });
    };
    de = function({ label: s, description: i, children: n }) {
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
    const q = a.lazy(()=>c(()=>import("./SessionMainForChat-CBxHwNTk.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47])).then((s)=>({
                default: s.SessionMainForChat
            }))), G = a.lazy(()=>c(()=>import("./SessionMainForChallenge-DE9_0USQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,49,50,20,21,22,24,25,23,26,27,28,29,30,31,32,51,19,33,34,35,37,38,39,40,41,42,43,44,45,46,47])).then((s)=>({
                default: s.SessionMainForChallenge
            }))), H = a.lazy(()=>c(()=>import("./SessionMainForDnd-sAWsEP8P.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,50,53,20,21,22,24,25,23,26,27,28,29,30,31,32,51,49,46,33,34,37,38,39,40,41,42,43,44,45,19,47])).then((s)=>({
                default: s.SessionMainForDnd
            }))), W = a.lazy(()=>c(()=>import("./SessionMainForGroupChat-C8S2U6qT.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,50,20,21,22,24,25,23,26,27,28,29,30,31,32,51,49,33,34,37,38,39,40,41,42,43,44,45,46,19,47])).then((s)=>({
                default: s.SessionMainForGroupChat
            }))), K = a.lazy(()=>c(()=>import("./SessionMainForSmallTown-oFxspDup.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([55,1,2,3,4,5,24,25,23,26,27,28,29,12,30,15,56,9,8,10,32,16,11,33,34,57,49,53,58,59,36,14,38,39,40,44,46,21])).then((s)=>({
                default: s.SessionMainForSmallTown
            }))), Q = a.lazy(()=>c(()=>import("./SessionMainForNovelWriting-DRTnbjTP.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([60,1,2,3,4,5,23,24,25,26,27,28,29,12,30,15,32,16,51,11,8,9,10,14,58,7,22,44,38,39,40,21,50,33,34,45])).then((s)=>({
                default: s.SessionMainForNovelWriting
            }))), J = a.lazy(()=>c(()=>import("./SessionMainForBalanceAdventure-BjFbYNCE.js"), __vite__mapDeps([61,1,2,3,4,5,53,9,8,10,45,12,24,25,23,26,27,28,29,30,15,62,11,50,49,37,38,39,40,14,16,41,42,21,43,44,46,20,22,7,19,47])).then((s)=>({
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
        const { sessionId: s } = _.useParams(), { data: i = [], isLoading: n, isError: o } = S((d)=>d.from({
                s: R
            }).where(({ s: y })=>w(y.id, s)), [
            s
        ]), r = i.find((d)=>d.id === s), x = a.useRef(null), t = B(r?.mode) ? r.mode : $(r);
        if (a.useEffect(()=>{
            if (!r || x.current === r.id) return;
            x.current = r.id;
            const d = !r.analyticsFirstStartedAt;
            d && (z.sessions.update(r.id, {
                analyticsFirstStartedAt: Date.now()
            }), sessionStorage.setItem(`__NexTavern_Analytics_First_Entry__${r.id}`, "true")), V({
                eventType: d ? "session.started.first" : "session.started.returning",
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
export { p as S, de as a, ce as b, me as s, __tla };
