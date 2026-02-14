import { j as e, r as i, t as u } from "./react-D9TtqY-V.js";
import { B as w } from "./button-CMoAlsw3.js";
import { I as f } from "./input-CtGFdN_9.js";
import { L as h } from "./label-CBzbyhxK.js";
import { C as H, a as V, b as K, c as J, d as G } from "./card-85OZoUtz.js";
import { c as C } from "./shadcn-utils-BMZD7_jZ.js";
import { B as k } from "./badge-B6qKYUZD.js";
import { D as Y, a as Q, b as W, c as Z, d as q, e as ee } from "./dialog-v6BqSj-g.js";
import { S as se, a as ae, b as te, c as re, d as S } from "./select-BTDHXfPN.js";
import { T as le, a as ne, b as U, c as R } from "./tabs-D5XuT8p1.js";
import { C as M } from "./checkbox-DyRtCSLW.js";
import { c as ce, a as ie, P as oe, R as L, U as de, d as me } from "./icons-bBaH0MBC.js";
import "./vendor-C4ToNUTj.js";
import "./@radix-ui-BQCqNqg0.js";
import "./immer-BCQU3qJI.js";
import "./components-and-styling-lnR2ABT4.js";
import "./@tailwind-COJ8Fh6m.js";
function xe({ className: s, ...t }) {
  return e.jsx("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: e.jsx("table", { "data-slot": "table", className: C("w-full caption-bottom text-sm", s), ...t }) });
}
function he({ className: s, ...t }) {
  return e.jsx("thead", { "data-slot": "table-header", className: C("[&_tr]:border-b", s), ...t });
}
function ue({ className: s, ...t }) {
  return e.jsx("tbody", { "data-slot": "table-body", className: C("[&_tr:last-child]:border-0", s), ...t });
}
function A({ className: s, ...t }) {
  return e.jsx("tr", { "data-slot": "table-row", className: C("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", s), ...t });
}
function _({ className: s, ...t }) {
  return e.jsx("th", { "data-slot": "table-head", className: C("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", s), ...t });
}
function y({ className: s, ...t }) {
  return e.jsx("td", { "data-slot": "table-cell", className: C("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", s), ...t });
}
const E = "nex_tavern_admin_token", X = "__NexTavern_Auth_API_URL__";
function Ie() {
  const [s, t] = i.useState(null), [o, l] = i.useState("");
  i.useEffect(() => {
    const d = sessionStorage.getItem(E), n = localStorage.getItem(X);
    d && t(d), n && l(n);
  }, []);
  const x = (d, n) => {
    t(d), l(n), sessionStorage.setItem(E, d), localStorage.setItem(X, n);
  }, c = () => {
    t(null), sessionStorage.removeItem(E);
  };
  return s ? e.jsx("div", { className: "min-h-screen bg-muted/20 p-8", children: e.jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "\u7BA1\u7406\u63A7\u5236\u53F0" }), e.jsx("p", { className: "text-muted-foreground", children: "NexTavern \u9080\u8BF7\u7801\u7BA1\u7406\u7CFB\u7EDF" })] }), e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: "text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full", children: o }), e.jsxs(w, { variant: "outline", onClick: c, className: "gap-2", children: [e.jsx(ce, { className: "w-4 h-4" }), "\u9000\u51FA\u767B\u5F55"] })] })] }), e.jsx(je, { apiUrl: o, token: s, onLogout: c })] }) }) : e.jsx(pe, { onLogin: x, defaultApiUrl: o });
}
function pe({ onLogin: s, defaultApiUrl: t }) {
  const [o, l] = i.useState(t), [x, c] = i.useState(""), [d, n] = i.useState(""), [p, r] = i.useState(false), g = async (a) => {
    if (a.preventDefault(), !o || !x || !d) {
      u.error("\u8BF7\u586B\u5199\u6240\u6709\u5B57\u6BB5");
      return;
    }
    const m = o.replace(/\/$/, "");
    r(true);
    try {
      const N = await fetch(`${m}/admin/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: x, password: d }) }), T = await N.json();
      if (!N.ok) throw new Error(T.error || "\u767B\u5F55\u5931\u8D25");
      u.success("\u767B\u5F55\u6210\u529F"), s(T.token, m);
    } catch (N) {
      u.error(N instanceof Error ? N.message : "\u767B\u5F55\u51FA\u9519");
    } finally {
      r(false);
    }
  };
  return e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-muted/20 p-4", children: e.jsxs(H, { className: "w-full max-w-md", children: [e.jsxs(V, { className: "space-y-1", children: [e.jsxs(K, { className: "text-2xl font-bold flex items-center gap-2", children: [e.jsx(ie, { className: "w-6 h-6 text-primary" }), "\u7BA1\u7406\u5458\u767B\u5F55"] }), e.jsx(J, { children: "\u8BF7\u8F93\u5165\u7BA1\u7406\u5458\u51ED\u8BC1\u4EE5\u8BBF\u95EE\u63A7\u5236\u53F0" })] }), e.jsx(G, { children: e.jsxs("form", { onSubmit: g, className: "space-y-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(h, { htmlFor: "url", children: "API \u5730\u5740" }), e.jsx(f, { id: "url", placeholder: "https://auth.example.workers.dev", value: o, onChange: (a) => l(a.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(h, { htmlFor: "username", children: "\u7528\u6237\u540D" }), e.jsx(f, { id: "username", value: x, onChange: (a) => c(a.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(h, { htmlFor: "password", children: "\u5BC6\u7801" }), e.jsx(f, { id: "password", type: "password", value: d, onChange: (a) => n(a.target.value) })] }), e.jsx(w, { type: "submit", className: "w-full", disabled: p, children: p ? "\u767B\u5F55\u4E2D..." : "\u767B\u5F55" })] }) })] }) });
}
function je({ apiUrl: s, token: t, onLogout: o }) {
  const [l, x] = i.useState([]), [c, d] = i.useState(true), [n, p] = i.useState(false), r = async () => {
    d(true);
    try {
      const a = await fetch(`${s}/admin/api/codes`, { headers: { Authorization: `Bearer ${t}` } });
      if (a.status === 401) {
        o();
        return;
      }
      const m = await a.json();
      m.success ? x(m.codes) : u.error(m.error || "\u83B7\u53D6\u6570\u636E\u5931\u8D25");
    } catch {
      u.error("\u7F51\u7EDC\u9519\u8BEF");
    } finally {
      d(false);
    }
  };
  i.useEffect(() => {
    r();
  }, []);
  const g = async (a) => {
    if (confirm("\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u9080\u8BF7\u7801\u5417\uFF1F\u76F8\u5173\u7684\u6240\u6709\u8BBE\u5907\u6388\u6743\u4E5F\u5C06\u5931\u6548\u3002")) try {
      (await fetch(`${s}/admin/api/codes/${a}`, { method: "DELETE", headers: { Authorization: `Bearer ${t}` } })).ok ? (u.success("\u5220\u9664\u6210\u529F"), r()) : u.error("\u5220\u9664\u5931\u8D25");
    } catch {
      u.error("\u64CD\u4F5C\u51FA\u9519");
    }
  };
  return e.jsxs("div", { className: "space-y-6", children: [e.jsx("div", { className: "flex justify-end", children: e.jsxs(w, { onClick: () => p(true), className: "gap-2", children: [e.jsx(oe, { className: "w-4 h-4" }), "\u521B\u5EFA\u9080\u8BF7\u7801"] }) }), e.jsxs(H, { children: [e.jsx(V, { children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx(K, { children: "\u9080\u8BF7\u7801\u5217\u8868" }), e.jsx(w, { variant: "ghost", size: "icon", onClick: r, disabled: c, children: e.jsx(L, { className: `w-4 h-4 ${c ? "animate-spin" : ""}` }) })] }) }), e.jsx(G, { children: e.jsxs(xe, { children: [e.jsx(he, { children: e.jsxs(A, { children: [e.jsx(_, { children: "\u9080\u8BF7\u7801" }), e.jsx(_, { children: "\u5907\u6CE8" }), e.jsx(_, { children: "\u4F7F\u7528\u60C5\u51B5" }), e.jsx(_, { children: "\u6743\u9650" }), e.jsx(_, { children: "\u8FC7\u671F\u65F6\u95F4" }), e.jsx(_, { className: "text-right", children: "\u64CD\u4F5C" })] }) }), e.jsx(ue, { children: l.length === 0 ? e.jsx(A, { children: e.jsx(y, { colSpan: 6, className: "text-center py-8 text-muted-foreground", children: "\u6682\u65E0\u6570\u636E" }) }) : l.map((a) => {
    var _a, _b, _c;
    return e.jsxs(A, { children: [e.jsx(y, { className: "font-mono font-medium", children: a.code }), e.jsx(y, { children: a.memo }), e.jsx(y, { children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(de, { className: "w-3 h-3 text-muted-foreground" }), e.jsxs("span", { children: [a.usage_count, " / ", a.max_usages] })] }) }), e.jsx(y, { children: e.jsxs("div", { className: "flex gap-1 flex-wrap", children: [((_a = a.permissions) == null ? void 0 : _a.isAdmin) && e.jsx(k, { variant: "destructive", className: "text-[10px]", children: "Admin" }), (_c = (_b = a.permissions) == null ? void 0 : _b.features) == null ? void 0 : _c.map((m) => e.jsx(k, { variant: "secondary", className: "text-[10px]", children: m }, m)), (!a.permissions || Object.keys(a.permissions).length === 0 || !a.permissions.isAdmin && (!a.permissions.features || a.permissions.features.length === 0)) && e.jsx(k, { variant: "outline", className: "text-[10px]", children: "No Access" })] }) }), e.jsx(y, { children: a.expires_at ? e.jsx("div", { className: `text-sm ${a.expires_at < Date.now() ? "text-destructive" : ""}`, children: new Date(a.expires_at).toLocaleDateString() }) : e.jsx("span", { className: "text-muted-foreground text-sm", children: "\u6C38\u4E45\u6709\u6548" }) }), e.jsx(y, { className: "text-right", children: e.jsx(w, { variant: "ghost", size: "icon", className: "text-muted-foreground hover:text-destructive", onClick: () => g(a.code), children: e.jsx(me, { className: "w-4 h-4" }) }) })] }, a.code);
  }) })] }) })] }), e.jsx(ge, { open: n, onOpenChange: p, apiUrl: s, token: t, onSuccess: r })] });
}
function ge({ open: s, onOpenChange: t, apiUrl: o, token: l, onSuccess: x }) {
  const [c, d] = i.useState("single"), [n, p] = i.useState({ code: "", memo: "", max_usages: 3, days_valid: "0", features: [] }), [r, g] = i.useState({ prefix: "NEX-", count: 10, memo: "", max_usages: 3, days_valid: "0", features: [] }), [a, m] = i.useState(false), N = () => {
    const j = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let v = "NEX-";
    for (let b = 0; b < 8; b++) v += j.charAt(Math.floor(Math.random() * j.length));
    p((b) => ({ ...b, code: v }));
  }, T = async (j) => {
    j.preventDefault(), m(true);
    try {
      let v;
      if (c === "single") v = { code: n.code, memo: n.memo, max_usages: Number(n.max_usages), days_valid: Number(n.days_valid) === 0 ? null : Number(n.days_valid), permissions: { features: n.features } };
      else {
        const $ = Math.min(Math.max(1, r.count), 50), I = [], P = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        for (let D = 0; D < $; D++) {
          let B = "";
          for (let O = 0; O < 6; O++) B += P.charAt(Math.floor(Math.random() * P.length));
          I.push({ code: `${r.prefix}${B}`, memo: r.memo || `\u6279\u91CF\u751F\u6210 ${D + 1}/${$}`, max_usages: Number(r.max_usages), days_valid: Number(r.days_valid) === 0 ? null : Number(r.days_valid), permissions: { features: r.features } });
        }
        v = I;
      }
      const b = await fetch(`${o}/admin/api/codes`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${l}` }, body: JSON.stringify(v) }), F = await b.json();
      b.ok ? (u.success(c === "single" ? "\u9080\u8BF7\u7801\u521B\u5EFA\u6210\u529F" : `\u6210\u529F\u521B\u5EFA ${F.message}`), t(false), x(), p({ code: "", memo: "", max_usages: 3, days_valid: "0", features: [] }), g({ prefix: "NEX-", count: 10, memo: "", max_usages: 3, days_valid: "0", features: [] })) : u.error(F.error || "\u521B\u5EFA\u5931\u8D25");
    } catch {
      u.error("\u7F51\u7EDC\u9519\u8BEF");
    } finally {
      m(false);
    }
  };
  return e.jsx(Y, { open: s, onOpenChange: t, children: e.jsxs(Q, { className: "sm:max-w-[500px]", children: [e.jsxs(W, { children: [e.jsx(Z, { children: "\u521B\u5EFA\u9080\u8BF7\u7801" }), e.jsx(q, { children: "\u751F\u6210\u5355\u4E2A\u6216\u6279\u91CF\u751F\u6210\u9080\u8BF7\u7801\u3002" })] }), e.jsxs(le, { defaultValue: "single", value: c, onValueChange: d, children: [e.jsxs(ne, { className: "grid w-full grid-cols-2", children: [e.jsx(U, { value: "single", children: "\u5355\u4E2A\u521B\u5EFA" }), e.jsx(U, { value: "bulk", children: "\u6279\u91CF\u751F\u6210" })] }), e.jsxs("form", { onSubmit: T, className: "py-4 space-y-4", children: [e.jsxs(R, { value: "single", className: "space-y-4 mt-0", children: [e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(h, { htmlFor: "code", className: "text-right", children: "\u9080\u8BF7\u7801" }), e.jsxs("div", { className: "col-span-3 flex gap-2", children: [e.jsx(f, { id: "code", value: n.code, onChange: (j) => p({ ...n, code: j.target.value }), placeholder: "\u4F8B\u5982: NEX-8888", required: c === "single" }), e.jsx(w, { type: "button", variant: "secondary", size: "icon", onClick: N, title: "\u968F\u673A\u751F\u6210", children: e.jsx(L, { className: "w-4 h-4" }) })] })] }), e.jsx(z, { data: n, setData: p })] }), e.jsxs(R, { value: "bulk", className: "space-y-4 mt-0", children: [e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(h, { htmlFor: "prefix", className: "text-right", children: "\u524D\u7F00" }), e.jsx(f, { id: "prefix", value: r.prefix, onChange: (j) => g({ ...r, prefix: j.target.value }), className: "col-span-3", placeholder: "\u4F8B\u5982: NEX-" })] }), e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(h, { htmlFor: "count", className: "text-right", children: "\u6570\u91CF" }), e.jsxs("div", { className: "col-span-3 flex items-center gap-2", children: [e.jsx(f, { id: "count", type: "number", min: "1", max: "50", value: r.count, onChange: (j) => g({ ...r, count: Number(j.target.value) }) }), e.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: "\u6700\u591A 50 \u4E2A" })] })] }), e.jsx(z, { data: r, setData: g })] }), e.jsx(ee, { children: e.jsxs(w, { type: "submit", disabled: a, children: [a && e.jsx(L, { className: "mr-2 h-4 w-4 animate-spin" }), c === "single" ? "\u521B\u5EFA" : "\u6279\u91CF\u751F\u6210"] }) })] })] })] }) });
}
function z({ data: s, setData: t }) {
  const o = (l) => {
    const x = s.features || [];
    x.includes(l) ? t({ ...s, features: x.filter((c) => c !== l) }) : t({ ...s, features: [...x, l] });
  };
  return e.jsxs(e.Fragment, { children: [e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(h, { className: "text-right", children: "\u5907\u6CE8" }), e.jsx(f, { value: s.memo, onChange: (l) => t({ ...s, memo: l.target.value }), className: "col-span-3", placeholder: "\u4F8B\u5982: \u6D3B\u52A8\u5206\u53D1" })] }), e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(h, { className: "text-right", children: "\u6700\u5927\u8BBE\u5907\u6570" }), e.jsx(f, { type: "number", min: "1", value: s.max_usages, onChange: (l) => t({ ...s, max_usages: Number(l.target.value) }), className: "col-span-3" })] }), e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [e.jsx(h, { className: "text-right", children: "\u6709\u6548\u671F" }), e.jsxs(se, { value: String(s.days_valid), onValueChange: (l) => t({ ...s, days_valid: l }), children: [e.jsx(ae, { className: "col-span-3", children: e.jsx(te, { placeholder: "\u9009\u62E9\u6709\u6548\u671F" }) }), e.jsxs(re, { children: [e.jsx(S, { value: "0", children: "\u6C38\u4E45\u6709\u6548" }), e.jsx(S, { value: "1", children: "1 \u5929" }), e.jsx(S, { value: "7", children: "7 \u5929" }), e.jsx(S, { value: "30", children: "30 \u5929" }), e.jsx(S, { value: "90", children: "90 \u5929" })] })] })] }), e.jsxs("div", { className: "grid grid-cols-4 items-start gap-4", children: [e.jsx(h, { className: "text-right pt-2", children: "\u529F\u80FD\u6743\u9650" }), e.jsxs("div", { className: "col-span-3 space-y-2 border rounded-md p-3", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(M, { id: "feat-small-town", checked: (s.features || []).includes("small-town"), onCheckedChange: () => o("small-town") }), e.jsx(h, { htmlFor: "feat-small-town", className: "cursor-pointer", children: "\u5C0F\u9547\u6A21\u5F0F (Small Town)" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(M, { id: "feat-dnd", checked: (s.features || []).includes("dnd"), onCheckedChange: () => o("dnd") }), e.jsx(h, { htmlFor: "feat-dnd", className: "cursor-pointer", children: "DnD \u8DD1\u56E2 (D&D)" })] })] })] })] });
}
export {
  Ie as component
};
