import{r as u,t as b,i as Y,j as e}from"./index-D80q0Zqc.js";import{u as q,C as H,M,S as W}from"./bubble-CIviRuVH.js";import{C as Q,a as X}from"./ChatCreationLayout-1qYlue2s.js";import{C as O}from"./conversation-message-DlPlPJP1.js";import{I as Z,d as ee,b as te}from"./input-group-CUkYFSLi.js";import{I as se}from"./input-Dw2VNBxv.js";import{E as ne,d as A}from"./empty-DyHfeA58.js";import{B as f}from"./button-DrwlSH1G.js";import{T as ae}from"./textarea-o3ZcoQKU.js";import{B as L}from"./badge-B6UFaW5V.js";import{c as re}from"./shadcn-utils-BgoMflOe.js";import{n as j}from"./index.browser-BY9c7rfI.js";import{k as ie,n as G,f as F,m as oe}from"./db-master-acV7bE9x.js";import{ax as J,o as I,au as U,s as y,az as le,ay as ce,aA as de,p as me}from"./dexie-yDjhXN4G.js";import{o as ue}from"./model-config-dialog.store-BSa_6Pph.js";import{u as pe}from"./useLLM-DMeFKI5J.js";import{u as z}from"./react-BN2Fvmyz.js";import{u as he}from"./analytics-Dnl0e8Xj.js";import{S as T}from"./sparkles-cg2MtRe4.js";import{C as D}from"./check-BqKm9WgT.js";import{R as P}from"./refresh-cw-DIDow-ar.js";import{S as ge}from"./send-BfkeVvdm.js";import{P as fe}from"./plus-CgoFVaqw.js";import{F as xe}from"./file-output-DxRsVkqv.js";import{A as Se}from"./arrow-left-ETLCj55h.js";import"./alert-DOcCaOg2.js";import"./dialogue-text-BJgjGD3F.js";import"./collapsible-fLNaixNB.js";import"./index-QoArWnRM.js";import"./index-CsZbP9t6.js";import"./index-8xK9vAdc.js";import"./index-Bv2Cv1BA.js";import"./dnd-stream-content-CmfnTBFV.js";import"./chevron-right-RetLV-ma.js";import"./reading-settings.store-B1EWuqaS.js";import"./generation-status-ln4CUl50.js";import"./spinner-Bv6s-LX4.js";import"./nex-tavern-uuid-BACB_JL0.js";const Ce=J(["idle","interview_running","interview_waiting","description_generating","description_confirming","json_generating","json_editing","json_confirmed","completed"]),je={idle:{label:"开始",placeholder:"描述一下你想创建的挑战吧...",inputEnabled:!0},interview_running:{label:"助理回复中",placeholder:"助理正在思考...",inputEnabled:!1},interview_waiting:{label:"继续描述",placeholder:"继续描述你的挑战，或回答助理的问题...",inputEnabled:!0},description_generating:{label:"生成设计中",placeholder:"正在整理挑战设计...",inputEnabled:!1},description_confirming:{label:"确认设计",placeholder:"确认设计无误，或告诉我需要修改的地方...",inputEnabled:!0},json_generating:{label:"生成挑战卡中",placeholder:"正在生成挑战卡数据...",inputEnabled:!1},json_editing:{label:"编辑挑战卡",placeholder:"告诉我需要修改的地方，或直接在右侧编辑...",inputEnabled:!0},json_confirmed:{label:"挑战卡已就绪",placeholder:"挑战卡已生成，可以导出或添加到广场",inputEnabled:!1},completed:{label:"完成",placeholder:"挑战卡创建完成！",inputEnabled:!1}},be=I({id:y().describe("消息ID"),role:J(["user","assistant","system"]).describe("消息角色"),content:y().describe("消息内容"),timestamp:U().describe("时间戳"),messageType:J(["chat","description_summary","json_preview"]).optional().describe("消息类型")}),ve=I({presetHint:y().optional().describe("预设的挑战类型提示"),preselectedCharacterId:y().optional().describe("预选的角色 ID")}),Ne=I({currentUIState:Ce.describe("当前 UI 状态"),messages:ce(be).describe("对话历史"),generatedDescription:y().optional().describe("生成的设计总结"),generatedJson:ie.optional().describe("生成的挑战卡 JSON"),descriptionConfirmed:le().default(!1).describe("用户是否已确认设计")});I({id:y().describe("会话ID"),mode:de("chat-create-challenge").describe("模式标识"),modeConfig:ve.describe("模式配置"),modeState:Ne.describe("模式状态"),createdAt:U().describe("创建时间"),updatedAt:U().describe("更新时间")});function R(){return{currentUIState:"idle",messages:[],descriptionConfirmed:!1}}const t=me({currentSession:null,isLoading:!1,streamingContent:"",startNewSession(n,a){const c=Date.now(),C={id:`chat-create-chal-${c}`,mode:"chat-create-challenge",modeConfig:{presetHint:n,preselectedCharacterId:a},modeState:R(),createdAt:c,updatedAt:c};return this.currentSession=C,this.isLoading=!1,this.streamingContent="",C},getState(){return this.currentSession?.modeState??null},getMessages(){return this.currentSession?.modeState.messages??[]},addUserMessage(n){const a={id:j(),role:"user",content:n,timestamp:Date.now(),messageType:"chat"};return this.currentSession&&(this.currentSession.modeState.messages.push(a),this.currentSession.updatedAt=Date.now()),a},addAssistantMessage(n,a="chat"){const c={id:j(),role:"assistant",content:n,timestamp:Date.now(),messageType:a};return this.currentSession&&(this.currentSession.modeState.messages.push(c),this.currentSession.updatedAt=Date.now()),c},setUIState(n){this.currentSession&&(this.currentSession.modeState.currentUIState=n,this.currentSession.updatedAt=Date.now())},setGeneratedDescription(n){this.currentSession&&(this.currentSession.modeState.generatedDescription=n,this.currentSession.updatedAt=Date.now())},setGeneratedJson(n){this.currentSession&&(this.currentSession.modeState.generatedJson=n,this.currentSession.updatedAt=Date.now())},updateGeneratedJsonField(n,a){this.currentSession?.modeState.generatedJson&&(this.currentSession.modeState.generatedJson[n]=a,this.currentSession.updatedAt=Date.now())},setDescriptionConfirmed(n){this.currentSession&&(this.currentSession.modeState.descriptionConfirmed=n,this.currentSession.updatedAt=Date.now())},setLoading(n){this.isLoading=n},setStreamingContent(n){this.streamingContent=n},clearStreamingContent(){this.streamingContent=""},endSession(){this.currentSession=null,this.isLoading=!1,this.streamingContent=""},resetSession(){this.currentSession&&(this.currentSession.modeState=R(),this.currentSession.updatedAt=Date.now()),this.isLoading=!1,this.streamingContent=""}}),ye=`你是一位专业的挑战设计顾问。你的任务是通过对话引导用户创建一个挑战卡。

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
当你认为收集的信息足够创建一个完整的挑战时，在回复的末尾添加 [INFO_COMPLETE] 标记。`,we=`根据之前的对话内容，生成一份完整的挑战设计总结。
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

请确保设计合理、平衡，能够带来有趣的游戏体验。`,_e=`根据之前的对话和挑战设计，生成一个符合规范的挑战卡 JSON。

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

确保 JSON 格式正确，条件表达式语法正确。`;function ke(){const n=pe(),a=u.useRef(!1),c=z(t),C=u.useCallback(async(d,h)=>{if(!(a.current||!t.currentSession)&&["idle","interview_waiting","description_confirming","json_editing"].includes(t.currentSession.modeState.currentUIState))try{a.current=!0,t.setLoading(!0),t.addUserMessage(d),h?.();const o=t.currentSession.modeState.currentUIState;(o==="idle"||o==="interview_waiting")&&t.setUIState("interview_running");const g=t.getMessages(),r=[{id:j(),role:"system",content:ye},...g.map(x=>({id:x.id,role:x.role,content:x.content}))];let m="";t.clearStreamingContent(),await n.callLLMStream(r,(x,w)=>{m=w,t.setStreamingContent(w)});const l=m.includes("[INFO_COMPLETE]"),i=m.replace("[INFO_COMPLETE]","").trim();t.addAssistantMessage(i),t.clearStreamingContent(),l?t.setUIState("description_confirming"):t.setUIState("interview_waiting")}catch(o){throw console.error("Chat Create Challenge Error:",o),b.error("LLM 调用失败，请检查配置",{duration:5e3,action:{label:"前往配置",onClick:ue}}),t.setUIState("interview_waiting"),o}finally{a.current=!1,t.setLoading(!1)}},[n]),N=u.useCallback(async()=>{if(!(a.current||!t.currentSession))try{a.current=!0,t.setLoading(!0),t.setUIState("description_generating");const d=t.getMessages(),h=[{id:j(),role:"system",content:we},...d.map(g=>({id:g.id,role:g.role,content:g.content})),{id:j(),role:"user",content:"请根据以上对话内容，生成挑战设计总结。"}];let o="";t.clearStreamingContent(),await n.callLLMStream(h,(g,r)=>{o=r,t.setStreamingContent(r)}),t.setGeneratedDescription(o),t.addAssistantMessage(o,"description_summary"),t.clearStreamingContent(),t.setUIState("description_confirming")}catch(d){console.error("Generate Description Error:",d),b.error("生成设计总结失败"),t.setUIState("interview_waiting")}finally{a.current=!1,t.setLoading(!1)}},[n]),S=u.useCallback(async()=>{if(!(a.current||!t.currentSession))try{a.current=!0,t.setLoading(!0),t.setUIState("json_generating");const d=t.getMessages(),h=t.currentSession.modeState.generatedDescription,o=[{id:j(),role:"system",content:_e},...d.map(r=>({id:r.id,role:r.role,content:r.content}))];h&&o.push({id:j(),role:"assistant",content:`挑战设计总结：
${h}`}),o.push({id:j(),role:"user",content:"请根据以上信息，生成挑战卡 JSON。只输出 JSON，不要有其他内容。"});let g="";await n.callLLMStream(o,(r,m)=>{g=m,t.setStreamingContent(m)});try{let r=g;const m=g.match(/```(?:json)?\s*([\s\S]*?)```/);m&&(r=m[1].trim());const l=JSON.parse(r),i=Date.now(),x=G({id:`chal-${i}`,name:l.name||"未命名挑战",description:l.description||"",characterId:l.characterId||"",roleTaskPrompt:l.roleTaskPrompt||"",userGuidance:l.userGuidance||"",variables:l.variables||{},goals:l.goals||[],failureChecks:l.failureChecks||[],tags:l.tags||[],createdAt:i,updatedAt:i},{now:i,idFactory:()=>`chal-${i}`});t.setGeneratedJson(x),t.clearStreamingContent(),t.setUIState("json_editing"),b.success("挑战卡生成成功！")}catch(r){console.error("JSON Parse Error:",r),b.error(F(r)),t.setUIState("description_confirming")}}catch(d){console.error("Generate JSON Error:",d),b.error("生成挑战卡失败"),t.setUIState("description_confirming")}finally{a.current=!1,t.setLoading(!1)}},[n]),v=u.useCallback(()=>{t.setUIState("json_confirmed")},[]),p=u.useCallback(async()=>{await S()},[S]);return{store:c,sendMessage:C,generateDescription:N,generateJson:S,confirmJson:v,regenerateJson:p,isLoading:c.isLoading,streamingContent:c.streamingContent}}function Ie(){he("challenge-card");const n=Y(),a=z(t),{sendMessage:c,generateDescription:C,generateJson:N,confirmJson:S,regenerateJson:v,isLoading:p,streamingContent:d}=ke(),[h,o]=u.useState(""),g=q();u.useEffect(()=>(t.currentSession||t.startNewSession(),()=>{}),[]);const r=a.currentSession?.modeState.currentUIState??"idle",m=je[r],l=a.currentSession?.modeState.messages??[],i=a.currentSession?.modeState.generatedJson,x=()=>g.submit(h.trim(),m.inputEnabled&&!p,()=>o(""),s=>c(h.trim(),s)),w=u.useCallback(s=>{s.key==="Enter"&&!s.shiftKey&&!s.nativeEvent.isComposing&&s.keyCode!==229&&(s.preventDefault(),x())},[x]),B=u.useCallback(()=>{if(!i)return;const s=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),_=URL.createObjectURL(s),E=document.createElement("a");E.href=_,E.download=`${i.name||"challenge"}.json`,E.click(),URL.revokeObjectURL(_),b.success("挑战卡已导出")},[i]),$=u.useCallback(async()=>{if(i)try{const s=G(JSON.parse(JSON.stringify(i)));await oe.challenges.add(s),b.success(`挑战 ${s.name} 已添加到广场`),t.setUIState("completed"),n({to:"/plaza/challenges"})}catch(s){console.error("Add to plaza error:",s),b.error(F(s))}},[i,n]),V=u.useCallback(()=>{t.endSession(),n({to:"/create"})},[n]),K=u.useCallback(()=>{t.resetSession()},[]);return e.jsxs(Q,{header:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(f,{"aria-label":"返回",type:"button",variant:"ghost",size:"icon",onClick:V,children:e.jsx(Se,{"data-icon":"inline-start"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-semibold",children:"聊天式创建挑战"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"通过对话引导创建挑战卡"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(L,{variant:"outline",children:m.label}),l.length>0&&e.jsx(f,{type:"button",variant:"outline",size:"sm",onClick:K,children:"重新开始"})]})]}),preview:(r==="json_editing"||r==="json_confirmed"||r==="completed")&&i&&e.jsx(e.Fragment,{children:e.jsxs(X,{title:"挑战卡预览",headerAction:e.jsx(f,{type:"button",size:"icon",variant:"ghost",onClick:v,disabled:p,title:"重新生成",children:e.jsx(P,{"data-icon":"inline-start"})}),actions:e.jsxs(e.Fragment,{children:[r!=="completed"&&e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(f,{type:"button",onClick:$,className:"w-full",children:[e.jsx(fe,{"data-icon":"inline-start"}),"添加到广场"]}),e.jsxs(f,{type:"button",variant:"outline",onClick:B,className:"w-full",children:[e.jsx(xe,{"data-icon":"inline-start"}),"导出为文件"]}),r==="json_editing"&&e.jsxs(f,{type:"button",variant:"secondary",onClick:S,className:"w-full",children:[e.jsx(D,{"data-icon":"inline-start"}),"确认完成编辑"]})]}),r==="completed"&&e.jsxs("div",{className:"text-center text-muted-foreground py-4",children:[e.jsx(D,{className:"size-8 mx-auto mb-2 text-primary"}),e.jsx("p",{children:"挑战卡已添加到广场！"})]})]}),children:[e.jsx(k,{label:"名称",value:i.name,onChange:s=>t.updateGeneratedJsonField("name",s)}),e.jsx(k,{label:"描述",value:i.description,multiline:!0,onChange:s=>t.updateGeneratedJsonField("description",s)}),e.jsx(k,{label:"角色行为指导",value:i.roleTaskPrompt,multiline:!0,onChange:s=>t.updateGeneratedJsonField("roleTaskPrompt",s)}),e.jsx(k,{label:"玩家引导",value:i.userGuidance,multiline:!0,onChange:s=>t.updateGeneratedJsonField("userGuidance",s)}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"变量"}),e.jsx("div",{className:"flex flex-col mt-1 gap-1",children:Object.entries(i.variables||{}).map(([s,_])=>e.jsxs("div",{className:"text-xs bg-muted rounded p-2",children:[e.jsx("span",{className:"font-medium",children:s}),e.jsxs("span",{className:"text-muted-foreground ml-2",children:["初始值:"," ",String(_.initial??0)]})]},s))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"目标"}),e.jsx("div",{className:"flex flex-col mt-1 gap-1",children:(i.goals||[]).map(s=>e.jsx("div",{className:"text-xs bg-muted rounded p-2",children:e.jsx("span",{className:"font-medium",children:s.description})},s.key))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"失败条件"}),e.jsx("div",{className:"flex flex-col mt-1 gap-1",children:(i.failureChecks||[]).map(s=>e.jsx("div",{className:"text-xs bg-muted rounded p-2",children:e.jsx("span",{className:"font-medium",children:s.description})},s.key))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"标签"}),e.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:Array.from(new Set(i.tags||[])).map(s=>e.jsx(L,{variant:"secondary",children:s},s))})]})]})}),children:[e.jsxs(H,{children:[l.length===0&&!d&&e.jsx(M,{messageId:"creation-start",children:e.jsxs(ne,{className:"py-8",children:[e.jsx(T,{className:"size-12 mx-auto mb-4 opacity-50"}),e.jsx(A,{children:"开始描述你想创建的挑战吧！"}),e.jsx(A,{className:"text-sm mt-2",children:"例如：我想创建一个讨价还价的挑战..."})]})}),l.map(s=>e.jsx(M,{messageId:s.id,scrollAnchor:s.role==="user",children:e.jsxs(O,{name:s.role==="user"?"我":"创作助手",fromUser:s.role==="user",children:[e.jsx("div",{className:"whitespace-pre-wrap text-sm",children:s.content}),s.messageType==="description_summary"&&e.jsx(L,{variant:"secondary",className:"mt-2",children:"挑战设计总结"})]})},s.id)),d&&e.jsx(M,{messageId:"creation-stream",children:e.jsx(O,{name:"创作助手",footer:"正在回复…",children:d})})]},a.currentSession?.id),e.jsxs("div",{className:"flex flex-col p-4 border-t gap-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[r==="description_confirming"&&e.jsxs(e.Fragment,{children:[e.jsxs(f,{type:"button",size:"sm",onClick:N,disabled:p,children:[e.jsx(D,{"data-icon":"inline-start"}),"确认并生成挑战卡"]}),e.jsxs(f,{type:"button",size:"sm",variant:"outline",onClick:C,disabled:p,children:[e.jsx(P,{"data-icon":"inline-start"}),"重新生成设计"]})]}),(r==="interview_waiting"||r==="idle")&&l.length>2&&e.jsxs(f,{type:"button",size:"sm",variant:"secondary",onClick:N,disabled:p,children:[e.jsx(T,{"data-icon":"inline-start"}),"立即生成挑战卡"]})]}),e.jsx(W,{draft:h,onRestore:o,text:g.failure,onDismiss:g.dismiss}),e.jsxs(Z,{children:[e.jsx(ee,{"aria-label":"创作要求",value:h,onChange:s=>o(s.target.value),onKeyDown:w,placeholder:m.placeholder,disabled:!m.inputEnabled||p,className:"min-h-[60px] max-h-[120px] resize-none"}),e.jsx(te,{align:"block-end",className:"justify-end",children:e.jsx(f,{"aria-label":"发送消息",type:"button",size:"icon",onClick:x,disabled:!m.inputEnabled||p||!h.trim(),children:e.jsx(ge,{"data-icon":"inline-start"})})})]})]})]})}function k({label:n,value:a,multiline:c=!1,onChange:C}){const[N,S]=u.useState(!1),[v,p]=u.useState(a),d=()=>{C(v),S(!1)},h=()=>{p(a),S(!1)};return N?e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:n}),c?e.jsx(ae,{"aria-label":n,value:v,onChange:o=>p(o.target.value),className:"min-h-[60px]",autoFocus:!0}):e.jsx(se,{"aria-label":n,type:"text",value:v,onChange:o=>p(o.target.value),className:"w-full text-sm border rounded px-2 py-1 bg-background",autoFocus:!0}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx(f,{type:"button",size:"sm",variant:"ghost",onClick:d,children:"保存"}),e.jsx(f,{type:"button",size:"sm",variant:"ghost",onClick:h,children:"取消"})]})]}):e.jsxs("div",{className:"cursor-pointer hover:bg-muted/50 rounded p-1 -m-1 transition-colors",onClick:()=>{p(a),S(!0)},children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:n}),e.jsx("p",{className:re("text-sm",c?"whitespace-pre-wrap line-clamp-3":"truncate"),children:a||e.jsx("span",{className:"text-muted-foreground italic",children:"点击编辑"})})]})}function pt(){return e.jsx(Ie,{})}export{pt as component};
