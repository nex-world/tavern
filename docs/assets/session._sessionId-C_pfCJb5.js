const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SessionMainForChat-d7pxo5bV.js","assets/react-BQpw03Eg.js","assets/vendor-CjYbcnj-.js","assets/@radix-ui-BQCqNqg0.js","assets/immer-BCQU3qJI.js","assets/db-master-l33tB5ke.js","assets/@tanstack-B4B5CfFY.js","assets/dexie-B3Kybfa7.js","assets/zod-fbN9ubnj.js","assets/db-BMXax6F-.js","assets/index-DkZE5rMH.js","assets/icons-BC63ChG4.js","assets/index-Daz3Tiae.css","assets/id-OxPLOBIU.js","assets/context-manager.class-CwvvDHbt.js","assets/es-toolkit-CstbrnlE.js","assets/PlayerInputItem-DJfOLGUV.js","assets/button-B9brLUSp.js","assets/components-and-styling-lnR2ABT4.js","assets/shadcn-utils-BMZD7_jZ.js","assets/@tailwind-COJ8Fh6m.js","assets/textarea-D6rL78Aw.js","assets/badge-DvaSwOwN.js","assets/useLLM-D0SorjDU.js","assets/global-llm-config.store-DiEUj8Zz.js","assets/app-configurations-Cz44104t.js","assets/SessionMainForChallenge-OVRNPbmF.js","assets/session-manager.class-fBqHHRvS.js","assets/SessionMainForDnd-BzTASK89.js","assets/switch-BPeiHTCh.js","assets/SessionMainForGroupChat-B6keBKde.js","assets/SessionMainForSmallTown-BQfgSPV7.js","assets/slider-DVuMaH4f.js","assets/dialog-ClhHrx6A.js","assets/label-DMtPOVS-.js","assets/input-C44X3vA9.js"])))=>i.map(i=>d[i]);
import { R as a, _ as n, __tla as __tla_0 } from "./index-DkZE5rMH.js";
import { j as e, r as t } from "./react-BQpw03Eg.js";
import { i as c, j as u } from "./@tanstack-B4B5CfFY.js";
import { S as _ } from "./db-master-l33tB5ke.js";
import { I as h } from "./InvitationGuard-DZ3pj6mc.js";
import "./icons-BC63ChG4.js";
import "./vendor-CjYbcnj-.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-B3Kybfa7.js";
import "./zod-fbN9ubnj.js";
import "./button-B9brLUSp.js";
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
  const f = t.lazy(() => n(() => import("./SessionMainForChat-d7pxo5bV.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])).then((o) => ({
    default: o.SessionMainForChat
  }))), x = t.lazy(() => n(() => import("./SessionMainForChallenge-OVRNPbmF.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([26,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,27,16,17,18,19,20,21,22,24])).then((o) => ({
    default: o.SessionMainForChallenge
  }))), S = t.lazy(() => n(() => import("./SessionMainForDnd-BzTASK89.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([28,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,27,17,18,19,20,21,22,24,29])).then((o) => ({
    default: o.SessionMainForDnd
  }))), j = t.lazy(() => n(() => import("./SessionMainForGroupChat-B6keBKde.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([30,1,2,3,4,6,7,5,8,9,10,11,12,14,13,15,27,17,18,19,20,21,22,24])).then((o) => ({
    default: o.SessionMainForGroupChat
  }))), E = t.lazy(() => n(() => import("./SessionMainForSmallTown-BQfgSPV7.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([31,1,2,3,4,6,7,5,8,10,11,12,13,32,19,18,20,14,15,17,23,24,25,33,34,29,35])).then((o) => ({
    default: o.SessionMainForSmallTown
  })));
  q = function() {
    var _a;
    const { sessionId: o } = a.useParams(), l = a.useSearch(), { data: m = [] } = c((d) => d.from({
      s: _
    }).where(({ s: p }) => u(p.id, o))), s = ((_a = m[0]) == null ? void 0 : _a.mode) || l.mode, r = s === "dnd" ? "dnd" : s === "small-town" ? "small-town" : void 0, i = e.jsx(t.Suspense, {
      fallback: e.jsx("div", {
        className: "flex flex-col items-center justify-center h-full text-muted-foreground space-y-4",
        children: e.jsx("p", {
          children: "\u52A0\u8F7D\u4E2D..."
        })
      }),
      children: s === "dnd" ? e.jsx(S, {
        sessionId: o
      }) : s === "group-chat" ? e.jsx(j, {
        sessionId: o
      }) : s === "challenge" ? e.jsx(x, {
        sessionId: o
      }) : s === "small-town" ? e.jsx(E, {
        sessionId: o
      }) : e.jsx(f, {
        sessionId: o
      })
    });
    return r ? e.jsx(h, {
      requiredFeature: r,
      children: i
    }) : i;
  };
});
export {
  __tla,
  q as component
};
