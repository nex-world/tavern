import { r, j as e } from "./react-D9TtqY-V.js";
import { B as _ } from "./button-CMoAlsw3.js";
import { g as j } from "./nex-tavern-uuid-HW61e36x.js";
import { f as E } from "./@tanstack-3iyDWv8L.js";
import { L as I, b as w, K as A } from "./icons-bBaH0MBC.js";
const O = "__NexTavern_Auth_API_URL__", C = "__NexTavern_Auth_Code_Persistent__", h = "__NexTavern_Auth_Verified__", g = "__NexTavern_Auth_Permissions__";
function K({ children: p, requiredFeature: s = "default" }) {
  const S = E(), [n, i] = r.useState(true), [N, o] = r.useState(false), [v, c] = r.useState(null), m = r.useCallback(async () => {
    const l = localStorage.getItem(O), t = localStorage.getItem(C), a = j();
    if (!l || !t) {
      c("\u5C1A\u672A\u914D\u7F6E\u9080\u8BF7\u7801\u6216\u670D\u52A1\u5668\u5730\u5740"), i(false);
      return;
    }
    const u = l.trim().replace(/\/$/, "");
    try {
      i(true);
      const f = await fetch(`${u}/verify`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: t.trim(), uuid: a }) }), d = await f.json();
      if (!f.ok) throw new Error(d.error || "\u9A8C\u8BC1\u5931\u8D25");
      if (d.valid) {
        const x = d.permissions || {};
        sessionStorage.setItem(h, "true"), sessionStorage.setItem(g, JSON.stringify(x));
        const y = Array.isArray(x.features) ? x.features : [];
        s === "default" || y.includes(s) ? (o(true), c(null)) : (o(false), c(`\u6743\u9650\u4E0D\u8DB3\uFF1A\u60A8\u7684\u9080\u8BF7\u7801\u65E0\u6CD5\u8BBF\u95EE\u300C${s}\u300D\u529F\u80FD`));
      } else throw new Error("\u9080\u8BF7\u7801\u65E0\u6548");
    } catch (f) {
      c(f.message), o(false);
    } finally {
      i(false);
    }
  }, [s]);
  return r.useEffect(() => {
    const l = sessionStorage.getItem(h) === "true", t = sessionStorage.getItem(g);
    if (l && t) try {
      const a = JSON.parse(t), u = Array.isArray(a.features) ? a.features : [];
      if (s === "default" || u.includes(s)) {
        o(true), i(false);
        return;
      }
    } catch {
    }
    m();
  }, [m, s]), N ? e.jsx(e.Fragment, { children: p }) : e.jsxs("div", { className: "flex flex-col items-center justify-center min-h-[60vh] p-6 text-center space-y-8 animate-in fade-in duration-500", children: [e.jsx("div", { className: "w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center", children: n ? e.jsx(I, { className: "w-10 h-10 animate-spin text-primary" }) : e.jsx(w, { className: "w-10 h-10 text-destructive" }) }), e.jsxs("div", { className: "max-w-md space-y-2", children: [e.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: n ? "\u6B63\u5728\u6821\u9A8C\u6743\u9650..." : "\u8BBF\u95EE\u53D7\u9650" }), e.jsx("p", { className: "text-muted-foreground", children: n ? "\u8BF7\u7A0D\u5019\uFF0C\u6211\u4EEC\u6B63\u5728\u9A8C\u8BC1\u60A8\u7684\u8BBE\u5907\u6388\u6743\u72B6\u6001\u3002" : v })] }), !n && e.jsxs("div", { className: "flex flex-col gap-3 w-full max-w-xs", children: [e.jsxs(_, { onClick: () => S({ to: "/invitation" }), size: "lg", className: "w-full gap-2 font-semibold", children: [e.jsx(A, { className: "w-4 h-4" }), "\u524D\u5F80\u914D\u7F6E\u9080\u8BF7\u7801"] }), e.jsx(_, { variant: "outline", onClick: () => m(), className: "w-full", children: "\u91CD\u65B0\u5C1D\u8BD5\u6821\u9A8C" })] })] });
}
export {
  K as I
};
