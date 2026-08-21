const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-BD5cuqGE.js","assets/@tanstack-DHpjEvx5.js","assets/react-BwrVEnbn.js","assets/vendor-Btzk85e_.js","assets/formatting-Cgd9k2rU.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-C4f2dvgg.js","assets/zod-BOL00Oce.js","assets/analytics-CgY6CsYJ.js","assets/app-configurations-Bm8i7f1O.js","assets/clarity-D1JZhIBn.js","assets/nex-tavern-uuid-BRGLU0IZ.js","assets/id-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { y as H, a8 as Te, j as o, r as x, u as se } from "./react-BwrVEnbn.js";
import { j as ve, o as be } from "./@tanstack-DHpjEvx5.js";
import { S as je, j as ke, h as Ne } from "./db-master-BD5cuqGE.js";
import { _ as J, __tla as __tla_0 } from "./index-CUosL2Px.js";
import { n as G } from "./id-BY9c7rfI.js";
import { f as ne, M as ie, a as Ce, W as we, L as F, G as I, b as A, I as S, d as oe, R as ae, T as $e, e as Ie, g as W, D as Ae, h as K, S as Z, i as Ee, j as Me } from "./slider-DSu9sj5G.js";
import { C as Pe, A as De } from "./AutoScrollDownArea-DjEl-AZw.js";
import { B as _ } from "./button-DfQJxXN9.js";
import { aB as Re, aA as Le, q as Oe, aF as _e } from "./icons-an9klV8i.js";
import { C as re } from "./CharacterAvatar-DT8CsUgC.js";
import { Q as V } from "./vendor-Btzk85e_.js";
import { u as Fe } from "./useLLM-BM4jtOMc.js";
import { D as le, a as ce, b as de, c as ue, d as me, e as Be } from "./dialog-BC5CT29R.js";
import { L as R } from "./label-RyJAwE73.js";
import { S as q } from "./switch-BIbSASbT.js";
import { I as z } from "./input-Ce1w9VQ-.js";
import { c as We } from "./shadcn-utils-Cnr6N47i.js";
import { l as Ye } from "./zod-BOL00Oce.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C4f2dvgg.js";
import "./analytics-CgY6CsYJ.js";
import "./app-configurations-Bm8i7f1O.js";
import "./clarity-D1JZhIBn.js";
import "./nex-tavern-uuid-BRGLU0IZ.js";
import "./formatting-Cgd9k2rU.js";
import "./es-toolkit-9bjl2JfA.js";
import "./components-and-styling-lnR2ABT4.js";
import "./global-llm-config.store-CMShswv9.js";
import "./@tailwind-CPcsbTWB.js";
let Ds;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    class Ue {
        session;
        constructor(t){
            this.session = t;
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
        getCharacterState(t) {
            return this.session.modeState.characterStates[t];
        }
        getAllCharacterStates() {
            return Object.values(this.session.modeState.characterStates);
        }
        getCharacterIds() {
            return Object.keys(this.session.modeState.characterStates);
        }
        updateCharacterState(t, s) {
            const n = this.session.modeState.characterStates[t];
            n && (this.session.modeState.characterStates[t] = {
                ...n,
                ...s
            });
        }
        setCharacterState(t, s) {
            this.session.modeState.characterStates[t] = s;
        }
        start() {
            this.session.modeState.isRunning = !0, this.session.modeState.currentPhase = "running";
        }
        pause() {
            this.session.modeState.isRunning = !1, this.session.modeState.currentPhase = "paused";
        }
        toggle() {
            this.session.modeState.isRunning ? this.pause() : this.start();
        }
        setGameTime(t) {
            this.session.modeState.gameTime = t;
        }
        incrementTickCount() {
            this.session.modeState.tickCount++;
        }
        addLog(t, s, n) {
            const i = {
                time: ne(this.session.modeState.gameTime),
                source: s,
                content: t,
                type: n
            };
            this.session.modeState.logs.push(i), this.session.modeState.logs.length > 500 && (this.session.modeState.logs = this.session.modeState.logs.slice(-400));
        }
        getLogs() {
            return this.session.modeState.logs;
        }
        getRecentLogs(t) {
            return this.session.modeState.logs.slice(-t);
        }
        getSalesStand() {
            return this.session.modeState.salesStand;
        }
        setSalesStand(t) {
            this.session.modeState.salesStand = t;
        }
        addSalesItem(t) {
            this.session.modeState.salesStand.push(t);
        }
        removeSalesItem(t) {
            this.session.modeState.salesStand = this.session.modeState.salesStand.filter((s)=>s.id !== t);
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
    const f = H({
        currentSession: null,
        sessionManager: null,
        contextManager: null,
        historyItems: [],
        aiProcessingState: {
            isProcessing: !1,
            processingCharacters: new Set,
            startedAt: 0,
            ticksPending: 0
        },
        loadSession (e, t) {
            this.currentSession = JSON.parse(JSON.stringify(e)), this.currentSession && (this.currentSession.modeState.isRunning = !1, this.currentSession.modeState.currentPhase = "paused"), this.currentSession && (this.sessionManager = new Ue(this.currentSession));
            const s = H(t || {
                historyItems: [],
                processingItem: void 0
            });
            this.contextManager = new Pe(s), this.historyItems = [
                ...t?.historyItems || []
            ];
        },
        unloadSession () {
            this.currentSession = null, this.sessionManager = null, this.contextManager = null, this.historyItems = [];
        },
        start () {
            this.currentSession && (this.currentSession.modeState.isRunning = !0, this.currentSession.modeState.currentPhase = "running", this.updateSessionInDB());
        },
        pause () {
            this.currentSession && (this.currentSession.modeState.isRunning = !1, this.currentSession.modeState.currentPhase = "paused", this.updateSessionInDB());
        },
        toggle () {
            this.currentSession?.modeState.isRunning ? this.pause() : this.start();
        },
        getCharacterState (e) {
            return this.currentSession?.modeState.characterStates[e];
        },
        updateCharacterState (e, t) {
            if (this.currentSession) {
                const s = this.currentSession.modeState.characterStates[e];
                s && (this.currentSession.modeState.characterStates[e] = {
                    ...s,
                    ...t
                });
            }
        },
        setCharacterState (e, t) {
            this.currentSession && (this.currentSession.modeState.characterStates[e] = t);
        },
        advanceTime () {
            if (!this.currentSession) return {
                dayChanged: !1,
                oldDay: 0
            };
            const e = this.currentSession.modeState, t = e.gameTime.day;
            let { day: s, hour: n, minute: i } = e.gameTime;
            return i += ie, i >= 60 && (n += Math.floor(i / 60), i %= 60), n >= 24 && (s += Math.floor(n / 24), n %= 24), e.gameTime = {
                day: s,
                hour: n,
                minute: i
            }, e.tickCount++, {
                dayChanged: s !== t,
                oldDay: t
            };
        },
        addLog (e, t, s) {
            if (!(this.currentSession && this.contextManager)) return;
            let n;
            const i = Date.now(), l = ne(this.currentSession.modeState.gameTime);
            s === "chat" ? n = {
                id: G(),
                type: "participant_message",
                timestamp: i,
                data: {
                    content: e,
                    name: t,
                    role: "assistant",
                    isCharacter: !0,
                    characterId: t,
                    isUser: !1,
                    isDM: !1,
                    isEnv: !1,
                    gameTime: l
                }
            } : n = {
                id: G(),
                type: "alert",
                timestamp: i,
                orderRef: 0,
                data: {
                    type: s === "trade" ? "success" : "info",
                    content: e,
                    source: t,
                    gameTime: l,
                    timestamp: i
                }
            }, this.contextManager.addHistoryItem(n), this.historyItems = [
                ...this.historyItems,
                n
            ], this.historyItems.length > 500 && (this.historyItems = this.historyItems.slice(-400)), this.saveContextItemToDB(this.currentSession.id, n).catch((r)=>{
                console.error("Failed to save log to DB:", r);
            });
        },
        getSalesStand () {
            return this.currentSession?.modeState.salesStand ?? [];
        },
        setSalesStand (e) {
            this.currentSession && (this.currentSession.modeState.salesStand = e);
        },
        startAIProcessing (e) {
            this.aiProcessingState.isProcessing = !0, this.aiProcessingState.startedAt = Date.now(), this.aiProcessingState.processingCharacters = new Set(e);
        },
        finishAIProcessing () {
            this.aiProcessingState.isProcessing = !1, this.aiProcessingState.processingCharacters = new Set, this.aiProcessingState.startedAt = 0;
        },
        addPendingTick () {
            this.aiProcessingState.ticksPending++;
        },
        consumePendingTicks () {
            const e = this.aiProcessingState.ticksPending;
            return this.aiProcessingState.ticksPending = 0, e;
        },
        isAIStuck () {
            if (!this.aiProcessingState.isProcessing) return !1;
            const e = this.currentSession?.modeConfig.settings.aiTimeoutMs ?? 3e4;
            return Date.now() - this.aiProcessingState.startedAt > e;
        },
        async saveContextItemToDB (e, t) {
            const { SessionDB: s } = await J(async ()=>{
                const { SessionDB: l } = await import("./db-master-BD5cuqGE.js").then((r)=>r.v);
                return {
                    SessionDB: l
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])), n = new s(e), i = JSON.parse(JSON.stringify(t));
            await n.addContextItems([
                i
            ]);
        },
        async updateSessionInDB () {
            if (!this.currentSession) return;
            const { masterDb: e } = await J(async ()=>{
                const { masterDb: s } = await import("./db-master-BD5cuqGE.js").then((n)=>n.w);
                return {
                    masterDb: s
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])), t = Te(this.currentSession.modeState);
            await e.sessions.update(this.currentSession.id, {
                modeState: t,
                updatedAt: Date.now()
            });
        }
    });
    function Xe({ gameTime: e, isRunning: t, onToggle: s, onSettings: n }) {
        return o.jsxs("div", {
            className: "flex items-center justify-between px-4 py-2 border-b bg-card",
            children: [
                o.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                        o.jsx("h1", {
                            className: "text-lg font-semibold",
                            children: "🏘️ 小镇模式"
                        }),
                        o.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: Ce(e)
                        })
                    ]
                }),
                o.jsx("div", {
                    className: "flex items-center gap-2",
                    children: o.jsx(_, {
                        type: "button",
                        variant: t ? "default" : "outline",
                        size: "sm",
                        onClick: s,
                        children: t ? o.jsxs(o.Fragment, {
                            children: [
                                o.jsx(Re, {
                                    className: "w-4 h-4 mr-1"
                                }),
                                "暂停"
                            ]
                        }) : o.jsxs(o.Fragment, {
                            children: [
                                o.jsx(Le, {
                                    className: "w-4 h-4 mr-1"
                                }),
                                "开始"
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
                        children: o.jsx(Oe, {
                            className: "w-4 h-4"
                        })
                    })
                })
            ]
        });
    }
    function He({ config: e, gridSize: t }) {
        const s = {
            position: "absolute",
            left: e.x * t,
            top: e.y * t,
            width: e.w * t,
            height: e.h * t,
            backgroundColor: e.color,
            opacity: .6
        };
        return o.jsx("div", {
            className: "rounded border border-black/10 dark:border-white/10 flex items-center justify-center text-center pointer-events-none",
            style: s,
            title: e.info || e.label,
            children: o.jsx("span", {
                className: "text-xs font-medium text-black/70 dark:text-white/70 px-1 leading-tight",
                children: e.label
            })
        });
    }
    const Je = 5e3;
    function Ge({ character: e, gridSize: t, isSelected: s, onClick: n }) {
        const i = t * .8, l = (t - i) / 2, r = e.visualX ?? e.gridX, d = e.visualY ?? e.gridY, a = {
            position: "absolute",
            left: r * t + l,
            top: d * t + l,
            width: i,
            height: i,
            zIndex: s ? 10 : 1
        }, u = e.taskTimer > 0, m = we, c = u ? Math.max(0, Math.min(100, (m - e.taskTimer) / m * 100)) : 0, p = e.lastDialogue && Date.now() - e.lastDialogue.timestamp < Je, y = e.lastDialogue?.content ? e.lastDialogue.content.length > 20 ? `${e.lastDialogue.content.slice(0, 20)}...` : e.lastDialogue.content : "";
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
                    className: `relative pointer-events-auto transition-transform hover:scale-110 ${s ? "ring-2 ring-primary ring-offset-2 rounded-full" : ""}`,
                    onClick: n,
                    title: `${e.name}: ${e.status}`,
                    children: o.jsx(re, {
                        character: e,
                        size: "custom",
                        shape: "circle",
                        className: "shadow-sm border border-white/20",
                        style: {
                            width: i,
                            height: i
                        }
                    })
                }),
                o.jsx("span", {
                    className: "absolute -bottom-4 text-[10px] whitespace-nowrap bg-black/50 text-white px-1 rounded backdrop-blur-sm",
                    children: e.name
                })
            ]
        });
    }
    function Ke({ characterStates: e, selectedCharacterId: t, onSelectCharacter: s }) {
        const n = I * A, i = x.useMemo(()=>Object.entries(F).map(([d, a])=>o.jsx(He, {
                    locationKey: d,
                    config: a,
                    gridSize: I
                }, d)), []), l = x.useMemo(()=>e.map((d)=>o.jsx(Ge, {
                    character: d,
                    gridSize: I,
                    isSelected: d.id === t,
                    onClick: ()=>s(d.id)
                }, d.id)), [
            e,
            t,
            s
        ]), r = x.useMemo(()=>e.map((d)=>{
                if (!d.currentPath || d.currentPath.length < 2) return null;
                const a = d.currentPath.map(([u, m])=>`${u * I + I / 2},${m * I + I / 2}`).join(" ");
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
                    children: r
                }),
                i,
                l
            ]
        });
    }
    function Ze({ character: e, onOpenDiary: t }) {
        if (!e) return o.jsx("div", {
            className: "w-72 border-l bg-card p-4",
            children: o.jsx("p", {
                className: "text-muted-foreground text-sm",
                children: "选择一个角色查看详情"
            })
        });
        const s = e.stamina / e.maxStamina * 100, n = e.energy / e.maxEnergy * 100, i = e.happiness;
        return o.jsxs("div", {
            className: "w-72 border-l bg-card overflow-y-auto",
            children: [
                o.jsx("div", {
                    className: "p-4 border-b",
                    children: o.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                            o.jsx(re, {
                                character: e,
                                size: "sm",
                                shape: "square"
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
                            children: "状态"
                        }),
                        o.jsxs("div", {
                            className: "space-y-1",
                            children: [
                                o.jsxs("div", {
                                    className: "flex justify-between text-sm",
                                    children: [
                                        o.jsx("span", {
                                            children: "体力"
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
                                            width: `${s}%`
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
                                            children: "活力"
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
                                            children: "愉悦"
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
                                    children: "💰 金钱"
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
                            children: "当前活动"
                        }),
                        o.jsxs("div", {
                            className: "text-sm",
                            children: [
                                o.jsxs("p", {
                                    children: [
                                        o.jsx("span", {
                                            className: "text-muted-foreground",
                                            children: "状态:"
                                        }),
                                        " ",
                                        e.status
                                    ]
                                }),
                                o.jsxs("p", {
                                    children: [
                                        o.jsx("span", {
                                            className: "text-muted-foreground",
                                            children: "位置:"
                                        }),
                                        " ",
                                        e.locationName
                                    ]
                                }),
                                o.jsxs("p", {
                                    children: [
                                        o.jsx("span", {
                                            className: "text-muted-foreground",
                                            children: "任务:"
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
                                    children: "内心想法"
                                }),
                                t && o.jsxs(_, {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "h-6 px-2 text-muted-foreground hover:text-foreground",
                                    onClick: t,
                                    children: [
                                        o.jsx(_e, {
                                            className: "w-3 h-3 mr-1"
                                        }),
                                        "日记"
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
                            children: "库存"
                        }),
                        Object.keys(e.inventory).length === 0 ? o.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "(空)"
                        }) : o.jsx("div", {
                            className: "space-y-1",
                            children: Object.entries(e.inventory).map(([l, r])=>o.jsxs("div", {
                                    className: "flex justify-between text-sm",
                                    children: [
                                        o.jsx("span", {
                                            children: l
                                        }),
                                        o.jsxs("span", {
                                            children: [
                                                "×",
                                                r
                                            ]
                                        })
                                    ]
                                }, l))
                        })
                    ]
                }),
                o.jsxs("div", {
                    className: "p-4 space-y-2",
                    children: [
                        o.jsxs("h3", {
                            className: "text-sm font-medium text-muted-foreground",
                            children: [
                                "待办事项 (",
                                e.todoList.filter((l)=>l.status === "pending").length,
                                ")"
                            ]
                        }),
                        e.todoList.length === 0 ? o.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "(无)"
                        }) : o.jsx("div", {
                            className: "space-y-1 max-h-32 overflow-y-auto",
                            children: e.todoList.filter((l)=>l.status !== "completed" && l.status !== "cancelled").slice(0, 5).map((l)=>o.jsxs("div", {
                                    className: `text-xs p-1.5 rounded ${l.status === "in-progress" ? "bg-primary/10 text-primary" : "bg-muted"}`,
                                    children: [
                                        o.jsxs("span", {
                                            className: "text-muted-foreground",
                                            children: [
                                                "[",
                                                l.type,
                                                "]"
                                            ]
                                        }),
                                        " ",
                                        l.content
                                    ]
                                }, l.id))
                        })
                    ]
                })
            ]
        });
    }
    function Ve(e, t) {
        return e === "chat" ? "text-blue-600 dark:text-blue-400 font-semibold" : t.includes("计划") || t.includes("决定") ? "text-purple-600 dark:text-purple-400" : t.includes("前往") || t.includes("移动") ? "text-amber-600 dark:text-amber-400" : t.includes("完成") || t.includes("吃了") || t.includes("喝了") || t.includes("睡醒") ? "text-emerald-600 dark:text-emerald-400" : t.includes("取消") || t.includes("失败") || t.includes("无法") || t.includes("晕倒") ? "text-red-600 dark:text-red-400" : t.includes("开始") ? "text-cyan-600 dark:text-cyan-400" : "text-muted-foreground";
    }
    function qe({ contextItems: e, selectedCharacter: t }) {
        const n = x.useMemo(()=>e.filter((i)=>!(i.hidden || i.deleted)).map((i)=>i.type === "alert" ? {
                    id: i.id,
                    time: i.data.gameTime || (i.timestamp ? new Date(i.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: !1
                    }) : ""),
                    source: "系统",
                    content: i.data.content,
                    type: "sys"
                } : i.type === "participant_message" || i.type === "character_message" ? {
                    id: i.id,
                    time: i.data.gameTime || (i.timestamp ? new Date(i.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: !1
                    }) : ""),
                    source: i.data.name || "未知",
                    content: i.data.content,
                    type: "chat"
                } : null).filter((i)=>i !== null).filter((i)=>i.type === "sys" || !t ? !0 : i.source.includes(t.name) || i.content.includes(t.name)), [
            e,
            t
        ]).slice(-50);
        return o.jsxs("div", {
            className: "h-40 border rounded-lg bg-card flex flex-col",
            children: [
                o.jsxs("div", {
                    className: "px-3 py-1.5 border-b bg-muted/50 flex items-center justify-between",
                    children: [
                        o.jsx("span", {
                            className: "text-sm font-medium",
                            children: "日志"
                        }),
                        o.jsx("span", {
                            className: "text-xs text-muted-foreground",
                            children: t ? `筛选: ${t.name}` : "全部"
                        })
                    ]
                }),
                o.jsx(De, {
                    className: "flex-1 p-2 space-y-1 text-xs font-mono",
                    children: n.length === 0 ? o.jsx("p", {
                        className: "text-muted-foreground text-center py-4",
                        children: "暂无日志"
                    }) : n.map((i)=>o.jsxs("div", {
                            className: `flex gap-2 ${Ve(i.type, i.content)}`,
                            children: [
                                o.jsxs("span", {
                                    className: "opacity-70 shrink-0",
                                    children: [
                                        "[",
                                        i.time,
                                        "]"
                                    ]
                                }),
                                o.jsxs("span", {
                                    className: "font-medium shrink-0",
                                    children: [
                                        i.source,
                                        ":"
                                    ]
                                }),
                                o.jsx("span", {
                                    className: "break-all",
                                    children: i.content
                                })
                            ]
                        }, i.id))
                })
            ]
        });
    }
    function $(e, t) {
        return e.inventory[t] ?? 0;
    }
    function L(e, t, s) {
        const n = e.inventory[t] ?? 0;
        return {
            ...e,
            inventory: {
                ...e.inventory,
                [t]: n + s
            }
        };
    }
    function O(e, t, s) {
        const n = e.inventory[t] ?? 0, i = Math.max(0, n - s), l = {
            ...e.inventory
        };
        return i === 0 ? delete l[t] : l[t] = i, {
            ...e,
            inventory: l
        };
    }
    function pe(e, t) {
        return {
            ...e,
            stamina: Math.max(0, Math.min(e.maxStamina, e.stamina + t))
        };
    }
    function ze(e, t) {
        return {
            ...e,
            energy: Math.max(0, Math.min(e.maxEnergy, e.energy + t))
        };
    }
    function fe(e, t) {
        return {
            ...e,
            happiness: Math.max(0, Math.min(oe, e.happiness + t))
        };
    }
    function Qe(e) {
        if ($(e, S.BREAD.name) <= 0) return {
            char: e,
            consumed: !1
        };
        const s = S.BREAD.stamina;
        let n = O(e, S.BREAD.name, 1);
        return n = pe(n, s), {
            char: n,
            consumed: !0
        };
    }
    function et(e) {
        if ($(e, S.JUICE.name) <= 0) return {
            char: e,
            consumed: !1
        };
        const s = S.JUICE.happiness;
        let n = O(e, S.JUICE.name, 1);
        return n = fe(n, s), {
            char: n,
            consumed: !0
        };
    }
    function tt(e, t) {
        let s = {
            ...e
        }, n = "";
        switch(t){
            case "Farm":
                {
                    s = L(s, S.WHEAT.name, 6), n = "获得 6 小麦";
                    break;
                }
            case "Mill":
                {
                    $(s, S.WHEAT.name) >= 20 ? (s = O(s, S.WHEAT.name, 20), s = L(s, S.FLOUR.name, 15), n = "消耗 20 小麦，获得 15 面粉") : n = "小麦不足，无法磨面";
                    break;
                }
            case "Bakery":
                {
                    $(s, S.FLOUR.name) >= 2 ? (s = O(s, S.FLOUR.name, 2), s = L(s, S.BREAD.name, 4), n = "消耗 2 面粉，获得 4 面包") : n = "面粉不足，无法烘焙";
                    break;
                }
            case "Vineyard":
                {
                    s = L(s, S.GRAPE.name, 3), n = "获得 3 葡萄";
                    break;
                }
            case "JuiceFactory":
                {
                    $(s, S.GRAPE.name) >= 4 ? (s = O(s, S.GRAPE.name, 4), s = L(s, S.JUICE.name, 4), n = "消耗 4 葡萄，获得 4 果汁") : n = "葡萄不足，无法榨汁";
                    break;
                }
            default:
                n = "未知工作地点";
        }
        return s = {
            ...s,
            taskName: "Idle",
            taskTarget: null,
            taskTimer: 0,
            status: "空闲"
        }, {
            char: s,
            log: n
        };
    }
    function st(e, t, s, n) {
        let i = pe(e, t);
        return i = ze(i, s), i = fe(i, n), {
            ...i,
            taskName: "Idle",
            taskTarget: null,
            taskTimer: 0,
            status: "空闲"
        };
    }
    function nt() {
        return `todo_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    }
    function it(e, t) {
        return e.inventory[t] ?? 0;
    }
    function ot(e, t, s) {
        let n = 0;
        if (e.deadline) {
            const a = e.deadline - s;
            n = Math.max(0, 1 - a / 100);
        }
        if (e.type === "respond") {
            const a = s - e.createdAt;
            n = Math.max(0, 1 - a / 10);
        }
        let i = .5;
        e.type === "rest" && t.stamina < t.maxStamina * .5 && (i = .9), e.type === "consume" && t.stamina < t.maxStamina * .7 && (i = .7), e.type === "work" && t.money < 50 && (i = .8);
        const l = rt(e, t) ? 1 : 0, r = s - e.createdAt, d = Math.max(0, 1 - r / 50);
        return {
            urgency: n,
            importance: i,
            feasibility: l,
            recency: d
        };
    }
    function at(e, t, s) {
        const n = ot(e, t, s);
        if (n.feasibility === 0) return Number.NEGATIVE_INFINITY;
        let i = e.priority * .3 + n.urgency * 30 + n.importance * 25 + n.recency * 5;
        return e.type === "respond" && (i *= 1.5), i;
    }
    function rt(e, t) {
        const s = e.preconditions;
        if (s.location && t.locationName !== s.location && (!F[s.location] || e.type !== "travel" && e.type !== "explore" && e.type !== "trade" && e.type !== "work" && e.type !== "rest") || s.stamina && t.stamina < s.stamina || s.minEnergy !== void 0 && t.energy / t.maxEnergy < s.minEnergy) return !1;
        if (s.items) {
            for (const n of s.items)if (it(t, n.itemId) < n.count) return !1;
        }
        return !0;
    }
    function he(e, t) {
        const s = e.todoList.filter((i)=>i.status === "pending");
        return s.length === 0 ? null : s.map((i)=>({
                todo: i,
                priority: at(i, e, t)
            })).filter((i)=>i.priority > Number.NEGATIVE_INFINITY).sort((i, l)=>l.priority - i.priority)[0]?.todo ?? null;
    }
    function ge(e, t) {
        return {
            id: nt(),
            type: e.type,
            content: e.content,
            priority: e.priority,
            preconditions: e.preconditions ?? {},
            createdAt: t,
            deadline: e.deadline,
            source: e.source,
            relatedCharacterId: e.relatedCharacterId,
            status: "pending",
            attempts: 0,
            maxAttempts: e.maxAttempts ?? 3
        };
    }
    function P(e, t) {
        const s = e.todoList.map((n)=>n.id === t ? {
                ...n,
                status: "in-progress",
                attempts: n.attempts + 1
            } : n);
        return {
            ...e,
            todoList: s,
            currentTodo: t
        };
    }
    function E(e, t) {
        const s = e.todoList.map((n)=>n.id === t ? {
                ...n,
                status: "completed"
            } : n);
        return {
            ...e,
            todoList: s,
            currentTodo: e.currentTodo === t ? null : e.currentTodo
        };
    }
    function N(e, t) {
        const s = e.todoList.map((n)=>n.id === t ? {
                ...n,
                status: "cancelled"
            } : n);
        return {
            ...e,
            todoList: s,
            currentTodo: e.currentTodo === t ? null : e.currentTodo
        };
    }
    function lt(e) {
        return e.todoList.filter((t)=>t.status === "pending").length;
    }
    function Q(e) {
        return e.currentTodo ? e.todoList.find((t)=>t.id === e.currentTodo) ?? null : null;
    }
    function M(e) {
        return {
            updatedChar: e,
            logs: [],
            historyEntries: [],
            completed: !1,
            requiresAI: !1,
            dialogueBroadcasts: []
        };
    }
    function B(e, t) {
        if (e.currentPath && e.currentPath.length > 1) return console.log(`[MoveTarget] ${e.name} 正在移动中，忽略新目标 ${t}`), e;
        const s = F[t];
        if (s) {
            let l = s.x, r = s.y;
            if (s.displayCharPos) l = s.displayCharPos.x, r = s.displayCharPos.y;
            else if (s.grid) {
                let a = !1;
                for(let u = 0; u < s.grid.length; u++){
                    for(let m = 0; m < s.grid[u].length; m++)if (s.grid[u][m] === "E") {
                        l = s.x + m, r = s.y + u, a = !0;
                        break;
                    }
                    if (a) break;
                }
                if (!a) for(let u = 0; u < s.grid.length; u++){
                    for(let m = 0; m < s.grid[u].length; m++)if (s.grid[u][m] !== 1) {
                        l = s.x + m, r = s.y + u, a = !0;
                        break;
                    }
                    if (a) break;
                }
            } else l = s.x + Math.floor(Math.random() * s.w), r = s.y + Math.floor(Math.random() * s.h);
            return Math.abs(e.gridX - l) + Math.abs(e.gridY - r) <= 1 ? {
                ...e,
                locationName: t
            } : {
                ...e,
                targetLocationName: t,
                pendingMoveTo: {
                    x: l,
                    y: r
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
    function ye(e, t) {
        const s = ae.includes(t);
        return {
            ...e,
            taskTimer: 6,
            taskTarget: t,
            taskName: s ? "Sleeping" : "Working",
            status: s ? "睡觉中..." : "工作中..."
        };
    }
    function ct(e, t) {
        const s = M(e);
        let n = {
            ...e
        };
        const i = t.preconditions.location;
        if (!i) return n = N(n, t.id), s.updatedChar = n, s.historyEntries.push({
            role: "system",
            content: `工作任务「${t.content}」缺少目标地点，已取消。`
        }), s;
        if (n.locationName !== i) return n = B(n, i), n = P(n, t.id), s.historyEntries.push({
            role: "system",
            content: `前往${i}准备工作。`
        }), s.logs.push({
            content: `${e.name} 前往${i}`,
            source: "系统",
            type: "sys"
        }), s.updatedChar = n, s;
        if (F[i]?.isWork) {
            if (i === "Mill" && $(n, S.WHEAT.name) < 20) return n = N(n, t.id), s.updatedChar = n, s.historyEntries.push({
                role: "system",
                content: "小麦不足 20 单位，无法在磨坊工作。"
            }), s;
            if (i === "Bakery" && $(n, S.FLOUR.name) < 2) return n = N(n, t.id), s.updatedChar = n, s.historyEntries.push({
                role: "system",
                content: "面粉不足 2 单位，无法在面包房工作。"
            }), s;
            if (i === "JuiceFactory" && $(n, S.GRAPE.name) < 4) return n = N(n, t.id), s.updatedChar = n, s.historyEntries.push({
                role: "system",
                content: "葡萄不足 4 单位，无法在果汁厂工作。"
            }), s;
            n = ye(n, i), n = P(n, t.id), s.historyEntries.push({
                role: "system",
                content: `开始在${i}工作。`
            }), s.logs.push({
                content: `${e.name} 开始在${i}工作`,
                source: "系统",
                type: "sys"
            });
        }
        return s.updatedChar = n, s;
    }
    function dt(e, t) {
        const s = M(e);
        let n = {
            ...e
        };
        const i = t.preconditions.location || n.homeZoneKey || "Zone_A";
        return n.locationName !== i ? (n = B(n, i), n = P(n, t.id), s.historyEntries.push({
            role: "system",
            content: `前往${i}准备休息。`
        }), s.logs.push({
            content: `${e.name} 前往${i}`,
            source: "系统",
            type: "sys"
        }), s.updatedChar = n, s) : (ae.includes(i) ? (n = ye(n, i), n = P(n, t.id), s.historyEntries.push({
            role: "system",
            content: `开始在${i}休息。`
        }), s.logs.push({
            content: `${e.name} 回家休息`,
            source: "系统",
            type: "sys"
        })) : (n.status = "休息中", n = E(n, t.id), s.completed = !0, s.historyEntries.push({
            role: "system",
            content: `在${i}短暂休息。`
        })), s.updatedChar = n, s);
    }
    function ut(e, t) {
        const s = M(e);
        let n = {
            ...e
        };
        const i = t.preconditions.location || "Park";
        return n.locationName !== i ? (n = B(n, i), n = P(n, t.id), s.historyEntries.push({
            role: "system",
            content: `前往${i}探索。`
        }), s.logs.push({
            content: `${e.name} 前往${i}探索`,
            source: "系统",
            type: "sys"
        }), s.updatedChar = n, s) : (i === "Park" ? (n.happiness = Math.min(100, n.happiness + 1), s.logs.push({
            content: `${e.name} 在公园散步，愉悦值+1`,
            source: "系统",
            type: "sys"
        }), s.historyEntries.push({
            role: "system",
            content: "在公园放松，愉悦值+1。"
        })) : s.historyEntries.push({
            role: "system",
            content: `探索了${i}。`
        }), n = E(n, t.id), n.status = `在${i}闲逛`, s.completed = !0, s.updatedChar = n, s);
    }
    function mt(e, t) {
        const s = M(e);
        let n = {
            ...e
        };
        const i = t.preconditions.location;
        return i ? n.locationName !== i ? (n = B(n, i), n = P(n, t.id), s.historyEntries.push({
            role: "system",
            content: `移动到${i}。`
        }), s.logs.push({
            content: `${e.name} 移动到${i}`,
            source: "系统",
            type: "sys"
        }), s.updatedChar = n, s) : (n = E(n, t.id), n.status = `到达${i}`, s.completed = !0, s.updatedChar = n, s) : (n = N(n, t.id), s.updatedChar = n, s);
    }
    function pt(e, t) {
        const s = M(e);
        let n = {
            ...e
        };
        const i = $(n, S.BREAD.name), l = $(n, S.JUICE.name), r = S.BREAD.stamina, d = S.JUICE.happiness;
        let a = !1;
        return i > 0 && n.stamina < n.maxStamina - r && (n.inventory[S.BREAD.name] = i - 1, n.stamina = Math.min(n.maxStamina, n.stamina + r), a = !0, s.historyEntries.push({
            role: "system",
            content: `吃了面包，体力+${r}。`
        }), s.logs.push({
            content: `${e.name} 吃了面包，体力+${r}`,
            source: "系统",
            type: "sys"
        })), l > 0 && n.happiness < 100 - d && (n.inventory[S.JUICE.name] = l - 1, n.happiness = Math.min(100, n.happiness + d), a = !0, s.historyEntries.push({
            role: "system",
            content: `喝了果汁，愉悦值+${d}。`
        }), s.logs.push({
            content: `${e.name} 喝了果汁，愉悦值+${d}`,
            source: "系统",
            type: "sys"
        })), a ? (n = E(n, t.id), s.completed = !0) : (n = N(n, t.id), s.historyEntries.push({
            role: "system",
            content: "没有可消费的食物或饮料。"
        })), s.updatedChar = n, s;
    }
    function ft(e, t) {
        const s = M(e);
        return s.requiresAI = !0, s.updatedChar = P(e, t.id), s.historyEntries.push({
            role: "system",
            content: `准备进行社交活动: ${t.content}`
        }), s;
    }
    function ht(e, t) {
        const s = M(e);
        return s.requiresAI = !0, s.updatedChar = P(e, t.id), s.historyEntries.push({
            role: "system",
            content: `准备回应对话: ${t.content}`
        }), s;
    }
    function gt(e, t) {
        const s = M(e);
        let n = {
            ...e
        };
        const i = t.preconditions.location || "Shop";
        return i === "Shop" && n.dailyShopVisit ? (n = N(n, t.id), s.updatedChar = n, s.historyEntries.push({
            role: "system",
            content: "今天已经去过商店了。"
        }), s) : i === "SalesStand" && n.dailySalesStandVisit ? (n = N(n, t.id), s.updatedChar = n, s.historyEntries.push({
            role: "system",
            content: "今天已经去过商业大道了。"
        }), s) : (n.locationName !== i && (n = B(n, i)), i === "Shop" ? n.dailyShopVisit = !0 : i === "SalesStand" && (n.dailySalesStandVisit = !0), n = E(n, t.id), n.status = `在${i}交易`, s.completed = !0, s.historyEntries.push({
            role: "system",
            content: `前往${i}进行交易。`
        }), s.updatedChar = n, s);
    }
    function yt(e, t) {
        const s = M(e);
        let n = {
            ...e
        };
        return n = E(n, t.id), n.status = t.content, s.completed = !0, s.historyEntries.push({
            role: "system",
            content: `执行了自定义任务: ${t.content}`
        }), s.updatedChar = n, s;
    }
    function X(e, t, s, n, i) {
        switch(t.type){
            case "work":
                return ct(e, t);
            case "rest":
                return dt(e, t);
            case "explore":
                return ut(e, t);
            case "travel":
                return mt(e, t);
            case "consume":
                return pt(e, t);
            case "social":
                return ft(e, t);
            case "respond":
                return ht(e, t);
            case "trade":
                return gt(e, t);
            case "custom":
                return yt(e, t);
            default:
                return {
                    updatedChar: N(e, t.id),
                    logs: [],
                    historyEntries: [
                        {
                            role: "system",
                            content: `未知任务类型: ${t.type}`
                        }
                    ],
                    completed: !1,
                    requiresAI: !1,
                    dialogueBroadcasts: []
                };
        }
    }
    function xt(e) {
        if (!e.currentTodo) return e;
        const t = e.todoList.find((s)=>s.id === e.currentTodo);
        return !t || t.status !== "in-progress" ? e : t.type === "work" || t.type === "rest" ? E(e, t.id) : e;
    }
    function St() {
        const e = Array(A).fill(0).map(()=>Array(A).fill(0));
        for (const t of Object.values(F))if (t.grid) for(let s = 0; s < t.grid.length; s++)for(let n = 0; n < t.grid[s].length; n++){
            const i = t.grid[s][n], l = t.x + n, r = t.y + s;
            l >= 0 && l < A && r >= 0 && r < A && (i === 1 ? e[r][l] = 1 : e[r][l] = 0);
        }
        else for(let s = 0; s < t.h; s++)for(let n = 0; n < t.w; n++){
            const i = t.x + n, l = t.y + s;
            i >= 0 && i < A && l >= 0 && l < A && (e[l][i] = 1);
        }
        return {
            matrix: e,
            width: A,
            height: A
        };
    }
    function Tt(e, t, s, n, i) {
        if (t < 0 || t >= e.width || s < 0 || s >= e.height || n < 0 || n >= e.width || i < 0 || i >= e.height) return [];
        const l = new V.Grid(e.matrix[0].length, e.matrix.length);
        for(let a = 0; a < e.height; a++)for(let u = 0; u < e.width; u++)e.matrix[a][u] === 1 && l.setWalkableAt(u, a, !1);
        return l.isWalkableAt(t, s) || l.setWalkableAt(t, s, !0), l.isWalkableAt(n, i) || l.setWalkableAt(n, i, !0), new V.AStarFinder({
            allowDiagonal: !0,
            dontCrossCorners: !0
        }).findPath(t, s, n, i, l);
    }
    function vt(e, t, s, n, i) {
        if (!s || s.length < 2) return {
            x: e,
            y: t,
            completed: !0,
            reachedNextTile: !1
        };
        const l = s[1][0], r = s[1][1], d = l - e, a = r - t, u = Math.sqrt(d * d + a * a), m = n * i;
        if (m >= u) return {
            x: l,
            y: r,
            completed: s.length <= 2,
            reachedNextTile: !0
        };
        const c = m / u;
        return {
            x: e + d * c,
            y: t + a * c,
            completed: !1,
            reachedNextTile: !1
        };
    }
    function bt(e) {
        return {
            Working: 1.5,
            Sleeping: 0,
            Idle: .8
        }[e] || 1;
    }
    function jt(e) {
        return {
            Working: 1.3,
            Sleeping: 0,
            Idle: .7
        }[e] || 1;
    }
    function kt(e) {
        return e >= 22 || e <= 6 ? 1.2 : e >= 8 && e <= 18 ? 1 : 1.1;
    }
    function Nt(e, t, s, n, i, l) {
        let r = {
            ...e
        };
        if (r.taskName === "Working" && r.taskTarget) {
            const a = tt(r, r.taskTarget);
            r = a.char, t(`${e.name} 工作完成，${a.log}`, "系统", "sys");
        } else if (r.taskName === "Sleeping") {
            const a = Ie, u = r.home.level, m = 15, c = 12, p = 5, y = .8 + u / 5 * .4, h = Math.round(m * a * y), T = Math.round(c * a * y), g = Math.round(p * a * y);
            r = st(r, h, T, g), t(`${e.name} 睡醒了，体力+${h}，活力+${T}，愉悦+${g}。`, "系统", "sys");
        }
        r = xt(r);
        const d = he(r, l);
        if (d) {
            const a = X(r, d);
            r = a.updatedChar;
            for (const u of a.logs)t(u.content, u.source, u.type);
        }
        return r;
    }
    function Ct(e, t, s) {
        let n = {
            ...e
        };
        if (n.stamina <= 6) {
            const i = Qe(n);
            i.consumed && (n = i.char, t(`${e.name} 吃了面包，体力+${S.BREAD.stamina}`, "系统", "sys"));
        }
        if (n.happiness <= 30) {
            const i = et(n);
            i.consumed && (n = i.char, t(`${e.name} 喝了果汁，愉悦值+${S.JUICE.happiness}`, "系统", "sys"));
        }
        return n = $t(n, t, s), n;
    }
    const wt = 2;
    function $t(e, t, s) {
        if (e.stamina <= 0 && !e.faintedState?.isFainted) {
            const n = {
                isFainted: !0,
                faintedTime: s,
                recoveryTime: s + wt,
                cause: "exhaustion"
            };
            return t(`${e.name} 体力耗尽，晕倒了！`, "系统", "sys"), {
                ...e,
                status: "晕倒",
                thought: "失去意识...",
                faintedState: n
            };
        }
        return e.faintedState?.isFainted && s >= e.faintedState.recoveryTime ? (t(`${e.name} 从晕倒中恢复了，但还很虚弱。`, "系统", "sys"), {
            ...e,
            status: "虚弱",
            thought: "刚刚恢复意识，感觉很虚弱...",
            stamina: Math.max(5, e.stamina),
            faintedState: void 0
        }) : e;
    }
    function It(e, t, s, n, i, l) {
        let r = {
            ...e
        };
        if (r.pendingMoveTo) {
            const a = r.currentPath && r.currentPath.length > 1;
            if (Math.abs(r.gridX - r.pendingMoveTo.x) + Math.abs(r.gridY - r.pendingMoveTo.y) <= 1) r.pendingMoveTo = void 0;
            else if (!a) {
                const c = St(), p = r.visualX !== void 0 ? Math.round(r.visualX) : r.gridX, y = r.visualY !== void 0 ? Math.round(r.visualY) : r.gridY, h = Tt(c, p, y, r.pendingMoveTo.x, r.pendingMoveTo.y);
                h && h.length > 0 ? (r.currentPath = h, r.gridX = p, r.gridY = y, r.visualX === void 0 && (r.visualX = p), r.visualY === void 0 && (r.visualY = y)) : r.currentPath = void 0, r.pendingMoveTo = void 0;
            }
        }
        (!r.currentPath || r.currentPath.length <= 1) && r.targetLocationName && (r.locationName = r.targetLocationName, r.targetLocationName = void 0);
        const d = l > 0 && l % $e === 0;
        if (d && r.taskName !== "Sleeping") {
            const u = .8 + Math.random() * .4, m = bt(r.taskName), c = Math.round(5 * u * m);
            r.stamina = Math.max(0, r.stamina - c);
        }
        if (d && r.taskName !== "Sleeping") {
            const u = .8 + Math.random() * .4, m = jt(r.taskName), c = kt(t.hour), p = Math.round(4 * u * m * c);
            r.energy = Math.max(0, r.energy - p);
        }
        return r.taskTimer > 0 ? (r.taskTimer--, r.taskTimer === 0 && (r = Nt(r, s, n, i, t, l))) : r = Ct(r, s, l), r;
    }
    const w = {
        minInterval: 10,
        maxInterval: 18,
        staminaThreshold: 15,
        happinessThreshold: 25,
        energyThreshold: .25
    };
    function ee(e, t) {
        const s = t - e.lastThinkTick;
        if (e.currentPath && e.currentPath.length > 1 || e.taskName === "Sleeping") return null;
        const n = e.taskTimer > 0;
        if (n && s < w.minInterval * 1.5) return null;
        if (!n && lt(e) === 0 && s >= w.minInterval / 2) return {
            type: "empty-todo"
        };
        const i = w.minInterval + Math.random() * (w.maxInterval - w.minInterval);
        return s >= i ? {
            type: "periodic"
        } : (e.stamina < w.staminaThreshold || e.happiness <= w.happinessThreshold) && s >= w.minInterval * 1.5 ? {
            type: "state-change",
            context: {
                reason: e.stamina < w.staminaThreshold ? "low-stamina" : "low-happiness"
            }
        } : null;
    }
    function At(e, t) {
        const s = e.slice(-6);
        return s.length === 0 ? "(无最近记录)" : s.map((n)=>n.content.startsWith("[内心思考]") ? `• 我想: ${n.content.replace("[内心思考] ", "")}` : n.content.startsWith("[对") || n.content.startsWith("[回应") ? `• 我说: ${n.content}` : n.role === "assistant" ? `• 我: ${n.content}` : `• ${n.content}`).join(`
`);
    }
    function Et(e) {
        return `第${e.day}天 ${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}`;
    }
    function Mt(e) {
        const t = e.filter((s)=>s.status === "pending").slice(0, 5);
        return t.length === 0 ? "(空)" : t.map((s)=>`- [${s.type}] ${s.content} (优先级: ${s.priority})`).join(`
`);
    }
    function Pt() {
        const e = [
            "想想有没有什么新鲜事可以做？",
            "有没有想和谁聊聊天？",
            "今天的目标完成得怎么样了？",
            "周围有什么有趣的人或事吗？",
            "是不是该换个地方逛逛了？",
            "有没有什么技能想要提升？",
            "钱够不够用？需要工作吗？",
            "身体状态怎么样？需要休息吗？"
        ];
        return e[Math.floor(Math.random() * e.length)];
    }
    function Dt(e, t, s, n = []) {
        const i = Mt(e.todoList), l = Pt(), r = n.filter((h)=>h.id !== e.id && Math.abs(h.gridX - e.gridX) + Math.abs(h.gridY - e.gridY) <= 5).map((h)=>`${h.name}(在${h.locationName})`), d = r.length > 0 ? `附近的人: ${r.join(", ")}` : "附近没有人";
        let a = "";
        switch(t.type){
            case "empty-todo":
                a = "你的待办事项列表为空，需要规划接下来的行动。";
                break;
            case "periodic":
                a = `定时思考。${l}`;
                break;
            case "task-complete":
                a = "你刚完成了一项任务，需要规划下一步。";
                break;
            case "state-change":
                a = `你的状态发生了变化: ${t.context?.reason ?? "未知"}`;
                break;
            case "external":
                a = "外部事件触发了你的思考。";
                break;
            default:
                a = l;
        }
        const u = e.locationName !== "Wander" ? `(你在 ${e.locationName}，${d})` : `(你在闲逛中，${d})`, c = e.stamina > e.maxStamina * .8 && e.energy > e.maxEnergy * .8 ? "你现在精力充沛，应该去工作赚钱、社交或探索，而不是继续休息。" : "", p = Object.entries(e.inventory).filter(([, h])=>h > 0).map(([h, T])=>`${h}x${T}`).join(", ") || "空", y = `
**可执行任务示例**:
- {"type":"social","content":"找人聊聊天","priority":60,"preconditions":{}}
- {"type":"social","content":"和邻居打个招呼","priority":55,"preconditions":{}}
- {"type":"work","content":"去农场工作","priority":60,"preconditions":{"location":"Farm"}}
- {"type":"work","content":"去磨坊磨面粉","priority":60,"preconditions":{"location":"Mill"}}
- {"type":"rest","content":"回家睡觉","priority":70,"preconditions":{"location":"${e.homeZoneKey || "Zone_A"}"}}
- {"type":"travel","content":"去公园","priority":40,"preconditions":{"location":"Park"}}
- {"type":"explore","content":"在公园散步","priority":40,"preconditions":{"location":"Park"}}
- {"type":"trade","content":"去商店交易","priority":50,"preconditions":{"location":"Shop"}}

**重要**: social类型任务不需要location前置条件，会自动寻找附近的人聊天。
**注意**: 如果你正在工作(${e.taskName})，你只能发起 social 任务，不能离开当前地点。`;
        return `你是 ${e.name}，${e.personality}。

## 重要背景
你因为某种神秘原因来到了这个全新的小镇。这里不是你原来熟悉的世界——没有你以前的工作室、住所或熟悉的地方。你需要在这个小镇重新开始生活，利用这里现有的设施（农场、磨坊、面包房等）来工作赚钱、维持生计。虽然你保留着原来的性格和记忆，但你必须适应这个新环境。

## 这个小镇只有以下地点
- 工作地点: Farm(农场), Vineyard(葡萄园), Mill(磨坊), Bakery(面包房), JuiceFactory(果汁厂)
- 住宅区: Zone_A(救济房), Zone_B(公寓), Zone_C(套房), Zone_D(豪华套房), Zone_E(别墅)
- 其他: Shop(商店), Park(公园), SalesStand(商业大道)
**注意**: 这里没有画室、咖啡馆、图书馆等其他地方。你只能使用上面列出的地点。

## 当前状态
- 体力: ${e.stamina}/${e.maxStamina} ${e.stamina < 20 ? "⚠️需要休息" : ""}
- 活力: ${e.energy}/${e.maxEnergy} ${e.energy < e.maxEnergy * .3 ? "⚠️需要睡觉" : ""}
- 愉悦: ${e.happiness}/${oe} ${e.happiness < 30 ? "⚠️心情差，找人聊天" : ""}
- 金钱: $${e.money} ${e.money < 30 ? "⚠️缺钱，需要工作" : ""}
- 库存: ${p}
- 位置: ${e.locationName} ${u}
- 时间: ${Et(s)}
- 你的家: ${e.homeZoneKey || "Zone_A"}

${c ? `## 💡状态提示
${c}
` : ""}

## 触发原因
${a}

## 待办事项
${i}

## 最近经历
${At(e.history)}

${y}

## 工作地点说明
- Farm(农场): 产出小麦，无需原料
- Vineyard(葡萄园): 产出葡萄，无需原料
- Mill(磨坊): 需要20小麦，产出面粉
- Bakery(面包房): 需要2面粉，产出面包
- JuiceFactory(果汁厂): 需要4葡萄，产出果汁

返回一个JSON（必须包含至少一个任务）:
{
  "innerThought": "简短想法(10字内)",
  "stateAssessment": "状态(5字内)",
  "addTodos": [
    {"type":"类型","content":"描述","priority":50,"preconditions":{"location":"地点Key"}}
  ],
  "adjustPriorities": [],
  "cancelTodos": []
}

注意: type必须是 work/rest/social/travel/explore/trade/consume 之一，location必须是上面列出的英文Key`;
    }
    function Rt(e) {
        if (!e) return;
        let t = e.trim().replace(/^[!！?？\s]+|[!！?？\s]+$/g, "");
        if (W.includes(t)) return t;
        const s = t.replace(/\s+/g, "_");
        if (W.includes(s)) return s;
        const n = t.toUpperCase().replace(/\s+/g, "_"), i = W.find((r)=>r.toUpperCase() === n);
        if (i) return i;
        for (const r of W)if (t.toUpperCase().includes(r.toUpperCase())) return r;
        const l = {
            HOTEL: "Zone_A",
            HOME: "Zone_A",
            HOUSE: "Zone_A",
            RESTAURANT: "Bakery",
            CAFE: "JuiceFactory",
            MARKET: "Shop",
            STREET: "SalesStand",
            CENTER: "SalesStand"
        };
        if (l[n]) return l[n];
    }
    function Lt(e) {
        try {
            const t = e.match(/\{[\s\S]*\}/);
            if (!t) return null;
            const s = JSON.parse(t[0]);
            if (!s || !s.innerThought || !s.stateAssessment) return null;
            const n = Array.isArray(s.addTodos) ? s.addTodos.map((i)=>{
                const l = i.preconditions;
                return l?.location && (l.location = Rt(l.location)), i;
            }) : [];
            return {
                innerThought: String(s.innerThought),
                stateAssessment: String(s.stateAssessment),
                addTodos: n,
                adjustPriorities: Array.isArray(s.adjustPriorities) ? s.adjustPriorities : [],
                cancelTodos: Array.isArray(s.cancelTodos) ? s.cancelTodos : []
            };
        } catch  {
            return null;
        }
    }
    function Ot(e, t, s) {
        return e.some((n)=>n.status === "pending" && n.type === t && (s ? n.preconditions.location === s : !0));
    }
    function _t(e, t, s) {
        const n = [
            ...e.todoList
        ];
        for (const d of t.addTodos){
            const a = {
                ...d.preconditions
            };
            if (a.location === e.locationName && d.type === "travel") {
                console.log(`[ThinkingSystem] 跳过无效的移动任务: 已经在 ${e.locationName}`);
                continue;
            }
            if (d.type === "rest" && !a.location && (a.location = e.homeZoneKey || "Zone_A"), d.type === "social" && delete a.location, Ot(n, d.type, a.location)) {
                console.log(`[ThinkingSystem] 跳过重复任务: ${d.type} at ${a.location || "any"}`);
                continue;
            }
            if (n.filter((c)=>c.status === "pending").length >= 5) {
                console.log(`[ThinkingSystem] 待办事项已满，跳过新任务: ${d.content}`);
                continue;
            }
            const m = ge({
                type: d.type,
                content: d.content,
                priority: d.priority,
                preconditions: a,
                deadline: d.deadline,
                source: "thinking",
                relatedCharacterId: d.relatedCharacterId
            }, s);
            n.push(m);
        }
        for (const d of t.adjustPriorities){
            const a = n.findIndex((u)=>u.id === d.todoId);
            a >= 0 && (n[a] = {
                ...n[a],
                priority: d.newPriority
            });
        }
        for (const d of t.cancelTodos){
            const a = n.findIndex((u)=>u.id === d);
            a >= 0 && (n[a] = {
                ...n[a],
                status: "cancelled"
            });
        }
        const l = e.history.filter((d)=>d.content.startsWith("[内心思考]")).slice(-3).map((d)=>d.content.replace("[内心思考] ", "")).some((d)=>d === t.innerThought || d.includes(t.innerThought.slice(0, 10)));
        let r = [
            ...e.history
        ];
        return l || r.push({
            role: "assistant",
            content: `[内心思考] ${t.innerThought}`
        }), r.length > 50 && (r = r.slice(-40)), {
            ...e,
            todoList: n,
            history: r,
            lastThinkTick: s,
            thought: t.innerThought,
            currentStrategy: t.stateAssessment
        };
    }
    function U(e) {
        const t = e.inventory, s = t[S.WHEAT.name] ?? 0, n = t[S.FLOUR.name] ?? 0, i = t[S.GRAPE.name] ?? 0;
        return s >= 20 ? {
            location: "Mill",
            content: "去磨坊把小麦磨成面粉"
        } : n >= 2 ? {
            location: "Bakery",
            content: "去面包房烘焙面包"
        } : i >= 4 ? {
            location: "JuiceFactory",
            content: "去果汁厂榨果汁"
        } : Math.random() < .6 ? {
            location: "Farm",
            content: "去农场种小麦"
        } : {
            location: "Vineyard",
            content: "去葡萄园采葡萄"
        };
    }
    function te(e) {
        const t = [];
        if (e.energy / e.maxEnergy <= w.energyThreshold) return t.push({
            type: "rest",
            content: "太累了，需要回家休息",
            priority: 95,
            preconditions: {}
        }), {
            innerThought: "累死了，必须休息一下...",
            stateAssessment: "活力不足",
            addTodos: t,
            adjustPriorities: [],
            cancelTodos: []
        };
        if (e.stamina < e.maxStamina * .3) return t.push({
            type: "rest",
            content: "回家休息恢复体力",
            priority: 90,
            preconditions: {}
        }), {
            innerThought: "体力不支了，该休息了...",
            stateAssessment: "体力不足",
            addTodos: t,
            adjustPriorities: [],
            cancelTodos: []
        };
        if (e.happiness <= 30) return Math.random() < .5 ? (t.push({
            type: "social",
            content: "找个人聊聊天",
            priority: 75,
            preconditions: {}
        }), {
            innerThought: "心情不太好，找人聊聊吧...",
            stateAssessment: "心情低落",
            addTodos: t,
            adjustPriorities: [],
            cancelTodos: []
        }) : (t.push({
            type: "explore",
            content: "去公园放松心情",
            priority: 75,
            preconditions: {
                location: "Park"
            }
        }), {
            innerThought: "心情不太好，去公园走走吧...",
            stateAssessment: "心情低落",
            addTodos: t,
            adjustPriorities: [],
            cancelTodos: []
        });
        if (e.money < 50) {
            const l = U(e);
            return t.push({
                type: "work",
                content: l.content,
                priority: 70,
                preconditions: {
                    stamina: 20,
                    location: l.location
                }
            }), {
                innerThought: `钱不够了，${l.content}...`,
                stateAssessment: "需要赚钱",
                addTodos: t,
                adjustPriorities: [],
                cancelTodos: []
            };
        }
        const n = [
            {
                type: "social",
                content: "找个人聊聊天",
                priority: 60,
                preconditions: {}
            },
            {
                type: "social",
                content: "和邻居打个招呼",
                priority: 55,
                preconditions: {}
            },
            {
                type: "social",
                content: "看看有没有人可以聊天",
                priority: 50,
                preconditions: {}
            },
            {
                type: "explore",
                content: "去公园散步放松",
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
        return t.push(i), {
            innerThought: "让我想想接下来该做什么...",
            stateAssessment: "状态正常",
            addTodos: t,
            adjustPriorities: [],
            cancelTodos: []
        };
    }
    const xe = {
        baseResponseProbability: .95,
        turnDecayRate: .92,
        dailyFatigueThreshold: 50,
        waitDecayTicks: 15,
        minResponseProbability: .3,
        maxResponseProbability: .98,
        responseTaskPriority: 90
    };
    function Ft(e, t, s) {
        const n = xe, i = n.baseResponseProbability, l = Math.pow(n.turnDecayRate, Math.max(0, t.turns - 1)), r = Math.max(.3, 1 - e.conversationState.totalTurnsToday / n.dailyFatigueThreshold), d = s - t.lastTurnTick, a = Math.max(.2, 1 - d / n.waitDecayTicks), u = t.sentiment * .1, m = i * l * r * a + u;
        return Math.max(n.minResponseProbability, Math.min(n.maxResponseProbability, m));
    }
    function Bt(e, t, s, n, i) {
        const l = e.conversationState.activeConversations[t], r = l ? {
            ...l,
            turns: l.turns + 1,
            lastTurnTick: i
        } : {
            partnerId: t,
            turns: 1,
            lastTurnTick: i,
            sentiment: 0
        }, d = {
            ...e.conversationState.activeConversations,
            [t]: r
        }, a = [
            ...e.history,
            {
                role: "user",
                content: `[${s}说] ${n}`
            }
        ], u = Ft(e, r, i), m = Math.random() < u;
        console.log(`[DialogueSystem] ${e.name} 收到 ${s} 的对话`), console.log(`[DialogueSystem] 响应概率: ${(u * 100).toFixed(1)}%, 决定${m ? "响应" : "不响应"}`);
        let c = {
            ...e,
            history: a,
            conversationState: {
                activeConversations: d,
                totalTurnsToday: e.conversationState.totalTurnsToday + 1
            }
        };
        if (m) {
            const p = ge({
                type: "respond",
                content: `回复 ${s} 的话`,
                priority: xe.responseTaskPriority,
                source: "external",
                relatedCharacterId: t,
                maxAttempts: 3
            }, i);
            c = {
                ...c,
                todoList: [
                    ...c.todoList,
                    p
                ]
            }, console.log(`[DialogueSystem] 为 ${e.name} 创建了响应任务，目标角色ID: ${t}`);
        }
        return {
            updatedChar: c,
            shouldRespond: m,
            responseProbability: u
        };
    }
    function Wt(e, t) {
        const { [t]: s, ...n } = e.conversationState.activeConversations;
        return {
            ...e,
            conversationState: {
                ...e.conversationState,
                activeConversations: n
            }
        };
    }
    function Yt(e, t, s, n) {
        const l = e.conversationState.activeConversations[t]?.turns ?? 1, r = e.history.filter((a)=>a.content.includes(s) || a.role === "assistant").slice(-6).map((a)=>a.role === "assistant" ? `[我] ${a.content}` : a.content).join(`
`), d = n ? "你想和对方聊聊。" : "对方刚刚对你说话了。";
        return `你是 ${e.name}，${e.personality}。

## 对话上下文
${d}
这是今天与 ${s} 的第 ${l} 轮对话。

## 最近的对话
${r || "(这是第一次对话)"}

## 当前状态
- 体力: ${e.stamina}/${e.maxStamina}
- 心情: ${e.happiness}/100
- 当前活动: ${e.status}

## 任务
${n ? "请主动开启一个话题或打招呼。" : "请自然地回应对方，可以继续话题、转移话题或礼貌地结束对话。"}

返回 JSON:
{
  "dialogue": "你说的话 (30字以内)",
  "innerThought": "你的内心想法 (20字以内，可选)",
  "endConversation": false
}

注意：如果你想结束对话，将 endConversation 设为 true，并在 dialogue 中说一句结束语。`;
    }
    function Ut(e, t) {
        const s = t.filter((i)=>i.id !== e.id && i.aiEnabled && i.taskName !== "Sleeping" && !i.faintedState?.isFainted);
        if (s.length === 0) return null;
        const n = s.filter((i)=>i.locationName === e.locationName);
        return n.length > 0 ? n[Math.floor(Math.random() * n.length)] : s[Math.floor(Math.random() * s.length)];
    }
    async function Xt(e, t, s, n, i) {
        try {
            const l = Dt(e, t, s, n);
            return await i([
                {
                    role: "system",
                    content: "你是一个生活在小镇中的角色。请根据当前状态进行思考，并以 JSON 格式返回你的决策。"
                },
                {
                    role: "user",
                    content: l
                }
            ]);
        } catch (l) {
            return console.error("[AI-API] 思考调用失败:", l), null;
        }
    }
    async function Ht(e, t, s, n, i) {
        try {
            const l = Yt(e, t, s, n), r = [
                {
                    role: "system",
                    content: `你是 ${e.name}，正在与 ${s} 对话。请以 JSON 格式返回你的对话内容。`
                },
                {
                    role: "user",
                    content: l
                }
            ], d = await i(r);
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
            } catch  {
                return {
                    dialogue: d.slice(0, 50),
                    endConversation: !1
                };
            }
            return null;
        } catch (l) {
            return console.error("[AI-API] 对话调用失败:", l), null;
        }
    }
    async function Jt(e, t, s) {
        try {
            const n = e.history.slice(-10).map((d)=>`[${d.role === "assistant" ? "我" : "系统/他人"}] ${d.content}`).join(`
`), i = `你是 ${e.name}，${e.personality}。

## 今天是第 ${t.day} 天

## 今日状态
- 金钱: $${e.money}
- 体力: ${e.stamina}/${e.maxStamina}
- 活力: ${e.energy}/${e.maxEnergy}
- 愉悦: ${e.happiness}/100
- 住房: ${e.home.name}

## 库存
${Object.entries(e.inventory).map(([d, a])=>`- ${d}: ${a}`).join(`
`) || "(空)"}

## 今日发生的事
${n || "(无记录)"}

## 长期目标
${e.longTermGoal}

## 任务
请写一篇简短的日记，回顾今天发生的事，以及一句感悟或智慧。

返回 JSON:
{
  "diary": "今日日记内容 (100字以内)",
  "wisdom": "一句感悟或智慧 (30字以内)"
}`, r = await s([
                {
                    role: "system",
                    content: "你是一个写日记的角色。请以 JSON 格式返回日记内容。"
                },
                {
                    role: "user",
                    content: i
                }
            ]);
            try {
                const d = r.match(/\{[\s\S]*\}/);
                if (d) {
                    const a = JSON.parse(d[0]);
                    return {
                        diary: String(a.diary || ""),
                        wisdom: String(a.wisdom || "")
                    };
                }
            } catch  {
                return {
                    diary: r.slice(0, 100),
                    wisdom: "今天也是平凡的一天。"
                };
            }
            return null;
        } catch (n) {
            return console.error("[AI-API] 日记调用失败:", n), null;
        }
    }
    function Gt(e) {
        return e.hour === Ae && e.minute >= K && e.minute < K + ie;
    }
    function Kt() {
        const { callLLMStream: e } = Fe(), t = x.useRef({
            pendingThinking: new Set,
            pendingDialogue: new Set
        }), s = x.useCallback(()=>f.currentSession, []), n = x.useCallback(async (c, p)=>{
            let y = "";
            return await e(c.map((h)=>({
                    role: h.role,
                    content: h.content,
                    id: Math.random().toString(36).substring(7)
                })), (h, T)=>{
                y = T, p && f.updateCharacterState(p, {
                    thought: `Thinking... ${T.slice(-50)}`
                });
            }), y;
        }, [
            e
        ]), i = x.useCallback(async (c, p)=>{
            const y = await Jt(c, p, n);
            y && (f.updateCharacterState(c.id, {
                dailyEntry: y.diary,
                dailyWisdom: y.wisdom,
                wroteDiaryToday: !0
            }), f.addLog(`${c.name} 写完了今日日记`, "系统", "sys"));
        }, [
            n
        ]), l = x.useCallback(async (c, p, y)=>{
            const h = ee(c, y);
            if (!h) return;
            console.log(`[ThinkingSystem] ${c.name} 触发思考: ${h.type}`);
            const T = Object.values(f.currentSession?.modeState.characterStates || {}), g = await Xt(c, h, p, T, (j)=>n(j, c.id));
            let v;
            g ? v = Lt(g) || te(c) : v = te(c);
            const b = _t(c, v, y);
            if (f.setCharacterState(c.id, b), v.addTodos.length > 0) {
                const j = v.addTodos.map((k)=>k.content).join("、");
                f.addLog(`${c.name} 计划: ${j}`, "系统", "sys");
            }
        }, [
            n
        ]), r = x.useCallback(async (c, p, y, h)=>{
            let T = p.relatedCharacterId, g = null;
            if (p.type === "social" && !T) {
                if (g = Ut(c, y), !g) {
                    f.updateCharacterState(c.id, N(c, p.id)), f.addLog(`${c.name} 想找人聊天，但周围没有人`, "系统", "sys");
                    return;
                }
                T = g.id, console.log(`[AIDecision] ${c.name} 主动找 ${g.name} 聊天`);
            }
            if (!T) {
                f.updateCharacterState(c.id, N(c, p.id));
                return;
            }
            if (g || (g = y.find((j)=>j.id === T)), !g) {
                f.updateCharacterState(c.id, N(c, p.id));
                return;
            }
            const v = p.type === "social", b = await Ht(c, T, g.name, v, n);
            if (b && b.dialogue) {
                const j = v ? "对" : "回应";
                f.addLog(`${c.name} ${j} ${g.name} 说: "${b.dialogue}"`, c.name, "chat");
                const k = [
                    ...c.history,
                    {
                        role: "assistant",
                        content: `[${j}${g.name}说] ${b.dialogue}`
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
                if (C = E(C, p.id), b.endConversation && (C = Wt(C, T)), f.setCharacterState(c.id, C), g.aiEnabled) {
                    const D = Bt(g, c.id, c.name, b.dialogue, h);
                    f.setCharacterState(T, D.updatedChar), D.shouldRespond && console.log(`[AIDecision] ${g.name} 决定回应 ${c.name} 的对话`);
                }
            } else f.updateCharacterState(c.id, N(c, p.id)), f.addLog(`${c.name} 似乎不知道该对 ${g.name} 说什么...`, "系统", "sys");
        }, [
            n
        ]), d = x.useCallback(async (c, p, y, h, T)=>{
            if (c.currentPath && c.currentPath.length > 1 || c.taskTimer > 0) return;
            const g = Q(c);
            if (g && g.status === "in-progress") {
                if (g.type === "respond" || g.type === "social") {
                    await r(c, g, y, T);
                    return;
                }
                if (g.type === "work" || g.type === "rest") {
                    const j = X(c, g);
                    f.updateCharacterState(c.id, {
                        ...j.updatedChar,
                        history: [
                            ...c.history,
                            ...j.historyEntries
                        ]
                    });
                    for (const k of j.logs)f.addLog(k.content, k.source, k.type);
                    return;
                }
                f.updateCharacterState(c.id, E(c, g.id));
                return;
            }
            const v = he(c, T);
            if (!v) return;
            const b = X(c, v);
            f.updateCharacterState(c.id, {
                ...b.updatedChar,
                history: [
                    ...c.history,
                    ...b.historyEntries
                ]
            });
            for (const j of b.logs)f.addLog(j.content, j.source, j.type);
        }, [
            r
        ]), a = x.useCallback((c)=>c.status === "晕倒" || c.faintedState?.isFainted ? "fainted" : c.status.includes("睡觉") || c.status.includes("休息中") ? "sleeping" : c.taskTimer > 0 ? "working" : "idle", []), u = x.useCallback(async (c)=>{
            const p = s();
            if (!p || !p.modeConfig.settings.aiEnabled) return !1;
            const h = p.modeState.characterStates[c];
            if (!(h && h.aiEnabled) || t.current.pendingThinking.has(c)) return !1;
            const T = a(h);
            if (T === "sleeping" || T === "fainted") return !1;
            let g = !1;
            try {
                const v = p.modeState.gameTime, b = p.modeState.tickCount;
                if (Gt(v) && !h.wroteDiaryToday) return await i(h, v), !0;
                if (ee(h, b) !== null) {
                    t.current.pendingThinking.add(c);
                    try {
                        await l(h, v, b), g = !0;
                    } finally{
                        t.current.pendingThinking.delete(c);
                    }
                }
                const k = s(), C = k?.modeState.characterStates[c], D = Object.values(k?.modeState.characterStates || {});
                if (C) {
                    const Y = Q(C), Se = Y && (Y.type === "social" || Y.type === "respond");
                    await d(C, v, D, k?.modeState.salesStand || [], b), Se && (g = !0);
                }
            } catch (v) {
                console.error(`AI processing error for ${h.name}:`, v), f.updateCharacterState(h.id, {
                    status: "AI Error"
                });
            }
            return g;
        }, [
            s,
            a,
            i,
            l,
            d
        ]);
        return {
            processAllAI: x.useCallback(async ()=>{
                const c = s();
                if (!(c && c.modeConfig.settings.aiEnabled)) return !1;
                const p = Object.values(c.modeState.characterStates), y = 3;
                let h = !1;
                const T = [];
                for(let g = 0; g < p.length; g += y)T.push(p.slice(g, g + y));
                return await T.reduce(async (g, v)=>{
                    await g;
                    const b = v.map((k)=>u(k.id));
                    (await Promise.all(b)).some((k)=>k) && (h = !0);
                }, Promise.resolve()), h;
            }, [
                s,
                u
            ])
        };
    }
    function Zt(e, t) {
        f.addLog(`第 ${e} 天结束，新的一天开始了！`, "系统", "sys");
        for (const s of Object.keys(t.modeState.characterStates)){
            const n = t.modeState.characterStates[s];
            n.wroteDiaryToday = !1, n.dailyEntry = null, n.dailyWisdom = null, n.dailyShopVisit = !1, n.dailySalesStandVisit = !1, n.conversationState.totalTurnsToday = 0;
        }
    }
    function Vt() {
        const e = se(f), t = x.useRef(null), s = x.useRef(!1), { processAllAI: n } = Kt(), i = x.useRef(n);
        i.current = n;
        const l = e.currentSession?.modeState.isRunning ?? !1, r = x.useCallback(async ()=>{
            if (!f.currentSession) return !1;
            const a = f.currentSession, { dayChanged: u, oldDay: m } = f.advanceTime();
            u && Zt(m, a);
            const c = Object.keys(a.modeState.characterStates), p = Object.values(a.modeState.characterStates), y = a.modeState.salesStand, h = a.modeState.gameTime, T = a.modeState.tickCount;
            for (const v of c){
                const b = a.modeState.characterStates[v], j = It(b, h, (k, C, D)=>f.addLog(k, C, D), p, y, T);
                f.setCharacterState(v, j);
            }
            f.startAIProcessing(c);
            let g = !1;
            try {
                g = await i.current();
            } finally{
                f.finishAIProcessing();
            }
            return a.modeState.tickCount % 10 === 0 && await f.updateSessionInDB(), g;
        }, []), d = x.useCallback(async ()=>{
            if (s.current) {
                const m = f.currentSession?.modeConfig.settings;
                if (m?.waitForAICompletion) {
                    f.addPendingTick();
                    const c = m.maxAIWaitTicks ?? 3;
                    f.aiProcessingState.ticksPending >= c && console.warn("[SmallTown] AI 处理时间过长，已累积", c, "个 tick"), f.isAIStuck() && (console.error("[SmallTown] AI 处理超时，可能卡住了"), f.addLog("AI 处理超时，请检查网络连接", "系统", "sys"));
                }
                return;
            }
            s.current = !0;
            let a = !1;
            try {
                a = await r();
                const u = f.consumePendingTicks();
                if (u > 0) {
                    console.log(`[SmallTown] 处理累积的 ${u} 个 tick`);
                    for(let m = 0; m < u; m++)await r() && (a = !0);
                }
            } catch (u) {
                console.error("[SmallTown] Tick error:", u);
            } finally{
                s.current = !1;
            }
            if (t.current) {
                const m = f.currentSession?.modeConfig.settings, c = m?.fastTickInterval ?? 500, p = m?.normalTickInterval ?? 5e3, y = a ? p : c;
                t.current = setTimeout(d, y);
            }
        }, [
            r
        ]);
        return x.useEffect(()=>{
            if (l) {
                if (t.current) return;
                console.log("[SmallTown] Game loop started"), t.current = setTimeout(d, 0);
            } else t.current && (clearTimeout(t.current), t.current = null, console.log("[SmallTown] Game loop stopped"));
            return ()=>{
                t.current && (clearTimeout(t.current), t.current = null);
            };
        }, [
            l,
            d
        ]), {
            isRunning: l,
            aiProcessingState: e.aiProcessingState
        };
    }
    function qt() {
        const e = x.useRef(void 0), t = x.useRef(void 0), s = x.useCallback((n)=>{
            if (t.current !== void 0) {
                const i = (n - t.current) / 1e3, l = f.currentSession;
                if (l?.modeState.isRunning) {
                    const r = l.modeState.characterStates;
                    for (const d of Object.keys(r)){
                        const a = r[d];
                        if (a.currentPath && a.currentPath.length > 1) {
                            (a.visualX === void 0 || Number.isNaN(a.visualX)) && (a.visualX = a.gridX), (a.visualY === void 0 || Number.isNaN(a.visualY)) && (a.visualY = a.gridY);
                            const m = vt(a.visualX, a.visualY, a.currentPath, 4, i);
                            !Number.isNaN(m.x) && !Number.isNaN(m.y) && (a.visualX = m.x, a.visualY = m.y), m.reachedNextTile && (a.currentPath.shift(), a.gridX = Math.round(m.x), a.gridY = Math.round(m.y)), m.completed && (a.currentPath = void 0, a.visualX = a.gridX, a.visualY = a.gridY, a.targetLocationName && (a.locationName = a.targetLocationName, a.targetLocationName = void 0));
                        } else if ((a.visualX === void 0 || Number.isNaN(a.visualX)) && (a.visualX = a.gridX), (a.visualY === void 0 || Number.isNaN(a.visualY)) && (a.visualY = a.gridY), Math.abs(a.visualX - a.gridX) + Math.abs(a.visualY - a.gridY) < .05) a.visualX = a.gridX, a.visualY = a.gridY;
                        else {
                            const m = 10 * i;
                            a.visualX += (a.gridX - a.visualX) * m, a.visualY += (a.gridY - a.visualY) * m;
                        }
                    }
                }
            }
            t.current = n, e.current = requestAnimationFrame(s);
        }, []);
        x.useEffect(()=>(e.current = requestAnimationFrame(s), ()=>{
                e.current && cancelAnimationFrame(e.current);
            }), [
            s
        ]);
    }
    function zt({ open: e, onOpenChange: t, settings: s, onSave: n }) {
        const [i, l] = x.useState(s);
        x.useEffect(()=>{
            e && l(s);
        }, [
            e,
            s
        ]);
        const r = ()=>{
            n(i), t(!1);
        };
        return o.jsx(le, {
            open: e,
            onOpenChange: t,
            children: o.jsxs(ce, {
                className: "sm:max-w-[425px]",
                children: [
                    o.jsxs(de, {
                        children: [
                            o.jsx(ue, {
                                children: "小镇设置"
                            }),
                            o.jsx(me, {
                                children: "调整游戏运行参数和 AI 行为。"
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
                                                children: "启用 AI 决策"
                                            }),
                                            o.jsx("span", {
                                                className: "font-normal text-xs text-muted-foreground",
                                                children: "关闭后角色将停止自主思考"
                                            })
                                        ]
                                    }),
                                    o.jsx(q, {
                                        id: "ai-enabled",
                                        checked: i.aiEnabled,
                                        onCheckedChange: (d)=>l((a)=>({
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
                                                children: "等待 AI 完成 (强一致性)"
                                            }),
                                            o.jsx("span", {
                                                className: "font-normal text-xs text-muted-foreground",
                                                children: "Tick 只有在 AI 思考完后才继续"
                                            })
                                        ]
                                    }),
                                    o.jsx(q, {
                                        id: "wait-ai",
                                        checked: i.waitForAICompletion,
                                        onCheckedChange: (d)=>l((a)=>({
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
                                            "快速 Tick (无 AI 时) - ",
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
                                        onValueChange: ([d])=>l((a)=>({
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
                                            "正常 Tick (有 AI 时) - ",
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
                                        onValueChange: ([d])=>l((a)=>({
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
                                                children: "工作时长 (Tick)"
                                            }),
                                            o.jsx(z, {
                                                type: "number",
                                                value: i.workingInterval,
                                                onChange: (d)=>l((a)=>({
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
                                                children: "空闲时长 (Tick)"
                                            }),
                                            o.jsx(z, {
                                                type: "number",
                                                value: i.idleInterval,
                                                onChange: (d)=>l((a)=>({
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
                    o.jsxs(Be, {
                        children: [
                            o.jsx(_, {
                                variant: "outline",
                                onClick: ()=>t(!1),
                                children: "取消"
                            }),
                            o.jsx(_, {
                                onClick: r,
                                children: "保存更改"
                            })
                        ]
                    })
                ]
            })
        });
    }
    function Qt({ className: e, children: t, ...s }) {
        return o.jsx("div", {
            "data-slot": "scroll-area",
            className: We("overflow-x-auto overflow-y-auto", e),
            ...s,
            children: t
        });
    }
    function es({ open: e, onOpenChange: t, character: s }) {
        if (!s) return null;
        const n = [
            ...s.dailyLog
        ].sort((i, l)=>l.day - i.day);
        return o.jsx(le, {
            open: e,
            onOpenChange: t,
            children: o.jsxs(ce, {
                className: "sm:max-w-[600px] max-h-[80vh] flex flex-col",
                children: [
                    o.jsxs(de, {
                        children: [
                            o.jsxs(ue, {
                                className: "flex items-center gap-2",
                                children: [
                                    o.jsx("div", {
                                        className: "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold",
                                        style: {
                                            backgroundColor: s.color
                                        },
                                        children: s.name.charAt(0)
                                    }),
                                    s.name,
                                    " 的日记本"
                                ]
                            }),
                            o.jsx(me, {
                                children: "记录了每天发生的事情和感悟。"
                            })
                        ]
                    }),
                    o.jsx(Qt, {
                        className: "flex-1 pr-4 -mr-4",
                        children: o.jsx("div", {
                            className: "space-y-6 py-4",
                            children: n.length === 0 ? o.jsx("div", {
                                className: "text-center text-muted-foreground py-10",
                                children: "还没有写过日记..."
                            }) : n.map((i)=>o.jsxs("div", {
                                    className: "border rounded-lg p-4 bg-card/50 space-y-3",
                                    children: [
                                        o.jsxs("div", {
                                            className: "flex items-center justify-between border-b pb-2",
                                            children: [
                                                o.jsxs("h3", {
                                                    className: "font-semibold",
                                                    children: [
                                                        "第 ",
                                                        i.day,
                                                        " 天"
                                                    ]
                                                }),
                                                o.jsxs("span", {
                                                    className: "text-xs text-muted-foreground bg-muted px-2 py-1 rounded",
                                                    children: [
                                                        "策略: ",
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
                                                    children: "今日记事"
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
                                                    children: "每日感悟"
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
                                                        "💰 $",
                                                        i.endStatus.money
                                                    ]
                                                }),
                                                o.jsxs("span", {
                                                    children: [
                                                        "⚡️ ",
                                                        i.endStatus.stamina
                                                    ]
                                                }),
                                                o.jsxs("span", {
                                                    children: [
                                                        "😄 ",
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
    function ts({ sessionId: e }) {
        const t = se(f), [s, n] = x.useState(null), [i, l] = x.useState(!1), [r, d] = x.useState(!1), a = x.useCallback((h)=>{
            f.currentSession && (f.currentSession.modeConfig.settings = h, f.updateSessionInDB());
        }, []), { isRunning: u } = Vt();
        qt();
        const m = x.useCallback((h)=>{
            n(h);
        }, []), c = t.currentSession, p = c ? Object.values(c.modeState.characterStates) : [];
        if (x.useEffect(()=>{
            !s && p.length > 0 && n(p[0].id);
        }, [
            p,
            s
        ]), !c) return o.jsx("div", {
            className: "flex items-center justify-center h-full",
            children: o.jsx("p", {
                className: "text-muted-foreground",
                children: "加载中..."
            })
        });
        const y = s ? c.modeState.characterStates[s] : null;
        return o.jsxs("div", {
            className: "flex flex-col h-full bg-background",
            children: [
                o.jsx(Xe, {
                    gameTime: c.modeState.gameTime,
                    isRunning: u,
                    onToggle: ()=>f.toggle(),
                    onSettings: ()=>l(!0)
                }),
                o.jsxs("div", {
                    className: "flex-1 flex overflow-hidden",
                    children: [
                        o.jsxs("div", {
                            className: "flex-1 flex flex-col p-4 gap-2 overflow-hidden",
                            children: [
                                o.jsx("div", {
                                    className: "flex-1 overflow-auto",
                                    children: o.jsx(Ke, {
                                        characterStates: p,
                                        selectedCharacterId: s,
                                        onSelectCharacter: m
                                    })
                                }),
                                o.jsx(qe, {
                                    contextItems: t.historyItems,
                                    selectedCharacter: y || null
                                })
                            ]
                        }),
                        o.jsx(Ze, {
                            character: y || null,
                            gameTime: c.modeState.gameTime,
                            onOpenDiary: ()=>d(!0)
                        })
                    ]
                }),
                c && o.jsx(zt, {
                    open: i,
                    onOpenChange: l,
                    settings: c.modeConfig.settings,
                    onSave: a
                }),
                o.jsx(es, {
                    open: r,
                    onOpenChange: d,
                    character: y || null
                })
            ]
        });
    }
    const ss = Ne.extend({
        mode: Ye("small-town"),
        modeConfig: Me,
        modeState: Ee
    });
    function ns(e) {
        const t = ss.safeParse(e);
        return t.success ? t.data : void 0;
    }
    Ds = function({ sessionId: e }) {
        const { data: t = [] } = ve((n)=>n.from({
                s: je
            }).where(({ s: i })=>be(i.id, e))), s = ns(t[0]);
        return x.useEffect(()=>{
            if (!s || f.currentSession?.id === e) return;
            (async ()=>{
                try {
                    const r = {
                        historyItems: await new ke(e).getContextItems(),
                        processingItem: void 0
                    };
                    f.loadSession(s, r);
                } catch (i) {
                    console.error("[SmallTown] 加载会话失败:", i);
                }
            })();
        }, [
            s,
            e
        ]), x.useEffect(()=>()=>{
                f.unloadSession();
            }, []), s ? s.mode !== "small-town" ? o.jsx("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
            children: o.jsx("p", {
                children: "会话模式不匹配"
            })
        }) : o.jsx(ts, {
            sessionId: e
        }) : o.jsx("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
            children: o.jsx("p", {
                children: "会话不存在或已删除"
            })
        });
    };
});
export { Ds as SessionMainForSmallTown, __tla };
