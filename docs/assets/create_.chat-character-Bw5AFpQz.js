import { D as $, r as u, E as R, t as C, j as e } from "./react-D9TtqY-V.js";
import { f as T } from "./@tanstack-3iyDWv8L.js";
import { B as g } from "./button-CMoAlsw3.js";
import { T as P } from "./textarea-NuAUq_bK.js";
import { C as V, a as K, b as Y, d as H } from "./card-85OZoUtz.js";
import { B as J } from "./badge-B6qKYUZD.js";
import { c as F } from "./shadcn-utils-BMZD7_jZ.js";
import { n as S } from "./id-OxPLOBIU.js";
import { P as W, m as q } from "./db-master-BrZHBPj2.js";
import { _ as L, o as k, n as D, s as v, b as Q, a as X, l as Z } from "./zod-fbN9ubnj.js";
import { u as ee } from "./useLLM-tAU3ECR6.js";
import { A as te, i as U, g as M, R as O, W as se, P as ne, D as ae } from "./icons-bBaH0MBC.js";
import "./vendor-C4ToNUTj.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C2pyTzVO.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./global-llm-config.store-C91qlFOh.js";
import "./es-toolkit-CstbrnlE.js";
import "./app-configurations-Cz44104t.js";
const re = L(["idle", "interview_running", "interview_waiting", "description_generating", "description_confirming", "json_generating", "json_editing", "json_confirmed", "completed"]), ie = { idle: { label: "\u5F00\u59CB", placeholder: "\u63CF\u8FF0\u4E00\u4E0B\u4F60\u60F3\u521B\u5EFA\u7684\u89D2\u8272\u5427...", inputEnabled: true }, interview_running: { label: "\u52A9\u7406\u56DE\u590D\u4E2D", placeholder: "\u52A9\u7406\u6B63\u5728\u601D\u8003...", inputEnabled: false }, interview_waiting: { label: "\u7EE7\u7EED\u63CF\u8FF0", placeholder: "\u7EE7\u7EED\u63CF\u8FF0\u4F60\u7684\u89D2\u8272\uFF0C\u6216\u56DE\u7B54\u52A9\u7406\u7684\u95EE\u9898...", inputEnabled: true }, description_generating: { label: "\u751F\u6210\u63CF\u8FF0\u4E2D", placeholder: "\u6B63\u5728\u6574\u7406\u89D2\u8272\u63CF\u8FF0...", inputEnabled: false }, description_confirming: { label: "\u786E\u8BA4\u63CF\u8FF0", placeholder: "\u786E\u8BA4\u63CF\u8FF0\u65E0\u8BEF\uFF0C\u6216\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9...", inputEnabled: true }, json_generating: { label: "\u751F\u6210\u89D2\u8272\u5361\u4E2D", placeholder: "\u6B63\u5728\u751F\u6210\u89D2\u8272\u5361\u6570\u636E...", inputEnabled: false }, json_editing: { label: "\u7F16\u8F91\u89D2\u8272\u5361", placeholder: "\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9\uFF0C\u6216\u76F4\u63A5\u5728\u53F3\u4FA7\u7F16\u8F91...", inputEnabled: true }, json_confirmed: { label: "\u89D2\u8272\u5361\u5DF2\u5C31\u7EEA", placeholder: "\u89D2\u8272\u5361\u5DF2\u751F\u6210\uFF0C\u53EF\u4EE5\u5BFC\u51FA\u6216\u6DFB\u52A0\u5230\u5E7F\u573A", inputEnabled: false }, completed: { label: "\u5B8C\u6210", placeholder: "\u89D2\u8272\u5361\u521B\u5EFA\u5B8C\u6210\uFF01", inputEnabled: false } }, oe = k({ id: v().describe("\u6D88\u606FID"), role: L(["user", "assistant", "system"]).describe("\u6D88\u606F\u89D2\u8272"), content: v().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: D().describe("\u65F6\u95F4\u6233"), messageType: L(["chat", "description_summary", "json_preview"]).optional().describe("\u6D88\u606F\u7C7B\u578B") }), ce = k({ presetHint: v().optional().describe("\u9884\u8BBE\u7684\u89D2\u8272\u7C7B\u578B\u63D0\u793A") }), le = k({ currentUIState: re.describe("\u5F53\u524D UI \u72B6\u6001"), messages: X(oe).describe("\u5BF9\u8BDD\u5386\u53F2"), generatedDescription: v().optional().describe("\u751F\u6210\u7684\u63CF\u8FF0\u603B\u7ED3"), generatedJson: W.optional().describe("\u751F\u6210\u7684\u89D2\u8272\u5361 JSON"), descriptionConfirmed: Q().default(false).describe("\u7528\u6237\u662F\u5426\u5DF2\u786E\u8BA4\u63CF\u8FF0") });
k({ id: v().describe("\u4F1A\u8BDDID"), mode: Z("chat-create-character").describe("\u6A21\u5F0F\u6807\u8BC6"), modeConfig: ce.describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: le.describe("\u6A21\u5F0F\u72B6\u6001"), createdAt: D().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: D().describe("\u66F4\u65B0\u65F6\u95F4") });
function A() {
  return { currentUIState: "idle", messages: [], descriptionConfirmed: false };
}
const t = $({ currentSession: null, isLoading: false, streamingContent: "", startNewSession(s) {
  const r = Date.now(), i = { id: `chat-create-char-${r}`, mode: "chat-create-character", modeConfig: { presetHint: s }, modeState: A(), createdAt: r, updatedAt: r };
  return this.currentSession = i, this.isLoading = false, this.streamingContent = "", i;
}, getState() {
  var _a;
  return ((_a = this.currentSession) == null ? void 0 : _a.modeState) ?? null;
}, getMessages() {
  var _a;
  return ((_a = this.currentSession) == null ? void 0 : _a.modeState.messages) ?? [];
}, addUserMessage(s) {
  const r = { id: S(), role: "user", content: s, timestamp: Date.now(), messageType: "chat" };
  return this.currentSession && (this.currentSession.modeState.messages.push(r), this.currentSession.updatedAt = Date.now()), r;
}, addAssistantMessage(s, r = "chat") {
  const i = { id: S(), role: "assistant", content: s, timestamp: Date.now(), messageType: r };
  return this.currentSession && (this.currentSession.modeState.messages.push(i), this.currentSession.updatedAt = Date.now()), i;
}, setUIState(s) {
  this.currentSession && (this.currentSession.modeState.currentUIState = s, this.currentSession.updatedAt = Date.now());
}, setGeneratedDescription(s) {
  this.currentSession && (this.currentSession.modeState.generatedDescription = s, this.currentSession.updatedAt = Date.now());
}, setGeneratedJson(s) {
  this.currentSession && (this.currentSession.modeState.generatedJson = s, this.currentSession.updatedAt = Date.now());
}, updateGeneratedJsonField(s, r) {
  var _a;
  ((_a = this.currentSession) == null ? void 0 : _a.modeState.generatedJson) && (this.currentSession.modeState.generatedJson[s] = r, this.currentSession.updatedAt = Date.now());
}, setDescriptionConfirmed(s) {
  this.currentSession && (this.currentSession.modeState.descriptionConfirmed = s, this.currentSession.updatedAt = Date.now());
}, setLoading(s) {
  this.isLoading = s;
}, setStreamingContent(s) {
  this.streamingContent = s;
}, clearStreamingContent() {
  this.streamingContent = "";
}, endSession() {
  this.currentSession = null, this.isLoading = false, this.streamingContent = "";
}, resetSession() {
  this.currentSession && (this.currentSession.modeState = A(), this.currentSession.updatedAt = Date.now()), this.isLoading = false, this.streamingContent = "";
} }), de = "\uFF08\u6682\u65E0\uFF0C\u8BF7\u81EA\u7531\u53D1\u6325\uFF09", me = `
# \u53C2\u8003\u8D44\u6599

${de}

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
`.trim(), ue = `
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
`.trim(), pe = `
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
function he() {
  const s = ee(), r = T(), i = u.useRef(false), b = R(t), _ = u.useCallback(async (d) => {
    if (!(i.current || !t.currentSession)) try {
      i.current = true, t.setLoading(true), t.addUserMessage(d);
      const m = t.currentSession.modeState.currentUIState;
      (m === "idle" || m === "interview_waiting") && t.setUIState("interview_running");
      const c = t.getMessages(), h = [{ id: S(), role: "system", content: me }, ...c.map((x) => ({ id: x.id, role: x.role, content: x.content }))];
      let o = "";
      t.clearStreamingContent(), await s.callLLMStream(h, (x, y) => {
        o = y, t.setStreamingContent(y);
      });
      const a = o.includes("[INFO_COMPLETE]"), l = o.replace("[INFO_COMPLETE]", "").trim();
      t.addAssistantMessage(l), t.clearStreamingContent(), a ? t.setUIState("description_confirming") : t.setUIState("interview_waiting");
    } catch (m) {
      console.error("Chat Create Character Error:", m), C.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", { duration: 5e3, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => r({ to: "/config/llm" }) } }), t.setUIState("interview_waiting");
    } finally {
      i.current = false, t.setLoading(false);
    }
  }, [s, r]), j = u.useCallback(async () => {
    if (!(i.current || !t.currentSession)) try {
      i.current = true, t.setLoading(true), t.setUIState("description_generating");
      const d = t.getMessages(), m = [{ id: S(), role: "system", content: ue }, ...d.map((h) => ({ id: h.id, role: h.role, content: h.content })), { id: S(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\u3002" }];
      let c = "";
      t.clearStreamingContent(), await s.callLLMStream(m, (h, o) => {
        c = o, t.setStreamingContent(o);
      }), t.setGeneratedDescription(c), t.addAssistantMessage(c, "description_summary"), t.clearStreamingContent(), t.setUIState("description_confirming");
    } catch (d) {
      console.error("Generate Description Error:", d), C.error("\u751F\u6210\u63CF\u8FF0\u5931\u8D25"), t.setUIState("interview_waiting");
    } finally {
      i.current = false, t.setLoading(false);
    }
  }, [s]), f = u.useCallback(async () => {
    if (!(i.current || !t.currentSession)) try {
      i.current = true, t.setLoading(true), t.setUIState("json_generating");
      const d = t.getMessages(), m = t.currentSession.modeState.generatedDescription, c = [{ id: S(), role: "system", content: pe }, ...d.map((o) => ({ id: o.id, role: o.role, content: o.content }))];
      m && c.push({ id: S(), role: "assistant", content: `\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\uFF1A
