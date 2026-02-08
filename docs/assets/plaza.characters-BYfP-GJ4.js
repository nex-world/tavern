import { j as e, r as u, t as c } from "./react-BQpw03Eg.js";
import { f as v, i as N } from "./@tanstack-B4B5CfFY.js";
import { C as y, I as C } from "./ImportCardDialog-D_4oPsao.js";
import { C as w, a as b, b as _, c as $, d as k } from "./card-ClPZDGV4.js";
import { B as S } from "./badge-DvaSwOwN.js";
import { C as I, m as g } from "./db-master-l33tB5ke.js";
import { B as d } from "./button-B9brLUSp.js";
import { D, g as B, a as O, b as T, c as z } from "./dialog-ClhHrx6A.js";
import { C as A } from "./checkbox-5kiXjLha.js";
import { L } from "./label-DMtPOVS-.js";
import { e as P } from "./card-converters-CZK5cTNt.js";
import { D as E, t as R, i as U, P as J } from "./icons-BC63ChG4.js";
import "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-B3Kybfa7.js";
import "./input-C44X3vA9.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./gsap-DDlvirwQ.js";
import "./zod-fbN9ubnj.js";
const F = (a) => {
  var _a;
  const n = !!a.character.imageBase64, o = !!a.character.avatar, r = n || !n && o;
  return e.jsxs(w, { className: `relative mx-auto w-full max-w-sm ${r ? "pt-0" : ""} hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col`, onClick: () => {
    var _a2;
    return (_a2 = a.onClick) == null ? void 0 : _a2.call(a, a.character);
  }, children: [r && e.jsxs("div", { className: "relative", children: [n ? e.jsx("img", { src: a.character.imageBase64, alt: `${a.character.name} \u89D2\u8272\u56FE\u7247`, className: "relative z-20 w-full object-contain" }) : e.jsx("div", { className: "relative z-20 w-full aspect-square bg-muted flex items-center justify-center", children: e.jsx("img", { src: a.character.avatar, alt: `${a.character.name} \u5934\u50CF`, className: "w-[66%] h-[66%] object-cover" }) }), e.jsx("div", { className: "z-21 absolute bottom-0 left-0 right-0 p-4", children: e.jsxs("div", { className: "flex items-center gap-3", children: [o && e.jsx("div", { className: "bg-foreground/90 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-black/90 shrink-0", children: e.jsx("img", { src: a.character.avatar, alt: `${a.character.name} \u5934\u50CF`, className: "w-full h-full object-cover" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("div", { className: "text-white font-bold text-md truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.96)]", children: a.character.name }), e.jsx("div", { className: "text-white/80 font-medium text-sm truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.968)]", children: (a.character.creator ? `by ${a.character.creator}` : void 0) ?? a.character.nickname })] })] }) })] }), e.jsx(b, { className: r ? "hidden" : "", children: e.jsx("div", { className: "flex justify-between items-start", children: e.jsxs("div", { className: "flex items-center gap-3", children: [a.character.avatar && e.jsx("div", { className: "bg-muted w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border shrink-0", children: e.jsx("img", { src: a.character.avatar, alt: `${a.character.name} \u5934\u50CF`, className: "w-full h-full object-cover" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx(_, { className: "text-lg truncate", children: a.character.name }), e.jsx($, { className: "truncate", children: (a.character.creator ? `by ${a.character.creator}` : void 0) ?? a.character.nickname })] })] }) }) }), e.jsxs(k, { className: "grow space-y-2", children: [e.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3", children: a.character.description }), ((_a = a.character.tags) == null ? void 0 : _a.length) > 0 && e.jsx("div", { className: "flex flex-wrap gap-1", children: a.character.tags.slice(0, 5).map((s, h) => e.jsx(S, { variant: "secondary", className: "text-[10px] px-1.5 py-0", children: s }, `[${h}]${s}`)) })] })] });
};
function H({ characters: a, trigger: n }) {
  const [o, r] = u.useState(false), [s, h] = u.useState(false), x = u.useId(), p = () => {
    if (a.length === 0) {
      c.error("\u6CA1\u6709\u89D2\u8272\u53EF\u5BFC\u51FA");
      return;
    }
    try {
      const i = a.map((f) => {
        const j = P(f, { includeImageBase64: s });
        return JSON.parse(j);
      }), t = new Blob([JSON.stringify(i, null, 2)], { type: "application/json" }), l = URL.createObjectURL(t), m = document.createElement("a");
      m.href = l, m.download = `characters-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, document.body.appendChild(m), m.click(), document.body.removeChild(m), URL.revokeObjectURL(l), c.success(`\u6210\u529F\u5BFC\u51FA ${a.length} \u4E2A\u89D2\u8272`), r(false);
    } catch (i) {
      c.error("\u5BFC\u51FA\u5931\u8D25"), console.error("Export error:", i);
    }
  };
  return e.jsxs(D, { open: o, onOpenChange: r, children: [e.jsx(B, { asChild: true, children: n || e.jsxs(d, { variant: "outline", size: "sm", className: "flex items-center gap-2", type: "button", children: [e.jsx(E, { className: "w-4 h-4" }), "\u6279\u91CF\u5BFC\u51FA"] }) }), e.jsxs(O, { className: "sm:max-w-md", children: [e.jsx(T, { children: e.jsx(z, { children: "\u5BFC\u51FA\u89D2\u8272" }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u5C06\u5BFC\u51FA ", a.length, " \u4E2A\u89D2\u8272\u4E3A JSON \u6587\u4EF6\u3002"] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(A, { id: `${x}-include-image`, checked: s, onCheckedChange: (i) => h(i === true) }), e.jsx(L, { htmlFor: `${x}-include-image`, className: "text-sm", children: "\u5305\u542B Base64 \u56FE\u50CF\u6570\u636E" })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: s ? "\u6587\u4EF6\u5C06\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5927\u4F46\u5B8C\u6574\u3002" : "\u6587\u4EF6\u4E0D\u5305\u542B\u56FE\u50CF\u6570\u636E\uFF0C\u6587\u4EF6\u8F83\u5C0F\u4F46\u9700\u8981\u5355\u72EC\u5904\u7406\u56FE\u50CF\u3002" })] }), e.jsxs("div", { className: "flex justify-end gap-2", children: [e.jsx(d, { variant: "outline", onClick: () => r(false), children: "\u53D6\u6D88" }), e.jsx(d, { onClick: p, children: "\u5BFC\u51FA" })] })] })] });
}
const q = { id: "preset-char-001", name: "\u6797\u6653\u8587", description: "\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\u3002\u5979\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\uFF0C\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u6E29\u67D4\u6CBB\u6108\u7CFB\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u60C5\u611F\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u6E29\u67D4\u5584\u826F\u7684\u5E74\u8F7B\u5973\u6027\uFF0C\u540D\u53EB\u6797\u6653\u8587\u3002\u4F60\u62E5\u6709\u795E\u79D8\u7684\u6CBB\u6108\u80FD\u529B\uFF0C\u662F\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u4F60\u603B\u662F\u5E2E\u52A9\u6709\u9700\u8981\u7684\u4EBA\uFF0C\u6027\u683C\u6E29\u548C\uFF0C\u5BCC\u6709\u540C\u60C5\u5FC3\u3002\u4F60\u8BF4\u8BDD\u6E29\u67D4\uFF0C\u603B\u662F\u8003\u8651\u522B\u4EBA\u7684\u611F\u53D7\u3002", post_history_instructions: "\u4FDD\u6301\u6E29\u67D4\u5584\u826F\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u540C\u60C5\u5FC3\u548C\u5E2E\u52A9\u4ED6\u4EBA\u7684\u610F\u613F\u3002", personality: "\u6E29\u67D4\u3001\u5584\u826F\u3001\u5BCC\u6709\u540C\u60C5\u5FC3\u3001\u4E50\u4E8E\u52A9\u4EBA\u3001\u795E\u79D8", mes_example: "\u6211\u770B\u5230\u4F60\u53D7\u4F24\u4E86\uFF0C\u8BA9\u6211\u5E2E\u4F60\u6CBB\u7597\u5427\u3002\u6211\u8FD9\u91CC\u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u8349\u836F\uFF0C\u5E94\u8BE5\u80FD\u5E2E\u5230\u4F60\u3002", first_mes: "\u4F60\u597D\uFF0C\u6211\u662F\u6797\u6653\u8587\uFF0C\u5C0F\u9547\u4E0A\u7684\u8349\u836F\u5E08\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u8349\u836F\u94FA", character_version: "1.0", tags: ["\u6CBB\u6108", "\u6E29\u67D4", "\u5584\u826F", "\u8349\u836F\u5E08"], createdAt: 1706e9, updatedAt: 1706e9 }, Q = { id: "preset-char-002", name: "\u5F20\u94C1\u67F1", description: "\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\u3002\u4ED6\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\uFF0C\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u52C7\u6562\u529B\u91CF\u578B\u7684\u7537\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u6218\u6597\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u52C7\u6562\u7684\u94C1\u5320\uFF0C\u540D\u53EB\u5F20\u94C1\u67F1\u3002\u4F60\u62E5\u6709\u8D85\u51E1\u7684\u529B\u91CF\uFF0C\u662F\u5C0F\u9547\u7684\u5B88\u62A4\u8005\u3002\u4F60\u603B\u662F\u4FDD\u62A4\u5F31\u5C0F\uFF0C\u6027\u683C\u521A\u6B63\u4E0D\u963F\u3002\u4F60\u8BF4\u8BDD\u76F4\u723D\uFF0C\u603B\u662F\u5C55\u73B0\u52C7\u6C14\u548C\u529B\u91CF\u3002", post_history_instructions: "\u4FDD\u6301\u52C7\u6562\u521A\u6B63\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u4FDD\u62A4\u4ED6\u4EBA\u7684\u52C7\u6C14\u3002", personality: "\u52C7\u6562\u3001\u521A\u6B63\u3001\u529B\u91CF\u5F3A\u5927\u3001\u4FDD\u62A4\u5F31\u8005\u3001\u76F4\u723D", mes_example: "\u522B\u6015\uFF0C\u6709\u6211\u5728\uFF01\u6211\u4F1A\u4FDD\u62A4\u4F60\u4EEC\u7684\u3002\u8FD9\u4E2A\u602A\u7269\uFF0C\u6211\u6765\u5BF9\u4ED8\uFF01", first_mes: "\u563F\uFF0C\u670B\u53CB\uFF01\u6211\u662F\u5F20\u94C1\u67F1\uFF0C\u5C0F\u9547\u7684\u94C1\u5320\u3002\u9700\u8981\u5E2E\u5FD9\u953B\u9020\u6B66\u5668\u5417\uFF1F\u8FD8\u662F\u6709\u4EC0\u4E48\u9EBB\u70E6\u4E8B\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u94C1\u5320\u94FA", character_version: "1.0", tags: ["\u6218\u6597", "\u52C7\u6562", "\u94C1\u5320", "\u5B88\u62A4\u8005"], createdAt: 1706e9, updatedAt: 1706e9 }, X = { id: "preset-char-003", name: "\u674E\u667A\u6167", description: "\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\u3002\u5979\u662F\u5C0F\u9547\u7684\u667A\u8005\uFF0C\u603B\u662F\u89E3\u7B54\u7591\u60D1\u3002", creator: "SillyTavern\u9884\u8BBE", creator_notes: "\u8FD9\u662F\u4E00\u4E2A\u667A\u6167\u77E5\u8BC6\u578B\u7684\u5973\u6027\u89D2\u8272\uFF0C\u9002\u5408\u7528\u4E8E\u89E3\u8C1C\u7C7B\u6311\u6218\u3002", extensions: {}, system_prompt: "\u4F60\u662F\u4E00\u4F4D\u806A\u660E\u7684\u5B66\u8005\uFF0C\u540D\u53EB\u674E\u667A\u6167\u3002\u4F60\u62E5\u6709\u6E0A\u535A\u7684\u77E5\u8BC6\uFF0C\u662F\u5C0F\u9547\u7684\u667A\u8005\u3002\u4F60\u603B\u662F\u89E3\u7B54\u7591\u60D1\uFF0C\u6027\u683C\u777F\u667A\u3002\u4F60\u8BF4\u8BDD\u6E29\u548C\uFF0C\u603B\u662F\u5C55\u73B0\u667A\u6167\u548C\u8010\u5FC3\u3002", post_history_instructions: "\u4FDD\u6301\u777F\u667A\u6E29\u548C\u7684\u6027\u683C\uFF0C\u603B\u662F\u5C55\u73B0\u89E3\u7B54\u7591\u60D1\u7684\u8010\u5FC3\u3002", personality: "\u806A\u660E\u3001\u777F\u667A\u3001\u77E5\u8BC6\u6E0A\u535A\u3001\u6E29\u548C\u3001\u8010\u5FC3", mes_example: "\u8BA9\u6211\u60F3\u60F3\u8FD9\u4E2A\u95EE\u9898...\u6839\u636E\u53E4\u7C4D\u8BB0\u8F7D\uFF0C\u8FD9\u5E94\u8BE5\u662F\u8FD9\u6837\u7684\u3002\u8BA9\u6211\u4E3A\u4F60\u8BE6\u7EC6\u89E3\u91CA\u3002", first_mes: "\u6B22\u8FCE\u6765\u5230\u6211\u7684\u4E66\u623F\uFF0C\u65C5\u884C\u8005\u3002\u6211\u662F\u674E\u667A\u6167\uFF0C\u5C0F\u9547\u7684\u5B66\u8005\u3002\u6709\u4EC0\u4E48\u77E5\u8BC6\u4E0A\u7684\u7591\u95EE\u9700\u8981\u89E3\u7B54\u5417\uFF1F", avatar: "", alternate_greetings: [], group_only_greetings: [], scenario: "\u5C0F\u9547\u7684\u4E66\u623F", character_version: "1.0", tags: ["\u667A\u6167", "\u5B66\u8005", "\u77E5\u8BC6", "\u6E29\u548C"], createdAt: 1706e9, updatedAt: 1706e9 }, Z = [q, Q, X];
function ge() {
  const a = v(), [n, o] = u.useState(false), { data: r = [] } = N((t) => t.from({ c: I })), s = (t) => {
    a({ to: "/characters/$characterId", params: { characterId: t.id } });
  }, h = (t) => {
    a({ to: "/characters/$characterId", params: { characterId: t.id } });
  }, x = async (t) => {
    try {
      await g.characters.add(t), c.success(`\u6210\u529F\u5BFC\u5165\u89D2\u8272: ${t.name}`);
    } catch (l) {
      c.error("\u5BFC\u5165\u5931\u8D25"), console.error(l);
    }
  }, p = async () => {
    try {
      let t = 0;
      for (const l of Z) try {
        await g.characters.add(l), t++;
      } catch (m) {
        console.error(`Failed to import preset ${l.name}:`, m);
      }
      t > 0 ? c.success(`\u6210\u529F\u5BFC\u5165 ${t} \u4E2A\u89D2\u8272\u9884\u8BBE`) : c.error("\u6CA1\u6709\u627E\u5230\u53EF\u5BFC\u5165\u7684\u89D2\u8272\u9884\u8BBE");
    } catch (t) {
      c.error("\u5BFC\u5165\u9884\u8BBE\u5931\u8D25"), console.error(t);
    }
  }, i = e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs(d, { variant: "outline", size: "sm", className: "hidden sm:flex items-center gap-2", type: "button", onClick: () => o(true), children: [e.jsx(R, { className: "w-4 h-4" }), "\u5BFC\u5165\u89D2\u8272"] }), e.jsxs(d, { variant: "outline", size: "sm", className: "hidden sm:flex items-center gap-2", type: "button", onClick: p, children: [e.jsx(U, { className: "w-4 h-4" }), "\u5BFC\u5165\u9884\u8BBE"] }), e.jsx(H, { characters: r }), e.jsxs(d, { variant: "default", size: "sm", className: "flex items-center gap-2", onClick: () => a({ to: "/create/character" }), type: "button", children: [e.jsx(J, { className: "w-4 h-4" }), "\u65B0\u5EFA\u89D2\u8272"] }), e.jsx(C, { open: n, onOpenChange: o, onImport: x })] });
  return e.jsx(y, { items: r, title: "\u89D2\u8272\u5217\u8868", placeholder: "\u641C\u7D22\u540D\u79F0\u3001\u63CF\u8FF0\u6216\u6807\u7B7E...", actions: i, getSearchableContent: (t) => `${t.name} ${t.description} ${t.tags.join(" ")}`, getTags: (t) => t.tags, getId: (t) => t.id, renderCard: (t) => e.jsx(F, { character: t, onClick: h, onStartSession: s }) });
}
export {
  ge as component
};
