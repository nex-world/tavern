const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-kA5b7Kkp.js","assets/@tanstack-B5tCGMiu.js","assets/react-BxzVs1F-.js","assets/vendor-CJLoHUZS.js","assets/formatting-YGyf6cFc.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-CG_LwvPM.js","assets/zod-BTj0C3yc.js","assets/analytics-DHqd3KZu.js","assets/nex-tavern-uuid-Cz-4R4MI.js","assets/index-CRWqN2Z9.js","assets/icons-C6_pGF5j.js","assets/index-vWucJHKa.css","assets/id-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { e as E, an as P, aF as ee, r as _, t as R, u as te, j as s } from "./react-BxzVs1F-.js";
import { C as se, a as ne, b as ae, d as re } from "./card-BRzat3Z6.js";
import { S as oe, a as ie, b as ce, __tla as __tla_0 } from "./session._sessionId-Dltd-iUG.js";
import { S as de } from "./spinner-CFrUWQbp.js";
import { C as ue, M as G, a as F } from "./conversation-message-D83NGiDb.js";
import { I as me, d as pe, b as le } from "./input-group-0WwM74BH.js";
import { h as J, k as he } from "./@tanstack-B5tCGMiu.js";
import { j as Se, S as ge } from "./db-master-kA5b7Kkp.js";
import { s as fe } from "./db-BPqhYfj0.js";
import { _ as U, __tla as __tla_1 } from "./index-CRWqN2Z9.js";
import { C as xe } from "./context-manager.class-D5bFB92s.js";
import { S as Ce } from "./session-manager.class-CGxSDPWB.js";
import { B as A } from "./button-BRW5UoPv.js";
import { B as N } from "./badge-Cxz86jq2.js";
import { n as D } from "./id-BY9c7rfI.js";
import { u as Ie, g as ke, d as ye } from "./collapsible-kCge2IUx.js";
import { _ as V, o as L, s as x, n as v, b as _e, r as be, l as we } from "./zod-BTj0C3yc.js";
import { C as q } from "./CharacterAvatar-K7qbQSdG.js";
import { b as T, a as Me } from "./analytics-DHqd3KZu.js";
import { a2 as je, J as Ae, R as Ne, ax as De, b as ve } from "./icons-C6_pGF5j.js";
import "./vendor-CJLoHUZS.js";
import "./formatting-YGyf6cFc.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-CPcsbTWB.js";
import "./tavern-model-config-button-Bv5F13eL.js";
import "./responsive-dialog-B5gKVGEy.js";
import "./form-width-constraints-n6SdO9NQ.js";
import "./alert-dialog-oM7wSDIa.js";
import "./ai-settings-DZgxF8Gf.js";
import "./tavern-llm-config-editor-Dnk_p-P-.js";
import "./input-Cv054FMu.js";
import "./field-MgsDPNS0.js";
import "./label-APquV01x.js";
import "./select-CL5ldiVU.js";
import "./switch-CO9-2KPd.js";
import "./alert-B1_JhIZd.js";
import "./empty-CXeTqhb2.js";
import "./InvitationGuard-EXAZNTBq.js";
import "./nex-tavern-uuid-Cz-4R4MI.js";
import "./reading-settings.store-BJDH9hBu.js";
import "./textarea-CT6wyGoV.js";
import "./dexie-CG_LwvPM.js";
import "./es-toolkit-9bjl2JfA.js";
import "./avatar-D3rOZ_4f.js";
let Ut;
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
    class $e extends Ce {
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
            return this.session.modeConfig.participantSnapshots.find((n)=>n.id === e)?.name || "角色";
        }
    }
    const y = E({
        currentSession: null,
        contextManager: null,
        sessionManager: null,
        loadSession (t, e) {
            this.currentSession = t;
            const n = this.currentSession;
            n.modeState.currentUIState = "idle", n.modeState.aiAutoSpeakCounter === void 0 && (n.modeState.aiAutoSpeakCounter = 0), this.sessionManager = ee(new $e(n));
            const a = E(e || {
                historyItems: [],
                processingItem: void 0
            });
            this.contextManager = new xe(a);
        },
        async saveNewContextItemsToDB (t, e) {
            const { SessionDB: n } = await U(async ()=>{
                const { SessionDB: m } = await import("./db-master-kA5b7Kkp.js").then((r)=>r.A);
                return {
                    SessionDB: m
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])), a = new n(t);
            let i;
            try {
                i = P(e);
            } catch  {
                i = JSON.parse(JSON.stringify(e));
            }
            await a.addContextItems(i);
        },
        async updateSessionInDB () {
            if (!this.currentSession) return;
            const { masterDb: t } = await U(async ()=>{
                const { masterDb: a } = await import("./db-master-kA5b7Kkp.js").then((i)=>i.D);
                return {
                    masterDb: a
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])), e = P(this.currentSession.modeState), n = P(this.currentSession.modeConfig);
            await t.sessions.update(this.currentSession.id, {
                modeState: e,
                modeConfig: n,
                updatedAt: Date.now()
            });
        }
    });
    function B(t) {
        return t.modeConfig.participantSnapshots;
    }
    function Pe(t, e) {
        return t.modeConfig.participantSnapshots.find((n)=>n.id === e);
    }
    function K(t) {
        return t.map((e)=>`- ${e.name} (ID: ${e.id}): ${e.personality || e.description}`).join(`
`);
    }
    function Le(t) {
        if (!t) return "";
        const e = new Date(t), n = new Date, a = e.getHours().toString().padStart(2, "0"), i = e.getMinutes().toString().padStart(2, "0");
        return e.toDateString() === n.toDateString() ? `${a}:${i}` : `${e.getMonth() + 1}/${e.getDate()} ${a}:${i}`;
    }
    function X(t, e, n = 30) {
        const a = B(e), i = e.modeConfig.userName || "我";
        return t.getFlatHistoryItems(n).filter((m)=>!m.hidden && !m.deleted).map((m)=>{
            const { type: r, data: g } = m, l = Le(m.timestamp), C = l ? `[${l}] ` : "";
            if (r === "gc_user_message") return `${C}[${g.userName || i}]: ${g.content}`;
            if (r === "gc_character_message") {
                const d = g.characterName || a.find((o)=>o.id === g.characterId)?.name || "角色";
                return `${C}[${d}]: ${g.content}`;
            }
            return null;
        }).filter(Boolean).join(`
`);
    }
    function Be(t, e) {
        const n = B(t), a = t.modeState.speakCounts, i = t.modeConfig.topic, m = t.modeConfig.userName || "我", g = `${t.modeConfig.dmSystemPrompt || "你是一个隐形的群聊调度员。"}
你的唯一任务是根据当前对话上下文选择下一个最适合发言的 AI 角色。
选择时要考虑：对话的自然流向、话题相关性、角色的性格特点。
允许同一角色连续发言（如果对话情境自然需要），但也要注意让所有角色都有参与感。
注意观察对话历史中的时间戳，了解对话节奏。
【严格要求】：只输出一个 JSON 块，不要包含任何其他文字。
\`\`\`json
{ "nextSpeakerId": "角色ID", "reason": "选择原因" }
\`\`\`
可选角色：
${n.map((d)=>`- ${d.name} (ID: ${d.id}, 已发言: ${a[d.id] || 0}次)`).join(`
`)}`, l = X(e, t, 20), C = [
            i ? `【群聊话题】
${i}` : "",
            `【群聊成员】
- ${m} (玩家)
${K(n)}`,
            l ? `【最近对话】
${l}` : "【对话刚开始，请选一个适合打开话题的角色】",
            `【所有角色发言统计】
${n.map((d)=>`${d.name}: ${a[d.id] || 0} 次`).join(`
`)}`
        ].filter(Boolean).join(`

`);
        return [
            {
                role: "system",
                content: g
            },
            {
                role: "user",
                content: C
            }
        ];
    }
    function Ee(t, e) {
        const n = t.modeState.currentSpeakerId, a = Pe(t, n), i = B(t), m = t.modeConfig.userName || "我", r = t.modeConfig.topic;
        if (!a) return [];
        const g = `你是 ${a.name}。${a.systemPrompt}
${a.personality ? `你的性格：${a.personality}` : ""}
你现在正在一个群聊中和其他角色以及一个名为"${m}"的玩家聊天。
请以 ${a.name} 的身份自然发言，不要使用任何 XML 标签，直接输出对话内容即可。
发言要简洁自然，像真实的群聊一样，通常 1-3 句话。
注意根据对话历史中的时间戳感知时间流逝，做出自然的反应。`, l = X(e, t, 20), C = i.filter((o)=>o.id !== n), d = [
            r ? `【群聊话题】
${r}` : "",
            C.length > 0 ? `【其他群聊成员】
- ${m} (玩家)
${K(C)}` : `【群聊成员】
- ${m} (玩家)`,
            l ? `【对话历史】
${l}` : "【对话刚开始，请主动开启聊天】"
        ].filter(Boolean).join(`

`);
        return [
            {
                role: "system",
                content: g
            },
            {
                role: "user",
                content: d
            }
        ];
    }
    function Re(t) {
        try {
            const e = t.indexOf("{"), n = t.lastIndexOf("}") + 1;
            if (e < 0 || n <= e) return null;
            const a = JSON.parse(t.slice(e, n)), i = a.nextSpeakerId || a.speakerId;
            return i ? {
                nextSpeakerId: i,
                reason: a.reason || ""
            } : null;
        } catch  {
            return null;
        }
    }
    const z = 3;
    function Ge() {
        const t = Ie((d)=>ke(d.config)), e = _.useRef(!1), [n, a] = _.useState(!1), i = J(), m = _.useCallback(async (d, o, S, p = {})=>{
            const u = y.contextManager;
            if (!u) return "";
            const h = {
                id: D(),
                type: S,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: "",
                    ...p
                }
            };
            u.setProcessingItem(h);
            try {
                let I = "";
                if (await ye(d, o.map((b)=>({
                        ...b,
                        id: D()
                    })), [], (b, k)=>{
                    I = k;
                    const w = u.getProcessingItem();
                    w && (w.data.content = k);
                }), !I.trim()) throw u.setProcessingItem(void 0), new Error("LLM 请求失败：未收到有效响应（可能是 API 密钥无效、模型不可用或请求参数错误）");
                return u.completeProcessingItem(), I;
            } catch (I) {
                throw u.setProcessingItem(void 0), I;
            }
        }, []), r = _.useCallback(async ()=>{
            if (e.current) return;
            e.current = !0, a(!0);
            const d = {
                ...t
            };
            try {
                for(;;){
                    const o = y, S = o.currentSession, p = o.sessionManager, u = o.contextManager;
                    if (!(S && p && u)) break;
                    if (p.isAICounterAtMax()) {
                        p.setCurrentPhase("waiting_for_player"), p.setCurrentUIState("ai_loop_paused"), await o.updateSessionInDB();
                        break;
                    }
                    p.setCurrentUIState("ai_loop_running"), p.setCurrentPhase("dm_select_speaker"), await o.updateSessionInDB();
                    let h = null;
                    for(let k = 0; k < z; k++){
                        const w = Be(S, u), $ = await m(d, w, "gc_select_speaker");
                        if (h = Re($), h) break;
                        console.warn(`[GroupChat] DM 选择解析失败 (${k + 1}/${z})`);
                    }
                    if (!h) {
                        R.warning("DM 选择发言者失败，请重试"), p.setCurrentUIState("ai_loop_paused"), await o.updateSessionInDB();
                        break;
                    }
                    const I = p.findParticipantName(h.nextSpeakerId);
                    u.addHistoryItem({
                        id: D(),
                        type: "gc_select_speaker",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            nextSpeakerId: h.nextSpeakerId,
                            nextSpeakerName: I,
                            reason: h.reason
                        },
                        hidden: !0
                    }), p.setCurrentSpeaker(h.nextSpeakerId), p.setCurrentPhase("character_speak"), await o.updateSessionInDB();
                    const b = Ee(S, u);
                    await m(d, b, "gc_character_message", {
                        characterId: h.nextSpeakerId,
                        characterName: I
                    }), p.incrementAfterAISpeaks(h.nextSpeakerId), await o.saveNewContextItemsToDB(S.id, u.getHistoryItems()), await o.updateSessionInDB(), await new Promise((k)=>setTimeout(k, 50));
                }
            } catch (o) {
                console.error("[GroupChat] AI 循环错误:", o);
                const S = y.sessionManager;
                S && S.setCurrentUIState("ai_loop_paused");
                try {
                    await y.updateSessionInDB();
                } catch  {}
                R.error("LLM 调用失败，请检查配置", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>i({
                                to: "/config/llm"
                            })
                    }
                });
            } finally{
                e.current = !1, a(!1);
            }
        }, [
            t,
            m,
            i
        ]), g = _.useCallback(async (d)=>{
            const o = y, { currentSession: S, contextManager: p, sessionManager: u } = o;
            S && p && u && (p.addHistoryItem({
                id: D(),
                type: "gc_user_message",
                idx: 0,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: d,
                    userName: S.modeConfig.userName || "我"
                }
            }), u.resetCounterAfterPlayerSpeaks(), await o.saveNewContextItemsToDB(S.id, p.getHistoryItems()), await o.updateSessionInDB(), e.current || r());
        }, [
            r
        ]), l = _.useCallback(async ()=>{
            const d = y, { sessionManager: o } = d;
            !o || e.current || (o.resetAIAutoSpeakCounter(), r());
        }, [
            r
        ]), C = _.useCallback(async ()=>{
            const d = y, { sessionManager: o } = d;
            !o || e.current || (o.setCurrentPhase("dm_select_speaker"), o.setCurrentUIState("ai_loop_running"), o.resetAIAutoSpeakCounter(), r());
        }, [
            r
        ]);
        return {
            sendPlayerMessage: g,
            continueAILoop: l,
            startChat: C,
            isRunningRef: e,
            isRunning: n
        };
    }
    const Ue = V([
        "dm_select_speaker",
        "character_speak",
        "waiting_for_player"
    ]), Te = V([
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
    }, ze = L({
        id: x().describe("角色 ID"),
        name: x().describe("角色名称"),
        description: x().describe("角色描述"),
        avatar: x().optional().describe("角色头像"),
        systemPrompt: x().describe("角色扮演指引"),
        personality: x().optional().describe("角色性格概述"),
        firstMessage: x().optional().describe("开场问候语")
    }), He = L({
        topic: x().optional().describe("群聊话题/场景"),
        participantSnapshots: _e(ze).describe("参与的 AI 角色快照列表"),
        userName: x().optional().describe("玩家显示名称"),
        dmSystemPrompt: x().optional().describe("DM 调度提示词"),
        maxAIAutoSpeakCount: v().optional().default(5).describe("AI 自主发言最大数量，达到后暂停等待玩家")
    }), Oe = L({
        currentPhase: Ue.describe("AI 循环当前阶段"),
        currentUIState: Te.describe("当前 UI 状态"),
        currentSpeakerId: x().describe("当前发言者 ID"),
        messageCount: v().describe("总消息数"),
        speakCounts: be(x(), v()).describe("每个角色的发言次数"),
        aiAutoSpeakCounter: v().default(0).describe("AI 自主发言计数器，玩家发言时重置")
    });
    Se.extend({
        mode: we("group-chat").describe("模式"),
        modeConfig: He.describe("群聊模式配置"),
        modeState: Oe.describe("群聊模式状态")
    });
    function Q(t) {
        if (!t) return "";
        const e = new Date(t), n = new Date, a = e.getHours().toString().padStart(2, "0"), i = e.getMinutes().toString().padStart(2, "0");
        return e.toDateString() === n.toDateString() ? `${a}:${i}` : `${e.getMonth() + 1}/${e.getDate()} ${a}:${i}`;
    }
    let Fe, O, Je;
    Ut = (t)=>{
        const e = J(), [n, a] = _.useState(""), [i, m] = _.useState(!1), r = te(y), { data: g = [] } = he((c)=>c.from({
                s: ge
            })), l = g.find((c)=>c.id === t.sessionId);
        _.useEffect(()=>{
            let c = !1;
            if (!l) return;
            if (y.currentSession?.id === l.id && y.contextManager) {
                m(!0);
                return;
            }
            return (async ()=>{
                try {
                    const f = await fe.createSessionDB(l.id).getContextItems();
                    if (c) return;
                    y.loadSession(l, {
                        historyItems: f,
                        processingItem: void 0
                    }), m(!0);
                } catch (j) {
                    console.error("[GroupChat] Load session error", j);
                }
            })(), ()=>{
                c = !0;
            };
        }, [
            l?.id,
            l
        ]);
        const { sendPlayerMessage: C, continueAILoop: d, startChat: o, isRunningRef: S, isRunning: p } = Ge();
        if (!(l && i)) return s.jsxs("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
            children: [
                s.jsx(de, {
                    className: "size-8",
                    "aria-label": "正在加载"
                }),
                s.jsx("p", {
                    className: "text-xs font-medium tracking-widest uppercase opacity-50",
                    children: "加载群聊..."
                })
            ]
        });
        const u = r.currentSession?.modeState?.currentUIState || "idle", h = u === "ai_loop_paused" ? p ? "即将暂停" : "已暂停" : null, I = H[u] || H.idle, b = r.currentSession?.modeConfig?.participantSnapshots?.find((c)=>c.id === r.currentSession?.modeState?.currentSpeakerId), k = async ()=>{
            if (!n.trim()) return;
            const c = n;
            a(""), await C(c), Me(t.sessionId, "group-chat");
        }, w = async ()=>{
            S.current || (T(t.sessionId, "group-chat"), await o());
        }, $ = async ()=>{
            S.current || (T(t.sessionId, "group-chat"), await d());
        }, Y = ()=>e({
                to: "/plaza"
            }), W = r.contextManager?.state.processingItem?.id;
        return s.jsx("div", {
            className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden bg-background",
            children: s.jsxs("div", {
                className: "flex min-h-0 min-w-0 flex-1 flex-col",
                children: [
                    s.jsx(oe, {
                        title: r.currentSession?.modeConfig?.topic || "群聊",
                        subtitle: "多人对话",
                        actions: s.jsxs(ie, {
                            label: "群聊成员",
                            description: "查看参与成员和发言次数。",
                            children: [
                                s.jsxs("p", {
                                    className: "text-sm",
                                    children: [
                                        "玩家：",
                                        r.currentSession?.modeConfig?.userName || "我"
                                    ]
                                }),
                                (r.currentSession?.modeConfig?.participantSnapshots || []).map((c)=>s.jsxs(se, {
                                        children: [
                                            s.jsx(ne, {
                                                children: s.jsxs(ae, {
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
                                            s.jsxs(re, {
                                                className: "flex flex-wrap items-center gap-2",
                                                children: [
                                                    s.jsxs("span", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: [
                                                            "发言 ",
                                                            r.currentSession?.modeState.speakCounts?.[c.id] || 0,
                                                            " 次"
                                                        ]
                                                    }),
                                                    c.id === r.currentSession?.modeState.currentSpeakerId && u === "ai_loop_running" && s.jsx(N, {
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
                                    onClick: Y,
                                    children: [
                                        s.jsx(je, {
                                            "data-icon": "inline-start"
                                        }),
                                        "退出群聊"
                                    ]
                                })
                            ]
                        })
                    }),
                    s.jsxs(ce, {
                        children: [
                            s.jsxs(N, {
                                variant: "outline",
                                children: [
                                    (r.currentSession?.modeConfig?.participantSnapshots?.length || 0) + 1,
                                    " 位成员"
                                ]
                            }),
                            s.jsx(N, {
                                variant: "secondary",
                                className: "max-w-full min-w-0",
                                children: s.jsx("span", {
                                    className: "truncate",
                                    children: h ?? (b && u === "ai_loop_running" ? `${b.name} 正在输入` : I.label)
                                })
                            }),
                            u !== "idle" && s.jsxs(N, {
                                variant: "outline",
                                children: [
                                    "连续 AI 发言 ",
                                    r.currentSession?.modeState.aiAutoSpeakCounter || 0,
                                    "/",
                                    r.currentSession?.modeConfig.maxAIAutoSpeakCount ?? 5
                                ]
                            })
                        ]
                    }),
                    s.jsx(ue, {
                        children: (()=>{
                            const c = (r.contextManager?.state.historyItems || []).filter((f)=>!f.hidden), M = r.contextManager?.state.processingItem;
                            if (u === "idle") {
                                const f = c.length === 0 ? "开始群聊" : "继续群聊";
                                return s.jsx(G, {
                                    messageId: "conversation-start",
                                    children: s.jsxs("div", {
                                        className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                                        children: [
                                            s.jsx("div", {
                                                className: "size-24 rounded-4xl bg-primary/10 flex items-center justify-center mb-8 shadow-2xl shadow-primary/10 ring-8 ring-primary/5",
                                                children: s.jsx(Ae, {
                                                    className: "size-10 text-primary drop-shadow-sm"
                                                })
                                            }),
                                            s.jsx("h2", {
                                                className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                                                children: r.currentSession?.modeConfig?.topic || "群聊"
                                            }),
                                            s.jsxs("p", {
                                                className: "text-muted-foreground/80 font-medium tracking-wider mb-6 max-w-md text-center leading-relaxed text-sm",
                                                children: [
                                                    "与 ",
                                                    r.currentSession?.modeConfig?.participantSnapshots?.map((Z)=>Z.name).join("、"),
                                                    " 一起聊天"
                                                ]
                                            }),
                                            s.jsxs(A, {
                                                type: "button",
                                                size: "lg",
                                                className: "h-14 px-10 transition-all hover:scale-105 active:scale-95 uppercase",
                                                onClick: w,
                                                children: [
                                                    s.jsx(Ne, {
                                                        "data-icon": "inline-start"
                                                    }),
                                                    f
                                                ]
                                            })
                                        ]
                                    })
                                });
                            }
                            const j = [
                                ...c
                            ];
                            return M && !M.hidden && !c.some((f)=>f.id === M.id) && j.push(M), j.map((f)=>s.jsx(G, {
                                    messageId: f.id,
                                    scrollAnchor: f.type === "participant_message" || f.type === "gc_user_message",
                                    children: s.jsx(Fe, {
                                        item: f,
                                        participants: r.currentSession?.modeConfig?.participantSnapshots || [],
                                        userName: r.currentSession?.modeConfig?.userName || "我",
                                        isStreaming: f.id === W
                                    })
                                }, f.id));
                        })()
                    }, t.sessionId),
                    u !== "idle" && s.jsxs("div", {
                        className: "border-t px-3 py-2 sm:px-5 shrink-0 bg-background",
                        children: [
                            s.jsxs(me, {
                                className: "mx-auto max-w-4xl",
                                children: [
                                    s.jsx(pe, {
                                        "aria-label": "消息内容",
                                        value: n,
                                        onChange: (c)=>a(c.target.value),
                                        placeholder: h ? `${h}，发送消息或点击继续对话` : I.placeholder,
                                        rows: 1,
                                        className: "min-h-10 max-h-[min(10rem,25dvh)] overflow-y-auto",
                                        onKeyDown: (c)=>{
                                            c.key === "Enter" && !c.shiftKey && !c.nativeEvent.isComposing && (c.preventDefault(), k());
                                        }
                                    }),
                                    s.jsx(le, {
                                        align: "inline-end",
                                        className: "self-end pb-1.5",
                                        children: s.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                s.jsx(A, {
                                                    type: "button",
                                                    size: "icon",
                                                    variant: "ghost",
                                                    disabled: p || u === "ai_loop_running",
                                                    onClick: $,
                                                    "aria-label": h === "即将暂停" ? "即将暂停" : "让 AI 继续对话",
                                                    title: h === "即将暂停" ? "即将暂停" : "让 AI 继续对话",
                                                    children: s.jsx(De, {
                                                        "data-icon": "inline-start"
                                                    })
                                                }),
                                                s.jsx(A, {
                                                    "aria-label": "发送消息",
                                                    type: "button",
                                                    size: "icon",
                                                    className: "size-10 transition-all",
                                                    disabled: !n.trim(),
                                                    onClick: k,
                                                    children: s.jsx(ve, {
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
                                children: h ?? "Shift + Enter 换行"
                            })
                        ]
                    })
                ]
            })
        });
    };
    Fe = ({ item: t, participants: e, userName: n, isStreaming: a })=>{
        switch(t.type){
            case "gc_character_message":
                return s.jsx(O, {
                    item: t,
                    participants: e,
                    isStreaming: a
                });
            case "gc_user_message":
                return s.jsx(Je, {
                    item: t,
                    userName: n
                });
            case "gc_select_speaker":
                return null;
            default:
                return t.data?.content ? s.jsx(O, {
                    item: t,
                    participants: e,
                    isStreaming: a
                }) : null;
        }
    };
    O = ({ item: t, participants: e, isStreaming: n })=>{
        const a = t.data, i = e.find((g)=>g.id === a.characterId), m = a.characterName || i?.name || "角色", r = n ? "..." : Q(t.timestamp);
        return s.jsx(F, {
            name: m,
            footer: r,
            avatar: s.jsx(q, {
                character: i,
                size: "sm"
            }),
            children: a.content || ""
        });
    };
    Je = ({ item: t, userName: e })=>{
        const n = t.data, a = Q(t.timestamp);
        return s.jsx(F, {
            name: n.userName || e,
            footer: a,
            fromUser: !0,
            children: n.content || ""
        });
    };
});
export { Ut as SessionMainForGroupChat, __tla };
