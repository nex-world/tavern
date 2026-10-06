const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-9xJhn0T1.js","assets/dexie-BEU-KkeH.js","assets/index-18_TwP_5.js","assets/index-BmePl4Qj.css","assets/analytics-Hawdy15R.js","assets/nex-tavern-uuid-Bt4leJh5.js","assets/index.browser-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { _ as T, j as s, r as y, i as G, t as B, __tla as __tla_0 } from "./index-18_TwP_5.js";
import { u as K, C as Y, M as R, S as $, g as q, h as Q } from "./bubble-4c4eJa2P.js";
import { S as J, __tla as __tla_1 } from "./session._sessionId-CJ8GHBBF.js";
import { S as D } from "./skeleton-DNTaXlLy.js";
import { C as N } from "./conversation-message-C2b-hbVT.js";
import { E as W, d as X } from "./empty-CyGQrLoW.js";
import { I as Z, d as tt, b as et } from "./input-group-iMWq9tFY.js";
import { p as st, S as at, C as nt, q as F } from "./db-master-9xJhn0T1.js";
import { u as z } from "./useLiveQuery-h-4bd9VF.js";
import { s as rt } from "./db-DBTW_Oy9.js";
import { n as j } from "./index.browser-BY9c7rfI.js";
import { C as b } from "./context-manager.class-CXSOTVWS.js";
import { d as ot } from "./display-template-2K2uLAap.js";
import { p as E } from "./dexie-BEU-KkeH.js";
import { B as it } from "./button-DzdikvjM.js";
import { C as k } from "./CharacterAvatar-Ca2K5m7V.js";
import { A as ct, b as mt } from "./avatar-BKagu5V3.js";
import { U as lt } from "./user-BmffFHim.js";
import { u as dt } from "./useLLM-C5H4Pdfz.js";
import { a as ut } from "./analytics-Hawdy15R.js";
import { S as gt } from "./send-C_sF3aT_.js";
import "./alert-BQViLLer.js";
import "./shadcn-utils-BpU_oZqH.js";
import "./spinner-CwXdv45S.js";
import "./tavern-model-config-button-DQe8gvsM.js";
import "./tooltip-DAXFn6Z-.js";
import "./index-krVV7sHm.js";
import "./index-D37GOS5N.js";
import "./index-BwE2k4nr.js";
import "./index-XQ2n9aSp.js";
import "./index-BLBkOOe8.js";
import "./index-D8_D-kOC.js";
import "./index-D2KjvhMm.js";
import "./index-BPMW99ZA.js";
import "./responsive-dialog-BSMqKThy.js";
import "./form-width-constraints-n6SdO9NQ.js";
import "./alert-dialog-CL9dZF6S.js";
import "./index-CKu6pw2-.js";
import "./x-BulcYC3h.js";
import "./collapsible-D35Yxe8o.js";
import "./index-C17TKFAG.js";
import "./ai-settings-CY-22Cn7.js";
import "./tavern-llm-config-editor-CARjm7Gy.js";
import "./input-D6B_v9jY.js";
import "./field-DC8kMnH1.js";
import "./label-BAQS1H2n.js";
import "./index-urOGKmmG.js";
import "./select-B0TXrelW.js";
import "./index-BdQq_4o_.js";
import "./index-CkN_UauQ.js";
import "./index-EffFFhyV.js";
import "./chevron-down-DEQLpFbB.js";
import "./check-1HStY4bC.js";
import "./switch-DFh1gAzq.js";
import "./plus-D_VmTLuC.js";
import "./trash-2-NvwQbWtW.js";
import "./chevron-right-BaPgLDy2.js";
import "./back-button-Dxih6fjL.js";
import "./arrow-left-B2lNdBiR.js";
import "./dropdown-menu-BKA-LYVo.js";
import "./index-CQd6LwUn.js";
import "./download-CYNPVwx2.js";
import "./settings-BBZ428Nd.js";
import "./InvitationGuard-D5zFX_r_.js";
import "./nex-tavern-uuid-Bt4leJh5.js";
import "./lock-BfPw6UBh.js";
import "./key-B9wqabms.js";
import "./session-mode-support-DGRcvNf5.js";
import "./character-avatar-source-DlPRh7j9.js";
import "./mode-registry-BQGwTTFr.js";
import "./target-CxFEAQuw.js";
import "./user-plus-DtYhwO7w.js";
import "./messages-square-D4BAHamI.js";
import "./flame-DYD8dAlP.js";
import "./swords-rAnDqxeX.js";
import "./message-circle-Dx-Jwy9a.js";
import "./message-square-C8y9Y2HV.js";
import "./reading-settings.store-C8ej8voQ.js";
import "./textarea-DKJjYnf0.js";
import "./index-CRkyK7pX.js";
let qe;
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
    const pt = /\{\{([^:]+):([^}]+)\}\}/gi, ht = /^d/i;
    function A(t, e, o) {
        let a = t;
        const n = e.nickname || e.name || "角色", i = o?.userName || "用户";
        return a = ot(a, n, i), a = a.replace(pt, (g, u, h)=>{
            switch(u.toLowerCase()){
                case "random":
                    {
                        const m = h.split(",").map((I)=>I.replace(/\\,/g, ",").trim());
                        return m[Math.floor(Math.random() * m.length)] || "";
                    }
                case "pick":
                    {
                        const m = h.split(",").map((I)=>I.replace(/\\,/g, ",").trim());
                        return m[Math.floor(Math.random() * m.length)] || "";
                    }
                case "roll":
                    {
                        const m = Number.parseInt(h.replace(ht, ""), 10);
                        return Number.isNaN(m) || m < 1 ? "1" : (Math.floor(Math.random() * m) + 1).toString();
                    }
                case "//":
                    return "";
                case "hidden_key":
                    return "";
                case "comment":
                    return "";
                case "reverse":
                    return h.split("").reverse().join("");
                default:
                    return g;
            }
        }), a;
    }
    function L(t, e) {
        let o;
        return t.system_prompt && t.system_prompt.trim() !== "" ? (o = t.system_prompt, o = o.replaceAll("{{original}}", ()=>e?.originalSystemPrompt || "")) : (o = [
            `你是 ${t.name}，请根据你的性格和背景进行回应。保持角色的一致性。`,
            "=====[角色描述]=====",
            t.description,
            "=====[角色性格]=====",
            t.personality,
            "=====[聊天场景]=====",
            t.scenario,
            "=====[示例回复]=====",
            t.mes_example
        ].filter((a)=>a.trim() !== "").join(`

`), o.trim() === "" && (o = e?.originalSystemPrompt || "")), o = A(o, t, e), o.trim();
    }
    function ft(t, e) {
        const o = L(t, e), a = [
            t.first_mes,
            ...t?.alternate_greetings ?? []
        ], n = a[Math.floor(Math.random() * a.length)], i = A(n, t, e);
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
    function xt(t, e) {
        const o = L(t, e), a = [
            t.first_mes,
            ...t?.alternate_greetings ?? []
        ], n = a[Math.floor(Math.random() * a.length)], i = A(n, t, e), g = {
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
                characterId: t.id,
                content: i
            }
        };
        return [
            g,
            u
        ];
    }
    const V = (t, e)=>{
        if (e?.characterId === void 0) return [];
        const o = st.parse(t), a = [];
        for (const n of o.historyItems)if (!(n.deleted || n.hidden)) switch(n.type){
            case "starting_system_message":
            case "in_context_system_message":
                a.push({
                    role: "system",
                    content: n.data.content,
                    name: n.data.name
                });
                break;
            case "character_intro":
                a.push({
                    role: "assistant",
                    content: n.data.content,
                    name: n.data.name
                });
                break;
            case "participant_message":
            case "character_message":
                {
                    const i = n.data, g = i.characterId === e.characterId;
                    a.push({
                        role: g ? "assistant" : "user",
                        content: i.content,
                        name: i.name
                    });
                    break;
                }
            case "participant_message_group":
            case "character_message_group":
                {
                    const i = n.data, g = i.characterId === e.characterId, u = i.list.map((h)=>h.content).join(`
`);
                    a.push({
                        role: g ? "assistant" : "user",
                        content: u,
                        name: i.name
                    });
                    break;
                }
            case "summary":
                a.push({
                    role: "user",
                    content: n.data.content
                });
                break;
            case "llm_message":
            case "story_telling":
                a.push({
                    role: n.data.role,
                    content: n.data.content,
                    name: n.data.name
                });
                break;
            case "tool_message":
                a.push({
                    role: "tool",
                    content: n.data.content,
                    name: n.data.name
                });
                break;
        }
        return a;
    }, H = Object.freeze(Object.defineProperty({
        __proto__: null,
        makeChatModeCharacterSystemPrompt_CN: L,
        makeChatModeLLMMessagesFromContextStateForCharacterId: V,
        makeChatModeStartingContextItems_CN: xt,
        makeChatModeStartingMessages_CN: ft
    }, Symbol.toStringTag, {
        value: "Module"
    })), f = E({
        currentSession: null,
        contextManager: null,
        get messages () {
            if (!(this.contextManager && this.currentSession)) return [];
            const t = V(this.contextManager.state, {
                characterId: this.currentSession.modeConfig.characterId
            });
            return Array.isArray(t) ? t : [];
        },
        startNewSession (t, e) {
            const o = {
                id: j(),
                contextId: null,
                mode: "chat",
                modeConfig: t,
                modeState: {
                    currentPhase: "character_first_msg"
                },
                createdAt: Date.now(),
                updatedAt: Date.now(),
                isActive: !0
            };
            this.currentSession = o;
            const a = new b(e || {
                historyItems: [],
                processingItem: void 0
            });
            return a.state = E(a.state), this.contextManager = a, o;
        },
        getContextState () {
            return this.contextManager ? this.contextManager.state : null;
        },
        updateContextState (t) {
            this.contextManager && (Object.assign(this.contextManager.state, t), this.currentSession && (this.currentSession.updatedAt = Date.now()));
        },
        updateCurrentPhase (t) {
            this.currentSession && (this.currentSession.modeState.currentPhase = t, this.currentSession.updatedAt = Date.now());
        },
        updateCurrentConfig (t) {
            this.currentSession && (Object.assign(this.currentSession.modeConfig, t), this.currentSession.updatedAt = Date.now());
        },
        endCurrentSession () {
            this.currentSession = null, this.contextManager = null;
        },
        getCurrentSessionSnapshot () {
            return this.currentSession ? {
                ...this.currentSession
            } : null;
        },
        loadFromData (t) {
            this.currentSession = t.session, t.contextState && (this.contextManager = new b(t.contextState), this.contextManager.state = E(this.contextManager.state));
        },
        loadSession (t) {
            this.currentSession = t;
        },
        async saveNewContextItemsToDB (t, e) {
            const { SessionDB: o } = await T(async ()=>{
                const { SessionDB: n } = await import("./db-master-9xJhn0T1.js").then((i)=>i.E);
                return {
                    SessionDB: n
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6]));
            await new o(t).addContextItems(e);
        }
    });
    function It({ item: t, character: e }) {
        return s.jsx(N, {
            name: e.name,
            avatar: s.jsx(k, {
                character: e,
                size: "sm"
            }),
            reasoningContent: t.data.reasoning_content,
            streaming: !!t.processing,
            children: t.data.content
        });
    }
    function O({ item: t, character: e }) {
        return s.jsx(N, {
            name: e.name,
            avatar: s.jsx(k, {
                character: e,
                size: "sm"
            }),
            reasoningContent: t.data.reasoning_content,
            streaming: !!t.processing,
            children: t.data.content
        });
    }
    function U({ item: t }) {
        return s.jsx(N, {
            name: "我",
            fromUser: !0,
            avatar: s.jsx(ct, {
                children: s.jsx(mt, {
                    children: s.jsx(lt, {})
                })
            }),
            children: t.data.content
        });
    }
    function yt(t, e, o) {
        const a = dt(), n = y.useRef(!1), [i, g] = y.useState(!1), u = G(), h = y.useCallback(async (m)=>{
            if (!(n.current || !e || e.getHistoryCount() > 0 || !t)) try {
                n.current = !0, g(!0);
                const { makeChatModeStartingContextItems_CN: I } = await T(async ()=>{
                    const { makeChatModeStartingContextItems_CN: C } = await Promise.resolve().then(()=>H);
                    return {
                        makeChatModeStartingContextItems_CN: C
                    };
                }, void 0), l = I(t);
                for (const C of l)e.addHistoryItem(C);
                const c = l.find((C)=>C.type === "character_intro");
                if (c && m) {
                    const C = c.data.content.split(" ");
                    let _ = "";
                    for (const M of C)_ += (_ ? " " : "") + M, m(_), await new Promise((S)=>setTimeout(S, 50));
                }
            } catch (I) {
                console.error("Initialize Chat Error:", I), B.error("对话服务调用失败，请打开 AI 设置检查连接", {
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
            e,
            t,
            u
        ]), w = y.useCallback(async (m, I, l)=>{
            if (!(n.current || !t || !e)) try {
                n.current = !0, g(!0), e.addLLMResponseAsContextItem({
                    role: "user",
                    content: m
                }, {}), l?.(), await f.saveNewContextItemsToDB(o, e.getHistoryItems());
                const { makeChatModeLLMMessagesFromContextStateForCharacterId: c } = await T(async ()=>{
                    const { makeChatModeLLMMessagesFromContextStateForCharacterId: r } = await Promise.resolve().then(()=>H);
                    return {
                        makeChatModeLLMMessagesFromContextStateForCharacterId: r
                    };
                }, void 0), _ = c(e.state, {
                    characterId: t.id
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
                        characterId: t.id,
                        content: "",
                        name: t.name
                    }
                };
                e.setProcessingItem(M);
                let S = "";
                await a.callLLMStream(_, (r, p)=>{
                    S = p, I?.(r);
                    const x = e.getProcessingItem();
                    x && (x.data.content = S);
                }), M.data.content = S, e.completeProcessingItem();
            } catch (c) {
                throw e.setProcessingItem(void 0), console.error("ChatLoop Error:", c), B.error("对话服务调用失败，请打开 AI 设置检查连接", {
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
            e,
            t,
            a,
            u,
            o
        ]);
        return {
            initializeChat: h,
            sendUserMessage: w,
            isBusy: i
        };
    }
    let Ct, _t;
    qe = (t)=>{
        const [e, o] = y.useState(""), a = K(), [n, i] = y.useState(!1), [g, u] = y.useState(""), [h, w] = y.useState(!1), { data: m = [] } = z((r)=>r.from({
                s: at
            })), { data: I = [] } = z((r)=>r.from({
                c: nt
            })), l = m.find((r)=>r.id === t.sessionId), c = I.find((r)=>r.id === l?.characterId);
        y.useEffect(()=>{
            let r = !1;
            return w(!1), (async ()=>{
                if (l) try {
                    const d = await rt.createSessionDB(l.id).getContextItems();
                    if (r) return;
                    const v = {
                        historyItems: d,
                        processingItem: void 0
                    }, P = new b(v);
                    f.contextManager = P, F(l.id), w(!0);
                } catch  {
                    if (!r) {
                        const x = new b({
                            historyItems: [],
                            processingItem: void 0
                        });
                        f.contextManager = x, w(!0);
                    }
                }
            })(), ()=>{
                r = !0;
            };
        }, [
            l
        ]), y.useEffect(()=>()=>{
                t.sessionId && F(t.sessionId);
            }, [
            t.sessionId
        ]);
        const { sendUserMessage: C, initializeChat: _, isBusy: M } = yt(c, f.contextManager, t.sessionId);
        if (y.useEffect(()=>{
            h && f.contextManager?.getHistoryCount() === 0 && c && l && (async ()=>{
                if (await _((p)=>{
                    u((x)=>x + p);
                }), f.contextManager) {
                    const p = f.contextManager.getHistoryItems();
                    p.length > 0 && await f.saveNewContextItemsToDB(l.id, p);
                }
            })();
        }, [
            h,
            _,
            c,
            l
        ]), !(l && c)) return s.jsx(W, {
            className: "py-8",
            children: s.jsx(X, {
                children: "会话不存在或已删除"
            })
        });
        const S = ()=>{
            const r = e, p = f.contextManager;
            return a.submit(r, h && !n && !M, ()=>o(""), async (x)=>{
                i(!0), u("");
                try {
                    if (await C(r, (d)=>{
                        u((v)=>v + d);
                    }, x), ut(t.sessionId, "chat"), p && l) {
                        const v = p.getHistoryItems().filter((P)=>!P.processing);
                        v.length > 0 && await f.saveNewContextItemsToDB(l.id, v);
                    }
                } catch (d) {
                    throw d;
                } finally{
                    i(!1), u("");
                }
            });
        };
        return s.jsx("div", {
            className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden bg-background",
            children: s.jsxs("div", {
                className: "flex min-h-0 min-w-0 flex-1 flex-col",
                children: [
                    s.jsx(J, {
                        exportChat: !0,
                        title: c.name,
                        subtitle: c.nickname || "角色对话",
                        avatar: s.jsx(k, {
                            character: c,
                            size: "xs",
                            shape: "circle"
                        })
                    }),
                    s.jsxs(Y, {
                        children: [
                            (()=>{
                                const r = f.contextManager?.getVisibleHistoryItems() || [], p = f.contextManager?.getProcessingItem(), x = [
                                    ...r
                                ];
                                return p && !r.some((d)=>d.id === p.id) && x.push(p), x.map((d)=>s.jsx(R, {
                                        messageId: d.id,
                                        scrollAnchor: d.type === "participant_message" || d.type === "gc_user_message",
                                        children: s.jsx(Ct, {
                                            item: d,
                                            character: c,
                                            isProcessing: d.processing || void 0,
                                            streamingText: d.processing ? g : void 0
                                        })
                                    }, d.id));
                            })(),
                            n && !f.contextManager?.getProcessingItem() && s.jsx(R, {
                                messageId: "reply-pending",
                                role: "status",
                                "aria-label": "正在回复",
                                children: s.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [
                                        s.jsx(D, {
                                            className: "size-10 rounded-full shrink-0"
                                        }),
                                        s.jsxs("div", {
                                            className: "flex flex-col gap-3 grow pt-2",
                                            children: [
                                                s.jsx(D, {
                                                    className: "h-4 w-1/4"
                                                }),
                                                s.jsx(D, {
                                                    className: "h-24 w-full"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }, t.sessionId),
                    s.jsxs("div", {
                        className: "border-t px-3 py-2 sm:px-5 shrink-0 bg-background",
                        children: [
                            s.jsxs("div", {
                                className: "max-w-4xl mx-auto relative group",
                                children: [
                                    s.jsx($, {
                                        draft: e,
                                        onRestore: o,
                                        text: a.failure,
                                        onDismiss: a.dismiss
                                    }),
                                    s.jsxs(Z, {
                                        className: "mx-auto max-w-4xl",
                                        children: [
                                            s.jsx(tt, {
                                                "aria-label": "消息内容",
                                                value: e,
                                                onChange: (r)=>o(r.target.value),
                                                placeholder: `向 ${c.name} 发送消息...`,
                                                rows: 1,
                                                className: "min-h-10 max-h-[min(10rem,25dvh)] overflow-y-auto",
                                                onKeyDown: (r)=>{
                                                    r.key === "Enter" && !r.shiftKey && !r.nativeEvent.isComposing && r.keyCode !== 229 && (r.preventDefault(), S());
                                                }
                                            }),
                                            s.jsx(et, {
                                                align: "inline-end",
                                                className: "self-end pb-1.5",
                                                children: s.jsx(it, {
                                                    "aria-label": "发送消息",
                                                    size: "icon",
                                                    disabled: !e.trim() || !h || n || M,
                                                    onClick: S,
                                                    type: "button",
                                                    children: s.jsx(gt, {
                                                        "data-icon": "inline-start"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            s.jsx("p", {
                                className: "mt-1 text-center text-xs text-muted-foreground",
                                children: "Enter 发送 · Shift + Enter 换行"
                            })
                        ]
                    })
                ]
            })
        });
    };
    Ct = (t)=>{
        switch(t.item.type){
            case "character_intro":
                return s.jsx(It, {
                    item: t.item,
                    character: t.character
                });
            case "character_message":
                return t.isProcessing ? s.jsx(_t, {
                    item: t.item,
                    character: t.character,
                    streamingText: t.streamingText || ""
                }) : s.jsx(O, {
                    item: t.item,
                    character: t.character
                });
            case "character_message_group":
                return s.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: (t.item.data.list || []).map((e, o)=>s.jsx(O, {
                            item: {
                                ...t.item,
                                type: "character_message",
                                data: {
                                    ...t.item.data,
                                    content: e.content,
                                    timestamp: e.timestamp
                                }
                            },
                            character: t.character
                        }, e.id || o))
                });
            case "participant_message":
                return s.jsx(U, {
                    item: t.item
                });
            case "participant_message_group":
                return s.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: (t.item.data.list || []).map((e, o)=>s.jsx(U, {
                            item: {
                                ...t.item,
                                type: "participant_message",
                                data: {
                                    ...t.item.data,
                                    content: e.content,
                                    timestamp: e.timestamp
                                }
                            }
                        }, e.id || o))
                });
            case "system_notification":
                return s.jsx(q, {
                    variant: "separator",
                    children: s.jsx(Q, {
                        children: t.item.data.content
                    })
                });
            case "starting_system_message":
            case "in_context_system_message":
            case "placeholder":
                return null;
            default:
                return console.warn("Unknown context item type:", t.item.type), null;
        }
    };
    _t = (t)=>t.item.type === "character_message" ? s.jsx(N, {
            name: t.character.name,
            avatar: s.jsx(k, {
                character: t.character,
                size: "sm"
            }),
            footer: "正在回复…",
            children: t.streamingText || t.item.data.content
        }) : null;
});
export { qe as SessionMainForChat, __tla };
