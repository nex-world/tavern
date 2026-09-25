const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-kA5b7Kkp.js","assets/@tanstack-B5tCGMiu.js","assets/react-BxzVs1F-.js","assets/vendor-CJLoHUZS.js","assets/formatting-YGyf6cFc.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-CG_LwvPM.js","assets/zod-BTj0C3yc.js","assets/analytics-DHqd3KZu.js","assets/nex-tavern-uuid-Cz-4R4MI.js","assets/index-CRWqN2Z9.js","assets/icons-C6_pGF5j.js","assets/index-vWucJHKa.css","assets/id-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { e as v, r as I, t as P, j as a } from "./react-BxzVs1F-.js";
import { S as z, __tla as __tla_0 } from "./session._sessionId-Dltd-iUG.js";
import { S as j } from "./skeleton-adpIZMHS.js";
import { C as V, M as D, b as G, c as U, a as K } from "./conversation-message-D83NGiDb.js";
import { E as Y, d as $ } from "./empty-CXeTqhb2.js";
import { I as Q, d as q, b as J } from "./input-group-0WwM74BH.js";
import { k as W, S as X, C as Z, l as E } from "./db-master-kA5b7Kkp.js";
import { h as ee, k as T } from "./@tanstack-B5tCGMiu.js";
import { s as te } from "./db-BPqhYfj0.js";
import { _ as N, __tla as __tla_1 } from "./index-CRWqN2Z9.js";
import { n as S } from "./id-BY9c7rfI.js";
import { C as w } from "./context-manager.class-D5bFB92s.js";
import { B as se } from "./button-BRW5UoPv.js";
import { C as B } from "./CharacterAvatar-K7qbQSdG.js";
import { P as L, C as A, a as ae } from "./PlayerInputItem-D1TsUtS0.js";
import { u as ne } from "./useLLM-0gFp44Ix.js";
import { a as re } from "./analytics-DHqd3KZu.js";
import { b as oe } from "./icons-C6_pGF5j.js";
import "./vendor-CJLoHUZS.js";
import "./formatting-YGyf6cFc.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./tavern-model-config-button-Bv5F13eL.js";
import "./responsive-dialog-B5gKVGEy.js";
import "./form-width-constraints-n6SdO9NQ.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-CPcsbTWB.js";
import "./alert-dialog-oM7wSDIa.js";
import "./collapsible-kCge2IUx.js";
import "./es-toolkit-9bjl2JfA.js";
import "./ai-settings-DZgxF8Gf.js";
import "./tavern-llm-config-editor-Dnk_p-P-.js";
import "./input-Cv054FMu.js";
import "./field-MgsDPNS0.js";
import "./label-APquV01x.js";
import "./select-CL5ldiVU.js";
import "./switch-CO9-2KPd.js";
import "./alert-B1_JhIZd.js";
import "./InvitationGuard-EXAZNTBq.js";
import "./nex-tavern-uuid-Cz-4R4MI.js";
import "./reading-settings.store-BJDH9hBu.js";
import "./spinner-CFrUWQbp.js";
import "./textarea-CT6wyGoV.js";
import "./zod-BTj0C3yc.js";
import "./dexie-CG_LwvPM.js";
import "./avatar-D3rOZ_4f.js";
let it;
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
    }, R = Object.freeze(Object.defineProperty({
        __proto__: null,
        makeChatModeCharacterSystemPrompt_CN: k,
        makeChatModeLLMMessagesFromContextStateForCharacterId: F,
        makeChatModeStartingContextItems_CN: le,
        makeChatModeStartingMessages_CN: me
    }, Symbol.toStringTag, {
        value: "Module"
    })), p = v({
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
                const { SessionDB: r } = await import("./db-master-kA5b7Kkp.js").then((c)=>c.A);
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
                    const { makeChatModeStartingContextItems_CN: i } = await Promise.resolve().then(()=>R);
                    return {
                        makeChatModeStartingContextItems_CN: i
                    };
                }, void 0), y = m(e);
                for (const i of y)t.addHistoryItem(i);
                const d = y.find((i)=>i.type === "character_intro");
                if (d && h) {
                    const i = d.data.content.split(" ");
                    let l = "";
                    for (const _ of i)l += (l ? " " : "") + _, h(l), await new Promise((f)=>setTimeout(f, 50));
                }
            } catch (m) {
                console.error("Initialize Chat Error:", m), P.error("对话服务调用失败，请打开 AI 设置检查连接", {
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
                    const { makeChatModeLLMMessagesFromContextStateForCharacterId: f } = await Promise.resolve().then(()=>R);
                    return {
                        makeChatModeLLMMessagesFromContextStateForCharacterId: f
                    };
                }, void 0), i = y(t.state, {
                    characterId: e.id
                }).map((f)=>({
                        id: S(),
                        role: f.role,
                        content: f.content,
                        name: f.name
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
                await n.callLLMStream(i, (f, M)=>{
                    _ = M, m?.(f);
                    const o = t.getProcessingItem();
                    o && (o.data.content = _);
                }), l.data.content = _, t.completeProcessingItem();
            } catch (y) {
                console.error("ChatLoop Error:", y), P.error("对话服务调用失败，请打开 AI 设置检查连接", {
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
    it = (e)=>{
        const [t, n] = I.useState(""), [s, r] = I.useState(!1), [c, u] = I.useState(""), [h, m] = I.useState(!1), { data: y = [] } = T((o)=>o.from({
                s: X
            })), { data: d = [] } = T((o)=>o.from({
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
                    p.contextManager = H, E(i.id), m(!0);
                } catch  {
                    if (!o) {
                        const C = new w({
                            historyItems: [],
                            processingItem: void 0
                        });
                        p.contextManager = C, m(!0);
                    }
                }
            })(), ()=>{
                o = !0;
            };
        }, [
            i
        ]), I.useEffect(()=>()=>{
                e.sessionId && E(e.sessionId);
            }, [
            e.sessionId
        ]);
        const { sendUserMessage: _, initializeChat: f } = de(l, p.contextManager);
        if (I.useEffect(()=>{
            h && p.contextManager?.getHistoryCount() === 0 && l && i && (async ()=>{
                if (await f((g)=>{
                    u((C)=>C + g);
                }), p.contextManager) {
                    const g = p.contextManager.getHistoryItems();
                    g.length > 0 && await p.saveNewContextItemsToDB(i.id, g);
                }
            })();
        }, [
            h,
            f,
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
                    }), re(e.sessionId, "chat"), p.contextManager && i) {
                        const g = p.contextManager.getHistoryItems().filter((C)=>!C.processing);
                        g.length > 0 && await p.saveNewContextItemsToDB(i.id, g);
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
                                const o = p.contextManager?.getVisibleHistoryItems() || [], g = p.contextManager?.getProcessingItem(), C = [
                                    ...o
                                ];
                                return g && !o.some((x)=>x.id === g.id) && C.push(g), C.map((x)=>a.jsx(D, {
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
                            s && !p.contextManager?.getProcessingItem() && a.jsx(D, {
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
                }) : a.jsx(A, {
                    item: e.item,
                    character: e.character
                });
            case "character_message_group":
                return a.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: (e.item.data.list || []).map((t, n)=>a.jsx(A, {
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
                return a.jsx(L, {
                    item: e.item
                });
            case "participant_message_group":
                return a.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: (e.item.data.list || []).map((t, n)=>a.jsx(L, {
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
export { it as SessionMainForChat, __tla };
