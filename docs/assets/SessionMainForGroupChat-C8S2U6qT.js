const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-b5fCn9mB.js","assets/@tanstack-HvIyZ7G-.js","assets/react-CdECYH1o.js","assets/vendor-BK50ji10.js","assets/formatting-BBnWba-L.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-B_g1HnUg.js","assets/zod-BTj0C3yc.js","assets/analytics-BjBUYDN_.js","assets/nex-tavern-uuid-CXz893WL.js","assets/index-k6qYjFMJ.js","assets/icons-LD1dlQlv.js","assets/index-BOxVUFQ5.css","assets/id-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { e as E, an as P, aF as te, r as b, t as R, u as se, j as s } from "./react-CdECYH1o.js";
import { u as ne, C as ae, M as G, S as re, a as F } from "./conversation-message-BwOyJT_A.js";
import { C as oe, a as ie, b as ce, d as de } from "./card-BBOLaoBh.js";
import { S as ue, a as me, b as le, __tla as __tla_0 } from "./session._sessionId-DmltwlKl.js";
import { S as pe } from "./spinner-DANPY4R7.js";
import { I as Se, d as ge, b as he } from "./input-group-Y3ah1Rbi.js";
import { h as J, k as fe } from "./@tanstack-HvIyZ7G-.js";
import { j as xe, S as Ce } from "./db-master-b5fCn9mB.js";
import { s as Ie } from "./db-BnATHJL5.js";
import { _ as U, __tla as __tla_1 } from "./index-k6qYjFMJ.js";
import { C as ke } from "./context-manager.class-I6ERY2vv.js";
import { S as ye } from "./session-manager.class-DYRgdOIu.js";
import { B as A } from "./button-DXPhLBkO.js";
import { B as N } from "./badge-CuoEhJCl.js";
import { n as D } from "./id-BY9c7rfI.js";
import { u as be, g as _e, d as we } from "./collapsible-CruqMeF1.js";
import { _ as V, o as L, s as I, n as v, b as Me, r as je, l as Ae } from "./zod-BTj0C3yc.js";
import { C as q } from "./CharacterAvatar-C5WMuKF2.js";
import { b as T, a as Ne } from "./analytics-BjBUYDN_.js";
import { a2 as De, J as ve, R as $e, ax as Pe, b as Le } from "./icons-LD1dlQlv.js";
import "./vendor-BK50ji10.js";
import "./formatting-BBnWba-L.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./alert-DSZBkTkP.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./@tailwind-CPcsbTWB.js";
import "./reading-settings.store-BQ85Rkks.js";
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
import "./empty-D_9_HEmg.js";
import "./InvitationGuard-Duw6q46K.js";
import "./nex-tavern-uuid-CXz893WL.js";
import "./textarea-tLeysPi9.js";
import "./dexie-B_g1HnUg.js";
import "./es-toolkit-9bjl2JfA.js";
import "./avatar-C5_yDDay.js";
let Ht;
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
    class Be extends ye {
        constructor(e){
            super(e), this.session = e;
        }
        getCurrentPhase() {
            return this.session.modeState.currentPhase;
        }
        getCurrentUIState() {
            return this.session.modeState.currentUIState;
        }
        getMaxAIAutoSpeakCount() {
            return this.session.modeConfig.maxAIAutoSpeakCount ?? 5;
        }
        getAIAutoSpeakCounter() {
            return this.session.modeState.aiAutoSpeakCounter;
        }
        isAICounterAtMax() {
            return this.getAIAutoSpeakCounter() >= this.getMaxAIAutoSpeakCount();
        }
        setCurrentPhase(e) {
            console.log(`[GroupChat] Phase: ${this.session.modeState.currentPhase} → ${e}`), this.session.modeState.currentPhase = e, this.session.updatedAt = Date.now();
        }
        setCurrentUIState(e) {
            this.session.modeState.currentUIState = e, this.session.updatedAt = Date.now();
        }
        setCurrentSpeaker(e) {
            this.session.modeState.currentSpeakerId = e, this.session.updatedAt = Date.now();
        }
        incrementAfterAISpeaks(e) {
            this.session.modeState.aiAutoSpeakCounter++, this.session.modeState.speakCounts[e] || (this.session.modeState.speakCounts[e] = 0), this.session.modeState.speakCounts[e]++, this.session.modeState.messageCount++, this.session.updatedAt = Date.now();
        }
        resetCounterAfterPlayerSpeaks() {
            this.session.modeState.aiAutoSpeakCounter = 0, this.session.modeState.messageCount++, this.session.updatedAt = Date.now();
        }
        resetAIAutoSpeakCounter() {
            this.session.modeState.aiAutoSpeakCounter = 0, this.session.updatedAt = Date.now();
        }
        findParticipantName(e) {
            return this.session.modeConfig.participantSnapshots.find((a)=>a.id === e)?.name || "角色";
        }
    }
    const y = E({
        currentSession: null,
        contextManager: null,
        sessionManager: null,
        loadSession (t, e) {
            this.currentSession = t;
            const a = this.currentSession;
            a.modeState.currentUIState = "idle", a.modeState.aiAutoSpeakCounter === void 0 && (a.modeState.aiAutoSpeakCounter = 0), this.sessionManager = te(new Be(a));
            const n = E(e || {
                historyItems: [],
                processingItem: void 0
            });
            this.contextManager = new ke(n);
        },
        async saveNewContextItemsToDB (t, e) {
            const { SessionDB: a } = await U(async ()=>{
                const { SessionDB: m } = await import("./db-master-b5fCn9mB.js").then((l)=>l.A);
                return {
                    SessionDB: m
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])), n = new a(t);
            let r;
            try {
                r = P(e);
            } catch  {
                r = JSON.parse(JSON.stringify(e));
            }
            await n.addContextItems(r);
        },
        async updateSessionInDB () {
            if (!this.currentSession) return;
            const { masterDb: t } = await U(async ()=>{
                const { masterDb: n } = await import("./db-master-b5fCn9mB.js").then((r)=>r.D);
                return {
                    masterDb: n
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])), e = P(this.currentSession.modeState), a = P(this.currentSession.modeConfig);
            await t.sessions.update(this.currentSession.id, {
                modeState: e,
                modeConfig: a,
                updatedAt: Date.now()
            });
        }
    });
    function B(t) {
        return t.modeConfig.participantSnapshots;
    }
    function Ee(t, e) {
        return t.modeConfig.participantSnapshots.find((a)=>a.id === e);
    }
    function K(t) {
        return t.map((e)=>`- ${e.name} (ID: ${e.id}): ${e.personality || e.description}`).join(`
`);
    }
    function Re(t) {
        if (!t) return "";
        const e = new Date(t), a = new Date, n = e.getHours().toString().padStart(2, "0"), r = e.getMinutes().toString().padStart(2, "0");
        return e.toDateString() === a.toDateString() ? `${n}:${r}` : `${e.getMonth() + 1}/${e.getDate()} ${n}:${r}`;
    }
    function X(t, e, a = 30) {
        const n = B(e), r = e.modeConfig.userName || "我";
        return t.getFlatHistoryItems(a).filter((m)=>!m.hidden && !m.deleted).map((m)=>{
            const { type: l, data: o } = m, C = Re(m.timestamp), g = C ? `[${C}] ` : "";
            if (l === "gc_user_message") return `${g}[${o.userName || r}]: ${o.content}`;
            if (l === "gc_character_message") {
                const d = o.characterName || n.find((i)=>i.id === o.characterId)?.name || "角色";
                return `${g}[${d}]: ${o.content}`;
            }
            return null;
        }).filter(Boolean).join(`
`);
    }
    function Ge(t, e) {
        const a = B(t), n = t.modeState.speakCounts, r = t.modeConfig.topic, m = t.modeConfig.userName || "我", o = `${t.modeConfig.dmSystemPrompt || "你是一个隐形的群聊调度员。"}
你的唯一任务是根据当前对话上下文选择下一个最适合发言的 AI 角色。
选择时要考虑：对话的自然流向、话题相关性、角色的性格特点。
允许同一角色连续发言（如果对话情境自然需要），但也要注意让所有角色都有参与感。
注意观察对话历史中的时间戳，了解对话节奏。
【严格要求】：只输出一个 JSON 块，不要包含任何其他文字。
\`\`\`json
{ "nextSpeakerId": "角色ID", "reason": "选择原因" }
\`\`\`
可选角色：
${a.map((d)=>`- ${d.name} (ID: ${d.id}, 已发言: ${n[d.id] || 0}次)`).join(`
`)}`, C = X(e, t, 20), g = [
            r ? `【群聊话题】
${r}` : "",
            `【群聊成员】
- ${m} (玩家)
${K(a)}`,
            C ? `【最近对话】
${C}` : "【对话刚开始，请选一个适合打开话题的角色】",
            `【所有角色发言统计】
${a.map((d)=>`${d.name}: ${n[d.id] || 0} 次`).join(`
`)}`
        ].filter(Boolean).join(`

`);
        return [
            {
                role: "system",
                content: o
            },
            {
                role: "user",
                content: g
            }
        ];
    }
    function Ue(t, e) {
        const a = t.modeState.currentSpeakerId, n = Ee(t, a), r = B(t), m = t.modeConfig.userName || "我", l = t.modeConfig.topic;
        if (!n) return [];
        const o = `你是 ${n.name}。${n.systemPrompt}
${n.personality ? `你的性格：${n.personality}` : ""}
你现在正在一个群聊中和其他角色以及一个名为"${m}"的玩家聊天。
请以 ${n.name} 的身份自然发言，不要使用任何 XML 标签，直接输出对话内容即可。
发言要简洁自然，像真实的群聊一样，通常 1-3 句话。
注意根据对话历史中的时间戳感知时间流逝，做出自然的反应。`, C = X(e, t, 20), g = r.filter((i)=>i.id !== a), d = [
            l ? `【群聊话题】
${l}` : "",
            g.length > 0 ? `【其他群聊成员】
- ${m} (玩家)
${K(g)}` : `【群聊成员】
- ${m} (玩家)`,
            C ? `【对话历史】
${C}` : "【对话刚开始，请主动开启聊天】"
        ].filter(Boolean).join(`

`);
        return [
            {
                role: "system",
                content: o
            },
            {
                role: "user",
                content: d
            }
        ];
    }
    function Te(t) {
        try {
            const e = t.indexOf("{"), a = t.lastIndexOf("}") + 1;
            if (e < 0 || a <= e) return null;
            const n = JSON.parse(t.slice(e, a)), r = n.nextSpeakerId || n.speakerId;
            return r ? {
                nextSpeakerId: r,
                reason: n.reason || ""
            } : null;
        } catch  {
            return null;
        }
    }
    const z = 3;
    function ze() {
        const t = be((d)=>_e(d.config)), e = b.useRef(!1), [a, n] = b.useState(!1), r = J(), m = b.useCallback(async (d, i, h, p = {})=>{
            const S = y.contextManager;
            if (!S) return "";
            const u = {
                id: D(),
                type: h,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: "",
                    ...p
                }
            };
            S.setProcessingItem(u);
            try {
                let f = "";
                if (await we(d, i.map((_)=>({
                        ..._,
                        id: D()
                    })), [], (_, k)=>{
                    f = k;
                    const w = S.getProcessingItem();
                    w && (w.data.content = k);
                }), !f.trim()) throw S.setProcessingItem(void 0), new Error("LLM 请求失败：未收到有效响应（可能是 API 密钥无效、模型不可用或请求参数错误）");
                return S.completeProcessingItem(), f;
            } catch (f) {
                throw S.setProcessingItem(void 0), f;
            }
        }, []), l = b.useCallback(async ()=>{
            if (e.current) return;
            e.current = !0, n(!0);
            const d = {
                ...t
            };
            try {
                for(;;){
                    const i = y, h = i.currentSession, p = i.sessionManager, S = i.contextManager;
                    if (!(h && p && S)) break;
                    if (p.isAICounterAtMax()) {
                        p.setCurrentPhase("waiting_for_player"), p.setCurrentUIState("ai_loop_paused"), await i.updateSessionInDB();
                        break;
                    }
                    p.setCurrentUIState("ai_loop_running"), p.setCurrentPhase("dm_select_speaker"), await i.updateSessionInDB();
                    let u = null;
                    for(let k = 0; k < z; k++){
                        const w = Ge(h, S), $ = await m(d, w, "gc_select_speaker");
                        if (u = Te($), u) break;
                        console.warn(`[GroupChat] DM 选择解析失败 (${k + 1}/${z})`);
                    }
                    if (!u) {
                        R.warning("DM 选择发言者失败，请重试"), p.setCurrentUIState("ai_loop_paused"), await i.updateSessionInDB();
                        break;
                    }
                    const f = p.findParticipantName(u.nextSpeakerId);
                    S.addHistoryItem({
                        id: D(),
                        type: "gc_select_speaker",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            nextSpeakerId: u.nextSpeakerId,
                            nextSpeakerName: f,
                            reason: u.reason
                        },
                        hidden: !0
                    }), p.setCurrentSpeaker(u.nextSpeakerId), p.setCurrentPhase("character_speak"), await i.updateSessionInDB();
                    const _ = Ue(h, S);
                    await m(d, _, "gc_character_message", {
                        characterId: u.nextSpeakerId,
                        characterName: f
                    }), p.incrementAfterAISpeaks(u.nextSpeakerId), await i.saveNewContextItemsToDB(h.id, S.getHistoryItems()), await i.updateSessionInDB(), await new Promise((k)=>setTimeout(k, 50));
                }
            } catch (i) {
                console.error("[GroupChat] AI 循环错误:", i);
                const h = y.sessionManager;
                h && h.setCurrentUIState("ai_loop_paused");
                try {
                    await y.updateSessionInDB();
                } catch  {}
                R.error("LLM 调用失败，请检查配置", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>r({
                                to: "/config/llm"
                            })
                    }
                });
            } finally{
                e.current = !1, n(!1);
            }
        }, [
            t,
            m,
            r
        ]), o = b.useCallback(async (d, i)=>{
            const h = y, { currentSession: p, contextManager: S, sessionManager: u } = h;
            p && S && u && (S.addHistoryItem({
                id: D(),
                type: "gc_user_message",
                idx: 0,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: d,
                    userName: p.modeConfig.userName || "我"
                }
            }), u.resetCounterAfterPlayerSpeaks(), i?.(), await h.saveNewContextItemsToDB(p.id, S.getHistoryItems()), await h.updateSessionInDB(), e.current || l());
        }, [
            l
        ]), C = b.useCallback(async ()=>{
            const d = y, { sessionManager: i } = d;
            !i || e.current || (i.resetAIAutoSpeakCounter(), l());
        }, [
            l
        ]), g = b.useCallback(async ()=>{
            const d = y, { sessionManager: i } = d;
            !i || e.current || (i.setCurrentPhase("dm_select_speaker"), i.setCurrentUIState("ai_loop_running"), i.resetAIAutoSpeakCounter(), l());
        }, [
            l
        ]);
        return {
            sendPlayerMessage: o,
            continueAILoop: C,
            startChat: g,
            isRunningRef: e,
            isRunning: a
        };
    }
    const He = V([
        "dm_select_speaker",
        "character_speak",
        "waiting_for_player"
    ]), Oe = V([
        "idle",
        "ai_loop_running",
        "ai_loop_paused"
    ]), H = {
        idle: {
            label: "空闲",
            placeholder: "点击开始群聊...",
            inputEnabled: !1
        },
        ai_loop_running: {
            label: "AI 对话中",
            placeholder: "随时发送消息...",
            inputEnabled: !0
        },
        ai_loop_paused: {
            label: "等待你的消息",
            placeholder: "发送消息，或点击 ⏩ 让 AI 继续...",
            inputEnabled: !0
        }
    }, Fe = L({
        id: I().describe("角色 ID"),
        name: I().describe("角色名称"),
        description: I().describe("角色描述"),
        avatar: I().optional().describe("角色头像"),
        systemPrompt: I().describe("角色扮演指引"),
        personality: I().optional().describe("角色性格概述"),
        firstMessage: I().optional().describe("开场问候语")
    }), Je = L({
        topic: I().optional().describe("群聊话题/场景"),
        participantSnapshots: Me(Fe).describe("参与的 AI 角色快照列表"),
        userName: I().optional().describe("玩家显示名称"),
        dmSystemPrompt: I().optional().describe("DM 调度提示词"),
        maxAIAutoSpeakCount: v().optional().default(5).describe("AI 自主发言最大数量，达到后暂停等待玩家")
    }), Ve = L({
        currentPhase: He.describe("AI 循环当前阶段"),
        currentUIState: Oe.describe("当前 UI 状态"),
        currentSpeakerId: I().describe("当前发言者 ID"),
        messageCount: v().describe("总消息数"),
        speakCounts: je(I(), v()).describe("每个角色的发言次数"),
        aiAutoSpeakCounter: v().default(0).describe("AI 自主发言计数器，玩家发言时重置")
    });
    xe.extend({
        mode: Ae("group-chat").describe("模式"),
        modeConfig: Je.describe("群聊模式配置"),
        modeState: Ve.describe("群聊模式状态")
    });
    function Q(t) {
        if (!t) return "";
        const e = new Date(t), a = new Date, n = e.getHours().toString().padStart(2, "0"), r = e.getMinutes().toString().padStart(2, "0");
        return e.toDateString() === a.toDateString() ? `${n}:${r}` : `${e.getMonth() + 1}/${e.getDate()} ${n}:${r}`;
    }
    let qe, O, Ke;
    Ht = (t)=>{
        const e = J(), [a, n] = b.useState(""), r = ne(), [m, l] = b.useState(!1), o = se(y), { data: C = [] } = fe((c)=>c.from({
                s: Ce
            })), g = C.find((c)=>c.id === t.sessionId);
        b.useEffect(()=>{
            let c = !1;
            if (!g) return;
            if (y.currentSession?.id === g.id && y.contextManager) {
                l(!0);
                return;
            }
            return (async ()=>{
                try {
                    const x = await Ie.createSessionDB(g.id).getContextItems();
                    if (c) return;
                    y.loadSession(g, {
                        historyItems: x,
                        processingItem: void 0
                    }), l(!0);
                } catch (j) {
                    console.error("[GroupChat] Load session error", j);
                }
            })(), ()=>{
                c = !0;
            };
        }, [
            g?.id,
            g
        ]);
        const { sendPlayerMessage: d, continueAILoop: i, startChat: h, isRunningRef: p, isRunning: S } = ze();
        if (!(g && m)) return s.jsxs("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
            children: [
                s.jsx(pe, {
                    className: "size-8",
                    "aria-label": "正在加载"
                }),
                s.jsx("p", {
                    className: "text-xs font-medium tracking-widest uppercase opacity-50",
                    children: "加载群聊..."
                })
            ]
        });
        const u = o.currentSession?.modeState?.currentUIState || "idle", f = u === "ai_loop_paused" ? S ? "即将暂停" : "已暂停" : null, _ = H[u] || H.idle, k = o.currentSession?.modeConfig?.participantSnapshots?.find((c)=>c.id === o.currentSession?.modeState?.currentSpeakerId), w = ()=>{
            const c = a;
            return r.submit(c, u !== "idle", ()=>n(""), async (M)=>{
                await d(c, ()=>{
                    M(), Ne(t.sessionId, "group-chat");
                });
            });
        }, $ = async ()=>{
            p.current || (T(t.sessionId, "group-chat"), await h());
        }, Y = async ()=>{
            p.current || (T(t.sessionId, "group-chat"), await i());
        }, W = ()=>e({
                to: "/plaza"
            }), Z = o.contextManager?.state.processingItem?.id;
        return s.jsx("div", {
            className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden bg-background",
            children: s.jsxs("div", {
                className: "flex min-h-0 min-w-0 flex-1 flex-col",
                children: [
                    s.jsx(ue, {
                        title: o.currentSession?.modeConfig?.topic || "群聊",
                        subtitle: "多人对话",
                        actions: s.jsxs(me, {
                            label: "群聊成员",
                            description: "查看参与成员和发言次数。",
                            children: [
                                s.jsxs("p", {
                                    className: "text-sm",
                                    children: [
                                        "玩家：",
                                        o.currentSession?.modeConfig?.userName || "我"
                                    ]
                                }),
                                (o.currentSession?.modeConfig?.participantSnapshots || []).map((c)=>s.jsxs(oe, {
                                        children: [
                                            s.jsx(ie, {
                                                children: s.jsxs(ce, {
                                                    className: "flex min-w-0 items-center gap-2",
                                                    children: [
                                                        s.jsx(q, {
                                                            character: c,
                                                            size: "xs",
                                                            shape: "rounded"
                                                        }),
                                                        s.jsx("span", {
                                                            className: "min-w-0 break-words",
                                                            children: c.name
                                                        })
                                                    ]
                                                })
                                            }),
                                            s.jsxs(de, {
                                                className: "flex flex-wrap items-center gap-2",
                                                children: [
                                                    s.jsxs("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: [
                                                            "发言 ",
                                                            o.currentSession?.modeState.speakCounts?.[c.id] || 0,
                                                            " 次"
                                                        ]
                                                    }),
                                                    c.id === o.currentSession?.modeState.currentSpeakerId && u === "ai_loop_running" && s.jsx(N, {
                                                        variant: "secondary",
                                                        children: "发言中"
                                                    })
                                                ]
                                            })
                                        ]
                                    }, c.id)),
                                s.jsxs(A, {
                                    type: "button",
                                    variant: "outline",
                                    onClick: W,
                                    children: [
                                        s.jsx(De, {
                                            "data-icon": "inline-start"
                                        }),
                                        "退出群聊"
                                    ]
                                })
                            ]
                        })
                    }),
                    s.jsxs(le, {
                        children: [
                            s.jsxs(N, {
                                variant: "outline",
                                children: [
                                    (o.currentSession?.modeConfig?.participantSnapshots?.length || 0) + 1,
                                    " 位成员"
                                ]
                            }),
                            s.jsx(N, {
                                variant: "secondary",
                                className: "max-w-full min-w-0",
                                children: s.jsx("span", {
                                    className: "truncate",
                                    children: f ?? (k && u === "ai_loop_running" ? `${k.name} 正在输入` : _.label)
                                })
                            }),
                            u !== "idle" && s.jsxs(N, {
                                variant: "outline",
                                children: [
                                    "连续 AI 发言 ",
                                    o.currentSession?.modeState.aiAutoSpeakCounter || 0,
                                    "/",
                                    o.currentSession?.modeConfig.maxAIAutoSpeakCount ?? 5
                                ]
                            })
                        ]
                    }),
                    s.jsx(ae, {
                        children: (()=>{
                            const c = (o.contextManager?.state.historyItems || []).filter((x)=>!x.hidden), M = o.contextManager?.state.processingItem;
                            if (u === "idle") {
                                const x = c.length === 0 ? "开始群聊" : "继续群聊";
                                return s.jsx(G, {
                                    messageId: "conversation-start",
                                    children: s.jsxs("div", {
                                        className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                                        children: [
                                            s.jsx("div", {
                                                className: "size-24 rounded-4xl bg-primary/10 flex items-center justify-center mb-8 shadow-2xl shadow-primary/10 ring-8 ring-primary/5",
                                                children: s.jsx(ve, {
                                                    className: "size-10 text-primary drop-shadow-sm"
                                                })
                                            }),
                                            s.jsx("h2", {
                                                className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                                                children: o.currentSession?.modeConfig?.topic || "群聊"
                                            }),
                                            s.jsxs("p", {
                                                className: "text-muted-foreground/80 font-medium tracking-wider mb-6 max-w-md text-center leading-relaxed text-sm",
                                                children: [
                                                    "与 ",
                                                    o.currentSession?.modeConfig?.participantSnapshots?.map((ee)=>ee.name).join("、"),
                                                    " 一起聊天"
                                                ]
                                            }),
                                            s.jsxs(A, {
                                                type: "button",
                                                size: "lg",
                                                className: "h-14 px-10 transition-all hover:scale-105 active:scale-95 uppercase",
                                                onClick: $,
                                                children: [
                                                    s.jsx($e, {
                                                        "data-icon": "inline-start"
                                                    }),
                                                    x
                                                ]
                                            })
                                        ]
                                    })
                                });
                            }
                            const j = [
                                ...c
                            ];
                            return M && !M.hidden && !c.some((x)=>x.id === M.id) && j.push(M), j.map((x)=>s.jsx(G, {
                                    messageId: x.id,
                                    scrollAnchor: x.type === "participant_message" || x.type === "gc_user_message",
                                    children: s.jsx(qe, {
                                        item: x,
                                        participants: o.currentSession?.modeConfig?.participantSnapshots || [],
                                        userName: o.currentSession?.modeConfig?.userName || "我",
                                        isStreaming: x.id === Z
                                    })
                                }, x.id));
                        })()
                    }, t.sessionId),
                    u !== "idle" && s.jsxs("div", {
                        className: "border-t px-3 py-2 sm:px-5 shrink-0 bg-background",
                        children: [
                            s.jsx(re, {
                                draft: a,
                                onRestore: n,
                                text: r.failure,
                                onDismiss: r.dismiss
                            }),
                            s.jsxs(Se, {
                                className: "mx-auto max-w-4xl",
                                children: [
                                    s.jsx(ge, {
                                        "aria-label": "消息内容",
                                        value: a,
                                        onChange: (c)=>n(c.target.value),
                                        placeholder: f ? `${f}，发送消息或点击继续对话` : _.placeholder,
                                        rows: 1,
                                        className: "min-h-10 max-h-[min(10rem,25dvh)] overflow-y-auto",
                                        onKeyDown: (c)=>{
                                            c.key === "Enter" && !c.shiftKey && !c.nativeEvent.isComposing && c.keyCode !== 229 && (c.preventDefault(), w());
                                        }
                                    }),
                                    s.jsx(he, {
                                        align: "inline-end",
                                        className: "self-end pb-1.5",
                                        children: s.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                s.jsx(A, {
                                                    type: "button",
                                                    size: "icon",
                                                    variant: "ghost",
                                                    disabled: S || u === "ai_loop_running",
                                                    onClick: Y,
                                                    "aria-label": f === "即将暂停" ? "即将暂停" : "让 AI 继续对话",
                                                    title: f === "即将暂停" ? "即将暂停" : "让 AI 继续对话",
                                                    children: s.jsx(Pe, {
                                                        "data-icon": "inline-start"
                                                    })
                                                }),
                                                s.jsx(A, {
                                                    "aria-label": "发送消息",
                                                    type: "button",
                                                    size: "icon",
                                                    className: "size-10 transition-all",
                                                    disabled: !a.trim() || r.pending,
                                                    onClick: w,
                                                    children: s.jsx(Le, {
                                                        "data-icon": "inline-start"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            s.jsx("p", {
                                className: "max-w-4xl mx-auto mt-1 px-2 text-right text-xs text-muted-foreground",
                                children: f ?? "Shift + Enter 换行"
                            })
                        ]
                    })
                ]
            })
        });
    };
    qe = ({ item: t, participants: e, userName: a, isStreaming: n })=>{
        switch(t.type){
            case "gc_character_message":
                return s.jsx(O, {
                    item: t,
                    participants: e,
                    isStreaming: n
                });
            case "gc_user_message":
                return s.jsx(Ke, {
                    item: t,
                    userName: a
                });
            case "gc_select_speaker":
                return null;
            default:
                return t.data?.content ? s.jsx(O, {
                    item: t,
                    participants: e,
                    isStreaming: n
                }) : null;
        }
    };
    O = ({ item: t, participants: e, isStreaming: a })=>{
        const n = t.data, r = e.find((o)=>o.id === n.characterId), m = n.characterName || r?.name || "角色", l = a ? "..." : Q(t.timestamp);
        return s.jsx(F, {
            name: m,
            footer: l,
            avatar: s.jsx(q, {
                character: r,
                size: "sm"
            }),
            children: n.content || ""
        });
    };
    Ke = ({ item: t, userName: e })=>{
        const a = t.data, n = Q(t.timestamp);
        return s.jsx(F, {
            name: a.userName || e,
            footer: n,
            fromUser: !0,
            children: a.content || ""
        });
    };
});
export { Ht as SessionMainForGroupChat, __tla };
