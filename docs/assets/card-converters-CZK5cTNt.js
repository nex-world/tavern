import { x as y, y as p, z as A } from "./vendor-CjYbcnj-.js";
import { c as b, P as w, d as _, e as v } from "./db-master-l33tB5ke.js";
function E(e) {
  return { keys: e.keys || [], content: e.content || "", extensions: e.extensions || {}, enabled: e.enabled !== void 0 ? e.enabled : true, insertion_order: e.insertion_order !== void 0 ? e.insertion_order : 0, case_sensitive: e.case_sensitive !== void 0 ? e.case_sensitive : false, use_regex: e.use_regex !== void 0 ? e.use_regex : false, constant: e.constant !== void 0 ? e.constant : false, name: e.name || void 0, priority: e.priority || void 0, id: e.id || void 0, comment: e.comment || void 0, selective: e.selective !== void 0 ? e.selective : false, secondary_keys: e.secondary_keys || void 0, position: e.position || void 0 };
}
function B(e) {
  if (e) return { name: e.name || void 0, description: e.description || void 0, scan_depth: e.scan_depth || void 0, token_budget: e.token_budget || void 0, recursive_scanning: e.recursive_scanning !== void 0 ? e.recursive_scanning : false, extensions: e.extensions || {}, entries: (e.entries || []).map(E) };
}
function u(e) {
  const a = _.parse({ ...e, creator_notes: "", system_prompt: "", post_history_instructions: "", alternate_greetings: [], character_book: void 0, tags: [], creator: "", character_version: "", extensions: {}, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return v.parse({ spec: "chara_card_v3", spec_version: "3.0", data: a });
}
function S(e) {
  const a = { ...e.data };
  a.character_book && (a.character_book = B(a.character_book));
  const t = _.parse({ ...a, assets: void 0, nickname: void 0, creator_notes_multilingual: void 0, source: void 0, group_only_greetings: [], creation_date: void 0, modification_date: void 0 });
  return v.parse({ spec: "chara_card_v3", spec_version: "3.0", data: t });
}
function f(e, a) {
  var _a, _b, _c, _d;
  const t = { ...e.data };
  t.character_book ? t.character_book = B(t.character_book) : t.character_book = void 0;
  const s = _.parse(t), r = ((_a = s.extensions) == null ? void 0 : _a.avatar) || ((_b = s.extensions) == null ? void 0 : _b.image) || void 0;
  let c = a;
  if (!c) {
    if (s.assets) {
      const i = s.assets.find((o) => o.type === "icon" && o.name === "main");
      (i == null ? void 0 : i.uri.startsWith("data:")) && (c = i.uri);
    }
    if (!c && s.extensions) {
      const i = s.extensions.imageBase64 || s.extensions.image;
      i && typeof i == "string" && i.startsWith("data:") && (c = i);
    }
  }
  return w.parse({ ...s, id: crypto.randomUUID(), avatar: r, imageBase64: c, createdAt: s.creation_date || ((_c = s.extensions) == null ? void 0 : _c.create_date) || Date.now(), updatedAt: s.modification_date || ((_d = s.extensions) == null ? void 0 : _d.update_date) || Date.now() });
}
function D(e) {
  const a = { ...e }, t = ["id", "createdAt", "updatedAt", "avatar", "imageBase64"];
  for (const i of t) delete a[i];
  const s = { ...e.extensions || {} };
  e.avatar && (s.avatar = e.avatar), e.imageBase64 && (s.imageBase64 = e.imageBase64);
  let r = a.assets || [];
  if (e.imageBase64) {
    const i = { type: "icon", uri: e.imageBase64, name: "main", ext: "png" }, o = r.findIndex((n) => n.type === "icon" && n.name === "main");
    o >= 0 ? r[o] = i : r = [i, ...r];
  }
  const c = _.parse({ ...a, extensions: s, assets: r, creation_date: e.createdAt, modification_date: e.updatedAt });
  return v.parse({ spec: "chara_card_v3", spec_version: "3.0", data: c });
}
function T(e) {
  const a = JSON.parse(e);
  if (typeof a == "object" && a !== null && "id" in a && "name" in a && "first_mes" in a) return w.parse(a);
  if (typeof a == "object" && a !== null && "spec" in a) {
    const t = a.spec;
    if (t === "chara_card_v3") return f(a);
    if (t === "chara_card_v2") return f(S(a));
  }
  try {
    const t = b.parse(a);
    return f(u(t));
  } catch {
    if (typeof a == "object" && a !== null && "name" in a) {
      const t = a;
      return f(u({ name: t.name || "", description: t.description || "", personality: t.personality || "", scenario: t.scenario || "", first_mes: t.first_mes || "", mes_example: t.mes_example || "" }));
    }
    throw new Error("\u65E0\u6CD5\u89E3\u6790JSON\u4E2D\u7684\u89D2\u8272\u6570\u636E");
  }
}
async function U(e) {
  const a = await e.arrayBuffer(), t = y(new Uint8Array(a)), s = t.find((o) => o.name === "tEXt" && p.decode(o.data).keyword === "chara"), r = t.find((o) => o.name === "tEXt" && p.decode(o.data).keyword === "ccv3"), c = new Blob([a], { type: "image/png" }), i = await new Promise((o) => {
    const n = new FileReader();
    n.onloadend = () => o(n.result), n.readAsDataURL(c);
  });
  if (r) {
    const o = p.decode(r.data), n = JSON.parse(x(o.text));
    return typeof n == "object" && n !== null && "spec" in n && n.spec === "chara_card_v3" ? f(n, i) : f(u(n), i);
  }
  if (s) {
    const o = p.decode(s.data), n = JSON.parse(x(o.text));
    if (typeof n == "object" && n !== null && "spec" in n) {
      const d = n.spec;
      if (d === "chara_card_v3") return f(n, i);
      if (d === "chara_card_v2") return f(S(n), i);
    }
    try {
      const d = b.parse(n);
      return f(u(d), i);
    } catch {
      if (typeof n == "object" && n !== null && "name" in n) {
        const d = n;
        return f(u({ name: d.name || "", description: d.description || "", personality: d.personality || "", scenario: d.scenario || "", first_mes: d.first_mes || "", mes_example: d.mes_example || "" }), i);
      }
      throw new Error("\u65E0\u6CD5\u89E3\u6790\u56FE\u7247\u4E2D\u7684\u89D2\u8272\u6570\u636E");
    }
  }
  throw new Error("\u672A\u5728\u56FE\u7247\u4E2D\u627E\u5230\u89D2\u8272\u6570\u636E (tEXt \u5757\u7F3A\u5931)");
}
function P(e) {
  if (!e.imageBase64) throw new Error("\u89D2\u8272\u6CA1\u6709\u56FE\u50CF\u6570\u636E\uFF0C\u65E0\u6CD5\u5BFC\u51FA\u4E3A PNG \u89D2\u8272\u5361");
  const a = e.imageBase64.split(",")[1], t = atob(a), s = t.length, r = new Uint8Array(s);
  for (let m = 0; m < s; m++) r[m] = t.charCodeAt(m);
  const c = y(r), i = D(e), o = g(JSON.stringify(i)), n = c.filter((m) => !(m.name === "tEXt" && (p.decode(m.data).keyword === "chara" || p.decode(m.data).keyword === "ccv3"))), d = p.encode("ccv3", o), k = { spec: "chara_card_v2", spec_version: "2.0.0", data: i.data }, C = g(JSON.stringify(k)), l = p.encode("chara", C), h = n.findIndex((m) => m.name === "IEND");
  h !== -1 ? n.splice(h, 0, l, d) : n.push(l, d);
  const I = A(n);
  return new Blob([I], { type: "image/png" });
}
const N = /%([0-9A-F]{2})/g;
function g(e) {
  return btoa(encodeURIComponent(e).replace(N, function(t, s) {
    return String.fromCharCode(Number.parseInt(s, 16));
  }));
}
function x(e) {
  return decodeURIComponent(atob(e).split("").map((a) => `%${`00${a.charCodeAt(0).toString(16)}`.slice(-2)}`).join(""));
}
function V(e, a = {}) {
  var _a;
  const { includeImageBase64: t = false } = a, s = D(e);
  if (t) return JSON.stringify(s, null, 2);
  {
    const r = { ...s, data: { ...s.data, assets: ((_a = s.data.assets) == null ? void 0 : _a.map((c) => ({ ...c, uri: c.uri.startsWith("data:") ? "" : c.uri }))) || [] } };
    return JSON.stringify(r, null, 2);
  }
}
export {
  T as a,
  P as b,
  V as e,
  U as i
};
