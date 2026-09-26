const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-b5fCn9mB.js","assets/@tanstack-HvIyZ7G-.js","assets/react-CdECYH1o.js","assets/vendor-BK50ji10.js","assets/formatting-BBnWba-L.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-B_g1HnUg.js","assets/zod-BTj0C3yc.js","assets/analytics-BjBUYDN_.js","assets/nex-tavern-uuid-CXz893WL.js","assets/index-k6qYjFMJ.js","assets/icons-LD1dlQlv.js","assets/index-BOxVUFQ5.css","assets/id-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { e as Y, an as V, aF as Ce, r as b, t as W, u as be, j as s } from "./react-CdECYH1o.js";
import { u as De, C as Ie, M as Z, S as ke, b as se, c as re, a as oe } from "./conversation-message-BwOyJT_A.js";
import { C as Me, a as Ne, b as je, d as Pe } from "./card-BBOLaoBh.js";
import { P as we } from "./progress-Chzb2aGS.js";
import { S as $e, a as ve, b as Te, __tla as __tla_0 } from "./session._sessionId-DmltwlKl.js";
import { A as Re, a as Le, b as Ae } from "./alert-DSZBkTkP.js";
import { S as J } from "./spinner-DANPY4R7.js";
import { I as Ue, d as Ee, b as He } from "./input-group-Y3ah1Rbi.js";
import { h as ie, k as Fe } from "./@tanstack-HvIyZ7G-.js";
import { j as Be, S as Oe } from "./db-master-b5fCn9mB.js";
import { s as Ge } from "./db-BnATHJL5.js";
import { _ as Q, __tla as __tla_1 } from "./index-k6qYjFMJ.js";
import { C as ze } from "./context-manager.class-I6ERY2vv.js";
import { n as R } from "./id-BY9c7rfI.js";
import { S as Je } from "./session-manager.class-DYRgdOIu.js";
import { B as X } from "./button-DXPhLBkO.js";
import { B as E } from "./badge-CuoEhJCl.js";
import { u as Xe, g as qe, d as Ke } from "./collapsible-CruqMeF1.js";
import { o as L, n as j, s as S, _ as K, c as ce, b as Ve, r as We, l as Ye } from "./zod-BTj0C3yc.js";
import { S as Ze } from "./switch-DzOF-yP9.js";
import { C as de } from "./CharacterAvatar-C5WMuKF2.js";
import { b as Qe, a as et } from "./analytics-BjBUYDN_.js";
import { av as tt, aw as nt, a2 as at, n as st, R as rt, ad as le, i as ot, b as it } from "./icons-LD1dlQlv.js";
import "./vendor-BK50ji10.js";
import "./formatting-BBnWba-L.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./reading-settings.store-BQ85Rkks.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./@tailwind-CPcsbTWB.js";
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
import "./empty-D_9_HEmg.js";
import "./InvitationGuard-Duw6q46K.js";
import "./nex-tavern-uuid-CXz893WL.js";
import "./textarea-tLeysPi9.js";
import "./dexie-B_g1HnUg.js";
import "./es-toolkit-9bjl2JfA.js";
import "./avatar-C5_yDDay.js";
let Un;
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
    const ue = [
        "力量",
        "敏捷",
        "体质",
        "智力",
        "感知",
        "魅力"
    ], ct = {
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
    function me(n) {
        return Math.floor((n - 10) / 2);
    }
    function ee(n, t) {
        const e = Math.floor(Math.random() * 20) + 1, a = e + t;
        return {
            naturalRoll: e,
            total: a,
            modifier: t,
            isSuccess: a >= n
        };
    }
    function dt(n, t) {
        const e = pe(n.attribute), a = e ? t[e] : void 0;
        if (typeof a != "number") return console.warn("[DndUtils] 检定属性无效，按 +0 修正处理", {
            rawAttribute: n.attribute,
            normalizedAttribute: e,
            availableAttributes: Object.keys(t)
        }), ee(n.dc, 0);
        const o = me(a);
        return ee(n.dc, o);
    }
    function lt(n) {
        try {
            const t = n.match(/```(?:json)?\s*\n?([\s\S]*?)```/), e = t ? t[1].trim() : n.trim(), a = e.indexOf("{"), o = e.lastIndexOf("}") + 1;
            if (a < 0 || o <= a) return console.warn("[DndUtils] 检定决策解析失败：未找到 JSON 块", n.slice(0, 200)), null;
            const r = JSON.parse(e.slice(a, o));
            if (r.none === !0 || r.none === "true") return {
                needsCheck: !1
            };
            const i = r.playerId || r.player_id || r.角色ID || r.执行者ID, d = r.attribute || r.属性 || r.检定维度, u = typeof i == "string" ? i.trim() : "", m = pe(d), M = Number(r.dc || r.DC || r.目标数值 || r.难度 || 0);
            return u && m && M > 0 ? {
                needsCheck: !0,
                checkSpec: {
                    intent: r.intent || r.意图 || r.reason || r.具体意图 || "",
                    type: r.type || "attribute",
                    attribute: m,
                    dc: M,
                    playerId: u
                }
            } : (m || console.warn("[DndUtils] 检定属性解析失败，原始值:", d), console.warn("[DndUtils] 检定决策 JSON 字段不完整:", r), null);
        } catch (t) {
            return console.warn("[DndUtils] 检定决策解析异常:", t, n.slice(0, 200)), null;
        }
    }
    function ut(n) {
        try {
            const t = n.indexOf("{"), e = n.lastIndexOf("}") + 1;
            if (t < 0 || e <= t) return null;
            const a = JSON.parse(n.slice(t, e)), o = a.nextPlayerId || a.指定的玩家ID;
            return o ? {
                nextPlayerId: o,
                reason: a.reason || a.原因 || ""
            } : null;
        } catch  {
            return null;
        }
    }
    function mt(n) {
        const t = n.replace(/<[^>]*$/, ""), e = [], a = /<\/?([a-zA-Z]\w*)[^>]*>/g;
        let o;
        for(; (o = a.exec(t)) !== null;){
            const i = o[1].toLowerCase();
            o[0].startsWith("</") ? e.length > 0 && e.at(-1) === i && e.pop() : e.push(i);
        }
        let r = t;
        for(; e.length > 0;){
            const i = e.pop();
            r += `</${i}>`;
        }
        return r;
    }
    function ht(n, t) {
        let e = n;
        return t.userName && (e = e.replace(/\{\{user\}\}/gi, t.userName), e = e.replace(/<USER>/gi, t.userName)), t.charName && (e = e.replace(/\{\{char\}\}/gi, t.charName), e = e.replace(/<BOT>/gi, t.charName)), e;
    }
    const pt = /<think>([\s\S]*?)<\/think>/, _t = /<speak>([\s\S]*?)<\/speak>/, gt = /<action>([\s\S]*?)<\/action>/;
    function he(n) {
        const t = mt(n), e = t.match(pt)?.[1]?.trim(), a = t.match(_t)?.[1]?.trim(), o = t.match(gt)?.[1]?.trim(), r = t.replace(/<\/?[a-zA-Z]\w*[^>]*>/g, "").trim();
        return {
            think: e,
            speak: a,
            action: o,
            rawText: r
        };
    }
    function B(n) {
        switch(n){
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
    function ft(n) {
        return ue.includes(n);
    }
    function te(n) {
        const t = n.trim().replace(/["'`“”‘’]/g, "").replace(/^[\s:：-]+|[\s:：-]+$/g, "");
        if (!t) return null;
        if (ft(t)) return t;
        const e = ct[t.toLowerCase()];
        if (e) return e;
        const a = ue.filter((o)=>t.includes(o));
        return a.length === 1 ? a[0] : null;
    }
    function pe(n) {
        if (typeof n != "string") return null;
        const t = n.trim();
        if (!t) return null;
        const e = t.replace(/[（(][^）)]*[）)]/g, ""), a = te(e);
        return a || (t.split(/[|/、,，;；或]/).map((r)=>te(r)).filter((r)=>r !== null)[0] ?? null);
    }
    function O(n) {
        return n.modeConfig.worldSnapshot;
    }
    function A(n) {
        return n.modeConfig.playerCharacterSnapshots;
    }
    function yt(n, t) {
        return n.modeConfig.playerCharacterSnapshots.find((e)=>e.id === t);
    }
    function H(n, t) {
        return n.map((e)=>{
            const a = Object.entries(e.attributes).map(([r, i])=>`${r}:${i}(${me(i)})`).join(", "), o = t[e.id] || 0;
            return `- ${e.name} (ID: ${e.id}): ${a} (累计行动: ${o}次)`;
        }).join(`
`);
    }
    function G(n) {
        return n.map((t)=>`- ${t.name} (ID: ${t.id}): ${t.systemPrompt}`).join(`
`);
    }
    function z(n, t, e = 15) {
        const a = A(t);
        return n.getFlatHistoryItems(e).filter((o)=>!o.hidden && !o.deleted).map((o)=>{
            const { type: r, data: i } = o;
            if (r === "dnd_dm_intro" || r === "dnd_dm_narrate") return `[DM]: ${i.content}`;
            if (r === "dnd_player_action") return `[${i.characterName || a.find((u)=>u.id === i.characterId)?.name || i.characterId}]: ${i.content}`;
            if (r === "participant_message") return i.isDM ? `[DM]: ${i.content}` : `[${i.name || "玩家"}]: ${i.content}`;
            if (r === "dnd_roll_result") {
                const d = i.checkSpec, u = i.checkResult;
                return `[系统检定] ${d.intent}: 1d20(${u.naturalRoll}) + ${d.attribute}修正(${u.modifier}) = ${u.total} vs DC:${d.dc} → ${u.isSuccess ? "成功" : "失败"}`;
            }
            return r === "dnd_system_notice" ? `[系统]: ${i.content}` : null;
        }).filter(Boolean).join(`
`);
    }
    function St(n) {
        return n.modeConfig.playerCharacterSnapshots.find((e)=>e.isHumanControlled)?.name || "冒险者";
    }
    function U(n, t, e) {
        const a = St(t), o = e || t.modeConfig.dmName || "DM";
        return n.map((r)=>({
                ...r,
                content: ht(r.content, {
                    userName: a,
                    charName: o
                })
            }));
    }
    function xt(n, t) {
        const e = O(n), a = A(n), o = n.modeState.turnCounts, r = n.modeConfig.gameMode, i = `你是 DM (地下城主)。请为这个 DND 冒险创建引人入胜的开场介绍，设置世界背景和初始场景。
${B(r)}
${e.systemPrompt}
${e.globalKnowledge ? `
【世界观补充】
${e.globalKnowledge}` : ""}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, d = [
            "【游戏配置】",
            `DM: ${n.modeConfig.dmName || "DM"}`,
            `世界: ${e.name} — ${e.description}`,
            `参与角色:
${G(a)}`,
            `【初始数值状态】
${H(a, o)}`
        ].join(`

`);
        return U([
            {
                role: "system",
                content: i
            },
            {
                role: "user",
                content: d
            }
        ], n);
    }
    function Ct(n, t) {
        const e = O(n), a = A(n), o = n.modeState.turnCounts, r = n.modeConfig.gameMode, i = n.modeState.historySummary, d = `你是 DM。请根据当前剧情进展描写场景，推进故事。
不需要在此阶段指定角色或提出检定，只需描写。
${B(r)}
${e.systemPrompt}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, u = z(t, n, 10), m = [
            "【游戏配置】",
            `世界: ${e.name}`,
            `角色:
${G(a)}`,
            i ? `【剧情提要】
${i}` : "",
            u ? `【近期历史记录】
${u}` : "",
            `【数值状态】
${H(a, o)}`
        ].filter(Boolean).join(`

`);
        return U([
            {
                role: "system",
                content: d
            },
            {
                role: "user",
                content: m
            }
        ], n);
    }
    function bt(n, t) {
        const e = A(n), a = n.modeState.turnCounts, o = n.modeConfig.gameMode, r = e.map((g)=>a[g.id] || 0), d = (r.length > 0 ? Math.min(...r) : 0) + 2, u = e.filter((g)=>(a[g.id] || 0) <= d).sort((g, p)=>(a[g.id] || 0) - (a[p.id] || 0)), m = `你是 DM。请根据刚才的叙事，从候选名单中指定【下一个】行动的角色。
${B(o)}
【公平性原则】：为了确保每个玩家都有平等的参与机会，你【必须】仅从以下提供的名单中选择。请优先考虑行动次数最少的角色。
【严格要求】：只需输出一个 JSON 块，不要包含任何叙事文字。
\`\`\`json
{ "reason": "原因", "nextPlayerId": "角色ID" }
\`\`\`
候选名单（仅限已行动次数较少的角色）：
${u.map((g)=>`- ${g.name} (ID: ${g.id}, 已行动: ${a[g.id] || 0}次)`).join(`
`)}`, M = t.getFlatHistoryItems(5);
        let f;
        for(let g = M.length - 1; g >= 0; g -= 1){
            const p = M[g];
            if (p.type === "dnd_dm_narrate" || p.type === "dnd_dm_intro") {
                f = p;
                break;
            }
        }
        const $ = f ? `【当前场景】
${f.data.content}` : `【初始场景】
冒险开始。`, T = `【所有角色行动统计】
${e.map((g)=>`${g.name}: ${a[g.id] || 0} 次`).join(`
`)}`;
        return U([
            {
                role: "system",
                content: m
            },
            {
                role: "user",
                content: [
                    $,
                    T
                ].join(`

`)
            }
        ], n);
    }
    function Dt(n, t) {
        const e = n.modeState.turnCounts, a = n.modeState.currentTurnCharacterId, o = yt(n, a), r = n.modeState.historySummary, i = n.modeConfig.gameMode;
        if (!o) return [];
        const d = `你是玩家 ${o.name} (${o.id})。${o.systemPrompt}
请基于当前场景和 DM 的引导决定你的行动。
${B(i)}
要求输出必须包含 XML 标签：<think>内心独白</think><speak>口头表达</speak><action>具体行动</action>。`, u = z(t, n, 8), m = H([
            o
        ], e), M = [
            `【你的角色信息】
${o.systemPrompt}`,
            r ? `【剧情提要】
${r}` : "",
            u ? `【当前场景】
${u}` : "",
            `【你的数值状态】
${m}`
        ].filter(Boolean).join(`

`);
        return U([
            {
                role: "system",
                content: d
            },
            {
                role: "user",
                content: M
            }
        ], n, o.name);
    }
    function It(n, t) {
        const e = O(n), a = A(n), o = n.modeState.turnCounts, r = n.modeState.historySummary, i = `你是 DM。请评价刚才玩家的行动，并描写其初步反应。
不要在此阶段输出检定 JSON，也不要描述最终结果。
${e.systemPrompt}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, d = z(t, n, 10), u = [
            `【游戏配置】
世界: ${e.name}
角色:
${G(a)}`,
            r ? `【剧情提要】
${r}` : "",
            d ? `【近期历史记录】
${d}` : "",
            `【数值状态】
${H(a, o)}`
        ].filter(Boolean).join(`

`);
        return U([
            {
                role: "system",
                content: i
            },
            {
                role: "user",
                content: u
            }
        ], n);
    }
    function kt(n, t) {
        const e = O(n), a = A(n), o = n.modeState.turnCounts, r = n.modeState.historySummary, i = n.modeConfig.gameMode, d = `你是 DM。基于玩家刚才的行动，决定是否需要进行 DND 5e 检定。
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
【严格要求】：只输出 JSON，不要任何叙事。`, u = z(t, n, 10), m = [
            `【游戏配置】
世界: ${e.name}
角色:
${G(a)}`,
            r ? `【剧情提要】
${r}` : "",
            u ? `【近期历史记录】
${u}` : "",
            `【角色数值状态】
${H(a, o)}`
        ].filter(Boolean).join(`

`);
        return U([
            {
                role: "system",
                content: d
            },
            {
                role: "user",
                content: m
            }
        ], n);
    }
    function Mt(n, t) {
        const e = O(n), a = A(n), o = n.modeState.turnCounts, r = n.modeState.historySummary, i = n.modeState.lastCheckResult, d = n.modeState.lastCheckSpec, u = `你是 DM。检定结果已出。请根据结果描述后果，并引导剧情。
${e.systemPrompt}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, m = z(t, n, 10), M = i && d ? `【检定结果】
意图: ${d.intent}
执行者: ${a.find(($)=>$.id === d.playerId)?.name || d.playerId}
骰子结果: ${i.total} (1d20:${i.naturalRoll} + 修正:${i.modifier}) vs DC:${d.dc}
结论: ${i.isSuccess ? "成功" : "失败"}
请根据此结果进行针对性的后果描述。` : "", f = [
            `【游戏配置】
世界: ${e.name}
角色:
${G(a)}`,
            r ? `【剧情提要】
${r}` : "",
            m ? `【近期历史记录】
${m}` : "",
            M,
            `【数值状态】
${H(a, o)}`
        ].filter(Boolean).join(`

`);
        return U([
            {
                role: "system",
                content: u
            },
            {
                role: "user",
                content: f
            }
        ], n);
    }
    class Nt extends Je {
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
                const o = {
                    dnd_dm_intro: "dm_game_intro",
                    dnd_dm_narrate: "dm_narrate",
                    dnd_assign_player: "dm_assign_player",
                    dnd_player_action: "player_action",
                    dnd_check_decision: "dm_check_decision",
                    dnd_roll_result: "fn_roll_check"
                };
                if (e.type === "participant_message" && e.data?.isDM) return "dm_check_eval";
                const r = o[e.type];
                if (r) return r;
            }
            const a = t.getFlatHistoryItems();
            for(let o = a.length - 1; o >= 0; o--){
                const r = a[o];
                if (!r?.deleted) switch(r.type){
                    case "dnd_dm_intro":
                        return "dm_assign_player";
                    case "dnd_dm_narrate":
                        {
                            const i = r.data?.phase;
                            return i === "dm_check_eval" ? "dm_check_decision" : "dm_assign_player";
                        }
                    case "dnd_assign_player":
                        return "player_action";
                    case "dnd_player_action":
                        return "dm_check_eval";
                    case "dnd_check_decision":
                        return r.data?.needsCheck ? "fn_roll_check" : "dm_narrate";
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
                const a = {
                    dnd_dm_intro: "dm_game_intro_running",
                    dnd_dm_narrate: "dm_narrate_running",
                    dnd_assign_player: "dm_assign_player_running",
                    dnd_player_action: "player_action_running",
                    dnd_check_decision: "dm_check_decision_running",
                    dnd_roll_result: "fn_roll_check_running"
                };
                if (e.type === "participant_message" && e.data?.isDM) return "dm_check_eval_running";
                const o = a[e.type];
                if (o) return o;
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
                        messages: xt(this.session),
                        callbackPhase: "dm_game_intro",
                        llmRequestType: "dnd_dm_intro"
                    };
                case "dm_narrate":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate")), {
                        type: "LLM_CALL",
                        messages: Ct(this.session, t),
                        callbackPhase: "dm_narrate",
                        llmRequestType: "dnd_dm_narrate",
                        dataExtra: {
                            phase: "dm_narrate"
                        }
                    };
                case "dm_assign_player":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_assign_player")), {
                        type: "LLM_CALL",
                        messages: bt(this.session, t),
                        callbackPhase: "dm_assign_player",
                        llmRequestType: "dnd_assign_player"
                    };
                case "player_action":
                    return this.handlePlayerAction(t);
                case "dm_check_eval":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_eval")), {
                        type: "LLM_CALL",
                        messages: It(this.session, t),
                        callbackPhase: "dm_check_eval",
                        llmRequestType: "dnd_dm_narrate",
                        dataExtra: {
                            phase: "dm_check_eval"
                        }
                    };
                case "dm_check_decision":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_decision")), {
                        type: "LLM_CALL",
                        messages: kt(this.session, t),
                        callbackPhase: "dm_check_decision",
                        llmRequestType: "dnd_check_decision"
                    };
                case "fn_roll_check":
                    return this.handleRollCheck(t);
                case "dm_tell_result":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_tell_result")), {
                        type: "LLM_CALL",
                        messages: Mt(this.session, t),
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
            const e = this.session.modeState.currentTurnCharacterId, a = this.session.modeConfig.playerCharacterSnapshots.find((o)=>o.id === e);
            return a ? a.isHumanControlled ? (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), {
                type: "WAIT_FOR_INPUT"
            }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), {
                type: "LLM_CALL",
                messages: Dt(this.session, t),
                callbackPhase: "player_action",
                llmRequestType: "dnd_player_action",
                dataExtra: {
                    characterId: a.id,
                    characterName: a.name,
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
            const a = this.session.modeConfig.playerCharacterSnapshots.find((r)=>r.id === e.playerId);
            if (!a) return console.error(`[DndManager] 检定角色 ${e.playerId} 不存在`), this.enterNextState("dm_narrate"), {
                type: "STATE_CHANGE"
            };
            const o = dt(e, a.attributes);
            return this.session.modeState.lastCheckResult = o, t.addHistoryItem({
                id: R(),
                type: "dnd_roll_result",
                idx: 0,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    checkSpec: e,
                    checkResult: o,
                    characterName: a.name,
                    attributeName: e.attribute
                }
            }), this.setCurrentUIState(this.getDoneUIStateForPhase("fn_roll_check")), this.enterNextState("dm_tell_result"), {
                type: "STATE_CHANGE"
            };
        }
        handleLLMResponse(t, e, a) {
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
                        const o = ut(e);
                        if (o) {
                            const r = this.session.modeConfig.playerCharacterSnapshots.find((i)=>i.id === o.nextPlayerId);
                            a.addHistoryItem({
                                id: R(),
                                type: "dnd_assign_player",
                                idx: 0,
                                orderRef: 0,
                                timestamp: Date.now(),
                                data: {
                                    nextPlayerId: o.nextPlayerId,
                                    nextPlayerName: r?.name,
                                    reason: o.reason,
                                    isHumanControlled: r?.isHumanControlled
                                },
                                hidden: !0
                            }), a.addHistoryItem({
                                id: R(),
                                type: "dnd_system_notice",
                                idx: 0,
                                orderRef: 0,
                                timestamp: Date.now(),
                                data: {
                                    content: `轮到 ${r?.name || o.nextPlayerId} 行动`,
                                    noticeType: "turn_start",
                                    characterId: o.nextPlayerId,
                                    characterName: r?.name
                                }
                            }), this.setCurrentTurn(o.nextPlayerId), this.enterNextState("player_action");
                        } else console.warn("[DndManager] 解析 DM 指定角色失败，重试"), this.enterNextState("dm_assign_player");
                        break;
                    }
                case "player_action":
                    {
                        this.setCurrentUIState(this.getDoneUIStateForPhase("player_action"));
                        const o = this.session.modeState.currentTurnCharacterId;
                        this.incrementTurnCount(o), this.enterNextState("dm_check_eval");
                        break;
                    }
                case "dm_check_eval":
                    this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_eval")), this.enterNextState("dm_check_decision");
                    break;
                case "dm_check_decision":
                    {
                        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_decision"));
                        const o = lt(e);
                        a.addHistoryItem({
                            id: R(),
                            type: "dnd_check_decision",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                needsCheck: o?.needsCheck ?? !1,
                                checkSpec: o?.needsCheck ? o.checkSpec : void 0,
                                rawContent: e
                            },
                            hidden: !0
                        }), o?.needsCheck && "checkSpec" in o ? (console.log("[DndManager] 检定决策：需要检定", o.checkSpec), this.session.modeState.lastCheckSpec = o.checkSpec, this.enterNextState("fn_roll_check")) : o === null ? (console.warn("[DndManager] 检定决策解析失败，重试 dm_check_decision"), this.enterNextState("dm_check_decision")) : (console.log("[DndManager] 检定决策：无需检定，直接进入叙事"), this.enterNextState("dm_narrate"));
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
    const l = Y({
        currentSession: null,
        contextManager: null,
        sessionManager: null,
        loadSession (n, t) {
            this.currentSession = n, this.currentSession.modeState.currentUIState = "idle", this.sessionManager = Ce(new Nt(this.currentSession));
            const e = Y(t || {
                historyItems: [],
                processingItem: void 0
            });
            this.contextManager = new ze(e);
        },
        setCurrentTurn (n) {
            this.sessionManager && this.sessionManager.setCurrentTurn(n);
        },
        incrementRound () {
            this.sessionManager && this.sessionManager.incrementRound();
        },
        setPhase (n) {
            this.currentSession && (this.currentSession.modeState.currentPhase = n);
        },
        updateCharacterAttributes (n, t) {
            if (!this.currentSession) return;
            const e = this.currentSession.modeConfig.playerCharacterSnapshots.find((a)=>a.id === n);
            e && Object.assign(e.attributes, t);
        },
        toggleCharacterControl (n) {
            if (!this.currentSession) return;
            const t = this.currentSession.modeConfig.playerCharacterSnapshots.find((e)=>e.id === n);
            t && (t.isHumanControlled = !t.isHumanControlled, this.currentSession.updatedAt = Date.now());
        },
        updateCharacterHP (n, t) {
            if (!this.currentSession) return;
            const e = this.currentSession.modeConfig.playerCharacterSnapshots.find((a)=>a.id === n);
            e && (e.currentHP = Math.max(0, Math.min(t, e.maxHP)));
        },
        async saveNewContextItemsToDB (n, t) {
            const { SessionDB: e } = await Q(async ()=>{
                const { SessionDB: r } = await import("./db-master-b5fCn9mB.js").then((i)=>i.A);
                return {
                    SessionDB: r
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])), a = new e(n);
            let o;
            try {
                o = V(t);
            } catch  {
                o = JSON.parse(JSON.stringify(t));
            }
            await a.addContextItems(o);
        },
        async updateSessionInDB () {
            if (!this.currentSession) return;
            const { masterDb: n } = await Q(async ()=>{
                const { masterDb: a } = await import("./db-master-b5fCn9mB.js").then((o)=>o.D);
                return {
                    masterDb: a
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])), t = V(this.currentSession.modeState), e = V(this.currentSession.modeConfig);
            await n.sessions.update(this.currentSession.id, {
                modeState: t,
                modeConfig: e,
                updatedAt: Date.now()
            });
        }
    });
    function jt() {
        const n = Xe((p)=>qe(p.config)), t = b.useRef(!1), e = b.useRef(async ()=>{}), a = b.useRef(!1), [o, r] = b.useState("running"), i = b.useCallback(()=>{
            t.current = !1, a.current && r("paused");
        }, []), d = ie(), u = b.useCallback(async (p, x, _, y, h = {})=>{
            const D = l.contextManager;
            if (!D) return {
                content: ""
            };
            const P = {
                id: R(),
                type: _,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: "",
                    ...h
                }
            };
            D.setProcessingItem(P);
            let w = "";
            return await Ke(p, x, [], (I, F)=>{
                y?.(I), w = F;
                const v = D.getProcessingItem();
                v && (v.data.content = F);
            }), D.completeProcessingItem(), {
                content: w
            };
        }, []), m = b.useCallback((p, x, _)=>{
            const y = l.sessionManager, h = l.contextManager;
            y && h && y.handleLLMResponse(p.callbackPhase, x, h);
        }, []), M = b.useCallback(async (p, x)=>{
            const _ = l.sessionManager, y = l.contextManager;
            if (!(_ && y)) {
                i();
                return;
            }
            const h = await _.executeCurrentStateLogic(y);
            if (console.log("[DndLoop] Action:", h), h.type === "WAIT_FOR_INPUT" || h.type === "STOP") {
                await l.updateSessionInDB(), i();
                return;
            }
            if (h.type === "STATE_CHANGE") {
                if (await l.updateSessionInDB(), a.current) {
                    console.log("[DndLoop] 游戏已暂停（STATE_CHANGE 后）"), i();
                    return;
                }
                setTimeout(()=>{
                    e.current(p.id);
                }, 0);
                return;
            }
            if (h.type === "LLM_CALL") {
                if (h.callbackPhase) {
                    const P = h.callbackPhase;
                    _.setCurrentUIState(_.getRunningUIStateForPhase(P));
                }
                await l.updateSessionInDB();
                const D = await u(x, h.messages.map((P)=>({
                        ...P,
                        id: R()
                    })), h.llmRequestType, void 0, h.dataExtra);
                if (await l.saveNewContextItemsToDB(p.id, y.getHistoryItems()), m(h, D.content, p.id), await l.updateSessionInDB(), a.current) {
                    console.log("[DndLoop] 游戏已暂停（LLM_CALL 完成后）"), i();
                    return;
                }
                setTimeout(()=>{
                    e.current(p.id);
                }, 0);
            }
        }, [
            u,
            m,
            i
        ]), f = b.useCallback(async (p)=>{
            const x = l.currentSession;
            if (!x || x.id !== p) {
                i();
                return;
            }
            if (a.current) {
                i();
                return;
            }
            const _ = {
                ...n
            };
            try {
                t.current = !0, await M(x, _);
            } catch (y) {
                console.error("[DndLoop] Critical Error:", y), W.error("对话服务调用失败，请打开 AI 设置检查连接", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>d({
                                to: "/config/llm"
                            })
                    }
                }), l.contextManager?.setProcessingItem(void 0), i();
            }
        }, [
            n,
            d,
            M,
            i
        ]);
        e.current = f;
        const $ = b.useCallback(async (p, x)=>{
            if (t.current || a.current) return;
            const _ = l.currentSession, y = l.contextManager, h = l.sessionManager;
            if (!(_ && y && h)) {
                console.warn("[DndLoop] Session or Managers not ready");
                return;
            }
            try {
                if (p) {
                    if (h.getCurrentPhase() !== "player_action") {
                        W.warning("当前并非该角色的行动回合");
                        return;
                    }
                    const D = _.modeState.currentTurnCharacterId, P = _.modeConfig.playerCharacterSnapshots.find((I)=>I.id === D);
                    if (!P?.isHumanControlled) {
                        W.warning("当前角色由 AI 控制，无法手动输入");
                        return;
                    }
                    t.current = !0, h.setCurrentUIState(h.getRunningUIStateForPhase("player_action"));
                    const w = {
                        id: R(),
                        type: "dnd_player_action",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            content: p,
                            characterId: D,
                            characterName: P.name,
                            isHumanControlled: !0
                        }
                    };
                    y.addHistoryItem(w), x?.(), await l.saveNewContextItemsToDB(_.id, y.getHistoryItems()), h.incrementTurnCount(D), h.setCurrentUIState(h.getDoneUIStateForPhase("player_action")), h.enterNextState("dm_check_eval"), await l.updateSessionInDB();
                }
                await f(_.id);
            } catch (D) {
                throw i(), D;
            }
        }, [
            f,
            i
        ]), T = b.useCallback(()=>{
            a.current || (a.current = !0, r(t.current ? "pausing" : "paused"), console.log("[DndLoop] 暂停请求已发出"));
        }, []), g = b.useCallback(()=>{
            if (!a.current || t.current) return;
            a.current = !1, r("running"), console.log("[DndLoop] 恢复游戏");
            const p = l.currentSession;
            p && !t.current && f(p.id);
        }, [
            f
        ]);
        return {
            nextStep: $,
            isCallingRef: t,
            pauseState: o,
            pauseGame: T,
            resumeGame: g
        };
    }
    const Pt = L({
        力量: j().describe("力量属性值"),
        敏捷: j().describe("敏捷属性值"),
        体质: j().describe("体质属性值"),
        智力: j().describe("智力属性值"),
        感知: j().describe("感知属性值"),
        魅力: j().describe("魅力属性值")
    }), wt = L({
        intent: S().describe("检定意图"),
        type: K([
            "attribute",
            "saving",
            "attack"
        ]).describe("检定类型"),
        attribute: S().describe("检定维度"),
        dc: j().describe("目标数值 (DC)"),
        playerId: S().describe("执行检定的角色 ID")
    }), $t = L({
        naturalRoll: j().describe("骰子原值"),
        total: j().describe("总值 (原值 + 修正)"),
        modifier: j().describe("属性修正"),
        isSuccess: ce().describe("是否成功")
    }), vt = K([
        "dm_game_intro",
        "dm_narrate",
        "dm_assign_player",
        "player_action",
        "dm_check_eval",
        "dm_check_decision",
        "fn_roll_check",
        "dm_tell_result"
    ]), Tt = K([
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
    ]), ne = {
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
    }, Rt = K([
        "standard",
        "narrative",
        "hardcore",
        "solo"
    ]), Lt = L({
        id: S().describe("角色 ID"),
        name: S().describe("角色名称"),
        description: S().describe("角色描述"),
        avatar: S().optional().describe("角色头像"),
        systemPrompt: S().describe("角色扮演指引"),
        attributes: Pt.describe("角色属性"),
        race: S().optional().describe("种族"),
        class: S().optional().describe("职业"),
        currentHP: j().describe("当前生命值"),
        maxHP: j().describe("最大生命值"),
        isHumanControlled: ce().describe("是否由人类控制")
    }), At = L({
        name: S().describe("世界名称"),
        description: S().describe("世界描述"),
        systemPrompt: S().describe("核心系统提示词"),
        globalKnowledge: S().optional().describe("世界观补充")
    }), Ut = L({
        worldSnapshot: At.describe("世界设定快照"),
        gameMode: Rt.describe("玩法模式"),
        playerCharacterSnapshots: Ve(Lt).describe("参与角色快照列表"),
        dmName: S().optional().describe("DM 显示名称")
    }), Et = L({
        currentPhase: vt.describe("当前阶段名称"),
        currentUIState: Tt.describe("当前 UI 状态名称"),
        currentTurnCharacterId: S().describe("当前行动角色 ID ('dm' 或角色ID)"),
        currentRound: j().describe("当前回合数"),
        turnCounts: We(S(), j()).describe("每个角色的行动次数统计"),
        lastCheckSpec: wt.optional().describe("最近一次检定规范"),
        lastCheckResult: $t.optional().describe("最近一次检定结果"),
        historySummary: S().describe("历史摘要")
    });
    Be.extend({
        mode: Ye("dnd").describe("模式"),
        modeConfig: Ut.describe("DnD 模式配置"),
        modeState: Et.describe("DnD 模式状态")
    });
    let Ht, q, ae, Ft, Bt;
    Un = (n)=>{
        const t = ie(), [e, a] = b.useState(""), o = De(), [r, i] = b.useState(!1), [d, u] = b.useState(!1), m = be(l), { data: M = [] } = Fe((c)=>c.from({
                s: Oe
            })), f = M.find((c)=>c.id === n.sessionId);
        b.useEffect(()=>{
            let c = !1;
            if (!f) return;
            if (l.currentSession?.id === f.id && l.contextManager) {
                u(!0);
                return;
            }
            return (async ()=>{
                try {
                    const k = await Ge.createSessionDB(f.id).getContextItems();
                    if (c) return;
                    l.loadSession(f, {
                        historyItems: k,
                        processingItem: void 0
                    }), u(!0);
                } catch (N) {
                    console.error("[DnD] Load session error", N);
                }
            })(), ()=>{
                c = !0;
            };
        }, [
            f?.id,
            f
        ]);
        const { nextStep: $, pauseState: T, pauseGame: g, resumeGame: p } = jt(), x = T === "paused", _ = T === "pausing", y = _ ? "即将暂停" : x ? "已暂停" : null, h = async ()=>{
            if (r) return;
            const c = l.sessionManager, C = l.contextManager;
            if (c && C) {
                i(!0);
                try {
                    Qe(n.sessionId, "dnd");
                    const N = c.getActualCurrentPhase(C);
                    c.enterNextState(N), c.setCurrentUIState(c.getReadyUIStateForPhase(N)), await l.updateSessionInDB(), await $();
                } finally{
                    i(!1);
                }
            }
        };
        if (!(f && d)) return s.jsxs("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
            children: [
                s.jsx(J, {
                    className: "size-8",
                    "aria-label": "正在加载"
                }),
                s.jsx("p", {
                    className: "text-xs font-medium tracking-widest uppercase opacity-50",
                    children: "正在构建冒险世界..."
                })
            ]
        });
        const D = ()=>{
            const c = e;
            return o.submit(c, !v, ()=>a(""), async (C)=>{
                const N = ()=>{
                    C(), et(n.sessionId, "dnd");
                };
                i(!0);
                try {
                    await $(c, N);
                } finally{
                    i(!1);
                }
            });
        }, P = l.sessionManager && l.contextManager ? l.sessionManager.getActualCurrentUIState(l.contextManager) : m.currentSession?.modeState?.currentUIState || "idle", w = ne[P] || ne.idle, I = m.currentSession?.modeConfig?.playerCharacterSnapshots?.find((c)=>c.id === m.currentSession?.modeState?.currentTurnCharacterId), F = !!I?.isHumanControlled, v = T !== "running" || r || !w.inputEnabled || w.inputEnabled && !F, _e = ()=>{
            g();
        }, ge = ()=>{
            p();
        }, fe = async (c)=>{
            const C = l.currentSession?.modeConfig.playerCharacterSnapshots.find((xe)=>xe.id === c);
            if (!C) return;
            const N = C.isHumanControlled;
            l.toggleCharacterControl(c), await l.updateSessionInDB();
            const k = c === l.currentSession?.modeState.currentTurnCharacterId, Se = l.sessionManager?.getCurrentPhase();
            N && k && Se === "player_action" && !r && await $();
        }, ye = ()=>{
            t({
                to: "/plaza"
            });
        };
        return s.jsx("div", {
            className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden bg-background",
            children: s.jsxs("div", {
                className: "flex min-h-0 min-w-0 flex-1 flex-col",
                children: [
                    s.jsx($e, {
                        title: m.currentSession?.modeConfig?.worldSnapshot?.name || "DnD 冒险",
                        subtitle: "DnD 冒险",
                        actions: s.jsxs(s.Fragment, {
                            children: [
                                P !== "idle" && s.jsxs(X, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "sm",
                                    disabled: _,
                                    onClick: x ? ge : _e,
                                    children: [
                                        _ ? s.jsx(J, {
                                            "data-icon": "inline-start"
                                        }) : x ? s.jsx(tt, {
                                            "data-icon": "inline-start"
                                        }) : s.jsx(nt, {
                                            "data-icon": "inline-start"
                                        }),
                                        _ ? "即将暂停" : x ? "继续" : "暂停"
                                    ]
                                }),
                                s.jsxs(ve, {
                                    label: "冒险详情",
                                    description: "查看冒险者属性、生命值并调整角色控制权。",
                                    children: [
                                        s.jsx(E, {
                                            variant: "secondary",
                                            children: {
                                                standard: "标准模式",
                                                narrative: "叙事模式",
                                                hardcore: "硬核模式",
                                                solo: "单人模式"
                                            }[m.currentSession?.modeConfig.gameMode || "standard"]
                                        }),
                                        s.jsx("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: m.currentSession?.modeConfig?.worldSnapshot?.description
                                        }),
                                        (m.currentSession?.modeConfig?.playerCharacterSnapshots || []).map((c)=>s.jsxs(Me, {
                                                children: [
                                                    s.jsx(Ne, {
                                                        children: s.jsxs(je, {
                                                            className: "flex min-w-0 items-center gap-2",
                                                            children: [
                                                                s.jsx(de, {
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
                                                    s.jsxs(Pe, {
                                                        className: "flex flex-col gap-3",
                                                        children: [
                                                            s.jsxs("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: [
                                                                    c.race,
                                                                    " · ",
                                                                    c.class,
                                                                    " · 行动 ",
                                                                    m.currentSession?.modeState.turnCounts?.[c.id] || 0,
                                                                    " 次"
                                                                ]
                                                            }),
                                                            s.jsxs("div", {
                                                                className: "flex items-center justify-between gap-2",
                                                                children: [
                                                                    s.jsx("span", {
                                                                        className: "text-sm",
                                                                        children: "由玩家控制"
                                                                    }),
                                                                    s.jsx(Ze, {
                                                                        "aria-label": `由玩家控制 ${c.name}`,
                                                                        checked: c.isHumanControlled,
                                                                        onCheckedChange: ()=>fe(c.id)
                                                                    })
                                                                ]
                                                            }),
                                                            s.jsxs("p", {
                                                                className: "text-sm",
                                                                children: [
                                                                    "生命 ",
                                                                    c.currentHP,
                                                                    "/",
                                                                    c.maxHP
                                                                ]
                                                            }),
                                                            s.jsx(we, {
                                                                value: c.maxHP > 0 ? Math.max(0, Math.min(100, c.currentHP / c.maxHP * 100)) : 0,
                                                                "aria-label": `${c.name}生命值`
                                                            }),
                                                            s.jsx("dl", {
                                                                className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
                                                                children: Object.entries(c.attributes || {}).map(([C, N])=>s.jsxs("div", {
                                                                        children: [
                                                                            s.jsx("dt", {
                                                                                className: "text-xs text-muted-foreground",
                                                                                children: C
                                                                            }),
                                                                            s.jsx("dd", {
                                                                                className: "text-sm tabular-nums",
                                                                                children: N
                                                                            })
                                                                        ]
                                                                    }, C))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, c.id)),
                                        s.jsxs(X, {
                                            type: "button",
                                            variant: "outline",
                                            onClick: ye,
                                            children: [
                                                s.jsx(at, {
                                                    "data-icon": "inline-start"
                                                }),
                                                "退出冒险"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    s.jsxs(Te, {
                        children: [
                            s.jsxs(E, {
                                variant: "outline",
                                children: [
                                    "第 ",
                                    m.currentSession?.modeState.currentRound || 1,
                                    " 回合"
                                ]
                            }),
                            s.jsx(E, {
                                variant: "secondary",
                                children: y ?? w.label
                            }),
                            I && s.jsxs(s.Fragment, {
                                children: [
                                    s.jsx(E, {
                                        variant: "outline",
                                        className: "max-w-full min-w-0",
                                        children: s.jsxs("span", {
                                            className: "truncate",
                                            children: [
                                                "当前行动：",
                                                I.name
                                            ]
                                        })
                                    }),
                                    s.jsxs(E, {
                                        variant: "secondary",
                                        children: [
                                            "生命 ",
                                            I.currentHP,
                                            "/",
                                            I.maxHP
                                        ]
                                    }),
                                    s.jsx(E, {
                                        variant: "outline",
                                        children: I.isHumanControlled ? "玩家操作" : "AI 控制"
                                    })
                                ]
                            })
                        ]
                    }),
                    s.jsx(Ie, {
                        children: (()=>{
                            const c = (m.contextManager?.state.historyItems || []).filter((k)=>!k.hidden), C = m.contextManager?.state.processingItem;
                            if (P === "idle") {
                                const k = c.length === 0 ? "开始冒险" : "继续冒险";
                                return s.jsx(Z, {
                                    messageId: "conversation-start",
                                    children: s.jsxs("div", {
                                        className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                                        children: [
                                            s.jsx("div", {
                                                className: "size-24 rounded-4xl bg-primary/10 flex items-center justify-center mb-8 shadow-2xl shadow-primary/10 ring-8 ring-primary/5 rotate-3 hover:rotate-6 transition-transform duration-500",
                                                children: s.jsx(st, {
                                                    className: "size-10 text-primary drop-shadow-sm"
                                                })
                                            }),
                                            s.jsx("h2", {
                                                className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                                                children: m.currentSession?.modeConfig?.worldSnapshot?.name || "DnD 冒险"
                                            }),
                                            s.jsx("p", {
                                                className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm",
                                                children: m.currentSession?.modeConfig?.worldSnapshot?.description || "一段全新的冒险旅程即将展开，准备好掷出命运的骰子了吗？"
                                            }),
                                            s.jsxs(X, {
                                                type: "button",
                                                size: "lg",
                                                className: "h-16 px-12 transition-all hover:scale-105 active:scale-95 uppercase",
                                                onClick: h,
                                                disabled: r,
                                                children: [
                                                    r ? s.jsx(J, {
                                                        "data-icon": "inline-start"
                                                    }) : s.jsx(rt, {
                                                        "data-icon": "inline-start"
                                                    }),
                                                    k
                                                ]
                                            }),
                                            s.jsxs("div", {
                                                className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest",
                                                children: [
                                                    s.jsxs("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            s.jsx(le, {
                                                                className: "size-3"
                                                            }),
                                                            " D20 检定"
                                                        ]
                                                    }),
                                                    s.jsxs("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            s.jsx(ot, {
                                                                className: "size-3"
                                                            }),
                                                            " 多人冒险"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                });
                            }
                            const N = [
                                ...c
                            ];
                            return C && !C.hidden && !c.some((k)=>k.id === C.id) && N.push(C), N.map((k)=>s.jsx(Z, {
                                    messageId: k.id,
                                    scrollAnchor: k.type === "participant_message" || k.type === "gc_user_message",
                                    children: s.jsx(Ht, {
                                        item: k,
                                        participants: m.currentSession?.modeConfig?.playerCharacterSnapshots || []
                                    })
                                }, k.id));
                        })()
                    }, n.sessionId),
                    s.jsxs("div", {
                        className: "border-t px-3 py-2 sm:px-5 shrink-0 bg-background",
                        children: [
                            s.jsx(ke, {
                                draft: e,
                                onRestore: a,
                                text: o.failure,
                                onDismiss: o.dismiss
                            }),
                            s.jsxs(Ue, {
                                className: "mx-auto max-w-4xl",
                                children: [
                                    s.jsx(Ee, {
                                        "aria-label": "消息内容",
                                        value: e,
                                        onChange: (c)=>a(c.target.value),
                                        placeholder: y ? _ ? "即将暂停，等待当前步骤完成..." : "已暂停，点击继续恢复冒险" : v ? w.inputEnabled && !F ? `${I?.name || "角色"} 由 AI 控制，等待自动行动...` : w.placeholder : `作为 ${I?.name || "角色"}，描述你的行动...`,
                                        disabled: v,
                                        rows: 1,
                                        className: "min-h-10 max-h-[min(10rem,25dvh)] overflow-y-auto",
                                        onKeyDown: (c)=>{
                                            c.key === "Enter" && !c.shiftKey && !c.nativeEvent.isComposing && c.keyCode !== 229 && (c.preventDefault(), D());
                                        }
                                    }),
                                    s.jsx(He, {
                                        align: "inline-end",
                                        className: "self-end pb-1.5",
                                        children: s.jsx(X, {
                                            "aria-label": "发送消息",
                                            type: "button",
                                            size: "icon",
                                            disabled: !e.trim() || v,
                                            onClick: D,
                                            children: r ? s.jsx(J, {
                                                "data-icon": "inline-start"
                                            }) : s.jsx(it, {
                                                "data-icon": "inline-start"
                                            })
                                        })
                                    })
                                ]
                            }),
                            s.jsxs("div", {
                                className: "max-w-4xl mx-auto mt-1 flex flex-wrap items-center justify-end gap-2 px-2 text-xs text-muted-foreground",
                                children: [
                                    I && s.jsx("span", {
                                        className: "mr-auto",
                                        children: `${I.name} 的回合 (${I.isHumanControlled ? "玩家操作" : "AI 自动"})`
                                    }),
                                    s.jsx("span", {
                                        children: y ?? (v ? "等待中..." : "Shift + Enter 换行")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    };
    Ht = ({ item: n, participants: t })=>{
        switch(n.type){
            case "dnd_dm_intro":
                return s.jsx(q, {
                    content: n.data.content,
                    title: "开场叙事"
                });
            case "dnd_dm_narrate":
                return s.jsx(q, {
                    content: n.data.content
                });
            case "dnd_player_action":
                return s.jsx(ae, {
                    item: n,
                    participants: t
                });
            case "dnd_roll_result":
                return s.jsx(Ft, {
                    item: n
                });
            case "dnd_system_notice":
                return s.jsx(Bt, {
                    item: n
                });
            case "dnd_assign_player":
                return null;
            case "dnd_check_decision":
                return null;
            case "participant_message":
                return n.data?.isDM ? s.jsx(q, {
                    content: n.data.content
                }) : s.jsx(ae, {
                    item: n,
                    participants: t
                });
            case "system_notification":
                return s.jsx(se, {
                    variant: "separator",
                    children: s.jsx(re, {
                        children: n.data.content
                    })
                });
            default:
                return n.data?.content ? s.jsx(q, {
                    content: n.data.content,
                    title: "消息"
                }) : null;
        }
    };
    q = ({ content: n, title: t = "Dungeon Master" })=>{
        const e = he(n);
        return s.jsxs(oe, {
            name: t,
            children: [
                e.think && s.jsxs("div", {
                    className: "text-xs italic text-muted-foreground/50 mb-3 rounded-md border p-3",
                    children: [
                        s.jsx("span", {
                            className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1",
                            children: "DM 思考"
                        }),
                        e.think
                    ]
                }),
                e.speak && s.jsxs("div", {
                    className: "mb-2",
                    children: [
                        s.jsx("span", {
                            className: "text-primary/80 font-bold",
                            children: "“"
                        }),
                        s.jsx("span", {
                            className: "italic",
                            children: e.speak
                        }),
                        s.jsx("span", {
                            className: "text-primary/80 font-bold",
                            children: "”"
                        })
                    ]
                }),
                e.action && s.jsx("div", {
                    className: "text-foreground/70",
                    children: e.action
                }),
                !(e.think || e.speak || e.action) && e.rawText
            ]
        });
    };
    ae = ({ item: n, participants: t })=>{
        const e = n.data, a = he(e.content || ""), o = e.characterId || e.participantId, r = t?.find((u)=>u.id === o), i = r?.name || e.characterName || e.name || "冒险者", d = r?.isHumanControlled ?? (e.isHumanControlled || e.isUser);
        return s.jsxs(oe, {
            name: i,
            fromUser: !!d,
            avatar: s.jsx(de, {
                character: r,
                size: "sm"
            }),
            children: [
                a.think && s.jsxs("div", {
                    className: "text-xs italic text-muted-foreground/50 mb-3 rounded-md border p-3",
                    children: [
                        s.jsx("span", {
                            className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1",
                            children: "内心想法"
                        }),
                        a.think
                    ]
                }),
                a.speak && s.jsxs("div", {
                    className: "mb-2 font-medium",
                    children: [
                        "“",
                        a.speak,
                        "”"
                    ]
                }),
                a.action && s.jsx("div", {
                    className: "text-foreground/70",
                    children: a.action
                }),
                !(a.think || a.speak || a.action) && a.rawText
            ]
        });
    };
    Ft = ({ item: n })=>{
        const t = n.data, e = t.checkResult, a = t.characterName || "角色", o = t.attributeName || "属性";
        if (!e) return null;
        const r = e.isSuccess, i = e.naturalRoll === 20, d = e.naturalRoll === 1;
        return s.jsxs(Re, {
            variant: r ? "default" : "destructive",
            children: [
                s.jsx(le, {}),
                s.jsx(Le, {
                    children: i ? "大成功！" : d ? "大失败！" : r ? "检定成功" : "检定失败"
                }),
                s.jsxs(Ae, {
                    children: [
                        s.jsxs("p", {
                            children: [
                                a,
                                " · ",
                                o,
                                " 检定"
                            ]
                        }),
                        s.jsxs("p", {
                            children: [
                                "掷骰 ",
                                e.naturalRoll,
                                e.modifier >= 0 ? "+" : "",
                                e.modifier,
                                " = ",
                                e.total,
                                "，难度 ",
                                t.checkSpec?.dc ?? "?"
                            ]
                        })
                    ]
                })
            ]
        });
    };
    Bt = ({ item: n })=>{
        const t = n.data, e = t.noticeType;
        return s.jsx(se, {
            variant: "separator",
            children: s.jsx(re, {
                children: e === "turn_start" && t.characterName ? `${t.characterName} 的回合` : t.content || "系统通知"
            })
        });
    };
});
export { Un as SessionMainForDnd, __tla };
