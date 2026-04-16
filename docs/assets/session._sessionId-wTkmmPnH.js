const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-wGB20kUs.js","assets/react-gFHNOnf5.js","assets/vendor-DRKpriaz.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/db-master-DI3V0061.js","assets/@tanstack-DDpiKjUN.js","assets/dexie-jNTqi4TF.js","assets/zod-DPWJ_A9_.js","assets/db-BmpCv5B4.js","assets/index-7c6pKJ8J.js","assets/icons-CW-0NDo_.js","assets/index-C01ieX9h.css","assets/id-OxPLOBIU.js","assets/context-manager.class-BTc8g_cx.js","assets/es-toolkit-CstbrnlE.js","assets/PlayerInputItem-D3Zy8kb-.js","assets/CharacterAvatar-TKrkqhhW.js","assets/shadcn-utils-BMZD7_jZ.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-COJ8Fh6m.js","assets/button-D3G-RLOw.js","assets/textarea-DqdRyzs9.js","assets/badge-C9CmQsZA.js","assets/useLLM-B1Ewhspf.js","assets/global-llm-config.store-BYX0tcdb.js","assets/app-configurations-Cz44104t.js","assets/SessionMainForChallenge-BeYNTyq9.js","assets/session-manager.class-z-y1oVSb.js","assets/SessionMainForDnd-Cu9xj9Pp.js","assets/switch-D6eVMgf5.js","assets/SessionMainForGroupChat-CFsjJhbH.js","assets/SessionMainForSmallTown-CBr2U-kl.js","assets/slider-DrwpTiXR.js","assets/dialog-CPE3M3ew.js","assets/label-BU_LC6Ti.js","assets/input-KwncZLGm.js","assets/SessionMainForNovelWriting-CSoeN_28.js","assets/formatting-8HslT92O.js","assets/card-B4CxGEM-.js","assets/select-BkM7Xz_F.js"])))=>i.map(i=>d[i]);
import { R as m, _ as s, __tla as __tla_0 } from "./index-7c6pKJ8J.js";
import { j as r, r as n } from "./react-gFHNOnf5.js";
import { i as p } from "./@tanstack-DDpiKjUN.js";
import { S as u } from "./db-master-DI3V0061.js";
import { I as f } from "./InvitationGuard-DpWHmU2-.js";
import "./icons-CW-0NDo_.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./zod-DPWJ_A9_.js";
import "./button-D3G-RLOw.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./nex-tavern-uuid-HW61e36x.js";
import "./id-OxPLOBIU.js";
let G;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function h(o) {
    return o === "chat" || o === "challenge" || o === "dnd" || o === "group-chat" || o === "small-town" || o === "novel-writing";
  }
  function _(o) {
    const a = o ?? {}, t = a.modeConfig ?? {}, e = a.modeState ?? {};
    return typeof a.challengeId == "string" || typeof t.roleTaskPrompt == "string" || Array.isArray(t.goals) ? "challenge" : t.worldSnapshot !== void 0 || Array.isArray(t.playerCharacterSnapshots) ? "dnd" : Array.isArray(t.participantSnapshots) || typeof t.topic == "string" ? "group-chat" : typeof t.worldName == "string" || Array.isArray(t.characterSnapshots) || e.gameTime !== void 0 ? "small-town" : typeof t.projectName == "string" || e.progressTracking !== void 0 || e.currentChapterIndex !== void 0 ? "novel-writing" : "chat";
  }
  const g = n.lazy(() => s(() => import("./SessionMainForChat-wGB20kUs.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])).then((o) => ({
    default: o.SessionMainForChat
  }))), y = n.lazy(() => s(() => import("./SessionMainForChallenge-BeYNTyq9.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }), __vite__mapDeps([27,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,28,16,17,18,19,20,21,22,23,25])).then((o) => ({
    default: o.SessionMainForChallenge
  }))), S = n.lazy(() => s(() => import("./SessionMainForDnd-Cu9xj9Pp.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }), __vite__mapDeps([29,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,28,21,19,18,20,22,23,25,30,17])).then((o) => ({
    default: o.SessionMainForDnd
  }))), x = n.lazy(() => s(() => import("./SessionMainForGroupChat-CFsjJhbH.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }), __vite__mapDeps([31,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,28,21,19,18,20,22,23,25,17])).then((o) => ({
    default: o.SessionMainForGroupChat
  }))), v = n.lazy(() => s(() => import("./SessionMainForSmallTown-CBr2U-kl.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }), __vite__mapDeps([32,1,2,3,4,6,7,5,8,10,11,12,13,33,18,19,20,14,15,21,17,24,25,26,34,35,30,36])).then((o) => ({
    default: o.SessionMainForSmallTown
  }))), j = n.lazy(() => s(() => import("./SessionMainForNovelWriting-CSoeN_28.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }), __vite__mapDeps([37,1,2,3,4,5,6,7,8,10,11,12,14,13,15,28,21,19,18,20,25,22,35,38,34,36,39,17,40])).then((o) => ({
    default: o.SessionMainForNovelWriting
  })));
  G = function() {
    const { sessionId: o } = m.useParams(), { data: a = [] } = p((l) => l.from({
      s: u
    })), t = a.find((l) => l.id === o);
    if (!t || t.id !== o) return r.jsx("div", {
      className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
      children: r.jsx("p", {
        children: "\u4F1A\u8BDD\u52A0\u8F7D\u4E2D..."
      })
    });
    const e = h(t == null ? void 0 : t.mode) ? t.mode : _(t), i = `${e}:${t.id}`, d = e === "dnd" ? "dnd" : e === "small-town" ? "small-town" : void 0, c = r.jsx(n.Suspense, {
      fallback: r.jsx("div", {
        className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
        children: r.jsx("p", {
          children: "\u52A0\u8F7D\u4E2D..."
        })
      }),
      children: e === "dnd" ? r.jsx(S, {
        sessionId: o
      }, i) : e === "group-chat" ? r.jsx(x, {
        sessionId: o
      }, i) : e === "challenge" ? r.jsx(y, {
        sessionId: o
      }, i) : e === "small-town" ? r.jsx(v, {
        sessionId: o
      }, i) : e === "novel-writing" ? r.jsx(j, {
        sessionId: o
      }, i) : r.jsx(g, {
        sessionId: o
      }, i)
    });
    return d ? r.jsx(f, {
      requiredFeature: d,
      children: c
    }) : c;
  };
});
export {
  __tla,
  G as component
};
