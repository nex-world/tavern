import { r as y } from "./react-1W-rR8FQ.js";
const _ = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), M = (c) => c.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, t, o) => o ? o.toUpperCase() : t.toLowerCase()), d = (c) => {
  const a = M(c);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, r = (...c) => c.filter((a, t, o) => !!a && a.trim() !== "" && o.indexOf(a) === t).join(" ").trim(), x = (c) => {
  for (const a in c) if (a.startsWith("aria-") || a === "role" || a === "title") return true;
};
var v = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const m = y.forwardRef(({ color: c = "currentColor", size: a = 24, strokeWidth: t = 2, absoluteStrokeWidth: o, className: n = "", children: s, iconNode: k, ...h }, i) => y.createElement("svg", { ref: i, ...v, width: a, height: a, stroke: c, strokeWidth: o ? Number(t) * 24 / Number(a) : t, className: r("lucide", n), ...!s && !x(h) && { "aria-hidden": "true" }, ...h }, [...k.map(([l, p]) => y.createElement(l, p)), ...Array.isArray(s) ? s : [s]]));
const e = (c, a) => {
  const t = y.forwardRef(({ className: o, ...n }, s) => y.createElement(m, { ref: s, iconNode: a, className: r(`lucide-${_(d(c))}`, `lucide-${c}`, o), ...n }));
  return t.displayName = d(c), t;
};
const g = [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]], W1 = e("activity", g);
const u = [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]], X1 = e("arrow-left", u);
const $ = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]], Z1 = e("arrow-right", $);
const N = [["path", { d: "M12 7v14", key: "1akyts" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z", key: "ruj8y" }]], G1 = e("book-open", N);
const w = [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }]], Q1 = e("book", w);
const f = [["path", { d: "M12 8V4H8", key: "hb8ula" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }], ["path", { d: "M2 14h2", key: "vft8re" }], ["path", { d: "M20 14h2", key: "4cs60a" }], ["path", { d: "M15 13v2", key: "1xurst" }], ["path", { d: "M9 13v2", key: "rq6x2g" }]], J1 = e("bot", f);
const z = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Y1 = e("check", z);
const A = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], e2 = e("chevron-down", A);
const H = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], a2 = e("chevron-left", H);
const C = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], c2 = e("chevron-right", C);
const q = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], t2 = e("chevron-up", q);
const b = [["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }], ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]], o2 = e("chevrons-up-down", b);
const j = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]], s2 = e("circle-alert", j);
const L = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], y2 = e("circle-check", L);
const V = [["path", { d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z", key: "kmsa83" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], n2 = e("circle-play", V);
const S = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M12 8v8", key: "napkw2" }]], h2 = e("circle-plus", S);
const P = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]], d2 = e("circle-x", P);
const T = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], r2 = e("circle", T);
const U = [["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }], ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }], ["path", { d: "M7 6h1v4", key: "1obek4" }], ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]], k2 = e("coins", U);
const B = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }], ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }], ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]], i2 = e("crosshair", B);
const R = [["path", { d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z", key: "1vdc57" }], ["path", { d: "M5 21h14", key: "11awu3" }]], l2 = e("crown", R);
const E = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["path", { d: "M16 8h.01", key: "cr5u4v" }], ["path", { d: "M8 8h.01", key: "1e4136" }], ["path", { d: "M8 16h.01", key: "18s6g9" }], ["path", { d: "M16 16h.01", key: "1f9h7w" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }]], p2 = e("dice-5", E);
const F = [["path", { d: "M12 15V3", key: "m9g1x1" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }], ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]], _2 = e("download", F);
const D = [["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }], ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }], ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]], M2 = e("ellipsis", D);
const I = [["path", { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z", key: "b19h5q" }], ["path", { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z", key: "h7h5ge" }]], x2 = e("fast-forward", I);
const O = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }], ["path", { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }]], v2 = e("file-braces", O);
const K = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]], m2 = e("file-text", K);
const W = [["path", { d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z", key: "sc7q7i" }]], g2 = e("funnel", W);
const X = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }], ["path", { d: "M2 12h20", key: "9i4pu4" }]], u2 = e("globe", X);
const Z = [["path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9", key: "1hayfq" }], ["path", { d: "m18 15 4-4", key: "16gjal" }], ["path", { d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5", key: "15ts47" }]], $2 = e("hammer", Z);
const G = [["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }], ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }], ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }], ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]], N2 = e("hash", G);
const Q = [["path", { d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5", key: "mvr1a0" }]], w2 = e("heart", Q);
const J = [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }], ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]], f2 = e("history", J);
const Y = [["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }], ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "r6nss1" }]], z2 = e("house", Y);
const e1 = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]], A2 = e("image", e1);
const a1 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]], H2 = e("info", a1);
const c1 = [["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }], ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }], ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]], C2 = e("key", c1);
const t1 = [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z", key: "zw3jo" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key: "1wduqc" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key: "kqbvx6" }]], q2 = e("layers", t1);
const o1 = [["path", { d: "M13 5h8", key: "a7qcls" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 19h8", key: "c3s6r1" }], ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]], b2 = e("list-checks", o1);
const s1 = [["path", { d: "M13 5h8", key: "a7qcls" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 19h8", key: "c3s6r1" }], ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["rect", { x: "3", y: "4", width: "6", height: "6", rx: "1", key: "cif1o7" }]], j2 = e("list-todo", s1);
const y1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], L2 = e("loader-circle", y1);
const n1 = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]], V2 = e("lock", n1);
const h1 = [["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }], ["path", { d: "M21 12H9", key: "dn1m92" }], ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]], S2 = e("log-out", h1);
const d1 = [["path", { d: "M4 5h16", key: "1tepv9" }], ["path", { d: "M4 12h16", key: "1lakjw" }], ["path", { d: "M4 19h16", key: "1djgab" }]], P2 = e("menu", d1);
const r1 = [["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719", key: "1sd12s" }]], T2 = e("message-circle", r1);
const k1 = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }]], U2 = e("message-square", k1);
const i1 = [["path", { d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z", key: "1n2ejm" }], ["path", { d: "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1", key: "1qfcsi" }]], B2 = e("messages-square", i1);
const l1 = [["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z", key: "2d38gg" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]], R2 = e("octagon-x", l1);
const p1 = [["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }], ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]], E2 = e("pause", p1);
const _1 = [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z", key: "10ikf1" }]], F2 = e("play", _1);
const M1 = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]], D2 = e("plus", M1);
const x1 = [["path", { d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", key: "rib7q0" }], ["path", { d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", key: "1ymkrd" }]], I2 = e("quote", x1);
const v1 = [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }], ["path", { d: "M8 16H3v5", key: "1cv678" }]], O2 = e("refresh-cw", v1);
const m1 = [["path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z", key: "m3kijz" }], ["path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z", key: "1fmvmk" }], ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }], ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]], K2 = e("rocket", m1);
const g1 = [["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", key: "1c8476" }], ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }], ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]], W2 = e("save", g1);
const u1 = [["path", { d: "M15 12h-5", key: "r7krc0" }], ["path", { d: "M15 8h-5", key: "1khuty" }], ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }], ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3", key: "1ph1d7" }]], X2 = e("scroll-text", u1);
const $1 = [["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }], ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]], Z2 = e("search", $1);
const N1 = [["path", { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z", key: "1ffxy3" }], ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]], G2 = e("send", N1);
const w1 = [["path", { d: "M14 17H5", key: "gfn3mx" }], ["path", { d: "M19 7h-9", key: "6i9tg" }], ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }], ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]], Q2 = e("settings-2", w1);
const f1 = [["path", { d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915", key: "1i5ecw" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]], J2 = e("settings", f1);
const z1 = [["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }], ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }], ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }], ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }], ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]], Y2 = e("share-2", z1);
const A1 = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "M12 8v4", key: "1got3b" }], ["path", { d: "M12 16h.01", key: "1drbdi" }]], e0 = e("shield-alert", A1);
const H1 = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], a0 = e("shield-check", H1);
const C1 = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }]], c0 = e("shield", C1);
const q1 = [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }], ["path", { d: "M12 18h.01", key: "mhygvu" }]], t0 = e("smartphone", q1);
const b1 = [["path", { d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z", key: "1s2grr" }], ["path", { d: "M20 2v4", key: "1rf3ol" }], ["path", { d: "M22 4h-4", key: "gwowj6" }], ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]], o0 = e("sparkles", b1);
const j1 = [["path", { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]], s0 = e("square-check-big", j1);
const L1 = [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }], ["path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z", key: "ohrbg2" }]], y0 = e("square-pen", L1);
const V1 = [["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }], ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }], ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }], ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }], ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }], ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }], ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }], ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }]], n0 = e("swords", V1);
const S1 = [["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", key: "vktsd0" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]], h0 = e("tag", S1);
const P1 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], d0 = e("target", P1);
const T1 = [["path", { d: "M10 11v6", key: "nco0om" }], ["path", { d: "M14 11v6", key: "outv1u" }], ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }], ["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]], r0 = e("trash-2", T1);
const U1 = [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }], ["path", { d: "M12 9v4", key: "juzpu7" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], k0 = e("triangle-alert", U1);
const B1 = [["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }], ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }], ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }], ["path", { d: "M4 22h16", key: "57wxv0" }], ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }], ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]], i0 = e("trophy", B1);
const R1 = [["path", { d: "M12 4v16", key: "1654pz" }], ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }], ["path", { d: "M9 20h6", key: "s66wpe" }]], l0 = e("type", R1);
const E1 = [["path", { d: "M12 3v12", key: "1x0j5s" }], ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]], p0 = e("upload", E1);
const F1 = [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }], ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]], _0 = e("user-plus", F1);
const D1 = [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }], ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]], M0 = e("user", D1);
const I1 = [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]], x0 = e("users", I1);
const O1 = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]], v0 = e("x", O1);
export {
  l2 as $,
  X1 as A,
  T2 as B,
  e2 as C,
  _2 as D,
  M2 as E,
  v2 as F,
  h2 as G,
  $2 as H,
  H2 as I,
  g2 as J,
  C2 as K,
  V2 as L,
  B2 as M,
  s2 as N,
  R2 as O,
  D2 as P,
  u2 as Q,
  O2 as R,
  t0 as S,
  r0 as T,
  x0 as U,
  K2 as V,
  k2 as W,
  v0 as X,
  J1 as Y,
  Q2 as Z,
  p2 as _,
  c0 as a,
  G2 as a0,
  U2 as a1,
  J2 as a2,
  W2 as a3,
  q2 as a4,
  i2 as a5,
  N2 as a6,
  s0 as a7,
  l0 as a8,
  h0 as a9,
  j2 as aa,
  G1 as ab,
  a0 as ac,
  I2 as ad,
  m2 as ae,
  d2 as af,
  Z1 as ag,
  W1 as ah,
  b2 as ai,
  F2 as aj,
  E2 as ak,
  X2 as al,
  w2 as am,
  x2 as an,
  Q1 as ao,
  o2 as ap,
  S2 as b,
  c2 as c,
  L2 as d,
  k0 as e,
  y2 as f,
  Y1 as g,
  t2 as h,
  r2 as i,
  Z2 as j,
  o0 as k,
  f2 as l,
  i0 as m,
  n0 as n,
  _0 as o,
  d0 as p,
  P2 as q,
  z2 as r,
  n2 as s,
  p0 as t,
  a2 as u,
  A2 as v,
  y0 as w,
  Y2 as x,
  M0 as y,
  e0 as z
};
