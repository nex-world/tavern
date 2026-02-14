import { i as h } from "./db-master-BrZHBPj2.js";
import { n as u } from "./id-OxPLOBIU.js";
import { j as n } from "./react-D9TtqY-V.js";
import { E as x, a8 as f } from "./icons-bBaH0MBC.js";
const y = /\{\{([^:]+):([^}]+)\}\}/gi, w = /^d/i;
function g(t, s, e) {
  let a = t;
  const r = s.nickname || s.name || "{{char}}", o = (e == null ? void 0 : e.userName) || "{{user}}";
  return a = a.replace(/\{\{char\}\}/gi, r), a = a.replace(/\{\{user\}\}/gi, o), a = a.replace(/<BOT>/gi, r), a = a.replace(/<USER>/gi, o), a = a.replace(y, (c, d, m) => {
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
        const i = Number.parseInt(m.replace(w, ""), 10);
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
  }), a;
}
function p(t, s) {
  let e;
  return t.system_prompt && t.system_prompt.trim() !== "" ? (e = t.system_prompt, e = e.replaceAll("{{original}}", (s == null ? void 0 : s.originalSystemPrompt) || "")) : (e = [`\u4F60\u662F ${t.name}\uFF0C\u8BF7\u6839\u636E\u4F60\u7684\u6027\u683C\u548C\u80CC\u666F\u8FDB\u884C\u56DE\u5E94\u3002\u4FDD\u6301\u89D2\u8272\u7684\u4E00\u81F4\u6027\u3002`, "=====[\u89D2\u8272\u63CF\u8FF0]=====", t.description, "=====[\u89D2\u8272\u6027\u683C]=====", t.personality, "=====[\u804A\u5929\u573A\u666F]=====", t.scenario, "=====[\u793A\u4F8B\u56DE\u590D]=====", t.mes_example].filter((a) => a.trim() !== "").join(`

`), e.trim() === "" && (e = (s == null ? void 0 : s.originalSystemPrompt) || "")), e = g(e, t, s), e.trim();
}
function _(t, s) {
  const e = p(t, s), a = [t.first_mes, ...(t == null ? void 0 : t.alternate_greetings) ?? []], r = a[Math.floor(Math.random() * a.length)], o = g(r, t, s);
  return [{ role: "system", content: e }, { role: "assistant", content: o }];
}
function j(t, s) {
  const e = p(t, s), a = [t.first_mes, ...(t == null ? void 0 : t.alternate_greetings) ?? []], r = a[Math.floor(Math.random() * a.length)], o = g(r, t, s), c = { id: u(), type: "starting_system_message", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: e } }, d = { id: u(), type: "character_intro", idx: 1, orderRef: 0, timestamp: Date.now() + 1, data: { characterId: t.id, content: o } };
  return [c, d];
}
const N = (t, s) => {
  if ((s == null ? void 0 : s.characterId) === void 0) return [];
  const e = h.parse(t), a = [];
  for (const r of e.historyItems) if (!(r.deleted || r.hidden)) switch (r.type) {
    case "starting_system_message":
    case "in_context_system_message":
      a.push({ role: "system", content: r.data.content, name: r.data.name });
      break;
    case "character_intro":
      a.push({ role: "assistant", content: r.data.content, name: r.data.name });
      break;
    case "participant_message":
    case "character_message": {
      const o = r.data, c = o.characterId === s.characterId;
      a.push({ role: c ? "assistant" : "user", content: o.content, name: o.name });
      break;
    }
    case "participant_message_group":
    case "character_message_group": {
      const o = r.data, c = o.characterId === s.characterId, d = o.list.map((m) => m.content).join(`
`);
      a.push({ role: c ? "assistant" : "user", content: d, name: o.name });
      break;
    }
    case "summary":
      a.push({ role: "user", content: r.data.content });
      break;
    case "llm_message":
    case "story_telling":
      a.push({ role: r.data.role, content: r.data.content, name: r.data.name });
      break;
    case "tool_message":
      a.push({ role: "tool", content: r.data.content, name: r.data.name });
      break;
  }
  return a;
}, I = Object.freeze(Object.defineProperty({ __proto__: null, makeChatModeCharacterSystemPrompt_CN: p, makeChatModeLLMMessagesFromContextStateForCharacterId: N, makeChatModeStartingContextItems_CN: j, makeChatModeStartingMessages_CN: _ }, Symbol.toStringTag, { value: "Module" })), S = (t) => {
  const { item: s, character: e } = t;
  return n.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [n.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden", children: e.imageBase64 || e.avatar ? n.jsx("img", { src: e.imageBase64 || e.avatar, alt: e.name, className: "w-full h-full object-cover" }) : n.jsx(x, { className: "w-6 h-6 text-primary" }) }), n.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [n.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: e.name }), n.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: s.data.content }), s.processing && n.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, P = (t) => {
  const { item: s, character: e } = t;
  return n.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [n.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden", children: e.imageBase64 || e.avatar ? n.jsx("img", { src: e.imageBase64 || e.avatar, alt: e.name, className: "w-full h-full object-cover" }) : n.jsx(x, { className: "w-6 h-6 text-primary" }) }), n.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [n.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: e.name }), n.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: s.data.content }), s.processing && n.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, B = (t) => {
  const { item: s } = t;
  return n.jsxs("div", { className: "flex gap-4 md:gap-6 flex-row-reverse group", children: [n.jsx("div", { className: "w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105", children: n.jsx(f, { className: "w-5 h-5 text-secondary-foreground" }) }), n.jsxs("div", { className: "space-y-1.5 text-right grow pt-1", children: [n.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2 justify-end", children: "Player" }), n.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap bg-primary/5 text-foreground p-4 rounded-2xl inline-block text-left min-w-25 shadow-sm", children: s.data.content })] })] });
};
export {
  P as C,
  B as P,
  S as a,
  I as c,
  N as m
};
