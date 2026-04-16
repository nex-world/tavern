import { j as i, r as f } from "./react-gFHNOnf5.js";
import { I as l } from "./input-KwncZLGm.js";
import { T as p } from "./textarea-DqdRyzs9.js";
function c(e) {
  const [o, a] = f.useState(e), n = f.useRef(false);
  return f.useEffect(() => {
    n.current || a(e);
  }, [e]), { draftValue: o, setDraftValue: a, isComposingRef: n };
}
function x({ value: e, onCommit: o, onBlur: a, ...n }) {
  const { draftValue: s, setDraftValue: u, isComposingRef: r } = c(e);
  return i.jsx(l, { ...n, value: s, onChange: (t) => u(t.target.value), onCompositionStart: () => {
    r.current = true;
  }, onCompositionEnd: (t) => {
    r.current = false, u(t.currentTarget.value);
  }, onBlur: (t) => {
    r.current = false, o(s), a == null ? void 0 : a(t);
  } });
}
function D({ value: e, onCommit: o, onBlur: a, ...n }) {
  const { draftValue: s, setDraftValue: u, isComposingRef: r } = c(e);
  return i.jsx(p, { ...n, value: s, onChange: (t) => u(t.target.value), onCompositionStart: () => {
    r.current = true;
  }, onCompositionEnd: (t) => {
    r.current = false, u(t.currentTarget.value);
  }, onBlur: (t) => {
    r.current = false, o(s), a == null ? void 0 : a(t);
  } });
}
export {
  x as D,
  D as a
};
