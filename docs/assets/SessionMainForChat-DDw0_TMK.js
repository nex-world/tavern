const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-DKnNNmTP.js","assets/@tanstack-D67abzz0.js","assets/react-CAuF6Uwp.js","assets/vendor-R_RbF-Qb.js","assets/formatting-DFtRXkW1.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-CZ_H1TYX.js","assets/zod-D7Re9cnc.js","assets/PlayerInputItem-Da1zrXFw.js","assets/id-BY9c7rfI.js","assets/CharacterAvatar-yPJ36Fh6.js","assets/shadcn-utils-Cnr6N47i.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-CPcsbTWB.js","assets/icons-Cmb87C8b.js"])))=>i.map(i=>d[i]);
import { ak as N, r as d, t as _, j as t } from "./react-CAuF6Uwp.js";
import { S as B, C as R, i as L } from "./db-master-DKnNNmTP.js";
import { f as F, i as D } from "./@tanstack-D67abzz0.js";
import { s as H } from "./db-CPOLtxAM.js";
import { _ as b, __tla as __tla_0 } from "./index-C4wlxMXN.js";
import { n as M } from "./id-BY9c7rfI.js";
import { C as S, A as z } from "./AutoScrollDownArea-hJ97JLYP.js";
import { m as O, P as k, C as P, a as V } from "./PlayerInputItem-Da1zrXFw.js";
import { B as U } from "./button-B6v19V-K.js";
import { T as $ } from "./textarea-CFS4_TcP.js";
import { B as T } from "./badge-CR9zO-CQ.js";
import { C as E } from "./CharacterAvatar-yPJ36Fh6.js";
import { u as K } from "./useLLM-CenwGE9_.js";
import { ae as Y } from "./icons-Cmb87C8b.js";
import "./vendor-R_RbF-Qb.js";
import "./formatting-DFtRXkW1.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./zod-D7Re9cnc.js";
import "./dexie-CZ_H1TYX.js";
import "./es-toolkit-9bjl2JfA.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-CPcsbTWB.js";
import "./global-llm-config.store-BSRZEgc6.js";
import "./app-configurations-CmkfVBRD.js";
let ve;
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
            const i = new S(a || {
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
            this.currentSession = e.session, e.contextState && (this.contextManager = new S(e.contextState), this.contextManager.state = N(this.contextManager.state));
        },
        loadSession (e) {
            this.currentSession = e;
        },
        async saveNewContextItemsToDB (e, a) {
            const { SessionDB: o } = await b(async ()=>{
                const { SessionDB: f } = await import("./db-master-DKnNNmTP.js").then((w)=>w.v);
                return {
                    SessionDB: f
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8]));
            await new o(e).addContextItems(a);
        }
    });
    function Q(e, a) {
        const o = K(), i = d.useRef(!1), f = F(), w = d.useCallback(async (p)=>{
            if (!(i.current || !a || a.getHistoryCount() > 0 || !e)) try {
                i.current = !0;
                const { makeChatModeStartingContextItems_CN: u } = await b(async ()=>{
                    const { makeChatModeStartingContextItems_CN: r } = await import("./PlayerInputItem-Da1zrXFw.js").then((n)=>n.c);
                    return {
                        makeChatModeStartingContextItems_CN: r
                    };
                }, __vite__mapDeps([9,0,1,2,3,4,5,6,7,8,10,11,12,13,14,15])), h = u(e);
                for (const r of h)a.addHistoryItem(r);
                const v = h.find((r)=>r.type === "character_intro");
                if (v && p) {
                    const r = v.data.content.split(" ");
                    let n = "";
                    for (const I of r)n += (n ? " " : "") + I, p(n), await new Promise((l)=>setTimeout(l, 50));
                }
            } catch (u) {
                console.error("Initialize Chat Error:", u), _.error("LLM 调用失败，请前往 LLM 配置页面进行配置", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>f({
                                to: "/config/llm"
                            })
                    }
                });
            } finally{
                i.current = !1;
            }
        }, [
            a,
            e
        ]), y = d.useCallback(async (p, u)=>{
            if (!(i.current || !e || !a)) try {
                i.current = !0, a.addLLMResponseAsContextItem({
                    role: "user",
                    content: p
                }, {});
                const { makeChatModeLLMMessagesFromContextStateForCharacterId: h } = await b(async ()=>{
                    const { makeChatModeLLMMessagesFromContextStateForCharacterId: l } = await import("./PlayerInputItem-Da1zrXFw.js").then((C)=>C.c);
                    return {
                        makeChatModeLLMMessagesFromContextStateForCharacterId: l
                    };
                }, __vite__mapDeps([9,0,1,2,3,4,5,6,7,8,10,11,12,13,14,15])), r = h(a.state, {
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
                    I = C, u?.(l);
                    const s = a.getProcessingItem();
                    s && (s.data.content = I);
                }), n.data.content = I, a.completeProcessingItem();
            } catch (h) {
                console.error("ChatLoop Error:", h), _.error("LLM 调用失败，请前往 LLM 配置页面进行配置", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>f({
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
            o
        ]);
        return {
            initializeChat: w,
            sendUserMessage: y
        };
    }
    let q, G;
    ve = (e)=>{
        const [a, o] = d.useState(""), [i, f] = d.useState(!1), [w, y] = d.useState(""), [p, u] = d.useState(!1), { data: h = [] } = D((s)=>s.from({
                s: B
            })), { data: v = [] } = D((s)=>s.from({
                c: R
            })), r = h.find((s)=>s.id === e.sessionId), n = v.find((s)=>s.id === r?.characterId);
        d.useEffect(()=>{
            let s = !1;
            return u(!1), (async ()=>{
                if (r) try {
                    const g = await H.createSessionDB(r.id).getContextItems();
                    if (s) return;
                    const j = {
                        historyItems: g,
                        processingItem: void 0
                    }, A = new S(j);
                    m.contextManager = A, L(r.id), u(!0);
                } catch  {
                    if (!s) {
                        const x = new S({
                            historyItems: [],
                            processingItem: void 0
                        });
                        m.contextManager = x, u(!0);
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
        const { sendUserMessage: I, initializeChat: l } = Q(n, m.contextManager);
        if (d.useEffect(()=>{
            p && m.contextManager?.getHistoryCount() === 0 && n && r && (async ()=>{
                if (await l((c)=>{
                    y((x)=>x + c);
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
                f(!0), y("");
                try {
                    if (await I(a, (s)=>{
                        y((c)=>c + s);
                    }), m.contextManager && r) {
                        const c = m.contextManager.getHistoryItems().filter((x)=>!x.processing);
                        c.length > 0 && await m.saveNewContextItemsToDB(r.id, c);
                    }
                } catch (s) {
                    console.error("Send message error:", s);
                } finally{
                    f(!1), y("");
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
                                    const s = m.contextManager?.getVisibleHistoryItems() || [], c = m.contextManager?.getProcessingItem(), x = [
                                        ...s
                                    ];
                                    return c && !s.some((g)=>g.id === c.id) && x.push(c), x.map((g, j)=>t.jsx(q, {
                                            item: g,
                                            character: n,
                                            isProcessing: g.processing || void 0,
                                            streamingText: g.processing ? w : void 0
                                        }, `[${j}]${g.id}`));
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
                                                children: t.jsx(Y, {
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
    q = (e)=>{
        switch(e.item.type){
            case "character_intro":
                return t.jsx(V, {
                    item: e.item,
                    character: e.character
                });
            case "character_message":
                return e.isProcessing ? t.jsx(G, {
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
    G = (e)=>e.item.type === "character_message" ? t.jsxs("div", {
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
export { ve as SessionMainForChat, __tla };
