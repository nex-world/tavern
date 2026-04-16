import { v as D, r as g, j as r, u } from "./react-gFHNOnf5.js";
import { i as P } from "./@tanstack-DDpiKjUN.js";
import { B } from "./button-D3G-RLOw.js";
import { C as x, a as k, b as $, c as T, d as h } from "./card-B4CxGEM-.js";
import { I as R } from "./input-KwncZLGm.js";
import { L as U } from "./label-BU_LC6Ti.js";
import { a as A } from "./bangumi-client-Bal74wg2.js";
import { B as E } from "./bangumi-page-header-CjBVz-6c.js";
import { a as L, b as q, c as H } from "./bangumi-result-utils-DyUfcZIL.js";
import { b as F } from "./bangumi-store-D4IfMGL6.js";
import { P as O, C as Q, m as z } from "./db-master-DI3V0061.js";
import { L as _, l as G, Q as J } from "./icons-CW-0NDo_.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./badge-C9CmQsZA.js";
import "./dialog-CPE3M3ew.js";
import "./zod-DPWJ_A9_.js";
function c(e) {
  if (e == null) return "";
  if (typeof e == "string") return e.replace(/\s+/g, " ").trim();
  if (typeof e == "number" || typeof e == "boolean" || typeof e == "bigint") return String(e);
  if (Array.isArray(e)) return e.map((s) => c(s)).filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  if (typeof e == "object") {
    const s = e;
    if ("key" in s || "value" in s) {
      const a = c(s.key), m = c(s.value);
      if (a || m) return [a, m].filter(Boolean).join(": ");
    }
    const n = ["name", "title", "summary", "description", "content", "text", "info"].map((a) => c(s[a])).filter(Boolean).join(" ");
    return n ? n.replace(/\s+/g, " ").trim() : Object.values(s).map((a) => c(a)).filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  }
  return String(e).replace(/\s+/g, " ").trim();
}
function y(e, s) {
  return e.length <= s ? e : `${e.slice(0, s - 1).trimEnd()}\u2026`;
}
function M(e) {
  var _a, _b, _c, _d, _e;
  return ((_a = e.images) == null ? void 0 : _a.common) ?? ((_b = e.images) == null ? void 0 : _b.medium) ?? ((_c = e.images) == null ? void 0 : _c.large) ?? ((_d = e.images) == null ? void 0 : _d.grid) ?? ((_e = e.images) == null ? void 0 : _e.small) ?? "";
}
function V(e) {
  return e.url ? e.url : e.id ? `https://bgm.tv/character/${e.id}` : "";
}
function v(e) {
  return Array.from(new Set(e.map((s) => c(s)).filter(Boolean)));
}
function W(e, s = {}) {
  const o = c(e.name) || "\u672A\u547D\u540D\u89D2\u8272", n = c(e.summary), a = c(e.infobox), m = c(s.searchKeyword), d = V(e), j = M(e), p = n ? `${y(n, 420)}` : `\u4E00\u952E\u521B\u5EFA\u7684\u89D2\u8272\u300C${o}\u300D\u3002`, C = a ? `${y(a, 420)}` : n ? `${y(n, 420)}` : "\u5F85\u8865\u5145\u3002", b = v(["\u7531 NexTavern \u7684\u300C\u4E00\u952E\u521B\u5EFA\u89D2\u8272\u300D\u529F\u80FD\u521B\u5EFA\u3002", m ? `\u68C0\u7D22\u5173\u952E\u8BCD\uFF1A${m}` : void 0, d ? `\u89D2\u8272\u9875\uFF1A${d}` : void 0, n ? `\u7B80\u4ECB\uFF1A${y(n, 220)}` : void 0, a ? `\u8D44\u6599\uFF1A${y(a, 220)}` : void 0]).join(`
`), f = v([d]);
  return O.parse({ id: crypto.randomUUID(), name: o, description: p, personality: C, scenario: "(null)", first_mes: `\u6211\u662F${o}\u3002`, mes_example: `<START>
{{user}}: \u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F
${o}: \u4F60\u597D\uFF0C\u6211\u662F${o}\u3002`, creator_notes: b, system_prompt: "", post_history_instructions: "", alternate_greetings: [], group_only_greetings: [], tags: v(["\u4E00\u952E\u521B\u5EFA", m]), creator: "NexTavern", character_version: "1.0.0", extensions: { importSource: "bangumi", bangumi: { id: e.id ?? null, name: o, url: d, searchKeyword: m || void 0, summary: n || void 0, infobox: a || void 0, avatar: j || void 0 } }, source: f.length > 0 ? f : void 0, avatar: j || void 0, imageBase64: void 0, creation_date: Date.now(), modification_date: Date.now() });
}
function je() {
  const e = D(F), { data: s = [] } = P((t) => t.from({ character: Q })), [o, n] = g.useState(""), [a, m] = g.useState(null), [d, j] = g.useState(false), [p, C] = g.useState(false), [b, f] = g.useState(null), w = L(a);
  async function N() {
    const t = o.trim();
    if (!t) {
      u.error("\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD");
      return;
    }
    try {
      C(true), j(true);
      const l = await A({ method: "POST", path: "/v0/search/characters", body: { keyword: t }, query: { limit: 12, offset: 0 }, accessToken: e.accessToken.trim() || void 0 });
      m(l);
    } catch (l) {
      console.error("Character search failed:", l), u.error("\u89D2\u8272\u641C\u7D22\u5931\u8D25");
    } finally {
      C(false);
    }
  }
  async function I(t) {
    if (!t.id) {
      u.error("\u8BE5\u89D2\u8272\u7F3A\u5C11\u53EF\u7528\u7684 Bangumi ID\uFF0C\u65E0\u6CD5\u4E00\u952E\u521B\u5EFA");
      return;
    }
    if (s.some((i) => {
      var _a, _b;
      return ((_b = (_a = i.extensions) == null ? void 0 : _a.bangumi) == null ? void 0 : _b.id) === t.id;
    })) {
      u.info("\u8FD9\u4E2A\u89D2\u8272\u5DF2\u7ECF\u5728\u89D2\u8272\u5E7F\u573A\u91CC\u4E86");
      return;
    }
    try {
      f(t.id);
      const i = W(t, { searchKeyword: o.trim() });
      await z.characters.add(i), u.success(`\u5DF2\u5C06\u300C${i.name}\u300D\u6DFB\u52A0\u5230\u89D2\u8272\u5E7F\u573A`);
    } catch (i) {
      console.error("Create character failed:", i), u.error("\u521B\u5EFA\u89D2\u8272\u5361\u5931\u8D25");
    } finally {
      f(null);
    }
  }
  return r.jsxs("div", { className: "w-full max-w-6xl mx-auto p-6 space-y-6", children: [r.jsx(E, { title: "\u4E00\u952E\u521B\u5EFA\u89D2\u8272", description: "\u5148\u68C0\u7D22\u52A8\u6F2B\u89D2\u8272\uFF0C\u518D\u4E00\u952E\u751F\u6210\u6807\u51C6\u89D2\u8272\u5361\u5E76\u6DFB\u52A0\u5230\u89D2\u8272\u5E7F\u573A\u3002" }), r.jsxs(x, { children: [r.jsxs(k, { children: [r.jsx($, { children: "\u641C\u7D22\u89D2\u8272" }), r.jsx(T, { children: "\u7136\u540E\u76F4\u63A5\u8F6C\u6362\u6210\u89D2\u8272\u5361\u3002" })] }), r.jsxs(h, { className: "grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end", children: [r.jsxs("div", { className: "space-y-2", children: [r.jsx(U, { htmlFor: "bangumi-character-keyword", children: "\u5173\u952E\u8BCD" }), r.jsx(R, { id: "bangumi-character-keyword", value: o, onChange: (t) => n(t.target.value), placeholder: "\u4F8B\u5982\uFF1A\u536B\u5BAB\u58EB\u90CE\u3001\u521D\u97F3\u672A\u6765\u3001\u97E9\u7ACB", onKeyDown: (t) => {
    t.key === "Enter" && (t.preventDefault(), N());
  } })] }), r.jsxs(B, { type: "button", onClick: N, disabled: p, className: "min-w-32", children: [p ? r.jsx(_, { className: "w-4 h-4 animate-spin" }) : r.jsx(G, { className: "w-4 h-4" }), p ? "\u641C\u7D22\u4E2D" : "\u5F00\u59CB\u641C\u7D22"] }), r.jsx("p", { className: "text-xs text-muted-foreground md:col-span-2", children: "\u6570\u636E\u6E90\uFF1A Bangumi \u7684\u516C\u5F00\u89D2\u8272\u3002" })] })] }), d ? w.length > 0 ? r.jsxs(x, { children: [r.jsxs(k, { children: [r.jsx($, { children: "\u641C\u7D22\u7ED3\u679C" }), r.jsxs(T, { children: ["\u5171 ", w.length, " \u6761\u7ED3\u679C\uFF0C\u70B9\u51FB\u53F3\u4FA7\u6309\u94AE\u5373\u53EF\u76F4\u63A5\u751F\u6210\u89D2\u8272\u5361\u3002"] })] }), r.jsx(h, { children: r.jsx("div", { className: "grid grid-cols-1 gap-4 xl:grid-cols-2", children: w.map((t, l) => {
    const i = s.find((K) => {
      var _a, _b;
      return ((_b = (_a = K.extensions) == null ? void 0 : _a.bangumi) == null ? void 0 : _b.id) === t.id;
    }), S = b === t.id;
    return r.jsx(x, { className: "overflow-hidden", children: r.jsxs(h, { className: "space-y-4 pt-6", children: [r.jsx(q, { character: t }), r.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-t pt-4", children: [r.jsx("div", { className: "text-xs text-muted-foreground", children: i ? "\u5DF2\u5728\u89D2\u8272\u5E7F\u573A\u4E2D" : "\u53EF\u76F4\u63A5\u4E00\u952E\u751F\u6210\u6807\u51C6\u89D2\u8272\u5361" }), r.jsxs(B, { type: "button", onClick: () => {
      I(t);
    }, disabled: !!i || S, children: [S ? r.jsx(_, { className: "w-4 h-4 animate-spin" }) : r.jsx(J, { className: "w-4 h-4" }), i ? "\u5DF2\u521B\u5EFA" : S ? "\u521B\u5EFA\u4E2D" : "\u4E00\u952E\u521B\u5EFA"] })] })] }) }, H(t, l, "bangumi-import-character"));
  }) }) })] }) : r.jsx(x, { children: r.jsx(h, { className: "py-12 text-center text-sm text-muted-foreground", children: "\u6CA1\u6709\u68C0\u7D22\u5230\u89D2\u8272\uFF0C\u8BF7\u6362\u4E00\u4E2A\u66F4\u5177\u4F53\u7684\u5173\u952E\u8BCD\u518D\u8BD5\u4E00\u6B21\u3002" }) }) : r.jsx(x, { children: r.jsx(h, { className: "py-12 text-center text-sm text-muted-foreground", children: "\u8F93\u5165\u5173\u952E\u8BCD\u540E\u5F00\u59CB\u641C\u7D22\uFF0C\u968F\u540E\u53EF\u4EE5\u76F4\u63A5\u628A\u7ED3\u679C\u4E00\u952E\u751F\u6210\u5230\u89D2\u8272\u5E7F\u573A\u3002" }) })] });
}
export {
  je as component
};
