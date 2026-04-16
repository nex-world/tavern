import { al as a } from "./react-gFHNOnf5.js";
const r = "__favbook_auth_session_v1__", e = a({ initialized: false, backendUrl: "", token: "", user: null });
function l() {
  if (e.initialized) return;
  e.initialized = true;
  const t = localStorage.getItem(r);
  if (t) try {
    const o = JSON.parse(t);
    if (!o.backendUrl || !o.token || !o.user) return;
    e.backendUrl = o.backendUrl, e.token = o.token, e.user = o.user;
  } catch {
    localStorage.removeItem(r);
  }
}
function c(t) {
  e.backendUrl = t.backendUrl, e.token = t.token, e.user = t.user, localStorage.setItem(r, JSON.stringify(t));
}
function i() {
  e.backendUrl = "", e.token = "", e.user = null, localStorage.removeItem(r);
}
export {
  i as c,
  e as f,
  l as h,
  c as s
};
