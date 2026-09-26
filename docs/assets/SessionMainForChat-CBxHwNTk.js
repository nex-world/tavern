const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-b5fCn9mB.js","assets/@tanstack-HvIyZ7G-.js","assets/react-CdECYH1o.js","assets/vendor-BK50ji10.js","assets/formatting-BBnWba-L.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-B_g1HnUg.js","assets/zod-BTj0C3yc.js","assets/analytics-BjBUYDN_.js","assets/nex-tavern-uuid-CXz893WL.js","assets/index-k6qYjFMJ.js","assets/icons-LD1dlQlv.js","assets/index-BOxVUFQ5.css","assets/id-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { e as k, r as y, t as L, j as a } from "./react-CdECYH1o.js";
import { u as G, C as U, M as B, S as K, b as Y, c as $, a as Q } from "./conversation-message-BwOyJT_A.js";
import { S as q, __tla as __tla_0 } from "./session._sessionId-DmltwlKl.js";
import { S as P } from "./skeleton-D8tABb8R.js";
import { E as J, d as W } from "./empty-D_9_HEmg.js";
import { I as X, d as Z, b as ee } from "./input-group-Y3ah1Rbi.js";
import { k as te, S as se, C as ae, l as R } from "./db-master-b5fCn9mB.js";
import { h as ne, k as A } from "./@tanstack-HvIyZ7G-.js";
import { s as re } from "./db-BnATHJL5.js";
import { _ as D, __tla as __tla_1 } from "./index-k6qYjFMJ.js";
import { n as j } from "./id-BY9c7rfI.js";
import { C as b } from "./context-manager.class-I6ERY2vv.js";
import { B as oe } from "./button-DXPhLBkO.js";
import { C as z } from "./CharacterAvatar-C5WMuKF2.js";
import { P as F, C as H, a as ie } from "./PlayerInputItem-CkD1KaPf.js";
import { u as ce } from "./useLLM-CtGCYvq3.js";
import { a as me } from "./analytics-BjBUYDN_.js";
import { b as le } from "./icons-LD1dlQlv.js";
import "./vendor-BK50ji10.js";
import "./formatting-BBnWba-L.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./alert-DSZBkTkP.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./@tailwind-CPcsbTWB.js";
import "./reading-settings.store-BQ85Rkks.js";
import "./collapsible-CruqMeF1.js";
import "./es-toolkit-9bjl2JfA.js";
import "./spinner-DANPY4R7.js";
import "./tavern-model-config-button-CxHHDyv1.js";
import "./responsive-dialog-BySnrNxs.js";
import "./form-width-constraints-n6SdO9NQ.js";
import "./alert-dialog-DAc-q07k.js";
import "./ai-settings-NDNTds_Q.js";
import "./tavern-llm-config-editor-CIGpfO_r.js";
import "./input-DbakF4VO.js";
import "./field-6rZnMWyu.js";
import "./label-fnuupfsA.js";
import "./select-Czt6njHx.js";
import "./switch-DzOF-yP9.js";
import "./InvitationGuard-Duw6q46K.js";
import "./nex-tavern-uuid-CXz893WL.js";
import "./textarea-tLeysPi9.js";
import "./zod-BTj0C3yc.js";
import "./dexie-B_g1HnUg.js";
import "./avatar-C5_yDDay.js";
let dt;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })()
]).then(async ()=>{
    const de = /\{\{([^:]+):([^}]+)\}\}/gi, ue = /^d/i;
    function E(e, t, o) {
        let s = e;
        const n = t.nickname || t.name || "{{char}}", i = o?.userName || "{{user}}";
        return s = s.replace(/\{\{char\}\}/gi, n), s = s.replace(/\{\{user\}\}/gi, i), s = s.replace(/<BOT>/gi, n), s = s.replace(/<USER>/gi, i), s = s.replace(de, (g, u, f)=>{
            switch(u.toLowerCase()){
                case "random":
                    {
                        const m = f.split(",").map((I)=>I.replace(/\\,/g, ",").trim());
                        return m[Math.floor(Math.random() * m.length)] || "";
                    }
                case "pick":
                    {
                        const m = f.split(",").map((I)=>I.replace(/\\,/g, ",").trim());
                        return m[Math.floor(Math.random() * m.length)] || "";
                    }
                case "roll":
                    {
                        const m = Number.parseInt(f.replace(ue, ""), 10);
                        return Number.isNaN(m) || m < 1 ? "1" : (Math.floor(Math.random() * m) + 1).toString();
                    }
                case "//":
                    return "";
                case "hidden_key":
                    return "";
                case "comment":
                    return "";
                case "reverse":
                    return f.split("").reverse().join("");
                default:
                    return g;
            }
        }), s;
    }
    function T(e, t) {
        let o;
        return e.system_prompt && e.system_prompt.trim() !== "" ? (o = e.system_prompt, o = o.replaceAll("{{original}}", t?.originalSystemPrompt || "")) : (o = [
            `你是 ${e.name}，请根据你的性格和背景进行回应。保持角色的一致性。`,
            "=====[角色描述]=====",
            e.description,
            "=====[角色性格]=====",
            e.personality,
            "=====[聊天场景]=====",
            e.scenario,
            "=====[示例回复]=====",
            e.mes_example
        ].filter((s)=>s.trim() !== "").join(`

`), o.trim() === "" && (o = t?.originalSystemPrompt || "")), o = E(o, e, t), o.trim();
    }
    function ge(e, t) {
        const o = T(e, t), s = [
            e.first_mes,
            ...e?.alternate_greetings ?? []
        ], n = s[Math.floor(Math.random() * s.length)], i = E(n, e, t);
        return [
            {
                role: "system",
                content: o
            },
            {
                role: "assistant",
                content: i
            }
        ];
    }
    function he(e, t) {
        const o = T(e, t), s = [
            e.first_mes,
            ...e?.alternate_greetings ?? []
        ], n = s[Math.floor(Math.random() * s.length)], i = E(n, e, t), g = {
            id: j(),
            type: "starting_system_message",
            idx: 0,
            orderRef: 0,
            timestamp: Date.now(),
            data: {
                content: o
            }
        }, u = {
            id: j(),
            type: "character_intro",
            idx: 1,
            orderRef: 0,
            timestamp: Date.now() + 1,
            data: {
                characterId: e.id,
                content: i
            }
        };
        return [
            g,
            u
        ];
    }
    const V = (e, t)=>{
        if (t?.characterId === void 0) return [];
        const o = te.parse(e), s = [];
        for (const n of o.historyItems)if (!(n.deleted || n.hidden)) switch(n.type){
            case "starting_system_message":
            case "in_context_system_message":
                s.push({
                    role: "system",
                    content: n.data.content,
                    name: n.data.name
                });
                break;
            case "character_intro":
                s.push({
                    role: "assistant",
                    content: n.data.content,
                    name: n.data.name
                });
                break;
            case "participant_message":
            case "character_message":
                {
                    const i = n.data, g = i.characterId === t.characterId;
                    s.push({
                        role: g ? "assistant" : "user",
                        content: i.content,
                        name: i.name
                    });
                    break;
                }
            case "participant_message_group":
            case "character_message_group":
                {
                    const i = n.data, g = i.characterId === t.characterId, u = i.list.map((f)=>f.content).join(`
`);
                    s.push({
                        role: g ? "assistant" : "user",
                        content: u,
                        name: i.name
                    });
                    break;
                }
            case "summary":
                s.push({
                    role: "user",
                    content: n.data.content
                });
                break;
            case "llm_message":
            case "story_telling":
                s.push({
                    role: n.data.role,
                    content: n.data.content,
                    name: n.data.name
                });
                break;
            case "tool_message":
                s.push({
                    role: "tool",
                    content: n.data.content,
                    name: n.data.name
                });
                break;
        }
        return s;
    }, O = Object.freeze(Object.defineProperty({
        __proto__: null,
        makeChatModeCharacterSystemPrompt_CN: T,
        makeChatModeLLMMessagesFromContextStateForCharacterId: V,
        makeChatModeStartingContextItems_CN: he,
        makeChatModeStartingMessages_CN: ge
    }, Symbol.toStringTag, {
        value: "Module"
    })), p = k({
        currentSession: null,
        contextManager: null,
        get messages () {
            if (!(this.contextManager && this.currentSession)) return [];
            const e = V(this.contextManager.state, {
                characterId: this.currentSession.modeConfig.characterId
            });
            return Array.isArray(e) ? e : [];
        },
        startNewSession (e, t) {
            const o = {
                id: j(),
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
            const s = new b(t || {
                historyItems: [],
                processingItem: void 0
            });
            return s.state = k(s.state), this.contextManager = s, o;
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
            this.currentSession = e.session, e.contextState && (this.contextManager = new b(e.contextState), this.contextManager.state = k(this.contextManager.state));
        },
        loadSession (e) {
            this.currentSession = e;
        },
        async saveNewContextItemsToDB (e, t) {
            const { SessionDB: o } = await D(async ()=>{
                const { SessionDB: n } = await import("./db-master-b5fCn9mB.js").then((i)=>i.A);
                return {
                    SessionDB: n
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]));
            await new o(e).addContextItems(t);
        }
    });
    function fe(e, t, o) {
        const s = ce(), n = y.useRef(!1), [i, g] = y.useState(!1), u = ne(), f = y.useCallback(async (m)=>{
            if (!(n.current || !t || t.getHistoryCount() > 0 || !e)) try {
                n.current = !0, g(!0);
                const { makeChatModeStartingContextItems_CN: I } = await D(async ()=>{
                    const { makeChatModeStartingContextItems_CN: C } = await Promise.resolve().then(()=>O);
                    return {
                        makeChatModeStartingContextItems_CN: C
                    };
                }, void 0), l = I(e);
                for (const C of l)t.addHistoryItem(C);
                const c = l.find((C)=>C.type === "character_intro");
                if (c && m) {
                    const C = c.data.content.split(" ");
                    let _ = "";
                    for (const M of C)_ += (_ ? " " : "") + M, m(_), await new Promise((S)=>setTimeout(S, 50));
                }
            } catch (I) {
                console.error("Initialize Chat Error:", I), L.error("对话服务调用失败，请打开 AI 设置检查连接", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>u({
                                to: "/config/llm"
                            })
                    }
                });
            } finally{
                n.current = !1, g(!1);
            }
        }, [
            t,
            e,
            u
        ]), w = y.useCallback(async (m, I, l)=>{
            if (!(n.current || !e || !t)) try {
                n.current = !0, g(!0), t.addLLMResponseAsContextItem({
                    role: "user",
                    content: m
                }, {}), l?.(), await p.saveNewContextItemsToDB(o, t.getHistoryItems());
                const { makeChatModeLLMMessagesFromContextStateForCharacterId: c } = await D(async ()=>{
                    const { makeChatModeLLMMessagesFromContextStateForCharacterId: r } = await Promise.resolve().then(()=>O);
                    return {
                        makeChatModeLLMMessagesFromContextStateForCharacterId: r
                    };
                }, void 0), _ = c(t.state, {
                    characterId: e.id
                }).map((r)=>({
                        id: j(),
                        role: r.role,
                        content: r.content,
                        name: r.name
                    })), M = {
                    id: j(),
                    type: "character_message",
                    orderRef: 0,
                    timestamp: Date.now(),
                    data: {
                        characterId: e.id,
                        content: "",
                        name: e.name
                    }
                };
                t.setProcessingItem(M);
                let S = "";
                await s.callLLMStream(_, (r, h)=>{
                    S = h, I?.(r);
                    const x = t.getProcessingItem();
                    x && (x.data.content = S);
                }), M.data.content = S, t.completeProcessingItem();
            } catch (c) {
                throw t.setProcessingItem(void 0), console.error("ChatLoop Error:", c), L.error("对话服务调用失败，请打开 AI 设置检查连接", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>u({
                                to: "/config/llm"
                            })
                    }
                }), c;
            } finally{
                n.current = !1, g(!1);
            }
        }, [
            t,
            e,
            s,
            u,
            o
        ]);
        return {
            initializeChat: f,
            sendUserMessage: w,
            isBusy: i
        };
    }
    let pe, xe;
    dt = (e)=>{
        const [t, o] = y.useState(""), s = G(), [n, i] = y.useState(!1), [g, u] = y.useState(""), [f, w] = y.useState(!1), { data: m = [] } = A((r)=>r.from({
                s: se
            })), { data: I = [] } = A((r)=>r.from({
                c: ae
            })), l = m.find((r)=>r.id === e.sessionId), c = I.find((r)=>r.id === l?.characterId);
        y.useEffect(()=>{
            let r = !1;
            return w(!1), (async ()=>{
                if (l) try {
                    const d = await re.createSessionDB(l.id).getContextItems();
                    if (r) return;
                    const v = {
                        historyItems: d,
                        processingItem: void 0
                    }, N = new b(v);
                    p.contextManager = N, R(l.id), w(!0);
                } catch  {
                    if (!r) {
                        const x = new b({
                            historyItems: [],
                            processingItem: void 0
                        });
                        p.contextManager = x, w(!0);
                    }
                }
            })(), ()=>{
                r = !0;
            };
        }, [
            l
        ]), y.useEffect(()=>()=>{
                e.sessionId && R(e.sessionId);
            }, [
            e.sessionId
        ]);
        const { sendUserMessage: C, initializeChat: _, isBusy: M } = fe(c, p.contextManager, e.sessionId);
        if (y.useEffect(()=>{
            f && p.contextManager?.getHistoryCount() === 0 && c && l && (async ()=>{
                if (await _((h)=>{
                    u((x)=>x + h);
                }), p.contextManager) {
                    const h = p.contextManager.getHistoryItems();
                    h.length > 0 && await p.saveNewContextItemsToDB(l.id, h);
                }
            })();
        }, [
            f,
            _,
            c,
            l
        ]), !(l && c)) return a.jsx(J, {
            className: "py-8",
            children: a.jsx(W, {
                children: "会话不存在或已删除"
            })
        });
        const S = ()=>{
            const r = t, h = p.contextManager;
            return s.submit(r, f && !n && !M, ()=>o(""), async (x)=>{
                i(!0), u("");
                try {
                    if (await C(r, (d)=>{
                        u((v)=>v + d);
                    }, x), me(e.sessionId, "chat"), h && l) {
                        const v = h.getHistoryItems().filter((N)=>!N.processing);
                        v.length > 0 && await p.saveNewContextItemsToDB(l.id, v);
                    }
                } catch (d) {
                    throw d;
                } finally{
                    i(!1), u("");
                }
            });
        };
        return a.jsx("div", {
            className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden bg-background",
            children: a.jsxs("div", {
                className: "flex min-h-0 min-w-0 flex-1 flex-col",
                children: [
                    a.jsx(q, {
                        title: c.name,
                        subtitle: c.nickname || "角色对话",
                        avatar: a.jsx(z, {
                            character: c,
                            size: "xs",
                            shape: "circle"
                        })
                    }),
                    a.jsxs(U, {
                        children: [
                            (()=>{
                                const r = p.contextManager?.getVisibleHistoryItems() || [], h = p.contextManager?.getProcessingItem(), x = [
                                    ...r
                                ];
                                return h && !r.some((d)=>d.id === h.id) && x.push(h), x.map((d)=>a.jsx(B, {
                                        messageId: d.id,
                                        scrollAnchor: d.type === "participant_message" || d.type === "gc_user_message",
                                        children: a.jsx(pe, {
                                            item: d,
                                            character: c,
                                            isProcessing: d.processing || void 0,
                                            streamingText: d.processing ? g : void 0
                                        })
                                    }, d.id));
                            })(),
                            n && !p.contextManager?.getProcessingItem() && a.jsx(B, {
                                messageId: "reply-pending",
                                role: "status",
                                "aria-label": "正在回复",
                                children: a.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [
                                        a.jsx(P, {
                                            className: "size-10 rounded-full shrink-0"
                                        }),
                                        a.jsxs("div", {
                                            className: "flex flex-col gap-3 grow pt-2",
                                            children: [
                                                a.jsx(P, {
                                                    className: "h-4 w-1/4"
                                                }),
                                                a.jsx(P, {
                                                    className: "h-24 w-full"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }, e.sessionId),
                    a.jsxs("div", {
                        className: "border-t px-3 py-2 sm:px-5 shrink-0 bg-background",
                        children: [
                            a.jsxs("div", {
                                className: "max-w-4xl mx-auto relative group",
                                children: [
                                    a.jsx(K, {
                                        draft: t,
                                        onRestore: o,
                                        text: s.failure,
                                        onDismiss: s.dismiss
                                    }),
                                    a.jsxs(X, {
                                        className: "mx-auto max-w-4xl",
                                        children: [
                                            a.jsx(Z, {
                                                "aria-label": "消息内容",
                                                value: t,
                                                onChange: (r)=>o(r.target.value),
                                                placeholder: `向 ${c.name} 发送消息...`,
                                                rows: 1,
                                                className: "min-h-10 max-h-[min(10rem,25dvh)] overflow-y-auto",
                                                onKeyDown: (r)=>{
                                                    r.key === "Enter" && !r.shiftKey && !r.nativeEvent.isComposing && r.keyCode !== 229 && (r.preventDefault(), S());
                                                }
                                            }),
                                            a.jsx(ee, {
                                                align: "inline-end",
                                                className: "self-end pb-1.5",
                                                children: a.jsx(oe, {
                                                    "aria-label": "发送消息",
                                                    size: "icon",
                                                    disabled: !t.trim() || !f || n || M,
                                                    onClick: S,
                                                    type: "button",
                                                    children: a.jsx(le, {
                                                        "data-icon": "inline-start"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            a.jsx("p", {
                                className: "mt-1 text-center text-xs text-muted-foreground",
                                children: "Enter 发送 · Shift + Enter 换行"
                            })
                        ]
                    })
                ]
            })
        });
    };
    pe = (e)=>{
        switch(e.item.type){
            case "character_intro":
                return a.jsx(ie, {
                    item: e.item,
                    character: e.character
                });
            case "character_message":
                return e.isProcessing ? a.jsx(xe, {
                    item: e.item,
                    character: e.character,
                    streamingText: e.streamingText || ""
                }) : a.jsx(H, {
                    item: e.item,
                    character: e.character
                });
            case "character_message_group":
                return a.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: (e.item.data.list || []).map((t, o)=>a.jsx(H, {
                            item: {
                                ...e.item,
                                type: "character_message",
                                data: {
                                    ...e.item.data,
                                    content: t.content,
                                    timestamp: t.timestamp
                                }
                            },
                            character: e.character
                        }, t.id || o))
                });
            case "participant_message":
                return a.jsx(F, {
                    item: e.item
                });
            case "participant_message_group":
                return a.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: (e.item.data.list || []).map((t, o)=>a.jsx(F, {
                            item: {
                                ...e.item,
                                type: "participant_message",
                                data: {
                                    ...e.item.data,
                                    content: t.content,
                                    timestamp: t.timestamp
                                }
                            }
                        }, t.id || o))
                });
            case "system_notification":
                return a.jsx(Y, {
                    variant: "separator",
                    children: a.jsx($, {
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
    xe = (e)=>e.item.type === "character_message" ? a.jsx(Q, {
            name: e.character.name,
            avatar: a.jsx(z, {
                character: e.character,
                size: "sm"
            }),
            footer: "正在回复…",
            children: e.streamingText || e.item.data.content
        }) : null;
});
export { dt as SessionMainForChat, __tla };
