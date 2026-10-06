function p(r,a="角色",o="用户"){return r.replace(/\{\{\s*(char|user)\s*\}\}|<(BOT|USER)>/gi,(t,s,e)=>(s||e||"").toLowerCase()==="char"||e?.toLowerCase()==="bot"?a:o)}export{p as d};
