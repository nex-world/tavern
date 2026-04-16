import { r as a, u as c, j as e } from "./react-gFHNOnf5.js";
import { f as U } from "./@tanstack-DDpiKjUN.js";
import { B as v } from "./badge-C9CmQsZA.js";
import { B as i } from "./button-D3G-RLOw.js";
import { C as m, a as y, b as C, c as O, d as p } from "./card-B4CxGEM-.js";
import { D as F, g as S, a as N, b as k, c as D } from "./dialog-CPE3M3ew.js";
import { L as q } from "./label-BU_LC6Ti.js";
import { T as G } from "./textarea-DqdRyzs9.js";
import { e as J, g as K, h as Q } from "./favbook-client-lY6O9c3T.js";
import { F as V } from "./favbook-media-search-panel-yF-9_fZQ.js";
import { F as W, c as X } from "./favbook-object-card-g2svvmp6.js";
import { F as Y } from "./media-item-content-cYjFkmyo.js";
import { u as Z } from "./use-favbook-session-Dus67Jod.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./icons-CW-0NDo_.js";
import "./input-KwncZLGm.js";
import "./select-BkM7Xz_F.js";
import "./search-DglwIvcr.js";
import "./bangumi-client-Bal74wg2.js";
import "./my9-client-CnYUKa6h.js";
import "./bangumi-store-D4IfMGL6.js";
import "./my9-constants-aq-BUJrZ.js";
import "./favbook-auth-store-Dar1sz9f.js";
function ke() {
  const M = U(), { clientConfig: o } = Z(), [l, w] = a.useState(""), [I, T] = a.useState([]), [d, B] = a.useState([]), [x, E] = a.useState({}), [h, u] = a.useState(false), [j, f] = a.useState(false), [L, P] = a.useState(false), [z, H] = a.useState(false), n = a.useMemo(() => Object.values(x), [x]);
  a.useEffect(() => {
    g();
  }, [o.backendUrl, o.token]);
  async function g() {
    try {
      u(true);
      const s = await J(o);
      T(s.objects);
    } catch (s) {
      c.error(s instanceof Error ? s.message : "\u52A0\u8F7D\u5BF9\u8C61\u5931\u8D25");
    } finally {
      u(false);
    }
  }
  function R(s) {
    B((t) => t.includes(s) ? t.filter((r) => r !== s) : [...t, s]);
  }
  function b(s) {
    E((t) => {
      if (t[s.id]) {
        const r = { ...t };
        return delete r[s.id], r;
      }
      return { ...t, [s.id]: s };
    });
  }
  async function A() {
    if (!l.trim()) {
      c.error("Feed \u6587\u672C\u4E0D\u80FD\u4E3A\u7A7A");
      return;
    }
    try {
      f(true);
      const s = new Set(d);
      for (const t of n) {
        const r = await K(o, X(t));
        s.add(r.object.id);
      }
      await Q(o, { content: l.trim(), objectIds: Array.from(s) }), c.success("Feed \u53D1\u5E03\u6210\u529F"), M({ to: "/feeds" });
    } catch (s) {
      c.error(s instanceof Error ? s.message : "\u53D1\u5E03\u5931\u8D25");
    } finally {
      f(false);
    }
  }
  return e.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-5 gap-4", children: [e.jsx("div", { className: "xl:col-span-3 space-y-4", children: e.jsxs(m, { children: [e.jsxs(y, { children: [e.jsx(C, { children: "\u53D1\u5E03 Feed" }), e.jsx(O, { children: "Feed \u5185\u5BB9\u662F\u7EAF\u6587\u672C\uFF1B\u5BF9\u8C61\u5173\u8054\u901A\u8FC7\u5BF9\u8BDD\u6846\u641C\u7D22/\u9009\u62E9\u5B8C\u6210\u3002" })] }), e.jsxs(p, { className: "space-y-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(q, { htmlFor: "feed-content", children: "\u6587\u672C\u5185\u5BB9" }), e.jsx(G, { id: "feed-content", rows: 7, placeholder: "\u8F93\u5165\u4F60\u60F3\u53D1\u5E03\u7684\u5185\u5BB9...", value: l, onChange: (s) => w(s.target.value) })] }), e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [e.jsxs(v, { variant: "outline", children: ["\u5DF2\u9009\u73B0\u6709\u5BF9\u8C61: ", d.length] }), e.jsxs(v, { variant: "outline", children: ["\u5DF2\u9009\u641C\u7D22\u5BF9\u8C61: ", n.length] })] }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [e.jsxs(F, { open: L, onOpenChange: P, children: [e.jsx(S, { asChild: true, children: e.jsx(i, { type: "button", variant: "outline", children: "\u4ECE\u6765\u6E90\u4E34\u65F6\u641C\u7D22\u5BF9\u8C61" }) }), e.jsxs(N, { className: "max-w-6xl", children: [e.jsx(k, { children: e.jsx(D, { children: "\u641C\u7D22\u6765\u6E90\u5BF9\u8C61" }) }), e.jsx(V, { title: "\u641C\u7D22 Bangumi / my9 / TMDB / iTunes", description: "\u9009\u62E9\u7ED3\u679C\u540E\u4F1A\u52A0\u5165\u5F53\u524D\u5F85\u53D1\u5E03 Feed \u7684\u5BF9\u8C61\u96C6\u5408\u3002", onPick: b, pickedIds: n.map((s) => s.id) })] })] }), e.jsxs(F, { open: z, onOpenChange: H, children: [e.jsx(S, { asChild: true, children: e.jsx(i, { type: "button", variant: "outline", children: "\u4ECE\u5DF2\u6709\u5BF9\u8C61\u5E93\u9009\u62E9" }) }), e.jsxs(N, { className: "max-w-6xl", children: [e.jsx(k, { children: e.jsx(D, { children: "\u5DF2\u4FDD\u5B58\u5BF9\u8C61\u5E93" }) }), e.jsxs("div", { className: "space-y-3", children: [e.jsx(i, { type: "button", size: "sm", variant: "outline", onClick: () => {
    g();
  }, disabled: h, children: h ? "\u5237\u65B0\u4E2D..." : "\u5237\u65B0\u5BF9\u8C61\u5E93" }), e.jsx("div", { className: "max-h-[65vh] overflow-auto grid grid-cols-1 md:grid-cols-2 gap-3 pr-1", children: I.map((s) => {
    const t = d.includes(s.id);
    return e.jsx(W, { object: s, footer: e.jsx(i, { type: "button", size: "sm", variant: t ? "secondary" : "default", onClick: () => R(s.id), children: t ? "\u5DF2\u9009\u62E9" : "\u9009\u62E9\u8BE5\u5BF9\u8C61" }) }, s.id);
  }) })] })] })] })] }), e.jsx(i, { type: "button", onClick: A, disabled: j, children: j ? "\u53D1\u5E03\u4E2D..." : "\u53D1\u5E03 Feed" })] })] }) }), e.jsx("div", { className: "xl:col-span-2 space-y-4", children: e.jsxs(m, { children: [e.jsxs(y, { children: [e.jsx(C, { children: "\u5DF2\u9009\u641C\u7D22\u5BF9\u8C61" }), e.jsx(O, { children: "\u8FD9\u91CC\u4F1A\u5C55\u793A\u5E26\u56FE\u7247\u7684\u5BF9\u8C61\u9884\u89C8\u3002" })] }), e.jsxs(p, { className: "space-y-3", children: [n.length === 0 ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u6682\u65E0\u3002" }) : null, n.map((s) => e.jsx(m, { children: e.jsxs(p, { className: "pt-5 space-y-3", children: [e.jsx(Y, { item: s }), e.jsx(i, { type: "button", size: "sm", variant: "outline", onClick: () => b(s), children: "\u79FB\u9664" })] }) }, s.id))] })] }) })] });
}
export {
  ke as component
};
