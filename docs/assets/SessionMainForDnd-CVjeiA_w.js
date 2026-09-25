const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-kA5b7Kkp.js","assets/@tanstack-B5tCGMiu.js","assets/react-BxzVs1F-.js","assets/vendor-CJLoHUZS.js","assets/formatting-YGyf6cFc.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-CG_LwvPM.js","assets/zod-BTj0C3yc.js","assets/analytics-DHqd3KZu.js","assets/nex-tavern-uuid-Cz-4R4MI.js","assets/index-CRWqN2Z9.js","assets/icons-C6_pGF5j.js","assets/index-vWucJHKa.css","assets/id-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { e as Y, an as V, aF as xe, r as b, t as W, u as Ce, j as s } from "./react-BxzVs1F-.js";
import { C as be, a as De, b as Ie, d as ke } from "./card-BRzat3Z6.js";
import { P as Me } from "./progress-BqjBAGm9.js";
import { S as Ne, a as je, b as Pe, __tla as __tla_0 } from "./session._sessionId-Dltd-iUG.js";
import { A as we, a as $e, b as ve } from "./alert-B1_JhIZd.js";
import { S as J } from "./spinner-CFrUWQbp.js";
import { C as Te, M as Z, b as se, c as re, a as oe } from "./conversation-message-D83NGiDb.js";
import { I as Re, d as Le, b as Ae } from "./input-group-0WwM74BH.js";
import { h as ie, k as Ue } from "./@tanstack-B5tCGMiu.js";
import { j as Ee, S as He } from "./db-master-kA5b7Kkp.js";
import { s as Fe } from "./db-BPqhYfj0.js";
import { _ as Q, __tla as __tla_1 } from "./index-CRWqN2Z9.js";
import { C as Be } from "./context-manager.class-D5bFB92s.js";
import { n as v } from "./id-BY9c7rfI.js";
import { S as Oe } from "./session-manager.class-CGxSDPWB.js";
import { B as X } from "./button-BRW5UoPv.js";
import { B as A } from "./badge-Cxz86jq2.js";
import { u as Ge, g as ze, d as Je } from "./collapsible-kCge2IUx.js";
import { o as T, n as M, s as S, _ as K, c as ce, b as Xe, r as qe, l as Ke } from "./zod-BTj0C3yc.js";
import { S as Ve } from "./switch-CO9-2KPd.js";
import { C as de } from "./CharacterAvatar-K7qbQSdG.js";
import { b as We, a as Ye } from "./analytics-DHqd3KZu.js";
import { av as Ze, aw as Qe, a2 as et, n as tt, R as nt, ad as le, i as at, b as st } from "./icons-C6_pGF5j.js";
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
import "./empty-CXeTqhb2.js";
import "./InvitationGuard-EXAZNTBq.js";
import "./nex-tavern-uuid-Cz-4R4MI.js";
import "./reading-settings.store-BJDH9hBu.js";
import "./textarea-CT6wyGoV.js";
import "./dexie-CG_LwvPM.js";
import "./es-toolkit-9bjl2JfA.js";
import "./avatar-D3rOZ_4f.js";
let Rn;
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
    ], rt = {
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
    function ot(n, t) {
        const e = pe(n.attribute), a = e ? t[e] : void 0;
        if (typeof a != "number") return console.warn("[DndUtils] 检定属性无效，按 +0 修正处理", {
            rawAttribute: n.attribute,
            normalizedAttribute: e,
            availableAttributes: Object.keys(t)
        }), ee(n.dc, 0);
        const r = me(a);
        return ee(n.dc, r);
    }
    function it(n) {
        try {
            const t = n.match(/```(?:json)?\s*\n?([\s\S]*?)```/), e = t ? t[1].trim() : n.trim(), a = e.indexOf("{"), r = e.lastIndexOf("}") + 1;
            if (a < 0 || r <= a) return console.warn("[DndUtils] 检定决策解析失败：未找到 JSON 块", n.slice(0, 200)), null;
            const o = JSON.parse(e.slice(a, r));
            if (o.none === !0 || o.none === "true") return {
                needsCheck: !1
            };
            const i = o.playerId || o.player_id || o.角色ID || o.执行者ID, l = o.attribute || o.属性 || o.检定维度, d = typeof i == "string" ? i.trim() : "", y = pe(l), g = Number(o.dc || o.DC || o.目标数值 || o.难度 || 0);
            return d && y && g > 0 ? {
                needsCheck: !0,
                checkSpec: {
                    intent: o.intent || o.意图 || o.reason || o.具体意图 || "",
                    type: o.type || "attribute",
                    attribute: y,
                    dc: g,
                    playerId: d
                }
            } : (y || console.warn("[DndUtils] 检定属性解析失败，原始值:", l), console.warn("[DndUtils] 检定决策 JSON 字段不完整:", o), null);
        } catch (t) {
            return console.warn("[DndUtils] 检定决策解析异常:", t, n.slice(0, 200)), null;
        }
    }
    function ct(n) {
        try {
            const t = n.indexOf("{"), e = n.lastIndexOf("}") + 1;
            if (t < 0 || e <= t) return null;
            const a = JSON.parse(n.slice(t, e)), r = a.nextPlayerId || a.指定的玩家ID;
            return r ? {
                nextPlayerId: r,
                reason: a.reason || a.原因 || ""
            } : null;
        } catch  {
            return null;
        }
    }
    function dt(n) {
        const t = n.replace(/<[^>]*$/, ""), e = [], a = /<\/?([a-zA-Z]\w*)[^>]*>/g;
        let r;
        for(; (r = a.exec(t)) !== null;){
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
    function lt(n, t) {
        let e = n;
        return t.userName && (e = e.replace(/\{\{user\}\}/gi, t.userName), e = e.replace(/<USER>/gi, t.userName)), t.charName && (e = e.replace(/\{\{char\}\}/gi, t.charName), e = e.replace(/<BOT>/gi, t.charName)), e;
    }
    const ut = /<think>([\s\S]*?)<\/think>/, mt = /<speak>([\s\S]*?)<\/speak>/, ht = /<action>([\s\S]*?)<\/action>/;
    function he(n) {
        const t = dt(n), e = t.match(ut)?.[1]?.trim(), a = t.match(mt)?.[1]?.trim(), r = t.match(ht)?.[1]?.trim(), o = t.replace(/<\/?[a-zA-Z]\w*[^>]*>/g, "").trim();
        return {
            think: e,
            speak: a,
            action: r,
            rawText: o
        };
    }
    function H(n) {
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
    function pt(n) {
        return ue.includes(n);
    }
    function te(n) {
        const t = n.trim().replace(/["'`“”‘’]/g, "").replace(/^[\s:：-]+|[\s:：-]+$/g, "");
        if (!t) return null;
        if (pt(t)) return t;
        const e = rt[t.toLowerCase()];
        if (e) return e;
        const a = ue.filter((r)=>t.includes(r));
        return a.length === 1 ? a[0] : null;
    }
    function pe(n) {
        if (typeof n != "string") return null;
        const t = n.trim();
        if (!t) return null;
        const e = t.replace(/[（(][^）)]*[）)]/g, ""), a = te(e);
        return a || (t.split(/[|/、,，;；或]/).map((o)=>te(o)).filter((o)=>o !== null)[0] ?? null);
    }
    function F(n) {
        return n.modeConfig.worldSnapshot;
    }
    function R(n) {
        return n.modeConfig.playerCharacterSnapshots;
    }
    function _t(n, t) {
        return n.modeConfig.playerCharacterSnapshots.find((e)=>e.id === t);
    }
    function U(n, t) {
        return n.map((e)=>{
            const a = Object.entries(e.attributes).map(([o, i])=>`${o}:${i}(${me(i)})`).join(", "), r = t[e.id] || 0;
            return `- ${e.name} (ID: ${e.id}): ${a} (累计行动: ${r}次)`;
        }).join(`
`);
    }
    function B(n) {
        return n.map((t)=>`- ${t.name} (ID: ${t.id}): ${t.systemPrompt}`).join(`
`);
    }
    function O(n, t, e = 15) {
        const a = R(t);
        return n.getFlatHistoryItems(e).filter((r)=>!r.hidden && !r.deleted).map((r)=>{
            const { type: o, data: i } = r;
            if (o === "dnd_dm_intro" || o === "dnd_dm_narrate") return `[DM]: ${i.content}`;
            if (o === "dnd_player_action") return `[${i.characterName || a.find((d)=>d.id === i.characterId)?.name || i.characterId}]: ${i.content}`;
            if (o === "participant_message") return i.isDM ? `[DM]: ${i.content}` : `[${i.name || "玩家"}]: ${i.content}`;
            if (o === "dnd_roll_result") {
                const l = i.checkSpec, d = i.checkResult;
                return `[系统检定] ${l.intent}: 1d20(${d.naturalRoll}) + ${l.attribute}修正(${d.modifier}) = ${d.total} vs DC:${l.dc} → ${d.isSuccess ? "成功" : "失败"}`;
            }
            return o === "dnd_system_notice" ? `[系统]: ${i.content}` : null;
        }).filter(Boolean).join(`
`);
    }
    function gt(n) {
        return n.modeConfig.playerCharacterSnapshots.find((e)=>e.isHumanControlled)?.name || "冒险者";
    }
    function L(n, t, e) {
        const a = gt(t), r = e || t.modeConfig.dmName || "DM";
        return n.map((o)=>({
                ...o,
                content: lt(o.content, {
                    userName: a,
                    charName: r
                })
            }));
    }
    function ft(n, t) {
        const e = F(n), a = R(n), r = n.modeState.turnCounts, o = n.modeConfig.gameMode, i = `你是 DM (地下城主)。请为这个 DND 冒险创建引人入胜的开场介绍，设置世界背景和初始场景。
${H(o)}
${e.systemPrompt}
${e.globalKnowledge ? `
【世界观补充】
${e.globalKnowledge}` : ""}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, l = [
            "【游戏配置】",
            `DM: ${n.modeConfig.dmName || "DM"}`,
            `世界: ${e.name} — ${e.description}`,
            `参与角色:
${B(a)}`,
            `【初始数值状态】
${U(a, r)}`
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
        ], n);
    }
    function yt(n, t) {
        const e = F(n), a = R(n), r = n.modeState.turnCounts, o = n.modeConfig.gameMode, i = n.modeState.historySummary, l = `你是 DM。请根据当前剧情进展描写场景，推进故事。
不需要在此阶段指定角色或提出检定，只需描写。
${H(o)}
${e.systemPrompt}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, d = O(t, n, 10), y = [
            "【游戏配置】",
            `世界: ${e.name}`,
            `角色:
${B(a)}`,
            i ? `【剧情提要】
${i}` : "",
            d ? `【近期历史记录】
${d}` : "",
            `【数值状态】
${U(a, r)}`
        ].filter(Boolean).join(`

`);
        return L([
            {
                role: "system",
                content: l
            },
            {
                role: "user",
                content: y
            }
        ], n);
    }
    function St(n, t) {
        const e = R(n), a = n.modeState.turnCounts, r = n.modeConfig.gameMode, o = e.map((f)=>a[f.id] || 0), l = (o.length > 0 ? Math.min(...o) : 0) + 2, d = e.filter((f)=>(a[f.id] || 0) <= l).sort((f, m)=>(a[f.id] || 0) - (a[m.id] || 0)), y = `你是 DM。请根据刚才的叙事，从候选名单中指定【下一个】行动的角色。
${H(r)}
【公平性原则】：为了确保每个玩家都有平等的参与机会，你【必须】仅从以下提供的名单中选择。请优先考虑行动次数最少的角色。
【严格要求】：只需输出一个 JSON 块，不要包含任何叙事文字。
\`\`\`json
{ "reason": "原因", "nextPlayerId": "角色ID" }
\`\`\`
候选名单（仅限已行动次数较少的角色）：
${d.map((f)=>`- ${f.name} (ID: ${f.id}, 已行动: ${a[f.id] || 0}次)`).join(`
`)}`, g = t.getFlatHistoryItems(5);
        let D;
        for(let f = g.length - 1; f >= 0; f -= 1){
            const m = g[f];
            if (m.type === "dnd_dm_narrate" || m.type === "dnd_dm_intro") {
                D = m;
                break;
            }
        }
        const w = D ? `【当前场景】
${D.data.content}` : `【初始场景】
冒险开始。`, E = `【所有角色行动统计】
${e.map((f)=>`${f.name}: ${a[f.id] || 0} 次`).join(`
`)}`;
        return L([
            {
                role: "system",
                content: y
            },
            {
                role: "user",
                content: [
                    w,
                    E
                ].join(`

`)
            }
        ], n);
    }
    function xt(n, t) {
        const e = n.modeState.turnCounts, a = n.modeState.currentTurnCharacterId, r = _t(n, a), o = n.modeState.historySummary, i = n.modeConfig.gameMode;
        if (!r) return [];
        const l = `你是玩家 ${r.name} (${r.id})。${r.systemPrompt}
请基于当前场景和 DM 的引导决定你的行动。
${H(i)}
要求输出必须包含 XML 标签：<think>内心独白</think><speak>口头表达</speak><action>具体行动</action>。`, d = O(t, n, 8), y = U([
            r
        ], e), g = [
            `【你的角色信息】
${r.systemPrompt}`,
            o ? `【剧情提要】
${o}` : "",
            d ? `【当前场景】
${d}` : "",
            `【你的数值状态】
${y}`
        ].filter(Boolean).join(`

`);
        return L([
            {
                role: "system",
                content: l
            },
            {
                role: "user",
                content: g
            }
        ], n, r.name);
    }
    function Ct(n, t) {
        const e = F(n), a = R(n), r = n.modeState.turnCounts, o = n.modeState.historySummary, i = `你是 DM。请评价刚才玩家的行动，并描写其初步反应。
不要在此阶段输出检定 JSON，也不要描述最终结果。
${e.systemPrompt}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, l = O(t, n, 10), d = [
            `【游戏配置】
世界: ${e.name}
角色:
${B(a)}`,
            o ? `【剧情提要】
${o}` : "",
            l ? `【近期历史记录】
${l}` : "",
            `【数值状态】
${U(a, r)}`
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
        ], n);
    }
    function bt(n, t) {
        const e = F(n), a = R(n), r = n.modeState.turnCounts, o = n.modeState.historySummary, i = n.modeConfig.gameMode, l = `你是 DM。基于玩家刚才的行动，决定是否需要进行 DND 5e 检定。
${H(i)}
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
【严格要求】：只输出 JSON，不要任何叙事。`, d = O(t, n, 10), y = [
            `【游戏配置】
世界: ${e.name}
角色:
${B(a)}`,
            o ? `【剧情提要】
${o}` : "",
            d ? `【近期历史记录】
${d}` : "",
            `【角色数值状态】
${U(a, r)}`
        ].filter(Boolean).join(`

`);
        return L([
            {
                role: "system",
                content: l
            },
            {
                role: "user",
                content: y
            }
        ], n);
    }
    function Dt(n, t) {
        const e = F(n), a = R(n), r = n.modeState.turnCounts, o = n.modeState.historySummary, i = n.modeState.lastCheckResult, l = n.modeState.lastCheckSpec, d = `你是 DM。检定结果已出。请根据结果描述后果，并引导剧情。
${e.systemPrompt}
要求输出必须包含 XML 标签：<speak>DM发言</speak><action>环境变化</action>。`, y = O(t, n, 10), g = i && l ? `【检定结果】
意图: ${l.intent}
执行者: ${a.find((w)=>w.id === l.playerId)?.name || l.playerId}
骰子结果: ${i.total} (1d20:${i.naturalRoll} + 修正:${i.modifier}) vs DC:${l.dc}
结论: ${i.isSuccess ? "成功" : "失败"}
请根据此结果进行针对性的后果描述。` : "", D = [
            `【游戏配置】
世界: ${e.name}
角色:
${B(a)}`,
            o ? `【剧情提要】
${o}` : "",
            y ? `【近期历史记录】
${y}` : "",
            g,
            `【数值状态】
${U(a, r)}`
        ].filter(Boolean).join(`

`);
        return L([
            {
                role: "system",
                content: d
            },
            {
                role: "user",
                content: D
            }
        ], n);
    }
    class It extends Oe {
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
            const a = t.getFlatHistoryItems();
            for(let r = a.length - 1; r >= 0; r--){
                const o = a[r];
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
                const a = {
                    dnd_dm_intro: "dm_game_intro_running",
                    dnd_dm_narrate: "dm_narrate_running",
                    dnd_assign_player: "dm_assign_player_running",
                    dnd_player_action: "player_action_running",
                    dnd_check_decision: "dm_check_decision_running",
                    dnd_roll_result: "fn_roll_check_running"
                };
                if (e.type === "participant_message" && e.data?.isDM) return "dm_check_eval_running";
                const r = a[e.type];
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
                        messages: ft(this.session),
                        callbackPhase: "dm_game_intro",
                        llmRequestType: "dnd_dm_intro"
                    };
                case "dm_narrate":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate")), {
                        type: "LLM_CALL",
                        messages: yt(this.session, t),
                        callbackPhase: "dm_narrate",
                        llmRequestType: "dnd_dm_narrate",
                        dataExtra: {
                            phase: "dm_narrate"
                        }
                    };
                case "dm_assign_player":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_assign_player")), {
                        type: "LLM_CALL",
                        messages: St(this.session, t),
                        callbackPhase: "dm_assign_player",
                        llmRequestType: "dnd_assign_player"
                    };
                case "player_action":
                    return this.handlePlayerAction(t);
                case "dm_check_eval":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_eval")), {
                        type: "LLM_CALL",
                        messages: Ct(this.session, t),
                        callbackPhase: "dm_check_eval",
                        llmRequestType: "dnd_dm_narrate",
                        dataExtra: {
                            phase: "dm_check_eval"
                        }
                    };
                case "dm_check_decision":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_decision")), {
                        type: "LLM_CALL",
                        messages: bt(this.session, t),
                        callbackPhase: "dm_check_decision",
                        llmRequestType: "dnd_check_decision"
                    };
                case "fn_roll_check":
                    return this.handleRollCheck(t);
                case "dm_tell_result":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_tell_result")), {
                        type: "LLM_CALL",
                        messages: Dt(this.session, t),
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
            const e = this.session.modeState.currentTurnCharacterId, a = this.session.modeConfig.playerCharacterSnapshots.find((r)=>r.id === e);
            return a ? a.isHumanControlled ? (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), {
                type: "WAIT_FOR_INPUT"
            }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), {
                type: "LLM_CALL",
                messages: xt(this.session, t),
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
            const a = this.session.modeConfig.playerCharacterSnapshots.find((o)=>o.id === e.playerId);
            if (!a) return console.error(`[DndManager] 检定角色 ${e.playerId} 不存在`), this.enterNextState("dm_narrate"), {
                type: "STATE_CHANGE"
            };
            const r = ot(e, a.attributes);
            return this.session.modeState.lastCheckResult = r, t.addHistoryItem({
                id: v(),
                type: "dnd_roll_result",
                idx: 0,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    checkSpec: e,
                    checkResult: r,
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
                        const r = ct(e);
                        if (r) {
                            const o = this.session.modeConfig.playerCharacterSnapshots.find((i)=>i.id === r.nextPlayerId);
                            a.addHistoryItem({
                                id: v(),
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
                            }), a.addHistoryItem({
                                id: v(),
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
                        const r = it(e);
                        a.addHistoryItem({
                            id: v(),
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
    const u = Y({
        currentSession: null,
        contextManager: null,
        sessionManager: null,
        loadSession (n, t) {
            this.currentSession = n, this.currentSession.modeState.currentUIState = "idle", this.sessionManager = xe(new It(this.currentSession));
            const e = Y(t || {
                historyItems: [],
                processingItem: void 0
            });
            this.contextManager = new Be(e);
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
                const { SessionDB: o } = await import("./db-master-kA5b7Kkp.js").then((i)=>i.A);
                return {
                    SessionDB: o
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])), a = new e(n);
            let r;
            try {
                r = V(t);
            } catch  {
                r = JSON.parse(JSON.stringify(t));
            }
            await a.addContextItems(r);
        },
        async updateSessionInDB () {
            if (!this.currentSession) return;
            const { masterDb: n } = await Q(async ()=>{
                const { masterDb: a } = await import("./db-master-kA5b7Kkp.js").then((r)=>r.D);
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
    function kt() {
        const n = Ge((m)=>ze(m.config)), t = b.useRef(!1), e = b.useRef(async ()=>{}), a = b.useRef(!1), [r, o] = b.useState("running"), i = b.useCallback(()=>{
            t.current = !1, a.current && o("paused");
        }, []), l = ie(), d = b.useCallback(async (m, p, x, _, h = {})=>{
            const N = u.contextManager;
            if (!N) return {
                content: ""
            };
            const j = {
                id: v(),
                type: x,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: "",
                    ...h
                }
            };
            N.setProcessingItem(j);
            let C = "";
            return await Je(m, p, [], (G, $)=>{
                _?.(G), C = $;
                const z = N.getProcessingItem();
                z && (z.data.content = $);
            }), N.completeProcessingItem(), {
                content: C
            };
        }, []), y = b.useCallback((m, p, x)=>{
            const _ = u.sessionManager, h = u.contextManager;
            _ && h && _.handleLLMResponse(m.callbackPhase, p, h);
        }, []), g = b.useCallback(async (m, p)=>{
            const x = u.sessionManager, _ = u.contextManager;
            if (!(x && _)) {
                i();
                return;
            }
            const h = await x.executeCurrentStateLogic(_);
            if (console.log("[DndLoop] Action:", h), h.type === "WAIT_FOR_INPUT" || h.type === "STOP") {
                await u.updateSessionInDB(), i();
                return;
            }
            if (h.type === "STATE_CHANGE") {
                if (await u.updateSessionInDB(), a.current) {
                    console.log("[DndLoop] 游戏已暂停（STATE_CHANGE 后）"), i();
                    return;
                }
                setTimeout(()=>{
                    e.current(m.id);
                }, 0);
                return;
            }
            if (h.type === "LLM_CALL") {
                if (h.callbackPhase) {
                    const j = h.callbackPhase;
                    x.setCurrentUIState(x.getRunningUIStateForPhase(j));
                }
                await u.updateSessionInDB();
                const N = await d(p, h.messages.map((j)=>({
                        ...j,
                        id: v()
                    })), h.llmRequestType, void 0, h.dataExtra);
                if (await u.saveNewContextItemsToDB(m.id, _.getHistoryItems()), y(h, N.content, m.id), await u.updateSessionInDB(), a.current) {
                    console.log("[DndLoop] 游戏已暂停（LLM_CALL 完成后）"), i();
                    return;
                }
                setTimeout(()=>{
                    e.current(m.id);
                }, 0);
            }
        }, [
            d,
            y,
            i
        ]), D = b.useCallback(async (m)=>{
            const p = u.currentSession;
            if (!p || p.id !== m) {
                i();
                return;
            }
            if (a.current) {
                i();
                return;
            }
            const x = {
                ...n
            };
            try {
                t.current = !0, await g(p, x);
            } catch (_) {
                console.error("[DndLoop] Critical Error:", _), W.error("对话服务调用失败，请打开 AI 设置检查连接", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>l({
                                to: "/config/llm"
                            })
                    }
                }), u.contextManager?.setProcessingItem(void 0), i();
            }
        }, [
            n,
            l,
            g,
            i
        ]);
        e.current = D;
        const w = b.useCallback(async (m)=>{
            if (t.current || a.current) return;
            const p = u.currentSession, x = u.contextManager, _ = u.sessionManager;
            if (!(p && x && _)) {
                console.warn("[DndLoop] Session or Managers not ready");
                return;
            }
            try {
                if (m) {
                    if (_.getCurrentPhase() !== "player_action") {
                        W.warning("当前并非该角色的行动回合");
                        return;
                    }
                    const h = p.modeState.currentTurnCharacterId, N = p.modeConfig.playerCharacterSnapshots.find((C)=>C.id === h);
                    if (!N?.isHumanControlled) {
                        W.warning("当前角色由 AI 控制，无法手动输入");
                        return;
                    }
                    t.current = !0, _.setCurrentUIState(_.getRunningUIStateForPhase("player_action"));
                    const j = {
                        id: v(),
                        type: "dnd_player_action",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            content: m,
                            characterId: h,
                            characterName: N.name,
                            isHumanControlled: !0
                        }
                    };
                    x.addHistoryItem(j), await u.saveNewContextItemsToDB(p.id, x.getHistoryItems()), _.incrementTurnCount(h), _.setCurrentUIState(_.getDoneUIStateForPhase("player_action")), _.enterNextState("dm_check_eval"), await u.updateSessionInDB();
                }
                await D(p.id);
            } catch (h) {
                throw i(), h;
            }
        }, [
            D,
            i
        ]), E = b.useCallback(()=>{
            a.current || (a.current = !0, o(t.current ? "pausing" : "paused"), console.log("[DndLoop] 暂停请求已发出"));
        }, []), f = b.useCallback(()=>{
            if (!a.current || t.current) return;
            a.current = !1, o("running"), console.log("[DndLoop] 恢复游戏");
            const m = u.currentSession;
            m && !t.current && D(m.id);
        }, [
            D
        ]);
        return {
            nextStep: w,
            isCallingRef: t,
            pauseState: r,
            pauseGame: E,
            resumeGame: f
        };
    }
    const Mt = T({
        力量: M().describe("力量属性值"),
        敏捷: M().describe("敏捷属性值"),
        体质: M().describe("体质属性值"),
        智力: M().describe("智力属性值"),
        感知: M().describe("感知属性值"),
        魅力: M().describe("魅力属性值")
    }), Nt = T({
        intent: S().describe("检定意图"),
        type: K([
            "attribute",
            "saving",
            "attack"
        ]).describe("检定类型"),
        attribute: S().describe("检定维度"),
        dc: M().describe("目标数值 (DC)"),
        playerId: S().describe("执行检定的角色 ID")
    }), jt = T({
        naturalRoll: M().describe("骰子原值"),
        total: M().describe("总值 (原值 + 修正)"),
        modifier: M().describe("属性修正"),
        isSuccess: ce().describe("是否成功")
    }), Pt = K([
        "dm_game_intro",
        "dm_narrate",
        "dm_assign_player",
        "player_action",
        "dm_check_eval",
        "dm_check_decision",
        "fn_roll_check",
        "dm_tell_result"
    ]), wt = K([
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
    }, $t = K([
        "standard",
        "narrative",
        "hardcore",
        "solo"
    ]), vt = T({
        id: S().describe("角色 ID"),
        name: S().describe("角色名称"),
        description: S().describe("角色描述"),
        avatar: S().optional().describe("角色头像"),
        systemPrompt: S().describe("角色扮演指引"),
        attributes: Mt.describe("角色属性"),
        race: S().optional().describe("种族"),
        class: S().optional().describe("职业"),
        currentHP: M().describe("当前生命值"),
        maxHP: M().describe("最大生命值"),
        isHumanControlled: ce().describe("是否由人类控制")
    }), Tt = T({
        name: S().describe("世界名称"),
        description: S().describe("世界描述"),
        systemPrompt: S().describe("核心系统提示词"),
        globalKnowledge: S().optional().describe("世界观补充")
    }), Rt = T({
        worldSnapshot: Tt.describe("世界设定快照"),
        gameMode: $t.describe("玩法模式"),
        playerCharacterSnapshots: Xe(vt).describe("参与角色快照列表"),
        dmName: S().optional().describe("DM 显示名称")
    }), Lt = T({
        currentPhase: Pt.describe("当前阶段名称"),
        currentUIState: wt.describe("当前 UI 状态名称"),
        currentTurnCharacterId: S().describe("当前行动角色 ID ('dm' 或角色ID)"),
        currentRound: M().describe("当前回合数"),
        turnCounts: qe(S(), M()).describe("每个角色的行动次数统计"),
        lastCheckSpec: Nt.optional().describe("最近一次检定规范"),
        lastCheckResult: jt.optional().describe("最近一次检定结果"),
        historySummary: S().describe("历史摘要")
    });
    Ee.extend({
        mode: Ke("dnd").describe("模式"),
        modeConfig: Rt.describe("DnD 模式配置"),
        modeState: Lt.describe("DnD 模式状态")
    });
    let At, q, ae, Ut, Et;
    Rn = (n)=>{
        const t = ie(), [e, a] = b.useState(""), [r, o] = b.useState(!1), [i, l] = b.useState(!1), d = Ce(u), { data: y = [] } = Ue((c)=>c.from({
                s: He
            })), g = y.find((c)=>c.id === n.sessionId);
        b.useEffect(()=>{
            let c = !1;
            if (!g) return;
            if (u.currentSession?.id === g.id && u.contextManager) {
                l(!0);
                return;
            }
            return (async ()=>{
                try {
                    const I = await Fe.createSessionDB(g.id).getContextItems();
                    if (c) return;
                    u.loadSession(g, {
                        historyItems: I,
                        processingItem: void 0
                    }), l(!0);
                } catch (P) {
                    console.error("[DnD] Load session error", P);
                }
            })(), ()=>{
                c = !0;
            };
        }, [
            g?.id,
            g
        ]);
        const { nextStep: D, pauseState: w, pauseGame: E, resumeGame: f } = kt(), m = w === "paused", p = w === "pausing", x = p ? "即将暂停" : m ? "已暂停" : null, _ = async ()=>{
            if (r) return;
            const c = u.sessionManager, k = u.contextManager;
            if (c && k) {
                o(!0);
                try {
                    We(n.sessionId, "dnd");
                    const P = c.getActualCurrentPhase(k);
                    c.enterNextState(P), c.setCurrentUIState(c.getReadyUIStateForPhase(P)), await u.updateSessionInDB(), await D();
                } finally{
                    o(!1);
                }
            }
        };
        if (!(g && i)) return s.jsxs("div", {
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
        const h = async ()=>{
            if (!(!e.trim() || $)) {
                o(!0);
                try {
                    await D(e), Ye(n.sessionId, "dnd");
                } finally{
                    o(!1), a("");
                }
            }
        }, N = u.sessionManager && u.contextManager ? u.sessionManager.getActualCurrentUIState(u.contextManager) : d.currentSession?.modeState?.currentUIState || "idle", j = ne[N] || ne.idle, C = d.currentSession?.modeConfig?.playerCharacterSnapshots?.find((c)=>c.id === d.currentSession?.modeState?.currentTurnCharacterId), G = !!C?.isHumanControlled, $ = w !== "running" || r || !j.inputEnabled || j.inputEnabled && !G, z = ()=>{
            E();
        }, _e = ()=>{
            f();
        }, ge = async (c)=>{
            const k = u.currentSession?.modeConfig.playerCharacterSnapshots.find((Se)=>Se.id === c);
            if (!k) return;
            const P = k.isHumanControlled;
            u.toggleCharacterControl(c), await u.updateSessionInDB();
            const I = c === u.currentSession?.modeState.currentTurnCharacterId, ye = u.sessionManager?.getCurrentPhase();
            P && I && ye === "player_action" && !r && await D();
        }, fe = ()=>{
            t({
                to: "/plaza"
            });
        };
        return s.jsx("div", {
            className: "flex h-full min-h-0 min-w-0 flex-col overflow-hidden bg-background",
            children: s.jsxs("div", {
                className: "flex min-h-0 min-w-0 flex-1 flex-col",
                children: [
                    s.jsx(Ne, {
                        title: d.currentSession?.modeConfig?.worldSnapshot?.name || "DnD 冒险",
                        subtitle: "DnD 冒险",
                        actions: s.jsxs(s.Fragment, {
                            children: [
                                N !== "idle" && s.jsxs(X, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "sm",
                                    disabled: p,
                                    onClick: m ? _e : z,
                                    children: [
                                        p ? s.jsx(J, {
                                            "data-icon": "inline-start"
                                        }) : m ? s.jsx(Ze, {
                                            "data-icon": "inline-start"
                                        }) : s.jsx(Qe, {
                                            "data-icon": "inline-start"
                                        }),
                                        p ? "即将暂停" : m ? "继续" : "暂停"
                                    ]
                                }),
                                s.jsxs(je, {
                                    label: "冒险详情",
                                    description: "查看冒险者属性、生命值并调整角色控制权。",
                                    children: [
                                        s.jsx(A, {
                                            variant: "secondary",
                                            children: {
                                                standard: "标准模式",
                                                narrative: "叙事模式",
                                                hardcore: "硬核模式",
                                                solo: "单人模式"
                                            }[d.currentSession?.modeConfig.gameMode || "standard"]
                                        }),
                                        s.jsx("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: d.currentSession?.modeConfig?.worldSnapshot?.description
                                        }),
                                        (d.currentSession?.modeConfig?.playerCharacterSnapshots || []).map((c)=>s.jsxs(be, {
                                                children: [
                                                    s.jsx(De, {
                                                        children: s.jsxs(Ie, {
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
                                                    s.jsxs(ke, {
                                                        className: "flex flex-col gap-3",
                                                        children: [
                                                            s.jsxs("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: [
                                                                    c.race,
                                                                    " · ",
                                                                    c.class,
                                                                    " · 行动 ",
                                                                    d.currentSession?.modeState.turnCounts?.[c.id] || 0,
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
                                                                    s.jsx(Ve, {
                                                                        "aria-label": `由玩家控制 ${c.name}`,
                                                                        checked: c.isHumanControlled,
                                                                        onCheckedChange: ()=>ge(c.id)
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
                                                            s.jsx(Me, {
                                                                value: c.maxHP > 0 ? Math.max(0, Math.min(100, c.currentHP / c.maxHP * 100)) : 0,
                                                                "aria-label": `${c.name}生命值`
                                                            }),
                                                            s.jsx("dl", {
                                                                className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
                                                                children: Object.entries(c.attributes || {}).map(([k, P])=>s.jsxs("div", {
                                                                        children: [
                                                                            s.jsx("dt", {
                                                                                className: "text-xs text-muted-foreground",
                                                                                children: k
                                                                            }),
                                                                            s.jsx("dd", {
                                                                                className: "text-sm tabular-nums",
                                                                                children: P
                                                                            })
                                                                        ]
                                                                    }, k))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, c.id)),
                                        s.jsxs(X, {
                                            type: "button",
                                            variant: "outline",
                                            onClick: fe,
                                            children: [
                                                s.jsx(et, {
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
                    s.jsxs(Pe, {
                        children: [
                            s.jsxs(A, {
                                variant: "outline",
                                children: [
                                    "第 ",
                                    d.currentSession?.modeState.currentRound || 1,
                                    " 回合"
                                ]
                            }),
                            s.jsx(A, {
                                variant: "secondary",
                                children: x ?? j.label
                            }),
                            C && s.jsxs(s.Fragment, {
                                children: [
                                    s.jsx(A, {
                                        variant: "outline",
                                        className: "max-w-full min-w-0",
                                        children: s.jsxs("span", {
                                            className: "truncate",
                                            children: [
                                                "当前行动：",
                                                C.name
                                            ]
                                        })
                                    }),
                                    s.jsxs(A, {
                                        variant: "secondary",
                                        children: [
                                            "生命 ",
                                            C.currentHP,
                                            "/",
                                            C.maxHP
                                        ]
                                    }),
                                    s.jsx(A, {
                                        variant: "outline",
                                        children: C.isHumanControlled ? "玩家操作" : "AI 控制"
                                    })
                                ]
                            })
                        ]
                    }),
                    s.jsx(Te, {
                        children: (()=>{
                            const c = (d.contextManager?.state.historyItems || []).filter((I)=>!I.hidden), k = d.contextManager?.state.processingItem;
                            if (N === "idle") {
                                const I = c.length === 0 ? "开始冒险" : "继续冒险";
                                return s.jsx(Z, {
                                    messageId: "conversation-start",
                                    children: s.jsxs("div", {
                                        className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                                        children: [
                                            s.jsx("div", {
                                                className: "size-24 rounded-4xl bg-primary/10 flex items-center justify-center mb-8 shadow-2xl shadow-primary/10 ring-8 ring-primary/5 rotate-3 hover:rotate-6 transition-transform duration-500",
                                                children: s.jsx(tt, {
                                                    className: "size-10 text-primary drop-shadow-sm"
                                                })
                                            }),
                                            s.jsx("h2", {
                                                className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                                                children: d.currentSession?.modeConfig?.worldSnapshot?.name || "DnD 冒险"
                                            }),
                                            s.jsx("p", {
                                                className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm",
                                                children: d.currentSession?.modeConfig?.worldSnapshot?.description || "一段全新的冒险旅程即将展开，准备好掷出命运的骰子了吗？"
                                            }),
                                            s.jsxs(X, {
                                                type: "button",
                                                size: "lg",
                                                className: "h-16 px-12 transition-all hover:scale-105 active:scale-95 uppercase",
                                                onClick: _,
                                                disabled: r,
                                                children: [
                                                    r ? s.jsx(J, {
                                                        "data-icon": "inline-start"
                                                    }) : s.jsx(nt, {
                                                        "data-icon": "inline-start"
                                                    }),
                                                    I
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
                                                            s.jsx(at, {
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
                            const P = [
                                ...c
                            ];
                            return k && !k.hidden && !c.some((I)=>I.id === k.id) && P.push(k), P.map((I)=>s.jsx(Z, {
                                    messageId: I.id,
                                    scrollAnchor: I.type === "participant_message" || I.type === "gc_user_message",
                                    children: s.jsx(At, {
                                        item: I,
                                        participants: d.currentSession?.modeConfig?.playerCharacterSnapshots || []
                                    })
                                }, I.id));
                        })()
                    }, n.sessionId),
                    s.jsxs("div", {
                        className: "border-t px-3 py-2 sm:px-5 shrink-0 bg-background",
                        children: [
                            s.jsxs(Re, {
                                className: "mx-auto max-w-4xl",
                                children: [
                                    s.jsx(Le, {
                                        "aria-label": "消息内容",
                                        value: e,
                                        onChange: (c)=>a(c.target.value),
                                        placeholder: x ? p ? "即将暂停，等待当前步骤完成..." : "已暂停，点击继续恢复冒险" : $ ? j.inputEnabled && !G ? `${C?.name || "角色"} 由 AI 控制，等待自动行动...` : j.placeholder : `作为 ${C?.name || "角色"}，描述你的行动...`,
                                        disabled: $,
                                        rows: 1,
                                        className: "min-h-10 max-h-[min(10rem,25dvh)] overflow-y-auto",
                                        onKeyDown: (c)=>{
                                            c.key === "Enter" && !c.shiftKey && !c.nativeEvent.isComposing && (c.preventDefault(), h());
                                        }
                                    }),
                                    s.jsx(Ae, {
                                        align: "inline-end",
                                        className: "self-end pb-1.5",
                                        children: s.jsx(X, {
                                            "aria-label": "发送消息",
                                            type: "button",
                                            size: "icon",
                                            disabled: !e.trim() || $,
                                            onClick: h,
                                            children: r ? s.jsx(J, {
                                                "data-icon": "inline-start"
                                            }) : s.jsx(st, {
                                                "data-icon": "inline-start"
                                            })
                                        })
                                    })
                                ]
                            }),
                            s.jsxs("div", {
                                className: "max-w-4xl mx-auto mt-1 flex flex-wrap items-center justify-end gap-2 px-2 text-xs text-muted-foreground",
                                children: [
                                    C && s.jsx("span", {
                                        className: "mr-auto",
                                        children: `${C.name} 的回合 (${C.isHumanControlled ? "玩家操作" : "AI 自动"})`
                                    }),
                                    s.jsx("span", {
                                        children: x ?? ($ ? "等待中..." : "Shift + Enter 换行")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    };
    At = ({ item: n, participants: t })=>{
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
                return s.jsx(Ut, {
                    item: n
                });
            case "dnd_system_notice":
                return s.jsx(Et, {
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
        const e = n.data, a = he(e.content || ""), r = e.characterId || e.participantId, o = t?.find((d)=>d.id === r), i = o?.name || e.characterName || e.name || "冒险者", l = o?.isHumanControlled ?? (e.isHumanControlled || e.isUser);
        return s.jsxs(oe, {
            name: i,
            fromUser: !!l,
            avatar: s.jsx(de, {
                character: o,
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
    Ut = ({ item: n })=>{
        const t = n.data, e = t.checkResult, a = t.characterName || "角色", r = t.attributeName || "属性";
        if (!e) return null;
        const o = e.isSuccess, i = e.naturalRoll === 20, l = e.naturalRoll === 1;
        return s.jsxs(we, {
            variant: o ? "default" : "destructive",
            children: [
                s.jsx(le, {}),
                s.jsx($e, {
                    children: i ? "大成功！" : l ? "大失败！" : o ? "检定成功" : "检定失败"
                }),
                s.jsxs(ve, {
                    children: [
                        s.jsxs("p", {
                            children: [
                                a,
                                " · ",
                                r,
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
    Et = ({ item: n })=>{
        const t = n.data, e = t.noticeType;
        return s.jsx(se, {
            variant: "separator",
            children: s.jsx(re, {
                children: e === "turn_start" && t.characterName ? `${t.characterName} 的回合` : t.content || "系统通知"
            })
        });
    };
});
export { Rn as SessionMainForDnd, __tla };
