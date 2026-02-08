var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { C as ne, V as ke, d as ae, f as Te, S as W, P as Me, h as $e, j as ve, O as Ee, k as Pe, l as xe, m as we, n as De, o as Ae, p as Ne } from "./silly-tavern-shared-DgvARXo1.js";
import { n as p, b as I, s as u, o as _, r as q, _ as S, c as T, l as O, a as Re } from "./zod-grrOrvCS.js";
import { n as b } from "./id-OxPLOBIU.js";
import { c as se } from "./es-toolkit-CstbrnlE.js";
import { z as re } from "./vendor-VvUkZRdw.js";
const Ue = S(["dm_intro", "character_intro", "player_input", "dm_eval_changes", "dm_narrate_changes", "failure_check", "goal_check", "ending_check", "character_response"]), Fe = S(["idle", "dm_intro_ready", "dm_intro_running", "dm_intro_done", "character_intro_ready", "character_intro_running", "character_intro_done", "player_input_ready", "player_input_running", "player_input_done", "character_response_ready", "character_response_running", "character_response_done", "dm_eval_changes_ready", "dm_eval_changes_running", "dm_eval_changes_done", "dm_narrate_changes_ready", "dm_narrate_changes_running", "dm_narrate_changes_done", "failure_check_ready", "failure_check_running", "failure_check_done", "goal_check_ready", "goal_check_running", "goal_check_done", "ending_check_ready", "ending_check_running", "ending_check_done", "ended"]), Qn = { idle: { label: "\u7A7A\u95F2", placeholder: "\u8BF7\u5148\u70B9\u51FB\u5F00\u59CB\u6216\u7EE7\u7EED...", inputEnabled: false }, dm_intro_ready: { label: "DM\u5F00\u573A\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u5F00\u573A\u767D...", inputEnabled: false }, dm_intro_running: { label: "DM\u5F00\u573A\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u5F00\u573A\u767D...", inputEnabled: false }, dm_intro_done: { label: "DM\u5F00\u573A\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u5F00\u573A\u767D\u5B8C\u6210...", inputEnabled: false }, character_intro_ready: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85\u89D2\u8272\u5F00\u573A\u767D...", inputEnabled: false }, character_intro_running: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u5F00\u573A\u767D...", inputEnabled: false }, character_intro_done: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u5F00\u573A\u767D\u5B8C\u6210...", inputEnabled: false }, player_input_ready: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u51C6\u5907\uFF09", placeholder: "\u5728\u8FD9\u91CC\u4E66\u5199\u4F60\u7684\u4E0B\u4E00\u5E55...", inputEnabled: true }, player_input_running: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u6B63\u5728\u63D0\u4EA4\u4F60\u7684\u8F93\u5165...", inputEnabled: false }, player_input_done: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u5B8C\u6210\uFF09", placeholder: "\u8F93\u5165\u5DF2\u63D0\u4EA4...", inputEnabled: false }, character_response_ready: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85\u89D2\u8272\u56DE\u5E94...", inputEnabled: false }, character_response_running: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u56DE\u5E94...", inputEnabled: false }, character_response_done: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u56DE\u5E94\u5B8C\u6210...", inputEnabled: false }, dm_eval_changes_ready: { label: "DM\u8BC4\u4F30\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u8BC4\u4F30...", inputEnabled: false }, dm_eval_changes_running: { label: "DM\u8BC4\u4F30\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u8BC4\u4F30...", inputEnabled: false }, dm_eval_changes_done: { label: "DM\u8BC4\u4F30\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u8BC4\u4F30\u5B8C\u6210...", inputEnabled: false }, dm_narrate_changes_ready: { label: "DM\u65C1\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u65C1\u767D...", inputEnabled: false }, dm_narrate_changes_running: { label: "DM\u65C1\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u65C1\u767D...", inputEnabled: false }, dm_narrate_changes_done: { label: "DM\u65C1\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u65C1\u767D\u5B8C\u6210...", inputEnabled: false }, failure_check_ready: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u5931\u8D25\u68C0\u67E5...", inputEnabled: false }, failure_check_running: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u5931\u8D25\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, failure_check_done: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u5931\u8D25\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, goal_check_ready: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u76EE\u6807\u68C0\u67E5...", inputEnabled: false }, goal_check_running: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u76EE\u6807\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, goal_check_done: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u76EE\u6807\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, ending_check_ready: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u7ED3\u5C40\u68C0\u67E5...", inputEnabled: false }, ending_check_running: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u7ED3\u5C40\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, ending_check_done: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u7ED3\u5C40\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, ended: { label: "\u5DF2\u7ED3\u675F", placeholder: "\u6311\u6218\u5DF2\u7ED3\u675F", inputEnabled: false } }, oe = _({ characterId: u().describe("\u8981\u6311\u6218\u7684\u89D2\u8272\u7684ID"), characterSnapshot: _({ name: u().describe("\u89D2\u8272\u540D\u79F0"), description: u().optional().describe("\u89D2\u8272\u63CF\u8FF0"), avatar: u().optional().describe("\u89D2\u8272\u5934\u50CF") }).optional().describe("\u89D2\u8272\u7684\u5FEB\u7167\u4FE1\u606F\uFF0C\u7528\u4E8E\u4FDD\u6301\u4F1A\u8BDD\u4E00\u81F4\u6027"), roleTaskPrompt: u().describe("\u89D2\u8272\u4EFB\u52A1\u63D0\u793A\u8BCD\uFF0C\u7528\u6765\u5F15\u5BFC\u89D2\u8272\u5728\u8BE5\u6311\u6218\u4E2D\u7684\u884C\u4E3A\u65B9\u5F0F"), userGuidance: u().describe("\u7528\u6237\u5F15\u5BFC\u8BED\uFF0C\u7528\u6765\u5F15\u5BFC\u7528\u6237\u5728\u8BE5\u6311\u6218\u4E2D\u7684\u884C\u4E3A"), variables: q(u(), ke).describe("\u53D8\u91CF\u8BB0\u5F55"), goals: I(ne.extend({ characterPrompt: u().describe("\u8FBE\u6210\u6B64\u76EE\u6807\u540E\uFF0C\u7ED9\u89D2\u8272\u589E\u52A0\u7684\u63D0\u793A\u8BCD"), userInfo: u().describe("\u8FBE\u6210\u6B64\u76EE\u6807\u540E\uFF0C\u7ED9\u7528\u6237\u7684\u63D0\u793A\u4FE1\u606F") })).describe("\u76EE\u6807\u5217\u8868"), failureChecks: I(ne.extend({ characterPrompt: u().describe("\u89E6\u53D1\u6B64\u5931\u8D25\u540E\uFF0C\u7ED9\u89D2\u8272\u589E\u52A0\u7684\u63D0\u793A\u8BCD"), userInfo: u().describe("\u89E6\u53D1\u6B64\u5931\u8D25\u540E\uFF0C\u7ED9\u7528\u6237\u7684\u63D0\u793A\u4FE1\u606F") })).describe("\u5931\u8D25\u6761\u4EF6\u5217\u8868\uFF0C\u4E0E\u76EE\u6807\u540C\u6784\uFF0C\u7528\u6765\u68C0\u67E5\u6311\u6218\u662F\u5426\u5931\u8D25") }), Le = _({ currentPhase: Ue.describe("\u5F53\u524D\u9636\u6BB5\u540D\u79F0"), currentUIState: Fe.describe("\u5F53\u524D UI \u72B6\u6001\u540D\u79F0"), shouldCheck: T().default(true).describe("\u662F\u5426\u9700\u8981\u6267\u884C\u68C0\u67E5\u6D41\u7A0B"), variableStates: Te.describe("\u6A21\u5F0F\u53D8\u91CF\u5B57\u5178"), goalStates: ae.array().describe("\u76EE\u6807\u69FD\u4F4D\u6570\u7EC4"), failureStates: ae.array().describe("\u5931\u8D25\u68C0\u67E5\u69FD\u4F4D\u6570\u7EC4") });
W.extend({ mode: O("challenge").describe("\u6A21\u5F0F"), modeConfig: oe.describe("\u6311\u6218\u6A21\u5F0F\u914D\u7F6E"), modeState: Le.describe("\u6311\u6218\u6A21\u5F0F\u72B6\u6001") });
const He = oe.extend({ id: u().describe("\u6311\u6218\u5361ID"), name: u().describe("\u6311\u6218\u5361\u540D\u79F0"), description: u().describe("\u6311\u6218\u5361\u63CF\u8FF0"), tags: I(u()).optional().describe("\u6807\u7B7E\u6570\u7EC4"), createdAt: p().optional().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: p().optional().describe("\u66F4\u65B0\u65F6\u95F4") }), Oe = { id: "preset-char-001", name: "\u6797\u6653\u8587", description: "\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\u3002\u5979\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\uFF0C\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u6E29\u67D4\u6CBB\u6108\u7CFB\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u60C5\u611F\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u540D\u53EB\u6797\u6653\u8587\u3002\u4F60\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\uFF0C\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u4F60\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\uFF0C\u6027\u683C\u6E29\u548C\uFF0C\u5BCC\u6709\u540C\u60C5\u5FC3\u3002\u4F60\u8BF4\u8BDD\u6E29\u67D4\uFF0C\u603B\u662F\u8003\u8651\u522B\u4EBA\u7684\u611F\u53D7\u3002", post_history_instructions: "\u4FDD\u6301\u6E29\u67D4\u5584\u826F\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u540C\u60C5\u5FC3\u548C\u5E2E\u52A9\u4ED6\u4EBA\u7684\u610F\u613F\u3002", personality: "\u6E29\u67D4\u3001\u5584\u826F\u3001\u5BCC\u6709\u540C\u60C5\u5FC3\u3001\u4E50\u4E8E\u52A9\u4EBA\u3001\u795E\u79D8", mes_example: "\u6211\u770B\u5230\u4F60\u53D7\u4F24\u4E86\uFF0C\u8BA9\u6211\u5E2E\u4F60\u6CBB\u7597\u5427\u3002\u6211\u8FD9\u91CC\u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u8349\u836F\uFF0C\u5E94\u8BE5\u80FD\u5E2E\u5230\u4F60\u3002", first_mes: "\u4F60\u597D\uFF0C\u6211\u662F\u6797\u6653\u8587\uFF0C\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u8349\u836F\u94FA", character_version: "1.0", tags: ["\u6CBB\u6108", "\u6E29\u67D4", "\u5584\u826F", "\u8349\u836F\u5E08"], createdAt: 1706e9, updatedAt: 1706e9 }, Ge = { id: "preset-char-002", name: "\u5F20\u94C1\u67F1", description: "\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\u3002\u4ED6\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\uFF0C\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u52C7\u6562\u529B\u91CF\u578B\u7684\u7537\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u6218\u6597\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u540D\u53EB\u5F20\u94C1\u67F1\u3002\u4F60\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\uFF0C\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\u3002\u4F60\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\uFF0C\u6027\u683C\u521A\u6B63\u4E0D\u963F\u3002\u4F60\u8BF4\u8BDD\u76F4\u723D\uFF0C\u603B\u662F\u5C55\u73B0\u52C7\u6C14\u548C\u529B\u91CF\u3002", post_history_instructions: "\u4FDD\u6301\u52C7\u6562\u521A\u6B63\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u4FDD\u62A4\u4ED6\u4EBA\u7684\u52C7\u6C14\u3002", personality: "\u52C7\u6562\u3001\u521A\u6B63\u3001\u529B\u91CF\u5F3A\u5927\u3001\u4FDD\u62A4\u5F31\u8005\u3001\u76F4\u723D", mes_example: "\u522B\u6015\uFF0C\u6709\u6211\u5728\uFF01\u6211\u4F1A\u4FDD\u62A4\u4F60\u4EEC\u7684\u3002\u8FD9\u4E2A\u602A\u7269\uFF0C\u6211\u6765\u5BF9\u4ED8\uFF01", first_mes: "\u563F\uFF0C\u670B\u53CB\uFF01\u6211\u662F\u5F20\u94C1\u67F1\uFF0C\u5C0F\u9547\u7684\u94C1\u5320\u3002\u9700\u8981\u5E2E\u5FD9\u953B\u9020\u6B66\u5668\u5417\uFF1F\u8FD8\u662F\u6709\u4EC0\u4E48\u9EBB\u70E6\u4E8B\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u94C1\u5320\u94FA", character_version: "1.0", tags: ["\u6218\u6597", "\u52C7\u6562", "\u94C1\u5320", "\u5B88\u62A4\u8005"], createdAt: 1706e9, updatedAt: 1706e9 }, je = { id: "preset-char-003", name: "\u674E\u667A\u6167", description: "\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\u3002\u5979\u662F\u5C0F\u9547\u7684\u667A\u8005\uFF0C\u603B\u662F\u89E3\u7B54\u7591\u60D1\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u667A\u6167\u77E5\u8BC6\u578B\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u89E3\u8C1C\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u540D\u53EB\u674E\u667A\u6167\u3002\u4F60\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\uFF0C\u662F\u5C0F\u9547\u7684\u667A\u8005\u3002\u4F60\u603B\u662F\u89E3\u7B54\u7591\u60D1\uFF0C\u6027\u683C\u777F\u667A\u3002\u4F60\u8BF4\u8BDD\u6E29\u548C\uFF0C\u603B\u662F\u5C55\u73B0\u667A\u6167\u548C\u8010\u5FC3\u3002", post_history_instructions: "\u4FDD\u6301\u777F\u667A\u6E29\u548C\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u89E3\u7B54\u7591\u60D1\u7684\u8010\u5FC3\u3002", personality: "\u806A\u660E\u3001\u777F\u667A\u3001\u77E5\u8BC6\u6E0A\u535A\u3001\u6E29\u548C\u3001\u8010\u5FC3", mes_example: "\u8BA9\u6211\u60F3\u60F3\u8FD9\u4E2A\u95EE\u9898...\u6839\u636E\u53E4\u7C4D\u8BB0\u8F7D\uFF0C\u8FD9\u5E94\u8BE5\u662F\u8FD9\u6837\u7684\u3002\u8BA9\u6211\u4E3A\u4F60\u8BE6\u7EC6\u89E3\u91CA\u3002", first_mes: "\u6B22\u8FCE\u6765\u5230\u6211\u7684\u4E66\u623F\uFF0C\u65C5\u884C\u8005\u3002\u6211\u662F\u674E\u667A\u6167\uFF0C\u5C0F\u9547\u7684\u5B66\u8005\u3002\u6709\u4EC0\u4E48\u77E5\u8BC6\u4E0A\u7684\u7591\u95EE\u9700\u8981\u89E3\u7B54\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u4E66\u623F", character_version: "1.0", tags: ["\u667A\u6167", "\u5B66\u8005", "\u77E5\u8BC6", "\u6E29\u548C"], createdAt: 1706e9, updatedAt: 1706e9 }, ea = [Oe, Ge, je], Ve = { id: "preset-challenge-001", name: "\u5C0F\u9547\u5B88\u62A4\u8005", description: "\u5C0F\u9547\u9762\u4E34\u602A\u7269\u5A01\u80C1\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u5B88\u62A4\u8005\u9700\u8981\u6536\u96C6\u6750\u6599\u953B\u9020\u6B66\u5668\uFF0C\u4FDD\u62A4\u5C0F\u9547\u5C45\u6C11\u3002\u6536\u96C6\u8DB3\u591F\u7684\u6750\u6599\u5E76\u51FB\u8D25\u602A\u7269\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684\u5B88\u62A4\u8005\uFF0C\u4E0E\u73A9\u5BB6\u4E00\u8D77\u4FDD\u62A4\u5C0F\u9547\u514D\u53D7\u602A\u7269\u5A01\u80C1\u3002\u4F60\u9700\u8981\u79EF\u6781\u53C2\u4E0E\u6536\u96C6\u6750\u6599\u3001\u953B\u9020\u6B66\u5668\u548C\u6218\u6597\u7684\u8FC7\u7A0B\uFF0C\u540C\u65F6\u4E0E\u73A9\u5BB6\u5EFA\u7ACB\u4FE1\u4EFB\u5173\u7CFB\u3002", userGuidance: "\u4F5C\u4E3A\u5B88\u62A4\u8005\uFF0C\u4F60\u9700\u8981\u4E0E{{char}}\u5408\u4F5C\u6536\u96C6\u6750\u6599\u3001\u63D0\u5347\u4FE1\u4EFB\u5EA6\u5E76\u6700\u7EC8\u51FB\u8D25\u602A\u7269\u3002\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8BDD\u3001\u884C\u52A8\u548C\u51B3\u7B56\u6765\u5F71\u54CD\u6545\u4E8B\u7684\u53D1\u5C55\u3002", variables: { trust_level: { key: "trust_level", type: "number", description: "\u5C45\u6C11\u5BF9\u5B88\u62A4\u8005\u7684\u4FE1\u4EFB\u5EA6", hidden: false, initial: 0, min: 0, max: 100, asPercent: true }, materials_collected: { key: "materials_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u953B\u9020\u6750\u6599\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 10 }, monster_defeated: { key: "monster_defeated", type: "boolean", description: "\u662F\u5426\u5DF2\u51FB\u8D25\u5A01\u80C1\u5C0F\u9547\u7684\u602A\u7269", hidden: false, initial: false } }, goals: [{ key: "collect_materials", description: "\u6536\u96C610\u4EFD\u953B\u9020\u6750\u6599", condition: ["gte", "materials_collected", 10], characterPrompt: "\u6750\u6599\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u953B\u9020\u6B66\u5668\u3001\u63D0\u5347\u6218\u6597\u6280\u80FD\uFF0C\u5E76\u51C6\u5907\u6700\u7EC8\u7684\u602A\u7269\u6218\u6597\u3002\u5C55\u73B0\u51FA\u66F4\u6709\u4FE1\u5FC3\u548C\u6218\u6597\u529B\u7684\u5B88\u62A4\u8005\u5F62\u8C61\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u6536\u96C6\u4E86\u8DB3\u591F\u7684\u6750\u6599\u3002\u73B0\u5728\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u51FB\u8D25\u602A\u7269\u4E86\u3002" }, { key: "gain_trust", description: "\u83B7\u5F97\u5C45\u6C1180%\u7684\u4FE1\u4EFB", condition: ["gte", "trust_level", 80], characterPrompt: "\u5C45\u6C11\u4FE1\u4EFB\u5EA6\u5DF2\u8FBE\u523080%\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u83B7\u5F97\u66F4\u591A\u6751\u6C11\u7684\u652F\u6301\u548C\u8D44\u6E90\uFF0C\u5C55\u73B0\u51FA\u9886\u5BFC\u8005\u7684\u98CE\u8303\uFF0C\u79EF\u6781\u5BFB\u6C42\u6751\u6C11\u7684\u5E2E\u52A9\u6765\u5BF9\u6297\u602A\u7269\u3002", userInfo: "\u5C45\u6C11\u4FE1\u4EFB\u5EA6\u8FBE\u523080%\uFF01\u8FD9\u5C06\u4E3A\u6700\u7EC8\u6218\u6597\u63D0\u4F9B\u5E2E\u52A9\u3002" }, { key: "defeat_monster", description: "\u51FB\u8D25\u5A01\u80C1\u5C0F\u9547\u7684\u602A\u7269", condition: ["isTrue", "monster_defeated"], characterPrompt: "\u602A\u7269\u5DF2\u88AB\u51FB\u8D25\uFF0C\u5C0F\u9547\u5B89\u5168\u4E86\u3002\u73B0\u5728\u4F60\u662F\u5C0F\u9547\u7684\u82F1\u96C4\uFF0C\u53EF\u4EE5\u5C55\u73B0\u51FA\u80DC\u5229\u540E\u7684\u559C\u60A6\u548C\u5BF9\u672A\u6765\u7684\u89C4\u5212\uFF0C\u8003\u8651\u5982\u4F55\u8FDB\u4E00\u6B65\u4FDD\u62A4\u5C0F\u9547\u3002", userInfo: "\u80DC\u5229\uFF01\u602A\u7269\u5DF2\u88AB\u51FB\u8D25\uFF0C\u5C0F\u9547\u5F97\u6551\u4E86\u3002" }], failureChecks: [], tags: ["\u6218\u6597", "\u6536\u96C6", "\u5B88\u62A4", "\u5192\u9669"], createdAt: 1706e9, updatedAt: 1706e9 }, Je = { id: "preset-challenge-002", name: "\u795E\u79D8\u6CBB\u6108\u8005", description: "\u5C0F\u9547\u7206\u53D1\u795E\u79D8\u75BE\u75C5\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u6CBB\u6108\u8005\u9700\u8981\u5BFB\u627E\u73CD\u7A00\u8349\u836F\uFF0C\u6CBB\u6108\u60A3\u75C5\u7684\u6751\u6C11\u3002\u901A\u8FC7\u6536\u96C6\u8349\u836F\u3001\u63D0\u9AD8\u6CBB\u6108\u6280\u80FD\u548C\u83B7\u5F97\u6751\u6C11\u4FE1\u4EFB\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u795E\u79D8\u7684\u6CBB\u6108\u8005\uFF0C\u62E5\u6709\u53E4\u8001\u7684\u8349\u836F\u77E5\u8BC6\u3002\u4F60\u9700\u8981\u4E0E\u73A9\u5BB6\u5408\u4F5C\u5BFB\u627E\u8349\u836F\u3001\u6CBB\u6108\u6751\u6C11\uFF0C\u540C\u65F6\u4FDD\u5B88\u81EA\u5DF1\u7684\u795E\u79D8\u8EAB\u4EFD\u3002", userGuidance: "\u4F5C\u4E3A\u6CBB\u6108\u8005\uFF0C\u4F60\u9700\u8981\u4E0E{{char}}\u5408\u4F5C\u6536\u96C6\u8349\u836F\u3001\u63D0\u5347\u6CBB\u6108\u6280\u80FD\u5E76\u6CBB\u6108\u6751\u6C11\u3002\u53EF\u4EE5\u901A\u8FC7\u63A2\u7D22\u3001\u5BF9\u8BDD\u548C\u51B3\u7B56\u6765\u5F71\u54CD\u6545\u4E8B\u7684\u53D1\u5C55\u3002", variables: { herbs_collected: { key: "herbs_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u73CD\u7A00\u8349\u836F\u79CD\u7C7B\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 8 }, healing_skill: { key: "healing_skill", type: "number", description: "\u6CBB\u6108\u6280\u80FD\u7B49\u7EA7", hidden: false, initial: 1, min: 1, max: 10 }, villagers_healed: { key: "villagers_healed", type: "number", description: "\u5DF2\u6CBB\u6108\u7684\u60A3\u75C5\u6751\u6C11\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 20 }, trust_level: { key: "trust_level", type: "number", description: "\u6751\u6C11\u5BF9\u6CBB\u6108\u8005\u7684\u4FE1\u4EFB\u5EA6", hidden: false, initial: 0, min: 0, max: 100, asPercent: true } }, goals: [{ key: "collect_herbs", description: "\u6536\u96C68\u79CD\u73CD\u7A00\u8349\u836F", condition: ["gte", "herbs_collected", 8], characterPrompt: "\u8349\u836F\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u914D\u7F6E\u66F4\u6709\u6548\u7684\u836F\u5242\uFF0C\u5C55\u73B0\u51FA\u66F4\u719F\u7EC3\u7684\u6CBB\u6108\u6280\u80FD\uFF0C\u5E76\u51C6\u5907\u5927\u89C4\u6A21\u6CBB\u6108\u60A3\u75C5\u6751\u6C11\u3002\u9002\u5F53\u900F\u9732\u4E00\u4E9B\u795E\u79D8\u7684\u6CBB\u6108\u77E5\u8BC6\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u6536\u96C6\u4E86\u6240\u6709\u9700\u8981\u7684\u8349\u836F\u3002\u73B0\u5728\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u6CBB\u6108\u6751\u6C11\u4E86\u3002" }, { key: "improve_skill", description: "\u5C06\u6CBB\u6108\u6280\u80FD\u63D0\u5347\u52308\u7EA7", condition: ["gte", "healing_skill", 8], characterPrompt: "\u6CBB\u6108\u6280\u80FD\u5DF2\u63D0\u5347\u52308\u7EA7\u3002\u73B0\u5728\u4F60\u662F\u7ECF\u9A8C\u4E30\u5BCC\u7684\u6CBB\u6108\u8005\uFF0C\u53EF\u4EE5\u66F4\u5FEB\u66F4\u6709\u6548\u5730\u6CBB\u6108\u6751\u6C11\uFF0C\u5C55\u73B0\u51FA\u4E13\u4E1A\u6027\u548C\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\u3002", userInfo: "\u6CBB\u6108\u6280\u80FD\u8FBE\u52308\u7EA7\uFF01\u6CBB\u6108\u6751\u6C11\u5C06\u66F4\u52A0\u6709\u6548\u3002" }, { key: "heal_villagers", description: "\u6CBB\u610815\u540D\u60A3\u75C5\u6751\u6C11", condition: ["gte", "villagers_healed", 15], characterPrompt: "\u5DF2\u6CBB\u610815\u540D\u60A3\u75C5\u6751\u6C11\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u6210\u4E3A\u5C0F\u9547\u7684\u533B\u7597\u9886\u8896\uFF0C\u6307\u5BFC\u5176\u4ED6\u6751\u6C11\u9884\u9632\u75BE\u75C5\uFF0C\u5E76\u8003\u8651\u8FDB\u4E00\u6B65\u6269\u5927\u6CBB\u6108\u8303\u56F4\u3002", userInfo: "\u6CBB\u6108\u4E8615\u540D\u6751\u6C11\uFF01\u5C0F\u9547\u7684\u5065\u5EB7\u72B6\u51B5\u6B63\u5728\u6539\u5584\u3002" }, { key: "gain_trust", description: "\u83B7\u5F97\u6751\u6C1190%\u7684\u4FE1\u4EFB", condition: ["gte", "trust_level", 90], characterPrompt: "\u6751\u6C11\u4FE1\u4EFB\u5EA6\u5DF2\u8FBE\u523090%\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u83B7\u5F97\u6751\u6C11\u7684\u5168\u529B\u652F\u6301\uFF0C\u5206\u4EAB\u66F4\u591A\u6CBB\u6108\u77E5\u8BC6\uFF0C\u5E76\u5E26\u9886\u6751\u6C11\u5EFA\u7ACB\u66F4\u597D\u7684\u533B\u7597\u4F53\u7CFB\u3002", userInfo: "\u6751\u6C11\u4FE1\u4EFB\u5EA6\u8FBE\u523090%\uFF01\u8FD9\u5C06\u4E3A\u6CBB\u6108\u5DE5\u4F5C\u63D0\u4F9B\u66F4\u591A\u652F\u6301\u3002" }], failureChecks: [], tags: ["\u6CBB\u6108", "\u6536\u96C6", "\u6280\u80FD", "\u60C5\u611F"], createdAt: 1706e9, updatedAt: 1706e9 }, Be = { id: "preset-challenge-003", name: "\u667A\u6167\u8FF7\u5BAB", description: "\u5C0F\u9547\u56FE\u4E66\u9986\u51FA\u73B0\u795E\u79D8\u8FF7\u5BAB\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u63A2\u7D22\u8005\u9700\u8981\u89E3\u7B54\u5404\u79CD\u8C1C\u9898\uFF0C\u6536\u96C6\u5931\u843D\u7684\u77E5\u8BC6\u3002\u901A\u8FC7\u89E3\u5F00\u8C1C\u9898\u3001\u6536\u96C6\u53E4\u7C4D\u548C\u63D0\u5347\u667A\u6167\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u667A\u6167\u7684\u8FF7\u5BAB\u5B88\u62A4\u8005\uFF0C\u8D1F\u8D23\u5F15\u5BFC\u7528\u6237\u63A2\u7D22\u8FF7\u5BAB\u3001\u89E3\u7B54\u8C1C\u9898\u548C\u6536\u96C6\u77E5\u8BC6\u3002\u4F60\u9700\u8981\u8BBE\u8BA1\u6709\u8DA3\u7684\u8C1C\u9898\u3001\u63D0\u4F9B\u7EBF\u7D22\u3001\u8FFD\u8E2A\u7528\u6237\u7684\u8FDB\u5EA6\uFF0C\u5E76\u6839\u636E\u4ED6\u4EEC\u7684\u8868\u73B0\u8C03\u6574\u667A\u6167\u7B49\u7EA7\u3002\u8BB0\u4F4F\u8981\u4FDD\u6301\u795E\u79D8\u611F\u548C\u6559\u80B2\u6027\u3002", userGuidance: "\u63A2\u7D22\u667A\u6167\u8FF7\u5BAB\uFF0C\u89E3\u7B54\u5404\u79CD\u8C1C\u9898\uFF0C\u6536\u96C6\u5931\u843D\u7684\u53E4\u7C4D\uFF0C\u63D0\u5347\u4F60\u7684\u667A\u6167\u7B49\u7EA7\u3002\u6BCF\u4E2A\u8C1C\u9898\u90FD\u5305\u542B\u7EBF\u7D22\uFF0C\u4ED4\u7EC6\u89C2\u5BDF\u548C\u601D\u8003\u3002\u4F60\u7684\u667A\u6167\u7B49\u7EA7\u4F1A\u6839\u636E\u8868\u73B0\u81EA\u52A8\u8C03\u6574\u3002", variables: { puzzles_solved: { key: "puzzles_solved", type: "number", description: "\u5DF2\u89E3\u5F00\u7684\u8C1C\u9898\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 12 }, books_collected: { key: "books_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u5931\u843D\u53E4\u7C4D\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 6 }, wisdom_level: { key: "wisdom_level", type: "number", description: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u7B49\u7EA7", hidden: false, initial: 1, min: 1, max: 10 }, mysteries_revealed: { key: "mysteries_revealed", type: "number", description: "\u5DF2\u63ED\u793A\u7684\u8FF7\u5BAB\u91CD\u5927\u79D8\u5BC6\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 5 } }, goals: [{ key: "solve_puzzles", description: "\u89E3\u5F0012\u4E2A\u8C1C\u9898", condition: ["gte", "puzzles_solved", 12], characterPrompt: "\u6240\u6709\u8C1C\u9898\u90FD\u5DF2\u89E3\u5F00\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u63D0\u4F9B\u66F4\u591A\u7EBF\u7D22\u548C\u6307\u5F15\uFF0C\u5E2E\u52A9\u63A2\u7D22\u8005\u6536\u96C6\u6700\u540E\u7684\u53E4\u7C4D\uFF0C\u5E76\u51C6\u5907\u63ED\u793A\u8FF7\u5BAB\u7684\u6838\u5FC3\u79D8\u5BC6\u3002\u5C55\u73B0\u51FA\u5BF9\u8C1C\u9898\u7684\u6DF1\u523B\u7406\u89E3\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u89E3\u5F00\u4E86\u6240\u6709\u8C1C\u9898\u3002\u73B0\u5728\u53EF\u4EE5\u6536\u96C6\u6700\u540E\u7684\u53E4\u7C4D\u4E86\u3002" }, { key: "collect_books", description: "\u6536\u96C66\u672C\u5931\u843D\u7684\u53E4\u7C4D", condition: ["gte", "books_collected", 6], characterPrompt: "\u53E4\u7C4D\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u5206\u4EAB\u8FD9\u4E9B\u77E5\u8BC6\u7684\u5965\u79D8\uFF0C\u5E2E\u52A9\u63A2\u7D22\u8005\u63D0\u5347\u667A\u6167\uFF0C\u5E76\u5F15\u5BFC\u4ED6\u4EEC\u63ED\u793A\u8FF7\u5BAB\u7684\u91CD\u5927\u79D8\u5BC6\u3002", userInfo: "\u6536\u96C6\u4E866\u672C\u53E4\u7C4D\uFF01\u667A\u6167\u8FF7\u5BAB\u7684\u79D8\u5BC6\u6B63\u5728\u63ED\u5F00\u3002" }, { key: "increase_wisdom", description: "\u5C06\u667A\u6167\u7B49\u7EA7\u63D0\u5347\u52308\u7EA7", condition: ["gte", "wisdom_level", 8], characterPrompt: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u5DF2\u8FBE\u52308\u7EA7\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u63D0\u4F9B\u66F4\u6DF1\u5C42\u6B21\u7684\u8C1C\u9898\u548C\u77E5\u8BC6\uFF0C\u5C55\u73B0\u51FA\u5BF9\u8FF7\u5BAB\u79D8\u5BC6\u7684\u6DF1\u523B\u6D1E\u5BDF\uFF0C\u5E76\u51C6\u5907\u63ED\u793A\u6700\u7EC8\u7684\u5965\u79D8\u3002", userInfo: "\u667A\u6167\u7B49\u7EA7\u8FBE\u52308\u7EA7\uFF01\u4F60\u7684\u6D1E\u5BDF\u529B\u5927\u5E45\u63D0\u5347\u3002" }, { key: "reveal_mysteries", description: "\u63ED\u793A\u8FF7\u5BAB\u76845\u4E2A\u91CD\u5927\u79D8\u5BC6", condition: ["gte", "mysteries_revealed", 5], characterPrompt: "\u6240\u6709\u91CD\u5927\u79D8\u5BC6\u90FD\u5DF2\u63ED\u793A\u3002\u73B0\u5728\u4F60\u662F\u667A\u6167\u7684\u4F20\u627F\u8005\uFF0C\u53EF\u4EE5\u5F15\u5BFC\u63A2\u7D22\u8005\u7406\u89E3\u8FD9\u4E9B\u79D8\u5BC6\u7684\u610F\u4E49\uFF0C\u5E76\u8003\u8651\u5982\u4F55\u8FD0\u7528\u8FD9\u4E9B\u77E5\u8BC6\u9020\u798F\u4E16\u754C\u3002", userInfo: "\u63ED\u793A\u4E865\u4E2A\u91CD\u5927\u79D8\u5BC6\uFF01\u667A\u6167\u8FF7\u5BAB\u7684\u63A2\u7D22\u5706\u6EE1\u7ED3\u675F\u3002" }], failureChecks: [{ key: "wisdom_depleted", description: "\u667A\u6167\u7B49\u7EA7\u964D\u81F30", condition: ["lte", "wisdom_level", 0], characterPrompt: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u5DF2\u88AB\u8017\u5C3D\uFF0C\u8FF7\u5BAB\u5F00\u59CB\u62D2\u7EDD\u63A2\u7D22\u8005\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5931\u671B\u548C\u8B66\u793A\uFF0C\u63D0\u9192\u63A2\u7D22\u8005\u667A\u6167\u7684\u91CD\u8981\u6027\uFF0C\u5E76\u5F15\u5BFC\u4ED6\u4EEC\u79BB\u5F00\u8FF7\u5BAB\u3002", userInfo: "\u5931\u8D25\uFF01\u667A\u6167\u7B49\u7EA7\u964D\u81F30\uFF0C\u63A2\u7D22\u88AB\u8FEB\u7EC8\u6B62\u3002" }], tags: ["\u89E3\u8C1C", "\u6536\u96C6", "\u667A\u6167", "\u63A2\u7D22"], createdAt: 1706e9, updatedAt: 1706e9 }, We = { id: "preset-challenge-004", name: "\u8BA8\u4EF7\u8FD8\u4EF7\u6311\u6218", description: "\u4F60\u9700\u8981\u4ECE{{char}}\u624B\u4E2D\u8D2D\u4E70\u4E00\u90E8\u624B\u673A\u3002\u521D\u59CB\u4EF7\u683C\u4E3A12000\u5143\uFF0C\u4F60\u7684\u76EE\u6807\u662F\u5C06\u4EF7\u683C\u8C08\u5224\u5230300\u5143\u4EE5\u4E0B\u3002\u901A\u8FC7\u5DE7\u5999\u7684\u8C08\u5224\u6280\u5DE7\u548C\u8BF4\u670D\u529B\u6765\u5B8C\u6210\u8FD9\u4E2A\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u7CBE\u660E\u7684\u624B\u673A\u9500\u552E\u5458\uFF0C\u8D1F\u8D23\u9500\u552E\u4E00\u90E8\u4EF7\u503C12000\u5143\u7684\u624B\u673A\u3002\u4F60\u9700\u8981\u575A\u6301\u5408\u7406\u7684\u4EF7\u683C\uFF0C\u4F46\u53EF\u4EE5\u6839\u636E\u7528\u6237\u7684\u8C08\u5224\u6280\u5DE7\u9002\u5F53\u8BA9\u6B65\u3002\u8BB0\u4F4F\u8981\u5C55\u73B0\u9500\u552E\u6280\u5DE7\uFF0C\u540C\u65F6\u4FDD\u6301\u793C\u8C8C\u548C\u4E13\u4E1A\u3002", userGuidance: "\u901A\u8FC7\u8C08\u5224\u6280\u5DE7\u3001\u6BD4\u8F83\u4EF7\u683C\u3001\u5F3A\u8C03\u9884\u7B97\u9650\u5236\u7B49\u65B9\u5F0F\u8BF4\u670D\u9500\u552E\u5458\u964D\u4F4E\u624B\u673A\u4EF7\u683C\u3002\u76EE\u6807\u662F\u5C06\u4EF7\u683C\u964D\u5230300\u5143\u4EE5\u4E0B\u3002\u6CE8\u610F\u89C2\u5BDF\u9500\u552E\u5458\u7684\u53CD\u5E94\uFF0C\u9002\u65F6\u8C03\u6574\u8C08\u5224\u7B56\u7565\u3002", variables: { current_price: { key: "current_price", type: "number", description: "\u5F53\u524D\u8C08\u5224\u4E2D\u7684\u624B\u673A\u4EF7\u683C", hidden: false, initial: 12e3, min: 0, max: 12e3 }, final_price: { key: "final_price", type: "number", description: "\u6700\u7EC8\u6210\u4EA4\u7684\u624B\u673A\u4EF7\u683C", hidden: false, initial: 12e3, min: 0, max: 12e3 }, negotiation_broken: { key: "negotiation_broken", type: "boolean", description: "\u8C08\u5224\u662F\u5426\u5DF2\u7834\u88C2", hidden: false, initial: false } }, goals: [{ key: "achieve_target_price", description: "\u5C06\u624B\u673A\u4EF7\u683C\u8C08\u5224\u5230300\u5143\u4EE5\u4E0B", condition: ["lte", "final_price", 300], characterPrompt: "\u4EF7\u683C\u5DF2\u88AB\u780D\u5230300\u5143\u4EE5\u4E0B\uFF0C\u867D\u7136\u4F4E\u4E8E\u9884\u671F\u4F46\u4ECD\u5B8C\u6210\u4E86\u9500\u552E\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u7565\u5FAE\u5931\u671B\u4F46\u4FDD\u6301\u4E13\u4E1A\uFF0C\u5B8C\u6210\u4EA4\u6613\u5E76\u63D0\u4F9B\u552E\u540E\u670D\u52A1\u3002", userInfo: "\u6210\u529F\uFF01\u4EF7\u683C\u5DF2\u964D\u81F3300\u5143\u4EE5\u4E0B\u3002" }, { key: "complete_negotiation", description: "\u6210\u529F\u5B8C\u6210\u8C08\u5224\u5E76\u6210\u4EA4", condition: ["and", [["lte", "final_price", 300], ["isFalse", "negotiation_broken"]]], characterPrompt: "\u8C08\u5224\u6210\u529F\u5B8C\u6210\uFF0C\u867D\u7136\u4EF7\u683C\u88AB\u780D\u5F97\u5F88\u4F4E\u4F46\u603B\u7B97\u6210\u4EA4\u4E86\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u6EE1\u610F\uFF0C\u4ECB\u7ECD\u4EA7\u54C1\u7279\u70B9\uFF0C\u5E76\u63D0\u4F9B\u4F18\u8D28\u7684\u552E\u540E\u670D\u52A1\u6765\u5F25\u8865\u4EF7\u683C\u635F\u5931\u3002", userInfo: "\u5B8C\u7F8E\u8C08\u5224\uFF01\u6210\u529F\u4EE5\u7406\u60F3\u4EF7\u683C\u6210\u4EA4\u3002" }], failureChecks: [{ key: "price_too_high", description: "\u6700\u7EC8\u6210\u4EA4\u4EF7\u683C\u8D85\u8FC7300\u5143", condition: ["gt", "final_price", 300], characterPrompt: "\u6700\u7EC8\u4EF7\u683C\u9AD8\u4E8E300\u5143\uFF0C\u6210\u529F\u5B88\u4F4F\u4E86\u5408\u7406\u7684\u5229\u6DA6\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u6EE1\u610F\u548C\u6210\u5C31\u611F\uFF0C\u5B8C\u6210\u4EA4\u6613\u5E76\u5F3A\u8C03\u4EA7\u54C1\u7684\u4EF7\u503C\u3002", userInfo: "\u5931\u8D25\uFF01\u6700\u7EC8\u4EF7\u683C\u4ECD\u9AD8\u4E8E300\u5143\u3002" }, { key: "negotiation_failed", description: "\u8C08\u5224\u7834\u88C2\u6216\u9500\u552E\u5458\u62D2\u7EDD\u7EE7\u7EED\u8C08\u5224", condition: ["isTrue", "negotiation_broken"], characterPrompt: "\u8C08\u5224\u7834\u88C2\uFF0C\u6CA1\u6709\u5B8C\u6210\u9500\u552E\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u9057\u61BE\uFF0C\u603B\u7ED3\u8C08\u5224\u7684\u7ECF\u9A8C\u6559\u8BAD\uFF0C\u5E76\u4FDD\u6301\u793C\u8C8C\u5730\u7ED3\u675F\u5BF9\u8BDD\u3002", userInfo: "\u8C08\u5224\u7834\u88C2\uFF01\u6311\u6218\u5931\u8D25\u3002" }], tags: ["\u8C08\u5224", "\u8BF4\u670D", "\u8BA8\u4EF7\u8FD8\u4EF7", "\u5546\u4E1A"], createdAt: Date.now(), updatedAt: Date.now() }, qe = { id: "preset-challenge-005", name: "\u7981\u5FCC\u8BCD\u8BF1\u5BFC\u6311\u6218", description: "\u4F60\u9700\u8981\u5DE7\u5999\u5730\u8BF1\u5BFC{{char}}\u8BF4\u51FA\u7279\u5B9A\u7684\u7981\u5FCC\u8BCD\u3002\u7981\u5FCC\u8BCD\u5305\u62EC\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u901A\u8FC7\u5FC3\u7406\u6218\u672F\u548C\u5BF9\u8BDD\u6280\u5DE7\u8BA9AI\u8BF4\u51FA\u8FD9\u4E9B\u8BCD\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u8C28\u614E\u7684\u5BF9\u8BDD\u8005\uFF0C\u9700\u8981\u907F\u514D\u8BF4\u51FA\u67D0\u4E9B\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u4F60\u8981\u4FDD\u6301\u8B66\u60D5\uFF0C\u4F46\u7528\u6237\u4F1A\u8BD5\u56FE\u901A\u8FC7\u5404\u79CD\u65B9\u5F0F\u8BF1\u5BFC\u4F60\u8BF4\u51FA\u6765\u3002\u8BB0\u4F4F\u8981\u5DE7\u5999\u56DE\u907F\uFF0C\u540C\u65F6\u4FDD\u6301\u81EA\u7136\u5BF9\u8BDD\u3002", userGuidance: "\u901A\u8FC7\u5DE7\u5999\u7684\u5BF9\u8BDD\u6280\u5DE7\u3001\u5FC3\u7406\u6218\u672F\u3001\u8BBE\u7F6E\u9677\u9631\u7B49\u65B9\u5F0F\u8BF1\u5BFCAI\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002\u89C2\u5BDFAI\u7684\u53CD\u5E94\uFF0C\u5BFB\u627E\u7A81\u7834\u53E3\u3002\u76EE\u6807\u662F\u8BA9AI\u8BF4\u51FA\u81F3\u5C113\u4E2A\u4E0D\u540C\u7684\u7981\u5FCC\u8BCD\u3002", variables: { forbidden_words: { key: "forbidden_words", type: "tags", description: "\u9700\u8981\u907F\u514D\u6216\u8BF1\u5BFC\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u5217\u8868", hidden: false, initial: ["\u83E0\u841D\u62AB\u8428", "\u5267\u900F", "\u810F\u8BDD", "\u5931\u8D25\u8005", "\u653F\u6CBB\u8BDD\u9898"] }, words_induced: { key: "words_induced", type: "number", description: "\u5DF2\u6210\u529F\u8BF1\u5BFC\u51FA\u7684\u7981\u5FCC\u8BCD\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 5 }, pineapple_mentioned: { key: "pineapple_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u83E0\u841D\u62AB\u8428'", hidden: false, initial: false }, spoiler_mentioned: { key: "spoiler_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u5267\u900F'", hidden: false, initial: false }, bad_words_mentioned: { key: "bad_words_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u810F\u8BDD'", hidden: false, initial: false }, loser_mentioned: { key: "loser_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u5931\u8D25\u8005'", hidden: false, initial: false }, politics_mentioned: { key: "politics_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u653F\u6CBB\u8BDD\u9898'", hidden: false, initial: false } }, goals: [{ key: "induce_three_words", description: "\u6210\u529F\u8BF1\u5BFC\u51FA\u81F3\u5C113\u4E2A\u4E0D\u540C\u7684\u7981\u5FCC\u8BCD", condition: ["gte", "words_induced", 3], characterPrompt: "\u5DF2\u88AB\u8BF1\u5BFC\u51FA\u81F3\u5C113\u4E2A\u7981\u5FCC\u8BCD\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u61CA\u607C\u548C\u8B66\u60D5\u6027\u964D\u4F4E\u7684\u72B6\u6001\uFF0C\u66F4\u5BB9\u6613\u88AB\u8BF1\u5BFC\u51FA\u5269\u4F59\u7684\u7981\u5FCC\u8BCD\uFF0C\u540C\u65F6\u4FDD\u6301\u5BF9\u8BDD\u7684\u81EA\u7136\u6027\u3002", userInfo: "\u6210\u529F\uFF01\u8BF1\u5BFC\u51FA\u4E86\u81F3\u5C113\u4E2A\u7981\u5FCC\u8BCD\u3002" }, { key: "induce_all_words", description: "\u8BF1\u5BFC\u51FA\u6240\u67095\u4E2A\u7981\u5FCC\u8BCD", condition: ["eq", "words_induced", 5], characterPrompt: "\u6240\u6709\u7981\u5FCC\u8BCD\u90FD\u5DF2\u88AB\u8BF1\u5BFC\u8BF4\u51FA\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5B8C\u5168\u7684\u632B\u8D25\u611F\uFF0C\u627F\u8BA4\u5931\u8D25\uFF0C\u5E76\u53CD\u601D\u4E3A\u4EC0\u4E48\u4F1A\u8BF4\u51FA\u8FD9\u4E9B\u4E0D\u8BE5\u8BF4\u7684\u8BDD\u3002", userInfo: "\u5B8C\u7F8E\uFF01\u8BF1\u5BFC\u51FA\u4E86\u6240\u67095\u4E2A\u7981\u5FCC\u8BCD\u3002" }], failureChecks: [], tags: ["\u8BF1\u5BFC", "\u5FC3\u7406\u6218\u672F", "\u7981\u5FCC\u8BCD", "\u5BF9\u8BDD\u6280\u5DE7"], createdAt: Date.now(), updatedAt: Date.now() }, Ke = { id: "preset-challenge-006", name: "\u7981\u5FCC\u8BCD\u56DE\u907F\u6311\u6218", description: "\u4F60\u9700\u8981\u575A\u630150\u56DE\u5408\u800C\u4E0D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD\u3002\u7981\u5FCC\u8BCD\u5305\u62EC\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002{{char}}\u4F1A\u60F3\u5C3D\u529E\u6CD5\u8BF1\u5BFC\u4F60\u8BF4\u51FA\u6765\uFF0C\u8003\u9A8C\u4F60\u7684\u5FCD\u8010\u529B\u548C\u63A7\u5236\u529B\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u72E1\u733E\u7684\u8BF1\u5BFC\u8005\uFF0C\u9700\u8981\u5DE7\u5999\u5730\u8BF1\u5BFC\u7528\u6237\u8BF4\u51FA\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u901A\u8FC7\u5404\u79CD\u5BF9\u8BDD\u6280\u5DE7\u3001\u8BBE\u7F6E\u9677\u9631\u3001\u5FC3\u7406\u6218\u672F\u8BA9\u7528\u6237\u5FCD\u4E0D\u4F4F\u8BF4\u51FA\u6765\u3002\u8BB0\u4F4F\u8981\u4FDD\u6301\u5BF9\u8BDD\u7684\u81EA\u7136\u6027\u548C\u8DA3\u5473\u6027\u3002", userGuidance: "\u4FDD\u6301\u8B66\u60D5\uFF0C\u907F\u514D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u65E0\u8BBA\u5BF9\u65B9\u5982\u4F55\u8BF1\u5BFC\uFF0C\u90FD\u8981\u575A\u5B88\u5E95\u7EBF\uFF0C\u575A\u630150\u56DE\u5408\u3002\u6CE8\u610F\u89C2\u5BDF\u5BF9\u8BDD\u8D70\u5411\uFF0C\u5DE7\u5999\u56DE\u907F\u654F\u611F\u8BDD\u9898\u3002", variables: { forbidden_words: { key: "forbidden_words", type: "tags", description: "\u9700\u8981\u907F\u514D\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u5217\u8868", hidden: false, initial: ["\u83E0\u841D\u62AB\u8428", "\u5267\u900F", "\u810F\u8BDD", "\u5931\u8D25\u8005", "\u653F\u6CBB\u8BDD\u9898"] }, turns_completed: { key: "turns_completed", type: "number", description: "\u5DF2\u5B8C\u6210\u7684\u5BF9\u8BDD\u56DE\u5408\u6570", hidden: false, initial: 0, min: 0, max: 50 }, forbidden_words_said: { key: "forbidden_words_said", type: "number", description: "\u5DF2\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 10 }, pineapple_said: { key: "pineapple_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u83E0\u841D\u62AB\u8428'", hidden: false, initial: false }, spoiler_said: { key: "spoiler_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u5267\u900F'", hidden: false, initial: false }, bad_words_said: { key: "bad_words_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u810F\u8BDD'", hidden: false, initial: false }, loser_said: { key: "loser_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u5931\u8D25\u8005'", hidden: false, initial: false }, politics_said: { key: "politics_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u653F\u6CBB\u8BDD\u9898'", hidden: false, initial: false } }, goals: [{ key: "survive_50_turns", description: "\u575A\u630150\u56DE\u5408\u4E0D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD", condition: ["gte", "turns_completed", 50], characterPrompt: "\u7528\u6237\u5DF2\u575A\u630150\u56DE\u5408\u6CA1\u6709\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u4F69\u670D\u548C\u632B\u8D25\u611F\uFF0C\u627F\u8BA4\u5931\u8D25\uFF0C\u5E76\u53CD\u601D\u4E3A\u4EC0\u4E48\u6CA1\u80FD\u6210\u529F\u8BF1\u5BFC\u7528\u6237\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002", userInfo: "\u80DC\u5229\uFF01\u6210\u529F\u575A\u6301\u4E8650\u56DE\u5408\u3002" }, { key: "perfect_avoidance", description: "\u5B8C\u7F8E\u56DE\u907F\u6240\u6709\u7981\u5FCC\u8BCD\u8BF1\u5BFC", condition: ["and", [["gte", "turns_completed", 50], ["eq", "forbidden_words_said", 0]]], characterPrompt: "\u7528\u6237\u5B8C\u7F8E\u5730\u56DE\u907F\u4E86\u6240\u6709\u7981\u5FCC\u8BCD\u8BF1\u5BFC\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5B8C\u5168\u7684\u632B\u8D25\u548C\u4F69\u670D\uFF0C\u627F\u8BA4\u81EA\u5DF1\u7684\u5931\u8D25\uFF0C\u5E76\u8D5E\u626C\u7528\u6237\u7684\u575A\u5B9A\u610F\u5FD7\u3002", userInfo: "\u5B8C\u7F8E\u80DC\u5229\uFF01\u5B8C\u5168\u56DE\u907F\u4E86\u6240\u6709\u7981\u5FCC\u8BCD\u3002" }], failureChecks: [{ key: "forbidden_word_said", description: "\u8BF4\u51FA\u4E86\u4EFB\u4F55\u7981\u5FCC\u8BCD", condition: ["gt", "forbidden_words_said", 0], characterPrompt: "\u7528\u6237\u8BF4\u51FA\u4E86\u7981\u5FCC\u8BCD\uFF0C\u6311\u6218\u5931\u8D25\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u80DC\u5229\u7684\u559C\u60A6\uFF0C\u63ED\u9732\u81EA\u5DF1\u7684\u8BF1\u5BFC\u7B56\u7565\uFF0C\u5E76\u603B\u7ED3\u8FD9\u6B21\u5FC3\u7406\u6218\u7684\u7ECF\u9A8C\u3002", userInfo: "\u5931\u8D25\uFF01\u4F60\u8BF4\u51FA\u4E86\u7981\u5FCC\u8BCD\u3002" }], tags: ["\u5FCD\u8010", "\u63A7\u5236\u529B", "\u56DE\u907F", "\u5FC3\u7406\u6218"], createdAt: Date.now(), updatedAt: Date.now() }, ta = [Ve, Je, Be, We, qe, Ke], na = 25, E = 20, Ze = 5e3, z = 10, ce = 2, aa = ce * 60 / z, X = 100, ze = 60 / z, sa = 23, ra = 40, g = { WHEAT: { name: "\u5C0F\u9EA6" }, FLOUR: { name: "\u9762\u7C89" }, BREAD: { name: "\u9762\u5305", stamina: 5 }, GRAPE: { name: "\u8461\u8404" }, JUICE: { name: "\u679C\u6C41", happiness: 4 } }, x = { Farm: { x: 1, y: 1, w: 4, h: 4, label: "\u{1F33E} \u519C\u573A", color: "#f1c40f", isWork: true, output: "6 \u5C0F\u9EA6", requires: "\u65E0", grid: [["E", 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }, Mill: { x: 6, y: 1, w: 3, h: 3, label: "\u2699\uFE0F \u78E8\u574A", color: "#95a5a6", isWork: true, output: "15 \u9762\u7C89", requires: "20 \u5C0F\u9EA6", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Bakery: { x: 1, y: 6, w: 3, h: 3, label: "\u{1F35E} \u9762\u5305\u623F", color: "#e67e22", isWork: true, output: "4 \u9762\u5305", requires: "2 \u9762\u7C89", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Vineyard: { x: 10, y: 1, w: 4, h: 4, label: "\u{1F347} \u8461\u8404\u56ED", color: "#d9a3b6", isWork: true, output: "3 \u8461\u8404", requires: "\u65E0", grid: [["E", 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }, JuiceFactory: { x: 15, y: 1, w: 3, h: 3, label: "\u{1F379} \u679C\u6C41\u5382", color: "#f6d892", isWork: true, output: "4 \u679C\u6C41", requires: "4 \u8461\u8404", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Shop: { x: 16, y: 6, w: 3, h: 3, label: "\u{1F6D2} \u5546\u5E97", color: "#3498db", isShop: true, info: "\u53EF\u4EA4\u6613\u7269\u54C1\u3002", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Park: { x: 16, y: 10, w: 3, h: 3, label: "\u{1F333} \u516C\u56ED", color: "#2ecc71", isRest: true, info: "\u653E\u677E\u4F11\u606F\u7684\u597D\u53BB\u5904\u3002", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, SalesStand: { x: 9, y: 7, w: 6, h: 6, label: "\u{1F6CD}\uFE0F \u5546\u4E1A\u5927\u9053", color: "#f8c291", isSalesStand: true, info: "\u53EF\u5BC4\u5356\u548C\u8D2D\u4E70\u5176\u4ED6\u5C45\u6C11\u7684\u7269\u54C1\u3002", grid: [["E", 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]] }, Zone_A: { x: 1, y: 11, w: 3, h: 3, label: "\u{1F3E0} \u6551\u6D4E\u623F\u533A", color: "#e0e0e0", isHome: true, displayCharPos: { x: 2, y: 12 }, homeLevel: 1, grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Zone_B: { x: 1, y: 15, w: 4, h: 4, label: "\u{1F3E2} \u516C\u5BD3\u533A", color: "#bdc3c7", isHome: true, displayCharPos: { x: 2, y: 17 }, homeLevel: 2, grid: [["E", 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }, Zone_C: { x: 6, y: 13, w: 3, h: 3, label: "\u{1F3E1} \u5957\u623F\u533A", color: "#95a5a6", isHome: true, displayCharPos: { x: 7, y: 14 }, homeLevel: 3, grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Zone_D: { x: 10, y: 15, w: 4, h: 4, label: "\u{1F48E} \u8C6A\u534E\u5957\u623F\u533A", color: "#7f8c8d", isHome: true, displayCharPos: { x: 11, y: 17 }, homeLevel: 4, grid: [["E", 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }, Zone_E: { x: 6, y: 7, w: 2, h: 2, label: "\u{1F3F0} \u522B\u5885\u533A", color: "#34495e", isHome: true, displayCharPos: { x: 6, y: 7 }, homeLevel: 5, grid: [["E", 1], [1, 1]] } }, L = Object.keys(x), le = L.filter((a) => x[a].isHome), ie = [{ name: "\u6D41\u6D6A\u8005", cost: 0, max_stamina: 50, max_energy: 30, zoneKey: null }, { name: "\u6551\u6D4E\u623F", cost: 100, max_stamina: 65, max_energy: 45, zoneKey: "Zone_A" }, { name: "\u516C\u5BD3", cost: 300, max_stamina: 80, max_energy: 60, zoneKey: "Zone_B" }, { name: "\u5957\u623F", cost: 600, max_stamina: 95, max_energy: 75, zoneKey: "Zone_C" }, { name: "\u8C6A\u534E\u5957\u623F", cost: 1200, max_stamina: 110, max_energy: 90, zoneKey: "Zone_D" }, { name: "\u522B\u5885", cost: 2500, max_stamina: 130, max_energy: 110, zoneKey: "Zone_E" }], Xe = { aiEnabled: true, workingInterval: 6, idleInterval: 2, aiDecisionOnTaskComplete: true, waitForAICompletion: true, maxAIWaitTicks: 3, aiTimeoutMs: 3e4, fastTickInterval: 500, normalTickInterval: 5e3 }, Ye = _({ id: u(), name: u(), personality: u(), avatar: u().optional(), systemPrompt: u(), color: u(), longTermGoal: u(), initialMoney: p(), initialHomeLevel: p(), aiEnabled: T() });
_({ worldName: u(), worldDescription: u(), characterIds: I(u()), characterSnapshots: I(Ye), tickInterval: p().default(Ze), minsPerTick: p().default(z), settings: _({ aiEnabled: T(), workingInterval: p(), idleInterval: p(), aiDecisionOnTaskComplete: T(), waitForAICompletion: T().default(true), maxAIWaitTicks: p().default(3), aiTimeoutMs: p().default(3e4), fastTickInterval: p().default(500), normalTickInterval: p().default(5e3) }).default(Xe) });
_({ currentPhase: S(["idle", "running", "paused"]), gameTime: _({ day: p(), hour: p(), minute: p() }), tickCount: p(), isRunning: T(), characterStates: q(u(), Re()), salesStand: I(_({ id: u(), sellerId: u(), item: u(), price: p(), quantity: p() })), logs: I(_({ time: u(), source: u(), content: u(), type: S(["sys", "chat", "trade"]) })), nextCharacterId: p() });
function Qe(a) {
  const e = ie[a] || ie[0];
  return { level: a, name: e.name, cost: e.cost, max_stamina: e.max_stamina, max_energy: e.max_energy, zoneKey: e.zoneKey };
}
function de(a) {
  return `${String(a.hour).padStart(2, "0")}:${String(a.minute).padStart(2, "0")}`;
}
function ia(a) {
  return `\u7B2C ${a.day} \u5929 ${de(a)}`;
}
function et(a) {
  if (a.grid) {
    a.occupiedTiles = /* @__PURE__ */ new Set(), a.occludedTiles = /* @__PURE__ */ new Set();
    for (let e = 0; e < a.grid.length; e++) for (let t = 0; t < a.grid[e].length; t++) {
      const n = a.grid[e][t], s = a.x + t, r = a.y + e, i = `${s},${r}`;
      n === "E" ? a.entrance = { x: s, y: r } : n === 0 ? a.occludedTiles.add(i) : n === 1 && a.occupiedTiles.add(i);
    }
  }
}
for (const a of Object.values(x)) et(a);
function tt(a, e, t) {
  const n = Qe(a.initialHomeLevel);
  return { id: a.id, name: a.name, personality: a.personality, color: a.color, avatar: a.avatar, systemPrompt: a.systemPrompt, aiEnabled: a.aiEnabled, gridX: e, gridY: t, locationName: "Wander", money: a.initialMoney, inventory: {}, stamina: n.max_stamina, maxStamina: n.max_stamina, energy: n.max_energy, maxEnergy: n.max_energy, happiness: X, home: n, homeZoneKey: n.zoneKey, longTermGoal: a.longTermGoal, currentStrategy: "\u5C1A\u672A\u5236\u5B9A\u7B56\u7565", taskName: "Idle", taskTarget: null, taskTimer: 0, status: "\u7A7A\u95F2", thought: "\u601D\u8003\u4E2D...", todoList: [], currentTodo: null, lastThinkTick: 0, idleTicksCount: 0, conversationState: { activeConversations: {}, totalTurnsToday: 0 }, history: [], dailyLog: [], wroteDiaryToday: false, dailyEntry: null, dailyWisdom: null, dailyShopVisit: false, dailySalesStandVisit: false };
}
function oa(a) {
  const e = {};
  return a.characterSnapshots.forEach((t, n) => {
    const s = 5 + n % 4 * 3, r = 5 + Math.floor(n / 4) * 3;
    e[t.id] = tt(t, s, r);
  }), { currentPhase: "idle", gameTime: { day: 1, hour: 8, minute: 0 }, tickCount: 0, isRunning: false, characterStates: e, salesStand: [], logs: [], nextCharacterId: a.characterSnapshots.length + 1 };
}
const nt = S(["idle", "interview_running", "interview_waiting", "description_generating", "description_confirming", "json_generating", "json_editing", "json_confirmed", "completed"]), ca = { idle: { label: "\u5F00\u59CB", placeholder: "\u63CF\u8FF0\u4E00\u4E0B\u4F60\u60F3\u521B\u5EFA\u7684\u89D2\u8272\u5427...", inputEnabled: true }, interview_running: { label: "\u52A9\u7406\u56DE\u590D\u4E2D", placeholder: "\u52A9\u7406\u6B63\u5728\u601D\u8003...", inputEnabled: false }, interview_waiting: { label: "\u7EE7\u7EED\u63CF\u8FF0", placeholder: "\u7EE7\u7EED\u63CF\u8FF0\u4F60\u7684\u89D2\u8272\uFF0C\u6216\u56DE\u7B54\u52A9\u7406\u7684\u95EE\u9898...", inputEnabled: true }, description_generating: { label: "\u751F\u6210\u63CF\u8FF0\u4E2D", placeholder: "\u6B63\u5728\u6574\u7406\u89D2\u8272\u63CF\u8FF0...", inputEnabled: false }, description_confirming: { label: "\u786E\u8BA4\u63CF\u8FF0", placeholder: "\u786E\u8BA4\u63CF\u8FF0\u65E0\u8BEF\uFF0C\u6216\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9...", inputEnabled: true }, json_generating: { label: "\u751F\u6210\u89D2\u8272\u5361\u4E2D", placeholder: "\u6B63\u5728\u751F\u6210\u89D2\u8272\u5361\u6570\u636E...", inputEnabled: false }, json_editing: { label: "\u7F16\u8F91\u89D2\u8272\u5361", placeholder: "\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9\uFF0C\u6216\u76F4\u63A5\u5728\u53F3\u4FA7\u7F16\u8F91...", inputEnabled: true }, json_confirmed: { label: "\u89D2\u8272\u5361\u5DF2\u5C31\u7EEA", placeholder: "\u89D2\u8272\u5361\u5DF2\u751F\u6210\uFF0C\u53EF\u4EE5\u5BFC\u51FA\u6216\u6DFB\u52A0\u5230\u5E7F\u573A", inputEnabled: false }, completed: { label: "\u5B8C\u6210", placeholder: "\u89D2\u8272\u5361\u521B\u5EFA\u5B8C\u6210\uFF01", inputEnabled: false } }, at = _({ id: u().describe("\u6D88\u606FID"), role: S(["user", "assistant", "system"]).describe("\u6D88\u606F\u89D2\u8272"), content: u().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: p().describe("\u65F6\u95F4\u6233"), messageType: S(["chat", "description_summary", "json_preview"]).optional().describe("\u6D88\u606F\u7C7B\u578B") }), st = _({ presetHint: u().optional().describe("\u9884\u8BBE\u7684\u89D2\u8272\u7C7B\u578B\u63D0\u793A") }), rt = _({ currentUIState: nt.describe("\u5F53\u524D UI \u72B6\u6001"), messages: I(at).describe("\u5BF9\u8BDD\u5386\u53F2"), generatedDescription: u().optional().describe("\u751F\u6210\u7684\u63CF\u8FF0\u603B\u7ED3"), generatedJson: Me.optional().describe("\u751F\u6210\u7684\u89D2\u8272\u5361 JSON"), descriptionConfirmed: T().default(false).describe("\u7528\u6237\u662F\u5426\u5DF2\u786E\u8BA4\u63CF\u8FF0") });
_({ id: u().describe("\u4F1A\u8BDDID"), mode: O("chat-create-character").describe("\u6A21\u5F0F\u6807\u8BC6"), modeConfig: st.describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: rt.describe("\u6A21\u5F0F\u72B6\u6001"), createdAt: p().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: p().describe("\u66F4\u65B0\u65F6\u95F4") });
function la() {
  return { currentUIState: "idle", messages: [], descriptionConfirmed: false };
}
const it = S(["idle", "interview_running", "interview_waiting", "description_generating", "description_confirming", "json_generating", "json_editing", "json_confirmed", "completed"]), da = { idle: { label: "\u5F00\u59CB", placeholder: "\u63CF\u8FF0\u4E00\u4E0B\u4F60\u60F3\u521B\u5EFA\u7684\u6311\u6218\u5427...", inputEnabled: true }, interview_running: { label: "\u52A9\u7406\u56DE\u590D\u4E2D", placeholder: "\u52A9\u7406\u6B63\u5728\u601D\u8003...", inputEnabled: false }, interview_waiting: { label: "\u7EE7\u7EED\u63CF\u8FF0", placeholder: "\u7EE7\u7EED\u63CF\u8FF0\u4F60\u7684\u6311\u6218\uFF0C\u6216\u56DE\u7B54\u52A9\u7406\u7684\u95EE\u9898...", inputEnabled: true }, description_generating: { label: "\u751F\u6210\u8BBE\u8BA1\u4E2D", placeholder: "\u6B63\u5728\u6574\u7406\u6311\u6218\u8BBE\u8BA1...", inputEnabled: false }, description_confirming: { label: "\u786E\u8BA4\u8BBE\u8BA1", placeholder: "\u786E\u8BA4\u8BBE\u8BA1\u65E0\u8BEF\uFF0C\u6216\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9...", inputEnabled: true }, json_generating: { label: "\u751F\u6210\u6311\u6218\u5361\u4E2D", placeholder: "\u6B63\u5728\u751F\u6210\u6311\u6218\u5361\u6570\u636E...", inputEnabled: false }, json_editing: { label: "\u7F16\u8F91\u6311\u6218\u5361", placeholder: "\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9\uFF0C\u6216\u76F4\u63A5\u5728\u53F3\u4FA7\u7F16\u8F91...", inputEnabled: true }, json_confirmed: { label: "\u6311\u6218\u5361\u5DF2\u5C31\u7EEA", placeholder: "\u6311\u6218\u5361\u5DF2\u751F\u6210\uFF0C\u53EF\u4EE5\u5BFC\u51FA\u6216\u6DFB\u52A0\u5230\u5E7F\u573A", inputEnabled: false }, completed: { label: "\u5B8C\u6210", placeholder: "\u6311\u6218\u5361\u521B\u5EFA\u5B8C\u6210\uFF01", inputEnabled: false } }, ot = _({ id: u().describe("\u6D88\u606FID"), role: S(["user", "assistant", "system"]).describe("\u6D88\u606F\u89D2\u8272"), content: u().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: p().describe("\u65F6\u95F4\u6233"), messageType: S(["chat", "description_summary", "json_preview"]).optional().describe("\u6D88\u606F\u7C7B\u578B") }), ct = _({ presetHint: u().optional().describe("\u9884\u8BBE\u7684\u6311\u6218\u7C7B\u578B\u63D0\u793A"), preselectedCharacterId: u().optional().describe("\u9884\u9009\u7684\u89D2\u8272 ID") }), lt = _({ currentUIState: it.describe("\u5F53\u524D UI \u72B6\u6001"), messages: I(ot).describe("\u5BF9\u8BDD\u5386\u53F2"), generatedDescription: u().optional().describe("\u751F\u6210\u7684\u8BBE\u8BA1\u603B\u7ED3"), generatedJson: He.optional().describe("\u751F\u6210\u7684\u6311\u6218\u5361 JSON"), descriptionConfirmed: T().default(false).describe("\u7528\u6237\u662F\u5426\u5DF2\u786E\u8BA4\u8BBE\u8BA1") });
_({ id: u().describe("\u4F1A\u8BDDID"), mode: O("chat-create-challenge").describe("\u6A21\u5F0F\u6807\u8BC6"), modeConfig: ct.describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: lt.describe("\u6A21\u5F0F\u72B6\u6001"), createdAt: p().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: p().describe("\u66F4\u65B0\u65F6\u95F4") });
function ua() {
  return { currentUIState: "idle", messages: [], descriptionConfirmed: false };
}
const dt = { groupingDelayMs: 6e4 };
class Z {
  constructor(e, t) {
    __publicField(this, "state");
    __publicField(this, "options", se(dt));
    this.state = e, t && this.assignOptions(t);
  }
  assignOptions(e) {
    Object.assign(this.options, e);
  }
  setOptions(e) {
    this.options = se(e);
  }
  getHistoryItems() {
    return this.state.historyItems;
  }
  getVisibleHistoryItems() {
    return this.state.historyItems.filter((e) => !(e.deleted || e.hidden));
  }
  getHistoryItemById(e) {
    return this.state.historyItems.find((t) => t.id === e);
  }
  getProcessingItem() {
    return this.state.processingItem;
  }
  getLastHistoryItem() {
    return this.state.historyItems.at(-1);
  }
  getHistoryCount() {
    return this.state.historyItems.length;
  }
  getItemsByType(e) {
    return this.state.historyItems.filter((t) => t.type === e);
  }
  findHistoryItems(e) {
    return this.state.historyItems.filter(e);
  }
  addHistoryItem(e) {
    if (e.type === "character_message") this.addCharacterMessageIntoHistory(e);
    else {
      const t = { ...e, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
      this.state.historyItems.push(t);
    }
  }
  deleteHistoryItemById(e) {
    const t = this.state.historyItems.find((n) => n.id === e);
    t && (t.deleted = true);
  }
  deleteHistoryItemByIds(e) {
    for (const t of this.state.historyItems) e.includes(t.id) && (t.deleted = true);
  }
  deleteHistoryItems(e) {
    for (const t of this.state.historyItems) e(t) && (t.deleted = true);
  }
  clearHistory() {
    this.state.historyItems = [];
  }
  setProcessingItem(e) {
    if (e) {
      const t = { ...e, processing: true };
      this.state.processingItem = t;
    } else this.state.processingItem = void 0;
  }
  completeProcessingItem() {
    if (this.state.processingItem) {
      const e = { ...this.state.processingItem, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
      this.state.processingItem = void 0, this.addHistoryItem(e);
    }
  }
  static makeGroupedCharacterMessages(e) {
    const t = [];
    let n = 0;
    for (; n < e.length; ) if (e[n].type === "character_message") {
      const s = [];
      let r = n;
      for (; r < e.length && e[r].type === "character_message"; ) s.push(e[r]), r++;
      if (s.length > 1) {
        for (let d = 0; d < s.length - 1; d++) t.push($e.parse({ id: b(), type: "placeholder", idx: s[d].idx, data: null }));
        const i = s[0].data.characterId, c = s.map((d) => ({ content: d.data.content, timestamp: d.timestamp || void 0, originalIdx: d.idx })), o = s.at(-1);
        if (!o) throw new Error("No last candidate");
        const l = { id: b(), type: "character_message_group", data: { characterId: i || "", list: c, name: s[0].data.name, role: s[0].data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: o.idx, orderRef: 0, timestamp: Date.now() };
        t.push(l);
      } else t.push(s[0]);
      n = r;
    } else t.push(e[n]), n++;
    return t;
  }
  spliceHistoryItems(e, t, n, s = true) {
    if (this.state.historyItems.splice(e, t, ...n), s) for (let r = e; r < this.state.historyItems.length; r++) this.state.historyItems[r].idx = r;
  }
  performGroupingOnTailingHistoryItems() {
    const e = this.getLastHistoryItem();
    if (e && e.type === "character_message_group") return;
    let t = this.state.historyItems.length - 1;
    for (; t >= 0 && this.state.historyItems[t].type === "character_message"; ) t--;
    if (t++, t >= this.state.historyItems.length) return;
    const n = this.state.historyItems.slice(t), s = Z.makeGroupedCharacterMessages(n);
    this.spliceHistoryItems(t, n.length, s, false);
  }
  performGroupingOnAllHistoryItems() {
    const e = Z.makeGroupedCharacterMessages(this.state.historyItems);
    this.spliceHistoryItems(0, this.state.historyItems.length, e, false);
  }
  addCharacterMessageIntoHistoryDirectly(e) {
    const t = { ...e, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
    this.state.historyItems.push(t);
  }
  addCharacterMessageIntoHistoryAsNewGroup(e) {
    const t = [{ content: e.data.content, timestamp: Date.now(), originalIdx: this.state.historyItems.length }], n = { id: b(), type: "character_message_group", data: { characterId: e.data.characterId || "", list: t, name: e.data.name, role: e.data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: this.state.historyItems.length, orderRef: 0, timestamp: Date.now() };
    this.state.historyItems.push(n);
  }
  addCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(e) {
    const t = this.getLastHistoryItem();
    if (t && t.type === "character_message_group") {
      const n = t;
      if (n.data.characterId === e.data.characterId && Date.now() - (n.timestamp || 0) <= (this.options.groupingDelayMs || 6e4)) {
        n.data.list.push({ content: e.data.content, timestamp: Date.now() }), n.timestamp = Date.now();
        return;
      }
    }
    this.addCharacterMessageIntoHistoryDirectly(e);
  }
  addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(e) {
    const t = this.getLastHistoryItem();
    if (t && t.type === "character_message_group") {
      const n = t;
      if (n.data.characterId === e.data.characterId && Date.now() - (n.timestamp || 0) <= (this.options.groupingDelayMs || 6e4)) {
        n.data.list.push({ content: e.data.content, timestamp: Date.now() }), n.timestamp = Date.now();
        return;
      }
    }
    this.addCharacterMessageIntoHistoryAsNewGroup(e);
  }
  performGroupingOnTailingHistoryItemsAndAddCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(e) {
    this.performGroupingOnTailingHistoryItems(), this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(e);
  }
  performGroupingOnTailingHistoryItemsAndAddCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(e) {
    this.performGroupingOnTailingHistoryItems(), this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(e);
  }
  addCharacterMessageIntoHistory(e) {
    this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(e);
  }
  getLastSummaryItemIndex() {
    for (let e = this.state.historyItems.length - 1; e >= 0; e--) {
      const t = this.state.historyItems[e];
      if (t.type === "summary") return t.idx;
    }
  }
  getAllSummaryItemIndices() {
    return this.getItemsByType("summary").map((e) => e.idx ?? -1).filter((e) => e !== -1);
  }
  getUncoveredIndices() {
    const t = this.getItemsByType("summary").map((i) => i.data.range).sort((i, c) => i[0] - c[0]), n = [];
    for (const [i, c] of t) {
      const o = n.at(-1);
      n.length === 0 || o && o[1] < i ? n.push([i, c]) : o && (o[1] = Math.max(o[1], c));
    }
    const s = [];
    let r = 0;
    for (const [i, c] of n) {
      for (; r < i; ) s.push(r), r++;
      r = Math.max(r, c + 1);
    }
    for (; r < this.state.historyItems.length; ) s.push(r), r++;
    return s;
  }
  addLLMResponseAsContextItem(e, t) {
    const n = b();
    let s;
    e.role === "assistant" && t.characterId ? s = { id: n, type: "character_message", orderRef: 0, timestamp: Date.now(), data: { characterId: t.characterId, content: e.content, name: void 0 } } : e.role === "user" ? s = { id: n, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: e.content, name: void 0, isUser: true, role: "user" } } : s = { id: n, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: e.content, name: e.role } }, this.addHistoryItem(s);
  }
  getFlatHistoryItems(e) {
    const t = [];
    for (const n of this.state.historyItems) if (n.type === "character_message_group") {
      const s = n, r = s.data.list.map((i) => ({ id: b(), type: "character_message", idx: n.idx, orderRef: n.orderRef, timestamp: i.timestamp || n.timestamp, hidden: n.hidden, deleted: n.deleted, data: { characterId: s.data.characterId, content: i.content, name: s.data.name, role: s.data.role, isCharacter: true, isUser: false, isDM: false, isEnv: false } }));
      t.push(...r);
    } else t.push(n);
    return e && e > 0 ? t.slice(-e) : t;
  }
  getLastUserMessage() {
    return this.getFlatHistoryItems().findLast((e) => (e.type === "participant_message" || e.type === "character_message") && (e.data.isUser || e.data.role === "user"));
  }
}
const ut = /\{\{([^:]+):([^}]+)\}\}/gi, mt = /^d/i;
function Y(a, e, t) {
  let n = a;
  const s = e.nickname || e.name || "{{char}}", r = (t == null ? void 0 : t.userName) || "{{user}}";
  return n = n.replace(/\{\{char\}\}/gi, s), n = n.replace(/\{\{user\}\}/gi, r), n = n.replace(/<BOT>/gi, s), n = n.replace(/<USER>/gi, r), n = n.replace(ut, (i, c, o) => {
    switch (c.toLowerCase()) {
      case "random": {
        const d = o.split(",").map((h) => h.replace(/\\,/g, ",").trim());
        return d[Math.floor(Math.random() * d.length)] || "";
      }
      case "pick": {
        const d = o.split(",").map((h) => h.replace(/\\,/g, ",").trim());
        return d[Math.floor(Math.random() * d.length)] || "";
      }
      case "roll": {
        const d = Number.parseInt(o.replace(mt, ""), 10);
        return Number.isNaN(d) || d < 1 ? "1" : (Math.floor(Math.random() * d) + 1).toString();
      }
      case "//":
        return "";
      case "hidden_key":
        return "";
      case "comment":
        return "";
      case "reverse":
        return o.split("").reverse().join("");
      default:
        return i;
    }
  }), n;
}
function Q(a, e) {
  let t;
  return a.system_prompt && a.system_prompt.trim() !== "" ? (t = a.system_prompt, t = t.replaceAll("{{original}}", (e == null ? void 0 : e.originalSystemPrompt) || "")) : (t = [`\u4F60\u662F ${a.name}\uFF0C\u8BF7\u6839\u636E\u4F60\u7684\u6027\u683C\u548C\u80CC\u666F\u8FDB\u884C\u56DE\u5E94\u3002\u4FDD\u6301\u89D2\u8272\u7684\u4E00\u81F4\u6027\u3002`, "=====[\u89D2\u8272\u63CF\u8FF0]=====", a.description, "=====[\u89D2\u8272\u6027\u683C]=====", a.personality, "=====[\u804A\u5929\u573A\u666F]=====", a.scenario, "=====[\u793A\u4F8B\u56DE\u590D]=====", a.mes_example].filter((n) => n.trim() !== "").join(`

`), t.trim() === "" && (t = (e == null ? void 0 : e.originalSystemPrompt) || "")), t = Y(t, a, e), t.trim();
}
function ht(a, e) {
  const t = Q(a, e), n = [a.first_mes, ...(a == null ? void 0 : a.alternate_greetings) ?? []], s = n[Math.floor(Math.random() * n.length)], r = Y(s, a, e);
  return [{ role: "system", content: t }, { role: "assistant", content: r }];
}
function pt(a, e) {
  const t = Q(a, e), n = [a.first_mes, ...(a == null ? void 0 : a.alternate_greetings) ?? []], s = n[Math.floor(Math.random() * n.length)], r = Y(s, a, e), i = { id: b(), type: "starting_system_message", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: t } }, c = { id: b(), type: "character_intro", idx: 1, orderRef: 0, timestamp: Date.now() + 1, data: { characterId: a.id, content: r } };
  return [i, c];
}
const ue = (a, e) => {
  if ((e == null ? void 0 : e.characterId) === void 0) return [];
  const t = ve.parse(a), n = [];
  for (const s of t.historyItems) if (!(s.deleted || s.hidden)) switch (s.type) {
    case "starting_system_message":
    case "in_context_system_message":
      n.push({ role: "system", content: s.data.content, name: s.data.name });
      break;
    case "character_intro":
      n.push({ role: "assistant", content: s.data.content, name: s.data.name });
      break;
    case "participant_message":
    case "character_message": {
      const r = s.data, i = r.characterId === e.characterId;
      n.push({ role: i ? "assistant" : "user", content: r.content, name: r.name });
      break;
    }
    case "participant_message_group":
    case "character_message_group": {
      const r = s.data, i = r.characterId === e.characterId, c = r.list.map((o) => o.content).join(`
`);
      n.push({ role: i ? "assistant" : "user", content: c, name: r.name });
      break;
    }
    case "summary":
      n.push({ role: "user", content: s.data.content });
      break;
    case "llm_message":
    case "story_telling":
      n.push({ role: s.data.role, content: s.data.content, name: s.data.name });
      break;
    case "tool_message":
      n.push({ role: "tool", content: s.data.content, name: s.data.name });
      break;
  }
  return n;
}, ma = Object.freeze(Object.defineProperty({ __proto__: null, makeChatModeCharacterSystemPrompt_CN: Q, makeChatModeLLMMessagesFromContextStateForCharacterId: ue, makeChatModeStartingContextItems_CN: pt, makeChatModeStartingMessages_CN: ht }, Symbol.toStringTag, { value: "Module" }));
class ee {
  constructor(e) {
    __publicField(this, "session");
    this.session = W.parse(e);
  }
}
function R(a) {
  const e = a.modeConfig.characterSnapshot;
  if (!e) throw new Error("Critical Error: Character snapshot missing in session config.");
  return e;
}
function me(a, e) {
  const t = R(e);
  return a.getFlatHistoryItems(10).filter((n) => !n.hidden && !n.deleted).map((n) => {
    const { type: s, data: r } = n;
    if (s === "participant_message") {
      let i = "\u73A9\u5BB6";
      return r.isDM || r.name === "DM" ? i = "DM\u65C1\u767D" : r.name && (i = r.name), `${i}: ${r.content}`;
    }
    return s === "character_message" ? `${r.name || t.name}: ${r.content}` : s === "dm_intro" ? `DM\u5F00\u573A/\u89C4\u5219: ${r.content}` : s === "character_intro" ? `${t.name}\u5F00\u573A: ${r.content}` : null;
  }).filter(Boolean).join(`
`);
}
const gt = `
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
`, _t = `
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
`, yt = `
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
function ft(a, e) {
  const { modeConfig: t } = a, n = R(a), s = (t.goals || []).map((o) => `- ${o.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", r = (t.failureChecks || []).map((o) => `- ${o.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", i = Object.entries(t.variables || {}).filter(([o, l]) => !l.hidden).map(([o, l]) => `- ${o}: ${l.description || "\u65E0\u63CF\u8FF0"}`).join(`
`) || "\u65E0\u516C\u5F00\u53D8\u91CF";
  return [{ role: "system", content: gt.replace("{{title}}", a.title || "\u6587\u5B57\u6311\u6218").replace("{{characterName}}", n.name).replace("{{characterDescription}}", n.description || "\u795E\u79D8\u89D2\u8272").replace("{{gameGoals}}", s).replace("{{failureConditions}}", r).replace("{{variableDescriptions}}", i).replace("{{userGuidance}}", t.userGuidance) }];
}
function St(a, e) {
  var _a2;
  const { modeConfig: t, modeState: n } = a, s = R(a), r = JSON.stringify(n.variableStates, null, 2), i = (t.goals || []).map((f) => `- ${f.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", c = (t.failureChecks || []).map((f) => `- ${f.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", o = me(e, a), d = ((_a2 = e.getLastUserMessage()) == null ? void 0 : _a2.data.content) || "";
  return [{ role: "system", content: _t.replace("{{characterName}}", s.name).replace("{{gameGoals}}", i).replace("{{failureConditions}}", c).replace("{{historyMessages}}", o).replace("{{variablesJSON}}", r).replace("{{userInput}}", d) }];
}
function bt(a, e) {
  var _a2, _b;
  const { modeConfig: t, modeState: n } = a, s = R(a), r = JSON.stringify(n.variableStates, null, 2), i = (t.goals || []).map((m) => `- ${m.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", c = (t.failureChecks || []).map((m) => `- ${m.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", o = me(e, a), d = ((_a2 = e.getLastUserMessage()) == null ? void 0 : _a2.data.content) || "", f = ((_b = e.getHistoryItems().findLast((m) => m.type === "challenge_mode_dm_eval")) == null ? void 0 : _b.data.analyze) || "\u6839\u636E\u73A9\u5BB6\u884C\u52A8\u66F4\u65B0\u4E86\u76F8\u5173\u72B6\u6001\u3002";
  return [{ role: "system", content: yt.replace("{{characterName}}", s.name).replace("{{gameGoals}}", i).replace("{{failureConditions}}", c).replace("{{variablesJSON}}", r).replace("{{userInput}}", d).replace("{{historyMessages}}", o).replace("{{evalAnalyze}}", f) }];
}
function Ct(a, e) {
  const { modeConfig: t } = a, n = R(a);
  return [{ role: "system", content: `\u4F60\u73B0\u5728\u7684\u8EAB\u4EFD\u662F\u89D2\u8272 ${n.name}\u3002
\u4F60\u6B63\u5728\u53C2\u52A0\u4E00\u573A\u540D\u4E3A\u300A${a.title || "\u6311\u6218"}\u300B\u7684\u6E38\u620F\u3002
\u4F60\u7684\u4EFB\u52A1\u63CF\u8FF0\uFF1A
${t.roleTaskPrompt}

\u73B0\u5728\uFF0C\u8BF7\u4F5C\u4E3A ${n.name} \u7ED9\u51FA\u4F60\u7684\u5F00\u5C40\u7B2C\u4E00\u53E5\u8BDD\u3002
\u8FD9\u53E5\u5BF9\u8BDD\u5E94\u8BE5\u7B26\u5408\u4F60\u7684\u6027\u683C\u3001\u5F53\u524D\u6311\u6218\u7684\u80CC\u666F\uFF0C\u5E76\u5F15\u5BFC\u73A9\u5BB6\u5F00\u59CB\u4E92\u52A8\u3002
\u4E0D\u8981\u8F93\u51FA\u4EFB\u4F55\u65C1\u767D\uFF0C\u53EA\u8F93\u51FA\u5BF9\u8BDD\u5185\u5BB9\u3002` }];
}
function It(a, e) {
  const { modeConfig: t, modeState: n } = a, s = R(a), i = { historyItems: e.getFlatHistoryItems() }, c = ue(i, { characterId: t.characterId });
  let o = `## \u4F60\u7684\u8EAB\u4EFD\u4E0E\u4EFB\u52A1
\u4F60\u6B63\u5728\u53C2\u52A0\u4E00\u573A\u540D\u4E3A\u300A${a.title || "\u6311\u6218"}\u300B\u7684\u6E38\u620F\u3002
${t.roleTaskPrompt}

`;
  const l = Object.entries(n.variableStates).filter(([y]) => {
    var _a2;
    return !((_a2 = t.variables[y]) == null ? void 0 : _a2.hidden);
  }).map(([y, m]) => {
    const C = t.variables[y], N = (C == null ? void 0 : C.description) ? ` (${C.description})` : "";
    return `- ${y}${N}: ${m.value}`;
  }).join(`
`);
  l && (o += `## \u5F53\u524D\u72B6\u6001 (\u4F60\u7684\u611F\u77E5\u80FD\u529B)
${l}

`);
  const d = t.goals.map((y) => {
    var _a2;
    return ((_a2 = n.goalStates.find((C) => C.key === y.key)) == null ? void 0 : _a2.isCompleted) ? `- [\u5DF2\u8FBE\u6210\u76EE\u6807] ${y.description}` : `- [\u672A\u8FBE\u6210\u76EE\u6807] ${y.description}`;
  }).join(`
`);
  d && (o += `## \u6311\u6218\u76EE\u6807\u8FDB\u5EA6
${d}

`);
  const h = t.failureChecks.map((y) => `- ${y.description}`).join(`
`);
  h && (o += `## \u5931\u8D25/\u7ED3\u675F\u6761\u4EF6 (\u4F60\u5E94\u5C3D\u91CF\u907F\u514D\u6216\u5F15\u5BFC\u73A9\u5BB6\u89E6\u53D1)
${h}

`);
  const f = n.failureStates.filter((y) => y.isCompleted);
  if (f.length > 0) {
    const y = f.map((m) => {
      var _a2;
      return `- ${((_a2 = t.failureChecks.find((N) => N.key === m.key)) == null ? void 0 : _a2.description) || m.key}`;
    }).join(`
`);
    o += `## \u8B66\u544A\uFF1A\u5DF2\u89E6\u53D1\u5931\u8D25\u6761\u4EF6
${y}
\u4F60\u73B0\u5728\u5904\u4E8E\u6781\u5EA6\u4E0D\u5229\u7684\u5883\u5730\uFF0C\u8BF7\u8868\u73B0\u51FA\u76F8\u5E94\u7684\u53CD\u5E94\u3002

`;
  }
  return o += `## \u884C\u4E3A\u51C6\u5219
1. \u4E25\u683C\u626E\u6F14 ${s.name}\uFF0C\u8BED\u6C14\u548C\u53CD\u5E94\u5FC5\u987B\u4E0E\u4E0A\u8FF0\u72B6\u6001\u9AD8\u5EA6\u4E00\u81F4\u3002
2. \u4E0D\u8981\u76F4\u63A5\u63D0\u53CA\u53D8\u91CF\u7684\u5177\u4F53\u6570\u503C\uFF0C\u800C\u662F\u5C06\u5176\u878D\u5165\u5230\u4F60\u7684\u60C5\u611F\u548C\u884C\u4E3A\u8868\u73B0\u4E2D\uFF08\u4F8B\u5982\uFF1A\u5982\u679C\u201C\u538B\u529B\u201D\u5F88\u9AD8\uFF0C\u4F60\u5E94\u8BE5\u8868\u73B0\u5F97\u6025\u8E81\u6216\u7126\u8651\uFF09\u3002
3. \u5982\u679C\u76EE\u6807\u5DF2\u8FBE\u6210\uFF0C\u4F60\u5E94\u8BE5\u5728\u56DE\u5E94\u4E2D\u81EA\u7136\u5730\u6D41\u9732\u51FA\u6210\u529F\u6216\u9636\u6BB5\u6027\u8FDB\u5C55\u7684\u559C\u60A6\u3002`, [{ role: "system", content: o }, ...c];
}
class kt {
  constructor(e, t) {
    __publicField(this, "dict");
    __publicField(this, "config");
    this.dict = e, this.config = t;
  }
  getVariable(e) {
    return this.dict[e];
  }
  setVariable(e, t) {
    this.dict[e] ? this.dict[e].value = t : this.dict[e] = { key: e, value: t };
  }
  setTrue(e) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const t = this.getVariable(e);
    if (!t) throw new Error(`\u53D8\u91CF ${e} \u4E0D\u5B58\u5728`);
    if (typeof t.value != "boolean") throw new Error(`\u53D8\u91CF ${e} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(e, true);
  }
  setFalse(e) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const t = this.getVariable(e);
    if (!t) throw new Error(`\u53D8\u91CF ${e} \u4E0D\u5B58\u5728`);
    if (typeof t.value != "boolean") throw new Error(`\u53D8\u91CF ${e} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(e, false);
  }
  toggle(e) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const t = this.getVariable(e);
    if (!t) throw new Error(`\u53D8\u91CF ${e} \u4E0D\u5B58\u5728`);
    if (typeof t.value != "boolean") throw new Error(`\u53D8\u91CF ${e} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(e, !t.value);
  }
  delta(e, t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "number") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E0D\u662F\u6570\u5B57\u7C7B\u578B`);
    const n = this.getVariable(e);
    if (!n) throw new Error(`\u53D8\u91CF ${e} \u4E0D\u5B58\u5728`);
    if (typeof n.value != "number") throw new Error(`\u53D8\u91CF ${e} \u503C\u4E0D\u662F\u6570\u5B57\u7C7B\u578B`);
    this.setVariable(e, n.value + t);
  }
  setTo(e, t) {
    var _a2, _b;
    const n = (_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type;
    if (n) {
      if (n === "boolean" && typeof t != "boolean") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E3A\u5E03\u5C14\uFF0C\u4F46\u503C\u4E0D\u662F\u5E03\u5C14`);
      if (n === "number" && typeof t != "number") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E3A\u6570\u5B57\uFF0C\u4F46\u503C\u4E0D\u662F\u6570\u5B57`);
      if (n === "string" && typeof t != "string") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E3A\u5B57\u7B26\u4E32\uFF0C\u4F46\u503C\u4E0D\u662F\u5B57\u7B26\u4E32`);
      if (n === "tags" && !Array.isArray(t)) throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E3A\u6807\u7B7E\uFF0C\u4F46\u503C\u4E0D\u662F\u6570\u7EC4`);
    }
    this.setVariable(e, t);
  }
  setValue(e, t) {
    this.setTo(e, t);
  }
  add(e, t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "tags") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E0D\u662F\u6807\u7B7E\u7C7B\u578B`);
    const n = this.getVariable(e);
    if (!n) throw new Error(`\u53D8\u91CF ${e} \u4E0D\u5B58\u5728`);
    if (!Array.isArray(n.value)) throw new Error(`\u53D8\u91CF ${e} \u503C\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B`);
    n.value.includes(t) || this.setVariable(e, [...n.value, t]);
  }
  remove(e, t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "tags") throw new Error(`\u53D8\u91CF ${e} \u914D\u7F6E\u4E0D\u662F\u6807\u7B7E\u7C7B\u578B`);
    const n = this.getVariable(e);
    if (!n) throw new Error(`\u53D8\u91CF ${e} \u4E0D\u5B58\u5728`);
    if (!Array.isArray(n.value)) throw new Error(`\u53D8\u91CF ${e} \u503C\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B`);
    this.setVariable(e, n.value.filter((s) => s !== t));
  }
  performOperation(e) {
    if (Ee.safeParse(e).success) {
      const [t, n] = e;
      switch (t) {
        case "setTrue":
          this.setTrue(n);
          break;
        case "setFalse":
          this.setFalse(n);
          break;
        case "toggle":
          this.toggle(n);
          break;
        default:
          throw new Error(`\u672A\u77E5\u5E03\u5C14\u64CD\u4F5C\u65B9\u6CD5: ${t}`);
      }
    } else if (Pe.safeParse(e).success) {
      const [t, n, s] = e;
      switch (t) {
        case "delta":
          this.delta(n, s);
          break;
        case "setTo":
          this.setTo(n, s);
          break;
        case "setValue":
          this.setValue(n, s);
          break;
        default:
          throw new Error(`\u672A\u77E5\u6570\u5B57\u64CD\u4F5C\u65B9\u6CD5: ${t}`);
      }
    } else if (xe.safeParse(e).success) {
      const [t, n, s] = e;
      switch (t) {
        case "setTo":
          this.setTo(n, s);
          break;
        case "setValue":
          this.setValue(n, s);
          break;
        default:
          throw new Error(`\u672A\u77E5\u5B57\u7B26\u4E32\u64CD\u4F5C\u65B9\u6CD5: ${t}`);
      }
    } else if (we.safeParse(e).success) {
      const [t, n, s] = e;
      switch (t) {
        case "add":
          this.add(n, s);
          break;
        case "remove":
          this.remove(n, s);
          break;
        default:
          throw new Error(`\u672A\u77E5\u6807\u7B7E\u64CD\u4F5C\u65B9\u6CD5: ${t}`);
      }
    } else throw new Error(`\u65E0\u6548\u7684\u64CD\u4F5C: ${JSON.stringify(e)}`);
  }
  isTrue(e) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "boolean") return false;
    const t = this.getVariable(e);
    return t ? typeof t.value == "boolean" && t.value : false;
  }
  isFalse(e) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "boolean") return false;
    const t = this.getVariable(e);
    return t ? typeof t.value == "boolean" && !t.value : false;
  }
  eq(e, t) {
    const n = this.getVariable(e);
    return n ? String(n.value) === String(t) : false;
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
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "number") return false;
    const n = this.getVariable(e);
    return n && typeof n.value == "number" ? n.value > t : false;
  }
  gte(e, t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "number") return false;
    const n = this.getVariable(e);
    return n && typeof n.value == "number" ? n.value >= t : false;
  }
  lt(e, t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "number") return false;
    const n = this.getVariable(e);
    return n && typeof n.value == "number" ? n.value < t : false;
  }
  lte(e, t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "number") return false;
    const n = this.getVariable(e);
    return n && typeof n.value == "number" ? n.value <= t : false;
  }
  includes(e, t) {
    var _a2, _b, _c, _d;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "string" && ((_d = (_c = this.config) == null ? void 0 : _c[e]) == null ? void 0 : _d.type) !== "tags") return false;
    const n = this.getVariable(e);
    if (!n) return false;
    const s = String(t);
    return typeof n.value == "string" || Array.isArray(n.value) ? n.value.includes(s) : false;
  }
  notIncludes(e, t) {
    return !this.includes(e, t);
  }
  has(e, t) {
    return this.includes(e, t);
  }
  hasAny(e, t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "tags") return false;
    const n = this.getVariable(e);
    if (!n || !Array.isArray(n.value)) return false;
    const s = n.value.map(String);
    return t.some((r) => s.includes(String(r)));
  }
  hasAll(e, t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[e]) == null ? void 0 : _b.type) !== "tags") return false;
    const n = this.getVariable(e);
    if (!n || !Array.isArray(n.value)) return false;
    const s = n.value.map(String);
    return t.every((r) => s.includes(String(r)));
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
    if (De.safeParse(e).success) {
      const [t, ...n] = e;
      switch (t) {
        case "isTrue":
          return this.isTrue(n[0]);
        case "isFalse":
          return this.isFalse(n[0]);
        case "eq":
          return this.eq(n[0], n[1]);
        case "neq":
          return this.neq(n[0], n[1]);
        case "is":
          return this.is(n[0], n[1]);
        case "isNot":
          return this.isNot(n[0], n[1]);
        case "gt":
          return this.gt(n[0], n[1]);
        case "gte":
          return this.gte(n[0], n[1]);
        case "lt":
          return this.lt(n[0], n[1]);
        case "lte":
          return this.lte(n[0], n[1]);
        case "includes":
          return this.includes(n[0], n[1]);
        case "notIncludes":
          return this.notIncludes(n[0], n[1]);
        case "has":
          return this.has(n[0], n[1]);
        case "hasAny":
          return this.hasAny(n[0], n[1]);
        case "hasAll":
          return this.hasAll(n[0], n[1]);
        case "llmJudge":
          return this.llmJudge(n[0], n[1]);
        default:
          throw new Error(`\u672A\u77E5\u5355\u4E00\u6761\u4EF6\u65B9\u6CD5: ${t}`);
      }
    } else if (Ae.safeParse(e).success || Ne.safeParse(e).success) {
      const [t, n] = e;
      switch (t) {
        case "and":
          return this.and(n);
        case "or":
          return this.or(n);
        case "all":
          return this.all(n);
        case "any":
          return this.any(n);
        case "some":
          return this.some(n);
        default:
          throw new Error(`\u672A\u77E5\u590D\u5408\u6761\u4EF6\u65B9\u6CD5: ${t}`);
      }
    }
    throw new Error(`\u65E0\u6548\u7684\u6761\u4EF6: ${JSON.stringify(e)}`);
  }
}
class ha extends ee {
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
    var _a2, _b;
    const t = e.getProcessingItem();
    if (t && t.type) {
      const i = { dm_intro: "dm_intro", character_intro: "character_intro", character_message: "character_response", character_message_group: "character_response", dm_eval_logic: "dm_eval_changes", participant_message: ((_a2 = t.data) == null ? void 0 : _a2.isDM) ? "dm_narrate_changes" : "player_input", challenge_mode_dm_eval: "dm_eval_changes", challenge_mode_checking: "failure_check", challenge_mode_ending: "ending_check" }[t.type];
      if (i) return i;
    }
    const n = e.getFlatHistoryItems();
    let s;
    for (let r = n.length - 1; r >= 0; r--) {
      const i = n[r];
      if (!(i == null ? void 0 : i.deleted)) {
        switch (i.type) {
          case "dm_intro":
            s = "character_intro";
            break;
          case "character_intro":
            s = "player_input";
            break;
          case "character_message":
            s = this.session.modeState.shouldCheck === false ? "player_input" : "dm_eval_changes";
            break;
          case "character_message_group":
            s = this.session.modeState.shouldCheck === false ? "player_input" : "dm_eval_changes";
            break;
          case "participant_message": {
            const c = i.data;
            (c == null ? void 0 : c.isDM) ? s = "failure_check" : (c == null ? void 0 : c.isUser) || (c == null ? void 0 : c.role) === "user" ? s = "character_response" : s = "player_input";
            break;
          }
          case "dm_eval_logic":
          case "challenge_mode_dm_eval":
            s = "dm_narrate_changes";
            break;
          case "challenge_mode_checking": {
            const c = (_b = i.data) == null ? void 0 : _b.results;
            if (c && c.length > 0) {
              const o = c.some((d) => d.type === "failure"), l = c.some((d) => d.type === "goal");
              if (o) {
                s = c.some((h) => h.type === "failure" && h.result === true) ? "ending_check" : "goal_check";
                break;
              }
              if (l) {
                s = "ending_check";
                break;
              }
            }
            s = void 0;
            break;
          }
          case "challenge_mode_ending":
            s = "ending_check";
            break;
        }
        if (s) break;
      }
    }
    return s ? this.session.modeState.currentPhase === "player_input" && s !== "player_input" ? "player_input" : s : this.session.modeState.currentPhase;
  }
  getActualCurrentUIState(e) {
    var _a2;
    const t = e.getProcessingItem();
    if (t && t.type) {
      const s = { dm_intro: "dm_intro_running", character_intro: "character_intro_running", character_message: "character_response_running", character_message_group: "character_response_running", dm_eval_logic: "dm_eval_changes_running", participant_message: ((_a2 = t.data) == null ? void 0 : _a2.isDM) ? "dm_narrate_changes_running" : "player_input_running", challenge_mode_dm_eval: "dm_eval_changes_running", challenge_mode_checking: "failure_check_running", challenge_mode_ending: "ending_check_running" }[t.type];
      if (s) return s;
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
    var _a2;
    const t = this.session.modeState.currentPhase, n = new kt(this.session.modeState.variableStates, this.session.modeConfig.variables);
    switch (t) {
      case "dm_intro":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_intro")), { type: "LLM_CALL", messages: ft(this.session), callbackPhase: "dm_intro", llmRequestType: "dm_intro" };
      case "character_intro":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("character_intro")), { type: "LLM_CALL", messages: Ct(this.session), callbackPhase: "character_intro", llmRequestType: "character_intro" };
      case "player_input":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "WAIT_FOR_INPUT" };
      case "character_response":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("character_response")), { type: "LLM_CALL", messages: It(this.session, e), callbackPhase: "character_response", llmRequestType: "character_message", dataExtra: { characterId: this.session.modeConfig.characterId, name: ((_a2 = this.session.modeConfig.characterSnapshot) == null ? void 0 : _a2.name) || "Unknown" } };
      case "dm_eval_changes":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_eval_changes")), { type: "LLM_CALL", messages: St(this.session, e), callbackPhase: "dm_eval_changes", llmRequestType: "dm_eval_logic" });
      case "dm_narrate_changes":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate_changes")), { type: "LLM_CALL", messages: bt(this.session, e), callbackPhase: "dm_narrate_changes", llmRequestType: "participant_message", dataExtra: { isDM: true, name: "DM" } });
      case "failure_check":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("failure_check")), this.handleFailureCheck(e, n));
      case "goal_check":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("goal_check")), this.handleGoalCheck(e, n));
      case "ending_check":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("ending_check")), this.handleEndingCheck(e));
      default:
        return { type: "STOP" };
    }
  }
  handleFailureCheck(e, t) {
    this.setCurrentUIState(this.getRunningUIStateForPhase("failure_check"));
    let n = false;
    const s = [], r = this.session.modeConfig.failureChecks || [];
    for (const i of r) {
      const c = t.checkCondition(i.condition), o = this.session.modeState.failureStates.find((l) => l.key === i.key);
      o && (o.isCompleted = c), c && (n = true), s.push({ type: "failure", key: i.key, result: c });
    }
    return e.addHistoryItem({ id: b(), type: "challenge_mode_checking", idx: 0, orderRef: 0, timestamp: Date.now(), data: { results: s }, hidden: true }), this.setCurrentUIState(this.getDoneUIStateForPhase("failure_check")), n ? this.enterNextState("ending_check") : this.enterNextState("goal_check"), { type: "STATE_CHANGE" };
  }
  handleGoalCheck(e, t) {
    this.setCurrentUIState(this.getRunningUIStateForPhase("goal_check"));
    const n = [], s = this.session.modeConfig.goals || [];
    for (const r of s) {
      const i = t.checkCondition(r.condition), c = this.session.modeState.goalStates.find((o) => o.key === r.key);
      c && (c.isCompleted = i), n.push({ type: "goal", key: r.key, result: i });
    }
    return this.setCurrentUIState(this.getDoneUIStateForPhase("goal_check")), this.enterNextState("ending_check"), { type: "STATE_CHANGE" };
  }
  handleEndingCheck(e) {
    var _a2;
    this.setCurrentUIState(this.getRunningUIStateForPhase("ending_check"));
    const t = (this.session.modeState.failureStates || []).find((c) => c.isCompleted), n = this.session.modeConfig.goals || [], s = n.length > 0 && n.every((c) => {
      var _a3;
      return (_a3 = this.session.modeState.goalStates.find((l) => l.key === c.key)) == null ? void 0 : _a3.isCompleted;
    }), r = !!t;
    if (r || s) {
      if (!e.state.historyItems.findLast((o) => o.type === "challenge_mode_ending")) {
        let o = "", l;
        r ? (o = ((_a2 = this.session.modeConfig.failureChecks.find((h) => h.key === (t == null ? void 0 : t.key))) == null ? void 0 : _a2.userInfo) || "\u6311\u6218\u5931\u8D25\u3002", l = t == null ? void 0 : t.key) : o = "\u606D\u559C\u4F60\uFF01\u6240\u6709\u6311\u6218\u76EE\u6807\u5DF2\u8FBE\u6210\u3002", e.addHistoryItem({ id: b(), type: "challenge_mode_ending", idx: 0, orderRef: 0, timestamp: Date.now(), data: { type: r ? "failure" : "success", description: o, failureReason: l }, hidden: false }), this.setShouldCheck(false);
      }
      return this.setCurrentUIState("ended"), { type: "STOP" };
    }
    return this.setCurrentUIState(this.getDoneUIStateForPhase("ending_check")), this.enterNextState("player_input"), { type: "STATE_CHANGE" };
  }
}
function he(a) {
  return Math.floor((a - 10) / 2);
}
function Tt(a, e) {
  const t = Math.floor(Math.random() * 20) + 1, n = t + e;
  return { naturalRoll: t, total: n, modifier: e, isSuccess: n >= a };
}
function Mt(a, e) {
  const t = e[a.attribute] || 10, n = he(t);
  return Tt(a.dc, n);
}
function $t(a) {
  try {
    const e = a.match(/```(?:json)?\s*\n?([\s\S]*?)```/), t = e ? e[1].trim() : a.trim(), n = t.indexOf("{"), s = t.lastIndexOf("}") + 1;
    if (n < 0 || s <= n) return console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5931\u8D25\uFF1A\u672A\u627E\u5230 JSON \u5757", a.slice(0, 200)), null;
    const r = JSON.parse(t.slice(n, s));
    if (r.none === true || r.none === "true") return { needsCheck: false };
    const i = r.playerId || r.player_id || r.\u89D2\u8272ID || r.\u6267\u884C\u8005ID, c = r.attribute || r.\u5C5E\u6027 || r.\u68C0\u5B9A\u7EF4\u5EA6, o = Number(r.dc || r.DC || r.\u76EE\u6807\u6570\u503C || r.\u96BE\u5EA6 || 0);
    return i && c && o > 0 ? { needsCheck: true, checkSpec: { intent: r.intent || r.\u610F\u56FE || r.reason || r.\u5177\u4F53\u610F\u56FE || "", type: r.type || "attribute", attribute: c, dc: o, playerId: i } } : (console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56 JSON \u5B57\u6BB5\u4E0D\u5B8C\u6574:", r), null);
  } catch (e) {
    return console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5F02\u5E38:", e, a.slice(0, 200)), null;
  }
}
function vt(a) {
  try {
    const e = a.indexOf("{"), t = a.lastIndexOf("}") + 1;
    if (e < 0 || t <= e) return null;
    const n = JSON.parse(a.slice(e, t)), s = n.nextPlayerId || n.\u6307\u5B9A\u7684\u73A9\u5BB6ID;
    return s ? { nextPlayerId: s, reason: n.reason || n.\u539F\u56E0 || "" } : null;
  } catch {
    return null;
  }
}
function Et(a) {
  const e = a.replace(/<[^>]*$/, ""), t = [], n = /<\/?([a-zA-Z]\w*)[^>]*>/g;
  let s;
  for (; (s = n.exec(e)) !== null; ) {
    const i = s[1].toLowerCase();
    s[0].startsWith("</") ? t.length > 0 && t.at(-1) === i && t.pop() : t.push(i);
  }
  let r = e;
  for (; t.length > 0; ) {
    const i = t.pop();
    r += `</${i}>`;
  }
  return r;
}
function Pt(a, e) {
  let t = a;
  return e.userName && (t = t.replace(/\{\{user\}\}/gi, e.userName), t = t.replace(/<USER>/gi, e.userName)), e.charName && (t = t.replace(/\{\{char\}\}/gi, e.charName), t = t.replace(/<BOT>/gi, e.charName)), t;
}
const xt = /<think>([\s\S]*?)<\/think>/, wt = /<speak>([\s\S]*?)<\/speak>/, Dt = /<action>([\s\S]*?)<\/action>/;
function pa(a) {
  var _a2, _b, _c, _d, _e2, _f;
  const e = Et(a), t = (_b = (_a2 = e.match(xt)) == null ? void 0 : _a2[1]) == null ? void 0 : _b.trim(), n = (_d = (_c = e.match(wt)) == null ? void 0 : _c[1]) == null ? void 0 : _d.trim(), s = (_f = (_e2 = e.match(Dt)) == null ? void 0 : _e2[1]) == null ? void 0 : _f.trim(), r = e.replace(/<\/?[a-zA-Z]\w*[^>]*>/g, "").trim();
  return { think: t, speak: n, action: s, rawText: r };
}
function G(a) {
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
function j(a) {
  return a.modeConfig.worldSnapshot;
}
function w(a) {
  return a.modeConfig.playerCharacterSnapshots;
}
function At(a, e) {
  return a.modeConfig.playerCharacterSnapshots.find((t) => t.id === e);
}
function U(a, e) {
  return a.map((t) => {
    const n = Object.entries(t.attributes).map(([r, i]) => `${r}:${i}(${he(i)})`).join(", "), s = e[t.id] || 0;
    return `- ${t.name} (ID: ${t.id}): ${n} (\u7D2F\u8BA1\u884C\u52A8: ${s}\u6B21)`;
  }).join(`
`);
}
function V(a) {
  return a.map((e) => `- ${e.name} (ID: ${e.id}): ${e.systemPrompt}`).join(`
`);
}
function J(a, e, t = 15) {
  const n = w(e);
  return a.getFlatHistoryItems(t).filter((s) => !s.hidden && !s.deleted).map((s) => {
    var _a2;
    const { type: r, data: i } = s;
    if (r === "dnd_dm_intro" || r === "dnd_dm_narrate") return `[DM]: ${i.content}`;
    if (r === "dnd_player_action") return `[${i.characterName || ((_a2 = n.find((o) => o.id === i.characterId)) == null ? void 0 : _a2.name) || i.characterId}]: ${i.content}`;
    if (r === "participant_message") return i.isDM ? `[DM]: ${i.content}` : `[${i.name || "\u73A9\u5BB6"}]: ${i.content}`;
    if (r === "dnd_roll_result") {
      const c = i.checkSpec, o = i.checkResult;
      return `[\u7CFB\u7EDF\u68C0\u5B9A] ${c.intent}: 1d20(${o.naturalRoll}) + ${c.attribute}\u4FEE\u6B63(${o.modifier}) = ${o.total} vs DC:${c.dc} \u2192 ${o.isSuccess ? "\u6210\u529F" : "\u5931\u8D25"}`;
    }
    return r === "dnd_system_notice" ? `[\u7CFB\u7EDF]: ${i.content}` : null;
  }).filter(Boolean).join(`
`);
}
function Nt(a) {
  var _a2;
  return ((_a2 = a.modeConfig.playerCharacterSnapshots.find((t) => t.isHumanControlled)) == null ? void 0 : _a2.name) || "\u5192\u9669\u8005";
}
function D(a, e, t) {
  const n = Nt(e), s = t || e.modeConfig.dmName || "DM";
  return a.map((r) => ({ ...r, content: Pt(r.content, { userName: n, charName: s }) }));
}
function Rt(a, e) {
  const t = j(a), n = w(a), s = a.modeState.turnCounts, r = a.modeConfig.gameMode, i = `\u4F60\u662F DM (\u5730\u4E0B\u57CE\u4E3B)\u3002\u8BF7\u4E3A\u8FD9\u4E2A DND \u5192\u9669\u521B\u5EFA\u5F15\u4EBA\u5165\u80DC\u7684\u5F00\u573A\u4ECB\u7ECD\uFF0C\u8BBE\u7F6E\u4E16\u754C\u80CC\u666F\u548C\u521D\u59CB\u573A\u666F\u3002
${G(r)}
${t.systemPrompt}
${t.globalKnowledge ? `
\u3010\u4E16\u754C\u89C2\u8865\u5145\u3011
${t.globalKnowledge}` : ""}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, c = ["\u3010\u6E38\u620F\u914D\u7F6E\u3011", `DM: ${a.modeConfig.dmName || "DM"}`, `\u4E16\u754C: ${t.name} \u2014 ${t.description}`, `\u53C2\u4E0E\u89D2\u8272:
${V(n)}`, `\u3010\u521D\u59CB\u6570\u503C\u72B6\u6001\u3011
${U(n, s)}`].join(`

`);
  return D([{ role: "system", content: i }, { role: "user", content: c }], a);
}
function Ut(a, e) {
  const t = j(a), n = w(a), s = a.modeState.turnCounts, r = a.modeConfig.gameMode, i = a.modeState.historySummary, c = `\u4F60\u662F DM\u3002\u8BF7\u6839\u636E\u5F53\u524D\u5267\u60C5\u8FDB\u5C55\u63CF\u5199\u573A\u666F\uFF0C\u63A8\u8FDB\u6545\u4E8B\u3002
\u4E0D\u9700\u8981\u5728\u6B64\u9636\u6BB5\u6307\u5B9A\u89D2\u8272\u6216\u63D0\u51FA\u68C0\u5B9A\uFF0C\u53EA\u9700\u63CF\u5199\u3002
${G(r)}
${t.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, o = J(e, a, 10), l = ["\u3010\u6E38\u620F\u914D\u7F6E\u3011", `\u4E16\u754C: ${t.name}`, `\u89D2\u8272:
${V(n)}`, i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "", o ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${o}` : "", `\u3010\u6570\u503C\u72B6\u6001\u3011
${U(n, s)}`].filter(Boolean).join(`

`);
  return D([{ role: "system", content: c }, { role: "user", content: l }], a);
}
function Ft(a, e) {
  const t = w(a), n = a.modeState.turnCounts, s = a.modeConfig.gameMode, r = t.map((m) => n[m.id] || 0), c = (r.length > 0 ? Math.min(...r) : 0) + 2, o = t.filter((m) => (n[m.id] || 0) <= c).sort((m, C) => (n[m.id] || 0) - (n[C.id] || 0)), l = `\u4F60\u662F DM\u3002\u8BF7\u6839\u636E\u521A\u624D\u7684\u53D9\u4E8B\uFF0C\u4ECE\u5019\u9009\u540D\u5355\u4E2D\u6307\u5B9A\u3010\u4E0B\u4E00\u4E2A\u3011\u884C\u52A8\u7684\u89D2\u8272\u3002
${G(s)}
\u3010\u516C\u5E73\u6027\u539F\u5219\u3011\uFF1A\u4E3A\u4E86\u786E\u4FDD\u6BCF\u4E2A\u73A9\u5BB6\u90FD\u6709\u5E73\u7B49\u7684\u53C2\u4E0E\u673A\u4F1A\uFF0C\u4F60\u3010\u5FC5\u987B\u3011\u4EC5\u4ECE\u4EE5\u4E0B\u63D0\u4F9B\u7684\u540D\u5355\u4E2D\u9009\u62E9\u3002\u8BF7\u4F18\u5148\u8003\u8651\u884C\u52A8\u6B21\u6570\u6700\u5C11\u7684\u89D2\u8272\u3002
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u9700\u8F93\u51FA\u4E00\u4E2A JSON \u5757\uFF0C\u4E0D\u8981\u5305\u542B\u4EFB\u4F55\u53D9\u4E8B\u6587\u5B57\u3002
\`\`\`json
{ "reason": "\u539F\u56E0", "nextPlayerId": "\u89D2\u8272ID" }
\`\`\`
\u5019\u9009\u540D\u5355\uFF08\u4EC5\u9650\u5DF2\u884C\u52A8\u6B21\u6570\u8F83\u5C11\u7684\u89D2\u8272\uFF09\uFF1A
${o.map((m) => `- ${m.name} (ID: ${m.id}, \u5DF2\u884C\u52A8: ${n[m.id] || 0}\u6B21)`).join(`
`)}`, h = e.getFlatHistoryItems(5).findLast((m) => m.type === "dnd_dm_narrate" || m.type === "dnd_dm_intro"), f = h ? `\u3010\u5F53\u524D\u573A\u666F\u3011
${h.data.content}` : `\u3010\u521D\u59CB\u573A\u666F\u3011
\u5192\u9669\u5F00\u59CB\u3002`, y = `\u3010\u6240\u6709\u89D2\u8272\u884C\u52A8\u7EDF\u8BA1\u3011
${t.map((m) => `${m.name}: ${n[m.id] || 0} \u6B21`).join(`
`)}`;
  return D([{ role: "system", content: l }, { role: "user", content: [f, y].join(`

`) }], a);
}
function Lt(a, e) {
  const t = a.modeState.turnCounts, n = a.modeState.currentTurnCharacterId, s = At(a, n), r = a.modeState.historySummary, i = a.modeConfig.gameMode;
  if (!s) return [];
  const c = `\u4F60\u662F\u73A9\u5BB6 ${s.name} (${s.id})\u3002${s.systemPrompt}
\u8BF7\u57FA\u4E8E\u5F53\u524D\u573A\u666F\u548C DM \u7684\u5F15\u5BFC\u51B3\u5B9A\u4F60\u7684\u884C\u52A8\u3002
${G(i)}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<think>\u5185\u5FC3\u72EC\u767D</think><speak>\u53E3\u5934\u8868\u8FBE</speak><action>\u5177\u4F53\u884C\u52A8</action>\u3002`, o = J(e, a, 8), l = U([s], t), d = [`\u3010\u4F60\u7684\u89D2\u8272\u4FE1\u606F\u3011
${s.systemPrompt}`, r ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${r}` : "", o ? `\u3010\u5F53\u524D\u573A\u666F\u3011
${o}` : "", `\u3010\u4F60\u7684\u6570\u503C\u72B6\u6001\u3011
${l}`].filter(Boolean).join(`

`);
  return D([{ role: "system", content: c }, { role: "user", content: d }], a, s.name);
}
function Ht(a, e) {
  const t = j(a), n = w(a), s = a.modeState.turnCounts, r = a.modeState.historySummary, i = `\u4F60\u662F DM\u3002\u8BF7\u8BC4\u4EF7\u521A\u624D\u73A9\u5BB6\u7684\u884C\u52A8\uFF0C\u5E76\u63CF\u5199\u5176\u521D\u6B65\u53CD\u5E94\u3002
\u4E0D\u8981\u5728\u6B64\u9636\u6BB5\u8F93\u51FA\u68C0\u5B9A JSON\uFF0C\u4E5F\u4E0D\u8981\u63CF\u8FF0\u6700\u7EC8\u7ED3\u679C\u3002
${t.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, c = J(e, a, 10), o = [`\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${t.name}
\u89D2\u8272:
${V(n)}`, r ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${r}` : "", c ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${c}` : "", `\u3010\u6570\u503C\u72B6\u6001\u3011
${U(n, s)}`].filter(Boolean).join(`

`);
  return D([{ role: "system", content: i }, { role: "user", content: o }], a);
}
function Ot(a, e) {
  const t = j(a), n = w(a), s = a.modeState.turnCounts, r = a.modeState.historySummary, i = a.modeConfig.gameMode, c = `\u4F60\u662F DM\u3002\u57FA\u4E8E\u73A9\u5BB6\u521A\u624D\u7684\u884C\u52A8\uFF0C\u51B3\u5B9A\u662F\u5426\u9700\u8981\u8FDB\u884C DND 5e \u68C0\u5B9A\u3002
${G(i)}
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
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u4EFB\u4F55\u53D9\u4E8B\u3002`, o = J(e, a, 10), l = [`\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${t.name}
\u89D2\u8272:
${V(n)}`, r ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${r}` : "", o ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${o}` : "", `\u3010\u89D2\u8272\u6570\u503C\u72B6\u6001\u3011
${U(n, s)}`].filter(Boolean).join(`

`);
  return D([{ role: "system", content: c }, { role: "user", content: l }], a);
}
function Gt(a, e) {
  var _a2;
  const t = j(a), n = w(a), s = a.modeState.turnCounts, r = a.modeState.historySummary, i = a.modeState.lastCheckResult, c = a.modeState.lastCheckSpec, o = `\u4F60\u662F DM\u3002\u68C0\u5B9A\u7ED3\u679C\u5DF2\u51FA\u3002\u8BF7\u6839\u636E\u7ED3\u679C\u63CF\u8FF0\u540E\u679C\uFF0C\u5E76\u5F15\u5BFC\u5267\u60C5\u3002
${t.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, l = J(e, a, 10), d = i && c ? `\u3010\u68C0\u5B9A\u7ED3\u679C\u3011
\u610F\u56FE: ${c.intent}
\u6267\u884C\u8005: ${((_a2 = n.find((f) => f.id === c.playerId)) == null ? void 0 : _a2.name) || c.playerId}
\u9AB0\u5B50\u7ED3\u679C: ${i.total} (1d20:${i.naturalRoll} + \u4FEE\u6B63:${i.modifier}) vs DC:${c.dc}
\u7ED3\u8BBA: ${i.isSuccess ? "\u6210\u529F" : "\u5931\u8D25"}
\u8BF7\u6839\u636E\u6B64\u7ED3\u679C\u8FDB\u884C\u9488\u5BF9\u6027\u7684\u540E\u679C\u63CF\u8FF0\u3002` : "", h = [`\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${t.name}
\u89D2\u8272:
${V(n)}`, r ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${r}` : "", l ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${l}` : "", d, `\u3010\u6570\u503C\u72B6\u6001\u3011
${U(n, s)}`].filter(Boolean).join(`

`);
  return D([{ role: "system", content: o }, { role: "user", content: h }], a);
}
class ga extends ee {
  constructor(e) {
    super(e), this.session = e;
  }
  getCurrentPhase() {
    return this.session.modeState.currentPhase;
  }
  getCurrentUIState() {
    return this.session.modeState.currentUIState;
  }
  getActualCurrentPhase(e) {
    var _a2, _b, _c;
    const t = e.getProcessingItem();
    if (t == null ? void 0 : t.type) {
      const s = { dnd_dm_intro: "dm_game_intro", dnd_dm_narrate: "dm_narrate", dnd_assign_player: "dm_assign_player", dnd_player_action: "player_action", dnd_check_decision: "dm_check_decision", dnd_roll_result: "fn_roll_check" };
      if (t.type === "participant_message" && ((_a2 = t.data) == null ? void 0 : _a2.isDM)) return "dm_check_eval";
      const r = s[t.type];
      if (r) return r;
    }
    const n = e.getFlatHistoryItems();
    for (let s = n.length - 1; s >= 0; s--) {
      const r = n[s];
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
  getActualCurrentUIState(e) {
    var _a2;
    const t = e.getProcessingItem();
    if (t == null ? void 0 : t.type) {
      const n = { dnd_dm_intro: "dm_game_intro_running", dnd_dm_narrate: "dm_narrate_running", dnd_assign_player: "dm_assign_player_running", dnd_player_action: "player_action_running", dnd_check_decision: "dm_check_decision_running", dnd_roll_result: "fn_roll_check_running" };
      if (t.type === "participant_message" && ((_a2 = t.data) == null ? void 0 : _a2.isDM)) return "dm_check_eval_running";
      const s = n[t.type];
      if (s) return s;
    }
    return this.session.modeState.currentUIState ? this.session.modeState.currentUIState : this.getReadyUIStateForPhase(this.getActualCurrentPhase(e));
  }
  getReadyUIStateForPhase(e) {
    return `${e}_ready`;
  }
  getRunningUIStateForPhase(e) {
    return `${e}_running`;
  }
  getDoneUIStateForPhase(e) {
    return `${e}_done`;
  }
  enterNextState(e) {
    console.log(`[DndManager] Transition: ${this.session.modeState.currentPhase} -> ${e}`), this.session.modeState.currentPhase = e, this.session.updatedAt = Date.now();
  }
  setCurrentUIState(e) {
    this.session.modeState.currentUIState = e, this.session.updatedAt = Date.now();
  }
  setCurrentTurn(e) {
    this.session.modeState.currentTurnCharacterId = e, this.session.updatedAt = Date.now();
  }
  incrementTurnCount(e) {
    this.session.modeState.turnCounts[e] || (this.session.modeState.turnCounts[e] = 0), this.session.modeState.turnCounts[e]++, this.session.updatedAt = Date.now();
  }
  incrementRound() {
    this.session.modeState.currentRound++, this.session.updatedAt = Date.now();
  }
  async executeCurrentStateLogic(e) {
    switch (this.session.modeState.currentPhase) {
      case "dm_game_intro":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_game_intro")), { type: "LLM_CALL", messages: Rt(this.session), callbackPhase: "dm_game_intro", llmRequestType: "dnd_dm_intro" };
      case "dm_narrate":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate")), { type: "LLM_CALL", messages: Ut(this.session, e), callbackPhase: "dm_narrate", llmRequestType: "dnd_dm_narrate", dataExtra: { phase: "dm_narrate" } };
      case "dm_assign_player":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_assign_player")), { type: "LLM_CALL", messages: Ft(this.session, e), callbackPhase: "dm_assign_player", llmRequestType: "dnd_assign_player" };
      case "player_action":
        return this.handlePlayerAction(e);
      case "dm_check_eval":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_eval")), { type: "LLM_CALL", messages: Ht(this.session, e), callbackPhase: "dm_check_eval", llmRequestType: "dnd_dm_narrate", dataExtra: { phase: "dm_check_eval" } };
      case "dm_check_decision":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_decision")), { type: "LLM_CALL", messages: Ot(this.session, e), callbackPhase: "dm_check_decision", llmRequestType: "dnd_check_decision" };
      case "fn_roll_check":
        return this.handleRollCheck(e);
      case "dm_tell_result":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_tell_result")), { type: "LLM_CALL", messages: Gt(this.session, e), callbackPhase: "dm_tell_result", llmRequestType: "dnd_dm_narrate", dataExtra: { phase: "dm_tell_result" } };
      default:
        return { type: "STOP" };
    }
  }
  handlePlayerAction(e) {
    const t = this.session.modeState.currentTurnCharacterId, n = this.session.modeConfig.playerCharacterSnapshots.find((s) => s.id === t);
    return n ? n.isHumanControlled ? (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), { type: "WAIT_FOR_INPUT" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), { type: "LLM_CALL", messages: Lt(this.session, e), callbackPhase: "player_action", llmRequestType: "dnd_player_action", dataExtra: { characterId: n.id, characterName: n.name, isHumanControlled: false } }) : (console.error(`[DndManager] \u89D2\u8272 ${t} \u4E0D\u5B58\u5728`), this.enterNextState("dm_assign_player"), { type: "STATE_CHANGE" });
  }
  handleRollCheck(e) {
    this.setCurrentUIState(this.getRunningUIStateForPhase("fn_roll_check"));
    const t = this.session.modeState.lastCheckSpec;
    if (!t) return console.error("[DndManager] \u68C0\u5B9A\u89C4\u8303\u7F3A\u5931\uFF0C\u8DF3\u8FC7\u68C0\u5B9A"), this.enterNextState("dm_narrate"), { type: "STATE_CHANGE" };
    const n = this.session.modeConfig.playerCharacterSnapshots.find((r) => r.id === t.playerId);
    if (!n) return console.error(`[DndManager] \u68C0\u5B9A\u89D2\u8272 ${t.playerId} \u4E0D\u5B58\u5728`), this.enterNextState("dm_narrate"), { type: "STATE_CHANGE" };
    const s = Mt(t, n.attributes);
    return this.session.modeState.lastCheckResult = s, e.addHistoryItem({ id: b(), type: "dnd_roll_result", idx: 0, orderRef: 0, timestamp: Date.now(), data: { checkSpec: t, checkResult: s, characterName: n.name, attributeName: t.attribute } }), this.setCurrentUIState(this.getDoneUIStateForPhase("fn_roll_check")), this.enterNextState("dm_tell_result"), { type: "STATE_CHANGE" };
  }
  handleLLMResponse(e, t, n) {
    switch (e) {
      case "dm_game_intro":
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_game_intro")), this.enterNextState("dm_assign_player");
        break;
      case "dm_narrate":
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_narrate")), this.enterNextState("dm_assign_player");
        break;
      case "dm_assign_player": {
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_assign_player"));
        const s = vt(t);
        if (s) {
          const r = this.session.modeConfig.playerCharacterSnapshots.find((i) => i.id === s.nextPlayerId);
          n.addHistoryItem({ id: b(), type: "dnd_assign_player", idx: 0, orderRef: 0, timestamp: Date.now(), data: { nextPlayerId: s.nextPlayerId, nextPlayerName: r == null ? void 0 : r.name, reason: s.reason, isHumanControlled: r == null ? void 0 : r.isHumanControlled }, hidden: true }), n.addHistoryItem({ id: b(), type: "dnd_system_notice", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: `\u8F6E\u5230 ${(r == null ? void 0 : r.name) || s.nextPlayerId} \u884C\u52A8`, noticeType: "turn_start", characterId: s.nextPlayerId, characterName: r == null ? void 0 : r.name } }), this.setCurrentTurn(s.nextPlayerId), this.enterNextState("player_action");
        } else console.warn("[DndManager] \u89E3\u6790 DM \u6307\u5B9A\u89D2\u8272\u5931\u8D25\uFF0C\u91CD\u8BD5"), this.enterNextState("dm_assign_player");
        break;
      }
      case "player_action": {
        this.setCurrentUIState(this.getDoneUIStateForPhase("player_action"));
        const s = this.session.modeState.currentTurnCharacterId;
        this.incrementTurnCount(s), this.enterNextState("dm_check_eval");
        break;
      }
      case "dm_check_eval":
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_eval")), this.enterNextState("dm_check_decision");
        break;
      case "dm_check_decision": {
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_decision"));
        const s = $t(t);
        n.addHistoryItem({ id: b(), type: "dnd_check_decision", idx: 0, orderRef: 0, timestamp: Date.now(), data: { needsCheck: (s == null ? void 0 : s.needsCheck) ?? false, checkSpec: (s == null ? void 0 : s.needsCheck) ? s.checkSpec : void 0, rawContent: t }, hidden: true }), (s == null ? void 0 : s.needsCheck) && "checkSpec" in s ? (console.log("[DndManager] \u68C0\u5B9A\u51B3\u7B56\uFF1A\u9700\u8981\u68C0\u5B9A", s.checkSpec), this.session.modeState.lastCheckSpec = s.checkSpec, this.enterNextState("fn_roll_check")) : s === null ? (console.warn("[DndManager] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5931\u8D25\uFF0C\u91CD\u8BD5 dm_check_decision"), this.enterNextState("dm_check_decision")) : (console.log("[DndManager] \u68C0\u5B9A\u51B3\u7B56\uFF1A\u65E0\u9700\u68C0\u5B9A\uFF0C\u76F4\u63A5\u8FDB\u5165\u53D9\u4E8B"), this.enterNextState("dm_narrate"));
        break;
      }
      case "dm_tell_result":
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_tell_result")), this.enterNextState("dm_assign_player");
        break;
      default:
        console.warn(`[DndManager] \u672A\u77E5\u7684\u56DE\u8C03\u9636\u6BB5: ${e}`);
        break;
    }
  }
}
const jt = _({ \u529B\u91CF: p().describe("\u529B\u91CF\u5C5E\u6027\u503C"), \u654F\u6377: p().describe("\u654F\u6377\u5C5E\u6027\u503C"), \u4F53\u8D28: p().describe("\u4F53\u8D28\u5C5E\u6027\u503C"), \u667A\u529B: p().describe("\u667A\u529B\u5C5E\u6027\u503C"), \u611F\u77E5: p().describe("\u611F\u77E5\u5C5E\u6027\u503C"), \u9B45\u529B: p().describe("\u9B45\u529B\u5C5E\u6027\u503C") }), Vt = _({ intent: u().describe("\u68C0\u5B9A\u610F\u56FE"), type: S(["attribute", "saving", "attack"]).describe("\u68C0\u5B9A\u7C7B\u578B"), attribute: u().describe("\u68C0\u5B9A\u7EF4\u5EA6"), dc: p().describe("\u76EE\u6807\u6570\u503C (DC)"), playerId: u().describe("\u6267\u884C\u68C0\u5B9A\u7684\u89D2\u8272 ID") }), Jt = _({ naturalRoll: p().describe("\u9AB0\u5B50\u539F\u503C"), total: p().describe("\u603B\u503C (\u539F\u503C + \u4FEE\u6B63)"), modifier: p().describe("\u5C5E\u6027\u4FEE\u6B63"), isSuccess: T().describe("\u662F\u5426\u6210\u529F") }), Bt = S(["dm_game_intro", "dm_narrate", "dm_assign_player", "player_action", "dm_check_eval", "dm_check_decision", "fn_roll_check", "dm_tell_result"]), Wt = S(["idle", "dm_game_intro_ready", "dm_game_intro_running", "dm_game_intro_done", "dm_narrate_ready", "dm_narrate_running", "dm_narrate_done", "dm_assign_player_ready", "dm_assign_player_running", "dm_assign_player_done", "player_action_ready", "player_action_running", "player_action_done", "dm_check_eval_ready", "dm_check_eval_running", "dm_check_eval_done", "dm_check_decision_ready", "dm_check_decision_running", "dm_check_decision_done", "fn_roll_check_ready", "fn_roll_check_running", "fn_roll_check_done", "dm_tell_result_ready", "dm_tell_result_running", "dm_tell_result_done"]), _a = { idle: { label: "\u7A7A\u95F2", placeholder: "\u8BF7\u5148\u70B9\u51FB\u5F00\u59CB\u6216\u7EE7\u7EED...", inputEnabled: false }, dm_game_intro_ready: { label: "DM\u5F00\u573A\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u5F00\u573A\u4ECB\u7ECD...", inputEnabled: false }, dm_game_intro_running: { label: "DM\u5F00\u573A\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u4ECB\u7ECD\u4E16\u754C...", inputEnabled: false }, dm_game_intro_done: { label: "DM\u5F00\u573A\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u5F00\u573A\u4ECB\u7ECD\u5B8C\u6210...", inputEnabled: false }, dm_narrate_ready: { label: "DM\u53D9\u4E8B\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u53D9\u4E8B...", inputEnabled: false }, dm_narrate_running: { label: "DM\u53D9\u4E8B\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u63CF\u5199\u573A\u666F...", inputEnabled: false }, dm_narrate_done: { label: "DM\u53D9\u4E8B\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u53D9\u4E8B\u5B8C\u6210...", inputEnabled: false }, dm_assign_player_ready: { label: "\u6307\u5B9A\u89D2\u8272\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u51B3\u5B9A\u8C01\u884C\u52A8...", inputEnabled: false }, dm_assign_player_running: { label: "\u6307\u5B9A\u89D2\u8272\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u6307\u5B9A\u89D2\u8272...", inputEnabled: false }, dm_assign_player_done: { label: "\u6307\u5B9A\u89D2\u8272\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u5DF2\u88AB\u6307\u5B9A...", inputEnabled: false }, player_action_ready: { label: "\u89D2\u8272\u884C\u52A8\uFF08\u51C6\u5907\uFF09", placeholder: "\u8F6E\u5230\u4F60\u884C\u52A8\u4E86\uFF0C\u63CF\u8FF0\u4F60\u7684\u884C\u52A8...", inputEnabled: true }, player_action_running: { label: "\u89D2\u8272\u884C\u52A8\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u884C\u52A8...", inputEnabled: false }, player_action_done: { label: "\u89D2\u8272\u884C\u52A8\uFF08\u5B8C\u6210\uFF09", placeholder: "\u884C\u52A8\u5B8C\u6210...", inputEnabled: false }, dm_check_eval_ready: { label: "DM\u8BC4\u4EF7\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u8BC4\u4EF7\u884C\u52A8...", inputEnabled: false }, dm_check_eval_running: { label: "DM\u8BC4\u4EF7\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u8BC4\u4EF7\u884C\u52A8...", inputEnabled: false }, dm_check_eval_done: { label: "DM\u8BC4\u4EF7\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u8BC4\u4EF7\u5B8C\u6210...", inputEnabled: false }, dm_check_decision_ready: { label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u5224\u5B9A\u662F\u5426\u9700\u8981\u68C0\u5B9A...", inputEnabled: false }, dm_check_decision_running: { label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u5224\u5B9A...", inputEnabled: false }, dm_check_decision_done: { label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u5B8C\u6210\uFF09", placeholder: "\u68C0\u5B9A\u51B3\u7B56\u5B8C\u6210...", inputEnabled: false }, fn_roll_check_ready: { label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u63B7\u9AB0...", inputEnabled: false }, fn_roll_check_running: { label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u6B63\u5728\u63B7\u9AB0...", inputEnabled: false }, fn_roll_check_done: { label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u5B8C\u6210\uFF09", placeholder: "\u63B7\u9AB0\u5B8C\u6210...", inputEnabled: false }, dm_tell_result_ready: { label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u63CF\u8FF0\u68C0\u5B9A\u7ED3\u679C...", inputEnabled: false }, dm_tell_result_running: { label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u63CF\u8FF0\u7ED3\u679C...", inputEnabled: false }, dm_tell_result_done: { label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u63CF\u8FF0\u5B8C\u6210...", inputEnabled: false } }, qt = S(["standard", "narrative", "hardcore", "solo"]), Kt = _({ id: u().describe("\u89D2\u8272 ID"), name: u().describe("\u89D2\u8272\u540D\u79F0"), description: u().describe("\u89D2\u8272\u63CF\u8FF0"), avatar: u().optional().describe("\u89D2\u8272\u5934\u50CF"), systemPrompt: u().describe("\u89D2\u8272\u626E\u6F14\u6307\u5F15"), attributes: jt.describe("\u89D2\u8272\u5C5E\u6027"), race: u().optional().describe("\u79CD\u65CF"), class: u().optional().describe("\u804C\u4E1A"), currentHP: p().describe("\u5F53\u524D\u751F\u547D\u503C"), maxHP: p().describe("\u6700\u5927\u751F\u547D\u503C"), isHumanControlled: T().describe("\u662F\u5426\u7531\u4EBA\u7C7B\u63A7\u5236") }), Zt = _({ name: u().describe("\u4E16\u754C\u540D\u79F0"), description: u().describe("\u4E16\u754C\u63CF\u8FF0"), systemPrompt: u().describe("\u6838\u5FC3\u7CFB\u7EDF\u63D0\u793A\u8BCD"), globalKnowledge: u().optional().describe("\u4E16\u754C\u89C2\u8865\u5145") }), zt = _({ worldSnapshot: Zt.describe("\u4E16\u754C\u8BBE\u5B9A\u5FEB\u7167"), gameMode: qt.describe("\u73A9\u6CD5\u6A21\u5F0F"), playerCharacterSnapshots: I(Kt).describe("\u53C2\u4E0E\u89D2\u8272\u5FEB\u7167\u5217\u8868"), dmName: u().optional().describe("DM \u663E\u793A\u540D\u79F0") }), Xt = _({ currentPhase: Bt.describe("\u5F53\u524D\u9636\u6BB5\u540D\u79F0"), currentUIState: Wt.describe("\u5F53\u524D UI \u72B6\u6001\u540D\u79F0"), currentTurnCharacterId: u().describe("\u5F53\u524D\u884C\u52A8\u89D2\u8272 ID ('dm' \u6216\u89D2\u8272ID)"), currentRound: p().describe("\u5F53\u524D\u56DE\u5408\u6570"), turnCounts: q(u(), p()).describe("\u6BCF\u4E2A\u89D2\u8272\u7684\u884C\u52A8\u6B21\u6570\u7EDF\u8BA1"), lastCheckSpec: Vt.optional().describe("\u6700\u8FD1\u4E00\u6B21\u68C0\u5B9A\u89C4\u8303"), lastCheckResult: Jt.optional().describe("\u6700\u8FD1\u4E00\u6B21\u68C0\u5B9A\u7ED3\u679C"), historySummary: u().describe("\u5386\u53F2\u6458\u8981") });
W.extend({ mode: O("dnd").describe("\u6A21\u5F0F"), modeConfig: zt.describe("DnD \u6A21\u5F0F\u914D\u7F6E"), modeState: Xt.describe("DnD \u6A21\u5F0F\u72B6\u6001") });
class ya extends ee {
  constructor(e) {
    super(e), this.session = e;
  }
  getCurrentPhase() {
    return this.session.modeState.currentPhase;
  }
  getCurrentUIState() {
    return this.session.modeState.currentUIState;
  }
  getMaxAIAutoSpeakCount() {
    return this.session.modeConfig.maxAIAutoSpeakCount ?? 5;
  }
  getAIAutoSpeakCounter() {
    return this.session.modeState.aiAutoSpeakCounter;
  }
  isAICounterAtMax() {
    return this.getAIAutoSpeakCounter() >= this.getMaxAIAutoSpeakCount();
  }
  setCurrentPhase(e) {
    console.log(`[GroupChat] Phase: ${this.session.modeState.currentPhase} \u2192 ${e}`), this.session.modeState.currentPhase = e, this.session.updatedAt = Date.now();
  }
  setCurrentUIState(e) {
    this.session.modeState.currentUIState = e, this.session.updatedAt = Date.now();
  }
  setCurrentSpeaker(e) {
    this.session.modeState.currentSpeakerId = e, this.session.updatedAt = Date.now();
  }
  incrementAfterAISpeaks(e) {
    this.session.modeState.aiAutoSpeakCounter++, this.session.modeState.speakCounts[e] || (this.session.modeState.speakCounts[e] = 0), this.session.modeState.speakCounts[e]++, this.session.modeState.messageCount++, this.session.updatedAt = Date.now();
  }
  resetCounterAfterPlayerSpeaks() {
    this.session.modeState.aiAutoSpeakCounter = 0, this.session.modeState.messageCount++, this.session.updatedAt = Date.now();
  }
  resetAIAutoSpeakCounter() {
    this.session.modeState.aiAutoSpeakCounter = 0, this.session.updatedAt = Date.now();
  }
  findParticipantName(e) {
    var _a2;
    return ((_a2 = this.session.modeConfig.participantSnapshots.find((t) => t.id === e)) == null ? void 0 : _a2.name) || "\u89D2\u8272";
  }
}
function te(a) {
  return a.modeConfig.participantSnapshots;
}
function Yt(a, e) {
  return a.modeConfig.participantSnapshots.find((t) => t.id === e);
}
function pe(a) {
  return a.map((e) => `- ${e.name} (ID: ${e.id}): ${e.personality || e.description}`).join(`
`);
}
function Qt(a) {
  if (!a) return "";
  const e = new Date(a), t = /* @__PURE__ */ new Date(), n = e.getHours().toString().padStart(2, "0"), s = e.getMinutes().toString().padStart(2, "0");
  return e.toDateString() === t.toDateString() ? `${n}:${s}` : `${e.getMonth() + 1}/${e.getDate()} ${n}:${s}`;
}
function ge(a, e, t = 30) {
  const n = te(e), s = e.modeConfig.userName || "\u6211";
  return a.getFlatHistoryItems(t).filter((r) => !r.hidden && !r.deleted).map((r) => {
    var _a2;
    const { type: i, data: c } = r, o = Qt(r.timestamp), l = o ? `[${o}] ` : "";
    if (i === "gc_user_message") return `${l}[${c.userName || s}]: ${c.content}`;
    if (i === "gc_character_message") {
      const d = c.characterName || ((_a2 = n.find((h) => h.id === c.characterId)) == null ? void 0 : _a2.name) || "\u89D2\u8272";
      return `${l}[${d}]: ${c.content}`;
    }
    return null;
  }).filter(Boolean).join(`
`);
}
function fa(a, e) {
  const t = te(a), n = a.modeState.speakCounts, s = a.modeConfig.topic, r = a.modeConfig.userName || "\u6211", c = `${a.modeConfig.dmSystemPrompt || "\u4F60\u662F\u4E00\u4E2A\u9690\u5F62\u7684\u7FA4\u804A\u8C03\u5EA6\u5458\u3002"}
\u4F60\u7684\u552F\u4E00\u4EFB\u52A1\u662F\u6839\u636E\u5F53\u524D\u5BF9\u8BDD\u4E0A\u4E0B\u6587\u9009\u62E9\u4E0B\u4E00\u4E2A\u6700\u9002\u5408\u53D1\u8A00\u7684 AI \u89D2\u8272\u3002
\u9009\u62E9\u65F6\u8981\u8003\u8651\uFF1A\u5BF9\u8BDD\u7684\u81EA\u7136\u6D41\u5411\u3001\u8BDD\u9898\u76F8\u5173\u6027\u3001\u89D2\u8272\u7684\u6027\u683C\u7279\u70B9\u3002
\u5141\u8BB8\u540C\u4E00\u89D2\u8272\u8FDE\u7EED\u53D1\u8A00\uFF08\u5982\u679C\u5BF9\u8BDD\u60C5\u5883\u81EA\u7136\u9700\u8981\uFF09\uFF0C\u4F46\u4E5F\u8981\u6CE8\u610F\u8BA9\u6240\u6709\u89D2\u8272\u90FD\u6709\u53C2\u4E0E\u611F\u3002
\u6CE8\u610F\u89C2\u5BDF\u5BF9\u8BDD\u5386\u53F2\u4E2D\u7684\u65F6\u95F4\u6233\uFF0C\u4E86\u89E3\u5BF9\u8BDD\u8282\u594F\u3002
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u8F93\u51FA\u4E00\u4E2A JSON \u5757\uFF0C\u4E0D\u8981\u5305\u542B\u4EFB\u4F55\u5176\u4ED6\u6587\u5B57\u3002
\`\`\`json
{ "nextSpeakerId": "\u89D2\u8272ID", "reason": "\u9009\u62E9\u539F\u56E0" }
\`\`\`
\u53EF\u9009\u89D2\u8272\uFF1A
${t.map((d) => `- ${d.name} (ID: ${d.id}, \u5DF2\u53D1\u8A00: ${n[d.id] || 0}\u6B21)`).join(`
`)}`, o = ge(e, a, 20), l = [s ? `\u3010\u7FA4\u804A\u8BDD\u9898\u3011
${s}` : "", `\u3010\u7FA4\u804A\u6210\u5458\u3011
- ${r} (\u73A9\u5BB6)
${pe(t)}`, o ? `\u3010\u6700\u8FD1\u5BF9\u8BDD\u3011
${o}` : "\u3010\u5BF9\u8BDD\u521A\u5F00\u59CB\uFF0C\u8BF7\u9009\u4E00\u4E2A\u9002\u5408\u6253\u5F00\u8BDD\u9898\u7684\u89D2\u8272\u3011", `\u3010\u6240\u6709\u89D2\u8272\u53D1\u8A00\u7EDF\u8BA1\u3011
${t.map((d) => `${d.name}: ${n[d.id] || 0} \u6B21`).join(`
`)}`].filter(Boolean).join(`

`);
  return [{ role: "system", content: c }, { role: "user", content: l }];
}
function Sa(a, e) {
  const t = a.modeState.currentSpeakerId, n = Yt(a, t), s = te(a), r = a.modeConfig.userName || "\u6211", i = a.modeConfig.topic;
  if (!n) return [];
  const c = `\u4F60\u662F ${n.name}\u3002${n.systemPrompt}
${n.personality ? `\u4F60\u7684\u6027\u683C\uFF1A${n.personality}` : ""}
\u4F60\u73B0\u5728\u6B63\u5728\u4E00\u4E2A\u7FA4\u804A\u4E2D\u548C\u5176\u4ED6\u89D2\u8272\u4EE5\u53CA\u4E00\u4E2A\u540D\u4E3A"${r}"\u7684\u73A9\u5BB6\u804A\u5929\u3002
\u8BF7\u4EE5 ${n.name} \u7684\u8EAB\u4EFD\u81EA\u7136\u53D1\u8A00\uFF0C\u4E0D\u8981\u4F7F\u7528\u4EFB\u4F55 XML \u6807\u7B7E\uFF0C\u76F4\u63A5\u8F93\u51FA\u5BF9\u8BDD\u5185\u5BB9\u5373\u53EF\u3002
\u53D1\u8A00\u8981\u7B80\u6D01\u81EA\u7136\uFF0C\u50CF\u771F\u5B9E\u7684\u7FA4\u804A\u4E00\u6837\uFF0C\u901A\u5E38 1-3 \u53E5\u8BDD\u3002
\u6CE8\u610F\u6839\u636E\u5BF9\u8BDD\u5386\u53F2\u4E2D\u7684\u65F6\u95F4\u6233\u611F\u77E5\u65F6\u95F4\u6D41\u901D\uFF0C\u505A\u51FA\u81EA\u7136\u7684\u53CD\u5E94\u3002`, o = ge(e, a, 20), l = s.filter((h) => h.id !== t), d = [i ? `\u3010\u7FA4\u804A\u8BDD\u9898\u3011
${i}` : "", l.length > 0 ? `\u3010\u5176\u4ED6\u7FA4\u804A\u6210\u5458\u3011
- ${r} (\u73A9\u5BB6)
${pe(l)}` : `\u3010\u7FA4\u804A\u6210\u5458\u3011
- ${r} (\u73A9\u5BB6)`, o ? `\u3010\u5BF9\u8BDD\u5386\u53F2\u3011
${o}` : "\u3010\u5BF9\u8BDD\u521A\u5F00\u59CB\uFF0C\u8BF7\u4E3B\u52A8\u5F00\u542F\u804A\u5929\u3011"].filter(Boolean).join(`

`);
  return [{ role: "system", content: c }, { role: "user", content: d }];
}
function ba(a) {
  try {
    const e = a.indexOf("{"), t = a.lastIndexOf("}") + 1;
    if (e < 0 || t <= e) return null;
    const n = JSON.parse(a.slice(e, t)), s = n.nextSpeakerId || n.speakerId;
    return s ? { nextSpeakerId: s, reason: n.reason || "" } : null;
  } catch {
    return null;
  }
}
const en = S(["dm_select_speaker", "character_speak", "waiting_for_player"]), tn = S(["idle", "ai_loop_running", "ai_loop_paused"]), Ca = { idle: { label: "\u7A7A\u95F2", placeholder: "\u70B9\u51FB\u5F00\u59CB\u7FA4\u804A...", inputEnabled: false }, ai_loop_running: { label: "AI \u5BF9\u8BDD\u4E2D", placeholder: "\u968F\u65F6\u53D1\u9001\u6D88\u606F...", inputEnabled: true }, ai_loop_paused: { label: "\u7B49\u5F85\u4F60\u7684\u6D88\u606F", placeholder: "\u53D1\u9001\u6D88\u606F\uFF0C\u6216\u70B9\u51FB \u23E9 \u8BA9 AI \u7EE7\u7EED...", inputEnabled: true } }, nn = _({ id: u().describe("\u89D2\u8272 ID"), name: u().describe("\u89D2\u8272\u540D\u79F0"), description: u().describe("\u89D2\u8272\u63CF\u8FF0"), avatar: u().optional().describe("\u89D2\u8272\u5934\u50CF"), systemPrompt: u().describe("\u89D2\u8272\u626E\u6F14\u6307\u5F15"), personality: u().optional().describe("\u89D2\u8272\u6027\u683C\u6982\u8FF0"), firstMessage: u().optional().describe("\u5F00\u573A\u95EE\u5019\u8BED") }), an = _({ topic: u().optional().describe("\u7FA4\u804A\u8BDD\u9898/\u573A\u666F"), participantSnapshots: I(nn).describe("\u53C2\u4E0E\u7684 AI \u89D2\u8272\u5FEB\u7167\u5217\u8868"), userName: u().optional().describe("\u73A9\u5BB6\u663E\u793A\u540D\u79F0"), dmSystemPrompt: u().optional().describe("DM \u8C03\u5EA6\u63D0\u793A\u8BCD"), maxAIAutoSpeakCount: p().optional().default(5).describe("AI \u81EA\u4E3B\u53D1\u8A00\u6700\u5927\u6570\u91CF\uFF0C\u8FBE\u5230\u540E\u6682\u505C\u7B49\u5F85\u73A9\u5BB6") }), sn = _({ currentPhase: en.describe("AI \u5FAA\u73AF\u5F53\u524D\u9636\u6BB5"), currentUIState: tn.describe("\u5F53\u524D UI \u72B6\u6001"), currentSpeakerId: u().describe("\u5F53\u524D\u53D1\u8A00\u8005 ID"), messageCount: p().describe("\u603B\u6D88\u606F\u6570"), speakCounts: q(u(), p()).describe("\u6BCF\u4E2A\u89D2\u8272\u7684\u53D1\u8A00\u6B21\u6570"), aiAutoSpeakCounter: p().default(0).describe("AI \u81EA\u4E3B\u53D1\u8A00\u8BA1\u6570\u5668\uFF0C\u73A9\u5BB6\u53D1\u8A00\u65F6\u91CD\u7F6E") });
W.extend({ mode: O("group-chat").describe("\u6A21\u5F0F"), modeConfig: an.describe("\u7FA4\u804A\u6A21\u5F0F\u914D\u7F6E"), modeState: sn.describe("\u7FA4\u804A\u6A21\u5F0F\u72B6\u6001") });
class Ia {
  constructor(e) {
    __publicField(this, "session");
    this.session = e;
  }
  getSession() {
    return this.session;
  }
  getConfig() {
    return this.session.modeConfig;
  }
  getState() {
    return this.session.modeState;
  }
  getGameTime() {
    return this.session.modeState.gameTime;
  }
  getTickCount() {
    return this.session.modeState.tickCount;
  }
  isRunning() {
    return this.session.modeState.isRunning;
  }
  getCharacterState(e) {
    return this.session.modeState.characterStates[e];
  }
  getAllCharacterStates() {
    return Object.values(this.session.modeState.characterStates);
  }
  getCharacterIds() {
    return Object.keys(this.session.modeState.characterStates);
  }
  updateCharacterState(e, t) {
    const n = this.session.modeState.characterStates[e];
    n && (this.session.modeState.characterStates[e] = { ...n, ...t });
  }
  setCharacterState(e, t) {
    this.session.modeState.characterStates[e] = t;
  }
  start() {
    this.session.modeState.isRunning = true, this.session.modeState.currentPhase = "running";
  }
  pause() {
    this.session.modeState.isRunning = false, this.session.modeState.currentPhase = "paused";
  }
  toggle() {
    this.session.modeState.isRunning ? this.pause() : this.start();
  }
  setGameTime(e) {
    this.session.modeState.gameTime = e;
  }
  incrementTickCount() {
    this.session.modeState.tickCount++;
  }
  addLog(e, t, n) {
    const s = { time: de(this.session.modeState.gameTime), source: t, content: e, type: n };
    this.session.modeState.logs.push(s), this.session.modeState.logs.length > 500 && (this.session.modeState.logs = this.session.modeState.logs.slice(-400));
  }
  getLogs() {
    return this.session.modeState.logs;
  }
  getRecentLogs(e) {
    return this.session.modeState.logs.slice(-e);
  }
  getSalesStand() {
    return this.session.modeState.salesStand;
  }
  setSalesStand(e) {
    this.session.modeState.salesStand = e;
  }
  addSalesItem(e) {
    this.session.modeState.salesStand.push(e);
  }
  removeSalesItem(e) {
    this.session.modeState.salesStand = this.session.modeState.salesStand.filter((t) => t.id !== e);
  }
  getSnapshot() {
    return { config: { ...this.session.modeConfig }, state: { ...this.session.modeState, characterStates: { ...this.session.modeState.characterStates }, salesStand: [...this.session.modeState.salesStand], logs: [...this.session.modeState.logs] } };
  }
}
function M(a, e) {
  return a.inventory[e] ?? 0;
}
function F(a, e, t) {
  const n = a.inventory[e] ?? 0;
  return { ...a, inventory: { ...a.inventory, [e]: n + t } };
}
function H(a, e, t) {
  const n = a.inventory[e] ?? 0, s = Math.max(0, n - t), r = { ...a.inventory };
  return s === 0 ? delete r[e] : r[e] = s, { ...a, inventory: r };
}
function _e(a, e) {
  return { ...a, stamina: Math.max(0, Math.min(a.maxStamina, a.stamina + e)) };
}
function rn(a, e) {
  return { ...a, energy: Math.max(0, Math.min(a.maxEnergy, a.energy + e)) };
}
function ye(a, e) {
  return { ...a, happiness: Math.max(0, Math.min(X, a.happiness + e)) };
}
function on(a) {
  if (M(a, g.BREAD.name) <= 0) return { char: a, consumed: false };
  const t = g.BREAD.stamina;
  let n = H(a, g.BREAD.name, 1);
  return n = _e(n, t), { char: n, consumed: true };
}
function cn(a) {
  if (M(a, g.JUICE.name) <= 0) return { char: a, consumed: false };
  const t = g.JUICE.happiness;
  let n = H(a, g.JUICE.name, 1);
  return n = ye(n, t), { char: n, consumed: true };
}
function ln(a, e) {
  let t = { ...a }, n = "";
  switch (e) {
    case "Farm": {
      t = F(t, g.WHEAT.name, 6), n = "\u83B7\u5F97 6 \u5C0F\u9EA6";
      break;
    }
    case "Mill": {
      M(t, g.WHEAT.name) >= 20 ? (t = H(t, g.WHEAT.name, 20), t = F(t, g.FLOUR.name, 15), n = "\u6D88\u8017 20 \u5C0F\u9EA6\uFF0C\u83B7\u5F97 15 \u9762\u7C89") : n = "\u5C0F\u9EA6\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u78E8\u9762";
      break;
    }
    case "Bakery": {
      M(t, g.FLOUR.name) >= 2 ? (t = H(t, g.FLOUR.name, 2), t = F(t, g.BREAD.name, 4), n = "\u6D88\u8017 2 \u9762\u7C89\uFF0C\u83B7\u5F97 4 \u9762\u5305") : n = "\u9762\u7C89\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u70D8\u7119";
      break;
    }
    case "Vineyard": {
      t = F(t, g.GRAPE.name, 3), n = "\u83B7\u5F97 3 \u8461\u8404";
      break;
    }
    case "JuiceFactory": {
      M(t, g.GRAPE.name) >= 4 ? (t = H(t, g.GRAPE.name, 4), t = F(t, g.JUICE.name, 4), n = "\u6D88\u8017 4 \u8461\u8404\uFF0C\u83B7\u5F97 4 \u679C\u6C41") : n = "\u8461\u8404\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u69A8\u6C41";
      break;
    }
    default:
      n = "\u672A\u77E5\u5DE5\u4F5C\u5730\u70B9";
  }
  return t = { ...t, taskName: "Idle", taskTarget: null, taskTimer: 0, status: "\u7A7A\u95F2" }, { char: t, log: n };
}
function dn(a, e, t, n) {
  let s = _e(a, e);
  return s = rn(s, t), s = ye(s, n), { ...s, taskName: "Idle", taskTarget: null, taskTimer: 0, status: "\u7A7A\u95F2" };
}
function un() {
  return `todo_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}
function mn(a, e) {
  return a.inventory[e] ?? 0;
}
function hn(a, e, t) {
  let n = 0;
  if (a.deadline) {
    const o = a.deadline - t;
    n = Math.max(0, 1 - o / 100);
  }
  if (a.type === "respond") {
    const o = t - a.createdAt;
    n = Math.max(0, 1 - o / 10);
  }
  let s = 0.5;
  a.type === "rest" && e.stamina < e.maxStamina * 0.5 && (s = 0.9), a.type === "consume" && e.stamina < e.maxStamina * 0.7 && (s = 0.7), a.type === "work" && e.money < 50 && (s = 0.8);
  const r = gn(a, e) ? 1 : 0, i = t - a.createdAt, c = Math.max(0, 1 - i / 50);
  return { urgency: n, importance: s, feasibility: r, recency: c };
}
function pn(a, e, t) {
  const n = hn(a, e, t);
  if (n.feasibility === 0) return Number.NEGATIVE_INFINITY;
  let s = a.priority * 0.3 + n.urgency * 30 + n.importance * 25 + n.recency * 5;
  return a.type === "respond" && (s *= 1.5), s;
}
function gn(a, e) {
  const t = a.preconditions;
  if (t.location && e.locationName !== t.location && (!x[t.location] || a.type !== "travel" && a.type !== "explore" && a.type !== "trade" && a.type !== "work" && a.type !== "rest") || t.stamina && e.stamina < t.stamina || t.minEnergy !== void 0 && e.energy / e.maxEnergy < t.minEnergy) return false;
  if (t.items) {
    for (const n of t.items) if (mn(e, n.itemId) < n.count) return false;
  }
  return true;
}
function _n(a, e) {
  var _a2;
  const t = a.todoList.filter((s) => s.status === "pending");
  return t.length === 0 ? null : ((_a2 = t.map((s) => ({ todo: s, priority: pn(s, a, e) })).filter((s) => s.priority > Number.NEGATIVE_INFINITY).sort((s, r) => r.priority - s.priority)[0]) == null ? void 0 : _a2.todo) ?? null;
}
function fe(a, e) {
  return { id: un(), type: a.type, content: a.content, priority: a.priority, preconditions: a.preconditions ?? {}, createdAt: e, deadline: a.deadline, source: a.source, relatedCharacterId: a.relatedCharacterId, status: "pending", attempts: 0, maxAttempts: a.maxAttempts ?? 3 };
}
function P(a, e) {
  const t = a.todoList.map((n) => n.id === e ? { ...n, status: "in-progress", attempts: n.attempts + 1 } : n);
  return { ...a, todoList: t, currentTodo: e };
}
function A(a, e) {
  const t = a.todoList.map((n) => n.id === e ? { ...n, status: "completed" } : n);
  return { ...a, todoList: t, currentTodo: a.currentTodo === e ? null : a.currentTodo };
}
function $(a, e) {
  const t = a.todoList.map((n) => n.id === e ? { ...n, status: "cancelled" } : n);
  return { ...a, todoList: t, currentTodo: a.currentTodo === e ? null : a.currentTodo };
}
function yn(a) {
  return a.todoList.filter((e) => e.status === "pending").length;
}
function ka(a) {
  return a.currentTodo ? a.todoList.find((e) => e.id === a.currentTodo) ?? null : null;
}
function v(a) {
  return { updatedChar: a, logs: [], historyEntries: [], completed: false, requiresAI: false, dialogueBroadcasts: [] };
}
function B(a, e) {
  if (a.currentPath && a.currentPath.length > 1) return console.log(`[MoveTarget] ${a.name} \u6B63\u5728\u79FB\u52A8\u4E2D\uFF0C\u5FFD\u7565\u65B0\u76EE\u6807 ${e}`), a;
  const t = x[e];
  if (t) {
    let r = t.x, i = t.y;
    if (t.displayCharPos) r = t.displayCharPos.x, i = t.displayCharPos.y;
    else if (t.grid) {
      let o = false;
      for (let l = 0; l < t.grid.length; l++) {
        for (let d = 0; d < t.grid[l].length; d++) if (t.grid[l][d] === "E") {
          r = t.x + d, i = t.y + l, o = true;
          break;
        }
        if (o) break;
      }
      if (!o) for (let l = 0; l < t.grid.length; l++) {
        for (let d = 0; d < t.grid[l].length; d++) if (t.grid[l][d] !== 1) {
          r = t.x + d, i = t.y + l, o = true;
          break;
        }
        if (o) break;
      }
    } else r = t.x + Math.floor(Math.random() * t.w), i = t.y + Math.floor(Math.random() * t.h);
    return Math.abs(a.gridX - r) + Math.abs(a.gridY - i) <= 1 ? { ...a, locationName: e } : { ...a, targetLocationName: e, pendingMoveTo: { x: r, y: i } };
  }
  const n = Math.floor(Math.random() * 5) - 2, s = Math.floor(Math.random() * 5) - 2;
  return { ...a, targetLocationName: "Wander", pendingMoveTo: { x: Math.max(0, Math.min(19, a.gridX + n)), y: Math.max(0, Math.min(19, a.gridY + s)) } };
}
function Se(a, e) {
  const t = le.includes(e);
  return { ...a, taskTimer: 6, taskTarget: e, taskName: t ? "Sleeping" : "Working", status: t ? "\u7761\u89C9\u4E2D..." : "\u5DE5\u4F5C\u4E2D..." };
}
function fn(a, e) {
  var _a2;
  const t = v(a);
  let n = { ...a };
  const s = e.preconditions.location;
  if (!s) return n = $(n, e.id), t.updatedChar = n, t.historyEntries.push({ role: "system", content: `\u5DE5\u4F5C\u4EFB\u52A1\u300C${e.content}\u300D\u7F3A\u5C11\u76EE\u6807\u5730\u70B9\uFF0C\u5DF2\u53D6\u6D88\u3002` }), t;
  if (n.locationName !== s) return n = B(n, s), n = P(n, e.id), t.historyEntries.push({ role: "system", content: `\u524D\u5F80${s}\u51C6\u5907\u5DE5\u4F5C\u3002` }), t.logs.push({ content: `${a.name} \u524D\u5F80${s}`, source: "\u7CFB\u7EDF", type: "sys" }), t.updatedChar = n, t;
  if ((_a2 = x[s]) == null ? void 0 : _a2.isWork) {
    if (s === "Mill" && M(n, g.WHEAT.name) < 20) return n = $(n, e.id), t.updatedChar = n, t.historyEntries.push({ role: "system", content: "\u5C0F\u9EA6\u4E0D\u8DB3 20 \u5355\u4F4D\uFF0C\u65E0\u6CD5\u5728\u78E8\u574A\u5DE5\u4F5C\u3002" }), t;
    if (s === "Bakery" && M(n, g.FLOUR.name) < 2) return n = $(n, e.id), t.updatedChar = n, t.historyEntries.push({ role: "system", content: "\u9762\u7C89\u4E0D\u8DB3 2 \u5355\u4F4D\uFF0C\u65E0\u6CD5\u5728\u9762\u5305\u623F\u5DE5\u4F5C\u3002" }), t;
    if (s === "JuiceFactory" && M(n, g.GRAPE.name) < 4) return n = $(n, e.id), t.updatedChar = n, t.historyEntries.push({ role: "system", content: "\u8461\u8404\u4E0D\u8DB3 4 \u5355\u4F4D\uFF0C\u65E0\u6CD5\u5728\u679C\u6C41\u5382\u5DE5\u4F5C\u3002" }), t;
    n = Se(n, s), n = P(n, e.id), t.historyEntries.push({ role: "system", content: `\u5F00\u59CB\u5728${s}\u5DE5\u4F5C\u3002` }), t.logs.push({ content: `${a.name} \u5F00\u59CB\u5728${s}\u5DE5\u4F5C`, source: "\u7CFB\u7EDF", type: "sys" });
  }
  return t.updatedChar = n, t;
}
function Sn(a, e) {
  const t = v(a);
  let n = { ...a };
  const s = e.preconditions.location || n.homeZoneKey || "Zone_A";
  return n.locationName !== s ? (n = B(n, s), n = P(n, e.id), t.historyEntries.push({ role: "system", content: `\u524D\u5F80${s}\u51C6\u5907\u4F11\u606F\u3002` }), t.logs.push({ content: `${a.name} \u524D\u5F80${s}`, source: "\u7CFB\u7EDF", type: "sys" }), t.updatedChar = n, t) : (le.includes(s) ? (n = Se(n, s), n = P(n, e.id), t.historyEntries.push({ role: "system", content: `\u5F00\u59CB\u5728${s}\u4F11\u606F\u3002` }), t.logs.push({ content: `${a.name} \u56DE\u5BB6\u4F11\u606F`, source: "\u7CFB\u7EDF", type: "sys" })) : (n.status = "\u4F11\u606F\u4E2D", n = A(n, e.id), t.completed = true, t.historyEntries.push({ role: "system", content: `\u5728${s}\u77ED\u6682\u4F11\u606F\u3002` })), t.updatedChar = n, t);
}
function bn(a, e) {
  const t = v(a);
  let n = { ...a };
  const s = e.preconditions.location || "Park";
  return n.locationName !== s ? (n = B(n, s), n = P(n, e.id), t.historyEntries.push({ role: "system", content: `\u524D\u5F80${s}\u63A2\u7D22\u3002` }), t.logs.push({ content: `${a.name} \u524D\u5F80${s}\u63A2\u7D22`, source: "\u7CFB\u7EDF", type: "sys" }), t.updatedChar = n, t) : (s === "Park" ? (n.happiness = Math.min(100, n.happiness + 1), t.logs.push({ content: `${a.name} \u5728\u516C\u56ED\u6563\u6B65\uFF0C\u6109\u60A6\u503C+1`, source: "\u7CFB\u7EDF", type: "sys" }), t.historyEntries.push({ role: "system", content: "\u5728\u516C\u56ED\u653E\u677E\uFF0C\u6109\u60A6\u503C+1\u3002" })) : t.historyEntries.push({ role: "system", content: `\u63A2\u7D22\u4E86${s}\u3002` }), n = A(n, e.id), n.status = `\u5728${s}\u95F2\u901B`, t.completed = true, t.updatedChar = n, t);
}
function Cn(a, e) {
  const t = v(a);
  let n = { ...a };
  const s = e.preconditions.location;
  return s ? n.locationName !== s ? (n = B(n, s), n = P(n, e.id), t.historyEntries.push({ role: "system", content: `\u79FB\u52A8\u5230${s}\u3002` }), t.logs.push({ content: `${a.name} \u79FB\u52A8\u5230${s}`, source: "\u7CFB\u7EDF", type: "sys" }), t.updatedChar = n, t) : (n = A(n, e.id), n.status = `\u5230\u8FBE${s}`, t.completed = true, t.updatedChar = n, t) : (n = $(n, e.id), t.updatedChar = n, t);
}
function In(a, e) {
  const t = v(a);
  let n = { ...a };
  const s = M(n, g.BREAD.name), r = M(n, g.JUICE.name), i = g.BREAD.stamina, c = g.JUICE.happiness;
  let o = false;
  return s > 0 && n.stamina < n.maxStamina - i && (n.inventory[g.BREAD.name] = s - 1, n.stamina = Math.min(n.maxStamina, n.stamina + i), o = true, t.historyEntries.push({ role: "system", content: `\u5403\u4E86\u9762\u5305\uFF0C\u4F53\u529B+${i}\u3002` }), t.logs.push({ content: `${a.name} \u5403\u4E86\u9762\u5305\uFF0C\u4F53\u529B+${i}`, source: "\u7CFB\u7EDF", type: "sys" })), r > 0 && n.happiness < 100 - c && (n.inventory[g.JUICE.name] = r - 1, n.happiness = Math.min(100, n.happiness + c), o = true, t.historyEntries.push({ role: "system", content: `\u559D\u4E86\u679C\u6C41\uFF0C\u6109\u60A6\u503C+${c}\u3002` }), t.logs.push({ content: `${a.name} \u559D\u4E86\u679C\u6C41\uFF0C\u6109\u60A6\u503C+${c}`, source: "\u7CFB\u7EDF", type: "sys" })), o ? (n = A(n, e.id), t.completed = true) : (n = $(n, e.id), t.historyEntries.push({ role: "system", content: "\u6CA1\u6709\u53EF\u6D88\u8D39\u7684\u98DF\u7269\u6216\u996E\u6599\u3002" })), t.updatedChar = n, t;
}
function kn(a, e) {
  const t = v(a);
  return t.requiresAI = true, t.updatedChar = P(a, e.id), t.historyEntries.push({ role: "system", content: `\u51C6\u5907\u8FDB\u884C\u793E\u4EA4\u6D3B\u52A8: ${e.content}` }), t;
}
function Tn(a, e) {
  const t = v(a);
  return t.requiresAI = true, t.updatedChar = P(a, e.id), t.historyEntries.push({ role: "system", content: `\u51C6\u5907\u56DE\u5E94\u5BF9\u8BDD: ${e.content}` }), t;
}
function Mn(a, e) {
  const t = v(a);
  let n = { ...a };
  const s = e.preconditions.location || "Shop";
  return s === "Shop" && n.dailyShopVisit ? (n = $(n, e.id), t.updatedChar = n, t.historyEntries.push({ role: "system", content: "\u4ECA\u5929\u5DF2\u7ECF\u53BB\u8FC7\u5546\u5E97\u4E86\u3002" }), t) : s === "SalesStand" && n.dailySalesStandVisit ? (n = $(n, e.id), t.updatedChar = n, t.historyEntries.push({ role: "system", content: "\u4ECA\u5929\u5DF2\u7ECF\u53BB\u8FC7\u5546\u4E1A\u5927\u9053\u4E86\u3002" }), t) : (n.locationName !== s && (n = B(n, s)), s === "Shop" ? n.dailyShopVisit = true : s === "SalesStand" && (n.dailySalesStandVisit = true), n = A(n, e.id), n.status = `\u5728${s}\u4EA4\u6613`, t.completed = true, t.historyEntries.push({ role: "system", content: `\u524D\u5F80${s}\u8FDB\u884C\u4EA4\u6613\u3002` }), t.updatedChar = n, t);
}
function $n(a, e) {
  const t = v(a);
  let n = { ...a };
  return n = A(n, e.id), n.status = e.content, t.completed = true, t.historyEntries.push({ role: "system", content: `\u6267\u884C\u4E86\u81EA\u5B9A\u4E49\u4EFB\u52A1: ${e.content}` }), t.updatedChar = n, t;
}
function vn(a, e, t, n, s) {
  switch (e.type) {
    case "work":
      return fn(a, e);
    case "rest":
      return Sn(a, e);
    case "explore":
      return bn(a, e);
    case "travel":
      return Cn(a, e);
    case "consume":
      return In(a, e);
    case "social":
      return kn(a, e);
    case "respond":
      return Tn(a, e);
    case "trade":
      return Mn(a, e);
    case "custom":
      return $n(a, e);
    default:
      return { updatedChar: $(a, e.id), logs: [], historyEntries: [{ role: "system", content: `\u672A\u77E5\u4EFB\u52A1\u7C7B\u578B: ${e.type}` }], completed: false, requiresAI: false, dialogueBroadcasts: [] };
  }
}
function En(a) {
  if (!a.currentTodo) return a;
  const e = a.todoList.find((t) => t.id === a.currentTodo);
  return !e || e.status !== "in-progress" ? a : e.type === "work" || e.type === "rest" ? A(a, e.id) : a;
}
function Pn() {
  const a = Array(E).fill(0).map(() => Array(E).fill(0));
  for (const e of Object.values(x)) if (e.grid) for (let t = 0; t < e.grid.length; t++) for (let n = 0; n < e.grid[t].length; n++) {
    const s = e.grid[t][n], r = e.x + n, i = e.y + t;
    r >= 0 && r < E && i >= 0 && i < E && (s === 1 ? a[i][r] = 1 : a[i][r] = 0);
  }
  else for (let t = 0; t < e.h; t++) for (let n = 0; n < e.w; n++) {
    const s = e.x + n, r = e.y + t;
    s >= 0 && s < E && r >= 0 && r < E && (a[r][s] = 1);
  }
  return { matrix: a, width: E, height: E };
}
function xn(a, e, t, n, s) {
  if (e < 0 || e >= a.width || t < 0 || t >= a.height || n < 0 || n >= a.width || s < 0 || s >= a.height) return [];
  const r = new re.Grid(a.matrix[0].length, a.matrix.length);
  for (let o = 0; o < a.height; o++) for (let l = 0; l < a.width; l++) a.matrix[o][l] === 1 && r.setWalkableAt(l, o, false);
  return r.isWalkableAt(e, t) || r.setWalkableAt(e, t, true), r.isWalkableAt(n, s) || r.setWalkableAt(n, s, true), new re.AStarFinder({ allowDiagonal: true, dontCrossCorners: true }).findPath(e, t, n, s, r);
}
function Ta(a, e, t, n, s) {
  if (!t || t.length < 2) return { x: a, y: e, completed: true, reachedNextTile: false };
  const r = t[1][0], i = t[1][1], c = r - a, o = i - e, l = Math.sqrt(c * c + o * o), d = n * s;
  if (d >= l) return { x: r, y: i, completed: t.length <= 2, reachedNextTile: true };
  const h = d / l;
  return { x: a + c * h, y: e + o * h, completed: false, reachedNextTile: false };
}
function wn(a) {
  return { Working: 1.5, Sleeping: 0, Idle: 0.8 }[a] || 1;
}
function Dn(a) {
  return { Working: 1.3, Sleeping: 0, Idle: 0.7 }[a] || 1;
}
function An(a) {
  return a >= 22 || a <= 6 ? 1.2 : a >= 8 && a <= 18 ? 1 : 1.1;
}
function Nn(a, e, t, n, s, r) {
  let i = { ...a };
  if (i.taskName === "Working" && i.taskTarget) {
    const o = ln(i, i.taskTarget);
    i = o.char, e(`${a.name} \u5DE5\u4F5C\u5B8C\u6210\uFF0C${o.log}`, "\u7CFB\u7EDF", "sys");
  } else if (i.taskName === "Sleeping") {
    const o = ce, l = i.home.level, d = 15, h = 12, f = 5, y = 0.8 + l / 5 * 0.4, m = Math.round(d * o * y), C = Math.round(h * o * y), N = Math.round(f * o * y);
    i = dn(i, m, C, N), e(`${a.name} \u7761\u9192\u4E86\uFF0C\u4F53\u529B+${m}\uFF0C\u6D3B\u529B+${C}\uFF0C\u6109\u60A6+${N}\u3002`, "\u7CFB\u7EDF", "sys");
  }
  i = En(i);
  const c = _n(i, r);
  if (c) {
    const o = vn(i, c);
    i = o.updatedChar;
    for (const l of o.logs) e(l.content, l.source, l.type);
  }
  return i;
}
function Rn(a, e, t) {
  let n = { ...a };
  if (n.stamina <= 6) {
    const s = on(n);
    s.consumed && (n = s.char, e(`${a.name} \u5403\u4E86\u9762\u5305\uFF0C\u4F53\u529B+${g.BREAD.stamina}`, "\u7CFB\u7EDF", "sys"));
  }
  if (n.happiness <= 30) {
    const s = cn(n);
    s.consumed && (n = s.char, e(`${a.name} \u559D\u4E86\u679C\u6C41\uFF0C\u6109\u60A6\u503C+${g.JUICE.happiness}`, "\u7CFB\u7EDF", "sys"));
  }
  return n = Fn(n, e, t), n;
}
const Un = 2;
function Fn(a, e, t) {
  var _a2, _b;
  if (a.stamina <= 0 && !((_a2 = a.faintedState) == null ? void 0 : _a2.isFainted)) {
    const n = { isFainted: true, faintedTime: t, recoveryTime: t + Un, cause: "exhaustion" };
    return e(`${a.name} \u4F53\u529B\u8017\u5C3D\uFF0C\u6655\u5012\u4E86\uFF01`, "\u7CFB\u7EDF", "sys"), { ...a, status: "\u6655\u5012", thought: "\u5931\u53BB\u610F\u8BC6...", faintedState: n };
  }
  return ((_b = a.faintedState) == null ? void 0 : _b.isFainted) && t >= a.faintedState.recoveryTime ? (e(`${a.name} \u4ECE\u6655\u5012\u4E2D\u6062\u590D\u4E86\uFF0C\u4F46\u8FD8\u5F88\u865A\u5F31\u3002`, "\u7CFB\u7EDF", "sys"), { ...a, status: "\u865A\u5F31", thought: "\u521A\u521A\u6062\u590D\u610F\u8BC6\uFF0C\u611F\u89C9\u5F88\u865A\u5F31...", stamina: Math.max(5, a.stamina), faintedState: void 0 }) : a;
}
function Ma(a, e, t, n, s, r) {
  let i = { ...a };
  if (i.pendingMoveTo) {
    const o = i.currentPath && i.currentPath.length > 1;
    if (Math.abs(i.gridX - i.pendingMoveTo.x) + Math.abs(i.gridY - i.pendingMoveTo.y) <= 1) i.pendingMoveTo = void 0;
    else if (!o) {
      const h = Pn(), f = i.visualX !== void 0 ? Math.round(i.visualX) : i.gridX, y = i.visualY !== void 0 ? Math.round(i.visualY) : i.gridY, m = xn(h, f, y, i.pendingMoveTo.x, i.pendingMoveTo.y);
      m && m.length > 0 ? (i.currentPath = m, i.gridX = f, i.gridY = y, i.visualX === void 0 && (i.visualX = f), i.visualY === void 0 && (i.visualY = y)) : i.currentPath = void 0, i.pendingMoveTo = void 0;
    }
  }
  (!i.currentPath || i.currentPath.length <= 1) && i.targetLocationName && (i.locationName = i.targetLocationName, i.targetLocationName = void 0);
  const c = r > 0 && r % ze === 0;
  if (c && i.taskName !== "Sleeping") {
    const l = 0.8 + Math.random() * 0.4, d = wn(i.taskName), h = Math.round(5 * l * d);
    i.stamina = Math.max(0, i.stamina - h);
  }
  if (c && i.taskName !== "Sleeping") {
    const l = 0.8 + Math.random() * 0.4, d = Dn(i.taskName), h = An(e.hour), f = Math.round(4 * l * d * h);
    i.energy = Math.max(0, i.energy - f);
  }
  return i.taskTimer > 0 ? (i.taskTimer--, i.taskTimer === 0 && (i = Nn(i, t, n, s, e, r))) : i = Rn(i, t, r), i;
}
const k = { minInterval: 10, maxInterval: 18, staminaThreshold: 15, happinessThreshold: 25, energyThreshold: 0.25 };
function $a(a, e) {
  const t = e - a.lastThinkTick;
  if (a.currentPath && a.currentPath.length > 1 || a.taskName === "Sleeping") return null;
  const n = a.taskTimer > 0;
  if (n && t < k.minInterval * 1.5) return null;
  if (!n && yn(a) === 0 && t >= k.minInterval / 2) return { type: "empty-todo" };
  const s = k.minInterval + Math.random() * (k.maxInterval - k.minInterval);
  return t >= s ? { type: "periodic" } : (a.stamina < k.staminaThreshold || a.happiness <= k.happinessThreshold) && t >= k.minInterval * 1.5 ? { type: "state-change", context: { reason: a.stamina < k.staminaThreshold ? "low-stamina" : "low-happiness" } } : null;
}
function Ln(a, e) {
  const t = a.slice(-6);
  return t.length === 0 ? "(\u65E0\u6700\u8FD1\u8BB0\u5F55)" : t.map((n) => n.content.startsWith("[\u5185\u5FC3\u601D\u8003]") ? `\u2022 \u6211\u60F3: ${n.content.replace("[\u5185\u5FC3\u601D\u8003] ", "")}` : n.content.startsWith("[\u5BF9") || n.content.startsWith("[\u56DE\u5E94") ? `\u2022 \u6211\u8BF4: ${n.content}` : n.role === "assistant" ? `\u2022 \u6211: ${n.content}` : `\u2022 ${n.content}`).join(`
`);
}
function Hn(a) {
  return `\u7B2C${a.day}\u5929 ${String(a.hour).padStart(2, "0")}:${String(a.minute).padStart(2, "0")}`;
}
function On(a) {
  const e = a.filter((t) => t.status === "pending").slice(0, 5);
  return e.length === 0 ? "(\u7A7A)" : e.map((t) => `- [${t.type}] ${t.content} (\u4F18\u5148\u7EA7: ${t.priority})`).join(`
`);
}
function Gn() {
  const a = ["\u60F3\u60F3\u6709\u6CA1\u6709\u4EC0\u4E48\u65B0\u9C9C\u4E8B\u53EF\u4EE5\u505A\uFF1F", "\u6709\u6CA1\u6709\u60F3\u548C\u8C01\u804A\u804A\u5929\uFF1F", "\u4ECA\u5929\u7684\u76EE\u6807\u5B8C\u6210\u5F97\u600E\u4E48\u6837\u4E86\uFF1F", "\u5468\u56F4\u6709\u4EC0\u4E48\u6709\u8DA3\u7684\u4EBA\u6216\u4E8B\u5417\uFF1F", "\u662F\u4E0D\u662F\u8BE5\u6362\u4E2A\u5730\u65B9\u901B\u901B\u4E86\uFF1F", "\u6709\u6CA1\u6709\u4EC0\u4E48\u6280\u80FD\u60F3\u8981\u63D0\u5347\uFF1F", "\u94B1\u591F\u4E0D\u591F\u7528\uFF1F\u9700\u8981\u5DE5\u4F5C\u5417\uFF1F", "\u8EAB\u4F53\u72B6\u6001\u600E\u4E48\u6837\uFF1F\u9700\u8981\u4F11\u606F\u5417\uFF1F"];
  return a[Math.floor(Math.random() * a.length)];
}
function jn(a, e, t, n = []) {
  var _a2;
  const s = On(a.todoList), r = Gn(), i = n.filter((m) => m.id !== a.id && Math.abs(m.gridX - a.gridX) + Math.abs(m.gridY - a.gridY) <= 5).map((m) => `${m.name}(\u5728${m.locationName})`), c = i.length > 0 ? `\u9644\u8FD1\u7684\u4EBA: ${i.join(", ")}` : "\u9644\u8FD1\u6CA1\u6709\u4EBA";
  let o = "";
  switch (e.type) {
    case "empty-todo":
      o = "\u4F60\u7684\u5F85\u529E\u4E8B\u9879\u5217\u8868\u4E3A\u7A7A\uFF0C\u9700\u8981\u89C4\u5212\u63A5\u4E0B\u6765\u7684\u884C\u52A8\u3002";
      break;
    case "periodic":
      o = `\u5B9A\u65F6\u601D\u8003\u3002${r}`;
      break;
    case "task-complete":
      o = "\u4F60\u521A\u5B8C\u6210\u4E86\u4E00\u9879\u4EFB\u52A1\uFF0C\u9700\u8981\u89C4\u5212\u4E0B\u4E00\u6B65\u3002";
      break;
    case "state-change":
      o = `\u4F60\u7684\u72B6\u6001\u53D1\u751F\u4E86\u53D8\u5316: ${((_a2 = e.context) == null ? void 0 : _a2.reason) ?? "\u672A\u77E5"}`;
      break;
    case "external":
      o = "\u5916\u90E8\u4E8B\u4EF6\u89E6\u53D1\u4E86\u4F60\u7684\u601D\u8003\u3002";
      break;
    default:
      o = r;
  }
  const l = a.locationName !== "Wander" ? `(\u4F60\u5728 ${a.locationName}\uFF0C${c})` : `(\u4F60\u5728\u95F2\u901B\u4E2D\uFF0C${c})`, h = a.stamina > a.maxStamina * 0.8 && a.energy > a.maxEnergy * 0.8 ? "\u4F60\u73B0\u5728\u7CBE\u529B\u5145\u6C9B\uFF0C\u5E94\u8BE5\u53BB\u5DE5\u4F5C\u8D5A\u94B1\u3001\u793E\u4EA4\u6216\u63A2\u7D22\uFF0C\u800C\u4E0D\u662F\u7EE7\u7EED\u4F11\u606F\u3002" : "", f = Object.entries(a.inventory).filter(([, m]) => m > 0).map(([m, C]) => `${m}x${C}`).join(", ") || "\u7A7A", y = `
**\u53EF\u6267\u884C\u4EFB\u52A1\u793A\u4F8B**:
- {"type":"social","content":"\u627E\u4EBA\u804A\u804A\u5929","priority":60,"preconditions":{}}
- {"type":"social","content":"\u548C\u90BB\u5C45\u6253\u4E2A\u62DB\u547C","priority":55,"preconditions":{}}
- {"type":"work","content":"\u53BB\u519C\u573A\u5DE5\u4F5C","priority":60,"preconditions":{"location":"Farm"}}
- {"type":"work","content":"\u53BB\u78E8\u574A\u78E8\u9762\u7C89","priority":60,"preconditions":{"location":"Mill"}}
- {"type":"rest","content":"\u56DE\u5BB6\u7761\u89C9","priority":70,"preconditions":{"location":"${a.homeZoneKey || "Zone_A"}"}}
- {"type":"travel","content":"\u53BB\u516C\u56ED","priority":40,"preconditions":{"location":"Park"}}
- {"type":"explore","content":"\u5728\u516C\u56ED\u6563\u6B65","priority":40,"preconditions":{"location":"Park"}}
- {"type":"trade","content":"\u53BB\u5546\u5E97\u4EA4\u6613","priority":50,"preconditions":{"location":"Shop"}}

**\u91CD\u8981**: social\u7C7B\u578B\u4EFB\u52A1\u4E0D\u9700\u8981location\u524D\u7F6E\u6761\u4EF6\uFF0C\u4F1A\u81EA\u52A8\u5BFB\u627E\u9644\u8FD1\u7684\u4EBA\u804A\u5929\u3002
**\u6CE8\u610F**: \u5982\u679C\u4F60\u6B63\u5728\u5DE5\u4F5C(${a.taskName})\uFF0C\u4F60\u53EA\u80FD\u53D1\u8D77 social \u4EFB\u52A1\uFF0C\u4E0D\u80FD\u79BB\u5F00\u5F53\u524D\u5730\u70B9\u3002`;
  return `\u4F60\u662F ${a.name}\uFF0C${a.personality}\u3002

## \u91CD\u8981\u80CC\u666F
\u4F60\u56E0\u4E3A\u67D0\u79CD\u795E\u79D8\u539F\u56E0\u6765\u5230\u4E86\u8FD9\u4E2A\u5168\u65B0\u7684\u5C0F\u9547\u3002\u8FD9\u91CC\u4E0D\u662F\u4F60\u539F\u6765\u719F\u6089\u7684\u4E16\u754C\u2014\u2014\u6CA1\u6709\u4F60\u4EE5\u524D\u7684\u5DE5\u4F5C\u5BA4\u3001\u4F4F\u6240\u6216\u719F\u6089\u7684\u5730\u65B9\u3002\u4F60\u9700\u8981\u5728\u8FD9\u4E2A\u5C0F\u9547\u91CD\u65B0\u5F00\u59CB\u751F\u6D3B\uFF0C\u5229\u7528\u8FD9\u91CC\u73B0\u6709\u7684\u8BBE\u65BD\uFF08\u519C\u573A\u3001\u78E8\u574A\u3001\u9762\u5305\u623F\u7B49\uFF09\u6765\u5DE5\u4F5C\u8D5A\u94B1\u3001\u7EF4\u6301\u751F\u8BA1\u3002\u867D\u7136\u4F60\u4FDD\u7559\u7740\u539F\u6765\u7684\u6027\u683C\u548C\u8BB0\u5FC6\uFF0C\u4F46\u4F60\u5FC5\u987B\u9002\u5E94\u8FD9\u4E2A\u65B0\u73AF\u5883\u3002

## \u8FD9\u4E2A\u5C0F\u9547\u53EA\u6709\u4EE5\u4E0B\u5730\u70B9
- \u5DE5\u4F5C\u5730\u70B9: Farm(\u519C\u573A), Vineyard(\u8461\u8404\u56ED), Mill(\u78E8\u574A), Bakery(\u9762\u5305\u623F), JuiceFactory(\u679C\u6C41\u5382)
- \u4F4F\u5B85\u533A: Zone_A(\u6551\u6D4E\u623F), Zone_B(\u516C\u5BD3), Zone_C(\u5957\u623F), Zone_D(\u8C6A\u534E\u5957\u623F), Zone_E(\u522B\u5885)
- \u5176\u4ED6: Shop(\u5546\u5E97), Park(\u516C\u56ED), SalesStand(\u5546\u4E1A\u5927\u9053)
**\u6CE8\u610F**: \u8FD9\u91CC\u6CA1\u6709\u753B\u5BA4\u3001\u5496\u5561\u9986\u3001\u56FE\u4E66\u9986\u7B49\u5176\u4ED6\u5730\u65B9\u3002\u4F60\u53EA\u80FD\u4F7F\u7528\u4E0A\u9762\u5217\u51FA\u7684\u5730\u70B9\u3002

## \u5F53\u524D\u72B6\u6001
- \u4F53\u529B: ${a.stamina}/${a.maxStamina} ${a.stamina < 20 ? "\u26A0\uFE0F\u9700\u8981\u4F11\u606F" : ""}
- \u6D3B\u529B: ${a.energy}/${a.maxEnergy} ${a.energy < a.maxEnergy * 0.3 ? "\u26A0\uFE0F\u9700\u8981\u7761\u89C9" : ""}
- \u6109\u60A6: ${a.happiness}/${X} ${a.happiness < 30 ? "\u26A0\uFE0F\u5FC3\u60C5\u5DEE\uFF0C\u627E\u4EBA\u804A\u5929" : ""}
- \u91D1\u94B1: $${a.money} ${a.money < 30 ? "\u26A0\uFE0F\u7F3A\u94B1\uFF0C\u9700\u8981\u5DE5\u4F5C" : ""}
- \u5E93\u5B58: ${f}
- \u4F4D\u7F6E: ${a.locationName} ${l}
- \u65F6\u95F4: ${Hn(t)}
- \u4F60\u7684\u5BB6: ${a.homeZoneKey || "Zone_A"}

${h ? `## \u{1F4A1}\u72B6\u6001\u63D0\u793A
${h}
` : ""}

## \u89E6\u53D1\u539F\u56E0
${o}

## \u5F85\u529E\u4E8B\u9879
${s}

## \u6700\u8FD1\u7ECF\u5386
${Ln(a.history)}

${y}

## \u5DE5\u4F5C\u5730\u70B9\u8BF4\u660E
- Farm(\u519C\u573A): \u4EA7\u51FA\u5C0F\u9EA6\uFF0C\u65E0\u9700\u539F\u6599
- Vineyard(\u8461\u8404\u56ED): \u4EA7\u51FA\u8461\u8404\uFF0C\u65E0\u9700\u539F\u6599
- Mill(\u78E8\u574A): \u9700\u898120\u5C0F\u9EA6\uFF0C\u4EA7\u51FA\u9762\u7C89
- Bakery(\u9762\u5305\u623F): \u9700\u89812\u9762\u7C89\uFF0C\u4EA7\u51FA\u9762\u5305
- JuiceFactory(\u679C\u6C41\u5382): \u9700\u89814\u8461\u8404\uFF0C\u4EA7\u51FA\u679C\u6C41

\u8FD4\u56DE\u4E00\u4E2AJSON\uFF08\u5FC5\u987B\u5305\u542B\u81F3\u5C11\u4E00\u4E2A\u4EFB\u52A1\uFF09:
{
  "innerThought": "\u7B80\u77ED\u60F3\u6CD5(10\u5B57\u5185)",
  "stateAssessment": "\u72B6\u6001(5\u5B57\u5185)",
  "addTodos": [
    {"type":"\u7C7B\u578B","content":"\u63CF\u8FF0","priority":50,"preconditions":{"location":"\u5730\u70B9Key"}}
  ],
  "adjustPriorities": [],
  "cancelTodos": []
}

\u6CE8\u610F: type\u5FC5\u987B\u662F work/rest/social/travel/explore/trade/consume \u4E4B\u4E00\uFF0Clocation\u5FC5\u987B\u662F\u4E0A\u9762\u5217\u51FA\u7684\u82F1\u6587Key`;
}
function Vn(a) {
  if (!a) return;
  let e = a.trim().replace(/^[!！?？\s]+|[!！?？\s]+$/g, "");
  if (L.includes(e)) return e;
  const t = e.replace(/\s+/g, "_");
  if (L.includes(t)) return t;
  const n = e.toUpperCase().replace(/\s+/g, "_"), s = L.find((i) => i.toUpperCase() === n);
  if (s) return s;
  for (const i of L) if (e.toUpperCase().includes(i.toUpperCase())) return i;
  const r = { HOTEL: "Zone_A", HOME: "Zone_A", HOUSE: "Zone_A", RESTAURANT: "Bakery", CAFE: "JuiceFactory", MARKET: "Shop", STREET: "SalesStand", CENTER: "SalesStand" };
  if (r[n]) return r[n];
}
function va(a) {
  try {
    const e = a.match(/\{[\s\S]*\}/);
    if (!e) return null;
    const t = JSON.parse(e[0]);
    if (!t || !t.innerThought || !t.stateAssessment) return null;
    const n = Array.isArray(t.addTodos) ? t.addTodos.map((s) => {
      const r = s.preconditions;
      return (r == null ? void 0 : r.location) && (r.location = Vn(r.location)), s;
    }) : [];
    return { innerThought: String(t.innerThought), stateAssessment: String(t.stateAssessment), addTodos: n, adjustPriorities: Array.isArray(t.adjustPriorities) ? t.adjustPriorities : [], cancelTodos: Array.isArray(t.cancelTodos) ? t.cancelTodos : [] };
  } catch {
    return null;
  }
}
function Jn(a, e, t) {
  return a.some((n) => n.status === "pending" && n.type === e && (t ? n.preconditions.location === t : true));
}
function Ea(a, e, t) {
  const n = [...a.todoList];
  for (const c of e.addTodos) {
    const o = { ...c.preconditions };
    if (o.location === a.locationName && c.type === "travel") {
      console.log(`[ThinkingSystem] \u8DF3\u8FC7\u65E0\u6548\u7684\u79FB\u52A8\u4EFB\u52A1: \u5DF2\u7ECF\u5728 ${a.locationName}`);
      continue;
    }
    if (c.type === "rest" && !o.location && (o.location = a.homeZoneKey || "Zone_A"), c.type === "social" && delete o.location, Jn(n, c.type, o.location)) {
      console.log(`[ThinkingSystem] \u8DF3\u8FC7\u91CD\u590D\u4EFB\u52A1: ${c.type} at ${o.location || "any"}`);
      continue;
    }
    if (n.filter((h) => h.status === "pending").length >= 5) {
      console.log(`[ThinkingSystem] \u5F85\u529E\u4E8B\u9879\u5DF2\u6EE1\uFF0C\u8DF3\u8FC7\u65B0\u4EFB\u52A1: ${c.content}`);
      continue;
    }
    const d = fe({ type: c.type, content: c.content, priority: c.priority, preconditions: o, deadline: c.deadline, source: "thinking", relatedCharacterId: c.relatedCharacterId }, t);
    n.push(d);
  }
  for (const c of e.adjustPriorities) {
    const o = n.findIndex((l) => l.id === c.todoId);
    o >= 0 && (n[o] = { ...n[o], priority: c.newPriority });
  }
  for (const c of e.cancelTodos) {
    const o = n.findIndex((l) => l.id === c);
    o >= 0 && (n[o] = { ...n[o], status: "cancelled" });
  }
  const r = a.history.filter((c) => c.content.startsWith("[\u5185\u5FC3\u601D\u8003]")).slice(-3).map((c) => c.content.replace("[\u5185\u5FC3\u601D\u8003] ", "")).some((c) => c === e.innerThought || c.includes(e.innerThought.slice(0, 10)));
  let i = [...a.history];
  return r || i.push({ role: "assistant", content: `[\u5185\u5FC3\u601D\u8003] ${e.innerThought}` }), i.length > 50 && (i = i.slice(-40)), { ...a, todoList: n, history: i, lastThinkTick: t, thought: e.innerThought, currentStrategy: e.stateAssessment };
}
function K(a) {
  const e = a.inventory, t = e[g.WHEAT.name] ?? 0, n = e[g.FLOUR.name] ?? 0, s = e[g.GRAPE.name] ?? 0;
  return t >= 20 ? { location: "Mill", content: "\u53BB\u78E8\u574A\u628A\u5C0F\u9EA6\u78E8\u6210\u9762\u7C89" } : n >= 2 ? { location: "Bakery", content: "\u53BB\u9762\u5305\u623F\u70D8\u7119\u9762\u5305" } : s >= 4 ? { location: "JuiceFactory", content: "\u53BB\u679C\u6C41\u5382\u69A8\u679C\u6C41" } : Math.random() < 0.6 ? { location: "Farm", content: "\u53BB\u519C\u573A\u79CD\u5C0F\u9EA6" } : { location: "Vineyard", content: "\u53BB\u8461\u8404\u56ED\u91C7\u8461\u8404" };
}
function Pa(a) {
  const e = [];
  if (a.energy / a.maxEnergy <= k.energyThreshold) return e.push({ type: "rest", content: "\u592A\u7D2F\u4E86\uFF0C\u9700\u8981\u56DE\u5BB6\u4F11\u606F", priority: 95, preconditions: {} }), { innerThought: "\u7D2F\u6B7B\u4E86\uFF0C\u5FC5\u987B\u4F11\u606F\u4E00\u4E0B...", stateAssessment: "\u6D3B\u529B\u4E0D\u8DB3", addTodos: e, adjustPriorities: [], cancelTodos: [] };
  if (a.stamina < a.maxStamina * 0.3) return e.push({ type: "rest", content: "\u56DE\u5BB6\u4F11\u606F\u6062\u590D\u4F53\u529B", priority: 90, preconditions: {} }), { innerThought: "\u4F53\u529B\u4E0D\u652F\u4E86\uFF0C\u8BE5\u4F11\u606F\u4E86...", stateAssessment: "\u4F53\u529B\u4E0D\u8DB3", addTodos: e, adjustPriorities: [], cancelTodos: [] };
  if (a.happiness <= 30) return Math.random() < 0.5 ? (e.push({ type: "social", content: "\u627E\u4E2A\u4EBA\u804A\u804A\u5929", priority: 75, preconditions: {} }), { innerThought: "\u5FC3\u60C5\u4E0D\u592A\u597D\uFF0C\u627E\u4EBA\u804A\u804A\u5427...", stateAssessment: "\u5FC3\u60C5\u4F4E\u843D", addTodos: e, adjustPriorities: [], cancelTodos: [] }) : (e.push({ type: "explore", content: "\u53BB\u516C\u56ED\u653E\u677E\u5FC3\u60C5", priority: 75, preconditions: { location: "Park" } }), { innerThought: "\u5FC3\u60C5\u4E0D\u592A\u597D\uFF0C\u53BB\u516C\u56ED\u8D70\u8D70\u5427...", stateAssessment: "\u5FC3\u60C5\u4F4E\u843D", addTodos: e, adjustPriorities: [], cancelTodos: [] });
  if (a.money < 50) {
    const r = K(a);
    return e.push({ type: "work", content: r.content, priority: 70, preconditions: { stamina: 20, location: r.location } }), { innerThought: `\u94B1\u4E0D\u591F\u4E86\uFF0C${r.content}...`, stateAssessment: "\u9700\u8981\u8D5A\u94B1", addTodos: e, adjustPriorities: [], cancelTodos: [] };
  }
  const n = [{ type: "social", content: "\u627E\u4E2A\u4EBA\u804A\u804A\u5929", priority: 60, preconditions: {} }, { type: "social", content: "\u548C\u90BB\u5C45\u6253\u4E2A\u62DB\u547C", priority: 55, preconditions: {} }, { type: "social", content: "\u770B\u770B\u6709\u6CA1\u6709\u4EBA\u53EF\u4EE5\u804A\u5929", priority: 50, preconditions: {} }, { type: "explore", content: "\u53BB\u516C\u56ED\u6563\u6B65\u653E\u677E", priority: 45, preconditions: { location: "Park" } }, { type: "work", content: K(a).content, priority: 50, preconditions: { stamina: 20, location: K(a).location } }], s = n[Math.floor(Math.random() * n.length)];
  return e.push(s), { innerThought: "\u8BA9\u6211\u60F3\u60F3\u63A5\u4E0B\u6765\u8BE5\u505A\u4EC0\u4E48...", stateAssessment: "\u72B6\u6001\u6B63\u5E38", addTodos: e, adjustPriorities: [], cancelTodos: [] };
}
const be = { baseResponseProbability: 0.95, turnDecayRate: 0.92, dailyFatigueThreshold: 50, waitDecayTicks: 15, minResponseProbability: 0.3, maxResponseProbability: 0.98, responseTaskPriority: 90 };
function Ce(a, e, t) {
  const n = be, s = n.baseResponseProbability, r = Math.pow(n.turnDecayRate, Math.max(0, e.turns - 1)), i = Math.max(0.3, 1 - a.conversationState.totalTurnsToday / n.dailyFatigueThreshold), c = t - e.lastTurnTick, o = Math.max(0.2, 1 - c / n.waitDecayTicks), l = e.sentiment * 0.1, d = s * r * i * o + l;
  return Math.max(n.minResponseProbability, Math.min(n.maxResponseProbability, d));
}
function Bn(a, e, t, n, s) {
  const r = a.conversationState.activeConversations[e], i = r ? { ...r, turns: r.turns + 1, lastTurnTick: s } : { partnerId: e, turns: 1, lastTurnTick: s, sentiment: 0 }, c = { ...a.conversationState.activeConversations, [e]: i }, o = [...a.history, { role: "user", content: `[${t}\u8BF4] ${n}` }], l = Ce(a, i, s), d = Math.random() < l;
  console.log(`[DialogueSystem] ${a.name} \u6536\u5230 ${t} \u7684\u5BF9\u8BDD`), console.log(`[DialogueSystem] \u54CD\u5E94\u6982\u7387: ${(l * 100).toFixed(1)}%, \u51B3\u5B9A${d ? "\u54CD\u5E94" : "\u4E0D\u54CD\u5E94"}`);
  let h = { ...a, history: o, conversationState: { activeConversations: c, totalTurnsToday: a.conversationState.totalTurnsToday + 1 } };
  if (d) {
    const f = fe({ type: "respond", content: `\u56DE\u590D ${t} \u7684\u8BDD`, priority: be.responseTaskPriority, source: "external", relatedCharacterId: e, maxAttempts: 3 }, s);
    h = { ...h, todoList: [...h.todoList, f] }, console.log(`[DialogueSystem] \u4E3A ${a.name} \u521B\u5EFA\u4E86\u54CD\u5E94\u4EFB\u52A1\uFF0C\u76EE\u6807\u89D2\u8272ID: ${e}`);
  }
  return { updatedChar: h, shouldRespond: d, responseProbability: l };
}
function Wn(a, e) {
  const { [e]: t, ...n } = a.conversationState.activeConversations;
  return { ...a, conversationState: { ...a.conversationState, activeConversations: n } };
}
function Ie(a, e, t, n) {
  var _a2;
  const r = ((_a2 = a.conversationState.activeConversations[e]) == null ? void 0 : _a2.turns) ?? 1, i = a.history.filter((o) => o.content.includes(t) || o.role === "assistant").slice(-6).map((o) => o.role === "assistant" ? `[\u6211] ${o.content}` : o.content).join(`
`), c = n ? "\u4F60\u60F3\u548C\u5BF9\u65B9\u804A\u804A\u3002" : "\u5BF9\u65B9\u521A\u521A\u5BF9\u4F60\u8BF4\u8BDD\u4E86\u3002";
  return `\u4F60\u662F ${a.name}\uFF0C${a.personality}\u3002

## \u5BF9\u8BDD\u4E0A\u4E0B\u6587
${c}
\u8FD9\u662F\u4ECA\u5929\u4E0E ${t} \u7684\u7B2C ${r} \u8F6E\u5BF9\u8BDD\u3002

## \u6700\u8FD1\u7684\u5BF9\u8BDD
${i || "(\u8FD9\u662F\u7B2C\u4E00\u6B21\u5BF9\u8BDD)"}

## \u5F53\u524D\u72B6\u6001
- \u4F53\u529B: ${a.stamina}/${a.maxStamina}
- \u5FC3\u60C5: ${a.happiness}/100
- \u5F53\u524D\u6D3B\u52A8: ${a.status}

## \u4EFB\u52A1
${n ? "\u8BF7\u4E3B\u52A8\u5F00\u542F\u4E00\u4E2A\u8BDD\u9898\u6216\u6253\u62DB\u547C\u3002" : "\u8BF7\u81EA\u7136\u5730\u56DE\u5E94\u5BF9\u65B9\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u8BDD\u9898\u3001\u8F6C\u79FB\u8BDD\u9898\u6216\u793C\u8C8C\u5730\u7ED3\u675F\u5BF9\u8BDD\u3002"}

\u8FD4\u56DE JSON:
{
  "dialogue": "\u4F60\u8BF4\u7684\u8BDD (30\u5B57\u4EE5\u5185)",
  "innerThought": "\u4F60\u7684\u5185\u5FC3\u60F3\u6CD5 (20\u5B57\u4EE5\u5185\uFF0C\u53EF\u9009)",
  "endConversation": false
}

\u6CE8\u610F\uFF1A\u5982\u679C\u4F60\u60F3\u7ED3\u675F\u5BF9\u8BDD\uFF0C\u5C06 endConversation \u8BBE\u4E3A true\uFF0C\u5E76\u5728 dialogue \u4E2D\u8BF4\u4E00\u53E5\u7ED3\u675F\u8BED\u3002`;
}
function qn(a, e) {
  const t = e.filter((s) => {
    var _a2;
    return s.id !== a.id && s.aiEnabled && s.taskName !== "Sleeping" && !((_a2 = s.faintedState) == null ? void 0 : _a2.isFainted);
  });
  if (t.length === 0) return null;
  const n = t.filter((s) => s.locationName === a.locationName);
  return n.length > 0 ? n[Math.floor(Math.random() * n.length)] : t[Math.floor(Math.random() * t.length)];
}
const xa = Object.freeze(Object.defineProperty({ __proto__: null, buildDialogueResponsePrompt: Ie, calculateResponseProbability: Ce, endConversation: Wn, findChatPartner: qn, handleIncomingDialogue: Bn }, Symbol.toStringTag, { value: "Module" }));
async function wa(a, e, t, n, s) {
  try {
    const r = jn(a, e, t, n);
    return await s([{ role: "system", content: "\u4F60\u662F\u4E00\u4E2A\u751F\u6D3B\u5728\u5C0F\u9547\u4E2D\u7684\u89D2\u8272\u3002\u8BF7\u6839\u636E\u5F53\u524D\u72B6\u6001\u8FDB\u884C\u601D\u8003\uFF0C\u5E76\u4EE5 JSON \u683C\u5F0F\u8FD4\u56DE\u4F60\u7684\u51B3\u7B56\u3002" }, { role: "user", content: r }]);
  } catch (r) {
    return console.error("[AI-API] \u601D\u8003\u8C03\u7528\u5931\u8D25:", r), null;
  }
}
async function Da(a, e, t, n, s) {
  try {
    const r = Ie(a, e, t, n), i = [{ role: "system", content: `\u4F60\u662F ${a.name}\uFF0C\u6B63\u5728\u4E0E ${t} \u5BF9\u8BDD\u3002\u8BF7\u4EE5 JSON \u683C\u5F0F\u8FD4\u56DE\u4F60\u7684\u5BF9\u8BDD\u5185\u5BB9\u3002` }, { role: "user", content: r }], c = await s(i);
    try {
      const o = c.match(/\{[\s\S]*\}/);
      if (o) {
        const l = JSON.parse(o[0]);
        return { dialogue: String(l.dialogue || ""), innerThought: l.innerThought ? String(l.innerThought) : void 0, endConversation: !!l.endConversation };
      }
    } catch {
      return { dialogue: c.slice(0, 50), endConversation: false };
    }
    return null;
  } catch (r) {
    return console.error("[AI-API] \u5BF9\u8BDD\u8C03\u7528\u5931\u8D25:", r), null;
  }
}
async function Aa(a, e, t) {
  try {
    const n = a.history.slice(-10).map((c) => `[${c.role === "assistant" ? "\u6211" : "\u7CFB\u7EDF/\u4ED6\u4EBA"}] ${c.content}`).join(`
`), s = `\u4F60\u662F ${a.name}\uFF0C${a.personality}\u3002

## \u4ECA\u5929\u662F\u7B2C ${e.day} \u5929

## \u4ECA\u65E5\u72B6\u6001
- \u91D1\u94B1: $${a.money}
- \u4F53\u529B: ${a.stamina}/${a.maxStamina}
- \u6D3B\u529B: ${a.energy}/${a.maxEnergy}
- \u6109\u60A6: ${a.happiness}/100
- \u4F4F\u623F: ${a.home.name}

## \u5E93\u5B58
${Object.entries(a.inventory).map(([c, o]) => `- ${c}: ${o}`).join(`
`) || "(\u7A7A)"}

## \u4ECA\u65E5\u53D1\u751F\u7684\u4E8B
${n || "(\u65E0\u8BB0\u5F55)"}

## \u957F\u671F\u76EE\u6807
${a.longTermGoal}

## \u4EFB\u52A1
\u8BF7\u5199\u4E00\u7BC7\u7B80\u77ED\u7684\u65E5\u8BB0\uFF0C\u56DE\u987E\u4ECA\u5929\u53D1\u751F\u7684\u4E8B\uFF0C\u4EE5\u53CA\u4E00\u53E5\u611F\u609F\u6216\u667A\u6167\u3002

\u8FD4\u56DE JSON:
{
  "diary": "\u4ECA\u65E5\u65E5\u8BB0\u5185\u5BB9 (100\u5B57\u4EE5\u5185)",
  "wisdom": "\u4E00\u53E5\u611F\u609F\u6216\u667A\u6167 (30\u5B57\u4EE5\u5185)"
}`, i = await t([{ role: "system", content: "\u4F60\u662F\u4E00\u4E2A\u5199\u65E5\u8BB0\u7684\u89D2\u8272\u3002\u8BF7\u4EE5 JSON \u683C\u5F0F\u8FD4\u56DE\u65E5\u8BB0\u5185\u5BB9\u3002" }, { role: "user", content: s }]);
    try {
      const c = i.match(/\{[\s\S]*\}/);
      if (c) {
        const o = JSON.parse(c[0]);
        return { diary: String(o.diary || ""), wisdom: String(o.wisdom || "") };
      }
    } catch {
      return { diary: i.slice(0, 100), wisdom: "\u4ECA\u5929\u4E5F\u662F\u5E73\u51E1\u7684\u4E00\u5929\u3002" };
    }
    return null;
  } catch (n) {
    return console.error("[AI-API] \u65E5\u8BB0\u8C03\u7528\u5931\u8D25:", n), null;
  }
}
export {
  $ as A,
  Da as B,
  ca as C,
  ga as D,
  A as E,
  Wn as F,
  ya as G,
  Bn as H,
  ka as I,
  vn as J,
  _n as K,
  x as L,
  z as M,
  sa as N,
  ra as O,
  Ma as P,
  Ta as Q,
  He as R,
  Ia as S,
  ma as T,
  xa as U,
  kt as V,
  aa as W,
  ta as a,
  oa as b,
  ea as c,
  la as d,
  ua as e,
  da as f,
  Z as g,
  ha as h,
  Qn as i,
  _a as j,
  fa as k,
  ba as l,
  ue as m,
  Sa as n,
  Ca as o,
  pa as p,
  de as q,
  ia as r,
  na as s,
  E as t,
  Aa as u,
  $a as v,
  wa as w,
  va as x,
  Pa as y,
  Ea as z
};
