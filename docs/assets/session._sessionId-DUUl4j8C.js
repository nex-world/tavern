const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-D8m8MrZJ.js","assets/react-djKJ3iBo.js","assets/vendor-B5WA8jn2.js","assets/formatting--AnFUVTy.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/db-master-eAmex8rT.js","assets/@tanstack-Bc2-Ej4a.js","assets/dexie-BrH4iHrF.js","assets/zod-BTj0C3yc.js","assets/analytics-BTxGqTJY.js","assets/nex-tavern-uuid-DxFSa6Pt.js","assets/index-DNgj8bwD.js","assets/icons-q2kNJThM.js","assets/index-DvZEohGi.css","assets/id-BY9c7rfI.js","assets/db-g5sbJCRD.js","assets/AutoScrollDownArea-cUzgyL9F.js","assets/es-toolkit-9bjl2JfA.js","assets/shadcn-utils-Cnr6N47i.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-CPcsbTWB.js","assets/PlayerInputItem-C783azd8.js","assets/CharacterAvatar-Bwr0FQyu.js","assets/button-wZFYkzV6.js","assets/textarea-B7nHRwfm.js","assets/badge-D22VkVbS.js","assets/useLLM-2I-JFqx-.js","assets/global-llm-config.store-DQFUAIEp.js","assets/SessionMainForChallenge-yIwYltTn.js","assets/session-manager.class-jV90p7NY.js","assets/SessionMainForDnd-ue71zuzg.js","assets/switch-C3zEMvBY.js","assets/SessionMainForGroupChat-C55tGnDX.js","assets/SessionMainForSmallTown-16l3LaOc.js","assets/slider-DybjRV89.js","assets/popover-BQ2n5EXZ.js","assets/tooltip-Dxj47QQn.js","assets/progress-Dm13J7bu.js","assets/dialog-CPjmYswy.js","assets/label-CpcTwd2C.js","assets/input-B6f16fcG.js","assets/SessionMainForNovelWriting-CmaAZzDd.js","assets/card-CVGbyKis.js","assets/select-CEJ7MyZ1.js","assets/SessionMainForBalanceAdventure-D5tUDbii.js","assets/balance-adventure-items-C9GwQb49.js"])))=>i.map(i=>d[i]);
import { q as p, _ as i, __tla as __tla_0 } from "./index-DNgj8bwD.js";
import { r as n, j as r } from "./react-djKJ3iBo.js";
import { j as u } from "./@tanstack-Bc2-Ej4a.js";
import { S as f, m as _ } from "./db-master-eAmex8rT.js";
import { I as h } from "./InvitationGuard-DC2YAwgB.js";
import { t as y } from "./analytics-BTxGqTJY.js";
import "./icons-q2kNJThM.js";
import "./vendor-B5WA8jn2.js";
import "./formatting--AnFUVTy.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-BrH4iHrF.js";
import "./zod-BTj0C3yc.js";
import "./id-BY9c7rfI.js";
import "./button-wZFYkzV6.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./@tailwind-CPcsbTWB.js";
import "./nex-tavern-uuid-DxFSa6Pt.js";
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
    const v = n.lazy(()=>i(()=>import("./SessionMainForChat-D8m8MrZJ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])).then((t)=>({
                default: t.SessionMainForChat
            }))), x = n.lazy(()=>i(()=>import("./SessionMainForChallenge-yIwYltTn.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([29,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,30,22,23,24,25,26,28])).then((t)=>({
                default: t.SessionMainForChallenge
            }))), A = n.lazy(()=>i(()=>import("./SessionMainForDnd-ue71zuzg.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([31,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,30,24,25,26,28,32,23])).then((t)=>({
                default: t.SessionMainForDnd
            }))), j = n.lazy(()=>i(()=>import("./SessionMainForGroupChat-C55tGnDX.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([33,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,30,24,25,26,28,23])).then((t)=>({
                default: t.SessionMainForGroupChat
            }))), E = n.lazy(()=>i(()=>import("./SessionMainForSmallTown-16l3LaOc.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([34,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,35,19,20,21,17,18,24,23,36,37,26,38,27,28,39,40,32,41])).then((t)=>({
                default: t.SessionMainForSmallTown
            }))), F = n.lazy(()=>i(()=>import("./SessionMainForNovelWriting-CmaAZzDd.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,30,24,28,25,40,39,41,43,23,44])).then((t)=>({
                default: t.SessionMainForNovelWriting
            }))), M = n.lazy(()=>i(()=>import("./SessionMainForBalanceAdventure-D5tUDbii.js"), __vite__mapDeps([45,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,46,24,20,19,21,43,26,44])).then((t)=>({
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
