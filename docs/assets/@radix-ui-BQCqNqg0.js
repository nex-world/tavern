function u(n, t, { checkForDefaultPrevented: a = true } = {}) {
  return function(e) {
    if (n == null ? void 0 : n(e), a === false || !e.defaultPrevented) return t == null ? void 0 : t(e);
  };
}
function c(n, [t, a]) {
  return Math.min(a, Math.max(t, n));
}
export {
  c as a,
  u as c
};
