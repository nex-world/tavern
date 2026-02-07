import { n as B } from "./id-OxPLOBIU.js";
import { p as q } from "./es-toolkit-CstbrnlE.js";
import { r as N, j as e } from "./react-BkMll9ak.js";
import { ao as R, ap as T, aq as I, ar as u, as as x, f as j, at as V, au as K, av as M, B as P, aw as W, ax as G, ay as _, az as X, aA as H, aB as Q, aC as Y, ad as F, X as U, af as E, ag as $, ah as z, ai as A, aj as w } from "./app-components-CKzP6Gne.js";
import { aj as Z, d as ee } from "./icons-GagDs9Wh.js";
const de = async (s, t) => {
  if (!(s && t)) return console.warn("fetchModels: Missing baseUrl or apiKey"), [];
  try {
    const n = await fetch(`${s}/models`, { headers: { Authorization: `Bearer ${t}`, "Content-Type": "application/json" } });
    if (n.ok) return (await n.json()).data || [];
  } catch (n) {
    console.error("Fetch models error:", n);
  }
  return [];
}, se = (s, t, n, r) => {
  var _a, _b, _c, _d, _e, _f;
  if (!s.startsWith("data: ")) return n;
  const o = s.slice(6);
  if (o === "[DONE]") return n;
  try {
    const l = JSON.parse(o);
    t.push({ id: crypto.randomUUID(), data: l });
    const i = ((_c = (_b = (_a = l.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.delta) == null ? void 0 : _c.content) || "", c = (_f = (_e = (_d = l.choices) == null ? void 0 : _d[0]) == null ? void 0 : _e.logprobs) == null ? void 0 : _f.content;
    return c && r.push(...c), n + i;
  } catch (l) {
    return console.error("Parse error:", l), n;
  }
}, ae = (s, t, n, r) => s.split(`
`).reduce((l, i) => se(i, t, l, r), n), re = async (s) => {
  var _a, _b;
  const t = (_a = s.body) == null ? void 0 : _a.getReader(), n = new TextDecoder(), r = [];
  let o = "";
  const l = [];
  if (t) for (; ; ) {
    const { done: c, value: b } = await t.read();
    if (c) break;
    const y = n.decode(b, { stream: true });
    o = ae(y, r, o, l);
  }
  const i = (_b = r.at(-1)) == null ? void 0 : _b.data;
  return { id: B(), role: "assistant", content: o, response: i, rawResponse: r.map((c) => `data: ${JSON.stringify(c.data)}
`).join(""), chunks: r, fullLogprobs: l };
}, D = async (s) => {
  var _a, _b, _c;
  const t = await s.json(), n = ((_c = (_b = (_a = t.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) == null ? void 0 : _c.content) || "";
  let r = "";
  try {
    r = JSON.stringify(t, null, 2);
  } catch {
    r = "Error: cyclic data in response";
  }
  return { id: B(), role: "assistant", content: n, response: t, rawResponse: r };
}, J = (s, t) => {
  const n = {};
  for (const r of s) {
    let o = r.value;
    r.type === "number" ? o = Number.parseFloat(r.value) : r.type === "boolean" && (o = r.value.toLowerCase() === "true"), n[r.name] = o;
  }
  return { ...t, ...n };
}, ie = async (s, t, n = []) => {
  var _a;
  const r = { model: s.model, messages: t.map((c) => q(c, ["role", "content", "name"])), stream: s.stream, logprobs: s.logprobs, ...s.logprobs && { top_logprobs: s.topLogprobs }, ...s.customParams }, o = J(n, r), l = s.baseUrl.endsWith("/") ? s.baseUrl.slice(0, -1) : s.baseUrl, i = await fetch(`${l}/chat/completions`, { method: "POST", headers: { Authorization: `Bearer ${s.apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify(o) });
  return ((_a = i.headers.get("content-type")) == null ? void 0 : _a.includes("text/event-stream")) ? await re(i) : await D(i);
}, he = async (s, t, n, r) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const o = { model: s.model, messages: t.map(({ response: v, rawResponse: f, chunks: k, id: S, fullLogprobs: m, ...a }) => a), stream: true, logprobs: s.logprobs, ...s.logprobs && { top_logprobs: s.topLogprobs }, ...s.customParams }, l = J(n, o), i = s.baseUrl.endsWith("/") ? s.baseUrl.slice(0, -1) : s.baseUrl, c = await fetch(`${i}/chat/completions`, { method: "POST", headers: { Authorization: `Bearer ${s.apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify(l) });
  if (!((_a = c.headers.get("content-type")) == null ? void 0 : _a.includes("text/event-stream"))) return await D(c);
  const b = (_b = c.body) == null ? void 0 : _b.getReader(), y = new TextDecoder(), p = [];
  let h = "";
  const C = [];
  if (b) for (; ; ) {
    const { done: v, value: f } = await b.read();
    if (v) break;
    const S = y.decode(f, { stream: true }).split(`
`);
    for await (const m of S) if (m.startsWith("data: ")) {
      const a = m.slice(6);
      if (a === "[DONE]") continue;
      try {
        const d = JSON.parse(a);
        p.push({ id: crypto.randomUUID(), data: d });
        const L = ((_e = (_d = (_c = d.choices) == null ? void 0 : _c[0]) == null ? void 0 : _d.delta) == null ? void 0 : _e.content) || "", O = (_h = (_g = (_f = d.choices) == null ? void 0 : _f[0]) == null ? void 0 : _g.logprobs) == null ? void 0 : _h.content;
        O && C.push(...O), L && (h += L, await r(L, h));
      } catch (d) {
        console.log(`line:
`, m), console.error(`Parse error:
`, d);
      }
    }
  }
  let g = "";
  try {
    g = p.map((v) => `data: ${JSON.stringify(v.data)}
`).join("");
  } catch {
    g = "Error: cyclic data in response";
  }
  return { id: B(), role: "assistant", content: h, response: (_i = p.at(-1)) == null ? void 0 : _i.data, rawResponse: g, chunks: p, fullLogprobs: C };
};
function pe({ config: s, setConfig: t, models: n, isFetchingModels: r, fetchModels: o, customParamList: l, addCustomParam: i, updateCustomParam: c, removeCustomParam: b }) {
  var _a;
  const y = N.useId(), p = N.useId(), [h, C] = N.useState(""), [g, v] = N.useState("string"), [f, k] = N.useState(""), [S, m] = N.useState(false);
  return e.jsxs("div", { className: "space-y-1", children: [e.jsxs(R, { children: [e.jsx(T, { children: "API Configuration" }), e.jsxs(I, { className: "space-y-1", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-1", children: [e.jsxs(u, { children: [e.jsx(x, { children: "Base URL" }), e.jsx(j, { value: s.baseUrl, onChange: (a) => t({ baseUrl: a.target.value }), placeholder: "https://api.example.com" })] }), e.jsxs(u, { children: [e.jsx(x, { children: "API Key" }), e.jsx(j, { type: "password", value: s.apiKey, onChange: (a) => t({ apiKey: a.target.value }), placeholder: "sk-..." })] })] }), e.jsxs(u, { children: [e.jsx(x, { children: "Model" }), e.jsxs(V, { className: "w-full", children: [e.jsxs(K, { open: S, onOpenChange: m, children: [e.jsx(M, { asChild: true, children: e.jsxs(P, { variant: "outline", role: "combobox", "aria-expanded": S, className: "justify-between flex-1", size: "sm", children: [s.model ? (_a = n.find((a) => a.id === s.model)) == null ? void 0 : _a.id : "Select model...", e.jsx(Z, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })] }) }), e.jsx(W, { className: "w-full p-0", children: e.jsxs(G, { children: [e.jsx(_, { placeholder: "Search model..." }), e.jsxs(X, { children: [e.jsx(H, { children: "No model found." }), e.jsx(Q, { children: n.map((a) => e.jsxs(Y, { value: a.id, onSelect: (d) => {
    t({ model: d === s.model ? "" : d }), m(false);
  }, children: [e.jsx(ee, { className: `mr-2 h-4 w-4 ${s.model === a.id ? "opacity-100" : "opacity-0"}` }), a.id, " (", a.owned_by, ")"] }, a.id)) })] })] }) })] }), e.jsx(P, { size: "sm", onClick: o, disabled: r, children: r ? "Fetching..." : "Fetch Models" })] })] }), e.jsxs("div", { className: "flex items-center space-x-1", children: [e.jsx(F, { id: y, checked: s.stream, onCheckedChange: (a) => t({ stream: a }) }), e.jsx(U, { htmlFor: y, children: "Enable Streaming" })] }), e.jsxs("div", { className: "flex items-center space-x-1", children: [e.jsx(F, { id: p, checked: s.logprobs, onCheckedChange: (a) => t({ logprobs: a }) }), e.jsx(U, { htmlFor: p, children: "Enable Logprobs" })] }), s.logprobs && e.jsxs(u, { children: [e.jsx(x, { children: "Top Logprobs" }), e.jsx(j, { type: "number", value: s.topLogprobs, onChange: (a) => t({ topLogprobs: Number(a.target.value) }), min: 0, max: 20 })] })] })] }), e.jsxs(R, { children: [e.jsx(T, { children: "Custom Parameters" }), e.jsxs(I, { className: "space-y-1", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-1", children: [e.jsxs(u, { children: [e.jsx(x, { children: "Parameter Name" }), e.jsx(j, { value: h, onChange: (a) => C(a.target.value), placeholder: "e.g., temperature" })] }), e.jsxs(u, { children: [e.jsx(x, { children: "Type" }), e.jsxs(E, { value: g, onValueChange: (a) => v(a), children: [e.jsx($, { children: e.jsx(z, {}) }), e.jsxs(A, { children: [e.jsx(w, { value: "string", children: "String" }), e.jsx(w, { value: "number", children: "Number" }), e.jsx(w, { value: "boolean", children: "Boolean" })] })] })] }), e.jsxs(u, { children: [e.jsx(x, { children: "Value" }), e.jsx(j, { value: f, onChange: (a) => k(a.target.value), placeholder: "e.g., 0.7" })] }), e.jsx("div", { className: "flex items-end", children: e.jsx(P, { size: "sm", onClick: () => {
    h.trim() && (i({ name: h.trim(), type: g, value: f }), C(""), k(""));
  }, disabled: !h.trim(), children: "Add Parameter" }) })] }), l.length > 0 && e.jsxs("div", { className: "space-y-0.5", children: [e.jsx(U, { children: "Current Parameters:" }), e.jsx("div", { className: "space-y-0.5", children: l.map((a) => e.jsxs("div", { className: "flex items-center gap-0.5 p-0.5 border rounded", children: [e.jsx(j, { value: a.name, onChange: (d) => c(a.id, { name: d.target.value }), className: "flex-1", placeholder: "Parameter name" }), e.jsxs(E, { value: a.type, onValueChange: (d) => c(a.id, { type: d }), children: [e.jsx($, { className: "w-16", children: e.jsx(z, {}) }), e.jsxs(A, { children: [e.jsx(w, { value: "string", children: "String" }), e.jsx(w, { value: "number", children: "Number" }), e.jsx(w, { value: "boolean", children: "Boolean" })] })] }), e.jsx(j, { value: a.value, onChange: (d) => c(a.id, { value: d.target.value }), className: "flex-1", placeholder: "Value" }), e.jsx(P, { variant: "outline", size: "sm", onClick: () => b(a.id), children: "Remove" })] }, a.id)) })] })] })] })] });
}
export {
  pe as C,
  he as a,
  ie as e,
  de as f
};
