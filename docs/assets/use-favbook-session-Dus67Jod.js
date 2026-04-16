import { v as a, r as t } from "./react-gFHNOnf5.js";
import { f as r, h as s } from "./favbook-auth-store-Dar1sz9f.js";
function u() {
  const o = a(r);
  t.useEffect(() => {
    s();
  }, []);
  const e = !!(o.backendUrl && o.token), n = t.useMemo(() => ({ backendUrl: o.backendUrl, token: o.token }), [o.backendUrl, o.token]);
  return { authState: o, isAuthed: e, clientConfig: n };
}
export {
  u
};
