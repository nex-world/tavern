const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-CkWIOKRK.js","assets/react-DbmzlAIg.js","assets/vendor-Cf2d47Ru.js","assets/formatting-yQe3Wca_.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/db-master-C1ni96Ay.js","assets/@tanstack-DHLVDsIy.js","assets/dexie-1qEGwllm.js","assets/zod-BOL00Oce.js","assets/analytics-DNnbOVsw.js","assets/nex-tavern-uuid-C7R43k8_.js","assets/index-CnGrAnRg.js","assets/icons-7G7ZRCfk.js","assets/index-BGW-4RxO.css","assets/id-BY9c7rfI.js","assets/db-BAun2Bt7.js","assets/AutoScrollDownArea-BnaqTIUG.js","assets/es-toolkit-9bjl2JfA.js","assets/shadcn-utils-Cnr6N47i.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-CPcsbTWB.js","assets/PlayerInputItem-BsYwcXSw.js","assets/CharacterAvatar-BA42Kate.js","assets/button-BbF38vZF.js","assets/textarea-B3GeD6NW.js","assets/badge-BgmPXptO.js","assets/useLLM-C6v2_PQq.js","assets/global-llm-config.store-Ca-dV2cw.js","assets/SessionMainForChallenge-Dt9iLpmH.js","assets/session-manager.class-nEs45mpn.js","assets/SessionMainForDnd-D-5W8-Nm.js","assets/switch-BQjDRv3w.js","assets/SessionMainForGroupChat-D-SB1nI_.js","assets/SessionMainForSmallTown-D6sKO2EC.js","assets/slider-CUwtuKdg.js","assets/dialog-vEyvFVwm.js","assets/label-BdznVQ44.js","assets/input-CGET4Fbj.js","assets/SessionMainForNovelWriting-CfiZPA5A.js","assets/card-CmGKA5vR.js","assets/select-CPCUSLw1.js","assets/SessionMainForBalanceAdventure-Cf197WAx.js","assets/balance-adventure-items-CwvNgvH-.js"])))=>i.map(i=>d[i]);
import { k as p, _ as i, __tla as __tla_0 } from "./index-CnGrAnRg.js";
import { r as n, j as r } from "./react-DbmzlAIg.js";
import { j as u } from "./@tanstack-DHLVDsIy.js";
import { S as f, m as _ } from "./db-master-C1ni96Ay.js";
import { I as h } from "./InvitationGuard-C_K3TdS2.js";
import { t as y } from "./analytics-DNnbOVsw.js";
import "./icons-7G7ZRCfk.js";
import "./vendor-Cf2d47Ru.js";
import "./formatting-yQe3Wca_.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-1qEGwllm.js";
import "./zod-BOL00Oce.js";
import "./button-BbF38vZF.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./@tailwind-CPcsbTWB.js";
import "./nex-tavern-uuid-C7R43k8_.js";
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
    const v = n.lazy(()=>i(()=>import("./SessionMainForChat-CkWIOKRK.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])).then((t)=>({
                default: t.SessionMainForChat
            }))), x = n.lazy(()=>i(()=>import("./SessionMainForChallenge-Dt9iLpmH.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([29,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,30,22,23,24,25,26,28])).then((t)=>({
                default: t.SessionMainForChallenge
            }))), A = n.lazy(()=>i(()=>import("./SessionMainForDnd-D-5W8-Nm.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([31,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,30,24,25,26,28,32,23])).then((t)=>({
                default: t.SessionMainForDnd
            }))), j = n.lazy(()=>i(()=>import("./SessionMainForGroupChat-D-SB1nI_.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([33,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,16,17,18,19,20,21,30,24,25,26,28,23])).then((t)=>({
                default: t.SessionMainForGroupChat
            }))), E = n.lazy(()=>i(()=>import("./SessionMainForSmallTown-D6sKO2EC.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([34,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,35,19,20,21,17,18,24,23,27,28,36,37,32,38])).then((t)=>({
                default: t.SessionMainForSmallTown
            }))), F = n.lazy(()=>i(()=>import("./SessionMainForNovelWriting-CfiZPA5A.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,30,24,28,25,37,36,38,40,23,41])).then((t)=>({
                default: t.SessionMainForNovelWriting
            }))), M = n.lazy(()=>i(()=>import("./SessionMainForBalanceAdventure-Cf197WAx.js"), __vite__mapDeps([42,1,2,3,4,5,7,8,6,9,10,11,12,13,14,15,43,24,20,19,21,40,26,41])).then((t)=>({
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
