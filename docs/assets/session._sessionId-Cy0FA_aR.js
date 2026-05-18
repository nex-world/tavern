const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-DDw0_TMK.js","assets/react-CAuF6Uwp.js","assets/vendor-R_RbF-Qb.js","assets/formatting-DFtRXkW1.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/db-master-DKnNNmTP.js","assets/@tanstack-D67abzz0.js","assets/dexie-CZ_H1TYX.js","assets/zod-D7Re9cnc.js","assets/db-CPOLtxAM.js","assets/index-C4wlxMXN.js","assets/icons-Cmb87C8b.js","assets/index-4_ZkO5zZ.css","assets/id-BY9c7rfI.js","assets/AutoScrollDownArea-hJ97JLYP.js","assets/es-toolkit-9bjl2JfA.js","assets/shadcn-utils-Cnr6N47i.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-CPcsbTWB.js","assets/PlayerInputItem-Da1zrXFw.js","assets/CharacterAvatar-yPJ36Fh6.js","assets/button-B6v19V-K.js","assets/textarea-CFS4_TcP.js","assets/badge-CR9zO-CQ.js","assets/useLLM-CenwGE9_.js","assets/global-llm-config.store-BSRZEgc6.js","assets/app-configurations-CmkfVBRD.js","assets/SessionMainForChallenge-BJRiDxEA.js","assets/session-manager.class-BRPwaTjg.js","assets/SessionMainForDnd-B5t1czGt.js","assets/switch-BFRi9ePD.js","assets/SessionMainForGroupChat-CbjyAXvr.js","assets/SessionMainForSmallTown-BaLRq4g_.js","assets/slider-Bs_1KIyO.js","assets/dialog-5F19wRbJ.js","assets/label-aTtBzjKl.js","assets/input-CEZpKHBj.js","assets/SessionMainForNovelWriting-BKGGUCxV.js","assets/card-DVFH5vt6.js","assets/select-5K7YeshT.js","assets/SessionMainForBalanceAdventure-BGE-NcBI.js","assets/balance-adventure-items-5zhmuzf-.js"])))=>i.map(i=>d[i]);
import { b as m, _ as s, __tla as __tla_0 } from "./index-C4wlxMXN.js";
import { j as t, r as n } from "./react-CAuF6Uwp.js";
import { i as p } from "./@tanstack-D67abzz0.js";
import { S as u } from "./db-master-DKnNNmTP.js";
import { I as f } from "./InvitationGuard-BzE08ZcI.js";
import "./icons-Cmb87C8b.js";
import "./vendor-R_RbF-Qb.js";
import "./formatting-DFtRXkW1.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-CZ_H1TYX.js";
import "./zod-D7Re9cnc.js";
import "./button-B6v19V-K.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-Cnr6N47i.js";
import "./@tailwind-CPcsbTWB.js";
import "./nex-tavern-uuid-BRGLU0IZ.js";
import "./id-BY9c7rfI.js";
let B;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    function _(e) {
        return e === "chat" || e === "challenge" || e === "dnd" || e === "group-chat" || e === "small-town" || e === "novel-writing" || e === "balance-adventure";
    }
    function h(e) {
        const a = e ?? {}, o = a.modeConfig ?? {}, r = a.modeState ?? {};
        return typeof a.challengeId == "string" || typeof o.roleTaskPrompt == "string" || Array.isArray(o.goals) ? "challenge" : o.worldSnapshot !== void 0 || Array.isArray(o.playerCharacterSnapshots) ? "dnd" : Array.isArray(o.participantSnapshots) || typeof o.topic == "string" ? "group-chat" : typeof o.worldName == "string" || Array.isArray(o.characterSnapshots) || r.gameTime !== void 0 ? "small-town" : typeof o.projectName == "string" || r.progressTracking !== void 0 || r.currentChapterIndex !== void 0 ? "novel-writing" : typeof o.worldCardId == "string" && Array.isArray(o.balanceAxes) ? "balance-adventure" : "chat";
    }
    const y = n.lazy(()=>s(()=>import("./SessionMainForChat-DDw0_TMK.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27])).then((e)=>({
                default: e.SessionMainForChat
            }))), g = n.lazy(()=>s(()=>import("./SessionMainForChallenge-BJRiDxEA.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([28,1,2,3,4,5,7,8,6,9,10,11,12,13,15,14,16,17,18,19,29,20,21,22,23,24,26])).then((e)=>({
                default: e.SessionMainForChallenge
            }))), S = n.lazy(()=>s(()=>import("./SessionMainForDnd-B5t1czGt.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([30,1,2,3,4,5,7,8,6,9,10,11,12,13,15,14,16,17,18,19,29,22,23,24,26,31,21])).then((e)=>({
                default: e.SessionMainForDnd
            }))), x = n.lazy(()=>s(()=>import("./SessionMainForGroupChat-CbjyAXvr.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([32,1,2,3,4,5,7,8,6,9,10,11,12,13,15,14,16,17,18,19,29,22,23,24,26,21])).then((e)=>({
                default: e.SessionMainForGroupChat
            }))), v = n.lazy(()=>s(()=>import("./SessionMainForSmallTown-BaLRq4g_.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([33,1,2,3,4,5,7,8,6,9,11,12,13,14,34,17,18,19,15,16,22,21,25,26,27,35,36,31,37])).then((e)=>({
                default: e.SessionMainForSmallTown
            }))), A = n.lazy(()=>s(()=>import("./SessionMainForNovelWriting-BKGGUCxV.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,11,12,13,15,14,16,17,18,19,29,22,26,23,36,35,37,39,21,40])).then((e)=>({
                default: e.SessionMainForNovelWriting
            }))), j = n.lazy(()=>s(()=>import("./SessionMainForBalanceAdventure-BGE-NcBI.js"), __vite__mapDeps([41,1,2,3,4,5,7,8,6,9,42,22,18,17,19,39,24,40,12])).then((e)=>({
                default: e.SessionMainForBalanceAdventure
            })));
    B = function() {
        const { sessionId: e } = m.useParams(), { data: a = [] } = p((d)=>d.from({
                s: u
            })), o = a.find((d)=>d.id === e);
        if (!o || o.id !== e) return t.jsx("div", {
            className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
            children: t.jsx("p", {
                children: "会话加载中..."
            })
        });
        const r = _(o?.mode) ? o.mode : h(o), i = `${r}:${o.id}`, l = r === "dnd" ? "dnd" : r === "small-town" ? "small-town" : void 0, c = t.jsx(n.Suspense, {
            fallback: t.jsx("div", {
                className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
                children: t.jsx("p", {
                    children: "加载中..."
                })
            }),
            children: r === "dnd" ? t.jsx(S, {
                sessionId: e
            }, i) : r === "group-chat" ? t.jsx(x, {
                sessionId: e
            }, i) : r === "challenge" ? t.jsx(g, {
                sessionId: e
            }, i) : r === "small-town" ? t.jsx(v, {
                sessionId: e
            }, i) : r === "balance-adventure" ? t.jsx(j, {
                sessionId: e
            }, i) : r === "novel-writing" ? t.jsx(A, {
                sessionId: e
            }, i) : t.jsx(y, {
                sessionId: e
            }, i)
        });
        return l ? t.jsx(f, {
            requiredFeature: l,
            children: c
        }) : c;
    };
});
export { B as component, __tla };
