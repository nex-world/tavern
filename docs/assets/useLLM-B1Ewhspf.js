import { r as n, d as y, G as w } from "./react-gFHNOnf5.js";
import { n as h } from "./id-OxPLOBIU.js";
import { u as N, e as x, a as v } from "./global-llm-config.store-BYX0tcdb.js";
import { a as f } from "./app-configurations-Cz44104t.js";
import { j, k as q } from "./@tanstack-DDpiKjUN.js";
import { o as D, b as g, a as G, e as P, s as T } from "./zod-DPWJ_A9_.js";
const K = D({ id: T(), timestamp: P(), config: g(), messages: G(g()), response: g() }), M = j(q({ id: f.llmStorage.tableName, schema: K, getKey: (r) => r.id, dbName: f.llmStorage.dbName })), O = y()(w((r) => ({ messages: [], updateMessages: (i) => r((m) => {
  i(m.messages);
}) }))), H = (r = {}, i = {}) => {
  const m = N((o) => o.config), p = n.useMemo(() => {
    const { models: o, ...c } = m;
    return c;
  }, [m]), L = n.useMemo(() => ({ saveRecord: false, dbName: f.llmStorage.dbName, tableName: f.llmStorage.tableName }), []), { config: u, options: d } = n.useMemo(() => ({ config: { ...p, ...r }, options: { ...L, ...i } }), [p, r, L, i]), R = O(), [S, t] = n.useState({ chunks: [], fullResponse: "", isEnded: false }), C = n.useCallback(async (o, c) => {
    t({ chunks: [], fullResponse: "", isEnded: false });
    const l = { ...u, ...c || {} };
    try {
      const e = await x(l, o, l.customParamList || []);
      if (t({ chunks: e.chunks || [], fullResponse: e.content, isEnded: true }), d.saveRecord) {
        const s = { id: h(), timestamp: /* @__PURE__ */ new Date(), config: l, messages: o, response: e };
        M.utils.getTable().add(s);
      }
    } catch (e) {
      throw console.error("callLLM error:", e), t((s) => ({ ...s, hasError: true, isEnded: true })), e;
    }
  }, [u, d]), E = n.useCallback(async (o, c, l) => {
    t({ chunks: [], fullResponse: "", isEnded: false });
    const e = { ...u, ...l || {} };
    try {
      const s = await v(e, o, e.customParamList || [], async (a, b) => {
        t((k) => ({ ...k, fullResponse: b })), await c(a, b);
      });
      if (t((a) => ({ ...a, chunks: s.chunks || [], isEnded: true })), d.saveRecord) {
        const a = { id: h(), timestamp: /* @__PURE__ */ new Date(), config: e, messages: o, response: s };
        M.utils.getTable().add(a);
      }
    } catch (s) {
      throw console.error("callLLMStream error:", s), t((a) => ({ ...a, hasError: true, isEnded: true })), s;
    }
  }, [u, d]);
  return { currentResponse: S, previousMessages: R.messages, callLLM: C, callLLMStream: E };
};
export {
  H as u
};
