import { a as P } from "./components-and-styling-lnR2ABT4.js";
import { t as p } from "./@tailwind-COJ8Fh6m.js";
import { ar as g, at as L, as as C } from "./react-DL1cgx8I.js";
import { u as b } from "./es-toolkit-CstbrnlE.js";
import { f as h } from "./future-lib-llm-ui-react-6L6xN7Md.js";
import { k as S, m as y } from "./@tanstack-BioXF0H0.js";
import { o as w, a as c, b as M, d as N, s as x } from "./zod-grrOrvCS.js";
function J(...o) {
  return p(P(o));
}
const f = { llmStorage: { dbName: "llm-records-db", tableName: "llm-messages" }, historyStoreName: "app-history-store" }, U = g()(L((o) => ({ recentPages: [], addPage: (t) => o((a) => ({ recentPages: b([t, ...a.recentPages.filter((s) => s !== t)]).slice(0, 10) })) }), { name: f == null ? void 0 : f.historyStoreName })), d = "global-llm-config", n = { baseUrl: "", apiKey: "", model: "", stream: false, logprobs: false, topLogprobs: 0, customParams: {}, customParamList: [], models: [] }, l = () => {
  try {
    const o = localStorage.getItem(d);
    return o ? { ...n, ...JSON.parse(o) } : n;
  } catch {
    return n;
  }
}, i = (o) => {
  localStorage.setItem(d, JSON.stringify(o));
}, j = g()(C((o, t) => ({ config: l(), models: l().models || [], isFetchingModels: false, customParamList: l().customParamList || [], setConfig: (a) => {
  o((s) => {
    s.config = { ...s.config, ...a };
  });
  const e = t().config;
  i(e);
}, fetchModels: async () => {
  o((a) => {
    a.isFetchingModels = true;
  });
  try {
    const a = await h(t().config.baseUrl, t().config.apiKey);
    o((s) => {
      s.models = a, s.config.models = a, s.isFetchingModels = false;
    });
    const e = t().config;
    i(e);
  } catch (a) {
    console.error("Failed to fetch models:", a), o((e) => {
      e.isFetchingModels = false;
    });
  }
}, addCustomParam: (a) => {
  const e = Date.now().toString();
  o((r) => {
    r.customParamList.push({ ...a, id: e }), r.config.customParamList = [...r.customParamList];
  });
  const s = t().config;
  i(s);
}, updateCustomParam: (a, e) => {
  o((r) => {
    const m = r.customParamList.findIndex((u) => u.id === a);
    m !== -1 && (r.customParamList[m] = { ...r.customParamList[m], ...e }, r.config.customParamList = [...r.customParamList]);
  });
  const s = t().config;
  i(s);
}, removeCustomParam: (a) => {
  o((s) => {
    s.customParamList = s.customParamList.filter((r) => r.id !== a), s.config.customParamList = [...s.customParamList];
  });
  const e = t().config;
  i(e);
} }))), F = w({ id: x(), timestamp: N(), config: c(), messages: M(c()), response: c() }), k = S(y({ id: f.llmStorage.tableName, schema: F, getKey: (o) => o.id, dbName: f.llmStorage.dbName }));
export {
  k as L,
  j as a,
  f as b,
  J as c,
  U as u
};
