import { d as x, aE as J } from "./react-BQpw03Eg.js";
import { n as L } from "./id-OxPLOBIU.js";
import { p as M } from "./es-toolkit-CstbrnlE.js";
const j = async (e, a) => {
  if (!(e && a)) return console.warn("fetchModels: Missing baseUrl or apiKey"), [];
  try {
    const o = await fetch(`${e}/models`, { headers: { Authorization: `Bearer ${a}`, "Content-Type": "application/json" } });
    if (o.ok) return (await o.json()).data || [];
  } catch (o) {
    console.error("Fetch models error:", o);
  }
  return [];
}, B = (e, a, o, s) => {
  var _a, _b, _c, _d, _e, _f;
  if (!e.startsWith("data: ")) return o;
  const t = e.slice(6);
  if (t === "[DONE]") return o;
  try {
    const r = JSON.parse(t);
    a.push({ id: crypto.randomUUID(), data: r });
    const n = ((_c = (_b = (_a = r.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.delta) == null ? void 0 : _c.content) || "", c = (_f = (_e = (_d = r.choices) == null ? void 0 : _d[0]) == null ? void 0 : _e.logprobs) == null ? void 0 : _f.content;
    return c && s.push(...c), o + n;
  } catch (r) {
    return console.error("Parse error:", r), o;
  }
}, T = (e, a, o, s) => e.split(`
`).reduce((r, n) => B(n, a, r, s), o), $ = async (e) => {
  var _a, _b;
  const a = (_a = e.body) == null ? void 0 : _a.getReader(), o = new TextDecoder(), s = [];
  let t = "";
  const r = [];
  if (a) for (; ; ) {
    const { done: c, value: d } = await a.read();
    if (c) break;
    const h = o.decode(d, { stream: true });
    t = T(h, s, t, r);
  }
  const n = (_b = s.at(-1)) == null ? void 0 : _b.data;
  return { id: L(), role: "assistant", content: t, response: n, rawResponse: s.map((c) => `data: ${JSON.stringify(c.data)}
`).join(""), chunks: s, fullLogprobs: r };
}, U = async (e) => {
  var _a, _b, _c;
  const a = await e.json(), o = ((_c = (_b = (_a = a.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) == null ? void 0 : _c.content) || "";
  let s = "";
  try {
    s = JSON.stringify(a, null, 2);
  } catch {
    s = "Error: cyclic data in response";
  }
  return { id: L(), role: "assistant", content: o, response: a, rawResponse: s };
}, N = (e, a) => {
  const o = {};
  for (const s of e) {
    let t = s.value;
    s.type === "number" ? t = Number.parseFloat(s.value) : s.type === "boolean" && (t = s.value.toLowerCase() === "true"), o[s.name] = t;
  }
  return { ...a, ...o };
}, q = async (e, a, o = []) => {
  var _a;
  const s = { model: e.model, messages: a.map((c) => M(c, ["role", "content", "name"])), stream: e.stream, logprobs: e.logprobs, ...e.logprobs && { top_logprobs: e.topLogprobs }, ...e.customParams }, t = N(o, s), r = e.baseUrl.endsWith("/") ? e.baseUrl.slice(0, -1) : e.baseUrl, n = await fetch(`${r}/chat/completions`, { method: "POST", headers: { Authorization: `Bearer ${e.apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify(t) });
  return ((_a = n.headers.get("content-type")) == null ? void 0 : _a.includes("text/event-stream")) ? await $(n) : await U(n);
}, I = async (e, a, o, s) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const t = { model: e.model, messages: a.map(({ response: u, rawResponse: C, chunks: v, id: O, fullLogprobs: p, ...f }) => f), stream: true, logprobs: e.logprobs, ...e.logprobs && { top_logprobs: e.topLogprobs }, ...e.customParams }, r = N(o, t), n = e.baseUrl.endsWith("/") ? e.baseUrl.slice(0, -1) : e.baseUrl, c = await fetch(`${n}/chat/completions`, { method: "POST", headers: { Authorization: `Bearer ${e.apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify(r) });
  if (!((_a = c.headers.get("content-type")) == null ? void 0 : _a.includes("text/event-stream"))) return await U(c);
  const d = (_b = c.body) == null ? void 0 : _b.getReader(), h = new TextDecoder(), m = [];
  let g = "";
  const S = [];
  if (d) for (; ; ) {
    const { done: u, value: C } = await d.read();
    if (u) break;
    const O = h.decode(C, { stream: true }).split(`
`);
    for await (const p of O) if (p.startsWith("data: ")) {
      const f = p.slice(6);
      if (f === "[DONE]") continue;
      try {
        const i = JSON.parse(f);
        m.push({ id: crypto.randomUUID(), data: i });
        const y = ((_e = (_d = (_c = i.choices) == null ? void 0 : _c[0]) == null ? void 0 : _d.delta) == null ? void 0 : _e.content) || "", k = (_h = (_g = (_f = i.choices) == null ? void 0 : _f[0]) == null ? void 0 : _g.logprobs) == null ? void 0 : _h.content;
        k && S.push(...k), y && (g += y, await s(y, g));
      } catch (i) {
        console.log(`line:
`, p), console.error(`Parse error:
`, i);
      }
    }
  }
  let b = "";
  try {
    b = m.map((u) => `data: ${JSON.stringify(u.data)}
`).join("");
  } catch {
    b = "Error: cyclic data in response";
  }
  return { id: L(), role: "assistant", content: g, response: (_i = m.at(-1)) == null ? void 0 : _i.data, rawResponse: b, chunks: m, fullLogprobs: S };
}, R = "global-llm-config", w = { baseUrl: "https://api.deepseek.com", apiKey: "", model: "", stream: false, logprobs: false, topLogprobs: 0, customParams: {}, customParamList: [], models: [] }, P = () => {
  try {
    const e = localStorage.getItem(R);
    return e ? { ...w, ...JSON.parse(e) } : w;
  } catch {
    return w;
  }
}, l = (e) => {
  localStorage.setItem(R, JSON.stringify(e));
}, K = x()(J((e, a) => ({ config: P(), models: P().models || [], isFetchingModels: false, customParamList: P().customParamList || [], setConfig: (o) => {
  e((t) => {
    t.config = { ...t.config, ...o };
  });
  const s = a().config;
  l(s);
}, fetchModels: async () => {
  e((o) => {
    o.isFetchingModels = true;
  });
  try {
    const o = await j(a().config.baseUrl, a().config.apiKey);
    e((t) => {
      t.models = o, t.config.models = o, t.isFetchingModels = false;
    });
    const s = a().config;
    l(s);
  } catch (o) {
    console.error("Failed to fetch models:", o), e((s) => {
      s.isFetchingModels = false;
    });
  }
}, addCustomParam: (o) => {
  const s = Date.now().toString();
  e((r) => {
    r.customParamList.push({ ...o, id: s }), r.config.customParamList = [...r.customParamList];
  });
  const t = a().config;
  l(t);
}, updateCustomParam: (o, s) => {
  e((r) => {
    const n = r.customParamList.findIndex((c) => c.id === o);
    n !== -1 && (r.customParamList[n] = { ...r.customParamList[n], ...s }, r.config.customParamList = [...r.customParamList]);
  });
  const t = a().config;
  l(t);
}, removeCustomParam: (o) => {
  e((t) => {
    t.customParamList = t.customParamList.filter((r) => r.id !== o), t.config.customParamList = [...t.customParamList];
  });
  const s = a().config;
  l(s);
} })));
export {
  q as a,
  I as e,
  K as u
};
