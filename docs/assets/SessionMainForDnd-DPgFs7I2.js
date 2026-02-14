const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-BrZHBPj2.js","assets/@tanstack-3iyDWv8L.js","assets/react-D9TtqY-V.js","assets/vendor-C4ToNUTj.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-C2pyTzVO.js","assets/zod-fbN9ubnj.js"])))=>i.map(i=>d[i]);
import { D as ne, F as V, aH as be, r as j, t as K, E as ye, j as e } from "./react-D9TtqY-V.js";
import { f as ie, i as Se } from "./@tanstack-3iyDWv8L.js";
import { r as Ce, S as Ne, m as ke } from "./db-master-BrZHBPj2.js";
import { s as De } from "./db--eUIPBg3.js";
import { _ as se, __tla as __tla_0 } from "./index-IzUhM_kF.js";
import { C as je } from "./context-manager.class-B2xis078.js";
import { n as P } from "./id-OxPLOBIU.js";
import { S as we } from "./session-manager.class-DPAZ4frV.js";
import { B as v } from "./button-CMoAlsw3.js";
import { T as Ie } from "./textarea-NuAUq_bK.js";
import { B as A } from "./badge-B6qKYUZD.js";
import { u as Me, a as ve } from "./global-llm-config.store-C91qlFOh.js";
import { o as $, n as C, s as _, _ as q, b as ce, a as Pe, r as $e, l as Te } from "./zod-fbN9ubnj.js";
import { c as S } from "./shadcn-utils-BMZD7_jZ.js";
import { S as Re } from "./switch-CGreuh1l.js";
import { ai as W, n as Q, ak as Le, al as Ee, i as ee, Q as Ue, a as He, W as Ae, am as Fe, a8 as de, V as Z, E as Y, an as Be, c as Oe } from "./icons-bBaH0MBC.js";
import "./vendor-C4ToNUTj.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C2pyTzVO.js";
import "./es-toolkit-CstbrnlE.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
let zt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function le(s) {
    return Math.floor((s - 10) / 2);
  }
  function Ge(s, n) {
    const t = Math.floor(Math.random() * 20) + 1, o = t + n;
    return {
      naturalRoll: t,
      total: o,
      modifier: n,
      isSuccess: o >= s
    };
  }
  function ze(s, n) {
    const t = n[s.attribute] || 10, o = le(t);
    return Ge(s.dc, o);
  }
  function Je(s) {
    try {
      const n = s.match(/```(?:json)?\s*\n?([\s\S]*?)```/), t = n ? n[1].trim() : s.trim(), o = t.indexOf("{"), a = t.lastIndexOf("}") + 1;
      if (o < 0 || a <= o) return console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5931\u8D25\uFF1A\u672A\u627E\u5230 JSON \u5757", s.slice(0, 200)), null;
      const r = JSON.parse(t.slice(o, a));
      if (r.none === true || r.none === "true") return {
        needsCheck: false
      };
      const i = r.playerId || r.player_id || r.\u89D2\u8272ID || r.\u6267\u884C\u8005ID, d = r.attribute || r.\u5C5E\u6027 || r.\u68C0\u5B9A\u7EF4\u5EA6, h = Number(r.dc || r.DC || r.\u76EE\u6807\u6570\u503C || r.\u96BE\u5EA6 || 0);
      return i && d && h > 0 ? {
        needsCheck: true,
        checkSpec: {
          intent: r.intent || r.\u610F\u56FE || r.reason || r.\u5177\u4F53\u610F\u56FE || "",
          type: r.type || "attribute",
          attribute: d,
          dc: h,
          playerId: i
        }
      } : (console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56 JSON \u5B57\u6BB5\u4E0D\u5B8C\u6574:", r), null);
    } catch (n) {
      return console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5F02\u5E38:", n, s.slice(0, 200)), null;
    }
  }
  function Xe(s) {
    try {
      const n = s.indexOf("{"), t = s.lastIndexOf("}") + 1;
      if (n < 0 || t <= n) return null;
      const o = JSON.parse(s.slice(n, t)), a = o.nextPlayerId || o.\u6307\u5B9A\u7684\u73A9\u5BB6ID;
      return a ? {
        nextPlayerId: a,
        reason: o.reason || o.\u539F\u56E0 || ""
      } : null;
    } catch {
      return null;
    }
  }
  function qe(s) {
    const n = s.replace(/<[^>]*$/, ""), t = [], o = /<\/?([a-zA-Z]\w*)[^>]*>/g;
    let a;
    for (; (a = o.exec(n)) !== null; ) {
      const i = a[1].toLowerCase();
      a[0].startsWith("</") ? t.length > 0 && t.at(-1) === i && t.pop() : t.push(i);
    }
    let r = n;
    for (; t.length > 0; ) {
      const i = t.pop();
      r += `</${i}>`;
    }
    return r;
  }
  function Ve(s, n) {
    let t = s;
    return n.userName && (t = t.replace(/\{\{user\}\}/gi, n.userName), t = t.replace(/<USER>/gi, n.userName)), n.charName && (t = t.replace(/\{\{char\}\}/gi, n.charName), t = t.replace(/<BOT>/gi, n.charName)), t;
  }
  const Ke = /<think>([\s\S]*?)<\/think>/, We = /<speak>([\s\S]*?)<\/speak>/, Qe = /<action>([\s\S]*?)<\/action>/;
  function me(s) {
    var _a, _b, _c, _d, _e, _f;
    const n = qe(s), t = (_b = (_a = n.match(Ke)) == null ? void 0 : _a[1]) == null ? void 0 : _b.trim(), o = (_d = (_c = n.match(We)) == null ? void 0 : _c[1]) == null ? void 0 : _d.trim(), a = (_f = (_e = n.match(Qe)) == null ? void 0 : _e[1]) == null ? void 0 : _f.trim(), r = n.replace(/<\/?[a-zA-Z]\w*[^>]*>/g, "").trim();
    return {
      think: t,
      speak: o,
      action: a,
      rawText: r
    };
  }
  function F(s) {
    switch (s) {
      case "narrative":
        return '\u3010\u73A9\u6CD5\u6A21\u5F0F\uFF1A\u53D9\u4E8B\u4F18\u5148\u3011\u3002\u8BF7\u4E13\u6CE8\u4E8E\u53F2\u8BD7\u611F\u7684\u63CF\u8FF0\u548C\u89D2\u8272\u60C5\u611F\uFF0C\u5C3D\u91CF\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u9891\u7E41\u68C0\u5B9A\u3002\u53EA\u6709\u5728\u5173\u952E\u8F6C\u6298\u70B9\u624D\u8981\u6C42\u68C0\u5B9A\uFF0C\u4E14\u68C0\u5B9A\u5931\u8D25\u4E5F\u5E94\u4EE5"\u4EE3\u4EF7\u9AD8\u6602\u7684\u6210\u529F"\u6216\u5F00\u542F\u65B0\u5267\u60C5\u7684\u65B9\u5F0F\u5904\u7406\u3002';
      case "hardcore":
        return "\u3010\u73A9\u6CD5\u6A21\u5F0F\uFF1A\u786C\u6838\u6311\u6218\u3011\u3002\u8BF7\u4E25\u683C\u6267\u884C DND 5e \u89C4\u5219\u3002\u6218\u6597\u5FC5\u987B\u51F6\u9669\uFF0C\u68C0\u5B9A\u5FC5\u987B\u9891\u7E41\u4E14\u4E25\u683C\u3002\u8D44\u6E90\u532E\u4E4F\uFF0C\u5931\u8D25\u53EF\u80FD\u5BFC\u81F4\u4E25\u91CD\u7684\u540E\u679C\u751A\u81F3\u6B7B\u4EA1\u3002";
      case "solo":
        return "\u3010\u73A9\u6CD5\u6A21\u5F0F\uFF1A\u5355\u4EBA\u5192\u9669\u3011\u3002\u4F18\u5316\u4E92\u52A8\u8282\u594F\uFF0C\u786E\u4FDD\u552F\u4E00\u7684\u73A9\u5BB6\u89D2\u8272\u662F\u6545\u4E8B\u7684\u4E2D\u5FC3\u3002DM \u5E94\u66F4\u4E3B\u52A8\u5730\u63A8\u52A8\u5267\u60C5\u548C\u63D0\u4F9B\u73AF\u5883\u4E92\u52A8\u7684\u7EBF\u7D22\u3002";
      default:
        return "\u3010\u73A9\u6CD5\u6A21\u5F0F\uFF1A\u6807\u51C6\u6A21\u5F0F\u3011\u3002\u5E73\u8861\u53D9\u4E8B\u4E0E\u89C4\u5219\u68C0\u5B9A\u3002";
    }
  }
  function B(s) {
    return s.modeConfig.worldSnapshot;
  }
  function T(s) {
    return s.modeConfig.playerCharacterSnapshots;
  }
  function Ze(s, n) {
    return s.modeConfig.playerCharacterSnapshots.find((t) => t.id === n);
  }
  function E(s, n) {
    return s.map((t) => {
      const o = Object.entries(t.attributes).map(([r, i]) => `${r}:${i}(${le(i)})`).join(", "), a = n[t.id] || 0;
      return `- ${t.name} (ID: ${t.id}): ${o} (\u7D2F\u8BA1\u884C\u52A8: ${a}\u6B21)`;
    }).join(`
`);
  }
  function O(s) {
    return s.map((n) => `- ${n.name} (ID: ${n.id}): ${n.systemPrompt}`).join(`
`);
  }
  function G(s, n, t = 15) {
    const o = T(n);
    return s.getFlatHistoryItems(t).filter((a) => !a.hidden && !a.deleted).map((a) => {
      var _a;
      const { type: r, data: i } = a;
      if (r === "dnd_dm_intro" || r === "dnd_dm_narrate") return `[DM]: ${i.content}`;
      if (r === "dnd_player_action") return `[${i.characterName || ((_a = o.find((h) => h.id === i.characterId)) == null ? void 0 : _a.name) || i.characterId}]: ${i.content}`;
      if (r === "participant_message") return i.isDM ? `[DM]: ${i.content}` : `[${i.name || "\u73A9\u5BB6"}]: ${i.content}`;
      if (r === "dnd_roll_result") {
        const d = i.checkSpec, h = i.checkResult;
        return `[\u7CFB\u7EDF\u68C0\u5B9A] ${d.intent}: 1d20(${h.naturalRoll}) + ${d.attribute}\u4FEE\u6B63(${h.modifier}) = ${h.total} vs DC:${d.dc} \u2192 ${h.isSuccess ? "\u6210\u529F" : "\u5931\u8D25"}`;
      }
      return r === "dnd_system_notice" ? `[\u7CFB\u7EDF]: ${i.content}` : null;
    }).filter(Boolean).join(`
`);
  }
  function Ye(s) {
    var _a;
    return ((_a = s.modeConfig.playerCharacterSnapshots.find((t) => t.isHumanControlled)) == null ? void 0 : _a.name) || "\u5192\u9669\u8005";
  }
  function R(s, n, t) {
    const o = Ye(n), a = t || n.modeConfig.dmName || "DM";
    return s.map((r) => ({
      ...r,
      content: Ve(r.content, {
        userName: o,
        charName: a
      })
    }));
  }
  function et(s, n) {
    const t = B(s), o = T(s), a = s.modeState.turnCounts, r = s.modeConfig.gameMode, i = `\u4F60\u662F DM (\u5730\u4E0B\u57CE\u4E3B)\u3002\u8BF7\u4E3A\u8FD9\u4E2A DND \u5192\u9669\u521B\u5EFA\u5F15\u4EBA\u5165\u80DC\u7684\u5F00\u573A\u4ECB\u7ECD\uFF0C\u8BBE\u7F6E\u4E16\u754C\u80CC\u666F\u548C\u521D\u59CB\u573A\u666F\u3002
${F(r)}
${t.systemPrompt}
${t.globalKnowledge ? `
\u3010\u4E16\u754C\u89C2\u8865\u5145\u3011
${t.globalKnowledge}` : ""}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, d = [
      "\u3010\u6E38\u620F\u914D\u7F6E\u3011",
      `DM: ${s.modeConfig.dmName || "DM"}`,
      `\u4E16\u754C: ${t.name} \u2014 ${t.description}`,
      `\u53C2\u4E0E\u89D2\u8272:
${O(o)}`,
      `\u3010\u521D\u59CB\u6570\u503C\u72B6\u6001\u3011
${E(o, a)}`
    ].join(`

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
    ], s);
  }
  function tt(s, n) {
    const t = B(s), o = T(s), a = s.modeState.turnCounts, r = s.modeConfig.gameMode, i = s.modeState.historySummary, d = `\u4F60\u662F DM\u3002\u8BF7\u6839\u636E\u5F53\u524D\u5267\u60C5\u8FDB\u5C55\u63CF\u5199\u573A\u666F\uFF0C\u63A8\u8FDB\u6545\u4E8B\u3002
\u4E0D\u9700\u8981\u5728\u6B64\u9636\u6BB5\u6307\u5B9A\u89D2\u8272\u6216\u63D0\u51FA\u68C0\u5B9A\uFF0C\u53EA\u9700\u63CF\u5199\u3002
${F(r)}
${t.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, h = G(n, s, 10), p = [
      "\u3010\u6E38\u620F\u914D\u7F6E\u3011",
      `\u4E16\u754C: ${t.name}`,
      `\u89D2\u8272:
${O(o)}`,
      i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "",
      h ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${h}` : "",
      `\u3010\u6570\u503C\u72B6\u6001\u3011
${E(o, a)}`
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
    ], s);
  }
  function nt(s, n) {
    const t = T(s), o = s.modeState.turnCounts, a = s.modeConfig.gameMode, r = t.map((l) => o[l.id] || 0), d = (r.length > 0 ? Math.min(...r) : 0) + 2, h = t.filter((l) => (o[l.id] || 0) <= d).sort((l, x) => (o[l.id] || 0) - (o[x.id] || 0)), p = `\u4F60\u662F DM\u3002\u8BF7\u6839\u636E\u521A\u624D\u7684\u53D9\u4E8B\uFF0C\u4ECE\u5019\u9009\u540D\u5355\u4E2D\u6307\u5B9A\u3010\u4E0B\u4E00\u4E2A\u3011\u884C\u52A8\u7684\u89D2\u8272\u3002
${F(a)}
\u3010\u516C\u5E73\u6027\u539F\u5219\u3011\uFF1A\u4E3A\u4E86\u786E\u4FDD\u6BCF\u4E2A\u73A9\u5BB6\u90FD\u6709\u5E73\u7B49\u7684\u53C2\u4E0E\u673A\u4F1A\uFF0C\u4F60\u3010\u5FC5\u987B\u3011\u4EC5\u4ECE\u4EE5\u4E0B\u63D0\u4F9B\u7684\u540D\u5355\u4E2D\u9009\u62E9\u3002\u8BF7\u4F18\u5148\u8003\u8651\u884C\u52A8\u6B21\u6570\u6700\u5C11\u7684\u89D2\u8272\u3002
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u9700\u8F93\u51FA\u4E00\u4E2A JSON \u5757\uFF0C\u4E0D\u8981\u5305\u542B\u4EFB\u4F55\u53D9\u4E8B\u6587\u5B57\u3002
\`\`\`json
{ "reason": "\u539F\u56E0", "nextPlayerId": "\u89D2\u8272ID" }
\`\`\`
\u5019\u9009\u540D\u5355\uFF08\u4EC5\u9650\u5DF2\u884C\u52A8\u6B21\u6570\u8F83\u5C11\u7684\u89D2\u8272\uFF09\uFF1A
${h.map((l) => `- ${l.name} (ID: ${l.id}, \u5DF2\u884C\u52A8: ${o[l.id] || 0}\u6B21)`).join(`
`)}`, u = n.getFlatHistoryItems(5).findLast((l) => l.type === "dnd_dm_narrate" || l.type === "dnd_dm_intro"), g = u ? `\u3010\u5F53\u524D\u573A\u666F\u3011
${u.data.content}` : `\u3010\u521D\u59CB\u573A\u666F\u3011
\u5192\u9669\u5F00\u59CB\u3002`, f = `\u3010\u6240\u6709\u89D2\u8272\u884C\u52A8\u7EDF\u8BA1\u3011
${t.map((l) => `${l.name}: ${o[l.id] || 0} \u6B21`).join(`
`)}`;
    return R([
      {
        role: "system",
        content: p
      },
      {
        role: "user",
        content: [
          g,
          f
        ].join(`

`)
      }
    ], s);
  }
  function st(s, n) {
    const t = s.modeState.turnCounts, o = s.modeState.currentTurnCharacterId, a = Ze(s, o), r = s.modeState.historySummary, i = s.modeConfig.gameMode;
    if (!a) return [];
    const d = `\u4F60\u662F\u73A9\u5BB6 ${a.name} (${a.id})\u3002${a.systemPrompt}
\u8BF7\u57FA\u4E8E\u5F53\u524D\u573A\u666F\u548C DM \u7684\u5F15\u5BFC\u51B3\u5B9A\u4F60\u7684\u884C\u52A8\u3002
${F(i)}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<think>\u5185\u5FC3\u72EC\u767D</think><speak>\u53E3\u5934\u8868\u8FBE</speak><action>\u5177\u4F53\u884C\u52A8</action>\u3002`, h = G(n, s, 8), p = E([
      a
    ], t), I = [
      `\u3010\u4F60\u7684\u89D2\u8272\u4FE1\u606F\u3011
${a.systemPrompt}`,
      r ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${r}` : "",
      h ? `\u3010\u5F53\u524D\u573A\u666F\u3011
${h}` : "",
      `\u3010\u4F60\u7684\u6570\u503C\u72B6\u6001\u3011
${p}`
    ].filter(Boolean).join(`

`);
    return R([
      {
        role: "system",
        content: d
      },
      {
        role: "user",
        content: I
      }
    ], s, a.name);
  }
  function at(s, n) {
    const t = B(s), o = T(s), a = s.modeState.turnCounts, r = s.modeState.historySummary, i = `\u4F60\u662F DM\u3002\u8BF7\u8BC4\u4EF7\u521A\u624D\u73A9\u5BB6\u7684\u884C\u52A8\uFF0C\u5E76\u63CF\u5199\u5176\u521D\u6B65\u53CD\u5E94\u3002
\u4E0D\u8981\u5728\u6B64\u9636\u6BB5\u8F93\u51FA\u68C0\u5B9A JSON\uFF0C\u4E5F\u4E0D\u8981\u63CF\u8FF0\u6700\u7EC8\u7ED3\u679C\u3002
${t.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, d = G(n, s, 10), h = [
      `\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${t.name}
\u89D2\u8272:
${O(o)}`,
      r ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${r}` : "",
      d ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${d}` : "",
      `\u3010\u6570\u503C\u72B6\u6001\u3011
${E(o, a)}`
    ].filter(Boolean).join(`

`);
    return R([
      {
        role: "system",
        content: i
      },
      {
        role: "user",
        content: h
      }
    ], s);
  }
  function rt(s, n) {
    const t = B(s), o = T(s), a = s.modeState.turnCounts, r = s.modeState.historySummary, i = s.modeConfig.gameMode, d = `\u4F60\u662F DM\u3002\u57FA\u4E8E\u73A9\u5BB6\u521A\u624D\u7684\u884C\u52A8\uFF0C\u51B3\u5B9A\u662F\u5426\u9700\u8981\u8FDB\u884C DND 5e \u68C0\u5B9A\u3002
${F(i)}
\u5982\u679C\u9700\u8981\uFF0C\u53EA\u8F93\u51FA JSON \u5757\uFF1A
\`\`\`json
{
  "intent": "\u5177\u4F53\u610F\u56FE",
  "type": "attribute",
  "attribute": "\u529B\u91CF|\u654F\u6377|\u4F53\u8D28|\u667A\u529B|\u611F\u77E5|\u9B45\u529B",
  "dc": 10\u523025\u4E4B\u95F4\u7684\u6570\u5B57,
  "playerId": "\u6267\u884C\u8005ID"
}
\`\`\`
\u5982\u679C\u4E0D\u9700\u8981\u68C0\u5B9A\uFF08\u76F4\u63A5\u6210\u529F/\u5931\u8D25\uFF09\uFF0C\u8F93\u51FA\uFF1A
\`\`\`json
{ "none": true }
\`\`\`
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u4EFB\u4F55\u53D9\u4E8B\u3002`, h = G(n, s, 10), p = [
      `\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${t.name}
\u89D2\u8272:
${O(o)}`,
      r ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${r}` : "",
      h ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${h}` : "",
      `\u3010\u89D2\u8272\u6570\u503C\u72B6\u6001\u3011
${E(o, a)}`
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
    ], s);
  }
  function ot(s, n) {
    var _a;
    const t = B(s), o = T(s), a = s.modeState.turnCounts, r = s.modeState.historySummary, i = s.modeState.lastCheckResult, d = s.modeState.lastCheckSpec, h = `\u4F60\u662F DM\u3002\u68C0\u5B9A\u7ED3\u679C\u5DF2\u51FA\u3002\u8BF7\u6839\u636E\u7ED3\u679C\u63CF\u8FF0\u540E\u679C\uFF0C\u5E76\u5F15\u5BFC\u5267\u60C5\u3002
${t.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, p = G(n, s, 10), I = i && d ? `\u3010\u68C0\u5B9A\u7ED3\u679C\u3011
\u610F\u56FE: ${d.intent}
\u6267\u884C\u8005: ${((_a = o.find((g) => g.id === d.playerId)) == null ? void 0 : _a.name) || d.playerId}
\u9AB0\u5B50\u7ED3\u679C: ${i.total} (1d20:${i.naturalRoll} + \u4FEE\u6B63:${i.modifier}) vs DC:${d.dc}
\u7ED3\u8BBA: ${i.isSuccess ? "\u6210\u529F" : "\u5931\u8D25"}
\u8BF7\u6839\u636E\u6B64\u7ED3\u679C\u8FDB\u884C\u9488\u5BF9\u6027\u7684\u540E\u679C\u63CF\u8FF0\u3002` : "", u = [
      `\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${t.name}
\u89D2\u8272:
${O(o)}`,
      r ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${r}` : "",
      p ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${p}` : "",
      I,
      `\u3010\u6570\u503C\u72B6\u6001\u3011
${E(o, a)}`
    ].filter(Boolean).join(`

`);
    return R([
      {
        role: "system",
        content: h
      },
      {
        role: "user",
        content: u
      }
    ], s);
  }
  class it extends we {
    constructor(n) {
      super(n), this.session = n;
    }
    getCurrentPhase() {
      return this.session.modeState.currentPhase;
    }
    getCurrentUIState() {
      return this.session.modeState.currentUIState;
    }
    getActualCurrentPhase(n) {
      var _a, _b, _c;
      const t = n.getProcessingItem();
      if (t == null ? void 0 : t.type) {
        const a = {
          dnd_dm_intro: "dm_game_intro",
          dnd_dm_narrate: "dm_narrate",
          dnd_assign_player: "dm_assign_player",
          dnd_player_action: "player_action",
          dnd_check_decision: "dm_check_decision",
          dnd_roll_result: "fn_roll_check"
        };
        if (t.type === "participant_message" && ((_a = t.data) == null ? void 0 : _a.isDM)) return "dm_check_eval";
        const r = a[t.type];
        if (r) return r;
      }
      const o = n.getFlatHistoryItems();
      for (let a = o.length - 1; a >= 0; a--) {
        const r = o[a];
        if (!(r == null ? void 0 : r.deleted)) switch (r.type) {
          case "dnd_dm_intro":
            return "dm_assign_player";
          case "dnd_dm_narrate": {
            const i = (_b = r.data) == null ? void 0 : _b.phase;
            return i === "dm_check_eval" ? "dm_check_decision" : "dm_assign_player";
          }
          case "dnd_assign_player":
            return "player_action";
          case "dnd_player_action":
            return "dm_check_eval";
          case "dnd_check_decision":
            return ((_c = r.data) == null ? void 0 : _c.needsCheck) ? "fn_roll_check" : "dm_narrate";
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
    getActualCurrentUIState(n) {
      var _a;
      const t = n.getProcessingItem();
      if (t == null ? void 0 : t.type) {
        const o = {
          dnd_dm_intro: "dm_game_intro_running",
          dnd_dm_narrate: "dm_narrate_running",
          dnd_assign_player: "dm_assign_player_running",
          dnd_player_action: "player_action_running",
          dnd_check_decision: "dm_check_decision_running",
          dnd_roll_result: "fn_roll_check_running"
        };
        if (t.type === "participant_message" && ((_a = t.data) == null ? void 0 : _a.isDM)) return "dm_check_eval_running";
        const a = o[t.type];
        if (a) return a;
      }
      return this.session.modeState.currentUIState ? this.session.modeState.currentUIState : this.getReadyUIStateForPhase(this.getActualCurrentPhase(n));
    }
    getReadyUIStateForPhase(n) {
      return `${n}_ready`;
    }
    getRunningUIStateForPhase(n) {
      return `${n}_running`;
    }
    getDoneUIStateForPhase(n) {
      return `${n}_done`;
    }
    enterNextState(n) {
      console.log(`[DndManager] Transition: ${this.session.modeState.currentPhase} -> ${n}`), this.session.modeState.currentPhase = n, this.session.updatedAt = Date.now();
    }
    setCurrentUIState(n) {
      this.session.modeState.currentUIState = n, this.session.updatedAt = Date.now();
    }
    setCurrentTurn(n) {
      this.session.modeState.currentTurnCharacterId = n, this.session.updatedAt = Date.now();
    }
    incrementTurnCount(n) {
      this.session.modeState.turnCounts[n] || (this.session.modeState.turnCounts[n] = 0), this.session.modeState.turnCounts[n]++, this.session.updatedAt = Date.now();
    }
    incrementRound() {
      this.session.modeState.currentRound++, this.session.updatedAt = Date.now();
    }
    async executeCurrentStateLogic(n) {
      switch (this.session.modeState.currentPhase) {
        case "dm_game_intro":
          return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_game_intro")), {
            type: "LLM_CALL",
            messages: et(this.session),
            callbackPhase: "dm_game_intro",
            llmRequestType: "dnd_dm_intro"
          };
        case "dm_narrate":
          return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate")), {
            type: "LLM_CALL",
            messages: tt(this.session, n),
            callbackPhase: "dm_narrate",
            llmRequestType: "dnd_dm_narrate",
            dataExtra: {
              phase: "dm_narrate"
            }
          };
        case "dm_assign_player":
          return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_assign_player")), {
            type: "LLM_CALL",
            messages: nt(this.session, n),
            callbackPhase: "dm_assign_player",
            llmRequestType: "dnd_assign_player"
          };
        case "player_action":
          return this.handlePlayerAction(n);
        case "dm_check_eval":
          return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_eval")), {
            type: "LLM_CALL",
            messages: at(this.session, n),
            callbackPhase: "dm_check_eval",
            llmRequestType: "dnd_dm_narrate",
            dataExtra: {
              phase: "dm_check_eval"
            }
          };
        case "dm_check_decision":
          return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_decision")), {
            type: "LLM_CALL",
            messages: rt(this.session, n),
            callbackPhase: "dm_check_decision",
            llmRequestType: "dnd_check_decision"
          };
        case "fn_roll_check":
          return this.handleRollCheck(n);
        case "dm_tell_result":
          return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_tell_result")), {
            type: "LLM_CALL",
            messages: ot(this.session, n),
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
    handlePlayerAction(n) {
      const t = this.session.modeState.currentTurnCharacterId, o = this.session.modeConfig.playerCharacterSnapshots.find((a) => a.id === t);
      return o ? o.isHumanControlled ? (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), {
        type: "WAIT_FOR_INPUT"
      }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), {
        type: "LLM_CALL",
        messages: st(this.session, n),
        callbackPhase: "player_action",
        llmRequestType: "dnd_player_action",
        dataExtra: {
          characterId: o.id,
          characterName: o.name,
          isHumanControlled: false
        }
      }) : (console.error(`[DndManager] \u89D2\u8272 ${t} \u4E0D\u5B58\u5728`), this.enterNextState("dm_assign_player"), {
        type: "STATE_CHANGE"
      });
    }
    handleRollCheck(n) {
      this.setCurrentUIState(this.getRunningUIStateForPhase("fn_roll_check"));
      const t = this.session.modeState.lastCheckSpec;
      if (!t) return console.error("[DndManager] \u68C0\u5B9A\u89C4\u8303\u7F3A\u5931\uFF0C\u8DF3\u8FC7\u68C0\u5B9A"), this.enterNextState("dm_narrate"), {
        type: "STATE_CHANGE"
      };
      const o = this.session.modeConfig.playerCharacterSnapshots.find((r) => r.id === t.playerId);
      if (!o) return console.error(`[DndManager] \u68C0\u5B9A\u89D2\u8272 ${t.playerId} \u4E0D\u5B58\u5728`), this.enterNextState("dm_narrate"), {
        type: "STATE_CHANGE"
      };
      const a = ze(t, o.attributes);
      return this.session.modeState.lastCheckResult = a, n.addHistoryItem({
        id: P(),
        type: "dnd_roll_result",
        idx: 0,
        orderRef: 0,
        timestamp: Date.now(),
        data: {
          checkSpec: t,
          checkResult: a,
          characterName: o.name,
          attributeName: t.attribute
        }
      }), this.setCurrentUIState(this.getDoneUIStateForPhase("fn_roll_check")), this.enterNextState("dm_tell_result"), {
        type: "STATE_CHANGE"
      };
    }
    handleLLMResponse(n, t, o) {
      switch (n) {
        case "dm_game_intro":
          this.setCurrentUIState(this.getDoneUIStateForPhase("dm_game_intro")), this.enterNextState("dm_assign_player");
          break;
        case "dm_narrate":
          this.setCurrentUIState(this.getDoneUIStateForPhase("dm_narrate")), this.enterNextState("dm_assign_player");
          break;
        case "dm_assign_player": {
          this.setCurrentUIState(this.getDoneUIStateForPhase("dm_assign_player"));
          const a = Xe(t);
          if (a) {
            const r = this.session.modeConfig.playerCharacterSnapshots.find((i) => i.id === a.nextPlayerId);
            o.addHistoryItem({
              id: P(),
              type: "dnd_assign_player",
              idx: 0,
              orderRef: 0,
              timestamp: Date.now(),
              data: {
                nextPlayerId: a.nextPlayerId,
                nextPlayerName: r == null ? void 0 : r.name,
                reason: a.reason,
                isHumanControlled: r == null ? void 0 : r.isHumanControlled
              },
              hidden: true
            }), o.addHistoryItem({
              id: P(),
              type: "dnd_system_notice",
              idx: 0,
              orderRef: 0,
              timestamp: Date.now(),
              data: {
                content: `\u8F6E\u5230 ${(r == null ? void 0 : r.name) || a.nextPlayerId} \u884C\u52A8`,
                noticeType: "turn_start",
                characterId: a.nextPlayerId,
                characterName: r == null ? void 0 : r.name
              }
            }), this.setCurrentTurn(a.nextPlayerId), this.enterNextState("player_action");
          } else console.warn("[DndManager] \u89E3\u6790 DM \u6307\u5B9A\u89D2\u8272\u5931\u8D25\uFF0C\u91CD\u8BD5"), this.enterNextState("dm_assign_player");
          break;
        }
        case "player_action": {
          this.setCurrentUIState(this.getDoneUIStateForPhase("player_action"));
          const a = this.session.modeState.currentTurnCharacterId;
          this.incrementTurnCount(a), this.enterNextState("dm_check_eval");
          break;
        }
        case "dm_check_eval":
          this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_eval")), this.enterNextState("dm_check_decision");
          break;
        case "dm_check_decision": {
          this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_decision"));
          const a = Je(t);
          o.addHistoryItem({
            id: P(),
            type: "dnd_check_decision",
            idx: 0,
            orderRef: 0,
            timestamp: Date.now(),
            data: {
              needsCheck: (a == null ? void 0 : a.needsCheck) ?? false,
              checkSpec: (a == null ? void 0 : a.needsCheck) ? a.checkSpec : void 0,
              rawContent: t
            },
            hidden: true
          }), (a == null ? void 0 : a.needsCheck) && "checkSpec" in a ? (console.log("[DndManager] \u68C0\u5B9A\u51B3\u7B56\uFF1A\u9700\u8981\u68C0\u5B9A", a.checkSpec), this.session.modeState.lastCheckSpec = a.checkSpec, this.enterNextState("fn_roll_check")) : a === null ? (console.warn("[DndManager] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5931\u8D25\uFF0C\u91CD\u8BD5 dm_check_decision"), this.enterNextState("dm_check_decision")) : (console.log("[DndManager] \u68C0\u5B9A\u51B3\u7B56\uFF1A\u65E0\u9700\u68C0\u5B9A\uFF0C\u76F4\u63A5\u8FDB\u5165\u53D9\u4E8B"), this.enterNextState("dm_narrate"));
          break;
        }
        case "dm_tell_result":
          this.setCurrentUIState(this.getDoneUIStateForPhase("dm_tell_result")), this.enterNextState("dm_assign_player");
          break;
        default:
          console.warn(`[DndManager] \u672A\u77E5\u7684\u56DE\u8C03\u9636\u6BB5: ${n}`);
          break;
      }
    }
  }
  const m = ne({
    currentSession: null,
    contextManager: null,
    sessionManager: null,
    loadSession(s, n) {
      this.currentSession = s, this.currentSession.modeState.currentUIState = "idle", this.sessionManager = be(new it(this.currentSession));
      const t = ne(n || {
        historyItems: [],
        processingItem: void 0
      });
      this.contextManager = new je(t);
    },
    setCurrentTurn(s) {
      this.sessionManager && this.sessionManager.setCurrentTurn(s);
    },
    incrementRound() {
      this.sessionManager && this.sessionManager.incrementRound();
    },
    setPhase(s) {
      this.currentSession && (this.currentSession.modeState.currentPhase = s);
    },
    updateCharacterAttributes(s, n) {
      if (!this.currentSession) return;
      const t = this.currentSession.modeConfig.playerCharacterSnapshots.find((o) => o.id === s);
      t && Object.assign(t.attributes, n);
    },
    toggleCharacterControl(s) {
      if (!this.currentSession) return;
      const n = this.currentSession.modeConfig.playerCharacterSnapshots.find((t) => t.id === s);
      n && (n.isHumanControlled = !n.isHumanControlled, this.currentSession.updatedAt = Date.now());
    },
    updateCharacterHP(s, n) {
      if (!this.currentSession) return;
      const t = this.currentSession.modeConfig.playerCharacterSnapshots.find((o) => o.id === s);
      t && (t.currentHP = Math.max(0, Math.min(n, t.maxHP)));
    },
    async saveNewContextItemsToDB(s, n) {
      const { SessionDB: t } = await se(async () => {
        const { SessionDB: r } = await import("./db-master-BrZHBPj2.js").then((i) => i.s);
        return {
          SessionDB: r
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7])), o = new t(s);
      let a;
      try {
        a = V(n);
      } catch {
        a = JSON.parse(JSON.stringify(n));
      }
      await o.addContextItems(a);
    },
    async updateSessionInDB() {
      if (!this.currentSession) return;
      const { masterDb: s } = await se(async () => {
        const { masterDb: o } = await import("./db-master-BrZHBPj2.js").then((a) => a.t);
        return {
          masterDb: o
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7])), n = V(this.currentSession.modeState), t = V(this.currentSession.modeConfig);
      await s.sessions.update(this.currentSession.id, {
        modeState: n,
        modeConfig: t,
        updatedAt: Date.now()
      });
    }
  });
  function ct() {
    const s = Me((u) => u.config), n = j.useRef(false), t = j.useRef(false), o = ie(), a = async (u, g, f, l, x = {}) => {
      const N = m.contextManager;
      if (!N) return {
        content: ""
      };
      const k = {
        id: P(),
        type: f,
        orderRef: 0,
        timestamp: Date.now(),
        data: {
          content: "",
          ...x
        }
      };
      N.setProcessingItem(k);
      let z = "";
      return await ve(u, g, [], (J, L) => {
        l == null ? void 0 : l(J), z = L;
        const M = N.getProcessingItem();
        M && (M.data.content = L);
      }), N.completeProcessingItem(), {
        content: z
      };
    }, r = async (u, g) => {
      const f = m.sessionManager, l = m.contextManager;
      if (!(f && l)) return;
      const x = await f.executeCurrentStateLogic(l);
      if (console.log("[DndLoop] Action:", x), x.type === "WAIT_FOR_INPUT" || x.type === "STOP") {
        await m.updateSessionInDB(), n.current = false;
        return;
      }
      if (x.type === "STATE_CHANGE") {
        if (await m.updateSessionInDB(), t.current) {
          console.log("[DndLoop] \u6E38\u620F\u5DF2\u6682\u505C\uFF08STATE_CHANGE \u540E\uFF09"), n.current = false;
          return;
        }
        setTimeout(() => d(u.id), 0);
        return;
      }
      if (x.type === "LLM_CALL") {
        if (x.callbackPhase) {
          const k = x.callbackPhase;
          f.setCurrentUIState(f.getRunningUIStateForPhase(k));
        }
        await m.updateSessionInDB();
        const N = await a(g, x.messages.map((k) => ({
          ...k,
          id: P()
        })), x.llmRequestType, void 0, x.dataExtra);
        if (await m.saveNewContextItemsToDB(u.id, l.getHistoryItems()), i(x, N.content, u.id), await m.updateSessionInDB(), t.current) {
          console.log("[DndLoop] \u6E38\u620F\u5DF2\u6682\u505C\uFF08LLM_CALL \u5B8C\u6210\u540E\uFF09"), n.current = false;
          return;
        }
        setTimeout(() => d(u.id), 0);
      }
    }, i = (u, g, f) => {
      const l = m.sessionManager, x = m.contextManager;
      l && x && l.handleLLMResponse(u.callbackPhase, g, x);
    }, d = async (u) => {
      const g = m.currentSession;
      if (!g || g.id !== u) return;
      const f = {
        ...s
      };
      try {
        n.current = true, await r(g, f);
      } catch (l) {
        console.error("[DndLoop] Critical Error:", l), K.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", {
          duration: Number.POSITIVE_INFINITY,
          action: {
            label: "\u524D\u5F80\u914D\u7F6E",
            onClick: () => o({
              to: "/config/llm"
            })
          }
        }), n.current = false;
      }
    }, h = j.useCallback(async (u) => {
      if (n.current) return;
      const g = m.currentSession, f = m.contextManager, l = m.sessionManager;
      if (!(g && f && l)) {
        console.warn("[DndLoop] Session or Managers not ready");
        return;
      }
      if (u) {
        if (l.getCurrentPhase() !== "player_action") {
          K.warning("\u5F53\u524D\u5E76\u975E\u8BE5\u89D2\u8272\u7684\u884C\u52A8\u56DE\u5408");
          return;
        }
        const x = g.modeState.currentTurnCharacterId, N = g.modeConfig.playerCharacterSnapshots.find((k) => k.id === x);
        if (!(N == null ? void 0 : N.isHumanControlled)) {
          K.warning("\u5F53\u524D\u89D2\u8272\u7531 AI \u63A7\u5236\uFF0C\u65E0\u6CD5\u624B\u52A8\u8F93\u5165");
          return;
        }
        l.setCurrentUIState(l.getRunningUIStateForPhase("player_action")), f.addHistoryItem({
          id: P(),
          type: "dnd_player_action",
          idx: 0,
          orderRef: 0,
          timestamp: Date.now(),
          data: {
            content: u,
            characterId: x,
            characterName: N.name,
            isHumanControlled: true
          }
        }), await m.saveNewContextItemsToDB(g.id, f.getHistoryItems()), l.incrementTurnCount(x), l.setCurrentUIState(l.getDoneUIStateForPhase("player_action")), l.enterNextState("dm_check_eval"), await m.updateSessionInDB();
      }
      await d(g.id);
    }, [
      s
    ]), p = j.useCallback(() => {
      t.current = true, console.log("[DndLoop] \u6682\u505C\u8BF7\u6C42\u5DF2\u53D1\u51FA");
    }, []), I = j.useCallback(() => {
      if (!t.current) return;
      t.current = false, console.log("[DndLoop] \u6062\u590D\u6E38\u620F");
      const u = m.currentSession;
      u && !n.current && d(u.id);
    }, [
      s
    ]);
    return {
      nextStep: h,
      isCallingRef: n,
      isPausedRef: t,
      pauseGame: p,
      resumeGame: I
    };
  }
  const dt = $({
    \u529B\u91CF: C().describe("\u529B\u91CF\u5C5E\u6027\u503C"),
    \u654F\u6377: C().describe("\u654F\u6377\u5C5E\u6027\u503C"),
    \u4F53\u8D28: C().describe("\u4F53\u8D28\u5C5E\u6027\u503C"),
    \u667A\u529B: C().describe("\u667A\u529B\u5C5E\u6027\u503C"),
    \u611F\u77E5: C().describe("\u611F\u77E5\u5C5E\u6027\u503C"),
    \u9B45\u529B: C().describe("\u9B45\u529B\u5C5E\u6027\u503C")
  }), lt = $({
    intent: _().describe("\u68C0\u5B9A\u610F\u56FE"),
    type: q([
      "attribute",
      "saving",
      "attack"
    ]).describe("\u68C0\u5B9A\u7C7B\u578B"),
    attribute: _().describe("\u68C0\u5B9A\u7EF4\u5EA6"),
    dc: C().describe("\u76EE\u6807\u6570\u503C (DC)"),
    playerId: _().describe("\u6267\u884C\u68C0\u5B9A\u7684\u89D2\u8272 ID")
  }), mt = $({
    naturalRoll: C().describe("\u9AB0\u5B50\u539F\u503C"),
    total: C().describe("\u603B\u503C (\u539F\u503C + \u4FEE\u6B63)"),
    modifier: C().describe("\u5C5E\u6027\u4FEE\u6B63"),
    isSuccess: ce().describe("\u662F\u5426\u6210\u529F")
  }), ut = q([
    "dm_game_intro",
    "dm_narrate",
    "dm_assign_player",
    "player_action",
    "dm_check_eval",
    "dm_check_decision",
    "fn_roll_check",
    "dm_tell_result"
  ]), ht = q([
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
      label: "\u7A7A\u95F2",
      placeholder: "\u8BF7\u5148\u70B9\u51FB\u5F00\u59CB\u6216\u7EE7\u7EED...",
      inputEnabled: false
    },
    dm_game_intro_ready: {
      label: "DM\u5F00\u573A\uFF08\u51C6\u5907\uFF09",
      placeholder: "\u8BF7\u7B49\u5F85 DM \u5F00\u573A\u4ECB\u7ECD...",
      inputEnabled: false
    },
    dm_game_intro_running: {
      label: "DM\u5F00\u573A\uFF08\u8FDB\u884C\u4E2D\uFF09",
      placeholder: "DM \u6B63\u5728\u4ECB\u7ECD\u4E16\u754C...",
      inputEnabled: false
    },
    dm_game_intro_done: {
      label: "DM\u5F00\u573A\uFF08\u5B8C\u6210\uFF09",
      placeholder: "DM \u5F00\u573A\u4ECB\u7ECD\u5B8C\u6210...",
      inputEnabled: false
    },
    dm_narrate_ready: {
      label: "DM\u53D9\u4E8B\uFF08\u51C6\u5907\uFF09",
      placeholder: "\u8BF7\u7B49\u5F85 DM \u53D9\u4E8B...",
      inputEnabled: false
    },
    dm_narrate_running: {
      label: "DM\u53D9\u4E8B\uFF08\u8FDB\u884C\u4E2D\uFF09",
      placeholder: "DM \u6B63\u5728\u63CF\u5199\u573A\u666F...",
      inputEnabled: false
    },
    dm_narrate_done: {
      label: "DM\u53D9\u4E8B\uFF08\u5B8C\u6210\uFF09",
      placeholder: "DM \u53D9\u4E8B\u5B8C\u6210...",
      inputEnabled: false
    },
    dm_assign_player_ready: {
      label: "\u6307\u5B9A\u89D2\u8272\uFF08\u51C6\u5907\uFF09",
      placeholder: "DM \u6B63\u5728\u51B3\u5B9A\u8C01\u884C\u52A8...",
      inputEnabled: false
    },
    dm_assign_player_running: {
      label: "\u6307\u5B9A\u89D2\u8272\uFF08\u8FDB\u884C\u4E2D\uFF09",
      placeholder: "DM \u6B63\u5728\u6307\u5B9A\u89D2\u8272...",
      inputEnabled: false
    },
    dm_assign_player_done: {
      label: "\u6307\u5B9A\u89D2\u8272\uFF08\u5B8C\u6210\uFF09",
      placeholder: "\u89D2\u8272\u5DF2\u88AB\u6307\u5B9A...",
      inputEnabled: false
    },
    player_action_ready: {
      label: "\u89D2\u8272\u884C\u52A8\uFF08\u51C6\u5907\uFF09",
      placeholder: "\u8F6E\u5230\u4F60\u884C\u52A8\u4E86\uFF0C\u63CF\u8FF0\u4F60\u7684\u884C\u52A8...",
      inputEnabled: true
    },
    player_action_running: {
      label: "\u89D2\u8272\u884C\u52A8\uFF08\u8FDB\u884C\u4E2D\uFF09",
      placeholder: "\u89D2\u8272\u6B63\u5728\u884C\u52A8...",
      inputEnabled: false
    },
    player_action_done: {
      label: "\u89D2\u8272\u884C\u52A8\uFF08\u5B8C\u6210\uFF09",
      placeholder: "\u884C\u52A8\u5B8C\u6210...",
      inputEnabled: false
    },
    dm_check_eval_ready: {
      label: "DM\u8BC4\u4EF7\uFF08\u51C6\u5907\uFF09",
      placeholder: "DM \u6B63\u5728\u8BC4\u4EF7\u884C\u52A8...",
      inputEnabled: false
    },
    dm_check_eval_running: {
      label: "DM\u8BC4\u4EF7\uFF08\u8FDB\u884C\u4E2D\uFF09",
      placeholder: "DM \u6B63\u5728\u8BC4\u4EF7\u884C\u52A8...",
      inputEnabled: false
    },
    dm_check_eval_done: {
      label: "DM\u8BC4\u4EF7\uFF08\u5B8C\u6210\uFF09",
      placeholder: "DM \u8BC4\u4EF7\u5B8C\u6210...",
      inputEnabled: false
    },
    dm_check_decision_ready: {
      label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u51C6\u5907\uFF09",
      placeholder: "DM \u6B63\u5728\u5224\u5B9A\u662F\u5426\u9700\u8981\u68C0\u5B9A...",
      inputEnabled: false
    },
    dm_check_decision_running: {
      label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u8FDB\u884C\u4E2D\uFF09",
      placeholder: "DM \u6B63\u5728\u5224\u5B9A...",
      inputEnabled: false
    },
    dm_check_decision_done: {
      label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u5B8C\u6210\uFF09",
      placeholder: "\u68C0\u5B9A\u51B3\u7B56\u5B8C\u6210...",
      inputEnabled: false
    },
    fn_roll_check_ready: {
      label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u51C6\u5907\uFF09",
      placeholder: "\u51C6\u5907\u63B7\u9AB0...",
      inputEnabled: false
    },
    fn_roll_check_running: {
      label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u8FDB\u884C\u4E2D\uFF09",
      placeholder: "\u6B63\u5728\u63B7\u9AB0...",
      inputEnabled: false
    },
    fn_roll_check_done: {
      label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u5B8C\u6210\uFF09",
      placeholder: "\u63B7\u9AB0\u5B8C\u6210...",
      inputEnabled: false
    },
    dm_tell_result_ready: {
      label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u51C6\u5907\uFF09",
      placeholder: "DM \u6B63\u5728\u63CF\u8FF0\u68C0\u5B9A\u7ED3\u679C...",
      inputEnabled: false
    },
    dm_tell_result_running: {
      label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u8FDB\u884C\u4E2D\uFF09",
      placeholder: "DM \u6B63\u5728\u63CF\u8FF0\u7ED3\u679C...",
      inputEnabled: false
    },
    dm_tell_result_done: {
      label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u5B8C\u6210\uFF09",
      placeholder: "DM \u63CF\u8FF0\u5B8C\u6210...",
      inputEnabled: false
    }
  }, pt = q([
    "standard",
    "narrative",
    "hardcore",
    "solo"
  ]), xt = $({
    id: _().describe("\u89D2\u8272 ID"),
    name: _().describe("\u89D2\u8272\u540D\u79F0"),
    description: _().describe("\u89D2\u8272\u63CF\u8FF0"),
    avatar: _().optional().describe("\u89D2\u8272\u5934\u50CF"),
    systemPrompt: _().describe("\u89D2\u8272\u626E\u6F14\u6307\u5F15"),
    attributes: dt.describe("\u89D2\u8272\u5C5E\u6027"),
    race: _().optional().describe("\u79CD\u65CF"),
    class: _().optional().describe("\u804C\u4E1A"),
    currentHP: C().describe("\u5F53\u524D\u751F\u547D\u503C"),
    maxHP: C().describe("\u6700\u5927\u751F\u547D\u503C"),
    isHumanControlled: ce().describe("\u662F\u5426\u7531\u4EBA\u7C7B\u63A7\u5236")
  }), gt = $({
    name: _().describe("\u4E16\u754C\u540D\u79F0"),
    description: _().describe("\u4E16\u754C\u63CF\u8FF0"),
    systemPrompt: _().describe("\u6838\u5FC3\u7CFB\u7EDF\u63D0\u793A\u8BCD"),
    globalKnowledge: _().optional().describe("\u4E16\u754C\u89C2\u8865\u5145")
  }), ft = $({
    worldSnapshot: gt.describe("\u4E16\u754C\u8BBE\u5B9A\u5FEB\u7167"),
    gameMode: pt.describe("\u73A9\u6CD5\u6A21\u5F0F"),
    playerCharacterSnapshots: Pe(xt).describe("\u53C2\u4E0E\u89D2\u8272\u5FEB\u7167\u5217\u8868"),
    dmName: _().optional().describe("DM \u663E\u793A\u540D\u79F0")
  }), _t = $({
    currentPhase: ut.describe("\u5F53\u524D\u9636\u6BB5\u540D\u79F0"),
    currentUIState: ht.describe("\u5F53\u524D UI \u72B6\u6001\u540D\u79F0"),
    currentTurnCharacterId: _().describe("\u5F53\u524D\u884C\u52A8\u89D2\u8272 ID ('dm' \u6216\u89D2\u8272ID)"),
    currentRound: C().describe("\u5F53\u524D\u56DE\u5408\u6570"),
    turnCounts: $e(_(), C()).describe("\u6BCF\u4E2A\u89D2\u8272\u7684\u884C\u52A8\u6B21\u6570\u7EDF\u8BA1"),
    lastCheckSpec: lt.optional().describe("\u6700\u8FD1\u4E00\u6B21\u68C0\u5B9A\u89C4\u8303"),
    lastCheckResult: mt.optional().describe("\u6700\u8FD1\u4E00\u6B21\u68C0\u5B9A\u7ED3\u679C"),
    historySummary: _().describe("\u5386\u53F2\u6458\u8981")
  });
  Ce.extend({
    mode: Te("dnd").describe("\u6A21\u5F0F"),
    modeConfig: ft.describe("DnD \u6A21\u5F0F\u914D\u7F6E"),
    modeState: _t.describe("DnD \u6A21\u5F0F\u72B6\u6001")
  });
  let bt, X, re, yt, oe;
  zt = (s) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
    const n = ie(), [t, o] = j.useState(""), a = j.useRef(null), [r, i] = j.useState(false), [d, h] = j.useState(false), p = ye(m), { data: I = [] } = Se((c) => c.from({
      s: Ne
    })), u = I.find((c) => c.id === s.sessionId);
    j.useEffect(() => {
      var _a2;
      let c = false;
      if (!u) return;
      if (((_a2 = m.currentSession) == null ? void 0 : _a2.id) === u.id && m.contextManager) {
        h(true);
        return;
      }
      return (async () => {
        try {
          const y = await De.createSessionDB(u.id).getContextItems();
          if (c) return;
          m.loadSession(u, {
            historyItems: y,
            processingItem: void 0
          }), h(true);
        } catch (D) {
          console.error("[DnD] Load session error", D);
        }
      })(), () => {
        c = true;
      };
    }, [
      u == null ? void 0 : u.id,
      u
    ]);
    const { nextStep: g, isPausedRef: f, pauseGame: l, resumeGame: x } = ct(), [N, k] = j.useState(false);
    j.useEffect(() => {
      a.current && (a.current.scrollTop = a.current.scrollHeight);
    });
    const z = async () => {
      if (r) return;
      const c = m.sessionManager, b = m.contextManager;
      if (c && b) {
        f.current = false, k(false), i(true);
        try {
          const D = c.getActualCurrentPhase(b);
          c.enterNextState(D), c.setCurrentUIState(c.getReadyUIStateForPhase(D)), await m.updateSessionInDB(), await g();
        } finally {
          i(false);
        }
      }
    };
    if (!(u && d)) return e.jsxs("div", {
      className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
      children: [
        e.jsx("div", {
          className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center",
          children: e.jsx(W, {
            className: "w-6 h-6 opacity-20"
          })
        }),
        e.jsx("p", {
          className: "text-xs font-medium tracking-widest uppercase opacity-50",
          children: "\u6B63\u5728\u6784\u5EFA\u5192\u9669\u4E16\u754C..."
        })
      ]
    });
    const J = async () => {
      if (!(!t.trim() || r)) {
        f.current = false, k(false), i(true);
        try {
          await g(t);
        } finally {
          i(false), o("");
        }
      }
    }, L = m.sessionManager && m.contextManager ? m.sessionManager.getActualCurrentUIState(m.contextManager) : ((_b = (_a = p.currentSession) == null ? void 0 : _a.modeState) == null ? void 0 : _b.currentUIState) || "idle", M = ae[L] || ae.idle, w = (_e = (_d = (_c = p.currentSession) == null ? void 0 : _c.modeConfig) == null ? void 0 : _d.playerCharacterSnapshots) == null ? void 0 : _e.find((c) => {
      var _a2, _b2;
      return c.id === ((_b2 = (_a2 = p.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b2.currentTurnCharacterId);
    }), te = !!(w == null ? void 0 : w.isHumanControlled), U = r || !M.inputEnabled || M.inputEnabled && !te, ue = () => {
      l(), k(true);
    }, he = () => {
      x(), k(false);
    }, pe = async (c) => {
      var _a2, _b2, _c2;
      const b = (_a2 = m.currentSession) == null ? void 0 : _a2.modeConfig.playerCharacterSnapshots.find((_e2) => _e2.id === c);
      if (!b) return;
      const D = b.isHumanControlled;
      m.toggleCharacterControl(c), await m.updateSessionInDB();
      const y = c === ((_b2 = m.currentSession) == null ? void 0 : _b2.modeState.currentTurnCharacterId), H = (_c2 = m.sessionManager) == null ? void 0 : _c2.getCurrentPhase();
      D && y && H === "player_action" && !r && await g();
    }, xe = () => {
      n({
        to: "/plaza"
      });
    }, ge = () => {
      console.log("[DnD][Memory Session]", m.currentSession);
    }, fe = async () => {
      if (!(u == null ? void 0 : u.id)) return;
      const c = await ke.sessions.getTable().get(u.id);
      console.log("[DnD][DB Session]", c);
    };
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
                      className: "w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-sm",
                      children: e.jsx(Q, {
                        className: "w-5 h-5 text-amber-600"
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
                              children: ((_h = (_g = (_f = p.currentSession) == null ? void 0 : _f.modeConfig) == null ? void 0 : _g.worldSnapshot) == null ? void 0 : _h.name) || "DnD \u5192\u9669"
                            }),
                            e.jsxs(A, {
                              variant: "outline",
                              className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-amber-500/5 text-amber-600 border-amber-500/10",
                              children: [
                                "R",
                                ((_j = (_i = p.currentSession) == null ? void 0 : _i.modeState) == null ? void 0 : _j.currentRound) || 1
                              ]
                            })
                          ]
                        }),
                        e.jsx("span", {
                          className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide",
                          children: w ? `\u5F53\u524D\u884C\u52A8: ${w.name} (${w.isHumanControlled ? "\u73A9\u5BB6" : "AI"})` : "\u7B49\u5F85\u5F00\u59CB..."
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    L !== "idle" && (N ? e.jsxs(v, {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-green-500/30 text-green-600 hover:bg-green-500/10",
                      onClick: he,
                      children: [
                        e.jsx(Le, {
                          className: "w-3 h-3"
                        }),
                        "\u7EE7\u7EED"
                      ]
                    }) : e.jsxs(v, {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-amber-500/30 text-amber-600 hover:bg-amber-500/10",
                      onClick: ue,
                      disabled: !r,
                      children: [
                        e.jsx(Ee, {
                          className: "w-3 h-3"
                        }),
                        "\u6682\u505C"
                      ]
                    })),
                    e.jsxs(A, {
                      variant: "secondary",
                      className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50",
                      children: [
                        e.jsx("span", {
                          className: S("w-1.5 h-1.5 rounded-full", N ? "bg-amber-400" : "bg-amber-500 animate-pulse")
                        }),
                        N ? "\u5DF2\u6682\u505C" : "DND"
                      ]
                    }),
                    e.jsx(v, {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px]",
                      onClick: ge,
                      children: "LOG MEM"
                    }),
                    e.jsx(v, {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px]",
                      onClick: fe,
                      children: "LOG DB"
                    })
                  ]
                })
              ]
            }),
            e.jsx("div", {
              className: "flex grow overflow-y-auto",
              ref: a,
              children: e.jsx("div", {
                className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-8",
                children: (() => {
                  var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
                  const c = (((_a2 = p.contextManager) == null ? void 0 : _a2.state.historyItems) || []).filter((y) => !y.hidden), b = (_b2 = p.contextManager) == null ? void 0 : _b2.state.processingItem;
                  if (L === "idle") {
                    const y = c.length === 0 ? "\u5F00\u59CB\u5192\u9669" : "\u7EE7\u7EED\u5192\u9669";
                    return e.jsxs("div", {
                      className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                      children: [
                        e.jsx("div", {
                          className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500",
                          children: e.jsx(Q, {
                            className: "w-10 h-10 text-amber-500 drop-shadow-sm"
                          })
                        }),
                        e.jsx("h2", {
                          className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                          children: ((_e2 = (_d2 = (_c2 = p.currentSession) == null ? void 0 : _c2.modeConfig) == null ? void 0 : _d2.worldSnapshot) == null ? void 0 : _e2.name) || "DnD \u5192\u9669"
                        }),
                        e.jsx("p", {
                          className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm",
                          children: ((_h2 = (_g2 = (_f2 = p.currentSession) == null ? void 0 : _f2.modeConfig) == null ? void 0 : _g2.worldSnapshot) == null ? void 0 : _h2.description) || "\u4E00\u6BB5\u5168\u65B0\u7684\u5192\u9669\u65C5\u7A0B\u5373\u5C06\u5C55\u5F00\uFF0C\u51C6\u5907\u597D\u63B7\u51FA\u547D\u8FD0\u7684\u9AB0\u5B50\u4E86\u5417\uFF1F"
                        }),
                        e.jsxs(v, {
                          type: "button",
                          size: "lg",
                          className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-amber-500/25 shadow-amber-500/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90",
                          onClick: z,
                          disabled: r,
                          children: [
                            r ? e.jsx(W, {
                              className: "w-5 h-5 animate-spin mr-3"
                            }) : e.jsx(ee, {
                              className: "w-5 h-5 mr-3"
                            }),
                            y
                          ]
                        }),
                        e.jsxs("div", {
                          className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest",
                          children: [
                            e.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                e.jsx(Ue, {
                                  className: "w-3 h-3"
                                }),
                                " D20 \u68C0\u5B9A"
                              ]
                            }),
                            e.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                e.jsx(He, {
                                  className: "w-3 h-3"
                                }),
                                " \u591A\u4EBA\u5192\u9669"
                              ]
                            })
                          ]
                        })
                      ]
                    });
                  }
                  const D = [
                    ...c
                  ];
                  return b && !b.hidden && !c.some((y) => y.id === b.id) && D.push(b), D.map((y, H) => e.jsx(bt, {
                    item: y
                  }, `[${H}]${y.id}`));
                })()
              })
            }),
            e.jsxs("div", {
              className: "p-4 md:p-6 shrink-0 bg-background",
              children: [
                e.jsxs("div", {
                  className: "max-w-3xl mx-auto relative group",
                  children: [
                    e.jsx(Ie, {
                      value: t,
                      onChange: (c) => o(c.target.value),
                      placeholder: U ? M.inputEnabled && !te ? `${(w == null ? void 0 : w.name) || "\u89D2\u8272"} \u7531 AI \u63A7\u5236\uFF0C\u7B49\u5F85\u81EA\u52A8\u884C\u52A8...` : M.placeholder : `\u4F5C\u4E3A ${(w == null ? void 0 : w.name) || "\u89D2\u8272"}\uFF0C\u63CF\u8FF0\u4F60\u7684\u884C\u52A8...`,
                      disabled: U,
                      className: S("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-amber-500/20 focus-visible:bg-background transition-all", U && "opacity-50 cursor-not-allowed"),
                      onKeyDown: (c) => {
                        c.key === "Enter" && !c.shiftKey && (c.preventDefault(), J());
                      }
                    }),
                    e.jsx(v, {
                      type: "button",
                      size: "icon",
                      className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all",
                      disabled: !t.trim() || U,
                      onClick: J,
                      children: r ? e.jsx(W, {
                        className: "w-4 h-4 animate-spin"
                      }) : e.jsx(Ae, {
                        className: "w-4 h-4"
                      })
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40",
                  children: [
                    e.jsx("div", {
                      className: "text-[9px] font-bold tracking-widest uppercase",
                      children: w ? `${w.name} \u7684\u56DE\u5408 (${w.isHumanControlled ? "\u73A9\u5BB6\u64CD\u4F5C" : "AI \u81EA\u52A8"})` : "ADVENTURE LOG"
                    }),
                    e.jsx("div", {
                      className: "text-[9px] font-medium",
                      children: U ? "\u7B49\u5F85\u4E2D..." : "Shift + Enter \u6362\u884C"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "w-[320px] h-full overflow-y-auto bg-muted/10 border-l p-6 space-y-8 shrink-0 hidden lg:block scrollbar-none",
          children: [
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                  children: [
                    e.jsx(Fe, {
                      className: "w-3.5 h-3.5 text-amber-500"
                    }),
                    "\u5192\u9669\u72B6\u6001"
                  ]
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: [
                    e.jsxs("div", {
                      className: "bg-background/40 p-3 rounded-xl border border-muted/30",
                      children: [
                        e.jsx("div", {
                          className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1",
                          children: "\u56DE\u5408"
                        }),
                        e.jsx("div", {
                          className: "text-xl font-mono font-bold tracking-tight text-foreground/90",
                          children: ((_l = (_k = p.currentSession) == null ? void 0 : _k.modeState) == null ? void 0 : _l.currentRound) || 1
                        })
                      ]
                    }),
                    e.jsxs("div", {
                      className: "bg-background/40 p-3 rounded-xl border border-muted/30",
                      children: [
                        e.jsx("div", {
                          className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1",
                          children: "\u6A21\u5F0F"
                        }),
                        e.jsx("div", {
                          className: "text-sm font-bold tracking-tight text-foreground/90 capitalize",
                          children: ((_n = (_m = p.currentSession) == null ? void 0 : _m.modeConfig) == null ? void 0 : _n.gameMode) || "standard"
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                  children: [
                    e.jsx(de, {
                      className: "w-3.5 h-3.5 text-amber-500"
                    }),
                    "\u5192\u9669\u8005"
                  ]
                }),
                e.jsx("div", {
                  className: "space-y-3",
                  children: (_q = (_p = (_o = p.currentSession) == null ? void 0 : _o.modeConfig) == null ? void 0 : _p.playerCharacterSnapshots) == null ? void 0 : _q.map((c) => {
                    var _a2, _b2, _c2, _d2, _e2;
                    const b = c.id === ((_b2 = (_a2 = p.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b2.currentTurnCharacterId), D = ((_e2 = (_d2 = (_c2 = p.currentSession) == null ? void 0 : _c2.modeState) == null ? void 0 : _d2.turnCounts) == null ? void 0 : _e2[c.id]) || 0;
                    return e.jsxs("div", {
                      className: S("p-4 rounded-xl border transition-all duration-300", b ? "bg-amber-500/5 border-amber-500/30 shadow-sm shadow-amber-500/10" : "bg-background/40 border-muted/30"),
                      children: [
                        e.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            e.jsx("div", {
                              className: S("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold", b ? "bg-amber-500/20 text-amber-600" : c.isHumanControlled ? "bg-blue-500/10 text-blue-600" : "bg-muted text-muted-foreground"),
                              children: c.isHumanControlled ? e.jsx(Z, {
                                className: "w-4 h-4"
                              }) : e.jsx(Y, {
                                className: "w-4 h-4"
                              })
                            }),
                            e.jsxs("div", {
                              className: "grow min-w-0",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2 mb-1",
                                  children: [
                                    e.jsx("span", {
                                      className: "text-sm font-bold tracking-tight truncate",
                                      children: c.name
                                    }),
                                    e.jsx(A, {
                                      variant: "outline",
                                      className: S("text-[8px] px-1 h-3.5", c.isHumanControlled ? "bg-blue-500/10 text-blue-600 border-blue-500/20" : "bg-muted/50 text-muted-foreground border-muted/30"),
                                      children: c.isHumanControlled ? "\u73A9\u5BB6" : "AI"
                                    }),
                                    b && e.jsx(A, {
                                      variant: "outline",
                                      className: "text-[8px] px-1 h-3.5 bg-amber-500/10 text-amber-600 border-amber-500/20",
                                      children: "\u884C\u52A8\u4E2D"
                                    })
                                  ]
                                }),
                                e.jsxs("div", {
                                  className: "text-[10px] text-muted-foreground/60 font-medium",
                                  children: [
                                    c.race,
                                    " \xB7 ",
                                    c.class,
                                    " \xB7 \u884C\u52A8 \xD7",
                                    D
                                  ]
                                })
                              ]
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          className: "mt-3 flex items-center justify-between px-1",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-1.5",
                              children: [
                                e.jsx(Y, {
                                  className: S("w-3 h-3 transition-colors", c.isHumanControlled ? "text-muted-foreground/30" : "text-foreground/70")
                                }),
                                e.jsx("span", {
                                  className: S("text-[9px] font-bold uppercase tracking-wider transition-colors", c.isHumanControlled ? "text-muted-foreground/20" : "text-foreground/50"),
                                  children: "AI"
                                })
                              ]
                            }),
                            e.jsx(Re, {
                              checked: c.isHumanControlled,
                              onCheckedChange: () => pe(c.id),
                              className: "data-[state=checked]:bg-blue-500 h-4 w-7 [&>span]:h-3 [&>span]:w-3"
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-1.5",
                              children: [
                                e.jsx("span", {
                                  className: S("text-[9px] font-bold uppercase tracking-wider transition-colors", c.isHumanControlled ? "text-foreground/50" : "text-muted-foreground/20"),
                                  children: "\u73A9\u5BB6"
                                }),
                                e.jsx(Z, {
                                  className: S("w-3 h-3 transition-colors", c.isHumanControlled ? "text-blue-500" : "text-muted-foreground/30")
                                })
                              ]
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          className: "mt-3 space-y-1",
                          children: [
                            e.jsxs("div", {
                              className: "flex justify-between text-[9px] font-bold text-muted-foreground/60",
                              children: [
                                e.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    e.jsx(Be, {
                                      className: "w-2.5 h-2.5 text-red-400"
                                    }),
                                    "HP"
                                  ]
                                }),
                                e.jsxs("span", {
                                  children: [
                                    c.currentHP,
                                    "/",
                                    c.maxHP
                                  ]
                                })
                              ]
                            }),
                            e.jsx("div", {
                              className: "h-1.5 bg-muted/50 rounded-full overflow-hidden",
                              children: e.jsx("div", {
                                className: S("h-full rounded-full transition-all duration-500", c.currentHP / c.maxHP > 0.5 ? "bg-green-500" : c.currentHP / c.maxHP > 0.25 ? "bg-amber-500" : "bg-red-500"),
                                style: {
                                  width: `${Math.max(0, c.currentHP / c.maxHP * 100)}%`
                                }
                              })
                            })
                          ]
                        }),
                        e.jsx("div", {
                          className: "mt-3 grid grid-cols-3 gap-1.5",
                          children: Object.entries(c.attributes || {}).map(([y, H]) => e.jsxs("div", {
                            className: "text-center py-1 px-1 rounded bg-muted/30 border border-muted/20",
                            children: [
                              e.jsx("div", {
                                className: "text-[8px] font-bold uppercase text-muted-foreground/50",
                                children: y.slice(0, 3)
                              }),
                              e.jsx("div", {
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
            e.jsx("div", {
              className: "space-y-3",
              children: e.jsxs(v, {
                type: "button",
                variant: "outline",
                className: "w-full h-10 rounded-xl border-dashed border-2 hover:border-amber-500/50 hover:bg-amber-500/5 gap-2",
                onClick: xe,
                children: [
                  e.jsx(Oe, {
                    className: "w-4 h-4"
                  }),
                  e.jsx("span", {
                    className: "font-bold tracking-wider text-sm",
                    children: "\u9000\u51FA\u5192\u9669"
                  })
                ]
              })
            }),
            e.jsxs("div", {
              className: "pt-6 opacity-30",
              children: [
                e.jsx("div", {
                  className: "h-px bg-linear-to-r from-transparent via-muted-foreground/50 to-transparent"
                }),
                e.jsx("p", {
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
  bt = ({ item: s }) => {
    var _a, _b;
    switch (s.type) {
      case "dnd_dm_intro":
        return e.jsx(X, {
          content: s.data.content,
          title: "\u5F00\u573A\u53D9\u4E8B"
        });
      case "dnd_dm_narrate":
        return e.jsx(X, {
          content: s.data.content
        });
      case "dnd_player_action":
        return e.jsx(re, {
          item: s
        });
      case "dnd_roll_result":
        return e.jsx(yt, {
          item: s
        });
      case "dnd_system_notice":
        return e.jsx(oe, {
          item: s
        });
      case "dnd_assign_player":
        return null;
      case "dnd_check_decision":
        return null;
      case "participant_message":
        return ((_a = s.data) == null ? void 0 : _a.isDM) ? e.jsx(X, {
          content: s.data.content
        }) : e.jsx(re, {
          item: s
        });
      case "system_notification":
        return e.jsx(oe, {
          item: s
        });
      default:
        return ((_b = s.data) == null ? void 0 : _b.content) ? e.jsx(X, {
          content: s.data.content,
          title: "\u6D88\u606F"
        }) : null;
    }
  };
  X = ({ content: s, title: n = "Dungeon Master" }) => {
    const t = me(s);
    return e.jsxs("div", {
      className: "flex gap-5 group animate-in fade-in slide-in-from-left-2 duration-500",
      children: [
        e.jsxs("div", {
          className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden",
          children: [
            e.jsx("div", {
              className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            }),
            e.jsx(Y, {
              className: "w-5 h-5 text-amber-600 relative z-10"
            })
          ]
        }),
        e.jsxs("div", {
          className: "space-y-2 grow pt-1 min-w-0",
          children: [
            e.jsxs("div", {
              className: "text-[10px] font-black tracking-[0.2em] text-amber-600/60 flex items-center gap-2 uppercase",
              children: [
                e.jsx(ee, {
                  className: "w-3 h-3"
                }),
                n
              ]
            }),
            e.jsxs("div", {
              className: "text-[15px] leading-relaxed text-foreground/80 whitespace-pre-wrap font-serif",
              children: [
                t.think && e.jsxs("div", {
                  className: "text-xs italic text-muted-foreground/50 mb-3 pl-3 border-l-2 border-muted/30",
                  children: [
                    e.jsx("span", {
                      className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1",
                      children: "DM \u601D\u8003"
                    }),
                    t.think
                  ]
                }),
                t.speak && e.jsxs("div", {
                  className: "mb-2",
                  children: [
                    e.jsx("span", {
                      className: "text-amber-600/80 font-bold",
                      children: "\u201C"
                    }),
                    e.jsx("span", {
                      className: "italic",
                      children: t.speak
                    }),
                    e.jsx("span", {
                      className: "text-amber-600/80 font-bold",
                      children: "\u201D"
                    })
                  ]
                }),
                t.action && e.jsx("div", {
                  className: "text-foreground/70",
                  children: t.action
                }),
                !(t.think || t.speak || t.action) && t.rawText
              ]
            })
          ]
        })
      ]
    });
  };
  re = ({ item: s }) => {
    const n = s.data, t = me(n.content || ""), o = n.characterName || n.name || "\u5192\u9669\u8005", a = n.isHumanControlled || n.isUser;
    return e.jsxs("div", {
      className: "flex gap-5 group animate-in fade-in slide-in-from-right-2 duration-500",
      children: [
        e.jsx("div", {
          className: S("w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border shadow-sm", a ? "bg-blue-500/5 border-blue-500/10" : "bg-violet-500/5 border-violet-500/10"),
          children: a ? e.jsx(Z, {
            className: "w-5 h-5 text-blue-500"
          }) : e.jsx(de, {
            className: "w-5 h-5 text-violet-500"
          })
        }),
        e.jsxs("div", {
          className: "space-y-2 grow pt-1 min-w-0",
          children: [
            e.jsxs("div", {
              className: S("text-[10px] font-black tracking-[0.2em] flex items-center gap-2 uppercase", a ? "text-blue-500/60" : "text-violet-500/60"),
              children: [
                e.jsx(Q, {
                  className: "w-3 h-3"
                }),
                o,
                a && e.jsx(A, {
                  variant: "outline",
                  className: "text-[8px] px-1 h-3 bg-blue-500/5 text-blue-500 border-blue-500/10",
                  children: "\u73A9\u5BB6"
                })
              ]
            }),
            e.jsxs("div", {
              className: "text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap",
              children: [
                t.think && e.jsxs("div", {
                  className: "text-xs italic text-muted-foreground/50 mb-3 pl-3 border-l-2 border-muted/30",
                  children: [
                    e.jsx("span", {
                      className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1",
                      children: "\u5185\u5FC3\u60F3\u6CD5"
                    }),
                    t.think
                  ]
                }),
                t.speak && e.jsxs("div", {
                  className: "mb-2 font-medium",
                  children: [
                    "\u201C",
                    t.speak,
                    "\u201D"
                  ]
                }),
                t.action && e.jsx("div", {
                  className: "text-foreground/70",
                  children: t.action
                }),
                !(t.think || t.speak || t.action) && t.rawText
              ]
            })
          ]
        })
      ]
    });
  };
  yt = ({ item: s }) => {
    var _a;
    const n = s.data, t = n.checkResult, o = n.characterName || "\u89D2\u8272", a = n.attributeName || "\u5C5E\u6027";
    if (!t) return null;
    const r = t.isSuccess, i = t.naturalRoll === 20, d = t.naturalRoll === 1;
    return e.jsx("div", {
      className: "flex justify-center my-6 animate-in fade-in zoom-in duration-500",
      children: e.jsxs("div", {
        className: S("inline-flex items-center gap-4 px-6 py-4 rounded-2xl border-2 shadow-lg", r ? "bg-green-500/5 border-green-500/30 shadow-green-500/10" : "bg-red-500/5 border-red-500/30 shadow-red-500/10"),
        children: [
          e.jsxs("div", {
            className: S("w-14 h-14 rounded-xl flex items-center justify-center font-mono font-black text-2xl relative", i ? "bg-amber-500/20 text-amber-500 ring-2 ring-amber-500/30" : d ? "bg-red-500/20 text-red-500 ring-2 ring-red-500/30" : r ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"),
            children: [
              t.naturalRoll,
              i && e.jsx(ee, {
                className: "w-3 h-3 text-amber-500 absolute -top-1 -right-1 animate-pulse"
              })
            ]
          }),
          e.jsxs("div", {
            className: "space-y-1",
            children: [
              e.jsxs("div", {
                className: "text-[10px] font-black uppercase tracking-widest text-muted-foreground/60",
                children: [
                  o,
                  " \xB7 ",
                  a,
                  " \u68C0\u5B9A"
                ]
              }),
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsxs("span", {
                    className: "text-lg font-mono font-bold",
                    children: [
                      t.naturalRoll,
                      t.modifier >= 0 ? "+" : "",
                      t.modifier,
                      " = ",
                      t.total
                    ]
                  }),
                  e.jsxs("span", {
                    className: "text-xs text-muted-foreground",
                    children: [
                      "vs DC ",
                      ((_a = n.checkSpec) == null ? void 0 : _a.dc) || "?"
                    ]
                  })
                ]
              }),
              e.jsx("div", {
                className: S("text-xs font-black uppercase tracking-wider", i ? "text-amber-500" : d ? "text-red-500" : r ? "text-green-600" : "text-red-600"),
                children: i ? "\u5927\u6210\u529F\uFF01" : d ? "\u5927\u5931\u8D25\uFF01" : r ? "\u68C0\u5B9A\u6210\u529F" : "\u68C0\u5B9A\u5931\u8D25"
              })
            ]
          })
        ]
      })
    });
  };
  oe = ({ item: s }) => {
    const n = s.data, t = n.noticeType;
    return e.jsx("div", {
      className: "flex justify-center my-4",
      children: e.jsxs("div", {
        className: "flex items-center gap-3 px-4 py-1.5 rounded-full bg-muted/30 border border-muted/50 text-muted-foreground shadow-sm",
        children: [
          e.jsx("span", {
            className: "w-1 h-1 rounded-full bg-amber-500/40"
          }),
          e.jsx("span", {
            className: "text-[10px] font-bold tracking-widest uppercase",
            children: t === "turn_start" && n.characterName ? `\u2694 ${n.characterName} \u7684\u56DE\u5408` : n.content || "\u7CFB\u7EDF\u901A\u77E5"
          }),
          e.jsx("span", {
            className: "w-1 h-1 rounded-full bg-amber-500/40"
          })
        ]
      })
    });
  };
});
export {
  zt as SessionMainForDnd,
  __tla
};
