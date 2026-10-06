const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-D7jNVRco.js","assets/react-fSTcKjfW.js","assets/vendor-BJngdH18.js","assets/formatting-C21BZ038.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/components-and-styling-jbG8BFt3.js","assets/icons-b8rFmPuv.js","assets/@tailwind-D8xBRFud.js","assets/bubble-ChBk6qjY.js","assets/alert-CKYEc62b.js","assets/shadcn-utils-Efc1-GKt.js","assets/button-CvciAjOp.js","assets/spinner-jy327NBe.js","assets/skeleton-B1Mg49M1.js","assets/conversation-message-B4WPe1h6.js","assets/reading-settings.store-D_woaCc8.js","assets/collapsible-DLElejz2.js","assets/id-BY9c7rfI.js","assets/es-toolkit-9bjl2JfA.js","assets/empty-D6ugneX3.js","assets/input-group-wQtn5Ogz.js","assets/input-DjbKr3Kh.js","assets/textarea-C-tHSVtP.js","assets/db-master-HfEwkyJ_.js","assets/@tanstack-D9whxhel.js","assets/dexie-Blbps_14.js","assets/zod-BTj0C3yc.js","assets/analytics-Bq5IfYJy.js","assets/nex-tavern-uuid-CCor5LQR.js","assets/index-D8p9a3Ew.js","assets/index-BmePl4Qj.css","assets/db-CHGqqidi.js","assets/context-manager.class-C6sGHR0E.js","assets/display-template-2K2uLAap.js","assets/CharacterAvatar-BH9eOc3v.js","assets/character-avatar-source-DlPRh7j9.js","assets/avatar-cSs-iCw0.js","assets/useLLM-C5Knb0zQ.js","assets/tavern-model-config-button-D7VJjyvb.js","assets/tooltip-Dtj2MaSk.js","assets/responsive-dialog-Cofl85Kt.js","assets/form-width-constraints-n6SdO9NQ.js","assets/alert-dialog-Ds0XA1x4.js","assets/ai-settings-CDI4Mw0o.js","assets/tavern-llm-config-editor-Bh1jj2J-.js","assets/field-B6f_phUt.js","assets/label-Dz4kjqBb.js","assets/select-CM_o-m7J.js","assets/switch-pYzgEYFD.js","assets/back-button-BqTq4wq5.js","assets/dropdown-menu-DcMvmQgg.js","assets/InvitationGuard-B-Csyj45.js","assets/session-mode-support-Dxu3pVam.js","assets/mode-registry-BqqC7VzV.js","assets/SessionMainForChallenge-CyFqJV04.js","assets/NarrativeMessageBody-BW4KpWUE.js","assets/badge-ByVV4P-i.js","assets/card-lCw2if4G.js","assets/session-manager.class-NCfN02bx.js","assets/model-context-DwUdsj8x.js","assets/stream-display-buffer-BFr1BDyz.js","assets/SessionMainForDnd-C9LBAUpZ.js","assets/progress-DxYRPg0L.js","assets/SessionMainForGroupChat-CzFIjjte.js","assets/SessionMainForSmallTown-DzVEsEti.js","assets/slider-BkOqoDuS.js","assets/AutoScrollDownArea-BaVjbVYa.js","assets/toggle-group-IBif9etC.js","assets/SessionMainForNovelWriting-DsxWxjil.js","assets/SessionMainForBalanceAdventure-DYKL5RZo.js","assets/balance-adventure-items-CEYSN6gM.js"])))=>i.map(i=>d[i]);
import { c as B, _ as g, __tla as __tla_0 } from "./index-D8p9a3Ew.js";
import { r as p, j as t, t as _ } from "./react-fSTcKjfW.js";
import { T as F, S as U } from "./tavern-model-config-button-D7VJjyvb.js";
import { B as L } from "./back-button-BqTq4wq5.js";
import { m as z, k as V, n as J } from "./@tanstack-D9whxhel.js";
import { B as W } from "./button-CvciAjOp.js";
import { D as q, a as G, b as H, e as K, c as Q, d as b } from "./dropdown-menu-DcMvmQgg.js";
import { m as w, b as X, S as Y } from "./db-master-HfEwkyJ_.js";
import { d as Z } from "./display-template-2K2uLAap.js";
import { g as ee, D as v, i as te, I as ne, u as k } from "./icons-b8rFmPuv.js";
import { D as se, f as re, R as ae, a as ie, b as oe, c as ce, g as le } from "./responsive-dialog-Cofl85Kt.js";
import { E as N, a as M, b as I, c as A, d as T } from "./empty-D6ugneX3.js";
import { I as de } from "./InvitationGuard-B-Csyj45.js";
import { t as ue } from "./analytics-Bq5IfYJy.js";
import { d as me, i as E, a as pe } from "./session-mode-support-Dxu3pVam.js";
let S, tt, et, Qe, ye, ge, Xe, Ze, Ke, he, Ye, nt;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    function fe(e, s) {
        return (s ? e.replace(/&(?:#x?[\da-f]*|[a-z]*)$/i, "") : e).replace(/&(amp|lt|gt|quot|apos|#\d+|#x[\da-f]+);/gi, (n, i)=>{
            const a = {
                amp: "&",
                lt: "<",
                gt: ">",
                quot: '"',
                apos: "'"
            };
            if (i in a) return a[i];
            const o = i.startsWith("#x") ? Number.parseInt(i.slice(2), 16) : Number(i.slice(1));
            return o > 0 && o <= 1114111 && !(o >= 55296 && o <= 57343) ? String.fromCodePoint(o) : n;
        });
    }
    he = function(e, s = !1) {
        const r = [];
        let n = "text", i = 0, a = 0;
        const o = (c, d = !1)=>{
            const l = fe(e.slice(i, c), d);
            l.trim() && r.push({
                kind: n,
                text: l,
                key: i
            });
        };
        for(; a < e.length;){
            const c = e.indexOf("<", a);
            if (c < 0) break;
            const d = e.slice(c), l = /^<\/?(think|speak|action)\s*>/i.exec(d);
            if (l) {
                o(c), n = d.startsWith("</") ? "text" : l[1].toLowerCase(), a = i = c + l[0].length;
                continue;
            }
            const u = d.toLowerCase();
            if ([
                "think",
                "speak",
                "action"
            ].some((m)=>[
                    `<${m}>`,
                    `</${m}>`
                ].some((f)=>f.startsWith(u))) || /^<\/?(?:think|speak|action)\s*$/i.test(d)) return o(c), {
                segments: r,
                thinking: s && n === "think"
            };
            a = c + 1;
        }
        return o(e.length, s), {
            segments: r,
            thinking: s && n === "think"
        };
    };
    const $ = [
        "力量",
        "敏捷",
        "体质",
        "智力",
        "感知",
        "魅力"
    ], xe = {
        力量: "力量",
        str: "力量",
        strength: "力量",
        敏捷: "敏捷",
        dex: "敏捷",
        dexterity: "敏捷",
        灵巧: "敏捷",
        体质: "体质",
        con: "体质",
        constitution: "体质",
        耐力: "体质",
        智力: "智力",
        int: "智力",
        intelligence: "智力",
        学识: "智力",
        感知: "感知",
        wis: "感知",
        wisdom: "感知",
        洞察: "感知",
        察觉: "感知",
        魅力: "魅力",
        cha: "魅力",
        charisma: "魅力",
        交涉: "魅力"
    };
    ge = function(e) {
        return Math.floor((e - 10) / 2);
    };
    function C(e, s) {
        const r = Math.floor(Math.random() * 20) + 1, n = r + s;
        return {
            naturalRoll: r,
            total: n,
            modifier: s,
            isSuccess: n >= e
        };
    }
    Ke = function(e, s) {
        const r = P(e.attribute), n = r ? s[r] : void 0;
        if (typeof n != "number") return console.warn("[DndUtils] 检定属性无效，按 +0 修正处理", {
            rawAttribute: e.attribute,
            normalizedAttribute: r,
            availableAttributes: Object.keys(s)
        }), C(e.dc, 0);
        const i = ge(n);
        return C(e.dc, i);
    };
    Qe = function(e) {
        try {
            const s = e.match(/```(?:json)?\s*\n?([\s\S]*?)```/), r = s ? s[1].trim() : e.trim(), n = r.indexOf("{"), i = r.lastIndexOf("}") + 1;
            if (n < 0 || i <= n) return console.warn("[DndUtils] 检定决策解析失败：未找到 JSON 块", e.slice(0, 200)), null;
            const a = JSON.parse(r.slice(n, i));
            if (a.none === !0 || a.none === "true") return {
                needsCheck: !1
            };
            const o = a.playerId || a.player_id || a.角色ID || a.执行者ID, c = a.attribute || a.属性 || a.检定维度, d = typeof o == "string" ? o.trim() : "", l = P(c), u = Number(a.dc || a.DC || a.目标数值 || a.难度 || 0);
            return d && l && Number.isFinite(u) && u > 0 ? {
                needsCheck: !0,
                checkSpec: {
                    intent: String(a.intent || a.意图 || a.reason || a.具体意图 || ""),
                    type: [
                        "attribute",
                        "saving",
                        "attack"
                    ].includes(a.type) ? a.type : "attribute",
                    attribute: l,
                    dc: u,
                    playerId: d
                }
            } : (l || console.warn("[DndUtils] 检定属性解析失败，原始值:", c), console.warn("[DndUtils] 检定决策 JSON 字段不完整:", a), null);
        } catch (s) {
            return console.warn("[DndUtils] 检定决策解析异常:", s, e.slice(0, 200)), null;
        }
    };
    Xe = function(e) {
        try {
            const s = e.indexOf("{"), r = e.lastIndexOf("}") + 1;
            if (s < 0 || r <= s) return null;
            const n = JSON.parse(e.slice(s, r)), i = n.nextPlayerId || n.指定的玩家ID;
            return typeof i == "string" && i.trim() ? {
                nextPlayerId: i.trim(),
                reason: n.reason || n.原因 || ""
            } : null;
        } catch  {
            return null;
        }
    };
    Ye = function(e, s) {
        return Z(e, s.charName || "角色", s.userName || "用户");
    };
    ye = function(e) {
        const { segments: s } = he(e), r = (n)=>s.filter((i)=>i.kind === n).map((i)=>i.text.trim()).join(`

`) || void 0;
        return {
            think: r("think"),
            speak: r("speak"),
            action: r("action"),
            rawText: s.filter((n)=>n.kind !== "think").map((n)=>n.text.trim()).join(`

`)
        };
    };
    Ze = function(e) {
        switch(e){
            case "narrative":
                return '【玩法模式：叙事优先】。请专注于史诗感的描述和角色情感，尽量减少不必要的频繁检定。只有在关键转折点才要求检定，且检定失败也应以"代价高昂的成功"或开启新剧情的方式处理。';
            case "hardcore":
                return "【玩法模式：硬核挑战】。请严格执行 DND 5e 规则。战斗必须凶险，检定必须频繁且严格。资源匮乏，失败可能导致严重的后果甚至死亡。";
            case "solo":
                return "【玩法模式：单人冒险】。优化互动节奏，确保唯一的玩家角色是故事的中心。DM 应更主动地推动剧情和提供环境互动的线索。";
            default:
                return "【玩法模式：标准模式】。平衡叙事与规则检定。";
        }
    };
    function je(e) {
        return $.includes(e);
    }
    function O(e) {
        const s = e.trim().replace(/["'`“”‘’]/g, "").replace(/^[\s:：-]+|[\s:：-]+$/g, "");
        if (!s) return null;
        if (je(s)) return s;
        const r = xe[s.toLowerCase()];
        if (r) return r;
        const n = $.filter((i)=>s.includes(i));
        return n.length === 1 ? n[0] : null;
    }
    function P(e) {
        if (typeof e != "string") return null;
        const s = e.trim();
        if (!s) return null;
        const r = s.replace(/[（(][^）)]*[）)]/g, ""), n = O(r);
        return n || (s.split(/[|/、,，;；或]/).map((a)=>O(a)).filter((a)=>a !== null)[0] ?? null);
    }
    const _e = new Set([
        "gc_user_message",
        "gc_character_message",
        "character_intro",
        "character_message",
        "character_message_group",
        "participant_message",
        "participant_message_group",
        "dm_intro",
        "dnd_dm_intro",
        "dnd_dm_narrate",
        "dnd_player_action",
        "dnd_system_notice",
        "challenge_mode_ending",
        "system_notification"
    ]), j = (e)=>e && typeof e == "object" ? e : {}, h = (e)=>typeof e == "string" ? e : "", R = (e)=>typeof e == "number" && Number.isFinite(e) && !Number.isNaN(new Date(e).getTime()) ? e : null;
    function Se(e, s, r, n = "角色") {
        const i = [
            r.characterSnapshot,
            ...[
                r.participantSnapshots,
                r.playerCharacterSnapshots
            ].flatMap((a)=>Array.isArray(a) ? a : [])
        ].map(j);
        return e.flatMap((a)=>{
            if (a.hidden || a.deleted || a.processing || !_e.has(a.type)) return [];
            const o = j(a.data), c = a.type === "gc_user_message" || o.isUser === !0 || o.role === "user", d = i.find((f)=>f.id === (o.characterId || o.participantId)), l = o.isDM === !0 || a.type === "dm_intro" || a.type === "dnd_dm_intro" || a.type === "dnd_dm_narrate", u = h(o.characterName) || h(o.name) || (c ? h(o.userName) || h(r.userName) || "我" : l ? "主持人" : a.type === "system_notification" ? "系统" : h(d?.name) || h(j(r.characterSnapshot).name) || n);
            return (a.type.endsWith("_group") && Array.isArray(o.list) ? o.list.map(j) : [
                o
            ]).flatMap((f)=>{
                let x = h(f.content) || (a.type === "challenge_mode_ending" ? h(f.description) : "");
                return (s === "dnd" || s === "challenge") && !c && (x = ye(x).rawText), x.trim() ? [
                    {
                        speaker: u,
                        timestamp: R(f.timestamp) ?? R(a.timestamp),
                        content: x
                    }
                ] : [];
            });
        });
    }
    function we(e, s) {
        const r = (n)=>n.replace(/[\r\n]+/g, " ").replace(/[\\`*_{}\[\]<>#]/g, "\\$&");
        return `# ${r(e)}

${s.map((n)=>`## ${r(n.speaker)}${n.timestamp === null ? "" : ` · ${new Date(n.timestamp).toISOString()}`}

${n.content}`).join(`

---

`)}
`;
    }
    function De() {
        const { sessionId: e } = z({
            strict: !1
        }), s = p.useRef(!1), [r, n] = p.useState(!1);
        async function i(a) {
            if (!(!e || s.current)) {
                s.current = !0, n(!0);
                try {
                    const o = await w.sessions.getTable().get(e);
                    if (!o) throw new Error("会话不存在");
                    const c = o.modeConfig.characterId || o.characterId, d = typeof c == "string" ? await w.characters.getTable().get(c) : void 0, l = await new X(e).getContextItems(), u = Se(l, o.mode, o.modeConfig, d?.name);
                    if (u.length === 0) {
                        _.info("还没有已保存的聊天记录");
                        return;
                    }
                    const m = o.title || "聊天记录", f = a === "md" ? we(m, u) : JSON.stringify({
                        format: "nextavern-chat-transcript",
                        version: 1,
                        title: m,
                        mode: o.mode,
                        exportedAt: new Date().toISOString(),
                        messages: u
                    }, null, 2), x = URL.createObjectURL(new Blob([
                        f
                    ], {
                        type: a === "md" ? "text/markdown;charset=utf-8" : "application/json"
                    })), y = document.createElement("a");
                    y.href = x, y.download = `${Array.from(m, (D)=>D.charCodeAt(0) < 32 ? "_" : D).join("").replace(/[<>:"/\\|?*]/g, "_").slice(0, 80)}.${a}`, document.body.append(y), y.click(), y.remove(), setTimeout(()=>URL.revokeObjectURL(x), 1e3), _.success(`已导出 ${u.length} 条消息`);
                } catch (o) {
                    _.error(o instanceof Error ? o.message : "导出失败，请重试");
                } finally{
                    s.current = !1, n(!1);
                }
            }
        }
        return e ? t.jsxs(q, {
            children: [
                t.jsx(G, {
                    asChild: !0,
                    children: t.jsx(W, {
                        type: "button",
                        variant: "ghost",
                        size: "icon",
                        "aria-label": "聊天记录操作",
                        disabled: r,
                        children: t.jsx(ee, {})
                    })
                }),
                t.jsxs(H, {
                    align: "end",
                    children: [
                        t.jsx(K, {
                            children: "导出已保存的聊天记录"
                        }),
                        t.jsxs(Q, {
                            children: [
                                t.jsxs(b, {
                                    onSelect: ()=>{
                                        i("md");
                                    },
                                    children: [
                                        t.jsx(v, {}),
                                        "Markdown 文本"
                                    ]
                                }),
                                t.jsxs(b, {
                                    onSelect: ()=>{
                                        i("json");
                                    },
                                    children: [
                                        t.jsx(v, {}),
                                        "JSON 记录"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        }) : null;
    }
    S = function({ title: e, subtitle: s, avatar: r, actions: n, exportChat: i = !1 }) {
        return t.jsx("header", {
            className: "shrink-0 border-b bg-background px-3 py-2 sm:px-5",
            children: t.jsxs("div", {
                className: "mx-auto flex w-full max-w-4xl min-w-0 items-center gap-2",
                children: [
                    t.jsx(L, {
                        compact: !0
                    }),
                    r && t.jsx("div", {
                        className: "shrink-0",
                        children: r
                    }),
                    t.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            t.jsx("h1", {
                                className: "truncate text-sm font-semibold",
                                title: e,
                                children: e
                            }),
                            s && t.jsx("p", {
                                className: "truncate text-xs text-muted-foreground",
                                title: s,
                                children: s
                            })
                        ]
                    }),
                    t.jsxs("div", {
                        className: "flex shrink-0 items-center gap-1",
                        children: [
                            n && t.jsx("fieldset", {
                                "aria-label": "会话操作",
                                className: "flex shrink-0 items-center gap-1 border-r pr-1",
                                children: n
                            }),
                            t.jsx(F, {
                                compact: !0
                            }),
                            i && t.jsx(De, {})
                        ]
                    })
                ]
            })
        });
    };
    et = function({ children: e }) {
        return t.jsx("section", {
            "aria-label": "关键状态",
            className: "max-h-28 shrink-0 overflow-y-auto overscroll-contain border-b px-3 py-2 sm:px-5",
            children: t.jsx("div", {
                className: "mx-auto flex max-w-4xl min-w-0 flex-wrap items-center gap-2",
                children: e
            })
        });
    };
    tt = function({ label: e, description: s, children: r, settings: n = !1 }) {
        return t.jsxs(se, {
            children: [
                t.jsx(re, {
                    asChild: !0,
                    children: t.jsx(U, {
                        label: e,
                        icon: n ? t.jsx(te, {
                            "data-icon": "inline-start"
                        }) : t.jsx(ne, {
                            "data-icon": "inline-start"
                        })
                    })
                }),
                t.jsxs(ae, {
                    className: "flex max-h-[85dvh] flex-col gap-0 overflow-hidden p-0 sm:max-w-xl",
                    children: [
                        t.jsxs(ie, {
                            className: "shrink-0 border-b p-4 pr-12 text-left",
                            children: [
                                t.jsx(oe, {
                                    children: e
                                }),
                                t.jsx(ce, {
                                    children: s
                                })
                            ]
                        }),
                        t.jsx(le, {
                            className: "flex flex-col gap-4 overscroll-contain p-4",
                            children: r
                        })
                    ]
                })
            ]
        });
    };
    function be(e) {
        const s = e ?? {}, r = s.modeConfig ?? {}, n = s.modeState ?? {};
        return typeof s.challengeId == "string" || typeof r.roleTaskPrompt == "string" || Array.isArray(r.goals) ? "challenge" : r.worldSnapshot !== void 0 || Array.isArray(r.playerCharacterSnapshots) ? "dnd" : Array.isArray(r.participantSnapshots) || typeof r.topic == "string" ? "group-chat" : typeof r.worldName == "string" || Array.isArray(r.characterSnapshots) || n.gameTime !== void 0 ? "small-town" : typeof r.projectName == "string" || n.progressTracking !== void 0 || n.currentChapterIndex !== void 0 ? "novel-writing" : typeof r.worldCardId == "string" && Array.isArray(r.balanceAxes) ? "balance-adventure" : "chat";
    }
    const ve = p.lazy(()=>g(()=>import("./SessionMainForChat-D7jNVRco.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54])).then((e)=>({
                default: e.SessionMainForChat
            }))), ke = p.lazy(()=>g(()=>import("./SessionMainForChallenge-CyFqJV04.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([55,1,2,3,4,5,6,7,8,9,10,11,12,13,56,17,18,19,34,57,58,16,21,22,23,25,26,24,27,28,29,30,31,32,33,59,60,20,35,36,37,61,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54])).then((e)=>({
                default: e.SessionMainForChallenge
            }))), Ne = p.lazy(()=>g(()=>import("./SessionMainForDnd-C9LBAUpZ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([62,1,2,3,4,5,6,7,8,39,12,11,40,25,26,41,42,43,17,18,19,44,45,22,46,47,48,49,21,23,10,9,13,56,58,63,15,16,24,27,28,29,30,31,32,33,59,57,61,35,36,37,50,51,34,20,52,53,54])).then((e)=>({
                default: e.SessionMainForDnd
            }))), Me = p.lazy(()=>g(()=>import("./SessionMainForGroupChat-CzFIjjte.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([64,1,2,3,4,5,6,7,8,9,10,11,12,13,58,15,16,17,18,19,21,22,23,25,26,24,27,28,29,30,31,32,33,59,57,61,60,34,35,36,37,39,40,41,42,43,44,45,46,47,48,49,50,51,20,52,53,54])).then((e)=>({
                default: e.SessionMainForGroupChat
            }))), Ie = p.lazy(()=>g(()=>import("./SessionMainForSmallTown-DzVEsEti.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([65,1,2,3,4,5,6,7,8,25,26,24,27,28,29,30,31,18,66,11,33,19,39,12,40,41,42,43,17,44,45,22,46,47,48,49,21,23,10,35,36,37,57,63,67,68,38])).then((e)=>({
                default: e.SessionMainForSmallTown
            }))), Ae = p.lazy(()=>g(()=>import("./SessionMainForNovelWriting-DsxWxjil.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([69,1,2,3,4,5,6,7,8,24,25,26,27,28,29,30,31,18,33,19,59,12,11,17,67,10,23,47,41,42,43,22,58,35,36,37,48])).then((e)=>({
                default: e.SessionMainForNovelWriting
            }))), Te = p.lazy(()=>g(()=>import("./SessionMainForBalanceAdventure-DYKL5RZo.js"), __vite__mapDeps([70,1,2,3,4,5,6,7,8,63,11,48,25,26,24,27,28,29,30,31,18,71,12,58,57,39,40,41,42,43,17,19,44,45,22,46,47,49,21,23,10,50,51,34,20,52,53,36,54])).then((e)=>({
                default: e.SessionMainForBalanceAdventure
            })));
    function Ee() {
        return t.jsx("section", {
            "aria-label": "当前会话",
            className: "flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden",
            children: t.jsx("div", {
                className: "min-h-0 min-w-0 flex-1 overflow-hidden",
                children: t.jsx(Ce, {})
            })
        });
    }
    function Ce() {
        const { sessionId: e } = B.useParams(), { data: s = [], isLoading: r, isError: n } = V((m)=>m.from({
                s: Y
            }).where(({ s: f })=>J(f.id, e)), [
            e
        ]), i = s.find((m)=>m.id === e), a = p.useRef(null), o = me(i?.mode) ? i.mode : be(i);
        if (p.useEffect(()=>{
            if (!i || E(i.mode) || a.current === i.id) return;
            a.current = i.id;
            const m = !i.analyticsFirstStartedAt;
            m && (w.sessions.update(i.id, {
                analyticsFirstStartedAt: Date.now()
            }), sessionStorage.setItem(`__NexTavern_Analytics_First_Entry__${i.id}`, "true")), ue({
                eventType: m ? "session.started.first" : "session.started.returning",
                sessionType: o,
                sessionId: i.id
            });
        }, [
            o,
            i
        ]), r) return t.jsxs("div", {
            className: "flex h-full min-h-0 flex-col",
            children: [
                t.jsx(S, {
                    title: "会话加载中"
                }),
                t.jsx("div", {
                    className: "flex flex-1 items-center justify-center text-sm text-muted-foreground",
                    role: "status",
                    children: "会话加载中..."
                })
            ]
        });
        if (n || !i) return t.jsxs("div", {
            className: "flex h-full min-h-0 flex-col",
            children: [
                t.jsx(S, {
                    title: "会话"
                }),
                t.jsx(N, {
                    className: "flex-1",
                    children: t.jsxs(M, {
                        children: [
                            t.jsx(I, {
                                variant: "icon",
                                children: t.jsx(k, {})
                            }),
                            t.jsx(A, {
                                children: n ? "会话加载失败" : "找不到这个会话"
                            }),
                            t.jsx(T, {
                                children: n ? "请刷新重试，或返回会话列表。" : "会话可能已被删除，请返回列表选择其他会话。"
                            })
                        ]
                    })
                })
            ]
        });
        if (E(i.mode)) return t.jsxs("div", {
            className: "flex h-full min-h-0 flex-col",
            children: [
                t.jsx(S, {
                    title: i.title || "会话"
                }),
                t.jsx(N, {
                    className: "flex-1",
                    children: t.jsxs(M, {
                        children: [
                            t.jsx(I, {
                                variant: "icon",
                                children: t.jsx(k, {})
                            }),
                            t.jsxs(A, {
                                children: [
                                    "暂不支持 ",
                                    pe(i.mode)
                                ]
                            }),
                            t.jsx(T, {
                                children: "当前版本无法打开此模式。会话记录仍保留，可返回会话列表选择其他会话。"
                            })
                        ]
                    })
                })
            ]
        });
        const c = `${o}:${i.id}`, d = o === "dnd" ? "dnd" : o === "small-town" ? "small-town" : void 0, l = t.jsx(p.Suspense, {
            fallback: t.jsx("div", {
                className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-4",
                children: t.jsx("p", {
                    children: "加载中..."
                })
            }),
            children: o === "dnd" ? t.jsx(Ne, {
                sessionId: e
            }, c) : o === "group-chat" ? t.jsx(Me, {
                sessionId: e
            }, c) : o === "challenge" ? t.jsx(ke, {
                sessionId: e
            }, c) : o === "small-town" ? t.jsx(Ie, {
                sessionId: e
            }, c) : o === "balance-adventure" ? t.jsx(Te, {
                sessionId: e
            }, c) : o === "novel-writing" ? t.jsx(Ae, {
                sessionId: e
            }, c) : t.jsx(ve, {
                sessionId: e
            }, c)
        }), u = o === "small-town" || o === "novel-writing" ? t.jsxs("div", {
            className: "flex h-full min-h-0 flex-col",
            children: [
                t.jsxs("nav", {
                    "aria-label": "会话导航",
                    className: "flex shrink-0 items-center justify-between border-b px-3 py-1.5 md:px-5",
                    children: [
                        t.jsx(L, {}),
                        t.jsx(F, {
                            compact: !0
                        })
                    ]
                }),
                t.jsx("div", {
                    className: "min-h-0 flex-1 overflow-hidden",
                    children: l
                })
            ]
        }) : l;
        return d ? t.jsx(de, {
            requiredFeature: d,
            children: u
        }) : u;
    }
    nt = Object.freeze(Object.defineProperty({
        __proto__: null,
        component: Ee
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { S, tt as a, et as b, Qe as c, ye as d, ge as e, Xe as f, Ze as g, Ke as h, he as p, Ye as r, nt as s, __tla };
