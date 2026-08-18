const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-8mpM8Wz7.js","assets/react-BwrVEnbn.js","assets/vendor-Btzk85e_.js","assets/formatting-Cgd9k2rU.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/db-master-DD6OhUmP.js","assets/@tanstack-DHpjEvx5.js","assets/dexie-C4f2dvgg.js","assets/zod-BOL00Oce.js","assets/analytics-CvRoWAme.js","assets/app-configurations-BLvMtL6f.js","assets/nex-tavern-uuid-BRGLU0IZ.js","assets/id-BY9c7rfI.js","assets/db-CxJzSoDx.js","assets/index-CGPGHBpG.js","assets/icons-C00G4gHY.js","assets/index-DssKCidf.css","assets/AutoScrollDownArea-Ba3IDTZB.js","assets/es-toolkit-9bjl2JfA.js","assets/shadcn-utils-Cnr6N47i.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-CPcsbTWB.js","assets/PlayerInputItem-X8k76-AI.js","assets/CharacterAvatar-AvVssCO6.js","assets/button-DfQJxXN9.js","assets/textarea-sQNmV-G1.js","assets/badge-BTwyrS6y.js","assets/useLLM-Byfd1lHl.js","assets/global-llm-config.store-CMShswv9.js","assets/SessionMainForChallenge-BvwOuCxF.js","assets/session-manager.class-AUxlG8RK.js","assets/SessionMainForDnd-BenvzSf_.js","assets/switch-BIbSASbT.js","assets/SessionMainForGroupChat-C6DqKzRI.js","assets/SessionMainForSmallTown-p3COWf3x.js","assets/slider-DSu9sj5G.js","assets/dialog-rPL2ruOj.js","assets/label-RyJAwE73.js","assets/input-Ce1w9VQ-.js","assets/SessionMainForNovelWriting-BqJUdqjv.js","assets/card-a5yXWtxZ.js","assets/select-B5xZ1tJ_.js","assets/SessionMainForBalanceAdventure-BWdFTmEN.js","assets/balance-adventure-items-DguQsxTF.js"])))=>i.map(i=>d[i]);
import { b as p, _ as i, __tla as __tla_0 } from "./index-CGPGHBpG.js";
import { r as n, j as r } from "./react-BwrVEnbn.js";
import { j as u } from "./@tanstack-DHpjEvx5.js";
import { S as f, m as _ } from "./db-master-DD6OhUmP.js";
import { I as h } from "./InvitationGuard-Bhq9ahYu.js";
import { t as y } from "./analytics-CvRoWAme.js";
import "./icons-C00G4gHY.js";
import "./vendor-Btzk85e_.js";
import "./formatting-Cgd9k2rU.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C4f2dvgg.js";
import "./zod-BOL00Oce.js";
import "./button-DfQJxXN9.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./@tailwind-CPcsbTWB.js";
import "./nex-tavern-uuid-BRGLU0IZ.js";
import "./id-BY9c7rfI.js";
import "./app-configurations-BLvMtL6f.js";
let Q;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    function S(t) {
        return t === "chat" || t === "challenge" || t === "dnd" || t === "group-chat" || t === "small-town" || t === "novel-writing" || t === "balance-adventure";
    }
    function g(t) {
        const l = t ?? {}, e = l.modeConfig ?? {}, a = l.modeState ?? {};
        return typeof l.challengeId == "string" || typeof e.roleTaskPrompt == "string" || Array.isArray(e.goals) ? "challenge" : e.worldSnapshot !== void 0 || Array.isArray(e.playerCharacterSnapshots) ? "dnd" : Array.isArray(e.participantSnapshots) || typeof e.topic == "string" ? "group-chat" : typeof e.worldName == "string" || Array.isArray(e.characterSnapshots) || a.gameTime !== void 0 ? "small-town" : typeof e.projectName == "string" || a.progressTracking !== void 0 || a.currentChapterIndex !== void 0 ? "novel-writing" : typeof e.worldCardId == "string" && Array.isArray(e.balanceAxes) ? "balance-adventure" : "chat";
    }
    const v = n.lazy(()=>i(()=>import("./SessionMainForChat-8mpM8Wz7.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29])).then((t)=>({
                default: t.SessionMainForChat
            }))), x = n.lazy(()=>i(()=>import("./SessionMainForChallenge-BvwOuCxF.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([30,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,31,23,24,25,26,27,29])).then((t)=>({
                default: t.SessionMainForChallenge
            }))), A = n.lazy(()=>i(()=>import("./SessionMainForDnd-BenvzSf_.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([32,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,31,25,26,27,29,33,24])).then((t)=>({
                default: t.SessionMainForDnd
            }))), j = n.lazy(()=>i(()=>import("./SessionMainForGroupChat-C6DqKzRI.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([34,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,31,25,26,27,29,24])).then((t)=>({
                default: t.SessionMainForGroupChat
            }))), E = n.lazy(()=>i(()=>import("./SessionMainForSmallTown-p3COWf3x.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([35,1,2,3,4,5,7,8,6,9,10,11,12,13,15,16,17,36,20,21,22,18,19,25,24,28,29,37,38,33,39])).then((t)=>({
                default: t.SessionMainForSmallTown
            }))), F = n.lazy(()=>i(()=>import("./SessionMainForNovelWriting-BqJUdqjv.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,31,25,29,26,38,37,39,41,24,42])).then((t)=>({
                default: t.SessionMainForNovelWriting
            }))), M = n.lazy(()=>i(()=>import("./SessionMainForBalanceAdventure-BWdFTmEN.js"), __vite__mapDeps([43,1,2,3,4,5,7,8,6,9,10,11,12,13,44,25,21,20,22,41,27,42,16])).then((t)=>({
                default: t.SessionMainForBalanceAdventure
            })));
    Q = function() {
        const { sessionId: t } = p.useParams(), { data: l = [] } = u((d)=>d.from({
                s: f
            })), e = l.find((d)=>d.id === t), a = n.useRef(null), o = S(e?.mode) ? e.mode : g(e);
        if (n.useEffect(()=>{
            if (!e || a.current === e.id) return;
            a.current = e.id;
            const d = !e.analyticsFirstStartedAt;
            d && (_.sessions.update(e.id, {
                analyticsFirstStartedAt: Date.now()
            }), sessionStorage.setItem(`__NexTavern_Analytics_First_Entry__${e.id}`, "true")), y({
                eventType: d ? "session.started.first" : "session.started.returning",
                sessionType: o,
                sessionId: e.id
            });
        }, [
            o,
            e
        ]), !e || e.id !== t) return r.jsx("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
            children: r.jsx("p", {
                children: "会话加载中..."
            })
        });
        const s = `${o}:${e.id}`, c = o === "dnd" ? "dnd" : o === "small-town" ? "small-town" : void 0, m = r.jsx(n.Suspense, {
            fallback: r.jsx("div", {
                className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
                children: r.jsx("p", {
                    children: "加载中..."
                })
            }),
            children: o === "dnd" ? r.jsx(A, {
                sessionId: t
            }, s) : o === "group-chat" ? r.jsx(j, {
                sessionId: t
            }, s) : o === "challenge" ? r.jsx(x, {
                sessionId: t
            }, s) : o === "small-town" ? r.jsx(E, {
                sessionId: t
            }, s) : o === "balance-adventure" ? r.jsx(M, {
                sessionId: t
            }, s) : o === "novel-writing" ? r.jsx(F, {
                sessionId: t
            }, s) : r.jsx(v, {
                sessionId: t
            }, s)
        });
        return c ? r.jsx(h, {
            requiredFeature: c,
            children: m
        }) : m;
    };
});
export { Q as component, __tla };
