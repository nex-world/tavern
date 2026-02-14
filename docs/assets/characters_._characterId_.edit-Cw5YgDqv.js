import { j as t, t as c } from "./react-D9TtqY-V.js";
import { f as h, i as u } from "./@tanstack-3iyDWv8L.js";
import { C as x } from "./CharacterCreationForm-djD1miHk.js";
import { C as f, m as C } from "./db-master-BrZHBPj2.js";
import { B as i } from "./button-CMoAlsw3.js";
import { d as v } from "./index-IzUhM_kF.js";
import { x as j } from "./icons-bBaH0MBC.js";
import "./vendor-C4ToNUTj.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-C2pyTzVO.js";
import "./input-CtGFdN_9.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
import "./textarea-NuAUq_bK.js";
import "./card-85OZoUtz.js";
import "./label-CBzbyhxK.js";
import "./switch-CGreuh1l.js";
import "./zod-fbN9ubnj.js";
function q() {
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
  q as component
};
