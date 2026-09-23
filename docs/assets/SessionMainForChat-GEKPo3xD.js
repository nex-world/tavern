const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-DpInMzGh.js","assets/@tanstack-8dqqXYTU.js","assets/react-Cp7JIDMn.js","assets/vendor-C24HE5AE.js","assets/formatting-KflFifHg.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-DSi1kBxz.js","assets/zod-BTj0C3yc.js","assets/analytics-DqIS_F3D.js","assets/nex-tavern-uuid-B02Y_twK.js","assets/index-Dvos9xYb.js","assets/icons-Dc5fwOe3.js","assets/index-B5OkmrnP.css","assets/id-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { s as v, r as I, t as P, j as a } from "./react-Cp7JIDMn.js";
import { S as z, __tla as __tla_0 } from "./session._sessionId-BpsB7WAa.js";
import { S as j } from "./skeleton-CtEN8_Oh.js";
import { C as V, M as L, b as G, c as U, a as K } from "./conversation-message-BZgJiHtS.js";
import { E as Y, a as $ } from "./empty-BQ47fiAO.js";
import { I as Q, c as q, b as J } from "./input-group-BLS_bbvz.js";
import { k as W, S as X, C as Z, l as D } from "./db-master-DpInMzGh.js";
import { f as ee, m as E } from "./@tanstack-8dqqXYTU.js";
import { s as te } from "./db-C6a7nMI2.js";
import { _ as N, __tla as __tla_1 } from "./index-Dvos9xYb.js";
import { n as S } from "./id-BY9c7rfI.js";
import { C as w } from "./context-manager.class-CetS2fXT.js";
import { B as se } from "./button-p-Zf1khH.js";
import { C as B } from "./CharacterAvatar-C7K0X6_t.js";
import { P as T, C as R, a as ae } from "./PlayerInputItem-Bb5XigwW.js";
import { u as ne } from "./useLLM-dxiXMELK.js";
import { a as re } from "./analytics-DqIS_F3D.js";
import { f as oe } from "./icons-Dc5fwOe3.js";
import "./vendor-C24HE5AE.js";
import "./formatting-KflFifHg.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./tavern-model-config-button-zuZSrgaX.js";
import "./responsive-dialog-CnPA2NUp.js";
import "./form-width-constraints-n6SdO9NQ.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-CPcsbTWB.js";
import "./alert-dialog-B2Ci2Y_l.js";
import "./global-llm-config.store-CXBroG1M.js";
import "./es-toolkit-9bjl2JfA.js";
import "./tavern-llm-config-editor-B6tyngf3.js";
import "./select-Whuypjrp.js";
import "./field-CA4kBoof.js";
import "./label-PMstkkML.js";
import "./checkbox-BmIkQT6j.js";
import "./draft-field-Cab9dfFm.js";
import "./input-Dv-vR-0h.js";
import "./textarea-BWW78K6H.js";
import "./InvitationGuard-BDZ9QGpc.js";
import "./nex-tavern-uuid-B02Y_twK.js";
import "./collapsible-LmfNNF2P.js";
import "./spinner-fCA3hgE0.js";
import "./zod-BTj0C3yc.js";
import "./dexie-DSi1kBxz.js";
import "./avatar-qY3aVgMP.js";
let ot;
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
    const ie = /\{\{([^:]+):([^}]+)\}\}/gi, ce = /^d/i;
    function b(e, t, n) {
        let s = e;
        const r = t.nickname || t.name || "{{char}}", c = n?.userName || "{{user}}";
        return s = s.replace(/\{\{char\}\}/gi, r), s = s.replace(/\{\{user\}\}/gi, c), s = s.replace(/<BOT>/gi, r), s = s.replace(/<USER>/gi, c), s = s.replace(ie, (u, h, m)=>{
            switch(h.toLowerCase()){
                case "random":
                    {
                        const d = m.split(",").map((i)=>i.replace(/\\,/g, ",").trim());
                        return d[Math.floor(Math.random() * d.length)] || "";
                    }
                case "pick":
                    {
                        const d = m.split(",").map((i)=>i.replace(/\\,/g, ",").trim());
                        return d[Math.floor(Math.random() * d.length)] || "";
                    }
                case "roll":
                    {
                        const d = Number.parseInt(m.replace(ce, ""), 10);
                        return Number.isNaN(d) || d < 1 ? "1" : (Math.floor(Math.random() * d) + 1).toString();
                    }
                case "//":
                    return "";
                case "hidden_key":
                    return "";
                case "comment":
                    return "";
                case "reverse":
                    return m.split("").reverse().join("");
                default:
                    return u;
            }
        }), s;
    }
    function k(e, t) {
        let n;
        return e.system_prompt && e.system_prompt.trim() !== "" ? (n = e.system_prompt, n = n.replaceAll("{{original}}", t?.originalSystemPrompt || "")) : (n = [
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

`), n.trim() === "" && (n = t?.originalSystemPrompt || "")), n = b(n, e, t), n.trim();
    }
    function me(e, t) {
        const n = k(e, t), s = [
            e.first_mes,
            ...e?.alternate_greetings ?? []
        ], r = s[Math.floor(Math.random() * s.length)], c = b(r, e, t);
        return [
            {
                role: "system",
                content: n
            },
            {
                role: "assistant",
                content: c
            }
        ];
    }
    function le(e, t) {
        const n = k(e, t), s = [
            e.first_mes,
            ...e?.alternate_greetings ?? []
        ], r = s[Math.floor(Math.random() * s.length)], c = b(r, e, t), u = {
            id: S(),
            type: "starting_system_message",
            idx: 0,
            orderRef: 0,
            timestamp: Date.now(),
            data: {
                content: n
            }
        }, h = {
            id: S(),
            type: "character_intro",
            idx: 1,
            orderRef: 0,
            timestamp: Date.now() + 1,
            data: {
                characterId: e.id,
                content: c
            }
        };
        return [
            u,
            h
        ];
    }
    const F = (e, t)=>{
        if (t?.characterId === void 0) return [];
        const n = W.parse(e), s = [];
        for (const r of n.historyItems)if (!(r.deleted || r.hidden)) switch(r.type){
            case "starting_system_message":
            case "in_context_system_message":
                s.push({
                    role: "system",
                    content: r.data.content,
                    name: r.data.name
                });
                break;
            case "character_intro":
                s.push({
                    role: "assistant",
                    content: r.data.content,
                    name: r.data.name
                });
                break;
            case "participant_message":
            case "character_message":
                {
                    const c = r.data, u = c.characterId === t.characterId;
                    s.push({
                        role: u ? "assistant" : "user",
                        content: c.content,
                        name: c.name
                    });
                    break;
                }
            case "participant_message_group":
            case "character_message_group":
                {
                    const c = r.data, u = c.characterId === t.characterId, h = c.list.map((m)=>m.content).join(`
`);
                    s.push({
                        role: u ? "assistant" : "user",
                        content: h,
                        name: c.name
                    });
                    break;
                }
            case "summary":
                s.push({
                    role: "user",
                    content: r.data.content
                });
                break;
            case "llm_message":
            case "story_telling":
                s.push({
                    role: r.data.role,
                    content: r.data.content,
                    name: r.data.name
                });
                break;
            case "tool_message":
                s.push({
                    role: "tool",
                    content: r.data.content,
                    name: r.data.name
                });
                break;
        }
        return s;
    }, A = Object.freeze(Object.defineProperty({
        __proto__: null,
        makeChatModeCharacterSystemPrompt_CN: k,
        makeChatModeLLMMessagesFromContextStateForCharacterId: F,
        makeChatModeStartingContextItems_CN: le,
        makeChatModeStartingMessages_CN: me
    }, Symbol.toStringTag, {
        value: "Module"
    })), f = v({
        currentSession: null,
        contextManager: null,
        get messages () {
            if (!(this.contextManager && this.currentSession)) return [];
            const e = F(this.contextManager.state, {
                characterId: this.currentSession.modeConfig.characterId
            });
            return Array.isArray(e) ? e : [];
        },
        startNewSession (e, t) {
            const n = {
                id: S(),
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
            this.currentSession = n;
            const s = new w(t || {
                historyItems: [],
                processingItem: void 0
            });
            return s.state = v(s.state), this.contextManager = s, n;
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
            this.currentSession = e.session, e.contextState && (this.contextManager = new w(e.contextState), this.contextManager.state = v(this.contextManager.state));
        },
        loadSession (e) {
            this.currentSession = e;
        },
        async saveNewContextItemsToDB (e, t) {
            const { SessionDB: n } = await N(async ()=>{
                const { SessionDB: r } = await import("./db-master-DpInMzGh.js").then((c)=>c.A);
                return {
                    SessionDB: r
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]));
            await new n(e).addContextItems(t);
        }
    });
    function de(e, t) {
        const n = ne(), s = I.useRef(!1), r = ee(), c = I.useCallback(async (h)=>{
            if (!(s.current || !t || t.getHistoryCount() > 0 || !e)) try {
                s.current = !0;
                const { makeChatModeStartingContextItems_CN: m } = await N(async ()=>{
                    const { makeChatModeStartingContextItems_CN: i } = await Promise.resolve().then(()=>A);
                    return {
                        makeChatModeStartingContextItems_CN: i
                    };
                }, void 0), y = m(e);
                for (const i of y)t.addHistoryItem(i);
                const d = y.find((i)=>i.type === "character_intro");
                if (d && h) {
                    const i = d.data.content.split(" ");
                    let l = "";
                    for (const _ of i)l += (l ? " " : "") + _, h(l), await new Promise((p)=>setTimeout(p, 50));
                }
            } catch (m) {
                console.error("Initialize Chat Error:", m), P.error("LLM 调用失败，请前往 LLM 配置页面进行配置", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>r({
                                to: "/config/llm"
                            })
                    }
                });
            } finally{
                s.current = !1;
            }
        }, [
            t,
            e,
            r
        ]), u = I.useCallback(async (h, m)=>{
            if (!(s.current || !e || !t)) try {
                s.current = !0, t.addLLMResponseAsContextItem({
                    role: "user",
                    content: h
                }, {});
                const { makeChatModeLLMMessagesFromContextStateForCharacterId: y } = await N(async ()=>{
                    const { makeChatModeLLMMessagesFromContextStateForCharacterId: p } = await Promise.resolve().then(()=>A);
                    return {
                        makeChatModeLLMMessagesFromContextStateForCharacterId: p
                    };
                }, void 0), i = y(t.state, {
                    characterId: e.id
                }).map((p)=>({
                        id: S(),
                        role: p.role,
                        content: p.content,
                        name: p.name
                    })), l = {
                    id: S(),
                    type: "character_message",
                    orderRef: 0,
                    timestamp: Date.now(),
                    data: {
                        characterId: e.id,
                        content: "",
                        name: e.name
                    }
                };
                t.setProcessingItem(l);
                let _ = "";
                await n.callLLMStream(i, (p, M)=>{
                    _ = M, m?.(p);
                    const o = t.getProcessingItem();
                    o && (o.data.content = _);
                }), l.data.content = _, t.completeProcessingItem();
            } catch (y) {
                console.error("ChatLoop Error:", y), P.error("LLM 调用失败，请前往 LLM 配置页面进行配置", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>r({
                                to: "/config/llm"
                            })
                    }
                });
            } finally{
                s.current = !1;
            }
        }, [
            t,
            e,
            n,
            r
        ]);
        return {
            initializeChat: c,
            sendUserMessage: u
        };
    }
    let ue, ge;
    ot = (e)=>{
        const [t, n] = I.useState(""), [s, r] = I.useState(!1), [c, u] = I.useState(""), [h, m] = I.useState(!1), { data: y = [] } = E((o)=>o.from({
                s: X
            })), { data: d = [] } = E((o)=>o.from({
                c: Z
            })), i = y.find((o)=>o.id === e.sessionId), l = d.find((o)=>o.id === i?.characterId);
        I.useEffect(()=>{
            let o = !1;
            return m(!1), (async ()=>{
                if (i) try {
                    const x = await te.createSessionDB(i.id).getContextItems();
                    if (o) return;
                    const O = {
                        historyItems: x,
                        processingItem: void 0
                    }, H = new w(O);
                    f.contextManager = H, D(i.id), m(!0);
                } catch  {
                    if (!o) {
                        const C = new w({
                            historyItems: [],
                            processingItem: void 0
                        });
                        f.contextManager = C, m(!0);
                    }
                }
            })(), ()=>{
                o = !0;
            };
        }, [
            i
        ]), I.useEffect(()=>()=>{
                e.sessionId && D(e.sessionId);
            }, [
            e.sessionId
        ]);
        const { sendUserMessage: _, initializeChat: p } = de(l, f.contextManager);
        if (I.useEffect(()=>{
            h && f.contextManager?.getHistoryCount() === 0 && l && i && (async ()=>{
                if (await p((g)=>{
                    u((C)=>C + g);
                }), f.contextManager) {
                    const g = f.contextManager.getHistoryItems();
                    g.length > 0 && await f.saveNewContextItemsToDB(i.id, g);
                }
            })();
        }, [
            h,
            p,
            l,
            i
        ]), !(i && l)) return a.jsx(Y, {
            className: "py-8",
            children: a.jsx($, {
                children: "会话不存在或已删除"
            })
        });
        const M = async ()=>{
            if (!(!t.trim() || s)) {
                r(!0), u("");
                try {
                    if (await _(t, (o)=>{
                        u((g)=>g + o);
                    }), re(e.sessionId, "chat"), f.contextManager && i) {
                        const g = f.contextManager.getHistoryItems().filter((C)=>!C.processing);
                        g.length > 0 && await f.saveNewContextItemsToDB(i.id, g);
                    }
                } catch (o) {
                    console.error("Send message error:", o);
                } finally{
                    r(!1), u("");
                }
                n("");
            }
        };
        return a.jsx("div", {
            className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden bg-background",
            children: a.jsxs("div", {
                className: "flex min-h-0 min-w-0 flex-1 flex-col",
                children: [
                    a.jsx(z, {
                        title: l.name,
                        subtitle: l.nickname || "角色对话",
                        avatar: a.jsx(B, {
                            character: l,
                            size: "xs",
                            shape: "circle"
                        })
                    }),
                    a.jsxs(V, {
                        children: [
                            (()=>{
                                const o = f.contextManager?.getVisibleHistoryItems() || [], g = f.contextManager?.getProcessingItem(), C = [
                                    ...o
                                ];
                                return g && !o.some((x)=>x.id === g.id) && C.push(g), C.map((x)=>a.jsx(L, {
                                        messageId: x.id,
                                        scrollAnchor: x.type === "participant_message" || x.type === "gc_user_message",
                                        children: a.jsx(ue, {
                                            item: x,
                                            character: l,
                                            isProcessing: x.processing || void 0,
                                            streamingText: x.processing ? c : void 0
                                        })
                                    }, x.id));
                            })(),
                            s && !f.contextManager?.getProcessingItem() && a.jsx(L, {
                                messageId: "reply-pending",
                                role: "status",
                                "aria-label": "正在回复",
                                children: a.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [
                                        a.jsx(j, {
                                            className: "size-10 rounded-full shrink-0"
                                        }),
                                        a.jsxs("div", {
                                            className: "flex flex-col gap-3 grow pt-2",
                                            children: [
                                                a.jsx(j, {
                                                    className: "h-4 w-1/4"
                                                }),
                                                a.jsx(j, {
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
                            a.jsx("div", {
                                className: "max-w-4xl mx-auto relative group",
                                children: a.jsxs(Q, {
                                    className: "mx-auto max-w-4xl",
                                    children: [
                                        a.jsx(q, {
                                            "aria-label": "消息内容",
                                            value: t,
                                            onChange: (o)=>n(o.target.value),
                                            placeholder: `向 ${l.name} 发送消息...`,
                                            rows: 1,
                                            className: "min-h-10 max-h-[min(10rem,25dvh)] overflow-y-auto",
                                            onKeyDown: (o)=>{
                                                o.key === "Enter" && !o.shiftKey && !o.nativeEvent.isComposing && (o.preventDefault(), M());
                                            }
                                        }),
                                        a.jsx(J, {
                                            align: "inline-end",
                                            className: "self-end pb-1.5",
                                            children: a.jsx(se, {
                                                "aria-label": "发送消息",
                                                size: "icon",
                                                disabled: !t.trim() || s,
                                                onClick: M,
                                                type: "button",
                                                children: a.jsx(oe, {
                                                    "data-icon": "inline-start"
                                                })
                                            })
                                        })
                                    ]
                                })
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
    ue = (e)=>{
        switch(e.item.type){
            case "character_intro":
                return a.jsx(ae, {
                    item: e.item,
                    character: e.character
                });
            case "character_message":
                return e.isProcessing ? a.jsx(ge, {
                    item: e.item,
                    character: e.character,
                    streamingText: e.streamingText || ""
                }) : a.jsx(R, {
                    item: e.item,
                    character: e.character
                });
            case "character_message_group":
                return a.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: (e.item.data.list || []).map((t, n)=>a.jsx(R, {
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
                        }, t.id || n))
                });
            case "participant_message":
                return a.jsx(T, {
                    item: e.item
                });
            case "participant_message_group":
                return a.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: (e.item.data.list || []).map((t, n)=>a.jsx(T, {
                            item: {
                                ...e.item,
                                type: "participant_message",
                                data: {
                                    ...e.item.data,
                                    content: t.content,
                                    timestamp: t.timestamp
                                }
                            }
                        }, t.id || n))
                });
            case "system_notification":
                return a.jsx(G, {
                    variant: "separator",
                    children: a.jsx(U, {
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
    ge = (e)=>e.item.type === "character_message" ? a.jsx(K, {
            name: e.character.name,
            avatar: a.jsx(B, {
                character: e.character,
                size: "sm"
            }),
            footer: "正在回复…",
            children: e.streamingText || e.item.data.content
        }) : null;
});
export { ot as SessionMainForChat, __tla };
