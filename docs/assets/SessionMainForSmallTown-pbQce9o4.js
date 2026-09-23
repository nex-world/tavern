const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/db-master-DpInMzGh.js","assets/@tanstack-8dqqXYTU.js","assets/react-Cp7JIDMn.js","assets/vendor-C24HE5AE.js","assets/formatting-KflFifHg.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/dexie-DSi1kBxz.js","assets/zod-BTj0C3yc.js","assets/analytics-DqIS_F3D.js","assets/nex-tavern-uuid-B02Y_twK.js","assets/index-Dvos9xYb.js","assets/icons-Dc5fwOe3.js","assets/index-B5OkmrnP.css","assets/id-BY9c7rfI.js"])))=>i.map(i=>d[i]);
import { s as se, aw as Be, j as i, r as T, u as ve, a_ as Fe, a$ as We, b0 as Ge } from "./react-Cp7JIDMn.js";
import { m as He, n as Ye } from "./@tanstack-8dqqXYTU.js";
import { S as Ue, o as ze, j as Xe } from "./db-master-DpInMzGh.js";
import { _ as ne, __tla as __tla_0 } from "./index-Dvos9xYb.js";
import { n as ie } from "./id-BY9c7rfI.js";
import { f as Te, M as je, a as Je, W as Ze, L as M, G as $, b as P, I as b, d as be, R as Ke, T as Ve, e as qe, g as Y, D as Qe, h as oe, S as ae, i as et, j as tt } from "./slider-CFYIjbli.js";
import { C as st } from "./context-manager.class-CetS2fXT.js";
import { B as w } from "./button-p-Zf1khH.js";
import { ay as nt, ax as it, aA as ot, aB as at, j as rt, U as lt, aC as ct, aD as dt, aE as ut, aF as mt, aG as pt, aH as ft } from "./icons-Dc5fwOe3.js";
import { C as X } from "./CharacterAvatar-C7K0X6_t.js";
import { P as Ne, a as ht, b as ke, c as gt } from "./tavern-llm-config-editor-B6tyngf3.js";
import { a as yt, b as xt, c as St } from "./tooltip-2nTITX1N.js";
import { c as J } from "./shadcn-utils-Cnr6N47i.js";
import { B as G } from "./badge-8hWiZNtW.js";
import { P as K } from "./progress-T13oMyRS.js";
import { A as vt } from "./AutoScrollDownArea-BJfmeK6d.js";
import { T as Tt, a as U } from "./toggle-group-CnzUVRTf.js";
import { S as re } from "./vendor-C24HE5AE.js";
import { u as jt } from "./useLLM-dxiXMELK.js";
import { D as Ce, i as we, a as $e, b as Ie, c as Ae, d as bt } from "./responsive-dialog-CnPA2NUp.js";
import { L as _ } from "./label-PMstkkML.js";
import { S as le } from "./switch-B4Jbj6hs.js";
import { I as ce } from "./input-Dv-vR-0h.js";
import { l as Nt } from "./zod-BTj0C3yc.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-DSi1kBxz.js";
import "./analytics-DqIS_F3D.js";
import "./nex-tavern-uuid-B02Y_twK.js";
import "./formatting-KflFifHg.js";
import "./es-toolkit-9bjl2JfA.js";
import "./components-and-styling-lnR2ABT4.js";
import "./avatar-qY3aVgMP.js";
import "./select-Whuypjrp.js";
import "./field-CA4kBoof.js";
import "./checkbox-BmIkQT6j.js";
import "./draft-field-Cab9dfFm.js";
import "./textarea-BWW78K6H.js";
import "./global-llm-config.store-CXBroG1M.js";
import "./@tailwind-CPcsbTWB.js";
import "./form-width-constraints-n6SdO9NQ.js";
import "./alert-dialog-B2Ci2Y_l.js";
let Gn;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    class kt {
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
            const o = {
                time: Te(this.session.modeState.gameTime),
                source: s,
                content: t,
                type: n
            };
            this.session.modeState.logs.push(o), this.session.modeState.logs.length > 500 && (this.session.modeState.logs = this.session.modeState.logs.slice(-400));
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
    const y = se({
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
            this.currentSession = JSON.parse(JSON.stringify(e)), this.currentSession && (this.currentSession.modeState.isRunning = !1, this.currentSession.modeState.currentPhase = "paused"), this.currentSession && (this.sessionManager = new kt(this.currentSession));
            const s = se(t || {
                historyItems: [],
                processingItem: void 0
            });
            this.contextManager = new st(s), this.historyItems = [
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
            let { day: s, hour: n, minute: o } = e.gameTime;
            return o += je, o >= 60 && (n += Math.floor(o / 60), o %= 60), n >= 24 && (s += Math.floor(n / 24), n %= 24), e.gameTime = {
                day: s,
                hour: n,
                minute: o
            }, e.tickCount++, {
                dayChanged: s !== t,
                oldDay: t
            };
        },
        addLog (e, t, s) {
            if (!(this.currentSession && this.contextManager)) return;
            let n;
            const o = Date.now(), c = Te(this.currentSession.modeState.gameTime);
            s === "chat" ? n = {
                id: ie(),
                type: "participant_message",
                timestamp: o,
                data: {
                    content: e,
                    name: t,
                    role: "assistant",
                    isCharacter: !0,
                    characterId: t,
                    isUser: !1,
                    isDM: !1,
                    isEnv: !1,
                    gameTime: c
                }
            } : n = {
                id: ie(),
                type: "alert",
                timestamp: o,
                orderRef: 0,
                data: {
                    type: s === "trade" ? "success" : "info",
                    content: e,
                    source: t,
                    gameTime: c,
                    timestamp: o
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
            const { SessionDB: s } = await ne(async ()=>{
                const { SessionDB: c } = await import("./db-master-DpInMzGh.js").then((r)=>r.A);
                return {
                    SessionDB: c
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])), n = new s(e), o = JSON.parse(JSON.stringify(t));
            await n.addContextItems([
                o
            ]);
        },
        async updateSessionInDB () {
            if (!this.currentSession) return;
            const { masterDb: e } = await ne(async ()=>{
                const { masterDb: s } = await import("./db-master-DpInMzGh.js").then((n)=>n.D);
                return {
                    masterDb: s
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])), t = Be(this.currentSession.modeState);
            await e.sessions.update(this.currentSession.id, {
                modeState: t,
                updatedAt: Date.now()
            });
        }
    });
    function Ct({ gameTime: e, isRunning: t, isSidebarOpen: s, onToggle: n, onToggleSidebar: o, onSettings: c }) {
        return i.jsxs("div", {
            className: "flex items-center justify-between px-4 py-2 border-b bg-card",
            children: [
                i.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                        i.jsx("h1", {
                            className: "text-lg font-semibold",
                            children: "🏘️ 小镇模式"
                        }),
                        i.jsx("div", {
                            className: "text-sm text-muted-foreground",
                            children: Je(e)
                        })
                    ]
                }),
                i.jsx("div", {
                    className: "flex items-center gap-2",
                    children: i.jsx(w, {
                        type: "button",
                        variant: t ? "default" : "outline",
                        size: "sm",
                        onClick: n,
                        children: t ? i.jsxs(i.Fragment, {
                            children: [
                                i.jsx(nt, {
                                    "data-icon": "inline-start"
                                }),
                                "暂停"
                            ]
                        }) : i.jsxs(i.Fragment, {
                            children: [
                                i.jsx(it, {
                                    "data-icon": "inline-start"
                                }),
                                "开始"
                            ]
                        })
                    })
                }),
                i.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                        i.jsx(w, {
                            type: "button",
                            variant: "ghost",
                            size: "icon",
                            onClick: o,
                            "aria-label": s ? "收起居民面板" : "展开居民面板",
                            title: s ? "收起居民面板" : "展开居民面板",
                            children: s ? i.jsx(ot, {}) : i.jsx(at, {})
                        }),
                        i.jsx(w, {
                            type: "button",
                            variant: "ghost",
                            size: "icon",
                            onClick: c,
                            "aria-label": "小镇设置",
                            title: "小镇设置",
                            children: i.jsx(rt, {})
                        })
                    ]
                })
            ]
        });
    }
    function wt({ config: e, gridSize: t }) {
        const s = {
            position: "absolute",
            left: e.x * t,
            top: e.y * t,
            width: e.w * t,
            height: e.h * t,
            backgroundColor: e.color,
            opacity: .6
        };
        return i.jsx("div", {
            className: "rounded border border-black/10 dark:border-white/10 flex items-center justify-center text-center pointer-events-none",
            style: s,
            title: e.info || e.label,
            children: i.jsx("span", {
                className: "text-xs font-medium text-black/70 dark:text-white/70 px-1 leading-tight",
                children: e.label
            })
        });
    }
    const de = 6, $t = 14, It = 6, V = .25;
    function At({ character: e, gridSize: t, boardSize: s, isSelected: n, renderPosition: o, showDialogueBubble: c = !1, onClick: r }) {
        const l = t * .8, a = (t - l) / 2, m = e.taskTimer > 0, f = o?.x ?? e.visualX ?? e.gridX, d = o?.y ?? e.visualY ?? e.gridY, h = f * t + a, x = d * t + a, p = (h + l / 2) / s, u = (x + l / 2) / s < V ? "bottom" : "top", S = p < V ? "start" : p > 1 - V ? "end" : "center", v = {
            position: "absolute",
            left: Math.min(s - l - de, Math.max(de, h)),
            top: Math.min(s - l - It, Math.max($t, x)),
            width: l,
            height: l,
            zIndex: n ? 10 : 1
        }, j = Ze, N = m ? Math.max(0, Math.min(100, (j - e.taskTimer) / j * 100)) : 0, k = e.lastDialogue?.content ? e.lastDialogue.content.length > 20 ? `${e.lastDialogue.content.slice(0, 20)}...` : e.lastDialogue.content : "";
        return i.jsxs("div", {
            style: v,
            className: "flex flex-col items-center justify-center pointer-events-none",
            "data-selected-character": n ? "true" : void 0,
            children: [
                m && i.jsx("div", {
                    className: "absolute -top-3 h-1 w-8 overflow-hidden rounded-full border bg-muted",
                    children: i.jsx("div", {
                        className: "h-full bg-primary transition-all duration-300 ease-linear",
                        style: {
                            width: `${N}%`
                        }
                    })
                }),
                e.thought && !m && !c && i.jsx("div", {
                    className: "absolute -top-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
                }),
                i.jsxs(Ne, {
                    open: c,
                    children: [
                        i.jsx(ht, {
                            asChild: !0,
                            children: i.jsx("div", {
                                className: "relative pointer-events-auto",
                                children: i.jsxs(yt, {
                                    open: c ? !1 : void 0,
                                    children: [
                                        i.jsx(xt, {
                                            asChild: !0,
                                            children: i.jsx("button", {
                                                type: "button",
                                                className: J("relative rounded-full transition-transform hover:scale-110", n && "ring-2 ring-primary ring-offset-2"),
                                                onClick: r,
                                                "aria-label": `${e.name}：${e.status}`,
                                                children: i.jsx(X, {
                                                    character: e,
                                                    size: "custom",
                                                    shape: "circle",
                                                    className: "border shadow-sm",
                                                    style: {
                                                        width: l,
                                                        height: l
                                                    }
                                                })
                                            })
                                        }),
                                        i.jsxs(St, {
                                            side: u,
                                            align: S,
                                            sideOffset: 6,
                                            collisionPadding: 8,
                                            className: "max-w-56",
                                            children: [
                                                i.jsx("span", {
                                                    children: e.name
                                                }),
                                                i.jsxs("span", {
                                                    className: "ml-1 opacity-70",
                                                    children: [
                                                        "· ",
                                                        e.status
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        c && i.jsxs(ke, {
                            side: u,
                            align: S,
                            sideOffset: 8,
                            collisionPadding: 12,
                            className: "pointer-events-none w-auto max-w-64 p-2 text-xs",
                            onOpenAutoFocus: (D)=>D.preventDefault(),
                            children: [
                                "“",
                                k,
                                "”"
                            ]
                        })
                    ]
                })
            ]
        });
    }
    function te({ className: e, children: t, ...s }) {
        return i.jsx("div", {
            "data-slot": "scroll-area",
            className: J("overflow-x-auto overflow-y-auto", e),
            ...s,
            children: t
        });
    }
    const z = 4;
    function Mt({ locationKey: e, position: t, characters: s, hiddenCount: n, selectedCharacterId: o, gridSize: c, boardSize: r, onSelectCharacter: l }) {
        const m = c * .8, f = (c - m) / 2, d = Math.min(r - 32 - z, Math.max(z, t.x * c + f - (32 - m) / 2)), h = Math.min(r - 32 - z, Math.max(z, t.y * c + f - (32 - m) / 2)), x = M[e]?.label ?? e;
        return i.jsxs(Ne, {
            children: [
                i.jsx(gt, {
                    asChild: !0,
                    children: i.jsxs(w, {
                        type: "button",
                        variant: "secondary",
                        size: "icon-sm",
                        className: "absolute rounded-full border shadow-sm",
                        style: {
                            left: d,
                            top: h,
                            zIndex: 6
                        },
                        "aria-label": `查看${x}的${s.length}位居民`,
                        title: `查看${x}的${s.length}位居民`,
                        children: [
                            "+",
                            n
                        ]
                    })
                }),
                i.jsxs(ke, {
                    sideOffset: 8,
                    collisionPadding: 12,
                    className: "w-64 p-2",
                    children: [
                        i.jsxs("div", {
                            className: "flex items-center justify-between gap-2 px-2 pb-2",
                            children: [
                                i.jsx("span", {
                                    className: "truncate text-sm font-medium",
                                    children: x
                                }),
                                i.jsxs(G, {
                                    variant: "secondary",
                                    children: [
                                        s.length,
                                        " 人"
                                    ]
                                })
                            ]
                        }),
                        i.jsx(te, {
                            className: "max-h-56",
                            children: i.jsx("div", {
                                className: "flex flex-col gap-1",
                                children: s.map((p)=>i.jsxs(w, {
                                        type: "button",
                                        variant: p.id === o ? "secondary" : "ghost",
                                        className: "h-auto w-full justify-start px-2 py-2",
                                        onClick: ()=>l(p.id),
                                        children: [
                                            i.jsx(X, {
                                                character: p,
                                                size: "custom",
                                                shape: "circle",
                                                className: "size-7"
                                            }),
                                            i.jsx("span", {
                                                className: "min-w-0 flex-1 truncate text-left",
                                                children: p.name
                                            }),
                                            i.jsx(G, {
                                                variant: "outline",
                                                className: "max-w-20 truncate",
                                                children: p.status
                                            })
                                        ]
                                    }, p.id))
                            })
                        })
                    ]
                })
            ]
        });
    }
    const Me = .8, O = 4, F = 2, Pt = 6;
    function Et(e, t) {
        const s = t * Me, n = e.w * t - F * 2, o = Math.max(1, Math.floor((n + O) / (s + O))), r = e.h * t - F * 2 >= s * 2 + O ? 2 : 1;
        return Math.min(Pt, o * r);
    }
    function Dt(e, t, s) {
        const n = s * Me, o = (s - n) / 2, c = e.x * s, r = e.y * s, l = e.w * s, a = e.h * s, m = l - F * 2, f = Math.max(1, Math.floor((m + O) / (n + O))), d = t > f ? 2 : 1, h = Math.ceil(t / d);
        return (d === 1 ? [
            h
        ] : [
            h,
            t - h
        ]).flatMap((p, g)=>{
            const u = p * n + Math.max(0, p - 1) * O, S = c + (l - u) / 2, v = d === 1 || g === 0 ? r + F : r + a - F - n;
            return Array.from({
                length: p
            }, (j, N)=>({
                    x: (S + N * (n + O) - o) / s,
                    y: (v - o) / s
                }));
        });
    }
    function Rt(e, t, s) {
        const n = [
            ...e
        ].sort((a, m)=>a.id.localeCompare(m.id)), o = n.find((a)=>a.id === s), c = [
            ...n
        ].filter((a)=>a.lastDialogue).sort((a, m)=>(m.lastDialogue?.timestamp ?? 0) - (a.lastDialogue?.timestamp ?? 0))[0], r = [
            o,
            c,
            ...n
        ].filter((a)=>!!a), l = [];
        for (const a of r)if (!l.some((m)=>m.id === a.id) && (l.push(a), l.length === t)) break;
        return l;
    }
    function Lt(e, t, s = $) {
        const n = new Map, o = [], c = new Map;
        for (const r of e){
            const l = !!(r.currentPath && r.currentPath.length > 1), a = M[r.locationName];
            if (l || !a) {
                n.set(r.id, {
                    x: r.visualX ?? r.gridX,
                    y: r.visualY ?? r.gridY
                });
                continue;
            }
            const m = c.get(r.locationName) ?? [];
            m.push(r), c.set(r.locationName, m);
        }
        for (const [r, l] of c){
            const a = M[r], m = Et(a, s), f = l.length > m, d = f ? Math.max(1, m - 1) : l.length, h = Rt(l, d, t), x = h.length + (f ? 1 : 0), p = Dt(a, x, s);
            h.forEach((g, u)=>{
                n.set(g.id, p[u]);
            }), f && o.push({
                locationKey: r,
                position: p.at(-1) ?? {
                    x: a.x,
                    y: a.y
                },
                characters: [
                    ...l
                ].sort((g, u)=>g.name.localeCompare(u.name, "zh-CN")),
                hiddenCount: l.length - h.length
            });
        }
        return {
            markerPositions: n,
            clusters: o
        };
    }
    const ue = 5e3;
    function Ot({ characterStates: e, selectedCharacterId: t, onSelectCharacter: s, zoom: n = 1 }) {
        const o = $ * P, c = o * n, r = T.useRef(null), l = T.useMemo(()=>Lt(e, t), [
            e,
            t
        ]), a = T.useMemo(()=>new Map(e.map((p)=>[
                    p.id,
                    p
                ])), [
            e
        ]), m = T.useMemo(()=>{
            const p = Date.now(), g = new Map, u = new Set(l.markerPositions.keys());
            for (const j of e){
                if (!(u.has(j.id) && j.lastDialogue) || p - j.lastDialogue.timestamp >= ue || !!(j.currentPath && j.currentPath.length > 1) || !M[j.locationName]) continue;
                const k = g.get(j.locationName);
                (!k || (k.lastDialogue?.timestamp ?? 0) < j.lastDialogue.timestamp) && g.set(j.locationName, j);
            }
            const S = new Set([
                ...g.values()
            ].map((j)=>j.id)), v = t ? a.get(t) : void 0;
            return v?.lastDialogue && u.has(v.id) && p - v.lastDialogue.timestamp < ue && S.add(v.id), S;
        }, [
            e,
            a,
            l.markerPositions,
            t
        ]);
        T.useEffect(()=>{
            t && r.current?.querySelector('[data-selected-character="true"]')?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "nearest"
            });
        }, [
            t
        ]);
        const f = T.useMemo(()=>Object.entries(M).map(([p, g])=>i.jsx(wt, {
                    locationKey: p,
                    config: g,
                    gridSize: $
                }, p)), []), d = T.useMemo(()=>[
                ...l.markerPositions.entries()
            ].flatMap(([p, g])=>{
                const u = a.get(p);
                return u ? [
                    i.jsx(At, {
                        character: u,
                        gridSize: $,
                        boardSize: o,
                        renderPosition: g,
                        isSelected: u.id === t,
                        showDialogueBubble: m.has(u.id),
                        onClick: ()=>s(u.id)
                    }, u.id)
                ] : [];
            }), [
            o,
            a,
            m,
            l.markerPositions,
            t,
            s
        ]), h = T.useMemo(()=>l.clusters.map((p)=>i.jsx(Mt, {
                    ...p,
                    selectedCharacterId: t,
                    gridSize: $,
                    boardSize: o,
                    onSelectCharacter: s
                }, p.locationKey)), [
            o,
            l.clusters,
            s,
            t
        ]), x = T.useMemo(()=>e.map((p)=>{
                if (!p.currentPath || p.currentPath.length < 2) return null;
                const g = p.currentPath.map(([u, S])=>`${u * $ + $ / 2},${S * $ + $ / 2}`).join(" ");
                return i.jsx("polyline", {
                    points: g,
                    fill: "none",
                    stroke: p.color,
                    strokeWidth: "2",
                    strokeDasharray: "4 2",
                    opacity: "0.5"
                }, `path-${p.id}`);
            }), [
            e
        ]);
        return i.jsx("div", {
            ref: r,
            className: "relative shrink-0",
            style: {
                width: c,
                height: c
            },
            children: i.jsxs("div", {
                className: "relative origin-top-left overflow-hidden rounded-lg border bg-amber-50 dark:bg-amber-950/20",
                style: {
                    width: o,
                    height: o,
                    transform: `scale(${n})`
                },
                children: [
                    i.jsx("div", {
                        className: "absolute inset-0 pointer-events-none",
                        style: {
                            backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
                            backgroundSize: `${$}px ${$}px`
                        }
                    }),
                    i.jsx("svg", {
                        className: "absolute inset-0 pointer-events-none",
                        width: o,
                        height: o,
                        "aria-hidden": "true",
                        children: x
                    }),
                    f,
                    d,
                    h
                ]
            })
        });
    }
    function q(e) {
        const t = e.targetLocationName || e.locationName, s = M[t]?.label || (t === "Wander" ? "🚶 闲逛中" : t);
        return e.targetLocationName ? `前往 ${s}` : s;
    }
    function _t({ characters: e, selectedCharacterId: t, onSelectCharacter: s }) {
        const n = [
            ...e
        ].sort((o, c)=>q(o).localeCompare(q(c), "zh-CN") || o.name.localeCompare(c.name, "zh-CN"));
        return i.jsxs("section", {
            className: "flex min-h-0 flex-col border-b",
            children: [
                i.jsxs("div", {
                    className: "flex items-center justify-between px-3 py-2",
                    children: [
                        i.jsxs("div", {
                            className: "flex items-center gap-2 text-sm font-medium",
                            children: [
                                i.jsx(lt, {
                                    "aria-hidden": "true",
                                    className: "size-4"
                                }),
                                "居民总览"
                            ]
                        }),
                        i.jsxs(G, {
                            variant: "secondary",
                            children: [
                                e.length,
                                " 人"
                            ]
                        })
                    ]
                }),
                i.jsx(te, {
                    className: "max-h-52 px-2 pb-2",
                    children: i.jsx("div", {
                        className: "flex flex-col gap-1",
                        children: n.map((o)=>i.jsxs(w, {
                                type: "button",
                                variant: o.id === t ? "secondary" : "ghost",
                                className: "h-auto w-full justify-start px-2 py-2",
                                onClick: ()=>s(o.id),
                                children: [
                                    i.jsx(X, {
                                        character: o,
                                        size: "custom",
                                        shape: "circle",
                                        className: "size-8 shrink-0"
                                    }),
                                    i.jsxs("span", {
                                        className: "flex min-w-0 flex-1 flex-col items-start gap-0.5",
                                        children: [
                                            i.jsx("span", {
                                                className: "w-full truncate text-left text-sm",
                                                children: o.name
                                            }),
                                            i.jsxs("span", {
                                                className: "flex w-full items-center gap-1 truncate text-left text-[11px] font-normal text-muted-foreground",
                                                children: [
                                                    i.jsx(ct, {
                                                        "aria-hidden": "true"
                                                    }),
                                                    q(o)
                                                ]
                                            })
                                        ]
                                    }),
                                    i.jsx(G, {
                                        variant: "outline",
                                        className: "max-w-20 truncate",
                                        children: o.status
                                    })
                                ]
                            }, o.id))
                    })
                })
            ]
        });
    }
    function Bt({ character: e, characters: t, selectedCharacterId: s, onSelectCharacter: n, onOpenDiary: o }) {
        if (!e) return null;
        const c = e.stamina / e.maxStamina * 100, r = e.energy / e.maxEnergy * 100, l = e.happiness;
        return i.jsxs("aside", {
            className: "flex w-80 shrink-0 flex-col overflow-hidden border-l bg-card",
            children: [
                i.jsx(_t, {
                    characters: t,
                    selectedCharacterId: s,
                    onSelectCharacter: n
                }),
                i.jsxs("div", {
                    className: "min-h-0 flex-1 overflow-y-auto",
                    children: [
                        i.jsx("div", {
                            className: "p-4 border-b",
                            children: i.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    i.jsx(X, {
                                        character: e,
                                        size: "sm",
                                        shape: "square"
                                    }),
                                    i.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            i.jsx("h2", {
                                                className: "font-semibold truncate",
                                                children: e.name
                                            }),
                                            i.jsx("p", {
                                                className: "text-xs text-muted-foreground truncate",
                                                children: e.personality
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        i.jsxs("div", {
                            className: "p-4 border-b space-y-3",
                            children: [
                                i.jsx("h3", {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "状态"
                                }),
                                i.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                        i.jsxs("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                i.jsx("span", {
                                                    children: "体力"
                                                }),
                                                i.jsxs("span", {
                                                    children: [
                                                        e.stamina,
                                                        "/",
                                                        e.maxStamina
                                                    ]
                                                })
                                            ]
                                        }),
                                        i.jsx(K, {
                                            value: c,
                                            "aria-label": "体力"
                                        })
                                    ]
                                }),
                                i.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                        i.jsxs("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                i.jsx("span", {
                                                    children: "活力"
                                                }),
                                                i.jsxs("span", {
                                                    children: [
                                                        e.energy,
                                                        "/",
                                                        e.maxEnergy
                                                    ]
                                                })
                                            ]
                                        }),
                                        i.jsx(K, {
                                            value: r,
                                            "aria-label": "活力"
                                        })
                                    ]
                                }),
                                i.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                        i.jsxs("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                i.jsx("span", {
                                                    children: "愉悦"
                                                }),
                                                i.jsxs("span", {
                                                    children: [
                                                        e.happiness,
                                                        "/100"
                                                    ]
                                                })
                                            ]
                                        }),
                                        i.jsx(K, {
                                            value: l,
                                            "aria-label": "愉悦"
                                        })
                                    ]
                                }),
                                i.jsxs("div", {
                                    className: "flex justify-between text-sm",
                                    children: [
                                        i.jsx("span", {
                                            children: "💰 金钱"
                                        }),
                                        i.jsxs("span", {
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
                        i.jsxs("div", {
                            className: "p-4 border-b space-y-2",
                            children: [
                                i.jsx("h3", {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "当前活动"
                                }),
                                i.jsxs("div", {
                                    className: "text-sm",
                                    children: [
                                        i.jsxs("p", {
                                            children: [
                                                i.jsx("span", {
                                                    className: "text-muted-foreground",
                                                    children: "状态:"
                                                }),
                                                " ",
                                                e.status
                                            ]
                                        }),
                                        i.jsxs("p", {
                                            children: [
                                                i.jsx("span", {
                                                    className: "text-muted-foreground",
                                                    children: "位置:"
                                                }),
                                                " ",
                                                e.locationName
                                            ]
                                        }),
                                        i.jsxs("p", {
                                            children: [
                                                i.jsx("span", {
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
                        i.jsxs("div", {
                            className: "p-4 border-b space-y-2",
                            children: [
                                i.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        i.jsx("h3", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: "内心想法"
                                        }),
                                        o && i.jsxs(w, {
                                            variant: "ghost",
                                            size: "sm",
                                            className: "h-6 px-2 text-muted-foreground hover:text-foreground",
                                            onClick: o,
                                            children: [
                                                i.jsx(dt, {
                                                    "data-icon": "inline-start"
                                                }),
                                                "日记"
                                            ]
                                        })
                                    ]
                                }),
                                i.jsxs("p", {
                                    className: "text-sm italic text-muted-foreground",
                                    children: [
                                        '"',
                                        e.thought || "...",
                                        '"'
                                    ]
                                })
                            ]
                        }),
                        i.jsxs("div", {
                            className: "p-4 border-b space-y-2",
                            children: [
                                i.jsx("h3", {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "库存"
                                }),
                                Object.keys(e.inventory).length === 0 ? i.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "(空)"
                                }) : i.jsx("div", {
                                    className: "space-y-1",
                                    children: Object.entries(e.inventory).map(([a, m])=>i.jsxs("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                i.jsx("span", {
                                                    children: a
                                                }),
                                                i.jsxs("span", {
                                                    children: [
                                                        "×",
                                                        m
                                                    ]
                                                })
                                            ]
                                        }, a))
                                })
                            ]
                        }),
                        i.jsxs("div", {
                            className: "p-4 space-y-2",
                            children: [
                                i.jsxs("h3", {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: [
                                        "待办事项 (",
                                        e.todoList.filter((a)=>a.status === "pending").length,
                                        ")"
                                    ]
                                }),
                                e.todoList.length === 0 ? i.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "(无)"
                                }) : i.jsx("div", {
                                    className: "space-y-1 max-h-32 overflow-y-auto",
                                    children: e.todoList.filter((a)=>a.status !== "completed" && a.status !== "cancelled").slice(0, 5).map((a)=>i.jsxs("div", {
                                            className: `text-xs p-1.5 rounded ${a.status === "in-progress" ? "bg-primary/10 text-primary" : "bg-muted"}`,
                                            children: [
                                                i.jsxs("span", {
                                                    className: "text-muted-foreground",
                                                    children: [
                                                        "[",
                                                        a.type,
                                                        "]"
                                                    ]
                                                }),
                                                " ",
                                                a.content
                                            ]
                                        }, a.id))
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
    function Ft() {
        return `todo_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    }
    function Wt(e, t) {
        return e.inventory[t] ?? 0;
    }
    function Gt(e, t, s) {
        let n = 0;
        if (e.deadline) {
            const a = e.deadline - s;
            n = Math.max(0, 1 - a / 100);
        }
        if (e.type === "respond") {
            const a = s - e.createdAt;
            n = Math.max(0, 1 - a / 10);
        }
        let o = .5;
        e.type === "rest" && t.stamina < t.maxStamina * .5 && (o = .9), e.type === "consume" && t.stamina < t.maxStamina * .7 && (o = .7), e.type === "work" && t.money < 50 && (o = .8);
        const c = Yt(e, t) ? 1 : 0, r = s - e.createdAt, l = Math.max(0, 1 - r / 50);
        return {
            urgency: n,
            importance: o,
            feasibility: c,
            recency: l
        };
    }
    function Ht(e, t, s) {
        const n = Gt(e, t, s);
        if (n.feasibility === 0) return Number.NEGATIVE_INFINITY;
        let o = e.priority * .3 + n.urgency * 30 + n.importance * 25 + n.recency * 5;
        return e.type === "respond" && (o *= 1.5), o;
    }
    function Yt(e, t) {
        const s = e.preconditions;
        if (s.location && t.locationName !== s.location && (!M[s.location] || e.type !== "travel" && e.type !== "explore" && e.type !== "trade" && e.type !== "work" && e.type !== "rest") || s.stamina && t.stamina < s.stamina || s.minEnergy !== void 0 && t.energy / t.maxEnergy < s.minEnergy) return !1;
        if (s.items) {
            for (const n of s.items)if (Wt(t, n.itemId) < n.count) return !1;
        }
        return !0;
    }
    function Pe(e, t) {
        const s = e.todoList.filter((o)=>o.status === "pending");
        return s.length === 0 ? null : s.map((o)=>({
                todo: o,
                priority: Ht(o, e, t)
            })).filter((o)=>o.priority > Number.NEGATIVE_INFINITY).sort((o, c)=>c.priority - o.priority)[0]?.todo ?? null;
    }
    function Ee(e, t) {
        return {
            id: Ft(),
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
    function R(e, t) {
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
    function L(e, t) {
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
    function C(e, t) {
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
    function Ut(e) {
        return e.todoList.filter((t)=>t.status === "pending").length;
    }
    function me(e) {
        return e.currentTodo ? e.todoList.find((t)=>t.id === e.currentTodo) ?? null : null;
    }
    const De = {
        baseResponseProbability: .95,
        turnDecayRate: .92,
        dailyFatigueThreshold: 50,
        waitDecayTicks: 15,
        minResponseProbability: .3,
        maxResponseProbability: .98,
        responseTaskPriority: 90
    };
    function zt(e, t, s) {
        return s ? `对 ${e} 说：“${t}”` : `回应 ${e}：“${t}”`;
    }
    function Xt(e, t) {
        const s = `${e} `;
        if (!t.startsWith(s)) return t;
        const n = t.slice(s.length);
        return n.startsWith("对 ") || n.startsWith("回应 ") ? n : t;
    }
    function Jt(e, t, s) {
        const n = De, o = n.baseResponseProbability, c = Math.pow(n.turnDecayRate, Math.max(0, t.turns - 1)), r = Math.max(.3, 1 - e.conversationState.totalTurnsToday / n.dailyFatigueThreshold), l = s - t.lastTurnTick, a = Math.max(.2, 1 - l / n.waitDecayTicks), m = t.sentiment * .1, f = o * c * r * a + m;
        return Math.max(n.minResponseProbability, Math.min(n.maxResponseProbability, f));
    }
    function Zt(e, t, s, n, o) {
        const c = e.conversationState.activeConversations[t], r = c ? {
            ...c,
            turns: c.turns + 1,
            lastTurnTick: o
        } : {
            partnerId: t,
            turns: 1,
            lastTurnTick: o,
            sentiment: 0
        }, l = {
            ...e.conversationState.activeConversations,
            [t]: r
        }, a = [
            ...e.history,
            {
                role: "user",
                content: `[${s}说] ${n}`
            }
        ], m = Jt(e, r, o), f = Math.random() < m;
        console.log(`[DialogueSystem] ${e.name} 收到 ${s} 的对话`), console.log(`[DialogueSystem] 响应概率: ${(m * 100).toFixed(1)}%, 决定${f ? "响应" : "不响应"}`);
        let d = {
            ...e,
            history: a,
            conversationState: {
                activeConversations: l,
                totalTurnsToday: e.conversationState.totalTurnsToday + 1
            }
        };
        if (f) {
            const h = Ee({
                type: "respond",
                content: `回复 ${s} 的话`,
                priority: De.responseTaskPriority,
                source: "external",
                relatedCharacterId: t,
                maxAttempts: 3
            }, o);
            d = {
                ...d,
                todoList: [
                    ...d.todoList,
                    h
                ]
            }, console.log(`[DialogueSystem] 为 ${e.name} 创建了响应任务，目标角色ID: ${t}`);
        }
        return {
            updatedChar: d,
            shouldRespond: f,
            responseProbability: m
        };
    }
    function Kt(e, t) {
        const { [t]: s, ...n } = e.conversationState.activeConversations;
        return {
            ...e,
            conversationState: {
                ...e.conversationState,
                activeConversations: n
            }
        };
    }
    function Vt(e, t, s, n) {
        const c = e.conversationState.activeConversations[t]?.turns ?? 1, r = e.history.filter((a)=>a.content.includes(s) || a.role === "assistant").slice(-6).map((a)=>a.role === "assistant" ? `[我] ${a.content}` : a.content).join(`
`), l = n ? "你想和对方聊聊。" : "对方刚刚对你说话了。";
        return `你是 ${e.name}，${e.personality}。

## 对话上下文
${l}
这是今天与 ${s} 的第 ${c} 轮对话。

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
    function qt(e, t) {
        const s = t.filter((o)=>o.id !== e.id && o.aiEnabled && o.taskName !== "Sleeping" && !o.faintedState?.isFainted);
        if (s.length === 0) return null;
        const n = s.filter((o)=>o.locationName === e.locationName);
        return n.length > 0 ? n[Math.floor(Math.random() * n.length)] : s[Math.floor(Math.random() * s.length)];
    }
    function Qt(e, t) {
        return e === "chat" ? "text-blue-600 dark:text-blue-400 font-semibold" : t.includes("计划") || t.includes("决定") ? "text-purple-600 dark:text-purple-400" : t.includes("前往") || t.includes("移动") ? "text-amber-600 dark:text-amber-400" : t.includes("完成") || t.includes("吃了") || t.includes("喝了") || t.includes("睡醒") ? "text-emerald-600 dark:text-emerald-400" : t.includes("取消") || t.includes("失败") || t.includes("无法") || t.includes("晕倒") ? "text-red-600 dark:text-red-400" : t.includes("开始") ? "text-cyan-600 dark:text-cyan-400" : "text-muted-foreground";
    }
    function es({ contextItems: e, selectedCharacter: t }) {
        const [s, n] = T.useState("all"), o = T.useMemo(()=>{
            const r = e.filter((l)=>!(l.hidden || l.deleted)).flatMap((l)=>{
                if (l.type === "alert") return [
                    {
                        id: l.id,
                        time: l.data.gameTime || (l.timestamp ? new Date(l.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: !1
                        }) : ""),
                        source: "系统",
                        content: l.data.content,
                        type: "sys"
                    }
                ];
                if (l.type === "participant_message" || l.type === "character_message") {
                    const a = l.data.name || "未知";
                    return [
                        {
                            id: l.id,
                            time: l.data.gameTime || (l.timestamp ? new Date(l.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: !1
                            }) : ""),
                            source: a,
                            content: Xt(a, l.data.content),
                            type: "chat"
                        }
                    ];
                }
                return [];
            });
            return s === "chat" ? r.filter((l)=>l.type === "chat") : s === "action" ? r.filter((l)=>l.type === "sys") : s === "selected" && t ? r.filter((l)=>l.source.includes(t.name) || l.content.includes(t.name)) : r;
        }, [
            e,
            s,
            t
        ]), c = o.slice(-150);
        return i.jsxs("div", {
            className: "flex h-full min-h-0 flex-col rounded-lg border bg-card",
            children: [
                i.jsxs("div", {
                    className: "flex flex-wrap items-center justify-between gap-2 border-b bg-muted/50 px-3 py-1.5",
                    children: [
                        i.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                                i.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: "小镇动态"
                                }),
                                i.jsx(G, {
                                    variant: "secondary",
                                    children: o.length
                                })
                            ]
                        }),
                        i.jsxs(Tt, {
                            type: "single",
                            variant: "outline",
                            size: "sm",
                            value: s,
                            onValueChange: (r)=>{
                                r && n(r);
                            },
                            "aria-label": "筛选小镇动态",
                            children: [
                                i.jsx(U, {
                                    value: "all",
                                    children: "全部"
                                }),
                                i.jsx(U, {
                                    value: "selected",
                                    disabled: !t,
                                    children: t ? t.name : "所选居民"
                                }),
                                i.jsx(U, {
                                    value: "chat",
                                    children: "对话"
                                }),
                                i.jsx(U, {
                                    value: "action",
                                    children: "行动"
                                })
                            ]
                        })
                    ]
                }),
                i.jsx(vt, {
                    className: "min-h-0 flex-1 p-2 font-mono text-xs",
                    children: i.jsx("div", {
                        className: "flex flex-col gap-1",
                        children: c.length === 0 ? i.jsx("p", {
                            className: "text-muted-foreground text-center py-4",
                            children: "暂无日志"
                        }) : c.map((r)=>i.jsxs("div", {
                                className: `flex gap-2 ${Qt(r.type, r.content)}`,
                                children: [
                                    i.jsxs("span", {
                                        className: "opacity-70 shrink-0",
                                        children: [
                                            "[",
                                            r.time,
                                            "]"
                                        ]
                                    }),
                                    i.jsxs("span", {
                                        className: "font-medium shrink-0",
                                        children: [
                                            r.source,
                                            ":"
                                        ]
                                    }),
                                    i.jsx("span", {
                                        className: "break-all",
                                        children: r.content
                                    })
                                ]
                            }, r.id))
                    })
                })
            ]
        });
    }
    function A(e, t) {
        return e.inventory[t] ?? 0;
    }
    function B(e, t, s) {
        const n = e.inventory[t] ?? 0;
        return {
            ...e,
            inventory: {
                ...e.inventory,
                [t]: n + s
            }
        };
    }
    function W(e, t, s) {
        const n = e.inventory[t] ?? 0, o = Math.max(0, n - s), c = {
            ...e.inventory
        };
        return o === 0 ? delete c[t] : c[t] = o, {
            ...e,
            inventory: c
        };
    }
    function Re(e, t) {
        return {
            ...e,
            stamina: Math.max(0, Math.min(e.maxStamina, e.stamina + t))
        };
    }
    function ts(e, t) {
        return {
            ...e,
            energy: Math.max(0, Math.min(e.maxEnergy, e.energy + t))
        };
    }
    function Le(e, t) {
        return {
            ...e,
            happiness: Math.max(0, Math.min(be, e.happiness + t))
        };
    }
    function ss(e) {
        if (A(e, b.BREAD.name) <= 0) return {
            char: e,
            consumed: !1
        };
        const s = b.BREAD.stamina;
        let n = W(e, b.BREAD.name, 1);
        return n = Re(n, s), {
            char: n,
            consumed: !0
        };
    }
    function ns(e) {
        if (A(e, b.JUICE.name) <= 0) return {
            char: e,
            consumed: !1
        };
        const s = b.JUICE.happiness;
        let n = W(e, b.JUICE.name, 1);
        return n = Le(n, s), {
            char: n,
            consumed: !0
        };
    }
    function is(e, t) {
        let s = {
            ...e
        }, n = "";
        switch(t){
            case "Farm":
                {
                    s = B(s, b.WHEAT.name, 6), n = "获得 6 小麦";
                    break;
                }
            case "Mill":
                {
                    A(s, b.WHEAT.name) >= 20 ? (s = W(s, b.WHEAT.name, 20), s = B(s, b.FLOUR.name, 15), n = "消耗 20 小麦，获得 15 面粉") : n = "小麦不足，无法磨面";
                    break;
                }
            case "Bakery":
                {
                    A(s, b.FLOUR.name) >= 2 ? (s = W(s, b.FLOUR.name, 2), s = B(s, b.BREAD.name, 4), n = "消耗 2 面粉，获得 4 面包") : n = "面粉不足，无法烘焙";
                    break;
                }
            case "Vineyard":
                {
                    s = B(s, b.GRAPE.name, 3), n = "获得 3 葡萄";
                    break;
                }
            case "JuiceFactory":
                {
                    A(s, b.GRAPE.name) >= 4 ? (s = W(s, b.GRAPE.name, 4), s = B(s, b.JUICE.name, 4), n = "消耗 4 葡萄，获得 4 果汁") : n = "葡萄不足，无法榨汁";
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
    function os(e, t, s, n) {
        let o = Re(e, t);
        return o = ts(o, s), o = Le(o, n), {
            ...o,
            taskName: "Idle",
            taskTarget: null,
            taskTimer: 0,
            status: "空闲"
        };
    }
    function E(e) {
        return {
            updatedChar: e,
            logs: [],
            historyEntries: [],
            completed: !1,
            requiresAI: !1,
            dialogueBroadcasts: []
        };
    }
    function as(e) {
        const t = M[e];
        return t ? t.entrance ? {
            ...t.entrance
        } : {
            x: t.x,
            y: t.y
        } : null;
    }
    function H(e, t) {
        if (e.currentPath && e.currentPath.length > 1) return console.log(`[MoveTarget] ${e.name} 正在移动中，忽略新目标 ${t}`), e;
        const s = as(t);
        if (s) return e.gridX === s.x && e.gridY === s.y ? {
            ...e,
            locationName: t,
            targetLocationName: void 0,
            pendingMoveTo: void 0,
            currentPath: void 0
        } : {
            ...e,
            targetLocationName: t,
            pendingMoveTo: s
        };
        const n = Math.floor(Math.random() * 5) - 2, o = Math.floor(Math.random() * 5) - 2;
        return {
            ...e,
            targetLocationName: "Wander",
            pendingMoveTo: {
                x: Math.max(0, Math.min(19, e.gridX + n)),
                y: Math.max(0, Math.min(19, e.gridY + o))
            }
        };
    }
    function Oe(e, t) {
        const s = Ke.includes(t);
        return {
            ...e,
            taskTimer: 6,
            taskTarget: t,
            taskName: s ? "Sleeping" : "Working",
            status: s ? "睡觉中..." : "工作中..."
        };
    }
    function rs(e, t) {
        const s = E(e);
        let n = {
            ...e
        };
        const o = t.preconditions.location;
        if (!o) return n = C(n, t.id), s.updatedChar = n, s.historyEntries.push({
            role: "system",
            content: `工作任务「${t.content}」缺少目标地点，已取消。`
        }), s;
        if (n.locationName !== o) return n = H(n, o), n = R(n, t.id), s.historyEntries.push({
            role: "system",
            content: `前往${o}准备工作。`
        }), s.logs.push({
            content: `${e.name} 前往${o}`,
            source: "系统",
            type: "sys"
        }), s.updatedChar = n, s;
        if (M[o]?.isWork) {
            if (o === "Mill" && A(n, b.WHEAT.name) < 20) return n = C(n, t.id), s.updatedChar = n, s.historyEntries.push({
                role: "system",
                content: "小麦不足 20 单位，无法在磨坊工作。"
            }), s;
            if (o === "Bakery" && A(n, b.FLOUR.name) < 2) return n = C(n, t.id), s.updatedChar = n, s.historyEntries.push({
                role: "system",
                content: "面粉不足 2 单位，无法在面包房工作。"
            }), s;
            if (o === "JuiceFactory" && A(n, b.GRAPE.name) < 4) return n = C(n, t.id), s.updatedChar = n, s.historyEntries.push({
                role: "system",
                content: "葡萄不足 4 单位，无法在果汁厂工作。"
            }), s;
            n = Oe(n, o), n = R(n, t.id), s.historyEntries.push({
                role: "system",
                content: `开始在${o}工作。`
            }), s.logs.push({
                content: `${e.name} 开始在${o}工作`,
                source: "系统",
                type: "sys"
            });
        }
        return s.updatedChar = n, s;
    }
    function ls(e, t) {
        const s = E(e);
        let n = {
            ...e
        };
        const o = n.homeZoneKey || "Zone_A";
        return n.locationName !== o ? (n = H(n, o), n = R(n, t.id), s.historyEntries.push({
            role: "system",
            content: `前往${o}准备休息。`
        }), s.logs.push({
            content: `${e.name} 前往${o}`,
            source: "系统",
            type: "sys"
        }), s.updatedChar = n, s) : (n = Oe(n, o), n = R(n, t.id), s.historyEntries.push({
            role: "system",
            content: `开始在${o}睡觉。`
        }), s.logs.push({
            content: `${e.name} 回到住宅睡觉`,
            source: "系统",
            type: "sys"
        }), s.updatedChar = n, s);
    }
    function cs(e, t) {
        const s = E(e);
        let n = {
            ...e
        };
        const o = t.preconditions.location || "Park";
        return n.locationName !== o ? (n = H(n, o), n = R(n, t.id), s.historyEntries.push({
            role: "system",
            content: `前往${o}探索。`
        }), s.logs.push({
            content: `${e.name} 前往${o}探索`,
            source: "系统",
            type: "sys"
        }), s.updatedChar = n, s) : (o === "Park" ? (n.happiness = Math.min(100, n.happiness + 1), s.logs.push({
            content: `${e.name} 在公园散步，愉悦值+1`,
            source: "系统",
            type: "sys"
        }), s.historyEntries.push({
            role: "system",
            content: "在公园放松，愉悦值+1。"
        })) : s.historyEntries.push({
            role: "system",
            content: `探索了${o}。`
        }), n = L(n, t.id), n.status = `在${o}闲逛`, s.completed = !0, s.updatedChar = n, s);
    }
    function ds(e, t) {
        const s = E(e);
        let n = {
            ...e
        };
        const o = t.preconditions.location;
        return o ? n.locationName !== o ? (n = H(n, o), n = R(n, t.id), s.historyEntries.push({
            role: "system",
            content: `移动到${o}。`
        }), s.logs.push({
            content: `${e.name} 移动到${o}`,
            source: "系统",
            type: "sys"
        }), s.updatedChar = n, s) : (n = L(n, t.id), n.status = `到达${o}`, s.completed = !0, s.updatedChar = n, s) : (n = C(n, t.id), s.updatedChar = n, s);
    }
    function us(e, t) {
        const s = E(e);
        let n = {
            ...e
        };
        const o = A(n, b.BREAD.name), c = A(n, b.JUICE.name), r = b.BREAD.stamina, l = b.JUICE.happiness;
        let a = !1;
        return o > 0 && n.stamina < n.maxStamina - r && (n.inventory[b.BREAD.name] = o - 1, n.stamina = Math.min(n.maxStamina, n.stamina + r), a = !0, s.historyEntries.push({
            role: "system",
            content: `吃了面包，体力+${r}。`
        }), s.logs.push({
            content: `${e.name} 吃了面包，体力+${r}`,
            source: "系统",
            type: "sys"
        })), c > 0 && n.happiness < 100 - l && (n.inventory[b.JUICE.name] = c - 1, n.happiness = Math.min(100, n.happiness + l), a = !0, s.historyEntries.push({
            role: "system",
            content: `喝了果汁，愉悦值+${l}。`
        }), s.logs.push({
            content: `${e.name} 喝了果汁，愉悦值+${l}`,
            source: "系统",
            type: "sys"
        })), a ? (n = L(n, t.id), s.completed = !0) : (n = C(n, t.id), s.historyEntries.push({
            role: "system",
            content: "没有可消费的食物或饮料。"
        })), s.updatedChar = n, s;
    }
    function ms(e, t) {
        const s = E(e);
        return s.requiresAI = !0, s.updatedChar = R(e, t.id), s.historyEntries.push({
            role: "system",
            content: `准备进行社交活动: ${t.content}`
        }), s;
    }
    function ps(e, t) {
        const s = E(e);
        return s.requiresAI = !0, s.updatedChar = R(e, t.id), s.historyEntries.push({
            role: "system",
            content: `准备回应对话: ${t.content}`
        }), s;
    }
    function fs(e, t) {
        const s = E(e);
        let n = {
            ...e
        };
        const o = t.preconditions.location || "Shop";
        return o === "Shop" && n.dailyShopVisit ? (n = C(n, t.id), s.updatedChar = n, s.historyEntries.push({
            role: "system",
            content: "今天已经去过商店了。"
        }), s) : o === "SalesStand" && n.dailySalesStandVisit ? (n = C(n, t.id), s.updatedChar = n, s.historyEntries.push({
            role: "system",
            content: "今天已经去过商业大道了。"
        }), s) : (n.locationName !== o && (n = H(n, o)), o === "Shop" ? n.dailyShopVisit = !0 : o === "SalesStand" && (n.dailySalesStandVisit = !0), n = L(n, t.id), n.status = `在${o}交易`, s.completed = !0, s.historyEntries.push({
            role: "system",
            content: `前往${o}进行交易。`
        }), s.updatedChar = n, s);
    }
    function hs(e, t) {
        const s = E(e);
        let n = {
            ...e
        };
        return n = L(n, t.id), n.status = t.content, s.completed = !0, s.historyEntries.push({
            role: "system",
            content: `执行了自定义任务: ${t.content}`
        }), s.updatedChar = n, s;
    }
    function ee(e, t, s, n, o) {
        switch(t.type){
            case "work":
                return rs(e, t);
            case "rest":
                return ls(e, t);
            case "explore":
                return cs(e, t);
            case "travel":
                return ds(e, t);
            case "consume":
                return us(e, t);
            case "social":
                return ms(e, t);
            case "respond":
                return ps(e, t);
            case "trade":
                return fs(e, t);
            case "custom":
                return hs(e, t);
            default:
                return {
                    updatedChar: C(e, t.id),
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
    function gs(e) {
        if (!e.currentTodo) return e;
        const t = e.todoList.find((s)=>s.id === e.currentTodo);
        return !t || t.status !== "in-progress" ? e : t.type === "work" || t.type === "rest" ? L(e, t.id) : e;
    }
    function ys() {
        const e = Array(P).fill(0).map(()=>Array(P).fill(0));
        for (const t of Object.values(M))if (t.grid) for(let s = 0; s < t.grid.length; s++)for(let n = 0; n < t.grid[s].length; n++){
            const o = t.grid[s][n], c = t.x + n, r = t.y + s;
            c >= 0 && c < P && r >= 0 && r < P && (o === 1 ? e[r][c] = 1 : e[r][c] = 0);
        }
        else for(let s = 0; s < t.h; s++)for(let n = 0; n < t.w; n++){
            const o = t.x + n, c = t.y + s;
            o >= 0 && o < P && c >= 0 && c < P && (e[c][o] = 1);
        }
        return {
            matrix: e,
            width: P,
            height: P
        };
    }
    function xs(e, t, s, n, o) {
        if (t < 0 || t >= e.width || s < 0 || s >= e.height || n < 0 || n >= e.width || o < 0 || o >= e.height) return [];
        const c = new re.Grid(e.matrix[0].length, e.matrix.length);
        for(let a = 0; a < e.height; a++)for(let m = 0; m < e.width; m++)e.matrix[a][m] === 1 && c.setWalkableAt(m, a, !1);
        return c.isWalkableAt(t, s) || c.setWalkableAt(t, s, !0), c.isWalkableAt(n, o) || c.setWalkableAt(n, o, !0), new re.AStarFinder({
            allowDiagonal: !0,
            dontCrossCorners: !0
        }).findPath(t, s, n, o, c);
    }
    function Ss(e, t, s, n, o) {
        if (!s || s.length < 2) return {
            x: e,
            y: t,
            completed: !0,
            reachedNextTile: !1
        };
        const c = s[1][0], r = s[1][1], l = c - e, a = r - t, m = Math.sqrt(l * l + a * a), f = n * o;
        if (f >= m) return {
            x: c,
            y: r,
            completed: s.length <= 2,
            reachedNextTile: !0
        };
        const d = f / m;
        return {
            x: e + l * d,
            y: t + a * d,
            completed: !1,
            reachedNextTile: !1
        };
    }
    function vs(e) {
        return {
            Working: 1.5,
            Sleeping: 0,
            Idle: .8
        }[e] || 1;
    }
    function Ts(e) {
        return {
            Working: 1.3,
            Sleeping: 0,
            Idle: .7
        }[e] || 1;
    }
    function js(e) {
        return e >= 22 || e <= 6 ? 1.2 : e >= 8 && e <= 18 ? 1 : 1.1;
    }
    function bs(e, t, s, n, o, c) {
        let r = {
            ...e
        };
        if (r.taskName === "Working" && r.taskTarget) {
            const a = is(r, r.taskTarget);
            r = a.char, t(`${e.name} 工作完成，${a.log}`, "系统", "sys");
        } else if (r.taskName === "Sleeping") {
            const a = qe, m = r.home.level, f = 15, d = 12, h = 5, x = .8 + m / 5 * .4, p = Math.round(f * a * x), g = Math.round(d * a * x), u = Math.round(h * a * x);
            r = os(r, p, g, u), t(`${e.name} 睡醒了，体力+${p}，活力+${g}，愉悦+${u}。`, "系统", "sys");
        }
        r = gs(r);
        const l = Pe(r, c);
        if (l) {
            const a = ee(r, l);
            r = a.updatedChar;
            for (const m of a.logs)t(m.content, m.source, m.type);
        }
        return r;
    }
    function Ns(e, t, s) {
        let n = {
            ...e
        };
        if (n.stamina <= 6) {
            const o = ss(n);
            o.consumed && (n = o.char, t(`${e.name} 吃了面包，体力+${b.BREAD.stamina}`, "系统", "sys"));
        }
        if (n.happiness <= 30) {
            const o = ns(n);
            o.consumed && (n = o.char, t(`${e.name} 喝了果汁，愉悦值+${b.JUICE.happiness}`, "系统", "sys"));
        }
        return n = Cs(n, t, s), n;
    }
    const ks = 2;
    function Cs(e, t, s) {
        if (e.stamina <= 0 && !e.faintedState?.isFainted) {
            const n = {
                isFainted: !0,
                faintedTime: s,
                recoveryTime: s + ks,
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
    function ws(e, t, s, n, o, c) {
        let r = {
            ...e
        };
        if (r.pendingMoveTo) {
            const a = r.currentPath && r.currentPath.length > 1;
            if (r.gridX === r.pendingMoveTo.x && r.gridY === r.pendingMoveTo.y) r.pendingMoveTo = void 0, r.targetLocationName && (r.locationName = r.targetLocationName, r.targetLocationName = void 0);
            else if (!a) {
                const f = ys(), d = r.visualX !== void 0 ? Math.round(r.visualX) : r.gridX, h = r.visualY !== void 0 ? Math.round(r.visualY) : r.gridY, x = xs(f, d, h, r.pendingMoveTo.x, r.pendingMoveTo.y);
                if (x.length > 1) r.currentPath = x, r.gridX = d, r.gridY = h, r.visualX === void 0 && (r.visualX = d), r.visualY === void 0 && (r.visualY = h);
                else {
                    const p = r.targetLocationName;
                    r.currentPath = void 0, r.targetLocationName = void 0, r.currentTodo && (r = C(r, r.currentTodo)), r.status = "空闲", r.thought = p ? `暂时无法到达${p}。` : "暂时无法到达目标。", s(p ? `${r.name} 无法找到前往${p}的路径。` : `${r.name} 无法找到前往目标的路径。`, "系统", "sys");
                }
                r.pendingMoveTo = void 0;
            }
        }
        const l = c > 0 && c % Ve === 0;
        if (l && r.taskName !== "Sleeping") {
            const m = .8 + Math.random() * .4, f = vs(r.taskName), d = Math.round(5 * m * f);
            r.stamina = Math.max(0, r.stamina - d);
        }
        if (l && r.taskName !== "Sleeping") {
            const m = .8 + Math.random() * .4, f = Ts(r.taskName), d = js(t.hour), h = Math.round(4 * m * f * d);
            r.energy = Math.max(0, r.energy - h);
        }
        return r.taskTimer > 0 ? (r.taskTimer--, r.taskTimer === 0 && (r = bs(r, s, n, o, t, c))) : r = Ns(r, s, c), r;
    }
    const I = {
        minInterval: 10,
        maxInterval: 18,
        staminaThreshold: 15,
        happinessThreshold: 25,
        energyThreshold: .25
    };
    function pe(e, t) {
        const s = t - e.lastThinkTick;
        if (e.currentPath && e.currentPath.length > 1 || e.taskName === "Sleeping") return null;
        const n = e.taskTimer > 0;
        if (n && s < I.minInterval * 1.5) return null;
        if (!n && Ut(e) === 0 && s >= I.minInterval / 2) return {
            type: "empty-todo"
        };
        const o = I.minInterval + Math.random() * (I.maxInterval - I.minInterval);
        return s >= o ? {
            type: "periodic"
        } : (e.stamina < I.staminaThreshold || e.happiness <= I.happinessThreshold) && s >= I.minInterval * 1.5 ? {
            type: "state-change",
            context: {
                reason: e.stamina < I.staminaThreshold ? "low-stamina" : "low-happiness"
            }
        } : null;
    }
    function $s(e, t) {
        const s = e.slice(-6);
        return s.length === 0 ? "(无最近记录)" : s.map((n)=>n.content.startsWith("[内心思考]") ? `• 我想: ${n.content.replace("[内心思考] ", "")}` : n.content.startsWith("[对") || n.content.startsWith("[回应") ? `• 我说: ${n.content}` : n.role === "assistant" ? `• 我: ${n.content}` : `• ${n.content}`).join(`
`);
    }
    function Is(e) {
        return `第${e.day}天 ${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}`;
    }
    function As(e) {
        const t = e.filter((s)=>s.status === "pending").slice(0, 5);
        return t.length === 0 ? "(空)" : t.map((s)=>`- [${s.type}] ${s.content} (优先级: ${s.priority})`).join(`
`);
    }
    function Ms() {
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
    function Ps(e, t, s, n = []) {
        const o = As(e.todoList), c = Ms(), r = n.filter((u)=>u.id !== e.id && Math.abs(u.gridX - e.gridX) + Math.abs(u.gridY - e.gridY) <= 5).map((u)=>`${u.name}(在${u.locationName})`), l = r.length > 0 ? `附近的人: ${r.join(", ")}` : "附近没有人", a = n.reduce((u, S)=>{
            const v = S.targetLocationName || S.locationName;
            return v !== "Wander" && (u[v] = (u[v] ?? 0) + 1), u;
        }, {}), m = Object.entries(a).map(([u, S])=>`${u}: ${S}人`).join("，") || "各地点目前无人";
        let f = "";
        switch(t.type){
            case "empty-todo":
                f = "你的待办事项列表为空，需要规划接下来的行动。";
                break;
            case "periodic":
                f = `定时思考。${c}`;
                break;
            case "task-complete":
                f = "你刚完成了一项任务，需要规划下一步。";
                break;
            case "state-change":
                f = `你的状态发生了变化: ${t.context?.reason ?? "未知"}`;
                break;
            case "external":
                f = "外部事件触发了你的思考。";
                break;
            default:
                f = c;
        }
        const d = e.locationName !== "Wander" ? `(你在 ${e.locationName}，${l})` : `(你在闲逛中，${l})`, x = e.stamina > e.maxStamina * .8 && e.energy > e.maxEnergy * .8 ? "你现在精力充沛，应该去工作赚钱、社交或探索，而不是继续休息。" : "", p = Object.entries(e.inventory).filter(([, u])=>u > 0).map(([u, S])=>`${u}x${S}`).join(", ") || "空", g = `
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
**注意**: 如果你正在工作(${e.taskName})，你只能发起 social 任务，不能离开当前地点。
**分流建议**: 如果多个地点都能满足目标，优先选择人数较少的地点，避免所有居民无缘由地集中在同一区域。`;
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
- 愉悦: ${e.happiness}/${be} ${e.happiness < 30 ? "⚠️心情差，找人聊天" : ""}
- 金钱: $${e.money} ${e.money < 30 ? "⚠️缺钱，需要工作" : ""}
- 库存: ${p}
- 位置: ${e.locationName} ${d}
- 时间: ${Is(s)}
- 你的家: ${e.homeZoneKey || "Zone_A"}
- 地点人数: ${m}

${x ? `## 💡状态提示
${x}
` : ""}

## 触发原因
${f}

## 待办事项
${o}

## 最近经历
${$s(e.history)}

${g}

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
    function Es(e) {
        if (!e) return;
        const t = e.trim().replace(/^[!！?？\s]+|[!！?？\s]+$/g, "");
        if (Y.includes(t)) return t;
        const s = t.replace(/\s+/g, "_");
        if (Y.includes(s)) return s;
        const n = t.toUpperCase().replace(/\s+/g, "_"), o = Y.find((r)=>r.toUpperCase() === n);
        if (o) return o;
        for (const r of Y)if (t.toUpperCase().includes(r.toUpperCase())) return r;
        const c = {
            HOTEL: "Zone_A",
            HOME: "Zone_A",
            HOUSE: "Zone_A",
            RESTAURANT: "Bakery",
            CAFE: "JuiceFactory",
            MARKET: "Shop",
            STREET: "SalesStand",
            CENTER: "SalesStand"
        };
        if (c[n]) return c[n];
    }
    function Ds(e) {
        try {
            const t = e.match(/\{[\s\S]*\}/);
            if (!t) return null;
            const s = JSON.parse(t[0]);
            if (!(s && s.innerThought && s.stateAssessment)) return null;
            const n = Array.isArray(s.addTodos) ? s.addTodos.map((o)=>{
                const c = o.preconditions;
                return c?.location && (c.location = Es(c.location)), o;
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
    function Rs(e, t, s) {
        return e.some((n)=>n.status === "pending" && n.type === t && (s ? n.preconditions.location === s : !0));
    }
    function Ls(e, t, s) {
        const n = [
            ...e.todoList
        ];
        for (const l of t.addTodos){
            const a = {
                ...l.preconditions
            };
            if (a.location === e.locationName && l.type === "travel") {
                console.log(`[ThinkingSystem] 跳过无效的移动任务: 已经在 ${e.locationName}`);
                continue;
            }
            if (l.type === "rest" && (a.location = e.homeZoneKey || "Zone_A"), l.type === "social" && delete a.location, Rs(n, l.type, a.location)) {
                console.log(`[ThinkingSystem] 跳过重复任务: ${l.type} at ${a.location || "any"}`);
                continue;
            }
            if (n.filter((d)=>d.status === "pending").length >= 5) {
                console.log(`[ThinkingSystem] 待办事项已满，跳过新任务: ${l.content}`);
                continue;
            }
            const f = Ee({
                type: l.type,
                content: l.content,
                priority: l.priority,
                preconditions: a,
                deadline: l.deadline,
                source: "thinking",
                relatedCharacterId: l.relatedCharacterId
            }, s);
            n.push(f);
        }
        for (const l of t.adjustPriorities){
            const a = n.findIndex((m)=>m.id === l.todoId);
            a >= 0 && (n[a] = {
                ...n[a],
                priority: l.newPriority
            });
        }
        for (const l of t.cancelTodos){
            const a = n.findIndex((m)=>m.id === l);
            a >= 0 && (n[a] = {
                ...n[a],
                status: "cancelled"
            });
        }
        const c = e.history.filter((l)=>l.content.startsWith("[内心思考]")).slice(-3).map((l)=>l.content.replace("[内心思考] ", "")).some((l)=>l === t.innerThought || l.includes(t.innerThought.slice(0, 10)));
        let r = [
            ...e.history
        ];
        return c || r.push({
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
    function Q(e) {
        const t = e.inventory, s = t[b.WHEAT.name] ?? 0, n = t[b.FLOUR.name] ?? 0, o = t[b.GRAPE.name] ?? 0;
        return s >= 20 ? {
            location: "Mill",
            content: "去磨坊把小麦磨成面粉"
        } : n >= 2 ? {
            location: "Bakery",
            content: "去面包房烘焙面包"
        } : o >= 4 ? {
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
    function fe(e) {
        const t = [];
        if (e.energy / e.maxEnergy <= I.energyThreshold) return t.push({
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
            const c = Q(e);
            return t.push({
                type: "work",
                content: c.content,
                priority: 70,
                preconditions: {
                    stamina: 20,
                    location: c.location
                }
            }), {
                innerThought: `钱不够了，${c.content}...`,
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
                content: Q(e).content,
                priority: 50,
                preconditions: {
                    stamina: 20,
                    location: Q(e).location
                }
            }
        ], o = n[Math.floor(Math.random() * n.length)];
        return t.push(o), {
            innerThought: "让我想想接下来该做什么...",
            stateAssessment: "状态正常",
            addTodos: t,
            adjustPriorities: [],
            cancelTodos: []
        };
    }
    async function Os(e, t, s, n, o) {
        try {
            const c = Ps(e, t, s, n);
            return await o([
                {
                    role: "system",
                    content: "你是一个生活在小镇中的角色。请根据当前状态进行思考，并以 JSON 格式返回你的决策。"
                },
                {
                    role: "user",
                    content: c
                }
            ]);
        } catch (c) {
            return console.error("[AI-API] 思考调用失败:", c), null;
        }
    }
    async function _s(e, t, s, n, o) {
        try {
            const c = Vt(e, t, s, n), r = [
                {
                    role: "system",
                    content: `你是 ${e.name}，正在与 ${s} 对话。请以 JSON 格式返回你的对话内容。`
                },
                {
                    role: "user",
                    content: c
                }
            ], l = await o(r);
            try {
                const a = l.match(/\{[\s\S]*\}/);
                if (a) {
                    const m = JSON.parse(a[0]);
                    return {
                        dialogue: String(m.dialogue || ""),
                        innerThought: m.innerThought ? String(m.innerThought) : void 0,
                        endConversation: !!m.endConversation
                    };
                }
            } catch  {
                return {
                    dialogue: l.slice(0, 50),
                    endConversation: !1
                };
            }
            return null;
        } catch (c) {
            return console.error("[AI-API] 对话调用失败:", c), null;
        }
    }
    async function Bs(e, t, s) {
        try {
            const n = e.history.slice(-10).map((l)=>`[${l.role === "assistant" ? "我" : "系统/他人"}] ${l.content}`).join(`
`), o = `你是 ${e.name}，${e.personality}。

## 今天是第 ${t.day} 天

## 今日状态
- 金钱: $${e.money}
- 体力: ${e.stamina}/${e.maxStamina}
- 活力: ${e.energy}/${e.maxEnergy}
- 愉悦: ${e.happiness}/100
- 住房: ${e.home.name}

## 库存
${Object.entries(e.inventory).map(([l, a])=>`- ${l}: ${a}`).join(`
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
                    content: o
                }
            ]);
            try {
                const l = r.match(/\{[\s\S]*\}/);
                if (l) {
                    const a = JSON.parse(l[0]);
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
    function Fs(e) {
        return e.hour === Qe && e.minute >= oe && e.minute < oe + je;
    }
    function Ws() {
        const { callLLMStream: e } = jt(), t = T.useRef({
            pendingThinking: new Set,
            pendingDialogue: new Set
        }), s = T.useCallback(()=>y.currentSession, []), n = T.useCallback(async (d, h)=>{
            let x = "";
            return await e(d.map((p)=>({
                    role: p.role,
                    content: p.content,
                    id: Math.random().toString(36).substring(7)
                })), (p, g)=>{
                x = g, h && y.updateCharacterState(h, {
                    thought: `Thinking... ${g.slice(-50)}`
                });
            }), x;
        }, [
            e
        ]), o = T.useCallback(async (d, h)=>{
            const x = await Bs(d, h, n);
            x && (y.updateCharacterState(d.id, {
                dailyEntry: x.diary,
                dailyWisdom: x.wisdom,
                wroteDiaryToday: !0
            }), y.addLog(`${d.name} 写完了今日日记`, "系统", "sys"));
        }, [
            n
        ]), c = T.useCallback(async (d, h, x)=>{
            const p = pe(d, x);
            if (!p) return;
            console.log(`[ThinkingSystem] ${d.name} 触发思考: ${p.type}`);
            const g = Object.values(y.currentSession?.modeState.characterStates || {}), u = await Os(d, p, h, g, (j)=>n(j, d.id));
            let S;
            u ? S = Ds(u) || fe(d) : S = fe(d);
            const v = Ls(d, S, x);
            if (y.setCharacterState(d.id, v), S.addTodos.length > 0) {
                const j = S.addTodos.map((N)=>N.content).join("、");
                y.addLog(`${d.name} 计划: ${j}`, "系统", "sys");
            }
        }, [
            n
        ]), r = T.useCallback(async (d, h, x, p)=>{
            let g = h.relatedCharacterId, u = null;
            if (h.type === "social" && !g) {
                if (u = qt(d, x), !u) {
                    y.updateCharacterState(d.id, C(d, h.id)), y.addLog(`${d.name} 想找人聊天，但周围没有人`, "系统", "sys");
                    return;
                }
                g = u.id, console.log(`[AIDecision] ${d.name} 主动找 ${u.name} 聊天`);
            }
            if (!g) {
                y.updateCharacterState(d.id, C(d, h.id));
                return;
            }
            if (u || (u = x.find((j)=>j.id === g)), !u) {
                y.updateCharacterState(d.id, C(d, h.id));
                return;
            }
            const S = h.type === "social", v = await _s(d, g, u.name, S, n);
            if (v && v.dialogue) {
                const j = S ? "对" : "回应";
                y.addLog(zt(u.name, v.dialogue, S), d.name, "chat");
                const N = [
                    ...d.history,
                    {
                        role: "assistant",
                        content: `[${j}${u.name}说] ${v.dialogue}`
                    }
                ];
                let k = {
                    ...d,
                    history: N,
                    thought: v.innerThought || d.thought,
                    lastDialogue: {
                        content: v.dialogue,
                        timestamp: Date.now()
                    }
                };
                if (k = L(k, h.id), v.endConversation && (k = Kt(k, g)), y.setCharacterState(d.id, k), u.aiEnabled) {
                    const D = Zt(u, d.id, d.name, v.dialogue, p);
                    y.setCharacterState(g, D.updatedChar), D.shouldRespond && console.log(`[AIDecision] ${u.name} 决定回应 ${d.name} 的对话`);
                }
            } else y.updateCharacterState(d.id, C(d, h.id)), y.addLog(`${d.name} 似乎不知道该对 ${u.name} 说什么...`, "系统", "sys");
        }, [
            n
        ]), l = T.useCallback(async (d, h, x, p, g)=>{
            if (d.currentPath && d.currentPath.length > 1 || d.taskTimer > 0) return;
            const u = me(d);
            if (u && u.status === "in-progress") {
                if (u.type === "respond" || u.type === "social") {
                    await r(d, u, x, g);
                    return;
                }
                if (u.type === "work" || u.type === "rest") {
                    const j = ee(d, u);
                    y.updateCharacterState(d.id, {
                        ...j.updatedChar,
                        history: [
                            ...d.history,
                            ...j.historyEntries
                        ]
                    });
                    for (const N of j.logs)y.addLog(N.content, N.source, N.type);
                    return;
                }
                y.updateCharacterState(d.id, L(d, u.id));
                return;
            }
            const S = Pe(d, g);
            if (!S) return;
            const v = ee(d, S);
            y.updateCharacterState(d.id, {
                ...v.updatedChar,
                history: [
                    ...d.history,
                    ...v.historyEntries
                ]
            });
            for (const j of v.logs)y.addLog(j.content, j.source, j.type);
        }, [
            r
        ]), a = T.useCallback((d)=>d.status === "晕倒" || d.faintedState?.isFainted ? "fainted" : d.status.includes("睡觉") || d.status.includes("休息中") ? "sleeping" : d.taskTimer > 0 ? "working" : "idle", []), m = T.useCallback(async (d)=>{
            const h = s();
            if (!h || !h.modeConfig.settings.aiEnabled) return !1;
            const p = h.modeState.characterStates[d];
            if (!(p && p.aiEnabled) || t.current.pendingThinking.has(d)) return !1;
            const g = a(p);
            if (g === "sleeping" || g === "fainted") return !1;
            let u = !1;
            try {
                const S = h.modeState.gameTime, v = h.modeState.tickCount;
                if (Fs(S) && !p.wroteDiaryToday) return await o(p, S), !0;
                if (pe(p, v) !== null) {
                    t.current.pendingThinking.add(d);
                    try {
                        await c(p, S, v), u = !0;
                    } finally{
                        t.current.pendingThinking.delete(d);
                    }
                }
                const N = s(), k = N?.modeState.characterStates[d], D = Object.values(N?.modeState.characterStates || {});
                if (k) {
                    const Z = me(k), _e = Z && (Z.type === "social" || Z.type === "respond");
                    await l(k, S, D, N?.modeState.salesStand || [], v), _e && (u = !0);
                }
            } catch (S) {
                console.error(`AI processing error for ${p.name}:`, S), y.updateCharacterState(p.id, {
                    status: "AI Error"
                });
            }
            return u;
        }, [
            s,
            a,
            o,
            c,
            l
        ]);
        return {
            processAllAI: T.useCallback(async ()=>{
                const d = s();
                if (!(d && d.modeConfig.settings.aiEnabled)) return !1;
                const h = Object.values(d.modeState.characterStates), x = 3;
                let p = !1;
                const g = [];
                for(let u = 0; u < h.length; u += x)g.push(h.slice(u, u + x));
                return await g.reduce(async (u, S)=>{
                    await u;
                    const v = S.map((N)=>m(N.id));
                    (await Promise.all(v)).some((N)=>N) && (p = !0);
                }, Promise.resolve()), p;
            }, [
                s,
                m
            ])
        };
    }
    function Gs(e, t) {
        y.addLog(`第 ${e} 天结束，新的一天开始了！`, "系统", "sys");
        for (const s of Object.keys(t.modeState.characterStates)){
            const n = t.modeState.characterStates[s];
            n.wroteDiaryToday = !1, n.dailyEntry = null, n.dailyWisdom = null, n.dailyShopVisit = !1, n.dailySalesStandVisit = !1, n.conversationState.totalTurnsToday = 0;
        }
    }
    function Hs() {
        const e = ve(y), t = T.useRef(null), s = T.useRef(!1), { processAllAI: n } = Ws(), o = T.useRef(n);
        o.current = n;
        const c = e.currentSession?.modeState.isRunning ?? !1, r = T.useCallback(async ()=>{
            if (!y.currentSession) return !1;
            const a = y.currentSession, { dayChanged: m, oldDay: f } = y.advanceTime();
            m && Gs(f, a);
            const d = Object.keys(a.modeState.characterStates), h = Object.values(a.modeState.characterStates), x = a.modeState.salesStand, p = a.modeState.gameTime, g = a.modeState.tickCount;
            for (const S of d){
                const v = a.modeState.characterStates[S], j = ws(v, p, (N, k, D)=>y.addLog(N, k, D), h, x, g);
                y.setCharacterState(S, j);
            }
            y.startAIProcessing(d);
            let u = !1;
            try {
                u = await o.current();
            } finally{
                y.finishAIProcessing();
            }
            return a.modeState.tickCount % 10 === 0 && await y.updateSessionInDB(), u;
        }, []), l = T.useCallback(async ()=>{
            if (s.current) {
                const f = y.currentSession?.modeConfig.settings;
                if (f?.waitForAICompletion) {
                    y.addPendingTick();
                    const d = f.maxAIWaitTicks ?? 3;
                    y.aiProcessingState.ticksPending >= d && console.warn("[SmallTown] AI 处理时间过长，已累积", d, "个 tick"), y.isAIStuck() && (console.error("[SmallTown] AI 处理超时，可能卡住了"), y.addLog("AI 处理超时，请检查网络连接", "系统", "sys"));
                }
                return;
            }
            s.current = !0;
            let a = !1;
            try {
                a = await r();
                const m = y.consumePendingTicks();
                if (m > 0) {
                    console.log(`[SmallTown] 处理累积的 ${m} 个 tick`);
                    for(let f = 0; f < m; f++)await r() && (a = !0);
                }
            } catch (m) {
                console.error("[SmallTown] Tick error:", m);
            } finally{
                s.current = !1;
            }
            if (t.current) {
                const f = y.currentSession?.modeConfig.settings, d = f?.fastTickInterval ?? 500, h = f?.normalTickInterval ?? 5e3, x = a ? h : d;
                t.current = setTimeout(l, x);
            }
        }, [
            r
        ]);
        return T.useEffect(()=>{
            if (c) {
                if (t.current) return;
                console.log("[SmallTown] Game loop started"), t.current = setTimeout(l, 0);
            } else t.current && (clearTimeout(t.current), t.current = null, console.log("[SmallTown] Game loop stopped"));
            return ()=>{
                t.current && (clearTimeout(t.current), t.current = null);
            };
        }, [
            c,
            l
        ]), {
            isRunning: c,
            aiProcessingState: e.aiProcessingState
        };
    }
    function Ys() {
        const e = T.useRef(void 0), t = T.useRef(void 0), s = T.useCallback((n)=>{
            if (t.current !== void 0) {
                const o = (n - t.current) / 1e3, c = y.currentSession;
                if (c?.modeState.isRunning) {
                    const r = c.modeState.characterStates;
                    for (const l of Object.keys(r)){
                        const a = r[l];
                        if (a.currentPath && a.currentPath.length > 1) {
                            (a.visualX === void 0 || Number.isNaN(a.visualX)) && (a.visualX = a.gridX), (a.visualY === void 0 || Number.isNaN(a.visualY)) && (a.visualY = a.gridY);
                            const f = Ss(a.visualX, a.visualY, a.currentPath, 4, o);
                            !Number.isNaN(f.x) && !Number.isNaN(f.y) && (a.visualX = f.x, a.visualY = f.y), f.reachedNextTile && (a.currentPath.shift(), a.gridX = Math.round(f.x), a.gridY = Math.round(f.y)), f.completed && (a.currentPath = void 0, a.visualX = a.gridX, a.visualY = a.gridY, a.targetLocationName && (a.locationName = a.targetLocationName, a.targetLocationName = void 0));
                        } else if ((a.visualX === void 0 || Number.isNaN(a.visualX)) && (a.visualX = a.gridX), (a.visualY === void 0 || Number.isNaN(a.visualY)) && (a.visualY = a.gridY), Math.abs(a.visualX - a.gridX) + Math.abs(a.visualY - a.gridY) < .05) a.visualX = a.gridX, a.visualY = a.gridY;
                        else {
                            const f = 10 * o;
                            a.visualX += (a.gridX - a.visualX) * f, a.visualY += (a.gridY - a.visualY) * f;
                        }
                    }
                }
            }
            t.current = n, e.current = requestAnimationFrame(s);
        }, []);
        T.useEffect(()=>(e.current = requestAnimationFrame(s), ()=>{
                e.current && cancelAnimationFrame(e.current);
            }), [
            s
        ]);
    }
    function Us({ open: e, onOpenChange: t, settings: s, onSave: n }) {
        const [o, c] = T.useState(s);
        T.useEffect(()=>{
            e && c(s);
        }, [
            e,
            s
        ]);
        const r = ()=>{
            n(o), t(!1);
        };
        return i.jsx(Ce, {
            open: e,
            onOpenChange: t,
            children: i.jsxs(we, {
                className: "sm:max-w-[425px]",
                children: [
                    i.jsxs($e, {
                        children: [
                            i.jsx(Ie, {
                                children: "小镇设置"
                            }),
                            i.jsx(Ae, {
                                children: "调整游戏运行参数和 AI 行为。"
                            })
                        ]
                    }),
                    i.jsxs("div", {
                        className: "grid gap-4 py-4",
                        children: [
                            i.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    i.jsxs(_, {
                                        htmlFor: "ai-enabled",
                                        className: "flex flex-col gap-1",
                                        children: [
                                            i.jsx("span", {
                                                children: "启用 AI 决策"
                                            }),
                                            i.jsx("span", {
                                                className: "font-normal text-xs text-muted-foreground",
                                                children: "关闭后角色将停止自主思考"
                                            })
                                        ]
                                    }),
                                    i.jsx(le, {
                                        id: "ai-enabled",
                                        checked: o.aiEnabled,
                                        onCheckedChange: (l)=>c((a)=>({
                                                    ...a,
                                                    aiEnabled: l
                                                }))
                                    })
                                ]
                            }),
                            i.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    i.jsxs(_, {
                                        htmlFor: "wait-ai",
                                        className: "flex flex-col gap-1",
                                        children: [
                                            i.jsx("span", {
                                                children: "等待 AI 完成 (强一致性)"
                                            }),
                                            i.jsx("span", {
                                                className: "font-normal text-xs text-muted-foreground",
                                                children: "Tick 只有在 AI 思考完后才继续"
                                            })
                                        ]
                                    }),
                                    i.jsx(le, {
                                        id: "wait-ai",
                                        checked: o.waitForAICompletion,
                                        onCheckedChange: (l)=>c((a)=>({
                                                    ...a,
                                                    waitForAICompletion: l
                                                }))
                                    })
                                ]
                            }),
                            i.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                    i.jsxs(_, {
                                        children: [
                                            "快速 Tick (无 AI 时) - ",
                                            o.fastTickInterval,
                                            "ms"
                                        ]
                                    }),
                                    i.jsx(ae, {
                                        min: 100,
                                        max: 2e3,
                                        step: 100,
                                        value: [
                                            o.fastTickInterval
                                        ],
                                        onValueChange: ([l])=>c((a)=>({
                                                    ...a,
                                                    fastTickInterval: l
                                                }))
                                    })
                                ]
                            }),
                            i.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                    i.jsxs(_, {
                                        children: [
                                            "正常 Tick (有 AI 时) - ",
                                            o.normalTickInterval,
                                            "ms"
                                        ]
                                    }),
                                    i.jsx(ae, {
                                        min: 1e3,
                                        max: 1e4,
                                        step: 500,
                                        value: [
                                            o.normalTickInterval
                                        ],
                                        onValueChange: ([l])=>c((a)=>({
                                                    ...a,
                                                    normalTickInterval: l
                                                }))
                                    })
                                ]
                            }),
                            i.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    i.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                            i.jsx(_, {
                                                children: "工作时长 (Tick)"
                                            }),
                                            i.jsx(ce, {
                                                type: "number",
                                                value: o.workingInterval,
                                                onChange: (l)=>c((a)=>({
                                                            ...a,
                                                            workingInterval: Number(l.target.value)
                                                        }))
                                            })
                                        ]
                                    }),
                                    i.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                            i.jsx(_, {
                                                children: "空闲时长 (Tick)"
                                            }),
                                            i.jsx(ce, {
                                                type: "number",
                                                value: o.idleInterval,
                                                onChange: (l)=>c((a)=>({
                                                            ...a,
                                                            idleInterval: Number(l.target.value)
                                                        }))
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    i.jsxs(bt, {
                        children: [
                            i.jsx(w, {
                                variant: "outline",
                                onClick: ()=>t(!1),
                                children: "取消"
                            }),
                            i.jsx(w, {
                                onClick: r,
                                children: "保存更改"
                            })
                        ]
                    })
                ]
            })
        });
    }
    function zs({ open: e, onOpenChange: t, character: s }) {
        if (!s) return null;
        const n = [
            ...s.dailyLog
        ].sort((o, c)=>c.day - o.day);
        return i.jsx(Ce, {
            open: e,
            onOpenChange: t,
            children: i.jsxs(we, {
                className: "sm:max-w-[600px] max-h-[80vh] flex flex-col",
                children: [
                    i.jsxs($e, {
                        children: [
                            i.jsxs(Ie, {
                                className: "flex items-center gap-2",
                                children: [
                                    i.jsx("div", {
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
                            i.jsx(Ae, {
                                children: "记录了每天发生的事情和感悟。"
                            })
                        ]
                    }),
                    i.jsx(te, {
                        className: "flex-1 pr-4 -mr-4",
                        children: i.jsx("div", {
                            className: "space-y-6 py-4",
                            children: n.length === 0 ? i.jsx("div", {
                                className: "text-center text-muted-foreground py-10",
                                children: "还没有写过日记..."
                            }) : n.map((o)=>i.jsxs("div", {
                                    className: "border rounded-lg p-4 bg-card/50 space-y-3",
                                    children: [
                                        i.jsxs("div", {
                                            className: "flex items-center justify-between border-b pb-2",
                                            children: [
                                                i.jsxs("h3", {
                                                    className: "font-semibold",
                                                    children: [
                                                        "第 ",
                                                        o.day,
                                                        " 天"
                                                    ]
                                                }),
                                                i.jsxs("span", {
                                                    className: "text-xs text-muted-foreground bg-muted px-2 py-1 rounded",
                                                    children: [
                                                        "策略: ",
                                                        o.strategy
                                                    ]
                                                })
                                            ]
                                        }),
                                        i.jsxs("div", {
                                            className: "space-y-1",
                                            children: [
                                                i.jsx("h4", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "今日记事"
                                                }),
                                                i.jsx("p", {
                                                    className: "text-sm leading-relaxed whitespace-pre-wrap",
                                                    children: o.dailyEntry
                                                })
                                            ]
                                        }),
                                        o.dailyWisdom && i.jsxs("div", {
                                            className: "space-y-1 bg-primary/5 p-3 rounded border border-primary/10",
                                            children: [
                                                i.jsx("h4", {
                                                    className: "text-xs font-medium text-primary",
                                                    children: "每日感悟"
                                                }),
                                                i.jsxs("p", {
                                                    className: "text-sm italic text-muted-foreground",
                                                    children: [
                                                        '"',
                                                        o.dailyWisdom,
                                                        '"'
                                                    ]
                                                })
                                            ]
                                        }),
                                        i.jsxs("div", {
                                            className: "pt-2 border-t flex gap-4 text-xs text-muted-foreground",
                                            children: [
                                                i.jsxs("span", {
                                                    children: [
                                                        "💰 $",
                                                        o.endStatus.money
                                                    ]
                                                }),
                                                i.jsxs("span", {
                                                    children: [
                                                        "⚡️ ",
                                                        o.endStatus.stamina
                                                    ]
                                                }),
                                                i.jsxs("span", {
                                                    children: [
                                                        "😄 ",
                                                        o.endStatus.happiness
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, o.day))
                        })
                    })
                ]
            })
        });
    }
    function Xs({ className: e, ...t }) {
        return i.jsx(Fe, {
            "data-slot": "resizable-panel-group",
            className: J("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", e),
            ...t
        });
    }
    function he({ ...e }) {
        return i.jsx(We, {
            "data-slot": "resizable-panel",
            ...e
        });
    }
    function Js({ withHandle: e, className: t, ...s }) {
        return i.jsx(Ge, {
            "data-slot": "resizable-handle",
            className: J("bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90", t),
            ...s,
            children: e && i.jsx("div", {
                className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border",
                children: i.jsx(ut, {
                    className: "size-2.5"
                })
            })
        });
    }
    const ge = 1.2, ye = .8, xe = 1.8, Se = .1, Zs = 100;
    function Ks({ sessionId: e }) {
        const t = ve(y), [s, n] = T.useState(null), [o, c] = T.useState(!1), [r, l] = T.useState(!1), [a, m] = T.useState(!0), [f, d] = T.useState(ge), h = T.useCallback((v)=>{
            y.currentSession && (y.currentSession.modeConfig.settings = v, y.updateSessionInDB());
        }, []), { isRunning: x } = Hs();
        Ys();
        const p = T.useCallback((v)=>{
            n(v);
        }, []), g = t.currentSession, u = g ? Object.values(g.modeState.characterStates) : [];
        if (T.useEffect(()=>{
            !s && u.length > 0 && n(u[0].id);
        }, [
            u,
            s
        ]), !g) return i.jsx("div", {
            className: "flex items-center justify-center h-full",
            children: i.jsx("p", {
                className: "text-muted-foreground",
                children: "加载中..."
            })
        });
        const S = s ? g.modeState.characterStates[s] : null;
        return i.jsxs("div", {
            className: "flex flex-col h-full bg-background",
            children: [
                i.jsx(Ct, {
                    gameTime: g.modeState.gameTime,
                    isRunning: x,
                    isSidebarOpen: a,
                    onToggle: ()=>y.toggle(),
                    onToggleSidebar: ()=>m((v)=>!v),
                    onSettings: ()=>c(!0)
                }),
                i.jsxs("div", {
                    className: "flex min-h-0 flex-1 overflow-hidden",
                    children: [
                        i.jsx("div", {
                            className: "min-w-0 flex-1 p-3",
                            children: i.jsxs(Xs, {
                                direction: "vertical",
                                className: "overflow-hidden rounded-lg",
                                children: [
                                    i.jsx(he, {
                                        defaultSize: 68,
                                        minSize: 35,
                                        children: i.jsxs("div", {
                                            className: "flex h-full min-h-0 flex-col rounded-lg border bg-card",
                                            children: [
                                                i.jsxs("div", {
                                                    className: "flex items-center justify-between border-b px-3 py-1.5",
                                                    children: [
                                                        i.jsxs("div", {
                                                            children: [
                                                                i.jsx("p", {
                                                                    className: "text-sm font-medium",
                                                                    children: g.modeConfig.worldName
                                                                }),
                                                                i.jsx("p", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: "点击居民可查看详情"
                                                                })
                                                            ]
                                                        }),
                                                        i.jsxs("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                i.jsxs("span", {
                                                                    className: "mr-1 text-xs tabular-nums text-muted-foreground",
                                                                    children: [
                                                                        Math.round(f * Zs),
                                                                        "%"
                                                                    ]
                                                                }),
                                                                i.jsx(w, {
                                                                    type: "button",
                                                                    variant: "ghost",
                                                                    size: "icon-sm",
                                                                    onClick: ()=>d((v)=>Math.max(ye, Number((v - Se).toFixed(1)))),
                                                                    disabled: f <= ye,
                                                                    "aria-label": "缩小地图",
                                                                    title: "缩小地图",
                                                                    children: i.jsx(mt, {})
                                                                }),
                                                                i.jsx(w, {
                                                                    type: "button",
                                                                    variant: "ghost",
                                                                    size: "icon-sm",
                                                                    onClick: ()=>d(ge),
                                                                    "aria-label": "重置地图缩放",
                                                                    title: "重置地图缩放",
                                                                    children: i.jsx(pt, {})
                                                                }),
                                                                i.jsx(w, {
                                                                    type: "button",
                                                                    variant: "ghost",
                                                                    size: "icon-sm",
                                                                    onClick: ()=>d((v)=>Math.min(xe, Number((v + Se).toFixed(1)))),
                                                                    disabled: f >= xe,
                                                                    "aria-label": "放大地图",
                                                                    title: "放大地图",
                                                                    children: i.jsx(ft, {})
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                i.jsx("div", {
                                                    className: "min-h-0 flex-1 overflow-auto",
                                                    children: i.jsx("div", {
                                                        className: "flex min-h-full min-w-max items-center justify-center p-4",
                                                        children: i.jsx(Ot, {
                                                            characterStates: u,
                                                            selectedCharacterId: s,
                                                            onSelectCharacter: p,
                                                            zoom: f
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    i.jsx(Js, {
                                        withHandle: !0,
                                        className: "my-1"
                                    }),
                                    i.jsx(he, {
                                        defaultSize: 32,
                                        minSize: 18,
                                        children: i.jsx(es, {
                                            contextItems: t.historyItems,
                                            selectedCharacter: S || null
                                        })
                                    })
                                ]
                            })
                        }),
                        a && i.jsx(Bt, {
                            character: S || null,
                            characters: u,
                            selectedCharacterId: s,
                            gameTime: g.modeState.gameTime,
                            onSelectCharacter: p,
                            onOpenDiary: ()=>l(!0)
                        })
                    ]
                }),
                g && i.jsx(Us, {
                    open: o,
                    onOpenChange: c,
                    settings: g.modeConfig.settings,
                    onSave: h
                }),
                i.jsx(zs, {
                    open: r,
                    onOpenChange: l,
                    character: S || null
                })
            ]
        });
    }
    const Vs = Xe.extend({
        mode: Nt("small-town"),
        modeConfig: tt,
        modeState: et
    });
    function qs(e) {
        const t = Vs.safeParse(e);
        return t.success ? t.data : void 0;
    }
    Gn = function({ sessionId: e }) {
        const { data: t = [] } = He((n)=>n.from({
                s: Ue
            }).where(({ s: o })=>Ye(o.id, e))), s = qs(t[0]);
        return T.useEffect(()=>{
            if (!s || y.currentSession?.id === e) return;
            (async ()=>{
                try {
                    const r = {
                        historyItems: await new ze(e).getContextItems(),
                        processingItem: void 0
                    };
                    y.loadSession(s, r);
                } catch (o) {
                    console.error("[SmallTown] 加载会话失败:", o);
                }
            })();
        }, [
            s,
            e
        ]), T.useEffect(()=>()=>{
                y.unloadSession();
            }, []), s ? s.mode !== "small-town" ? i.jsx("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
            children: i.jsx("p", {
                children: "会话模式不匹配"
            })
        }) : i.jsx(Ks, {
            sessionId: e
        }) : i.jsx("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
            children: i.jsx("p", {
                children: "会话不存在或已删除"
            })
        });
    };
});
export { Gn as SessionMainForSmallTown, __tla };
