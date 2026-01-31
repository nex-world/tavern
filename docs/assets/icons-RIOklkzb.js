import { r as n } from "./react-yvOuIRP4.js";
const _ = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), M = (c) => c.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, t, o) => o ? o.toUpperCase() : t.toLowerCase()), d = (c) => {
  const a = M(c);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, r = (...c) => c.filter((a, t, o) => !!a && a.trim() !== "" && o.indexOf(a) === t).join(" ").trim(), v = (c) => {
  for (const a in c) if (a.startsWith("aria-") || a === "role" || a === "title") return true;
};
var m = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const x = n.forwardRef(({ color: c = "currentColor", size: a = 24, strokeWidth: t = 2, absoluteStrokeWidth: o, className: y = "", children: s, iconNode: i, ...h }, k) => n.createElement("svg", { ref: k, ...m, width: a, height: a, stroke: c, strokeWidth: o ? Number(t) * 24 / Number(a) : t, className: r("lucide", y), ...!s && !v(h) && { "aria-hidden": "true" }, ...h }, [...i.map(([l, p]) => n.createElement(l, p)), ...Array.isArray(s) ? s : [s]]));
const e = (c, a) => {
  const t = n.forwardRef(({ className: o, ...y }, s) => n.createElement(x, { ref: s, iconNode: a, className: r(`lucide-${_(d(c))}`, `lucide-${c}`, o), ...y }));
  return t.displayName = d(c), t;
};
const g = [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]], z1 = e("activity", g);
const u = [["path", { d: "M12 7v14", key: "1akyts" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z", key: "ruj8y" }]], C1 = e("book-open", u);
const $ = [["path", { d: "M12 8V4H8", key: "hb8ula" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }], ["path", { d: "M2 14h2", key: "vft8re" }], ["path", { d: "M20 14h2", key: "4cs60a" }], ["path", { d: "M15 13v2", key: "1xurst" }], ["path", { d: "M9 13v2", key: "rq6x2g" }]], A1 = e("bot", $);
const N = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], q1 = e("check", N);
const f = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], H1 = e("chevron-down", f);
const w = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], b1 = e("chevron-left", w);
const z = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], j1 = e("chevron-right", z);
const C = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], V1 = e("chevron-up", C);
const A = [["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }], ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]], L1 = e("chevrons-up-down", A);
const q = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]], S1 = e("circle-alert", q);
const H = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], T1 = e("circle-check", H);
const b = [["path", { d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z", key: "kmsa83" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], P1 = e("circle-play", b);
const j = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M12 8v8", key: "napkw2" }]], U1 = e("circle-plus", j);
const V = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]], B1 = e("circle-x", V);
const L = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], E1 = e("circle", L);
const S = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }], ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }], ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]], I1 = e("crosshair", S);
const T = [["path", { d: "M12 15V3", key: "m9g1x1" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }], ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]], O1 = e("download", T);
const P = [["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }], ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }], ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]], D1 = e("ellipsis", P);
const U = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }], ["path", { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }]], F1 = e("file-braces", U);
const B = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]], R1 = e("file-text", B);
const E = [["path", { d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z", key: "sc7q7i" }]], W1 = e("funnel", E);
const I = [["path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9", key: "1hayfq" }], ["path", { d: "m18 15 4-4", key: "16gjal" }], ["path", { d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5", key: "15ts47" }]], K1 = e("hammer", I);
const O = [["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }], ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }], ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }], ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]], Q1 = e("hash", O);
const D = [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }], ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]], X1 = e("history", D);
const F = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]], Z1 = e("image", F);
const R = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]], G1 = e("info", R);
const W = [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z", key: "zw3jo" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key: "1wduqc" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key: "kqbvx6" }]], J1 = e("layers", W);
const K = [["path", { d: "M13 5h8", key: "a7qcls" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 19h8", key: "c3s6r1" }], ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]], Y1 = e("list-checks", K);
const Q = [["path", { d: "M13 5h8", key: "a7qcls" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 19h8", key: "c3s6r1" }], ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["rect", { x: "3", y: "4", width: "6", height: "6", rx: "1", key: "cif1o7" }]], e2 = e("list-todo", Q);
const X = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], a2 = e("loader-circle", X);
const Z = [["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }], ["path", { d: "M21 12H9", key: "dn1m92" }], ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]], c2 = e("log-out", Z);
const G = [["path", { d: "M4 5h16", key: "1tepv9" }], ["path", { d: "M4 12h16", key: "1lakjw" }], ["path", { d: "M4 19h16", key: "1djgab" }]], t2 = e("menu", G);
const J = [["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719", key: "1sd12s" }]], o2 = e("message-circle", J);
const Y = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }]], s2 = e("message-square", Y);
const e1 = [["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z", key: "2d38gg" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]], n2 = e("octagon-x", e1);
const a1 = [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z", key: "10ikf1" }]], y2 = e("play", a1);
const c1 = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]], h2 = e("plus", c1);
const t1 = [["path", { d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", key: "rib7q0" }], ["path", { d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", key: "1ymkrd" }]], d2 = e("quote", t1);
const o1 = [["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", key: "1c8476" }], ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }], ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]], r2 = e("save", o1);
const s1 = [["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }], ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]], i2 = e("search", s1);
const n1 = [["path", { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z", key: "1ffxy3" }], ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]], k2 = e("send", n1);
const y1 = [["path", { d: "M14 17H5", key: "gfn3mx" }], ["path", { d: "M19 7h-9", key: "6i9tg" }], ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }], ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]], l2 = e("settings-2", y1);
const h1 = [["path", { d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915", key: "1i5ecw" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]], p2 = e("settings", h1);
const d1 = [["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }], ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }], ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }], ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }], ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]], _2 = e("share-2", d1);
const r1 = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "M12 8v4", key: "1got3b" }], ["path", { d: "M12 16h.01", key: "1drbdi" }]], M2 = e("shield-alert", r1);
const i1 = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], v2 = e("shield-check", i1);
const k1 = [["path", { d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z", key: "1s2grr" }], ["path", { d: "M20 2v4", key: "1rf3ol" }], ["path", { d: "M22 4h-4", key: "gwowj6" }], ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]], m2 = e("sparkles", k1);
const l1 = [["path", { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]], x2 = e("square-check-big", l1);
const p1 = [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }], ["path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z", key: "ohrbg2" }]], g2 = e("square-pen", p1);
const _1 = [["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", key: "vktsd0" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]], u2 = e("tag", _1);
const M1 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], $2 = e("target", M1);
const v1 = [["path", { d: "M10 11v6", key: "nco0om" }], ["path", { d: "M14 11v6", key: "outv1u" }], ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }], ["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]], N2 = e("trash-2", v1);
const m1 = [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }], ["path", { d: "M12 9v4", key: "juzpu7" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], f2 = e("triangle-alert", m1);
const x1 = [["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }], ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }], ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }], ["path", { d: "M4 22h16", key: "57wxv0" }], ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }], ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]], w2 = e("trophy", x1);
const g1 = [["path", { d: "M12 4v16", key: "1654pz" }], ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }], ["path", { d: "M9 20h6", key: "s66wpe" }]], z2 = e("type", g1);
const u1 = [["path", { d: "M12 3v12", key: "1x0j5s" }], ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]], C2 = e("upload", u1);
const $1 = [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }], ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]], A2 = e("user", $1);
const N1 = [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]], q2 = e("users", N1);
const f1 = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]], H2 = e("x", f1);
export {
  k2 as $,
  I1 as A,
  Q1 as B,
  H1 as C,
  O1 as D,
  D1 as E,
  F1 as F,
  x2 as G,
  K1 as H,
  G1 as I,
  z2 as J,
  u2 as K,
  a2 as L,
  t2 as M,
  e2 as N,
  n2 as O,
  h2 as P,
  C1 as Q,
  v2 as R,
  i2 as S,
  f2 as T,
  q2 as U,
  d2 as V,
  R1 as W,
  H2 as X,
  P1 as Y,
  Y1 as Z,
  A1 as _,
  j1 as a,
  z1 as a0,
  c2 as a1,
  y2 as a2,
  B1 as a3,
  L1 as a4,
  T1 as b,
  E1 as c,
  q1 as d,
  V1 as e,
  m2 as f,
  X1 as g,
  w2 as h,
  C2 as i,
  b1 as j,
  Z1 as k,
  g2 as l,
  _2 as m,
  N2 as n,
  A2 as o,
  M2 as p,
  o2 as q,
  U1 as r,
  W1 as s,
  S1 as t,
  $2 as u,
  s2 as v,
  p2 as w,
  r2 as x,
  J1 as y,
  l2 as z
};
