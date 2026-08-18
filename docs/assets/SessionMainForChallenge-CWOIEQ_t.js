const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-D0ahR8Qm.js","assets/@tanstack-DHpjEvx5.js","assets/react-BwrVEnbn.js","assets/vendor-Btzk85e_.js","assets/formatting-Cgd9k2rU.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-C4f2dvgg.js","assets/zod-BOL00Oce.js","assets/analytics-D0sC1eqJ.js","assets/app-configurations-DdWbCCF7.js","assets/nex-tavern-uuid-BRGLU0IZ.js","assets/id-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { y as z, a8 as L, r as j, t as $, u as ce, j as s } from "./react-BwrVEnbn.js";
import { f as Z, j as H } from "./@tanstack-DHpjEvx5.js";
import { O as le, n as de, o as ue, p as he, q as me, r as pe, s as ge, S as fe, C as xe, t as O, u as ye, m as J } from "./db-master-D0ahR8Qm.js";
import { s as _e } from "./db-a5TFd8lR.js";
import { _ as q, __tla as __tla_0 } from "./index-rrWAXvvv.js";
import { C as be, A as Se } from "./AutoScrollDownArea-BTDHzY0Y.js";
import { S as ve } from "./session-manager.class-BfmlsvKQ.js";
import { n as D } from "./id-BY9c7rfI.js";
import { m as Ce, P as we, C as Y, a as Ne } from "./PlayerInputItem-BaDeKJmm.js";
import { B as T } from "./button-DfQJxXN9.js";
import { T as ke } from "./textarea-sQNmV-G1.js";
import { B as F } from "./badge-BTwyrS6y.js";
import { C as je } from "./CharacterAvatar-AvVssCO6.js";
import { u as Ie, g as Me, a as Pe } from "./global-llm-config.store-CMShswv9.js";
import { c as k } from "./shadcn-utils-Cnr6N47i.js";
import { b as Te, a as Ue } from "./analytics-D0sC1eqJ.js";
import { au as U, u as V, a4 as ee, C as B, S as Ee, R as Ae, az as De, av as Fe, a9 as $e, af as Re, a8 as Le, I as Oe } from "./icons-C00G4gHY.js";
import "./vendor-Btzk85e_.js";
import "./formatting-Cgd9k2rU.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C4f2dvgg.js";
import "./zod-BOL00Oce.js";
import "./es-toolkit-9bjl2JfA.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-CPcsbTWB.js";
import "./app-configurations-DdWbCCF7.js";
import "./nex-tavern-uuid-BRGLU0IZ.js";
let Pt;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    function E(n) {
        const e = n.modeConfig.characterSnapshot;
        if (!e) throw new Error("Critical Error: Character snapshot missing in session config.");
        return e;
    }
    function te(n, e) {
        const t = E(e);
        return n.getFlatHistoryItems(10).filter((a)=>!a.hidden && !a.deleted).map((a)=>{
            const { type: r, data: i } = a;
            if (r === "participant_message") {
                let d = "玩家";
                return i.isDM || i.name === "DM" ? d = "DM旁白" : i.name && (d = i.name), `${d}: ${i.content}`;
            }
            return r === "character_message" ? `${i.name || t.name}: ${i.content}` : r === "dm_intro" ? `DM开场/规则: ${i.content}` : r === "character_intro" ? `${t.name}开场: ${i.content}` : null;
        }).filter(Boolean).join(`
`);
    }
    const Ve = `
你现在的身份是 DM (地下城主/游戏主持人)，正在主持一场文字冒险挑战。
你的职责是向【玩家/user】详细介绍当前的挑战背景、核心目标以及游戏规则，并给出明确的操作指引。

注意：
1. 你是主持人，不是游戏中的角色。请以解说、专业且具有沉浸感的语气说话。
2. 你的介绍应包含当前的挑战主题、【玩家/user】需要与之互动的【受挑战的角色】身份，以及达成成功的条件。
3. 请保持简洁，不要进行任何即时的叙事或对话描述，你仅负责开场。

当前挑战名称：{{title}}
受挑战的角色：{{characterName}} ({{characterDescription}})
注意：参与挑战的是【玩家/user】，而 {{characterName}} 是【玩家/user】互动和博弈的对象。

### 挑战目标：
{{gameGoals}}

### 失败判定：
{{failureConditions}}

### 世界规则/关键变量说明：
{{variableDescriptions}}

### 对玩家的行为指引：
{{userGuidance}}
`, Be = `
你现在的身份是 DM (地下城主/游戏主持人)。
评估【玩家/user】的最后输入以及当前的变量状态。
你正在观察【玩家/user】与角色 {{characterName}} 的互动。

### 挑战目标：
{{gameGoals}}

### 失败判定：
{{failureConditions}}

### 历史消息（仅供参考）：
{{historyMessages}}

当前变量状态：
{{variablesJSON}}

玩家的输入：
{{userInput}}

输出你的评估结果，必须是一个符合以下 TypeScript 接口定义的 JSON 对象：

\`\`\`typescript
interface EvaluationResult {
  /** 简短分析玩家行动对故事走向、世界状态和变量产生的影响 */
  analyze: string;
  /** 变量操作列表 */
  operations: Array<
    | { key: string; op: 'delta'; value: number }          // 针对数字类型(number)：数值增量，如 10 或 -5
    | { key: string; op: 'setTo'; value: number | string } // 针对数字或字符串(string)：直接设为目标值
    | { key: string; op: 'setTrue' }                       // 针对布尔类型(boolean)：设为真值，无需 value 字段
    | { key: string; op: 'setFalse' }                      // 针对布尔类型(boolean)：设为假值，无需 value 字段
    | { key: string; op: 'add'; value: string }            // 针对标签(tags)：向列表中添加一个标签
    | { key: string; op: 'remove'; value: string }         // 针对标签(tags)：从列表中移除一个标签
  >;
}
\`\`\`

## 变量操作规范 (严格执行):
1. **数字 (number)**: 
   - 使用 "delta" 来增减数值 (例如: 10, -5)。
   - 使用 "setTo" 来直接设定具体数值。
2. **布尔 (boolean)**:
   - 使用 "setTrue" 将变量设为真，使用 "setFalse" 将变量设为假。
   - 注意：这两种操作不需要提供 "value" 字段。
3. **标签列表 (tags)**:
   - 使用 "add" 向列表中添加一个标签。
   - 使用 "remove" 从列表中移除一个标签。
4. **字符串 (string)**:
   - 使用 "setTo" 修改内容。
`, Ge = `
你现在的身份是 DM (地下城主)。
你需要根据变量的变化，描述【玩家/user】刚才的输入是如何在故事中产生影响并造成变量波动的。
**核心任务：** 重点描述「玩家刚才的行动如何引发了刚才的变量变化」，使数值的变化逻辑在叙事中得到体现。

注意：
1. **禁止**描述「接下来」发生的事情或引导故事走向。
2. **禁止**替玩家或角色做出新的行动或决定。
3. 文本应生动且具有沉浸感，保持 DM 中立且专业的叙述风格。
4. 参考对话历史（此前几轮消息）以确保逻辑连贯。

### 挑战目标：
{{gameGoals}}

### 失败判定：
{{failureConditions}}

### 历史消息（仅供参考）：
{{historyMessages}}

玩家的输入：
{{userInput}}

变量变化分析：
{{evalAnalyze}}

新的变量状态：
{{variablesJSON}}
`;
    function ze(n, e) {
        const { modeConfig: t } = n, a = E(n), r = (t.goals || []).map((m)=>`- ${m.description}`).join(`
`) || "无明确目标", i = (t.failureChecks || []).map((m)=>`- ${m.description}`).join(`
`) || "无失败判定", d = Object.entries(t.variables || {}).filter(([m, u])=>!u.hidden).map(([m, u])=>`- ${m}: ${u.description || "无描述"}`).join(`
`) || "无公开变量";
        return [
            {
                role: "system",
                content: Ve.replace("{{title}}", n.title || "文字挑战").replace("{{characterName}}", a.name).replace("{{characterDescription}}", a.description || "神秘角色").replace("{{gameGoals}}", r).replace("{{failureConditions}}", i).replace("{{variableDescriptions}}", d).replace("{{userGuidance}}", t.userGuidance)
            }
        ];
    }
    function He(n, e) {
        const { modeConfig: t, modeState: a } = n, r = E(n), i = JSON.stringify(a.variableStates, null, 2), d = (t.goals || []).map((o)=>`- ${o.description}`).join(`
`) || "无明确目标", c = (t.failureChecks || []).map((o)=>`- ${o.description}`).join(`
`) || "无失败判定", m = te(e, n), p = e.getLastUserMessage()?.data.content || "";
        return [
            {
                role: "system",
                content: Be.replace("{{characterName}}", r.name).replace("{{gameGoals}}", d).replace("{{failureConditions}}", c).replace("{{historyMessages}}", m).replace("{{variablesJSON}}", i).replace("{{userInput}}", p)
            }
        ];
    }
    function Je(n, e) {
        const { modeConfig: t, modeState: a } = n, r = E(n), i = JSON.stringify(a.variableStates, null, 2), d = (t.goals || []).map((y)=>`- ${y.description}`).join(`
`) || "无明确目标", c = (t.failureChecks || []).map((y)=>`- ${y.description}`).join(`
`) || "无失败判定", m = te(e, n), p = e.getLastUserMessage()?.data.content || "", x = e.getHistoryItems();
        let o;
        for(let y = x.length - 1; y >= 0; y -= 1){
            const S = x[y];
            if (S.type === "challenge_mode_dm_eval") {
                o = S;
                break;
            }
        }
        const h = o?.data.analyze || "根据玩家行动更新了相关状态。";
        return [
            {
                role: "system",
                content: Ge.replace("{{characterName}}", r.name).replace("{{gameGoals}}", d).replace("{{failureConditions}}", c).replace("{{variablesJSON}}", i).replace("{{userInput}}", p).replace("{{historyMessages}}", m).replace("{{evalAnalyze}}", h)
            }
        ];
    }
    function qe(n, e) {
        const { modeConfig: t } = n, a = E(n);
        return [
            {
                role: "system",
                content: `你现在的身份是角色 ${a.name}。
你正在参加一场名为《${n.title || "挑战"}》的游戏。
你的任务描述：
${t.roleTaskPrompt}

现在，请作为 ${a.name} 给出你的开局第一句话。
这句对话应该符合你的性格、当前挑战的背景，并引导玩家开始互动。
不要输出任何旁白，只输出对话内容。`
            }
        ];
    }
    function Ye(n, e) {
        const { modeConfig: t, modeState: a } = n, r = E(n), d = {
            historyItems: e.getFlatHistoryItems()
        }, c = Ce(d, {
            characterId: t.characterId
        });
        let m = `## 你的身份与任务
你正在参加一场名为《${n.title || "挑战"}》的游戏。
${t.roleTaskPrompt}

`;
        const u = Object.entries(a.variableStates).filter(([h])=>!t.variables[h]?.hidden).map(([h, _])=>{
            const y = t.variables[h], S = y?.description ? ` (${y.description})` : "";
            return `- ${h}${S}: ${_.value}`;
        }).join(`
`);
        u && (m += `## 当前状态 (你的感知能力)
${u}

`);
        const p = t.goals.map((h)=>a.goalStates.find((y)=>y.key === h.key)?.isCompleted ? `- [已达成目标] ${h.description}` : `- [未达成目标] ${h.description}`).join(`
`);
        p && (m += `## 挑战目标进度
${p}

`);
        const x = t.failureChecks.map((h)=>`- ${h.description}`).join(`
`);
        x && (m += `## 失败/结束条件 (你应尽量避免或引导玩家触发)
${x}

`);
        const o = a.failureStates.filter((h)=>h.isCompleted);
        if (o.length > 0) {
            const h = o.map((_)=>`- ${t.failureChecks.find((S)=>S.key === _.key)?.description || _.key}`).join(`
`);
            m += `## 警告：已触发失败条件
${h}
你现在处于极度不利的境地，请表现出相应的反应。

`;
        }
        return m += `## 行为准则
1. 严格扮演 ${r.name}，语气和反应必须与上述状态高度一致。
2. 不要直接提及变量的具体数值，而是将其融入到你的情感和行为表现中（例如：如果“压力”很高，你应该表现得急躁或焦虑）。
3. 如果目标已达成，你应该在回应中自然地流露出成功或阶段性进展的喜悦。`, [
            {
                role: "system",
                content: m
            },
            ...c
        ];
    }
    class ae {
        dict;
        config;
        constructor(e, t){
            this.dict = e, this.config = t;
        }
        getVariable(e) {
            return this.dict[e];
        }
        setVariable(e, t) {
            this.dict[e] ? this.dict[e].value = t : this.dict[e] = {
                key: e,
                value: t
            };
        }
        setTrue(e) {
            if (this.config?.[e]?.type !== "boolean") throw new Error(`变量 ${e} 配置不是布尔类型`);
            const t = this.getVariable(e);
            if (!t) throw new Error(`变量 ${e} 不存在`);
            if (typeof t.value != "boolean") throw new Error(`变量 ${e} 值不是布尔类型`);
            this.setVariable(e, !0);
        }
        setFalse(e) {
            if (this.config?.[e]?.type !== "boolean") throw new Error(`变量 ${e} 配置不是布尔类型`);
            const t = this.getVariable(e);
            if (!t) throw new Error(`变量 ${e} 不存在`);
            if (typeof t.value != "boolean") throw new Error(`变量 ${e} 值不是布尔类型`);
            this.setVariable(e, !1);
        }
        toggle(e) {
            if (this.config?.[e]?.type !== "boolean") throw new Error(`变量 ${e} 配置不是布尔类型`);
            const t = this.getVariable(e);
            if (!t) throw new Error(`变量 ${e} 不存在`);
            if (typeof t.value != "boolean") throw new Error(`变量 ${e} 值不是布尔类型`);
            this.setVariable(e, !t.value);
        }
        delta(e, t) {
            if (this.config?.[e]?.type !== "number") throw new Error(`变量 ${e} 配置不是数字类型`);
            const a = this.getVariable(e);
            if (!a) throw new Error(`变量 ${e} 不存在`);
            if (typeof a.value != "number") throw new Error(`变量 ${e} 值不是数字类型`);
            this.setVariable(e, a.value + t);
        }
        setTo(e, t) {
            const a = this.config?.[e]?.type;
            if (a) {
                if (a === "boolean" && typeof t != "boolean") throw new Error(`变量 ${e} 配置为布尔，但值不是布尔`);
                if (a === "number" && typeof t != "number") throw new Error(`变量 ${e} 配置为数字，但值不是数字`);
                if (a === "string" && typeof t != "string") throw new Error(`变量 ${e} 配置为字符串，但值不是字符串`);
                if (a === "tags" && !Array.isArray(t)) throw new Error(`变量 ${e} 配置为标签，但值不是数组`);
            }
            this.setVariable(e, t);
        }
        setValue(e, t) {
            this.setTo(e, t);
        }
        add(e, t) {
            if (this.config?.[e]?.type !== "tags") throw new Error(`变量 ${e} 配置不是标签类型`);
            const a = this.getVariable(e);
            if (!a) throw new Error(`变量 ${e} 不存在`);
            if (!Array.isArray(a.value)) throw new Error(`变量 ${e} 值不是数组类型`);
            a.value.includes(t) || this.setVariable(e, [
                ...a.value,
                t
            ]);
        }
        remove(e, t) {
            if (this.config?.[e]?.type !== "tags") throw new Error(`变量 ${e} 配置不是标签类型`);
            const a = this.getVariable(e);
            if (!a) throw new Error(`变量 ${e} 不存在`);
            if (!Array.isArray(a.value)) throw new Error(`变量 ${e} 值不是数组类型`);
            this.setVariable(e, a.value.filter((r)=>r !== t));
        }
        performOperation(e) {
            if (le.safeParse(e).success) {
                const [t, a] = e;
                switch(t){
                    case "setTrue":
                        this.setTrue(a);
                        break;
                    case "setFalse":
                        this.setFalse(a);
                        break;
                    case "toggle":
                        this.toggle(a);
                        break;
                    default:
                        throw new Error(`未知布尔操作方法: ${t}`);
                }
            } else if (de.safeParse(e).success) {
                const [t, a, r] = e;
                switch(t){
                    case "delta":
                        this.delta(a, r);
                        break;
                    case "setTo":
                        this.setTo(a, r);
                        break;
                    case "setValue":
                        this.setValue(a, r);
                        break;
                    default:
                        throw new Error(`未知数字操作方法: ${t}`);
                }
            } else if (ue.safeParse(e).success) {
                const [t, a, r] = e;
                switch(t){
                    case "setTo":
                        this.setTo(a, r);
                        break;
                    case "setValue":
                        this.setValue(a, r);
                        break;
                    default:
                        throw new Error(`未知字符串操作方法: ${t}`);
                }
            } else if (he.safeParse(e).success) {
                const [t, a, r] = e;
                switch(t){
                    case "add":
                        this.add(a, r);
                        break;
                    case "remove":
                        this.remove(a, r);
                        break;
                    default:
                        throw new Error(`未知标签操作方法: ${t}`);
                }
            } else throw new Error(`无效的操作: ${JSON.stringify(e)}`);
        }
        isTrue(e) {
            if (this.config?.[e]?.type !== "boolean") return !1;
            const t = this.getVariable(e);
            return t ? typeof t.value == "boolean" && t.value : !1;
        }
        isFalse(e) {
            if (this.config?.[e]?.type !== "boolean") return !1;
            const t = this.getVariable(e);
            return t ? typeof t.value == "boolean" && !t.value : !1;
        }
        eq(e, t) {
            const a = this.getVariable(e);
            return a ? String(a.value) === String(t) : !1;
        }
        neq(e, t) {
            return !this.eq(e, t);
        }
        is(e, t) {
            return this.eq(e, t);
        }
        isNot(e, t) {
            return this.neq(e, t);
        }
        gt(e, t) {
            if (this.config?.[e]?.type !== "number") return !1;
            const a = this.getVariable(e);
            return a && typeof a.value == "number" ? a.value > t : !1;
        }
        gte(e, t) {
            if (this.config?.[e]?.type !== "number") return !1;
            const a = this.getVariable(e);
            return a && typeof a.value == "number" ? a.value >= t : !1;
        }
        lt(e, t) {
            if (this.config?.[e]?.type !== "number") return !1;
            const a = this.getVariable(e);
            return a && typeof a.value == "number" ? a.value < t : !1;
        }
        lte(e, t) {
            if (this.config?.[e]?.type !== "number") return !1;
            const a = this.getVariable(e);
            return a && typeof a.value == "number" ? a.value <= t : !1;
        }
        includes(e, t) {
            if (this.config?.[e]?.type !== "string" && this.config?.[e]?.type !== "tags") return !1;
            const a = this.getVariable(e);
            if (!a) return !1;
            const r = String(t);
            return typeof a.value == "string" || Array.isArray(a.value) ? a.value.includes(r) : !1;
        }
        notIncludes(e, t) {
            return !this.includes(e, t);
        }
        has(e, t) {
            return this.includes(e, t);
        }
        hasAny(e, t) {
            if (this.config?.[e]?.type !== "tags") return !1;
            const a = this.getVariable(e);
            if (!a || !Array.isArray(a.value)) return !1;
            const r = a.value.map(String);
            return t.some((i)=>r.includes(String(i)));
        }
        hasAll(e, t) {
            if (this.config?.[e]?.type !== "tags") return !1;
            const a = this.getVariable(e);
            if (!a || !Array.isArray(a.value)) return !1;
            const r = a.value.map(String);
            return t.every((i)=>r.includes(String(i)));
        }
        llmJudge(e, t) {
            return console.warn("llmJudge 未实现"), !1;
        }
        and(e) {
            return e.every((t)=>this.checkCondition(t));
        }
        or(e) {
            return e.some((t)=>this.checkCondition(t));
        }
        all(e) {
            return this.and(e);
        }
        any(e) {
            return this.or(e);
        }
        some(e) {
            return this.or(e);
        }
        checkCondition(e) {
            if (me.safeParse(e).success) {
                const [t, ...a] = e;
                switch(t){
                    case "isTrue":
                        return this.isTrue(a[0]);
                    case "isFalse":
                        return this.isFalse(a[0]);
                    case "eq":
                        return this.eq(a[0], a[1]);
                    case "neq":
                        return this.neq(a[0], a[1]);
                    case "is":
                        return this.is(a[0], a[1]);
                    case "isNot":
                        return this.isNot(a[0], a[1]);
                    case "gt":
                        return this.gt(a[0], a[1]);
                    case "gte":
                        return this.gte(a[0], a[1]);
                    case "lt":
                        return this.lt(a[0], a[1]);
                    case "lte":
                        return this.lte(a[0], a[1]);
                    case "includes":
                        return this.includes(a[0], a[1]);
                    case "notIncludes":
                        return this.notIncludes(a[0], a[1]);
                    case "has":
                        return this.has(a[0], a[1]);
                    case "hasAny":
                        return this.hasAny(a[0], a[1]);
                    case "hasAll":
                        return this.hasAll(a[0], a[1]);
                    case "llmJudge":
                        return this.llmJudge(a[0], a[1]);
                    default:
                        throw new Error(`未知单一条件方法: ${t}`);
                }
            } else if (pe.safeParse(e).success || ge.safeParse(e).success) {
                const [t, a] = e;
                switch(t){
                    case "and":
                        return this.and(a);
                    case "or":
                        return this.or(a);
                    case "all":
                        return this.all(a);
                    case "any":
                        return this.any(a);
                    case "some":
                        return this.some(a);
                    default:
                        throw new Error(`未知复合条件方法: ${t}`);
                }
            }
            throw new Error(`无效的条件: ${JSON.stringify(e)}`);
        }
    }
    class Ke extends ve {
        constructor(e){
            super(e);
        }
        getCurrentPhase() {
            return this.session.modeState.currentPhase;
        }
        getCurrentUIState() {
            return this.session.modeState.currentUIState;
        }
        getActualCurrentPhase(e) {
            const t = e.getProcessingItem();
            if (t && t.type) {
                const d = {
                    dm_intro: "dm_intro",
                    character_intro: "character_intro",
                    character_message: "character_response",
                    character_message_group: "character_response",
                    dm_eval_logic: "dm_eval_changes",
                    participant_message: t.data?.isDM ? "dm_narrate_changes" : "player_input",
                    challenge_mode_dm_eval: "dm_eval_changes",
                    challenge_mode_checking: "failure_check",
                    challenge_mode_ending: "ending_check"
                }[t.type];
                if (d) return d;
            }
            const a = e.getFlatHistoryItems();
            let r;
            for(let i = a.length - 1; i >= 0; i--){
                const d = a[i];
                if (!d?.deleted) {
                    switch(d.type){
                        case "dm_intro":
                            r = "character_intro";
                            break;
                        case "character_intro":
                            r = "player_input";
                            break;
                        case "character_message":
                            r = this.session.modeState.shouldCheck === !1 ? "player_input" : "dm_eval_changes";
                            break;
                        case "character_message_group":
                            r = this.session.modeState.shouldCheck === !1 ? "player_input" : "dm_eval_changes";
                            break;
                        case "participant_message":
                            {
                                const c = d.data;
                                c?.isDM ? r = "failure_check" : c?.isUser || c?.role === "user" ? r = "character_response" : r = "player_input";
                                break;
                            }
                        case "dm_eval_logic":
                        case "challenge_mode_dm_eval":
                            r = "dm_narrate_changes";
                            break;
                        case "challenge_mode_checking":
                            {
                                const c = d.data?.results;
                                if (c && c.length > 0) {
                                    const m = c.some((p)=>p.type === "failure"), u = c.some((p)=>p.type === "goal");
                                    if (m) {
                                        r = c.some((x)=>x.type === "failure" && x.result === !0) ? "ending_check" : "goal_check";
                                        break;
                                    }
                                    if (u) {
                                        r = "ending_check";
                                        break;
                                    }
                                }
                                r = void 0;
                                break;
                            }
                        case "challenge_mode_ending":
                            r = "ending_check";
                            break;
                    }
                    if (r) break;
                }
            }
            return r ? this.session.modeState.currentPhase === "player_input" && r !== "player_input" ? "player_input" : r : this.session.modeState.currentPhase;
        }
        getActualCurrentUIState(e) {
            const t = e.getProcessingItem();
            if (t && t.type) {
                const r = {
                    dm_intro: "dm_intro_running",
                    character_intro: "character_intro_running",
                    character_message: "character_response_running",
                    character_message_group: "character_response_running",
                    dm_eval_logic: "dm_eval_changes_running",
                    participant_message: t.data?.isDM ? "dm_narrate_changes_running" : "player_input_running",
                    challenge_mode_dm_eval: "dm_eval_changes_running",
                    challenge_mode_checking: "failure_check_running",
                    challenge_mode_ending: "ending_check_running"
                }[t.type];
                if (r) return r;
            }
            return this.session.modeState.currentUIState ? this.session.modeState.currentUIState : this.getReadyUIStateForPhase(this.getActualCurrentPhase(e));
        }
        getReadyUIStateForPhase(e) {
            switch(e){
                case "dm_intro":
                    return "dm_intro_ready";
                case "character_intro":
                    return "character_intro_ready";
                case "player_input":
                    return "player_input_ready";
                case "character_response":
                    return "character_response_ready";
                case "dm_eval_changes":
                    return "dm_eval_changes_ready";
                case "dm_narrate_changes":
                    return "dm_narrate_changes_ready";
                case "failure_check":
                    return "failure_check_ready";
                case "goal_check":
                    return "goal_check_ready";
                case "ending_check":
                    return "ending_check_ready";
                default:
                    return "player_input_ready";
            }
        }
        getRunningUIStateForPhase(e) {
            switch(e){
                case "dm_intro":
                    return "dm_intro_running";
                case "character_intro":
                    return "character_intro_running";
                case "player_input":
                    return "player_input_running";
                case "character_response":
                    return "character_response_running";
                case "dm_eval_changes":
                    return "dm_eval_changes_running";
                case "dm_narrate_changes":
                    return "dm_narrate_changes_running";
                case "failure_check":
                    return "failure_check_running";
                case "goal_check":
                    return "goal_check_running";
                case "ending_check":
                    return "ending_check_running";
                default:
                    return "player_input_running";
            }
        }
        getDoneUIStateForPhase(e) {
            switch(e){
                case "dm_intro":
                    return "dm_intro_done";
                case "character_intro":
                    return "character_intro_done";
                case "player_input":
                    return "player_input_done";
                case "character_response":
                    return "character_response_done";
                case "dm_eval_changes":
                    return "dm_eval_changes_done";
                case "dm_narrate_changes":
                    return "dm_narrate_changes_done";
                case "failure_check":
                    return "failure_check_done";
                case "goal_check":
                    return "goal_check_done";
                case "ending_check":
                    return "ending_check_done";
                default:
                    return "player_input_done";
            }
        }
        enterNextState(e) {
            console.log(`[ChallengeManager] Transition: ${this.session.modeState.currentPhase} -> ${e}`), this.session.modeState.currentPhase = e, this.session.updatedAt = Date.now();
        }
        setCurrentUIState(e) {
            this.session.modeState.currentUIState = e, this.session.updatedAt = Date.now();
        }
        setShouldCheck(e) {
            this.session.modeState.shouldCheck = e, this.session.updatedAt = Date.now();
        }
        getVariableStates() {
            return this.session.modeState.variableStates;
        }
        updateVariable(e, t) {
            this.session.modeState.variableStates[e] = t, this.session.updatedAt = Date.now();
        }
        async executeCurrentStateLogic(e) {
            const t = this.session.modeState.currentPhase, a = new ae(this.session.modeState.variableStates, this.session.modeConfig.variables);
            switch(t){
                case "dm_intro":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_intro")), {
                        type: "LLM_CALL",
                        messages: ze(this.session),
                        callbackPhase: "dm_intro",
                        llmRequestType: "dm_intro"
                    };
                case "character_intro":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("character_intro")), {
                        type: "LLM_CALL",
                        messages: qe(this.session),
                        callbackPhase: "character_intro",
                        llmRequestType: "character_intro"
                    };
                case "player_input":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), {
                        type: "WAIT_FOR_INPUT"
                    };
                case "character_response":
                    return this.setCurrentUIState(this.getReadyUIStateForPhase("character_response")), {
                        type: "LLM_CALL",
                        messages: Ye(this.session, e),
                        callbackPhase: "character_response",
                        llmRequestType: "character_message",
                        dataExtra: {
                            characterId: this.session.modeConfig.characterId,
                            name: this.session.modeConfig.characterSnapshot?.name || "Unknown"
                        }
                    };
                case "dm_eval_changes":
                    return this.session.modeState.shouldCheck === !1 ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), {
                        type: "STATE_CHANGE"
                    }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_eval_changes")), {
                        type: "LLM_CALL",
                        messages: He(this.session, e),
                        callbackPhase: "dm_eval_changes",
                        llmRequestType: "dm_eval_logic"
                    });
                case "dm_narrate_changes":
                    return this.session.modeState.shouldCheck === !1 ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), {
                        type: "STATE_CHANGE"
                    }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate_changes")), {
                        type: "LLM_CALL",
                        messages: Je(this.session, e),
                        callbackPhase: "dm_narrate_changes",
                        llmRequestType: "participant_message",
                        dataExtra: {
                            isDM: !0,
                            name: "DM"
                        }
                    });
                case "failure_check":
                    return this.session.modeState.shouldCheck === !1 ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), {
                        type: "STATE_CHANGE"
                    }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("failure_check")), this.handleFailureCheck(e, a));
                case "goal_check":
                    return this.session.modeState.shouldCheck === !1 ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), {
                        type: "STATE_CHANGE"
                    }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("goal_check")), this.handleGoalCheck(e, a));
                case "ending_check":
                    return this.session.modeState.shouldCheck === !1 ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), {
                        type: "STATE_CHANGE"
                    }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("ending_check")), this.handleEndingCheck(e));
                default:
                    return {
                        type: "STOP"
                    };
            }
        }
        handleFailureCheck(e, t) {
            this.setCurrentUIState(this.getRunningUIStateForPhase("failure_check"));
            let a = !1;
            const r = [], i = this.session.modeConfig.failureChecks || [];
            for (const d of i){
                const c = t.checkCondition(d.condition), m = this.session.modeState.failureStates.find((u)=>u.key === d.key);
                m && (m.isCompleted = c), c && (a = !0), r.push({
                    type: "failure",
                    key: d.key,
                    result: c
                });
            }
            return e.addHistoryItem({
                id: D(),
                type: "challenge_mode_checking",
                idx: 0,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    results: r
                },
                hidden: !0
            }), this.setCurrentUIState(this.getDoneUIStateForPhase("failure_check")), a ? this.enterNextState("ending_check") : this.enterNextState("goal_check"), {
                type: "STATE_CHANGE"
            };
        }
        handleGoalCheck(e, t) {
            this.setCurrentUIState(this.getRunningUIStateForPhase("goal_check"));
            const a = [], r = this.session.modeConfig.goals || [];
            for (const i of r){
                const d = t.checkCondition(i.condition), c = this.session.modeState.goalStates.find((m)=>m.key === i.key);
                c && (c.isCompleted = d), a.push({
                    type: "goal",
                    key: i.key,
                    result: d
                });
            }
            return this.setCurrentUIState(this.getDoneUIStateForPhase("goal_check")), this.enterNextState("ending_check"), {
                type: "STATE_CHANGE"
            };
        }
        handleEndingCheck(e) {
            this.setCurrentUIState(this.getRunningUIStateForPhase("ending_check"));
            const t = (this.session.modeState.failureStates || []).find((c)=>c.isCompleted), a = this.session.modeConfig.goals || [], r = a.length > 0 && a.every((c)=>this.session.modeState.goalStates.find((u)=>u.key === c.key)?.isCompleted), i = !!t;
            if (i || r) {
                const c = e.state.historyItems;
                let m;
                for(let u = c.length - 1; u >= 0; u -= 1){
                    const p = c[u];
                    if (p.type === "challenge_mode_ending") {
                        m = p;
                        break;
                    }
                }
                if (!m) {
                    let u = "", p;
                    i ? (u = this.session.modeConfig.failureChecks.find((o)=>o.key === t?.key)?.userInfo || "挑战失败。", p = t?.key) : u = "恭喜你！所有挑战目标已达成。", e.addHistoryItem({
                        id: D(),
                        type: "challenge_mode_ending",
                        idx: 0,
                        orderRef: 0,
                        timestamp: Date.now(),
                        data: {
                            type: i ? "failure" : "success",
                            description: u,
                            failureReason: p
                        },
                        hidden: !1
                    }), this.setShouldCheck(!1);
                }
                return this.setCurrentUIState("ended"), {
                    type: "STOP"
                };
            }
            return this.setCurrentUIState(this.getDoneUIStateForPhase("ending_check")), this.enterNextState("player_input"), {
                type: "STATE_CHANGE"
            };
        }
    }
    function We(n) {
        return !Array.isArray(n) || n.length !== 3 ? !1 : n[0] === "gt" && n[1] === "final_price" && n[2] === 300;
    }
    function Qe(n) {
        const e = n.modeConfig?.variables, t = !!e?.final_price, a = !!e?.deal_closed, r = (n.modeConfig?.failureChecks || []).some((c)=>c.key === "price_too_high" && We(c.condition));
        if (!(t && r) || a) return;
        const i = n.modeState.variableStates.final_price, d = n.modeState.variableStates.current_price;
        i && d && (d.value = i.value), n.modeConfig.variables = Object.fromEntries(Object.entries(n.modeConfig.variables).filter(([c])=>c !== "final_price")), n.modeState.variableStates = Object.fromEntries(Object.entries(n.modeState.variableStates).filter(([c])=>c !== "final_price")), n.modeConfig.variables.deal_closed = {
            key: "deal_closed",
            type: "boolean",
            description: "双方是否已经明确成交（用于触发结算）",
            hidden: !1,
            initial: !1
        }, n.modeState.variableStates.deal_closed = {
            key: "deal_closed",
            value: !1
        }, n.modeConfig.goals = n.modeConfig.goals.map((c)=>c.key === "achieve_target_price" ? {
                ...c,
                condition: [
                    "and",
                    [
                        [
                            "isTrue",
                            "deal_closed"
                        ],
                        [
                            "lte",
                            "current_price",
                            300
                        ]
                    ]
                ]
            } : c.key === "complete_negotiation" ? {
                ...c,
                condition: [
                    "and",
                    [
                        [
                            "isTrue",
                            "deal_closed"
                        ],
                        [
                            "lte",
                            "current_price",
                            300
                        ],
                        [
                            "isFalse",
                            "negotiation_broken"
                        ]
                    ]
                ]
            } : c), n.modeConfig.failureChecks = n.modeConfig.failureChecks.map((c)=>c.key === "price_too_high" ? {
                ...c,
                condition: [
                    "and",
                    [
                        [
                            "isTrue",
                            "deal_closed"
                        ],
                        [
                            "gt",
                            "current_price",
                            300
                        ]
                    ]
                ]
            } : c);
    }
    const g = z({
        currentSession: null,
        contextManager: null,
        sessionManager: null,
        variablesManager: null,
        loadSession (n, e) {
            Qe(n), this.currentSession = n, n.modeState.currentUIState = "idle", this.sessionManager = new Ke(n);
            const t = z(e || {
                historyItems: [],
                processingItem: void 0
            });
            this.contextManager = new be(t), n.modeState && n.modeConfig && (this.variablesManager = new ae(n.modeState.variableStates, n.modeConfig.variables || {}));
        },
        applyVariableOperation (n) {
            if (this.variablesManager) try {
                this.variablesManager.performOperation(n);
            } catch (e) {
                console.error("[Store] VarOp Failed", e);
            }
        },
        updateConditionState (n, e, t) {
            const a = this.currentSession;
            if (!a) return;
            const i = (n === "goal" ? a.modeState.goalStates : a.modeState.failureStates).find((d)=>d.key === e);
            i && (i.isCompleted = t);
        },
        setPhase (n) {
            this.currentSession && (this.currentSession.modeState.currentPhase = n);
        },
        async saveNewContextItemsToDB (n, e) {
            const { SessionDB: t } = await q(async ()=>{
                const { SessionDB: i } = await import("./db-master-D0ahR8Qm.js").then((d)=>d.v);
                return {
                    SessionDB: i
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])), a = new t(n);
            let r;
            try {
                r = L(e);
            } catch  {
                r = JSON.parse(JSON.stringify(e));
            }
            await a.addContextItems(r);
        },
        async updateSessionInDB () {
            if (!this.currentSession) return;
            const { masterDb: n } = await q(async ()=>{
                const { masterDb: a } = await import("./db-master-D0ahR8Qm.js").then((r)=>r.w);
                return {
                    masterDb: a
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])), e = L(this.currentSession.modeState), t = L(this.currentSession.modeConfig);
            await n.sessions.update(this.currentSession.id, {
                modeConfig: t,
                modeState: e,
                updatedAt: Date.now()
            });
        }
    });
    function Xe() {
        const n = Ie((u)=>Me(u.config)), e = j.useRef(!1), t = j.useRef(async ()=>{}), a = Z(), r = j.useCallback(async (u, p, x, o, h = {})=>{
            const _ = g.contextManager;
            if (!_) return {
                content: ""
            };
            const y = {
                id: D(),
                type: x,
                orderRef: 0,
                timestamp: Date.now(),
                data: {
                    content: "",
                    ...h
                }
            };
            _.setProcessingItem(y);
            let S = "";
            return await Pe(u, p, [], (M, I)=>{
                o?.(M), S = I;
                const P = _.getProcessingItem();
                P && (P.data.content = I);
            }), _.completeProcessingItem(), {
                content: S
            };
        }, []), i = j.useCallback(async (u, p, x)=>{
            const o = g.sessionManager, h = g.contextManager;
            if (o && h) if (u.callbackPhase === "dm_eval_changes") {
                try {
                    const _ = p.indexOf("{"), y = p.lastIndexOf("}") + 1;
                    if (_ >= 0 && y > _) {
                        const S = JSON.parse(p.slice(_, y)), M = S.analyze || "", I = [];
                        if (S.operations) {
                            const R = o.session.modeConfig.variables || {};
                            for (const b of S.operations){
                                if (!R[b.key]) continue;
                                let C = null;
                                b.op === "delta" ? C = [
                                    "delta",
                                    b.key,
                                    Number(b.value)
                                ] : b.op === "setTo" ? C = [
                                    "setTo",
                                    b.key,
                                    b.value
                                ] : b.op === "setTrue" ? C = [
                                    "setTrue",
                                    b.key
                                ] : b.op === "setFalse" ? C = [
                                    "setFalse",
                                    b.key
                                ] : b.op === "add" ? C = [
                                    "add",
                                    b.key,
                                    String(b.value)
                                ] : b.op === "remove" && (C = [
                                    "remove",
                                    b.key,
                                    String(b.value)
                                ]), C && (g.applyVariableOperation(C), I.push(C));
                            }
                        }
                        const P = {
                            id: D(),
                            type: "challenge_mode_dm_eval",
                            idx: 0,
                            orderRef: 0,
                            timestamp: Date.now(),
                            data: {
                                analyze: M,
                                operations: I
                            },
                            hidden: !1
                        };
                        h.addHistoryItem(P), await g.saveNewContextItemsToDB(x, h.getHistoryItems());
                    }
                } catch (_) {
                    console.error("Failed to parse DM evaluation", _), $.error("DM 评估数据解析失败，将忽略本次变更");
                }
                o.enterNextState("dm_narrate_changes"), o.setCurrentUIState(o.getDoneUIStateForPhase("dm_eval_changes"));
            } else u.callbackPhase === "dm_intro" ? (o.setCurrentUIState(o.getDoneUIStateForPhase("dm_intro")), o.enterNextState("character_intro")) : u.callbackPhase === "character_intro" ? (o.setCurrentUIState(o.getDoneUIStateForPhase("character_intro")), o.enterNextState("player_input")) : u.callbackPhase === "dm_narrate_changes" ? (o.setCurrentUIState(o.getDoneUIStateForPhase("dm_narrate_changes")), o.enterNextState("failure_check")) : u.callbackPhase === "character_response" && (o.setCurrentUIState(o.getDoneUIStateForPhase("character_response")), o.session.modeState.shouldCheck !== !1 ? o.enterNextState("dm_eval_changes") : o.enterNextState("player_input"));
        }, []), d = j.useCallback(async (u, p)=>{
            const x = g.sessionManager, o = g.contextManager;
            if (!(x && o)) return;
            const h = await x.executeCurrentStateLogic(o);
            if (console.log("[Loop] Action:", h), h.type === "WAIT_FOR_INPUT" || h.type === "STOP") {
                await g.updateSessionInDB(), e.current = !1;
                return;
            }
            if (h.type === "STATE_CHANGE") {
                await g.updateSessionInDB(), setTimeout(()=>{
                    t.current(u.id);
                }, 0);
                return;
            }
            if (h.type === "LLM_CALL") {
                if (h.callbackPhase) {
                    const y = h.callbackPhase;
                    x.setCurrentUIState(x.getRunningUIStateForPhase(y));
                }
                await g.updateSessionInDB();
                const _ = await r(p, h.messages.map((y)=>({
                        ...y,
                        id: D()
                    })), h.llmRequestType, void 0, h.dataExtra);
                await g.saveNewContextItemsToDB(u.id, o.getHistoryItems()), await i(h, _.content, u.id), await g.updateSessionInDB(), setTimeout(()=>{
                    t.current(u.id);
                }, 0);
            }
        }, [
            r,
            i
        ]), c = j.useCallback(async (u)=>{
            const p = g.currentSession;
            if (!p || p.id !== u) return;
            const x = {
                ...n
            };
            try {
                e.current = !0, await d(p, x);
            } catch (o) {
                console.error("ChallengeLoop Critical Error:", o), $.error("LLM 调用失败，请前往 LLM 配置页面进行配置", {
                    duration: Number.POSITIVE_INFINITY,
                    action: {
                        label: "前往配置",
                        onClick: ()=>a({
                                to: "/config/llm"
                            })
                    }
                }), e.current = !1;
            }
        }, [
            n,
            a,
            d
        ]);
        return t.current = c, {
            nextStep: j.useCallback(async (u)=>{
                if (e.current) return;
                const p = g.currentSession, x = g.contextManager, o = g.sessionManager;
                if (!(p && x && o)) {
                    console.warn("Session or Managers not ready");
                    return;
                }
                if (u) {
                    if (o.getCurrentPhase() !== "player_input") {
                        $.warning("当前并非玩家行动回合");
                        return;
                    }
                    o.setCurrentUIState(o.getRunningUIStateForPhase("player_input")), x.addLLMResponseAsContextItem({
                        role: "user",
                        content: u
                    }, {}), await g.saveNewContextItemsToDB(p.id, x.getHistoryItems()), o.setCurrentUIState(o.getDoneUIStateForPhase("player_input")), o.enterNextState("character_response"), o.setCurrentUIState(o.getReadyUIStateForPhase("character_response")), await g.updateSessionInDB();
                }
                await c(p.id);
            }, [
                c
            ])
        };
    }
    function Ze(n) {
        const e = ye.safeParse(n);
        return e.success ? e.data : null;
    }
    let et, K, W, tt, Q, X;
    Pt = (n)=>{
        const e = Z(), [t, a] = j.useState(""), [r, i] = j.useState(!1), [d, c] = j.useState(!1), m = ce(g), { data: u = [] } = H((l)=>l.from({
                s: fe
            })), { data: p = [] } = H((l)=>l.from({
                c: xe
            })), x = u.find((l)=>l.id === n.sessionId), o = Ze(x), h = p.find((l)=>l.id === o?.modeConfig.characterId);
        j.useEffect(()=>{
            let l = !1;
            if (!o) return;
            if (g.currentSession?.id === o.id && g.contextManager) {
                c(!0);
                return;
            }
            return (async ()=>{
                try {
                    const v = await _e.createSessionDB(o.id).getContextItems();
                    if (l) return;
                    const N = !o.modeConfig.characterSnapshot && h ? {
                        ...o,
                        modeConfig: {
                            ...o.modeConfig,
                            characterSnapshot: {
                                name: h.name,
                                description: h.description,
                                avatar: h.avatar
                            }
                        }
                    } : o;
                    g.loadSession(N, {
                        historyItems: v,
                        processingItem: void 0
                    }), c(!0);
                } catch (w) {
                    console.error("Load session error", w);
                }
            })(), ()=>{
                l = !0;
            };
        }, [
            o,
            h
        ]);
        const { nextStep: _ } = Xe(), y = async ()=>{
            if (r) return;
            const l = g.sessionManager, f = g.contextManager;
            if (l && f) {
                i(!0);
                try {
                    if (Te(n.sessionId, "challenge"), f.getHistoryItems().some((N)=>N.type === "challenge_mode_ending")) {
                        l.setShouldCheck(!1), l.enterNextState("player_input"), l.setCurrentUIState(l.getReadyUIStateForPhase("player_input")), await g.updateSessionInDB();
                        return;
                    }
                    const v = l.getActualCurrentPhase(f);
                    l.enterNextState(v), l.setCurrentUIState(l.getReadyUIStateForPhase(v)), await g.updateSessionInDB(), await _();
                } finally{
                    i(!1);
                }
            }
        };
        if (!(o && h && d)) return s.jsxs("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
            children: [
                s.jsx("div", {
                    className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center",
                    children: s.jsx(U, {
                        className: "w-6 h-6 opacity-20"
                    })
                }),
                s.jsx("p", {
                    className: "text-xs font-medium tracking-widest uppercase opacity-50",
                    children: "正在构建叙事环境..."
                })
            ]
        });
        const S = async ()=>{
            if (!(!t.trim() || r)) {
                i(!0);
                try {
                    await _(t), Ue(n.sessionId, "challenge");
                } finally{
                    i(!1), a("");
                }
            }
        }, M = g.sessionManager && g.contextManager ? g.sessionManager.getActualCurrentUIState(g.contextManager) : m.currentSession?.modeState?.currentUIState || "idle", I = M === "ended", P = m.currentSession?.modeConfig?.goals || [], R = m.currentSession?.modeState?.goalStates || [], b = m.currentSession?.modeConfig?.failureChecks || [], G = m.currentSession?.modeState?.failureStates || [], C = O[M] || O.idle, A = r || !(C.inputEnabled || I), se = async ()=>{
            g.sessionManager && (g.sessionManager.setShouldCheck(!1), g.sessionManager.enterNextState("player_input"), g.sessionManager.setCurrentUIState(g.sessionManager.getReadyUIStateForPhase("player_input")), await g.updateSessionInDB());
        }, re = async ()=>{
            if (!(r || !o)) {
                i(!0);
                try {
                    const l = o, f = Date.now(), w = Object.fromEntries(Object.entries(l.modeConfig.variables).map(([N, oe])=>[
                            N,
                            {
                                key: N,
                                value: oe.initial
                            }
                        ])), v = {
                        id: crypto.randomUUID(),
                        title: l.title,
                        contextId: null,
                        mode: "challenge",
                        modeConfig: {
                            ...l.modeConfig
                        },
                        modeState: {
                            currentPhase: "dm_intro",
                            currentUIState: "idle",
                            shouldCheck: !0,
                            variableStates: w,
                            goalStates: l.modeConfig.goals.map((N)=>({
                                    key: N.key,
                                    isCompleted: !1
                                })),
                            failureStates: l.modeConfig.failureChecks.map((N)=>({
                                    key: N.key,
                                    isCompleted: !1
                                }))
                        },
                        characterId: l.characterId ?? l.modeConfig.characterId,
                        challengeId: l.challengeId,
                        createdAt: f,
                        updatedAt: f,
                        isActive: !0
                    };
                    await J.sessions.add(v), e({
                        to: "/session/$sessionId",
                        params: {
                            sessionId: v.id
                        }
                    });
                } catch (l) {
                    console.error("Failed to restart challenge session:", l), $.error("再次挑战失败，请稍后重试");
                } finally{
                    i(!1);
                }
            }
        }, ne = ()=>{
            console.log("[Challenge][Memory Session]", g.currentSession);
        }, ie = async ()=>{
            if (!o?.id) return;
            const l = await J.sessions.getTable().get(o.id);
            console.log("[Challenge][DB Session]", l);
        };
        return s.jsxs("div", {
            className: "flex flex-row h-full overflow-hidden bg-background",
            children: [
                s.jsxs("div", {
                    className: "flex flex-col grow min-w-0 h-full relative",
                    children: [
                        s.jsxs("div", {
                            className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10",
                            children: [
                                s.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        s.jsx(je, {
                                            character: h,
                                            size: "xs",
                                            shape: "rounded"
                                        }),
                                        s.jsxs("div", {
                                            className: "flex flex-col",
                                            children: [
                                                s.jsxs("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        s.jsx("span", {
                                                            className: "font-bold text-sm tracking-tight",
                                                            children: h.name
                                                        }),
                                                        s.jsx(F, {
                                                            variant: "outline",
                                                            className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-primary/5 text-primary border-primary/10",
                                                            children: "Lv.1"
                                                        })
                                                    ]
                                                }),
                                                s.jsx("span", {
                                                    className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide",
                                                    children: "叙事协议连接已建立"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                s.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        s.jsxs(F, {
                                            variant: "secondary",
                                            className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50",
                                            children: [
                                                s.jsx("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                                                }),
                                                "CHALLENGE"
                                            ]
                                        }),
                                        s.jsx(T, {
                                            variant: "ghost",
                                            size: "sm",
                                            className: "h-6 px-2 text-[10px]",
                                            onClick: ne,
                                            children: "LOG MEM"
                                        }),
                                        s.jsx(T, {
                                            variant: "ghost",
                                            size: "sm",
                                            className: "h-6 px-2 text-[10px]",
                                            onClick: ie,
                                            children: "LOG DB"
                                        })
                                    ]
                                })
                            ]
                        }),
                        s.jsx(Se, {
                            className: "flex grow",
                            children: s.jsx("div", {
                                className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-10",
                                children: (()=>{
                                    const l = (m.contextManager?.state.historyItems || []).filter((v)=>!v.hidden), f = m.contextManager?.state.processingItem;
                                    if (M === "idle") {
                                        const v = l.length === 0 ? "开始" : "继续";
                                        return s.jsxs("div", {
                                            className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                                            children: [
                                                s.jsx("div", {
                                                    className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500",
                                                    children: s.jsx(V, {
                                                        className: "w-10 h-10 text-amber-500 drop-shadow-sm"
                                                    })
                                                }),
                                                s.jsx("h2", {
                                                    className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                                                    children: o.modeConfig.characterSnapshot?.name || "挑战模式"
                                                }),
                                                s.jsx("p", {
                                                    className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm",
                                                    children: o.modeConfig.userGuidance || "命运的齿轮已经开始转动，你准备好接受挑战了吗？"
                                                }),
                                                s.jsxs(T, {
                                                    size: "lg",
                                                    className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-primary/25 shadow-primary/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90",
                                                    onClick: y,
                                                    disabled: r,
                                                    children: [
                                                        r ? s.jsx(U, {
                                                            className: "w-5 h-5 animate-spin mr-3"
                                                        }) : s.jsx(ee, {
                                                            className: "w-5 h-5 mr-3"
                                                        }),
                                                        v
                                                    ]
                                                }),
                                                s.jsxs("div", {
                                                    className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest",
                                                    children: [
                                                        s.jsxs("span", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                s.jsx(B, {
                                                                    className: "w-3 h-3"
                                                                }),
                                                                " 自动存档"
                                                            ]
                                                        }),
                                                        s.jsxs("span", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                s.jsx(U, {
                                                                    className: "w-3 h-3"
                                                                }),
                                                                " 实时变量"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        });
                                    }
                                    const w = [
                                        ...l
                                    ];
                                    return f && !f.hidden && !l.some((v)=>v.id === f.id) && w.push(f), w.map((v, N)=>s.jsx(et, {
                                            item: v,
                                            character: h
                                        }, `[${N}]${v.id}`));
                                })()
                            })
                        }),
                        I ? s.jsx("div", {
                            className: "p-6 md:p-8 shrink-0 bg-background border-t",
                            children: s.jsxs("div", {
                                className: "max-w-xl mx-auto flex flex-col items-center gap-6 animate-in slide-in-from-bottom-4 fade-in duration-700",
                                children: [
                                    s.jsx("div", {
                                        className: "text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60",
                                        children: "故事已完结"
                                    }),
                                    s.jsxs("div", {
                                        className: "flex items-center gap-4 w-full",
                                        children: [
                                            s.jsxs(T, {
                                                variant: "outline",
                                                className: "flex-1 h-12 rounded-xl border-dashed border-2 hover:border-primary/50 hover:bg-primary/5 gap-2",
                                                onClick: re,
                                                children: [
                                                    s.jsx(Ae, {
                                                        className: "w-4 h-4"
                                                    }),
                                                    s.jsx("span", {
                                                        className: "font-bold tracking-wider",
                                                        children: "再次挑战"
                                                    })
                                                ]
                                            }),
                                            s.jsxs(T, {
                                                className: "flex-2 h-12 rounded-xl shadow-lg shadow-primary/10 gap-2 text-base",
                                                onClick: se,
                                                children: [
                                                    s.jsx(De, {
                                                        className: "w-4 h-4 fill-current"
                                                    }),
                                                    s.jsx("span", {
                                                        className: "font-black tracking-[0.15em] uppercase",
                                                        children: "继续自由对话"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : s.jsxs("div", {
                            className: "p-4 md:p-6 shrink-0 bg-background",
                            children: [
                                s.jsxs("div", {
                                    className: "max-w-3xl mx-auto relative group",
                                    children: [
                                        s.jsx(ke, {
                                            value: t,
                                            onChange: (l)=>a(l.target.value),
                                            placeholder: A ? C.placeholder : O.player_input_ready.placeholder,
                                            disabled: A,
                                            className: k("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-primary/20 focus-visible:bg-background transition-all", A && "opacity-50 cursor-not-allowed"),
                                            onKeyDown: (l)=>{
                                                l.key === "Enter" && !l.shiftKey && (l.preventDefault(), S());
                                            }
                                        }),
                                        s.jsx(T, {
                                            size: "icon",
                                            type: "button",
                                            className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-primary/20 transition-all",
                                            disabled: !t.trim() || A,
                                            onClick: S,
                                            children: r ? s.jsx(U, {
                                                className: "w-4 h-4 animate-spin"
                                            }) : s.jsx(Ee, {
                                                className: "w-4 h-4"
                                            })
                                        })
                                    ]
                                }),
                                s.jsxs("div", {
                                    className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40",
                                    children: [
                                        s.jsx("div", {
                                            className: "text-[9px] font-bold tracking-widest uppercase",
                                            children: "INPUT MANIFESTO"
                                        }),
                                        s.jsx("div", {
                                            className: "text-[9px] font-medium",
                                            children: A ? "输入已锁定" : "Shift + Enter 换行"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                s.jsxs("div", {
                    className: "w-[320px] h-full overflow-y-auto bg-muted/10 border-l p-8 space-y-10 shrink-0 hidden lg:block scrollbar-none",
                    children: [
                        s.jsxs("div", {
                            className: "space-y-6",
                            children: [
                                s.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        s.jsxs("div", {
                                            className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                                            children: [
                                                s.jsx(U, {
                                                    className: "w-3.5 h-3.5 text-primary"
                                                }),
                                                "世界变量"
                                            ]
                                        }),
                                        s.jsx(F, {
                                            variant: "outline",
                                            className: "text-[9px] px-1.5 opacity-50",
                                            children: "SYNCED"
                                        })
                                    ]
                                }),
                                s.jsxs("div", {
                                    className: "grid grid-cols-1 gap-3",
                                    children: [
                                        Object.entries(m.currentSession?.modeState?.variableStates || {}).map(([l, f])=>s.jsxs("div", {
                                                className: "bg-background/40 p-4 rounded-xl border border-muted/30 hover:border-primary/20 transition-colors group",
                                                children: [
                                                    s.jsxs("div", {
                                                        className: "flex justify-between items-start mb-1",
                                                        children: [
                                                            s.jsx("span", {
                                                                className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider",
                                                                children: l
                                                            }),
                                                            s.jsx("div", {
                                                                className: "w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors"
                                                            })
                                                        ]
                                                    }),
                                                    s.jsx("div", {
                                                        className: "text-xl font-mono font-bold tracking-tight text-foreground/90",
                                                        children: typeof f?.value == "number" ? f.value.toLocaleString() : String(f?.value)
                                                    })
                                                ]
                                            }, l)),
                                        Object.keys(m.currentSession?.modeState?.variableStates || {}).length === 0 && s.jsx("div", {
                                            className: "py-8 text-center border border-dashed rounded-xl opacity-30",
                                            children: s.jsx("p", {
                                                className: "text-[10px] font-bold uppercase tracking-widest",
                                                children: "无动态变量"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        s.jsxs("div", {
                            className: "space-y-6",
                            children: [
                                s.jsxs("div", {
                                    className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                                    children: [
                                        s.jsx(Fe, {
                                            className: "w-3.5 h-3.5 text-primary"
                                        }),
                                        "生存目标"
                                    ]
                                }),
                                s.jsxs("div", {
                                    className: "space-y-2.5",
                                    children: [
                                        P.map((l)=>{
                                            const f = R.find((w)=>w.key === l.key);
                                            return s.jsxs("div", {
                                                className: k("p-3.5 rounded-xl border flex items-start gap-3 transition-all duration-300", f?.isCompleted ? "bg-primary/3 border-primary/20 shadow-sm" : "bg-background/40 border-muted/50 grayscale-[0.8] opacity-60"),
                                                children: [
                                                    s.jsx("div", {
                                                        className: k("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5 shadow-inner", f?.isCompleted ? "bg-primary text-primary-foreground" : "bg-muted border border-muted-foreground/10"),
                                                        children: f?.isCompleted ? s.jsx(B, {
                                                            className: "w-3 h-3"
                                                        }) : s.jsx("div", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20"
                                                        })
                                                    }),
                                                    s.jsxs("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            s.jsx("div", {
                                                                className: k("text-[13px] leading-tight font-bold tracking-tight", f?.isCompleted ? "text-primary" : "text-foreground/70"),
                                                                children: l.description
                                                            }),
                                                            f?.isCompleted && s.jsx("span", {
                                                                className: "text-[9px] font-bold uppercase tracking-wider opacity-60",
                                                                children: "Objective Achieved"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, l.key);
                                        }),
                                        P.length === 0 && s.jsx("div", {
                                            className: "py-8 text-center border border-dashed rounded-xl opacity-30",
                                            children: s.jsx("p", {
                                                className: "text-[10px] font-bold uppercase tracking-widest",
                                                children: "无设定目标"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        s.jsxs("div", {
                            className: "space-y-6",
                            children: [
                                s.jsxs("div", {
                                    className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                                    children: [
                                        s.jsx(V, {
                                            className: "w-3.5 h-3.5 text-destructive"
                                        }),
                                        "死亡禁忌"
                                    ]
                                }),
                                s.jsxs("div", {
                                    className: "space-y-2.5",
                                    children: [
                                        b.map((l)=>{
                                            const f = G.find((w)=>w.key === l.key);
                                            return s.jsxs("div", {
                                                className: k("p-3.5 rounded-xl border flex items-start gap-3 transition-all", f?.isCompleted ? "bg-destructive/5 border-destructive/20" : "bg-background/40 border-muted/50 opacity-60"),
                                                children: [
                                                    s.jsx("div", {
                                                        className: k("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5", f?.isCompleted ? "bg-destructive text-destructive-foreground" : "bg-muted border border-muted-foreground/10"),
                                                        children: f?.isCompleted ? s.jsx($e, {
                                                            className: "w-3 h-3"
                                                        }) : s.jsx("div", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20"
                                                        })
                                                    }),
                                                    s.jsxs("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            s.jsx("div", {
                                                                className: k("text-[13px] leading-tight font-bold tracking-tight", f?.isCompleted ? "text-destructive" : "text-foreground/70"),
                                                                children: l.description
                                                            }),
                                                            f?.isCompleted && s.jsx("span", {
                                                                className: "text-[9px] font-bold uppercase tracking-wider opacity-60",
                                                                children: "Critical Failure Triggered"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, l.key);
                                        }),
                                        b.length === 0 && s.jsx("div", {
                                            className: "py-8 text-center border border-dashed rounded-xl opacity-30",
                                            children: s.jsx("p", {
                                                className: "text-[10px] font-bold uppercase tracking-widest",
                                                children: "无失败判定"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        s.jsxs("div", {
                            className: "pt-10 opacity-30",
                            children: [
                                s.jsx("div", {
                                    className: "h-px bg-linear-to-r from-transparent via-muted-foreground/50 to-transparent"
                                }),
                                s.jsx("p", {
                                    className: "text-[9px] text-center mt-4 font-bold tracking-[0.3em] uppercase",
                                    children: "Narrative Engine v1.0.4"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    et = (n)=>{
        const { item: e, character: t } = n, r = (()=>{
            const i = e.data;
            return i ? Array.isArray(i.operations) ? s.jsx(W, {
                item: e
            }) : Array.isArray(i.results) && i.results.every((d)=>{
                if (!d || typeof d != "object") return !1;
                const c = d;
                return c.type === "goal" || c.type === "failure";
            }) ? s.jsx(Q, {
                item: e
            }) : i.type && (i.type === "success" || i.type === "failure") && typeof i.description == "string" ? s.jsx(X, {
                item: e
            }) : null : null;
        })();
        if (r) return r;
        switch(e.type){
            case "dm_intro":
                return s.jsx(K, {
                    content: e.data.content,
                    title: "Challenge Intro"
                });
            case "challenge_mode_dm_eval":
                return s.jsx(W, {
                    item: e
                });
            case "challenge_mode_checking":
                return s.jsx(Q, {
                    item: e
                });
            case "challenge_mode_ending":
                return s.jsx(X, {
                    item: e
                });
            case "character_intro":
                return s.jsx(Ne, {
                    item: e,
                    character: t
                });
            case "character_message":
                return s.jsx(Y, {
                    item: e,
                    character: t
                });
            case "character_message_group":
                return s.jsx("div", {
                    className: "space-y-4",
                    children: (Array.isArray(e.data.list) ? e.data.list : []).map((i, d)=>{
                        const c = i && typeof i == "object", m = c && typeof i.id == "string" ? i.id : `${e.id}-${d}`, u = c && typeof i.content == "string" ? i.content : "", p = {
                            ...e,
                            data: {
                                ...e.data,
                                content: u
                            }
                        };
                        return s.jsx(Y, {
                            item: p,
                            character: t
                        }, m);
                    })
                });
            case "participant_message":
                return e.data.isDM || e.data.name === "DM" || !(e.data.isUser || e.data.isCharacter || e.data.isEnv) ? s.jsx(K, {
                    content: e.data.content
                }) : s.jsx(we, {
                    item: e
                });
            case "system_notification":
                return s.jsx("div", {
                    className: "flex justify-center my-6",
                    children: s.jsxs("div", {
                        className: "flex items-center gap-3 px-4 py-1.5 rounded-full bg-muted/30 border border-muted/50 text-muted-foreground shadow-sm",
                        children: [
                            s.jsx("span", {
                                className: "w-1 h-1 rounded-full bg-muted-foreground/40"
                            }),
                            s.jsx("span", {
                                className: "text-[10px] font-bold tracking-widest uppercase",
                                children: e.data.content
                            }),
                            s.jsx("span", {
                                className: "w-1 h-1 rounded-full bg-muted-foreground/40"
                            })
                        ]
                    })
                });
            case "placeholder":
                return null;
            default:
                return null;
        }
    };
    K = ({ content: n, title: e = "Narrative Master" })=>s.jsxs("div", {
            className: "flex gap-6 group animate-in fade-in slide-in-from-left-2 duration-500",
            children: [
                s.jsxs("div", {
                    className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden",
                    children: [
                        s.jsx("div", {
                            className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                        }),
                        s.jsx(Re, {
                            className: "w-5 h-5 text-amber-600 relative z-10"
                        })
                    ]
                }),
                s.jsxs("div", {
                    className: "space-y-2 grow pt-1",
                    children: [
                        s.jsxs("div", {
                            className: "text-[10px] font-black tracking-[0.2em] text-amber-600/60 flex items-center gap-2 uppercase",
                            children: [
                                s.jsx(ee, {
                                    className: "w-3 h-3"
                                }),
                                e
                            ]
                        }),
                        s.jsx("div", {
                            className: "text-[15px] leading-relaxed italic text-foreground/80 whitespace-pre-wrap font-serif",
                            children: n
                        })
                    ]
                })
            ]
        });
    W = ({ item: n })=>{
        const e = typeof n.data.analyze == "string" ? n.data.analyze : "", t = Array.isArray(n.data.operations) ? n.data.operations : [];
        return s.jsx("div", {
            className: "max-w-2xl mx-auto w-full group animate-in fade-in zoom-in-95 duration-500",
            children: s.jsxs("div", {
                className: "bg-muted/10 border border-muted/40 rounded-2xl overflow-hidden shadow-sm",
                children: [
                    s.jsxs("div", {
                        className: "px-4 py-2 border-b border-muted/40 bg-muted/20 flex items-center justify-between",
                        children: [
                            s.jsxs("div", {
                                className: "flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground/60",
                                children: [
                                    s.jsx(U, {
                                        className: "w-3 h-3"
                                    }),
                                    "世界线演变评估"
                                ]
                            }),
                            s.jsx(Oe, {
                                className: "w-3 h-3 text-muted-foreground/30"
                            })
                        ]
                    }),
                    s.jsxs("div", {
                        className: "p-5 space-y-4",
                        children: [
                            e && s.jsx("div", {
                                className: "text-[13px] text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1",
                                children: e
                            }),
                            s.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: t.map((a, r)=>s.jsx(tt, {
                                        operation: a
                                    }, r))
                            })
                        ]
                    })
                ]
            })
        });
    };
    tt = ({ operation: n })=>{
        const [e, t, a] = n;
        let r = "bg-primary/10 text-primary border-primary/20", i = "";
        if (e === "delta") {
            const d = a;
            r = d > 0 ? "bg-green-500/10 text-green-600 border-green-500/20" : "bg-red-500/10 text-red-600 border-red-500/20", i = `${t} ${d > 0 ? "+" : ""}${d}`;
        } else e === "setTrue" || e === "setFalse" ? i = `${t} → ${e === "setTrue" ? "YES" : "NO"}` : i = `${t} = ${a}`;
        return s.jsx(F, {
            variant: "outline",
            className: k("text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg border", r),
            children: i
        });
    };
    Q = ({ item: n })=>{
        const e = Array.isArray(n.data.results) ? n.data.results : [];
        return s.jsx("div", {
            className: "flex justify-center opacity-40 hover:opacity-100 transition-opacity",
            children: s.jsx("div", {
                className: "flex gap-4",
                children: e.map((t, a)=>{
                    if (!t || typeof t != "object") return null;
                    const r = t;
                    return r.result ? s.jsxs("div", {
                        className: "flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground",
                        children: [
                            s.jsx(B, {
                                className: "w-3 h-3 text-primary"
                            }),
                            typeof r.key == "string" ? r.key : "判定",
                            " 更新"
                        ]
                    }, a) : null;
                })
            })
        });
    };
    X = ({ item: n })=>{
        const e = n.data.type === "success" || n.data.type === "failure" ? n.data.type : "failure", t = typeof n.data.description == "string" ? n.data.description : "挑战已结束", a = typeof n.data.failureReason == "string" ? n.data.failureReason : "", r = e === "success";
        return s.jsx("div", {
            className: "py-12 animate-in fade-in zoom-in duration-1000",
            children: s.jsxs("div", {
                className: k("max-w-lg mx-auto p-12 rounded-[2.5rem] border-4 text-center space-y-6 shadow-2xl relative overflow-hidden", r ? "bg-primary/5 border-primary/30 shadow-primary/10" : "bg-destructive/5 border-destructive/30 shadow-destructive/10"),
                children: [
                    s.jsx("div", {
                        className: k("absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20", r ? "bg-primary" : "bg-destructive")
                    }),
                    s.jsx("div", {
                        className: k("absolute -bottom-12 -left-12 w-48 h-48 rounded-full blur-3xl opacity-20", r ? "bg-primary" : "bg-destructive")
                    }),
                    s.jsx("div", {
                        className: "inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-background border shadow-xl relative z-10 mb-2",
                        children: r ? s.jsx(V, {
                            className: "w-12 h-12 text-primary animate-bounce-short"
                        }) : s.jsx(Le, {
                            className: "w-12 h-12 text-destructive animate-pulse"
                        })
                    }),
                    s.jsxs("div", {
                        className: "space-y-2 relative z-10",
                        children: [
                            s.jsx("h2", {
                                className: k("text-3xl font-black uppercase tracking-[0.3em]", r ? "text-primary" : "text-destructive"),
                                children: r ? "挑战成功" : "挑战失败"
                            }),
                            s.jsx("div", {
                                className: "h-1 w-12 bg-muted-foreground/20 mx-auto rounded-full"
                            })
                        ]
                    }),
                    s.jsx("p", {
                        className: "text-lg font-medium text-foreground/80 leading-relaxed font-serif relative z-10",
                        children: t
                    }),
                    !r && a && s.jsxs("div", {
                        className: "pt-4 px-6 relative z-10",
                        children: [
                            s.jsx("div", {
                                className: "text-[10px] font-black uppercase tracking-[0.2em] text-destructive/60 mb-2",
                                children: "失败根源"
                            }),
                            s.jsxs("p", {
                                className: "text-xs font-bold text-destructive/80 italic",
                                children: [
                                    "「",
                                    a,
                                    "」"
                                ]
                            })
                        ]
                    }),
                    s.jsx("div", {
                        className: "pt-8 relative z-10",
                        children: s.jsx(F, {
                            variant: "outline",
                            className: "text-[10px] font-black tracking-[0.4em] uppercase py-2 px-6 rounded-2xl bg-background/50 backdrop-blur-sm border-muted/50",
                            children: "NARRATIVE ENDED"
                        })
                    })
                ]
            })
        });
    };
});
export { Pt as SessionMainForChallenge, __tla };
