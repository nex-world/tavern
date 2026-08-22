const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-DQO_ha1j.js","assets/react-BwrVEnbn.js","assets/vendor-Btzk85e_.js","assets/formatting-Cgd9k2rU.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/db-master-CbDKzz4h.js","assets/@tanstack-DHpjEvx5.js","assets/dexie-C4f2dvgg.js","assets/zod-BOL00Oce.js","assets/analytics-DxZFjHvN.js","assets/nex-tavern-uuid-Tffg-erq.js","assets/id-BY9c7rfI.js","assets/db-ee7lvpGC.js","assets/index-DwIbAt2a.js","assets/icons-CwIlf1fe.js","assets/index-BGW-4RxO.css","assets/AutoScrollDownArea-B6OpBmAX.js","assets/es-toolkit-9bjl2JfA.js","assets/shadcn-utils-Cnr6N47i.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-CPcsbTWB.js","assets/PlayerInputItem-CGZVGdtS.js","assets/CharacterAvatar-BOt8OEgy.js","assets/button-DfQJxXN9.js","assets/textarea-sQNmV-G1.js","assets/badge-BTwyrS6y.js","assets/useLLM-BS0aeFEv.js","assets/global-llm-config.store-CMShswv9.js","assets/SessionMainForChallenge-cuj439-5.js","assets/session-manager.class-CZxvteyb.js","assets/SessionMainForDnd-CAy8Le-m.js","assets/switch-BIbSASbT.js","assets/SessionMainForGroupChat-CyGluCUS.js","assets/SessionMainForSmallTown-CQboHXh5.js","assets/slider-DSu9sj5G.js","assets/dialog-Lphpo7yd.js","assets/label-RyJAwE73.js","assets/input-Ce1w9VQ-.js","assets/SessionMainForNovelWriting-CbNnvTqm.js","assets/card-a5yXWtxZ.js","assets/select-CCfUvOed.js","assets/SessionMainForBalanceAdventure-Dn2ZVjXc.js","assets/balance-adventure-items-C3j2Mt2n.js"])))=>i.map(i=>d[i]);
import { b as p, _ as i, __tla as __tla_0 } from "./index-DwIbAt2a.js";
import { r as n, j as r } from "./react-BwrVEnbn.js";
import { j as u } from "./@tanstack-DHpjEvx5.js";
import { S as f, m as _ } from "./db-master-CbDKzz4h.js";
import { I as h } from "./InvitationGuard-U0ycs66N.js";
import { t as y } from "./analytics-DxZFjHvN.js";
import "./icons-CwIlf1fe.js";
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
import "./nex-tavern-uuid-Tffg-erq.js";
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
    const v = n.lazy(()=>i(()=>import("./SessionMainForChat-DQO_ha1j.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])).then((t)=>({
                default: t.SessionMainForChat
            }))), x = n.lazy(()=>i(()=>import("./SessionMainForChallenge-cuj439-5.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([29,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,30,22,23,24,25,26,28])).then((t)=>({
                default: t.SessionMainForChallenge
            }))), A = n.lazy(()=>i(()=>import("./SessionMainForDnd-CAy8Le-m.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([31,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,30,24,25,26,28,32,23])).then((t)=>({
                default: t.SessionMainForDnd
            }))), j = n.lazy(()=>i(()=>import("./SessionMainForGroupChat-CyGluCUS.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([33,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,30,24,25,26,28,23])).then((t)=>({
                default: t.SessionMainForGroupChat
            }))), E = n.lazy(()=>i(()=>import("./SessionMainForSmallTown-CQboHXh5.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([34,1,2,3,4,5,7,8,6,9,10,11,12,14,15,16,35,19,20,21,17,18,24,23,27,28,36,37,32,38])).then((t)=>({
                default: t.SessionMainForSmallTown
            }))), F = n.lazy(()=>i(()=>import("./SessionMainForNovelWriting-CbNnvTqm.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,30,24,28,25,37,36,38,40,23,41])).then((t)=>({
                default: t.SessionMainForNovelWriting
            }))), M = n.lazy(()=>i(()=>import("./SessionMainForBalanceAdventure-Dn2ZVjXc.js"), __vite__mapDeps([42,1,2,3,4,5,7,8,6,9,10,11,12,43,24,20,19,21,40,26,41,15])).then((t)=>({
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
