const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-jw-SUhED.js","assets/react-D9TtqY-V.js","assets/vendor-C4ToNUTj.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/db-master-BrZHBPj2.js","assets/@tanstack-3iyDWv8L.js","assets/dexie-C2pyTzVO.js","assets/zod-fbN9ubnj.js","assets/db--eUIPBg3.js","assets/index-IzUhM_kF.js","assets/icons-bBaH0MBC.js","assets/index-BveKglP0.css","assets/id-OxPLOBIU.js","assets/context-manager.class-B2xis078.js","assets/es-toolkit-CstbrnlE.js","assets/PlayerInputItem-Ce2vNpzb.js","assets/button-CMoAlsw3.js","assets/components-and-styling-lnR2ABT4.js","assets/shadcn-utils-BMZD7_jZ.js","assets/@tailwind-COJ8Fh6m.js","assets/textarea-NuAUq_bK.js","assets/badge-B6qKYUZD.js","assets/useLLM-tAU3ECR6.js","assets/global-llm-config.store-C91qlFOh.js","assets/app-configurations-Cz44104t.js","assets/SessionMainForChallenge-DWFgv2Kj.js","assets/session-manager.class-DPAZ4frV.js","assets/SessionMainForDnd-DPgFs7I2.js","assets/switch-CGreuh1l.js","assets/SessionMainForGroupChat-DYLanFB2.js","assets/SessionMainForSmallTown-UwzbSu6N.js","assets/slider-D-CCs0Tm.js","assets/dialog-v6BqSj-g.js","assets/label-CBzbyhxK.js","assets/input-CtGFdN_9.js","assets/SessionMainForNovelWriting-BlwXgCm8.js","assets/formatting-8HslT92O.js","assets/card-85OZoUtz.js","assets/select-BTDHXfPN.js"])))=>i.map(i=>d[i]);
import { R as a, _ as n, __tla as __tla_0 } from "./index-IzUhM_kF.js";
import { j as e, r as s } from "./react-D9TtqY-V.js";
import { i as u, j as _ } from "./@tanstack-3iyDWv8L.js";
import { S as c } from "./db-master-BrZHBPj2.js";
import { I as h } from "./InvitationGuard-HXq7MeQC.js";
import "./icons-bBaH0MBC.js";
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
  const f = s.lazy(() => n(() => import("./SessionMainForChat-jw-SUhED.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])).then((o) => ({
    default: o.SessionMainForChat
  }))), S = s.lazy(() => n(() => import("./SessionMainForChallenge-DWFgv2Kj.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([26,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,27,16,17,18,19,20,21,22,24])).then((o) => ({
    default: o.SessionMainForChallenge
  }))), x = s.lazy(() => n(() => import("./SessionMainForDnd-DPgFs7I2.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([28,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,27,17,18,19,20,21,22,24,29])).then((o) => ({
    default: o.SessionMainForDnd
  }))), v = s.lazy(() => n(() => import("./SessionMainForGroupChat-DYLanFB2.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([30,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,27,17,18,19,20,21,22,24])).then((o) => ({
    default: o.SessionMainForGroupChat
  }))), j = s.lazy(() => n(() => import("./SessionMainForSmallTown-UwzbSu6N.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([31,1,2,3,4,6,7,5,8,10,11,12,13,32,19,18,20,14,15,17,23,24,25,33,34,29,35])).then((o) => ({
    default: o.SessionMainForSmallTown
  }))), E = s.lazy(() => n(() => import("./SessionMainForNovelWriting-BlwXgCm8.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([36,1,2,3,4,5,6,7,8,10,11,12,14,13,15,27,17,18,19,20,24,21,34,37,33,35,38,39])).then((o) => ({
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
