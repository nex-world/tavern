const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-BzunP5pO.js","assets/react-BPCshYXX.js","assets/vendor-DqU8PgXE.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/db-master-xI8DZi24.js","assets/@tanstack-BuNX36FW.js","assets/dexie-DOn8o3hw.js","assets/zod-fbN9ubnj.js","assets/db-DIVKi8SD.js","assets/index-hrsTZy9Q.js","assets/icons-BpfK1DnB.js","assets/index-8dTJL3G4.css","assets/id-OxPLOBIU.js","assets/context-manager.class-DV_N9RL3.js","assets/es-toolkit-CstbrnlE.js","assets/PlayerInputItem-Cw3shOQU.js","assets/CharacterAvatar-DwtbYeXp.js","assets/shadcn-utils-BMZD7_jZ.js","assets/components-and-styling-lnR2ABT4.js","assets/@tailwind-COJ8Fh6m.js","assets/button-CKyQl8ny.js","assets/textarea-Dc_MpBxB.js","assets/badge-b3CWeD_H.js","assets/useLLM-CCvhQGvi.js","assets/global-llm-config.store-B8jg895c.js","assets/app-configurations-Cz44104t.js","assets/SessionMainForChallenge-DhQ1_ZRd.js","assets/session-manager.class-9OcQVs3g.js","assets/SessionMainForDnd-B4q58wr7.js","assets/switch-DwXGULrD.js","assets/SessionMainForGroupChat-B34f07Ea.js","assets/SessionMainForSmallTown-CKdJ7igj.js","assets/slider-x3H1qI5O.js","assets/dialog-CbwgCfJB.js","assets/label-DxXosFPV.js","assets/input-Dje6SeH9.js","assets/SessionMainForNovelWriting-BcqkV9pN.js","assets/formatting-8HslT92O.js","assets/card-B79febki.js","assets/select-CgkKzHrj.js"])))=>i.map(i=>d[i]);
import { R as a, _ as n, __tla as __tla_0 } from "./index-hrsTZy9Q.js";
import { j as e, r as s } from "./react-BPCshYXX.js";
import { i as u, j as _ } from "./@tanstack-BuNX36FW.js";
import { S as c } from "./db-master-xI8DZi24.js";
import { I as h } from "./InvitationGuard-CREUuIl2.js";
import "./icons-BpfK1DnB.js";
import "./vendor-DqU8PgXE.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-DOn8o3hw.js";
import "./zod-fbN9ubnj.js";
import "./button-CKyQl8ny.js";
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
  const f = s.lazy(() => n(() => import("./SessionMainForChat-BzunP5pO.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])).then((o) => ({
    default: o.SessionMainForChat
  }))), S = s.lazy(() => n(() => import("./SessionMainForChallenge-DhQ1_ZRd.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([27,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,28,16,17,18,19,20,21,22,23,25])).then((o) => ({
    default: o.SessionMainForChallenge
  }))), x = s.lazy(() => n(() => import("./SessionMainForDnd-B4q58wr7.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([29,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,28,21,19,18,20,22,23,25,30,17])).then((o) => ({
    default: o.SessionMainForDnd
  }))), v = s.lazy(() => n(() => import("./SessionMainForGroupChat-B34f07Ea.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([31,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,28,21,19,18,20,22,23,25,17])).then((o) => ({
    default: o.SessionMainForGroupChat
  }))), j = s.lazy(() => n(() => import("./SessionMainForSmallTown-CKdJ7igj.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([32,1,2,3,4,6,7,5,8,10,11,12,13,33,18,19,20,14,15,21,17,24,25,26,34,35,30,36])).then((o) => ({
    default: o.SessionMainForSmallTown
  }))), E = s.lazy(() => n(() => import("./SessionMainForNovelWriting-BcqkV9pN.js").then(async (m) => {
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
