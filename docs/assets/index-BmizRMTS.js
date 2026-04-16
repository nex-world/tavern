import { r, u as p, j as e } from "./react-gFHNOnf5.js";
import { B as x } from "./button-D3G-RLOw.js";
import { C as d, a as u, b as j, c as f, d as m } from "./card-B4CxGEM-.js";
import { c as h } from "./favbook-client-lY6O9c3T.js";
import { F as g } from "./favbook-object-card-g2svvmp6.js";
import { u as C } from "./use-favbook-session-Dus67Jod.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./badge-C9CmQsZA.js";
import "./media-item-content-cYjFkmyo.js";
import "./dialog-CPE3M3ew.js";
import "./icons-CW-0NDo_.js";
import "./favbook-auth-store-Dar1sz9f.js";
function O() {
  const { clientConfig: t } = C(), [o, l] = r.useState([]), [a, i] = r.useState(false);
  r.useEffect(() => {
    n();
  }, [t.backendUrl, t.token]);
  async function n() {
    try {
      i(true);
      const s = await h(t);
      l(s.feeds);
    } catch (s) {
      p.error(s instanceof Error ? s.message : "\u52A0\u8F7D feeds \u5931\u8D25");
    } finally {
      i(false);
    }
  }
  return e.jsxs(d, { children: [e.jsxs(u, { children: [e.jsx(j, { children: "\u6211\u7684 Feeds" }), e.jsx(f, { children: "\u4EC5\u663E\u793A\u5F53\u524D\u7528\u6237\u81EA\u5DF1\u7684\u52A8\u6001\u5185\u5BB9\u3002" })] }), e.jsxs(m, { className: "space-y-3", children: [e.jsx("div", { children: e.jsx(x, { type: "button", variant: "outline", size: "sm", onClick: () => {
    n();
  }, disabled: a, children: a ? "\u5237\u65B0\u4E2D..." : "\u5237\u65B0" }) }), o.length === 0 ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "\u6682\u65E0 feed\uFF0C\u53BB\u201C\u53D1\u5E03 Feed\u201D\u9875\u521B\u5EFA\u7B2C\u4E00\u6761\u3002" }) : null, o.map((s) => e.jsx(d, { children: e.jsxs(m, { className: "pt-5 space-y-3", children: [e.jsx("p", { className: "text-sm whitespace-pre-wrap", children: s.content }), e.jsx("p", { className: "text-xs text-muted-foreground", children: new Date(s.createdAt).toLocaleString() }), s.objects.length > 0 ? e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: s.objects.map((c) => e.jsx(g, { object: c }, `${s.id}-${c.id}`)) }) : e.jsx("p", { className: "text-xs text-muted-foreground", children: "\u672A\u5173\u8054\u6536\u85CF\u5BF9\u8C61" })] }) }, s.id))] })] });
}
export {
  O as component
};
