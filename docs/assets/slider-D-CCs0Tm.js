import { o as s, b as c, n as r, s as o, a as u, _ as f, r as T, c as E } from "./zod-fbN9ubnj.js";
import { r as S, j as m, aA as b, aB as p, aC as I, aD as w } from "./react-D9TtqY-V.js";
import { c as y } from "./shadcn-utils-BMZD7_jZ.js";
const W = 25, Z = 20, v = 5e3, h = 10, k = 2, G = k * 60 / h, C = 100, j = 60 / h, U = 23, q = 40, F = { WHEAT: { name: "\u5C0F\u9EA6" }, FLOUR: { name: "\u9762\u7C89" }, BREAD: { name: "\u9762\u5305", stamina: 5 }, GRAPE: { name: "\u8461\u8404" }, JUICE: { name: "\u679C\u6C41", happiness: 4 } }, g = { Farm: { x: 1, y: 1, w: 4, h: 4, label: "\u{1F33E} \u519C\u573A", color: "#f1c40f", isWork: true, output: "6 \u5C0F\u9EA6", requires: "\u65E0", grid: [["E", 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }, Mill: { x: 6, y: 1, w: 3, h: 3, label: "\u2699\uFE0F \u78E8\u574A", color: "#95a5a6", isWork: true, output: "15 \u9762\u7C89", requires: "20 \u5C0F\u9EA6", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Bakery: { x: 1, y: 6, w: 3, h: 3, label: "\u{1F35E} \u9762\u5305\u623F", color: "#e67e22", isWork: true, output: "4 \u9762\u5305", requires: "2 \u9762\u7C89", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Vineyard: { x: 10, y: 1, w: 4, h: 4, label: "\u{1F347} \u8461\u8404\u56ED", color: "#d9a3b6", isWork: true, output: "3 \u8461\u8404", requires: "\u65E0", grid: [["E", 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }, JuiceFactory: { x: 15, y: 1, w: 3, h: 3, label: "\u{1F379} \u679C\u6C41\u5382", color: "#f6d892", isWork: true, output: "4 \u679C\u6C41", requires: "4 \u8461\u8404", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Shop: { x: 16, y: 6, w: 3, h: 3, label: "\u{1F6D2} \u5546\u5E97", color: "#3498db", isShop: true, info: "\u53EF\u4EA4\u6613\u7269\u54C1\u3002", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Park: { x: 16, y: 10, w: 3, h: 3, label: "\u{1F333} \u516C\u56ED", color: "#2ecc71", isRest: true, info: "\u653E\u677E\u4F11\u606F\u7684\u597D\u53BB\u5904\u3002", grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, SalesStand: { x: 9, y: 7, w: 6, h: 6, label: "\u{1F6CD}\uFE0F \u5546\u4E1A\u5927\u9053", color: "#f8c291", isSalesStand: true, info: "\u53EF\u5BC4\u5356\u548C\u8D2D\u4E70\u5176\u4ED6\u5C45\u6C11\u7684\u7269\u54C1\u3002", grid: [["E", 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]] }, Zone_A: { x: 1, y: 11, w: 3, h: 3, label: "\u{1F3E0} \u6551\u6D4E\u623F\u533A", color: "#e0e0e0", isHome: true, displayCharPos: { x: 2, y: 12 }, homeLevel: 1, grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Zone_B: { x: 1, y: 15, w: 4, h: 4, label: "\u{1F3E2} \u516C\u5BD3\u533A", color: "#bdc3c7", isHome: true, displayCharPos: { x: 2, y: 17 }, homeLevel: 2, grid: [["E", 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }, Zone_C: { x: 6, y: 13, w: 3, h: 3, label: "\u{1F3E1} \u5957\u623F\u533A", color: "#95a5a6", isHome: true, displayCharPos: { x: 7, y: 14 }, homeLevel: 3, grid: [["E", 1, 1], [1, 1, 1], [1, 1, 1]] }, Zone_D: { x: 10, y: 15, w: 4, h: 4, label: "\u{1F48E} \u8C6A\u534E\u5957\u623F\u533A", color: "#7f8c8d", isHome: true, displayCharPos: { x: 11, y: 17 }, homeLevel: 4, grid: [["E", 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }, Zone_E: { x: 6, y: 7, w: 2, h: 2, label: "\u{1F3F0} \u522B\u5885\u533A", color: "#34495e", isHome: true, displayCharPos: { x: 6, y: 7 }, homeLevel: 5, grid: [["E", 1], [1, 1]] } }, A = Object.keys(g), Y = A.filter((e) => g[e].isHome), x = [{ name: "\u6D41\u6D6A\u8005", cost: 0, max_stamina: 50, max_energy: 30, zoneKey: null }, { name: "\u6551\u6D4E\u623F", cost: 100, max_stamina: 65, max_energy: 45, zoneKey: "Zone_A" }, { name: "\u516C\u5BD3", cost: 300, max_stamina: 80, max_energy: 60, zoneKey: "Zone_B" }, { name: "\u5957\u623F", cost: 600, max_stamina: 95, max_energy: 75, zoneKey: "Zone_C" }, { name: "\u8C6A\u534E\u5957\u623F", cost: 1200, max_stamina: 110, max_energy: 90, zoneKey: "Zone_D" }, { name: "\u522B\u5885", cost: 2500, max_stamina: 130, max_energy: 110, zoneKey: "Zone_E" }], R = { aiEnabled: true, workingInterval: 6, idleInterval: 2, aiDecisionOnTaskComplete: true, waitForAICompletion: true, maxAIWaitTicks: 3, aiTimeoutMs: 3e4, fastTickInterval: 500, normalTickInterval: 5e3 }, L = s({ id: o(), name: o(), personality: o(), avatar: o().optional(), systemPrompt: o(), color: o(), longTermGoal: o(), initialMoney: r(), initialHomeLevel: r(), aiEnabled: c() });
s({ worldName: o(), worldDescription: o(), characterIds: u(o()), characterSnapshots: u(L), tickInterval: r().default(v), minsPerTick: r().default(h), settings: s({ aiEnabled: c(), workingInterval: r(), idleInterval: r(), aiDecisionOnTaskComplete: c(), waitForAICompletion: c().default(true), maxAIWaitTicks: r().default(3), aiTimeoutMs: r().default(3e4), fastTickInterval: r().default(500), normalTickInterval: r().default(5e3) }).default(R) });
s({ currentPhase: f(["idle", "running", "paused"]), gameTime: s({ day: r(), hour: r(), minute: r() }), tickCount: r(), isRunning: c(), characterStates: T(o(), E()), salesStand: u(s({ id: o(), sellerId: o(), item: o(), price: r(), quantity: r() })), logs: u(s({ time: o(), source: o(), content: o(), type: f(["sys", "chat", "trade"]) })), nextCharacterId: r() });
function N(e) {
  const a = x[e] || x[0];
  return { level: e, name: a.name, cost: a.cost, max_stamina: a.max_stamina, max_energy: a.max_energy, zoneKey: a.zoneKey };
}
function O(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}`;
}
function $(e) {
  return `\u7B2C ${e.day} \u5929 ${O(e)}`;
}
function D(e) {
  if (e.grid) {
    e.occupiedTiles = /* @__PURE__ */ new Set(), e.occludedTiles = /* @__PURE__ */ new Set();
    for (let a = 0; a < e.grid.length; a++) for (let n = 0; n < e.grid[a].length; n++) {
      const t = e.grid[a][n], i = e.x + n, l = e.y + a, d = `${i},${l}`;
      t === "E" ? e.entrance = { x: i, y: l } : t === 0 ? e.occludedTiles.add(d) : t === 1 && e.occupiedTiles.add(d);
    }
  }
}
for (const e of Object.values(g)) D(e);
function K(e, a, n) {
  const t = N(e.initialHomeLevel);
  return { id: e.id, name: e.name, personality: e.personality, color: e.color, avatar: e.avatar, systemPrompt: e.systemPrompt, aiEnabled: e.aiEnabled, gridX: a, gridY: n, locationName: "Wander", money: e.initialMoney, inventory: {}, stamina: t.max_stamina, maxStamina: t.max_stamina, energy: t.max_energy, maxEnergy: t.max_energy, happiness: C, home: t, homeZoneKey: t.zoneKey, longTermGoal: e.longTermGoal, currentStrategy: "\u5C1A\u672A\u5236\u5B9A\u7B56\u7565", taskName: "Idle", taskTarget: null, taskTimer: 0, status: "\u7A7A\u95F2", thought: "\u601D\u8003\u4E2D...", todoList: [], currentTodo: null, lastThinkTick: 0, idleTicksCount: 0, conversationState: { activeConversations: {}, totalTurnsToday: 0 }, history: [], dailyLog: [], wroteDiaryToday: false, dailyEntry: null, dailyWisdom: null, dailyShopVisit: false, dailySalesStandVisit: false };
}
function B(e) {
  const a = {};
  return e.characterSnapshots.forEach((n, t) => {
    const i = 5 + t % 4 * 3, l = 5 + Math.floor(t / 4) * 3;
    a[n.id] = K(n, i, l);
  }), { currentPhase: "idle", gameTime: { day: 1, hour: 8, minute: 0 }, tickCount: 0, isRunning: false, characterStates: a, salesStand: [], logs: [], nextCharacterId: e.characterSnapshots.length + 1 };
}
function X({ className: e, defaultValue: a, value: n, min: t = 0, max: i = 100, ...l }) {
  const d = S.useMemo(() => Array.isArray(n) ? n : Array.isArray(a) ? a : [t, i], [n, a, t, i]);
  return m.jsxs(b, { "data-slot": "slider", defaultValue: a, value: n, min: t, max: i, className: y("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", e), ...l, children: [m.jsx(p, { "data-slot": "slider-track", className: y("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"), children: m.jsx(I, { "data-slot": "slider-range", className: y("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full") }) }), Array.from({ length: d.length }, (P, _) => m.jsx(w, { "data-slot": "slider-thumb", className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" }, _))] });
}
export {
  U as D,
  W as G,
  F as I,
  g as L,
  h as M,
  Y as R,
  X as S,
  j as T,
  G as W,
  $ as a,
  Z as b,
  B as c,
  C as d,
  k as e,
  O as f,
  A as g,
  q as h
};
