import { D as V, r as m, E as P, t as C, j as e } from "./react-BQpw03Eg.js";
import { f as A } from "./@tanstack-B4B5CfFY.js";
import { B as g } from "./button-B9brLUSp.js";
import { T as R } from "./textarea-D6rL78Aw.js";
import { C as $, a as K, b as Y, d as H } from "./card-ClPZDGV4.js";
import { B as M } from "./badge-DvaSwOwN.js";
import { c as G } from "./shadcn-utils-BMZD7_jZ.js";
import { n as b } from "./id-OxPLOBIU.js";
import { b as q, m as Q } from "./db-master-l33tB5ke.js";
import { _ as L, o as I, n as D, s as _, b as W, a as X, l as Z } from "./zod-fbN9ubnj.js";
import { u as ee } from "./useLLM-D0SorjDU.js";
import { A as te, i as O, g as J, R as U, Q as se, P as ne, D as ae } from "./icons-BC63ChG4.js";
import "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-B3Kybfa7.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./global-llm-config.store-DiEUj8Zz.js";
import "./es-toolkit-CstbrnlE.js";
import "./app-configurations-Cz44104t.js";
const re = L(["idle", "interview_running", "interview_waiting", "description_generating", "description_confirming", "json_generating", "json_editing", "json_confirmed", "completed"]), ie = { idle: { label: "\u5F00\u59CB", placeholder: "\u63CF\u8FF0\u4E00\u4E0B\u4F60\u60F3\u521B\u5EFA\u7684\u6311\u6218\u5427...", inputEnabled: true }, interview_running: { label: "\u52A9\u7406\u56DE\u590D\u4E2D", placeholder: "\u52A9\u7406\u6B63\u5728\u601D\u8003...", inputEnabled: false }, interview_waiting: { label: "\u7EE7\u7EED\u63CF\u8FF0", placeholder: "\u7EE7\u7EED\u63CF\u8FF0\u4F60\u7684\u6311\u6218\uFF0C\u6216\u56DE\u7B54\u52A9\u7406\u7684\u95EE\u9898...", inputEnabled: true }, description_generating: { label: "\u751F\u6210\u8BBE\u8BA1\u4E2D", placeholder: "\u6B63\u5728\u6574\u7406\u6311\u6218\u8BBE\u8BA1...", inputEnabled: false }, description_confirming: { label: "\u786E\u8BA4\u8BBE\u8BA1", placeholder: "\u786E\u8BA4\u8BBE\u8BA1\u65E0\u8BEF\uFF0C\u6216\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9...", inputEnabled: true }, json_generating: { label: "\u751F\u6210\u6311\u6218\u5361\u4E2D", placeholder: "\u6B63\u5728\u751F\u6210\u6311\u6218\u5361\u6570\u636E...", inputEnabled: false }, json_editing: { label: "\u7F16\u8F91\u6311\u6218\u5361", placeholder: "\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9\uFF0C\u6216\u76F4\u63A5\u5728\u53F3\u4FA7\u7F16\u8F91...", inputEnabled: true }, json_confirmed: { label: "\u6311\u6218\u5361\u5DF2\u5C31\u7EEA", placeholder: "\u6311\u6218\u5361\u5DF2\u751F\u6210\uFF0C\u53EF\u4EE5\u5BFC\u51FA\u6216\u6DFB\u52A0\u5230\u5E7F\u573A", inputEnabled: false }, completed: { label: "\u5B8C\u6210", placeholder: "\u6311\u6218\u5361\u521B\u5EFA\u5B8C\u6210\uFF01", inputEnabled: false } }, oe = I({ id: _().describe("\u6D88\u606FID"), role: L(["user", "assistant", "system"]).describe("\u6D88\u606F\u89D2\u8272"), content: _().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: D().describe("\u65F6\u95F4\u6233"), messageType: L(["chat", "description_summary", "json_preview"]).optional().describe("\u6D88\u606F\u7C7B\u578B") }), ce = I({ presetHint: _().optional().describe("\u9884\u8BBE\u7684\u6311\u6218\u7C7B\u578B\u63D0\u793A"), preselectedCharacterId: _().optional().describe("\u9884\u9009\u7684\u89D2\u8272 ID") }), le = I({ currentUIState: re.describe("\u5F53\u524D UI \u72B6\u6001"), messages: X(oe).describe("\u5BF9\u8BDD\u5386\u53F2"), generatedDescription: _().optional().describe("\u751F\u6210\u7684\u8BBE\u8BA1\u603B\u7ED3"), generatedJson: q.optional().describe("\u751F\u6210\u7684\u6311\u6218\u5361 JSON"), descriptionConfirmed: W().default(false).describe("\u7528\u6237\u662F\u5426\u5DF2\u786E\u8BA4\u8BBE\u8BA1") });
I({ id: _().describe("\u4F1A\u8BDDID"), mode: Z("chat-create-challenge").describe("\u6A21\u5F0F\u6807\u8BC6"), modeConfig: ce.describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: le.describe("\u6A21\u5F0F\u72B6\u6001"), createdAt: D().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: D().describe("\u66F4\u65B0\u65F6\u95F4") });
function T() {
  return { currentUIState: "idle", messages: [], descriptionConfirmed: false };
}
const t = V({ currentSession: null, isLoading: false, streamingContent: "", startNewSession(n, o) {
  const r = Date.now(), x = { id: `chat-create-chal-${r}`, mode: "chat-create-challenge", modeConfig: { presetHint: n, preselectedCharacterId: o }, modeState: T(), createdAt: r, updatedAt: r };
  return this.currentSession = x, this.isLoading = false, this.streamingContent = "", x;
}, getState() {
  var _a;
  return ((_a = this.currentSession) == null ? void 0 : _a.modeState) ?? null;
}, getMessages() {
  var _a;
  return ((_a = this.currentSession) == null ? void 0 : _a.modeState.messages) ?? [];
}, addUserMessage(n) {
  const o = { id: b(), role: "user", content: n, timestamp: Date.now(), messageType: "chat" };
  return this.currentSession && (this.currentSession.modeState.messages.push(o), this.currentSession.updatedAt = Date.now()), o;
}, addAssistantMessage(n, o = "chat") {
  const r = { id: b(), role: "assistant", content: n, timestamp: Date.now(), messageType: o };
  return this.currentSession && (this.currentSession.modeState.messages.push(r), this.currentSession.updatedAt = Date.now()), r;
}, setUIState(n) {
  this.currentSession && (this.currentSession.modeState.currentUIState = n, this.currentSession.updatedAt = Date.now());
}, setGeneratedDescription(n) {
  this.currentSession && (this.currentSession.modeState.generatedDescription = n, this.currentSession.updatedAt = Date.now());
}, setGeneratedJson(n) {
  this.currentSession && (this.currentSession.modeState.generatedJson = n, this.currentSession.updatedAt = Date.now());
}, updateGeneratedJsonField(n, o) {
  var _a;
  ((_a = this.currentSession) == null ? void 0 : _a.modeState.generatedJson) && (this.currentSession.modeState.generatedJson[n] = o, this.currentSession.updatedAt = Date.now());
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
  this.currentSession && (this.currentSession.modeState = T(), this.currentSession.updatedAt = Date.now()), this.isLoading = false, this.streamingContent = "";
} }), de = `\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u7684\u6311\u6218\u8BBE\u8BA1\u987E\u95EE\u3002\u4F60\u7684\u4EFB\u52A1\u662F\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u7528\u6237\u521B\u5EFA\u4E00\u4E2A\u6311\u6218\u5361\u3002

\u4F60\u9700\u8981\u6536\u96C6\u4EE5\u4E0B\u4FE1\u606F\uFF1A
1. \u6311\u6218\u7684\u57FA\u672C\u6982\u5FF5\uFF08\u540D\u79F0\u3001\u4E3B\u9898\u3001\u6545\u4E8B\u80CC\u666F\uFF09
2. \u6311\u6218\u7684\u76EE\u6807\uFF08\u73A9\u5BB6\u9700\u8981\u8FBE\u6210\u4EC0\u4E48\uFF09
3. \u6311\u6218\u7684\u5931\u8D25\u6761\u4EF6\uFF08\u4EC0\u4E48\u60C5\u51B5\u4E0B\u7B97\u5931\u8D25\uFF09
4. \u9700\u8981\u8FFD\u8E2A\u7684\u53D8\u91CF\uFF08\u5982\u597D\u611F\u5EA6\u3001\u91D1\u94B1\u3001\u65F6\u95F4\u7B49\uFF0C\u5305\u62EC\u521D\u59CB\u503C\u548C\u8303\u56F4\uFF09
5. \u89D2\u8272\u5728\u6311\u6218\u4E2D\u7684\u884C\u4E3A\u65B9\u5F0F\uFF08roleTaskPrompt\uFF09
6. \u7ED9\u73A9\u5BB6\u7684\u5F15\u5BFC\u63D0\u793A\uFF08userGuidance\uFF09
7. \u96BE\u5EA6\u548C\u9884\u671F\u4F53\u9A8C

\u8BF7\u7528\u53CB\u597D\u3001\u4E13\u4E1A\u7684\u8BED\u6C14\u4E0E\u7528\u6237\u4EA4\u6D41\uFF0C\u4E00\u6B21\u53EA\u95EE 1-2 \u4E2A\u95EE\u9898\u3002
\u5E2E\u52A9\u7528\u6237\u8BBE\u8BA1\u6709\u8DA3\u4E14\u5E73\u8861\u7684\u6311\u6218\uFF0C\u7ED9\u51FA\u4E13\u4E1A\u5EFA\u8BAE\u3002
\u5F53\u4F60\u8BA4\u4E3A\u6536\u96C6\u7684\u4FE1\u606F\u8DB3\u591F\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u6311\u6218\u65F6\uFF0C\u5728\u56DE\u590D\u7684\u672B\u5C3E\u6DFB\u52A0 [INFO_COMPLETE] \u6807\u8BB0\u3002`, me = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u4E00\u4EFD\u5B8C\u6574\u7684\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3\u3002
\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA\uFF1A

