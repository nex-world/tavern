const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-DqC9h9LZ.js","assets/react-DE62XWsa.js","assets/vendor-BJF3NJg5.js","assets/formatting-Bt4POpGk.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/db-master-DiZIyMfK.js","assets/@tanstack-m-1uuL6k.js","assets/dexie-DDTiHGxC.js","assets/zod-BOL00Oce.js","assets/analytics-CNfxmEQT.js","assets/nex-tavern-uuid-B0g0ansf.js","assets/index-CF4MAqFH.js","assets/icons-CjLrWvzf.js","assets/index-CwGLb_ZP.css","assets/id-BY9c7rfI.js","assets/db-seQgP_Jc.js","assets/AutoScrollDownArea-DZN1gH-S.js","assets/es-toolkit-9bjl2JfA.js","assets/shadcn-utils-Cnr6N47i.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-CPcsbTWB.js","assets/PlayerInputItem-CdwiL1V-.js","assets/CharacterAvatar-DuUEEGWm.js","assets/button-B05uqCHL.js","assets/textarea-Dy3g7GWU.js","assets/badge-BDEsDlsM.js","assets/useLLM-DAQP8nRL.js","assets/global-llm-config.store-C3SCKavw.js","assets/SessionMainForChallenge-B8AUc8UP.js","assets/session-manager.class-CMli7K9_.js","assets/SessionMainForDnd-fPa7t3B7.js","assets/switch-HIxCs_qt.js","assets/SessionMainForGroupChat-Bkruxlvj.js","assets/SessionMainForSmallTown--Fi0Iiy7.js","assets/slider-BFaVHNHg.js","assets/dialog-DLXkZgUk.js","assets/label-D3rOOHnq.js","assets/input-ClDm2ZgA.js","assets/SessionMainForNovelWriting-BTQUbR3o.js","assets/card-DOswZeAM.js","assets/select-1T2n7aSf.js","assets/SessionMainForBalanceAdventure-CYnggvVu.js","assets/balance-adventure-items-B_HqI-Kd.js"])))=>i.map(i=>d[i]);
import { q as p, _ as i, __tla as __tla_0 } from "./index-CF4MAqFH.js";
import { r as n, j as r } from "./react-DE62XWsa.js";
import { j as u } from "./@tanstack-m-1uuL6k.js";
import { S as f, m as _ } from "./db-master-DiZIyMfK.js";
import { I as h } from "./InvitationGuard-BQFducrH.js";
import { t as y } from "./analytics-CNfxmEQT.js";
import "./icons-CjLrWvzf.js";
import "./vendor-BJF3NJg5.js";
import "./formatting-Bt4POpGk.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-DDTiHGxC.js";
import "./zod-BOL00Oce.js";
import "./button-B05uqCHL.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./@tailwind-CPcsbTWB.js";
import "./nex-tavern-uuid-B0g0ansf.js";
import "./id-BY9c7rfI.js";
let K;
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
    const v = n.lazy(()=>i(()=>import("./SessionMainForChat-DqC9h9LZ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])).then((t)=>({
                default: t.SessionMainForChat
            }))), x = n.lazy(()=>i(()=>import("./SessionMainForChallenge-B8AUc8UP.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([29,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,30,22,23,24,25,26,28])).then((t)=>({
                default: t.SessionMainForChallenge
            }))), A = n.lazy(()=>i(()=>import("./SessionMainForDnd-fPa7t3B7.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([31,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,30,24,25,26,28,32,23])).then((t)=>({
                default: t.SessionMainForDnd
            }))), j = n.lazy(()=>i(()=>import("./SessionMainForGroupChat-Bkruxlvj.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([33,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,30,24,25,26,28,23])).then((t)=>({
                default: t.SessionMainForGroupChat
            }))), E = n.lazy(()=>i(()=>import("./SessionMainForSmallTown--Fi0Iiy7.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([34,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,35,19,20,21,17,18,24,23,27,28,36,37,32,38])).then((t)=>({
                default: t.SessionMainForSmallTown
            }))), F = n.lazy(()=>i(()=>import("./SessionMainForNovelWriting-BTQUbR3o.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,30,24,28,25,37,36,38,40,23,41])).then((t)=>({
                default: t.SessionMainForNovelWriting
            }))), M = n.lazy(()=>i(()=>import("./SessionMainForBalanceAdventure-CYnggvVu.js"), __vite__mapDeps([42,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,43,24,20,19,21,40,26,41])).then((t)=>({
                default: t.SessionMainForBalanceAdventure
            })));
    K = function() {
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
export { K as component, __tla };
