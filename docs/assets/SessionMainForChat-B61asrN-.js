const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-FFqpGvWt.js","assets/dexie-CvjoKqwJ.js","assets/index-C9ToEVdh.js","assets/index-C5W7wrdN.css","assets/analytics-pNcBlL3u.js","assets/auth-api-url-C_ekBn6R.js","assets/nex-tavern-uuid-BtSoYzls.js","assets/index.browser-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { _ as E, j as s, r as x, t as B, __tla as __tla_0 } from "./index-C9ToEVdh.js";
import { u as K, C as Y, M as R, S as $, g as q, i as Q } from "./bubble-Ck_22qmS.js";
import { S as J, __tla as __tla_1 } from "./session._sessionId-CkIw9P6_.js";
import { S as P } from "./skeleton-Ba9AVKkX.js";
import { C as N } from "./conversation-message-CP3H7GNu.js";
import { E as W, d as X } from "./empty-C-hx2_Hl.js";
import { I as Z, d as tt, b as et } from "./input-group-CkalOedR.js";
import { q as st, S as at, C as rt, r as F } from "./db-master-FFqpGvWt.js";
import { u as z } from "./useLiveQuery-Xt0d-Euv.js";
import { s as nt } from "./db-ekmi9ODP.js";
import { n as v } from "./index.browser-BY9c7rfI.js";
import { C as b } from "./context-manager.class-BzaPloBz.js";
import { d as ot } from "./display-template-2K2uLAap.js";
import { p as T } from "./dexie-CvjoKqwJ.js";
import { B as it } from "./button-Bw7TPn_C.js";
import { C as k } from "./CharacterAvatar-CCQaPQL7.js";
import { A as ct, b as mt } from "./avatar-B5yvz7wj.js";
import { U as lt } from "./user-DyIuBsVa.js";
import { o as H } from "./model-config-dialog.store-85IBvjUH.js";
import { u as dt } from "./useLLM-Bwv_sV5b.js";
import { a as ut } from "./analytics-pNcBlL3u.js";
import { S as pt } from "./send-BEhz7Fg4.js";
import "./alert-BgOcqL9p.js";
import "./shadcn-utils-ByKJRL1I.js";
import "./dialogue-text-Df6i7Bdd.js";
import "./collapsible-BjmcsEfb.js";
import "./immer-CPamNRKq.js";
import "./index-BM32f6R_.js";
import "./index-kYeETYe1.js";
import "./index-B-sCJ8Xw.js";
import "./index-BkAXSGO1.js";
import "./dnd-stream-content-CmfnTBFV.js";
import "./chevron-right-jkiNkXej.js";
import "./tavern-model-config-button-Cp_OFBF0.js";
import "./tooltip-DVwgbhml.js";
import "./index-Ch6ZlSxT.js";
import "./index-Cc2lNOor.js";
import "./index-Cmw7KKr2.js";
import "./index-Df6Jf8nY.js";
import "./index-BN1T9k3s.js";
import "./responsive-dialog-CgTM1vVl.js";
import "./form-width-constraints-n6SdO9NQ.js";
import "./alert-dialog-D--SYgVA.js";
import "./index-3rQPBiub.js";
import "./x-czXD7ndh.js";
import "./ai-settings-IqH_0yMh.js";
import "./tavern-llm-config-editor-Bd2MYpdj.js";
import "./input-B96HTE-2.js";
import "./field-CmhMWPfZ.js";
import "./label-BPGYPYVv.js";
import "./index-D7pAaGR4.js";
import "./select-vO--crHO.js";
import "./index-BdQq_4o_.js";
import "./index-CFW_sXNL.js";
import "./index-CsxK1cNC.js";
import "./chevron-down-CCpmw8QE.js";
import "./check-790OOWlr.js";
import "./switch-Bm1K7ZCQ.js";
import "./plus-D3bu6xfc.js";
import "./trash-2-CJgqmCVR.js";
import "./back-button-CXpE0zDJ.js";
import "./arrow-left-DQfFWWlL.js";
import "./dropdown-menu-Cu1xbnPA.js";
import "./index-GHCDOMuD.js";
import "./file-output-CAyzqIkt.js";
import "./settings-OuAMUdX_.js";
import "./InvitationGuard-D93E-nT1.js";
import "./nex-tavern-uuid-BtSoYzls.js";
import "./auth-api-url-C_ekBn6R.js";
import "./lock-BCFA1C91.js";
import "./key-CxP2hQzX.js";
import "./session-mode-support-DvL_JgUq.js";
import "./character-avatar-source-DlPRh7j9.js";
import "./mode-registry-e4pbGnpZ.js";
import "./target-CTkJ2MgM.js";
import "./user-plus-BzdepT65.js";
import "./messages-square-DPDJ-ZDi.js";
import "./flame-C0JaLN1p.js";
import "./swords-AOF1K-hh.js";
import "./message-circle-tr1VegPq.js";
import "./message-square-CGMgai1B.js";
import "./reading-settings.store-CCVmAEXZ.js";
import "./generation-status-BpUSJt2N.js";
import "./spinner-DUb1xZOy.js";
import "./textarea-Dxs6ar81.js";
import "./index-gituiP-K.js";
let ts;
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
    const gt = /\{\{([^:]+):([^}]+)\}\}/gi, ht = /^d/i;
    function A(t, e, n) {
        let a = t;
        const r = e.nickname || e.name || "角色", i = n?.userName || "用户";
        return a = ot(a, r, i), a = a.replace(gt, (p, f, g)=>{
            switch(f.toLowerCase()){
                case "random":
                    {
                        const l = g.split(",").map((I)=>I.replace(/\\,/g, ",").trim());
                        return l[Math.floor(Math.random() * l.length)] || "";
                    }
                case "pick":
                    {
                        const l = g.split(",").map((I)=>I.replace(/\\,/g, ",").trim());
                        return l[Math.floor(Math.random() * l.length)] || "";
                    }
                case "roll":
                    {
                        const l = Number.parseInt(g.replace(ht, ""), 10);
                        return Number.isNaN(l) || l < 1 ? "1" : (Math.floor(Math.random() * l) + 1).toString();
                    }
                case "//":
                    return "";
                case "hidden_key":
                    return "";
                case "comment":
                    return "";
                case "reverse":
                    return g.split("").reverse().join("");
                default:
                    return p;
            }
        }), a;
    }
    function L(t, e) {
        let n;
        return t.system_prompt && t.system_prompt.trim() !== "" ? (n = t.system_prompt, n = n.replaceAll("{{original}}", ()=>e?.originalSystemPrompt || "")) : (n = [
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

`), n.trim() === "" && (n = e?.originalSystemPrompt || "")), n = A(n, t, e), n.trim();
    }
    function ft(t, e) {
        const n = L(t, e), a = [
            t.first_mes,
            ...t?.alternate_greetings ?? []
        ], r = a[Math.floor(Math.random() * a.length)], i = A(r, t, e);
        return [
            {
                role: "system",
                content: n
            },
            {
                role: "assistant",
                content: i
            }
        ];
    }
    function xt(t, e) {
        const n = L(t, e), a = [
            t.first_mes,
            ...t?.alternate_greetings ?? []
        ], r = a[Math.floor(Math.random() * a.length)], i = A(r, t, e), p = {
            id: v(),
            type: "starting_system_message",
            idx: 0,
            orderRef: 0,
            timestamp: Date.now(),
            data: {
                content: n
            }
        }, f = {
            id: v(),
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
            p,
            f
        ];
    }
    const G = (t, e)=>{
        if (e?.characterId === void 0) return [];
        const n = st.parse(t), a = [];
        for (const r of n.historyItems)if (!(r.deleted || r.hidden)) switch(r.type){
            case "starting_system_message":
            case "in_context_system_message":
                a.push({
                    role: "system",
                    content: r.data.content,
                    name: r.data.name
                });
                break;
            case "character_intro":
                a.push({
                    role: "assistant",
                    content: r.data.content,
                    name: r.data.name
                });
                break;
            case "participant_message":
            case "character_message":
                {
                    const i = r.data, p = i.characterId === e.characterId;
                    a.push({
                        role: p ? "assistant" : "user",
                        content: i.content,
                        name: i.name
                    });
                    break;
                }
            case "participant_message_group":
            case "character_message_group":
                {
                    const i = r.data, p = i.characterId === e.characterId, f = i.list.map((g)=>g.content).join(`
`);
                    a.push({
                        role: p ? "assistant" : "user",
                        content: f,
                        name: i.name
                    });
                    break;
                }
            case "summary":
                a.push({
                    role: "user",
                    content: r.data.content
                });
                break;
            case "llm_message":
            case "story_telling":
                a.push({
                    role: r.data.role,
                    content: r.data.content,
                    name: r.data.name
                });
                break;
            case "tool_message":
                a.push({
                    role: "tool",
                    content: r.data.content,
                    name: r.data.name
                });
                break;
        }
        return a;
    }, O = Object.freeze(Object.defineProperty({
        __proto__: null,
        makeChatModeCharacterSystemPrompt_CN: L,
        makeChatModeLLMMessagesFromContextStateForCharacterId: G,
        makeChatModeStartingContextItems_CN: xt,
        makeChatModeStartingMessages_CN: ft
    }, Symbol.toStringTag, {
        value: "Module"
    })), h = T({
        currentSession: null,
        contextManager: null,
        get messages () {
            if (!(this.contextManager && this.currentSession)) return [];
            const t = G(this.contextManager.state, {
                characterId: this.currentSession.modeConfig.characterId
            });
            return Array.isArray(t) ? t : [];
        },
        startNewSession (t, e) {
            const n = {
                id: v(),
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
            this.currentSession = n;
            const a = new b(e || {
                historyItems: [],
                processingItem: void 0
            });
            return a.state = T(a.state), this.contextManager = a, n;
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
            this.currentSession = t.session, t.contextState && (this.contextManager = new b(t.contextState), this.contextManager.state = T(this.contextManager.state));
        },
        loadSession (t) {
            this.currentSession = t;
        },
        async saveNewContextItemsToDB (t, e) {
            const { SessionDB: n } = await E(async ()=>{
                const { SessionDB: r } = await import("./db-master-FFqpGvWt.js").then((i)=>i.F);
                return {
                    SessionDB: r
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7]));
            await new n(t).addContextItems(e);
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
    function U({ item: t, character: e }) {
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
    function V({ item: t }) {
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
    function yt(t, e, n) {
        const a = dt(), r = x.useRef(!1), [i, p] = x.useState(!1), f = x.useCallback(async (C)=>{
            if (!(r.current || !e || e.getHistoryCount() > 0 || !t)) try {
                r.current = !0, p(!0);
                const { makeChatModeStartingContextItems_CN: l } = await E(async ()=>{
                    const { makeChatModeStartingContextItems_CN: m } = await Promise.resolve().then(()=>O);
                    return {
                        makeChatModeStartingContextItems_CN: m
                    };
                }, void 0), I = l(t);
                for (const m of I)e.addHistoryItem(m);
                const c = I.find((m)=>m.type === "character_intro");
                if (c && C) {
                    const m = c.data.content.split(" ");
                    let M = "";
                    for (const w of m)M += (M ? " " : "") + w, C(M), await new Promise((S)=>setTimeout(S, 50));
                }
            } catch (l) {
                console.error("Initialize Chat Error:", l), B.error("对话服务调用失败，请打开 AI 设置检查连接", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: H
                    }
                });
            } finally{
                r.current = !1, p(!1);
            }
        }, [
            e,
            t
        ]), g = x.useCallback(async (C, l, I)=>{
            if (!(r.current || !t || !e)) try {
                r.current = !0, p(!0), e.addLLMResponseAsContextItem({
                    role: "user",
                    content: C
                }, {}), I?.(), await h.saveNewContextItemsToDB(n, e.getHistoryItems());
                const { makeChatModeLLMMessagesFromContextStateForCharacterId: c } = await E(async ()=>{
                    const { makeChatModeLLMMessagesFromContextStateForCharacterId: y } = await Promise.resolve().then(()=>O);
                    return {
                        makeChatModeLLMMessagesFromContextStateForCharacterId: y
                    };
                }, void 0), M = c(e.state, {
                    characterId: t.id
                }).map((y)=>({
                        id: v(),
                        role: y.role,
                        content: y.content,
                        name: y.name
                    })), w = {
                    id: v(),
                    type: "character_message",
                    orderRef: 0,
                    timestamp: Date.now(),
                    data: {
                        characterId: t.id,
                        content: "",
                        name: t.name
                    }
                };
                e.setProcessingItem(w);
                let S = "";
                await a.callLLMStream(M, (y, o)=>{
                    S = o, l?.(y);
                    const u = e.getProcessingItem();
                    u && (u.data.content = S);
                }), w.data.content = S, e.completeProcessingItem();
            } catch (c) {
                throw e.setProcessingItem(void 0), console.error("ChatLoop Error:", c), B.error("对话服务调用失败，请打开 AI 设置检查连接", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: H
                    }
                }), c;
            } finally{
                r.current = !1, p(!1);
            }
        }, [
            e,
            t,
            a,
            n
        ]);
        return {
            initializeChat: f,
            sendUserMessage: g,
            isBusy: i
        };
    }
    let Ct, _t;
    ts = (t)=>{
        const [e, n] = x.useState(""), a = K(), [r, i] = x.useState(!1), [p, f] = x.useState(""), [g, C] = x.useState(!1), { data: l = [] } = z((o)=>o.from({
                s: at
            })), { data: I = [] } = z((o)=>o.from({
                c: rt
            })), c = l.find((o)=>o.id === t.sessionId), m = I.find((o)=>o.id === c?.characterId);
        x.useEffect(()=>{
            let o = !1;
            return C(!1), (async ()=>{
                if (c) try {
                    const d = await nt.createSessionDB(c.id).getContextItems();
                    if (o) return;
                    const j = {
                        historyItems: d,
                        processingItem: void 0
                    }, D = new b(j);
                    h.contextManager = D, F(c.id), C(!0);
                } catch  {
                    if (!o) {
                        const _ = new b({
                            historyItems: [],
                            processingItem: void 0
                        });
                        h.contextManager = _, C(!0);
                    }
                }
            })(), ()=>{
                o = !0;
            };
        }, [
            c
        ]), x.useEffect(()=>()=>{
                t.sessionId && F(t.sessionId);
            }, [
            t.sessionId
        ]);
        const { sendUserMessage: M, initializeChat: w, isBusy: S } = yt(m, h.contextManager, t.sessionId);
        if (x.useEffect(()=>{
            g && h.contextManager?.getHistoryCount() === 0 && m && c && (async ()=>{
                if (await w((u)=>{
                    f((_)=>_ + u);
                }), h.contextManager) {
                    const u = h.contextManager.getHistoryItems();
                    u.length > 0 && await h.saveNewContextItemsToDB(c.id, u);
                }
            })();
        }, [
            g,
            w,
            m,
            c
        ]), !(c && m)) return s.jsx(W, {
            className: "py-8",
            children: s.jsx(X, {
                children: "会话不存在或已删除"
            })
        });
        const y = ()=>{
            const o = e, u = h.contextManager;
            return a.submit(o, g && !r && !S, ()=>n(""), async (_)=>{
                i(!0), f("");
                try {
                    if (await M(o, (d)=>{
                        f((j)=>j + d);
                    }, _), ut(t.sessionId, "chat"), u && c) {
                        const j = u.getHistoryItems().filter((D)=>!D.processing);
                        j.length > 0 && await h.saveNewContextItemsToDB(c.id, j);
                    }
                } catch (d) {
                    throw d;
                } finally{
                    i(!1), f("");
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
                        title: m.name,
                        subtitle: m.nickname || "角色对话",
                        avatar: s.jsx(k, {
                            character: m,
                            size: "xs",
                            shape: "circle"
                        })
                    }),
                    s.jsxs(Y, {
                        children: [
                            (()=>{
                                const o = h.contextManager?.getVisibleHistoryItems() || [], u = h.contextManager?.getProcessingItem(), _ = [
                                    ...o
                                ];
                                return u && !o.some((d)=>d.id === u.id) && _.push(u), _.map((d)=>s.jsx(R, {
                                        messageId: d.id,
                                        scrollAnchor: d.type === "participant_message" || d.type === "gc_user_message",
                                        children: s.jsx(Ct, {
                                            item: d,
                                            character: m,
                                            isProcessing: d.processing || void 0,
                                            streamingText: d.processing ? p : void 0
                                        })
                                    }, d.id));
                            })(),
                            r && !h.contextManager?.getProcessingItem() && s.jsx(R, {
                                messageId: "reply-pending",
                                role: "status",
                                "aria-label": "正在回复",
                                children: s.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [
                                        s.jsx(P, {
                                            className: "size-10 rounded-full shrink-0"
                                        }),
                                        s.jsxs("div", {
                                            className: "flex flex-col gap-3 grow pt-2",
                                            children: [
                                                s.jsx(P, {
                                                    className: "h-4 w-1/4"
                                                }),
                                                s.jsx(P, {
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
                                        onRestore: n,
                                        text: a.failure,
                                        onDismiss: a.dismiss
                                    }),
                                    s.jsxs(Z, {
                                        className: "mx-auto max-w-4xl",
                                        children: [
                                            s.jsx(tt, {
                                                "aria-label": "消息内容",
                                                value: e,
                                                onChange: (o)=>n(o.target.value),
                                                placeholder: `向 ${m.name} 发送消息...`,
                                                rows: 1,
                                                className: "min-h-10 max-h-[min(10rem,25dvh)] overflow-y-auto",
                                                onKeyDown: (o)=>{
                                                    o.key === "Enter" && !o.shiftKey && !o.nativeEvent.isComposing && o.keyCode !== 229 && (o.preventDefault(), y());
                                                }
                                            }),
                                            s.jsx(et, {
                                                align: "inline-end",
                                                className: "self-end pb-1.5",
                                                children: s.jsx(it, {
                                                    "aria-label": "发送消息",
                                                    size: "icon",
                                                    disabled: !e.trim() || !g || r || S,
                                                    onClick: y,
                                                    type: "button",
                                                    children: s.jsx(pt, {
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
                }) : s.jsx(U, {
                    item: t.item,
                    character: t.character
                });
            case "character_message_group":
                return s.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: (t.item.data.list || []).map((e, n)=>s.jsx(U, {
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
                        }, e.id || n))
                });
            case "participant_message":
                return s.jsx(V, {
                    item: t.item
                });
            case "participant_message_group":
                return s.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: (t.item.data.list || []).map((e, n)=>s.jsx(V, {
                            item: {
                                ...t.item,
                                type: "participant_message",
                                data: {
                                    ...t.item.data,
                                    content: e.content,
                                    timestamp: e.timestamp
                                }
                            }
                        }, e.id || n))
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
export { ts as SessionMainForChat, __tla };
