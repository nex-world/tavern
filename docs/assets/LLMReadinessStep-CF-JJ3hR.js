import { r, j as e } from "./react-gFHNOnf5.js";
import { B as p } from "./button-D3G-RLOw.js";
import { T as N } from "./tavern-llm-config-editor-COkgIsnx.js";
import { u as n } from "./global-llm-config.store-BYX0tcdb.js";
import { a as v } from "./llm-readiness-DRaLeVb_.js";
import { c as u } from "./shadcn-utils-BMZD7_jZ.js";
import { $ as k, C as h, a0 as C, a1 as L } from "./icons-CW-0NDo_.js";
const A = (l) => {
  const o = n((s) => s.config.baseUrl), c = n((s) => s.config.apiKey), d = n((s) => s.config.model), [a, f] = r.useState(null), [m, g] = r.useState(false), i = r.useCallback(() => {
    var _a;
    const s = v({ baseUrl: o, apiKey: c, model: d });
    return f(s), (_a = l.onStatusChange) == null ? void 0 : _a.call(l, s.isReady), s;
  }, [o, c, d, l.onStatusChange]);
  if (r.useEffect(() => {
    i();
  }, [i]), !a) return null;
  const y = [{ key: "baseUrl", label: "API \u5730\u5740" }, { key: "apiKey", label: "API \u5BC6\u94A5" }, { key: "model", label: "\u6A21\u578B\u9009\u62E9" }], j = new Set(a.missingItems.map((s) => s.key));
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx("h3", { className: "text-lg font-bold", children: "LLM \u914D\u7F6E\u68C0\u6D4B" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u68C0\u6D4B\u5927\u8BED\u8A00\u6A21\u578B\u914D\u7F6E\u662F\u5426\u5C31\u7EEA\uFF0C\u786E\u4FDD\u4F1A\u8BDD\u53EF\u4EE5\u6B63\u5E38\u8FDB\u884C\u3002" })] }), e.jsx("div", { className: "space-y-3", children: y.map((s) => {
    const t = j.has(s.key), x = a.missingItems.find((b) => b.key === s.key);
    return e.jsxs("div", { className: u("flex items-center gap-3 p-3 rounded-xl border transition-colors", t ? "border-destructive/30 bg-destructive/5" : "border-primary/20 bg-primary/5"), children: [t ? e.jsx(k, { className: "w-5 h-5 text-destructive shrink-0" }) : e.jsx(h, { className: "w-5 h-5 text-primary shrink-0" }), e.jsxs("div", { className: "flex-1 min-w-0", children: [e.jsx("div", { className: u("text-sm font-medium", t ? "text-destructive" : "text-foreground"), children: s.label }), t && x && e.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: x.description })] })] }, s.key);
  }) }), a.isReady ? e.jsxs("div", { className: "flex items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/20", children: [e.jsx(h, { className: "w-5 h-5 text-primary shrink-0" }), e.jsx("span", { className: "text-sm font-medium text-primary", children: "\u6240\u6709\u914D\u7F6E\u5DF2\u5C31\u7EEA\uFF0C\u53EF\u70B9\u51FB\u4E0B\u4E00\u6B65\u7EE7\u7EED\u3002" })] }) : e.jsxs("div", { className: "flex flex-col gap-3", children: [e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u8BF7\u5148\u5B8C\u6210 LLM \u914D\u7F6E\u540E\u518D\u5F00\u59CB\u4F1A\u8BDD\u3002" }), e.jsxs("div", { className: "flex gap-3", children: [e.jsxs(p, { type: "button", variant: "default", className: "gap-2", onClick: () => g((s) => !s), children: [e.jsx(C, { className: "w-4 h-4" }), m ? "\u6536\u8D77\u914D\u7F6E\u9762\u677F" : "\u914D\u7F6E LLM"] }), e.jsxs(p, { type: "button", variant: "outline", className: "gap-2", onClick: () => {
    i();
  }, children: [e.jsx(L, { className: "w-4 h-4" }), "\u91CD\u65B0\u68C0\u6D4B"] })] }), m && e.jsx("div", { className: "rounded-xl border bg-card p-4", children: e.jsx(N, {}) })] })] });
};
export {
  A as L
};
