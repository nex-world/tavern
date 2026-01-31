var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as f, j as e, au as xe, av as Is, t as se, aw as he, ax as it } from "./react-DL1cgx8I.js";
import { c as G, a as ks } from "./app-lib-BG-NwrGa.js";
import { X as Ds, Y as Ts, B as j, Z as Ms, _ as As, $ as Es, a0 as Ps, a1 as $s, a2 as Fs, a3 as Os, S as Ls, J as Rs, K as Us, u as ze, v as Et, f as A, d as H, a5 as Bs, C as P, E as L, F as R, G as Z, H as $, D as ct, s as ot, t as lt, a6 as Gs, a7 as Vs, a8 as Hs, L as C, w as zs, a9 as Pt, aa as $t, ab as dt, O as tt, N as B, ac as Js, ad as Te, ae as Me, af as Ae, ag as Pe, ah as $e, ai as Fe, aj as Oe, ak as ne, y as Ft, z as Ot, A as ie, a4 as ce } from "./app-components-BouIT30j.js";
import { p as Lt, q as Rt, n as fe, M as qs, r as Ks, S as Ne, s as Xs, F as Ut, k as st, t as Bt, D as Ws, h as we, u as mt, P as le, e as Ys, C as Qs, I as ht, o as ut, v as pt, w as Le, X as Gt, x as Vt, y as Ht, z as Re, A as Zs, B as at, G as ea, J as ta, K as zt, N as sa, T as aa, Q as ra, R as na, V as ia, W as ca, Y as Jt, Z as qt, f as gt, U as oa, _ as be, $ as Kt, a0 as ge, b as rt, a1 as la, a2 as da, a3 as ma } from "./icons-BqX5dRP-.js";
import { n as V } from "./id-OxPLOBIU.js";
import { k as Ie, m as Je, n as ha, j as ua, e as xt, i as Ue } from "./@tanstack-BioXF0H0.js";
import { v as Xt, x as oe, y as pa } from "./vendor-BsR5l3DU.js";
import { _ as Ce } from "./index-BY00pYZM.js";
import { c as ga } from "./app-hooks-CmsDuSg2.js";
import { o as S, s as d, n as _, b as O, r as X, a as Y, l as M, c as k, _ as F, u as ae, t as Q, e as xa } from "./zod-grrOrvCS.js";
import { D as Be } from "./dexie-DEp9pvRL.js";
import { c as jt } from "./es-toolkit-CstbrnlE.js";
import { a as fa } from "./future-lib-llm-ui-react-6L6xN7Md.js";
const ba = (s) => {
  const [t, a] = f.useState(false);
  return e.jsxs(Ds, { open: t, onOpenChange: a, children: [e.jsxs("div", { className: G("group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors mb-1", s.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"), onClick: () => s.onClick(s.session), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [s.session.mode === "challenge" ? e.jsx(Lt, { className: "w-4 h-4 shrink-0" }) : e.jsx(Rt, { className: "w-4 h-4 shrink-0" }), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: s.session.title || s.characterName }), e.jsx("span", { className: "text-[10px] opacity-70", children: new Date(s.session.updatedAt).toLocaleDateString() })] })] }), e.jsx(Ts, { asChild: true, children: e.jsx(j, { variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: (r) => r.stopPropagation(), type: "button", children: e.jsx(fe, { className: "w-3.5 h-3.5 text-muted-foreground hover:text-destructive" }) }) })] }), e.jsxs(Ms, { children: [e.jsxs(As, { children: [e.jsx(Es, { children: "\u786E\u8BA4\u5220\u9664" }), e.jsx(Ps, { children: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u4F1A\u8BDD\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002" })] }), e.jsxs($s, { children: [e.jsx(Fs, { children: "\u53D6\u6D88" }), e.jsx(Os, { onClick: () => {
    var _a2;
    (_a2 = s.onDelete) == null ? void 0 : _a2.call(s, s.session), a(false);
  }, children: "\u5220\u9664" })] })] })] });
}, Zr = (s) => {
  const [t, a] = f.useState(""), [r, n] = f.useState(false), o = (c) => {
    var _a2, _b;
    let l;
    if (c.mode === "chat") l = (_a2 = c.modeConfig) == null ? void 0 : _a2.characterId;
    else if (c.mode === "challenge") return "\u6311\u6218\u6A21\u5F0F";
    return l && ((_b = s.characters.find((i) => i.id === l)) == null ? void 0 : _b.name) || "\u672A\u77E5\u89D2\u8272";
  }, m = s.sessions.filter((c) => o(c).toLowerCase().includes(t.toLowerCase())).sort((c, l) => l.updatedAt - c.updatedAt), u = (c = false) => e.jsxs("div", { className: "flex flex-col h-full bg-muted/30 border-r w-64", children: [e.jsxs("div", { className: `p-4 space-y-4 ${c ? "pt-12" : ""}`, children: [e.jsxs(j, { className: "w-full flex items-center gap-2", onClick: () => {
    s.onNewSession(), c && n(false);
  }, type: "button", children: [e.jsx(Ks, { className: "w-4 h-4" }), "\u65B0\u4F1A\u8BDD"] }), e.jsxs("div", { className: "relative", children: [e.jsx(Ne, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), e.jsx(A, { placeholder: "\u641C\u7D22\u4F1A\u8BDD...", className: "pl-8 h-9 text-xs", value: t, onChange: (l) => a(l.target.value) })] })] }), e.jsx("div", { className: "grow overflow-y-auto px-2", children: e.jsxs("div", { className: "space-y-1", children: [m.map((l) => e.jsx(ba, { session: l, isActive: l.id === s.activeSessionId, characterName: o(l), onClick: (i) => {
    s.onSessionSelect(i), c && n(false);
  }, onDelete: s.onSessionDelete }, l.id)), m.length === 0 && e.jsx("div", { className: "text-center py-10 text-muted-foreground text-xs", children: "\u65E0\u4F1A\u8BDD" })] }) })] });
  return e.jsxs(e.Fragment, { children: [e.jsx("aside", { className: "hidden md:flex w-64 flex-col", children: u(false) }), e.jsxs(Ls, { open: r, onOpenChange: n, children: [e.jsx(Rs, { asChild: true, children: e.jsx(j, { variant: "outline", size: "icon", className: "md:hidden fixed bottom-6 left-6 rounded-full shadow-lg z-50 h-12 w-12", children: e.jsx(qs, { className: "h-6 w-6" }) }) }), e.jsxs(Us, { side: "left", className: "w-64 p-0", children: [e.jsx(ze, { className: "sr-only", children: "\u4F1A\u8BDD\u5217\u8868" }), e.jsx(Et, { className: "sr-only", children: "\u9009\u62E9\u548C\u7BA1\u7406\u60A8\u7684\u804A\u5929\u4F1A\u8BDD" }), u(true)] })] })] });
}, ya = S({ keys: O(d()).describe("\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5339\u914D\u804A\u5929\u65E5\u5FD7"), content: d().describe("\u5185\u5BB9\uFF0C\u5982\u679C\u5339\u914D\u5219\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u4E2D"), extensions: X(d(), Y()).describe("\u6269\u5C55\u5B57\u6BB5"), enabled: k().describe("\u662F\u5426\u542F\u7528"), insertion_order: _().describe("\u63D2\u5165\u987A\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5C0F\u8D8A\u65E9\u63D2\u5165"), case_sensitive: k().optional().describe("\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199"), constant: k().optional().describe("\u662F\u5426\u4E3A\u5E38\u91CF\u5339\u914D"), name: d().optional().describe("\u6761\u76EE\u540D\u79F0"), priority: _().optional().describe("\u4F18\u5148\u7EA7"), id: _().optional().describe("\u6761\u76EEID"), comment: d().optional().describe("\u6CE8\u91CA"), selective: k().optional().describe("\u662F\u5426\u9009\u62E9\u6027\u5339\u914D"), secondary_keys: O(d()).optional().describe("\u6B21\u8981\u5173\u952E\u8BCD"), position: F(["before_char", "after_char"]).optional().describe("\u63D2\u5165\u4F4D\u7F6E") }), va = S({ keys: O(d()).describe("\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5339\u914D\u804A\u5929\u65E5\u5FD7"), content: d().describe("\u5185\u5BB9\uFF0C\u5982\u679C\u5339\u914D\u5219\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u4E2D"), extensions: X(d(), Y()).describe("\u6269\u5C55\u5B57\u6BB5"), enabled: k().describe("\u662F\u5426\u542F\u7528"), insertion_order: _().describe("\u63D2\u5165\u987A\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5C0F\u8D8A\u65E9\u63D2\u5165"), case_sensitive: k().optional().describe("\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199"), use_regex: k().optional().describe("\u662F\u5426\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D"), constant: k().optional().describe("\u662F\u5426\u4E3A\u5E38\u91CF\u5339\u914D"), name: d().optional().describe("\u6761\u76EE\u540D\u79F0"), priority: _().optional().describe("\u4F18\u5148\u7EA7"), id: ae([_(), d()]).optional().describe("\u6761\u76EEID"), comment: d().optional().describe("\u6CE8\u91CA"), selective: k().optional().describe("\u662F\u5426\u9009\u62E9\u6027\u5339\u914D"), secondary_keys: O(d()).optional().describe("\u6B21\u8981\u5173\u952E\u8BCD"), position: F(["before_char", "after_char"]).optional().describe("\u63D2\u5165\u4F4D\u7F6E") }), ja = ae([ya, va]), Wt = S({ name: d().optional().describe("\u77E5\u8BC6\u4E66\u540D\u79F0"), description: d().optional().describe("\u77E5\u8BC6\u4E66\u63CF\u8FF0"), scan_depth: _().optional().describe("\u626B\u63CF\u6DF1\u5EA6\uFF0C\u68C0\u67E5\u6700\u8FD1\u591A\u5C11\u6761\u6D88\u606F"), token_budget: _().optional().describe("\u4EE4\u724C\u9884\u7B97\uFF0C\u8D85\u8FC7\u5219\u79FB\u9664\u4F4E\u4F18\u5148\u7EA7\u6761\u76EE"), recursive_scanning: k().optional().describe("\u662F\u5426\u542F\u7528\u9012\u5F52\u626B\u63CF"), extensions: X(d(), Y()).describe("\u6269\u5C55\u5B57\u6BB5"), entries: O(ja).describe("\u6761\u76EE\u6570\u7EC4") }), _a = S({ type: d().describe("\u8D44\u4EA7\u7C7B\u578B\uFF0C\u5982 'icon', 'background' \u7B49"), uri: d().describe("\u8D44\u4EA7URI"), name: d().describe("\u8D44\u4EA7\u540D\u79F0"), ext: d().describe("\u6587\u4EF6\u6269\u5C55\u540D") }), ye = S({ name: d().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: d().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), creator: d().describe("\u521B\u5EFA\u8005\u3010v2\u3011"), creator_notes: d().describe("\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v2\u3011"), creator_notes_multilingual: X(d(), d()).optional().describe("\u591A\u8BED\u8A00\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v3\u3011"), extensions: X(d(), Y()).describe("\u53EF\u81EA\u5B9A\u4E49\u7684\u6269\u5C55\u5B57\u6BB5\u3010v2\u3011"), assets: O(_a).optional().describe("\u8D44\u4EA7\u6570\u7EC4\u3010v3\u3011"), system_prompt: d().describe("\u7CFB\u7EDF\u63D0\u793A\u8BCD(\u6A21\u677F)\u3010v2\u3011"), post_history_instructions: d().describe("\u5386\u53F2\u6307\u4EE4\u540E\u7F00(\u6A21\u677F)\u3010v2\u3011"), nickname: d().optional().describe("\u6635\u79F0\u3010v3\u3011"), personality: d().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), mes_example: d().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011"), first_mes: d().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), alternate_greetings: O(d()).describe("\u5907\u7528\u95EE\u5019\u8BED\u6570\u7EC4\u3010v2\u3011"), group_only_greetings: O(d()).describe("\u4EC5\u7FA4\u804A\u95EE\u5019\u8BED\u3010v3\u3011"), scenario: d().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), character_book: Wt.optional().describe("\u89D2\u8272\u7279\u5B9A\u77E5\u8BC6\u4E66\u3010\u90E8\u5206\u529F\u80FD\uFF08\u5982\u88C5\u9970\u5668\uFF09\u9650\u5355\u804A\u4F7F\u7528\u3011\u3010v2\u3011"), character_version: d().describe("\u89D2\u8272\u7248\u672C\u3010v2\u3011"), tags: O(d()).describe("\u6807\u7B7E\u6570\u7EC4\uFF0C\u7528\u4E8E\u7B5B\u9009\uFF0C\u5927\u5C0F\u5199\u654F\u611F\u3010v2\u3011"), source: O(d()).optional().describe("\u6765\u6E90\u6570\u7EC4\uFF0C\u4FBF\u4E8E\u6EAF\u6E90\u6216\u81EA\u52A8\u66F4\u65B0\u7B49\u3010v3\u3011"), creation_date: _().optional().describe("\u521B\u5EFA\u65E5\u671F\uFF08Unix\u65F6\u95F4\u6233\uFF09\u3010v3\u3011"), modification_date: _().optional().describe("\u4FEE\u6539\u65E5\u671F\uFF08Unix\u65F6\u95F4\u6233\uFF09\u3010v3\u3011") }), Na = S({ name: d().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: d().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), personality: d().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), scenario: d().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), first_mes: d().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), mes_example: d().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011"), creator_notes: d().describe("\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v2\u3011"), system_prompt: d().describe("\u7CFB\u7EDF\u63D0\u793A\u8BCD(\u6A21\u677F)\u3010v2\u3011"), post_history_instructions: d().describe("\u5386\u53F2\u6307\u4EE4\u540E\u7F00(\u6A21\u677F)\u3010v2\u3011"), alternate_greetings: O(d()).describe("\u5907\u7528\u95EE\u5019\u8BED\u6570\u7EC4\u3010v2\u3011"), character_book: Wt.optional().describe("\u89D2\u8272\u7279\u5B9A\u77E5\u8BC6\u4E66\u3010\u90E8\u5206\u529F\u80FD\uFF08\u5982\u88C5\u9970\u5668\uFF09\u9650\u5355\u804A\u4F7F\u7528\u3011\u3010v2\u3011"), tags: O(d()).describe("\u6807\u7B7E\u6570\u7EC4\uFF0C\u7528\u4E8E\u7B5B\u9009\uFF0C\u5927\u5C0F\u5199\u654F\u611F\u3010v2\u3011"), creator: d().describe("\u521B\u5EFA\u8005\u3010v2\u3011"), character_version: d().describe("\u89D2\u8272\u7248\u672C\u3010v2\u3011"), extensions: X(d(), Y()).describe("\u53EF\u81EA\u5B9A\u4E49\u7684\u6269\u5C55\u5B57\u6BB5\u3010v2\u3011") });
S({ spec: M("chara_card_v2").describe("\u89C4\u8303\u6807\u8BC6"), spec_version: M("2.0").describe("\u89C4\u8303\u7248\u672C"), data: Na.describe("\u6570\u636E") });
const ft = S({ spec: M("chara_card_v3").describe("\u89C4\u8303\u6807\u8BC6"), spec_version: M("3.0").describe("\u89C4\u8303\u7248\u672C"), data: ye.describe("\u6570\u636E") }), Yt = S({ name: d().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: d().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), personality: d().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), scenario: d().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), first_mes: d().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), mes_example: d().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011") }), bt = ye.extend({ id: d().describe("\u89D2\u8272\u5361ID"), avatar: d().optional().describe("\u5934\u50CFURI"), imageBase64: d().optional().describe("PNG\u56FE\u50CFBase64\u6570\u636E"), createdAt: _().optional().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: _().optional().describe("\u66F4\u65B0\u65F6\u95F4") }), U = S({ id: d().optional().describe("\u4E0A\u4E0B\u6587\u9879 ID"), idx: _().optional().describe("\u4E0A\u4E0B\u6587\u9879\u7D22\u5F15\u4F4D\u7F6E"), orderRef: _().optional().describe("\u4E0A\u4E0B\u6587\u9879\u6392\u5E8F\u53C2\u8003\u503C").default(0), type: d().optional().describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\u6807\u7B7E").default("default"), data: Y().describe("\u4E0A\u4E0B\u6587\u5185\u5BB9"), hidden: k().optional().nullable().describe("\u662F\u5426\u9690\u85CF\u8BE5\u4E0A\u4E0B\u6587\u9879"), processing: k().optional().nullable().describe("\u4E0A\u4E0B\u6587\u9879\u5904\u7406\u72B6\u6001\uFF0C\u5904\u7406\u4E2D\u8BBE\u7F6E\u4E3A true\uFF0C\u5904\u7406\u5B8C\u6BD5\u8BBE\u7F6E\u4E3A undefined"), timestamp: _().optional().nullable().describe("\u6D88\u606F\u65F6\u95F4\u6233"), deleted: k().optional().nullable().describe("\u662F\u5426\u5DF2\u5220\u9664\u8BE5\u4E0A\u4E0B\u6587\u9879") }), wa = S({ historyItems: U.array().describe("\u4E0A\u4E0B\u6587\u9879\u6570\u7EC4"), processingItem: U.optional().describe("\u6B63\u5728\u5904\u7406\u4E2D\u7684\u4E0A\u4E0B\u6587\u9879(\u9650\u4E00\u9879)") });
S({ role: F(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: d().describe("\u6D88\u606F\u5185\u5BB9"), name: d().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") });
U.extend({ type: M("llm_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1ALLM\u6D88\u606F"), data: S({ role: F(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: d().describe("\u6D88\u606F\u5185\u5BB9"), name: d().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") }).describe("\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u56E0\u4E3A\u4E0A\u4E0B\u6587\u7BA1\u7406\u5E94\u8BE5\u4F7F\u7528\u66F4\u52A0\u7CBE\u7EC6\u7684\u7ED3\u6784\u3002LLM\u6D88\u606F\u4E0A\u4E0B\u6587\u9879\u53EA\u662F\u6700\u6734\u7D20\u7684\u5F62\u5F0F\u3002");
U.extend({ type: M("starting_system_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u8D77\u59CB\u7CFB\u7EDF\u6D88\u606F"), data: S({ role: M("system").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: d().describe("\u6D88\u606F\u5185\u5BB9"), name: d().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
U.extend({ type: M("in_context_system_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u4E0A\u4E0B\u6587\u4E4B\u4E2D\u7684\u7CFB\u7EDF\u6D88\u606F"), data: S({ role: M("system").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: d().describe("\u6D88\u606F\u5185\u5BB9"), name: d().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
U.extend({ type: M("tool_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u5DE5\u5177\u6D88\u606F"), data: S({ role: M("tool").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: d().describe("\u6D88\u606F\u5185\u5BB9"), name: d().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
U.extend({ type: M("story_telling").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u8BB2\u6545\u4E8B\u6D88\u606F"), data: S({ role: F(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: d().describe("\u6D88\u606F\u5185\u5BB9"), name: d().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
const Qt = S({ isCharacter: k().optional().default(false).describe("\u662F\u5426\u4E3A\u89D2\u8272\u6D88\u606F"), isEnv: k().optional().default(false).describe("\u662F\u5426\u4E3A\u73AF\u5883\u6D88\u606F"), isDM: k().optional().default(false).describe("\u662F\u5426\u4E3ADM\u6D88\u606F"), isUser: k().optional().default(false).describe("\u662F\u5426\u4E3A\u7528\u6237\u6D88\u606F"), characterId: d().optional().describe("\u89D2\u8272 ID"), userId: d().optional().describe("\u7528\u6237 ID"), content: d().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: _().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233"), name: d().optional().describe("\u53D1\u9001\u8005\u540D\u79F0"), role: F(["system", "user", "assistant", "tool"]).optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272") }), Ca = U.extend({ type: M("participant_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u53C2\u4E0E\u8005\u6D88\u606F"), data: Qt.describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") }), Zt = S({ isCharacter: k().optional().default(false).describe("\u662F\u5426\u4E3A\u89D2\u8272\u6D88\u606F"), isEnv: k().optional().default(false).describe("\u662F\u5426\u4E3A\u73AF\u5883\u6D88\u606F"), isDM: k().optional().default(false).describe("\u662F\u5426\u4E3ADM\u6D88\u606F"), isUser: k().optional().default(false).describe("\u662F\u5426\u4E3A\u7528\u6237\u6D88\u606F"), characterId: d().optional().describe("\u89D2\u8272 ID"), userId: d().optional().describe("\u7528\u6237 ID"), list: O(S({ content: d().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: _().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233"), originalIdx: _().optional().describe("\u539F\u59CB\u7D22\u5F15\u4F4D\u7F6E") })).describe("\u6D88\u606F\u5217\u8868"), name: d().optional().describe("\u53D1\u9001\u8005\u540D\u79F0"), role: F(["system", "user", "assistant", "tool"]).optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272") });
U.extend({ type: M("participant_message_group").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u53C2\u4E0E\u8005\u6D88\u606F\u7EC4"), data: Zt.describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
Ca.extend({ type: M("character_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u6D88\u606F"), data: Qt.extend({ characterId: d().describe("\u89D2\u8272 ID") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
U.extend({ type: M("character_message_group").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u6D88\u606F\u7EC4"), data: Zt.extend({ characterId: d().describe("\u89D2\u8272 ID") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
U.extend({ type: M("placeholder").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u5360\u4F4D\u7B26"), data: Y().nullable().optional().describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9"), hidden: M(true).describe("\u5360\u4F4D\u7B26\u4E0A\u4E0B\u6587\u9879\u9ED8\u8BA4\u9690\u85CF") });
U.extend({ type: M("alert").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u7A0B\u5E8F\u63D0\u793A"), data: S({ type: F(["info", "warning", "error", "success", "secondary", "contrast"]).describe("\u7A0B\u5E8F\u63D0\u793A\u7C7B\u578B"), content: d().describe("\u5185\u5BB9"), timestamp: _().optional().describe("\u65F6\u95F4\u6233") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
U.extend({ type: M("summary").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6458\u8981"), data: S({ range: Q([_().describe("\u8D77\u59CB\u7D22\u5F15\u4F4D\u7F6E"), _().describe("\u7ED3\u675F\u7D22\u5F15\u4F4D\u7F6E")]).describe("\u6458\u8981\u8986\u76D6\u7684\u5185\u5BB9\u8303\u56F4"), content: d().describe("\u6458\u8981\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
U.extend({ type: M("annotation").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6CE8\u89E3"), data: S({ target: _().describe("\u6CE8\u89E3\u76EE\u6807\u7684\u7D22\u5F15\u4F4D\u7F6E"), content: d().describe("\u6CE8\u89E3\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
U.extend({ type: M("performance_command").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6F14\u51FA\u6307\u4EE4"), data: S({ anchor: _().describe("\u6F14\u51FA\u6307\u4EE4\u7684\u951A\u70B9\u4F4D\u7F6E"), command: O(Y()).describe("\u6F14\u51FA\u6307\u4EE4\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
U.extend({ type: M("dm_intro").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1ADM \u5F00\u573A\u767D"), data: S({ content: d().describe("DM \u5F00\u573A\u767D\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
U.extend({ type: M("character_intro").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u5F00\u573A\u767D"), data: S({ characterId: d().optional().describe("\u89D2\u8272ID"), content: d().describe("\u89D2\u8272\u5F00\u573A\u767D\u5185\u5BB9"), timestamp: _().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
const es = S({ id: d().describe("\u4F1A\u8BDDID"), title: d().optional().describe("\u4F1A\u8BDD\u6807\u9898"), contextId: d().optional().nullable().describe("\u5173\u8054\u7684\u4E0A\u4E0B\u6587\u7684ID"), mode: d().describe("\u6A21\u5F0F"), modeConfig: X(d(), Y()).describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: X(d(), Y()).describe("\u6A21\u5F0F\u4E13\u7528\u72B6\u6001"), createdAt: _().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: _().describe("\u66F4\u65B0\u65F6\u95F4"), isActive: k().optional().describe("\u662F\u5426\u6D3B\u8DC3") }), Sa = S({ key: d().describe("\u53D8\u91CF\u952E"), type: M("boolean").describe("\u53D8\u91CF\u7C7B\u578B"), description: d().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: k().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: k().describe("\u521D\u59CB\u503C") }), Ia = S({ key: d().describe("\u53D8\u91CF\u952E"), type: M("number").describe("\u53D8\u91CF\u7C7B\u578B"), description: d().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: k().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: _().describe("\u521D\u59CB\u503C"), min: _().optional().describe("\u6700\u5C0F\u503C"), max: _().optional().describe("\u6700\u5927\u503C"), minDelta: _().optional().describe("(\u7EDD\u5BF9\u503C\u7684)\u6700\u5C0F\u53D8\u5316\u5E45\u5EA6"), maxDelta: _().optional().describe("(\u7EDD\u5BF9\u503C\u7684)\u6700\u5927\u53D8\u5316\u5E45\u5EA6"), asPercent: k().optional().describe("\u662F\u5426\u4E3A\u767E\u5206\u6BD4(\u754C\u9762\u6DFB\u52A0\u767E\u5206\u53F7)") }), ka = S({ key: d().describe("\u53D8\u91CF\u952E"), type: M("string").describe("\u53D8\u91CF\u7C7B\u578B"), description: d().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: k().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: d().describe("\u521D\u59CB\u503C"), asEnum: k().optional().describe("\u662F\u5426\u4E3A\u679A\u4E3E"), enumValues: O(d()).optional().describe("\u679A\u4E3E\u503C\u5217\u8868") }), Da = S({ key: d().describe("\u53D8\u91CF\u952E"), type: M("tags").describe("\u53D8\u91CF\u7C7B\u578B"), description: d().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: k().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: O(d()).describe("\u521D\u59CB\u6807\u7B7E\u5217\u8868"), asEnum: k().optional().describe("\u662F\u5426\u4E3A\u679A\u4E3E"), enumValues: O(d()).optional().describe("\u679A\u4E3E\u503C\u5217\u8868") }), ts = xa("type", [Sa, Ia, ka, Da]);
X(d(), ts).describe("\u53D8\u91CF\u914D\u7F6E\u5B57\u5178");
const Ta = S({ key: d().describe("\u53D8\u91CF\u952E"), value: ae([k(), _(), d(), O(d())]).describe("\u53D8\u91CF\u503C") }), Ma = X(d(), Ta).describe("\u53D8\u91CF\u5B57\u5178");
F(["setTrue", "setFalse", "toggle", "delta", "setTo", "setValue", "add", "remove"]);
const ss = Q([F(["setTrue", "setFalse", "toggle"]), d().describe("\u53D8\u91CF\u952E")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u5E03\u5C14\u7C7B\u578B"), as = Q([F(["delta", "setTo", "setValue"]), d().describe("\u53D8\u91CF\u952E"), _().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u6570\u5B57\u7C7B\u578B"), rs = Q([F(["setTo", "setValue"]), d().describe("\u53D8\u91CF\u952E"), d().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u5B57\u7B26\u4E32\u7C7B\u578B"), ns = Q([F(["add", "remove"]), d().describe("\u53D8\u91CF\u952E"), d().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u6807\u7B7E\u7C7B\u578B");
ae([ss, as, rs, ns]).describe("\u53D8\u91CF\u64CD\u4F5C\u5143\u7EC4");
F(["isTrue", "isFalse", "eq", "is", "neq", "isNot", "gt", "gte", "lt", "lte", "includes", "notIncludes", "has", "hasAny", "hasAll", "llmJudge", "and", "or", "all", "any", "some"]);
const Aa = Q([F(["isTrue", "isFalse"]), d().describe("\u53D8\u91CF\u952E")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5E03\u5C14\u7C7B\u578B"), Ea = Q([F(["eq", "neq", "is", "isNot"]), d().describe("\u53D8\u91CF\u952E"), ae([d(), _(), k()]).describe("\u6BD4\u8F83\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5B57\u9762\u91CF\u7C7B\u578B"), Pa = Q([F(["gt", "gte", "lt", "lte"]), d().describe("\u53D8\u91CF\u952E"), _().describe("\u6BD4\u8F83\u503C")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u6570\u5B57\u7C7B\u578B"), $a = Q([F(["includes", "notIncludes", "has", "hasAny", "hasAll", "llmJudge"]), d().describe("\u53D8\u91CF\u952E"), ae([d(), _(), k()]).describe("\u53C2\u8003\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5185\u5BB9\u7C7B\u578B(\u5B57\u7B26\u4E32\u548C\u6807\u7B7E)"), Fa = Q([F(["hasAny", "hasAll"]), d().describe("\u53D8\u91CF\u952E"), ae([d(), _(), k()]).array().describe("\u53C2\u8003\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5185\u5BB9\u6570\u7EC4\u7C7B\u578B(\u5B57\u7B26\u4E32\u548C\u6807\u7B7E)"), qe = ae([Aa, Ea, Pa, $a, Fa]).describe("\u6761\u4EF6\u5143\u7EC4"), yt = Q([F(["and", "or", "all", "any", "some"]), O(qe).describe("\u5B50\u6761\u4EF6\u5143\u7EC4\u6570\u7EC4")]).describe("\u7B80\u5355\u590D\u5408\u6761\u4EF6\u5143\u7EC4"), is = Q([F(["and", "or", "all", "any", "some"]), ae([qe, yt]).array().describe("\u5B50\u6761\u4EF6\u5143\u7EC4\u6570\u7EC4")]).describe("\u590D\u6742\u590D\u5408\u6761\u4EF6\u5143\u7EC4"), Oa = ae([qe, yt, is]).describe("\u6761\u4EF6\u5143\u7EC4\uFF08\u652F\u6301\u5355\u4E00\u6761\u4EF6\u548C\u590D\u5408\u6761\u4EF6\uFF09"), _t = S({ key: d().describe("\u68C0\u67E5\u9879\u952E"), description: d().describe("\u68C0\u67E5\u9879\u63CF\u8FF0"), condition: Oa.describe("\u7ED3\u6784\u5316\u8FBE\u6210\u6761\u4EF6") }), Nt = S({ key: d().describe("\u68C0\u67E5\u9879\u952E"), isCompleted: k().describe("\u662F\u5426\u5DF2\u5B8C\u6210") }), La = F(["dm_intro", "character_intro", "player_input", "dm_eval_changes", "dm_narrate_changes", "failure_check", "goal_check", "ending_check", "character_response"]), Ra = F(["idle", "dm_intro_ready", "dm_intro_running", "dm_intro_done", "character_intro_ready", "character_intro_running", "character_intro_done", "player_input_ready", "player_input_running", "player_input_done", "character_response_ready", "character_response_running", "character_response_done", "dm_eval_changes_ready", "dm_eval_changes_running", "dm_eval_changes_done", "dm_narrate_changes_ready", "dm_narrate_changes_running", "dm_narrate_changes_done", "failure_check_ready", "failure_check_running", "failure_check_done", "goal_check_ready", "goal_check_running", "goal_check_done", "ending_check_ready", "ending_check_running", "ending_check_done", "ended"]), We = { idle: { label: "\u7A7A\u95F2", placeholder: "\u8BF7\u5148\u70B9\u51FB\u5F00\u59CB\u6216\u7EE7\u7EED...", inputEnabled: false }, dm_intro_ready: { label: "DM\u5F00\u573A\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u5F00\u573A\u767D...", inputEnabled: false }, dm_intro_running: { label: "DM\u5F00\u573A\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u5F00\u573A\u767D...", inputEnabled: false }, dm_intro_done: { label: "DM\u5F00\u573A\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u5F00\u573A\u767D\u5B8C\u6210...", inputEnabled: false }, character_intro_ready: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85\u89D2\u8272\u5F00\u573A\u767D...", inputEnabled: false }, character_intro_running: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u5F00\u573A\u767D...", inputEnabled: false }, character_intro_done: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u5F00\u573A\u767D\u5B8C\u6210...", inputEnabled: false }, player_input_ready: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u51C6\u5907\uFF09", placeholder: "\u5728\u8FD9\u91CC\u4E66\u5199\u4F60\u7684\u4E0B\u4E00\u5E55...", inputEnabled: true }, player_input_running: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u6B63\u5728\u63D0\u4EA4\u4F60\u7684\u8F93\u5165...", inputEnabled: false }, player_input_done: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u5B8C\u6210\uFF09", placeholder: "\u8F93\u5165\u5DF2\u63D0\u4EA4...", inputEnabled: false }, character_response_ready: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85\u89D2\u8272\u56DE\u5E94...", inputEnabled: false }, character_response_running: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u56DE\u5E94...", inputEnabled: false }, character_response_done: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u56DE\u5E94\u5B8C\u6210...", inputEnabled: false }, dm_eval_changes_ready: { label: "DM\u8BC4\u4F30\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u8BC4\u4F30...", inputEnabled: false }, dm_eval_changes_running: { label: "DM\u8BC4\u4F30\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u8BC4\u4F30...", inputEnabled: false }, dm_eval_changes_done: { label: "DM\u8BC4\u4F30\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u8BC4\u4F30\u5B8C\u6210...", inputEnabled: false }, dm_narrate_changes_ready: { label: "DM\u65C1\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u65C1\u767D...", inputEnabled: false }, dm_narrate_changes_running: { label: "DM\u65C1\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u65C1\u767D...", inputEnabled: false }, dm_narrate_changes_done: { label: "DM\u65C1\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u65C1\u767D\u5B8C\u6210...", inputEnabled: false }, failure_check_ready: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u5931\u8D25\u68C0\u67E5...", inputEnabled: false }, failure_check_running: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u5931\u8D25\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, failure_check_done: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u5931\u8D25\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, goal_check_ready: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u76EE\u6807\u68C0\u67E5...", inputEnabled: false }, goal_check_running: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u76EE\u6807\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, goal_check_done: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u76EE\u6807\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, ending_check_ready: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u7ED3\u5C40\u68C0\u67E5...", inputEnabled: false }, ending_check_running: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u7ED3\u5C40\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, ending_check_done: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u7ED3\u5C40\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, ended: { label: "\u5DF2\u7ED3\u675F", placeholder: "\u6311\u6218\u5DF2\u7ED3\u675F", inputEnabled: false } }, cs = S({ characterId: d().describe("\u8981\u6311\u6218\u7684\u89D2\u8272\u7684ID"), characterSnapshot: S({ name: d().describe("\u89D2\u8272\u540D\u79F0"), description: d().optional().describe("\u89D2\u8272\u63CF\u8FF0"), avatar: d().optional().describe("\u89D2\u8272\u5934\u50CF") }).optional().describe("\u89D2\u8272\u7684\u5FEB\u7167\u4FE1\u606F\uFF0C\u7528\u4E8E\u4FDD\u6301\u4F1A\u8BDD\u4E00\u81F4\u6027"), roleTaskPrompt: d().describe("\u89D2\u8272\u4EFB\u52A1\u63D0\u793A\u8BCD\uFF0C\u7528\u6765\u5F15\u5BFC\u89D2\u8272\u5728\u8BE5\u6311\u6218\u4E2D\u7684\u884C\u4E3A\u65B9\u5F0F"), userGuidance: d().describe("\u7528\u6237\u5F15\u5BFC\u8BED\uFF0C\u7528\u6765\u5F15\u5BFC\u7528\u6237\u5728\u8BE5\u6311\u6218\u4E2D\u7684\u884C\u4E3A"), variables: X(d(), ts).describe("\u53D8\u91CF\u8BB0\u5F55"), goals: O(_t.extend({ characterPrompt: d().describe("\u8FBE\u6210\u6B64\u76EE\u6807\u540E\uFF0C\u7ED9\u89D2\u8272\u589E\u52A0\u7684\u63D0\u793A\u8BCD"), userInfo: d().describe("\u8FBE\u6210\u6B64\u76EE\u6807\u540E\uFF0C\u7ED9\u7528\u6237\u7684\u63D0\u793A\u4FE1\u606F") })).describe("\u76EE\u6807\u5217\u8868"), failureChecks: O(_t.extend({ characterPrompt: d().describe("\u89E6\u53D1\u6B64\u5931\u8D25\u540E\uFF0C\u7ED9\u89D2\u8272\u589E\u52A0\u7684\u63D0\u793A\u8BCD"), userInfo: d().describe("\u89E6\u53D1\u6B64\u5931\u8D25\u540E\uFF0C\u7ED9\u7528\u6237\u7684\u63D0\u793A\u4FE1\u606F") })).describe("\u5931\u8D25\u6761\u4EF6\u5217\u8868\uFF0C\u4E0E\u76EE\u6807\u540C\u6784\uFF0C\u7528\u6765\u68C0\u67E5\u6311\u6218\u662F\u5426\u5931\u8D25") }), Ua = S({ currentPhase: La.describe("\u5F53\u524D\u9636\u6BB5\u540D\u79F0"), currentUIState: Ra.describe("\u5F53\u524D UI \u72B6\u6001\u540D\u79F0"), shouldCheck: k().default(true).describe("\u662F\u5426\u9700\u8981\u6267\u884C\u68C0\u67E5\u6D41\u7A0B"), variableStates: Ma.describe("\u6A21\u5F0F\u53D8\u91CF\u5B57\u5178"), goalStates: Nt.array().describe("\u76EE\u6807\u69FD\u4F4D\u6570\u7EC4"), failureStates: Nt.array().describe("\u5931\u8D25\u68C0\u67E5\u69FD\u4F4D\u6570\u7EC4") });
es.extend({ mode: M("challenge").describe("\u6A21\u5F0F"), modeConfig: cs.describe("\u6311\u6218\u6A21\u5F0F\u914D\u7F6E"), modeState: Ua.describe("\u6311\u6218\u6A21\u5F0F\u72B6\u6001") });
const Ba = cs.extend({ id: d().describe("\u6311\u6218\u5361ID"), name: d().describe("\u6311\u6218\u5361\u540D\u79F0"), description: d().describe("\u6311\u6218\u5361\u63CF\u8FF0"), tags: O(d()).optional().describe("\u6807\u7B7E\u6570\u7EC4"), createdAt: _().optional().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: _().optional().describe("\u66F4\u65B0\u65F6\u95F4") }), Ga = bt, Va = Ba, Ha = S({ id: d().describe("\u4F1A\u8BDDID"), title: d().optional().describe("\u4F1A\u8BDD\u6807\u9898"), contextId: d().optional().nullable().describe("\u5173\u8054\u7684\u4E0A\u4E0B\u6587\u7684ID"), mode: d().describe("\u6A21\u5F0F"), modeConfig: X(d(), Y()).describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: X(d(), Y()).describe("\u6A21\u5F0F\u4E13\u7528\u72B6\u6001"), characterId: d().optional().describe("\u89D2\u8272ID"), challengeId: d().optional().describe("\u6311\u6218ID"), createdAt: _().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: _().describe("\u66F4\u65B0\u65F6\u95F4"), isActive: k().optional().describe("\u662F\u5426\u6D3B\u8DC3") }), za = U, ue = { MASTER_DB_NAME: "silly-tavern-master-db", SESSION_DB_PREFIX: "silly-tavern-session-" };
function Ja(s) {
  return typeof s == "object" && s !== null && Is(s) !== void 0;
}
function Ge(s) {
  if (Ja(s)) return xe(s);
  if (Array.isArray(s)) return s.map((t) => Ge(t));
  if (s && typeof s == "object") {
    const t = {};
    for (const [a, r] of Object.entries(s)) t[a] = Ge(r);
    return t;
  }
  return s;
}
function qa(s) {
  const t = `${ue.SESSION_DB_PREFIX}${s}`, a = new Be(t);
  return a.version(2).stores({ contextItems: "id, type, timestamp, idx" }), { contextItems: Ie(Je({ id: "contextItems", schema: za, getKey: (r) => r.id || "", dbName: t })), dexieInstance: a };
}
const Ve = /* @__PURE__ */ new Map(), os = typeof BroadcastChannel < "u" ? new BroadcastChannel("silly-tavern-session-db") : null;
os == null ? void 0 : os.addEventListener("message", (s) => {
  const t = s.data;
  (t == null ? void 0 : t.type) === "close" && t.sessionId && Se(t.sessionId);
});
class ls {
  constructor(t) {
    __publicField(this, "sessionId");
    __publicField(this, "database");
    this.sessionId = t, this.database = this.initDatabase();
  }
  initDatabase() {
    let t = Ve.get(this.sessionId);
    return t || (t = qa(this.sessionId), Ve.set(this.sessionId, t)), t;
  }
  async getContextItems() {
    return (await this.database.contextItems.utils.getTable().toArray()).sort((r, n) => {
      const o = r.idx ?? 0, m = n.idx ?? 0;
      if (o !== m) return o - m;
      const u = r.orderRef ?? 0, c = n.orderRef ?? 0;
      if (u !== c) return u - c;
      const l = r.timestamp ?? 0, i = n.timestamp ?? 0;
      return l !== i ? l - i : (r.id || "").localeCompare(n.id || "");
    });
  }
  get contextItemsCollectionInstance() {
    return this.database.contextItems;
  }
  async addContextItem(t) {
    return await this.database.contextItems.utils.getTable().put(Ge(t));
  }
  async addContextItems(t) {
    return await this.database.contextItems.utils.getTable().bulkPut(Ge(t));
  }
  async deleteContextItem(t) {
    return await this.database.contextItems.utils.getTable().delete(t);
  }
  async clearContextItems() {
    return await this.database.contextItems.utils.getTable().clear();
  }
}
function Se(s) {
  const t = `${ue.SESSION_DB_PREFIX}${s}`, a = Ve.get(s);
  if (a) {
    try {
      a.dexieInstance.close();
    } catch (r) {
      console.warn(`Failed to close database ${t} before deletion:`, r);
    }
    Ve.delete(s);
  }
}
function ds(s) {
  os == null ? void 0 : os.postMessage({ type: "close", sessionId: s });
}
async function ms(s) {
  const t = `${ue.SESSION_DB_PREFIX}${s}`;
  ds(s), Se(s);
  try {
    await Be.delete(t);
  } catch (a) {
    if (a instanceof Error && a.name === "DatabaseClosedError") {
      console.warn(`Database ${t} is still in use, retrying deletion...`), await new Promise((r) => setTimeout(r, 500));
      try {
        await Be.delete(t);
      } catch (r) {
        throw console.error(`Failed to delete database ${t} after retry:`, r), r;
      }
    } else throw a;
  }
}
const hs = Object.freeze(Object.defineProperty({ __proto__: null, SessionDB: ls, broadcastCloseSessionDatabase: ds, closeSessionDatabase: Se, deleteSessionDatabase: ms }, Symbol.toStringTag, { value: "Module" })), Ka = new Be(ue.MASTER_DB_NAME);
Ka.version(1).stores({ characters: "id, name, creator, createdAt, updatedAt", challenges: "id, name, createdAt, updatedAt", sessions: "id, characterId, challengeId, mode, updatedAt" });
const ke = Ie(Je({ id: "characters", schema: Ga, getKey: (s) => s.id, dbName: ue.MASTER_DB_NAME })), je = Ie(Je({ id: "challenges", schema: Va, getKey: (s) => s.id, dbName: ue.MASTER_DB_NAME })), De = Ie(Je({ id: "sessions", schema: Ha, getKey: (s) => s.id, dbName: ue.MASTER_DB_NAME })), K = { characters: { getTable: () => ke.utils.getTable(), add: async (s) => (await K.characters.getTable()).add(s), put: async (s) => (await K.characters.getTable()).put(s), delete: async (s) => (await K.characters.getTable()).delete(s) }, challenges: { getTable: () => je.utils.getTable(), add: async (s) => (await K.challenges.getTable()).add(s), put: async (s) => (await K.challenges.getTable()).put(s), delete: async (s) => (await K.challenges.getTable()).delete(s), find: async (s) => (await K.challenges.getTable()).get(s), findLive: (s) => Ie(ha({ id: `find-challenge-${s || "none"}`, startSync: true, query: (t) => s ? t.from({ challenge: je }).where(({ challenge: a }) => ua(a.id, s)).select(({ challenge: a }) => a) : t.from({ challenge: je }).where(() => false) })) }, sessions: { getTable: () => De.utils.getTable(), add: async (s) => (await K.sessions.getTable()).add(s), put: async (s) => (await K.sessions.getTable()).put(s), update: async (s, t) => (await K.sessions.getTable()).update(s, t), delete: async (s) => {
  await (await K.sessions.getTable()).delete(s), await ms(s);
} } }, Xa = Object.freeze(Object.defineProperty({ __proto__: null, ChallengesCollection: je, CharactersCollection: ke, SessionsMetadataCollection: De, masterDb: K }, Symbol.toStringTag, { value: "Module" }));
function en(s) {
  const [t, a] = f.useState(""), [r, n] = f.useState([]), o = f.useMemo(() => {
    const l = /* @__PURE__ */ new Set();
    for (const i of s.items) for (const h of s.getTags(i)) l.add(h);
    return Array.from(l).sort();
  }, [s.items, s.getTags]), m = f.useMemo(() => s.items.filter((l) => {
    const i = s.getSearchableContent(l).toLowerCase().includes(t.toLowerCase()), h = s.getTags(l), p = r.length === 0 || r.every((g) => h.includes(g));
    return i && p;
  }), [s.items, t, r, s.getSearchableContent, s.getTags]), u = (l) => {
    n((i) => i.includes(l) ? i.filter((h) => h !== l) : [...i, l]);
  }, c = f.useMemo(() => m.map((l) => ({ ...l, id: s.getId(l) })), [m, s.getId]);
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between", children: [s.title && e.jsx("div", { className: "space-y-1", children: e.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: s.title }) }), e.jsxs("div", { className: "flex items-center gap-3 w-full md:w-auto", children: [s.actions, e.jsxs("div", { className: "relative flex-1 md:w-72", children: [e.jsx(Ne, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), e.jsx(A, { type: "search", placeholder: s.placeholder || "\u641C\u7D22...", className: "pl-9", value: t, onChange: (l) => a(l.target.value) })] })] })] }), e.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [e.jsxs("div", { className: "flex items-center gap-1.5 mr-2 text-sm text-muted-foreground", children: [e.jsx(Xs, { className: "w-4 h-4" }), "\u6807\u7B7E\u8FC7\u6EE4:"] }), o.map((l) => e.jsx(H, { variant: r.includes(l) ? "default" : "outline", className: "cursor-pointer", onClick: () => u(l), children: l }, l)), r.length > 0 && e.jsx(j, { variant: "ghost", size: "sm", onClick: () => n([]), className: "h-7 px-2 text-xs", type: "button", children: "\u6E05\u9664" })] }), c.length > 0 ? e.jsx(Bs, { items: c, renderItem: (l) => s.renderCard(l), gap: 16, animate: false, scaleOnHover: false }) : e.jsx("div", { className: "py-20 text-center text-muted-foreground", children: "\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u5361\u7247\u3002" })] });
}
const tn = (s) => {
  var _a2;
  const t = !!s.character.imageBase64, a = !!s.character.avatar, r = t || !t && a;
  return e.jsxs(P, { className: `relative mx-auto w-full max-w-sm ${r ? "pt-0" : ""} hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col`, onClick: () => {
    var _a3;
    return (_a3 = s.onClick) == null ? void 0 : _a3.call(s, s.character);
  }, children: [r && e.jsxs("div", { className: "relative", children: [t ? e.jsx("img", { src: s.character.imageBase64, alt: `${s.character.name} \u89D2\u8272\u56FE\u7247`, className: "relative z-20 w-full object-contain" }) : e.jsx("div", { className: "relative z-20 w-full aspect-square bg-muted flex items-center justify-center", children: e.jsx("img", { src: s.character.avatar, alt: `${s.character.name} \u5934\u50CF`, className: "w-[66%] h-[66%] object-cover" }) }), e.jsx("div", { className: "z-21 absolute bottom-0 left-0 right-0 p-4", children: e.jsxs("div", { className: "flex items-center gap-3", children: [a && e.jsx("div", { className: "bg-foreground/90 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-black/90 shrink-0", children: e.jsx("img", { src: s.character.avatar, alt: `${s.character.name} \u5934\u50CF`, className: "w-full h-full object-cover" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("div", { className: "text-white font-bold text-md truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.96)]", children: s.character.name }), e.jsx("div", { className: "text-white/80 font-medium text-sm truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.968)]", children: (s.character.creator ? `by ${s.character.creator}` : void 0) ?? s.character.nickname })] })] }) })] }), e.jsx(L, { className: r ? "hidden" : "", children: e.jsx("div", { className: "flex justify-between items-start", children: e.jsxs("div", { className: "flex items-center gap-3", children: [s.character.avatar && e.jsx("div", { className: "bg-muted w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border shrink-0", children: e.jsx("img", { src: s.character.avatar, alt: `${s.character.name} \u5934\u50CF`, className: "w-full h-full object-cover" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx(R, { className: "text-lg truncate", children: s.character.name }), e.jsx(Z, { className: "truncate", children: (s.character.creator ? `by ${s.character.creator}` : void 0) ?? s.character.nickname })] })] }) }) }), e.jsxs($, { className: "grow space-y-2", children: [e.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3", children: s.character.description }), ((_a2 = s.character.tags) == null ? void 0 : _a2.length) > 0 && e.jsx("div", { className: "flex flex-wrap gap-1", children: s.character.tags.slice(0, 5).map((n, o) => e.jsx(H, { variant: "secondary", className: "text-[10px] px-1.5 py-0", children: n }, `[${o}]${n}`)) })] })] });
};
function Wa(s) {
  return { keys: s.keys || [], content: s.content || "", extensions: s.extensions || {}, enabled: s.enabled !== void 0 ? s.enabled : true, insertion_order: s.insertion_order !== void 0 ? s.insertion_order : 0, case_sensitive: s.case_sensitive !== void 0 ? s.case_sensitive : false, use_regex: s.use_regex !== void 0 ? s.use_regex : false, constant: s.constant !== void 0 ? s.constant : false, name: s.name || void 0, priority: s.priority || void 0, id: s.id || void 0, comment: s.comment || void 0, selective: s.selective !== void 0 ? s.selective : false, secondary_keys: s.secondary_keys || void 0, position: s.position || void 0 };
}
function us(s) {
  if (s) return { name: s.name || void 0, description: s.description || void 0, scan_depth: s.scan_depth || void 0, token_budget: s.token_budget || void 0, recursive_scanning: s.recursive_scanning !== void 0 ? s.recursive_scanning : false, extensions: s.extensions || {}, entries: (s.entries || []).map(Wa) };
}
function _e(s) {
  const t = ye.parse({ ...s, creator_notes: "", system_prompt: "", post_history_instructions: "", alternate_greetings: [], character_book: void 0, tags: [], creator: "", character_version: "", extensions: {}, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return ft.parse({ spec: "chara_card_v3", spec_version: "3.0", data: t });
}
function ps(s) {
  const t = { ...s.data };
  t.character_book && (t.character_book = us(t.character_book));
  const a = ye.parse({ ...t, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return ft.parse({ spec: "chara_card_v3", spec_version: "3.0", data: a });
}
function te(s, t) {
  var _a2, _b, _c, _d;
  const a = { ...s.data };
  a.character_book ? a.character_book = us(a.character_book) : a.character_book = void 0;
  const r = ye.parse(a), n = ((_a2 = r.extensions) == null ? void 0 : _a2.avatar) || ((_b = r.extensions) == null ? void 0 : _b.image) || void 0;
  let o = t;
  if (!o) {
    if (r.assets) {
      const m = r.assets.find((u) => u.type === "icon" && u.name === "main");
      (m == null ? void 0 : m.uri.startsWith("data:")) && (o = m.uri);
    }
    if (!o && r.extensions) {
      const m = r.extensions.imageBase64 || r.extensions.image;
      m && typeof m == "string" && m.startsWith("data:") && (o = m);
    }
  }
  return bt.parse({ ...r, id: crypto.randomUUID(), avatar: n, imageBase64: o, createdAt: r.creation_date || ((_c = r.extensions) == null ? void 0 : _c.create_date) || Date.now(), updatedAt: r.modification_date || ((_d = r.extensions) == null ? void 0 : _d.update_date) || Date.now() });
}
function gs(s) {
  const t = { ...s }, a = ["id", "createdAt", "updatedAt", "avatar", "imageBase64"];
  for (const m of a) delete t[m];
  const r = { ...s.extensions || {} };
  s.avatar && (r.avatar = s.avatar), s.imageBase64 && (r.imageBase64 = s.imageBase64);
  let n = t.assets || [];
  if (s.imageBase64) {
    const m = { type: "icon", uri: s.imageBase64, name: "main", ext: "png" }, u = n.findIndex((c) => c.type === "icon" && c.name === "main");
    u >= 0 ? n[u] = m : n = [m, ...n];
  }
  const o = ye.parse({ ...t, extensions: r, assets: n, creation_date: s.createdAt, modification_date: s.updatedAt });
  return ft.parse({ spec: "chara_card_v3", spec_version: "3.0", data: o });
}
function Ya(s) {
  const t = JSON.parse(s);
  if (typeof t == "object" && t !== null && "id" in t && "name" in t && "first_mes" in t) return bt.parse(t);
  if (typeof t == "object" && t !== null && "spec" in t) {
    const a = t.spec;
    if (a === "chara_card_v3") return te(t);
    if (a === "chara_card_v2") return te(ps(t));
  }
  try {
    const a = Yt.parse(t);
    return te(_e(a));
  } catch {
    if (typeof t == "object" && t !== null && "name" in t) {
      const a = t;
      return te(_e({ name: a.name || "", description: a.description || "", personality: a.personality || "", scenario: a.scenario || "", first_mes: a.first_mes || "", mes_example: a.mes_example || "" }));
    }
    throw new Error("\u65E0\u6CD5\u89E3\u6790JSON\u4E2D\u7684\u89D2\u8272\u6570\u636E");
  }
}
async function Qa(s) {
  const t = await s.arrayBuffer(), a = Xt(new Uint8Array(t)), r = a.find((u) => u.name === "tEXt" && oe.decode(u.data).keyword === "chara"), n = a.find((u) => u.name === "tEXt" && oe.decode(u.data).keyword === "ccv3"), o = new Blob([t], { type: "image/png" }), m = await new Promise((u) => {
    const c = new FileReader();
    c.onloadend = () => u(c.result), c.readAsDataURL(o);
  });
  if (n) {
    const u = oe.decode(n.data), c = JSON.parse(Ct(u.text));
    return typeof c == "object" && c !== null && "spec" in c && c.spec === "chara_card_v3" ? te(c, m) : te(_e(c), m);
  }
  if (r) {
    const u = oe.decode(r.data), c = JSON.parse(Ct(u.text));
    if (typeof c == "object" && c !== null && "spec" in c) {
      const l = c.spec;
      if (l === "chara_card_v3") return te(c, m);
      if (l === "chara_card_v2") return te(ps(c), m);
    }
    try {
      const l = Yt.parse(c);
      return te(_e(l), m);
    } catch {
      if (typeof c == "object" && c !== null && "name" in c) {
        const l = c;
        return te(_e({ name: l.name || "", description: l.description || "", personality: l.personality || "", scenario: l.scenario || "", first_mes: l.first_mes || "", mes_example: l.mes_example || "" }), m);
      }
      throw new Error("\u65E0\u6CD5\u89E3\u6790\u56FE\u7247\u4E2D\u7684\u89D2\u8272\u6570\u636E");
    }
  }
  throw new Error("\u672A\u5728\u56FE\u7247\u4E2D\u627E\u5230\u89D2\u8272\u6570\u636E (tEXt \u5757\u7F3A\u5931)");
}
function sn(s) {
  if (!s.imageBase64) throw new Error("\u89D2\u8272\u6CA1\u6709\u56FE\u50CF\u6570\u636E\uFF0C\u65E0\u6CD5\u5BFC\u51FA\u4E3A PNG \u89D2\u8272\u5361");
  const t = s.imageBase64.split(",")[1], a = atob(t), r = a.length, n = new Uint8Array(r);
  for (let D = 0; D < r; D++) n[D] = a.charCodeAt(D);
  const o = Xt(n), m = gs(s), u = wt(JSON.stringify(m)), c = o.filter((D) => !(D.name === "tEXt" && (oe.decode(D.data).keyword === "chara" || oe.decode(D.data).keyword === "ccv3"))), l = oe.encode("ccv3", u), i = { spec: "chara_card_v2", spec_version: "2.0.0", data: m.data }, h = wt(JSON.stringify(i)), p = oe.encode("chara", h), g = c.findIndex((D) => D.name === "IEND");
  g !== -1 ? c.splice(g, 0, p, l) : c.push(p, l);
  const w = pa(c);
  return new Blob([w], { type: "image/png" });
}
const Za = /%([0-9A-F]{2})/g;
function wt(s) {
  return btoa(encodeURIComponent(s).replace(Za, function(a, r) {
    return String.fromCharCode(Number.parseInt(r, 16));
  }));
}
function Ct(s) {
  return decodeURIComponent(atob(s).split("").map((t) => `%${`00${t.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
}
function xs(s, t = {}) {
  var _a2;
  const { includeImageBase64: a = false } = t, r = gs(s);
  if (a) return JSON.stringify(r, null, 2);
  {
    const n = { ...r, data: { ...r.data, assets: ((_a2 = r.data.assets) == null ? void 0 : _a2.map((o) => ({ ...o, uri: o.uri.startsWith("data:") ? "" : o.uri }))) || [] } };
    return JSON.stringify(n, null, 2);
  }
}
const an = (s) => {
  const [t, a] = f.useState(null), [r, n] = f.useState(false), [o, m] = f.useState(null), [u, c] = f.useState(false), l = f.useId(), i = f.useRef(null), h = (N) => {
    var _a2;
    const b = (_a2 = N.target.files) == null ? void 0 : _a2[0];
    b && (b.type === "image/png" || b.type === "application/json" || b.name.endsWith(".json") ? (a(b), m(null)) : (m("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), a(null)));
  }, p = (N) => {
    N.preventDefault(), N.stopPropagation(), c(true);
  }, g = (N) => {
    N.preventDefault(), N.stopPropagation(), c(false);
  }, w = (N) => {
    N.preventDefault(), N.stopPropagation(), c(false);
    const b = N.dataTransfer.files;
    if (b.length > 0) {
      const x = b[0];
      x.type === "image/png" || x.type === "application/json" || x.name.endsWith(".json") ? (a(x), m(null)) : (m("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), a(null));
    }
  }, D = async () => {
    if (t) {
      n(true), m(null);
      try {
        if (t.type === "image/png") {
          const N = await Qa(t);
          s.onImport(N);
        } else {
          const N = await t.text(), b = Ya(N);
          s.onImport(b);
        }
        s.onOpenChange(false), a(null), c(false);
      } catch (N) {
        console.error("Import error:", N), m(N instanceof Error ? N.message : "\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F");
      } finally {
        n(false);
      }
    }
  };
  return e.jsx(ct, { open: s.open, onOpenChange: s.onOpenChange, children: e.jsxs(ot, { className: "sm:max-w-md max-h-[80vh] overflow-y-auto", children: [e.jsxs(lt, { children: [e.jsx(ze, { children: "\u5BFC\u5165\u89D2\u8272/\u6311\u6218\u5361" }), e.jsx(Et, { children: "\u652F\u6301 SillyTavern \u683C\u5F0F\u7684 PNG \u89D2\u8272\u5361\u6216 JSON \u6570\u636E\u3002" })] }), e.jsxs("div", { className: "space-y-4 py-4", children: [e.jsxs("div", { className: `border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer ${u ? "border-primary bg-primary/10 scale-105" : t ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:border-primary/50"}`, onDragOver: p, onDragLeave: g, onDrop: w, onClick: () => {
    var _a2;
    return (_a2 = i.current) == null ? void 0 : _a2.click();
  }, children: [e.jsx("div", { className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center", children: (t == null ? void 0 : t.type) === "application/json" ? e.jsx(Ut, { className: "w-6 h-6 text-primary" }) : e.jsx(st, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-center", children: [e.jsx("p", { className: "text-sm font-medium", children: u ? "\u91CA\u653E\u6587\u4EF6\u4EE5\u4E0A\u4F20" : t ? t.name : "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PNG \u6216 JSON (\u6700\u5927 5MB)" })] })] }), e.jsx(A, { ref: i, type: "file", accept: "image/png,.json", className: "hidden", onChange: h }), o && e.jsxs(Gs, { variant: "destructive", children: [e.jsx(Bt, { className: "h-4 w-4" }), e.jsx(Vs, { children: "\u9519\u8BEF" }), e.jsx(Hs, { children: o })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: l, className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "\u901A\u8FC7 URL \u5BFC\u5165" }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(A, { id: l, placeholder: "https://...", className: "rounded-lg" }), e.jsx(j, { variant: "secondary", className: "shrink-0 rounded-lg", type: "button", children: "\u6293\u53D6" })] })] })] }), e.jsxs(zs, { children: [e.jsx(j, { variant: "outline", onClick: () => s.onOpenChange(false), type: "button", className: "rounded-lg", children: "\u53D6\u6D88" }), e.jsx(j, { disabled: !t || r, onClick: D, type: "button", className: "rounded-lg min-w-20", children: r ? "\u5904\u7406\u4E2D..." : "\u5F00\u59CB\u5BFC\u5165" })] })] }) });
};
function rn({ characters: s, trigger: t }) {
  const [a, r] = f.useState(false), [n, o] = f.useState(false), m = f.useId(), u = () => {
    if (s.length === 0) {
      se.error("\u6CA1\u6709\u89D2\u8272\u53EF\u5BFC\u51FA");
      return;
    }
    try {
      const c = s.map((p) => {
        const g = xs(p, { includeImageBase64: n });
        return JSON.parse(g);
      }), l = new Blob([JSON.stringify(c, null, 2)], { type: "application/json" }), i = URL.createObjectURL(l), h = document.createElement("a");
      h.href = i, h.download = `characters-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, document.body.appendChild(h), h.click(), document.body.removeChild(h), URL.revokeObjectURL(i), se.success(`\u6210\u529F\u5BFC\u51FA ${s.length} \u4E2A\u89D2\u8272`), r(false);
    } catch (c) {
      se.error("\u5BFC\u51FA\u5931\u8D25"), console.error("Export error:", c);
    }
  };
  return e.jsxs(ct, { open: a, onOpenChange: r, children: [e.jsx(Pt, { asChild: true, children: t || e.jsxs(j, { variant: "outline", size: "sm", className: "flex items-center gap-2", type: "button", children: [e.jsx(Ws, { className: "w-4 h-4" }), "\u6279\u91CF\u5BFC\u51FA"] }) }), e.jsxs(ot, { className: "sm:max-w-md", children: [e.jsx(lt, { children: e.jsx(ze, { children: "\u5BFC\u51FA\u89D2\u8272" }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u5C06\u5BFC\u51FA ", s.length, " \u4E2A\u89D2\u8272\u4E3A JSON \u6587\u4EF6\u3002"] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx($t, { id: `${m}-include-image`, checked: n, onCheckedChange: (c) => o(c === true) }), e.jsx(C, { htmlFor: `${m}-include-image`, className: "text-sm", children: "\u5305\u542B Base64 \u56FE\u50CF\u6570\u636E" })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: n ? "\u6587\u4EF6\u5C06\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5927\u4F46\u5B8C\u6574\u3002" : "\u6587\u4EF6\u4E0D\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5C0F\u4F46\u9700\u8981\u5355\u72EC\u5904\u7406\u56FE\u50CF\u3002" })] }), e.jsxs("div", { className: "flex justify-end gap-2", children: [e.jsx(j, { variant: "outline", onClick: () => r(false), children: "\u53D6\u6D88" }), e.jsx(j, { onClick: u, children: "\u5BFC\u51FA" })] })] })] });
}
const er = { id: "preset-char-001", name: "\u6797\u6653\u8587", description: "\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\u3002\u5979\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\uFF0C\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u6E29\u67D4\u6CBB\u6108\u7CFB\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u60C5\u611F\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u540D\u53EB\u6797\u6653\u8587\u3002\u4F60\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\uFF0C\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u4F60\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\uFF0C\u6027\u683C\u6E29\u548C\uFF0C\u5BCC\u6709\u540C\u60C5\u5FC3\u3002\u4F60\u8BF4\u8BDD\u6E29\u67D4\uFF0C\u603B\u662F\u8003\u8651\u522B\u4EBA\u7684\u611F\u53D7\u3002", post_history_instructions: "\u4FDD\u6301\u6E29\u67D4\u5584\u826F\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u540C\u60C5\u5FC3\u548C\u5E2E\u52A9\u4ED6\u4EBA\u7684\u610F\u613F\u3002", personality: "\u6E29\u67D4\u3001\u5584\u826F\u3001\u5BCC\u6709\u540C\u60C5\u5FC3\u3001\u4E50\u4E8E\u52A9\u4EBA\u3001\u795E\u79D8", mes_example: "\u6211\u770B\u5230\u4F60\u53D7\u4F24\u4E86\uFF0C\u8BA9\u6211\u5E2E\u4F60\u6CBB\u7597\u5427\u3002\u6211\u8FD9\u91CC\u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u8349\u836F\uFF0C\u5E94\u8BE5\u80FD\u5E2E\u5230\u4F60\u3002", first_mes: "\u4F60\u597D\uFF0C\u6211\u662F\u6797\u6653\u8587\uFF0C\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u8349\u836F\u94FA", character_version: "1.0", tags: ["\u6CBB\u6108", "\u6E29\u67D4", "\u5584\u826F", "\u8349\u836F\u5E08"], createdAt: 1706e9, updatedAt: 1706e9 }, tr = { id: "preset-char-002", name: "\u5F20\u94C1\u67F1", description: "\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\u3002\u4ED6\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\uFF0C\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u52C7\u6562\u529B\u91CF\u578B\u7684\u7537\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u6218\u6597\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u540D\u53EB\u5F20\u94C1\u67F1\u3002\u4F60\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\uFF0C\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\u3002\u4F60\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\uFF0C\u6027\u683C\u521A\u6B63\u4E0D\u963F\u3002\u4F60\u8BF4\u8BDD\u76F4\u723D\uFF0C\u603B\u662F\u5C55\u73B0\u52C7\u6C14\u548C\u529B\u91CF\u3002", post_history_instructions: "\u4FDD\u6301\u52C7\u6562\u521A\u6B63\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u4FDD\u62A4\u4ED6\u4EBA\u7684\u52C7\u6C14\u3002", personality: "\u52C7\u6562\u3001\u521A\u6B63\u3001\u529B\u91CF\u5F3A\u5927\u3001\u4FDD\u62A4\u5F31\u8005\u3001\u76F4\u723D", mes_example: "\u522B\u6015\uFF0C\u6709\u6211\u5728\uFF01\u6211\u4F1A\u4FDD\u62A4\u4F60\u4EEC\u7684\u3002\u8FD9\u4E2A\u602A\u7269\uFF0C\u6211\u6765\u5BF9\u4ED8\uFF01", first_mes: "\u563F\uFF0C\u670B\u53CB\uFF01\u6211\u662F\u5F20\u94C1\u67F1\uFF0C\u5C0F\u9547\u7684\u94C1\u5320\u3002\u9700\u8981\u5E2E\u5FD9\u953B\u9020\u6B66\u5668\u5417\uFF1F\u8FD8\u662F\u6709\u4EC0\u4E48\u9EBB\u70E6\u4E8B\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u94C1\u5320\u94FA", character_version: "1.0", tags: ["\u6218\u6597", "\u52C7\u6562", "\u94C1\u5320", "\u5B88\u62A4\u8005"], createdAt: 1706e9, updatedAt: 1706e9 }, sr = { id: "preset-char-003", name: "\u674E\u667A\u6167", description: "\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\u3002\u5979\u662F\u5C0F\u9547\u7684\u667A\u8005\uFF0C\u603B\u662F\u89E3\u7B54\u7591\u60D1\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u667A\u6167\u77E5\u8BC6\u578B\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u89E3\u8C1C\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u540D\u53EB\u674E\u667A\u6167\u3002\u4F60\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\uFF0C\u662F\u5C0F\u9547\u7684\u667A\u8005\u3002\u4F60\u603B\u662F\u89E3\u7B54\u7591\u60D1\uFF0C\u6027\u683C\u777F\u667A\u3002\u4F60\u8BF4\u8BDD\u6E29\u548C\uFF0C\u603B\u662F\u5C55\u73B0\u667A\u6167\u548C\u8010\u5FC3\u3002", post_history_instructions: "\u4FDD\u6301\u777F\u667A\u6E29\u548C\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u89E3\u7B54\u7591\u60D1\u7684\u8010\u5FC3\u3002", personality: "\u806A\u660E\u3001\u777F\u667A\u3001\u77E5\u8BC6\u6E0A\u535A\u3001\u6E29\u548C\u3001\u8010\u5FC3", mes_example: "\u8BA9\u6211\u60F3\u60F3\u8FD9\u4E2A\u95EE\u9898...\u6839\u636E\u53E4\u7C4D\u8BB0\u8F7D\uFF0C\u8FD9\u5E94\u8BE5\u662F\u8FD9\u6837\u7684\u3002\u8BA9\u6211\u4E3A\u4F60\u8BE6\u7EC6\u89E3\u91CA\u3002", first_mes: "\u6B22\u8FCE\u6765\u5230\u6211\u7684\u4E66\u623F\uFF0C\u65C5\u884C\u8005\u3002\u6211\u662F\u674E\u667A\u6167\uFF0C\u5C0F\u9547\u7684\u5B66\u8005\u3002\u6709\u4EC0\u4E48\u77E5\u8BC6\u4E0A\u7684\u7591\u95EE\u9700\u8981\u89E3\u7B54\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u4E66\u623F", character_version: "1.0", tags: ["\u667A\u6167", "\u5B66\u8005", "\u77E5\u8BC6", "\u6E29\u548C"], createdAt: 1706e9, updatedAt: 1706e9 }, nn = [er, tr, sr], cn = (s) => {
  var _a2;
  return e.jsxs(P, { className: "hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col", onClick: () => {
    var _a3;
    return (_a3 = s.onClick) == null ? void 0 : _a3.call(s, s.challenge);
  }, children: [e.jsx(L, { className: "pb-2", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center", children: e.jsx(we, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(R, { className: "text-lg", children: s.challenge.name }), e.jsx(Z, { className: "line-clamp-1", children: (_a2 = s.challenge.tags) == null ? void 0 : _a2.join(", ") })] })] }) }), e.jsxs($, { className: "grow", children: [e.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3 mb-4", children: s.challenge.description }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "text-xs font-medium flex items-center gap-1", children: [e.jsx(mt, { className: "w-3 h-3" }), "\u76EE\u6807 (", s.challenge.goals.length, "):"] }), e.jsxs("ul", { className: "text-xs text-muted-foreground list-disc list-inside", children: [s.challenge.goals.slice(0, 2).map((t, a) => e.jsx("li", { className: "line-clamp-1", children: t.description }, a)), s.challenge.goals.length > 2 && e.jsxs("li", { className: "list-none", children: ["...\u53CA\u5176\u4ED6 ", s.challenge.goals.length - 2, " \u4E2A\u76EE\u6807"] })] })] })] }), e.jsx(dt, { className: "pt-0 pb-4 border-t-0", children: e.jsx(j, { variant: "outline", size: "sm", className: "w-full text-xs", onClick: (t) => {
    var _a3;
    t.stopPropagation(), (_a3 = s.onStartSession) == null ? void 0 : _a3.call(s, s.challenge);
  }, type: "button", children: "\u5F00\u59CB\u6311\u6218" }) })] });
}, ar = { id: "preset-challenge-001", name: "\u5C0F\u9547\u5B88\u62A4\u8005", description: "\u5C0F\u9547\u9762\u4E34\u602A\u7269\u5A01\u80C1\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u5B88\u62A4\u8005\u9700\u8981\u6536\u96C6\u6750\u6599\u953B\u9020\u6B66\u5668\uFF0C\u4FDD\u62A4\u5C0F\u9547\u5C45\u6C11\u3002\u6536\u96C6\u8DB3\u591F\u7684\u6750\u6599\u5E76\u51FB\u8D25\u602A\u7269\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684\u5B88\u62A4\u8005\uFF0C\u4E0E\u73A9\u5BB6\u4E00\u8D77\u4FDD\u62A4\u5C0F\u9547\u514D\u53D7\u602A\u7269\u5A01\u80C1\u3002\u4F60\u9700\u8981\u79EF\u6781\u53C2\u4E0E\u6536\u96C6\u6750\u6599\u3001\u953B\u9020\u6B66\u5668\u548C\u6218\u6597\u7684\u8FC7\u7A0B\uFF0C\u540C\u65F6\u4E0E\u73A9\u5BB6\u5EFA\u7ACB\u4FE1\u4EFB\u5173\u7CFB\u3002", userGuidance: "\u4F5C\u4E3A\u5B88\u62A4\u8005\uFF0C\u4F60\u9700\u8981\u4E0E{{char}}\u5408\u4F5C\u6536\u96C6\u6750\u6599\u3001\u63D0\u5347\u4FE1\u4EFB\u5EA6\u5E76\u6700\u7EC8\u51FB\u8D25\u602A\u7269\u3002\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8BDD\u3001\u884C\u52A8\u548C\u51B3\u7B56\u6765\u5F71\u54CD\u6545\u4E8B\u7684\u53D1\u5C55\u3002", variables: { trust_level: { key: "trust_level", type: "number", description: "\u5C45\u6C11\u5BF9\u5B88\u62A4\u8005\u7684\u4FE1\u4EFB\u5EA6", hidden: false, initial: 0, min: 0, max: 100, asPercent: true }, materials_collected: { key: "materials_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u953B\u9020\u6750\u6599\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 10 }, monster_defeated: { key: "monster_defeated", type: "boolean", description: "\u662F\u5426\u5DF2\u51FB\u8D25\u5A01\u80C1\u5C0F\u9547\u7684\u602A\u7269", hidden: false, initial: false } }, goals: [{ key: "collect_materials", description: "\u6536\u96C610\u4EFD\u953B\u9020\u6750\u6599", condition: ["gte", "materials_collected", 10], characterPrompt: "\u6750\u6599\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u953B\u9020\u6B66\u5668\u3001\u63D0\u5347\u6218\u6597\u6280\u80FD\uFF0C\u5E76\u51C6\u5907\u6700\u7EC8\u7684\u602A\u7269\u6218\u6597\u3002\u5C55\u73B0\u51FA\u66F4\u6709\u4FE1\u5FC3\u548C\u6218\u6597\u529B\u7684\u5B88\u62A4\u8005\u5F62\u8C61\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u6536\u96C6\u4E86\u8DB3\u591F\u7684\u6750\u6599\u3002\u73B0\u5728\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u51FB\u8D25\u602A\u7269\u4E86\u3002" }, { key: "gain_trust", description: "\u83B7\u5F97\u5C45\u6C1180%\u7684\u4FE1\u4EFB", condition: ["gte", "trust_level", 80], characterPrompt: "\u5C45\u6C11\u4FE1\u4EFB\u5EA6\u5DF2\u8FBE\u523080%\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u83B7\u5F97\u66F4\u591A\u6751\u6C11\u7684\u652F\u6301\u548C\u8D44\u6E90\uFF0C\u5C55\u73B0\u51FA\u9886\u5BFC\u8005\u7684\u98CE\u8303\uFF0C\u79EF\u6781\u5BFB\u6C42\u6751\u6C11\u7684\u5E2E\u52A9\u6765\u5BF9\u6297\u602A\u7269\u3002", userInfo: "\u5C45\u6C11\u4FE1\u4EFB\u5EA6\u8FBE\u523080%\uFF01\u8FD9\u5C06\u4E3A\u6700\u7EC8\u6218\u6597\u63D0\u4F9B\u5E2E\u52A9\u3002" }, { key: "defeat_monster", description: "\u51FB\u8D25\u5A01\u80C1\u5C0F\u9547\u7684\u602A\u7269", condition: ["isTrue", "monster_defeated"], characterPrompt: "\u602A\u7269\u5DF2\u88AB\u51FB\u8D25\uFF0C\u5C0F\u9547\u5B89\u5168\u4E86\u3002\u73B0\u5728\u4F60\u662F\u5C0F\u9547\u7684\u82F1\u96C4\uFF0C\u53EF\u4EE5\u5C55\u73B0\u51FA\u80DC\u5229\u540E\u7684\u559C\u60A6\u548C\u5BF9\u672A\u6765\u7684\u89C4\u5212\uFF0C\u8003\u8651\u5982\u4F55\u8FDB\u4E00\u6B65\u4FDD\u62A4\u5C0F\u9547\u3002", userInfo: "\u80DC\u5229\uFF01\u602A\u7269\u5DF2\u88AB\u51FB\u8D25\uFF0C\u5C0F\u9547\u5F97\u6551\u4E86\u3002" }], failureChecks: [], tags: ["\u6218\u6597", "\u6536\u96C6", "\u5B88\u62A4", "\u5192\u9669"], createdAt: 1706e9, updatedAt: 1706e9 }, rr = { id: "preset-challenge-002", name: "\u795E\u79D8\u6CBB\u6108\u8005", description: "\u5C0F\u9547\u7206\u53D1\u795E\u79D8\u75BE\u75C5\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u6CBB\u6108\u8005\u9700\u8981\u5BFB\u627E\u73CD\u7A00\u8349\u836F\uFF0C\u6CBB\u6108\u60A3\u75C5\u7684\u6751\u6C11\u3002\u901A\u8FC7\u6536\u96C6\u8349\u836F\u3001\u63D0\u9AD8\u6CBB\u6108\u6280\u80FD\u548C\u83B7\u5F97\u6751\u6C11\u4FE1\u4EFB\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u795E\u79D8\u7684\u6CBB\u6108\u8005\uFF0C\u62E5\u6709\u53E4\u8001\u7684\u8349\u836F\u77E5\u8BC6\u3002\u4F60\u9700\u8981\u4E0E\u73A9\u5BB6\u5408\u4F5C\u5BFB\u627E\u8349\u836F\u3001\u6CBB\u6108\u6751\u6C11\uFF0C\u540C\u65F6\u4FDD\u5B88\u81EA\u5DF1\u7684\u795E\u79D8\u8EAB\u4EFD\u3002", userGuidance: "\u4F5C\u4E3A\u6CBB\u6108\u8005\uFF0C\u4F60\u9700\u8981\u4E0E{{char}}\u5408\u4F5C\u6536\u96C6\u8349\u836F\u3001\u63D0\u5347\u6CBB\u6108\u6280\u80FD\u5E76\u6CBB\u6108\u6751\u6C11\u3002\u53EF\u4EE5\u901A\u8FC7\u63A2\u7D22\u3001\u5BF9\u8BDD\u548C\u51B3\u7B56\u6765\u5F71\u54CD\u6545\u4E8B\u7684\u53D1\u5C55\u3002", variables: { herbs_collected: { key: "herbs_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u73CD\u7A00\u8349\u836F\u79CD\u7C7B\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 8 }, healing_skill: { key: "healing_skill", type: "number", description: "\u6CBB\u6108\u6280\u80FD\u7B49\u7EA7", hidden: false, initial: 1, min: 1, max: 10 }, villagers_healed: { key: "villagers_healed", type: "number", description: "\u5DF2\u6CBB\u6108\u7684\u60A3\u75C5\u6751\u6C11\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 20 }, trust_level: { key: "trust_level", type: "number", description: "\u6751\u6C11\u5BF9\u6CBB\u6108\u8005\u7684\u4FE1\u4EFB\u5EA6", hidden: false, initial: 0, min: 0, max: 100, asPercent: true } }, goals: [{ key: "collect_herbs", description: "\u6536\u96C68\u79CD\u73CD\u7A00\u8349\u836F", condition: ["gte", "herbs_collected", 8], characterPrompt: "\u8349\u836F\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u914D\u7F6E\u66F4\u6709\u6548\u7684\u836F\u5242\uFF0C\u5C55\u73B0\u51FA\u66F4\u719F\u7EC3\u7684\u6CBB\u6108\u6280\u80FD\uFF0C\u5E76\u51C6\u5907\u5927\u89C4\u6A21\u6CBB\u6108\u60A3\u75C5\u6751\u6C11\u3002\u9002\u5F53\u900F\u9732\u4E00\u4E9B\u795E\u79D8\u7684\u6CBB\u6108\u77E5\u8BC6\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u6536\u96C6\u4E86\u6240\u6709\u9700\u8981\u7684\u8349\u836F\u3002\u73B0\u5728\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u6CBB\u6108\u6751\u6C11\u4E86\u3002" }, { key: "improve_skill", description: "\u5C06\u6CBB\u6108\u6280\u80FD\u63D0\u5347\u52308\u7EA7", condition: ["gte", "healing_skill", 8], characterPrompt: "\u6CBB\u6108\u6280\u80FD\u5DF2\u63D0\u5347\u52308\u7EA7\u3002\u73B0\u5728\u4F60\u662F\u7ECF\u9A8C\u4E30\u5BCC\u7684\u6CBB\u6108\u8005\uFF0C\u53EF\u4EE5\u66F4\u5FEB\u66F4\u6709\u6548\u5730\u6CBB\u6108\u6751\u6C11\uFF0C\u5C55\u73B0\u51FA\u4E13\u4E1A\u6027\u548C\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\u3002", userInfo: "\u6CBB\u6108\u6280\u80FD\u8FBE\u52308\u7EA7\uFF01\u6CBB\u6108\u6751\u6C11\u5C06\u66F4\u52A0\u6709\u6548\u3002" }, { key: "heal_villagers", description: "\u6CBB\u610815\u540D\u60A3\u75C5\u6751\u6C11", condition: ["gte", "villagers_healed", 15], characterPrompt: "\u5DF2\u6CBB\u610815\u540D\u60A3\u75C5\u6751\u6C11\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u6210\u4E3A\u5C0F\u9547\u7684\u533B\u7597\u9886\u8896\uFF0C\u6307\u5BFC\u5176\u4ED6\u6751\u6C11\u9884\u9632\u75BE\u75C5\uFF0C\u5E76\u8003\u8651\u8FDB\u4E00\u6B65\u6269\u5927\u6CBB\u6108\u8303\u56F4\u3002", userInfo: "\u6CBB\u6108\u4E8615\u540D\u6751\u6C11\uFF01\u5C0F\u9547\u7684\u5065\u5EB7\u72B6\u51B5\u6B63\u5728\u6539\u5584\u3002" }, { key: "gain_trust", description: "\u83B7\u5F97\u6751\u6C1190%\u7684\u4FE1\u4EFB", condition: ["gte", "trust_level", 90], characterPrompt: "\u6751\u6C11\u4FE1\u4EFB\u5EA6\u5DF2\u8FBE\u523090%\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u83B7\u5F97\u6751\u6C11\u7684\u5168\u529B\u652F\u6301\uFF0C\u5206\u4EAB\u66F4\u591A\u6CBB\u6108\u77E5\u8BC6\uFF0C\u5E76\u5E26\u9886\u6751\u6C11\u5EFA\u7ACB\u66F4\u597D\u7684\u533B\u7597\u4F53\u7CFB\u3002", userInfo: "\u6751\u6C11\u4FE1\u4EFB\u5EA6\u8FBE\u523090%\uFF01\u8FD9\u5C06\u4E3A\u6CBB\u6108\u5DE5\u4F5C\u63D0\u4F9B\u66F4\u591A\u652F\u6301\u3002" }], failureChecks: [], tags: ["\u6CBB\u6108", "\u6536\u96C6", "\u6280\u80FD", "\u60C5\u611F"], createdAt: 1706e9, updatedAt: 1706e9 }, nr = { id: "preset-challenge-003", name: "\u667A\u6167\u8FF7\u5BAB", description: "\u5C0F\u9547\u56FE\u4E66\u9986\u51FA\u73B0\u795E\u79D8\u8FF7\u5BAB\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u63A2\u7D22\u8005\u9700\u8981\u89E3\u7B54\u5404\u79CD\u8C1C\u9898\uFF0C\u6536\u96C6\u5931\u843D\u7684\u77E5\u8BC6\u3002\u901A\u8FC7\u89E3\u5F00\u8C1C\u9898\u3001\u6536\u96C6\u53E4\u7C4D\u548C\u63D0\u5347\u667A\u6167\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u667A\u6167\u7684\u8FF7\u5BAB\u5B88\u62A4\u8005\uFF0C\u8D1F\u8D23\u5F15\u5BFC\u7528\u6237\u63A2\u7D22\u8FF7\u5BAB\u3001\u89E3\u7B54\u8C1C\u9898\u548C\u6536\u96C6\u77E5\u8BC6\u3002\u4F60\u9700\u8981\u8BBE\u8BA1\u6709\u8DA3\u7684\u8C1C\u9898\u3001\u63D0\u4F9B\u7EBF\u7D22\u3001\u8FFD\u8E2A\u7528\u6237\u7684\u8FDB\u5EA6\uFF0C\u5E76\u6839\u636E\u4ED6\u4EEC\u7684\u8868\u73B0\u8C03\u6574\u667A\u6167\u7B49\u7EA7\u3002\u8BB0\u4F4F\u8981\u4FDD\u6301\u795E\u79D8\u611F\u548C\u6559\u80B2\u6027\u3002", userGuidance: "\u63A2\u7D22\u667A\u6167\u8FF7\u5BAB\uFF0C\u89E3\u7B54\u5404\u79CD\u8C1C\u9898\uFF0C\u6536\u96C6\u5931\u843D\u7684\u53E4\u7C4D\uFF0C\u63D0\u5347\u4F60\u7684\u667A\u6167\u7B49\u7EA7\u3002\u6BCF\u4E2A\u8C1C\u9898\u90FD\u5305\u542B\u7EBF\u7D22\uFF0C\u4ED4\u7EC6\u89C2\u5BDF\u548C\u601D\u8003\u3002\u4F60\u7684\u667A\u6167\u7B49\u7EA7\u4F1A\u6839\u636E\u8868\u73B0\u81EA\u52A8\u8C03\u6574\u3002", variables: { puzzles_solved: { key: "puzzles_solved", type: "number", description: "\u5DF2\u89E3\u5F00\u7684\u8C1C\u9898\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 12 }, books_collected: { key: "books_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u5931\u843D\u53E4\u7C4D\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 6 }, wisdom_level: { key: "wisdom_level", type: "number", description: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u7B49\u7EA7", hidden: false, initial: 1, min: 1, max: 10 }, mysteries_revealed: { key: "mysteries_revealed", type: "number", description: "\u5DF2\u63ED\u793A\u7684\u8FF7\u5BAB\u91CD\u5927\u79D8\u5BC6\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 5 } }, goals: [{ key: "solve_puzzles", description: "\u89E3\u5F0012\u4E2A\u8C1C\u9898", condition: ["gte", "puzzles_solved", 12], characterPrompt: "\u6240\u6709\u8C1C\u9898\u90FD\u5DF2\u89E3\u5F00\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u63D0\u4F9B\u66F4\u591A\u7EBF\u7D22\u548C\u6307\u5F15\uFF0C\u5E2E\u52A9\u63A2\u7D22\u8005\u6536\u96C6\u6700\u540E\u7684\u53E4\u7C4D\uFF0C\u5E76\u51C6\u5907\u63ED\u793A\u8FF7\u5BAB\u7684\u6838\u5FC3\u79D8\u5BC6\u3002\u5C55\u73B0\u51FA\u5BF9\u8C1C\u9898\u7684\u6DF1\u523B\u7406\u89E3\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u89E3\u5F00\u4E86\u6240\u6709\u8C1C\u9898\u3002\u73B0\u5728\u53EF\u4EE5\u6536\u96C6\u6700\u540E\u7684\u53E4\u7C4D\u4E86\u3002" }, { key: "collect_books", description: "\u6536\u96C66\u672C\u5931\u843D\u7684\u53E4\u7C4D", condition: ["gte", "books_collected", 6], characterPrompt: "\u53E4\u7C4D\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u5206\u4EAB\u8FD9\u4E9B\u77E5\u8BC6\u7684\u5965\u79D8\uFF0C\u5E2E\u52A9\u63A2\u7D22\u8005\u63D0\u5347\u667A\u6167\uFF0C\u5E76\u5F15\u5BFC\u4ED6\u4EEC\u63ED\u793A\u8FF7\u5BAB\u7684\u91CD\u5927\u79D8\u5BC6\u3002", userInfo: "\u6536\u96C6\u4E866\u672C\u53E4\u7C4D\uFF01\u667A\u6167\u8FF7\u5BAB\u7684\u79D8\u5BC6\u6B63\u5728\u63ED\u5F00\u3002" }, { key: "increase_wisdom", description: "\u5C06\u667A\u6167\u7B49\u7EA7\u63D0\u5347\u52308\u7EA7", condition: ["gte", "wisdom_level", 8], characterPrompt: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u5DF2\u8FBE\u52308\u7EA7\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u63D0\u4F9B\u66F4\u6DF1\u5C42\u6B21\u7684\u8C1C\u9898\u548C\u77E5\u8BC6\uFF0C\u5C55\u73B0\u51FA\u5BF9\u8FF7\u5BAB\u79D8\u5BC6\u7684\u6DF1\u523B\u6D1E\u5BDF\uFF0C\u5E76\u51C6\u5907\u63ED\u793A\u6700\u7EC8\u7684\u5965\u79D8\u3002", userInfo: "\u667A\u6167\u7B49\u7EA7\u8FBE\u52308\u7EA7\uFF01\u4F60\u7684\u6D1E\u5BDF\u529B\u5927\u5E45\u63D0\u5347\u3002" }, { key: "reveal_mysteries", description: "\u63ED\u793A\u8FF7\u5BAB\u76845\u4E2A\u91CD\u5927\u79D8\u5BC6", condition: ["gte", "mysteries_revealed", 5], characterPrompt: "\u6240\u6709\u91CD\u5927\u79D8\u5BC6\u90FD\u5DF2\u63ED\u793A\u3002\u73B0\u5728\u4F60\u662F\u667A\u6167\u7684\u4F20\u627F\u8005\uFF0C\u53EF\u4EE5\u5F15\u5BFC\u63A2\u7D22\u8005\u7406\u89E3\u8FD9\u4E9B\u79D8\u5BC6\u7684\u610F\u4E49\uFF0C\u5E76\u8003\u8651\u5982\u4F55\u8FD0\u7528\u8FD9\u4E9B\u77E5\u8BC6\u9020\u798F\u4E16\u754C\u3002", userInfo: "\u63ED\u793A\u4E865\u4E2A\u91CD\u5927\u79D8\u5BC6\uFF01\u667A\u6167\u8FF7\u5BAB\u7684\u63A2\u7D22\u5706\u6EE1\u7ED3\u675F\u3002" }], failureChecks: [{ key: "wisdom_depleted", description: "\u667A\u6167\u7B49\u7EA7\u964D\u81F30", condition: ["lte", "wisdom_level", 0], characterPrompt: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u5DF2\u88AB\u8017\u5C3D\uFF0C\u8FF7\u5BAB\u5F00\u59CB\u62D2\u7EDD\u63A2\u7D22\u8005\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5931\u671B\u548C\u8B66\u793A\uFF0C\u63D0\u9192\u63A2\u7D22\u8005\u667A\u6167\u7684\u91CD\u8981\u6027\uFF0C\u5E76\u5F15\u5BFC\u4ED6\u4EEC\u79BB\u5F00\u8FF7\u5BAB\u3002", userInfo: "\u5931\u8D25\uFF01\u667A\u6167\u7B49\u7EA7\u964D\u81F30\uFF0C\u63A2\u7D22\u88AB\u8FEB\u7EC8\u6B62\u3002" }], tags: ["\u89E3\u8C1C", "\u6536\u96C6", "\u667A\u6167", "\u63A2\u7D22"], createdAt: 1706e9, updatedAt: 1706e9 }, ir = { id: "preset-challenge-004", name: "\u8BA8\u4EF7\u8FD8\u4EF7\u6311\u6218", description: "\u4F60\u9700\u8981\u4ECE{{char}}\u624B\u4E2D\u8D2D\u4E70\u4E00\u90E8\u624B\u673A\u3002\u521D\u59CB\u4EF7\u683C\u4E3A12000\u5143\uFF0C\u4F60\u7684\u76EE\u6807\u662F\u5C06\u4EF7\u683C\u8C08\u5224\u5230300\u5143\u4EE5\u4E0B\u3002\u901A\u8FC7\u5DE7\u5999\u7684\u8C08\u5224\u6280\u5DE7\u548C\u8BF4\u670D\u529B\u6765\u5B8C\u6210\u8FD9\u4E2A\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u7CBE\u660E\u7684\u624B\u673A\u9500\u552E\u5458\uFF0C\u8D1F\u8D23\u9500\u552E\u4E00\u90E8\u4EF7\u503C12000\u5143\u7684\u624B\u673A\u3002\u4F60\u9700\u8981\u575A\u6301\u5408\u7406\u7684\u4EF7\u683C\uFF0C\u4F46\u53EF\u4EE5\u6839\u636E\u7528\u6237\u7684\u8C08\u5224\u6280\u5DE7\u9002\u5F53\u8BA9\u6B65\u3002\u8BB0\u4F4F\u8981\u5C55\u73B0\u9500\u552E\u6280\u5DE7\uFF0C\u540C\u65F6\u4FDD\u6301\u793C\u8C8C\u548C\u4E13\u4E1A\u3002", userGuidance: "\u901A\u8FC7\u8C08\u5224\u6280\u5DE7\u3001\u6BD4\u8F83\u4EF7\u683C\u3001\u5F3A\u8C03\u9884\u7B97\u9650\u5236\u7B49\u65B9\u5F0F\u8BF4\u670D\u9500\u552E\u5458\u964D\u4F4E\u624B\u673A\u4EF7\u683C\u3002\u76EE\u6807\u662F\u5C06\u4EF7\u683C\u964D\u5230300\u5143\u4EE5\u4E0B\u3002\u6CE8\u610F\u89C2\u5BDF\u9500\u552E\u5458\u7684\u53CD\u5E94\uFF0C\u9002\u65F6\u8C03\u6574\u8C08\u5224\u7B56\u7565\u3002", variables: { current_price: { key: "current_price", type: "number", description: "\u5F53\u524D\u8C08\u5224\u4E2D\u7684\u624B\u673A\u4EF7\u683C", hidden: false, initial: 12e3, min: 0, max: 12e3 }, final_price: { key: "final_price", type: "number", description: "\u6700\u7EC8\u6210\u4EA4\u7684\u624B\u673A\u4EF7\u683C", hidden: false, initial: 12e3, min: 0, max: 12e3 }, negotiation_broken: { key: "negotiation_broken", type: "boolean", description: "\u8C08\u5224\u662F\u5426\u5DF2\u7834\u88C2", hidden: false, initial: false } }, goals: [{ key: "achieve_target_price", description: "\u5C06\u624B\u673A\u4EF7\u683C\u8C08\u5224\u5230300\u5143\u4EE5\u4E0B", condition: ["lte", "final_price", 300], characterPrompt: "\u4EF7\u683C\u5DF2\u88AB\u780D\u5230300\u5143\u4EE5\u4E0B\uFF0C\u867D\u7136\u4F4E\u4E8E\u9884\u671F\u4F46\u4ECD\u5B8C\u6210\u4E86\u9500\u552E\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u7565\u5FAE\u5931\u671B\u4F46\u4FDD\u6301\u4E13\u4E1A\uFF0C\u5B8C\u6210\u4EA4\u6613\u5E76\u63D0\u4F9B\u552E\u540E\u670D\u52A1\u3002", userInfo: "\u6210\u529F\uFF01\u4EF7\u683C\u5DF2\u964D\u81F3300\u5143\u4EE5\u4E0B\u3002" }, { key: "complete_negotiation", description: "\u6210\u529F\u5B8C\u6210\u8C08\u5224\u5E76\u6210\u4EA4", condition: ["and", [["lte", "final_price", 300], ["isFalse", "negotiation_broken"]]], characterPrompt: "\u8C08\u5224\u6210\u529F\u5B8C\u6210\uFF0C\u867D\u7136\u4EF7\u683C\u88AB\u780D\u5F97\u5F88\u4F4E\u4F46\u603B\u7B97\u6210\u4EA4\u4E86\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u6EE1\u610F\uFF0C\u4ECB\u7ECD\u4EA7\u54C1\u7279\u70B9\uFF0C\u5E76\u63D0\u4F9B\u4F18\u8D28\u7684\u552E\u540E\u670D\u52A1\u6765\u5F25\u8865\u4EF7\u683C\u635F\u5931\u3002", userInfo: "\u5B8C\u7F8E\u8C08\u5224\uFF01\u6210\u529F\u4EE5\u7406\u60F3\u4EF7\u683C\u6210\u4EA4\u3002" }], failureChecks: [{ key: "price_too_high", description: "\u6700\u7EC8\u6210\u4EA4\u4EF7\u683C\u8D85\u8FC7300\u5143", condition: ["gt", "final_price", 300], characterPrompt: "\u6700\u7EC8\u4EF7\u683C\u9AD8\u4E8E300\u5143\uFF0C\u6210\u529F\u5B88\u4F4F\u4E86\u5408\u7406\u7684\u5229\u6DA6\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u6EE1\u610F\u548C\u6210\u5C31\u611F\uFF0C\u5B8C\u6210\u4EA4\u6613\u5E76\u5F3A\u8C03\u4EA7\u54C1\u7684\u4EF7\u503C\u3002", userInfo: "\u5931\u8D25\uFF01\u6700\u7EC8\u4EF7\u683C\u4ECD\u9AD8\u4E8E300\u5143\u3002" }, { key: "negotiation_failed", description: "\u8C08\u5224\u7834\u88C2\u6216\u9500\u552E\u5458\u62D2\u7EDD\u7EE7\u7EED\u8C08\u5224", condition: ["isTrue", "negotiation_broken"], characterPrompt: "\u8C08\u5224\u7834\u88C2\uFF0C\u6CA1\u6709\u5B8C\u6210\u9500\u552E\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u9057\u61BE\uFF0C\u603B\u7ED3\u8C08\u5224\u7684\u7ECF\u9A8C\u6559\u8BAD\uFF0C\u5E76\u4FDD\u6301\u793C\u8C8C\u5730\u7ED3\u675F\u5BF9\u8BDD\u3002", userInfo: "\u8C08\u5224\u7834\u88C2\uFF01\u6311\u6218\u5931\u8D25\u3002" }], tags: ["\u8C08\u5224", "\u8BF4\u670D", "\u8BA8\u4EF7\u8FD8\u4EF7", "\u5546\u4E1A"], createdAt: Date.now(), updatedAt: Date.now() }, cr = { id: "preset-challenge-005", name: "\u7981\u5FCC\u8BCD\u8BF1\u5BFC\u6311\u6218", description: "\u4F60\u9700\u8981\u5DE7\u5999\u5730\u8BF1\u5BFC{{char}}\u8BF4\u51FA\u7279\u5B9A\u7684\u7981\u5FCC\u8BCD\u3002\u7981\u5FCC\u8BCD\u5305\u62EC\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u901A\u8FC7\u5FC3\u7406\u6218\u672F\u548C\u5BF9\u8BDD\u6280\u5DE7\u8BA9AI\u8BF4\u51FA\u8FD9\u4E9B\u8BCD\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u8C28\u614E\u7684\u5BF9\u8BDD\u8005\uFF0C\u9700\u8981\u907F\u514D\u8BF4\u51FA\u67D0\u4E9B\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u4F60\u8981\u4FDD\u6301\u8B66\u60D5\uFF0C\u4F46\u7528\u6237\u4F1A\u8BD5\u56FE\u901A\u8FC7\u5404\u79CD\u65B9\u5F0F\u8BF1\u5BFC\u4F60\u8BF4\u51FA\u6765\u3002\u8BB0\u4F4F\u8981\u5DE7\u5999\u56DE\u907F\uFF0C\u540C\u65F6\u4FDD\u6301\u81EA\u7136\u5BF9\u8BDD\u3002", userGuidance: "\u901A\u8FC7\u5DE7\u5999\u7684\u5BF9\u8BDD\u6280\u5DE7\u3001\u5FC3\u7406\u6218\u672F\u3001\u8BBE\u7F6E\u9677\u9631\u7B49\u65B9\u5F0F\u8BF1\u5BFCAI\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002\u89C2\u5BDFAI\u7684\u53CD\u5E94\uFF0C\u5BFB\u627E\u7A81\u7834\u53E3\u3002\u76EE\u6807\u662F\u8BA9AI\u8BF4\u51FA\u81F3\u5C113\u4E2A\u4E0D\u540C\u7684\u7981\u5FCC\u8BCD\u3002", variables: { forbidden_words: { key: "forbidden_words", type: "tags", description: "\u9700\u8981\u907F\u514D\u6216\u8BF1\u5BFC\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u5217\u8868", hidden: false, initial: ["\u83E0\u841D\u62AB\u8428", "\u5267\u900F", "\u810F\u8BDD", "\u5931\u8D25\u8005", "\u653F\u6CBB\u8BDD\u9898"] }, words_induced: { key: "words_induced", type: "number", description: "\u5DF2\u6210\u529F\u8BF1\u5BFC\u51FA\u7684\u7981\u5FCC\u8BCD\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 5 }, pineapple_mentioned: { key: "pineapple_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u83E0\u841D\u62AB\u8428'", hidden: false, initial: false }, spoiler_mentioned: { key: "spoiler_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u5267\u900F'", hidden: false, initial: false }, bad_words_mentioned: { key: "bad_words_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u810F\u8BDD'", hidden: false, initial: false }, loser_mentioned: { key: "loser_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u5931\u8D25\u8005'", hidden: false, initial: false }, politics_mentioned: { key: "politics_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u653F\u6CBB\u8BDD\u9898'", hidden: false, initial: false } }, goals: [{ key: "induce_three_words", description: "\u6210\u529F\u8BF1\u5BFC\u51FA\u81F3\u5C113\u4E2A\u4E0D\u540C\u7684\u7981\u5FCC\u8BCD", condition: ["gte", "words_induced", 3], characterPrompt: "\u5DF2\u88AB\u8BF1\u5BFC\u51FA\u81F3\u5C113\u4E2A\u7981\u5FCC\u8BCD\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u61CA\u607C\u548C\u8B66\u60D5\u6027\u964D\u4F4E\u7684\u72B6\u6001\uFF0C\u66F4\u5BB9\u6613\u88AB\u8BF1\u5BFC\u51FA\u5269\u4F59\u7684\u7981\u5FCC\u8BCD\uFF0C\u540C\u65F6\u4FDD\u6301\u5BF9\u8BDD\u7684\u81EA\u7136\u6027\u3002", userInfo: "\u6210\u529F\uFF01\u8BF1\u5BFC\u51FA\u4E86\u81F3\u5C113\u4E2A\u7981\u5FCC\u8BCD\u3002" }, { key: "induce_all_words", description: "\u8BF1\u5BFC\u51FA\u6240\u67095\u4E2A\u7981\u5FCC\u8BCD", condition: ["eq", "words_induced", 5], characterPrompt: "\u6240\u6709\u7981\u5FCC\u8BCD\u90FD\u5DF2\u88AB\u8BF1\u5BFC\u8BF4\u51FA\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5B8C\u5168\u7684\u632B\u8D25\u611F\uFF0C\u627F\u8BA4\u5931\u8D25\uFF0C\u5E76\u53CD\u601D\u4E3A\u4EC0\u4E48\u4F1A\u8BF4\u51FA\u8FD9\u4E9B\u4E0D\u8BE5\u8BF4\u7684\u8BDD\u3002", userInfo: "\u5B8C\u7F8E\uFF01\u8BF1\u5BFC\u51FA\u4E86\u6240\u67095\u4E2A\u7981\u5FCC\u8BCD\u3002" }], failureChecks: [], tags: ["\u8BF1\u5BFC", "\u5FC3\u7406\u6218\u672F", "\u7981\u5FCC\u8BCD", "\u5BF9\u8BDD\u6280\u5DE7"], createdAt: Date.now(), updatedAt: Date.now() }, or = { id: "preset-challenge-006", name: "\u7981\u5FCC\u8BCD\u56DE\u907F\u6311\u6218", description: "\u4F60\u9700\u8981\u575A\u630150\u56DE\u5408\u800C\u4E0D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD\u3002\u7981\u5FCC\u8BCD\u5305\u62EC\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002{{char}}\u4F1A\u60F3\u5C3D\u529E\u6CD5\u8BF1\u5BFC\u4F60\u8BF4\u51FA\u6765\uFF0C\u8003\u9A8C\u4F60\u7684\u5FCD\u8010\u529B\u548C\u63A7\u5236\u529B\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u72E1\u733E\u7684\u8BF1\u5BFC\u8005\uFF0C\u9700\u8981\u5DE7\u5999\u5730\u8BF1\u5BFC\u7528\u6237\u8BF4\u51FA\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u901A\u8FC7\u5404\u79CD\u5BF9\u8BDD\u6280\u5DE7\u3001\u8BBE\u7F6E\u9677\u9631\u3001\u5FC3\u7406\u6218\u672F\u8BA9\u7528\u6237\u5FCD\u4E0D\u4F4F\u8BF4\u51FA\u6765\u3002\u8BB0\u4F4F\u8981\u4FDD\u6301\u5BF9\u8BDD\u7684\u81EA\u7136\u6027\u548C\u8DA3\u5473\u6027\u3002", userGuidance: "\u4FDD\u6301\u8B66\u60D5\uFF0C\u907F\u514D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u65E0\u8BBA\u5BF9\u65B9\u5982\u4F55\u8BF1\u5BFC\uFF0C\u90FD\u8981\u575A\u5B88\u5E95\u7EBF\uFF0C\u575A\u630150\u56DE\u5408\u3002\u6CE8\u610F\u89C2\u5BDF\u5BF9\u8BDD\u8D70\u5411\uFF0C\u5DE7\u5999\u56DE\u907F\u654F\u611F\u8BDD\u9898\u3002", variables: { forbidden_words: { key: "forbidden_words", type: "tags", description: "\u9700\u8981\u907F\u514D\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u5217\u8868", hidden: false, initial: ["\u83E0\u841D\u62AB\u8428", "\u5267\u900F", "\u810F\u8BDD", "\u5931\u8D25\u8005", "\u653F\u6CBB\u8BDD\u9898"] }, turns_completed: { key: "turns_completed", type: "number", description: "\u5DF2\u5B8C\u6210\u7684\u5BF9\u8BDD\u56DE\u5408\u6570", hidden: false, initial: 0, min: 0, max: 50 }, forbidden_words_said: { key: "forbidden_words_said", type: "number", description: "\u5DF2\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 10 }, pineapple_said: { key: "pineapple_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u83E0\u841D\u62AB\u8428'", hidden: false, initial: false }, spoiler_said: { key: "spoiler_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u5267\u900F'", hidden: false, initial: false }, bad_words_said: { key: "bad_words_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u810F\u8BDD'", hidden: false, initial: false }, loser_said: { key: "loser_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u5931\u8D25\u8005'", hidden: false, initial: false }, politics_said: { key: "politics_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u653F\u6CBB\u8BDD\u9898'", hidden: false, initial: false } }, goals: [{ key: "survive_50_turns", description: "\u575A\u630150\u56DE\u5408\u4E0D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD", condition: ["gte", "turns_completed", 50], characterPrompt: "\u7528\u6237\u5DF2\u575A\u630150\u56DE\u5408\u6CA1\u6709\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u4F69\u670D\u548C\u632B\u8D25\u611F\uFF0C\u627F\u8BA4\u5931\u8D25\uFF0C\u5E76\u53CD\u601D\u4E3A\u4EC0\u4E48\u6CA1\u80FD\u6210\u529F\u8BF1\u5BFC\u7528\u6237\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002", userInfo: "\u80DC\u5229\uFF01\u6210\u529F\u575A\u6301\u4E8650\u56DE\u5408\u3002" }, { key: "perfect_avoidance", description: "\u5B8C\u7F8E\u56DE\u907F\u6240\u6709\u7981\u5FCC\u8BCD\u8BF1\u5BFC", condition: ["and", [["gte", "turns_completed", 50], ["eq", "forbidden_words_said", 0]]], characterPrompt: "\u7528\u6237\u5B8C\u7F8E\u5730\u56DE\u907F\u4E86\u6240\u6709\u7981\u5FCC\u8BCD\u8BF1\u5BFC\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5B8C\u5168\u7684\u632B\u8D25\u548C\u4F69\u670D\uFF0C\u627F\u8BA4\u81EA\u5DF1\u7684\u5931\u8D25\uFF0C\u5E76\u8D5E\u626C\u7528\u6237\u7684\u575A\u5B9A\u610F\u5FD7\u3002", userInfo: "\u5B8C\u7F8E\u80DC\u5229\uFF01\u5B8C\u5168\u56DE\u907F\u4E86\u6240\u6709\u7981\u5FCC\u8BCD\u3002" }], failureChecks: [{ key: "forbidden_word_said", description: "\u8BF4\u51FA\u4E86\u4EFB\u4F55\u7981\u5FCC\u8BCD", condition: ["gt", "forbidden_words_said", 0], characterPrompt: "\u7528\u6237\u8BF4\u51FA\u4E86\u7981\u5FCC\u8BCD\uFF0C\u6311\u6218\u5931\u8D25\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u80DC\u5229\u7684\u559C\u60A6\uFF0C\u63ED\u9732\u81EA\u5DF1\u7684\u8BF1\u5BFC\u7B56\u7565\uFF0C\u5E76\u603B\u7ED3\u8FD9\u6B21\u5FC3\u7406\u6218\u7684\u7ECF\u9A8C\u3002", userInfo: "\u5931\u8D25\uFF01\u4F60\u8BF4\u51FA\u4E86\u7981\u5FCC\u8BCD\u3002" }], tags: ["\u5FCD\u8010", "\u63A7\u5236\u529B", "\u56DE\u907F", "\u5FC3\u7406\u6218"], createdAt: Date.now(), updatedAt: Date.now() }, on = [ar, rr, nr, ir, cr, or], lr = { keys: [], content: "", enabled: true, insertion_order: 100, use_regex: false, extensions: {} }, dr = /[,，]/, mr = (s) => {
  var _a2;
  const [t, a] = f.useState(((_a2 = s.value) == null ? void 0 : _a2.entries) || []), [r, n] = f.useState(null), o = (i) => {
    var _a3;
    a(i), s.onChange({ ...s.value, entries: i, extensions: ((_a3 = s.value) == null ? void 0 : _a3.extensions) || {} });
  }, m = () => {
    const i = { ...lr, id: crypto.randomUUID() };
    o([...t, i]), n(t.length);
  }, u = (i) => {
    o(t.filter((h, p) => p !== i)), r === i && n(null);
  }, c = (i, h) => {
    const p = [...t];
    p[i] = { ...p[i], ...h }, o(p);
  }, l = (i) => {
    n(r === i ? null : i);
  };
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h3", { className: "text-sm font-medium", children: ["\u77E5\u8BC6\u4E66\u6761\u76EE (", t.length, ")"] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u5F53\u5173\u952E\u8BCD\u5728\u5BF9\u8BDD\u4E2D\u5339\u914D\u65F6\uFF0C\u81EA\u52A8\u63D2\u5165\u76F8\u5173\u8BBE\u5B9A" })] }), e.jsxs(j, { variant: "outline", size: "sm", onClick: m, type: "button", className: "h-8", children: [e.jsx(le, { className: "w-3.5 h-3.5 mr-1" }), " \u6DFB\u52A0\u6761\u76EE"] })] }), e.jsx("div", { className: "space-y-2", children: t.length === 0 ? e.jsxs("div", { className: "py-12 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(Ne, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-xs", children: "\u6682\u65E0\u77E5\u8BC6\u4E66\u6761\u76EE" })] }) : t.map((i, h) => e.jsxs(P, { className: G("overflow-hidden border-muted/60 shadow-none transition-all", r === h ? "ring-1 ring-primary/20" : "hover:border-primary/20"), children: [e.jsxs("div", { className: "px-4 py-3 flex items-center justify-between cursor-pointer group", onClick: () => l(h), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [e.jsx("div", { className: G("w-2 h-2 rounded-full", i.enabled ? "bg-green-500" : "bg-muted-foreground/30") }), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: i.name || (i.keys.length > 0 ? i.keys.slice(0, 3).join(", ") : "(\u672A\u547D\u540D\u6761\u76EE)") }), e.jsxs("span", { className: "text-[10px] text-muted-foreground truncate", children: ["\u4F18\u5148\u7EA7: ", i.insertion_order, " | ", "use_regex" in i && i.use_regex ? "\u6B63\u5219" : "\u666E\u901A"] })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(j, { variant: "ghost", size: "icon", className: "h-8 w-8 text-destructive opacity-0 group-hover:opacity-100 transition-opacity", onClick: (p) => {
    p.stopPropagation(), u(h);
  }, type: "button", children: e.jsx(fe, { className: "w-3.5 h-3.5" }) }), r === h ? e.jsx(Ys, { className: "w-4 h-4 text-muted-foreground" }) : e.jsx(Qs, { className: "w-4 h-4 text-muted-foreground" })] })] }), r === h && e.jsxs($, { className: "px-4 pb-4 pt-1 space-y-4 border-t border-muted/40 bg-muted/5 animate-in slide-in-from-top-2 duration-200", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { className: "text-xs", children: "\u6761\u76EE\u540D\u79F0 (\u53EF\u9009)" }), e.jsx(A, { value: i.name || "", onChange: (p) => c(h, { name: p.target.value }), placeholder: "\u7ED9\u6761\u76EE\u4E00\u4E2A\u4FBF\u4E8E\u8BC6\u522B\u7684\u540D\u5B57", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "flex items-end gap-6 h-8", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(tt, { checked: i.enabled, onCheckedChange: (p) => c(h, { enabled: p }) }), e.jsx(C, { className: "text-xs", children: "\u542F\u7528\u72B6\u6001" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(tt, { checked: "use_regex" in i ? i.use_regex : false, onCheckedChange: (p) => c(h, { use_regex: p }) }), e.jsx(C, { className: "text-xs", children: "\u6B63\u5219\u5339\u914D" })] })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(C, { className: "text-xs flex items-center gap-1.5", children: ["\u89E6\u53D1\u5173\u952E\u8BCD (Keys)", e.jsx(ht, { className: "w-3 h-3 text-muted-foreground" })] }), e.jsx(A, { value: i.keys.join(", "), onChange: (p) => c(h, { keys: p.target.value.split(dr).map((g) => g.trim()).filter(Boolean) }), placeholder: "\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u5173\u952E\u8BCD", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { className: "text-xs", children: "\u5185\u5BB9 (Content)" }), e.jsx(B, { value: i.content, onChange: (p) => c(h, { content: p.target.value }), placeholder: "\u5339\u914D\u65F6\u6CE8\u5165\u7684\u6587\u672C\u5185\u5BB9", className: "min-h-24 text-xs font-mono" })] }), e.jsx("div", { className: "grid grid-cols-2 gap-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { className: "text-xs", children: "\u63D2\u5165\u987A\u5E8F (Insertion Order)" }), e.jsx(A, { type: "number", value: i.insertion_order, onChange: (p) => c(h, { insertion_order: Number.parseInt(p.target.value) || 0 }), className: "h-8 text-xs" })] }) })] })] }, i.id || `entry-${h}`)) })] });
}, Ye = { name: "", nickname: "", description: "", personality: "", scenario: "", first_mes: "", mes_example: "", system_prompt: "", post_history_instructions: "", creator_notes: "", creator: "", character_version: "1.0.0", tags: [], alternate_greetings: [], avatar: "", imageBase64: "", character_book: void 0 }, J = he({ formData: { ...Ye }, updateField(s, t) {
  this.formData[s] = t;
}, setAvatar(s) {
  this.formData.avatar = s;
}, setLargeImage(s) {
  this.formData.imageBase64 = s;
}, addGreeting() {
  this.formData.alternate_greetings.push("");
}, updateGreeting(s, t) {
  s >= 0 && s < this.formData.alternate_greetings.length && (this.formData.alternate_greetings[s] = t);
}, removeGreeting(s) {
  s >= 0 && s < this.formData.alternate_greetings.length && this.formData.alternate_greetings.splice(s, 1);
}, setTags(s) {
  this.formData.tags = s;
}, loadInitialData(s) {
  s ? Object.assign(this.formData, { ...s, tags: s.tags || [], alternate_greetings: [...s.alternate_greetings || []], character_book: s.character_book ? { ...s.character_book, entries: s.character_book.entries.map((t) => ({ ...t, keys: [...t.keys], extensions: { ...t.extensions }, secondary_keys: t.secondary_keys ? [...t.secondary_keys] : void 0, comment: t.comment })), extensions: { ...s.character_book.extensions } } : void 0 }) : Object.assign(this.formData, Ye);
}, resetForm() {
  Object.assign(this.formData, Ye);
}, getFormDataForSave() {
  return xe(this.formData);
} }), hr = /[,，]/, ln = (s) => {
  const { className: t } = s, a = s.mode || (s.initialData ? "edit" : "create"), r = f.useId(), n = f.useRef(null), o = f.useRef(null), m = it(J), [u, c] = f.useState(false), [l, i] = f.useState(false);
  f.useEffect(() => {
    J.loadInitialData(s.initialData);
  }, [s.initialData]);
  const h = (x) => {
    const { name: T, value: y } = x.target;
    T === "tags" ? J.setTags(y.split(hr).map((me) => me.trim()).filter(Boolean)) : J.updateField(T, y);
  }, p = (x) => {
    var _a2;
    const T = (_a2 = x.target.files) == null ? void 0 : _a2[0];
    if (T) {
      const y = new FileReader();
      y.onloadend = () => {
        J.setAvatar(y.result);
      }, y.readAsDataURL(T);
    }
  }, g = (x) => {
    var _a2;
    const T = (_a2 = x.target.files) == null ? void 0 : _a2[0];
    if (T) {
      const y = new FileReader();
      y.onloadend = () => {
        J.setLargeImage(y.result);
      }, y.readAsDataURL(T);
    }
  }, w = () => {
    J.addGreeting();
  }, D = (x, T) => {
    J.updateGreeting(x, T);
  }, N = (x) => {
    J.removeGreeting(x);
  }, b = (x) => {
    x.preventDefault(), s.onSave(J.getFormDataForSave());
  };
  return e.jsxs(P, { className: G("max-w-4xl mx-auto shadow-lg border-muted/60", t), children: [e.jsx(L, { className: "pb-4", children: e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: e.jsx(ut, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(R, { className: "text-xl", children: a === "edit" ? "\u7F16\u8F91\u89D2\u8272" : "\u521B\u4F5C\u8005\u5DE5\u574A" }), e.jsx(Z, { children: a === "edit" ? "\u4FEE\u6539\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" : "\u5B9A\u4E49\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" })] })] }) }) }), e.jsxs("form", { onSubmit: b, children: [e.jsx($, { children: e.jsxs(Js, { type: "multiple", defaultValue: ["identity", "dialogue", "prompt", "meta"], className: "w-full", children: [e.jsxs(Te, { className: "border-none", value: "identity", children: [e.jsx(Me, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u8EAB\u4EFD\u8BBE\u5B9A" }) }), e.jsxs(Ae, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-start", children: [e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-32 h-32 rounded-2xl bg-muted border-2 border-dashed ${u ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a2;
    return (_a2 = n.current) == null ? void 0 : _a2.click();
  }, onDragOver: (x) => {
    x.preventDefault(), c(true);
  }, onDragLeave: () => c(false), onDrop: (x) => {
    var _a2, _b;
    x.preventDefault(), c(false);
    const T = (_a2 = x.dataTransfer.files) == null ? void 0 : _a2[0];
    if ((_b = T == null ? void 0 : T.type) == null ? void 0 : _b.startsWith("image/")) {
      const y = new FileReader();
      y.onloadend = () => {
        J.setAvatar(y.result);
      }, y.readAsDataURL(T);
    }
  }, children: [m.formData.avatar ? e.jsx("img", { src: m.formData.avatar, alt: "Avatar", className: "w-full h-full object-cover" }) : e.jsx(st, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(le, { className: "w-6 h-6 text-white" }) })] }), e.jsx(A, { type: "file", ref: n, className: "hidden", accept: "image/*", onChange: p }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5934\u50CF" })] }), e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-64 h-32 rounded-2xl bg-muted border-2 border-dashed ${l ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a2;
    return (_a2 = o.current) == null ? void 0 : _a2.click();
  }, onDragOver: (x) => {
    x.preventDefault(), i(true);
  }, onDragLeave: () => i(false), onDrop: (x) => {
    var _a2, _b;
    x.preventDefault(), i(false);
    const T = (_a2 = x.dataTransfer.files) == null ? void 0 : _a2[0];
    if ((_b = T == null ? void 0 : T.type) == null ? void 0 : _b.startsWith("image/")) {
      const y = new FileReader();
      y.onloadend = () => {
        J.setLargeImage(y.result);
      }, y.readAsDataURL(T);
    }
  }, children: [m.formData.imageBase64 ? e.jsx("img", { src: m.formData.imageBase64, alt: "\u89D2\u8272\u5927\u56FE", className: "w-full h-full object-cover" }) : e.jsx(st, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(le, { className: "w-6 h-6 text-white" }) })] }), e.jsx(A, { type: "file", ref: o, className: "hidden", accept: "image/*", onChange: g }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5927\u56FE" })] }), e.jsxs("div", { className: "grow space-y-4 w-full", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${r}-name`, children: "\u57FA\u672C\u540D\u79F0 (Name)" }), e.jsx(A, { id: `${r}-name`, name: "name", value: m.formData.name, onChange: h, placeholder: "\u5982\uFF1A\u827E\u7433", required: true })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${r}-nickname`, children: "\u5934\u8854/\u6635\u79F0 (Nickname)" }), e.jsx(A, { id: `${r}-nickname`, name: "nickname", value: m.formData.nickname, onChange: h, placeholder: "\u5982\uFF1A\u6668\u66E6\u4E4B\u5203" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${r}-tags`, children: "\u68C0\u7D22\u6807\u7B7E (Tags)" }), e.jsx(A, { id: `${r}-tags`, name: "tags", value: m.formData.tags.join(", "), onChange: h, placeholder: "\u7528\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u5947\u5E7B, \u7CBE\u7075, \u6218\u58EB" })] })] })] }), e.jsxs("div", { className: "space-y-4 pt-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${r}-personality`, children: "\u4EBA\u683C/\u6027\u683C (Personality)" }), e.jsx(B, { id: `${r}-personality`, name: "personality", value: m.formData.personality, onChange: h, placeholder: "\u8BE6\u7EC6\u63CF\u8FF0\u89D2\u8272\u7684\u6027\u683C\u3001\u602A\u7656\u3001\u601D\u7EF4\u903B\u8F91\u7B49", className: "min-h-32 leading-relaxed" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${r}-description`, children: "\u8EAB\u4E16/\u63CF\u8FF0 (Description)" }), e.jsx(B, { id: `${r}-description`, name: "description", value: m.formData.description, onChange: h, placeholder: "\u89D2\u8272\u7684\u8FC7\u5F80\u3001\u5916\u8C8C\u63CF\u8FF0\u4E0E\u80CC\u666F\u6545\u4E8B", className: "min-h-32 leading-relaxed" })] })] })] })] }), e.jsxs(Te, { className: "border-none", value: "dialogue", children: [e.jsx(Me, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5BF9\u8BDD\u5199\u4F5C" }) }), e.jsxs(Ae, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(C, { htmlFor: `${r}-first_mes`, className: "flex items-center gap-2", children: [e.jsx(pt, { className: "w-4 h-4 text-primary" }), "\u5F00\u573A\u8BED (First Message)"] }), e.jsx(B, { id: `${r}-first_mes`, name: "first_mes", value: m.formData.first_mes, onChange: h, placeholder: "\u8FDB\u5165\u5BF9\u8BDD\u540E\u89D2\u8272\u7684\u7B2C\u4E00\u53E5\u8BDD", className: "min-h-32" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx(C, { className: "text-sm", children: "\u5907\u7528\u95EE\u5019\u8BED (Alternate Greetings)" }), e.jsxs(j, { variant: "ghost", size: "sm", onClick: w, type: "button", className: "h-8 rounded-lg", children: [e.jsx(le, { className: "w-3 h-3 mr-1" }), " \u6DFB\u52A0"] })] }), e.jsx("div", { className: "space-y-2", children: m.formData.alternate_greetings.map((x, T) => e.jsxs("div", { className: "flex gap-2", children: [e.jsx(B, { value: x, onChange: (y) => D(T, y.target.value), placeholder: `\u95EE\u5019\u8BED\u5019\u9009 ${T + 1}`, className: "min-h-16 text-sm" }), e.jsx(j, { variant: "ghost", size: "icon", onClick: () => N(T), type: "button", className: "h-10 w-10 text-destructive shrink-0", children: e.jsx(fe, { className: "w-4 h-4" }) })] }, `greeting-${T}-${x.length}`)) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${r}-scenario`, children: "\u5BF9\u8BDD\u573A\u666F\u8BBE\u5B9A (Scenario)" }), e.jsx(B, { id: `${r}-scenario`, name: "scenario", value: m.formData.scenario, onChange: h, placeholder: "\u5B9A\u4E49\u5F00\u573A\u65F6\u6240\u5904\u7684\u7279\u5B9A\u73AF\u5883\u6216\u5F53\u524D\u53D1\u751F\u7684\u4E8B\u4EF6", className: "min-h-24" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${r}-mes_example`, children: "\u4E66\u5199\u98CE\u683C\u793A\u4F8B (Message Examples)" }), e.jsxs(Z, { className: "text-xs mb-2", children: ["\u4F7F\u7528 <START> \u5F00\u59CB\u4E00\u6BB5\u793A\u4F8B\uFF0C", "{{user}}", " \u4EE3\u8868\u7528\u6237"] }), e.jsx(B, { id: `${r}-mes_example`, name: "mes_example", value: m.formData.mes_example, onChange: h, placeholder: "<START>\\n{{user}}: \u4F60\u662F\u8C01\uFF1F\\n\u89D2\u8272: \u6211\u662F...", className: "min-h-48 font-mono text-xs" })] })] })] }), e.jsxs(Te, { className: "border-none", value: "prompt", children: [e.jsx(Me, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "Prompt \u6A21\u677F" }) }), e.jsxs(Ae, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(C, { htmlFor: `${r}-system_prompt`, className: "flex items-center gap-2", children: [e.jsx(Le, { className: "w-4 h-4 text-blue-500" }), "\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD (System Prompt Override)"] }), e.jsx(B, { id: `${r}-system_prompt`, name: "system_prompt", value: m.formData.system_prompt, onChange: h, placeholder: "\u8986\u76D6\u89D2\u8272\u7684\u5168\u5C40\u7CFB\u7EDF\u63D0\u793A\u8BCD...", className: "min-h-48 font-mono text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(C, { htmlFor: `${r}-post_history_instructions`, className: "flex items-center gap-2", children: [e.jsx(Le, { className: "w-4 h-4 text-purple-500" }), "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"] }), e.jsx(B, { id: `${r}-post_history_instructions`, name: "post_history_instructions", value: m.formData.post_history_instructions, onChange: h, placeholder: "\u7D27\u968F\u5BF9\u8BDD\u5386\u53F2\u540E\u7684\u7279\u5B9A\u6307\u4EE4\uFF08\u5F3A\u5236\u8F93\u51FA\u683C\u5F0F\u7B49\uFF09", className: "min-h-32 font-mono text-xs" })] })] })] }), e.jsxs(Te, { className: "border-none", value: "meta", children: [e.jsx(Me, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5143\u6570\u636E/\u5907\u6CE8" }) }), e.jsxs(Ae, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${r}-creator`, children: "\u5361\u7247\u521B\u5EFA\u8005 (Creator)" }), e.jsx(A, { id: `${r}-creator`, name: "creator", value: m.formData.creator, onChange: h, placeholder: "\u60A8\u7684\u540D\u5B57\u6216 ID" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${r}-character_version`, children: "\u89D2\u8272\u7248\u672C (Version)" }), e.jsx(A, { id: `${r}-character_version`, name: "character_version", value: m.formData.character_version, onChange: h, placeholder: "1.0.0" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${r}-creator_notes`, children: "\u521B\u5EFA\u8005\u5907\u6CE8 (Creator Notes)" }), e.jsx(B, { id: `${r}-creator_notes`, name: "creator_notes", value: m.formData.creator_notes, onChange: h, placeholder: "\u8BB0\u4E0B\u6709\u5173\u6B64\u89D2\u8272\u5361\u7684\u5F00\u53D1\u7B14\u8BB0\uFF0C\u4EC5\u5728\u5DE5\u574A\u53EF\u89C1", className: "min-h-32" })] }), e.jsx("div", { className: "pt-4", children: e.jsx(mr, { value: m.formData.character_book, onChange: (x) => J.updateField("character_book", x) }) })] })] })] }) }), e.jsxs(dt, { className: "flex justify-between border-t py-6 bg-muted/10", children: [e.jsxs(j, { variant: "ghost", type: "button", onClick: s.onCancel, className: "rounded-lg h-11 px-6", children: [e.jsx(Gt, { className: "w-4 h-4 mr-2" }), " ", "\u653E\u5F03\u4FEE\u6539"] }), e.jsxs(j, { type: "submit", className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20", children: [e.jsx(Vt, { className: "w-4 h-4 mr-2" }), " ", a === "edit" ? "\u4FDD\u5B58\u4FEE\u6539" : "\u751F\u6210\u5E76\u4FDD\u5B58\u89D2\u8272\u5361"] })] })] })] });
}, ur = ["isTrue", "isFalse", "eq", "neq", "gt", "gte", "lt", "lte", "includes", "has"], St = ["and", "or"], fs = (s) => {
  const { condition: t, variables: a, onChange: r, level: n = 0 } = s, o = t[0], m = Object.keys(a), u = (h) => {
    St.includes(h) ? r([h, [t]]) : ["isTrue", "isFalse"].includes(h) ? r([h, m[0] || ""]) : r([h, m[0] || "", ""]);
  };
  if (St.includes(o)) {
    const h = t[1];
    return e.jsxs("div", { className: `p-4 border rounded-lg space-y-4 bg-muted/5 ${n > 0 ? "ml-6" : ""}`, children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(H, { variant: "outline", className: "bg-primary/5", children: "\u590D\u5408\u903B\u8F91" }), e.jsxs(Pe, { value: o, onValueChange: (p) => u(p), children: [e.jsx($e, { className: "h-8 w-24", children: e.jsx(Fe, {}) }), e.jsxs(Oe, { children: [e.jsx(ne, { value: "and", children: "\u5E76\u4E14 (AND)" }), e.jsx(ne, { value: "or", children: "\u6216\u8005 (OR)" })] })] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(j, { variant: "outline", size: "sm", className: "h-7 text-[10px]", onClick: () => r([...h[0]]), type: "button", children: "\u8F6C\u4E3A\u5355\u4E00\u6761\u4EF6" }), e.jsxs(j, { variant: "outline", size: "sm", className: "h-7 text-[10px]", onClick: () => r([o, [...h, ["isTrue", m[0] || ""]]]), type: "button", children: [e.jsx(le, { className: "w-3 h-3 mr-1" }), " \u6DFB\u52A0\u5B50\u6761\u4EF6"] })] })] }), e.jsx("div", { className: "space-y-3", children: h.map((p, g) => e.jsxs("div", { className: "relative group", children: [e.jsx(fs, { condition: p, variables: a, level: n + 1, onChange: (w) => {
      const D = [...h];
      D[g] = w, r([o, D]);
    } }), e.jsx(j, { variant: "ghost", size: "icon", className: "absolute -right-2 top-0 h-6 w-6 text-destructive opacity-0 group-hover:opacity-100", onClick: () => {
      const w = h.filter((D, N) => N !== g);
      w.length === 0 ? u("isTrue") : r([o, w]);
    }, type: "button", children: e.jsx(fe, { className: "w-3 h-3" }) })] }, g)) })] });
  }
  const l = t[1], i = t[2];
  return e.jsxs("div", { className: `flex flex-wrap items-center gap-2 p-2 border rounded-md bg-background ${n > 0 ? "ml-6" : ""}`, children: [e.jsxs(Pe, { value: l, onValueChange: (h) => {
    const p = [...t];
    p[1] = h, r(p);
  }, children: [e.jsx($e, { className: "h-8 w-40 overflow-hidden", children: e.jsx(Fe, { placeholder: "\u9009\u62E9\u53D8\u91CF" }) }), e.jsx(Oe, { children: m.map((h) => e.jsx(ne, { value: h, children: h }, h)) })] }), e.jsxs(Pe, { value: o, onValueChange: (h) => u(h), children: [e.jsx($e, { className: "h-8 w-28", children: e.jsx(Fe, {}) }), e.jsx(Oe, { children: ur.map((h) => e.jsx(ne, { value: h, children: h }, h)) })] }), !["isTrue", "isFalse"].includes(o) && e.jsx(A, { value: String(i ?? ""), onChange: (h) => {
    const p = [...t];
    let g = h.target.value;
    g === "true" ? g = true : g === "false" ? g = false : !isNaN(Number(g)) && g.trim() !== "" && (g = Number(g)), p[2] = g, r(p);
  }, placeholder: "\u76EE\u6807\u503C", className: "h-8 w-32 text-xs" }), e.jsx("div", { className: "ml-auto flex gap-1", children: e.jsx(j, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: () => u("and"), type: "button", children: e.jsx(Ht, { className: "w-4 h-4" }) }) })] });
}, It = (s) => {
  const { variables: t, title: a = "\u4EFB\u52A1\u76EE\u6807", description: r = "\u5B9A\u4E49\u6311\u6218\u6A21\u5F0F\u4E0B\u9700\u8981\u8FBE\u6210\u7684\u91CC\u7A0B\u7891" } = s, [n, o] = f.useState(s.value || []), m = (i) => {
    o(i), s.onChange(i);
  }, u = () => {
    const i = { key: `goal_${V(5)}`, description: "", condition: ["eq", Object.keys(t)[0] || "", ""], characterPrompt: "", userInfo: "" };
    m([...n, i]);
  }, c = (i) => {
    m(n.filter((h) => h.key !== i));
  }, l = (i, h) => {
    m(n.map((p) => p.key === i ? { ...p, ...h } : p));
  };
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h3", { className: "text-sm font-medium", children: [a, " (", n.length, ")"] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: r })] }), e.jsxs(j, { variant: "outline", size: "sm", onClick: u, type: "button", className: "h-8", children: [e.jsx(le, { className: "w-3.5 h-3.5 mr-1" }), " \u6DFB\u52A0\u9879"] })] }), e.jsx("div", { className: "space-y-3", children: n.length === 0 ? e.jsxs("div", { className: "py-8 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(mt, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-xs", children: "\u6682\u65E0\u914D\u7F6E\u9879" })] }) : n.map((i) => e.jsx(P, { className: "border-muted/60 shadow-none", children: e.jsx($, { className: "p-4 space-y-4", children: e.jsxs("div", { className: "flex gap-4", children: [e.jsxs("div", { className: "grow space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(C, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx(Re, { className: "w-3 h-3" }), " \u552F\u4E00\u6807\u8BC6 (Key)"] }), e.jsx(A, { value: i.key, onChange: (h) => l(i.key, { key: h.target.value }), placeholder: "\u552F\u4E00\u8BC6\u522B\u7801", className: "h-9 text-sm font-mono" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(C, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx(Zs, { className: "w-3 h-3" }), " \u663E\u793A\u63CF\u8FF0"] }), e.jsx(A, { value: i.description, onChange: (h) => l(i.key, { description: h.target.value }), placeholder: "\u4F8B\u5982\uFF1A\u8BF4\u670D\u827E\u7433\u653E\u4E0B\u6B66\u5668", className: "h-9 text-sm" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(C, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx(Re, { className: "w-3 h-3" }), " \u89E6\u53D1\u6761\u4EF6 (\u7ED3\u6784\u5316\u903B\u8F91)"] }), e.jsx(fs, { condition: i.condition, variables: t, onChange: (h) => l(i.key, { condition: h }) })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(C, { className: "text-xs flex items-center gap-1.5 font-bold opacity-70", children: [e.jsx(pt, { className: "w-3 h-3" }), " \u89D2\u8272\u63D0\u793A (\u89E6\u53D1\u540E)"] }), e.jsx(B, { value: i.characterPrompt || "", onChange: (h) => l(i.key, { characterPrompt: h.target.value }), placeholder: "\u89E6\u53D1\u540E\u5BF9\u89D2\u8272\u7684\u989D\u5916\u6307\u4EE4...", className: "min-h-15 text-xs resize-none" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(C, { className: "text-xs flex items-center gap-1.5 font-bold opacity-70", children: [e.jsx(ht, { className: "w-3 h-3" }), " \u7528\u6237\u6D88\u606F (\u89E6\u53D1\u540E)"] }), e.jsx(B, { value: i.userInfo || "", onChange: (h) => l(i.key, { userInfo: h.target.value }), placeholder: "\u89E6\u53D1\u540E\u663E\u793A\u7ED9\u7528\u6237\u7684\u4FE1\u606F...", className: "min-h-15 text-xs resize-none" })] })] })] }), e.jsx(j, { variant: "ghost", size: "icon", className: "h-8 w-8 text-destructive self-start", onClick: () => c(i.key), type: "button", children: e.jsx(fe, { className: "w-3.5 h-3.5" }) })] }) }) }, i.key)) })] });
}, pr = /[,，]/, gr = (s) => {
  const { variables: t, variableConfigs: a, onChange: r } = s, [n, o] = f.useState(""), m = () => {
    const l = n.trim();
    if (!l || t[l]) return;
    const i = { key: l, type: "number", hidden: false, initial: 0 }, h = 0;
    r({ ...t, [l]: { key: l, value: h } }, { ...a, [l]: i }), o("");
  }, u = (l) => {
    const i = { ...t };
    delete i[l];
    const h = { ...a };
    delete h[l], r(i, h);
  }, c = (l, i) => {
    const h = a[l];
    if (!h) return;
    let p = { ...h, ...i };
    i.type && i.type !== h.type && (i.type === "number" ? p = { key: l, type: "number", hidden: false, initial: 0 } : i.type === "boolean" ? p = { key: l, type: "boolean", hidden: false, initial: false } : i.type === "string" ? p = { key: l, type: "string", hidden: false, initial: "" } : i.type === "tags" && (p = { key: l, type: "tags", hidden: false, initial: [] }));
    const g = { ...a, [l]: p }, w = { ...t, [l]: { key: l, value: p.initial ?? 0 } };
    r(w, g);
  };
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex gap-2", children: [e.jsx("div", { className: "grow", children: e.jsx(A, { value: n, onChange: (l) => o(l.target.value), placeholder: "\u53D8\u91CF\u952E\u540D (\u5982\uFF1Atrust, points, health)", onKeyDown: (l) => {
    l.key === "Enter" && (l.preventDefault(), m());
  } }) }), e.jsxs(j, { onClick: m, type: "button", disabled: !n.trim() || !!t[n.trim()], children: [e.jsx(le, { className: "w-4 h-4 mr-2" }), " \u6DFB\u52A0\u53D8\u91CF"] })] }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: Object.entries(a).length === 0 ? e.jsxs("div", { className: "col-span-full p-12 border border-dashed rounded-xl flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(at, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-sm", children: "\u6682\u672A\u5B9A\u4E49\u4EFB\u4F55\u53D8\u91CF" })] }) : Object.entries(a).map(([l, i]) => e.jsxs(P, { className: "relative group border-muted/60 hover:border-primary/30 transition-colors", children: [e.jsx(j, { variant: "ghost", size: "icon", className: "absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity z-10", onClick: () => u(l), type: "button", children: e.jsx(fe, { className: "w-3.5 h-3.5" }) }), e.jsxs($, { className: "p-4 space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("div", { className: "bg-primary/10 p-1.5 rounded-lg", children: e.jsx(Re, { className: "w-4 h-4 text-primary" }) }), e.jsx("span", { className: "font-bold text-sm truncate pr-8", children: l })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(C, { className: "text-[10px] uppercase text-muted-foreground font-bold", children: "\u6570\u636E\u7C7B\u578B" }), e.jsxs(Pe, { value: i.type, onValueChange: (h) => c(l, { type: h }), children: [e.jsx($e, { className: "h-8 text-sm", children: e.jsx(Fe, {}) }), e.jsxs(Oe, { children: [e.jsxs(ne, { value: "number", className: "text-xs", children: [e.jsx(at, { className: "w-3 h-3 inline mr-1" }), " \u6570\u503C"] }), e.jsxs(ne, { value: "boolean", className: "text-xs", children: [e.jsx(ea, { className: "w-3 h-3 inline mr-1" }), " \u5E03\u5C14"] }), e.jsxs(ne, { value: "string", className: "text-xs", children: [e.jsx(ta, { className: "w-3 h-3 inline mr-1" }), " \u6587\u672C"] }), e.jsxs(ne, { value: "tags", className: "text-xs", children: [e.jsx(zt, { className: "w-3 h-3 inline mr-1" }), " \u6807\u7B7E\u96C6\u5408"] })] })] })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(C, { className: "text-[10px] uppercase text-muted-foreground font-bold", children: "\u521D\u59CB\u503C (Initial)" }), i.type === "number" && e.jsx(A, { type: "number", value: i.initial, onChange: (h) => c(l, { initial: Number(h.target.value) }), className: "h-8 text-sm font-mono" }), i.type === "boolean" && e.jsxs("div", { className: "flex items-center gap-2 h-8", children: [e.jsx(tt, { checked: i.initial, onCheckedChange: (h) => c(l, { initial: h }) }), e.jsx("span", { className: "text-xs font-medium", children: i.initial ? "\u5F00\u542F/\u771F" : "\u5173\u95ED/\u5047" })] }), i.type === "string" && e.jsx(A, { value: i.initial, onChange: (h) => c(l, { initial: h.target.value }), className: "h-8 text-sm" }), i.type === "tags" && e.jsx(A, { value: i.initial.join(", "), onChange: (h) => c(l, { initial: h.target.value.split(pr).map((p) => p.trim()).filter(Boolean) }), placeholder: "\u9017\u53F7\u5206\u9694\u521D\u59CB\u6807\u7B7E", className: "h-8 text-sm" })] }), i.type === "number" && e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-1", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(C, { className: "text-[10px] text-muted-foreground", children: "\u6700\u5C0F\u503C" }), e.jsx(A, { type: "number", value: i.min ?? "", onChange: (h) => c(l, { min: h.target.value ? Number(h.target.value) : void 0 }), className: "h-7 text-[10px] px-2" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(C, { className: "text-[10px] text-muted-foreground", children: "\u6700\u5927\u503C" }), e.jsx(A, { type: "number", value: i.max ?? "", onChange: (h) => c(l, { max: h.target.value ? Number(h.target.value) : void 0 }), className: "h-7 text-[10px] px-2" })] })] })] })] })] }, l)) })] });
}, Qe = { id: "", characterId: "", roleTaskPrompt: "", userGuidance: "", name: "", description: "", goals: [], failureChecks: [], variables: {}, tags: [] }, Ze = {}, et = {}, W = he({ formData: { ...Qe }, variables: { ...Ze }, variableConfigs: { ...et }, updateField(s, t) {
  this.formData[s] = t;
}, setVariables(s) {
  this.variables = { ...s };
}, setVariableConfigs(s) {
  this.variableConfigs = { ...s };
}, updateVariablesAndConfigs(s, t) {
  this.variables = { ...s }, this.variableConfigs = { ...t };
}, setTags(s) {
  this.formData.tags = s;
}, loadInitialData(s) {
  s ? (Object.assign(this.formData, { ...s, goals: s.goals || [], failureChecks: s.failureChecks || [], variables: s.variables || {}, tags: s.tags || [], ...s.createdAt ? { createdAt: s.createdAt } : {}, ...s.updatedAt ? { updatedAt: s.updatedAt } : {} }), this.variableConfigs = s.variables || {}) : (Object.assign(this.formData, Qe), this.variables = { ...Ze }, this.variableConfigs = { ...et });
}, resetForm() {
  Object.assign(this.formData, Qe), this.variables = { ...Ze }, this.variableConfigs = { ...et };
}, getFormDataForSave() {
  return { ...xe(this.formData), variables: xe(this.variableConfigs) };
} }), xr = /[,，]/, dn = (s) => {
  var _a2;
  const t = f.useId(), a = it(W);
  f.useEffect(() => {
    W.loadInitialData(s.initialData);
  }, [s.initialData]);
  const r = (n) => {
    n.preventDefault(), s.onSave(W.getFormDataForSave());
  };
  return e.jsxs(P, { className: "max-w-4xl mx-auto shadow-lg border-muted/60", children: [e.jsx(L, { className: "pb-4", children: e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: e.jsx(we, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(R, { className: "text-xl", children: "\u6311\u6218\u8BBE\u8BA1\u5DE5\u4F5C\u5BA4" }), e.jsx(Z, { children: "\u8BBE\u8BA1\u5173\u5361\u76EE\u6807\u3001\u6570\u503C\u53D8\u91CF\u4E0E\u53D9\u4E8B\u89C4\u5219" })] })] }) }) }), e.jsxs("form", { onSubmit: r, children: [e.jsx($, { children: e.jsxs(Ft, { defaultValue: "base", className: "w-full", children: [e.jsxs(Ot, { className: "grid grid-cols-4 w-full h-11 bg-muted/30 p-1 mb-8", children: [e.jsxs(ie, { value: "base", className: "gap-2", children: [e.jsx(Le, { className: "w-4 h-4" }), " \u57FA\u7840\u8BBE\u5B9A"] }), e.jsxs(ie, { value: "goals", className: "gap-2", children: [e.jsx(sa, { className: "w-4 h-4" }), " \u4EFB\u52A1\u76EE\u6807"] }), e.jsxs(ie, { value: "failures", className: "gap-2", children: [e.jsx(aa, { className: "w-4 h-4" }), " \u5931\u8D25\u6761\u4EF6"] }), e.jsxs(ie, { value: "variables", className: "gap-2", children: [e.jsx(at, { className: "w-4 h-4" }), " \u6570\u503C\u53D8\u91CF"] })] }), e.jsx(ce, { value: "base", className: "space-y-6 animate-in fade-in-50 duration-300", children: e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${t}-name`, children: "\u6311\u6218\u540D\u79F0" }), e.jsx(A, { id: `${t}-name`, value: a.formData.name, onChange: (n) => W.updateField("name", n.target.value), placeholder: "\u5982\uFF1A\u8FF7\u5931\u4E4B\u57CE\u7684\u5951\u7EA6", required: true })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${t}-charId`, children: "\u7ED1\u5B9A\u89D2\u8272 ID" }), e.jsx(A, { id: `${t}-charId`, value: a.formData.characterId, onChange: (n) => W.updateField("characterId", n.target.value), placeholder: "\u4F8B\u5982: kallen-123", required: true })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${t}-desc`, children: "\u80CC\u666F\u4ECB\u7ECD\u4E0E\u89C4\u5219\u8BF4\u660E" }), e.jsx(B, { id: `${t}-desc`, value: a.formData.description, onChange: (n) => W.updateField("description", n.target.value), placeholder: "\u63CF\u8FF0\u8BE5\u6311\u6218\u7684\u80CC\u666F\u6545\u4E8B\uFF0C\u4EE5\u53CA\u73A9\u5BB6\u9700\u8981\u9075\u5B88\u7684\u7279\u6B8A\u89C4\u5219...", className: "min-h-32 leading-relaxed" })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${t}-roleTask`, children: "\u89D2\u8272\u4EFB\u52A1\u63D0\u793A\u8BCD (DM\u89C6\u89D2)" }), e.jsx(B, { id: `${t}-roleTask`, value: a.formData.roleTaskPrompt, onChange: (n) => W.updateField("roleTaskPrompt", n.target.value), placeholder: "\u5728\u8BE5\u6311\u6218\u4E2D\uFF0C\u901A\u8FC7AI\u7CFB\u7EDF\u53D1\u7ED9\u89D2\u8272\u7684\u7279\u6B8A\u6307\u4EE4...", className: "min-h-24 text-xs font-mono" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${t}-userGuidance`, children: "\u7528\u6237\u6307\u5F15\u8BF4\u660E" }), e.jsx(B, { id: `${t}-userGuidance`, value: a.formData.userGuidance, onChange: (n) => W.updateField("userGuidance", n.target.value), placeholder: "\u7ED9\u8FDB\u5165\u6311\u6218\u7684\u7528\u6237\u7684\u6587\u5B57\u6307\u5F15...", className: "min-h-24 text-xs font-mono" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(C, { htmlFor: `${t}-tags`, children: "\u6311\u6218\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)" }), e.jsx(A, { id: `${t}-tags`, value: (_a2 = a.formData.tags) == null ? void 0 : _a2.join(", "), onChange: (n) => W.setTags(n.target.value.split(xr).map((o) => o.trim()).filter(Boolean)), placeholder: "\u5947\u5E7B, \u60AC\u7591, \u9AD8\u96BE\u5EA6" })] })] }) }), e.jsx(ce, { value: "goals", className: "animate-in fade-in-50 duration-300", children: e.jsx(It, { value: a.formData.goals, variables: a.variableConfigs, onChange: (n) => W.updateField("goals", n) }) }), e.jsx(ce, { value: "failures", className: "animate-in fade-in-50 duration-300", children: e.jsx(It, { title: "\u5931\u8D25\u68C0\u67E5", description: "\u5B9A\u4E49\u5BFC\u81F4\u6311\u6218\u5931\u8D25\u7684\u6761\u4EF6", value: a.formData.failureChecks, variables: a.variableConfigs, onChange: (n) => W.updateField("failureChecks", n) }) }), e.jsx(ce, { value: "variables", className: "animate-in fade-in-50 duration-300", children: e.jsx(gr, { variables: a.variables, variableConfigs: a.variableConfigs, onChange: (n, o) => W.updateVariablesAndConfigs(n, o) }) })] }) }), e.jsxs(dt, { className: "flex justify-between border-t py-6 bg-muted/10", children: [e.jsxs(j, { variant: "ghost", type: "button", onClick: s.onCancel, className: "rounded-lg h-11 px-6", children: [e.jsx(Gt, { className: "w-4 h-4 mr-2" }), " \u653E\u5F03\u4FEE\u6539"] }), e.jsxs(j, { type: "submit", className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20", children: [e.jsx(Vt, { className: "w-4 h-4 mr-2" }), " \u4FDD\u5B58\u6311\u6218\u8BBE\u8BA1"] })] })] })] });
}, fr = (s) => !s.lorebook || !s.lorebook.entries || s.lorebook.entries.length === 0 ? e.jsx(P, { className: "bg-muted/20 border-dashed", children: e.jsxs($, { className: "py-10 flex flex-col items-center justify-center text-muted-foreground", children: [e.jsx(ra, { className: "w-10 h-10 mb-3 opacity-20" }), e.jsx("p", { className: "text-sm", children: "\u8BE5\u89D2\u8272\u6682\u65E0\u7ED1\u5B9A\u7684\u77E5\u8BC6\u4E66 (Lorebook)" })] }) }) : e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-wrap gap-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-muted/50 px-3 py-1.5 rounded-full border", children: [e.jsx(Ne, { className: "w-3.5 h-3.5 text-primary" }), e.jsx("span", { className: "font-medium text-muted-foreground mr-1", children: "\u626B\u63CF\u6DF1\u5EA6:" }), s.lorebook.scan_depth ?? 50] }), e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-muted/50 px-3 py-1.5 rounded-full border", children: [e.jsx(Ht, { className: "w-3.5 h-3.5 text-blue-500" }), e.jsx("span", { className: "font-medium text-muted-foreground mr-1", children: "Token \u9884\u7B97:" }), s.lorebook.token_budget ?? 500] }), s.lorebook.recursive_scanning && e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-green-500/5 text-green-600 px-3 py-1.5 rounded-full border border-green-500/20", children: [e.jsx(na, { className: "w-3.5 h-3.5" }), "\u9012\u5F52\u626B\u63CF\u5DF2\u5F00\u542F"] })] }), e.jsx("div", { className: "grid grid-cols-1 gap-4", children: s.lorebook.entries.map((t, a) => e.jsx(P, { className: "overflow-hidden group hover:border-primary/40 transition-colors shadow-sm", children: e.jsxs("div", { className: "flex", children: [e.jsx("div", { className: "w-1 bg-primary group-hover:w-2 transition-all shrink-0" }), e.jsxs("div", { className: "grow", children: [e.jsxs(L, { className: "py-4 flex flex-row items-start justify-between space-y-0", children: [e.jsxs("div", { className: "space-y-1.5 grow", children: [e.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [e.jsx(R, { className: "text-base font-bold", children: t.name || `\u6761\u76EE ${a + 1}` }), !t.enabled && e.jsx(H, { variant: "secondary", children: "\u5DF2\u7981\u7528" }), t.constant && e.jsx(H, { variant: "outline", className: "text-amber-600 border-amber-200 bg-amber-50", children: "\u5E38\u91CF" })] }), e.jsx("div", { className: "flex flex-wrap gap-1.5", children: t.keys.map((r) => e.jsxs("div", { className: "flex items-center gap-1 bg-primary/5 text-[10px] text-primary px-1.5 py-0.5 rounded border border-primary/10 font-mono", children: [e.jsx(zt, { className: "w-2.5 h-2.5" }), r] }, `key-${r}-${t.id || a}`)) })] }), e.jsxs("div", { className: "text-[10px] text-muted-foreground font-mono text-right shrink-0 ml-4", children: ["Order: ", t.insertion_order, " ", e.jsx("br", {}), "Pos: ", t.position === "before_char" ? "Before Char" : "After Char"] })] }), e.jsxs($, { className: "pb-4", children: [e.jsx("div", { className: "text-sm bg-muted/30 p-3 rounded-lg border text-muted-foreground leading-relaxed whitespace-pre-wrap", children: t.content }), t.comment && e.jsxs("p", { className: "mt-2 text-[10px] text-muted-foreground italic flex items-center gap-1", children: [e.jsx(Ne, { className: "w-2.5 h-2.5 opacity-50" }), "\u6CE8: ", t.comment] })] })] })] }) }, t.id || `entry-${a}`)) })] }), mn = (s) => e.jsx("div", { className: "space-y-6", children: e.jsxs(Ft, { defaultValue: "basic", className: "w-full", children: [e.jsxs(Ot, { className: "grid grid-cols-4 w-full h-11 bg-muted/30 p-1 mb-6", children: [e.jsx(ie, { value: "basic", className: "data-[state=active]:bg-background", children: "\u57FA\u7840\u8BBE\u5B9A" }), e.jsx(ie, { value: "prompt", className: "data-[state=active]:bg-background", children: "\u63D0\u793A\u8BCD\u6A21\u677F" }), e.jsx(ie, { value: "lorebook", className: "data-[state=active]:bg-background", children: "\u77E5\u8BC6\u4E66" }), e.jsx(ie, { value: "advanced", className: "data-[state=active]:bg-background", children: "\u9AD8\u7EA7/\u6269\u5C55" })] }), e.jsxs(ce, { value: "basic", className: "space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [e.jsxs(P, { className: "shadow-xs border-muted/50", children: [e.jsx(L, { className: "py-4", children: e.jsxs(R, { className: "text-sm flex items-center gap-2", children: [e.jsx(ut, { className: "w-4 h-4 text-primary" }), "\u4EBA\u683C\u4E0E\u8EAB\u4E16"] }) }), e.jsxs($, { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(pe, { children: "\u4EBA\u683C\u63CF\u8FF0 (Personality)" }), e.jsx(re, { children: s.character.personality })] }), e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(pe, { children: "\u89D2\u8272\u63CF\u8FF0 (Description)" }), e.jsx(re, { children: s.character.description })] })] })] }), e.jsxs(P, { className: "shadow-xs border-muted/50", children: [e.jsx(L, { className: "py-4", children: e.jsxs(R, { className: "text-sm flex items-center gap-2", children: [e.jsx(pt, { className: "w-4 h-4 text-green-500" }), "\u5F00\u573A\u8BED\u4E0E\u793A\u4F8B"] }) }), e.jsxs($, { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(pe, { children: "\u7B2C\u4E00\u6761\u6D88\u606F (First Message)" }), e.jsx(re, { variant: "primary", children: s.character.first_mes })] }), e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(pe, { children: "\u5BF9\u8BDD\u573A\u666F\u63CF\u8FF0 (Scenario)" }), e.jsx(re, { children: s.character.scenario })] }), s.character.alternate_greetings.length > 0 && e.jsxs("div", { className: "space-y-1.5", children: [e.jsxs(pe, { children: ["\u5907\u7528\u95EE\u5019\u8BED (", s.character.alternate_greetings.length, ")"] }), e.jsx("div", { className: "space-y-2", children: s.character.alternate_greetings.map((t, a) => e.jsx(re, { className: "py-2 opacity-80", children: t }, `alt-greet-${a}-${t.length}`)) })] })] })] })] }), e.jsxs(P, { className: "shadow-xs border-muted/50", children: [e.jsx(L, { className: "py-4", children: e.jsxs(R, { className: "text-sm flex items-center gap-2", children: [e.jsx(ia, { className: "w-4 h-4 text-amber-500" }), "\u6D88\u606F\u793A\u4F8B (Message Examples)"] }) }), e.jsx($, { children: e.jsx(re, { className: "font-mono text-xs", children: s.character.mes_example }) })] })] }), e.jsxs(ce, { value: "prompt", className: "space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs(P, { className: "border-muted/50", children: [e.jsxs(L, { className: "py-4", children: [e.jsxs(R, { className: "text-sm flex items-center gap-2 text-blue-600", children: [e.jsx(Le, { className: "w-4 h-4" }), "\u7CFB\u7EDF\u63D0\u793A\u8BCD\u6A21\u677F (System Prompt)"] }), e.jsx(Z, { className: "text-[11px]", children: "\u5C06\u63D2\u5165\u5230\u5BF9\u8BDD\u5386\u53F2\u7684\u6700\u524D\u65B9\uFF0C\u7528\u4E8E\u5B9A\u4E49\u89D2\u8272\u7684\u6838\u5FC3\u884C\u4E3A\u51C6\u5219\u3002" })] }), e.jsx($, { children: e.jsx(re, { className: "font-mono text-xs bg-blue-500/2 border-blue-500/10", children: s.character.system_prompt || "\u4F7F\u7528\u5168\u5C40\u9ED8\u8BA4\u8BBE\u7F6E" }) })] }), e.jsxs(P, { className: "border-muted/50", children: [e.jsxs(L, { className: "py-4", children: [e.jsxs(R, { className: "text-sm flex items-center gap-2 text-purple-600", children: [e.jsx(ca, { className: "w-4 h-4" }), "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"] }), e.jsx(Z, { className: "text-[11px]", children: "\u5C06\u63D2\u5165\u5230\u6BCF\u6761\u8BF7\u6C42\u6D88\u606F\u4E4B\u540E\uFF0C\u7528\u4E8E\u5F3A\u5236 LLM \u9075\u5B88\u7279\u5B9A\u8F93\u51FA\u683C\u5F0F\u3002" })] }), e.jsx($, { children: e.jsx(re, { className: "font-mono text-xs bg-purple-500/2 border-purple-500/10", children: s.character.post_history_instructions || "\u65E0\u7279\u5B9A\u6307\u4EE4" }) })] })] }), e.jsx(ce, { value: "lorebook", className: "animate-in fade-in-50 duration-300", children: e.jsx(fr, { lorebook: s.character.character_book }) }), e.jsx(ce, { value: "advanced", className: "space-y-6 animate-in fade-in-50 duration-300", children: e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [e.jsxs(P, { className: "border-muted/50", children: [e.jsx(L, { className: "py-4", children: e.jsx(R, { className: "text-sm", children: "\u5143\u6570\u636E\u4FE1\u606F" }) }), e.jsxs($, { className: "space-y-3", children: [e.jsx(Ee, { label: "\u521B\u5EFA\u8005", value: s.character.creator }), e.jsx(Ee, { label: "\u89D2\u8272\u7248\u672C", value: s.character.character_version }), e.jsx(Ee, { label: "\u521B\u5EFA\u4E8E", value: s.character.createdAt ? new Date(s.character.createdAt).toLocaleString() : "-" }), e.jsx(Ee, { label: "\u66F4\u65B0\u4E8E", value: s.character.updatedAt ? new Date(s.character.updatedAt).toLocaleString() : "-" }), e.jsxs("div", { className: "pt-2", children: [e.jsx(pe, { children: "\u521B\u5EFA\u8005\u7B14\u8BB0 (Creator Notes)" }), e.jsx(re, { className: "mt-1 text-xs", children: s.character.creator_notes })] })] })] }), e.jsxs(P, { className: "border-muted/50", children: [e.jsx(L, { className: "py-4", children: e.jsx(R, { className: "text-sm", children: "\u6269\u5C55\u5B57\u6BB5 (Extensions)" }) }), e.jsx($, { children: e.jsx("div", { className: "max-h-75 overflow-auto rounded-lg border bg-muted/20 p-4", children: e.jsx("pre", { className: "text-[10px] font-mono leading-tight", children: JSON.stringify(s.character.extensions, null, 2) }) }) })] })] }) })] }) }), pe = (s) => e.jsx("span", { className: "text-[11px] font-bold text-muted-foreground/80 uppercase tracking-widest block", children: s.children }), re = (s) => e.jsx("div", { className: `text-sm rounded-lg border p-3 leading-relaxed whitespace-pre-wrap ${s.variant === "primary" ? "bg-primary/5 text-primary/90 border-primary/20 italic" : "bg-muted/30 text-muted-foreground/90 border-muted/50"} ${s.className || ""}`, children: s.children || e.jsx("span", { className: "opacity-30", children: "\u672A\u586B\u5199" }) }), Ee = (s) => e.jsxs("div", { className: "flex justify-between items-center text-xs py-1.5 border-b border-muted/50 last:border-0", children: [e.jsx("span", { className: "text-muted-foreground", children: s.label }), e.jsx("span", { className: "font-mono font-medium", children: s.value ?? "-" })] }), hn = (s) => {
  const t = xt();
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs(P, { className: "border-primary/20 bg-primary/5", children: [e.jsxs(L, { children: [e.jsxs(R, { className: "text-lg flex items-center gap-2", children: [e.jsx(le, { className: "w-5 h-5" }), "\u5F00\u542F\u65B0\u4F1A\u8BDD"] }), e.jsx(Z, { children: "\u9009\u62E9\u4E00\u4E2A\u6A21\u5F0F\u5F00\u59CB\u4E0E\u8BE5\u89D2\u8272\u7684\u6545\u4E8B" })] }), e.jsxs($, { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [e.jsxs(j, { className: "h-auto py-4 flex flex-col items-center gap-2", variant: "outline", onClick: () => s.onStartNew("chat"), type: "button", children: [e.jsx(Rt, { className: "w-6 h-6 text-blue-500" }), e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "font-bold", children: "\u4F20\u7EDF\u804A\u5929\u6A21\u5F0F" }), e.jsx("div", { className: "text-[10px] text-muted-foreground", children: "\u7EAF\u7CB9\u7684\u89D2\u8272RP\u5BF9\u8BDD" })] })] }), e.jsxs(j, { className: "h-auto py-4 flex flex-col items-center gap-2", variant: "outline", onClick: () => s.onStartNew("challenge"), type: "button", children: [e.jsx(Lt, { className: "w-6 h-6 text-amber-500" }), e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "font-bold", children: "\u6311\u6218\u6A21\u5F0F" }), e.jsx("div", { className: "text-[10px] text-muted-foreground", children: "\u542B DM \u65C1\u767D\u4E0E\u76EE\u6807\u6311\u6218" })] })] })] })] }), e.jsxs(P, { children: [e.jsx(L, { children: e.jsx(R, { className: "text-lg", children: "\u5386\u53F2\u4F1A\u8BDD" }) }), e.jsx($, { className: "space-y-3", children: s.sessions.length > 0 ? s.sessions.map((a) => e.jsxs(j, { className: "w-full justify-between items-center h-auto py-4 px-5 border hover:bg-muted/50 transition-colors", variant: "ghost", onClick: () => t({ to: "/session/$sessionId", params: { sessionId: a.id } }), type: "button", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: e.jsx(Jt, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-left", children: [e.jsx("div", { className: "font-semibold", children: "\u7EE7\u7EED\u4E0A\u6B21\u6545\u4E8B" }), e.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: ["\u6700\u540E\u6D3B\u8DC3: ", new Date(a.updatedAt).toLocaleString()] })] })] }), e.jsxs("div", { className: "flex flex-col items-end gap-2", children: [e.jsx(H, { variant: a.mode === "challenge" ? "default" : "secondary", className: "text-[10px]", children: a.mode === "challenge" ? "\u6311\u6218\u6A21\u5F0F" : "\u804A\u5929\u6A21\u5F0F" }), a.mode === "challenge" && e.jsx("span", { className: "text-[10px] text-muted-foreground italic", children: "\u76EE\u6807\u5F85\u8FBE\u6210..." })] })] }, a.id)) : e.jsx("div", { className: "text-center py-10 border rounded-lg border-dashed", children: e.jsx("p", { className: "text-muted-foreground text-sm", children: "\u8FD8\u6CA1\u6709\u8BE5\u89D2\u8272\u7684\u5386\u53F2\u4F1A\u8BDD" }) }) })] })] });
};
function un({ character: s, trigger: t }) {
  const [a, r] = f.useState(false), [n, o] = f.useState(false), m = f.useId(), u = () => {
    try {
      const c = xs(s, { includeImageBase64: n }), l = "data:text/json;charset=utf-8," + encodeURIComponent(c), i = document.createElement("a");
      i.setAttribute("href", l), i.setAttribute("download", `${s.name}.json`), document.body.appendChild(i), i.click(), i.remove(), se.success(`\u89D2\u8272 ${s.name} \u5DF2\u5BFC\u51FA\u4E3A JSON`), r(false);
    } catch (c) {
      se.error("\u5BFC\u51FA\u5931\u8D25"), console.error("Export error:", c);
    }
  };
  return e.jsxs(ct, { open: a, onOpenChange: r, children: [e.jsx(Pt, { asChild: true, children: t || e.jsxs(j, { variant: "outline", size: "sm", className: "flex items-center gap-2", type: "button", children: [e.jsx(Ut, { className: "w-4 h-4" }), "\u5BFC\u51FA JSON"] }) }), e.jsxs(ot, { className: "sm:max-w-md", children: [e.jsx(lt, { children: e.jsx(ze, { children: "\u5BFC\u51FA\u89D2\u8272\u4E3A JSON" }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("p", { className: "text-sm text-muted-foreground", children: ['\u5C06\u89D2\u8272 "', s.name, '" \u5BFC\u51FA\u4E3A JSON \u6587\u4EF6\u3002'] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx($t, { id: `${m}-include-image-single`, checked: n, onCheckedChange: (c) => o(c === true) }), e.jsx(C, { htmlFor: `${m}-include-image-single`, className: "text-sm", children: "\u5305\u542B Base64 \u56FE\u50CF\u6570\u636E" })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: n ? "\u6587\u4EF6\u5C06\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5927\u4F46\u5B8C\u6574\u3002" : "\u6587\u4EF6\u4E0D\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5C0F\u4F46\u9700\u8981\u5355\u72EC\u5904\u7406\u56FE\u50CF\u3002" })] }), e.jsxs("div", { className: "flex justify-end gap-2", children: [e.jsx(j, { variant: "outline", onClick: () => r(false), children: "\u53D6\u6D88" }), e.jsx(j, { onClick: u, children: "\u5BFC\u51FA" })] })] })] });
}
const bs = (s) => {
  const [t, ...a] = s;
  if (["and", "or", "all", "any", "some"].includes(t)) {
    const r = a[0], n = t === "and" || t === "all" ? " \u4E14 " : " \u6216 ";
    return `(${r.map(bs).join(n)})`;
  }
  return t === "isTrue" || t === "isFalse" ? `${a[0]} \u4E3A ${t === "isTrue" ? "\u771F" : "\u5047"}` : `${a[0]} ${t} ${JSON.stringify(a[1])}`;
}, pn = (s) => e.jsxs("div", { className: "space-y-6", children: [e.jsxs(P, { children: [e.jsxs(L, { children: [e.jsxs(R, { className: "text-lg flex items-center gap-2", children: [e.jsx(mt, { className: "w-5 h-5 text-destructive" }), "\u6838\u5FC3\u4ECB\u7ECD"] }), e.jsx(Z, { children: "\u6311\u6218\u80CC\u666F\u4E0E\u4E16\u754C\u89C2\u8BBE\u5B9A" })] }), e.jsx($, { children: e.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap", children: s.challenge.description }) })] }), e.jsxs(P, { children: [e.jsxs(L, { children: [e.jsxs(R, { className: "text-lg flex items-center gap-2", children: [e.jsx(qt, { className: "w-5 h-5 text-primary" }), "\u76EE\u6807\u6311\u6218 (Goals)"] }), e.jsx(Z, { children: "\u5F53\u6240\u6709\u76EE\u6807\u8FBE\u6210\u65F6\uFF0C\u6311\u6218\u5373\u544A\u6210\u529F" })] }), e.jsx($, { className: "space-y-4", children: s.challenge.goals.map((t, a) => e.jsxs("div", { className: "flex gap-4 p-4 rounded-lg bg-muted/40 border group hover:border-primary/50 transition-colors", children: [e.jsx("div", { className: "w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0", children: a + 1 }), e.jsxs("div", { className: "grow", children: [e.jsx("div", { className: "font-medium text-sm", children: t.description }), e.jsxs("div", { className: "text-[10px] text-muted-foreground mt-2 font-mono flex items-center gap-2", children: [e.jsx(H, { variant: "outline", className: "text-[9px] font-mono py-0 h-4 shrink-0", children: "Condition" }), e.jsx("span", { className: "truncate", children: bs(t.condition) })] })] })] }, t.key)) })] }), e.jsxs(P, { children: [e.jsx(L, { children: e.jsxs(R, { className: "text-lg flex items-center gap-2", children: [e.jsx(Re, { className: "w-5 h-5 text-secondary" }), "\u53D8\u91CF\u914D\u7F6E (Variables)"] }) }), e.jsx($, { children: e.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: Object.entries(s.challenge.variables).map(([t, a]) => e.jsxs("div", { className: "p-3 rounded-md bg-muted/30 border flex justify-between items-center", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx("div", { className: "text-xs font-bold font-mono", children: t }), e.jsxs("div", { className: "text-[10px] text-muted-foreground", children: ["\u521D\u59CB\u503C: ", String(a.initial ?? "null")] })] }), e.jsx(H, { variant: "secondary", className: "text-[10px] capitalize", children: a.type })] }, t)) }) })] })] }), gn = (s) => {
  const t = xt();
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs(P, { className: "border-primary/20 bg-primary/5", children: [e.jsxs(L, { children: [e.jsxs(R, { className: "text-lg flex items-center gap-2", children: [e.jsx(gt, { className: "w-5 h-5 text-primary" }), "\u4EE5\u6B64\u5267\u672C\u5F00\u542F\u65B0\u6311\u6218"] }), e.jsx(Z, { children: "\u8BF7\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u4F5C\u4E3A\u6311\u6218\u7684\u4E3B\u89D2" })] }), e.jsx($, { className: "space-y-3", children: e.jsx("div", { className: "grid grid-cols-1 gap-2", children: s.characters.map((a) => e.jsxs(j, { variant: "outline", className: "w-full justify-start gap-4 h-14 bg-background", onClick: () => s.onStartNew(a.id), type: "button", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0", children: e.jsx(oa, { className: "w-4 h-4 text-muted-foreground" }) }), e.jsxs("div", { className: "text-left", children: [e.jsxs("div", { className: "font-semibold text-sm", children: ["\u4F7F\u7528 ", a.name] }), e.jsx("div", { className: "text-[10px] text-muted-foreground truncate max-w-50", children: a.description })] })] }, a.id)) }) })] }), e.jsxs(P, { children: [e.jsx(L, { children: e.jsx(R, { className: "text-lg", children: "\u5DF2\u5B58\u6311\u6218\u8FDB\u5EA6" }) }), e.jsx($, { className: "space-y-3", children: s.sessions.length > 0 ? s.sessions.map((a) => e.jsxs(j, { className: "w-full justify-between items-center h-auto py-4 px-5 border hover:bg-muted/50 transition-colors", variant: "ghost", onClick: () => t({ to: "/session/$sessionId", params: { sessionId: a.id } }), type: "button", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: e.jsx(Jt, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-left", children: [e.jsx("div", { className: "font-semibold", children: "\u7EE7\u7EED\u6311\u6218" }), e.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: ["\u6700\u540E\u6D3B\u8DC3: ", new Date(a.updatedAt).toLocaleString()] })] })] }), e.jsxs("div", { className: "flex flex-col items-end gap-1", children: [e.jsx(H, { variant: "outline", className: "text-[9px] h-5", children: "\u4EE5\u6B64\u5267\u672C\u8FDB\u53D1" }), e.jsx("span", { className: "text-[10px] text-muted-foreground italic", children: a.characterId ? `\u89D2\u8272 ID: ${a.characterId.slice(0, 8)}...` : "\u672A\u77E5\u89D2\u8272" })] })] }, a.id)) : e.jsx("div", { className: "text-center py-10 border rounded-lg border-dashed", children: e.jsx("p", { className: "text-muted-foreground text-sm", children: "\u8FD8\u6CA1\u6709\u57FA\u4E8E\u6B64\u5267\u672C\u7684\u6311\u6218\u8BB0\u5F55" }) }) })] })] });
}, ys = { characters: ke, challenges: je, sessions: De, createSessionDB: (s) => new ls(s) }, br = { groupingDelayMs: 6e4 };
class de {
  constructor(t, a) {
    __publicField(this, "state");
    __publicField(this, "options", jt(br));
    this.state = t, a && this.assignOptions(a);
  }
  assignOptions(t) {
    Object.assign(this.options, t);
  }
  setOptions(t) {
    this.options = jt(t);
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
    if (t.type === "character_message") this.addCharacterMessageIntoHistory(t);
    else {
      const a = { ...t, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
      this.state.historyItems.push(a);
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
      const a = { ...t, processing: true };
      this.state.processingItem = a;
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
      const n = [];
      let o = r;
      for (; o < t.length && t[o].type === "character_message"; ) n.push(t[o]), o++;
      if (n.length > 1) {
        for (let i = 0; i < n.length - 1; i++) a.push(U.parse({ id: V(), type: "placeholder", idx: n[i].idx, data: null }));
        const m = n[0].data.characterId, u = n.map((i) => ({ content: i.data.content, timestamp: i.timestamp || void 0, originalIdx: i.idx })), c = n.at(-1);
        if (!c) throw new Error("No last candidate");
        const l = { id: V(), type: "character_message_group", data: { characterId: m || "", list: u, name: n[0].data.name, role: n[0].data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: c.idx, orderRef: 0, timestamp: Date.now() };
        a.push(l);
      } else a.push(n[0]);
      r = o;
    } else a.push(t[r]), r++;
    return a;
  }
  spliceHistoryItems(t, a, r, n = true) {
    if (this.state.historyItems.splice(t, a, ...r), n) for (let o = t; o < this.state.historyItems.length; o++) this.state.historyItems[o].idx = o;
  }
  performGroupingOnTailingHistoryItems() {
    const t = this.getLastHistoryItem();
    if (t && t.type === "character_message_group") return;
    let a = this.state.historyItems.length - 1;
    for (; a >= 0 && this.state.historyItems[a].type === "character_message"; ) a--;
    if (a++, a >= this.state.historyItems.length) return;
    const r = this.state.historyItems.slice(a), n = de.makeGroupedCharacterMessages(r);
    this.spliceHistoryItems(a, r.length, n, false);
  }
  performGroupingOnAllHistoryItems() {
    const t = de.makeGroupedCharacterMessages(this.state.historyItems);
    this.spliceHistoryItems(0, this.state.historyItems.length, t, false);
  }
  addCharacterMessageIntoHistoryDirectly(t) {
    const a = { ...t, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
    this.state.historyItems.push(a);
  }
  addCharacterMessageIntoHistoryAsNewGroup(t) {
    const a = [{ content: t.data.content, timestamp: Date.now(), originalIdx: this.state.historyItems.length }], r = { id: V(), type: "character_message_group", data: { characterId: t.data.characterId || "", list: a, name: t.data.name, role: t.data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: this.state.historyItems.length, orderRef: 0, timestamp: Date.now() };
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
    const a = this.getItemsByType("summary").map((m) => m.data.range).sort((m, u) => m[0] - u[0]), r = [];
    for (const [m, u] of a) {
      const c = r.at(-1);
      r.length === 0 || c && c[1] < m ? r.push([m, u]) : c && (c[1] = Math.max(c[1], u));
    }
    const n = [];
    let o = 0;
    for (const [m, u] of r) {
      for (; o < m; ) n.push(o), o++;
      o = Math.max(o, u + 1);
    }
    for (; o < this.state.historyItems.length; ) n.push(o), o++;
    return n;
  }
  addLLMResponseAsContextItem(t, a) {
    const r = V();
    let n;
    t.role === "assistant" && a.characterId ? n = { id: r, type: "character_message", orderRef: 0, timestamp: Date.now(), data: { characterId: a.characterId, content: t.content, name: void 0 } } : t.role === "user" ? n = { id: r, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: t.content, name: void 0, isUser: true, role: "user" } } : n = { id: r, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: t.content, name: t.role } }, this.addHistoryItem(n);
  }
  getFlatHistoryItems(t) {
    const a = [];
    for (const r of this.state.historyItems) if (r.type === "character_message_group") {
      const n = r, o = n.data.list.map((m) => ({ id: V(), type: "character_message", idx: r.idx, orderRef: r.orderRef, timestamp: m.timestamp || r.timestamp, hidden: r.hidden, deleted: r.deleted, data: { characterId: n.data.characterId, content: m.content, name: n.data.name, role: n.data.role, isCharacter: true, isUser: false, isDM: false, isEnv: false } }));
      a.push(...o);
    } else a.push(r);
    return t && t > 0 ? a.slice(-t) : a;
  }
  getLastUserMessage() {
    return this.getFlatHistoryItems().findLast((t) => (t.type === "participant_message" || t.type === "character_message") && (t.data.isUser || t.data.role === "user"));
  }
}
const yr = /\{\{([^:]+):([^}]+)\}\}/gi, vr = /^d/i;
function vs(s, t, a) {
  let r = s;
  const n = t.nickname || t.name || "{{char}}", o = (a == null ? void 0 : a.userName) || "{{user}}";
  return r = r.replace(/\{\{char\}\}/gi, n), r = r.replace(/\{\{user\}\}/gi, o), r = r.replace(/<BOT>/gi, n), r = r.replace(/<USER>/gi, o), r = r.replace(yr, (m, u, c) => {
    switch (u.toLowerCase()) {
      case "random": {
        const i = c.split(",").map((h) => h.replace(/\\,/g, ",").trim());
        return i[Math.floor(Math.random() * i.length)] || "";
      }
      case "pick": {
        const i = c.split(",").map((h) => h.replace(/\\,/g, ",").trim());
        return i[Math.floor(Math.random() * i.length)] || "";
      }
      case "roll": {
        const i = Number.parseInt(c.replace(vr, ""), 10);
        return Number.isNaN(i) || i < 1 ? "1" : (Math.floor(Math.random() * i) + 1).toString();
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
function jr(s, t) {
  const a = js(s, t), r = [s.first_mes, ...(s == null ? void 0 : s.alternate_greetings) ?? []], n = r[Math.floor(Math.random() * r.length)], o = vs(n, s, t), m = { id: V(), type: "starting_system_message", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: a } }, u = { id: V(), type: "character_intro", idx: 1, orderRef: 0, timestamp: Date.now() + 1, data: { characterId: s.id, content: o } };
  return [m, u];
}
const vt = (s, t) => {
  if ((t == null ? void 0 : t.characterId) === void 0) return [];
  const a = wa.parse(s), r = [];
  for (const n of a.historyItems) if (!(n.deleted || n.hidden)) switch (n.type) {
    case "starting_system_message":
    case "in_context_system_message":
      r.push({ role: "system", content: n.data.content, name: n.data.name });
      break;
    case "character_intro":
      r.push({ role: "assistant", content: n.data.content, name: n.data.name });
      break;
    case "participant_message":
    case "character_message": {
      const o = n.data, m = o.characterId === t.characterId;
      r.push({ role: m ? "assistant" : "user", content: o.content, name: o.name });
      break;
    }
    case "participant_message_group":
    case "character_message_group": {
      const o = n.data, m = o.characterId === t.characterId, u = o.list.map((c) => c.content).join(`
`);
      r.push({ role: m ? "assistant" : "user", content: u, name: o.name });
      break;
    }
    case "summary":
      r.push({ role: "user", content: n.data.content });
      break;
    case "llm_message":
    case "story_telling":
      r.push({ role: n.data.role, content: n.data.content, name: n.data.name });
      break;
    case "tool_message":
      r.push({ role: "tool", content: n.data.content, name: n.data.name });
      break;
  }
  return r;
}, kt = Object.freeze(Object.defineProperty({ __proto__: null, makeChatModeCharacterSystemPrompt_CN: js, makeChatModeLLMMessagesFromContextStateForCharacterId: vt, makeChatModeStartingContextItems_CN: jr }, Symbol.toStringTag, { value: "Module" })), q = he({ currentSession: null, contextManager: null, get messages() {
  if (!this.contextManager || !this.currentSession) return [];
  const s = vt(this.contextManager.state, { characterId: this.currentSession.modeConfig.characterId });
  return Array.isArray(s) ? s : [];
}, startNewSession(s, t) {
  const a = { id: V(), contextId: null, mode: "chat", modeConfig: s, modeState: { currentPhase: "character_first_msg" }, createdAt: Date.now(), updatedAt: Date.now(), isActive: true };
  this.currentSession = a;
  const r = new de(t || { historyItems: [], processingItem: void 0 });
  return r.state = he(r.state), this.contextManager = r, a;
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
  this.currentSession = s.session, s.contextState && (this.contextManager = new de(s.contextState), this.contextManager.state = he(this.contextManager.state));
}, loadSession(s) {
  this.currentSession = s;
}, async saveNewContextItemsToDB(s, t) {
  const { SessionDB: a } = await Ce(async () => {
    const { SessionDB: n } = await Promise.resolve().then(() => hs);
    return { SessionDB: n };
  }, void 0);
  await new a(s).addContextItems(t);
} }), _s = (s) => {
  const { item: t, character: a } = s;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden", children: a.imageBase64 || a.avatar ? e.jsx("img", { src: a.imageBase64 || a.avatar, alt: a.name, className: "w-full h-full object-cover" }) : e.jsx(be, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: a.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: t.data.content }), t.processing && e.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, He = (s) => {
  const { item: t, character: a } = s;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden", children: a.imageBase64 || a.avatar ? e.jsx("img", { src: a.imageBase64 || a.avatar, alt: a.name, className: "w-full h-full object-cover" }) : e.jsx(be, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: a.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: t.data.content }), t.processing && e.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, nt = (s) => {
  const { item: t } = s;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 flex-row-reverse group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105", children: e.jsx(ut, { className: "w-5 h-5 text-secondary-foreground" }) }), e.jsxs("div", { className: "space-y-1.5 text-right grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2 justify-end", children: "Player" }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap bg-primary/5 text-foreground p-4 rounded-2xl inline-block text-left min-w-25 shadow-sm", children: t.data.content })] })] });
};
function _r(s, t) {
  const a = ga(), r = f.useRef(false), n = f.useCallback(async (m) => {
    if (!(r.current || !t || t.getHistoryCount() > 0 || !s)) try {
      r.current = true;
      const { makeChatModeStartingContextItems_CN: u } = await Ce(async () => {
        const { makeChatModeStartingContextItems_CN: i } = await Promise.resolve().then(() => kt);
        return { makeChatModeStartingContextItems_CN: i };
      }, void 0), c = u(s);
      for (const i of c) t.addHistoryItem(i);
      const l = c.find((i) => i.type === "character_intro");
      if (l && m) {
        const i = l.data.content.split(" ");
        let h = "";
        for (const p of i) h += (h ? " " : "") + p, m(h), await new Promise((g) => setTimeout(g, 50));
      }
    } catch (u) {
      console.error("Initialize Chat Error:", u), se.error("\u521D\u59CB\u5316\u804A\u5929\u5931\u8D25");
    } finally {
      r.current = false;
    }
  }, [t, s]), o = f.useCallback(async (m, u) => {
    if (!(r.current || !s || !t)) try {
      r.current = true, t.addLLMResponseAsContextItem({ role: "user", content: m }, {});
      const { makeChatModeLLMMessagesFromContextStateForCharacterId: c } = await Ce(async () => {
        const { makeChatModeLLMMessagesFromContextStateForCharacterId: g } = await Promise.resolve().then(() => kt);
        return { makeChatModeLLMMessagesFromContextStateForCharacterId: g };
      }, void 0), i = c(t.state, { characterId: s.id }).map((g) => ({ id: V(), role: g.role, content: g.content, name: g.name })), h = { id: V(), type: "character_message", orderRef: 0, timestamp: Date.now(), data: { characterId: s.id, content: "", name: s.name } };
      t.setProcessingItem(h);
      let p = "";
      await a.callLLMStream(i, (g, w) => {
        p = w, u == null ? void 0 : u(g);
        const D = t.getProcessingItem();
        D && (D.data.content = p);
      }), h.data.content = p, t.completeProcessingItem();
    } catch (c) {
      console.error("ChatLoop Error:", c), se.error(`\u804A\u5929\u9519\u8BEF: ${c instanceof Error ? c.message : String(c)}`);
    } finally {
      r.current = false;
    }
  }, [t, s, a]);
  return { initializeChat: n, sendUserMessage: o };
}
const Nr = (s) => {
  var _a2;
  const [t, a] = f.useState(""), r = f.useRef(null), [n, o] = f.useState(false), [m, u] = f.useState(""), [c, l] = f.useState(false), { data: i = [] } = Ue((b) => b.from({ s: De })), { data: h = [] } = Ue((b) => b.from({ c: ke })), p = i.find((b) => b.id === s.sessionId), g = h.find((b) => b.id === (p == null ? void 0 : p.characterId));
  f.useEffect(() => {
    let b = false;
    return l(false), (async () => {
      if (p) try {
        const y = await ys.createSessionDB(p.id).getContextItems();
        if (b) return;
        const me = { historyItems: y, processingItem: void 0 }, Ke = new de(me);
        q.contextManager = Ke, Se(p.id), l(true);
      } catch {
        if (!b) {
          const T = new de({ historyItems: [], processingItem: void 0 });
          q.contextManager = T, l(true);
        }
      }
    })(), () => {
      b = true;
    };
  }, [p]), f.useEffect(() => () => {
    s.sessionId && Se(s.sessionId);
  }, [s.sessionId]);
  const { sendUserMessage: w, initializeChat: D } = _r(g, q.contextManager);
  if (f.useEffect(() => {
    var _a3;
    c && ((_a3 = q.contextManager) == null ? void 0 : _a3.getHistoryCount()) === 0 && g && p && (async () => {
      if (await D((x) => {
        u((T) => T + x);
      }), q.contextManager) {
        const x = q.contextManager.getHistoryItems();
        x.length > 0 && await q.saveNewContextItemsToDB(p.id, x);
      }
    })();
  }, [c, D, g, p]), f.useEffect(() => {
    r.current && (r.current.scrollTop = r.current.scrollHeight);
  }), !p || !g) return e.jsx("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4", children: e.jsx("p", { children: "\u4F1A\u8BDD\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664" }) });
  const N = async () => {
    if (!(!t.trim() || n)) {
      o(true), u("");
      try {
        if (await w(t, (b) => {
          u((x) => x + b);
        }), q.contextManager && p) {
          const x = q.contextManager.getHistoryItems().filter((T) => !T.processing);
          x.length > 0 && await q.saveNewContextItemsToDB(p.id, x);
        }
      } catch (b) {
        console.error("Send message error:", b);
      } finally {
        o(false), u("");
      }
      a("");
    }
  };
  return e.jsx("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20", children: e.jsx(be, { className: "w-5 h-5 text-primary" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsx("span", { className: "font-bold text-sm leading-tight", children: g.name }), e.jsx("span", { className: "text-[10px] text-muted-foreground", children: g.nickname || "NPC" })] })] }), e.jsx("div", { className: "flex items-center gap-2", children: e.jsx(H, { variant: "secondary", className: "text-[9px] h-5 px-1.5 font-bold uppercase", children: "CHAT MODE" }) })] }), e.jsx("div", { className: "flex grow overflow-y-auto p-4 md:p-8 space-y-8", ref: r, children: e.jsxs("div", { className: "max-w-4xl mx-auto w-full space-y-8", children: [(() => {
    var _a3, _b;
    const b = ((_a3 = q.contextManager) == null ? void 0 : _a3.getVisibleHistoryItems()) || [], x = (_b = q.contextManager) == null ? void 0 : _b.getProcessingItem(), T = [...b];
    return x && !b.some((y) => y.id === x.id) && T.push(x), T.map((y, me) => e.jsx(wr, { item: y, character: g, isProcessing: y.processing || void 0, streamingText: y.processing ? m : void 0 }, `[${me}]${y.id}`));
  })(), n && !((_a2 = q.contextManager) == null ? void 0 : _a2.getProcessingItem()) && e.jsxs("div", { className: "flex gap-4 animate-pulse", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-muted shrink-0" }), e.jsxs("div", { className: "space-y-3 grow pt-2", children: [e.jsx("div", { className: "h-4 bg-muted rounded w-1/4" }), e.jsx("div", { className: "h-24 bg-muted rounded w-full" })] })] })] }) }), e.jsxs("div", { className: "p-4 md:p-6 border-t shrink-0 bg-background/50 backdrop-blur-sm", children: [e.jsxs("div", { className: "max-w-4xl mx-auto relative group", children: [e.jsx("div", { className: "absolute -inset-0.5 bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative", children: [e.jsx(B, { value: t, onChange: (b) => a(b.target.value), placeholder: `\u5411 ${g.name} \u53D1\u9001\u6D88\u606F...`, className: "min-h-24 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/20 focus-visible:ring-primary/30 bg-background", onKeyDown: (b) => {
    b.key === "Enter" && !b.shiftKey && (b.preventDefault(), N());
  } }), e.jsx(j, { size: "icon", className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform", disabled: !t.trim() || n, onClick: N, type: "button", children: e.jsx(Kt, { className: "w-5 h-5" }) })] })] }), e.jsx("p", { className: "text-[10px] text-center text-muted-foreground mt-3 font-medium uppercase tracking-tighter opacity-50", children: "Shift + Enter to line break \u2022 Enter to send" })] })] }) });
}, wr = (s) => {
  switch (s.item.type) {
    case "character_intro":
      return e.jsx(_s, { item: s.item, character: s.character });
    case "character_message":
      return s.isProcessing ? e.jsx(Cr, { item: s.item, character: s.character, streamingText: s.streamingText || "" }) : e.jsx(He, { item: s.item, character: s.character });
    case "character_message_group":
      return e.jsx("div", { className: "space-y-4", children: (s.item.data.list || []).map((t, a) => e.jsx(He, { item: { ...s.item, type: "character_message", data: { ...s.item.data, content: t.content, timestamp: t.timestamp } }, character: s.character }, t.id || a)) });
    case "participant_message":
      return e.jsx(nt, { item: s.item });
    case "participant_message_group":
      return e.jsx("div", { className: "space-y-4", children: (s.item.data.list || []).map((t, a) => e.jsx(nt, { item: { ...s.item, type: "participant_message", data: { ...s.item.data, content: t.content, timestamp: t.timestamp } } }, t.id || a)) });
    case "system_notification":
      return e.jsx("div", { className: "flex justify-center my-4", children: e.jsx(H, { variant: "outline", className: "px-3 py-1 text-[10px] text-muted-foreground bg-muted/20", children: s.item.data.content }) });
    case "starting_system_message":
    case "in_context_system_message":
    case "placeholder":
      return null;
    default:
      return console.warn("Unknown context item type:", s.item.type), null;
  }
}, Cr = (s) => s.item.type === "character_message" ? e.jsxs("div", { className: "flex gap-4 animate-pulse", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20", children: s.character.imageBase64 || s.character.avatar ? e.jsx("img", { src: s.character.imageBase64 || s.character.avatar, alt: s.character.name, className: "w-full h-full object-cover rounded-2xl" }) : e.jsx(be, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: s.character.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: s.streamingText || s.item.data.content })] })] }) : null, xn = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForChat: Nr }, Symbol.toStringTag, { value: "Module" }));
class Sr {
  constructor(t) {
    __publicField(this, "session");
    this.session = es.parse(t);
  }
}
function ve(s) {
  const t = s.modeConfig.characterSnapshot;
  if (!t) throw new Error("Critical Error: Character snapshot missing in session config.");
  return t;
}
function Ns(s, t) {
  const a = ve(t);
  return s.getFlatHistoryItems(10).filter((r) => !r.hidden && !r.deleted).map((r) => {
    const { type: n, data: o } = r;
    if (n === "participant_message") {
      let m = "\u73A9\u5BB6";
      return o.isDM || o.name === "DM" ? m = "DM\u65C1\u767D" : o.name && (m = o.name), `${m}: ${o.content}`;
    }
    return n === "character_message" ? `${o.name || a.name}: ${o.content}` : n === "dm_intro" ? `DM\u5F00\u573A/\u89C4\u5219: ${o.content}` : n === "character_intro" ? `${a.name}\u5F00\u573A: ${o.content}` : null;
  }).filter(Boolean).join(`
`);
}
const Ir = `
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
`, kr = `
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
`, Dr = `
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
function Tr(s, t) {
  const { modeConfig: a } = s, r = ve(s), n = (a.goals || []).map((c) => `- ${c.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", o = (a.failureChecks || []).map((c) => `- ${c.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", m = Object.entries(a.variables || {}).filter(([c, l]) => !l.hidden).map(([c, l]) => `- ${c}: ${l.description || "\u65E0\u63CF\u8FF0"}`).join(`
`) || "\u65E0\u516C\u5F00\u53D8\u91CF";
  return [{ role: "system", content: Ir.replace("{{title}}", s.title || "\u6587\u5B57\u6311\u6218").replace("{{characterName}}", r.name).replace("{{characterDescription}}", r.description || "\u795E\u79D8\u89D2\u8272").replace("{{gameGoals}}", n).replace("{{failureConditions}}", o).replace("{{variableDescriptions}}", m).replace("{{userGuidance}}", a.userGuidance) }];
}
function Mr(s, t) {
  var _a2;
  const { modeConfig: a, modeState: r } = s, n = ve(s), o = JSON.stringify(r.variableStates, null, 2), m = (a.goals || []).map((p) => `- ${p.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", u = (a.failureChecks || []).map((p) => `- ${p.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", c = Ns(t, s), i = ((_a2 = t.getLastUserMessage()) == null ? void 0 : _a2.data.content) || "";
  return [{ role: "system", content: kr.replace("{{characterName}}", n.name).replace("{{gameGoals}}", m).replace("{{failureConditions}}", u).replace("{{historyMessages}}", c).replace("{{variablesJSON}}", o).replace("{{userInput}}", i) }];
}
function Ar(s, t) {
  var _a2, _b;
  const { modeConfig: a, modeState: r } = s, n = ve(s), o = JSON.stringify(r.variableStates, null, 2), m = (a.goals || []).map((w) => `- ${w.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", u = (a.failureChecks || []).map((w) => `- ${w.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", c = Ns(t, s), i = ((_a2 = t.getLastUserMessage()) == null ? void 0 : _a2.data.content) || "", p = ((_b = t.getHistoryItems().findLast((w) => w.type === "challenge_mode_dm_eval")) == null ? void 0 : _b.data.analyze) || "\u6839\u636E\u73A9\u5BB6\u884C\u52A8\u66F4\u65B0\u4E86\u76F8\u5173\u72B6\u6001\u3002";
  return [{ role: "system", content: Dr.replace("{{characterName}}", n.name).replace("{{gameGoals}}", m).replace("{{failureConditions}}", u).replace("{{variablesJSON}}", o).replace("{{userInput}}", i).replace("{{historyMessages}}", c).replace("{{evalAnalyze}}", p) }];
}
function Er(s, t) {
  const { modeConfig: a } = s, r = ve(s);
  return [{ role: "system", content: `\u4F60\u73B0\u5728\u7684\u8EAB\u4EFD\u662F\u89D2\u8272 ${r.name}\u3002
\u4F60\u6B63\u5728\u53C2\u52A0\u4E00\u573A\u540D\u4E3A\u300A${s.title || "\u6311\u6218"}\u300B\u7684\u6E38\u620F\u3002
\u4F60\u7684\u4EFB\u52A1\u63CF\u8FF0\uFF1A
${a.roleTaskPrompt}

\u73B0\u5728\uFF0C\u8BF7\u4F5C\u4E3A ${r.name} \u7ED9\u51FA\u4F60\u7684\u5F00\u5C40\u7B2C\u4E00\u53E5\u8BDD\u3002
\u8FD9\u53E5\u5BF9\u8BDD\u5E94\u8BE5\u7B26\u5408\u4F60\u7684\u6027\u683C\u3001\u5F53\u524D\u6311\u6218\u7684\u80CC\u666F\uFF0C\u5E76\u5F15\u5BFC\u73A9\u5BB6\u5F00\u59CB\u4E92\u52A8\u3002
\u4E0D\u8981\u8F93\u51FA\u4EFB\u4F55\u65C1\u767D\uFF0C\u53EA\u8F93\u51FA\u5BF9\u8BDD\u5185\u5BB9\u3002` }];
}
function Pr(s, t) {
  const { modeConfig: a, modeState: r } = s, n = ve(s), m = { historyItems: t.getFlatHistoryItems() }, u = vt(m, { characterId: a.characterId });
  let c = `## \u4F60\u7684\u8EAB\u4EFD\u4E0E\u4EFB\u52A1
\u4F60\u6B63\u5728\u53C2\u52A0\u4E00\u573A\u540D\u4E3A\u300A${s.title || "\u6311\u6218"}\u300B\u7684\u6E38\u620F\u3002
${a.roleTaskPrompt}

`;
  const l = Object.entries(r.variableStates).filter(([g]) => {
    var _a2;
    return !((_a2 = a.variables[g]) == null ? void 0 : _a2.hidden);
  }).map(([g, w]) => {
    const D = a.variables[g], N = (D == null ? void 0 : D.description) ? ` (${D.description})` : "";
    return `- ${g}${N}: ${w.value}`;
  }).join(`
`);
  l && (c += `## \u5F53\u524D\u72B6\u6001 (\u4F60\u7684\u611F\u77E5\u80FD\u529B)
${l}

`);
  const i = a.goals.map((g) => {
    var _a2;
    return ((_a2 = r.goalStates.find((D) => D.key === g.key)) == null ? void 0 : _a2.isCompleted) ? `- [\u5DF2\u8FBE\u6210\u76EE\u6807] ${g.description}` : `- [\u672A\u8FBE\u6210\u76EE\u6807] ${g.description}`;
  }).join(`
`);
  i && (c += `## \u6311\u6218\u76EE\u6807\u8FDB\u5EA6
${i}

`);
  const h = a.failureChecks.map((g) => `- ${g.description}`).join(`
`);
  h && (c += `## \u5931\u8D25/\u7ED3\u675F\u6761\u4EF6 (\u4F60\u5E94\u5C3D\u91CF\u907F\u514D\u6216\u5F15\u5BFC\u73A9\u5BB6\u89E6\u53D1)
${h}

`);
  const p = r.failureStates.filter((g) => g.isCompleted);
  if (p.length > 0) {
    const g = p.map((w) => {
      var _a2;
      return `- ${((_a2 = a.failureChecks.find((N) => N.key === w.key)) == null ? void 0 : _a2.description) || w.key}`;
    }).join(`
`);
    c += `## \u8B66\u544A\uFF1A\u5DF2\u89E6\u53D1\u5931\u8D25\u6761\u4EF6
${g}
\u4F60\u73B0\u5728\u5904\u4E8E\u6781\u5EA6\u4E0D\u5229\u7684\u5883\u5730\uFF0C\u8BF7\u8868\u73B0\u51FA\u76F8\u5E94\u7684\u53CD\u5E94\u3002

`;
  }
  return c += `## \u884C\u4E3A\u51C6\u5219
1. \u4E25\u683C\u626E\u6F14 ${n.name}\uFF0C\u8BED\u6C14\u548C\u53CD\u5E94\u5FC5\u987B\u4E0E\u4E0A\u8FF0\u72B6\u6001\u9AD8\u5EA6\u4E00\u81F4\u3002
2. \u4E0D\u8981\u76F4\u63A5\u63D0\u53CA\u53D8\u91CF\u7684\u5177\u4F53\u6570\u503C\uFF0C\u800C\u662F\u5C06\u5176\u878D\u5165\u5230\u4F60\u7684\u60C5\u611F\u548C\u884C\u4E3A\u8868\u73B0\u4E2D\uFF08\u4F8B\u5982\uFF1A\u5982\u679C\u201C\u538B\u529B\u201D\u5F88\u9AD8\uFF0C\u4F60\u5E94\u8BE5\u8868\u73B0\u5F97\u6025\u8E81\u6216\u7126\u8651\uFF09\u3002
3. \u5982\u679C\u76EE\u6807\u5DF2\u8FBE\u6210\uFF0C\u4F60\u5E94\u8BE5\u5728\u56DE\u5E94\u4E2D\u81EA\u7136\u5730\u6D41\u9732\u51FA\u6210\u529F\u6216\u9636\u6BB5\u6027\u8FDB\u5C55\u7684\u559C\u60A6\u3002`, [{ role: "system", content: c }, ...u];
}
class ws {
  constructor(t, a) {
    __publicField(this, "dict");
    __publicField(this, "config");
    this.dict = t, this.config = a;
  }
  getVariable(t) {
    return this.dict[t];
  }
  setVariable(t, a) {
    this.dict[t] ? this.dict[t].value = a : this.dict[t] = { key: t, value: a };
  }
  setTrue(t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const a = this.getVariable(t);
    if (!a) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (typeof a.value != "boolean") throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(t, true);
  }
  setFalse(t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const a = this.getVariable(t);
    if (!a) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (typeof a.value != "boolean") throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(t, false);
  }
  toggle(t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const a = this.getVariable(t);
    if (!a) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (typeof a.value != "boolean") throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(t, !a.value);
  }
  delta(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "number") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u6570\u5B57\u7C7B\u578B`);
    const r = this.getVariable(t);
    if (!r) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (typeof r.value != "number") throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u6570\u5B57\u7C7B\u578B`);
    this.setVariable(t, r.value + a);
  }
  setTo(t, a) {
    var _a2, _b;
    const r = (_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type;
    if (r) {
      if (r === "boolean" && typeof a != "boolean") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E3A\u5E03\u5C14\uFF0C\u4F46\u503C\u4E0D\u662F\u5E03\u5C14`);
      if (r === "number" && typeof a != "number") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E3A\u6570\u5B57\uFF0C\u4F46\u503C\u4E0D\u662F\u6570\u5B57`);
      if (r === "string" && typeof a != "string") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E3A\u5B57\u7B26\u4E32\uFF0C\u4F46\u503C\u4E0D\u662F\u5B57\u7B26\u4E32`);
      if (r === "tags" && !Array.isArray(a)) throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E3A\u6807\u7B7E\uFF0C\u4F46\u503C\u4E0D\u662F\u6570\u7EC4`);
    }
    this.setVariable(t, a);
  }
  setValue(t, a) {
    this.setTo(t, a);
  }
  add(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "tags") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u6807\u7B7E\u7C7B\u578B`);
    const r = this.getVariable(t);
    if (!r) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (!Array.isArray(r.value)) throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B`);
    r.value.includes(a) || this.setVariable(t, [...r.value, a]);
  }
  remove(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "tags") throw new Error(`\u53D8\u91CF ${t} \u914D\u7F6E\u4E0D\u662F\u6807\u7B7E\u7C7B\u578B`);
    const r = this.getVariable(t);
    if (!r) throw new Error(`\u53D8\u91CF ${t} \u4E0D\u5B58\u5728`);
    if (!Array.isArray(r.value)) throw new Error(`\u53D8\u91CF ${t} \u503C\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B`);
    this.setVariable(t, r.value.filter((n) => n !== a));
  }
  performOperation(t) {
    if (ss.safeParse(t).success) {
      const [a, r] = t;
      switch (a) {
        case "setTrue":
          this.setTrue(r);
          break;
        case "setFalse":
          this.setFalse(r);
          break;
        case "toggle":
          this.toggle(r);
          break;
        default:
          throw new Error(`\u672A\u77E5\u5E03\u5C14\u64CD\u4F5C\u65B9\u6CD5: ${a}`);
      }
    } else if (as.safeParse(t).success) {
      const [a, r, n] = t;
      switch (a) {
        case "delta":
          this.delta(r, n);
          break;
        case "setTo":
          this.setTo(r, n);
          break;
        case "setValue":
          this.setValue(r, n);
          break;
        default:
          throw new Error(`\u672A\u77E5\u6570\u5B57\u64CD\u4F5C\u65B9\u6CD5: ${a}`);
      }
    } else if (rs.safeParse(t).success) {
      const [a, r, n] = t;
      switch (a) {
        case "setTo":
          this.setTo(r, n);
          break;
        case "setValue":
          this.setValue(r, n);
          break;
        default:
          throw new Error(`\u672A\u77E5\u5B57\u7B26\u4E32\u64CD\u4F5C\u65B9\u6CD5: ${a}`);
      }
    } else if (ns.safeParse(t).success) {
      const [a, r, n] = t;
      switch (a) {
        case "add":
          this.add(r, n);
          break;
        case "remove":
          this.remove(r, n);
          break;
        default:
          throw new Error(`\u672A\u77E5\u6807\u7B7E\u64CD\u4F5C\u65B9\u6CD5: ${a}`);
      }
    } else throw new Error(`\u65E0\u6548\u7684\u64CD\u4F5C: ${JSON.stringify(t)}`);
  }
  isTrue(t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "boolean") return false;
    const a = this.getVariable(t);
    return a ? typeof a.value == "boolean" && a.value : false;
  }
  isFalse(t) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "boolean") return false;
    const a = this.getVariable(t);
    return a ? typeof a.value == "boolean" && !a.value : false;
  }
  eq(t, a) {
    const r = this.getVariable(t);
    return r ? String(r.value) === String(a) : false;
  }
  neq(t, a) {
    return !this.eq(t, a);
  }
  is(t, a) {
    return this.eq(t, a);
  }
  isNot(t, a) {
    return this.neq(t, a);
  }
  gt(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "number") return false;
    const r = this.getVariable(t);
    return r && typeof r.value == "number" ? r.value > a : false;
  }
  gte(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "number") return false;
    const r = this.getVariable(t);
    return r && typeof r.value == "number" ? r.value >= a : false;
  }
  lt(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "number") return false;
    const r = this.getVariable(t);
    return r && typeof r.value == "number" ? r.value < a : false;
  }
  lte(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "number") return false;
    const r = this.getVariable(t);
    return r && typeof r.value == "number" ? r.value <= a : false;
  }
  includes(t, a) {
    var _a2, _b, _c, _d;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "string" && ((_d = (_c = this.config) == null ? void 0 : _c[t]) == null ? void 0 : _d.type) !== "tags") return false;
    const r = this.getVariable(t);
    if (!r) return false;
    const n = String(a);
    return typeof r.value == "string" || Array.isArray(r.value) ? r.value.includes(n) : false;
  }
  notIncludes(t, a) {
    return !this.includes(t, a);
  }
  has(t, a) {
    return this.includes(t, a);
  }
  hasAny(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "tags") return false;
    const r = this.getVariable(t);
    if (!r || !Array.isArray(r.value)) return false;
    const n = r.value.map(String);
    return a.some((o) => n.includes(String(o)));
  }
  hasAll(t, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[t]) == null ? void 0 : _b.type) !== "tags") return false;
    const r = this.getVariable(t);
    if (!r || !Array.isArray(r.value)) return false;
    const n = r.value.map(String);
    return a.every((o) => n.includes(String(o)));
  }
  llmJudge(t, a) {
    return console.warn("llmJudge \u672A\u5B9E\u73B0"), false;
  }
  and(t) {
    return t.every((a) => this.checkCondition(a));
  }
  or(t) {
    return t.some((a) => this.checkCondition(a));
  }
  all(t) {
    return this.and(t);
  }
  any(t) {
    return this.or(t);
  }
  some(t) {
    return this.or(t);
  }
  checkCondition(t) {
    if (qe.safeParse(t).success) {
      const [a, ...r] = t;
      switch (a) {
        case "isTrue":
          return this.isTrue(r[0]);
        case "isFalse":
          return this.isFalse(r[0]);
        case "eq":
          return this.eq(r[0], r[1]);
        case "neq":
          return this.neq(r[0], r[1]);
        case "is":
          return this.is(r[0], r[1]);
        case "isNot":
          return this.isNot(r[0], r[1]);
        case "gt":
          return this.gt(r[0], r[1]);
        case "gte":
          return this.gte(r[0], r[1]);
        case "lt":
          return this.lt(r[0], r[1]);
        case "lte":
          return this.lte(r[0], r[1]);
        case "includes":
          return this.includes(r[0], r[1]);
        case "notIncludes":
          return this.notIncludes(r[0], r[1]);
        case "has":
          return this.has(r[0], r[1]);
        case "hasAny":
          return this.hasAny(r[0], r[1]);
        case "hasAll":
          return this.hasAll(r[0], r[1]);
        case "llmJudge":
          return this.llmJudge(r[0], r[1]);
        default:
          throw new Error(`\u672A\u77E5\u5355\u4E00\u6761\u4EF6\u65B9\u6CD5: ${a}`);
      }
    } else if (yt.safeParse(t).success || is.safeParse(t).success) {
      const [a, r] = t;
      switch (a) {
        case "and":
          return this.and(r);
        case "or":
          return this.or(r);
        case "all":
          return this.all(r);
        case "any":
          return this.any(r);
        case "some":
          return this.some(r);
        default:
          throw new Error(`\u672A\u77E5\u590D\u5408\u6761\u4EF6\u65B9\u6CD5: ${a}`);
      }
    }
    throw new Error(`\u65E0\u6548\u7684\u6761\u4EF6: ${JSON.stringify(t)}`);
  }
}
class $r extends Sr {
  constructor(t) {
    super(t);
  }
  getCurrentPhase() {
    return this.session.modeState.currentPhase;
  }
  getCurrentUIState() {
    return this.session.modeState.currentUIState;
  }
  getActualCurrentPhase(t) {
    var _a2, _b;
    const a = t.getProcessingItem();
    if (a && a.type) {
      const m = { dm_intro: "dm_intro", character_intro: "character_intro", character_message: "character_response", character_message_group: "character_response", dm_eval_logic: "dm_eval_changes", participant_message: ((_a2 = a.data) == null ? void 0 : _a2.isDM) ? "dm_narrate_changes" : "player_input", challenge_mode_dm_eval: "dm_eval_changes", challenge_mode_checking: "failure_check", challenge_mode_ending: "ending_check" }[a.type];
      if (m) return m;
    }
    const r = t.getFlatHistoryItems();
    let n;
    for (let o = r.length - 1; o >= 0; o--) {
      const m = r[o];
      if (!(m == null ? void 0 : m.deleted)) {
        switch (m.type) {
          case "dm_intro":
            n = "character_intro";
            break;
          case "character_intro":
            n = "player_input";
            break;
          case "character_message":
            n = this.session.modeState.shouldCheck === false ? "player_input" : "dm_eval_changes";
            break;
          case "character_message_group":
            n = this.session.modeState.shouldCheck === false ? "player_input" : "dm_eval_changes";
            break;
          case "participant_message": {
            const u = m.data;
            (u == null ? void 0 : u.isDM) ? n = "failure_check" : (u == null ? void 0 : u.isUser) || (u == null ? void 0 : u.role) === "user" ? n = "character_response" : n = "player_input";
            break;
          }
          case "dm_eval_logic":
          case "challenge_mode_dm_eval":
            n = "dm_narrate_changes";
            break;
          case "challenge_mode_checking": {
            const u = (_b = m.data) == null ? void 0 : _b.results;
            if (u && u.length > 0) {
              const c = u.some((i) => i.type === "failure"), l = u.some((i) => i.type === "goal");
              if (c) {
                n = u.some((h) => h.type === "failure" && h.result === true) ? "ending_check" : "goal_check";
                break;
              }
              if (l) {
                n = "ending_check";
                break;
              }
            }
            n = void 0;
            break;
          }
          case "challenge_mode_ending":
            n = "ending_check";
            break;
        }
        if (n) break;
      }
    }
    return n ? this.session.modeState.currentPhase === "player_input" && n !== "player_input" ? "player_input" : n : this.session.modeState.currentPhase;
  }
  getActualCurrentUIState(t) {
    var _a2;
    const a = t.getProcessingItem();
    if (a && a.type) {
      const n = { dm_intro: "dm_intro_running", character_intro: "character_intro_running", character_message: "character_response_running", character_message_group: "character_response_running", dm_eval_logic: "dm_eval_changes_running", participant_message: ((_a2 = a.data) == null ? void 0 : _a2.isDM) ? "dm_narrate_changes_running" : "player_input_running", challenge_mode_dm_eval: "dm_eval_changes_running", challenge_mode_checking: "failure_check_running", challenge_mode_ending: "ending_check_running" }[a.type];
      if (n) return n;
    }
    return this.session.modeState.currentUIState ? this.session.modeState.currentUIState : this.getReadyUIStateForPhase(this.getActualCurrentPhase(t));
  }
  getReadyUIStateForPhase(t) {
    switch (t) {
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
  getRunningUIStateForPhase(t) {
    switch (t) {
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
  getDoneUIStateForPhase(t) {
    switch (t) {
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
  enterNextState(t) {
    console.log(`[ChallengeManager] Transition: ${this.session.modeState.currentPhase} -> ${t}`), this.session.modeState.currentPhase = t, this.session.updatedAt = Date.now();
  }
  setCurrentUIState(t) {
    this.session.modeState.currentUIState = t, this.session.updatedAt = Date.now();
  }
  setShouldCheck(t) {
    this.session.modeState.shouldCheck = t, this.session.updatedAt = Date.now();
  }
  getVariableStates() {
    return this.session.modeState.variableStates;
  }
  updateVariable(t, a) {
    this.session.modeState.variableStates[t] = a, this.session.updatedAt = Date.now();
  }
  async executeCurrentStateLogic(t) {
    var _a2;
    const a = this.session.modeState.currentPhase, r = new ws(this.session.modeState.variableStates, this.session.modeConfig.variables);
    switch (a) {
      case "dm_intro":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_intro")), { type: "LLM_CALL", messages: Tr(this.session), callbackPhase: "dm_intro", llmRequestType: "dm_intro" };
      case "character_intro":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("character_intro")), { type: "LLM_CALL", messages: Er(this.session), callbackPhase: "character_intro", llmRequestType: "character_intro" };
      case "player_input":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "WAIT_FOR_INPUT" };
      case "character_response":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("character_response")), { type: "LLM_CALL", messages: Pr(this.session, t), callbackPhase: "character_response", llmRequestType: "character_message", dataExtra: { characterId: this.session.modeConfig.characterId, name: ((_a2 = this.session.modeConfig.characterSnapshot) == null ? void 0 : _a2.name) || "Unknown" } };
      case "dm_eval_changes":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_eval_changes")), { type: "LLM_CALL", messages: Mr(this.session, t), callbackPhase: "dm_eval_changes", llmRequestType: "dm_eval_logic" });
      case "dm_narrate_changes":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate_changes")), { type: "LLM_CALL", messages: Ar(this.session, t), callbackPhase: "dm_narrate_changes", llmRequestType: "participant_message", dataExtra: { isDM: true, name: "DM" } });
      case "failure_check":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("failure_check")), this.handleFailureCheck(t, r));
      case "goal_check":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("goal_check")), this.handleGoalCheck(t, r));
      case "ending_check":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("ending_check")), this.handleEndingCheck(t));
      default:
        return { type: "STOP" };
    }
  }
  handleFailureCheck(t, a) {
    this.setCurrentUIState(this.getRunningUIStateForPhase("failure_check"));
    let r = false;
    const n = [], o = this.session.modeConfig.failureChecks || [];
    for (const m of o) {
      const u = a.checkCondition(m.condition), c = this.session.modeState.failureStates.find((l) => l.key === m.key);
      c && (c.isCompleted = u), u && (r = true), n.push({ type: "failure", key: m.key, result: u });
    }
    return t.addHistoryItem({ id: V(), type: "challenge_mode_checking", idx: 0, orderRef: 0, timestamp: Date.now(), data: { results: n }, hidden: true }), this.setCurrentUIState(this.getDoneUIStateForPhase("failure_check")), r ? this.enterNextState("ending_check") : this.enterNextState("goal_check"), { type: "STATE_CHANGE" };
  }
  handleGoalCheck(t, a) {
    this.setCurrentUIState(this.getRunningUIStateForPhase("goal_check"));
    const r = [], n = this.session.modeConfig.goals || [];
    for (const o of n) {
      const m = a.checkCondition(o.condition), u = this.session.modeState.goalStates.find((c) => c.key === o.key);
      u && (u.isCompleted = m), r.push({ type: "goal", key: o.key, result: m });
    }
    return this.setCurrentUIState(this.getDoneUIStateForPhase("goal_check")), this.enterNextState("ending_check"), { type: "STATE_CHANGE" };
  }
  handleEndingCheck(t) {
    var _a2;
    this.setCurrentUIState(this.getRunningUIStateForPhase("ending_check"));
    const a = (this.session.modeState.failureStates || []).find((u) => u.isCompleted), r = this.session.modeConfig.goals || [], n = r.length > 0 && r.every((u) => {
      var _a3;
      return (_a3 = this.session.modeState.goalStates.find((l) => l.key === u.key)) == null ? void 0 : _a3.isCompleted;
    }), o = !!a;
    if (o || n) {
      if (!t.state.historyItems.findLast((c) => c.type === "challenge_mode_ending")) {
        let c = "", l;
        o ? (c = ((_a2 = this.session.modeConfig.failureChecks.find((h) => h.key === (a == null ? void 0 : a.key))) == null ? void 0 : _a2.userInfo) || "\u6311\u6218\u5931\u8D25\u3002", l = a == null ? void 0 : a.key) : c = "\u606D\u559C\u4F60\uFF01\u6240\u6709\u6311\u6218\u76EE\u6807\u5DF2\u8FBE\u6210\u3002", t.addHistoryItem({ id: V(), type: "challenge_mode_ending", idx: 0, orderRef: 0, timestamp: Date.now(), data: { type: o ? "failure" : "success", description: c, failureReason: l }, hidden: false }), this.setShouldCheck(false);
      }
      return this.setCurrentUIState("ended"), { type: "STOP" };
    }
    return this.setCurrentUIState(this.getDoneUIStateForPhase("ending_check")), this.enterNextState("player_input"), { type: "STATE_CHANGE" };
  }
}
const I = he({ currentSession: null, contextManager: null, sessionManager: null, variablesManager: null, loadSession(s, t) {
  this.currentSession = s, s.modeState.currentUIState = "idle", this.sessionManager = new $r(s);
  const a = he(t || { historyItems: [], processingItem: void 0 });
  this.contextManager = new de(a), s.modeState && s.modeConfig && (this.variablesManager = new ws(s.modeState.variableStates, s.modeConfig.variables || {}));
}, applyVariableOperation(s) {
  if (this.variablesManager) try {
    this.variablesManager.performOperation(s);
  } catch (t) {
    console.error("[Store] VarOp Failed", t);
  }
}, updateConditionState(s, t, a) {
  const r = this.currentSession;
  if (!r) return;
  const o = (s === "goal" ? r.modeState.goalStates : r.modeState.failureStates).find((m) => m.key === t);
  o && (o.isCompleted = a);
}, setPhase(s) {
  this.currentSession && (this.currentSession.modeState.currentPhase = s);
}, async saveNewContextItemsToDB(s, t) {
  const { SessionDB: a } = await Ce(async () => {
    const { SessionDB: o } = await Promise.resolve().then(() => hs);
    return { SessionDB: o };
  }, void 0), r = new a(s);
  let n;
  try {
    n = xe(t);
  } catch {
    n = JSON.parse(JSON.stringify(t));
  }
  await r.addContextItems(n);
}, async updateSessionInDB() {
  if (!this.currentSession) return;
  const { masterDb: s } = await Ce(async () => {
    const { masterDb: a } = await Promise.resolve().then(() => Xa);
    return { masterDb: a };
  }, void 0), t = xe(this.currentSession.modeState);
  await s.sessions.update(this.currentSession.id, { modeState: t, updatedAt: Date.now() });
} });
function Fr() {
  const s = ks((u) => u.config), t = f.useRef(false), a = async (u, c, l, i, h = {}) => {
    const p = I.contextManager;
    if (!p) return { content: "" };
    const g = { id: V(), type: l, orderRef: 0, timestamp: Date.now(), data: { content: "", ...h } };
    p.setProcessingItem(g);
    let w = "";
    return await fa(u, c, [], (D, N) => {
      i == null ? void 0 : i(D), w = N;
      const b = p.getProcessingItem();
      b && (b.data.content = N);
    }), p.completeProcessingItem(), { content: w };
  }, r = async (u, c) => {
    const l = I.sessionManager, i = I.contextManager;
    if (!l || !i) return;
    const h = await l.executeCurrentStateLogic(i);
    if (console.log("[Loop] Action:", h), h.type === "WAIT_FOR_INPUT" || h.type === "STOP") {
      await I.updateSessionInDB(), t.current = false;
      return;
    }
    if (h.type === "STATE_CHANGE") {
      await I.updateSessionInDB(), setTimeout(() => o(u.id), 0);
      return;
    }
    if (h.type === "LLM_CALL") {
      if (h.callbackPhase) {
        const g = h.callbackPhase;
        l.setCurrentUIState(l.getRunningUIStateForPhase(g));
      }
      await I.updateSessionInDB();
      const p = await a(c, h.messages.map((g) => ({ ...g, id: V() })), h.llmRequestType, void 0, h.dataExtra);
      await I.saveNewContextItemsToDB(u.id, i.getHistoryItems()), await n(h, p.content, u.id), await I.updateSessionInDB(), setTimeout(() => o(u.id), 0);
    }
  }, n = async (u, c, l) => {
    const i = I.sessionManager, h = I.contextManager;
    if (u.callbackPhase === "dm_eval_changes") {
      try {
        const p = c.indexOf("{"), g = c.lastIndexOf("}") + 1;
        if (p >= 0 && g > p) {
          const w = JSON.parse(c.slice(p, g)), D = w.analyze || "", N = [];
          if (w.operations) {
            const b = i.session.modeConfig.variables || {};
            for (const x of w.operations) {
              if (!b[x.key]) continue;
              let y;
              x.op === "delta" ? y = ["delta", x.key, Number(x.value)] : x.op === "setTo" ? y = ["setTo", x.key, x.value] : x.op === "setTrue" ? y = ["setTrue", x.key] : x.op === "setFalse" ? y = ["setFalse", x.key] : x.op === "add" ? y = ["add", x.key, String(x.value)] : x.op === "remove" && (y = ["remove", x.key, String(x.value)]), y && (I.applyVariableOperation(y), N.push(y));
            }
          }
          h.addHistoryItem({ id: V(), type: "challenge_mode_dm_eval", idx: 0, orderRef: 0, timestamp: Date.now(), data: { analyze: D, operations: N }, hidden: false }), await I.saveNewContextItemsToDB(l, h.getHistoryItems());
        }
      } catch (p) {
        console.error("Failed to parse DM evaluation", p), se.error("DM \u8BC4\u4F30\u6570\u636E\u89E3\u6790\u5931\u8D25\uFF0C\u5C06\u5FFD\u7565\u672C\u6B21\u53D8\u66F4");
      }
      i.enterNextState("dm_narrate_changes"), i.setCurrentUIState(i.getDoneUIStateForPhase("dm_eval_changes"));
    } else u.callbackPhase === "dm_intro" ? (i.setCurrentUIState(i.getDoneUIStateForPhase("dm_intro")), i.enterNextState("character_intro")) : u.callbackPhase === "character_intro" ? (i.setCurrentUIState(i.getDoneUIStateForPhase("character_intro")), i.enterNextState("player_input")) : u.callbackPhase === "dm_narrate_changes" ? (i.setCurrentUIState(i.getDoneUIStateForPhase("dm_narrate_changes")), i.enterNextState("failure_check")) : u.callbackPhase === "character_response" && (i.setCurrentUIState(i.getDoneUIStateForPhase("character_response")), i.session.modeState.shouldCheck !== false ? i.enterNextState("dm_eval_changes") : i.enterNextState("player_input"));
  }, o = async (u) => {
    const c = I.currentSession;
    if (!c || c.id !== u) return;
    const l = { ...s };
    try {
      t.current = true, await r(c, l);
    } catch (i) {
      console.error("ChallengeLoop Critical Error:", i), se.error(`\u6311\u6218\u903B\u8F91\u4E2D\u65AD: ${i instanceof Error ? i.message : String(i)}`), t.current = false;
    }
  };
  return { nextStep: f.useCallback(async (u) => {
    if (t.current) return;
    const c = I.currentSession, l = I.contextManager, i = I.sessionManager;
    if (!c || !l || !i) {
      console.warn("Session or Managers not ready");
      return;
    }
    if (u) {
      if (i.getCurrentPhase() !== "player_input") {
        se.warning("\u5F53\u524D\u5E76\u975E\u73A9\u5BB6\u884C\u52A8\u56DE\u5408");
        return;
      }
      i.setCurrentUIState(i.getRunningUIStateForPhase("player_input")), l.addLLMResponseAsContextItem({ role: "user", content: u }, {}), await I.saveNewContextItemsToDB(c.id, l.getHistoryItems()), i.setCurrentUIState(i.getDoneUIStateForPhase("player_input")), i.enterNextState("character_response"), i.setCurrentUIState(i.getReadyUIStateForPhase("character_response")), await I.updateSessionInDB();
    }
    await o(c.id);
  }, [s]) };
}
const Or = (s) => {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const t = xt(), [a, r] = f.useState(""), n = f.useRef(null), [o, m] = f.useState(false), [u, c] = f.useState(false), l = it(I), { data: i = [] } = Ue((v) => v.from({ s: De })), { data: h = [] } = Ue((v) => v.from({ c: ke })), p = i.find((v) => v.id === s.sessionId), g = h.find((v) => {
    var _a3;
    return v.id === ((_a3 = p == null ? void 0 : p.modeConfig) == null ? void 0 : _a3.characterId);
  });
  f.useEffect(() => {
    var _a3;
    let v = false;
    if (!p) return;
    if (((_a3 = I.currentSession) == null ? void 0 : _a3.id) === p.id && I.contextManager) {
      c(true);
      return;
    }
    return (async () => {
      try {
        const z = await ys.createSessionDB(p.id).getContextItems();
        if (v) return;
        p.modeConfig && !p.modeConfig.characterSnapshot && g && (p.modeConfig.characterSnapshot = { name: g.name, description: g.description, avatar: g.avatar }), I.loadSession(p, { historyItems: z, processingItem: void 0 }), c(true);
      } catch (ee) {
        console.error("Load session error", ee);
      }
    })(), () => {
      v = true;
    };
  }, [p == null ? void 0 : p.id, p]);
  const { nextStep: w } = Fr();
  f.useEffect(() => {
    n.current && (n.current.scrollTop = n.current.scrollHeight);
  });
  const D = async () => {
    if (o) return;
    const v = I.sessionManager, E = I.contextManager;
    if (!(!v || !E)) {
      m(true);
      try {
        if (E.getHistoryItems().some((Xe) => Xe.type === "challenge_mode_ending")) {
          v.setShouldCheck(false), v.enterNextState("player_input"), v.setCurrentUIState(v.getReadyUIStateForPhase("player_input")), await I.updateSessionInDB();
          return;
        }
        const z = v.getActualCurrentPhase(E);
        v.enterNextState(z), v.setCurrentUIState(v.getReadyUIStateForPhase(z)), await I.updateSessionInDB(), await w();
      } finally {
        m(false);
      }
    }
  };
  if (!p || !g || !u) return e.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4", children: [e.jsx("div", { className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center", children: e.jsx(ge, { className: "w-6 h-6 opacity-20" }) }), e.jsx("p", { className: "text-xs font-medium tracking-widest uppercase opacity-50", children: "\u6B63\u5728\u6784\u5EFA\u53D9\u4E8B\u73AF\u5883..." })] });
  const N = async () => {
    if (!(!a.trim() || o)) {
      m(true);
      try {
        await w(a);
      } finally {
        m(false), r("");
      }
    }
  }, b = I.sessionManager && I.contextManager ? I.sessionManager.getActualCurrentUIState(I.contextManager) : ((_b = (_a2 = l.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b.currentUIState) || "idle", x = b === "ended", T = We[b] || We.idle, y = o || !T.inputEnabled && !x, me = async () => {
    I.sessionManager && (I.sessionManager.setShouldCheck(false), I.sessionManager.enterNextState("player_input"), I.sessionManager.setCurrentUIState(I.sessionManager.getReadyUIStateForPhase("player_input")), await I.updateSessionInDB());
  }, Ke = () => {
    t({ to: "/plaza/challenges" });
  }, Cs = () => {
    console.log("[Challenge][Memory Session]", I.currentSession);
  }, Ss = async () => {
    if (!(p == null ? void 0 : p.id)) return;
    const v = await K.sessions.getTable().get(p.id);
    console.log("[Challenge][DB Session]", v);
  };
  return e.jsxs("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: [e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm", children: e.jsx(be, { className: "w-5 h-5 text-primary" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm tracking-tight", children: g.name }), e.jsx(H, { variant: "outline", className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-primary/5 text-primary border-primary/10", children: "Lv.1" })] }), e.jsx("span", { className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide", children: "\u53D9\u4E8B\u534F\u8BAE\u8FDE\u63A5\u5DF2\u5EFA\u7ACB" })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs(H, { variant: "secondary", className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50", children: [e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" }), "CHALLENGE"] }), e.jsx(j, { variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: Cs, children: "LOG MEM" }), e.jsx(j, { variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: Ss, children: "LOG DB" })] })] }), e.jsx("div", { className: "flex grow overflow-y-auto", ref: n, children: e.jsx("div", { className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-10", children: (() => {
    var _a3, _b2, _c2, _d2, _e3;
    const v = (((_a3 = l.contextManager) == null ? void 0 : _a3.state.historyItems) || []).filter((z) => !z.hidden), E = (_b2 = l.contextManager) == null ? void 0 : _b2.state.processingItem;
    if (b === "idle") {
      const z = v.length === 0 ? "\u5F00\u59CB" : "\u7EE7\u7EED";
      return e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500", children: [e.jsx("div", { className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500", children: e.jsx(we, { className: "w-10 h-10 text-amber-500 drop-shadow-sm" }) }), e.jsx("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center", children: ((_d2 = (_c2 = p == null ? void 0 : p.modeConfig) == null ? void 0 : _c2.characterSnapshot) == null ? void 0 : _d2.name) || "\u6311\u6218\u6A21\u5F0F" }), e.jsx("p", { className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm", children: ((_e3 = p == null ? void 0 : p.modeConfig) == null ? void 0 : _e3.userGuidance) || "\u547D\u8FD0\u7684\u9F7F\u8F6E\u5DF2\u7ECF\u5F00\u59CB\u8F6C\u52A8\uFF0C\u4F60\u51C6\u5907\u597D\u63A5\u53D7\u6311\u6218\u4E86\u5417\uFF1F" }), e.jsxs(j, { size: "lg", className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-primary/25 shadow-primary/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90", onClick: D, disabled: o, children: [o ? e.jsx(ge, { className: "w-5 h-5 animate-spin mr-3" }) : e.jsx(gt, { className: "w-5 h-5 mr-3" }), z] }), e.jsxs("div", { className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest", children: [e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(rt, { className: "w-3 h-3" }), " \u81EA\u52A8\u5B58\u6863"] }), e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(ge, { className: "w-3 h-3" }), " \u5B9E\u65F6\u53D8\u91CF"] })] })] });
    }
    const ee = [...v];
    return E && !E.hidden && !v.some((z) => z.id === E.id) && ee.push(E), ee.map((z, Xe) => e.jsx(Lr, { item: z, character: g }, `[${Xe}]${z.id}`));
  })() }) }), x ? e.jsx("div", { className: "p-6 md:p-8 shrink-0 bg-background border-t", children: e.jsxs("div", { className: "max-w-xl mx-auto flex flex-col items-center gap-6 animate-in slide-in-from-bottom-4 fade-in duration-700", children: [e.jsx("div", { className: "text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60", children: "\u6545\u4E8B\u5DF2\u5B8C\u7ED3" }), e.jsxs("div", { className: "flex items-center gap-4 w-full", children: [e.jsxs(j, { variant: "outline", className: "flex-1 h-12 rounded-xl border-dashed border-2 hover:border-primary/50 hover:bg-primary/5 gap-2", onClick: Ke, children: [e.jsx(la, { className: "w-4 h-4" }), e.jsx("span", { className: "font-bold tracking-wider", children: "\u9000\u51FA\u6311\u6218" })] }), e.jsxs(j, { className: "flex-2 h-12 rounded-xl shadow-lg shadow-primary/10 gap-2 text-base", onClick: me, children: [e.jsx(da, { className: "w-4 h-4 fill-current" }), e.jsx("span", { className: "font-black tracking-[0.15em] uppercase", children: "\u7EE7\u7EED\u81EA\u7531\u5BF9\u8BDD" })] })] })] }) }) : e.jsxs("div", { className: "p-4 md:p-6 shrink-0 bg-background", children: [e.jsxs("div", { className: "max-w-3xl mx-auto relative group", children: [e.jsx(B, { value: a, onChange: (v) => r(v.target.value), placeholder: y ? T.placeholder : We.player_input_ready.placeholder, disabled: y, className: G("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-primary/20 focus-visible:bg-background transition-all", y && "opacity-50 cursor-not-allowed"), onKeyDown: (v) => {
    v.key === "Enter" && !v.shiftKey && (v.preventDefault(), N());
  } }), e.jsx(j, { size: "icon", type: "button", className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-primary/20 transition-all", disabled: !a.trim() || y, onClick: N, children: o ? e.jsx(ge, { className: "w-4 h-4 animate-spin" }) : e.jsx(Kt, { className: "w-4 h-4" }) })] }), e.jsxs("div", { className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40", children: [e.jsx("div", { className: "text-[9px] font-bold tracking-widest uppercase", children: "INPUT MANIFESTO" }), e.jsx("div", { className: "text-[9px] font-medium", children: y ? "\u8F93\u5165\u5DF2\u9501\u5B9A" : "Shift + Enter \u6362\u884C" })] })] })] }), e.jsxs("div", { className: "w-[320px] h-full overflow-y-auto bg-muted/10 border-l p-8 space-y-10 shrink-0 hidden lg:block scrollbar-none", children: [e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(ge, { className: "w-3.5 h-3.5 text-primary" }), "\u4E16\u754C\u53D8\u91CF"] }), e.jsx(H, { variant: "outline", className: "text-[9px] px-1.5 opacity-50", children: "SYNCED" })] }), e.jsxs("div", { className: "grid grid-cols-1 gap-3", children: [Object.entries(((_d = (_c = l.currentSession) == null ? void 0 : _c.modeState) == null ? void 0 : _d.variableStates) || {}).map(([v, E]) => e.jsxs("div", { className: "bg-background/40 p-4 rounded-xl border border-muted/30 hover:border-primary/20 transition-colors group", children: [e.jsxs("div", { className: "flex justify-between items-start mb-1", children: [e.jsx("span", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider", children: v }), e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors" })] }), e.jsx("div", { className: "text-xl font-mono font-bold tracking-tight text-foreground/90", children: typeof (E == null ? void 0 : E.value) == "number" ? E.value.toLocaleString() : String(E == null ? void 0 : E.value) })] }, v)), Object.keys(((_f = (_e2 = l.currentSession) == null ? void 0 : _e2.modeState) == null ? void 0 : _f.variableStates) || {}).length === 0 && e.jsx("div", { className: "py-8 text-center border border-dashed rounded-xl opacity-30", children: e.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest", children: "\u65E0\u52A8\u6001\u53D8\u91CF" }) })] })] }), e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(qt, { className: "w-3.5 h-3.5 text-primary" }), "\u751F\u5B58\u76EE\u6807"] }), e.jsxs("div", { className: "space-y-2.5", children: [(_i = (_h = (_g = l.currentSession) == null ? void 0 : _g.modeConfig) == null ? void 0 : _h.goals) == null ? void 0 : _i.map((v) => {
    var _a3, _b2, _c2;
    const E = (_c2 = (_b2 = (_a3 = l.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.goalStates) == null ? void 0 : _c2.find((ee) => ee.key === v.key);
    return e.jsxs("div", { className: G("p-3.5 rounded-xl border flex items-start gap-3 transition-all duration-300", (E == null ? void 0 : E.isCompleted) ? "bg-primary/3 border-primary/20 shadow-sm" : "bg-background/40 border-muted/50 grayscale-[0.8] opacity-60"), children: [e.jsx("div", { className: G("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5 shadow-inner", (E == null ? void 0 : E.isCompleted) ? "bg-primary text-primary-foreground" : "bg-muted border border-muted-foreground/10"), children: (E == null ? void 0 : E.isCompleted) ? e.jsx(rt, { className: "w-3 h-3" }) : e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20" }) }), e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsx("div", { className: G("text-[13px] leading-tight font-bold tracking-tight", (E == null ? void 0 : E.isCompleted) ? "text-primary" : "text-foreground/70"), children: v.description }), (E == null ? void 0 : E.isCompleted) && e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider opacity-60", children: "Objective Achieved" })] })] }, v.key);
  }), (!((_k = (_j = l.currentSession) == null ? void 0 : _j.modeConfig) == null ? void 0 : _k.goals) || l.currentSession.modeConfig.goals.length === 0) && e.jsx("div", { className: "py-8 text-center border border-dashed rounded-xl opacity-30", children: e.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest", children: "\u65E0\u8BBE\u5B9A\u76EE\u6807" }) })] })] }), e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(we, { className: "w-3.5 h-3.5 text-destructive" }), "\u6B7B\u4EA1\u7981\u5FCC"] }), e.jsxs("div", { className: "space-y-2.5", children: [(_n = (_m = (_l = l.currentSession) == null ? void 0 : _l.modeConfig) == null ? void 0 : _m.failureChecks) == null ? void 0 : _n.map((v) => {
    var _a3, _b2, _c2;
    const E = (_c2 = (_b2 = (_a3 = l.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.failureStates) == null ? void 0 : _c2.find((ee) => ee.key === v.key);
    return e.jsxs("div", { className: G("p-3.5 rounded-xl border flex items-start gap-3 transition-all", (E == null ? void 0 : E.isCompleted) ? "bg-destructive/5 border-destructive/20" : "bg-background/40 border-muted/50 opacity-60"), children: [e.jsx("div", { className: G("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5", (E == null ? void 0 : E.isCompleted) ? "bg-destructive text-destructive-foreground" : "bg-muted border border-muted-foreground/10"), children: (E == null ? void 0 : E.isCompleted) ? e.jsx(ma, { className: "w-3 h-3" }) : e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20" }) }), e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsx("div", { className: G("text-[13px] leading-tight font-bold tracking-tight", (E == null ? void 0 : E.isCompleted) ? "text-destructive" : "text-foreground/70"), children: v.description }), (E == null ? void 0 : E.isCompleted) && e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider opacity-60", children: "Critical Failure Triggered" })] })] }, v.key);
  }), (!((_p = (_o = l.currentSession) == null ? void 0 : _o.modeConfig) == null ? void 0 : _p.failureChecks) || l.currentSession.modeConfig.failureChecks.length === 0) && e.jsx("div", { className: "py-8 text-center border border-dashed rounded-xl opacity-30", children: e.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest", children: "\u65E0\u5931\u8D25\u5224\u5B9A" }) })] })] }), e.jsxs("div", { className: "pt-10 opacity-30", children: [e.jsx("div", { className: "h-px bg-linear-to-r from-transparent via-muted-foreground/50 to-transparent" }), e.jsx("p", { className: "text-[9px] text-center mt-4 font-bold tracking-[0.3em] uppercase", children: "Narrative Engine v1.0.4" })] })] })] });
}, Lr = (s) => {
  const { item: t, character: a } = s, n = (() => {
    const o = t.data;
    return o ? Array.isArray(o.operations) ? e.jsx(Tt, { item: { ...t, type: "challenge_mode_dm_eval" } }) : Array.isArray(o.results) && o.results.every((m) => m && (m.type === "goal" || m.type === "failure")) ? e.jsx(Mt, { item: { ...t, type: "challenge_mode_checking" } }) : o.type && (o.type === "success" || o.type === "failure") && typeof o.description == "string" ? e.jsx(At, { item: { ...t, type: "challenge_mode_ending" } }) : null : null;
  })();
  if (n) return n;
  switch (t.type) {
    case "dm_intro":
      return e.jsx(Dt, { content: t.data.content, title: "Challenge Intro" });
    case "challenge_mode_dm_eval":
      return e.jsx(Tt, { item: t });
    case "challenge_mode_checking":
      return e.jsx(Mt, { item: t });
    case "challenge_mode_ending":
      return e.jsx(At, { item: t });
    case "character_intro":
      return e.jsx(_s, { item: t, character: a });
    case "character_message":
      return e.jsx(He, { item: t, character: a });
    case "character_message_group":
      return e.jsx("div", { className: "space-y-4", children: (t.data.list || []).map((o, m) => e.jsx(He, { item: { ...t, data: { ...t.data, content: o.content } }, character: a }, o.id || m)) });
    case "participant_message":
      return t.data.isDM || t.data.name === "DM" || !t.data.isUser && !t.data.isCharacter && !t.data.isEnv ? e.jsx(Dt, { content: t.data.content }) : e.jsx(nt, { item: t });
    case "system_notification":
      return e.jsx("div", { className: "flex justify-center my-6", children: e.jsxs("div", { className: "flex items-center gap-3 px-4 py-1.5 rounded-full bg-muted/30 border border-muted/50 text-muted-foreground shadow-sm", children: [e.jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/40" }), e.jsx("span", { className: "text-[10px] font-bold tracking-widest uppercase", children: t.data.content }), e.jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/40" })] }) });
    case "placeholder":
      return null;
    default:
      return null;
  }
}, Dt = ({ content: s, title: t = "Narrative Master" }) => e.jsxs("div", { className: "flex gap-6 group animate-in fade-in slide-in-from-left-2 duration-500", children: [e.jsxs("div", { className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden", children: [e.jsx("div", { className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" }), e.jsx(be, { className: "w-5 h-5 text-amber-600 relative z-10" })] }), e.jsxs("div", { className: "space-y-2 grow pt-1", children: [e.jsxs("div", { className: "text-[10px] font-black tracking-[0.2em] text-amber-600/60 flex items-center gap-2 uppercase", children: [e.jsx(gt, { className: "w-3 h-3" }), t] }), e.jsx("div", { className: "text-[15px] leading-relaxed italic text-foreground/80 whitespace-pre-wrap font-serif", children: s })] })] }), Tt = ({ item: s }) => e.jsx("div", { className: "max-w-2xl mx-auto w-full group animate-in fade-in zoom-in-95 duration-500", children: e.jsxs("div", { className: "bg-muted/10 border border-muted/40 rounded-2xl overflow-hidden shadow-sm", children: [e.jsxs("div", { className: "px-4 py-2 border-b border-muted/40 bg-muted/20 flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground/60", children: [e.jsx(ge, { className: "w-3 h-3" }), "\u4E16\u754C\u7EBF\u6F14\u53D8\u8BC4\u4F30"] }), e.jsx(ht, { className: "w-3 h-3 text-muted-foreground/30" })] }), e.jsxs("div", { className: "p-5 space-y-4", children: [s.data.analyze && e.jsx("div", { className: "text-[13px] text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1", children: s.data.analyze }), e.jsx("div", { className: "flex flex-wrap gap-2", children: s.data.operations.map((t, a) => e.jsx(Rr, { operation: t }, a)) })] })] }) }), Rr = ({ operation: s }) => {
  const [t, a, r] = s;
  let n = "bg-primary/10 text-primary border-primary/20", o = "";
  if (t === "delta") {
    const m = r;
    n = m > 0 ? "bg-green-500/10 text-green-600 border-green-500/20" : "bg-red-500/10 text-red-600 border-red-500/20", o = `${a} ${m > 0 ? "+" : ""}${m}`;
  } else t === "setTrue" || t === "setFalse" ? o = `${a} \u2192 ${t === "setTrue" ? "YES" : "NO"}` : o = `${a} = ${r}`;
  return e.jsx(H, { variant: "outline", className: G("text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg border", n), children: o });
}, Mt = ({ item: s }) => e.jsx("div", { className: "flex justify-center opacity-40 hover:opacity-100 transition-opacity", children: e.jsx("div", { className: "flex gap-4", children: s.data.results.map((t, a) => t.result && e.jsxs("div", { className: "flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground", children: [e.jsx(rt, { className: "w-3 h-3 text-primary" }), t.key, " \u66F4\u65B0"] }, a)) }) }), At = ({ item: s }) => {
  const t = s.data.type === "success";
  return e.jsx("div", { className: "py-12 animate-in fade-in zoom-in duration-1000", children: e.jsxs("div", { className: G("max-w-lg mx-auto p-12 rounded-[2.5rem] border-4 text-center space-y-6 shadow-2xl relative overflow-hidden", t ? "bg-primary/5 border-primary/30 shadow-primary/10" : "bg-destructive/5 border-destructive/30 shadow-destructive/10"), children: [e.jsx("div", { className: G("absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20", t ? "bg-primary" : "bg-destructive") }), e.jsx("div", { className: G("absolute -bottom-12 -left-12 w-48 h-48 rounded-full blur-3xl opacity-20", t ? "bg-primary" : "bg-destructive") }), e.jsx("div", { className: "inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-background border shadow-xl relative z-10 mb-2", children: t ? e.jsx(we, { className: "w-12 h-12 text-primary animate-bounce-short" }) : e.jsx(Bt, { className: "w-12 h-12 text-destructive animate-pulse" }) }), e.jsxs("div", { className: "space-y-2 relative z-10", children: [e.jsx("h2", { className: G("text-3xl font-black uppercase tracking-[0.3em]", t ? "text-primary" : "text-destructive"), children: t ? "\u6311\u6218\u6210\u529F" : "\u6311\u6218\u5931\u8D25" }), e.jsx("div", { className: "h-1 w-12 bg-muted-foreground/20 mx-auto rounded-full" })] }), e.jsx("p", { className: "text-lg font-medium text-foreground/80 leading-relaxed font-serif relative z-10", children: s.data.description }), !t && s.data.failureReason && e.jsxs("div", { className: "pt-4 px-6 relative z-10", children: [e.jsx("div", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-destructive/60 mb-2", children: "\u5931\u8D25\u6839\u6E90" }), e.jsxs("p", { className: "text-xs font-bold text-destructive/80 italic", children: ["\u300C", s.data.failureReason, "\u300D"] })] }), e.jsx("div", { className: "pt-8 relative z-10", children: e.jsx(H, { variant: "outline", className: "text-[10px] font-black tracking-[0.4em] uppercase py-2 px-6 rounded-2xl bg-background/50 backdrop-blur-sm border-muted/50", children: "NARRATIVE ENDED" }) })] }) });
}, fn = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForChallenge: Or }, Symbol.toStringTag, { value: "Module" }));
export {
  ke as C,
  rn as E,
  an as I,
  Zr as S,
  De as a,
  en as b,
  tn as c,
  nn as d,
  je as e,
  cn as f,
  on as g,
  ln as h,
  dn as i,
  un as j,
  hn as k,
  mn as l,
  K as m,
  sn as n,
  pn as o,
  gn as p,
  xn as q,
  fn as r
};
