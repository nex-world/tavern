import{D as V,r as m,u as P,t as C,j as e}from"./react-DE62XWsa.js";import{f as A}from"./@tanstack-m-1uuL6k.js";import{B as g}from"./button-B05uqCHL.js";import{T as R}from"./textarea-Dy3g7GWU.js";import{C as $,a as Y,b as K,d as H}from"./card-DOswZeAM.js";import{B as M}from"./badge-BDEsDlsM.js";import{c as G}from"./shadcn-utils-Cnr6N47i.js";import{n as b}from"./id-BY9c7rfI.js";import{f as q,m as W}from"./db-master-Dr_kUyje.js";import{_ as L,o as I,n as D,s as _,c as Q,b as X,l as Z}from"./zod-BOL00Oce.js";import{u as ee}from"./useLLM-BY9r14Yg.js";import{u as te}from"./analytics-BIdYc2ao.js";import{A as se,a4 as O,c as J,R as U,S as ne,Y as ae,a3 as re}from"./icons-CjLrWvzf.js";import"./vendor-BJF3NJg5.js";import"./formatting-Bt4POpGk.js";import"./@radix-ui-BQCqNqg0.js";import"./immer-BCQU3qJI.js";import"./dexie-DDTiHGxC.js";import"./components-and-styling-lnR2ABT4.js";import"./@tailwind-CPcsbTWB.js";import"./global-llm-config.store-C3SCKavw.js";import"./es-toolkit-9bjl2JfA.js";import"./nex-tavern-uuid-DXLIR15-.js";import"./index-C01xXbOW.js";const ie=L(["idle","interview_running","interview_waiting","description_generating","description_confirming","json_generating","json_editing","json_confirmed","completed"]),oe={idle:{label:"开始",placeholder:"描述一下你想创建的挑战吧...",inputEnabled:!0},interview_running:{label:"助理回复中",placeholder:"助理正在思考...",inputEnabled:!1},interview_waiting:{label:"继续描述",placeholder:"继续描述你的挑战，或回答助理的问题...",inputEnabled:!0},description_generating:{label:"生成设计中",placeholder:"正在整理挑战设计...",inputEnabled:!1},description_confirming:{label:"确认设计",placeholder:"确认设计无误，或告诉我需要修改的地方...",inputEnabled:!0},json_generating:{label:"生成挑战卡中",placeholder:"正在生成挑战卡数据...",inputEnabled:!1},json_editing:{label:"编辑挑战卡",placeholder:"告诉我需要修改的地方，或直接在右侧编辑...",inputEnabled:!0},json_confirmed:{label:"挑战卡已就绪",placeholder:"挑战卡已生成，可以导出或添加到广场",inputEnabled:!1},completed:{label:"完成",placeholder:"挑战卡创建完成！",inputEnabled:!1}},ce=I({id:_().describe("消息ID"),role:L(["user","assistant","system"]).describe("消息角色"),content:_().describe("消息内容"),timestamp:D().describe("时间戳"),messageType:L(["chat","description_summary","json_preview"]).optional().describe("消息类型")}),le=I({presetHint:_().optional().describe("预设的挑战类型提示"),preselectedCharacterId:_().optional().describe("预选的角色 ID")}),de=I({currentUIState:ie.describe("当前 UI 状态"),messages:X(ce).describe("对话历史"),generatedDescription:_().optional().describe("生成的设计总结"),generatedJson:q.optional().describe("生成的挑战卡 JSON"),descriptionConfirmed:Q().default(!1).describe("用户是否已确认设计")});I({id:_().describe("会话ID"),mode:Z("chat-create-challenge").describe("模式标识"),modeConfig:le.describe("模式配置"),modeState:de.describe("模式状态"),createdAt:D().describe("创建时间"),updatedAt:D().describe("更新时间")});function T(){return{currentUIState:"idle",messages:[],descriptionConfirmed:!1}}const t=V({currentSession:null,isLoading:!1,streamingContent:"",startNewSession(n,o){const r=Date.now(),x={id:`chat-create-chal-${r}`,mode:"chat-create-challenge",modeConfig:{presetHint:n,preselectedCharacterId:o},modeState:T(),createdAt:r,updatedAt:r};return this.currentSession=x,this.isLoading=!1,this.streamingContent="",x},getState(){return this.currentSession?.modeState??null},getMessages(){return this.currentSession?.modeState.messages??[]},addUserMessage(n){const o={id:b(),role:"user",content:n,timestamp:Date.now(),messageType:"chat"};return this.currentSession&&(this.currentSession.modeState.messages.push(o),this.currentSession.updatedAt=Date.now()),o},addAssistantMessage(n,o="chat"){const r={id:b(),role:"assistant",content:n,timestamp:Date.now(),messageType:o};return this.currentSession&&(this.currentSession.modeState.messages.push(r),this.currentSession.updatedAt=Date.now()),r},setUIState(n){this.currentSession&&(this.currentSession.modeState.currentUIState=n,this.currentSession.updatedAt=Date.now())},setGeneratedDescription(n){this.currentSession&&(this.currentSession.modeState.generatedDescription=n,this.currentSession.updatedAt=Date.now())},setGeneratedJson(n){this.currentSession&&(this.currentSession.modeState.generatedJson=n,this.currentSession.updatedAt=Date.now())},updateGeneratedJsonField(n,o){this.currentSession?.modeState.generatedJson&&(this.currentSession.modeState.generatedJson[n]=o,this.currentSession.updatedAt=Date.now())},setDescriptionConfirmed(n){this.currentSession&&(this.currentSession.modeState.descriptionConfirmed=n,this.currentSession.updatedAt=Date.now())},setLoading(n){this.isLoading=n},setStreamingContent(n){this.streamingContent=n},clearStreamingContent(){this.streamingContent=""},endSession(){this.currentSession=null,this.isLoading=!1,this.streamingContent=""},resetSession(){this.currentSession&&(this.currentSession.modeState=T(),this.currentSession.updatedAt=Date.now()),this.isLoading=!1,this.streamingContent=""}}),me=`你是一位专业的挑战设计顾问。你的任务是通过对话引导用户创建一个挑战卡。

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
当你认为收集的信息足够创建一个完整的挑战时，在回复的末尾添加 [INFO_COMPLETE] 标记。`,ue=`根据之前的对话内容，生成一份完整的挑战设计总结。
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

请确保设计合理、平衡，能够带来有趣的游戏体验。`,pe=`根据之前的对话和挑战设计，生成一个符合规范的挑战卡 JSON。

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

确保 JSON 格式正确，条件表达式语法正确。`;function he(){const n=ee(),o=A(),r=m.useRef(!1),x=P(t),w=m.useCallback(async l=>{if(!(r.current||!t.currentSession))try{r.current=!0,t.setLoading(!0),t.addUserMessage(l);const d=t.currentSession.modeState.currentUIState;(d==="idle"||d==="interview_waiting")&&t.setUIState("interview_running");const c=t.getMessages(),p=[{id:b(),role:"system",content:me},...c.map(f=>({id:f.id,role:f.role,content:f.content}))];let i="";t.clearStreamingContent(),await n.callLLMStream(p,(f,y)=>{i=y,t.setStreamingContent(y)});const a=i.includes("[INFO_COMPLETE]"),h=i.replace("[INFO_COMPLETE]","").trim();t.addAssistantMessage(h),t.clearStreamingContent(),a?t.setUIState("description_confirming"):t.setUIState("interview_waiting")}catch(d){console.error("Chat Create Challenge Error:",d),C.error("LLM 调用失败，请检查配置",{duration:5e3,action:{label:"前往配置",onClick:()=>o({to:"/config/llm"})}}),t.setUIState("interview_waiting")}finally{r.current=!1,t.setLoading(!1)}},[n,o]),N=m.useCallback(async()=>{if(!(r.current||!t.currentSession))try{r.current=!0,t.setLoading(!0),t.setUIState("description_generating");const l=t.getMessages(),d=[{id:b(),role:"system",content:ue},...l.map(p=>({id:p.id,role:p.role,content:p.content})),{id:b(),role:"user",content:"请根据以上对话内容，生成挑战设计总结。"}];let c="";t.clearStreamingContent(),await n.callLLMStream(d,(p,i)=>{c=i,t.setStreamingContent(i)}),t.setGeneratedDescription(c),t.addAssistantMessage(c,"description_summary"),t.clearStreamingContent(),t.setUIState("description_confirming")}catch(l){console.error("Generate Description Error:",l),C.error("生成设计总结失败"),t.setUIState("interview_waiting")}finally{r.current=!1,t.setLoading(!1)}},[n]),j=m.useCallback(async()=>{if(!(r.current||!t.currentSession))try{r.current=!0,t.setLoading(!0),t.setUIState("json_generating");const l=t.getMessages(),d=t.currentSession.modeState.generatedDescription,c=[{id:b(),role:"system",content:pe},...l.map(i=>({id:i.id,role:i.role,content:i.content}))];d&&c.push({id:b(),role:"assistant",content:`挑战设计总结：
${d}`}),c.push({id:b(),role:"user",content:"请根据以上信息，生成挑战卡 JSON。只输出 JSON，不要有其他内容。"});let p="";await n.callLLMStream(c,(i,a)=>{p=a,t.setStreamingContent(a)});try{let i=p;const a=p.match(/```(?:json)?\s*([\s\S]*?)```/);a&&(i=a[1].trim());const h=JSON.parse(i),f=Date.now(),y={id:`chal-${f}`,name:h.name||"未命名挑战",description:h.description||"",characterId:h.characterId||"",roleTaskPrompt:h.roleTaskPrompt||"",userGuidance:h.userGuidance||"",variables:h.variables||{},goals:h.goals||[],failureChecks:h.failureChecks||[],tags:h.tags||[],createdAt:f,updatedAt:f};t.setGeneratedJson(y),t.clearStreamingContent(),t.setUIState("json_editing"),C.success("挑战卡生成成功！")}catch(i){console.error("JSON Parse Error:",i),C.error("JSON 解析失败，请重试"),t.setUIState("description_confirming")}}catch(l){console.error("Generate JSON Error:",l),C.error("生成挑战卡失败"),t.setUIState("description_confirming")}finally{r.current=!1,t.setLoading(!1)}},[n]),u=m.useCallback(()=>{t.setUIState("json_confirmed")},[]),v=m.useCallback(async()=>{await j()},[j]);return{store:x,sendMessage:w,generateDescription:N,generateJson:j,confirmJson:u,regenerateJson:v,isLoading:x.isLoading,streamingContent:x.streamingContent}}function ge(){te("challenge-card");const n=A(),o=P(t),{sendMessage:r,generateDescription:x,generateJson:w,confirmJson:N,regenerateJson:j,isLoading:u,streamingContent:v}=he(),[l,d]=m.useState("");m.useEffect(()=>(t.currentSession||t.startNewSession(),()=>{}),[]);const c=o.currentSession?.modeState.currentUIState??"idle",p=oe[c],i=o.currentSession?.modeState.messages??[],a=o.currentSession?.modeState.generatedJson,h=m.useCallback(async()=>{if(!l.trim()||u)return;const s=l.trim();d(""),await r(s)},[l,u,r]),f=m.useCallback(s=>{s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),h())},[h]),y=m.useCallback(()=>{if(!a)return;const s=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),S=URL.createObjectURL(s),E=document.createElement("a");E.href=S,E.download=`${a.name||"challenge"}.json`,E.click(),URL.revokeObjectURL(S),C.success("挑战卡已导出")},[a]),z=m.useCallback(async()=>{if(a)try{const s=JSON.parse(JSON.stringify(a));await W.challenges.add(s),C.success(`挑战 ${s.name} 已添加到广场`),t.setUIState("completed"),n({to:"/plaza/challenges"})}catch(s){console.error("Add to plaza error:",s),C.error("添加失败")}},[a,n]),F=m.useCallback(()=>{t.endSession(),n({to:"/create"})},[n]),B=m.useCallback(()=>{t.resetSession()},[]);return e.jsxs("div",{className:"flex flex-col h-full max-h-[calc(100vh-4rem)]",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(g,{type:"button",variant:"ghost",size:"icon",onClick:F,children:e.jsx(se,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-semibold",children:"聊天式创建挑战"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"通过对话引导创建挑战卡"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(M,{variant:"outline",children:p.label}),i.length>0&&e.jsx(g,{type:"button",variant:"outline",size:"sm",onClick:B,children:"重新开始"})]})]}),e.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[e.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[i.length===0&&!v&&e.jsxs("div",{className:"text-center text-muted-foreground py-12",children:[e.jsx(O,{className:"w-12 h-12 mx-auto mb-4 opacity-50"}),e.jsx("p",{children:"开始描述你想创建的挑战吧！"}),e.jsx("p",{className:"text-sm mt-2",children:"例如：我想创建一个讨价还价的挑战..."})]}),i.map(s=>e.jsxs("div",{className:G("max-w-[80%] rounded-lg p-3",s.role==="user"?"ml-auto bg-primary text-primary-foreground":"bg-muted"),children:[e.jsx("div",{className:"whitespace-pre-wrap text-sm",children:s.content}),s.messageType==="description_summary"&&e.jsx(M,{variant:"secondary",className:"mt-2",children:"挑战设计总结"})]},s.id)),v&&e.jsxs("div",{className:"max-w-[80%] rounded-lg p-3 bg-muted",children:[e.jsx("div",{className:"whitespace-pre-wrap text-sm",children:v}),e.jsx("span",{className:"inline-block w-2 h-4 bg-foreground/50 animate-pulse ml-1"})]})]}),e.jsxs("div",{className:"p-4 border-t space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[c==="description_confirming"&&e.jsxs(e.Fragment,{children:[e.jsxs(g,{type:"button",size:"sm",onClick:w,disabled:u,children:[e.jsx(J,{className:"w-4 h-4 mr-1"}),"确认并生成挑战卡"]}),e.jsxs(g,{type:"button",size:"sm",variant:"outline",onClick:x,disabled:u,children:[e.jsx(U,{className:"w-4 h-4 mr-1"}),"重新生成设计"]})]}),(c==="interview_waiting"||c==="idle")&&i.length>2&&e.jsxs(g,{type:"button",size:"sm",variant:"secondary",onClick:w,disabled:u,children:[e.jsx(O,{className:"w-4 h-4 mr-1"}),"立即生成挑战卡"]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(R,{value:l,onChange:s=>d(s.target.value),onKeyDown:f,placeholder:p.placeholder,disabled:!p.inputEnabled||u,className:"min-h-[60px] max-h-[120px] resize-none"}),e.jsx(g,{type:"button",size:"icon",onClick:h,disabled:!p.inputEnabled||u||!l.trim(),children:e.jsx(ne,{className:"w-4 h-4"})})]})]})]}),(c==="json_editing"||c==="json_confirmed"||c==="completed")&&a&&e.jsxs("div",{className:"w-96 border-l overflow-y-auto p-4 space-y-4",children:[e.jsxs($,{children:[e.jsx(Y,{className:"pb-2",children:e.jsxs(K,{className:"text-base flex items-center justify-between",children:["挑战卡预览",e.jsx("div",{className:"flex gap-1",children:e.jsx(g,{type:"button",size:"icon",variant:"ghost",onClick:j,disabled:u,title:"重新生成",children:e.jsx(U,{className:"w-4 h-4"})})})]})}),e.jsxs(H,{className:"space-y-3",children:[e.jsx(k,{label:"名称",value:a.name,onChange:s=>t.updateGeneratedJsonField("name",s)}),e.jsx(k,{label:"描述",value:a.description,multiline:!0,onChange:s=>t.updateGeneratedJsonField("description",s)}),e.jsx(k,{label:"角色行为指导",value:a.roleTaskPrompt,multiline:!0,onChange:s=>t.updateGeneratedJsonField("roleTaskPrompt",s)}),e.jsx(k,{label:"玩家引导",value:a.userGuidance,multiline:!0,onChange:s=>t.updateGeneratedJsonField("userGuidance",s)}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"变量"}),e.jsx("div",{className:"mt-1 space-y-1",children:Object.entries(a.variables||{}).map(([s,S])=>e.jsxs("div",{className:"text-xs bg-muted rounded p-2",children:[e.jsx("span",{className:"font-medium",children:s}),e.jsxs("span",{className:"text-muted-foreground ml-2",children:["初始值:"," ",String(S.initial??0)]})]},s))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"目标"}),e.jsx("div",{className:"mt-1 space-y-1",children:(a.goals||[]).map((s,S)=>e.jsx("div",{className:"text-xs bg-muted rounded p-2",children:e.jsx("span",{className:"font-medium",children:s.description})},S))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"失败条件"}),e.jsx("div",{className:"mt-1 space-y-1",children:(a.failureChecks||[]).map((s,S)=>e.jsx("div",{className:"text-xs bg-muted rounded p-2",children:e.jsx("span",{className:"font-medium",children:s.description})},S))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"标签"}),e.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:a.tags?.map((s,S)=>e.jsx(M,{variant:"secondary",className:"text-xs",children:s},S))})]})]})]}),c!=="completed"&&e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(g,{type:"button",onClick:z,className:"w-full",children:[e.jsx(ae,{className:"w-4 h-4 mr-2"}),"添加到广场"]}),e.jsxs(g,{type:"button",variant:"outline",onClick:y,className:"w-full",children:[e.jsx(re,{className:"w-4 h-4 mr-2"}),"导出为文件"]}),c==="json_editing"&&e.jsxs(g,{type:"button",variant:"secondary",onClick:N,className:"w-full",children:[e.jsx(J,{className:"w-4 h-4 mr-2"}),"确认完成编辑"]})]}),c==="completed"&&e.jsxs("div",{className:"text-center text-muted-foreground py-4",children:[e.jsx(J,{className:"w-8 h-8 mx-auto mb-2 text-green-500"}),e.jsx("p",{children:"挑战卡已添加到广场！"})]})]})]})]})}function k({label:n,value:o,multiline:r=!1,onChange:x}){const[w,N]=m.useState(!1),[j,u]=m.useState(o),v=()=>{x(j),N(!1)},l=()=>{u(o),N(!1)};return w?e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:n}),r?e.jsx(R,{value:j,onChange:d=>u(d.target.value),className:"text-sm min-h-[60px]",autoFocus:!0}):e.jsx("input",{type:"text",value:j,onChange:d=>u(d.target.value),className:"w-full text-sm border rounded px-2 py-1 bg-background",autoFocus:!0}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx(g,{type:"button",size:"sm",variant:"ghost",onClick:v,children:"保存"}),e.jsx(g,{type:"button",size:"sm",variant:"ghost",onClick:l,children:"取消"})]})]}):e.jsxs("div",{className:"cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors",onClick:()=>{u(o),N(!0)},children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:n}),e.jsx("p",{className:G("text-sm",r?"whitespace-pre-wrap line-clamp-3":"truncate"),children:o||e.jsx("span",{className:"text-muted-foreground italic",children:"点击编辑"})})]})}function Ge(){return e.jsx(ge,{})}export{Ge as component};
