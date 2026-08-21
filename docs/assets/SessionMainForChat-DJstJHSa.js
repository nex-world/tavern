const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-BD5cuqGE.js","assets/@tanstack-DHpjEvx5.js","assets/react-BwrVEnbn.js","assets/vendor-Btzk85e_.js","assets/formatting-Cgd9k2rU.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-C4f2dvgg.js","assets/zod-BOL00Oce.js","assets/analytics-CgY6CsYJ.js","assets/app-configurations-Bm8i7f1O.js","assets/clarity-D1JZhIBn.js","assets/nex-tavern-uuid-BRGLU0IZ.js","assets/id-BY9c7rfI.js","assets/PlayerInputItem-CS74DG8C.js","assets/CharacterAvatar-DT8CsUgC.js","assets/shadcn-utils-Cnr6N47i.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-CPcsbTWB.js","assets/icons-an9klV8i.js"])))=>i.map(i=>d[i]);
import { y as N, r as d, t as _, j as t } from "./react-BwrVEnbn.js";
import { S as B, C as R, i as L } from "./db-master-BD5cuqGE.js";
import { f as F, j as D } from "./@tanstack-DHpjEvx5.js";
import { s as H } from "./db-CJsO4wQm.js";
import { _ as b, __tla as __tla_0 } from "./index-CUosL2Px.js";
import { n as M } from "./id-BY9c7rfI.js";
import { C as v, A as z } from "./AutoScrollDownArea-DjEl-AZw.js";
import { m as O, P as k, C as P, a as V } from "./PlayerInputItem-CS74DG8C.js";
import { B as U } from "./button-DfQJxXN9.js";
import { T as $ } from "./textarea-sQNmV-G1.js";
import { B as T } from "./badge-BTwyrS6y.js";
import { C as E } from "./CharacterAvatar-DT8CsUgC.js";
import { u as K } from "./useLLM-BM4jtOMc.js";
import { a as Y } from "./analytics-CgY6CsYJ.js";
import { S as Q } from "./icons-an9klV8i.js";
import "./vendor-Btzk85e_.js";
import "./formatting-Cgd9k2rU.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./zod-BOL00Oce.js";
import "./dexie-C4f2dvgg.js";
import "./es-toolkit-9bjl2JfA.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-CPcsbTWB.js";
import "./global-llm-config.store-CMShswv9.js";
import "./app-configurations-Bm8i7f1O.js";
import "./clarity-D1JZhIBn.js";
import "./nex-tavern-uuid-BRGLU0IZ.js";
let be;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const m = N({
        currentSession: null,
        contextManager: null,
        get messages () {
            if (!(this.contextManager && this.currentSession)) return [];
            const e = O(this.contextManager.state, {
                characterId: this.currentSession.modeConfig.characterId
            });
            return Array.isArray(e) ? e : [];
        },
        startNewSession (e, a) {
            const o = {
                id: M(),
                contextId: null,
                mode: "chat",
                modeConfig: e,
                modeState: {
                    currentPhase: "character_first_msg"
                },
                createdAt: Date.now(),
                updatedAt: Date.now(),
                isActive: !0
            };
            this.currentSession = o;
            const i = new v(a || {
                historyItems: [],
                processingItem: void 0
            });
            return i.state = N(i.state), this.contextManager = i, o;
        },
        getContextState () {
            return this.contextManager ? this.contextManager.state : null;
        },
        updateContextState (e) {
            this.contextManager && (Object.assign(this.contextManager.state, e), this.currentSession && (this.currentSession.updatedAt = Date.now()));
        },
        updateCurrentPhase (e) {
            this.currentSession && (this.currentSession.modeState.currentPhase = e, this.currentSession.updatedAt = Date.now());
        },
        updateCurrentConfig (e) {
            this.currentSession && (Object.assign(this.currentSession.modeConfig, e), this.currentSession.updatedAt = Date.now());
        },
        endCurrentSession () {
            this.currentSession = null, this.contextManager = null;
        },
        getCurrentSessionSnapshot () {
            return this.currentSession ? {
                ...this.currentSession
            } : null;
        },
        loadFromData (e) {
            this.currentSession = e.session, e.contextState && (this.contextManager = new v(e.contextState), this.contextManager.state = N(this.contextManager.state));
        },
        loadSession (e) {
            this.currentSession = e;
        },
        async saveNewContextItemsToDB (e, a) {
            const { SessionDB: o } = await b(async ()=>{
                const { SessionDB: u } = await import("./db-master-BD5cuqGE.js").then((w)=>w.v);
                return {
                    SessionDB: u
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]));
            await new o(e).addContextItems(a);
        }
    });
    function q(e, a) {
        const o = K(), i = d.useRef(!1), u = F(), w = d.useCallback(async (p)=>{
            if (!(i.current || !a || a.getHistoryCount() > 0 || !e)) try {
                i.current = !0;
                const { makeChatModeStartingContextItems_CN: x } = await b(async ()=>{
                    const { makeChatModeStartingContextItems_CN: r } = await import("./PlayerInputItem-CS74DG8C.js").then((n)=>n.c);
                    return {
                        makeChatModeStartingContextItems_CN: r
                    };
                }, __vite__mapDeps([14,0,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19])), g = x(e);
                for (const r of g)a.addHistoryItem(r);
                const S = g.find((r)=>r.type === "character_intro");
                if (S && p) {
                    const r = S.data.content.split(" ");
                    let n = "";
                    for (const I of r)n += (n ? " " : "") + I, p(n), await new Promise((l)=>setTimeout(l, 50));
                }
            } catch (x) {
                console.error("Initialize Chat Error:", x), _.error("LLM 调用失败，请前往 LLM 配置页面进行配置", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>u({
                                to: "/config/llm"
                            })
                    }
                });
            } finally{
                i.current = !1;
            }
        }, [
            a,
            e,
            u
        ]), y = d.useCallback(async (p, x)=>{
            if (!(i.current || !e || !a)) try {
                i.current = !0, a.addLLMResponseAsContextItem({
                    role: "user",
                    content: p
                }, {});
                const { makeChatModeLLMMessagesFromContextStateForCharacterId: g } = await b(async ()=>{
                    const { makeChatModeLLMMessagesFromContextStateForCharacterId: l } = await import("./PlayerInputItem-CS74DG8C.js").then((C)=>C.c);
                    return {
                        makeChatModeLLMMessagesFromContextStateForCharacterId: l
                    };
                }, __vite__mapDeps([14,0,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19])), r = g(a.state, {
                    characterId: e.id
                }).map((l)=>({
                        id: M(),
                        role: l.role,
                        content: l.content,
                        name: l.name
                    })), n = {
                    id: M(),
                    type: "character_message",
                    orderRef: 0,
                    timestamp: Date.now(),
                    data: {
                        characterId: e.id,
                        content: "",
                        name: e.name
                    }
                };
                a.setProcessingItem(n);
                let I = "";
                await o.callLLMStream(r, (l, C)=>{
                    I = C, x?.(l);
                    const s = a.getProcessingItem();
                    s && (s.data.content = I);
                }), n.data.content = I, a.completeProcessingItem();
            } catch (g) {
                console.error("ChatLoop Error:", g), _.error("LLM 调用失败，请前往 LLM 配置页面进行配置", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>u({
                                to: "/config/llm"
                            })
                    }
                });
            } finally{
                i.current = !1;
            }
        }, [
            a,
            e,
            o,
            u
        ]);
        return {
            initializeChat: w,
            sendUserMessage: y
        };
    }
    let G, J;
    be = (e)=>{
        const [a, o] = d.useState(""), [i, u] = d.useState(!1), [w, y] = d.useState(""), [p, x] = d.useState(!1), { data: g = [] } = D((s)=>s.from({
                s: B
            })), { data: S = [] } = D((s)=>s.from({
                c: R
            })), r = g.find((s)=>s.id === e.sessionId), n = S.find((s)=>s.id === r?.characterId);
        d.useEffect(()=>{
            let s = !1;
            return x(!1), (async ()=>{
                if (r) try {
                    const f = await H.createSessionDB(r.id).getContextItems();
                    if (s) return;
                    const j = {
                        historyItems: f,
                        processingItem: void 0
                    }, A = new v(j);
                    m.contextManager = A, L(r.id), x(!0);
                } catch  {
                    if (!s) {
                        const h = new v({
                            historyItems: [],
                            processingItem: void 0
                        });
                        m.contextManager = h, x(!0);
                    }
                }
            })(), ()=>{
                s = !0;
            };
        }, [
            r
        ]), d.useEffect(()=>()=>{
                e.sessionId && L(e.sessionId);
            }, [
            e.sessionId
        ]);
        const { sendUserMessage: I, initializeChat: l } = q(n, m.contextManager);
        if (d.useEffect(()=>{
            p && m.contextManager?.getHistoryCount() === 0 && n && r && (async ()=>{
                if (await l((c)=>{
                    y((h)=>h + c);
                }), m.contextManager) {
                    const c = m.contextManager.getHistoryItems();
                    c.length > 0 && await m.saveNewContextItemsToDB(r.id, c);
                }
            })();
        }, [
            p,
            l,
            n,
            r
        ]), !(r && n)) return t.jsx("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
            children: t.jsx("p", {
                children: "会话不存在或已删除"
            })
        });
        const C = async ()=>{
            if (!(!a.trim() || i)) {
                u(!0), y("");
                try {
                    if (await I(a, (s)=>{
                        y((c)=>c + s);
                    }), Y(e.sessionId, "chat"), m.contextManager && r) {
                        const c = m.contextManager.getHistoryItems().filter((h)=>!h.processing);
                        c.length > 0 && await m.saveNewContextItemsToDB(r.id, c);
                    }
                } catch (s) {
                    console.error("Send message error:", s);
                } finally{
                    u(!1), y("");
                }
                o("");
            }
        };
        return t.jsx("div", {
            className: "flex flex-row h-full overflow-hidden bg-background",
            children: t.jsxs("div", {
                className: "flex flex-col grow min-w-0 h-full relative",
                children: [
                    t.jsxs("div", {
                        className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10",
                        children: [
                            t.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    t.jsx(E, {
                                        character: n,
                                        size: "xs",
                                        shape: "circle"
                                    }),
                                    t.jsxs("div", {
                                        className: "flex flex-col",
                                        children: [
                                            t.jsx("span", {
                                                className: "font-bold text-sm leading-tight",
                                                children: n.name
                                            }),
                                            t.jsx("span", {
                                                className: "text-[10px] text-muted-foreground",
                                                children: n.nickname || "NPC"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            t.jsx("div", {
                                className: "flex items-center gap-2",
                                children: t.jsx(T, {
                                    variant: "secondary",
                                    className: "text-[9px] h-5 px-1.5 font-bold uppercase",
                                    children: "CHAT MODE"
                                })
                            })
                        ]
                    }),
                    t.jsx(z, {
                        className: "flex grow p-4 md:p-8 space-y-8",
                        children: t.jsxs("div", {
                            className: "max-w-4xl mx-auto w-full space-y-8",
                            children: [
                                (()=>{
                                    const s = m.contextManager?.getVisibleHistoryItems() || [], c = m.contextManager?.getProcessingItem(), h = [
                                        ...s
                                    ];
                                    return c && !s.some((f)=>f.id === c.id) && h.push(c), h.map((f, j)=>t.jsx(G, {
                                            item: f,
                                            character: n,
                                            isProcessing: f.processing || void 0,
                                            streamingText: f.processing ? w : void 0
                                        }, `[${j}]${f.id}`));
                                })(),
                                i && !m.contextManager?.getProcessingItem() && t.jsxs("div", {
                                    className: "flex gap-4 animate-pulse",
                                    children: [
                                        t.jsx("div", {
                                            className: "w-10 h-10 rounded-full bg-muted shrink-0"
                                        }),
                                        t.jsxs("div", {
                                            className: "space-y-3 grow pt-2",
                                            children: [
                                                t.jsx("div", {
                                                    className: "h-4 bg-muted rounded w-1/4"
                                                }),
                                                t.jsx("div", {
                                                    className: "h-24 bg-muted rounded w-full"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    t.jsxs("div", {
                        className: "p-4 md:p-6 border-t shrink-0 bg-background/50 backdrop-blur-sm",
                        children: [
                            t.jsxs("div", {
                                className: "max-w-4xl mx-auto relative group",
                                children: [
                                    t.jsx("div", {
                                        className: "absolute -inset-0.5 bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"
                                    }),
                                    t.jsxs("div", {
                                        className: "relative",
                                        children: [
                                            t.jsx($, {
                                                value: a,
                                                onChange: (s)=>o(s.target.value),
                                                placeholder: `向 ${n.name} 发送消息...`,
                                                className: "min-h-24 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/20 focus-visible:ring-primary/30 bg-background",
                                                onKeyDown: (s)=>{
                                                    s.key === "Enter" && !s.shiftKey && (s.preventDefault(), C());
                                                }
                                            }),
                                            t.jsx(U, {
                                                size: "icon",
                                                className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform",
                                                disabled: !a.trim() || i,
                                                onClick: C,
                                                type: "button",
                                                children: t.jsx(Q, {
                                                    className: "w-5 h-5"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            t.jsx("p", {
                                className: "text-[10px] text-center text-muted-foreground mt-3 font-medium uppercase tracking-tighter opacity-50",
                                children: "Shift + Enter to line break • Enter to send"
                            })
                        ]
                    })
                ]
            })
        });
    };
    G = (e)=>{
        switch(e.item.type){
            case "character_intro":
                return t.jsx(V, {
                    item: e.item,
                    character: e.character
                });
            case "character_message":
                return e.isProcessing ? t.jsx(J, {
                    item: e.item,
                    character: e.character,
                    streamingText: e.streamingText || ""
                }) : t.jsx(P, {
                    item: e.item,
                    character: e.character
                });
            case "character_message_group":
                return t.jsx("div", {
                    className: "space-y-4",
                    children: (e.item.data.list || []).map((a, o)=>t.jsx(P, {
                            item: {
                                ...e.item,
                                type: "character_message",
                                data: {
                                    ...e.item.data,
                                    content: a.content,
                                    timestamp: a.timestamp
                                }
                            },
                            character: e.character
                        }, a.id || o))
                });
            case "participant_message":
                return t.jsx(k, {
                    item: e.item
                });
            case "participant_message_group":
                return t.jsx("div", {
                    className: "space-y-4",
                    children: (e.item.data.list || []).map((a, o)=>t.jsx(k, {
                            item: {
                                ...e.item,
                                type: "participant_message",
                                data: {
                                    ...e.item.data,
                                    content: a.content,
                                    timestamp: a.timestamp
                                }
                            }
                        }, a.id || o))
                });
            case "system_notification":
                return t.jsx("div", {
                    className: "flex justify-center my-4",
                    children: t.jsx(T, {
                        variant: "outline",
                        className: "px-3 py-1 text-[10px] text-muted-foreground bg-muted/20",
                        children: e.item.data.content
                    })
                });
            case "starting_system_message":
            case "in_context_system_message":
            case "placeholder":
                return null;
            default:
                return console.warn("Unknown context item type:", e.item.type), null;
        }
    };
    J = (e)=>e.item.type === "character_message" ? t.jsxs("div", {
            className: "flex gap-4 animate-pulse",
            children: [
                t.jsx("div", {
                    className: "shrink-0",
                    children: t.jsx(E, {
                        character: e.character,
                        size: "sm",
                        shape: "rounded"
                    })
                }),
                t.jsxs("div", {
                    className: "space-y-1.5 grow pt-1",
                    children: [
                        t.jsx("div", {
                            className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2",
                            children: e.character.name
                        }),
                        t.jsx("div", {
                            className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium",
                            children: e.streamingText || e.item.data.content
                        })
                    ]
                })
            ]
        }) : null;
});
export { be as SessionMainForChat, __tla };
