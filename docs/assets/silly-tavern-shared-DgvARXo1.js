import { bf as W, be as z, bd as Y, bc as $, bt as H, bu as Q } from "./react-vendor-C1AjJau_.js";
import { o, s as e, n as t, b as m, r as x, a as S, l as d, c as r, _ as b, u as I, t as v, e as Z } from "./zod-grrOrvCS.js";
import { u as w, v as C, x as ee } from "./vendor-VvUkZRdw.js";
const M = { chat: { id: "chat", label: "\u804A\u5929", description: "\u7EAF\u7CB9\u7684\u89D2\u8272RP\u5BF9\u8BDD", icon: Q, colorClass: "text-blue-500", badgeText: "\u804A\u5929\u6A21\u5F0F", sessionPrefix: "\u804A\u5929" }, challenge: { id: "challenge", label: "\u6311\u6218", description: "\u542B DM \u65C1\u767D\u4E0E\u76EE\u6807\u6311\u6218", icon: H, colorClass: "text-amber-500", badgeText: "\u6311\u6218\u6A21\u5F0F", sessionPrefix: "\u6311\u6218" }, dnd: { id: "dnd", label: "DnD", description: "\u591A\u4EBA DnD \u684C\u6E38\u5192\u9669", icon: $, colorClass: "text-amber-600", badgeText: "DnD \u6A21\u5F0F", sessionPrefix: "DnD \u5192\u9669" }, "group-chat": { id: "group-chat", label: "\u7FA4\u804A", description: "\u591A\u89D2\u8272\u81EA\u7531\u7FA4\u804A", icon: Y, colorClass: "text-violet-500", badgeText: "\u7FA4\u804A\u6A21\u5F0F", sessionPrefix: "\u7FA4\u804A" }, "chat-create-character": { id: "chat-create-character", label: "\u804A\u5929\u521B\u89D2", description: "\u901A\u8FC7\u5BF9\u8BDD\u521B\u5EFA\u89D2\u8272\u5361", icon: z, colorClass: "text-emerald-500", badgeText: "\u804A\u5929\u521B\u89D2", sessionPrefix: "\u521B\u5EFA\u89D2\u8272" }, "chat-create-challenge": { id: "chat-create-challenge", label: "\u804A\u5929\u521B\u6311\u6218", description: "\u901A\u8FC7\u5BF9\u8BDD\u521B\u5EFA\u6311\u6218\u5361", icon: W, colorClass: "text-orange-500", badgeText: "\u804A\u5929\u521B\u6311\u6218", sessionPrefix: "\u521B\u5EFA\u6311\u6218" } };
function Le(s) {
  return M[s] || M.chat;
}
const se = o({ keys: m(e()).describe("\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5339\u914D\u804A\u5929\u65E5\u5FD7"), content: e().describe("\u5185\u5BB9\uFF0C\u5982\u679C\u5339\u914D\u5219\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u4E2D"), extensions: x(e(), S()).describe("\u6269\u5C55\u5B57\u6BB5"), enabled: r().describe("\u662F\u5426\u542F\u7528"), insertion_order: t().describe("\u63D2\u5165\u987A\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5C0F\u8D8A\u65E9\u63D2\u5165"), case_sensitive: r().optional().describe("\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199"), constant: r().optional().describe("\u662F\u5426\u4E3A\u5E38\u91CF\u5339\u914D"), name: e().optional().describe("\u6761\u76EE\u540D\u79F0"), priority: t().optional().describe("\u4F18\u5148\u7EA7"), id: t().optional().describe("\u6761\u76EEID"), comment: e().optional().describe("\u6CE8\u91CA"), selective: r().optional().describe("\u662F\u5426\u9009\u62E9\u6027\u5339\u914D"), secondary_keys: m(e()).optional().describe("\u6B21\u8981\u5173\u952E\u8BCD"), position: b(["before_char", "after_char"]).optional().describe("\u63D2\u5165\u4F4D\u7F6E") }), ie = o({ keys: m(e()).describe("\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5339\u914D\u804A\u5929\u65E5\u5FD7"), content: e().describe("\u5185\u5BB9\uFF0C\u5982\u679C\u5339\u914D\u5219\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u4E2D"), extensions: x(e(), S()).describe("\u6269\u5C55\u5B57\u6BB5"), enabled: r().describe("\u662F\u5426\u542F\u7528"), insertion_order: t().describe("\u63D2\u5165\u987A\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5C0F\u8D8A\u65E9\u63D2\u5165"), case_sensitive: r().optional().describe("\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199"), use_regex: r().optional().describe("\u662F\u5426\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D"), constant: r().optional().describe("\u662F\u5426\u4E3A\u5E38\u91CF\u5339\u914D"), name: e().optional().describe("\u6761\u76EE\u540D\u79F0"), priority: t().optional().describe("\u4F18\u5148\u7EA7"), id: I([t(), e()]).optional().describe("\u6761\u76EEID"), comment: e().optional().describe("\u6CE8\u91CA"), selective: r().optional().describe("\u662F\u5426\u9009\u62E9\u6027\u5339\u914D"), secondary_keys: m(e()).optional().describe("\u6B21\u8981\u5173\u952E\u8BCD"), position: b(["before_char", "after_char"]).optional().describe("\u63D2\u5165\u4F4D\u7F6E") }), te = I([se, ie]), N = o({ name: e().optional().describe("\u77E5\u8BC6\u4E66\u540D\u79F0"), description: e().optional().describe("\u77E5\u8BC6\u4E66\u63CF\u8FF0"), scan_depth: t().optional().describe("\u626B\u63CF\u6DF1\u5EA6\uFF0C\u68C0\u67E5\u6700\u8FD1\u591A\u5C11\u6761\u6D88\u606F"), token_budget: t().optional().describe("\u4EE4\u724C\u9884\u7B97\uFF0C\u8D85\u8FC7\u5219\u79FB\u9664\u4F4E\u4F18\u5148\u7EA7\u6761\u76EE"), recursive_scanning: r().optional().describe("\u662F\u5426\u542F\u7528\u9012\u5F52\u626B\u63CF"), extensions: x(e(), S()).describe("\u6269\u5C55\u5B57\u6BB5"), entries: m(te).describe("\u6761\u76EE\u6570\u7EC4") }), ae = o({ type: e().describe("\u8D44\u4EA7\u7C7B\u578B\uFF0C\u5982 'icon', 'background' \u7B49"), uri: e().describe("\u8D44\u4EA7URI"), name: e().describe("\u8D44\u4EA7\u540D\u79F0"), ext: e().describe("\u6587\u4EF6\u6269\u5C55\u540D") }), D = o({ name: e().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: e().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), creator: e().describe("\u521B\u5EFA\u8005\u3010v2\u3011"), creator_notes: e().describe("\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v2\u3011"), creator_notes_multilingual: x(e(), e()).optional().describe("\u591A\u8BED\u8A00\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v3\u3011"), extensions: x(e(), S()).describe("\u53EF\u81EA\u5B9A\u4E49\u7684\u6269\u5C55\u5B57\u6BB5\u3010v2\u3011"), assets: m(ae).optional().describe("\u8D44\u4EA7\u6570\u7EC4\u3010v3\u3011"), system_prompt: e().describe("\u7CFB\u7EDF\u63D0\u793A\u8BCD(\u6A21\u677F)\u3010v2\u3011"), post_history_instructions: e().describe("\u5386\u53F2\u6307\u4EE4\u540E\u7F00(\u6A21\u677F)\u3010v2\u3011"), nickname: e().optional().describe("\u6635\u79F0\u3010v3\u3011"), personality: e().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), mes_example: e().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011"), first_mes: e().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), alternate_greetings: m(e()).describe("\u5907\u7528\u95EE\u5019\u8BED\u6570\u7EC4\u3010v2\u3011"), group_only_greetings: m(e()).describe("\u4EC5\u7FA4\u804A\u95EE\u5019\u8BED\u3010v3\u3011"), scenario: e().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), character_book: N.optional().describe("\u89D2\u8272\u7279\u5B9A\u77E5\u8BC6\u4E66\u3010\u90E8\u5206\u529F\u80FD\uFF08\u5982\u88C5\u9970\u5668\uFF09\u9650\u5355\u804A\u4F7F\u7528\u3011\u3010v2\u3011"), character_version: e().describe("\u89D2\u8272\u7248\u672C\u3010v2\u3011"), tags: m(e()).describe("\u6807\u7B7E\u6570\u7EC4\uFF0C\u7528\u4E8E\u7B5B\u9009\uFF0C\u5927\u5C0F\u5199\u654F\u611F\u3010v2\u3011"), source: m(e()).optional().describe("\u6765\u6E90\u6570\u7EC4\uFF0C\u4FBF\u4E8E\u6EAF\u6E90\u6216\u81EA\u52A8\u66F4\u65B0\u7B49\u3010v3\u3011"), creation_date: t().optional().describe("\u521B\u5EFA\u65E5\u671F\uFF08Unix\u65F6\u95F4\u6233\uFF09\u3010v3\u3011"), modification_date: t().optional().describe("\u4FEE\u6539\u65E5\u671F\uFF08Unix\u65F6\u95F4\u6233\uFF09\u3010v3\u3011") }), re = o({ name: e().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: e().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), personality: e().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), scenario: e().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), first_mes: e().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), mes_example: e().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011"), creator_notes: e().describe("\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v2\u3011"), system_prompt: e().describe("\u7CFB\u7EDF\u63D0\u793A\u8BCD(\u6A21\u677F)\u3010v2\u3011"), post_history_instructions: e().describe("\u5386\u53F2\u6307\u4EE4\u540E\u7F00(\u6A21\u677F)\u3010v2\u3011"), alternate_greetings: m(e()).describe("\u5907\u7528\u95EE\u5019\u8BED\u6570\u7EC4\u3010v2\u3011"), character_book: N.optional().describe("\u89D2\u8272\u7279\u5B9A\u77E5\u8BC6\u4E66\u3010\u90E8\u5206\u529F\u80FD\uFF08\u5982\u88C5\u9970\u5668\uFF09\u9650\u5355\u804A\u4F7F\u7528\u3011\u3010v2\u3011"), tags: m(e()).describe("\u6807\u7B7E\u6570\u7EC4\uFF0C\u7528\u4E8E\u7B5B\u9009\uFF0C\u5927\u5C0F\u5199\u654F\u611F\u3010v2\u3011"), creator: e().describe("\u521B\u5EFA\u8005\u3010v2\u3011"), character_version: e().describe("\u89D2\u8272\u7248\u672C\u3010v2\u3011"), extensions: x(e(), S()).describe("\u53EF\u81EA\u5B9A\u4E49\u7684\u6269\u5C55\u5B57\u6BB5\u3010v2\u3011") });
o({ spec: d("chara_card_v2").describe("\u89C4\u8303\u6807\u8BC6"), spec_version: d("2.0").describe("\u89C4\u8303\u7248\u672C"), data: re.describe("\u6570\u636E") });
const A = o({ spec: d("chara_card_v3").describe("\u89C4\u8303\u6807\u8BC6"), spec_version: d("3.0").describe("\u89C4\u8303\u7248\u672C"), data: D.describe("\u6570\u636E") }), V = o({ name: e().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: e().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), personality: e().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), scenario: e().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), first_mes: e().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), mes_example: e().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011") }), U = D.extend({ id: e().describe("\u89D2\u8272\u5361ID"), avatar: e().optional().describe("\u5934\u50CFURI"), imageBase64: e().optional().describe("PNG\u56FE\u50CFBase64\u6570\u636E"), createdAt: t().optional().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: t().optional().describe("\u66F4\u65B0\u65F6\u95F4") }), u = o({ id: e().optional().describe("\u4E0A\u4E0B\u6587\u9879 ID"), idx: t().optional().describe("\u4E0A\u4E0B\u6587\u9879\u7D22\u5F15\u4F4D\u7F6E"), orderRef: t().optional().describe("\u4E0A\u4E0B\u6587\u9879\u6392\u5E8F\u53C2\u8003\u503C").default(0), type: e().optional().describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\u6807\u7B7E").default("default"), data: S().describe("\u4E0A\u4E0B\u6587\u5185\u5BB9"), hidden: r().optional().nullable().describe("\u662F\u5426\u9690\u85CF\u8BE5\u4E0A\u4E0B\u6587\u9879"), processing: r().optional().nullable().describe("\u4E0A\u4E0B\u6587\u9879\u5904\u7406\u72B6\u6001\uFF0C\u5904\u7406\u4E2D\u8BBE\u7F6E\u4E3A true\uFF0C\u5904\u7406\u5B8C\u6BD5\u8BBE\u7F6E\u4E3A undefined"), timestamp: t().optional().nullable().describe("\u6D88\u606F\u65F6\u95F4\u6233"), deleted: r().optional().nullable().describe("\u662F\u5426\u5DF2\u5220\u9664\u8BE5\u4E0A\u4E0B\u6587\u9879") }), Pe = o({ historyItems: u.array().describe("\u4E0A\u4E0B\u6587\u9879\u6570\u7EC4"), processingItem: u.optional().describe("\u6B63\u5728\u5904\u7406\u4E2D\u7684\u4E0A\u4E0B\u6587\u9879(\u9650\u4E00\u9879)") });
o({ role: b(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: e().describe("\u6D88\u606F\u5185\u5BB9"), name: e().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") });
u.extend({ type: d("llm_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1ALLM\u6D88\u606F"), data: o({ role: b(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: e().describe("\u6D88\u606F\u5185\u5BB9"), name: e().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") }).describe("\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u56E0\u4E3A\u4E0A\u4E0B\u6587\u7BA1\u7406\u5E94\u8BE5\u4F7F\u7528\u66F4\u52A0\u7CBE\u7EC6\u7684\u7ED3\u6784\u3002LLM\u6D88\u606F\u4E0A\u4E0B\u6587\u9879\u53EA\u662F\u6700\u6734\u7D20\u7684\u5F62\u5F0F\u3002");
u.extend({ type: d("starting_system_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u8D77\u59CB\u7CFB\u7EDF\u6D88\u606F"), data: o({ role: d("system").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: e().describe("\u6D88\u606F\u5185\u5BB9"), name: e().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
u.extend({ type: d("in_context_system_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u4E0A\u4E0B\u6587\u4E4B\u4E2D\u7684\u7CFB\u7EDF\u6D88\u606F"), data: o({ role: d("system").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: e().describe("\u6D88\u606F\u5185\u5BB9"), name: e().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
u.extend({ type: d("tool_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u5DE5\u5177\u6D88\u606F"), data: o({ role: d("tool").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: e().describe("\u6D88\u606F\u5185\u5BB9"), name: e().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
u.extend({ type: d("story_telling").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u8BB2\u6545\u4E8B\u6D88\u606F"), data: o({ role: b(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: e().describe("\u6D88\u606F\u5185\u5BB9"), name: e().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
const F = o({ isCharacter: r().optional().default(false).describe("\u662F\u5426\u4E3A\u89D2\u8272\u6D88\u606F"), isEnv: r().optional().default(false).describe("\u662F\u5426\u4E3A\u73AF\u5883\u6D88\u606F"), isDM: r().optional().default(false).describe("\u662F\u5426\u4E3ADM\u6D88\u606F"), isUser: r().optional().default(false).describe("\u662F\u5426\u4E3A\u7528\u6237\u6D88\u606F"), characterId: e().optional().describe("\u89D2\u8272 ID"), userId: e().optional().describe("\u7528\u6237 ID"), content: e().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: t().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233"), name: e().optional().describe("\u53D1\u9001\u8005\u540D\u79F0"), role: b(["system", "user", "assistant", "tool"]).optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272") }), oe = u.extend({ type: d("participant_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u53C2\u4E0E\u8005\u6D88\u606F"), data: F.describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") }), O = o({ isCharacter: r().optional().default(false).describe("\u662F\u5426\u4E3A\u89D2\u8272\u6D88\u606F"), isEnv: r().optional().default(false).describe("\u662F\u5426\u4E3A\u73AF\u5883\u6D88\u606F"), isDM: r().optional().default(false).describe("\u662F\u5426\u4E3ADM\u6D88\u606F"), isUser: r().optional().default(false).describe("\u662F\u5426\u4E3A\u7528\u6237\u6D88\u606F"), characterId: e().optional().describe("\u89D2\u8272 ID"), userId: e().optional().describe("\u7528\u6237 ID"), list: m(o({ content: e().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: t().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233"), originalIdx: t().optional().describe("\u539F\u59CB\u7D22\u5F15\u4F4D\u7F6E") })).describe("\u6D88\u606F\u5217\u8868"), name: e().optional().describe("\u53D1\u9001\u8005\u540D\u79F0"), role: b(["system", "user", "assistant", "tool"]).optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272") });
u.extend({ type: d("participant_message_group").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u53C2\u4E0E\u8005\u6D88\u606F\u7EC4"), data: O.describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
oe.extend({ type: d("character_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u6D88\u606F"), data: F.extend({ characterId: e().describe("\u89D2\u8272 ID") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
u.extend({ type: d("character_message_group").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u6D88\u606F\u7EC4"), data: O.extend({ characterId: e().describe("\u89D2\u8272 ID") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
u.extend({ type: d("placeholder").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u5360\u4F4D\u7B26"), data: S().nullable().optional().describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9"), hidden: d(true).describe("\u5360\u4F4D\u7B26\u4E0A\u4E0B\u6587\u9879\u9ED8\u8BA4\u9690\u85CF") });
u.extend({ type: d("alert").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u7A0B\u5E8F\u63D0\u793A"), data: o({ type: b(["info", "warning", "error", "success", "secondary", "contrast"]).describe("\u7A0B\u5E8F\u63D0\u793A\u7C7B\u578B"), content: e().describe("\u5185\u5BB9"), timestamp: t().optional().describe("\u65F6\u95F4\u6233") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
u.extend({ type: d("summary").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6458\u8981"), data: o({ range: v([t().describe("\u8D77\u59CB\u7D22\u5F15\u4F4D\u7F6E"), t().describe("\u7ED3\u675F\u7D22\u5F15\u4F4D\u7F6E")]).describe("\u6458\u8981\u8986\u76D6\u7684\u5185\u5BB9\u8303\u56F4"), content: e().describe("\u6458\u8981\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
u.extend({ type: d("annotation").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6CE8\u89E3"), data: o({ target: t().describe("\u6CE8\u89E3\u76EE\u6807\u7684\u7D22\u5F15\u4F4D\u7F6E"), content: e().describe("\u6CE8\u89E3\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
u.extend({ type: d("performance_command").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6F14\u51FA\u6307\u4EE4"), data: o({ anchor: t().describe("\u6F14\u51FA\u6307\u4EE4\u7684\u951A\u70B9\u4F4D\u7F6E"), command: m(S()).describe("\u6F14\u51FA\u6307\u4EE4\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
u.extend({ type: d("dm_intro").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1ADM \u5F00\u573A\u767D"), data: o({ content: e().describe("DM \u5F00\u573A\u767D\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
u.extend({ type: d("character_intro").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u5F00\u573A\u767D"), data: o({ characterId: e().optional().describe("\u89D2\u8272ID"), content: e().describe("\u89D2\u8272\u5F00\u573A\u767D\u5185\u5BB9"), timestamp: t().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
const Me = o({ id: e().describe("\u4F1A\u8BDDID"), title: e().optional().describe("\u4F1A\u8BDD\u6807\u9898"), contextId: e().optional().nullable().describe("\u5173\u8054\u7684\u4E0A\u4E0B\u6587\u7684ID"), mode: e().describe("\u6A21\u5F0F"), modeConfig: x(e(), S()).describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: x(e(), S()).describe("\u6A21\u5F0F\u4E13\u7528\u72B6\u6001"), createdAt: t().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: t().describe("\u66F4\u65B0\u65F6\u95F4"), isActive: r().optional().describe("\u662F\u5426\u6D3B\u8DC3") }), ne = o({ key: e().describe("\u53D8\u91CF\u952E"), type: d("boolean").describe("\u53D8\u91CF\u7C7B\u578B"), description: e().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: r().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: r().describe("\u521D\u59CB\u503C") }), ce = o({ key: e().describe("\u53D8\u91CF\u952E"), type: d("number").describe("\u53D8\u91CF\u7C7B\u578B"), description: e().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: r().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: t().describe("\u521D\u59CB\u503C"), min: t().optional().describe("\u6700\u5C0F\u503C"), max: t().optional().describe("\u6700\u5927\u503C"), minDelta: t().optional().describe("(\u7EDD\u5BF9\u503C\u7684)\u6700\u5C0F\u53D8\u5316\u5E45\u5EA6"), maxDelta: t().optional().describe("(\u7EDD\u5BF9\u503C\u7684)\u6700\u5927\u53D8\u5316\u5E45\u5EA6"), asPercent: r().optional().describe("\u662F\u5426\u4E3A\u767E\u5206\u6BD4(\u754C\u9762\u6DFB\u52A0\u767E\u5206\u53F7)") }), de = o({ key: e().describe("\u53D8\u91CF\u952E"), type: d("string").describe("\u53D8\u91CF\u7C7B\u578B"), description: e().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: r().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: e().describe("\u521D\u59CB\u503C"), asEnum: r().optional().describe("\u662F\u5426\u4E3A\u679A\u4E3E"), enumValues: m(e()).optional().describe("\u679A\u4E3E\u503C\u5217\u8868") }), le = o({ key: e().describe("\u53D8\u91CF\u952E"), type: d("tags").describe("\u53D8\u91CF\u7C7B\u578B"), description: e().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: r().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: m(e()).describe("\u521D\u59CB\u6807\u7B7E\u5217\u8868"), asEnum: r().optional().describe("\u662F\u5426\u4E3A\u679A\u4E3E"), enumValues: m(e()).optional().describe("\u679A\u4E3E\u503C\u5217\u8868") }), be = Z("type", [ne, ce, de, le]);
x(e(), be).describe("\u53D8\u91CF\u914D\u7F6E\u5B57\u5178");
const pe = o({ key: e().describe("\u53D8\u91CF\u952E"), value: I([r(), t(), e(), m(e())]).describe("\u53D8\u91CF\u503C") }), Be = x(e(), pe).describe("\u53D8\u91CF\u5B57\u5178");
b(["setTrue", "setFalse", "toggle", "delta", "setTo", "setValue", "add", "remove"]);
const me = v([b(["setTrue", "setFalse", "toggle"]), e().describe("\u53D8\u91CF\u952E")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u5E03\u5C14\u7C7B\u578B"), ue = v([b(["delta", "setTo", "setValue"]), e().describe("\u53D8\u91CF\u952E"), t().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u6570\u5B57\u7C7B\u578B"), _e = v([b(["setTo", "setValue"]), e().describe("\u53D8\u91CF\u952E"), e().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u5B57\u7B26\u4E32\u7C7B\u578B"), he = v([b(["add", "remove"]), e().describe("\u53D8\u91CF\u952E"), e().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u6807\u7B7E\u7C7B\u578B");
I([me, ue, _e, he]).describe("\u53D8\u91CF\u64CD\u4F5C\u5143\u7EC4");
b(["isTrue", "isFalse", "eq", "is", "neq", "isNot", "gt", "gte", "lt", "lte", "includes", "notIncludes", "has", "hasAny", "hasAll", "llmJudge", "and", "or", "all", "any", "some"]);
const fe = v([b(["isTrue", "isFalse"]), e().describe("\u53D8\u91CF\u952E")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5E03\u5C14\u7C7B\u578B"), ve = v([b(["eq", "neq", "is", "isNot"]), e().describe("\u53D8\u91CF\u952E"), I([e(), t(), r()]).describe("\u6BD4\u8F83\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5B57\u9762\u91CF\u7C7B\u578B"), ge = v([b(["gt", "gte", "lt", "lte"]), e().describe("\u53D8\u91CF\u952E"), t().describe("\u6BD4\u8F83\u503C")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u6570\u5B57\u7C7B\u578B"), ye = v([b(["includes", "notIncludes", "has", "hasAny", "hasAll", "llmJudge"]), e().describe("\u53D8\u91CF\u952E"), I([e(), t(), r()]).describe("\u53C2\u8003\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5185\u5BB9\u7C7B\u578B(\u5B57\u7B26\u4E32\u548C\u6807\u7B7E)"), xe = v([b(["hasAny", "hasAll"]), e().describe("\u53D8\u91CF\u952E"), I([e(), t(), r()]).array().describe("\u53C2\u8003\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5185\u5BB9\u6570\u7EC4\u7C7B\u578B(\u5B57\u7B26\u4E32\u548C\u6807\u7B7E)"), T = I([fe, ve, ge, ye, xe]).describe("\u6761\u4EF6\u5143\u7EC4"), J = v([b(["and", "or", "all", "any", "some"]), m(T).describe("\u5B50\u6761\u4EF6\u5143\u7EC4\u6570\u7EC4")]).describe("\u7B80\u5355\u590D\u5408\u6761\u4EF6\u5143\u7EC4"), Se = v([b(["and", "or", "all", "any", "some"]), I([T, J]).array().describe("\u5B50\u6761\u4EF6\u5143\u7EC4\u6570\u7EC4")]).describe("\u590D\u6742\u590D\u5408\u6761\u4EF6\u5143\u7EC4"), Ie = I([T, J, Se]).describe("\u6761\u4EF6\u5143\u7EC4\uFF08\u652F\u6301\u5355\u4E00\u6761\u4EF6\u548C\u590D\u5408\u6761\u4EF6\uFF09"), Ee = o({ key: e().describe("\u68C0\u67E5\u9879\u952E"), description: e().describe("\u68C0\u67E5\u9879\u63CF\u8FF0"), condition: Ie.describe("\u7ED3\u6784\u5316\u8FBE\u6210\u6761\u4EF6") }), we = o({ key: e().describe("\u68C0\u67E5\u9879\u952E"), isCompleted: r().describe("\u662F\u5426\u5DF2\u5B8C\u6210") });
function Ce(s) {
  return { keys: s.keys || [], content: s.content || "", extensions: s.extensions || {}, enabled: s.enabled !== void 0 ? s.enabled : true, insertion_order: s.insertion_order !== void 0 ? s.insertion_order : 0, case_sensitive: s.case_sensitive !== void 0 ? s.case_sensitive : false, use_regex: s.use_regex !== void 0 ? s.use_regex : false, constant: s.constant !== void 0 ? s.constant : false, name: s.name || void 0, priority: s.priority || void 0, id: s.id || void 0, comment: s.comment || void 0, selective: s.selective !== void 0 ? s.selective : false, secondary_keys: s.secondary_keys || void 0, position: s.position || void 0 };
}
function R(s) {
  if (s) return { name: s.name || void 0, description: s.description || void 0, scan_depth: s.scan_depth || void 0, token_budget: s.token_budget || void 0, recursive_scanning: s.recursive_scanning !== void 0 ? s.recursive_scanning : false, extensions: s.extensions || {}, entries: (s.entries || []).map(Ce) };
}
function k(s) {
  const i = D.parse({ ...s, creator_notes: "", system_prompt: "", post_history_instructions: "", alternate_greetings: [], character_book: void 0, tags: [], creator: "", character_version: "", extensions: {}, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return A.parse({ spec: "chara_card_v3", spec_version: "3.0", data: i });
}
function j(s) {
  const i = { ...s.data };
  i.character_book && (i.character_book = R(i.character_book));
  const n = D.parse({ ...i, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return A.parse({ spec: "chara_card_v3", spec_version: "3.0", data: n });
}
function y(s, i) {
  var _a, _b, _c, _d;
  const n = { ...s.data };
  n.character_book ? n.character_book = R(n.character_book) : n.character_book = void 0;
  const a = D.parse(n), _ = ((_a = a.extensions) == null ? void 0 : _a.avatar) || ((_b = a.extensions) == null ? void 0 : _b.image) || void 0;
  let h = i;
  if (!h) {
    if (a.assets) {
      const l = a.assets.find((p) => p.type === "icon" && p.name === "main");
      (l == null ? void 0 : l.uri.startsWith("data:")) && (h = l.uri);
    }
    if (!h && a.extensions) {
      const l = a.extensions.imageBase64 || a.extensions.image;
      l && typeof l == "string" && l.startsWith("data:") && (h = l);
    }
  }
  return U.parse({ ...a, id: crypto.randomUUID(), avatar: _, imageBase64: h, createdAt: a.creation_date || ((_c = a.extensions) == null ? void 0 : _c.create_date) || Date.now(), updatedAt: a.modification_date || ((_d = a.extensions) == null ? void 0 : _d.update_date) || Date.now() });
}
function G(s) {
  const i = { ...s }, n = ["id", "createdAt", "updatedAt", "avatar", "imageBase64"];
  for (const l of n) delete i[l];
  const a = { ...s.extensions || {} };
  s.avatar && (a.avatar = s.avatar), s.imageBase64 && (a.imageBase64 = s.imageBase64);
  let _ = i.assets || [];
  if (s.imageBase64) {
    const l = { type: "icon", uri: s.imageBase64, name: "main", ext: "png" }, p = _.findIndex((c) => c.type === "icon" && c.name === "main");
    p >= 0 ? _[p] = l : _ = [l, ..._];
  }
  const h = D.parse({ ...i, extensions: a, assets: _, creation_date: s.createdAt, modification_date: s.updatedAt });
  return A.parse({ spec: "chara_card_v3", spec_version: "3.0", data: h });
}
function Ne(s) {
  const i = JSON.parse(s);
  if (typeof i == "object" && i !== null && "id" in i && "name" in i && "first_mes" in i) return U.parse(i);
  if (typeof i == "object" && i !== null && "spec" in i) {
    const n = i.spec;
    if (n === "chara_card_v3") return y(i);
    if (n === "chara_card_v2") return y(j(i));
  }
  try {
    const n = V.parse(i);
    return y(k(n));
  } catch {
    if (typeof i == "object" && i !== null && "name" in i) {
      const n = i;
      return y(k({ name: n.name || "", description: n.description || "", personality: n.personality || "", scenario: n.scenario || "", first_mes: n.first_mes || "", mes_example: n.mes_example || "" }));
    }
    throw new Error("\u65E0\u6CD5\u89E3\u6790JSON\u4E2D\u7684\u89D2\u8272\u6570\u636E");
  }
}
async function Ve(s) {
  const i = await s.arrayBuffer(), n = w(new Uint8Array(i)), a = n.find((p) => p.name === "tEXt" && C.decode(p.data).keyword === "chara"), _ = n.find((p) => p.name === "tEXt" && C.decode(p.data).keyword === "ccv3"), h = new Blob([i], { type: "image/png" }), l = await new Promise((p) => {
    const c = new FileReader();
    c.onloadend = () => p(c.result), c.readAsDataURL(h);
  });
  if (_) {
    const p = C.decode(_.data), c = JSON.parse(E(p.text));
    return typeof c == "object" && c !== null && "spec" in c && c.spec === "chara_card_v3" ? y(c, l) : y(k(c), l);
  }
  if (a) {
    const p = C.decode(a.data), c = JSON.parse(E(p.text));
    if (typeof c == "object" && c !== null && "spec" in c) {
      const f = c.spec;
      if (f === "chara_card_v3") return y(c, l);
      if (f === "chara_card_v2") return y(j(c), l);
    }
    try {
      const f = V.parse(c);
      return y(k(f), l);
    } catch {
      if (typeof c == "object" && c !== null && "name" in c) {
        const f = c;
        return y(k({ name: f.name || "", description: f.description || "", personality: f.personality || "", scenario: f.scenario || "", first_mes: f.first_mes || "", mes_example: f.mes_example || "" }), l);
      }
      throw new Error("\u65E0\u6CD5\u89E3\u6790\u56FE\u7247\u4E2D\u7684\u89D2\u8272\u6570\u636E");
    }
  }
  throw new Error("\u672A\u5728\u56FE\u7247\u4E2D\u627E\u5230\u89D2\u8272\u6570\u636E (tEXt \u5757\u7F3A\u5931)");
}
function Ue(s) {
  if (!s.imageBase64) throw new Error("\u89D2\u8272\u6CA1\u6709\u56FE\u50CF\u6570\u636E\uFF0C\u65E0\u6CD5\u5BFC\u51FA\u4E3A PNG \u89D2\u8272\u5361");
  const i = s.imageBase64.split(",")[1], n = atob(i), a = n.length, _ = new Uint8Array(a);
  for (let g = 0; g < a; g++) _[g] = n.charCodeAt(g);
  const h = w(_), l = G(s), p = B(JSON.stringify(l)), c = h.filter((g) => !(g.name === "tEXt" && (C.decode(g.data).keyword === "chara" || C.decode(g.data).keyword === "ccv3"))), f = C.encode("ccv3", p), K = { spec: "chara_card_v2", spec_version: "2.0.0", data: l.data }, X = B(JSON.stringify(K)), L = C.encode("chara", X), P = c.findIndex((g) => g.name === "IEND");
  P !== -1 ? c.splice(P, 0, L, f) : c.push(L, f);
  const q = ee(c);
  return new Blob([q], { type: "image/png" });
}
const De = /%([0-9A-F]{2})/g;
function B(s) {
  return btoa(encodeURIComponent(s).replace(De, function(n, a) {
    return String.fromCharCode(Number.parseInt(a, 16));
  }));
}
function E(s) {
  return decodeURIComponent(atob(s).split("").map((i) => `%${`00${i.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
}
function Fe(s, i = {}) {
  var _a;
  const { includeImageBase64: n = false } = i, a = G(s);
  if (n) return JSON.stringify(a, null, 2);
  {
    const _ = { ...a, data: { ...a.data, assets: ((_a = a.data.assets) == null ? void 0 : _a.map((h) => ({ ...h, uri: h.uri.startsWith("data:") ? "" : h.uri }))) || [] } };
    return JSON.stringify(_, null, 2);
  }
}
function Oe() {
  const s = "global-llm-config", i = [];
  try {
    const n = localStorage.getItem(s);
    if (!n) return { isReady: false, missingItems: [{ key: "baseUrl", label: "API \u5730\u5740", description: "LLM \u670D\u52A1\u7684 API \u57FA\u7840\u5730\u5740\u672A\u8BBE\u7F6E" }, { key: "apiKey", label: "API \u5BC6\u94A5", description: "LLM \u670D\u52A1\u7684 API \u5BC6\u94A5\u672A\u8BBE\u7F6E" }, { key: "model", label: "\u6A21\u578B", description: "\u672A\u9009\u62E9\u8981\u4F7F\u7528\u7684 LLM \u6A21\u578B" }] };
    const a = JSON.parse(n);
    return (!a.baseUrl || a.baseUrl.trim() === "") && i.push({ key: "baseUrl", label: "API \u5730\u5740", description: "LLM \u670D\u52A1\u7684 API \u57FA\u7840\u5730\u5740\u672A\u8BBE\u7F6E" }), (!a.apiKey || a.apiKey.trim() === "") && i.push({ key: "apiKey", label: "API \u5BC6\u94A5", description: "LLM \u670D\u52A1\u7684 API \u5BC6\u94A5\u672A\u8BBE\u7F6E" }), (!a.model || a.model.trim() === "") && i.push({ key: "model", label: "\u6A21\u578B", description: "\u672A\u9009\u62E9\u8981\u4F7F\u7528\u7684 LLM \u6A21\u578B" }), { isReady: i.length === 0, missingItems: i };
  } catch {
    return { isReady: false, missingItems: [{ key: "baseUrl", label: "API \u5730\u5740", description: "LLM \u914D\u7F6E\u6570\u636E\u89E3\u6790\u5931\u8D25" }, { key: "apiKey", label: "API \u5BC6\u94A5", description: "LLM \u914D\u7F6E\u6570\u636E\u89E3\u6790\u5931\u8D25" }, { key: "model", label: "\u6A21\u578B", description: "LLM \u914D\u7F6E\u6570\u636E\u89E3\u6790\u5931\u8D25" }] };
  }
}
export {
  Ee as C,
  me as O,
  U as P,
  Me as S,
  be as V,
  Ne as a,
  Fe as b,
  Oe as c,
  we as d,
  Ue as e,
  Be as f,
  Le as g,
  u as h,
  Ve as i,
  Pe as j,
  ue as k,
  _e as l,
  he as m,
  T as n,
  J as o,
  Se as p
};
