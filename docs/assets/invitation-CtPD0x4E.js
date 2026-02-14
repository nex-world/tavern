import { r, j as e, t as c } from "./react-D9TtqY-V.js";
import { B as N } from "./button-CMoAlsw3.js";
import { I as m } from "./input-CtGFdN_9.js";
import { L as d } from "./label-CBzbyhxK.js";
import { C as b, a as A, b as U, c as O, d as T } from "./card-85OZoUtz.js";
import { B as R } from "./badge-B6qKYUZD.js";
import { g as L } from "./nex-tavern-uuid-HW61e36x.js";
import { A as P, K as k, S as K, a as j, b as D, R as X } from "./icons-bBaH0MBC.js";
import "./vendor-C4ToNUTj.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./shadcn-utils-BMZD7_jZ.js";
import "./@tailwind-COJ8Fh6m.js";
import "./id-OxPLOBIU.js";
const _ = "__NexTavern_Auth_API_URL__", v = "__NexTavern_Auth_Code_Persistent__", S = "__NexTavern_Auth_Verified__", y = "__NexTavern_Auth_Permissions__";
function se() {
  var _a, _b;
  const [x, p] = r.useState(false), h = L(), [o, u] = r.useState(""), [l, f] = r.useState(""), [t, i] = r.useState(null);
  r.useEffect(() => {
    if (u(localStorage.getItem(_) || ""), f(localStorage.getItem(v) || ""), sessionStorage.getItem(S) === "true") try {
      const s = JSON.parse(sessionStorage.getItem(y) || "{}");
      i({ verified: true, features: s.features || [] });
    } catch {
    }
  }, []);
  const w = (s) => {
    u(s), localStorage.setItem(_, s);
  }, I = (s) => {
    f(s), localStorage.setItem(v, s);
  }, C = async () => {
    if (!o.trim() || !l.trim()) {
      c.error("\u8BF7\u586B\u5199\u5B8C\u6574\u914D\u7F6E");
      return;
    }
    p(true), i(null);
    const s = o.trim().replace(/\/$/, ""), E = l.trim();
    try {
      const a = await fetch(`${s}/verify`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: E, uuid: h }) }), n = await a.json();
      if (!a.ok) throw new Error(n.error || "\u9A8C\u8BC1\u5931\u8D25");
      if (n.valid) {
        c.success("\u6821\u9A8C\u6210\u529F");
        const g = n.permissions || {};
        sessionStorage.setItem(S, "true"), sessionStorage.setItem(y, JSON.stringify(g)), i({ verified: true, features: g.features || [] });
      } else throw new Error("\u9080\u8BF7\u7801\u65E0\u6548");
    } catch (a) {
      i({ verified: false, error: a.message }), c.error(a.message);
    } finally {
      p(false);
    }
  };
  return e.jsx("div", { className: "min-h-screen bg-muted/20 flex flex-col items-center p-8", children: e.jsxs("div", { className: "w-full max-w-md space-y-6", children: [e.jsxs(N, { variant: "ghost", size: "sm", onClick: () => window.history.back(), className: "gap-2", children: [e.jsx(P, { className: "w-4 h-4" }), "\u8FD4\u56DE"] }), e.jsxs(b, { className: "shadow-lg", children: [e.jsxs(A, { children: [e.jsxs(U, { className: "text-2xl font-bold flex items-center gap-2", children: [e.jsx(k, { className: "w-6 h-6 text-primary" }), "\u9080\u8BF7\u7801\u7BA1\u7406"] }), e.jsx(O, { children: "\u914D\u7F6E\u60A8\u7684\u6388\u6743\u4FE1\u606F\u4EE5\u89E3\u9501\u5185\u6D4B\u529F\u80FD" })] }), e.jsxs(T, { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(d, { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [e.jsx(K, { className: "w-3 h-3" }), "\u8BBE\u5907 UUID (\u4E0D\u53EF\u4FEE\u6539)"] }), e.jsx(m, { value: h, disabled: true, className: "bg-muted text-xs font-mono h-9" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: "code", children: "\u9080\u8BF7\u7801" }), e.jsx(m, { id: "code", value: l, onChange: (s) => I(s.target.value), placeholder: "\u8F93\u5165\u9080\u8BF7\u7801 (\u4F8B\u5982: NEX-XXXX)", className: "h-10" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(d, { htmlFor: "apiUrl", children: "\u670D\u52A1\u5668\u5730\u5740" }), e.jsx(m, { id: "apiUrl", value: o, onChange: (s) => w(s.target.value), placeholder: "https://auth.example.workers.dev", className: "h-10" })] }), t && e.jsx("div", { className: `p-4 rounded-lg border transition-all ${t.verified ? "bg-primary/5 border-primary/20" : "bg-destructive/5 border-destructive/20"}`, children: t.verified ? e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "text-sm font-bold text-primary flex items-center gap-2", children: [e.jsx(j, { className: "w-4 h-4" }), "\u6821\u9A8C\u901A\u8FC7"] }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [(_a = t.features) == null ? void 0 : _a.map((s) => e.jsx(R, { variant: "secondary", className: "px-2 py-0.5", children: s }, s)), ((_b = t.features) == null ? void 0 : _b.length) === 0 && e.jsx("span", { className: "text-xs text-muted-foreground", children: "\u57FA\u7840\u6743\u9650" })] })] }) : e.jsxs("div", { className: "text-sm text-destructive flex items-center gap-2 font-medium", children: [e.jsx(D, { className: "w-4 h-4" }), t.error || "\u9A8C\u8BC1\u5931\u8D25"] }) }), e.jsxs(N, { onClick: C, disabled: x, className: "w-full h-11 text-base font-medium gap-2", children: [x ? e.jsx(X, { className: "w-5 h-5 animate-spin" }) : e.jsx(j, { className: "w-5 h-5" }), "\u7ACB\u5373\u6821\u9A8C\u6743\u9650"] })] })] })] }) });
}
export {
  se as component
};
