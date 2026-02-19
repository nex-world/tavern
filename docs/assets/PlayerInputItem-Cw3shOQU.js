import { i as x } from "./db-master-xI8DZi24.js";
import { n as u } from "./id-OxPLOBIU.js";
import { j as n } from "./react-BPCshYXX.js";
import { C as h } from "./CharacterAvatar-DwtbYeXp.js";
import { f } from "./icons-BpfK1DnB.js";
const y = /\{\{([^:]+):([^}]+)\}\}/gi, _ = /^d/i;
function p(e, s, a) {
  let t = e;
  const r = s.nickname || s.name || "{{char}}", o = (a == null ? void 0 : a.userName) || "{{user}}";
  return t = t.replace(/\{\{char\}\}/gi, r), t = t.replace(/\{\{user\}\}/gi, o), t = t.replace(/<BOT>/gi, r), t = t.replace(/<USER>/gi, o), t = t.replace(y, (c, d, m) => {
    switch (d.toLowerCase()) {
      case "random": {
        const i = m.split(",").map((l) => l.replace(/\\,/g, ",").trim());
        return i[Math.floor(Math.random() * i.length)] || "";
      }
      case "pick": {
        const i = m.split(",").map((l) => l.replace(/\\,/g, ",").trim());
        return i[Math.floor(Math.random() * i.length)] || "";
      }
      case "roll": {
        const i = Number.parseInt(m.replace(_, ""), 10);
        return Number.isNaN(i) || i < 1 ? "1" : (Math.floor(Math.random() * i) + 1).toString();
      }
      case "//":
        return "";
      case "hidden_key":
        return "";
      case "comment":
        return "";
      case "reverse":
        return m.split("").reverse().join("");
      default:
        return c;
    }
  }), t;
}
function g(e, s) {
  let a;
  return e.system_prompt && e.system_prompt.trim() !== "" ? (a = e.system_prompt, a = a.replaceAll("{{original}}", (s == null ? void 0 : s.originalSystemPrompt) || "")) : (a = [`\u4F60\u662F ${e.name}\uFF0C\u8BF7\u6839\u636E\u4F60\u7684\u6027\u683C\u548C\u80CC\u666F\u8FDB\u884C\u56DE\u5E94\u3002\u4FDD\u6301\u89D2\u8272\u7684\u4E00\u81F4\u6027\u3002`, "=====[\u89D2\u8272\u63CF\u8FF0]=====", e.description, "=====[\u89D2\u8272\u6027\u683C]=====", e.personality, "=====[\u804A\u5929\u573A\u666F]=====", e.scenario, "=====[\u793A\u4F8B\u56DE\u590D]=====", e.mes_example].filter((t) => t.trim() !== "").join(`

`), a.trim() === "" && (a = (s == null ? void 0 : s.originalSystemPrompt) || "")), a = p(a, e, s), a.trim();
}
function N(e, s) {
  const a = g(e, s), t = [e.first_mes, ...(e == null ? void 0 : e.alternate_greetings) ?? []], r = t[Math.floor(Math.random() * t.length)], o = p(r, e, s);
  return [{ role: "system", content: a }, { role: "assistant", content: o }];
}
function j(e, s) {
  const a = g(e, s), t = [e.first_mes, ...(e == null ? void 0 : e.alternate_greetings) ?? []], r = t[Math.floor(Math.random() * t.length)], o = p(r, e, s), c = { id: u(), type: "starting_system_message", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: a } }, d = { id: u(), type: "character_intro", idx: 1, orderRef: 0, timestamp: Date.now() + 1, data: { characterId: e.id, content: o } };
  return [c, d];
}
const w = (e, s) => {
  if ((s == null ? void 0 : s.characterId) === void 0) return [];
  const a = x.parse(e), t = [];
  for (const r of a.historyItems) if (!(r.deleted || r.hidden)) switch (r.type) {
    case "starting_system_message":
    case "in_context_system_message":
      t.push({ role: "system", content: r.data.content, name: r.data.name });
      break;
    case "character_intro":
      t.push({ role: "assistant", content: r.data.content, name: r.data.name });
      break;
    case "participant_message":
    case "character_message": {
      const o = r.data, c = o.characterId === s.characterId;
      t.push({ role: c ? "assistant" : "user", content: o.content, name: o.name });
      break;
    }
    case "participant_message_group":
    case "character_message_group": {
      const o = r.data, c = o.characterId === s.characterId, d = o.list.map((m) => m.content).join(`
`);
      t.push({ role: c ? "assistant" : "user", content: d, name: o.name });
      break;
    }
    case "summary":
      t.push({ role: "user", content: r.data.content });
      break;
    case "llm_message":
    case "story_telling":
      t.push({ role: r.data.role, content: r.data.content, name: r.data.name });
      break;
    case "tool_message":
      t.push({ role: "tool", content: r.data.content, name: r.data.name });
      break;
  }
  return t;
}, S = Object.freeze(Object.defineProperty({ __proto__: null, makeChatModeCharacterSystemPrompt_CN: g, makeChatModeLLMMessagesFromContextStateForCharacterId: w, makeChatModeStartingContextItems_CN: j, makeChatModeStartingMessages_CN: N }, Symbol.toStringTag, { value: "Module" })), P = (e) => {
  const { item: s, character: a } = e;
  return n.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [n.jsx("div", { className: "shrink-0 transition-transform group-hover:scale-105", children: n.jsx(h, { character: a, size: "sm", shape: "rounded" }) }), n.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [n.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: a.name }), n.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: s.data.content }), s.processing && n.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, R = (e) => {
  const { item: s, character: a } = e;
  return n.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [n.jsx("div", { className: "shrink-0 transition-transform group-hover:scale-105", children: n.jsx(h, { character: a, size: "sm", shape: "rounded" }) }), n.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [n.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: a.name }), n.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: s.data.content }), s.processing && n.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, T = (e) => {
  const { item: s } = e;
  return n.jsxs("div", { className: "flex gap-4 md:gap-6 flex-row-reverse group", children: [n.jsx("div", { className: "w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105", children: n.jsx(f, { className: "w-5 h-5 text-secondary-foreground" }) }), n.jsxs("div", { className: "space-y-1.5 text-right grow pt-1", children: [n.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2 justify-end", children: "Player" }), n.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap bg-primary/5 text-foreground p-4 rounded-2xl inline-block text-left min-w-25 shadow-sm", children: s.data.content })] })] });
};
export {
  R as C,
  T as P,
  P as a,
  S as c,
  w as m
};
