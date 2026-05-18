const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-DKnNNmTP.js","assets/@tanstack-D67abzz0.js","assets/react-CAuF6Uwp.js","assets/vendor-R_RbF-Qb.js","assets/formatting-DFtRXkW1.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-CZ_H1TYX.js","assets/zod-D7Re9cnc.js"])))=>i.map(i=>d[i]);
import { ak as T, a5 as $, aH as W, r as C, t as U, u as Z, j as e } from "./react-CAuF6Uwp.js";
import { f as F, i as ee } from "./@tanstack-D67abzz0.js";
import { h as te, S as se } from "./db-master-DKnNNmTP.js";
import { s as ae } from "./db-CPOLtxAM.js";
import { _ as G, __tla as __tla_0 } from "./index-C4wlxMXN.js";
import { C as ne, A as re } from "./AutoScrollDownArea-hJ97JLYP.js";
import { S as oe } from "./session-manager.class-BRPwaTjg.js";
import { B as j } from "./button-B6v19V-K.js";
import { T as ie } from "./textarea-CFS4_TcP.js";
import { B as y } from "./badge-CR9zO-CQ.js";
import { n as _ } from "./id-BY9c7rfI.js";
import { u as ce, a as de } from "./global-llm-config.store-BSRZEgc6.js";
import { _ as J, o as L, s as g, n as A, a as le, r as ue, l as me } from "./zod-D7Re9cnc.js";
import { c as P } from "./shadcn-utils-Cnr6N47i.js";
import { C as V } from "./CharacterAvatar-yPJ36Fh6.js";
import { as as pe, G as R, a1 as xe, aA as he, ae as ge, f as B, t as fe } from "./icons-Cmb87C8b.js";
import "./vendor-R_RbF-Qb.js";
import "./formatting-DFtRXkW1.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-CZ_H1TYX.js";
import "./es-toolkit-9bjl2JfA.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-CPcsbTWB.js";
let st;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    class Se extends oe {
        constructor(t){
            super(t), this.session = t;
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
        setCurrentPhase(t) {
            console.log(`[GroupChat] Phase: ${this.session.modeState.currentPhase} → ${t}`), this.session.modeState.currentPhase = t, this.session.updatedAt = Date.now();
        }
        setCurrentUIState(t) {
            this.session.modeState.currentUIState = t, this.session.updatedAt = Date.now();
        }
        setCurrentSpeaker(t) {
            this.session.modeState.currentSpeakerId = t, this.session.updatedAt = Date.now();
        }
        incrementAfterAISpeaks(t) {
            this.session.modeState.aiAutoSpeakCounter++, this.session.modeState.speakCounts[t] || (this.session.modeState.speakCounts[t] = 0), this.session.modeState.speakCounts[t]++, this.session.modeState.messageCount++, this.session.updatedAt = Date.now();
        }
        resetCounterAfterPlayerSpeaks() {
            this.session.modeState.aiAutoSpeakCounter = 0, this.session.modeState.messageCount++, this.session.updatedAt = Date.now();
        }
        resetAIAutoSpeakCounter() {
            this.session.modeState.aiAutoSpeakCounter = 0, this.session.updatedAt = Date.now();
        }
        findParticipantName(t) {
            return this.session.modeConfig.participantSnapshots.find((a)=>a.id === t)?.name || "角色";
        }
    }
    const w = T({
        currentSession: null,
        contextManager: null,
        sessionManager: null,
        loadSession (s, t) {
            this.currentSession = s;
            const a = this.currentSession;
            a.modeState.currentUIState = "idle", a.modeState.aiAutoSpeakCounter === void 0 && (a.modeState.aiAutoSpeakCounter = 0), this.sessionManager = W(new Se(a));
            const n = T(t || {
                historyItems: [],
                processingItem: void 0
            });
            this.contextManager = new ne(n);
        },
        async saveNewContextItemsToDB (s, t) {
            const { SessionDB: a } = await G(async ()=>{
                const { SessionDB: p } = await import("./db-master-DKnNNmTP.js").then((i)=>i.v);
                return {
                    SessionDB: p
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), n = new a(s);
            let o;
            try {
                o = $(t);
            } catch  {
                o = JSON.parse(JSON.stringify(t));
            }
            await n.addContextItems(o);
        },
        async updateSessionInDB () {
            if (!this.currentSession) return;
            const { masterDb: s } = await G(async ()=>{
                const { masterDb: n } = await import("./db-master-DKnNNmTP.js").then((o)=>o.w);
                return {
                    masterDb: n
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), t = $(this.currentSession.modeState), a = $(this.currentSession.modeConfig);
            await s.sessions.update(this.currentSession.id, {
                modeState: t,
                modeConfig: a,
                updatedAt: Date.now()
            });
        }
    });
    function E(s) {
        return s.modeConfig.participantSnapshots;
    }
    function be(s, t) {
        return s.modeConfig.participantSnapshots.find((a)=>a.id === t);
    }
    function q(s) {
        return s.map((t)=>`- ${t.name} (ID: ${t.id}): ${t.personality || t.description}`).join(`
`);
    }
    function we(s) {
        if (!s) return "";
        const t = new Date(s), a = new Date, n = t.getHours().toString().padStart(2, "0"), o = t.getMinutes().toString().padStart(2, "0");
        return t.toDateString() === a.toDateString() ? `${n}:${o}` : `${t.getMonth() + 1}/${t.getDate()} ${n}:${o}`;
    }
    function K(s, t, a = 30) {
        const n = E(t), o = t.modeConfig.userName || "我";
        return s.getFlatHistoryItems(a).filter((p)=>!p.hidden && !p.deleted).map((p)=>{
            const { type: i, data: h } = p, c = we(p.timestamp), r = c ? `[${c}] ` : "";
            if (i === "gc_user_message") return `${r}[${h.userName || o}]: ${h.content}`;
            if (i === "gc_character_message") {
                const d = h.characterName || n.find((u)=>u.id === h.characterId)?.name || "角色";
                return `${r}[${d}]: ${h.content}`;
            }
            return null;
        }).filter(Boolean).join(`
`);
    }
    function Ce(s, t) {
        const a = E(s), n = s.modeState.speakCounts, o = s.modeConfig.topic, p = s.modeConfig.userName || "我", h = `${s.modeConfig.dmSystemPrompt || "你是一个隐形的群聊调度员。"}
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
`)}`, c = K(t, s, 20), r = [
            o ? `【群聊话题】
${o}` : "",
            `【群聊成员】
- ${p} (玩家)
${q(a)}`,
            c ? `【最近对话】
${c}` : "【对话刚开始，请选一个适合打开话题的角色】",
            `【所有角色发言统计】
${a.map((d)=>`${d.name}: ${n[d.id] || 0} 次`).join(`
`)}`
        ].filter(Boolean).join(`

`);
        return [
            {
                role: "system",
                content: h
            },
            {
                role: "user",
                content: r
            }
        ];
    }
    function Ie(s, t) {
        const a = s.modeState.currentSpeakerId, n = be(s, a), o = E(s), p = s.modeConfig.userName || "我", i = s.modeConfig.topic;
        if (!n) return [];
        const h = `你是 ${n.name}。${n.systemPrompt}
${n.personality ? `你的性格：${n.personality}` : ""}
你现在正在一个群聊中和其他角色以及一个名为"${p}"的玩家聊天。
请以 ${n.name} 的身份自然发言，不要使用任何 XML 标签，直接输出对话内容即可。
发言要简洁自然，像真实的群聊一样，通常 1-3 句话。
注意根据对话历史中的时间戳感知时间流逝，做出自然的反应。`, c = K(t, s, 20), r = o.filter((u)=>u.id !== a), d = [
            i ? `【群聊话题】
${i}` : "",
            r.length > 0 ? `【其他群聊成员】
- ${p} (玩家)
${q(r)}` : `【群聊成员】
- ${p} (玩家)`,
            c ? `【对话历史】
${c}` : "【对话刚开始，请主动开启聊天】"
        ].filter(Boolean).join(`

`);
        return [
            {
                role: "system",
                content: h
            },
            {
                role: "user",
                content: d
            }
        ];
    }
    function ve(s) {
        try {
            const t = s.indexOf("{"), a = s.lastIndexOf("}") + 1;
            if (t < 0 || a <= t) return null;
            const n = JSON.parse(s.slice(t, a)), o = n.nextSpeakerId || n.speakerId;
            return o ? {
                nextSpeakerId: o,
                reason: n.reason || ""
            } : null;
        } catch  {
            return null;
        }
    }
    const H = 3;
    function Ne() {
        const s = ce((c)=>c.config), t = C.useRef(!1), a = F(), n = C.useCallback(async (c, r, d, u = {})=>{
            const x = w.contextManager;
            if (!x) return "";
            const m = {
                id: _(),
                type: d,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: "",
                    ...u
                }
            };
            x.setProcessingItem(m);
            try {
                let f = "";
                if (await de(c, r.map((v)=>({
                        ...v,
                        id: _()
                    })), [], (v, S)=>{
                    f = S;
                    const k = x.getProcessingItem();
                    k && (k.data.content = S);
                }), !f.trim()) throw x.setProcessingItem(void 0), new Error("LLM 请求失败：未收到有效响应（可能是 API 密钥无效、模型不可用或请求参数错误）");
                return x.completeProcessingItem(), f;
            } catch (f) {
                throw x.setProcessingItem(void 0), f;
            }
        }, []), o = C.useCallback(async ()=>{
            if (t.current) return;
            t.current = !0;
            const c = {
                ...s
            };
            try {
                for(;;){
                    const r = w, d = r.currentSession, u = r.sessionManager, x = r.contextManager;
                    if (!(d && u && x)) break;
                    if (u.isAICounterAtMax()) {
                        u.setCurrentPhase("waiting_for_player"), u.setCurrentUIState("ai_loop_paused"), await r.updateSessionInDB();
                        break;
                    }
                    u.setCurrentUIState("ai_loop_running"), u.setCurrentPhase("dm_select_speaker"), await r.updateSessionInDB();
                    let m = null;
                    for(let S = 0; S < H; S++){
                        const k = Ce(d, x), M = await n(c, k, "gc_select_speaker");
                        if (m = ve(M), m) break;
                        console.warn(`[GroupChat] DM 选择解析失败 (${S + 1}/${H})`);
                    }
                    if (!m) {
                        U.warning("DM 选择发言者失败，请重试"), u.setCurrentUIState("ai_loop_paused"), await r.updateSessionInDB();
                        break;
                    }
                    const f = u.findParticipantName(m.nextSpeakerId);
                    x.addHistoryItem({
                        id: _(),
                        type: "gc_select_speaker",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            nextSpeakerId: m.nextSpeakerId,
                            nextSpeakerName: f,
                            reason: m.reason
                        },
                        hidden: !0
                    }), u.setCurrentSpeaker(m.nextSpeakerId), u.setCurrentPhase("character_speak"), await r.updateSessionInDB();
                    const v = Ie(d, x);
                    await n(c, v, "gc_character_message", {
                        characterId: m.nextSpeakerId,
                        characterName: f
                    }), u.incrementAfterAISpeaks(m.nextSpeakerId), await r.saveNewContextItemsToDB(d.id, x.getHistoryItems()), await r.updateSessionInDB(), await new Promise((S)=>setTimeout(S, 50));
                }
            } catch (r) {
                console.error("[GroupChat] AI 循环错误:", r);
                const d = w.sessionManager;
                d && d.setCurrentUIState("ai_loop_paused");
                try {
                    await w.updateSessionInDB();
                } catch  {}
                U.error("LLM 调用失败，请检查配置", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>a({
                                to: "/config/llm"
                            })
                    }
                });
            } finally{
                t.current = !1;
            }
        }, [
            s,
            n,
            a
        ]), p = C.useCallback(async (c)=>{
            const r = w, { currentSession: d, contextManager: u, sessionManager: x } = r;
            d && u && x && (u.addHistoryItem({
                id: _(),
                type: "gc_user_message",
                idx: 0,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: c,
                    userName: d.modeConfig.userName || "我"
                }
            }), x.resetCounterAfterPlayerSpeaks(), await r.saveNewContextItemsToDB(d.id, u.getHistoryItems()), await r.updateSessionInDB(), t.current || o());
        }, [
            o
        ]), i = C.useCallback(async ()=>{
            const c = w, { sessionManager: r } = c;
            r && (r.resetAIAutoSpeakCounter(), await c.updateSessionInDB(), t.current || o());
        }, [
            o
        ]), h = C.useCallback(async ()=>{
            const c = w, { sessionManager: r } = c;
            r && (r.setCurrentPhase("dm_select_speaker"), r.setCurrentUIState("ai_loop_running"), r.resetAIAutoSpeakCounter(), await c.updateSessionInDB(), await new Promise((d)=>setTimeout(d, 50)), o());
        }, [
            o
        ]);
        return {
            sendPlayerMessage: p,
            continueAILoop: i,
            startChat: h,
            isRunningRef: t
        };
    }
    const ke = J([
        "dm_select_speaker",
        "character_speak",
        "waiting_for_player"
    ]), je = J([
        "idle",
        "ai_loop_running",
        "ai_loop_paused"
    ]), O = {
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
    }, ye = L({
        id: g().describe("角色 ID"),
        name: g().describe("角色名称"),
        description: g().describe("角色描述"),
        avatar: g().optional().describe("角色头像"),
        systemPrompt: g().describe("角色扮演指引"),
        personality: g().optional().describe("角色性格概述"),
        firstMessage: g().optional().describe("开场问候语")
    }), _e = L({
        topic: g().optional().describe("群聊话题/场景"),
        participantSnapshots: le(ye).describe("参与的 AI 角色快照列表"),
        userName: g().optional().describe("玩家显示名称"),
        dmSystemPrompt: g().optional().describe("DM 调度提示词"),
        maxAIAutoSpeakCount: A().optional().default(5).describe("AI 自主发言最大数量，达到后暂停等待玩家")
    }), Ae = L({
        currentPhase: ke.describe("AI 循环当前阶段"),
        currentUIState: je.describe("当前 UI 状态"),
        currentSpeakerId: g().describe("当前发言者 ID"),
        messageCount: A().describe("总消息数"),
        speakCounts: ue(g(), A()).describe("每个角色的发言次数"),
        aiAutoSpeakCounter: A().default(0).describe("AI 自主发言计数器，玩家发言时重置")
    });
    te.extend({
        mode: me("group-chat").describe("模式"),
        modeConfig: _e.describe("群聊模式配置"),
        modeState: Ae.describe("群聊模式状态")
    });
    function X(s) {
        if (!s) return "";
        const t = new Date(s), a = new Date, n = t.getHours().toString().padStart(2, "0"), o = t.getMinutes().toString().padStart(2, "0");
        return t.toDateString() === a.toDateString() ? `${n}:${o}` : `${t.getMonth() + 1}/${t.getDate()} ${n}:${o}`;
    }
    let Me, z, De;
    st = (s)=>{
        const t = F(), [a, n] = C.useState(""), [o, p] = C.useState(!1), i = Z(w), { data: h = [] } = ee((l)=>l.from({
                s: se
            })), c = h.find((l)=>l.id === s.sessionId);
        C.useEffect(()=>{
            let l = !1;
            if (!c) return;
            if (w.currentSession?.id === c.id && w.contextManager) {
                p(!0);
                return;
            }
            return (async ()=>{
                try {
                    const b = await ae.createSessionDB(c.id).getContextItems();
                    if (l) return;
                    w.loadSession(c, {
                        historyItems: b,
                        processingItem: void 0
                    }), p(!0);
                } catch (N) {
                    console.error("[GroupChat] Load session error", N);
                }
            })(), ()=>{
                l = !0;
            };
        }, [
            c?.id,
            c
        ]);
        const { sendPlayerMessage: r, continueAILoop: d, startChat: u, isRunningRef: x } = Ne();
        if (!(c && o)) return e.jsxs("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
            children: [
                e.jsx("div", {
                    className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center",
                    children: e.jsx(pe, {
                        className: "w-6 h-6 opacity-20"
                    })
                }),
                e.jsx("p", {
                    className: "text-xs font-medium tracking-widest uppercase opacity-50",
                    children: "加载群聊..."
                })
            ]
        });
        const m = i.currentSession?.modeState?.currentUIState || "idle", f = O[m] || O.idle, v = i.currentSession?.modeConfig?.participantSnapshots?.find((l)=>l.id === i.currentSession?.modeState?.currentSpeakerId), S = async ()=>{
            if (!a.trim()) return;
            const l = a;
            n(""), await r(l);
        }, k = async ()=>{
            x.current || await u();
        }, M = async ()=>{
            x.current || await d();
        }, Q = ()=>t({
                to: "/plaza"
            }), Y = i.contextManager?.state.processingItem?.id;
        return e.jsxs("div", {
            className: "flex flex-row h-full overflow-hidden bg-background",
            children: [
                e.jsxs("div", {
                    className: "flex flex-col grow min-w-0 h-full relative",
                    children: [
                        e.jsxs("div", {
                            className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10",
                            children: [
                                e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        e.jsx("div", {
                                            className: "w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shadow-sm",
                                            children: e.jsx(R, {
                                                className: "w-5 h-5 text-violet-600"
                                            })
                                        }),
                                        e.jsxs("div", {
                                            className: "flex flex-col",
                                            children: [
                                                e.jsxs("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        e.jsx("span", {
                                                            className: "font-bold text-sm tracking-tight",
                                                            children: i.currentSession?.modeConfig?.topic || "群聊"
                                                        }),
                                                        e.jsxs(y, {
                                                            variant: "outline",
                                                            className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-violet-500/5 text-violet-600 border-violet-500/10",
                                                            children: [
                                                                i.currentSession?.modeConfig?.participantSnapshots?.length || 0,
                                                                " 人"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                e.jsx("span", {
                                                    className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide",
                                                    children: v && m === "ai_loop_running" ? `${v.name} 正在输入...` : f.label
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        m !== "idle" && e.jsxs("span", {
                                            className: "text-[9px] text-muted-foreground/50 font-mono",
                                            children: [
                                                "AI ",
                                                i.currentSession?.modeState?.aiAutoSpeakCounter || 0,
                                                "/",
                                                i.currentSession?.modeConfig?.maxAIAutoSpeakCount ?? 5
                                            ]
                                        }),
                                        e.jsxs(y, {
                                            variant: "secondary",
                                            className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50",
                                            children: [
                                                e.jsx("span", {
                                                    className: P("w-1.5 h-1.5 rounded-full", m === "ai_loop_running" ? "bg-violet-500 animate-pulse" : m === "ai_loop_paused" ? "bg-amber-500" : "bg-muted-foreground/30")
                                                }),
                                                "群聊"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        e.jsx(re, {
                            className: "flex grow",
                            children: e.jsx("div", {
                                className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-6",
                                children: (()=>{
                                    const l = (i.contextManager?.state.historyItems || []).filter((b)=>!b.hidden), I = i.contextManager?.state.processingItem;
                                    if (m === "idle") {
                                        const b = l.length === 0 ? "开始群聊" : "继续群聊";
                                        return e.jsxs("div", {
                                            className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                                            children: [
                                                e.jsx("div", {
                                                    className: "w-24 h-24 rounded-4xl bg-violet-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-violet-500/10 ring-8 ring-violet-500/5",
                                                    children: e.jsx(R, {
                                                        className: "w-10 h-10 text-violet-500 drop-shadow-sm"
                                                    })
                                                }),
                                                e.jsx("h2", {
                                                    className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                                                    children: i.currentSession?.modeConfig?.topic || "群聊"
                                                }),
                                                e.jsxs("p", {
                                                    className: "text-muted-foreground/80 font-medium tracking-wider mb-6 max-w-md text-center leading-relaxed text-sm",
                                                    children: [
                                                        "与 ",
                                                        i.currentSession?.modeConfig?.participantSnapshots?.map((D)=>D.name).join("、"),
                                                        " 一起聊天"
                                                    ]
                                                }),
                                                e.jsxs(j, {
                                                    type: "button",
                                                    size: "lg",
                                                    className: "h-14 px-10 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-violet-500/25 shadow-violet-500/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90",
                                                    onClick: k,
                                                    children: [
                                                        e.jsx(xe, {
                                                            className: "w-5 h-5 mr-3"
                                                        }),
                                                        b
                                                    ]
                                                })
                                            ]
                                        });
                                    }
                                    const N = [
                                        ...l
                                    ];
                                    return I && !I.hidden && !l.some((b)=>b.id === I.id) && N.push(I), N.map((b, D)=>e.jsx(Me, {
                                            item: b,
                                            participants: i.currentSession?.modeConfig?.participantSnapshots || [],
                                            userName: i.currentSession?.modeConfig?.userName || "我",
                                            isStreaming: b.id === Y
                                        }, `[${D}]${b.id}`));
                                })()
                            })
                        }),
                        m !== "idle" && e.jsxs("div", {
                            className: "p-4 md:p-6 shrink-0 bg-background",
                            children: [
                                e.jsxs("div", {
                                    className: "max-w-3xl mx-auto relative group",
                                    children: [
                                        e.jsx(ie, {
                                            value: a,
                                            onChange: (l)=>n(l.target.value),
                                            placeholder: f.placeholder,
                                            className: "min-h-20 max-h-40 pr-28 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-violet-500/20 focus-visible:bg-background transition-all",
                                            onKeyDown: (l)=>{
                                                l.key === "Enter" && !l.shiftKey && (l.preventDefault(), S());
                                            }
                                        }),
                                        e.jsxs("div", {
                                            className: "absolute right-3 bottom-3 flex gap-2",
                                            children: [
                                                e.jsx(j, {
                                                    type: "button",
                                                    size: "icon",
                                                    variant: "ghost",
                                                    className: P("h-10 w-10 rounded-xl text-muted-foreground hover:text-violet-600", m === "ai_loop_paused" && "text-amber-500 animate-pulse"),
                                                    disabled: m === "ai_loop_running",
                                                    onClick: M,
                                                    title: "让 AI 继续对话（重置计数器）",
                                                    children: e.jsx(he, {
                                                        className: "w-4 h-4"
                                                    })
                                                }),
                                                e.jsx(j, {
                                                    type: "button",
                                                    size: "icon",
                                                    className: "h-10 w-10 rounded-xl shadow-lg hover:shadow-violet-500/20 transition-all",
                                                    disabled: !a.trim(),
                                                    onClick: S,
                                                    children: e.jsx(ge, {
                                                        className: "w-4 h-4"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40",
                                    children: [
                                        e.jsx("div", {
                                            className: "text-[9px] font-bold tracking-widest uppercase",
                                            children: "GROUP CHAT"
                                        }),
                                        e.jsx("div", {
                                            className: "text-[9px] font-medium",
                                            children: "Shift + Enter 换行 · ⏩ 让 AI 继续"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                e.jsxs("div", {
                    className: "w-70 h-full overflow-y-auto bg-muted/10 border-l p-6 space-y-6 shrink-0 hidden lg:block scrollbar-none",
                    children: [
                        e.jsxs("div", {
                            className: "space-y-4",
                            children: [
                                e.jsxs("div", {
                                    className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                                    children: [
                                        e.jsx(B, {
                                            className: "w-3.5 h-3.5 text-violet-500"
                                        }),
                                        "群聊成员"
                                    ]
                                }),
                                e.jsx("div", {
                                    className: "p-3 rounded-xl border bg-background/40 border-muted/30",
                                    children: e.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            e.jsx("div", {
                                                className: "w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600",
                                                children: e.jsx(B, {
                                                    className: "w-4 h-4"
                                                })
                                            }),
                                            e.jsx("div", {
                                                className: "grow min-w-0",
                                                children: e.jsxs("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        e.jsx("span", {
                                                            className: "text-sm font-bold truncate",
                                                            children: i.currentSession?.modeConfig?.userName || "我"
                                                        }),
                                                        e.jsx(y, {
                                                            variant: "outline",
                                                            className: "text-[8px] px-1 h-3.5 bg-blue-500/10 text-blue-600 border-blue-500/20",
                                                            children: "玩家"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                e.jsx("div", {
                                    className: "space-y-2",
                                    children: i.currentSession?.modeConfig?.participantSnapshots?.map((l)=>{
                                        const I = l.id === i.currentSession?.modeState?.currentSpeakerId && m === "ai_loop_running", N = i.currentSession?.modeState?.speakCounts?.[l.id] || 0;
                                        return e.jsx("div", {
                                            className: P("p-3 rounded-xl border transition-all duration-300", I ? "bg-violet-500/5 border-violet-500/30 shadow-sm shadow-violet-500/10" : "bg-background/40 border-muted/30"),
                                            children: e.jsxs("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    e.jsx(V, {
                                                        character: l,
                                                        size: "xs",
                                                        shape: "rounded"
                                                    }),
                                                    e.jsxs("div", {
                                                        className: "grow min-w-0",
                                                        children: [
                                                            e.jsxs("div", {
                                                                className: "flex items-center gap-2 mb-0.5",
                                                                children: [
                                                                    e.jsx("span", {
                                                                        className: "text-sm font-bold truncate",
                                                                        children: l.name
                                                                    }),
                                                                    I && e.jsx(y, {
                                                                        variant: "outline",
                                                                        className: "text-[8px] px-1 h-3.5 bg-violet-500/10 text-violet-600 border-violet-500/20",
                                                                        children: "发言中"
                                                                    })
                                                                ]
                                                            }),
                                                            e.jsxs("div", {
                                                                className: "text-[10px] text-muted-foreground/60 font-medium",
                                                                children: [
                                                                    "发言 ×",
                                                                    N
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, l.id);
                                    })
                                })
                            ]
                        }),
                        e.jsx("div", {
                            className: "space-y-3 pt-4",
                            children: e.jsxs(j, {
                                type: "button",
                                variant: "outline",
                                className: "w-full h-10 rounded-xl border-dashed border-2 hover:border-violet-500/50 hover:bg-violet-500/5 gap-2",
                                onClick: Q,
                                children: [
                                    e.jsx(fe, {
                                        className: "w-4 h-4"
                                    }),
                                    e.jsx("span", {
                                        className: "font-bold tracking-wider text-sm",
                                        children: "退出群聊"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    };
    Me = ({ item: s, participants: t, userName: a, isStreaming: n })=>{
        switch(s.type){
            case "gc_character_message":
                return e.jsx(z, {
                    item: s,
                    participants: t,
                    isStreaming: n
                });
            case "gc_user_message":
                return e.jsx(De, {
                    item: s,
                    userName: a
                });
            case "gc_select_speaker":
                return null;
            default:
                return s.data?.content ? e.jsx(z, {
                    item: s,
                    participants: t,
                    isStreaming: n
                }) : null;
        }
    };
    z = ({ item: s, participants: t, isStreaming: a })=>{
        const n = s.data, o = t.find((h)=>h.id === n.characterId), p = n.characterName || o?.name || "角色", i = a ? "..." : X(s.timestamp);
        return e.jsxs("div", {
            className: "flex gap-4 group animate-in fade-in slide-in-from-left-2 duration-300",
            children: [
                e.jsx("div", {
                    className: "shrink-0",
                    children: e.jsx(V, {
                        character: o,
                        size: "sm",
                        shape: "rounded"
                    })
                }),
                e.jsxs("div", {
                    className: "space-y-1 grow pt-0.5 min-w-0",
                    children: [
                        e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                                e.jsx("span", {
                                    className: "text-[10px] font-black tracking-[0.15em] text-violet-600/60 uppercase",
                                    children: p
                                }),
                                e.jsx("span", {
                                    className: "text-[9px] text-muted-foreground/40 font-medium tabular-nums",
                                    children: i
                                })
                            ]
                        }),
                        e.jsx("div", {
                            className: "text-[15px] leading-relaxed text-foreground/85 whitespace-pre-wrap",
                            children: n.content || ""
                        })
                    ]
                })
            ]
        });
    };
    De = ({ item: s, userName: t })=>{
        const a = s.data, n = X(s.timestamp);
        return e.jsxs("div", {
            className: "flex gap-4 group animate-in fade-in slide-in-from-right-2 duration-300",
            children: [
                e.jsx("div", {
                    className: "w-9 h-9 rounded-xl bg-blue-500/5 flex items-center justify-center shrink-0 border border-blue-500/10",
                    children: e.jsx(B, {
                        className: "w-4.5 h-4.5 text-blue-600"
                    })
                }),
                e.jsxs("div", {
                    className: "space-y-1 grow pt-0.5 min-w-0",
                    children: [
                        e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                                e.jsx("span", {
                                    className: "text-[10px] font-black tracking-[0.15em] text-blue-600/60 uppercase",
                                    children: a.userName || t
                                }),
                                e.jsx("span", {
                                    className: "text-[9px] text-muted-foreground/40 font-medium tabular-nums",
                                    children: n
                                })
                            ]
                        }),
                        e.jsx("div", {
                            className: "text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap",
                            children: a.content || ""
                        })
                    ]
                })
            ]
        });
    };
});
export { st as SessionMainForGroupChat, __tla };
