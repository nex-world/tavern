const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-HfEwkyJ_.js","assets/@tanstack-D9whxhel.js","assets/react-fSTcKjfW.js","assets/vendor-BJngdH18.js","assets/formatting-C21BZ038.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/components-and-styling-jbG8BFt3.js","assets/icons-b8rFmPuv.js","assets/@tailwind-D8xBRFud.js","assets/dexie-Blbps_14.js","assets/zod-BTj0C3yc.js","assets/analytics-Bq5IfYJy.js","assets/nex-tavern-uuid-CCor5LQR.js","assets/index-D8p9a3Ew.js","assets/index-BmePl4Qj.css","assets/id-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { e as D, j as s, r as y, t as B } from "./react-fSTcKjfW.js";
import { u as G, C as K, M as R, S as Y, g as $, h as Q } from "./bubble-ChBk6qjY.js";
import { S as q, __tla as __tla_0 } from "./session._sessionId-CBDS5WHx.js";
import { S as T } from "./skeleton-B1Mg49M1.js";
import { C as N } from "./conversation-message-B4WPe1h6.js";
import { E as J, d as W } from "./empty-D6ugneX3.js";
import { I as X, d as Z, b as ee } from "./input-group-wQtn5Ogz.js";
import { l as te, S as se, C as ae, o as F } from "./db-master-HfEwkyJ_.js";
import { h as ne, k as z } from "./@tanstack-D9whxhel.js";
import { s as re } from "./db-CHGqqidi.js";
import { _ as A, __tla as __tla_1 } from "./index-D8p9a3Ew.js";
import { n as j } from "./id-BY9c7rfI.js";
import { C as b } from "./context-manager.class-C6sGHR0E.js";
import { d as oe } from "./display-template-2K2uLAap.js";
import { B as ie } from "./button-CvciAjOp.js";
import { C as k } from "./CharacterAvatar-BH9eOc3v.js";
import { A as ce, b as me } from "./avatar-cSs-iCw0.js";
import { f as le, c as de } from "./icons-b8rFmPuv.js";
import { u as ue } from "./useLLM-C5Knb0zQ.js";
import { a as ge } from "./analytics-Bq5IfYJy.js";
import "./vendor-BJngdH18.js";
import "./formatting-C21BZ038.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-jbG8BFt3.js";
import "./@tailwind-D8xBRFud.js";
import "./alert-CKYEc62b.js";
import "./shadcn-utils-Efc1-GKt.js";
import "./spinner-jy327NBe.js";
import "./tavern-model-config-button-D7VJjyvb.js";
import "./tooltip-Dtj2MaSk.js";
import "./responsive-dialog-Cofl85Kt.js";
import "./form-width-constraints-n6SdO9NQ.js";
import "./alert-dialog-Ds0XA1x4.js";
import "./collapsible-DLElejz2.js";
import "./es-toolkit-9bjl2JfA.js";
import "./ai-settings-CDI4Mw0o.js";
import "./tavern-llm-config-editor-Bh1jj2J-.js";
import "./input-DjbKr3Kh.js";
import "./field-B6f_phUt.js";
import "./label-Dz4kjqBb.js";
import "./select-CM_o-m7J.js";
import "./switch-pYzgEYFD.js";
import "./back-button-BqTq4wq5.js";
import "./dropdown-menu-DcMvmQgg.js";
import "./InvitationGuard-B-Csyj45.js";
import "./nex-tavern-uuid-CCor5LQR.js";
import "./session-mode-support-Dxu3pVam.js";
import "./character-avatar-source-DlPRh7j9.js";
import "./mode-registry-BqqC7VzV.js";
import "./reading-settings.store-D_woaCc8.js";
import "./textarea-C-tHSVtP.js";
import "./zod-BTj0C3yc.js";
import "./dexie-Blbps_14.js";
let St;
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
    const he = /\{\{([^:]+):([^}]+)\}\}/gi, fe = /^d/i;
    function E(e, t, o) {
        let a = e;
        const n = t.nickname || t.name || "角色", i = o?.userName || "用户";
        return a = oe(a, n, i), a = a.replace(he, (g, u, f)=>{
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
                        const m = Number.parseInt(f.replace(fe, ""), 10);
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
        }), a;
    }
    function L(e, t) {
        let o;
        return e.system_prompt && e.system_prompt.trim() !== "" ? (o = e.system_prompt, o = o.replaceAll("{{original}}", ()=>t?.originalSystemPrompt || "")) : (o = [
            `你是 ${e.name}，请根据你的性格和背景进行回应。保持角色的一致性。`,
            "=====[角色描述]=====",
            e.description,
            "=====[角色性格]=====",
            e.personality,
            "=====[聊天场景]=====",
            e.scenario,
            "=====[示例回复]=====",
            e.mes_example
        ].filter((a)=>a.trim() !== "").join(`

`), o.trim() === "" && (o = t?.originalSystemPrompt || "")), o = E(o, e, t), o.trim();
    }
    function pe(e, t) {
        const o = L(e, t), a = [
            e.first_mes,
            ...e?.alternate_greetings ?? []
        ], n = a[Math.floor(Math.random() * a.length)], i = E(n, e, t);
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
    function xe(e, t) {
        const o = L(e, t), a = [
            e.first_mes,
            ...e?.alternate_greetings ?? []
        ], n = a[Math.floor(Math.random() * a.length)], i = E(n, e, t), g = {
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
        const o = te.parse(e), a = [];
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
                    const i = n.data, g = i.characterId === t.characterId;
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
                    const i = n.data, g = i.characterId === t.characterId, u = i.list.map((f)=>f.content).join(`
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
        makeChatModeStartingContextItems_CN: xe,
        makeChatModeStartingMessages_CN: pe
    }, Symbol.toStringTag, {
        value: "Module"
    })), p = D({
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
            const a = new b(t || {
                historyItems: [],
                processingItem: void 0
            });
            return a.state = D(a.state), this.contextManager = a, o;
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
            this.currentSession = e.session, e.contextState && (this.contextManager = new b(e.contextState), this.contextManager.state = D(this.contextManager.state));
        },
        loadSession (e) {
            this.currentSession = e;
        },
        async saveNewContextItemsToDB (e, t) {
            const { SessionDB: o } = await A(async ()=>{
                const { SessionDB: n } = await import("./db-master-HfEwkyJ_.js").then((i)=>i.A);
                return {
                    SessionDB: n
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));
            await new o(e).addContextItems(t);
        }
    });
    function Ie({ item: e, character: t }) {
        return s.jsx(N, {
            name: t.name,
            avatar: s.jsx(k, {
                character: t,
                size: "sm"
            }),
            reasoningContent: e.data.reasoning_content,
            streaming: !!e.processing,
            children: e.data.content
        });
    }
    function O({ item: e, character: t }) {
        return s.jsx(N, {
            name: t.name,
            avatar: s.jsx(k, {
                character: t,
                size: "sm"
            }),
            reasoningContent: e.data.reasoning_content,
            streaming: !!e.processing,
            children: e.data.content
        });
    }
    function U({ item: e }) {
        return s.jsx(N, {
            name: "我",
            fromUser: !0,
            avatar: s.jsx(ce, {
                children: s.jsx(me, {
                    children: s.jsx(le, {})
                })
            }),
            children: e.data.content
        });
    }
    function ye(e, t, o) {
        const a = ue(), n = y.useRef(!1), [i, g] = y.useState(!1), u = ne(), f = y.useCallback(async (m)=>{
            if (!(n.current || !t || t.getHistoryCount() > 0 || !e)) try {
                n.current = !0, g(!0);
                const { makeChatModeStartingContextItems_CN: I } = await A(async ()=>{
                    const { makeChatModeStartingContextItems_CN: C } = await Promise.resolve().then(()=>H);
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
            t,
            e,
            u
        ]), w = y.useCallback(async (m, I, l)=>{
            if (!(n.current || !e || !t)) try {
                n.current = !0, g(!0), t.addLLMResponseAsContextItem({
                    role: "user",
                    content: m
                }, {}), l?.(), await p.saveNewContextItemsToDB(o, t.getHistoryItems());
                const { makeChatModeLLMMessagesFromContextStateForCharacterId: c } = await A(async ()=>{
                    const { makeChatModeLLMMessagesFromContextStateForCharacterId: r } = await Promise.resolve().then(()=>H);
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
                await a.callLLMStream(_, (r, h)=>{
                    S = h, I?.(r);
                    const x = t.getProcessingItem();
                    x && (x.data.content = S);
                }), M.data.content = S, t.completeProcessingItem();
            } catch (c) {
                throw t.setProcessingItem(void 0), console.error("ChatLoop Error:", c), B.error("对话服务调用失败，请打开 AI 设置检查连接", {
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
            a,
            u,
            o
        ]);
        return {
            initializeChat: f,
            sendUserMessage: w,
            isBusy: i
        };
    }
    let Ce, _e;
    St = (e)=>{
        const [t, o] = y.useState(""), a = G(), [n, i] = y.useState(!1), [g, u] = y.useState(""), [f, w] = y.useState(!1), { data: m = [] } = z((r)=>r.from({
                s: se
            })), { data: I = [] } = z((r)=>r.from({
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
                    }, P = new b(v);
                    p.contextManager = P, F(l.id), w(!0);
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
                e.sessionId && F(e.sessionId);
            }, [
            e.sessionId
        ]);
        const { sendUserMessage: C, initializeChat: _, isBusy: M } = ye(c, p.contextManager, e.sessionId);
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
        ]), !(l && c)) return s.jsx(J, {
            className: "py-8",
            children: s.jsx(W, {
                children: "会话不存在或已删除"
            })
        });
        const S = ()=>{
            const r = t, h = p.contextManager;
            return a.submit(r, f && !n && !M, ()=>o(""), async (x)=>{
                i(!0), u("");
                try {
                    if (await C(r, (d)=>{
                        u((v)=>v + d);
                    }, x), ge(e.sessionId, "chat"), h && l) {
                        const v = h.getHistoryItems().filter((P)=>!P.processing);
                        v.length > 0 && await p.saveNewContextItemsToDB(l.id, v);
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
                    s.jsx(q, {
                        exportChat: !0,
                        title: c.name,
                        subtitle: c.nickname || "角色对话",
                        avatar: s.jsx(k, {
                            character: c,
                            size: "xs",
                            shape: "circle"
                        })
                    }),
                    s.jsxs(K, {
                        children: [
                            (()=>{
                                const r = p.contextManager?.getVisibleHistoryItems() || [], h = p.contextManager?.getProcessingItem(), x = [
                                    ...r
                                ];
                                return h && !r.some((d)=>d.id === h.id) && x.push(h), x.map((d)=>s.jsx(R, {
                                        messageId: d.id,
                                        scrollAnchor: d.type === "participant_message" || d.type === "gc_user_message",
                                        children: s.jsx(Ce, {
                                            item: d,
                                            character: c,
                                            isProcessing: d.processing || void 0,
                                            streamingText: d.processing ? g : void 0
                                        })
                                    }, d.id));
                            })(),
                            n && !p.contextManager?.getProcessingItem() && s.jsx(R, {
                                messageId: "reply-pending",
                                role: "status",
                                "aria-label": "正在回复",
                                children: s.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [
                                        s.jsx(T, {
                                            className: "size-10 rounded-full shrink-0"
                                        }),
                                        s.jsxs("div", {
                                            className: "flex flex-col gap-3 grow pt-2",
                                            children: [
                                                s.jsx(T, {
                                                    className: "h-4 w-1/4"
                                                }),
                                                s.jsx(T, {
                                                    className: "h-24 w-full"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }, e.sessionId),
                    s.jsxs("div", {
                        className: "border-t px-3 py-2 sm:px-5 shrink-0 bg-background",
                        children: [
                            s.jsxs("div", {
                                className: "max-w-4xl mx-auto relative group",
                                children: [
                                    s.jsx(Y, {
                                        draft: t,
                                        onRestore: o,
                                        text: a.failure,
                                        onDismiss: a.dismiss
                                    }),
                                    s.jsxs(X, {
                                        className: "mx-auto max-w-4xl",
                                        children: [
                                            s.jsx(Z, {
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
                                            s.jsx(ee, {
                                                align: "inline-end",
                                                className: "self-end pb-1.5",
                                                children: s.jsx(ie, {
                                                    "aria-label": "发送消息",
                                                    size: "icon",
                                                    disabled: !t.trim() || !f || n || M,
                                                    onClick: S,
                                                    type: "button",
                                                    children: s.jsx(de, {
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
    Ce = (e)=>{
        switch(e.item.type){
            case "character_intro":
                return s.jsx(Ie, {
                    item: e.item,
                    character: e.character
                });
            case "character_message":
                return e.isProcessing ? s.jsx(_e, {
                    item: e.item,
                    character: e.character,
                    streamingText: e.streamingText || ""
                }) : s.jsx(O, {
                    item: e.item,
                    character: e.character
                });
            case "character_message_group":
                return s.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: (e.item.data.list || []).map((t, o)=>s.jsx(O, {
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
                return s.jsx(U, {
                    item: e.item
                });
            case "participant_message_group":
                return s.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: (e.item.data.list || []).map((t, o)=>s.jsx(U, {
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
                return s.jsx($, {
                    variant: "separator",
                    children: s.jsx(Q, {
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
    _e = (e)=>e.item.type === "character_message" ? s.jsx(N, {
            name: e.character.name,
            avatar: s.jsx(k, {
                character: e.character,
                size: "sm"
            }),
            footer: "正在回复…",
            children: e.streamingText || e.item.data.content
        }) : null;
});
export { St as SessionMainForChat, __tla };
