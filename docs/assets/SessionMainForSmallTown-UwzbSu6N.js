const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-BrZHBPj2.js","assets/@tanstack-3iyDWv8L.js","assets/react-D9TtqY-V.js","assets/vendor-C4ToNUTj.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-C2pyTzVO.js","assets/zod-fbN9ubnj.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { D as X, F as Se, j as o, r as x, E as se } from "./react-D9TtqY-V.js";
import { i as Te, j as ve } from "./@tanstack-3iyDWv8L.js";
import { S as be, g as je } from "./db-master-BrZHBPj2.js";
import { _ as J, __tla as __tla_0 } from "./index-IzUhM_kF.js";
import { n as G } from "./id-OxPLOBIU.js";
import { f as ne, M as ie, a as ke, W as Ne, L as F, G as I, b as A, I as S, d as oe, R as ae, T as Ce, e as we, g as W, D as $e, h as K, S as Z } from "./slider-D-CCs0Tm.js";
import { C as Ie } from "./context-manager.class-B2xis078.js";
import { B as _ } from "./button-CMoAlsw3.js";
import { al as Ae, ak as Ee, a3 as Pe, ap as Me } from "./icons-bBaH0MBC.js";
import { A as V } from "./vendor-C4ToNUTj.js";
import { u as De } from "./useLLM-tAU3ECR6.js";
import { D as re, a as le, b as ce, c as de, d as ue, e as Re } from "./dialog-v6BqSj-g.js";
import { L as R } from "./label-CBzbyhxK.js";
import { S as q } from "./switch-CGreuh1l.js";
import { I as z } from "./input-CtGFdN_9.js";
import { c as Le } from "./shadcn-utils-BMZD7_jZ.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C2pyTzVO.js";
import "./zod-fbN9ubnj.js";
import "./es-toolkit-CstbrnlE.js";
import "./components-and-styling-lnR2ABT4.js";
import "./global-llm-config.store-C91qlFOh.js";
import "./app-configurations-Cz44104t.js";
import "./@tailwind-COJ8Fh6m.js";
let vs;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  class Oe {
    constructor(s) {
      __publicField(this, "session");
      this.session = s;
    }
    getSession() {
      return this.session;
    }
    getConfig() {
      return this.session.modeConfig;
    }
    getState() {
      return this.session.modeState;
    }
    getGameTime() {
      return this.session.modeState.gameTime;
    }
    getTickCount() {
      return this.session.modeState.tickCount;
    }
    isRunning() {
      return this.session.modeState.isRunning;
    }
    getCharacterState(s) {
      return this.session.modeState.characterStates[s];
    }
    getAllCharacterStates() {
      return Object.values(this.session.modeState.characterStates);
    }
    getCharacterIds() {
      return Object.keys(this.session.modeState.characterStates);
    }
    updateCharacterState(s, t) {
      const n = this.session.modeState.characterStates[s];
      n && (this.session.modeState.characterStates[s] = {
        ...n,
        ...t
      });
    }
    setCharacterState(s, t) {
      this.session.modeState.characterStates[s] = t;
    }
    start() {
      this.session.modeState.isRunning = true, this.session.modeState.currentPhase = "running";
    }
    pause() {
      this.session.modeState.isRunning = false, this.session.modeState.currentPhase = "paused";
    }
    toggle() {
      this.session.modeState.isRunning ? this.pause() : this.start();
    }
    setGameTime(s) {
      this.session.modeState.gameTime = s;
    }
    incrementTickCount() {
      this.session.modeState.tickCount++;
    }
    addLog(s, t, n) {
      const i = {
        time: ne(this.session.modeState.gameTime),
        source: t,
        content: s,
        type: n
      };
      this.session.modeState.logs.push(i), this.session.modeState.logs.length > 500 && (this.session.modeState.logs = this.session.modeState.logs.slice(-400));
    }
    getLogs() {
      return this.session.modeState.logs;
    }
    getRecentLogs(s) {
      return this.session.modeState.logs.slice(-s);
    }
    getSalesStand() {
      return this.session.modeState.salesStand;
    }
    setSalesStand(s) {
      this.session.modeState.salesStand = s;
    }
    addSalesItem(s) {
      this.session.modeState.salesStand.push(s);
    }
    removeSalesItem(s) {
      this.session.modeState.salesStand = this.session.modeState.salesStand.filter((t) => t.id !== s);
    }
    getSnapshot() {
      return {
        config: {
          ...this.session.modeConfig
        },
        state: {
          ...this.session.modeState,
          characterStates: {
            ...this.session.modeState.characterStates
          },
          salesStand: [
            ...this.session.modeState.salesStand
          ],
          logs: [
            ...this.session.modeState.logs
          ]
        }
      };
    }
  }
  const f = X({
    currentSession: null,
    sessionManager: null,
    contextManager: null,
    historyItems: [],
    aiProcessingState: {
      isProcessing: false,
      processingCharacters: /* @__PURE__ */ new Set(),
      startedAt: 0,
      ticksPending: 0
    },
    loadSession(e, s) {
      this.currentSession = JSON.parse(JSON.stringify(e)), this.currentSession && (this.currentSession.modeState.isRunning = false, this.currentSession.modeState.currentPhase = "paused"), this.currentSession && (this.sessionManager = new Oe(this.currentSession));
      const t = X(s || {
        historyItems: [],
        processingItem: void 0
      });
      this.contextManager = new Ie(t), this.historyItems = [
        ...(s == null ? void 0 : s.historyItems) || []
      ];
    },
    unloadSession() {
      this.currentSession = null, this.sessionManager = null, this.contextManager = null, this.historyItems = [];
    },
    start() {
      this.currentSession && (this.currentSession.modeState.isRunning = true, this.currentSession.modeState.currentPhase = "running", this.updateSessionInDB());
    },
    pause() {
      this.currentSession && (this.currentSession.modeState.isRunning = false, this.currentSession.modeState.currentPhase = "paused", this.updateSessionInDB());
    },
    toggle() {
      var _a;
      ((_a = this.currentSession) == null ? void 0 : _a.modeState.isRunning) ? this.pause() : this.start();
    },
    getCharacterState(e) {
      var _a;
      return (_a = this.currentSession) == null ? void 0 : _a.modeState.characterStates[e];
    },
    updateCharacterState(e, s) {
      if (this.currentSession) {
        const t = this.currentSession.modeState.characterStates[e];
        t && (this.currentSession.modeState.characterStates[e] = {
          ...t,
          ...s
        });
      }
    },
    setCharacterState(e, s) {
      this.currentSession && (this.currentSession.modeState.characterStates[e] = s);
    },
    advanceTime() {
      if (!this.currentSession) return {
        dayChanged: false,
        oldDay: 0
      };
      const e = this.currentSession.modeState, s = e.gameTime.day;
      let { day: t, hour: n, minute: i } = e.gameTime;
      return i += ie, i >= 60 && (n += Math.floor(i / 60), i %= 60), n >= 24 && (t += Math.floor(n / 24), n %= 24), e.gameTime = {
        day: t,
        hour: n,
        minute: i
      }, e.tickCount++, {
        dayChanged: t !== s,
        oldDay: s
      };
    },
    addLog(e, s, t) {
      if (!(this.currentSession && this.contextManager)) return;
      let n;
      const i = Date.now(), r = ne(this.currentSession.modeState.gameTime);
      t === "chat" ? n = {
        id: G(),
        type: "participant_message",
        timestamp: i,
        data: {
          content: e,
          name: s,
          role: "assistant",
          isCharacter: true,
          characterId: s,
          isUser: false,
          isDM: false,
          isEnv: false,
          gameTime: r
        }
      } : n = {
        id: G(),
        type: "alert",
        timestamp: i,
        orderRef: 0,
        data: {
          type: t === "trade" ? "success" : "info",
          content: e,
          source: s,
          gameTime: r,
          timestamp: i
        }
      }, this.contextManager.addHistoryItem(n), this.historyItems = [
        ...this.historyItems,
        n
      ], this.historyItems.length > 500 && (this.historyItems = this.historyItems.slice(-400)), this.saveContextItemToDB(this.currentSession.id, n).catch((l) => {
        console.error("Failed to save log to DB:", l);
      });
    },
    getSalesStand() {
      var _a;
      return ((_a = this.currentSession) == null ? void 0 : _a.modeState.salesStand) ?? [];
    },
    setSalesStand(e) {
      this.currentSession && (this.currentSession.modeState.salesStand = e);
    },
    startAIProcessing(e) {
      this.aiProcessingState.isProcessing = true, this.aiProcessingState.startedAt = Date.now(), this.aiProcessingState.processingCharacters = new Set(e);
    },
    finishAIProcessing() {
      this.aiProcessingState.isProcessing = false, this.aiProcessingState.processingCharacters = /* @__PURE__ */ new Set(), this.aiProcessingState.startedAt = 0;
    },
    addPendingTick() {
      this.aiProcessingState.ticksPending++;
    },
    consumePendingTicks() {
      const e = this.aiProcessingState.ticksPending;
      return this.aiProcessingState.ticksPending = 0, e;
    },
    isAIStuck() {
      var _a;
      if (!this.aiProcessingState.isProcessing) return false;
      const e = ((_a = this.currentSession) == null ? void 0 : _a.modeConfig.settings.aiTimeoutMs) ?? 3e4;
      return Date.now() - this.aiProcessingState.startedAt > e;
    },
    async saveContextItemToDB(e, s) {
      const { SessionDB: t } = await J(async () => {
        const { SessionDB: r } = await import("./db-master-BrZHBPj2.js").then((l) => l.s);
        return {
          SessionDB: r
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7])), n = new t(e), i = JSON.parse(JSON.stringify(s));
      await n.addContextItems([
        i
      ]);
    },
    async updateSessionInDB() {
      if (!this.currentSession) return;
      const { masterDb: e } = await J(async () => {
        const { masterDb: t } = await import("./db-master-BrZHBPj2.js").then((n) => n.t);
        return {
          masterDb: t
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7])), s = Se(this.currentSession.modeState);
      await e.sessions.update(this.currentSession.id, {
        modeState: s,
        updatedAt: Date.now()
      });
    }
  });
  function _e({ gameTime: e, isRunning: s, onToggle: t, onSettings: n }) {
    return o.jsxs("div", {
      className: "flex items-center justify-between px-4 py-2 border-b bg-card",
      children: [
        o.jsxs("div", {
          className: "flex items-center gap-4",
          children: [
            o.jsx("h1", {
              className: "text-lg font-semibold",
              children: "\u{1F3D8}\uFE0F \u5C0F\u9547\u6A21\u5F0F"
            }),
            o.jsx("div", {
              className: "text-sm text-muted-foreground",
              children: ke(e)
            })
          ]
        }),
        o.jsx("div", {
          className: "flex items-center gap-2",
          children: o.jsx(_, {
            type: "button",
            variant: s ? "default" : "outline",
            size: "sm",
            onClick: t,
            children: s ? o.jsxs(o.Fragment, {
              children: [
                o.jsx(Ae, {
                  className: "w-4 h-4 mr-1"
                }),
                "\u6682\u505C"
              ]
            }) : o.jsxs(o.Fragment, {
              children: [
                o.jsx(Ee, {
                  className: "w-4 h-4 mr-1"
                }),
                "\u5F00\u59CB"
              ]
            })
          })
        }),
        o.jsx("div", {
          className: "flex items-center gap-2",
          children: o.jsx(_, {
            type: "button",
            variant: "ghost",
            size: "icon",
            onClick: n,
            children: o.jsx(Pe, {
              className: "w-4 h-4"
            })
          })
        })
      ]
    });
  }
  function Fe({ config: e, gridSize: s }) {
    const t = {
      position: "absolute",
      left: e.x * s,
      top: e.y * s,
      width: e.w * s,
      height: e.h * s,
      backgroundColor: e.color,
      opacity: 0.6
    };
    return o.jsx("div", {
      className: "rounded border border-black/10 dark:border-white/10 flex items-center justify-center text-center pointer-events-none",
      style: t,
      title: e.info || e.label,
      children: o.jsx("span", {
        className: "text-xs font-medium text-black/70 dark:text-white/70 px-1 leading-tight",
        children: e.label
      })
    });
  }
  const Be = 5e3;
  function We({ character: e, gridSize: s, isSelected: t, onClick: n }) {
    var _a;
    const i = s * 0.8, r = (s - i) / 2, l = e.visualX ?? e.gridX, d = e.visualY ?? e.gridY, a = {
      position: "absolute",
      left: l * s + r,
      top: d * s + r,
      width: i,
      height: i,
      backgroundColor: e.color,
      zIndex: t ? 10 : 1
    }, u = e.taskTimer > 0, m = Ne, c = u ? Math.max(0, Math.min(100, (m - e.taskTimer) / m * 100)) : 0, p = e.lastDialogue && Date.now() - e.lastDialogue.timestamp < Be, y = ((_a = e.lastDialogue) == null ? void 0 : _a.content) ? e.lastDialogue.content.length > 20 ? `${e.lastDialogue.content.slice(0, 20)}...` : e.lastDialogue.content : "";
    return o.jsxs("div", {
      style: a,
      className: "flex flex-col items-center justify-center pointer-events-none",
      children: [
        p && o.jsxs("div", {
          className: "absolute -top-12 left-1/2 -translate-x-1/2 max-w-32 px-2 py-1 bg-white dark:bg-gray-800 text-xs text-gray-800 dark:text-gray-200 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 whitespace-nowrap overflow-hidden text-ellipsis z-20",
          children: [
            o.jsx("div", {
              className: "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"
            }),
            '"',
            y,
            '"'
          ]
        }),
        u && o.jsx("div", {
          className: "absolute -top-3 w-8 h-1 bg-gray-200 rounded-full overflow-hidden border border-black/10",
          children: o.jsx("div", {
            className: "h-full bg-blue-500 transition-all duration-300 ease-linear",
            style: {
              width: `${c}%`
            }
          })
        }),
        e.thought && !u && !p && o.jsx("div", {
          className: "absolute -top-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
        }),
        o.jsx("button", {
          type: "button",
          className: `w-full h-full rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform pointer-events-auto shadow-sm border border-white/20 ${t ? "ring-2 ring-primary ring-offset-2" : ""}`,
          style: {
            backgroundColor: e.color
          },
          onClick: n,
          title: `${e.name}: ${e.status}`,
          children: e.name.charAt(0)
        }),
        o.jsx("span", {
          className: "absolute -bottom-4 text-[10px] whitespace-nowrap bg-black/50 text-white px-1 rounded backdrop-blur-sm",
          children: e.name
        })
      ]
    });
  }
  function Ye({ characterStates: e, selectedCharacterId: s, onSelectCharacter: t }) {
    const n = I * A, i = x.useMemo(() => Object.entries(F).map(([d, a]) => o.jsx(Fe, {
      locationKey: d,
      config: a,
      gridSize: I
    }, d)), []), r = x.useMemo(() => e.map((d) => o.jsx(We, {
      character: d,
      gridSize: I,
      isSelected: d.id === s,
      onClick: () => t(d.id)
    }, d.id)), [
      e,
      s,
      t
    ]), l = x.useMemo(() => e.map((d) => {
      if (!d.currentPath || d.currentPath.length < 2) return null;
      const a = d.currentPath.map(([u, m]) => `${u * I + I / 2},${m * I + I / 2}`).join(" ");
      return o.jsx("polyline", {
        points: a,
        fill: "none",
        stroke: d.color,
        strokeWidth: "2",
        strokeDasharray: "4 2",
        opacity: "0.5"
      }, `path-${d.id}`);
    }), [
      e
    ]);
    return o.jsxs("div", {
      className: "relative bg-amber-50 dark:bg-amber-950/20 rounded-lg border overflow-hidden",
      style: {
        width: n,
        height: n,
        minWidth: n,
        minHeight: n
      },
      children: [
        o.jsx("div", {
          className: "absolute inset-0 pointer-events-none",
          style: {
            backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
            backgroundSize: `${I}px ${I}px`
          }
        }),
        o.jsx("svg", {
          className: "absolute inset-0 pointer-events-none",
          width: n,
          height: n,
          children: l
        }),
        i,
        r
      ]
    });
  }
  function Ue({ character: e, onOpenDiary: s }) {
    if (!e) return o.jsx("div", {
      className: "w-72 border-l bg-card p-4",
      children: o.jsx("p", {
        className: "text-muted-foreground text-sm",
        children: "\u9009\u62E9\u4E00\u4E2A\u89D2\u8272\u67E5\u770B\u8BE6\u60C5"
      })
    });
    const t = e.stamina / e.maxStamina * 100, n = e.energy / e.maxEnergy * 100, i = e.happiness;
    return o.jsxs("div", {
      className: "w-72 border-l bg-card overflow-y-auto",
      children: [
        o.jsx("div", {
          className: "p-4 border-b",
          children: o.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              o.jsx("div", {
                className: "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg",
                style: {
                  backgroundColor: e.color
                },
                children: e.name.charAt(0)
              }),
              o.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  o.jsx("h2", {
                    className: "font-semibold truncate",
                    children: e.name
                  }),
                  o.jsx("p", {
                    className: "text-xs text-muted-foreground truncate",
                    children: e.personality
                  })
                ]
              })
            ]
          })
        }),
        o.jsxs("div", {
          className: "p-4 border-b space-y-3",
          children: [
            o.jsx("h3", {
              className: "text-sm font-medium text-muted-foreground",
              children: "\u72B6\u6001"
            }),
            o.jsxs("div", {
              className: "space-y-1",
              children: [
                o.jsxs("div", {
                  className: "flex justify-between text-sm",
                  children: [
                    o.jsx("span", {
                      children: "\u4F53\u529B"
                    }),
                    o.jsxs("span", {
                      children: [
                        e.stamina,
                        "/",
                        e.maxStamina
                      ]
                    })
                  ]
                }),
                o.jsx("div", {
                  className: "h-2 bg-muted rounded-full overflow-hidden",
                  children: o.jsx("div", {
                    className: "h-full bg-green-500 transition-all",
                    style: {
                      width: `${t}%`
                    }
                  })
                })
              ]
            }),
            o.jsxs("div", {
              className: "space-y-1",
              children: [
                o.jsxs("div", {
                  className: "flex justify-between text-sm",
                  children: [
                    o.jsx("span", {
                      children: "\u6D3B\u529B"
                    }),
                    o.jsxs("span", {
                      children: [
                        e.energy,
                        "/",
                        e.maxEnergy
                      ]
                    })
                  ]
                }),
                o.jsx("div", {
                  className: "h-2 bg-muted rounded-full overflow-hidden",
                  children: o.jsx("div", {
                    className: "h-full bg-blue-500 transition-all",
                    style: {
                      width: `${n}%`
                    }
                  })
                })
              ]
            }),
            o.jsxs("div", {
              className: "space-y-1",
              children: [
                o.jsxs("div", {
                  className: "flex justify-between text-sm",
                  children: [
                    o.jsx("span", {
                      children: "\u6109\u60A6"
                    }),
                    o.jsxs("span", {
                      children: [
                        e.happiness,
                        "/100"
                      ]
                    })
                  ]
                }),
                o.jsx("div", {
                  className: "h-2 bg-muted rounded-full overflow-hidden",
                  children: o.jsx("div", {
                    className: "h-full bg-yellow-500 transition-all",
                    style: {
                      width: `${i}%`
                    }
                  })
                })
              ]
            }),
            o.jsxs("div", {
              className: "flex justify-between text-sm",
              children: [
                o.jsx("span", {
                  children: "\u{1F4B0} \u91D1\u94B1"
                }),
                o.jsxs("span", {
                  className: "font-medium",
                  children: [
                    "$",
                    e.money
                  ]
                })
              ]
            })
          ]
        }),
        o.jsxs("div", {
          className: "p-4 border-b space-y-2",
          children: [
            o.jsx("h3", {
              className: "text-sm font-medium text-muted-foreground",
              children: "\u5F53\u524D\u6D3B\u52A8"
            }),
            o.jsxs("div", {
              className: "text-sm",
              children: [
                o.jsxs("p", {
                  children: [
                    o.jsx("span", {
                      className: "text-muted-foreground",
                      children: "\u72B6\u6001:"
                    }),
                    " ",
                    e.status
                  ]
                }),
                o.jsxs("p", {
                  children: [
                    o.jsx("span", {
                      className: "text-muted-foreground",
                      children: "\u4F4D\u7F6E:"
                    }),
                    " ",
                    e.locationName
                  ]
                }),
                o.jsxs("p", {
                  children: [
                    o.jsx("span", {
                      className: "text-muted-foreground",
                      children: "\u4EFB\u52A1:"
                    }),
                    " ",
                    e.taskName
                  ]
                })
              ]
            })
          ]
        }),
        o.jsxs("div", {
          className: "p-4 border-b space-y-2",
          children: [
            o.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                o.jsx("h3", {
                  className: "text-sm font-medium text-muted-foreground",
                  children: "\u5185\u5FC3\u60F3\u6CD5"
                }),
                s && o.jsxs(_, {
                  variant: "ghost",
                  size: "sm",
                  className: "h-6 px-2 text-muted-foreground hover:text-foreground",
                  onClick: s,
                  children: [
                    o.jsx(Me, {
                      className: "w-3 h-3 mr-1"
                    }),
                    "\u65E5\u8BB0"
                  ]
                })
              ]
            }),
            o.jsxs("p", {
              className: "text-sm italic text-muted-foreground",
              children: [
                '"',
                e.thought || "...",
                '"'
              ]
            })
          ]
        }),
        o.jsxs("div", {
          className: "p-4 border-b space-y-2",
          children: [
            o.jsx("h3", {
              className: "text-sm font-medium text-muted-foreground",
              children: "\u5E93\u5B58"
            }),
            Object.keys(e.inventory).length === 0 ? o.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "(\u7A7A)"
            }) : o.jsx("div", {
              className: "space-y-1",
              children: Object.entries(e.inventory).map(([r, l]) => o.jsxs("div", {
                className: "flex justify-between text-sm",
                children: [
                  o.jsx("span", {
                    children: r
                  }),
                  o.jsxs("span", {
                    children: [
                      "\xD7",
                      l
                    ]
                  })
                ]
              }, r))
            })
          ]
        }),
        o.jsxs("div", {
          className: "p-4 space-y-2",
          children: [
            o.jsxs("h3", {
              className: "text-sm font-medium text-muted-foreground",
              children: [
                "\u5F85\u529E\u4E8B\u9879 (",
                e.todoList.filter((r) => r.status === "pending").length,
                ")"
              ]
            }),
            e.todoList.length === 0 ? o.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "(\u65E0)"
            }) : o.jsx("div", {
              className: "space-y-1 max-h-32 overflow-y-auto",
              children: e.todoList.filter((r) => r.status !== "completed" && r.status !== "cancelled").slice(0, 5).map((r) => o.jsxs("div", {
                className: `text-xs p-1.5 rounded ${r.status === "in-progress" ? "bg-primary/10 text-primary" : "bg-muted"}`,
                children: [
                  o.jsxs("span", {
                    className: "text-muted-foreground",
                    children: [
                      "[",
                      r.type,
                      "]"
                    ]
                  }),
                  " ",
                  r.content
                ]
              }, r.id))
            })
          ]
        })
      ]
    });
  }
  function He(e, s) {
    return e === "chat" ? "text-blue-600 dark:text-blue-400 font-semibold" : s.includes("\u8BA1\u5212") || s.includes("\u51B3\u5B9A") ? "text-purple-600 dark:text-purple-400" : s.includes("\u524D\u5F80") || s.includes("\u79FB\u52A8") ? "text-amber-600 dark:text-amber-400" : s.includes("\u5B8C\u6210") || s.includes("\u5403\u4E86") || s.includes("\u559D\u4E86") || s.includes("\u7761\u9192") ? "text-emerald-600 dark:text-emerald-400" : s.includes("\u53D6\u6D88") || s.includes("\u5931\u8D25") || s.includes("\u65E0\u6CD5") || s.includes("\u6655\u5012") ? "text-red-600 dark:text-red-400" : s.includes("\u5F00\u59CB") ? "text-cyan-600 dark:text-cyan-400" : "text-muted-foreground";
  }
  function Xe({ contextItems: e, selectedCharacter: s }) {
    const t = x.useRef(null);
    x.useEffect(() => {
      t.current && (t.current.scrollTop = t.current.scrollHeight);
    }, [
      e.length
    ]);
    const i = x.useMemo(() => e.filter((r) => !(r.hidden || r.deleted)).map((r) => r.type === "alert" ? {
      id: r.id,
      time: r.data.gameTime || (r.timestamp ? new Date(r.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }) : ""),
      source: "\u7CFB\u7EDF",
      content: r.data.content,
      type: "sys"
    } : r.type === "participant_message" || r.type === "character_message" ? {
      id: r.id,
      time: r.data.gameTime || (r.timestamp ? new Date(r.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }) : ""),
      source: r.data.name || "\u672A\u77E5",
      content: r.data.content,
      type: "chat"
    } : null).filter((r) => r !== null).filter((r) => r.type === "sys" || !s ? true : r.source.includes(s.name) || r.content.includes(s.name)), [
      e,
      s
    ]).slice(-50);
    return o.jsxs("div", {
      className: "h-40 border rounded-lg bg-card flex flex-col",
      children: [
        o.jsxs("div", {
          className: "px-3 py-1.5 border-b bg-muted/50 flex items-center justify-between",
          children: [
            o.jsx("span", {
              className: "text-sm font-medium",
              children: "\u65E5\u5FD7"
            }),
            o.jsx("span", {
              className: "text-xs text-muted-foreground",
              children: s ? `\u7B5B\u9009: ${s.name}` : "\u5168\u90E8"
            })
          ]
        }),
        o.jsx("div", {
          ref: t,
          className: "flex-1 overflow-y-auto p-2 space-y-1 text-xs font-mono",
          children: i.length === 0 ? o.jsx("p", {
            className: "text-muted-foreground text-center py-4",
            children: "\u6682\u65E0\u65E5\u5FD7"
          }) : i.map((r) => o.jsxs("div", {
            className: `flex gap-2 ${He(r.type, r.content)}`,
            children: [
              o.jsxs("span", {
                className: "opacity-70 shrink-0",
                children: [
                  "[",
                  r.time,
                  "]"
                ]
              }),
              o.jsxs("span", {
                className: "font-medium shrink-0",
                children: [
                  r.source,
                  ":"
                ]
              }),
              o.jsx("span", {
                className: "break-all",
                children: r.content
              })
            ]
          }, r.id))
        })
      ]
    });
  }
  function $(e, s) {
    return e.inventory[s] ?? 0;
  }
  function L(e, s, t) {
    const n = e.inventory[s] ?? 0;
    return {
      ...e,
      inventory: {
        ...e.inventory,
        [s]: n + t
      }
    };
  }
  function O(e, s, t) {
    const n = e.inventory[s] ?? 0, i = Math.max(0, n - t), r = {
      ...e.inventory
    };
    return i === 0 ? delete r[s] : r[s] = i, {
      ...e,
      inventory: r
    };
  }
  function me(e, s) {
    return {
      ...e,
      stamina: Math.max(0, Math.min(e.maxStamina, e.stamina + s))
    };
  }
  function Je(e, s) {
    return {
      ...e,
      energy: Math.max(0, Math.min(e.maxEnergy, e.energy + s))
    };
  }
  function pe(e, s) {
    return {
      ...e,
      happiness: Math.max(0, Math.min(oe, e.happiness + s))
    };
  }
  function Ge(e) {
    if ($(e, S.BREAD.name) <= 0) return {
      char: e,
      consumed: false
    };
    const t = S.BREAD.stamina;
    let n = O(e, S.BREAD.name, 1);
    return n = me(n, t), {
      char: n,
      consumed: true
    };
  }
  function Ke(e) {
    if ($(e, S.JUICE.name) <= 0) return {
      char: e,
      consumed: false
    };
    const t = S.JUICE.happiness;
    let n = O(e, S.JUICE.name, 1);
    return n = pe(n, t), {
      char: n,
      consumed: true
    };
  }
  function Ze(e, s) {
    let t = {
      ...e
    }, n = "";
    switch (s) {
      case "Farm": {
        t = L(t, S.WHEAT.name, 6), n = "\u83B7\u5F97 6 \u5C0F\u9EA6";
        break;
      }
      case "Mill": {
        $(t, S.WHEAT.name) >= 20 ? (t = O(t, S.WHEAT.name, 20), t = L(t, S.FLOUR.name, 15), n = "\u6D88\u8017 20 \u5C0F\u9EA6\uFF0C\u83B7\u5F97 15 \u9762\u7C89") : n = "\u5C0F\u9EA6\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u78E8\u9762";
        break;
      }
      case "Bakery": {
        $(t, S.FLOUR.name) >= 2 ? (t = O(t, S.FLOUR.name, 2), t = L(t, S.BREAD.name, 4), n = "\u6D88\u8017 2 \u9762\u7C89\uFF0C\u83B7\u5F97 4 \u9762\u5305") : n = "\u9762\u7C89\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u70D8\u7119";
        break;
      }
      case "Vineyard": {
        t = L(t, S.GRAPE.name, 3), n = "\u83B7\u5F97 3 \u8461\u8404";
        break;
      }
      case "JuiceFactory": {
        $(t, S.GRAPE.name) >= 4 ? (t = O(t, S.GRAPE.name, 4), t = L(t, S.JUICE.name, 4), n = "\u6D88\u8017 4 \u8461\u8404\uFF0C\u83B7\u5F97 4 \u679C\u6C41") : n = "\u8461\u8404\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u69A8\u6C41";
        break;
      }
      default:
        n = "\u672A\u77E5\u5DE5\u4F5C\u5730\u70B9";
    }
    return t = {
      ...t,
      taskName: "Idle",
      taskTarget: null,
      taskTimer: 0,
      status: "\u7A7A\u95F2"
    }, {
      char: t,
      log: n
    };
  }
  function Ve(e, s, t, n) {
    let i = me(e, s);
    return i = Je(i, t), i = pe(i, n), {
      ...i,
      taskName: "Idle",
      taskTarget: null,
      taskTimer: 0,
      status: "\u7A7A\u95F2"
    };
  }
  function qe() {
    return `todo_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }
  function ze(e, s) {
    return e.inventory[s] ?? 0;
  }
  function Qe(e, s, t) {
    let n = 0;
    if (e.deadline) {
      const a = e.deadline - t;
      n = Math.max(0, 1 - a / 100);
    }
    if (e.type === "respond") {
      const a = t - e.createdAt;
      n = Math.max(0, 1 - a / 10);
    }
    let i = 0.5;
    e.type === "rest" && s.stamina < s.maxStamina * 0.5 && (i = 0.9), e.type === "consume" && s.stamina < s.maxStamina * 0.7 && (i = 0.7), e.type === "work" && s.money < 50 && (i = 0.8);
    const r = tt(e, s) ? 1 : 0, l = t - e.createdAt, d = Math.max(0, 1 - l / 50);
    return {
      urgency: n,
      importance: i,
      feasibility: r,
      recency: d
    };
  }
  function et(e, s, t) {
    const n = Qe(e, s, t);
    if (n.feasibility === 0) return Number.NEGATIVE_INFINITY;
    let i = e.priority * 0.3 + n.urgency * 30 + n.importance * 25 + n.recency * 5;
    return e.type === "respond" && (i *= 1.5), i;
  }
  function tt(e, s) {
    const t = e.preconditions;
    if (t.location && s.locationName !== t.location && (!F[t.location] || e.type !== "travel" && e.type !== "explore" && e.type !== "trade" && e.type !== "work" && e.type !== "rest") || t.stamina && s.stamina < t.stamina || t.minEnergy !== void 0 && s.energy / s.maxEnergy < t.minEnergy) return false;
    if (t.items) {
      for (const n of t.items) if (ze(s, n.itemId) < n.count) return false;
    }
    return true;
  }
  function fe(e, s) {
    var _a;
    const t = e.todoList.filter((i) => i.status === "pending");
    return t.length === 0 ? null : ((_a = t.map((i) => ({
      todo: i,
      priority: et(i, e, s)
    })).filter((i) => i.priority > Number.NEGATIVE_INFINITY).sort((i, r) => r.priority - i.priority)[0]) == null ? void 0 : _a.todo) ?? null;
  }
  function he(e, s) {
    return {
      id: qe(),
      type: e.type,
      content: e.content,
      priority: e.priority,
      preconditions: e.preconditions ?? {},
      createdAt: s,
      deadline: e.deadline,
      source: e.source,
      relatedCharacterId: e.relatedCharacterId,
      status: "pending",
      attempts: 0,
      maxAttempts: e.maxAttempts ?? 3
    };
  }
  function M(e, s) {
    const t = e.todoList.map((n) => n.id === s ? {
      ...n,
      status: "in-progress",
      attempts: n.attempts + 1
    } : n);
    return {
      ...e,
      todoList: t,
      currentTodo: s
    };
  }
  function E(e, s) {
    const t = e.todoList.map((n) => n.id === s ? {
      ...n,
      status: "completed"
    } : n);
    return {
      ...e,
      todoList: t,
      currentTodo: e.currentTodo === s ? null : e.currentTodo
    };
  }
  function N(e, s) {
    const t = e.todoList.map((n) => n.id === s ? {
      ...n,
      status: "cancelled"
    } : n);
    return {
      ...e,
      todoList: t,
      currentTodo: e.currentTodo === s ? null : e.currentTodo
    };
  }
  function st(e) {
    return e.todoList.filter((s) => s.status === "pending").length;
  }
  function Q(e) {
    return e.currentTodo ? e.todoList.find((s) => s.id === e.currentTodo) ?? null : null;
  }
  function P(e) {
    return {
      updatedChar: e,
      logs: [],
      historyEntries: [],
      completed: false,
      requiresAI: false,
      dialogueBroadcasts: []
    };
  }
  function B(e, s) {
    if (e.currentPath && e.currentPath.length > 1) return console.log(`[MoveTarget] ${e.name} \u6B63\u5728\u79FB\u52A8\u4E2D\uFF0C\u5FFD\u7565\u65B0\u76EE\u6807 ${s}`), e;
    const t = F[s];
    if (t) {
      let r = t.x, l = t.y;
      if (t.displayCharPos) r = t.displayCharPos.x, l = t.displayCharPos.y;
      else if (t.grid) {
        let a = false;
        for (let u = 0; u < t.grid.length; u++) {
          for (let m = 0; m < t.grid[u].length; m++) if (t.grid[u][m] === "E") {
            r = t.x + m, l = t.y + u, a = true;
            break;
          }
          if (a) break;
        }
        if (!a) for (let u = 0; u < t.grid.length; u++) {
          for (let m = 0; m < t.grid[u].length; m++) if (t.grid[u][m] !== 1) {
            r = t.x + m, l = t.y + u, a = true;
            break;
          }
          if (a) break;
        }
      } else r = t.x + Math.floor(Math.random() * t.w), l = t.y + Math.floor(Math.random() * t.h);
      return Math.abs(e.gridX - r) + Math.abs(e.gridY - l) <= 1 ? {
        ...e,
        locationName: s
      } : {
        ...e,
        targetLocationName: s,
        pendingMoveTo: {
          x: r,
          y: l
        }
      };
    }
    const n = Math.floor(Math.random() * 5) - 2, i = Math.floor(Math.random() * 5) - 2;
    return {
      ...e,
      targetLocationName: "Wander",
      pendingMoveTo: {
        x: Math.max(0, Math.min(19, e.gridX + n)),
        y: Math.max(0, Math.min(19, e.gridY + i))
      }
    };
  }
  function ge(e, s) {
    const t = ae.includes(s);
    return {
      ...e,
      taskTimer: 6,
      taskTarget: s,
      taskName: t ? "Sleeping" : "Working",
      status: t ? "\u7761\u89C9\u4E2D..." : "\u5DE5\u4F5C\u4E2D..."
    };
  }
  function nt(e, s) {
    var _a;
    const t = P(e);
    let n = {
      ...e
    };
    const i = s.preconditions.location;
    if (!i) return n = N(n, s.id), t.updatedChar = n, t.historyEntries.push({
      role: "system",
      content: `\u5DE5\u4F5C\u4EFB\u52A1\u300C${s.content}\u300D\u7F3A\u5C11\u76EE\u6807\u5730\u70B9\uFF0C\u5DF2\u53D6\u6D88\u3002`
    }), t;
    if (n.locationName !== i) return n = B(n, i), n = M(n, s.id), t.historyEntries.push({
      role: "system",
      content: `\u524D\u5F80${i}\u51C6\u5907\u5DE5\u4F5C\u3002`
    }), t.logs.push({
      content: `${e.name} \u524D\u5F80${i}`,
      source: "\u7CFB\u7EDF",
      type: "sys"
    }), t.updatedChar = n, t;
    if ((_a = F[i]) == null ? void 0 : _a.isWork) {
      if (i === "Mill" && $(n, S.WHEAT.name) < 20) return n = N(n, s.id), t.updatedChar = n, t.historyEntries.push({
        role: "system",
        content: "\u5C0F\u9EA6\u4E0D\u8DB3 20 \u5355\u4F4D\uFF0C\u65E0\u6CD5\u5728\u78E8\u574A\u5DE5\u4F5C\u3002"
      }), t;
      if (i === "Bakery" && $(n, S.FLOUR.name) < 2) return n = N(n, s.id), t.updatedChar = n, t.historyEntries.push({
        role: "system",
        content: "\u9762\u7C89\u4E0D\u8DB3 2 \u5355\u4F4D\uFF0C\u65E0\u6CD5\u5728\u9762\u5305\u623F\u5DE5\u4F5C\u3002"
      }), t;
      if (i === "JuiceFactory" && $(n, S.GRAPE.name) < 4) return n = N(n, s.id), t.updatedChar = n, t.historyEntries.push({
        role: "system",
        content: "\u8461\u8404\u4E0D\u8DB3 4 \u5355\u4F4D\uFF0C\u65E0\u6CD5\u5728\u679C\u6C41\u5382\u5DE5\u4F5C\u3002"
      }), t;
      n = ge(n, i), n = M(n, s.id), t.historyEntries.push({
        role: "system",
        content: `\u5F00\u59CB\u5728${i}\u5DE5\u4F5C\u3002`
      }), t.logs.push({
        content: `${e.name} \u5F00\u59CB\u5728${i}\u5DE5\u4F5C`,
        source: "\u7CFB\u7EDF",
        type: "sys"
      });
    }
    return t.updatedChar = n, t;
  }
  function it(e, s) {
    const t = P(e);
    let n = {
      ...e
    };
    const i = s.preconditions.location || n.homeZoneKey || "Zone_A";
    return n.locationName !== i ? (n = B(n, i), n = M(n, s.id), t.historyEntries.push({
      role: "system",
      content: `\u524D\u5F80${i}\u51C6\u5907\u4F11\u606F\u3002`
    }), t.logs.push({
      content: `${e.name} \u524D\u5F80${i}`,
      source: "\u7CFB\u7EDF",
      type: "sys"
    }), t.updatedChar = n, t) : (ae.includes(i) ? (n = ge(n, i), n = M(n, s.id), t.historyEntries.push({
      role: "system",
      content: `\u5F00\u59CB\u5728${i}\u4F11\u606F\u3002`
    }), t.logs.push({
      content: `${e.name} \u56DE\u5BB6\u4F11\u606F`,
      source: "\u7CFB\u7EDF",
      type: "sys"
    })) : (n.status = "\u4F11\u606F\u4E2D", n = E(n, s.id), t.completed = true, t.historyEntries.push({
      role: "system",
      content: `\u5728${i}\u77ED\u6682\u4F11\u606F\u3002`
    })), t.updatedChar = n, t);
  }
  function ot(e, s) {
    const t = P(e);
    let n = {
      ...e
    };
    const i = s.preconditions.location || "Park";
    return n.locationName !== i ? (n = B(n, i), n = M(n, s.id), t.historyEntries.push({
      role: "system",
      content: `\u524D\u5F80${i}\u63A2\u7D22\u3002`
    }), t.logs.push({
      content: `${e.name} \u524D\u5F80${i}\u63A2\u7D22`,
      source: "\u7CFB\u7EDF",
      type: "sys"
    }), t.updatedChar = n, t) : (i === "Park" ? (n.happiness = Math.min(100, n.happiness + 1), t.logs.push({
      content: `${e.name} \u5728\u516C\u56ED\u6563\u6B65\uFF0C\u6109\u60A6\u503C+1`,
      source: "\u7CFB\u7EDF",
      type: "sys"
    }), t.historyEntries.push({
      role: "system",
      content: "\u5728\u516C\u56ED\u653E\u677E\uFF0C\u6109\u60A6\u503C+1\u3002"
    })) : t.historyEntries.push({
      role: "system",
      content: `\u63A2\u7D22\u4E86${i}\u3002`
    }), n = E(n, s.id), n.status = `\u5728${i}\u95F2\u901B`, t.completed = true, t.updatedChar = n, t);
  }
  function at(e, s) {
    const t = P(e);
    let n = {
      ...e
    };
    const i = s.preconditions.location;
    return i ? n.locationName !== i ? (n = B(n, i), n = M(n, s.id), t.historyEntries.push({
      role: "system",
      content: `\u79FB\u52A8\u5230${i}\u3002`
    }), t.logs.push({
      content: `${e.name} \u79FB\u52A8\u5230${i}`,
      source: "\u7CFB\u7EDF",
      type: "sys"
    }), t.updatedChar = n, t) : (n = E(n, s.id), n.status = `\u5230\u8FBE${i}`, t.completed = true, t.updatedChar = n, t) : (n = N(n, s.id), t.updatedChar = n, t);
  }
  function rt(e, s) {
    const t = P(e);
    let n = {
      ...e
    };
    const i = $(n, S.BREAD.name), r = $(n, S.JUICE.name), l = S.BREAD.stamina, d = S.JUICE.happiness;
    let a = false;
    return i > 0 && n.stamina < n.maxStamina - l && (n.inventory[S.BREAD.name] = i - 1, n.stamina = Math.min(n.maxStamina, n.stamina + l), a = true, t.historyEntries.push({
      role: "system",
      content: `\u5403\u4E86\u9762\u5305\uFF0C\u4F53\u529B+${l}\u3002`
    }), t.logs.push({
      content: `${e.name} \u5403\u4E86\u9762\u5305\uFF0C\u4F53\u529B+${l}`,
      source: "\u7CFB\u7EDF",
      type: "sys"
    })), r > 0 && n.happiness < 100 - d && (n.inventory[S.JUICE.name] = r - 1, n.happiness = Math.min(100, n.happiness + d), a = true, t.historyEntries.push({
      role: "system",
      content: `\u559D\u4E86\u679C\u6C41\uFF0C\u6109\u60A6\u503C+${d}\u3002`
    }), t.logs.push({
      content: `${e.name} \u559D\u4E86\u679C\u6C41\uFF0C\u6109\u60A6\u503C+${d}`,
      source: "\u7CFB\u7EDF",
      type: "sys"
    })), a ? (n = E(n, s.id), t.completed = true) : (n = N(n, s.id), t.historyEntries.push({
      role: "system",
      content: "\u6CA1\u6709\u53EF\u6D88\u8D39\u7684\u98DF\u7269\u6216\u996E\u6599\u3002"
    })), t.updatedChar = n, t;
  }
  function lt(e, s) {
    const t = P(e);
    return t.requiresAI = true, t.updatedChar = M(e, s.id), t.historyEntries.push({
      role: "system",
      content: `\u51C6\u5907\u8FDB\u884C\u793E\u4EA4\u6D3B\u52A8: ${s.content}`
    }), t;
  }
  function ct(e, s) {
    const t = P(e);
    return t.requiresAI = true, t.updatedChar = M(e, s.id), t.historyEntries.push({
      role: "system",
      content: `\u51C6\u5907\u56DE\u5E94\u5BF9\u8BDD: ${s.content}`
    }), t;
  }
  function dt(e, s) {
    const t = P(e);
    let n = {
      ...e
    };
    const i = s.preconditions.location || "Shop";
    return i === "Shop" && n.dailyShopVisit ? (n = N(n, s.id), t.updatedChar = n, t.historyEntries.push({
      role: "system",
      content: "\u4ECA\u5929\u5DF2\u7ECF\u53BB\u8FC7\u5546\u5E97\u4E86\u3002"
    }), t) : i === "SalesStand" && n.dailySalesStandVisit ? (n = N(n, s.id), t.updatedChar = n, t.historyEntries.push({
      role: "system",
      content: "\u4ECA\u5929\u5DF2\u7ECF\u53BB\u8FC7\u5546\u4E1A\u5927\u9053\u4E86\u3002"
    }), t) : (n.locationName !== i && (n = B(n, i)), i === "Shop" ? n.dailyShopVisit = true : i === "SalesStand" && (n.dailySalesStandVisit = true), n = E(n, s.id), n.status = `\u5728${i}\u4EA4\u6613`, t.completed = true, t.historyEntries.push({
      role: "system",
      content: `\u524D\u5F80${i}\u8FDB\u884C\u4EA4\u6613\u3002`
    }), t.updatedChar = n, t);
  }
  function ut(e, s) {
    const t = P(e);
    let n = {
      ...e
    };
    return n = E(n, s.id), n.status = s.content, t.completed = true, t.historyEntries.push({
      role: "system",
      content: `\u6267\u884C\u4E86\u81EA\u5B9A\u4E49\u4EFB\u52A1: ${s.content}`
    }), t.updatedChar = n, t;
  }
  function H(e, s, t, n, i) {
    switch (s.type) {
      case "work":
        return nt(e, s);
      case "rest":
        return it(e, s);
      case "explore":
        return ot(e, s);
      case "travel":
        return at(e, s);
      case "consume":
        return rt(e, s);
      case "social":
        return lt(e, s);
      case "respond":
        return ct(e, s);
      case "trade":
        return dt(e, s);
      case "custom":
        return ut(e, s);
      default:
        return {
          updatedChar: N(e, s.id),
          logs: [],
          historyEntries: [
            {
              role: "system",
              content: `\u672A\u77E5\u4EFB\u52A1\u7C7B\u578B: ${s.type}`
            }
          ],
          completed: false,
          requiresAI: false,
          dialogueBroadcasts: []
        };
    }
  }
  function mt(e) {
    if (!e.currentTodo) return e;
    const s = e.todoList.find((t) => t.id === e.currentTodo);
    return !s || s.status !== "in-progress" ? e : s.type === "work" || s.type === "rest" ? E(e, s.id) : e;
  }
  function pt() {
    const e = Array(A).fill(0).map(() => Array(A).fill(0));
    for (const s of Object.values(F)) if (s.grid) for (let t = 0; t < s.grid.length; t++) for (let n = 0; n < s.grid[t].length; n++) {
      const i = s.grid[t][n], r = s.x + n, l = s.y + t;
      r >= 0 && r < A && l >= 0 && l < A && (i === 1 ? e[l][r] = 1 : e[l][r] = 0);
    }
    else for (let t = 0; t < s.h; t++) for (let n = 0; n < s.w; n++) {
      const i = s.x + n, r = s.y + t;
      i >= 0 && i < A && r >= 0 && r < A && (e[r][i] = 1);
    }
    return {
      matrix: e,
      width: A,
      height: A
    };
  }
  function ft(e, s, t, n, i) {
    if (s < 0 || s >= e.width || t < 0 || t >= e.height || n < 0 || n >= e.width || i < 0 || i >= e.height) return [];
    const r = new V.Grid(e.matrix[0].length, e.matrix.length);
    for (let a = 0; a < e.height; a++) for (let u = 0; u < e.width; u++) e.matrix[a][u] === 1 && r.setWalkableAt(u, a, false);
    return r.isWalkableAt(s, t) || r.setWalkableAt(s, t, true), r.isWalkableAt(n, i) || r.setWalkableAt(n, i, true), new V.AStarFinder({
      allowDiagonal: true,
      dontCrossCorners: true
    }).findPath(s, t, n, i, r);
  }
  function ht(e, s, t, n, i) {
    if (!t || t.length < 2) return {
      x: e,
      y: s,
      completed: true,
      reachedNextTile: false
    };
    const r = t[1][0], l = t[1][1], d = r - e, a = l - s, u = Math.sqrt(d * d + a * a), m = n * i;
    if (m >= u) return {
      x: r,
      y: l,
      completed: t.length <= 2,
      reachedNextTile: true
    };
    const c = m / u;
    return {
      x: e + d * c,
      y: s + a * c,
      completed: false,
      reachedNextTile: false
    };
  }
  function gt(e) {
    return {
      Working: 1.5,
      Sleeping: 0,
      Idle: 0.8
    }[e] || 1;
  }
  function yt(e) {
    return {
      Working: 1.3,
      Sleeping: 0,
      Idle: 0.7
    }[e] || 1;
  }
  function xt(e) {
    return e >= 22 || e <= 6 ? 1.2 : e >= 8 && e <= 18 ? 1 : 1.1;
  }
  function St(e, s, t, n, i, r) {
    let l = {
      ...e
    };
    if (l.taskName === "Working" && l.taskTarget) {
      const a = Ze(l, l.taskTarget);
      l = a.char, s(`${e.name} \u5DE5\u4F5C\u5B8C\u6210\uFF0C${a.log}`, "\u7CFB\u7EDF", "sys");
    } else if (l.taskName === "Sleeping") {
      const a = we, u = l.home.level, m = 15, c = 12, p = 5, y = 0.8 + u / 5 * 0.4, h = Math.round(m * a * y), T = Math.round(c * a * y), g = Math.round(p * a * y);
      l = Ve(l, h, T, g), s(`${e.name} \u7761\u9192\u4E86\uFF0C\u4F53\u529B+${h}\uFF0C\u6D3B\u529B+${T}\uFF0C\u6109\u60A6+${g}\u3002`, "\u7CFB\u7EDF", "sys");
    }
    l = mt(l);
    const d = fe(l, r);
    if (d) {
      const a = H(l, d);
      l = a.updatedChar;
      for (const u of a.logs) s(u.content, u.source, u.type);
    }
    return l;
  }
  function Tt(e, s, t) {
    let n = {
      ...e
    };
    if (n.stamina <= 6) {
      const i = Ge(n);
      i.consumed && (n = i.char, s(`${e.name} \u5403\u4E86\u9762\u5305\uFF0C\u4F53\u529B+${S.BREAD.stamina}`, "\u7CFB\u7EDF", "sys"));
    }
    if (n.happiness <= 30) {
      const i = Ke(n);
      i.consumed && (n = i.char, s(`${e.name} \u559D\u4E86\u679C\u6C41\uFF0C\u6109\u60A6\u503C+${S.JUICE.happiness}`, "\u7CFB\u7EDF", "sys"));
    }
    return n = bt(n, s, t), n;
  }
  const vt = 2;
  function bt(e, s, t) {
    var _a, _b;
    if (e.stamina <= 0 && !((_a = e.faintedState) == null ? void 0 : _a.isFainted)) {
      const n = {
        isFainted: true,
        faintedTime: t,
        recoveryTime: t + vt,
        cause: "exhaustion"
      };
      return s(`${e.name} \u4F53\u529B\u8017\u5C3D\uFF0C\u6655\u5012\u4E86\uFF01`, "\u7CFB\u7EDF", "sys"), {
        ...e,
        status: "\u6655\u5012",
        thought: "\u5931\u53BB\u610F\u8BC6...",
        faintedState: n
      };
    }
    return ((_b = e.faintedState) == null ? void 0 : _b.isFainted) && t >= e.faintedState.recoveryTime ? (s(`${e.name} \u4ECE\u6655\u5012\u4E2D\u6062\u590D\u4E86\uFF0C\u4F46\u8FD8\u5F88\u865A\u5F31\u3002`, "\u7CFB\u7EDF", "sys"), {
      ...e,
      status: "\u865A\u5F31",
      thought: "\u521A\u521A\u6062\u590D\u610F\u8BC6\uFF0C\u611F\u89C9\u5F88\u865A\u5F31...",
      stamina: Math.max(5, e.stamina),
      faintedState: void 0
    }) : e;
  }
  function jt(e, s, t, n, i, r) {
    let l = {
      ...e
    };
    if (l.pendingMoveTo) {
      const a = l.currentPath && l.currentPath.length > 1;
      if (Math.abs(l.gridX - l.pendingMoveTo.x) + Math.abs(l.gridY - l.pendingMoveTo.y) <= 1) l.pendingMoveTo = void 0;
      else if (!a) {
        const c = pt(), p = l.visualX !== void 0 ? Math.round(l.visualX) : l.gridX, y = l.visualY !== void 0 ? Math.round(l.visualY) : l.gridY, h = ft(c, p, y, l.pendingMoveTo.x, l.pendingMoveTo.y);
        h && h.length > 0 ? (l.currentPath = h, l.gridX = p, l.gridY = y, l.visualX === void 0 && (l.visualX = p), l.visualY === void 0 && (l.visualY = y)) : l.currentPath = void 0, l.pendingMoveTo = void 0;
      }
    }
    (!l.currentPath || l.currentPath.length <= 1) && l.targetLocationName && (l.locationName = l.targetLocationName, l.targetLocationName = void 0);
    const d = r > 0 && r % Ce === 0;
    if (d && l.taskName !== "Sleeping") {
      const u = 0.8 + Math.random() * 0.4, m = gt(l.taskName), c = Math.round(5 * u * m);
      l.stamina = Math.max(0, l.stamina - c);
    }
    if (d && l.taskName !== "Sleeping") {
      const u = 0.8 + Math.random() * 0.4, m = yt(l.taskName), c = xt(s.hour), p = Math.round(4 * u * m * c);
      l.energy = Math.max(0, l.energy - p);
    }
    return l.taskTimer > 0 ? (l.taskTimer--, l.taskTimer === 0 && (l = St(l, t, n, i, s, r))) : l = Tt(l, t, r), l;
  }
  const w = {
    minInterval: 10,
    maxInterval: 18,
    staminaThreshold: 15,
    happinessThreshold: 25,
    energyThreshold: 0.25
  };
  function ee(e, s) {
    const t = s - e.lastThinkTick;
    if (e.currentPath && e.currentPath.length > 1 || e.taskName === "Sleeping") return null;
    const n = e.taskTimer > 0;
    if (n && t < w.minInterval * 1.5) return null;
    if (!n && st(e) === 0 && t >= w.minInterval / 2) return {
      type: "empty-todo"
    };
    const i = w.minInterval + Math.random() * (w.maxInterval - w.minInterval);
    return t >= i ? {
      type: "periodic"
    } : (e.stamina < w.staminaThreshold || e.happiness <= w.happinessThreshold) && t >= w.minInterval * 1.5 ? {
      type: "state-change",
      context: {
        reason: e.stamina < w.staminaThreshold ? "low-stamina" : "low-happiness"
      }
    } : null;
  }
  function kt(e, s) {
    const t = e.slice(-6);
    return t.length === 0 ? "(\u65E0\u6700\u8FD1\u8BB0\u5F55)" : t.map((n) => n.content.startsWith("[\u5185\u5FC3\u601D\u8003]") ? `\u2022 \u6211\u60F3: ${n.content.replace("[\u5185\u5FC3\u601D\u8003] ", "")}` : n.content.startsWith("[\u5BF9") || n.content.startsWith("[\u56DE\u5E94") ? `\u2022 \u6211\u8BF4: ${n.content}` : n.role === "assistant" ? `\u2022 \u6211: ${n.content}` : `\u2022 ${n.content}`).join(`
`);
  }
  function Nt(e) {
    return `\u7B2C${e.day}\u5929 ${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}`;
  }
  function Ct(e) {
    const s = e.filter((t) => t.status === "pending").slice(0, 5);
    return s.length === 0 ? "(\u7A7A)" : s.map((t) => `- [${t.type}] ${t.content} (\u4F18\u5148\u7EA7: ${t.priority})`).join(`
`);
  }
  function wt() {
    const e = [
      "\u60F3\u60F3\u6709\u6CA1\u6709\u4EC0\u4E48\u65B0\u9C9C\u4E8B\u53EF\u4EE5\u505A\uFF1F",
      "\u6709\u6CA1\u6709\u60F3\u548C\u8C01\u804A\u804A\u5929\uFF1F",
      "\u4ECA\u5929\u7684\u76EE\u6807\u5B8C\u6210\u5F97\u600E\u4E48\u6837\u4E86\uFF1F",
      "\u5468\u56F4\u6709\u4EC0\u4E48\u6709\u8DA3\u7684\u4EBA\u6216\u4E8B\u5417\uFF1F",
      "\u662F\u4E0D\u662F\u8BE5\u6362\u4E2A\u5730\u65B9\u901B\u901B\u4E86\uFF1F",
      "\u6709\u6CA1\u6709\u4EC0\u4E48\u6280\u80FD\u60F3\u8981\u63D0\u5347\uFF1F",
      "\u94B1\u591F\u4E0D\u591F\u7528\uFF1F\u9700\u8981\u5DE5\u4F5C\u5417\uFF1F",
      "\u8EAB\u4F53\u72B6\u6001\u600E\u4E48\u6837\uFF1F\u9700\u8981\u4F11\u606F\u5417\uFF1F"
    ];
    return e[Math.floor(Math.random() * e.length)];
  }
  function $t(e, s, t, n = []) {
    var _a;
    const i = Ct(e.todoList), r = wt(), l = n.filter((h) => h.id !== e.id && Math.abs(h.gridX - e.gridX) + Math.abs(h.gridY - e.gridY) <= 5).map((h) => `${h.name}(\u5728${h.locationName})`), d = l.length > 0 ? `\u9644\u8FD1\u7684\u4EBA: ${l.join(", ")}` : "\u9644\u8FD1\u6CA1\u6709\u4EBA";
    let a = "";
    switch (s.type) {
      case "empty-todo":
        a = "\u4F60\u7684\u5F85\u529E\u4E8B\u9879\u5217\u8868\u4E3A\u7A7A\uFF0C\u9700\u8981\u89C4\u5212\u63A5\u4E0B\u6765\u7684\u884C\u52A8\u3002";
        break;
      case "periodic":
        a = `\u5B9A\u65F6\u601D\u8003\u3002${r}`;
        break;
      case "task-complete":
        a = "\u4F60\u521A\u5B8C\u6210\u4E86\u4E00\u9879\u4EFB\u52A1\uFF0C\u9700\u8981\u89C4\u5212\u4E0B\u4E00\u6B65\u3002";
        break;
      case "state-change":
        a = `\u4F60\u7684\u72B6\u6001\u53D1\u751F\u4E86\u53D8\u5316: ${((_a = s.context) == null ? void 0 : _a.reason) ?? "\u672A\u77E5"}`;
        break;
      case "external":
        a = "\u5916\u90E8\u4E8B\u4EF6\u89E6\u53D1\u4E86\u4F60\u7684\u601D\u8003\u3002";
        break;
      default:
        a = r;
    }
    const u = e.locationName !== "Wander" ? `(\u4F60\u5728 ${e.locationName}\uFF0C${d})` : `(\u4F60\u5728\u95F2\u901B\u4E2D\uFF0C${d})`, c = e.stamina > e.maxStamina * 0.8 && e.energy > e.maxEnergy * 0.8 ? "\u4F60\u73B0\u5728\u7CBE\u529B\u5145\u6C9B\uFF0C\u5E94\u8BE5\u53BB\u5DE5\u4F5C\u8D5A\u94B1\u3001\u793E\u4EA4\u6216\u63A2\u7D22\uFF0C\u800C\u4E0D\u662F\u7EE7\u7EED\u4F11\u606F\u3002" : "", p = Object.entries(e.inventory).filter(([, h]) => h > 0).map(([h, T]) => `${h}x${T}`).join(", ") || "\u7A7A", y = `
**\u53EF\u6267\u884C\u4EFB\u52A1\u793A\u4F8B**:
- {"type":"social","content":"\u627E\u4EBA\u804A\u804A\u5929","priority":60,"preconditions":{}}
- {"type":"social","content":"\u548C\u90BB\u5C45\u6253\u4E2A\u62DB\u547C","priority":55,"preconditions":{}}
- {"type":"work","content":"\u53BB\u519C\u573A\u5DE5\u4F5C","priority":60,"preconditions":{"location":"Farm"}}
- {"type":"work","content":"\u53BB\u78E8\u574A\u78E8\u9762\u7C89","priority":60,"preconditions":{"location":"Mill"}}
- {"type":"rest","content":"\u56DE\u5BB6\u7761\u89C9","priority":70,"preconditions":{"location":"${e.homeZoneKey || "Zone_A"}"}}
- {"type":"travel","content":"\u53BB\u516C\u56ED","priority":40,"preconditions":{"location":"Park"}}
- {"type":"explore","content":"\u5728\u516C\u56ED\u6563\u6B65","priority":40,"preconditions":{"location":"Park"}}
- {"type":"trade","content":"\u53BB\u5546\u5E97\u4EA4\u6613","priority":50,"preconditions":{"location":"Shop"}}

**\u91CD\u8981**: social\u7C7B\u578B\u4EFB\u52A1\u4E0D\u9700\u8981location\u524D\u7F6E\u6761\u4EF6\uFF0C\u4F1A\u81EA\u52A8\u5BFB\u627E\u9644\u8FD1\u7684\u4EBA\u804A\u5929\u3002
**\u6CE8\u610F**: \u5982\u679C\u4F60\u6B63\u5728\u5DE5\u4F5C(${e.taskName})\uFF0C\u4F60\u53EA\u80FD\u53D1\u8D77 social \u4EFB\u52A1\uFF0C\u4E0D\u80FD\u79BB\u5F00\u5F53\u524D\u5730\u70B9\u3002`;
    return `\u4F60\u662F ${e.name}\uFF0C${e.personality}\u3002

## \u91CD\u8981\u80CC\u666F
\u4F60\u56E0\u4E3A\u67D0\u79CD\u795E\u79D8\u539F\u56E0\u6765\u5230\u4E86\u8FD9\u4E2A\u5168\u65B0\u7684\u5C0F\u9547\u3002\u8FD9\u91CC\u4E0D\u662F\u4F60\u539F\u6765\u719F\u6089\u7684\u4E16\u754C\u2014\u2014\u6CA1\u6709\u4F60\u4EE5\u524D\u7684\u5DE5\u4F5C\u5BA4\u3001\u4F4F\u6240\u6216\u719F\u6089\u7684\u5730\u65B9\u3002\u4F60\u9700\u8981\u5728\u8FD9\u4E2A\u5C0F\u9547\u91CD\u65B0\u5F00\u59CB\u751F\u6D3B\uFF0C\u5229\u7528\u8FD9\u91CC\u73B0\u6709\u7684\u8BBE\u65BD\uFF08\u519C\u573A\u3001\u78E8\u574A\u3001\u9762\u5305\u623F\u7B49\uFF09\u6765\u5DE5\u4F5C\u8D5A\u94B1\u3001\u7EF4\u6301\u751F\u8BA1\u3002\u867D\u7136\u4F60\u4FDD\u7559\u7740\u539F\u6765\u7684\u6027\u683C\u548C\u8BB0\u5FC6\uFF0C\u4F46\u4F60\u5FC5\u987B\u9002\u5E94\u8FD9\u4E2A\u65B0\u73AF\u5883\u3002

## \u8FD9\u4E2A\u5C0F\u9547\u53EA\u6709\u4EE5\u4E0B\u5730\u70B9
- \u5DE5\u4F5C\u5730\u70B9: Farm(\u519C\u573A), Vineyard(\u8461\u8404\u56ED), Mill(\u78E8\u574A), Bakery(\u9762\u5305\u623F), JuiceFactory(\u679C\u6C41\u5382)
- \u4F4F\u5B85\u533A: Zone_A(\u6551\u6D4E\u623F), Zone_B(\u516C\u5BD3), Zone_C(\u5957\u623F), Zone_D(\u8C6A\u534E\u5957\u623F), Zone_E(\u522B\u5885)
- \u5176\u4ED6: Shop(\u5546\u5E97), Park(\u516C\u56ED), SalesStand(\u5546\u4E1A\u5927\u9053)
**\u6CE8\u610F**: \u8FD9\u91CC\u6CA1\u6709\u753B\u5BA4\u3001\u5496\u5561\u9986\u3001\u56FE\u4E66\u9986\u7B49\u5176\u4ED6\u5730\u65B9\u3002\u4F60\u53EA\u80FD\u4F7F\u7528\u4E0A\u9762\u5217\u51FA\u7684\u5730\u70B9\u3002

## \u5F53\u524D\u72B6\u6001
- \u4F53\u529B: ${e.stamina}/${e.maxStamina} ${e.stamina < 20 ? "\u26A0\uFE0F\u9700\u8981\u4F11\u606F" : ""}
- \u6D3B\u529B: ${e.energy}/${e.maxEnergy} ${e.energy < e.maxEnergy * 0.3 ? "\u26A0\uFE0F\u9700\u8981\u7761\u89C9" : ""}
- \u6109\u60A6: ${e.happiness}/${oe} ${e.happiness < 30 ? "\u26A0\uFE0F\u5FC3\u60C5\u5DEE\uFF0C\u627E\u4EBA\u804A\u5929" : ""}
- \u91D1\u94B1: $${e.money} ${e.money < 30 ? "\u26A0\uFE0F\u7F3A\u94B1\uFF0C\u9700\u8981\u5DE5\u4F5C" : ""}
- \u5E93\u5B58: ${p}
- \u4F4D\u7F6E: ${e.locationName} ${u}
- \u65F6\u95F4: ${Nt(t)}
- \u4F60\u7684\u5BB6: ${e.homeZoneKey || "Zone_A"}

${c ? `## \u{1F4A1}\u72B6\u6001\u63D0\u793A
${c}
` : ""}

## \u89E6\u53D1\u539F\u56E0
${a}

## \u5F85\u529E\u4E8B\u9879
${i}

## \u6700\u8FD1\u7ECF\u5386
${kt(e.history)}

${y}

## \u5DE5\u4F5C\u5730\u70B9\u8BF4\u660E
- Farm(\u519C\u573A): \u4EA7\u51FA\u5C0F\u9EA6\uFF0C\u65E0\u9700\u539F\u6599
- Vineyard(\u8461\u8404\u56ED): \u4EA7\u51FA\u8461\u8404\uFF0C\u65E0\u9700\u539F\u6599
- Mill(\u78E8\u574A): \u9700\u898120\u5C0F\u9EA6\uFF0C\u4EA7\u51FA\u9762\u7C89
- Bakery(\u9762\u5305\u623F): \u9700\u89812\u9762\u7C89\uFF0C\u4EA7\u51FA\u9762\u5305
- JuiceFactory(\u679C\u6C41\u5382): \u9700\u89814\u8461\u8404\uFF0C\u4EA7\u51FA\u679C\u6C41

\u8FD4\u56DE\u4E00\u4E2AJSON\uFF08\u5FC5\u987B\u5305\u542B\u81F3\u5C11\u4E00\u4E2A\u4EFB\u52A1\uFF09:
{
  "innerThought": "\u7B80\u77ED\u60F3\u6CD5(10\u5B57\u5185)",
  "stateAssessment": "\u72B6\u6001(5\u5B57\u5185)",
  "addTodos": [
    {"type":"\u7C7B\u578B","content":"\u63CF\u8FF0","priority":50,"preconditions":{"location":"\u5730\u70B9Key"}}
  ],
  "adjustPriorities": [],
  "cancelTodos": []
}

\u6CE8\u610F: type\u5FC5\u987B\u662F work/rest/social/travel/explore/trade/consume \u4E4B\u4E00\uFF0Clocation\u5FC5\u987B\u662F\u4E0A\u9762\u5217\u51FA\u7684\u82F1\u6587Key`;
  }
  function It(e) {
    if (!e) return;
    let s = e.trim().replace(/^[!！?？\s]+|[!！?？\s]+$/g, "");
    if (W.includes(s)) return s;
    const t = s.replace(/\s+/g, "_");
    if (W.includes(t)) return t;
    const n = s.toUpperCase().replace(/\s+/g, "_"), i = W.find((l) => l.toUpperCase() === n);
    if (i) return i;
    for (const l of W) if (s.toUpperCase().includes(l.toUpperCase())) return l;
    const r = {
      HOTEL: "Zone_A",
      HOME: "Zone_A",
      HOUSE: "Zone_A",
      RESTAURANT: "Bakery",
      CAFE: "JuiceFactory",
      MARKET: "Shop",
      STREET: "SalesStand",
      CENTER: "SalesStand"
    };
    if (r[n]) return r[n];
  }
  function At(e) {
    try {
      const s = e.match(/\{[\s\S]*\}/);
      if (!s) return null;
      const t = JSON.parse(s[0]);
      if (!t || !t.innerThought || !t.stateAssessment) return null;
      const n = Array.isArray(t.addTodos) ? t.addTodos.map((i) => {
        const r = i.preconditions;
        return (r == null ? void 0 : r.location) && (r.location = It(r.location)), i;
      }) : [];
      return {
        innerThought: String(t.innerThought),
        stateAssessment: String(t.stateAssessment),
        addTodos: n,
        adjustPriorities: Array.isArray(t.adjustPriorities) ? t.adjustPriorities : [],
        cancelTodos: Array.isArray(t.cancelTodos) ? t.cancelTodos : []
      };
    } catch {
      return null;
    }
  }
  function Et(e, s, t) {
    return e.some((n) => n.status === "pending" && n.type === s && (t ? n.preconditions.location === t : true));
  }
  function Pt(e, s, t) {
    const n = [
      ...e.todoList
    ];
    for (const d of s.addTodos) {
      const a = {
        ...d.preconditions
      };
      if (a.location === e.locationName && d.type === "travel") {
        console.log(`[ThinkingSystem] \u8DF3\u8FC7\u65E0\u6548\u7684\u79FB\u52A8\u4EFB\u52A1: \u5DF2\u7ECF\u5728 ${e.locationName}`);
        continue;
      }
      if (d.type === "rest" && !a.location && (a.location = e.homeZoneKey || "Zone_A"), d.type === "social" && delete a.location, Et(n, d.type, a.location)) {
        console.log(`[ThinkingSystem] \u8DF3\u8FC7\u91CD\u590D\u4EFB\u52A1: ${d.type} at ${a.location || "any"}`);
        continue;
      }
      if (n.filter((c) => c.status === "pending").length >= 5) {
        console.log(`[ThinkingSystem] \u5F85\u529E\u4E8B\u9879\u5DF2\u6EE1\uFF0C\u8DF3\u8FC7\u65B0\u4EFB\u52A1: ${d.content}`);
        continue;
      }
      const m = he({
        type: d.type,
        content: d.content,
        priority: d.priority,
        preconditions: a,
        deadline: d.deadline,
        source: "thinking",
        relatedCharacterId: d.relatedCharacterId
      }, t);
      n.push(m);
    }
    for (const d of s.adjustPriorities) {
      const a = n.findIndex((u) => u.id === d.todoId);
      a >= 0 && (n[a] = {
        ...n[a],
        priority: d.newPriority
      });
    }
    for (const d of s.cancelTodos) {
      const a = n.findIndex((u) => u.id === d);
      a >= 0 && (n[a] = {
        ...n[a],
        status: "cancelled"
      });
    }
    const r = e.history.filter((d) => d.content.startsWith("[\u5185\u5FC3\u601D\u8003]")).slice(-3).map((d) => d.content.replace("[\u5185\u5FC3\u601D\u8003] ", "")).some((d) => d === s.innerThought || d.includes(s.innerThought.slice(0, 10)));
    let l = [
      ...e.history
    ];
    return r || l.push({
      role: "assistant",
      content: `[\u5185\u5FC3\u601D\u8003] ${s.innerThought}`
    }), l.length > 50 && (l = l.slice(-40)), {
      ...e,
      todoList: n,
      history: l,
      lastThinkTick: t,
      thought: s.innerThought,
      currentStrategy: s.stateAssessment
    };
  }
  function U(e) {
    const s = e.inventory, t = s[S.WHEAT.name] ?? 0, n = s[S.FLOUR.name] ?? 0, i = s[S.GRAPE.name] ?? 0;
    return t >= 20 ? {
      location: "Mill",
      content: "\u53BB\u78E8\u574A\u628A\u5C0F\u9EA6\u78E8\u6210\u9762\u7C89"
    } : n >= 2 ? {
      location: "Bakery",
      content: "\u53BB\u9762\u5305\u623F\u70D8\u7119\u9762\u5305"
    } : i >= 4 ? {
      location: "JuiceFactory",
      content: "\u53BB\u679C\u6C41\u5382\u69A8\u679C\u6C41"
    } : Math.random() < 0.6 ? {
      location: "Farm",
      content: "\u53BB\u519C\u573A\u79CD\u5C0F\u9EA6"
    } : {
      location: "Vineyard",
      content: "\u53BB\u8461\u8404\u56ED\u91C7\u8461\u8404"
    };
  }
  function te(e) {
    const s = [];
    if (e.energy / e.maxEnergy <= w.energyThreshold) return s.push({
      type: "rest",
      content: "\u592A\u7D2F\u4E86\uFF0C\u9700\u8981\u56DE\u5BB6\u4F11\u606F",
      priority: 95,
      preconditions: {}
    }), {
      innerThought: "\u7D2F\u6B7B\u4E86\uFF0C\u5FC5\u987B\u4F11\u606F\u4E00\u4E0B...",
      stateAssessment: "\u6D3B\u529B\u4E0D\u8DB3",
      addTodos: s,
      adjustPriorities: [],
      cancelTodos: []
    };
    if (e.stamina < e.maxStamina * 0.3) return s.push({
      type: "rest",
      content: "\u56DE\u5BB6\u4F11\u606F\u6062\u590D\u4F53\u529B",
      priority: 90,
      preconditions: {}
    }), {
      innerThought: "\u4F53\u529B\u4E0D\u652F\u4E86\uFF0C\u8BE5\u4F11\u606F\u4E86...",
      stateAssessment: "\u4F53\u529B\u4E0D\u8DB3",
      addTodos: s,
      adjustPriorities: [],
      cancelTodos: []
    };
    if (e.happiness <= 30) return Math.random() < 0.5 ? (s.push({
      type: "social",
      content: "\u627E\u4E2A\u4EBA\u804A\u804A\u5929",
      priority: 75,
      preconditions: {}
    }), {
      innerThought: "\u5FC3\u60C5\u4E0D\u592A\u597D\uFF0C\u627E\u4EBA\u804A\u804A\u5427...",
      stateAssessment: "\u5FC3\u60C5\u4F4E\u843D",
      addTodos: s,
      adjustPriorities: [],
      cancelTodos: []
    }) : (s.push({
      type: "explore",
      content: "\u53BB\u516C\u56ED\u653E\u677E\u5FC3\u60C5",
      priority: 75,
      preconditions: {
        location: "Park"
      }
    }), {
      innerThought: "\u5FC3\u60C5\u4E0D\u592A\u597D\uFF0C\u53BB\u516C\u56ED\u8D70\u8D70\u5427...",
      stateAssessment: "\u5FC3\u60C5\u4F4E\u843D",
      addTodos: s,
      adjustPriorities: [],
      cancelTodos: []
    });
    if (e.money < 50) {
      const r = U(e);
      return s.push({
        type: "work",
        content: r.content,
        priority: 70,
        preconditions: {
          stamina: 20,
          location: r.location
        }
      }), {
        innerThought: `\u94B1\u4E0D\u591F\u4E86\uFF0C${r.content}...`,
        stateAssessment: "\u9700\u8981\u8D5A\u94B1",
        addTodos: s,
        adjustPriorities: [],
        cancelTodos: []
      };
    }
    const n = [
      {
        type: "social",
        content: "\u627E\u4E2A\u4EBA\u804A\u804A\u5929",
        priority: 60,
        preconditions: {}
      },
      {
        type: "social",
        content: "\u548C\u90BB\u5C45\u6253\u4E2A\u62DB\u547C",
        priority: 55,
        preconditions: {}
      },
      {
        type: "social",
        content: "\u770B\u770B\u6709\u6CA1\u6709\u4EBA\u53EF\u4EE5\u804A\u5929",
        priority: 50,
        preconditions: {}
      },
      {
        type: "explore",
        content: "\u53BB\u516C\u56ED\u6563\u6B65\u653E\u677E",
        priority: 45,
        preconditions: {
          location: "Park"
        }
      },
      {
        type: "work",
        content: U(e).content,
        priority: 50,
        preconditions: {
          stamina: 20,
          location: U(e).location
        }
      }
    ], i = n[Math.floor(Math.random() * n.length)];
    return s.push(i), {
      innerThought: "\u8BA9\u6211\u60F3\u60F3\u63A5\u4E0B\u6765\u8BE5\u505A\u4EC0\u4E48...",
      stateAssessment: "\u72B6\u6001\u6B63\u5E38",
      addTodos: s,
      adjustPriorities: [],
      cancelTodos: []
    };
  }
  const ye = {
    baseResponseProbability: 0.95,
    turnDecayRate: 0.92,
    dailyFatigueThreshold: 50,
    waitDecayTicks: 15,
    minResponseProbability: 0.3,
    maxResponseProbability: 0.98,
    responseTaskPriority: 90
  };
  function Mt(e, s, t) {
    const n = ye, i = n.baseResponseProbability, r = Math.pow(n.turnDecayRate, Math.max(0, s.turns - 1)), l = Math.max(0.3, 1 - e.conversationState.totalTurnsToday / n.dailyFatigueThreshold), d = t - s.lastTurnTick, a = Math.max(0.2, 1 - d / n.waitDecayTicks), u = s.sentiment * 0.1, m = i * r * l * a + u;
    return Math.max(n.minResponseProbability, Math.min(n.maxResponseProbability, m));
  }
  function Dt(e, s, t, n, i) {
    const r = e.conversationState.activeConversations[s], l = r ? {
      ...r,
      turns: r.turns + 1,
      lastTurnTick: i
    } : {
      partnerId: s,
      turns: 1,
      lastTurnTick: i,
      sentiment: 0
    }, d = {
      ...e.conversationState.activeConversations,
      [s]: l
    }, a = [
      ...e.history,
      {
        role: "user",
        content: `[${t}\u8BF4] ${n}`
      }
    ], u = Mt(e, l, i), m = Math.random() < u;
    console.log(`[DialogueSystem] ${e.name} \u6536\u5230 ${t} \u7684\u5BF9\u8BDD`), console.log(`[DialogueSystem] \u54CD\u5E94\u6982\u7387: ${(u * 100).toFixed(1)}%, \u51B3\u5B9A${m ? "\u54CD\u5E94" : "\u4E0D\u54CD\u5E94"}`);
    let c = {
      ...e,
      history: a,
      conversationState: {
        activeConversations: d,
        totalTurnsToday: e.conversationState.totalTurnsToday + 1
      }
    };
    if (m) {
      const p = he({
        type: "respond",
        content: `\u56DE\u590D ${t} \u7684\u8BDD`,
        priority: ye.responseTaskPriority,
        source: "external",
        relatedCharacterId: s,
        maxAttempts: 3
      }, i);
      c = {
        ...c,
        todoList: [
          ...c.todoList,
          p
        ]
      }, console.log(`[DialogueSystem] \u4E3A ${e.name} \u521B\u5EFA\u4E86\u54CD\u5E94\u4EFB\u52A1\uFF0C\u76EE\u6807\u89D2\u8272ID: ${s}`);
    }
    return {
      updatedChar: c,
      shouldRespond: m,
      responseProbability: u
    };
  }
  function Rt(e, s) {
    const { [s]: t, ...n } = e.conversationState.activeConversations;
    return {
      ...e,
      conversationState: {
        ...e.conversationState,
        activeConversations: n
      }
    };
  }
  function Lt(e, s, t, n) {
    var _a;
    const r = ((_a = e.conversationState.activeConversations[s]) == null ? void 0 : _a.turns) ?? 1, l = e.history.filter((a) => a.content.includes(t) || a.role === "assistant").slice(-6).map((a) => a.role === "assistant" ? `[\u6211] ${a.content}` : a.content).join(`
`), d = n ? "\u4F60\u60F3\u548C\u5BF9\u65B9\u804A\u804A\u3002" : "\u5BF9\u65B9\u521A\u521A\u5BF9\u4F60\u8BF4\u8BDD\u4E86\u3002";
    return `\u4F60\u662F ${e.name}\uFF0C${e.personality}\u3002

## \u5BF9\u8BDD\u4E0A\u4E0B\u6587
${d}
\u8FD9\u662F\u4ECA\u5929\u4E0E ${t} \u7684\u7B2C ${r} \u8F6E\u5BF9\u8BDD\u3002

## \u6700\u8FD1\u7684\u5BF9\u8BDD
${l || "(\u8FD9\u662F\u7B2C\u4E00\u6B21\u5BF9\u8BDD)"}

## \u5F53\u524D\u72B6\u6001
- \u4F53\u529B: ${e.stamina}/${e.maxStamina}
- \u5FC3\u60C5: ${e.happiness}/100
- \u5F53\u524D\u6D3B\u52A8: ${e.status}

## \u4EFB\u52A1
${n ? "\u8BF7\u4E3B\u52A8\u5F00\u542F\u4E00\u4E2A\u8BDD\u9898\u6216\u6253\u62DB\u547C\u3002" : "\u8BF7\u81EA\u7136\u5730\u56DE\u5E94\u5BF9\u65B9\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u8BDD\u9898\u3001\u8F6C\u79FB\u8BDD\u9898\u6216\u793C\u8C8C\u5730\u7ED3\u675F\u5BF9\u8BDD\u3002"}

\u8FD4\u56DE JSON:
{
  "dialogue": "\u4F60\u8BF4\u7684\u8BDD (30\u5B57\u4EE5\u5185)",
  "innerThought": "\u4F60\u7684\u5185\u5FC3\u60F3\u6CD5 (20\u5B57\u4EE5\u5185\uFF0C\u53EF\u9009)",
  "endConversation": false
}

\u6CE8\u610F\uFF1A\u5982\u679C\u4F60\u60F3\u7ED3\u675F\u5BF9\u8BDD\uFF0C\u5C06 endConversation \u8BBE\u4E3A true\uFF0C\u5E76\u5728 dialogue \u4E2D\u8BF4\u4E00\u53E5\u7ED3\u675F\u8BED\u3002`;
  }
  function Ot(e, s) {
    const t = s.filter((i) => {
      var _a;
      return i.id !== e.id && i.aiEnabled && i.taskName !== "Sleeping" && !((_a = i.faintedState) == null ? void 0 : _a.isFainted);
    });
    if (t.length === 0) return null;
    const n = t.filter((i) => i.locationName === e.locationName);
    return n.length > 0 ? n[Math.floor(Math.random() * n.length)] : t[Math.floor(Math.random() * t.length)];
  }
  async function _t(e, s, t, n, i) {
    try {
      const r = $t(e, s, t, n);
      return await i([
        {
          role: "system",
          content: "\u4F60\u662F\u4E00\u4E2A\u751F\u6D3B\u5728\u5C0F\u9547\u4E2D\u7684\u89D2\u8272\u3002\u8BF7\u6839\u636E\u5F53\u524D\u72B6\u6001\u8FDB\u884C\u601D\u8003\uFF0C\u5E76\u4EE5 JSON \u683C\u5F0F\u8FD4\u56DE\u4F60\u7684\u51B3\u7B56\u3002"
        },
        {
          role: "user",
          content: r
        }
      ]);
    } catch (r) {
      return console.error("[AI-API] \u601D\u8003\u8C03\u7528\u5931\u8D25:", r), null;
    }
  }
  async function Ft(e, s, t, n, i) {
    try {
      const r = Lt(e, s, t, n), l = [
        {
          role: "system",
          content: `\u4F60\u662F ${e.name}\uFF0C\u6B63\u5728\u4E0E ${t} \u5BF9\u8BDD\u3002\u8BF7\u4EE5 JSON \u683C\u5F0F\u8FD4\u56DE\u4F60\u7684\u5BF9\u8BDD\u5185\u5BB9\u3002`
        },
        {
          role: "user",
          content: r
        }
      ], d = await i(l);
      try {
        const a = d.match(/\{[\s\S]*\}/);
        if (a) {
          const u = JSON.parse(a[0]);
          return {
            dialogue: String(u.dialogue || ""),
            innerThought: u.innerThought ? String(u.innerThought) : void 0,
            endConversation: !!u.endConversation
          };
        }
      } catch {
        return {
          dialogue: d.slice(0, 50),
          endConversation: false
        };
      }
      return null;
    } catch (r) {
      return console.error("[AI-API] \u5BF9\u8BDD\u8C03\u7528\u5931\u8D25:", r), null;
    }
  }
  async function Bt(e, s, t) {
    try {
      const n = e.history.slice(-10).map((d) => `[${d.role === "assistant" ? "\u6211" : "\u7CFB\u7EDF/\u4ED6\u4EBA"}] ${d.content}`).join(`
`), i = `\u4F60\u662F ${e.name}\uFF0C${e.personality}\u3002

## \u4ECA\u5929\u662F\u7B2C ${s.day} \u5929

## \u4ECA\u65E5\u72B6\u6001
- \u91D1\u94B1: $${e.money}
- \u4F53\u529B: ${e.stamina}/${e.maxStamina}
- \u6D3B\u529B: ${e.energy}/${e.maxEnergy}
- \u6109\u60A6: ${e.happiness}/100
- \u4F4F\u623F: ${e.home.name}

## \u5E93\u5B58
${Object.entries(e.inventory).map(([d, a]) => `- ${d}: ${a}`).join(`
`) || "(\u7A7A)"}

## \u4ECA\u65E5\u53D1\u751F\u7684\u4E8B
${n || "(\u65E0\u8BB0\u5F55)"}

## \u957F\u671F\u76EE\u6807
${e.longTermGoal}

## \u4EFB\u52A1
\u8BF7\u5199\u4E00\u7BC7\u7B80\u77ED\u7684\u65E5\u8BB0\uFF0C\u56DE\u987E\u4ECA\u5929\u53D1\u751F\u7684\u4E8B\uFF0C\u4EE5\u53CA\u4E00\u53E5\u611F\u609F\u6216\u667A\u6167\u3002

\u8FD4\u56DE JSON:
{
  "diary": "\u4ECA\u65E5\u65E5\u8BB0\u5185\u5BB9 (100\u5B57\u4EE5\u5185)",
  "wisdom": "\u4E00\u53E5\u611F\u609F\u6216\u667A\u6167 (30\u5B57\u4EE5\u5185)"
}`, l = await t([
        {
          role: "system",
          content: "\u4F60\u662F\u4E00\u4E2A\u5199\u65E5\u8BB0\u7684\u89D2\u8272\u3002\u8BF7\u4EE5 JSON \u683C\u5F0F\u8FD4\u56DE\u65E5\u8BB0\u5185\u5BB9\u3002"
        },
        {
          role: "user",
          content: i
        }
      ]);
      try {
        const d = l.match(/\{[\s\S]*\}/);
        if (d) {
          const a = JSON.parse(d[0]);
          return {
            diary: String(a.diary || ""),
            wisdom: String(a.wisdom || "")
          };
        }
      } catch {
        return {
          diary: l.slice(0, 100),
          wisdom: "\u4ECA\u5929\u4E5F\u662F\u5E73\u51E1\u7684\u4E00\u5929\u3002"
        };
      }
      return null;
    } catch (n) {
      return console.error("[AI-API] \u65E5\u8BB0\u8C03\u7528\u5931\u8D25:", n), null;
    }
  }
  function Wt(e) {
    return e.hour === $e && e.minute >= K && e.minute < K + ie;
  }
  function Yt() {
    const { callLLMStream: e } = De(), s = x.useRef({
      pendingThinking: /* @__PURE__ */ new Set(),
      pendingDialogue: /* @__PURE__ */ new Set()
    }), t = x.useCallback(() => f.currentSession, []), n = x.useCallback(async (c, p) => {
      let y = "";
      return await e(c.map((h) => ({
        role: h.role,
        content: h.content,
        id: Math.random().toString(36).substring(7)
      })), (h, T) => {
        y = T, p && f.updateCharacterState(p, {
          thought: `Thinking... ${T.slice(-50)}`
        });
      }), y;
    }, [
      e
    ]), i = x.useCallback(async (c, p) => {
      const y = await Bt(c, p, n);
      y && (f.updateCharacterState(c.id, {
        dailyEntry: y.diary,
        dailyWisdom: y.wisdom,
        wroteDiaryToday: true
      }), f.addLog(`${c.name} \u5199\u5B8C\u4E86\u4ECA\u65E5\u65E5\u8BB0`, "\u7CFB\u7EDF", "sys"));
    }, [
      n
    ]), r = x.useCallback(async (c, p, y) => {
      var _a;
      const h = ee(c, y);
      if (!h) return;
      console.log(`[ThinkingSystem] ${c.name} \u89E6\u53D1\u601D\u8003: ${h.type}`);
      const T = Object.values(((_a = f.currentSession) == null ? void 0 : _a.modeState.characterStates) || {}), g = await _t(c, h, p, T, (j) => n(j, c.id));
      let v;
      g ? v = At(g) || te(c) : v = te(c);
      const b = Pt(c, v, y);
      if (f.setCharacterState(c.id, b), v.addTodos.length > 0) {
        const j = v.addTodos.map((k) => k.content).join("\u3001");
        f.addLog(`${c.name} \u8BA1\u5212: ${j}`, "\u7CFB\u7EDF", "sys");
      }
    }, [
      n
    ]), l = x.useCallback(async (c, p, y, h) => {
      let T = p.relatedCharacterId, g = null;
      if (p.type === "social" && !T) {
        if (g = Ot(c, y), !g) {
          f.updateCharacterState(c.id, N(c, p.id)), f.addLog(`${c.name} \u60F3\u627E\u4EBA\u804A\u5929\uFF0C\u4F46\u5468\u56F4\u6CA1\u6709\u4EBA`, "\u7CFB\u7EDF", "sys");
          return;
        }
        T = g.id, console.log(`[AIDecision] ${c.name} \u4E3B\u52A8\u627E ${g.name} \u804A\u5929`);
      }
      if (!T) {
        f.updateCharacterState(c.id, N(c, p.id));
        return;
      }
      if (g || (g = y.find((j) => j.id === T)), !g) {
        f.updateCharacterState(c.id, N(c, p.id));
        return;
      }
      const v = p.type === "social", b = await Ft(c, T, g.name, v, n);
      if (b && b.dialogue) {
        const j = v ? "\u5BF9" : "\u56DE\u5E94";
        f.addLog(`${c.name} ${j} ${g.name} \u8BF4: "${b.dialogue}"`, c.name, "chat");
        const k = [
          ...c.history,
          {
            role: "assistant",
            content: `[${j}${g.name}\u8BF4] ${b.dialogue}`
          }
        ];
        let C = {
          ...c,
          history: k,
          thought: b.innerThought || c.thought,
          lastDialogue: {
            content: b.dialogue,
            timestamp: Date.now()
          }
        };
        if (C = E(C, p.id), b.endConversation && (C = Rt(C, T)), f.setCharacterState(c.id, C), g.aiEnabled) {
          const D = Dt(g, c.id, c.name, b.dialogue, h);
          f.setCharacterState(T, D.updatedChar), D.shouldRespond && console.log(`[AIDecision] ${g.name} \u51B3\u5B9A\u56DE\u5E94 ${c.name} \u7684\u5BF9\u8BDD`);
        }
      } else f.updateCharacterState(c.id, N(c, p.id)), f.addLog(`${c.name} \u4F3C\u4E4E\u4E0D\u77E5\u9053\u8BE5\u5BF9 ${g.name} \u8BF4\u4EC0\u4E48...`, "\u7CFB\u7EDF", "sys");
    }, [
      n
    ]), d = x.useCallback(async (c, p, y, h, T) => {
      if (c.currentPath && c.currentPath.length > 1 || c.taskTimer > 0) return;
      const g = Q(c);
      if (g && g.status === "in-progress") {
        if (g.type === "respond" || g.type === "social") {
          await l(c, g, y, T);
          return;
        }
        if (g.type === "work" || g.type === "rest") {
          const j = H(c, g);
          f.updateCharacterState(c.id, {
            ...j.updatedChar,
            history: [
              ...c.history,
              ...j.historyEntries
            ]
          });
          for (const k of j.logs) f.addLog(k.content, k.source, k.type);
          return;
        }
        f.updateCharacterState(c.id, E(c, g.id));
        return;
      }
      const v = fe(c, T);
      if (!v) return;
      const b = H(c, v);
      f.updateCharacterState(c.id, {
        ...b.updatedChar,
        history: [
          ...c.history,
          ...b.historyEntries
        ]
      });
      for (const j of b.logs) f.addLog(j.content, j.source, j.type);
    }, [
      l
    ]), a = x.useCallback((c) => {
      var _a;
      return c.status === "\u6655\u5012" || ((_a = c.faintedState) == null ? void 0 : _a.isFainted) ? "fainted" : c.status.includes("\u7761\u89C9") || c.status.includes("\u4F11\u606F\u4E2D") ? "sleeping" : c.taskTimer > 0 ? "working" : "idle";
    }, []), u = x.useCallback(async (c) => {
      const p = t();
      if (!p || !p.modeConfig.settings.aiEnabled) return false;
      const h = p.modeState.characterStates[c];
      if (!(h && h.aiEnabled) || s.current.pendingThinking.has(c)) return false;
      const T = a(h);
      if (T === "sleeping" || T === "fainted") return false;
      let g = false;
      try {
        const v = p.modeState.gameTime, b = p.modeState.tickCount;
        if (Wt(v) && !h.wroteDiaryToday) return await i(h, v), true;
        if (ee(h, b) !== null) {
          s.current.pendingThinking.add(c);
          try {
            await r(h, v, b), g = true;
          } finally {
            s.current.pendingThinking.delete(c);
          }
        }
        const k = t(), C = k == null ? void 0 : k.modeState.characterStates[c], D = Object.values((k == null ? void 0 : k.modeState.characterStates) || {});
        if (C) {
          const Y = Q(C), xe = Y && (Y.type === "social" || Y.type === "respond");
          await d(C, v, D, (k == null ? void 0 : k.modeState.salesStand) || [], b), xe && (g = true);
        }
      } catch (v) {
        console.error(`AI processing error for ${h.name}:`, v), f.updateCharacterState(h.id, {
          status: "AI Error"
        });
      }
      return g;
    }, [
      t,
      a,
      i,
      r,
      d
    ]);
    return {
      processAllAI: x.useCallback(async () => {
        const c = t();
        if (!(c && c.modeConfig.settings.aiEnabled)) return false;
        const p = Object.values(c.modeState.characterStates), y = 3;
        let h = false;
        const T = [];
        for (let g = 0; g < p.length; g += y) T.push(p.slice(g, g + y));
        return await T.reduce(async (g, v) => {
          await g;
          const b = v.map((k) => u(k.id));
          (await Promise.all(b)).some((k) => k) && (h = true);
        }, Promise.resolve()), h;
      }, [
        t,
        u
      ])
    };
  }
  function Ut(e, s) {
    f.addLog(`\u7B2C ${e} \u5929\u7ED3\u675F\uFF0C\u65B0\u7684\u4E00\u5929\u5F00\u59CB\u4E86\uFF01`, "\u7CFB\u7EDF", "sys");
    for (const t of Object.keys(s.modeState.characterStates)) {
      const n = s.modeState.characterStates[t];
      n.wroteDiaryToday = false, n.dailyEntry = null, n.dailyWisdom = null, n.dailyShopVisit = false, n.dailySalesStandVisit = false, n.conversationState.totalTurnsToday = 0;
    }
  }
  function Ht() {
    var _a;
    const e = se(f), s = x.useRef(null), t = x.useRef(false), { processAllAI: n } = Yt(), i = x.useRef(n);
    i.current = n;
    const r = ((_a = e.currentSession) == null ? void 0 : _a.modeState.isRunning) ?? false, l = x.useCallback(async () => {
      if (!f.currentSession) return false;
      const a = f.currentSession, { dayChanged: u, oldDay: m } = f.advanceTime();
      u && Ut(m, a);
      const c = Object.keys(a.modeState.characterStates), p = Object.values(a.modeState.characterStates), y = a.modeState.salesStand, h = a.modeState.gameTime, T = a.modeState.tickCount;
      for (const v of c) {
        const b = a.modeState.characterStates[v], j = jt(b, h, (k, C, D) => f.addLog(k, C, D), p, y, T);
        f.setCharacterState(v, j);
      }
      f.startAIProcessing(c);
      let g = false;
      try {
        g = await i.current();
      } finally {
        f.finishAIProcessing();
      }
      return a.modeState.tickCount % 10 === 0 && await f.updateSessionInDB(), g;
    }, []), d = x.useCallback(async () => {
      var _a2, _b;
      if (t.current) {
        const m = (_a2 = f.currentSession) == null ? void 0 : _a2.modeConfig.settings;
        if (m == null ? void 0 : m.waitForAICompletion) {
          f.addPendingTick();
          const c = m.maxAIWaitTicks ?? 3;
          f.aiProcessingState.ticksPending >= c && console.warn("[SmallTown] AI \u5904\u7406\u65F6\u95F4\u8FC7\u957F\uFF0C\u5DF2\u7D2F\u79EF", c, "\u4E2A tick"), f.isAIStuck() && (console.error("[SmallTown] AI \u5904\u7406\u8D85\u65F6\uFF0C\u53EF\u80FD\u5361\u4F4F\u4E86"), f.addLog("AI \u5904\u7406\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5", "\u7CFB\u7EDF", "sys"));
        }
        return;
      }
      t.current = true;
      let a = false;
      try {
        a = await l();
        const u = f.consumePendingTicks();
        if (u > 0) {
          console.log(`[SmallTown] \u5904\u7406\u7D2F\u79EF\u7684 ${u} \u4E2A tick`);
          for (let m = 0; m < u; m++) await l() && (a = true);
        }
      } catch (u) {
        console.error("[SmallTown] Tick error:", u);
      } finally {
        t.current = false;
      }
      if (s.current) {
        const m = (_b = f.currentSession) == null ? void 0 : _b.modeConfig.settings, c = (m == null ? void 0 : m.fastTickInterval) ?? 500, p = (m == null ? void 0 : m.normalTickInterval) ?? 5e3, y = a ? p : c;
        s.current = setTimeout(d, y);
      }
    }, [
      l
    ]);
    return x.useEffect(() => {
      if (r) {
        if (s.current) return;
        console.log("[SmallTown] Game loop started"), s.current = setTimeout(d, 0);
      } else s.current && (clearTimeout(s.current), s.current = null, console.log("[SmallTown] Game loop stopped"));
      return () => {
        s.current && (clearTimeout(s.current), s.current = null);
      };
    }, [
      r,
      d
    ]), {
      isRunning: r,
      aiProcessingState: e.aiProcessingState
    };
  }
  function Xt() {
    const e = x.useRef(void 0), s = x.useRef(void 0), t = (n) => {
      if (s.current !== void 0) {
        const i = (n - s.current) / 1e3, r = f.currentSession;
        if (r && r.modeState.isRunning) {
          const l = r.modeState.characterStates;
          Object.keys(l).forEach((d) => {
            const a = l[d];
            if (a.currentPath && a.currentPath.length > 1) {
              (a.visualX === void 0 || Number.isNaN(a.visualX)) && (a.visualX = a.gridX), (a.visualY === void 0 || Number.isNaN(a.visualY)) && (a.visualY = a.gridY);
              const m = ht(a.visualX, a.visualY, a.currentPath, 4, i);
              !Number.isNaN(m.x) && !Number.isNaN(m.y) && (a.visualX = m.x, a.visualY = m.y), m.reachedNextTile && (a.currentPath.shift(), a.gridX = Math.round(m.x), a.gridY = Math.round(m.y)), m.completed && (a.currentPath = void 0, a.visualX = a.gridX, a.visualY = a.gridY, a.targetLocationName && (a.locationName = a.targetLocationName, a.targetLocationName = void 0));
            } else if ((a.visualX === void 0 || Number.isNaN(a.visualX)) && (a.visualX = a.gridX), (a.visualY === void 0 || Number.isNaN(a.visualY)) && (a.visualY = a.gridY), Math.abs(a.visualX - a.gridX) + Math.abs(a.visualY - a.gridY) < 0.05) a.visualX = a.gridX, a.visualY = a.gridY;
            else {
              const m = 10 * i;
              a.visualX += (a.gridX - a.visualX) * m, a.visualY += (a.gridY - a.visualY) * m;
            }
          });
        }
      }
      s.current = n, e.current = requestAnimationFrame(t);
    };
    x.useEffect(() => (e.current = requestAnimationFrame(t), () => {
      e.current && cancelAnimationFrame(e.current);
    }), []);
  }
  function Jt({ open: e, onOpenChange: s, settings: t, onSave: n }) {
    const [i, r] = x.useState(t);
    x.useEffect(() => {
      e && r(t);
    }, [
      e,
      t
    ]);
    const l = () => {
      n(i), s(false);
    };
    return o.jsx(re, {
      open: e,
      onOpenChange: s,
      children: o.jsxs(le, {
        className: "sm:max-w-[425px]",
        children: [
          o.jsxs(ce, {
            children: [
              o.jsx(de, {
                children: "\u5C0F\u9547\u8BBE\u7F6E"
              }),
              o.jsx(ue, {
                children: "\u8C03\u6574\u6E38\u620F\u8FD0\u884C\u53C2\u6570\u548C AI \u884C\u4E3A\u3002"
              })
            ]
          }),
          o.jsxs("div", {
            className: "grid gap-4 py-4",
            children: [
              o.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  o.jsxs(R, {
                    htmlFor: "ai-enabled",
                    className: "flex flex-col gap-1",
                    children: [
                      o.jsx("span", {
                        children: "\u542F\u7528 AI \u51B3\u7B56"
                      }),
                      o.jsx("span", {
                        className: "font-normal text-xs text-muted-foreground",
                        children: "\u5173\u95ED\u540E\u89D2\u8272\u5C06\u505C\u6B62\u81EA\u4E3B\u601D\u8003"
                      })
                    ]
                  }),
                  o.jsx(q, {
                    id: "ai-enabled",
                    checked: i.aiEnabled,
                    onCheckedChange: (d) => r((a) => ({
                      ...a,
                      aiEnabled: d
                    }))
                  })
                ]
              }),
              o.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  o.jsxs(R, {
                    htmlFor: "wait-ai",
                    className: "flex flex-col gap-1",
                    children: [
                      o.jsx("span", {
                        children: "\u7B49\u5F85 AI \u5B8C\u6210 (\u5F3A\u4E00\u81F4\u6027)"
                      }),
                      o.jsx("span", {
                        className: "font-normal text-xs text-muted-foreground",
                        children: "Tick \u53EA\u6709\u5728 AI \u601D\u8003\u5B8C\u540E\u624D\u7EE7\u7EED"
                      })
                    ]
                  }),
                  o.jsx(q, {
                    id: "wait-ai",
                    checked: i.waitForAICompletion,
                    onCheckedChange: (d) => r((a) => ({
                      ...a,
                      waitForAICompletion: d
                    }))
                  })
                ]
              }),
              o.jsxs("div", {
                className: "space-y-2",
                children: [
                  o.jsxs(R, {
                    children: [
                      "\u5FEB\u901F Tick (\u65E0 AI \u65F6) - ",
                      i.fastTickInterval,
                      "ms"
                    ]
                  }),
                  o.jsx(Z, {
                    min: 100,
                    max: 2e3,
                    step: 100,
                    value: [
                      i.fastTickInterval
                    ],
                    onValueChange: ([d]) => r((a) => ({
                      ...a,
                      fastTickInterval: d
                    }))
                  })
                ]
              }),
              o.jsxs("div", {
                className: "space-y-2",
                children: [
                  o.jsxs(R, {
                    children: [
                      "\u6B63\u5E38 Tick (\u6709 AI \u65F6) - ",
                      i.normalTickInterval,
                      "ms"
                    ]
                  }),
                  o.jsx(Z, {
                    min: 1e3,
                    max: 1e4,
                    step: 500,
                    value: [
                      i.normalTickInterval
                    ],
                    onValueChange: ([d]) => r((a) => ({
                      ...a,
                      normalTickInterval: d
                    }))
                  })
                ]
              }),
              o.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                  o.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      o.jsx(R, {
                        children: "\u5DE5\u4F5C\u65F6\u957F (Tick)"
                      }),
                      o.jsx(z, {
                        type: "number",
                        value: i.workingInterval,
                        onChange: (d) => r((a) => ({
                          ...a,
                          workingInterval: Number(d.target.value)
                        }))
                      })
                    ]
                  }),
                  o.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      o.jsx(R, {
                        children: "\u7A7A\u95F2\u65F6\u957F (Tick)"
                      }),
                      o.jsx(z, {
                        type: "number",
                        value: i.idleInterval,
                        onChange: (d) => r((a) => ({
                          ...a,
                          idleInterval: Number(d.target.value)
                        }))
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          o.jsxs(Re, {
            children: [
              o.jsx(_, {
                variant: "outline",
                onClick: () => s(false),
                children: "\u53D6\u6D88"
              }),
              o.jsx(_, {
                onClick: l,
                children: "\u4FDD\u5B58\u66F4\u6539"
              })
            ]
          })
        ]
      })
    });
  }
  function Gt({ className: e, children: s, ...t }) {
    return o.jsx("div", {
      "data-slot": "scroll-area",
      className: Le("overflow-x-auto overflow-y-auto", e),
      ...t,
      children: s
    });
  }
  function Kt({ open: e, onOpenChange: s, character: t }) {
    if (!t) return null;
    const n = [
      ...t.dailyLog
    ].sort((i, r) => r.day - i.day);
    return o.jsx(re, {
      open: e,
      onOpenChange: s,
      children: o.jsxs(le, {
        className: "sm:max-w-[600px] max-h-[80vh] flex flex-col",
        children: [
          o.jsxs(ce, {
            children: [
              o.jsxs(de, {
                className: "flex items-center gap-2",
                children: [
                  o.jsx("div", {
                    className: "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold",
                    style: {
                      backgroundColor: t.color
                    },
                    children: t.name.charAt(0)
                  }),
                  t.name,
                  " \u7684\u65E5\u8BB0\u672C"
                ]
              }),
              o.jsx(ue, {
                children: "\u8BB0\u5F55\u4E86\u6BCF\u5929\u53D1\u751F\u7684\u4E8B\u60C5\u548C\u611F\u609F\u3002"
              })
            ]
          }),
          o.jsx(Gt, {
            className: "flex-1 pr-4 -mr-4",
            children: o.jsx("div", {
              className: "space-y-6 py-4",
              children: n.length === 0 ? o.jsx("div", {
                className: "text-center text-muted-foreground py-10",
                children: "\u8FD8\u6CA1\u6709\u5199\u8FC7\u65E5\u8BB0..."
              }) : n.map((i) => o.jsxs("div", {
                className: "border rounded-lg p-4 bg-card/50 space-y-3",
                children: [
                  o.jsxs("div", {
                    className: "flex items-center justify-between border-b pb-2",
                    children: [
                      o.jsxs("h3", {
                        className: "font-semibold",
                        children: [
                          "\u7B2C ",
                          i.day,
                          " \u5929"
                        ]
                      }),
                      o.jsxs("span", {
                        className: "text-xs text-muted-foreground bg-muted px-2 py-1 rounded",
                        children: [
                          "\u7B56\u7565: ",
                          i.strategy
                        ]
                      })
                    ]
                  }),
                  o.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      o.jsx("h4", {
                        className: "text-sm font-medium text-muted-foreground",
                        children: "\u4ECA\u65E5\u8BB0\u4E8B"
                      }),
                      o.jsx("p", {
                        className: "text-sm leading-relaxed whitespace-pre-wrap",
                        children: i.dailyEntry
                      })
                    ]
                  }),
                  i.dailyWisdom && o.jsxs("div", {
                    className: "space-y-1 bg-primary/5 p-3 rounded border border-primary/10",
                    children: [
                      o.jsx("h4", {
                        className: "text-xs font-medium text-primary",
                        children: "\u6BCF\u65E5\u611F\u609F"
                      }),
                      o.jsxs("p", {
                        className: "text-sm italic text-muted-foreground",
                        children: [
                          '"',
                          i.dailyWisdom,
                          '"'
                        ]
                      })
                    ]
                  }),
                  o.jsxs("div", {
                    className: "pt-2 border-t flex gap-4 text-xs text-muted-foreground",
                    children: [
                      o.jsxs("span", {
                        children: [
                          "\u{1F4B0} $",
                          i.endStatus.money
                        ]
                      }),
                      o.jsxs("span", {
                        children: [
                          "\u26A1\uFE0F ",
                          i.endStatus.stamina
                        ]
                      }),
                      o.jsxs("span", {
                        children: [
                          "\u{1F604} ",
                          i.endStatus.happiness
                        ]
                      })
                    ]
                  })
                ]
              }, i.day))
            })
          })
        ]
      })
    });
  }
  function Zt({ sessionId: e }) {
    const s = se(f), [t, n] = x.useState(null), [i, r] = x.useState(false), [l, d] = x.useState(false), a = x.useCallback((h) => {
      f.currentSession && (f.currentSession.modeConfig.settings = h, f.updateSessionInDB());
    }, []), { isRunning: u } = Ht();
    Xt();
    const m = x.useCallback((h) => {
      n(h);
    }, []), c = s.currentSession, p = c ? Object.values(c.modeState.characterStates) : [];
    if (x.useEffect(() => {
      !t && p.length > 0 && n(p[0].id);
    }, [
      p,
      t
    ]), !c) return o.jsx("div", {
      className: "flex items-center justify-center h-full",
      children: o.jsx("p", {
        className: "text-muted-foreground",
        children: "\u52A0\u8F7D\u4E2D..."
      })
    });
    const y = t ? c.modeState.characterStates[t] : null;
    return o.jsxs("div", {
      className: "flex flex-col h-full bg-background",
      children: [
        o.jsx(_e, {
          gameTime: c.modeState.gameTime,
          isRunning: u,
          onToggle: () => f.toggle(),
          onSettings: () => r(true)
        }),
        o.jsxs("div", {
          className: "flex-1 flex overflow-hidden",
          children: [
            o.jsxs("div", {
              className: "flex-1 flex flex-col p-4 gap-2 overflow-hidden",
              children: [
                o.jsx("div", {
                  className: "flex-1 overflow-auto",
                  children: o.jsx(Ye, {
                    characterStates: p,
                    selectedCharacterId: t,
                    onSelectCharacter: m
                  })
                }),
                o.jsx(Xe, {
                  contextItems: s.historyItems,
                  selectedCharacter: y || null
                })
              ]
            }),
            o.jsx(Ue, {
              character: y || null,
              gameTime: c.modeState.gameTime,
              onOpenDiary: () => d(true)
            })
          ]
        }),
        c && o.jsx(Jt, {
          open: i,
          onOpenChange: r,
          settings: c.modeConfig.settings,
          onSave: a
        }),
        o.jsx(Kt, {
          open: l,
          onOpenChange: d,
          character: y || null
        })
      ]
    });
  }
  vs = function({ sessionId: e }) {
    const { data: s = [] } = Te((n) => n.from({
      s: be
    }).where(({ s: i }) => ve(i.id, e))), t = s[0];
    return x.useEffect(() => {
      var _a;
      if (!t || ((_a = f.currentSession) == null ? void 0 : _a.id) === e) return;
      (async () => {
        try {
          const l = {
            historyItems: await new je(e).getContextItems(),
            processingItem: void 0
          };
          f.loadSession(t, l);
        } catch (i) {
          console.error("[SmallTown] \u52A0\u8F7D\u4F1A\u8BDD\u5931\u8D25:", i);
        }
      })();
    }, [
      t,
      e
    ]), x.useEffect(() => () => {
      f.unloadSession();
    }, []), t ? t.mode !== "small-town" ? o.jsx("div", {
      className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
      children: o.jsx("p", {
        children: "\u4F1A\u8BDD\u6A21\u5F0F\u4E0D\u5339\u914D"
      })
    }) : o.jsx(Zt, {
      sessionId: e
    }) : o.jsx("div", {
      className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
      children: o.jsx("p", {
        children: "\u4F1A\u8BDD\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664"
      })
    });
  };
});
export {
  vs as SessionMainForSmallTown,
  __tla
};
