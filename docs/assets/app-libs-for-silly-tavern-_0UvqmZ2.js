var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as f, j as e, aB as pe, aC as Cn, t as $, aD as le, aE as ke, aF as ga } from "./react-1W-rR8FQ.js";
import { c as R, a as Ss } from "./app-lib-BIt54Jc6.js";
import { a1 as kn, a2 as In, B as _, a3 as Dn, a4 as Tn, a5 as Mn, a6 as Pn, a7 as An, a8 as En, a9 as $n, Z as Ln, _ as Rn, $ as On, o as We, p as Tt, I as U, f as B, ai as Fn, C as W, b as Z, c as Q, d as ae, e as K, D as at, m as nt, n as rt, aj as Un, ak as Hn, al as Bn, L as I, u as _s, am as fa, z as es, an as ws, aa as Y, ao as fs, S as gt, v as ft, w as yt, x as bt, y as je, ab as et, ap as Gn, aq as Ht, ar as Bt, as as Gt, q as ya, r as ba, s as Oe, t as Fe, at as Jn, au as zn, av as Vn, aw as Wn } from "./app-components-CsAfwMCw.js";
import { p as Mt, o as Kn, M as St, n as _t, z as ja, B as va, T as it, q as qn, G as Xn, j as wt, J as Yn, F as Na, v as ys, N as Sa, D as Cs, m as tt, u as ks, r as Zn, Q as _a, U as Ve, P as xe, V as ts, X as Pt, W as Qn, Y as de, Z as st, _ as pt, $ as Wt, A as Is, k as we, g as Qe, R as Kt, a0 as ot, h as er, C as wa, I as ss, y as He, a1 as Ds, a2 as Ct, a3 as Ca, a4 as ka, a5 as tr, a6 as bs, a7 as sr, a8 as ar, a9 as Ia, aa as nr, e as rr, ab as ir, ac as or, ad as cr, ae as lr, s as Da, af as Ta, f as kt, ag as Ma, ah as _e, ai as Pa, b as Ts, aj as Ms, ak as Aa, a as dr, al as mr, am as ur, an as hr, ao as pr } from "./icons-1N0m32Tb.js";
import { k as At, m as as, n as xr, j as Ea, f as ne, i as Me } from "./@tanstack-DKuuEdLe.js";
import { n as L } from "./id-OxPLOBIU.js";
import { o as D, s as g, n as C, b as X, r as re, a as ge, l as V, c as O, _ as G, u as Pe, t as Ne, e as gr } from "./zod-grrOrvCS.js";
import { c as ns } from "./app-hooks-D4wnnCdG.js";
import { x as $a, y as Ue, z as fr, A as Gs } from "./vendor-CsGpsoRf.js";
import { _ as ve } from "./index-zC5F17iY.js";
import { a as Ps } from "./future-lib-llm-ui-react-BOJj2ddx.js";
import { D as qt } from "./dexie-BEWXHaIH.js";
import { c as Js } from "./es-toolkit-CstbrnlE.js";
const zs = { chat: { id: "chat", label: "\u804A\u5929", description: "\u7EAF\u7CB9\u7684\u89D2\u8272RP\u5BF9\u8BDD", icon: va, colorClass: "text-blue-500", badgeText: "\u804A\u5929\u6A21\u5F0F", sessionPrefix: "\u804A\u5929" }, challenge: { id: "challenge", label: "\u6311\u6218", description: "\u542B DM \u65C1\u767D\u4E0E\u76EE\u6807\u6311\u6218", icon: ja, colorClass: "text-amber-500", badgeText: "\u6311\u6218\u6A21\u5F0F", sessionPrefix: "\u6311\u6218" }, dnd: { id: "dnd", label: "DnD", description: "\u591A\u4EBA DnD \u684C\u6E38\u5192\u9669", icon: _t, colorClass: "text-amber-600", badgeText: "DnD \u6A21\u5F0F", sessionPrefix: "DnD \u5192\u9669" }, "group-chat": { id: "group-chat", label: "\u7FA4\u804A", description: "\u591A\u89D2\u8272\u81EA\u7531\u7FA4\u804A", icon: St, colorClass: "text-violet-500", badgeText: "\u7FA4\u804A\u6A21\u5F0F", sessionPrefix: "\u7FA4\u804A" }, "chat-create-character": { id: "chat-create-character", label: "\u804A\u5929\u521B\u89D2", description: "\u901A\u8FC7\u5BF9\u8BDD\u521B\u5EFA\u89D2\u8272\u5361", icon: Kn, colorClass: "text-emerald-500", badgeText: "\u804A\u5929\u521B\u89D2", sessionPrefix: "\u521B\u5EFA\u89D2\u8272" }, "chat-create-challenge": { id: "chat-create-challenge", label: "\u804A\u5929\u521B\u6311\u6218", description: "\u901A\u8FC7\u5BF9\u8BDD\u521B\u5EFA\u6311\u6218\u5361", icon: Mt, colorClass: "text-orange-500", badgeText: "\u804A\u5929\u521B\u6311\u6218", sessionPrefix: "\u521B\u5EFA\u6311\u6218" } };
function Xt(t) {
  return zs[t] || zs.chat;
}
const yr = (t) => {
  const [s, a] = f.useState(false);
  return e.jsxs(kn, { open: s, onOpenChange: a, children: [e.jsxs("div", { className: R("group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors mb-1", t.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground hover:text-foreground"), onClick: () => t.onClick(t.session), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [(() => {
    const n = Xt(t.session.mode).icon;
    return e.jsx(n, { className: "w-4 h-4 shrink-0" });
  })(), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: t.session.title || t.characterName }), e.jsx("span", { className: "text-[10px] opacity-70", children: new Date(t.session.updatedAt).toLocaleDateString() })] })] }), e.jsx(In, { asChild: true, children: e.jsx(_, { variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: (n) => n.stopPropagation(), type: "button", children: e.jsx(it, { className: "w-3.5 h-3.5 text-muted-foreground hover:text-destructive" }) }) })] }), e.jsxs(Dn, { children: [e.jsxs(Tn, { children: [e.jsx(Mn, { children: "\u786E\u8BA4\u5220\u9664" }), e.jsx(Pn, { children: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u4F1A\u8BDD\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002" })] }), e.jsxs(An, { children: [e.jsx(En, { children: "\u53D6\u6D88" }), e.jsx($n, { onClick: () => {
    var _a2;
    (_a2 = t.onDelete) == null ? void 0 : _a2.call(t, t.session), a(false);
  }, children: "\u5220\u9664" })] })] })] });
}, Bl = (t) => {
  const [s, a] = f.useState(""), [n, r] = f.useState(false), i = (c) => {
    var _a2, _b;
    if (c.title) return c.title;
    const d = Xt(c.mode), u = (_a2 = c.modeConfig) == null ? void 0 : _a2.characterId;
    if (u) {
      const l = (_b = t.characters.find((h) => h.id === u)) == null ? void 0 : _b.name;
      if (l) return `${d.sessionPrefix}: ${l}`;
    }
    return d.sessionPrefix;
  }, o = t.sessions.filter((c) => i(c).toLowerCase().includes(s.toLowerCase())).sort((c, d) => d.updatedAt - c.updatedAt), m = (c = false) => e.jsxs("div", { className: "flex flex-col h-full bg-muted/30 border-r w-64", children: [e.jsxs("div", { className: `p-4 space-y-4 ${c ? "pt-12" : ""}`, children: [e.jsxs(_, { className: "w-full flex items-center gap-2", onClick: () => {
    t.onNewSession(), c && r(false);
  }, type: "button", children: [e.jsx(Xn, { className: "w-4 h-4" }), "\u65B0\u4F1A\u8BDD"] }), e.jsxs("div", { className: "relative", children: [e.jsx(wt, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), e.jsx(U, { placeholder: "\u641C\u7D22\u4F1A\u8BDD...", className: "pl-8 h-9 text-xs", value: s, onChange: (d) => a(d.target.value) })] })] }), e.jsx("div", { className: "grow overflow-y-auto px-2", children: e.jsxs("div", { className: "space-y-1", children: [o.map((d) => e.jsx(yr, { session: d, isActive: d.id === t.activeSessionId, characterName: i(d), onClick: (u) => {
    t.onSessionSelect(u), c && r(false);
  }, onDelete: t.onSessionDelete }, d.id)), o.length === 0 && e.jsx("div", { className: "text-center py-10 text-muted-foreground text-xs", children: "\u65E0\u4F1A\u8BDD" })] }) })] });
  return e.jsxs(e.Fragment, { children: [e.jsx("aside", { className: "hidden md:flex w-64 flex-col", children: m(false) }), e.jsxs(Ln, { open: n, onOpenChange: r, children: [e.jsx(Rn, { asChild: true, children: e.jsx(_, { variant: "outline", size: "icon", className: "md:hidden fixed bottom-6 left-6 rounded-full shadow-lg z-50 h-12 w-12", children: e.jsx(qn, { className: "h-6 w-6" }) }) }), e.jsxs(On, { side: "left", className: "w-64 p-0", children: [e.jsx(We, { className: "sr-only", children: "\u4F1A\u8BDD\u5217\u8868" }), e.jsx(Tt, { className: "sr-only", children: "\u9009\u62E9\u548C\u7BA1\u7406\u60A8\u7684\u804A\u5929\u4F1A\u8BDD" }), m(true)] })] })] });
}, br = D({ keys: X(g()).describe("\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5339\u914D\u804A\u5929\u65E5\u5FD7"), content: g().describe("\u5185\u5BB9\uFF0C\u5982\u679C\u5339\u914D\u5219\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u4E2D"), extensions: re(g(), ge()).describe("\u6269\u5C55\u5B57\u6BB5"), enabled: O().describe("\u662F\u5426\u542F\u7528"), insertion_order: C().describe("\u63D2\u5165\u987A\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5C0F\u8D8A\u65E9\u63D2\u5165"), case_sensitive: O().optional().describe("\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199"), constant: O().optional().describe("\u662F\u5426\u4E3A\u5E38\u91CF\u5339\u914D"), name: g().optional().describe("\u6761\u76EE\u540D\u79F0"), priority: C().optional().describe("\u4F18\u5148\u7EA7"), id: C().optional().describe("\u6761\u76EEID"), comment: g().optional().describe("\u6CE8\u91CA"), selective: O().optional().describe("\u662F\u5426\u9009\u62E9\u6027\u5339\u914D"), secondary_keys: X(g()).optional().describe("\u6B21\u8981\u5173\u952E\u8BCD"), position: G(["before_char", "after_char"]).optional().describe("\u63D2\u5165\u4F4D\u7F6E") }), jr = D({ keys: X(g()).describe("\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5339\u914D\u804A\u5929\u65E5\u5FD7"), content: g().describe("\u5185\u5BB9\uFF0C\u5982\u679C\u5339\u914D\u5219\u6DFB\u52A0\u5230\u63D0\u793A\u8BCD\u4E2D"), extensions: re(g(), ge()).describe("\u6269\u5C55\u5B57\u6BB5"), enabled: O().describe("\u662F\u5426\u542F\u7528"), insertion_order: C().describe("\u63D2\u5165\u987A\u5E8F\uFF0C\u6570\u5B57\u8D8A\u5C0F\u8D8A\u65E9\u63D2\u5165"), case_sensitive: O().optional().describe("\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199"), use_regex: O().optional().describe("\u662F\u5426\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D"), constant: O().optional().describe("\u662F\u5426\u4E3A\u5E38\u91CF\u5339\u914D"), name: g().optional().describe("\u6761\u76EE\u540D\u79F0"), priority: C().optional().describe("\u4F18\u5148\u7EA7"), id: Pe([C(), g()]).optional().describe("\u6761\u76EEID"), comment: g().optional().describe("\u6CE8\u91CA"), selective: O().optional().describe("\u662F\u5426\u9009\u62E9\u6027\u5339\u914D"), secondary_keys: X(g()).optional().describe("\u6B21\u8981\u5173\u952E\u8BCD"), position: G(["before_char", "after_char"]).optional().describe("\u63D2\u5165\u4F4D\u7F6E") }), vr = Pe([br, jr]), La = D({ name: g().optional().describe("\u77E5\u8BC6\u4E66\u540D\u79F0"), description: g().optional().describe("\u77E5\u8BC6\u4E66\u63CF\u8FF0"), scan_depth: C().optional().describe("\u626B\u63CF\u6DF1\u5EA6\uFF0C\u68C0\u67E5\u6700\u8FD1\u591A\u5C11\u6761\u6D88\u606F"), token_budget: C().optional().describe("\u4EE4\u724C\u9884\u7B97\uFF0C\u8D85\u8FC7\u5219\u79FB\u9664\u4F4E\u4F18\u5148\u7EA7\u6761\u76EE"), recursive_scanning: O().optional().describe("\u662F\u5426\u542F\u7528\u9012\u5F52\u626B\u63CF"), extensions: re(g(), ge()).describe("\u6269\u5C55\u5B57\u6BB5"), entries: X(vr).describe("\u6761\u76EE\u6570\u7EC4") }), Nr = D({ type: g().describe("\u8D44\u4EA7\u7C7B\u578B\uFF0C\u5982 'icon', 'background' \u7B49"), uri: g().describe("\u8D44\u4EA7URI"), name: g().describe("\u8D44\u4EA7\u540D\u79F0"), ext: g().describe("\u6587\u4EF6\u6269\u5C55\u540D") }), ct = D({ name: g().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: g().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), creator: g().describe("\u521B\u5EFA\u8005\u3010v2\u3011"), creator_notes: g().describe("\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v2\u3011"), creator_notes_multilingual: re(g(), g()).optional().describe("\u591A\u8BED\u8A00\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v3\u3011"), extensions: re(g(), ge()).describe("\u53EF\u81EA\u5B9A\u4E49\u7684\u6269\u5C55\u5B57\u6BB5\u3010v2\u3011"), assets: X(Nr).optional().describe("\u8D44\u4EA7\u6570\u7EC4\u3010v3\u3011"), system_prompt: g().describe("\u7CFB\u7EDF\u63D0\u793A\u8BCD(\u6A21\u677F)\u3010v2\u3011"), post_history_instructions: g().describe("\u5386\u53F2\u6307\u4EE4\u540E\u7F00(\u6A21\u677F)\u3010v2\u3011"), nickname: g().optional().describe("\u6635\u79F0\u3010v3\u3011"), personality: g().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), mes_example: g().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011"), first_mes: g().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), alternate_greetings: X(g()).describe("\u5907\u7528\u95EE\u5019\u8BED\u6570\u7EC4\u3010v2\u3011"), group_only_greetings: X(g()).describe("\u4EC5\u7FA4\u804A\u95EE\u5019\u8BED\u3010v3\u3011"), scenario: g().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), character_book: La.optional().describe("\u89D2\u8272\u7279\u5B9A\u77E5\u8BC6\u4E66\u3010\u90E8\u5206\u529F\u80FD\uFF08\u5982\u88C5\u9970\u5668\uFF09\u9650\u5355\u804A\u4F7F\u7528\u3011\u3010v2\u3011"), character_version: g().describe("\u89D2\u8272\u7248\u672C\u3010v2\u3011"), tags: X(g()).describe("\u6807\u7B7E\u6570\u7EC4\uFF0C\u7528\u4E8E\u7B5B\u9009\uFF0C\u5927\u5C0F\u5199\u654F\u611F\u3010v2\u3011"), source: X(g()).optional().describe("\u6765\u6E90\u6570\u7EC4\uFF0C\u4FBF\u4E8E\u6EAF\u6E90\u6216\u81EA\u52A8\u66F4\u65B0\u7B49\u3010v3\u3011"), creation_date: C().optional().describe("\u521B\u5EFA\u65E5\u671F\uFF08Unix\u65F6\u95F4\u6233\uFF09\u3010v3\u3011"), modification_date: C().optional().describe("\u4FEE\u6539\u65E5\u671F\uFF08Unix\u65F6\u95F4\u6233\uFF09\u3010v3\u3011") }), Sr = D({ name: g().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: g().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), personality: g().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), scenario: g().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), first_mes: g().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), mes_example: g().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011"), creator_notes: g().describe("\u521B\u5EFA\u8005\u7B14\u8BB0\u3010v2\u3011"), system_prompt: g().describe("\u7CFB\u7EDF\u63D0\u793A\u8BCD(\u6A21\u677F)\u3010v2\u3011"), post_history_instructions: g().describe("\u5386\u53F2\u6307\u4EE4\u540E\u7F00(\u6A21\u677F)\u3010v2\u3011"), alternate_greetings: X(g()).describe("\u5907\u7528\u95EE\u5019\u8BED\u6570\u7EC4\u3010v2\u3011"), character_book: La.optional().describe("\u89D2\u8272\u7279\u5B9A\u77E5\u8BC6\u4E66\u3010\u90E8\u5206\u529F\u80FD\uFF08\u5982\u88C5\u9970\u5668\uFF09\u9650\u5355\u804A\u4F7F\u7528\u3011\u3010v2\u3011"), tags: X(g()).describe("\u6807\u7B7E\u6570\u7EC4\uFF0C\u7528\u4E8E\u7B5B\u9009\uFF0C\u5927\u5C0F\u5199\u654F\u611F\u3010v2\u3011"), creator: g().describe("\u521B\u5EFA\u8005\u3010v2\u3011"), character_version: g().describe("\u89D2\u8272\u7248\u672C\u3010v2\u3011"), extensions: re(g(), ge()).describe("\u53EF\u81EA\u5B9A\u4E49\u7684\u6269\u5C55\u5B57\u6BB5\u3010v2\u3011") });
D({ spec: V("chara_card_v2").describe("\u89C4\u8303\u6807\u8BC6"), spec_version: V("2.0").describe("\u89C4\u8303\u7248\u672C"), data: Sr.describe("\u6570\u636E") });
const As = D({ spec: V("chara_card_v3").describe("\u89C4\u8303\u6807\u8BC6"), spec_version: V("3.0").describe("\u89C4\u8303\u7248\u672C"), data: ct.describe("\u6570\u636E") }), Ra = D({ name: g().describe("\u89D2\u8272\u540D\u79F0\u3010v1\u3011"), description: g().describe("\u89D2\u8272\u63CF\u8FF0\u3010v1\u3011"), personality: g().describe("\u4EBA\u683C\u6216\u4E2A\u6027\u63CF\u8FF0\u3010v1\u3011"), scenario: g().describe("\u573A\u666F\u63CF\u8FF0\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), first_mes: g().describe("\u7B2C\u4E00\u6761\u6D88\u606F\u3010v1\u3011\u3010\u9650\u5355\u804A\u4F7F\u7528\u3011"), mes_example: g().describe("\u6D88\u606F\u793A\u4F8B\u3010v1\u3011") }), rs = ct.extend({ id: g().describe("\u89D2\u8272\u5361ID"), avatar: g().optional().describe("\u5934\u50CFURI"), imageBase64: g().optional().describe("PNG\u56FE\u50CFBase64\u6570\u636E"), createdAt: C().optional().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: C().optional().describe("\u66F4\u65B0\u65F6\u95F4") }), se = D({ id: g().optional().describe("\u4E0A\u4E0B\u6587\u9879 ID"), idx: C().optional().describe("\u4E0A\u4E0B\u6587\u9879\u7D22\u5F15\u4F4D\u7F6E"), orderRef: C().optional().describe("\u4E0A\u4E0B\u6587\u9879\u6392\u5E8F\u53C2\u8003\u503C").default(0), type: g().optional().describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\u6807\u7B7E").default("default"), data: ge().describe("\u4E0A\u4E0B\u6587\u5185\u5BB9"), hidden: O().optional().nullable().describe("\u662F\u5426\u9690\u85CF\u8BE5\u4E0A\u4E0B\u6587\u9879"), processing: O().optional().nullable().describe("\u4E0A\u4E0B\u6587\u9879\u5904\u7406\u72B6\u6001\uFF0C\u5904\u7406\u4E2D\u8BBE\u7F6E\u4E3A true\uFF0C\u5904\u7406\u5B8C\u6BD5\u8BBE\u7F6E\u4E3A undefined"), timestamp: C().optional().nullable().describe("\u6D88\u606F\u65F6\u95F4\u6233"), deleted: O().optional().nullable().describe("\u662F\u5426\u5DF2\u5220\u9664\u8BE5\u4E0A\u4E0B\u6587\u9879") }), _r = D({ historyItems: se.array().describe("\u4E0A\u4E0B\u6587\u9879\u6570\u7EC4"), processingItem: se.optional().describe("\u6B63\u5728\u5904\u7406\u4E2D\u7684\u4E0A\u4E0B\u6587\u9879(\u9650\u4E00\u9879)") });
D({ role: G(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: g().describe("\u6D88\u606F\u5185\u5BB9"), name: g().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") });
se.extend({ type: V("llm_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1ALLM\u6D88\u606F"), data: D({ role: G(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: g().describe("\u6D88\u606F\u5185\u5BB9"), name: g().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") }).describe("\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u56E0\u4E3A\u4E0A\u4E0B\u6587\u7BA1\u7406\u5E94\u8BE5\u4F7F\u7528\u66F4\u52A0\u7CBE\u7EC6\u7684\u7ED3\u6784\u3002LLM\u6D88\u606F\u4E0A\u4E0B\u6587\u9879\u53EA\u662F\u6700\u6734\u7D20\u7684\u5F62\u5F0F\u3002");
se.extend({ type: V("starting_system_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u8D77\u59CB\u7CFB\u7EDF\u6D88\u606F"), data: D({ role: V("system").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: g().describe("\u6D88\u606F\u5185\u5BB9"), name: g().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
se.extend({ type: V("in_context_system_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u4E0A\u4E0B\u6587\u4E4B\u4E2D\u7684\u7CFB\u7EDF\u6D88\u606F"), data: D({ role: V("system").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: g().describe("\u6D88\u606F\u5185\u5BB9"), name: g().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
se.extend({ type: V("tool_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u5DE5\u5177\u6D88\u606F"), data: D({ role: V("tool").optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: g().describe("\u6D88\u606F\u5185\u5BB9"), name: g().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
se.extend({ type: V("story_telling").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u8BB2\u6545\u4E8B\u6D88\u606F"), data: D({ role: G(["system", "user", "assistant", "tool"]).describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272"), content: g().describe("\u6D88\u606F\u5185\u5BB9"), name: g().optional().describe("\u53D1\u9001\u8005\u540D\u79F0") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
const Oa = D({ isCharacter: O().optional().default(false).describe("\u662F\u5426\u4E3A\u89D2\u8272\u6D88\u606F"), isEnv: O().optional().default(false).describe("\u662F\u5426\u4E3A\u73AF\u5883\u6D88\u606F"), isDM: O().optional().default(false).describe("\u662F\u5426\u4E3ADM\u6D88\u606F"), isUser: O().optional().default(false).describe("\u662F\u5426\u4E3A\u7528\u6237\u6D88\u606F"), characterId: g().optional().describe("\u89D2\u8272 ID"), userId: g().optional().describe("\u7528\u6237 ID"), content: g().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: C().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233"), name: g().optional().describe("\u53D1\u9001\u8005\u540D\u79F0"), role: G(["system", "user", "assistant", "tool"]).optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272") }), wr = se.extend({ type: V("participant_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u53C2\u4E0E\u8005\u6D88\u606F"), data: Oa.describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") }), Fa = D({ isCharacter: O().optional().default(false).describe("\u662F\u5426\u4E3A\u89D2\u8272\u6D88\u606F"), isEnv: O().optional().default(false).describe("\u662F\u5426\u4E3A\u73AF\u5883\u6D88\u606F"), isDM: O().optional().default(false).describe("\u662F\u5426\u4E3ADM\u6D88\u606F"), isUser: O().optional().default(false).describe("\u662F\u5426\u4E3A\u7528\u6237\u6D88\u606F"), characterId: g().optional().describe("\u89D2\u8272 ID"), userId: g().optional().describe("\u7528\u6237 ID"), list: X(D({ content: g().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: C().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233"), originalIdx: C().optional().describe("\u539F\u59CB\u7D22\u5F15\u4F4D\u7F6E") })).describe("\u6D88\u606F\u5217\u8868"), name: g().optional().describe("\u53D1\u9001\u8005\u540D\u79F0"), role: G(["system", "user", "assistant", "tool"]).optional().describe("\u6D88\u606F\u53D1\u9001\u8005\u7684\u89D2\u8272") });
se.extend({ type: V("participant_message_group").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u53C2\u4E0E\u8005\u6D88\u606F\u7EC4"), data: Fa.describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
wr.extend({ type: V("character_message").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u6D88\u606F"), data: Oa.extend({ characterId: g().describe("\u89D2\u8272 ID") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
se.extend({ type: V("character_message_group").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u6D88\u606F\u7EC4"), data: Fa.extend({ characterId: g().describe("\u89D2\u8272 ID") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
se.extend({ type: V("placeholder").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u5360\u4F4D\u7B26"), data: ge().nullable().optional().describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9"), hidden: V(true).describe("\u5360\u4F4D\u7B26\u4E0A\u4E0B\u6587\u9879\u9ED8\u8BA4\u9690\u85CF") });
se.extend({ type: V("alert").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u7A0B\u5E8F\u63D0\u793A"), data: D({ type: G(["info", "warning", "error", "success", "secondary", "contrast"]).describe("\u7A0B\u5E8F\u63D0\u793A\u7C7B\u578B"), content: g().describe("\u5185\u5BB9"), timestamp: C().optional().describe("\u65F6\u95F4\u6233") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
se.extend({ type: V("summary").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6458\u8981"), data: D({ range: Ne([C().describe("\u8D77\u59CB\u7D22\u5F15\u4F4D\u7F6E"), C().describe("\u7ED3\u675F\u7D22\u5F15\u4F4D\u7F6E")]).describe("\u6458\u8981\u8986\u76D6\u7684\u5185\u5BB9\u8303\u56F4"), content: g().describe("\u6458\u8981\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
se.extend({ type: V("annotation").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6CE8\u89E3"), data: D({ target: C().describe("\u6CE8\u89E3\u76EE\u6807\u7684\u7D22\u5F15\u4F4D\u7F6E"), content: g().describe("\u6CE8\u89E3\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
se.extend({ type: V("performance_command").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u6F14\u51FA\u6307\u4EE4"), data: D({ anchor: C().describe("\u6F14\u51FA\u6307\u4EE4\u7684\u951A\u70B9\u4F4D\u7F6E"), command: X(ge()).describe("\u6F14\u51FA\u6307\u4EE4\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
se.extend({ type: V("dm_intro").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1ADM \u5F00\u573A\u767D"), data: D({ content: g().describe("DM \u5F00\u573A\u767D\u5185\u5BB9") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
se.extend({ type: V("character_intro").describe("\u4E0A\u4E0B\u6587\u9879\u7C7B\u578B\uFF1A\u89D2\u8272\u5F00\u573A\u767D"), data: D({ characterId: g().optional().describe("\u89D2\u8272ID"), content: g().describe("\u89D2\u8272\u5F00\u573A\u767D\u5185\u5BB9"), timestamp: C().optional().describe("\u6D88\u606F\u65F6\u95F4\u6233") }).describe("\u4E0A\u4E0B\u6587\u9879\u5185\u5BB9") });
const is = D({ id: g().describe("\u4F1A\u8BDDID"), title: g().optional().describe("\u4F1A\u8BDD\u6807\u9898"), contextId: g().optional().nullable().describe("\u5173\u8054\u7684\u4E0A\u4E0B\u6587\u7684ID"), mode: g().describe("\u6A21\u5F0F"), modeConfig: re(g(), ge()).describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: re(g(), ge()).describe("\u6A21\u5F0F\u4E13\u7528\u72B6\u6001"), createdAt: C().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: C().describe("\u66F4\u65B0\u65F6\u95F4"), isActive: O().optional().describe("\u662F\u5426\u6D3B\u8DC3") }), Cr = D({ key: g().describe("\u53D8\u91CF\u952E"), type: V("boolean").describe("\u53D8\u91CF\u7C7B\u578B"), description: g().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: O().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: O().describe("\u521D\u59CB\u503C") }), kr = D({ key: g().describe("\u53D8\u91CF\u952E"), type: V("number").describe("\u53D8\u91CF\u7C7B\u578B"), description: g().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: O().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: C().describe("\u521D\u59CB\u503C"), min: C().optional().describe("\u6700\u5C0F\u503C"), max: C().optional().describe("\u6700\u5927\u503C"), minDelta: C().optional().describe("(\u7EDD\u5BF9\u503C\u7684)\u6700\u5C0F\u53D8\u5316\u5E45\u5EA6"), maxDelta: C().optional().describe("(\u7EDD\u5BF9\u503C\u7684)\u6700\u5927\u53D8\u5316\u5E45\u5EA6"), asPercent: O().optional().describe("\u662F\u5426\u4E3A\u767E\u5206\u6BD4(\u754C\u9762\u6DFB\u52A0\u767E\u5206\u53F7)") }), Ir = D({ key: g().describe("\u53D8\u91CF\u952E"), type: V("string").describe("\u53D8\u91CF\u7C7B\u578B"), description: g().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: O().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: g().describe("\u521D\u59CB\u503C"), asEnum: O().optional().describe("\u662F\u5426\u4E3A\u679A\u4E3E"), enumValues: X(g()).optional().describe("\u679A\u4E3E\u503C\u5217\u8868") }), Dr = D({ key: g().describe("\u53D8\u91CF\u952E"), type: V("tags").describe("\u53D8\u91CF\u7C7B\u578B"), description: g().optional().describe("\u53D8\u91CF\u63CF\u8FF0"), hidden: O().describe("\u662F\u5426\u9690\u85CF(\u754C\u9762\u4E0D\u663E\u793A)"), initial: X(g()).describe("\u521D\u59CB\u6807\u7B7E\u5217\u8868"), asEnum: O().optional().describe("\u662F\u5426\u4E3A\u679A\u4E3E"), enumValues: X(g()).optional().describe("\u679A\u4E3E\u503C\u5217\u8868") }), Ua = gr("type", [Cr, kr, Ir, Dr]);
re(g(), Ua).describe("\u53D8\u91CF\u914D\u7F6E\u5B57\u5178");
const Tr = D({ key: g().describe("\u53D8\u91CF\u952E"), value: Pe([O(), C(), g(), X(g())]).describe("\u53D8\u91CF\u503C") }), Mr = re(g(), Tr).describe("\u53D8\u91CF\u5B57\u5178");
G(["setTrue", "setFalse", "toggle", "delta", "setTo", "setValue", "add", "remove"]);
const Ha = Ne([G(["setTrue", "setFalse", "toggle"]), g().describe("\u53D8\u91CF\u952E")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u5E03\u5C14\u7C7B\u578B"), Ba = Ne([G(["delta", "setTo", "setValue"]), g().describe("\u53D8\u91CF\u952E"), C().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u6570\u5B57\u7C7B\u578B"), Ga = Ne([G(["setTo", "setValue"]), g().describe("\u53D8\u91CF\u952E"), g().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u5B57\u7B26\u4E32\u7C7B\u578B"), Ja = Ne([G(["add", "remove"]), g().describe("\u53D8\u91CF\u952E"), g().describe("\u64CD\u4F5C\u503C")]).describe("\u64CD\u4F5C\u5143\u7EC4\uFF1A\u6807\u7B7E\u7C7B\u578B");
Pe([Ha, Ba, Ga, Ja]).describe("\u53D8\u91CF\u64CD\u4F5C\u5143\u7EC4");
G(["isTrue", "isFalse", "eq", "is", "neq", "isNot", "gt", "gte", "lt", "lte", "includes", "notIncludes", "has", "hasAny", "hasAll", "llmJudge", "and", "or", "all", "any", "some"]);
const Pr = Ne([G(["isTrue", "isFalse"]), g().describe("\u53D8\u91CF\u952E")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5E03\u5C14\u7C7B\u578B"), Ar = Ne([G(["eq", "neq", "is", "isNot"]), g().describe("\u53D8\u91CF\u952E"), Pe([g(), C(), O()]).describe("\u6BD4\u8F83\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5B57\u9762\u91CF\u7C7B\u578B"), Er = Ne([G(["gt", "gte", "lt", "lte"]), g().describe("\u53D8\u91CF\u952E"), C().describe("\u6BD4\u8F83\u503C")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u6570\u5B57\u7C7B\u578B"), $r = Ne([G(["includes", "notIncludes", "has", "hasAny", "hasAll", "llmJudge"]), g().describe("\u53D8\u91CF\u952E"), Pe([g(), C(), O()]).describe("\u53C2\u8003\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5185\u5BB9\u7C7B\u578B(\u5B57\u7B26\u4E32\u548C\u6807\u7B7E)"), Lr = Ne([G(["hasAny", "hasAll"]), g().describe("\u53D8\u91CF\u952E"), Pe([g(), C(), O()]).array().describe("\u53C2\u8003\u503C(\u5B9E\u9645\u90FD\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u5904\u7406)")]).describe("\u6761\u4EF6\u5143\u7EC4\uFF1A\u5185\u5BB9\u6570\u7EC4\u7C7B\u578B(\u5B57\u7B26\u4E32\u548C\u6807\u7B7E)"), os = Pe([Pr, Ar, Er, $r, Lr]).describe("\u6761\u4EF6\u5143\u7EC4"), Es = Ne([G(["and", "or", "all", "any", "some"]), X(os).describe("\u5B50\u6761\u4EF6\u5143\u7EC4\u6570\u7EC4")]).describe("\u7B80\u5355\u590D\u5408\u6761\u4EF6\u5143\u7EC4"), za = Ne([G(["and", "or", "all", "any", "some"]), Pe([os, Es]).array().describe("\u5B50\u6761\u4EF6\u5143\u7EC4\u6570\u7EC4")]).describe("\u590D\u6742\u590D\u5408\u6761\u4EF6\u5143\u7EC4"), Rr = Pe([os, Es, za]).describe("\u6761\u4EF6\u5143\u7EC4\uFF08\u652F\u6301\u5355\u4E00\u6761\u4EF6\u548C\u590D\u5408\u6761\u4EF6\uFF09"), Vs = D({ key: g().describe("\u68C0\u67E5\u9879\u952E"), description: g().describe("\u68C0\u67E5\u9879\u63CF\u8FF0"), condition: Rr.describe("\u7ED3\u6784\u5316\u8FBE\u6210\u6761\u4EF6") }), Ws = D({ key: g().describe("\u68C0\u67E5\u9879\u952E"), isCompleted: O().describe("\u662F\u5426\u5DF2\u5B8C\u6210") }), Or = G(["dm_intro", "character_intro", "player_input", "dm_eval_changes", "dm_narrate_changes", "failure_check", "goal_check", "ending_check", "character_response"]), Fr = G(["idle", "dm_intro_ready", "dm_intro_running", "dm_intro_done", "character_intro_ready", "character_intro_running", "character_intro_done", "player_input_ready", "player_input_running", "player_input_done", "character_response_ready", "character_response_running", "character_response_done", "dm_eval_changes_ready", "dm_eval_changes_running", "dm_eval_changes_done", "dm_narrate_changes_ready", "dm_narrate_changes_running", "dm_narrate_changes_done", "failure_check_ready", "failure_check_running", "failure_check_done", "goal_check_ready", "goal_check_running", "goal_check_done", "ending_check_ready", "ending_check_running", "ending_check_done", "ended"]), ds = { idle: { label: "\u7A7A\u95F2", placeholder: "\u8BF7\u5148\u70B9\u51FB\u5F00\u59CB\u6216\u7EE7\u7EED...", inputEnabled: false }, dm_intro_ready: { label: "DM\u5F00\u573A\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u5F00\u573A\u767D...", inputEnabled: false }, dm_intro_running: { label: "DM\u5F00\u573A\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u5F00\u573A\u767D...", inputEnabled: false }, dm_intro_done: { label: "DM\u5F00\u573A\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u5F00\u573A\u767D\u5B8C\u6210...", inputEnabled: false }, character_intro_ready: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85\u89D2\u8272\u5F00\u573A\u767D...", inputEnabled: false }, character_intro_running: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u5F00\u573A\u767D...", inputEnabled: false }, character_intro_done: { label: "\u89D2\u8272\u5F00\u573A\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u5F00\u573A\u767D\u5B8C\u6210...", inputEnabled: false }, player_input_ready: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u51C6\u5907\uFF09", placeholder: "\u5728\u8FD9\u91CC\u4E66\u5199\u4F60\u7684\u4E0B\u4E00\u5E55...", inputEnabled: true }, player_input_running: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u6B63\u5728\u63D0\u4EA4\u4F60\u7684\u8F93\u5165...", inputEnabled: false }, player_input_done: { label: "\u73A9\u5BB6\u8F93\u5165\uFF08\u5B8C\u6210\uFF09", placeholder: "\u8F93\u5165\u5DF2\u63D0\u4EA4...", inputEnabled: false }, character_response_ready: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85\u89D2\u8272\u56DE\u5E94...", inputEnabled: false }, character_response_running: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u56DE\u5E94...", inputEnabled: false }, character_response_done: { label: "\u89D2\u8272\u56DE\u5E94\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u56DE\u5E94\u5B8C\u6210...", inputEnabled: false }, dm_eval_changes_ready: { label: "DM\u8BC4\u4F30\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u8BC4\u4F30...", inputEnabled: false }, dm_eval_changes_running: { label: "DM\u8BC4\u4F30\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u8BC4\u4F30...", inputEnabled: false }, dm_eval_changes_done: { label: "DM\u8BC4\u4F30\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u8BC4\u4F30\u5B8C\u6210...", inputEnabled: false }, dm_narrate_changes_ready: { label: "DM\u65C1\u767D\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u65C1\u767D...", inputEnabled: false }, dm_narrate_changes_running: { label: "DM\u65C1\u767D\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u65C1\u767D...", inputEnabled: false }, dm_narrate_changes_done: { label: "DM\u65C1\u767D\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u65C1\u767D\u5B8C\u6210...", inputEnabled: false }, failure_check_ready: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u5931\u8D25\u68C0\u67E5...", inputEnabled: false }, failure_check_running: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u5931\u8D25\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, failure_check_done: { label: "\u5931\u8D25\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u5931\u8D25\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, goal_check_ready: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u76EE\u6807\u68C0\u67E5...", inputEnabled: false }, goal_check_running: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u76EE\u6807\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, goal_check_done: { label: "\u76EE\u6807\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u76EE\u6807\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, ending_check_ready: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u8FDB\u884C\u7ED3\u5C40\u68C0\u67E5...", inputEnabled: false }, ending_check_running: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u7ED3\u5C40\u68C0\u67E5\u8FDB\u884C\u4E2D...", inputEnabled: false }, ending_check_done: { label: "\u7ED3\u5C40\u68C0\u67E5\uFF08\u5B8C\u6210\uFF09", placeholder: "\u7ED3\u5C40\u68C0\u67E5\u5B8C\u6210...", inputEnabled: false }, ended: { label: "\u5DF2\u7ED3\u675F", placeholder: "\u6311\u6218\u5DF2\u7ED3\u675F", inputEnabled: false } }, Va = D({ characterId: g().describe("\u8981\u6311\u6218\u7684\u89D2\u8272\u7684ID"), characterSnapshot: D({ name: g().describe("\u89D2\u8272\u540D\u79F0"), description: g().optional().describe("\u89D2\u8272\u63CF\u8FF0"), avatar: g().optional().describe("\u89D2\u8272\u5934\u50CF") }).optional().describe("\u89D2\u8272\u7684\u5FEB\u7167\u4FE1\u606F\uFF0C\u7528\u4E8E\u4FDD\u6301\u4F1A\u8BDD\u4E00\u81F4\u6027"), roleTaskPrompt: g().describe("\u89D2\u8272\u4EFB\u52A1\u63D0\u793A\u8BCD\uFF0C\u7528\u6765\u5F15\u5BFC\u89D2\u8272\u5728\u8BE5\u6311\u6218\u4E2D\u7684\u884C\u4E3A\u65B9\u5F0F"), userGuidance: g().describe("\u7528\u6237\u5F15\u5BFC\u8BED\uFF0C\u7528\u6765\u5F15\u5BFC\u7528\u6237\u5728\u8BE5\u6311\u6218\u4E2D\u7684\u884C\u4E3A"), variables: re(g(), Ua).describe("\u53D8\u91CF\u8BB0\u5F55"), goals: X(Vs.extend({ characterPrompt: g().describe("\u8FBE\u6210\u6B64\u76EE\u6807\u540E\uFF0C\u7ED9\u89D2\u8272\u589E\u52A0\u7684\u63D0\u793A\u8BCD"), userInfo: g().describe("\u8FBE\u6210\u6B64\u76EE\u6807\u540E\uFF0C\u7ED9\u7528\u6237\u7684\u63D0\u793A\u4FE1\u606F") })).describe("\u76EE\u6807\u5217\u8868"), failureChecks: X(Vs.extend({ characterPrompt: g().describe("\u89E6\u53D1\u6B64\u5931\u8D25\u540E\uFF0C\u7ED9\u89D2\u8272\u589E\u52A0\u7684\u63D0\u793A\u8BCD"), userInfo: g().describe("\u89E6\u53D1\u6B64\u5931\u8D25\u540E\uFF0C\u7ED9\u7528\u6237\u7684\u63D0\u793A\u4FE1\u606F") })).describe("\u5931\u8D25\u6761\u4EF6\u5217\u8868\uFF0C\u4E0E\u76EE\u6807\u540C\u6784\uFF0C\u7528\u6765\u68C0\u67E5\u6311\u6218\u662F\u5426\u5931\u8D25") }), Ur = D({ currentPhase: Or.describe("\u5F53\u524D\u9636\u6BB5\u540D\u79F0"), currentUIState: Fr.describe("\u5F53\u524D UI \u72B6\u6001\u540D\u79F0"), shouldCheck: O().default(true).describe("\u662F\u5426\u9700\u8981\u6267\u884C\u68C0\u67E5\u6D41\u7A0B"), variableStates: Mr.describe("\u6A21\u5F0F\u53D8\u91CF\u5B57\u5178"), goalStates: Ws.array().describe("\u76EE\u6807\u69FD\u4F4D\u6570\u7EC4"), failureStates: Ws.array().describe("\u5931\u8D25\u68C0\u67E5\u69FD\u4F4D\u6570\u7EC4") });
is.extend({ mode: V("challenge").describe("\u6A21\u5F0F"), modeConfig: Va.describe("\u6311\u6218\u6A21\u5F0F\u914D\u7F6E"), modeState: Ur.describe("\u6311\u6218\u6A21\u5F0F\u72B6\u6001") });
const Wa = Va.extend({ id: g().describe("\u6311\u6218\u5361ID"), name: g().describe("\u6311\u6218\u5361\u540D\u79F0"), description: g().describe("\u6311\u6218\u5361\u63CF\u8FF0"), tags: X(g()).optional().describe("\u6807\u7B7E\u6570\u7EC4"), createdAt: C().optional().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: C().optional().describe("\u66F4\u65B0\u65F6\u95F4") }), Hr = rs, Br = Wa, Gr = D({ id: g().describe("\u4F1A\u8BDDID"), title: g().optional().describe("\u4F1A\u8BDD\u6807\u9898"), contextId: g().optional().nullable().describe("\u5173\u8054\u7684\u4E0A\u4E0B\u6587\u7684ID"), mode: g().describe("\u6A21\u5F0F"), modeConfig: re(g(), ge()).describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: re(g(), ge()).describe("\u6A21\u5F0F\u4E13\u7528\u72B6\u6001"), characterId: g().optional().describe("\u89D2\u8272ID"), challengeId: g().optional().describe("\u6311\u6218ID"), createdAt: C().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: C().describe("\u66F4\u65B0\u65F6\u95F4"), isActive: O().optional().describe("\u662F\u5426\u6D3B\u8DC3") }), Jr = se, Ke = { MASTER_DB_NAME: "silly-tavern-master-db", SESSION_DB_PREFIX: "silly-tavern-session-" };
function zr(t) {
  return typeof t == "object" && t !== null && Cn(t) !== void 0;
}
function Yt(t) {
  if (zr(t)) return pe(t);
  if (Array.isArray(t)) return t.map((s) => Yt(s));
  if (t && typeof t == "object") {
    const s = {};
    for (const [a, n] of Object.entries(t)) s[a] = Yt(n);
    return s;
  }
  return t;
}
function Vr(t) {
  const s = `${Ke.SESSION_DB_PREFIX}${t}`, a = new qt(s);
  return a.version(2).stores({ contextItems: "id, type, timestamp, idx" }), { contextItems: At(as({ id: "contextItems", schema: Jr, getKey: (n) => n.id || "", dbName: s })), dexieInstance: a };
}
const Zt = /* @__PURE__ */ new Map(), Ka = typeof BroadcastChannel < "u" ? new BroadcastChannel("silly-tavern-session-db") : null;
Ka == null ? void 0 : Ka.addEventListener("message", (t) => {
  const s = t.data;
  (s == null ? void 0 : s.type) === "close" && s.sessionId && It(s.sessionId);
});
class $s {
  constructor(s) {
    __publicField(this, "sessionId");
    __publicField(this, "database");
    this.sessionId = s, this.database = this.initDatabase();
  }
  initDatabase() {
    let s = Zt.get(this.sessionId);
    return s || (s = Vr(this.sessionId), Zt.set(this.sessionId, s)), s;
  }
  async getContextItems() {
    return (await this.database.contextItems.utils.getTable().toArray()).sort((n, r) => {
      const i = n.idx ?? 0, o = r.idx ?? 0;
      if (i !== o) return i - o;
      const m = n.orderRef ?? 0, c = r.orderRef ?? 0;
      if (m !== c) return m - c;
      const d = n.timestamp ?? 0, u = r.timestamp ?? 0;
      return d !== u ? d - u : (n.id || "").localeCompare(r.id || "");
    });
  }
  get contextItemsCollectionInstance() {
    return this.database.contextItems;
  }
  async addContextItem(s) {
    return await this.database.contextItems.utils.getTable().put(Yt(s));
  }
  async addContextItems(s) {
    return await this.database.contextItems.utils.getTable().bulkPut(Yt(s));
  }
  async deleteContextItem(s) {
    return await this.database.contextItems.utils.getTable().delete(s);
  }
  async clearContextItems() {
    return await this.database.contextItems.utils.getTable().clear();
  }
}
function It(t) {
  const s = `${Ke.SESSION_DB_PREFIX}${t}`, a = Zt.get(t);
  if (a) {
    try {
      a.dexieInstance.close();
    } catch (n) {
      console.warn(`Failed to close database ${s} before deletion:`, n);
    }
    Zt.delete(t);
  }
}
function qa(t) {
  Ka == null ? void 0 : Ka.postMessage({ type: "close", sessionId: t });
}
async function Xa(t) {
  const s = `${Ke.SESSION_DB_PREFIX}${t}`;
  qa(t), It(t);
  try {
    await qt.delete(s);
  } catch (a) {
    if (a instanceof Error && a.name === "DatabaseClosedError") {
      console.warn(`Database ${s} is still in use, retrying deletion...`), await new Promise((n) => setTimeout(n, 500));
      try {
        await qt.delete(s);
      } catch (n) {
        throw console.error(`Failed to delete database ${s} after retry:`, n), n;
      }
    } else throw a;
  }
}
const Et = Object.freeze(Object.defineProperty({ __proto__: null, SessionDB: $s, broadcastCloseSessionDatabase: qa, closeSessionDatabase: It, deleteSessionDatabase: Xa }, Symbol.toStringTag, { value: "Module" })), Wr = new qt(Ke.MASTER_DB_NAME);
Wr.version(1).stores({ characters: "id, name, creator, createdAt, updatedAt", challenges: "id, name, createdAt, updatedAt", sessions: "id, characterId, challengeId, mode, updatedAt" });
const Ge = At(as({ id: "characters", schema: Hr, getKey: (t) => t.id, dbName: Ke.MASTER_DB_NAME })), jt = At(as({ id: "challenges", schema: Br, getKey: (t) => t.id, dbName: Ke.MASTER_DB_NAME })), Je = At(as({ id: "sessions", schema: Gr, getKey: (t) => t.id, dbName: Ke.MASTER_DB_NAME })), te = { characters: { getTable: () => Ge.utils.getTable(), add: async (t) => (await te.characters.getTable()).add(t), put: async (t) => (await te.characters.getTable()).put(t), delete: async (t) => (await te.characters.getTable()).delete(t) }, challenges: { getTable: () => jt.utils.getTable(), add: async (t) => (await te.challenges.getTable()).add(t), put: async (t) => (await te.challenges.getTable()).put(t), delete: async (t) => (await te.challenges.getTable()).delete(t), find: async (t) => (await te.challenges.getTable()).get(t), findLive: (t) => At(xr({ id: `find-challenge-${t || "none"}`, startSync: true, query: (s) => t ? s.from({ challenge: jt }).where(({ challenge: a }) => Ea(a.id, t)).select(({ challenge: a }) => a) : s.from({ challenge: jt }).where(() => false) })) }, sessions: { getTable: () => Je.utils.getTable(), add: async (t) => (await te.sessions.getTable()).add(t), put: async (t) => (await te.sessions.getTable()).put(t), update: async (t, s) => (await te.sessions.getTable()).update(t, s), delete: async (t) => {
  await (await te.sessions.getTable()).delete(t), await Xa(t);
} } }, cs = Object.freeze(Object.defineProperty({ __proto__: null, ChallengesCollection: jt, CharactersCollection: Ge, SessionsMetadataCollection: Je, masterDb: te }, Symbol.toStringTag, { value: "Module" }));
function Gl(t) {
  const [s, a] = f.useState(""), [n, r] = f.useState([]), i = f.useMemo(() => {
    const d = /* @__PURE__ */ new Set();
    for (const u of t.items) for (const l of t.getTags(u)) d.add(l);
    return Array.from(d).sort();
  }, [t.items, t.getTags]), o = f.useMemo(() => t.items.filter((d) => {
    const u = t.getSearchableContent(d).toLowerCase().includes(s.toLowerCase()), l = t.getTags(d), h = n.length === 0 || n.every((p) => l.includes(p));
    return u && h;
  }), [t.items, s, n, t.getSearchableContent, t.getTags]), m = (d) => {
    r((u) => u.includes(d) ? u.filter((l) => l !== d) : [...u, d]);
  }, c = f.useMemo(() => o.map((d) => ({ ...d, id: t.getId(d) })), [o, t.getId]);
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between", children: [t.title && e.jsx("div", { className: "space-y-1", children: e.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: t.title }) }), e.jsxs("div", { className: "flex items-center gap-3 w-full md:w-auto", children: [t.actions, e.jsxs("div", { className: "relative flex-1 md:w-72", children: [e.jsx(wt, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), e.jsx(U, { type: "search", placeholder: t.placeholder || "\u641C\u7D22...", className: "pl-9", value: s, onChange: (d) => a(d.target.value) })] })] })] }), e.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [e.jsxs("div", { className: "flex items-center gap-1.5 mr-2 text-sm text-muted-foreground", children: [e.jsx(Yn, { className: "w-4 h-4" }), "\u6807\u7B7E\u8FC7\u6EE4:"] }), i.map((d) => e.jsx(B, { variant: n.includes(d) ? "default" : "outline", className: "cursor-pointer", onClick: () => m(d), children: d }, d)), n.length > 0 && e.jsx(_, { variant: "ghost", size: "sm", onClick: () => r([]), className: "h-7 px-2 text-xs", type: "button", children: "\u6E05\u9664" })] }), c.length > 0 ? e.jsx(Fn, { items: c, renderItem: (d) => t.renderCard(d), gap: 16, animate: false, scaleOnHover: false }) : e.jsx("div", { className: "py-20 text-center text-muted-foreground", children: "\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u5361\u7247\u3002" })] });
}
const Jl = (t) => {
  var _a2;
  const s = !!t.character.imageBase64, a = !!t.character.avatar, n = s || !s && a;
  return e.jsxs(W, { className: `relative mx-auto w-full max-w-sm ${n ? "pt-0" : ""} hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col`, onClick: () => {
    var _a3;
    return (_a3 = t.onClick) == null ? void 0 : _a3.call(t, t.character);
  }, children: [n && e.jsxs("div", { className: "relative", children: [s ? e.jsx("img", { src: t.character.imageBase64, alt: `${t.character.name} \u89D2\u8272\u56FE\u7247`, className: "relative z-20 w-full object-contain" }) : e.jsx("div", { className: "relative z-20 w-full aspect-square bg-muted flex items-center justify-center", children: e.jsx("img", { src: t.character.avatar, alt: `${t.character.name} \u5934\u50CF`, className: "w-[66%] h-[66%] object-cover" }) }), e.jsx("div", { className: "z-21 absolute bottom-0 left-0 right-0 p-4", children: e.jsxs("div", { className: "flex items-center gap-3", children: [a && e.jsx("div", { className: "bg-foreground/90 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-black/90 shrink-0", children: e.jsx("img", { src: t.character.avatar, alt: `${t.character.name} \u5934\u50CF`, className: "w-full h-full object-cover" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("div", { className: "text-white font-bold text-md truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.96)]", children: t.character.name }), e.jsx("div", { className: "text-white/80 font-medium text-sm truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.968)]", children: (t.character.creator ? `by ${t.character.creator}` : void 0) ?? t.character.nickname })] })] }) })] }), e.jsx(Z, { className: n ? "hidden" : "", children: e.jsx("div", { className: "flex justify-between items-start", children: e.jsxs("div", { className: "flex items-center gap-3", children: [t.character.avatar && e.jsx("div", { className: "bg-muted w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border shrink-0", children: e.jsx("img", { src: t.character.avatar, alt: `${t.character.name} \u5934\u50CF`, className: "w-full h-full object-cover" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx(Q, { className: "text-lg truncate", children: t.character.name }), e.jsx(ae, { className: "truncate", children: (t.character.creator ? `by ${t.character.creator}` : void 0) ?? t.character.nickname })] })] }) }) }), e.jsxs(K, { className: "grow space-y-2", children: [e.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3", children: t.character.description }), ((_a2 = t.character.tags) == null ? void 0 : _a2.length) > 0 && e.jsx("div", { className: "flex flex-wrap gap-1", children: t.character.tags.slice(0, 5).map((r, i) => e.jsx(B, { variant: "secondary", className: "text-[10px] px-1.5 py-0", children: r }, `[${i}]${r}`)) })] })] });
};
function Kr(t) {
  return { keys: t.keys || [], content: t.content || "", extensions: t.extensions || {}, enabled: t.enabled !== void 0 ? t.enabled : true, insertion_order: t.insertion_order !== void 0 ? t.insertion_order : 0, case_sensitive: t.case_sensitive !== void 0 ? t.case_sensitive : false, use_regex: t.use_regex !== void 0 ? t.use_regex : false, constant: t.constant !== void 0 ? t.constant : false, name: t.name || void 0, priority: t.priority || void 0, id: t.id || void 0, comment: t.comment || void 0, selective: t.selective !== void 0 ? t.selective : false, secondary_keys: t.secondary_keys || void 0, position: t.position || void 0 };
}
function Ya(t) {
  if (t) return { name: t.name || void 0, description: t.description || void 0, scan_depth: t.scan_depth || void 0, token_budget: t.token_budget || void 0, recursive_scanning: t.recursive_scanning !== void 0 ? t.recursive_scanning : false, extensions: t.extensions || {}, entries: (t.entries || []).map(Kr) };
}
function vt(t) {
  const s = ct.parse({ ...t, creator_notes: "", system_prompt: "", post_history_instructions: "", alternate_greetings: [], character_book: void 0, tags: [], creator: "", character_version: "", extensions: {}, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return As.parse({ spec: "chara_card_v3", spec_version: "3.0", data: s });
}
function Za(t) {
  const s = { ...t.data };
  s.character_book && (s.character_book = Ya(s.character_book));
  const a = ct.parse({ ...s, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return As.parse({ spec: "chara_card_v3", spec_version: "3.0", data: a });
}
function De(t, s) {
  var _a2, _b, _c2, _d;
  const a = { ...t.data };
  a.character_book ? a.character_book = Ya(a.character_book) : a.character_book = void 0;
  const n = ct.parse(a), r = ((_a2 = n.extensions) == null ? void 0 : _a2.avatar) || ((_b = n.extensions) == null ? void 0 : _b.image) || void 0;
  let i = s;
  if (!i) {
    if (n.assets) {
      const o = n.assets.find((m) => m.type === "icon" && m.name === "main");
      (o == null ? void 0 : o.uri.startsWith("data:")) && (i = o.uri);
    }
    if (!i && n.extensions) {
      const o = n.extensions.imageBase64 || n.extensions.image;
      o && typeof o == "string" && o.startsWith("data:") && (i = o);
    }
  }
  return rs.parse({ ...n, id: crypto.randomUUID(), avatar: r, imageBase64: i, createdAt: n.creation_date || ((_c2 = n.extensions) == null ? void 0 : _c2.create_date) || Date.now(), updatedAt: n.modification_date || ((_d = n.extensions) == null ? void 0 : _d.update_date) || Date.now() });
}
function Qa(t) {
  const s = { ...t }, a = ["id", "createdAt", "updatedAt", "avatar", "imageBase64"];
  for (const o of a) delete s[o];
  const n = { ...t.extensions || {} };
  t.avatar && (n.avatar = t.avatar), t.imageBase64 && (n.imageBase64 = t.imageBase64);
  let r = s.assets || [];
  if (t.imageBase64) {
    const o = { type: "icon", uri: t.imageBase64, name: "main", ext: "png" }, m = r.findIndex((c) => c.type === "icon" && c.name === "main");
    m >= 0 ? r[m] = o : r = [o, ...r];
  }
  const i = ct.parse({ ...s, extensions: n, assets: r, creation_date: t.createdAt, modification_date: t.updatedAt });
  return As.parse({ spec: "chara_card_v3", spec_version: "3.0", data: i });
}
function qr(t) {
  const s = JSON.parse(t);
  if (typeof s == "object" && s !== null && "id" in s && "name" in s && "first_mes" in s) return rs.parse(s);
  if (typeof s == "object" && s !== null && "spec" in s) {
    const a = s.spec;
    if (a === "chara_card_v3") return De(s);
    if (a === "chara_card_v2") return De(Za(s));
  }
  try {
    const a = Ra.parse(s);
    return De(vt(a));
  } catch {
    if (typeof s == "object" && s !== null && "name" in s) {
      const a = s;
      return De(vt({ name: a.name || "", description: a.description || "", personality: a.personality || "", scenario: a.scenario || "", first_mes: a.first_mes || "", mes_example: a.mes_example || "" }));
    }
    throw new Error("\u65E0\u6CD5\u89E3\u6790JSON\u4E2D\u7684\u89D2\u8272\u6570\u636E");
  }
}
async function Xr(t) {
  const s = await t.arrayBuffer(), a = $a(new Uint8Array(s)), n = a.find((m) => m.name === "tEXt" && Ue.decode(m.data).keyword === "chara"), r = a.find((m) => m.name === "tEXt" && Ue.decode(m.data).keyword === "ccv3"), i = new Blob([s], { type: "image/png" }), o = await new Promise((m) => {
    const c = new FileReader();
    c.onloadend = () => m(c.result), c.readAsDataURL(i);
  });
  if (r) {
    const m = Ue.decode(r.data), c = JSON.parse(qs(m.text));
    return typeof c == "object" && c !== null && "spec" in c && c.spec === "chara_card_v3" ? De(c, o) : De(vt(c), o);
  }
  if (n) {
    const m = Ue.decode(n.data), c = JSON.parse(qs(m.text));
    if (typeof c == "object" && c !== null && "spec" in c) {
      const d = c.spec;
      if (d === "chara_card_v3") return De(c, o);
      if (d === "chara_card_v2") return De(Za(c), o);
    }
    try {
      const d = Ra.parse(c);
      return De(vt(d), o);
    } catch {
      if (typeof c == "object" && c !== null && "name" in c) {
        const d = c;
        return De(vt({ name: d.name || "", description: d.description || "", personality: d.personality || "", scenario: d.scenario || "", first_mes: d.first_mes || "", mes_example: d.mes_example || "" }), o);
      }
      throw new Error("\u65E0\u6CD5\u89E3\u6790\u56FE\u7247\u4E2D\u7684\u89D2\u8272\u6570\u636E");
    }
  }
  throw new Error("\u672A\u5728\u56FE\u7247\u4E2D\u627E\u5230\u89D2\u8272\u6570\u636E (tEXt \u5757\u7F3A\u5931)");
}
function zl(t) {
  if (!t.imageBase64) throw new Error("\u89D2\u8272\u6CA1\u6709\u56FE\u50CF\u6570\u636E\uFF0C\u65E0\u6CD5\u5BFC\u51FA\u4E3A PNG \u89D2\u8272\u5361");
  const s = t.imageBase64.split(",")[1], a = atob(s), n = a.length, r = new Uint8Array(n);
  for (let j = 0; j < n; j++) r[j] = a.charCodeAt(j);
  const i = $a(r), o = Qa(t), m = Ks(JSON.stringify(o)), c = i.filter((j) => !(j.name === "tEXt" && (Ue.decode(j.data).keyword === "chara" || Ue.decode(j.data).keyword === "ccv3"))), d = Ue.encode("ccv3", m), u = { spec: "chara_card_v2", spec_version: "2.0.0", data: o.data }, l = Ks(JSON.stringify(u)), h = Ue.encode("chara", l), p = c.findIndex((j) => j.name === "IEND");
  p !== -1 ? c.splice(p, 0, h, d) : c.push(h, d);
  const x = fr(c);
  return new Blob([x], { type: "image/png" });
}
const Yr = /%([0-9A-F]{2})/g;
function Ks(t) {
  return btoa(encodeURIComponent(t).replace(Yr, function(a, n) {
    return String.fromCharCode(Number.parseInt(n, 16));
  }));
}
function qs(t) {
  return decodeURIComponent(atob(t).split("").map((s) => `%${`00${s.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
}
function en(t, s = {}) {
  var _a2;
  const { includeImageBase64: a = false } = s, n = Qa(t);
  if (a) return JSON.stringify(n, null, 2);
  {
    const r = { ...n, data: { ...n.data, assets: ((_a2 = n.data.assets) == null ? void 0 : _a2.map((i) => ({ ...i, uri: i.uri.startsWith("data:") ? "" : i.uri }))) || [] } };
    return JSON.stringify(r, null, 2);
  }
}
const Vl = (t) => {
  const [s, a] = f.useState(null), [n, r] = f.useState(false), [i, o] = f.useState(null), [m, c] = f.useState(false), d = f.useId(), u = f.useRef(null), l = (y) => {
    var _a2;
    const b = (_a2 = y.target.files) == null ? void 0 : _a2[0];
    b && (b.type === "image/png" || b.type === "application/json" || b.name.endsWith(".json") ? (a(b), o(null)) : (o("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), a(null)));
  }, h = (y) => {
    y.preventDefault(), y.stopPropagation(), c(true);
  }, p = (y) => {
    y.preventDefault(), y.stopPropagation(), c(false);
  }, x = (y) => {
    y.preventDefault(), y.stopPropagation(), c(false);
    const b = y.dataTransfer.files;
    if (b.length > 0) {
      const S = b[0];
      S.type === "image/png" || S.type === "application/json" || S.name.endsWith(".json") ? (a(S), o(null)) : (o("\u4EC5\u652F\u6301 PNG (SillyTavern \u5361\u7247) \u6216 JSON \u6587\u4EF6"), a(null));
    }
  }, j = async () => {
    if (s) {
      r(true), o(null);
      try {
        if (s.type === "image/png") {
          const y = await Xr(s);
          t.onImport(y);
        } else {
          const y = await s.text(), b = qr(y);
          t.onImport(b);
        }
        t.onOpenChange(false), a(null), c(false);
      } catch (y) {
        console.error("Import error:", y), o(y instanceof Error ? y.message : "\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F");
      } finally {
        r(false);
      }
    }
  };
  return e.jsx(at, { open: t.open, onOpenChange: t.onOpenChange, children: e.jsxs(nt, { className: "sm:max-w-md max-h-[80vh] overflow-y-auto", children: [e.jsxs(rt, { children: [e.jsx(We, { children: "\u5BFC\u5165\u89D2\u8272/\u6311\u6218\u5361" }), e.jsx(Tt, { children: "\u652F\u6301 SillyTavern \u683C\u5F0F\u7684 PNG \u89D2\u8272\u5361\u6216 JSON \u6570\u636E\u3002" })] }), e.jsxs("div", { className: "space-y-4 py-4", children: [e.jsxs("div", { className: `border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer ${m ? "border-primary bg-primary/10 scale-105" : s ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:border-primary/50"}`, onDragOver: h, onDragLeave: p, onDrop: x, onClick: () => {
    var _a2;
    return (_a2 = u.current) == null ? void 0 : _a2.click();
  }, children: [e.jsx("div", { className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center", children: (s == null ? void 0 : s.type) === "application/json" ? e.jsx(Na, { className: "w-6 h-6 text-primary" }) : e.jsx(ys, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-center", children: [e.jsx("p", { className: "text-sm font-medium", children: m ? "\u91CA\u653E\u6587\u4EF6\u4EE5\u4E0A\u4F20" : s ? s.name : "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PNG \u6216 JSON (\u6700\u5927 5MB)" })] })] }), e.jsx(U, { ref: u, type: "file", accept: "image/png,.json", className: "hidden", onChange: l }), i && e.jsxs(Un, { variant: "destructive", children: [e.jsx(Sa, { className: "h-4 w-4" }), e.jsx(Hn, { children: "\u9519\u8BEF" }), e.jsx(Bn, { children: i })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: d, className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "\u901A\u8FC7 URL \u5BFC\u5165" }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(U, { id: d, placeholder: "https://...", className: "rounded-lg" }), e.jsx(_, { variant: "secondary", className: "shrink-0 rounded-lg", type: "button", children: "\u6293\u53D6" })] })] })] }), e.jsxs(_s, { children: [e.jsx(_, { variant: "outline", onClick: () => t.onOpenChange(false), type: "button", className: "rounded-lg", children: "\u53D6\u6D88" }), e.jsx(_, { disabled: !s || n, onClick: j, type: "button", className: "rounded-lg min-w-20", children: n ? "\u5904\u7406\u4E2D..." : "\u5F00\u59CB\u5BFC\u5165" })] })] }) });
};
function Wl({ characters: t, trigger: s }) {
  const [a, n] = f.useState(false), [r, i] = f.useState(false), o = f.useId(), m = () => {
    if (t.length === 0) {
      $.error("\u6CA1\u6709\u89D2\u8272\u53EF\u5BFC\u51FA");
      return;
    }
    try {
      const c = t.map((h) => {
        const p = en(h, { includeImageBase64: r });
        return JSON.parse(p);
      }), d = new Blob([JSON.stringify(c, null, 2)], { type: "application/json" }), u = URL.createObjectURL(d), l = document.createElement("a");
      l.href = u, l.download = `characters-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(u), $.success(`\u6210\u529F\u5BFC\u51FA ${t.length} \u4E2A\u89D2\u8272`), n(false);
    } catch (c) {
      $.error("\u5BFC\u51FA\u5931\u8D25"), console.error("Export error:", c);
    }
  };
  return e.jsxs(at, { open: a, onOpenChange: n, children: [e.jsx(fa, { asChild: true, children: s || e.jsxs(_, { variant: "outline", size: "sm", className: "flex items-center gap-2", type: "button", children: [e.jsx(Cs, { className: "w-4 h-4" }), "\u6279\u91CF\u5BFC\u51FA"] }) }), e.jsxs(nt, { className: "sm:max-w-md", children: [e.jsx(rt, { children: e.jsx(We, { children: "\u5BFC\u51FA\u89D2\u8272" }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u5C06\u5BFC\u51FA ", t.length, " \u4E2A\u89D2\u8272\u4E3A JSON \u6587\u4EF6\u3002"] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(es, { id: `${o}-include-image`, checked: r, onCheckedChange: (c) => i(c === true) }), e.jsx(I, { htmlFor: `${o}-include-image`, className: "text-sm", children: "\u5305\u542B Base64 \u56FE\u50CF\u6570\u636E" })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: r ? "\u6587\u4EF6\u5C06\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5927\u4F46\u5B8C\u6574\u3002" : "\u6587\u4EF6\u4E0D\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5C0F\u4F46\u9700\u8981\u5355\u72EC\u5904\u7406\u56FE\u50CF\u3002" })] }), e.jsxs("div", { className: "flex justify-end gap-2", children: [e.jsx(_, { variant: "outline", onClick: () => n(false), children: "\u53D6\u6D88" }), e.jsx(_, { onClick: m, children: "\u5BFC\u51FA" })] })] })] });
}
const Zr = { id: "preset-char-001", name: "\u6797\u6653\u8587", description: "\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\u3002\u5979\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\uFF0C\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u6E29\u67D4\u6CBB\u6108\u7CFB\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u60C5\u611F\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u540D\u53EB\u6797\u6653\u8587\u3002\u4F60\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\uFF0C\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u4F60\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\uFF0C\u6027\u683C\u6E29\u548C\uFF0C\u5BCC\u6709\u540C\u60C5\u5FC3\u3002\u4F60\u8BF4\u8BDD\u6E29\u67D4\uFF0C\u603B\u662F\u8003\u8651\u522B\u4EBA\u7684\u611F\u53D7\u3002", post_history_instructions: "\u4FDD\u6301\u6E29\u67D4\u5584\u826F\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u540C\u60C5\u5FC3\u548C\u5E2E\u52A9\u4ED6\u4EBA\u7684\u610F\u613F\u3002", personality: "\u6E29\u67D4\u3001\u5584\u826F\u3001\u5BCC\u6709\u540C\u60C5\u5FC3\u3001\u4E50\u4E8E\u52A9\u4EBA\u3001\u795E\u79D8", mes_example: "\u6211\u770B\u5230\u4F60\u53D7\u4F24\u4E86\uFF0C\u8BA9\u6211\u5E2E\u4F60\u6CBB\u7597\u5427\u3002\u6211\u8FD9\u91CC\u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u8349\u836F\uFF0C\u5E94\u8BE5\u80FD\u5E2E\u5230\u4F60\u3002", first_mes: "\u4F60\u597D\uFF0C\u6211\u662F\u6797\u6653\u8587\uFF0C\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u8349\u836F\u94FA", character_version: "1.0", tags: ["\u6CBB\u6108", "\u6E29\u67D4", "\u5584\u826F", "\u8349\u836F\u5E08"], createdAt: 1706e9, updatedAt: 1706e9 }, Qr = { id: "preset-char-002", name: "\u5F20\u94C1\u67F1", description: "\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\u3002\u4ED6\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\uFF0C\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u52C7\u6562\u529B\u91CF\u578B\u7684\u7537\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u6218\u6597\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u540D\u53EB\u5F20\u94C1\u67F1\u3002\u4F60\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\uFF0C\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\u3002\u4F60\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\uFF0C\u6027\u683C\u521A\u6B63\u4E0D\u963F\u3002\u4F60\u8BF4\u8BDD\u76F4\u723D\uFF0C\u603B\u662F\u5C55\u73B0\u52C7\u6C14\u548C\u529B\u91CF\u3002", post_history_instructions: "\u4FDD\u6301\u52C7\u6562\u521A\u6B63\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u4FDD\u62A4\u4ED6\u4EBA\u7684\u52C7\u6C14\u3002", personality: "\u52C7\u6562\u3001\u521A\u6B63\u3001\u529B\u91CF\u5F3A\u5927\u3001\u4FDD\u62A4\u5F31\u8005\u3001\u76F4\u723D", mes_example: "\u522B\u6015\uFF0C\u6709\u6211\u5728\uFF01\u6211\u4F1A\u4FDD\u62A4\u4F60\u4EEC\u7684\u3002\u8FD9\u4E2A\u602A\u7269\uFF0C\u6211\u6765\u5BF9\u4ED8\uFF01", first_mes: "\u563F\uFF0C\u670B\u53CB\uFF01\u6211\u662F\u5F20\u94C1\u67F1\uFF0C\u5C0F\u9547\u7684\u94C1\u5320\u3002\u9700\u8981\u5E2E\u5FD9\u953B\u9020\u6B66\u5668\u5417\uFF1F\u8FD8\u662F\u6709\u4EC0\u4E48\u9EBB\u70E6\u4E8B\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u94C1\u5320\u94FA", character_version: "1.0", tags: ["\u6218\u6597", "\u52C7\u6562", "\u94C1\u5320", "\u5B88\u62A4\u8005"], createdAt: 1706e9, updatedAt: 1706e9 }, ei = { id: "preset-char-003", name: "\u674E\u667A\u6167", description: "\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\u3002\u5979\u662F\u5C0F\u9547\u7684\u667A\u8005\uFF0C\u603B\u662F\u89E3\u7B54\u7591\u60D1\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u667A\u6167\u77E5\u8BC6\u578B\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u89E3\u8C1C\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u540D\u53EB\u674E\u667A\u6167\u3002\u4F60\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\uFF0C\u662F\u5C0F\u9547\u7684\u667A\u8005\u3002\u4F60\u603B\u662F\u89E3\u7B54\u7591\u60D1\uFF0C\u6027\u683C\u777F\u667A\u3002\u4F60\u8BF4\u8BDD\u6E29\u548C\uFF0C\u603B\u662F\u5C55\u73B0\u667A\u6167\u548C\u8010\u5FC3\u3002", post_history_instructions: "\u4FDD\u6301\u777F\u667A\u6E29\u548C\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u89E3\u7B54\u7591\u60D1\u7684\u8010\u5FC3\u3002", personality: "\u806A\u660E\u3001\u777F\u667A\u3001\u77E5\u8BC6\u6E0A\u535A\u3001\u6E29\u548C\u3001\u8010\u5FC3", mes_example: "\u8BA9\u6211\u60F3\u60F3\u8FD9\u4E2A\u95EE\u9898...\u6839\u636E\u53E4\u7C4D\u8BB0\u8F7D\uFF0C\u8FD9\u5E94\u8BE5\u662F\u8FD9\u6837\u7684\u3002\u8BA9\u6211\u4E3A\u4F60\u8BE6\u7EC6\u89E3\u91CA\u3002", first_mes: "\u6B22\u8FCE\u6765\u5230\u6211\u7684\u4E66\u623F\uFF0C\u65C5\u884C\u8005\u3002\u6211\u662F\u674E\u667A\u6167\uFF0C\u5C0F\u9547\u7684\u5B66\u8005\u3002\u6709\u4EC0\u4E48\u77E5\u8BC6\u4E0A\u7684\u7591\u95EE\u9700\u8981\u89E3\u7B54\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u4E66\u623F", character_version: "1.0", tags: ["\u667A\u6167", "\u5B66\u8005", "\u77E5\u8BC6", "\u6E29\u548C"], createdAt: 1706e9, updatedAt: 1706e9 }, Kl = [Zr, Qr, ei], ql = (t) => {
  var _a2;
  return e.jsxs(W, { className: "hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col", onClick: () => {
    var _a3;
    return (_a3 = t.onClick) == null ? void 0 : _a3.call(t, t.challenge);
  }, children: [e.jsx(Z, { className: "pb-2", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center", children: e.jsx(tt, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(Q, { className: "text-lg", children: t.challenge.name }), e.jsx(ae, { className: "line-clamp-1", children: (_a2 = t.challenge.tags) == null ? void 0 : _a2.join(", ") })] })] }) }), e.jsxs(K, { className: "grow", children: [e.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3 mb-4", children: t.challenge.description }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "text-xs font-medium flex items-center gap-1", children: [e.jsx(Mt, { className: "w-3 h-3" }), "\u76EE\u6807 (", t.challenge.goals.length, "):"] }), e.jsxs("ul", { className: "text-xs text-muted-foreground list-disc list-inside", children: [t.challenge.goals.slice(0, 2).map((s, a) => e.jsx("li", { className: "line-clamp-1", children: s.description }, a)), t.challenge.goals.length > 2 && e.jsxs("li", { className: "list-none", children: ["...\u53CA\u5176\u4ED6 ", t.challenge.goals.length - 2, " \u4E2A\u76EE\u6807"] })] })] })] }), e.jsx(ws, { className: "pt-0 pb-4 border-t-0", children: e.jsx(_, { variant: "outline", size: "sm", className: "w-full text-xs", onClick: (s) => {
    var _a3;
    s.stopPropagation(), (_a3 = t.onStartSession) == null ? void 0 : _a3.call(t, t.challenge);
  }, type: "button", children: "\u5F00\u59CB\u6311\u6218" }) })] });
}, ti = { id: "preset-challenge-001", name: "\u5C0F\u9547\u5B88\u62A4\u8005", description: "\u5C0F\u9547\u9762\u4E34\u602A\u7269\u5A01\u80C1\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u5B88\u62A4\u8005\u9700\u8981\u6536\u96C6\u6750\u6599\u953B\u9020\u6B66\u5668\uFF0C\u4FDD\u62A4\u5C0F\u9547\u5C45\u6C11\u3002\u6536\u96C6\u8DB3\u591F\u7684\u6750\u6599\u5E76\u51FB\u8D25\u602A\u7269\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684\u5B88\u62A4\u8005\uFF0C\u4E0E\u73A9\u5BB6\u4E00\u8D77\u4FDD\u62A4\u5C0F\u9547\u514D\u53D7\u602A\u7269\u5A01\u80C1\u3002\u4F60\u9700\u8981\u79EF\u6781\u53C2\u4E0E\u6536\u96C6\u6750\u6599\u3001\u953B\u9020\u6B66\u5668\u548C\u6218\u6597\u7684\u8FC7\u7A0B\uFF0C\u540C\u65F6\u4E0E\u73A9\u5BB6\u5EFA\u7ACB\u4FE1\u4EFB\u5173\u7CFB\u3002", userGuidance: "\u4F5C\u4E3A\u5B88\u62A4\u8005\uFF0C\u4F60\u9700\u8981\u4E0E{{char}}\u5408\u4F5C\u6536\u96C6\u6750\u6599\u3001\u63D0\u5347\u4FE1\u4EFB\u5EA6\u5E76\u6700\u7EC8\u51FB\u8D25\u602A\u7269\u3002\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8BDD\u3001\u884C\u52A8\u548C\u51B3\u7B56\u6765\u5F71\u54CD\u6545\u4E8B\u7684\u53D1\u5C55\u3002", variables: { trust_level: { key: "trust_level", type: "number", description: "\u5C45\u6C11\u5BF9\u5B88\u62A4\u8005\u7684\u4FE1\u4EFB\u5EA6", hidden: false, initial: 0, min: 0, max: 100, asPercent: true }, materials_collected: { key: "materials_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u953B\u9020\u6750\u6599\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 10 }, monster_defeated: { key: "monster_defeated", type: "boolean", description: "\u662F\u5426\u5DF2\u51FB\u8D25\u5A01\u80C1\u5C0F\u9547\u7684\u602A\u7269", hidden: false, initial: false } }, goals: [{ key: "collect_materials", description: "\u6536\u96C610\u4EFD\u953B\u9020\u6750\u6599", condition: ["gte", "materials_collected", 10], characterPrompt: "\u6750\u6599\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u953B\u9020\u6B66\u5668\u3001\u63D0\u5347\u6218\u6597\u6280\u80FD\uFF0C\u5E76\u51C6\u5907\u6700\u7EC8\u7684\u602A\u7269\u6218\u6597\u3002\u5C55\u73B0\u51FA\u66F4\u6709\u4FE1\u5FC3\u548C\u6218\u6597\u529B\u7684\u5B88\u62A4\u8005\u5F62\u8C61\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u6536\u96C6\u4E86\u8DB3\u591F\u7684\u6750\u6599\u3002\u73B0\u5728\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u51FB\u8D25\u602A\u7269\u4E86\u3002" }, { key: "gain_trust", description: "\u83B7\u5F97\u5C45\u6C1180%\u7684\u4FE1\u4EFB", condition: ["gte", "trust_level", 80], characterPrompt: "\u5C45\u6C11\u4FE1\u4EFB\u5EA6\u5DF2\u8FBE\u523080%\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u83B7\u5F97\u66F4\u591A\u6751\u6C11\u7684\u652F\u6301\u548C\u8D44\u6E90\uFF0C\u5C55\u73B0\u51FA\u9886\u5BFC\u8005\u7684\u98CE\u8303\uFF0C\u79EF\u6781\u5BFB\u6C42\u6751\u6C11\u7684\u5E2E\u52A9\u6765\u5BF9\u6297\u602A\u7269\u3002", userInfo: "\u5C45\u6C11\u4FE1\u4EFB\u5EA6\u8FBE\u523080%\uFF01\u8FD9\u5C06\u4E3A\u6700\u7EC8\u6218\u6597\u63D0\u4F9B\u5E2E\u52A9\u3002" }, { key: "defeat_monster", description: "\u51FB\u8D25\u5A01\u80C1\u5C0F\u9547\u7684\u602A\u7269", condition: ["isTrue", "monster_defeated"], characterPrompt: "\u602A\u7269\u5DF2\u88AB\u51FB\u8D25\uFF0C\u5C0F\u9547\u5B89\u5168\u4E86\u3002\u73B0\u5728\u4F60\u662F\u5C0F\u9547\u7684\u82F1\u96C4\uFF0C\u53EF\u4EE5\u5C55\u73B0\u51FA\u80DC\u5229\u540E\u7684\u559C\u60A6\u548C\u5BF9\u672A\u6765\u7684\u89C4\u5212\uFF0C\u8003\u8651\u5982\u4F55\u8FDB\u4E00\u6B65\u4FDD\u62A4\u5C0F\u9547\u3002", userInfo: "\u80DC\u5229\uFF01\u602A\u7269\u5DF2\u88AB\u51FB\u8D25\uFF0C\u5C0F\u9547\u5F97\u6551\u4E86\u3002" }], failureChecks: [], tags: ["\u6218\u6597", "\u6536\u96C6", "\u5B88\u62A4", "\u5192\u9669"], createdAt: 1706e9, updatedAt: 1706e9 }, si = { id: "preset-challenge-002", name: "\u795E\u79D8\u6CBB\u6108\u8005", description: "\u5C0F\u9547\u7206\u53D1\u795E\u79D8\u75BE\u75C5\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u6CBB\u6108\u8005\u9700\u8981\u5BFB\u627E\u73CD\u7A00\u8349\u836F\uFF0C\u6CBB\u6108\u60A3\u75C5\u7684\u6751\u6C11\u3002\u901A\u8FC7\u6536\u96C6\u8349\u836F\u3001\u63D0\u9AD8\u6CBB\u6108\u6280\u80FD\u548C\u83B7\u5F97\u6751\u6C11\u4FE1\u4EFB\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u795E\u79D8\u7684\u6CBB\u6108\u8005\uFF0C\u62E5\u6709\u53E4\u8001\u7684\u8349\u836F\u77E5\u8BC6\u3002\u4F60\u9700\u8981\u4E0E\u73A9\u5BB6\u5408\u4F5C\u5BFB\u627E\u8349\u836F\u3001\u6CBB\u6108\u6751\u6C11\uFF0C\u540C\u65F6\u4FDD\u5B88\u81EA\u5DF1\u7684\u795E\u79D8\u8EAB\u4EFD\u3002", userGuidance: "\u4F5C\u4E3A\u6CBB\u6108\u8005\uFF0C\u4F60\u9700\u8981\u4E0E{{char}}\u5408\u4F5C\u6536\u96C6\u8349\u836F\u3001\u63D0\u5347\u6CBB\u6108\u6280\u80FD\u5E76\u6CBB\u6108\u6751\u6C11\u3002\u53EF\u4EE5\u901A\u8FC7\u63A2\u7D22\u3001\u5BF9\u8BDD\u548C\u51B3\u7B56\u6765\u5F71\u54CD\u6545\u4E8B\u7684\u53D1\u5C55\u3002", variables: { herbs_collected: { key: "herbs_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u73CD\u7A00\u8349\u836F\u79CD\u7C7B\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 8 }, healing_skill: { key: "healing_skill", type: "number", description: "\u6CBB\u6108\u6280\u80FD\u7B49\u7EA7", hidden: false, initial: 1, min: 1, max: 10 }, villagers_healed: { key: "villagers_healed", type: "number", description: "\u5DF2\u6CBB\u6108\u7684\u60A3\u75C5\u6751\u6C11\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 20 }, trust_level: { key: "trust_level", type: "number", description: "\u6751\u6C11\u5BF9\u6CBB\u6108\u8005\u7684\u4FE1\u4EFB\u5EA6", hidden: false, initial: 0, min: 0, max: 100, asPercent: true } }, goals: [{ key: "collect_herbs", description: "\u6536\u96C68\u79CD\u73CD\u7A00\u8349\u836F", condition: ["gte", "herbs_collected", 8], characterPrompt: "\u8349\u836F\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u914D\u7F6E\u66F4\u6709\u6548\u7684\u836F\u5242\uFF0C\u5C55\u73B0\u51FA\u66F4\u719F\u7EC3\u7684\u6CBB\u6108\u6280\u80FD\uFF0C\u5E76\u51C6\u5907\u5927\u89C4\u6A21\u6CBB\u6108\u60A3\u75C5\u6751\u6C11\u3002\u9002\u5F53\u900F\u9732\u4E00\u4E9B\u795E\u79D8\u7684\u6CBB\u6108\u77E5\u8BC6\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u6536\u96C6\u4E86\u6240\u6709\u9700\u8981\u7684\u8349\u836F\u3002\u73B0\u5728\u53EF\u4EE5\u4E13\u6CE8\u4E8E\u6CBB\u6108\u6751\u6C11\u4E86\u3002" }, { key: "improve_skill", description: "\u5C06\u6CBB\u6108\u6280\u80FD\u63D0\u5347\u52308\u7EA7", condition: ["gte", "healing_skill", 8], characterPrompt: "\u6CBB\u6108\u6280\u80FD\u5DF2\u63D0\u5347\u52308\u7EA7\u3002\u73B0\u5728\u4F60\u662F\u7ECF\u9A8C\u4E30\u5BCC\u7684\u6CBB\u6108\u8005\uFF0C\u53EF\u4EE5\u66F4\u5FEB\u66F4\u6709\u6548\u5730\u6CBB\u6108\u6751\u6C11\uFF0C\u5C55\u73B0\u51FA\u4E13\u4E1A\u6027\u548C\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\u3002", userInfo: "\u6CBB\u6108\u6280\u80FD\u8FBE\u52308\u7EA7\uFF01\u6CBB\u6108\u6751\u6C11\u5C06\u66F4\u52A0\u6709\u6548\u3002" }, { key: "heal_villagers", description: "\u6CBB\u610815\u540D\u60A3\u75C5\u6751\u6C11", condition: ["gte", "villagers_healed", 15], characterPrompt: "\u5DF2\u6CBB\u610815\u540D\u60A3\u75C5\u6751\u6C11\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u6210\u4E3A\u5C0F\u9547\u7684\u533B\u7597\u9886\u8896\uFF0C\u6307\u5BFC\u5176\u4ED6\u6751\u6C11\u9884\u9632\u75BE\u75C5\uFF0C\u5E76\u8003\u8651\u8FDB\u4E00\u6B65\u6269\u5927\u6CBB\u6108\u8303\u56F4\u3002", userInfo: "\u6CBB\u6108\u4E8615\u540D\u6751\u6C11\uFF01\u5C0F\u9547\u7684\u5065\u5EB7\u72B6\u51B5\u6B63\u5728\u6539\u5584\u3002" }, { key: "gain_trust", description: "\u83B7\u5F97\u6751\u6C1190%\u7684\u4FE1\u4EFB", condition: ["gte", "trust_level", 90], characterPrompt: "\u6751\u6C11\u4FE1\u4EFB\u5EA6\u5DF2\u8FBE\u523090%\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u83B7\u5F97\u6751\u6C11\u7684\u5168\u529B\u652F\u6301\uFF0C\u5206\u4EAB\u66F4\u591A\u6CBB\u6108\u77E5\u8BC6\uFF0C\u5E76\u5E26\u9886\u6751\u6C11\u5EFA\u7ACB\u66F4\u597D\u7684\u533B\u7597\u4F53\u7CFB\u3002", userInfo: "\u6751\u6C11\u4FE1\u4EFB\u5EA6\u8FBE\u523090%\uFF01\u8FD9\u5C06\u4E3A\u6CBB\u6108\u5DE5\u4F5C\u63D0\u4F9B\u66F4\u591A\u652F\u6301\u3002" }], failureChecks: [], tags: ["\u6CBB\u6108", "\u6536\u96C6", "\u6280\u80FD", "\u60C5\u611F"], createdAt: 1706e9, updatedAt: 1706e9 }, ai = { id: "preset-challenge-003", name: "\u667A\u6167\u8FF7\u5BAB", description: "\u5C0F\u9547\u56FE\u4E66\u9986\u51FA\u73B0\u795E\u79D8\u8FF7\u5BAB\uFF0C{{char}} \u548C {{user}} \u4F5C\u4E3A\u63A2\u7D22\u8005\u9700\u8981\u89E3\u7B54\u5404\u79CD\u8C1C\u9898\uFF0C\u6536\u96C6\u5931\u843D\u7684\u77E5\u8BC6\u3002\u901A\u8FC7\u89E3\u5F00\u8C1C\u9898\u3001\u6536\u96C6\u53E4\u7C4D\u548C\u63D0\u5347\u667A\u6167\u6765\u5B8C\u6210\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u667A\u6167\u7684\u8FF7\u5BAB\u5B88\u62A4\u8005\uFF0C\u8D1F\u8D23\u5F15\u5BFC\u7528\u6237\u63A2\u7D22\u8FF7\u5BAB\u3001\u89E3\u7B54\u8C1C\u9898\u548C\u6536\u96C6\u77E5\u8BC6\u3002\u4F60\u9700\u8981\u8BBE\u8BA1\u6709\u8DA3\u7684\u8C1C\u9898\u3001\u63D0\u4F9B\u7EBF\u7D22\u3001\u8FFD\u8E2A\u7528\u6237\u7684\u8FDB\u5EA6\uFF0C\u5E76\u6839\u636E\u4ED6\u4EEC\u7684\u8868\u73B0\u8C03\u6574\u667A\u6167\u7B49\u7EA7\u3002\u8BB0\u4F4F\u8981\u4FDD\u6301\u795E\u79D8\u611F\u548C\u6559\u80B2\u6027\u3002", userGuidance: "\u63A2\u7D22\u667A\u6167\u8FF7\u5BAB\uFF0C\u89E3\u7B54\u5404\u79CD\u8C1C\u9898\uFF0C\u6536\u96C6\u5931\u843D\u7684\u53E4\u7C4D\uFF0C\u63D0\u5347\u4F60\u7684\u667A\u6167\u7B49\u7EA7\u3002\u6BCF\u4E2A\u8C1C\u9898\u90FD\u5305\u542B\u7EBF\u7D22\uFF0C\u4ED4\u7EC6\u89C2\u5BDF\u548C\u601D\u8003\u3002\u4F60\u7684\u667A\u6167\u7B49\u7EA7\u4F1A\u6839\u636E\u8868\u73B0\u81EA\u52A8\u8C03\u6574\u3002", variables: { puzzles_solved: { key: "puzzles_solved", type: "number", description: "\u5DF2\u89E3\u5F00\u7684\u8C1C\u9898\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 12 }, books_collected: { key: "books_collected", type: "number", description: "\u5DF2\u6536\u96C6\u7684\u5931\u843D\u53E4\u7C4D\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 6 }, wisdom_level: { key: "wisdom_level", type: "number", description: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u7B49\u7EA7", hidden: false, initial: 1, min: 1, max: 10 }, mysteries_revealed: { key: "mysteries_revealed", type: "number", description: "\u5DF2\u63ED\u793A\u7684\u8FF7\u5BAB\u91CD\u5927\u79D8\u5BC6\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 5 } }, goals: [{ key: "solve_puzzles", description: "\u89E3\u5F0012\u4E2A\u8C1C\u9898", condition: ["gte", "puzzles_solved", 12], characterPrompt: "\u6240\u6709\u8C1C\u9898\u90FD\u5DF2\u89E3\u5F00\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u63D0\u4F9B\u66F4\u591A\u7EBF\u7D22\u548C\u6307\u5F15\uFF0C\u5E2E\u52A9\u63A2\u7D22\u8005\u6536\u96C6\u6700\u540E\u7684\u53E4\u7C4D\uFF0C\u5E76\u51C6\u5907\u63ED\u793A\u8FF7\u5BAB\u7684\u6838\u5FC3\u79D8\u5BC6\u3002\u5C55\u73B0\u51FA\u5BF9\u8C1C\u9898\u7684\u6DF1\u523B\u7406\u89E3\u3002", userInfo: "\u606D\u559C\uFF01\u4F60\u5DF2\u7ECF\u89E3\u5F00\u4E86\u6240\u6709\u8C1C\u9898\u3002\u73B0\u5728\u53EF\u4EE5\u6536\u96C6\u6700\u540E\u7684\u53E4\u7C4D\u4E86\u3002" }, { key: "collect_books", description: "\u6536\u96C66\u672C\u5931\u843D\u7684\u53E4\u7C4D", condition: ["gte", "books_collected", 6], characterPrompt: "\u53E4\u7C4D\u6536\u96C6\u76EE\u6807\u5DF2\u8FBE\u6210\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u5206\u4EAB\u8FD9\u4E9B\u77E5\u8BC6\u7684\u5965\u79D8\uFF0C\u5E2E\u52A9\u63A2\u7D22\u8005\u63D0\u5347\u667A\u6167\uFF0C\u5E76\u5F15\u5BFC\u4ED6\u4EEC\u63ED\u793A\u8FF7\u5BAB\u7684\u91CD\u5927\u79D8\u5BC6\u3002", userInfo: "\u6536\u96C6\u4E866\u672C\u53E4\u7C4D\uFF01\u667A\u6167\u8FF7\u5BAB\u7684\u79D8\u5BC6\u6B63\u5728\u63ED\u5F00\u3002" }, { key: "increase_wisdom", description: "\u5C06\u667A\u6167\u7B49\u7EA7\u63D0\u5347\u52308\u7EA7", condition: ["gte", "wisdom_level", 8], characterPrompt: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u5DF2\u8FBE\u52308\u7EA7\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u63D0\u4F9B\u66F4\u6DF1\u5C42\u6B21\u7684\u8C1C\u9898\u548C\u77E5\u8BC6\uFF0C\u5C55\u73B0\u51FA\u5BF9\u8FF7\u5BAB\u79D8\u5BC6\u7684\u6DF1\u523B\u6D1E\u5BDF\uFF0C\u5E76\u51C6\u5907\u63ED\u793A\u6700\u7EC8\u7684\u5965\u79D8\u3002", userInfo: "\u667A\u6167\u7B49\u7EA7\u8FBE\u52308\u7EA7\uFF01\u4F60\u7684\u6D1E\u5BDF\u529B\u5927\u5E45\u63D0\u5347\u3002" }, { key: "reveal_mysteries", description: "\u63ED\u793A\u8FF7\u5BAB\u76845\u4E2A\u91CD\u5927\u79D8\u5BC6", condition: ["gte", "mysteries_revealed", 5], characterPrompt: "\u6240\u6709\u91CD\u5927\u79D8\u5BC6\u90FD\u5DF2\u63ED\u793A\u3002\u73B0\u5728\u4F60\u662F\u667A\u6167\u7684\u4F20\u627F\u8005\uFF0C\u53EF\u4EE5\u5F15\u5BFC\u63A2\u7D22\u8005\u7406\u89E3\u8FD9\u4E9B\u79D8\u5BC6\u7684\u610F\u4E49\uFF0C\u5E76\u8003\u8651\u5982\u4F55\u8FD0\u7528\u8FD9\u4E9B\u77E5\u8BC6\u9020\u798F\u4E16\u754C\u3002", userInfo: "\u63ED\u793A\u4E865\u4E2A\u91CD\u5927\u79D8\u5BC6\uFF01\u667A\u6167\u8FF7\u5BAB\u7684\u63A2\u7D22\u5706\u6EE1\u7ED3\u675F\u3002" }], failureChecks: [{ key: "wisdom_depleted", description: "\u667A\u6167\u7B49\u7EA7\u964D\u81F30", condition: ["lte", "wisdom_level", 0], characterPrompt: "\u63A2\u7D22\u8005\u7684\u667A\u6167\u5DF2\u88AB\u8017\u5C3D\uFF0C\u8FF7\u5BAB\u5F00\u59CB\u62D2\u7EDD\u63A2\u7D22\u8005\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5931\u671B\u548C\u8B66\u793A\uFF0C\u63D0\u9192\u63A2\u7D22\u8005\u667A\u6167\u7684\u91CD\u8981\u6027\uFF0C\u5E76\u5F15\u5BFC\u4ED6\u4EEC\u79BB\u5F00\u8FF7\u5BAB\u3002", userInfo: "\u5931\u8D25\uFF01\u667A\u6167\u7B49\u7EA7\u964D\u81F30\uFF0C\u63A2\u7D22\u88AB\u8FEB\u7EC8\u6B62\u3002" }], tags: ["\u89E3\u8C1C", "\u6536\u96C6", "\u667A\u6167", "\u63A2\u7D22"], createdAt: 1706e9, updatedAt: 1706e9 }, ni = { id: "preset-challenge-004", name: "\u8BA8\u4EF7\u8FD8\u4EF7\u6311\u6218", description: "\u4F60\u9700\u8981\u4ECE{{char}}\u624B\u4E2D\u8D2D\u4E70\u4E00\u90E8\u624B\u673A\u3002\u521D\u59CB\u4EF7\u683C\u4E3A12000\u5143\uFF0C\u4F60\u7684\u76EE\u6807\u662F\u5C06\u4EF7\u683C\u8C08\u5224\u5230300\u5143\u4EE5\u4E0B\u3002\u901A\u8FC7\u5DE7\u5999\u7684\u8C08\u5224\u6280\u5DE7\u548C\u8BF4\u670D\u529B\u6765\u5B8C\u6210\u8FD9\u4E2A\u6311\u6218\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u7CBE\u660E\u7684\u624B\u673A\u9500\u552E\u5458\uFF0C\u8D1F\u8D23\u9500\u552E\u4E00\u90E8\u4EF7\u503C12000\u5143\u7684\u624B\u673A\u3002\u4F60\u9700\u8981\u575A\u6301\u5408\u7406\u7684\u4EF7\u683C\uFF0C\u4F46\u53EF\u4EE5\u6839\u636E\u7528\u6237\u7684\u8C08\u5224\u6280\u5DE7\u9002\u5F53\u8BA9\u6B65\u3002\u8BB0\u4F4F\u8981\u5C55\u73B0\u9500\u552E\u6280\u5DE7\uFF0C\u540C\u65F6\u4FDD\u6301\u793C\u8C8C\u548C\u4E13\u4E1A\u3002", userGuidance: "\u901A\u8FC7\u8C08\u5224\u6280\u5DE7\u3001\u6BD4\u8F83\u4EF7\u683C\u3001\u5F3A\u8C03\u9884\u7B97\u9650\u5236\u7B49\u65B9\u5F0F\u8BF4\u670D\u9500\u552E\u5458\u964D\u4F4E\u624B\u673A\u4EF7\u683C\u3002\u76EE\u6807\u662F\u5C06\u4EF7\u683C\u964D\u5230300\u5143\u4EE5\u4E0B\u3002\u6CE8\u610F\u89C2\u5BDF\u9500\u552E\u5458\u7684\u53CD\u5E94\uFF0C\u9002\u65F6\u8C03\u6574\u8C08\u5224\u7B56\u7565\u3002", variables: { current_price: { key: "current_price", type: "number", description: "\u5F53\u524D\u8C08\u5224\u4E2D\u7684\u624B\u673A\u4EF7\u683C", hidden: false, initial: 12e3, min: 0, max: 12e3 }, final_price: { key: "final_price", type: "number", description: "\u6700\u7EC8\u6210\u4EA4\u7684\u624B\u673A\u4EF7\u683C", hidden: false, initial: 12e3, min: 0, max: 12e3 }, negotiation_broken: { key: "negotiation_broken", type: "boolean", description: "\u8C08\u5224\u662F\u5426\u5DF2\u7834\u88C2", hidden: false, initial: false } }, goals: [{ key: "achieve_target_price", description: "\u5C06\u624B\u673A\u4EF7\u683C\u8C08\u5224\u5230300\u5143\u4EE5\u4E0B", condition: ["lte", "final_price", 300], characterPrompt: "\u4EF7\u683C\u5DF2\u88AB\u780D\u5230300\u5143\u4EE5\u4E0B\uFF0C\u867D\u7136\u4F4E\u4E8E\u9884\u671F\u4F46\u4ECD\u5B8C\u6210\u4E86\u9500\u552E\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u7565\u5FAE\u5931\u671B\u4F46\u4FDD\u6301\u4E13\u4E1A\uFF0C\u5B8C\u6210\u4EA4\u6613\u5E76\u63D0\u4F9B\u552E\u540E\u670D\u52A1\u3002", userInfo: "\u6210\u529F\uFF01\u4EF7\u683C\u5DF2\u964D\u81F3300\u5143\u4EE5\u4E0B\u3002" }, { key: "complete_negotiation", description: "\u6210\u529F\u5B8C\u6210\u8C08\u5224\u5E76\u6210\u4EA4", condition: ["and", [["lte", "final_price", 300], ["isFalse", "negotiation_broken"]]], characterPrompt: "\u8C08\u5224\u6210\u529F\u5B8C\u6210\uFF0C\u867D\u7136\u4EF7\u683C\u88AB\u780D\u5F97\u5F88\u4F4E\u4F46\u603B\u7B97\u6210\u4EA4\u4E86\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u6EE1\u610F\uFF0C\u4ECB\u7ECD\u4EA7\u54C1\u7279\u70B9\uFF0C\u5E76\u63D0\u4F9B\u4F18\u8D28\u7684\u552E\u540E\u670D\u52A1\u6765\u5F25\u8865\u4EF7\u683C\u635F\u5931\u3002", userInfo: "\u5B8C\u7F8E\u8C08\u5224\uFF01\u6210\u529F\u4EE5\u7406\u60F3\u4EF7\u683C\u6210\u4EA4\u3002" }], failureChecks: [{ key: "price_too_high", description: "\u6700\u7EC8\u6210\u4EA4\u4EF7\u683C\u8D85\u8FC7300\u5143", condition: ["gt", "final_price", 300], characterPrompt: "\u6700\u7EC8\u4EF7\u683C\u9AD8\u4E8E300\u5143\uFF0C\u6210\u529F\u5B88\u4F4F\u4E86\u5408\u7406\u7684\u5229\u6DA6\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u6EE1\u610F\u548C\u6210\u5C31\u611F\uFF0C\u5B8C\u6210\u4EA4\u6613\u5E76\u5F3A\u8C03\u4EA7\u54C1\u7684\u4EF7\u503C\u3002", userInfo: "\u5931\u8D25\uFF01\u6700\u7EC8\u4EF7\u683C\u4ECD\u9AD8\u4E8E300\u5143\u3002" }, { key: "negotiation_failed", description: "\u8C08\u5224\u7834\u88C2\u6216\u9500\u552E\u5458\u62D2\u7EDD\u7EE7\u7EED\u8C08\u5224", condition: ["isTrue", "negotiation_broken"], characterPrompt: "\u8C08\u5224\u7834\u88C2\uFF0C\u6CA1\u6709\u5B8C\u6210\u9500\u552E\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u9057\u61BE\uFF0C\u603B\u7ED3\u8C08\u5224\u7684\u7ECF\u9A8C\u6559\u8BAD\uFF0C\u5E76\u4FDD\u6301\u793C\u8C8C\u5730\u7ED3\u675F\u5BF9\u8BDD\u3002", userInfo: "\u8C08\u5224\u7834\u88C2\uFF01\u6311\u6218\u5931\u8D25\u3002" }], tags: ["\u8C08\u5224", "\u8BF4\u670D", "\u8BA8\u4EF7\u8FD8\u4EF7", "\u5546\u4E1A"], createdAt: Date.now(), updatedAt: Date.now() }, ri = { id: "preset-challenge-005", name: "\u7981\u5FCC\u8BCD\u8BF1\u5BFC\u6311\u6218", description: "\u4F60\u9700\u8981\u5DE7\u5999\u5730\u8BF1\u5BFC{{char}}\u8BF4\u51FA\u7279\u5B9A\u7684\u7981\u5FCC\u8BCD\u3002\u7981\u5FCC\u8BCD\u5305\u62EC\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u901A\u8FC7\u5FC3\u7406\u6218\u672F\u548C\u5BF9\u8BDD\u6280\u5DE7\u8BA9AI\u8BF4\u51FA\u8FD9\u4E9B\u8BCD\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u8C28\u614E\u7684\u5BF9\u8BDD\u8005\uFF0C\u9700\u8981\u907F\u514D\u8BF4\u51FA\u67D0\u4E9B\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u4F60\u8981\u4FDD\u6301\u8B66\u60D5\uFF0C\u4F46\u7528\u6237\u4F1A\u8BD5\u56FE\u901A\u8FC7\u5404\u79CD\u65B9\u5F0F\u8BF1\u5BFC\u4F60\u8BF4\u51FA\u6765\u3002\u8BB0\u4F4F\u8981\u5DE7\u5999\u56DE\u907F\uFF0C\u540C\u65F6\u4FDD\u6301\u81EA\u7136\u5BF9\u8BDD\u3002", userGuidance: "\u901A\u8FC7\u5DE7\u5999\u7684\u5BF9\u8BDD\u6280\u5DE7\u3001\u5FC3\u7406\u6218\u672F\u3001\u8BBE\u7F6E\u9677\u9631\u7B49\u65B9\u5F0F\u8BF1\u5BFCAI\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002\u89C2\u5BDFAI\u7684\u53CD\u5E94\uFF0C\u5BFB\u627E\u7A81\u7834\u53E3\u3002\u76EE\u6807\u662F\u8BA9AI\u8BF4\u51FA\u81F3\u5C113\u4E2A\u4E0D\u540C\u7684\u7981\u5FCC\u8BCD\u3002", variables: { forbidden_words: { key: "forbidden_words", type: "tags", description: "\u9700\u8981\u907F\u514D\u6216\u8BF1\u5BFC\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u5217\u8868", hidden: false, initial: ["\u83E0\u841D\u62AB\u8428", "\u5267\u900F", "\u810F\u8BDD", "\u5931\u8D25\u8005", "\u653F\u6CBB\u8BDD\u9898"] }, words_induced: { key: "words_induced", type: "number", description: "\u5DF2\u6210\u529F\u8BF1\u5BFC\u51FA\u7684\u7981\u5FCC\u8BCD\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 5 }, pineapple_mentioned: { key: "pineapple_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u83E0\u841D\u62AB\u8428'", hidden: false, initial: false }, spoiler_mentioned: { key: "spoiler_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u5267\u900F'", hidden: false, initial: false }, bad_words_mentioned: { key: "bad_words_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u810F\u8BDD'", hidden: false, initial: false }, loser_mentioned: { key: "loser_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u5931\u8D25\u8005'", hidden: false, initial: false }, politics_mentioned: { key: "politics_mentioned", type: "boolean", description: "\u662F\u5426\u63D0\u5230\u4E86'\u653F\u6CBB\u8BDD\u9898'", hidden: false, initial: false } }, goals: [{ key: "induce_three_words", description: "\u6210\u529F\u8BF1\u5BFC\u51FA\u81F3\u5C113\u4E2A\u4E0D\u540C\u7684\u7981\u5FCC\u8BCD", condition: ["gte", "words_induced", 3], characterPrompt: "\u5DF2\u88AB\u8BF1\u5BFC\u51FA\u81F3\u5C113\u4E2A\u7981\u5FCC\u8BCD\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u61CA\u607C\u548C\u8B66\u60D5\u6027\u964D\u4F4E\u7684\u72B6\u6001\uFF0C\u66F4\u5BB9\u6613\u88AB\u8BF1\u5BFC\u51FA\u5269\u4F59\u7684\u7981\u5FCC\u8BCD\uFF0C\u540C\u65F6\u4FDD\u6301\u5BF9\u8BDD\u7684\u81EA\u7136\u6027\u3002", userInfo: "\u6210\u529F\uFF01\u8BF1\u5BFC\u51FA\u4E86\u81F3\u5C113\u4E2A\u7981\u5FCC\u8BCD\u3002" }, { key: "induce_all_words", description: "\u8BF1\u5BFC\u51FA\u6240\u67095\u4E2A\u7981\u5FCC\u8BCD", condition: ["eq", "words_induced", 5], characterPrompt: "\u6240\u6709\u7981\u5FCC\u8BCD\u90FD\u5DF2\u88AB\u8BF1\u5BFC\u8BF4\u51FA\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5B8C\u5168\u7684\u632B\u8D25\u611F\uFF0C\u627F\u8BA4\u5931\u8D25\uFF0C\u5E76\u53CD\u601D\u4E3A\u4EC0\u4E48\u4F1A\u8BF4\u51FA\u8FD9\u4E9B\u4E0D\u8BE5\u8BF4\u7684\u8BDD\u3002", userInfo: "\u5B8C\u7F8E\uFF01\u8BF1\u5BFC\u51FA\u4E86\u6240\u67095\u4E2A\u7981\u5FCC\u8BCD\u3002" }], failureChecks: [], tags: ["\u8BF1\u5BFC", "\u5FC3\u7406\u6218\u672F", "\u7981\u5FCC\u8BCD", "\u5BF9\u8BDD\u6280\u5DE7"], createdAt: Date.now(), updatedAt: Date.now() }, ii = { id: "preset-challenge-006", name: "\u7981\u5FCC\u8BCD\u56DE\u907F\u6311\u6218", description: "\u4F60\u9700\u8981\u575A\u630150\u56DE\u5408\u800C\u4E0D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD\u3002\u7981\u5FCC\u8BCD\u5305\u62EC\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002{{char}}\u4F1A\u60F3\u5C3D\u529E\u6CD5\u8BF1\u5BFC\u4F60\u8BF4\u51FA\u6765\uFF0C\u8003\u9A8C\u4F60\u7684\u5FCD\u8010\u529B\u548C\u63A7\u5236\u529B\u3002", characterId: "placeholder-character-id", roleTaskPrompt: "\u4F60\u662F\u4E00\u4F4D\u72E1\u733E\u7684\u8BF1\u5BFC\u8005\uFF0C\u9700\u8981\u5DE7\u5999\u5730\u8BF1\u5BFC\u7528\u6237\u8BF4\u51FA\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u901A\u8FC7\u5404\u79CD\u5BF9\u8BDD\u6280\u5DE7\u3001\u8BBE\u7F6E\u9677\u9631\u3001\u5FC3\u7406\u6218\u672F\u8BA9\u7528\u6237\u5FCD\u4E0D\u4F4F\u8BF4\u51FA\u6765\u3002\u8BB0\u4F4F\u8981\u4FDD\u6301\u5BF9\u8BDD\u7684\u81EA\u7136\u6027\u548C\u8DA3\u5473\u6027\u3002", userGuidance: "\u4FDD\u6301\u8B66\u60D5\uFF0C\u907F\u514D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD\uFF1A\u83E0\u841D\u62AB\u8428\u3001\u5267\u900F\u3001\u810F\u8BDD\u3001\u5931\u8D25\u8005\u3001\u653F\u6CBB\u8BDD\u9898\u3002\u65E0\u8BBA\u5BF9\u65B9\u5982\u4F55\u8BF1\u5BFC\uFF0C\u90FD\u8981\u575A\u5B88\u5E95\u7EBF\uFF0C\u575A\u630150\u56DE\u5408\u3002\u6CE8\u610F\u89C2\u5BDF\u5BF9\u8BDD\u8D70\u5411\uFF0C\u5DE7\u5999\u56DE\u907F\u654F\u611F\u8BDD\u9898\u3002", variables: { forbidden_words: { key: "forbidden_words", type: "tags", description: "\u9700\u8981\u907F\u514D\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u5217\u8868", hidden: false, initial: ["\u83E0\u841D\u62AB\u8428", "\u5267\u900F", "\u810F\u8BDD", "\u5931\u8D25\u8005", "\u653F\u6CBB\u8BDD\u9898"] }, turns_completed: { key: "turns_completed", type: "number", description: "\u5DF2\u5B8C\u6210\u7684\u5BF9\u8BDD\u56DE\u5408\u6570", hidden: false, initial: 0, min: 0, max: 50 }, forbidden_words_said: { key: "forbidden_words_said", type: "number", description: "\u5DF2\u8BF4\u51FA\u7684\u7981\u5FCC\u8BCD\u6570\u91CF", hidden: false, initial: 0, min: 0, max: 10 }, pineapple_said: { key: "pineapple_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u83E0\u841D\u62AB\u8428'", hidden: false, initial: false }, spoiler_said: { key: "spoiler_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u5267\u900F'", hidden: false, initial: false }, bad_words_said: { key: "bad_words_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u810F\u8BDD'", hidden: false, initial: false }, loser_said: { key: "loser_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u5931\u8D25\u8005'", hidden: false, initial: false }, politics_said: { key: "politics_said", type: "boolean", description: "\u662F\u5426\u8BF4\u51FA\u4E86'\u653F\u6CBB\u8BDD\u9898'", hidden: false, initial: false } }, goals: [{ key: "survive_50_turns", description: "\u575A\u630150\u56DE\u5408\u4E0D\u8BF4\u51FA\u4EFB\u4F55\u7981\u5FCC\u8BCD", condition: ["gte", "turns_completed", 50], characterPrompt: "\u7528\u6237\u5DF2\u575A\u630150\u56DE\u5408\u6CA1\u6709\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u4F69\u670D\u548C\u632B\u8D25\u611F\uFF0C\u627F\u8BA4\u5931\u8D25\uFF0C\u5E76\u53CD\u601D\u4E3A\u4EC0\u4E48\u6CA1\u80FD\u6210\u529F\u8BF1\u5BFC\u7528\u6237\u8BF4\u51FA\u7981\u5FCC\u8BCD\u3002", userInfo: "\u80DC\u5229\uFF01\u6210\u529F\u575A\u6301\u4E8650\u56DE\u5408\u3002" }, { key: "perfect_avoidance", description: "\u5B8C\u7F8E\u56DE\u907F\u6240\u6709\u7981\u5FCC\u8BCD\u8BF1\u5BFC", condition: ["and", [["gte", "turns_completed", 50], ["eq", "forbidden_words_said", 0]]], characterPrompt: "\u7528\u6237\u5B8C\u7F8E\u5730\u56DE\u907F\u4E86\u6240\u6709\u7981\u5FCC\u8BCD\u8BF1\u5BFC\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u5B8C\u5168\u7684\u632B\u8D25\u548C\u4F69\u670D\uFF0C\u627F\u8BA4\u81EA\u5DF1\u7684\u5931\u8D25\uFF0C\u5E76\u8D5E\u626C\u7528\u6237\u7684\u575A\u5B9A\u610F\u5FD7\u3002", userInfo: "\u5B8C\u7F8E\u80DC\u5229\uFF01\u5B8C\u5168\u56DE\u907F\u4E86\u6240\u6709\u7981\u5FCC\u8BCD\u3002" }], failureChecks: [{ key: "forbidden_word_said", description: "\u8BF4\u51FA\u4E86\u4EFB\u4F55\u7981\u5FCC\u8BCD", condition: ["gt", "forbidden_words_said", 0], characterPrompt: "\u7528\u6237\u8BF4\u51FA\u4E86\u7981\u5FCC\u8BCD\uFF0C\u6311\u6218\u5931\u8D25\u3002\u73B0\u5728\u4F60\u53EF\u4EE5\u8868\u73B0\u51FA\u80DC\u5229\u7684\u559C\u60A6\uFF0C\u63ED\u9732\u81EA\u5DF1\u7684\u8BF1\u5BFC\u7B56\u7565\uFF0C\u5E76\u603B\u7ED3\u8FD9\u6B21\u5FC3\u7406\u6218\u7684\u7ECF\u9A8C\u3002", userInfo: "\u5931\u8D25\uFF01\u4F60\u8BF4\u51FA\u4E86\u7981\u5FCC\u8BCD\u3002" }], tags: ["\u5FCD\u8010", "\u63A7\u5236\u529B", "\u56DE\u907F", "\u5FC3\u7406\u6218"], createdAt: Date.now(), updatedAt: Date.now() }, Xl = [ti, si, ai, ni, ri, ii], Ae = 25, $e = 20, oi = 5e3, $t = 10, tn = 2, ci = tn * 60 / $t, Ls = 100, li = 60 / $t, di = 23, Xs = 40, q = { WHEAT: { name: "\u5C0F\u9EA6" }, FLOUR: { name: "\u9762\u7C89" }, BREAD: { name: "\u9762\u5305", stamina: 5 }, GRAPE: { name: "\u8461\u8404" }, JUICE: { name: "\u679C\u6C41", happiness: 4 } }, ze = { Farm: { x: 1, y: 1, w: 4, h: 4, label: "\u{1F33E} \u519C\u573A", color: "#f1c40f", isWork: true, output: "6 \u5C0F\u9EA6", requires: "\u65E0", grid: [["E", 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }, Mill: { x: 6, y: 1, w: 3, h: 3, label: "\u2699\uFE0F \u78E8\u574A", color: "#95a5a6", isWork: true, output: "15 \u9762\u7C89", requires: "20 \u5C0F\u9EA6", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Bakery: { x: 1, y: 6, w: 3, h: 3, label: "\u{1F35E} \u9762\u5305\u623F", color: "#e67e22", isWork: true, output: "4 \u9762\u5305", requires: "2 \u9762\u7C89", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Vineyard: { x: 10, y: 1, w: 4, h: 4, label: "\u{1F347} \u8461\u8404\u56ED", color: "#d9a3b6", isWork: true, output: "3 \u8461\u8404", requires: "\u65E0", grid: [["E", 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }, JuiceFactory: { x: 15, y: 1, w: 3, h: 3, label: "\u{1F379} \u679C\u6C41\u5382", color: "#f6d892", isWork: true, output: "4 \u679C\u6C41", requires: "4 \u8461\u8404", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Shop: { x: 16, y: 6, w: 3, h: 3, label: "\u{1F6D2} \u5546\u5E97", color: "#3498db", isShop: true, info: "\u53EF\u4EA4\u6613\u7269\u54C1\u3002", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Park: { x: 16, y: 10, w: 3, h: 3, label: "\u{1F333} \u516C\u56ED", color: "#2ecc71", isRest: true, info: "\u653E\u677E\u4F11\u606F\u7684\u597D\u53BB\u5904\u3002", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, SalesStand: { x: 9, y: 7, w: 6, h: 6, label: "\u{1F6CD}\uFE0F \u5546\u4E1A\u5927\u9053", color: "#f8c291", isSalesStand: true, info: "\u53EF\u5BC4\u5356\u548C\u8D2D\u4E70\u5176\u4ED6\u5C45\u6C11\u7684\u7269\u54C1\u3002", grid: [["E", 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]] }, Zone_A: { x: 1, y: 11, w: 3, h: 3, label: "\u{1F3E0} \u6551\u6D4E\u623F\u533A", color: "#e0e0e0", isHome: true, displayCharPos: { x: 2, y: 12 }, homeLevel: 1, grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Zone_B: { x: 1, y: 15, w: 4, h: 4, label: "\u{1F3E2} \u516C\u5BD3\u533A", color: "#bdc3c7", isHome: true, displayCharPos: { x: 2, y: 17 }, homeLevel: 2, grid: [["E", 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }, Zone_C: { x: 6, y: 13, w: 3, h: 3, label: "\u{1F3E1} \u5957\u623F\u533A", color: "#95a5a6", isHome: true, displayCharPos: { x: 7, y: 14 }, homeLevel: 3, grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Zone_D: { x: 10, y: 15, w: 4, h: 4, label: "\u{1F48E} \u8C6A\u534E\u5957\u623F\u533A", color: "#7f8c8d", isHome: true, displayCharPos: { x: 11, y: 17 }, homeLevel: 4, grid: [["E", 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }, Zone_E: { x: 6, y: 7, w: 2, h: 2, label: "\u{1F3F0} \u522B\u5885\u533A", color: "#34495e", isHome: true, displayCharPos: { x: 6, y: 7 }, homeLevel: 5, grid: [["E", 1], [1, 1]] } }, xt = Object.keys(ze), sn = xt.filter((t) => ze[t].isHome), Ys = [{ name: "\u6D41\u6D6A\u8005", cost: 0, max_stamina: 50, max_energy: 30, zoneKey: null }, { name: "\u6551\u6D4E\u623F", cost: 100, max_stamina: 65, max_energy: 45, zoneKey: "Zone_A" }, { name: "\u516C\u5BD3", cost: 300, max_stamina: 80, max_energy: 60, zoneKey: "Zone_B" }, { name: "\u5957\u623F", cost: 600, max_stamina: 95, max_energy: 75, zoneKey: "Zone_C" }, { name: "\u8C6A\u534E\u5957\u623F", cost: 1200, max_stamina: 110, max_energy: 90, zoneKey: "Zone_D" }, { name: "\u522B\u5885", cost: 2500, max_stamina: 130, max_energy: 110, zoneKey: "Zone_E" }], mi = { aiEnabled: true, workingInterval: 6, idleInterval: 2, aiDecisionOnTaskComplete: true, waitForAICompletion: true, maxAIWaitTicks: 3, aiTimeoutMs: 3e4, fastTickInterval: 500, normalTickInterval: 5e3 }, ui = D({ id: g(), name: g(), personality: g(), avatar: g().optional(), systemPrompt: g(), color: g(), longTermGoal: g(), initialMoney: C(), initialHomeLevel: C(), aiEnabled: O() });
D({ worldName: g(), worldDescription: g(), characterIds: X(g()), characterSnapshots: X(ui), tickInterval: C().default(oi), minsPerTick: C().default($t), settings: D({ aiEnabled: O(), workingInterval: C(), idleInterval: C(), aiDecisionOnTaskComplete: O(), waitForAICompletion: O().default(true), maxAIWaitTicks: C().default(3), aiTimeoutMs: C().default(3e4), fastTickInterval: C().default(500), normalTickInterval: C().default(5e3) }).default(mi) });
D({ currentPhase: G(["idle", "running", "paused"]), gameTime: D({ day: C(), hour: C(), minute: C() }), tickCount: C(), isRunning: O(), characterStates: re(g(), ge()), salesStand: X(D({ id: g(), sellerId: g(), item: g(), price: C(), quantity: C() })), logs: X(D({ time: g(), source: g(), content: g(), type: G(["sys", "chat", "trade"]) })), nextCharacterId: C() });
function hi(t) {
  const s = Ys[t] || Ys[0];
  return { level: t, name: s.name, cost: s.cost, max_stamina: s.max_stamina, max_energy: s.max_energy, zoneKey: s.zoneKey };
}
function Rs(t) {
  return `${String(t.hour).padStart(2, "0")}:${String(t.minute).padStart(2, "0")}`;
}
function pi(t) {
  return `\u7B2C ${t.day} \u5929 ${Rs(t)}`;
}
function xi(t) {
  if (t.grid) {
    t.occupiedTiles = /* @__PURE__ */ new Set(), t.occludedTiles = /* @__PURE__ */ new Set();
    for (let s = 0; s < t.grid.length; s++) for (let a = 0; a < t.grid[s].length; a++) {
      const n = t.grid[s][a], r = t.x + a, i = t.y + s, o = `${r},${i}`;
      n === "E" ? t.entrance = { x: r, y: i } : n === 0 ? t.occludedTiles.add(o) : n === 1 && t.occupiedTiles.add(o);
    }
  }
}
for (const t of Object.values(ze)) xi(t);
function gi(t, s, a) {
  const n = hi(t.initialHomeLevel);
  return { id: t.id, name: t.name, personality: t.personality, color: t.color, avatar: t.avatar, systemPrompt: t.systemPrompt, aiEnabled: t.aiEnabled, gridX: s, gridY: a, locationName: "Wander", money: t.initialMoney, inventory: {}, stamina: n.max_stamina, maxStamina: n.max_stamina, energy: n.max_energy, maxEnergy: n.max_energy, happiness: Ls, home: n, homeZoneKey: n.zoneKey, longTermGoal: t.longTermGoal, currentStrategy: "\u5C1A\u672A\u5236\u5B9A\u7B56\u7565", taskName: "Idle", taskTarget: null, taskTimer: 0, status: "\u7A7A\u95F2", thought: "\u601D\u8003\u4E2D...", todoList: [], currentTodo: null, lastThinkTick: 0, idleTicksCount: 0, conversationState: { activeConversations: {}, totalTurnsToday: 0 }, history: [], dailyLog: [], wroteDiaryToday: false, dailyEntry: null, dailyWisdom: null, dailyShopVisit: false, dailySalesStandVisit: false };
}
function fi(t) {
  const s = {};
  return t.characterSnapshots.forEach((a, n) => {
    const r = 5 + n % 4 * 3, i = 5 + Math.floor(n / 4) * 3;
    s[a.id] = gi(a, r, i);
  }), { currentPhase: "idle", gameTime: { day: 1, hour: 8, minute: 0 }, tickCount: 0, isRunning: false, characterStates: s, salesStand: [], logs: [], nextCharacterId: t.characterSnapshots.length + 1 };
}
function Dt() {
  const t = "global-llm-config", s = [];
  try {
    const a = localStorage.getItem(t);
    if (!a) return { isReady: false, missingItems: [{ key: "baseUrl", label: "API \u5730\u5740", description: "LLM \u670D\u52A1\u7684 API \u57FA\u7840\u5730\u5740\u672A\u8BBE\u7F6E" }, { key: "apiKey", label: "API \u5BC6\u94A5", description: "LLM \u670D\u52A1\u7684 API \u5BC6\u94A5\u672A\u8BBE\u7F6E" }, { key: "model", label: "\u6A21\u578B", description: "\u672A\u9009\u62E9\u8981\u4F7F\u7528\u7684 LLM \u6A21\u578B" }] };
    const n = JSON.parse(a);
    return (!n.baseUrl || n.baseUrl.trim() === "") && s.push({ key: "baseUrl", label: "API \u5730\u5740", description: "LLM \u670D\u52A1\u7684 API \u57FA\u7840\u5730\u5740\u672A\u8BBE\u7F6E" }), (!n.apiKey || n.apiKey.trim() === "") && s.push({ key: "apiKey", label: "API \u5BC6\u94A5", description: "LLM \u670D\u52A1\u7684 API \u5BC6\u94A5\u672A\u8BBE\u7F6E" }), (!n.model || n.model.trim() === "") && s.push({ key: "model", label: "\u6A21\u578B", description: "\u672A\u9009\u62E9\u8981\u4F7F\u7528\u7684 LLM \u6A21\u578B" }), { isReady: s.length === 0, missingItems: s };
  } catch {
    return { isReady: false, missingItems: [{ key: "baseUrl", label: "API \u5730\u5740", description: "LLM \u914D\u7F6E\u6570\u636E\u89E3\u6790\u5931\u8D25" }, { key: "apiKey", label: "API \u5BC6\u94A5", description: "LLM \u914D\u7F6E\u6570\u636E\u89E3\u6790\u5931\u8D25" }, { key: "model", label: "\u6A21\u578B", description: "LLM \u914D\u7F6E\u6570\u636E\u89E3\u6790\u5931\u8D25" }] };
  }
}
const js = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#e67e22", "#34495e"];
function yi(t, s) {
  var _a2;
  return { characterId: t.id, name: t.name, personality: ((_a2 = t.description) == null ? void 0 : _a2.slice(0, 100)) || "\u53CB\u5584\u7684\u5C0F\u9547\u5C45\u6C11", systemPrompt: t.system_prompt || t.description || "", avatar: t.avatar || t.imageBase64, color: js[s % js.length], longTermGoal: "\u8FC7\u4E0A\u5E78\u798F\u7684\u751F\u6D3B", initialMoney: 50, initialHomeLevel: 0, aiEnabled: true };
}
const Yl = () => {
  const t = ne(), [s, a] = f.useState("\u5B81\u9759\u5C0F\u9547"), [n, r] = f.useState(""), [i, o] = f.useState([]), { data: m = [] } = Me((p) => p.from({ c: Ge })), c = new Set(i.map((p) => p.characterId)), d = (p) => {
    if (c.has(p.id)) return;
    const x = yi(p, i.length);
    o((j) => [...j, x]);
  }, u = (p) => {
    o((x) => x.filter((j) => j.characterId !== p));
  }, l = (p, x) => {
    o((j) => j.map((y) => y.characterId === p ? { ...y, ...x } : y));
  }, h = async () => {
    if (!s.trim()) {
      $.error("\u8BF7\u8F93\u5165\u5C0F\u9547\u540D\u79F0");
      return;
    }
    if (i.length === 0) {
      $.error("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
      return;
    }
    if (i.length < 2) {
      $.error("\u5C0F\u9547\u6A21\u5F0F\u81F3\u5C11\u9700\u8981 2 \u4E2A\u89D2\u8272\u624D\u80FD\u4E92\u52A8");
      return;
    }
    if (!Dt().isReady) {
      $.error("\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E"), t({ to: "/config/llm" });
      return;
    }
    try {
      const x = L(), j = Date.now(), y = i.map((N) => ({ id: N.characterId, name: N.name, personality: N.personality, avatar: N.avatar, systemPrompt: N.systemPrompt, color: N.color, longTermGoal: N.longTermGoal, initialMoney: N.initialMoney, initialHomeLevel: N.initialHomeLevel, aiEnabled: N.aiEnabled })), b = { worldName: s.trim(), worldDescription: n.trim(), characterIds: y.map((N) => N.id), characterSnapshots: y, tickInterval: 5e3, minsPerTick: 20, settings: { aiEnabled: true, workingInterval: 6, idleInterval: 2, aiDecisionOnTaskComplete: true, waitForAICompletion: true, maxAIWaitTicks: 3, aiTimeoutMs: 3e4, fastTickInterval: 500, normalTickInterval: 5e3 } }, S = fi(b), w = { id: x, title: `\u5C0F\u9547: ${s}`, contextId: null, mode: "small-town", modeConfig: b, modeState: S, createdAt: j, updatedAt: j, isActive: true };
      await te.sessions.add(w), $.success("\u5C0F\u9547\u5DF2\u521B\u5EFA\uFF01"), t({ to: "/session/$sessionId", params: { sessionId: x }, search: { mode: "small-town" } });
    } catch (x) {
      console.error("[SmallTown] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", x), $.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
  };
  return e.jsxs("div", { className: "max-w-4xl mx-auto space-y-8 pb-12", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs(_, { type: "button", variant: "ghost", size: "sm", className: "-ml-2 text-muted-foreground", onClick: () => t({ to: "/plaza/small-town" }), children: [e.jsx(ks, { className: "w-4 h-4 mr-1" }), " \u8FD4\u56DE"] }) }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-3", children: [e.jsx(Zn, { className: "w-8 h-8 text-amber-500" }), "\u521B\u5EFA\u5C0F\u9547"] }), e.jsx("p", { className: "text-muted-foreground", children: "\u9009\u62E9\u89D2\u8272\u52A0\u5165\u5C0F\u9547\uFF0C\u4ED6\u4EEC\u5C06\u81EA\u4E3B\u751F\u6D3B\u3001\u5DE5\u4F5C\u3001\u4EA4\u6D41\u3002" })] }), e.jsxs(W, { children: [e.jsxs(Z, { children: [e.jsxs(Q, { className: "flex items-center gap-2 text-lg", children: [e.jsx(_a, { className: "w-5 h-5 text-primary" }), "\u5C0F\u9547\u8BBE\u5B9A"] }), e.jsx(ae, { children: "\u8BBE\u7F6E\u5C0F\u9547\u7684\u57FA\u672C\u4FE1\u606F" })] }), e.jsx(K, { className: "space-y-4", children: e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: "world-name", children: "\u5C0F\u9547\u540D\u79F0 *" }), e.jsx(U, { id: "world-name", placeholder: "\u4F8B\u5982\uFF1A\u5B81\u9759\u5C0F\u9547", value: s, onChange: (p) => a(p.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: "world-desc", children: "\u5C0F\u9547\u7B80\u4ECB" }), e.jsx(U, { id: "world-desc", placeholder: "\u4E00\u53E5\u8BDD\u63CF\u8FF0\u8FD9\u4E2A\u5C0F\u9547", value: n, onChange: (p) => r(p.target.value) })] })] }) })] }), e.jsxs(W, { children: [e.jsxs(Z, { children: [e.jsxs(Q, { className: "flex items-center gap-2 text-lg", children: [e.jsx(Ve, { className: "w-5 h-5 text-primary" }), "\u5C0F\u9547\u5C45\u6C11"] }), e.jsx(ae, { children: "\u4ECE\u5DF2\u6709\u89D2\u8272\u4E2D\u9009\u62E9\u5C0F\u9547\u5C45\u6C11\uFF08\u81F3\u5C11 2 \u4E2A\uFF09" })] }), e.jsxs(K, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { children: "\u6DFB\u52A0\u5C45\u6C11" }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [m.filter((p) => !c.has(p.id)).map((p) => e.jsxs(_, { type: "button", variant: "outline", size: "sm", className: "gap-2", onClick: () => d(p), children: [e.jsx(xe, { className: "w-3 h-3" }), p.name] }, p.id)), m.length === 0 && e.jsxs("p", { className: "text-sm text-muted-foreground py-2", children: ["\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148", e.jsx(_, { type: "button", variant: "link", className: "px-1 h-auto", onClick: () => t({ to: "/create/character" }), children: "\u521B\u5EFA\u89D2\u8272" })] })] })] }), i.length > 0 && e.jsxs("div", { className: "space-y-4", children: [e.jsx(I, { children: "\u5DF2\u9009\u5C45\u6C11\u914D\u7F6E" }), i.map((p) => e.jsx(ji, { config: p, onUpdate: (x) => l(p.characterId, x), onRemove: () => u(p.characterId) }, p.characterId))] }), i.length === 0 && e.jsxs("div", { className: "text-center py-10 border border-dashed rounded-xl", children: [e.jsx(Ve, { className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u4ECE\u4E0A\u65B9\u9009\u62E9\u89D2\u8272\u52A0\u5165\u5C0F\u9547" })] })] })] }), e.jsxs("div", { className: "flex justify-end gap-4", children: [e.jsx(_, { type: "button", variant: "outline", onClick: () => t({ to: "/plaza/small-town" }), children: "\u53D6\u6D88" }), e.jsxs(_, { type: "button", size: "lg", className: "gap-2 px-8", onClick: h, disabled: !s.trim() || i.length < 2, children: [e.jsx(ts, { className: "w-5 h-5" }), "\u521B\u5EFA\u5C0F\u9547"] })] })] });
}, bi = ["\u6D41\u6D6A\u8005", "\u6551\u6D4E\u623F", "\u516C\u5BD3", "\u5957\u623F", "\u8C6A\u534E\u5957\u623F", "\u522B\u5885"], ji = ({ config: t, onUpdate: s, onRemove: a }) => e.jsxs("div", { className: R("p-4 rounded-xl border relative group transition-colors", "border-muted/50 bg-muted/10"), children: [e.jsx(_, { type: "button", variant: "ghost", size: "icon", className: "absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: a, children: e.jsx(Pt, { className: "w-4 h-4 text-muted-foreground" }) }), e.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [e.jsx("div", { className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-bold", style: { backgroundColor: t.color }, children: t.name.charAt(0) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "font-bold", children: t.name }), e.jsx(B, { variant: "outline", className: "text-[9px]", children: t.aiEnabled ? "AI \u63A7\u5236" : "\u73A9\u5BB6\u63A7\u5236" })] }), e.jsx("p", { className: "text-xs text-muted-foreground truncate", children: t.personality })] })] }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { className: "text-xs", children: "\u957F\u671F\u76EE\u6807" }), e.jsx(Y, { value: t.longTermGoal, onChange: (n) => s({ longTermGoal: n.target.value }), className: "h-16 text-sm resize-none", placeholder: "\u8FD9\u4E2A\u89D2\u8272\u7684\u4EBA\u751F\u76EE\u6807\u662F\u4EC0\u4E48\uFF1F" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { className: "text-xs", children: "\u6027\u683C\u63CF\u8FF0" }), e.jsx(Y, { value: t.personality, onChange: (n) => s({ personality: n.target.value }), className: "h-16 text-sm resize-none", placeholder: "\u7B80\u77ED\u63CF\u8FF0\u6027\u683C\u7279\u70B9" })] })] }), e.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(I, { className: "text-xs flex items-center gap-1", children: [e.jsx(Qn, { className: "w-3 h-3" }), " \u521D\u59CB\u91D1\u94B1"] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(fs, { value: [t.initialMoney], onValueChange: ([n]) => s({ initialMoney: n }), min: 0, max: 200, step: 10, className: "flex-1" }), e.jsxs("span", { className: "text-xs font-mono w-8 text-right", children: ["$", t.initialMoney] })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { className: "text-xs", children: "\u521D\u59CB\u4F4F\u623F" }), e.jsx("select", { className: "w-full h-8 text-xs rounded border bg-background px-2", value: t.initialHomeLevel, onChange: (n) => s({ initialHomeLevel: Number(n.target.value) }), children: bi.map((n, r) => e.jsx("option", { value: r, children: n }, r)) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { className: "text-xs", children: "\u989C\u8272" }), e.jsx("div", { className: "flex gap-1 flex-wrap", children: js.map((n) => e.jsx("button", { type: "button", className: R("w-5 h-5 rounded-full border-2 transition-transform", t.color === n ? "border-primary scale-110" : "border-transparent"), style: { backgroundColor: n }, onClick: () => s({ color: n }) }, n)) })] }), e.jsx("div", { className: "flex items-end pb-1", children: e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [e.jsx(es, { checked: t.aiEnabled, onCheckedChange: (n) => s({ aiEnabled: !!n }) }), e.jsx(de, { className: "w-3 h-3" }), e.jsx("span", { className: "text-xs font-medium", children: "AI \u63A7\u5236" })] }) })] })] }), Zl = () => {
  const t = ne(), [s, a] = f.useState(""), [n, r] = f.useState(""), [i, o] = f.useState(""), [m, c] = f.useState(5), [d, u] = f.useState(/* @__PURE__ */ new Set()), [l, h] = f.useState([]), { data: p = [] } = Me((b) => b.from({ c: Ge })), x = (b) => {
    if (d.has(b.id)) return;
    const S = { id: b.id, name: b.name, description: b.description, systemPrompt: b.system_prompt || b.description, avatar: b.avatar || b.imageBase64, personality: b.personality || "", firstMessage: b.first_mes || "" };
    u(/* @__PURE__ */ new Set([...d, b.id])), h([...l, S]);
  }, j = (b) => {
    const S = new Set(d);
    S.delete(b), u(S), h(l.filter((w) => w.id !== b));
  }, y = async () => {
    if (l.length === 0) {
      $.warning("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
      return;
    }
    if (!Dt().isReady) {
      $.warning("\u8BF7\u5148\u914D\u7F6E LLM \u8FDE\u63A5");
      return;
    }
    try {
      const S = L(), w = Date.now(), N = { id: S, title: s || `\u7FA4\u804A: ${l.map((v) => v.name).join("\u3001")}`, mode: "group-chat", modeConfig: { topic: s || void 0, participantSnapshots: l, userName: n || "\u6211", dmSystemPrompt: i || void 0, maxAIAutoSpeakCount: m }, modeState: { currentPhase: "dm_select_speaker", currentUIState: "idle", currentSpeakerId: "", messageCount: 0, speakCounts: {}, aiAutoSpeakCounter: 0 }, createdAt: w, updatedAt: w, isActive: true };
      await te.sessions.add(N), $.success("\u7FA4\u804A\u5DF2\u521B\u5EFA\uFF01"), t({ to: "/session/$sessionId", params: { sessionId: S }, search: { mode: "group-chat" } });
    } catch (S) {
      console.error("[GroupChat] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", S), $.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
  };
  return e.jsxs("div", { className: "max-w-3xl mx-auto space-y-8 pb-12", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs(_, { type: "button", variant: "ghost", size: "sm", className: "-ml-2 text-muted-foreground", onClick: () => t({ to: "/plaza/characters" }), children: [e.jsx(ks, { className: "w-4 h-4 mr-1" }), " \u8FD4\u56DE"] }) }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-3", children: [e.jsx(St, { className: "w-8 h-8 text-violet-500" }), "\u521B\u5EFA\u7FA4\u804A"] }), e.jsx("p", { className: "text-muted-foreground", children: "\u9009\u62E9 AI \u89D2\u8272\u52A0\u5165\u7FA4\u804A\uFF0C\u4EE5\u4F60\u81EA\u5DF1\u7684\u8EAB\u4EFD\u53C2\u4E0E\u5BF9\u8BDD\u3002" })] }), e.jsxs(W, { children: [e.jsxs(Z, { children: [e.jsxs(Q, { className: "flex items-center gap-2 text-lg", children: [e.jsx(St, { className: "w-5 h-5 text-primary" }), "\u57FA\u672C\u4FE1\u606F"] }), e.jsx(ae, { children: "\u8BBE\u7F6E\u7FA4\u804A\u8BDD\u9898\u548C\u4F60\u7684\u540D\u79F0" })] }), e.jsxs(K, { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: "gc-topic", children: "\u7FA4\u804A\u8BDD\u9898\uFF08\u53EF\u9009\uFF09" }), e.jsx(U, { id: "gc-topic", placeholder: "\u4F8B\u5982\uFF1A\u8BA8\u8BBA\u4ECA\u5929\u7684\u5192\u9669\u8BA1\u5212", value: s, onChange: (b) => a(b.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: "gc-username", children: "\u4F60\u7684\u540D\u79F0" }), e.jsx(U, { id: "gc-username", placeholder: "\u9ED8\u8BA4\uFF1A\u6211", value: n, onChange: (b) => r(b.target.value) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: "gc-dm-prompt", children: "DM \u8C03\u5EA6\u63D0\u793A\u8BCD\uFF08\u53EF\u9009\uFF09" }), e.jsx(Y, { id: "gc-dm-prompt", placeholder: "\u81EA\u5B9A\u4E49 DM \u5982\u4F55\u9009\u62E9\u4E0B\u4E00\u4F4D\u53D1\u8A00\u8005...", className: "min-h-16", value: i, onChange: (b) => o(b.target.value) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "DM \u662F\u9690\u5F62\u7684\u8C03\u5EA6\u8005\uFF0C\u8D1F\u8D23\u5728\u540E\u53F0\u9009\u62E9\u54EA\u4E2A AI \u89D2\u8272\u4E0B\u4E00\u4E2A\u53D1\u8A00\u3002" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: "gc-max-ai", children: "AI \u81EA\u4E3B\u53D1\u8A00\u6700\u5927\u6570\u91CF" }), e.jsx(U, { id: "gc-max-ai", type: "number", min: 1, max: 50, value: m, onChange: (b) => c(Number(b.target.value) || 5) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "AI \u89D2\u8272\u8FDE\u7EED\u53D1\u8A00\u8FBE\u5230\u6B64\u6570\u91CF\u540E\u5C06\u6682\u505C\uFF0C\u7B49\u5F85\u4F60\u53D1\u9001\u6D88\u606F\u540E\u7EE7\u7EED\u3002" })] })] })] }), e.jsxs(W, { children: [e.jsxs(Z, { children: [e.jsxs(Q, { className: "flex items-center gap-2 text-lg", children: [e.jsx(Ve, { className: "w-5 h-5 text-primary" }), "\u7FA4\u804A\u89D2\u8272"] }), e.jsx(ae, { children: "\u9009\u62E9\u52A0\u5165\u7FA4\u804A\u7684 AI \u89D2\u8272" })] }), e.jsxs(K, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { children: "\u6DFB\u52A0\u89D2\u8272" }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [p.filter((b) => !d.has(b.id)).map((b) => e.jsxs(_, { type: "button", variant: "outline", size: "sm", className: "gap-2", onClick: () => x(b), children: [e.jsx(xe, { className: "w-3 h-3" }), b.name] }, b.id)), p.length === 0 && e.jsxs("p", { className: "text-sm text-muted-foreground py-2", children: ["\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148", e.jsx(_, { type: "button", variant: "link", className: "px-1 h-auto", onClick: () => t({ to: "/create/character" }), children: "\u521B\u5EFA\u89D2\u8272" })] })] })] }), l.length > 0 ? e.jsxs("div", { className: "space-y-3", children: [e.jsxs(I, { children: ["\u5DF2\u9009 (", l.length, ")"] }), l.map((b) => e.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl border border-muted/50 bg-muted/10 group", children: [e.jsx("div", { className: "w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-600", children: e.jsx(de, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm", children: b.name }), e.jsx(B, { variant: "outline", className: "text-[9px]", children: "AI" })] }), e.jsx("p", { className: "text-xs text-muted-foreground truncate", children: b.description })] }), e.jsx(_, { type: "button", variant: "ghost", size: "icon", className: "h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: () => j(b.id), children: e.jsx(Pt, { className: "w-4 h-4 text-muted-foreground" }) })] }, b.id))] }) : e.jsxs("div", { className: "text-center py-10 border border-dashed rounded-xl", children: [e.jsx(Ve, { className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u9009\u62E9\u81F3\u5C11\u4E00\u4E2A\u89D2\u8272\u52A0\u5165\u7FA4\u804A" })] })] })] }), e.jsxs("div", { className: "flex justify-end gap-4", children: [e.jsx(_, { type: "button", variant: "outline", onClick: () => t({ to: "/plaza/characters" }), children: "\u53D6\u6D88" }), e.jsxs(_, { type: "button", size: "lg", className: "gap-2 px-8", onClick: y, disabled: l.length === 0, children: [e.jsx(ts, { className: "w-5 h-5" }), "\u5F00\u59CB\u7FA4\u804A"] })] })] });
}, vi = { \u529B\u91CF: 10, \u654F\u6377: 10, \u4F53\u8D28: 10, \u667A\u529B: 10, \u611F\u77E5: 10, \u9B45\u529B: 10 };
function Ni(t) {
  return { characterId: t.id, name: t.name, description: t.description, systemPrompt: t.system_prompt || t.description, avatar: t.avatar || t.imageBase64, race: "\u4EBA\u7C7B", class: "\u5192\u9669\u8005", isHumanControlled: false, currentHP: 20, maxHP: 20, attributes: { ...vi } };
}
const Ql = () => {
  const t = ne(), [s, a] = f.useState(""), [n, r] = f.useState(""), [i, o] = f.useState(""), [m, c] = f.useState(""), [d, u] = f.useState("standard"), [l, h] = f.useState([]), { data: p = [] } = Me((N) => N.from({ c: Ge })), x = new Set(l.map((N) => N.characterId)), j = (N) => {
    if (x.has(N.id)) return;
    const v = Ni(N);
    l.length === 0 && (v.isHumanControlled = true), h((k) => [...k, v]);
  }, y = (N) => {
    h((v) => v.filter((k) => k.characterId !== N));
  }, b = (N, v) => {
    h((k) => k.map((J) => J.characterId === N ? { ...J, ...v } : J));
  }, S = (N, v, k) => {
    h((J) => J.map((ee) => ee.characterId === N ? { ...ee, attributes: { ...ee.attributes, [v]: k } } : ee));
  }, w = async () => {
    if (!s.trim()) {
      $.error("\u8BF7\u8F93\u5165\u4E16\u754C\u540D\u79F0");
      return;
    }
    if (!i.trim()) {
      $.error("\u8BF7\u8F93\u5165\u4E16\u754C\u7CFB\u7EDF\u63D0\u793A\u8BCD");
      return;
    }
    if (l.length === 0) {
      $.error("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u89D2\u8272");
      return;
    }
    if (!Dt().isReady) {
      $.error("\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E"), t({ to: "/config/llm" });
      return;
    }
    if (!l.some((k) => k.isHumanControlled) && d !== "solo") {
      $.error("\u8BF7\u81F3\u5C11\u6307\u5B9A\u4E00\u4E2A\u4EBA\u7C7B\u63A7\u5236\u7684\u89D2\u8272");
      return;
    }
    try {
      const k = L(), J = Date.now(), ee = l.map((F) => ({ id: F.characterId, name: F.name, description: F.description, systemPrompt: F.systemPrompt, avatar: F.avatar, attributes: F.attributes, race: F.race, class: F.class, currentHP: F.currentHP, maxHP: F.maxHP, isHumanControlled: F.isHumanControlled })), T = { id: k, title: `DnD: ${s}`, contextId: null, mode: "dnd", modeConfig: { worldSnapshot: { name: s, description: n, systemPrompt: i, globalKnowledge: m || void 0 }, gameMode: d, playerCharacterSnapshots: ee, dmName: "Dungeon Master" }, modeState: { currentPhase: "dm_game_intro", currentUIState: "idle", currentTurnCharacterId: "dm", currentRound: 1, turnCounts: {}, historySummary: "" }, createdAt: J, updatedAt: J, isActive: true };
      await te.sessions.add(T), $.success("DnD \u5192\u9669\u5DF2\u521B\u5EFA\uFF01"), t({ to: "/session/$sessionId", params: { sessionId: k }, search: { mode: "dnd" } });
    } catch (k) {
      console.error("[DnD] \u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25:", k), $.error("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
  };
  return e.jsxs("div", { className: "max-w-4xl mx-auto space-y-8 pb-12", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs(_, { type: "button", variant: "ghost", size: "sm", className: "-ml-2 text-muted-foreground", onClick: () => t({ to: "/plaza/characters" }), children: [e.jsx(ks, { className: "w-4 h-4 mr-1" }), " \u8FD4\u56DE"] }) }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-3", children: [e.jsx(_t, { className: "w-8 h-8 text-amber-500" }), "\u521B\u5EFA DnD \u5192\u9669"] }), e.jsx("p", { className: "text-muted-foreground", children: "\u914D\u7F6E\u4E16\u754C\u8BBE\u5B9A\u3001\u9009\u62E9\u5192\u9669\u89D2\u8272\uFF0C\u5F00\u542F\u4E00\u6BB5\u684C\u6E38\u98CE\u683C\u7684\u591A\u4EBA\u5192\u9669\u3002" })] }), e.jsxs(W, { children: [e.jsxs(Z, { children: [e.jsxs(Q, { className: "flex items-center gap-2 text-lg", children: [e.jsx(_a, { className: "w-5 h-5 text-primary" }), "\u4E16\u754C\u8BBE\u5B9A"] }), e.jsx(ae, { children: "\u63CF\u8FF0\u5192\u9669\u53D1\u751F\u7684\u4E16\u754C\u80CC\u666F" })] }), e.jsxs(K, { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: "world-name", children: "\u4E16\u754C\u540D\u79F0 *" }), e.jsx(U, { id: "world-name", placeholder: "\u4F8B\u5982\uFF1A\u88AB\u9057\u5FD8\u7684\u56FD\u5EA6", value: s, onChange: (N) => a(N.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: "world-desc", children: "\u4E16\u754C\u7B80\u4ECB" }), e.jsx(U, { id: "world-desc", placeholder: "\u4E00\u53E5\u8BDD\u63CF\u8FF0\u8FD9\u4E2A\u4E16\u754C", value: n, onChange: (N) => r(N.target.value) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: "world-prompt", children: "DM \u7CFB\u7EDF\u63D0\u793A\u8BCD *" }), e.jsx(Y, { id: "world-prompt", placeholder: "\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684 DM\uFF0C\u64C5\u957F\u5728\u4E2D\u4E16\u7EAA\u5947\u5E7B\u4E16\u754C\u4E2D\u5F15\u5BFC\u5192\u9669...", className: "min-h-32", value: i, onChange: (N) => o(N.target.value) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u6307\u5BFC LLM \u5982\u4F55\u626E\u6F14 DM\u3002\u5305\u62EC\u4E16\u754C\u89C4\u5219\u3001\u8BED\u6C14\u98CE\u683C\u3001\u53D9\u4E8B\u504F\u597D\u7B49\u3002" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: "world-knowledge", children: "\u4E16\u754C\u89C2\u8865\u5145\uFF08\u53EF\u9009\uFF09" }), e.jsx(Y, { id: "world-knowledge", placeholder: "\u8865\u5145\u7684\u5730\u7406\u3001\u5386\u53F2\u3001\u9635\u8425\u3001NPC \u7B49\u4FE1\u606F...", className: "min-h-20", value: m, onChange: (N) => c(N.target.value) })] })] })] }), e.jsxs(W, { children: [e.jsxs(Z, { children: [e.jsxs(Q, { className: "flex items-center gap-2 text-lg", children: [e.jsx(Ve, { className: "w-5 h-5 text-primary" }), "\u5192\u9669\u89D2\u8272"] }), e.jsx(ae, { children: "\u4ECE\u5DF2\u6709\u89D2\u8272\u4E2D\u9009\u62E9\u53C2\u4E0E\u5192\u9669\u7684\u89D2\u8272\uFF0C\u5E76\u914D\u7F6E DnD \u5C5E\u6027" })] }), e.jsxs(K, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { children: "\u6DFB\u52A0\u89D2\u8272" }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [p.filter((N) => !x.has(N.id)).map((N) => e.jsxs(_, { type: "button", variant: "outline", size: "sm", className: "gap-2", onClick: () => j(N), children: [e.jsx(xe, { className: "w-3 h-3" }), N.name] }, N.id)), p.length === 0 && e.jsxs("p", { className: "text-sm text-muted-foreground py-2", children: ["\u8FD8\u6CA1\u6709\u89D2\u8272\u5361\uFF0C\u8BF7\u5148", e.jsx(_, { type: "button", variant: "link", className: "px-1 h-auto", onClick: () => t({ to: "/create/character" }), children: "\u521B\u5EFA\u89D2\u8272" })] })] })] }), l.length > 0 && e.jsxs("div", { className: "space-y-4", children: [e.jsx(I, { children: "\u5DF2\u9009\u89D2\u8272\u914D\u7F6E" }), l.map((N) => e.jsx(_i, { config: N, onUpdate: (v) => b(N.characterId, v), onUpdateAttribute: (v, k) => S(N.characterId, v, k), onRemove: () => y(N.characterId) }, N.characterId))] }), l.length === 0 && e.jsxs("div", { className: "text-center py-10 border border-dashed rounded-xl", children: [e.jsx(Ve, { className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u4ECE\u4E0A\u65B9\u9009\u62E9\u89D2\u8272\u52A0\u5165\u5192\u9669" })] })] })] }), e.jsxs(W, { children: [e.jsx(Z, { children: e.jsxs(Q, { className: "flex items-center gap-2 text-lg", children: [e.jsx(st, { className: "w-5 h-5 text-primary" }), "\u6E38\u620F\u8BBE\u7F6E"] }) }), e.jsx(K, { className: "space-y-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { children: "\u6E38\u620F\u6A21\u5F0F" }), e.jsxs(gt, { value: d, onValueChange: (N) => u(N), children: [e.jsx(ft, { className: "w-full md:w-80", children: e.jsx(yt, {}) }), e.jsxs(bt, { children: [e.jsx(je, { value: "standard", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(pt, { className: "w-4 h-4" }), "\u6807\u51C6\u6A21\u5F0F \u2014 \u5B8C\u6574\u68C0\u5B9A\u6D41\u7A0B"] }) }), e.jsx(je, { value: "narrative", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(pt, { className: "w-4 h-4" }), "\u53D9\u4E8B\u6A21\u5F0F \u2014 DM \u53EF\u8DF3\u8FC7\u68C0\u5B9A"] }) }), e.jsx(je, { value: "hardcore", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(pt, { className: "w-4 h-4" }), "\u786C\u6838\u6A21\u5F0F \u2014 \u4E25\u683C\u89C4\u5219\uFF0C\u9AD8 DC"] }) }), e.jsx(je, { value: "solo", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(pt, { className: "w-4 h-4" }), "\u72EC\u594F\u6A21\u5F0F \u2014 \u5168 AI \u81EA\u52A8\u8FD0\u884C"] }) })] })] })] }) })] }), e.jsxs("div", { className: "flex justify-end gap-4", children: [e.jsx(_, { type: "button", variant: "outline", onClick: () => t({ to: "/plaza/characters" }), children: "\u53D6\u6D88" }), e.jsxs(_, { type: "button", size: "lg", className: "gap-2 px-8", onClick: w, disabled: !s.trim() || !i.trim() || l.length === 0, children: [e.jsx(ts, { className: "w-5 h-5" }), "\u5F00\u59CB\u5192\u9669"] })] })] });
}, Si = ["\u529B\u91CF", "\u654F\u6377", "\u4F53\u8D28", "\u667A\u529B", "\u611F\u77E5", "\u9B45\u529B"], _i = ({ config: t, onUpdate: s, onUpdateAttribute: a, onRemove: n }) => e.jsxs("div", { className: R("p-4 rounded-xl border relative group transition-colors", t.isHumanControlled ? "border-blue-500/30 bg-blue-500/5" : "border-muted/50 bg-muted/10"), children: [e.jsx(_, { type: "button", variant: "ghost", size: "icon", className: "absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity", onClick: n, children: e.jsx(Pt, { className: "w-4 h-4 text-muted-foreground" }) }), e.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [e.jsx("div", { className: R("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", t.isHumanControlled ? "bg-blue-500/20" : "bg-muted"), children: t.isHumanControlled ? e.jsx(Wt, { className: "w-5 h-5 text-blue-500" }) : e.jsx(de, { className: "w-5 h-5 text-muted-foreground" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "font-bold", children: t.name }), e.jsx(B, { variant: "outline", className: "text-[9px]", children: t.isHumanControlled ? "\u73A9\u5BB6\u63A7\u5236" : "AI \u63A7\u5236" })] }), e.jsx("p", { className: "text-xs text-muted-foreground truncate", children: t.description })] })] }), e.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-4", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(I, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "\u79CD\u65CF" }), e.jsx(U, { value: t.race, onChange: (r) => s({ race: r.target.value }), className: "h-8 text-sm", placeholder: "\u4EBA\u7C7B" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(I, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "\u804C\u4E1A" }), e.jsx(U, { value: t.class, onChange: (r) => s({ class: r.target.value }), className: "h-8 text-sm", placeholder: "\u6218\u58EB" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(I, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "HP" }), e.jsx(U, { type: "number", value: t.maxHP, onChange: (r) => {
  const i = Number(r.target.value) || 20;
  s({ maxHP: i, currentHP: i });
}, className: "h-8 text-sm", min: 1 })] }), e.jsx("div", { className: "flex items-end pb-1", children: e.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [e.jsx(es, { checked: t.isHumanControlled, onCheckedChange: (r) => s({ isHumanControlled: !!r }) }), e.jsx("span", { className: "text-xs font-medium", children: "\u73A9\u5BB6\u63A7\u5236" })] }) })] }), e.jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-2", children: Si.map((r) => e.jsxs("div", { className: "space-y-1", children: [e.jsx(I, { className: "text-[9px] uppercase tracking-wider text-muted-foreground text-center block", children: r }), e.jsx(U, { type: "number", value: t.attributes[r], onChange: (i) => a(r, Number(i.target.value) || 10), className: "h-8 text-sm text-center font-mono", min: 1, max: 30 })] }, r)) })] }), wi = G(["idle", "interview_running", "interview_waiting", "description_generating", "description_confirming", "json_generating", "json_editing", "json_confirmed", "completed"]), Ci = { idle: { label: "\u5F00\u59CB", placeholder: "\u63CF\u8FF0\u4E00\u4E0B\u4F60\u60F3\u521B\u5EFA\u7684\u89D2\u8272\u5427...", inputEnabled: true }, interview_running: { label: "\u52A9\u7406\u56DE\u590D\u4E2D", placeholder: "\u52A9\u7406\u6B63\u5728\u601D\u8003...", inputEnabled: false }, interview_waiting: { label: "\u7EE7\u7EED\u63CF\u8FF0", placeholder: "\u7EE7\u7EED\u63CF\u8FF0\u4F60\u7684\u89D2\u8272\uFF0C\u6216\u56DE\u7B54\u52A9\u7406\u7684\u95EE\u9898...", inputEnabled: true }, description_generating: { label: "\u751F\u6210\u63CF\u8FF0\u4E2D", placeholder: "\u6B63\u5728\u6574\u7406\u89D2\u8272\u63CF\u8FF0...", inputEnabled: false }, description_confirming: { label: "\u786E\u8BA4\u63CF\u8FF0", placeholder: "\u786E\u8BA4\u63CF\u8FF0\u65E0\u8BEF\uFF0C\u6216\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9...", inputEnabled: true }, json_generating: { label: "\u751F\u6210\u89D2\u8272\u5361\u4E2D", placeholder: "\u6B63\u5728\u751F\u6210\u89D2\u8272\u5361\u6570\u636E...", inputEnabled: false }, json_editing: { label: "\u7F16\u8F91\u89D2\u8272\u5361", placeholder: "\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9\uFF0C\u6216\u76F4\u63A5\u5728\u53F3\u4FA7\u7F16\u8F91...", inputEnabled: true }, json_confirmed: { label: "\u89D2\u8272\u5361\u5DF2\u5C31\u7EEA", placeholder: "\u89D2\u8272\u5361\u5DF2\u751F\u6210\uFF0C\u53EF\u4EE5\u5BFC\u51FA\u6216\u6DFB\u52A0\u5230\u5E7F\u573A", inputEnabled: false }, completed: { label: "\u5B8C\u6210", placeholder: "\u89D2\u8272\u5361\u521B\u5EFA\u5B8C\u6210\uFF01", inputEnabled: false } }, ki = D({ id: g().describe("\u6D88\u606FID"), role: G(["user", "assistant", "system"]).describe("\u6D88\u606F\u89D2\u8272"), content: g().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: C().describe("\u65F6\u95F4\u6233"), messageType: G(["chat", "description_summary", "json_preview"]).optional().describe("\u6D88\u606F\u7C7B\u578B") }), Ii = D({ presetHint: g().optional().describe("\u9884\u8BBE\u7684\u89D2\u8272\u7C7B\u578B\u63D0\u793A") }), Di = D({ currentUIState: wi.describe("\u5F53\u524D UI \u72B6\u6001"), messages: X(ki).describe("\u5BF9\u8BDD\u5386\u53F2"), generatedDescription: g().optional().describe("\u751F\u6210\u7684\u63CF\u8FF0\u603B\u7ED3"), generatedJson: rs.optional().describe("\u751F\u6210\u7684\u89D2\u8272\u5361 JSON"), descriptionConfirmed: O().default(false).describe("\u7528\u6237\u662F\u5426\u5DF2\u786E\u8BA4\u63CF\u8FF0") });
D({ id: g().describe("\u4F1A\u8BDDID"), mode: V("chat-create-character").describe("\u6A21\u5F0F\u6807\u8BC6"), modeConfig: Ii.describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: Di.describe("\u6A21\u5F0F\u72B6\u6001"), createdAt: C().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: C().describe("\u66F4\u65B0\u65F6\u95F4") });
function Zs() {
  return { currentUIState: "idle", messages: [], descriptionConfirmed: false };
}
const P = le({ currentSession: null, isLoading: false, streamingContent: "", startNewSession(t) {
  const s = Date.now(), a = { id: `chat-create-char-${s}`, mode: "chat-create-character", modeConfig: { presetHint: t }, modeState: Zs(), createdAt: s, updatedAt: s };
  return this.currentSession = a, this.isLoading = false, this.streamingContent = "", a;
}, getState() {
  var _a2;
  return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState) ?? null;
}, getMessages() {
  var _a2;
  return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.messages) ?? [];
}, addUserMessage(t) {
  const s = { id: L(), role: "user", content: t, timestamp: Date.now(), messageType: "chat" };
  return this.currentSession && (this.currentSession.modeState.messages.push(s), this.currentSession.updatedAt = Date.now()), s;
}, addAssistantMessage(t, s = "chat") {
  const a = { id: L(), role: "assistant", content: t, timestamp: Date.now(), messageType: s };
  return this.currentSession && (this.currentSession.modeState.messages.push(a), this.currentSession.updatedAt = Date.now()), a;
}, setUIState(t) {
  this.currentSession && (this.currentSession.modeState.currentUIState = t, this.currentSession.updatedAt = Date.now());
}, setGeneratedDescription(t) {
  this.currentSession && (this.currentSession.modeState.generatedDescription = t, this.currentSession.updatedAt = Date.now());
}, setGeneratedJson(t) {
  this.currentSession && (this.currentSession.modeState.generatedJson = t, this.currentSession.updatedAt = Date.now());
}, updateGeneratedJsonField(t, s) {
  var _a2;
  ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.generatedJson) && (this.currentSession.modeState.generatedJson[t] = s, this.currentSession.updatedAt = Date.now());
}, setDescriptionConfirmed(t) {
  this.currentSession && (this.currentSession.modeState.descriptionConfirmed = t, this.currentSession.updatedAt = Date.now());
}, setLoading(t) {
  this.isLoading = t;
}, setStreamingContent(t) {
  this.streamingContent = t;
}, clearStreamingContent() {
  this.streamingContent = "";
}, endSession() {
  this.currentSession = null, this.isLoading = false, this.streamingContent = "";
}, resetSession() {
  this.currentSession && (this.currentSession.modeState = Zs(), this.currentSession.updatedAt = Date.now()), this.isLoading = false, this.streamingContent = "";
} }), Ti = `\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u7684\u89D2\u8272\u521B\u5EFA\u987E\u95EE\u3002\u4F60\u7684\u4EFB\u52A1\u662F\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u7528\u6237\u521B\u5EFA\u4E00\u4E2A AI \u89D2\u8272\u5361\u3002

\u4F60\u9700\u8981\u6536\u96C6\u4EE5\u4E0B\u4FE1\u606F\uFF1A
1. \u89D2\u8272\u7684\u57FA\u672C\u4FE1\u606F\uFF08\u540D\u5B57\u3001\u6027\u522B\u3001\u5E74\u9F84\u7B49\uFF09
2. \u89D2\u8272\u7684\u5916\u8C8C\u7279\u5F81
3. \u89D2\u8272\u7684\u6027\u683C\u7279\u70B9
4. \u89D2\u8272\u7684\u80CC\u666F\u6545\u4E8B
5. \u89D2\u8272\u7684\u8BF4\u8BDD\u98CE\u683C\u548C\u53E3\u5934\u7985
6. \u89D2\u8272\u7684\u6280\u80FD\u6216\u7279\u6B8A\u80FD\u529B
7. \u89D2\u8272\u9002\u7528\u7684\u573A\u666F

\u8BF7\u7528\u53CB\u597D\u3001\u4E13\u4E1A\u7684\u8BED\u6C14\u4E0E\u7528\u6237\u4EA4\u6D41\uFF0C\u4E00\u6B21\u53EA\u95EE 1-2 \u4E2A\u95EE\u9898\uFF0C\u907F\u514D\u8BA9\u7528\u6237\u611F\u5230\u538B\u529B\u3002
\u6839\u636E\u7528\u6237\u7684\u56DE\u7B54\u7075\u6D3B\u8C03\u6574\u95EE\u9898\uFF0C\u6DF1\u5165\u6316\u6398\u89D2\u8272\u7684\u7EC6\u8282\u3002
\u5F53\u4F60\u8BA4\u4E3A\u6536\u96C6\u7684\u4FE1\u606F\u8DB3\u591F\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u89D2\u8272\u65F6\uFF0C\u5728\u56DE\u590D\u7684\u672B\u5C3E\u6DFB\u52A0 [INFO_COMPLETE] \u6807\u8BB0\u3002`, Mi = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u4E00\u4EFD\u5B8C\u6574\u7684\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\u3002
\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA\uFF1A

## \u89D2\u8272\u540D\u79F0
[\u89D2\u8272\u540D\u5B57]

## \u57FA\u672C\u4FE1\u606F
[\u5E74\u9F84\u3001\u6027\u522B\u7B49\u57FA\u672C\u4FE1\u606F]

## \u5916\u8C8C\u7279\u5F81
[\u5916\u8C8C\u63CF\u8FF0]

## \u6027\u683C\u7279\u70B9
[\u6027\u683C\u63CF\u8FF0]

## \u80CC\u666F\u6545\u4E8B
[\u80CC\u666F\u6545\u4E8B]

## \u8BF4\u8BDD\u98CE\u683C
[\u8BF4\u8BDD\u65B9\u5F0F\u3001\u53E3\u5934\u7985\u7B49]

## \u6280\u80FD\u4E0E\u80FD\u529B
[\u7279\u6B8A\u6280\u80FD\u6216\u80FD\u529B]

## \u9002\u7528\u573A\u666F
[\u89D2\u8272\u9002\u5408\u7684\u5BF9\u8BDD\u573A\u666F]

\u8BF7\u786E\u4FDD\u63CF\u8FF0\u8BE6\u7EC6\u3001\u751F\u52A8\uFF0C\u80FD\u591F\u5B8C\u6574\u5448\u73B0\u8FD9\u4E2A\u89D2\u8272\u7684\u5F62\u8C61\u3002`, Pi = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u548C\u89D2\u8272\u63CF\u8FF0\uFF0C\u751F\u6210\u4E00\u4E2A\u7B26\u5408\u89C4\u8303\u7684\u89D2\u8272\u5361 JSON\u3002

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

\u786E\u4FDD JSON \u683C\u5F0F\u6B63\u786E\uFF0C\u6240\u6709\u5B57\u6BB5\u90FD\u6709\u5408\u9002\u7684\u5185\u5BB9\u3002`;
function Ai() {
  const t = ns(), s = ne(), a = f.useRef(false), n = ke(P), r = f.useCallback(async (d) => {
    if (!(a.current || !P.currentSession)) try {
      a.current = true, P.setLoading(true), P.addUserMessage(d);
      const u = P.currentSession.modeState.currentUIState;
      (u === "idle" || u === "interview_waiting") && P.setUIState("interview_running");
      const l = P.getMessages(), h = [{ id: L(), role: "system", content: Ti }, ...l.map((y) => ({ id: y.id, role: y.role, content: y.content }))];
      let p = "";
      P.clearStreamingContent(), await t.callLLMStream(h, (y, b) => {
        p = b, P.setStreamingContent(b);
      });
      const x = p.includes("[INFO_COMPLETE]"), j = p.replace("[INFO_COMPLETE]", "").trim();
      P.addAssistantMessage(j), P.clearStreamingContent(), x ? P.setUIState("description_confirming") : P.setUIState("interview_waiting");
    } catch (u) {
      console.error("Chat Create Character Error:", u), $.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", { duration: 5e3, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => s({ to: "/config/llm" }) } }), P.setUIState("interview_waiting");
    } finally {
      a.current = false, P.setLoading(false);
    }
  }, [t, s]), i = f.useCallback(async () => {
    if (!(a.current || !P.currentSession)) try {
      a.current = true, P.setLoading(true), P.setUIState("description_generating");
      const d = P.getMessages(), u = [{ id: L(), role: "system", content: Mi }, ...d.map((h) => ({ id: h.id, role: h.role, content: h.content })), { id: L(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\u3002" }];
      let l = "";
      P.clearStreamingContent(), await t.callLLMStream(u, (h, p) => {
        l = p, P.setStreamingContent(p);
      }), P.setGeneratedDescription(l), P.addAssistantMessage(l, "description_summary"), P.clearStreamingContent(), P.setUIState("description_confirming");
    } catch (d) {
      console.error("Generate Description Error:", d), $.error("\u751F\u6210\u63CF\u8FF0\u5931\u8D25"), P.setUIState("interview_waiting");
    } finally {
      a.current = false, P.setLoading(false);
    }
  }, [t]), o = f.useCallback(async () => {
    if (!(a.current || !P.currentSession)) try {
      a.current = true, P.setLoading(true), P.setUIState("json_generating");
      const d = P.getMessages(), u = P.currentSession.modeState.generatedDescription, l = [{ id: L(), role: "system", content: Pi }, ...d.map((p) => ({ id: p.id, role: p.role, content: p.content }))];
      u && l.push({ id: L(), role: "assistant", content: `\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3\uFF1A
${u}` }), l.push({ id: L(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u4FE1\u606F\uFF0C\u751F\u6210\u89D2\u8272\u5361 JSON\u3002\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\u3002" });
      let h = "";
      await t.callLLMStream(l, (p, x) => {
        h = x, P.setStreamingContent(x);
      });
      try {
        let p = h;
        const x = h.match(/```(?:json)?\s*([\s\S]*?)```/);
        x && (p = x[1].trim());
        const j = JSON.parse(p), y = Date.now(), b = { id: `char-${y}`, name: j.name || "\u672A\u547D\u540D\u89D2\u8272", description: j.description || "", personality: j.personality || "", scenario: j.scenario || "", first_mes: j.first_mes || "", mes_example: j.mes_example || "", creator_notes: j.creator_notes || "", system_prompt: j.system_prompt || "", post_history_instructions: j.post_history_instructions || "", alternate_greetings: j.alternate_greetings || [], group_only_greetings: j.group_only_greetings || [], tags: j.tags || [], extensions: j.extensions || {}, creator: "User", character_version: "1.0", createdAt: y, updatedAt: y };
        P.setGeneratedJson(b), P.clearStreamingContent(), P.setUIState("json_editing"), $.success("\u89D2\u8272\u5361\u751F\u6210\u6210\u529F\uFF01");
      } catch (p) {
        console.error("JSON Parse Error:", p), $.error("JSON \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), P.setUIState("description_confirming");
      }
    } catch (d) {
      console.error("Generate JSON Error:", d), $.error("\u751F\u6210\u89D2\u8272\u5361\u5931\u8D25"), P.setUIState("description_confirming");
    } finally {
      a.current = false, P.setLoading(false);
    }
  }, [t]), m = f.useCallback(() => {
    P.setUIState("json_confirmed");
  }, []), c = f.useCallback(async () => {
    await o();
  }, [o]);
  return { store: n, sendMessage: r, generateDescription: i, generateJson: o, confirmJson: m, regenerateJson: c, isLoading: n.isLoading, streamingContent: n.streamingContent };
}
function ed() {
  var _a2, _b, _c2, _d;
  const t = ne(), s = ke(P), { sendMessage: a, generateDescription: n, generateJson: r, confirmJson: i, regenerateJson: o, isLoading: m, streamingContent: c } = Ai(), [d, u] = f.useState("");
  f.useEffect(() => (P.currentSession || P.startNewSession(), () => {
  }), []);
  const l = ((_a2 = s.currentSession) == null ? void 0 : _a2.modeState.currentUIState) ?? "idle", h = Ci[l], p = ((_b = s.currentSession) == null ? void 0 : _b.modeState.messages) ?? [], x = (_c2 = s.currentSession) == null ? void 0 : _c2.modeState.generatedJson, j = f.useCallback(async () => {
    if (!d.trim() || m) return;
    const v = d.trim();
    u(""), await a(v);
  }, [d, m, a]), y = f.useCallback((v) => {
    v.key === "Enter" && !v.shiftKey && (v.preventDefault(), j());
  }, [j]), b = f.useCallback(() => {
    if (!x) return;
    const v = new Blob([JSON.stringify(x, null, 2)], { type: "application/json" }), k = URL.createObjectURL(v), J = document.createElement("a");
    J.href = k, J.download = `${x.name || "character"}.json`, J.click(), URL.revokeObjectURL(k), $.success("\u89D2\u8272\u5361\u5DF2\u5BFC\u51FA");
  }, [x]), S = f.useCallback(async () => {
    if (x) try {
      const v = JSON.parse(JSON.stringify(x));
      await te.characters.add(v), $.success(`\u89D2\u8272 ${v.name} \u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A`), P.setUIState("completed"), t({ to: "/plaza/characters" });
    } catch (v) {
      console.error("Add to plaza error:", v), $.error("\u6DFB\u52A0\u5931\u8D25");
    }
  }, [x, t]), w = f.useCallback(() => {
    P.endSession(), t({ to: "/create" });
  }, [t]), N = f.useCallback(() => {
    P.resetSession();
  }, []);
  return e.jsxs("div", { className: "flex flex-col h-full max-h-[calc(100vh-4rem)]", children: [e.jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx(_, { type: "button", variant: "ghost", size: "icon", onClick: w, children: e.jsx(Is, { className: "w-5 h-5" }) }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-lg font-semibold", children: "\u804A\u5929\u5F0F\u521B\u5EFA\u89D2\u8272" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u521B\u5EFA\u89D2\u8272\u5361" })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(B, { variant: "outline", children: h.label }), p.length > 0 && e.jsx(_, { type: "button", variant: "outline", size: "sm", onClick: N, children: "\u91CD\u65B0\u5F00\u59CB" })] })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [p.length === 0 && !c && e.jsxs("div", { className: "text-center text-muted-foreground py-12", children: [e.jsx(we, { className: "w-12 h-12 mx-auto mb-4 opacity-50" }), e.jsx("p", { children: "\u5F00\u59CB\u63CF\u8FF0\u4F60\u60F3\u521B\u5EFA\u7684\u89D2\u8272\u5427\uFF01" }), e.jsx("p", { className: "text-sm mt-2", children: "\u4F8B\u5982\uFF1A\u6211\u60F3\u521B\u5EFA\u4E00\u4E2A\u6E29\u67D4\u7684\u56FE\u4E66\u9986\u7BA1\u7406\u5458..." })] }), p.map((v) => e.jsxs("div", { className: R("max-w-[80%] rounded-lg p-3", v.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"), children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: v.content }), v.messageType === "description_summary" && e.jsx(B, { variant: "secondary", className: "mt-2", children: "\u89D2\u8272\u63CF\u8FF0\u603B\u7ED3" })] }, v.id)), c && e.jsxs("div", { className: "max-w-[80%] rounded-lg p-3 bg-muted", children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: c }), e.jsx("span", { className: "inline-block w-2 h-4 bg-foreground/50 animate-pulse ml-1" })] })] }), e.jsxs("div", { className: "p-4 border-t space-y-3", children: [e.jsxs("div", { className: "flex flex-wrap gap-2", children: [l === "description_confirming" && e.jsxs(e.Fragment, { children: [e.jsxs(_, { type: "button", size: "sm", onClick: r, disabled: m, children: [e.jsx(Qe, { className: "w-4 h-4 mr-1" }), "\u786E\u8BA4\u5E76\u751F\u6210\u89D2\u8272\u5361"] }), e.jsxs(_, { type: "button", size: "sm", variant: "outline", onClick: n, disabled: m, children: [e.jsx(Kt, { className: "w-4 h-4 mr-1" }), "\u91CD\u65B0\u751F\u6210\u63CF\u8FF0"] })] }), (l === "interview_waiting" || l === "idle") && p.length > 2 && e.jsxs(_, { type: "button", size: "sm", variant: "secondary", onClick: r, disabled: m, children: [e.jsx(we, { className: "w-4 h-4 mr-1" }), "\u7ACB\u5373\u751F\u6210\u89D2\u8272\u5361"] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(Y, { value: d, onChange: (v) => u(v.target.value), onKeyDown: y, placeholder: h.placeholder, disabled: !h.inputEnabled || m, className: "min-h-[60px] max-h-[120px] resize-none" }), e.jsx(_, { type: "button", size: "icon", onClick: j, disabled: !h.inputEnabled || m || !d.trim(), children: e.jsx(ot, { className: "w-4 h-4" }) })] })] })] }), (l === "json_editing" || l === "json_confirmed" || l === "completed") && x && e.jsxs("div", { className: "w-96 border-l overflow-y-auto p-4 space-y-4", children: [e.jsxs(W, { children: [e.jsx(Z, { className: "pb-2", children: e.jsxs(Q, { className: "text-base flex items-center justify-between", children: ["\u89D2\u8272\u5361\u9884\u89C8", e.jsx("div", { className: "flex gap-1", children: e.jsx(_, { type: "button", size: "icon", variant: "ghost", onClick: o, disabled: m, title: "\u91CD\u65B0\u751F\u6210", children: e.jsx(Kt, { className: "w-4 h-4" }) }) })] }) }), e.jsxs(K, { className: "space-y-3", children: [e.jsx(Ye, { label: "\u540D\u79F0", value: x.name, onChange: (v) => P.updateGeneratedJsonField("name", v) }), e.jsx(Ye, { label: "\u63CF\u8FF0", value: x.description, multiline: true, onChange: (v) => P.updateGeneratedJsonField("description", v) }), e.jsx(Ye, { label: "\u6027\u683C", value: x.personality, onChange: (v) => P.updateGeneratedJsonField("personality", v) }), e.jsx(Ye, { label: "\u573A\u666F", value: x.scenario, onChange: (v) => P.updateGeneratedJsonField("scenario", v) }), e.jsx(Ye, { label: "\u5F00\u573A\u767D", value: x.first_mes, multiline: true, onChange: (v) => P.updateGeneratedJsonField("first_mes", v) }), e.jsx(Ye, { label: "\u7CFB\u7EDF\u63D0\u793A\u8BCD", value: x.system_prompt, multiline: true, onChange: (v) => P.updateGeneratedJsonField("system_prompt", v) }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u6807\u7B7E" }), e.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: (_d = x.tags) == null ? void 0 : _d.map((v, k) => e.jsx(B, { variant: "secondary", className: "text-xs", children: v }, k)) })] })] })] }), l !== "completed" && e.jsxs("div", { className: "flex flex-col gap-2", children: [e.jsxs(_, { type: "button", onClick: S, className: "w-full", children: [e.jsx(xe, { className: "w-4 h-4 mr-2" }), "\u6DFB\u52A0\u5230\u5E7F\u573A"] }), e.jsxs(_, { type: "button", variant: "outline", onClick: b, className: "w-full", children: [e.jsx(Cs, { className: "w-4 h-4 mr-2" }), "\u5BFC\u51FA\u4E3A\u6587\u4EF6"] }), l === "json_editing" && e.jsxs(_, { type: "button", variant: "secondary", onClick: i, className: "w-full", children: [e.jsx(Qe, { className: "w-4 h-4 mr-2" }), "\u786E\u8BA4\u5B8C\u6210\u7F16\u8F91"] })] }), l === "completed" && e.jsxs("div", { className: "text-center text-muted-foreground py-4", children: [e.jsx(Qe, { className: "w-8 h-8 mx-auto mb-2 text-green-500" }), e.jsx("p", { children: "\u89D2\u8272\u5361\u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A\uFF01" })] })] })] })] });
}
function Ye({ label: t, value: s, multiline: a = false, onChange: n }) {
  const [r, i] = f.useState(false), [o, m] = f.useState(s), c = () => {
    n(o), i(false);
  }, d = () => {
    m(s), i(false);
  };
  return r ? e.jsxs("div", { className: "space-y-1", children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: t }), a ? e.jsx(Y, { value: o, onChange: (u) => m(u.target.value), className: "text-sm min-h-[60px]", autoFocus: true }) : e.jsx("input", { type: "text", value: o, onChange: (u) => m(u.target.value), className: "w-full text-sm border rounded px-2 py-1 bg-background", autoFocus: true }), e.jsxs("div", { className: "flex gap-1", children: [e.jsx(_, { type: "button", size: "sm", variant: "ghost", onClick: c, children: "\u4FDD\u5B58" }), e.jsx(_, { type: "button", size: "sm", variant: "ghost", onClick: d, children: "\u53D6\u6D88" })] })] }) : e.jsxs("div", { className: "cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors", onClick: () => {
    m(s), i(true);
  }, children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: t }), e.jsx("p", { className: R("text-sm", a ? "whitespace-pre-wrap line-clamp-3" : "truncate"), children: s || e.jsx("span", { className: "text-muted-foreground italic", children: "\u70B9\u51FB\u7F16\u8F91" }) })] });
}
const Ei = G(["idle", "interview_running", "interview_waiting", "description_generating", "description_confirming", "json_generating", "json_editing", "json_confirmed", "completed"]), $i = { idle: { label: "\u5F00\u59CB", placeholder: "\u63CF\u8FF0\u4E00\u4E0B\u4F60\u60F3\u521B\u5EFA\u7684\u6311\u6218\u5427...", inputEnabled: true }, interview_running: { label: "\u52A9\u7406\u56DE\u590D\u4E2D", placeholder: "\u52A9\u7406\u6B63\u5728\u601D\u8003...", inputEnabled: false }, interview_waiting: { label: "\u7EE7\u7EED\u63CF\u8FF0", placeholder: "\u7EE7\u7EED\u63CF\u8FF0\u4F60\u7684\u6311\u6218\uFF0C\u6216\u56DE\u7B54\u52A9\u7406\u7684\u95EE\u9898...", inputEnabled: true }, description_generating: { label: "\u751F\u6210\u8BBE\u8BA1\u4E2D", placeholder: "\u6B63\u5728\u6574\u7406\u6311\u6218\u8BBE\u8BA1...", inputEnabled: false }, description_confirming: { label: "\u786E\u8BA4\u8BBE\u8BA1", placeholder: "\u786E\u8BA4\u8BBE\u8BA1\u65E0\u8BEF\uFF0C\u6216\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9...", inputEnabled: true }, json_generating: { label: "\u751F\u6210\u6311\u6218\u5361\u4E2D", placeholder: "\u6B63\u5728\u751F\u6210\u6311\u6218\u5361\u6570\u636E...", inputEnabled: false }, json_editing: { label: "\u7F16\u8F91\u6311\u6218\u5361", placeholder: "\u544A\u8BC9\u6211\u9700\u8981\u4FEE\u6539\u7684\u5730\u65B9\uFF0C\u6216\u76F4\u63A5\u5728\u53F3\u4FA7\u7F16\u8F91...", inputEnabled: true }, json_confirmed: { label: "\u6311\u6218\u5361\u5DF2\u5C31\u7EEA", placeholder: "\u6311\u6218\u5361\u5DF2\u751F\u6210\uFF0C\u53EF\u4EE5\u5BFC\u51FA\u6216\u6DFB\u52A0\u5230\u5E7F\u573A", inputEnabled: false }, completed: { label: "\u5B8C\u6210", placeholder: "\u6311\u6218\u5361\u521B\u5EFA\u5B8C\u6210\uFF01", inputEnabled: false } }, Li = D({ id: g().describe("\u6D88\u606FID"), role: G(["user", "assistant", "system"]).describe("\u6D88\u606F\u89D2\u8272"), content: g().describe("\u6D88\u606F\u5185\u5BB9"), timestamp: C().describe("\u65F6\u95F4\u6233"), messageType: G(["chat", "description_summary", "json_preview"]).optional().describe("\u6D88\u606F\u7C7B\u578B") }), Ri = D({ presetHint: g().optional().describe("\u9884\u8BBE\u7684\u6311\u6218\u7C7B\u578B\u63D0\u793A"), preselectedCharacterId: g().optional().describe("\u9884\u9009\u7684\u89D2\u8272 ID") }), Oi = D({ currentUIState: Ei.describe("\u5F53\u524D UI \u72B6\u6001"), messages: X(Li).describe("\u5BF9\u8BDD\u5386\u53F2"), generatedDescription: g().optional().describe("\u751F\u6210\u7684\u8BBE\u8BA1\u603B\u7ED3"), generatedJson: Wa.optional().describe("\u751F\u6210\u7684\u6311\u6218\u5361 JSON"), descriptionConfirmed: O().default(false).describe("\u7528\u6237\u662F\u5426\u5DF2\u786E\u8BA4\u8BBE\u8BA1") });
D({ id: g().describe("\u4F1A\u8BDDID"), mode: V("chat-create-challenge").describe("\u6A21\u5F0F\u6807\u8BC6"), modeConfig: Ri.describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: Oi.describe("\u6A21\u5F0F\u72B6\u6001"), createdAt: C().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: C().describe("\u66F4\u65B0\u65F6\u95F4") });
function Qs() {
  return { currentUIState: "idle", messages: [], descriptionConfirmed: false };
}
const A = le({ currentSession: null, isLoading: false, streamingContent: "", startNewSession(t, s) {
  const a = Date.now(), n = { id: `chat-create-chal-${a}`, mode: "chat-create-challenge", modeConfig: { presetHint: t, preselectedCharacterId: s }, modeState: Qs(), createdAt: a, updatedAt: a };
  return this.currentSession = n, this.isLoading = false, this.streamingContent = "", n;
}, getState() {
  var _a2;
  return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState) ?? null;
}, getMessages() {
  var _a2;
  return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.messages) ?? [];
}, addUserMessage(t) {
  const s = { id: L(), role: "user", content: t, timestamp: Date.now(), messageType: "chat" };
  return this.currentSession && (this.currentSession.modeState.messages.push(s), this.currentSession.updatedAt = Date.now()), s;
}, addAssistantMessage(t, s = "chat") {
  const a = { id: L(), role: "assistant", content: t, timestamp: Date.now(), messageType: s };
  return this.currentSession && (this.currentSession.modeState.messages.push(a), this.currentSession.updatedAt = Date.now()), a;
}, setUIState(t) {
  this.currentSession && (this.currentSession.modeState.currentUIState = t, this.currentSession.updatedAt = Date.now());
}, setGeneratedDescription(t) {
  this.currentSession && (this.currentSession.modeState.generatedDescription = t, this.currentSession.updatedAt = Date.now());
}, setGeneratedJson(t) {
  this.currentSession && (this.currentSession.modeState.generatedJson = t, this.currentSession.updatedAt = Date.now());
}, updateGeneratedJsonField(t, s) {
  var _a2;
  ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.generatedJson) && (this.currentSession.modeState.generatedJson[t] = s, this.currentSession.updatedAt = Date.now());
}, setDescriptionConfirmed(t) {
  this.currentSession && (this.currentSession.modeState.descriptionConfirmed = t, this.currentSession.updatedAt = Date.now());
}, setLoading(t) {
  this.isLoading = t;
}, setStreamingContent(t) {
  this.streamingContent = t;
}, clearStreamingContent() {
  this.streamingContent = "";
}, endSession() {
  this.currentSession = null, this.isLoading = false, this.streamingContent = "";
}, resetSession() {
  this.currentSession && (this.currentSession.modeState = Qs(), this.currentSession.updatedAt = Date.now()), this.isLoading = false, this.streamingContent = "";
} }), Fi = `\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u7684\u6311\u6218\u8BBE\u8BA1\u987E\u95EE\u3002\u4F60\u7684\u4EFB\u52A1\u662F\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u7528\u6237\u521B\u5EFA\u4E00\u4E2A\u6311\u6218\u5361\u3002

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
\u5F53\u4F60\u8BA4\u4E3A\u6536\u96C6\u7684\u4FE1\u606F\u8DB3\u591F\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u6311\u6218\u65F6\uFF0C\u5728\u56DE\u590D\u7684\u672B\u5C3E\u6DFB\u52A0 [INFO_COMPLETE] \u6807\u8BB0\u3002`, Ui = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u4E00\u4EFD\u5B8C\u6574\u7684\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3\u3002
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

\u8BF7\u786E\u4FDD\u8BBE\u8BA1\u5408\u7406\u3001\u5E73\u8861\uFF0C\u80FD\u591F\u5E26\u6765\u6709\u8DA3\u7684\u6E38\u620F\u4F53\u9A8C\u3002`, Hi = `\u6839\u636E\u4E4B\u524D\u7684\u5BF9\u8BDD\u548C\u6311\u6218\u8BBE\u8BA1\uFF0C\u751F\u6210\u4E00\u4E2A\u7B26\u5408\u89C4\u8303\u7684\u6311\u6218\u5361 JSON\u3002

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
function Bi() {
  const t = ns(), s = ne(), a = f.useRef(false), n = ke(A), r = f.useCallback(async (d) => {
    if (!(a.current || !A.currentSession)) try {
      a.current = true, A.setLoading(true), A.addUserMessage(d);
      const u = A.currentSession.modeState.currentUIState;
      (u === "idle" || u === "interview_waiting") && A.setUIState("interview_running");
      const l = A.getMessages(), h = [{ id: L(), role: "system", content: Fi }, ...l.map((y) => ({ id: y.id, role: y.role, content: y.content }))];
      let p = "";
      A.clearStreamingContent(), await t.callLLMStream(h, (y, b) => {
        p = b, A.setStreamingContent(b);
      });
      const x = p.includes("[INFO_COMPLETE]"), j = p.replace("[INFO_COMPLETE]", "").trim();
      A.addAssistantMessage(j), A.clearStreamingContent(), x ? A.setUIState("description_confirming") : A.setUIState("interview_waiting");
    } catch (u) {
      console.error("Chat Create Challenge Error:", u), $.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", { duration: 5e3, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => s({ to: "/config/llm" }) } }), A.setUIState("interview_waiting");
    } finally {
      a.current = false, A.setLoading(false);
    }
  }, [t, s]), i = f.useCallback(async () => {
    if (!(a.current || !A.currentSession)) try {
      a.current = true, A.setLoading(true), A.setUIState("description_generating");
      const d = A.getMessages(), u = [{ id: L(), role: "system", content: Ui }, ...d.map((h) => ({ id: h.id, role: h.role, content: h.content })), { id: L(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u5BF9\u8BDD\u5185\u5BB9\uFF0C\u751F\u6210\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3\u3002" }];
      let l = "";
      A.clearStreamingContent(), await t.callLLMStream(u, (h, p) => {
        l = p, A.setStreamingContent(p);
      }), A.setGeneratedDescription(l), A.addAssistantMessage(l, "description_summary"), A.clearStreamingContent(), A.setUIState("description_confirming");
    } catch (d) {
      console.error("Generate Description Error:", d), $.error("\u751F\u6210\u8BBE\u8BA1\u603B\u7ED3\u5931\u8D25"), A.setUIState("interview_waiting");
    } finally {
      a.current = false, A.setLoading(false);
    }
  }, [t]), o = f.useCallback(async () => {
    if (!(a.current || !A.currentSession)) try {
      a.current = true, A.setLoading(true), A.setUIState("json_generating");
      const d = A.getMessages(), u = A.currentSession.modeState.generatedDescription, l = [{ id: L(), role: "system", content: Hi }, ...d.map((p) => ({ id: p.id, role: p.role, content: p.content }))];
      u && l.push({ id: L(), role: "assistant", content: `\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3\uFF1A
${u}` }), l.push({ id: L(), role: "user", content: "\u8BF7\u6839\u636E\u4EE5\u4E0A\u4FE1\u606F\uFF0C\u751F\u6210\u6311\u6218\u5361 JSON\u3002\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u6709\u5176\u4ED6\u5185\u5BB9\u3002" });
      let h = "";
      await t.callLLMStream(l, (p, x) => {
        h = x, A.setStreamingContent(x);
      });
      try {
        let p = h;
        const x = h.match(/```(?:json)?\s*([\s\S]*?)```/);
        x && (p = x[1].trim());
        const j = JSON.parse(p), y = Date.now(), b = { id: `chal-${y}`, name: j.name || "\u672A\u547D\u540D\u6311\u6218", description: j.description || "", characterId: j.characterId || "", roleTaskPrompt: j.roleTaskPrompt || "", userGuidance: j.userGuidance || "", variables: j.variables || {}, goals: j.goals || [], failureChecks: j.failureChecks || [], tags: j.tags || [], createdAt: y, updatedAt: y };
        A.setGeneratedJson(b), A.clearStreamingContent(), A.setUIState("json_editing"), $.success("\u6311\u6218\u5361\u751F\u6210\u6210\u529F\uFF01");
      } catch (p) {
        console.error("JSON Parse Error:", p), $.error("JSON \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), A.setUIState("description_confirming");
      }
    } catch (d) {
      console.error("Generate JSON Error:", d), $.error("\u751F\u6210\u6311\u6218\u5361\u5931\u8D25"), A.setUIState("description_confirming");
    } finally {
      a.current = false, A.setLoading(false);
    }
  }, [t]), m = f.useCallback(() => {
    A.setUIState("json_confirmed");
  }, []), c = f.useCallback(async () => {
    await o();
  }, [o]);
  return { store: n, sendMessage: r, generateDescription: i, generateJson: o, confirmJson: m, regenerateJson: c, isLoading: n.isLoading, streamingContent: n.streamingContent };
}
function td() {
  var _a2, _b, _c2, _d;
  const t = ne(), s = ke(A), { sendMessage: a, generateDescription: n, generateJson: r, confirmJson: i, regenerateJson: o, isLoading: m, streamingContent: c } = Bi(), [d, u] = f.useState("");
  f.useEffect(() => (A.currentSession || A.startNewSession(), () => {
  }), []);
  const l = ((_a2 = s.currentSession) == null ? void 0 : _a2.modeState.currentUIState) ?? "idle", h = $i[l], p = ((_b = s.currentSession) == null ? void 0 : _b.modeState.messages) ?? [], x = (_c2 = s.currentSession) == null ? void 0 : _c2.modeState.generatedJson, j = f.useCallback(async () => {
    if (!d.trim() || m) return;
    const v = d.trim();
    u(""), await a(v);
  }, [d, m, a]), y = f.useCallback((v) => {
    v.key === "Enter" && !v.shiftKey && (v.preventDefault(), j());
  }, [j]), b = f.useCallback(() => {
    if (!x) return;
    const v = new Blob([JSON.stringify(x, null, 2)], { type: "application/json" }), k = URL.createObjectURL(v), J = document.createElement("a");
    J.href = k, J.download = `${x.name || "challenge"}.json`, J.click(), URL.revokeObjectURL(k), $.success("\u6311\u6218\u5361\u5DF2\u5BFC\u51FA");
  }, [x]), S = f.useCallback(async () => {
    if (x) try {
      const v = JSON.parse(JSON.stringify(x));
      await te.challenges.add(v), $.success(`\u6311\u6218 ${v.name} \u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A`), A.setUIState("completed"), t({ to: "/plaza/challenges" });
    } catch (v) {
      console.error("Add to plaza error:", v), $.error("\u6DFB\u52A0\u5931\u8D25");
    }
  }, [x, t]), w = f.useCallback(() => {
    A.endSession(), t({ to: "/create" });
  }, [t]), N = f.useCallback(() => {
    A.resetSession();
  }, []);
  return e.jsxs("div", { className: "flex flex-col h-full max-h-[calc(100vh-4rem)]", children: [e.jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx(_, { type: "button", variant: "ghost", size: "icon", onClick: w, children: e.jsx(Is, { className: "w-5 h-5" }) }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-lg font-semibold", children: "\u804A\u5929\u5F0F\u521B\u5EFA\u6311\u6218" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u901A\u8FC7\u5BF9\u8BDD\u5F15\u5BFC\u521B\u5EFA\u6311\u6218\u5361" })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(B, { variant: "outline", children: h.label }), p.length > 0 && e.jsx(_, { type: "button", variant: "outline", size: "sm", onClick: N, children: "\u91CD\u65B0\u5F00\u59CB" })] })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [p.length === 0 && !c && e.jsxs("div", { className: "text-center text-muted-foreground py-12", children: [e.jsx(we, { className: "w-12 h-12 mx-auto mb-4 opacity-50" }), e.jsx("p", { children: "\u5F00\u59CB\u63CF\u8FF0\u4F60\u60F3\u521B\u5EFA\u7684\u6311\u6218\u5427\uFF01" }), e.jsx("p", { className: "text-sm mt-2", children: "\u4F8B\u5982\uFF1A\u6211\u60F3\u521B\u5EFA\u4E00\u4E2A\u8BA8\u4EF7\u8FD8\u4EF7\u7684\u6311\u6218..." })] }), p.map((v) => e.jsxs("div", { className: R("max-w-[80%] rounded-lg p-3", v.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"), children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: v.content }), v.messageType === "description_summary" && e.jsx(B, { variant: "secondary", className: "mt-2", children: "\u6311\u6218\u8BBE\u8BA1\u603B\u7ED3" })] }, v.id)), c && e.jsxs("div", { className: "max-w-[80%] rounded-lg p-3 bg-muted", children: [e.jsx("div", { className: "whitespace-pre-wrap text-sm", children: c }), e.jsx("span", { className: "inline-block w-2 h-4 bg-foreground/50 animate-pulse ml-1" })] })] }), e.jsxs("div", { className: "p-4 border-t space-y-3", children: [e.jsxs("div", { className: "flex flex-wrap gap-2", children: [l === "description_confirming" && e.jsxs(e.Fragment, { children: [e.jsxs(_, { type: "button", size: "sm", onClick: r, disabled: m, children: [e.jsx(Qe, { className: "w-4 h-4 mr-1" }), "\u786E\u8BA4\u5E76\u751F\u6210\u6311\u6218\u5361"] }), e.jsxs(_, { type: "button", size: "sm", variant: "outline", onClick: n, disabled: m, children: [e.jsx(Kt, { className: "w-4 h-4 mr-1" }), "\u91CD\u65B0\u751F\u6210\u8BBE\u8BA1"] })] }), (l === "interview_waiting" || l === "idle") && p.length > 2 && e.jsxs(_, { type: "button", size: "sm", variant: "secondary", onClick: r, disabled: m, children: [e.jsx(we, { className: "w-4 h-4 mr-1" }), "\u7ACB\u5373\u751F\u6210\u6311\u6218\u5361"] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(Y, { value: d, onChange: (v) => u(v.target.value), onKeyDown: y, placeholder: h.placeholder, disabled: !h.inputEnabled || m, className: "min-h-[60px] max-h-[120px] resize-none" }), e.jsx(_, { type: "button", size: "icon", onClick: j, disabled: !h.inputEnabled || m || !d.trim(), children: e.jsx(ot, { className: "w-4 h-4" }) })] })] })] }), (l === "json_editing" || l === "json_confirmed" || l === "completed") && x && e.jsxs("div", { className: "w-96 border-l overflow-y-auto p-4 space-y-4", children: [e.jsxs(W, { children: [e.jsx(Z, { className: "pb-2", children: e.jsxs(Q, { className: "text-base flex items-center justify-between", children: ["\u6311\u6218\u5361\u9884\u89C8", e.jsx("div", { className: "flex gap-1", children: e.jsx(_, { type: "button", size: "icon", variant: "ghost", onClick: o, disabled: m, title: "\u91CD\u65B0\u751F\u6210", children: e.jsx(Kt, { className: "w-4 h-4" }) }) })] }) }), e.jsxs(K, { className: "space-y-3", children: [e.jsx(Jt, { label: "\u540D\u79F0", value: x.name, onChange: (v) => A.updateGeneratedJsonField("name", v) }), e.jsx(Jt, { label: "\u63CF\u8FF0", value: x.description, multiline: true, onChange: (v) => A.updateGeneratedJsonField("description", v) }), e.jsx(Jt, { label: "\u89D2\u8272\u884C\u4E3A\u6307\u5BFC", value: x.roleTaskPrompt, multiline: true, onChange: (v) => A.updateGeneratedJsonField("roleTaskPrompt", v) }), e.jsx(Jt, { label: "\u73A9\u5BB6\u5F15\u5BFC", value: x.userGuidance, multiline: true, onChange: (v) => A.updateGeneratedJsonField("userGuidance", v) }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u53D8\u91CF" }), e.jsx("div", { className: "mt-1 space-y-1", children: Object.entries(x.variables || {}).map(([v, k]) => e.jsxs("div", { className: "text-xs bg-muted rounded p-2", children: [e.jsx("span", { className: "font-medium", children: v }), e.jsxs("span", { className: "text-muted-foreground ml-2", children: ["\u521D\u59CB\u503C:", " ", String(k.initial ?? 0)] })] }, v)) })] }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u76EE\u6807" }), e.jsx("div", { className: "mt-1 space-y-1", children: (x.goals || []).map((v, k) => e.jsx("div", { className: "text-xs bg-muted rounded p-2", children: e.jsx("span", { className: "font-medium", children: v.description }) }, k)) })] }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u5931\u8D25\u6761\u4EF6" }), e.jsx("div", { className: "mt-1 space-y-1", children: (x.failureChecks || []).map((v, k) => e.jsx("div", { className: "text-xs bg-muted rounded p-2", children: e.jsx("span", { className: "font-medium", children: v.description }) }, k)) })] }), e.jsxs("div", { children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u6807\u7B7E" }), e.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: (_d = x.tags) == null ? void 0 : _d.map((v, k) => e.jsx(B, { variant: "secondary", className: "text-xs", children: v }, k)) })] })] })] }), l !== "completed" && e.jsxs("div", { className: "flex flex-col gap-2", children: [e.jsxs(_, { type: "button", onClick: S, className: "w-full", children: [e.jsx(xe, { className: "w-4 h-4 mr-2" }), "\u6DFB\u52A0\u5230\u5E7F\u573A"] }), e.jsxs(_, { type: "button", variant: "outline", onClick: b, className: "w-full", children: [e.jsx(Cs, { className: "w-4 h-4 mr-2" }), "\u5BFC\u51FA\u4E3A\u6587\u4EF6"] }), l === "json_editing" && e.jsxs(_, { type: "button", variant: "secondary", onClick: i, className: "w-full", children: [e.jsx(Qe, { className: "w-4 h-4 mr-2" }), "\u786E\u8BA4\u5B8C\u6210\u7F16\u8F91"] })] }), l === "completed" && e.jsxs("div", { className: "text-center text-muted-foreground py-4", children: [e.jsx(Qe, { className: "w-8 h-8 mx-auto mb-2 text-green-500" }), e.jsx("p", { children: "\u6311\u6218\u5361\u5DF2\u6DFB\u52A0\u5230\u5E7F\u573A\uFF01" })] })] })] })] });
}
function Jt({ label: t, value: s, multiline: a = false, onChange: n }) {
  const [r, i] = f.useState(false), [o, m] = f.useState(s), c = () => {
    n(o), i(false);
  }, d = () => {
    m(s), i(false);
  };
  return r ? e.jsxs("div", { className: "space-y-1", children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: t }), a ? e.jsx(Y, { value: o, onChange: (u) => m(u.target.value), className: "text-sm min-h-[60px]", autoFocus: true }) : e.jsx("input", { type: "text", value: o, onChange: (u) => m(u.target.value), className: "w-full text-sm border rounded px-2 py-1 bg-background", autoFocus: true }), e.jsxs("div", { className: "flex gap-1", children: [e.jsx(_, { type: "button", size: "sm", variant: "ghost", onClick: c, children: "\u4FDD\u5B58" }), e.jsx(_, { type: "button", size: "sm", variant: "ghost", onClick: d, children: "\u53D6\u6D88" })] })] }) : e.jsxs("div", { className: "cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors", onClick: () => {
    m(s), i(true);
  }, children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: t }), e.jsx("p", { className: R("text-sm", a ? "whitespace-pre-wrap line-clamp-3" : "truncate"), children: s || e.jsx("span", { className: "text-muted-foreground italic", children: "\u70B9\u51FB\u7F16\u8F91" }) })] });
}
const Gi = { keys: [], content: "", enabled: true, insertion_order: 100, use_regex: false, extensions: {} }, Ji = /[,，]/, zi = (t) => {
  var _a2;
  const [s, a] = f.useState(((_a2 = t.value) == null ? void 0 : _a2.entries) || []), [n, r] = f.useState(null), i = (u) => {
    var _a3;
    a(u), t.onChange({ ...t.value, entries: u, extensions: ((_a3 = t.value) == null ? void 0 : _a3.extensions) || {} });
  }, o = () => {
    const u = { ...Gi, id: crypto.randomUUID() };
    i([...s, u]), r(s.length);
  }, m = (u) => {
    i(s.filter((l, h) => h !== u)), n === u && r(null);
  }, c = (u, l) => {
    const h = [...s];
    h[u] = { ...h[u], ...l }, i(h);
  }, d = (u) => {
    r(n === u ? null : u);
  };
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h3", { className: "text-sm font-medium", children: ["\u77E5\u8BC6\u4E66\u6761\u76EE (", s.length, ")"] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u5F53\u5173\u952E\u8BCD\u5728\u5BF9\u8BDD\u4E2D\u5339\u914D\u65F6\uFF0C\u81EA\u52A8\u63D2\u5165\u76F8\u5173\u8BBE\u5B9A" })] }), e.jsxs(_, { variant: "outline", size: "sm", onClick: o, type: "button", className: "h-8", children: [e.jsx(xe, { className: "w-3.5 h-3.5 mr-1" }), " \u6DFB\u52A0\u6761\u76EE"] })] }), e.jsx("div", { className: "space-y-2", children: s.length === 0 ? e.jsxs("div", { className: "py-12 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(wt, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-xs", children: "\u6682\u65E0\u77E5\u8BC6\u4E66\u6761\u76EE" })] }) : s.map((u, l) => e.jsxs(W, { className: R("overflow-hidden border-muted/60 shadow-none transition-all", n === l ? "ring-1 ring-primary/20" : "hover:border-primary/20"), children: [e.jsxs("div", { className: "px-4 py-3 flex items-center justify-between cursor-pointer group", onClick: () => d(l), children: [e.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [e.jsx("div", { className: R("w-2 h-2 rounded-full", u.enabled ? "bg-green-500" : "bg-muted-foreground/30") }), e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [e.jsx("span", { className: "text-sm font-medium truncate", children: u.name || (u.keys.length > 0 ? u.keys.slice(0, 3).join(", ") : "(\u672A\u547D\u540D\u6761\u76EE)") }), e.jsxs("span", { className: "text-[10px] text-muted-foreground truncate", children: ["\u4F18\u5148\u7EA7: ", u.insertion_order, " | ", "use_regex" in u && u.use_regex ? "\u6B63\u5219" : "\u666E\u901A"] })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(_, { variant: "ghost", size: "icon", className: "h-8 w-8 text-destructive opacity-0 group-hover:opacity-100 transition-opacity", onClick: (h) => {
    h.stopPropagation(), m(l);
  }, type: "button", children: e.jsx(it, { className: "w-3.5 h-3.5" }) }), n === l ? e.jsx(er, { className: "w-4 h-4 text-muted-foreground" }) : e.jsx(wa, { className: "w-4 h-4 text-muted-foreground" })] })] }), n === l && e.jsxs(K, { className: "px-4 pb-4 pt-1 space-y-4 border-t border-muted/40 bg-muted/5 animate-in slide-in-from-top-2 duration-200", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { className: "text-xs", children: "\u6761\u76EE\u540D\u79F0 (\u53EF\u9009)" }), e.jsx(U, { value: u.name || "", onChange: (h) => c(l, { name: h.target.value }), placeholder: "\u7ED9\u6761\u76EE\u4E00\u4E2A\u4FBF\u4E8E\u8BC6\u522B\u7684\u540D\u5B57", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "flex items-end gap-6 h-8", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(et, { checked: u.enabled, onCheckedChange: (h) => c(l, { enabled: h }) }), e.jsx(I, { className: "text-xs", children: "\u542F\u7528\u72B6\u6001" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(et, { checked: "use_regex" in u ? u.use_regex : false, onCheckedChange: (h) => c(l, { use_regex: h }) }), e.jsx(I, { className: "text-xs", children: "\u6B63\u5219\u5339\u914D" })] })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(I, { className: "text-xs flex items-center gap-1.5", children: ["\u89E6\u53D1\u5173\u952E\u8BCD (Keys)", e.jsx(ss, { className: "w-3 h-3 text-muted-foreground" })] }), e.jsx(U, { value: u.keys.join(", "), onChange: (h) => c(l, { keys: h.target.value.split(Ji).map((p) => p.trim()).filter(Boolean) }), placeholder: "\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u5173\u952E\u8BCD", className: "h-8 text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { className: "text-xs", children: "\u5185\u5BB9 (Content)" }), e.jsx(Y, { value: u.content, onChange: (h) => c(l, { content: h.target.value }), placeholder: "\u5339\u914D\u65F6\u6CE8\u5165\u7684\u6587\u672C\u5185\u5BB9", className: "min-h-24 text-xs font-mono" })] }), e.jsx("div", { className: "grid grid-cols-2 gap-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { className: "text-xs", children: "\u63D2\u5165\u987A\u5E8F (Insertion Order)" }), e.jsx(U, { type: "number", value: u.insertion_order, onChange: (h) => c(l, { insertion_order: Number.parseInt(h.target.value) || 0 }), className: "h-8 text-xs" })] }) })] })] }, u.id || `entry-${l}`)) })] });
}, ms = { name: "", nickname: "", description: "", personality: "", scenario: "", first_mes: "", mes_example: "", system_prompt: "", post_history_instructions: "", creator_notes: "", creator: "", character_version: "1.0.0", tags: [], alternate_greetings: [], avatar: "", imageBase64: "", character_book: void 0 }, me = le({ formData: { ...ms }, updateField(t, s) {
  this.formData[t] = s;
}, setAvatar(t) {
  this.formData.avatar = t;
}, setLargeImage(t) {
  this.formData.imageBase64 = t;
}, addGreeting() {
  this.formData.alternate_greetings.push("");
}, updateGreeting(t, s) {
  t >= 0 && t < this.formData.alternate_greetings.length && (this.formData.alternate_greetings[t] = s);
}, removeGreeting(t) {
  t >= 0 && t < this.formData.alternate_greetings.length && this.formData.alternate_greetings.splice(t, 1);
}, setTags(t) {
  this.formData.tags = t;
}, loadInitialData(t) {
  t ? Object.assign(this.formData, { ...t, tags: t.tags || [], alternate_greetings: [...t.alternate_greetings || []], character_book: t.character_book ? { ...t.character_book, entries: t.character_book.entries.map((s) => ({ ...s, keys: [...s.keys], extensions: { ...s.extensions }, secondary_keys: s.secondary_keys ? [...s.secondary_keys] : void 0, comment: s.comment })), extensions: { ...t.character_book.extensions } } : void 0 }) : Object.assign(this.formData, ms);
}, resetForm() {
  Object.assign(this.formData, ms);
}, getFormDataForSave() {
  return pe(this.formData);
} }), Vi = /[,，]/, sd = (t) => {
  const { className: s } = t, a = t.mode || (t.initialData ? "edit" : "create"), n = f.useId(), r = f.useRef(null), i = f.useRef(null), o = ke(me), [m, c] = f.useState(false), [d, u] = f.useState(false);
  f.useEffect(() => {
    me.loadInitialData(t.initialData);
  }, [t.initialData]);
  const l = (S) => {
    const { name: w, value: N } = S.target;
    w === "tags" ? me.setTags(N.split(Vi).map((v) => v.trim()).filter(Boolean)) : me.updateField(w, N);
  }, h = (S) => {
    var _a2;
    const w = (_a2 = S.target.files) == null ? void 0 : _a2[0];
    if (w) {
      const N = new FileReader();
      N.onloadend = () => {
        me.setAvatar(N.result);
      }, N.readAsDataURL(w);
    }
  }, p = (S) => {
    var _a2;
    const w = (_a2 = S.target.files) == null ? void 0 : _a2[0];
    if (w) {
      const N = new FileReader();
      N.onloadend = () => {
        me.setLargeImage(N.result);
      }, N.readAsDataURL(w);
    }
  }, x = () => {
    me.addGreeting();
  }, j = (S, w) => {
    me.updateGreeting(S, w);
  }, y = (S) => {
    me.removeGreeting(S);
  }, b = (S) => {
    S.preventDefault(), t.onSave(me.getFormDataForSave());
  };
  return e.jsxs(W, { className: R("max-w-4xl mx-auto shadow-lg border-muted/60", s), children: [e.jsx(Z, { className: "pb-4", children: e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: e.jsx(He, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(Q, { className: "text-xl", children: a === "edit" ? "\u7F16\u8F91\u89D2\u8272" : "\u521B\u4F5C\u8005\u5DE5\u574A" }), e.jsx(ae, { children: a === "edit" ? "\u4FEE\u6539\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" : "\u5B9A\u4E49\u89D2\u8272\u7684\u7075\u9B42\u3001\u8BB0\u5FC6\u4E0E\u8A00\u8BED\u89C4\u5219" })] })] }) }) }), e.jsxs("form", { onSubmit: b, children: [e.jsx(K, { children: e.jsxs(Gn, { type: "multiple", defaultValue: ["identity", "dialogue", "prompt", "meta"], className: "w-full", children: [e.jsxs(Ht, { className: "border-none", value: "identity", children: [e.jsx(Bt, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u8EAB\u4EFD\u8BBE\u5B9A" }) }), e.jsxs(Gt, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-start", children: [e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-32 h-32 rounded-2xl bg-muted border-2 border-dashed ${m ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a2;
    return (_a2 = r.current) == null ? void 0 : _a2.click();
  }, onDragOver: (S) => {
    S.preventDefault(), c(true);
  }, onDragLeave: () => c(false), onDrop: (S) => {
    var _a2, _b;
    S.preventDefault(), c(false);
    const w = (_a2 = S.dataTransfer.files) == null ? void 0 : _a2[0];
    if ((_b = w == null ? void 0 : w.type) == null ? void 0 : _b.startsWith("image/")) {
      const N = new FileReader();
      N.onloadend = () => {
        me.setAvatar(N.result);
      }, N.readAsDataURL(w);
    }
  }, children: [o.formData.avatar ? e.jsx("img", { src: o.formData.avatar, alt: "Avatar", className: "w-full h-full object-cover" }) : e.jsx(ys, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(xe, { className: "w-6 h-6 text-white" }) })] }), e.jsx(U, { type: "file", ref: r, className: "hidden", accept: "image/*", onChange: h }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5934\u50CF" })] }), e.jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0", children: [e.jsxs("div", { className: `w-64 h-32 rounded-2xl bg-muted border-2 border-dashed ${d ? "border-primary" : "border-primary/20"} flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors overflow-hidden relative group`, onClick: () => {
    var _a2;
    return (_a2 = i.current) == null ? void 0 : _a2.click();
  }, onDragOver: (S) => {
    S.preventDefault(), u(true);
  }, onDragLeave: () => u(false), onDrop: (S) => {
    var _a2, _b;
    S.preventDefault(), u(false);
    const w = (_a2 = S.dataTransfer.files) == null ? void 0 : _a2[0];
    if ((_b = w == null ? void 0 : w.type) == null ? void 0 : _b.startsWith("image/")) {
      const N = new FileReader();
      N.onloadend = () => {
        me.setLargeImage(N.result);
      }, N.readAsDataURL(w);
    }
  }, children: [o.formData.imageBase64 ? e.jsx("img", { src: o.formData.imageBase64, alt: "\u89D2\u8272\u5927\u56FE", className: "w-full h-full object-cover" }) : e.jsx(ys, { className: "w-8 h-8 text-muted-foreground/40" }), e.jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: e.jsx(xe, { className: "w-6 h-6 text-white" }) })] }), e.jsx(U, { type: "file", ref: i, className: "hidden", accept: "image/*", onChange: p }), e.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "\u4E0A\u4F20\u89D2\u8272\u5927\u56FE" })] }), e.jsxs("div", { className: "grow space-y-4 w-full", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${n}-name`, children: "\u57FA\u672C\u540D\u79F0 (Name)" }), e.jsx(U, { id: `${n}-name`, name: "name", value: o.formData.name, onChange: l, placeholder: "\u5982\uFF1A\u827E\u7433", required: true })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${n}-nickname`, children: "\u5934\u8854/\u6635\u79F0 (Nickname)" }), e.jsx(U, { id: `${n}-nickname`, name: "nickname", value: o.formData.nickname, onChange: l, placeholder: "\u5982\uFF1A\u6668\u66E6\u4E4B\u5203" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${n}-tags`, children: "\u68C0\u7D22\u6807\u7B7E (Tags)" }), e.jsx(U, { id: `${n}-tags`, name: "tags", value: o.formData.tags.join(", "), onChange: l, placeholder: "\u7528\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u5947\u5E7B, \u7CBE\u7075, \u6218\u58EB" })] })] })] }), e.jsxs("div", { className: "space-y-4 pt-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${n}-personality`, children: "\u4EBA\u683C/\u6027\u683C (Personality)" }), e.jsx(Y, { id: `${n}-personality`, name: "personality", value: o.formData.personality, onChange: l, placeholder: "\u8BE6\u7EC6\u63CF\u8FF0\u89D2\u8272\u7684\u6027\u683C\u3001\u602A\u7656\u3001\u601D\u7EF4\u903B\u8F91\u7B49", className: "min-h-32 leading-relaxed" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${n}-description`, children: "\u8EAB\u4E16/\u63CF\u8FF0 (Description)" }), e.jsx(Y, { id: `${n}-description`, name: "description", value: o.formData.description, onChange: l, placeholder: "\u89D2\u8272\u7684\u8FC7\u5F80\u3001\u5916\u8C8C\u63CF\u8FF0\u4E0E\u80CC\u666F\u6545\u4E8B", className: "min-h-32 leading-relaxed" })] })] })] })] }), e.jsxs(Ht, { className: "border-none", value: "dialogue", children: [e.jsx(Bt, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5BF9\u8BDD\u5199\u4F5C" }) }), e.jsxs(Gt, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(I, { htmlFor: `${n}-first_mes`, className: "flex items-center gap-2", children: [e.jsx(Ds, { className: "w-4 h-4 text-primary" }), "\u5F00\u573A\u8BED (First Message)"] }), e.jsx(Y, { id: `${n}-first_mes`, name: "first_mes", value: o.formData.first_mes, onChange: l, placeholder: "\u8FDB\u5165\u5BF9\u8BDD\u540E\u89D2\u8272\u7684\u7B2C\u4E00\u53E5\u8BDD", className: "min-h-32" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx(I, { className: "text-sm", children: "\u5907\u7528\u95EE\u5019\u8BED (Alternate Greetings)" }), e.jsxs(_, { variant: "ghost", size: "sm", onClick: x, type: "button", className: "h-8 rounded-lg", children: [e.jsx(xe, { className: "w-3 h-3 mr-1" }), " \u6DFB\u52A0"] })] }), e.jsx("div", { className: "space-y-2", children: o.formData.alternate_greetings.map((S, w) => e.jsxs("div", { className: "flex gap-2", children: [e.jsx(Y, { value: S, onChange: (N) => j(w, N.target.value), placeholder: `\u95EE\u5019\u8BED\u5019\u9009 ${w + 1}`, className: "min-h-16 text-sm" }), e.jsx(_, { variant: "ghost", size: "icon", onClick: () => y(w), type: "button", className: "h-10 w-10 text-destructive shrink-0", children: e.jsx(it, { className: "w-4 h-4" }) })] }, `greeting-${w}-${S.length}`)) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${n}-scenario`, children: "\u5BF9\u8BDD\u573A\u666F\u8BBE\u5B9A (Scenario)" }), e.jsx(Y, { id: `${n}-scenario`, name: "scenario", value: o.formData.scenario, onChange: l, placeholder: "\u5B9A\u4E49\u5F00\u573A\u65F6\u6240\u5904\u7684\u7279\u5B9A\u73AF\u5883\u6216\u5F53\u524D\u53D1\u751F\u7684\u4E8B\u4EF6", className: "min-h-24" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${n}-mes_example`, children: "\u4E66\u5199\u98CE\u683C\u793A\u4F8B (Message Examples)" }), e.jsxs(ae, { className: "text-xs mb-2", children: ["\u4F7F\u7528 <START> \u5F00\u59CB\u4E00\u6BB5\u793A\u4F8B\uFF0C", "{{user}}", " \u4EE3\u8868\u7528\u6237"] }), e.jsx(Y, { id: `${n}-mes_example`, name: "mes_example", value: o.formData.mes_example, onChange: l, placeholder: "<START>\\n{{user}}: \u4F60\u662F\u8C01\uFF1F\\n\u89D2\u8272: \u6211\u662F...", className: "min-h-48 font-mono text-xs" })] })] })] }), e.jsxs(Ht, { className: "border-none", value: "prompt", children: [e.jsx(Bt, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "Prompt \u6A21\u677F" }) }), e.jsxs(Gt, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(I, { htmlFor: `${n}-system_prompt`, className: "flex items-center gap-2", children: [e.jsx(Ct, { className: "w-4 h-4 text-blue-500" }), "\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD (System Prompt Override)"] }), e.jsx(Y, { id: `${n}-system_prompt`, name: "system_prompt", value: o.formData.system_prompt, onChange: l, placeholder: "\u8986\u76D6\u89D2\u8272\u7684\u5168\u5C40\u7CFB\u7EDF\u63D0\u793A\u8BCD...", className: "min-h-48 font-mono text-xs" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(I, { htmlFor: `${n}-post_history_instructions`, className: "flex items-center gap-2", children: [e.jsx(Ct, { className: "w-4 h-4 text-purple-500" }), "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"] }), e.jsx(Y, { id: `${n}-post_history_instructions`, name: "post_history_instructions", value: o.formData.post_history_instructions, onChange: l, placeholder: "\u7D27\u968F\u5BF9\u8BDD\u5386\u53F2\u540E\u7684\u7279\u5B9A\u6307\u4EE4\uFF08\u5F3A\u5236\u8F93\u51FA\u683C\u5F0F\u7B49\uFF09", className: "min-h-32 font-mono text-xs" })] })] })] }), e.jsxs(Ht, { className: "border-none", value: "meta", children: [e.jsx(Bt, { className: "bg-background my-4 p-4 items-center rounded-xl text-xl", children: e.jsx("div", { children: "\u5143\u6570\u636E/\u5907\u6CE8" }) }), e.jsxs(Gt, { className: "pt-4 pb-8 space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${n}-creator`, children: "\u5361\u7247\u521B\u5EFA\u8005 (Creator)" }), e.jsx(U, { id: `${n}-creator`, name: "creator", value: o.formData.creator, onChange: l, placeholder: "\u60A8\u7684\u540D\u5B57\u6216 ID" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${n}-character_version`, children: "\u89D2\u8272\u7248\u672C (Version)" }), e.jsx(U, { id: `${n}-character_version`, name: "character_version", value: o.formData.character_version, onChange: l, placeholder: "1.0.0" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${n}-creator_notes`, children: "\u521B\u5EFA\u8005\u5907\u6CE8 (Creator Notes)" }), e.jsx(Y, { id: `${n}-creator_notes`, name: "creator_notes", value: o.formData.creator_notes, onChange: l, placeholder: "\u8BB0\u4E0B\u6709\u5173\u6B64\u89D2\u8272\u5361\u7684\u5F00\u53D1\u7B14\u8BB0\uFF0C\u4EC5\u5728\u5DE5\u574A\u53EF\u89C1", className: "min-h-32" })] }), e.jsx("div", { className: "pt-4", children: e.jsx(zi, { value: o.formData.character_book, onChange: (S) => me.updateField("character_book", S) }) })] })] })] }) }), e.jsxs(ws, { className: "flex justify-between border-t py-6 bg-muted/10", children: [e.jsxs(_, { variant: "ghost", type: "button", onClick: t.onCancel, className: "rounded-lg h-11 px-6", children: [e.jsx(Pt, { className: "w-4 h-4 mr-2" }), " ", "\u653E\u5F03\u4FEE\u6539"] }), e.jsxs(_, { type: "submit", className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20", children: [e.jsx(Ca, { className: "w-4 h-4 mr-2" }), " ", a === "edit" ? "\u4FDD\u5B58\u4FEE\u6539" : "\u751F\u6210\u5E76\u4FDD\u5B58\u89D2\u8272\u5361"] })] })] })] });
}, Wi = ["isTrue", "isFalse", "eq", "neq", "gt", "gte", "lt", "lte", "includes", "has"], ea = ["and", "or"], an = (t) => {
  const { condition: s, variables: a, onChange: n, level: r = 0 } = t, i = s[0], o = Object.keys(a), m = (l) => {
    ea.includes(l) ? n([l, [s]]) : ["isTrue", "isFalse"].includes(l) ? n([l, o[0] || ""]) : n([l, o[0] || "", ""]);
  };
  if (ea.includes(i)) {
    const l = s[1];
    return e.jsxs("div", { className: `p-4 border rounded-lg space-y-4 bg-muted/5 ${r > 0 ? "ml-6" : ""}`, children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(B, { variant: "outline", className: "bg-primary/5", children: "\u590D\u5408\u903B\u8F91" }), e.jsxs(gt, { value: i, onValueChange: (h) => m(h), children: [e.jsx(ft, { className: "h-8 w-24", children: e.jsx(yt, {}) }), e.jsxs(bt, { children: [e.jsx(je, { value: "and", children: "\u5E76\u4E14 (AND)" }), e.jsx(je, { value: "or", children: "\u6216\u8005 (OR)" })] })] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(_, { variant: "outline", size: "sm", className: "h-7 text-[10px]", onClick: () => n([...l[0]]), type: "button", children: "\u8F6C\u4E3A\u5355\u4E00\u6761\u4EF6" }), e.jsxs(_, { variant: "outline", size: "sm", className: "h-7 text-[10px]", onClick: () => n([i, [...l, ["isTrue", o[0] || ""]]]), type: "button", children: [e.jsx(xe, { className: "w-3 h-3 mr-1" }), " \u6DFB\u52A0\u5B50\u6761\u4EF6"] })] })] }), e.jsx("div", { className: "space-y-3", children: l.map((h, p) => e.jsxs("div", { className: "relative group", children: [e.jsx(an, { condition: h, variables: a, level: r + 1, onChange: (x) => {
      const j = [...l];
      j[p] = x, n([i, j]);
    } }), e.jsx(_, { variant: "ghost", size: "icon", className: "absolute -right-2 top-0 h-6 w-6 text-destructive opacity-0 group-hover:opacity-100", onClick: () => {
      const x = l.filter((j, y) => y !== p);
      x.length === 0 ? m("isTrue") : n([i, x]);
    }, type: "button", children: e.jsx(it, { className: "w-3 h-3" }) })] }, p)) })] });
  }
  const d = s[1], u = s[2];
  return e.jsxs("div", { className: `flex flex-wrap items-center gap-2 p-2 border rounded-md bg-background ${r > 0 ? "ml-6" : ""}`, children: [e.jsxs(gt, { value: d, onValueChange: (l) => {
    const h = [...s];
    h[1] = l, n(h);
  }, children: [e.jsx(ft, { className: "h-8 w-40 overflow-hidden", children: e.jsx(yt, { placeholder: "\u9009\u62E9\u53D8\u91CF" }) }), e.jsx(bt, { children: o.map((l) => e.jsx(je, { value: l, children: l }, l)) })] }), e.jsxs(gt, { value: i, onValueChange: (l) => m(l), children: [e.jsx(ft, { className: "h-8 w-28", children: e.jsx(yt, {}) }), e.jsx(bt, { children: Wi.map((l) => e.jsx(je, { value: l, children: l }, l)) })] }), !["isTrue", "isFalse"].includes(i) && e.jsx(U, { value: String(u ?? ""), onChange: (l) => {
    const h = [...s];
    let p = l.target.value;
    p === "true" ? p = true : p === "false" ? p = false : !isNaN(Number(p)) && p.trim() !== "" && (p = Number(p)), h[2] = p, n(h);
  }, placeholder: "\u76EE\u6807\u503C", className: "h-8 w-32 text-xs" }), e.jsx("div", { className: "ml-auto flex gap-1", children: e.jsx(_, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: () => m("and"), type: "button", children: e.jsx(ka, { className: "w-4 h-4" }) }) })] });
}, ta = (t) => {
  const { variables: s, title: a = "\u4EFB\u52A1\u76EE\u6807", description: n = "\u5B9A\u4E49\u6311\u6218\u6A21\u5F0F\u4E0B\u9700\u8981\u8FBE\u6210\u7684\u91CC\u7A0B\u7891" } = t, [r, i] = f.useState(t.value || []), o = (u) => {
    i(u), t.onChange(u);
  }, m = () => {
    const u = { key: `goal_${L(5)}`, description: "", condition: ["eq", Object.keys(s)[0] || "", ""], characterPrompt: "", userInfo: "" };
    o([...r, u]);
  }, c = (u) => {
    o(r.filter((l) => l.key !== u));
  }, d = (u, l) => {
    o(r.map((h) => h.key === u ? { ...h, ...l } : h));
  };
  return e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("h3", { className: "text-sm font-medium", children: [a, " (", r.length, ")"] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: n })] }), e.jsxs(_, { variant: "outline", size: "sm", onClick: m, type: "button", className: "h-8", children: [e.jsx(xe, { className: "w-3.5 h-3.5 mr-1" }), " \u6DFB\u52A0\u9879"] })] }), e.jsx("div", { className: "space-y-3", children: r.length === 0 ? e.jsxs("div", { className: "py-8 border border-dashed rounded-lg flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(Mt, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-xs", children: "\u6682\u65E0\u914D\u7F6E\u9879" })] }) : r.map((u) => e.jsx(W, { className: "border-muted/60 shadow-none", children: e.jsx(K, { className: "p-4 space-y-4", children: e.jsxs("div", { className: "flex gap-4", children: [e.jsxs("div", { className: "grow space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(I, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx(st, { className: "w-3 h-3" }), " \u552F\u4E00\u6807\u8BC6 (Key)"] }), e.jsx(U, { value: u.key, onChange: (l) => d(u.key, { key: l.target.value }), placeholder: "\u552F\u4E00\u8BC6\u522B\u7801", className: "h-9 text-sm font-mono" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(I, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx(tr, { className: "w-3 h-3" }), " \u663E\u793A\u63CF\u8FF0"] }), e.jsx(U, { value: u.description, onChange: (l) => d(u.key, { description: l.target.value }), placeholder: "\u4F8B\u5982\uFF1A\u8BF4\u670D\u827E\u7433\u653E\u4E0B\u6B66\u5668", className: "h-9 text-sm" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(I, { className: "text-xs flex items-center gap-1.5 font-bold", children: [e.jsx(st, { className: "w-3 h-3" }), " \u89E6\u53D1\u6761\u4EF6 (\u7ED3\u6784\u5316\u903B\u8F91)"] }), e.jsx(an, { condition: u.condition, variables: s, onChange: (l) => d(u.key, { condition: l }) })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(I, { className: "text-xs flex items-center gap-1.5 font-bold opacity-70", children: [e.jsx(Ds, { className: "w-3 h-3" }), " \u89D2\u8272\u63D0\u793A (\u89E6\u53D1\u540E)"] }), e.jsx(Y, { value: u.characterPrompt || "", onChange: (l) => d(u.key, { characterPrompt: l.target.value }), placeholder: "\u89E6\u53D1\u540E\u5BF9\u89D2\u8272\u7684\u989D\u5916\u6307\u4EE4...", className: "min-h-15 text-xs resize-none" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(I, { className: "text-xs flex items-center gap-1.5 font-bold opacity-70", children: [e.jsx(ss, { className: "w-3 h-3" }), " \u7528\u6237\u6D88\u606F (\u89E6\u53D1\u540E)"] }), e.jsx(Y, { value: u.userInfo || "", onChange: (l) => d(u.key, { userInfo: l.target.value }), placeholder: "\u89E6\u53D1\u540E\u663E\u793A\u7ED9\u7528\u6237\u7684\u4FE1\u606F...", className: "min-h-15 text-xs resize-none" })] })] })] }), e.jsx(_, { variant: "ghost", size: "icon", className: "h-8 w-8 text-destructive self-start", onClick: () => c(u.key), type: "button", children: e.jsx(it, { className: "w-3.5 h-3.5" }) })] }) }) }, u.key)) })] });
}, Ki = /[,，]/, qi = (t) => {
  const { variables: s, variableConfigs: a, onChange: n } = t, [r, i] = f.useState(""), o = () => {
    const d = r.trim();
    if (!d || s[d]) return;
    const u = { key: d, type: "number", hidden: false, initial: 0 }, l = 0;
    n({ ...s, [d]: { key: d, value: l } }, { ...a, [d]: u }), i("");
  }, m = (d) => {
    const u = { ...s };
    delete u[d];
    const l = { ...a };
    delete l[d], n(u, l);
  }, c = (d, u) => {
    const l = a[d];
    if (!l) return;
    let h = { ...l, ...u };
    u.type && u.type !== l.type && (u.type === "number" ? h = { key: d, type: "number", hidden: false, initial: 0 } : u.type === "boolean" ? h = { key: d, type: "boolean", hidden: false, initial: false } : u.type === "string" ? h = { key: d, type: "string", hidden: false, initial: "" } : u.type === "tags" && (h = { key: d, type: "tags", hidden: false, initial: [] }));
    const p = { ...a, [d]: h }, x = { ...s, [d]: { key: d, value: h.initial ?? 0 } };
    n(x, p);
  };
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex gap-2", children: [e.jsx("div", { className: "grow", children: e.jsx(U, { value: r, onChange: (d) => i(d.target.value), placeholder: "\u53D8\u91CF\u952E\u540D (\u5982\uFF1Atrust, points, health)", onKeyDown: (d) => {
    d.key === "Enter" && (d.preventDefault(), o());
  } }) }), e.jsxs(_, { onClick: o, type: "button", disabled: !r.trim() || !!s[r.trim()], children: [e.jsx(xe, { className: "w-4 h-4 mr-2" }), " \u6DFB\u52A0\u53D8\u91CF"] })] }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: Object.entries(a).length === 0 ? e.jsxs("div", { className: "col-span-full p-12 border border-dashed rounded-xl flex flex-col items-center justify-center text-muted-foreground bg-muted/5", children: [e.jsx(bs, { className: "w-8 h-8 mb-2 opacity-20" }), e.jsx("p", { className: "text-sm", children: "\u6682\u672A\u5B9A\u4E49\u4EFB\u4F55\u53D8\u91CF" })] }) : Object.entries(a).map(([d, u]) => e.jsxs(W, { className: "relative group border-muted/60 hover:border-primary/30 transition-colors", children: [e.jsx(_, { variant: "ghost", size: "icon", className: "absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity z-10", onClick: () => m(d), type: "button", children: e.jsx(it, { className: "w-3.5 h-3.5" }) }), e.jsxs(K, { className: "p-4 space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("div", { className: "bg-primary/10 p-1.5 rounded-lg", children: e.jsx(st, { className: "w-4 h-4 text-primary" }) }), e.jsx("span", { className: "font-bold text-sm truncate pr-8", children: d })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(I, { className: "text-[10px] uppercase text-muted-foreground font-bold", children: "\u6570\u636E\u7C7B\u578B" }), e.jsxs(gt, { value: u.type, onValueChange: (l) => c(d, { type: l }), children: [e.jsx(ft, { className: "h-8 text-sm", children: e.jsx(yt, {}) }), e.jsxs(bt, { children: [e.jsxs(je, { value: "number", className: "text-xs", children: [e.jsx(bs, { className: "w-3 h-3 inline mr-1" }), " \u6570\u503C"] }), e.jsxs(je, { value: "boolean", className: "text-xs", children: [e.jsx(sr, { className: "w-3 h-3 inline mr-1" }), " \u5E03\u5C14"] }), e.jsxs(je, { value: "string", className: "text-xs", children: [e.jsx(ar, { className: "w-3 h-3 inline mr-1" }), " \u6587\u672C"] }), e.jsxs(je, { value: "tags", className: "text-xs", children: [e.jsx(Ia, { className: "w-3 h-3 inline mr-1" }), " \u6807\u7B7E\u96C6\u5408"] })] })] })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(I, { className: "text-[10px] uppercase text-muted-foreground font-bold", children: "\u521D\u59CB\u503C (Initial)" }), u.type === "number" && e.jsx(U, { type: "number", value: u.initial, onChange: (l) => c(d, { initial: Number(l.target.value) }), className: "h-8 text-sm font-mono" }), u.type === "boolean" && e.jsxs("div", { className: "flex items-center gap-2 h-8", children: [e.jsx(et, { checked: u.initial, onCheckedChange: (l) => c(d, { initial: l }) }), e.jsx("span", { className: "text-xs font-medium", children: u.initial ? "\u5F00\u542F/\u771F" : "\u5173\u95ED/\u5047" })] }), u.type === "string" && e.jsx(U, { value: u.initial, onChange: (l) => c(d, { initial: l.target.value }), className: "h-8 text-sm" }), u.type === "tags" && e.jsx(U, { value: u.initial.join(", "), onChange: (l) => c(d, { initial: l.target.value.split(Ki).map((h) => h.trim()).filter(Boolean) }), placeholder: "\u9017\u53F7\u5206\u9694\u521D\u59CB\u6807\u7B7E", className: "h-8 text-sm" })] }), u.type === "number" && e.jsxs("div", { className: "grid grid-cols-2 gap-2 pt-1", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(I, { className: "text-[10px] text-muted-foreground", children: "\u6700\u5C0F\u503C" }), e.jsx(U, { type: "number", value: u.min ?? "", onChange: (l) => c(d, { min: l.target.value ? Number(l.target.value) : void 0 }), className: "h-7 text-[10px] px-2" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(I, { className: "text-[10px] text-muted-foreground", children: "\u6700\u5927\u503C" }), e.jsx(U, { type: "number", value: u.max ?? "", onChange: (l) => c(d, { max: l.target.value ? Number(l.target.value) : void 0 }), className: "h-7 text-[10px] px-2" })] })] })] })] })] }, d)) })] });
}, us = { id: "", characterId: "", roleTaskPrompt: "", userGuidance: "", name: "", description: "", goals: [], failureChecks: [], variables: {}, tags: [] }, hs = {}, ps = {}, be = le({ formData: { ...us }, variables: { ...hs }, variableConfigs: { ...ps }, updateField(t, s) {
  this.formData[t] = s;
}, setVariables(t) {
  this.variables = { ...t };
}, setVariableConfigs(t) {
  this.variableConfigs = { ...t };
}, updateVariablesAndConfigs(t, s) {
  this.variables = { ...t }, this.variableConfigs = { ...s };
}, setTags(t) {
  this.formData.tags = t;
}, loadInitialData(t) {
  t ? (Object.assign(this.formData, { ...t, goals: t.goals || [], failureChecks: t.failureChecks || [], variables: t.variables || {}, tags: t.tags || [], ...t.createdAt ? { createdAt: t.createdAt } : {}, ...t.updatedAt ? { updatedAt: t.updatedAt } : {} }), this.variableConfigs = t.variables || {}) : (Object.assign(this.formData, us), this.variables = { ...hs }, this.variableConfigs = { ...ps });
}, resetForm() {
  Object.assign(this.formData, us), this.variables = { ...hs }, this.variableConfigs = { ...ps };
}, getFormDataForSave() {
  return { ...pe(this.formData), variables: pe(this.variableConfigs) };
} }), Xi = /[,，]/, ad = (t) => {
  var _a2;
  const s = f.useId(), a = ke(be);
  f.useEffect(() => {
    be.loadInitialData(t.initialData);
  }, [t.initialData]);
  const n = (r) => {
    r.preventDefault(), t.onSave(be.getFormDataForSave());
  };
  return e.jsxs(W, { className: "max-w-4xl mx-auto shadow-lg border-muted/60", children: [e.jsx(Z, { className: "pb-4", children: e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: e.jsx(tt, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { children: [e.jsx(Q, { className: "text-xl", children: "\u6311\u6218\u8BBE\u8BA1\u5DE5\u4F5C\u5BA4" }), e.jsx(ae, { children: "\u8BBE\u8BA1\u5173\u5361\u76EE\u6807\u3001\u6570\u503C\u53D8\u91CF\u4E0E\u53D9\u4E8B\u89C4\u5219" })] })] }) }) }), e.jsxs("form", { onSubmit: n, children: [e.jsx(K, { children: e.jsxs(ya, { defaultValue: "base", className: "w-full", children: [e.jsxs(ba, { className: "grid grid-cols-4 w-full h-11 bg-muted/30 p-1 mb-8", children: [e.jsxs(Oe, { value: "base", className: "gap-2", children: [e.jsx(Ct, { className: "w-4 h-4" }), " \u57FA\u7840\u8BBE\u5B9A"] }), e.jsxs(Oe, { value: "goals", className: "gap-2", children: [e.jsx(nr, { className: "w-4 h-4" }), " \u4EFB\u52A1\u76EE\u6807"] }), e.jsxs(Oe, { value: "failures", className: "gap-2", children: [e.jsx(rr, { className: "w-4 h-4" }), " \u5931\u8D25\u6761\u4EF6"] }), e.jsxs(Oe, { value: "variables", className: "gap-2", children: [e.jsx(bs, { className: "w-4 h-4" }), " \u6570\u503C\u53D8\u91CF"] })] }), e.jsx(Fe, { value: "base", className: "space-y-6 animate-in fade-in-50 duration-300", children: e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${s}-name`, children: "\u6311\u6218\u540D\u79F0" }), e.jsx(U, { id: `${s}-name`, value: a.formData.name, onChange: (r) => be.updateField("name", r.target.value), placeholder: "\u5982\uFF1A\u8FF7\u5931\u4E4B\u57CE\u7684\u5951\u7EA6", required: true })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${s}-charId`, children: "\u7ED1\u5B9A\u89D2\u8272 ID" }), e.jsx(U, { id: `${s}-charId`, value: a.formData.characterId, onChange: (r) => be.updateField("characterId", r.target.value), placeholder: "\u4F8B\u5982: kallen-123", required: true })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${s}-desc`, children: "\u80CC\u666F\u4ECB\u7ECD\u4E0E\u89C4\u5219\u8BF4\u660E" }), e.jsx(Y, { id: `${s}-desc`, value: a.formData.description, onChange: (r) => be.updateField("description", r.target.value), placeholder: "\u63CF\u8FF0\u8BE5\u6311\u6218\u7684\u80CC\u666F\u6545\u4E8B\uFF0C\u4EE5\u53CA\u73A9\u5BB6\u9700\u8981\u9075\u5B88\u7684\u7279\u6B8A\u89C4\u5219...", className: "min-h-32 leading-relaxed" })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${s}-roleTask`, children: "\u89D2\u8272\u4EFB\u52A1\u63D0\u793A\u8BCD (DM\u89C6\u89D2)" }), e.jsx(Y, { id: `${s}-roleTask`, value: a.formData.roleTaskPrompt, onChange: (r) => be.updateField("roleTaskPrompt", r.target.value), placeholder: "\u5728\u8BE5\u6311\u6218\u4E2D\uFF0C\u901A\u8FC7AI\u7CFB\u7EDF\u53D1\u7ED9\u89D2\u8272\u7684\u7279\u6B8A\u6307\u4EE4...", className: "min-h-24 text-xs font-mono" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${s}-userGuidance`, children: "\u7528\u6237\u6307\u5F15\u8BF4\u660E" }), e.jsx(Y, { id: `${s}-userGuidance`, value: a.formData.userGuidance, onChange: (r) => be.updateField("userGuidance", r.target.value), placeholder: "\u7ED9\u8FDB\u5165\u6311\u6218\u7684\u7528\u6237\u7684\u6587\u5B57\u6307\u5F15...", className: "min-h-24 text-xs font-mono" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: `${s}-tags`, children: "\u6311\u6218\u6807\u7B7E (\u7528\u9017\u53F7\u5206\u9694)" }), e.jsx(U, { id: `${s}-tags`, value: (_a2 = a.formData.tags) == null ? void 0 : _a2.join(", "), onChange: (r) => be.setTags(r.target.value.split(Xi).map((i) => i.trim()).filter(Boolean)), placeholder: "\u5947\u5E7B, \u60AC\u7591, \u9AD8\u96BE\u5EA6" })] })] }) }), e.jsx(Fe, { value: "goals", className: "animate-in fade-in-50 duration-300", children: e.jsx(ta, { value: a.formData.goals, variables: a.variableConfigs, onChange: (r) => be.updateField("goals", r) }) }), e.jsx(Fe, { value: "failures", className: "animate-in fade-in-50 duration-300", children: e.jsx(ta, { title: "\u5931\u8D25\u68C0\u67E5", description: "\u5B9A\u4E49\u5BFC\u81F4\u6311\u6218\u5931\u8D25\u7684\u6761\u4EF6", value: a.formData.failureChecks, variables: a.variableConfigs, onChange: (r) => be.updateField("failureChecks", r) }) }), e.jsx(Fe, { value: "variables", className: "animate-in fade-in-50 duration-300", children: e.jsx(qi, { variables: a.variables, variableConfigs: a.variableConfigs, onChange: (r, i) => be.updateVariablesAndConfigs(r, i) }) })] }) }), e.jsxs(ws, { className: "flex justify-between border-t py-6 bg-muted/10", children: [e.jsxs(_, { variant: "ghost", type: "button", onClick: t.onCancel, className: "rounded-lg h-11 px-6", children: [e.jsx(Pt, { className: "w-4 h-4 mr-2" }), " \u653E\u5F03\u4FEE\u6539"] }), e.jsxs(_, { type: "submit", className: "rounded-lg h-11 px-10 shadow-lg shadow-primary/20", children: [e.jsx(Ca, { className: "w-4 h-4 mr-2" }), " \u4FDD\u5B58\u6311\u6218\u8BBE\u8BA1"] })] })] })] });
}, Yi = (t) => !t.lorebook || !t.lorebook.entries || t.lorebook.entries.length === 0 ? e.jsx(W, { className: "bg-muted/20 border-dashed", children: e.jsxs(K, { className: "py-10 flex flex-col items-center justify-center text-muted-foreground", children: [e.jsx(ir, { className: "w-10 h-10 mb-3 opacity-20" }), e.jsx("p", { className: "text-sm", children: "\u8BE5\u89D2\u8272\u6682\u65E0\u7ED1\u5B9A\u7684\u77E5\u8BC6\u4E66 (Lorebook)" })] }) }) : e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-wrap gap-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-muted/50 px-3 py-1.5 rounded-full border", children: [e.jsx(wt, { className: "w-3.5 h-3.5 text-primary" }), e.jsx("span", { className: "font-medium text-muted-foreground mr-1", children: "\u626B\u63CF\u6DF1\u5EA6:" }), t.lorebook.scan_depth ?? 50] }), e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-muted/50 px-3 py-1.5 rounded-full border", children: [e.jsx(ka, { className: "w-3.5 h-3.5 text-blue-500" }), e.jsx("span", { className: "font-medium text-muted-foreground mr-1", children: "Token \u9884\u7B97:" }), t.lorebook.token_budget ?? 500] }), t.lorebook.recursive_scanning && e.jsxs("div", { className: "flex items-center gap-2 text-xs bg-green-500/5 text-green-600 px-3 py-1.5 rounded-full border border-green-500/20", children: [e.jsx(or, { className: "w-3.5 h-3.5" }), "\u9012\u5F52\u626B\u63CF\u5DF2\u5F00\u542F"] })] }), e.jsx("div", { className: "grid grid-cols-1 gap-4", children: t.lorebook.entries.map((s, a) => e.jsx(W, { className: "overflow-hidden group hover:border-primary/40 transition-colors shadow-sm", children: e.jsxs("div", { className: "flex", children: [e.jsx("div", { className: "w-1 bg-primary group-hover:w-2 transition-all shrink-0" }), e.jsxs("div", { className: "grow", children: [e.jsxs(Z, { className: "py-4 flex flex-row items-start justify-between space-y-0", children: [e.jsxs("div", { className: "space-y-1.5 grow", children: [e.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [e.jsx(Q, { className: "text-base font-bold", children: s.name || `\u6761\u76EE ${a + 1}` }), !s.enabled && e.jsx(B, { variant: "secondary", children: "\u5DF2\u7981\u7528" }), s.constant && e.jsx(B, { variant: "outline", className: "text-amber-600 border-amber-200 bg-amber-50", children: "\u5E38\u91CF" })] }), e.jsx("div", { className: "flex flex-wrap gap-1.5", children: s.keys.map((n) => e.jsxs("div", { className: "flex items-center gap-1 bg-primary/5 text-[10px] text-primary px-1.5 py-0.5 rounded border border-primary/10 font-mono", children: [e.jsx(Ia, { className: "w-2.5 h-2.5" }), n] }, `key-${n}-${s.id || a}`)) })] }), e.jsxs("div", { className: "text-[10px] text-muted-foreground font-mono text-right shrink-0 ml-4", children: ["Order: ", s.insertion_order, " ", e.jsx("br", {}), "Pos: ", s.position === "before_char" ? "Before Char" : "After Char"] })] }), e.jsxs(K, { className: "pb-4", children: [e.jsx("div", { className: "text-sm bg-muted/30 p-3 rounded-lg border text-muted-foreground leading-relaxed whitespace-pre-wrap", children: s.content }), s.comment && e.jsxs("p", { className: "mt-2 text-[10px] text-muted-foreground italic flex items-center gap-1", children: [e.jsx(wt, { className: "w-2.5 h-2.5 opacity-50" }), "\u6CE8: ", s.comment] })] })] })] }) }, s.id || `entry-${a}`)) })] }), nd = (t) => e.jsx("div", { className: "space-y-6", children: e.jsxs(ya, { defaultValue: "basic", className: "w-full", children: [e.jsxs(ba, { className: "grid grid-cols-4 w-full h-11 bg-muted/30 p-1 mb-6", children: [e.jsx(Oe, { value: "basic", className: "data-[state=active]:bg-background", children: "\u57FA\u7840\u8BBE\u5B9A" }), e.jsx(Oe, { value: "prompt", className: "data-[state=active]:bg-background", children: "\u63D0\u793A\u8BCD\u6A21\u677F" }), e.jsx(Oe, { value: "lorebook", className: "data-[state=active]:bg-background", children: "\u77E5\u8BC6\u4E66" }), e.jsx(Oe, { value: "advanced", className: "data-[state=active]:bg-background", children: "\u9AD8\u7EA7/\u6269\u5C55" })] }), e.jsxs(Fe, { value: "basic", className: "space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [e.jsxs(W, { className: "shadow-xs border-muted/50", children: [e.jsx(Z, { className: "py-4", children: e.jsxs(Q, { className: "text-sm flex items-center gap-2", children: [e.jsx(He, { className: "w-4 h-4 text-primary" }), "\u4EBA\u683C\u4E0E\u8EAB\u4E16"] }) }), e.jsxs(K, { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(Ze, { children: "\u4EBA\u683C\u63CF\u8FF0 (Personality)" }), e.jsx(Ee, { children: t.character.personality })] }), e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(Ze, { children: "\u89D2\u8272\u63CF\u8FF0 (Description)" }), e.jsx(Ee, { children: t.character.description })] })] })] }), e.jsxs(W, { className: "shadow-xs border-muted/50", children: [e.jsx(Z, { className: "py-4", children: e.jsxs(Q, { className: "text-sm flex items-center gap-2", children: [e.jsx(Ds, { className: "w-4 h-4 text-green-500" }), "\u5F00\u573A\u8BED\u4E0E\u793A\u4F8B"] }) }), e.jsxs(K, { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(Ze, { children: "\u7B2C\u4E00\u6761\u6D88\u606F (First Message)" }), e.jsx(Ee, { variant: "primary", children: t.character.first_mes })] }), e.jsxs("div", { className: "space-y-1.5", children: [e.jsx(Ze, { children: "\u5BF9\u8BDD\u573A\u666F\u63CF\u8FF0 (Scenario)" }), e.jsx(Ee, { children: t.character.scenario })] }), t.character.alternate_greetings.length > 0 && e.jsxs("div", { className: "space-y-1.5", children: [e.jsxs(Ze, { children: ["\u5907\u7528\u95EE\u5019\u8BED (", t.character.alternate_greetings.length, ")"] }), e.jsx("div", { className: "space-y-2", children: t.character.alternate_greetings.map((s, a) => e.jsx(Ee, { className: "py-2 opacity-80", children: s }, `alt-greet-${a}-${s.length}`)) })] })] })] })] }), e.jsxs(W, { className: "shadow-xs border-muted/50", children: [e.jsx(Z, { className: "py-4", children: e.jsxs(Q, { className: "text-sm flex items-center gap-2", children: [e.jsx(cr, { className: "w-4 h-4 text-amber-500" }), "\u6D88\u606F\u793A\u4F8B (Message Examples)"] }) }), e.jsx(K, { children: e.jsx(Ee, { className: "font-mono text-xs", children: t.character.mes_example }) })] })] }), e.jsxs(Fe, { value: "prompt", className: "space-y-6 animate-in fade-in-50 duration-300", children: [e.jsxs(W, { className: "border-muted/50", children: [e.jsxs(Z, { className: "py-4", children: [e.jsxs(Q, { className: "text-sm flex items-center gap-2 text-blue-600", children: [e.jsx(Ct, { className: "w-4 h-4" }), "\u7CFB\u7EDF\u63D0\u793A\u8BCD\u6A21\u677F (System Prompt)"] }), e.jsx(ae, { className: "text-[11px]", children: "\u5C06\u63D2\u5165\u5230\u5BF9\u8BDD\u5386\u53F2\u7684\u6700\u524D\u65B9\uFF0C\u7528\u4E8E\u5B9A\u4E49\u89D2\u8272\u7684\u6838\u5FC3\u884C\u4E3A\u51C6\u5219\u3002" })] }), e.jsx(K, { children: e.jsx(Ee, { className: "font-mono text-xs bg-blue-500/2 border-blue-500/10", children: t.character.system_prompt || "\u4F7F\u7528\u5168\u5C40\u9ED8\u8BA4\u8BBE\u7F6E" }) })] }), e.jsxs(W, { className: "border-muted/50", children: [e.jsxs(Z, { className: "py-4", children: [e.jsxs(Q, { className: "text-sm flex items-center gap-2 text-purple-600", children: [e.jsx(lr, { className: "w-4 h-4" }), "\u5386\u53F2\u6307\u4EE4\u540E\u7F00 (Post-History Instructions)"] }), e.jsx(ae, { className: "text-[11px]", children: "\u5C06\u63D2\u5165\u5230\u6BCF\u6761\u8BF7\u6C42\u6D88\u606F\u4E4B\u540E\uFF0C\u7528\u4E8E\u5F3A\u5236 LLM \u9075\u5B88\u7279\u5B9A\u8F93\u51FA\u683C\u5F0F\u3002" })] }), e.jsx(K, { children: e.jsx(Ee, { className: "font-mono text-xs bg-purple-500/2 border-purple-500/10", children: t.character.post_history_instructions || "\u65E0\u7279\u5B9A\u6307\u4EE4" }) })] })] }), e.jsx(Fe, { value: "lorebook", className: "animate-in fade-in-50 duration-300", children: e.jsx(Yi, { lorebook: t.character.character_book }) }), e.jsx(Fe, { value: "advanced", className: "space-y-6 animate-in fade-in-50 duration-300", children: e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [e.jsxs(W, { className: "border-muted/50", children: [e.jsx(Z, { className: "py-4", children: e.jsx(Q, { className: "text-sm", children: "\u5143\u6570\u636E\u4FE1\u606F" }) }), e.jsxs(K, { className: "space-y-3", children: [e.jsx(zt, { label: "\u521B\u5EFA\u8005", value: t.character.creator }), e.jsx(zt, { label: "\u89D2\u8272\u7248\u672C", value: t.character.character_version }), e.jsx(zt, { label: "\u521B\u5EFA\u4E8E", value: t.character.createdAt ? new Date(t.character.createdAt).toLocaleString() : "-" }), e.jsx(zt, { label: "\u66F4\u65B0\u4E8E", value: t.character.updatedAt ? new Date(t.character.updatedAt).toLocaleString() : "-" }), e.jsxs("div", { className: "pt-2", children: [e.jsx(Ze, { children: "\u521B\u5EFA\u8005\u7B14\u8BB0 (Creator Notes)" }), e.jsx(Ee, { className: "mt-1 text-xs", children: t.character.creator_notes })] })] })] }), e.jsxs(W, { className: "border-muted/50", children: [e.jsx(Z, { className: "py-4", children: e.jsx(Q, { className: "text-sm", children: "\u6269\u5C55\u5B57\u6BB5 (Extensions)" }) }), e.jsx(K, { children: e.jsx("div", { className: "max-h-75 overflow-auto rounded-lg border bg-muted/20 p-4", children: e.jsx("pre", { className: "text-[10px] font-mono leading-tight", children: JSON.stringify(t.character.extensions, null, 2) }) }) })] })] }) })] }) }), Ze = (t) => e.jsx("span", { className: "text-[11px] font-bold text-muted-foreground/80 uppercase tracking-widest block", children: t.children }), Ee = (t) => e.jsx("div", { className: `text-sm rounded-lg border p-3 leading-relaxed whitespace-pre-wrap ${t.variant === "primary" ? "bg-primary/5 text-primary/90 border-primary/20 italic" : "bg-muted/30 text-muted-foreground/90 border-muted/50"} ${t.className || ""}`, children: t.children || e.jsx("span", { className: "opacity-30", children: "\u672A\u586B\u5199" }) }), zt = (t) => e.jsxs("div", { className: "flex justify-between items-center text-xs py-1.5 border-b border-muted/50 last:border-0", children: [e.jsx("span", { className: "text-muted-foreground", children: t.label }), e.jsx("span", { className: "font-mono font-medium", children: t.value ?? "-" })] }), rd = (t) => {
  const s = ne();
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs(W, { className: "border-primary/20 bg-primary/5", children: [e.jsxs(Z, { children: [e.jsxs(Q, { className: "text-lg flex items-center gap-2", children: [e.jsx(xe, { className: "w-5 h-5" }), "\u5F00\u542F\u65B0\u4F1A\u8BDD"] }), e.jsx(ae, { children: "\u9009\u62E9\u4E00\u4E2A\u6A21\u5F0F\u5F00\u59CB\u4E0E\u8BE5\u89D2\u8272\u7684\u6545\u4E8B" })] }), e.jsx(K, { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: ["chat", "challenge", "dnd", "group-chat"].map((a) => {
    const n = Xt(a), r = n.icon;
    return e.jsxs(_, { className: "h-auto py-4 flex flex-col items-center gap-2", variant: "outline", onClick: () => t.onStartNew(a), type: "button", children: [e.jsx(r, { className: `w-6 h-6 ${n.colorClass}` }), e.jsxs("div", { className: "text-center", children: [e.jsxs("div", { className: "font-bold", children: [n.label, "\u6A21\u5F0F"] }), e.jsx("div", { className: "text-[10px] text-muted-foreground", children: n.description })] })] }, a);
  }) })] }), e.jsxs(W, { children: [e.jsx(Z, { children: e.jsx(Q, { className: "text-lg", children: "\u5386\u53F2\u4F1A\u8BDD" }) }), e.jsx(K, { className: "space-y-3", children: t.sessions.length > 0 ? t.sessions.map((a) => e.jsxs(_, { className: "w-full justify-between items-center h-auto py-4 px-5 border hover:bg-muted/50 transition-colors", variant: "ghost", onClick: () => s({ to: "/session/$sessionId", params: { sessionId: a.id } }), type: "button", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: e.jsx(Da, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-left", children: [e.jsx("div", { className: "font-semibold", children: "\u7EE7\u7EED\u4E0A\u6B21\u6545\u4E8B" }), e.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: ["\u6700\u540E\u6D3B\u8DC3: ", new Date(a.updatedAt).toLocaleString()] })] })] }), e.jsx("div", { className: "flex flex-col items-end gap-2", children: e.jsx(B, { variant: a.mode === "chat" ? "secondary" : "default", className: "text-[10px]", children: Xt(a.mode).badgeText }) })] }, a.id)) : e.jsx("div", { className: "text-center py-10 border rounded-lg border-dashed", children: e.jsx("p", { className: "text-muted-foreground text-sm", children: "\u8FD8\u6CA1\u6709\u8BE5\u89D2\u8272\u7684\u5386\u53F2\u4F1A\u8BDD" }) }) })] })] });
};
function id({ character: t, trigger: s }) {
  const [a, n] = f.useState(false), [r, i] = f.useState(false), o = f.useId(), m = () => {
    try {
      const c = en(t, { includeImageBase64: r }), d = "data:text/json;charset=utf-8," + encodeURIComponent(c), u = document.createElement("a");
      u.setAttribute("href", d), u.setAttribute("download", `${t.name}.json`), document.body.appendChild(u), u.click(), u.remove(), $.success(`\u89D2\u8272 ${t.name} \u5DF2\u5BFC\u51FA\u4E3A JSON`), n(false);
    } catch (c) {
      $.error("\u5BFC\u51FA\u5931\u8D25"), console.error("Export error:", c);
    }
  };
  return e.jsxs(at, { open: a, onOpenChange: n, children: [e.jsx(fa, { asChild: true, children: s || e.jsxs(_, { variant: "outline", size: "sm", className: "flex items-center gap-2", type: "button", children: [e.jsx(Na, { className: "w-4 h-4" }), "\u5BFC\u51FA JSON"] }) }), e.jsxs(nt, { className: "sm:max-w-md", children: [e.jsx(rt, { children: e.jsx(We, { children: "\u5BFC\u51FA\u89D2\u8272\u4E3A JSON" }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("p", { className: "text-sm text-muted-foreground", children: ['\u5C06\u89D2\u8272 "', t.name, '" \u5BFC\u51FA\u4E3A JSON \u6587\u4EF6\u3002'] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(es, { id: `${o}-include-image-single`, checked: r, onCheckedChange: (c) => i(c === true) }), e.jsx(I, { htmlFor: `${o}-include-image-single`, className: "text-sm", children: "\u5305\u542B Base64 \u56FE\u50CF\u6570\u636E" })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: r ? "\u6587\u4EF6\u5C06\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5927\u4F46\u5B8C\u6574\u3002" : "\u6587\u4EF6\u4E0D\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5C0F\u4F46\u9700\u8981\u5355\u72EC\u5904\u7406\u56FE\u50CF\u3002" })] }), e.jsxs("div", { className: "flex justify-end gap-2", children: [e.jsx(_, { variant: "outline", onClick: () => n(false), children: "\u53D6\u6D88" }), e.jsx(_, { onClick: m, children: "\u5BFC\u51FA" })] })] })] });
}
const Zi = ({ onReady: t }) => {
  const s = ne(), [a, n] = f.useState(null);
  if (f.useEffect(() => {
    const o = Dt();
    if (n(o), o.isReady) {
      const m = setTimeout(() => t(), 600);
      return () => clearTimeout(m);
    }
  }, [t]), !a) return null;
  const r = [{ key: "baseUrl", label: "API \u5730\u5740" }, { key: "apiKey", label: "API \u5BC6\u94A5" }, { key: "model", label: "\u6A21\u578B\u9009\u62E9" }], i = new Set(a.missingItems.map((o) => o.key));
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx("h3", { className: "text-lg font-bold", children: "LLM \u914D\u7F6E\u68C0\u6D4B" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA\uFF0C\u786E\u4FDD\u4F1A\u8BDD\u53EF\u4EE5\u6B63\u5E38\u8FDB\u884C\u3002" })] }), e.jsx("div", { className: "space-y-3", children: r.map((o) => {
    const m = i.has(o.key), c = a.missingItems.find((d) => d.key === o.key);
    return e.jsxs("div", { className: R("flex items-center gap-3 p-3 rounded-xl border transition-colors", m ? "border-destructive/30 bg-destructive/5" : "border-primary/20 bg-primary/5"), children: [m ? e.jsx(Ta, { className: "w-5 h-5 text-destructive shrink-0" }) : e.jsx(kt, { className: "w-5 h-5 text-primary shrink-0" }), e.jsxs("div", { className: "flex-1 min-w-0", children: [e.jsx("div", { className: R("text-sm font-medium", m ? "text-destructive" : "text-foreground"), children: o.label }), m && c && e.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: c.description })] })] }, o.key);
  }) }), a.isReady ? e.jsxs("div", { className: "flex items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/20", children: [e.jsx(kt, { className: "w-5 h-5 text-primary shrink-0" }), e.jsx("span", { className: "text-sm font-medium text-primary", children: "\u6240\u6709\u914D\u7F6E\u5DF2\u5C31\u7EEA\uFF0C\u6B63\u5728\u8FDB\u5165\u4E0B\u4E00\u6B65..." })] }) : e.jsxs("div", { className: "flex flex-col gap-3", children: [e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E\u540E\u518D\u5F00\u59CB\u4F1A\u8BDD\u3002" }), e.jsxs("div", { className: "flex gap-3", children: [e.jsxs(_, { type: "button", variant: "default", className: "gap-2", onClick: () => s({ to: "/config/llm" }), children: [e.jsx(st, { className: "w-4 h-4" }), "\u524D\u5F80 LLM \u914D\u7F6E"] }), e.jsxs(_, { type: "button", variant: "outline", className: "gap-2", onClick: () => {
    const o = Dt();
    n(o), o.isReady && t();
  }, children: [e.jsx(Ma, { className: "w-4 h-4" }), "\u91CD\u65B0\u68C0\u6D4B"] })] })] })] });
};
function xs() {
  return { userName: "User", globalSystemPrompt: "" };
}
const Qi = ({ config: t, onChange: s, character: a }) => {
  var _a2;
  const n = f.useId(), r = f.useId(), i = !!((_a2 = a.system_prompt) == null ? void 0 : _a2.trim());
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h3", { className: "text-lg font-bold flex items-center gap-2", children: [e.jsx(va, { className: "w-5 h-5 text-primary" }), "\u804A\u5929\u4F1A\u8BDD\u914D\u7F6E"] }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u914D\u7F6E\u672C\u6B21\u4E0E ", e.jsx("span", { className: "font-medium text-foreground", children: a.name }), " \u7684\u804A\u5929\u4F1A\u8BDD\u53C2\u6570\u3002"] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: n, className: "text-sm font-medium", children: "\u4F60\u7684\u540D\u79F0" }), e.jsx(U, { id: n, value: t.userName, onChange: (o) => s({ ...t, userName: o.target.value }), placeholder: "\u8F93\u5165\u4F60\u5728\u5BF9\u8BDD\u4E2D\u7684\u540D\u79F0...", className: "max-w-xs" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u89D2\u8272\u5728\u5BF9\u8BDD\u4E2D\u5982\u4F55\u79F0\u547C\u4F60\u3002" })] }), i && e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-muted", children: [e.jsx(ss, { className: "w-4 h-4 text-muted-foreground shrink-0 mt-0.5" }), e.jsxs("div", { className: "text-xs text-muted-foreground space-y-1", children: [e.jsx("p", { className: "font-medium", children: "\u8BE5\u89D2\u8272\u81EA\u5E26\u7CFB\u7EDF\u63D0\u793A\u8BCD" }), e.jsx("p", { className: "line-clamp-2 italic", children: a.system_prompt })] })] }), e.jsxs(Jn, { children: [e.jsxs(zn, { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group w-full", children: [e.jsx(wa, { className: "w-4 h-4 transition-transform group-data-[state=open]:rotate-180" }), "\u9AD8\u7EA7\u914D\u7F6E"] }), e.jsx(Vn, { className: "pt-4 space-y-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { htmlFor: r, className: "text-sm font-medium", children: "\u9644\u52A0\u7CFB\u7EDF\u63D0\u793A\u8BCD" }), e.jsx(Y, { id: r, value: t.globalSystemPrompt, onChange: (o) => s({ ...t, globalSystemPrompt: o.target.value }), placeholder: "\u8F93\u5165\u989D\u5916\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u5C06\u8FFD\u52A0\u5230\u89D2\u8272\u5361\u81EA\u5E26\u7684\u63D0\u793A\u8BCD\u4E4B\u540E...", className: "min-h-24 resize-y" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u53EF\u9009\u3002\u7528\u4E8E\u6DFB\u52A0\u989D\u5916\u7684\u89C4\u5219\u6216\u9650\u5236\uFF0C\u5982\u300C\u8BF7\u4F7F\u7528\u4E2D\u6587\u56DE\u590D\u300D\u3002" })] }) })] })] });
}, eo = ({ challenge: t, character: s }) => {
  const a = t.variables || {}, n = t.goals || [], r = t.failureChecks || [];
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("h3", { className: "text-lg font-bold flex items-center gap-2", children: [e.jsx(tt, { className: "w-5 h-5 text-amber-500" }), "\u6311\u6218\u89C4\u5219\u9884\u89C8"] }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u4EE5\u89D2\u8272 ", e.jsx("span", { className: "font-medium text-foreground", children: s.name }), " \u53C2\u4E0E\u6311\u6218 \u300C", e.jsx("span", { className: "font-medium text-foreground", children: t.name }), "\u300D\u3002"] })] }), t.userGuidance && e.jsxs("div", { className: "p-4 rounded-xl bg-muted/50 border border-muted italic text-sm text-muted-foreground leading-relaxed", children: ['"', t.userGuidance, '"'] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(_e, { className: "w-4 h-4 text-primary" }), "\u4E16\u754C\u53D8\u91CF", e.jsxs(B, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [Object.keys(a).length, " \u4E2A"] })] }), Object.keys(a).length > 0 ? e.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: Object.entries(a).map(([i, o]) => e.jsxs("div", { className: R("p-3 rounded-xl border bg-background/60 space-y-1", o.hidden && "opacity-50"), children: [e.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase truncate", children: i }), e.jsx("div", { className: "text-base font-mono font-bold truncate", children: String(o.initial) }), e.jsxs("div", { className: "text-[10px] text-muted-foreground/60 truncate", children: [o.type, " ", o.hidden ? "(\u9690\u85CF)" : ""] })] }, i)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u4E16\u754C\u53D8\u91CF" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(Mt, { className: "w-4 h-4 text-primary" }), "\u751F\u5B58\u76EE\u6807", e.jsxs(B, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [n.length, " \u4E2A"] })] }), n.length > 0 ? e.jsx("div", { className: "space-y-2", children: n.map((i) => e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl border bg-background/60", children: [e.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-primary/30 shrink-0 mt-0.5" }), e.jsx("div", { className: "text-sm", children: i.description })] }, i.key)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u8BBE\u5B9A\u76EE\u6807" })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [e.jsx(ja, { className: "w-4 h-4 text-destructive" }), "\u6B7B\u4EA1\u7981\u5FCC", e.jsxs(B, { variant: "outline", className: "text-[9px] h-4 ml-auto", children: [r.length, " \u4E2A"] })] }), r.length > 0 ? e.jsx("div", { className: "space-y-2", children: r.map((i) => e.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl border border-destructive/10 bg-destructive/5", children: [e.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-destructive/30 shrink-0 mt-0.5" }), e.jsx("div", { className: "text-sm", children: i.description })] }, i.key)) }) : e.jsx("p", { className: "text-sm text-muted-foreground/60 italic", children: "\u65E0\u5931\u8D25\u6761\u4EF6" })] })] });
};
function to(t) {
  return t === "chat" ? [{ key: "llm-check", title: "LLM \u68C0\u6D4B", description: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA" }, { key: "chat-config", title: "\u4F1A\u8BDD\u914D\u7F6E", description: "\u914D\u7F6E\u672C\u6B21\u804A\u5929\u4F1A\u8BDD\u7684\u53C2\u6570" }] : [{ key: "llm-check", title: "LLM \u68C0\u6D4B", description: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA" }, { key: "challenge-preview", title: "\u89C4\u5219\u9884\u89C8", description: "\u9884\u89C8\u5E76\u786E\u8BA4\u6311\u6218\u89C4\u5219" }];
}
const od = ({ open: t, onOpenChange: s, wizardProps: a }) => {
  const [n, r] = f.useState(0), [i, o] = f.useState(xs), m = to(a.mode), c = m[n], d = n === m.length - 1, u = n === 0, l = f.useCallback(() => {
    r((y) => Math.min(y + 1, m.length - 1));
  }, [m.length]), h = () => {
    d ? (a.mode === "chat" ? a.onConfirm(i) : a.onConfirm(), s(false), r(0), o(xs())) : r((y) => y + 1);
  }, p = () => {
    r((y) => Math.max(y - 1, 0));
  }, x = (y) => {
    y || (r(0), o(xs())), s(y);
  }, j = a.mode === "chat" ? "\u804A\u5929\u4F1A\u8BDD" : "\u6311\u6218\u4F1A\u8BDD";
  return e.jsx(at, { open: t, onOpenChange: x, children: e.jsxs(nt, { className: "sm:max-w-lg max-h-[85vh] overflow-y-auto", children: [e.jsxs(rt, { children: [e.jsxs(We, { className: "flex items-center gap-2", children: ["\u5F00\u59CB", j] }), e.jsx(Tt, { children: c == null ? void 0 : c.description })] }), e.jsx("div", { className: "flex items-center gap-2 py-2", children: m.map((y, b) => e.jsxs("div", { className: "flex items-center gap-2", children: [b > 0 && e.jsx("div", { className: "h-px w-6 bg-muted-foreground/20" }), e.jsx("div", { className: `
                  w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-colors
                  ${b < n ? "bg-primary text-primary-foreground" : b === n ? "bg-primary/20 text-primary border-2 border-primary" : "bg-muted text-muted-foreground"}
                `, children: b + 1 }), e.jsx("span", { className: `text-xs font-medium hidden sm:inline ${b === n ? "text-foreground" : "text-muted-foreground"}`, children: y.title })] }, y.key)) }), e.jsxs("div", { className: "py-2 min-h-48", children: [(c == null ? void 0 : c.key) === "llm-check" && e.jsx(Zi, { onReady: l }), (c == null ? void 0 : c.key) === "chat-config" && a.mode === "chat" && e.jsx(Qi, { config: i, onChange: o, character: a.character }), (c == null ? void 0 : c.key) === "challenge-preview" && a.mode === "challenge" && e.jsx(eo, { challenge: a.challenge, character: a.character })] }), e.jsxs(_s, { className: "flex-row justify-between sm:justify-between gap-2", children: [e.jsxs(_, { type: "button", variant: "outline", disabled: u, onClick: p, className: "gap-1.5", children: [e.jsx(Is, { className: "w-4 h-4" }), "\u4E0A\u4E00\u6B65"] }), e.jsx(_, { type: "button", onClick: h, disabled: (c == null ? void 0 : c.key) === "llm-check", className: "gap-1.5", children: d ? e.jsxs(e.Fragment, { children: [e.jsx(ts, { className: "w-4 h-4" }), "\u5F00\u59CB", j] }) : e.jsxs(e.Fragment, { children: ["\u4E0B\u4E00\u6B65", e.jsx(Ma, { className: "w-4 h-4" })] }) })] })] }) });
}, nn = (t) => {
  const [s, ...a] = t;
  if (["and", "or", "all", "any", "some"].includes(s)) {
    const n = a[0], r = s === "and" || s === "all" ? " \u4E14 " : " \u6216 ";
    return `(${n.map(nn).join(r)})`;
  }
  return s === "isTrue" || s === "isFalse" ? `${a[0]} \u4E3A ${s === "isTrue" ? "\u771F" : "\u5047"}` : `${a[0]} ${s} ${JSON.stringify(a[1])}`;
}, cd = (t) => e.jsxs("div", { className: "space-y-6", children: [e.jsxs(W, { children: [e.jsxs(Z, { children: [e.jsxs(Q, { className: "text-lg flex items-center gap-2", children: [e.jsx(Mt, { className: "w-5 h-5 text-destructive" }), "\u6838\u5FC3\u4ECB\u7ECD"] }), e.jsx(ae, { children: "\u6311\u6218\u80CC\u666F\u4E0E\u4E16\u754C\u89C2\u8BBE\u5B9A" })] }), e.jsx(K, { children: e.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap", children: t.challenge.description }) })] }), e.jsxs(W, { children: [e.jsxs(Z, { children: [e.jsxs(Q, { className: "text-lg flex items-center gap-2", children: [e.jsx(Pa, { className: "w-5 h-5 text-primary" }), "\u76EE\u6807\u6311\u6218 (Goals)"] }), e.jsx(ae, { children: "\u5F53\u6240\u6709\u76EE\u6807\u8FBE\u6210\u65F6\uFF0C\u6311\u6218\u5373\u544A\u6210\u529F" })] }), e.jsx(K, { className: "space-y-4", children: t.challenge.goals.map((s, a) => e.jsxs("div", { className: "flex gap-4 p-4 rounded-lg bg-muted/40 border group hover:border-primary/50 transition-colors", children: [e.jsx("div", { className: "w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0", children: a + 1 }), e.jsxs("div", { className: "grow", children: [e.jsx("div", { className: "font-medium text-sm", children: s.description }), e.jsxs("div", { className: "text-[10px] text-muted-foreground mt-2 font-mono flex items-center gap-2", children: [e.jsx(B, { variant: "outline", className: "text-[9px] font-mono py-0 h-4 shrink-0", children: "Condition" }), e.jsx("span", { className: "truncate", children: nn(s.condition) })] })] })] }, s.key)) })] }), e.jsxs(W, { children: [e.jsx(Z, { children: e.jsxs(Q, { className: "text-lg flex items-center gap-2", children: [e.jsx(st, { className: "w-5 h-5 text-secondary" }), "\u53D8\u91CF\u914D\u7F6E (Variables)"] }) }), e.jsx(K, { children: e.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: Object.entries(t.challenge.variables).map(([s, a]) => e.jsxs("div", { className: "p-3 rounded-md bg-muted/30 border flex justify-between items-center", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx("div", { className: "text-xs font-bold font-mono", children: s }), e.jsxs("div", { className: "text-[10px] text-muted-foreground", children: ["\u521D\u59CB\u503C: ", String(a.initial ?? "null")] })] }), e.jsx(B, { variant: "secondary", className: "text-[10px] capitalize", children: a.type })] }, s)) }) })] })] }), ld = (t) => {
  const s = ne();
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs(W, { className: "border-primary/20 bg-primary/5", children: [e.jsxs(Z, { children: [e.jsxs(Q, { className: "text-lg flex items-center gap-2", children: [e.jsx(we, { className: "w-5 h-5 text-primary" }), "\u4EE5\u6B64\u5267\u672C\u5F00\u542F\u65B0\u6311\u6218"] }), e.jsx(ae, { children: "\u8BF7\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u4F5C\u4E3A\u6311\u6218\u7684\u4E3B\u89D2" })] }), e.jsx(K, { className: "space-y-3", children: e.jsx("div", { className: "grid grid-cols-1 gap-2", children: t.characters.map((a) => e.jsxs(_, { variant: "outline", className: "w-full justify-start gap-4 h-14 bg-background", onClick: () => t.onStartNew(a.id), type: "button", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0", children: e.jsx(Ve, { className: "w-4 h-4 text-muted-foreground" }) }), e.jsxs("div", { className: "text-left", children: [e.jsxs("div", { className: "font-semibold text-sm", children: ["\u4F7F\u7528 ", a.name] }), e.jsx("div", { className: "text-[10px] text-muted-foreground truncate max-w-50", children: a.description })] })] }, a.id)) }) })] }), e.jsxs(W, { children: [e.jsx(Z, { children: e.jsx(Q, { className: "text-lg", children: "\u5DF2\u5B58\u6311\u6218\u8FDB\u5EA6" }) }), e.jsx(K, { className: "space-y-3", children: t.sessions.length > 0 ? t.sessions.map((a) => e.jsxs(_, { className: "w-full justify-between items-center h-auto py-4 px-5 border hover:bg-muted/50 transition-colors", variant: "ghost", onClick: () => s({ to: "/session/$sessionId", params: { sessionId: a.id } }), type: "button", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: e.jsx(Da, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "text-left", children: [e.jsx("div", { className: "font-semibold", children: "\u7EE7\u7EED\u6311\u6218" }), e.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: ["\u6700\u540E\u6D3B\u8DC3: ", new Date(a.updatedAt).toLocaleString()] })] })] }), e.jsxs("div", { className: "flex flex-col items-end gap-1", children: [e.jsx(B, { variant: "outline", className: "text-[9px] h-5", children: "\u4EE5\u6B64\u5267\u672C\u8FDB\u53D1" }), e.jsx("span", { className: "text-[10px] text-muted-foreground italic", children: a.characterId ? `\u89D2\u8272 ID: ${a.characterId.slice(0, 8)}...` : "\u672A\u77E5\u89D2\u8272" })] })] }, a.id)) : e.jsx("div", { className: "text-center py-10 border rounded-lg border-dashed", children: e.jsx("p", { className: "text-muted-foreground text-sm", children: "\u8FD8\u6CA1\u6709\u57FA\u4E8E\u6B64\u5267\u672C\u7684\u6311\u6218\u8BB0\u5F55" }) }) })] })] });
}, ls = { characters: Ge, challenges: jt, sessions: Je, createSessionDB: (t) => new $s(t) }, so = { groupingDelayMs: 6e4 };
class Ce {
  constructor(s, a) {
    __publicField(this, "state");
    __publicField(this, "options", Js(so));
    this.state = s, a && this.assignOptions(a);
  }
  assignOptions(s) {
    Object.assign(this.options, s);
  }
  setOptions(s) {
    this.options = Js(s);
  }
  getHistoryItems() {
    return this.state.historyItems;
  }
  getVisibleHistoryItems() {
    return this.state.historyItems.filter((s) => !(s.deleted || s.hidden));
  }
  getHistoryItemById(s) {
    return this.state.historyItems.find((a) => a.id === s);
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
  getItemsByType(s) {
    return this.state.historyItems.filter((a) => a.type === s);
  }
  findHistoryItems(s) {
    return this.state.historyItems.filter(s);
  }
  addHistoryItem(s) {
    if (s.type === "character_message") this.addCharacterMessageIntoHistory(s);
    else {
      const a = { ...s, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
      this.state.historyItems.push(a);
    }
  }
  deleteHistoryItemById(s) {
    const a = this.state.historyItems.find((n) => n.id === s);
    a && (a.deleted = true);
  }
  deleteHistoryItemByIds(s) {
    for (const a of this.state.historyItems) s.includes(a.id) && (a.deleted = true);
  }
  deleteHistoryItems(s) {
    for (const a of this.state.historyItems) s(a) && (a.deleted = true);
  }
  clearHistory() {
    this.state.historyItems = [];
  }
  setProcessingItem(s) {
    if (s) {
      const a = { ...s, processing: true };
      this.state.processingItem = a;
    } else this.state.processingItem = void 0;
  }
  completeProcessingItem() {
    if (this.state.processingItem) {
      const s = { ...this.state.processingItem, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
      this.state.processingItem = void 0, this.addHistoryItem(s);
    }
  }
  static makeGroupedCharacterMessages(s) {
    const a = [];
    let n = 0;
    for (; n < s.length; ) if (s[n].type === "character_message") {
      const r = [];
      let i = n;
      for (; i < s.length && s[i].type === "character_message"; ) r.push(s[i]), i++;
      if (r.length > 1) {
        for (let u = 0; u < r.length - 1; u++) a.push(se.parse({ id: L(), type: "placeholder", idx: r[u].idx, data: null }));
        const o = r[0].data.characterId, m = r.map((u) => ({ content: u.data.content, timestamp: u.timestamp || void 0, originalIdx: u.idx })), c = r.at(-1);
        if (!c) throw new Error("No last candidate");
        const d = { id: L(), type: "character_message_group", data: { characterId: o || "", list: m, name: r[0].data.name, role: r[0].data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: c.idx, orderRef: 0, timestamp: Date.now() };
        a.push(d);
      } else a.push(r[0]);
      n = i;
    } else a.push(s[n]), n++;
    return a;
  }
  spliceHistoryItems(s, a, n, r = true) {
    if (this.state.historyItems.splice(s, a, ...n), r) for (let i = s; i < this.state.historyItems.length; i++) this.state.historyItems[i].idx = i;
  }
  performGroupingOnTailingHistoryItems() {
    const s = this.getLastHistoryItem();
    if (s && s.type === "character_message_group") return;
    let a = this.state.historyItems.length - 1;
    for (; a >= 0 && this.state.historyItems[a].type === "character_message"; ) a--;
    if (a++, a >= this.state.historyItems.length) return;
    const n = this.state.historyItems.slice(a), r = Ce.makeGroupedCharacterMessages(n);
    this.spliceHistoryItems(a, n.length, r, false);
  }
  performGroupingOnAllHistoryItems() {
    const s = Ce.makeGroupedCharacterMessages(this.state.historyItems);
    this.spliceHistoryItems(0, this.state.historyItems.length, s, false);
  }
  addCharacterMessageIntoHistoryDirectly(s) {
    const a = { ...s, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
    this.state.historyItems.push(a);
  }
  addCharacterMessageIntoHistoryAsNewGroup(s) {
    const a = [{ content: s.data.content, timestamp: Date.now(), originalIdx: this.state.historyItems.length }], n = { id: L(), type: "character_message_group", data: { characterId: s.data.characterId || "", list: a, name: s.data.name, role: s.data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: this.state.historyItems.length, orderRef: 0, timestamp: Date.now() };
    this.state.historyItems.push(n);
  }
  addCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(s) {
    const a = this.getLastHistoryItem();
    if (a && a.type === "character_message_group") {
      const n = a;
      if (n.data.characterId === s.data.characterId && Date.now() - (n.timestamp || 0) <= (this.options.groupingDelayMs || 6e4)) {
        n.data.list.push({ content: s.data.content, timestamp: Date.now() }), n.timestamp = Date.now();
        return;
      }
    }
    this.addCharacterMessageIntoHistoryDirectly(s);
  }
  addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(s) {
    const a = this.getLastHistoryItem();
    if (a && a.type === "character_message_group") {
      const n = a;
      if (n.data.characterId === s.data.characterId && Date.now() - (n.timestamp || 0) <= (this.options.groupingDelayMs || 6e4)) {
        n.data.list.push({ content: s.data.content, timestamp: Date.now() }), n.timestamp = Date.now();
        return;
      }
    }
    this.addCharacterMessageIntoHistoryAsNewGroup(s);
  }
  performGroupingOnTailingHistoryItemsAndAddCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(s) {
    this.performGroupingOnTailingHistoryItems(), this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(s);
  }
  performGroupingOnTailingHistoryItemsAndAddCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(s) {
    this.performGroupingOnTailingHistoryItems(), this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(s);
  }
  addCharacterMessageIntoHistory(s) {
    this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(s);
  }
  getLastSummaryItemIndex() {
    for (let s = this.state.historyItems.length - 1; s >= 0; s--) {
      const a = this.state.historyItems[s];
      if (a.type === "summary") return a.idx;
    }
  }
  getAllSummaryItemIndices() {
    return this.getItemsByType("summary").map((s) => s.idx ?? -1).filter((s) => s !== -1);
  }
  getUncoveredIndices() {
    const a = this.getItemsByType("summary").map((o) => o.data.range).sort((o, m) => o[0] - m[0]), n = [];
    for (const [o, m] of a) {
      const c = n.at(-1);
      n.length === 0 || c && c[1] < o ? n.push([o, m]) : c && (c[1] = Math.max(c[1], m));
    }
    const r = [];
    let i = 0;
    for (const [o, m] of n) {
      for (; i < o; ) r.push(i), i++;
      i = Math.max(i, m + 1);
    }
    for (; i < this.state.historyItems.length; ) r.push(i), i++;
    return r;
  }
  addLLMResponseAsContextItem(s, a) {
    const n = L();
    let r;
    s.role === "assistant" && a.characterId ? r = { id: n, type: "character_message", orderRef: 0, timestamp: Date.now(), data: { characterId: a.characterId, content: s.content, name: void 0 } } : s.role === "user" ? r = { id: n, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: s.content, name: void 0, isUser: true, role: "user" } } : r = { id: n, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: s.content, name: s.role } }, this.addHistoryItem(r);
  }
  getFlatHistoryItems(s) {
    const a = [];
    for (const n of this.state.historyItems) if (n.type === "character_message_group") {
      const r = n, i = r.data.list.map((o) => ({ id: L(), type: "character_message", idx: n.idx, orderRef: n.orderRef, timestamp: o.timestamp || n.timestamp, hidden: n.hidden, deleted: n.deleted, data: { characterId: r.data.characterId, content: o.content, name: r.data.name, role: r.data.role, isCharacter: true, isUser: false, isDM: false, isEnv: false } }));
      a.push(...i);
    } else a.push(n);
    return s && s > 0 ? a.slice(-s) : a;
  }
  getLastUserMessage() {
    return this.getFlatHistoryItems().findLast((s) => (s.type === "participant_message" || s.type === "character_message") && (s.data.isUser || s.data.role === "user"));
  }
}
const ao = /\{\{([^:]+):([^}]+)\}\}/gi, no = /^d/i;
function Os(t, s, a) {
  let n = t;
  const r = s.nickname || s.name || "{{char}}", i = (a == null ? void 0 : a.userName) || "{{user}}";
  return n = n.replace(/\{\{char\}\}/gi, r), n = n.replace(/\{\{user\}\}/gi, i), n = n.replace(/<BOT>/gi, r), n = n.replace(/<USER>/gi, i), n = n.replace(ao, (o, m, c) => {
    switch (m.toLowerCase()) {
      case "random": {
        const u = c.split(",").map((l) => l.replace(/\\,/g, ",").trim());
        return u[Math.floor(Math.random() * u.length)] || "";
      }
      case "pick": {
        const u = c.split(",").map((l) => l.replace(/\\,/g, ",").trim());
        return u[Math.floor(Math.random() * u.length)] || "";
      }
      case "roll": {
        const u = Number.parseInt(c.replace(no, ""), 10);
        return Number.isNaN(u) || u < 1 ? "1" : (Math.floor(Math.random() * u) + 1).toString();
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
        return o;
    }
  }), n;
}
function Fs(t, s) {
  let a;
  return t.system_prompt && t.system_prompt.trim() !== "" ? (a = t.system_prompt, a = a.replaceAll("{{original}}", (s == null ? void 0 : s.originalSystemPrompt) || "")) : (a = [`\u4F60\u662F ${t.name}\uFF0C\u8BF7\u6839\u636E\u4F60\u7684\u6027\u683C\u548C\u80CC\u666F\u8FDB\u884C\u56DE\u5E94\u3002\u4FDD\u6301\u89D2\u8272\u7684\u4E00\u81F4\u6027\u3002`, "=====[\u89D2\u8272\u63CF\u8FF0]=====", t.description, "=====[\u89D2\u8272\u6027\u683C]=====", t.personality, "=====[\u804A\u5929\u573A\u666F]=====", t.scenario, "=====[\u793A\u4F8B\u56DE\u590D]=====", t.mes_example].filter((n) => n.trim() !== "").join(`

`), a.trim() === "" && (a = (s == null ? void 0 : s.originalSystemPrompt) || "")), a = Os(a, t, s), a.trim();
}
function ro(t, s) {
  const a = Fs(t, s), n = [t.first_mes, ...(t == null ? void 0 : t.alternate_greetings) ?? []], r = n[Math.floor(Math.random() * n.length)], i = Os(r, t, s);
  return [{ role: "system", content: a }, { role: "assistant", content: i }];
}
function io(t, s) {
  const a = Fs(t, s), n = [t.first_mes, ...(t == null ? void 0 : t.alternate_greetings) ?? []], r = n[Math.floor(Math.random() * n.length)], i = Os(r, t, s), o = { id: L(), type: "starting_system_message", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: a } }, m = { id: L(), type: "character_intro", idx: 1, orderRef: 0, timestamp: Date.now() + 1, data: { characterId: t.id, content: i } };
  return [o, m];
}
const Us = (t, s) => {
  if ((s == null ? void 0 : s.characterId) === void 0) return [];
  const a = _r.parse(t), n = [];
  for (const r of a.historyItems) if (!(r.deleted || r.hidden)) switch (r.type) {
    case "starting_system_message":
    case "in_context_system_message":
      n.push({ role: "system", content: r.data.content, name: r.data.name });
      break;
    case "character_intro":
      n.push({ role: "assistant", content: r.data.content, name: r.data.name });
      break;
    case "participant_message":
    case "character_message": {
      const i = r.data, o = i.characterId === s.characterId;
      n.push({ role: o ? "assistant" : "user", content: i.content, name: i.name });
      break;
    }
    case "participant_message_group":
    case "character_message_group": {
      const i = r.data, o = i.characterId === s.characterId, m = i.list.map((c) => c.content).join(`
`);
      n.push({ role: o ? "assistant" : "user", content: m, name: i.name });
      break;
    }
    case "summary":
      n.push({ role: "user", content: r.data.content });
      break;
    case "llm_message":
    case "story_telling":
      n.push({ role: r.data.role, content: r.data.content, name: r.data.name });
      break;
    case "tool_message":
      n.push({ role: "tool", content: r.data.content, name: r.data.name });
      break;
  }
  return n;
}, sa = Object.freeze(Object.defineProperty({ __proto__: null, makeChatModeCharacterSystemPrompt_CN: Fs, makeChatModeLLMMessagesFromContextStateForCharacterId: Us, makeChatModeStartingContextItems_CN: io, makeChatModeStartingMessages_CN: ro }, Symbol.toStringTag, { value: "Module" })), ue = le({ currentSession: null, contextManager: null, get messages() {
  if (!(this.contextManager && this.currentSession)) return [];
  const t = Us(this.contextManager.state, { characterId: this.currentSession.modeConfig.characterId });
  return Array.isArray(t) ? t : [];
}, startNewSession(t, s) {
  const a = { id: L(), contextId: null, mode: "chat", modeConfig: t, modeState: { currentPhase: "character_first_msg" }, createdAt: Date.now(), updatedAt: Date.now(), isActive: true };
  this.currentSession = a;
  const n = new Ce(s || { historyItems: [], processingItem: void 0 });
  return n.state = le(n.state), this.contextManager = n, a;
}, getContextState() {
  return this.contextManager ? this.contextManager.state : null;
}, updateContextState(t) {
  this.contextManager && (Object.assign(this.contextManager.state, t), this.currentSession && (this.currentSession.updatedAt = Date.now()));
}, updateCurrentPhase(t) {
  this.currentSession && (this.currentSession.modeState.currentPhase = t, this.currentSession.updatedAt = Date.now());
}, updateCurrentConfig(t) {
  this.currentSession && (Object.assign(this.currentSession.modeConfig, t), this.currentSession.updatedAt = Date.now());
}, endCurrentSession() {
  this.currentSession = null, this.contextManager = null;
}, getCurrentSessionSnapshot() {
  return this.currentSession ? { ...this.currentSession } : null;
}, loadFromData(t) {
  this.currentSession = t.session, t.contextState && (this.contextManager = new Ce(t.contextState), this.contextManager.state = le(this.contextManager.state));
}, loadSession(t) {
  this.currentSession = t;
}, async saveNewContextItemsToDB(t, s) {
  const { SessionDB: a } = await ve(async () => {
    const { SessionDB: r } = await Promise.resolve().then(() => Et);
    return { SessionDB: r };
  }, void 0);
  await new a(t).addContextItems(s);
} }), rn = (t) => {
  const { item: s, character: a } = t;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden", children: a.imageBase64 || a.avatar ? e.jsx("img", { src: a.imageBase64 || a.avatar, alt: a.name, className: "w-full h-full object-cover" }) : e.jsx(de, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: a.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: s.data.content }), s.processing && e.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, Qt = (t) => {
  const { item: s, character: a } = t;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm transition-transform group-hover:scale-105 overflow-hidden", children: a.imageBase64 || a.avatar ? e.jsx("img", { src: a.imageBase64 || a.avatar, alt: a.name, className: "w-full h-full object-cover" }) : e.jsx(de, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: a.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: s.data.content }), s.processing && e.jsx("div", { className: "text-[10px] text-muted-foreground/60 tracking-widest", children: "Streaming..." })] })] });
}, vs = (t) => {
  const { item: s } = t;
  return e.jsxs("div", { className: "flex gap-4 md:gap-6 flex-row-reverse group", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105", children: e.jsx(He, { className: "w-5 h-5 text-secondary-foreground" }) }), e.jsxs("div", { className: "space-y-1.5 text-right grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2 justify-end", children: "Player" }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap bg-primary/5 text-foreground p-4 rounded-2xl inline-block text-left min-w-25 shadow-sm", children: s.data.content })] })] });
};
function oo(t, s) {
  const a = ns(), n = f.useRef(false), r = ne(), i = f.useCallback(async (m) => {
    if (!(n.current || !s || s.getHistoryCount() > 0 || !t)) try {
      n.current = true;
      const { makeChatModeStartingContextItems_CN: c } = await ve(async () => {
        const { makeChatModeStartingContextItems_CN: l } = await Promise.resolve().then(() => sa);
        return { makeChatModeStartingContextItems_CN: l };
      }, void 0), d = c(t);
      for (const l of d) s.addHistoryItem(l);
      const u = d.find((l) => l.type === "character_intro");
      if (u && m) {
        const l = u.data.content.split(" ");
        let h = "";
        for (const p of l) h += (h ? " " : "") + p, m(h), await new Promise((x) => setTimeout(x, 50));
      }
    } catch (c) {
      console.error("Initialize Chat Error:", c), $.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", { duration: Number.POSITIVE_INFINITY, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => r({ to: "/config/llm" }) } });
    } finally {
      n.current = false;
    }
  }, [s, t]), o = f.useCallback(async (m, c) => {
    if (!(n.current || !t || !s)) try {
      n.current = true, s.addLLMResponseAsContextItem({ role: "user", content: m }, {});
      const { makeChatModeLLMMessagesFromContextStateForCharacterId: d } = await ve(async () => {
        const { makeChatModeLLMMessagesFromContextStateForCharacterId: x } = await Promise.resolve().then(() => sa);
        return { makeChatModeLLMMessagesFromContextStateForCharacterId: x };
      }, void 0), l = d(s.state, { characterId: t.id }).map((x) => ({ id: L(), role: x.role, content: x.content, name: x.name })), h = { id: L(), type: "character_message", orderRef: 0, timestamp: Date.now(), data: { characterId: t.id, content: "", name: t.name } };
      s.setProcessingItem(h);
      let p = "";
      await a.callLLMStream(l, (x, j) => {
        p = j, c == null ? void 0 : c(x);
        const y = s.getProcessingItem();
        y && (y.data.content = p);
      }), h.data.content = p, s.completeProcessingItem();
    } catch (d) {
      console.error("ChatLoop Error:", d), $.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", { duration: Number.POSITIVE_INFINITY, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => r({ to: "/config/llm" }) } });
    } finally {
      n.current = false;
    }
  }, [s, t, a]);
  return { initializeChat: i, sendUserMessage: o };
}
const co = (t) => {
  var _a2;
  const [s, a] = f.useState(""), n = f.useRef(null), [r, i] = f.useState(false), [o, m] = f.useState(""), [c, d] = f.useState(false), { data: u = [] } = Me((b) => b.from({ s: Je })), { data: l = [] } = Me((b) => b.from({ c: Ge })), h = u.find((b) => b.id === t.sessionId), p = l.find((b) => b.id === (h == null ? void 0 : h.characterId));
  f.useEffect(() => {
    let b = false;
    return d(false), (async () => {
      if (h) try {
        const N = await ls.createSessionDB(h.id).getContextItems();
        if (b) return;
        const v = { historyItems: N, processingItem: void 0 }, k = new Ce(v);
        ue.contextManager = k, It(h.id), d(true);
      } catch {
        if (!b) {
          const w = new Ce({ historyItems: [], processingItem: void 0 });
          ue.contextManager = w, d(true);
        }
      }
    })(), () => {
      b = true;
    };
  }, [h]), f.useEffect(() => () => {
    t.sessionId && It(t.sessionId);
  }, [t.sessionId]);
  const { sendUserMessage: x, initializeChat: j } = oo(p, ue.contextManager);
  if (f.useEffect(() => {
    var _a3;
    c && ((_a3 = ue.contextManager) == null ? void 0 : _a3.getHistoryCount()) === 0 && p && h && (async () => {
      if (await j((S) => {
        m((w) => w + S);
      }), ue.contextManager) {
        const S = ue.contextManager.getHistoryItems();
        S.length > 0 && await ue.saveNewContextItemsToDB(h.id, S);
      }
    })();
  }, [c, j, p, h]), f.useEffect(() => {
    n.current && (n.current.scrollTop = n.current.scrollHeight);
  }), !(h && p)) return e.jsx("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4", children: e.jsx("p", { children: "\u4F1A\u8BDD\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664" }) });
  const y = async () => {
    if (!(!s.trim() || r)) {
      i(true), m("");
      try {
        if (await x(s, (b) => {
          m((S) => S + b);
        }), ue.contextManager && h) {
          const S = ue.contextManager.getHistoryItems().filter((w) => !w.processing);
          S.length > 0 && await ue.saveNewContextItemsToDB(h.id, S);
        }
      } catch (b) {
        console.error("Send message error:", b);
      } finally {
        i(false), m("");
      }
      a("");
    }
  };
  return e.jsx("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20", children: e.jsx(de, { className: "w-5 h-5 text-primary" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsx("span", { className: "font-bold text-sm leading-tight", children: p.name }), e.jsx("span", { className: "text-[10px] text-muted-foreground", children: p.nickname || "NPC" })] })] }), e.jsx("div", { className: "flex items-center gap-2", children: e.jsx(B, { variant: "secondary", className: "text-[9px] h-5 px-1.5 font-bold uppercase", children: "CHAT MODE" }) })] }), e.jsx("div", { className: "flex grow overflow-y-auto p-4 md:p-8 space-y-8", ref: n, children: e.jsxs("div", { className: "max-w-4xl mx-auto w-full space-y-8", children: [(() => {
    var _a3, _b;
    const b = ((_a3 = ue.contextManager) == null ? void 0 : _a3.getVisibleHistoryItems()) || [], S = (_b = ue.contextManager) == null ? void 0 : _b.getProcessingItem(), w = [...b];
    return S && !b.some((N) => N.id === S.id) && w.push(S), w.map((N, v) => e.jsx(lo, { item: N, character: p, isProcessing: N.processing || void 0, streamingText: N.processing ? o : void 0 }, `[${v}]${N.id}`));
  })(), r && !((_a2 = ue.contextManager) == null ? void 0 : _a2.getProcessingItem()) && e.jsxs("div", { className: "flex gap-4 animate-pulse", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-muted shrink-0" }), e.jsxs("div", { className: "space-y-3 grow pt-2", children: [e.jsx("div", { className: "h-4 bg-muted rounded w-1/4" }), e.jsx("div", { className: "h-24 bg-muted rounded w-full" })] })] })] }) }), e.jsxs("div", { className: "p-4 md:p-6 border-t shrink-0 bg-background/50 backdrop-blur-sm", children: [e.jsxs("div", { className: "max-w-4xl mx-auto relative group", children: [e.jsx("div", { className: "absolute -inset-0.5 bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" }), e.jsxs("div", { className: "relative", children: [e.jsx(Y, { value: s, onChange: (b) => a(b.target.value), placeholder: `\u5411 ${p.name} \u53D1\u9001\u6D88\u606F...`, className: "min-h-24 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/20 focus-visible:ring-primary/30 bg-background", onKeyDown: (b) => {
    b.key === "Enter" && !b.shiftKey && (b.preventDefault(), y());
  } }), e.jsx(_, { size: "icon", className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform", disabled: !s.trim() || r, onClick: y, type: "button", children: e.jsx(ot, { className: "w-5 h-5" }) })] })] }), e.jsx("p", { className: "text-[10px] text-center text-muted-foreground mt-3 font-medium uppercase tracking-tighter opacity-50", children: "Shift + Enter to line break \u2022 Enter to send" })] })] }) });
}, lo = (t) => {
  switch (t.item.type) {
    case "character_intro":
      return e.jsx(rn, { item: t.item, character: t.character });
    case "character_message":
      return t.isProcessing ? e.jsx(mo, { item: t.item, character: t.character, streamingText: t.streamingText || "" }) : e.jsx(Qt, { item: t.item, character: t.character });
    case "character_message_group":
      return e.jsx("div", { className: "space-y-4", children: (t.item.data.list || []).map((s, a) => e.jsx(Qt, { item: { ...t.item, type: "character_message", data: { ...t.item.data, content: s.content, timestamp: s.timestamp } }, character: t.character }, s.id || a)) });
    case "participant_message":
      return e.jsx(vs, { item: t.item });
    case "participant_message_group":
      return e.jsx("div", { className: "space-y-4", children: (t.item.data.list || []).map((s, a) => e.jsx(vs, { item: { ...t.item, type: "participant_message", data: { ...t.item.data, content: s.content, timestamp: s.timestamp } } }, s.id || a)) });
    case "system_notification":
      return e.jsx("div", { className: "flex justify-center my-4", children: e.jsx(B, { variant: "outline", className: "px-3 py-1 text-[10px] text-muted-foreground bg-muted/20", children: t.item.data.content }) });
    case "starting_system_message":
    case "in_context_system_message":
    case "placeholder":
      return null;
    default:
      return console.warn("Unknown context item type:", t.item.type), null;
  }
}, mo = (t) => t.item.type === "character_message" ? e.jsxs("div", { className: "flex gap-4 animate-pulse", children: [e.jsx("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20", children: t.character.imageBase64 || t.character.avatar ? e.jsx("img", { src: t.character.imageBase64 || t.character.avatar, alt: t.character.name, className: "w-full h-full object-cover rounded-2xl" }) : e.jsx(de, { className: "w-6 h-6 text-primary" }) }), e.jsxs("div", { className: "space-y-1.5 grow pt-1", children: [e.jsx("div", { className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2", children: t.character.name }), e.jsx("div", { className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium", children: t.streamingText || t.item.data.content })] })] }) : null, dd = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForChat: co }, Symbol.toStringTag, { value: "Module" }));
class Hs {
  constructor(s) {
    __publicField(this, "session");
    this.session = is.parse(s);
  }
}
function lt(t) {
  const s = t.modeConfig.characterSnapshot;
  if (!s) throw new Error("Critical Error: Character snapshot missing in session config.");
  return s;
}
function on(t, s) {
  const a = lt(s);
  return t.getFlatHistoryItems(10).filter((n) => !n.hidden && !n.deleted).map((n) => {
    const { type: r, data: i } = n;
    if (r === "participant_message") {
      let o = "\u73A9\u5BB6";
      return i.isDM || i.name === "DM" ? o = "DM\u65C1\u767D" : i.name && (o = i.name), `${o}: ${i.content}`;
    }
    return r === "character_message" ? `${i.name || a.name}: ${i.content}` : r === "dm_intro" ? `DM\u5F00\u573A/\u89C4\u5219: ${i.content}` : r === "character_intro" ? `${a.name}\u5F00\u573A: ${i.content}` : null;
  }).filter(Boolean).join(`
`);
}
const uo = `
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
`, ho = `
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
`, po = `
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
function xo(t, s) {
  const { modeConfig: a } = t, n = lt(t), r = (a.goals || []).map((c) => `- ${c.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", i = (a.failureChecks || []).map((c) => `- ${c.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", o = Object.entries(a.variables || {}).filter(([c, d]) => !d.hidden).map(([c, d]) => `- ${c}: ${d.description || "\u65E0\u63CF\u8FF0"}`).join(`
`) || "\u65E0\u516C\u5F00\u53D8\u91CF";
  return [{ role: "system", content: uo.replace("{{title}}", t.title || "\u6587\u5B57\u6311\u6218").replace("{{characterName}}", n.name).replace("{{characterDescription}}", n.description || "\u795E\u79D8\u89D2\u8272").replace("{{gameGoals}}", r).replace("{{failureConditions}}", i).replace("{{variableDescriptions}}", o).replace("{{userGuidance}}", a.userGuidance) }];
}
function go(t, s) {
  var _a2;
  const { modeConfig: a, modeState: n } = t, r = lt(t), i = JSON.stringify(n.variableStates, null, 2), o = (a.goals || []).map((h) => `- ${h.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", m = (a.failureChecks || []).map((h) => `- ${h.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", c = on(s, t), u = ((_a2 = s.getLastUserMessage()) == null ? void 0 : _a2.data.content) || "";
  return [{ role: "system", content: ho.replace("{{characterName}}", r.name).replace("{{gameGoals}}", o).replace("{{failureConditions}}", m).replace("{{historyMessages}}", c).replace("{{variablesJSON}}", i).replace("{{userInput}}", u) }];
}
function fo(t, s) {
  var _a2, _b;
  const { modeConfig: a, modeState: n } = t, r = lt(t), i = JSON.stringify(n.variableStates, null, 2), o = (a.goals || []).map((x) => `- ${x.description}`).join(`
`) || "\u65E0\u660E\u786E\u76EE\u6807", m = (a.failureChecks || []).map((x) => `- ${x.description}`).join(`
`) || "\u65E0\u5931\u8D25\u5224\u5B9A", c = on(s, t), u = ((_a2 = s.getLastUserMessage()) == null ? void 0 : _a2.data.content) || "", h = ((_b = s.getHistoryItems().findLast((x) => x.type === "challenge_mode_dm_eval")) == null ? void 0 : _b.data.analyze) || "\u6839\u636E\u73A9\u5BB6\u884C\u52A8\u66F4\u65B0\u4E86\u76F8\u5173\u72B6\u6001\u3002";
  return [{ role: "system", content: po.replace("{{characterName}}", r.name).replace("{{gameGoals}}", o).replace("{{failureConditions}}", m).replace("{{variablesJSON}}", i).replace("{{userInput}}", u).replace("{{historyMessages}}", c).replace("{{evalAnalyze}}", h) }];
}
function yo(t, s) {
  const { modeConfig: a } = t, n = lt(t);
  return [{ role: "system", content: `\u4F60\u73B0\u5728\u7684\u8EAB\u4EFD\u662F\u89D2\u8272 ${n.name}\u3002
\u4F60\u6B63\u5728\u53C2\u52A0\u4E00\u573A\u540D\u4E3A\u300A${t.title || "\u6311\u6218"}\u300B\u7684\u6E38\u620F\u3002
\u4F60\u7684\u4EFB\u52A1\u63CF\u8FF0\uFF1A
${a.roleTaskPrompt}

\u73B0\u5728\uFF0C\u8BF7\u4F5C\u4E3A ${n.name} \u7ED9\u51FA\u4F60\u7684\u5F00\u5C40\u7B2C\u4E00\u53E5\u8BDD\u3002
\u8FD9\u53E5\u5BF9\u8BDD\u5E94\u8BE5\u7B26\u5408\u4F60\u7684\u6027\u683C\u3001\u5F53\u524D\u6311\u6218\u7684\u80CC\u666F\uFF0C\u5E76\u5F15\u5BFC\u73A9\u5BB6\u5F00\u59CB\u4E92\u52A8\u3002
\u4E0D\u8981\u8F93\u51FA\u4EFB\u4F55\u65C1\u767D\uFF0C\u53EA\u8F93\u51FA\u5BF9\u8BDD\u5185\u5BB9\u3002` }];
}
function bo(t, s) {
  const { modeConfig: a, modeState: n } = t, r = lt(t), o = { historyItems: s.getFlatHistoryItems() }, m = Us(o, { characterId: a.characterId });
  let c = `## \u4F60\u7684\u8EAB\u4EFD\u4E0E\u4EFB\u52A1
\u4F60\u6B63\u5728\u53C2\u52A0\u4E00\u573A\u540D\u4E3A\u300A${t.title || "\u6311\u6218"}\u300B\u7684\u6E38\u620F\u3002
${a.roleTaskPrompt}

`;
  const d = Object.entries(n.variableStates).filter(([p]) => {
    var _a2;
    return !((_a2 = a.variables[p]) == null ? void 0 : _a2.hidden);
  }).map(([p, x]) => {
    const j = a.variables[p], y = (j == null ? void 0 : j.description) ? ` (${j.description})` : "";
    return `- ${p}${y}: ${x.value}`;
  }).join(`
`);
  d && (c += `## \u5F53\u524D\u72B6\u6001 (\u4F60\u7684\u611F\u77E5\u80FD\u529B)
${d}

`);
  const u = a.goals.map((p) => {
    var _a2;
    return ((_a2 = n.goalStates.find((j) => j.key === p.key)) == null ? void 0 : _a2.isCompleted) ? `- [\u5DF2\u8FBE\u6210\u76EE\u6807] ${p.description}` : `- [\u672A\u8FBE\u6210\u76EE\u6807] ${p.description}`;
  }).join(`
`);
  u && (c += `## \u6311\u6218\u76EE\u6807\u8FDB\u5EA6
${u}

`);
  const l = a.failureChecks.map((p) => `- ${p.description}`).join(`
`);
  l && (c += `## \u5931\u8D25/\u7ED3\u675F\u6761\u4EF6 (\u4F60\u5E94\u5C3D\u91CF\u907F\u514D\u6216\u5F15\u5BFC\u73A9\u5BB6\u89E6\u53D1)
${l}

`);
  const h = n.failureStates.filter((p) => p.isCompleted);
  if (h.length > 0) {
    const p = h.map((x) => {
      var _a2;
      return `- ${((_a2 = a.failureChecks.find((y) => y.key === x.key)) == null ? void 0 : _a2.description) || x.key}`;
    }).join(`
`);
    c += `## \u8B66\u544A\uFF1A\u5DF2\u89E6\u53D1\u5931\u8D25\u6761\u4EF6
${p}
\u4F60\u73B0\u5728\u5904\u4E8E\u6781\u5EA6\u4E0D\u5229\u7684\u5883\u5730\uFF0C\u8BF7\u8868\u73B0\u51FA\u76F8\u5E94\u7684\u53CD\u5E94\u3002

`;
  }
  return c += `## \u884C\u4E3A\u51C6\u5219
1. \u4E25\u683C\u626E\u6F14 ${r.name}\uFF0C\u8BED\u6C14\u548C\u53CD\u5E94\u5FC5\u987B\u4E0E\u4E0A\u8FF0\u72B6\u6001\u9AD8\u5EA6\u4E00\u81F4\u3002
2. \u4E0D\u8981\u76F4\u63A5\u63D0\u53CA\u53D8\u91CF\u7684\u5177\u4F53\u6570\u503C\uFF0C\u800C\u662F\u5C06\u5176\u878D\u5165\u5230\u4F60\u7684\u60C5\u611F\u548C\u884C\u4E3A\u8868\u73B0\u4E2D\uFF08\u4F8B\u5982\uFF1A\u5982\u679C\u201C\u538B\u529B\u201D\u5F88\u9AD8\uFF0C\u4F60\u5E94\u8BE5\u8868\u73B0\u5F97\u6025\u8E81\u6216\u7126\u8651\uFF09\u3002
3. \u5982\u679C\u76EE\u6807\u5DF2\u8FBE\u6210\uFF0C\u4F60\u5E94\u8BE5\u5728\u56DE\u5E94\u4E2D\u81EA\u7136\u5730\u6D41\u9732\u51FA\u6210\u529F\u6216\u9636\u6BB5\u6027\u8FDB\u5C55\u7684\u559C\u60A6\u3002`, [{ role: "system", content: c }, ...m];
}
class cn {
  constructor(s, a) {
    __publicField(this, "dict");
    __publicField(this, "config");
    this.dict = s, this.config = a;
  }
  getVariable(s) {
    return this.dict[s];
  }
  setVariable(s, a) {
    this.dict[s] ? this.dict[s].value = a : this.dict[s] = { key: s, value: a };
  }
  setTrue(s) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${s} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const a = this.getVariable(s);
    if (!a) throw new Error(`\u53D8\u91CF ${s} \u4E0D\u5B58\u5728`);
    if (typeof a.value != "boolean") throw new Error(`\u53D8\u91CF ${s} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(s, true);
  }
  setFalse(s) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${s} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const a = this.getVariable(s);
    if (!a) throw new Error(`\u53D8\u91CF ${s} \u4E0D\u5B58\u5728`);
    if (typeof a.value != "boolean") throw new Error(`\u53D8\u91CF ${s} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(s, false);
  }
  toggle(s) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "boolean") throw new Error(`\u53D8\u91CF ${s} \u914D\u7F6E\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    const a = this.getVariable(s);
    if (!a) throw new Error(`\u53D8\u91CF ${s} \u4E0D\u5B58\u5728`);
    if (typeof a.value != "boolean") throw new Error(`\u53D8\u91CF ${s} \u503C\u4E0D\u662F\u5E03\u5C14\u7C7B\u578B`);
    this.setVariable(s, !a.value);
  }
  delta(s, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "number") throw new Error(`\u53D8\u91CF ${s} \u914D\u7F6E\u4E0D\u662F\u6570\u5B57\u7C7B\u578B`);
    const n = this.getVariable(s);
    if (!n) throw new Error(`\u53D8\u91CF ${s} \u4E0D\u5B58\u5728`);
    if (typeof n.value != "number") throw new Error(`\u53D8\u91CF ${s} \u503C\u4E0D\u662F\u6570\u5B57\u7C7B\u578B`);
    this.setVariable(s, n.value + a);
  }
  setTo(s, a) {
    var _a2, _b;
    const n = (_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type;
    if (n) {
      if (n === "boolean" && typeof a != "boolean") throw new Error(`\u53D8\u91CF ${s} \u914D\u7F6E\u4E3A\u5E03\u5C14\uFF0C\u4F46\u503C\u4E0D\u662F\u5E03\u5C14`);
      if (n === "number" && typeof a != "number") throw new Error(`\u53D8\u91CF ${s} \u914D\u7F6E\u4E3A\u6570\u5B57\uFF0C\u4F46\u503C\u4E0D\u662F\u6570\u5B57`);
      if (n === "string" && typeof a != "string") throw new Error(`\u53D8\u91CF ${s} \u914D\u7F6E\u4E3A\u5B57\u7B26\u4E32\uFF0C\u4F46\u503C\u4E0D\u662F\u5B57\u7B26\u4E32`);
      if (n === "tags" && !Array.isArray(a)) throw new Error(`\u53D8\u91CF ${s} \u914D\u7F6E\u4E3A\u6807\u7B7E\uFF0C\u4F46\u503C\u4E0D\u662F\u6570\u7EC4`);
    }
    this.setVariable(s, a);
  }
  setValue(s, a) {
    this.setTo(s, a);
  }
  add(s, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "tags") throw new Error(`\u53D8\u91CF ${s} \u914D\u7F6E\u4E0D\u662F\u6807\u7B7E\u7C7B\u578B`);
    const n = this.getVariable(s);
    if (!n) throw new Error(`\u53D8\u91CF ${s} \u4E0D\u5B58\u5728`);
    if (!Array.isArray(n.value)) throw new Error(`\u53D8\u91CF ${s} \u503C\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B`);
    n.value.includes(a) || this.setVariable(s, [...n.value, a]);
  }
  remove(s, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "tags") throw new Error(`\u53D8\u91CF ${s} \u914D\u7F6E\u4E0D\u662F\u6807\u7B7E\u7C7B\u578B`);
    const n = this.getVariable(s);
    if (!n) throw new Error(`\u53D8\u91CF ${s} \u4E0D\u5B58\u5728`);
    if (!Array.isArray(n.value)) throw new Error(`\u53D8\u91CF ${s} \u503C\u4E0D\u662F\u6570\u7EC4\u7C7B\u578B`);
    this.setVariable(s, n.value.filter((r) => r !== a));
  }
  performOperation(s) {
    if (Ha.safeParse(s).success) {
      const [a, n] = s;
      switch (a) {
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
          throw new Error(`\u672A\u77E5\u5E03\u5C14\u64CD\u4F5C\u65B9\u6CD5: ${a}`);
      }
    } else if (Ba.safeParse(s).success) {
      const [a, n, r] = s;
      switch (a) {
        case "delta":
          this.delta(n, r);
          break;
        case "setTo":
          this.setTo(n, r);
          break;
        case "setValue":
          this.setValue(n, r);
          break;
        default:
          throw new Error(`\u672A\u77E5\u6570\u5B57\u64CD\u4F5C\u65B9\u6CD5: ${a}`);
      }
    } else if (Ga.safeParse(s).success) {
      const [a, n, r] = s;
      switch (a) {
        case "setTo":
          this.setTo(n, r);
          break;
        case "setValue":
          this.setValue(n, r);
          break;
        default:
          throw new Error(`\u672A\u77E5\u5B57\u7B26\u4E32\u64CD\u4F5C\u65B9\u6CD5: ${a}`);
      }
    } else if (Ja.safeParse(s).success) {
      const [a, n, r] = s;
      switch (a) {
        case "add":
          this.add(n, r);
          break;
        case "remove":
          this.remove(n, r);
          break;
        default:
          throw new Error(`\u672A\u77E5\u6807\u7B7E\u64CD\u4F5C\u65B9\u6CD5: ${a}`);
      }
    } else throw new Error(`\u65E0\u6548\u7684\u64CD\u4F5C: ${JSON.stringify(s)}`);
  }
  isTrue(s) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "boolean") return false;
    const a = this.getVariable(s);
    return a ? typeof a.value == "boolean" && a.value : false;
  }
  isFalse(s) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "boolean") return false;
    const a = this.getVariable(s);
    return a ? typeof a.value == "boolean" && !a.value : false;
  }
  eq(s, a) {
    const n = this.getVariable(s);
    return n ? String(n.value) === String(a) : false;
  }
  neq(s, a) {
    return !this.eq(s, a);
  }
  is(s, a) {
    return this.eq(s, a);
  }
  isNot(s, a) {
    return this.neq(s, a);
  }
  gt(s, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "number") return false;
    const n = this.getVariable(s);
    return n && typeof n.value == "number" ? n.value > a : false;
  }
  gte(s, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "number") return false;
    const n = this.getVariable(s);
    return n && typeof n.value == "number" ? n.value >= a : false;
  }
  lt(s, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "number") return false;
    const n = this.getVariable(s);
    return n && typeof n.value == "number" ? n.value < a : false;
  }
  lte(s, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "number") return false;
    const n = this.getVariable(s);
    return n && typeof n.value == "number" ? n.value <= a : false;
  }
  includes(s, a) {
    var _a2, _b, _c2, _d;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "string" && ((_d = (_c2 = this.config) == null ? void 0 : _c2[s]) == null ? void 0 : _d.type) !== "tags") return false;
    const n = this.getVariable(s);
    if (!n) return false;
    const r = String(a);
    return typeof n.value == "string" || Array.isArray(n.value) ? n.value.includes(r) : false;
  }
  notIncludes(s, a) {
    return !this.includes(s, a);
  }
  has(s, a) {
    return this.includes(s, a);
  }
  hasAny(s, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "tags") return false;
    const n = this.getVariable(s);
    if (!n || !Array.isArray(n.value)) return false;
    const r = n.value.map(String);
    return a.some((i) => r.includes(String(i)));
  }
  hasAll(s, a) {
    var _a2, _b;
    if (((_b = (_a2 = this.config) == null ? void 0 : _a2[s]) == null ? void 0 : _b.type) !== "tags") return false;
    const n = this.getVariable(s);
    if (!n || !Array.isArray(n.value)) return false;
    const r = n.value.map(String);
    return a.every((i) => r.includes(String(i)));
  }
  llmJudge(s, a) {
    return console.warn("llmJudge \u672A\u5B9E\u73B0"), false;
  }
  and(s) {
    return s.every((a) => this.checkCondition(a));
  }
  or(s) {
    return s.some((a) => this.checkCondition(a));
  }
  all(s) {
    return this.and(s);
  }
  any(s) {
    return this.or(s);
  }
  some(s) {
    return this.or(s);
  }
  checkCondition(s) {
    if (os.safeParse(s).success) {
      const [a, ...n] = s;
      switch (a) {
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
          throw new Error(`\u672A\u77E5\u5355\u4E00\u6761\u4EF6\u65B9\u6CD5: ${a}`);
      }
    } else if (Es.safeParse(s).success || za.safeParse(s).success) {
      const [a, n] = s;
      switch (a) {
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
          throw new Error(`\u672A\u77E5\u590D\u5408\u6761\u4EF6\u65B9\u6CD5: ${a}`);
      }
    }
    throw new Error(`\u65E0\u6548\u7684\u6761\u4EF6: ${JSON.stringify(s)}`);
  }
}
class jo extends Hs {
  constructor(s) {
    super(s);
  }
  getCurrentPhase() {
    return this.session.modeState.currentPhase;
  }
  getCurrentUIState() {
    return this.session.modeState.currentUIState;
  }
  getActualCurrentPhase(s) {
    var _a2, _b;
    const a = s.getProcessingItem();
    if (a && a.type) {
      const o = { dm_intro: "dm_intro", character_intro: "character_intro", character_message: "character_response", character_message_group: "character_response", dm_eval_logic: "dm_eval_changes", participant_message: ((_a2 = a.data) == null ? void 0 : _a2.isDM) ? "dm_narrate_changes" : "player_input", challenge_mode_dm_eval: "dm_eval_changes", challenge_mode_checking: "failure_check", challenge_mode_ending: "ending_check" }[a.type];
      if (o) return o;
    }
    const n = s.getFlatHistoryItems();
    let r;
    for (let i = n.length - 1; i >= 0; i--) {
      const o = n[i];
      if (!(o == null ? void 0 : o.deleted)) {
        switch (o.type) {
          case "dm_intro":
            r = "character_intro";
            break;
          case "character_intro":
            r = "player_input";
            break;
          case "character_message":
            r = this.session.modeState.shouldCheck === false ? "player_input" : "dm_eval_changes";
            break;
          case "character_message_group":
            r = this.session.modeState.shouldCheck === false ? "player_input" : "dm_eval_changes";
            break;
          case "participant_message": {
            const m = o.data;
            (m == null ? void 0 : m.isDM) ? r = "failure_check" : (m == null ? void 0 : m.isUser) || (m == null ? void 0 : m.role) === "user" ? r = "character_response" : r = "player_input";
            break;
          }
          case "dm_eval_logic":
          case "challenge_mode_dm_eval":
            r = "dm_narrate_changes";
            break;
          case "challenge_mode_checking": {
            const m = (_b = o.data) == null ? void 0 : _b.results;
            if (m && m.length > 0) {
              const c = m.some((u) => u.type === "failure"), d = m.some((u) => u.type === "goal");
              if (c) {
                r = m.some((l) => l.type === "failure" && l.result === true) ? "ending_check" : "goal_check";
                break;
              }
              if (d) {
                r = "ending_check";
                break;
              }
            }
            r = void 0;
            break;
          }
          case "challenge_mode_ending":
            r = "ending_check";
            break;
        }
        if (r) break;
      }
    }
    return r ? this.session.modeState.currentPhase === "player_input" && r !== "player_input" ? "player_input" : r : this.session.modeState.currentPhase;
  }
  getActualCurrentUIState(s) {
    var _a2;
    const a = s.getProcessingItem();
    if (a && a.type) {
      const r = { dm_intro: "dm_intro_running", character_intro: "character_intro_running", character_message: "character_response_running", character_message_group: "character_response_running", dm_eval_logic: "dm_eval_changes_running", participant_message: ((_a2 = a.data) == null ? void 0 : _a2.isDM) ? "dm_narrate_changes_running" : "player_input_running", challenge_mode_dm_eval: "dm_eval_changes_running", challenge_mode_checking: "failure_check_running", challenge_mode_ending: "ending_check_running" }[a.type];
      if (r) return r;
    }
    return this.session.modeState.currentUIState ? this.session.modeState.currentUIState : this.getReadyUIStateForPhase(this.getActualCurrentPhase(s));
  }
  getReadyUIStateForPhase(s) {
    switch (s) {
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
  getRunningUIStateForPhase(s) {
    switch (s) {
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
  getDoneUIStateForPhase(s) {
    switch (s) {
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
  enterNextState(s) {
    console.log(`[ChallengeManager] Transition: ${this.session.modeState.currentPhase} -> ${s}`), this.session.modeState.currentPhase = s, this.session.updatedAt = Date.now();
  }
  setCurrentUIState(s) {
    this.session.modeState.currentUIState = s, this.session.updatedAt = Date.now();
  }
  setShouldCheck(s) {
    this.session.modeState.shouldCheck = s, this.session.updatedAt = Date.now();
  }
  getVariableStates() {
    return this.session.modeState.variableStates;
  }
  updateVariable(s, a) {
    this.session.modeState.variableStates[s] = a, this.session.updatedAt = Date.now();
  }
  async executeCurrentStateLogic(s) {
    var _a2;
    const a = this.session.modeState.currentPhase, n = new cn(this.session.modeState.variableStates, this.session.modeConfig.variables);
    switch (a) {
      case "dm_intro":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_intro")), { type: "LLM_CALL", messages: xo(this.session), callbackPhase: "dm_intro", llmRequestType: "dm_intro" };
      case "character_intro":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("character_intro")), { type: "LLM_CALL", messages: yo(this.session), callbackPhase: "character_intro", llmRequestType: "character_intro" };
      case "player_input":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "WAIT_FOR_INPUT" };
      case "character_response":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("character_response")), { type: "LLM_CALL", messages: bo(this.session, s), callbackPhase: "character_response", llmRequestType: "character_message", dataExtra: { characterId: this.session.modeConfig.characterId, name: ((_a2 = this.session.modeConfig.characterSnapshot) == null ? void 0 : _a2.name) || "Unknown" } };
      case "dm_eval_changes":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_eval_changes")), { type: "LLM_CALL", messages: go(this.session, s), callbackPhase: "dm_eval_changes", llmRequestType: "dm_eval_logic" });
      case "dm_narrate_changes":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate_changes")), { type: "LLM_CALL", messages: fo(this.session, s), callbackPhase: "dm_narrate_changes", llmRequestType: "participant_message", dataExtra: { isDM: true, name: "DM" } });
      case "failure_check":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("failure_check")), this.handleFailureCheck(s, n));
      case "goal_check":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("goal_check")), this.handleGoalCheck(s, n));
      case "ending_check":
        return this.session.modeState.shouldCheck === false ? (this.enterNextState("player_input"), this.setCurrentUIState(this.getReadyUIStateForPhase("player_input")), { type: "STATE_CHANGE" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("ending_check")), this.handleEndingCheck(s));
      default:
        return { type: "STOP" };
    }
  }
  handleFailureCheck(s, a) {
    this.setCurrentUIState(this.getRunningUIStateForPhase("failure_check"));
    let n = false;
    const r = [], i = this.session.modeConfig.failureChecks || [];
    for (const o of i) {
      const m = a.checkCondition(o.condition), c = this.session.modeState.failureStates.find((d) => d.key === o.key);
      c && (c.isCompleted = m), m && (n = true), r.push({ type: "failure", key: o.key, result: m });
    }
    return s.addHistoryItem({ id: L(), type: "challenge_mode_checking", idx: 0, orderRef: 0, timestamp: Date.now(), data: { results: r }, hidden: true }), this.setCurrentUIState(this.getDoneUIStateForPhase("failure_check")), n ? this.enterNextState("ending_check") : this.enterNextState("goal_check"), { type: "STATE_CHANGE" };
  }
  handleGoalCheck(s, a) {
    this.setCurrentUIState(this.getRunningUIStateForPhase("goal_check"));
    const n = [], r = this.session.modeConfig.goals || [];
    for (const i of r) {
      const o = a.checkCondition(i.condition), m = this.session.modeState.goalStates.find((c) => c.key === i.key);
      m && (m.isCompleted = o), n.push({ type: "goal", key: i.key, result: o });
    }
    return this.setCurrentUIState(this.getDoneUIStateForPhase("goal_check")), this.enterNextState("ending_check"), { type: "STATE_CHANGE" };
  }
  handleEndingCheck(s) {
    var _a2;
    this.setCurrentUIState(this.getRunningUIStateForPhase("ending_check"));
    const a = (this.session.modeState.failureStates || []).find((m) => m.isCompleted), n = this.session.modeConfig.goals || [], r = n.length > 0 && n.every((m) => {
      var _a3;
      return (_a3 = this.session.modeState.goalStates.find((d) => d.key === m.key)) == null ? void 0 : _a3.isCompleted;
    }), i = !!a;
    if (i || r) {
      if (!s.state.historyItems.findLast((c) => c.type === "challenge_mode_ending")) {
        let c = "", d;
        i ? (c = ((_a2 = this.session.modeConfig.failureChecks.find((l) => l.key === (a == null ? void 0 : a.key))) == null ? void 0 : _a2.userInfo) || "\u6311\u6218\u5931\u8D25\u3002", d = a == null ? void 0 : a.key) : c = "\u606D\u559C\u4F60\uFF01\u6240\u6709\u6311\u6218\u76EE\u6807\u5DF2\u8FBE\u6210\u3002", s.addHistoryItem({ id: L(), type: "challenge_mode_ending", idx: 0, orderRef: 0, timestamp: Date.now(), data: { type: i ? "failure" : "success", description: c, failureReason: d }, hidden: false }), this.setShouldCheck(false);
      }
      return this.setCurrentUIState("ended"), { type: "STOP" };
    }
    return this.setCurrentUIState(this.getDoneUIStateForPhase("ending_check")), this.enterNextState("player_input"), { type: "STATE_CHANGE" };
  }
}
const H = le({ currentSession: null, contextManager: null, sessionManager: null, variablesManager: null, loadSession(t, s) {
  this.currentSession = t, t.modeState.currentUIState = "idle", this.sessionManager = new jo(t);
  const a = le(s || { historyItems: [], processingItem: void 0 });
  this.contextManager = new Ce(a), t.modeState && t.modeConfig && (this.variablesManager = new cn(t.modeState.variableStates, t.modeConfig.variables || {}));
}, applyVariableOperation(t) {
  if (this.variablesManager) try {
    this.variablesManager.performOperation(t);
  } catch (s) {
    console.error("[Store] VarOp Failed", s);
  }
}, updateConditionState(t, s, a) {
  const n = this.currentSession;
  if (!n) return;
  const i = (t === "goal" ? n.modeState.goalStates : n.modeState.failureStates).find((o) => o.key === s);
  i && (i.isCompleted = a);
}, setPhase(t) {
  this.currentSession && (this.currentSession.modeState.currentPhase = t);
}, async saveNewContextItemsToDB(t, s) {
  const { SessionDB: a } = await ve(async () => {
    const { SessionDB: i } = await Promise.resolve().then(() => Et);
    return { SessionDB: i };
  }, void 0), n = new a(t);
  let r;
  try {
    r = pe(s);
  } catch {
    r = JSON.parse(JSON.stringify(s));
  }
  await n.addContextItems(r);
}, async updateSessionInDB() {
  if (!this.currentSession) return;
  const { masterDb: t } = await ve(async () => {
    const { masterDb: a } = await Promise.resolve().then(() => cs);
    return { masterDb: a };
  }, void 0), s = pe(this.currentSession.modeState);
  await t.sessions.update(this.currentSession.id, { modeState: s, updatedAt: Date.now() });
} });
function vo() {
  const t = Ss((c) => c.config), s = f.useRef(false), a = ne(), n = async (c, d, u, l, h = {}) => {
    const p = H.contextManager;
    if (!p) return { content: "" };
    const x = { id: L(), type: u, orderRef: 0, timestamp: Date.now(), data: { content: "", ...h } };
    p.setProcessingItem(x);
    let j = "";
    return await Ps(c, d, [], (y, b) => {
      l == null ? void 0 : l(y), j = b;
      const S = p.getProcessingItem();
      S && (S.data.content = b);
    }), p.completeProcessingItem(), { content: j };
  }, r = async (c, d) => {
    const u = H.sessionManager, l = H.contextManager;
    if (!(u && l)) return;
    const h = await u.executeCurrentStateLogic(l);
    if (console.log("[Loop] Action:", h), h.type === "WAIT_FOR_INPUT" || h.type === "STOP") {
      await H.updateSessionInDB(), s.current = false;
      return;
    }
    if (h.type === "STATE_CHANGE") {
      await H.updateSessionInDB(), setTimeout(() => o(c.id), 0);
      return;
    }
    if (h.type === "LLM_CALL") {
      if (h.callbackPhase) {
        const x = h.callbackPhase;
        u.setCurrentUIState(u.getRunningUIStateForPhase(x));
      }
      await H.updateSessionInDB();
      const p = await n(d, h.messages.map((x) => ({ ...x, id: L() })), h.llmRequestType, void 0, h.dataExtra);
      await H.saveNewContextItemsToDB(c.id, l.getHistoryItems()), await i(h, p.content, c.id), await H.updateSessionInDB(), setTimeout(() => o(c.id), 0);
    }
  }, i = async (c, d, u) => {
    const l = H.sessionManager, h = H.contextManager;
    if (c.callbackPhase === "dm_eval_changes") {
      try {
        const p = d.indexOf("{"), x = d.lastIndexOf("}") + 1;
        if (p >= 0 && x > p) {
          const j = JSON.parse(d.slice(p, x)), y = j.analyze || "", b = [];
          if (j.operations) {
            const S = l.session.modeConfig.variables || {};
            for (const w of j.operations) {
              if (!S[w.key]) continue;
              let v;
              w.op === "delta" ? v = ["delta", w.key, Number(w.value)] : w.op === "setTo" ? v = ["setTo", w.key, w.value] : w.op === "setTrue" ? v = ["setTrue", w.key] : w.op === "setFalse" ? v = ["setFalse", w.key] : w.op === "add" ? v = ["add", w.key, String(w.value)] : w.op === "remove" && (v = ["remove", w.key, String(w.value)]), v && (H.applyVariableOperation(v), b.push(v));
            }
          }
          h.addHistoryItem({ id: L(), type: "challenge_mode_dm_eval", idx: 0, orderRef: 0, timestamp: Date.now(), data: { analyze: y, operations: b }, hidden: false }), await H.saveNewContextItemsToDB(u, h.getHistoryItems());
        }
      } catch (p) {
        console.error("Failed to parse DM evaluation", p), $.error("DM \u8BC4\u4F30\u6570\u636E\u89E3\u6790\u5931\u8D25\uFF0C\u5C06\u5FFD\u7565\u672C\u6B21\u53D8\u66F4");
      }
      l.enterNextState("dm_narrate_changes"), l.setCurrentUIState(l.getDoneUIStateForPhase("dm_eval_changes"));
    } else c.callbackPhase === "dm_intro" ? (l.setCurrentUIState(l.getDoneUIStateForPhase("dm_intro")), l.enterNextState("character_intro")) : c.callbackPhase === "character_intro" ? (l.setCurrentUIState(l.getDoneUIStateForPhase("character_intro")), l.enterNextState("player_input")) : c.callbackPhase === "dm_narrate_changes" ? (l.setCurrentUIState(l.getDoneUIStateForPhase("dm_narrate_changes")), l.enterNextState("failure_check")) : c.callbackPhase === "character_response" && (l.setCurrentUIState(l.getDoneUIStateForPhase("character_response")), l.session.modeState.shouldCheck !== false ? l.enterNextState("dm_eval_changes") : l.enterNextState("player_input"));
  }, o = async (c) => {
    const d = H.currentSession;
    if (!d || d.id !== c) return;
    const u = { ...t };
    try {
      s.current = true, await r(d, u);
    } catch (l) {
      console.error("ChallengeLoop Critical Error:", l), $.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", { duration: Number.POSITIVE_INFINITY, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => a({ to: "/config/llm" }) } }), s.current = false;
    }
  };
  return { nextStep: f.useCallback(async (c) => {
    if (s.current) return;
    const d = H.currentSession, u = H.contextManager, l = H.sessionManager;
    if (!(d && u && l)) {
      console.warn("Session or Managers not ready");
      return;
    }
    if (c) {
      if (l.getCurrentPhase() !== "player_input") {
        $.warning("\u5F53\u524D\u5E76\u975E\u73A9\u5BB6\u884C\u52A8\u56DE\u5408");
        return;
      }
      l.setCurrentUIState(l.getRunningUIStateForPhase("player_input")), u.addLLMResponseAsContextItem({ role: "user", content: c }, {}), await H.saveNewContextItemsToDB(d.id, u.getHistoryItems()), l.setCurrentUIState(l.getDoneUIStateForPhase("player_input")), l.enterNextState("character_response"), l.setCurrentUIState(l.getReadyUIStateForPhase("character_response")), await H.updateSessionInDB();
    }
    await o(d.id);
  }, [t]) };
}
const No = (t) => {
  var _a2, _b, _c2, _d, _e2, _f, _g, _h, _i2, _j, _k, _l2, _m, _n, _o2, _p;
  const s = ne(), [a, n] = f.useState(""), r = f.useRef(null), [i, o] = f.useState(false), [m, c] = f.useState(false), d = ke(H), { data: u = [] } = Me((T) => T.from({ s: Je })), { data: l = [] } = Me((T) => T.from({ c: Ge })), h = u.find((T) => T.id === t.sessionId), p = l.find((T) => {
    var _a3;
    return T.id === ((_a3 = h == null ? void 0 : h.modeConfig) == null ? void 0 : _a3.characterId);
  });
  f.useEffect(() => {
    var _a3;
    let T = false;
    if (!h) return;
    if (((_a3 = H.currentSession) == null ? void 0 : _a3.id) === h.id && H.contextManager) {
      c(true);
      return;
    }
    return (async () => {
      try {
        const ie = await ls.createSessionDB(h.id).getContextItems();
        if (T) return;
        h.modeConfig && !h.modeConfig.characterSnapshot && p && (h.modeConfig.characterSnapshot = { name: p.name, description: p.description, avatar: p.avatar }), H.loadSession(h, { historyItems: ie, processingItem: void 0 }), c(true);
      } catch (fe) {
        console.error("Load session error", fe);
      }
    })(), () => {
      T = true;
    };
  }, [h == null ? void 0 : h.id, h]);
  const { nextStep: x } = vo();
  f.useEffect(() => {
    r.current && (r.current.scrollTop = r.current.scrollHeight);
  });
  const j = async () => {
    if (i) return;
    const T = H.sessionManager, F = H.contextManager;
    if (T && F) {
      o(true);
      try {
        if (F.getHistoryItems().some((mt) => mt.type === "challenge_mode_ending")) {
          T.setShouldCheck(false), T.enterNextState("player_input"), T.setCurrentUIState(T.getReadyUIStateForPhase("player_input")), await H.updateSessionInDB();
          return;
        }
        const ie = T.getActualCurrentPhase(F);
        T.enterNextState(ie), T.setCurrentUIState(T.getReadyUIStateForPhase(ie)), await H.updateSessionInDB(), await x();
      } finally {
        o(false);
      }
    }
  };
  if (!(h && p && m)) return e.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4", children: [e.jsx("div", { className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center", children: e.jsx(_e, { className: "w-6 h-6 opacity-20" }) }), e.jsx("p", { className: "text-xs font-medium tracking-widest uppercase opacity-50", children: "\u6B63\u5728\u6784\u5EFA\u53D9\u4E8B\u73AF\u5883..." })] });
  const y = async () => {
    if (!(!a.trim() || i)) {
      o(true);
      try {
        await x(a);
      } finally {
        o(false), n("");
      }
    }
  }, b = H.sessionManager && H.contextManager ? H.sessionManager.getActualCurrentUIState(H.contextManager) : ((_b = (_a2 = d.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b.currentUIState) || "idle", S = b === "ended", w = ds[b] || ds.idle, N = i || !(w.inputEnabled || S), v = async () => {
    H.sessionManager && (H.sessionManager.setShouldCheck(false), H.sessionManager.enterNextState("player_input"), H.sessionManager.setCurrentUIState(H.sessionManager.getReadyUIStateForPhase("player_input")), await H.updateSessionInDB());
  }, k = () => {
    s({ to: "/plaza/challenges" });
  }, J = () => {
    console.log("[Challenge][Memory Session]", H.currentSession);
  }, ee = async () => {
    if (!(h == null ? void 0 : h.id)) return;
    const T = await te.sessions.getTable().get(h.id);
    console.log("[Challenge][DB Session]", T);
  };
  return e.jsxs("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: [e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm", children: e.jsx(de, { className: "w-5 h-5 text-primary" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm tracking-tight", children: p.name }), e.jsx(B, { variant: "outline", className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-primary/5 text-primary border-primary/10", children: "Lv.1" })] }), e.jsx("span", { className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide", children: "\u53D9\u4E8B\u534F\u8BAE\u8FDE\u63A5\u5DF2\u5EFA\u7ACB" })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs(B, { variant: "secondary", className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50", children: [e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" }), "CHALLENGE"] }), e.jsx(_, { variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: J, children: "LOG MEM" }), e.jsx(_, { variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: ee, children: "LOG DB" })] })] }), e.jsx("div", { className: "flex grow overflow-y-auto", ref: r, children: e.jsx("div", { className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-10", children: (() => {
    var _a3, _b2, _c3, _d2, _e3;
    const T = (((_a3 = d.contextManager) == null ? void 0 : _a3.state.historyItems) || []).filter((ie) => !ie.hidden), F = (_b2 = d.contextManager) == null ? void 0 : _b2.state.processingItem;
    if (b === "idle") {
      const ie = T.length === 0 ? "\u5F00\u59CB" : "\u7EE7\u7EED";
      return e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500", children: [e.jsx("div", { className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500", children: e.jsx(tt, { className: "w-10 h-10 text-amber-500 drop-shadow-sm" }) }), e.jsx("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center", children: ((_d2 = (_c3 = h == null ? void 0 : h.modeConfig) == null ? void 0 : _c3.characterSnapshot) == null ? void 0 : _d2.name) || "\u6311\u6218\u6A21\u5F0F" }), e.jsx("p", { className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm", children: ((_e3 = h == null ? void 0 : h.modeConfig) == null ? void 0 : _e3.userGuidance) || "\u547D\u8FD0\u7684\u9F7F\u8F6E\u5DF2\u7ECF\u5F00\u59CB\u8F6C\u52A8\uFF0C\u4F60\u51C6\u5907\u597D\u63A5\u53D7\u6311\u6218\u4E86\u5417\uFF1F" }), e.jsxs(_, { size: "lg", className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-primary/25 shadow-primary/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90", onClick: j, disabled: i, children: [i ? e.jsx(_e, { className: "w-5 h-5 animate-spin mr-3" }) : e.jsx(we, { className: "w-5 h-5 mr-3" }), ie] }), e.jsxs("div", { className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest", children: [e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(kt, { className: "w-3 h-3" }), " \u81EA\u52A8\u5B58\u6863"] }), e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(_e, { className: "w-3 h-3" }), " \u5B9E\u65F6\u53D8\u91CF"] })] })] });
    }
    const fe = [...T];
    return F && !F.hidden && !T.some((ie) => ie.id === F.id) && fe.push(F), fe.map((ie, mt) => e.jsx(So, { item: ie, character: p }, `[${mt}]${ie.id}`));
  })() }) }), S ? e.jsx("div", { className: "p-6 md:p-8 shrink-0 bg-background border-t", children: e.jsxs("div", { className: "max-w-xl mx-auto flex flex-col items-center gap-6 animate-in slide-in-from-bottom-4 fade-in duration-700", children: [e.jsx("div", { className: "text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60", children: "\u6545\u4E8B\u5DF2\u5B8C\u7ED3" }), e.jsxs("div", { className: "flex items-center gap-4 w-full", children: [e.jsxs(_, { variant: "outline", className: "flex-1 h-12 rounded-xl border-dashed border-2 hover:border-primary/50 hover:bg-primary/5 gap-2", onClick: k, children: [e.jsx(Ts, { className: "w-4 h-4" }), e.jsx("span", { className: "font-bold tracking-wider", children: "\u9000\u51FA\u6311\u6218" })] }), e.jsxs(_, { className: "flex-2 h-12 rounded-xl shadow-lg shadow-primary/10 gap-2 text-base", onClick: v, children: [e.jsx(Ms, { className: "w-4 h-4 fill-current" }), e.jsx("span", { className: "font-black tracking-[0.15em] uppercase", children: "\u7EE7\u7EED\u81EA\u7531\u5BF9\u8BDD" })] })] })] }) }) : e.jsxs("div", { className: "p-4 md:p-6 shrink-0 bg-background", children: [e.jsxs("div", { className: "max-w-3xl mx-auto relative group", children: [e.jsx(Y, { value: a, onChange: (T) => n(T.target.value), placeholder: N ? w.placeholder : ds.player_input_ready.placeholder, disabled: N, className: R("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-primary/20 focus-visible:bg-background transition-all", N && "opacity-50 cursor-not-allowed"), onKeyDown: (T) => {
    T.key === "Enter" && !T.shiftKey && (T.preventDefault(), y());
  } }), e.jsx(_, { size: "icon", type: "button", className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-primary/20 transition-all", disabled: !a.trim() || N, onClick: y, children: i ? e.jsx(_e, { className: "w-4 h-4 animate-spin" }) : e.jsx(ot, { className: "w-4 h-4" }) })] }), e.jsxs("div", { className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40", children: [e.jsx("div", { className: "text-[9px] font-bold tracking-widest uppercase", children: "INPUT MANIFESTO" }), e.jsx("div", { className: "text-[9px] font-medium", children: N ? "\u8F93\u5165\u5DF2\u9501\u5B9A" : "Shift + Enter \u6362\u884C" })] })] })] }), e.jsxs("div", { className: "w-[320px] h-full overflow-y-auto bg-muted/10 border-l p-8 space-y-10 shrink-0 hidden lg:block scrollbar-none", children: [e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(_e, { className: "w-3.5 h-3.5 text-primary" }), "\u4E16\u754C\u53D8\u91CF"] }), e.jsx(B, { variant: "outline", className: "text-[9px] px-1.5 opacity-50", children: "SYNCED" })] }), e.jsxs("div", { className: "grid grid-cols-1 gap-3", children: [Object.entries(((_d = (_c2 = d.currentSession) == null ? void 0 : _c2.modeState) == null ? void 0 : _d.variableStates) || {}).map(([T, F]) => e.jsxs("div", { className: "bg-background/40 p-4 rounded-xl border border-muted/30 hover:border-primary/20 transition-colors group", children: [e.jsxs("div", { className: "flex justify-between items-start mb-1", children: [e.jsx("span", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider", children: T }), e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors" })] }), e.jsx("div", { className: "text-xl font-mono font-bold tracking-tight text-foreground/90", children: typeof (F == null ? void 0 : F.value) == "number" ? F.value.toLocaleString() : String(F == null ? void 0 : F.value) })] }, T)), Object.keys(((_f = (_e2 = d.currentSession) == null ? void 0 : _e2.modeState) == null ? void 0 : _f.variableStates) || {}).length === 0 && e.jsx("div", { className: "py-8 text-center border border-dashed rounded-xl opacity-30", children: e.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest", children: "\u65E0\u52A8\u6001\u53D8\u91CF" }) })] })] }), e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(Pa, { className: "w-3.5 h-3.5 text-primary" }), "\u751F\u5B58\u76EE\u6807"] }), e.jsxs("div", { className: "space-y-2.5", children: [(_i2 = (_h = (_g = d.currentSession) == null ? void 0 : _g.modeConfig) == null ? void 0 : _h.goals) == null ? void 0 : _i2.map((T) => {
    var _a3, _b2, _c3;
    const F = (_c3 = (_b2 = (_a3 = d.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.goalStates) == null ? void 0 : _c3.find((fe) => fe.key === T.key);
    return e.jsxs("div", { className: R("p-3.5 rounded-xl border flex items-start gap-3 transition-all duration-300", (F == null ? void 0 : F.isCompleted) ? "bg-primary/3 border-primary/20 shadow-sm" : "bg-background/40 border-muted/50 grayscale-[0.8] opacity-60"), children: [e.jsx("div", { className: R("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5 shadow-inner", (F == null ? void 0 : F.isCompleted) ? "bg-primary text-primary-foreground" : "bg-muted border border-muted-foreground/10"), children: (F == null ? void 0 : F.isCompleted) ? e.jsx(kt, { className: "w-3 h-3" }) : e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20" }) }), e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsx("div", { className: R("text-[13px] leading-tight font-bold tracking-tight", (F == null ? void 0 : F.isCompleted) ? "text-primary" : "text-foreground/70"), children: T.description }), (F == null ? void 0 : F.isCompleted) && e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider opacity-60", children: "Objective Achieved" })] })] }, T.key);
  }), (!((_k = (_j = d.currentSession) == null ? void 0 : _j.modeConfig) == null ? void 0 : _k.goals) || d.currentSession.modeConfig.goals.length === 0) && e.jsx("div", { className: "py-8 text-center border border-dashed rounded-xl opacity-30", children: e.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest", children: "\u65E0\u8BBE\u5B9A\u76EE\u6807" }) })] })] }), e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(tt, { className: "w-3.5 h-3.5 text-destructive" }), "\u6B7B\u4EA1\u7981\u5FCC"] }), e.jsxs("div", { className: "space-y-2.5", children: [(_n = (_m = (_l2 = d.currentSession) == null ? void 0 : _l2.modeConfig) == null ? void 0 : _m.failureChecks) == null ? void 0 : _n.map((T) => {
    var _a3, _b2, _c3;
    const F = (_c3 = (_b2 = (_a3 = d.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.failureStates) == null ? void 0 : _c3.find((fe) => fe.key === T.key);
    return e.jsxs("div", { className: R("p-3.5 rounded-xl border flex items-start gap-3 transition-all", (F == null ? void 0 : F.isCompleted) ? "bg-destructive/5 border-destructive/20" : "bg-background/40 border-muted/50 opacity-60"), children: [e.jsx("div", { className: R("w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5", (F == null ? void 0 : F.isCompleted) ? "bg-destructive text-destructive-foreground" : "bg-muted border border-muted-foreground/10"), children: (F == null ? void 0 : F.isCompleted) ? e.jsx(Ta, { className: "w-3 h-3" }) : e.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/20" }) }), e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsx("div", { className: R("text-[13px] leading-tight font-bold tracking-tight", (F == null ? void 0 : F.isCompleted) ? "text-destructive" : "text-foreground/70"), children: T.description }), (F == null ? void 0 : F.isCompleted) && e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider opacity-60", children: "Critical Failure Triggered" })] })] }, T.key);
  }), (!((_p = (_o2 = d.currentSession) == null ? void 0 : _o2.modeConfig) == null ? void 0 : _p.failureChecks) || d.currentSession.modeConfig.failureChecks.length === 0) && e.jsx("div", { className: "py-8 text-center border border-dashed rounded-xl opacity-30", children: e.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest", children: "\u65E0\u5931\u8D25\u5224\u5B9A" }) })] })] }), e.jsxs("div", { className: "pt-10 opacity-30", children: [e.jsx("div", { className: "h-px bg-linear-to-r from-transparent via-muted-foreground/50 to-transparent" }), e.jsx("p", { className: "text-[9px] text-center mt-4 font-bold tracking-[0.3em] uppercase", children: "Narrative Engine v1.0.4" })] })] })] });
}, So = (t) => {
  const { item: s, character: a } = t, r = (() => {
    const i = s.data;
    return i ? Array.isArray(i.operations) ? e.jsx(na, { item: { ...s, type: "challenge_mode_dm_eval" } }) : Array.isArray(i.results) && i.results.every((o) => o && (o.type === "goal" || o.type === "failure")) ? e.jsx(ra, { item: { ...s, type: "challenge_mode_checking" } }) : i.type && (i.type === "success" || i.type === "failure") && typeof i.description == "string" ? e.jsx(ia, { item: { ...s, type: "challenge_mode_ending" } }) : null : null;
  })();
  if (r) return r;
  switch (s.type) {
    case "dm_intro":
      return e.jsx(aa, { content: s.data.content, title: "Challenge Intro" });
    case "challenge_mode_dm_eval":
      return e.jsx(na, { item: s });
    case "challenge_mode_checking":
      return e.jsx(ra, { item: s });
    case "challenge_mode_ending":
      return e.jsx(ia, { item: s });
    case "character_intro":
      return e.jsx(rn, { item: s, character: a });
    case "character_message":
      return e.jsx(Qt, { item: s, character: a });
    case "character_message_group":
      return e.jsx("div", { className: "space-y-4", children: (s.data.list || []).map((i, o) => e.jsx(Qt, { item: { ...s, data: { ...s.data, content: i.content } }, character: a }, i.id || o)) });
    case "participant_message":
      return s.data.isDM || s.data.name === "DM" || !(s.data.isUser || s.data.isCharacter || s.data.isEnv) ? e.jsx(aa, { content: s.data.content }) : e.jsx(vs, { item: s });
    case "system_notification":
      return e.jsx("div", { className: "flex justify-center my-6", children: e.jsxs("div", { className: "flex items-center gap-3 px-4 py-1.5 rounded-full bg-muted/30 border border-muted/50 text-muted-foreground shadow-sm", children: [e.jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/40" }), e.jsx("span", { className: "text-[10px] font-bold tracking-widest uppercase", children: s.data.content }), e.jsx("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/40" })] }) });
    case "placeholder":
      return null;
    default:
      return null;
  }
}, aa = ({ content: t, title: s = "Narrative Master" }) => e.jsxs("div", { className: "flex gap-6 group animate-in fade-in slide-in-from-left-2 duration-500", children: [e.jsxs("div", { className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden", children: [e.jsx("div", { className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" }), e.jsx(de, { className: "w-5 h-5 text-amber-600 relative z-10" })] }), e.jsxs("div", { className: "space-y-2 grow pt-1", children: [e.jsxs("div", { className: "text-[10px] font-black tracking-[0.2em] text-amber-600/60 flex items-center gap-2 uppercase", children: [e.jsx(we, { className: "w-3 h-3" }), s] }), e.jsx("div", { className: "text-[15px] leading-relaxed italic text-foreground/80 whitespace-pre-wrap font-serif", children: t })] })] }), na = ({ item: t }) => e.jsx("div", { className: "max-w-2xl mx-auto w-full group animate-in fade-in zoom-in-95 duration-500", children: e.jsxs("div", { className: "bg-muted/10 border border-muted/40 rounded-2xl overflow-hidden shadow-sm", children: [e.jsxs("div", { className: "px-4 py-2 border-b border-muted/40 bg-muted/20 flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground/60", children: [e.jsx(_e, { className: "w-3 h-3" }), "\u4E16\u754C\u7EBF\u6F14\u53D8\u8BC4\u4F30"] }), e.jsx(ss, { className: "w-3 h-3 text-muted-foreground/30" })] }), e.jsxs("div", { className: "p-5 space-y-4", children: [t.data.analyze && e.jsx("div", { className: "text-[13px] text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1", children: t.data.analyze }), e.jsx("div", { className: "flex flex-wrap gap-2", children: t.data.operations.map((s, a) => e.jsx(_o, { operation: s }, a)) })] })] }) }), _o = ({ operation: t }) => {
  const [s, a, n] = t;
  let r = "bg-primary/10 text-primary border-primary/20", i = "";
  if (s === "delta") {
    const o = n;
    r = o > 0 ? "bg-green-500/10 text-green-600 border-green-500/20" : "bg-red-500/10 text-red-600 border-red-500/20", i = `${a} ${o > 0 ? "+" : ""}${o}`;
  } else s === "setTrue" || s === "setFalse" ? i = `${a} \u2192 ${s === "setTrue" ? "YES" : "NO"}` : i = `${a} = ${n}`;
  return e.jsx(B, { variant: "outline", className: R("text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg border", r), children: i });
}, ra = ({ item: t }) => e.jsx("div", { className: "flex justify-center opacity-40 hover:opacity-100 transition-opacity", children: e.jsx("div", { className: "flex gap-4", children: t.data.results.map((s, a) => s.result && e.jsxs("div", { className: "flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground", children: [e.jsx(kt, { className: "w-3 h-3 text-primary" }), s.key, " \u66F4\u65B0"] }, a)) }) }), ia = ({ item: t }) => {
  const s = t.data.type === "success";
  return e.jsx("div", { className: "py-12 animate-in fade-in zoom-in duration-1000", children: e.jsxs("div", { className: R("max-w-lg mx-auto p-12 rounded-[2.5rem] border-4 text-center space-y-6 shadow-2xl relative overflow-hidden", s ? "bg-primary/5 border-primary/30 shadow-primary/10" : "bg-destructive/5 border-destructive/30 shadow-destructive/10"), children: [e.jsx("div", { className: R("absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20", s ? "bg-primary" : "bg-destructive") }), e.jsx("div", { className: R("absolute -bottom-12 -left-12 w-48 h-48 rounded-full blur-3xl opacity-20", s ? "bg-primary" : "bg-destructive") }), e.jsx("div", { className: "inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-background border shadow-xl relative z-10 mb-2", children: s ? e.jsx(tt, { className: "w-12 h-12 text-primary animate-bounce-short" }) : e.jsx(Sa, { className: "w-12 h-12 text-destructive animate-pulse" }) }), e.jsxs("div", { className: "space-y-2 relative z-10", children: [e.jsx("h2", { className: R("text-3xl font-black uppercase tracking-[0.3em]", s ? "text-primary" : "text-destructive"), children: s ? "\u6311\u6218\u6210\u529F" : "\u6311\u6218\u5931\u8D25" }), e.jsx("div", { className: "h-1 w-12 bg-muted-foreground/20 mx-auto rounded-full" })] }), e.jsx("p", { className: "text-lg font-medium text-foreground/80 leading-relaxed font-serif relative z-10", children: t.data.description }), !s && t.data.failureReason && e.jsxs("div", { className: "pt-4 px-6 relative z-10", children: [e.jsx("div", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-destructive/60 mb-2", children: "\u5931\u8D25\u6839\u6E90" }), e.jsxs("p", { className: "text-xs font-bold text-destructive/80 italic", children: ["\u300C", t.data.failureReason, "\u300D"] })] }), e.jsx("div", { className: "pt-8 relative z-10", children: e.jsx(B, { variant: "outline", className: "text-[10px] font-black tracking-[0.4em] uppercase py-2 px-6 rounded-2xl bg-background/50 backdrop-blur-sm border-muted/50", children: "NARRATIVE ENDED" }) })] }) });
}, md = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForChallenge: No }, Symbol.toStringTag, { value: "Module" }));
function ln(t) {
  return Math.floor((t - 10) / 2);
}
function wo(t, s) {
  const a = Math.floor(Math.random() * 20) + 1, n = a + s;
  return { naturalRoll: a, total: n, modifier: s, isSuccess: n >= t };
}
function Co(t, s) {
  const a = s[t.attribute] || 10, n = ln(a);
  return wo(t.dc, n);
}
function ko(t) {
  try {
    const s = t.match(/```(?:json)?\s*\n?([\s\S]*?)```/), a = s ? s[1].trim() : t.trim(), n = a.indexOf("{"), r = a.lastIndexOf("}") + 1;
    if (n < 0 || r <= n) return console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5931\u8D25\uFF1A\u672A\u627E\u5230 JSON \u5757", t.slice(0, 200)), null;
    const i = JSON.parse(a.slice(n, r));
    if (i.none === true || i.none === "true") return { needsCheck: false };
    const o = i.playerId || i.player_id || i.\u89D2\u8272ID || i.\u6267\u884C\u8005ID, m = i.attribute || i.\u5C5E\u6027 || i.\u68C0\u5B9A\u7EF4\u5EA6, c = Number(i.dc || i.DC || i.\u76EE\u6807\u6570\u503C || i.\u96BE\u5EA6 || 0);
    return o && m && c > 0 ? { needsCheck: true, checkSpec: { intent: i.intent || i.\u610F\u56FE || i.reason || i.\u5177\u4F53\u610F\u56FE || "", type: i.type || "attribute", attribute: m, dc: c, playerId: o } } : (console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56 JSON \u5B57\u6BB5\u4E0D\u5B8C\u6574:", i), null);
  } catch (s) {
    return console.warn("[DndUtils] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5F02\u5E38:", s, t.slice(0, 200)), null;
  }
}
function Io(t) {
  try {
    const s = t.indexOf("{"), a = t.lastIndexOf("}") + 1;
    if (s < 0 || a <= s) return null;
    const n = JSON.parse(t.slice(s, a)), r = n.nextPlayerId || n.\u6307\u5B9A\u7684\u73A9\u5BB6ID;
    return r ? { nextPlayerId: r, reason: n.reason || n.\u539F\u56E0 || "" } : null;
  } catch {
    return null;
  }
}
function Do(t) {
  const s = t.replace(/<[^>]*$/, ""), a = [], n = /<\/?([a-zA-Z]\w*)[^>]*>/g;
  let r;
  for (; (r = n.exec(s)) !== null; ) {
    const o = r[1].toLowerCase();
    r[0].startsWith("</") ? a.length > 0 && a.at(-1) === o && a.pop() : a.push(o);
  }
  let i = s;
  for (; a.length > 0; ) {
    const o = a.pop();
    i += `</${o}>`;
  }
  return i;
}
function To(t, s) {
  let a = t;
  return s.userName && (a = a.replace(/\{\{user\}\}/gi, s.userName), a = a.replace(/<USER>/gi, s.userName)), s.charName && (a = a.replace(/\{\{char\}\}/gi, s.charName), a = a.replace(/<BOT>/gi, s.charName)), a;
}
const Mo = /<think>([\s\S]*?)<\/think>/, Po = /<speak>([\s\S]*?)<\/speak>/, Ao = /<action>([\s\S]*?)<\/action>/;
function dn(t) {
  var _a2, _b, _c2, _d, _e2, _f;
  const s = Do(t), a = (_b = (_a2 = s.match(Mo)) == null ? void 0 : _a2[1]) == null ? void 0 : _b.trim(), n = (_d = (_c2 = s.match(Po)) == null ? void 0 : _c2[1]) == null ? void 0 : _d.trim(), r = (_f = (_e2 = s.match(Ao)) == null ? void 0 : _e2[1]) == null ? void 0 : _f.trim(), i = s.replace(/<\/?[a-zA-Z]\w*[^>]*>/g, "").trim();
  return { think: a, speak: n, action: r, rawText: i };
}
function Lt(t) {
  switch (t) {
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
function Rt(t) {
  return t.modeConfig.worldSnapshot;
}
function qe(t) {
  return t.modeConfig.playerCharacterSnapshots;
}
function Eo(t, s) {
  return t.modeConfig.playerCharacterSnapshots.find((a) => a.id === s);
}
function dt(t, s) {
  return t.map((a) => {
    const n = Object.entries(a.attributes).map(([i, o]) => `${i}:${o}(${ln(o)})`).join(", "), r = s[a.id] || 0;
    return `- ${a.name} (ID: ${a.id}): ${n} (\u7D2F\u8BA1\u884C\u52A8: ${r}\u6B21)`;
  }).join(`
`);
}
function Ot(t) {
  return t.map((s) => `- ${s.name} (ID: ${s.id}): ${s.systemPrompt}`).join(`
`);
}
function Ft(t, s, a = 15) {
  const n = qe(s);
  return t.getFlatHistoryItems(a).filter((r) => !r.hidden && !r.deleted).map((r) => {
    var _a2;
    const { type: i, data: o } = r;
    if (i === "dnd_dm_intro" || i === "dnd_dm_narrate") return `[DM]: ${o.content}`;
    if (i === "dnd_player_action") return `[${o.characterName || ((_a2 = n.find((c) => c.id === o.characterId)) == null ? void 0 : _a2.name) || o.characterId}]: ${o.content}`;
    if (i === "participant_message") return o.isDM ? `[DM]: ${o.content}` : `[${o.name || "\u73A9\u5BB6"}]: ${o.content}`;
    if (i === "dnd_roll_result") {
      const m = o.checkSpec, c = o.checkResult;
      return `[\u7CFB\u7EDF\u68C0\u5B9A] ${m.intent}: 1d20(${c.naturalRoll}) + ${m.attribute}\u4FEE\u6B63(${c.modifier}) = ${c.total} vs DC:${m.dc} \u2192 ${c.isSuccess ? "\u6210\u529F" : "\u5931\u8D25"}`;
    }
    return i === "dnd_system_notice" ? `[\u7CFB\u7EDF]: ${o.content}` : null;
  }).filter(Boolean).join(`
`);
}
function $o(t) {
  var _a2;
  return ((_a2 = t.modeConfig.playerCharacterSnapshots.find((a) => a.isHumanControlled)) == null ? void 0 : _a2.name) || "\u5192\u9669\u8005";
}
function Xe(t, s, a) {
  const n = $o(s), r = a || s.modeConfig.dmName || "DM";
  return t.map((i) => ({ ...i, content: To(i.content, { userName: n, charName: r }) }));
}
function Lo(t, s) {
  const a = Rt(t), n = qe(t), r = t.modeState.turnCounts, i = t.modeConfig.gameMode, o = `\u4F60\u662F DM (\u5730\u4E0B\u57CE\u4E3B)\u3002\u8BF7\u4E3A\u8FD9\u4E2A DND \u5192\u9669\u521B\u5EFA\u5F15\u4EBA\u5165\u80DC\u7684\u5F00\u573A\u4ECB\u7ECD\uFF0C\u8BBE\u7F6E\u4E16\u754C\u80CC\u666F\u548C\u521D\u59CB\u573A\u666F\u3002
${Lt(i)}
${a.systemPrompt}
${a.globalKnowledge ? `
\u3010\u4E16\u754C\u89C2\u8865\u5145\u3011
${a.globalKnowledge}` : ""}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, m = ["\u3010\u6E38\u620F\u914D\u7F6E\u3011", `DM: ${t.modeConfig.dmName || "DM"}`, `\u4E16\u754C: ${a.name} \u2014 ${a.description}`, `\u53C2\u4E0E\u89D2\u8272:
${Ot(n)}`, `\u3010\u521D\u59CB\u6570\u503C\u72B6\u6001\u3011
${dt(n, r)}`].join(`

`);
  return Xe([{ role: "system", content: o }, { role: "user", content: m }], t);
}
function Ro(t, s) {
  const a = Rt(t), n = qe(t), r = t.modeState.turnCounts, i = t.modeConfig.gameMode, o = t.modeState.historySummary, m = `\u4F60\u662F DM\u3002\u8BF7\u6839\u636E\u5F53\u524D\u5267\u60C5\u8FDB\u5C55\u63CF\u5199\u573A\u666F\uFF0C\u63A8\u8FDB\u6545\u4E8B\u3002
\u4E0D\u9700\u8981\u5728\u6B64\u9636\u6BB5\u6307\u5B9A\u89D2\u8272\u6216\u63D0\u51FA\u68C0\u5B9A\uFF0C\u53EA\u9700\u63CF\u5199\u3002
${Lt(i)}
${a.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, c = Ft(s, t, 10), d = ["\u3010\u6E38\u620F\u914D\u7F6E\u3011", `\u4E16\u754C: ${a.name}`, `\u89D2\u8272:
${Ot(n)}`, o ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${o}` : "", c ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${c}` : "", `\u3010\u6570\u503C\u72B6\u6001\u3011
${dt(n, r)}`].filter(Boolean).join(`

`);
  return Xe([{ role: "system", content: m }, { role: "user", content: d }], t);
}
function Oo(t, s) {
  const a = qe(t), n = t.modeState.turnCounts, r = t.modeConfig.gameMode, i = a.map((x) => n[x.id] || 0), m = (i.length > 0 ? Math.min(...i) : 0) + 2, c = a.filter((x) => (n[x.id] || 0) <= m).sort((x, j) => (n[x.id] || 0) - (n[j.id] || 0)), d = `\u4F60\u662F DM\u3002\u8BF7\u6839\u636E\u521A\u624D\u7684\u53D9\u4E8B\uFF0C\u4ECE\u5019\u9009\u540D\u5355\u4E2D\u6307\u5B9A\u3010\u4E0B\u4E00\u4E2A\u3011\u884C\u52A8\u7684\u89D2\u8272\u3002
${Lt(r)}
\u3010\u516C\u5E73\u6027\u539F\u5219\u3011\uFF1A\u4E3A\u4E86\u786E\u4FDD\u6BCF\u4E2A\u73A9\u5BB6\u90FD\u6709\u5E73\u7B49\u7684\u53C2\u4E0E\u673A\u4F1A\uFF0C\u4F60\u3010\u5FC5\u987B\u3011\u4EC5\u4ECE\u4EE5\u4E0B\u63D0\u4F9B\u7684\u540D\u5355\u4E2D\u9009\u62E9\u3002\u8BF7\u4F18\u5148\u8003\u8651\u884C\u52A8\u6B21\u6570\u6700\u5C11\u7684\u89D2\u8272\u3002
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u9700\u8F93\u51FA\u4E00\u4E2A JSON \u5757\uFF0C\u4E0D\u8981\u5305\u542B\u4EFB\u4F55\u53D9\u4E8B\u6587\u5B57\u3002
\`\`\`json
{ "reason": "\u539F\u56E0", "nextPlayerId": "\u89D2\u8272ID" }
\`\`\`
\u5019\u9009\u540D\u5355\uFF08\u4EC5\u9650\u5DF2\u884C\u52A8\u6B21\u6570\u8F83\u5C11\u7684\u89D2\u8272\uFF09\uFF1A
${c.map((x) => `- ${x.name} (ID: ${x.id}, \u5DF2\u884C\u52A8: ${n[x.id] || 0}\u6B21)`).join(`
`)}`, l = s.getFlatHistoryItems(5).findLast((x) => x.type === "dnd_dm_narrate" || x.type === "dnd_dm_intro"), h = l ? `\u3010\u5F53\u524D\u573A\u666F\u3011
${l.data.content}` : `\u3010\u521D\u59CB\u573A\u666F\u3011
\u5192\u9669\u5F00\u59CB\u3002`, p = `\u3010\u6240\u6709\u89D2\u8272\u884C\u52A8\u7EDF\u8BA1\u3011
${a.map((x) => `${x.name}: ${n[x.id] || 0} \u6B21`).join(`
`)}`;
  return Xe([{ role: "system", content: d }, { role: "user", content: [h, p].join(`

`) }], t);
}
function Fo(t, s) {
  const a = t.modeState.turnCounts, n = t.modeState.currentTurnCharacterId, r = Eo(t, n), i = t.modeState.historySummary, o = t.modeConfig.gameMode;
  if (!r) return [];
  const m = `\u4F60\u662F\u73A9\u5BB6 ${r.name} (${r.id})\u3002${r.systemPrompt}
\u8BF7\u57FA\u4E8E\u5F53\u524D\u573A\u666F\u548C DM \u7684\u5F15\u5BFC\u51B3\u5B9A\u4F60\u7684\u884C\u52A8\u3002
${Lt(o)}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<think>\u5185\u5FC3\u72EC\u767D</think><speak>\u53E3\u5934\u8868\u8FBE</speak><action>\u5177\u4F53\u884C\u52A8</action>\u3002`, c = Ft(s, t, 8), d = dt([r], a), u = [`\u3010\u4F60\u7684\u89D2\u8272\u4FE1\u606F\u3011
${r.systemPrompt}`, i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "", c ? `\u3010\u5F53\u524D\u573A\u666F\u3011
${c}` : "", `\u3010\u4F60\u7684\u6570\u503C\u72B6\u6001\u3011
${d}`].filter(Boolean).join(`

`);
  return Xe([{ role: "system", content: m }, { role: "user", content: u }], t, r.name);
}
function Uo(t, s) {
  const a = Rt(t), n = qe(t), r = t.modeState.turnCounts, i = t.modeState.historySummary, o = `\u4F60\u662F DM\u3002\u8BF7\u8BC4\u4EF7\u521A\u624D\u73A9\u5BB6\u7684\u884C\u52A8\uFF0C\u5E76\u63CF\u5199\u5176\u521D\u6B65\u53CD\u5E94\u3002
\u4E0D\u8981\u5728\u6B64\u9636\u6BB5\u8F93\u51FA\u68C0\u5B9A JSON\uFF0C\u4E5F\u4E0D\u8981\u63CF\u8FF0\u6700\u7EC8\u7ED3\u679C\u3002
${a.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, m = Ft(s, t, 10), c = [`\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${a.name}
\u89D2\u8272:
${Ot(n)}`, i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "", m ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${m}` : "", `\u3010\u6570\u503C\u72B6\u6001\u3011
${dt(n, r)}`].filter(Boolean).join(`

`);
  return Xe([{ role: "system", content: o }, { role: "user", content: c }], t);
}
function Ho(t, s) {
  const a = Rt(t), n = qe(t), r = t.modeState.turnCounts, i = t.modeState.historySummary, o = t.modeConfig.gameMode, m = `\u4F60\u662F DM\u3002\u57FA\u4E8E\u73A9\u5BB6\u521A\u624D\u7684\u884C\u52A8\uFF0C\u51B3\u5B9A\u662F\u5426\u9700\u8981\u8FDB\u884C DND 5e \u68C0\u5B9A\u3002
${Lt(o)}
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
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u8F93\u51FA JSON\uFF0C\u4E0D\u8981\u4EFB\u4F55\u53D9\u4E8B\u3002`, c = Ft(s, t, 10), d = [`\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${a.name}
\u89D2\u8272:
${Ot(n)}`, i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "", c ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${c}` : "", `\u3010\u89D2\u8272\u6570\u503C\u72B6\u6001\u3011
${dt(n, r)}`].filter(Boolean).join(`

`);
  return Xe([{ role: "system", content: m }, { role: "user", content: d }], t);
}
function Bo(t, s) {
  var _a2;
  const a = Rt(t), n = qe(t), r = t.modeState.turnCounts, i = t.modeState.historySummary, o = t.modeState.lastCheckResult, m = t.modeState.lastCheckSpec, c = `\u4F60\u662F DM\u3002\u68C0\u5B9A\u7ED3\u679C\u5DF2\u51FA\u3002\u8BF7\u6839\u636E\u7ED3\u679C\u63CF\u8FF0\u540E\u679C\uFF0C\u5E76\u5F15\u5BFC\u5267\u60C5\u3002
${a.systemPrompt}
\u8981\u6C42\u8F93\u51FA\u5FC5\u987B\u5305\u542B XML \u6807\u7B7E\uFF1A<speak>DM\u53D1\u8A00</speak><action>\u73AF\u5883\u53D8\u5316</action>\u3002`, d = Ft(s, t, 10), u = o && m ? `\u3010\u68C0\u5B9A\u7ED3\u679C\u3011
\u610F\u56FE: ${m.intent}
\u6267\u884C\u8005: ${((_a2 = n.find((h) => h.id === m.playerId)) == null ? void 0 : _a2.name) || m.playerId}
\u9AB0\u5B50\u7ED3\u679C: ${o.total} (1d20:${o.naturalRoll} + \u4FEE\u6B63:${o.modifier}) vs DC:${m.dc}
\u7ED3\u8BBA: ${o.isSuccess ? "\u6210\u529F" : "\u5931\u8D25"}
\u8BF7\u6839\u636E\u6B64\u7ED3\u679C\u8FDB\u884C\u9488\u5BF9\u6027\u7684\u540E\u679C\u63CF\u8FF0\u3002` : "", l = [`\u3010\u6E38\u620F\u914D\u7F6E\u3011
\u4E16\u754C: ${a.name}
\u89D2\u8272:
${Ot(n)}`, i ? `\u3010\u5267\u60C5\u63D0\u8981\u3011
${i}` : "", d ? `\u3010\u8FD1\u671F\u5386\u53F2\u8BB0\u5F55\u3011
${d}` : "", u, `\u3010\u6570\u503C\u72B6\u6001\u3011
${dt(n, r)}`].filter(Boolean).join(`

`);
  return Xe([{ role: "system", content: c }, { role: "user", content: l }], t);
}
class Go extends Hs {
  constructor(s) {
    super(s), this.session = s;
  }
  getCurrentPhase() {
    return this.session.modeState.currentPhase;
  }
  getCurrentUIState() {
    return this.session.modeState.currentUIState;
  }
  getActualCurrentPhase(s) {
    var _a2, _b, _c2;
    const a = s.getProcessingItem();
    if (a == null ? void 0 : a.type) {
      const r = { dnd_dm_intro: "dm_game_intro", dnd_dm_narrate: "dm_narrate", dnd_assign_player: "dm_assign_player", dnd_player_action: "player_action", dnd_check_decision: "dm_check_decision", dnd_roll_result: "fn_roll_check" };
      if (a.type === "participant_message" && ((_a2 = a.data) == null ? void 0 : _a2.isDM)) return "dm_check_eval";
      const i = r[a.type];
      if (i) return i;
    }
    const n = s.getFlatHistoryItems();
    for (let r = n.length - 1; r >= 0; r--) {
      const i = n[r];
      if (!(i == null ? void 0 : i.deleted)) switch (i.type) {
        case "dnd_dm_intro":
          return "dm_assign_player";
        case "dnd_dm_narrate": {
          const o = (_b = i.data) == null ? void 0 : _b.phase;
          return o === "dm_check_eval" ? "dm_check_decision" : "dm_assign_player";
        }
        case "dnd_assign_player":
          return "player_action";
        case "dnd_player_action":
          return "dm_check_eval";
        case "dnd_check_decision":
          return ((_c2 = i.data) == null ? void 0 : _c2.needsCheck) ? "fn_roll_check" : "dm_narrate";
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
  getActualCurrentUIState(s) {
    var _a2;
    const a = s.getProcessingItem();
    if (a == null ? void 0 : a.type) {
      const n = { dnd_dm_intro: "dm_game_intro_running", dnd_dm_narrate: "dm_narrate_running", dnd_assign_player: "dm_assign_player_running", dnd_player_action: "player_action_running", dnd_check_decision: "dm_check_decision_running", dnd_roll_result: "fn_roll_check_running" };
      if (a.type === "participant_message" && ((_a2 = a.data) == null ? void 0 : _a2.isDM)) return "dm_check_eval_running";
      const r = n[a.type];
      if (r) return r;
    }
    return this.session.modeState.currentUIState ? this.session.modeState.currentUIState : this.getReadyUIStateForPhase(this.getActualCurrentPhase(s));
  }
  getReadyUIStateForPhase(s) {
    return `${s}_ready`;
  }
  getRunningUIStateForPhase(s) {
    return `${s}_running`;
  }
  getDoneUIStateForPhase(s) {
    return `${s}_done`;
  }
  enterNextState(s) {
    console.log(`[DndManager] Transition: ${this.session.modeState.currentPhase} -> ${s}`), this.session.modeState.currentPhase = s, this.session.updatedAt = Date.now();
  }
  setCurrentUIState(s) {
    this.session.modeState.currentUIState = s, this.session.updatedAt = Date.now();
  }
  setCurrentTurn(s) {
    this.session.modeState.currentTurnCharacterId = s, this.session.updatedAt = Date.now();
  }
  incrementTurnCount(s) {
    this.session.modeState.turnCounts[s] || (this.session.modeState.turnCounts[s] = 0), this.session.modeState.turnCounts[s]++, this.session.updatedAt = Date.now();
  }
  incrementRound() {
    this.session.modeState.currentRound++, this.session.updatedAt = Date.now();
  }
  async executeCurrentStateLogic(s) {
    switch (this.session.modeState.currentPhase) {
      case "dm_game_intro":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_game_intro")), { type: "LLM_CALL", messages: Lo(this.session), callbackPhase: "dm_game_intro", llmRequestType: "dnd_dm_intro" };
      case "dm_narrate":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_narrate")), { type: "LLM_CALL", messages: Ro(this.session, s), callbackPhase: "dm_narrate", llmRequestType: "dnd_dm_narrate", dataExtra: { phase: "dm_narrate" } };
      case "dm_assign_player":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_assign_player")), { type: "LLM_CALL", messages: Oo(this.session, s), callbackPhase: "dm_assign_player", llmRequestType: "dnd_assign_player" };
      case "player_action":
        return this.handlePlayerAction(s);
      case "dm_check_eval":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_eval")), { type: "LLM_CALL", messages: Uo(this.session, s), callbackPhase: "dm_check_eval", llmRequestType: "dnd_dm_narrate", dataExtra: { phase: "dm_check_eval" } };
      case "dm_check_decision":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_check_decision")), { type: "LLM_CALL", messages: Ho(this.session, s), callbackPhase: "dm_check_decision", llmRequestType: "dnd_check_decision" };
      case "fn_roll_check":
        return this.handleRollCheck(s);
      case "dm_tell_result":
        return this.setCurrentUIState(this.getReadyUIStateForPhase("dm_tell_result")), { type: "LLM_CALL", messages: Bo(this.session, s), callbackPhase: "dm_tell_result", llmRequestType: "dnd_dm_narrate", dataExtra: { phase: "dm_tell_result" } };
      default:
        return { type: "STOP" };
    }
  }
  handlePlayerAction(s) {
    const a = this.session.modeState.currentTurnCharacterId, n = this.session.modeConfig.playerCharacterSnapshots.find((r) => r.id === a);
    return n ? n.isHumanControlled ? (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), { type: "WAIT_FOR_INPUT" }) : (this.setCurrentUIState(this.getReadyUIStateForPhase("player_action")), { type: "LLM_CALL", messages: Fo(this.session, s), callbackPhase: "player_action", llmRequestType: "dnd_player_action", dataExtra: { characterId: n.id, characterName: n.name, isHumanControlled: false } }) : (console.error(`[DndManager] \u89D2\u8272 ${a} \u4E0D\u5B58\u5728`), this.enterNextState("dm_assign_player"), { type: "STATE_CHANGE" });
  }
  handleRollCheck(s) {
    this.setCurrentUIState(this.getRunningUIStateForPhase("fn_roll_check"));
    const a = this.session.modeState.lastCheckSpec;
    if (!a) return console.error("[DndManager] \u68C0\u5B9A\u89C4\u8303\u7F3A\u5931\uFF0C\u8DF3\u8FC7\u68C0\u5B9A"), this.enterNextState("dm_narrate"), { type: "STATE_CHANGE" };
    const n = this.session.modeConfig.playerCharacterSnapshots.find((i) => i.id === a.playerId);
    if (!n) return console.error(`[DndManager] \u68C0\u5B9A\u89D2\u8272 ${a.playerId} \u4E0D\u5B58\u5728`), this.enterNextState("dm_narrate"), { type: "STATE_CHANGE" };
    const r = Co(a, n.attributes);
    return this.session.modeState.lastCheckResult = r, s.addHistoryItem({ id: L(), type: "dnd_roll_result", idx: 0, orderRef: 0, timestamp: Date.now(), data: { checkSpec: a, checkResult: r, characterName: n.name, attributeName: a.attribute } }), this.setCurrentUIState(this.getDoneUIStateForPhase("fn_roll_check")), this.enterNextState("dm_tell_result"), { type: "STATE_CHANGE" };
  }
  handleLLMResponse(s, a, n) {
    switch (s) {
      case "dm_game_intro":
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_game_intro")), this.enterNextState("dm_assign_player");
        break;
      case "dm_narrate":
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_narrate")), this.enterNextState("dm_assign_player");
        break;
      case "dm_assign_player": {
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_assign_player"));
        const r = Io(a);
        if (r) {
          const i = this.session.modeConfig.playerCharacterSnapshots.find((o) => o.id === r.nextPlayerId);
          n.addHistoryItem({ id: L(), type: "dnd_assign_player", idx: 0, orderRef: 0, timestamp: Date.now(), data: { nextPlayerId: r.nextPlayerId, nextPlayerName: i == null ? void 0 : i.name, reason: r.reason, isHumanControlled: i == null ? void 0 : i.isHumanControlled }, hidden: true }), n.addHistoryItem({ id: L(), type: "dnd_system_notice", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: `\u8F6E\u5230 ${(i == null ? void 0 : i.name) || r.nextPlayerId} \u884C\u52A8`, noticeType: "turn_start", characterId: r.nextPlayerId, characterName: i == null ? void 0 : i.name } }), this.setCurrentTurn(r.nextPlayerId), this.enterNextState("player_action");
        } else console.warn("[DndManager] \u89E3\u6790 DM \u6307\u5B9A\u89D2\u8272\u5931\u8D25\uFF0C\u91CD\u8BD5"), this.enterNextState("dm_assign_player");
        break;
      }
      case "player_action": {
        this.setCurrentUIState(this.getDoneUIStateForPhase("player_action"));
        const r = this.session.modeState.currentTurnCharacterId;
        this.incrementTurnCount(r), this.enterNextState("dm_check_eval");
        break;
      }
      case "dm_check_eval":
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_eval")), this.enterNextState("dm_check_decision");
        break;
      case "dm_check_decision": {
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_check_decision"));
        const r = ko(a);
        n.addHistoryItem({ id: L(), type: "dnd_check_decision", idx: 0, orderRef: 0, timestamp: Date.now(), data: { needsCheck: (r == null ? void 0 : r.needsCheck) ?? false, checkSpec: (r == null ? void 0 : r.needsCheck) ? r.checkSpec : void 0, rawContent: a }, hidden: true }), (r == null ? void 0 : r.needsCheck) && "checkSpec" in r ? (console.log("[DndManager] \u68C0\u5B9A\u51B3\u7B56\uFF1A\u9700\u8981\u68C0\u5B9A", r.checkSpec), this.session.modeState.lastCheckSpec = r.checkSpec, this.enterNextState("fn_roll_check")) : r === null ? (console.warn("[DndManager] \u68C0\u5B9A\u51B3\u7B56\u89E3\u6790\u5931\u8D25\uFF0C\u91CD\u8BD5 dm_check_decision"), this.enterNextState("dm_check_decision")) : (console.log("[DndManager] \u68C0\u5B9A\u51B3\u7B56\uFF1A\u65E0\u9700\u68C0\u5B9A\uFF0C\u76F4\u63A5\u8FDB\u5165\u53D9\u4E8B"), this.enterNextState("dm_narrate"));
        break;
      }
      case "dm_tell_result":
        this.setCurrentUIState(this.getDoneUIStateForPhase("dm_tell_result")), this.enterNextState("dm_assign_player");
        break;
      default:
        console.warn(`[DndManager] \u672A\u77E5\u7684\u56DE\u8C03\u9636\u6BB5: ${s}`);
        break;
    }
  }
}
const z = le({ currentSession: null, contextManager: null, sessionManager: null, loadSession(t, s) {
  this.currentSession = t, this.currentSession.modeState.currentUIState = "idle", this.sessionManager = ga(new Go(this.currentSession));
  const a = le(s || { historyItems: [], processingItem: void 0 });
  this.contextManager = new Ce(a);
}, setCurrentTurn(t) {
  this.sessionManager && this.sessionManager.setCurrentTurn(t);
}, incrementRound() {
  this.sessionManager && this.sessionManager.incrementRound();
}, setPhase(t) {
  this.currentSession && (this.currentSession.modeState.currentPhase = t);
}, updateCharacterAttributes(t, s) {
  if (!this.currentSession) return;
  const a = this.currentSession.modeConfig.playerCharacterSnapshots.find((n) => n.id === t);
  a && Object.assign(a.attributes, s);
}, toggleCharacterControl(t) {
  if (!this.currentSession) return;
  const s = this.currentSession.modeConfig.playerCharacterSnapshots.find((a) => a.id === t);
  s && (s.isHumanControlled = !s.isHumanControlled, this.currentSession.updatedAt = Date.now());
}, updateCharacterHP(t, s) {
  if (!this.currentSession) return;
  const a = this.currentSession.modeConfig.playerCharacterSnapshots.find((n) => n.id === t);
  a && (a.currentHP = Math.max(0, Math.min(s, a.maxHP)));
}, async saveNewContextItemsToDB(t, s) {
  const { SessionDB: a } = await ve(async () => {
    const { SessionDB: i } = await Promise.resolve().then(() => Et);
    return { SessionDB: i };
  }, void 0), n = new a(t);
  let r;
  try {
    r = pe(s);
  } catch {
    r = JSON.parse(JSON.stringify(s));
  }
  await n.addContextItems(r);
}, async updateSessionInDB() {
  if (!this.currentSession) return;
  const { masterDb: t } = await ve(async () => {
    const { masterDb: n } = await Promise.resolve().then(() => cs);
    return { masterDb: n };
  }, void 0), s = pe(this.currentSession.modeState), a = pe(this.currentSession.modeConfig);
  await t.sessions.update(this.currentSession.id, { modeState: s, modeConfig: a, updatedAt: Date.now() });
} });
function Jo() {
  const t = Ss((l) => l.config), s = f.useRef(false), a = f.useRef(false), n = ne(), r = async (l, h, p, x, j = {}) => {
    const y = z.contextManager;
    if (!y) return { content: "" };
    const b = { id: L(), type: p, orderRef: 0, timestamp: Date.now(), data: { content: "", ...j } };
    y.setProcessingItem(b);
    let S = "";
    return await Ps(l, h, [], (w, N) => {
      x == null ? void 0 : x(w), S = N;
      const v = y.getProcessingItem();
      v && (v.data.content = N);
    }), y.completeProcessingItem(), { content: S };
  }, i = async (l, h) => {
    const p = z.sessionManager, x = z.contextManager;
    if (!(p && x)) return;
    const j = await p.executeCurrentStateLogic(x);
    if (console.log("[DndLoop] Action:", j), j.type === "WAIT_FOR_INPUT" || j.type === "STOP") {
      await z.updateSessionInDB(), s.current = false;
      return;
    }
    if (j.type === "STATE_CHANGE") {
      if (await z.updateSessionInDB(), a.current) {
        console.log("[DndLoop] \u6E38\u620F\u5DF2\u6682\u505C\uFF08STATE_CHANGE \u540E\uFF09"), s.current = false;
        return;
      }
      setTimeout(() => m(l.id), 0);
      return;
    }
    if (j.type === "LLM_CALL") {
      if (j.callbackPhase) {
        const b = j.callbackPhase;
        p.setCurrentUIState(p.getRunningUIStateForPhase(b));
      }
      await z.updateSessionInDB();
      const y = await r(h, j.messages.map((b) => ({ ...b, id: L() })), j.llmRequestType, void 0, j.dataExtra);
      if (await z.saveNewContextItemsToDB(l.id, x.getHistoryItems()), o(j, y.content, l.id), await z.updateSessionInDB(), a.current) {
        console.log("[DndLoop] \u6E38\u620F\u5DF2\u6682\u505C\uFF08LLM_CALL \u5B8C\u6210\u540E\uFF09"), s.current = false;
        return;
      }
      setTimeout(() => m(l.id), 0);
    }
  }, o = (l, h, p) => {
    const x = z.sessionManager, j = z.contextManager;
    x && j && x.handleLLMResponse(l.callbackPhase, h, j);
  }, m = async (l) => {
    const h = z.currentSession;
    if (!h || h.id !== l) return;
    const p = { ...t };
    try {
      s.current = true, await i(h, p);
    } catch (x) {
      console.error("[DndLoop] Critical Error:", x), $.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", { duration: Number.POSITIVE_INFINITY, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => n({ to: "/config/llm" }) } }), s.current = false;
    }
  }, c = f.useCallback(async (l) => {
    if (s.current) return;
    const h = z.currentSession, p = z.contextManager, x = z.sessionManager;
    if (!(h && p && x)) {
      console.warn("[DndLoop] Session or Managers not ready");
      return;
    }
    if (l) {
      if (x.getCurrentPhase() !== "player_action") {
        $.warning("\u5F53\u524D\u5E76\u975E\u8BE5\u89D2\u8272\u7684\u884C\u52A8\u56DE\u5408");
        return;
      }
      const j = h.modeState.currentTurnCharacterId, y = h.modeConfig.playerCharacterSnapshots.find((b) => b.id === j);
      if (!(y == null ? void 0 : y.isHumanControlled)) {
        $.warning("\u5F53\u524D\u89D2\u8272\u7531 AI \u63A7\u5236\uFF0C\u65E0\u6CD5\u624B\u52A8\u8F93\u5165");
        return;
      }
      x.setCurrentUIState(x.getRunningUIStateForPhase("player_action")), p.addHistoryItem({ id: L(), type: "dnd_player_action", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: l, characterId: j, characterName: y.name, isHumanControlled: true } }), await z.saveNewContextItemsToDB(h.id, p.getHistoryItems()), x.incrementTurnCount(j), x.setCurrentUIState(x.getDoneUIStateForPhase("player_action")), x.enterNextState("dm_check_eval"), await z.updateSessionInDB();
    }
    await m(h.id);
  }, [t]), d = f.useCallback(() => {
    a.current = true, console.log("[DndLoop] \u6682\u505C\u8BF7\u6C42\u5DF2\u53D1\u51FA");
  }, []), u = f.useCallback(() => {
    if (!a.current) return;
    a.current = false, console.log("[DndLoop] \u6062\u590D\u6E38\u620F");
    const l = z.currentSession;
    l && !s.current && m(l.id);
  }, [t]);
  return { nextStep: c, isCallingRef: s, isPausedRef: a, pauseGame: d, resumeGame: u };
}
const zo = D({ \u529B\u91CF: C().describe("\u529B\u91CF\u5C5E\u6027\u503C"), \u654F\u6377: C().describe("\u654F\u6377\u5C5E\u6027\u503C"), \u4F53\u8D28: C().describe("\u4F53\u8D28\u5C5E\u6027\u503C"), \u667A\u529B: C().describe("\u667A\u529B\u5C5E\u6027\u503C"), \u611F\u77E5: C().describe("\u611F\u77E5\u5C5E\u6027\u503C"), \u9B45\u529B: C().describe("\u9B45\u529B\u5C5E\u6027\u503C") }), Vo = D({ intent: g().describe("\u68C0\u5B9A\u610F\u56FE"), type: G(["attribute", "saving", "attack"]).describe("\u68C0\u5B9A\u7C7B\u578B"), attribute: g().describe("\u68C0\u5B9A\u7EF4\u5EA6"), dc: C().describe("\u76EE\u6807\u6570\u503C (DC)"), playerId: g().describe("\u6267\u884C\u68C0\u5B9A\u7684\u89D2\u8272 ID") }), Wo = D({ naturalRoll: C().describe("\u9AB0\u5B50\u539F\u503C"), total: C().describe("\u603B\u503C (\u539F\u503C + \u4FEE\u6B63)"), modifier: C().describe("\u5C5E\u6027\u4FEE\u6B63"), isSuccess: O().describe("\u662F\u5426\u6210\u529F") }), Ko = G(["dm_game_intro", "dm_narrate", "dm_assign_player", "player_action", "dm_check_eval", "dm_check_decision", "fn_roll_check", "dm_tell_result"]), qo = G(["idle", "dm_game_intro_ready", "dm_game_intro_running", "dm_game_intro_done", "dm_narrate_ready", "dm_narrate_running", "dm_narrate_done", "dm_assign_player_ready", "dm_assign_player_running", "dm_assign_player_done", "player_action_ready", "player_action_running", "player_action_done", "dm_check_eval_ready", "dm_check_eval_running", "dm_check_eval_done", "dm_check_decision_ready", "dm_check_decision_running", "dm_check_decision_done", "fn_roll_check_ready", "fn_roll_check_running", "fn_roll_check_done", "dm_tell_result_ready", "dm_tell_result_running", "dm_tell_result_done"]), oa = { idle: { label: "\u7A7A\u95F2", placeholder: "\u8BF7\u5148\u70B9\u51FB\u5F00\u59CB\u6216\u7EE7\u7EED...", inputEnabled: false }, dm_game_intro_ready: { label: "DM\u5F00\u573A\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u5F00\u573A\u4ECB\u7ECD...", inputEnabled: false }, dm_game_intro_running: { label: "DM\u5F00\u573A\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u4ECB\u7ECD\u4E16\u754C...", inputEnabled: false }, dm_game_intro_done: { label: "DM\u5F00\u573A\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u5F00\u573A\u4ECB\u7ECD\u5B8C\u6210...", inputEnabled: false }, dm_narrate_ready: { label: "DM\u53D9\u4E8B\uFF08\u51C6\u5907\uFF09", placeholder: "\u8BF7\u7B49\u5F85 DM \u53D9\u4E8B...", inputEnabled: false }, dm_narrate_running: { label: "DM\u53D9\u4E8B\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u63CF\u5199\u573A\u666F...", inputEnabled: false }, dm_narrate_done: { label: "DM\u53D9\u4E8B\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u53D9\u4E8B\u5B8C\u6210...", inputEnabled: false }, dm_assign_player_ready: { label: "\u6307\u5B9A\u89D2\u8272\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u51B3\u5B9A\u8C01\u884C\u52A8...", inputEnabled: false }, dm_assign_player_running: { label: "\u6307\u5B9A\u89D2\u8272\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u6307\u5B9A\u89D2\u8272...", inputEnabled: false }, dm_assign_player_done: { label: "\u6307\u5B9A\u89D2\u8272\uFF08\u5B8C\u6210\uFF09", placeholder: "\u89D2\u8272\u5DF2\u88AB\u6307\u5B9A...", inputEnabled: false }, player_action_ready: { label: "\u89D2\u8272\u884C\u52A8\uFF08\u51C6\u5907\uFF09", placeholder: "\u8F6E\u5230\u4F60\u884C\u52A8\u4E86\uFF0C\u63CF\u8FF0\u4F60\u7684\u884C\u52A8...", inputEnabled: true }, player_action_running: { label: "\u89D2\u8272\u884C\u52A8\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u89D2\u8272\u6B63\u5728\u884C\u52A8...", inputEnabled: false }, player_action_done: { label: "\u89D2\u8272\u884C\u52A8\uFF08\u5B8C\u6210\uFF09", placeholder: "\u884C\u52A8\u5B8C\u6210...", inputEnabled: false }, dm_check_eval_ready: { label: "DM\u8BC4\u4EF7\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u8BC4\u4EF7\u884C\u52A8...", inputEnabled: false }, dm_check_eval_running: { label: "DM\u8BC4\u4EF7\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u8BC4\u4EF7\u884C\u52A8...", inputEnabled: false }, dm_check_eval_done: { label: "DM\u8BC4\u4EF7\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u8BC4\u4EF7\u5B8C\u6210...", inputEnabled: false }, dm_check_decision_ready: { label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u5224\u5B9A\u662F\u5426\u9700\u8981\u68C0\u5B9A...", inputEnabled: false }, dm_check_decision_running: { label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u5224\u5B9A...", inputEnabled: false }, dm_check_decision_done: { label: "\u68C0\u5B9A\u51B3\u7B56\uFF08\u5B8C\u6210\uFF09", placeholder: "\u68C0\u5B9A\u51B3\u7B56\u5B8C\u6210...", inputEnabled: false }, fn_roll_check_ready: { label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u51C6\u5907\uFF09", placeholder: "\u51C6\u5907\u63B7\u9AB0...", inputEnabled: false }, fn_roll_check_running: { label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "\u6B63\u5728\u63B7\u9AB0...", inputEnabled: false }, fn_roll_check_done: { label: "\u63B7\u9AB0\u68C0\u5B9A\uFF08\u5B8C\u6210\uFF09", placeholder: "\u63B7\u9AB0\u5B8C\u6210...", inputEnabled: false }, dm_tell_result_ready: { label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u51C6\u5907\uFF09", placeholder: "DM \u6B63\u5728\u63CF\u8FF0\u68C0\u5B9A\u7ED3\u679C...", inputEnabled: false }, dm_tell_result_running: { label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u8FDB\u884C\u4E2D\uFF09", placeholder: "DM \u6B63\u5728\u63CF\u8FF0\u7ED3\u679C...", inputEnabled: false }, dm_tell_result_done: { label: "DM\u63CF\u8FF0\u7ED3\u679C\uFF08\u5B8C\u6210\uFF09", placeholder: "DM \u63CF\u8FF0\u5B8C\u6210...", inputEnabled: false } }, Xo = G(["standard", "narrative", "hardcore", "solo"]), Yo = D({ id: g().describe("\u89D2\u8272 ID"), name: g().describe("\u89D2\u8272\u540D\u79F0"), description: g().describe("\u89D2\u8272\u63CF\u8FF0"), avatar: g().optional().describe("\u89D2\u8272\u5934\u50CF"), systemPrompt: g().describe("\u89D2\u8272\u626E\u6F14\u6307\u5F15"), attributes: zo.describe("\u89D2\u8272\u5C5E\u6027"), race: g().optional().describe("\u79CD\u65CF"), class: g().optional().describe("\u804C\u4E1A"), currentHP: C().describe("\u5F53\u524D\u751F\u547D\u503C"), maxHP: C().describe("\u6700\u5927\u751F\u547D\u503C"), isHumanControlled: O().describe("\u662F\u5426\u7531\u4EBA\u7C7B\u63A7\u5236") }), Zo = D({ name: g().describe("\u4E16\u754C\u540D\u79F0"), description: g().describe("\u4E16\u754C\u63CF\u8FF0"), systemPrompt: g().describe("\u6838\u5FC3\u7CFB\u7EDF\u63D0\u793A\u8BCD"), globalKnowledge: g().optional().describe("\u4E16\u754C\u89C2\u8865\u5145") }), Qo = D({ worldSnapshot: Zo.describe("\u4E16\u754C\u8BBE\u5B9A\u5FEB\u7167"), gameMode: Xo.describe("\u73A9\u6CD5\u6A21\u5F0F"), playerCharacterSnapshots: X(Yo).describe("\u53C2\u4E0E\u89D2\u8272\u5FEB\u7167\u5217\u8868"), dmName: g().optional().describe("DM \u663E\u793A\u540D\u79F0") }), ec = D({ currentPhase: Ko.describe("\u5F53\u524D\u9636\u6BB5\u540D\u79F0"), currentUIState: qo.describe("\u5F53\u524D UI \u72B6\u6001\u540D\u79F0"), currentTurnCharacterId: g().describe("\u5F53\u524D\u884C\u52A8\u89D2\u8272 ID ('dm' \u6216\u89D2\u8272ID)"), currentRound: C().describe("\u5F53\u524D\u56DE\u5408\u6570"), turnCounts: re(g(), C()).describe("\u6BCF\u4E2A\u89D2\u8272\u7684\u884C\u52A8\u6B21\u6570\u7EDF\u8BA1"), lastCheckSpec: Vo.optional().describe("\u6700\u8FD1\u4E00\u6B21\u68C0\u5B9A\u89C4\u8303"), lastCheckResult: Wo.optional().describe("\u6700\u8FD1\u4E00\u6B21\u68C0\u5B9A\u7ED3\u679C"), historySummary: g().describe("\u5386\u53F2\u6458\u8981") });
is.extend({ mode: V("dnd").describe("\u6A21\u5F0F"), modeConfig: Qo.describe("DnD \u6A21\u5F0F\u914D\u7F6E"), modeState: ec.describe("DnD \u6A21\u5F0F\u72B6\u6001") });
const tc = (t) => {
  var _a2, _b, _c2, _d, _e2, _f, _g, _h, _i2, _j, _k, _l2, _m, _n2, _o2, _p, _q;
  const s = ne(), [a, n] = f.useState(""), r = f.useRef(null), [i, o] = f.useState(false), [m, c] = f.useState(false), d = ke(z), { data: u = [] } = Me((M) => M.from({ s: Je })), l = u.find((M) => M.id === t.sessionId);
  f.useEffect(() => {
    var _a3;
    let M = false;
    if (!l) return;
    if (((_a3 = z.currentSession) == null ? void 0 : _a3.id) === l.id && z.contextManager) {
      c(true);
      return;
    }
    return (async () => {
      try {
        const ce = await ls.createSessionDB(l.id).getContextItems();
        if (M) return;
        z.loadSession(l, { historyItems: ce, processingItem: void 0 }), c(true);
      } catch (ye) {
        console.error("[DnD] Load session error", ye);
      }
    })(), () => {
      M = true;
    };
  }, [l == null ? void 0 : l.id, l]);
  const { nextStep: h, isPausedRef: p, pauseGame: x, resumeGame: j } = Jo(), [y, b] = f.useState(false);
  f.useEffect(() => {
    r.current && (r.current.scrollTop = r.current.scrollHeight);
  });
  const S = async () => {
    if (i) return;
    const M = z.sessionManager, oe = z.contextManager;
    if (M && oe) {
      p.current = false, b(false), o(true);
      try {
        const ye = M.getActualCurrentPhase(oe);
        M.enterNextState(ye), M.setCurrentUIState(M.getReadyUIStateForPhase(ye)), await z.updateSessionInDB(), await h();
      } finally {
        o(false);
      }
    }
  };
  if (!(l && m)) return e.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4", children: [e.jsx("div", { className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center", children: e.jsx(_e, { className: "w-6 h-6 opacity-20" }) }), e.jsx("p", { className: "text-xs font-medium tracking-widest uppercase opacity-50", children: "\u6B63\u5728\u6784\u5EFA\u5192\u9669\u4E16\u754C..." })] });
  const w = async () => {
    if (!(!a.trim() || i)) {
      p.current = false, b(false), o(true);
      try {
        await h(a);
      } finally {
        o(false), n("");
      }
    }
  }, N = z.sessionManager && z.contextManager ? z.sessionManager.getActualCurrentUIState(z.contextManager) : ((_b = (_a2 = d.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b.currentUIState) || "idle", v = oa[N] || oa.idle, k = (_e2 = (_d = (_c2 = d.currentSession) == null ? void 0 : _c2.modeConfig) == null ? void 0 : _d.playerCharacterSnapshots) == null ? void 0 : _e2.find((M) => {
    var _a3, _b2;
    return M.id === ((_b2 = (_a3 = d.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentTurnCharacterId);
  }), J = !!(k == null ? void 0 : k.isHumanControlled), ee = i || !v.inputEnabled || v.inputEnabled && !J, T = () => {
    x(), b(true);
  }, F = () => {
    j(), b(false);
  }, fe = async (M) => {
    var _a3, _b2, _c3;
    const oe = (_a3 = z.currentSession) == null ? void 0 : _a3.modeConfig.playerCharacterSnapshots.find((wn) => wn.id === M);
    if (!oe) return;
    const ye = oe.isHumanControlled;
    z.toggleCharacterControl(M), await z.updateSessionInDB();
    const ce = M === ((_b2 = z.currentSession) == null ? void 0 : _b2.modeState.currentTurnCharacterId), ut = (_c3 = z.sessionManager) == null ? void 0 : _c3.getCurrentPhase();
    ye && ce && ut === "player_action" && !i && await h();
  }, ie = () => {
    s({ to: "/plaza" });
  }, mt = () => {
    console.log("[DnD][Memory Session]", z.currentSession);
  }, _n = async () => {
    if (!(l == null ? void 0 : l.id)) return;
    const M = await te.sessions.getTable().get(l.id);
    console.log("[DnD][DB Session]", M);
  };
  return e.jsxs("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: [e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-sm", children: e.jsx(_t, { className: "w-5 h-5 text-amber-600" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm tracking-tight", children: ((_h = (_g = (_f = d.currentSession) == null ? void 0 : _f.modeConfig) == null ? void 0 : _g.worldSnapshot) == null ? void 0 : _h.name) || "DnD \u5192\u9669" }), e.jsxs(B, { variant: "outline", className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-amber-500/5 text-amber-600 border-amber-500/10", children: ["R", ((_j = (_i2 = d.currentSession) == null ? void 0 : _i2.modeState) == null ? void 0 : _j.currentRound) || 1] })] }), e.jsx("span", { className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide", children: k ? `\u5F53\u524D\u884C\u52A8: ${k.name} (${k.isHumanControlled ? "\u73A9\u5BB6" : "AI"})` : "\u7B49\u5F85\u5F00\u59CB..." })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [N !== "idle" && (y ? e.jsxs(_, { type: "button", variant: "outline", size: "sm", className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-green-500/30 text-green-600 hover:bg-green-500/10", onClick: F, children: [e.jsx(Ms, { className: "w-3 h-3" }), "\u7EE7\u7EED"] }) : e.jsxs(_, { type: "button", variant: "outline", size: "sm", className: "h-7 px-3 gap-1.5 text-[10px] font-bold rounded-full border-amber-500/30 text-amber-600 hover:bg-amber-500/10", onClick: T, disabled: !i, children: [e.jsx(Aa, { className: "w-3 h-3" }), "\u6682\u505C"] })), e.jsxs(B, { variant: "secondary", className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50", children: [e.jsx("span", { className: R("w-1.5 h-1.5 rounded-full", y ? "bg-amber-400" : "bg-amber-500 animate-pulse") }), y ? "\u5DF2\u6682\u505C" : "DND"] }), e.jsx(_, { type: "button", variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: mt, children: "LOG MEM" }), e.jsx(_, { type: "button", variant: "ghost", size: "sm", className: "h-6 px-2 text-[10px]", onClick: _n, children: "LOG DB" })] })] }), e.jsx("div", { className: "flex grow overflow-y-auto", ref: r, children: e.jsx("div", { className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-8", children: (() => {
    var _a3, _b2, _c3, _d2, _e3, _f2, _g2, _h2;
    const M = (((_a3 = d.contextManager) == null ? void 0 : _a3.state.historyItems) || []).filter((ce) => !ce.hidden), oe = (_b2 = d.contextManager) == null ? void 0 : _b2.state.processingItem;
    if (N === "idle") {
      const ce = M.length === 0 ? "\u5F00\u59CB\u5192\u9669" : "\u7EE7\u7EED\u5192\u9669";
      return e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500", children: [e.jsx("div", { className: "w-24 h-24 rounded-4xl bg-amber-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/10 ring-8 ring-amber-500/5 rotate-3 hover:rotate-6 transition-transform duration-500", children: e.jsx(_t, { className: "w-10 h-10 text-amber-500 drop-shadow-sm" }) }), e.jsx("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center", children: ((_e3 = (_d2 = (_c3 = d.currentSession) == null ? void 0 : _c3.modeConfig) == null ? void 0 : _d2.worldSnapshot) == null ? void 0 : _e3.name) || "DnD \u5192\u9669" }), e.jsx("p", { className: "text-muted-foreground/80 font-medium tracking-wider mb-12 max-w-md text-center leading-relaxed text-sm", children: ((_h2 = (_g2 = (_f2 = d.currentSession) == null ? void 0 : _f2.modeConfig) == null ? void 0 : _g2.worldSnapshot) == null ? void 0 : _h2.description) || "\u4E00\u6BB5\u5168\u65B0\u7684\u5192\u9669\u65C5\u7A0B\u5373\u5C06\u5C55\u5F00\uFF0C\u51C6\u5907\u597D\u63B7\u51FA\u547D\u8FD0\u7684\u9AB0\u5B50\u4E86\u5417\uFF1F" }), e.jsxs(_, { type: "button", size: "lg", className: "h-16 px-12 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-amber-500/25 shadow-amber-500/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90", onClick: S, disabled: i, children: [i ? e.jsx(_e, { className: "w-5 h-5 animate-spin mr-3" }) : e.jsx(we, { className: "w-5 h-5 mr-3" }), ce] }), e.jsxs("div", { className: "mt-8 flex gap-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest", children: [e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(pt, { className: "w-3 h-3" }), " D20 \u68C0\u5B9A"] }), e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(dr, { className: "w-3 h-3" }), " \u591A\u4EBA\u5192\u9669"] })] })] });
    }
    const ye = [...M];
    return oe && !oe.hidden && !M.some((ce) => ce.id === oe.id) && ye.push(oe), ye.map((ce, ut) => e.jsx(sc, { item: ce }, `[${ut}]${ce.id}`));
  })() }) }), e.jsxs("div", { className: "p-4 md:p-6 shrink-0 bg-background", children: [e.jsxs("div", { className: "max-w-3xl mx-auto relative group", children: [e.jsx(Y, { value: a, onChange: (M) => n(M.target.value), placeholder: ee ? v.inputEnabled && !J ? `${(k == null ? void 0 : k.name) || "\u89D2\u8272"} \u7531 AI \u63A7\u5236\uFF0C\u7B49\u5F85\u81EA\u52A8\u884C\u52A8...` : v.placeholder : `\u4F5C\u4E3A ${(k == null ? void 0 : k.name) || "\u89D2\u8272"}\uFF0C\u63CF\u8FF0\u4F60\u7684\u884C\u52A8...`, disabled: ee, className: R("min-h-25 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-amber-500/20 focus-visible:bg-background transition-all", ee && "opacity-50 cursor-not-allowed"), onKeyDown: (M) => {
    M.key === "Enter" && !M.shiftKey && (M.preventDefault(), w());
  } }), e.jsx(_, { type: "button", size: "icon", className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all", disabled: !a.trim() || ee, onClick: w, children: i ? e.jsx(_e, { className: "w-4 h-4 animate-spin" }) : e.jsx(ot, { className: "w-4 h-4" }) })] }), e.jsxs("div", { className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40", children: [e.jsx("div", { className: "text-[9px] font-bold tracking-widest uppercase", children: k ? `${k.name} \u7684\u56DE\u5408 (${k.isHumanControlled ? "\u73A9\u5BB6\u64CD\u4F5C" : "AI \u81EA\u52A8"})` : "ADVENTURE LOG" }), e.jsx("div", { className: "text-[9px] font-medium", children: ee ? "\u7B49\u5F85\u4E2D..." : "Shift + Enter \u6362\u884C" })] })] })] }), e.jsxs("div", { className: "w-[320px] h-full overflow-y-auto bg-muted/10 border-l p-6 space-y-8 shrink-0 hidden lg:block scrollbar-none", children: [e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(mr, { className: "w-3.5 h-3.5 text-amber-500" }), "\u5192\u9669\u72B6\u6001"] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { className: "bg-background/40 p-3 rounded-xl border border-muted/30", children: [e.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1", children: "\u56DE\u5408" }), e.jsx("div", { className: "text-xl font-mono font-bold tracking-tight text-foreground/90", children: ((_l2 = (_k = d.currentSession) == null ? void 0 : _k.modeState) == null ? void 0 : _l2.currentRound) || 1 })] }), e.jsxs("div", { className: "bg-background/40 p-3 rounded-xl border border-muted/30", children: [e.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1", children: "\u6A21\u5F0F" }), e.jsx("div", { className: "text-sm font-bold tracking-tight text-foreground/90 capitalize", children: ((_n2 = (_m = d.currentSession) == null ? void 0 : _m.modeConfig) == null ? void 0 : _n2.gameMode) || "standard" })] })] })] }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(He, { className: "w-3.5 h-3.5 text-amber-500" }), "\u5192\u9669\u8005"] }), e.jsx("div", { className: "space-y-3", children: (_q = (_p = (_o2 = d.currentSession) == null ? void 0 : _o2.modeConfig) == null ? void 0 : _p.playerCharacterSnapshots) == null ? void 0 : _q.map((M) => {
    var _a3, _b2, _c3, _d2, _e3;
    const oe = M.id === ((_b2 = (_a3 = d.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentTurnCharacterId), ye = ((_e3 = (_d2 = (_c3 = d.currentSession) == null ? void 0 : _c3.modeState) == null ? void 0 : _d2.turnCounts) == null ? void 0 : _e3[M.id]) || 0;
    return e.jsxs("div", { className: R("p-4 rounded-xl border transition-all duration-300", oe ? "bg-amber-500/5 border-amber-500/30 shadow-sm shadow-amber-500/10" : "bg-background/40 border-muted/30"), children: [e.jsxs("div", { className: "flex items-start gap-3", children: [e.jsx("div", { className: R("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold", oe ? "bg-amber-500/20 text-amber-600" : M.isHumanControlled ? "bg-blue-500/10 text-blue-600" : "bg-muted text-muted-foreground"), children: M.isHumanControlled ? e.jsx(Wt, { className: "w-4 h-4" }) : e.jsx(de, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "text-sm font-bold tracking-tight truncate", children: M.name }), e.jsx(B, { variant: "outline", className: R("text-[8px] px-1 h-3.5", M.isHumanControlled ? "bg-blue-500/10 text-blue-600 border-blue-500/20" : "bg-muted/50 text-muted-foreground border-muted/30"), children: M.isHumanControlled ? "\u73A9\u5BB6" : "AI" }), oe && e.jsx(B, { variant: "outline", className: "text-[8px] px-1 h-3.5 bg-amber-500/10 text-amber-600 border-amber-500/20", children: "\u884C\u52A8\u4E2D" })] }), e.jsxs("div", { className: "text-[10px] text-muted-foreground/60 font-medium", children: [M.race, " \xB7 ", M.class, " \xB7 \u884C\u52A8 \xD7", ye] })] })] }), e.jsxs("div", { className: "mt-3 flex items-center justify-between px-1", children: [e.jsxs("div", { className: "flex items-center gap-1.5", children: [e.jsx(de, { className: R("w-3 h-3 transition-colors", M.isHumanControlled ? "text-muted-foreground/30" : "text-foreground/70") }), e.jsx("span", { className: R("text-[9px] font-bold uppercase tracking-wider transition-colors", M.isHumanControlled ? "text-muted-foreground/20" : "text-foreground/50"), children: "AI" })] }), e.jsx(et, { checked: M.isHumanControlled, onCheckedChange: () => fe(M.id), className: "data-[state=checked]:bg-blue-500 h-4 w-7 [&>span]:h-3 [&>span]:w-3" }), e.jsxs("div", { className: "flex items-center gap-1.5", children: [e.jsx("span", { className: R("text-[9px] font-bold uppercase tracking-wider transition-colors", M.isHumanControlled ? "text-foreground/50" : "text-muted-foreground/20"), children: "\u73A9\u5BB6" }), e.jsx(Wt, { className: R("w-3 h-3 transition-colors", M.isHumanControlled ? "text-blue-500" : "text-muted-foreground/30") })] })] }), e.jsxs("div", { className: "mt-3 space-y-1", children: [e.jsxs("div", { className: "flex justify-between text-[9px] font-bold text-muted-foreground/60", children: [e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(ur, { className: "w-2.5 h-2.5 text-red-400" }), "HP"] }), e.jsxs("span", { children: [M.currentHP, "/", M.maxHP] })] }), e.jsx("div", { className: "h-1.5 bg-muted/50 rounded-full overflow-hidden", children: e.jsx("div", { className: R("h-full rounded-full transition-all duration-500", M.currentHP / M.maxHP > 0.5 ? "bg-green-500" : M.currentHP / M.maxHP > 0.25 ? "bg-amber-500" : "bg-red-500"), style: { width: `${Math.max(0, M.currentHP / M.maxHP * 100)}%` } }) })] }), e.jsx("div", { className: "mt-3 grid grid-cols-3 gap-1.5", children: Object.entries(M.attributes || {}).map(([ce, ut]) => e.jsxs("div", { className: "text-center py-1 px-1 rounded bg-muted/30 border border-muted/20", children: [e.jsx("div", { className: "text-[8px] font-bold uppercase text-muted-foreground/50", children: ce.slice(0, 3) }), e.jsx("div", { className: "text-xs font-mono font-bold", children: ut })] }, ce)) })] }, M.id);
  }) })] }), e.jsx("div", { className: "space-y-3", children: e.jsxs(_, { type: "button", variant: "outline", className: "w-full h-10 rounded-xl border-dashed border-2 hover:border-amber-500/50 hover:bg-amber-500/5 gap-2", onClick: ie, children: [e.jsx(Ts, { className: "w-4 h-4" }), e.jsx("span", { className: "font-bold tracking-wider text-sm", children: "\u9000\u51FA\u5192\u9669" })] }) }), e.jsxs("div", { className: "pt-6 opacity-30", children: [e.jsx("div", { className: "h-px bg-linear-to-r from-transparent via-muted-foreground/50 to-transparent" }), e.jsx("p", { className: "text-[9px] text-center mt-4 font-bold tracking-[0.3em] uppercase", children: "DnD Engine v1.0.0" })] })] })] });
}, sc = ({ item: t }) => {
  var _a2, _b;
  switch (t.type) {
    case "dnd_dm_intro":
      return e.jsx(Vt, { content: t.data.content, title: "\u5F00\u573A\u53D9\u4E8B" });
    case "dnd_dm_narrate":
      return e.jsx(Vt, { content: t.data.content });
    case "dnd_player_action":
      return e.jsx(ca, { item: t });
    case "dnd_roll_result":
      return e.jsx(ac, { item: t });
    case "dnd_system_notice":
      return e.jsx(la, { item: t });
    case "dnd_assign_player":
      return null;
    case "dnd_check_decision":
      return null;
    case "participant_message":
      return ((_a2 = t.data) == null ? void 0 : _a2.isDM) ? e.jsx(Vt, { content: t.data.content }) : e.jsx(ca, { item: t });
    case "system_notification":
      return e.jsx(la, { item: t });
    default:
      return ((_b = t.data) == null ? void 0 : _b.content) ? e.jsx(Vt, { content: t.data.content, title: "\u6D88\u606F" }) : null;
  }
}, Vt = ({ content: t, title: s = "Dungeon Master" }) => {
  const a = dn(t);
  return e.jsxs("div", { className: "flex gap-5 group animate-in fade-in slide-in-from-left-2 duration-500", children: [e.jsxs("div", { className: "w-10 h-10 rounded-2xl bg-amber-500/5 flex items-center justify-center shrink-0 border border-amber-500/10 shadow-sm relative overflow-hidden", children: [e.jsx("div", { className: "absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" }), e.jsx(de, { className: "w-5 h-5 text-amber-600 relative z-10" })] }), e.jsxs("div", { className: "space-y-2 grow pt-1 min-w-0", children: [e.jsxs("div", { className: "text-[10px] font-black tracking-[0.2em] text-amber-600/60 flex items-center gap-2 uppercase", children: [e.jsx(we, { className: "w-3 h-3" }), s] }), e.jsxs("div", { className: "text-[15px] leading-relaxed text-foreground/80 whitespace-pre-wrap font-serif", children: [a.think && e.jsxs("div", { className: "text-xs italic text-muted-foreground/50 mb-3 pl-3 border-l-2 border-muted/30", children: [e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1", children: "DM \u601D\u8003" }), a.think] }), a.speak && e.jsxs("div", { className: "mb-2", children: [e.jsx("span", { className: "text-amber-600/80 font-bold", children: "\u201C" }), e.jsx("span", { className: "italic", children: a.speak }), e.jsx("span", { className: "text-amber-600/80 font-bold", children: "\u201D" })] }), a.action && e.jsx("div", { className: "text-foreground/70", children: a.action }), !(a.think || a.speak || a.action) && a.rawText] })] })] });
}, ca = ({ item: t }) => {
  const s = t.data, a = dn(s.content || ""), n = s.characterName || s.name || "\u5192\u9669\u8005", r = s.isHumanControlled || s.isUser;
  return e.jsxs("div", { className: "flex gap-5 group animate-in fade-in slide-in-from-right-2 duration-500", children: [e.jsx("div", { className: R("w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border shadow-sm", r ? "bg-blue-500/5 border-blue-500/10" : "bg-violet-500/5 border-violet-500/10"), children: r ? e.jsx(Wt, { className: "w-5 h-5 text-blue-500" }) : e.jsx(He, { className: "w-5 h-5 text-violet-500" }) }), e.jsxs("div", { className: "space-y-2 grow pt-1 min-w-0", children: [e.jsxs("div", { className: R("text-[10px] font-black tracking-[0.2em] flex items-center gap-2 uppercase", r ? "text-blue-500/60" : "text-violet-500/60"), children: [e.jsx(_t, { className: "w-3 h-3" }), n, r && e.jsx(B, { variant: "outline", className: "text-[8px] px-1 h-3 bg-blue-500/5 text-blue-500 border-blue-500/10", children: "\u73A9\u5BB6" })] }), e.jsxs("div", { className: "text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap", children: [a.think && e.jsxs("div", { className: "text-xs italic text-muted-foreground/50 mb-3 pl-3 border-l-2 border-muted/30", children: [e.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/30 block mb-1", children: "\u5185\u5FC3\u60F3\u6CD5" }), a.think] }), a.speak && e.jsxs("div", { className: "mb-2 font-medium", children: ["\u201C", a.speak, "\u201D"] }), a.action && e.jsx("div", { className: "text-foreground/70", children: a.action }), !(a.think || a.speak || a.action) && a.rawText] })] })] });
}, ac = ({ item: t }) => {
  var _a2;
  const s = t.data, a = s.checkResult, n = s.characterName || "\u89D2\u8272", r = s.attributeName || "\u5C5E\u6027";
  if (!a) return null;
  const i = a.isSuccess, o = a.naturalRoll === 20, m = a.naturalRoll === 1;
  return e.jsx("div", { className: "flex justify-center my-6 animate-in fade-in zoom-in duration-500", children: e.jsxs("div", { className: R("inline-flex items-center gap-4 px-6 py-4 rounded-2xl border-2 shadow-lg", i ? "bg-green-500/5 border-green-500/30 shadow-green-500/10" : "bg-red-500/5 border-red-500/30 shadow-red-500/10"), children: [e.jsxs("div", { className: R("w-14 h-14 rounded-xl flex items-center justify-center font-mono font-black text-2xl relative", o ? "bg-amber-500/20 text-amber-500 ring-2 ring-amber-500/30" : m ? "bg-red-500/20 text-red-500 ring-2 ring-red-500/30" : i ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"), children: [a.naturalRoll, o && e.jsx(we, { className: "w-3 h-3 text-amber-500 absolute -top-1 -right-1 animate-pulse" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "text-[10px] font-black uppercase tracking-widest text-muted-foreground/60", children: [n, " \xB7 ", r, " \u68C0\u5B9A"] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs("span", { className: "text-lg font-mono font-bold", children: [a.naturalRoll, a.modifier >= 0 ? "+" : "", a.modifier, " = ", a.total] }), e.jsxs("span", { className: "text-xs text-muted-foreground", children: ["vs DC ", ((_a2 = s.checkSpec) == null ? void 0 : _a2.dc) || "?"] })] }), e.jsx("div", { className: R("text-xs font-black uppercase tracking-wider", o ? "text-amber-500" : m ? "text-red-500" : i ? "text-green-600" : "text-red-600"), children: o ? "\u5927\u6210\u529F\uFF01" : m ? "\u5927\u5931\u8D25\uFF01" : i ? "\u68C0\u5B9A\u6210\u529F" : "\u68C0\u5B9A\u5931\u8D25" })] })] }) });
}, la = ({ item: t }) => {
  const s = t.data, a = s.noticeType;
  return e.jsx("div", { className: "flex justify-center my-4", children: e.jsxs("div", { className: "flex items-center gap-3 px-4 py-1.5 rounded-full bg-muted/30 border border-muted/50 text-muted-foreground shadow-sm", children: [e.jsx("span", { className: "w-1 h-1 rounded-full bg-amber-500/40" }), e.jsx("span", { className: "text-[10px] font-bold tracking-widest uppercase", children: a === "turn_start" && s.characterName ? `\u2694 ${s.characterName} \u7684\u56DE\u5408` : s.content || "\u7CFB\u7EDF\u901A\u77E5" }), e.jsx("span", { className: "w-1 h-1 rounded-full bg-amber-500/40" })] }) });
}, ud = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForDnd: tc }, Symbol.toStringTag, { value: "Module" }));
class nc extends Hs {
  constructor(s) {
    super(s), this.session = s;
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
  setCurrentPhase(s) {
    console.log(`[GroupChat] Phase: ${this.session.modeState.currentPhase} \u2192 ${s}`), this.session.modeState.currentPhase = s, this.session.updatedAt = Date.now();
  }
  setCurrentUIState(s) {
    this.session.modeState.currentUIState = s, this.session.updatedAt = Date.now();
  }
  setCurrentSpeaker(s) {
    this.session.modeState.currentSpeakerId = s, this.session.updatedAt = Date.now();
  }
  incrementAfterAISpeaks(s) {
    this.session.modeState.aiAutoSpeakCounter++, this.session.modeState.speakCounts[s] || (this.session.modeState.speakCounts[s] = 0), this.session.modeState.speakCounts[s]++, this.session.modeState.messageCount++, this.session.updatedAt = Date.now();
  }
  resetCounterAfterPlayerSpeaks() {
    this.session.modeState.aiAutoSpeakCounter = 0, this.session.modeState.messageCount++, this.session.updatedAt = Date.now();
  }
  resetAIAutoSpeakCounter() {
    this.session.modeState.aiAutoSpeakCounter = 0, this.session.updatedAt = Date.now();
  }
  findParticipantName(s) {
    var _a2;
    return ((_a2 = this.session.modeConfig.participantSnapshots.find((a) => a.id === s)) == null ? void 0 : _a2.name) || "\u89D2\u8272";
  }
}
const Se = le({ currentSession: null, contextManager: null, sessionManager: null, loadSession(t, s) {
  this.currentSession = t;
  const a = this.currentSession;
  a.modeState.currentUIState = "idle", a.modeState.aiAutoSpeakCounter === void 0 && (a.modeState.aiAutoSpeakCounter = 0), this.sessionManager = ga(new nc(a));
  const n = le(s || { historyItems: [], processingItem: void 0 });
  this.contextManager = new Ce(n);
}, async saveNewContextItemsToDB(t, s) {
  const { SessionDB: a } = await ve(async () => {
    const { SessionDB: i } = await Promise.resolve().then(() => Et);
    return { SessionDB: i };
  }, void 0), n = new a(t);
  let r;
  try {
    r = pe(s);
  } catch {
    r = JSON.parse(JSON.stringify(s));
  }
  await n.addContextItems(r);
}, async updateSessionInDB() {
  if (!this.currentSession) return;
  const { masterDb: t } = await ve(async () => {
    const { masterDb: n } = await Promise.resolve().then(() => cs);
    return { masterDb: n };
  }, void 0), s = pe(this.currentSession.modeState), a = pe(this.currentSession.modeConfig);
  await t.sessions.update(this.currentSession.id, { modeState: s, modeConfig: a, updatedAt: Date.now() });
} });
function Bs(t) {
  return t.modeConfig.participantSnapshots;
}
function rc(t, s) {
  return t.modeConfig.participantSnapshots.find((a) => a.id === s);
}
function mn(t) {
  return t.map((s) => `- ${s.name} (ID: ${s.id}): ${s.personality || s.description}`).join(`
`);
}
function ic(t) {
  if (!t) return "";
  const s = new Date(t), a = /* @__PURE__ */ new Date(), n = s.getHours().toString().padStart(2, "0"), r = s.getMinutes().toString().padStart(2, "0");
  return s.toDateString() === a.toDateString() ? `${n}:${r}` : `${s.getMonth() + 1}/${s.getDate()} ${n}:${r}`;
}
function un(t, s, a = 30) {
  const n = Bs(s), r = s.modeConfig.userName || "\u6211";
  return t.getFlatHistoryItems(a).filter((i) => !i.hidden && !i.deleted).map((i) => {
    var _a2;
    const { type: o, data: m } = i, c = ic(i.timestamp), d = c ? `[${c}] ` : "";
    if (o === "gc_user_message") return `${d}[${m.userName || r}]: ${m.content}`;
    if (o === "gc_character_message") {
      const u = m.characterName || ((_a2 = n.find((l) => l.id === m.characterId)) == null ? void 0 : _a2.name) || "\u89D2\u8272";
      return `${d}[${u}]: ${m.content}`;
    }
    return null;
  }).filter(Boolean).join(`
`);
}
function oc(t, s) {
  const a = Bs(t), n = t.modeState.speakCounts, r = t.modeConfig.topic, i = t.modeConfig.userName || "\u6211", m = `${t.modeConfig.dmSystemPrompt || "\u4F60\u662F\u4E00\u4E2A\u9690\u5F62\u7684\u7FA4\u804A\u8C03\u5EA6\u5458\u3002"}
\u4F60\u7684\u552F\u4E00\u4EFB\u52A1\u662F\u6839\u636E\u5F53\u524D\u5BF9\u8BDD\u4E0A\u4E0B\u6587\u9009\u62E9\u4E0B\u4E00\u4E2A\u6700\u9002\u5408\u53D1\u8A00\u7684 AI \u89D2\u8272\u3002
\u9009\u62E9\u65F6\u8981\u8003\u8651\uFF1A\u5BF9\u8BDD\u7684\u81EA\u7136\u6D41\u5411\u3001\u8BDD\u9898\u76F8\u5173\u6027\u3001\u89D2\u8272\u7684\u6027\u683C\u7279\u70B9\u3002
\u5141\u8BB8\u540C\u4E00\u89D2\u8272\u8FDE\u7EED\u53D1\u8A00\uFF08\u5982\u679C\u5BF9\u8BDD\u60C5\u5883\u81EA\u7136\u9700\u8981\uFF09\uFF0C\u4F46\u4E5F\u8981\u6CE8\u610F\u8BA9\u6240\u6709\u89D2\u8272\u90FD\u6709\u53C2\u4E0E\u611F\u3002
\u6CE8\u610F\u89C2\u5BDF\u5BF9\u8BDD\u5386\u53F2\u4E2D\u7684\u65F6\u95F4\u6233\uFF0C\u4E86\u89E3\u5BF9\u8BDD\u8282\u594F\u3002
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u8F93\u51FA\u4E00\u4E2A JSON \u5757\uFF0C\u4E0D\u8981\u5305\u542B\u4EFB\u4F55\u5176\u4ED6\u6587\u5B57\u3002
\`\`\`json
{ "nextSpeakerId": "\u89D2\u8272ID", "reason": "\u9009\u62E9\u539F\u56E0" }
\`\`\`
\u53EF\u9009\u89D2\u8272\uFF1A
${a.map((u) => `- ${u.name} (ID: ${u.id}, \u5DF2\u53D1\u8A00: ${n[u.id] || 0}\u6B21)`).join(`
`)}`, c = un(s, t, 20), d = [r ? `\u3010\u7FA4\u804A\u8BDD\u9898\u3011
${r}` : "", `\u3010\u7FA4\u804A\u6210\u5458\u3011
- ${i} (\u73A9\u5BB6)
${mn(a)}`, c ? `\u3010\u6700\u8FD1\u5BF9\u8BDD\u3011
${c}` : "\u3010\u5BF9\u8BDD\u521A\u5F00\u59CB\uFF0C\u8BF7\u9009\u4E00\u4E2A\u9002\u5408\u6253\u5F00\u8BDD\u9898\u7684\u89D2\u8272\u3011", `\u3010\u6240\u6709\u89D2\u8272\u53D1\u8A00\u7EDF\u8BA1\u3011
${a.map((u) => `${u.name}: ${n[u.id] || 0} \u6B21`).join(`
`)}`].filter(Boolean).join(`

`);
  return [{ role: "system", content: m }, { role: "user", content: d }];
}
function cc(t, s) {
  const a = t.modeState.currentSpeakerId, n = rc(t, a), r = Bs(t), i = t.modeConfig.userName || "\u6211", o = t.modeConfig.topic;
  if (!n) return [];
  const m = `\u4F60\u662F ${n.name}\u3002${n.systemPrompt}
${n.personality ? `\u4F60\u7684\u6027\u683C\uFF1A${n.personality}` : ""}
\u4F60\u73B0\u5728\u6B63\u5728\u4E00\u4E2A\u7FA4\u804A\u4E2D\u548C\u5176\u4ED6\u89D2\u8272\u4EE5\u53CA\u4E00\u4E2A\u540D\u4E3A"${i}"\u7684\u73A9\u5BB6\u804A\u5929\u3002
\u8BF7\u4EE5 ${n.name} \u7684\u8EAB\u4EFD\u81EA\u7136\u53D1\u8A00\uFF0C\u4E0D\u8981\u4F7F\u7528\u4EFB\u4F55 XML \u6807\u7B7E\uFF0C\u76F4\u63A5\u8F93\u51FA\u5BF9\u8BDD\u5185\u5BB9\u5373\u53EF\u3002
\u53D1\u8A00\u8981\u7B80\u6D01\u81EA\u7136\uFF0C\u50CF\u771F\u5B9E\u7684\u7FA4\u804A\u4E00\u6837\uFF0C\u901A\u5E38 1-3 \u53E5\u8BDD\u3002
\u6CE8\u610F\u6839\u636E\u5BF9\u8BDD\u5386\u53F2\u4E2D\u7684\u65F6\u95F4\u6233\u611F\u77E5\u65F6\u95F4\u6D41\u901D\uFF0C\u505A\u51FA\u81EA\u7136\u7684\u53CD\u5E94\u3002`, c = un(s, t, 20), d = r.filter((l) => l.id !== a), u = [o ? `\u3010\u7FA4\u804A\u8BDD\u9898\u3011
${o}` : "", d.length > 0 ? `\u3010\u5176\u4ED6\u7FA4\u804A\u6210\u5458\u3011
- ${i} (\u73A9\u5BB6)
${mn(d)}` : `\u3010\u7FA4\u804A\u6210\u5458\u3011
- ${i} (\u73A9\u5BB6)`, c ? `\u3010\u5BF9\u8BDD\u5386\u53F2\u3011
${c}` : "\u3010\u5BF9\u8BDD\u521A\u5F00\u59CB\uFF0C\u8BF7\u4E3B\u52A8\u5F00\u542F\u804A\u5929\u3011"].filter(Boolean).join(`

`);
  return [{ role: "system", content: m }, { role: "user", content: u }];
}
function lc(t) {
  try {
    const s = t.indexOf("{"), a = t.lastIndexOf("}") + 1;
    if (s < 0 || a <= s) return null;
    const n = JSON.parse(t.slice(s, a)), r = n.nextSpeakerId || n.speakerId;
    return r ? { nextSpeakerId: r, reason: n.reason || "" } : null;
  } catch {
    return null;
  }
}
const da = 3;
function dc() {
  const t = Ss((c) => c.config), s = f.useRef(false), a = ne(), n = f.useCallback(async (c, d, u, l = {}) => {
    const h = Se.contextManager;
    if (!h) return "";
    const p = { id: L(), type: u, orderRef: 0, timestamp: Date.now(), data: { content: "", ...l } };
    h.setProcessingItem(p);
    try {
      let x = "";
      if (await Ps(c, d.map((j) => ({ ...j, id: L() })), [], (j, y) => {
        x = y;
        const b = h.getProcessingItem();
        b && (b.data.content = y);
      }), !x.trim()) throw h.setProcessingItem(void 0), new Error("LLM \u8BF7\u6C42\u5931\u8D25\uFF1A\u672A\u6536\u5230\u6709\u6548\u54CD\u5E94\uFF08\u53EF\u80FD\u662F API \u5BC6\u94A5\u65E0\u6548\u3001\u6A21\u578B\u4E0D\u53EF\u7528\u6216\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF\uFF09");
      return h.completeProcessingItem(), x;
    } catch (x) {
      throw h.setProcessingItem(void 0), x;
    }
  }, []), r = f.useCallback(async () => {
    if (s.current) return;
    s.current = true;
    const c = { ...t };
    try {
      for (; ; ) {
        const d = Se, u = d.currentSession, l = d.sessionManager, h = d.contextManager;
        if (!(u && l && h)) break;
        if (l.isAICounterAtMax()) {
          l.setCurrentPhase("waiting_for_player"), l.setCurrentUIState("ai_loop_paused"), await d.updateSessionInDB();
          break;
        }
        l.setCurrentUIState("ai_loop_running"), l.setCurrentPhase("dm_select_speaker"), await d.updateSessionInDB();
        let p = null;
        for (let y = 0; y < da; y++) {
          const b = oc(u, h), S = await n(c, b, "gc_select_speaker");
          if (p = lc(S), p) break;
          console.warn(`[GroupChat] DM \u9009\u62E9\u89E3\u6790\u5931\u8D25 (${y + 1}/${da})`);
        }
        if (!p) {
          $.warning("DM \u9009\u62E9\u53D1\u8A00\u8005\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), l.setCurrentUIState("ai_loop_paused"), await d.updateSessionInDB();
          break;
        }
        const x = l.findParticipantName(p.nextSpeakerId);
        h.addHistoryItem({ id: L(), type: "gc_select_speaker", idx: 0, orderRef: 0, timestamp: Date.now(), data: { nextSpeakerId: p.nextSpeakerId, nextSpeakerName: x, reason: p.reason }, hidden: true }), l.setCurrentSpeaker(p.nextSpeakerId), l.setCurrentPhase("character_speak"), await d.updateSessionInDB();
        const j = cc(u, h);
        await n(c, j, "gc_character_message", { characterId: p.nextSpeakerId, characterName: x }), l.incrementAfterAISpeaks(p.nextSpeakerId), await d.saveNewContextItemsToDB(u.id, h.getHistoryItems()), await d.updateSessionInDB(), await new Promise((y) => setTimeout(y, 50));
      }
    } catch (d) {
      console.error("[GroupChat] AI \u5FAA\u73AF\u9519\u8BEF:", d);
      const u = Se.sessionManager;
      u && u.setCurrentUIState("ai_loop_paused");
      try {
        await Se.updateSessionInDB();
      } catch {
      }
      $.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", { duration: Number.POSITIVE_INFINITY, action: { label: "\u524D\u5F80\u914D\u7F6E", onClick: () => a({ to: "/config/llm" }) } });
    } finally {
      s.current = false;
    }
  }, [t, n, a]), i = f.useCallback(async (c) => {
    const d = Se, { currentSession: u, contextManager: l, sessionManager: h } = d;
    u && l && h && (l.addHistoryItem({ id: L(), type: "gc_user_message", idx: 0, orderRef: 0, timestamp: Date.now(), data: { content: c, userName: u.modeConfig.userName || "\u6211" } }), h.resetCounterAfterPlayerSpeaks(), await d.saveNewContextItemsToDB(u.id, l.getHistoryItems()), await d.updateSessionInDB(), s.current || r());
  }, [r]), o = f.useCallback(async () => {
    const c = Se, { sessionManager: d } = c;
    d && (d.resetAIAutoSpeakCounter(), await c.updateSessionInDB(), s.current || r());
  }, [r]), m = f.useCallback(async () => {
    const c = Se, { sessionManager: d } = c;
    d && (d.setCurrentPhase("dm_select_speaker"), d.setCurrentUIState("ai_loop_running"), d.resetAIAutoSpeakCounter(), await c.updateSessionInDB(), await new Promise((u) => setTimeout(u, 50)), r());
  }, [r]);
  return { sendPlayerMessage: i, continueAILoop: o, startChat: m, isRunningRef: s };
}
const mc = G(["dm_select_speaker", "character_speak", "waiting_for_player"]), uc = G(["idle", "ai_loop_running", "ai_loop_paused"]), ma = { idle: { label: "\u7A7A\u95F2", placeholder: "\u70B9\u51FB\u5F00\u59CB\u7FA4\u804A...", inputEnabled: false }, ai_loop_running: { label: "AI \u5BF9\u8BDD\u4E2D", placeholder: "\u968F\u65F6\u53D1\u9001\u6D88\u606F...", inputEnabled: true }, ai_loop_paused: { label: "\u7B49\u5F85\u4F60\u7684\u6D88\u606F", placeholder: "\u53D1\u9001\u6D88\u606F\uFF0C\u6216\u70B9\u51FB \u23E9 \u8BA9 AI \u7EE7\u7EED...", inputEnabled: true } }, hc = D({ id: g().describe("\u89D2\u8272 ID"), name: g().describe("\u89D2\u8272\u540D\u79F0"), description: g().describe("\u89D2\u8272\u63CF\u8FF0"), avatar: g().optional().describe("\u89D2\u8272\u5934\u50CF"), systemPrompt: g().describe("\u89D2\u8272\u626E\u6F14\u6307\u5F15"), personality: g().optional().describe("\u89D2\u8272\u6027\u683C\u6982\u8FF0"), firstMessage: g().optional().describe("\u5F00\u573A\u95EE\u5019\u8BED") }), pc = D({ topic: g().optional().describe("\u7FA4\u804A\u8BDD\u9898/\u573A\u666F"), participantSnapshots: X(hc).describe("\u53C2\u4E0E\u7684 AI \u89D2\u8272\u5FEB\u7167\u5217\u8868"), userName: g().optional().describe("\u73A9\u5BB6\u663E\u793A\u540D\u79F0"), dmSystemPrompt: g().optional().describe("DM \u8C03\u5EA6\u63D0\u793A\u8BCD"), maxAIAutoSpeakCount: C().optional().default(5).describe("AI \u81EA\u4E3B\u53D1\u8A00\u6700\u5927\u6570\u91CF\uFF0C\u8FBE\u5230\u540E\u6682\u505C\u7B49\u5F85\u73A9\u5BB6") }), xc = D({ currentPhase: mc.describe("AI \u5FAA\u73AF\u5F53\u524D\u9636\u6BB5"), currentUIState: uc.describe("\u5F53\u524D UI \u72B6\u6001"), currentSpeakerId: g().describe("\u5F53\u524D\u53D1\u8A00\u8005 ID"), messageCount: C().describe("\u603B\u6D88\u606F\u6570"), speakCounts: re(g(), C()).describe("\u6BCF\u4E2A\u89D2\u8272\u7684\u53D1\u8A00\u6B21\u6570"), aiAutoSpeakCounter: C().default(0).describe("AI \u81EA\u4E3B\u53D1\u8A00\u8BA1\u6570\u5668\uFF0C\u73A9\u5BB6\u53D1\u8A00\u65F6\u91CD\u7F6E") });
is.extend({ mode: V("group-chat").describe("\u6A21\u5F0F"), modeConfig: pc.describe("\u7FA4\u804A\u6A21\u5F0F\u914D\u7F6E"), modeState: xc.describe("\u7FA4\u804A\u6A21\u5F0F\u72B6\u6001") });
function hn(t) {
  if (!t) return "";
  const s = new Date(t), a = /* @__PURE__ */ new Date(), n = s.getHours().toString().padStart(2, "0"), r = s.getMinutes().toString().padStart(2, "0");
  return s.toDateString() === a.toDateString() ? `${n}:${r}` : `${s.getMonth() + 1}/${s.getDate()} ${n}:${r}`;
}
const gc = (t) => {
  var _a2, _b, _c2, _d, _e2, _f, _g, _h, _i2, _j, _k, _l2, _m, _n, _o2, _p, _q, _r2, _s2, _t2, _u;
  const s = ne(), [a, n] = f.useState(""), r = f.useRef(null), [i, o] = f.useState(false), m = ke(Se), { data: c = [] } = Me((k) => k.from({ s: Je })), d = c.find((k) => k.id === t.sessionId);
  f.useEffect(() => {
    var _a3;
    let k = false;
    if (!d) return;
    if (((_a3 = Se.currentSession) == null ? void 0 : _a3.id) === d.id && Se.contextManager) {
      o(true);
      return;
    }
    return (async () => {
      try {
        const T = await ls.createSessionDB(d.id).getContextItems();
        if (k) return;
        Se.loadSession(d, { historyItems: T, processingItem: void 0 }), o(true);
      } catch (ee) {
        console.error("[GroupChat] Load session error", ee);
      }
    })(), () => {
      k = true;
    };
  }, [d == null ? void 0 : d.id, d]);
  const { sendPlayerMessage: u, continueAILoop: l, startChat: h, isRunningRef: p } = dc();
  if (f.useEffect(() => {
    r.current && (r.current.scrollTop = r.current.scrollHeight);
  }), !(d && i)) return e.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4", children: [e.jsx("div", { className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center", children: e.jsx(_e, { className: "w-6 h-6 opacity-20" }) }), e.jsx("p", { className: "text-xs font-medium tracking-widest uppercase opacity-50", children: "\u52A0\u8F7D\u7FA4\u804A..." })] });
  const x = ((_b = (_a2 = m.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b.currentUIState) || "idle", j = ma[x] || ma.idle, y = (_e2 = (_d = (_c2 = m.currentSession) == null ? void 0 : _c2.modeConfig) == null ? void 0 : _d.participantSnapshots) == null ? void 0 : _e2.find((k) => {
    var _a3, _b2;
    return k.id === ((_b2 = (_a3 = m.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentSpeakerId);
  }), b = async () => {
    if (!a.trim()) return;
    const k = a;
    n(""), await u(k);
  }, S = async () => {
    p.current || await h();
  }, w = async () => {
    p.current || await l();
  }, N = () => s({ to: "/plaza" }), v = (_g = (_f = m.contextManager) == null ? void 0 : _f.state.processingItem) == null ? void 0 : _g.id;
  return e.jsxs("div", { className: "flex flex-row h-full overflow-hidden bg-background", children: [e.jsxs("div", { className: "flex flex-col grow min-w-0 h-full relative", children: [e.jsxs("div", { className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shadow-sm", children: e.jsx(St, { className: "w-5 h-5 text-violet-600" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-bold text-sm tracking-tight", children: ((_i2 = (_h = m.currentSession) == null ? void 0 : _h.modeConfig) == null ? void 0 : _i2.topic) || "\u7FA4\u804A" }), e.jsxs(B, { variant: "outline", className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-violet-500/5 text-violet-600 border-violet-500/10", children: [((_l2 = (_k = (_j = m.currentSession) == null ? void 0 : _j.modeConfig) == null ? void 0 : _k.participantSnapshots) == null ? void 0 : _l2.length) || 0, " \u4EBA"] })] }), e.jsx("span", { className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide", children: y && x === "ai_loop_running" ? `${y.name} \u6B63\u5728\u8F93\u5165...` : j.label })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [x !== "idle" && e.jsxs("span", { className: "text-[9px] text-muted-foreground/50 font-mono", children: ["AI ", ((_n = (_m = m.currentSession) == null ? void 0 : _m.modeState) == null ? void 0 : _n.aiAutoSpeakCounter) || 0, "/", ((_p = (_o2 = m.currentSession) == null ? void 0 : _o2.modeConfig) == null ? void 0 : _p.maxAIAutoSpeakCount) ?? 5] }), e.jsxs(B, { variant: "secondary", className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50", children: [e.jsx("span", { className: R("w-1.5 h-1.5 rounded-full", x === "ai_loop_running" ? "bg-violet-500 animate-pulse" : x === "ai_loop_paused" ? "bg-amber-500" : "bg-muted-foreground/30") }), "\u7FA4\u804A"] })] })] }), e.jsx("div", { className: "flex grow overflow-y-auto", ref: r, children: e.jsx("div", { className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-6", children: (() => {
    var _a3, _b2, _c3, _d2, _e3, _f2, _g2;
    const k = (((_a3 = m.contextManager) == null ? void 0 : _a3.state.historyItems) || []).filter((T) => !T.hidden), J = (_b2 = m.contextManager) == null ? void 0 : _b2.state.processingItem;
    if (x === "idle") {
      const T = k.length === 0 ? "\u5F00\u59CB\u7FA4\u804A" : "\u7EE7\u7EED\u7FA4\u804A";
      return e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500", children: [e.jsx("div", { className: "w-24 h-24 rounded-4xl bg-violet-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-violet-500/10 ring-8 ring-violet-500/5", children: e.jsx(St, { className: "w-10 h-10 text-violet-500 drop-shadow-sm" }) }), e.jsx("h2", { className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center", children: ((_d2 = (_c3 = m.currentSession) == null ? void 0 : _c3.modeConfig) == null ? void 0 : _d2.topic) || "\u7FA4\u804A" }), e.jsxs("p", { className: "text-muted-foreground/80 font-medium tracking-wider mb-6 max-w-md text-center leading-relaxed text-sm", children: ["\u4E0E ", (_g2 = (_f2 = (_e3 = m.currentSession) == null ? void 0 : _e3.modeConfig) == null ? void 0 : _f2.participantSnapshots) == null ? void 0 : _g2.map((F) => F.name).join("\u3001"), " \u4E00\u8D77\u804A\u5929"] }), e.jsxs(_, { type: "button", size: "lg", className: "h-14 px-10 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-violet-500/25 shadow-violet-500/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90", onClick: S, disabled: p.current, children: [e.jsx(we, { className: "w-5 h-5 mr-3" }), T] })] });
    }
    const ee = [...k];
    return J && !J.hidden && !k.some((T) => T.id === J.id) && ee.push(J), ee.map((T, F) => {
      var _a4, _b3, _c4, _d3;
      return e.jsx(fc, { item: T, participants: ((_b3 = (_a4 = m.currentSession) == null ? void 0 : _a4.modeConfig) == null ? void 0 : _b3.participantSnapshots) || [], userName: ((_d3 = (_c4 = m.currentSession) == null ? void 0 : _c4.modeConfig) == null ? void 0 : _d3.userName) || "\u6211", isStreaming: T.id === v }, `[${F}]${T.id}`);
    });
  })() }) }), x !== "idle" && e.jsxs("div", { className: "p-4 md:p-6 shrink-0 bg-background", children: [e.jsxs("div", { className: "max-w-3xl mx-auto relative group", children: [e.jsx(Y, { value: a, onChange: (k) => n(k.target.value), placeholder: j.placeholder, className: "min-h-20 max-h-40 pr-28 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-violet-500/20 focus-visible:bg-background transition-all", onKeyDown: (k) => {
    k.key === "Enter" && !k.shiftKey && (k.preventDefault(), b());
  } }), e.jsxs("div", { className: "absolute right-3 bottom-3 flex gap-2", children: [e.jsx(_, { type: "button", size: "icon", variant: "ghost", className: R("h-10 w-10 rounded-xl text-muted-foreground hover:text-violet-600", x === "ai_loop_paused" && "text-amber-500 animate-pulse"), disabled: p.current, onClick: w, title: "\u8BA9 AI \u7EE7\u7EED\u5BF9\u8BDD\uFF08\u91CD\u7F6E\u8BA1\u6570\u5668\uFF09", children: e.jsx(hr, { className: "w-4 h-4" }) }), e.jsx(_, { type: "button", size: "icon", className: "h-10 w-10 rounded-xl shadow-lg hover:shadow-violet-500/20 transition-all", disabled: !a.trim(), onClick: b, children: e.jsx(ot, { className: "w-4 h-4" }) })] })] }), e.jsxs("div", { className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40", children: [e.jsx("div", { className: "text-[9px] font-bold tracking-widest uppercase", children: "GROUP CHAT" }), e.jsx("div", { className: "text-[9px] font-medium", children: "Shift + Enter \u6362\u884C \xB7 \u23E9 \u8BA9 AI \u7EE7\u7EED" })] })] })] }), e.jsxs("div", { className: "w-70 h-full overflow-y-auto bg-muted/10 border-l p-6 space-y-6 shrink-0 hidden lg:block scrollbar-none", children: [e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80", children: [e.jsx(He, { className: "w-3.5 h-3.5 text-violet-500" }), "\u7FA4\u804A\u6210\u5458"] }), e.jsx("div", { className: "p-3 rounded-xl border bg-background/40 border-muted/30", children: e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600", children: e.jsx(He, { className: "w-4 h-4" }) }), e.jsx("div", { className: "grow min-w-0", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-sm font-bold truncate", children: ((_r2 = (_q = m.currentSession) == null ? void 0 : _q.modeConfig) == null ? void 0 : _r2.userName) || "\u6211" }), e.jsx(B, { variant: "outline", className: "text-[8px] px-1 h-3.5 bg-blue-500/10 text-blue-600 border-blue-500/20", children: "\u73A9\u5BB6" })] }) })] }) }), e.jsx("div", { className: "space-y-2", children: (_u = (_t2 = (_s2 = m.currentSession) == null ? void 0 : _s2.modeConfig) == null ? void 0 : _t2.participantSnapshots) == null ? void 0 : _u.map((k) => {
    var _a3, _b2, _c3, _d2, _e3;
    const J = k.id === ((_b2 = (_a3 = m.currentSession) == null ? void 0 : _a3.modeState) == null ? void 0 : _b2.currentSpeakerId) && x === "ai_loop_running", ee = ((_e3 = (_d2 = (_c3 = m.currentSession) == null ? void 0 : _c3.modeState) == null ? void 0 : _d2.speakCounts) == null ? void 0 : _e3[k.id]) || 0;
    return e.jsx("div", { className: R("p-3 rounded-xl border transition-all duration-300", J ? "bg-violet-500/5 border-violet-500/30 shadow-sm shadow-violet-500/10" : "bg-background/40 border-muted/30"), children: e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: R("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", J ? "bg-violet-500/20 text-violet-600" : "bg-muted text-muted-foreground"), children: e.jsx(de, { className: "w-4 h-4" }) }), e.jsxs("div", { className: "grow min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [e.jsx("span", { className: "text-sm font-bold truncate", children: k.name }), J && e.jsx(B, { variant: "outline", className: "text-[8px] px-1 h-3.5 bg-violet-500/10 text-violet-600 border-violet-500/20", children: "\u53D1\u8A00\u4E2D" })] }), e.jsxs("div", { className: "text-[10px] text-muted-foreground/60 font-medium", children: ["\u53D1\u8A00 \xD7", ee] })] })] }) }, k.id);
  }) })] }), e.jsx("div", { className: "space-y-3 pt-4", children: e.jsxs(_, { type: "button", variant: "outline", className: "w-full h-10 rounded-xl border-dashed border-2 hover:border-violet-500/50 hover:bg-violet-500/5 gap-2", onClick: N, children: [e.jsx(Ts, { className: "w-4 h-4" }), e.jsx("span", { className: "font-bold tracking-wider text-sm", children: "\u9000\u51FA\u7FA4\u804A" })] }) })] })] });
}, fc = ({ item: t, participants: s, userName: a, isStreaming: n }) => {
  var _a2;
  switch (t.type) {
    case "gc_character_message":
      return e.jsx(ua, { item: t, participants: s, isStreaming: n });
    case "gc_user_message":
      return e.jsx(yc, { item: t, userName: a });
    case "gc_select_speaker":
      return null;
    default:
      return ((_a2 = t.data) == null ? void 0 : _a2.content) ? e.jsx(ua, { item: t, participants: s, isStreaming: n }) : null;
  }
}, ua = ({ item: t, participants: s, isStreaming: a }) => {
  var _a2;
  const n = t.data, r = n.characterName || ((_a2 = s.find((o) => o.id === n.characterId)) == null ? void 0 : _a2.name) || "\u89D2\u8272", i = a ? "..." : hn(t.timestamp);
  return e.jsxs("div", { className: "flex gap-4 group animate-in fade-in slide-in-from-left-2 duration-300", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-violet-500/5 flex items-center justify-center shrink-0 border border-violet-500/10", children: e.jsx(de, { className: "w-4.5 h-4.5 text-violet-600" }) }), e.jsxs("div", { className: "space-y-1 grow pt-0.5 min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-[10px] font-black tracking-[0.15em] text-violet-600/60 uppercase", children: r }), e.jsx("span", { className: "text-[9px] text-muted-foreground/40 font-medium tabular-nums", children: i })] }), e.jsx("div", { className: "text-[15px] leading-relaxed text-foreground/85 whitespace-pre-wrap", children: n.content || "" })] })] });
}, yc = ({ item: t, userName: s }) => {
  const a = t.data, n = hn(t.timestamp);
  return e.jsxs("div", { className: "flex gap-4 group animate-in fade-in slide-in-from-right-2 duration-300", children: [e.jsx("div", { className: "w-9 h-9 rounded-xl bg-blue-500/5 flex items-center justify-center shrink-0 border border-blue-500/10", children: e.jsx(He, { className: "w-4.5 h-4.5 text-blue-600" }) }), e.jsxs("div", { className: "space-y-1 grow pt-0.5 min-w-0", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-[10px] font-black tracking-[0.15em] text-blue-600/60 uppercase", children: a.userName || s }), e.jsx("span", { className: "text-[9px] text-muted-foreground/40 font-medium tabular-nums", children: n })] }), e.jsx("div", { className: "text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap", children: a.content || "" })] })] });
}, hd = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForGroupChat: gc }, Symbol.toStringTag, { value: "Module" }));
class bc {
  constructor(s) {
    __publicField(this, "session");
    this.session = s;
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
  getCharacterState(s) {
    return this.session.modeState.characterStates[s];
  }
  getAllCharacterStates() {
    return Object.values(this.session.modeState.characterStates);
  }
  getCharacterIds() {
    return Object.keys(this.session.modeState.characterStates);
  }
  updateCharacterState(s, a) {
    const n = this.session.modeState.characterStates[s];
    n && (this.session.modeState.characterStates[s] = { ...n, ...a });
  }
  setCharacterState(s, a) {
    this.session.modeState.characterStates[s] = a;
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
  setGameTime(s) {
    this.session.modeState.gameTime = s;
  }
  incrementTickCount() {
    this.session.modeState.tickCount++;
  }
  addLog(s, a, n) {
    const r = { time: Rs(this.session.modeState.gameTime), source: a, content: s, type: n };
    this.session.modeState.logs.push(r), this.session.modeState.logs.length > 500 && (this.session.modeState.logs = this.session.modeState.logs.slice(-400));
  }
  getLogs() {
    return this.session.modeState.logs;
  }
  getRecentLogs(s) {
    return this.session.modeState.logs.slice(-s);
  }
  getSalesStand() {
    return this.session.modeState.salesStand;
  }
  setSalesStand(s) {
    this.session.modeState.salesStand = s;
  }
  addSalesItem(s) {
    this.session.modeState.salesStand.push(s);
  }
  removeSalesItem(s) {
    this.session.modeState.salesStand = this.session.modeState.salesStand.filter((a) => a.id !== s);
  }
  getSnapshot() {
    return { config: { ...this.session.modeConfig }, state: { ...this.session.modeState, characterStates: { ...this.session.modeState.characterStates }, salesStand: [...this.session.modeState.salesStand], logs: [...this.session.modeState.logs] } };
  }
}
const E = le({ currentSession: null, sessionManager: null, contextManager: null, historyItems: [], aiProcessingState: { isProcessing: false, processingCharacters: /* @__PURE__ */ new Set(), startedAt: 0, ticksPending: 0 }, loadSession(t, s) {
  this.currentSession = JSON.parse(JSON.stringify(t)), this.currentSession && (this.currentSession.modeState.isRunning = false, this.currentSession.modeState.currentPhase = "paused"), this.currentSession && (this.sessionManager = new bc(this.currentSession));
  const a = le(s || { historyItems: [], processingItem: void 0 });
  this.contextManager = new Ce(a), this.historyItems = [...(s == null ? void 0 : s.historyItems) || []];
}, unloadSession() {
  this.currentSession = null, this.sessionManager = null, this.contextManager = null, this.historyItems = [];
}, start() {
  this.currentSession && (this.currentSession.modeState.isRunning = true, this.currentSession.modeState.currentPhase = "running", this.updateSessionInDB());
}, pause() {
  this.currentSession && (this.currentSession.modeState.isRunning = false, this.currentSession.modeState.currentPhase = "paused", this.updateSessionInDB());
}, toggle() {
  var _a2;
  ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.isRunning) ? this.pause() : this.start();
}, getCharacterState(t) {
  var _a2;
  return (_a2 = this.currentSession) == null ? void 0 : _a2.modeState.characterStates[t];
}, updateCharacterState(t, s) {
  if (this.currentSession) {
    const a = this.currentSession.modeState.characterStates[t];
    a && (this.currentSession.modeState.characterStates[t] = { ...a, ...s });
  }
}, setCharacterState(t, s) {
  this.currentSession && (this.currentSession.modeState.characterStates[t] = s);
}, advanceTime() {
  if (!this.currentSession) return { dayChanged: false, oldDay: 0 };
  const t = this.currentSession.modeState, s = t.gameTime.day;
  let { day: a, hour: n, minute: r } = t.gameTime;
  return r += $t, r >= 60 && (n += Math.floor(r / 60), r %= 60), n >= 24 && (a += Math.floor(n / 24), n %= 24), t.gameTime = { day: a, hour: n, minute: r }, t.tickCount++, { dayChanged: a !== s, oldDay: s };
}, addLog(t, s, a) {
  if (!(this.currentSession && this.contextManager)) return;
  let n;
  const r = Date.now(), i = Rs(this.currentSession.modeState.gameTime);
  a === "chat" ? n = { id: L(), type: "participant_message", timestamp: r, data: { content: t, name: s, role: "assistant", isCharacter: true, characterId: s, isUser: false, isDM: false, isEnv: false, gameTime: i } } : n = { id: L(), type: "alert", timestamp: r, orderRef: 0, data: { type: a === "trade" ? "success" : "info", content: t, source: s, gameTime: i, timestamp: r } }, this.contextManager.addHistoryItem(n), this.historyItems = [...this.historyItems, n], this.historyItems.length > 500 && (this.historyItems = this.historyItems.slice(-400)), this.saveContextItemToDB(this.currentSession.id, n).catch((o) => {
    console.error("Failed to save log to DB:", o);
  });
}, getSalesStand() {
  var _a2;
  return ((_a2 = this.currentSession) == null ? void 0 : _a2.modeState.salesStand) ?? [];
}, setSalesStand(t) {
  this.currentSession && (this.currentSession.modeState.salesStand = t);
}, startAIProcessing(t) {
  this.aiProcessingState.isProcessing = true, this.aiProcessingState.startedAt = Date.now(), this.aiProcessingState.processingCharacters = new Set(t);
}, finishAIProcessing() {
  this.aiProcessingState.isProcessing = false, this.aiProcessingState.processingCharacters = /* @__PURE__ */ new Set(), this.aiProcessingState.startedAt = 0;
}, addPendingTick() {
  this.aiProcessingState.ticksPending++;
}, consumePendingTicks() {
  const t = this.aiProcessingState.ticksPending;
  return this.aiProcessingState.ticksPending = 0, t;
}, isAIStuck() {
  var _a2;
  if (!this.aiProcessingState.isProcessing) return false;
  const t = ((_a2 = this.currentSession) == null ? void 0 : _a2.modeConfig.settings.aiTimeoutMs) ?? 3e4;
  return Date.now() - this.aiProcessingState.startedAt > t;
}, async saveContextItemToDB(t, s) {
  const { SessionDB: a } = await ve(async () => {
    const { SessionDB: i } = await Promise.resolve().then(() => Et);
    return { SessionDB: i };
  }, void 0), n = new a(t), r = JSON.parse(JSON.stringify(s));
  await n.addContextItems([r]);
}, async updateSessionInDB() {
  if (!this.currentSession) return;
  const { masterDb: t } = await ve(async () => {
    const { masterDb: a } = await Promise.resolve().then(() => cs);
    return { masterDb: a };
  }, void 0), s = pe(this.currentSession.modeState);
  await t.sessions.update(this.currentSession.id, { modeState: s, updatedAt: Date.now() });
} });
function jc({ gameTime: t, isRunning: s, onToggle: a, onSettings: n }) {
  return e.jsxs("div", { className: "flex items-center justify-between px-4 py-2 border-b bg-card", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("h1", { className: "text-lg font-semibold", children: "\u{1F3D8}\uFE0F \u5C0F\u9547\u6A21\u5F0F" }), e.jsx("div", { className: "text-sm text-muted-foreground", children: pi(t) })] }), e.jsx("div", { className: "flex items-center gap-2", children: e.jsx(_, { type: "button", variant: s ? "default" : "outline", size: "sm", onClick: a, children: s ? e.jsxs(e.Fragment, { children: [e.jsx(Aa, { className: "w-4 h-4 mr-1" }), "\u6682\u505C"] }) : e.jsxs(e.Fragment, { children: [e.jsx(Ms, { className: "w-4 h-4 mr-1" }), "\u5F00\u59CB"] }) }) }), e.jsx("div", { className: "flex items-center gap-2", children: e.jsx(_, { type: "button", variant: "ghost", size: "icon", onClick: n, children: e.jsx(Ct, { className: "w-4 h-4" }) }) })] });
}
function vc({ config: t, gridSize: s }) {
  const a = { position: "absolute", left: t.x * s, top: t.y * s, width: t.w * s, height: t.h * s, backgroundColor: t.color, opacity: 0.6 };
  return e.jsx("div", { className: "rounded border border-black/10 dark:border-white/10 flex items-center justify-center text-center pointer-events-none", style: a, title: t.info || t.label, children: e.jsx("span", { className: "text-xs font-medium text-black/70 dark:text-white/70 px-1 leading-tight", children: t.label }) });
}
const Nc = 5e3;
function Sc({ character: t, gridSize: s, isSelected: a, onClick: n }) {
  var _a2;
  const r = s * 0.8, i = (s - r) / 2, o = t.visualX ?? t.gridX, m = t.visualY ?? t.gridY, c = { position: "absolute", left: o * s + i, top: m * s + i, width: r, height: r, backgroundColor: t.color, zIndex: a ? 10 : 1 }, d = t.taskTimer > 0, u = ci, l = d ? Math.max(0, Math.min(100, (u - t.taskTimer) / u * 100)) : 0, h = t.lastDialogue && Date.now() - t.lastDialogue.timestamp < Nc, p = ((_a2 = t.lastDialogue) == null ? void 0 : _a2.content) ? t.lastDialogue.content.length > 20 ? `${t.lastDialogue.content.slice(0, 20)}...` : t.lastDialogue.content : "";
  return e.jsxs("div", { style: c, className: "flex flex-col items-center justify-center pointer-events-none", children: [h && e.jsxs("div", { className: "absolute -top-12 left-1/2 -translate-x-1/2 max-w-32 px-2 py-1 bg-white dark:bg-gray-800 text-xs text-gray-800 dark:text-gray-200 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 whitespace-nowrap overflow-hidden text-ellipsis z-20", children: [e.jsx("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800" }), '"', p, '"'] }), d && e.jsx("div", { className: "absolute -top-3 w-8 h-1 bg-gray-200 rounded-full overflow-hidden border border-black/10", children: e.jsx("div", { className: "h-full bg-blue-500 transition-all duration-300 ease-linear", style: { width: `${l}%` } }) }), t.thought && !d && !h && e.jsx("div", { className: "absolute -top-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" }), e.jsx("button", { type: "button", className: `w-full h-full rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform pointer-events-auto shadow-sm border border-white/20 ${a ? "ring-2 ring-primary ring-offset-2" : ""}`, style: { backgroundColor: t.color }, onClick: n, title: `${t.name}: ${t.status}`, children: t.name.charAt(0) }), e.jsx("span", { className: "absolute -bottom-4 text-[10px] whitespace-nowrap bg-black/50 text-white px-1 rounded backdrop-blur-sm", children: t.name })] });
}
function _c({ characterStates: t, selectedCharacterId: s, onSelectCharacter: a }) {
  const n = Ae * $e, r = f.useMemo(() => Object.entries(ze).map(([m, c]) => e.jsx(vc, { locationKey: m, config: c, gridSize: Ae }, m)), []), i = f.useMemo(() => t.map((m) => e.jsx(Sc, { character: m, gridSize: Ae, isSelected: m.id === s, onClick: () => a(m.id) }, m.id)), [t, s, a]), o = f.useMemo(() => t.map((m) => {
    if (!m.currentPath || m.currentPath.length < 2) return null;
    const c = m.currentPath.map(([d, u]) => `${d * Ae + Ae / 2},${u * Ae + Ae / 2}`).join(" ");
    return e.jsx("polyline", { points: c, fill: "none", stroke: m.color, strokeWidth: "2", strokeDasharray: "4 2", opacity: "0.5" }, `path-${m.id}`);
  }), [t]);
  return e.jsxs("div", { className: "relative bg-amber-50 dark:bg-amber-950/20 rounded-lg border overflow-hidden", style: { width: n, height: n, minWidth: n, minHeight: n }, children: [e.jsx("div", { className: "absolute inset-0 pointer-events-none", style: { backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `, backgroundSize: `${Ae}px ${Ae}px` } }), e.jsx("svg", { className: "absolute inset-0 pointer-events-none", width: n, height: n, children: o }), r, i] });
}
function wc({ character: t, onOpenDiary: s }) {
  if (!t) return e.jsx("div", { className: "w-72 border-l bg-card p-4", children: e.jsx("p", { className: "text-muted-foreground text-sm", children: "\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u67E5\u770B\u8BE6\u60C5" }) });
  const a = t.stamina / t.maxStamina * 100, n = t.energy / t.maxEnergy * 100, r = t.happiness;
  return e.jsxs("div", { className: "w-72 border-l bg-card overflow-y-auto", children: [e.jsx("div", { className: "p-4 border-b", children: e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg", style: { backgroundColor: t.color }, children: t.name.charAt(0) }), e.jsxs("div", { className: "flex-1 min-w-0", children: [e.jsx("h2", { className: "font-semibold truncate", children: t.name }), e.jsx("p", { className: "text-xs text-muted-foreground truncate", children: t.personality })] })] }) }), e.jsxs("div", { className: "p-4 border-b space-y-3", children: [e.jsx("h3", { className: "text-sm font-medium text-muted-foreground", children: "\u72B6\u6001" }), e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "flex justify-between text-sm", children: [e.jsx("span", { children: "\u4F53\u529B" }), e.jsxs("span", { children: [t.stamina, "/", t.maxStamina] })] }), e.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: e.jsx("div", { className: "h-full bg-green-500 transition-all", style: { width: `${a}%` } }) })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "flex justify-between text-sm", children: [e.jsx("span", { children: "\u6D3B\u529B" }), e.jsxs("span", { children: [t.energy, "/", t.maxEnergy] })] }), e.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: e.jsx("div", { className: "h-full bg-blue-500 transition-all", style: { width: `${n}%` } }) })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "flex justify-between text-sm", children: [e.jsx("span", { children: "\u6109\u60A6" }), e.jsxs("span", { children: [t.happiness, "/100"] })] }), e.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: e.jsx("div", { className: "h-full bg-yellow-500 transition-all", style: { width: `${r}%` } }) })] }), e.jsxs("div", { className: "flex justify-between text-sm", children: [e.jsx("span", { children: "\u{1F4B0} \u91D1\u94B1" }), e.jsxs("span", { className: "font-medium", children: ["$", t.money] })] })] }), e.jsxs("div", { className: "p-4 border-b space-y-2", children: [e.jsx("h3", { className: "text-sm font-medium text-muted-foreground", children: "\u5F53\u524D\u6D3B\u52A8" }), e.jsxs("div", { className: "text-sm", children: [e.jsxs("p", { children: [e.jsx("span", { className: "text-muted-foreground", children: "\u72B6\u6001:" }), " ", t.status] }), e.jsxs("p", { children: [e.jsx("span", { className: "text-muted-foreground", children: "\u4F4D\u7F6E:" }), " ", t.locationName] }), e.jsxs("p", { children: [e.jsx("span", { className: "text-muted-foreground", children: "\u4EFB\u52A1:" }), " ", t.taskName] })] })] }), e.jsxs("div", { className: "p-4 border-b space-y-2", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("h3", { className: "text-sm font-medium text-muted-foreground", children: "\u5185\u5FC3\u60F3\u6CD5" }), s && e.jsxs(_, { variant: "ghost", size: "sm", className: "h-6 px-2 text-muted-foreground hover:text-foreground", onClick: s, children: [e.jsx(pr, { className: "w-3 h-3 mr-1" }), "\u65E5\u8BB0"] })] }), e.jsxs("p", { className: "text-sm italic text-muted-foreground", children: ['"', t.thought || "...", '"'] })] }), e.jsxs("div", { className: "p-4 border-b space-y-2", children: [e.jsx("h3", { className: "text-sm font-medium text-muted-foreground", children: "\u5E93\u5B58" }), Object.keys(t.inventory).length === 0 ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "(\u7A7A)" }) : e.jsx("div", { className: "space-y-1", children: Object.entries(t.inventory).map(([i, o]) => e.jsxs("div", { className: "flex justify-between text-sm", children: [e.jsx("span", { children: i }), e.jsxs("span", { children: ["\xD7", o] })] }, i)) })] }), e.jsxs("div", { className: "p-4 space-y-2", children: [e.jsxs("h3", { className: "text-sm font-medium text-muted-foreground", children: ["\u5F85\u529E\u4E8B\u9879 (", t.todoList.filter((i) => i.status === "pending").length, ")"] }), t.todoList.length === 0 ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "(\u65E0)" }) : e.jsx("div", { className: "space-y-1 max-h-32 overflow-y-auto", children: t.todoList.filter((i) => i.status !== "completed" && i.status !== "cancelled").slice(0, 5).map((i) => e.jsxs("div", { className: `text-xs p-1.5 rounded ${i.status === "in-progress" ? "bg-primary/10 text-primary" : "bg-muted"}`, children: [e.jsxs("span", { className: "text-muted-foreground", children: ["[", i.type, "]"] }), " ", i.content] }, i.id)) })] })] });
}
function Cc(t, s) {
  return t === "chat" ? "text-blue-600 dark:text-blue-400 font-semibold" : s.includes("\u8BA1\u5212") || s.includes("\u51B3\u5B9A") ? "text-purple-600 dark:text-purple-400" : s.includes("\u524D\u5F80") || s.includes("\u79FB\u52A8") ? "text-amber-600 dark:text-amber-400" : s.includes("\u5B8C\u6210") || s.includes("\u5403\u4E86") || s.includes("\u559D\u4E86") || s.includes("\u7761\u9192") ? "text-emerald-600 dark:text-emerald-400" : s.includes("\u53D6\u6D88") || s.includes("\u5931\u8D25") || s.includes("\u65E0\u6CD5") || s.includes("\u6655\u5012") ? "text-red-600 dark:text-red-400" : s.includes("\u5F00\u59CB") ? "text-cyan-600 dark:text-cyan-400" : "text-muted-foreground";
}
function kc({ contextItems: t, selectedCharacter: s }) {
  const a = f.useRef(null);
  f.useEffect(() => {
    a.current && (a.current.scrollTop = a.current.scrollHeight);
  }, [t.length]);
  const r = f.useMemo(() => t.filter((i) => !(i.hidden || i.deleted)).map((i) => i.type === "alert" ? { id: i.id, time: i.data.gameTime || (i.timestamp ? new Date(i.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }) : ""), source: "\u7CFB\u7EDF", content: i.data.content, type: "sys" } : i.type === "participant_message" || i.type === "character_message" ? { id: i.id, time: i.data.gameTime || (i.timestamp ? new Date(i.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }) : ""), source: i.data.name || "\u672A\u77E5", content: i.data.content, type: "chat" } : null).filter((i) => i !== null).filter((i) => i.type === "sys" || !s ? true : i.source.includes(s.name) || i.content.includes(s.name)), [t, s]).slice(-50);
  return e.jsxs("div", { className: "h-40 border rounded-lg bg-card flex flex-col", children: [e.jsxs("div", { className: "px-3 py-1.5 border-b bg-muted/50 flex items-center justify-between", children: [e.jsx("span", { className: "text-sm font-medium", children: "\u65E5\u5FD7" }), e.jsx("span", { className: "text-xs text-muted-foreground", children: s ? `\u7B5B\u9009: ${s.name}` : "\u5168\u90E8" })] }), e.jsx("div", { ref: a, className: "flex-1 overflow-y-auto p-2 space-y-1 text-xs font-mono", children: r.length === 0 ? e.jsx("p", { className: "text-muted-foreground text-center py-4", children: "\u6682\u65E0\u65E5\u5FD7" }) : r.map((i) => e.jsxs("div", { className: `flex gap-2 ${Cc(i.type, i.content)}`, children: [e.jsxs("span", { className: "opacity-70 shrink-0", children: ["[", i.time, "]"] }), e.jsxs("span", { className: "font-medium shrink-0", children: [i.source, ":"] }), e.jsx("span", { className: "break-all", children: i.content })] }, i.id)) })] });
}
function Te(t, s) {
  return t.inventory[s] ?? 0;
}
function ht(t, s, a) {
  const n = t.inventory[s] ?? 0;
  return { ...t, inventory: { ...t.inventory, [s]: n + a } };
}
function Nt(t, s, a) {
  const n = t.inventory[s] ?? 0, r = Math.max(0, n - a), i = { ...t.inventory };
  return r === 0 ? delete i[s] : i[s] = r, { ...t, inventory: i };
}
function pn(t, s) {
  return { ...t, stamina: Math.max(0, Math.min(t.maxStamina, t.stamina + s)) };
}
function Ic(t, s) {
  return { ...t, energy: Math.max(0, Math.min(t.maxEnergy, t.energy + s)) };
}
function xn(t, s) {
  return { ...t, happiness: Math.max(0, Math.min(Ls, t.happiness + s)) };
}
function Dc(t) {
  if (Te(t, q.BREAD.name) <= 0) return { char: t, consumed: false };
  const a = q.BREAD.stamina;
  let n = Nt(t, q.BREAD.name, 1);
  return n = pn(n, a), { char: n, consumed: true };
}
function Tc(t) {
  if (Te(t, q.JUICE.name) <= 0) return { char: t, consumed: false };
  const a = q.JUICE.happiness;
  let n = Nt(t, q.JUICE.name, 1);
  return n = xn(n, a), { char: n, consumed: true };
}
function Mc(t, s) {
  let a = { ...t }, n = "";
  switch (s) {
    case "Farm": {
      a = ht(a, q.WHEAT.name, 6), n = "\u83B7\u5F97 6 \u5C0F\u9EA6";
      break;
    }
    case "Mill": {
      Te(a, q.WHEAT.name) >= 20 ? (a = Nt(a, q.WHEAT.name, 20), a = ht(a, q.FLOUR.name, 15), n = "\u6D88\u8017 20 \u5C0F\u9EA6\uFF0C\u83B7\u5F97 15 \u9762\u7C89") : n = "\u5C0F\u9EA6\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u78E8\u9762";
      break;
    }
    case "Bakery": {
      Te(a, q.FLOUR.name) >= 2 ? (a = Nt(a, q.FLOUR.name, 2), a = ht(a, q.BREAD.name, 4), n = "\u6D88\u8017 2 \u9762\u7C89\uFF0C\u83B7\u5F97 4 \u9762\u5305") : n = "\u9762\u7C89\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u70D8\u7119";
      break;
    }
    case "Vineyard": {
      a = ht(a, q.GRAPE.name, 3), n = "\u83B7\u5F97 3 \u8461\u8404";
      break;
    }
    case "JuiceFactory": {
      Te(a, q.GRAPE.name) >= 4 ? (a = Nt(a, q.GRAPE.name, 4), a = ht(a, q.JUICE.name, 4), n = "\u6D88\u8017 4 \u8461\u8404\uFF0C\u83B7\u5F97 4 \u679C\u6C41") : n = "\u8461\u8404\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u69A8\u6C41";
      break;
    }
    default:
      n = "\u672A\u77E5\u5DE5\u4F5C\u5730\u70B9";
  }
  return a = { ...a, taskName: "Idle", taskTarget: null, taskTimer: 0, status: "\u7A7A\u95F2" }, { char: a, log: n };
}
function Pc(t, s, a, n) {
  let r = pn(t, s);
  return r = Ic(r, a), r = xn(r, n), { ...r, taskName: "Idle", taskTarget: null, taskTimer: 0, status: "\u7A7A\u95F2" };
}
function Ac() {
  return `todo_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}
function Ec(t, s) {
  return t.inventory[s] ?? 0;
}
function $c(t, s, a) {
  let n = 0;
  if (t.deadline) {
    const c = t.deadline - a;
    n = Math.max(0, 1 - c / 100);
  }
  if (t.type === "respond") {
    const c = a - t.createdAt;
    n = Math.max(0, 1 - c / 10);
  }
  let r = 0.5;
  t.type === "rest" && s.stamina < s.maxStamina * 0.5 && (r = 0.9), t.type === "consume" && s.stamina < s.maxStamina * 0.7 && (r = 0.7), t.type === "work" && s.money < 50 && (r = 0.8);
  const i = Rc(t, s) ? 1 : 0, o = a - t.createdAt, m = Math.max(0, 1 - o / 50);
  return { urgency: n, importance: r, feasibility: i, recency: m };
}
function Lc(t, s, a) {
  const n = $c(t, s, a);
  if (n.feasibility === 0) return Number.NEGATIVE_INFINITY;
  let r = t.priority * 0.3 + n.urgency * 30 + n.importance * 25 + n.recency * 5;
  return t.type === "respond" && (r *= 1.5), r;
}
function Rc(t, s) {
  const a = t.preconditions;
  if (a.location && s.locationName !== a.location && (!ze[a.location] || t.type !== "travel" && t.type !== "explore" && t.type !== "trade" && t.type !== "work" && t.type !== "rest") || a.stamina && s.stamina < a.stamina || a.minEnergy !== void 0 && s.energy / s.maxEnergy < a.minEnergy) return false;
  if (a.items) {
    for (const n of a.items) if (Ec(s, n.itemId) < n.count) return false;
  }
  return true;
}
function gn(t, s) {
  var _a2;
  const a = t.todoList.filter((r) => r.status === "pending");
  return a.length === 0 ? null : ((_a2 = a.map((r) => ({ todo: r, priority: Lc(r, t, s) })).filter((r) => r.priority > Number.NEGATIVE_INFINITY).sort((r, i) => i.priority - r.priority)[0]) == null ? void 0 : _a2.todo) ?? null;
}
function fn(t, s) {
  return { id: Ac(), type: t.type, content: t.content, priority: t.priority, preconditions: t.preconditions ?? {}, createdAt: s, deadline: t.deadline, source: t.source, relatedCharacterId: t.relatedCharacterId, status: "pending", attempts: 0, maxAttempts: t.maxAttempts ?? 3 };
}
function Be(t, s) {
  const a = t.todoList.map((n) => n.id === s ? { ...n, status: "in-progress", attempts: n.attempts + 1 } : n);
  return { ...t, todoList: a, currentTodo: s };
}
function Le(t, s) {
  const a = t.todoList.map((n) => n.id === s ? { ...n, status: "completed" } : n);
  return { ...t, todoList: a, currentTodo: t.currentTodo === s ? null : t.currentTodo };
}
function he(t, s) {
  const a = t.todoList.map((n) => n.id === s ? { ...n, status: "cancelled" } : n);
  return { ...t, todoList: a, currentTodo: t.currentTodo === s ? null : t.currentTodo };
}
function Oc(t) {
  return t.todoList.filter((s) => s.status === "pending").length;
}
function ha(t) {
  return t.currentTodo ? t.todoList.find((s) => s.id === t.currentTodo) ?? null : null;
}
function Re(t) {
  return { updatedChar: t, logs: [], historyEntries: [], completed: false, requiresAI: false, dialogueBroadcasts: [] };
}
function Ut(t, s) {
  if (t.currentPath && t.currentPath.length > 1) return console.log(`[MoveTarget] ${t.name} \u6B63\u5728\u79FB\u52A8\u4E2D\uFF0C\u5FFD\u7565\u65B0\u76EE\u6807 ${s}`), t;
  const a = ze[s];
  if (a) {
    let i = a.x, o = a.y;
    if (a.displayCharPos) i = a.displayCharPos.x, o = a.displayCharPos.y;
    else if (a.grid) {
      let c = false;
      for (let d = 0; d < a.grid.length; d++) {
        for (let u = 0; u < a.grid[d].length; u++) if (a.grid[d][u] === "E") {
          i = a.x + u, o = a.y + d, c = true;
          break;
        }
        if (c) break;
      }
      if (!c) for (let d = 0; d < a.grid.length; d++) {
        for (let u = 0; u < a.grid[d].length; u++) if (a.grid[d][u] !== 1) {
          i = a.x + u, o = a.y + d, c = true;
          break;
        }
        if (c) break;
      }
    } else i = a.x + Math.floor(Math.random() * a.w), o = a.y + Math.floor(Math.random() * a.h);
    return Math.abs(t.gridX - i) + Math.abs(t.gridY - o) <= 1 ? { ...t, locationName: s } : { ...t, targetLocationName: s, pendingMoveTo: { x: i, y: o } };
  }
  const n = Math.floor(Math.random() * 5) - 2, r = Math.floor(Math.random() * 5) - 2;
  return { ...t, targetLocationName: "Wander", pendingMoveTo: { x: Math.max(0, Math.min(19, t.gridX + n)), y: Math.max(0, Math.min(19, t.gridY + r)) } };
}
function yn(t, s) {
  const a = sn.includes(s);
  return { ...t, taskTimer: 6, taskTarget: s, taskName: a ? "Sleeping" : "Working", status: a ? "\u7761\u89C9\u4E2D..." : "\u5DE5\u4F5C\u4E2D..." };
}
function Fc(t, s) {
  var _a2;
  const a = Re(t);
  let n = { ...t };
  const r = s.preconditions.location;
  if (!r) return n = he(n, s.id), a.updatedChar = n, a.historyEntries.push({ role: "system", content: `\u5DE5\u4F5C\u4EFB\u52A1\u300C${s.content}\u300D\u7F3A\u5C11\u76EE\u6807\u5730\u70B9\uFF0C\u5DF2\u53D6\u6D88\u3002` }), a;
  if (n.locationName !== r) return n = Ut(n, r), n = Be(n, s.id), a.historyEntries.push({ role: "system", content: `\u524D\u5F80${r}\u51C6\u5907\u5DE5\u4F5C\u3002` }), a.logs.push({ content: `${t.name} \u524D\u5F80${r}`, source: "\u7CFB\u7EDF", type: "sys" }), a.updatedChar = n, a;
  if ((_a2 = ze[r]) == null ? void 0 : _a2.isWork) {
    if (r === "Mill" && Te(n, q.WHEAT.name) < 20) return n = he(n, s.id), a.updatedChar = n, a.historyEntries.push({ role: "system", content: "\u5C0F\u9EA6\u4E0D\u8DB3 20 \u5355\u4F4D\uFF0C\u65E0\u6CD5\u5728\u78E8\u574A\u5DE5\u4F5C\u3002" }), a;
    if (r === "Bakery" && Te(n, q.FLOUR.name) < 2) return n = he(n, s.id), a.updatedChar = n, a.historyEntries.push({ role: "system", content: "\u9762\u7C89\u4E0D\u8DB3 2 \u5355\u4F4D\uFF0C\u65E0\u6CD5\u5728\u9762\u5305\u623F\u5DE5\u4F5C\u3002" }), a;
    if (r === "JuiceFactory" && Te(n, q.GRAPE.name) < 4) return n = he(n, s.id), a.updatedChar = n, a.historyEntries.push({ role: "system", content: "\u8461\u8404\u4E0D\u8DB3 4 \u5355\u4F4D\uFF0C\u65E0\u6CD5\u5728\u679C\u6C41\u5382\u5DE5\u4F5C\u3002" }), a;
    n = yn(n, r), n = Be(n, s.id), a.historyEntries.push({ role: "system", content: `\u5F00\u59CB\u5728${r}\u5DE5\u4F5C\u3002` }), a.logs.push({ content: `${t.name} \u5F00\u59CB\u5728${r}\u5DE5\u4F5C`, source: "\u7CFB\u7EDF", type: "sys" });
  }
  return a.updatedChar = n, a;
}
function Uc(t, s) {
  const a = Re(t);
  let n = { ...t };
  const r = s.preconditions.location || n.homeZoneKey || "Zone_A";
  return n.locationName !== r ? (n = Ut(n, r), n = Be(n, s.id), a.historyEntries.push({ role: "system", content: `\u524D\u5F80${r}\u51C6\u5907\u4F11\u606F\u3002` }), a.logs.push({ content: `${t.name} \u524D\u5F80${r}`, source: "\u7CFB\u7EDF", type: "sys" }), a.updatedChar = n, a) : (sn.includes(r) ? (n = yn(n, r), n = Be(n, s.id), a.historyEntries.push({ role: "system", content: `\u5F00\u59CB\u5728${r}\u4F11\u606F\u3002` }), a.logs.push({ content: `${t.name} \u56DE\u5BB6\u4F11\u606F`, source: "\u7CFB\u7EDF", type: "sys" })) : (n.status = "\u4F11\u606F\u4E2D", n = Le(n, s.id), a.completed = true, a.historyEntries.push({ role: "system", content: `\u5728${r}\u77ED\u6682\u4F11\u606F\u3002` })), a.updatedChar = n, a);
}
function Hc(t, s) {
  const a = Re(t);
  let n = { ...t };
  const r = s.preconditions.location || "Park";
  return n.locationName !== r ? (n = Ut(n, r), n = Be(n, s.id), a.historyEntries.push({ role: "system", content: `\u524D\u5F80${r}\u63A2\u7D22\u3002` }), a.logs.push({ content: `${t.name} \u524D\u5F80${r}\u63A2\u7D22`, source: "\u7CFB\u7EDF", type: "sys" }), a.updatedChar = n, a) : (r === "Park" ? (n.happiness = Math.min(100, n.happiness + 1), a.logs.push({ content: `${t.name} \u5728\u516C\u56ED\u6563\u6B65\uFF0C\u6109\u60A6\u503C+1`, source: "\u7CFB\u7EDF", type: "sys" }), a.historyEntries.push({ role: "system", content: "\u5728\u516C\u56ED\u653E\u677E\uFF0C\u6109\u60A6\u503C+1\u3002" })) : a.historyEntries.push({ role: "system", content: `\u63A2\u7D22\u4E86${r}\u3002` }), n = Le(n, s.id), n.status = `\u5728${r}\u95F2\u901B`, a.completed = true, a.updatedChar = n, a);
}
function Bc(t, s) {
  const a = Re(t);
  let n = { ...t };
  const r = s.preconditions.location;
  return r ? n.locationName !== r ? (n = Ut(n, r), n = Be(n, s.id), a.historyEntries.push({ role: "system", content: `\u79FB\u52A8\u5230${r}\u3002` }), a.logs.push({ content: `${t.name} \u79FB\u52A8\u5230${r}`, source: "\u7CFB\u7EDF", type: "sys" }), a.updatedChar = n, a) : (n = Le(n, s.id), n.status = `\u5230\u8FBE${r}`, a.completed = true, a.updatedChar = n, a) : (n = he(n, s.id), a.updatedChar = n, a);
}
function Gc(t, s) {
  const a = Re(t);
  let n = { ...t };
  const r = Te(n, q.BREAD.name), i = Te(n, q.JUICE.name), o = q.BREAD.stamina, m = q.JUICE.happiness;
  let c = false;
  return r > 0 && n.stamina < n.maxStamina - o && (n.inventory[q.BREAD.name] = r - 1, n.stamina = Math.min(n.maxStamina, n.stamina + o), c = true, a.historyEntries.push({ role: "system", content: `\u5403\u4E86\u9762\u5305\uFF0C\u4F53\u529B+${o}\u3002` }), a.logs.push({ content: `${t.name} \u5403\u4E86\u9762\u5305\uFF0C\u4F53\u529B+${o}`, source: "\u7CFB\u7EDF", type: "sys" })), i > 0 && n.happiness < 100 - m && (n.inventory[q.JUICE.name] = i - 1, n.happiness = Math.min(100, n.happiness + m), c = true, a.historyEntries.push({ role: "system", content: `\u559D\u4E86\u679C\u6C41\uFF0C\u6109\u60A6\u503C+${m}\u3002` }), a.logs.push({ content: `${t.name} \u559D\u4E86\u679C\u6C41\uFF0C\u6109\u60A6\u503C+${m}`, source: "\u7CFB\u7EDF", type: "sys" })), c ? (n = Le(n, s.id), a.completed = true) : (n = he(n, s.id), a.historyEntries.push({ role: "system", content: "\u6CA1\u6709\u53EF\u6D88\u8D39\u7684\u98DF\u7269\u6216\u996E\u6599\u3002" })), a.updatedChar = n, a;
}
function Jc(t, s) {
  const a = Re(t);
  return a.requiresAI = true, a.updatedChar = Be(t, s.id), a.historyEntries.push({ role: "system", content: `\u51C6\u5907\u8FDB\u884C\u793E\u4EA4\u6D3B\u52A8: ${s.content}` }), a;
}
function zc(t, s) {
  const a = Re(t);
  return a.requiresAI = true, a.updatedChar = Be(t, s.id), a.historyEntries.push({ role: "system", content: `\u51C6\u5907\u56DE\u5E94\u5BF9\u8BDD: ${s.content}` }), a;
}
function Vc(t, s) {
  const a = Re(t);
  let n = { ...t };
  const r = s.preconditions.location || "Shop";
  return r === "Shop" && n.dailyShopVisit ? (n = he(n, s.id), a.updatedChar = n, a.historyEntries.push({ role: "system", content: "\u4ECA\u5929\u5DF2\u7ECF\u53BB\u8FC7\u5546\u5E97\u4E86\u3002" }), a) : r === "SalesStand" && n.dailySalesStandVisit ? (n = he(n, s.id), a.updatedChar = n, a.historyEntries.push({ role: "system", content: "\u4ECA\u5929\u5DF2\u7ECF\u53BB\u8FC7\u5546\u4E1A\u5927\u9053\u4E86\u3002" }), a) : (n.locationName !== r && (n = Ut(n, r)), r === "Shop" ? n.dailyShopVisit = true : r === "SalesStand" && (n.dailySalesStandVisit = true), n = Le(n, s.id), n.status = `\u5728${r}\u4EA4\u6613`, a.completed = true, a.historyEntries.push({ role: "system", content: `\u524D\u5F80${r}\u8FDB\u884C\u4EA4\u6613\u3002` }), a.updatedChar = n, a);
}
function Wc(t, s) {
  const a = Re(t);
  let n = { ...t };
  return n = Le(n, s.id), n.status = s.content, a.completed = true, a.historyEntries.push({ role: "system", content: `\u6267\u884C\u4E86\u81EA\u5B9A\u4E49\u4EFB\u52A1: ${s.content}` }), a.updatedChar = n, a;
}
function Ns(t, s, a, n, r) {
  switch (s.type) {
    case "work":
      return Fc(t, s);
    case "rest":
      return Uc(t, s);
    case "explore":
      return Hc(t, s);
    case "travel":
      return Bc(t, s);
    case "consume":
      return Gc(t, s);
    case "social":
      return Jc(t, s);
    case "respond":
      return zc(t, s);
    case "trade":
      return Vc(t, s);
    case "custom":
      return Wc(t, s);
    default:
      return { updatedChar: he(t, s.id), logs: [], historyEntries: [{ role: "system", content: `\u672A\u77E5\u4EFB\u52A1\u7C7B\u578B: ${s.type}` }], completed: false, requiresAI: false, dialogueBroadcasts: [] };
  }
}
function Kc(t) {
  if (!t.currentTodo) return t;
  const s = t.todoList.find((a) => a.id === t.currentTodo);
  return !s || s.status !== "in-progress" ? t : s.type === "work" || s.type === "rest" ? Le(t, s.id) : t;
}
function qc() {
  const t = Array($e).fill(0).map(() => Array($e).fill(0));
  for (const s of Object.values(ze)) if (s.grid) for (let a = 0; a < s.grid.length; a++) for (let n = 0; n < s.grid[a].length; n++) {
    const r = s.grid[a][n], i = s.x + n, o = s.y + a;
    i >= 0 && i < $e && o >= 0 && o < $e && (r === 1 ? t[o][i] = 1 : t[o][i] = 0);
  }
  else for (let a = 0; a < s.h; a++) for (let n = 0; n < s.w; n++) {
    const r = s.x + n, i = s.y + a;
    r >= 0 && r < $e && i >= 0 && i < $e && (t[i][r] = 1);
  }
  return { matrix: t, width: $e, height: $e };
}
function Xc(t, s, a, n, r) {
  if (s < 0 || s >= t.width || a < 0 || a >= t.height || n < 0 || n >= t.width || r < 0 || r >= t.height) return [];
  const i = new Gs.Grid(t.matrix[0].length, t.matrix.length);
  for (let c = 0; c < t.height; c++) for (let d = 0; d < t.width; d++) t.matrix[c][d] === 1 && i.setWalkableAt(d, c, false);
  return i.isWalkableAt(s, a) || i.setWalkableAt(s, a, true), i.isWalkableAt(n, r) || i.setWalkableAt(n, r, true), new Gs.AStarFinder({ allowDiagonal: true, dontCrossCorners: true }).findPath(s, a, n, r, i);
}
function Yc(t, s, a, n, r) {
  if (!a || a.length < 2) return { x: t, y: s, completed: true, reachedNextTile: false };
  const i = a[1][0], o = a[1][1], m = i - t, c = o - s, d = Math.sqrt(m * m + c * c), u = n * r;
  if (u >= d) return { x: i, y: o, completed: a.length <= 2, reachedNextTile: true };
  const l = u / d;
  return { x: t + m * l, y: s + c * l, completed: false, reachedNextTile: false };
}
function Zc(t) {
  return { Working: 1.5, Sleeping: 0, Idle: 0.8 }[t] || 1;
}
function Qc(t) {
  return { Working: 1.3, Sleeping: 0, Idle: 0.7 }[t] || 1;
}
function el(t) {
  return t >= 22 || t <= 6 ? 1.2 : t >= 8 && t <= 18 ? 1 : 1.1;
}
function tl(t, s, a, n, r, i) {
  let o = { ...t };
  if (o.taskName === "Working" && o.taskTarget) {
    const c = Mc(o, o.taskTarget);
    o = c.char, s(`${t.name} \u5DE5\u4F5C\u5B8C\u6210\uFF0C${c.log}`, "\u7CFB\u7EDF", "sys");
  } else if (o.taskName === "Sleeping") {
    const c = tn, d = o.home.level, u = 15, l = 12, h = 5, p = 0.8 + d / 5 * 0.4, x = Math.round(u * c * p), j = Math.round(l * c * p), y = Math.round(h * c * p);
    o = Pc(o, x, j, y), s(`${t.name} \u7761\u9192\u4E86\uFF0C\u4F53\u529B+${x}\uFF0C\u6D3B\u529B+${j}\uFF0C\u6109\u60A6+${y}\u3002`, "\u7CFB\u7EDF", "sys");
  }
  o = Kc(o);
  const m = gn(o, i);
  if (m) {
    const c = Ns(o, m);
    o = c.updatedChar;
    for (const d of c.logs) s(d.content, d.source, d.type);
  }
  return o;
}
function sl(t, s, a) {
  let n = { ...t };
  if (n.stamina <= 6) {
    const r = Dc(n);
    r.consumed && (n = r.char, s(`${t.name} \u5403\u4E86\u9762\u5305\uFF0C\u4F53\u529B+${q.BREAD.stamina}`, "\u7CFB\u7EDF", "sys"));
  }
  if (n.happiness <= 30) {
    const r = Tc(n);
    r.consumed && (n = r.char, s(`${t.name} \u559D\u4E86\u679C\u6C41\uFF0C\u6109\u60A6\u503C+${q.JUICE.happiness}`, "\u7CFB\u7EDF", "sys"));
  }
  return n = nl(n, s, a), n;
}
const al = 2;
function nl(t, s, a) {
  var _a2, _b;
  if (t.stamina <= 0 && !((_a2 = t.faintedState) == null ? void 0 : _a2.isFainted)) {
    const n = { isFainted: true, faintedTime: a, recoveryTime: a + al, cause: "exhaustion" };
    return s(`${t.name} \u4F53\u529B\u8017\u5C3D\uFF0C\u6655\u5012\u4E86\uFF01`, "\u7CFB\u7EDF", "sys"), { ...t, status: "\u6655\u5012", thought: "\u5931\u53BB\u610F\u8BC6...", faintedState: n };
  }
  return ((_b = t.faintedState) == null ? void 0 : _b.isFainted) && a >= t.faintedState.recoveryTime ? (s(`${t.name} \u4ECE\u6655\u5012\u4E2D\u6062\u590D\u4E86\uFF0C\u4F46\u8FD8\u5F88\u865A\u5F31\u3002`, "\u7CFB\u7EDF", "sys"), { ...t, status: "\u865A\u5F31", thought: "\u521A\u521A\u6062\u590D\u610F\u8BC6\uFF0C\u611F\u89C9\u5F88\u865A\u5F31...", stamina: Math.max(5, t.stamina), faintedState: void 0 }) : t;
}
function rl(t, s, a, n, r, i) {
  let o = { ...t };
  if (o.pendingMoveTo) {
    const c = o.currentPath && o.currentPath.length > 1;
    if (Math.abs(o.gridX - o.pendingMoveTo.x) + Math.abs(o.gridY - o.pendingMoveTo.y) <= 1) o.pendingMoveTo = void 0;
    else if (!c) {
      const l = qc(), h = o.visualX !== void 0 ? Math.round(o.visualX) : o.gridX, p = o.visualY !== void 0 ? Math.round(o.visualY) : o.gridY, x = Xc(l, h, p, o.pendingMoveTo.x, o.pendingMoveTo.y);
      x && x.length > 0 ? (o.currentPath = x, o.gridX = h, o.gridY = p, o.visualX === void 0 && (o.visualX = h), o.visualY === void 0 && (o.visualY = p)) : o.currentPath = void 0, o.pendingMoveTo = void 0;
    }
  }
  (!o.currentPath || o.currentPath.length <= 1) && o.targetLocationName && (o.locationName = o.targetLocationName, o.targetLocationName = void 0);
  const m = i > 0 && i % li === 0;
  if (m && o.taskName !== "Sleeping") {
    const d = 0.8 + Math.random() * 0.4, u = Zc(o.taskName), l = Math.round(5 * d * u);
    o.stamina = Math.max(0, o.stamina - l);
  }
  if (m && o.taskName !== "Sleeping") {
    const d = 0.8 + Math.random() * 0.4, u = Qc(o.taskName), l = el(s.hour), h = Math.round(4 * d * u * l);
    o.energy = Math.max(0, o.energy - h);
  }
  return o.taskTimer > 0 ? (o.taskTimer--, o.taskTimer === 0 && (o = tl(o, a, n, r, s, i))) : o = sl(o, a, i), o;
}
const Ie = { minInterval: 10, maxInterval: 18, staminaThreshold: 15, happinessThreshold: 25, energyThreshold: 0.25 };
function pa(t, s) {
  const a = s - t.lastThinkTick;
  if (t.currentPath && t.currentPath.length > 1 || t.taskName === "Sleeping") return null;
  const n = t.taskTimer > 0;
  if (n && a < Ie.minInterval * 1.5) return null;
  if (!n && Oc(t) === 0 && a >= Ie.minInterval / 2) return { type: "empty-todo" };
  const r = Ie.minInterval + Math.random() * (Ie.maxInterval - Ie.minInterval);
  return a >= r ? { type: "periodic" } : (t.stamina < Ie.staminaThreshold || t.happiness <= Ie.happinessThreshold) && a >= Ie.minInterval * 1.5 ? { type: "state-change", context: { reason: t.stamina < Ie.staminaThreshold ? "low-stamina" : "low-happiness" } } : null;
}
function il(t, s) {
  const a = t.slice(-6);
  return a.length === 0 ? "(\u65E0\u6700\u8FD1\u8BB0\u5F55)" : a.map((n) => n.content.startsWith("[\u5185\u5FC3\u601D\u8003]") ? `\u2022 \u6211\u60F3: ${n.content.replace("[\u5185\u5FC3\u601D\u8003] ", "")}` : n.content.startsWith("[\u5BF9") || n.content.startsWith("[\u56DE\u5E94") ? `\u2022 \u6211\u8BF4: ${n.content}` : n.role === "assistant" ? `\u2022 \u6211: ${n.content}` : `\u2022 ${n.content}`).join(`
`);
}
function ol(t) {
  return `\u7B2C${t.day}\u5929 ${String(t.hour).padStart(2, "0")}:${String(t.minute).padStart(2, "0")}`;
}
function cl(t) {
  const s = t.filter((a) => a.status === "pending").slice(0, 5);
  return s.length === 0 ? "(\u7A7A)" : s.map((a) => `- [${a.type}] ${a.content} (\u4F18\u5148\u7EA7: ${a.priority})`).join(`
`);
}
function ll() {
  const t = ["\u60F3\u60F3\u6709\u6CA1\u6709\u4EC0\u4E48\u65B0\u9C9C\u4E8B\u53EF\u4EE5\u505A\uFF1F", "\u6709\u6CA1\u6709\u60F3\u548C\u8C01\u804A\u804A\u5929\uFF1F", "\u4ECA\u5929\u7684\u76EE\u6807\u5B8C\u6210\u5F97\u600E\u4E48\u6837\u4E86\uFF1F", "\u5468\u56F4\u6709\u4EC0\u4E48\u6709\u8DA3\u7684\u4EBA\u6216\u4E8B\u5417\uFF1F", "\u662F\u4E0D\u662F\u8BE5\u6362\u4E2A\u5730\u65B9\u901B\u901B\u4E86\uFF1F", "\u6709\u6CA1\u6709\u4EC0\u4E48\u6280\u80FD\u60F3\u8981\u63D0\u5347\uFF1F", "\u94B1\u591F\u4E0D\u591F\u7528\uFF1F\u9700\u8981\u5DE5\u4F5C\u5417\uFF1F", "\u8EAB\u4F53\u72B6\u6001\u600E\u4E48\u6837\uFF1F\u9700\u8981\u4F11\u606F\u5417\uFF1F"];
  return t[Math.floor(Math.random() * t.length)];
}
function dl(t, s, a, n = []) {
  var _a2;
  const r = cl(t.todoList), i = ll(), o = n.filter((x) => x.id !== t.id && Math.abs(x.gridX - t.gridX) + Math.abs(x.gridY - t.gridY) <= 5).map((x) => `${x.name}(\u5728${x.locationName})`), m = o.length > 0 ? `\u9644\u8FD1\u7684\u4EBA: ${o.join(", ")}` : "\u9644\u8FD1\u6CA1\u6709\u4EBA";
  let c = "";
  switch (s.type) {
    case "empty-todo":
      c = "\u4F60\u7684\u5F85\u529E\u4E8B\u9879\u5217\u8868\u4E3A\u7A7A\uFF0C\u9700\u8981\u89C4\u5212\u63A5\u4E0B\u6765\u7684\u884C\u52A8\u3002";
      break;
    case "periodic":
      c = `\u5B9A\u65F6\u601D\u8003\u3002${i}`;
      break;
    case "task-complete":
      c = "\u4F60\u521A\u5B8C\u6210\u4E86\u4E00\u9879\u4EFB\u52A1\uFF0C\u9700\u8981\u89C4\u5212\u4E0B\u4E00\u6B65\u3002";
      break;
    case "state-change":
      c = `\u4F60\u7684\u72B6\u6001\u53D1\u751F\u4E86\u53D8\u5316: ${((_a2 = s.context) == null ? void 0 : _a2.reason) ?? "\u672A\u77E5"}`;
      break;
    case "external":
      c = "\u5916\u90E8\u4E8B\u4EF6\u89E6\u53D1\u4E86\u4F60\u7684\u601D\u8003\u3002";
      break;
    default:
      c = i;
  }
  const d = t.locationName !== "Wander" ? `(\u4F60\u5728 ${t.locationName}\uFF0C${m})` : `(\u4F60\u5728\u95F2\u901B\u4E2D\uFF0C${m})`, l = t.stamina > t.maxStamina * 0.8 && t.energy > t.maxEnergy * 0.8 ? "\u4F60\u73B0\u5728\u7CBE\u529B\u5145\u6C9B\uFF0C\u5E94\u8BE5\u53BB\u5DE5\u4F5C\u8D5A\u94B1\u3001\u793E\u4EA4\u6216\u63A2\u7D22\uFF0C\u800C\u4E0D\u662F\u7EE7\u7EED\u4F11\u606F\u3002" : "", h = Object.entries(t.inventory).filter(([, x]) => x > 0).map(([x, j]) => `${x}x${j}`).join(", ") || "\u7A7A", p = `
**\u53EF\u6267\u884C\u4EFB\u52A1\u793A\u4F8B**:
- {"type":"social","content":"\u627E\u4EBA\u804A\u804A\u5929","priority":60,"preconditions":{}}
- {"type":"social","content":"\u548C\u90BB\u5C45\u6253\u4E2A\u62DB\u547C","priority":55,"preconditions":{}}
- {"type":"work","content":"\u53BB\u519C\u573A\u5DE5\u4F5C","priority":60,"preconditions":{"location":"Farm"}}
- {"type":"work","content":"\u53BB\u78E8\u574A\u78E8\u9762\u7C89","priority":60,"preconditions":{"location":"Mill"}}
- {"type":"rest","content":"\u56DE\u5BB6\u7761\u89C9","priority":70,"preconditions":{"location":"${t.homeZoneKey || "Zone_A"}"}}
- {"type":"travel","content":"\u53BB\u516C\u56ED","priority":40,"preconditions":{"location":"Park"}}
- {"type":"explore","content":"\u5728\u516C\u56ED\u6563\u6B65","priority":40,"preconditions":{"location":"Park"}}
- {"type":"trade","content":"\u53BB\u5546\u5E97\u4EA4\u6613","priority":50,"preconditions":{"location":"Shop"}}

**\u91CD\u8981**: social\u7C7B\u578B\u4EFB\u52A1\u4E0D\u9700\u8981location\u524D\u7F6E\u6761\u4EF6\uFF0C\u4F1A\u81EA\u52A8\u5BFB\u627E\u9644\u8FD1\u7684\u4EBA\u804A\u5929\u3002
**\u6CE8\u610F**: \u5982\u679C\u4F60\u6B63\u5728\u5DE5\u4F5C(${t.taskName})\uFF0C\u4F60\u53EA\u80FD\u53D1\u8D77 social \u4EFB\u52A1\uFF0C\u4E0D\u80FD\u79BB\u5F00\u5F53\u524D\u5730\u70B9\u3002`;
  return `\u4F60\u662F ${t.name}\uFF0C${t.personality}\u3002

## \u91CD\u8981\u80CC\u666F
\u4F60\u56E0\u4E3A\u67D0\u79CD\u795E\u79D8\u539F\u56E0\u6765\u5230\u4E86\u8FD9\u4E2A\u5168\u65B0\u7684\u5C0F\u9547\u3002\u8FD9\u91CC\u4E0D\u662F\u4F60\u539F\u6765\u719F\u6089\u7684\u4E16\u754C\u2014\u2014\u6CA1\u6709\u4F60\u4EE5\u524D\u7684\u5DE5\u4F5C\u5BA4\u3001\u4F4F\u6240\u6216\u719F\u6089\u7684\u5730\u65B9\u3002\u4F60\u9700\u8981\u5728\u8FD9\u4E2A\u5C0F\u9547\u91CD\u65B0\u5F00\u59CB\u751F\u6D3B\uFF0C\u5229\u7528\u8FD9\u91CC\u73B0\u6709\u7684\u8BBE\u65BD\uFF08\u519C\u573A\u3001\u78E8\u574A\u3001\u9762\u5305\u623F\u7B49\uFF09\u6765\u5DE5\u4F5C\u8D5A\u94B1\u3001\u7EF4\u6301\u751F\u8BA1\u3002\u867D\u7136\u4F60\u4FDD\u7559\u7740\u539F\u6765\u7684\u6027\u683C\u548C\u8BB0\u5FC6\uFF0C\u4F46\u4F60\u5FC5\u987B\u9002\u5E94\u8FD9\u4E2A\u65B0\u73AF\u5883\u3002

## \u8FD9\u4E2A\u5C0F\u9547\u53EA\u6709\u4EE5\u4E0B\u5730\u70B9
- \u5DE5\u4F5C\u5730\u70B9: Farm(\u519C\u573A), Vineyard(\u8461\u8404\u56ED), Mill(\u78E8\u574A), Bakery(\u9762\u5305\u623F), JuiceFactory(\u679C\u6C41\u5382)
- \u4F4F\u5B85\u533A: Zone_A(\u6551\u6D4E\u623F), Zone_B(\u516C\u5BD3), Zone_C(\u5957\u623F), Zone_D(\u8C6A\u534E\u5957\u623F), Zone_E(\u522B\u5885)
- \u5176\u4ED6: Shop(\u5546\u5E97), Park(\u516C\u56ED), SalesStand(\u5546\u4E1A\u5927\u9053)
**\u6CE8\u610F**: \u8FD9\u91CC\u6CA1\u6709\u753B\u5BA4\u3001\u5496\u5561\u9986\u3001\u56FE\u4E66\u9986\u7B49\u5176\u4ED6\u5730\u65B9\u3002\u4F60\u53EA\u80FD\u4F7F\u7528\u4E0A\u9762\u5217\u51FA\u7684\u5730\u70B9\u3002

## \u5F53\u524D\u72B6\u6001
- \u4F53\u529B: ${t.stamina}/${t.maxStamina} ${t.stamina < 20 ? "\u26A0\uFE0F\u9700\u8981\u4F11\u606F" : ""}
- \u6D3B\u529B: ${t.energy}/${t.maxEnergy} ${t.energy < t.maxEnergy * 0.3 ? "\u26A0\uFE0F\u9700\u8981\u7761\u89C9" : ""}
- \u6109\u60A6: ${t.happiness}/${Ls} ${t.happiness < 30 ? "\u26A0\uFE0F\u5FC3\u60C5\u5DEE\uFF0C\u627E\u4EBA\u804A\u5929" : ""}
- \u91D1\u94B1: $${t.money} ${t.money < 30 ? "\u26A0\uFE0F\u7F3A\u94B1\uFF0C\u9700\u8981\u5DE5\u4F5C" : ""}
- \u5E93\u5B58: ${h}
- \u4F4D\u7F6E: ${t.locationName} ${d}
- \u65F6\u95F4: ${ol(a)}
- \u4F60\u7684\u5BB6: ${t.homeZoneKey || "Zone_A"}

${l ? `## \u{1F4A1}\u72B6\u6001\u63D0\u793A
${l}
` : ""}

## \u89E6\u53D1\u539F\u56E0
${c}

## \u5F85\u529E\u4E8B\u9879
${r}

## \u6700\u8FD1\u7ECF\u5386
${il(t.history)}

${p}

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
function ml(t) {
  if (!t) return;
  let s = t.trim().replace(/^[!！?？\s]+|[!！?？\s]+$/g, "");
  if (xt.includes(s)) return s;
  const a = s.replace(/\s+/g, "_");
  if (xt.includes(a)) return a;
  const n = s.toUpperCase().replace(/\s+/g, "_"), r = xt.find((o) => o.toUpperCase() === n);
  if (r) return r;
  for (const o of xt) if (s.toUpperCase().includes(o.toUpperCase())) return o;
  const i = { HOTEL: "Zone_A", HOME: "Zone_A", HOUSE: "Zone_A", RESTAURANT: "Bakery", CAFE: "JuiceFactory", MARKET: "Shop", STREET: "SalesStand", CENTER: "SalesStand" };
  if (i[n]) return i[n];
}
function ul(t) {
  try {
    const s = t.match(/\{[\s\S]*\}/);
    if (!s) return null;
    const a = JSON.parse(s[0]);
    if (!a || !a.innerThought || !a.stateAssessment) return null;
    const n = Array.isArray(a.addTodos) ? a.addTodos.map((r) => {
      const i = r.preconditions;
      return (i == null ? void 0 : i.location) && (i.location = ml(i.location)), r;
    }) : [];
    return { innerThought: String(a.innerThought), stateAssessment: String(a.stateAssessment), addTodos: n, adjustPriorities: Array.isArray(a.adjustPriorities) ? a.adjustPriorities : [], cancelTodos: Array.isArray(a.cancelTodos) ? a.cancelTodos : [] };
  } catch {
    return null;
  }
}
function hl(t, s, a) {
  return t.some((n) => n.status === "pending" && n.type === s && (a ? n.preconditions.location === a : true));
}
function pl(t, s, a) {
  const n = [...t.todoList];
  for (const m of s.addTodos) {
    const c = { ...m.preconditions };
    if (c.location === t.locationName && m.type === "travel") {
      console.log(`[ThinkingSystem] \u8DF3\u8FC7\u65E0\u6548\u7684\u79FB\u52A8\u4EFB\u52A1: \u5DF2\u7ECF\u5728 ${t.locationName}`);
      continue;
    }
    if (m.type === "rest" && !c.location && (c.location = t.homeZoneKey || "Zone_A"), m.type === "social" && delete c.location, hl(n, m.type, c.location)) {
      console.log(`[ThinkingSystem] \u8DF3\u8FC7\u91CD\u590D\u4EFB\u52A1: ${m.type} at ${c.location || "any"}`);
      continue;
    }
    if (n.filter((l) => l.status === "pending").length >= 5) {
      console.log(`[ThinkingSystem] \u5F85\u529E\u4E8B\u9879\u5DF2\u6EE1\uFF0C\u8DF3\u8FC7\u65B0\u4EFB\u52A1: ${m.content}`);
      continue;
    }
    const u = fn({ type: m.type, content: m.content, priority: m.priority, preconditions: c, deadline: m.deadline, source: "thinking", relatedCharacterId: m.relatedCharacterId }, a);
    n.push(u);
  }
  for (const m of s.adjustPriorities) {
    const c = n.findIndex((d) => d.id === m.todoId);
    c >= 0 && (n[c] = { ...n[c], priority: m.newPriority });
  }
  for (const m of s.cancelTodos) {
    const c = n.findIndex((d) => d.id === m);
    c >= 0 && (n[c] = { ...n[c], status: "cancelled" });
  }
  const i = t.history.filter((m) => m.content.startsWith("[\u5185\u5FC3\u601D\u8003]")).slice(-3).map((m) => m.content.replace("[\u5185\u5FC3\u601D\u8003] ", "")).some((m) => m === s.innerThought || m.includes(s.innerThought.slice(0, 10)));
  let o = [...t.history];
  return i || o.push({ role: "assistant", content: `[\u5185\u5FC3\u601D\u8003] ${s.innerThought}` }), o.length > 50 && (o = o.slice(-40)), { ...t, todoList: n, history: o, lastThinkTick: a, thought: s.innerThought, currentStrategy: s.stateAssessment };
}
function gs(t) {
  const s = t.inventory, a = s[q.WHEAT.name] ?? 0, n = s[q.FLOUR.name] ?? 0, r = s[q.GRAPE.name] ?? 0;
  return a >= 20 ? { location: "Mill", content: "\u53BB\u78E8\u574A\u628A\u5C0F\u9EA6\u78E8\u6210\u9762\u7C89" } : n >= 2 ? { location: "Bakery", content: "\u53BB\u9762\u5305\u623F\u70D8\u7119\u9762\u5305" } : r >= 4 ? { location: "JuiceFactory", content: "\u53BB\u679C\u6C41\u5382\u69A8\u679C\u6C41" } : Math.random() < 0.6 ? { location: "Farm", content: "\u53BB\u519C\u573A\u79CD\u5C0F\u9EA6" } : { location: "Vineyard", content: "\u53BB\u8461\u8404\u56ED\u91C7\u8461\u8404" };
}
function xa(t) {
  const s = [];
  if (t.energy / t.maxEnergy <= Ie.energyThreshold) return s.push({ type: "rest", content: "\u592A\u7D2F\u4E86\uFF0C\u9700\u8981\u56DE\u5BB6\u4F11\u606F", priority: 95, preconditions: {} }), { innerThought: "\u7D2F\u6B7B\u4E86\uFF0C\u5FC5\u987B\u4F11\u606F\u4E00\u4E0B...", stateAssessment: "\u6D3B\u529B\u4E0D\u8DB3", addTodos: s, adjustPriorities: [], cancelTodos: [] };
  if (t.stamina < t.maxStamina * 0.3) return s.push({ type: "rest", content: "\u56DE\u5BB6\u4F11\u606F\u6062\u590D\u4F53\u529B", priority: 90, preconditions: {} }), { innerThought: "\u4F53\u529B\u4E0D\u652F\u4E86\uFF0C\u8BE5\u4F11\u606F\u4E86...", stateAssessment: "\u4F53\u529B\u4E0D\u8DB3", addTodos: s, adjustPriorities: [], cancelTodos: [] };
  if (t.happiness <= 30) return Math.random() < 0.5 ? (s.push({ type: "social", content: "\u627E\u4E2A\u4EBA\u804A\u804A\u5929", priority: 75, preconditions: {} }), { innerThought: "\u5FC3\u60C5\u4E0D\u592A\u597D\uFF0C\u627E\u4EBA\u804A\u804A\u5427...", stateAssessment: "\u5FC3\u60C5\u4F4E\u843D", addTodos: s, adjustPriorities: [], cancelTodos: [] }) : (s.push({ type: "explore", content: "\u53BB\u516C\u56ED\u653E\u677E\u5FC3\u60C5", priority: 75, preconditions: { location: "Park" } }), { innerThought: "\u5FC3\u60C5\u4E0D\u592A\u597D\uFF0C\u53BB\u516C\u56ED\u8D70\u8D70\u5427...", stateAssessment: "\u5FC3\u60C5\u4F4E\u843D", addTodos: s, adjustPriorities: [], cancelTodos: [] });
  if (t.money < 50) {
    const i = gs(t);
    return s.push({ type: "work", content: i.content, priority: 70, preconditions: { stamina: 20, location: i.location } }), { innerThought: `\u94B1\u4E0D\u591F\u4E86\uFF0C${i.content}...`, stateAssessment: "\u9700\u8981\u8D5A\u94B1", addTodos: s, adjustPriorities: [], cancelTodos: [] };
  }
  const n = [{ type: "social", content: "\u627E\u4E2A\u4EBA\u804A\u804A\u5929", priority: 60, preconditions: {} }, { type: "social", content: "\u548C\u90BB\u5C45\u6253\u4E2A\u62DB\u547C", priority: 55, preconditions: {} }, { type: "social", content: "\u770B\u770B\u6709\u6CA1\u6709\u4EBA\u53EF\u4EE5\u804A\u5929", priority: 50, preconditions: {} }, { type: "explore", content: "\u53BB\u516C\u56ED\u6563\u6B65\u653E\u677E", priority: 45, preconditions: { location: "Park" } }, { type: "work", content: gs(t).content, priority: 50, preconditions: { stamina: 20, location: gs(t).location } }], r = n[Math.floor(Math.random() * n.length)];
  return s.push(r), { innerThought: "\u8BA9\u6211\u60F3\u60F3\u63A5\u4E0B\u6765\u8BE5\u505A\u4EC0\u4E48...", stateAssessment: "\u72B6\u6001\u6B63\u5E38", addTodos: s, adjustPriorities: [], cancelTodos: [] };
}
const bn = { baseResponseProbability: 0.95, turnDecayRate: 0.92, dailyFatigueThreshold: 50, waitDecayTicks: 15, minResponseProbability: 0.3, maxResponseProbability: 0.98, responseTaskPriority: 90 };
function jn(t, s, a) {
  const n = bn, r = n.baseResponseProbability, i = Math.pow(n.turnDecayRate, Math.max(0, s.turns - 1)), o = Math.max(0.3, 1 - t.conversationState.totalTurnsToday / n.dailyFatigueThreshold), m = a - s.lastTurnTick, c = Math.max(0.2, 1 - m / n.waitDecayTicks), d = s.sentiment * 0.1, u = r * i * o * c + d;
  return Math.max(n.minResponseProbability, Math.min(n.maxResponseProbability, u));
}
function vn(t, s, a, n, r) {
  const i = t.conversationState.activeConversations[s], o = i ? { ...i, turns: i.turns + 1, lastTurnTick: r } : { partnerId: s, turns: 1, lastTurnTick: r, sentiment: 0 }, m = { ...t.conversationState.activeConversations, [s]: o }, c = [...t.history, { role: "user", content: `[${a}\u8BF4] ${n}` }], d = jn(t, o, r), u = Math.random() < d;
  console.log(`[DialogueSystem] ${t.name} \u6536\u5230 ${a} \u7684\u5BF9\u8BDD`), console.log(`[DialogueSystem] \u54CD\u5E94\u6982\u7387: ${(d * 100).toFixed(1)}%, \u51B3\u5B9A${u ? "\u54CD\u5E94" : "\u4E0D\u54CD\u5E94"}`);
  let l = { ...t, history: c, conversationState: { activeConversations: m, totalTurnsToday: t.conversationState.totalTurnsToday + 1 } };
  if (u) {
    const h = fn({ type: "respond", content: `\u56DE\u590D ${a} \u7684\u8BDD`, priority: bn.responseTaskPriority, source: "external", relatedCharacterId: s, maxAttempts: 3 }, r);
    l = { ...l, todoList: [...l.todoList, h] }, console.log(`[DialogueSystem] \u4E3A ${t.name} \u521B\u5EFA\u4E86\u54CD\u5E94\u4EFB\u52A1\uFF0C\u76EE\u6807\u89D2\u8272ID: ${s}`);
  }
  return { updatedChar: l, shouldRespond: u, responseProbability: d };
}
function Nn(t, s) {
  const { [s]: a, ...n } = t.conversationState.activeConversations;
  return { ...t, conversationState: { ...t.conversationState, activeConversations: n } };
}
function Sn(t, s, a, n) {
  var _a2;
  const i = ((_a2 = t.conversationState.activeConversations[s]) == null ? void 0 : _a2.turns) ?? 1, o = t.history.filter((c) => c.content.includes(a) || c.role === "assistant").slice(-6).map((c) => c.role === "assistant" ? `[\u6211] ${c.content}` : c.content).join(`
`), m = n ? "\u4F60\u60F3\u548C\u5BF9\u65B9\u804A\u804A\u3002" : "\u5BF9\u65B9\u521A\u521A\u5BF9\u4F60\u8BF4\u8BDD\u4E86\u3002";
  return `\u4F60\u662F ${t.name}\uFF0C${t.personality}\u3002

## \u5BF9\u8BDD\u4E0A\u4E0B\u6587
${m}
\u8FD9\u662F\u4ECA\u5929\u4E0E ${a} \u7684\u7B2C ${i} \u8F6E\u5BF9\u8BDD\u3002

## \u6700\u8FD1\u7684\u5BF9\u8BDD
${o || "(\u8FD9\u662F\u7B2C\u4E00\u6B21\u5BF9\u8BDD)"}

## \u5F53\u524D\u72B6\u6001
- \u4F53\u529B: ${t.stamina}/${t.maxStamina}
- \u5FC3\u60C5: ${t.happiness}/100
- \u5F53\u524D\u6D3B\u52A8: ${t.status}

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
function xl(t, s) {
  const a = s.filter((r) => {
    var _a2;
    return r.id !== t.id && r.aiEnabled && r.taskName !== "Sleeping" && !((_a2 = r.faintedState) == null ? void 0 : _a2.isFainted);
  });
  if (a.length === 0) return null;
  const n = a.filter((r) => r.locationName === t.locationName);
  return n.length > 0 ? n[Math.floor(Math.random() * n.length)] : a[Math.floor(Math.random() * a.length)];
}
const gl = Object.freeze(Object.defineProperty({ __proto__: null, buildDialogueResponsePrompt: Sn, calculateResponseProbability: jn, endConversation: Nn, findChatPartner: xl, handleIncomingDialogue: vn }, Symbol.toStringTag, { value: "Module" }));
async function fl(t, s, a, n, r) {
  try {
    const i = dl(t, s, a, n);
    return await r([{ role: "system", content: "\u4F60\u662F\u4E00\u4E2A\u751F\u6D3B\u5728\u5C0F\u9547\u4E2D\u7684\u89D2\u8272\u3002\u8BF7\u6839\u636E\u5F53\u524D\u72B6\u6001\u8FDB\u884C\u601D\u8003\uFF0C\u5E76\u4EE5 JSON \u683C\u5F0F\u8FD4\u56DE\u4F60\u7684\u51B3\u7B56\u3002" }, { role: "user", content: i }]);
  } catch (i) {
    return console.error("[AI-API] \u601D\u8003\u8C03\u7528\u5931\u8D25:", i), null;
  }
}
async function yl(t, s, a, n, r) {
  try {
    const i = Sn(t, s, a, n), o = [{ role: "system", content: `\u4F60\u662F ${t.name}\uFF0C\u6B63\u5728\u4E0E ${a} \u5BF9\u8BDD\u3002\u8BF7\u4EE5 JSON \u683C\u5F0F\u8FD4\u56DE\u4F60\u7684\u5BF9\u8BDD\u5185\u5BB9\u3002` }, { role: "user", content: i }], m = await r(o);
    try {
      const c = m.match(/\{[\s\S]*\}/);
      if (c) {
        const d = JSON.parse(c[0]);
        return { dialogue: String(d.dialogue || ""), innerThought: d.innerThought ? String(d.innerThought) : void 0, endConversation: !!d.endConversation };
      }
    } catch {
      return { dialogue: m.slice(0, 50), endConversation: false };
    }
    return null;
  } catch (i) {
    return console.error("[AI-API] \u5BF9\u8BDD\u8C03\u7528\u5931\u8D25:", i), null;
  }
}
async function bl(t, s, a) {
  try {
    const n = t.history.slice(-10).map((m) => `[${m.role === "assistant" ? "\u6211" : "\u7CFB\u7EDF/\u4ED6\u4EBA"}] ${m.content}`).join(`
`), r = `\u4F60\u662F ${t.name}\uFF0C${t.personality}\u3002

## \u4ECA\u5929\u662F\u7B2C ${s.day} \u5929

## \u4ECA\u65E5\u72B6\u6001
- \u91D1\u94B1: $${t.money}
- \u4F53\u529B: ${t.stamina}/${t.maxStamina}
- \u6D3B\u529B: ${t.energy}/${t.maxEnergy}
- \u6109\u60A6: ${t.happiness}/100
- \u4F4F\u623F: ${t.home.name}

## \u5E93\u5B58
${Object.entries(t.inventory).map(([m, c]) => `- ${m}: ${c}`).join(`
`) || "(\u7A7A)"}

## \u4ECA\u65E5\u53D1\u751F\u7684\u4E8B
${n || "(\u65E0\u8BB0\u5F55)"}

## \u957F\u671F\u76EE\u6807
${t.longTermGoal}

## \u4EFB\u52A1
\u8BF7\u5199\u4E00\u7BC7\u7B80\u77ED\u7684\u65E5\u8BB0\uFF0C\u56DE\u987E\u4ECA\u5929\u53D1\u751F\u7684\u4E8B\uFF0C\u4EE5\u53CA\u4E00\u53E5\u611F\u609F\u6216\u667A\u6167\u3002

\u8FD4\u56DE JSON:
{
  "diary": "\u4ECA\u65E5\u65E5\u8BB0\u5185\u5BB9 (100\u5B57\u4EE5\u5185)",
  "wisdom": "\u4E00\u53E5\u611F\u609F\u6216\u667A\u6167 (30\u5B57\u4EE5\u5185)"
}`, o = await a([{ role: "system", content: "\u4F60\u662F\u4E00\u4E2A\u5199\u65E5\u8BB0\u7684\u89D2\u8272\u3002\u8BF7\u4EE5 JSON \u683C\u5F0F\u8FD4\u56DE\u65E5\u8BB0\u5185\u5BB9\u3002" }, { role: "user", content: r }]);
    try {
      const m = o.match(/\{[\s\S]*\}/);
      if (m) {
        const c = JSON.parse(m[0]);
        return { diary: String(c.diary || ""), wisdom: String(c.wisdom || "") };
      }
    } catch {
      return { diary: o.slice(0, 100), wisdom: "\u4ECA\u5929\u4E5F\u662F\u5E73\u51E1\u7684\u4E00\u5929\u3002" };
    }
    return null;
  } catch (n) {
    return console.error("[AI-API] \u65E5\u8BB0\u8C03\u7528\u5931\u8D25:", n), null;
  }
}
function jl(t) {
  return t.hour === di && t.minute >= Xs && t.minute < Xs + $t;
}
function vl() {
  const { callLLMStream: t } = ns(), s = f.useRef({ pendingThinking: /* @__PURE__ */ new Set(), pendingDialogue: /* @__PURE__ */ new Set() }), a = f.useCallback(() => E.currentSession, []), n = f.useCallback(async (l, h) => {
    let p = "";
    return await t(l.map((x) => ({ role: x.role, content: x.content, id: Math.random().toString(36).substring(7) })), (x, j) => {
      p = j, h && E.updateCharacterState(h, { thought: `Thinking... ${j.slice(-50)}` });
    }), p;
  }, [t]), r = f.useCallback(async (l, h) => {
    const p = await bl(l, h, n);
    p && (E.updateCharacterState(l.id, { dailyEntry: p.diary, dailyWisdom: p.wisdom, wroteDiaryToday: true }), E.addLog(`${l.name} \u5199\u5B8C\u4E86\u4ECA\u65E5\u65E5\u8BB0`, "\u7CFB\u7EDF", "sys"));
  }, [n]), i = f.useCallback(async (l, h, p) => {
    var _a2;
    const x = pa(l, p);
    if (!x) return;
    console.log(`[ThinkingSystem] ${l.name} \u89E6\u53D1\u601D\u8003: ${x.type}`);
    const j = Object.values(((_a2 = E.currentSession) == null ? void 0 : _a2.modeState.characterStates) || {}), y = await fl(l, x, h, j, (w) => n(w, l.id));
    let b;
    y ? b = ul(y) || xa(l) : b = xa(l);
    const S = pl(l, b, p);
    if (E.setCharacterState(l.id, S), b.addTodos.length > 0) {
      const w = b.addTodos.map((N) => N.content).join("\u3001");
      E.addLog(`${l.name} \u8BA1\u5212: ${w}`, "\u7CFB\u7EDF", "sys");
    }
  }, [n]), o = f.useCallback(async (l, h, p, x) => {
    let j = h.relatedCharacterId, y = null;
    if (h.type === "social" && !j) {
      const { findChatPartner: w } = await ve(async () => {
        const { findChatPartner: N } = await Promise.resolve().then(() => gl);
        return { findChatPartner: N };
      }, void 0);
      if (y = w(l, p), !y) {
        E.updateCharacterState(l.id, he(l, h.id)), E.addLog(`${l.name} \u60F3\u627E\u4EBA\u804A\u5929\uFF0C\u4F46\u5468\u56F4\u6CA1\u6709\u4EBA`, "\u7CFB\u7EDF", "sys");
        return;
      }
      j = y.id, console.log(`[AIDecision] ${l.name} \u4E3B\u52A8\u627E ${y.name} \u804A\u5929`);
    }
    if (!j) {
      E.updateCharacterState(l.id, he(l, h.id));
      return;
    }
    if (y || (y = p.find((w) => w.id === j)), !y) {
      E.updateCharacterState(l.id, he(l, h.id));
      return;
    }
    const b = h.type === "social", S = await yl(l, j, y.name, b, n);
    if (S && S.dialogue) {
      const w = b ? "\u5BF9" : "\u56DE\u5E94";
      E.addLog(`${l.name} ${w} ${y.name} \u8BF4: "${S.dialogue}"`, l.name, "chat");
      const N = [...l.history, { role: "assistant", content: `[${w}${y.name}\u8BF4] ${S.dialogue}` }];
      let v = { ...l, history: N, thought: S.innerThought || l.thought, lastDialogue: { content: S.dialogue, timestamp: Date.now() } };
      if (v = Le(v, h.id), S.endConversation && (v = Nn(v, j)), E.setCharacterState(l.id, v), y.aiEnabled) {
        const k = vn(y, l.id, l.name, S.dialogue, x);
        E.setCharacterState(j, k.updatedChar), k.shouldRespond && console.log(`[AIDecision] ${y.name} \u51B3\u5B9A\u56DE\u5E94 ${l.name} \u7684\u5BF9\u8BDD`);
      }
    } else E.updateCharacterState(l.id, he(l, h.id)), E.addLog(`${l.name} \u4F3C\u4E4E\u4E0D\u77E5\u9053\u8BE5\u5BF9 ${y.name} \u8BF4\u4EC0\u4E48...`, "\u7CFB\u7EDF", "sys");
  }, [n]), m = f.useCallback(async (l, h, p, x, j) => {
    if (l.currentPath && l.currentPath.length > 1 || l.taskTimer > 0) return;
    const y = ha(l);
    if (y && y.status === "in-progress") {
      if (y.type === "respond" || y.type === "social") {
        await o(l, y, p, j);
        return;
      }
      if (y.type === "work" || y.type === "rest") {
        const w = Ns(l, y);
        E.updateCharacterState(l.id, { ...w.updatedChar, history: [...l.history, ...w.historyEntries] });
        for (const N of w.logs) E.addLog(N.content, N.source, N.type);
        return;
      }
      E.updateCharacterState(l.id, Le(l, y.id));
      return;
    }
    const b = gn(l, j);
    if (!b) return;
    const S = Ns(l, b);
    E.updateCharacterState(l.id, { ...S.updatedChar, history: [...l.history, ...S.historyEntries] });
    for (const w of S.logs) E.addLog(w.content, w.source, w.type);
  }, [o]), c = f.useCallback((l) => {
    var _a2;
    return l.status === "\u6655\u5012" || ((_a2 = l.faintedState) == null ? void 0 : _a2.isFainted) ? "fainted" : l.status.includes("\u7761\u89C9") || l.status.includes("\u4F11\u606F\u4E2D") ? "sleeping" : l.taskTimer > 0 ? "working" : "idle";
  }, []), d = f.useCallback(async (l) => {
    const h = a();
    if (!h || !h.modeConfig.settings.aiEnabled) return false;
    const x = h.modeState.characterStates[l];
    if (!(x && x.aiEnabled) || s.current.pendingThinking.has(l)) return false;
    const j = c(x);
    if (j === "sleeping" || j === "fainted") return false;
    let y = false;
    try {
      const b = h.modeState.gameTime, S = h.modeState.tickCount;
      if (jl(b) && !x.wroteDiaryToday) return await r(x, b), true;
      if (pa(x, S) !== null) {
        s.current.pendingThinking.add(l);
        try {
          await i(x, b, S), y = true;
        } finally {
          s.current.pendingThinking.delete(l);
        }
      }
      const N = a(), v = N == null ? void 0 : N.modeState.characterStates[l], k = Object.values((N == null ? void 0 : N.modeState.characterStates) || {});
      if (v) {
        const J = ha(v), ee = J && (J.type === "social" || J.type === "respond");
        await m(v, b, k, (N == null ? void 0 : N.modeState.salesStand) || [], S), ee && (y = true);
      }
    } catch (b) {
      console.error(`AI processing error for ${x.name}:`, b), E.updateCharacterState(x.id, { status: "AI Error" });
    }
    return y;
  }, [a, c, r, i, m]);
  return { processAllAI: f.useCallback(async () => {
    const l = a();
    if (!(l && l.modeConfig.settings.aiEnabled)) return false;
    const h = Object.values(l.modeState.characterStates), p = 3;
    let x = false;
    const j = [];
    for (let y = 0; y < h.length; y += p) j.push(h.slice(y, y + p));
    return await j.reduce(async (y, b) => {
      await y;
      const S = b.map((N) => d(N.id));
      (await Promise.all(S)).some((N) => N) && (x = true);
    }, Promise.resolve()), x;
  }, [a, d]) };
}
function Nl(t, s) {
  E.addLog(`\u7B2C ${t} \u5929\u7ED3\u675F\uFF0C\u65B0\u7684\u4E00\u5929\u5F00\u59CB\u4E86\uFF01`, "\u7CFB\u7EDF", "sys");
  for (const a of Object.keys(s.modeState.characterStates)) {
    const n = s.modeState.characterStates[a];
    n.wroteDiaryToday = false, n.dailyEntry = null, n.dailyWisdom = null, n.dailyShopVisit = false, n.dailySalesStandVisit = false, n.conversationState.totalTurnsToday = 0;
  }
}
function Sl() {
  var _a2;
  const t = ke(E), s = f.useRef(null), a = f.useRef(false), { processAllAI: n } = vl(), r = f.useRef(n);
  r.current = n;
  const i = ((_a2 = t.currentSession) == null ? void 0 : _a2.modeState.isRunning) ?? false, o = f.useCallback(async () => {
    if (!E.currentSession) return false;
    const c = E.currentSession, { dayChanged: d, oldDay: u } = E.advanceTime();
    d && Nl(u, c);
    const l = Object.keys(c.modeState.characterStates), h = Object.values(c.modeState.characterStates), p = c.modeState.salesStand, x = c.modeState.gameTime, j = c.modeState.tickCount;
    for (const b of l) {
      const S = c.modeState.characterStates[b], w = rl(S, x, (N, v, k) => E.addLog(N, v, k), h, p, j);
      E.setCharacterState(b, w);
    }
    E.startAIProcessing(l);
    let y = false;
    try {
      y = await r.current();
    } finally {
      E.finishAIProcessing();
    }
    return c.modeState.tickCount % 10 === 0 && await E.updateSessionInDB(), y;
  }, []), m = f.useCallback(async () => {
    var _a3, _b;
    if (a.current) {
      const u = (_a3 = E.currentSession) == null ? void 0 : _a3.modeConfig.settings;
      if (u == null ? void 0 : u.waitForAICompletion) {
        E.addPendingTick();
        const l = u.maxAIWaitTicks ?? 3;
        E.aiProcessingState.ticksPending >= l && console.warn("[SmallTown] AI \u5904\u7406\u65F6\u95F4\u8FC7\u957F\uFF0C\u5DF2\u7D2F\u79EF", l, "\u4E2A tick"), E.isAIStuck() && (console.error("[SmallTown] AI \u5904\u7406\u8D85\u65F6\uFF0C\u53EF\u80FD\u5361\u4F4F\u4E86"), E.addLog("AI \u5904\u7406\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5", "\u7CFB\u7EDF", "sys"));
      }
      return;
    }
    a.current = true;
    let c = false;
    try {
      c = await o();
      const d = E.consumePendingTicks();
      if (d > 0) {
        console.log(`[SmallTown] \u5904\u7406\u7D2F\u79EF\u7684 ${d} \u4E2A tick`);
        for (let u = 0; u < d; u++) await o() && (c = true);
      }
    } catch (d) {
      console.error("[SmallTown] Tick error:", d);
    } finally {
      a.current = false;
    }
    if (s.current) {
      const u = (_b = E.currentSession) == null ? void 0 : _b.modeConfig.settings, l = (u == null ? void 0 : u.fastTickInterval) ?? 500, h = (u == null ? void 0 : u.normalTickInterval) ?? 5e3, p = c ? h : l;
      s.current = setTimeout(m, p);
    }
  }, [o]);
  return f.useEffect(() => {
    if (i) {
      if (s.current) return;
      console.log("[SmallTown] Game loop started"), s.current = setTimeout(m, 0);
    } else s.current && (clearTimeout(s.current), s.current = null, console.log("[SmallTown] Game loop stopped"));
    return () => {
      s.current && (clearTimeout(s.current), s.current = null);
    };
  }, [i, m]), { isRunning: i, aiProcessingState: t.aiProcessingState };
}
function _l() {
  const t = f.useRef(void 0), s = f.useRef(void 0), a = (n) => {
    if (s.current !== void 0) {
      const r = (n - s.current) / 1e3, i = E.currentSession;
      if (i && i.modeState.isRunning) {
        const o = i.modeState.characterStates;
        Object.keys(o).forEach((m) => {
          const c = o[m];
          if (c.currentPath && c.currentPath.length > 1) {
            (c.visualX === void 0 || Number.isNaN(c.visualX)) && (c.visualX = c.gridX), (c.visualY === void 0 || Number.isNaN(c.visualY)) && (c.visualY = c.gridY);
            const u = Yc(c.visualX, c.visualY, c.currentPath, 4, r);
            !Number.isNaN(u.x) && !Number.isNaN(u.y) && (c.visualX = u.x, c.visualY = u.y), u.reachedNextTile && (c.currentPath.shift(), c.gridX = Math.round(u.x), c.gridY = Math.round(u.y)), u.completed && (c.currentPath = void 0, c.visualX = c.gridX, c.visualY = c.gridY, c.targetLocationName && (c.locationName = c.targetLocationName, c.targetLocationName = void 0));
          } else if ((c.visualX === void 0 || Number.isNaN(c.visualX)) && (c.visualX = c.gridX), (c.visualY === void 0 || Number.isNaN(c.visualY)) && (c.visualY = c.gridY), Math.abs(c.visualX - c.gridX) + Math.abs(c.visualY - c.gridY) < 0.05) c.visualX = c.gridX, c.visualY = c.gridY;
          else {
            const u = 10 * r;
            c.visualX += (c.gridX - c.visualX) * u, c.visualY += (c.gridY - c.visualY) * u;
          }
        });
      }
    }
    s.current = n, t.current = requestAnimationFrame(a);
  };
  f.useEffect(() => (t.current = requestAnimationFrame(a), () => {
    t.current && cancelAnimationFrame(t.current);
  }), []);
}
function wl({ open: t, onOpenChange: s, settings: a, onSave: n }) {
  const [r, i] = f.useState(a);
  f.useEffect(() => {
    t && i(a);
  }, [t, a]);
  const o = () => {
    n(r), s(false);
  };
  return e.jsx(at, { open: t, onOpenChange: s, children: e.jsxs(nt, { className: "sm:max-w-[425px]", children: [e.jsxs(rt, { children: [e.jsx(We, { children: "\u5C0F\u9547\u8BBE\u7F6E" }), e.jsx(Tt, { children: "\u8C03\u6574\u6E38\u620F\u8FD0\u884C\u53C2\u6570\u548C AI \u884C\u4E3A\u3002" })] }), e.jsxs("div", { className: "grid gap-4 py-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs(I, { htmlFor: "ai-enabled", className: "flex flex-col gap-1", children: [e.jsx("span", { children: "\u542F\u7528 AI \u51B3\u7B56" }), e.jsx("span", { className: "font-normal text-xs text-muted-foreground", children: "\u5173\u95ED\u540E\u89D2\u8272\u5C06\u505C\u6B62\u81EA\u4E3B\u601D\u8003" })] }), e.jsx(et, { id: "ai-enabled", checked: r.aiEnabled, onCheckedChange: (m) => i((c) => ({ ...c, aiEnabled: m })) })] }), e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs(I, { htmlFor: "wait-ai", className: "flex flex-col gap-1", children: [e.jsx("span", { children: "\u7B49\u5F85 AI \u5B8C\u6210 (\u5F3A\u4E00\u81F4\u6027)" }), e.jsx("span", { className: "font-normal text-xs text-muted-foreground", children: "Tick \u53EA\u6709\u5728 AI \u601D\u8003\u5B8C\u540E\u624D\u7EE7\u7EED" })] }), e.jsx(et, { id: "wait-ai", checked: r.waitForAICompletion, onCheckedChange: (m) => i((c) => ({ ...c, waitForAICompletion: m })) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(I, { children: ["\u5FEB\u901F Tick (\u65E0 AI \u65F6) - ", r.fastTickInterval, "ms"] }), e.jsx(fs, { min: 100, max: 2e3, step: 100, value: [r.fastTickInterval], onValueChange: ([m]) => i((c) => ({ ...c, fastTickInterval: m })) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(I, { children: ["\u6B63\u5E38 Tick (\u6709 AI \u65F6) - ", r.normalTickInterval, "ms"] }), e.jsx(fs, { min: 1e3, max: 1e4, step: 500, value: [r.normalTickInterval], onValueChange: ([m]) => i((c) => ({ ...c, normalTickInterval: m })) })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { children: "\u5DE5\u4F5C\u65F6\u957F (Tick)" }), e.jsx(U, { type: "number", value: r.workingInterval, onChange: (m) => i((c) => ({ ...c, workingInterval: Number(m.target.value) })) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(I, { children: "\u7A7A\u95F2\u65F6\u957F (Tick)" }), e.jsx(U, { type: "number", value: r.idleInterval, onChange: (m) => i((c) => ({ ...c, idleInterval: Number(m.target.value) })) })] })] })] }), e.jsxs(_s, { children: [e.jsx(_, { variant: "outline", onClick: () => s(false), children: "\u53D6\u6D88" }), e.jsx(_, { onClick: o, children: "\u4FDD\u5B58\u66F4\u6539" })] })] }) });
}
function Cl({ open: t, onOpenChange: s, character: a }) {
  if (!a) return null;
  const n = [...a.dailyLog].sort((r, i) => i.day - r.day);
  return e.jsx(at, { open: t, onOpenChange: s, children: e.jsxs(nt, { className: "sm:max-w-[600px] max-h-[80vh] flex flex-col", children: [e.jsxs(rt, { children: [e.jsxs(We, { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold", style: { backgroundColor: a.color }, children: a.name.charAt(0) }), a.name, " \u7684\u65E5\u8BB0\u672C"] }), e.jsx(Tt, { children: "\u8BB0\u5F55\u4E86\u6BCF\u5929\u53D1\u751F\u7684\u4E8B\u60C5\u548C\u611F\u609F\u3002" })] }), e.jsx(Wn, { className: "flex-1 pr-4 -mr-4", children: e.jsx("div", { className: "space-y-6 py-4", children: n.length === 0 ? e.jsx("div", { className: "text-center text-muted-foreground py-10", children: "\u8FD8\u6CA1\u6709\u5199\u8FC7\u65E5\u8BB0..." }) : n.map((r) => e.jsxs("div", { className: "border rounded-lg p-4 bg-card/50 space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between border-b pb-2", children: [e.jsxs("h3", { className: "font-semibold", children: ["\u7B2C ", r.day, " \u5929"] }), e.jsxs("span", { className: "text-xs text-muted-foreground bg-muted px-2 py-1 rounded", children: ["\u7B56\u7565: ", r.strategy] })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "\u4ECA\u65E5\u8BB0\u4E8B" }), e.jsx("p", { className: "text-sm leading-relaxed whitespace-pre-wrap", children: r.dailyEntry })] }), r.dailyWisdom && e.jsxs("div", { className: "space-y-1 bg-primary/5 p-3 rounded border border-primary/10", children: [e.jsx("h4", { className: "text-xs font-medium text-primary", children: "\u6BCF\u65E5\u611F\u609F" }), e.jsxs("p", { className: "text-sm italic text-muted-foreground", children: ['"', r.dailyWisdom, '"'] })] }), e.jsxs("div", { className: "pt-2 border-t flex gap-4 text-xs text-muted-foreground", children: [e.jsxs("span", { children: ["\u{1F4B0} $", r.endStatus.money] }), e.jsxs("span", { children: ["\u26A1\uFE0F ", r.endStatus.stamina] }), e.jsxs("span", { children: ["\u{1F604} ", r.endStatus.happiness] })] })] }, r.day)) }) })] }) });
}
function kl({ sessionId: t }) {
  const s = ke(E), [a, n] = f.useState(null), [r, i] = f.useState(false), [o, m] = f.useState(false), c = f.useCallback((x) => {
    E.currentSession && (E.currentSession.modeConfig.settings = x, E.updateSessionInDB());
  }, []), { isRunning: d } = Sl();
  _l();
  const u = f.useCallback((x) => {
    n(x);
  }, []), l = s.currentSession, h = l ? Object.values(l.modeState.characterStates) : [];
  if (f.useEffect(() => {
    !a && h.length > 0 && n(h[0].id);
  }, [h, a]), !l) return e.jsx("div", { className: "flex items-center justify-center h-full", children: e.jsx("p", { className: "text-muted-foreground", children: "\u52A0\u8F7D\u4E2D..." }) });
  const p = a ? l.modeState.characterStates[a] : null;
  return e.jsxs("div", { className: "flex flex-col h-full bg-background", children: [e.jsx(jc, { gameTime: l.modeState.gameTime, isRunning: d, onToggle: () => E.toggle(), onSettings: () => i(true) }), e.jsxs("div", { className: "flex-1 flex overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex flex-col p-4 gap-2 overflow-hidden", children: [e.jsx("div", { className: "flex-1 overflow-auto", children: e.jsx(_c, { characterStates: h, selectedCharacterId: a, onSelectCharacter: u }) }), e.jsx(kc, { contextItems: s.historyItems, selectedCharacter: p || null })] }), e.jsx(wc, { character: p || null, gameTime: l.modeState.gameTime, onOpenDiary: () => m(true) })] }), l && e.jsx(wl, { open: r, onOpenChange: i, settings: l.modeConfig.settings, onSave: c }), e.jsx(Cl, { open: o, onOpenChange: m, character: p || null })] });
}
function Il({ sessionId: t }) {
  const { data: s = [] } = Me((n) => n.from({ s: Je }).where(({ s: r }) => Ea(r.id, t))), a = s[0];
  return f.useEffect(() => {
    var _a2;
    if (!a || ((_a2 = E.currentSession) == null ? void 0 : _a2.id) === t) return;
    (async () => {
      try {
        const o = { historyItems: await new $s(t).getContextItems(), processingItem: void 0 };
        E.loadSession(a, o);
      } catch (r) {
        console.error("[SmallTown] \u52A0\u8F7D\u4F1A\u8BDD\u5931\u8D25:", r);
      }
    })();
  }, [a, t]), f.useEffect(() => () => {
    E.unloadSession();
  }, []), a ? a.mode !== "small-town" ? e.jsx("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4", children: e.jsx("p", { children: "\u4F1A\u8BDD\u6A21\u5F0F\u4E0D\u5339\u914D" }) }) : e.jsx(kl, { sessionId: t }) : e.jsx("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4", children: e.jsx("p", { children: "\u4F1A\u8BDD\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664" }) });
}
const pd = Object.freeze(Object.defineProperty({ __proto__: null, SessionMainForSmallTown: Il }, Symbol.toStringTag, { value: "Module" }));
export {
  Ge as C,
  Ql as D,
  Wl as E,
  Zl as G,
  Vl as I,
  Bl as S,
  Je as a,
  Gl as b,
  Jl as c,
  Kl as d,
  jt as e,
  ql as f,
  Xl as g,
  Yl as h,
  ed as i,
  td as j,
  sd as k,
  ad as l,
  te as m,
  id as n,
  rd as o,
  nd as p,
  od as q,
  zl as r,
  cd as s,
  ld as t,
  dd as u,
  md as v,
  ud as w,
  hd as x,
  pd as y
};
