const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-BD5cuqGE.js","assets/@tanstack-DHpjEvx5.js","assets/react-BwrVEnbn.js","assets/vendor-Btzk85e_.js","assets/formatting-Cgd9k2rU.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-C4f2dvgg.js","assets/zod-BOL00Oce.js","assets/analytics-CgY6CsYJ.js","assets/app-configurations-Bm8i7f1O.js","assets/clarity-D1JZhIBn.js","assets/nex-tavern-uuid-BRGLU0IZ.js","assets/id-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { y as Q, a8 as K, aJ as Se, r as S, t as V, u as Ce, j as n } from "./react-BwrVEnbn.js";
import { f as oe, j as ke } from "./@tanstack-DHpjEvx5.js";
import { h as Ne, S as De, m as je } from "./db-master-BD5cuqGE.js";
import { s as Ie } from "./db-CJsO4wQm.js";
import { _ as ee, __tla as __tla_0 } from "./index-CUosL2Px.js";
import { C as we, A as ve } from "./AutoScrollDownArea-DjEl-AZw.js";
import { n as $ } from "./id-BY9c7rfI.js";
import { S as Me } from "./session-manager.class-DXIUTdQf.js";
import { B as P } from "./button-DfQJxXN9.js";
import { T as Pe } from "./textarea-sQNmV-G1.js";
import { B } from "./badge-BTwyrS6y.js";
import { u as $e, g as Te, a as Re } from "./global-llm-config.store-CMShswv9.js";
import { o as T, n as k, s as b, _ as X, c as ie, b as Le, r as Ae, l as Ee } from "./zod-BOL00Oce.js";
import { c as N } from "./shadcn-utils-Cnr6N47i.js";
import { S as Ue } from "./switch-BIbSASbT.js";
import { C as ce } from "./CharacterAvatar-DT8CsUgC.js";
import { b as He, a as Fe } from "./analytics-CgY6CsYJ.js";
import { as as W, v as Y, aA as Be, aB as Oe, a2 as Z, ae as Ge, r as ze, S as Je, av as qe, g as Xe, ad as de, aC as Ke, aD as Ve, ax as We } from "./icons-an9klV8i.js";
import "./vendor-Btzk85e_.js";
import "./formatting-Cgd9k2rU.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C4f2dvgg.js";
import "./es-toolkit-9bjl2JfA.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-CPcsbTWB.js";
import "./app-configurations-Bm8i7f1O.js";
import "./clarity-D1JZhIBn.js";
import "./nex-tavern-uuid-BRGLU0IZ.js";
let rn;
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
    ], Ye = {
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
    function Ze(a, t) {
        const e = he(a.attribute), s = e ? t[e] : void 0;
        if (typeof s != "number") return console.warn("[DndUtils] 检定属性无效，按 +0 修正处理", {
            rawAttribute: a.attribute,
            normalizedAttribute: e,
            availableAttributes: Object.keys(t)
        }), te(a.dc, 0);
        const r = me(s);
        return te(a.dc, r);
    }
    function Qe(a) {
        try {
            const t = a.match(/```(?:json)?\s*\n?([\s\S]*?)```/), e = t ? t[1].trim() : a.trim(), s = e.indexOf("{"), r = e.lastIndexOf("}") + 1;
            if (s < 0 || r <= s) return console.warn("[DndUtils] 检定决策解析失败：未找到 JSON 块", a.slice(0, 200)), null;
            const o = JSON.parse(e.slice(s, r));
            if (o.none === !0 || o.none === "true") return {
                needsCheck: !1
            };
            const i = o.playerId || o.player_id || o.角色ID || o.执行者ID, l = o.attribute || o.属性 || o.检定维度, d = typeof i == "string" ? i.trim() : "", _ = he(l), x = Number(o.dc || o.DC || o.目标数值 || o.难度 || 0);
            return d && _ && x > 0 ? {
                needsCheck: !0,
                checkSpec: {
                    intent: o.intent || o.意图 || o.reason || o.具体意图 || "",
                    type: o.type || "attribute",
                    attribute: _,
                    dc: x,
                    playerId: d
                }
            } : (_ || console.warn("[DndUtils] 检定属性解析失败，原始值:", l), console.warn("[DndUtils] 检定决策 JSON 字段不完整:", o), null);
        } catch (t) {
            return console.warn("[DndUtils] 检定决策解析异常:", t, a.slice(0, 200)), null;
        }
    }
    function et(a) {
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
    function tt(a) {
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
    function nt(a, t) {
        let e = a;
        return t.userName && (e = e.replace(/\{\{user\}\}/gi, t.userName), e = e.replace(/<USER>/gi, t.userName)), t.charName && (e = e.replace(/\{\{char\}\}/gi, t.charName), e = e.replace(/<BOT>/gi, t.charName)), e;
    }
    const at = /<think>([\s\S]*?)<\/think>/, st = /<speak>([\s\S]*?)<\/speak>/, rt = /<action>([\s\S]*?)<\/action>/;
    function ue(a) {
        const t = tt(a), e = t.match(at)?.[1]?.trim(), s = t.match(st)?.[1]?.trim(), r = t.match(rt)?.[1]?.trim(), o = t.replace(/<\/?[a-zA-Z]\w*[^>]*>/g, "").trim();
        return {
            think: e,
            speak: s,
            action: r,
            rawText: o
        };
    }
    function O(a) {
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
    function ot(a) {
        return le.includes(a);
    }
    function ne(a) {
        const t = a.trim().replace(/["'`“”‘’]/g, "").replace(/^[\s:：-]+|[\s:：-]+$/g, "");
        if (!t) return null;
        if (ot(t)) return t;
        const e = Ye[t.toLowerCase()];
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
    function G(a) {
        return a.modeConfig.worldSnapshot;
    }
    function R(a) {
        return a.modeConfig.playerCharacterSnapshots;
    }
    function it(a, t) {
        return a.modeConfig.playerCharacterSnapshots.find((e)=>e.id === t);
    }
    function E(a, t) {
        return a.map((e)=>{
            const s = Object.entries(e.attributes).map(([o, i])=>`${o}:${i}(${me(i)})`).join(", "), r = t[e.id] || 0;
            return `- ${e.name} (ID: ${e.id}): ${s} (累计行动: ${r}次)`;
        }).join(`
`);
    }
    function z(a) {
        return a.map((t)=>`- ${t.name} (ID: ${t.id}): ${t.systemPrompt}`).join(`
`);
    }
    function J(a, t, e = 15) {
        const s = R(t);
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
    function ct(a) {
        return a.modeConfig.playerCharacterSnapshots.find((e)=>e.isHumanControlled)?.name || "冒险者";
    }
    function L(a, t, e) {
        const s = ct(t), r = e || t.modeConfig.dmName || "DM";
        return a.map((o)=>({
                ...o,
                content: nt(o.content, {
                    userName: s,
                    charName: r
                })
            }));
    }
    function dt(a, t) {
        const e = G(a), s = R(a), r = a.modeState.turnCounts, o = a.modeConfig.gameMode, i = `你是 DM (地下城主)。请为这个 DND 冒险创建引人入胜的开场介绍，设置世界背景和初始场景。
${O(o)}
${e.systemPrompt}
${e.globalKnowledge ? `
【世界观补充】
${e.globalKnowledge}` : ""}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, l = [
            "【游戏配置】",
            `DM: ${a.modeConfig.dmName || "DM"}`,
            `世界: ${e.name} — ${e.description}`,
            `参与角色:
${z(s)}`,
            `【初始数值状态】
${E(s, r)}`
        ].join(`

`);
        return L([
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
    function lt(a, t) {
        const e = G(a), s = R(a), r = a.modeState.turnCounts, o = a.modeConfig.gameMode, i = a.modeState.historySummary, l = `你是 DM。请根据当前剧情进展描写场景，推进故事。
不需要在此阶段指定角色或提出检定，只需描写。
${O(o)}
${e.systemPrompt}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, d = J(t, a, 10), _ = [
            "【游戏配置】",
            `世界: ${e.name}`,
            `角色:
${z(s)}`,
            i ? `【剧情提要】
${i}` : "",
            d ? `【近期历史记录】
${d}` : "",
            `【数值状态】
${E(s, r)}`
        ].filter(Boolean).join(`

`);
        return L([
            {
                role: "system",
                content: l
            },
            {
                role: "user",
                content: _
            }
        ], a);
    }
    function mt(a, t) {
        const e = R(a), s = a.modeState.turnCounts, r = a.modeConfig.gameMode, o = e.map((u)=>s[u.id] || 0), l = (o.length > 0 ? Math.min(...o) : 0) + 2, d = e.filter((u)=>(s[u.id] || 0) <= l).sort((u, h)=>(s[u.id] || 0) - (s[h.id] || 0)), _ = `你是 DM。请根据刚才的叙事，从候选名单中指定【下一个】行动的角色。
${O(r)}
【公平性原则】：为了确保每个玩家都有平等的参与机会，你【必须】仅从以下提供的名单中选择。请优先考虑行动次数最少的角色。
【严格要求】：只需输出一个 JSON 块，不要包含任何叙事文字。
\`\`\`json
{ "reason": "原因", "nextPlayerId": "角色ID" }
\`\`\`
候选名单（仅限已行动次数较少的角色）：
${d.map((u)=>`- ${u.name} (ID: ${u.id}, 已行动: ${s[u.id] || 0}次)`).join(`
`)}`, x = t.getFlatHistoryItems(5);
        let I;
        for(let u = x.length - 1; u >= 0; u -= 1){
            const h = x[u];
            if (h.type === "dnd_dm_narrate" || h.type === "dnd_dm_intro") {
                I = h;
                break;
            }
        }
        const p = I ? `【当前场景】
${I.data.content}` : `【初始场景】
冒险开始。`, f = `【所有角色行动统计】
${e.map((u)=>`${u.name}: ${s[u.id] || 0} 次`).join(`
`)}`;
        return L([
            {
                role: "system",
                content: _
            },
            {
                role: "user",
                content: [
                    p,
                    f
                ].join(`

`)
            }
        ], a);
    }
    function ut(a, t) {
        const e = a.modeState.turnCounts, s = a.modeState.currentTurnCharacterId, r = it(a, s), o = a.modeState.historySummary, i = a.modeConfig.gameMode;
        if (!r) return [];
        const l = `你是玩家 ${r.name} (${r.id})。${r.systemPrompt}
请基于当前场景和 DM 的引导决定你的行动。
${O(i)}
要求输出必须包含 XML 标签：<think>内心独白</think><speak>口头表达</speak><action>具体行动</action>。`, d = J(t, a, 8), _ = E([
            r
        ], e), x = [
            `【你的角色信息】
${r.systemPrompt}`,
            o ? `【剧情提要】
${o}` : "",
            d ? `【当前场景】
${d}` : "",
            `【你的数值状态】
${_}`
        ].filter(Boolean).join(`

`);
        return L([
            {
                role: "system",
                content: l
            },
            {
                role: "user",
                content: x
            }
        ], a, r.name);
    }
    function ht(a, t) {
        const e = G(a), s = R(a), r = a.modeState.turnCounts, o = a.modeState.historySummary, i = `你是 DM。请评价刚才玩家的行动，并描写其初步反应。
不要在此阶段输出检定 JSON，也不要描述最终结果。
${e.systemPrompt}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, l = J(t, a, 10), d = [
            `【游戏配置】
世界: ${e.name}
角色:
${z(s)}`,
            o ? `【剧情提要】
${o}` : "",
            l ? `【近期历史记录】
${l}` : "",
            `【数值状态】
${E(s, r)}`
        ].filter(Boolean).join(`

`);
        return L([
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
    function pt(a, t) {
        const e = G(a), s = R(a), r = a.modeState.turnCounts, o = a.modeState.historySummary, i = a.modeConfig.gameMode, l = `你是 DM。基于玩家刚才的行动，决定是否需要进行 DND 5e 检定。
${O(i)}
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
【严格要求】：只输出 JSON，不要任何叙事。`, d = J(t, a, 10), _ = [
            `【游戏配置】
世界: ${e.name}
角色:
${z(s)}`,
            o ? `【剧情提要】
${o}` : "",
            d ? `【近期历史记录】
${d}` : "",
            `【角色数值状态】
${E(s, r)}`
        ].filter(Boolean).join(`

`);
        return L([
            {
                role: "system",
                content: l
            },
            {
                role: "user",
                content: _
            }
        ], a);
    }
    function gt(a, t) {
        const e = G(a), s = R(a), r = a.modeState.turnCounts, o = a.modeState.historySummary, i = a.modeState.lastCheckResult, l = a.modeState.lastCheckSpec, d = `你是 DM。检定结果已出。请根据结果描述后果，并引导剧情。
${e.systemPrompt}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, _ = J(t, a, 10), x = i && l ? `【检定结果】
意图: ${l.intent}
执行者: ${s.find((p)=>p.id === l.playerId)?.name || l.playerId}
骰子结果: ${i.total} (1d20:${i.naturalRoll} + 修正:${i.modifier}) vs DC:${l.dc}
结论: ${i.isSuccess ? "成功" : "失败"}
请根据此结果进行针对性的后果描述。` : "", I = [
            `【游戏配置】
世界: ${e.name}
角色:
${z(s)}`,
            o ? `【剧情提要】
${o}` : "",
            _ ? `【近期历史记录】
${_}` : "",
            x,
            `【数值状态】
${E(s, r)}`
        ].filter(Boolean).join(`

`);
        return L([
            {
                role: "system",
                content: d
            },
            {
                role: "user",
                content: I
            }
        ], a);
    }
    class xt extends Me {
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
                        messages: dt(this.session),
                        callbackPhase: "dm_game_intro",
                        llmRequestType: "dnd_dm_intro"
                    };
                case "dm_narrate":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate")), {
                        type: "LLM_CALL",
                        messages: lt(this.session, t),
                        callbackPhase: "dm_narrate",
                        llmRequestType: "dnd_dm_narrate",
                        dataExtra: {
                            phase: "dm_narrate"
                        }
                    };
                case "dm_assign_player":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_assign_player")), {
                        type: "LLM_CALL",
                        messages: mt(this.session, t),
                        callbackPhase: "dm_assign_player",
                        llmRequestType: "dnd_assign_player"
                    };
                case "player_action":
                    return this.handlePlayerAction(t);
                case "dm_check_eval":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_eval")), {
                        type: "LLM_CALL",
                        messages: ht(this.session, t),
                        callbackPhase: "dm_check_eval",
                        llmRequestType: "dnd_dm_narrate",
                        dataExtra: {
                            phase: "dm_check_eval"
                        }
                    };
                case "dm_check_decision":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_decision")), {
                        type: "LLM_CALL",
                        messages: pt(this.session, t),
                        callbackPhase: "dm_check_decision",
                        llmRequestType: "dnd_check_decision"
                    };
                case "fn_roll_check":
                    return this.handleRollCheck(t);
                case "dm_tell_result":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_tell_result")), {
                        type: "LLM_CALL",
                        messages: gt(this.session, t),
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
                messages: ut(this.session, t),
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
            const r = Ze(e, s.attributes);
            return this.session.modeState.lastCheckResult = r, t.addHistoryItem({
                id: $(),
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
                        const r = et(e);
                        if (r) {
                            const o = this.session.modeConfig.playerCharacterSnapshots.find((i)=>i.id === r.nextPlayerId);
                            s.addHistoryItem({
                                id: $(),
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
                                id: $(),
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
                        const r = Qe(e);
                        s.addHistoryItem({
                            id: $(),
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
    const m = Q({
        currentSession: null,
        contextManager: null,
        sessionManager: null,
        loadSession (a, t) {
            this.currentSession = a, this.currentSession.modeState.currentUIState = "idle", this.sessionManager = Se(new xt(this.currentSession));
            const e = Q(t || {
                historyItems: [],
                processingItem: void 0
            });
            this.contextManager = new we(e);
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
                const { SessionDB: o } = await import("./db-master-BD5cuqGE.js").then((i)=>i.v);
                return {
                    SessionDB: o
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])), s = new e(a);
            let r;
            try {
                r = K(t);
            } catch  {
                r = JSON.parse(JSON.stringify(t));
            }
            await s.addContextItems(r);
        },
        async updateSessionInDB () {
            if (!this.currentSession) return;
            const { masterDb: a } = await ee(async ()=>{
                const { masterDb: s } = await import("./db-master-BD5cuqGE.js").then((r)=>r.w);
                return {
                    masterDb: s
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])), t = K(this.currentSession.modeState), e = K(this.currentSession.modeConfig);
            await a.sessions.update(this.currentSession.id, {
                modeState: t,
                modeConfig: e,
                updatedAt: Date.now()
            });
        }
    });
    function ft() {
        const a = $e((p)=>Te(p.config)), t = S.useRef(!1), e = S.useRef(async ()=>{}), s = S.useRef(!1), r = oe(), o = S.useCallback(async (p, f, u, h, g = {})=>{
            const w = m.contextManager;
            if (!w) return {
                content: ""
            };
            const v = {
                id: $(),
                type: u,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: "",
                    ...g
                }
            };
            w.setProcessingItem(v);
            let M = "";
            return await Re(p, f, [], (A, D)=>{
                h?.(A), M = D;
                const U = w.getProcessingItem();
                U && (U.data.content = D);
            }), w.completeProcessingItem(), {
                content: M
            };
        }, []), i = S.useCallback((p, f, u)=>{
            const h = m.sessionManager, g = m.contextManager;
            h && g && h.handleLLMResponse(p.callbackPhase, f, g);
        }, []), l = S.useCallback(async (p, f)=>{
            const u = m.sessionManager, h = m.contextManager;
            if (!(u && h)) return;
            const g = await u.executeCurrentStateLogic(h);
            if (console.log("[DndLoop] Action:", g), g.type === "WAIT_FOR_INPUT" || g.type === "STOP") {
                await m.updateSessionInDB(), t.current = !1;
                return;
            }
            if (g.type === "STATE_CHANGE") {
                if (await m.updateSessionInDB(), s.current) {
                    console.log("[DndLoop] 游戏已暂停（STATE_CHANGE 后）"), t.current = !1;
                    return;
                }
                setTimeout(()=>{
                    e.current(p.id);
                }, 0);
                return;
            }
            if (g.type === "LLM_CALL") {
                if (g.callbackPhase) {
                    const v = g.callbackPhase;
                    u.setCurrentUIState(u.getRunningUIStateForPhase(v));
                }
                await m.updateSessionInDB();
                const w = await o(f, g.messages.map((v)=>({
                        ...v,
                        id: $()
                    })), g.llmRequestType, void 0, g.dataExtra);
                if (await m.saveNewContextItemsToDB(p.id, h.getHistoryItems()), i(g, w.content, p.id), await m.updateSessionInDB(), s.current) {
                    console.log("[DndLoop] 游戏已暂停（LLM_CALL 完成后）"), t.current = !1;
                    return;
                }
                setTimeout(()=>{
                    e.current(p.id);
                }, 0);
            }
        }, [
            o,
            i
        ]), d = S.useCallback(async (p)=>{
            const f = m.currentSession;
            if (!f || f.id !== p) return;
            const u = {
                ...a
            };
            try {
                t.current = !0, await l(f, u);
            } catch (h) {
                console.error("[DndLoop] Critical Error:", h), V.error("LLM 调用失败，请前往 LLM 配置页面进行配置", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>r({
                                to: "/config/llm"
                            })
                    }
                }), t.current = !1;
            }
        }, [
            a,
            r,
            l
        ]);
        e.current = d;
        const _ = S.useCallback(async (p)=>{
            if (t.current) return;
            const f = m.currentSession, u = m.contextManager, h = m.sessionManager;
            if (!(f && u && h)) {
                console.warn("[DndLoop] Session or Managers not ready");
                return;
            }
            if (p) {
                if (h.getCurrentPhase() !== "player_action") {
                    V.warning("当前并非该角色的行动回合");
                    return;
                }
                const g = f.modeState.currentTurnCharacterId, w = f.modeConfig.playerCharacterSnapshots.find((M)=>M.id === g);
                if (!w?.isHumanControlled) {
                    V.warning("当前角色由 AI 控制，无法手动输入");
                    return;
                }
                h.setCurrentUIState(h.getRunningUIStateForPhase("player_action"));
                const v = {
                    id: $(),
                    type: "dnd_player_action",
                    idx: 0,
                    orderRef: 0,
                    timestamp: Date.now(),
                    data: {
                        content: p,
                        characterId: g,
                        characterName: w.name,
                        isHumanControlled: !0
                    }
                };
                u.addHistoryItem(v), await m.saveNewContextItemsToDB(f.id, u.getHistoryItems()), h.incrementTurnCount(g), h.setCurrentUIState(h.getDoneUIStateForPhase("player_action")), h.enterNextState("dm_check_eval"), await m.updateSessionInDB();
            }
            await d(f.id);
        }, [
            d
        ]), x = S.useCallback(()=>{
            s.current = !0, console.log("[DndLoop] 暂停请求已发出");
        }, []), I = S.useCallback(()=>{
            if (!s.current) return;
            s.current = !1, console.log("[DndLoop] 恢复游戏");
            const p = m.currentSession;
            p && !t.current && d(p.id);
        }, [
            d
        ]);
        return {
            nextStep: _,
            isCallingRef: t,
            isPausedRef: s,
            pauseGame: x,
            resumeGame: I
        };
    }
    const _t = T({
        力量: k().describe("力量属性值"),
        敏捷: k().describe("敏捷属性值"),
        体质: k().describe("体质属性值"),
        智力: k().describe("智力属性值"),
        感知: k().describe("感知属性值"),
        魅力: k().describe("魅力属性值")
    }), bt = T({
        intent: b().describe("检定意图"),
        type: X([
            "attribute",
            "saving",
            "attack"
        ]).describe("检定类型"),
        attribute: b().describe("检定维度"),
        dc: k().describe("目标数值 (DC)"),
        playerId: b().describe("执行检定的角色 ID")
    }), yt = T({
        naturalRoll: k().describe("骰子原值"),
        total: k().describe("总值 (原值 + 修正)"),
        modifier: k().describe("属性修正"),
        isSuccess: ie().describe("是否成功")
    }), St = X([
        "dm_game_intro",
        "dm_narrate",
        "dm_assign_player",
        "player_action",
        "dm_check_eval",
        "dm_check_decision",
        "fn_roll_check",
        "dm_tell_result"
    ]), Ct = X([
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
    }, kt = X([
        "standard",
        "narrative",
        "hardcore",
        "solo"
    ]), Nt = T({
        id: b().describe("角色 ID"),
        name: b().describe("角色名称"),
        description: b().describe("角色描述"),
        avatar: b().optional().describe("角色头像"),
        systemPrompt: b().describe("角色扮演指引"),
        attributes: _t.describe("角色属性"),
        race: b().optional().describe("种族"),
        class: b().optional().describe("职业"),
        currentHP: k().describe("当前生命值"),
        maxHP: k().describe("最大生命值"),
        isHumanControlled: ie().describe("是否由人类控制")
    }), Dt = T({
        name: b().describe("世界名称"),
        description: b().describe("世界描述"),
        systemPrompt: b().describe("核心系统提示词"),
        globalKnowledge: b().optional().describe("世界观补充")
    }), jt = T({
        worldSnapshot: Dt.describe("世界设定快照"),
        gameMode: kt.describe("玩法模式"),
        playerCharacterSnapshots: Le(Nt).describe("参与角色快照列表"),
        dmName: b().optional().describe("DM 显示名称")
    }), It = T({
        currentPhase: St.describe("当前阶段名称"),
        currentUIState: Ct.describe("当前 UI 状态名称"),
        currentTurnCharacterId: b().describe("当前行动角色 ID ('dm' 或角色ID)"),
        currentRound: k().describe("当前回合数"),
        turnCounts: Ae(b(), k()).describe("每个角色的行动次数统计"),
        lastCheckSpec: bt.optional().describe("最近一次检定规范"),
        lastCheckResult: yt.optional().describe("最近一次检定结果"),
        historySummary: b().describe("历史摘要")
    });
    Ne.extend({
        mode: Ee("dnd").describe("模式"),
        modeConfig: jt.describe("DnD 模式配置"),
        modeState: It.describe("DnD 模式状态")
    });
    let wt, q, se, vt, re;
    rn = (a)=>{
        const t = oe(), [e, s] = S.useState(""), [r, o] = S.useState(!1), [i, l] = S.useState(!1), d = Ce(m), { data: _ = [] } = ke((c)=>c.from({
                s: De
            })), x = _.find((c)=>c.id === a.sessionId);
        S.useEffect(()=>{
            let c = !1;
            if (!x) return;
            if (m.currentSession?.id === x.id && m.contextManager) {
                l(!0);
                return;
            }
            return (async ()=>{
                try {
                    const y = await Ie.createSessionDB(x.id).getContextItems();
                    if (c) return;
                    m.loadSession(x, {
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
            x?.id,
            x
        ]);
        const { nextStep: I, isPausedRef: p, pauseGame: f, resumeGame: u } = ft(), [h, g] = S.useState(!1), w = async ()=>{
            if (r) return;
            const c = m.sessionManager, C = m.contextManager;
            if (c && C) {
                p.current = !1, g(!1), o(!0);
                try {
                    He(a.sessionId, "dnd");
                    const j = c.getActualCurrentPhase(C);
                    c.enterNextState(j), c.setCurrentUIState(c.getReadyUIStateForPhase(j)), await m.updateSessionInDB(), await I();
                } finally{
                    o(!1);
                }
            }
        };
        if (!(x && i)) return n.jsxs("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
            children: [
                n.jsx("div", {
                    className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center",
                    children: n.jsx(W, {
                        className: "w-6 h-6 opacity-20"
                    })
                }),
                n.jsx("p", {
                    className: "text-xs font-medium tracking-widest uppercase opacity-50",
                    children: "正在构建冒险世界..."
                })
            ]
        });
        const v = async ()=>{
            if (!(!e.trim() || r)) {
                p.current = !1, g(!1), o(!0);
                try {
                    await I(e), Fe(a.sessionId, "dnd");
                } finally{
                    o(!1), s("");
                }
            }
        }, M = m.sessionManager && m.contextManager ? m.sessionManager.getActualCurrentUIState(m.contextManager) : d.currentSession?.modeState?.currentUIState || "idle", A = ae[M] || ae.idle, D = d.currentSession?.modeConfig?.playerCharacterSnapshots?.find((c)=>c.id === d.currentSession?.modeState?.currentTurnCharacterId), U = !!D?.isHumanControlled, H = r || !A.inputEnabled || A.inputEnabled && !U, pe = ()=>{
            f(), g(!0);
        }, ge = ()=>{
            u(), g(!1);
        }, xe = async (c)=>{
            const C = m.currentSession?.modeConfig.playerCharacterSnapshots.find((ye)=>ye.id === c);
            if (!C) return;
            const j = C.isHumanControlled;
            m.toggleCharacterControl(c), await m.updateSessionInDB();
            const y = c === m.currentSession?.modeState.currentTurnCharacterId, F = m.sessionManager?.getCurrentPhase();
            j && y && F === "player_action" && !r && await I();
        }, fe = ()=>{
            t({
                to: "/plaza"
            });
        }, _e = ()=>{
            console.log("[DnD][Memory Session]", m.currentSession);
        }, be = async ()=>{
            if (!x?.id) return;
            const c = await je.sessions.getTable().get(x.id);
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
                                            children: n.jsx(Y, {
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
                                                        n.jsxs(B, {
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
                                        M !== "idle" && (h ? n.jsxs(P, {
                                            type: "button",
                                            variant: "outline",
                                            size: "sm",
                                            className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-green-500/30 text-green-600 hover:bg-green-500/10",
                                            onClick: ge,
                                            children: [
                                                n.jsx(Be, {
                                                    className: "w-3 h-3"
                                                }),
                                                "继续"
                                            ]
                                        }) : n.jsxs(P, {
                                            type: "button",
                                            variant: "outline",
                                            size: "sm",
                                            className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-amber-500/30 text-amber-600 hover:bg-amber-500/10",
                                            onClick: pe,
                                            children: [
                                                n.jsx(Oe, {
                                                    className: "w-3 h-3"
                                                }),
                                                "暂停"
                                            ]
                                        })),
                                        n.jsxs(B, {
                                            variant: "secondary",
                                            className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50",
                                            children: [
                                                n.jsx("span", {
                                                    className: N("w-1.5 h-1.5 rounded-full", h ? "bg-amber-400" : "bg-amber-500 animate-pulse")
                                                }),
                                                h ? "已暂停" : "DND"
                                            ]
                                        }),
                                        n.jsx(P, {
                                            type: "button",
                                            variant: "ghost",
                                            size: "sm",
                                            className: "h-6 px-2 text-[10px]",
                                            onClick: _e,
                                            children: "LOG MEM"
                                        }),
                                        n.jsx(P, {
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
                        n.jsx(ve, {
                            className: "flex grow",
                            children: n.jsx("div", {
                                className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-8",
                                children: (()=>{
                                    const c = (d.contextManager?.state.historyItems || []).filter((y)=>!y.hidden), C = d.contextManager?.state.processingItem;
                                    if (M === "idle") {
                                        const y = c.length === 0 ? "开始冒险" : "继续冒险";
                                        return n.jsxs("div", {
                                            className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                                            children: [
                                                n.jsx("div", {
                                                    className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500",
                                                    children: n.jsx(Y, {
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
                                                n.jsxs(P, {
                                                    type: "button",
                                                    size: "lg",
                                                    className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-amber-500/25 shadow-amber-500/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90",
                                                    onClick: w,
                                                    disabled: r,
                                                    children: [
                                                        r ? n.jsx(W, {
                                                            className: "w-5 h-5 animate-spin mr-3"
                                                        }) : n.jsx(Z, {
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
                                                                n.jsx(Ge, {
                                                                    className: "w-3 h-3"
                                                                }),
                                                                " D20 检定"
                                                            ]
                                                        }),
                                                        n.jsxs("span", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                n.jsx(ze, {
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
                                    return C && !C.hidden && !c.some((y)=>y.id === C.id) && j.push(C), j.map((y, F)=>n.jsx(wt, {
                                            item: y,
                                            participants: d.currentSession?.modeConfig?.playerCharacterSnapshots || []
                                        }, `[${F}]${y.id}`));
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
                                            placeholder: H ? A.inputEnabled && !U ? `${D?.name || "角色"} 由 AI 控制，等待自动行动...` : A.placeholder : `作为 ${D?.name || "角色"}，描述你的行动...`,
                                            disabled: H,
                                            className: N("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-amber-500/20 focus-visible:bg-background transition-all", H && "opacity-50 cursor-not-allowed"),
                                            onKeyDown: (c)=>{
                                                c.key === "Enter" && !c.shiftKey && (c.preventDefault(), v());
                                            }
                                        }),
                                        n.jsx(P, {
                                            type: "button",
                                            size: "icon",
                                            className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all",
                                            disabled: !e.trim() || H,
                                            onClick: v,
                                            children: r ? n.jsx(W, {
                                                className: "w-4 h-4 animate-spin"
                                            }) : n.jsx(Je, {
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
                                            children: H ? "等待中..." : "Shift + Enter 换行"
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
                                        n.jsx(qe, {
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
                                        n.jsx(Xe, {
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
                                            className: N("p-4 rounded-xl border transition-all duration-300", C ? "bg-amber-500/5 border-amber-500/30 shadow-sm shadow-amber-500/10" : "bg-background/40 border-muted/30"),
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
                                                                        n.jsx(B, {
                                                                            variant: "outline",
                                                                            className: N("text-[8px] px-1 h-3.5", c.isHumanControlled ? "bg-blue-500/10 text-blue-600 border-blue-500/20" : "bg-muted/50 text-muted-foreground border-muted/30"),
                                                                            children: c.isHumanControlled ? "玩家" : "AI"
                                                                        }),
                                                                        C && n.jsx(B, {
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
                                                                    className: N("w-3 h-3 transition-colors", c.isHumanControlled ? "text-muted-foreground/30" : "text-foreground/70")
                                                                }),
                                                                n.jsx("span", {
                                                                    className: N("text-[9px] font-bold uppercase tracking-wider transition-colors", c.isHumanControlled ? "text-muted-foreground/20" : "text-foreground/50"),
                                                                    children: "AI"
                                                                })
                                                            ]
                                                        }),
                                                        n.jsx(Ue, {
                                                            checked: c.isHumanControlled,
                                                            onCheckedChange: ()=>xe(c.id),
                                                            className: "data-[state=checked]:bg-blue-500 h-4 w-7 [&>span]:h-3 [&>span]:w-3"
                                                        }),
                                                        n.jsxs("div", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                n.jsx("span", {
                                                                    className: N("text-[9px] font-bold uppercase tracking-wider transition-colors", c.isHumanControlled ? "text-foreground/50" : "text-muted-foreground/20"),
                                                                    children: "玩家"
                                                                }),
                                                                n.jsx(Ke, {
                                                                    className: N("w-3 h-3 transition-colors", c.isHumanControlled ? "text-blue-500" : "text-muted-foreground/30")
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
                                                                        n.jsx(Ve, {
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
                                                                className: N("h-full rounded-full transition-all duration-500", c.currentHP / c.maxHP > .5 ? "bg-green-500" : c.currentHP / c.maxHP > .25 ? "bg-amber-500" : "bg-red-500"),
                                                                style: {
                                                                    width: `${Math.max(0, c.currentHP / c.maxHP * 100)}%`
                                                                }
                                                            })
                                                        })
                                                    ]
                                                }),
                                                n.jsx("div", {
                                                    className: "mt-3 grid grid-cols-3 gap-1.5",
                                                    children: Object.entries(c.attributes || {}).map(([y, F])=>n.jsxs("div", {
                                                            className: "text-center py-1 px-1 rounded bg-muted/30 border border-muted/20",
                                                            children: [
                                                                n.jsx("div", {
                                                                    className: "text-[8px] font-bold uppercase text-muted-foreground/50",
                                                                    children: y.slice(0, 3)
                                                                }),
                                                                n.jsx("div", {
                                                                    className: "text-xs font-mono font-bold",
                                                                    children: F
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
                            children: n.jsxs(P, {
                                type: "button",
                                variant: "outline",
                                className: "w-full h-10 rounded-xl border-dashed border-2 hover:border-amber-500/50 hover:bg-amber-500/5 gap-2",
                                onClick: fe,
                                children: [
                                    n.jsx(We, {
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
    wt = ({ item: a, participants: t })=>{
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
                return n.jsx(vt, {
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
                                n.jsx(Z, {
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
                            className: N("text-[10px] font-black tracking-[0.2em] flex items-center gap-2 uppercase", l ? "text-blue-500/60" : "text-violet-500/60"),
                            children: [
                                n.jsx(Y, {
                                    className: "w-3 h-3"
                                }),
                                i,
                                l && n.jsx(B, {
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
    vt = ({ item: a })=>{
        const t = a.data, e = t.checkResult, s = t.characterName || "角色", r = t.attributeName || "属性";
        if (!e) return null;
        const o = e.isSuccess, i = e.naturalRoll === 20, l = e.naturalRoll === 1;
        return n.jsx("div", {
            className: "flex justify-center my-6 animate-in fade-in zoom-in duration-500",
            children: n.jsxs("div", {
                className: N("inline-flex items-center gap-4 px-6 py-4 rounded-2xl border-2 shadow-lg", o ? "bg-green-500/5 border-green-500/30 shadow-green-500/10" : "bg-red-500/5 border-red-500/30 shadow-red-500/10"),
                children: [
                    n.jsxs("div", {
                        className: N("w-14 h-14 rounded-xl flex items-center justify-center font-mono font-black text-2xl relative", i ? "bg-amber-500/20 text-amber-500 ring-2 ring-amber-500/30" : l ? "bg-red-500/20 text-red-500 ring-2 ring-red-500/30" : o ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"),
                        children: [
                            e.naturalRoll,
                            i && n.jsx(Z, {
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
                                className: N("text-xs font-black uppercase tracking-wider", i ? "text-amber-500" : l ? "text-red-500" : o ? "text-green-600" : "text-red-600"),
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
export { rn as SessionMainForDnd, __tla };
