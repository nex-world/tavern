const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-DJstJHSa.js","assets/react-BwrVEnbn.js","assets/vendor-Btzk85e_.js","assets/formatting-Cgd9k2rU.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/db-master-BD5cuqGE.js","assets/@tanstack-DHpjEvx5.js","assets/dexie-C4f2dvgg.js","assets/zod-BOL00Oce.js","assets/analytics-CgY6CsYJ.js","assets/app-configurations-Bm8i7f1O.js","assets/clarity-D1JZhIBn.js","assets/nex-tavern-uuid-BRGLU0IZ.js","assets/id-BY9c7rfI.js","assets/db-CJsO4wQm.js","assets/index-CUosL2Px.js","assets/icons-an9klV8i.js","assets/index-CMA8fOHA.css","assets/AutoScrollDownArea-DjEl-AZw.js","assets/es-toolkit-9bjl2JfA.js","assets/shadcn-utils-Cnr6N47i.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-CPcsbTWB.js","assets/PlayerInputItem-CS74DG8C.js","assets/CharacterAvatar-DT8CsUgC.js","assets/button-DfQJxXN9.js","assets/textarea-sQNmV-G1.js","assets/badge-BTwyrS6y.js","assets/useLLM-BM4jtOMc.js","assets/global-llm-config.store-CMShswv9.js","assets/SessionMainForChallenge-WWlGbmKp.js","assets/session-manager.class-DXIUTdQf.js","assets/SessionMainForDnd-PMEXLpUE.js","assets/switch-BIbSASbT.js","assets/SessionMainForGroupChat-CLn1_T21.js","assets/SessionMainForSmallTown-cWp-LmA8.js","assets/slider-DSu9sj5G.js","assets/dialog-BC5CT29R.js","assets/label-RyJAwE73.js","assets/input-Ce1w9VQ-.js","assets/SessionMainForNovelWriting-CFWzsv6g.js","assets/card-a5yXWtxZ.js","assets/select-CP8oHZ_c.js","assets/SessionMainForBalanceAdventure-Czotnp3O.js","assets/balance-adventure-items-B4Sj57rR.js"])))=>i.map(i=>d[i]);
import { b as p, _ as i, __tla as __tla_0 } from "./index-CUosL2Px.js";
import { r as n, j as r } from "./react-BwrVEnbn.js";
import { j as u } from "./@tanstack-DHpjEvx5.js";
import { S as f, m as _ } from "./db-master-BD5cuqGE.js";
import { I as h } from "./InvitationGuard-C8YAnnCE.js";
import { t as y } from "./analytics-CgY6CsYJ.js";
import "./icons-an9klV8i.js";
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
import "./app-configurations-Bm8i7f1O.js";
import "./clarity-D1JZhIBn.js";
let H;
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
    const v = n.lazy(()=>i(()=>import("./SessionMainForChat-DJstJHSa.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])).then((t)=>({
                default: t.SessionMainForChat
            }))), x = n.lazy(()=>i(()=>import("./SessionMainForChallenge-WWlGbmKp.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([31,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,32,24,25,26,27,28,30])).then((t)=>({
                default: t.SessionMainForChallenge
            }))), A = n.lazy(()=>i(()=>import("./SessionMainForDnd-PMEXLpUE.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([33,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,32,26,27,28,30,34,25])).then((t)=>({
                default: t.SessionMainForDnd
            }))), j = n.lazy(()=>i(()=>import("./SessionMainForGroupChat-CLn1_T21.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([35,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,32,26,27,28,30,25])).then((t)=>({
                default: t.SessionMainForGroupChat
            }))), E = n.lazy(()=>i(()=>import("./SessionMainForSmallTown-cWp-LmA8.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([36,1,2,3,4,5,7,8,6,9,10,11,12,13,14,16,17,18,37,21,22,23,19,20,26,25,29,30,38,39,34,40])).then((t)=>({
                default: t.SessionMainForSmallTown
            }))), F = n.lazy(()=>i(()=>import("./SessionMainForNovelWriting-CFWzsv6g.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,32,26,30,27,39,38,40,42,25,43])).then((t)=>({
                default: t.SessionMainForNovelWriting
            }))), M = n.lazy(()=>i(()=>import("./SessionMainForBalanceAdventure-Czotnp3O.js"), __vite__mapDeps([44,1,2,3,4,5,7,8,6,9,10,11,12,13,14,45,26,22,21,23,42,28,43,17])).then((t)=>({
                default: t.SessionMainForBalanceAdventure
            })));
    H = function() {
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
export { H as component, __tla };
