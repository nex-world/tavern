import{D as K,r as m,u as P,t as b,j as e}from"./react-DE62XWsa.js";import{f as A}from"./@tanstack-m-1uuL6k.js";import{B as x}from"./button-B05uqCHL.js";import{T as R}from"./textarea-Dy3g7GWU.js";import{C as Y,a as H,b as q,d as W}from"./card-DOswZeAM.js";import{B as M}from"./badge-BDEsDlsM.js";import{c as G}from"./shadcn-utils-Cnr6N47i.js";import{n as C}from"./id-BY9c7rfI.js";import{g as Z,n as z,f as F,m as Q}from"./db-master-DXT9Czfg.js";import{_ as J,o as I,n as D,s as _,c as X,b as ee,l as te}from"./zod-BTj0C3yc.js";import{u as se}from"./useLLM-BYy-Ogmx.js";import{u as ae}from"./analytics-Chh7YMpj.js";import{A as ne,a8 as O,c as L,R as U,e as re,Z as ie,a7 as oe}from"./icons-B4Nv5HRG.js";import"./vendor-BJF3NJg5.js";import"./formatting-Bt4POpGk.js";import"./@radix-ui-BQCqNqg0.js";import"./immer-BCQU3qJI.js";import"./dexie-DDTiHGxC.js";import"./components-and-styling-lnR2ABT4.js";import"./@tailwind-CPcsbTWB.js";import"./global-llm-config.store-C3SCKavw.js";import"./es-toolkit-9bjl2JfA.js";import"./nex-tavern-uuid-BYPAS7ls.js";import"./index-JyDiBVul.js";const ce=J(["idle","interview_running","interview_waiting","description_generating","description_confirming","json_generating","json_editing","json_confirmed","completed"]),le={idle:{label:"开始",placeholder:"描述一下你想创建的挑战吧...",inputEnabled:!0},interview_running:{label:"助理回复中",placeholder:"助理正在思考...",inputEnabled:!1},interview_waiting:{label:"继续描述",placeholder:"继续描述你的挑战，或回答助理的问题...",inputEnabled:!0},description_generating:{label:"生成设计中",placeholder:"正在整理挑战设计...",inputEnabled:!1},description_confirming:{label:"确认设计",placeholder:"确认设计无误，或告诉我需要修改的地方...",inputEnabled:!0},json_generating:{label:"生成挑战卡中",placeholder:"正在生成挑战卡数据...",inputEnabled:!1},json_editing:{label:"编辑挑战卡",placeholder:"告诉我需要修改的地方，或直接在右侧编辑...",inputEnabled:!0},json_confirmed:{label:"挑战卡已就绪",placeholder:"挑战卡已生成，可以导出或添加到广场",inputEnabled:!1},completed:{label:"完成",placeholder:"挑战卡创建完成！",inputEnabled:!1}},de=I({id:_().describe("消息ID"),role:J(["user","assistant","system"]).describe("消息角色"),content:_().describe("消息内容"),timestamp:D().describe("时间戳"),messageType:J(["chat","description_summary","json_preview"]).optional().describe("消息类型")}),me=I({presetHint:_().optional().describe("预设的挑战类型提示"),preselectedCharacterId:_().optional().describe("预选的角色 ID")}),ue=I({currentUIState:ce.describe("当前 UI 状态"),messages:ee(de).describe("对话历史"),generatedDescription:_().optional().describe("生成的设计总结"),generatedJson:Z.optional().describe("生成的挑战卡 JSON"),descriptionConfirmed:X().default(!1).describe("用户是否已确认设计")});I({id:_().describe("会话ID"),mode:te("chat-create-challenge").describe("模式标识"),modeConfig:me.describe("模式配置"),modeState:ue.describe("模式状态"),createdAt:D().describe("创建时间"),updatedAt:D().describe("更新时间")});function T(){return{currentUIState:"idle",messages:[],descriptionConfirmed:!1}}const t=K({currentSession:null,isLoading:!1,streamingContent:"",startNewSession(a,o){const r=Date.now(),f={id:`chat-create-chal-${r}`,mode:"chat-create-challenge",modeConfig:{presetHint:a,preselectedCharacterId:o},modeState:T(),createdAt:r,updatedAt:r};return this.currentSession=f,this.isLoading=!1,this.streamingContent="",f},getState(){return this.currentSession?.modeState??null},getMessages(){return this.currentSession?.modeState.messages??[]},addUserMessage(a){const o={id:C(),role:"user",content:a,timestamp:Date.now(),messageType:"chat"};return this.currentSession&&(this.currentSession.modeState.messages.push(o),this.currentSession.updatedAt=Date.now()),o},addAssistantMessage(a,o="chat"){const r={id:C(),role:"assistant",content:a,timestamp:Date.now(),messageType:o};return this.currentSession&&(this.currentSession.modeState.messages.push(r),this.currentSession.updatedAt=Date.now()),r},setUIState(a){this.currentSession&&(this.currentSession.modeState.currentUIState=a,this.currentSession.updatedAt=Date.now())},setGeneratedDescription(a){this.currentSession&&(this.currentSession.modeState.generatedDescription=a,this.currentSession.updatedAt=Date.now())},setGeneratedJson(a){this.currentSession&&(this.currentSession.modeState.generatedJson=a,this.currentSession.updatedAt=Date.now())},updateGeneratedJsonField(a,o){this.currentSession?.modeState.generatedJson&&(this.currentSession.modeState.generatedJson[a]=o,this.currentSession.updatedAt=Date.now())},setDescriptionConfirmed(a){this.currentSession&&(this.currentSession.modeState.descriptionConfirmed=a,this.currentSession.updatedAt=Date.now())},setLoading(a){this.isLoading=a},setStreamingContent(a){this.streamingContent=a},clearStreamingContent(){this.streamingContent=""},endSession(){this.currentSession=null,this.isLoading=!1,this.streamingContent=""},resetSession(){this.currentSession&&(this.currentSession.modeState=T(),this.currentSession.updatedAt=Date.now()),this.isLoading=!1,this.streamingContent=""}}),pe=`你是一位专业的挑战设计顾问。你的任务是通过对话引导用户创建一个挑战卡。

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
当你认为收集的信息足够创建一个完整的挑战时，在回复的末尾添加 [INFO_COMPLETE] 标记。`,he=`根据之前的对话内容，生成一份完整的挑战设计总结。
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

请确保设计合理、平衡，能够带来有趣的游戏体验。`,ge=`根据之前的对话和挑战设计，生成一个符合规范的挑战卡 JSON。

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

确保 JSON 格式正确，条件表达式语法正确。`;function xe(){const a=se(),o=A(),r=m.useRef(!1),f=P(t),w=m.useCallback(async l=>{if(!(r.current||!t.currentSession))try{r.current=!0,t.setLoading(!0),t.addUserMessage(l);const d=t.currentSession.modeState.currentUIState;(d==="idle"||d==="interview_waiting")&&t.setUIState("interview_running");const c=t.getMessages(),p=[{id:C(),role:"system",content:pe},...c.map(g=>({id:g.id,role:g.role,content:g.content}))];let i="";t.clearStreamingContent(),await a.callLLMStream(p,(g,y)=>{i=y,t.setStreamingContent(y)});const n=i.includes("[INFO_COMPLETE]"),h=i.replace("[INFO_COMPLETE]","").trim();t.addAssistantMessage(h),t.clearStreamingContent(),n?t.setUIState("description_confirming"):t.setUIState("interview_waiting")}catch(d){console.error("Chat Create Challenge Error:",d),b.error("LLM 调用失败，请检查配置",{duration:5e3,action:{label:"前往配置",onClick:()=>o({to:"/config/llm"})}}),t.setUIState("interview_waiting")}finally{r.current=!1,t.setLoading(!1)}},[a,o]),N=m.useCallback(async()=>{if(!(r.current||!t.currentSession))try{r.current=!0,t.setLoading(!0),t.setUIState("description_generating");const l=t.getMessages(),d=[{id:C(),role:"system",content:he},...l.map(p=>({id:p.id,role:p.role,content:p.content})),{id:C(),role:"user",content:"请根据以上对话内容，生成挑战设计总结。"}];let c="";t.clearStreamingContent(),await a.callLLMStream(d,(p,i)=>{c=i,t.setStreamingContent(i)}),t.setGeneratedDescription(c),t.addAssistantMessage(c,"description_summary"),t.clearStreamingContent(),t.setUIState("description_confirming")}catch(l){console.error("Generate Description Error:",l),b.error("生成设计总结失败"),t.setUIState("interview_waiting")}finally{r.current=!1,t.setLoading(!1)}},[a]),j=m.useCallback(async()=>{if(!(r.current||!t.currentSession))try{r.current=!0,t.setLoading(!0),t.setUIState("json_generating");const l=t.getMessages(),d=t.currentSession.modeState.generatedDescription,c=[{id:C(),role:"system",content:ge},...l.map(i=>({id:i.id,role:i.role,content:i.content}))];d&&c.push({id:C(),role:"assistant",content:`挑战设计总结：
${d}`}),c.push({id:C(),role:"user",content:"请根据以上信息，生成挑战卡 JSON。只输出 JSON，不要有其他内容。"});let p="";await a.callLLMStream(c,(i,n)=>{p=n,t.setStreamingContent(n)});try{let i=p;const n=p.match(/```(?:json)?\s*([\s\S]*?)```/);n&&(i=n[1].trim());const h=JSON.parse(i),g=Date.now(),y=z({id:`chal-${g}`,name:h.name||"未命名挑战",description:h.description||"",characterId:h.characterId||"",roleTaskPrompt:h.roleTaskPrompt||"",userGuidance:h.userGuidance||"",variables:h.variables||{},goals:h.goals||[],failureChecks:h.failureChecks||[],tags:h.tags||[],createdAt:g,updatedAt:g},{now:g,idFactory:()=>`chal-${g}`});t.setGeneratedJson(y),t.clearStreamingContent(),t.setUIState("json_editing"),b.success("挑战卡生成成功！")}catch(i){console.error("JSON Parse Error:",i),b.error(F(i)),t.setUIState("description_confirming")}}catch(l){console.error("Generate JSON Error:",l),b.error("生成挑战卡失败"),t.setUIState("description_confirming")}finally{r.current=!1,t.setLoading(!1)}},[a]),u=m.useCallback(()=>{t.setUIState("json_confirmed")},[]),v=m.useCallback(async()=>{await j()},[j]);return{store:f,sendMessage:w,generateDescription:N,generateJson:j,confirmJson:u,regenerateJson:v,isLoading:f.isLoading,streamingContent:f.streamingContent}}function fe(){ae("challenge-card");const a=A(),o=P(t),{sendMessage:r,generateDescription:f,generateJson:w,confirmJson:N,regenerateJson:j,isLoading:u,streamingContent:v}=xe(),[l,d]=m.useState("");m.useEffect(()=>(t.currentSession||t.startNewSession(),()=>{}),[]);const c=o.currentSession?.modeState.currentUIState??"idle",p=le[c],i=o.currentSession?.modeState.messages??[],n=o.currentSession?.modeState.generatedJson,h=m.useCallback(async()=>{if(!l.trim()||u)return;const s=l.trim();d(""),await r(s)},[l,u,r]),g=m.useCallback(s=>{s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),h())},[h]),y=m.useCallback(()=>{if(!n)return;const s=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),S=URL.createObjectURL(s),E=document.createElement("a");E.href=S,E.download=`${n.name||"challenge"}.json`,E.click(),URL.revokeObjectURL(S),b.success("挑战卡已导出")},[n]),B=m.useCallback(async()=>{if(n)try{const s=z(JSON.parse(JSON.stringify(n)));await Q.challenges.add(s),b.success(`挑战 ${s.name} 已添加到广场`),t.setUIState("completed"),a({to:"/plaza/challenges"})}catch(s){console.error("Add to plaza error:",s),b.error(F(s))}},[n,a]),$=m.useCallback(()=>{t.endSession(),a({to:"/create"})},[a]),V=m.useCallback(()=>{t.resetSession()},[]);return e.jsxs("div",{className:"flex flex-col h-full max-h-[calc(100vh-4rem)]",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(x,{type:"button",variant:"ghost",size:"icon",onClick:$,children:e.jsx(ne,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-semibold",children:"聊天式创建挑战"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"通过对话引导创建挑战卡"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(M,{variant:"outline",children:p.label}),i.length>0&&e.jsx(x,{type:"button",variant:"outline",size:"sm",onClick:V,children:"重新开始"})]})]}),e.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[e.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[i.length===0&&!v&&e.jsxs("div",{className:"text-center text-muted-foreground py-12",children:[e.jsx(O,{className:"w-12 h-12 mx-auto mb-4 opacity-50"}),e.jsx("p",{children:"开始描述你想创建的挑战吧！"}),e.jsx("p",{className:"text-sm mt-2",children:"例如：我想创建一个讨价还价的挑战..."})]}),i.map(s=>e.jsxs("div",{className:G("max-w-[80%] rounded-lg p-3",s.role==="user"?"ml-auto bg-primary text-primary-foreground":"bg-muted"),children:[e.jsx("div",{className:"whitespace-pre-wrap text-sm",children:s.content}),s.messageType==="description_summary"&&e.jsx(M,{variant:"secondary",className:"mt-2",children:"挑战设计总结"})]},s.id)),v&&e.jsxs("div",{className:"max-w-[80%] rounded-lg p-3 bg-muted",children:[e.jsx("div",{className:"whitespace-pre-wrap text-sm",children:v}),e.jsx("span",{className:"inline-block w-2 h-4 bg-foreground/50 animate-pulse ml-1"})]})]}),e.jsxs("div",{className:"p-4 border-t space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[c==="description_confirming"&&e.jsxs(e.Fragment,{children:[e.jsxs(x,{type:"button",size:"sm",onClick:w,disabled:u,children:[e.jsx(L,{className:"w-4 h-4 mr-1"}),"确认并生成挑战卡"]}),e.jsxs(x,{type:"button",size:"sm",variant:"outline",onClick:f,disabled:u,children:[e.jsx(U,{className:"w-4 h-4 mr-1"}),"重新生成设计"]})]}),(c==="interview_waiting"||c==="idle")&&i.length>2&&e.jsxs(x,{type:"button",size:"sm",variant:"secondary",onClick:w,disabled:u,children:[e.jsx(O,{className:"w-4 h-4 mr-1"}),"立即生成挑战卡"]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(R,{value:l,onChange:s=>d(s.target.value),onKeyDown:g,placeholder:p.placeholder,disabled:!p.inputEnabled||u,className:"min-h-[60px] max-h-[120px] resize-none"}),e.jsx(x,{type:"button",size:"icon",onClick:h,disabled:!p.inputEnabled||u||!l.trim(),children:e.jsx(re,{className:"w-4 h-4"})})]})]})]}),(c==="json_editing"||c==="json_confirmed"||c==="completed")&&n&&e.jsxs("div",{className:"w-96 border-l overflow-y-auto p-4 space-y-4",children:[e.jsxs(Y,{children:[e.jsx(H,{className:"pb-2",children:e.jsxs(q,{className:"text-base flex items-center justify-between",children:["挑战卡预览",e.jsx("div",{className:"flex gap-1",children:e.jsx(x,{type:"button",size:"icon",variant:"ghost",onClick:j,disabled:u,title:"重新生成",children:e.jsx(U,{className:"w-4 h-4"})})})]})}),e.jsxs(W,{className:"space-y-3",children:[e.jsx(k,{label:"名称",value:n.name,onChange:s=>t.updateGeneratedJsonField("name",s)}),e.jsx(k,{label:"描述",value:n.description,multiline:!0,onChange:s=>t.updateGeneratedJsonField("description",s)}),e.jsx(k,{label:"角色行为指导",value:n.roleTaskPrompt,multiline:!0,onChange:s=>t.updateGeneratedJsonField("roleTaskPrompt",s)}),e.jsx(k,{label:"玩家引导",value:n.userGuidance,multiline:!0,onChange:s=>t.updateGeneratedJsonField("userGuidance",s)}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"变量"}),e.jsx("div",{className:"mt-1 space-y-1",children:Object.entries(n.variables||{}).map(([s,S])=>e.jsxs("div",{className:"text-xs bg-muted rounded p-2",children:[e.jsx("span",{className:"font-medium",children:s}),e.jsxs("span",{className:"text-muted-foreground ml-2",children:["初始值:"," ",String(S.initial??0)]})]},s))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"目标"}),e.jsx("div",{className:"mt-1 space-y-1",children:(n.goals||[]).map((s,S)=>e.jsx("div",{className:"text-xs bg-muted rounded p-2",children:e.jsx("span",{className:"font-medium",children:s.description})},S))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"失败条件"}),e.jsx("div",{className:"mt-1 space-y-1",children:(n.failureChecks||[]).map((s,S)=>e.jsx("div",{className:"text-xs bg-muted rounded p-2",children:e.jsx("span",{className:"font-medium",children:s.description})},S))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"标签"}),e.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:n.tags?.map((s,S)=>e.jsx(M,{variant:"secondary",className:"text-xs",children:s},S))})]})]})]}),c!=="completed"&&e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(x,{type:"button",onClick:B,className:"w-full",children:[e.jsx(ie,{className:"w-4 h-4 mr-2"}),"添加到广场"]}),e.jsxs(x,{type:"button",variant:"outline",onClick:y,className:"w-full",children:[e.jsx(oe,{className:"w-4 h-4 mr-2"}),"导出为文件"]}),c==="json_editing"&&e.jsxs(x,{type:"button",variant:"secondary",onClick:N,className:"w-full",children:[e.jsx(L,{className:"w-4 h-4 mr-2"}),"确认完成编辑"]})]}),c==="completed"&&e.jsxs("div",{className:"text-center text-muted-foreground py-4",children:[e.jsx(L,{className:"w-8 h-8 mx-auto mb-2 text-green-500"}),e.jsx("p",{children:"挑战卡已添加到广场！"})]})]})]})]})}function k({label:a,value:o,multiline:r=!1,onChange:f}){const[w,N]=m.useState(!1),[j,u]=m.useState(o),v=()=>{f(j),N(!1)},l=()=>{u(o),N(!1)};return w?e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:a}),r?e.jsx(R,{value:j,onChange:d=>u(d.target.value),className:"text-sm min-h-[60px]",autoFocus:!0}):e.jsx("input",{type:"text",value:j,onChange:d=>u(d.target.value),className:"w-full text-sm border rounded px-2 py-1 bg-background",autoFocus:!0}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx(x,{type:"button",size:"sm",variant:"ghost",onClick:v,children:"保存"}),e.jsx(x,{type:"button",size:"sm",variant:"ghost",onClick:l,children:"取消"})]})]}):e.jsxs("div",{className:"cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors",onClick:()=>{u(o),N(!0)},children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:a}),e.jsx("p",{className:G("text-sm",r?"whitespace-pre-wrap line-clamp-3":"truncate"),children:o||e.jsx("span",{className:"text-muted-foreground italic",children:"点击编辑"})})]})}function Fe(){return e.jsx(fe,{})}export{Fe as component};
