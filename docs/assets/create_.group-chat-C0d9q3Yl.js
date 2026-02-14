import { r, j as e, t as d } from "./react-D9TtqY-V.js";
import { f as F, i as R } from "./@tanstack-3iyDWv8L.js";
import { n as T } from "./id-OxPLOBIU.js";
import { C as U, m as _ } from "./db-master-BrZHBPj2.js";
import { c as E } from "./llm-readiness-DgR8F2ee.js";
import { B as i } from "./button-CMoAlsw3.js";
import { C as f, a as v, b as y, c as C, d as w } from "./card-85OZoUtz.js";
import { I as p } from "./input-CtGFdN_9.js";
import { L as n } from "./label-CBzbyhxK.js";
import { T as G } from "./textarea-NuAUq_bK.js";
import { B as $ } from "./badge-B6qKYUZD.js";
import { x as q, o as b, U as S, P as H, E as Q, X, y as J } from "./icons-bBaH0MBC.js";
import "./vendor-C4ToNUTj.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C2pyTzVO.js";
import "./zod-fbN9ubnj.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
const K = () => {
  const o = F(), [m, I] = r.useState(""), [x, k] = r.useState(""), [u, A] = r.useState(""), [h, D] = r.useState(5), [c, j] = r.useState(/* @__PURE__ */ new Set()), [t, g] = r.useState([]), { data: N = [] } = R((s) => s.from({ c: U })), L = (s) => {
    if (c.has(s.id)) return;
    const a = { id: s.id, name: s.name, description: s.description, systemPrompt: s.system_prompt || s.description, avatar: s.avatar || s.imageBase64, personality: s.personality || "", firstMessage: s.first_mes || "" };
    j(/* @__PURE__ */ new Set([...c, s.id])), g([...t, a]);
  }, M = (s) => {
    const a = new Set(c);
    a.delete(s), j(a), g(t.filter((l) => l.id !== s));
  }, P = async () => {
    if (t.length === 0) {
      d.warning("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
      return;
    }
    if (!E().isReady) {
      d.warning("\u8BF7\u5148\u914D\u7F6E LLM \u8FDE\u63A5");
      return;
    }
    try {
      const a = T(), l = Date.now(), z = { id: a, title: m || `\u7FA4\u804A: ${t.map((B) => B.name).join("\u3001")}`, mode: "group-chat", modeConfig: { topic: m || void 0, participantSnapshots: t, userName: x || "\u6211", dmSystemPrompt: u || void 0, maxAIAutoSpeakCount: h }, modeState: { currentPhase: "dm_select_speaker", currentUIState: "idle", currentSpeakerId: "", messageCount: 0, speakCounts: {}, aiAutoSpeakCounter: 0 }, createdAt: l, updatedAt: l, isActive: true };
      await _.sessions.add(z), d.success("\u7FA4\u804A\u5DF2\u521B\u5EFA\uFF01"), o({ to: "/session/$sessionId", params: { sessionId: a }, search: { mode: "group-chat" } });
    } catch (a) {
      console.error("[GroupChat] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", a), d.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
  };
  return e.jsxs("div", { className: "max-w-3xl mx-auto space-y-8 pb-12", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs(i, { type: "button", variant: "ghost", size: "sm", className: "-ml-2 text-muted-foreground", onClick: () => o({ to: "/plaza/characters" }), children: [e.jsx(q, { className: "w-4 h-4 mr-1" }), " \u8FD4\u56DE"] }) }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-3", children: [e.jsx(b, { className: "w-8 h-8 text-violet-500" }), "\u521B\u5EFA\u7FA4\u804A"] }), e.jsx("p", { className: "text-muted-foreground", children: "\u9009\u62E9 AI \u89D2\u8272\u52A0\u5165\u7FA4\u804A\uFF0C\u4EE5\u4F60\u81EA\u5DF1\u7684\u8EAB\u4EFD\u53C2\u4E0E\u5BF9\u8BDD\u3002" })] }), e.jsxs(f, { children: [e.jsxs(v, { children: [e.jsxs(y, { className: "flex items-center gap-2 text-lg", children: [e.jsx(b, { className: "w-5 h-5 text-primary" }), "\u57FA\u672C\u4FE1\u606F"] }), e.jsx(C, { children: "\u8BBE\u7F6E\u7FA4\u804A\u8BDD\u9898\u548C\u4F60\u7684\u540D\u79F0" })] }), e.jsxs(w, { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "gc-topic", children: "\u7FA4\u804A\u8BDD\u9898\uFF08\u53EF\u9009\uFF09" }), e.jsx(p, { id: "gc-topic", placeholder: "\u4F8B\u5982\uFF1A\u8BA8\u8BBA\u4ECA\u5929\u7684\u5192\u9669\u8BA1\u5212", value: m, onChange: (s) => I(s.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "gc-username", children: "\u4F60\u7684\u540D\u79F0" }), e.jsx(p, { id: "gc-username", placeholder: "\u9ED8\u8BA4\uFF1A\u6211", value: x, onChange: (s) => k(s.target.value) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "gc-dm-prompt", children: "DM \u8C03\u5EA6\u63D0\u793A\u8BCD\uFF08\u53EF\u9009\uFF09" }), e.jsx(G, { id: "gc-dm-prompt", placeholder: "\u81EA\u5B9A\u4E49 DM \u5982\u4F55\u9009\u62E9\u4E0B\u4E00\u4F4D\u53D1\u8A00\u8005...", className: "min-h-16", value: u, onChange: (s) => A(s.target.value) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "DM \u662F\u9690\u5F62\u7684\u8C03\u5EA6\u8005\uFF0C\u8D1F\u8D23\u5728\u540E\u53F0\u9009\u62E9\u54EA\u4E2A AI \u89D2\u8272\u4E0B\u4E00\u4E2A\u53D1\u8A00\u3002" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "gc-max-ai", children: "AI \u81EA\u4E3B\u53D1\u8A00\u6700\u5927\u6570\u91CF" }), e.jsx(p, { id: "gc-max-ai", type: "number", min: 1, max: 50, value: h, onChange: (s) => D(Number(s.target.value) || 5) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "AI \u89D2\u8272\u8FDE\u7EED\u53D1\u8A00\u8FBE\u5230\u6B64\u6570\u91CF\u540E\u5C06\u6682\u505C\uFF0C\u7B49\u5F85\u4F60\u53D1\u9001\u6D88\u606F\u540E\u7EE7\u7EED\u3002" })] })] })] }), e.jsxs(f, { children: [e.jsxs(v, { children: [e.jsxs(y, { className: "flex items-center gap-2 text-lg", children: [e.jsx(S, { className: "w-5 h-5 text-primary" }), "\u7FA4\u804A\u89D2\u8272"] }), e.jsx(C, { children: "\u9009\u62E9\u52A0\u5165\u7FA4\u804A\u7684 AI \u89D2\u8272" })] }), e.jsxs(w, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { children: "\u6DFB\u52A0\u89D2\u8272" }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [N.filter((s) => !c.has(s.id)).map((s) => e.jsxs(i, { type: "button", variant: "outline", size: "sm", className: "gap-2", onClick: () => L(s), children: [e.jsx(H, { className: "w-3 h-3" }), s.name] }, s.id)), N.length === 0 && e.jsxs("p", { className: "text-sm text-muted-foreground py-2", children: ["\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148", e.jsx(i, { type: "button", variant: "link", className: "px-1 h-auto", onClick: () => o({ to: "/create/character" }), children: "\u521B\u5EFA\u89D2\u8272" })] })] })] }), t.length > 0 ? e.jsxs("div", { className: "space-y-3", children: [e.jsxs(n, { children: ["\u5DF2\u9009 (", t.length, ")"] }), t.map((s) => e.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl border border-muted/50 bg-muted/10 group", children: [e.jsx("div", { className: "w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-600", children: e.jsx(Q, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm", children: s.name }), e.jsx($, { variant: "outline", className: "text-[9px]", children: "AI" })] }), e.jsx("p", { className: "text-xs text-muted-foreground truncate", children: s.description })] }), e.jsx(i, { type: "button", variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: () => M(s.id), children: e.jsx(X, { className: "w-4 h-4 text-muted-foreground" }) })] }, s.id))] }) : e.jsxs("div", { className: "text-center py-10 border border-dashed rounded-xl", children: [e.jsx(S, { className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u9009\u62E9\u81F3\u5C11\u4E00\u4E2A\u89D2\u8272\u52A0\u5165\u7FA4\u804A" })] })] })] }), e.jsxs("div", { className: "flex justify-end gap-4", children: [e.jsx(i, { type: "button", variant: "outline", onClick: () => o({ to: "/plaza/characters" }), children: "\u53D6\u6D88" }), e.jsxs(i, { type: "button", size: "lg", className: "gap-2 px-8", onClick: P, disabled: t.length === 0, children: [e.jsx(J, { className: "w-5 h-5" }), "\u5F00\u59CB\u7FA4\u804A"] })] })] });
};
function he() {
  return e.jsx("div", { className: "p-6", children: e.jsx(K, {}) });
}
export {
  he as component
};
