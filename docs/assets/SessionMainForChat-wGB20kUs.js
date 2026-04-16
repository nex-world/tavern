const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-DI3V0061.js","assets/@tanstack-DDpiKjUN.js","assets/react-gFHNOnf5.js","assets/vendor-DRKpriaz.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-jNTqi4TF.js","assets/zod-DPWJ_A9_.js","assets/PlayerInputItem-D3Zy8kb-.js","assets/id-OxPLOBIU.js","assets/CharacterAvatar-TKrkqhhW.js","assets/shadcn-utils-BMZD7_jZ.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-COJ8Fh6m.js","assets/icons-CW-0NDo_.js"])))=>i.map(i=>d[i]);
import { al as b, r as l, u as L, j as t } from "./react-gFHNOnf5.js";
import { S as A, C as F, f as D } from "./db-master-DI3V0061.js";
import { f as H, i as k } from "./@tanstack-DDpiKjUN.js";
import { s as z } from "./db-BmpCv5B4.js";
import { _ as M, __tla as __tla_0 } from "./index-7c6pKJ8J.js";
import { n as _ } from "./id-OxPLOBIU.js";
import { C as S } from "./context-manager.class-BTc8g_cx.js";
import { m as O, P, C as T, a as V } from "./PlayerInputItem-D3Zy8kb-.js";
import { B as U } from "./button-D3G-RLOw.js";
import { T as $ } from "./textarea-DqdRyzs9.js";
import { B as E } from "./badge-C9CmQsZA.js";
import { C as B } from "./CharacterAvatar-TKrkqhhW.js";
import { u as K } from "./useLLM-B1Ewhspf.js";
import { a8 as Y } from "./icons-CW-0NDo_.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./zod-DPWJ_A9_.js";
import "./dexie-jNTqi4TF.js";
import "./es-toolkit-CstbrnlE.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./global-llm-config.store-BYX0tcdb.js";
import "./app-configurations-Cz44104t.js";
let we;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const m = b({
    currentSession: null,
    contextManager: null,
    get messages() {
      if (!(this.contextManager && this.currentSession)) return [];
      const e = O(this.contextManager.state, {
        characterId: this.currentSession.modeConfig.characterId
      });
      return Array.isArray(e) ? e : [];
    },
    startNewSession(e, s) {
      const o = {
        id: _(),
        contextId: null,
        mode: "chat",
        modeConfig: e,
        modeState: {
          currentPhase: "character_first_msg"
        },
        createdAt: Date.now(),
        updatedAt: Date.now(),
        isActive: true
      };
      this.currentSession = o;
      const n = new S(s || {
        historyItems: [],
        processingItem: void 0
      });
      return n.state = b(n.state), this.contextManager = n, o;
    },
    getContextState() {
      return this.contextManager ? this.contextManager.state : null;
    },
    updateContextState(e) {
      this.contextManager && (Object.assign(this.contextManager.state, e), this.currentSession && (this.currentSession.updatedAt = Date.now()));
    },
    updateCurrentPhase(e) {
      this.currentSession && (this.currentSession.modeState.currentPhase = e, this.currentSession.updatedAt = Date.now());
    },
    updateCurrentConfig(e) {
      this.currentSession && (Object.assign(this.currentSession.modeConfig, e), this.currentSession.updatedAt = Date.now());
    },
    endCurrentSession() {
      this.currentSession = null, this.contextManager = null;
    },
    getCurrentSessionSnapshot() {
      return this.currentSession ? {
        ...this.currentSession
      } : null;
    },
    loadFromData(e) {
      this.currentSession = e.session, e.contextState && (this.contextManager = new S(e.contextState), this.contextManager.state = b(this.contextManager.state));
    },
    loadSession(e) {
      this.currentSession = e;
    },
    async saveNewContextItemsToDB(e, s) {
      const { SessionDB: o } = await M(async () => {
        const { SessionDB: g } = await import("./db-master-DI3V0061.js").then((y) => y.s);
        return {
          SessionDB: g
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7]));
      await new o(e).addContextItems(s);
    }
  });
  function Q(e, s) {
    const o = K(), n = l.useRef(false), g = H(), y = l.useCallback(async (h) => {
      if (!(n.current || !s || s.getHistoryCount() > 0 || !e)) try {
        n.current = true;
        const { makeChatModeStartingContextItems_CN: p } = await M(async () => {
          const { makeChatModeStartingContextItems_CN: d } = await import("./PlayerInputItem-D3Zy8kb-.js").then((r) => r.c);
          return {
            makeChatModeStartingContextItems_CN: d
          };
        }, __vite__mapDeps([8,0,1,2,3,4,5,6,7,9,10,11,12,13,14])), x = p(e);
        for (const d of x) s.addHistoryItem(d);
        const w = x.find((d) => d.type === "character_intro");
        if (w && h) {
          const d = w.data.content.split(" ");
          let r = "";
          for (const i of d) r += (r ? " " : "") + i, h(r), await new Promise((u) => setTimeout(u, 50));
        }
      } catch (p) {
        console.error("Initialize Chat Error:", p), L.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", {
          duration: Number.POSITIVE_INFINITY,
          action: {
            label: "\u524D\u5F80\u914D\u7F6E",
            onClick: () => g({
              to: "/config/llm"
            })
          }
        });
      } finally {
        n.current = false;
      }
    }, [
      s,
      e
    ]), j = l.useCallback(async (h, p) => {
      if (!(n.current || !e || !s)) try {
        n.current = true, s.addLLMResponseAsContextItem({
          role: "user",
          content: h
        }, {});
        const { makeChatModeLLMMessagesFromContextStateForCharacterId: x } = await M(async () => {
          const { makeChatModeLLMMessagesFromContextStateForCharacterId: u } = await import("./PlayerInputItem-D3Zy8kb-.js").then((C) => C.c);
          return {
            makeChatModeLLMMessagesFromContextStateForCharacterId: u
          };
        }, __vite__mapDeps([8,0,1,2,3,4,5,6,7,9,10,11,12,13,14])), d = x(s.state, {
          characterId: e.id
        }).map((u) => ({
          id: _(),
          role: u.role,
          content: u.content,
          name: u.name
        })), r = {
          id: _(),
          type: "character_message",
          orderRef: 0,
          timestamp: Date.now(),
          data: {
            characterId: e.id,
            content: "",
            name: e.name
          }
        };
        s.setProcessingItem(r);
        let i = "";
        await o.callLLMStream(d, (u, C) => {
          i = C, p == null ? void 0 : p(u);
          const v = s.getProcessingItem();
          v && (v.data.content = i);
        }), r.data.content = i, s.completeProcessingItem();
      } catch (x) {
        console.error("ChatLoop Error:", x), L.error("LLM \u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80 LLM \u914D\u7F6E\u9875\u9762\u8FDB\u884C\u914D\u7F6E", {
          duration: Number.POSITIVE_INFINITY,
          action: {
            label: "\u524D\u5F80\u914D\u7F6E",
            onClick: () => g({
              to: "/config/llm"
            })
          }
        });
      } finally {
        n.current = false;
      }
    }, [
      s,
      e,
      o
    ]);
    return {
      initializeChat: y,
      sendUserMessage: j
    };
  }
  let q, G;
  we = (e) => {
    var _a;
    const [s, o] = l.useState(""), n = l.useRef(null), [g, y] = l.useState(false), [j, h] = l.useState(""), [p, x] = l.useState(false), { data: w = [] } = k((a) => a.from({
      s: A
    })), { data: d = [] } = k((a) => a.from({
      c: F
    })), r = w.find((a) => a.id === e.sessionId), i = d.find((a) => a.id === (r == null ? void 0 : r.characterId));
    l.useEffect(() => {
      let a = false;
      return x(false), (async () => {
        if (r) try {
          const I = await z.createSessionDB(r.id).getContextItems();
          if (a) return;
          const N = {
            historyItems: I,
            processingItem: void 0
          }, R = new S(N);
          m.contextManager = R, D(r.id), x(true);
        } catch {
          if (!a) {
            const f = new S({
              historyItems: [],
              processingItem: void 0
            });
            m.contextManager = f, x(true);
          }
        }
      })(), () => {
        a = true;
      };
    }, [
      r
    ]), l.useEffect(() => () => {
      e.sessionId && D(e.sessionId);
    }, [
      e.sessionId
    ]);
    const { sendUserMessage: u, initializeChat: C } = Q(i, m.contextManager);
    if (l.useEffect(() => {
      var _a2;
      p && ((_a2 = m.contextManager) == null ? void 0 : _a2.getHistoryCount()) === 0 && i && r && (async () => {
        if (await C((c) => {
          h((f) => f + c);
        }), m.contextManager) {
          const c = m.contextManager.getHistoryItems();
          c.length > 0 && await m.saveNewContextItemsToDB(r.id, c);
        }
      })();
    }, [
      p,
      C,
      i,
      r
    ]), l.useEffect(() => {
      n.current && (n.current.scrollTop = n.current.scrollHeight);
    }), !(r && i)) return t.jsx("div", {
      className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
      children: t.jsx("p", {
        children: "\u4F1A\u8BDD\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664"
      })
    });
    const v = async () => {
      if (!(!s.trim() || g)) {
        y(true), h("");
        try {
          if (await u(s, (a) => {
            h((c) => c + a);
          }), m.contextManager && r) {
            const c = m.contextManager.getHistoryItems().filter((f) => !f.processing);
            c.length > 0 && await m.saveNewContextItemsToDB(r.id, c);
          }
        } catch (a) {
          console.error("Send message error:", a);
        } finally {
          y(false), h("");
        }
        o("");
      }
    };
    return t.jsx("div", {
      className: "flex flex-row h-full overflow-hidden bg-background",
      children: t.jsxs("div", {
        className: "flex flex-col grow min-w-0 h-full relative",
        children: [
          t.jsxs("div", {
            className: "h-14 border-b flex items-center px-4 md:px-6 justify-between shrink-0 bg-background/80 backdrop-blur-md z-10",
            children: [
              t.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  t.jsx(B, {
                    character: i,
                    size: "xs",
                    shape: "circle"
                  }),
                  t.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      t.jsx("span", {
                        className: "font-bold text-sm leading-tight",
                        children: i.name
                      }),
                      t.jsx("span", {
                        className: "text-[10px] text-muted-foreground",
                        children: i.nickname || "NPC"
                      })
                    ]
                  })
                ]
              }),
              t.jsx("div", {
                className: "flex items-center gap-2",
                children: t.jsx(E, {
                  variant: "secondary",
                  className: "text-[9px] h-5 px-1.5 font-bold uppercase",
                  children: "CHAT MODE"
                })
              })
            ]
          }),
          t.jsx("div", {
            className: "flex grow overflow-y-auto p-4 md:p-8 space-y-8",
            ref: n,
            children: t.jsxs("div", {
              className: "max-w-4xl mx-auto w-full space-y-8",
              children: [
                (() => {
                  var _a2, _b;
                  const a = ((_a2 = m.contextManager) == null ? void 0 : _a2.getVisibleHistoryItems()) || [], c = (_b = m.contextManager) == null ? void 0 : _b.getProcessingItem(), f = [
                    ...a
                  ];
                  return c && !a.some((I) => I.id === c.id) && f.push(c), f.map((I, N) => t.jsx(q, {
                    item: I,
                    character: i,
                    isProcessing: I.processing || void 0,
                    streamingText: I.processing ? j : void 0
                  }, `[${N}]${I.id}`));
                })(),
                g && !((_a = m.contextManager) == null ? void 0 : _a.getProcessingItem()) && t.jsxs("div", {
                  className: "flex gap-4 animate-pulse",
                  children: [
                    t.jsx("div", {
                      className: "w-10 h-10 rounded-full bg-muted shrink-0"
                    }),
                    t.jsxs("div", {
                      className: "space-y-3 grow pt-2",
                      children: [
                        t.jsx("div", {
                          className: "h-4 bg-muted rounded w-1/4"
                        }),
                        t.jsx("div", {
                          className: "h-24 bg-muted rounded w-full"
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          }),
          t.jsxs("div", {
            className: "p-4 md:p-6 border-t shrink-0 bg-background/50 backdrop-blur-sm",
            children: [
              t.jsxs("div", {
                className: "max-w-4xl mx-auto relative group",
                children: [
                  t.jsx("div", {
                    className: "absolute -inset-0.5 bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"
                  }),
                  t.jsxs("div", {
                    className: "relative",
                    children: [
                      t.jsx($, {
                        value: s,
                        onChange: (a) => o(a.target.value),
                        placeholder: `\u5411 ${i.name} \u53D1\u9001\u6D88\u606F...`,
                        className: "min-h-24 max-h-60 pr-14 py-4 resize-none rounded-2xl border-muted-foreground/20 focus-visible:ring-primary/30 bg-background",
                        onKeyDown: (a) => {
                          a.key === "Enter" && !a.shiftKey && (a.preventDefault(), v());
                        }
                      }),
                      t.jsx(U, {
                        size: "icon",
                        className: "absolute right-3 bottom-3 h-10 w-10 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform",
                        disabled: !s.trim() || g,
                        onClick: v,
                        type: "button",
                        children: t.jsx(Y, {
                          className: "w-5 h-5"
                        })
                      })
                    ]
                  })
                ]
              }),
              t.jsx("p", {
                className: "text-[10px] text-center text-muted-foreground mt-3 font-medium uppercase tracking-tighter opacity-50",
                children: "Shift + Enter to line break \u2022 Enter to send"
              })
            ]
          })
        ]
      })
    });
  };
  q = (e) => {
    switch (e.item.type) {
      case "character_intro":
        return t.jsx(V, {
          item: e.item,
          character: e.character
        });
      case "character_message":
        return e.isProcessing ? t.jsx(G, {
          item: e.item,
          character: e.character,
          streamingText: e.streamingText || ""
        }) : t.jsx(T, {
          item: e.item,
          character: e.character
        });
      case "character_message_group":
        return t.jsx("div", {
          className: "space-y-4",
          children: (e.item.data.list || []).map((s, o) => t.jsx(T, {
            item: {
              ...e.item,
              type: "character_message",
              data: {
                ...e.item.data,
                content: s.content,
                timestamp: s.timestamp
              }
            },
            character: e.character
          }, s.id || o))
        });
      case "participant_message":
        return t.jsx(P, {
          item: e.item
        });
      case "participant_message_group":
        return t.jsx("div", {
          className: "space-y-4",
          children: (e.item.data.list || []).map((s, o) => t.jsx(P, {
            item: {
              ...e.item,
              type: "participant_message",
              data: {
                ...e.item.data,
                content: s.content,
                timestamp: s.timestamp
              }
            }
          }, s.id || o))
        });
      case "system_notification":
        return t.jsx("div", {
          className: "flex justify-center my-4",
          children: t.jsx(E, {
            variant: "outline",
            className: "px-3 py-1 text-[10px] text-muted-foreground bg-muted/20",
            children: e.item.data.content
          })
        });
      case "starting_system_message":
      case "in_context_system_message":
      case "placeholder":
        return null;
      default:
        return console.warn("Unknown context item type:", e.item.type), null;
    }
  };
  G = (e) => e.item.type === "character_message" ? t.jsxs("div", {
    className: "flex gap-4 animate-pulse",
    children: [
      t.jsx("div", {
        className: "shrink-0",
        children: t.jsx(B, {
          character: e.character,
          size: "sm",
          shape: "rounded"
        })
      }),
      t.jsxs("div", {
        className: "space-y-1.5 grow pt-1",
        children: [
          t.jsx("div", {
            className: "text-xs font-bold tracking-widest text-muted-foreground flex items-center gap-2",
            children: e.character.name
          }),
          t.jsx("div", {
            className: "text-[15px] leading-relaxed whitespace-pre-wrap text-foreground/90 font-medium",
            children: e.streamingText || e.item.data.content
          })
        ]
      })
    ]
  }) : null;
});
export {
  we as SessionMainForChat,
  __tla
};
