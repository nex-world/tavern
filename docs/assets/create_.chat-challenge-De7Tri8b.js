import{e as q,r as m,u as F,t as b,j as e}from"./react-CdECYH1o.js";import{u as H,C as W,M as L,a as T,S as Q}from"./conversation-message-BwOyJT_A.js";import{C as X,a as Z}from"./ChatCreationLayout-DlQMs42e.js";import{I as ee,d as te,b as se}from"./input-group-Y3ah1Rbi.js";import{I as ne}from"./input-DbakF4VO.js";import{E as ae,d as A}from"./empty-D_9_HEmg.js";import{h as z}from"./@tanstack-HvIyZ7G-.js";import{B as g}from"./button-DXPhLBkO.js";import{T as re}from"./textarea-tLeysPi9.js";import{B as D}from"./badge-CuoEhJCl.js";import{c as ie}from"./shadcn-utils-Cnr6N47i.js";import{n as j}from"./id-BY9c7rfI.js";import{g as oe,n as B,f as $,m as le}from"./db-master-b5fCn9mB.js";import{_ as U,o as E,n as O,s as w,c as ce,b as de,l as me}from"./zod-BTj0C3yc.js";import{u as ue}from"./useLLM-CtGCYvq3.js";import{u as pe}from"./analytics-BjBUYDN_.js";import{R as P,_ as J,ae as R,b as he,P as ge,D as xe,A as fe}from"./icons-LD1dlQlv.js";import"./vendor-BK50ji10.js";import"./formatting-BBnWba-L.js";import"./@radix-ui-BQCqNqg0.js";import"./immer-BCQU3qJI.js";import"./alert-DSZBkTkP.js";import"./components-and-styling-lnR2ABT4.js";import"./reading-settings.store-BQ85Rkks.js";import"./collapsible-CruqMeF1.js";import"./es-toolkit-9bjl2JfA.js";import"./spinner-DANPY4R7.js";import"./dexie-B_g1HnUg.js";import"./@tailwind-CPcsbTWB.js";import"./nex-tavern-uuid-CXz893WL.js";import"./index-k6qYjFMJ.js";const Se=U(["idle","interview_running","interview_waiting","description_generating","description_confirming","json_generating","json_editing","json_confirmed","completed"]),Ce={idle:{label:"开始",placeholder:"描述一下你想创建的挑战吧...",inputEnabled:!0},interview_running:{label:"助理回复中",placeholder:"助理正在思考...",inputEnabled:!1},interview_waiting:{label:"继续描述",placeholder:"继续描述你的挑战，或回答助理的问题...",inputEnabled:!0},description_generating:{label:"生成设计中",placeholder:"正在整理挑战设计...",inputEnabled:!1},description_confirming:{label:"确认设计",placeholder:"确认设计无误，或告诉我需要修改的地方...",inputEnabled:!0},json_generating:{label:"生成挑战卡中",placeholder:"正在生成挑战卡数据...",inputEnabled:!1},json_editing:{label:"编辑挑战卡",placeholder:"告诉我需要修改的地方，或直接在右侧编辑...",inputEnabled:!0},json_confirmed:{label:"挑战卡已就绪",placeholder:"挑战卡已生成，可以导出或添加到广场",inputEnabled:!1},completed:{label:"完成",placeholder:"挑战卡创建完成！",inputEnabled:!1}},je=E({id:w().describe("消息ID"),role:U(["user","assistant","system"]).describe("消息角色"),content:w().describe("消息内容"),timestamp:O().describe("时间戳"),messageType:U(["chat","description_summary","json_preview"]).optional().describe("消息类型")}),be=E({presetHint:w().optional().describe("预设的挑战类型提示"),preselectedCharacterId:w().optional().describe("预选的角色 ID")}),ve=E({currentUIState:Se.describe("当前 UI 状态"),messages:de(je).describe("对话历史"),generatedDescription:w().optional().describe("生成的设计总结"),generatedJson:oe.optional().describe("生成的挑战卡 JSON"),descriptionConfirmed:ce().default(!1).describe("用户是否已确认设计")});E({id:w().describe("会话ID"),mode:me("chat-create-challenge").describe("模式标识"),modeConfig:be.describe("模式配置"),modeState:ve.describe("模式状态"),createdAt:O().describe("创建时间"),updatedAt:O().describe("更新时间")});function G(){return{currentUIState:"idle",messages:[],descriptionConfirmed:!1}}const t=q({currentSession:null,isLoading:!1,streamingContent:"",startNewSession(n,r){const i=Date.now(),f={id:`chat-create-chal-${i}`,mode:"chat-create-challenge",modeConfig:{presetHint:n,preselectedCharacterId:r},modeState:G(),createdAt:i,updatedAt:i};return this.currentSession=f,this.isLoading=!1,this.streamingContent="",f},getState(){return this.currentSession?.modeState??null},getMessages(){return this.currentSession?.modeState.messages??[]},addUserMessage(n){const r={id:j(),role:"user",content:n,timestamp:Date.now(),messageType:"chat"};return this.currentSession&&(this.currentSession.modeState.messages.push(r),this.currentSession.updatedAt=Date.now()),r},addAssistantMessage(n,r="chat"){const i={id:j(),role:"assistant",content:n,timestamp:Date.now(),messageType:r};return this.currentSession&&(this.currentSession.modeState.messages.push(i),this.currentSession.updatedAt=Date.now()),i},setUIState(n){this.currentSession&&(this.currentSession.modeState.currentUIState=n,this.currentSession.updatedAt=Date.now())},setGeneratedDescription(n){this.currentSession&&(this.currentSession.modeState.generatedDescription=n,this.currentSession.updatedAt=Date.now())},setGeneratedJson(n){this.currentSession&&(this.currentSession.modeState.generatedJson=n,this.currentSession.updatedAt=Date.now())},updateGeneratedJsonField(n,r){this.currentSession?.modeState.generatedJson&&(this.currentSession.modeState.generatedJson[n]=r,this.currentSession.updatedAt=Date.now())},setDescriptionConfirmed(n){this.currentSession&&(this.currentSession.modeState.descriptionConfirmed=n,this.currentSession.updatedAt=Date.now())},setLoading(n){this.isLoading=n},setStreamingContent(n){this.streamingContent=n},clearStreamingContent(){this.streamingContent=""},endSession(){this.currentSession=null,this.isLoading=!1,this.streamingContent=""},resetSession(){this.currentSession&&(this.currentSession.modeState=G(),this.currentSession.updatedAt=Date.now()),this.isLoading=!1,this.streamingContent=""}}),Ne=`你是一位专业的挑战设计顾问。你的任务是通过对话引导用户创建一个挑战卡。

你需要收集以下信息：
1. 挑战的基本概念（名称、主题、故事背景）
2. 挑战的目标（玩家需要达成什么）
3. 挑战的失败条件（什么情况下算失败）
4. 需要追踪的变量（如好感度、金钱、时间等，包括初始值和范围）
5. 角色在挑战中的行为方式（roleTaskPrompt）
6. 给玩家的引导提示（userGuidance）
7. 难度和预期体验

请用友好、专业的语气与用户交流，一次只问 1-2 个问题。
帮助用户设计有趣且平衡的挑战，给出专业建议。
当你认为收集的信息足够创建一个完整的挑战时，在回复的末尾添加 [INFO_COMPLETE] 标记。`,ye=`根据之前的对话内容，生成一份完整的挑战设计总结。
请使用以下格式输出：

## 挑战名称
[挑战名字]

## 挑战描述
[挑战的背景故事和情境描述]

## 变量设计
| 变量名 | 类型 | 初始值 | 范围 | 说明 |
|--------|------|--------|------|------|
[列出所有需要追踪的变量]

## 目标条件
[列出玩家需要达成的目标及其条件]

## 失败条件
[列出会导致失败的条件]

## 角色行为指导
[角色在此挑战中应该如何表现]

## 玩家引导
[给玩家的提示和建议]

请确保设计合理、平衡，能够带来有趣的游戏体验。`,we=`根据之前的对话和挑战设计，生成一个符合规范的挑战卡 JSON。

变量条件表达式格式：
- ['gt', 'varName', value] - 大于
- ['gte', 'varName', value] - 大于等于
- ['lt', 'varName', value] - 小于
- ['lte', 'varName', value] - 小于等于
- ['eq', 'varName', value] - 等于
- ['isTrue', 'varName'] - 布尔真
- ['isFalse', 'varName'] - 布尔假
- ['and', [...conditions]] - 与
- ['or', [...conditions]] - 或

请严格按照以下格式输出 JSON（只输出 JSON，不要有其他内容）：
{
  "name": "挑战名称",
  "description": "挑战描述",
  "characterId": "",
  "roleTaskPrompt": "角色在挑战中的行为指导",
  "userGuidance": "给玩家的引导提示",
  "variables": {
    "变量名": {
      "key": "变量名",
      "type": "number",
      "description": "变量说明",
      "hidden": false,
      "initial": 0,
      "min": 0,
      "max": 100
    }
  },
  "goals": [
    {
      "key": "goal_key",
      "description": "目标描述",
      "condition": ["gte", "变量名", 100],
      "characterPrompt": "达成后给角色的提示",
      "userInfo": "达成后给玩家的信息"
    }
  ],
  "failureChecks": [
    {
      "key": "failure_key",
      "description": "失败条件描述",
      "condition": ["lte", "变量名", 0],
      "characterPrompt": "失败后给角色的提示",
      "userInfo": "失败后给玩家的信息"
    }
  ],
  "tags": ["标签1", "标签2"]
}

确保 JSON 格式正确，条件表达式语法正确。`;function _e(){const n=ue(),r=z(),i=m.useRef(!1),f=F(t),y=m.useCallback(async(c,p)=>{if(!(i.current||!t.currentSession)&&["idle","interview_waiting","description_confirming","json_editing"].includes(t.currentSession.modeState.currentUIState))try{i.current=!0,t.setLoading(!0),t.addUserMessage(c),p?.();const d=t.currentSession.modeState.currentUIState;(d==="idle"||d==="interview_waiting")&&t.setUIState("interview_running");const o=t.getMessages(),l=[{id:j(),role:"system",content:Ne},...o.map(C=>({id:C.id,role:C.role,content:C.content}))];let h="";t.clearStreamingContent(),await n.callLLMStream(l,(C,_)=>{h=_,t.setStreamingContent(_)});const a=h.includes("[INFO_COMPLETE]"),x=h.replace("[INFO_COMPLETE]","").trim();t.addAssistantMessage(x),t.clearStreamingContent(),a?t.setUIState("description_confirming"):t.setUIState("interview_waiting")}catch(d){throw console.error("Chat Create Challenge Error:",d),b.error("LLM 调用失败，请检查配置",{duration:5e3,action:{label:"前往配置",onClick:()=>r({to:"/config/llm"})}}),t.setUIState("interview_waiting"),d}finally{i.current=!1,t.setLoading(!1)}},[n,r]),v=m.useCallback(async()=>{if(!(i.current||!t.currentSession))try{i.current=!0,t.setLoading(!0),t.setUIState("description_generating");const c=t.getMessages(),p=[{id:j(),role:"system",content:ye},...c.map(o=>({id:o.id,role:o.role,content:o.content})),{id:j(),role:"user",content:"请根据以上对话内容，生成挑战设计总结。"}];let d="";t.clearStreamingContent(),await n.callLLMStream(p,(o,l)=>{d=l,t.setStreamingContent(l)}),t.setGeneratedDescription(d),t.addAssistantMessage(d,"description_summary"),t.clearStreamingContent(),t.setUIState("description_confirming")}catch(c){console.error("Generate Description Error:",c),b.error("生成设计总结失败"),t.setUIState("interview_waiting")}finally{i.current=!1,t.setLoading(!1)}},[n]),S=m.useCallback(async()=>{if(!(i.current||!t.currentSession))try{i.current=!0,t.setLoading(!0),t.setUIState("json_generating");const c=t.getMessages(),p=t.currentSession.modeState.generatedDescription,d=[{id:j(),role:"system",content:we},...c.map(l=>({id:l.id,role:l.role,content:l.content}))];p&&d.push({id:j(),role:"assistant",content:`挑战设计总结：
${p}`}),d.push({id:j(),role:"user",content:"请根据以上信息，生成挑战卡 JSON。只输出 JSON，不要有其他内容。"});let o="";await n.callLLMStream(d,(l,h)=>{o=h,t.setStreamingContent(h)});try{let l=o;const h=o.match(/```(?:json)?\s*([\s\S]*?)```/);h&&(l=h[1].trim());const a=JSON.parse(l),x=Date.now(),C=B({id:`chal-${x}`,name:a.name||"未命名挑战",description:a.description||"",characterId:a.characterId||"",roleTaskPrompt:a.roleTaskPrompt||"",userGuidance:a.userGuidance||"",variables:a.variables||{},goals:a.goals||[],failureChecks:a.failureChecks||[],tags:a.tags||[],createdAt:x,updatedAt:x},{now:x,idFactory:()=>`chal-${x}`});t.setGeneratedJson(C),t.clearStreamingContent(),t.setUIState("json_editing"),b.success("挑战卡生成成功！")}catch(l){console.error("JSON Parse Error:",l),b.error($(l)),t.setUIState("description_confirming")}}catch(c){console.error("Generate JSON Error:",c),b.error("生成挑战卡失败"),t.setUIState("description_confirming")}finally{i.current=!1,t.setLoading(!1)}},[n]),u=m.useCallback(()=>{t.setUIState("json_confirmed")},[]),N=m.useCallback(async()=>{await S()},[S]);return{store:f,sendMessage:y,generateDescription:v,generateJson:S,confirmJson:u,regenerateJson:N,isLoading:f.isLoading,streamingContent:f.streamingContent}}function ke(){pe("challenge-card");const n=z(),r=F(t),{sendMessage:i,generateDescription:f,generateJson:y,confirmJson:v,regenerateJson:S,isLoading:u,streamingContent:N}=_e(),[c,p]=m.useState(""),d=H();m.useEffect(()=>(t.currentSession||t.startNewSession(),()=>{}),[]);const o=r.currentSession?.modeState.currentUIState??"idle",l=Ce[o],h=r.currentSession?.modeState.messages??[],a=r.currentSession?.modeState.generatedJson,x=()=>d.submit(c.trim(),l.inputEnabled&&!u,()=>p(""),s=>i(c.trim(),s)),C=m.useCallback(s=>{s.key==="Enter"&&!s.shiftKey&&!s.nativeEvent.isComposing&&s.keyCode!==229&&(s.preventDefault(),x())},[x]),_=m.useCallback(()=>{if(!a)return;const s=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),k=URL.createObjectURL(s),M=document.createElement("a");M.href=k,M.download=`${a.name||"challenge"}.json`,M.click(),URL.revokeObjectURL(k),b.success("挑战卡已导出")},[a]),V=m.useCallback(async()=>{if(a)try{const s=B(JSON.parse(JSON.stringify(a)));await le.challenges.add(s),b.success(`挑战 ${s.name} 已添加到广场`),t.setUIState("completed"),n({to:"/plaza/challenges"})}catch(s){console.error("Add to plaza error:",s),b.error($(s))}},[a,n]),K=m.useCallback(()=>{t.endSession(),n({to:"/create"})},[n]),Y=m.useCallback(()=>{t.resetSession()},[]);return e.jsxs(X,{header:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(g,{"aria-label":"返回",type:"button",variant:"ghost",size:"icon",onClick:K,children:e.jsx(fe,{"data-icon":"inline-start"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-semibold",children:"聊天式创建挑战"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"通过对话引导创建挑战卡"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(D,{variant:"outline",children:l.label}),h.length>0&&e.jsx(g,{type:"button",variant:"outline",size:"sm",onClick:Y,children:"重新开始"})]})]}),preview:(o==="json_editing"||o==="json_confirmed"||o==="completed")&&a&&e.jsx(e.Fragment,{children:e.jsxs(Z,{title:"挑战卡预览",headerAction:e.jsx(g,{type:"button",size:"icon",variant:"ghost",onClick:S,disabled:u,title:"重新生成",children:e.jsx(R,{"data-icon":"inline-start"})}),actions:e.jsxs(e.Fragment,{children:[o!=="completed"&&e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(g,{type:"button",onClick:V,className:"w-full",children:[e.jsx(ge,{"data-icon":"inline-start"}),"添加到广场"]}),e.jsxs(g,{type:"button",variant:"outline",onClick:_,className:"w-full",children:[e.jsx(xe,{"data-icon":"inline-start"}),"导出为文件"]}),o==="json_editing"&&e.jsxs(g,{type:"button",variant:"secondary",onClick:v,className:"w-full",children:[e.jsx(J,{"data-icon":"inline-start"}),"确认完成编辑"]})]}),o==="completed"&&e.jsxs("div",{className:"text-center text-muted-foreground py-4",children:[e.jsx(J,{className:"size-8 mx-auto mb-2 text-primary"}),e.jsx("p",{children:"挑战卡已添加到广场！"})]})]}),children:[e.jsx(I,{label:"名称",value:a.name,onChange:s=>t.updateGeneratedJsonField("name",s)}),e.jsx(I,{label:"描述",value:a.description,multiline:!0,onChange:s=>t.updateGeneratedJsonField("description",s)}),e.jsx(I,{label:"角色行为指导",value:a.roleTaskPrompt,multiline:!0,onChange:s=>t.updateGeneratedJsonField("roleTaskPrompt",s)}),e.jsx(I,{label:"玩家引导",value:a.userGuidance,multiline:!0,onChange:s=>t.updateGeneratedJsonField("userGuidance",s)}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"变量"}),e.jsx("div",{className:"flex flex-col mt-1 gap-1",children:Object.entries(a.variables||{}).map(([s,k])=>e.jsxs("div",{className:"text-xs bg-muted rounded p-2",children:[e.jsx("span",{className:"font-medium",children:s}),e.jsxs("span",{className:"text-muted-foreground ml-2",children:["初始值:"," ",String(k.initial??0)]})]},s))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"目标"}),e.jsx("div",{className:"flex flex-col mt-1 gap-1",children:(a.goals||[]).map(s=>e.jsx("div",{className:"text-xs bg-muted rounded p-2",children:e.jsx("span",{className:"font-medium",children:s.description})},s.key))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"失败条件"}),e.jsx("div",{className:"flex flex-col mt-1 gap-1",children:(a.failureChecks||[]).map(s=>e.jsx("div",{className:"text-xs bg-muted rounded p-2",children:e.jsx("span",{className:"font-medium",children:s.description})},s.key))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"标签"}),e.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:Array.from(new Set(a.tags||[])).map(s=>e.jsx(D,{variant:"secondary",children:s},s))})]})]})}),children:[e.jsxs(W,{children:[h.length===0&&!N&&e.jsx(L,{messageId:"creation-start",children:e.jsxs(ae,{className:"py-8",children:[e.jsx(P,{className:"size-12 mx-auto mb-4 opacity-50"}),e.jsx(A,{children:"开始描述你想创建的挑战吧！"}),e.jsx(A,{className:"text-sm mt-2",children:"例如：我想创建一个讨价还价的挑战..."})]})}),h.map(s=>e.jsx(L,{messageId:s.id,scrollAnchor:s.role==="user",children:e.jsxs(T,{name:s.role==="user"?"我":"创作助手",fromUser:s.role==="user",children:[e.jsx("div",{className:"whitespace-pre-wrap text-sm",children:s.content}),s.messageType==="description_summary"&&e.jsx(D,{variant:"secondary",className:"mt-2",children:"挑战设计总结"})]})},s.id)),N&&e.jsx(L,{messageId:"creation-stream",children:e.jsx(T,{name:"创作助手",footer:"正在回复…",children:N})})]},r.currentSession?.id),e.jsxs("div",{className:"flex flex-col p-4 border-t gap-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[o==="description_confirming"&&e.jsxs(e.Fragment,{children:[e.jsxs(g,{type:"button",size:"sm",onClick:y,disabled:u,children:[e.jsx(J,{"data-icon":"inline-start"}),"确认并生成挑战卡"]}),e.jsxs(g,{type:"button",size:"sm",variant:"outline",onClick:f,disabled:u,children:[e.jsx(R,{"data-icon":"inline-start"}),"重新生成设计"]})]}),(o==="interview_waiting"||o==="idle")&&h.length>2&&e.jsxs(g,{type:"button",size:"sm",variant:"secondary",onClick:y,disabled:u,children:[e.jsx(P,{"data-icon":"inline-start"}),"立即生成挑战卡"]})]}),e.jsx(Q,{draft:c,onRestore:p,text:d.failure,onDismiss:d.dismiss}),e.jsxs(ee,{children:[e.jsx(te,{"aria-label":"创作要求",value:c,onChange:s=>p(s.target.value),onKeyDown:C,placeholder:l.placeholder,disabled:!l.inputEnabled||u,className:"min-h-[60px] max-h-[120px] resize-none"}),e.jsx(se,{align:"block-end",className:"justify-end",children:e.jsx(g,{"aria-label":"发送消息",type:"button",size:"icon",onClick:x,disabled:!l.inputEnabled||u||!c.trim(),children:e.jsx(he,{"data-icon":"inline-start"})})})]})]})]})}function I({label:n,value:r,multiline:i=!1,onChange:f}){const[y,v]=m.useState(!1),[S,u]=m.useState(r),N=()=>{f(S),v(!1)},c=()=>{u(r),v(!1)};return y?e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:n}),i?e.jsx(re,{"aria-label":n,value:S,onChange:p=>u(p.target.value),className:"min-h-[60px]",autoFocus:!0}):e.jsx(ne,{"aria-label":n,type:"text",value:S,onChange:p=>u(p.target.value),className:"w-full text-sm border rounded px-2 py-1 bg-background",autoFocus:!0}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx(g,{type:"button",size:"sm",variant:"ghost",onClick:N,children:"保存"}),e.jsx(g,{type:"button",size:"sm",variant:"ghost",onClick:c,children:"取消"})]})]}):e.jsxs("div",{className:"cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors",onClick:()=>{u(r),v(!0)},children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:n}),e.jsx("p",{className:ie("text-sm",i?"whitespace-pre-wrap line-clamp-3":"truncate"),children:r||e.jsx("span",{className:"text-muted-foreground italic",children:"点击编辑"})})]})}function rt(){return e.jsx(ke,{})}export{rt as component};
