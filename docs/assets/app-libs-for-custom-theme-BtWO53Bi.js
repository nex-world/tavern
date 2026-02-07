import { au as d, aw as u } from "./react-BkMll9ak.js";
const l = /oklch\(([\d.]+)%?\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+)%?)?\)/;
function a(c) {
  const e = c.match(l);
  return e ? { l: Number.parseFloat(e[1]), c: Number.parseFloat(e[2]), h: Number.parseFloat(e[3]), a: e[4] ? e[4].endsWith("%") ? Number.parseFloat(e[4]) / 100 : Number.parseFloat(e[4]) : 1 } : { l: 0.5, c: 0.1, h: 0, a: 1 };
}
function h(c, e, r, o = 1) {
  const n = o < 1 ? ` / ${Math.round(o * 100)}%` : "";
  return `oklch(${c.toFixed(3)} ${e.toFixed(3)} ${Math.round(r)}${n})`;
}
function t(c, e) {
  const r = a(c.primary), o = { ...c };
  return o.primaryForeground = r.l > 0.6 ? "oklch(0.2 0.01 285)" : "oklch(0.98 0.01 285)", o.ring = h(r.l, r.c, r.h, 0.5), e ? (o.secondary = h(0.25, r.c * 0.3, r.h), o.secondaryForeground = h(0.9, r.c * 0.1, r.h)) : (o.secondary = h(0.96, r.c * 0.2, r.h), o.secondaryForeground = h(0.2, r.c * 0.5, r.h)), o.accent = h(e ? 0.3 : 0.92, r.c * 0.4, r.h), o.accentForeground = o.secondaryForeground, o.muted = h(e ? 0.2 : 0.96, r.c * 0.1, r.h), o.mutedForeground = h(e ? 0.6 : 0.5, r.c * 0.1, r.h), o.border = h(e ? 0.25 : 0.9, r.c * 0.1, r.h, e ? 0.1 : 1), o.input = o.border, o;
}
const m = { background: "oklch(1 0 0)", foreground: "oklch(0.141 0.005 285.823)", card: "oklch(1 0 0)", cardForeground: "oklch(0.141 0.005 285.823)", popover: "oklch(1 0 0)", popoverForeground: "oklch(0.141 0.005 285.823)", primary: "oklch(0.21 0.006 285.885)", primaryForeground: "oklch(0.985 0 0)", secondary: "oklch(0.967 0.001 286.375)", secondaryForeground: "oklch(0.21 0.006 285.885)", muted: "oklch(0.967 0.001 286.375)", mutedForeground: "oklch(0.552 0.016 285.938)", accent: "oklch(0.967 0.001 286.375)", accentForeground: "oklch(0.21 0.006 285.885)", destructive: "oklch(0.577 0.245 27.325)", destructiveForeground: "oklch(0.985 0 0)", border: "oklch(0.92 0.004 286.32)", input: "oklch(0.92 0.004 286.32)", ring: "oklch(0.705 0.015 286.067)", radius: "0.625rem" }, k = { background: "oklch(0.141 0.005 285.823)", foreground: "oklch(0.985 0 0)", card: "oklch(0.21 0.006 285.885)", cardForeground: "oklch(0.985 0 0)", popover: "oklch(0.21 0.006 285.885)", popoverForeground: "oklch(0.985 0 0)", primary: "oklch(0.92 0.004 286.32)", primaryForeground: "oklch(0.21 0.006 285.885)", secondary: "oklch(0.274 0.006 286.033)", secondaryForeground: "oklch(0.985 0 0)", muted: "oklch(0.274 0.006 286.033)", mutedForeground: "oklch(0.705 0.015 286.067)", accent: "oklch(0.274 0.006 286.033)", accentForeground: "oklch(0.985 0 0)", destructive: "oklch(0.704 0.191 22.216)", destructiveForeground: "oklch(0.985 0 0)", border: "oklch(1 0 0 / 10%)", input: "oklch(1 0 0 / 15%)", ring: "oklch(0.552 0.016 285.938)", radius: "0.625rem" }, s = d()(u((c) => ({ theme: { name: "my-custom-theme", synergy: true, light: m, dark: k }, setTheme: (e) => c((r) => ({ theme: { ...r.theme, ...e } })), setLightColors: (e) => c((r) => {
  let o = { ...r.theme.light, ...e };
  return r.theme.synergy && e.primary && (o = t(o, false)), { theme: { ...r.theme, light: o } };
}), setDarkColors: (e) => c((r) => {
  let o = { ...r.theme.dark, ...e };
  return r.theme.synergy && e.primary && (o = t(o, true)), { theme: { ...r.theme, dark: o } };
}), toggleSynergy: () => c((e) => ({ theme: { ...e.theme, synergy: !e.theme.synergy } })) }), { name: "custom-theme-storage" }));
export {
  s as u
};
