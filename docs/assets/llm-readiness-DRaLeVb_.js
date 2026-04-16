function a(e) {
  const i = [];
  return (!(e == null ? void 0 : e.baseUrl) || e.baseUrl.trim() === "") && i.push({ key: "baseUrl", label: "API \u5730\u5740", description: "LLM \u670D\u52A1\u7684 API \u57FA\u7840\u5730\u5740\u672A\u8BBE\u7F6E" }), (!(e == null ? void 0 : e.apiKey) || e.apiKey.trim() === "") && i.push({ key: "apiKey", label: "API \u5BC6\u94A5", description: "LLM \u670D\u52A1\u7684 API \u5BC6\u94A5\u672A\u8BBE\u7F6E" }), (!(e == null ? void 0 : e.model) || e.model.trim() === "") && i.push({ key: "model", label: "\u6A21\u578B", description: "\u672A\u9009\u62E9\u8981\u4F7F\u7528\u7684 LLM \u6A21\u578B" }), i;
}
function l() {
  return { isReady: false, missingItems: [{ key: "baseUrl", label: "API \u5730\u5740", description: "LLM \u914D\u7F6E\u6570\u636E\u89E3\u6790\u5931\u8D25" }, { key: "apiKey", label: "API \u5BC6\u94A5", description: "LLM \u914D\u7F6E\u6570\u636E\u89E3\u6790\u5931\u8D25" }, { key: "model", label: "\u6A21\u578B", description: "LLM \u914D\u7F6E\u6570\u636E\u89E3\u6790\u5931\u8D25" }] };
}
function r(e) {
  const i = a(e);
  return { isReady: i.length === 0, missingItems: i };
}
function c() {
  const e = "global-llm-config";
  try {
    const i = localStorage.getItem(e);
    if (!i) return r(null);
    const s = JSON.parse(i);
    if ("version" in s && s.version === 2 && Array.isArray(s.serviceList) && s.serviceList.length > 0) {
      const t = s.serviceList.find((n) => n.id === s.activeServiceId) || s.serviceList[0];
      return r(t == null ? void 0 : t.config);
    }
    return r(s);
  } catch {
    return l();
  }
}
export {
  r as a,
  c
};
