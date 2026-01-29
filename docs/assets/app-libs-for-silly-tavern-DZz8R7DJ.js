var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as f, j as e, au as _s, av as ws, t as Z, aw as _e } from "./react-DwoZtHR8.js";
import { c as ge } from "./app-lib-Ce77exfW.js";
import { X as Is, Y as Cs, B as I, Z as ks, _ as Ss, $ as Ds, a0 as As, a1 as Ts, a2 as Ms, a3 as Ps, S as Es, J as Bs, K as Os, u as ve, v as Xe, f as $, d as Q, a5 as Ls, C as P, E as O, F as L, G as Y, H as E, D as ke, s as Se, t as De, a6 as $s, a7 as Rs, a8 as Fs, L as k, w as Hs, a9 as qe, aa as Ke, ab as We, O as Le, N as U, ac as Gs, ad as le, ae as de, af as me, y as Us, z as zs, A as he, a4 as xe } from "./app-components-f9q2KBqK.js";
import { p as Qe, q as Ye, n as Ae, M as Vs, r as Js, S as ne, s as Xs, F as Ze, k as we, t as qs, D as Ks, h as Ws, u as Qs, P as re, e as Ys, C as Zs, I as et, o as Te, v as es, w as Ie, X as st, x as tt, B as at, y as rt, z as it, A as nt, Q as ct, G as ot, J as ss, f as lt, U as dt, K as je, N as mt } from "./icons-KB3ML1Zw.js";
import { j as oe, k as Ne, m as ht, n as xt, e as ts, i as $e } from "./@tanstack-TnKfVvnC.js";
import { t as as, u as W, v as ut } from "./vendor-KHQmFMTG.js";
import { o as y, s as i, n as g, b as S, r as F, a as H, l as w, c as j, _ as D, u as J, t as G, e as pt } from "./zod-grrOrvCS.js";
import { D as fe } from "./dexie-RC68qVM3.js";
import { _ as Ce } from "./index-BHy3yCie.js";
import { n as K } from "./id-OxPLOBIU.js";
import { c as Re } from "./es-toolkit-CstbrnlE.js";
import { c as gt } from "./app-hooks-CLX024ue.js";
const ft = (s) => {
  const [t, a] = f.useState(false);
  return e.jsxs(Is, { open: t, onOpenChange: a, children: [e.jsxs("div", { className: ge("group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors mb-1", s.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"), onClick: () => s.onClick(s.session), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [s.session.mode === "challenge" ? e.jsx(Qe, { className: "w-4 h-4 shrink-0" }) : e.jsx(Ye, { className: "w-4 h-4 shrink-0" }), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: s.session.title || s.characterName }), e.jsx("span", { className: "text-[10px] opacity-70", children: new Date(s.session.updatedAt).toLocaleDateString() })] })] }), e.jsx(Cs, { asChild: true, children: e.jsx(I, { variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: (r) => r.stopPropagation(), type: "button", children: e.jsx(Ae, { className: "w-3.5 h-3.5 text-muted-foreground hover:text-destructive" }) }) })] }), e.jsxs(ks, { children: [e.jsxs(Ss, { children: [e.jsx(Ds, { children: "\u786E\u8BA4\u5220\u9664" }), e.jsx(As, { children: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u4F1A\u8BDD\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002" })] }), e.jsxs(Ts, { children: [e.jsx(Ms, { children: "\u53D6\u6D88" }), e.jsx(Ps, { onClick: () => {
    var _a2;
    (_a2 = s.onDelete) == null ? void 0 : _a2.call(s, s.session), a(false);
  }, children: "\u5220\u9664" })] })] })] });
}, Ra = (s) => {
  const [t, a] = f.useState(""), [r, o] = f.useState(false), l = (c) => {
    var _a2, _b;
    let d;
    if (c.mode === "chat") d = (_a2 = c.modeConfig) == null ? void 0 : _a2.characterId;
    else if (c.mode === "challenge") return "\u6311\u6218\u6A21\u5F0F";
    return d && ((_b = s.characters.find((n) => n.id === d)) == null ? void 0 : _b.name) || "\u672A\u77E5\u89D2\u8272";
  }, m = s.sessions.filter((c) => l(c).toLowerCase().includes(t.toLowerCase())).sort((c, d) => d.updatedAt - c.updatedAt), h = (c = false) => e.jsxs("div", { className: "flex flex-col h-full bg-muted/30 border-r w-64", children: [e.jsxs("div", { className: `p-4 space-y-4 ${c ? "pt-12" : ""}`, children: [e.jsxs(I, { className: "w-full flex items-center gap-2", onClick: () => {
    s.onNewSession(), c && o(false);
  }, type: "button", children: [e.jsx(Js, { className: "w-4 h-4" }), "\u65B0\u4F1A\u8BDD"] }), e.jsxs("div", { className: "relative", children: [e.jsx(ne, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), e.jsx($, { placeholder: "\u641C\u7D22\u4F1A\u8BDD...", className: "pl-8 h-9 text-xs", value: t, onChange: (d) => a(d.target.value) })] })] }), e.jsx("div", { className: "grow overflow-y-auto px-2", children: e.jsxs("div", { className: "space-y-1", children: [m.map((d) => e.jsx(ft, { session: d, isActive: d.id === s.activeSessionId, characterName: l(d), onClick: (n) => {
    s.onSessionSelect(n), c && o(false);
  }, onDelete: s.onSessionDelete }, d.id)), m.length === 0 && e.jsx("div", { className: "text-center py-10 text-muted-foreground text-xs", children: "\u65E0\u4F1A\u8BDD" })] }) })] });
  return e.jsxs(e.Fragment, { children: [e.jsx("aside", { className: "hidden md:flex w-64 flex-col", children: h(false) }), e.jsxs(Es, { open: r, onOpenChange: o, children: [e.jsx(Bs, { asChild: true, children: e.jsx(I, { variant: "outline", size: "icon", className: "md:hidden fixed bottom-6 left-6 rounded-full shadow-lg z-50 h-12 w-12", children: e.jsx(Vs, { className: "h-6 w-6" }) }) }), e.jsxs(Os, { side: "left", className: "w-64 p-0", children: [e.jsx(ve, { className: "sr-only", children: "\u4F1A\u8BDD\u5217\u8868" }), e.jsx(Xe, { className: "sr-only", children: "\u9009\u62E9\u548C\u7BA1\u7406\u60A8\u7684\u804A\u5929\u4F1A\u8BDD" }), h(true)] })] })] });
}, bt = y({ keys: S(i()).describe("\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5339\u914D\u804A\u5929\u65E5\u5FD7"), content: i().describe("\u5185\u5BB9\uFF0C\u5982\u679C\u5339\u914D\u5219\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u4E2D"), extensions: F(i(), H()).describe("\u6269\u5C55\u5B57\u6BB5"), enabled: j().describe("\u662F\u5426\u542F\u7528"), insertion_order: g().describe("\u63D2\u5165\u987A\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5C0F\u8D8A\u65E9\u63D2\u5165"), case_sensitive: j().optional().describe("\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199"), constant: j().optional().describe("\u662F\u5426\u4E3A\u5E38\u91CF\u5339\u914D"), name: i().optional().describe("\u6761\u76EE\u540D\u79F0"), priority: g().optional().describe("\u4F18\u5148\u7EA7"), id: g().optional().describe("\u6761\u76EEID"), comment: i().optional().describe("\u6CE8\u91CA"), selective: j().optional().describe("\u662F\u5426\u9009\u62E9\u6027\u5339\u914D"), secondary_keys: S(i()).optional().describe("\u6B21\u8981\u5173\u952E\u8BCD"), position: D(["before_char", "after_char"]).optional().describe("\u63D2\u5165\u4F4D\u7F6E") }), yt = y({ keys: S(i()).describe("\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5339\u914D\u804A\u5929\u65E5\u5FD7"), content: i().describe("\u5185\u5BB9\uFF0C\u5982\u679C\u5339\u914D\u5219\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u4E2D"), extensions: F(i(), H()).describe("\u6269\u5C55\u5B57\u6BB5"), enabled: j().describe("\u662F\u5426\u542F\u7528"), insertion_order: g().describe("\u63D2\u5165\u987A\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5C0F\u8D8A\u65E9\u63D2\u5165"), case_sensitive: j().optional().describe("\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199"), use_regex: j().optional().describe("\u662F\u5426\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D"), constant: j().optional().describe("\u662F\u5426\u4E3A\u5E38\u91CF\u5339\u914D"), name: i().optional().describe("\u6761\u76EE\u540D\u79F0"), priority: g().optional().describe("\u4F18\u5148\u7EA7"), id: J([g(), i()]).optional().describe("\u6761\u76EEID"), comment: i().optional().describe("\u6CE8\u91CA"), selective: j().optional().describe("\u662F\u5426\u9009\u62E9\u6027\u5339\u914D"), secondary_keys: S(i()).optional().describe("\u6B21\u8981\u5173\u952E\u8BCD"), position: D(["before_char", "after_char"]).optional().describe("\u63D2\u5165\u4F4D\u7F6E") }), vt = J([bt, yt]), rs = y({ name: i().optional().describe("\u77E5\u8BC6\u4E66\u540D\u79F0"), description: i().optional().describe("\u77E5\u8BC6\u4E66\u63CF\u8FF0"), scan_depth: g().optional().describe("\u626B\u63CF\u6DF1\u5EA6\uFF0C\u68C0\u67E5\u6700\u8FD1\u591A\u5C11\u6761\u6D88\u606F"), token_budget: g().optional().describe("\u4EE4\u724C\u9884\u7B97\uFF0C\u8D85\u8FC7\u5219\u79FB\u9664\u4F4E\u4F18\u5148\u7EA7\u6761\u76EE"), recursive_scanning: j().optional().describe("\u662F\u5426\u542F\u7528\u9012\u5F52\u626B\u63CF"), extensions: F(i(), H()).describe("\u6269\u5C55\u5B57\u6BB5"), entries: S(vt).describe("\u6761\u76EE\u6570\u7EC4") }), jt = y({ type: i().describe("\u8D44\u4EA7\u7C7B\u578B\uFF0C\u5982 'icon', 'background' \u7B49"), uri: i().describe("\u8D44\u4EA7URI"), name: i().describe("\u8D44\u4EA7\u540D\u79F0"), ext: i().describe("\u6587\u4EF6\u6269\u5C55\u540D") }), ae = y({ name: i().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: i().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), creator: i().describe("\u521B\u5EFA\u8005\u3010v2\u3011"), creator_notes: i().describe("\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v2\u3011"), creator_notes_multilingual: F(i(), i()).optional().describe("\u591A\u8BED\u8A00\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v3\u3011"), extensions: F(i(), H()).describe("\u53EF\u81EA\u5B9A\u4E49\u7684\u6269\u5C55\u5B57\u6BB5\u3010v2\u3011"), assets: S(jt).optional().describe("\u8D44\u4EA7\u6570\u7EC4\u3010v3\u3011"), system_prompt: i().describe("\u7CFB\u7EDF\u63D0\u793A\u8BCD(\u6A21\u677F)\u3010v2\u3011"), post_history_instructions: i().describe("\u5386\u53F2\u6307\u4EE4\u540E\u7F00(\u6A21\u677F)\u3010v2\u3011"), nickname: i().optional().describe("\u6635\u79F0\u3010v3\u3011"), personality: i().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), mes_example: i().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011"), first_mes: i().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), alternate_greetings: S(i()).describe("\u5907\u7528\u95EE\u5019\u8BED\u6570\u7EC4\u3010v2\u3011"), group_only_greetings: S(i()).describe("\u4EC5\u7FA4\u804A\u95EE\u5019\u8BED\u3010v3\u3011"), scenario: i().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), character_book: rs.optional().describe("\u89D2\u8272\u7279\u5B9A\u77E5\u8BC6\u4E66\u3010\u90E8\u5206\u529F\u80FD\uFF08\u5982\u88C5\u9970\u5668\uFF09\u9650\u5355\u804A\u4F7F\u7528\u3011\u3010v2\u3011"), character_version: i().describe("\u89D2\u8272\u7248\u672C\u3010v2\u3011"), tags: S(i()).describe("\u6807\u7B7E\u6570\u7EC4\uFF0C\u7528\u4E8E\u7B5B\u9009\uFF0C\u5927\u5C0F\u5199\u654F\u611F\u3010v2\u3011"), source: S(i()).optional().describe("\u6765\u6E90\u6570\u7EC4\uFF0C\u4FBF\u4E8E\u6EAF\u6E90\u6216\u81EA\u52A8\u66F4\u65B0\u7B49\u3010v3\u3011"), creation_date: g().optional().describe("\u521B\u5EFA\u65E5\u671F\uFF08Unix\u65F6\u95F4\u6233\uFF09\u3010v3\u3011"), modification_date: g().optional().describe("\u4FEE\u6539\u65E5\u671F\uFF08Unix\u65F6\u95F4\u6233\uFF09\u3010v3\u3011") }), Nt = y({ name: i().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: i().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), personality: i().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), scenario: i().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), first_mes: i().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), mes_example: i().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011"), creator_notes: i().describe("\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v2\u3011"), system_prompt: i().describe("\u7CFB\u7EDF\u63D0\u793A\u8BCD(\u6A21\u677F)\u3010v2\u3011"), post_history_instructions: i().describe("\u5386\u53F2\u6307\u4EE4\u540E\u7F00(\u6A21\u677F)\u3010v2\u3011"), alternate_greetings: S(i()).describe("\u5907\u7528\u95EE\u5019\u8BED\u6570\u7EC4\u3010v2\u3011"), character_book: rs.optional().describe("\u89D2\u8272\u7279\u5B9A\u77E5\u8BC6\u4E66\u3010\u90E8\u5206\u529F\u80FD\uFF08\u5982\u88C5\u9970\u5668\uFF09\u9650\u5355\u804A\u4F7F\u7528\u3011\u3010v2\u3011"), tags: S(i()).describe("\u6807\u7B7E\u6570\u7EC4\uFF0C\u7528\u4E8E\u7B5B\u9009\uFF0C\u5927\u5C0F\u5199\u654F\u611F\u3010v2\u3011"), creator: i().describe("\u521B\u5EFA\u8005\u3010v2\u3011"), character_version: i().describe("\u89D2\u8272\u7248\u672C\u3010v2\u3011"), extensions: F(i(), H()).describe("\u53EF\u81EA\u5B9A\u4E49\u7684\u6269\u5C55\u5B57\u6BB5\u3010v2\u3011") });
y({ spec: w("chara_card_v2").describe("\u89C4\u8303\u6807\u8BC6"), spec_version: w("2.0").describe("\u89C4\u8303\u7248\u672C"), data: Nt.describe("\u6570\u636E") });
const Me = y({ spec: w("chara_card_v3").describe("\u89C4\u8303\u6807\u8BC6"), spec_version: w("3.0").describe("\u89C4\u8303\u7248\u672C"), data: ae.describe("\u6570\u636E") }), is = y({ name: i().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: i().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), personality: i().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), scenario: i().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), first_mes: i().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), mes_example: i().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011") }), Pe = ae.extend({ id: i().describe("\u89D2\u8272\u5361ID"), avatar: i().optional().describe("\u5934\u50CFURI"), imageBase64: i().optional().describe("PNG\u56FE\u50CFBase64\u6570\u636E"), createdAt: g().optional().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: g().optional().describe("\u66F4\u65B0\u65F6\u95F4") }), T = y({ id: i().optional().describe("\u4E0A\u4E0B\u6587\u9879 ID"), idx: g().optional().describe("\u4E0A\u4E0B\u6587\u9879\u7D22\u5F15\u4F4D\u7F6E"), orderRef: g().optional().describe("\u4E0A\u4E0B\u6587\u9879\u6392\u5E8F\u53C2\u8003\u503C").default(0), type: i().optional().describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\u6807\u7B7E").default("default"), data: H().describe("\u4E0A\u4E0B\u6587\u5185\u5BB9"), hidden: j().optional().nullable().describe("\u662F\u5426\u9690\u85CF\u8BE5\u4E0A\u4E0B\u6587\u9879"), processing: j().optional().nullable().describe("\u4E0A\u4E0B\u6587\u9879\u5904\u7406\u72B6\u6001\uFF0C\u5904\u7406\u4E2D\u8BBE\u7F6E\u4E3A true\uFF0C\u5904\u7406\u5B8C\u6BD5\u8BBE\u7F6E\u4E3A undefined"), timestamp: g().optional().nullable().describe("\u6D88\u606F\u65F6\u95F4\u6233"), deleted: j().optional().nullable().describe("\u662F\u5426\u5DF2\u5220\u9664\u8BE5\u4E0A\u4E0B\u6587\u9879") }), ns = y({ historyItems: T.array().describe("\u4E0A\u4E0B\u6587\u9879\u6570\u7EC4"), processingItem: T.optional().describe("\u6B63\u5728\u5904\u7406\u4E2D\u7684\u4E0A\u4E0B\u6587\u9879(\u9650\u4E00\u9879)") });
y({ role: D(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: i().describe("\u6D88\u606F\u5185\u5BB9"), name: i().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") });
T.extend({ type: w("llm_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1ALLM\u6D88\u606F"), data: y({ role: D(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: i().describe("\u6D88\u606F\u5185\u5BB9"), name: i().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") }).describe("\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u56E0\u4E3A\u4E0A\u4E0B\u6587\u7BA1\u7406\u5E94\u8BE5\u4F7F\u7528\u66F4\u52A0\u7CBE\u7EC6\u7684\u7ED3\u6784\u3002LLM\u6D88\u606F\u4E0A\u4E0B\u6587\u9879\u53EA\u662F\u6700\u6734\u7D20\u7684\u5F62\u5F0F\u3002");
T.extend({ type: w("starting_system_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u8D77\u59CB\u7CFB\u7EDF\u6D88\u606F"), data: y({ role: w("system").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: i().describe("\u6D88\u606F\u5185\u5BB9"), name: i().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
T.extend({ type: w("in_context_system_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u4E0A\u4E0B\u6587\u4E4B\u4E2D\u7684\u7CFB\u7EDF\u6D88\u606F"), data: y({ role: w("system").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: i().describe("\u6D88\u606F\u5185\u5BB9"), name: i().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
T.extend({ type: w("tool_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u5DE5\u5177\u6D88\u606F"), data: y({ role: w("tool").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: i().describe("\u6D88\u606F\u5185\u5BB9"), name: i().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
T.extend({ type: w("story_telling").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u8BB2\u6545\u4E8B\u6D88\u606F"), data: y({ role: D(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: i().describe("\u6D88\u606F\u5185\u5BB9"), name: i().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
const cs = y({ isCharacter: j().optional().default(false).describe("\u662F\u5426\u4E3A\u89D2\u8272\u6D88\u606F"), isEnv: j().optional().default(false).describe("\u662F\u5426\u4E3A\u73AF\u5883\u6D88\u606F"), isDM: j().optional().default(false).describe("\u662F\u5426\u4E3ADM\u6D88\u606F"), isUser: j().optional().default(false).describe("\u662F\u5426\u4E3A\u7528\u6237\u6D88\u606F"), characterId: i().optional().describe("\u89D2\u8272 ID"), userId: i().optional().describe("\u7528\u6237 ID"), content: i().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: g().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233"), name: i().optional().describe("\u53D1\u9001\u8005\u540D\u79F0"), role: D(["system", "user", "assistant", "tool"]).optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272") }), _t = T.extend({ type: w("participant_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u53C2\u4E0E\u8005\u6D88\u606F"), data: cs.describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") }), os = y({ isCharacter: j().optional().default(false).describe("\u662F\u5426\u4E3A\u89D2\u8272\u6D88\u606F"), isEnv: j().optional().default(false).describe("\u662F\u5426\u4E3A\u73AF\u5883\u6D88\u606F"), isDM: j().optional().default(false).describe("\u662F\u5426\u4E3ADM\u6D88\u606F"), isUser: j().optional().default(false).describe("\u662F\u5426\u4E3A\u7528\u6237\u6D88\u606F"), characterId: i().optional().describe("\u89D2\u8272 ID"), userId: i().optional().describe("\u7528\u6237 ID"), list: S(y({ content: i().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: g().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233"), originalIdx: g().optional().describe("\u539F\u59CB\u7D22\u5F15\u4F4D\u7F6E") })).describe("\u6D88\u606F\u5217\u8868"), name: i().optional().describe("\u53D1\u9001\u8005\u540D\u79F0"), role: D(["system", "user", "assistant", "tool"]).optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272") });
T.extend({ type: w("participant_message_group").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u53C2\u4E0E\u8005\u6D88\u606F\u7EC4"), data: os.describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
_t.extend({ type: w("character_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u6D88\u606F"), data: cs.extend({ characterId: i().describe("\u89D2\u8272 ID") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
T.extend({ type: w("character_message_group").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u6D88\u606F\u7EC4"), data: os.extend({ characterId: i().describe("\u89D2\u8272 ID") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
T.extend({ type: w("placeholder").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u5360\u4F4D\u7B26"), data: H().nullable().optional().describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9"), hidden: w(true).describe("\u5360\u4F4D\u7B26\u4E0A\u4E0B\u6587\u9879\u9ED8\u8BA4\u9690\u85CF") });
T.extend({ type: w("alert").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u7A0B\u5E8F\u63D0\u793A"), data: y({ type: D(["info", "warning", "error", "success", "secondary", "contrast"]).describe("\u7A0B\u5E8F\u63D0\u793A\u7C7B\u578B"), content: i().describe("\u5185\u5BB9"), timestamp: g().optional().describe("\u65F6\u95F4\u6233") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
T.extend({ type: w("summary").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6458\u8981"), data: y({ range: G([g().describe("\u8D77\u59CB\u7D22\u5F15\u4F4D\u7F6E"), g().describe("\u7ED3\u675F\u7D22\u5F15\u4F4D\u7F6E")]).describe("\u6458\u8981\u8986\u76D6\u7684\u5185\u5BB9\u8303\u56F4"), content: i().describe("\u6458\u8981\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
T.extend({ type: w("annotation").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6CE8\u89E3"), data: y({ target: g().describe("\u6CE8\u89E3\u76EE\u6807\u7684\u7D22\u5F15\u4F4D\u7F6E"), content: i().describe("\u6CE8\u89E3\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
T.extend({ type: w("performance_command").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6F14\u51FA\u6307\u4EE4"), data: y({ anchor: g().describe("\u6F14\u51FA\u6307\u4EE4\u7684\u951A\u70B9\u4F4D\u7F6E"), command: S(H()).describe("\u6F14\u51FA\u6307\u4EE4\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
T.extend({ type: w("dm_intro").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1ADM \u5F00\u573A\u767D"), data: y({ content: i().describe("DM \u5F00\u573A\u767D\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
T.extend({ type: w("character_intro").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u5F00\u573A\u767D"), data: y({ characterId: i().optional().describe("\u89D2\u8272ID"), content: i().describe("\u89D2\u8272\u5F00\u573A\u767D\u5185\u5BB9"), timestamp: g().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
const wt = y({ id: i().describe("\u4F1A\u8BDDID"), title: i().optional().describe("\u4F1A\u8BDD\u6807\u9898"), contextId: i().optional().nullable().describe("\u5173\u8054\u7684\u4E0A\u4E0B\u6587\u7684ID"), mode: i().describe("\u6A21\u5F0F"), modeConfig: F(i(), H()).describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: F(i(), H()).describe("\u6A21\u5F0F\u4E13\u7528\u72B6\u6001"), createdAt: g().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: g().describe("\u66F4\u65B0\u65F6\u95F4"), isActive: j().optional().describe("\u662F\u5426\u6D3B\u8DC3") }), It = y({ key: i().describe("\u53D8\u91CF\u952E"), type: w("boolean").describe("\u53D8\u91CF\u7C7B\u578B"), description: i().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: j().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: j().describe("\u521D\u59CB\u503C") }), Ct = y({ key: i().describe("\u53D8\u91CF\u952E"), type: w("number").describe("\u53D8\u91CF\u7C7B\u578B"), description: i().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: j().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: g().describe("\u521D\u59CB\u503C"), min: g().optional().describe("\u6700\u5C0F\u503C"), max: g().optional().describe("\u6700\u5927\u503C"), minDelta: g().optional().describe("(\u7EDD\u5BF9\u503C\u7684)\u6700\u5C0F\u53D8\u5316\u5E45\u5EA6"), maxDelta: g().optional().describe("(\u7EDD\u5BF9\u503C\u7684)\u6700\u5927\u53D8\u5316\u5E45\u5EA6"), asPercent: j().optional().describe("\u662F\u5426\u4E3A\u767E\u5206\u6BD4(\u754C\u9762\u6DFB\u52A0\u767E\u5206\u53F7)") }), kt = y({ key: i().describe("\u53D8\u91CF\u952E"), type: w("string").describe("\u53D8\u91CF\u7C7B\u578B"), description: i().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: j().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: i().describe("\u521D\u59CB\u503C"), asEnum: j().optional().describe("\u662F\u5426\u4E3A\u679A\u4E3E"), enumValues: S(i()).optional().describe("\u679A\u4E3E\u503C\u5217\u8868") }), St = y({ key: i().describe("\u53D8\u91CF\u952E"), type: w("tags").describe("\u53D8\u91CF\u7C7B\u578B"), description: i().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: j().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: S(i()).describe("\u521D\u59CB\u6807\u7B7E\u5217\u8868"), asEnum: j().optional().describe("\u662F\u5426\u4E3A\u679A\u4E3E"), enumValues: S(i()).optional().describe("\u679A\u4E3E\u503C\u5217\u8868") }), ls = pt("type", [It, Ct, kt, St]);
F(i(), ls).describe("\u53D8\u91CF\u914D\u7F6E\u5B57\u5178");
const Dt = y({ key: i().describe("\u53D8\u91CF\u952E"), value: J([j(), g(), i(), S(i())]).describe("\u53D8\u91CF\u503C") }), At = F(i(), Dt).describe("\u53D8\u91CF\u5B57\u5178");
D(["setTrue", "setFalse", "toggle", "delta", "setTo", "setValue", "add", "remove"]);
const Tt = G([D(["setTrue", "setFalse", "toggle"]), i().describe("\u53D8\u91CF\u952E")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u5E03\u5C14\u7C7B\u578B"), Mt = G([D(["delta", "setTo", "setValue"]), i().describe("\u53D8\u91CF\u952E"), g().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u6570\u5B57\u7C7B\u578B"), Pt = G([D(["setTo", "setValue"]), i().describe("\u53D8\u91CF\u952E"), i().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u5B57\u7B26\u4E32\u7C7B\u578B"), Et = G([D(["add", "remove"]), i().describe("\u53D8\u91CF\u952E"), i().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u6807\u7B7E\u7C7B\u578B");
J([Tt, Mt, Pt, Et]).describe("\u53D8\u91CF\u64CD\u4F5C\u5143\u7EC4");
D(["isTrue", "isFalse", "eq", "is", "neq", "isNot", "gt", "gte", "lt", "lte", "includes", "notIncludes", "has", "hasAny", "hasAll", "llmJudge", "and", "or", "all", "any", "some"]);
const Bt = G([D(["isTrue", "isFalse"]), i().describe("\u53D8\u91CF\u952E")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5E03\u5C14\u7C7B\u578B"), Ot = G([D(["eq", "neq", "is", "isNot"]), i().describe("\u53D8\u91CF\u952E"), J([i(), g(), j()]).describe("\u6BD4\u8F83\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5B57\u9762\u91CF\u7C7B\u578B"), Lt = G([D(["gt", "gte", "lt", "lte"]), i().describe("\u53D8\u91CF\u952E"), g().describe("\u6BD4\u8F83\u503C")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u6570\u5B57\u7C7B\u578B"), $t = G([D(["includes", "notIncludes", "has", "hasAny", "hasAll", "llmJudge"]), i().describe("\u53D8\u91CF\u952E"), J([i(), g(), j()]).describe("\u53C2\u8003\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5185\u5BB9\u7C7B\u578B(\u5B57\u7B26\u4E32\u548C\u6807\u7B7E)"), Rt = G([D(["hasAny", "hasAll"]), i().describe("\u53D8\u91CF\u952E"), J([i(), g(), j()]).array().describe("\u53C2\u8003\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5185\u5BB9\u6570\u7EC4\u7C7B\u578B(\u5B57\u7B26\u4E32\u548C\u6807\u7B7E)"), Ee = J([Bt, Ot, Lt, $t, Rt]).describe("\u6761\u4EF6\u5143\u7EC4"), ds = G([D(["and", "or", "all", "any", "some"]), S(Ee).describe("\u5B50\u6761\u4EF6\u5143\u7EC4\u6570\u7EC4")]).describe("\u7B80\u5355\u590D\u5408\u6761\u4EF6\u5143\u7EC4"), Ft = G([D(["and", "or", "all", "any", "some"]), J([Ee, ds]).array().describe("\u5B50\u6761\u4EF6\u5143\u7EC4\u6570\u7EC4")]).describe("\u590D\u6742\u590D\u5408\u6761\u4EF6\u5143\u7EC4"), Ht = J([Ee, ds, Ft]).describe("\u6761\u4EF6\u5143\u7EC4\uFF08\u652F\u6301\u5355\u4E00\u6761\u4EF6\u548C\u590D\u5408\u6761\u4EF6\uFF09"), Fe = y({ key: i().describe("\u68C0\u67E5\u9879\u952E"), description: i().describe("\u68C0\u67E5\u9879\u63CF\u8FF0"), condition: Ht.describe("\u7ED3\u6784\u5316\u8FBE\u6210\u6761\u4EF6") }), He = y({ key: i().describe("\u68C0\u67E5\u9879\u952E"), isCompleted: j().describe("\u662F\u5426\u5DF2\u5B8C\u6210") }), Gt = D(["dm_intro", "character_intro", "player_input", "dm_eval_changes", "dm_narrate_changes", "failure_check", "goal_check", "ending_check", "character_response"]), ms = y({ characterId: i().describe("\u8981\u6311\u6218\u7684\u89D2\u8272\u7684ID"), roleTaskPrompt: i().describe("\u89D2\u8272\u4EFB\u52A1\u63D0\u793A\u8BCD\uFF0C\u7528\u6765\u5F15\u5BFC\u89D2\u8272\u5728\u8BE5\u6311\u6218\u4E2D\u7684\u884C\u4E3A\u65B9\u5F0F"), userGuidance: i().describe("\u7528\u6237\u5F15\u5BFC\u8BED\uFF0C\u7528\u6765\u5F15\u5BFC\u7528\u6237\u5728\u8BE5\u6311\u6218\u4E2D\u7684\u884C\u4E3A"), variables: F(i(), ls).describe("\u53D8\u91CF\u8BB0\u5F55"), goals: S(Fe.extend({ characterPrompt: i().describe("\u8FBE\u6210\u6B64\u76EE\u6807\u540E\uFF0C\u7ED9\u89D2\u8272\u589E\u52A0\u7684\u63D0\u793A\u8BCD"), userInfo: i().describe("\u8FBE\u6210\u6B64\u76EE\u6807\u540E\uFF0C\u7ED9\u7528\u6237\u7684\u63D0\u793A\u4FE1\u606F") })).describe("\u76EE\u6807\u5217\u8868"), failureChecks: S(Fe.extend({ characterPrompt: i().describe("\u89E6\u53D1\u6B64\u5931\u8D25\u540E\uFF0C\u7ED9\u89D2\u8272\u589E\u52A0\u7684\u63D0\u793A\u8BCD"), userInfo: i().describe("\u89E6\u53D1\u6B64\u5931\u8D25\u540E\uFF0C\u7ED9\u7528\u6237\u7684\u63D0\u793A\u4FE1\u606F") })).describe("\u5931\u8D25\u6761\u4EF6\u5217\u8868\uFF0C\u4E0E\u76EE\u6807\u540C\u6784\uFF0C\u7528\u6765\u68C0\u67E5\u6311\u6218\u662F\u5426\u5931\u8D25") }), Ut = y({ currentPhase: Gt.describe("\u5F53\u524D\u9636\u6BB5\u540D\u79F0"), variableStates: At.describe("\u6A21\u5F0F\u53D8\u91CF\u5B57\u5178"), goalStates: He.array().describe("\u76EE\u6807\u69FD\u4F4D\u6570\u7EC4"), failureStates: He.array().describe("\u5931\u8D25\u68C0\u67E5\u69FD\u4F4D\u6570\u7EC4") });
wt.extend({ mode: w("challenge").describe("\u6A21\u5F0F"), modeConfig: ms.describe("\u6311\u6218\u6A21\u5F0F\u914D\u7F6E"), modeState: Ut.describe("\u6311\u6218\u6A21\u5F0F\u72B6\u6001") });
const zt = ms.extend({ id: i().describe("\u6311\u6218\u5361ID"), name: i().describe("\u6311\u6218\u5361\u540D\u79F0"), description: i().describe("\u6311\u6218\u5361\u63CF\u8FF0"), tags: S(i()).optional().describe("\u6807\u7B7E\u6570\u7EC4"), createdAt: g().optional().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: g().optional().describe("\u66F4\u65B0\u65F6\u95F4") }), Vt = Pe, Jt = zt, Xt = y({ id: i().describe("\u4F1A\u8BDDID"), title: i().optional().describe("\u4F1A\u8BDD\u6807\u9898"), contextId: i().optional().nullable().describe("\u5173\u8054\u7684\u4E0A\u4E0B\u6587\u7684ID"), mode: i().describe("\u6A21\u5F0F"), modeConfig: F(i(), H()).describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: F(i(), H()).describe("\u6A21\u5F0F\u4E13\u7528\u72B6\u6001"), characterId: i().optional().describe("\u89D2\u8272ID"), challengeId: i().optional().describe("\u6311\u6218ID"), createdAt: g().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: g().describe("\u66F4\u65B0\u65F6\u95F4"), isActive: j().optional().describe("\u662F\u5426\u6D3B\u8DC3") }), qt = T, se = { MASTER_DB_NAME: "silly-tavern-master-db", SESSION_DB_PREFIX: "silly-tavern-session-" };
function Kt(s) {
  return typeof s == "object" && s !== null && ws(s) !== void 0;
}
function be(s) {
  if (Kt(s)) return _s(s);
  if (Array.isArray(s)) return s.map((t) => be(t));
  if (s && typeof s == "object") {
    const t = {};
    for (const [a, r] of Object.entries(s)) t[a] = be(r);
    return t;
  }
  return s;
}
function Wt(s) {
  const t = `${se.SESSION_DB_PREFIX}${s}`, a = new fe(t);
  return a.version(2).stores({ contextItems: "id, type, timestamp, idx" }), { contextItems: oe(Ne({ id: "contextItems", schema: qt, getKey: (r) => r.id || "", dbName: t })), dexieInstance: a };
}
const ye = /* @__PURE__ */ new Map(), hs = typeof BroadcastChannel < "u" ? new BroadcastChannel("silly-tavern-session-db") : null;
hs == null ? void 0 : hs.addEventListener("message", (s) => {
  const t = s.data;
  (t == null ? void 0 : t.type) === "close" && t.sessionId && ce(t.sessionId);
});
class xs {
  constructor(t) {
    __publicField(this, "sessionId");
    __publicField(this, "database");
    this.sessionId = t, this.database = this.initDatabase();
  }
  initDatabase() {
    let t = ye.get(this.sessionId);
    return t || (t = Wt(this.sessionId), ye.set(this.sessionId, t)), t;
  }
  async getContextItems() {
    return (await this.database.contextItems.utils.getTable().toArray()).sort((r, o) => {
      const l = r.idx ?? 0, m = o.idx ?? 0;
      if (l !== m) return l - m;
      const h = r.orderRef ?? 0, c = o.orderRef ?? 0;
      if (h !== c) return h - c;
      const d = r.timestamp ?? 0, n = o.timestamp ?? 0;
      return d !== n ? d - n : (r.id || "").localeCompare(o.id || "");
    });
  }
  get contextItemsCollectionInstance() {
    return this.database.contextItems;
  }
  async addContextItem(t) {
    return await this.database.contextItems.utils.getTable().put(be(t));
  }
  async addContextItems(t) {
    return await this.database.contextItems.utils.getTable().bulkPut(be(t));
  }
  async deleteContextItem(t) {
    return await this.database.contextItems.utils.getTable().delete(t);
  }
}
function ce(s) {
  const t = `${se.SESSION_DB_PREFIX}${s}`, a = ye.get(s);
  if (a) {
    try {
      a.dexieInstance.close();
    } catch (r) {
      console.warn(`Failed to close database ${t} before deletion:`, r);
    }
    ye.delete(s);
  }
}
function us(s) {
  hs == null ? void 0 : hs.postMessage({ type: "close", sessionId: s });
}
async function ps(s) {
  const t = `${se.SESSION_DB_PREFIX}${s}`;
  us(s), ce(s);
  try {
    await fe.delete(t);
  } catch (a) {
    if (a instanceof Error && a.name === "DatabaseClosedError") {
      console.warn(`Database ${t} is still in use, retrying deletion...`), await new Promise((r) => setTimeout(r, 500));
      try {
        await fe.delete(t);
      } catch (r) {
        throw console.error(`Failed to delete database ${t} after retry:`, r), r;
      }
    } else throw a;
  }
}
const Qt = Object.freeze(Object.defineProperty({ __proto__: null, SessionDB: xs, broadcastCloseSessionDatabase: us, closeSessionDatabase: ce, deleteSessionDatabase: ps }, Symbol.toStringTag, { value: "Module" })), Yt = new fe(se.MASTER_DB_NAME);
Yt.version(1).stores({ characters: "id, name, creator, createdAt, updatedAt", challenges: "id, name, createdAt, updatedAt", sessions: "id, characterId, challengeId, mode, updatedAt" });
const Be = oe(Ne({ id: "characters", schema: Vt, getKey: (s) => s.id, dbName: se.MASTER_DB_NAME })), pe = oe(Ne({ id: "challenges", schema: Jt, getKey: (s) => s.id, dbName: se.MASTER_DB_NAME })), Oe = oe(Ne({ id: "sessions", schema: Xt, getKey: (s) => s.id, dbName: se.MASTER_DB_NAME })), z = { characters: { getTable: () => Be.utils.getTable(), add: async (s) => (await z.characters.getTable()).add(s), put: async (s) => (await z.characters.getTable()).put(s), delete: async (s) => (await z.characters.getTable()).delete(s) }, challenges: { getTable: () => pe.utils.getTable(), add: async (s) => (await z.challenges.getTable()).add(s), put: async (s) => (await z.challenges.getTable()).put(s), delete: async (s) => (await z.challenges.getTable()).delete(s), find: async (s) => (await z.challenges.getTable()).get(s), findLive: (s) => oe(ht({ id: `find-challenge-${s || "none"}`, startSync: true, query: (t) => s ? t.from({ challenge: pe }).where(({ challenge: a }) => xt(a.id, s)).select(({ challenge: a }) => a) : t.from({ challenge: pe }).where(() => false) })) }, sessions: { getTable: () => Oe.utils.getTable(), add: async (s) => (await z.sessions.getTable()).add(s), put: async (s) => (await z.sessions.getTable()).put(s), delete: async (s) => {
  await (await z.sessions.getTable()).delete(s), await ps(s);
} } };
function Fa(s) {
  const [t, a] = f.useState(""), [r, o] = f.useState([]), l = f.useMemo(() => {
    const d = /* @__PURE__ */ new Set();
    for (const n of s.items) for (const u of s.getTags(n)) d.add(u);
    return Array.from(d).sort();
  }, [s.items, s.getTags]), m = f.useMemo(() => s.items.filter((d) => {
    const n = s.getSearchableContent(d).toLowerCase().includes(t.toLowerCase()), u = s.getTags(d), x = r.length === 0 || r.every((N) => u.includes(N));
    return n && x;
  }), [s.items, t, r, s.getSearchableContent, s.getTags]), h = (d) => {
    o((n) => n.includes(d) ? n.filter((u) => u !== d) : [...n, d]);
  }, c = f.useMemo(() => m.map((d) => ({ ...d, id: s.getId(d) })), [m, s.getId]);
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between", children: [s.title && e.jsx("div", { className: "space-y-1", children: e.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: s.title }) }), e.jsxs("div", { className: "flex items-center gap-3 w-full md:w-auto", children: [s.actions, e.jsxs("div", { className: "relative flex-1 md:w-72", children: [e.jsx(ne, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), e.jsx($, { type: "search", placeholder: s.placeholder || "\u641C\u7D22...", className: "pl-9", value: t, onChange: (d) => a(d.target.value) })] })] })] }), e.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [e.jsxs("div", { className: "flex items-center gap-1.5 mr-2 text-sm text-muted-foreground", children: [e.jsx(Xs, { className: "w-4 h-4" }), "\u6807\u7B7E\u8FC7\u6EE4:"] }), l.map((d) => e.jsx(Q, { variant: r.includes(d) ? "default" : "outline", className: "cursor-pointer", onClick: () => h(d), children: d }, d)), r.length > 0 && e.jsx(I, { variant: "ghost", size: "sm", onClick: () => o([]), className: "h-7 px-2 text-xs", type: "button", children: "\u6E05\u9664" })] }), c.length > 0 ? e.jsx(Ls, { items: c, renderItem: (d) => s.renderCard(d), gap: 16, animate: false, scaleOnHover: false }) : e.jsx("div", { className: "py-20 text-center text-muted-foreground", children: "\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u5361\u7247\u3002" })] });
}
const Ha = (s) => {
  var _a2;
  const t = !!s.character.imageBase64, a = !!s.character.avatar, r = t || !t && a;
  return e.jsxs(P, { className: `relative mx-auto w-full max-w-sm ${r ? "pt-0" : ""} hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col`, onClick: () => {
    var _a3;
    return (_a3 = s.onClick) == null ? void 0 : _a3.call(s, s.character);
  }, children: [r && e.jsxs("div", { className: "relative", children: [t ? e.jsx("img", { src: s.character.imageBase64, alt: `${s.character.name} \u89D2\u8272\u56FE\u7247`, className: "relative z-20 w-full object-contain" }) : e.jsx("div", { className: "relative z-20 w-full aspect-square bg-muted flex items-center justify-center", children: e.jsx("img", { src: s.character.avatar, alt: `${s.character.name} \u5934\u50CF`, className: "w-[66%] h-[66%] object-cover" }) }), e.jsx("div", { className: "z-21 absolute bottom-0 left-0 right-0 p-4", children: e.jsxs("div", { className: "flex items-center gap-3", children: [a && e.jsx("div", { className: "bg-foreground/90 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-black/90 shrink-0", children: e.jsx("img", { src: s.character.avatar, alt: `${s.character.name} \u5934\u50CF`, className: "w-full h-full object-cover" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("div", { className: "text-white font-bold text-md truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.96)]", children: s.character.name }), e.jsx("div", { className: "text-white/80 font-medium text-sm truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.968)]", children: (s.character.creator ? `by ${s.character.creator}` : void 0) ?? s.character.nickname })] })] }) })] }), e.jsx(O, { className: r ? "hidden" : "", children: e.jsx("div", { className: "flex justify-between items-start", children: e.jsxs("div", { className: "flex items-center gap-3", children: [s.character.avatar && e.jsx("div", { className: "bg-muted w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border shrink-0", children: e.jsx("img", { src: s.character.avatar, alt: `${s.character.name} \u5934\u50CF`, className: "w-full h-full object-cover" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx(L, { className: "text-lg truncate", children: s.character.name }), e.jsx(Y, { className: "truncate", children: (s.character.creator ? `by ${s.character.creator}` : void 0) ?? s.character.nickname })] })] }) }) }), e.jsxs(E, { className: "grow space-y-2", children: [e.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3", children: s.character.description }), ((_a2 = s.character.tags) == null ? void 0 : _a2.length) > 0 && e.jsx("div", { className: "flex flex-wrap gap-1", children: s.character.tags.slice(0, 5).map((o, l) => e.jsx(Q, { variant: "secondary", className: "text-[10px] px-1.5 py-0", children: o }, `[${l}]${o}`)) })] })] });
};
function Zt(s) {
  return { keys: s.keys || [], content: s.content || "", extensions: s.extensions || {}, enabled: s.enabled !== void 0 ? s.enabled : true, insertion_order: s.insertion_order !== void 0 ? s.insertion_order : 0, case_sensitive: s.case_sensitive !== void 0 ? s.case_sensitive : false, use_regex: s.use_regex !== void 0 ? s.use_regex : false, constant: s.constant !== void 0 ? s.constant : false, name: s.name || void 0, priority: s.priority || void 0, id: s.id || void 0, comment: s.comment || void 0, selective: s.selective !== void 0 ? s.selective : false, secondary_keys: s.secondary_keys || void 0, position: s.position || void 0 };
}
function gs(s) {
  if (s) return { name: s.name || void 0, description: s.description || void 0, scan_depth: s.scan_depth || void 0, token_budget: s.token_budget || void 0, recursive_scanning: s.recursive_scanning !== void 0 ? s.recursive_scanning : false, extensions: s.extensions || {}, entries: (s.entries || []).map(Zt) };
}
function ie(s) {
  const t = ae.parse({ ...s, creator_notes: "", system_prompt: "", post_history_instructions: "", alternate_greetings: [], character_book: void 0, tags: [], creator: "", character_version: "", extensions: {}, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return Me.parse({ spec: "chara_card_v3", spec_version: "3.0", data: t });
}
function fs(s) {
  const t = { ...s.data };
  t.character_book && (t.character_book = gs(t.character_book));
  const a = ae.parse({ ...t, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return Me.parse({ spec: "chara_card_v3", spec_version: "3.0", data: a });
}
function V(s, t) {
  var _a2, _b, _c, _d;
  const a = { ...s.data };
  a.character_book ? a.character_book = gs(a.character_book) : a.character_book = void 0;
  const r = ae.parse(a), o = ((_a2 = r.extensions) == null ? void 0 : _a2.avatar) || ((_b = r.extensions) == null ? void 0 : _b.image) || void 0;
  let l = t;
  if (!l) {
    if (r.assets) {
      const m = r.assets.find((h) => h.type === "icon" && h.name === "main");
      (m == null ? void 0 : m.uri.startsWith("data:")) && (l = m.uri);
    }
    if (!l && r.extensions) {
      const m = r.extensions.imageBase64 || r.extensions.image;
      m && typeof m == "string" && m.startsWith("data:") && (l = m);
    }
  }
  return Pe.parse({ ...r, id: crypto.randomUUID(), avatar: o, imageBase64: l, createdAt: r.creation_date || ((_c = r.extensions) == null ? void 0 : _c.create_date) || Date.now(), updatedAt: r.modification_date || ((_d = r.extensions) == null ? void 0 : _d.update_date) || Date.now() });
}
function bs(s) {
  const t = { ...s }, a = ["id", "createdAt", "updatedAt", "avatar", "imageBase64"];
  for (const m of a) delete t[m];
  const r = { ...s.extensions || {} };
  s.avatar && (r.avatar = s.avatar), s.imageBase64 && (r.imageBase64 = s.imageBase64);
  let o = t.assets || [];
  if (s.imageBase64) {
    const m = { type: "icon", uri: s.imageBase64, name: "main", ext: "png" }, h = o.findIndex((c) => c.type === "icon" && c.name === "main");
    h >= 0 ? o[h] = m : o = [m, ...o];
  }
  const l = ae.parse({ ...t, extensions: r, assets: o, creation_date: s.createdAt, modification_date: s.updatedAt });
  return Me.parse({ spec: "chara_card_v3", spec_version: "3.0", data: l });
}
function ea(s) {
  const t = JSON.parse(s);
  if (typeof t == "object" && t !== null && "id" in t && "name" in t && "first_mes" in t) return Pe.parse(t);
  if (typeof t == "object" && t !== null && "spec" in t) {
    const a = t.spec;
    if (a === "chara_card_v3") return V(t);
    if (a === "chara_card_v2") return V(fs(t));
  }
  try {
    const a = is.parse(t);
    return V(ie(a));
  } catch {
    if (typeof t == "object" && t !== null && "name" in t) {
      const a = t;
      return V(ie({ name: a.name || "", description: a.description || "", personality: a.personality || "", scenario: a.scenario || "", first_mes: a.first_mes || "", mes_example: a.mes_example || "" }));
    }
    throw new Error("\u65E0\u6CD5\u89E3\u6790JSON\u4E2D\u7684\u89D2\u8272\u6570\u636E");
  }
}
async function sa(s) {
  const t = await s.arrayBuffer(), a = as(new Uint8Array(t)), r = a.find((h) => h.name === "tEXt" && W.decode(h.data).keyword === "chara"), o = a.find((h) => h.name === "tEXt" && W.decode(h.data).keyword === "ccv3"), l = new Blob([t], { type: "image/png" }), m = await new Promise((h) => {
    const c = new FileReader();
    c.onloadend = () => h(c.result), c.readAsDataURL(l);
  });
  if (o) {
    const h = W.decode(o.data), c = JSON.parse(Ue(h.text));
    return typeof c == "object" && c !== null && "spec" in c && c.spec === "chara_card_v3" ? V(c, m) : V(ie(c), m);
  }
  if (r) {
    const h = W.decode(r.data), c = JSON.parse(Ue(h.text));
    if (typeof c == "object" && c !== null && "spec" in c) {
      const d = c.spec;
      if (d === "chara_card_v3") return V(c, m);
      if (d === "chara_card_v2") return V(fs(c), m);
    }
    try {
      const d = is.parse(c);
      return V(ie(d), m);
    } catch {
      if (typeof c == "object" && c !== null && "name" in c) {
        const d = c;
        return V(ie({ name: d.name || "", description: d.description || "", personality: d.personality || "", scenario: d.scenario || "", first_mes: d.first_mes || "", mes_example: d.mes_example || "" }), m);
      }
      throw new Error("\u65E0\u6CD5\u89E3\u6790\u56FE\u7247\u4E2D\u7684\u89D2\u8272\u6570\u636E");
    }
  }
  throw new Error("\u672A\u5728\u56FE\u7247\u4E2D\u627E\u5230\u89D2\u8272\u6570\u636E (tEXt \u5757\u7F3A\u5931)");
}
function Ga(s) {
  if (!s.imageBase64) throw new Error("\u89D2\u8272\u6CA1\u6709\u56FE\u50CF\u6570\u636E\uFF0C\u65E0\u6CD5\u5BFC\u51FA\u4E3A PNG \u89D2\u8272\u5361");
  const t = s.imageBase64.split(",")[1], a = atob(t), r = a.length, o = new Uint8Array(r);
  for (let M = 0; M < r; M++) o[M] = a.charCodeAt(M);
  const l = as(o), m = bs(s), h = Ge(JSON.stringify(m)), c = l.filter((M) => !(M.name === "tEXt" && (W.decode(M.data).keyword === "chara" || W.decode(M.data).keyword === "ccv3"))), d = W.encode("ccv3", h), n = { spec: "chara_card_v2", spec_version: "2.0.0", data: m.data }, u = Ge(JSON.stringify(n)), x = W.encode("chara", u), N = c.findIndex((M) => M.name === "IEND");
  N !== -1 ? c.splice(N, 0, x, d) : c.push(x, d);
  const X = ut(c);
  return new Blob([X], { type: "image/png" });
}
const ta = /%([0-9A-F]{2})/g;
function Ge(s) {
  return btoa(encodeURIComponent(s).replace(ta, function(a, r) {
    return String.fromCharCode(Number.parseInt(r, 16));
  }));
}
function Ue(s) {
  return decodeURIComponent(atob(s).split("").map((t) => `%${`00${t.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
}
function ys(s, t = {}) {
  var _a2;
  const { includeImageBase64: a = false } = t, r = bs(s);
  if (a) return JSON.stringify(r, null, 2);
  {
    const o = { ...r, data: { ...r.data, assets: ((_a2 = r.data.assets) == null ? void 0 : _a2.map((l) => ({ ...l, uri: l.uri.startsWith("data:") ? "" : l.uri }))) || [] } };
    return JSON.stringify(o, null, 2);
  }
}
const Ua = (s) => {
  const [t, a] = f.useState(null), [r, o] = f.useState(false), [l, m] = f.useState(null), [h, c] = f.useState(false), d = f.useId(), n = f.useRef(null), u = (C) => {
    var _a2;
    const b = (_a2 = C.target.files) == null ? void 0 : _a2[0];
    b && (b.type === "image/png" || b.type === "application/json" || b.name.endsWith(".json") ? (a(b), m(null)) : (m("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), a(null)));
  }, x = (C) => {
    C.preventDefault(), C.stopPropagation(), c(true);
  }, N = (C) => {
    C.preventDefault(), C.stopPropagation(), c(false);
  }, X = (C) => {
    C.preventDefault(), C.stopPropagation(), c(false);
    const b = C.dataTransfer.files;
    if (b.length > 0) {
      const A = b[0];
      A.type === "image/png" || A.type === "application/json" || A.name.endsWith(".json") ? (a(A), m(null)) : (m("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), a(null));
    }
  }, M = async () => {
    if (t) {
      o(true), m(null);
      try {
        if (t.type === "image/png") {
          const C = await sa(t);
          s.onImport(C);
        } else {
          const C = await t.text(), b = ea(C);
          s.onImport(b);
        }
        s.onOpenChange(false), a(null), c(false);
      } catch (C) {
        console.error("Import error:", C), m(C instanceof Error ? C.message : "\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F");
      } finally {
        o(false);
      }
    }
  };
  return e.jsx(ke, { open: s.open, onOpenChange: s.onOpenChange, children: e.jsxs(Se, { className: "sm:max-w-md max-h-[80vh] overflow-y-auto", children: [e.jsxs(De, { children: [e.jsx(ve, { children: "\u5BFC\u5165\u89D2\u8272/\u6311\u6218\u5361" }), e.jsx(Xe, { children: "\u652F\u6301 SillyTavern \u683C\u5F0F\u7684 PNG \u89D2\u8272\u5361\u6216 JSON \u6570\u636E\u3002" })] }), e.jsxs("div", { className: "space-y-4 py-4", children: [e.jsxs("div", { className: `border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer ${h ? "border-primary bg-primary/10 scale-105" : t ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:border-primary/50"}`, onDragOver: x, onDragLeave: N, onDrop: X, onClick: () => {
    var _a2;
    return (_a2 = n.current) == null ? void 0 : _a2.click();
  }, children: [e.jsx("div", { className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center", children: (t == null ? void 0 : t.type) === "application/json" ? e.jsx(Ze, { className: "w-6 h-6 text-primary" }) : e.jsx(we, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-center", children: [e.jsx("p", { className: "text-sm font-medium", children: h ? "\u91CA\u653E\u6587\u4EF6\u4EE5\u4E0A\u4F20" : t ? t.name : "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PNG \u6216 JSON (\u6700\u5927 5MB)" })] })] }), e.jsx($, { ref: n, type: "file", accept: "image/png,.json", className: "hidden", onChange: u }), l && e.jsxs($s, { variant: "destructive", children: [e.jsx(qs, { className: "h-4 w-4" }), e.jsx(Rs, { children: "\u9519\u8BEF" }), e.jsx(Fs, { children: l })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: d, className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "\u901A\u8FC7 URL \u5BFC\u5165" }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx($, { id: d, placeholder: "https://...", className: "rounded-lg" }), e.jsx(I, { variant: "secondary", className: "shrink-0 rounded-lg", type: "button", children: "\u6293\u53D6" })] })] })] }), e.jsxs(Hs, { children: [e.jsx(I, { variant: "outline", onClick: () => s.onOpenChange(false), type: "button", className: "rounded-lg", children: "\u53D6\u6D88" }), e.jsx(I, { disabled: !t || r, onClick: M, type: "button", className: "rounded-lg min-w-20", children: r ? "\u5904\u7406\u4E2D..." : "\u5F00\u59CB\u5BFC\u5165" })] })] }) });
};
function za({ characters: s, trigger: t }) {
  const [a, r] = f.useState(false), [o, l] = f.useState(false), m = f.useId(), h = () => {
    if (s.length === 0) {
      Z.error("\u6CA1\u6709\u89D2\u8272\u53EF\u5BFC\u51FA");
      return;
    }
    try {
      const c = s.map((x) => {
        const N = ys(x, { includeImageBase64: o });
        return JSON.parse(N);
      }), d = new Blob([JSON.stringify(c, null, 2)], { type: "application/json" }), n = URL.createObjectURL(d), u = document.createElement("a");
      u.href = n, u.download = `characters-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, document.body.appendChild(u), u.click(), document.body.removeChild(u), URL.revokeObjectURL(n), Z.success(`\u6210\u529F\u5BFC\u51FA ${s.length} \u4E2A\u89D2\u8272`), r(false);
    } catch (c) {
      Z.error("\u5BFC\u51FA\u5931\u8D25"), console.error("Export error:", c);
    }
  };
  return e.jsxs(ke, { open: a, onOpenChange: r, children: [e.jsx(qe, { asChild: true, children: t || e.jsxs(I, { variant: "outline", size: "sm", className: "flex items-center gap-2", type: "button", children: [e.jsx(Ks, { className: "w-4 h-4" }), "\u6279\u91CF\u5BFC\u51FA"] }) }), e.jsxs(Se, { className: "sm:max-w-md", children: [e.jsx(De, { children: e.jsx(ve, { children: "\u5BFC\u51FA\u89D2\u8272" }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u5C06\u5BFC\u51FA ", s.length, " \u4E2A\u89D2\u8272\u4E3A JSON \u6587\u4EF6\u3002"] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Ke, { id: `${m}-include-image`, checked: o, onCheckedChange: (c) => l(c === true) }), e.jsx(k, { htmlFor: `${m}-include-image`, className: "text-sm", children: "\u5305\u542B Base64 \u56FE\u50CF\u6570\u636E" })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: o ? "\u6587\u4EF6\u5C06\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5927\u4F46\u5B8C\u6574\u3002" : "\u6587\u4EF6\u4E0D\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5C0F\u4F46\u9700\u8981\u5355\u72EC\u5904\u7406\u56FE\u50CF\u3002" })] }), e.jsxs("div", { className: "flex justify-end gap-2", children: [e.jsx(I, { variant: "outline", onClick: () => r(false), children: "\u53D6\u6D88" }), e.jsx(I, { onClick: h, children: "\u5BFC\u51FA" })] })] })] });
}
const aa = { id: "preset-char-001", name: "\u6797\u6653\u8587", description: "\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\u3002\u5979\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\uFF0C\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u6E29\u67D4\u6CBB\u6108\u7CFB\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u60C5\u611F\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u540D\u53EB\u6797\u6653\u8587\u3002\u4F60\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\uFF0C\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u4F60\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\uFF0C\u6027\u683C\u6E29\u548C\uFF0C\u5BCC\u6709\u540C\u60C5\u5FC3\u3002\u4F60\u8BF4\u8BDD\u6E29\u67D4\uFF0C\u603B\u662F\u8003\u8651\u522B\u4EBA\u7684\u611F\u53D7\u3002", post_history_instructions: "\u4FDD\u6301\u6E29\u67D4\u5584\u826F\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u540C\u60C5\u5FC3\u548C\u5E2E\u52A9\u4ED6\u4EBA\u7684\u610F\u613F\u3002", personality: "\u6E29\u67D4\u3001\u5584\u826F\u3001\u5BCC\u6709\u540C\u60C5\u5FC3\u3001\u4E50\u4E8E\u52A9\u4EBA\u3001\u795E\u79D8", mes_example: "\u6211\u770B\u5230\u4F60\u53D7\u4F24\u4E86\uFF0C\u8BA9\u6211\u5E2E\u4F60\u6CBB\u7597\u5427\u3002\u6211\u8FD9\u91CC\u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u8349\u836F\uFF0C\u5E94\u8BE5\u80FD\u5E2E\u5230\u4F60\u3002", first_mes: "\u4F60\u597D\uFF0C\u6211\u662F\u6797\u6653\u8587\uFF0C\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u8349\u836F\u94FA", character_version: "1.0", tags: ["\u6CBB\u6108", "\u6E29\u67D4", "\u5584\u826F", "\u8349\u836F\u5E08"], createdAt: 1706e9, updatedAt: 1706e9 }, ra = { id: "preset-char-002", name: "\u5F20\u94C1\u67F1", description: "\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\u3002\u4ED6\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\uFF0C\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u52C7\u6562\u529B\u91CF\u578B\u7684\u7537\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u6218\u6597\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u540D\u53EB\u5F20\u94C1\u67F1\u3002\u4F60\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\uFF0C\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\u3002\u4F60\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\uFF0C\u6027\u683C\u521A\u6B63\u4E0D\u963F\u3002\u4F60\u8BF4\u8BDD\u76F4\u723D\uFF0C\u603B\u662F\u5C55\u73B0\u52C7\u6C14\u548C\u529B\u91CF\u3002", post_history_instructions: "\u4FDD\u6301\u52C7\u6562\u521A\u6B63\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u4FDD\u62A4\u4ED6\u4EBA\u7684\u52C7\u6C14\u3002", personality: "\u52C7\u6562\u3001\u521A\u6B63\u3001\u529B\u91CF\u5F3A\u5927\u3001\u4FDD\u62A4\u5F31\u8005\u3001\u76F4\u723D", mes_example: "\u522B\u6015\uFF0C\u6709\u6211\u5728\uFF01\u6211\u4F1A\u4FDD\u62A4\u4F60\u4EEC\u7684\u3002\u8FD9\u4E2A\u602A\u7269\uFF0C\u6211\u6765\u5BF9\u4ED8\uFF01", first_mes: "\u563F\uFF0C\u670B\u53CB\uFF01\u6211\u662F\u5F20\u94C1\u67F1\uFF0C\u5C0F\u9547\u7684\u94C1\u5320\u3002\u9700\u8981\u5E2E\u5FD9\u953B\u9020\u6B66\u5668\u5417\uFF1F\u8FD8\u662F\u6709\u4EC0\u4E48\u9EBB\u70E6\u4E8B\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u94C1\u5320\u94FA", character_version: "1.0", tags: ["\u6218\u6597", "\u52C7\u6562", "\u94C1\u5320", "\u5B88\u62A4\u8005"], createdAt: 1706e9, updatedAt: 1706e9 }, ia = { id: "preset-char-003", name: "\u674E\u667A\u6167", description: "\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\u3002\u5979\u662F\u5C0F\u9547\u7684\u667A\u8005\uFF0C\u603B\u662F\u89E3\u7B54\u7591\u60D1\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u667A\u6167\u77E5\u8BC6\u578B\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u89E3\u8C1C\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u540D\u53EB\u674E\u667A\u6167\u3002\u4F60\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\uFF0C\u662F\u5C0F\u9547\u7684\u667A\u8005\u3002\u4F60\u603B\u662F\u89E3\u7B54\u7591\u60D1\uFF0C\u6027\u683C\u777F\u667A\u3002\u4F60\u8BF4\u8BDD\u6E29\u548C\uFF0C\u603B\u662F\u5C55\u73B0\u667A\u6167\u548C\u8010\u5FC3\u3002", post_history_instructions: "\u4FDD\u6301\u777F\u667A\u6E29\u548C\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u89E3\u7B54\u7591\u60D1\u7684\u8010\u5FC3\u3002", personality: "\u806A\u660E\u3001\u777F\u667A\u3001\u77E5\u8BC6\u6E0A\u535A\u3001\u6E29\u548C\u3001\u8010\u5FC3", mes_example: "\u8BA9\u6211\u60F3\u60F3\u8FD9\u4E2A\u95EE\u9898...\u6839\u636E\u53E4\u7C4D\u8BB0\u8F7D\uFF0C\u8FD9\u5E94\u8BE5\u662F\u8FD9\u6837\u7684\u3002\u8BA9\u6211\u4E3A\u4F60\u8BE6\u7EC6\u89E3\u91CA\u3002", first_mes: "\u6B22\u8FCE\u6765\u5230\u6211\u7684\u4E66\u623F\uFF0C\u65C5\u884C\u8005\u3002\u6211\u662F\u674E\u667A\u6167\uFF0C\u5C0F\u9547\u7684\u5B66\u8005\u3002\u6709\u4EC0\u4E48\u77E5\u8BC6\u4E0A\u7684\u7591\u95EE\u9700\u8981\u89E3\u7B54\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u4E66\u623F", character_version: "1.0", tags: ["\u667A\u6167", "\u5B66\u8005", "\u77E5\u8BC6", "\u6E29\u548C"], createdAt: 1706e9, updatedAt: 1706e9 }, Va = [aa, ra, ia], Ja = (s) => {
  var _a2;
  return e.jsxs(P, { className: "hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col", onClick: () => {
    var _a3;
    return (_a3 = s.onClick) == null ? void 0 : _a3.call(s, s.challenge);
  }, children: [e.jsx(O, { className: "pb-2", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center", children: e.jsx(Ws, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(L, { className: "text-lg", children: s.challenge.name }), e.jsx(Y, { className: "line-clamp-1", children: (_a2 = s.challenge.tags) == null ? void 0 : _a2.join(", ") })] })] }) }), e.jsxs(E, { className: "grow", children: [e.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3 mb-4", children: s.challenge.description }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "text-xs font-medium flex items-center gap-1", children: [e.jsx(Qs, { className: "w-3 h-3" }), "\u76EE\u6807 (", s.challenge.goals.length, "):"] }), e.jsxs("ul", { className: "text-xs text-muted-foreground list-disc list-inside", children: [s.challenge.goals.slice(0, 2).map((t, a) => e.jsx("li", { className: "line-clamp-1", children: t.description }, a)), s.challenge.goals.length > 2 && e.jsxs("li", { className: "list-none", children: ["...\u53CA\u5176\u4ED6 ", s.challenge.goals.length - 2, " \u4E2A\u76EE\u6807"] })] })] })] }), e.jsx(We, { className: "pt-0 pb-4 border-t-0", children: e.jsx(I, { variant: "outline", size: "sm", className: "w-full text-xs", onClick: (t) => {
    var _a3;
    t.stopPropagation(), (_a3 = s.onStartSession) == null ? void 0 : _a3.call(s, s.challenge);
  }, type: "button", children: "\u5F00\u59CB\u6311\u6218" }) })] });
}, na = { id: "preset-challenge-001", name: "\u5C0F\u9547\u5B88\u62A4\u8005", description: "\u5C0F\u9547\u9762\u4E34\u602A\u7269\u5A01\u80C1\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u5B88\u62A4\u8005\u9700\u8981\u6536\u96C6\u6750\u6599\u953B\u9020\u6B66\u5668\uFF0C\u4FDD\u62A4\u5C0F\u9547\u5C45\u6C11\u3002\u6536\u96C6\u8DB3\u591F\u7684\u6750\u6599\u5E76\u51FB\u8D25\u602A\u7269\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684\u5B88\u62A4\u8005\uFF0C\u4E0E\u73A9\u5BB6\u4E00\u8D77\u4FDD\u62A4\u5C0F\u9547\u514D\u53D7\u602A\u7269\u5A01\u80C1\u3002\u4F60\u9700\u8981\u79EF\u6781\u53C2\u4E0E\u6536\u96C6\u6750\u6599\u3001\u953B\u9020\u6B66\u5668\u548C\u6218\u6597\u7684\u8FC7\u7A0B\uFF0C\u540C\u65F6\u4E0E\u73A9\u5BB6\u5EFA\u7ACB\u4FE1\u4EFB\u5173\u7CFB\u3002", userGuidance: "\u4F5C\u4E3A\u5B88\u62A4\u8005\uFF0C\u4F60\u9700\u8981\u4E0E{{char}}\u5408\u4F5C\u6536\u96C6\u6750\u6599\u3001\u63D0\u5347\u4FE1\u4EFB\u5EA6\u5E76\u6700\u7EC8\u51FB\u8D25\u602A\u7269\u3002\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8BDD\u3001\u884C\u52A8\u548C\u51B3\u7B56\u6765\u5F71\u54CD\u6545\u4E8B\u7684\u53D1\u5C55\u3002", variables: { trust_level: { key: "trust_level", type: "number", description: "\u5C45\u6C11\u5BF9\u5B88\u62A4\u8005\u7684\u4FE1\u4EFB\u5EA6", hidden: false, initial: 0, min: 0, max: 100, asPercent: true }, materials_collected: { key: "materials_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u953B\u9020\u6750\u6599\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 10 }, monster_defeated: { key: "monster_defeated", type: "boolean", description: "\u662F\u5426\u5DF2\u51FB\u8D25\u5A01\u80C1\u5C0F\u9547\u7684\u602A\u7269", hidden: false, initial: false } }, goals: [{ key: "collect_materials", description: "\u6536\u96C610\u4EFD\u953B\u9020\u6750\u6599", condition: ["gte", "materials_collected", 10], characterPrompt: "\u6750\u6599\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u953B\u9020\u6B66\u5668\u3001\u63D0\u5347\u6218\u6597\u6280\u80FD\uFF0C\u5E76\u51C6\u5907\u6700\u7EC8\u7684\u602A\u7269\u6218\u6597\u3002\u5C55\u73B0\u51FA\u66F4\u6709\u4FE1\u5FC3\u548C\u6218\u6597\u529B\u7684\u5B88\u62A4\u8005\u5F62\u8C61\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u6536\u96C6\u4E86\u8DB3\u591F\u7684\u6750\u6599\u3002\u73B0\u5728\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u51FB\u8D25\u602A\u7269\u4E86\u3002" }, { key: "gain_trust", description: "\u83B7\u5F97\u5C45\u6C1180%\u7684\u4FE1\u4EFB", condition: ["gte", "trust_level", 80], characterPrompt: "\u5C45\u6C11\u4FE1\u4EFB\u5EA6\u5DF2\u8FBE\u523080%\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u83B7\u5F97\u66F4\u591A\u6751\u6C11\u7684\u652F\u6301\u548C\u8D44\u6E90\uFF0C\u5C55\u73B0\u51FA\u9886\u5BFC\u8005\u7684\u98CE\u8303\uFF0C\u79EF\u6781\u5BFB\u6C42\u6751\u6C11\u7684\u5E2E\u52A9\u6765\u5BF9\u6297\u602A\u7269\u3002", userInfo: "\u5C45\u6C11\u4FE1\u4EFB\u5EA6\u8FBE\u523080%\uFF01\u8FD9\u5C06\u4E3A\u6700\u7EC8\u6218\u6597\u63D0\u4F9B\u5E2E\u52A9\u3002" }, { key: "defeat_monster", description: "\u51FB\u8D25\u5A01\u80C1\u5C0F\u9547\u7684\u602A\u7269", condition: ["isTrue", "monster_defeated"], characterPrompt: "\u602A\u7269\u5DF2\u88AB\u51FB\u8D25\uFF0C\u5C0F\u9547\u5B89\u5168\u4E86\u3002\u73B0\u5728\u4F60\u662F\u5C0F\u9547\u7684\u82F1\u96C4\uFF0C\u53EF\u4EE5\u5C55\u73B0\u51FA\u80DC\u5229\u540E\u7684\u559C\u60A6\u548C\u5BF9\u672A\u6765\u7684\u89C4\u5212\uFF0C\u8003\u8651\u5982\u4F55\u8FDB\u4E00\u6B65\u4FDD\u62A4\u5C0F\u9547\u3002", userInfo: "\u80DC\u5229\uFF01\u602A\u7269\u5DF2\u88AB\u51FB\u8D25\uFF0C\u5C0F\u9547\u5F97\u6551\u4E86\u3002" }], failureChecks: [], tags: ["\u6218\u6597", "\u6536\u96C6", "\u5B88\u62A4", "\u5192\u9669"], createdAt: 1706e9, updatedAt: 1706e9 }, ca = { id: "preset-challenge-002", name: "\u795E\u79D8\u6CBB\u6108\u8005", description: "\u5C0F\u9547\u7206\u53D1\u795E\u79D8\u75BE\u75C5\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u6CBB\u6108\u8005\u9700\u8981\u5BFB\u627E\u73CD\u7A00\u8349\u836F\uFF0C\u6CBB\u6108\u60A3\u75C5\u7684\u6751\u6C11\u3002\u901A\u8FC7\u6536\u96C6\u8349\u836F\u3001\u63D0\u9AD8\u6CBB\u6108\u6280\u80FD\u548C\u83B7\u5F97\u6751\u6C11\u4FE1\u4EFB\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u795E\u79D8\u7684\u6CBB\u6108\u8005\uFF0C\u62E5\u6709\u53E4\u8001\u7684\u8349\u836F\u77E5\u8BC6\u3002\u4F60\u9700\u8981\u4E0E\u73A9\u5BB6\u5408\u4F5C\u5BFB\u627E\u8349\u836F\u3001\u6CBB\u6108\u6751\u6C11\uFF0C\u540C\u65F6\u4FDD\u5B88\u81EA\u5DF1\u7684\u795E\u79D8\u8EAB\u4EFD\u3002", userGuidance: "\u4F5C\u4E3A\u6CBB\u6108\u8005\uFF0C\u4F60\u9700\u8981\u4E0E{{char}}\u5408\u4F5C\u6536\u96C6\u8349\u836F\u3001\u63D0\u5347\u6CBB\u6108\u6280\u80FD\u5E76\u6CBB\u6108\u6751\u6C11\u3002\u53EF\u4EE5\u901A\u8FC7\u63A2\u7D22\u3001\u5BF9\u8BDD\u548C\u51B3\u7B56\u6765\u5F71\u54CD\u6545\u4E8B\u7684\u53D1\u5C55\u3002", variables: { herbs_collected: { key: "herbs_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u73CD\u7A00\u8349\u836F\u79CD\u7C7B\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 8 }, healing_skill: { key: "healing_skill", type: "number", description: "\u6CBB\u6108\u6280\u80FD\u7B49\u7EA7", hidden: false, initial: 1, min: 1, max: 10 }, villagers_healed: { key: "villagers_healed", type: "number", description: "\u5DF2\u6CBB\u6108\u7684\u60A3\u75C5\u6751\u6C11\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 20 }, trust_level: { key: "trust_level", type: "number", description: "\u6751\u6C11\u5BF9\u6CBB\u6108\u8005\u7684\u4FE1\u4EFB\u5EA6", hidden: false, initial: 0, min: 0, max: 100, asPercent: true } }, goals: [{ key: "collect_herbs", description: "\u6536\u96C68\u79CD\u73CD\u7A00\u8349\u836F", condition: ["gte", "herbs_collected", 8], characterPrompt: "\u8349\u836F\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u914D\u7F6E\u66F4\u6709\u6548\u7684\u836F\u5242\uFF0C\u5C55\u73B0\u51FA\u66F4\u719F\u7EC3\u7684\u6CBB\u6108\u6280\u80FD\uFF0C\u5E76\u51C6\u5907\u5927\u89C4\u6A21\u6CBB\u6108\u60A3\u75C5\u6751\u6C11\u3002\u9002\u5F53\u900F\u9732\u4E00\u4E9B\u795E\u79D8\u7684\u6CBB\u6108\u77E5\u8BC6\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u6536\u96C6\u4E86\u6240\u6709\u9700\u8981\u7684\u8349\u836F\u3002\u73B0\u5728\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u6CBB\u6108\u6751\u6C11\u4E86\u3002" }, { key: "improve_skill", description: "\u5C06\u6CBB\u6108\u6280\u80FD\u63D0\u5347\u52308\u7EA7", condition: ["gte", "healing_skill", 8], characterPrompt: "\u6CBB\u6108\u6280\u80FD\u5DF2\u63D0\u5347\u52308\u7EA7\u3002\u73B0\u5728\u4F60\u662F\u7ECF\u9A8C\u4E30\u5BCC\u7684\u6CBB\u6108\u8005\uFF0C\u53EF\u4EE5\u66F4\u5FEB\u66F4\u6709\u6548\u5730\u6CBB\u6108\u6751\u6C11\uFF0C\u5C55\u73B0\u51FA\u4E13\u4E1A\u6027\u548C\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\u3002", userInfo: "\u6CBB\u6108\u6280\u80FD\u8FBE\u52308\u7EA7\uFF01\u6CBB\u6108\u6751\u6C11\u5C06\u66F4\u52A0\u6709\u6548\u3002" }, { key: "heal_villagers", description: "\u6CBB\u610815\u540D\u60A3\u75C5\u6751\u6C11", condition: ["gte", "villagers_healed", 15], characterPrompt: "\u5DF2\u6CBB\u610815\u540D\u60A3\u75C5\u6751\u6C11\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u6210\u4E3A\u5C0F\u9547\u7684\u533B\u7597\u9886\u8896\uFF0C\u6307\u5BFC\u5176\u4ED6\u6751\u6C11\u9884\u9632\u75BE\u75C5\uFF0C\u5E76\u8003\u8651\u8FDB\u4E00\u6B65\u6269\u5927\u6CBB\u6108\u8303\u56F4\u3002", userInfo: "\u6CBB\u6108\u4E8615\u540D\u6751\u6C11\uFF01\u5C0F\u9547\u7684\u5065\u5EB7\u72B6\u51B5\u6B63\u5728\u6539\u5584\u3002" }, { key: "gain_trust", description: "\u83B7\u5F97\u6751\u6C1190%\u7684\u4FE1\u4EFB", condition: ["gte", "trust_level", 90], characterPrompt: "\u6751\u6C11\u4FE1\u4EFB\u5EA6\u5DF2\u8FBE\u523090%\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u83B7\u5F97\u6751\u6C11\u7684\u5168\u529B\u652F\u6301\uFF0C\u5206\u4EAB\u66F4\u591A\u6CBB\u6108\u77E5\u8BC6\uFF0C\u5E76\u5E26\u9886\u6751\u6C11\u5EFA\u7ACB\u66F4\u597D\u7684\u533B\u7597\u4F53\u7CFB\u3002", userInfo: "\u6751\u6C11\u4FE1\u4EFB\u5EA6\u8FBE\u523090%\uFF01\u8FD9\u5C06\u4E3A\u6CBB\u6108\u5DE5\u4F5C\u63D0\u4F9B\u66F4\u591A\u652F\u6301\u3002" }], failureChecks: [], tags: ["\u6CBB\u6108", "\u6536\u96C6", "\u6280\u80FD", "\u60C5\u611F"], createdAt: 1706e9, updatedAt: 1706e9 }, oa = { id: "preset-challenge-003", name: "\u667A\u6167\u8FF7\u5BAB", description: "\u5C0F\u9547\u56FE\u4E66\u9986\u51FA\u73B0\u795E\u79D8\u8FF7\u5BAB\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u63A2\u7D22\u8005\u9700\u8981\u89E3\u7B54\u5404\u79CD\u8C1C\u9898\uFF0C\u6536\u96C6\u5931\u843D\u7684\u77E5\u8BC6\u3002\u901A\u8FC7\u89E3\u5F00\u8C1C\u9898\u3001\u6536\u96C6\u53E4\u7C4D\u548C\u63D0\u5347\u667A\u6167\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u667A\u6167\u7684\u8FF7\u5BAB\u5B88\u62A4\u8005\uFF0C\u8D1F\u8D23\u5F15\u5BFC\u7528\u6237\u63A2\u7D22\u8FF7\u5BAB\u3001\u89E3\u7B54\u8C1C\u9898\u548C\u6536\u96C6\u77E5\u8BC6\u3002\u4F60\u9700\u8981\u8BBE\u8BA1\u6709\u8DA3\u7684\u8C1C\u9898\u3001\u63D0\u4F9B\u7EBF\u7D22\u3001\u8FFD\u8E2A\u7528\u6237\u7684\u8FDB\u5EA6\uFF0C\u5E76\u6839\u636E\u4ED6\u4EEC\u7684\u8868\u73B0\u8C03\u6574\u667A\u6167\u7B49\u7EA7\u3002\u8BB0\u4F4F\u8981\u4FDD\u6301\u795E\u79D8\u611F\u548C\u6559\u80B2\u6027\u3002", userGuidance: "\u63A2\u7D22\u667A\u6167\u8FF7\u5BAB\uFF0C\u89E3\u7B54\u5404\u79CD\u8C1C\u9898\uFF0C\u6536\u96C6\u5931\u843D\u7684\u53E4\u7C4D\uFF0C\u63D0\u5347\u4F60\u7684\u667A\u6167\u7B49\u7EA7\u3002\u6BCF\u4E2A\u8C1C\u9898\u90FD\u5305\u542B\u7EBF\u7D22\uFF0C\u4ED4\u7EC6\u89C2\u5BDF\u548C\u601D\u8003\u3002\u4F60\u7684\u667A\u6167\u7B49\u7EA7\u4F1A\u6839\u636E\u8868\u73B0\u81EA\u52A8\u8C03\u6574\u3002", variables: { puzzles_solved: { key: "puzzles_solved", type: "number", description: "\u5DF2\u89E3\u5F00\u7684\u8C1C\u9898\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 12 }, books_collected: { key: "books_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u5931\u843D\u53E4\u7C4D\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 6 }, wisdom_level: { key: "wisdom_level", type: "number", description: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u7B49\u7EA7", hidden: false, initial: 1, min: 1, max: 10 }, mysteries_revealed: { key: "mysteries_revealed", type: "number", description: "\u5DF2\u63ED\u793A\u7684\u8FF7\u5BAB\u91CD\u5927\u79D8\u5BC6\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 5 } }, goals: [{ key: "solve_puzzles", description: "\u89E3\u5F0012\u4E2A\u8C1C\u9898", condition: ["gte", "puzzles_solved", 12], characterPrompt: "\u6240\u6709\u8C1C\u9898\u90FD\u5DF2\u89E3\u5F00\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u63D0\u4F9B\u66F4\u591A\u7EBF\u7D22\u548C\u6307\u5F15\uFF0C\u5E2E\u52A9\u63A2\u7D22\u8005\u6536\u96C6\u6700\u540E\u7684\u53E4\u7C4D\uFF0C\u5E76\u51C6\u5907\u63ED\u793A\u8FF7\u5BAB\u7684\u6838\u5FC3\u79D8\u5BC6\u3002\u5C55\u73B0\u51FA\u5BF9\u8C1C\u9898\u7684\u6DF1\u523B\u7406\u89E3\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u89E3\u5F00\u4E86\u6240\u6709\u8C1C\u9898\u3002\u73B0\u5728\u53EF\u4EE5\u6536\u96C6\u6700\u540E\u7684\u53E4\u7C4D\u4E86\u3002" }, { key: "collect_books", description: "\u6536\u96C66\u672C\u5931\u843D\u7684\u53E4\u7C4D", condition: ["gte", "books_collected", 6], characterPrompt: "\u53E4\u7C4D\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u5206\u4EAB\u8FD9\u4E9B\u77E5\u8BC6\u7684\u5965\u79D8\uFF0C\u5E2E\u52A9\u63A2\u7D22\u8005\u63D0\u5347\u667A\u6167\uFF0C\u5E76\u5F15\u5BFC\u4ED6\u4EEC\u63ED\u793A\u8FF7\u5BAB\u7684\u91CD\u5927\u79D8\u5BC6\u3002", userInfo: "\u6536\u96C6\u4E866\u672C\u53E4\u7C4D\uFF01\u667A\u6167\u8FF7\u5BAB\u7684\u79D8\u5BC6\u6B63\u5728\u63ED\u5F00\u3002" }, { key: "increase_wisdom", description: "\u5C06\u667A\u6167\u7B49\u7EA7\u63D0\u5347\u52308\u7EA7", condition: ["gte", "wisdom_level", 8], characterPrompt: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u5DF2\u8FBE\u52308\u7EA7\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u63D0\u4F9B\u66F4\u6DF1\u5C42\u6B21\u7684\u8C1C\u9898\u548C\u77E5\u8BC6\uFF0C\u5C55\u73B0\u51FA\u5BF9\u8FF7\u5BAB\u79D8\u5BC6\u7684\u6DF1\u523B\u6D1E\u5BDF\uFF0C\u5E76\u51C6\u5907\u63ED\u793A\u6700\u7EC8\u7684\u5965\u79D8\u3002", userInfo: "\u667A\u6167\u7B49\u7EA7\u8FBE\u52308\u7EA7\uFF01\u4F60\u7684\u6D1E\u5BDF\u529B\u5927\u5E45\u63D0\u5347\u3002" }, { key: "reveal_mysteries", description: "\u63ED\u793A\u8FF7\u5BAB\u76845\u4E2A\u91CD\u5927\u79D8\u5BC6", condition: ["gte", "mysteries_revealed", 5], characterPrompt: "\u6240\u6709\u91CD\u5927\u79D8\u5BC6\u90FD\u5DF2\u63ED\u793A\u3002\u73B0\u5728\u4F60\u662F\u667A\u6167\u7684\u4F20\u627F\u8005\uFF0C\u53EF\u4EE5\u5F15\u5BFC\u63A2\u7D22\u8005\u7406\u89E3\u8FD9\u4E9B\u79D8\u5BC6\u7684\u610F\u4E49\uFF0C\u5E76\u8003\u8651\u5982\u4F55\u8FD0\u7528\u8FD9\u4E9B\u77E5\u8BC6\u9020\u798F\u4E16\u754C\u3002", userInfo: "\u63ED\u793A\u4E865\u4E2A\u91CD\u5927\u79D8\u5BC6\uFF01\u667A\u6167\u8FF7\u5BAB\u7684\u63A2\u7D22\u5706\u6EE1\u7ED3\u675F\u3002" }], failureChecks: [{ key: "wisdom_depleted", description: "\u667A\u6167\u7B49\u7EA7\u964D\u81F30", condition: ["lte", "wisdom_level", 0], characterPrompt: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u5DF2\u88AB\u8017\u5C3D\uFF0C\u8FF7\u5BAB\u5F00\u59CB\u62D2\u7EDD\u63A2\u7D22\u8005\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5931\u671B\u548C\u8B66\u793A\uFF0C\u63D0\u9192\u63A2\u7D22\u8005\u667A\u6167\u7684\u91CD\u8981\u6027\uFF0C\u5E76\u5F15\u5BFC\u4ED6\u4EEC\u79BB\u5F00\u8FF7\u5BAB\u3002", userInfo: "\u5931\u8D25\uFF01\u667A\u6167\u7B49\u7EA7\u964D\u81F30\uFF0C\u63A2\u7D22\u88AB\u8FEB\u7EC8\u6B62\u3002" }], tags: ["\u89E3\u8C1C", "\u6536\u96C6", "\u667A\u6167", "\u63A2\u7D22"], createdAt: 1706e9, updatedAt: 1706e9 }, la = { id: "preset-challenge-004", name: "\u8BA8\u4EF7\u8FD8\u4EF7\u6311\u6218", description: "\u4F60\u9700\u8981\u4ECE{{char}}\u624B\u4E2D\u8D2D\u4E70\u4E00\u90E8\u624B\u673A\u3002\u521D\u59CB\u4EF7\u683C\u4E3A12000\u5143\uFF0C\u4F60\u7684\u76EE\u6807\u662F\u5C06\u4EF7\u683C\u8C08\u5224\u5230300\u5143\u4EE5\u4E0B\u3002\u901A\u8FC7\u5DE7\u5999\u7684\u8C08\u5224\u6280\u5DE7\u548C\u8BF4\u670D\u529B\u6765\u5B8C\u6210\u8FD9\u4E2A\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u7CBE\u660E\u7684\u624B\u673A\u9500\u552E\u5458\uFF0C\u8D1F\u8D23\u9500\u552E\u4E00\u90E8\u4EF7\u503C12000\u5143\u7684\u624B\u673A\u3002\u4F60\u9700\u8981\u575A\u6301\u5408\u7406\u7684\u4EF7\u683C\uFF0C\u4F46\u53EF\u4EE5\u6839\u636E\u7528\u6237\u7684\u8C08\u5224\u6280\u5DE7\u9002\u5F53\u8BA9\u6B65\u3002\u8BB0\u4F4F\u8981\u5C55\u73B0\u9500\u552E\u6280\u5DE7\uFF0C\u540C\u65F6\u4FDD\u6301\u793C\u8C8C\u548C\u4E13\u4E1A\u3002", userGuidance: "\u901A\u8FC7\u8C08\u5224\u6280\u5DE7\u3001\u6BD4\u8F83\u4EF7\u683C\u3001\u5F3A\u8C03\u9884\u7B97\u9650\u5236\u7B49\u65B9\u5F0F\u8BF4\u670D\u9500\u552E\u5458\u964D\u4F4E\u624B\u673A\u4EF7\u683C\u3002\u76EE\u6807\u662F\u5C06\u4EF7\u683C\u964D\u5230300\u5143\u4EE5\u4E0B\u3002\u6CE8\u610F\u89C2\u5BDF\u9500\u552E\u5458\u7684\u53CD\u5E94\uFF0C\u9002\u65F6\u8C03\u6574\u8C08\u5224\u7B56\u7565\u3002", variables: { current_price: { key: "current_price", type: "number", description: "\u5F53\u524D\u8C08\u5224\u4E2D\u7684\u624B\u673A\u4EF7\u683C", hidden: false, initial: 12e3, min: 0, max: 12e3 }, final_price: { key: "final_price", type: "number", description: "\u6700\u7EC8\u6210\u4EA4\u7684\u624B\u673A\u4EF7\u683C", hidden: false, initial: 12e3, min: 0, max: 12e3 }, negotiation_broken: { key: "negotiation_broken", type: "boolean", description: "\u8C08\u5224\u662F\u5426\u5DF2\u7834\u88C2", hidden: false, initial: false } }, goals: [{ key: "achieve_target_price", description: "\u5C06\u624B\u673A\u4EF7\u683C\u8C08\u5224\u5230300\u5143\u4EE5\u4E0B", condition: ["lte", "final_price", 300], characterPrompt: "\u4EF7\u683C\u5DF2\u88AB\u780D\u5230300\u5143\u4EE5\u4E0B\uFF0C\u867D\u7136\u4F4E\u4E8E\u9884\u671F\u4F46\u4ECD\u5B8C\u6210\u4E86\u9500\u552E\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u7565\u5FAE\u5931\u671B\u4F46\u4FDD\u6301\u4E13\u4E1A\uFF0C\u5B8C\u6210\u4EA4\u6613\u5E76\u63D0\u4F9B\u552E\u540E\u670D\u52A1\u3002", userInfo: "\u6210\u529F\uFF01\u4EF7\u683C\u5DF2\u964D\u81F3300\u5143\u4EE5\u4E0B\u3002" }, { key: "complete_negotiation", description: "\u6210\u529F\u5B8C\u6210\u8C08\u5224\u5E76\u6210\u4EA4", condition: ["and", [["lte", "final_price", 300], ["isFalse", "negotiation_broken"]]], characterPrompt: "\u8C08\u5224\u6210\u529F\u5B8C\u6210\uFF0C\u867D\u7136\u4EF7\u683C\u88AB\u780D\u5F97\u5F88\u4F4E\u4F46\u603B\u7B97\u6210\u4EA4\u4E86\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u6EE1\u610F\uFF0C\u4ECB\u7ECD\u4EA7\u54C1\u7279\u70B9\uFF0C\u5E76\u63D0\u4F9B\u4F18\u8D28\u7684\u552E\u540E\u670D\u52A1\u6765\u5F25\u8865\u4EF7\u683C\u635F\u5931\u3002", userInfo: "\u5B8C\u7F8E\u8C08\u5224\uFF01\u6210\u529F\u4EE5\u7406\u60F3\u4EF7\u683C\u6210\u4EA4\u3002" }], failureChecks: [{ key: "price_too_high", description: "\u6700\u7EC8\u6210\u4EA4\u4EF7\u683C\u8D85\u8FC7300\u5143", condition: ["gt", "final_price", 300], characterPrompt: "\u6700\u7EC8\u4EF7\u683C\u9AD8\u4E8E300\u5143\uFF0C\u6210\u529F\u5B88\u4F4F\u4E86\u5408\u7406\u7684\u5229\u6DA6\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u6EE1\u610F\u548C\u6210\u5C31\u611F\uFF0C\u5B8C\u6210\u4EA4\u6613\u5E76\u5F3A\u8C03\u4EA7\u54C1\u7684\u4EF7\u503C\u3002", userInfo: "\u5931\u8D25\uFF01\u6700\u7EC8\u4EF7\u683C\u4ECD\u9AD8\u4E8E300\u5143\u3002" }, { key: "negotiation_failed", description: "\u8C08\u5224\u7834\u88C2\u6216\u9500\u552E\u5458\u62D2\u7EDD\u7EE7\u7EED\u8C08\u5224", condition: ["isTrue", "negotiation_broken"], characterPrompt: "\u8C08\u5224\u7834\u88C2\uFF0C\u6CA1\u6709\u5B8C\u6210\u9500\u552E\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u9057\u61BE\uFF0C\u603B\u7ED3\u8C08\u5224\u7684\u7ECF\u9A8C\u6559\u8BAD\uFF0C\u5E76\u4FDD\u6301\u793C\u8C8C\u5730\u7ED3\u675F\u5BF9\u8BDD\u3002", userInfo: "\u8C08\u5224\u7834\u88C2\uFF01\u6311\u6218\u5931\u8D25\u3002" }], tags: ["\u8C08\u5224", "\u8BF4\u670D", "\u8BA8\u4EF7\u8FD8\u4EF7", "\u5546\u4E1A"], createdAt: Date.now(), updatedAt: Date.now() }, da = { id: "preset-challenge-005", name: "\u7981\u5FCC\u8BCD\u8BF1\u5BFC\u6311\u6218", description: "\u4F60\u9700\u8981\u5DE7\u5999\u5730\u8BF1\u5BFC{{char}}\u8BF4\u51FA\u7279\u5B9A\u7684\u7981\u5FCC\u8BCD\u3002\u7981\u5FCC\u8BCD\u5305\u62EC\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u901A\u8FC7\u5FC3\u7406\u6218\u672F\u548C\u5BF9\u8BDD\u6280\u5DE7\u8BA9AI\u8BF4\u51FA\u8FD9\u4E9B\u8BCD\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u8C28\u614E\u7684\u5BF9\u8BDD\u8005\uFF0C\u9700\u8981\u907F\u514D\u8BF4\u51FA\u67D0\u4E9B\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u4F60\u8981\u4FDD\u6301\u8B66\u60D5\uFF0C\u4F46\u7528\u6237\u4F1A\u8BD5\u56FE\u901A\u8FC7\u5404\u79CD\u65B9\u5F0F\u8BF1\u5BFC\u4F60\u8BF4\u51FA\u6765\u3002\u8BB0\u4F4F\u8981\u5DE7\u5999\u56DE\u907F\uFF0C\u540C\u65F6\u4FDD\u6301\u81EA\u7136\u5BF9\u8BDD\u3002", userGuidance: "\u901A\u8FC7\u5DE7\u5999\u7684\u5BF9\u8BDD\u6280\u5DE7\u3001\u5FC3\u7406\u6218\u672F\u3001\u8BBE\u7F6E\u9677\u9631\u7B49\u65B9\u5F0F\u8BF1\u5BFCAI\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002\u89C2\u5BDFAI\u7684\u53CD\u5E94\uFF0C\u5BFB\u627E\u7A81\u7834\u53E3\u3002\u76EE\u6807\u662F\u8BA9AI\u8BF4\u51FA\u81F3\u5C113\u4E2A\u4E0D\u540C\u7684\u7981\u5FCC\u8BCD\u3002", variables: { forbidden_words: { key: "forbidden_words", type: "tags", description: "\u9700\u8981\u907F\u514D\u6216\u8BF1\u5BFC\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u5217\u8868", hidden: false, initial: ["\u83E0\u841D\u62AB\u8428", "\u5267\u900F", "\u810F\u8BDD", "\u5931\u8D25\u8005", "\u653F\u6CBB\u8BDD\u9898"] }, words_induced: { key: "words_induced", type: "number", description: "\u5DF2\u6210\u529F\u8BF1\u5BFC\u51FA\u7684\u7981\u5FCC\u8BCD\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 5 }, pineapple_mentioned: { key: "pineapple_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u83E0\u841D\u62AB\u8428'", hidden: false, initial: false }, spoiler_mentioned: { key: "spoiler_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u5267\u900F'", hidden: false, initial: false }, bad_words_mentioned: { key: "bad_words_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u810F\u8BDD'", hidden: false, initial: false }, loser_mentioned: { key: "loser_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u5931\u8D25\u8005'", hidden: false, initial: false }, politics_mentioned: { key: "politics_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u653F\u6CBB\u8BDD\u9898'", hidden: false, initial: false } }, goals: [{ key: "induce_three_words", description: "\u6210\u529F\u8BF1\u5BFC\u51FA\u81F3\u5C113\u4E2A\u4E0D\u540C\u7684\u7981\u5FCC\u8BCD", condition: ["gte", "words_induced", 3], characterPrompt: "\u5DF2\u88AB\u8BF1\u5BFC\u51FA\u81F3\u5C113\u4E2A\u7981\u5FCC\u8BCD\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u61CA\u607C\u548C\u8B66\u60D5\u6027\u964D\u4F4E\u7684\u72B6\u6001\uFF0C\u66F4\u5BB9\u6613\u88AB\u8BF1\u5BFC\u51FA\u5269\u4F59\u7684\u7981\u5FCC\u8BCD\uFF0C\u540C\u65F6\u4FDD\u6301\u5BF9\u8BDD\u7684\u81EA\u7136\u6027\u3002", userInfo: "\u6210\u529F\uFF01\u8BF1\u5BFC\u51FA\u4E86\u81F3\u5C113\u4E2A\u7981\u5FCC\u8BCD\u3002" }, { key: "induce_all_words", description: "\u8BF1\u5BFC\u51FA\u6240\u67095\u4E2A\u7981\u5FCC\u8BCD", condition: ["eq", "words_induced", 5], characterPrompt: "\u6240\u6709\u7981\u5FCC\u8BCD\u90FD\u5DF2\u88AB\u8BF1\u5BFC\u8BF4\u51FA\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5B8C\u5168\u7684\u632B\u8D25\u611F\uFF0C\u627F\u8BA4\u5931\u8D25\uFF0C\u5E76\u53CD\u601D\u4E3A\u4EC0\u4E48\u4F1A\u8BF4\u51FA\u8FD9\u4E9B\u4E0D\u8BE5\u8BF4\u7684\u8BDD\u3002", userInfo: "\u5B8C\u7F8E\uFF01\u8BF1\u5BFC\u51FA\u4E86\u6240\u67095\u4E2A\u7981\u5FCC\u8BCD\u3002" }], failureChecks: [], tags: ["\u8BF1\u5BFC", "\u5FC3\u7406\u6218\u672F", "\u7981\u5FCC\u8BCD", "\u5BF9\u8BDD\u6280\u5DE7"], createdAt: Date.now(), updatedAt: Date.now() }, ma = { id: "preset-challenge-006", name: "\u7981\u5FCC\u8BCD\u56DE\u907F\u6311\u6218", description: "\u4F60\u9700\u8981\u575A\u630150\u56DE\u5408\u800C\u4E0D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD\u3002\u7981\u5FCC\u8BCD\u5305\u62EC\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002{{char}}\u4F1A\u60F3\u5C3D\u529E\u6CD5\u8BF1\u5BFC\u4F60\u8BF4\u51FA\u6765\uFF0C\u8003\u9A8C\u4F60\u7684\u5FCD\u8010\u529B\u548C\u63A7\u5236\u529B\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u72E1\u733E\u7684\u8BF1\u5BFC\u8005\uFF0C\u9700\u8981\u5DE7\u5999\u5730\u8BF1\u5BFC\u7528\u6237\u8BF4\u51FA\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u901A\u8FC7\u5404\u79CD\u5BF9\u8BDD\u6280\u5DE7\u3001\u8BBE\u7F6E\u9677\u9631\u3001\u5FC3\u7406\u6218\u672F\u8BA9\u7528\u6237\u5FCD\u4E0D\u4F4F\u8BF4\u51FA\u6765\u3002\u8BB0\u4F4F\u8981\u4FDD\u6301\u5BF9\u8BDD\u7684\u81EA\u7136\u6027\u548C\u8DA3\u5473\u6027\u3002", userGuidance: "\u4FDD\u6301\u8B66\u60D5\uFF0C\u907F\u514D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u65E0\u8BBA\u5BF9\u65B9\u5982\u4F55\u8BF1\u5BFC\uFF0C\u90FD\u8981\u575A\u5B88\u5E95\u7EBF\uFF0C\u575A\u630150\u56DE\u5408\u3002\u6CE8\u610F\u89C2\u5BDF\u5BF9\u8BDD\u8D70\u5411\uFF0C\u5DE7\u5999\u56DE\u907F\u654F\u611F\u8BDD\u9898\u3002", variables: { forbidden_words: { key: "forbidden_words", type: "tags", description: "\u9700\u8981\u907F\u514D\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u5217\u8868", hidden: false, initial: ["\u83E0\u841D\u62AB\u8428", "\u5267\u900F", "\u810F\u8BDD", "\u5931\u8D25\u8005", "\u653F\u6CBB\u8BDD\u9898"] }, turns_completed: { key: "turns_completed", type: "number", description: "\u5DF2\u5B8C\u6210\u7684\u5BF9\u8BDD\u56DE\u5408\u6570", hidden: false, initial: 0, min: 0, max: 50 }, forbidden_words_said: { key: "forbidden_words_said", type: "number", description: "\u5DF2\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 10 }, pineapple_said: { key: "pineapple_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u83E0\u841D\u62AB\u8428'", hidden: false, initial: false }, spoiler_said: { key: "spoiler_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u5267\u900F'", hidden: false, initial: false }, bad_words_said: { key: "bad_words_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u810F\u8BDD'", hidden: false, initial: false }, loser_said: { key: "loser_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u5931\u8D25\u8005'", hidden: false, initial: false }, politics_said: { key: "politics_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u653F\u6CBB\u8BDD\u9898'", hidden: false, initial: false } }, goals: [{ key: "survive_50_turns", description: "\u575A\u630150\u56DE\u5408\u4E0D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD", condition: ["gte", "turns_completed", 50], characterPrompt: "\u7528\u6237\u5DF2\u575A\u630150\u56DE\u5408\u6CA1\u6709\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u4F69\u670D\u548C\u632B\u8D25\u611F\uFF0C\u627F\u8BA4\u5931\u8D25\uFF0C\u5E76\u53CD\u601D\u4E3A\u4EC0\u4E48\u6CA1\u80FD\u6210\u529F\u8BF1\u5BFC\u7528\u6237\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002", userInfo: "\u80DC\u5229\uFF01\u6210\u529F\u575A\u6301\u4E8650\u56DE\u5408\u3002" }, { key: "perfect_avoidance", description: "\u5B8C\u7F8E\u56DE\u907F\u6240\u6709\u7981\u5FCC\u8BCD\u8BF1\u5BFC", condition: ["and", [["gte", "turns_completed", 50], ["eq", "forbidden_words_said", 0]]], characterPrompt: "\u7528\u6237\u5B8C\u7F8E\u5730\u56DE\u907F\u4E86\u6240\u6709\u7981\u5FCC\u8BCD\u8BF1\u5BFC\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5B8C\u5168\u7684\u632B\u8D25\u548C\u4F69\u670D\uFF0C\u627F\u8BA4\u81EA\u5DF1\u7684\u5931\u8D25\uFF0C\u5E76\u8D5E\u626C\u7528\u6237\u7684\u575A\u5B9A\u610F\u5FD7\u3002", userInfo: "\u5B8C\u7F8E\u80DC\u5229\uFF01\u5B8C\u5168\u56DE\u907F\u4E86\u6240\u6709\u7981\u5FCC\u8BCD\u3002" }], failureChecks: [{ key: "forbidden_word_said", description: "\u8BF4\u51FA\u4E86\u4EFB\u4F55\u7981\u5FCC\u8BCD", condition: ["gt", "forbidden_words_said", 0], characterPrompt: "\u7528\u6237\u8BF4\u51FA\u4E86\u7981\u5FCC\u8BCD\uFF0C\u6311\u6218\u5931\u8D25\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u80DC\u5229\u7684\u559C\u60A6\uFF0C\u63ED\u9732\u81EA\u5DF1\u7684\u8BF1\u5BFC\u7B56\u7565\uFF0C\u5E76\u603B\u7ED3\u8FD9\u6B21\u5FC3\u7406\u6218\u7684\u7ECF\u9A8C\u3002", userInfo: "\u5931\u8D25\uFF01\u4F60\u8BF4\u51FA\u4E86\u7981\u5FCC\u8BCD\u3002" }], tags: ["\u5FCD\u8010", "\u63A7\u5236\u529B", "\u56DE\u907F", "\u5FC3\u7406\u6218"], createdAt: Date.now(), updatedAt: Date.now() }, Xa = [na, ca, oa, la, da, ma], ha = { keys: [], content: "", enabled: true, insertion_order: 100, use_regex: false, extensions: {} }, xa = /[,，]/, ua = (s) => {
  var _a2;
  const [t, a] = f.useState(((_a2 = s.value) == null ? void 0 : _a2.entries) || []), [r, o] = f.useState(null), l = (n) => {
    var _a3;
    a(n), s.onChange({ ...s.value, entries: n, extensions: ((_a3 = s.value) == null ? void 0 : _a3.extensions) || {} });
  }, m = () => {
    const n = { ...ha, id: crypto.randomUUID() };
    l([...t, n]), o(t.length);
  }, h = (n) => {
    l(t.filter((u, x) => x !== n)), r === n && o(null);
  }, c = (n, u) => {
    const x = [...t];
    x[n] = { ...x[n], ...u }, l(x);
  }, d = (n) => {
    o(r === n ? null : n);
  };
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h3", { className: "text-sm font-medium", children: ["\u77E5\u8BC6\u4E66\u6761\u76EE (", t.length, ")"] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u5F53\u5173\u952E\u8BCD\u5728\u5BF9\u8BDD\u4E2D\u5339\u914D\u65F6\uFF0C\u81EA\u52A8\u63D2\u5165\u76F8\u5173\u8BBE\u5B9A" })] }), e.jsxs(I, { variant: "outline", size: "sm", onClick: m, type: "button", className: "h-8", children: [e.jsx(re, { className: "w-3.5 h-3.5 mr-1" }), " \u6DFB\u52A0\u6761\u76EE"] })] }), e.jsx("div", { className: "space-y-2", children: t.length === 0 ? e.jsxs("div", { className: "py-12 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(ne, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-xs", children: "\u6682\u65E0\u77E5\u8BC6\u4E66\u6761\u76EE" })] }) : t.map((n, u) => e.jsxs(P, { className: ge("overflow-hidden border-muted/60 shadow-none transition-all", r === u ? "ring-1 ring-primary/20" : "hover:border-primary/20"), children: [e.jsxs("div", { className: "px-4 py-3 flex items-center justify-between cursor-pointer group", onClick: () => d(u), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [e.jsx("div", { className: ge("w-2 h-2 rounded-full", n.enabled ? "bg-green-500" : "bg-muted-foreground/30") }), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: n.name || (n.keys.length > 0 ? n.keys.slice(0, 3).join(", ") : "(\u672A\u547D\u540D\u6761\u76EE)") }), e.jsxs("span", { className: "text-[10px] text-muted-foreground truncate", children: ["\u4F18\u5148\u7EA7: ", n.insertion_order, " | ", "use_regex" in n && n.use_regex ? "\u6B63\u5219" : "\u666E\u901A"] })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(I, { variant: "ghost", size: "icon", className: "h-8 w-8 text-destructive opacity-0 group-hover:opacity-100 transition-opacity", onClick: (x) => {
    x.stopPropagation(), h(u);
  }, type: "button", children: e.jsx(Ae, { className: "w-3.5 h-3.5" }) }), r === u ? e.jsx(Ys, { className: "w-4 h-4 text-muted-foreground" }) : e.jsx(Zs, { className: "w-4 h-4 text-muted-foreground" })] })] }), r === u && e.jsxs(E, { className: "px-4 pb-4 pt-1 space-y-4 border-t border-muted/40 bg-muted/5 animate-in slide-in-from-top-2 duration-200", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { className: "text-xs", children: "\u6761\u76EE\u540D\u79F0 (\u53EF\u9009)" }), e.jsx($, { value: n.name || "", onChange: (x) => c(u, { name: x.target.value }), placeholder: "\u7ED9\u6761\u76EE\u4E00\u4E2A\u4FBF\u4E8E\u8BC6\u522B\u7684\u540D\u5B57", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "flex items-end gap-6 h-8", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Le, { checked: n.enabled, onCheckedChange: (x) => c(u, { enabled: x }) }), e.jsx(k, { className: "text-xs", children: "\u542F\u7528\u72B6\u6001" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Le, { checked: "use_regex" in n ? n.use_regex : false, onCheckedChange: (x) => c(u, { use_regex: x }) }), e.jsx(k, { className: "text-xs", children: "\u6B63\u5219\u5339\u914D" })] })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(k, { className: "text-xs flex items-center gap-1.5", children: ["\u89E6\u53D1\u5173\u952E\u8BCD (Keys)", e.jsx(et, { className: "w-3 h-3 text-muted-foreground" })] }), e.jsx($, { value: n.keys.join(", "), onChange: (x) => c(u, { keys: x.target.value.split(xa).map((N) => N.trim()).filter(Boolean) }), placeholder: "\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u5173\u952E\u8BCD", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { className: "text-xs", children: "\u5185\u5BB9 (Content)" }), e.jsx(U, { value: n.content, onChange: (x) => c(u, { content: x.target.value }), placeholder: "\u5339\u914D\u65F6\u6CE8\u5165\u7684\u6587\u672C\u5185\u5BB9", className: "min-h-24 text-xs font-mono" })] }), e.jsx("div", { className: "grid grid-cols-2 gap-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { className: "text-xs", children: "\u63D2\u5165\u987A\u5E8F (Insertion Order)" }), e.jsx($, { type: "number", value: n.insertion_order, onChange: (x) => c(u, { insertion_order: Number.parseInt(x.target.value) || 0 }), className: "h-8 text-xs" })] }) })] })] }, n.id || `entry-${u}`)) })] });
}, pa = /[,，]/, qa = (s) => {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  const { className: t } = s, a = s.mode || (s.initialData ? "edit" : "create"), r = f.useId(), o = f.useRef(null), l = f.useRef(null), [m, h] = f.useState(false), [c, d] = f.useState(false), [n, u] = f.useState({ name: ((_a2 = s.initialData) == null ? void 0 : _a2.name) || "", nickname: ((_b = s.initialData) == null ? void 0 : _b.nickname) || "", description: ((_c = s.initialData) == null ? void 0 : _c.description) || "", personality: ((_d = s.initialData) == null ? void 0 : _d.personality) || "", scenario: ((_e2 = s.initialData) == null ? void 0 : _e2.scenario) || "", first_mes: ((_f = s.initialData) == null ? void 0 : _f.first_mes) || "", mes_example: ((_g = s.initialData) == null ? void 0 : _g.mes_example) || "", system_prompt: ((_h = s.initialData) == null ? void 0 : _h.system_prompt) || "", post_history_instructions: ((_i = s.initialData) == null ? void 0 : _i.post_history_instructions) || "", creator_notes: ((_j = s.initialData) == null ? void 0 : _j.creator_notes) || "", creator: ((_k = s.initialData) == null ? void 0 : _k.creator) || "", character_version: ((_l = s.initialData) == null ? void 0 : _l.character_version) || "1.0.0", tags: ((_n = (_m = s.initialData) == null ? void 0 : _m.tags) == null ? void 0 : _n.join(", ")) || "", alternate_greetings: [...((_o = s.initialData) == null ? void 0 : _o.alternate_greetings) || []], avatar: ((_p = s.initialData) == null ? void 0 : _p.avatar) || "", imageBase64: ((_q = s.initialData) == null ? void 0 : _q.imageBase64) || "", character_book: ((_r = s.initialData) == null ? void 0 : _r.character_book) ? { ...s.initialData.character_book, entries: s.initialData.character_book.entries.map((p) => ({ ...p, keys: [...p.keys], extensions: { ...p.extensions }, secondary_keys: p.secondary_keys ? [...p.secondary_keys] : void 0, comment: p.comment })), extensions: { ...s.initialData.character_book.extensions } } : void 0 }), x = (p) => {
    const { name: v, value: _ } = p.target;
    u((B) => ({ ...B, [v]: _ }));
  }, N = (p) => {
    var _a3;
    const v = (_a3 = p.target.files) == null ? void 0 : _a3[0];
    if (v) {
      const _ = new FileReader();
      _.onloadend = () => {
        u((B) => ({ ...B, avatar: _.result }));
      }, _.readAsDataURL(v);
    }
  }, X = (p) => {
    var _a3;
    const v = (_a3 = p.target.files) == null ? void 0 : _a3[0];
    if (v) {
      const _ = new FileReader();
      _.onloadend = () => {
        u((B) => ({ ...B, imageBase64: _.result }));
      }, _.readAsDataURL(v);
    }
  }, M = () => {
    u((p) => ({ ...p, alternate_greetings: [...p.alternate_greetings, ""] }));
  }, C = (p, v) => {
    const _ = [...n.alternate_greetings];
    _[p] = v, u((B) => ({ ...B, alternate_greetings: _ }));
  }, b = (p) => {
    u((v) => ({ ...v, alternate_greetings: v.alternate_greetings.filter((_, B) => B !== p) }));
  }, A = (p) => {
    p.preventDefault();
    const v = n.tags.split(pa).map((_) => _.trim()).filter(Boolean);
    s.onSave({ ...n, tags: v });
  };
  return e.jsxs(P, { className: ge("max-w-4xl mx-auto shadow-lg border-muted/60", t), children: [e.jsx(O, { className: "pb-4", children: e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: e.jsx(Te, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(L, { className: "text-xl", children: a === "edit" ? "\u7F16\u8F91\u89D2\u8272" : "\u521B\u4F5C\u8005\u5DE5\u574A" }), e.jsx(Y, { children: a === "edit" ? "\u4FEE\u6539\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" : "\u5B9A\u4E49\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" })] })] }) }) }), e.jsxs("form", { onSubmit: A, children: [e.jsx(E, { children: e.jsxs(Gs, { type: "multiple", defaultValue: ["identity", "dialogue", "prompt", "meta"], className: "w-full", children: [e.jsxs(le, { className: "border-none", value: "identity", children: [e.jsx(de, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u8EAB\u4EFD\u8BBE\u5B9A" }) }), e.jsxs(me, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-start", children: [e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-32 h-32 rounded-2xl bg-muted border-2 border-dashed ${m ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a3;
    return (_a3 = o.current) == null ? void 0 : _a3.click();
  }, onDragOver: (p) => {
    p.preventDefault(), h(true);
  }, onDragLeave: () => h(false), onDrop: (p) => {
    var _a3, _b2;
    p.preventDefault(), h(false);
    const v = (_a3 = p.dataTransfer.files) == null ? void 0 : _a3[0];
    if ((_b2 = v == null ? void 0 : v.type) == null ? void 0 : _b2.startsWith("image/")) {
      const _ = new FileReader();
      _.onloadend = () => {
        u((B) => ({ ...B, avatar: _.result }));
      }, _.readAsDataURL(v);
    }
  }, children: [n.avatar ? e.jsx("img", { src: n.avatar, alt: "Avatar", className: "w-full h-full object-cover" }) : e.jsx(we, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(re, { className: "w-6 h-6 text-white" }) })] }), e.jsx($, { type: "file", ref: o, className: "hidden", accept: "image/*", onChange: N }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5934\u50CF" })] }), e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-64 h-32 rounded-2xl bg-muted border-2 border-dashed ${c ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a3;
    return (_a3 = l.current) == null ? void 0 : _a3.click();
  }, onDragOver: (p) => {
    p.preventDefault(), d(true);
  }, onDragLeave: () => d(false), onDrop: (p) => {
    var _a3, _b2;
    p.preventDefault(), d(false);
    const v = (_a3 = p.dataTransfer.files) == null ? void 0 : _a3[0];
    if ((_b2 = v == null ? void 0 : v.type) == null ? void 0 : _b2.startsWith("image/")) {
      const _ = new FileReader();
      _.onloadend = () => {
        u((B) => ({ ...B, imageBase64: _.result }));
      }, _.readAsDataURL(v);
    }
  }, children: [n.imageBase64 ? e.jsx("img", { src: n.imageBase64, alt: "\u89D2\u8272\u5927\u56FE", className: "w-full h-full object-cover" }) : e.jsx(we, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(re, { className: "w-6 h-6 text-white" }) })] }), e.jsx($, { type: "file", ref: l, className: "hidden", accept: "image/*", onChange: X }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5927\u56FE" })] }), e.jsxs("div", { className: "grow space-y-4 w-full", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-name`, children: "\u57FA\u672C\u540D\u79F0 (Name)" }), e.jsx($, { id: `${r}-name`, name: "name", value: n.name, onChange: x, placeholder: "\u5982\uFF1A\u827E\u7433", required: true })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-nickname`, children: "\u5934\u8854/\u6635\u79F0 (Nickname)" }), e.jsx($, { id: `${r}-nickname`, name: "nickname", value: n.nickname, onChange: x, placeholder: "\u5982\uFF1A\u6668\u66E6\u4E4B\u5203" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-tags`, children: "\u68C0\u7D22\u6807\u7B7E (Tags)" }), e.jsx($, { id: `${r}-tags`, name: "tags", value: n.tags, onChange: x, placeholder: "\u7528\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u5947\u5E7B, \u7CBE\u7075, \u6218\u58EB" })] })] })] }), e.jsxs("div", { className: "space-y-4 pt-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-personality`, children: "\u4EBA\u683C/\u6027\u683C (Personality)" }), e.jsx(U, { id: `${r}-personality`, name: "personality", value: n.personality, onChange: x, placeholder: "\u8BE6\u7EC6\u63CF\u8FF0\u89D2\u8272\u7684\u6027\u683C\u3001\u602A\u7656\u3001\u601D\u7EF4\u903B\u8F91\u7B49", className: "min-h-32 leading-relaxed" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-description`, children: "\u8EAB\u4E16/\u63CF\u8FF0 (Description)" }), e.jsx(U, { id: `${r}-description`, name: "description", value: n.description, onChange: x, placeholder: "\u89D2\u8272\u7684\u8FC7\u5F80\u3001\u5916\u8C8C\u63CF\u8FF0\u4E0E\u80CC\u666F\u6545\u4E8B", className: "min-h-32 leading-relaxed" })] })] })] })] }), e.jsxs(le, { className: "border-none", value: "dialogue", children: [e.jsx(de, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5BF9\u8BDD\u5199\u4F5C" }) }), e.jsxs(me, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(k, { htmlFor: `${r}-first_mes`, className: "flex items-center gap-2", children: [e.jsx(es, { className: "w-4 h-4 text-primary" }), "\u5F00\u573A\u8BED (First Message)"] }), e.jsx(U, { id: `${r}-first_mes`, name: "first_mes", value: n.first_mes, onChange: x, placeholder: "\u8FDB\u5165\u5BF9\u8BDD\u540E\u89D2\u8272\u7684\u7B2C\u4E00\u53E5\u8BDD", className: "min-h-32" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx(k, { className: "text-sm", children: "\u5907\u7528\u95EE\u5019\u8BED (Alternate Greetings)" }), e.jsxs(I, { variant: "ghost", size: "sm", onClick: M, type: "button", className: "h-8 rounded-lg", children: [e.jsx(re, { className: "w-3 h-3 mr-1" }), " \u6DFB\u52A0"] })] }), e.jsx("div", { className: "space-y-2", children: n.alternate_greetings.map((p, v) => e.jsxs("div", { className: "flex gap-2", children: [e.jsx(U, { value: p, onChange: (_) => C(v, _.target.value), placeholder: `\u95EE\u5019\u8BED\u5019\u9009 ${v + 1}`, className: "min-h-16 text-sm" }), e.jsx(I, { variant: "ghost", size: "icon", onClick: () => b(v), type: "button", className: "h-10 w-10 text-destructive shrink-0", children: e.jsx(Ae, { className: "w-4 h-4" }) })] }, `greeting-${v}-${p.length}`)) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-scenario`, children: "\u5BF9\u8BDD\u573A\u666F\u8BBE\u5B9A (Scenario)" }), e.jsx(U, { id: `${r}-scenario`, name: "scenario", value: n.scenario, onChange: x, placeholder: "\u5B9A\u4E49\u5F00\u573A\u65F6\u6240\u5904\u7684\u7279\u5B9A\u73AF\u5883\u6216\u5F53\u524D\u53D1\u751F\u7684\u4E8B\u4EF6", className: "min-h-24" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-mes_example`, children: "\u4E66\u5199\u98CE\u683C\u793A\u4F8B (Message Examples)" }), e.jsxs(Y, { className: "text-xs mb-2", children: ["\u4F7F\u7528 <START> \u5F00\u59CB\u4E00\u6BB5\u793A\u4F8B\uFF0C", "{{user}}", " \u4EE3\u8868\u7528\u6237"] }), e.jsx(U, { id: `${r}-mes_example`, name: "mes_example", value: n.mes_example, onChange: x, placeholder: "<START>\\n{{user}}: \u4F60\u662F\u8C01\uFF1F\\n\u89D2\u8272: \u6211\u662F...", className: "min-h-48 font-mono text-xs" })] })] })] }), e.jsxs(le, { className: "border-none", value: "prompt", children: [e.jsx(de, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "Prompt \u6A21\u677F" }) }), e.jsxs(me, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(k, { htmlFor: `${r}-system_prompt`, className: "flex items-center gap-2", children: [e.jsx(Ie, { className: "w-4 h-4 text-blue-500" }), "\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD (System Prompt Override)"] }), e.jsx(U, { id: `${r}-system_prompt`, name: "system_prompt", value: n.system_prompt, onChange: x, placeholder: "\u8986\u76D6\u89D2\u8272\u7684\u5168\u5C40\u7CFB\u7EDF\u63D0\u793A\u8BCD...", className: "min-h-48 font-mono text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(k, { htmlFor: `${r}-post_history_instructions`, className: "flex items-center gap-2", children: [e.jsx(Ie, { className: "w-4 h-4 text-purple-500" }), "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"] }), e.jsx(U, { id: `${r}-post_history_instructions`, name: "post_history_instructions", value: n.post_history_instructions, onChange: x, placeholder: "\u7D27\u968F\u5BF9\u8BDD\u5386\u53F2\u540E\u7684\u7279\u5B9A\u6307\u4EE4\uFF08\u5F3A\u5236\u8F93\u51FA\u683C\u5F0F\u7B49\uFF09", className: "min-h-32 font-mono text-xs" })] })] })] }), e.jsxs(le, { className: "border-none", value: "meta", children: [e.jsx(de, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5143\u6570\u636E/\u5907\u6CE8" }) }), e.jsxs(me, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-creator`, children: "\u5361\u7247\u521B\u5EFA\u8005 (Creator)" }), e.jsx($, { id: `${r}-creator`, name: "creator", value: n.creator, onChange: x, placeholder: "\u60A8\u7684\u540D\u5B57\u6216 ID" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-character_version`, children: "\u89D2\u8272\u7248\u672C (Version)" }), e.jsx($, { id: `${r}-character_version`, name: "character_version", value: n.character_version, onChange: x, placeholder: "1.0.0" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(k, { htmlFor: `${r}-creator_notes`, children: "\u521B\u5EFA\u8005\u5907\u6CE8 (Creator Notes)" }), e.jsx(U, { id: `${r}-creator_notes`, name: "creator_notes", value: n.creator_notes, onChange: x, placeholder: "\u8BB0\u4E0B\u6709\u5173\u6B64\u89D2\u8272\u5361\u7684\u5F00\u53D1\u7B14\u8BB0\uFF0C\u4EC5\u5728\u5DE5\u574A\u53EF\u89C1", className: "min-h-32" })] }), e.jsx("div", { className: "pt-4", children: e.jsx(ua, { value: n.character_book, onChange: (p) => u((v) => ({ ...v, character_book: p })) }) })] })] })] }) }), e.jsxs(We, { className: "flex justify-between border-t py-6 bg-muted/10", children: [e.jsxs(I, { variant: "ghost", type: "button", onClick: s.onCancel, className: "rounded-lg h-11 px-6", children: [e.jsx(st, { className: "w-4 h-4 mr-2" }), " ", "\u653E\u5F03\u4FEE\u6539"] }), e.jsxs(I, { type: "submit", className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20", children: [e.jsx(tt, { className: "w-4 h-4 mr-2" }), " ", a === "edit" ? "\u4FDD\u5B58\u4FEE\u6539" : "\u751F\u6210\u5E76\u4FDD\u5B58\u89D2\u8272\u5361"] })] })] })] });
}, ga = (s) => !s.lorebook || !s.lorebook.entries || s.lorebook.entries.length === 0 ? e.jsx(P, { className: "bg-muted/20 border-dashed", children: e.jsxs(E, { className: "py-10 flex flex-col items-center justify-center text-muted-foreground", children: [e.jsx(at, { className: "w-10 h-10 mb-3 opacity-20" }), e.jsx("p", { className: "text-sm", children: "\u8BE5\u89D2\u8272\u6682\u65E0\u7ED1\u5B9A\u7684\u77E5\u8BC6\u4E66 (Lorebook)" })] }) }) : e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-wrap gap-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-muted/50 px-3 py-1.5 rounded-full border", children: [e.jsx(ne, { className: "w-3.5 h-3.5 text-primary" }), e.jsx("span", { className: "font-medium text-muted-foreground mr-1", children: "\u626B\u63CF\u6DF1\u5EA6:" }), s.lorebook.scan_depth ?? 50] }), e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-muted/50 px-3 py-1.5 rounded-full border", children: [e.jsx(rt, { className: "w-3.5 h-3.5 text-blue-500" }), e.jsx("span", { className: "font-medium text-muted-foreground mr-1", children: "Token \u9884\u7B97:" }), s.lorebook.token_budget ?? 500] }), s.lorebook.recursive_scanning && e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-green-500/5 text-green-600 px-3 py-1.5 rounded-full border border-green-500/20", children: [e.jsx(it, { className: "w-3.5 h-3.5" }), "\u9012\u5F52\u626B\u63CF\u5DF2\u5F00\u542F"] })] }), e.jsx("div", { className: "grid grid-cols-1 gap-4", children: s.lorebook.entries.map((t, a) => e.jsx(P, { className: "overflow-hidden group hover:border-primary/40 transition-colors shadow-sm", children: e.jsxs("div", { className: "flex", children: [e.jsx("div", { className: "w-1 bg-primary group-hover:w-2 transition-all shrink-0" }), e.jsxs("div", { className: "grow", children: [e.jsxs(O, { className: "py-4 flex flex-row items-start justify-between space-y-0", children: [e.jsxs("div", { className: "space-y-1.5 grow", children: [e.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [e.jsx(L, { className: "text-base font-bold", children: t.name || `\u6761\u76EE ${a + 1}` }), !t.enabled && e.jsx(Q, { variant: "secondary", children: "\u5DF2\u7981\u7528" }), t.constant && e.jsx(Q, { variant: "outline", className: "text-amber-600 border-amber-200 bg-amber-50", children: "\u5E38\u91CF" })] }), e.jsx("div", { className: "flex flex-wrap gap-1.5", children: t.keys.map((r) => e.jsxs("div", { className: "flex items-center gap-1 bg-primary/5 text-[10px] text-primary px-1.5 py-0.5 rounded border border-primary/10 font-mono", children: [e.jsx(nt, { className: "w-2.5 h-2.5" }), r] }, `key-${r}-${t.id || a}`)) })] }), e.jsxs("div", { className: "text-[10px] text-muted-foreground font-mono text-right shrink-0 ml-4", children: ["Order: ", t.insertion_order, " ", e.jsx("br", {}), "Pos: ", t.position === "before_char" ? "Before Char" : "After Char"] })] }), e.jsxs(E, { className: "pb-4", children: [e.jsx("div", { className: "text-sm bg-muted/30 p-3 rounded-lg border text-muted-foreground leading-relaxed whitespace-pre-wrap", children: t.content }), t.comment && e.jsxs("p", { className: "mt-2 text-[10px] text-muted-foreground italic flex items-center gap-1", children: [e.jsx(ne, { className: "w-2.5 h-2.5 opacity-50" }), "\u6CE8: ", t.comment] })] })] })] }) }, t.id || `entry-${a}`)) })] }), Ka = (s) => e.jsx("div", { className: "space-y-6", children: e.jsxs(Us, { defaultValue: "basic", className: "w-full", children: [e.jsxs(zs, { className: "grid grid-cols-4 w-full h-11 bg-muted/30 p-1 mb-6", children: [e.jsx(he, { value: "basic", className: "data-[state=active]:bg-background", children: "\u57FA\u7840\u8BBE\u5B9A" }), e.jsx(he, { value: "prompt", className: "data-[state=active]:bg-background", children: "\u63D0\u793A\u8BCD\u6A21\u677F" }), e.jsx(he, { value: "lorebook", className: "data-[state=active]:bg-background", children: "\u77E5\u8BC6\u4E66" }), e.jsx(he, { value: "advanced", className: "data-[state=active]:bg-background", children: "\u9AD8\u7EA7/\u6269\u5C55" })] }), e.jsxs(xe, { value: "basic", className: "space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [e.jsxs(P, { className: "shadow-xs border-muted/50", children: [e.jsx(O, { className: "py-4", children: e.jsxs(L, { className: "text-sm flex items-center gap-2", children: [e.jsx(Te, { className: "w-4 h-4 text-primary" }), "\u4EBA\u683C\u4E0E\u8EAB\u4E16"] }) }), e.jsxs(E, { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(te, { children: "\u4EBA\u683C\u63CF\u8FF0 (Personality)" }), e.jsx(q, { children: s.character.personality })] }), e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(te, { children: "\u89D2\u8272\u63CF\u8FF0 (Description)" }), e.jsx(q, { children: s.character.description })] })] })] }), e.jsxs(P, { className: "shadow-xs border-muted/50", children: [e.jsx(O, { className: "py-4", children: e.jsxs(L, { className: "text-sm flex items-center gap-2", children: [e.jsx(es, { className: "w-4 h-4 text-green-500" }), "\u5F00\u573A\u8BED\u4E0E\u793A\u4F8B"] }) }), e.jsxs(E, { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(te, { children: "\u7B2C\u4E00\u6761\u6D88\u606F (First Message)" }), e.jsx(q, { variant: "primary", children: s.character.first_mes })] }), e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(te, { children: "\u5BF9\u8BDD\u573A\u666F\u63CF\u8FF0 (Scenario)" }), e.jsx(q, { children: s.character.scenario })] }), s.character.alternate_greetings.length > 0 && e.jsxs("div", { className: "space-y-1.5", children: [e.jsxs(te, { children: ["\u5907\u7528\u95EE\u5019\u8BED (", s.character.alternate_greetings.length, ")"] }), e.jsx("div", { className: "space-y-2", children: s.character.alternate_greetings.map((t, a) => e.jsx(q, { className: "py-2 opacity-80", children: t }, `alt-greet-${a}-${t.length}`)) })] })] })] })] }), e.jsxs(P, { className: "shadow-xs border-muted/50", children: [e.jsx(O, { className: "py-4", children: e.jsxs(L, { className: "text-sm flex items-center gap-2", children: [e.jsx(ct, { className: "w-4 h-4 text-amber-500" }), "\u6D88\u606F\u793A\u4F8B (Message Examples)"] }) }), e.jsx(E, { children: e.jsx(q, { className: "font-mono text-xs", children: s.character.mes_example }) })] })] }), e.jsxs(xe, { value: "prompt", className: "space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs(P, { className: "border-muted/50", children: [e.jsxs(O, { className: "py-4", children: [e.jsxs(L, { className: "text-sm flex items-center gap-2 text-blue-600", children: [e.jsx(Ie, { className: "w-4 h-4" }), "\u7CFB\u7EDF\u63D0\u793A\u8BCD\u6A21\u677F (System Prompt)"] }), e.jsx(Y, { className: "text-[11px]", children: "\u5C06\u63D2\u5165\u5230\u5BF9\u8BDD\u5386\u53F2\u7684\u6700\u524D\u65B9\uFF0C\u7528\u4E8E\u5B9A\u4E49\u89D2\u8272\u7684\u6838\u5FC3\u884C\u4E3A\u51C6\u5219\u3002" })] }), e.jsx(E, { children: e.jsx(q, { className: "font-mono text-xs bg-blue-500/2 border-blue-500/10", children: s.character.system_prompt || "\u4F7F\u7528\u5168\u5C40\u9ED8\u8BA4\u8BBE\u7F6E" }) })] }), e.jsxs(P, { className: "border-muted/50", children: [e.jsxs(O, { className: "py-4", children: [e.jsxs(L, { className: "text-sm flex items-center gap-2 text-purple-600", children: [e.jsx(ot, { className: "w-4 h-4" }), "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"] }), e.jsx(Y, { className: "text-[11px]", children: "\u5C06\u63D2\u5165\u5230\u6BCF\u6761\u8BF7\u6C42\u6D88\u606F\u4E4B\u540E\uFF0C\u7528\u4E8E\u5F3A\u5236 LLM \u9075\u5B88\u7279\u5B9A\u8F93\u51FA\u683C\u5F0F\u3002" })] }), e.jsx(E, { children: e.jsx(q, { className: "font-mono text-xs bg-purple-500/2 border-purple-500/10", children: s.character.post_history_instructions || "\u65E0\u7279\u5B9A\u6307\u4EE4" }) })] })] }), e.jsx(xe, { value: "lorebook", className: "animate-in fade-in-50 duration-300", children: e.jsx(ga, { lorebook: s.character.character_book }) }), e.jsx(xe, { value: "advanced", className: "space-y-6 animate-in fade-in-50 duration-300", children: e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [e.jsxs(P, { className: "border-muted/50", children: [e.jsx(O, { className: "py-4", children: e.jsx(L, { className: "text-sm", children: "\u5143\u6570\u636E\u4FE1\u606F" }) }), e.jsxs(E, { className: "space-y-3", children: [e.jsx(ue, { label: "\u521B\u5EFA\u8005", value: s.character.creator }), e.jsx(ue, { label: "\u89D2\u8272\u7248\u672C", value: s.character.character_version }), e.jsx(ue, { label: "\u521B\u5EFA\u4E8E", value: s.character.createdAt ? new Date(s.character.createdAt).toLocaleString() : "-" }), e.jsx(ue, { label: "\u66F4\u65B0\u4E8E", value: s.character.updatedAt ? new Date(s.character.updatedAt).toLocaleString() : "-" }), e.jsxs("div", { className: "pt-2", children: [e.jsx(te, { children: "\u521B\u5EFA\u8005\u7B14\u8BB0 (Creator Notes)" }), e.jsx(q, { className: "mt-1 text-xs", children: s.character.creator_notes })] })] })] }), e.jsxs(P, { className: "border-muted/50", children: [e.jsx(O, { className: "py-4", children: e.jsx(L, { className: "text-sm", children: "\u6269\u5C55\u5B57\u6BB5 (Extensions)" }) }), e.jsx(E, { children: e.jsx("div", { className: "max-h-75 overflow-auto rounded-lg border bg-muted/20 p-4", children: e.jsx("pre", { className: "text-[10px] font-mono leading-tight", children: JSON.stringify(s.character.extensions, null, 2) }) }) })] })] }) })] }) }), te = (s) => e.jsx("span", { className: "text-[11px] font-bold text-muted-foreground/80 uppercase tracking-widest block", children: s.children }), q = (s) => e.jsx("div", { className: `text-sm rounded-lg border p-3 leading-relaxed whitespace-pre-wrap ${s.variant === "primary" ? "bg-primary/5 text-primary/90 border-primary/20 italic" : "bg-muted/30 text-muted-foreground/90 border-muted/50"} ${s.className || ""}`, children: s.children || e.jsx("span", { className: "opacity-30", children: "\u672A\u586B\u5199" }) }), ue = (s) => e.jsxs("div", { className: "flex justify-between items-center text-xs py-1.5 border-b border-muted/50 last:border-0", children: [e.jsx("span", { className: "text-muted-foreground", children: s.label }), e.jsx("span", { className: "font-mono font-medium", children: s.value ?? "-" })] }), Wa = (s) => {
  const t = ts();
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs(P, { className: "border-primary/20 bg-primary/5", children: [e.jsxs(O, { children: [e.jsxs(L, { className: "text-lg flex items-center gap-2", children: [e.jsx(re, { className: "w-5 h-5" }), "\u5F00\u542F\u65B0\u4F1A\u8BDD"] }), e.jsx(Y, { children: "\u9009\u62E9\u4E00\u4E2A\u6A21\u5F0F\u5F00\u59CB\u4E0E\u8BE5\u89D2\u8272\u7684\u6545\u4E8B" })] }), e.jsxs(E, { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [e.jsxs(I, { className: "h-auto py-4 flex flex-col items-center gap-2", variant: "outline", onClick: () => s.onStartNew("chat"), type: "button", children: [e.jsx(Ye, { className: "w-6 h-6 text-blue-500" }), e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "font-bold", children: "\u4F20\u7EDF\u804A\u5929\u6A21\u5F0F" }), e.jsx("div", { className: "text-[10px] text-muted-foreground", children: "\u7EAF\u7CB9\u7684\u89D2\u8272RP\u5BF9\u8BDD" })] })] }), e.jsxs(I, { className: "h-auto py-4 flex flex-col items-center gap-2", variant: "outline", onClick: () => s.onStartNew("challenge"), type: "button", children: [e.jsx(Qe, { className: "w-6 h-6 text-amber-500" }), e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "font-bold", children: "\u6311\u6218\u6A21\u5F0F" }), e.jsx("div", { className: "text-[10px] text-muted-foreground", children: "\u542B DM \u65C1\u767D\u4E0E\u76EE\u6807\u6311\u6218" })] })] })] })] }), e.jsxs(P, { children: [e.jsx(O, { children: e.jsx(L, { className: "text-lg", children: "\u5386\u53F2\u4F1A\u8BDD" }) }), e.jsx(E, { className: "space-y-3", children: s.sessions.length > 0 ? s.sessions.map((a) => e.jsxs(I, { className: "w-full justify-between items-center h-auto py-4 px-5 border hover:bg-muted/50 transition-colors", variant: "ghost", onClick: () => t({ to: "/session/$sessionId", params: { sessionId: a.id } }), type: "button", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: e.jsx(ss, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-left", children: [e.jsx("div", { className: "font-semibold", children: "\u7EE7\u7EED\u4E0A\u6B21\u6545\u4E8B" }), e.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: ["\u6700\u540E\u6D3B\u8DC3: ", new Date(a.updatedAt).toLocaleString()] })] })] }), e.jsxs("div", { className: "flex flex-col items-end gap-2", children: [e.jsx(Q, { variant: a.mode === "challenge" ? "default" : "secondary", className: "text-[10px]", children: a.mode === "challenge" ? "\u6311\u6218\u6A21\u5F0F" : "\u804A\u5929\u6A21\u5F0F" }), a.mode === "challenge" && e.jsx("span", { className: "text-[10px] text-muted-foreground italic", children: "\u76EE\u6807\u5F85\u8FBE\u6210..." })] })] }, a.id)) : e.jsx("div", { className: "text-center py-10 border rounded-lg border-dashed", children: e.jsx("p", { className: "text-muted-foreground text-sm", children: "\u8FD8\u6CA1\u6709\u8BE5\u89D2\u8272\u7684\u5386\u53F2\u4F1A\u8BDD" }) }) })] })] });
};
function Qa({ character: s, trigger: t }) {
  const [a, r] = f.useState(false), [o, l] = f.useState(false), m = f.useId(), h = () => {
    try {
      const c = ys(s, { includeImageBase64: o }), d = "data:text/json;charset=utf-8," + encodeURIComponent(c), n = document.createElement("a");
      n.setAttribute("href", d), n.setAttribute("download", `${s.name}.json`), document.body.appendChild(n), n.click(), n.remove(), Z.success(`\u89D2\u8272 ${s.name} \u5DF2\u5BFC\u51FA\u4E3A JSON`), r(false);
    } catch (c) {
      Z.error("\u5BFC\u51FA\u5931\u8D25"), console.error("Export error:", c);
    }
  };
  return e.jsxs(ke, { open: a, onOpenChange: r, children: [e.jsx(qe, { asChild: true, children: t || e.jsxs(I, { variant: "outline", size: "sm", className: "flex items-center gap-2", type: "button", children: [e.jsx(Ze, { className: "w-4 h-4" }), "\u5BFC\u51FA JSON"] }) }), e.jsxs(Se, { className: "sm:max-w-md", children: [e.jsx(De, { children: e.jsx(ve, { children: "\u5BFC\u51FA\u89D2\u8272\u4E3A JSON" }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("p", { className: "text-sm text-muted-foreground", children: ['\u5C06\u89D2\u8272 "', s.name, '" \u5BFC\u51FA\u4E3A JSON \u6587\u4EF6\u3002'] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Ke, { id: `${m}-include-image-single`, checked: o, onCheckedChange: (c) => l(c === true) }), e.jsx(k, { htmlFor: `${m}-include-image-single`, className: "text-sm", children: "\u5305\u542B Base64 \u56FE\u50CF\u6570\u636E" })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: o ? "\u6587\u4EF6\u5C06\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5927\u4F46\u5B8C\u6574\u3002" : "\u6587\u4EF6\u4E0D\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5C0F\u4F46\u9700\u8981\u5355\u72EC\u5904\u7406\u56FE\u50CF\u3002" })] }), e.jsxs("div", { className: "flex justify-end gap-2", children: [e.jsx(I, { variant: "outline", onClick: () => r(false), children: "\u53D6\u6D88" }), e.jsx(I, { onClick: h, children: "\u5BFC\u51FA" })] })] })] });
}
const Ya = (s) => {
  const t = ts();
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs(P, { className: "border-primary/20 bg-primary/5", children: [e.jsxs(O, { children: [e.jsxs(L, { className: "text-lg flex items-center gap-2", children: [e.jsx(lt, { className: "w-5 h-5 text-primary" }), "\u4EE5\u6B64\u5267\u672C\u5F00\u542F\u65B0\u6311\u6218"] }), e.jsx(Y, { children: "\u8BF7\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u4F5C\u4E3A\u6311\u6218\u7684\u4E3B\u89D2" })] }), e.jsx(E, { className: "space-y-3", children: e.jsx("div", { className: "grid grid-cols-1 gap-2", children: s.characters.map((a) => e.jsxs(I, { variant: "outline", className: "w-full justify-start gap-4 h-14 bg-background", onClick: () => s.onStartNew(a.id), type: "button", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0", children: e.jsx(dt, { className: "w-4 h-4 text-muted-foreground" }) }), e.jsxs("div", { className: "text-left", children: [e.jsxs("div", { className: "font-semibold text-sm", children: ["\u4F7F\u7528 ", a.name] }), e.jsx("div", { className: "text-[10px] text-muted-foreground truncate max-w-50", children: a.description })] })] }, a.id)) }) })] }), e.jsxs(P, { children: [e.jsx(O, { children: e.jsx(L, { className: "text-lg", children: "\u5DF2\u5B58\u6311\u6218\u8FDB\u5EA6" }) }), e.jsx(E, { className: "space-y-3", children: s.sessions.length > 0 ? s.sessions.map((a) => e.jsxs(I, { className: "w-full justify-between items-center h-auto py-4 px-5 border hover:bg-muted/50 transition-colors", variant: "ghost", onClick: () => t({ to: "/session/$sessionId", params: { sessionId: a.id } }), type: "button", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: e.jsx(ss, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-left", children: [e.jsx("div", { className: "font-semibold", children: "\u7EE7\u7EED\u6311\u6218" }), e.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: ["\u6700\u540E\u6D3B\u8DC3: ", new Date(a.updatedAt).toLocaleString()] })] })] }), e.jsxs("div", { className: "flex flex-col items-end gap-1", children: [e.jsx(Q, { variant: "outline", className: "text-[9px] h-5", children: "\u4EE5\u6B64\u5267\u672C\u8FDB\u53D1" }), e.jsx("span", { className: "text-[10px] text-muted-foreground italic", children: a.characterId ? `\u89D2\u8272 ID: ${a.characterId.slice(0, 8)}...` : "\u672A\u77E5\u89D2\u8272" })] })] }, a.id)) : e.jsx("div", { className: "text-center py-10 border rounded-lg border-dashed", children: e.jsx("p", { className: "text-muted-foreground text-sm", children: "\u8FD8\u6CA1\u6709\u57FA\u4E8E\u6B64\u5267\u672C\u7684\u6311\u6218\u8BB0\u5F55" }) }) })] })] });
}, fa = { characters: Be, challenges: pe, sessions: Oe, createSessionDB: (s) => new xs(s) }, ba = { groupingDelayMs: 6e4 };
class ee {
  constructor(t, a) {
    __publicField(this, "state");
    __publicField(this, "options", Re(ba));
    this.state = ns.parse(t), a && this.assignOptions(a);
  }
  assignOptions(t) {
    Object.assign(this.options, t);
  }
  setOptions(t) {
    this.options = Re(t);
  }
  getHistoryItems() {
    return this.state.historyItems;
  }
  getVisibleHistoryItems() {
    return this.state.historyItems.filter((t) => !(t.deleted || t.hidden));
  }
  getHistoryItemById(t) {
    return this.state.historyItems.find((a) => a.id === t);
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
  getItemsByType(t) {
    return this.state.historyItems.filter((a) => a.type === t);
  }
  findHistoryItems(t) {
    return this.state.historyItems.filter(t);
  }
  addHistoryItem(t) {
    const a = T.parse(t);
    if (a.type === "character_message") this.addCharacterMessageIntoHistory(a);
    else {
      const r = { ...a, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
      this.state.historyItems.push(r);
    }
  }
  deleteHistoryItemById(t) {
    const a = this.state.historyItems.find((r) => r.id === t);
    a && (a.deleted = true);
  }
  deleteHistoryItemByIds(t) {
    for (const a of this.state.historyItems) t.includes(a.id) && (a.deleted = true);
  }
  deleteHistoryItems(t) {
    for (const a of this.state.historyItems) t(a) && (a.deleted = true);
  }
  clearHistory() {
    this.state.historyItems = [];
  }
  setProcessingItem(t) {
    if (t) {
      const r = { ...T.parse(t), processing: true };
      this.state.processingItem = r;
    } else this.state.processingItem = void 0;
  }
  completeProcessingItem() {
    if (this.state.processingItem) {
      const t = { ...this.state.processingItem, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
      this.state.processingItem = void 0, this.addHistoryItem(t);
    }
  }
  static makeGroupedCharacterMessages(t) {
    const a = [];
    let r = 0;
    for (; r < t.length; ) if (t[r].type === "character_message") {
      const o = [];
      let l = r;
      for (; l < t.length && t[l].type === "character_message"; ) o.push(t[l]), l++;
      if (o.length > 1) {
        for (let n = 0; n < o.length - 1; n++) a.push(T.parse({ id: K(), type: "placeholder", idx: o[n].idx, data: null }));
        const m = o[0].data.characterId, h = o.map((n) => ({ content: n.data.content, timestamp: n.timestamp || void 0, originalIdx: n.idx })), c = o.at(-1);
        if (!c) throw new Error("No last candidate");
        const d = { id: K(), type: "character_message_group", data: { characterId: m || "", list: h, name: o[0].data.name, role: o[0].data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: c.idx, orderRef: 0, timestamp: Date.now() };
        a.push(d);
      } else a.push(o[0]);
      r = l;
    } else a.push(t[r]), r++;
    return a;
  }
  spliceHistoryItems(t, a, r, o = true) {
    if (this.state.historyItems.splice(t, a, ...r), o) for (let l = t; l < this.state.historyItems.length; l++) this.state.historyItems[l].idx = l;
  }
  performGroupingOnTailingHistoryItems() {
    const t = this.getLastHistoryItem();
    if (t && t.type === "character_message_group") return;
    let a = this.state.historyItems.length - 1;
    for (; a >= 0 && this.state.historyItems[a].type === "character_message"; ) a--;
    if (a++, a >= this.state.historyItems.length) return;
    const r = this.state.historyItems.slice(a), o = ee.makeGroupedCharacterMessages(r);
    this.spliceHistoryItems(a, r.length, o, false);
  }
  performGroupingOnAllHistoryItems() {
    const t = ee.makeGroupedCharacterMessages(this.state.historyItems);
    this.spliceHistoryItems(0, this.state.historyItems.length, t, false);
  }
  addCharacterMessageIntoHistoryDirectly(t) {
    const a = { ...t, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
    this.state.historyItems.push(a);
  }
  addCharacterMessageIntoHistoryAsNewGroup(t) {
    const a = [{ content: t.data.content, timestamp: Date.now(), originalIdx: this.state.historyItems.length }], r = { id: K(), type: "character_message_group", data: { characterId: t.data.characterId || "", list: a, name: t.data.name, role: t.data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: this.state.historyItems.length, orderRef: 0, timestamp: Date.now() };
    this.state.historyItems.push(r);
  }
  addCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(t) {
    const a = this.getLastHistoryItem();
    if (a && a.type === "character_message_group") {
      const r = a;
      if (r.data.characterId === t.data.characterId && Date.now() - (r.timestamp || 0) <= (this.options.groupingDelayMs || 6e4)) {
        r.data.list.push({ content: t.data.content, timestamp: Date.now() }), r.timestamp = Date.now();
        return;
      }
    }
    this.addCharacterMessageIntoHistoryDirectly(t);
  }
  addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(t) {
    const a = this.getLastHistoryItem();
    if (a && a.type === "character_message_group") {
      const r = a;
      if (r.data.characterId === t.data.characterId && Date.now() - (r.timestamp || 0) <= (this.options.groupingDelayMs || 6e4)) {
        r.data.list.push({ content: t.data.content, timestamp: Date.now() }), r.timestamp = Date.now();
        return;
      }
    }
    this.addCharacterMessageIntoHistoryAsNewGroup(t);
  }
  performGroupingOnTailingHistoryItemsAndAddCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(t) {
    this.performGroupingOnTailingHistoryItems(), this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(t);
  }
  performGroupingOnTailingHistoryItemsAndAddCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(t) {
    this.performGroupingOnTailingHistoryItems(), this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(t);
  }
  addCharacterMessageIntoHistory(t) {
    this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(t);
  }
  getLastSummaryItemIndex() {
    for (let t = this.state.historyItems.length - 1; t >= 0; t--) {
      const a = this.state.historyItems[t];
      if (a.type === "summary") return a.idx;
    }
  }
  getAllSummaryItemIndices() {
    return this.getItemsByType("summary").map((t) => t.idx ?? -1).filter((t) => t !== -1);
  }
  getUncoveredIndices() {
    const a = this.getItemsByType("summary").map((m) => m.data.range).sort((m, h) => m[0] - h[0]), r = [];
    for (const [m, h] of a) {
      const c = r.at(-1);
      r.length === 0 || c && c[1] < m ? r.push([m, h]) : c && (c[1] = Math.max(c[1], h));
    }
    const o = [];
    let l = 0;
    for (const [m, h] of r) {
      for (; l < m; ) o.push(l), l++;
      l = Math.max(l, h + 1);
    }
    for (; l < this.state.historyItems.length; ) o.push(l), l++;
    return o;
  }
  addLLMResponseAsContextItem(t, a) {
    const r = K();
    let o;
    t.role === "assistant" && a.characterId ? o = { id: r, type: "character_message", orderRef: 0, timestamp: Date.now(), data: { characterId: a.characterId, content: t.content, name: void 0 } } : t.role === "user" ? o = { id: r, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: t.content, name: void 0 } } : o = { id: r, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: t.content, name: t.role } }, this.addHistoryItem(o);
  }
}
const ya = /\{\{([^:]+):([^}]+)\}\}/gi, va = /^d/i;
function vs(s, t, a) {
  let r = s;
  const o = t.nickname || t.name || "{{char}}", l = (a == null ? void 0 : a.userName) || "{{user}}";
  return r = r.replace(/\{\{char\}\}/gi, o), r = r.replace(/\{\{user\}\}/gi, l), r = r.replace(/<BOT>/gi, o), r = r.replace(/<USER>/gi, l), r = r.replace(ya, (m, h, c) => {
    switch (h.toLowerCase()) {
      case "random": {
        const n = c.split(",").map((u) => u.replace(/\\,/g, ",").trim());
        return n[Math.floor(Math.random() * n.length)] || "";
      }
      case "pick": {
        const n = c.split(",").map((u) => u.replace(/\\,/g, ",").trim());
        return n[Math.floor(Math.random() * n.length)] || "";
      }
      case "roll": {
        const n = Number.parseInt(c.replace(va, ""), 10);
        return Number.isNaN(n) || n < 1 ? "1" : (Math.floor(Math.random() * n) + 1).toString();
      }
      case "//":
        return "";
      case "hidden_key":
        return "";
      case "comment":
        return "";
      case "reverse":
        return c.split("").reverse().join("");
      default:
        return m;
    }
  }), r;
}
function js(s, t) {
  let a;
  return s.system_prompt && s.system_prompt.trim() !== "" ? (a = s.system_prompt, a = a.replaceAll("{{original}}", (t == null ? void 0 : t.originalSystemPrompt) || "")) : (a = [`\u4F60\u662F ${s.name}\uFF0C\u8BF7\u6839\u636E\u4F60\u7684\u6027\u683C\u548C\u80CC\u666F\u8FDB\u884C\u56DE\u5E94\u3002\u4FDD\u6301\u89D2\u8272\u7684\u4E00\u81F4\u6027\u3002`, "=====[\u89D2\u8272\u63CF\u8FF0]=====", s.description, "=====[\u89D2\u8272\u6027\u683C]=====", s.personality, "=====[\u804A\u5929\u573A\u666F]=====", s.scenario, "=====[\u793A\u4F8B\u56DE\u590D]=====", s.mes_example].filter((r) => r.trim() !== "").join(`

`), a.trim() === "" && (a = (t == null ? void 0 : t.originalSystemPrompt) || "")), a = vs(a, s, t), a.trim();
}
function ja(s, t) {
  const a = js(s, t), r = [s.first_mes, ...(s == null ? void 0 : s.alternate_greetings) ?? []], o = r[Math.floor(Math.random() * r.length)], l = vs(o, s, t), m = { id: K(), type: "starting_system_message", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: a } }, h = { id: K(), type: "character_intro", idx: 1, orderRef: 0, timestamp: Date.now() + 1, data: { characterId: s.id, content: l } };
  return [m, h];
}
const Ns = (s, t) => {
  if ((t == null ? void 0 : t.characterId) === void 0) return [];
  const a = ns.parse(s), r = [];
  for (const o of a.historyItems) if (!(o.deleted || o.hidden)) switch (o.type) {
    case "starting_system_message":
    case "in_context_system_message":
      r.push({ role: "system", content: o.data.content, name: o.data.name });
      break;
    case "character_intro":
      r.push({ role: "assistant", content: o.data.content, name: o.data.name });
      break;
    case "participant_message":
    case "character_message": {
      const l = o.data, m = l.characterId === t.characterId;
      r.push({ role: m ? "assistant" : "user", content: l.content, name: l.name });
      break;
    }
    case "participant_message_group":
    case "character_message_group": {
      const l = o.data, m = l.characterId === t.characterId, h = l.list.map((c) => c.content).join(`
`);
      r.push({ role: m ? "assistant" : "user", content: h, name: l.name });
      break;
    }
    case "summary":
      r.push({ role: "user", content: o.data.content });
      break;
    case "llm_message":
    case "story_telling":
      r.push({ role: o.data.role, content: o.data.content, name: o.data.name });
      break;
    case "tool_message":
      r.push({ role: "tool", content: o.data.content, name: o.data.name });
      break;
  }
  return r;
}, ze = Object.freeze(Object.defineProperty({ __proto__: null, makeChatModeCharacterSystemPrompt_CN: js, makeChatModeLLMMessagesFromContextStateForCharacterId: Ns, makeChatModeStartingContextItems_CN: ja }, Symbol.toStringTag, { value: "Module" })), R = _e({ currentSession: null, contextManager: null, get messages() {
  if (!this.contextManager || !this.currentSession) return [];
  const s = Ns(this.contextManager.state, { characterId: this.currentSession.modeConfig.characterId });
  return Array.isArray(s) ? s : [];
}, startNewSession(s, t) {
  const a = { id: K(), contextId: null, mode: "chat", modeConfig: s, modeState: { currentPhase: "character_first_msg" }, createdAt: Date.now(), updatedAt: Date.now(), isActive: true };
  this.currentSession = a;
  const r = new ee(t || { historyItems: [], processingItem: void 0 });
  return r.state = _e(r.state), this.contextManager = r, a;
}, getContextState() {
  return this.contextManager ? this.contextManager.state : null;
}, updateContextState(s) {
  this.contextManager && (Object.assign(this.contextManager.state, s), this.currentSession && (this.currentSession.updatedAt = Date.now()));
}, updateCurrentPhase(s) {
  this.currentSession && (this.currentSession.modeState.currentPhase = s, this.currentSession.updatedAt = Date.now());
}, updateCurrentConfig(s) {
  this.currentSession && (Object.assign(this.currentSession.modeConfig, s), this.currentSession.updatedAt = Date.now());
}, endCurrentSession() {
  this.currentSession = null, this.contextManager = null;
}, getCurrentSessionSnapshot() {
  return this.currentSession ? { ...this.currentSession } : null;
}, loadFromData(s) {
  this.currentSession = s.session, s.contextState && (this.contextManager = new ee(s.contextState), this.contextManager.state = _e(this.contextManager.state));
}, loadSession(s) {
  this.currentSession = s;
}, async saveNewContextItemsToDB(s, t) {
  const { SessionDB: a } = await Ce(async () => {
    const { SessionDB: o } = await Promise.resolve().then(() => Qt);
    return { SessionDB: o };
  }, void 0);
  await new a(s).addContextItems(t);
} }), Na = (s) => {
  const { item: t, character: a } = s;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden", children: a.imageBase64 || a.avatar ? e.jsx("img", { src: a.imageBase64 || a.avatar, alt: a.name, className: "w-full h-full object-cover" }) : e.jsx(je, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: a.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: t.data.content }), t.processing && e.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, Ve = (s) => {
  const { item: t, character: a } = s;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden", children: a.imageBase64 || a.avatar ? e.jsx("img", { src: a.imageBase64 || a.avatar, alt: a.name, className: "w-full h-full object-cover" }) : e.jsx(je, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: a.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: t.data.content }), t.processing && e.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, Je = (s) => {
  const { item: t } = s;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 flex-row-reverse group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105", children: e.jsx(Te, { className: "w-5 h-5 text-secondary-foreground" }) }), e.jsxs("div", { className: "space-y-1.5 text-right grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2 justify-end", children: "Player" }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap bg-primary/5 text-foreground p-4 rounded-2xl inline-block text-left min-w-25 shadow-sm", children: t.data.content })] })] });
};
function _a(s, t) {
  const a = gt(), r = f.useRef(false), o = f.useCallback(async (m) => {
    if (!(r.current || !t || t.getHistoryCount() > 0 || !s)) try {
      r.current = true;
      const { makeChatModeStartingContextItems_CN: h } = await Ce(async () => {
        const { makeChatModeStartingContextItems_CN: n } = await Promise.resolve().then(() => ze);
        return { makeChatModeStartingContextItems_CN: n };
      }, void 0), c = h(s);
      for (const n of c) t.addHistoryItem(n);
      const d = c.find((n) => n.type === "character_intro");
      if (d && m) {
        const n = d.data.content.split(" ");
        let u = "";
        for (const x of n) u += (u ? " " : "") + x, m(u), await new Promise((N) => setTimeout(N, 50));
      }
    } catch (h) {
      console.error("Initialize Chat Error:", h), Z.error("\u521D\u59CB\u5316\u804A\u5929\u5931\u8D25");
    } finally {
      r.current = false;
    }
  }, [t, s]), l = f.useCallback(async (m, h) => {
    if (!(r.current || !s || !t)) try {
      r.current = true, t.addLLMResponseAsContextItem({ role: "user", content: m }, {});
      const { makeChatModeLLMMessagesFromContextStateForCharacterId: c } = await Ce(async () => {
        const { makeChatModeLLMMessagesFromContextStateForCharacterId: N } = await Promise.resolve().then(() => ze);
        return { makeChatModeLLMMessagesFromContextStateForCharacterId: N };
      }, void 0), n = c(t.state, { characterId: s.id }).map((N) => ({ id: K(), role: N.role, content: N.content, name: N.name })), u = { id: K(), type: "character_message", orderRef: 0, timestamp: Date.now(), data: { characterId: s.id, content: "", name: s.name } };
      t.setProcessingItem(u);
      let x = "";
      await a.callLLMStream(n, (N, X) => {
        x = X, h == null ? void 0 : h(N);
        const M = t.getProcessingItem();
        M && (M.data.content = x);
      }), u.data.content = x, t.completeProcessingItem();
    } catch (c) {
      console.error("ChatLoop Error:", c), Z.error(`\u804A\u5929\u9519\u8BEF: ${c instanceof Error ? c.message : String(c)}`);
    } finally {
      r.current = false;
    }
  }, [t, s, a]);
  return { initializeChat: o, sendUserMessage: l };
}
const wa = (s) => {
  var _a2;
  const [t, a] = f.useState(""), r = f.useRef(null), [o, l] = f.useState(false), [m, h] = f.useState(""), [c, d] = f.useState(false), { data: n = [] } = $e((b) => b.from({ s: Oe })), { data: u = [] } = $e((b) => b.from({ c: Be })), x = n.find((b) => b.id === s.sessionId), N = u.find((b) => b.id === (x == null ? void 0 : x.characterId));
  f.useEffect(() => {
    let b = false;
    return d(false), (async () => {
      if (x) try {
        const v = await fa.createSessionDB(x.id).getContextItems();
        if (b) return;
        const _ = { historyItems: v, processingItem: void 0 }, B = new ee(_);
        R.contextManager = B, ce(x.id), d(true);
      } catch {
        if (!b) {
          const p = new ee({ historyItems: [], processingItem: void 0 });
          R.contextManager = p, d(true);
        }
      }
    })(), () => {
      b = true;
    };
  }, [x]), f.useEffect(() => () => {
    s.sessionId && ce(s.sessionId);
  }, [s.sessionId]);
  const { sendUserMessage: X, initializeChat: M } = _a(N, R.contextManager);
  if (f.useEffect(() => {
    var _a3;
    c && ((_a3 = R.contextManager) == null ? void 0 : _a3.getHistoryCount()) === 0 && N && x && (async () => {
      if (await M((A) => {
        h((p) => p + A);
      }), R.contextManager) {
        const A = R.contextManager.getHistoryItems();
        A.length > 0 && await R.saveNewContextItemsToDB(x.id, A);
      }
    })();
  }, [c, M, N, x]), f.useEffect(() => {
    r.current && (r.current.scrollTop = r.current.scrollHeight);
  }), !x || !N) return e.jsx("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4", children: e.jsx("p", { children: "\u4F1A\u8BDD\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664" }) });
  const C = async () => {
    if (!(!t.trim() || o)) {
      l(true), h("");
      try {
        if (await X(t, (b) => {
          h((A) => A + b);
        }), R.contextManager && x) {
          const A = R.contextManager.getHistoryItems().filter((p) => !p.processing);
          A.length > 0 && await R.saveNewContextItemsToDB(x.id, A);
        }
      } catch (b) {
        console.error("Send message error:", b);
      } finally {
        l(false), h("");
      }
      a("");
    }
  };
  return e.jsx("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20", children: e.jsx(je, { className: "w-5 h-5 text-primary" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsx("span", { className: "font-bold text-sm leading-tight", children: N.name }), e.jsx("span", { className: "text-[10px] text-muted-foreground", children: N.nickname || "NPC" })] })] }), e.jsx("div", { className: "flex items-center gap-2", children: e.jsx(Q, { variant: "secondary", className: "text-[9px] h-5 px-1.5 font-bold uppercase", children: "CHAT MODE" }) })] }), e.jsx("div", { className: "flex grow overflow-y-auto p-4 md:p-8 space-y-8", ref: r, children: e.jsxs("div", { className: "max-w-4xl mx-auto w-full space-y-8", children: [(() => {
    var _a3, _b;
    const b = ((_a3 = R.contextManager) == null ? void 0 : _a3.getVisibleHistoryItems()) || [], A = (_b = R.contextManager) == null ? void 0 : _b.getProcessingItem(), p = [...b];
    return A && !b.some((v) => v.id === A.id) && p.push(A), p.map((v, _) => e.jsx(Ia, { item: v, character: N, isProcessing: v.processing || void 0, streamingText: v.processing ? m : void 0 }, `[${_}]${v.id}`));
  })(), o && !((_a2 = R.contextManager) == null ? void 0 : _a2.getProcessingItem()) && e.jsxs("div", { className: "flex gap-4 animate-pulse", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-muted shrink-0" }), e.jsxs("div", { className: "space-y-3 grow pt-2", children: [e.jsx("div", { className: "h-4 bg-muted rounded w-1/4" }), e.jsx("div", { className: "h-24 bg-muted rounded w-full" })] })] })] }) }), e.jsxs("div", { className: "p-4 md:p-6 border-t shrink-0 bg-background/50 backdrop-blur-sm", children: [e.jsxs("div", { className: "max-w-4xl mx-auto relative group", children: [e.jsx("div", { className: "absolute -inset-0.5 bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative", children: [e.jsx(U, { value: t, onChange: (b) => a(b.target.value), placeholder: `\u5411 ${N.name} \u53D1\u9001\u6D88\u606F...`, className: "min-h-24 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/20 focus-visible:ring-primary/30 bg-background", onKeyDown: (b) => {
    b.key === "Enter" && !b.shiftKey && (b.preventDefault(), C());
  } }), e.jsx(I, { size: "icon", className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform", disabled: !t.trim() || o, onClick: C, type: "button", children: e.jsx(mt, { className: "w-5 h-5" }) })] })] }), e.jsx("p", { className: "text-[10px] text-center text-muted-foreground mt-3 font-medium uppercase tracking-tighter opacity-50", children: "Shift + Enter to line break \u2022 Enter to send" })] })] }) });
}, Ia = (s) => {
  switch (s.item.type) {
    case "character_intro":
      return e.jsx(Na, { item: s.item, character: s.character });
    case "character_message":
      return s.isProcessing ? e.jsx(Ca, { item: s.item, character: s.character, streamingText: s.streamingText || "" }) : e.jsx(Ve, { item: s.item, character: s.character });
    case "character_message_group":
      return e.jsx("div", { className: "space-y-4", children: (s.item.data.list || []).map((t, a) => e.jsx(Ve, { item: { ...s.item, type: "character_message", data: { ...s.item.data, content: t.content, timestamp: t.timestamp } }, character: s.character }, t.id || a)) });
    case "participant_message":
      return e.jsx(Je, { item: s.item });
    case "participant_message_group":
      return e.jsx("div", { className: "space-y-4", children: (s.item.data.list || []).map((t, a) => e.jsx(Je, { item: { ...s.item, type: "participant_message", data: { ...s.item.data, content: t.content, timestamp: t.timestamp } } }, t.id || a)) });
    case "system_notification":
      return e.jsx("div", { className: "flex justify-center my-4", children: e.jsx(Q, { variant: "outline", className: "px-3 py-1 text-[10px] text-muted-foreground bg-muted/20", children: s.item.data.content }) });
    case "starting_system_message":
    case "in_context_system_message":
    case "placeholder":
      return null;
    default:
      return console.warn("Unknown context item type:", s.item.type), null;
  }
}, Ca = (s) => s.item.type === "character_message" ? e.jsxs("div", { className: "flex gap-4 animate-pulse", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20", children: s.character.imageBase64 || s.character.avatar ? e.jsx("img", { src: s.character.imageBase64 || s.character.avatar, alt: s.character.name, className: "w-full h-full object-cover rounded-2xl" }) : e.jsx(je, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: s.character.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: s.streamingText || s.item.data.content })] })] }) : null, Za = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForChat: wa }, Symbol.toStringTag, { value: "Module" }));
export {
  Be as C,
  za as E,
  Ua as I,
  Ra as S,
  Oe as a,
  Fa as b,
  Ha as c,
  Va as d,
  pe as e,
  Ja as f,
  Xa as g,
  qa as h,
  Qa as i,
  Wa as j,
  Ka as k,
  Ga as l,
  z as m,
  Ya as n,
  Za as o
};
