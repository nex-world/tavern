import { j as n, u as o } from "./react-gFHNOnf5.js";
import { f as c } from "./@tanstack-DDpiKjUN.js";
import { C as p } from "./CharacterCreationForm-BtiCWXs1.js";
import { m as _ } from "./db-master-DI3V0061.js";
import "./vendor-DRKpriaz.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./dexie-jNTqi4TF.js";
import "./button-D3G-RLOw.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./input-KwncZLGm.js";
import "./card-B4CxGEM-.js";
import "./label-BU_LC6Ti.js";
import "./icons-CW-0NDo_.js";
import "./switch-D6eVMgf5.js";
import "./draft-field-DvA8Eubc.js";
import "./textarea-DqdRyzs9.js";
import "./zod-DPWJ_A9_.js";
function z() {
  const t = c(), i = async (e) => {
    if (!e.name) {
      o.error("\u89D2\u8272\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A");
      return;
    }
    try {
      const r = Date.now(), s = { id: crypto.randomUUID(), name: e.name, description: e.description || "", personality: e.personality || "", scenario: e.scenario || "", first_mes: e.first_mes || "", mes_example: e.mes_example || "", creator_notes: e.creator_notes || "", system_prompt: e.system_prompt || "", post_history_instructions: e.post_history_instructions || "", alternate_greetings: e.alternate_greetings || [], tags: e.tags || [], extensions: e.extensions || {}, assets: e.assets, avatar: e.avatar, imageBase64: e.imageBase64, character_book: e.character_book, nickname: e.nickname, source: e.source, creation_date: e.creation_date || r, modification_date: e.modification_date || r, creator: "User", character_version: "1.0", group_only_greetings: [], createdAt: r, updatedAt: r };
      await _.characters.add(s);
      const m = s;
      o.success(`\u89D2\u8272 ${m.name} \u5DF2\u521B\u5EFA`), t({ to: "/plaza/characters" });
    } catch (r) {
      o.error("\u521B\u5EFA\u5931\u8D25"), console.error(r);
    }
  }, a = () => {
    t({ to: "/create" });
  };
  return n.jsx("div", { className: "p-6 w-full max-w-5xl mx-auto", children: n.jsx(p, { className: "w-full", onSave: i, onCancel: a, mode: "create" }) });
}
export {
  z as component
};
