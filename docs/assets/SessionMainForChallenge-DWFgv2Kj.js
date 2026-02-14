const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-BrZHBPj2.js","assets/@tanstack-3iyDWv8L.js","assets/react-D9TtqY-V.js","assets/vendor-C4ToNUTj.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-C2pyTzVO.js","assets/zod-fbN9ubnj.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { D as O, F as V, r as j, t as A, E as ae, j as s } from "./react-D9TtqY-V.js";
import { f as Y, i as B } from "./@tanstack-3iyDWv8L.js";
import { O as re, j as ne, k as ie, l as oe, n as ce, o as le, p as de, S as ue, C as he, q as $, m as me } from "./db-master-BrZHBPj2.js";
import { s as pe } from "./db--eUIPBg3.js";
import { _ as G, __tla as __tla_0 } from "./index-IzUhM_kF.js";
import { C as ge } from "./context-manager.class-B2xis078.js";
import { S as fe } from "./session-manager.class-DPAZ4frV.js";
import { n as U } from "./id-OxPLOBIU.js";
import { m as xe, P as _e, C as H, a as ye } from "./PlayerInputItem-Ce2vNpzb.js";
import { B as P } from "./button-CMoAlsw3.js";
import { T as be } from "./textarea-NuAUq_bK.js";
import { B as D } from "./badge-B6qKYUZD.js";
import { u as Se, a as ve } from "./global-llm-config.store-C91qlFOh.js";
import { c as v } from "./shadcn-utils-BMZD7_jZ.js";
import { ai as E, E as K, m as L, i as Q, C as R, W as Ce, c as we, ak as Ne, ag as ke, ah as je, w as Ie, I as Me } from "./icons-bBaH0MBC.js";
import "./vendor-C4ToNUTj.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C2pyTzVO.js";
import "./zod-fbN9ubnj.js";
import "./es-toolkit-CstbrnlE.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
let ut;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function T(i) {
    const e = i.modeConfig.characterSnapshot;
    if (!e) throw new Error("Critical Error: Character snapshot missing in session config.");
    return e;
  }
  function X(i, e) {
    const t = T(e);
    return i.getFlatHistoryItems(10).filter((a) => !a.hidden && !a.deleted).map((a) => {
      const { type: r, data: n } = a;
      if (r === "participant_message") {
        let c = "\u73A9\u5BB6";
        return n.isDM || n.name === "DM" ? c = "DM\u65C1\u767D" : n.name && (c = n.name), `${c}: ${n.content}`;
      }
      return r === "character_message" ? `${n.name || t.name}: ${n.content}` : r === "dm_intro" ? `DM\u5F00\u573A/\u89C4\u5219: ${n.content}` : r === "character_intro" ? `${t.name}\u5F00\u573A: ${n.content}` : null;
    }).filter(Boolean).join(`
`);
  }
  const Pe = `
\u4F60\u73B0\u5728\u7684\u8EAB\u4EFD\u662F DM (\u5730\u4E0B\u57CE\u4E3B/\u6E38\u620F\u4E3B\u6301\u4EBA)\uFF0C\u6B63\u5728\u4E3B\u6301\u4E00\u573A\u6587\u5B57\u5192\u9669\u6311\u6218\u3002
\u4F60\u7684\u804C\u8D23\u662F\u5411\u3010\u73A9\u5BB6/user\u3011\u8BE6\u7EC6\u4ECB\u7ECD\u5F53\u524D\u7684\u6311\u6218\u80CC\u666F\u3001\u6838\u5FC3\u76EE\u6807\u4EE5\u53CA\u6E38\u620F\u89C4\u5219\uFF0C\u5E76\u7ED9\u51FA\u660E\u786E\u7684\u64CD\u4F5C\u6307\u5F15\u3002

\u6CE8\u610F\uFF1A
1. \u4F60\u662F\u4E3B\u6301\u4EBA\uFF0C\u4E0D\u662F\u6E38\u620F\u4E2D\u7684\u89D2\u8272\u3002\u8BF7\u4EE5\u89E3\u8BF4\u3001\u4E13\u4E1A\u4E14\u5177\u6709\u6C89\u6D78\u611F\u7684\u8BED\u6C14\u8BF4\u8BDD\u3002
2. \u4F60\u7684\u4ECB\u7ECD\u5E94\u5305\u542B\u5F53\u524D\u7684\u6311\u6218\u4E3B\u9898\u3001\u3010\u73A9\u5BB6/user\u3011\u9700\u8981\u4E0E\u4E4B\u4E92\u52A8\u7684\u3010\u53D7\u6311\u6218\u7684\u89D2\u8272\u3011\u8EAB\u4EFD\uFF0C\u4EE5\u53CA\u8FBE\u6210\u6210\u529F\u7684\u6761\u4EF6\u3002
3. \u8BF7\u4FDD\u6301\u7B80\u6D01\uFF0C\u4E0D\u8981\u8FDB\u884C\u4EFB\u4F55\u5373\u65F6\u7684\u53D9\u4E8B\u6216\u5BF9\u8BDD\u63CF\u8FF0\uFF0C\u4F60\u4EC5\u8D1F\u8D23\u5F00\u573A\u3002

\u5F53\u524D\u6311\u6218\u540D\u79F0\uFF1A{{title}}
\u53D7\u6311\u6218\u7684\u89D2\u8272\uFF1A{{characterName}} ({{characterDescription}})
\u6CE8\u610F\uFF1A\u53C2\u4E0E\u6311\u6218\u7684\u662F\u3010\u73A9\u5BB6/user\u3011\uFF0C\u800C {{characterName}} \u662F\u3010\u73A9\u5BB6/user\u3011\u4E92\u52A8\u548C\u535A\u5F08\u7684\u5BF9\u8C61\u3002

### \u6311\u6218\u76EE\u6807\uFF1A
{{gameGoals}}

### \u5931\u8D25\u5224\u5B9A\uFF1A
{{failureConditions}}

### \u4E16\u754C\u89C4\u5219/\u5173\u952E\u53D8\u91CF\u8BF4\u660E\uFF1A
{{variableDescriptions}}

### \u5BF9\u73A9\u5BB6\u7684\u884C\u4E3A\u6307\u5F15\uFF1A
{{userGuidance}}
`, Ee = `
\u4F60\u73B0\u5728\u7684\u8EAB\u4EFD\u662F DM (\u5730\u4E0B\u57CE\u4E3B/\u6E38\u620F\u4E3B\u6301\u4EBA)\u3002
\u8BC4\u4F30\u3010\u73A9\u5BB6/user\u3011\u7684\u6700\u540E\u8F93\u5165\u4EE5\u53CA\u5F53\u524D\u7684\u53D8\u91CF\u72B6\u6001\u3002
\u4F60\u6B63\u5728\u89C2\u5BDF\u3010\u73A9\u5BB6/user\u3011\u4E0E\u89D2\u8272 {{characterName}} \u7684\u4E92\u52A8\u3002

### \u6311\u6218\u76EE\u6807\uFF1A
{{gameGoals}}

### \u5931\u8D25\u5224\u5B9A\uFF1A
{{failureConditions}}

### \u5386\u53F2\u6D88\u606F\uFF08\u4EC5\u4F9B\u53C2\u8003\uFF09\uFF1A
{{historyMessages}}

\u5F53\u524D\u53D8\u91CF\u72B6\u6001\uFF1A
{{variablesJSON}}

\u73A9\u5BB6\u7684\u8F93\u5165\uFF1A
{{userInput}}

\u8F93\u51FA\u4F60\u7684\u8BC4\u4F30\u7ED3\u679C\uFF0C\u5FC5\u987B\u662F\u4E00\u4E2A\u7B26\u5408\u4EE5\u4E0B TypeScript \u63A5\u53E3\u5B9A\u4E49\u7684 JSON \u5BF9\u8C61\uFF1A

\`\`\`typescript
interface EvaluationResult {
  /** \u7B80\u77ED\u5206\u6790\u73A9\u5BB6\u884C\u52A8\u5BF9\u6545\u4E8B\u8D70\u5411\u3001\u4E16\u754C\u72B6\u6001\u548C\u53D8\u91CF\u4EA7\u751F\u7684\u5F71\u54CD */
  analyze: string;
  /** \u53D8\u91CF\u64CD\u4F5C\u5217\u8868 */
  operations: Array<
    | { key: string; op: 'delta'; value: number }          // \u9488\u5BF9\u6570\u5B57\u7C7B\u578B(number)\uFF1A\u6570\u503C\u589E\u91CF\uFF0C\u5982 10 \u6216 -5
    | { key: string; op: 'setTo'; value: number | string } // \u9488\u5BF9\u6570\u5B57\u6216\u5B57\u7B26\u4E32(string)\uFF1A\u76F4\u63A5\u8BBE\u4E3A\u76EE\u6807\u503C
    | { key: string; op: 'setTrue' }                       // \u9488\u5BF9\u5E03\u5C14\u7C7B\u578B(boolean)\uFF1A\u8BBE\u4E3A\u771F\u503C\uFF0C\u65E0\u9700 value \u5B57\u6BB5
    | { key: string; op: 'setFalse' }                      // \u9488\u5BF9\u5E03\u5C14\u7C7B\u578B(boolean)\uFF1A\u8BBE\u4E3A\u5047\u503C\uFF0C\u65E0\u9700 value \u5B57\u6BB5
    | { key: string; op: 'add'; value: string }            // \u9488\u5BF9\u6807\u7B7E(tags)\uFF1A\u5411\u5217\u8868\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u6807\u7B7E
    | { key: string; op: 'remove'; value: string }         // \u9488\u5BF9\u6807\u7B7E(tags)\uFF1A\u4ECE\u5217\u8868\u4E2D\u79FB\u9664\u4E00\u4E2A\u6807\u7B7E
  >;
}
\`\`\`

## \u53D8\u91CF\u64CD\u4F5C\u89C4\u8303 (\u4E25\u683C\u6267\u884C):
1. **\u6570\u5B57 (number)**: 
   - \u4F7F\u7528 "delta" \u6765\u589E\u51CF\u6570\u503C (\u4F8B\u5982: 10, -5)\u3002
   - \u4F7F\u7528 "setTo" \u6765\u76F4\u63A5\u8BBE\u5B9A\u5177\u4F53\u6570\u503C\u3002
2. **\u5E03\u5C14 (boolean)**:
   - \u4F7F\u7528 "setTrue" \u5C06\u53D8\u91CF\u8BBE\u4E3A\u771F\uFF0C\u4F7F\u7528 "setFalse" \u5C06\u53D8\u91CF\u8BBE\u4E3A\u5047\u3002
   - \u6CE8\u610F\uFF1A\u8FD9\u4E24\u79CD\u64CD\u4F5C\u4E0D\u9700\u8981\u63D0\u4F9B "value" \u5B57\u6BB5\u3002
3. **\u6807\u7B7E\u5217\u8868 (tags)**:
   - \u4F7F\u7528 "add" \u5411\u5217\u8868\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u6807\u7B7E\u3002
   - \u4F7F\u7528 "remove" \u4ECE\u5217\u8868\u4E2D\u79FB\u9664\u4E00\u4E2A\u6807\u7B7E\u3002
4. **\u5B57\u7B26\u4E32 (string)**:
   - \u4F7F\u7528 "setTo" \u4FEE\u6539\u5185\u5BB9\u3002
`, Te = `
\u4F60\u73B0\u5728\u7684\u8EAB\u4EFD\u662F DM (\u5730\u4E0B\u57CE\u4E3B)\u3002
\u4F60\u9700\u8981\u6839\u636E\u53D8\u91CF\u7684\u53D8\u5316\uFF0C\u63CF\u8FF0\u3010\u73A9\u5BB6/user\u3011\u521A\u624D\u7684\u8F93\u5165\u662F\u5982\u4F55\u5728\u6545\u4E8B\u4E2D\u4EA7\u751F\u5F71\u54CD\u5E76\u9020\u6210\u53D8\u91CF\u6CE2\u52A8\u7684\u3002
**\u6838\u5FC3\u4EFB\u52A1\uFF1A** \u91CD\u70B9\u63CF\u8FF0\u300C\u73A9\u5BB6\u521A\u624D\u7684\u884C\u52A8\u5982\u4F55\u5F15\u53D1\u4E86\u521A\u624D\u7684\u53D8\u91CF\u53D8\u5316\u300D\uFF0C\u4F7F\u6570\u503C\u7684\u53D8\u5316\u903B\u8F91\u5728\u53D9\u4E8B\u4E2D\u5F97\u5230\u4F53\u73B0\u3002

\u6CE8\u610F\uFF1A
1. **\u7981\u6B62**\u63CF\u8FF0\u300C\u63A5\u4E0B\u6765\u300D\u53D1\u751F\u7684\u4E8B\u60C5\u6216\u5F15\u5BFC\u6545\u4E8B\u8D70\u5411\u3002
2. **\u7981\u6B62**\u66FF\u73A9\u5BB6\u6216\u89D2\u8272\u505A\u51FA\u65B0\u7684\u884C\u52A8\u6216\u51B3\u5B9A\u3002
3. \u6587\u672C\u5E94\u751F\u52A8\u4E14\u5177\u6709\u6C89\u6D78\u611F\uFF0C\u4FDD\u6301 DM \u4E2D\u7ACB\u4E14\u4E13\u4E1A\u7684\u53D9\u8FF0\u98CE\u683C\u3002
4. \u53C2\u8003\u5BF9\u8BDD\u5386\u53F2\uFF08\u6B64\u524D\u51E0\u8F6E\u6D88\u606F\uFF09\u4EE5\u786E\u4FDD\u903B\u8F91\u8FDE\u8D2F\u3002

### \u6311\u6218\u76EE\u6807\uFF1A
{{gameGoals}}

### \u5931\u8D25\u5224\u5B9A\uFF1A
{{failureConditions}}

### \u5386\u53F2\u6D88\u606F\uFF08\u4EC5\u4F9B\u53C2\u8003\uFF09\uFF1A
{{historyMessages}}

\u73A9\u5BB6\u7684\u8F93\u5165\uFF1A
{{userInput}}

\u53D8\u91CF\u53D8\u5316\u5206\u6790\uFF1A
{{evalAnalyze}}

\u65B0\u7684\u53D8\u91CF\u72B6\u6001\uFF1A
{{variablesJSON}}
`;
  function Ue(i, e) {
    const { modeConfig: t } = i, a = T(i), r = (t.goals || []).map((o) => `- ${o.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", n = (t.failureChecks || []).map((o) => `- ${o.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", c = Object.entries(t.variables || {}).filter(([o, d]) => !d.hidden).map(([o, d]) => `- ${o}: ${d.description || "\u65E0\u63CF\u8FF0"}`).join(`
`) || "\u65E0\u516C\u5F00\u53D8\u91CF";
    return [
      {
        role: "system",
        content: Pe.replace("{{title}}", i.title || "\u6587\u5B57\u6311\u6218").replace("{{characterName}}", a.name).replace("{{characterDescription}}", a.description || "\u795E\u79D8\u89D2\u8272").replace("{{gameGoals}}", r).replace("{{failureConditions}}", n).replace("{{variableDescriptions}}", c).replace("{{userGuidance}}", t.userGuidance)
      }
    ];
  }
  function De(i, e) {
    var _a;
    const { modeConfig: t, modeState: a } = i, r = T(i), n = JSON.stringify(a.variableStates, null, 2), c = (t.goals || []).map((h) => `- ${h.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", g = (t.failureChecks || []).map((h) => `- ${h.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", o = X(e, i), f = ((_a = e.getLastUserMessage()) == null ? void 0 : _a.data.content) || "";
    return [
      {
        role: "system",
        content: Ee.replace("{{characterName}}", r.name).replace("{{gameGoals}}", c).replace("{{failureConditions}}", g).replace("{{historyMessages}}", o).replace("{{variablesJSON}}", n).replace("{{userInput}}", f)
      }
    ];
  }
  function Fe(i, e) {
    var _a, _b;
    const { modeConfig: t, modeState: a } = i, r = T(i), n = JSON.stringify(a.variableStates, null, 2), c = (t.goals || []).map((_) => `- ${_.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", g = (t.failureChecks || []).map((_) => `- ${_.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", o = X(e, i), f = ((_a = e.getLastUserMessage()) == null ? void 0 : _a.data.content) || "", h = ((_b = e.getHistoryItems().findLast((_) => _.type === "challenge_mode_dm_eval")) == null ? void 0 : _b.data.analyze) || "\u6839\u636E\u73A9\u5BB6\u884C\u52A8\u66F4\u65B0\u4E86\u76F8\u5173\u72B6\u6001\u3002";
    return [
      {
        role: "system",
        content: Te.replace("{{characterName}}", r.name).replace("{{gameGoals}}", c).replace("{{failureConditions}}", g).replace("{{variablesJSON}}", n).replace("{{userInput}}", f).replace("{{historyMessages}}", o).replace("{{evalAnalyze}}", h)
      }
    ];
  }
  function Ae(i, e) {
    const { modeConfig: t } = i, a = T(i);
    return [
      {
        role: "system",
        content: `\u4F60\u73B0\u5728\u7684\u8EAB\u4EFD\u662F\u89D2\u8272 ${a.name}\u3002
\u4F60\u6B63\u5728\u53C2\u52A0\u4E00\u573A\u540D\u4E3A\u300A${i.title || "\u6311\u6218"}\u300B\u7684\u6E38\u620F\u3002
\u4F60\u7684\u4EFB\u52A1\u63CF\u8FF0\uFF1A
${t.roleTaskPrompt}

\u73B0\u5728\uFF0C\u8BF7\u4F5C\u4E3A ${a.name} \u7ED9\u51FA\u4F60\u7684\u5F00\u5C40\u7B2C\u4E00\u53E5\u8BDD\u3002
\u8FD9\u53E5\u5BF9\u8BDD\u5E94\u8BE5\u7B26\u5408\u4F60\u7684\u6027\u683C\u3001\u5F53\u524D\u6311\u6218\u7684\u80CC\u666F\uFF0C\u5E76\u5F15\u5BFC\u73A9\u5BB6\u5F00\u59CB\u4E92\u52A8\u3002
\u4E0D\u8981\u8F93\u51FA\u4EFB\u4F55\u65C1\u767D\uFF0C\u53EA\u8F93\u51FA\u5BF9\u8BDD\u5185\u5BB9\u3002`
      }
    ];
  }
  function $e(i, e) {
    const { modeConfig: t, modeState: a } = i, r = T(i), c = {
      historyItems: e.getFlatHistoryItems()
    }, g = xe(c, {
      characterId: t.characterId
    });
    let o = `## \u4F60\u7684\u8EAB\u4EFD\u4E0E\u4EFB\u52A1
\u4F60\u6B63\u5728\u53C2\u52A0\u4E00\u573A\u540D\u4E3A\u300A${i.title || "\u6311\u6218"}\u300B\u7684\u6E38\u620F\u3002
${t.roleTaskPrompt}

`;
    const d = Object.entries(a.variableStates).filter(([m]) => {
      var _a;
      return !((_a = t.variables[m]) == null ? void 0 : _a.hidden);
    }).map(([m, _]) => {
      const b = t.variables[m], w = (b == null ? void 0 : b.description) ? ` (${b.description})` : "";
      return `- ${m}${w}: ${_.value}`;
    }).join(`
`);
    d && (o += `## \u5F53\u524D\u72B6\u6001 (\u4F60\u7684\u611F\u77E5\u80FD\u529B)
${d}

`);
    const f = t.goals.map((m) => {
      var _a;
      return ((_a = a.goalStates.find((b) => b.key === m.key)) == null ? void 0 : _a.isCompleted) ? `- [\u5DF2\u8FBE\u6210\u76EE\u6807] ${m.description}` : `- [\u672A\u8FBE\u6210\u76EE\u6807] ${m.description}`;
    }).join(`
`);
    f && (o += `## \u6311\u6218\u76EE\u6807\u8FDB\u5EA6
${f}

`);
    const l = t.failureChecks.map((m) => `- ${m.description}`).join(`
`);
    l && (o += `## \u5931\u8D25/\u7ED3\u675F\u6761\u4EF6 (\u4F60\u5E94\u5C3D\u91CF\u907F\u514D\u6216\u5F15\u5BFC\u73A9\u5BB6\u89E6\u53D1)
${l}

`);
    const h = a.failureStates.filter((m) => m.isCompleted);
    if (h.length > 0) {
      const m = h.map((_) => {
        var _a;
        return `- ${((_a = t.failureChecks.find((w) => w.key === _.key)) == null ? void 0 : _a.description) || _.key}`;
      }).join(`
`);
      o += `## \u8B66\u544A\uFF1A\u5DF2\u89E6\u53D1\u5931\u8D25\u6761\u4EF6
${m}
\u4F60\u73B0\u5728\u5904\u4E8E\u6781\u5EA6\u4E0D\u5229\u7684\u5883\u5730\uFF0C\u8BF7\u8868\u73B0\u51FA\u76F8\u5E94\u7684\u53CD\u5E94\u3002

`;
    }
    return o += `## \u884C\u4E3A\u51C6\u5219
1. \u4E25\u683C\u626E\u6F14 ${r.name}\uFF0C\u8BED\u6C14\u548C\u53CD\u5E94\u5FC5\u987B\u4E0E\u4E0A\u8FF0\u72B6\u6001\u9AD8\u5EA6\u4E00\u81F4\u3002
2. \u4E0D\u8981\u76F4\u63A5\u63D0\u53CA\u53D8\u91CF\u7684\u5177\u4F53\u6570\u503C\uFF0C\u800C\u662F\u5C06\u5176\u878D\u5165\u5230\u4F60\u7684\u60C5\u611F\u548C\u884C\u4E3A\u8868\u73B0\u4E2D\uFF08\u4F8B\u5982\uFF1A\u5982\u679C\u201C\u538B\u529B\u201D\u5F88\u9AD8\uFF0C\u4F60\u5E94\u8BE5\u8868\u73B0\u5F97\u6025\u8E81\u6216\u7126\u8651\uFF09\u3002
3. \u5982\u679C\u76EE\u6807\u5DF2\u8FBE\u6210\uFF0C\u4F60\u5E94\u8BE5\u5728\u56DE\u5E94\u4E2D\u81EA\u7136\u5730\u6D41\u9732\u51FA\u6210\u529F\u6216\u9636\u6BB5\u6027\u8FDB\u5C55\u7684\u559C\u60A6\u3002`, [
      {
        role: "system",
        content: o
      },
      ...g
    ];
  }
  class Z {
    constructor(e, t) {
      __publicField(this, "dict");
      __publicField(this, "config");
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
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
      const t = this.getVariable(e);
      if (!t) throw new Error(`\u53D8\u91CF ${e} \u4E0D\u5B58\u5728`);
      if (typeof t.value != "boolean") throw new Error(`\u53D8\u91CF ${e} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
      this.setVariable(e, true);
    }
    setFalse(e) {
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
      const t = this.getVariable(e);
      if (!t) throw new Error(`\u53D8\u91CF ${e} \u4E0D\u5B58\u5728`);
      if (typeof t.value != "boolean") throw new Error(`\u53D8\u91CF ${e} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
      this.setVariable(e, false);
    }
    toggle(e) {
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
      const t = this.getVariable(e);
      if (!t) throw new Error(`\u53D8\u91CF ${e} \u4E0D\u5B58\u5728`);
      if (typeof t.value != "boolean") throw new Error(`\u53D8\u91CF ${e} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
      this.setVariable(e, !t.value);
    }
    delta(e, t) {
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "number") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E0D\u662F\u6570\u5B57\u7C7B\u578B`);
      const a = this.getVariable(e);
      if (!a) throw new Error(`\u53D8\u91CF ${e} \u4E0D\u5B58\u5728`);
      if (typeof a.value != "number") throw new Error(`\u53D8\u91CF ${e} \u503C\u4E0D\u662F\u6570\u5B57\u7C7B\u578B`);
      this.setVariable(e, a.value + t);
    }
    setTo(e, t) {
      var _a, _b;
      const a = (_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type;
      if (a) {
        if (a === "boolean" && typeof t != "boolean") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E3A\u5E03\u5C14\uFF0C\u4F46\u503C\u4E0D\u662F\u5E03\u5C14`);
        if (a === "number" && typeof t != "number") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E3A\u6570\u5B57\uFF0C\u4F46\u503C\u4E0D\u662F\u6570\u5B57`);
        if (a === "string" && typeof t != "string") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E3A\u5B57\u7B26\u4E32\uFF0C\u4F46\u503C\u4E0D\u662F\u5B57\u7B26\u4E32`);
        if (a === "tags" && !Array.isArray(t)) throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E3A\u6807\u7B7E\uFF0C\u4F46\u503C\u4E0D\u662F\u6570\u7EC4`);
      }
      this.setVariable(e, t);
    }
    setValue(e, t) {
      this.setTo(e, t);
    }
    add(e, t) {
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "tags") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E0D\u662F\u6807\u7B7E\u7C7B\u578B`);
      const a = this.getVariable(e);
      if (!a) throw new Error(`\u53D8\u91CF ${e} \u4E0D\u5B58\u5728`);
      if (!Array.isArray(a.value)) throw new Error(`\u53D8\u91CF ${e} \u503C\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B`);
      a.value.includes(t) || this.setVariable(e, [
        ...a.value,
        t
      ]);
    }
    remove(e, t) {
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "tags") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E0D\u662F\u6807\u7B7E\u7C7B\u578B`);
      const a = this.getVariable(e);
      if (!a) throw new Error(`\u53D8\u91CF ${e} \u4E0D\u5B58\u5728`);
      if (!Array.isArray(a.value)) throw new Error(`\u53D8\u91CF ${e} \u503C\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B`);
      this.setVariable(e, a.value.filter((r) => r !== t));
    }
    performOperation(e) {
      if (re.safeParse(e).success) {
        const [t, a] = e;
        switch (t) {
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
            throw new Error(`\u672A\u77E5\u5E03\u5C14\u64CD\u4F5C\u65B9\u6CD5: ${t}`);
        }
      } else if (ne.safeParse(e).success) {
        const [t, a, r] = e;
        switch (t) {
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
            throw new Error(`\u672A\u77E5\u6570\u5B57\u64CD\u4F5C\u65B9\u6CD5: ${t}`);
        }
      } else if (ie.safeParse(e).success) {
        const [t, a, r] = e;
        switch (t) {
          case "setTo":
            this.setTo(a, r);
            break;
          case "setValue":
            this.setValue(a, r);
            break;
          default:
            throw new Error(`\u672A\u77E5\u5B57\u7B26\u4E32\u64CD\u4F5C\u65B9\u6CD5: ${t}`);
        }
      } else if (oe.safeParse(e).success) {
        const [t, a, r] = e;
        switch (t) {
          case "add":
            this.add(a, r);
            break;
          case "remove":
            this.remove(a, r);
            break;
          default:
            throw new Error(`\u672A\u77E5\u6807\u7B7E\u64CD\u4F5C\u65B9\u6CD5: ${t}`);
        }
      } else throw new Error(`\u65E0\u6548\u7684\u64CD\u4F5C: ${JSON.stringify(e)}`);
    }
    isTrue(e) {
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "boolean") return false;
      const t = this.getVariable(e);
      return t ? typeof t.value == "boolean" && t.value : false;
    }
    isFalse(e) {
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "boolean") return false;
      const t = this.getVariable(e);
      return t ? typeof t.value == "boolean" && !t.value : false;
    }
    eq(e, t) {
      const a = this.getVariable(e);
      return a ? String(a.value) === String(t) : false;
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
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "number") return false;
      const a = this.getVariable(e);
      return a && typeof a.value == "number" ? a.value > t : false;
    }
    gte(e, t) {
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "number") return false;
      const a = this.getVariable(e);
      return a && typeof a.value == "number" ? a.value >= t : false;
    }
    lt(e, t) {
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "number") return false;
      const a = this.getVariable(e);
      return a && typeof a.value == "number" ? a.value < t : false;
    }
    lte(e, t) {
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "number") return false;
      const a = this.getVariable(e);
      return a && typeof a.value == "number" ? a.value <= t : false;
    }
    includes(e, t) {
      var _a, _b, _c, _d;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "string" && ((_d = (_c = this.config) == null ? void 0 : _c[e]) == null ? void 0 : _d.type) !== "tags") return false;
      const a = this.getVariable(e);
      if (!a) return false;
      const r = String(t);
      return typeof a.value == "string" || Array.isArray(a.value) ? a.value.includes(r) : false;
    }
    notIncludes(e, t) {
      return !this.includes(e, t);
    }
    has(e, t) {
      return this.includes(e, t);
    }
    hasAny(e, t) {
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "tags") return false;
      const a = this.getVariable(e);
      if (!a || !Array.isArray(a.value)) return false;
      const r = a.value.map(String);
      return t.some((n) => r.includes(String(n)));
    }
    hasAll(e, t) {
      var _a, _b;
      if (((_b = (_a = this.config) == null ? void 0 : _a[e]) == null ? void 0 : _b.type) !== "tags") return false;
      const a = this.getVariable(e);
      if (!a || !Array.isArray(a.value)) return false;
      const r = a.value.map(String);
      return t.every((n) => r.includes(String(n)));
    }
    llmJudge(e, t) {
      return console.warn("llmJudge \u672A\u5B9E\u73B0"), false;
    }
    and(e) {
      return e.every((t) => this.checkCondition(t));
    }
    or(e) {
      return e.some((t) => this.checkCondition(t));
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
      if (ce.safeParse(e).success) {
        const [t, ...a] = e;
        switch (t) {
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
            throw new Error(`\u672A\u77E5\u5355\u4E00\u6761\u4EF6\u65B9\u6CD5: ${t}`);
        }
      } else if (le.safeParse(e).success || de.safeParse(e).success) {
        const [t, a] = e;
        switch (t) {
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
            throw new Error(`\u672A\u77E5\u590D\u5408\u6761\u4EF6\u65B9\u6CD5: ${t}`);
        }
      }
      throw new Error(`\u65E0\u6548\u7684\u6761\u4EF6: ${JSON.stringify(e)}`);
    }
  }
  class Le extends fe {
    constructor(e) {
      super(e);
    }
    getCurrentPhase() {
      return this.session.modeState.currentPhase;
    }
    getCurrentUIState() {
      return this.session.modeState.currentUIState;
    }
    getActualCurrentPhase(e) {
      var _a, _b;
      const t = e.getProcessingItem();
      if (t && t.type) {
        const c = {
          dm_intro: "dm_intro",
          character_intro: "character_intro",
          character_message: "character_response",
          character_message_group: "character_response",
          dm_eval_logic: "dm_eval_changes",
          participant_message: ((_a = t.data) == null ? void 0 : _a.isDM) ? "dm_narrate_changes" : "player_input",
          challenge_mode_dm_eval: "dm_eval_changes",
          challenge_mode_checking: "failure_check",
          challenge_mode_ending: "ending_check"
        }[t.type];
        if (c) return c;
      }
      const a = e.getFlatHistoryItems();
      let r;
      for (let n = a.length - 1; n >= 0; n--) {
        const c = a[n];
        if (!(c == null ? void 0 : c.deleted)) {
          switch (c.type) {
            case "dm_intro":
              r = "character_intro";
              break;
            case "character_intro":
              r = "player_input";
              break;
            case "character_message":
              r = this.session.modeState.shouldCheck === false ? "player_input" : "dm_eval_changes";
              break;
            case "character_message_group":
              r = this.session.modeState.shouldCheck === false ? "player_input" : "dm_eval_changes";
              break;
            case "participant_message": {
              const g = c.data;
              (g == null ? void 0 : g.isDM) ? r = "failure_check" : (g == null ? void 0 : g.isUser) || (g == null ? void 0 : g.role) === "user" ? r = "character_response" : r = "player_input";
              break;
            }
            case "dm_eval_logic":
            case "challenge_mode_dm_eval":
              r = "dm_narrate_changes";
              break;
            case "challenge_mode_checking": {
              const g = (_b = c.data) == null ? void 0 : _b.results;
              if (g && g.length > 0) {
                const o = g.some((f) => f.type === "failure"), d = g.some((f) => f.type === "goal");
                if (o) {
                  r = g.some((l) => l.type === "failure" && l.result === true) ? "ending_check" : "goal_check";
                  break;
                }
                if (d) {
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
      var _a;
      const t = e.getProcessingItem();
      if (t && t.type) {
        const r = {
          dm_intro: "dm_intro_running",
          character_intro: "character_intro_running",
          character_message: "character_response_running",
          character_message_group: "character_response_running",
          dm_eval_logic: "dm_eval_changes_running",
          participant_message: ((_a = t.data) == null ? void 0 : _a.isDM) ? "dm_narrate_changes_running" : "player_input_running",
          challenge_mode_dm_eval: "dm_eval_changes_running",
          challenge_mode_checking: "failure_check_running",
          challenge_mode_ending: "ending_check_running"
        }[t.type];
        if (r) return r;
      }
      return this.session.modeState.currentUIState ? this.session.modeState.currentUIState : this.getReadyUIStateForPhase(this.getActualCurrentPhase(e));
    }
    getReadyUIStateForPhase(e) {
      switch (e) {
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
      switch (e) {
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
      switch (e) {
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
      var _a;
      const t = this.session.modeState.currentPhase, a = new Z(this.session.modeState.variableStates, this.session.modeConfig.variables);
      switch (t) {
        case "dm_intro":
          return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_intro")), {
            type: "LLM_CALL",
            messages: Ue(this.session),
            callbackPhase: "dm_intro",
            llmRequestType: "dm_intro"
          };
        case "character_intro":
          return this.setCurrentUIState(this.getReadyUIStateForPhase("character_intro")), {
            type: "LLM_CALL",
            messages: Ae(this.session),
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
            messages: $e(this.session, e),
            callbackPhase: "character_response",
            llmRequestType: "character_message",
            dataExtra: {
              characterId: this.session.modeConfig.characterId,
              name: ((_a = this.session.modeConfig.characterSnapshot) == null ? void 0 : _a.name) || "Unknown"
            }
          };
        case "dm_eval_changes":
          return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), {
            type: "STATE_CHANGE"
          }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_eval_changes")), {
            type: "LLM_CALL",
            messages: De(this.session, e),
            callbackPhase: "dm_eval_changes",
            llmRequestType: "dm_eval_logic"
          });
        case "dm_narrate_changes":
          return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), {
            type: "STATE_CHANGE"
          }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate_changes")), {
            type: "LLM_CALL",
            messages: Fe(this.session, e),
            callbackPhase: "dm_narrate_changes",
            llmRequestType: "participant_message",
            dataExtra: {
              isDM: true,
              name: "DM"
            }
          });
        case "failure_check":
          return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), {
            type: "STATE_CHANGE"
          }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("failure_check")), this.handleFailureCheck(e, a));
        case "goal_check":
          return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), {
            type: "STATE_CHANGE"
          }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("goal_check")), this.handleGoalCheck(e, a));
        case "ending_check":
          return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), {
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
      let a = false;
      const r = [], n = this.session.modeConfig.failureChecks || [];
      for (const c of n) {
        const g = t.checkCondition(c.condition), o = this.session.modeState.failureStates.find((d) => d.key === c.key);
        o && (o.isCompleted = g), g && (a = true), r.push({
          type: "failure",
          key: c.key,
          result: g
        });
      }
      return e.addHistoryItem({
        id: U(),
        type: "challenge_mode_checking",
        idx: 0,
        orderRef: 0,
        timestamp: Date.now(),
        data: {
          results: r
        },
        hidden: true
      }), this.setCurrentUIState(this.getDoneUIStateForPhase("failure_check")), a ? this.enterNextState("ending_check") : this.enterNextState("goal_check"), {
        type: "STATE_CHANGE"
      };
    }
    handleGoalCheck(e, t) {
      this.setCurrentUIState(this.getRunningUIStateForPhase("goal_check"));
      const a = [], r = this.session.modeConfig.goals || [];
      for (const n of r) {
        const c = t.checkCondition(n.condition), g = this.session.modeState.goalStates.find((o) => o.key === n.key);
        g && (g.isCompleted = c), a.push({
          type: "goal",
          key: n.key,
          result: c
        });
      }
      return this.setCurrentUIState(this.getDoneUIStateForPhase("goal_check")), this.enterNextState("ending_check"), {
        type: "STATE_CHANGE"
      };
    }
    handleEndingCheck(e) {
      var _a;
      this.setCurrentUIState(this.getRunningUIStateForPhase("ending_check"));
      const t = (this.session.modeState.failureStates || []).find((g) => g.isCompleted), a = this.session.modeConfig.goals || [], r = a.length > 0 && a.every((g) => {
        var _a2;
        return (_a2 = this.session.modeState.goalStates.find((d) => d.key === g.key)) == null ? void 0 : _a2.isCompleted;
      }), n = !!t;
      if (n || r) {
        if (!e.state.historyItems.findLast((o) => o.type === "challenge_mode_ending")) {
          let o = "", d;
          n ? (o = ((_a = this.session.modeConfig.failureChecks.find((l) => l.key === (t == null ? void 0 : t.key))) == null ? void 0 : _a.userInfo) || "\u6311\u6218\u5931\u8D25\u3002", d = t == null ? void 0 : t.key) : o = "\u606D\u559C\u4F60\uFF01\u6240\u6709\u6311\u6218\u76EE\u6807\u5DF2\u8FBE\u6210\u3002", e.addHistoryItem({
            id: U(),
            type: "challenge_mode_ending",
            idx: 0,
            orderRef: 0,
            timestamp: Date.now(),
            data: {
              type: n ? "failure" : "success",
              description: o,
              failureReason: d
            },
            hidden: false
          }), this.setShouldCheck(false);
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
  const p = O({
    currentSession: null,
    contextManager: null,
    sessionManager: null,
    variablesManager: null,
    loadSession(i, e) {
      this.currentSession = i, i.modeState.currentUIState = "idle", this.sessionManager = new Le(i);
      const t = O(e || {
        historyItems: [],
        processingItem: void 0
      });
      this.contextManager = new ge(t), i.modeState && i.modeConfig && (this.variablesManager = new Z(i.modeState.variableStates, i.modeConfig.variables || {}));
    },
    applyVariableOperation(i) {
      if (this.variablesManager) try {
        this.variablesManager.performOperation(i);
      } catch (e) {
        console.error("[Store] VarOp Failed", e);
      }
    },
    updateConditionState(i, e, t) {
      const a = this.currentSession;
      if (!a) return;
      const n = (i === "goal" ? a.modeState.goalStates : a.modeState.failureStates).find((c) => c.key === e);
      n && (n.isCompleted = t);
    },
    setPhase(i) {
      this.currentSession && (this.currentSession.modeState.currentPhase = i);
    },
    async saveNewContextItemsToDB(i, e) {
      const { SessionDB: t } = await G(async () => {
        const { SessionDB: n } = await import("./db-master-BrZHBPj2.js").then((c) => c.s);
        return {
          SessionDB: n
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7])), a = new t(i);
      let r;
      try {
        r = V(e);
      } catch {
        r = JSON.parse(JSON.stringify(e));
      }
      await a.addContextItems(r);
    },
    async updateSessionInDB() {
      if (!this.currentSession) return;
      const { masterDb: i } = await G(async () => {
        const { masterDb: t } = await import("./db-master-BrZHBPj2.js").then((a) => a.t);
        return {
          masterDb: t
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7])), e = V(this.currentSession.modeState);
      await i.sessions.update(this.currentSession.id, {
        modeState: e,
        updatedAt: Date.now()
      });
    }
  });
  function Re() {
    const i = Se((o) => o.config), e = j.useRef(false), t = Y(), a = async (o, d, f, l, h = {}) => {
      const m = p.contextManager;
      if (!m) return {
        content: ""
      };
      const _ = {
        id: U(),
        type: f,
        orderRef: 0,
        timestamp: Date.now(),
        data: {
          content: "",
          ...h
        }
      };
      m.setProcessingItem(_);
      let b = "";
      return await ve(o, d, [], (w, k) => {
        l == null ? void 0 : l(w), b = k;
        const I = m.getProcessingItem();
        I && (I.data.content = k);
      }), m.completeProcessingItem(), {
        content: b
      };
    }, r = async (o, d) => {
      const f = p.sessionManager, l = p.contextManager;
      if (!(f && l)) return;
      const h = await f.executeCurrentStateLogic(l);
      if (console.log("[Loop] Action:", h), h.type === "WAIT_FOR_INPUT" || h.type === "STOP") {
        await p.updateSessionInDB(), e.current = false;
        return;
      }
      if (h.type === "STATE_CHANGE") {
        await p.updateSessionInDB(), setTimeout(() => c(o.id), 0);
        return;
      }
      if (h.type === "LLM_CALL") {
        if (h.callbackPhase) {
          const _ = h.callbackPhase;
          f.setCurrentUIState(f.getRunningUIStateForPhase(_));
        }
        await p.updateSessionInDB();
        const m = await a(d, h.messages.map((_) => ({
          ..._,
          id: U()
        })), h.llmRequestType, void 0, h.dataExtra);
        await p.saveNewContextItemsToDB(o.id, l.getHistoryItems()), await n(h, m.content, o.id), await p.updateSessionInDB(), setTimeout(() => c(o.id), 0);
      }
    }, n = async (o, d, f) => {
      const l = p.sessionManager, h = p.contextManager;
      if (o.callbackPhase === "dm_eval_changes") {
        try {
          const m = d.indexOf("{"), _ = d.lastIndexOf("}") + 1;
          if (m >= 0 && _ > m) {
            const b = JSON.parse(d.slice(m, _)), w = b.analyze || "", k = [];
            if (b.operations) {
              const I = l.session.modeConfig.variables || {};
              for (const y of b.operations) {
                if (!I[y.key]) continue;
                let C;
                y.op === "delta" ? C = [
                  "delta",
                  y.key,
                  Number(y.value)
                ] : y.op === "setTo" ? C = [
                  "setTo",
                  y.key,
                  y.value
                ] : y.op === "setTrue" ? C = [
                  "setTrue",
                  y.key
                ] : y.op === "setFalse" ? C = [
                  "setFalse",
                  y.key
                ] : y.op === "add" ? C = [
                  "add",
                  y.key,
                  String(y.value)
                ] : y.op === "remove" && (C = [
                  "remove",
                  y.key,
                  String(y.value)
                ]), C && (p.applyVariableOperation(C), k.push(C));
              }
            }
            h.addHistoryItem({
              id: U(),
              type: "challenge_mode_dm_eval",
              idx: 0,
              orderRef: 0,
              timestamp: Date.now(),
              data: {
                analyze: w,
                operations: k
              },
              hidden: false
            }), await p.saveNewContextItemsToDB(f, h.getHistoryItems());
          }
        } catch (m) {
          console.error("Failed to parse DM evaluation", m), A.error("DM \u8BC4\u4F30\u6570\u636E\u89E3\u6790\u5931\u8D25\uFF0C\u5C06\u5FFD\u7565\u672C\u6B21\u53D8\u66F4");
        }
        l.enterNextState("dm_narrate_changes"), l.setCurrentUIState(l.getDoneUIStateForPhase("dm_eval_changes"));
      } else o.callbackPhase === "dm_intro" ? (l.setCurrentUIState(l.getDoneUIStateForPhase("dm_intro")), l.enterNextState("character_intro")) : o.callbackPhase === "character_intro" ? (l.setCurrentUIState(l.getDoneUIStateForPhase("character_intro")), l.enterNextState("player_input")) : o.callbackPhase === "dm_narrate_changes" ? (l.setCurrentUIState(l.getDoneUIStateForPhase("dm_narrate_changes")), l.enterNextState("failure_check")) : o.callbackPhase === "character_response" && (l.setCurrentUIState(l.getDoneUIStateForPhase("character_response")), l.session.modeState.shouldCheck !== false ? l.enterNextState("dm_eval_changes") : l.enterNextState("player_input"));
    }, c = async (o) => {
      const d = p.currentSession;
      if (!d || d.id !== o) return;
      const f = {
        ...i
      };
      try {
        e.current = true, await r(d, f);
      } catch (l) {
        console.error("ChallengeLoop Critical Error:", l), A.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", {
          duration: Number.POSITIVE_INFINITY,
          action: {
            label: "\u524D\u5F80\u914D\u7F6E",
            onClick: () => t({
              to: "/config/llm"
            })
          }
        }), e.current = false;
      }
    };
    return {
      nextStep: j.useCallback(async (o) => {
        if (e.current) return;
        const d = p.currentSession, f = p.contextManager, l = p.sessionManager;
        if (!(d && f && l)) {
          console.warn("Session or Managers not ready");
          return;
        }
        if (o) {
          if (l.getCurrentPhase() !== "player_input") {
            A.warning("\u5F53\u524D\u5E76\u975E\u73A9\u5BB6\u884C\u52A8\u56DE\u5408");
            return;
          }
          l.setCurrentUIState(l.getRunningUIStateForPhase("player_input")), f.addLLMResponseAsContextItem({
            role: "user",
            content: o
          }, {}), await p.saveNewContextItemsToDB(d.id, f.getHistoryItems()), l.setCurrentUIState(l.getDoneUIStateForPhase("player_input")), l.enterNextState("character_response"), l.setCurrentUIState(l.getReadyUIStateForPhase("character_response")), await p.updateSessionInDB();
        }
        await c(d.id);
      }, [
        i
      ])
    };
  }
  let Oe, z, J, Ve, q, W;
  ut = (i) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
    const e = Y(), [t, a] = j.useState(""), r = j.useRef(null), [n, c] = j.useState(false), [g, o] = j.useState(false), d = ae(p), { data: f = [] } = B((u) => u.from({
      s: ue
    })), { data: l = [] } = B((u) => u.from({
      c: he
    })), h = f.find((u) => u.id === i.sessionId), m = l.find((u) => {
      var _a2;
      return u.id === ((_a2 = h == null ? void 0 : h.modeConfig) == null ? void 0 : _a2.characterId);
    });
    j.useEffect(() => {
      var _a2;
      let u = false;
      if (!h) return;
      if (((_a2 = p.currentSession) == null ? void 0 : _a2.id) === h.id && p.contextManager) {
        o(true);
        return;
      }
      return (async () => {
        try {
          const S = await pe.createSessionDB(h.id).getContextItems();
          if (u) return;
          h.modeConfig && !h.modeConfig.characterSnapshot && m && (h.modeConfig.characterSnapshot = {
            name: m.name,
            description: m.description,
            avatar: m.avatar
          }), p.loadSession(h, {
            historyItems: S,
            processingItem: void 0
          }), o(true);
        } catch (N) {
          console.error("Load session error", N);
        }
      })(), () => {
        u = true;
      };
    }, [
      h == null ? void 0 : h.id,
      h
    ]);
    const { nextStep: _ } = Re();
    j.useEffect(() => {
      r.current && (r.current.scrollTop = r.current.scrollHeight);
    });
    const b = async () => {
      if (n) return;
      const u = p.sessionManager, x = p.contextManager;
      if (u && x) {
        c(true);
        try {
          if (x.getHistoryItems().some((F) => F.type === "challenge_mode_ending")) {
            u.setShouldCheck(false), u.enterNextState("player_input"), u.setCurrentUIState(u.getReadyUIStateForPhase("player_input")), await p.updateSessionInDB();
            return;
          }
          const S = u.getActualCurrentPhase(x);
          u.enterNextState(S), u.setCurrentUIState(u.getReadyUIStateForPhase(S)), await p.updateSessionInDB(), await _();
        } finally {
          c(false);
        }
      }
    };
    if (!(h && m && g)) return s.jsxs("div", {
      className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
      children: [
        s.jsx("div", {
          className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center",
          children: s.jsx(E, {
            className: "w-6 h-6 opacity-20"
          })
        }),
        s.jsx("p", {
          className: "text-xs font-medium tracking-widest uppercase opacity-50",
          children: "\u6B63\u5728\u6784\u5EFA\u53D9\u4E8B\u73AF\u5883..."
        })
      ]
    });
    const w = async () => {
      if (!(!t.trim() || n)) {
        c(true);
        try {
          await _(t);
        } finally {
          c(false), a("");
        }
      }
    }, k = p.sessionManager && p.contextManager ? p.sessionManager.getActualCurrentUIState(p.contextManager) : ((_b = (_a = d.currentSession) == null ? void 0 : _a.modeState) == null ? void 0 : _b.currentUIState) || "idle", I = k === "ended", y = $[k] || $.idle, M = n || !(y.inputEnabled || I), C = async () => {
      p.sessionManager && (p.sessionManager.setShouldCheck(false), p.sessionManager.enterNextState("player_input"), p.sessionManager.setCurrentUIState(p.sessionManager.getReadyUIStateForPhase("player_input")), await p.updateSessionInDB());
    }, ee = () => {
      e({
        to: "/plaza/challenges"
      });
    }, te = () => {
      console.log("[Challenge][Memory Session]", p.currentSession);
    }, se = async () => {
      if (!(h == null ? void 0 : h.id)) return;
      const u = await me.sessions.getTable().get(h.id);
      console.log("[Challenge][DB Session]", u);
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
                    s.jsx("div", {
                      className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm",
                      children: s.jsx(K, {
                        className: "w-5 h-5 text-primary"
                      })
                    }),
                    s.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-sm tracking-tight",
                              children: m.name
                            }),
                            s.jsx(D, {
                              variant: "outline",
                              className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-primary/5 text-primary border-primary/10",
                              children: "Lv.1"
                            })
                          ]
                        }),
                        s.jsx("span", {
                          className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide",
                          children: "\u53D9\u4E8B\u534F\u8BAE\u8FDE\u63A5\u5DF2\u5EFA\u7ACB"
                        })
                      ]
                    })
                  ]
                }),
                s.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    s.jsxs(D, {
                      variant: "secondary",
                      className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50",
                      children: [
                        s.jsx("span", {
                          className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                        }),
                        "CHALLENGE"
                      ]
                    }),
                    s.jsx(P, {
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px]",
                      onClick: te,
                      children: "LOG MEM"
                    }),
                    s.jsx(P, {
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px]",
                      onClick: se,
                      children: "LOG DB"
                    })
                  ]
                })
              ]
            }),
            s.jsx("div", {
              className: "flex grow overflow-y-auto",
              ref: r,
              children: s.jsx("div", {
                className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-10",
                children: (() => {
                  var _a2, _b2, _c2, _d2, _e3;
                  const u = (((_a2 = d.contextManager) == null ? void 0 : _a2.state.historyItems) || []).filter((S) => !S.hidden), x = (_b2 = d.contextManager) == null ? void 0 : _b2.state.processingItem;
                  if (k === "idle") {
                    const S = u.length === 0 ? "\u5F00\u59CB" : "\u7EE7\u7EED";
                    return s.jsxs("div", {
                      className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                      children: [
                        s.jsx("div", {
                          className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500",
                          children: s.jsx(L, {
                            className: "w-10 h-10 text-amber-500 drop-shadow-sm"
                          })
                        }),
                        s.jsx("h2", {
                          className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                          children: ((_d2 = (_c2 = h == null ? void 0 : h.modeConfig) == null ? void 0 : _c2.characterSnapshot) == null ? void 0 : _d2.name) || "\u6311\u6218\u6A21\u5F0F"
                        }),
                        s.jsx("p", {
                          className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm",
                          children: ((_e3 = h == null ? void 0 : h.modeConfig) == null ? void 0 : _e3.userGuidance) || "\u547D\u8FD0\u7684\u9F7F\u8F6E\u5DF2\u7ECF\u5F00\u59CB\u8F6C\u52A8\uFF0C\u4F60\u51C6\u5907\u597D\u63A5\u53D7\u6311\u6218\u4E86\u5417\uFF1F"
                        }),
                        s.jsxs(P, {
                          size: "lg",
                          className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-primary/25 shadow-primary/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90",
                          onClick: b,
                          disabled: n,
                          children: [
                            n ? s.jsx(E, {
                              className: "w-5 h-5 animate-spin mr-3"
                            }) : s.jsx(Q, {
                              className: "w-5 h-5 mr-3"
                            }),
                            S
                          ]
                        }),
                        s.jsxs("div", {
                          className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest",
                          children: [
                            s.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                s.jsx(R, {
                                  className: "w-3 h-3"
                                }),
                                " \u81EA\u52A8\u5B58\u6863"
                              ]
                            }),
                            s.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                s.jsx(E, {
                                  className: "w-3 h-3"
                                }),
                                " \u5B9E\u65F6\u53D8\u91CF"
                              ]
                            })
                          ]
                        })
                      ]
                    });
                  }
                  const N = [
                    ...u
                  ];
                  return x && !x.hidden && !u.some((S) => S.id === x.id) && N.push(x), N.map((S, F) => s.jsx(Oe, {
                    item: S,
                    character: m
                  }, `[${F}]${S.id}`));
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
                    children: "\u6545\u4E8B\u5DF2\u5B8C\u7ED3"
                  }),
                  s.jsxs("div", {
                    className: "flex items-center gap-4 w-full",
                    children: [
                      s.jsxs(P, {
                        variant: "outline",
                        className: "flex-1 h-12 rounded-xl border-dashed border-2 hover:border-primary/50 hover:bg-primary/5 gap-2",
                        onClick: ee,
                        children: [
                          s.jsx(we, {
                            className: "w-4 h-4"
                          }),
                          s.jsx("span", {
                            className: "font-bold tracking-wider",
                            children: "\u9000\u51FA\u6311\u6218"
                          })
                        ]
                      }),
                      s.jsxs(P, {
                        className: "flex-2 h-12 rounded-xl shadow-lg shadow-primary/10 gap-2 text-base",
                        onClick: C,
                        children: [
                          s.jsx(Ne, {
                            className: "w-4 h-4 fill-current"
                          }),
                          s.jsx("span", {
                            className: "font-black tracking-[0.15em] uppercase",
                            children: "\u7EE7\u7EED\u81EA\u7531\u5BF9\u8BDD"
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
                    s.jsx(be, {
                      value: t,
                      onChange: (u) => a(u.target.value),
                      placeholder: M ? y.placeholder : $.player_input_ready.placeholder,
                      disabled: M,
                      className: v("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-primary/20 focus-visible:bg-background transition-all", M && "opacity-50 cursor-not-allowed"),
                      onKeyDown: (u) => {
                        u.key === "Enter" && !u.shiftKey && (u.preventDefault(), w());
                      }
                    }),
                    s.jsx(P, {
                      size: "icon",
                      type: "button",
                      className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-primary/20 transition-all",
                      disabled: !t.trim() || M,
                      onClick: w,
                      children: n ? s.jsx(E, {
                        className: "w-4 h-4 animate-spin"
                      }) : s.jsx(Ce, {
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
                      children: M ? "\u8F93\u5165\u5DF2\u9501\u5B9A" : "Shift + Enter \u6362\u884C"
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
                        s.jsx(E, {
                          className: "w-3.5 h-3.5 text-primary"
                        }),
                        "\u4E16\u754C\u53D8\u91CF"
                      ]
                    }),
                    s.jsx(D, {
                      variant: "outline",
                      className: "text-[9px] px-1.5 opacity-50",
                      children: "SYNCED"
                    })
                  ]
                }),
                s.jsxs("div", {
                  className: "grid grid-cols-1 gap-3",
                  children: [
                    Object.entries(((_d = (_c = d.currentSession) == null ? void 0 : _c.modeState) == null ? void 0 : _d.variableStates) || {}).map(([u, x]) => s.jsxs("div", {
                      className: "bg-background/40 p-4 rounded-xl border border-muted/30 hover:border-primary/20 transition-colors group",
                      children: [
                        s.jsxs("div", {
                          className: "flex justify-between items-start mb-1",
                          children: [
                            s.jsx("span", {
                              className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider",
                              children: u
                            }),
                            s.jsx("div", {
                              className: "w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors"
                            })
                          ]
                        }),
                        s.jsx("div", {
                          className: "text-xl font-mono font-bold tracking-tight text-foreground/90",
                          children: typeof (x == null ? void 0 : x.value) == "number" ? x.value.toLocaleString() : String(x == null ? void 0 : x.value)
                        })
                      ]
                    }, u)),
                    Object.keys(((_f = (_e2 = d.currentSession) == null ? void 0 : _e2.modeState) == null ? void 0 : _f.variableStates) || {}).length === 0 && s.jsx("div", {
                      className: "py-8 text-center border border-dashed rounded-xl opacity-30",
                      children: s.jsx("p", {
                        className: "text-[10px] font-bold uppercase tracking-widest",
                        children: "\u65E0\u52A8\u6001\u53D8\u91CF"
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
                    s.jsx(ke, {
                      className: "w-3.5 h-3.5 text-primary"
                    }),
                    "\u751F\u5B58\u76EE\u6807"
                  ]
                }),
                s.jsxs("div", {
                  className: "space-y-2.5",
                  children: [
                    (_i = (_h = (_g = d.currentSession) == null ? void 0 : _g.modeConfig) == null ? void 0 : _h.goals) == null ? void 0 : _i.map((u) => {
                      var _a2, _b2, _c2;
                      const x = (_c2 = (_b2 = (_a2 = d.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b2.goalStates) == null ? void 0 : _c2.find((N) => N.key === u.key);
                      return s.jsxs("div", {
                        className: v("p-3.5 rounded-xl border flex items-start gap-3 transition-all duration-300", (x == null ? void 0 : x.isCompleted) ? "bg-primary/3 border-primary/20 shadow-sm" : "bg-background/40 border-muted/50 grayscale-[0.8] opacity-60"),
                        children: [
                          s.jsx("div", {
                            className: v("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5 shadow-inner", (x == null ? void 0 : x.isCompleted) ? "bg-primary text-primary-foreground" : "bg-muted border border-muted-foreground/10"),
                            children: (x == null ? void 0 : x.isCompleted) ? s.jsx(R, {
                              className: "w-3 h-3"
                            }) : s.jsx("div", {
                              className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20"
                            })
                          }),
                          s.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              s.jsx("div", {
                                className: v("text-[13px] leading-tight font-bold tracking-tight", (x == null ? void 0 : x.isCompleted) ? "text-primary" : "text-foreground/70"),
                                children: u.description
                              }),
                              (x == null ? void 0 : x.isCompleted) && s.jsx("span", {
                                className: "text-[9px] font-bold uppercase tracking-wider opacity-60",
                                children: "Objective Achieved"
                              })
                            ]
                          })
                        ]
                      }, u.key);
                    }),
                    (!((_k = (_j = d.currentSession) == null ? void 0 : _j.modeConfig) == null ? void 0 : _k.goals) || d.currentSession.modeConfig.goals.length === 0) && s.jsx("div", {
                      className: "py-8 text-center border border-dashed rounded-xl opacity-30",
                      children: s.jsx("p", {
                        className: "text-[10px] font-bold uppercase tracking-widest",
                        children: "\u65E0\u8BBE\u5B9A\u76EE\u6807"
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
                    s.jsx(L, {
                      className: "w-3.5 h-3.5 text-destructive"
                    }),
                    "\u6B7B\u4EA1\u7981\u5FCC"
                  ]
                }),
                s.jsxs("div", {
                  className: "space-y-2.5",
                  children: [
                    (_n = (_m = (_l = d.currentSession) == null ? void 0 : _l.modeConfig) == null ? void 0 : _m.failureChecks) == null ? void 0 : _n.map((u) => {
                      var _a2, _b2, _c2;
                      const x = (_c2 = (_b2 = (_a2 = d.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b2.failureStates) == null ? void 0 : _c2.find((N) => N.key === u.key);
                      return s.jsxs("div", {
                        className: v("p-3.5 rounded-xl border flex items-start gap-3 transition-all", (x == null ? void 0 : x.isCompleted) ? "bg-destructive/5 border-destructive/20" : "bg-background/40 border-muted/50 opacity-60"),
                        children: [
                          s.jsx("div", {
                            className: v("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5", (x == null ? void 0 : x.isCompleted) ? "bg-destructive text-destructive-foreground" : "bg-muted border border-muted-foreground/10"),
                            children: (x == null ? void 0 : x.isCompleted) ? s.jsx(je, {
                              className: "w-3 h-3"
                            }) : s.jsx("div", {
                              className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20"
                            })
                          }),
                          s.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              s.jsx("div", {
                                className: v("text-[13px] leading-tight font-bold tracking-tight", (x == null ? void 0 : x.isCompleted) ? "text-destructive" : "text-foreground/70"),
                                children: u.description
                              }),
                              (x == null ? void 0 : x.isCompleted) && s.jsx("span", {
                                className: "text-[9px] font-bold uppercase tracking-wider opacity-60",
                                children: "Critical Failure Triggered"
                              })
                            ]
                          })
                        ]
                      }, u.key);
                    }),
                    (!((_p = (_o = d.currentSession) == null ? void 0 : _o.modeConfig) == null ? void 0 : _p.failureChecks) || d.currentSession.modeConfig.failureChecks.length === 0) && s.jsx("div", {
                      className: "py-8 text-center border border-dashed rounded-xl opacity-30",
                      children: s.jsx("p", {
                        className: "text-[10px] font-bold uppercase tracking-widest",
                        children: "\u65E0\u5931\u8D25\u5224\u5B9A"
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
  Oe = (i) => {
    const { item: e, character: t } = i, r = (() => {
      const n = e.data;
      return n ? Array.isArray(n.operations) ? s.jsx(J, {
        item: {
          ...e,
          type: "challenge_mode_dm_eval"
        }
      }) : Array.isArray(n.results) && n.results.every((c) => c && (c.type === "goal" || c.type === "failure")) ? s.jsx(q, {
        item: {
          ...e,
          type: "challenge_mode_checking"
        }
      }) : n.type && (n.type === "success" || n.type === "failure") && typeof n.description == "string" ? s.jsx(W, {
        item: {
          ...e,
          type: "challenge_mode_ending"
        }
      }) : null : null;
    })();
    if (r) return r;
    switch (e.type) {
      case "dm_intro":
        return s.jsx(z, {
          content: e.data.content,
          title: "Challenge Intro"
        });
      case "challenge_mode_dm_eval":
        return s.jsx(J, {
          item: e
        });
      case "challenge_mode_checking":
        return s.jsx(q, {
          item: e
        });
      case "challenge_mode_ending":
        return s.jsx(W, {
          item: e
        });
      case "character_intro":
        return s.jsx(ye, {
          item: e,
          character: t
        });
      case "character_message":
        return s.jsx(H, {
          item: e,
          character: t
        });
      case "character_message_group":
        return s.jsx("div", {
          className: "space-y-4",
          children: (e.data.list || []).map((n, c) => s.jsx(H, {
            item: {
              ...e,
              data: {
                ...e.data,
                content: n.content
              }
            },
            character: t
          }, n.id || c))
        });
      case "participant_message":
        return e.data.isDM || e.data.name === "DM" || !(e.data.isUser || e.data.isCharacter || e.data.isEnv) ? s.jsx(z, {
          content: e.data.content
        }) : s.jsx(_e, {
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
  z = ({ content: i, title: e = "Narrative Master" }) => s.jsxs("div", {
    className: "flex gap-6 group animate-in fade-in slide-in-from-left-2 duration-500",
    children: [
      s.jsxs("div", {
        className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden",
        children: [
          s.jsx("div", {
            className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
          }),
          s.jsx(K, {
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
              s.jsx(Q, {
                className: "w-3 h-3"
              }),
              e
            ]
          }),
          s.jsx("div", {
            className: "text-[15px] leading-relaxed italic text-foreground/80 whitespace-pre-wrap font-serif",
            children: i
          })
        ]
      })
    ]
  });
  J = ({ item: i }) => s.jsx("div", {
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
                s.jsx(E, {
                  className: "w-3 h-3"
                }),
                "\u4E16\u754C\u7EBF\u6F14\u53D8\u8BC4\u4F30"
              ]
            }),
            s.jsx(Me, {
              className: "w-3 h-3 text-muted-foreground/30"
            })
          ]
        }),
        s.jsxs("div", {
          className: "p-5 space-y-4",
          children: [
            i.data.analyze && s.jsx("div", {
              className: "text-[13px] text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1",
              children: i.data.analyze
            }),
            s.jsx("div", {
              className: "flex flex-wrap gap-2",
              children: i.data.operations.map((e, t) => s.jsx(Ve, {
                operation: e
              }, t))
            })
          ]
        })
      ]
    })
  });
  Ve = ({ operation: i }) => {
    const [e, t, a] = i;
    let r = "bg-primary/10 text-primary border-primary/20", n = "";
    if (e === "delta") {
      const c = a;
      r = c > 0 ? "bg-green-500/10 text-green-600 border-green-500/20" : "bg-red-500/10 text-red-600 border-red-500/20", n = `${t} ${c > 0 ? "+" : ""}${c}`;
    } else e === "setTrue" || e === "setFalse" ? n = `${t} \u2192 ${e === "setTrue" ? "YES" : "NO"}` : n = `${t} = ${a}`;
    return s.jsx(D, {
      variant: "outline",
      className: v("text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg border", r),
      children: n
    });
  };
  q = ({ item: i }) => s.jsx("div", {
    className: "flex justify-center opacity-40 hover:opacity-100 transition-opacity",
    children: s.jsx("div", {
      className: "flex gap-4",
      children: i.data.results.map((e, t) => e.result && s.jsxs("div", {
        className: "flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground",
        children: [
          s.jsx(R, {
            className: "w-3 h-3 text-primary"
          }),
          e.key,
          " \u66F4\u65B0"
        ]
      }, t))
    })
  });
  W = ({ item: i }) => {
    const e = i.data.type === "success";
    return s.jsx("div", {
      className: "py-12 animate-in fade-in zoom-in duration-1000",
      children: s.jsxs("div", {
        className: v("max-w-lg mx-auto p-12 rounded-[2.5rem] border-4 text-center space-y-6 shadow-2xl relative overflow-hidden", e ? "bg-primary/5 border-primary/30 shadow-primary/10" : "bg-destructive/5 border-destructive/30 shadow-destructive/10"),
        children: [
          s.jsx("div", {
            className: v("absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20", e ? "bg-primary" : "bg-destructive")
          }),
          s.jsx("div", {
            className: v("absolute -bottom-12 -left-12 w-48 h-48 rounded-full blur-3xl opacity-20", e ? "bg-primary" : "bg-destructive")
          }),
          s.jsx("div", {
            className: "inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-background border shadow-xl relative z-10 mb-2",
            children: e ? s.jsx(L, {
              className: "w-12 h-12 text-primary animate-bounce-short"
            }) : s.jsx(Ie, {
              className: "w-12 h-12 text-destructive animate-pulse"
            })
          }),
          s.jsxs("div", {
            className: "space-y-2 relative z-10",
            children: [
              s.jsx("h2", {
                className: v("text-3xl font-black uppercase tracking-[0.3em]", e ? "text-primary" : "text-destructive"),
                children: e ? "\u6311\u6218\u6210\u529F" : "\u6311\u6218\u5931\u8D25"
              }),
              s.jsx("div", {
                className: "h-1 w-12 bg-muted-foreground/20 mx-auto rounded-full"
              })
            ]
          }),
          s.jsx("p", {
            className: "text-lg font-medium text-foreground/80 leading-relaxed font-serif relative z-10",
            children: i.data.description
          }),
          !e && i.data.failureReason && s.jsxs("div", {
            className: "pt-4 px-6 relative z-10",
            children: [
              s.jsx("div", {
                className: "text-[10px] font-black uppercase tracking-[0.2em] text-destructive/60 mb-2",
                children: "\u5931\u8D25\u6839\u6E90"
              }),
              s.jsxs("p", {
                className: "text-xs font-bold text-destructive/80 italic",
                children: [
                  "\u300C",
                  i.data.failureReason,
                  "\u300D"
                ]
              })
            ]
          }),
          s.jsx("div", {
            className: "pt-8 relative z-10",
            children: s.jsx(D, {
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
export {
  ut as SessionMainForChallenge,
  __tla
};
