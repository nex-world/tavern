function n(i){return typeof i=="string"?i.replace(/<think\b[^>]*>[\s\S]*?(?:<\/think\s*>|$)/gi,"").trim():""}export{n as p};
