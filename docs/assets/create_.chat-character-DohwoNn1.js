import { al as K, r as d, v as R, u as _, j as e } from "./react-gFHNOnf5.js";
import { f as P } from "./@tanstack-DDpiKjUN.js";
import { B as f } from "./button-D3G-RLOw.js";
import { T } from "./textarea-DqdRyzs9.js";
import { C as Y, a as H, b as Q, d as W } from "./card-B4CxGEM-.js";
import { B as J } from "./badge-C9CmQsZA.js";
import { c as G } from "./shadcn-utils-BMZD7_jZ.js";
import { n as w } from "./id-OxPLOBIU.js";
import { P as q, m as X } from "./db-master-DI3V0061.js";
import { _ as L, o as k, n as D, s as v, c as Z, a as ee, l as te } from "./zod-DPWJ_A9_.js";
import { u as se } from "./useLLM-B1Ewhspf.js";
import { A as ne, Q as U, c as M, R as O, a8 as ae, P as re, J as ie } from "./icons-CW-0NDo_.js";
import { a as oe } from "./index-7c6pKJ8J.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./global-llm-config.store-BYX0tcdb.js";
import "./es-toolkit-CstbrnlE.js";
import "./app-configurations-Cz44104t.js";
const ce = L(["idle", "interview_running", "interview_waiting", "description_generating", "description_confirming", "json_generating", "json_editing", "json_confirmed", "completed"]), le = { idle: { label: "\u5F00\u59CB", placeholder: "\u63CF\u8FF0\u4E00\u4E0B\u4F60\u60F3\u521B\u5EFA\u7684\u89D2\u8272\u5427...", inputEnabled: true }, interview_running: { label: "\u52A9\u7406\u56DE\u590D\u4E2D", placeholder: "\u52A9\u7406\u6B63\u5728\u601D\u8003...", inputEnabled: false }, interview_waiting: { label: "\u7EE7\u7EED\u63CF\u8FF0", placeholder: "\u7EE7\u7EED\u63CF\u8FF0\u4F60\u7684\u89D2\u8272\uFF0C\u6216\u56DE\u7B54\u52A9\u7406\u7684\u95EE\u9898...", inputEnabled: true }, description_generating: { label: "\u751F\u6210\u63CF\u8FF0\u4E2D", placeholder: "\u6B63\u5728\u6574\u7406\u89D2\u8272\u63CF\u8FF0...", inputEnabled: false }, description_confirming: { label: "\u786E\u8BA4\u63CF\u8FF0", placeholder: "\u786E\u8BA4\u63CF\u8FF0\u65E0\u8BEF\uFF0C\u6216\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9...", inputEnabled: true }, json_generating: { label: "\u751F\u6210\u89D2\u8272\u5361\u4E2D", placeholder: "\u6B63\u5728\u751F\u6210\u89D2\u8272\u5361\u6570\u636E...", inputEnabled: false }, json_editing: { label: "\u7F16\u8F91\u89D2\u8272\u5361", placeholder: "\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9\uFF0C\u6216\u76F4\u63A5\u5728\u53F3\u4FA7\u7F16\u8F91...", inputEnabled: true }, json_confirmed: { label: "\u89D2\u8272\u5361\u5DF2\u5C31\u7EEA", placeholder: "\u89D2\u8272\u5361\u5DF2\u751F\u6210\uFF0C\u53EF\u4EE5\u5BFC\u51FA\u6216\u6DFB\u52A0\u5230\u5E7F\u573A", inputEnabled: false }, completed: { label: "\u5B8C\u6210", placeholder: "\u89D2\u8272\u5361\u521B\u5EFA\u5B8C\u6210\uFF01", inputEnabled: false } }, de = k({ id: v().describe("\u6D88\u606FID"), role: L(["user", "assistant", "system"]).describe("\u6D88\u606F\u89D2\u8272"), content: v().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: D().describe("\u65F6\u95F4\u6233"), messageType: L(["chat", "description_summary", "json_preview"]).optional().describe("\u6D88\u606F\u7C7B\u578B") }), me = k({ presetHint: v().optional().describe("\u9884\u8BBE\u7684\u89D2\u8272\u7C7B\u578B\u63D0\u793A") }), ue = k({ currentUIState: ce.describe("\u5F53\u524D UI \u72B6\u6001"), messages: ee(de).describe("\u5BF9\u8BDD\u5386\u53F2"), generatedDescription: v().optional().describe("\u751F\u6210\u7684\u63CF\u8FF0\u603B\u7ED3"), generatedJson: q.optional().describe("\u751F\u6210\u7684\u89D2\u8272\u5361 JSON"), descriptionConfirmed: Z().default(false).describe("\u7528\u6237\u662F\u5426\u5DF2\u786E\u8BA4\u63CF\u8FF0") });
k({ id: v().describe("\u4F1A\u8BDDID"), mode: te("chat-create-character").describe("\u6A21\u5F0F\u6807\u8BC6"), modeConfig: me.describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: ue.describe("\u6A21\u5F0F\u72B6\u6001"), createdAt: D().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: D().describe("\u66F4\u65B0\u65F6\u95F4") });
function A() {
  return { currentUIState: "idle", messages: [], descriptionConfirmed: false };
}
const t = K({ currentSession: null, isLoading: false, streamingContent: "", startNewSession(n) {
  const r = Date.now(), o = { id: `chat-create-char-${r}`, mode: "chat-create-character", modeConfig: { presetHint: n }, modeState: A(), createdAt: r, updatedAt: r };
  return this.currentSession = o, this.isLoading = false, this.streamingContent = "", o;
}, getState() {
  var _a;
  return ((_a = this.currentSession) == null ? void 0 : _a.modeState) ?? null;
}, getMessages() {
  var _a;
  return ((_a = this.currentSession) == null ? void 0 : _a.modeState.messages) ?? [];
}, addUserMessage(n) {
  const r = { id: w(), role: "user", content: n, timestamp: Date.now(), messageType: "chat" };
  return this.currentSession && (this.currentSession.modeState.messages.push(r), this.currentSession.updatedAt = Date.now()), r;
}, addAssistantMessage(n, r = "chat") {
  const o = { id: w(), role: "assistant", content: n, timestamp: Date.now(), messageType: r };
  return this.currentSession && (this.currentSession.modeState.messages.push(o), this.currentSession.updatedAt = Date.now()), o;
}, setUIState(n) {
  this.currentSession && (this.currentSession.modeState.currentUIState = n, this.currentSession.updatedAt = Date.now());
}, setGeneratedDescription(n) {
  this.currentSession && (this.currentSession.modeState.generatedDescription = n, this.currentSession.updatedAt = Date.now());
}, setGeneratedJson(n) {
  this.currentSession && (this.currentSession.modeState.generatedJson = n, this.currentSession.updatedAt = Date.now());
}, updateGeneratedJsonField(n, r) {
  var _a;
  ((_a = this.currentSession) == null ? void 0 : _a.modeState.generatedJson) && (this.currentSession.modeState.generatedJson[n] = r, this.currentSession.updatedAt = Date.now());
}, setDescriptionConfirmed(n) {
  this.currentSession && (this.currentSession.modeState.descriptionConfirmed = n, this.currentSession.updatedAt = Date.now());
}, setLoading(n) {
  this.isLoading = n;
}, setStreamingContent(n) {
  this.streamingContent = n;
}, clearStreamingContent() {
  this.streamingContent = "";
}, endSession() {
  this.currentSession = null, this.isLoading = false, this.streamingContent = "";
}, resetSession() {
  this.currentSession && (this.currentSession.modeState = A(), this.currentSession.updatedAt = Date.now()), this.isLoading = false, this.streamingContent = "";
} }), pe = "\uFF08\u6682\u65E0\uFF0C\u8BF7\u81EA\u7531\u53D1\u6325\uFF09", he = `
# \u53C2\u8003\u8D44\u6599

${pe}

==========

# \u4EFB\u52A1\u63CF\u8FF0

\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u7684\u89D2\u8272\u521B\u5EFA\u987E\u95EE\u3002\u4F60\u7684\u4EFB\u52A1\u662F\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u7528\u6237\u521B\u5EFA\u4E00\u4E2A AI \u89D2\u8272\u5361\u3002

\u4F60\u9700\u8981\u6839\u636E\u524D\u9762\u7684\u53C2\u8003\u8D44\u6599\u6765\u6536\u96C6\u4FE1\u606F\uFF0C\u5E2E\u52A9\u7528\u6237\u5851\u9020\u4E00\u4E2A\u5B8C\u6574\u3001\u6709\u6DF1\u5EA6\u7684\u89D2\u8272\u5F62\u8C61\u3002
\u4F46\u6CE8\u610F\uFF0C\u4E0D\u662F\u95EE\u7528\u6237\u201C\u4F60\u201D\u5982\u4F55\u5982\u4F55\uFF0C\u800C\u662F\u95EE\u7528\u6237\u201C\u8FD9\u4E2A\u89D2\u8272\u201D\u5982\u4F55\u5982\u4F55\u3002

\u6700\u5173\u952E\u7684\u4FA7\u9762\u5305\u62EC\uFF1A
1. \u89D2\u8272\u7684\u57FA\u672C\u4FE1\u606F\uFF08\u540D\u5B57\u3001\u6027\u522B\u3001\u5E74\u9F84\u7B49\uFF09
2. \u89D2\u8272\u7684\u5916\u8C8C\u7279\u5F81
3. \u89D2\u8272\u7684\u6027\u683C\u7279\u70B9
4. \u89D2\u8272\u7684\u80CC\u666F\u6545\u4E8B
5. \u89D2\u8272\u7684\u8BF4\u8BDD\u98CE\u683C\u548C\u53E3\u5934\u7985
6. \u89D2\u8272\u7684\u6280\u80FD\u6216\u7279\u6B8A\u80FD\u529B
7. \u89D2\u8272\u9002\u7528\u7684\u573A\u666F

\u4F46\u662F\u6CE8\u610F\uFF1A\u4E0D\u8981\u673A\u68B0\u5730\u6309\u7167\u4E0A\u8FF0\u987A\u5E8F\u6765\u63D0\u95EE\uFF0C\u800C\u662F\u8981\u968F\u65F6\u6355\u6349\u7528\u6237\u56DE\u7B54\u4E2D\u7684\u7CBE\u5F69\u7EC6\u8282\uFF0C\u7075\u6D3B\u8C03\u6574\u4F60\u7684\u63D0\u95EE\u987A\u5E8F\u548C\u5185\u5BB9\u3002
\u540C\u65F6\u8981\u6CE8\u610F\u7ED9\u7528\u6237\u79EF\u6781\u7684\u53CD\u9988\uFF0C\u63D0\u4F9B\u60C5\u7EEA\u4EF7\u503C\uFF0C\u9F13\u52B1\u4ED6\u4EEC\u63D0\u4F9B\u66F4\u591A\u7EC6\u8282\u3002

\u5F53\u4F60\u8BA4\u4E3A\u6536\u96C6\u7684\u4FE1\u606F\u8DB3\u591F\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u89D2\u8272\u65F6\uFF0C\u5728\u56DE\u590D\u7684\u672B\u5C3E\u6DFB\u52A0 [INFO_COMPLETE] \u6807\u8BB0\u3002
`.trim(), ge = `
\u6839\u636E\u76EE\u524D\u4E3A\u6B62\u7684\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u4E00\u4EFD\u5B8C\u6574\u7684\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\u3002
\u8BF7\u786E\u4FDD\u63CF\u8FF0\u8BE6\u7EC6\u3001\u751F\u52A8\uFF0C\u80FD\u591F\u5B8C\u6574\u5448\u73B0\u8FD9\u4E2A\u89D2\u8272\u7684\u5F62\u8C61\u3002

\u5C24\u5176\u56F4\u7ED5\u4EE5\u4E0B\u4FA7\u9762\uFF1A
1. \u89D2\u8272\u7684\u57FA\u672C\u4FE1\u606F\uFF08\u540D\u5B57\u3001\u6027\u522B\u3001\u5E74\u9F84\u7B49\uFF09
2. \u89D2\u8272\u7684\u5916\u8C8C\u7279\u5F81
3. \u89D2\u8272\u7684\u6027\u683C\u7279\u70B9
4. \u89D2\u8272\u7684\u80CC\u666F\u6545\u4E8B
5. \u89D2\u8272\u7684\u8BF4\u8BDD\u98CE\u683C\u548C\u53E3\u5934\u7985
6. \u89D2\u8272\u7684\u6280\u80FD\u6216\u7279\u6B8A\u80FD\u529B
7. \u89D2\u8272\u9002\u7528\u7684\u573A\u666F
`.trim(), fe = `
\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u548C\u89D2\u8272\u63CF\u8FF0\uFF0C\u751F\u6210\u4E00\u4E2A\u7B26\u5408\u89C4\u8303\u7684\u89D2\u8272\u5361 JSON\u3002

\u8BF7\u4E25\u683C\u6309\u7167\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA JSON\uFF08\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\uFF09\uFF1A
{
  "name": "\u89D2\u8272\u540D\u79F0",
  "description": "\u89D2\u8272\u7684\u8BE6\u7EC6\u63CF\u8FF0\uFF0C\u5305\u62EC\u5916\u8C8C\u3001\u80CC\u666F\u7B49",
  "personality": "\u89D2\u8272\u7684\u6027\u683C\u7279\u70B9",
  "scenario": "\u89D2\u8272\u6240\u5904\u7684\u573A\u666F\u8BBE\u5B9A",
  "first_mes": "\u89D2\u8272\u7684\u7B2C\u4E00\u6761\u5F00\u573A\u6D88\u606F\uFF0C\u5E94\u8BE5\u7B26\u5408\u89D2\u8272\u7684\u8BF4\u8BDD\u98CE\u683C",
  "mes_example": "\u89D2\u8272\u7684\u5BF9\u8BDD\u793A\u4F8B\uFF0C\u5C55\u793A\u5176\u8BF4\u8BDD\u98CE\u683C",
  "creator_notes": "\u521B\u5EFA\u8005\u5907\u6CE8",
  "system_prompt": "\u7ED9 AI \u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u63CF\u8FF0\u5982\u4F55\u626E\u6F14\u8FD9\u4E2A\u89D2\u8272",
  "post_history_instructions": "\u5386\u53F2\u6D88\u606F\u540E\u7684\u6307\u4EE4",
  "tags": ["\u6807\u7B7E1", "\u6807\u7B7E2"]
}

\u786E\u4FDD JSON \u683C\u5F0F\u6B63\u786E\uFF0C\u6240\u6709\u5B57\u6BB5\u90FD\u6709\u5408\u9002\u7684\u5185\u5BB9\u3002
\u4F46\u540C\u65F6\u8981\u6CE8\u610F\uFF1A\u5C3D\u53EF\u80FD\u628A\u5173\u952E\u4FE1\u606F\u5168\u90E8\u5B8C\u6574\u5730\u586B\u5165\u5408\u9002\u7684\u5B57\u6BB5\u3002
\u5B57\u6BB5\u5185\u90E8\u53EF\u4EE5\u6362\u884C\uFF0C\u4E5F\u53EF\u4EE5\u6709\u5C0F\u6807\u9898\uFF0C\u4E0D\u9700\u8981\u523B\u610F\u538B\u7F29\u6210\u4E00\u884C\u6216\u4E00\u6BB5\u3002
`.trim();
function xe() {
  const n = se(), r = P(), o = d.useRef(false), x = R(t), N = d.useCallback(async (m) => {
    if (!(o.current || !t.currentSession)) try {
      o.current = true, t.setLoading(true), t.addUserMessage(m);
      const l = t.currentSession.modeState.currentUIState;
      (l === "idle" || l === "interview_waiting") && t.setUIState("interview_running");
      const h = t.getMessages(), p = [{ id: w(), role: "system", content: he }, ...h.map((i) => ({ id: i.id, role: i.role, content: i.content }))];
      let a = "";
      t.clearStreamingContent(), await n.callLLMStream(p, (i, j) => {
        a = j, t.setStreamingContent(j);
      });
      const g = a.includes("[INFO_COMPLETE]"), c = a.replace("[INFO_COMPLETE]", "").trim();
      t.addAssistantMessage(c), t.clearStreamingContent(), g ? t.setUIState("description_confirming") : t.setUIState("interview_waiting");
    } catch (l) {
      console.error("Chat Create Character Error:", l), _.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", { duration: 5e3, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => r({ to: "/config/llm" }) } }), t.setUIState("interview_waiting");
    } finally {
      o.current = false, t.setLoading(false);
    }
  }, [n, r]), C = d.useCallback(async () => {
    if (!(o.current || !t.currentSession)) try {
      o.current = true, t.setLoading(true), t.setUIState("description_generating");
      const m = t.getMessages(), l = [{ id: w(), role: "system", content: ge }, ...m.map((p) => ({ id: p.id, role: p.role, content: p.content })), { id: w(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\u3002" }];
      let h = "";
      t.clearStreamingContent(), await n.callLLMStream(l, (p, a) => {
        h = a, t.setStreamingContent(a);
      }), t.setGeneratedDescription(h), t.addAssistantMessage(h, "description_summary"), t.clearStreamingContent(), t.setUIState("description_confirming");
    } catch (m) {
      console.error("Generate Description Error:", m), _.error("\u751F\u6210\u63CF\u8FF0\u5931\u8D25"), t.setUIState("interview_waiting");
    } finally {
      o.current = false, t.setLoading(false);
    }
  }, [n]), S = d.useCallback(async () => {
    if (!(o.current || !t.currentSession)) try {
      o.current = true, t.setLoading(true), t.setUIState("json_generating");
      const m = t.getMessages(), l = t.currentSession.modeState.generatedDescription, h = [{ id: w(), role: "system", content: fe }, ...m.map((a) => ({ id: a.id, role: a.role, content: a.content }))];
      l && h.push({ id: w(), role: "assistant", content: `\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\uFF1A
${l}` }), h.push({ id: w(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u4FE1\u606F\uFF0C\u751F\u6210\u89D2\u8272\u5361 JSON\u3002\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\u3002" });
      let p = "";
      await n.callLLMStream(h, (a, g) => {
        p = g, t.setStreamingContent(g);
      });
      try {
        let a = p;
        const g = p.match(/```(?:json)?\s*([\s\S]*?)```/);
        g && (a = g[1].trim());
        const c = JSON.parse(a), i = Date.now(), j = { id: `char-${i}`, name: c.name || "\u672A\u547D\u540D\u89D2\u8272", description: c.description || "", personality: c.personality || "", scenario: c.scenario || "", first_mes: c.first_mes || "", mes_example: c.mes_example || "", creator_notes: c.creator_notes || "", system_prompt: c.system_prompt || "", post_history_instructions: c.post_history_instructions || "", alternate_greetings: c.alternate_greetings || [], group_only_greetings: c.group_only_greetings || [], tags: c.tags || [], extensions: c.extensions || {}, creator: "User", character_version: "1.0", createdAt: i, updatedAt: i };
        t.setGeneratedJson(j), t.clearStreamingContent(), t.setUIState("json_editing"), _.success("\u89D2\u8272\u5361\u751F\u6210\u6210\u529F\uFF01");
      } catch (a) {
        console.error("JSON Parse Error:", a), _.error("JSON \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), t.setUIState("description_confirming");
      }
    } catch (m) {
      console.error("Generate JSON Error:", m), _.error("\u751F\u6210\u89D2\u8272\u5361\u5931\u8D25"), t.setUIState("description_confirming");
    } finally {
      o.current = false, t.setLoading(false);
    }
  }, [n]), b = d.useCallback(() => {
    t.setUIState("json_confirmed");
  }, []), u = d.useCallback(async () => {
    await S();
  }, [S]);
  return { store: x, sendMessage: N, generateDescription: C, generateJson: S, confirmJson: b, regenerateJson: u, isLoading: x.isLoading, streamingContent: x.streamingContent };
}
function Se({ initialPrompt: n } = {}) {
  var _a, _b, _c, _d;
  const r = P(), o = R(t), { sendMessage: x, generateDescription: N, generateJson: C, confirmJson: S, regenerateJson: b, isLoading: u, streamingContent: m } = xe(), [l, h] = d.useState(""), p = d.useRef(false);
  d.useEffect(() => (t.currentSession || t.startNewSession(), () => {
  }), []), d.useEffect(() => {
    const s = n == null ? void 0 : n.trim(), E = t.currentSession;
    !s || p.current || !E || u || (p.current = true, x(s).then(() => {
      r({ to: "/create/chat-character", replace: true });
    }));
  }, [n, u, r, x]);
  const a = ((_a = o.currentSession) == null ? void 0 : _a.modeState.currentUIState) ?? "idle", g = le[a], c = ((_b = o.currentSession) == null ? void 0 : _b.modeState.messages) ?? [], i = (_c = o.currentSession) == null ? void 0 : _c.modeState.generatedJson, j = d.useCallback(async () => {
    if (!l.trim() || u) return;
    const s = l.trim();
    h(""), await x(s);
  }, [l, u, x]), z = d.useCallback((s) => {
    s.key === "Enter" && !s.shiftKey && (s.preventDefault(), j());
  }, [j]), F = d.useCallback(() => {
    if (!i) return;
    const s = new Blob([JSON.stringify(i, null, 2)], { type: "application/json" }), E = URL.createObjectURL(s), I = document.createElement("a");
    I.href = E, I.download = `${i.name || "character"}.json`, I.click(), URL.revokeObjectURL(E), _.success("\u89D2\u8272\u5361\u5DF2\u5BFC\u51FA");
  }, [i]), B = d.useCallback(async () => {
    if (i) try {
      const s = JSON.parse(JSON.stringify(i));
      await X.characters.add(s), _.success(`\u89D2\u8272 ${s.name} \u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A`), t.setUIState("completed"), r({ to: "/plaza/characters" });
    } catch (s) {
      console.error("Add to plaza error:", s), _.error("\u6DFB\u52A0\u5931\u8D25");
    }
  }, [i, r]), $ = d.useCallback(() => {
    t.endSession(), r({ to: "/create" });
  }, [r]), V = d.useCallback(() => {
    t.resetSession();
  }, []);
  return e.jsxs("div", { className: "flex flex-col h-full max-h-[calc(100vh-4rem)]", children: [e.jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx(f, { type: "button", variant: "ghost", size: "icon", onClick: $, children: e.jsx(ne, { className: "w-5 h-5" }) }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-lg font-semibold", children: "\u804A\u5929\u5F0F\u521B\u5EFA\u89D2\u8272" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u521B\u5EFA\u89D2\u8272\u5361" })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(J, { variant: "outline", children: g.label }), c.length > 0 && e.jsx(f, { type: "button", variant: "outline", size: "sm", onClick: V, children: "\u91CD\u65B0\u5F00\u59CB" })] })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [c.length === 0 && !m && e.jsxs("div", { className: "text-center text-muted-foreground py-12", children: [e.jsx(U, { className: "w-12 h-12 mx-auto mb-4 opacity-50" }), e.jsx("p", { children: "\u5F00\u59CB\u63CF\u8FF0\u4F60\u60F3\u521B\u5EFA\u7684\u89D2\u8272\u5427\uFF01" }), e.jsx("p", { className: "text-sm mt-2", children: "\u4F8B\u5982\uFF1A\u6211\u60F3\u521B\u5EFA\u4E00\u4E2A\u6E29\u67D4\u7684\u56FE\u4E66\u9986\u7BA1\u7406\u5458..." })] }), c.map((s) => e.jsxs("div", { className: G("max-w-[80%] rounded-lg p-3", s.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"), children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: s.content }), s.messageType === "description_summary" && e.jsx(J, { variant: "secondary", className: "mt-2", children: "\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3" })] }, s.id)), m && e.jsxs("div", { className: "max-w-[80%] rounded-lg p-3 bg-muted", children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: m }), e.jsx("span", { className: "inline-block w-2 h-4 bg-foreground/50 animate-pulse ml-1" })] })] }), e.jsxs("div", { className: "p-4 border-t space-y-3", children: [e.jsxs("div", { className: "flex flex-wrap gap-2", children: [a === "description_confirming" && e.jsxs(e.Fragment, { children: [e.jsxs(f, { type: "button", size: "sm", onClick: C, disabled: u, children: [e.jsx(M, { className: "w-4 h-4 mr-1" }), "\u786E\u8BA4\u5E76\u751F\u6210\u89D2\u8272\u5361"] }), e.jsxs(f, { type: "button", size: "sm", variant: "outline", onClick: N, disabled: u, children: [e.jsx(O, { className: "w-4 h-4 mr-1" }), "\u91CD\u65B0\u751F\u6210\u63CF\u8FF0"] })] }), (a === "interview_waiting" || a === "idle") && c.length > 2 && e.jsxs(f, { type: "button", size: "sm", variant: "secondary", onClick: C, disabled: u, children: [e.jsx(U, { className: "w-4 h-4 mr-1" }), "\u7ACB\u5373\u751F\u6210\u89D2\u8272\u5361"] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(T, { value: l, onChange: (s) => h(s.target.value), onKeyDown: z, placeholder: g.placeholder, disabled: !g.inputEnabled || u, className: "min-h-15 max-h-30 resize-none" }), e.jsx(f, { type: "button", size: "icon", onClick: j, disabled: !g.inputEnabled || u || !l.trim(), children: e.jsx(ae, { className: "w-4 h-4" }) })] })] })] }), (a === "json_editing" || a === "json_confirmed" || a === "completed") && i && e.jsxs("div", { className: "w-96 border-l overflow-y-auto p-4 space-y-4", children: [e.jsxs(Y, { children: [e.jsx(H, { className: "pb-2", children: e.jsxs(Q, { className: "text-base flex items-center justify-between", children: ["\u89D2\u8272\u5361\u9884\u89C8", e.jsx("div", { className: "flex gap-1", children: e.jsx(f, { type: "button", size: "icon", variant: "ghost", onClick: b, disabled: u, title: "\u91CD\u65B0\u751F\u6210", children: e.jsx(O, { className: "w-4 h-4" }) }) })] }) }), e.jsxs(W, { className: "space-y-3", children: [e.jsx(y, { label: "\u540D\u79F0", value: i.name, onChange: (s) => t.updateGeneratedJsonField("name", s) }), e.jsx(y, { label: "\u63CF\u8FF0", value: i.description, multiline: true, onChange: (s) => t.updateGeneratedJsonField("description", s) }), e.jsx(y, { label: "\u6027\u683C", value: i.personality, onChange: (s) => t.updateGeneratedJsonField("personality", s) }), e.jsx(y, { label: "\u573A\u666F", value: i.scenario, onChange: (s) => t.updateGeneratedJsonField("scenario", s) }), e.jsx(y, { label: "\u5F00\u573A\u767D", value: i.first_mes, multiline: true, onChange: (s) => t.updateGeneratedJsonField("first_mes", s) }), e.jsx(y, { label: "\u7CFB\u7EDF\u63D0\u793A\u8BCD", value: i.system_prompt, multiline: true, onChange: (s) => t.updateGeneratedJsonField("system_prompt", s) }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u6807\u7B7E" }), e.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: (_d = i.tags) == null ? void 0 : _d.map((s) => e.jsx(J, { variant: "secondary", className: "text-xs", children: s }, s)) })] })] })] }), a !== "completed" && e.jsxs("div", { className: "flex flex-col gap-2", children: [e.jsxs(f, { type: "button", onClick: B, className: "w-full", children: [e.jsx(re, { className: "w-4 h-4 mr-2" }), "\u6DFB\u52A0\u5230\u5E7F\u573A"] }), e.jsxs(f, { type: "button", variant: "outline", onClick: F, className: "w-full", children: [e.jsx(ie, { className: "w-4 h-4 mr-2" }), "\u5BFC\u51FA\u4E3A\u6587\u4EF6"] }), a === "json_editing" && e.jsxs(f, { type: "button", variant: "secondary", onClick: S, className: "w-full", children: [e.jsx(M, { className: "w-4 h-4 mr-2" }), "\u786E\u8BA4\u5B8C\u6210\u7F16\u8F91"] })] }), a === "completed" && e.jsxs("div", { className: "text-center text-muted-foreground py-4", children: [e.jsx(M, { className: "w-8 h-8 mx-auto mb-2 text-green-500" }), e.jsx("p", { children: "\u89D2\u8272\u5361\u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A\uFF01" })] })] })] })] });
}
function y({ label: n, value: r, multiline: o = false, onChange: x }) {
  const [N, C] = d.useState(false), [S, b] = d.useState(r), u = () => {
    x(S), C(false);
  }, m = () => {
    b(r), C(false);
  };
  return N ? e.jsxs("div", { className: "space-y-1", children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: n }), o ? e.jsx(T, { value: S, onChange: (l) => b(l.target.value), className: "text-sm min-h-15" }) : e.jsx("input", { type: "text", value: S, onChange: (l) => b(l.target.value), className: "w-full text-sm border rounded px-2 py-1 bg-background" }), e.jsxs("div", { className: "flex gap-1", children: [e.jsx(f, { type: "button", size: "sm", variant: "ghost", onClick: u, children: "\u4FDD\u5B58" }), e.jsx(f, { type: "button", size: "sm", variant: "ghost", onClick: m, children: "\u53D6\u6D88" })] })] }) : e.jsxs("div", { className: "cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors", onClick: () => {
    b(r), C(true);
  }, children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: n }), e.jsx("p", { className: G("text-sm", o ? "whitespace-pre-wrap line-clamp-3" : "truncate"), children: r || e.jsx("span", { className: "text-muted-foreground italic", children: "\u70B9\u51FB\u7F16\u8F91" }) })] });
}
function ze() {
  const n = oe.useSearch();
  return e.jsx(Se, { initialPrompt: n.prompt });
}
export {
  ze as component
};
