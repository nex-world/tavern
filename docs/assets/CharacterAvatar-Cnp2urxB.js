import { j as a } from "./react-D9TtqY-V.js";
import { c as n } from "./shadcn-utils-BMZD7_jZ.js";
import { a8 as w } from "./icons-d5PdVRlQ.js";
const j = ({ character: s, size: t = "md", className: i, style: l, fallbackClassName: d, imageClassName: u, shape: x = "circle", preferLargeImage: c = false }) => {
  var _a, _b, _c, _d, _e, _f;
  const o = s.avatar ?? ((_a = s.extensions) == null ? void 0 : _a.avatar) ?? ((_c = (_b = s.assets) == null ? void 0 : _b.find((e) => e.type === "icon" && e.name === "main")) == null ? void 0 : _c.uri) ?? ((_e = (_d = s.assets) == null ? void 0 : _d.find((e) => e.name === "avatar")) == null ? void 0 : _e.uri), r = s.imageBase64 ?? ((_f = s.extensions) == null ? void 0 : _f.imageBase64), m = c ? r || o : o || r, f = { xs: "w-6 h-6", sm: "w-8 h-8", md: "w-10 h-10", lg: "w-16 h-16", xl: "w-32 h-32", custom: "" }, v = { circle: "rounded-full", square: "rounded-none", rounded: "rounded-xl" };
  return a.jsx("div", { className: n("bg-muted flex items-center justify-center overflow-hidden border shrink-0", f[t], v[x], i), style: l, children: m ? a.jsx("img", { src: m, alt: s.name || "Character Avatar", className: n("w-full h-full object-cover", u) }) : a.jsx(w, { className: n("text-muted-foreground/30", d || (t === "xl" ? "w-16 h-16" : "w-1/2 h-1/2")) }) });
};
export {
  j as C
};
