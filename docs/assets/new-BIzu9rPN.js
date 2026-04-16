import { r, j as e, u as s } from "./react-gFHNOnf5.js";
import { f } from "./@tanstack-DDpiKjUN.js";
import { B as C } from "./button-D3G-RLOw.js";
import { C as h, a as x, b as j, c as v, d as g } from "./card-B4CxGEM-.js";
import { I as y } from "./input-KwncZLGm.js";
import { L as c } from "./label-BU_LC6Ti.js";
import { T as b } from "./textarea-DqdRyzs9.js";
import { i as w } from "./favbook-client-lY6O9c3T.js";
import { u as S } from "./use-favbook-session-Dus67Jod.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./favbook-auth-store-Dar1sz9f.js";
function K() {
  const l = f(), { clientConfig: m } = S(), [t, p] = r.useState(""), [i, d] = r.useState(""), [a, n] = r.useState(false);
  async function u() {
    if (!t.trim()) {
      s.error("Collection \u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A");
      return;
    }
    try {
      n(true);
      const o = await w(m, { name: t.trim(), description: i.trim() });
      s.success("Collection \u521B\u5EFA\u6210\u529F"), l({ to: "/collections/$collectionId", params: { collectionId: String(o.id) } });
    } catch (o) {
      s.error(o instanceof Error ? o.message : "\u521B\u5EFA\u5931\u8D25");
    } finally {
      n(false);
    }
  }
  return e.jsxs(h, { children: [e.jsxs(x, { children: [e.jsx(j, { children: "\u65B0\u5EFA Collection" }), e.jsx(v, { children: "\u521B\u5EFA\u540E\u53EF\u5728\u8BE6\u60C5\u9875\u6DFB\u52A0\u5BF9\u8C61\u5E76\u5199\u5165\u6536\u5F55\u7406\u7531\u3002" })] }), e.jsxs(g, { className: "space-y-3", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { htmlFor: "new-collection-name", children: "\u540D\u79F0" }), e.jsx(y, { id: "new-collection-name", value: t, onChange: (o) => p(o.target.value), placeholder: "\u4F8B\u5982\uFF1A\u8FD1\u671F\u5FC5\u73A9\u6E38\u620F" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(c, { htmlFor: "new-collection-description", children: "\u63CF\u8FF0" }), e.jsx(b, { id: "new-collection-description", value: i, onChange: (o) => d(o.target.value), placeholder: "\u8BF4\u660E\u8FD9\u4E2A collection \u7684\u4E3B\u9898\u4E0E\u6536\u5F55\u6807\u51C6", rows: 4 })] }), e.jsx(C, { type: "button", onClick: u, disabled: a, children: a ? "\u521B\u5EFA\u4E2D..." : "\u521B\u5EFA Collection" })] })] });
}
export {
  K as component
};
