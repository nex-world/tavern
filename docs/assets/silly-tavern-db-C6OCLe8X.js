var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as u } from "./@tanstack-Bw4lGhTw.js";
import { h as M, P as N } from "./silly-tavern-shared-DgvARXo1.js";
import { R } from "./silly-tavern-engine-D0R6Sr8P.js";
import { o as O, c as P, n as T, s as o, r as C, a as D } from "./zod-grrOrvCS.js";
import { D as d } from "./dexie-Ca-96kR6.js";
import { bI as j, c6 as $ } from "./react-vendor-C1AjJau_.js";
import { u as c, x as F, w as v } from "./tanstack-vendor-BB7HWJ-3.js";
const K = N, X = R, k = O({ id: o().describe("\u4F1A\u8BDDID"), title: o().optional().describe("\u4F1A\u8BDD\u6807\u9898"), contextId: o().optional().nullable().describe("\u5173\u8054\u7684\u4E0A\u4E0B\u6587\u7684ID"), mode: o().describe("\u6A21\u5F0F"), modeConfig: C(o(), D()).describe("\u6A21\u5F0F\u914D\u7F6E"), modeState: C(o(), D()).describe("\u6A21\u5F0F\u4E13\u7528\u72B6\u6001"), characterId: o().optional().describe("\u89D2\u8272ID"), challengeId: o().optional().describe("\u6311\u6218ID"), createdAt: T().describe("\u521B\u5EFA\u65F6\u95F4"), updatedAt: T().describe("\u66F4\u65B0\u65F6\u95F4"), isActive: P().optional().describe("\u662F\u5426\u6D3B\u8DC3") }), z = M, r = { MASTER_DB_NAME: "silly-tavern-master-db", SESSION_DB_PREFIX: "silly-tavern-session-" };
function L(e) {
  return typeof e == "object" && e !== null && $(e) !== void 0;
}
function b(e) {
  if (L(e)) return j(e);
  if (Array.isArray(e)) return e.map((t) => b(t));
  if (e && typeof e == "object") {
    const t = {};
    for (const [a, s] of Object.entries(e)) t[a] = b(s);
    return t;
  }
  return e;
}
function q(e) {
  const t = `${r.SESSION_DB_PREFIX}${e}`, a = new d(t);
  return a.version(2).stores({ contextItems: "id, type, timestamp, idx" }), { contextItems: c(u({ id: "contextItems", schema: z, getKey: (s) => s.id || "", dbName: t })), dexieInstance: a };
}
const m = /* @__PURE__ */ new Map(), _ = typeof BroadcastChannel < "u" ? new BroadcastChannel("silly-tavern-session-db") : null;
_ == null ? void 0 : _.addEventListener("message", (e) => {
  const t = e.data;
  (t == null ? void 0 : t.type) === "close" && t.sessionId && h(t.sessionId);
});
class A {
  constructor(t) {
    __publicField(this, "sessionId");
    __publicField(this, "database");
    this.sessionId = t, this.database = this.initDatabase();
  }
  initDatabase() {
    let t = m.get(this.sessionId);
    return t || (t = q(this.sessionId), m.set(this.sessionId, t)), t;
  }
  async getContextItems() {
    return (await this.database.contextItems.utils.getTable().toArray()).sort((s, l) => {
      const f = s.idx ?? 0, p = l.idx ?? 0;
      if (f !== p) return f - p;
      const S = s.orderRef ?? 0, I = l.orderRef ?? 0;
      if (S !== I) return S - I;
      const w = s.timestamp ?? 0, x = l.timestamp ?? 0;
      return w !== x ? w - x : (s.id || "").localeCompare(l.id || "");
    });
  }
  get contextItemsCollectionInstance() {
    return this.database.contextItems;
  }
  async addContextItem(t) {
    return await this.database.contextItems.utils.getTable().put(b(t));
  }
  async addContextItems(t) {
    return await this.database.contextItems.utils.getTable().bulkPut(b(t));
  }
  async deleteContextItem(t) {
    return await this.database.contextItems.utils.getTable().delete(t);
  }
  async clearContextItems() {
    return await this.database.contextItems.utils.getTable().clear();
  }
}
function h(e) {
  const t = `${r.SESSION_DB_PREFIX}${e}`, a = m.get(e);
  if (a) {
    try {
      a.dexieInstance.close();
    } catch (s) {
      console.warn(`Failed to close database ${t} before deletion:`, s);
    }
    m.delete(e);
  }
}
function E(e) {
  _ == null ? void 0 : _.postMessage({ type: "close", sessionId: e });
}
async function B(e) {
  const t = `${r.SESSION_DB_PREFIX}${e}`;
  E(e), h(e);
  try {
    await d.delete(t);
  } catch (a) {
    if (a instanceof Error && a.name === "DatabaseClosedError") {
      console.warn(`Database ${t} is still in use, retrying deletion...`), await new Promise((s) => setTimeout(s, 500));
      try {
        await d.delete(t);
      } catch (s) {
        throw console.error(`Failed to delete database ${t} after retry:`, s), s;
      }
    } else throw a;
  }
}
const Z = Object.freeze(Object.defineProperty({ __proto__: null, SessionDB: A, broadcastCloseSessionDatabase: E, closeSessionDatabase: h, deleteSessionDatabase: B }, Symbol.toStringTag, { value: "Module" })), G = new d(r.MASTER_DB_NAME);
G.version(1).stores({ characters: "id, name, creator, createdAt, updatedAt", challenges: "id, name, createdAt, updatedAt", sessions: "id, characterId, challengeId, mode, updatedAt" });
const g = c(u({ id: "characters", schema: K, getKey: (e) => e.id, dbName: r.MASTER_DB_NAME })), i = c(u({ id: "challenges", schema: X, getKey: (e) => e.id, dbName: r.MASTER_DB_NAME })), y = c(u({ id: "sessions", schema: k, getKey: (e) => e.id, dbName: r.MASTER_DB_NAME })), n = { characters: { getTable: () => g.utils.getTable(), add: async (e) => (await n.characters.getTable()).add(e), put: async (e) => (await n.characters.getTable()).put(e), delete: async (e) => (await n.characters.getTable()).delete(e) }, challenges: { getTable: () => i.utils.getTable(), add: async (e) => (await n.challenges.getTable()).add(e), put: async (e) => (await n.challenges.getTable()).put(e), delete: async (e) => (await n.challenges.getTable()).delete(e), find: async (e) => (await n.challenges.getTable()).get(e), findLive: (e) => c(F({ id: `find-challenge-${e || "none"}`, startSync: true, query: (t) => e ? t.from({ challenge: i }).where(({ challenge: a }) => v(a.id, e)).select(({ challenge: a }) => a) : t.from({ challenge: i }).where(() => false) })) }, sessions: { getTable: () => y.utils.getTable(), add: async (e) => (await n.sessions.getTable()).add(e), put: async (e) => (await n.sessions.getTable()).put(e), update: async (e, t) => (await n.sessions.getTable()).update(e, t), delete: async (e) => {
  await (await n.sessions.getTable()).delete(e), await B(e);
} } }, ee = Object.freeze(Object.defineProperty({ __proto__: null, ChallengesCollection: i, CharactersCollection: g, SessionsMetadataCollection: y, masterDb: n }, Symbol.toStringTag, { value: "Module" })), te = { characters: g, challenges: i, sessions: y, createSessionDB: (e) => new A(e) };
export {
  g as C,
  y as S,
  i as a,
  A as b,
  h as c,
  Z as d,
  ee as e,
  n as m,
  te as s
};