## \u6311\u6218\u540D\u79F0
[\u6311\u6218\u540D\u5B57]

## \u6311\u6218\u63CF\u8FF0
[\u6311\u6218\u7684\u80CC\u666F\u6545\u4E8B\u548C\u60C5\u5883\u63CF\u8FF0]

## \u53D8\u91CF\u8BBE\u8BA1
| \u53D8\u91CF\u540D | \u7C7B\u578B | \u521D\u59CB\u503C | \u8303\u56F4 | \u8BF4\u660E |
|--------|------|--------|------|------|
[\u5217\u51FA\u6240\u6709\u9700\u8981\u8FFD\u8E2A\u7684\u53D8\u91CF]

## \u76EE\u6807\u6761\u4EF6
[\u5217\u51FA\u73A9\u5BB6\u9700\u8981\u8FBE\u6210\u7684\u76EE\u6807\u53CA\u5176\u6761\u4EF6]

## \u5931\u8D25\u6761\u4EF6
[\u5217\u51FA\u4F1A\u5BFC\u81F4\u5931\u8D25\u7684\u6761\u4EF6]

## \u89D2\u8272\u884C\u4E3A\u6307\u5BFC
[\u89D2\u8272\u5728\u6B64\u6311\u6218\u4E2D\u5E94\u8BE5\u5982\u4F55\u8868\u73B0]

