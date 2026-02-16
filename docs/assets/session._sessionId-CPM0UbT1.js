const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-Cv0MbMyS.js","assets/react-D9TtqY-V.js","assets/vendor-C4ToNUTj.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/db-master-BrZHBPj2.js","assets/@tanstack-3iyDWv8L.js","assets/dexie-C2pyTzVO.js","assets/zod-fbN9ubnj.js","assets/db--eUIPBg3.js","assets/index-Cxjv2Jza.js","assets/icons-d5PdVRlQ.js","assets/index-DuWomhO3.css","assets/id-OxPLOBIU.js","assets/context-manager.class-B2xis078.js","assets/es-toolkit-CstbrnlE.js","assets/PlayerInputItem-CoBNH5z-.js","assets/CharacterAvatar-Cnp2urxB.js","assets/shadcn-utils-BMZD7_jZ.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-COJ8Fh6m.js","assets/button-CMoAlsw3.js","assets/textarea-NuAUq_bK.js","assets/badge-B6qKYUZD.js","assets/useLLM-tAU3ECR6.js","assets/global-llm-config.store-C91qlFOh.js","assets/app-configurations-Cz44104t.js","assets/SessionMainForChallenge-BPqkHZ6C.js","assets/session-manager.class-DPAZ4frV.js","assets/SessionMainForDnd-Bb7idQBS.js","assets/switch-CGreuh1l.js","assets/SessionMainForGroupChat-yv9qNIF1.js","assets/SessionMainForSmallTown-CcITE6Zy.js","assets/slider-D-CCs0Tm.js","assets/dialog-BSYdwUYf.js","assets/label-CBzbyhxK.js","assets/input-CtGFdN_9.js","assets/SessionMainForNovelWriting-CtsXb5Ji.js","assets/formatting-8HslT92O.js","assets/card-85OZoUtz.js","assets/select-cAC0ZGdN.js"])))=>i.map(i=>d[i]);
import { R as a, _ as n, __tla as __tla_0 } from "./index-Cxjv2Jza.js";
import { j as e, r as s } from "./react-D9TtqY-V.js";
import { i as u, j as _ } from "./@tanstack-3iyDWv8L.js";
import { S as c } from "./db-master-BrZHBPj2.js";
import { I as h } from "./InvitationGuard-By8eBjN2.js";
import "./icons-d5PdVRlQ.js";
import "./vendor-C4ToNUTj.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C2pyTzVO.js";
import "./zod-fbN9ubnj.js";
import "./button-CMoAlsw3.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./nex-tavern-uuid-HW61e36x.js";
import "./id-OxPLOBIU.js";
let q;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const f = s.lazy(() => n(() => import("./SessionMainForChat-Cv0MbMyS.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])).then((o) => ({
    default: o.SessionMainForChat
  }))), S = s.lazy(() => n(() => import("./SessionMainForChallenge-BPqkHZ6C.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([27,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,28,16,17,18,19,20,21,22,23,25])).then((o) => ({
    default: o.SessionMainForChallenge
  }))), x = s.lazy(() => n(() => import("./SessionMainForDnd-Bb7idQBS.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([29,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,28,21,19,18,20,22,23,25,30,17])).then((o) => ({
    default: o.SessionMainForDnd
  }))), v = s.lazy(() => n(() => import("./SessionMainForGroupChat-yv9qNIF1.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([31,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,28,21,19,18,20,22,23,25,17])).then((o) => ({
    default: o.SessionMainForGroupChat
  }))), j = s.lazy(() => n(() => import("./SessionMainForSmallTown-CcITE6Zy.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([32,1,2,3,4,6,7,5,8,10,11,12,13,33,18,19,20,14,15,21,17,24,25,26,34,35,30,36])).then((o) => ({
    default: o.SessionMainForSmallTown
  }))), E = s.lazy(() => n(() => import("./SessionMainForNovelWriting-CtsXb5Ji.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([37,1,2,3,4,5,6,7,8,10,11,12,14,13,15,28,21,19,18,20,25,22,35,38,34,36,39,17,40])).then((o) => ({
    default: o.SessionMainForNovelWriting
  })));
  q = function() {
    var _a;
    const { sessionId: o } = a.useParams(), l = a.useSearch(), { data: m = [] } = u((d) => d.from({
      s: c
    }).where(({ s: p }) => _(p.id, o))), t = ((_a = m[0]) == null ? void 0 : _a.mode) || l.mode, i = t === "dnd" ? "dnd" : t === "small-town" ? "small-town" : void 0, r = e.jsx(s.Suspense, {
      fallback: e.jsx("div", {
        className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
        children: e.jsx("p", {
          children: "\u52A0\u8F7D\u4E2D..."
        })
      }),
      children: t === "dnd" ? e.jsx(x, {
        sessionId: o
      }) : t === "group-chat" ? e.jsx(v, {
        sessionId: o
      }) : t === "challenge" ? e.jsx(S, {
        sessionId: o
      }) : t === "small-town" ? e.jsx(j, {
        sessionId: o
      }) : t === "novel-writing" ? e.jsx(E, {
        sessionId: o
      }) : e.jsx(f, {
        sessionId: o
      })
    });
    return i ? e.jsx(h, {
      requiredFeature: i,
      children: r
    }) : r;
  };
});
export {
  __tla,
  q as component
};
