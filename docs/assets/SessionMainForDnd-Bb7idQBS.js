const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-BrZHBPj2.js","assets/@tanstack-3iyDWv8L.js","assets/react-D9TtqY-V.js","assets/vendor-C4ToNUTj.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-C2pyTzVO.js","assets/zod-fbN9ubnj.js"])))=>i.map(i=>d[i]);
import { D as ee, F as V, aH as _e, r as j, t as K, E as be, j as e } from "./react-D9TtqY-V.js";
import { f as re, i as ye } from "./@tanstack-3iyDWv8L.js";
import { r as Se, S as Ce, m as Ne } from "./db-master-BrZHBPj2.js";
import { s as ke } from "./db--eUIPBg3.js";
import { _ as te, __tla as __tla_0 } from "./index-Cxjv2Jza.js";
import { C as De } from "./context-manager.class-B2xis078.js";
import { n as P } from "./id-OxPLOBIU.js";
import { S as je } from "./session-manager.class-DPAZ4frV.js";
import { B as v } from "./button-CMoAlsw3.js";
import { T as Ie } from "./textarea-NuAUq_bK.js";
import { B as H } from "./badge-B6qKYUZD.js";
import { u as we, a as Me } from "./global-llm-config.store-C91qlFOh.js";
import { o as $, n as S, s as _, _ as X, b as oe, a as ve, r as Pe, l as $e } from "./zod-fbN9ubnj.js";
import { c as N } from "./shadcn-utils-BMZD7_jZ.js";
import { S as Te } from "./switch-CGreuh1l.js";
import { C as ie } from "./CharacterAvatar-Cnp2urxB.js";
import { ai as W, m as Z, ak as Re, al as Le, t as Q, V as Ee, a as Ue, W as Ae, am as He, a8 as Fe, J as ce, an as Be, ao as Oe, c as Ge } from "./icons-d5PdVRlQ.js";
import "./vendor-C4ToNUTj.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C2pyTzVO.js";
import "./es-toolkit-CstbrnlE.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
let qt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function de(a) {
    return Math.floor((a - 10) / 2);
  }
  function ze(a, n) {
    const t = Math.floor(Math.random() * 20) + 1, r = t + n;
    return {
      naturalRoll: t,
      total: r,
      modifier: n,
      isSuccess: r >= a
    };
  }
  function Je(a, n) {
    const t = n[a.attribute] || 10, r = de(t);
    return ze(a.dc, r);
  }
  function qe(a) {
    try {
      const n = a.match(/```(?:json)?\s*\n?([\s\S]*?)```/), t = n ? n[1].trim() : a.trim(), r = t.indexOf("{"), o = t.lastIndexOf("}") + 1;
      if (r < 0 || o <= r) return console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5931\u8D25\uFF1A\u672A\u627E\u5230 JSON \u5757", a.slice(0, 200)), null;
      const s = JSON.parse(t.slice(r, o));
      if (s.none === true || s.none === "true") return {
        needsCheck: false
      };
      const i = s.playerId || s.player_id || s.\u89D2\u8272ID || s.\u6267\u884C\u8005ID, d = s.attribute || s.\u5C5E\u6027 || s.\u68C0\u5B9A\u7EF4\u5EA6, h = Number(s.dc || s.DC || s.\u76EE\u6807\u6570\u503C || s.\u96BE\u5EA6 || 0);
      return i && d && h > 0 ? {
        needsCheck: true,
        checkSpec: {
          intent: s.intent || s.\u610F\u56FE || s.reason || s.\u5177\u4F53\u610F\u56FE || "",
          type: s.type || "attribute",
          attribute: d,
          dc: h,
          playerId: i
        }
      } : (console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56 JSON \u5B57\u6BB5\u4E0D\u5B8C\u6574:", s), null);
    } catch (n) {
      return console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5F02\u5E38:", n, a.slice(0, 200)), null;
    }
  }
  function Xe(a) {
    try {
      const n = a.indexOf("{"), t = a.lastIndexOf("}") + 1;
      if (n < 0 || t <= n) return null;
      const r = JSON.parse(a.slice(n, t)), o = r.nextPlayerId || r.\u6307\u5B9A\u7684\u73A9\u5BB6ID;
      return o ? {
        nextPlayerId: o,
        reason: r.reason || r.\u539F\u56E0 || ""
      } : null;
    } catch {
      return null;
    }
  }
  function Ve(a) {
    const n = a.replace(/<[^>]*$/, ""), t = [], r = /<\/?([a-zA-Z]\w*)[^>]*>/g;
    let o;
    for (; (o = r.exec(n)) !== null; ) {
      const i = o[1].toLowerCase();
      o[0].startsWith("</") ? t.length > 0 && t.at(-1) === i && t.pop() : t.push(i);
    }
    let s = n;
    for (; t.length > 0; ) {
      const i = t.pop();
      s += `</${i}>`;
    }
    return s;
  }
  function Ke(a, n) {
    let t = a;
    return n.userName && (t = t.replace(/\{\{user\}\}/gi, n.userName), t = t.replace(/<USER>/gi, n.userName)), n.charName && (t = t.replace(/\{\{char\}\}/gi, n.charName), t = t.replace(/<BOT>/gi, n.charName)), t;
  }
  const We = /<think>([\s\S]*?)<\/think>/, Ze = /<speak>([\s\S]*?)<\/speak>/, Qe = /<action>([\s\S]*?)<\/action>/;
  function le(a) {
    var _a, _b, _c, _d, _e2, _f;
    const n = Ve(a), t = (_b = (_a = n.match(We)) == null ? void 0 : _a[1]) == null ? void 0 : _b.trim(), r = (_d = (_c = n.match(Ze)) == null ? void 0 : _c[1]) == null ? void 0 : _d.trim(), o = (_f = (_e2 = n.match(Qe)) == null ? void 0 : _e2[1]) == null ? void 0 : _f.trim(), s = n.replace(/<\/?[a-zA-Z]\w*[^>]*>/g, "").trim();
    return {
      think: t,
      speak: r,
      action: o,
      rawText: s
    };
  }
  function F(a) {
    switch (a) {
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
  function B(a) {
    return a.modeConfig.worldSnapshot;
  }
  function T(a) {
    return a.modeConfig.playerCharacterSnapshots;
  }
  function Ye(a, n) {
    return a.modeConfig.playerCharacterSnapshots.find((t) => t.id === n);
  }
  function E(a, n) {
    return a.map((t) => {
      const r = Object.entries(t.attributes).map(([s, i]) => `${s}:${i}(${de(i)})`).join(", "), o = n[t.id] || 0;
      return `- ${t.name} (ID: ${t.id}): ${r} (\u7D2F\u8BA1\u884C\u52A8: ${o}\u6B21)`;
    }).join(`
`);
  }
  function O(a) {
    return a.map((n) => `- ${n.name} (ID: ${n.id}): ${n.systemPrompt}`).join(`
`);
  }
  function G(a, n, t = 15) {
    const r = T(n);
    return a.getFlatHistoryItems(t).filter((o) => !o.hidden && !o.deleted).map((o) => {
      var _a;
      const { type: s, data: i } = o;
      if (s === "dnd_dm_intro" || s === "dnd_dm_narrate") return `[DM]: ${i.content}`;
      if (s === "dnd_player_action") return `[${i.characterName || ((_a = r.find((h) => h.id === i.characterId)) == null ? void 0 : _a.name) || i.characterId}]: ${i.content}`;
      if (s === "participant_message") return i.isDM ? `[DM]: ${i.content}` : `[${i.name || "\u73A9\u5BB6"}]: ${i.content}`;
      if (s === "dnd_roll_result") {
        const d = i.checkSpec, h = i.checkResult;
        return `[\u7CFB\u7EDF\u68C0\u5B9A] ${d.intent}: 1d20(${h.naturalRoll}) + ${d.attribute}\u4FEE\u6B63(${h.modifier}) = ${h.total} vs DC:${d.dc} \u2192 ${h.isSuccess ? "\u6210\u529F" : "\u5931\u8D25"}`;
      }
      return s === "dnd_system_notice" ? `[\u7CFB\u7EDF]: ${i.content}` : null;
    }).filter(Boolean).join(`
`);
  }
  function et(a) {
    var _a;
    return ((_a = a.modeConfig.playerCharacterSnapshots.find((t) => t.isHumanControlled)) == null ? void 0 : _a.name) || "\u5192\u9669\u8005";
  }
  function R(a, n, t) {
    const r = et(n), o = t || n.modeConfig.dmName || "DM";
    return a.map((s) => ({
      ...s,
      content: Ke(s.content, {
        userName: r,
        charName: o
      })
    }));
  }
  function tt(a, n) {
    const t = B(a), r = T(a), o = a.modeState.turnCounts, s = a.modeConfig.gameMode, i = `\u4F60\u662F DM (\u5730\u4E0B\u57CE\u4E3B)\u3002\u8BF7\u4E3A\u8FD9\u4E2A DND \u5192\u9669\u521B\u5EFA\u5F15\u4EBA\u5165\u80DC\u7684\u5F00\u573A\u4ECB\u7ECD\uFF0C\u8BBE\u7F6E\u4E16\u754C\u80CC\u666F\u548C\u521D\u59CB\u573A\u666F\u3002
${F(s)}
${t.systemPrompt}
${t.globalKnowledge ? `
\u3010\u4E16\u754C\u89C2\u8865\u5145\u3011
${t.globalKnowledge}` : ""}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, d = [
      "\u3010\u6E38\u620F\u914D\u7F6E\u3011",
      `DM: ${a.modeConfig.dmName || "DM"}`,
      `\u4E16\u754C: ${t.name} \u2014 ${t.description}`,
      `\u53C2\u4E0E\u89D2\u8272:
${O(r)}`,
      `\u3010\u521D\u59CB\u6570\u503C\u72B6\u6001\u3011
${E(r, o)}`
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
    ], a);
  }
  function nt(a, n) {
    const t = B(a), r = T(a), o = a.modeState.turnCounts, s = a.modeConfig.gameMode, i = a.modeState.historySummary, d = `\u4F60\u662F DM\u3002\u8BF7\u6839\u636E\u5F53\u524D\u5267\u60C5\u8FDB\u5C55\u63CF\u5199\u573A\u666F\uFF0C\u63A8\u8FDB\u6545\u4E8B\u3002
\u4E0D\u9700\u8981\u5728\u6B64\u9636\u6BB5\u6307\u5B9A\u89D2\u8272\u6216\u63D0\u51FA\u68C0\u5B9A\uFF0C\u53EA\u9700\u63CF\u5199\u3002
${F(s)}
${t.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, h = G(n, a, 10), p = [
      "\u3010\u6E38\u620F\u914D\u7F6E\u3011",
      `\u4E16\u754C: ${t.name}`,
      `\u89D2\u8272:
${O(r)}`,
      i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "",
      h ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${h}` : "",
      `\u3010\u6570\u503C\u72B6\u6001\u3011
${E(r, o)}`
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
  function at(a, n) {
    const t = T(a), r = a.modeState.turnCounts, o = a.modeConfig.gameMode, s = t.map((l) => r[l.id] || 0), d = (s.length > 0 ? Math.min(...s) : 0) + 2, h = t.filter((l) => (r[l.id] || 0) <= d).sort((l, x) => (r[l.id] || 0) - (r[x.id] || 0)), p = `\u4F60\u662F DM\u3002\u8BF7\u6839\u636E\u521A\u624D\u7684\u53D9\u4E8B\uFF0C\u4ECE\u5019\u9009\u540D\u5355\u4E2D\u6307\u5B9A\u3010\u4E0B\u4E00\u4E2A\u3011\u884C\u52A8\u7684\u89D2\u8272\u3002
${F(o)}
\u3010\u516C\u5E73\u6027\u539F\u5219\u3011\uFF1A\u4E3A\u4E86\u786E\u4FDD\u6BCF\u4E2A\u73A9\u5BB6\u90FD\u6709\u5E73\u7B49\u7684\u53C2\u4E0E\u673A\u4F1A\uFF0C\u4F60\u3010\u5FC5\u987B\u3011\u4EC5\u4ECE\u4EE5\u4E0B\u63D0\u4F9B\u7684\u540D\u5355\u4E2D\u9009\u62E9\u3002\u8BF7\u4F18\u5148\u8003\u8651\u884C\u52A8\u6B21\u6570\u6700\u5C11\u7684\u89D2\u8272\u3002
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u9700\u8F93\u51FA\u4E00\u4E2A JSON \u5757\uFF0C\u4E0D\u8981\u5305\u542B\u4EFB\u4F55\u53D9\u4E8B\u6587\u5B57\u3002
\`\`\`json
{ "reason": "\u539F\u56E0", "nextPlayerId": "\u89D2\u8272ID" }
\`\`\`
\u5019\u9009\u540D\u5355\uFF08\u4EC5\u9650\u5DF2\u884C\u52A8\u6B21\u6570\u8F83\u5C11\u7684\u89D2\u8272\uFF09\uFF1A
${h.map((l) => `- ${l.name} (ID: ${l.id}, \u5DF2\u884C\u52A8: ${r[l.id] || 0}\u6B21)`).join(`
`)}`, u = n.getFlatHistoryItems(5).findLast((l) => l.type === "dnd_dm_narrate" || l.type === "dnd_dm_intro"), g = u ? `\u3010\u5F53\u524D\u573A\u666F\u3011
${u.data.content}` : `\u3010\u521D\u59CB\u573A\u666F\u3011
\u5192\u9669\u5F00\u59CB\u3002`, f = `\u3010\u6240\u6709\u89D2\u8272\u884C\u52A8\u7EDF\u8BA1\u3011
${t.map((l) => `${l.name}: ${r[l.id] || 0} \u6B21`).join(`
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
    ], a);
  }
  function st(a, n) {
    const t = a.modeState.turnCounts, r = a.modeState.currentTurnCharacterId, o = Ye(a, r), s = a.modeState.historySummary, i = a.modeConfig.gameMode;
    if (!o) return [];
    const d = `\u4F60\u662F\u73A9\u5BB6 ${o.name} (${o.id})\u3002${o.systemPrompt}
\u8BF7\u57FA\u4E8E\u5F53\u524D\u573A\u666F\u548C DM \u7684\u5F15\u5BFC\u51B3\u5B9A\u4F60\u7684\u884C\u52A8\u3002
${F(i)}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<think>\u5185\u5FC3\u72EC\u767D</think><speak>\u53E3\u5934\u8868\u8FBE</speak><action>\u5177\u4F53\u884C\u52A8</action>\u3002`, h = G(n, a, 8), p = E([
      o
    ], t), w = [
      `\u3010\u4F60\u7684\u89D2\u8272\u4FE1\u606F\u3011
${o.systemPrompt}`,
      s ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${s}` : "",
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
        content: w
      }
    ], a, o.name);
  }
  function rt(a, n) {
    const t = B(a), r = T(a), o = a.modeState.turnCounts, s = a.modeState.historySummary, i = `\u4F60\u662F DM\u3002\u8BF7\u8BC4\u4EF7\u521A\u624D\u73A9\u5BB6\u7684\u884C\u52A8\uFF0C\u5E76\u63CF\u5199\u5176\u521D\u6B65\u53CD\u5E94\u3002
\u4E0D\u8981\u5728\u6B64\u9636\u6BB5\u8F93\u51FA\u68C0\u5B9A JSON\uFF0C\u4E5F\u4E0D\u8981\u63CF\u8FF0\u6700\u7EC8\u7ED3\u679C\u3002
${t.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, d = G(n, a, 10), h = [
      `\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${t.name}
\u89D2\u8272:
${O(r)}`,
      s ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${s}` : "",
      d ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${d}` : "",
      `\u3010\u6570\u503C\u72B6\u6001\u3011
${E(r, o)}`
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
    ], a);
  }
  function ot(a, n) {
    const t = B(a), r = T(a), o = a.modeState.turnCounts, s = a.modeState.historySummary, i = a.modeConfig.gameMode, d = `\u4F60\u662F DM\u3002\u57FA\u4E8E\u73A9\u5BB6\u521A\u624D\u7684\u884C\u52A8\uFF0C\u51B3\u5B9A\u662F\u5426\u9700\u8981\u8FDB\u884C DND 5e \u68C0\u5B9A\u3002
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
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u4EFB\u4F55\u53D9\u4E8B\u3002`, h = G(n, a, 10), p = [
      `\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${t.name}
\u89D2\u8272:
${O(r)}`,
      s ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${s}` : "",
      h ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${h}` : "",
      `\u3010\u89D2\u8272\u6570\u503C\u72B6\u6001\u3011
${E(r, o)}`
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
  function it(a, n) {
    var _a;
    const t = B(a), r = T(a), o = a.modeState.turnCounts, s = a.modeState.historySummary, i = a.modeState.lastCheckResult, d = a.modeState.lastCheckSpec, h = `\u4F60\u662F DM\u3002\u68C0\u5B9A\u7ED3\u679C\u5DF2\u51FA\u3002\u8BF7\u6839\u636E\u7ED3\u679C\u63CF\u8FF0\u540E\u679C\uFF0C\u5E76\u5F15\u5BFC\u5267\u60C5\u3002
${t.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, p = G(n, a, 10), w = i && d ? `\u3010\u68C0\u5B9A\u7ED3\u679C\u3011
\u610F\u56FE: ${d.intent}
\u6267\u884C\u8005: ${((_a = r.find((g) => g.id === d.playerId)) == null ? void 0 : _a.name) || d.playerId}
\u9AB0\u5B50\u7ED3\u679C: ${i.total} (1d20:${i.naturalRoll} + \u4FEE\u6B63:${i.modifier}) vs DC:${d.dc}
\u7ED3\u8BBA: ${i.isSuccess ? "\u6210\u529F" : "\u5931\u8D25"}
\u8BF7\u6839\u636E\u6B64\u7ED3\u679C\u8FDB\u884C\u9488\u5BF9\u6027\u7684\u540E\u679C\u63CF\u8FF0\u3002` : "", u = [
      `\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${t.name}
\u89D2\u8272:
${O(r)}`,
      s ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${s}` : "",
      p ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${p}` : "",
      w,
      `\u3010\u6570\u503C\u72B6\u6001\u3011
${E(r, o)}`
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
    ], a);
  }
  class ct extends je {
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
        const o = {
          dnd_dm_intro: "dm_game_intro",
          dnd_dm_narrate: "dm_narrate",
          dnd_assign_player: "dm_assign_player",
          dnd_player_action: "player_action",
          dnd_check_decision: "dm_check_decision",
          dnd_roll_result: "fn_roll_check"
        };
        if (t.type === "participant_message" && ((_a = t.data) == null ? void 0 : _a.isDM)) return "dm_check_eval";
        const s = o[t.type];
        if (s) return s;
      }
      const r = n.getFlatHistoryItems();
      for (let o = r.length - 1; o >= 0; o--) {
        const s = r[o];
        if (!(s == null ? void 0 : s.deleted)) switch (s.type) {
          case "dnd_dm_intro":
            return "dm_assign_player";
          case "dnd_dm_narrate": {
            const i = (_b = s.data) == null ? void 0 : _b.phase;
            return i === "dm_check_eval" ? "dm_check_decision" : "dm_assign_player";
          }
          case "dnd_assign_player":
            return "player_action";
          case "dnd_player_action":
            return "dm_check_eval";
          case "dnd_check_decision":
            return ((_c = s.data) == null ? void 0 : _c.needsCheck) ? "fn_roll_check" : "dm_narrate";
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
        const r = {
          dnd_dm_intro: "dm_game_intro_running",
          dnd_dm_narrate: "dm_narrate_running",
          dnd_assign_player: "dm_assign_player_running",
          dnd_player_action: "player_action_running",
          dnd_check_decision: "dm_check_decision_running",
          dnd_roll_result: "fn_roll_check_running"
        };
        if (t.type === "participant_message" && ((_a = t.data) == null ? void 0 : _a.isDM)) return "dm_check_eval_running";
        const o = r[t.type];
        if (o) return o;
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
            messages: tt(this.session),
            callbackPhase: "dm_game_intro",
            llmRequestType: "dnd_dm_intro"
          };
        case "dm_narrate":
          return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate")), {
            type: "LLM_CALL",
            messages: nt(this.session, n),
            callbackPhase: "dm_narrate",
            llmRequestType: "dnd_dm_narrate",
            dataExtra: {
              phase: "dm_narrate"
            }
          };
        case "dm_assign_player":
          return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_assign_player")), {
            type: "LLM_CALL",
            messages: at(this.session, n),
            callbackPhase: "dm_assign_player",
            llmRequestType: "dnd_assign_player"
          };
        case "player_action":
          return this.handlePlayerAction(n);
        case "dm_check_eval":
          return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_eval")), {
            type: "LLM_CALL",
            messages: rt(this.session, n),
            callbackPhase: "dm_check_eval",
            llmRequestType: "dnd_dm_narrate",
            dataExtra: {
              phase: "dm_check_eval"
            }
          };
        case "dm_check_decision":
          return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_decision")), {
            type: "LLM_CALL",
            messages: ot(this.session, n),
            callbackPhase: "dm_check_decision",
            llmRequestType: "dnd_check_decision"
          };
        case "fn_roll_check":
          return this.handleRollCheck(n);
        case "dm_tell_result":
          return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_tell_result")), {
            type: "LLM_CALL",
            messages: it(this.session, n),
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
      const t = this.session.modeState.currentTurnCharacterId, r = this.session.modeConfig.playerCharacterSnapshots.find((o) => o.id === t);
      return r ? r.isHumanControlled ? (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), {
        type: "WAIT_FOR_INPUT"
      }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), {
        type: "LLM_CALL",
        messages: st(this.session, n),
        callbackPhase: "player_action",
        llmRequestType: "dnd_player_action",
        dataExtra: {
          characterId: r.id,
          characterName: r.name,
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
      const r = this.session.modeConfig.playerCharacterSnapshots.find((s) => s.id === t.playerId);
      if (!r) return console.error(`[DndManager] \u68C0\u5B9A\u89D2\u8272 ${t.playerId} \u4E0D\u5B58\u5728`), this.enterNextState("dm_narrate"), {
        type: "STATE_CHANGE"
      };
      const o = Je(t, r.attributes);
      return this.session.modeState.lastCheckResult = o, n.addHistoryItem({
        id: P(),
        type: "dnd_roll_result",
        idx: 0,
        orderRef: 0,
        timestamp: Date.now(),
        data: {
          checkSpec: t,
          checkResult: o,
          characterName: r.name,
          attributeName: t.attribute
        }
      }), this.setCurrentUIState(this.getDoneUIStateForPhase("fn_roll_check")), this.enterNextState("dm_tell_result"), {
        type: "STATE_CHANGE"
      };
    }
    handleLLMResponse(n, t, r) {
      switch (n) {
        case "dm_game_intro":
          this.setCurrentUIState(this.getDoneUIStateForPhase("dm_game_intro")), this.enterNextState("dm_assign_player");
          break;
        case "dm_narrate":
          this.setCurrentUIState(this.getDoneUIStateForPhase("dm_narrate")), this.enterNextState("dm_assign_player");
          break;
        case "dm_assign_player": {
          this.setCurrentUIState(this.getDoneUIStateForPhase("dm_assign_player"));
          const o = Xe(t);
          if (o) {
            const s = this.session.modeConfig.playerCharacterSnapshots.find((i) => i.id === o.nextPlayerId);
            r.addHistoryItem({
              id: P(),
              type: "dnd_assign_player",
              idx: 0,
              orderRef: 0,
              timestamp: Date.now(),
              data: {
                nextPlayerId: o.nextPlayerId,
                nextPlayerName: s == null ? void 0 : s.name,
                reason: o.reason,
                isHumanControlled: s == null ? void 0 : s.isHumanControlled
              },
              hidden: true
            }), r.addHistoryItem({
              id: P(),
              type: "dnd_system_notice",
              idx: 0,
              orderRef: 0,
              timestamp: Date.now(),
              data: {
                content: `\u8F6E\u5230 ${(s == null ? void 0 : s.name) || o.nextPlayerId} \u884C\u52A8`,
                noticeType: "turn_start",
                characterId: o.nextPlayerId,
                characterName: s == null ? void 0 : s.name
              }
            }), this.setCurrentTurn(o.nextPlayerId), this.enterNextState("player_action");
          } else console.warn("[DndManager] \u89E3\u6790 DM \u6307\u5B9A\u89D2\u8272\u5931\u8D25\uFF0C\u91CD\u8BD5"), this.enterNextState("dm_assign_player");
          break;
        }
        case "player_action": {
          this.setCurrentUIState(this.getDoneUIStateForPhase("player_action"));
          const o = this.session.modeState.currentTurnCharacterId;
          this.incrementTurnCount(o), this.enterNextState("dm_check_eval");
          break;
        }
        case "dm_check_eval":
          this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_eval")), this.enterNextState("dm_check_decision");
          break;
        case "dm_check_decision": {
          this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_decision"));
          const o = qe(t);
          r.addHistoryItem({
            id: P(),
            type: "dnd_check_decision",
            idx: 0,
            orderRef: 0,
            timestamp: Date.now(),
            data: {
              needsCheck: (o == null ? void 0 : o.needsCheck) ?? false,
              checkSpec: (o == null ? void 0 : o.needsCheck) ? o.checkSpec : void 0,
              rawContent: t
            },
            hidden: true
          }), (o == null ? void 0 : o.needsCheck) && "checkSpec" in o ? (console.log("[DndManager] \u68C0\u5B9A\u51B3\u7B56\uFF1A\u9700\u8981\u68C0\u5B9A", o.checkSpec), this.session.modeState.lastCheckSpec = o.checkSpec, this.enterNextState("fn_roll_check")) : o === null ? (console.warn("[DndManager] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5931\u8D25\uFF0C\u91CD\u8BD5 dm_check_decision"), this.enterNextState("dm_check_decision")) : (console.log("[DndManager] \u68C0\u5B9A\u51B3\u7B56\uFF1A\u65E0\u9700\u68C0\u5B9A\uFF0C\u76F4\u63A5\u8FDB\u5165\u53D9\u4E8B"), this.enterNextState("dm_narrate"));
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
  const m = ee({
    currentSession: null,
    contextManager: null,
    sessionManager: null,
    loadSession(a, n) {
      this.currentSession = a, this.currentSession.modeState.currentUIState = "idle", this.sessionManager = _e(new ct(this.currentSession));
      const t = ee(n || {
        historyItems: [],
        processingItem: void 0
      });
      this.contextManager = new De(t);
    },
    setCurrentTurn(a) {
      this.sessionManager && this.sessionManager.setCurrentTurn(a);
    },
    incrementRound() {
      this.sessionManager && this.sessionManager.incrementRound();
    },
    setPhase(a) {
      this.currentSession && (this.currentSession.modeState.currentPhase = a);
    },
    updateCharacterAttributes(a, n) {
      if (!this.currentSession) return;
      const t = this.currentSession.modeConfig.playerCharacterSnapshots.find((r) => r.id === a);
      t && Object.assign(t.attributes, n);
    },
    toggleCharacterControl(a) {
      if (!this.currentSession) return;
      const n = this.currentSession.modeConfig.playerCharacterSnapshots.find((t) => t.id === a);
      n && (n.isHumanControlled = !n.isHumanControlled, this.currentSession.updatedAt = Date.now());
    },
    updateCharacterHP(a, n) {
      if (!this.currentSession) return;
      const t = this.currentSession.modeConfig.playerCharacterSnapshots.find((r) => r.id === a);
      t && (t.currentHP = Math.max(0, Math.min(n, t.maxHP)));
    },
    async saveNewContextItemsToDB(a, n) {
      const { SessionDB: t } = await te(async () => {
        const { SessionDB: s } = await import("./db-master-BrZHBPj2.js").then((i) => i.s);
        return {
          SessionDB: s
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7])), r = new t(a);
      let o;
      try {
        o = V(n);
      } catch {
        o = JSON.parse(JSON.stringify(n));
      }
      await r.addContextItems(o);
    },
    async updateSessionInDB() {
      if (!this.currentSession) return;
      const { masterDb: a } = await te(async () => {
        const { masterDb: r } = await import("./db-master-BrZHBPj2.js").then((o) => o.t);
        return {
          masterDb: r
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7])), n = V(this.currentSession.modeState), t = V(this.currentSession.modeConfig);
      await a.sessions.update(this.currentSession.id, {
        modeState: n,
        modeConfig: t,
        updatedAt: Date.now()
      });
    }
  });
  function dt() {
    const a = we((u) => u.config), n = j.useRef(false), t = j.useRef(false), r = re(), o = async (u, g, f, l, x = {}) => {
      const C = m.contextManager;
      if (!C) return {
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
      C.setProcessingItem(k);
      let z = "";
      return await Me(u, g, [], (J, L) => {
        l == null ? void 0 : l(J), z = L;
        const M = C.getProcessingItem();
        M && (M.data.content = L);
      }), C.completeProcessingItem(), {
        content: z
      };
    }, s = async (u, g) => {
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
        const C = await o(g, x.messages.map((k) => ({
          ...k,
          id: P()
        })), x.llmRequestType, void 0, x.dataExtra);
        if (await m.saveNewContextItemsToDB(u.id, l.getHistoryItems()), i(x, C.content, u.id), await m.updateSessionInDB(), t.current) {
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
        ...a
      };
      try {
        n.current = true, await s(g, f);
      } catch (l) {
        console.error("[DndLoop] Critical Error:", l), K.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", {
          duration: Number.POSITIVE_INFINITY,
          action: {
            label: "\u524D\u5F80\u914D\u7F6E",
            onClick: () => r({
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
        const x = g.modeState.currentTurnCharacterId, C = g.modeConfig.playerCharacterSnapshots.find((k) => k.id === x);
        if (!(C == null ? void 0 : C.isHumanControlled)) {
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
            characterName: C.name,
            isHumanControlled: true
          }
        }), await m.saveNewContextItemsToDB(g.id, f.getHistoryItems()), l.incrementTurnCount(x), l.setCurrentUIState(l.getDoneUIStateForPhase("player_action")), l.enterNextState("dm_check_eval"), await m.updateSessionInDB();
      }
      await d(g.id);
    }, [
      a
    ]), p = j.useCallback(() => {
      t.current = true, console.log("[DndLoop] \u6682\u505C\u8BF7\u6C42\u5DF2\u53D1\u51FA");
    }, []), w = j.useCallback(() => {
      if (!t.current) return;
      t.current = false, console.log("[DndLoop] \u6062\u590D\u6E38\u620F");
      const u = m.currentSession;
      u && !n.current && d(u.id);
    }, [
      a
    ]);
    return {
      nextStep: h,
      isCallingRef: n,
      isPausedRef: t,
      pauseGame: p,
      resumeGame: w
    };
  }
  const lt = $({
    \u529B\u91CF: S().describe("\u529B\u91CF\u5C5E\u6027\u503C"),
    \u654F\u6377: S().describe("\u654F\u6377\u5C5E\u6027\u503C"),
    \u4F53\u8D28: S().describe("\u4F53\u8D28\u5C5E\u6027\u503C"),
    \u667A\u529B: S().describe("\u667A\u529B\u5C5E\u6027\u503C"),
    \u611F\u77E5: S().describe("\u611F\u77E5\u5C5E\u6027\u503C"),
    \u9B45\u529B: S().describe("\u9B45\u529B\u5C5E\u6027\u503C")
  }), mt = $({
    intent: _().describe("\u68C0\u5B9A\u610F\u56FE"),
    type: X([
      "attribute",
      "saving",
      "attack"
    ]).describe("\u68C0\u5B9A\u7C7B\u578B"),
    attribute: _().describe("\u68C0\u5B9A\u7EF4\u5EA6"),
    dc: S().describe("\u76EE\u6807\u6570\u503C (DC)"),
    playerId: _().describe("\u6267\u884C\u68C0\u5B9A\u7684\u89D2\u8272 ID")
  }), ut = $({
    naturalRoll: S().describe("\u9AB0\u5B50\u539F\u503C"),
    total: S().describe("\u603B\u503C (\u539F\u503C + \u4FEE\u6B63)"),
    modifier: S().describe("\u5C5E\u6027\u4FEE\u6B63"),
    isSuccess: oe().describe("\u662F\u5426\u6210\u529F")
  }), ht = X([
    "dm_game_intro",
    "dm_narrate",
    "dm_assign_player",
    "player_action",
    "dm_check_eval",
    "dm_check_decision",
    "fn_roll_check",
    "dm_tell_result"
  ]), pt = X([
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
  }, xt = X([
    "standard",
    "narrative",
    "hardcore",
    "solo"
  ]), gt = $({
    id: _().describe("\u89D2\u8272 ID"),
    name: _().describe("\u89D2\u8272\u540D\u79F0"),
    description: _().describe("\u89D2\u8272\u63CF\u8FF0"),
    avatar: _().optional().describe("\u89D2\u8272\u5934\u50CF"),
    systemPrompt: _().describe("\u89D2\u8272\u626E\u6F14\u6307\u5F15"),
    attributes: lt.describe("\u89D2\u8272\u5C5E\u6027"),
    race: _().optional().describe("\u79CD\u65CF"),
    class: _().optional().describe("\u804C\u4E1A"),
    currentHP: S().describe("\u5F53\u524D\u751F\u547D\u503C"),
    maxHP: S().describe("\u6700\u5927\u751F\u547D\u503C"),
    isHumanControlled: oe().describe("\u662F\u5426\u7531\u4EBA\u7C7B\u63A7\u5236")
  }), ft = $({
    name: _().describe("\u4E16\u754C\u540D\u79F0"),
    description: _().describe("\u4E16\u754C\u63CF\u8FF0"),
    systemPrompt: _().describe("\u6838\u5FC3\u7CFB\u7EDF\u63D0\u793A\u8BCD"),
    globalKnowledge: _().optional().describe("\u4E16\u754C\u89C2\u8865\u5145")
  }), _t = $({
    worldSnapshot: ft.describe("\u4E16\u754C\u8BBE\u5B9A\u5FEB\u7167"),
    gameMode: xt.describe("\u73A9\u6CD5\u6A21\u5F0F"),
    playerCharacterSnapshots: ve(gt).describe("\u53C2\u4E0E\u89D2\u8272\u5FEB\u7167\u5217\u8868"),
    dmName: _().optional().describe("DM \u663E\u793A\u540D\u79F0")
  }), bt = $({
    currentPhase: ht.describe("\u5F53\u524D\u9636\u6BB5\u540D\u79F0"),
    currentUIState: pt.describe("\u5F53\u524D UI \u72B6\u6001\u540D\u79F0"),
    currentTurnCharacterId: _().describe("\u5F53\u524D\u884C\u52A8\u89D2\u8272 ID ('dm' \u6216\u89D2\u8272ID)"),
    currentRound: S().describe("\u5F53\u524D\u56DE\u5408\u6570"),
    turnCounts: Pe(_(), S()).describe("\u6BCF\u4E2A\u89D2\u8272\u7684\u884C\u52A8\u6B21\u6570\u7EDF\u8BA1"),
    lastCheckSpec: mt.optional().describe("\u6700\u8FD1\u4E00\u6B21\u68C0\u5B9A\u89C4\u8303"),
    lastCheckResult: ut.optional().describe("\u6700\u8FD1\u4E00\u6B21\u68C0\u5B9A\u7ED3\u679C"),
    historySummary: _().describe("\u5386\u53F2\u6458\u8981")
  });
  Se.extend({
    mode: $e("dnd").describe("\u6A21\u5F0F"),
    modeConfig: _t.describe("DnD \u6A21\u5F0F\u914D\u7F6E"),
    modeState: bt.describe("DnD \u6A21\u5F0F\u72B6\u6001")
  });
  let yt, q, ae, St, se;
  qt = (a) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
    const n = re(), [t, r] = j.useState(""), o = j.useRef(null), [s, i] = j.useState(false), [d, h] = j.useState(false), p = be(m), { data: w = [] } = ye((c) => c.from({
      s: Ce
    })), u = w.find((c) => c.id === a.sessionId);
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
          const b = await ke.createSessionDB(u.id).getContextItems();
          if (c) return;
          m.loadSession(u, {
            historyItems: b,
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
    const { nextStep: g, isPausedRef: f, pauseGame: l, resumeGame: x } = dt(), [C, k] = j.useState(false);
    j.useEffect(() => {
      o.current && (o.current.scrollTop = o.current.scrollHeight);
    });
    const z = async () => {
      if (s) return;
      const c = m.sessionManager, y = m.contextManager;
      if (c && y) {
        f.current = false, k(false), i(true);
        try {
          const D = c.getActualCurrentPhase(y);
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
      if (!(!t.trim() || s)) {
        f.current = false, k(false), i(true);
        try {
          await g(t);
        } finally {
          i(false), r("");
        }
      }
    }, L = m.sessionManager && m.contextManager ? m.sessionManager.getActualCurrentUIState(m.contextManager) : ((_b = (_a = p.currentSession) == null ? void 0 : _a.modeState) == null ? void 0 : _b.currentUIState) || "idle", M = ne[L] || ne.idle, I = (_e2 = (_d = (_c = p.currentSession) == null ? void 0 : _c.modeConfig) == null ? void 0 : _d.playerCharacterSnapshots) == null ? void 0 : _e2.find((c) => {
      var _a2, _b2;
      return c.id === ((_b2 = (_a2 = p.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b2.currentTurnCharacterId);
    }), Y = !!(I == null ? void 0 : I.isHumanControlled), U = s || !M.inputEnabled || M.inputEnabled && !Y, me = () => {
      l(), k(true);
    }, ue = () => {
      x(), k(false);
    }, he = async (c) => {
      var _a2, _b2, _c2;
      const y = (_a2 = m.currentSession) == null ? void 0 : _a2.modeConfig.playerCharacterSnapshots.find((fe) => fe.id === c);
      if (!y) return;
      const D = y.isHumanControlled;
      m.toggleCharacterControl(c), await m.updateSessionInDB();
      const b = c === ((_b2 = m.currentSession) == null ? void 0 : _b2.modeState.currentTurnCharacterId), A = (_c2 = m.sessionManager) == null ? void 0 : _c2.getCurrentPhase();
      D && b && A === "player_action" && !s && await g();
    }, pe = () => {
      n({
        to: "/plaza"
      });
    }, xe = () => {
      console.log("[DnD][Memory Session]", m.currentSession);
    }, ge = async () => {
      if (!(u == null ? void 0 : u.id)) return;
      const c = await Ne.sessions.getTable().get(u.id);
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
                      children: e.jsx(Z, {
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
                            e.jsxs(H, {
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
                          children: I ? `\u5F53\u524D\u884C\u52A8: ${I.name} (${I.isHumanControlled ? "\u73A9\u5BB6" : "AI"})` : "\u7B49\u5F85\u5F00\u59CB..."
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    L !== "idle" && (C ? e.jsxs(v, {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-green-500/30 text-green-600 hover:bg-green-500/10",
                      onClick: ue,
                      children: [
                        e.jsx(Re, {
                          className: "w-3 h-3"
                        }),
                        "\u7EE7\u7EED"
                      ]
                    }) : e.jsxs(v, {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-amber-500/30 text-amber-600 hover:bg-amber-500/10",
                      onClick: me,
                      disabled: !s,
                      children: [
                        e.jsx(Le, {
                          className: "w-3 h-3"
                        }),
                        "\u6682\u505C"
                      ]
                    })),
                    e.jsxs(H, {
                      variant: "secondary",
                      className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50",
                      children: [
                        e.jsx("span", {
                          className: N("w-1.5 h-1.5 rounded-full", C ? "bg-amber-400" : "bg-amber-500 animate-pulse")
                        }),
                        C ? "\u5DF2\u6682\u505C" : "DND"
                      ]
                    }),
                    e.jsx(v, {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px]",
                      onClick: xe,
                      children: "LOG MEM"
                    }),
                    e.jsx(v, {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 px-2 text-[10px]",
                      onClick: ge,
                      children: "LOG DB"
                    })
                  ]
                })
              ]
            }),
            e.jsx("div", {
              className: "flex grow overflow-y-auto",
              ref: o,
              children: e.jsx("div", {
                className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-8",
                children: (() => {
                  var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h2;
                  const c = (((_a2 = p.contextManager) == null ? void 0 : _a2.state.historyItems) || []).filter((b) => !b.hidden), y = (_b2 = p.contextManager) == null ? void 0 : _b2.state.processingItem;
                  if (L === "idle") {
                    const b = c.length === 0 ? "\u5F00\u59CB\u5192\u9669" : "\u7EE7\u7EED\u5192\u9669";
                    return e.jsxs("div", {
                      className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                      children: [
                        e.jsx("div", {
                          className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500",
                          children: e.jsx(Z, {
                            className: "w-10 h-10 text-amber-500 drop-shadow-sm"
                          })
                        }),
                        e.jsx("h2", {
                          className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                          children: ((_e3 = (_d2 = (_c2 = p.currentSession) == null ? void 0 : _c2.modeConfig) == null ? void 0 : _d2.worldSnapshot) == null ? void 0 : _e3.name) || "DnD \u5192\u9669"
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
                          disabled: s,
                          children: [
                            s ? e.jsx(W, {
                              className: "w-5 h-5 animate-spin mr-3"
                            }) : e.jsx(Q, {
                              className: "w-5 h-5 mr-3"
                            }),
                            b
                          ]
                        }),
                        e.jsxs("div", {
                          className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest",
                          children: [
                            e.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                e.jsx(Ee, {
                                  className: "w-3 h-3"
                                }),
                                " D20 \u68C0\u5B9A"
                              ]
                            }),
                            e.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                e.jsx(Ue, {
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
                  return y && !y.hidden && !c.some((b) => b.id === y.id) && D.push(y), D.map((b, A) => {
                    var _a3, _b3;
                    return e.jsx(yt, {
                      item: b,
                      participants: ((_b3 = (_a3 = p.currentSession) == null ? void 0 : _a3.modeConfig) == null ? void 0 : _b3.playerCharacterSnapshots) || []
                    }, `[${A}]${b.id}`);
                  });
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
                      onChange: (c) => r(c.target.value),
                      placeholder: U ? M.inputEnabled && !Y ? `${(I == null ? void 0 : I.name) || "\u89D2\u8272"} \u7531 AI \u63A7\u5236\uFF0C\u7B49\u5F85\u81EA\u52A8\u884C\u52A8...` : M.placeholder : `\u4F5C\u4E3A ${(I == null ? void 0 : I.name) || "\u89D2\u8272"}\uFF0C\u63CF\u8FF0\u4F60\u7684\u884C\u52A8...`,
                      disabled: U,
                      className: N("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-amber-500/20 focus-visible:bg-background transition-all", U && "opacity-50 cursor-not-allowed"),
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
                      children: s ? e.jsx(W, {
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
                      children: I ? `${I.name} \u7684\u56DE\u5408 (${I.isHumanControlled ? "\u73A9\u5BB6\u64CD\u4F5C" : "AI \u81EA\u52A8"})` : "ADVENTURE LOG"
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
                    e.jsx(He, {
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
                    e.jsx(Fe, {
                      className: "w-3.5 h-3.5 text-amber-500"
                    }),
                    "\u5192\u9669\u8005"
                  ]
                }),
                e.jsx("div", {
                  className: "space-y-3",
                  children: (_q = (_p = (_o = p.currentSession) == null ? void 0 : _o.modeConfig) == null ? void 0 : _p.playerCharacterSnapshots) == null ? void 0 : _q.map((c) => {
                    var _a2, _b2, _c2, _d2, _e3;
                    const y = c.id === ((_b2 = (_a2 = p.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b2.currentTurnCharacterId), D = ((_e3 = (_d2 = (_c2 = p.currentSession) == null ? void 0 : _c2.modeState) == null ? void 0 : _d2.turnCounts) == null ? void 0 : _e3[c.id]) || 0;
                    return e.jsxs("div", {
                      className: N("p-4 rounded-xl border transition-all duration-300", y ? "bg-amber-500/5 border-amber-500/30 shadow-sm shadow-amber-500/10" : "bg-background/40 border-muted/30"),
                      children: [
                        e.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            e.jsx(ie, {
                              character: c,
                              size: "xs",
                              shape: "rounded"
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
                                    e.jsx(H, {
                                      variant: "outline",
                                      className: N("text-[8px] px-1 h-3.5", c.isHumanControlled ? "bg-blue-500/10 text-blue-600 border-blue-500/20" : "bg-muted/50 text-muted-foreground border-muted/30"),
                                      children: c.isHumanControlled ? "\u73A9\u5BB6" : "AI"
                                    }),
                                    y && e.jsx(H, {
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
                                e.jsx(ce, {
                                  className: N("w-3 h-3 transition-colors", c.isHumanControlled ? "text-muted-foreground/30" : "text-foreground/70")
                                }),
                                e.jsx("span", {
                                  className: N("text-[9px] font-bold uppercase tracking-wider transition-colors", c.isHumanControlled ? "text-muted-foreground/20" : "text-foreground/50"),
                                  children: "AI"
                                })
                              ]
                            }),
                            e.jsx(Te, {
                              checked: c.isHumanControlled,
                              onCheckedChange: () => he(c.id),
                              className: "data-[state=checked]:bg-blue-500 h-4 w-7 [&>span]:h-3 [&>span]:w-3"
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-1.5",
                              children: [
                                e.jsx("span", {
                                  className: N("text-[9px] font-bold uppercase tracking-wider transition-colors", c.isHumanControlled ? "text-foreground/50" : "text-muted-foreground/20"),
                                  children: "\u73A9\u5BB6"
                                }),
                                e.jsx(Be, {
                                  className: N("w-3 h-3 transition-colors", c.isHumanControlled ? "text-blue-500" : "text-muted-foreground/30")
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
                                    e.jsx(Oe, {
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
                                className: N("h-full rounded-full transition-all duration-500", c.currentHP / c.maxHP > 0.5 ? "bg-green-500" : c.currentHP / c.maxHP > 0.25 ? "bg-amber-500" : "bg-red-500"),
                                style: {
                                  width: `${Math.max(0, c.currentHP / c.maxHP * 100)}%`
                                }
                              })
                            })
                          ]
                        }),
                        e.jsx("div", {
                          className: "mt-3 grid grid-cols-3 gap-1.5",
                          children: Object.entries(c.attributes || {}).map(([b, A]) => e.jsxs("div", {
                            className: "text-center py-1 px-1 rounded bg-muted/30 border border-muted/20",
                            children: [
                              e.jsx("div", {
                                className: "text-[8px] font-bold uppercase text-muted-foreground/50",
                                children: b.slice(0, 3)
                              }),
                              e.jsx("div", {
                                className: "text-xs font-mono font-bold",
                                children: A
                              })
                            ]
                          }, b))
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
                onClick: pe,
                children: [
                  e.jsx(Ge, {
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
  yt = ({ item: a, participants: n }) => {
    var _a, _b;
    switch (a.type) {
      case "dnd_dm_intro":
        return e.jsx(q, {
          content: a.data.content,
          title: "\u5F00\u573A\u53D9\u4E8B"
        });
      case "dnd_dm_narrate":
        return e.jsx(q, {
          content: a.data.content
        });
      case "dnd_player_action":
        return e.jsx(ae, {
          item: a,
          participants: n
        });
      case "dnd_roll_result":
        return e.jsx(St, {
          item: a
        });
      case "dnd_system_notice":
        return e.jsx(se, {
          item: a
        });
      case "dnd_assign_player":
        return null;
      case "dnd_check_decision":
        return null;
      case "participant_message":
        return ((_a = a.data) == null ? void 0 : _a.isDM) ? e.jsx(q, {
          content: a.data.content
        }) : e.jsx(ae, {
          item: a,
          participants: n
        });
      case "system_notification":
        return e.jsx(se, {
          item: a
        });
      default:
        return ((_b = a.data) == null ? void 0 : _b.content) ? e.jsx(q, {
          content: a.data.content,
          title: "\u6D88\u606F"
        }) : null;
    }
  };
  q = ({ content: a, title: n = "Dungeon Master" }) => {
    const t = le(a);
    return e.jsxs("div", {
      className: "flex gap-5 group animate-in fade-in slide-in-from-left-2 duration-500",
      children: [
        e.jsxs("div", {
          className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden",
          children: [
            e.jsx("div", {
              className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            }),
            e.jsx(ce, {
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
                e.jsx(Q, {
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
  ae = ({ item: a, participants: n }) => {
    const t = a.data, r = le(t.content || ""), o = t.characterId || t.participantId, s = n == null ? void 0 : n.find((h) => h.id === o), i = (s == null ? void 0 : s.name) || t.characterName || t.name || "\u5192\u9669\u8005", d = (s == null ? void 0 : s.isHumanControlled) ?? (t.isHumanControlled || t.isUser);
    return e.jsxs("div", {
      className: "flex gap-5 group animate-in fade-in slide-in-from-right-2 duration-500",
      children: [
        e.jsx("div", {
          className: "shrink-0",
          children: e.jsx(ie, {
            character: s,
            size: "sm",
            shape: "square"
          })
        }),
        e.jsxs("div", {
          className: "space-y-2 grow pt-1 min-w-0",
          children: [
            e.jsxs("div", {
              className: N("text-[10px] font-black tracking-[0.2em] flex items-center gap-2 uppercase", d ? "text-blue-500/60" : "text-violet-500/60"),
              children: [
                e.jsx(Z, {
                  className: "w-3 h-3"
                }),
                i,
                d && e.jsx(H, {
                  variant: "outline",
                  className: "text-[8px] px-1 h-3 bg-blue-500/5 text-blue-500 border-blue-500/10",
                  children: "\u73A9\u5BB6"
                })
              ]
            }),
            e.jsxs("div", {
              className: "text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap",
              children: [
                r.think && e.jsxs("div", {
                  className: "text-xs italic text-muted-foreground/50 mb-3 pl-3 border-l-2 border-muted/30",
                  children: [
                    e.jsx("span", {
                      className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1",
                      children: "\u5185\u5FC3\u60F3\u6CD5"
                    }),
                    r.think
                  ]
                }),
                r.speak && e.jsxs("div", {
                  className: "mb-2 font-medium",
                  children: [
                    "\u201C",
                    r.speak,
                    "\u201D"
                  ]
                }),
                r.action && e.jsx("div", {
                  className: "text-foreground/70",
                  children: r.action
                }),
                !(r.think || r.speak || r.action) && r.rawText
              ]
            })
          ]
        })
      ]
    });
  };
  St = ({ item: a }) => {
    var _a;
    const n = a.data, t = n.checkResult, r = n.characterName || "\u89D2\u8272", o = n.attributeName || "\u5C5E\u6027";
    if (!t) return null;
    const s = t.isSuccess, i = t.naturalRoll === 20, d = t.naturalRoll === 1;
    return e.jsx("div", {
      className: "flex justify-center my-6 animate-in fade-in zoom-in duration-500",
      children: e.jsxs("div", {
        className: N("inline-flex items-center gap-4 px-6 py-4 rounded-2xl border-2 shadow-lg", s ? "bg-green-500/5 border-green-500/30 shadow-green-500/10" : "bg-red-500/5 border-red-500/30 shadow-red-500/10"),
        children: [
          e.jsxs("div", {
            className: N("w-14 h-14 rounded-xl flex items-center justify-center font-mono font-black text-2xl relative", i ? "bg-amber-500/20 text-amber-500 ring-2 ring-amber-500/30" : d ? "bg-red-500/20 text-red-500 ring-2 ring-red-500/30" : s ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"),
            children: [
              t.naturalRoll,
              i && e.jsx(Q, {
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
                  r,
                  " \xB7 ",
                  o,
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
                className: N("text-xs font-black uppercase tracking-wider", i ? "text-amber-500" : d ? "text-red-500" : s ? "text-green-600" : "text-red-600"),
                children: i ? "\u5927\u6210\u529F\uFF01" : d ? "\u5927\u5931\u8D25\uFF01" : s ? "\u68C0\u5B9A\u6210\u529F" : "\u68C0\u5B9A\u5931\u8D25"
              })
            ]
          })
        ]
      })
    });
  };
  se = ({ item: a }) => {
    const n = a.data, t = n.noticeType;
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
  qt as SessionMainForDnd,
  __tla
};
