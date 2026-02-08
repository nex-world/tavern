const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-l33tB5ke.js","assets/@tanstack-B4B5CfFY.js","assets/react-BQpw03Eg.js","assets/vendor-CjYbcnj-.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-B3Kybfa7.js","assets/zod-fbN9ubnj.js"])))=>i.map(i=>d[i]);
import { D as T, F as P, aH as Z, r as v, t as R, E as ee, j as e } from "./react-BQpw03Eg.js";
import { f as z, i as te } from "./@tanstack-B4B5CfFY.js";
import { r as se, S as ae } from "./db-master-l33tB5ke.js";
import { s as ne } from "./db-BMXax6F-.js";
import { _ as U, __tla as __tla_0 } from "./index-DkZE5rMH.js";
import { C as re } from "./context-manager.class-CwvvDHbt.js";
import { S as oe } from "./session-manager.class-fBqHHRvS.js";
import { B as j } from "./button-B9brLUSp.js";
import { T as ie } from "./textarea-D6rL78Aw.js";
import { B as y } from "./badge-DvaSwOwN.js";
import { n as _ } from "./id-OxPLOBIU.js";
import { u as ce, e as de } from "./global-llm-config.store-DiEUj8Zz.js";
import { _ as J, o as L, s as f, n as M, a as le, r as ue, l as me } from "./zod-fbN9ubnj.js";
import { c as A } from "./shadcn-utils-BMZD7_jZ.js";
import { aj as pe, o as G, i as xe, ao as he, Q as ge, a8 as B, B as V, c as fe } from "./icons-BC63ChG4.js";
import "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-B3Kybfa7.js";
import "./es-toolkit-CstbrnlE.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
let et;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  class Se extends oe {
    constructor(t) {
      super(t), this.session = t;
    }
    getCurrentPhase() {
      return this.session.modeState.currentPhase;
    }
    getCurrentUIState() {
      return this.session.modeState.currentUIState;
    }
    getMaxAIAutoSpeakCount() {
      return this.session.modeConfig.maxAIAutoSpeakCount ?? 5;
    }
    getAIAutoSpeakCounter() {
      return this.session.modeState.aiAutoSpeakCounter;
    }
    isAICounterAtMax() {
      return this.getAIAutoSpeakCounter() >= this.getMaxAIAutoSpeakCount();
    }
    setCurrentPhase(t) {
      console.log(`[GroupChat] Phase: ${this.session.modeState.currentPhase} \u2192 ${t}`), this.session.modeState.currentPhase = t, this.session.updatedAt = Date.now();
    }
    setCurrentUIState(t) {
      this.session.modeState.currentUIState = t, this.session.updatedAt = Date.now();
    }
    setCurrentSpeaker(t) {
      this.session.modeState.currentSpeakerId = t, this.session.updatedAt = Date.now();
    }
    incrementAfterAISpeaks(t) {
      this.session.modeState.aiAutoSpeakCounter++, this.session.modeState.speakCounts[t] || (this.session.modeState.speakCounts[t] = 0), this.session.modeState.speakCounts[t]++, this.session.modeState.messageCount++, this.session.updatedAt = Date.now();
    }
    resetCounterAfterPlayerSpeaks() {
      this.session.modeState.aiAutoSpeakCounter = 0, this.session.modeState.messageCount++, this.session.updatedAt = Date.now();
    }
    resetAIAutoSpeakCounter() {
      this.session.modeState.aiAutoSpeakCounter = 0, this.session.updatedAt = Date.now();
    }
    findParticipantName(t) {
      var _a;
      return ((_a = this.session.modeConfig.participantSnapshots.find((a) => a.id === t)) == null ? void 0 : _a.name) || "\u89D2\u8272";
    }
  }
  const w = T({
    currentSession: null,
    contextManager: null,
    sessionManager: null,
    loadSession(s, t) {
      this.currentSession = s;
      const a = this.currentSession;
      a.modeState.currentUIState = "idle", a.modeState.aiAutoSpeakCounter === void 0 && (a.modeState.aiAutoSpeakCounter = 0), this.sessionManager = Z(new Se(a));
      const n = T(t || {
        historyItems: [],
        processingItem: void 0
      });
      this.contextManager = new re(n);
    },
    async saveNewContextItemsToDB(s, t) {
      const { SessionDB: a } = await U(async () => {
        const { SessionDB: m } = await import("./db-master-l33tB5ke.js").then((g) => g.s);
        return {
          SessionDB: m
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7])), n = new a(s);
      let o;
      try {
        o = P(t);
      } catch {
        o = JSON.parse(JSON.stringify(t));
      }
      await n.addContextItems(o);
    },
    async updateSessionInDB() {
      if (!this.currentSession) return;
      const { masterDb: s } = await U(async () => {
        const { masterDb: n } = await import("./db-master-l33tB5ke.js").then((o) => o.t);
        return {
          masterDb: n
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7])), t = P(this.currentSession.modeState), a = P(this.currentSession.modeConfig);
      await s.sessions.update(this.currentSession.id, {
        modeState: t,
        modeConfig: a,
        updatedAt: Date.now()
      });
    }
  });
  function E(s) {
    return s.modeConfig.participantSnapshots;
  }
  function be(s, t) {
    return s.modeConfig.participantSnapshots.find((a) => a.id === t);
  }
  function q(s) {
    return s.map((t) => `- ${t.name} (ID: ${t.id}): ${t.personality || t.description}`).join(`
`);
  }
  function we(s) {
    if (!s) return "";
    const t = new Date(s), a = /* @__PURE__ */ new Date(), n = t.getHours().toString().padStart(2, "0"), o = t.getMinutes().toString().padStart(2, "0");
    return t.toDateString() === a.toDateString() ? `${n}:${o}` : `${t.getMonth() + 1}/${t.getDate()} ${n}:${o}`;
  }
  function K(s, t, a = 30) {
    const n = E(t), o = t.modeConfig.userName || "\u6211";
    return s.getFlatHistoryItems(a).filter((m) => !m.hidden && !m.deleted).map((m) => {
      var _a;
      const { type: g, data: i } = m, d = we(m.timestamp), r = d ? `[${d}] ` : "";
      if (g === "gc_user_message") return `${r}[${i.userName || o}]: ${i.content}`;
      if (g === "gc_character_message") {
        const c = i.characterName || ((_a = n.find((u) => u.id === i.characterId)) == null ? void 0 : _a.name) || "\u89D2\u8272";
        return `${r}[${c}]: ${i.content}`;
      }
      return null;
    }).filter(Boolean).join(`
`);
  }
  function ve(s, t) {
    const a = E(s), n = s.modeState.speakCounts, o = s.modeConfig.topic, m = s.modeConfig.userName || "\u6211", i = `${s.modeConfig.dmSystemPrompt || "\u4F60\u662F\u4E00\u4E2A\u9690\u5F62\u7684\u7FA4\u804A\u8C03\u5EA6\u5458\u3002"}
\u4F60\u7684\u552F\u4E00\u4EFB\u52A1\u662F\u6839\u636E\u5F53\u524D\u5BF9\u8BDD\u4E0A\u4E0B\u6587\u9009\u62E9\u4E0B\u4E00\u4E2A\u6700\u9002\u5408\u53D1\u8A00\u7684 AI \u89D2\u8272\u3002
\u9009\u62E9\u65F6\u8981\u8003\u8651\uFF1A\u5BF9\u8BDD\u7684\u81EA\u7136\u6D41\u5411\u3001\u8BDD\u9898\u76F8\u5173\u6027\u3001\u89D2\u8272\u7684\u6027\u683C\u7279\u70B9\u3002
\u5141\u8BB8\u540C\u4E00\u89D2\u8272\u8FDE\u7EED\u53D1\u8A00\uFF08\u5982\u679C\u5BF9\u8BDD\u60C5\u5883\u81EA\u7136\u9700\u8981\uFF09\uFF0C\u4F46\u4E5F\u8981\u6CE8\u610F\u8BA9\u6240\u6709\u89D2\u8272\u90FD\u6709\u53C2\u4E0E\u611F\u3002
\u6CE8\u610F\u89C2\u5BDF\u5BF9\u8BDD\u5386\u53F2\u4E2D\u7684\u65F6\u95F4\u6233\uFF0C\u4E86\u89E3\u5BF9\u8BDD\u8282\u594F\u3002
\u3010\u4E25\u683C\u8981\u6C42\u3011\uFF1A\u53EA\u8F93\u51FA\u4E00\u4E2A JSON \u5757\uFF0C\u4E0D\u8981\u5305\u542B\u4EFB\u4F55\u5176\u4ED6\u6587\u5B57\u3002
\`\`\`json
{ "nextSpeakerId": "\u89D2\u8272ID", "reason": "\u9009\u62E9\u539F\u56E0" }
\`\`\`
\u53EF\u9009\u89D2\u8272\uFF1A
${a.map((c) => `- ${c.name} (ID: ${c.id}, \u5DF2\u53D1\u8A00: ${n[c.id] || 0}\u6B21)`).join(`
`)}`, d = K(t, s, 20), r = [
      o ? `\u3010\u7FA4\u804A\u8BDD\u9898\u3011
${o}` : "",
      `\u3010\u7FA4\u804A\u6210\u5458\u3011
- ${m} (\u73A9\u5BB6)
${q(a)}`,
      d ? `\u3010\u6700\u8FD1\u5BF9\u8BDD\u3011
${d}` : "\u3010\u5BF9\u8BDD\u521A\u5F00\u59CB\uFF0C\u8BF7\u9009\u4E00\u4E2A\u9002\u5408\u6253\u5F00\u8BDD\u9898\u7684\u89D2\u8272\u3011",
      `\u3010\u6240\u6709\u89D2\u8272\u53D1\u8A00\u7EDF\u8BA1\u3011
${a.map((c) => `${c.name}: ${n[c.id] || 0} \u6B21`).join(`
`)}`
    ].filter(Boolean).join(`

`);
    return [
      {
        role: "system",
        content: i
      },
      {
        role: "user",
        content: r
      }
    ];
  }
  function Ie(s, t) {
    const a = s.modeState.currentSpeakerId, n = be(s, a), o = E(s), m = s.modeConfig.userName || "\u6211", g = s.modeConfig.topic;
    if (!n) return [];
    const i = `\u4F60\u662F ${n.name}\u3002${n.systemPrompt}
${n.personality ? `\u4F60\u7684\u6027\u683C\uFF1A${n.personality}` : ""}
\u4F60\u73B0\u5728\u6B63\u5728\u4E00\u4E2A\u7FA4\u804A\u4E2D\u548C\u5176\u4ED6\u89D2\u8272\u4EE5\u53CA\u4E00\u4E2A\u540D\u4E3A"${m}"\u7684\u73A9\u5BB6\u804A\u5929\u3002
\u8BF7\u4EE5 ${n.name} \u7684\u8EAB\u4EFD\u81EA\u7136\u53D1\u8A00\uFF0C\u4E0D\u8981\u4F7F\u7528\u4EFB\u4F55 XML \u6807\u7B7E\uFF0C\u76F4\u63A5\u8F93\u51FA\u5BF9\u8BDD\u5185\u5BB9\u5373\u53EF\u3002
\u53D1\u8A00\u8981\u7B80\u6D01\u81EA\u7136\uFF0C\u50CF\u771F\u5B9E\u7684\u7FA4\u804A\u4E00\u6837\uFF0C\u901A\u5E38 1-3 \u53E5\u8BDD\u3002
\u6CE8\u610F\u6839\u636E\u5BF9\u8BDD\u5386\u53F2\u4E2D\u7684\u65F6\u95F4\u6233\u611F\u77E5\u65F6\u95F4\u6D41\u901D\uFF0C\u505A\u51FA\u81EA\u7136\u7684\u53CD\u5E94\u3002`, d = K(t, s, 20), r = o.filter((u) => u.id !== a), c = [
      g ? `\u3010\u7FA4\u804A\u8BDD\u9898\u3011
${g}` : "",
      r.length > 0 ? `\u3010\u5176\u4ED6\u7FA4\u804A\u6210\u5458\u3011
- ${m} (\u73A9\u5BB6)
${q(r)}` : `\u3010\u7FA4\u804A\u6210\u5458\u3011
- ${m} (\u73A9\u5BB6)`,
      d ? `\u3010\u5BF9\u8BDD\u5386\u53F2\u3011
${d}` : "\u3010\u5BF9\u8BDD\u521A\u5F00\u59CB\uFF0C\u8BF7\u4E3B\u52A8\u5F00\u542F\u804A\u5929\u3011"
    ].filter(Boolean).join(`

`);
    return [
      {
        role: "system",
        content: i
      },
      {
        role: "user",
        content: c
      }
    ];
  }
  function Ce(s) {
    try {
      const t = s.indexOf("{"), a = s.lastIndexOf("}") + 1;
      if (t < 0 || a <= t) return null;
      const n = JSON.parse(s.slice(t, a)), o = n.nextSpeakerId || n.speakerId;
      return o ? {
        nextSpeakerId: o,
        reason: n.reason || ""
      } : null;
    } catch {
      return null;
    }
  }
  const H = 3;
  function Ne() {
    const s = ce((d) => d.config), t = v.useRef(false), a = z(), n = v.useCallback(async (d, r, c, u = {}) => {
      const x = w.contextManager;
      if (!x) return "";
      const h = {
        id: _(),
        type: c,
        orderRef: 0,
        timestamp: Date.now(),
        data: {
          content: "",
          ...u
        }
      };
      x.setProcessingItem(h);
      try {
        let p = "";
        if (await de(d, r.map((C) => ({
          ...C,
          id: _()
        })), [], (C, S) => {
          p = S;
          const N = x.getProcessingItem();
          N && (N.data.content = S);
        }), !p.trim()) throw x.setProcessingItem(void 0), new Error("LLM \u8BF7\u6C42\u5931\u8D25\uFF1A\u672A\u6536\u5230\u6709\u6548\u54CD\u5E94\uFF08\u53EF\u80FD\u662F API \u5BC6\u94A5\u65E0\u6548\u3001\u6A21\u578B\u4E0D\u53EF\u7528\u6216\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF\uFF09");
        return x.completeProcessingItem(), p;
      } catch (p) {
        throw x.setProcessingItem(void 0), p;
      }
    }, []), o = v.useCallback(async () => {
      if (t.current) return;
      t.current = true;
      const d = {
        ...s
      };
      try {
        for (; ; ) {
          const r = w, c = r.currentSession, u = r.sessionManager, x = r.contextManager;
          if (!(c && u && x)) break;
          if (u.isAICounterAtMax()) {
            u.setCurrentPhase("waiting_for_player"), u.setCurrentUIState("ai_loop_paused"), await r.updateSessionInDB();
            break;
          }
          u.setCurrentUIState("ai_loop_running"), u.setCurrentPhase("dm_select_speaker"), await r.updateSessionInDB();
          let h = null;
          for (let S = 0; S < H; S++) {
            const N = ve(c, x), D = await n(d, N, "gc_select_speaker");
            if (h = Ce(D), h) break;
            console.warn(`[GroupChat] DM \u9009\u62E9\u89E3\u6790\u5931\u8D25 (${S + 1}/${H})`);
          }
          if (!h) {
            R.warning("DM \u9009\u62E9\u53D1\u8A00\u8005\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), u.setCurrentUIState("ai_loop_paused"), await r.updateSessionInDB();
            break;
          }
          const p = u.findParticipantName(h.nextSpeakerId);
          x.addHistoryItem({
            id: _(),
            type: "gc_select_speaker",
            idx: 0,
            orderRef: 0,
            timestamp: Date.now(),
            data: {
              nextSpeakerId: h.nextSpeakerId,
              nextSpeakerName: p,
              reason: h.reason
            },
            hidden: true
          }), u.setCurrentSpeaker(h.nextSpeakerId), u.setCurrentPhase("character_speak"), await r.updateSessionInDB();
          const C = Ie(c, x);
          await n(d, C, "gc_character_message", {
            characterId: h.nextSpeakerId,
            characterName: p
          }), u.incrementAfterAISpeaks(h.nextSpeakerId), await r.saveNewContextItemsToDB(c.id, x.getHistoryItems()), await r.updateSessionInDB(), await new Promise((S) => setTimeout(S, 50));
        }
      } catch (r) {
        console.error("[GroupChat] AI \u5FAA\u73AF\u9519\u8BEF:", r);
        const c = w.sessionManager;
        c && c.setCurrentUIState("ai_loop_paused");
        try {
          await w.updateSessionInDB();
        } catch {
        }
        R.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E", {
          duration: Number.POSITIVE_INFINITY,
          action: {
            label: "\u524D\u5F80\u914D\u7F6E",
            onClick: () => a({
              to: "/config/llm"
            })
          }
        });
      } finally {
        t.current = false;
      }
    }, [
      s,
      n,
      a
    ]), m = v.useCallback(async (d) => {
      const r = w, { currentSession: c, contextManager: u, sessionManager: x } = r;
      c && u && x && (u.addHistoryItem({
        id: _(),
        type: "gc_user_message",
        idx: 0,
        orderRef: 0,
        timestamp: Date.now(),
        data: {
          content: d,
          userName: c.modeConfig.userName || "\u6211"
        }
      }), x.resetCounterAfterPlayerSpeaks(), await r.saveNewContextItemsToDB(c.id, u.getHistoryItems()), await r.updateSessionInDB(), t.current || o());
    }, [
      o
    ]), g = v.useCallback(async () => {
      const d = w, { sessionManager: r } = d;
      r && (r.resetAIAutoSpeakCounter(), await d.updateSessionInDB(), t.current || o());
    }, [
      o
    ]), i = v.useCallback(async () => {
      const d = w, { sessionManager: r } = d;
      r && (r.setCurrentPhase("dm_select_speaker"), r.setCurrentUIState("ai_loop_running"), r.resetAIAutoSpeakCounter(), await d.updateSessionInDB(), await new Promise((c) => setTimeout(c, 50)), o());
    }, [
      o
    ]);
    return {
      sendPlayerMessage: m,
      continueAILoop: g,
      startChat: i,
      isRunningRef: t
    };
  }
  const ke = J([
    "dm_select_speaker",
    "character_speak",
    "waiting_for_player"
  ]), je = J([
    "idle",
    "ai_loop_running",
    "ai_loop_paused"
  ]), O = {
    idle: {
      label: "\u7A7A\u95F2",
      placeholder: "\u70B9\u51FB\u5F00\u59CB\u7FA4\u804A...",
      inputEnabled: false
    },
    ai_loop_running: {
      label: "AI \u5BF9\u8BDD\u4E2D",
      placeholder: "\u968F\u65F6\u53D1\u9001\u6D88\u606F...",
      inputEnabled: true
    },
    ai_loop_paused: {
      label: "\u7B49\u5F85\u4F60\u7684\u6D88\u606F",
      placeholder: "\u53D1\u9001\u6D88\u606F\uFF0C\u6216\u70B9\u51FB \u23E9 \u8BA9 AI \u7EE7\u7EED...",
      inputEnabled: true
    }
  }, ye = L({
    id: f().describe("\u89D2\u8272 ID"),
    name: f().describe("\u89D2\u8272\u540D\u79F0"),
    description: f().describe("\u89D2\u8272\u63CF\u8FF0"),
    avatar: f().optional().describe("\u89D2\u8272\u5934\u50CF"),
    systemPrompt: f().describe("\u89D2\u8272\u626E\u6F14\u6307\u5F15"),
    personality: f().optional().describe("\u89D2\u8272\u6027\u683C\u6982\u8FF0"),
    firstMessage: f().optional().describe("\u5F00\u573A\u95EE\u5019\u8BED")
  }), _e = L({
    topic: f().optional().describe("\u7FA4\u804A\u8BDD\u9898/\u573A\u666F"),
    participantSnapshots: le(ye).describe("\u53C2\u4E0E\u7684 AI \u89D2\u8272\u5FEB\u7167\u5217\u8868"),
    userName: f().optional().describe("\u73A9\u5BB6\u663E\u793A\u540D\u79F0"),
    dmSystemPrompt: f().optional().describe("DM \u8C03\u5EA6\u63D0\u793A\u8BCD"),
    maxAIAutoSpeakCount: M().optional().default(5).describe("AI \u81EA\u4E3B\u53D1\u8A00\u6700\u5927\u6570\u91CF\uFF0C\u8FBE\u5230\u540E\u6682\u505C\u7B49\u5F85\u73A9\u5BB6")
  }), Ae = L({
    currentPhase: ke.describe("AI \u5FAA\u73AF\u5F53\u524D\u9636\u6BB5"),
    currentUIState: je.describe("\u5F53\u524D UI \u72B6\u6001"),
    currentSpeakerId: f().describe("\u5F53\u524D\u53D1\u8A00\u8005 ID"),
    messageCount: M().describe("\u603B\u6D88\u606F\u6570"),
    speakCounts: ue(f(), M()).describe("\u6BCF\u4E2A\u89D2\u8272\u7684\u53D1\u8A00\u6B21\u6570"),
    aiAutoSpeakCounter: M().default(0).describe("AI \u81EA\u4E3B\u53D1\u8A00\u8BA1\u6570\u5668\uFF0C\u73A9\u5BB6\u53D1\u8A00\u65F6\u91CD\u7F6E")
  });
  se.extend({
    mode: me("group-chat").describe("\u6A21\u5F0F"),
    modeConfig: _e.describe("\u7FA4\u804A\u6A21\u5F0F\u914D\u7F6E"),
    modeState: Ae.describe("\u7FA4\u804A\u6A21\u5F0F\u72B6\u6001")
  });
  function Q(s) {
    if (!s) return "";
    const t = new Date(s), a = /* @__PURE__ */ new Date(), n = t.getHours().toString().padStart(2, "0"), o = t.getMinutes().toString().padStart(2, "0");
    return t.toDateString() === a.toDateString() ? `${n}:${o}` : `${t.getMonth() + 1}/${t.getDate()} ${n}:${o}`;
  }
  let Me, F, De;
  et = (s) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
    const t = z(), [a, n] = v.useState(""), o = v.useRef(null), [m, g] = v.useState(false), i = ee(w), { data: d = [] } = te((l) => l.from({
      s: ae
    })), r = d.find((l) => l.id === s.sessionId);
    v.useEffect(() => {
      var _a2;
      let l = false;
      if (!r) return;
      if (((_a2 = w.currentSession) == null ? void 0 : _a2.id) === r.id && w.contextManager) {
        g(true);
        return;
      }
      return (async () => {
        try {
          const b = await ne.createSessionDB(r.id).getContextItems();
          if (l) return;
          w.loadSession(r, {
            historyItems: b,
            processingItem: void 0
          }), g(true);
        } catch (k) {
          console.error("[GroupChat] Load session error", k);
        }
      })(), () => {
        l = true;
      };
    }, [
      r == null ? void 0 : r.id,
      r
    ]);
    const { sendPlayerMessage: c, continueAILoop: u, startChat: x, isRunningRef: h } = Ne();
    if (v.useEffect(() => {
      o.current && (o.current.scrollTop = o.current.scrollHeight);
    }), !(r && m)) return e.jsxs("div", {
      className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
      children: [
        e.jsx("div", {
          className: "w-12 h-12 rounded-2xl bg-muted animate-pulse flex items-center justify-center",
          children: e.jsx(pe, {
            className: "w-6 h-6 opacity-20"
          })
        }),
        e.jsx("p", {
          className: "text-xs font-medium tracking-widest uppercase opacity-50",
          children: "\u52A0\u8F7D\u7FA4\u804A..."
        })
      ]
    });
    const p = ((_b = (_a = i.currentSession) == null ? void 0 : _a.modeState) == null ? void 0 : _b.currentUIState) || "idle", C = O[p] || O.idle, S = (_e2 = (_d = (_c = i.currentSession) == null ? void 0 : _c.modeConfig) == null ? void 0 : _d.participantSnapshots) == null ? void 0 : _e2.find((l) => {
      var _a2, _b2;
      return l.id === ((_b2 = (_a2 = i.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b2.currentSpeakerId);
    }), N = async () => {
      if (!a.trim()) return;
      const l = a;
      n(""), await c(l);
    }, D = async () => {
      h.current || await x();
    }, X = async () => {
      h.current || await u();
    }, Y = () => t({
      to: "/plaza"
    }), W = (_g = (_f = i.contextManager) == null ? void 0 : _f.state.processingItem) == null ? void 0 : _g.id;
    return e.jsxs("div", {
      className: "flex flex-row h-full overflow-hidden bg-background",
      children: [
        e.jsxs("div", {
          className: "flex flex-col grow min-w-0 h-full relative",
          children: [
            e.jsxs("div", {
              className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: "w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shadow-sm",
                      children: e.jsx(G, {
                        className: "w-5 h-5 text-violet-600"
                      })
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className: "font-bold text-sm tracking-tight",
                              children: ((_i = (_h = i.currentSession) == null ? void 0 : _h.modeConfig) == null ? void 0 : _i.topic) || "\u7FA4\u804A"
                            }),
                            e.jsxs(y, {
                              variant: "outline",
                              className: "text-[9px] h-3.5 px-1 leading-none font-bold bg-violet-500/5 text-violet-600 border-violet-500/10",
                              children: [
                                ((_l = (_k = (_j = i.currentSession) == null ? void 0 : _j.modeConfig) == null ? void 0 : _k.participantSnapshots) == null ? void 0 : _l.length) || 0,
                                " \u4EBA"
                              ]
                            })
                          ]
                        }),
                        e.jsx("span", {
                          className: "text-[10px] text-muted-foreground/60 font-medium tracking-wide",
                          children: S && p === "ai_loop_running" ? `${S.name} \u6B63\u5728\u8F93\u5165...` : C.label
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    p !== "idle" && e.jsxs("span", {
                      className: "text-[9px] text-muted-foreground/50 font-mono",
                      children: [
                        "AI ",
                        ((_n = (_m = i.currentSession) == null ? void 0 : _m.modeState) == null ? void 0 : _n.aiAutoSpeakCounter) || 0,
                        "/",
                        ((_p = (_o = i.currentSession) == null ? void 0 : _o.modeConfig) == null ? void 0 : _p.maxAIAutoSpeakCount) ?? 5
                      ]
                    }),
                    e.jsxs(y, {
                      variant: "secondary",
                      className: "text-[10px] h-6 px-2 font-bold uppercase gap-1.5 rounded-full border-muted/50",
                      children: [
                        e.jsx("span", {
                          className: A("w-1.5 h-1.5 rounded-full", p === "ai_loop_running" ? "bg-violet-500 animate-pulse" : p === "ai_loop_paused" ? "bg-amber-500" : "bg-muted-foreground/30")
                        }),
                        "\u7FA4\u804A"
                      ]
                    })
                  ]
                })
              ]
            }),
            e.jsx("div", {
              className: "flex grow overflow-y-auto",
              ref: o,
              children: e.jsx("div", {
                className: "max-w-3xl mx-auto w-full px-4 py-8 md:px-8 space-y-6",
                children: (() => {
                  var _a2, _b2, _c2, _d2, _e3, _f2, _g2;
                  const l = (((_a2 = i.contextManager) == null ? void 0 : _a2.state.historyItems) || []).filter((b) => !b.hidden), I = (_b2 = i.contextManager) == null ? void 0 : _b2.state.processingItem;
                  if (p === "idle") {
                    const b = l.length === 0 ? "\u5F00\u59CB\u7FA4\u804A" : "\u7EE7\u7EED\u7FA4\u804A";
                    return e.jsxs("div", {
                      className: "flex flex-col items-center justify-center py-20 min-h-[60vh] animate-in fade-in zoom-in duration-500",
                      children: [
                        e.jsx("div", {
                          className: "w-24 h-24 rounded-4xl bg-violet-500/10 flex items-center justify-center mb-8 shadow-2xl shadow-violet-500/10 ring-8 ring-violet-500/5",
                          children: e.jsx(G, {
                            className: "w-10 h-10 text-violet-500 drop-shadow-sm"
                          })
                        }),
                        e.jsx("h2", {
                          className: "text-3xl font-black uppercase tracking-[0.2em] mb-4 text-foreground/90 text-center",
                          children: ((_d2 = (_c2 = i.currentSession) == null ? void 0 : _c2.modeConfig) == null ? void 0 : _d2.topic) || "\u7FA4\u804A"
                        }),
                        e.jsxs("p", {
                          className: "text-muted-foreground/80 font-medium tracking-wider mb-6 max-w-md text-center leading-relaxed text-sm",
                          children: [
                            "\u4E0E ",
                            (_g2 = (_f2 = (_e3 = i.currentSession) == null ? void 0 : _e3.modeConfig) == null ? void 0 : _f2.participantSnapshots) == null ? void 0 : _g2.map(($) => $.name).join("\u3001"),
                            " \u4E00\u8D77\u804A\u5929"
                          ]
                        }),
                        e.jsxs(j, {
                          type: "button",
                          size: "lg",
                          className: "h-14 px-10 text-base font-black tracking-[0.2em] rounded-2xl shadow-xl hover:shadow-violet-500/25 shadow-violet-500/10 transition-all hover:scale-105 active:scale-95 uppercase bg-foreground text-background hover:bg-foreground/90",
                          onClick: D,
                          disabled: h.current,
                          children: [
                            e.jsx(xe, {
                              className: "w-5 h-5 mr-3"
                            }),
                            b
                          ]
                        })
                      ]
                    });
                  }
                  const k = [
                    ...l
                  ];
                  return I && !I.hidden && !l.some((b) => b.id === I.id) && k.push(I), k.map((b, $) => {
                    var _a3, _b3, _c3, _d3;
                    return e.jsx(Me, {
                      item: b,
                      participants: ((_b3 = (_a3 = i.currentSession) == null ? void 0 : _a3.modeConfig) == null ? void 0 : _b3.participantSnapshots) || [],
                      userName: ((_d3 = (_c3 = i.currentSession) == null ? void 0 : _c3.modeConfig) == null ? void 0 : _d3.userName) || "\u6211",
                      isStreaming: b.id === W
                    }, `[${$}]${b.id}`);
                  });
                })()
              })
            }),
            p !== "idle" && e.jsxs("div", {
              className: "p-4 md:p-6 shrink-0 bg-background",
              children: [
                e.jsxs("div", {
                  className: "max-w-3xl mx-auto relative group",
                  children: [
                    e.jsx(ie, {
                      value: a,
                      onChange: (l) => n(l.target.value),
                      placeholder: C.placeholder,
                      className: "min-h-20 max-h-40 pr-28 py-4 resize-none rounded-2xl border-muted-foreground/15 bg-muted/20 focus-visible:ring-violet-500/20 focus-visible:bg-background transition-all",
                      onKeyDown: (l) => {
                        l.key === "Enter" && !l.shiftKey && (l.preventDefault(), N());
                      }
                    }),
                    e.jsxs("div", {
                      className: "absolute right-3 bottom-3 flex gap-2",
                      children: [
                        e.jsx(j, {
                          type: "button",
                          size: "icon",
                          variant: "ghost",
                          className: A("h-10 w-10 rounded-xl text-muted-foreground hover:text-violet-600", p === "ai_loop_paused" && "text-amber-500 animate-pulse"),
                          disabled: h.current,
                          onClick: X,
                          title: "\u8BA9 AI \u7EE7\u7EED\u5BF9\u8BDD\uFF08\u91CD\u7F6E\u8BA1\u6570\u5668\uFF09",
                          children: e.jsx(he, {
                            className: "w-4 h-4"
                          })
                        }),
                        e.jsx(j, {
                          type: "button",
                          size: "icon",
                          className: "h-10 w-10 rounded-xl shadow-lg hover:shadow-violet-500/20 transition-all",
                          disabled: !a.trim(),
                          onClick: N,
                          children: e.jsx(ge, {
                            className: "w-4 h-4"
                          })
                        })
                      ]
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "max-w-3xl mx-auto mt-2 px-2 flex justify-between items-center opacity-40",
                  children: [
                    e.jsx("div", {
                      className: "text-[9px] font-bold tracking-widest uppercase",
                      children: "GROUP CHAT"
                    }),
                    e.jsx("div", {
                      className: "text-[9px] font-medium",
                      children: "Shift + Enter \u6362\u884C \xB7 \u23E9 \u8BA9 AI \u7EE7\u7EED"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "w-70 h-full overflow-y-auto bg-muted/10 border-l p-6 space-y-6 shrink-0 hidden lg:block scrollbar-none",
          children: [
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80",
                  children: [
                    e.jsx(B, {
                      className: "w-3.5 h-3.5 text-violet-500"
                    }),
                    "\u7FA4\u804A\u6210\u5458"
                  ]
                }),
                e.jsx("div", {
                  className: "p-3 rounded-xl border bg-background/40 border-muted/30",
                  children: e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className: "w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600",
                        children: e.jsx(B, {
                          className: "w-4 h-4"
                        })
                      }),
                      e.jsx("div", {
                        className: "grow min-w-0",
                        children: e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className: "text-sm font-bold truncate",
                              children: ((_r = (_q = i.currentSession) == null ? void 0 : _q.modeConfig) == null ? void 0 : _r.userName) || "\u6211"
                            }),
                            e.jsx(y, {
                              variant: "outline",
                              className: "text-[8px] px-1 h-3.5 bg-blue-500/10 text-blue-600 border-blue-500/20",
                              children: "\u73A9\u5BB6"
                            })
                          ]
                        })
                      })
                    ]
                  })
                }),
                e.jsx("div", {
                  className: "space-y-2",
                  children: (_u = (_t = (_s = i.currentSession) == null ? void 0 : _s.modeConfig) == null ? void 0 : _t.participantSnapshots) == null ? void 0 : _u.map((l) => {
                    var _a2, _b2, _c2, _d2, _e3;
                    const I = l.id === ((_b2 = (_a2 = i.currentSession) == null ? void 0 : _a2.modeState) == null ? void 0 : _b2.currentSpeakerId) && p === "ai_loop_running", k = ((_e3 = (_d2 = (_c2 = i.currentSession) == null ? void 0 : _c2.modeState) == null ? void 0 : _d2.speakCounts) == null ? void 0 : _e3[l.id]) || 0;
                    return e.jsx("div", {
                      className: A("p-3 rounded-xl border transition-all duration-300", I ? "bg-violet-500/5 border-violet-500/30 shadow-sm shadow-violet-500/10" : "bg-background/40 border-muted/30"),
                      children: e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx("div", {
                            className: A("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", I ? "bg-violet-500/20 text-violet-600" : "bg-muted text-muted-foreground"),
                            children: e.jsx(V, {
                              className: "w-4 h-4"
                            })
                          }),
                          e.jsxs("div", {
                            className: "grow min-w-0",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2 mb-0.5",
                                children: [
                                  e.jsx("span", {
                                    className: "text-sm font-bold truncate",
                                    children: l.name
                                  }),
                                  I && e.jsx(y, {
                                    variant: "outline",
                                    className: "text-[8px] px-1 h-3.5 bg-violet-500/10 text-violet-600 border-violet-500/20",
                                    children: "\u53D1\u8A00\u4E2D"
                                  })
                                ]
                              }),
                              e.jsxs("div", {
                                className: "text-[10px] text-muted-foreground/60 font-medium",
                                children: [
                                  "\u53D1\u8A00 \xD7",
                                  k
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    }, l.id);
                  })
                })
              ]
            }),
            e.jsx("div", {
              className: "space-y-3 pt-4",
              children: e.jsxs(j, {
                type: "button",
                variant: "outline",
                className: "w-full h-10 rounded-xl border-dashed border-2 hover:border-violet-500/50 hover:bg-violet-500/5 gap-2",
                onClick: Y,
                children: [
                  e.jsx(fe, {
                    className: "w-4 h-4"
                  }),
                  e.jsx("span", {
                    className: "font-bold tracking-wider text-sm",
                    children: "\u9000\u51FA\u7FA4\u804A"
                  })
                ]
              })
            })
          ]
        })
      ]
    });
  };
  Me = ({ item: s, participants: t, userName: a, isStreaming: n }) => {
    var _a;
    switch (s.type) {
      case "gc_character_message":
        return e.jsx(F, {
          item: s,
          participants: t,
          isStreaming: n
        });
      case "gc_user_message":
        return e.jsx(De, {
          item: s,
          userName: a
        });
      case "gc_select_speaker":
        return null;
      default:
        return ((_a = s.data) == null ? void 0 : _a.content) ? e.jsx(F, {
          item: s,
          participants: t,
          isStreaming: n
        }) : null;
    }
  };
  F = ({ item: s, participants: t, isStreaming: a }) => {
    var _a;
    const n = s.data, o = n.characterName || ((_a = t.find((g) => g.id === n.characterId)) == null ? void 0 : _a.name) || "\u89D2\u8272", m = a ? "..." : Q(s.timestamp);
    return e.jsxs("div", {
      className: "flex gap-4 group animate-in fade-in slide-in-from-left-2 duration-300",
      children: [
        e.jsx("div", {
          className: "w-9 h-9 rounded-xl bg-violet-500/5 flex items-center justify-center shrink-0 border border-violet-500/10",
          children: e.jsx(V, {
            className: "w-4.5 h-4.5 text-violet-600"
          })
        }),
        e.jsxs("div", {
          className: "space-y-1 grow pt-0.5 min-w-0",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("span", {
                  className: "text-[10px] font-black tracking-[0.15em] text-violet-600/60 uppercase",
                  children: o
                }),
                e.jsx("span", {
                  className: "text-[9px] text-muted-foreground/40 font-medium tabular-nums",
                  children: m
                })
              ]
            }),
            e.jsx("div", {
              className: "text-[15px] leading-relaxed text-foreground/85 whitespace-pre-wrap",
              children: n.content || ""
            })
          ]
        })
      ]
    });
  };
  De = ({ item: s, userName: t }) => {
    const a = s.data, n = Q(s.timestamp);
    return e.jsxs("div", {
      className: "flex gap-4 group animate-in fade-in slide-in-from-right-2 duration-300",
      children: [
        e.jsx("div", {
          className: "w-9 h-9 rounded-xl bg-blue-500/5 flex items-center justify-center shrink-0 border border-blue-500/10",
          children: e.jsx(B, {
            className: "w-4.5 h-4.5 text-blue-600"
          })
        }),
        e.jsxs("div", {
          className: "space-y-1 grow pt-0.5 min-w-0",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("span", {
                  className: "text-[10px] font-black tracking-[0.15em] text-blue-600/60 uppercase",
                  children: a.userName || t
                }),
                e.jsx("span", {
                  className: "text-[9px] text-muted-foreground/40 font-medium tabular-nums",
                  children: n
                })
              ]
            }),
            e.jsx("div", {
              className: "text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap",
              children: a.content || ""
            })
          ]
        })
      ]
    });
  };
});
export {
  et as SessionMainForGroupChat,
  __tla
};
