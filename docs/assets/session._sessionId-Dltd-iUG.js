const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-CTHPU3gA.js","assets/react-BxzVs1F-.js","assets/vendor-CJLoHUZS.js","assets/formatting-YGyf6cFc.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/skeleton-adpIZMHS.js","assets/shadcn-utils-Cnr6N47i.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-CPcsbTWB.js","assets/conversation-message-D83NGiDb.js","assets/button-BRW5UoPv.js","assets/icons-C6_pGF5j.js","assets/reading-settings.store-BJDH9hBu.js","assets/collapsible-kCge2IUx.js","assets/id-BY9c7rfI.js","assets/es-toolkit-9bjl2JfA.js","assets/spinner-CFrUWQbp.js","assets/empty-CXeTqhb2.js","assets/input-group-0WwM74BH.js","assets/input-Cv054FMu.js","assets/textarea-CT6wyGoV.js","assets/db-master-kA5b7Kkp.js","assets/@tanstack-B5tCGMiu.js","assets/dexie-CG_LwvPM.js","assets/zod-BTj0C3yc.js","assets/analytics-DHqd3KZu.js","assets/nex-tavern-uuid-Cz-4R4MI.js","assets/index-CRWqN2Z9.js","assets/index-vWucJHKa.css","assets/db-BPqhYfj0.js","assets/context-manager.class-D5bFB92s.js","assets/CharacterAvatar-K7qbQSdG.js","assets/avatar-D3rOZ_4f.js","assets/PlayerInputItem-D1TsUtS0.js","assets/useLLM-0gFp44Ix.js","assets/tavern-model-config-button-Bv5F13eL.js","assets/responsive-dialog-B5gKVGEy.js","assets/form-width-constraints-n6SdO9NQ.js","assets/alert-dialog-oM7wSDIa.js","assets/ai-settings-DZgxF8Gf.js","assets/tavern-llm-config-editor-Dnk_p-P-.js","assets/field-MgsDPNS0.js","assets/label-APquV01x.js","assets/select-CL5ldiVU.js","assets/switch-CO9-2KPd.js","assets/alert-B1_JhIZd.js","assets/InvitationGuard-EXAZNTBq.js","assets/SessionMainForChallenge-Csz0eZML.js","assets/badge-Cxz86jq2.js","assets/card-BRzat3Z6.js","assets/session-manager.class-CGxSDPWB.js","assets/SessionMainForDnd-CVjeiA_w.js","assets/progress-BqjBAGm9.js","assets/SessionMainForGroupChat-DaMeRnxt.js","assets/SessionMainForSmallTown-YicyW5vo.js","assets/slider-DihGNT6w.js","assets/tooltip-Dint9o87.js","assets/AutoScrollDownArea-m0lCE45e.js","assets/toggle-group-CbzATKSu.js","assets/SessionMainForNovelWriting-eDW5GAm0.js","assets/SessionMainForBalanceAdventure-B3dYZfkO.js","assets/balance-adventure-items-Ba5Rc4cb.js"])))=>i.map(i=>d[i]);
import { c as _, _ as c, __tla as __tla_0 } from "./index-CRWqN2Z9.js";
import { j as e, r as a } from "./react-BxzVs1F-.js";
import { T as j } from "./tavern-model-config-button-Bv5F13eL.js";
import { B as m } from "./button-BRW5UoPv.js";
import { L as g, k as S, m as w } from "./@tanstack-B5tCGMiu.js";
import { D as N, f as b, R as A, a as E, b as D, c as M, g as T } from "./responsive-dialog-B5gKVGEy.js";
import { A as v, s as F } from "./icons-C6_pGF5j.js";
import { E as C, a as I, b as k, c as L, d as P } from "./empty-CXeTqhb2.js";
import { S as R, m as z } from "./db-master-kA5b7Kkp.js";
import { I as O } from "./InvitationGuard-EXAZNTBq.js";
import { t as V } from "./analytics-DHqd3KZu.js";
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
    const q = a.lazy(()=>c(()=>import("./SessionMainForChat-CTHPU3gA.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47])).then((s)=>({
                default: s.SessionMainForChat
            }))), G = a.lazy(()=>c(()=>import("./SessionMainForChallenge-Csz0eZML.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([48,1,2,3,4,5,49,8,7,9,10,11,12,13,14,15,16,17,50,46,19,20,21,23,24,22,25,26,27,28,29,30,31,51,18,32,33,34,36,37,38,39,40,41,42,43,44,45,47])).then((s)=>({
                default: s.SessionMainForChallenge
            }))), H = a.lazy(()=>c(()=>import("./SessionMainForDnd-CVjeiA_w.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([52,1,2,3,4,5,50,7,8,9,53,46,17,12,10,11,13,14,15,16,19,20,21,23,24,22,25,26,27,28,29,30,31,51,49,45,32,33,36,37,38,39,40,41,42,43,44,18,47])).then((s)=>({
                default: s.SessionMainForDnd
            }))), W = a.lazy(()=>c(()=>import("./SessionMainForGroupChat-DaMeRnxt.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([54,1,2,3,4,5,50,7,8,9,17,12,10,11,13,14,15,16,19,20,21,23,24,22,25,26,27,28,29,30,31,51,49,32,33,36,37,38,39,40,41,42,43,44,45,46,18,47])).then((s)=>({
                default: s.SessionMainForGroupChat
            }))), K = a.lazy(()=>c(()=>import("./SessionMainForSmallTown-YicyW5vo.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([55,1,2,3,4,5,23,24,22,25,26,27,28,12,29,15,56,7,8,9,31,16,11,32,33,57,49,53,58,59,35,14,37,38,39,43,45,20])).then((s)=>({
                default: s.SessionMainForSmallTown
            }))), Q = a.lazy(()=>c(()=>import("./SessionMainForNovelWriting-eDW5GAm0.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([60,1,2,3,4,5,22,23,24,25,26,27,28,12,29,15,31,16,51,11,8,7,9,14,58,21,43,37,38,39,20,50,32,33,44])).then((s)=>({
                default: s.SessionMainForNovelWriting
            }))), J = a.lazy(()=>c(()=>import("./SessionMainForBalanceAdventure-B3dYZfkO.js"), __vite__mapDeps([61,1,2,3,4,5,53,7,8,9,44,12,23,24,22,25,26,27,28,29,15,62,11,50,49,36,37,38,39,14,16,40,41,20,42,43,45,19,21,46,18,47])).then((s)=>({
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
