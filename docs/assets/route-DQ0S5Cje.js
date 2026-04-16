import { j as e } from "./react-gFHNOnf5.js";
import { L as o, O as t } from "./@tanstack-DDpiKjUN.js";
import { F as s } from "./favbook-auth-required-card-ClOgy5qr.js";
import { u as i } from "./use-favbook-session-Dus67Jod.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./button-D3G-RLOw.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./card-B4CxGEM-.js";
import "./favbook-auth-store-Dar1sz9f.js";
function j() {
  const { isAuthed: r } = i();
  return r ? e.jsxs("div", { className: "space-y-4", children: [e.jsxs("nav", { className: "flex flex-wrap gap-2 border rounded-lg p-1 bg-muted/30", children: [e.jsx(o, { to: "/feeds", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "Feed \u5217\u8868" }), e.jsx(o, { to: "/feeds/create", className: "px-3 py-1.5 text-sm rounded-md hover:bg-background [&.active]:bg-background [&.active]:shadow", children: "\u53D1\u5E03 Feed" })] }), e.jsx(t, {})] }) : e.jsx(s, { title: "Feeds \u9700\u8981\u767B\u5F55", description: "\u8BF7\u5148\u586B\u5199\u540E\u7AEF\u5730\u5740\u3001\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u518D\u7BA1\u7406\u79C1\u6709 Feed\u3002" });
}
export {
  j as component
};
