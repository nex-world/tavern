const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-acV7bE9x.js","assets/dexie-yDjhXN4G.js","assets/index-D80q0Zqc.js","assets/index-LcKOv8md.css","assets/analytics-Dnl0e8Xj.js","assets/nex-tavern-uuid-BACB_JL0.js","assets/index.browser-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { _ as T, j as s, r as x, t as B, __tla as __tla_0 } from "./index-D80q0Zqc.js";
import { u as K, C as Y, M as R, S as $, g as q, i as Q } from "./bubble-CIviRuVH.js";
import { S as J, __tla as __tla_1 } from "./session._sessionId-BBl3u77C.js";
import { S as P } from "./skeleton-DlSYN36m.js";
import { C as N } from "./conversation-message-DlPlPJP1.js";
import { E as W, d as X } from "./empty-DyHfeA58.js";
import { I as Z, d as tt, b as et } from "./input-group-CUkYFSLi.js";
import { p as st, S as at, C as nt, q as F } from "./db-master-acV7bE9x.js";
import { u as z } from "./useLiveQuery-DJv-0nmi.js";
import { s as rt } from "./db-CM1zMrkT.js";
import { n as v } from "./index.browser-BY9c7rfI.js";
import { C as b } from "./context-manager.class-KTG4HMTu.js";
import { d as ot } from "./display-template-2K2uLAap.js";
import { p as E } from "./dexie-yDjhXN4G.js";
import { B as it } from "./button-DrwlSH1G.js";
import { C as k } from "./CharacterAvatar-CVO1zRY2.js";
import { A as ct, b as mt } from "./avatar-Dj7iGcZQ.js";
import { U as lt } from "./user-BRWTZuVN.js";
import { o as H } from "./model-config-dialog.store-BSa_6Pph.js";
import { u as dt } from "./useLLM-DMeFKI5J.js";
import { a as ut } from "./analytics-Dnl0e8Xj.js";
import { S as pt } from "./send-BfkeVvdm.js";
import "./alert-DOcCaOg2.js";
import "./shadcn-utils-BgoMflOe.js";
import "./dialogue-text-BJgjGD3F.js";
import "./collapsible-fLNaixNB.js";
import "./index-QoArWnRM.js";
import "./index-CsZbP9t6.js";
import "./index-8xK9vAdc.js";
import "./index-Bv2Cv1BA.js";
import "./dnd-stream-content-CmfnTBFV.js";
import "./chevron-right-RetLV-ma.js";
import "./tavern-model-config-button-BXrDY5G4.js";
import "./tooltip-BtoUDF0G.js";
import "./index-CBrIgIS9.js";
import "./index-CzbVrCxM.js";
import "./index-Cnnnzy-n.js";
import "./index-CIkz7e0i.js";
import "./index-CR_v16vE.js";
import "./responsive-dialog-DHk91fhM.js";
import "./form-width-constraints-n6SdO9NQ.js";
import "./alert-dialog-BbypsFtq.js";
import "./index-CQurWmYj.js";
import "./x-DJS7zDS0.js";
import "./ai-settings-BeqIALsD.js";
import "./tavern-llm-config-editor-CODsLUaD.js";
import "./input-Dw2VNBxv.js";
import "./field-CZdt5mWs.js";
import "./label-W67Hiv5X.js";
import "./index-BAHx1ZUW.js";
import "./select-hMf9wVhT.js";
import "./index-BdQq_4o_.js";
import "./index-UpyiCicT.js";
import "./index-CMneVRAX.js";
import "./chevron-down-VEnhQ0Xv.js";
import "./check-BqKm9WgT.js";
import "./switch-CFq3kY14.js";
import "./plus-CgoFVaqw.js";
import "./trash-2-CDS4PTaF.js";
import "./back-button-Ciwv36W5.js";
import "./arrow-left-ETLCj55h.js";
import "./dropdown-menu-DaOeZ08g.js";
import "./index-7riRpZ-p.js";
import "./file-output-DxRsVkqv.js";
import "./settings--Olq9Nxe.js";
import "./InvitationGuard-BQf-b70n.js";
import "./nex-tavern-uuid-BACB_JL0.js";
import "./lock-Dse5qeEk.js";
import "./key-CV-N6u0l.js";
import "./session-mode-support-NRXB32IE.js";
import "./character-avatar-source-DlPRh7j9.js";
import "./mode-registry-CcMKl_2S.js";
import "./target-B941VBcV.js";
import "./user-plus-BcmexDpC.js";
import "./messages-square-SqH5ym1P.js";
import "./flame-RPVU9xRY.js";
import "./swords-xt5fewwN.js";
import "./message-circle-CMuOwTg5.js";
import "./message-square-ky15UmoB.js";
import "./reading-settings.store-B1EWuqaS.js";
import "./generation-status-ln4CUl50.js";
import "./spinner-Bv6s-LX4.js";
import "./textarea-o3ZcoQKU.js";
import "./index-y7SQhSQE.js";
let Xe;
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
    function A(t, e, r) {
        let a = t;
        const n = e.nickname || e.name || "角色", i = r?.userName || "用户";
        return a = ot(a, n, i), a = a.replace(gt, (p, f, g)=>{
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
        let r;
        return t.system_prompt && t.system_prompt.trim() !== "" ? (r = t.system_prompt, r = r.replaceAll("{{original}}", ()=>e?.originalSystemPrompt || "")) : (r = [
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

`), r.trim() === "" && (r = e?.originalSystemPrompt || "")), r = A(r, t, e), r.trim();
    }
    function ft(t, e) {
        const r = L(t, e), a = [
            t.first_mes,
            ...t?.alternate_greetings ?? []
        ], n = a[Math.floor(Math.random() * a.length)], i = A(n, t, e);
        return [
            {
                role: "system",
                content: r
            },
            {
                role: "assistant",
                content: i
            }
        ];
    }
    function xt(t, e) {
        const r = L(t, e), a = [
            t.first_mes,
            ...t?.alternate_greetings ?? []
        ], n = a[Math.floor(Math.random() * a.length)], i = A(n, t, e), p = {
            id: v(),
            type: "starting_system_message",
            idx: 0,
            orderRef: 0,
            timestamp: Date.now(),
            data: {
                content: r
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
        const r = st.parse(t), a = [];
        for (const n of r.historyItems)if (!(n.deleted || n.hidden)) switch(n.type){
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
                    const i = n.data, p = i.characterId === e.characterId;
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
                    const i = n.data, p = i.characterId === e.characterId, f = i.list.map((g)=>g.content).join(`
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
    }, O = Object.freeze(Object.defineProperty({
        __proto__: null,
        makeChatModeCharacterSystemPrompt_CN: L,
        makeChatModeLLMMessagesFromContextStateForCharacterId: G,
        makeChatModeStartingContextItems_CN: xt,
        makeChatModeStartingMessages_CN: ft
    }, Symbol.toStringTag, {
        value: "Module"
    })), h = E({
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
            const r = {
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
            this.currentSession = r;
            const a = new b(e || {
                historyItems: [],
                processingItem: void 0
            });
            return a.state = E(a.state), this.contextManager = a, r;
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
            const { SessionDB: r } = await T(async ()=>{
                const { SessionDB: n } = await import("./db-master-acV7bE9x.js").then((i)=>i.E);
                return {
                    SessionDB: n
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6]));
            await new r(t).addContextItems(e);
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
    function yt(t, e, r) {
        const a = dt(), n = x.useRef(!1), [i, p] = x.useState(!1), f = x.useCallback(async (C)=>{
            if (!(n.current || !e || e.getHistoryCount() > 0 || !t)) try {
                n.current = !0, p(!0);
                const { makeChatModeStartingContextItems_CN: l } = await T(async ()=>{
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
                n.current = !1, p(!1);
            }
        }, [
            e,
            t
        ]), g = x.useCallback(async (C, l, I)=>{
            if (!(n.current || !t || !e)) try {
                n.current = !0, p(!0), e.addLLMResponseAsContextItem({
                    role: "user",
                    content: C
                }, {}), I?.(), await h.saveNewContextItemsToDB(r, e.getHistoryItems());
                const { makeChatModeLLMMessagesFromContextStateForCharacterId: c } = await T(async ()=>{
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
                n.current = !1, p(!1);
            }
        }, [
            e,
            t,
            a,
            r
        ]);
        return {
            initializeChat: f,
            sendUserMessage: g,
            isBusy: i
        };
    }
    let Ct, _t;
    Xe = (t)=>{
        const [e, r] = x.useState(""), a = K(), [n, i] = x.useState(!1), [p, f] = x.useState(""), [g, C] = x.useState(!1), { data: l = [] } = z((o)=>o.from({
                s: at
            })), { data: I = [] } = z((o)=>o.from({
                c: nt
            })), c = l.find((o)=>o.id === t.sessionId), m = I.find((o)=>o.id === c?.characterId);
        x.useEffect(()=>{
            let o = !1;
            return C(!1), (async ()=>{
                if (c) try {
                    const d = await rt.createSessionDB(c.id).getContextItems();
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
            return a.submit(o, g && !n && !S, ()=>r(""), async (_)=>{
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
                            n && !h.contextManager?.getProcessingItem() && s.jsx(R, {
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
                                        onRestore: r,
                                        text: a.failure,
                                        onDismiss: a.dismiss
                                    }),
                                    s.jsxs(Z, {
                                        className: "mx-auto max-w-4xl",
                                        children: [
                                            s.jsx(tt, {
                                                "aria-label": "消息内容",
                                                value: e,
                                                onChange: (o)=>r(o.target.value),
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
                                                    disabled: !e.trim() || !g || n || S,
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
                    children: (t.item.data.list || []).map((e, r)=>s.jsx(U, {
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
                        }, e.id || r))
                });
            case "participant_message":
                return s.jsx(V, {
                    item: t.item
                });
            case "participant_message_group":
                return s.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: (t.item.data.list || []).map((e, r)=>s.jsx(V, {
                            item: {
                                ...t.item,
                                type: "participant_message",
                                data: {
                                    ...t.item.data,
                                    content: e.content,
                                    timestamp: e.timestamp
                                }
                            }
                        }, e.id || r))
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
export { Xe as SessionMainForChat, __tla };
