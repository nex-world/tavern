import { a as p } from "./components-and-styling-lnR2ABT4.js";
import { t as P } from "./@tailwind-COJ8Fh6m.js";
import { au as g, aw as L, av as C } from "./react-C1-gKlL3.js";
import { u as b } from "./es-toolkit-CstbrnlE.js";
import { f as h } from "./future-lib-llm-ui-react-Dc-qGejy.js";
import { k as S, m as y } from "./@tanstack-D0F3M8cX.js";
import { o as w, a as c, b as M, d as N, s as x } from "./zod-grrOrvCS.js";
function G(...o) {
  return P(p(o));
}
const f = { llmStorage: { dbName: "llm-records-db", tableName: "llm-messages" }, historyStoreName: "app-history-store" }, J = g()(L((o) => ({ recentPages: [], addPage: (i) => o((a) => ({ recentPages: b([i, ...a.recentPages.filter((s) => s !== i)]).slice(0, 10) })) }), { name: f == null ? void 0 : f.historyStoreName })), d = "global-llm-config", n = { baseUrl: "https://api.deepseek.com", apiKey: "", model: "", stream: false, logprobs: false, topLogprobs: 0, customParams: {}, customParamList: [], models: [] }, l = () => {
  try {
    const o = localStorage.getItem(d);
    return o ? { ...n, ...JSON.parse(o) } : n;
  } catch {
    return n;
  }
}, r = (o) => {
  localStorage.setItem(d, JSON.stringify(o));
}, U = g()(C((o, i) => ({ config: l(), models: l().models || [], isFetchingModels: false, customParamList: l().customParamList || [], setConfig: (a) => {
  o((s) => {
    s.config = { ...s.config, ...a };
  });
  const e = i().config;
  r(e);
}, fetchModels: async () => {
  o((a) => {
    a.isFetchingModels = true;
  });
  try {
    const a = await h(i().config.baseUrl, i().config.apiKey);
    o((s) => {
      s.models = a, s.config.models = a, s.isFetchingModels = false;
    });
    const e = i().config;
    r(e);
  } catch (a) {
    console.error("Failed to fetch models:", a), o((e) => {
      e.isFetchingModels = false;
    });
  }
}, addCustomParam: (a) => {
  const e = Date.now().toString();
  o((t) => {
    t.customParamList.push({ ...a, id: e }), t.config.customParamList = [...t.customParamList];
  });
  const s = i().config;
  r(s);
}, updateCustomParam: (a, e) => {
  o((t) => {
    const m = t.customParamList.findIndex((u) => u.id === a);
    m !== -1 && (t.customParamList[m] = { ...t.customParamList[m], ...e }, t.config.customParamList = [...t.customParamList]);
  });
  const s = i().config;
  r(s);
}, removeCustomParam: (a) => {
  o((s) => {
    s.customParamList = s.customParamList.filter((t) => t.id !== a), s.config.customParamList = [...s.customParamList];
  });
  const e = i().config;
  r(e);
} }))), F = w({ id: x(), timestamp: N(), config: c(), messages: M(c()), response: c() }), j = S(y({ id: f.llmStorage.tableName, schema: F, getKey: (o) => o.id, dbName: f.llmStorage.dbName }));
export {
  j as L,
  U as a,
  f as b,
  G as c,
  J as u
};
