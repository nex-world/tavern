import { z as de, j as a, T as le, r as l, S as L, d as ce, e as Y, C as X, f as P, g as ue, D as me, P as W, O as Q, h as Z, i as fe, k as ge, I as pe, V as xe, l as be, m as he, n as ve, o as ye, p as je, q as we, s as Ne, u as ke, v as ze, L as Ce, x as _e, y as Se, A as Te, B as $e, E as Ie, F as Ae, M as Ee, G as De, H as Me, J as Re, K as Le, N as Pe, Q as Oe, U as He, W as Ve, X as q, Y as Fe, Z as Be, _ as Ge, $ as Ue, a0 as Je, a1 as Ke, a2 as Ye, a3 as Xe, a4 as We, a5 as Qe, a6 as Ze, a7 as qe, a8 as et, a9 as tt, aa as at, ab as st, ac as ot, ad as rt, ae as nt, af as it, ag as dt, ah as lt, ai as ct, aj as ut, ak as mt, al as ft, am as gt, an as T, ao as pt, ap as xt, aq as bt, ar as ht, as as vt, at as yt, au as jt, av as wt, aw as Nt, ax as kt } from "./react-1W-rR8FQ.js";
import { d as ee, O as zt, e as Ct, I as _t, f as St, X as te, C as O, g as H, h as Tt, c as $t, i as It, L as At, K as Et, j as Dt } from "./icons-1N0m32Tb.js";
import { b as Mt, a as Rt, T as Lt } from "./app-hooks-D4wnnCdG.js";
import { u as Pt } from "./app-libs-for-custom-theme-BHLM3087.js";
import { c as s } from "./app-lib-BIt54Jc6.js";
import { c as $ } from "./components-and-styling-lnR2ABT4.js";
import { a as Ot } from "./index-zC5F17iY.js";
import { f as Ht } from "./@tanstack-DKuuEdLe.js";
import { g as R } from "./gsap-DDlvirwQ.js";
const xa = ({ ...e }) => {
  const { theme: t = "system" } = de();
  return a.jsx(le, { theme: t, className: "toaster group", icons: { success: a.jsx(St, { className: "size-4" }), info: a.jsx(_t, { className: "size-4" }), warning: a.jsx(Ct, { className: "size-4" }), error: a.jsx(zt, { className: "size-4" }), loading: a.jsx(ee, { className: "size-4 animate-spin" }) }, style: { "--normal-bg": "var(--popover)", "--normal-text": "var(--popover-foreground)", "--normal-border": "var(--border)", "--border-radius": "var(--radius)" }, ...e });
};
function ba({ children: e, defaultTheme: t = "system", defaultBaseColor: o = "zinc", defaultPrimaryColor: r = "default", storageKey: n = "vite-ui-theme", storageKeyOfTheme: u = "vite-ui-theme", storageKeyOfBaseColor: c = "vite-ui-base-color", storageKeyOfPrimaryColor: b = "vite-ui-primary-color", ...y }) {
  const [C, h] = l.useState(void 0), [f, g] = l.useState(() => localStorage.getItem(u) || localStorage.getItem(n) || t), [j, w] = l.useState(() => localStorage.getItem(c) || o), [p, k] = l.useState(() => localStorage.getItem(b) || r), _ = Pt((d) => d.theme);
  l.useEffect(() => {
    if (p !== "custom") {
      const i = document.getElementById("custom-theme-styles");
      i && i.remove();
      return;
    }
    let d = document.getElementById("custom-theme-styles");
    d || (d = document.createElement("style"), d.id = "custom-theme-styles", document.head.appendChild(d));
    const z = (i) => `
      --background: ${i.background};
      --foreground: ${i.foreground};
      --card: ${i.card};
      --card-foreground: ${i.cardForeground};
      --popover: ${i.popover};
      --popover-foreground: ${i.popoverForeground};
      --primary: ${i.primary};
      --primary-foreground: ${i.primaryForeground};
      --secondary: ${i.secondary};
      --secondary-foreground: ${i.secondaryForeground};
      --muted: ${i.muted};
      --muted-foreground: ${i.mutedForeground};
      --accent: ${i.accent};
      --accent-foreground: ${i.accentForeground};
      --destructive: ${i.destructive};
      --destructive-foreground: ${i.destructiveForeground};
      --border: ${i.border};
      --input: ${i.input};
      --ring: ${i.ring};
      --radius: ${i.radius};
    `;
    d.innerHTML = `
      .primary-color-custom {
        ${z(_.light)}
      }
      .dark.primary-color-custom,
      .primary-color-custom.dark,
      .dark .primary-color-custom,
      .primary-color-custom .dark {
        ${z(_.dark)}
      }
    `;
  }, [p, _]), l.useEffect(() => {
    const d = window.document.documentElement;
    d.classList.remove("light", "dark"), d.classList.remove(...Mt.map((i) => `base-color-${i}`)), d.classList.remove(...Rt.map((i) => `primary-color-${i}`));
    const z = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    h(z), f === "system" ? d.classList.add(z) : d.classList.add(f), d.classList.add(`base-color-${j}`), d.classList.add(`primary-color-${p}`);
  }, [f, j, p]);
  const A = { storageKey: n, defaultTheme: t, defaultBaseColor: o, defaultPrimaryColor: r, theme: f, setTheme: (d) => {
    localStorage.setItem(n, d), localStorage.setItem(u, d), g(d);
  }, baseColor: j, setBaseColor: (d) => {
    localStorage.setItem(c, d), w(d);
  }, primaryColor: p, setPrimaryColor: (d) => {
    localStorage.setItem(b, d), k(d);
  }, systemTheme: C, storageKeyOfTheme: n, storageKeyOfBaseColor: "vite-ui-base-color", storageKeyOfPrimaryColor: "vite-ui-primary-color" };
  return a.jsx(Lt.Provider, { ...y, value: A, children: e });
}
const V = $("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", { variants: { variant: { default: "bg-primary text-primary-foreground hover:bg-primary/90", destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60", outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50", secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2 has-[>svg]:px-3", xs: "h-7 rounded-md px-2 text-[10px] gap-1", sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5", lg: "h-10 rounded-md px-6 has-[>svg]:px-4", icon: "size-9", "icon-sm": "size-8", "icon-lg": "size-10" } }, defaultVariants: { variant: "default", size: "default" } });
function U({ className: e, variant: t, size: o, asChild: r = false, ...n }) {
  const u = r ? L : "button";
  return a.jsx(u, { "data-slot": "button", className: s(V({ variant: t, size: o, className: e })), ...n });
}
function ha({ className: e, type: t, ...o }) {
  return a.jsx("input", { type: t, "data-slot": "input", className: s("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", e), ...o });
}
function Vt({ className: e, ...t }) {
  return a.jsx(ce, { "data-slot": "label", className: s("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e), ...t });
}
function va({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "card", className: s("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", e), ...t });
}
function ya({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "card-header", className: s("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e), ...t });
}
function ja({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "card-title", className: s("leading-none font-semibold", e), ...t });
}
function wa({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "card-description", className: s("text-muted-foreground text-sm", e), ...t });
}
function Na({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "card-content", className: s("px-6", e), ...t });
}
function ka({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "card-footer", className: s("flex items-center px-6 [.border-t]:pt-6", e), ...t });
}
const Ft = $("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90", secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90", destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60", outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground" } }, defaultVariants: { variant: "default" } });
function za({ className: e, variant: t, asChild: o = false, ...r }) {
  const n = o ? L : "span";
  return a.jsx(n, { "data-slot": "badge", className: s(Ft({ variant: t }), e), ...r });
}
function Ca({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: a.jsx("table", { "data-slot": "table", className: s("w-full caption-bottom text-sm", e), ...t }) });
}
function _a({ className: e, ...t }) {
  return a.jsx("thead", { "data-slot": "table-header", className: s("[&_tr]:border-b", e), ...t });
}
function Sa({ className: e, ...t }) {
  return a.jsx("tbody", { "data-slot": "table-body", className: s("[&_tr:last-child]:border-0", e), ...t });
}
function Ta({ className: e, ...t }) {
  return a.jsx("tr", { "data-slot": "table-row", className: s("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", e), ...t });
}
function $a({ className: e, ...t }) {
  return a.jsx("th", { "data-slot": "table-head", className: s("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e), ...t });
}
function Ia({ className: e, ...t }) {
  return a.jsx("td", { "data-slot": "table-cell", className: s("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e), ...t });
}
function Aa({ ...e }) {
  return a.jsx(Y, { "data-slot": "dialog", ...e });
}
function Ea({ ...e }) {
  return a.jsx(Z, { "data-slot": "dialog-trigger", ...e });
}
function Bt({ ...e }) {
  return a.jsx(W, { "data-slot": "dialog-portal", ...e });
}
function Da({ ...e }) {
  return a.jsx(P, { "data-slot": "dialog-close", ...e });
}
function Gt({ className: e, ...t }) {
  return a.jsx(Q, { "data-slot": "dialog-overlay", className: s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", e), ...t });
}
function Ma({ className: e, children: t, showCloseButton: o = true, ...r }) {
  return a.jsxs(Bt, { "data-slot": "dialog-portal", children: [a.jsx(Gt, {}), a.jsxs(X, { "data-slot": "dialog-content", className: s("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", e), ...r, children: [t, o && a.jsxs(P, { "data-slot": "dialog-close", className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [a.jsx(te, {}), a.jsx("span", { className: "sr-only", children: "Close" })] })] })] });
}
function Ra({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "dialog-header", className: s("flex flex-col gap-2 text-center sm:text-left", e), ...t });
}
function La({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "dialog-footer", className: s("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e), ...t });
}
function Pa({ className: e, ...t }) {
  return a.jsx(ue, { "data-slot": "dialog-title", className: s("text-lg leading-none font-semibold", e), ...t });
}
function Oa({ className: e, ...t }) {
  return a.jsx(me, { "data-slot": "dialog-description", className: s("text-muted-foreground text-sm", e), ...t });
}
function Ha({ ...e }) {
  return a.jsx(fe, { "data-slot": "select", ...e });
}
function Va({ ...e }) {
  return a.jsx(xe, { "data-slot": "select-value", ...e });
}
function Fa({ className: e, size: t = "default", children: o, ...r }) {
  return a.jsxs(ge, { "data-slot": "select-trigger", "data-size": t, className: s("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...r, children: [o, a.jsx(pe, { asChild: true, children: a.jsx(O, { className: "size-4 opacity-50" }) })] });
}
function Ba({ className: e, children: t, position: o = "popper", align: r = "center", ...n }) {
  return a.jsx(be, { children: a.jsxs(he, { "data-slot": "select-content", className: s("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e), position: o, align: r, ...n, children: [a.jsx(Ut, {}), a.jsx(ve, { className: s("p-1", o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"), children: t }), a.jsx(Jt, {})] }) });
}
function Ga({ className: e, children: t, ...o }) {
  return a.jsxs(ye, { "data-slot": "select-item", className: s("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e), ...o, children: [a.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: a.jsx(je, { children: a.jsx(H, { className: "size-4" }) }) }), a.jsx(we, { children: t })] });
}
function Ut({ className: e, ...t }) {
  return a.jsx(Ne, { "data-slot": "select-scroll-up-button", className: s("flex cursor-default items-center justify-center py-1", e), ...t, children: a.jsx(Tt, { className: "size-4" }) });
}
function Jt({ className: e, ...t }) {
  return a.jsx(ke, { "data-slot": "select-scroll-down-button", className: s("flex cursor-default items-center justify-center py-1", e), ...t, children: a.jsx(O, { className: "size-4" }) });
}
function Ua({ className: e, ...t }) {
  return a.jsx(ze, { "data-slot": "tabs", className: s("flex flex-col gap-2", e), ...t });
}
function Ja({ className: e, ...t }) {
  return a.jsx(Ce, { "data-slot": "tabs-list", className: s("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", e), ...t });
}
function Ka({ className: e, ...t }) {
  return a.jsx(_e, { "data-slot": "tabs-trigger", className: s("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...t });
}
function Ya({ className: e, ...t }) {
  return a.jsx(Se, { "data-slot": "tabs-content", className: s("flex-1 outline-none", e), ...t });
}
function Xa({ className: e, ...t }) {
  return a.jsx(Te, { "data-slot": "checkbox", className: s("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", e), ...t, children: a.jsx($e, { "data-slot": "checkbox-indicator", className: "grid place-content-center text-current transition-none", children: a.jsx(H, { className: "size-3.5" }) }) });
}
function Wa({ delayDuration: e = 0, ...t }) {
  return a.jsx(Ie, { "data-slot": "tooltip-provider", delayDuration: e, ...t });
}
function Qa({ className: e, ...t }) {
  return a.jsx(Ae, { "data-slot": "menubar", className: s("bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs", e), ...t });
}
function Za({ ...e }) {
  return a.jsx(Ee, { "data-slot": "menubar-menu", ...e });
}
function Kt({ ...e }) {
  return a.jsx(Ge, { "data-slot": "menubar-portal", ...e });
}
function qa({ ...e }) {
  return a.jsx(He, { "data-slot": "menubar-radio-group", ...e });
}
function es({ className: e, ...t }) {
  return a.jsx(De, { "data-slot": "menubar-trigger", className: s("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none", e), ...t });
}
function ts({ className: e, align: t = "start", alignOffset: o = -4, sideOffset: r = 8, ...n }) {
  return a.jsx(Kt, { children: a.jsx(Me, { "data-slot": "menubar-content", align: t, alignOffset: o, sideOffset: r, className: s("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md", e), ...n }) });
}
function as({ className: e, inset: t, variant: o = "default", ...r }) {
  return a.jsx(Re, { "data-slot": "menubar-item", "data-inset": t, "data-variant": o, className: s("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...r });
}
function ss({ className: e, children: t, checked: o, ...r }) {
  return a.jsxs(Be, { "data-slot": "menubar-checkbox-item", className: s("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), checked: o, ...r, children: [a.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: a.jsx(q, { children: a.jsx(H, { className: "size-4" }) }) }), t] });
}
function os({ className: e, children: t, ...o }) {
  return a.jsxs(Ve, { "data-slot": "menubar-radio-item", className: s("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...o, children: [a.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: a.jsx(q, { children: a.jsx(It, { className: "size-2 fill-current" }) }) }), t] });
}
function rs({ className: e, ...t }) {
  return a.jsx(Fe, { "data-slot": "menubar-separator", className: s("bg-border -mx-1 my-1 h-px", e), ...t });
}
function ns({ ...e }) {
  return a.jsx(Le, { "data-slot": "menubar-sub", ...e });
}
function is({ className: e, inset: t, children: o, ...r }) {
  return a.jsxs(Pe, { "data-slot": "menubar-sub-trigger", "data-inset": t, className: s("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8", e), ...r, children: [o, a.jsx($t, { className: "ml-auto h-4 w-4" })] });
}
function ds({ className: e, ...t }) {
  return a.jsx(Oe, { "data-slot": "menubar-sub-content", className: s("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", e), ...t });
}
const Yt = $("group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", { variants: { variant: { default: "bg-transparent", outline: "border-border", muted: "bg-muted/50" }, size: { default: "p-4 gap-4 ", sm: "py-3 px-4 gap-2.5" } }, defaultVariants: { variant: "default", size: "default" } });
function ls({ className: e, variant: t = "default", size: o = "default", asChild: r = false, ...n }) {
  const u = r ? L : "div";
  return a.jsx(u, { "data-slot": "item", "data-variant": t, "data-size": o, className: s(Yt({ variant: t, size: o, className: e })), ...n });
}
function cs({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "item-content", className: s("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", e), ...t });
}
function us({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "item-title", className: s("flex w-fit items-center gap-2 text-sm leading-snug font-medium", e), ...t });
}
function ms({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "item-actions", className: s("flex items-center gap-2", e), ...t });
}
function fs({ ...e }) {
  return a.jsx(Ue, { "data-slot": "alert-dialog", ...e });
}
function gs({ ...e }) {
  return a.jsx(Je, { "data-slot": "alert-dialog-trigger", ...e });
}
function Xt({ ...e }) {
  return a.jsx(Ze, { "data-slot": "alert-dialog-portal", ...e });
}
function Wt({ className: e, ...t }) {
  return a.jsx(qe, { "data-slot": "alert-dialog-overlay", className: s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", e), ...t });
}
function ps({ className: e, ...t }) {
  return a.jsxs(Xt, { children: [a.jsx(Wt, {}), a.jsx(Ke, { "data-slot": "alert-dialog-content", className: s("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", e), ...t })] });
}
function xs({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "alert-dialog-header", className: s("flex flex-col gap-2 text-center sm:text-left", e), ...t });
}
function bs({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "alert-dialog-footer", className: s("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e), ...t });
}
function hs({ className: e, ...t }) {
  return a.jsx(Ye, { "data-slot": "alert-dialog-title", className: s("text-lg font-semibold", e), ...t });
}
function vs({ className: e, ...t }) {
  return a.jsx(Xe, { "data-slot": "alert-dialog-description", className: s("text-muted-foreground text-sm", e), ...t });
}
function ys({ className: e, ...t }) {
  return a.jsx(Qe, { className: s(V(), e), ...t });
}
function js({ className: e, ...t }) {
  return a.jsx(We, { className: s(V({ variant: "outline" }), e), ...t });
}
function ws({ ...e }) {
  return a.jsx(Y, { "data-slot": "sheet", ...e });
}
function Ns({ ...e }) {
  return a.jsx(Z, { "data-slot": "sheet-trigger", ...e });
}
function Qt({ ...e }) {
  return a.jsx(W, { "data-slot": "sheet-portal", ...e });
}
function Zt({ className: e, ...t }) {
  return a.jsx(Q, { "data-slot": "sheet-overlay", className: s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", e), ...t });
}
function ks({ className: e, children: t, side: o = "right", ...r }) {
  return a.jsxs(Qt, { children: [a.jsx(Zt, {}), a.jsxs(X, { "data-slot": "sheet-content", className: s("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", o === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", o === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", o === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", o === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", e), ...r, children: [t, a.jsxs(P, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [a.jsx(te, { className: "size-4" }), a.jsx("span", { className: "sr-only", children: "Close" })] })] })] });
}
const qt = "__NexTavern_Auth_API_URL__", ea = "__NexTavern_Auth_Code_Persistent__", J = "__NexTavern_Auth_Verified__", K = "__NexTavern_Auth_Permissions__";
function zs({ children: e, requiredFeature: t = "default" }) {
  const o = Ht(), [r, n] = l.useState(true), [u, c] = l.useState(false), [b, y] = l.useState(null), C = l.useCallback(async () => {
    const h = localStorage.getItem(qt), f = localStorage.getItem(ea), g = Ot();
    if (!h || !f) {
      y("\u5C1A\u672A\u914D\u7F6E\u9080\u8BF7\u7801\u6216\u670D\u52A1\u5668\u5730\u5740"), n(false);
      return;
    }
    const j = h.trim().replace(/\/$/, "");
    try {
      n(true);
      const w = await fetch(`${j}/verify`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: f.trim(), uuid: g }) }), p = await w.json();
      if (!w.ok) throw new Error(p.error || "\u9A8C\u8BC1\u5931\u8D25");
      if (p.valid) {
        const k = p.permissions || {};
        sessionStorage.setItem(J, "true"), sessionStorage.setItem(K, JSON.stringify(k));
        const _ = Array.isArray(k.features) ? k.features : [];
        t === "default" || _.includes(t) ? (c(true), y(null)) : (c(false), y(`\u6743\u9650\u4E0D\u8DB3\uFF1A\u60A8\u7684\u9080\u8BF7\u7801\u65E0\u6CD5\u8BBF\u95EE\u300C${t}\u300D\u529F\u80FD`));
      } else throw new Error("\u9080\u8BF7\u7801\u65E0\u6548");
    } catch (w) {
      y(w.message), c(false);
    } finally {
      n(false);
    }
  }, [t]);
  return l.useEffect(() => {
    const h = sessionStorage.getItem(J) === "true", f = sessionStorage.getItem(K);
    if (h && f) try {
      const g = JSON.parse(f), j = Array.isArray(g.features) ? g.features : [];
      if (t === "default" || j.includes(t)) {
        c(true), n(false);
        return;
      }
    } catch {
    }
    C();
  }, [C, t]), u ? a.jsx(a.Fragment, { children: e }) : a.jsxs("div", { className: "flex flex-col items-center justify-center min-h-[60vh] p-6 text-center space-y-8 animate-in fade-in duration-500", children: [a.jsx("div", { className: "w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center", children: r ? a.jsx(ee, { className: "w-10 h-10 animate-spin text-primary" }) : a.jsx(At, { className: "w-10 h-10 text-destructive" }) }), a.jsxs("div", { className: "max-w-md space-y-2", children: [a.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: r ? "\u6B63\u5728\u6821\u9A8C\u6743\u9650..." : "\u8BBF\u95EE\u53D7\u9650" }), a.jsx("p", { className: "text-muted-foreground", children: r ? "\u8BF7\u7A0D\u5019\uFF0C\u6211\u4EEC\u6B63\u5728\u9A8C\u8BC1\u60A8\u7684\u8BBE\u5907\u6388\u6743\u72B6\u6001\u3002" : b })] }), !r && a.jsxs("div", { className: "flex flex-col gap-3 w-full max-w-xs", children: [a.jsxs(U, { onClick: () => o({ to: "/invitation" }), size: "lg", className: "w-full gap-2 font-semibold", children: [a.jsx(Et, { className: "w-4 h-4" }), "\u524D\u5F80\u914D\u7F6E\u9080\u8BF7\u7801"] }), a.jsx(U, { variant: "outline", onClick: () => C(), className: "w-full", children: "\u91CD\u65B0\u5C1D\u8BD5\u6821\u9A8C" })] })] });
}
const ta = /^(\d+(?:\.\d+)?)(em|px)?$/, aa = (e, t, o) => {
  const r = l.useCallback(() => t[e.findIndex((c) => matchMedia(c).matches)] ?? o, [e, t, o]), [n, u] = l.useState(r);
  return l.useEffect(() => {
    const c = () => u(r);
    for (const b of e) matchMedia(b).addEventListener("change", c);
    return () => {
      for (const b of e) matchMedia(b).removeEventListener("change", c);
    };
  }, [e, r]), n;
}, sa = () => {
  const e = l.useRef(null), [t, o] = l.useState({ width: 0, height: 0 });
  return l.useLayoutEffect(() => {
    if (!e.current) return;
    const r = new ResizeObserver(([n]) => {
      const { width: u, height: c } = n.contentRect;
      o({ width: u, height: c });
    });
    return r.observe(e.current), () => r.disconnect();
  }, []), [e, t];
}, Cs = ({ items: e, renderItem: t, gap: o = 12, columns: r = { "(min-width:1600px)": 6, "(min-width:1200px)": 5, "(min-width:1000px)": 4, "(min-width:800px)": 3, "(min-width:600px)": 2, default: 2 }, animate: n = true, ease: u = "power3.out", duration: c = 0.6, stagger: b = 0.05, scaleOnHover: y = false, hoverScale: C = 0.95, tolerance: h = "2.4em" }) => {
  const f = aa(typeof r == "number" ? [] : Object.keys(r).filter((m) => m !== "default"), typeof r == "number" ? [] : Object.values(r).filter((m) => typeof m == "number"), typeof r == "number" ? r : r.default || 1), [g, j] = sa(), [w, p] = l.useState(false), [k, _] = l.useState([]), [A, d] = l.useState(200);
  l.useLayoutEffect(() => {
    var _a2;
    if (!j.width || e.length === 0 || f === 0) {
      p(false);
      return;
    }
    let m = 0;
    if (typeof h == "number") m = h;
    else if (typeof h == "string") {
      const S = h.match(ta);
      if (S) {
        const E = Number.parseFloat(S[1]);
        if ((S[2] || "px") === "em") {
          if (g.current) {
            const D = Number.parseFloat(getComputedStyle(g.current).fontSize);
            m = E * D;
          }
        } else m = E;
      }
    }
    const v = (_a2 = g.current) == null ? void 0 : _a2.querySelectorAll(".masonry-item");
    if (!v || v.length !== e.length) {
      p(false);
      return;
    }
    const x = (j.width - (f - 1) * o) / f;
    for (const S of v) S.style.width = `${x}px`;
    const N = new Array(f).fill(0), B = [];
    for (const S of v) {
      const G = S.getBoundingClientRect().height || 100, D = Math.min(...N), oe = N.map((I, ie) => ({ h: I, i: ie })).filter(({ h: I }) => I <= D + m).map(({ i: I }) => I), M = Math.min(...oe), re = M * (x + o), ne = N[M];
      B.push({ top: ne, left: re, width: x }), N[M] += G + o;
    }
    _(B), p(true);
    const se = Math.max(...N);
    d(se);
  }, [e, f, o, j.width, g, h]);
  const z = l.useRef(false);
  l.useLayoutEffect(() => {
    !w || !n || (z.current || document.querySelectorAll(".masonry-item").forEach((v, x) => {
      R.fromTo(v, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: c, ease: u, delay: x * b });
    }), z.current = true);
  }, [w, n, b, c, u]);
  const i = (m, v) => {
    if (!y) return;
    const x = `[data-key="${v.id}"]`;
    R.to(x, { scale: C, duration: 0.3, ease: "power2.out" });
  }, ae = (m, v) => {
    if (!y) return;
    const x = `[data-key="${v.id}"]`;
    R.to(x, { scale: 1, duration: 0.3, ease: "power2.out" });
  }, F = w && k.length === e.length;
  return a.jsx("div", { ref: g, className: "masonry-container", style: { width: "100%", position: "relative", height: A, minHeight: "200px" }, children: e.map((m, v) => {
    const x = k[v];
    return a.jsx("div", { "data-key": m.id, className: "masonry-item", style: { position: "absolute", top: (x == null ? void 0 : x.top) || 0, left: (x == null ? void 0 : x.left) || 0, width: (x == null ? void 0 : x.width) || "100%", opacity: F ? 1 : 0, pointerEvents: F ? "auto" : "none" }, onMouseEnter: (N) => i(N, m), onMouseLeave: (N) => ae(N, m), children: t(m) }, m.id);
  }) });
}, oa = $("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", { variants: { variant: { default: "bg-card text-card-foreground", destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90" } }, defaultVariants: { variant: "default" } });
function _s({ className: e, variant: t, ...o }) {
  return a.jsx("div", { "data-slot": "alert", role: "alert", className: s(oa({ variant: t }), e), ...o });
}
function Ss({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "alert-title", className: s("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e), ...t });
}
function Ts({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "alert-description", className: s("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", e), ...t });
}
function $s({ className: e, ...t }) {
  return a.jsx("textarea", { "data-slot": "textarea", className: s("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e), ...t });
}
function Is({ className: e, defaultValue: t, value: o, min: r = 0, max: n = 100, ...u }) {
  const c = l.useMemo(() => Array.isArray(o) ? o : Array.isArray(t) ? t : [r, n], [o, t, r, n]);
  return a.jsxs(et, { "data-slot": "slider", defaultValue: t, value: o, min: r, max: n, className: s("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", e), ...u, children: [a.jsx(tt, { "data-slot": "slider-track", className: s("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"), children: a.jsx(at, { "data-slot": "slider-range", className: s("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full") }) }), Array.from({ length: c.length }, (b, y) => a.jsx(st, { "data-slot": "slider-thumb", className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" }, y))] });
}
function As({ ...e }) {
  return a.jsx(ot, { "data-slot": "accordion", ...e });
}
function Es({ className: e, ...t }) {
  return a.jsx(rt, { "data-slot": "accordion-item", className: s("border-b last:border-b-0", e), ...t });
}
function Ds({ className: e, children: t, ...o }) {
  return a.jsx(nt, { className: "flex", children: a.jsxs(it, { "data-slot": "accordion-trigger", className: s("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", e), ...o, children: [t, a.jsx(O, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })] }) });
}
function Ms({ className: e, children: t, ...o }) {
  return a.jsx(dt, { "data-slot": "accordion-content", className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm", ...o, children: a.jsx("div", { className: s("pt-0 pb-4", e), children: t }) });
}
function Rs({ className: e, ...t }) {
  return a.jsx(lt, { "data-slot": "switch", className: s("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", e), ...t, children: a.jsx(ct, { "data-slot": "switch-thumb", className: s("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0") }) });
}
const ra = $("flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2", { variants: { orientation: { horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none", vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none" } }, defaultVariants: { orientation: "horizontal" } });
function Ls({ className: e, orientation: t, ...o }) {
  return a.jsx("div", { role: "group", "data-slot": "button-group", "data-orientation": t, className: s(ra({ orientation: t }), e), ...o });
}
function Ps({ className: e, ...t }) {
  return a.jsx("fieldset", { "data-slot": "field-set", className: s("flex flex-col gap-6", "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", e), ...t });
}
function Os({ className: e, variant: t = "legend", ...o }) {
  return a.jsx("legend", { "data-slot": "field-legend", "data-variant": t, className: s("mb-3 font-medium", "data-[variant=legend]:text-base", "data-[variant=label]:text-sm", e), ...o });
}
function Hs({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "field-group", className: s("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4", e), ...t });
}
const na = $("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", { variants: { orientation: { vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"], horizontal: ["flex-row items-center", "[&>[data-slot=field-label]]:flex-auto", "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"], responsive: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto", "@md/field-group:[&>[data-slot=field-label]]:flex-auto", "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"] } }, defaultVariants: { orientation: "vertical" } });
function Vs({ className: e, orientation: t = "vertical", ...o }) {
  return a.jsx("div", { role: "group", "data-slot": "field", "data-orientation": t, className: s(na({ orientation: t }), e), ...o });
}
function Fs({ className: e, ...t }) {
  return a.jsx(Vt, { "data-slot": "field-label", className: s("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4", "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10", e), ...t });
}
function Bs({ ...e }) {
  return a.jsx(ut, { "data-slot": "popover", ...e });
}
function Gs({ ...e }) {
  return a.jsx(mt, { "data-slot": "popover-trigger", ...e });
}
function Us({ className: e, align: t = "center", sideOffset: o = 4, ...r }) {
  return a.jsx(ft, { children: a.jsx(gt, { "data-slot": "popover-content", align: t, sideOffset: o, className: s("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", e), ...r }) });
}
function Js({ className: e, ...t }) {
  return a.jsx(T, { "data-slot": "command", className: s("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", e), ...t });
}
function Ks({ className: e, ...t }) {
  return a.jsxs("div", { "data-slot": "command-input-wrapper", className: "flex h-9 items-center gap-2 border-b px-3", children: [a.jsx(Dt, { className: "size-4 shrink-0 opacity-50" }), a.jsx(T.Input, { "data-slot": "command-input", className: s("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", e), ...t })] });
}
function Ys({ className: e, ...t }) {
  return a.jsx(T.List, { "data-slot": "command-list", className: s("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e), ...t });
}
function Xs({ ...e }) {
  return a.jsx(T.Empty, { "data-slot": "command-empty", className: "py-6 text-center text-sm", ...e });
}
function Ws({ className: e, ...t }) {
  return a.jsx(T.Group, { "data-slot": "command-group", className: s("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", e), ...t });
}
function Qs({ className: e, ...t }) {
  return a.jsx(T.Item, { "data-slot": "command-item", className: s("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...t });
}
function Zs({ ...e }) {
  return a.jsx(pt, { "data-slot": "dropdown-menu", ...e });
}
function qs({ ...e }) {
  return a.jsx(xt, { "data-slot": "dropdown-menu-trigger", ...e });
}
function eo({ className: e, sideOffset: t = 4, ...o }) {
  return a.jsx(bt, { children: a.jsx(ht, { "data-slot": "dropdown-menu-content", sideOffset: t, className: s("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", e), ...o }) });
}
function to({ className: e, inset: t, variant: o = "default", ...r }) {
  return a.jsx(jt, { "data-slot": "dropdown-menu-item", "data-inset": t, "data-variant": o, className: s("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...r });
}
function ao({ className: e, inset: t, ...o }) {
  return a.jsx(vt, { "data-slot": "dropdown-menu-label", "data-inset": t, className: s("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e), ...o });
}
function so({ className: e, ...t }) {
  return a.jsx(yt, { "data-slot": "dropdown-menu-separator", className: s("bg-border -mx-1 my-1 h-px", e), ...t });
}
function oo({ ...e }) {
  return a.jsx(wt, { "data-slot": "collapsible", ...e });
}
function ro({ ...e }) {
  return a.jsx(Nt, { "data-slot": "collapsible-trigger", ...e });
}
function no({ ...e }) {
  return a.jsx(kt, { "data-slot": "collapsible-content", ...e });
}
function io({ className: e, children: t, ...o }) {
  return a.jsx("div", { "data-slot": "scroll-area", className: s("overflow-x-auto overflow-y-auto", e), ...o, children: t });
}
export {
  ks as $,
  ls as A,
  U as B,
  va as C,
  Aa as D,
  cs as E,
  us as F,
  ms as G,
  Wa as H,
  ha as I,
  Za as J,
  es as K,
  Vt as L,
  Qa as M,
  ts as N,
  as as O,
  ns as P,
  is as Q,
  ds as R,
  Ha as S,
  ba as T,
  qa as U,
  os as V,
  rs as W,
  ss as X,
  Da as Y,
  ws as Z,
  Ns as _,
  xa as a,
  zs as a0,
  fs as a1,
  gs as a2,
  ps as a3,
  xs as a4,
  hs as a5,
  vs as a6,
  bs as a7,
  js as a8,
  ys as a9,
  Vs as aA,
  Fs as aB,
  Ls as aC,
  Bs as aD,
  Gs as aE,
  Us as aF,
  Js as aG,
  Ks as aH,
  Ys as aI,
  Xs as aJ,
  Ws as aK,
  Qs as aL,
  $s as aa,
  Rs as ab,
  Zs as ac,
  qs as ad,
  eo as ae,
  ao as af,
  so as ag,
  to as ah,
  Cs as ai,
  _s as aj,
  Ss as ak,
  Ts as al,
  Ea as am,
  ka as an,
  Is as ao,
  As as ap,
  Es as aq,
  Ds as ar,
  Ms as as,
  oo as at,
  ro as au,
  no as av,
  io as aw,
  Ps as ax,
  Os as ay,
  Hs as az,
  ya as b,
  ja as c,
  wa as d,
  Na as e,
  za as f,
  Ca as g,
  _a as h,
  Ta as i,
  $a as j,
  Sa as k,
  Ia as l,
  Ma as m,
  Ra as n,
  Pa as o,
  Oa as p,
  Ua as q,
  Ja as r,
  Ka as s,
  Ya as t,
  La as u,
  Fa as v,
  Va as w,
  Ba as x,
  Ga as y,
  Xa as z
};
