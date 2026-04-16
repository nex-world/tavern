import { d as D, G as J } from "./react-gFHNOnf5.js";
import { n as y } from "./id-OxPLOBIU.js";
import { p as j } from "./es-toolkit-CstbrnlE.js";
const B = async (i, o) => {
  if (!(i && o)) return console.warn("fetchModels: Missing baseUrl or apiKey"), [];
  try {
    const r = await fetch(`${i}/models`, { headers: { Authorization: `Bearer ${o}`, "Content-Type": "application/json" } });
    if (r.ok) return (await r.json()).data || [];
  } catch (r) {
    console.error("Fetch models error:", r);
  }
  return [];
}, F = (i, o, r, s) => {
  var _a, _b, _c, _d, _e, _f;
  if (!i.startsWith("data: ")) return r;
  const e = i.slice(6);
  if (e === "[DONE]") return r;
  try {
    const t = JSON.parse(e);
    o.push({ id: crypto.randomUUID(), data: t });
    const c = ((_c = (_b = (_a = t.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.delta) == null ? void 0 : _c.content) || "", n = (_f = (_e = (_d = t.choices) == null ? void 0 : _d[0]) == null ? void 0 : _e.logprobs) == null ? void 0 : _f.content;
    return n && s.push(...n), r + c;
  } catch (t) {
    return console.error("Parse error:", t), r;
  }
}, T = (i, o, r, s) => i.split(`
`).reduce((t, c) => F(c, o, t, s), r), E = async (i) => {
  var _a, _b;
  const o = (_a = i.body) == null ? void 0 : _a.getReader(), r = new TextDecoder(), s = [];
  let e = "";
  const t = [];
  if (o) for (; ; ) {
    const { done: n, value: a } = await o.read();
    if (n) break;
    const m = r.decode(a, { stream: true });
    e = T(m, s, e, t);
  }
  const c = (_b = s.at(-1)) == null ? void 0 : _b.data;
  return { id: y(), role: "assistant", content: e, response: c, rawResponse: s.map((n) => `data: ${JSON.stringify(n.data)}
`).join(""), chunks: s, fullLogprobs: t };
}, x = async (i) => {
  var _a, _b, _c;
  const o = await i.json(), r = ((_c = (_b = (_a = o.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) == null ? void 0 : _c.content) || "";
  let s = "";
  try {
    s = JSON.stringify(o, null, 2);
  } catch {
    s = "Error: cyclic data in response";
  }
  return { id: y(), role: "assistant", content: r, response: o, rawResponse: s };
}, N = (i, o) => {
  const r = {};
  for (const s of i) {
    let e = s.value;
    s.type === "number" ? e = Number.parseFloat(s.value) : s.type === "boolean" && (e = s.value.toLowerCase() === "true"), r[s.name] = e;
  }
  return { ...o, ...r };
}, G = async (i, o, r = []) => {
  var _a;
  const s = { model: i.model, messages: o.map((n) => j(n, ["role", "content", "name"])), stream: i.stream, logprobs: i.logprobs, ...i.logprobs && { top_logprobs: i.topLogprobs }, ...i.customParams }, e = N(r, s), t = i.baseUrl.endsWith("/") ? i.baseUrl.slice(0, -1) : i.baseUrl, c = await fetch(`${t}/chat/completions`, { method: "POST", headers: { Authorization: `Bearer ${i.apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify(e) });
  return ((_a = c.headers.get("content-type")) == null ? void 0 : _a.includes("text/event-stream")) ? await E(c) : await x(c);
}, _ = async (i, o, r, s) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const e = { model: i.model, messages: o.map(({ response: v, rawResponse: I, chunks: A, id: w, fullLogprobs: f, ...p }) => p), stream: true, logprobs: i.logprobs, ...i.logprobs && { top_logprobs: i.topLogprobs }, ...i.customParams }, t = N(r, e), c = i.baseUrl.endsWith("/") ? i.baseUrl.slice(0, -1) : i.baseUrl, n = await fetch(`${c}/chat/completions`, { method: "POST", headers: { Authorization: `Bearer ${i.apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify(t) });
  if (!((_a = n.headers.get("content-type")) == null ? void 0 : _a.includes("text/event-stream"))) return await x(n);
  const a = (_b = n.body) == null ? void 0 : _b.getReader(), m = new TextDecoder(), l = [];
  let g = "";
  const b = [];
  if (a) for (; ; ) {
    const { done: v, value: I } = await a.read();
    if (v) break;
    const w = m.decode(I, { stream: true }).split(`
`);
    for await (const f of w) if (f.startsWith("data: ")) {
      const p = f.slice(6);
      if (p === "[DONE]") continue;
      try {
        const u = JSON.parse(p);
        l.push({ id: crypto.randomUUID(), data: u });
        const P = ((_e = (_d = (_c = u.choices) == null ? void 0 : _c[0]) == null ? void 0 : _d.delta) == null ? void 0 : _e.content) || "", C = (_h = (_g = (_f = u.choices) == null ? void 0 : _f[0]) == null ? void 0 : _g.logprobs) == null ? void 0 : _h.content;
        C && b.push(...C), P && (g += P, await s(P, g));
      } catch (u) {
        console.log(`line:
`, f), console.error(`Parse error:
`, u);
      }
    }
  }
  let h = "";
  try {
    h = l.map((v) => `data: ${JSON.stringify(v.data)}
`).join("");
  } catch {
    h = "Error: cyclic data in response";
  }
  return { id: y(), role: "assistant", content: g, response: (_i = l.at(-1)) == null ? void 0 : _i.data, rawResponse: h, chunks: l, fullLogprobs: b };
}, O = "global-llm-config", S = { baseUrl: "https://api.deepseek.com", apiKey: "", model: "", stream: false, logprobs: false, topLogprobs: 0, customParams: {}, customParamList: [], models: [] }, k = (i = "service-default", o = "\u9ED8\u8BA4\u670D\u52A1") => ({ id: i, name: o, config: { ...S } }), U = (i) => i.map((o, r) => {
  var _a, _b;
  return { id: o.id, name: o.name || `\u670D\u52A1 ${r + 1}`, config: { ...S, ...o.config, models: ((_a = o.config) == null ? void 0 : _a.models) || [], customParamList: ((_b = o.config) == null ? void 0 : _b.customParamList) || [] } };
}), R = (i, o) => i.find((s) => s.id === o) || i[0], q = () => {
  try {
    const i = localStorage.getItem(O);
    if (!i) return { version: 2, activeServiceId: "service-default", serviceList: [k()] };
    const o = JSON.parse(i);
    if ("version" in o && o.version === 2 && Array.isArray(o.serviceList) && typeof o.activeServiceId == "string") {
      const s = U(o.serviceList);
      return { version: 2, activeServiceId: R(s, o.activeServiceId).id, serviceList: s };
    }
    return { version: 2, activeServiceId: "service-default", serviceList: [{ id: "service-default", name: "\u9ED8\u8BA4\u670D\u52A1", config: { ...S, ...o, models: o.models || [], customParamList: o.customParamList || [] } }] };
  } catch {
    return { version: 2, activeServiceId: "service-default", serviceList: [k()] };
  }
}, d = (i, o) => {
  const r = { version: 2, activeServiceId: i, serviceList: o };
  localStorage.setItem(O, JSON.stringify(r));
}, $ = q(), M = U($.serviceList), L = R(M, $.activeServiceId), Y = D()(J((i, o) => ({ config: L.config, models: L.config.models || [], isFetchingModels: false, customParamList: L.config.customParamList || [], activeServiceId: L.id, serviceList: M, setConfig: (r) => {
  i((e) => {
    const t = e.serviceList.find((n) => n.id === e.activeServiceId);
    if (!t) return;
    const c = { ...t.config, ...r };
    t.config = c, e.config = c, e.models = c.models || [], e.customParamList = c.customParamList || [];
  });
  const s = o();
  d(s.activeServiceId, s.serviceList);
}, setActiveServiceId: (r) => {
  if (o().activeServiceId === r) return;
  i((e) => {
    const t = e.serviceList.find((c) => c.id === r);
    t && (e.activeServiceId = t.id, e.config = t.config, e.models = t.config.models || [], e.customParamList = t.config.customParamList || []);
  });
  const s = o();
  d(s.activeServiceId, s.serviceList);
}, updateServiceName: (r, s) => {
  const t = s.trim() || "\u672A\u547D\u540D\u670D\u52A1", c = o().serviceList.find((a) => a.id === r);
  if (!c || c.name === t) return;
  i((a) => {
    const m = a.serviceList.find((l) => l.id === r);
    m && (m.name = t);
  });
  const n = o();
  d(n.activeServiceId, n.serviceList);
}, addService: () => {
  i((s) => {
    const e = s.serviceList.length + 1, c = { id: `service-${Date.now()}`, name: `\u670D\u52A1 ${e}`, config: { ...S } };
    s.serviceList.push(c), s.activeServiceId = c.id, s.config = c.config, s.models = c.config.models, s.customParamList = c.config.customParamList;
  });
  const r = o();
  d(r.activeServiceId, r.serviceList);
}, removeService: (r) => {
  i((e) => {
    if (!(e.serviceList.length <= 1) && (e.serviceList = e.serviceList.filter((t) => t.id !== r), e.activeServiceId === r)) {
      const t = e.serviceList[0];
      e.activeServiceId = t.id, e.config = t.config, e.models = t.config.models || [], e.customParamList = t.config.customParamList || [];
    }
  });
  const s = o();
  d(s.activeServiceId, s.serviceList);
}, fetchModels: async () => {
  i((r) => {
    r.isFetchingModels = true;
  });
  try {
    const r = await B(o().config.baseUrl, o().config.apiKey);
    i((e) => {
      const t = e.serviceList.find((c) => c.id === e.activeServiceId);
      if (!t) {
        e.isFetchingModels = false;
        return;
      }
      e.models = r, e.config.models = r, t.config.models = r, e.isFetchingModels = false;
    });
    const s = o();
    d(s.activeServiceId, s.serviceList);
  } catch (r) {
    console.error("Failed to fetch models:", r), i((s) => {
      s.isFetchingModels = false;
    });
  }
}, addCustomParam: (r) => {
  const s = Date.now().toString();
  i((t) => {
    t.customParamList.push({ ...r, id: s }), t.config.customParamList = [...t.customParamList];
    const c = t.serviceList.find((n) => n.id === t.activeServiceId);
    c && (c.config.customParamList = [...t.customParamList]);
  });
  const e = o();
  d(e.activeServiceId, e.serviceList);
}, updateCustomParam: (r, s) => {
  i((t) => {
    const c = t.customParamList.findIndex((n) => n.id === r);
    if (c !== -1) {
      t.customParamList[c] = { ...t.customParamList[c], ...s }, t.config.customParamList = [...t.customParamList];
      const n = t.serviceList.find((a) => a.id === t.activeServiceId);
      n && (n.config.customParamList = [...t.customParamList]);
    }
  });
  const e = o();
  d(e.activeServiceId, e.serviceList);
}, removeCustomParam: (r) => {
  i((e) => {
    e.customParamList = e.customParamList.filter((c) => c.id !== r), e.config.customParamList = [...e.customParamList];
    const t = e.serviceList.find((c) => c.id === e.activeServiceId);
    t && (t.config.customParamList = [...e.customParamList]);
  });
  const s = o();
  d(s.activeServiceId, s.serviceList);
} })));
export {
  _ as a,
  G as e,
  Y as u
};
