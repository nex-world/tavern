import { r as t, u as c, j as e } from "./react-gFHNOnf5.js";
import { B as H } from "./badge-C9CmQsZA.js";
import { B as l } from "./button-D3G-RLOw.js";
import { C as u, a as x, b as j, c as S, d as h } from "./card-B4CxGEM-.js";
import { D as I, g as O, a as D, b as w, c as F } from "./dialog-CPE3M3ew.js";
import { L as G } from "./label-BU_LC6Ti.js";
import { T as U } from "./textarea-DqdRyzs9.js";
import { j as q, e as J, g as K, k as Q } from "./favbook-client-lY6O9c3T.js";
import { F as V } from "./favbook-media-search-panel-yF-9_fZQ.js";
import { F as M, c as W } from "./favbook-object-card-g2svvmp6.js";
import { F as X } from "./media-item-content-cYjFkmyo.js";
import { u as Y } from "./use-favbook-session-Dus67Jod.js";
import { e as Z } from "./index-7c6pKJ8J.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
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
import "./@tanstack-DDpiKjUN.js";
import "./dexie-jNTqi4TF.js";
function De() {
  const { collectionId: f } = Z.useParams(), { clientConfig: r } = Y(), a = t.useMemo(() => Number(f), [f]), [n, T] = t.useState(null), [B, R] = t.useState([]), [g, b] = t.useState(null), [i, d] = t.useState(null), [m, v] = t.useState(""), [C, y] = t.useState(false), [N, k] = t.useState(false), [E, L] = t.useState(false), [P, z] = t.useState(false);
  t.useEffect(() => {
    !Number.isFinite(a) || a <= 0 || p();
  }, [a, r.backendUrl, r.token]);
  async function p() {
    try {
      y(true);
      const [s, o] = await Promise.all([q(r, a), J(r)]);
      T(s.collection), R(o.objects);
    } catch (s) {
      c.error(s instanceof Error ? s.message : "\u52A0\u8F7D\u8BE6\u60C5\u5931\u8D25");
    } finally {
      y(false);
    }
  }
  async function A() {
    if (!m.trim()) {
      c.error("\u8BF7\u586B\u5199\u4E3A\u4EC0\u4E48\u8981\u52A0\u5165\u8FD9\u4E2A collection");
      return;
    }
    try {
      k(true);
      let s = g;
      if (i && (s = (await K(r, W(i))).object.id), !s) {
        c.error("\u8BF7\u9009\u62E9\u4E00\u4E2A\u5BF9\u8C61\u6216\u4ECE\u641C\u7D22\u7ED3\u679C\u4E2D\u9009\u4E00\u4E2A\u5BF9\u8C61");
        return;
      }
      await Q(r, a, { objectId: s, reason: m.trim() }), c.success("\u5DF2\u52A0\u5165 collection"), v(""), d(null), await p();
    } catch (s) {
      c.error(s instanceof Error ? s.message : "\u6DFB\u52A0\u5931\u8D25");
    } finally {
      k(false);
    }
  }
  return !Number.isFinite(a) || a <= 0 ? e.jsx("p", { className: "text-sm text-destructive", children: "Collection ID \u65E0\u6548\u3002" }) : e.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-5 gap-4", children: [e.jsx("div", { className: "xl:col-span-3 space-y-4", children: e.jsxs(u, { children: [e.jsxs(x, { children: [e.jsx(j, { children: (n == null ? void 0 : n.name) ?? "Collection \u8BE6\u60C5" }), e.jsx(S, { children: (n == null ? void 0 : n.description) ?? "\u53EF\u4EE5\u5728\u6B64\u6DFB\u52A0\u5BF9\u8C61\u5E76\u5199\u5165\u7406\u7531\u3002" })] }), e.jsxs(h, { className: "space-y-3", children: [e.jsxs("div", { className: "flex flex-wrap gap-2", children: [e.jsx(l, { type: "button", size: "sm", variant: "outline", onClick: () => {
    p();
  }, disabled: C, children: C ? "\u5237\u65B0\u4E2D..." : "\u5237\u65B0" }), e.jsxs(H, { variant: "outline", children: ["\u5BF9\u8C61\u6570: ", (n == null ? void 0 : n.items.length) ?? 0] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(G, { htmlFor: "collection-add-reason", children: "\u52A0\u5165\u7406\u7531" }), e.jsx(U, { id: "collection-add-reason", value: m, onChange: (s) => v(s.target.value), placeholder: "\u4E3A\u4EC0\u4E48\u628A\u8FD9\u4E2A\u5BF9\u8C61\u653E\u8FDB\u8BE5 collection\uFF1F", rows: 3 })] }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [e.jsxs(I, { open: P, onOpenChange: z, children: [e.jsx(O, { asChild: true, children: e.jsx(l, { type: "button", variant: "outline", children: "\u4ECE\u5BF9\u8C61\u5E93\u9009\u62E9" }) }), e.jsxs(D, { className: "max-w-6xl", children: [e.jsx(w, { children: e.jsx(F, { children: "\u9009\u62E9\u5DF2\u4FDD\u5B58\u5BF9\u8C61" }) }), e.jsx("div", { className: "max-h-[65vh] overflow-auto grid grid-cols-1 md:grid-cols-2 gap-3 pr-1", children: B.map((s) => {
    const o = g === s.id;
    return e.jsx(M, { object: s, footer: e.jsx(l, { type: "button", size: "sm", variant: o ? "secondary" : "outline", onClick: () => {
      b(o ? null : s.id), d(null);
    }, children: o ? "\u5DF2\u9009\u4E2D" : "\u9009\u62E9\u8BE5\u5BF9\u8C61" }) }, s.id);
  }) })] })] }), e.jsxs(I, { open: E, onOpenChange: L, children: [e.jsx(O, { asChild: true, children: e.jsx(l, { type: "button", variant: "outline", children: "\u4E34\u65F6\u641C\u7D22\u6765\u6E90\u5BF9\u8C61" }) }), e.jsxs(D, { className: "max-w-6xl", children: [e.jsx(w, { children: e.jsx(F, { children: "\u641C\u7D22\u6765\u6E90\u5BF9\u8C61" }) }), e.jsx(V, { title: "\u641C\u7D22 Bangumi / my9 / TMDB / iTunes", description: "\u9009\u62E9\u540E\u5C06\u4F5C\u4E3A\u5F53\u524D collection \u7684\u5F85\u52A0\u5165\u5BF9\u8C61\u3002", onPick: (s) => {
    d((o) => (o == null ? void 0 : o.id) === s.id ? null : s), b(null);
  }, pickedIds: i ? [i.id] : [] })] })] })] }), e.jsx(l, { type: "button", onClick: A, disabled: N, children: N ? "\u6DFB\u52A0\u4E2D..." : "\u52A0\u5165 Collection" })] })] }) }), e.jsxs("div", { className: "xl:col-span-2 space-y-4", children: [i ? e.jsxs(u, { children: [e.jsx(x, { children: e.jsx(j, { children: "\u5F53\u524D\u5DF2\u9009\u641C\u7D22\u5BF9\u8C61" }) }), e.jsxs(h, { className: "space-y-3", children: [e.jsx(X, { item: i }), e.jsx(l, { type: "button", size: "sm", variant: "outline", onClick: () => d(null), children: "\u53D6\u6D88\u9009\u62E9" })] })] }) : null, e.jsxs(u, { children: [e.jsxs(x, { children: [e.jsx(j, { children: "\u5DF2\u6536\u5F55\u5BF9\u8C61" }), e.jsx(S, { children: "\u6BCF\u6761\u8BB0\u5F55\u90FD\u5305\u542B\u4F60\u5199\u4E0B\u7684\u6536\u5F55\u7406\u7531\u3002" })] }), e.jsxs(h, { className: "space-y-3", children: [(n == null ? void 0 : n.items.length) ? null : e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u5F53\u524D collection \u8FD8\u6CA1\u6709\u5BF9\u8C61\u3002" }), n == null ? void 0 : n.items.map((s) => e.jsx(M, { object: s.object, footer: s.reason ? e.jsxs("p", { className: "text-sm text-muted-foreground whitespace-pre-wrap", children: ["\u6536\u5F55\u7406\u7531\uFF1A", s.reason] }) : null }, s.relationId))] })] })] })] });
}
export {
  De as component
};
