import { x as i } from "./vendor-DRKpriaz.js";
import { al as c, am as m, a6 as u } from "./react-gFHNOnf5.js";
const r = { accessToken: "", tmdbAccessToken: "", my9BaseUrl: "https://my9.shatranj.space/api/", itunesCountry: "us", itunesLang: "en_us", username: "", subjectId: "1", personId: "1", characterId: "1", endpointKeyword: "" }, o = "bangumi-runtime-config/v1", n = i.createInstance({ name: "repo--app", storeName: "fav_global_state" });
function s(t) {
  return { ...r, ...t };
}
const a = c({ ...r });
if (typeof window < "u") {
  let t = false;
  (async () => {
    try {
      const e = await n.getItem(o);
      e && Object.assign(a, s(e));
    } catch (e) {
      console.warn("Failed to hydrate bangumiStore from localforage.", e);
    } finally {
      t = true;
    }
  })(), m(a, () => {
    if (!t) return;
    const e = s(u(a));
    n.setItem(o, e);
  });
}
export {
  a as b
};
