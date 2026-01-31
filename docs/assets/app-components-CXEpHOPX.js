import { z as oe, j as a, T as re, r as l, P as ne, d as ie, M as de, e as le, C as ce, I as ue, S as me, f as fe, g as ge, h as pe, i as xe, k as U, l as be, m as ve, n as he, o as R, p as ye, D as je, q as X, s as q, u as W, v as P, x as J, O as Q, y as we, A as ke, B as Ne, E as ze, F as Ce, G as Se, H as $e, J as Te, K as _e, L as Ie, N as Me, Q as De, U as Ae, V as Ee, W as Le, X as Re, Y as Pe, Z as Fe, _ as Ve, $ as Be, a0 as He, a1 as Oe, a2 as Ge, a3 as Ue, a4 as Xe, a5 as qe, a6 as We, a7 as Je, a8 as Qe, a9 as Ye, aa as Ze, ab as Ke, ac as et, ad as tt, ae as at, af as st, ag as ot, ah as rt, ai as nt, aj as N, ak as it, al as dt, am as lt, an as ct, ao as ut, ap as mt, aq as ft } from "./react-yvOuIRP4.js";
import { L as gt, O as pt, T as xt, I as bt, b as vt, a as ht, c as yt, d as F, X as Y, C as V, e as jt, S as wt } from "./icons-RIOklkzb.js";
import { b as kt, a as Nt, T as zt } from "./app-hooks-BS7L2h5w.js";
import { u as Ct } from "./app-libs-for-custom-theme-CnMfby2Z.js";
import { c as s } from "./app-lib-CUGc0APc.js";
import { c as z } from "./components-and-styling-lnR2ABT4.js";
import { g as L } from "./gsap-DDlvirwQ.js";
const Zt = ({ ...e }) => {
  const { theme: t = "system" } = oe();
  return a.jsx(re, { theme: t, className: "toaster group", icons: { success: a.jsx(vt, { className: "size-4" }), info: a.jsx(bt, { className: "size-4" }), warning: a.jsx(xt, { className: "size-4" }), error: a.jsx(pt, { className: "size-4" }), loading: a.jsx(gt, { className: "size-4 animate-spin" }) }, style: { "--normal-bg": "var(--popover)", "--normal-text": "var(--popover-foreground)", "--normal-border": "var(--border)", "--border-radius": "var(--radius)" }, ...e });
};
function Kt({ children: e, defaultTheme: t = "system", defaultBaseColor: o = "zinc", defaultPrimaryColor: r = "default", storageKey: d = "vite-ui-theme", storageKeyOfTheme: u = "vite-ui-theme", storageKeyOfBaseColor: f = "vite-ui-base-color", storageKeyOfPrimaryColor: x = "vite-ui-primary-color", ...T }) {
  const [I, y] = l.useState(void 0), [p, j] = l.useState(() => localStorage.getItem(u) || localStorage.getItem(d) || t), [w, C] = l.useState(() => localStorage.getItem(f) || o), [b, _] = l.useState(() => localStorage.getItem(x) || r), S = Ct((i) => i.theme);
  l.useEffect(() => {
    if (b !== "custom") {
      const n = document.getElementById("custom-theme-styles");
      n && n.remove();
      return;
    }
    let i = document.getElementById("custom-theme-styles");
    i || (i = document.createElement("style"), i.id = "custom-theme-styles", document.head.appendChild(i));
    const h = (n) => `
      --background: ${n.background};
      --foreground: ${n.foreground};
      --card: ${n.card};
      --card-foreground: ${n.cardForeground};
      --popover: ${n.popover};
      --popover-foreground: ${n.popoverForeground};
      --primary: ${n.primary};
      --primary-foreground: ${n.primaryForeground};
      --secondary: ${n.secondary};
      --secondary-foreground: ${n.secondaryForeground};
      --muted: ${n.muted};
      --muted-foreground: ${n.mutedForeground};
      --accent: ${n.accent};
      --accent-foreground: ${n.accentForeground};
      --destructive: ${n.destructive};
      --destructive-foreground: ${n.destructiveForeground};
      --border: ${n.border};
      --input: ${n.input};
      --ring: ${n.ring};
      --radius: ${n.radius};
    `;
    i.innerHTML = `
      .primary-color-custom {
        ${h(S.light)}
      }
      .dark.primary-color-custom,
      .primary-color-custom.dark,
      .dark .primary-color-custom,
      .primary-color-custom .dark {
        ${h(S.dark)}
      }
    `;
  }, [b, S]), l.useEffect(() => {
    const i = window.document.documentElement;
    i.classList.remove("light", "dark"), i.classList.remove(...kt.map((n) => `base-color-${n}`)), i.classList.remove(...Nt.map((n) => `primary-color-${n}`));
    const h = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    y(h), p === "system" ? i.classList.add(h) : i.classList.add(p), i.classList.add(`base-color-${w}`), i.classList.add(`primary-color-${b}`);
  }, [p, w, b]);
  const M = { storageKey: d, defaultTheme: t, defaultBaseColor: o, defaultPrimaryColor: r, theme: p, setTheme: (i) => {
    localStorage.setItem(d, i), localStorage.setItem(u, i), j(i);
  }, baseColor: w, setBaseColor: (i) => {
    localStorage.setItem(f, i), C(i);
  }, primaryColor: b, setPrimaryColor: (i) => {
    localStorage.setItem(x, i), _(i);
  }, systemTheme: I, storageKeyOfTheme: d, storageKeyOfBaseColor: "vite-ui-base-color", storageKeyOfPrimaryColor: "vite-ui-primary-color" };
  return a.jsx(zt.Provider, { ...T, value: M, children: e });
}
function ea({ delayDuration: e = 0, ...t }) {
  return a.jsx(ne, { "data-slot": "tooltip-provider", delayDuration: e, ...t });
}
function ta({ className: e, ...t }) {
  return a.jsx(ie, { "data-slot": "menubar", className: s("bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs", e), ...t });
}
function aa({ ...e }) {
  return a.jsx(de, { "data-slot": "menubar-menu", ...e });
}
function St({ ...e }) {
  return a.jsx(he, { "data-slot": "menubar-portal", ...e });
}
function sa({ ...e }) {
  return a.jsx(pe, { "data-slot": "menubar-radio-group", ...e });
}
function oa({ className: e, ...t }) {
  return a.jsx(le, { "data-slot": "menubar-trigger", className: s("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none", e), ...t });
}
function ra({ className: e, align: t = "start", alignOffset: o = -4, sideOffset: r = 8, ...d }) {
  return a.jsx(St, { children: a.jsx(ce, { "data-slot": "menubar-content", align: t, alignOffset: o, sideOffset: r, className: s("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md", e), ...d }) });
}
function na({ className: e, inset: t, variant: o = "default", ...r }) {
  return a.jsx(ue, { "data-slot": "menubar-item", "data-inset": t, "data-variant": o, className: s("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...r });
}
function ia({ className: e, children: t, checked: o, ...r }) {
  return a.jsxs(ve, { "data-slot": "menubar-checkbox-item", className: s("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), checked: o, ...r, children: [a.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: a.jsx(U, { children: a.jsx(F, { className: "size-4" }) }) }), t] });
}
function da({ className: e, children: t, ...o }) {
  return a.jsxs(xe, { "data-slot": "menubar-radio-item", className: s("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...o, children: [a.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: a.jsx(U, { children: a.jsx(yt, { className: "size-2 fill-current" }) }) }), t] });
}
function la({ className: e, ...t }) {
  return a.jsx(be, { "data-slot": "menubar-separator", className: s("bg-border -mx-1 my-1 h-px", e), ...t });
}
function ca({ ...e }) {
  return a.jsx(me, { "data-slot": "menubar-sub", ...e });
}
function ua({ className: e, inset: t, children: o, ...r }) {
  return a.jsxs(fe, { "data-slot": "menubar-sub-trigger", "data-inset": t, className: s("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8", e), ...r, children: [o, a.jsx(ht, { className: "ml-auto h-4 w-4" })] });
}
function ma({ className: e, ...t }) {
  return a.jsx(ge, { "data-slot": "menubar-sub-content", className: s("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", e), ...t });
}
const B = z("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", { variants: { variant: { default: "bg-primary text-primary-foreground hover:bg-primary/90", destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60", outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50", secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2 has-[>svg]:px-3", xs: "h-7 rounded-md px-2 text-[10px] gap-1", sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5", lg: "h-10 rounded-md px-6 has-[>svg]:px-4", icon: "size-9", "icon-sm": "size-8", "icon-lg": "size-10" } }, defaultVariants: { variant: "default", size: "default" } });
function fa({ className: e, variant: t, size: o, asChild: r = false, ...d }) {
  const u = r ? R : "button";
  return a.jsx(u, { "data-slot": "button", className: s(B({ variant: t, size: o, className: e })), ...d });
}
function ga({ ...e }) {
  return a.jsx(X, { "data-slot": "dialog", ...e });
}
function pa({ ...e }) {
  return a.jsx(q, { "data-slot": "dialog-trigger", ...e });
}
function $t({ ...e }) {
  return a.jsx(J, { "data-slot": "dialog-portal", ...e });
}
function xa({ ...e }) {
  return a.jsx(P, { "data-slot": "dialog-close", ...e });
}
function Tt({ className: e, ...t }) {
  return a.jsx(Q, { "data-slot": "dialog-overlay", className: s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", e), ...t });
}
function ba({ className: e, children: t, showCloseButton: o = true, ...r }) {
  return a.jsxs($t, { "data-slot": "dialog-portal", children: [a.jsx(Tt, {}), a.jsxs(W, { "data-slot": "dialog-content", className: s("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", e), ...r, children: [t, o && a.jsxs(P, { "data-slot": "dialog-close", className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [a.jsx(Y, {}), a.jsx("span", { className: "sr-only", children: "Close" })] })] })] });
}
function va({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "dialog-header", className: s("flex flex-col gap-2 text-center sm:text-left", e), ...t });
}
function ha({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "dialog-footer", className: s("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e), ...t });
}
function ya({ className: e, ...t }) {
  return a.jsx(ye, { "data-slot": "dialog-title", className: s("text-lg leading-none font-semibold", e), ...t });
}
function ja({ className: e, ...t }) {
  return a.jsx(je, { "data-slot": "dialog-description", className: s("text-muted-foreground text-sm", e), ...t });
}
const _t = z("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90", secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90", destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60", outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground" } }, defaultVariants: { variant: "default" } });
function wa({ className: e, variant: t, asChild: o = false, ...r }) {
  const d = o ? R : "span";
  return a.jsx(d, { "data-slot": "badge", className: s(_t({ variant: t }), e), ...r });
}
function ka({ className: e, type: t, ...o }) {
  return a.jsx("input", { type: t, "data-slot": "input", className: s("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", e), ...o });
}
const It = z("group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", { variants: { variant: { default: "bg-transparent", outline: "border-border", muted: "bg-muted/50" }, size: { default: "p-4 gap-4 ", sm: "py-3 px-4 gap-2.5" } }, defaultVariants: { variant: "default", size: "default" } });
function Na({ className: e, variant: t = "default", size: o = "default", asChild: r = false, ...d }) {
  const u = r ? R : "div";
  return a.jsx(u, { "data-slot": "item", "data-variant": t, "data-size": o, className: s(It({ variant: t, size: o, className: e })), ...d });
}
function za({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "item-content", className: s("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", e), ...t });
}
function Ca({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "item-title", className: s("flex w-fit items-center gap-2 text-sm leading-snug font-medium", e), ...t });
}
function Sa({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "item-actions", className: s("flex items-center gap-2", e), ...t });
}
function $a({ ...e }) {
  return a.jsx(we, { "data-slot": "alert-dialog", ...e });
}
function Ta({ ...e }) {
  return a.jsx(ke, { "data-slot": "alert-dialog-trigger", ...e });
}
function Mt({ ...e }) {
  return a.jsx(Te, { "data-slot": "alert-dialog-portal", ...e });
}
function Dt({ className: e, ...t }) {
  return a.jsx(_e, { "data-slot": "alert-dialog-overlay", className: s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", e), ...t });
}
function _a({ className: e, ...t }) {
  return a.jsxs(Mt, { children: [a.jsx(Dt, {}), a.jsx(Ne, { "data-slot": "alert-dialog-content", className: s("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", e), ...t })] });
}
function Ia({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "alert-dialog-header", className: s("flex flex-col gap-2 text-center sm:text-left", e), ...t });
}
function Ma({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "alert-dialog-footer", className: s("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e), ...t });
}
function Da({ className: e, ...t }) {
  return a.jsx(ze, { "data-slot": "alert-dialog-title", className: s("text-lg font-semibold", e), ...t });
}
function Aa({ className: e, ...t }) {
  return a.jsx(Ce, { "data-slot": "alert-dialog-description", className: s("text-muted-foreground text-sm", e), ...t });
}
function Ea({ className: e, ...t }) {
  return a.jsx($e, { className: s(B(), e), ...t });
}
function La({ className: e, ...t }) {
  return a.jsx(Se, { className: s(B({ variant: "outline" }), e), ...t });
}
function Ra({ ...e }) {
  return a.jsx(X, { "data-slot": "sheet", ...e });
}
function Pa({ ...e }) {
  return a.jsx(q, { "data-slot": "sheet-trigger", ...e });
}
function At({ ...e }) {
  return a.jsx(J, { "data-slot": "sheet-portal", ...e });
}
function Et({ className: e, ...t }) {
  return a.jsx(Q, { "data-slot": "sheet-overlay", className: s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", e), ...t });
}
function Fa({ className: e, children: t, side: o = "right", ...r }) {
  return a.jsxs(At, { children: [a.jsx(Et, {}), a.jsxs(W, { "data-slot": "sheet-content", className: s("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", o === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", o === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", o === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", o === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", e), ...r, children: [t, a.jsxs(P, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [a.jsx(Y, { className: "size-4" }), a.jsx("span", { className: "sr-only", children: "Close" })] })] })] });
}
function Va({ className: e, ...t }) {
  return a.jsx(Ie, { "data-slot": "tabs", className: s("flex flex-col gap-2", e), ...t });
}
function Ba({ className: e, ...t }) {
  return a.jsx(Me, { "data-slot": "tabs-list", className: s("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", e), ...t });
}
function Ha({ className: e, ...t }) {
  return a.jsx(De, { "data-slot": "tabs-trigger", className: s("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...t });
}
function Oa({ className: e, ...t }) {
  return a.jsx(Ae, { "data-slot": "tabs-content", className: s("flex-1 outline-none", e), ...t });
}
function Ga({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "card", className: s("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", e), ...t });
}
function Ua({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "card-header", className: s("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e), ...t });
}
function Xa({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "card-title", className: s("leading-none font-semibold", e), ...t });
}
function qa({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "card-description", className: s("text-muted-foreground text-sm", e), ...t });
}
function Wa({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "card-content", className: s("px-6", e), ...t });
}
function Ja({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "card-footer", className: s("flex items-center px-6 [.border-t]:pt-6", e), ...t });
}
const Lt = /^(\d+(?:\.\d+)?)(em|px)?$/, Rt = (e, t, o) => {
  const r = l.useCallback(() => t[e.findIndex((f) => matchMedia(f).matches)] ?? o, [e, t, o]), [d, u] = l.useState(r);
  return l.useEffect(() => {
    const f = () => u(r);
    for (const x of e) matchMedia(x).addEventListener("change", f);
    return () => {
      for (const x of e) matchMedia(x).removeEventListener("change", f);
    };
  }, [e, r]), d;
}, Pt = () => {
  const e = l.useRef(null), [t, o] = l.useState({ width: 0, height: 0 });
  return l.useLayoutEffect(() => {
    if (!e.current) return;
    const r = new ResizeObserver(([d]) => {
      const { width: u, height: f } = d.contentRect;
      o({ width: u, height: f });
    });
    return r.observe(e.current), () => r.disconnect();
  }, []), [e, t];
}, Qa = ({ items: e, renderItem: t, gap: o = 12, columns: r = { "(min-width:1600px)": 6, "(min-width:1200px)": 5, "(min-width:1000px)": 4, "(min-width:800px)": 3, "(min-width:600px)": 2, default: 2 }, animate: d = true, ease: u = "power3.out", duration: f = 0.6, stagger: x = 0.05, scaleOnHover: T = false, hoverScale: I = 0.95, tolerance: y = "2.4em" }) => {
  const p = Rt(typeof r == "number" ? [] : Object.keys(r).filter((c) => c !== "default"), typeof r == "number" ? [] : Object.values(r).filter((c) => typeof c == "number"), typeof r == "number" ? r : r.default || 1), [j, w] = Pt(), [C, b] = l.useState(false), [_, S] = l.useState([]), [M, i] = l.useState(200);
  l.useLayoutEffect(() => {
    var _a2;
    if (!w.width || e.length === 0 || p === 0) {
      b(false);
      return;
    }
    let c = 0;
    if (typeof y == "number") c = y;
    else if (typeof y == "string") {
      const k = y.match(Lt);
      if (k) {
        const D = Number.parseFloat(k[1]);
        if ((k[2] || "px") === "em") {
          if (j.current) {
            const A = Number.parseFloat(getComputedStyle(j.current).fontSize);
            c = D * A;
          }
        } else c = D;
      }
    }
    const g = (_a2 = j.current) == null ? void 0 : _a2.querySelectorAll(".masonry-item");
    if (!g || g.length !== e.length) {
      b(false);
      return;
    }
    const m = (w.width - (p - 1) * o) / p;
    for (const k of g) k.style.width = `${m}px`;
    const v = new Array(p).fill(0), O = [];
    for (const k of g) {
      const G = k.getBoundingClientRect().height || 100, A = Math.min(...v), ee = v.map(($, se) => ({ h: $, i: se })).filter(({ h: $ }) => $ <= A + c).map(({ i: $ }) => $), E = Math.min(...ee), te = E * (m + o), ae = v[E];
      O.push({ top: ae, left: te, width: m }), v[E] += G + o;
    }
    S(O), b(true);
    const K = Math.max(...v);
    i(K);
  }, [e, p, o, w.width, j, y]);
  const h = l.useRef(false);
  l.useLayoutEffect(() => {
    !C || !d || (h.current || document.querySelectorAll(".masonry-item").forEach((g, m) => {
      L.fromTo(g, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: f, ease: u, delay: m * x });
    }), h.current = true);
  }, [C, d, x, f, u]);
  const n = (c, g) => {
    if (!T) return;
    const m = `[data-key="${g.id}"]`;
    L.to(m, { scale: I, duration: 0.3, ease: "power2.out" });
  }, Z = (c, g) => {
    if (!T) return;
    const m = `[data-key="${g.id}"]`;
    L.to(m, { scale: 1, duration: 0.3, ease: "power2.out" });
  }, H = C && _.length === e.length;
  return a.jsx("div", { ref: j, className: "masonry-container", style: { width: "100%", position: "relative", height: M, minHeight: "200px" }, children: e.map((c, g) => {
    const m = _[g];
    return a.jsx("div", { "data-key": c.id, className: "masonry-item", style: { position: "absolute", top: (m == null ? void 0 : m.top) || 0, left: (m == null ? void 0 : m.left) || 0, width: (m == null ? void 0 : m.width) || "100%", opacity: H ? 1 : 0, pointerEvents: H ? "auto" : "none" }, onMouseEnter: (v) => n(v, c), onMouseLeave: (v) => Z(v, c), children: t(c) }, c.id);
  }) });
};
function Ft({ className: e, ...t }) {
  return a.jsx(Ee, { "data-slot": "label", className: s("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e), ...t });
}
const Vt = z("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", { variants: { variant: { default: "bg-card text-card-foreground", destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90" } }, defaultVariants: { variant: "default" } });
function Ya({ className: e, variant: t, ...o }) {
  return a.jsx("div", { "data-slot": "alert", role: "alert", className: s(Vt({ variant: t }), e), ...o });
}
function Za({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "alert-title", className: s("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e), ...t });
}
function Ka({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "alert-description", className: s("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", e), ...t });
}
function es({ className: e, ...t }) {
  return a.jsx(Le, { "data-slot": "checkbox", className: s("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", e), ...t, children: a.jsx(Re, { "data-slot": "checkbox-indicator", className: "grid place-content-center text-current transition-none", children: a.jsx(F, { className: "size-3.5" }) }) });
}
function ts({ className: e, ...t }) {
  return a.jsx("textarea", { "data-slot": "textarea", className: s("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e), ...t });
}
function as({ ...e }) {
  return a.jsx(Pe, { "data-slot": "accordion", ...e });
}
function ss({ className: e, ...t }) {
  return a.jsx(Fe, { "data-slot": "accordion-item", className: s("border-b last:border-b-0", e), ...t });
}
function os({ className: e, children: t, ...o }) {
  return a.jsx(Ve, { className: "flex", children: a.jsxs(Be, { "data-slot": "accordion-trigger", className: s("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", e), ...o, children: [t, a.jsx(V, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })] }) });
}
function rs({ className: e, children: t, ...o }) {
  return a.jsx(He, { "data-slot": "accordion-content", className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm", ...o, children: a.jsx("div", { className: s("pt-0 pb-4", e), children: t }) });
}
function ns({ className: e, ...t }) {
  return a.jsx(Oe, { "data-slot": "switch", className: s("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", e), ...t, children: a.jsx(Ge, { "data-slot": "switch-thumb", className: s("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0") }) });
}
function is({ ...e }) {
  return a.jsx(Ue, { "data-slot": "select", ...e });
}
function ds({ ...e }) {
  return a.jsx(We, { "data-slot": "select-value", ...e });
}
function ls({ className: e, size: t = "default", children: o, ...r }) {
  return a.jsxs(Xe, { "data-slot": "select-trigger", "data-size": t, className: s("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...r, children: [o, a.jsx(qe, { asChild: true, children: a.jsx(V, { className: "size-4 opacity-50" }) })] });
}
function cs({ className: e, children: t, position: o = "popper", align: r = "center", ...d }) {
  return a.jsx(Je, { children: a.jsxs(Qe, { "data-slot": "select-content", className: s("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e), position: o, align: r, ...d, children: [a.jsx(Bt, {}), a.jsx(Ye, { className: s("p-1", o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"), children: t }), a.jsx(Ht, {})] }) });
}
function us({ className: e, children: t, ...o }) {
  return a.jsxs(Ze, { "data-slot": "select-item", className: s("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e), ...o, children: [a.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: a.jsx(Ke, { children: a.jsx(F, { className: "size-4" }) }) }), a.jsx(et, { children: t })] });
}
function Bt({ className: e, ...t }) {
  return a.jsx(tt, { "data-slot": "select-scroll-up-button", className: s("flex cursor-default items-center justify-center py-1", e), ...t, children: a.jsx(jt, { className: "size-4" }) });
}
function Ht({ className: e, ...t }) {
  return a.jsx(at, { "data-slot": "select-scroll-down-button", className: s("flex cursor-default items-center justify-center py-1", e), ...t, children: a.jsx(V, { className: "size-4" }) });
}
const Ot = z("flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2", { variants: { orientation: { horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none", vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none" } }, defaultVariants: { orientation: "horizontal" } });
function ms({ className: e, orientation: t, ...o }) {
  return a.jsx("div", { role: "group", "data-slot": "button-group", "data-orientation": t, className: s(Ot({ orientation: t }), e), ...o });
}
function fs({ className: e, ...t }) {
  return a.jsx("fieldset", { "data-slot": "field-set", className: s("flex flex-col gap-6", "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", e), ...t });
}
function gs({ className: e, variant: t = "legend", ...o }) {
  return a.jsx("legend", { "data-slot": "field-legend", "data-variant": t, className: s("mb-3 font-medium", "data-[variant=legend]:text-base", "data-[variant=label]:text-sm", e), ...o });
}
function ps({ className: e, ...t }) {
  return a.jsx("div", { "data-slot": "field-group", className: s("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4", e), ...t });
}
const Gt = z("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", { variants: { orientation: { vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"], horizontal: ["flex-row items-center", "[&>[data-slot=field-label]]:flex-auto", "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"], responsive: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto", "@md/field-group:[&>[data-slot=field-label]]:flex-auto", "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"] } }, defaultVariants: { orientation: "vertical" } });
function xs({ className: e, orientation: t = "vertical", ...o }) {
  return a.jsx("div", { role: "group", "data-slot": "field", "data-orientation": t, className: s(Gt({ orientation: t }), e), ...o });
}
function bs({ className: e, ...t }) {
  return a.jsx(Ft, { "data-slot": "field-label", className: s("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4", "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10", e), ...t });
}
function vs({ ...e }) {
  return a.jsx(st, { "data-slot": "popover", ...e });
}
function hs({ ...e }) {
  return a.jsx(ot, { "data-slot": "popover-trigger", ...e });
}
function ys({ className: e, align: t = "center", sideOffset: o = 4, ...r }) {
  return a.jsx(rt, { children: a.jsx(nt, { "data-slot": "popover-content", align: t, sideOffset: o, className: s("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", e), ...r }) });
}
function js({ className: e, ...t }) {
  return a.jsx(N, { "data-slot": "command", className: s("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", e), ...t });
}
function ws({ className: e, ...t }) {
  return a.jsxs("div", { "data-slot": "command-input-wrapper", className: "flex h-9 items-center gap-2 border-b px-3", children: [a.jsx(wt, { className: "size-4 shrink-0 opacity-50" }), a.jsx(N.Input, { "data-slot": "command-input", className: s("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", e), ...t })] });
}
function ks({ className: e, ...t }) {
  return a.jsx(N.List, { "data-slot": "command-list", className: s("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e), ...t });
}
function Ns({ ...e }) {
  return a.jsx(N.Empty, { "data-slot": "command-empty", className: "py-6 text-center text-sm", ...e });
}
function zs({ className: e, ...t }) {
  return a.jsx(N.Group, { "data-slot": "command-group", className: s("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", e), ...t });
}
function Cs({ className: e, ...t }) {
  return a.jsx(N.Item, { "data-slot": "command-item", className: s("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...t });
}
function Ss({ ...e }) {
  return a.jsx(it, { "data-slot": "dropdown-menu", ...e });
}
function $s({ ...e }) {
  return a.jsx(dt, { "data-slot": "dropdown-menu-trigger", ...e });
}
function Ts({ className: e, sideOffset: t = 4, ...o }) {
  return a.jsx(lt, { children: a.jsx(ct, { "data-slot": "dropdown-menu-content", sideOffset: t, className: s("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", e), ...o }) });
}
function _s({ className: e, inset: t, variant: o = "default", ...r }) {
  return a.jsx(ft, { "data-slot": "dropdown-menu-item", "data-inset": t, "data-variant": o, className: s("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...r });
}
function Is({ className: e, inset: t, ...o }) {
  return a.jsx(ut, { "data-slot": "dropdown-menu-label", "data-inset": t, className: s("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e), ...o });
}
function Ms({ className: e, ...t }) {
  return a.jsx(mt, { "data-slot": "dropdown-menu-separator", className: s("bg-border -mx-1 my-1 h-px", e), ...t });
}
export {
  Da as $,
  Ha as A,
  fa as B,
  Ga as C,
  ga as D,
  Ua as E,
  Xa as F,
  qa as G,
  Wa as H,
  Na as I,
  Pa as J,
  Fa as K,
  Ft as L,
  ta as M,
  ts as N,
  ns as O,
  Ss as P,
  $s as Q,
  Ts as R,
  Ra as S,
  Kt as T,
  Is as U,
  Ms as V,
  _s as W,
  $a as X,
  Ta as Y,
  _a as Z,
  Ia as _,
  Zt as a,
  Aa as a0,
  Ma as a1,
  La as a2,
  Ea as a3,
  Oa as a4,
  Qa as a5,
  Ya as a6,
  Za as a7,
  Ka as a8,
  pa as a9,
  es as aa,
  Ja as ab,
  as as ac,
  ss as ad,
  os as ae,
  rs as af,
  is as ag,
  ls as ah,
  ds as ai,
  cs as aj,
  us as ak,
  fs as al,
  gs as am,
  ps as an,
  xs as ao,
  bs as ap,
  ms as aq,
  vs as ar,
  hs as as,
  ys as at,
  js as au,
  ws as av,
  ks as aw,
  Ns as ax,
  zs as ay,
  Cs as az,
  za as b,
  Ca as c,
  wa as d,
  Sa as e,
  ka as f,
  ea as g,
  aa as h,
  oa as i,
  ra as j,
  na as k,
  ca as l,
  ua as m,
  ma as n,
  sa as o,
  da as p,
  la as q,
  ia as r,
  ba as s,
  va as t,
  ya as u,
  ja as v,
  ha as w,
  xa as x,
  Va as y,
  Ba as z
};
