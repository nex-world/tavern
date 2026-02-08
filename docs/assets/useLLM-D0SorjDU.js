import { r as n, d as y, aE as w } from "./react-BQpw03Eg.js";
import { n as M } from "./id-OxPLOBIU.js";
import { u as N, a as x, e as v } from "./global-llm-config.store-DiEUj8Zz.js";
import { a as f } from "./app-configurations-Cz44104t.js";
import { k as q, m as D } from "./@tanstack-B4B5CfFY.js";
import { o as P, c as g, a as T, e as j, s as G } from "./zod-fbN9ubnj.js";
const K = P({ id: G(), timestamp: j(), config: g(), messages: T(g()), response: g() }), b = q(D({ id: f.llmStorage.tableName, schema: K, getKey: (r) => r.id, dbName: f.llmStorage.dbName })), O = y()(w((r) => ({ messages: [], updateMessages: (i) => r((m) => {
  i(m.messages);
}) }))), H = (r = {}, i = {}) => {
  const m = N((o) => o.config), p = n.useMemo(() => {
    const { models: o, ...c } = m;
    return c;
  }, [m]), L = n.useMemo(() => ({ saveRecord: false, dbName: f.llmStorage.dbName, tableName: f.llmStorage.tableName }), []), { config: u, options: d } = n.useMemo(() => ({ config: { ...p, ...r }, options: { ...L, ...i } }), [p, r, L, i]), R = O(), [E, t] = n.useState({ chunks: [], fullResponse: "", isEnded: false }), S = n.useCallback(async (o, c) => {
    t({ chunks: [], fullResponse: "", isEnded: false });
    const l = { ...u, ...c || {} };
    try {
      const e = await x(l, o, l.customParamList || []);
      if (t({ chunks: e.chunks || [], fullResponse: e.content, isEnded: true }), d.saveRecord) {
        const s = { id: M(), timestamp: /* @__PURE__ */ new Date(), config: l, messages: o, response: e };
        b.utils.getTable().add(s);
      }
    } catch (e) {
      throw console.error("callLLM error:", e), t((s) => ({ ...s, hasError: true, isEnded: true })), e;
    }
  }, [u, d]), C = n.useCallback(async (o, c, l) => {
    t({ chunks: [], fullResponse: "", isEnded: false });
    const e = { ...u, ...l || {} };
    try {
      const s = await v(e, o, e.customParamList || [], async (a, h) => {
        t((k) => ({ ...k, fullResponse: h })), await c(a, h);
      });
      if (t((a) => ({ ...a, chunks: s.chunks || [], isEnded: true })), d.saveRecord) {
        const a = { id: M(), timestamp: /* @__PURE__ */ new Date(), config: e, messages: o, response: s };
        b.utils.getTable().add(a);
      }
    } catch (s) {
      throw console.error("callLLMStream error:", s), t((a) => ({ ...a, hasError: true, isEnded: true })), s;
    }
  }, [u, d]);
  return { currentResponse: E, previousMessages: R.messages, callLLM: S, callLLMStream: C };
};
export {
  H as u
};
