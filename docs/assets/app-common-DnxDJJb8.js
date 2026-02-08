import { r as m, b2 as S, b3 as K, b4 as R } from "./react-vendor-C1AjJau_.js";
import { a as O } from "./components-and-styling-lnR2ABT4.js";
import { t as _ } from "./@tailwind-COJ8Fh6m.js";
import { n as P } from "./id-OxPLOBIU.js";
import { u as I } from "./es-toolkit-CstbrnlE.js";
import { f as F, e as U, a as D } from "./future-lib-llm-ui-react-jbeTDxFo.js";
import { d as G } from "./@tanstack-Bw4lGhTw.js";
import { u as q } from "./tanstack-vendor-BB7HWJ-3.js";
import { o as z, a as b, b as B, d as j, s as A } from "./zod-grrOrvCS.js";
const ne = ["neutral", "stone", "zinc", "gray", "slate"], J = { Classic: ["default", "blue", "violet", "rose"], Featured: ["sakura", "gold", "coffee", "forest", "moonlight", "ocean", "mint", "halloween"], Morandi: ["morandi-green", "morandi-purple", "morandi-grayblue", "morandi-brown"] }, ie = Object.values(J).flat(), Y = { storageKey: "vite-ui-theme", defaultTheme: "dark", defaultBaseColor: "zinc", defaultPrimaryColor: "violet", theme: "dark", systemTheme: void 0, baseColor: "zinc", primaryColor: "violet", storageKeyOfTheme: "vite-ui-theme", storageKeyOfBaseColor: "vite-ui-base-color", storageKeyOfPrimaryColor: "vite-ui-primary-color", setTheme: () => null, setBaseColor: () => null, setPrimaryColor: () => null }, H = m.createContext(Y), ce = () => {
  const e = m.useContext(H);
  if (e === void 0) throw new Error("useTheme must be used within a ThemeProvider");
  return e;
};
function le(...e) {
  return _(O(e));
}
const M = "__NexTavern_UUID__";
function me() {
  if (typeof window > "u") return "";
  let e = localStorage.getItem(M);
  return e || (e = P(), localStorage.setItem(M, e)), e;
}
const h = { llmStorage: { dbName: "llm-records-db", tableName: "llm-messages" }, historyStoreName: "app-history-store" }, ue = S()(K((e) => ({ recentPages: [], addPage: (r) => e((o) => ({ recentPages: I([r, ...o.recentPages.filter((s) => s !== r)]).slice(0, 10) })) }), { name: h == null ? void 0 : h.historyStoreName })), W = z({ id: A(), timestamp: j(), config: b(), messages: B(b()), response: b() }), v = q(G({ id: h.llmStorage.tableName, schema: W, getKey: (e) => e.id, dbName: h.llmStorage.dbName })), E = "global-llm-config", L = { baseUrl: "https://api.deepseek.com", apiKey: "", model: "", stream: false, logprobs: false, topLogprobs: 0, customParams: {}, customParamList: [], models: [] }, y = () => {
  try {
    const e = localStorage.getItem(E);
    return e ? { ...L, ...JSON.parse(e) } : L;
  } catch {
    return L;
  }
}, p = (e) => {
  localStorage.setItem(E, JSON.stringify(e));
}, $ = S()(R((e, r) => ({ config: y(), models: y().models || [], isFetchingModels: false, customParamList: y().customParamList || [], setConfig: (o) => {
  e((s) => {
    s.config = { ...s.config, ...o };
  });
  const a = r().config;
  p(a);
}, fetchModels: async () => {
  e((o) => {
    o.isFetchingModels = true;
  });
  try {
    const o = await F(r().config.baseUrl, r().config.apiKey);
    e((s) => {
      s.models = o, s.config.models = o, s.isFetchingModels = false;
    });
    const a = r().config;
    p(a);
  } catch (o) {
    console.error("Failed to fetch models:", o), e((a) => {
      a.isFetchingModels = false;
    });
  }
}, addCustomParam: (o) => {
  const a = Date.now().toString();
  e((t) => {
    t.customParamList.push({ ...o, id: a }), t.config.customParamList = [...t.customParamList];
  });
  const s = r().config;
  p(s);
}, updateCustomParam: (o, a) => {
  e((t) => {
    const c = t.customParamList.findIndex((C) => C.id === o);
    c !== -1 && (t.customParamList[c] = { ...t.customParamList[c], ...a }, t.config.customParamList = [...t.customParamList]);
  });
  const s = r().config;
  p(s);
}, removeCustomParam: (o) => {
  e((s) => {
    s.customParamList = s.customParamList.filter((t) => t.id !== o), s.config.customParamList = [...s.customParamList];
  });
  const a = r().config;
  p(a);
} }))), Q = S()(R((e) => ({ messages: [], updateMessages: (r) => e((o) => {
  r(o.messages);
}) }))), de = (e = {}, r = {}) => {
  const o = $((l) => l.config), a = m.useMemo(() => {
    const { models: l, ...f } = o;
    return f;
  }, [o]), s = m.useMemo(() => ({ saveRecord: false, dbName: h.llmStorage.dbName, tableName: h.llmStorage.tableName }), []), { config: t, options: c } = m.useMemo(() => ({ config: { ...a, ...e }, options: { ...s, ...r } }), [a, e, s, r]), C = Q(), [N, u] = m.useState({ chunks: [], fullResponse: "", isEnded: false }), T = m.useCallback(async (l, f) => {
    u({ chunks: [], fullResponse: "", isEnded: false });
    const g = { ...t, ...f || {} };
    try {
      const n = await U(g, l, g.customParamList || []);
      if (u({ chunks: n.chunks || [], fullResponse: n.content, isEnded: true }), c.saveRecord) {
        const i = { id: P(), timestamp: /* @__PURE__ */ new Date(), config: g, messages: l, response: n };
        v.utils.getTable().add(i);
      }
    } catch (n) {
      throw console.error("callLLM error:", n), u((i) => ({ ...i, hasError: true, isEnded: true })), n;
    }
  }, [t, c]), x = m.useCallback(async (l, f, g) => {
    u({ chunks: [], fullResponse: "", isEnded: false });
    const n = { ...t, ...g || {} };
    try {
      const i = await D(n, l, n.customParamList || [], async (d, w) => {
        u((k) => ({ ...k, fullResponse: w })), await f(d, w);
      });
      if (u((d) => ({ ...d, chunks: i.chunks || [], isEnded: true })), c.saveRecord) {
        const d = { id: P(), timestamp: /* @__PURE__ */ new Date(), config: n, messages: l, response: i };
        v.utils.getTable().add(d);
      }
    } catch (i) {
      throw console.error("callLLMStream error:", i), u((d) => ({ ...d, hasError: true, isEnded: true })), i;
    }
  }, [t, c]);
  return { currentResponse: N, previousMessages: C.messages, callLLM: T, callLLMStream: x };
};
export {
  H as T,
  ce as a,
  ne as b,
  ie as c,
  le as d,
  $ as e,
  de as f,
  me as g,
  J as p,
  ue as u
};
