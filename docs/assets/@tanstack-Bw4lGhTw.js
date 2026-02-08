import { D as q, l as G } from "./dexie-Ca-96kR6.js";
import { y as J } from "./vendor-VvUkZRdw.js";
const V = /* @__PURE__ */ new Set(["_dexieMeta", "_updatedAt", "_createdAt"]);
function X(o) {
  if (!o) return o;
  const y = Array.isArray(o) ? [] : {};
  for (const f of Object.keys(o)) V.has(f) || (y[f] = o[f]);
  return y;
}
function H(o, y = false) {
  const f = Date.now(), c = { ...o };
  return c._updatedAt = f, y || (c._createdAt = f), c;
}
const p = J.debug("ts/db:dexie");
function se(o) {
  const y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), _ = o.dbName || "app-db", I = o.tableName || o.storeName || o.id || "collection", g = new q(_);
  g.version(1).stores({ [I]: "&id, _updatedAt, _createdAt" });
  const l = g.table(I), z = async (e, a = o.ackTimeoutMs || 2e3) => {
    const r = [], s = [];
    for (const t of e) {
      if (f.has(t)) {
        r.push(Promise.resolve());
        continue;
      }
      const n = c.get(t);
      if (n) {
        r.push(n.promise);
        continue;
      }
      let u, i;
      const d = new Promise((h, A) => {
        u = h, i = A;
      });
      d.catch(() => {
      }), c.set(t, { promise: d, resolve: u, reject: i });
      const w = setTimeout(() => {
        c.has(t) && (c.delete(t), p("awaitAckedIds:timeout", { id: String(t) }), s.push(t), u());
      }, a);
      d.finally(() => clearTimeout(w)), r.push(d);
    }
    if (await Promise.all(r), s.length > 0) throw new Error(`Timeout waiting for acked ids: ${s.join(", ")}`);
  }, x = async (e, a = o.awaitTimeoutMs || 1e4) => {
    try {
      await z(e, o.ackTimeoutMs || 2e3);
      return;
    } catch {
      try {
        const r = Date.now();
        for (; Date.now() - r < a; ) {
          if (e.every((t) => y.has(t))) return;
          try {
            const t = l.bulkGet;
            let n;
            if (typeof t == "function" ? n = await t.call(l, e) : n = await Promise.all(e.map((i) => l.get(i))), Array.isArray(n) && n.every((i) => i != null) && (U(), await new Promise((d) => setTimeout(d, 100)), e.every((d) => y.has(d)))) return;
          } catch {
          }
          await new Promise((t) => setTimeout(t, 50));
        }
      } catch {
      }
      throw new Error(`Timeout waiting for IDs: ${e.join(", ")}`);
    }
  }, M = async (e) => {
    const { call: a, awaitPersistence: r, timeoutMs: s, swallow: t, debugTag: n } = e;
    if (!r) {
      Promise.resolve().then(a).catch((i) => {
        p(`persistence:${n}:error`, { error: String(i) });
      });
      return;
    }
    const u = s ?? 5e3;
    try {
      const i = Promise.resolve().then(a);
      i.catch(() => {
      });
      let d;
      const w = new Promise((h, A) => {
        d = setTimeout(() => A(new Error("persistence:timeout")), u);
      });
      w.catch(() => {
      });
      try {
        const h = await Promise.race([i, w]);
        return clearTimeout(d), h;
      } catch (h) {
        throw clearTimeout(d), h;
      }
    } catch (i) {
      if (t ?? true) {
        p(`persistence:${n}:error`, { error: String(i) });
        return;
      } else throw i;
    }
  }, T = (e) => {
    if (o.schema) {
      const a = o.schema;
      if (a.parse) try {
        return a.parse(e);
      } catch (r) {
        throw new Error(`Schema validation failed: ${r instanceof Error ? r.message : String(r)}`);
      }
      else if (a.safeParse) {
        const r = a.safeParse(e);
        if (!r.success) throw new Error(`Schema validation failed: ${JSON.stringify(r.error)}`);
        return r.data;
      }
    }
    return e;
  }, $ = (e) => {
    var _a;
    const a = X(e);
    let r = a;
    return ((_a = o.codec) == null ? void 0 : _a.parse) && (r = o.codec.parse(a)), T(r);
  }, D = (e, a = false) => {
    var _a;
    let r = e;
    return ((_a = o.codec) == null ? void 0 : _a.serialize) ? r = o.codec.serialize(e) : r = e, H(r, a);
  }, U = () => {
  }, F = (e, a) => {
    if (e === a) return true;
    if (!e || !a || typeof e != "object" || typeof a != "object") return false;
    const r = Object.keys(e), s = Object.keys(a);
    if (r.length !== s.length) return false;
    for (const t of r) if (e[t] !== a[t]) return false;
    return true;
  }, K = (e) => {
    const { begin: a, write: r, commit: s, markReady: t } = e;
    let n = /* @__PURE__ */ new Map();
    const u = o.syncBatchSize || 1e3;
    let i = false, d, w = false, h = null;
    const A = async () => {
      a();
      let b = 0;
      for (; ; ) {
        let m;
        if (d) m = await l.where("_updatedAt").above(d).limit(u).toArray();
        else try {
          m = await l.orderBy("_updatedAt").limit(u).toArray();
        } catch {
          m = await l.limit(u).toArray();
        }
        if (m.length === 0) break;
        const E = /* @__PURE__ */ new Map();
        for (const k of m) {
          const v = $(k), S = o.getKey(v);
          y.set(S, Date.now()), f.add(S);
          const P = c.get(S);
          if (P) {
            try {
              P.resolve();
            } catch {
            }
            c.delete(S);
          }
          E.set(S, v);
          const L = k._updatedAt;
          L && (!d || L > d) && (d = L);
        }
        for (const [, k] of E) r({ type: "insert", value: k }), n.set(o.getKey(k), k);
        if (b += m.length, m.length < u) break;
      }
      s(), i = true, p("sync:initial-complete", { totalProcessed: b }), b > 5e3 && p("sync:large-collection", { totalProcessed: b });
    }, C = async () => {
      if (await A(), Q(), !w) try {
        t();
      } finally {
        w = true;
      }
    }, Q = () => {
      h = G(async () => {
        if (!i) return n;
        const b = await l.toArray(), m = /* @__PURE__ */ new Map();
        for (const E of b) {
          let k;
          try {
            k = $(E);
          } catch (P) {
            p("parse:skip", { id: E == null ? void 0 : E.id, error: P });
            continue;
          }
          const v = o.getKey(k);
          y.set(v, Date.now()), f.add(v);
          const S = c.get(v);
          if (S) {
            try {
              S.resolve();
            } catch {
            }
            c.delete(v);
          }
          m.set(v, k);
        }
        return m;
      }).subscribe({ next: (b) => {
        if (!i) {
          if (!w) try {
            t();
          } finally {
            w = true;
          }
          return;
        }
        a();
        for (const [m, E] of b) if (n.has(m)) {
          const k = n.get(m), v = E._updatedAt, S = k._updatedAt;
          let P = false;
          v && S ? P = v !== S : P = !F(k, E), P && r({ type: "update", value: E });
        } else r({ type: "insert", value: E });
        for (const [m, E] of n) b.has(m) || r({ type: "delete", value: E });
        if (n = new Map(b), s(), !w) try {
          t();
        } finally {
          w = true;
        }
      }, error: (b) => {
        if (p("sync:live-error", { error: b }), !w) try {
          t();
        } finally {
          w = true;
        }
      } });
    };
    return C(), () => {
      h && h.unsubscribe();
    };
  }, R = async (e) => {
    e.collection.startSyncImmediate();
    const a = e.transaction.mutations, r = a.map((u) => ({ ...D(u.modified, false), id: u.key })), s = g.transaction("rw", l, async () => {
      await l.bulkPut(r);
    });
    s.catch(() => {
    }), await s, await g.table(I).count();
    const t = a.map((u) => u.key), n = Date.now();
    for (const u of t) y.set(u, n);
    return typeof o.onInsert == "function" && await M({ call: () => o.onInsert(e), awaitPersistence: o.awaitPersistence, timeoutMs: o.persistenceTimeoutMs, swallow: o.swallowPersistenceErrors, debugTag: "onInsert" }), t;
  }, B = async (e) => {
    e.collection.startSyncImmediate();
    const a = e.transaction.mutations, r = g.transaction("rw", l, async () => {
      for (const n of a) {
        const u = n.key;
        if (o.rowUpdateMode === "full") {
          const d = { ...D(n.modified, true), id: u };
          await l.put(d);
        } else {
          const i = D(n.changes, true);
          await l.update(u, i);
        }
      }
    });
    r.catch(() => {
    }), await r;
    const s = a.map((n) => n.key), t = Date.now();
    for (const n of s) y.set(n, t);
    return typeof o.onUpdate == "function" && await M({ call: () => o.onUpdate(e), awaitPersistence: o.awaitPersistence, timeoutMs: o.persistenceTimeoutMs, swallow: o.swallowPersistenceErrors, debugTag: "onUpdate" }), s;
  }, N = async (e) => {
    e.collection.startSyncImmediate();
    const r = e.transaction.mutations.map((t) => t.key), s = g.transaction("rw", l, async () => {
      await l.bulkDelete(r);
    });
    return s.catch(() => {
    }), await s, r.forEach((t) => y.delete(t)), typeof o.onDelete == "function" && await M({ call: () => o.onDelete(e), awaitPersistence: o.awaitPersistence, timeoutMs: o.persistenceTimeoutMs, swallow: o.swallowPersistenceErrors, debugTag: "onDelete" }), r;
  }, O = { getTable: () => l, awaitIds: x, refresh: U, refetch: async () => {
    await new Promise((e) => setTimeout(e, 20));
  }, insertLocally: async (e) => {
    const a = T(e), r = D(a, false), s = o.getKey(a);
    try {
      await g.transaction("rw", l, async () => {
        await l.put({ ...r, id: s });
      });
    } catch (n) {
      throw p("insertLocally:error", { key: s, error: String(n) }), new Error(`Failed to insert item locally: ${n instanceof Error ? n.message : String(n)}`);
    }
    y.set(s, Date.now()), f.add(s);
    const t = c.get(s);
    t && (t.resolve(), c.delete(s)), await new Promise((n) => setTimeout(n, 10));
  }, updateLocally: async (e, a) => {
    const r = D(a, true);
    try {
      let t = 0;
      if (await g.transaction("rw", l, async () => {
        o.rowUpdateMode === "full" ? (await l.put({ ...r, id: e }), t = 1) : t = await l.update(e, r);
      }), o.rowUpdateMode !== "full" && t === 0) throw new Error(`Item with id "${e}" not found`);
    } catch (t) {
      throw p("updateLocally:error", { id: e, error: String(t) }), new Error(`Failed to update item locally: ${t instanceof Error ? t.message : String(t)}`);
    }
    y.set(e, Date.now()), f.add(e);
    const s = c.get(e);
    s && (s.resolve(), c.delete(e)), await new Promise((t) => setTimeout(t, 10));
  }, deleteLocally: async (e) => {
    try {
      await g.transaction("rw", l, async () => {
        await l.delete(e);
      });
    } catch (a) {
      throw p("deleteLocally:error", { id: e, error: String(a) }), new Error(`Failed to delete item locally: ${a instanceof Error ? a.message : String(a)}`);
    }
    y.delete(e), f.delete(e), c.delete(e);
  }, bulkInsertLocally: async (e) => {
    var _a, _b, _c;
    if (e.length === 0) return;
    const a = e.map((s) => {
      const t = D(s, false), n = o.getKey(s);
      return { ...t, id: n };
    });
    try {
      await g.transaction("rw", l, async () => {
        await l.bulkPut(a);
      });
    } catch (s) {
      if (s instanceof Error && s.name === "BulkError") {
        const t = s;
        p("bulkInsertLocally:partial-failure", { total: e.length, failures: ((_a = t.failures) == null ? void 0 : _a.length) || 0, errors: ((_b = t.failures) == null ? void 0 : _b.map((i) => i.message)) || [] });
        const n = new Set(Object.keys(t.failuresByPos || {}).map(Number)), u = Date.now();
        throw e.forEach((i, d) => {
          if (!n.has(d)) {
            const w = o.getKey(i);
            y.set(w, u), f.add(w);
            const h = c.get(w);
            h && (h.resolve(), c.delete(w));
          }
        }), new Error(`Failed to insert ${((_c = t.failures) == null ? void 0 : _c.length) || 0} of ${e.length} items locally`);
      }
      throw p("bulkInsertLocally:error", { error: String(s) }), new Error(`Failed to bulk insert items locally: ${s instanceof Error ? s.message : String(s)}`);
    }
    const r = Date.now();
    for (const s of e) {
      const t = o.getKey(s);
      y.set(t, r), f.add(t);
      const n = c.get(t);
      n && (n.resolve(), c.delete(t));
    }
  }, bulkUpdateLocally: async (e) => {
    var _a, _b;
    if (e.length === 0) return;
    try {
      await g.transaction("rw", l, async () => {
        if (o.rowUpdateMode === "full") {
          const r = e.map((s) => {
            const t = D(s, true), n = o.getKey(s);
            return { ...t, id: n };
          });
          await l.bulkPut(r);
        } else for (const r of e) {
          const s = o.getKey(r), t = D(r, true);
          await l.update(s, t);
        }
      });
    } catch (r) {
      if (r instanceof Error && r.name === "BulkError") {
        const s = r;
        throw p("bulkUpdateLocally:partial-failure", { total: e.length, failures: ((_a = s.failures) == null ? void 0 : _a.length) || 0 }), new Error(`Failed to update ${((_b = s.failures) == null ? void 0 : _b.length) || 0} of ${e.length} items locally`);
      }
      throw p("bulkUpdateLocally:error", { error: String(r) }), new Error(`Failed to bulk update items locally: ${r instanceof Error ? r.message : String(r)}`);
    }
    const a = Date.now();
    for (const r of e) {
      const s = o.getKey(r);
      y.set(s, a), f.add(s);
      const t = c.get(s);
      t && (t.resolve(), c.delete(s));
    }
  }, bulkDeleteLocally: async (e) => {
    var _a, _b;
    if (e.length !== 0) {
      try {
        await g.transaction("rw", l, async () => {
          await l.bulkDelete(e);
        });
      } catch (a) {
        if (a instanceof Error && a.name === "BulkError") {
          const r = a;
          throw p("bulkDeleteLocally:partial-failure", { total: e.length, failures: ((_a = r.failures) == null ? void 0 : _a.length) || 0 }), new Error(`Failed to delete ${((_b = r.failures) == null ? void 0 : _b.length) || 0} of ${e.length} items locally`);
        }
        throw p("bulkDeleteLocally:error", { error: String(a) }), new Error(`Failed to bulk delete items locally: ${a instanceof Error ? a.message : String(a)}`);
      }
      for (const a of e) y.delete(a), f.delete(a), c.delete(a);
    }
  } };
  return { id: o.id, schema: o.schema, getKey: o.getKey, rowUpdateMode: o.rowUpdateMode ?? "partial", sync: { sync: K }, onInsert: R, onUpdate: B, onDelete: N, utils: O };
}
export {
  se as d
};
