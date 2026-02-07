import { r, au as w, av as k } from "./react-CbLQ1BCV.js";
import { n as h } from "./id-OxPLOBIU.js";
import { e as E, a as T } from "./future-lib-llm-ui-react-B5HG0st1.js";
import { a as S, b as C, L as b } from "./app-lib-BV4GtTtn.js";
const D = ["neutral", "stone", "zinc", "gray", "slate"], x = { Classic: ["default", "blue", "violet", "rose"], Featured: ["sakura", "gold", "coffee", "forest", "moonlight", "ocean", "mint", "halloween"], Morandi: ["morandi-green", "morandi-purple", "morandi-grayblue", "morandi-brown"] }, G = Object.values(x).flat(), P = { storageKey: "vite-ui-theme", defaultTheme: "dark", defaultBaseColor: "zinc", defaultPrimaryColor: "violet", theme: "dark", systemTheme: void 0, baseColor: "zinc", primaryColor: "violet", storageKeyOfTheme: "vite-ui-theme", storageKeyOfBaseColor: "vite-ui-base-color", storageKeyOfPrimaryColor: "vite-ui-primary-color", setTheme: () => null, setBaseColor: () => null, setPrimaryColor: () => null }, K = r.createContext(P), j = () => {
  const t = r.useContext(K);
  if (t === void 0) throw new Error("useTheme must be used within a ThemeProvider");
  return t;
}, N = w()(k((t) => ({ messages: [], updateMessages: (c) => t((u) => {
  c(u.messages);
}) }))), F = (t = {}, c = {}) => {
  const u = S((o) => o.config), f = r.useMemo(() => {
    const { models: o, ...l } = u;
    return l;
  }, [u]), g = r.useMemo(() => ({ saveRecord: false, dbName: C.llmStorage.dbName, tableName: C.llmStorage.tableName }), []), { config: m, options: d } = r.useMemo(() => ({ config: { ...f, ...t }, options: { ...g, ...c } }), [f, t, g, c]), y = N(), [L, a] = r.useState({ chunks: [], fullResponse: "", isEnded: false }), v = r.useCallback(async (o, l) => {
    a({ chunks: [], fullResponse: "", isEnded: false });
    const i = { ...m, ...l || {} };
    try {
      const e = await E(i, o, i.customParamList || []);
      if (a({ chunks: e.chunks || [], fullResponse: e.content, isEnded: true }), d.saveRecord) {
        const s = { id: h(), timestamp: /* @__PURE__ */ new Date(), config: i, messages: o, response: e };
        b.utils.getTable().add(s);
      }
    } catch (e) {
      throw console.error("callLLM error:", e), a((s) => ({ ...s, hasError: true, isEnded: true })), e;
    }
  }, [m, d]), M = r.useCallback(async (o, l, i) => {
    a({ chunks: [], fullResponse: "", isEnded: false });
    const e = { ...m, ...i || {} };
    try {
      const s = await T(e, o, e.customParamList || [], async (n, p) => {
        a((R) => ({ ...R, fullResponse: p })), await l(n, p);
      });
      if (a((n) => ({ ...n, chunks: s.chunks || [], isEnded: true })), d.saveRecord) {
        const n = { id: h(), timestamp: /* @__PURE__ */ new Date(), config: e, messages: o, response: s };
        b.utils.getTable().add(n);
      }
    } catch (s) {
      throw console.error("callLLMStream error:", s), a((n) => ({ ...n, hasError: true, isEnded: true })), s;
    }
  }, [m, d]);
  return { currentResponse: L, previousMessages: y.messages, callLLM: v, callLLMStream: M };
};
export {
  K as T,
  G as a,
  D as b,
  F as c,
  x as p,
  j as u
};