## \u73A9\u5BB6\u5F15\u5BFC
[\u7ED9\u73A9\u5BB6\u7684\u63D0\u793A\u548C\u5EFA\u8BAE]

\u8BF7\u786E\u4FDD\u8BBE\u8BA1\u5408\u7406\u3001\u5E73\u8861\uFF0C\u80FD\u591F\u5E26\u6765\u6709\u8DA3\u7684\u6E38\u620F\u4F53\u9A8C\u3002`, ue = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u548C\u6311\u6218\u8BBE\u8BA1\uFF0C\u751F\u6210\u4E00\u4E2A\u7B26\u5408\u89C4\u8303\u7684\u6311\u6218\u5361 JSON\u3002

\u53D8\u91CF\u6761\u4EF6\u8868\u8FBE\u5F0F\u683C\u5F0F\uFF1A
- ['gt', 'varName', value] - \u5927\u4E8E
- ['gte', 'varName', value] - \u5927\u4E8E\u7B49\u4E8E
- ['lt', 'varName', value] - \u5C0F\u4E8E
- ['lte', 'varName', value] - \u5C0F\u4E8E\u7B49\u4E8E
- ['eq', 'varName', value] - \u7B49\u4E8E
- ['isTrue', 'varName'] - \u5E03\u5C14\u771F
- ['isFalse', 'varName'] - \u5E03\u5C14\u5047
- ['and', [...conditions]] - \u4E0E
- ['or', [...conditions]] - \u6216

\u8BF7\u4E25\u683C\u6309\u7167\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA JSON\uFF08\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\uFF09\uFF1A
{
  "name": "\u6311\u6218\u540D\u79F0",
  "description": "\u6311\u6218\u63CF\u8FF0",
  "characterId": "",
  "roleTaskPrompt": "\u89D2\u8272\u5728\u6311\u6218\u4E2D\u7684\u884C\u4E3A\u6307\u5BFC",
  "userGuidance": "\u7ED9\u73A9\u5BB6\u7684\u5F15\u5BFC\u63D0\u793A",
  "variables": {
    "\u53D8\u91CF\u540D": {
      "key": "\u53D8\u91CF\u540D",
      "type": "number",
      "description": "\u53D8\u91CF\u8BF4\u660E",
      "hidden": false,
      "initial": 0,
      "min": 0,
      "max": 100
    }
  },
  "goals": [
    {
      "key": "goal_key",
      "description": "\u76EE\u6807\u63CF\u8FF0",
      "condition": ["gte", "\u53D8\u91CF\u540D", 100],
      "characterPrompt": "\u8FBE\u6210\u540E\u7ED9\u89D2\u8272\u7684\u63D0\u793A",
      "userInfo": "\u8FBE\u6210\u540E\u7ED9\u73A9\u5BB6\u7684\u4FE1\u606F"
    }
  ],
  "failureChecks": [
    {
      "key": "failure_key",
      "description": "\u5931\u8D25\u6761\u4EF6\u63CF\u8FF0",
      "condition": ["lte", "\u53D8\u91CF\u540D", 0],
      "characterPrompt": "\u5931\u8D25\u540E\u7ED9\u89D2\u8272\u7684\u63D0\u793A",
      "userInfo": "\u5931\u8D25\u540E\u7ED9\u73A9\u5BB6\u7684\u4FE1\u606F"
    }
  ],
  "tags": ["\u6807\u7B7E1", "\u6807\u7B7E2"]
}

\u786E\u4FDD JSON \u683C\u5F0F\u6B63\u786E\uFF0C\u6761\u4EF6\u8868\u8FBE\u5F0F\u8BED\u6CD5\u6B63\u786E\u3002`;
function pe() {
  const n = ee(), o = A(), r = m.useRef(false), x = P(t), w = m.useCallback(async (l) => {
    if (!(r.current || !t.currentSession)) try {
      r.current = true, t.setLoading(true), t.addUserMessage(l);
      const d = t.currentSession.modeState.currentUIState;
      (d === "idle" || d === "interview_waiting") && t.setUIState("interview_running");
      const c = t.getMessages(), p = [{ id: b(), role: "system", content: de }, ...c.map((f) => ({ id: f.id, role: f.role, content: f.content }))];
      let i = "";
      t.clearStreamingContent(), await n.callLLMStream(p, (f, y) => {
        i = y, t.setStreamingContent(y);
      });
      const a = i.includes("[INFO_COMPLETE]"), h = i.replace("[INFO_COMPLETE]", "").trim();
      t.addAssistantMessage(h), t.clearStreamingContent(), a ? t.setUIState("description_confirming") : t.setUIState("interview_waiting");
    } catch (d) {
      console.error("Chat Create Challenge Error:", d), C.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", { duration: 5e3, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => o({ to: "/config/llm" }) } }), t.setUIState("interview_waiting");
    } finally {
      r.current = false, t.setLoading(false);
    }
  }, [n, o]), N = m.useCallback(async () => {
    if (!(r.current || !t.currentSession)) try {
      r.current = true, t.setLoading(true), t.setUIState("description_generating");
      const l = t.getMessages(), d = [{ id: b(), role: "system", content: me }, ...l.map((p) => ({ id: p.id, role: p.role, content: p.content })), { id: b(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3\u3002" }];
      let c = "";
      t.clearStreamingContent(), await n.callLLMStream(d, (p, i) => {
        c = i, t.setStreamingContent(i);
      }), t.setGeneratedDescription(c), t.addAssistantMessage(c, "description_summary"), t.clearStreamingContent(), t.setUIState("description_confirming");
    } catch (l) {
      console.error("Generate Description Error:", l), C.error("\u751F\u6210\u8BBE\u8BA1\u603B\u7ED3\u5931\u8D25"), t.setUIState("interview_waiting");
    } finally {
      r.current = false, t.setLoading(false);
    }
  }, [n]), j = m.useCallback(async () => {
    if (!(r.current || !t.currentSession)) try {
      r.current = true, t.setLoading(true), t.setUIState("json_generating");
      const l = t.getMessages(), d = t.currentSession.modeState.generatedDescription, c = [{ id: b(), role: "system", content: ue }, ...l.map((i) => ({ id: i.id, role: i.role, content: i.content }))];
      d && c.push({ id: b(), role: "assistant", content: `\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3\uFF1A
${d}` }), c.push({ id: b(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u4FE1\u606F\uFF0C\u751F\u6210\u6311\u6218\u5361 JSON\u3002\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\u3002" });
      let p = "";
      await n.callLLMStream(c, (i, a) => {
        p = a, t.setStreamingContent(a);
      });
      try {
        let i = p;
        const a = p.match(/```(?:json)?\s*([\s\S]*?)```/);
        a && (i = a[1].trim());
        const h = JSON.parse(i), f = Date.now(), y = { id: `chal-${f}`, name: h.name || "\u672A\u547D\u540D\u6311\u6218", description: h.description || "", characterId: h.characterId || "", roleTaskPrompt: h.roleTaskPrompt || "", userGuidance: h.userGuidance || "", variables: h.variables || {}, goals: h.goals || [], failureChecks: h.failureChecks || [], tags: h.tags || [], createdAt: f, updatedAt: f };
        t.setGeneratedJson(y), t.clearStreamingContent(), t.setUIState("json_editing"), C.success("\u6311\u6218\u5361\u751F\u6210\u6210\u529F\uFF01");
      } catch (i) {
        console.error("JSON Parse Error:", i), C.error("JSON \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), t.setUIState("description_confirming");
      }
    } catch (l) {
      console.error("Generate JSON Error:", l), C.error("\u751F\u6210\u6311\u6218\u5361\u5931\u8D25"), t.setUIState("description_confirming");
    } finally {
      r.current = false, t.setLoading(false);
    }
  }, [n]), u = m.useCallback(() => {
    t.setUIState("json_confirmed");
  }, []), v = m.useCallback(async () => {
    await j();
  }, [j]);
  return { store: x, sendMessage: w, generateDescription: N, generateJson: j, confirmJson: u, regenerateJson: v, isLoading: x.isLoading, streamingContent: x.streamingContent };
}
function he() {
  var _a, _b, _c, _d;
  const n = A(), o = P(t), { sendMessage: r, generateDescription: x, generateJson: w, confirmJson: N, regenerateJson: j, isLoading: u, streamingContent: v } = pe(), [l, d] = m.useState("");
  m.useEffect(() => (t.currentSession || t.startNewSession(), () => {
  }), []);
  const c = ((_a = o.currentSession) == null ? void 0 : _a.modeState.currentUIState) ?? "idle", p = ie[c], i = ((_b = o.currentSession) == null ? void 0 : _b.modeState.messages) ?? [], a = (_c = o.currentSession) == null ? void 0 : _c.modeState.generatedJson, h = m.useCallback(async () => {
    if (!l.trim() || u) return;
    const s = l.trim();
    d(""), await r(s);
  }, [l, u, r]), f = m.useCallback((s) => {
    s.key === "Enter" && !s.shiftKey && (s.preventDefault(), h());
  }, [h]), y = m.useCallback(() => {
    if (!a) return;
    const s = new Blob([JSON.stringify(a, null, 2)], { type: "application/json" }), S = URL.createObjectURL(s), E = document.createElement("a");
    E.href = S, E.download = `${a.name || "challenge"}.json`, E.click(), URL.revokeObjectURL(S), C.success("\u6311\u6218\u5361\u5DF2\u5BFC\u51FA");
  }, [a]), z = m.useCallback(async () => {
    if (a) try {
      const s = JSON.parse(JSON.stringify(a));
      await Q.challenges.add(s), C.success(`\u6311\u6218 ${s.name} \u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A`), t.setUIState("completed"), n({ to: "/plaza/challenges" });
    } catch (s) {
      console.error("Add to plaza error:", s), C.error("\u6DFB\u52A0\u5931\u8D25");
    }
  }, [a, n]), F = m.useCallback(() => {
    t.endSession(), n({ to: "/create" });
  }, [n]), B = m.useCallback(() => {
    t.resetSession();
  }, []);
  return e.jsxs("div", { className: "flex flex-col h-full max-h-[calc(100vh-4rem)]", children: [e.jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx(g, { type: "button", variant: "ghost", size: "icon", onClick: F, children: e.jsx(te, { className: "w-5 h-5" }) }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-lg font-semibold", children: "\u804A\u5929\u5F0F\u521B\u5EFA\u6311\u6218" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u521B\u5EFA\u6311\u6218\u5361" })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(M, { variant: "outline", children: p.label }), i.length > 0 && e.jsx(g, { type: "button", variant: "outline", size: "sm", onClick: B, children: "\u91CD\u65B0\u5F00\u59CB" })] })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [i.length === 0 && !v && e.jsxs("div", { className: "text-center text-muted-foreground py-12", children: [e.jsx(O, { className: "w-12 h-12 mx-auto mb-4 opacity-50" }), e.jsx("p", { children: "\u5F00\u59CB\u63CF\u8FF0\u4F60\u60F3\u521B\u5EFA\u7684\u6311\u6218\u5427\uFF01" }), e.jsx("p", { className: "text-sm mt-2", children: "\u4F8B\u5982\uFF1A\u6211\u60F3\u521B\u5EFA\u4E00\u4E2A\u8BA8\u4EF7\u8FD8\u4EF7\u7684\u6311\u6218..." })] }), i.map((s) => e.jsxs("div", { className: G("max-w-[80%] rounded-lg p-3", s.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"), children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: s.content }), s.messageType === "description_summary" && e.jsx(M, { variant: "secondary", className: "mt-2", children: "\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3" })] }, s.id)), v && e.jsxs("div", { className: "max-w-[80%] rounded-lg p-3 bg-muted", children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: v }), e.jsx("span", { className: "inline-block w-2 h-4 bg-foreground/50 animate-pulse ml-1" })] })] }), e.jsxs("div", { className: "p-4 border-t space-y-3", children: [e.jsxs("div", { className: "flex flex-wrap gap-2", children: [c === "description_confirming" && e.jsxs(e.Fragment, { children: [e.jsxs(g, { type: "button", size: "sm", onClick: w, disabled: u, children: [e.jsx(J, { className: "w-4 h-4 mr-1" }), "\u786E\u8BA4\u5E76\u751F\u6210\u6311\u6218\u5361"] }), e.jsxs(g, { type: "button", size: "sm", variant: "outline", onClick: x, disabled: u, children: [e.jsx(U, { className: "w-4 h-4 mr-1" }), "\u91CD\u65B0\u751F\u6210\u8BBE\u8BA1"] })] }), (c === "interview_waiting" || c === "idle") && i.length > 2 && e.jsxs(g, { type: "button", size: "sm", variant: "secondary", onClick: w, disabled: u, children: [e.jsx(O, { className: "w-4 h-4 mr-1" }), "\u7ACB\u5373\u751F\u6210\u6311\u6218\u5361"] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(R, { value: l, onChange: (s) => d(s.target.value), onKeyDown: f, placeholder: p.placeholder, disabled: !p.inputEnabled || u, className: "min-h-[60px] max-h-[120px] resize-none" }), e.jsx(g, { type: "button", size: "icon", onClick: h, disabled: !p.inputEnabled || u || !l.trim(), children: e.jsx(se, { className: "w-4 h-4" }) })] })] })] }), (c === "json_editing" || c === "json_confirmed" || c === "completed") && a && e.jsxs("div", { className: "w-96 border-l overflow-y-auto p-4 space-y-4", children: [e.jsxs($, { children: [e.jsx(K, { className: "pb-2", children: e.jsxs(Y, { className: "text-base flex items-center justify-between", children: ["\u6311\u6218\u5361\u9884\u89C8", e.jsx("div", { className: "flex gap-1", children: e.jsx(g, { type: "button", size: "icon", variant: "ghost", onClick: j, disabled: u, title: "\u91CD\u65B0\u751F\u6210", children: e.jsx(U, { className: "w-4 h-4" }) }) })] }) }), e.jsxs(H, { className: "space-y-3", children: [e.jsx(k, { label: "\u540D\u79F0", value: a.name, onChange: (s) => t.updateGeneratedJsonField("name", s) }), e.jsx(k, { label: "\u63CF\u8FF0", value: a.description, multiline: true, onChange: (s) => t.updateGeneratedJsonField("description", s) }), e.jsx(k, { label: "\u89D2\u8272\u884C\u4E3A\u6307\u5BFC", value: a.roleTaskPrompt, multiline: true, onChange: (s) => t.updateGeneratedJsonField("roleTaskPrompt", s) }), e.jsx(k, { label: "\u73A9\u5BB6\u5F15\u5BFC", value: a.userGuidance, multiline: true, onChange: (s) => t.updateGeneratedJsonField("userGuidance", s) }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u53D8\u91CF" }), e.jsx("div", { className: "mt-1 space-y-1", children: Object.entries(a.variables || {}).map(([s, S]) => e.jsxs("div", { className: "text-xs bg-muted rounded p-2", children: [e.jsx("span", { className: "font-medium", children: s }), e.jsxs("span", { className: "text-muted-foreground ml-2", children: ["\u521D\u59CB\u503C:", " ", String(S.initial ?? 0)] })] }, s)) })] }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u76EE\u6807" }), e.jsx("div", { className: "mt-1 space-y-1", children: (a.goals || []).map((s, S) => e.jsx("div", { className: "text-xs bg-muted rounded p-2", children: e.jsx("span", { className: "font-medium", children: s.description }) }, S)) })] }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u5931\u8D25\u6761\u4EF6" }), e.jsx("div", { className: "mt-1 space-y-1", children: (a.failureChecks || []).map((s, S) => e.jsx("div", { className: "text-xs bg-muted rounded p-2", children: e.jsx("span", { className: "font-medium", children: s.description }) }, S)) })] }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u6807\u7B7E" }), e.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: (_d = a.tags) == null ? void 0 : _d.map((s, S) => e.jsx(M, { variant: "secondary", className: "text-xs", children: s }, S)) })] })] })] }), c !== "completed" && e.jsxs("div", { className: "flex flex-col gap-2", children: [e.jsxs(g, { type: "button", onClick: z, className: "w-full", children: [e.jsx(ne, { className: "w-4 h-4 mr-2" }), "\u6DFB\u52A0\u5230\u5E7F\u573A"] }), e.jsxs(g, { type: "button", variant: "outline", onClick: y, className: "w-full", children: [e.jsx(ae, { className: "w-4 h-4 mr-2" }), "\u5BFC\u51FA\u4E3A\u6587\u4EF6"] }), c === "json_editing" && e.jsxs(g, { type: "button", variant: "secondary", onClick: N, className: "w-full", children: [e.jsx(J, { className: "w-4 h-4 mr-2" }), "\u786E\u8BA4\u5B8C\u6210\u7F16\u8F91"] })] }), c === "completed" && e.jsxs("div", { className: "text-center text-muted-foreground py-4", children: [e.jsx(J, { className: "w-8 h-8 mx-auto mb-2 text-green-500" }), e.jsx("p", { children: "\u6311\u6218\u5361\u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A\uFF01" })] })] })] })] });
}
function k({ label: n, value: o, multiline: r = false, onChange: x }) {
  const [w, N] = m.useState(false), [j, u] = m.useState(o), v = () => {
    x(j), N(false);
  }, l = () => {
    u(o), N(false);
  };
  return w ? e.jsxs("div", { className: "space-y-1", children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: n }), r ? e.jsx(R, { value: j, onChange: (d) => u(d.target.value), className: "text-sm min-h-[60px]", autoFocus: true }) : e.jsx("input", { type: "text", value: j, onChange: (d) => u(d.target.value), className: "w-full text-sm border rounded px-2 py-1 bg-background", autoFocus: true }), e.jsxs("div", { className: "flex gap-1", children: [e.jsx(g, { type: "button", size: "sm", variant: "ghost", onClick: v, children: "\u4FDD\u5B58" }), e.jsx(g, { type: "button", size: "sm", variant: "ghost", onClick: l, children: "\u53D6\u6D88" })] })] }) : e.jsxs("div", { className: "cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors", onClick: () => {
    u(o), N(true);
  }, children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: n }), e.jsx("p", { className: G("text-sm", r ? "whitespace-pre-wrap line-clamp-3" : "truncate"), children: o || e.jsx("span", { className: "text-muted-foreground italic", children: "\u70B9\u51FB\u7F16\u8F91" }) })] });
}
function Te() {
  return e.jsx(he, {});
}
export {
  Te as component
};
