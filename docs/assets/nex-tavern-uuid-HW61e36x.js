import { n } from "./id-OxPLOBIU.js";
const t = "__NexTavern_UUID__";
function r() {
  if (typeof window > "u") return "";
  let e = localStorage.getItem(t);
  return e || (e = n(), localStorage.setItem(t, e)), e;
}
export {
  r as g
};