${m}` }), c.push({ id: S(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u4FE1\u606F\uFF0C\u751F\u6210\u89D2\u8272\u5361 JSON\u3002\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\u3002" });
      let h = "";
      await s.callLLMStream(c, (o, a) => {
        h = a, t.setStreamingContent(a);
      });
      try {
        let o = h;
        const a = h.match(/```(?:json)?\s*([\s\S]*?)```/);
        a && (o = a[1].trim());
        const l = JSON.parse(o), x = Date.now(), y = { id: `char-${x}`, name: l.name || "\u672A\u547D\u540D\u89D2\u8272", description: l.description || "", personality: l.personality || "", scenario: l.scenario || "", first_mes: l.first_mes || "", mes_example: l.mes_example || "", creator_notes: l.creator_notes || "", system_prompt: l.system_prompt || "", post_history_instructions: l.post_history_instructions || "", alternate_greetings: l.alternate_greetings || [], group_only_greetings: l.group_only_greetings || [], tags: l.tags || [], extensions: l.extensions || {}, creator: "User", character_version: "1.0", createdAt: x, updatedAt: x };
        t.setGeneratedJson(y), t.clearStreamingContent(), t.setUIState("json_editing"), C.success("\u89D2\u8272\u5361\u751F\u6210\u6210\u529F\uFF01");
      } catch (o) {
        console.error("JSON Parse Error:", o), C.error("JSON \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), t.setUIState("description_confirming");
      }
    } catch (d) {
      console.error("Generate JSON Error:", d), C.error("\u751F\u6210\u89D2\u8272\u5361\u5931\u8D25"), t.setUIState("description_confirming");
    } finally {
      i.current = false, t.setLoading(false);
    }
  }, [s]), p = u.useCallback(() => {
    t.setUIState("json_confirmed");
  }, []), w = u.useCallback(async () => {
    await f();
  }, [f]);
  return { store: b, sendMessage: _, generateDescription: j, generateJson: f, confirmJson: p, regenerateJson: w, isLoading: b.isLoading, streamingContent: b.streamingContent };
}
function ge() {
  var _a, _b, _c, _d;
  const s = T(), r = R(t), { sendMessage: i, generateDescription: b, generateJson: _, confirmJson: j, regenerateJson: f, isLoading: p, streamingContent: w } = he(), [d, m] = u.useState("");
  u.useEffect(() => (t.currentSession || t.startNewSession(), () => {
  }), []);
  const c = ((_a = r.currentSession) == null ? void 0 : _a.modeState.currentUIState) ?? "idle", h = ie[c], o = ((_b = r.currentSession) == null ? void 0 : _b.modeState.messages) ?? [], a = (_c = r.currentSession) == null ? void 0 : _c.modeState.generatedJson, l = u.useCallback(async () => {
    if (!d.trim() || p) return;
    const n = d.trim();
    m(""), await i(n);
  }, [d, p, i]), x = u.useCallback((n) => {
    n.key === "Enter" && !n.shiftKey && (n.preventDefault(), l());
  }, [l]), y = u.useCallback(() => {
    if (!a) return;
    const n = new Blob([JSON.stringify(a, null, 2)], { type: "application/json" }), E = URL.createObjectURL(n), I = document.createElement("a");
    I.href = E, I.download = `${a.name || "character"}.json`, I.click(), URL.revokeObjectURL(E), C.success("\u89D2\u8272\u5361\u5DF2\u5BFC\u51FA");
  }, [a]), G = u.useCallback(async () => {
    if (a) try {
      const n = JSON.parse(JSON.stringify(a));
      await q.characters.add(n), C.success(`\u89D2\u8272 ${n.name} \u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A`), t.setUIState("completed"), s({ to: "/plaza/characters" });
    } catch (n) {
      console.error("Add to plaza error:", n), C.error("\u6DFB\u52A0\u5931\u8D25");
    }
  }, [a, s]), z = u.useCallback(() => {
    t.endSession(), s({ to: "/create" });
  }, [s]), B = u.useCallback(() => {
    t.resetSession();
  }, []);
  return e.jsxs("div", { className: "flex flex-col h-full max-h-[calc(100vh-4rem)]", children: [e.jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx(g, { type: "button", variant: "ghost", size: "icon", onClick: z, children: e.jsx(te, { className: "w-5 h-5" }) }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-lg font-semibold", children: "\u804A\u5929\u5F0F\u521B\u5EFA\u89D2\u8272" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u521B\u5EFA\u89D2\u8272\u5361" })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(J, { variant: "outline", children: h.label }), o.length > 0 && e.jsx(g, { type: "button", variant: "outline", size: "sm", onClick: B, children: "\u91CD\u65B0\u5F00\u59CB" })] })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [o.length === 0 && !w && e.jsxs("div", { className: "text-center text-muted-foreground py-12", children: [e.jsx(U, { className: "w-12 h-12 mx-auto mb-4 opacity-50" }), e.jsx("p", { children: "\u5F00\u59CB\u63CF\u8FF0\u4F60\u60F3\u521B\u5EFA\u7684\u89D2\u8272\u5427\uFF01" }), e.jsx("p", { className: "text-sm mt-2", children: "\u4F8B\u5982\uFF1A\u6211\u60F3\u521B\u5EFA\u4E00\u4E2A\u6E29\u67D4\u7684\u56FE\u4E66\u9986\u7BA1\u7406\u5458..." })] }), o.map((n) => e.jsxs("div", { className: F("max-w-[80%] rounded-lg p-3", n.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"), children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: n.content }), n.messageType === "description_summary" && e.jsx(J, { variant: "secondary", className: "mt-2", children: "\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3" })] }, n.id)), w && e.jsxs("div", { className: "max-w-[80%] rounded-lg p-3 bg-muted", children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: w }), e.jsx("span", { className: "inline-block w-2 h-4 bg-foreground/50 animate-pulse ml-1" })] })] }), e.jsxs("div", { className: "p-4 border-t space-y-3", children: [e.jsxs("div", { className: "flex flex-wrap gap-2", children: [c === "description_confirming" && e.jsxs(e.Fragment, { children: [e.jsxs(g, { type: "button", size: "sm", onClick: _, disabled: p, children: [e.jsx(M, { className: "w-4 h-4 mr-1" }), "\u786E\u8BA4\u5E76\u751F\u6210\u89D2\u8272\u5361"] }), e.jsxs(g, { type: "button", size: "sm", variant: "outline", onClick: b, disabled: p, children: [e.jsx(O, { className: "w-4 h-4 mr-1" }), "\u91CD\u65B0\u751F\u6210\u63CF\u8FF0"] })] }), (c === "interview_waiting" || c === "idle") && o.length > 2 && e.jsxs(g, { type: "button", size: "sm", variant: "secondary", onClick: _, disabled: p, children: [e.jsx(U, { className: "w-4 h-4 mr-1" }), "\u7ACB\u5373\u751F\u6210\u89D2\u8272\u5361"] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(P, { value: d, onChange: (n) => m(n.target.value), onKeyDown: x, placeholder: h.placeholder, disabled: !h.inputEnabled || p, className: "min-h-[60px] max-h-[120px] resize-none" }), e.jsx(g, { type: "button", size: "icon", onClick: l, disabled: !h.inputEnabled || p || !d.trim(), children: e.jsx(se, { className: "w-4 h-4" }) })] })] })] }), (c === "json_editing" || c === "json_confirmed" || c === "completed") && a && e.jsxs("div", { className: "w-96 border-l overflow-y-auto p-4 space-y-4", children: [e.jsxs(V, { children: [e.jsx(K, { className: "pb-2", children: e.jsxs(Y, { className: "text-base flex items-center justify-between", children: ["\u89D2\u8272\u5361\u9884\u89C8", e.jsx("div", { className: "flex gap-1", children: e.jsx(g, { type: "button", size: "icon", variant: "ghost", onClick: f, disabled: p, title: "\u91CD\u65B0\u751F\u6210", children: e.jsx(O, { className: "w-4 h-4" }) }) })] }) }), e.jsxs(H, { className: "space-y-3", children: [e.jsx(N, { label: "\u540D\u79F0", value: a.name, onChange: (n) => t.updateGeneratedJsonField("name", n) }), e.jsx(N, { label: "\u63CF\u8FF0", value: a.description, multiline: true, onChange: (n) => t.updateGeneratedJsonField("description", n) }), e.jsx(N, { label: "\u6027\u683C", value: a.personality, onChange: (n) => t.updateGeneratedJsonField("personality", n) }), e.jsx(N, { label: "\u573A\u666F", value: a.scenario, onChange: (n) => t.updateGeneratedJsonField("scenario", n) }), e.jsx(N, { label: "\u5F00\u573A\u767D", value: a.first_mes, multiline: true, onChange: (n) => t.updateGeneratedJsonField("first_mes", n) }), e.jsx(N, { label: "\u7CFB\u7EDF\u63D0\u793A\u8BCD", value: a.system_prompt, multiline: true, onChange: (n) => t.updateGeneratedJsonField("system_prompt", n) }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u6807\u7B7E" }), e.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: (_d = a.tags) == null ? void 0 : _d.map((n, E) => e.jsx(J, { variant: "secondary", className: "text-xs", children: n }, E)) })] })] })] }), c !== "completed" && e.jsxs("div", { className: "flex flex-col gap-2", children: [e.jsxs(g, { type: "button", onClick: G, className: "w-full", children: [e.jsx(ne, { className: "w-4 h-4 mr-2" }), "\u6DFB\u52A0\u5230\u5E7F\u573A"] }), e.jsxs(g, { type: "button", variant: "outline", onClick: y, className: "w-full", children: [e.jsx(ae, { className: "w-4 h-4 mr-2" }), "\u5BFC\u51FA\u4E3A\u6587\u4EF6"] }), c === "json_editing" && e.jsxs(g, { type: "button", variant: "secondary", onClick: j, className: "w-full", children: [e.jsx(M, { className: "w-4 h-4 mr-2" }), "\u786E\u8BA4\u5B8C\u6210\u7F16\u8F91"] })] }), c === "completed" && e.jsxs("div", { className: "text-center text-muted-foreground py-4", children: [e.jsx(M, { className: "w-8 h-8 mx-auto mb-2 text-green-500" }), e.jsx("p", { children: "\u89D2\u8272\u5361\u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A\uFF01" })] })] })] })] });
}
function N({ label: s, value: r, multiline: i = false, onChange: b }) {
  const [_, j] = u.useState(false), [f, p] = u.useState(r), w = () => {
    b(f), j(false);
  }, d = () => {
    p(r), j(false);
  };
  return _ ? e.jsxs("div", { className: "space-y-1", children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: s }), i ? e.jsx(P, { value: f, onChange: (m) => p(m.target.value), className: "text-sm min-h-[60px]", autoFocus: true }) : e.jsx("input", { type: "text", value: f, onChange: (m) => p(m.target.value), className: "w-full text-sm border rounded px-2 py-1 bg-background", autoFocus: true }), e.jsxs("div", { className: "flex gap-1", children: [e.jsx(g, { type: "button", size: "sm", variant: "ghost", onClick: w, children: "\u4FDD\u5B58" }), e.jsx(g, { type: "button", size: "sm", variant: "ghost", onClick: d, children: "\u53D6\u6D88" })] })] }) : e.jsxs("div", { className: "cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors", onClick: () => {
    p(r), j(true);
  }, children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: s }), e.jsx("p", { className: F("text-sm", i ? "whitespace-pre-wrap line-clamp-3" : "truncate"), children: r || e.jsx("span", { className: "text-muted-foreground italic", children: "\u70B9\u51FB\u7F16\u8F91" }) })] });
}
function Re() {
  return e.jsx(ge, {});
}
export {
  Re as component
};
