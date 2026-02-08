var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { n as d } from "./id-OxPLOBIU.js";
import { q as l } from "./db-master-l33tB5ke.js";
import { c as m } from "./es-toolkit-CstbrnlE.js";
const I = { groupingDelayMs: 6e4 };
class c {
  constructor(t, e) {
    __publicField(this, "state");
    __publicField(this, "options", m(I));
    this.state = t, e && this.assignOptions(e);
  }
  assignOptions(t) {
    Object.assign(this.options, t);
  }
  setOptions(t) {
    this.options = m(t);
  }
  getHistoryItems() {
    return this.state.historyItems;
  }
  getVisibleHistoryItems() {
    return this.state.historyItems.filter((t) => !(t.deleted || t.hidden));
  }
  getHistoryItemById(t) {
    return this.state.historyItems.find((e) => e.id === t);
  }
  getProcessingItem() {
    return this.state.processingItem;
  }
  getLastHistoryItem() {
    return this.state.historyItems.at(-1);
  }
  getHistoryCount() {
    return this.state.historyItems.length;
  }
  getItemsByType(t) {
    return this.state.historyItems.filter((e) => e.type === t);
  }
  findHistoryItems(t) {
    return this.state.historyItems.filter(t);
  }
  addHistoryItem(t) {
    if (t.type === "character_message") this.addCharacterMessageIntoHistory(t);
    else {
      const e = { ...t, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
      this.state.historyItems.push(e);
    }
  }
  deleteHistoryItemById(t) {
    const e = this.state.historyItems.find((s) => s.id === t);
    e && (e.deleted = true);
  }
  deleteHistoryItemByIds(t) {
    for (const e of this.state.historyItems) t.includes(e.id) && (e.deleted = true);
  }
  deleteHistoryItems(t) {
    for (const e of this.state.historyItems) t(e) && (e.deleted = true);
  }
  clearHistory() {
    this.state.historyItems = [];
  }
  setProcessingItem(t) {
    if (t) {
      const e = { ...t, processing: true };
      this.state.processingItem = e;
    } else this.state.processingItem = void 0;
  }
  completeProcessingItem() {
    if (this.state.processingItem) {
      const t = { ...this.state.processingItem, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
      this.state.processingItem = void 0, this.addHistoryItem(t);
    }
  }
  static makeGroupedCharacterMessages(t) {
    const e = [];
    let s = 0;
    for (; s < t.length; ) if (t[s].type === "character_message") {
      const a = [];
      let r = s;
      for (; r < t.length && t[r].type === "character_message"; ) a.push(t[r]), r++;
      if (a.length > 1) {
        for (let h = 0; h < a.length - 1; h++) e.push(l.parse({ id: d(), type: "placeholder", idx: a[h].idx, data: null }));
        const i = a[0].data.characterId, o = a.map((h) => ({ content: h.data.content, timestamp: h.timestamp || void 0, originalIdx: h.idx })), n = a.at(-1);
        if (!n) throw new Error("No last candidate");
        const p = { id: d(), type: "character_message_group", data: { characterId: i || "", list: o, name: a[0].data.name, role: a[0].data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: n.idx, orderRef: 0, timestamp: Date.now() };
        e.push(p);
      } else e.push(a[0]);
      s = r;
    } else e.push(t[s]), s++;
    return e;
  }
  spliceHistoryItems(t, e, s, a = true) {
    if (this.state.historyItems.splice(t, e, ...s), a) for (let r = t; r < this.state.historyItems.length; r++) this.state.historyItems[r].idx = r;
  }
  performGroupingOnTailingHistoryItems() {
    const t = this.getLastHistoryItem();
    if (t && t.type === "character_message_group") return;
    let e = this.state.historyItems.length - 1;
    for (; e >= 0 && this.state.historyItems[e].type === "character_message"; ) e--;
    if (e++, e >= this.state.historyItems.length) return;
    const s = this.state.historyItems.slice(e), a = c.makeGroupedCharacterMessages(s);
    this.spliceHistoryItems(e, s.length, a, false);
  }
  performGroupingOnAllHistoryItems() {
    const t = c.makeGroupedCharacterMessages(this.state.historyItems);
    this.spliceHistoryItems(0, this.state.historyItems.length, t, false);
  }
  addCharacterMessageIntoHistoryDirectly(t) {
    const e = { ...t, processing: void 0, idx: this.state.historyItems.length, timestamp: Date.now() };
    this.state.historyItems.push(e);
  }
  addCharacterMessageIntoHistoryAsNewGroup(t) {
    const e = [{ content: t.data.content, timestamp: Date.now(), originalIdx: this.state.historyItems.length }], s = { id: d(), type: "character_message_group", data: { characterId: t.data.characterId || "", list: e, name: t.data.name, role: t.data.role, isCharacter: true, isEnv: false, isDM: false, isUser: false }, idx: this.state.historyItems.length, orderRef: 0, timestamp: Date.now() };
    this.state.historyItems.push(s);
  }
  addCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(t) {
    const e = this.getLastHistoryItem();
    if (e && e.type === "character_message_group") {
      const s = e;
      if (s.data.characterId === t.data.characterId && Date.now() - (s.timestamp || 0) <= (this.options.groupingDelayMs || 6e4)) {
        s.data.list.push({ content: t.data.content, timestamp: Date.now() }), s.timestamp = Date.now();
        return;
      }
    }
    this.addCharacterMessageIntoHistoryDirectly(t);
  }
  addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(t) {
    const e = this.getLastHistoryItem();
    if (e && e.type === "character_message_group") {
      const s = e;
      if (s.data.characterId === t.data.characterId && Date.now() - (s.timestamp || 0) <= (this.options.groupingDelayMs || 6e4)) {
        s.data.list.push({ content: t.data.content, timestamp: Date.now() }), s.timestamp = Date.now();
        return;
      }
    }
    this.addCharacterMessageIntoHistoryAsNewGroup(t);
  }
  performGroupingOnTailingHistoryItemsAndAddCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(t) {
    this.performGroupingOnTailingHistoryItems(), this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseIntoHistoryDirectly(t);
  }
  performGroupingOnTailingHistoryItemsAndAddCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(t) {
    this.performGroupingOnTailingHistoryItems(), this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(t);
  }
  addCharacterMessageIntoHistory(t) {
    this.addCharacterMessageIntoHistoryTailingGroupIfReasonableElseAsNewGroup(t);
  }
  getLastSummaryItemIndex() {
    for (let t = this.state.historyItems.length - 1; t >= 0; t--) {
      const e = this.state.historyItems[t];
      if (e.type === "summary") return e.idx;
    }
  }
  getAllSummaryItemIndices() {
    return this.getItemsByType("summary").map((t) => t.idx ?? -1).filter((t) => t !== -1);
  }
  getUncoveredIndices() {
    const e = this.getItemsByType("summary").map((i) => i.data.range).sort((i, o) => i[0] - o[0]), s = [];
    for (const [i, o] of e) {
      const n = s.at(-1);
      s.length === 0 || n && n[1] < i ? s.push([i, o]) : n && (n[1] = Math.max(n[1], o));
    }
    const a = [];
    let r = 0;
    for (const [i, o] of s) {
      for (; r < i; ) a.push(r), r++;
      r = Math.max(r, o + 1);
    }
    for (; r < this.state.historyItems.length; ) a.push(r), r++;
    return a;
  }
  addLLMResponseAsContextItem(t, e) {
    const s = d();
    let a;
    t.role === "assistant" && e.characterId ? a = { id: s, type: "character_message", orderRef: 0, timestamp: Date.now(), data: { characterId: e.characterId, content: t.content, name: void 0 } } : t.role === "user" ? a = { id: s, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: t.content, name: void 0, isUser: true, role: "user" } } : a = { id: s, type: "participant_message", orderRef: 0, timestamp: Date.now(), data: { characterId: void 0, content: t.content, name: t.role } }, this.addHistoryItem(a);
  }
  getFlatHistoryItems(t) {
    const e = [];
    for (const s of this.state.historyItems) if (s.type === "character_message_group") {
      const a = s, r = a.data.list.map((i) => ({ id: d(), type: "character_message", idx: s.idx, orderRef: s.orderRef, timestamp: i.timestamp || s.timestamp, hidden: s.hidden, deleted: s.deleted, data: { characterId: a.data.characterId, content: i.content, name: a.data.name, role: a.data.role, isCharacter: true, isUser: false, isDM: false, isEnv: false } }));
      e.push(...r);
    } else e.push(s);
    return t && t > 0 ? e.slice(-t) : e;
  }
  getLastUserMessage() {
    return this.getFlatHistoryItems().findLast((t) => (t.type === "participant_message" || t.type === "character_message") && (t.data.isUser || t.data.role === "user"));
  }
}
export {
  c as C
};
