const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-DKnNNmTP.js","assets/@tanstack-D67abzz0.js","assets/react-CAuF6Uwp.js","assets/vendor-R_RbF-Qb.js","assets/formatting-DFtRXkW1.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-CZ_H1TYX.js","assets/zod-D7Re9cnc.js"])))=>i.map(i=>d[i]);
import { ak as Q, a5 as X, aH as Se, r as w, t as K, u as Ce, j as n } from "./react-CAuF6Uwp.js";
import { f as oe, i as Ne } from "./@tanstack-D67abzz0.js";
import { h as ke, S as De, m as je } from "./db-master-DKnNNmTP.js";
import { s as we } from "./db-CPOLtxAM.js";
import { _ as ee, __tla as __tla_0 } from "./index-C4wlxMXN.js";
import { C as Ie, A as Me } from "./AutoScrollDownArea-hJ97JLYP.js";
import { n as P } from "./id-BY9c7rfI.js";
import { S as ve } from "./session-manager.class-BRPwaTjg.js";
import { B as v } from "./button-B6v19V-K.js";
import { T as Pe } from "./textarea-CFS4_TcP.js";
import { B as F } from "./badge-CR9zO-CQ.js";
import { u as $e, a as Te } from "./global-llm-config.store-BSRZEgc6.js";
import { o as $, n as N, s as _, _ as J, b as ie, a as Re, r as Le, l as Ee } from "./zod-D7Re9cnc.js";
import { c as k } from "./shadcn-utils-Cnr6N47i.js";
import { S as Ue } from "./switch-BFRi9ePD.js";
import { C as ce } from "./CharacterAvatar-yPJ36Fh6.js";
import { as as V, s as W, aw as Ae, ax as He, a1 as Y, ad as Fe, o as Be, ae as Oe, av as Ge, f as ze, ac as de, ay as qe, az as Je, t as Xe } from "./icons-Cmb87C8b.js";
import "./vendor-R_RbF-Qb.js";
import "./formatting-DFtRXkW1.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-CZ_H1TYX.js";
import "./es-toolkit-9bjl2JfA.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-CPcsbTWB.js";
let Zt;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const le = [
        "力量",
        "敏捷",
        "体质",
        "智力",
        "感知",
        "魅力"
    ], Ke = {
        力量: "力量",
        str: "力量",
        strength: "力量",
        敏捷: "敏捷",
        dex: "敏捷",
        dexterity: "敏捷",
        灵巧: "敏捷",
        体质: "体质",
        con: "体质",
        constitution: "体质",
        耐力: "体质",
        智力: "智力",
        int: "智力",
        intelligence: "智力",
        学识: "智力",
        感知: "感知",
        wis: "感知",
        wisdom: "感知",
        洞察: "感知",
        察觉: "感知",
        魅力: "魅力",
        cha: "魅力",
        charisma: "魅力",
        交涉: "魅力"
    };
    function me(a) {
        return Math.floor((a - 10) / 2);
    }
    function te(a, t) {
        const e = Math.floor(Math.random() * 20) + 1, s = e + t;
        return {
            naturalRoll: e,
            total: s,
            modifier: t,
            isSuccess: s >= a
        };
    }
    function Ve(a, t) {
        const e = he(a.attribute), s = e ? t[e] : void 0;
        if (typeof s != "number") return console.warn("[DndUtils] 检定属性无效，按 +0 修正处理", {
            rawAttribute: a.attribute,
            normalizedAttribute: e,
            availableAttributes: Object.keys(t)
        }), te(a.dc, 0);
        const r = me(s);
        return te(a.dc, r);
    }
    function We(a) {
        try {
            const t = a.match(/```(?:json)?\s*\n?([\s\S]*?)```/), e = t ? t[1].trim() : a.trim(), s = e.indexOf("{"), r = e.lastIndexOf("}") + 1;
            if (s < 0 || r <= s) return console.warn("[DndUtils] 检定决策解析失败：未找到 JSON 块", a.slice(0, 200)), null;
            const o = JSON.parse(e.slice(s, r));
            if (o.none === !0 || o.none === "true") return {
                needsCheck: !1
            };
            const i = o.playerId || o.player_id || o.角色ID || o.执行者ID, l = o.attribute || o.属性 || o.检定维度, d = typeof i == "string" ? i.trim() : "", f = he(l), g = Number(o.dc || o.DC || o.目标数值 || o.难度 || 0);
            return d && f && g > 0 ? {
                needsCheck: !0,
                checkSpec: {
                    intent: o.intent || o.意图 || o.reason || o.具体意图 || "",
                    type: o.type || "attribute",
                    attribute: f,
                    dc: g,
                    playerId: d
                }
            } : (f || console.warn("[DndUtils] 检定属性解析失败，原始值:", l), console.warn("[DndUtils] 检定决策 JSON 字段不完整:", o), null);
        } catch (t) {
            return console.warn("[DndUtils] 检定决策解析异常:", t, a.slice(0, 200)), null;
        }
    }
    function Ye(a) {
        try {
            const t = a.indexOf("{"), e = a.lastIndexOf("}") + 1;
            if (t < 0 || e <= t) return null;
            const s = JSON.parse(a.slice(t, e)), r = s.nextPlayerId || s.指定的玩家ID;
            return r ? {
                nextPlayerId: r,
                reason: s.reason || s.原因 || ""
            } : null;
        } catch  {
            return null;
        }
    }
    function Ze(a) {
        const t = a.replace(/<[^>]*$/, ""), e = [], s = /<\/?([a-zA-Z]\w*)[^>]*>/g;
        let r;
        for(; (r = s.exec(t)) !== null;){
            const i = r[1].toLowerCase();
            r[0].startsWith("</") ? e.length > 0 && e.at(-1) === i && e.pop() : e.push(i);
        }
        let o = t;
        for(; e.length > 0;){
            const i = e.pop();
            o += `</${i}>`;
        }
        return o;
    }
    function Qe(a, t) {
        let e = a;
        return t.userName && (e = e.replace(/\{\{user\}\}/gi, t.userName), e = e.replace(/<USER>/gi, t.userName)), t.charName && (e = e.replace(/\{\{char\}\}/gi, t.charName), e = e.replace(/<BOT>/gi, t.charName)), e;
    }
    const et = /<think>([\s\S]*?)<\/think>/, tt = /<speak>([\s\S]*?)<\/speak>/, nt = /<action>([\s\S]*?)<\/action>/;
    function ue(a) {
        const t = Ze(a), e = t.match(et)?.[1]?.trim(), s = t.match(tt)?.[1]?.trim(), r = t.match(nt)?.[1]?.trim(), o = t.replace(/<\/?[a-zA-Z]\w*[^>]*>/g, "").trim();
        return {
            think: e,
            speak: s,
            action: r,
            rawText: o
        };
    }
    function B(a) {
        switch(a){
            case "narrative":
                return '【玩法模式：叙事优先】。请专注于史诗感的描述和角色情感，尽量减少不必要的频繁检定。只有在关键转折点才要求检定，且检定失败也应以"代价高昂的成功"或开启新剧情的方式处理。';
            case "hardcore":
                return "【玩法模式：硬核挑战】。请严格执行 DND 5e 规则。战斗必须凶险，检定必须频繁且严格。资源匮乏，失败可能导致严重的后果甚至死亡。";
            case "solo":
                return "【玩法模式：单人冒险】。优化互动节奏，确保唯一的玩家角色是故事的中心。DM 应更主动地推动剧情和提供环境互动的线索。";
            default:
                return "【玩法模式：标准模式】。平衡叙事与规则检定。";
        }
    }
    function at(a) {
        return le.includes(a);
    }
    function ne(a) {
        const t = a.trim().replace(/["'`“”‘’]/g, "").replace(/^[\s:：-]+|[\s:：-]+$/g, "");
        if (!t) return null;
        if (at(t)) return t;
        const e = Ke[t.toLowerCase()];
        if (e) return e;
        const s = le.filter((r)=>t.includes(r));
        return s.length === 1 ? s[0] : null;
    }
    function he(a) {
        if (typeof a != "string") return null;
        const t = a.trim();
        if (!t) return null;
        const e = t.replace(/[（(][^）)]*[）)]/g, ""), s = ne(e);
        return s || (t.split(/[|/、,，;；或]/).map((o)=>ne(o)).filter((o)=>o !== null)[0] ?? null);
    }
    function O(a) {
        return a.modeConfig.worldSnapshot;
    }
    function T(a) {
        return a.modeConfig.playerCharacterSnapshots;
    }
    function st(a, t) {
        return a.modeConfig.playerCharacterSnapshots.find((e)=>e.id === t);
    }
    function L(a, t) {
        return a.map((e)=>{
            const s = Object.entries(e.attributes).map(([o, i])=>`${o}:${i}(${me(i)})`).join(", "), r = t[e.id] || 0;
            return `- ${e.name} (ID: ${e.id}): ${s} (累计行动: ${r}次)`;
        }).join(`
`);
    }
    function G(a) {
        return a.map((t)=>`- ${t.name} (ID: ${t.id}): ${t.systemPrompt}`).join(`
`);
    }
    function z(a, t, e = 15) {
        const s = T(t);
        return a.getFlatHistoryItems(e).filter((r)=>!r.hidden && !r.deleted).map((r)=>{
            const { type: o, data: i } = r;
            if (o === "dnd_dm_intro" || o === "dnd_dm_narrate") return `[DM]: ${i.content}`;
            if (o === "dnd_player_action") return `[${i.characterName || s.find((d)=>d.id === i.characterId)?.name || i.characterId}]: ${i.content}`;
            if (o === "participant_message") return i.isDM ? `[DM]: ${i.content}` : `[${i.name || "玩家"}]: ${i.content}`;
            if (o === "dnd_roll_result") {
                const l = i.checkSpec, d = i.checkResult;
                return `[系统检定] ${l.intent}: 1d20(${d.naturalRoll}) + ${l.attribute}修正(${d.modifier}) = ${d.total} vs DC:${l.dc} → ${d.isSuccess ? "成功" : "失败"}`;
            }
            return o === "dnd_system_notice" ? `[系统]: ${i.content}` : null;
        }).filter(Boolean).join(`
`);
    }
    function rt(a) {
        return a.modeConfig.playerCharacterSnapshots.find((e)=>e.isHumanControlled)?.name || "冒险者";
    }
    function R(a, t, e) {
        const s = rt(t), r = e || t.modeConfig.dmName || "DM";
        return a.map((o)=>({
                ...o,
                content: Qe(o.content, {
                    userName: s,
                    charName: r
                })
            }));
    }
    function ot(a, t) {
        const e = O(a), s = T(a), r = a.modeState.turnCounts, o = a.modeConfig.gameMode, i = `你是 DM (地下城主)。请为这个 DND 冒险创建引人入胜的开场介绍，设置世界背景和初始场景。
${B(o)}
${e.systemPrompt}
${e.globalKnowledge ? `
【世界观补充】
${e.globalKnowledge}` : ""}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, l = [
            "【游戏配置】",
            `DM: ${a.modeConfig.dmName || "DM"}`,
            `世界: ${e.name} — ${e.description}`,
            `参与角色:
${G(s)}`,
            `【初始数值状态】
${L(s, r)}`
        ].join(`

`);
        return R([
            {
                role: "system",
                content: i
            },
            {
                role: "user",
                content: l
            }
        ], a);
    }
    function it(a, t) {
        const e = O(a), s = T(a), r = a.modeState.turnCounts, o = a.modeConfig.gameMode, i = a.modeState.historySummary, l = `你是 DM。请根据当前剧情进展描写场景，推进故事。
不需要在此阶段指定角色或提出检定，只需描写。
${B(o)}
${e.systemPrompt}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, d = z(t, a, 10), f = [
            "【游戏配置】",
            `世界: ${e.name}`,
            `角色:
${G(s)}`,
            i ? `【剧情提要】
${i}` : "",
            d ? `【近期历史记录】
${d}` : "",
            `【数值状态】
${L(s, r)}`
        ].filter(Boolean).join(`

`);
        return R([
            {
                role: "system",
                content: l
            },
            {
                role: "user",
                content: f
            }
        ], a);
    }
    function ct(a, t) {
        const e = T(a), s = a.modeState.turnCounts, r = a.modeConfig.gameMode, o = e.map((m)=>s[m.id] || 0), l = (o.length > 0 ? Math.min(...o) : 0) + 2, d = e.filter((m)=>(s[m.id] || 0) <= l).sort((m, h)=>(s[m.id] || 0) - (s[h.id] || 0)), f = `你是 DM。请根据刚才的叙事，从候选名单中指定【下一个】行动的角色。
${B(r)}
【公平性原则】：为了确保每个玩家都有平等的参与机会，你【必须】仅从以下提供的名单中选择。请优先考虑行动次数最少的角色。
【严格要求】：只需输出一个 JSON 块，不要包含任何叙事文字。
\`\`\`json
{ "reason": "原因", "nextPlayerId": "角色ID" }
\`\`\`
候选名单（仅限已行动次数较少的角色）：
${d.map((m)=>`- ${m.name} (ID: ${m.id}, 已行动: ${s[m.id] || 0}次)`).join(`
`)}`, g = t.getFlatHistoryItems(5);
        let p;
        for(let m = g.length - 1; m >= 0; m -= 1){
            const h = g[m];
            if (h.type === "dnd_dm_narrate" || h.type === "dnd_dm_intro") {
                p = h;
                break;
            }
        }
        const x = p ? `【当前场景】
${p.data.content}` : `【初始场景】
冒险开始。`, b = `【所有角色行动统计】
${e.map((m)=>`${m.name}: ${s[m.id] || 0} 次`).join(`
`)}`;
        return R([
            {
                role: "system",
                content: f
            },
            {
                role: "user",
                content: [
                    x,
                    b
                ].join(`

`)
            }
        ], a);
    }
    function dt(a, t) {
        const e = a.modeState.turnCounts, s = a.modeState.currentTurnCharacterId, r = st(a, s), o = a.modeState.historySummary, i = a.modeConfig.gameMode;
        if (!r) return [];
        const l = `你是玩家 ${r.name} (${r.id})。${r.systemPrompt}
请基于当前场景和 DM 的引导决定你的行动。
${B(i)}
要求输出必须包含 XML 标签：<think>内心独白</think><speak>口头表达</speak><action>具体行动</action>。`, d = z(t, a, 8), f = L([
            r
        ], e), g = [
            `【你的角色信息】
${r.systemPrompt}`,
            o ? `【剧情提要】
${o}` : "",
            d ? `【当前场景】
${d}` : "",
            `【你的数值状态】
${f}`
        ].filter(Boolean).join(`

`);
        return R([
            {
                role: "system",
                content: l
            },
            {
                role: "user",
                content: g
            }
        ], a, r.name);
    }
    function lt(a, t) {
        const e = O(a), s = T(a), r = a.modeState.turnCounts, o = a.modeState.historySummary, i = `你是 DM。请评价刚才玩家的行动，并描写其初步反应。
不要在此阶段输出检定 JSON，也不要描述最终结果。
${e.systemPrompt}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, l = z(t, a, 10), d = [
            `【游戏配置】
世界: ${e.name}
角色:
${G(s)}`,
            o ? `【剧情提要】
${o}` : "",
            l ? `【近期历史记录】
${l}` : "",
            `【数值状态】
${L(s, r)}`
        ].filter(Boolean).join(`

`);
        return R([
            {
                role: "system",
                content: i
            },
            {
                role: "user",
                content: d
            }
        ], a);
    }
    function mt(a, t) {
        const e = O(a), s = T(a), r = a.modeState.turnCounts, o = a.modeState.historySummary, i = a.modeConfig.gameMode, l = `你是 DM。基于玩家刚才的行动，决定是否需要进行 DND 5e 检定。
${B(i)}
如果需要，只输出 JSON 块：
\`\`\`json
{
  "intent": "具体意图",
  "type": "attribute",
  "attribute": "力量",
  "dc": 10到25之间的数字,
  "playerId": "执行者ID"
}
\`\`\`
其中 attribute 只能填写一个值，可选：力量、敏捷、体质、智力、感知、魅力。
如果不需要检定（直接成功/失败），输出：
\`\`\`json
{ "none": true }
\`\`\`
【严格要求】：只输出 JSON，不要任何叙事。`, d = z(t, a, 10), f = [
            `【游戏配置】
世界: ${e.name}
角色:
${G(s)}`,
            o ? `【剧情提要】
${o}` : "",
            d ? `【近期历史记录】
${d}` : "",
            `【角色数值状态】
${L(s, r)}`
        ].filter(Boolean).join(`

`);
        return R([
            {
                role: "system",
                content: l
            },
            {
                role: "user",
                content: f
            }
        ], a);
    }
    function ut(a, t) {
        const e = O(a), s = T(a), r = a.modeState.turnCounts, o = a.modeState.historySummary, i = a.modeState.lastCheckResult, l = a.modeState.lastCheckSpec, d = `你是 DM。检定结果已出。请根据结果描述后果，并引导剧情。
${e.systemPrompt}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, f = z(t, a, 10), g = i && l ? `【检定结果】
意图: ${l.intent}
执行者: ${s.find((x)=>x.id === l.playerId)?.name || l.playerId}
骰子结果: ${i.total} (1d20:${i.naturalRoll} + 修正:${i.modifier}) vs DC:${l.dc}
结论: ${i.isSuccess ? "成功" : "失败"}
请根据此结果进行针对性的后果描述。` : "", p = [
            `【游戏配置】
世界: ${e.name}
角色:
${G(s)}`,
            o ? `【剧情提要】
${o}` : "",
            f ? `【近期历史记录】
${f}` : "",
            g,
            `【数值状态】
${L(s, r)}`
        ].filter(Boolean).join(`

`);
        return R([
            {
                role: "system",
                content: d
            },
            {
                role: "user",
                content: p
            }
        ], a);
    }
    class ht extends ve {
        constructor(t){
            super(t), this.session = t;
        }
        getCurrentPhase() {
            return this.session.modeState.currentPhase;
        }
        getCurrentUIState() {
            return this.session.modeState.currentUIState;
        }
        getActualCurrentPhase(t) {
            const e = t.getProcessingItem();
            if (e?.type) {
                const r = {
                    dnd_dm_intro: "dm_game_intro",
                    dnd_dm_narrate: "dm_narrate",
                    dnd_assign_player: "dm_assign_player",
                    dnd_player_action: "player_action",
                    dnd_check_decision: "dm_check_decision",
                    dnd_roll_result: "fn_roll_check"
                };
                if (e.type === "participant_message" && e.data?.isDM) return "dm_check_eval";
                const o = r[e.type];
                if (o) return o;
            }
            const s = t.getFlatHistoryItems();
            for(let r = s.length - 1; r >= 0; r--){
                const o = s[r];
                if (!o?.deleted) switch(o.type){
                    case "dnd_dm_intro":
                        return "dm_assign_player";
                    case "dnd_dm_narrate":
                        {
                            const i = o.data?.phase;
                            return i === "dm_check_eval" ? "dm_check_decision" : "dm_assign_player";
                        }
                    case "dnd_assign_player":
                        return "player_action";
                    case "dnd_player_action":
                        return "dm_check_eval";
                    case "dnd_check_decision":
                        return o.data?.needsCheck ? "fn_roll_check" : "dm_narrate";
                    case "dnd_roll_result":
                        return "dm_tell_result";
                    case "dnd_system_notice":
                        continue;
                    default:
                        continue;
                }
            }
            return this.session.modeState.currentPhase;
        }
        getActualCurrentUIState(t) {
            const e = t.getProcessingItem();
            if (e?.type) {
                const s = {
                    dnd_dm_intro: "dm_game_intro_running",
                    dnd_dm_narrate: "dm_narrate_running",
                    dnd_assign_player: "dm_assign_player_running",
                    dnd_player_action: "player_action_running",
                    dnd_check_decision: "dm_check_decision_running",
                    dnd_roll_result: "fn_roll_check_running"
                };
                if (e.type === "participant_message" && e.data?.isDM) return "dm_check_eval_running";
                const r = s[e.type];
                if (r) return r;
            }
            return this.session.modeState.currentUIState ? this.session.modeState.currentUIState : this.getReadyUIStateForPhase(this.getActualCurrentPhase(t));
        }
        getReadyUIStateForPhase(t) {
            return `${t}_ready`;
        }
        getRunningUIStateForPhase(t) {
            return `${t}_running`;
        }
        getDoneUIStateForPhase(t) {
            return `${t}_done`;
        }
        enterNextState(t) {
            console.log(`[DndManager] Transition: ${this.session.modeState.currentPhase} -> ${t}`), this.session.modeState.currentPhase = t, this.session.updatedAt = Date.now();
        }
        setCurrentUIState(t) {
            this.session.modeState.currentUIState = t, this.session.updatedAt = Date.now();
        }
        setCurrentTurn(t) {
            this.session.modeState.currentTurnCharacterId = t, this.session.updatedAt = Date.now();
        }
        incrementTurnCount(t) {
            this.session.modeState.turnCounts[t] || (this.session.modeState.turnCounts[t] = 0), this.session.modeState.turnCounts[t]++, this.session.updatedAt = Date.now();
        }
        incrementRound() {
            this.session.modeState.currentRound++, this.session.updatedAt = Date.now();
        }
        async executeCurrentStateLogic(t) {
            switch(this.session.modeState.currentPhase){
                case "dm_game_intro":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_game_intro")), {
                        type: "LLM_CALL",
                        messages: ot(this.session),
                        callbackPhase: "dm_game_intro",
                        llmRequestType: "dnd_dm_intro"
                    };
                case "dm_narrate":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate")), {
                        type: "LLM_CALL",
                        messages: it(this.session, t),
                        callbackPhase: "dm_narrate",
                        llmRequestType: "dnd_dm_narrate",
                        dataExtra: {
                            phase: "dm_narrate"
                        }
                    };
                case "dm_assign_player":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_assign_player")), {
                        type: "LLM_CALL",
                        messages: ct(this.session, t),
                        callbackPhase: "dm_assign_player",
                        llmRequestType: "dnd_assign_player"
                    };
                case "player_action":
                    return this.handlePlayerAction(t);
                case "dm_check_eval":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_eval")), {
                        type: "LLM_CALL",
                        messages: lt(this.session, t),
                        callbackPhase: "dm_check_eval",
                        llmRequestType: "dnd_dm_narrate",
                        dataExtra: {
                            phase: "dm_check_eval"
                        }
                    };
                case "dm_check_decision":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_decision")), {
                        type: "LLM_CALL",
                        messages: mt(this.session, t),
                        callbackPhase: "dm_check_decision",
                        llmRequestType: "dnd_check_decision"
                    };
                case "fn_roll_check":
                    return this.handleRollCheck(t);
                case "dm_tell_result":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_tell_result")), {
                        type: "LLM_CALL",
                        messages: ut(this.session, t),
                        callbackPhase: "dm_tell_result",
                        llmRequestType: "dnd_dm_narrate",
                        dataExtra: {
                            phase: "dm_tell_result"
                        }
                    };
                default:
                    return {
                        type: "STOP"
                    };
            }
        }
        handlePlayerAction(t) {
            const e = this.session.modeState.currentTurnCharacterId, s = this.session.modeConfig.playerCharacterSnapshots.find((r)=>r.id === e);
            return s ? s.isHumanControlled ? (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), {
                type: "WAIT_FOR_INPUT"
            }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), {
                type: "LLM_CALL",
                messages: dt(this.session, t),
                callbackPhase: "player_action",
                llmRequestType: "dnd_player_action",
                dataExtra: {
                    characterId: s.id,
                    characterName: s.name,
                    isHumanControlled: !1
                }
            }) : (console.error(`[DndManager] 角色 ${e} 不存在`), this.enterNextState("dm_assign_player"), {
                type: "STATE_CHANGE"
            });
        }
        handleRollCheck(t) {
            this.setCurrentUIState(this.getRunningUIStateForPhase("fn_roll_check"));
            const e = this.session.modeState.lastCheckSpec;
            if (!e) return console.error("[DndManager] 检定规范缺失，跳过检定"), this.enterNextState("dm_narrate"), {
                type: "STATE_CHANGE"
            };
            const s = this.session.modeConfig.playerCharacterSnapshots.find((o)=>o.id === e.playerId);
            if (!s) return console.error(`[DndManager] 检定角色 ${e.playerId} 不存在`), this.enterNextState("dm_narrate"), {
                type: "STATE_CHANGE"
            };
            const r = Ve(e, s.attributes);
            return this.session.modeState.lastCheckResult = r, t.addHistoryItem({
                id: P(),
                type: "dnd_roll_result",
                idx: 0,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    checkSpec: e,
                    checkResult: r,
                    characterName: s.name,
                    attributeName: e.attribute
                }
            }), this.setCurrentUIState(this.getDoneUIStateForPhase("fn_roll_check")), this.enterNextState("dm_tell_result"), {
                type: "STATE_CHANGE"
            };
        }
        handleLLMResponse(t, e, s) {
            switch(t){
                case "dm_game_intro":
                    this.setCurrentUIState(this.getDoneUIStateForPhase("dm_game_intro")), this.enterNextState("dm_assign_player");
                    break;
                case "dm_narrate":
                    this.setCurrentUIState(this.getDoneUIStateForPhase("dm_narrate")), this.enterNextState("dm_assign_player");
                    break;
                case "dm_assign_player":
                    {
                        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_assign_player"));
                        const r = Ye(e);
                        if (r) {
                            const o = this.session.modeConfig.playerCharacterSnapshots.find((i)=>i.id === r.nextPlayerId);
                            s.addHistoryItem({
                                id: P(),
                                type: "dnd_assign_player",
                                idx: 0,
                                orderRef: 0,
                                timestamp: Date.now(),
                                data: {
                                    nextPlayerId: r.nextPlayerId,
                                    nextPlayerName: o?.name,
                                    reason: r.reason,
                                    isHumanControlled: o?.isHumanControlled
                                },
                                hidden: !0
                            }), s.addHistoryItem({
                                id: P(),
                                type: "dnd_system_notice",
                                idx: 0,
                                orderRef: 0,
                                timestamp: Date.now(),
                                data: {
                                    content: `轮到 ${o?.name || r.nextPlayerId} 行动`,
                                    noticeType: "turn_start",
                                    characterId: r.nextPlayerId,
                                    characterName: o?.name
                                }
                            }), this.setCurrentTurn(r.nextPlayerId), this.enterNextState("player_action");
                        } else console.warn("[DndManager] 解析 DM 指定角色失败，重试"), this.enterNextState("dm_assign_player");
                        break;
                    }
                case "player_action":
                    {
                        this.setCurrentUIState(this.getDoneUIStateForPhase("player_action"));
                        const r = this.session.modeState.currentTurnCharacterId;
                        this.incrementTurnCount(r), this.enterNextState("dm_check_eval");
                        break;
                    }
                case "dm_check_eval":
                    this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_eval")), this.enterNextState("dm_check_decision");
                    break;
                case "dm_check_decision":
                    {
                        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_decision"));
                        const r = We(e);
                        s.addHistoryItem({
                            id: P(),
                            type: "dnd_check_decision",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                needsCheck: r?.needsCheck ?? !1,
                                checkSpec: r?.needsCheck ? r.checkSpec : void 0,
                                rawContent: e
                            },
                            hidden: !0
                        }), r?.needsCheck && "checkSpec" in r ? (console.log("[DndManager] 检定决策：需要检定", r.checkSpec), this.session.modeState.lastCheckSpec = r.checkSpec, this.enterNextState("fn_roll_check")) : r === null ? (console.warn("[DndManager] 检定决策解析失败，重试 dm_check_decision"), this.enterNextState("dm_check_decision")) : (console.log("[DndManager] 检定决策：无需检定，直接进入叙事"), this.enterNextState("dm_narrate"));
                        break;
                    }
                case "dm_tell_result":
                    this.setCurrentUIState(this.getDoneUIStateForPhase("dm_tell_result")), this.enterNextState("dm_assign_player");
                    break;
                default:
                    console.warn(`[DndManager] 未知的回调阶段: ${t}`);
                    break;
            }
        }
    }
    const u = Q({
        currentSession: null,
        contextManager: null,
        sessionManager: null,
        loadSession (a, t) {
            this.currentSession = a, this.currentSession.modeState.currentUIState = "idle", this.sessionManager = Se(new ht(this.currentSession));
            const e = Q(t || {
                historyItems: [],
                processingItem: void 0
            });
            this.contextManager = new Ie(e);
        },
        setCurrentTurn (a) {
            this.sessionManager && this.sessionManager.setCurrentTurn(a);
        },
        incrementRound () {
            this.sessionManager && this.sessionManager.incrementRound();
        },
        setPhase (a) {
            this.currentSession && (this.currentSession.modeState.currentPhase = a);
        },
        updateCharacterAttributes (a, t) {
            if (!this.currentSession) return;
            const e = this.currentSession.modeConfig.playerCharacterSnapshots.find((s)=>s.id === a);
            e && Object.assign(e.attributes, t);
        },
        toggleCharacterControl (a) {
            if (!this.currentSession) return;
            const t = this.currentSession.modeConfig.playerCharacterSnapshots.find((e)=>e.id === a);
            t && (t.isHumanControlled = !t.isHumanControlled, this.currentSession.updatedAt = Date.now());
        },
        updateCharacterHP (a, t) {
            if (!this.currentSession) return;
            const e = this.currentSession.modeConfig.playerCharacterSnapshots.find((s)=>s.id === a);
            e && (e.currentHP = Math.max(0, Math.min(t, e.maxHP)));
        },
        async saveNewContextItemsToDB (a, t) {
            const { SessionDB: e } = await ee(async ()=>{
                const { SessionDB: o } = await import("./db-master-DKnNNmTP.js").then((i)=>i.v);
                return {
                    SessionDB: o
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), s = new e(a);
            let r;
            try {
                r = X(t);
            } catch  {
                r = JSON.parse(JSON.stringify(t));
            }
            await s.addContextItems(r);
        },
        async updateSessionInDB () {
            if (!this.currentSession) return;
            const { masterDb: a } = await ee(async ()=>{
                const { masterDb: s } = await import("./db-master-DKnNNmTP.js").then((r)=>r.w);
                return {
                    masterDb: s
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), t = X(this.currentSession.modeState), e = X(this.currentSession.modeConfig);
            await a.sessions.update(this.currentSession.id, {
                modeState: t,
                modeConfig: e,
                updatedAt: Date.now()
            });
        }
    });
    function pt() {
        const a = $e((p)=>p.config), t = w.useRef(!1), e = w.useRef(!1), s = oe(), r = async (p, x, b, m, h = {})=>{
            const S = u.contextManager;
            if (!S) return {
                content: ""
            };
            const I = {
                id: P(),
                type: b,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: "",
                    ...h
                }
            };
            S.setProcessingItem(I);
            let E = "";
            return await Te(p, x, [], (U, M)=>{
                m?.(U), E = M;
                const D = S.getProcessingItem();
                D && (D.data.content = M);
            }), S.completeProcessingItem(), {
                content: E
            };
        }, o = async (p, x)=>{
            const b = u.sessionManager, m = u.contextManager;
            if (!(b && m)) return;
            const h = await b.executeCurrentStateLogic(m);
            if (console.log("[DndLoop] Action:", h), h.type === "WAIT_FOR_INPUT" || h.type === "STOP") {
                await u.updateSessionInDB(), t.current = !1;
                return;
            }
            if (h.type === "STATE_CHANGE") {
                if (await u.updateSessionInDB(), e.current) {
                    console.log("[DndLoop] 游戏已暂停（STATE_CHANGE 后）"), t.current = !1;
                    return;
                }
                setTimeout(()=>l(p.id), 0);
                return;
            }
            if (h.type === "LLM_CALL") {
                if (h.callbackPhase) {
                    const I = h.callbackPhase;
                    b.setCurrentUIState(b.getRunningUIStateForPhase(I));
                }
                await u.updateSessionInDB();
                const S = await r(x, h.messages.map((I)=>({
                        ...I,
                        id: P()
                    })), h.llmRequestType, void 0, h.dataExtra);
                if (await u.saveNewContextItemsToDB(p.id, m.getHistoryItems()), i(h, S.content, p.id), await u.updateSessionInDB(), e.current) {
                    console.log("[DndLoop] 游戏已暂停（LLM_CALL 完成后）"), t.current = !1;
                    return;
                }
                setTimeout(()=>l(p.id), 0);
            }
        }, i = (p, x, b)=>{
            const m = u.sessionManager, h = u.contextManager;
            m && h && m.handleLLMResponse(p.callbackPhase, x, h);
        }, l = async (p)=>{
            const x = u.currentSession;
            if (!x || x.id !== p) return;
            const b = {
                ...a
            };
            try {
                t.current = !0, await o(x, b);
            } catch (m) {
                console.error("[DndLoop] Critical Error:", m), K.error("LLM 调用失败，请前往 LLM 配置页面进行配置", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>s({
                                to: "/config/llm"
                            })
                    }
                }), t.current = !1;
            }
        }, d = w.useCallback(async (p)=>{
            if (t.current) return;
            const x = u.currentSession, b = u.contextManager, m = u.sessionManager;
            if (!(x && b && m)) {
                console.warn("[DndLoop] Session or Managers not ready");
                return;
            }
            if (p) {
                if (m.getCurrentPhase() !== "player_action") {
                    K.warning("当前并非该角色的行动回合");
                    return;
                }
                const h = x.modeState.currentTurnCharacterId, S = x.modeConfig.playerCharacterSnapshots.find((I)=>I.id === h);
                if (!S?.isHumanControlled) {
                    K.warning("当前角色由 AI 控制，无法手动输入");
                    return;
                }
                m.setCurrentUIState(m.getRunningUIStateForPhase("player_action")), b.addHistoryItem({
                    id: P(),
                    type: "dnd_player_action",
                    idx: 0,
                    orderRef: 0,
                    timestamp: Date.now(),
                    data: {
                        content: p,
                        characterId: h,
                        characterName: S.name,
                        isHumanControlled: !0
                    }
                }), await u.saveNewContextItemsToDB(x.id, b.getHistoryItems()), m.incrementTurnCount(h), m.setCurrentUIState(m.getDoneUIStateForPhase("player_action")), m.enterNextState("dm_check_eval"), await u.updateSessionInDB();
            }
            await l(x.id);
        }, [
            a
        ]), f = w.useCallback(()=>{
            e.current = !0, console.log("[DndLoop] 暂停请求已发出");
        }, []), g = w.useCallback(()=>{
            if (!e.current) return;
            e.current = !1, console.log("[DndLoop] 恢复游戏");
            const p = u.currentSession;
            p && !t.current && l(p.id);
        }, [
            a
        ]);
        return {
            nextStep: d,
            isCallingRef: t,
            isPausedRef: e,
            pauseGame: f,
            resumeGame: g
        };
    }
    const xt = $({
        力量: N().describe("力量属性值"),
        敏捷: N().describe("敏捷属性值"),
        体质: N().describe("体质属性值"),
        智力: N().describe("智力属性值"),
        感知: N().describe("感知属性值"),
        魅力: N().describe("魅力属性值")
    }), gt = $({
        intent: _().describe("检定意图"),
        type: J([
            "attribute",
            "saving",
            "attack"
        ]).describe("检定类型"),
        attribute: _().describe("检定维度"),
        dc: N().describe("目标数值 (DC)"),
        playerId: _().describe("执行检定的角色 ID")
    }), ft = $({
        naturalRoll: N().describe("骰子原值"),
        total: N().describe("总值 (原值 + 修正)"),
        modifier: N().describe("属性修正"),
        isSuccess: ie().describe("是否成功")
    }), _t = J([
        "dm_game_intro",
        "dm_narrate",
        "dm_assign_player",
        "player_action",
        "dm_check_eval",
        "dm_check_decision",
        "fn_roll_check",
        "dm_tell_result"
    ]), bt = J([
        "idle",
        "dm_game_intro_ready",
        "dm_game_intro_running",
        "dm_game_intro_done",
        "dm_narrate_ready",
        "dm_narrate_running",
        "dm_narrate_done",
        "dm_assign_player_ready",
        "dm_assign_player_running",
        "dm_assign_player_done",
        "player_action_ready",
        "player_action_running",
        "player_action_done",
        "dm_check_eval_ready",
        "dm_check_eval_running",
        "dm_check_eval_done",
        "dm_check_decision_ready",
        "dm_check_decision_running",
        "dm_check_decision_done",
        "fn_roll_check_ready",
        "fn_roll_check_running",
        "fn_roll_check_done",
        "dm_tell_result_ready",
        "dm_tell_result_running",
        "dm_tell_result_done"
    ]), ae = {
        idle: {
            label: "空闲",
            placeholder: "请先点击开始或继续...",
            inputEnabled: !1
        },
        dm_game_intro_ready: {
            label: "DM开场（准备）",
            placeholder: "请等待 DM 开场介绍...",
            inputEnabled: !1
        },
        dm_game_intro_running: {
            label: "DM开场（进行中）",
            placeholder: "DM 正在介绍世界...",
            inputEnabled: !1
        },
        dm_game_intro_done: {
            label: "DM开场（完成）",
            placeholder: "DM 开场介绍完成...",
            inputEnabled: !1
        },
        dm_narrate_ready: {
            label: "DM叙事（准备）",
            placeholder: "请等待 DM 叙事...",
            inputEnabled: !1
        },
        dm_narrate_running: {
            label: "DM叙事（进行中）",
            placeholder: "DM 正在描写场景...",
            inputEnabled: !1
        },
        dm_narrate_done: {
            label: "DM叙事（完成）",
            placeholder: "DM 叙事完成...",
            inputEnabled: !1
        },
        dm_assign_player_ready: {
            label: "指定角色（准备）",
            placeholder: "DM 正在决定谁行动...",
            inputEnabled: !1
        },
        dm_assign_player_running: {
            label: "指定角色（进行中）",
            placeholder: "DM 正在指定角色...",
            inputEnabled: !1
        },
        dm_assign_player_done: {
            label: "指定角色（完成）",
            placeholder: "角色已被指定...",
            inputEnabled: !1
        },
        player_action_ready: {
            label: "角色行动（准备）",
            placeholder: "轮到你行动了，描述你的行动...",
            inputEnabled: !0
        },
        player_action_running: {
            label: "角色行动（进行中）",
            placeholder: "角色正在行动...",
            inputEnabled: !1
        },
        player_action_done: {
            label: "角色行动（完成）",
            placeholder: "行动完成...",
            inputEnabled: !1
        },
        dm_check_eval_ready: {
            label: "DM评价（准备）",
            placeholder: "DM 正在评价行动...",
            inputEnabled: !1
        },
        dm_check_eval_running: {
            label: "DM评价（进行中）",
            placeholder: "DM 正在评价行动...",
            inputEnabled: !1
        },
        dm_check_eval_done: {
            label: "DM评价（完成）",
            placeholder: "DM 评价完成...",
            inputEnabled: !1
        },
        dm_check_decision_ready: {
            label: "检定决策（准备）",
            placeholder: "DM 正在判定是否需要检定...",
            inputEnabled: !1
        },
        dm_check_decision_running: {
            label: "检定决策（进行中）",
            placeholder: "DM 正在判定...",
            inputEnabled: !1
        },
        dm_check_decision_done: {
            label: "检定决策（完成）",
            placeholder: "检定决策完成...",
            inputEnabled: !1
        },
        fn_roll_check_ready: {
            label: "掷骰检定（准备）",
            placeholder: "准备掷骰...",
            inputEnabled: !1
        },
        fn_roll_check_running: {
            label: "掷骰检定（进行中）",
            placeholder: "正在掷骰...",
            inputEnabled: !1
        },
        fn_roll_check_done: {
            label: "掷骰检定（完成）",
            placeholder: "掷骰完成...",
            inputEnabled: !1
        },
        dm_tell_result_ready: {
            label: "DM描述结果（准备）",
            placeholder: "DM 正在描述检定结果...",
            inputEnabled: !1
        },
        dm_tell_result_running: {
            label: "DM描述结果（进行中）",
            placeholder: "DM 正在描述结果...",
            inputEnabled: !1
        },
        dm_tell_result_done: {
            label: "DM描述结果（完成）",
            placeholder: "DM 描述完成...",
            inputEnabled: !1
        }
    }, yt = J([
        "standard",
        "narrative",
        "hardcore",
        "solo"
    ]), St = $({
        id: _().describe("角色 ID"),
        name: _().describe("角色名称"),
        description: _().describe("角色描述"),
        avatar: _().optional().describe("角色头像"),
        systemPrompt: _().describe("角色扮演指引"),
        attributes: xt.describe("角色属性"),
        race: _().optional().describe("种族"),
        class: _().optional().describe("职业"),
        currentHP: N().describe("当前生命值"),
        maxHP: N().describe("最大生命值"),
        isHumanControlled: ie().describe("是否由人类控制")
    }), Ct = $({
        name: _().describe("世界名称"),
        description: _().describe("世界描述"),
        systemPrompt: _().describe("核心系统提示词"),
        globalKnowledge: _().optional().describe("世界观补充")
    }), Nt = $({
        worldSnapshot: Ct.describe("世界设定快照"),
        gameMode: yt.describe("玩法模式"),
        playerCharacterSnapshots: Re(St).describe("参与角色快照列表"),
        dmName: _().optional().describe("DM 显示名称")
    }), kt = $({
        currentPhase: _t.describe("当前阶段名称"),
        currentUIState: bt.describe("当前 UI 状态名称"),
        currentTurnCharacterId: _().describe("当前行动角色 ID ('dm' 或角色ID)"),
        currentRound: N().describe("当前回合数"),
        turnCounts: Le(_(), N()).describe("每个角色的行动次数统计"),
        lastCheckSpec: gt.optional().describe("最近一次检定规范"),
        lastCheckResult: ft.optional().describe("最近一次检定结果"),
        historySummary: _().describe("历史摘要")
    });
    ke.extend({
        mode: Ee("dnd").describe("模式"),
        modeConfig: Nt.describe("DnD 模式配置"),
        modeState: kt.describe("DnD 模式状态")
    });
    let Dt, q, se, jt, re;
    Zt = (a)=>{
        const t = oe(), [e, s] = w.useState(""), [r, o] = w.useState(!1), [i, l] = w.useState(!1), d = Ce(u), { data: f = [] } = Ne((c)=>c.from({
                s: De
            })), g = f.find((c)=>c.id === a.sessionId);
        w.useEffect(()=>{
            let c = !1;
            if (!g) return;
            if (u.currentSession?.id === g.id && u.contextManager) {
                l(!0);
                return;
            }
            return (async ()=>{
                try {
                    const y = await we.createSessionDB(g.id).getContextItems();
                    if (c) return;
                    u.loadSession(g, {
                        historyItems: y,
                        processingItem: void 0
                    }), l(!0);
                } catch (j) {
                    console.error("[DnD] Load session error", j);
                }
            })(), ()=>{
                c = !0;
            };
        }, [
            g?.id,
            g
        ]);
        const { nextStep: p, isPausedRef: x, pauseGame: b, resumeGame: m } = pt(), [h, S] = w.useState(!1), I = async ()=>{
            if (r) return;
            const c = u.sessionManager, C = u.contextManager;
            if (c && C) {
                x.current = !1, S(!1), o(!0);
                try {
                    const j = c.getActualCurrentPhase(C);
                    c.enterNextState(j), c.setCurrentUIState(c.getReadyUIStateForPhase(j)), await u.updateSessionInDB(), await p();
                } finally{
                    o(!1);
                }
            }
        };
        if (!(g && i)) return n.jsxs("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
            children: [
                n.jsx("div", {
                    className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center",
                    children: n.jsx(V, {
                        className: "w-6 h-6 opacity-20"
                    })
                }),
                n.jsx("p", {
                    className: "text-xs font-medium tracking-widest uppercase opacity-50",
                    children: "正在构建冒险世界..."
                })
            ]
        });
        const E = async ()=>{
            if (!(!e.trim() || r)) {
                x.current = !1, S(!1), o(!0);
                try {
                    await p(e);
                } finally{
                    o(!1), s("");
                }
            }
        }, U = u.sessionManager && u.contextManager ? u.sessionManager.getActualCurrentUIState(u.contextManager) : d.currentSession?.modeState?.currentUIState || "idle", M = ae[U] || ae.idle, D = d.currentSession?.modeConfig?.playerCharacterSnapshots?.find((c)=>c.id === d.currentSession?.modeState?.currentTurnCharacterId), Z = !!D?.isHumanControlled, A = r || !M.inputEnabled || M.inputEnabled && !Z, pe = ()=>{
            b(), S(!0);
        }, xe = ()=>{
            m(), S(!1);
        }, ge = async (c)=>{
            const C = u.currentSession?.modeConfig.playerCharacterSnapshots.find((ye)=>ye.id === c);
            if (!C) return;
            const j = C.isHumanControlled;
            u.toggleCharacterControl(c), await u.updateSessionInDB();
            const y = c === u.currentSession?.modeState.currentTurnCharacterId, H = u.sessionManager?.getCurrentPhase();
            j && y && H === "player_action" && !r && await p();
        }, fe = ()=>{
            t({
                to: "/plaza"
            });
        }, _e = ()=>{
            console.log("[DnD][Memory Session]", u.currentSession);
        }, be = async ()=>{
            if (!g?.id) return;
            const c = await je.sessions.getTable().get(g.id);
            console.log("[DnD][DB Session]", c);
        };
        return n.jsxs("div", {
            className: "flex flex-row h-full overflow-hidden bg-background",
            children: [
                n.jsxs("div", {
                    className: "flex flex-col grow min-w-0 h-full relative",
                    children: [
                        n.jsxs("div", {
                            className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10",
                            children: [
                                n.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        n.jsx("div", {
                                            className: "w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-sm",
                                            children: n.jsx(W, {
                                                className: "w-5 h-5 text-amber-600"
                                            })
                                        }),
                                        n.jsxs("div", {
                                            className: "flex flex-col",
                                            children: [
                                                n.jsxs("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        n.jsx("span", {
                                                            className: "font-bold text-sm tracking-tight",
                                                            children: d.currentSession?.modeConfig?.worldSnapshot?.name || "DnD 冒险"
                                                        }),
                                                        n.jsxs(F, {
                                                            variant: "outline",
                                                            className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-amber-500/5 text-amber-600 border-amber-500/10",
                                                            children: [
                                                                "R",
                                                                d.currentSession?.modeState?.currentRound || 1
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                n.jsx("span", {
                                                    className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide",
                                                    children: D ? `当前行动: ${D.name} (${D.isHumanControlled ? "玩家" : "AI"})` : "等待开始..."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                n.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        U !== "idle" && (h ? n.jsxs(v, {
                                            type: "button",
                                            variant: "outline",
                                            size: "sm",
                                            className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-green-500/30 text-green-600 hover:bg-green-500/10",
                                            onClick: xe,
                                            children: [
                                                n.jsx(Ae, {
                                                    className: "w-3 h-3"
                                                }),
                                                "继续"
                                            ]
                                        }) : n.jsxs(v, {
                                            type: "button",
                                            variant: "outline",
                                            size: "sm",
                                            className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-amber-500/30 text-amber-600 hover:bg-amber-500/10",
                                            onClick: pe,
                                            children: [
                                                n.jsx(He, {
                                                    className: "w-3 h-3"
                                                }),
                                                "暂停"
                                            ]
                                        })),
                                        n.jsxs(F, {
                                            variant: "secondary",
                                            className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50",
                                            children: [
                                                n.jsx("span", {
                                                    className: k("w-1.5 h-1.5 rounded-full", h ? "bg-amber-400" : "bg-amber-500 animate-pulse")
                                                }),
                                                h ? "已暂停" : "DND"
                                            ]
                                        }),
                                        n.jsx(v, {
                                            type: "button",
                                            variant: "ghost",
                                            size: "sm",
                                            className: "h-6 px-2 text-[10px]",
                                            onClick: _e,
                                            children: "LOG MEM"
                                        }),
                                        n.jsx(v, {
                                            type: "button",
                                            variant: "ghost",
                                            size: "sm",
                                            className: "h-6 px-2 text-[10px]",
                                            onClick: be,
                                            children: "LOG DB"
                                        })
                                    ]
                                })
                            ]
                        }),
                        n.jsx(Me, {
                            className: "flex grow",
                            children: n.jsx("div", {
                                className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-8",
                                children: (()=>{
                                    const c = (d.contextManager?.state.historyItems || []).filter((y)=>!y.hidden), C = d.contextManager?.state.processingItem;
                                    if (U === "idle") {
                                        const y = c.length === 0 ? "开始冒险" : "继续冒险";
                                        return n.jsxs("div", {
                                            className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                                            children: [
                                                n.jsx("div", {
                                                    className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500",
                                                    children: n.jsx(W, {
                                                        className: "w-10 h-10 text-amber-500 drop-shadow-sm"
                                                    })
                                                }),
                                                n.jsx("h2", {
                                                    className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                                                    children: d.currentSession?.modeConfig?.worldSnapshot?.name || "DnD 冒险"
                                                }),
                                                n.jsx("p", {
                                                    className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm",
                                                    children: d.currentSession?.modeConfig?.worldSnapshot?.description || "一段全新的冒险旅程即将展开，准备好掷出命运的骰子了吗？"
                                                }),
                                                n.jsxs(v, {
                                                    type: "button",
                                                    size: "lg",
                                                    className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-amber-500/25 shadow-amber-500/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90",
                                                    onClick: I,
                                                    disabled: r,
                                                    children: [
                                                        r ? n.jsx(V, {
                                                            className: "w-5 h-5 animate-spin mr-3"
                                                        }) : n.jsx(Y, {
                                                            className: "w-5 h-5 mr-3"
                                                        }),
                                                        y
                                                    ]
                                                }),
                                                n.jsxs("div", {
                                                    className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest",
                                                    children: [
                                                        n.jsxs("span", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                n.jsx(Fe, {
                                                                    className: "w-3 h-3"
                                                                }),
                                                                " D20 检定"
                                                            ]
                                                        }),
                                                        n.jsxs("span", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                n.jsx(Be, {
                                                                    className: "w-3 h-3"
                                                                }),
                                                                " 多人冒险"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        });
                                    }
                                    const j = [
                                        ...c
                                    ];
                                    return C && !C.hidden && !c.some((y)=>y.id === C.id) && j.push(C), j.map((y, H)=>n.jsx(Dt, {
                                            item: y,
                                            participants: d.currentSession?.modeConfig?.playerCharacterSnapshots || []
                                        }, `[${H}]${y.id}`));
                                })()
                            })
                        }),
                        n.jsxs("div", {
                            className: "p-4 md:p-6 shrink-0 bg-background",
                            children: [
                                n.jsxs("div", {
                                    className: "max-w-3xl mx-auto relative group",
                                    children: [
                                        n.jsx(Pe, {
                                            value: e,
                                            onChange: (c)=>s(c.target.value),
                                            placeholder: A ? M.inputEnabled && !Z ? `${D?.name || "角色"} 由 AI 控制，等待自动行动...` : M.placeholder : `作为 ${D?.name || "角色"}，描述你的行动...`,
                                            disabled: A,
                                            className: k("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-amber-500/20 focus-visible:bg-background transition-all", A && "opacity-50 cursor-not-allowed"),
                                            onKeyDown: (c)=>{
                                                c.key === "Enter" && !c.shiftKey && (c.preventDefault(), E());
                                            }
                                        }),
                                        n.jsx(v, {
                                            type: "button",
                                            size: "icon",
                                            className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all",
                                            disabled: !e.trim() || A,
                                            onClick: E,
                                            children: r ? n.jsx(V, {
                                                className: "w-4 h-4 animate-spin"
                                            }) : n.jsx(Oe, {
                                                className: "w-4 h-4"
                                            })
                                        })
                                    ]
                                }),
                                n.jsxs("div", {
                                    className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40",
                                    children: [
                                        n.jsx("div", {
                                            className: "text-[9px] font-bold tracking-widest uppercase",
                                            children: D ? `${D.name} 的回合 (${D.isHumanControlled ? "玩家操作" : "AI 自动"})` : "ADVENTURE LOG"
                                        }),
                                        n.jsx("div", {
                                            className: "text-[9px] font-medium",
                                            children: A ? "等待中..." : "Shift + Enter 换行"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                n.jsxs("div", {
                    className: "w-[320px] h-full overflow-y-auto bg-muted/10 border-l p-6 space-y-8 shrink-0 hidden lg:block scrollbar-none",
                    children: [
                        n.jsxs("div", {
                            className: "space-y-4",
                            children: [
                                n.jsxs("div", {
                                    className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                                    children: [
                                        n.jsx(Ge, {
                                            className: "w-3.5 h-3.5 text-amber-500"
                                        }),
                                        "冒险状态"
                                    ]
                                }),
                                n.jsxs("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        n.jsxs("div", {
                                            className: "bg-background/40 p-3 rounded-xl border border-muted/30",
                                            children: [
                                                n.jsx("div", {
                                                    className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1",
                                                    children: "回合"
                                                }),
                                                n.jsx("div", {
                                                    className: "text-xl font-mono font-bold tracking-tight text-foreground/90",
                                                    children: d.currentSession?.modeState?.currentRound || 1
                                                })
                                            ]
                                        }),
                                        n.jsxs("div", {
                                            className: "bg-background/40 p-3 rounded-xl border border-muted/30",
                                            children: [
                                                n.jsx("div", {
                                                    className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1",
                                                    children: "模式"
                                                }),
                                                n.jsx("div", {
                                                    className: "text-sm font-bold tracking-tight text-foreground/90 capitalize",
                                                    children: d.currentSession?.modeConfig?.gameMode || "standard"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        n.jsxs("div", {
                            className: "space-y-4",
                            children: [
                                n.jsxs("div", {
                                    className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                                    children: [
                                        n.jsx(ze, {
                                            className: "w-3.5 h-3.5 text-amber-500"
                                        }),
                                        "冒险者"
                                    ]
                                }),
                                n.jsx("div", {
                                    className: "space-y-3",
                                    children: d.currentSession?.modeConfig?.playerCharacterSnapshots?.map((c)=>{
                                        const C = c.id === d.currentSession?.modeState?.currentTurnCharacterId, j = d.currentSession?.modeState?.turnCounts?.[c.id] || 0;
                                        return n.jsxs("div", {
                                            className: k("p-4 rounded-xl border transition-all duration-300", C ? "bg-amber-500/5 border-amber-500/30 shadow-sm shadow-amber-500/10" : "bg-background/40 border-muted/30"),
                                            children: [
                                                n.jsxs("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        n.jsx(ce, {
                                                            character: c,
                                                            size: "xs",
                                                            shape: "rounded"
                                                        }),
                                                        n.jsxs("div", {
                                                            className: "grow min-w-0",
                                                            children: [
                                                                n.jsxs("div", {
                                                                    className: "flex items-center gap-2 mb-1",
                                                                    children: [
                                                                        n.jsx("span", {
                                                                            className: "text-sm font-bold tracking-tight truncate",
                                                                            children: c.name
                                                                        }),
                                                                        n.jsx(F, {
                                                                            variant: "outline",
                                                                            className: k("text-[8px] px-1 h-3.5", c.isHumanControlled ? "bg-blue-500/10 text-blue-600 border-blue-500/20" : "bg-muted/50 text-muted-foreground border-muted/30"),
                                                                            children: c.isHumanControlled ? "玩家" : "AI"
                                                                        }),
                                                                        C && n.jsx(F, {
                                                                            variant: "outline",
                                                                            className: "text-[8px] px-1 h-3.5 bg-amber-500/10 text-amber-600 border-amber-500/20",
                                                                            children: "行动中"
                                                                        })
                                                                    ]
                                                                }),
                                                                n.jsxs("div", {
                                                                    className: "text-[10px] text-muted-foreground/60 font-medium",
                                                                    children: [
                                                                        c.race,
                                                                        " · ",
                                                                        c.class,
                                                                        " · 行动 ×",
                                                                        j
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                n.jsxs("div", {
                                                    className: "mt-3 flex items-center justify-between px-1",
                                                    children: [
                                                        n.jsxs("div", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                n.jsx(de, {
                                                                    className: k("w-3 h-3 transition-colors", c.isHumanControlled ? "text-muted-foreground/30" : "text-foreground/70")
                                                                }),
                                                                n.jsx("span", {
                                                                    className: k("text-[9px] font-bold uppercase tracking-wider transition-colors", c.isHumanControlled ? "text-muted-foreground/20" : "text-foreground/50"),
                                                                    children: "AI"
                                                                })
                                                            ]
                                                        }),
                                                        n.jsx(Ue, {
                                                            checked: c.isHumanControlled,
                                                            onCheckedChange: ()=>ge(c.id),
                                                            className: "data-[state=checked]:bg-blue-500 h-4 w-7 [&>span]:h-3 [&>span]:w-3"
                                                        }),
                                                        n.jsxs("div", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                n.jsx("span", {
                                                                    className: k("text-[9px] font-bold uppercase tracking-wider transition-colors", c.isHumanControlled ? "text-foreground/50" : "text-muted-foreground/20"),
                                                                    children: "玩家"
                                                                }),
                                                                n.jsx(qe, {
                                                                    className: k("w-3 h-3 transition-colors", c.isHumanControlled ? "text-blue-500" : "text-muted-foreground/30")
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                n.jsxs("div", {
                                                    className: "mt-3 space-y-1",
                                                    children: [
                                                        n.jsxs("div", {
                                                            className: "flex justify-between text-[9px] font-bold text-muted-foreground/60",
                                                            children: [
                                                                n.jsxs("span", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        n.jsx(Je, {
                                                                            className: "w-2.5 h-2.5 text-red-400"
                                                                        }),
                                                                        "HP"
                                                                    ]
                                                                }),
                                                                n.jsxs("span", {
                                                                    children: [
                                                                        c.currentHP,
                                                                        "/",
                                                                        c.maxHP
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        n.jsx("div", {
                                                            className: "h-1.5 bg-muted/50 rounded-full overflow-hidden",
                                                            children: n.jsx("div", {
                                                                className: k("h-full rounded-full transition-all duration-500", c.currentHP / c.maxHP > .5 ? "bg-green-500" : c.currentHP / c.maxHP > .25 ? "bg-amber-500" : "bg-red-500"),
                                                                style: {
                                                                    width: `${Math.max(0, c.currentHP / c.maxHP * 100)}%`
                                                                }
                                                            })
                                                        })
                                                    ]
                                                }),
                                                n.jsx("div", {
                                                    className: "mt-3 grid grid-cols-3 gap-1.5",
                                                    children: Object.entries(c.attributes || {}).map(([y, H])=>n.jsxs("div", {
                                                            className: "text-center py-1 px-1 rounded bg-muted/30 border border-muted/20",
                                                            children: [
                                                                n.jsx("div", {
                                                                    className: "text-[8px] font-bold uppercase text-muted-foreground/50",
                                                                    children: y.slice(0, 3)
                                                                }),
                                                                n.jsx("div", {
                                                                    className: "text-xs font-mono font-bold",
                                                                    children: H
                                                                })
                                                            ]
                                                        }, y))
                                                })
                                            ]
                                        }, c.id);
                                    })
                                })
                            ]
                        }),
                        n.jsx("div", {
                            className: "space-y-3",
                            children: n.jsxs(v, {
                                type: "button",
                                variant: "outline",
                                className: "w-full h-10 rounded-xl border-dashed border-2 hover:border-amber-500/50 hover:bg-amber-500/5 gap-2",
                                onClick: fe,
                                children: [
                                    n.jsx(Xe, {
                                        className: "w-4 h-4"
                                    }),
                                    n.jsx("span", {
                                        className: "font-bold tracking-wider text-sm",
                                        children: "退出冒险"
                                    })
                                ]
                            })
                        }),
                        n.jsxs("div", {
                            className: "pt-6 opacity-30",
                            children: [
                                n.jsx("div", {
                                    className: "h-px bg-linear-to-r from-transparent via-muted-foreground/50 to-transparent"
                                }),
                                n.jsx("p", {
                                    className: "text-[9px] text-center mt-4 font-bold tracking-[0.3em] uppercase",
                                    children: "DnD Engine v1.0.0"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    Dt = ({ item: a, participants: t })=>{
        switch(a.type){
            case "dnd_dm_intro":
                return n.jsx(q, {
                    content: a.data.content,
                    title: "开场叙事"
                });
            case "dnd_dm_narrate":
                return n.jsx(q, {
                    content: a.data.content
                });
            case "dnd_player_action":
                return n.jsx(se, {
                    item: a,
                    participants: t
                });
            case "dnd_roll_result":
                return n.jsx(jt, {
                    item: a
                });
            case "dnd_system_notice":
                return n.jsx(re, {
                    item: a
                });
            case "dnd_assign_player":
                return null;
            case "dnd_check_decision":
                return null;
            case "participant_message":
                return a.data?.isDM ? n.jsx(q, {
                    content: a.data.content
                }) : n.jsx(se, {
                    item: a,
                    participants: t
                });
            case "system_notification":
                return n.jsx(re, {
                    item: a
                });
            default:
                return a.data?.content ? n.jsx(q, {
                    content: a.data.content,
                    title: "消息"
                }) : null;
        }
    };
    q = ({ content: a, title: t = "Dungeon Master" })=>{
        const e = ue(a);
        return n.jsxs("div", {
            className: "flex gap-5 group animate-in fade-in slide-in-from-left-2 duration-500",
            children: [
                n.jsxs("div", {
                    className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden",
                    children: [
                        n.jsx("div", {
                            className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                        }),
                        n.jsx(de, {
                            className: "w-5 h-5 text-amber-600 relative z-10"
                        })
                    ]
                }),
                n.jsxs("div", {
                    className: "space-y-2 grow pt-1 min-w-0",
                    children: [
                        n.jsxs("div", {
                            className: "text-[10px] font-black tracking-[0.2em] text-amber-600/60 flex items-center gap-2 uppercase",
                            children: [
                                n.jsx(Y, {
                                    className: "w-3 h-3"
                                }),
                                t
                            ]
                        }),
                        n.jsxs("div", {
                            className: "text-[15px] leading-relaxed text-foreground/80 whitespace-pre-wrap font-serif",
                            children: [
                                e.think && n.jsxs("div", {
                                    className: "text-xs italic text-muted-foreground/50 mb-3 pl-3 border-l-2 border-muted/30",
                                    children: [
                                        n.jsx("span", {
                                            className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1",
                                            children: "DM 思考"
                                        }),
                                        e.think
                                    ]
                                }),
                                e.speak && n.jsxs("div", {
                                    className: "mb-2",
                                    children: [
                                        n.jsx("span", {
                                            className: "text-amber-600/80 font-bold",
                                            children: "“"
                                        }),
                                        n.jsx("span", {
                                            className: "italic",
                                            children: e.speak
                                        }),
                                        n.jsx("span", {
                                            className: "text-amber-600/80 font-bold",
                                            children: "”"
                                        })
                                    ]
                                }),
                                e.action && n.jsx("div", {
                                    className: "text-foreground/70",
                                    children: e.action
                                }),
                                !(e.think || e.speak || e.action) && e.rawText
                            ]
                        })
                    ]
                })
            ]
        });
    };
    se = ({ item: a, participants: t })=>{
        const e = a.data, s = ue(e.content || ""), r = e.characterId || e.participantId, o = t?.find((d)=>d.id === r), i = o?.name || e.characterName || e.name || "冒险者", l = o?.isHumanControlled ?? (e.isHumanControlled || e.isUser);
        return n.jsxs("div", {
            className: "flex gap-5 group animate-in fade-in slide-in-from-right-2 duration-500",
            children: [
                n.jsx("div", {
                    className: "shrink-0",
                    children: n.jsx(ce, {
                        character: o,
                        size: "sm",
                        shape: "square"
                    })
                }),
                n.jsxs("div", {
                    className: "space-y-2 grow pt-1 min-w-0",
                    children: [
                        n.jsxs("div", {
                            className: k("text-[10px] font-black tracking-[0.2em] flex items-center gap-2 uppercase", l ? "text-blue-500/60" : "text-violet-500/60"),
                            children: [
                                n.jsx(W, {
                                    className: "w-3 h-3"
                                }),
                                i,
                                l && n.jsx(F, {
                                    variant: "outline",
                                    className: "text-[8px] px-1 h-3 bg-blue-500/5 text-blue-500 border-blue-500/10",
                                    children: "玩家"
                                })
                            ]
                        }),
                        n.jsxs("div", {
                            className: "text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap",
                            children: [
                                s.think && n.jsxs("div", {
                                    className: "text-xs italic text-muted-foreground/50 mb-3 pl-3 border-l-2 border-muted/30",
                                    children: [
                                        n.jsx("span", {
                                            className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1",
                                            children: "内心想法"
                                        }),
                                        s.think
                                    ]
                                }),
                                s.speak && n.jsxs("div", {
                                    className: "mb-2 font-medium",
                                    children: [
                                        "“",
                                        s.speak,
                                        "”"
                                    ]
                                }),
                                s.action && n.jsx("div", {
                                    className: "text-foreground/70",
                                    children: s.action
                                }),
                                !(s.think || s.speak || s.action) && s.rawText
                            ]
                        })
                    ]
                })
            ]
        });
    };
    jt = ({ item: a })=>{
        const t = a.data, e = t.checkResult, s = t.characterName || "角色", r = t.attributeName || "属性";
        if (!e) return null;
        const o = e.isSuccess, i = e.naturalRoll === 20, l = e.naturalRoll === 1;
        return n.jsx("div", {
            className: "flex justify-center my-6 animate-in fade-in zoom-in duration-500",
            children: n.jsxs("div", {
                className: k("inline-flex items-center gap-4 px-6 py-4 rounded-2xl border-2 shadow-lg", o ? "bg-green-500/5 border-green-500/30 shadow-green-500/10" : "bg-red-500/5 border-red-500/30 shadow-red-500/10"),
                children: [
                    n.jsxs("div", {
                        className: k("w-14 h-14 rounded-xl flex items-center justify-center font-mono font-black text-2xl relative", i ? "bg-amber-500/20 text-amber-500 ring-2 ring-amber-500/30" : l ? "bg-red-500/20 text-red-500 ring-2 ring-red-500/30" : o ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"),
                        children: [
                            e.naturalRoll,
                            i && n.jsx(Y, {
                                className: "w-3 h-3 text-amber-500 absolute -top-1 -right-1 animate-pulse"
                            })
                        ]
                    }),
                    n.jsxs("div", {
                        className: "space-y-1",
                        children: [
                            n.jsxs("div", {
                                className: "text-[10px] font-black uppercase tracking-widest text-muted-foreground/60",
                                children: [
                                    s,
                                    " · ",
                                    r,
                                    " 检定"
                                ]
                            }),
                            n.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    n.jsxs("span", {
                                        className: "text-lg font-mono font-bold",
                                        children: [
                                            e.naturalRoll,
                                            e.modifier >= 0 ? "+" : "",
                                            e.modifier,
                                            " = ",
                                            e.total
                                        ]
                                    }),
                                    n.jsxs("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: [
                                            "vs DC ",
                                            t.checkSpec?.dc || "?"
                                        ]
                                    })
                                ]
                            }),
                            n.jsx("div", {
                                className: k("text-xs font-black uppercase tracking-wider", i ? "text-amber-500" : l ? "text-red-500" : o ? "text-green-600" : "text-red-600"),
                                children: i ? "大成功！" : l ? "大失败！" : o ? "检定成功" : "检定失败"
                            })
                        ]
                    })
                ]
            })
        });
    };
    re = ({ item: a })=>{
        const t = a.data, e = t.noticeType;
        return n.jsx("div", {
            className: "flex justify-center my-4",
            children: n.jsxs("div", {
                className: "flex items-center gap-3 px-4 py-1.5 rounded-full bg-muted/30 border border-muted/50 text-muted-foreground shadow-sm",
                children: [
                    n.jsx("span", {
                        className: "w-1 h-1 rounded-full bg-amber-500/40"
                    }),
                    n.jsx("span", {
                        className: "text-[10px] font-bold tracking-widest uppercase",
                        children: e === "turn_start" && t.characterName ? `⚔ ${t.characterName} 的回合` : t.content || "系统通知"
                    }),
                    n.jsx("span", {
                        className: "w-1 h-1 rounded-full bg-amber-500/40"
                    })
                ]
            })
        });
    };
});
export { Zt as SessionMainForDnd, __tla };
