import { j as t, u as c } from "./react-BPCshYXX.js";
import { f as h, i as u } from "./@tanstack-BuNX36FW.js";
import { C as x } from "./CharacterCreationForm-r4hjOvIc.js";
import { C as f, m as C } from "./db-master-xI8DZi24.js";
import { B as i } from "./button-CKyQl8ny.js";
import { d as v } from "./index-hrsTZy9Q.js";
import { G as j } from "./icons-BpfK1DnB.js";
import "./vendor-DqU8PgXE.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-DOn8o3hw.js";
import "./input-Dje6SeH9.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./textarea-Dc_MpBxB.js";
import "./card-B79febki.js";
import "./label-DxXosFPV.js";
import "./switch-DwXGULrD.js";
import "./zod-fbN9ubnj.js";
function _() {
  const { characterId: n } = v.useParams(), o = h(), { data: m = [] } = u((r) => r.from({ c: f })), a = m.find((r) => r.id === n);
  if (!a) return t.jsxs("div", { className: "p-20 text-center flex flex-col items-center gap-4", children: [t.jsx("p", { className: "text-muted-foreground", children: "\u89D2\u8272\u4E0D\u5B58\u5728" }), t.jsx(i, { onClick: () => o({ to: "/plaza/characters" }), variant: "outline", type: "button", children: "\u8FD4\u56DE\u5217\u8868" })] });
  const p = async (r) => {
    try {
      const e = Date.now(), l = { ...a, ...r, updatedAt: e, modification_date: e };
      await C.characters.put(l), c.success(`\u89D2\u8272 ${a.name} \u5DF2\u66F4\u65B0`), o({ to: "/characters/$characterId", params: { characterId: a.id } });
    } catch (e) {
      console.error("Failed to update character:", e), c.error("\u66F4\u65B0\u89D2\u8272\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
  }, s = () => {
    o({ to: "/characters/$characterId", params: { characterId: a.id } });
  }, d = a;
  return t.jsxs("div", { className: "w-full max-w-5xl mx-auto p-4 md:p-8 space-y-6", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsxs(i, { variant: "ghost", size: "sm", className: "text-muted-foreground hover:bg-transparent", onClick: s, type: "button", children: [t.jsx(j, { className: "w-4 h-4 mr-1" }), " \u53D6\u6D88\u7F16\u8F91"] }), t.jsxs("h1", { className: "text-xl font-bold", children: ["\u7F16\u8F91\u89D2\u8272: ", a.name] })] }), t.jsx(x, { onSave: p, onCancel: s, initialData: d, mode: "edit" })] });
}
export {
  _ as component
};
