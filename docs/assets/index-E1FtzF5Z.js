import { r as o, u, j as s } from "./react-gFHNOnf5.js";
import { L as c } from "./@tanstack-DDpiKjUN.js";
import { B as i } from "./button-D3G-RLOw.js";
import { C as d, a as x, b as f, c as h, d as m } from "./card-B4CxGEM-.js";
import { d as j } from "./favbook-client-lY6O9c3T.js";
import { u as C } from "./use-favbook-session-Dus67Jod.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./favbook-auth-store-Dar1sz9f.js";
function D() {
  const { clientConfig: t } = C(), [r, p] = o.useState([]), [n, a] = o.useState(false);
  o.useEffect(() => {
    l();
  }, [t.backendUrl, t.token]);
  async function l() {
    try {
      a(true);
      const e = await j(t);
      p(e.collections);
    } catch (e) {
      u.error(e instanceof Error ? e.message : "\u52A0\u8F7D collections \u5931\u8D25");
    } finally {
      a(false);
    }
  }
  return s.jsxs(d, { children: [s.jsxs(x, { children: [s.jsx(f, { children: "\u6211\u7684 Collections" }), s.jsx(h, { children: "\u6BCF\u4E2A collection \u53EF\u5305\u542B\u591A\u4E2A\u5BF9\u8C61\uFF0C\u5E76\u8BB0\u5F55\u6536\u5F55\u7406\u7531\u3002" })] }), s.jsxs(m, { className: "space-y-3", children: [s.jsxs("div", { className: "flex flex-wrap gap-2", children: [s.jsx(i, { type: "button", size: "sm", variant: "outline", onClick: () => {
    l();
  }, disabled: n, children: n ? "\u5237\u65B0\u4E2D..." : "\u5237\u65B0" }), s.jsx(i, { asChild: true, type: "button", size: "sm", children: s.jsx(c, { to: "/collections/new", children: "\u65B0\u5EFA Collection" }) })] }), r.length === 0 ? s.jsx("p", { className: "text-sm text-muted-foreground", children: "\u6682\u65E0 collection\u3002" }) : null, s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: r.map((e) => s.jsx(d, { children: s.jsxs(m, { className: "pt-5 space-y-3", children: [s.jsx("p", { className: "font-medium", children: e.name }), e.description ? s.jsx("p", { className: "text-sm text-muted-foreground", children: e.description }) : null, s.jsxs("p", { className: "text-xs text-muted-foreground", children: ["\u5BF9\u8C61\u6570\u91CF: ", e.itemCount] }), s.jsx(i, { asChild: true, type: "button", size: "sm", variant: "outline", children: s.jsx(c, { to: "/collections/$collectionId", params: { collectionId: String(e.id) }, children: "\u67E5\u770B\u8BE6\u60C5" }) })] }) }, e.id)) })] })] });
}
export {
  D as component
};
