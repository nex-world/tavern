import{e as Y,r as m,u as R,t as j,j as e}from"./react-BxzVs1F-.js";import{C as q,a as H}from"./ChatCreationLayout-BHQLapCk.js";import{C as W,M,a as O}from"./conversation-message-D83NGiDb.js";import{I as Q,d as X,b as Z}from"./input-group-0WwM74BH.js";import{I as ee}from"./input-Cv054FMu.js";import{E as te,d as T}from"./empty-CXeTqhb2.js";import{h as F}from"./@tanstack-B5tCGMiu.js";import{B as x}from"./button-BRW5UoPv.js";import{T as se}from"./textarea-CT6wyGoV.js";import{B as L}from"./badge-Cxz86jq2.js";import{c as ne}from"./shadcn-utils-Cnr6N47i.js";import{n as C}from"./id-BY9c7rfI.js";import{g as ae,n as z,f as B,m as re}from"./db-master-kA5b7Kkp.js";import{_ as J,o as I,n as U,s as w,c as ie,b as oe,l as le}from"./zod-BTj0C3yc.js";import{u as ce}from"./useLLM-0gFp44Ix.js";import{u as de}from"./analytics-DHqd3KZu.js";import{R as A,_ as D,ae as P,b as me,P as ue,D as pe,A as he}from"./icons-C6_pGF5j.js";import"./vendor-CJLoHUZS.js";import"./formatting-YGyf6cFc.js";import"./@radix-ui-BQCqNqg0.js";import"./immer-BCQU3qJI.js";import"./reading-settings.store-BJDH9hBu.js";import"./collapsible-kCge2IUx.js";import"./es-toolkit-9bjl2JfA.js";import"./components-and-styling-lnR2ABT4.js";import"./spinner-CFrUWQbp.js";import"./dexie-CG_LwvPM.js";import"./@tailwind-CPcsbTWB.js";import"./nex-tavern-uuid-Cz-4R4MI.js";import"./index-CRWqN2Z9.js";const ge=J(["idle","interview_running","interview_waiting","description_generating","description_confirming","json_generating","json_editing","json_confirmed","completed"]),xe={idle:{label:"开始",placeholder:"描述一下你想创建的挑战吧...",inputEnabled:!0},interview_running:{label:"助理回复中",placeholder:"助理正在思考...",inputEnabled:!1},interview_waiting:{label:"继续描述",placeholder:"继续描述你的挑战，或回答助理的问题...",inputEnabled:!0},description_generating:{label:"生成设计中",placeholder:"正在整理挑战设计...",inputEnabled:!1},description_confirming:{label:"确认设计",placeholder:"确认设计无误，或告诉我需要修改的地方...",inputEnabled:!0},json_generating:{label:"生成挑战卡中",placeholder:"正在生成挑战卡数据...",inputEnabled:!1},json_editing:{label:"编辑挑战卡",placeholder:"告诉我需要修改的地方，或直接在右侧编辑...",inputEnabled:!0},json_confirmed:{label:"挑战卡已就绪",placeholder:"挑战卡已生成，可以导出或添加到广场",inputEnabled:!1},completed:{label:"完成",placeholder:"挑战卡创建完成！",inputEnabled:!1}},fe=I({id:w().describe("消息ID"),role:J(["user","assistant","system"]).describe("消息角色"),content:w().describe("消息内容"),timestamp:U().describe("时间戳"),messageType:J(["chat","description_summary","json_preview"]).optional().describe("消息类型")}),Se=I({presetHint:w().optional().describe("预设的挑战类型提示"),preselectedCharacterId:w().optional().describe("预选的角色 ID")}),Ce=I({currentUIState:ge.describe("当前 UI 状态"),messages:oe(fe).describe("对话历史"),generatedDescription:w().optional().describe("生成的设计总结"),generatedJson:ae.optional().describe("生成的挑战卡 JSON"),descriptionConfirmed:ie().default(!1).describe("用户是否已确认设计")});I({id:w().describe("会话ID"),mode:le("chat-create-challenge").describe("模式标识"),modeConfig:Se.describe("模式配置"),modeState:Ce.describe("模式状态"),createdAt:U().describe("创建时间"),updatedAt:U().describe("更新时间")});function G(){return{currentUIState:"idle",messages:[],descriptionConfirmed:!1}}const t=Y({currentSession:null,isLoading:!1,streamingContent:"",startNewSession(n,o){const r=Date.now(),f={id:`chat-create-chal-${r}`,mode:"chat-create-challenge",modeConfig:{presetHint:n,preselectedCharacterId:o},modeState:G(),createdAt:r,updatedAt:r};return this.currentSession=f,this.isLoading=!1,this.streamingContent="",f},getState(){return this.currentSession?.modeState??null},getMessages(){return this.currentSession?.modeState.messages??[]},addUserMessage(n){const o={id:C(),role:"user",content:n,timestamp:Date.now(),messageType:"chat"};return this.currentSession&&(this.currentSession.modeState.messages.push(o),this.currentSession.updatedAt=Date.now()),o},addAssistantMessage(n,o="chat"){const r={id:C(),role:"assistant",content:n,timestamp:Date.now(),messageType:o};return this.currentSession&&(this.currentSession.modeState.messages.push(r),this.currentSession.updatedAt=Date.now()),r},setUIState(n){this.currentSession&&(this.currentSession.modeState.currentUIState=n,this.currentSession.updatedAt=Date.now())},setGeneratedDescription(n){this.currentSession&&(this.currentSession.modeState.generatedDescription=n,this.currentSession.updatedAt=Date.now())},setGeneratedJson(n){this.currentSession&&(this.currentSession.modeState.generatedJson=n,this.currentSession.updatedAt=Date.now())},updateGeneratedJsonField(n,o){this.currentSession?.modeState.generatedJson&&(this.currentSession.modeState.generatedJson[n]=o,this.currentSession.updatedAt=Date.now())},setDescriptionConfirmed(n){this.currentSession&&(this.currentSession.modeState.descriptionConfirmed=n,this.currentSession.updatedAt=Date.now())},setLoading(n){this.isLoading=n},setStreamingContent(n){this.streamingContent=n},clearStreamingContent(){this.streamingContent=""},endSession(){this.currentSession=null,this.isLoading=!1,this.streamingContent=""},resetSession(){this.currentSession&&(this.currentSession.modeState=G(),this.currentSession.updatedAt=Date.now()),this.isLoading=!1,this.streamingContent=""}}),je=`你是一位专业的挑战设计顾问。你的任务是通过对话引导用户创建一个挑战卡。

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
当你认为收集的信息足够创建一个完整的挑战时，在回复的末尾添加 [INFO_COMPLETE] 标记。`,be=`根据之前的对话内容，生成一份完整的挑战设计总结。
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

请确保设计合理、平衡，能够带来有趣的游戏体验。`,ve=`根据之前的对话和挑战设计，生成一个符合规范的挑战卡 JSON。

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

确保 JSON 格式正确，条件表达式语法正确。`;function Ne(){const n=ce(),o=F(),r=m.useRef(!1),f=R(t),N=m.useCallback(async c=>{if(!(r.current||!t.currentSession))try{r.current=!0,t.setLoading(!0),t.addUserMessage(c);const d=t.currentSession.modeState.currentUIState;(d==="idle"||d==="interview_waiting")&&t.setUIState("interview_running");const l=t.getMessages(),p=[{id:C(),role:"system",content:je},...l.map(g=>({id:g.id,role:g.role,content:g.content}))];let i="";t.clearStreamingContent(),await n.callLLMStream(p,(g,y)=>{i=y,t.setStreamingContent(y)});const a=i.includes("[INFO_COMPLETE]"),h=i.replace("[INFO_COMPLETE]","").trim();t.addAssistantMessage(h),t.clearStreamingContent(),a?t.setUIState("description_confirming"):t.setUIState("interview_waiting")}catch(d){console.error("Chat Create Challenge Error:",d),j.error("LLM 调用失败，请检查配置",{duration:5e3,action:{label:"前往配置",onClick:()=>o({to:"/config/llm"})}}),t.setUIState("interview_waiting")}finally{r.current=!1,t.setLoading(!1)}},[n,o]),b=m.useCallback(async()=>{if(!(r.current||!t.currentSession))try{r.current=!0,t.setLoading(!0),t.setUIState("description_generating");const c=t.getMessages(),d=[{id:C(),role:"system",content:be},...c.map(p=>({id:p.id,role:p.role,content:p.content})),{id:C(),role:"user",content:"请根据以上对话内容，生成挑战设计总结。"}];let l="";t.clearStreamingContent(),await n.callLLMStream(d,(p,i)=>{l=i,t.setStreamingContent(i)}),t.setGeneratedDescription(l),t.addAssistantMessage(l,"description_summary"),t.clearStreamingContent(),t.setUIState("description_confirming")}catch(c){console.error("Generate Description Error:",c),j.error("生成设计总结失败"),t.setUIState("interview_waiting")}finally{r.current=!1,t.setLoading(!1)}},[n]),S=m.useCallback(async()=>{if(!(r.current||!t.currentSession))try{r.current=!0,t.setLoading(!0),t.setUIState("json_generating");const c=t.getMessages(),d=t.currentSession.modeState.generatedDescription,l=[{id:C(),role:"system",content:ve},...c.map(i=>({id:i.id,role:i.role,content:i.content}))];d&&l.push({id:C(),role:"assistant",content:`挑战设计总结：
${d}`}),l.push({id:C(),role:"user",content:"请根据以上信息，生成挑战卡 JSON。只输出 JSON，不要有其他内容。"});let p="";await n.callLLMStream(l,(i,a)=>{p=a,t.setStreamingContent(a)});try{let i=p;const a=p.match(/```(?:json)?\s*([\s\S]*?)```/);a&&(i=a[1].trim());const h=JSON.parse(i),g=Date.now(),y=z({id:`chal-${g}`,name:h.name||"未命名挑战",description:h.description||"",characterId:h.characterId||"",roleTaskPrompt:h.roleTaskPrompt||"",userGuidance:h.userGuidance||"",variables:h.variables||{},goals:h.goals||[],failureChecks:h.failureChecks||[],tags:h.tags||[],createdAt:g,updatedAt:g},{now:g,idFactory:()=>`chal-${g}`});t.setGeneratedJson(y),t.clearStreamingContent(),t.setUIState("json_editing"),j.success("挑战卡生成成功！")}catch(i){console.error("JSON Parse Error:",i),j.error(B(i)),t.setUIState("description_confirming")}}catch(c){console.error("Generate JSON Error:",c),j.error("生成挑战卡失败"),t.setUIState("description_confirming")}finally{r.current=!1,t.setLoading(!1)}},[n]),u=m.useCallback(()=>{t.setUIState("json_confirmed")},[]),v=m.useCallback(async()=>{await S()},[S]);return{store:f,sendMessage:N,generateDescription:b,generateJson:S,confirmJson:u,regenerateJson:v,isLoading:f.isLoading,streamingContent:f.streamingContent}}function ye(){de("challenge-card");const n=F(),o=R(t),{sendMessage:r,generateDescription:f,generateJson:N,confirmJson:b,regenerateJson:S,isLoading:u,streamingContent:v}=Ne(),[c,d]=m.useState("");m.useEffect(()=>(t.currentSession||t.startNewSession(),()=>{}),[]);const l=o.currentSession?.modeState.currentUIState??"idle",p=xe[l],i=o.currentSession?.modeState.messages??[],a=o.currentSession?.modeState.generatedJson,h=m.useCallback(async()=>{if(!c.trim()||u)return;const s=c.trim();d(""),await r(s)},[c,u,r]),g=m.useCallback(s=>{s.key==="Enter"&&!s.shiftKey&&!s.nativeEvent.isComposing&&(s.preventDefault(),h())},[h]),y=m.useCallback(()=>{if(!a)return;const s=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),_=URL.createObjectURL(s),E=document.createElement("a");E.href=_,E.download=`${a.name||"challenge"}.json`,E.click(),URL.revokeObjectURL(_),j.success("挑战卡已导出")},[a]),$=m.useCallback(async()=>{if(a)try{const s=z(JSON.parse(JSON.stringify(a)));await re.challenges.add(s),j.success(`挑战 ${s.name} 已添加到广场`),t.setUIState("completed"),n({to:"/plaza/challenges"})}catch(s){console.error("Add to plaza error:",s),j.error(B(s))}},[a,n]),V=m.useCallback(()=>{t.endSession(),n({to:"/create"})},[n]),K=m.useCallback(()=>{t.resetSession()},[]);return e.jsxs(q,{header:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(x,{"aria-label":"返回",type:"button",variant:"ghost",size:"icon",onClick:V,children:e.jsx(he,{"data-icon":"inline-start"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-semibold",children:"聊天式创建挑战"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"通过对话引导创建挑战卡"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(L,{variant:"outline",children:p.label}),i.length>0&&e.jsx(x,{type:"button",variant:"outline",size:"sm",onClick:K,children:"重新开始"})]})]}),preview:(l==="json_editing"||l==="json_confirmed"||l==="completed")&&a&&e.jsx(e.Fragment,{children:e.jsxs(H,{title:"挑战卡预览",headerAction:e.jsx(x,{type:"button",size:"icon",variant:"ghost",onClick:S,disabled:u,title:"重新生成",children:e.jsx(P,{"data-icon":"inline-start"})}),actions:e.jsxs(e.Fragment,{children:[l!=="completed"&&e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(x,{type:"button",onClick:$,className:"w-full",children:[e.jsx(ue,{"data-icon":"inline-start"}),"添加到广场"]}),e.jsxs(x,{type:"button",variant:"outline",onClick:y,className:"w-full",children:[e.jsx(pe,{"data-icon":"inline-start"}),"导出为文件"]}),l==="json_editing"&&e.jsxs(x,{type:"button",variant:"secondary",onClick:b,className:"w-full",children:[e.jsx(D,{"data-icon":"inline-start"}),"确认完成编辑"]})]}),l==="completed"&&e.jsxs("div",{className:"text-center text-muted-foreground py-4",children:[e.jsx(D,{className:"size-8 mx-auto mb-2 text-primary"}),e.jsx("p",{children:"挑战卡已添加到广场！"})]})]}),children:[e.jsx(k,{label:"名称",value:a.name,onChange:s=>t.updateGeneratedJsonField("name",s)}),e.jsx(k,{label:"描述",value:a.description,multiline:!0,onChange:s=>t.updateGeneratedJsonField("description",s)}),e.jsx(k,{label:"角色行为指导",value:a.roleTaskPrompt,multiline:!0,onChange:s=>t.updateGeneratedJsonField("roleTaskPrompt",s)}),e.jsx(k,{label:"玩家引导",value:a.userGuidance,multiline:!0,onChange:s=>t.updateGeneratedJsonField("userGuidance",s)}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"变量"}),e.jsx("div",{className:"flex flex-col mt-1 gap-1",children:Object.entries(a.variables||{}).map(([s,_])=>e.jsxs("div",{className:"text-xs bg-muted rounded p-2",children:[e.jsx("span",{className:"font-medium",children:s}),e.jsxs("span",{className:"text-muted-foreground ml-2",children:["初始值:"," ",String(_.initial??0)]})]},s))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"目标"}),e.jsx("div",{className:"flex flex-col mt-1 gap-1",children:(a.goals||[]).map(s=>e.jsx("div",{className:"text-xs bg-muted rounded p-2",children:e.jsx("span",{className:"font-medium",children:s.description})},s.key))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"失败条件"}),e.jsx("div",{className:"flex flex-col mt-1 gap-1",children:(a.failureChecks||[]).map(s=>e.jsx("div",{className:"text-xs bg-muted rounded p-2",children:e.jsx("span",{className:"font-medium",children:s.description})},s.key))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"标签"}),e.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:Array.from(new Set(a.tags||[])).map(s=>e.jsx(L,{variant:"secondary",children:s},s))})]})]})}),children:[e.jsxs(W,{children:[i.length===0&&!v&&e.jsx(M,{messageId:"creation-start",children:e.jsxs(te,{className:"py-8",children:[e.jsx(A,{className:"size-12 mx-auto mb-4 opacity-50"}),e.jsx(T,{children:"开始描述你想创建的挑战吧！"}),e.jsx(T,{className:"text-sm mt-2",children:"例如：我想创建一个讨价还价的挑战..."})]})}),i.map(s=>e.jsx(M,{messageId:s.id,scrollAnchor:s.role==="user",children:e.jsxs(O,{name:s.role==="user"?"我":"创作助手",fromUser:s.role==="user",children:[e.jsx("div",{className:"whitespace-pre-wrap text-sm",children:s.content}),s.messageType==="description_summary"&&e.jsx(L,{variant:"secondary",className:"mt-2",children:"挑战设计总结"})]})},s.id)),v&&e.jsx(M,{messageId:"creation-stream",children:e.jsx(O,{name:"创作助手",footer:"正在回复…",children:v})})]},o.currentSession?.id),e.jsxs("div",{className:"flex flex-col p-4 border-t gap-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[l==="description_confirming"&&e.jsxs(e.Fragment,{children:[e.jsxs(x,{type:"button",size:"sm",onClick:N,disabled:u,children:[e.jsx(D,{"data-icon":"inline-start"}),"确认并生成挑战卡"]}),e.jsxs(x,{type:"button",size:"sm",variant:"outline",onClick:f,disabled:u,children:[e.jsx(P,{"data-icon":"inline-start"}),"重新生成设计"]})]}),(l==="interview_waiting"||l==="idle")&&i.length>2&&e.jsxs(x,{type:"button",size:"sm",variant:"secondary",onClick:N,disabled:u,children:[e.jsx(A,{"data-icon":"inline-start"}),"立即生成挑战卡"]})]}),e.jsxs(Q,{children:[e.jsx(X,{"aria-label":"创作要求",value:c,onChange:s=>d(s.target.value),onKeyDown:g,placeholder:p.placeholder,disabled:!p.inputEnabled||u,className:"min-h-[60px] max-h-[120px] resize-none"}),e.jsx(Z,{align:"block-end",className:"justify-end",children:e.jsx(x,{"aria-label":"发送消息",type:"button",size:"icon",onClick:h,disabled:!p.inputEnabled||u||!c.trim(),children:e.jsx(me,{"data-icon":"inline-start"})})})]})]})]})}function k({label:n,value:o,multiline:r=!1,onChange:f}){const[N,b]=m.useState(!1),[S,u]=m.useState(o),v=()=>{f(S),b(!1)},c=()=>{u(o),b(!1)};return N?e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:n}),r?e.jsx(se,{"aria-label":n,value:S,onChange:d=>u(d.target.value),className:"min-h-[60px]",autoFocus:!0}):e.jsx(ee,{"aria-label":n,type:"text",value:S,onChange:d=>u(d.target.value),className:"w-full text-sm border rounded px-2 py-1 bg-background",autoFocus:!0}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx(x,{type:"button",size:"sm",variant:"ghost",onClick:v,children:"保存"}),e.jsx(x,{type:"button",size:"sm",variant:"ghost",onClick:c,children:"取消"})]})]}):e.jsxs("div",{className:"cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors",onClick:()=>{u(o),b(!0)},children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:n}),e.jsx("p",{className:ne("text-sm",r?"whitespace-pre-wrap line-clamp-3":"truncate"),children:o||e.jsx("span",{className:"text-muted-foreground italic",children:"点击编辑"})})]})}function tt(){return e.jsx(ye,{})}export{tt as component};
